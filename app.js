/* ==========================================================================
   SIPIT - Generator Paket Informasi Terseleksi (app.js)
   Sistem Pengemas & Pembuat Diseminasi Informasi Terseleksi
   ========================================================================== */

// Data State Utama
let state = {
  instansi: "Kelompok Layanan Kemas Ulang dan Diseminasi Informasi, Pusat Jasa Informasi Perpustakaan dan Pengelolaan Naskah Nusantara",
  induk: "Perpustakaan Nasional RI",
  subjek: "Pendidikan",
  edisi: "Agustus 2026",
  penerimaNama: "Riana Mardina",
  penerimaEmail: "rianamardina2608@gmail.com",
  sapaanTeks: "Hai {{nama}} Ini adalah layanan Diseminasi Informasi Terseleksi oleh Kelompok Layanan Kemas Ulang dan Diseminasi Informasi, Pusat Jasa Informasi Perpustakaan dan Pengelolaan Naskah Nusantara, Perpustakaan Nasional RI.",
  catatanEvaluasi: "Kami meninjau daftar penerima layanan diseminasi Informasi terseleksi setiap 3 bulan sejak paket informasi pertama dikirim. Jika sahabat dalam 3 bulan belum pernah memberi tanggapan maka tidak akan ada kiriman paket informasi terseleksi di bulan berikutnya. Apabila sahabat ingin tetap menjadi penerima layanan ini, silakan mengisi tanggapan di bawah ini.",
  batasanTeks: "Batasan pada penelusuran untuk diseminasi informasi terseleksi bulan ini adalah (1) Penerapan AI untuk layanan perpustakaan perguruan tinggi dan sekolah; layanan perpustakaan baik layanan pemustaka maupun layanan teknis (mis pengadaan koleksi dan pengolahannya). (2) Contoh penerapan AI untuk layanan perpustakaan perguruan tinggi dan sekolah di luar negeri; (3) koneksivitas AI antara layanan pemustaka dan layanan teknis yg diberikan kepada pemustaka.",
  sumberPenelusuran: "e-Resources Perpusnas",
  jurnals: [],
  bukus: [],
  tanggapanTeks: "Berikan tanggapan sahabat agar kami bisa selalu memberi yang terbaik dalam menyajikan informasi terseleksi yang relevan dengan fokus atau minat sahabat.",
  tanggapanLabel: "Masukan Tanggapan",
  tanggapanUrl: "https://forms.gle/sampleFeedbackPerpusnas",
  penutupTeks: "Demikian informasi terseleksi subjek {{subjek}} untuk edisi bulan ini, semoga bisa membantu Sahabat dalam menambah referensi untuk bahan bacaan.",
  salamPenutup: "Salam Literasi",
  pustakawanNama: "Salamun Ababil",
  pustakawanJabatan: "Pustakawan Ahli Pertama",
  tanyaTeks: "Apabila Sahabat ingin bertanya atau meminta bantuan kepada pustakawan Perpusnas terkait penelusuran data/informasi/literatur yang lebih kompleks, Sahabat dapat bertanya di layanan Tanya Pustakawan.",
  tanyaUrl: "https://tanyapustakawan.perpusnas.go.id",
  emailLayanan: "sahabat_perpusnas@mail.perpusnas.go.id",
  copyright: "Hak Cipta © 2026 Perpustakaan Nasional RI, Seluruhnya dilindungi Hak Cipta.",
  unsubUrl: "https://perpusnas.go.id/unsubscribe"
};

