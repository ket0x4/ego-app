#!/usr/bin/env python3
"""EGO Otobüs Takip - basit proxy ve statik dosya sunucusu.

Python standart kütüphanesi ile çalışır, ek bağımlılık gerektirmez.
"""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
import json
import mimetypes
import ssl
import urllib.parse
import urllib.request


BASE_DIR = Path(__file__).resolve().parent

# EGO API SSL sertifikası doğrulanamadığı için doğrulama kapatılır.
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

EGO_API_HOST = 'https://egocptsrvand.ego.gov.tr'
PHOTON_API_URL = 'https://photon.komoot.io/api/'

USER_AGENT = 'EGO-Bus-Tracker/1.0 (Ankara bus tracking demo)'


class RequestHandler(BaseHTTPRequestHandler):
    # ---------- Yardımcılar ----------
    def _send_bytes(self, status, body, content_type):
        self.send_response(status)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self._send_bytes(status, body, 'application/json; charset=utf-8')

    def _serve_static(self, rel_path):
        rel_path = rel_path or 'index.html'

        # Yalnızca güvenli statik dosya uzantılarına izin ver.
        allowed_ext = {'.html', '.css', '.js', '.json', '.svg', '.png', '.jpg',
                       '.jpeg', '.webp', '.ico', '.woff', '.woff2'}
        suffix = Path(rel_path).suffix.lower()
        if suffix not in allowed_ext or any(part.startswith('.') for part in Path(rel_path).parts):
            return False

        candidate = (BASE_DIR / rel_path).resolve()

        # Dizin dışına çıkmayı engelle (path traversal koruması).
        if BASE_DIR != candidate and BASE_DIR not in candidate.parents:
            self._send_json(403, {'error': 'forbidden'})
            return True

        if not candidate.is_file():
            return False

        content_type = mimetypes.guess_type(str(candidate))[0] or 'application/octet-stream'
        if content_type.startswith('text/') or content_type in (
            'application/javascript', 'application/json'
        ):
            content_type += '; charset=utf-8'

        self._send_bytes(200, candidate.read_bytes(), content_type)
        return True

    # ---------- Rotalar ----------
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query, keep_blank_values=True)

        if path == '/api/geocode':
            self._handle_geocode(query)
            return

        if path == '/proxy':
            self._handle_proxy(query)
            return

        # Statik dosyalar
        rel_path = 'index.html' if path == '/' else path.lstrip('/')
        if self._serve_static(rel_path):
            return

        self._send_bytes(404, b'<h1>404 Not Found</h1>', 'text/html; charset=utf-8')

    # ---------- EGO API proxy ----------
    def _handle_proxy(self, query):
        path_param = query.get('path', [''])[0].strip()
        if not path_param:
            self._send_json(400, {'error': 'path parameter is required'})
            return

        # path param parse_qs tarafından zaten çözüldü; tekrar unquote etmiyoruz.
        if '?' in path_param:
            parsed_path = urllib.parse.urlparse(path_param)
            api_path = parsed_path.path
            params = urllib.parse.parse_qs(parsed_path.query, keep_blank_values=True)
        else:
            api_path = path_param
            params = {}

        # "path" parametresini EGO'ya göndermiyoruz, sadece gerçek API parametreleri gider.
        for key, values in query.items():
            if key == 'path':
                continue
            params.setdefault(key, values)

        url = f"{EGO_API_HOST}{api_path}"
        if params:
            url += '?' + urllib.parse.urlencode(params, doseq=True)

        try:
            req = urllib.request.Request(url)
            req.add_header('User-Agent', USER_AGENT)
            with urllib.request.urlopen(req, context=ssl_context, timeout=30) as response:
                data = response.read()
                content_type = response.headers.get('Content-Type', 'application/json; charset=utf-8')
            self._send_bytes(200, data, content_type)
        except Exception as exc:  # noqa: BLE001 - kullanıcıya sade hata dönüyoruz
            self._send_json(502, {'error': str(exc)})

    # ---------- Geocoding (Photon / OpenStreetMap) ----------
    def _handle_geocode(self, query):
        q = query.get('q', [''])[0].strip()
        if not q:
            self._send_json(400, {'error': 'q parameter is required'})
            return

        try:
            limit = int(query.get('limit', ['10'])[0])
        except (TypeError, ValueError):
            limit = 10
        limit = max(1, min(limit, 20))

        url = PHOTON_API_URL + '?' + urllib.parse.urlencode({'q': q, 'limit': limit})
        try:
            req = urllib.request.Request(url)
            req.add_header('User-Agent', USER_AGENT)
            with urllib.request.urlopen(req, context=ssl_context, timeout=20) as response:
                data = response.read()
            self._send_bytes(200, data, 'application/json; charset=utf-8')
        except Exception as exc:  # noqa: BLE001
            self._send_json(502, {'error': str(exc)})

    def log_message(self, fmt, *args):
        print(f"{self.address_string()} - {fmt % args}")


if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', 5000), RequestHandler)
    print('Server running on http://localhost:5000')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nSunucu kapatılıyor...')
    finally:
        server.server_close()
