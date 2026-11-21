# 📸 Folder Foto Galeri

Taruh foto kegiatan KPM di sini, lalu daftarkan di `src/sections/05-gallery/galleryData.js`.

## Struktur

```
public/gallery/
├── workshop/     ← foto workshop / pelatihan
├── hackathon/    ← foto hackathon
├── event/        ← foto acara umum
└── kompetisi/    ← foto lomba / kompetisi
```

Boleh juga taruh langsung di root `public/gallery/` kalau tidak mau pakai subfolder.

## Aturan foto

- Format: `.jpg` atau `.webp` (webp lebih kecil & lebih cepat)
- Ukuran maksimal: **500KB** per foto
- Resolusi minimal: **800×600px**
- Nama file: huruf kecil + tanda hubung, contoh `workshop-react-2024.jpg`

## Cara pakai

1. Masukkan foto, misalnya ke `public/gallery/workshop/workshop-react-2024.jpg`
2. Di `galleryData.js`, isi field `image` pada item yang sesuai:

```js
{
  id: 1,
  title: "Workshop React",
  category: "Workshop",
  description: "Belajar dasar React bareng KPM",
  image: "/gallery/workshop/workshop-react-2024.jpg",
  placeholderColor: "from-blue-600 to-cyan-500",
  placeholderIcon: "📸",
}
```

Path diawali `/` karena file di dalam `public/` disajikan dari root website.

`category` harus persis sama dengan salah satu nilai di `galleryData.categories`, kalau tidak foto tidak akan muncul saat filter dipilih.

Kalau foto belum ada, biarkan `image: null` — kartu akan menampilkan gradient + emoji placeholder.
