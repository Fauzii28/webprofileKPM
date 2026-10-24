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
// =============================================================

export const galleryData = {
  sectionLabel: "Galeri",
  sectionTitle: "Momen Bersama",
  sectionDescription: "TODO: Tulis deskripsi singkat galeri KPM.",

  // Kategori untuk filter (sesuaikan dengan kegiatan KPM)
  categories: ["Semua", "Workshop", "Hackathon", "Event", "Kompetisi"],

  items: [
    // ── FOTO 1 ────────────────────────────────────────────────
    {
      id: 1,
      title: "TODO: Judul Foto/Event 1",
      category: "Workshop",         // Harus cocok dengan salah satu di `categories`
      description: "TODO: Keterangan foto 1",
      image: null,                  // TODO: ganti dengan "/gallery/nama-foto.jpg" atau URL
      placeholderColor: "from-blue-600 to-cyan-500",  // Warna jika foto null
      placeholderIcon: "📸",
    },

    // ── FOTO 2 ────────────────────────────────────────────────
    {
      id: 2,
      title: "TODO: Judul Foto/Event 2",
      category: "Hackathon",
      description: "TODO: Keterangan foto 2",
      image: null,
      placeholderColor: "from-purple-600 to-violet-500",
      placeholderIcon: "⚡",
    },

    // ── FOTO 3 ────────────────────────────────────────────────
    {
      id: 3,
      title: "TODO: Judul Foto/Event 3",
      category: "Event",
      description: "TODO: Keterangan foto 3",
      image: null,
      placeholderColor: "from-green-600 to-emerald-500",
      placeholderIcon: "🎉",
    },

    // ── Tambah foto lebih banyak di sini ──────────────────────
  ],
};