// Data Contoh Standar (Presisi dokumen PDF Perpusnas Agustus 2026)
const sampleData = {
  instansi: "Kelompok Layanan Kemas Ulang dan Diseminasi Informasi, Pusat Jasa Informasi Perpustakaan dan Pengelolaan Naskah Nusantara",
  induk: "Perpustakaan Nasional RI",
  subjek: "Pendidikan",
  edisi: "Agustus 2026",
  penerimaNama: "Riana Mardina",
  penerimaEmail: "rianamardina2608@gmail.com",
  sapaanTeks: "Hai {{nama}} Ini adalah layanan Diseminasi Informasi Terseleksi oleh Kelompok Layanan Kemas Ulang dan Diseminasi Informasi, Pusat Jasa Informasi Perpustakaan dan Pengelolaan Naskah Nusantara, Perpustakaan Nasional RI.",
  catatanEvaluasi: "Kami meninjau daftar penerima layanan diseminasi Informasi terseleksi setiap 3 bulan sejak paket informasi pertama dikirim. Jika sahabat dalam 3 bulan belum pernah memberi tanggapan maka tidak akan ada kiriman paket informasi terseleksi di bulan berikutnya. Apabila sahabat ingin tetap menjadi penerima layanan ini, silakan mengisi tanggapan di bawah ini.",
  batasanTeks: "Batasan pada penelusuran untuk diseminasi informasi terseleksi bulan ini adalah (1) Penerapan AI untuk layanan perpustakaan perguruan tinggi dan sekolah; layanan perpustakaan baik layanan pemustaka maupun layanan teknis (mis pengadaan koleksi dan pengolahannya). (2) Contoh penerapan AI untuk layanan perpustakaan perguruan tinggi dan sekolah di luar negeri; (3) koneksivitas AI antara layanan pemustaka dan layanan teknis yg diberikan kepada pemustaka.",
  sumberPenelusuran: "e-Resources Perpusnas",
  jurnals: [
    {
      id: "j1",
      judul: "Pemanfaatan artificial intelligence pada layanan informasi di perpustakaan",
      penulis: "Fegi Sentiana, M. Bisri Mustofa, Siti Wuryan",
      meta: "2024, Pustaka Karya, Vol. 12 No. 2",
      deskripsi: "Salah satu cabang ilmu komputer yang dapat digunakan dalam berbagai hal, salah satunya perpustakaan, adalah kecerdasan buatan atau AI. Penelitian ini bertujuan untuk memberikan pengetahuan yang lebih luas kepada pembaca, khususnya pustakawan, tentang bagaimana memanfaatkan AI untuk memberikan layanan perpustakaan dalam hal peta sebaran bibliometrik dan tren penelitian pada database Scopus dan Google Scholar dengan menggunakan VOSViewer. Pencarian literatur dilakukan secara khusus pada artikel-artikel pada periode 2019-2024. Pencarian awal pada kata kunci pertama menemukan 260 artikel pada database Scopus dan Google Scholar dalam bentuk jurnal, buku, dan prosiding. Setelah dilakukan seleksi berdasarkan jenis artikel untuk jurnal, terpilih 60 artikel. Hasil penelitian yang dilakukan oleh penelitian sebelumnya menunjukkan bahwa ChatbotWIDYA, sebuah perpustakaan CSOnline berbasis AI, bekerja dengan baik; sistem dapat berinteraksi dengan pengguna dan menjawab pertanyaan mereka. Perpustakaan BRIN telah menggunakan Scispace, sebuah platform berbasis kecerdasan buatan yang mempermudah pemahaman artikel ilmiah. Kehadiran Scispace sangat membantu para pustakawan dalam mendapatkan bahan bacaan ilmiah. Karena Scispace tersedia dalam berbagai bahasa, pustakawan dapat lebih mudah menelusuri dan mendapatkan literatur yang sesuai dari berbagai sumber bacaan dan bahasa..",
      link: "https://jurnal.uin-antasari.ac.id/index.php/pustakakarya/article/view/14488"
    },
    {
      id: "j2",
      judul: "Tantangan Adaptasi Kecerdasan Buatan dalam Layanan Perpustakaan Perguruan Tinggi",
      penulis: "Muhammad Farid Wajdi, Moch Isra Hajiri",
      meta: "2024, TIK ILMEU, Vol. 8 No. 2",
      deskripsi: "Kecerdasan Buatan adalah bidang baru yang muncul dalam beberapa dekade terakhir yang terkait dengan ilmu kognitif dan metode komputer khusus yang canggih. Metode tanya jawab sudah familiar bagi kita dan pembelajaran mesin, penambangan data terkait dengannya dan menjadi sinonim. Masa depan berkaitan dengan jaringan saraf dan robotika. Perpustakaan adalah pusat sumber informasi yang selalu berada di garis depan dengan menggunakan teknologi baru yang muncul, baik itu terkait dengan sistem pakar, basis data, perolehan pengetahuan. Sistem klasifikasi telah membantu mengembangkan Semantik, struktur basis data telah mengarah pada penambangan data, pemrosesan bahasa alami, dan lebih lanjut pada teknologi berbasis realitas/virtual. Secara nyata, kita menggunakan kecerdasan buatan sebagai teknologi agen yang digunakan secara bergantian untuk penalaran otomatis, pencarian, chatbot yang digunakan untuk pemrosesan bahasa alami. Teknologi ini di masa depan akan berkembang menjadi kecerdasan buatan yang lebih canggih yang bergerak menuju robotika, hari itu tidak akan lama lagi. Artikel ini merupakan kajian tentang gambaran umum tantangan yang akan dihadapi oleh perpustakaan akademik..",
      link: "https://journal.iaincurup.ac.id/index.php/TI/article/view/10901"
    },
    {
      id: "j3",
      judul: "Fenomena Penggunaan Generative AI dalam Perilaku Pencarian Informasi Praktisi Teknologi",
      penulis: "Fathe Hibatulwafi, Laksmi",
      meta: "2024, Media Pustakawan, Vol. 31 No. 2",
      deskripsi: "The emergence of generative AI technology which has provided new experiences for technology practitioners in searching for information to obtain professional information needs and complete their tasks, needs to be studied further as an effort to anticipate various impacts and potentials that may occur. Therefore, research is needed that identifies the use of generative AI technology in the information behavior patterns of technology practitioners at the start-up company PT XYZ. This research used qualitative with phenomenological approach. Based on the experiences of the three informants when using generative AI to search for information, the informants had different needs, but the informants had positive experiences in using generative AI to search for information, so that it could be an alternative solution to the needs and problems they experienced. Informants have varied experiences in searching for information, and in some contexts there are even experiences of using similar strategies. Several strategies from the informants' search experiences consisted of using simple prompts, using prompts that were supported by additional context, and using prompts that contained scenarios and narratives. The information seeking behavior pattern of technology practitioners who uses generative AI in PT XYZ were identified as very varied based on their task and job functions, both in terms of needs and the search strategies they used..",
      link: "https://ejournal.perpusnas.go.id/mp/article/view/5222/1409"
    },
    {
      id: "j4",
      judul: "Transformasi Literasi Informasi Di Perpustakaan Perguruan Tinggi Dalam Menghadapi Disrupsi Artificial Intelligence",
      penulis: "Rifda Jilan Syahidah, Febriyanto, Syifa Adiba",
      meta: "2026, Media Pustakawan, Vol. 33 No. 1",
      deskripsi: "Artificial Intelligence (AI) has transformed library operations in the modern era, revolutionizing academic libraries, improving services, and enhancing user experiences. The Universitas Al-Azhar Indonesia (UAI) Library has initiated the integration of AI-related materials into literacy classes to facilitate academic research. This study employs a descriptive-comparative approach to examine the transformation of information literacy programs before and after the rapid emergence of AI in academic writing at UAI, with emphasis on agility in adapting to technological disruptions. Using the “Empowering 8” model as a categorization framework, this qualitative research describes the changes in UAI Library’s information literacy program following interaction with various AI tools. The program has been enriched with basic competencies in utilizing AI-driven applications, marking a significant shift toward optimizing reference resources and enhancing research quality. This study provides a practical framework for integrating AI literacy into existing information literacy models in academic libraries, addressing the gap between technological disruption and pedagogical adaptation. Findings indicate that AI literacy classes play a crucial role in equipping users with skills to employ AI technologies effectively. Consistent with “Empowering 8” principles, continuous integration and development of AI are essential to advancing information literacy education in higher education..",
      link: "https://ejournal.perpusnas.go.id/mp/article/view/5815/1521"
    },
    {
      id: "j5",
      judul: "Pemanfaatan Gemini Artificial Intelligence (AI) sebagai Sarana Pendukung Literasi Informasi bagi Mahasiswa Departemen Ilmu Informasi dan Perpustakaan",
      penulis: "Hanifatus Salmi Addin, Malta Nelisa",
      meta: "2025, Jurnal Pustaka AI, Vol. 5 No. 1",
      deskripsi: "Penelitian ini bertujuan untuk mendeskripsikan pemanfaataan Gemini AI sebagai sarana pendukung literasi media, literasi visual, dan literasi digital. Penelitian ini menggunakan jenis penelitian kualitatif dengan metode deskriptif. Informan pada penelitian ini yaitu 12 orang mahasiswa aktif Departemen Ilmu Informasi dan perpustakaan angkatan 2021-2024. Hasil penelitian ini menunjukkan bahwa pemanfaatan Gemini AI sebagai sarana pendukung literasi informasi bagi mahasiswa Departemen Ilmu Informasi dan Perpustakaan secara umum sangat membantu proses literasi informasi, baik itu literasi media, literasi visual, dan literasi digital..",
      link: "https://jurnal.pustakagalerimandiri.co.id/index.php/pustakaai/article/view/956/67"
    }
  ],
  bukus: [
    {
      id: "b1",
      judul: "AI for Everyone?: Critical Perspectives",
      penulis: "Pieter Verdegem (ed.)",
      meta: "London: University of Westminster Press, 2021",
      deskripsi: "We are entering a new era of technological determinism and solutionism in which governments and business actors are seeking data-driven change, assuming that Artificial Intelligence is now inevitable and ubiquitous. But we have not even started asking the right questions, let alone developed an understanding of the consequences. Urgently needed is debate that asks and answers fundamental questions about power. This book brings together critical interrogations of what constitutes AI, its impact and its inequalities in order to offer an analysis of what it means for AI to deliver benefits for everyone. The book is structured in three parts: Part 1, AI: Humans vs. Machines, presents critical perspectives on human-machine dualism. Part 2, Discourses and Myths About AI, excavates metaphors and policies to ask normative questions about what is ‘desirable’ AI and what conditions make this possible. Part 3, AI Power and Inequalities, discusses how the implementation of AI creates important challenges that urgently need to be addressed. Bringing together scholars from diverse disciplinary backgrounds and regional contexts, this book offers a vital intervention on one of the most hyped concepts of our times..",
      link: "https://www.fulcrum.org/concern/monographs/0v838359n"
    },
    {
      id: "b2",
      judul: "Can We Trust AI?",
      penulis: "Rama Chellappa (ed.)",
      meta: "Baltimore: John Hopkins University Press, 2022",
      deskripsi: "Artificial intelligence is part of our daily lives. How can we address its limitations and guide its use for the benefit of communities worldwide? Artificial intelligence (AI) has evolved from an experimental computer algorithm used by academic researchers to a commercially reliable method of sifting through large sets of data that detect patterns not readily apparent through more rudimentary search tools. As a result, AI-based programs are helping doctors make more informed decisions about patient care, city planners align roads and highways to reduce traffic congestion with better efficiency, and merchants scan financial transactions to quickly flag suspicious purchases. But as AI applications grow, concerns have increased, too, including worries about applications that amplify existing biases in business practices and about the safety of self-driving vehicles. In Can We Trust AI?, Dr. Rama Chellappa, a researcher and innovator with 40 years in the field, recounts the evolution of AI, its current uses, and how it will drive industries and shape lives in the future.",
      link: "https://muse.jhu.edu/book/100180/pdf/download"
    }
  ],
  tanggapanTeks: "Berikan tanggapan sahabat agar kami bisa selalu memberi yang terbaik dalam menyajikan informasi terseleksi relevan yang dengan fokus atau minat sahabat.",
  tanggapanLabel: "Masukan Tanggapan",
  tanggapanUrl: "https://forms.gle/sampleFeedbackPerpusnas",
  penutupTeks: "Demikian informasi terseleksi subjek {{subjek}} untuk edisi bulan ini, semoga bisa membantu Sahabat dalam menambah referensi untuk bahan bacaan.",
  salamPenutup: "Salam Literasi",
  pustakawanNama: "Salamun Ababil",
  pustakawanJabatan: "Pustakawan Ahli Pertama",
  tanyaTeks: "Apabila Sahabat ingin bertanya atau meminta bantuan kepada pustakawan Perpusnas terkait penelusuran data/informasi/literatur yang lebih kompleks, Sahabat dapat bertanya di layanan Tanya Pustakawan.",
  tanyaUrl: "https://tanyapustakawan.perpusnas.go.id",
  emailLayanan: "sahabat_perpusnas@mail.perpusnas.go.id",
  copyright: "Hak Cipta © 2026 Perpustakaan Nasional RI, Seluruhnya dilindungi Hak Cipta.",
  unsubUrl: "https://perpusnas.go.id/unsubscribe"
};

