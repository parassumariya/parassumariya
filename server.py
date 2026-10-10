import http.server
import socketserver
import os
import sys

PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching during local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        if path.endswith('.html'):
            return 'text/html'
        if path.endswith('.jpg') or path.endswith('.jpeg'):
            return 'image/jpeg'
        if path.endswith('.png'):
            return 'image/png'
        if path.endswith('.svg'):
            return 'image/svg+xml'
        return super().guess_type(path)

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Allow immediate address reuse
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"GitBrand Studio is running at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        sys.exit(0)
