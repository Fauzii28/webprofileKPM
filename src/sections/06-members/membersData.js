// =============================================================
// 📁 src/sections/06-members/membersData.js
// =============================================================
// DIISI OLEH: Setiap anggota tim (isi data masing-masing!)
// DESKRIPSI: Data profil anggota/pengurus inti KPM.
//
// ✅ DATA ANGGOTA DIAMBIL DARI KONSTANTA `MEMBERS` (statis,
//    tanpa fetch/backend). Tambah atau edit objek di array itu.
//
// 📸 FOTO:
//   - Simpan di public/members/nama-file.jpg
//   - Isi `photo: "/members/nama-file.jpg"`
//   - Atau `photo: null` untuk memakai inisial otomatis
//
// 🔗 SOSMED:
//   - Isi username saja (tanpa https://github.com/)
//   - `null` = tombol sosmed tidak ditampilkan
//
// ⚠️  ATURAN:
//   - Jangan edit data orang lain!
//   - Setiap orang punya ID unik (nomor urut)
//   - Data di bawah masih CONTOH — ganti dengan data asli
// =============================================================

export const MEMBERS = [
  {
    id: 1,
    name: "Raka Pratama",
    role: "Ketua Umum",
    division: "Inti",
    angkatan: "2022",
    photo: null,
    initials: "RP",
    avatarColor: "from-violet-500 to-cyan-600",
    skills: ["Leadership", "React", "Node.js"],
    github: null,
    linkedin: null,
  },
  {
    id: 2,
    name: "Nadia Putri",
    role: "Wakil Ketua",
    division: "Inti",
    angkatan: "2022",
    photo: null,
    initials: "NP",
    avatarColor: "from-fuchsia-500 to-pink-600",
    skills: ["Public Speaking", "Product", "UI/UX"],
    github: null,
    linkedin: null,
  },
  {
    id: 3,
    name: "Bagas Saputra",
    role: "Ketua Divisi",
    division: "Web Development",
    angkatan: "2023",
    photo: null,
    initials: "BS",
    avatarColor: "from-cyan-500 to-blue-600",
    skills: ["React", "Next.js", "Tailwind"],
    github: null,
    linkedin: null,
  },
  {
    id: 4,
    name: "Salsabila Rahma",
    role: "Ketua Divisi",
    division: "Mobile Development",
    angkatan: "2023",
    photo: null,
    initials: "SR",
    avatarColor: "from-emerald-500 to-teal-600",
    skills: ["Flutter", "Kotlin"],
    github: null,
    linkedin: null,
  },
  {
    id: 5,
    name: "Dimas Arya",
    role: "Ketua Divisi",
    division: "AI & Data",
    angkatan: "2023",
    photo: null,
    initials: "DA",
    avatarColor: "from-amber-500 to-orange-600",
    skills: ["Python", "TensorFlow", "Pandas"],
    github: null,
    linkedin: null,
  },
  {
    id: 6,
    name: "Alya Nuraini",
    role: "Ketua Divisi",
    division: "Cybersecurity",
    angkatan: "2023",
    photo: null,
    initials: "AN",
    avatarColor: "from-rose-500 to-red-600",
    skills: ["Linux", "Networking"],
    github: null,
    linkedin: null,
  },
  {
    id: 7,
    name: "Fikri Ramadhan",
    role: "Pengurus",
    division: "Web Development",
    angkatan: "2024",
    photo: null,
    initials: "FR",
    avatarColor: "from-blue-500 to-indigo-600",
    skills: ["TypeScript", "Vue", "Git"],
    github: null,
    linkedin: null,
  },
  {
    id: 8,
    name: "Intan Permata",
    role: "Pengurus",
    division: "AI & Data",
    angkatan: "2024",
    photo: null,
    initials: "IP",
    avatarColor: "from-purple-500 to-violet-600",
    skills: ["PyTorch", "SQL"],
    github: null,
    linkedin: null,
  },
];

export const membersData = {
  sectionLabel: "Tim Inti",
  sectionTitle: "Orang-orang di Balik KPM",
  sectionDescription:
    "Orang-orang yang merawat komunitas, membuka kelas, dan memastikan setiap anggota punya ruang untuk bertumbuh.",
};
