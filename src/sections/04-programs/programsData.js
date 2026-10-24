// =============================================================
// 📁 src/sections/04-programs/programsData.js
// =============================================================
// DIISI OLEH: Tim Programs Section
// DESKRIPSI: Data untuk program-program kegiatan KPM.
//
// ✅ TUGAS KALIAN:
//   1. Isi/tambah program sesuai kegiatan nyata KPM
//   2. Sesuaikan `type` dan `frequency` dengan jadwal asli
// =============================================================

export const programsData = {
  sectionLabel: "Program",
  sectionTitle: "Apa yang Bisa Kamu Ikuti?",
  sectionDescription: "TODO: Deskripsi singkat tentang program-program yang ada di KPM.",

  programs: [
    // ── PROGRAM 1 ─────────────────────────────────────────────
    {
      id: 1,
      title: "TODO: Nama Program 1",
      icon: "💻",                    // Pilih emoji
      type: "TODO: Tipe",            // contoh: "Rutin", "Bulanan", "Tahunan"
      frequency: "TODO: Frekuensi",  // contoh: "Setiap Minggu", "2x per Bulan"
      description: "TODO: Deskripsi program 1 — apa yang dilakukan, apa manfaatnya.",
      accentColor: "border-blue-500",  // warna aksen kiri kartu
    },

    // ── PROGRAM 2 ─────────────────────────────────────────────
    {
      id: 2,
      title: "TODO: Nama Program 2",
      icon: "🎓",
      type: "TODO: Tipe",
      frequency: "TODO: Frekuensi",
      description: "TODO: Deskripsi program 2.",
      accentColor: "border-purple-500",
    },

    // ── PROGRAM 3 ─────────────────────────────────────────────
    {
      id: 3,
      title: "TODO: Nama Program 3",
      icon: "⚡",
      type: "TODO: Tipe",
      frequency: "TODO: Frekuensi",
      description: "TODO: Deskripsi program 3.",
      accentColor: "border-yellow-500",
    },

    // ── Tambah program lebih banyak di sini ───────────────────
  ],
};
