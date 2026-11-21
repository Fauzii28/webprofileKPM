// =============================================================
// 📁 src/sections/06-members/Members.jsx
// =============================================================
// DIISI OLEH: Tim Members Section
// DESKRIPSI: Roster anggota/pengurus KPM dengan filter divisi.
//            Data diambil dari konstanta `MEMBERS` (membersData.js).
//
// ✅ KONTEN: edit array MEMBERS di membersData.js
// 📸 FOTO: simpan di public/members/ lalu isi field `photo`
//
// 💡 TIPS DESAIN:
//   - Kartu memakai cover gradient + inisial otomatis
//   - Filter divisi dibuat otomatis dari data anggota
//   - Tambah anggota baru tanpa mengubah komponen ini
// =============================================================

import { useState } from "react";
import { MEMBERS, membersData } from "./membersData";
import "./members.css";

const ALL_DIVISIONS = "Semua";

// ── Inisial otomatis jika `initials` tidak diisi ──────────────
function getInitials(name = "") {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase() || "?"
  );
}

// ── Ikon inline ───────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

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

// ── Kartu anggota ─────────────────────────────────────────────
function MemberCard({ member }) {
  const {
    id,
    name,
    role,
    division,
    angkatan,
    photo,
    initials,
    avatarColor,
    skills = [],
    github,
    linkedin,
  } = member;

  const displayInitials = initials || getInitials(name);
  const hasSocials = Boolean(github || linkedin);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gray-950/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 focus-within:-translate-y-1 focus-within:border-white/20">
      {/* Cover + avatar */}
      <div className="relative">
        <div
          className={`relative h-28 overflow-hidden bg-gradient-to-br ${avatarColor}`}
        >
          <div aria-hidden="true" className="members-dots absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-950/45"
          />
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-3 select-none font-mono text-7xl font-bold leading-none text-white/10"
          >
            {displayInitials}
          </span>
          <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-white/60">
            #{String(id).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute -bottom-7 left-5">
          {photo ? (
            <img
              src={photo}
              alt={`Foto ${name}`}
              width={64}
              height={64}
              loading="lazy"
              className="h-16 w-16 rounded-2xl object-cover ring-4 ring-gray-900 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              aria-hidden="true"
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${avatarColor} text-lg font-bold text-white ring-4 ring-gray-900 transition-transform duration-300 group-hover:scale-105`}
            >
              {displayInitials}
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-10">
        <h3 className="text-base font-bold leading-snug text-white">{name}</h3>
        <p className="mt-0.5 text-sm font-medium text-cyan-300">{role}</p>
        <p className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <span
            aria-hidden="true"
            className="h-1 w-1 shrink-0 rounded-full bg-cyan-400"
          />
          {division}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <div className="mt-5 flex min-h-7 items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
            Angkatan {angkatan}
          </span>

          {hasSocials && (
            <div className="flex items-center gap-1.5">
              {github && (
                <a
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub ${name}`}
                  title={`GitHub ${name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <GithubIcon />
                </a>
              )}
              {linkedin && (
                <a
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${name}`}
                  title={`LinkedIn ${name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Komponen utama ────────────────────────────────────────────
export default function Members() {
  const [activeDivision, setActiveDivision] = useState(ALL_DIVISIONS);

  const divisions = [
    ALL_DIVISIONS,
    ...new Set(
      MEMBERS.map((member) => member.division).filter(
        (division) => division && division !== ALL_DIVISIONS,
      ),
    ),
  ];

  const filteredMembers =
    activeDivision === ALL_DIVISIONS
      ? MEMBERS
      : MEMBERS.filter((member) => member.division === activeDivision);

  const countLabel = String(filteredMembers.length).padStart(2, "0");
  const totalLabel = String(MEMBERS.length).padStart(2, "0");

  return (
    <section
      id="members"
      aria-labelledby="members-title"
      className="relative overflow-hidden bg-gray-900 py-24"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400">
            {membersData.sectionLabel}
          </span>
          <h2
            id="members-title"
            className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            {membersData.sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {membersData.sectionDescription}
          </p>
        </div>

        {/* Toolbar: filter + jumlah anggota */}
        {MEMBERS.length > 0 && (
          <div className="mt-12 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter anggota berdasarkan divisi"
              className="flex flex-wrap gap-2"
            >
              {divisions.map((division) => {
                const isActive = activeDivision === division;

                return (
                  <button
                    key={division}
                    type="button"
                    onClick={() => setActiveDivision(division)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
                      isActive
                        ? "border-white bg-white text-gray-950"
                        : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {division}
                  </button>
                );
              })}
            </div>

            <p
              aria-live="polite"
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500"
            >
              <span className="text-cyan-300">{countLabel}</span>
              <span className="mx-1 text-gray-600">/</span>
              {totalLabel} anggota
            </p>
          </div>
        )}

        {/* Grid / empty state */}
        {MEMBERS.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-white/15 px-6 py-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500">
              // belum ada data
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Tambahkan anggota ke array{" "}
              <code className="text-cyan-300">MEMBERS</code> di{" "}
              <code className="text-cyan-300">membersData.js</code>.
            </p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-white/15 px-6 py-16 text-center">
            <p className="text-sm text-gray-400">
              Belum ada anggota di divisi{" "}
              <span className="text-white">{activeDivision}</span>.
            </p>
            <button
              type="button"
              onClick={() => setActiveDivision(ALL_DIVISIONS)}
              className="mt-4 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Tampilkan semua
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* CTA */}
        {MEMBERS.length > 0 && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/[0.06] via-white/[0.02] to-violet-500/[0.06] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-semibold text-white">
                  Mau namamu ada di daftar ini?
                </p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-gray-400">
                  Kami membuka ruang untuk mahasiswa yang ingin belajar,
                  berkarya, dan bertumbuh bersama.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition-all duration-300 hover:bg-cyan-100 hover:shadow-[0_0_32px_-10px_rgba(34,211,238,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Gabung KPM
                <ArrowUpRight />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
