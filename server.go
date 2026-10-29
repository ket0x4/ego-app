// EGO Bus Tracker - simple proxy and static file server.
//
// This is a drop-in Go replacement for the previous Python server (server.py);
// it has no external dependencies.
package main

import (
	"context"
	"crypto/tls"
	"encoding/json"
	"flag"
	"io"
	"log"
	"mime"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"path/filepath"
	"strconv"
	"strings"
	"syscall"
	"time"
)

const (
	egoAPIHost  = "https://egocptsrvand.ego.gov.tr"
	photonAPI   = "https://photon.komoot.io/api/"
	userAgent   = "EGO-Bus-Tracker/1.0 (Ankara bus tracking demo)"
	defaultAddr = ":5000"
)

var allowedExtensions = map[string]bool{
	".html": true, ".css": true, ".js": true, ".json": true, ".svg": true,
	".png": true, ".jpg": true, ".jpeg": true, ".webp": true, ".ico": true,
	".woff": true, ".woff2": true,
}

type server struct {
	root        string
	proxyClient *http.Client
	geoClient   *http.Client
}

func main() {
	addr := flag.String("addr", defaultAddr, "address to listen on (e.g. :5000)")
	root := flag.String("dir", ".", "directory containing static files")
	flag.Parse()

	rootAbs, err := filepath.Abs(*root)
	if err != nil {
		log.Fatalf("failed to resolve static directory: %v", err)
	}

	// TLS verification is disabled because the EGO API certificate cannot be verified.
	// #nosec G402 -- intentionally disabled.
	transport := &http.Transport{
		Proxy:              http.ProxyFromEnvironment,
		ForceAttemptHTTP2:  true,
		DisableCompression: true,
		TLSClientConfig: &tls.Config{
			InsecureSkipVerify: true,
		},
	}

	s := &server{
		root:        rootAbs,
		proxyClient: &http.Client{Transport: transport, Timeout: 30 * time.Second},
		geoClient:   &http.Client{Transport: transport, Timeout: 20 * time.Second},
	}

	httpServer := &http.Server{
		Addr:              *addr,
		Handler:           s.loggingMiddleware(http.HandlerFunc(s.route)),
		ReadHeaderTimeout: 10 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	go func() {
		<-ctx.Done()
		log.Println("Shutting down server...")
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		_ = httpServer.Shutdown(shutdownCtx)
	}()

	log.Printf("Server running on http://localhost%s", *addr)
	if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("server error: %v", err)
	}
}

func (s *server) loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s - %s %s", r.RemoteAddr, r.Method, r.RequestURI)
		next.ServeHTTP(w, r)
	})
}

func (s *server) route(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.Header().Set("Allow", http.MethodGet)
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "method not allowed"})
		return
	}

	switch r.URL.Path {
	case "/api/geocode":
		s.handleGeocode(w, r)
	case "/proxy":
		s.handleProxy(w, r)
	default:
		s.handleStatic(w, r)
	}
}

// ---------- Helpers ----------

func writeBytes(w http.ResponseWriter, status int, body []byte, contentType string) {
	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Content-Length", strconv.Itoa(len(body)))
	w.WriteHeader(status)
	_, _ = w.Write(body)
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	body, err := json.Marshal(payload)
	if err != nil {
		body = []byte(`{"error":"internal server error"}`)
		status = http.StatusInternalServerError
	}
	writeBytes(w, status, body, "application/json; charset=utf-8")
}

func notFound(w http.ResponseWriter) {
	writeBytes(w, http.StatusNotFound, []byte("<h1>404 Not Found</h1>"), "text/html; charset=utf-8")
}

// ---------- Static files ----------