// ==========================================================================
// Inisialisasi & Event Listeners
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  bindGeneralInputs();
  bindItemButtons();
  bindActionButtons();
  bindLookupHelpers();

  // Load dari localStorage jika ada, bila tidak muat template contoh
  const saved = localStorage.getItem("sipit_state");
  if (saved) {
    try {
      state = JSON.parse(saved);
      populateForm();
    } catch (e) {
      loadSample();
    }
  } else {
    loadSample();
  }

  renderPreview();
});

// ==========================================================================
// Tab Switching
// ==========================================================================
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetPanel = document.getElementById(btn.getAttribute("data-tab"));
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

// ==========================================================================
// Form Binding (Two-way data binding sederhana)
// ==========================================================================
function bindGeneralInputs() {
  const inputMap = {
    "input-instansi": "instansi",
    "input-induk": "induk",
    "input-subjek": "subjek",
    "input-edisi": "edisi",
    "input-penerima-nama": "penerimaNama",
    "input-penerima-email": "penerimaEmail",
    "input-sapaan": "sapaanTeks",
    "input-catatan-evaluasi": "catatanEvaluasi",
    "input-batasan": "batasanTeks",
    "input-sumber": "sumberPenelusuran",
    "input-tanggapan-teks": "tanggapanTeks",
    "input-tanggapan-label": "tanggapanLabel",
    "input-tanggapan-url": "tanggapanUrl",
    "input-penutup-teks": "penutupTeks",
    "input-salam-penutup": "salamPenutup",
    "input-pustakawan-nama": "pustakawanNama",
    "input-pustakawan-jabatan": "pustakawanJabatan",
    "input-tanya-teks": "tanyaTeks",
    "input-tanya-url": "tanyaUrl",
    "input-email-layanan": "emailLayanan",
    "input-copyright": "copyright",
    "input-unsub-url": "unsubUrl"
  };

  Object.entries(inputMap).forEach(([id, stateKey]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        state[stateKey] = e.target.value;
        saveState();
        renderPreview();
      });
    }
  });
}

