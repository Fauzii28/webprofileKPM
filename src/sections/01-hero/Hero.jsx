// =============================================================
// 📁 src/sections/01-hero/Hero.jsx
// =============================================================
// DIISI OLEH: Tim Hero Section
// DESKRIPSI: Hero dengan layout split — narasi di kiri, terminal
//            ilustrasi "sesi pertama di KPM" di kanan.
//
// ✅ KONTEN: edit heroData.js (teks, CTA, statistik, isi terminal)
// 🎨 TAMPILAN: styling & animasi ada di hero.css (scoped)
//
// ⚠️  Jangan hapus id="hero" — dipakai untuk smooth scroll navigasi.
// =============================================================

import { useEffect, useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import { heroData } from "./heroData";
import "./hero.css";

// ── Utilitas animasi angka ────────────────────────────────────
const easeOutCubic = (t) => 1 - (1 - t) ** 3;

function useCountUp(target, duration = 1400) {
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reducedMotion || !Number.isFinite(target) || target <= 0) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, reducedMotion]);

  if (reducedMotion || !Number.isFinite(target) || target <= 0) {
    return Number.isFinite(target) ? target : 0;
  }

  return Math.min(value, target);
}

// ── Satu item statistik ───────────────────────────────────────
function Stat({ value, label }) {
  const count = useCountUp(value);
  const isDone = count === value;

  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-mono text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
        {count}
        {isDone && value > 0 && <span className="text-violet-400">+</span>}
      </dd>
      <dd
        aria-hidden="true"
        className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gray-400 sm:text-[11px]"
      >
        {label}
      </dd>
    </div>
  );
}

// ── Ikon inline (tanpa dependency tambahan) ───────────────────
function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
    >
      <path d="M8 3.5v9M4.5 9 8 12.5 11.5 9" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <path d="M6 7.2v9.6M6 12h6a6 6 0 0 0 6-6" />
    </svg>
  );
}

// ── Gaya output terminal per tipe ─────────────────────────────
const terminalOutputStyles = {
  text: "text-gray-500",
  info: "text-cyan-300/90",
  success: "text-emerald-400",
};

const terminalOutputPrefix = {
  info: "→ ",
  success: "✓ ",
};

// ── Komponen utama ────────────────────────────────────────────
export default function Hero() {
  const { terminal } = heroData;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-gray-950"
    >
      {/* ================================================================
          🎨 Background: grid blueprint + aurora + fade bawah
          ================================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="hero-aurora--violet absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="hero-aurora--cyan absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-24">
        {/* ==============================================================
            📝 Kolom kiri: narasi utama
            ============================================================== */}
        <div className="lg:col-span-7">
          {/* Badge */}
          <div
            className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="hero-ping absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-gray-300 sm:text-[11px]">
              {heroData.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="hero-reveal mt-7 text-[clamp(2.25rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white"
            style={{ animationDelay: "0.12s" }}
          >
            {heroData.headline.map((line, index) => (
              <span
                key={index}
                className={`block ${
                  index === heroData.headlineAccent
                    ? "bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Sub-headline */}
          <p
            className="hero-reveal mt-6 max-w-xl text-lg font-medium text-gray-300 sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            {heroData.subheadline}
          </p>

          {/* Deskripsi */}
          <p
            className="hero-reveal mt-3 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base"
            style={{ animationDelay: "0.26s" }}
          >
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.34s" }}
          >
            <a
              href={heroData.ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-all duration-300 hover:bg-violet-100 hover:shadow-[0_0_36px_-10px_rgba(167,139,250,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              {heroData.ctaPrimary.label}
              <ArrowUpRight />
            </a>
            <a
              href={heroData.ctaSecondary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              {heroData.ctaSecondary.label}
              <ArrowDown />
            </a>
          </div>

          {/* Statistik dari siteConfig.stats */}
          <dl
            className="hero-reveal mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7"
            style={{ animationDelay: "0.42s" }}
          >
            {heroData.stats.map((stat) => (
              <Stat
                key={stat.key}
                value={siteConfig.stats[stat.key] ?? 0}
                label={stat.label}
              />
            ))}
          </dl>
        </div>

        {/* ==============================================================
            💻 Kolom kanan: terminal ilustrasi
            ============================================================== */}
        <div className="lg:col-span-5">
          <div
            className="hero-reveal relative mx-auto w-full max-w-[30rem] lg:ml-auto"
            style={{ animationDelay: "0.28s" }}
          >
            {/* Glow di belakang kartu */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-violet-600/20 blur-3xl"
            />

            {/* Gradient border + kartu terminal */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-cyan-400/25 p-px shadow-2xl shadow-violet-950/50">
              <div
                role="img"
                aria-label="Ilustrasi terminal: bergabung dengan KPM, mendapat mentor, dan memulai proyek pertama."
                className="overflow-hidden rounded-[15px] bg-[#0a0a11]"
              >
                <div aria-hidden="true">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
                    <span className="ml-2 font-mono text-[11px] text-gray-500">
                      {terminal.title}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-gray-400">
                      <BranchIcon />
                      {terminal.branch}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="space-y-4 whitespace-pre-wrap break-words px-4 py-5 font-mono text-[11.5px] leading-relaxed sm:px-5 sm:text-[12.5px]">
                    {terminal.sessions.map((session, sessionIndex) => (
                      <div
                        key={session.command}
                        className="hero-reveal space-y-1.5"
                        style={{
                          animationDelay: `${0.58 + sessionIndex * 0.5}s`,
                        }}
                      >
                        {/* Command */}
                        <div className="flex gap-2">
                          <span className="select-none text-violet-400">❯</span>
                          <span className="text-gray-100">{session.command}</span>
                        </div>

                        {/* Output */}
                        {session.output.map((line, lineIndex) =>
                          line.type === "commit" ? (
                            <div
                              key={lineIndex}
                              className="flex gap-2 pl-5"
                            >
                              <span className="text-amber-300">
                                {line.hash}
                              </span>
                              <span className="text-gray-400">{line.text}</span>
                            </div>
                          ) : (
                            <div
                              key={lineIndex}
                              className={`pl-5 ${
                                terminalOutputStyles[line.type] ??
                                "text-gray-500"
                              }`}
                            >
                              {terminalOutputPrefix[line.type] ?? ""}
                              {line.text}
                            </div>
                          ),
                        )}
                      </div>
                    ))}

                    {/* Prompt terakhir + kursor */}
                    <div
                      className="hero-reveal flex items-center gap-2"
                      style={{
                        animationDelay: `${0.58 + terminal.sessions.length * 0.5}s`,
                      }}
                    >
                      <span className="text-violet-400">❯</span>
                      <span className="hero-cursor h-3.5 w-[7px] rounded-[1px] bg-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          🎨 Scroll indicator
          ================================================================ */}
      <a
        href="#about"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-label="Gulir ke bagian tentang KPM"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gray-500 transition-colors group-hover:text-gray-300">
          {heroData.scrollLabel}
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <span className="hero-scroll absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-violet-400 to-transparent" />
        </span>
      </a>
    </section>
  );
}
