// =============================================================
// 📁 src/sections/04-programs/Programs.jsx
// =============================================================
// DIISI OLEH: Tim Programs Section
// DESKRIPSI: Komponen tampilan untuk section Program Kegiatan.
//
// ✅ TUGAS KALIAN:
//   1. Isi programsData.js dengan data program yang ada
//   2. Kustomisasi tampilan kartu program
//
// 💡 TIPS DESAIN:
//   - Bisa tambah timeline visual untuk jadwal program
//   - Bisa tambah modal untuk detail program
//   - CTA "Daftar" bisa diarahkan ke form di section Contact
// =============================================================

import { programsData } from "./programsData";

export default function Programs() {
  const { programs } = programsData;

  return (
    // ─── JANGAN HAPUS id="programs" ───
    <section id="programs" className="py-24 bg-gray-900 relative overflow-hidden">

      {/* ================================================================
          🎨 ZONA DESAIN: Background
          ================================================================ */}
      <div className="absolute inset-0">
        {/* TODO: Tambahkan elemen background di sini */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            {programsData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {programsData.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {programsData.sectionDescription}
          </p>
        </div>

        {/* Programs Grid — Placeholder jika kosong */}
        {programs.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-white/20">
            <p className="text-gray-600">
              📋 Program KPM akan muncul di sini —
              isi <code className="text-violet-400">programsData.programs</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              // ================================================================
              // 🎨 ZONA DESAIN: Kartu Program
              // ================================================================
              <div
                key={prog.id}
                className={`group rounded-3xl bg-gray-800/60 border-l-4 ${prog.accentColor} border border-white/10 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{prog.icon}</div>

                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-300 text-xs">
                    {prog.type}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-xs border border-violet-500/30">
                    {prog.frequency}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-3">{prog.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{prog.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* ================================================================
            🎨 ZONA DESAIN: CTA Bottom (opsional)
            ================================================================
            TODO: Tambahkan CTA atau elemen tambahan di bawah grid
            ================================================================ */}

      </div>
    </section>
  );
}