function populateForm() {
  const inputMap = {
    "input-instansi": state.instansi || "",
    "input-induk": state.induk || "",
    "input-subjek": state.subjek || "",
    "input-edisi": state.edisi || "",
    "input-penerima-nama": state.penerimaNama || "",
    "input-penerima-email": state.penerimaEmail || "",
    "input-sapaan": state.sapaanTeks || "",
    "input-catatan-evaluasi": state.catatanEvaluasi || "",
    "input-batasan": state.batasanTeks || "",
    "input-sumber": state.sumberPenelusuran || "",
    "input-tanggapan-teks": state.tanggapanTeks || "",
    "input-tanggapan-label": state.tanggapanLabel || "",
    "input-tanggapan-url": state.tanggapanUrl || "",
    "input-penutup-teks": state.penutupTeks || "",
    "input-salam-penutup": state.salamPenutup || "",
    "input-pustakawan-nama": state.pustakawanNama || "",
    "input-pustakawan-jabatan": state.pustakawanJabatan || "",
    "input-tanya-teks": state.tanyaTeks || "",
    "input-tanya-url": state.tanyaUrl || "",
    "input-email-layanan": state.emailLayanan || "",
    "input-copyright": state.copyright || "",
    "input-unsub-url": state.unsubUrl || ""
  };

  Object.entries(inputMap).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });

  renderItemsList("jurnal");
  renderItemsList("buku");
  updateBadges();
}

function updateBadges() {
  const badgeJurnal = document.getElementById("badge-count-jurnal");
  const badgeBuku = document.getElementById("badge-count-buku");
  if (badgeJurnal) badgeJurnal.textContent = state.jurnals ? state.jurnals.length : 0;
  if (badgeBuku) badgeBuku.textContent = state.bukus ? state.bukus.length : 0;
}

// ==========================================================================
// Render List & Item Cards (Editor)
// ==========================================================================
function renderItemsList(type) {
  const isJurnal = type === "jurnal";
  const container = document.getElementById(isJurnal ? "jurnal-items-container" : "buku-items-container");
  if (!container) return;

  const items = isJurnal ? state.jurnals : state.bukus;
  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 24px; color: #94a3b8; font-size: 0.85rem; border: 1px dashed #cbd5e1; border-radius: 6px;">
      Belum ada ${isJurnal ? 'artikel jurnal' : 'koleksi buku'}. Klik tombol "+ Tambah" di atas untuk menambahkan.
    </div>`;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">#${index + 1} ${escapeHtml(item.judul ? (item.judul.substring(0, 45) + (item.judul.length > 45 ? '...' : '')) : (isJurnal ? 'Artikel Baru' : 'Buku Baru'))}</span>
        <div class="item-card-actions">
          <button class="btn btn-outline btn-sm btn-move" data-type="${type}" data-index="${index}" data-dir="-1" title="Pindah ke Atas">▲</button>
          <button class="btn btn-outline btn-sm btn-move" data-type="${type}" data-index="${index}" data-dir="1" title="Pindah ke Bawah">▼</button>
          <button class="btn btn-danger btn-sm btn-delete-item" data-type="${type}" data-index="${index}" title="Hapus">🗑️</button>
        </div>
      </div>
      <div class="form-group">
        <label>Judul ${isJurnal ? 'Artikel' : 'Buku'}:</label>
        <input type="text" class="item-field" data-type="${type}" data-index="${index}" data-field="judul" value="${escapeHtml(item.judul || '')}" placeholder="Judul lengkap...">
      </div>
      <div class="form-row">
        <div class="form-group col-6">
          <label>Penulis / Editor (Oleh:):</label>
          <input type="text" class="item-field" data-type="${type}" data-index="${index}" data-field="penulis" value="${escapeHtml(item.penulis || '')}" placeholder="Nama penulis...">
        </div>
        <div class="form-group col-6">
          <label>${isJurnal ? 'Publikasi (Tahun, Jurnal, Vol/No)' : 'Penerbitan (Kota: Penerbit, Tahun)'}:</label>
          <input type="text" class="item-field" data-type="${type}" data-index="${index}" data-field="meta" value="${escapeHtml(item.meta || '')}" placeholder="${isJurnal ? 'Misal: 2024, Pustaka Karya, Vol. 12 No. 2' : 'Misal: London: Westminster Press, 2021'}">
        </div>
      </div>
      <div class="form-group">
        <label>${isJurnal ? 'Abstrak / Ringkasan Isi' : 'Sinopsis / Deskripsi Buku'}:</label>
        <textarea rows="4" class="item-field" data-type="${type}" data-index="${index}" data-field="deskripsi" placeholder="Teks abstrak atau ulasan...">${escapeHtml(item.deskripsi || '')}</textarea>
      </div>
      <div class="form-group">
        <label>${isJurnal ? 'Tautan Fulltext (URL)' : 'Lokasi Koleksi / Tautan (URL / Call No)'}:</label>
        <input type="text" class="item-field" data-type="${type}" data-index="${index}" data-field="link" value="${escapeHtml(item.link || '')}" placeholder="https://...">
      </div>
    `;
    container.appendChild(card);
  });

  // Re-bind listeners pada item fields
  container.querySelectorAll(".item-field").forEach(input => {
    input.addEventListener("input", (e) => {
      const t = e.target.getAttribute("data-type");
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      const field = e.target.getAttribute("data-field");
      const targetList = t === "jurnal" ? state.jurnals : state.bukus;
      if (targetList[idx]) {
        targetList[idx][field] = e.target.value;
        saveState();
        renderPreview();
        // Update title preview jika yang diedit judul
        if (field === "judul") {
          const cardTitle = e.target.closest(".item-card").querySelector(".item-card-title");
          if (cardTitle) {
            cardTitle.textContent = `#${idx + 1} ` + (e.target.value ? (e.target.value.substring(0, 45) + (e.target.value.length > 45 ? '...' : '')) : (t === "jurnal" ? 'Artikel Baru' : 'Buku Baru'));
          }
        }
      }
    });
  });

  // Re-bind delete
  container.querySelectorAll(".btn-delete-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const t = btn.getAttribute("data-type");
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const targetList = t === "jurnal" ? state.jurnals : state.bukus;
      targetList.splice(idx, 1);
      saveState();
      renderItemsList(t);
      updateBadges();
      renderPreview();
      showToast(`${t === "jurnal" ? 'Artikel' : 'Buku'} berhasil dihapus`);
    });
  });

  // Re-bind move
  container.querySelectorAll(".btn-move").forEach(btn => {
    btn.addEventListener("click", () => {
      const t = btn.getAttribute("data-type");
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const dir = parseInt(btn.getAttribute("data-dir"), 10);
      const targetList = t === "jurnal" ? state.jurnals : state.bukus;
      const newIdx = idx + dir;
      if (newIdx >= 0 && newIdx < targetList.length) {
        const temp = targetList[idx];
        targetList[idx] = targetList[newIdx];
        targetList[newIdx] = temp;
        saveState();
        renderItemsList(t);
        renderPreview();
      }
    });
  });
}

