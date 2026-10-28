#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request
import urllib.parse
import ssl
import os

# Disable SSL verification for EGO API
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

EGO_API_HOST = 'https://egocptsrvand.ego.gov.tr'

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)
        
        # Serve static files
        if path in ['/', '/index.html']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            with open('index.html', 'rb') as f:
                self.wfile.write(f.read())
            return
        
        if path in ['/.gitkeep']:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            with open('index.html', 'rb') as f:
                self.wfile.write(f.read())
            return
        
        # Serve JS
        if path == '/app.js':
            self.send_response(200)
            self.send_header('Content-Type', 'application/javascript')
            self.end_headers()
            with open('app.js', 'rb') as f:
                self.wfile.write(f.read())
            return
        
        # Serve CSS
        if path == '/styles.css':
            self.send_response(200)
            self.send_header('Content-Type', 'text/css')
            self.end_headers()
            with open('styles.css', 'rb') as f:
                self.wfile.write(f.read())
            return
        
        # Serve other static files
        if path.startswith('/') and os.path.exists(path[1:]):
            self.send_response(200)
            with open(path[1:], 'rb') as f:
                content = f.read()
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                if path.endswith('.css'):
                    self.send_header('Content-Type', 'text/css')
                elif path.endswith('.js'):
                    self.send_header('Content-Type', 'application/javascript')
                self.end_headers()
                self.wfile.write(content)
            return
        
        # Proxy endpoint
        if path == '/proxy':
            path_param = query.get('path', [''])[0]
            
            if not path_param:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"error": "path parameter is required"}')
                return
            
            # URL decode the path parameter
            try:
                path_param = urllib.parse.unquote(path_param)
            except:
                pass
            
            # Build additional query string from other params
            additional_query = urllib.parse.urlencode(query, doseq=True)
            
            # The path_param should be the full API path including query string
            # Example: /hibrit/act.asp?FNC=Hatlar&LAN=tr
            if '?' in path_param:
                # Already has query string, append additional params
                parsed_path = urllib.parse.urlparse(path_param)
                # Combine query strings
                combined_query = parsed_path.query + '&' + additional_query
                url = f"{EGO_API_HOST}{parsed_path.path}?{combined_query}"
            else:
                # No query string in path_param, use additional query
                if additional_query:
                    url = f"{EGO_API_HOST}{path_param}?{additional_query}"
                else:
                    url = f"{EGO_API_HOST}{path_param}"
            
            try:
                # Make the request
                req = urllib.request.Request(url)
                req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
                
                with urllib.request.urlopen(req, context=ssl_context, timeout=30) as response:
                    data = response.read().decode('utf-8')
                    
                    # Return raw data as text, not wrapped in JSON
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(data.encode('utf-8'))
                    
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(f'{{"error": "{str(e)}"}}'.encode('utf-8'))
            return
        
        # Not found
        self.send_response(404)
        self.send_header('Content-Type', 'text/html')
        self.end_headers()
        self.wfile.write(b'<h1>404 Not Found</h1>')

    def log_message(self, format, *args):
        print(f"{self.address_string()} - {format % args}")

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 5000), RequestHandler)
    print('Server running on http://localhost:5000')
    server.serve_forever()
