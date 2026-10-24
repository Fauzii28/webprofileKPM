// =============================================================
// 📁 src/sections/01-hero/Hero.jsx
// =============================================================
// DIISI OLEH: Tim Hero Section
// DESKRIPSI: Komponen tampilan Hero — bagian pertama yang dilihat
//            pengunjung saat membuka website KPM.
//
// ✅ TUGAS KALIAN:
//   1. Edit heroData.js untuk mengisi konten (teks, tombol, dsb)
//   2. Kustomisasi tampilan di file ini sesuai selera tim
//   3. Jangan lupa import dari heroData.js, bukan hardcode!
//
// 💡 TIPS DESAIN:
//   - Section ini harus "WOW" — kesan pertama pengunjung
//   - Bisa tambah animasi, background pattern, ilustrasi, dll
//   - Lihat referensi: https://land-book.com untuk inspirasi hero
//
// 📐 LAYOUT YANG TERSEDIA:
//   - Centered (teks di tengah) ← default placeholder ini
//   - Split (teks kiri, gambar kanan)
//   - Full-screen dengan background image/video
// =============================================================

import { siteConfig } from "../../data/siteConfig";
import { heroData } from "./heroData";

export default function Hero() {
  return (
    // ─── JANGAN HAPUS id="hero" — dipakai untuk smooth scroll navigasi ───
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* ================================================================
          🎨 ZONA DESAIN: Background / Dekorasi Visual
          ================================================================
          Tambahkan background, pattern, gradient, partikel, dsb di sini.
          Contoh yang bisa dicoba:
          - Gradient orbs (blur circles)
          - Grid pattern
          - Animated particles
          - Background image dengan overlay
          ================================================================ */}
      <div className="absolute inset-0">
        {/* TODO: Tambahkan elemen background visual di sini */}
        {/* Contoh placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      </div>

      {/* ================================================================
          📝 ZONA KONTEN: Teks & Tombol
          ================================================================ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge (opsional) */}
        {heroData.badge && (
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
            {heroData.badge}
          </div>
        )}

        {/* Headline Utama */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
          {/* TODO: Kustomisasi styling headline di sini */}
          {heroData.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-gray-400 mb-4 font-medium">
          {heroData.subheadline}
        </p>

        {/* Deskripsi */}
        <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg mb-10 leading-relaxed">
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href={heroData.ctaPrimary.href}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-lg hover:opacity-90 transition-all"
          >
            {heroData.ctaPrimary.label}
          </a>
          <a
            href={heroData.ctaSecondary.href}
            className="px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all"
          >
            {heroData.ctaSecondary.label}
          </a>
        </div>

        {/* Stats dari siteConfig */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { value: siteConfig.stats.members, label: "Anggota Aktif" },
            { value: siteConfig.stats.projects, label: "Project" },
            { value: siteConfig.stats.events, label: "Event" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              {/* TODO: Bisa tambahkan animated counter di sini */}
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}+</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* ================================================================
          🎨 ZONA DESAIN: Scroll Indicator (bawah layar)
          ================================================================ */}
      {/* TODO: Tambahkan scroll indicator / arrow down di sini (opsional) */}
    </section>
  );
}
