// =============================================================
// 📁 src/data/siteConfig.js
// =============================================================
// DIISI OLEH: Tim Core / Gatekeeper (faris)
// DESKRIPSI: Konfigurasi global website KPM — nama, link sosmed,
//            warna brand, dan metadata lainnya.
//
// ⚠️  JANGAN EDIT tanpa izin gatekeeper.
// =============================================================

export const siteConfig = {
  // ── Identitas Komunitas ──────────────────────────────────────
  name: "KPM",
  fullName: "Komunitas Pemrograman Mahasiswa",
  tagline: "Isi tagline KPM di sini...",
  description: "Isi deskripsi singkat KPM di sini...",
  founded: "20XX",           // Tahun berdiri
  university: "Nama Universitas",

  // ── Kontak ──────────────────────────────────────────────────
  email: "kpm@university.ac.id",
  location: "Nama Universitas, Kota, Indonesia",

  // ── Social Media ─────────────────────────────────────────────
  // Isi dengan URL lengkap atau null jika belum ada
  socials: {
    instagram: null,    // contoh: "https://instagram.com/kpm_official"
    github: null,       // contoh: "https://github.com/kpm-official"
    discord: null,      // contoh: "https://discord.gg/kpm"
    linkedin: null,     // contoh: "https://linkedin.com/company/kpm"
    youtube: null,
    twitter: null,
  },

  // ── Statistik (diisi manual) ─────────────────────────────────
  stats: {
    members: 0,         // Jumlah anggota aktif
    projects: 0,        // Jumlah project selesai
    events: 0,          // Jumlah event yang pernah diadakan
  },
};