function bindItemButtons() {
  document.getElementById("btn-add-jurnal").addEventListener("click", () => {
    state.jurnals.push({
      id: "j_" + Date.now(),
      judul: "",
      penulis: "",
      meta: "",
      deskripsi: "",
      link: ""
    });
    saveState();
    renderItemsList("jurnal");
    updateBadges();
    renderPreview();
    // Scroll to new item
    const container = document.getElementById("jurnal-items-container");
    container.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-add-buku").addEventListener("click", () => {
    state.bukus.push({
      id: "b_" + Date.now(),
      judul: "",
      penulis: "",
      meta: "",
      deskripsi: "",
      link: ""
    });
    saveState();
    renderItemsList("buku");
    updateBadges();
    renderPreview();
    const container = document.getElementById("buku-items-container");
    container.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  });
}

// ==========================================================================
// Quick Lookup Helpers (DOI Crossref & ISBN OpenLibrary)
// ==========================================================================
function bindLookupHelpers() {
  const btnDoi = document.getElementById("btn-lookup-doi");
  const inputDoi = document.getElementById("input-doi-lookup");
  const statusDoi = document.getElementById("doi-lookup-status");

  btnDoi.addEventListener("click", async () => {
    const rawDoi = inputDoi.value.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//, "");
    if (!rawDoi) {
      statusDoi.textContent = "Masukkan DOI terlebih dahulu";
      statusDoi.style.color = "#dc2626";
      return;
    }

    statusDoi.textContent = "Sedang mengambil data dari Crossref API...";
    statusDoi.style.color = "#0284c7";

    try {
      const resp = await fetch(`https://api.crossref.org/works/${encodeURIComponent(rawDoi)}`);
      if (!resp.ok) throw new Error("Artikel tidak ditemukan di Crossref");
      const data = await resp.json();
      const msg = data.message;

      const title = (msg.title && msg.title[0]) ? msg.title[0] : "";
      const authors = (msg.author || []).map(a => `${a.given || ''} ${a.family || ''}`.trim()).filter(Boolean).join(", ");
      const journal = (msg["container-title"] && msg["container-title"][0]) ? msg["container-title"][0] : "";
      const year = msg.issued?.["date-parts"]?.[0]?.[0] || new Date().getFullYear();
      const vol = msg.volume ? `Vol. ${msg.volume}` : "";
      const issue = msg.issue ? `No. ${msg.issue}` : "";
      const meta = [year, journal, vol, issue].filter(Boolean).join(", ");
      const abstract = msg.abstract ? msg.abstract.replace(/<[^>]*>/g, "").trim() : "";
      const link = msg.URL || `https://doi.org/${rawDoi}`;

      state.jurnals.push({
        id: "j_" + Date.now(),
        judul: title,
        penulis: authors,
        meta: meta,
        deskripsi: abstract,
        link: link
      });

      saveState();
      renderItemsList("jurnal");
      updateBadges();
      renderPreview();
      statusDoi.textContent = "✓ Data artikel berhasil ditambahkan ke daftar!";
      statusDoi.style.color = "#16a34a";
      inputDoi.value = "";
    } catch (err) {
      statusDoi.textContent = "Gagal mengambil DOI: " + err.message;
      statusDoi.style.color = "#dc2626";
    }
  });

  const btnIsbn = document.getElementById("btn-lookup-isbn");
  const inputIsbn = document.getElementById("input-isbn-lookup");
  const statusIsbn = document.getElementById("isbn-lookup-status");

  btnIsbn.addEventListener("click", async () => {
    const isbn = inputIsbn.value.trim().replace(/[-\s]/g, "");
    if (!isbn) {
      statusIsbn.textContent = "Masukkan ISBN terlebih dahulu";
      statusIsbn.style.color = "#dc2626";
      return;
    }

    statusIsbn.textContent = "Sedang mencari buku di Google Books & OpenLibrary...";
    statusIsbn.style.color = "#0284c7";

    try {
      const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
      const data = await resp.json();

      if (data.totalItems > 0 && data.items?.[0]) {
        const info = data.items[0].volumeInfo;
        const title = info.title + (info.subtitle ? `: ${info.subtitle}` : "");
        const authors = (info.authors || []).join(", ");
        const publisher = info.publisher || "";
        const year = info.publishedDate ? info.publishedDate.substring(0, 4) : "";
        const meta = [publisher, year].filter(Boolean).join(", ");
        const description = info.description || "";
        const link = info.canonicalVolumeLink || info.infoLink || "";

        state.bukus.push({
          id: "b_" + Date.now(),
          judul: title,
          penulis: authors,
          meta: meta,
          deskripsi: description,
          link: link
        });

        saveState();
        renderItemsList("buku");
        updateBadges();
        renderPreview();
        statusIsbn.textContent = "✓ Buku berhasil ditambahkan ke daftar!";
        statusIsbn.style.color = "#16a34a";
        inputIsbn.value = "";
      } else {
        throw new Error("Buku dengan ISBN tersebut tidak ditemukan");
      }
    } catch (err) {
      statusIsbn.textContent = "Gagal mencari ISBN: " + err.message;
      statusIsbn.style.color = "#dc2626";
    }
  });
}

