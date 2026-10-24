// =============================================================
// 📁 src/sections/03-divisions/divisionsData.js
// =============================================================
// DIISI OLEH: Tim Divisions Section (atau masing-masing ketua divisi)
// DESKRIPSI: Data untuk setiap divisi yang ada di KPM.
//
// ✅ TUGAS KALIAN:
//   1. Tambah/edit objek divisi sesuai divisi yang ada di KPM
//   2. Isi semua field TODO pada setiap divisi
//   3. Pilih warna gradient dari daftar di bawah
//
// 🎨 PILIHAN WARNA (salin ke field `color`):
//   "from-blue-500 to-cyan-500"       ← Biru
//   "from-purple-500 to-pink-500"     ← Ungu-pink
//   "from-green-500 to-emerald-500"   ← Hijau
//   "from-red-500 to-orange-500"      ← Merah-oranye
//   "from-yellow-500 to-amber-500"    ← Kuning
//   "from-indigo-500 to-violet-500"   ← Indigo
// =============================================================

export const divisionsData = {
  sectionLabel: "Divisi",
  sectionTitle: "Pilih Jalurmu",
  sectionDescription: "TODO: Tulis deskripsi singkat mengapa KPM punya divisi-divisi ini.",

  divisions: [
    // ── DIVISI 1 ──────────────────────────────────────────────
    {
      id: 1,
      name: "TODO: Nama Divisi 1",
      icon: "🌐",                              // Pilih emoji yang sesuai
      color: "from-blue-500 to-cyan-500",      // Pilih dari daftar di atas
      description: "TODO: Deskripsi singkat apa yang dipelajari di divisi ini (2-3 kalimat).",
      skills: ["TODO: Skill 1", "Skill 2", "Skill 3"], // Teknologi yang dipelajari
      leadBy: "TODO: Nama Ketua Divisi",
      memberCount: 0,
    },

    // ── DIVISI 2 ──────────────────────────────────────────────
    {
      id: 2,
      name: "TODO: Nama Divisi 2",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
      description: "TODO: Deskripsi singkat divisi 2.",
      skills: ["TODO: Skill 1", "Skill 2"],
      leadBy: "TODO: Nama Ketua Divisi",
      memberCount: 0,
    },

    // ── DIVISI 3 ──────────────────────────────────────────────
    {
      id: 3,
      name: "TODO: Nama Divisi 3",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      description: "TODO: Deskripsi singkat divisi 3.",
      skills: ["TODO: Skill 1", "Skill 2"],
      leadBy: "TODO: Nama Ketua Divisi",
      memberCount: 0,
    },

    // ── Tambah divisi lebih banyak dengan copy-paste format di atas ──
  ],
};
