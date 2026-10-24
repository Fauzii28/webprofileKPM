# 🚀 KPM — Website Profil Komunitas Pemrograman Mahasiswa

> Website resmi KPM dibangun dengan **React + Vite + Tailwind CSS**

---

## 🗂️ Struktur Project

```
src/
├── data/
│   └── siteConfig.js          ← ⚙️  Konfigurasi global (gatekeeper)
├── components/
│   └── shared/
│       ├── Navbar.jsx         ← 🔒 Shared - gatekeeper only
│       └── Footer.jsx         ← 🔒 Shared - gatekeeper only
└── sections/
    ├── 01-hero/               ← 👤 Tim Hero
    │   ├── Hero.jsx
    │   └── heroData.js
    ├── 02-about/              ← 👤 Tim About
    │   ├── About.jsx
    │   └── aboutData.js
    ├── 03-divisions/          ← 👤 Tim Divisions
    │   ├── Divisions.jsx
    │   └── divisionsData.js
    ├── 04-programs/           ← 👤 Tim Programs
    │   ├── Programs.jsx
    │   └── programsData.js
    ├── 05-gallery/            ← 👤 Tim Gallery
    │   ├── Gallery.jsx
    │   └── galleryData.js
    ├── 06-members/            ← 👤 Semua anggota (isi data sendiri)
    │   ├── Members.jsx
    │   └── membersData.js
    └── 07-contact/            ← 👤 Tim Contact
        ├── Contact.jsx
        └── contactData.js
```

---

## ⚡ Setup & Menjalankan Project

```bash
# 1. Clone repository
git clone https://github.com/[username]/profileKPM.git
cd profileKPM

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka browser ke: **http://localhost:5173**

---

## 📖 Cara Berkontribusi

Baca [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan lengkap.

**Singkatnya:**
1. Fork repository ini
2. Buat branch baru: `git checkout -b section/nama-kamu`
3. Edit file di folder section kamu
4. Push dan buat Pull Request ke `main`

---

## 👥 Tim Pengerjaan

| Section | Tim/PIC |
|---------|---------|
| Hero | — |
| About | — |
| Divisions | — |
| Programs | — |
| Gallery | — |
| Members | Semua anggota |
| Contact | — |
| Shared (Navbar/Footer) | Gatekeeper |

---

## 🔒 Aturan

- File di `src/data/siteConfig.js` dan `src/components/shared/` hanya boleh diedit oleh **gatekeeper**
- Setiap tim hanya mengerjakan folder section masing-masing
- Semua perubahan harus melalui **Pull Request** — tidak boleh push langsung ke `main`