// ==========================================================================
// Render Document Preview
// ==========================================================================
function renderPreview() {
  const container = document.getElementById("rendered-document");
  if (!container) return;

  const sapaanRendered = (state.sapaanTeks || "")
    .replace(/\{\{nama\}\}/gi, `<strong>${escapeHtml(state.penerimaNama || 'Sahabat')}</strong>`);

  const penutupRendered = (state.penutupTeks || "")
    .replace(/\{\{subjek\}\}/gi, `<strong>${escapeHtml(state.subjek || '')}</strong>`);

  let jurnalsHtml = "";
  if (state.jurnals && state.jurnals.length > 0) {
    jurnalsHtml = `
      <div class="doc-section-heading">Artikel Jurnal</div>
      ${state.jurnals.map(j => `
        <div class="doc-entry">
          <div class="doc-entry-title">${escapeHtml(j.judul || '')}</div>
          <div class="doc-entry-author">Oleh: ${escapeHtml(j.penulis || '')}</div>
          <div class="doc-entry-meta">${escapeHtml(j.meta || '')}</div>
          <div class="doc-entry-abstract">${escapeHtml(j.deskripsi || '')}</div>
          ${j.link ? `<div class="doc-entry-link">Tautan <em>Fulltext</em>: <a href="${escapeHtml(j.link)}" target="_blank" rel="noopener">${escapeHtml(j.link)}</a></div>` : ''}
        </div>
      `).join('')}
    `;
  }

  let bukusHtml = "";
  if (state.bukus && state.bukus.length > 0) {
    bukusHtml = `
      <div class="doc-section-heading">Koleksi Buku</div>
      ${state.bukus.map(b => `
        <div class="doc-entry">
          <div class="doc-entry-title">${escapeHtml(b.judul || '')}</div>
          <div class="doc-entry-author">Oleh: ${escapeHtml(b.penulis || '')}</div>
          <div class="doc-entry-meta">${escapeHtml(b.meta || '')}</div>
          <div class="doc-entry-abstract">${escapeHtml(b.deskripsi || '')}</div>
          ${b.link ? `<div class="doc-entry-link">Lokasi Koleksi: <a href="${escapeHtml(b.link)}" target="_blank" rel="noopener">${escapeHtml(b.link)}</a></div>` : ''}
        </div>
      `).join('')}
    `;
  }

  const html = `
    <!-- Header Banner -->
    <div class="doc-header-banner">
      <h1 class="doc-main-title">Diseminasi Paket Informasi Terseleksi</h1>
      <div class="doc-subject-badge">Subjek: ${escapeHtml(state.subjek || '-')}</div>
      <div style="font-size: 0.85rem; color: #64748b; font-family: -apple-system, sans-serif;">
        ${escapeHtml(state.edisi || '')} &bull; Ditujukan kepada: <strong>${escapeHtml(state.penerimaNama || '')}</strong>
      </div>
    </div>

    <!-- Sapaan -->
    <div class="doc-greeting">${sapaanRendered}</div>

    <!-- Catatan Evaluasi -->
    ${state.catatanEvaluasi ? `<div class="doc-eval-note">${escapeHtml(state.catatanEvaluasi)}</div>` : ''}

    <!-- Kata Kunci & Batasan -->
    <div class="doc-box-keywords">
      <div style="font-family: -apple-system, sans-serif; font-size: 0.95rem; font-weight: 700; color: #1e3a8a; margin-bottom: 6px;">
        Kata Kunci & Batasan Penelusuran
      </div>
      <p style="font-size: 0.95rem; margin-bottom: 6px;">
        ${escapeHtml(state.batasanTeks || '')}
      </p>
      ${state.sumberPenelusuran ? `
        <p style="font-size: 0.9rem; color: #334155; margin-top: 4px;">
          Sumber pencarian penelusuran yang kami gunakan adalah <strong>${escapeHtml(state.sumberPenelusuran)}</strong>.
        </p>
      ` : ''}
    </div>

    <!-- Artikel Jurnal -->
    ${jurnalsHtml}

    <!-- Koleksi Buku -->
    ${bukusHtml}

    <!-- Box Tanggapan -->
    <div class="doc-box-tanggapan">
      <div style="font-family: -apple-system, sans-serif; font-weight: 700; font-size: 1.05rem; color: #1e3a8a; margin-bottom: 6px;">
        Tanggapan
      </div>
      <p style="font-style: italic; font-size: 0.925rem; color: #334155;">
        ${escapeHtml(state.tanggapanTeks || '')}
      </p>
      ${state.tanggapanUrl ? `
        <a href="${escapeHtml(state.tanggapanUrl)}" class="doc-btn-link" target="_blank" rel="noopener">
          ${escapeHtml(state.tanggapanLabel || 'Masukan Tanggapan')}
        </a>
      ` : ''}
    </div>

    <!-- Penutup & Salam -->
    <div class="doc-signoff">
      <p class="doc-signoff-closing">${penutupRendered}</p>
      <div style="margin-top: 14px;">
        <div>${escapeHtml(state.salamPenutup || 'Salam Literasi')}</div>
        <div class="doc-signoff-name">${escapeHtml(state.pustakawanNama || '')}</div>
        <div class="doc-signoff-role">${escapeHtml(state.pustakawanJabatan || '')}</div>
      </div>
    </div>

    <!-- Box Tanya Pustakawan -->
    <div class="doc-box-tanya">
      <div style="font-family: -apple-system, sans-serif; font-weight: 700; font-size: 1.05rem; color: #065f46; margin-bottom: 6px;">
        Tanya Pustakawan
      </div>
      <p style="font-size: 0.925rem; color: #334155;">
        ${escapeHtml(state.tanyaTeks || '')}
      </p>
      ${state.tanyaUrl ? `
        <a href="${escapeHtml(state.tanyaUrl)}" class="doc-btn-link" target="_blank" rel="noopener">
          Tanya Pustakawan
        </a>
      ` : ''}
    </div>

    <!-- Footer Dokumen -->
    <div class="doc-footer">
      <div><em>${escapeHtml(state.copyright || '')}</em></div>
      ${state.emailLayanan ? `<div style="margin-top: 4px;"><strong>Alamat email Kami:</strong> ${escapeHtml(state.emailLayanan)}</div>` : ''}
      <div style="margin-top: 6px;">
        Tidak ingin menerima kiriman Diseminasi Informasi ini lagi? Anda dapat <a href="${escapeHtml(state.unsubUrl || '#')}" style="color: #64748b; text-decoration: underline;">berhenti langganan di sini</a>.
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ==========================================================================
// Generator Email HTML Inline (Untuk dikirim via Gmail/Email Client)
// ==========================================================================
function generateEmailInlineHtml() {
  const sapaanRendered = (state.sapaanTeks || "")
    .replace(/\{\{nama\}\}/gi, `<strong>${escapeHtml(state.penerimaNama || 'Sahabat')}</strong>`);
  const penutupRendered = (state.penutupTeks || "")
    .replace(/\{\{subjek\}\}/gi, `<strong>${escapeHtml(state.subjek || '')}</strong>`);

  let jurnalsHtml = "";
  if (state.jurnals && state.jurnals.length > 0) {
    jurnalsHtml = `
      <h3 style="color:#1e3a8a; border-bottom: 2px solid #cbd5e1; padding-bottom: 6px; margin-top: 30px; font-family: Arial, sans-serif;">Artikel Jurnal</h3>
      ${state.jurnals.map(j => `
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px dashed #e2e8f0;">
          <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 17px; font-family: Georgia, serif;">${escapeHtml(j.judul || '')}</h4>
          <p style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #334155;">Oleh: ${escapeHtml(j.penulis || '')}</p>
          <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #64748b;">${escapeHtml(j.meta || '')}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.6; text-align: justify; color: #334155;">${escapeHtml(j.deskripsi || '')}</p>
          ${j.link ? `<p style="margin: 0; font-size: 13px;"><strong>Tautan <em>Fulltext</em>:</strong> <a href="${escapeHtml(j.link)}" style="color: #0284c7; text-decoration: underline;" target="_blank">${escapeHtml(j.link)}</a></p>` : ''}
        </div>
      `).join('')}
    `;
  }

  let bukusHtml = "";
  if (state.bukus && state.bukus.length > 0) {
    bukusHtml = `
      <h3 style="color:#1e3a8a; border-bottom: 2px solid #cbd5e1; padding-bottom: 6px; margin-top: 30px; font-family: Arial, sans-serif;">Koleksi Buku</h3>
      ${state.bukus.map(b => `
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px dashed #e2e8f0;">
          <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 17px; font-family: Georgia, serif;">${escapeHtml(b.judul || '')}</h4>
          <p style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #334155;">Oleh: ${escapeHtml(b.penulis || '')}</p>
          <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #64748b;">${escapeHtml(b.meta || '')}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.6; text-align: justify; color: #334155;">${escapeHtml(b.deskripsi || '')}</p>
          ${b.link ? `<p style="margin: 0; font-size: 13px;"><strong>Lokasi Koleksi:</strong> <a href="${escapeHtml(b.link)}" style="color: #0284c7; text-decoration: underline;" target="_blank">${escapeHtml(b.link)}</a></p>` : ''}
        </div>
      `).join('')}
    `;
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Georgia, serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 680px; margin: 0 auto; background: #ffffff; padding: 36px; border: 1px solid #e2e8f0; border-radius: 6px;">
    
    <div style="border-bottom: 3px double #1e3a8a; padding-bottom: 14px; margin-bottom: 20px;">
      <h1 style="color: #1e3a8a; font-size: 24px; margin: 0 0 8px 0;">Diseminasi Paket Informasi Terseleksi</h1>
      <div style="display: inline-block; background-color: #f1f5f9; border-left: 4px solid #1e3a8a; padding: 4px 10px; font-size: 15px; font-weight: bold; color: #0f172a;">
        Subjek: ${escapeHtml(state.subjek || '-')}
      </div>
    </div>

    <div style="font-size: 15px; margin-bottom: 14px;">${sapaanRendered}</div>

    ${state.catatanEvaluasi ? `
      <div style="background-color: #f8fafc; border-left: 3px solid #cbd5e1; padding: 10px 14px; font-size: 13px; font-style: italic; color: #475569; margin-bottom: 18px;">
        ${escapeHtml(state.catatanEvaluasi)}
      </div>
    ` : ''}

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
      <strong style="color: #1e3a8a; font-family: Arial, sans-serif; display: block; margin-bottom: 6px;">Kata Kunci</strong>
      <p style="margin: 0 0 8px 0; font-size: 14px;">${escapeHtml(state.batasanTeks || '')}</p>
      ${state.sumberPenelusuran ? `<p style="margin: 0; font-size: 13px; color: #475569;">Sumber pencarian penelusuran yang kami gunakan adalah <strong>${escapeHtml(state.sumberPenelusuran)}</strong>.</p>` : ''}
    </div>

    ${jurnalsHtml}

    ${bukusHtml}

    <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 18px; margin: 26px 0; text-align: center;">
      <h4 style="margin: 0 0 6px 0; color: #1e3a8a; font-family: Arial, sans-serif;">Tanggapan</h4>
      <p style="margin: 0 0 12px 0; font-size: 13px; font-style: italic; color: #334155;">${escapeHtml(state.tanggapanTeks || '')}</p>
      ${state.tanggapanUrl ? `<a href="${escapeHtml(state.tanggapanUrl)}" style="background-color: #1e3a8a; color: #ffffff; text-decoration: none; padding: 8px 18px; border-radius: 4px; font-size: 13px; font-weight: bold; display: inline-block;">${escapeHtml(state.tanggapanLabel || 'Masukan Tanggapan')}</a>` : ''}
    </div>

    <div style="margin: 24px 0; font-size: 15px;">
      <p style="margin-bottom: 14px;">${penutupRendered}</p>
      <div>${escapeHtml(state.salamPenutup || 'Salam Literasi')}</div>
      <div style="font-weight: bold; color: #0f172a;">${escapeHtml(state.pustakawanNama || '')}</div>
      <div style="color: #64748b; font-style: italic; font-size: 13px;">${escapeHtml(state.pustakawanJabatan || '')}</div>
    </div>

    <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 18px; margin: 26px 0; text-align: center;">
      <h4 style="margin: 0 0 6px 0; color: #065f46; font-family: Arial, sans-serif;">Tanya Pustakawan</h4>
      <p style="margin: 0 0 12px 0; font-size: 13px; color: #334155;">${escapeHtml(state.tanyaTeks || '')}</p>
      ${state.tanyaUrl ? `<a href="${escapeHtml(state.tanyaUrl)}" style="background-color: #059669; color: #ffffff; text-decoration: none; padding: 8px 18px; border-radius: 4px; font-size: 13px; font-weight: bold; display: inline-block;">Tanya Pustakawan</a>` : ''}
    </div>

    <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
      <p style="margin: 0 0 4px 0;"><em>${escapeHtml(state.copyright || '')}</em></p>
      ${state.emailLayanan ? `<p style="margin: 0 0 4px 0;"><strong>Alamat email Kami:</strong> ${escapeHtml(state.emailLayanan)}</p>` : ''}
      <p style="margin: 0;">Tidak ingin menerima kiriman Diseminasi Informasi ini lagi? anda dapat <a href="${escapeHtml(state.unsubUrl || '#')}" style="color: #64748b;">berhenti langganan disini</a>.</p>
    </div>

  </div>
</body>
</html>
  `;
}

