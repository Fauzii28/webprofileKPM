# 📘 Panduan Kontribusi — Website KPM

Selamat datang di project website KPM! Dokumen ini menjelaskan cara berkontribusi dengan benar agar kolaborasi berjalan lancar.

---

## 🎯 Siapa Mengerjakan Apa?

Setiap section sudah punya tim masing-masing. **Kamu hanya boleh mengerjakan folder section yang ditugaskan kepadamu.**

| Folder | Section | Yang Boleh Diedit |
|--------|---------|------------------|
| `src/sections/01-hero/` | Hero / Landing | Tim Hero |
| `src/sections/02-about/` | Tentang KPM | Tim About |
| `src/sections/03-divisions/` | Divisi | Tim Divisions |
| `src/sections/04-programs/` | Program Kegiatan | Tim Programs |
| `src/sections/05-gallery/` | Galeri | Tim Gallery |
| `src/sections/06-members/` | Anggota | **Semua anggota** (isi data sendiri) |
| `src/sections/07-contact/` | Kontak & FAQ | Tim Contact |
| `src/data/siteConfig.js` | Config Global | 🔒 Gatekeeper only |
| `src/components/shared/` | Navbar & Footer | 🔒 Gatekeeper only |
| `src/App.jsx` | Root App | 🔒 Gatekeeper only |

---

## 🔄 Alur Kerja (Git Workflow)

### Langkah 1 — Fork & Clone
```bash
# Fork dulu di GitHub, lalu clone fork kamu
git clone https://github.com/USERNAME_KAMU/profileKPM.git
cd profileKPM
npm install
```

### Langkah 2 — Buat Branch Baru
```bash
# Format: section/nama-section_nama-kamu
git checkout -b section/hero_budi
# atau
git checkout -b section/members_siti
```

> **Aturan nama branch:**
> - `section/hero_namakamu` → untuk Hero
> - `section/about_namakamu` → untuk About
> - `section/members_namakamu` → untuk Members (semua anggota)
> - dan seterusnya...

### Langkah 3 — Kerjakan Tugasmu

Buka folder section kamu dan edit:
1. **`[nama]Data.js`** — Isi data/konten (teks, link, dsb)
2. **`[Nama].jsx`** — Kustomisasi tampilan (opsional)

> 💡 **Tips:** Jalankan `npm run dev` dan buka http://localhost:5173 untuk melihat perubahan secara real-time.

### Langkah 4 — Commit & Push
```bash
# Tambahkan file yang berubah
git add src/sections/01-hero/

# Commit dengan pesan yang jelas
git commit -m "feat(hero): isi konten headline dan deskripsi"

# Push ke fork kamu
git push origin section/hero_budi
```

> **Format pesan commit:**
> - `feat(section): deskripsi` → fitur baru
> - `fix(section): deskripsi` → perbaikan bug
> - `style(section): deskripsi` → perubahan styling
> - `content(section): deskripsi` → perubahan konten

### Langkah 5 — Buat Pull Request

1. Buka GitHub → pergi ke fork kamu
2. Klik **"Compare & pull request"**
3. Isi deskripsi: apa yang kamu kerjakan, screenshot jika ada
4. Assign ke **gatekeeper** untuk review
5. Tunggu di-approve — **jangan merge sendiri!**

---

## 📸 Cara Menambahkan Foto (untuk Tim Gallery & Members)

```
public/
├── gallery/           ← Foto untuk section Galeri
│   └── nama-foto.jpg
└── members/           ← Foto profil anggota
    └── nama-anggota.jpg
```

**Aturan foto:**
- Format: `.jpg` atau `.webp` (lebih kecil, lebih cepat)
- Ukuran maksimal: **500KB** per foto
- Resolusi minimal: 800x600px untuk galeri, 400x400px untuk member
- Nama file: gunakan huruf kecil dan tanda hubung, contoh: `workshop-react-2024.jpg`

Di file data, isi field `image` / `photo` dengan path relatif:
```js
image: "/gallery/workshop-react-2024.jpg"
// atau
photo: "/members/budi-santoso.jpg"
```

---

## ❌ Yang TIDAK Boleh Dilakukan

- ❌ Edit file di `src/data/siteConfig.js` tanpa izin gatekeeper
- ❌ Edit `src/components/shared/` (Navbar/Footer)
- ❌ Edit `src/App.jsx`
- ❌ Push langsung ke branch `main`
- ❌ Merge PR sendiri tanpa review gatekeeper
- ❌ Menghapus/mengganti `id` pada elemen section (dipakai untuk navigasi)
- ❌ Upload foto > 500KB

---

## 🆘 Butuh Bantuan?

Hubungi gatekeeper melalui:
- Discord server KPM
- DM di Instagram @kpm_official
- Buka **Issue** di GitHub dengan label `question`

---

> Happy coding! 🚀 — Tim KPM
