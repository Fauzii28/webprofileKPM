// =============================================================
// 📁 src/sections/05-gallery/Gallery.jsx
// =============================================================
// DIISI OLEH: Tim Gallery Section
// DESKRIPSI: Komponen tampilan galeri foto kegiatan KPM.
//
// ✅ TUGAS KALIAN:
//   1. Isi galleryData.js dengan foto-foto dan keterangannya
//   2. Simpan foto di folder public/gallery/
//   3. Kustomisasi tampilan galeri (grid, masonry, carousel, dll)
//
// 💡 TIPS DESAIN:
//   - Masonry grid terlihat lebih menarik dari grid biasa
//   - Lightbox (zoom foto saat diklik) = UX yang bagus
//   - Filter kategori bisa pakai animasi smooth
// =============================================================

import { useState } from "react";
import { galleryData } from "./galleryData";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered =
    activeFilter === "Semua"
      ? galleryData.items
      : galleryData.items.filter((item) => item.category === activeFilter);

  return (
    // ─── JANGAN HAPUS id="gallery" ───
    <section id="gallery" className="py-24 bg-gray-950 relative overflow-hidden">

      {/* ================================================================
          🎨 ZONA DESAIN: Background
          ================================================================ */}
      <div className="absolute inset-0">
        {/* TODO: Tambahkan elemen background di sini */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            {galleryData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {galleryData.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {galleryData.sectionDescription}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid — Placeholder jika kosong */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-white/20">
            <p className="text-gray-600">
              📸 Foto-foto KPM akan muncul di sini —
              isi <code className="text-pink-400">galleryData.items</code>
            </p>
          </div>
        ) : (
          // ================================================================
          // 🎨 ZONA DESAIN: Layout Galeri
          // ================================================================
          // TODO: Kustomisasi layout grid di sini
          // Contoh: bisa ganti ke masonry, carousel, atau lightbox
          // ================================================================
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden aspect-video hover:scale-[1.02] transition-transform duration-300 shadow-xl"
              >
                {item.image ? (
                  // Foto nyata
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder warna jika belum ada foto
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.placeholderColor} flex items-center justify-center`}>
                    <span className="text-5xl opacity-30">{item.placeholderIcon}</span>
                  </div>
                )}

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
