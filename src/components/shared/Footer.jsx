// =============================================================
// 📁 src/components/shared/Footer.jsx
// =============================================================
// DIISI OLEH: Gatekeeper (faris) — komponen bersama
// DESKRIPSI: Footer global website KPM.
//
// ⚠️  Komponen SHARED — jangan diedit tanpa izin gatekeeper.
// =============================================================

import { siteConfig } from "../../data/siteConfig";

const navLinks = [
  { label: "Beranda",  href: "#hero" },
  { label: "Tentang",  href: "#about" },
  { label: "Divisi",   href: "#divisions" },
  { label: "Program",  href: "#programs" },
  { label: "Galeri",   href: "#gallery" },
  { label: "Anggota",  href: "#members" },
  { label: "Kontak",   href: "#contact" },
];

const socialIcons = {
  instagram: "📸",
  github:    "💻",
  discord:   "🎮",
  linkedin:  "💼",
  youtube:   "▶️",
  twitter:   "🐦",
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                {siteConfig.name}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{siteConfig.name}</div>
                <div className="text-gray-500 text-xs">{siteConfig.fullName}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              {siteConfig.description}
            </p>
            {/* Social Icons — otomatis dari siteConfig.socials */}
            <div className="flex gap-2 flex-wrap">
              {Object.entries(siteConfig.socials)
                .filter(([, url]) => url !== null)
                .map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-base hover:scale-110 transition-all border border-white/10"
                    title={platform}
                  >
                    {socialIcons[platform] || "🔗"}
                  </a>
                ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Kontak</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-2">
                <span>📍</span>
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span>📅</span>
                <span>Berdiri sejak {siteConfig.founded}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <span className="text-red-400">❤️</span> by {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
