/**
 * ============================================================================
 * SIPIT - Skrip Mailmerge Diseminasi Paket Informasi Terseleksi (Google Apps Script)
 * ============================================================================
 * 
 * Petunjuk Penggunaan:
 * 1. Buka Google Spreadsheet rekap kerja tim.
 * 2. Buat 2 sheet dengan nama persis: "Penerima" dan "Bahan_Bacaan".
 * 3. Buka menu Extensions > Apps Script.
 * 4. Hapus semua kode default, lalu tempelkan (paste) kode ini seluruhnya.
 * 5. Klik tombol Save (ikon disket) dan beri nama proyek, misal "SIPIT Mailmerge".
 * 6. Kembali ke Google Spreadsheet lalu refresh browser (F5).
 * 7. Menu baru "📚 SIPIT Diseminasi" akan muncul di bilah atas spreadsheet.
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("📚 SIPIT Diseminasi")
    .addItem("1. Buat Draft di Gmail (Uji Coba)", "buatDraftGmail")
    .addItem("2. Kirim Email Langsung ke Pemustaka", "kirimEmailDiseminasi")
    .addToUi();
}

function buatDraftGmail() {
  prosesDiseminasi(true);
}

function kirimEmailDiseminasi() {
  const ui = SpreadsheetApp.getUi();
  const resp = ui.alert(
    "Konfirmasi Pengiriman",
    "Apakah Anda yakin ingin mengirim email diseminasi paket informasi ke semua pemustaka yang berstatus belum terkirim?",
    ui.ButtonSet.YES_NO
  );
  if (resp === ui.Button.YES) {
    prosesDiseminasi(false);
  }
}

function prosesDiseminasi(isDraftMode) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetPenerima = ss.getSheetByName("Penerima");
  const sheetBacaan = ss.getSheetByName("Bahan_Bacaan");

  if (!sheetPenerima || !sheetBacaan) {
    SpreadsheetApp.getUi().alert("Error: Pastikan nama sheet adalah 'Penerima' dan 'Bahan_Bacaan'");
    return;
  }

  const dataPenerima = sheetPenerima.getDataRange().getValues();
  const dataBacaan = sheetBacaan.getDataRange().getValues();

  // Indexing Bahan Bacaan berdasarkan kunci: SUBJEK_EDISI
  const katalog = {};
  for (let i = 1; i < dataBacaan.length; i++) {
    const row = dataBacaan[i];
    const subjek = String(row[0]).trim().toLowerCase();
    const edisi = String(row[1]).trim().toLowerCase();
    const key = subjek + "_" + edisi;

    if (!katalog[key]) {
      katalog[key] = { jurnals: [], bukus: [] };
    }

    const item = {
      tipe: String(row[2]).trim().toLowerCase(),
      judul: row[3],
      penulis: row[4],
      meta: row[5],
      abstrak: row[6],
      link: row[7],
      urutan: Number(row[8]) || 99
    };

    if (item.tipe.includes("jurnal") || item.tipe.includes("artikel")) {
      katalog[key].jurnals.push(item);
    } else {
      katalog[key].bukus.push(item);
    }
  }

  // Urutkan item berdasarkan urutan nomor
  Object.keys(katalog).forEach(k => {
    katalog[k].jurnals.sort((a, b) => a.urutan - b.urutan);
    katalog[k].bukus.sort((a, b) => a.urutan - b.urutan);
  });

  let counter = 0;
  for (let i = 1; i < dataPenerima.length; i++) {
    const row = dataPenerima[i];
    const nama = row[1];
    const email = row[2];
    const subjek = row[3];
    const edisi = row[4];
    const batasan = row[5];
    const sumber = row[6] || "e-Resources Perpusnas";
    const status = String(row[8]).trim();

    if (!email || status.toLowerCase() === "terkirim") {
      continue;
    }

    const key = String(subjek).trim().toLowerCase() + "_" + String(edisi).trim().toLowerCase();
    const koleksi = katalog[key] || { jurnals: [], bukus: [] };

    const subjectLine = "Layanan Diseminasi Paket Informasi Terseleksi: " + edisi + " - Subjek " + subjek;
    const bodyHtml = susunHtmlPaket({
      nama: nama,
      subjek: subjek,
      edisi: edisi,
      batasan: batasan,
      sumber: sumber,
      jurnals: koleksi.jurnals,
      bukus: koleksi.bukus
    });

    if (isDraftMode) {
      GmailApp.createDraft(email, subjectLine, "", { htmlBody: bodyHtml });
      sheetPenerima.getRange(i + 1, 9).setValue("Draft Dibuat");
    } else {
      GmailApp.sendEmail(email, subjectLine, "", {
        htmlBody: bodyHtml,
        name: "Sahabat Perpusnas"
      });
      sheetPenerima.getRange(i + 1, 9).setValue("Terkirim");
      sheetPenerima.getRange(i + 1, 10).setValue(new Date());
    }
    counter++;
  }

  SpreadsheetApp.getUi().alert(
    isDraftMode 
      ? `Berhasil membuat ${counter} Draft email di Gmail.` 
      : `Berhasil mengirim ${counter} email ke pemustaka!`
  );
}

function susunHtmlPaket(data) {
  let jurnalsHtml = "";
  if (data.jurnals && data.jurnals.length > 0) {
    jurnalsHtml = "<h3 style='color:#1e3a8a; border-bottom:2px solid #cbd5e1; padding-bottom:6px; margin-top:28px; font-family:Arial,sans-serif;'>Artikel Jurnal</h3>";
    data.jurnals.forEach(j => {
      jurnalsHtml += `
        <div style="margin-bottom:22px; padding-bottom:14px; border-bottom:1px dashed #e2e8f0;">
          <h4 style="margin:0 0 5px 0; color:#0f172a; font-size:16px; font-family:Georgia,serif;">${escapeHtml(j.judul)}</h4>
          <p style="margin:0 0 3px 0; font-size:14px; font-weight:bold; color:#334155;">Oleh: ${escapeHtml(j.penulis)}</p>
          <p style="margin:0 0 7px 0; font-size:13px; font-weight:bold; color:#64748b;">${escapeHtml(j.meta)}</p>
          <p style="margin:0 0 8px 0; font-size:14px; line-height:1.6; text-align:justify; color:#334155;">${escapeHtml(j.abstrak)}</p>
          ${j.link ? `<p style="margin:0; font-size:13px;"><strong>Tautan <em>Fulltext</em>:</strong> <a href="${escapeHtml(j.link)}" style="color:#0284c7; text-decoration:underline;" target="_blank">${escapeHtml(j.link)}</a></p>` : ''}
        </div>
      `;
    });
  }

  let bukusHtml = "";
  if (data.bukus && data.bukus.length > 0) {
    bukusHtml = "<h3 style='color:#1e3a8a; border-bottom:2px solid #cbd5e1; padding-bottom:6px; margin-top:28px; font-family:Arial,sans-serif;'>Koleksi Buku</h3>";
    data.bukus.forEach(b => {
      bukusHtml += `
        <div style="margin-bottom:22px; padding-bottom:14px; border-bottom:1px dashed #e2e8f0;">
          <h4 style="margin:0 0 5px 0; color:#0f172a; font-size:16px; font-family:Georgia,serif;">${escapeHtml(b.judul)}</h4>
          <p style="margin:0 0 3px 0; font-size:14px; font-weight:bold; color:#334155;">Oleh: ${escapeHtml(b.penulis)}</p>
          <p style="margin:0 0 7px 0; font-size:13px; font-weight:bold; color:#64748b;">${escapeHtml(b.meta)}</p>
          <p style="margin:0 0 8px 0; font-size:14px; line-height:1.6; text-align:justify; color:#334155;">${escapeHtml(b.abstrak)}</p>
          ${b.link ? `<p style="margin:0; font-size:13px;"><strong>Lokasi Koleksi:</strong> <a href="${escapeHtml(b.link)}" style="color:#0284c7; text-decoration:underline;" target="_blank">${escapeHtml(b.link)}</a></p>` : ''}
        </div>
      `;
    });
  }

  return `
    <div style="max-width:680px; margin:0 auto; background:#ffffff; padding:32px; font-family:Georgia,serif; line-height:1.6; color:#1e293b; border:1px solid #e2e8f0;">
      <div style="border-bottom:3px double #1e3a8a; padding-bottom:12px; margin-bottom:18px;">
        <h1 style="color:#1e3a8a; font-size:23px; margin:0 0 6px 0;">Diseminasi Paket Informasi Terseleksi</h1>
        <div style="display:inline-block; background-color:#f1f5f9; border-left:4px solid #1e3a8a; padding:4px 10px; font-size:14px; font-weight:bold; color:#0f172a;">
          Subjek: ${escapeHtml(data.subjek)}
        </div>
      </div>

      <div style="font-size:15px; margin-bottom:14px;">
        Hai <strong>${escapeHtml(data.nama)}</strong>, Ini adalah layanan Diseminasi Informasi Terseleksi oleh Kelompok Layanan Kemas Ulang dan Diseminasi Informasi, Pusat Jasa Informasi Perpustakaan dan Pengelolaan Naskah Nusantara, Perpustakaan Nasional RI.
      </div>

      <div style="background-color:#f8fafc; border-left:3px solid #cbd5e1; padding:10px 14px; font-size:13px; font-style:italic; color:#475569; margin-bottom:18px;">
        Kami meninjau daftar penerima layanan diseminasi Informasi terseleksi setiap 3 bulan sejak paket informasi pertama dikirim. Jika sahabat dalam 3 bulan belum pernah memberi tanggapan maka tidak akan ada kiriman paket informasi terseleksi di bulan berikutnya. Apabila sahabat ingin tetap menjadi penerima layanan ini, silakan mengisi tanggapan di bawah ini.
      </div>

      <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:16px; margin-bottom:24px;">
        <strong style="color:#1e3a8a; font-family:Arial,sans-serif; display:block; margin-bottom:6px;">Kata Kunci</strong>
        <p style="margin:0 0 8px 0; font-size:14px;">${escapeHtml(data.batasan)}</p>
        <p style="margin:0; font-size:13px; color:#475569;">Sumber pencarian penelusuran yang kami gunakan adalah <strong>${escapeHtml(data.sumber)}</strong>.</p>
      </div>

      ${jurnalsHtml}
      ${bukusHtml}

      <div style="background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; padding:18px; margin:26px 0; text-align:center;">
        <h4 style="margin:0 0 6px 0; color:#1e3a8a; font-family:Arial,sans-serif;">Tanggapan</h4>
        <p style="margin:0 0 12px 0; font-size:13px; font-style:italic; color:#334155;">Berikan tanggapan sahabat agar kami bisa selalu memberi yang terbaik dalam menyajikan informasi terseleksi yang relevan dengan fokus atau minat sahabat.</p>
        <a href="https://forms.gle/tanggapan" style="background-color:#1e3a8a; color:#ffffff; text-decoration:none; padding:8px 18px; border-radius:4px; font-size:13px; font-weight:bold; display:inline-block;">Masukan Tanggapan</a>
      </div>

      <div style="margin:24px 0; font-size:15px;">
        <p style="margin-bottom:14px;">Demikian informasi terseleksi subjek <strong>${escapeHtml(data.subjek)}</strong> untuk edisi bulan ini, semoga bisa membantu Sahabat dalam menambah referensi untuk bahan bacaan.</p>
        <div>Salam Literasi</div>
        <div style="font-weight:bold; color:#0f172a;">Pustakawan Layanan Kemas Ulang Informasi</div>
        <div style="color:#64748b; font-style:italic; font-size:13px;">Pusat Jasa Informasi Perpustakaan dan Pengelolaan Naskah Nusantara</div>
      </div>

      <div style="background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:18px; margin:26px 0; text-align:center;">
        <h4 style="margin:0 0 6px 0; color:#065f46; font-family:Arial,sans-serif;">Tanya Pustakawan</h4>
        <p style="margin:0 0 12px 0; font-size:13px; color:#334155;">Apabila Sahabat ingin bertanya atau meminta bantuan kepada pustakawan Perpusnas terkait penelusuran data/informasi/literatur yang lebih kompleks, Sahabat dapat bertanya di layanan Tanya Pustakawan.</p>
        <a href="https://tanyapustakawan.perpusnas.go.id" style="background-color:#059669; color:#ffffff; text-decoration:none; padding:8px 18px; border-radius:4px; font-size:13px; font-weight:bold; display:inline-block;">Tanya Pustakawan</a>
      </div>

      <div style="border-top:1px solid #e2e8f0; padding-top:16px; margin-top:24px; font-size:12px; color:#64748b; text-align:center;">
        <p style="margin:0 0 4px 0;"><em>Hak Cipta © Perpustakaan Nasional RI, Seluruhnya dilindungi Hak Cipta.</em></p>
        <p style="margin:0 0 4px 0;"><strong>Alamat email Kami:</strong> sahabat_perpusnas@mail.perpusnas.go.id</p>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