// ==========================================================================
// Action Buttons: Save, Load, Export, Print
// ==========================================================================
function bindActionButtons() {
  // Muat Template Sampel
  document.getElementById("btn-load-sample").addEventListener("click", () => {
    if (confirm("Muat data contoh Paket Informasi Terseleksi Perpusnas (Agustus 2026)? Formulir yang ada saat ini akan ditimpa.")) {
      loadSample();
      showToast("Data contoh berhasil dimuat!");
    }
  });

  // Reset Form
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("Yakin ingin mengosongkan seluruh formulir?")) {
      resetState();
      populateForm();
      renderPreview();
      showToast("Formulir telah dikosongkan");
    }
  });

  // Cetak / Print PDF
  document.getElementById("btn-print-pdf").addEventListener("click", () => {
    window.print();
  });

  // Salin HTML Email
  document.getElementById("btn-copy-email-html").addEventListener("click", async () => {
    const emailHtml = generateEmailInlineHtml();
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const blobHtml = new Blob([emailHtml], { type: "text/html" });
        const blobText = new Blob([document.getElementById("rendered-document").innerText], { type: "text/plain" });
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": blobHtml,
            "text/plain": blobText
          })
        ]);
        showToast("✓ Template Email berhasil disalin! Tinggal Paste di Gmail/Email.");
      } else {
        await navigator.clipboard.writeText(emailHtml);
        showToast("✓ Kode HTML Email berhasil disalin ke clipboard!");
      }
    } catch (e) {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = emailHtml;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast("✓ Template Email berhasil disalin!");
    }
  });

  // Unduh Berkas HTML
  document.getElementById("btn-download-html").addEventListener("click", () => {
    const fullHtml = generateEmailInlineHtml();
    const subjekSlug = (state.subjek || "paket-informasi").toLowerCase().replace(/[^a-z0-9]/g, "_");
    const edisiSlug = (state.edisi || "edisi").toLowerCase().replace(/[^a-z0-9]/g, "_");
    const filename = `Paket_Informasi_${subjekSlug}_${edisiSlug}.html`;

    downloadFile(fullHtml, filename, "text/html");
    showToast(`✓ Berkas "${filename}" berhasil diunduh!`);
  });

  // Export JSON Proyek
  document.getElementById("btn-export-json").addEventListener("click", () => {
    const dataStr = JSON.stringify(state, null, 2);
    const subjekSlug = (state.subjek || "proyek").toLowerCase().replace(/[^a-z0-9]/g, "_");
    const filename = `proyek_paket_informasi_${subjekSlug}.json`;
    downloadFile(dataStr, filename, "application/json");
    showToast(`✓ Berkas proyek "${filename}" berhasil disimpan!`);
  });

  // Import JSON Proyek
  const inputImport = document.getElementById("input-import-json");
  inputImport.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const loadedState = JSON.parse(event.target.result);
        state = { ...state, ...loadedState };
        saveState();
        populateForm();
        renderPreview();
        showToast(`✓ Proyek "${file.name}" berhasil dimuat!`);
      } catch (err) {
        alert("Gagal membaca berkas JSON: " + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = ""; // reset input
  });

  // Toggle View Mode (Desktop / Mobile Preview)
  const btnToggle = document.getElementById("btn-toggle-view-mode");
  btnToggle.addEventListener("click", () => {
    const doc = document.getElementById("rendered-document");
    if (doc.style.maxWidth === "420px") {
      doc.style.maxWidth = "800px";
      btnToggle.textContent = "📱 Mode Baca";
    } else {
      doc.style.maxWidth = "420px";
      btnToggle.textContent = "💻 Mode Lebar";
    }
  });
}

// ==========================================================================
// State Helpers & Utilities
// ==========================================================================
function loadSample() {
  state = JSON.parse(JSON.stringify(sampleData));
  saveState();
  populateForm();
  renderPreview();
}

function resetState() {
  state = {
    instansi: "",
    induk: "",
    subjek: "",
    edisi: "",
    penerimaNama: "",
    penerimaEmail: "",
    sapaanTeks: "Hai {{nama}} Ini adalah layanan Diseminasi Informasi Terseleksi...",
    catatanEvaluasi: "",
    batasanTeks: "",
    sumberPenelusuran: "",
    jurnals: [],
    bukus: [],
    tanggapanTeks: "",
    tanggapanLabel: "Masukan Tanggapan",
    tanggapanUrl: "",
    penutupTeks: "Demikian informasi terseleksi subjek {{subjek}}...",
    salamPenutup: "Salam Literasi",
    pustakawanNama: "",
    pustakawanJabatan: "",
    tanyaTeks: "",
    tanyaUrl: "",
    emailLayanan: "",
    copyright: "",
    unsubUrl: ""
  };
  saveState();
}

function saveState() {
  localStorage.setItem("sipit_state", JSON.stringify(state));
}

function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
