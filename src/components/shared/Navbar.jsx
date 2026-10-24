// =============================================================
// 📁 src/components/shared/Navbar.jsx
// =============================================================
// DIISI OLEH: Gatekeeper (faris) — komponen bersama
// DESKRIPSI: Navigasi yang dipakai di semua halaman.
//
// ⚠️  PERHATIAN:
//   - Ini komponen SHARED — jangan diedit tanpa izin gatekeeper
//   - Untuk menambah menu baru, edit array `navLinks` di bawah
//   - Kalau mau ganti logo/branding, edit bagian Logo di bawah
// =============================================================

import { useState, useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";

// ── Daftar menu navigasi ────────────────────────────────────────
// Sesuaikan href dengan id section yang ada
const navLinks = [
  { label: "Beranda",  href: "#hero" },
  { label: "Tentang",  href: "#about" },
  { label: "Divisi",   href: "#divisions" },
  { label: "Program",  href: "#programs" },
  { label: "Galeri",   href: "#gallery" },
  { label: "Anggota",  href: "#members" },
  { label: "Kontak",   href: "#contact" },
];

function smoothScroll(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    smoothScroll(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ──────────────────────────────────────────── */}
          {/* TODO (gatekeeper): Ganti logo KPM di sini */}
          <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:scale-110 transition-transform">
              {siteConfig.name}
            </div>
            <span className="font-bold text-white hidden sm:block text-sm tracking-wide">
              {siteConfig.fullName}
            </span>
          </a>

          {/* ── Desktop Menu ──────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── CTA Button ────────────────────────────────────── */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-violet-500/25"
            >
              Bergabung
            </a>
          </div>

          {/* ── Mobile Hamburger ──────────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-gray-900/98 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-center"
          >
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
