// =============================================================
// 📁 src/components/shared/Footer.jsx
// =============================================================
// DIISI OLEH: Gatekeeper (faris) — komponen bersama
// DESKRIPSI: Footer global website KPM.
//
// ⚠️  Komponen SHARED — jangan diedit tanpa izin gatekeeper.
// =============================================================

import { siteConfig } from "../../data/siteConfig";
import { navLinks } from "../../data/navLinks";

const socialIcons = {
  instagram: "📸",
  github: "💻",
  discord: "🎮",
  linkedin: "💼",
  youtube: "▶️",
  twitter: "🐦",
};

const currentYear = new Date().getFullYear();

function ArrowUp() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
    >
      <path d="M8 12.5v-9M4.5 7 8 3.5 11.5 7" />
    </svg>
  );
}

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
                <div className="font-bold text-white text-sm">
                  {siteConfig.name}
                </div>
                <div className="text-gray-500 text-xs">
                  {siteConfig.fullName}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              {siteConfig.description}
            </p>
            {/* Social Icons — otomatis dari siteConfig.socials */}
            <div className="flex gap-2 flex-wrap">
              {Object.entries(siteConfig.socials)
                .filter(([, url]) => Boolean(url))
                .map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-base hover:scale-110 transition-all border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                    title={platform}
                  >
                    {socialIcons[platform] || "🔗"}
                  </a>
                ))}
            </div>
          </div>

          {/* Navigasi */}
          <nav aria-labelledby="footer-nav-heading">
            <h3
              id="footer-nav-heading"
              className="font-semibold text-white mb-4 text-sm"
            >
              Navigasi
            </h3>
            <ul className="columns-2 gap-x-8">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="mb-2 break-inside-avoid"
                >
                  <a
                    href={link.href}
                    className="rounded-sm text-gray-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Kontak</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-2">
                <span aria-hidden="true">📍</span>
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">✉️</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">📅</span>
                <span>Sejak {siteConfig.founded}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="text-gray-600 text-sm flex items-center gap-1 whitespace-nowrap">
              Made with <span className="text-red-400">❤️</span> by{" "}
              {siteConfig.name}
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block h-3 w-px bg-white/10"
            />
            <a
              href="#hero"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm text-sm text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Kembali ke atas
              <ArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
