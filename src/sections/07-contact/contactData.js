// =============================================================
// 📁 src/sections/07-contact/contactData.js
// =============================================================
// DIISI OLEH: Tim Contact Section
// DESKRIPSI: Data untuk section kontak — form, sosmed, FAQ.
//
// ✅ TUGAS KALIAN:
//   1. Isi info kontak di bagian bawah (email, lokasi)
//   2. Isi FAQ dengan pertanyaan yang sering ditanya
//   3. Pilihan divisiForms bisa ditambah sesuai divisi yang ada
// =============================================================

import { siteConfig } from "../../data/siteConfig";

export const contactData = {
  sectionLabel: "Kontak",
  sectionTitle: "Mari Terhubung",
  sectionDescription: "TODO: Tulis kalimat ajakan untuk menghubungi KPM.",

  // Opsi divisi di dropdown form (sinkronkan dengan divisionsData)
  divisionOptions: [
    "TODO: Nama Divisi 1",
    "TODO: Nama Divisi 2",
    "TODO: Nama Divisi 3",
    // Tambah divisi lainnya...
  ],

  // Pesan sukses setelah form di-submit
  successMessage: "✅ Pesan terkirim! Tim KPM akan segera menghubungi kamu.",

  // FAQ — Pertanyaan yang Sering Ditanyakan
  faqs: [
    {
      id: 1,
      question: "TODO: Pertanyaan 1 yang sering ditanya?",
      answer: "TODO: Jawaban untuk pertanyaan 1.",
    },
    {
      id: 2,
      question: "TODO: Pertanyaan 2 yang sering ditanya?",
      answer: "TODO: Jawaban untuk pertanyaan 2.",
    },
    {
      id: 3,
      question: "Apakah bergabung KPM gratis?",
      answer: "TODO: Jawab apakah ada biaya pendaftaran atau tidak.",
    },
    // Tambah FAQ lebih banyak di sini...
  ],
};