func (s *server) handleStatic(w http.ResponseWriter, r *http.Request) {
	relPath := r.URL.Path
	if relPath == "/" {
		relPath = "index.html"
	} else {
		relPath = strings.TrimLeft(relPath, "/")
	}

	// Only allow safe static file extensions.
	if !allowedExtensions[strings.ToLower(filepath.Ext(relPath))] {
		notFound(w)
		return
	}
	for _, part := range strings.Split(relPath, "/") {
		if strings.HasPrefix(part, ".") {
			notFound(w)
			return
		}
	}

	candidate := filepath.Join(s.root, filepath.FromSlash(relPath))
	resolved, err := filepath.EvalSymlinks(candidate)
	if err != nil {
		notFound(w)
		return
	}

	// Prevent escaping the directory (path traversal protection).
	if resolved != s.root && !strings.HasPrefix(resolved, s.root+string(filepath.Separator)) {
		writeJSON(w, http.StatusForbidden, map[string]string{"error": "forbidden"})
		return
	}

	info, err := os.Stat(resolved)
	if err != nil || !info.Mode().IsRegular() {
		notFound(w)
		return
	}

	body, err := os.ReadFile(resolved)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "failed to read file"})
		return
	}

	writeBytes(w, http.StatusOK, body, contentTypeFor(resolved))
}

func contentTypeFor(path string) string {
	contentType := mime.TypeByExtension(strings.ToLower(filepath.Ext(path)))
	if contentType == "" {
		return "application/octet-stream"
	}

	base := contentType
	if i := strings.IndexByte(base, ';'); i >= 0 {
		base = base[:i]
	}
	base = strings.TrimSpace(base)

	if strings.HasPrefix(base, "text/") || base == "application/javascript" || base == "application/json" {
		return base + "; charset=utf-8"
	}
	return contentType
}

// ---------- EGO API proxy ----------

func (s *server) handleProxy(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	pathParam := strings.TrimSpace(query.Get("path"))
	if pathParam == "" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "path parameter is required"})
		return
	}

	// The path parameter was already decoded during query parsing; do not unquote it again.
	apiPath := pathParam
	params := url.Values{}
	if strings.Contains(pathParam, "?") {
		parsedPath, err := url.Parse(pathParam)
		if err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": err.Error()})
			return
		}
		apiPath = parsedPath.Path
		if parsedQuery, err := url.ParseQuery(parsedPath.RawQuery); err == nil {
			params = parsedQuery
		}
	}

	// Do not forward the "path" parameter to EGO; only real API parameters are sent.
	for key, values := range query {
		if key == "path" {
			continue
		}
		if _, exists := params[key]; !exists {
			params[key] = values
		}
	}

	target := url.URL{
		Scheme:   "https",
		Host:     strings.TrimPrefix(egoAPIHost, "https://"),
		Path:     apiPath,
		RawQuery: params.Encode(),
	}

	req, err := http.NewRequestWithContext(r.Context(), http.MethodGet, target.String(), nil)
	if err != nil {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": err.Error()})
		return
	}
	req.Header.Set("User-Agent", userAgent)

	resp, err := s.proxyClient.Do(req)
	if err != nil {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	// Python urllib treated 4xx/5xx responses as errors, so return 502 here too.
	if resp.StatusCode >= http.StatusBadRequest {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": resp.Status})
		return
	}

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": err.Error()})
		return
	}

	contentType := resp.Header.Get("Content-Type")
	if contentType == "" {
		contentType = "application/json; charset=utf-8"
	}
	writeBytes(w, http.StatusOK, data, contentType)
}

// ---------- Geocoding (Photon / OpenStreetMap) ----------

func (s *server) handleGeocode(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	q := strings.TrimSpace(query.Get("q"))
	if q == "" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "q parameter is required"})
		return
	}

	limit := 10
	if raw := strings.TrimSpace(query.Get("limit")); raw != "" {
		if parsed, err := strconv.Atoi(raw); err == nil {
			limit = parsed
		}
	}
	if limit < 1 {
		limit = 1
	}
	if limit > 20 {
		limit = 20
	}

	params := url.Values{}
	params.Set("q", q)
	params.Set("limit", strconv.Itoa(limit))
	target := photonAPI + "?" + params.Encode()

	req, err := http.NewRequestWithContext(r.Context(), http.MethodGet, target, nil)
	if err != nil {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": err.Error()})
		return
	}
	req.Header.Set("User-Agent", userAgent)

	resp, err := s.geoClient.Do(req)
	if err != nil {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		writeJSON(w, http.StatusBadGateway, map[string]string{"error": err.Error()})
		return
	}

	writeBytes(w, http.StatusOK, data, "application/json; charset=utf-8")
}
