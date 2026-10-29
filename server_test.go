package main

import (
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func newTestServer(t *testing.T) *server {
	t.Helper()
	root := t.TempDir()
	if err := os.WriteFile(filepath.Join(root, "index.html"), []byte("<h1>ok</h1>"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(root, "app.js"), []byte("console.log('ok');"), 0o644); err != nil {
		t.Fatal(err)
	}
	return &server{root: root}
}

func TestStaticFiles(t *testing.T) {
	s := newTestServer(t)

	tests := []struct {
		name       string
		path       string
		wantStatus int
		wantType   string
		wantBody   string
	}{
		{"index", "/", http.StatusOK, "text/html; charset=utf-8", "<h1>ok</h1>"},
		{"javascript", "/app.js", http.StatusOK, "text/javascript; charset=utf-8", "console.log"},
		{"missing", "/missing.html", http.StatusNotFound, "text/html; charset=utf-8", "404"},
		{"disallowed extension", "/data.txt", http.StatusNotFound, "text/html; charset=utf-8", "404"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			rec := httptest.NewRecorder()
			s.route(rec, httptest.NewRequest(http.MethodGet, tt.path, nil))

			if rec.Code != tt.wantStatus {
				t.Fatalf("status = %d, want %d", rec.Code, tt.wantStatus)
			}
			if got := rec.Header().Get("Content-Type"); got != tt.wantType {
				t.Fatalf("content type = %q, want %q", got, tt.wantType)
			}
			if body := rec.Body.String(); !strings.Contains(body, tt.wantBody) {
				t.Fatalf("body = %q, want it to contain %q", body, tt.wantBody)
			}
		})
	}
}

func TestStaticPathTraversalIsRejected(t *testing.T) {
	s := newTestServer(t)
	secret := filepath.Join(filepath.Dir(s.root), "secret.txt")
	if err := os.WriteFile(secret, []byte("secret"), 0o644); err != nil {
		t.Fatal(err)
	}

	rec := httptest.NewRecorder()
	s.route(rec, httptest.NewRequest(http.MethodGet, "/../secret.txt", nil))

	if rec.Code == http.StatusOK {
		t.Fatalf("path traversal was served: %q", rec.Body.String())
	}
}

func TestValidationErrors(t *testing.T) {
	s := newTestServer(t)

	tests := []struct {
		name string
		path string
		want string
	}{
		{"proxy without path", "/proxy", "path parameter is required"},
		{"geocode without q", "/api/geocode", "q parameter is required"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			rec := httptest.NewRecorder()
			s.route(rec, httptest.NewRequest(http.MethodGet, tt.path, nil))

			if rec.Code != http.StatusBadRequest {
				t.Fatalf("status = %d, want %d", rec.Code, http.StatusBadRequest)
			}
			if body := rec.Body.String(); !strings.Contains(body, tt.want) {
				t.Fatalf("body = %q, want it to contain %q", body, tt.want)
			}
		})
	}
}

func TestNonGetMethodRejected(t *testing.T) {
	s := newTestServer(t)
	rec := httptest.NewRecorder()
	s.route(rec, httptest.NewRequest(http.MethodPost, "/", nil))

	if rec.Code != http.StatusMethodNotAllowed {
		t.Fatalf("status = %d, want %d", rec.Code, http.StatusMethodNotAllowed)
	}
}
