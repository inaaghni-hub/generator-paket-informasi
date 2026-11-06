#!/usr/bin/env python3
"""
Server lokal untuk SIPIT (Generator Layanan Paket Informasi Terseleksi).
Jalankan dengan: python3 server.py [port]
"""

import http.server
import socketserver
import os
import sys
import webbrowser

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8088
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Header CORS & No-Cache untuk kemudahan pengembangan
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 65)
        print("  SIPIT - Generator Layanan Paket Informasi Terseleksi")
        print(f"  Server berjalan di : {url}")
        print(f"  Direktori dokumen  : {DIRECTORY}")
        print("  Tekan Ctrl+C untuk menghentikan server")
        print("=" * 65)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer dihentikan.")

if __name__ == "__main__":
    run_server()
