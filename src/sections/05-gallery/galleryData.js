// =============================================================
// 📁 src/sections/05-gallery/galleryData.js
// =============================================================
// DIISI OLEH: Tim Gallery Section
// DESKRIPSI: Data untuk galeri foto/dokumentasi kegiatan KPM.
//
// ✅ TUGAS KALIAN:
//   1. Tambahkan foto-foto ke folder `public/gallery/`
//   2. Isi array `items` dengan path ke foto dan keterangannya
//   3. Atau gunakan URL eksternal (dari Google Drive, dsb)
//
// 📸 CARA PAKAI FOTO LOKAL:
//   - Simpan foto di: public/gallery/nama-foto.jpg
//   - Isi `image` dengan: "/gallery/nama-foto.jpg"
//
// 🌐 CARA PAKAI FOTO DARI URL:
//   - Isi `image` dengan URL lengkap foto
//
// 🔒 KALAU BELUM ADA FOTO:
//   - Set `image: null` — akan muncul placeholder warna
//
// 🗂️  FOLDER FOTO (sudah disiapkan, tinggal isi):
//   - public/gallery/workshop/
//   - public/gallery/hackathon/
//   - public/gallery/event/
//   - public/gallery/kompetisi/
// =============================================================

export const galleryData = {
  sectionLabel: "Galeri",
  sectionTitle: "Momen Bersama",
  sectionDescription: "TODO: Tulis deskripsi singkat galeri KPM.",

  // Kategori untuk filter (sesuaikan dengan kegiatan KPM)
  categories: ["Semua", "Workshop", "Hackathon", "Event", "Kompetisi"],

  items: [
    // ── WORKSHOP — janawi, sangiang, pamoroan, sador, cikuda, cipadung ──
    {
      id: 1,
      title: "Workshop — Janawi",
      category: "Workshop",         // Harus cocok dengan salah satu di `categories`
      description: "Dokumentasi kegiatan workshop KPM.",
      image: "/gallery/workshop/janawi.jpg",
      placeholderColor: "from-blue-600 to-cyan-500",
      placeholderIcon: "📸",
    },
    {
      id: 2,
      title: "Workshop — Sangiang",
      category: "Workshop",
      description: "Dokumentasi kegiatan workshop KPM.",
      image: "/gallery/workshop/sangiang.jpg",
      placeholderColor: "from-blue-600 to-cyan-500",
      placeholderIcon: "📸",
    },
    {
      id: 3,
      title: "Workshop — Pamoroan",
      category: "Workshop",
      description: "Dokumentasi kegiatan workshop KPM.",
      image: "/gallery/workshop/pamoroan.webp",
      placeholderColor: "from-blue-600 to-cyan-500",
      placeholderIcon: "📸",
    },
    {
      id: 4,
      title: "Workshop — Sador",
      category: "Workshop",
      description: "Dokumentasi kegiatan workshop KPM.",
      image: "/gallery/workshop/sador.jpg",
      placeholderColor: "from-blue-600 to-cyan-500",
      placeholderIcon: "📸",
    },
    {
      id: 5,
      title: "Workshop — Cikuda",
      category: "Workshop",
      description: "Dokumentasi kegiatan workshop KPM.",
      image: "/gallery/workshop/cikuda.jpg",
      placeholderColor: "from-blue-600 to-cyan-500",
      placeholderIcon: "📸",
    },
    {
      id: 6,
      title: "Workshop — Cipadung",
      category: "Workshop",
      description: "Dokumentasi kegiatan workshop KPM.",
      image: "/gallery/workshop/cipadung.jpg",
      placeholderColor: "from-blue-600 to-cyan-500",
      placeholderIcon: "📸",
    },

    // ── HACKATHON — foto: heka1.jpeg s.d. heka6.jpeg ──────────
    {
      id: 7,
      title: "Hackathon KPM #1",
      category: "Hackathon",
      description: "Dokumentasi kegiatan hackathon KPM.",
      image: "/gallery/hackathon/heka-1.jpg",
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },
    {
      id: 8,
      title: "Hackathon KPM #2",
      category: "Hackathon",
      description: "Dokumentasi kegiatan hackathon KPM.",
      image: "/gallery/hackathon/heka-2.jpg",
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },
    {
      id: 9,
      title: "Hackathon KPM #3",
      category: "Hackathon",
      description: "Dokumentasi kegiatan hackathon KPM.",
      image: "/gallery/hackathon/heka-3.jpg",
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },
    {
      id: 10,
      title: "Hackathon KPM #4",
      category: "Hackathon",
      description: "Dokumentasi kegiatan hackathon KPM.",
      image: "/gallery/hackathon/heka-4.jpg",
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },
    {
      id: 11,
      title: "Hackathon KPM #5",
      category: "Hackathon",
      description: "Dokumentasi kegiatan hackathon KPM.",
      image: "/gallery/hackathon/heka-5.jpg",
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },
    {
      id: 12,
      title: "Hackathon KPM #6",
      category: "Hackathon",
      description: "Dokumentasi kegiatan hackathon KPM.",
      image: "/gallery/hackathon/heka-6.jpg",
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },

    // ── PLACEHOLDER: Event ────────────────────────────────────
    {
      id: 13,
      title: "TODO: Judul Foto/Event",
      category: "Event",
      description: "TODO: Keterangan foto event",
      image: null,
      placeholderColor: "from-green-600 to-emerald-500",
      placeholderIcon: "🎉",
    },

    // ── PLACEHOLDER: Kompetisi ────────────────────────────────
    {
      id: 14,
      title: "TODO: Judul Foto/Kompetisi",
      category: "Kompetisi",
      description: "TODO: Keterangan foto kompetisi",
      image: null,
      placeholderColor: "from-yellow-500 to-orange-500",
      placeholderIcon: "🏆",
    },

    // ── Tambah foto lebih banyak di sini ──────────────────────
  ],
};
