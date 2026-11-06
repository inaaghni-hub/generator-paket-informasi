#!/usr/bin/env bash
# Script peluncur SIPIT - Generator Paket Informasi Terseleksi
cd "$(dirname "$0")" || exit 1
PORT=8088

echo "Menjalankan aplikasi SIPIT di port $PORT..."
python3 server.py $PORT
