// =============================================================
// 📁 src/sections/06-members/membersData.js
// =============================================================
// DIISI OLEH: Setiap anggota tim (isi data masing-masing!)
// DESKRIPSI: Data profil anggota/pengurus inti KPM.
//
// ✅ TUGAS KALIAN (masing-masing anggota):
//   1. Copy satu blok template di bawah
//   2. Isi dengan data kalian sendiri
//   3. Foto: simpan di public/members/nama-file.jpg
//      lalu isi `photo` dengan "/members/nama-file.jpg"
//   4. Jika tidak mau pakai foto, set photo: null
//      (akan muncul inisial otomatis)
//
// ⚠️  ATURAN:
//   - Jangan edit data orang lain!
//   - Setiap orang punya ID unik (nomor urut)
//   - Koordinasikan dengan gatekeeper jika ada konflik ID
// =============================================================

export const membersData = {
  sectionLabel: "Tim Inti",
  sectionTitle: "Orang-orang di Balik KPM",
  sectionDescription: "TODO: Tulis deskripsi singkat tentang tim pengurus KPM.",

  members: [
    // ── TEMPLATE (copy & paste untuk setiap anggota) ──────────
    // {
    //   id: 1,
    //   name: "Nama Lengkap",
    //   role: "Jabatan / Role",          // contoh: "Ketua Umum"
    //   division: "Nama Divisi",         // contoh: "Web Development"
    //   angkatan: "20XX",               // Tahun angkatan
    //   photo: null,                     // "/members/nama.jpg" atau null
    //   initials: "NL",                  // 2 huruf inisial (auto-tampil jika photo null)
    //   avatarColor: "from-blue-500 to-cyan-600",  // Warna avatar
    //   skills: ["Skill 1", "Skill 2", "Skill 3"],
    //   github: "namauser",              // username GitHub saja (tanpa https://github.com/)
    //   linkedin: "namauser",           // username LinkedIn saja
    // },

    // ── PENGURUS 1 (Ketua Umum) ───────────────────────────────
    {
      id: 1,
      name: "TODO: Nama Ketua",
      role: "Ketua Umum",
      division: "TODO: Divisi",
      angkatan: "20XX",
      photo: null,
      initials: "??",
      avatarColor: "from-violet-500 to-cyan-600",
      skills: ["TODO: skill"],
      github: null,
      linkedin: null,
    },

    // ── PENGURUS 2 ────────────────────────────────────────────
    {
      id: 2,
      name: "TODO: Nama Anggota 2",
      role: "TODO: Jabatan",
      division: "TODO: Divisi",
      angkatan: "20XX",
      photo: null,
      initials: "??",
      avatarColor: "from-purple-500 to-pink-600",
      skills: ["TODO: skill"],
      github: null,
      linkedin: null,
    },

    // ── Tambah anggota lebih banyak di sini ───────────────────
  ],
};
