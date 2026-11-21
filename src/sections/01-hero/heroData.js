// =============================================================
// 📁 src/sections/01-hero/heroData.js
// =============================================================
// DIISI OLEH: Tim Hero Section
// DESKRIPSI: Data konten untuk bagian Hero (halaman utama landing).
//
// ✅ TUGAS KALIAN:
//   1. Sesuaikan teks di bawah dengan kondisi KPM yang sebenarnya
//   2. Jangan ubah nama variabel/key yang sudah ada
//   3. Statistik diambil otomatis dari siteConfig.stats
// =============================================================

export const heroData = {
  // Badge kecil di atas headline
  badge: "Komunitas Pemrograman Mahasiswa",

  // Headline utama — satu baris = satu <span>
  // `headlineAccent` = index baris yang diberi warna gradient (0, 1, 2, ...)
  headline: [
    "Dari baris",
    "pertama, jadi",
    "karya nyata.",
  ],
  headlineAccent: 2,

  // Sub-judul di bawah headline
  subheadline:
    "Komunitas pemrograman mahasiswa untuk belajar, berkarya, dan bertumbuh bersama.",

  // Paragraf deskripsi singkat
  description:
    "Dari workshop dan hackathon sampai proyek open source — di sini kamu menemukan tempat untuk mencoba, gagal, belajar, dan mencoba lagi.",

  // Tombol utama (Call to Action)
  ctaPrimary: {
    label: "Gabung KPM",
    href: "#contact",
  },

  // Tombol sekunder
  ctaSecondary: {
    label: "Kenali KPM",
    href: "#about",
  },

  // Statistik — `key` merujuk ke siteConfig.stats
  stats: [
    { key: "members", label: "Anggota aktif" },
    { key: "projects", label: "Proyek selesai" },
    { key: "events", label: "Event digelar" },
  ],

  // Terminal ilustrasi "sesi pertama di KPM" (dekoratif)
  terminal: {
    title: "~/kpm",
    branch: "main",
    sessions: [
      {
        command: "whoami",
        output: [
          { type: "text", text: "mahasiswa yang ingin berkembang" },
        ],
      },
      {
        command: "kpm join",
        output: [
          { type: "info", text: "Mencari mentor yang cocok..." },
          { type: "success", text: "Mentor ditemukan" },
          { type: "success", text: "Proyek pertama dimulai" },
        ],
      },
      {
        command: "git log --oneline -1",
        output: [
          { type: "commit", hash: "a1b2c3d", text: "hari pertama di KPM" },
        ],
      },
    ],
  },

  // Teks indikator scroll di bawah layar
  scrollLabel: "Gulir untuk kenalan",
};
