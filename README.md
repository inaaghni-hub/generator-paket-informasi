# SIPIT - Generator Layanan Paket Informasi Terseleksi

Aplikasi web-based untuk menyusun, mengelola, dan meng-generate **Paket Informasi Terseleksi (Diseminasi Informasi)** yang disajikan oleh pustakawan/layanan perpustakaan kepada pemustaka, dengan format keluaran yang presisi sesuai standar Layanan Diseminasi Paket Informasi Terseleksi Perpustakaan Nasional RI (seperti contoh edisi Agustus 2026).

---

## 🌟 Fitur Utama

1. **Struktur Konten Sesuai Standar Layanan Perpustakaan**:
   - **Informasi Umum & Identitas Layanan**: Instansi induk, kelompok layanan, subjek/topik, periode/edisi, nama penerima/pemustaka, sapaan personal, dan klausul review berkala (3 bulan).
   - **Batasan Penelusuran & Kata Kunci**: Ruang lingkup topik bernomor `(1), (2), (3)...` dan sumber basis data penelusuran (e-Resources Perpusnas, Scopus, Google Scholar, Garuda, dll).
   - **Bahan Bacaan Artikel Jurnal**: Judul artikel, penulis, metadata terbitan (Tahun, Nama Jurnal, Vol/No), abstrak/ringkasan isi, serta tautan langsung *fulltext*.
   - **Bahan Bacaan Koleksi Buku**: Judul buku, penulis/editor, metadata penerbitan (Kota: Penerbit, Tahun), sinopsis/deskripsi isi, serta tautan lokasi koleksi atau *call number*.
   - **Interaktivitas Pemustaka**: Form tanggapan/umpan balik, penutup & salam literasi pustakawan, portal Tanya Pustakawan, email kontak resmi, serta tautan berhenti langganan.

2. **Pengisian Cepat (Quick Import / Autofill)**:
   - **DOI Lookup**: Cukup masukkan DOI artikel jurnal (misal `10.1016/...`), aplikasi otomatis menarik judul, penulis, jurnal, tahun, dan abstrak via Crossref API publik gratis.
   - **ISBN Lookup**: Cukup masukkan nomor ISBN buku (misal `978...`), aplikasi otomatis menarik metadata dan sinopsis buku via Google Books / OpenLibrary.

3. **Pratinjau Langsung (Real-Time Live Preview)**:
   - Semua input yang diketik pada editor panel kiri langsung terlihat hasilnya di panel kanan secara interaktif (*WYSIWYG*).
   - Mode baca fleksibel (tampilan dokumen desktop dan mode ringkas layar ponsel).

4. **Multi-Format Ekspor & Distribusi**:
   - 🖨️ **Cetak / Unduh PDF**: Dilengkapi stylesheet `@media print` presisi tanpa merusak tata letak, membagi halaman secara rapi (*page-break-inside: avoid* per artikel/buku).
   - 📋 **Salin Template Email (Rich Text & Inline Style)**: Sekali klik, siap di-*paste* langsung ke Gmail, Outlook, Thunderbird, atau Mailchimp dengan styling yang tetap terjaga utuh.
   - 📥 **Unduh Berkas HTML Mandiri**: Berkas `.html` siap pakai yang dapat dikirim langsung ke pemustaka.
   - 💾 **Simpan / Buka Proyek (JSON)**: Simpan draf ke berkas JSON dan muat kembali kapan saja, serta fitur penyimpanan otomatis ke *local storage* peramban.
   - ⚡ **Muat Contoh Data**: Dilengkapi tombol untuk memuat template persis seperti contoh PDF edisi Agustus 2026 (topik *Artificial Intelligence*).

---

## 🚀 Cara Menjalankan

### Cara 1: Menggunakan Web Server Lokal (Direkomendasikan)
Masuk ke direktori aplikasi dan jalankan script peluncur:
```bash
cd /home/aghni/projects/generator-paket-informasi
./start.sh
```
Atau jalankan langsung dengan python:
```bash
python3 server.py 8088
```
Buka peramban (browser) dan akses: **http://localhost:8088**

### Cara 2: Buka Langsung Berkas HTML (Tanpa Server)
Aplikasi ini dirancang *standalone*, sehingga Anda juga dapat langsung membuka berkas:
```text
/home/aghni/projects/generator-paket-informasi/index.html
```
di browser mana saja (Google Chrome, Mozilla Firefox, Edge, Safari).

---

## 📂 Struktur Berkas
- `index.html`: Kerangka antarmuka pengguna (Editor Form Tabbed + Live Preview Pane).
- `style.css`: Desain antarmuka responsif, tipografi dokumen resmi, dan aturan cetak dokumen `@media print`.
- `app.js`: Logika interaktif, reaktivitas data state, integrasi API Crossref & ISBN, template engine email inline, dan manajemen draf JSON.
- `server.py`: Server HTTP Python lokal dengan dukungan CORS.
- `start.sh`: Skrip jalan cepat.
