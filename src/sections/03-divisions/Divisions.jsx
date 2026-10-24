// =============================================================
// 📁 src/sections/03-divisions/Divisions.jsx
// =============================================================
// DIISI OLEH: Tim Divisions Section
// DESKRIPSI: Komponen tampilan untuk section Divisi KPM.
//
// ✅ TUGAS KALIAN:
//   1. Isi divisionsData.js dengan data divisi yang ada
//   2. Kustomisasi tampilan kartu divisi sesuai selera tim
//
// 💡 TIPS DESAIN:
//   - Setiap divisi bisa punya warna/ikon unik
//   - Bisa tambahkan modal/popup untuk detail divisi
//   - Hover effects bisa ditambah di className
// =============================================================

import { divisionsData } from "./divisionsData";

export default function Divisions() {
  const { divisions } = divisionsData;

  return (
    // ─── JANGAN HAPUS id="divisions" ───
    <section id="divisions" className="py-24 bg-gray-950 relative overflow-hidden">

      {/* ================================================================
          🎨 ZONA DESAIN: Background
          ================================================================ */}
      <div className="absolute inset-0">
        {/* TODO: Tambahkan elemen background di sini */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            {divisionsData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {divisionsData.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {divisionsData.sectionDescription}
          </p>
        </div>

        {/* Divisions Grid — Placeholder jika kosong */}
        {divisions.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-white/20">
            <p className="text-gray-600">
              📂 Divisi-divisi KPM akan muncul di sini —
              isi <code className="text-cyan-400">divisionsData.divisions</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div) => (
              // ================================================================
              // 🎨 ZONA DESAIN: Kartu Divisi
              // ================================================================
              // TODO: Kustomisasi tampilan kartu divisi di sini
              // ================================================================
              <div
                key={div.id}
                className="group rounded-3xl bg-gray-800/60 border border-white/10 p-6 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Icon & Nama */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {div.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{div.name}</h3>
                    <p className="text-gray-500 text-sm">{div.memberCount} anggota</p>
                  </div>
                </div>

                {/* Deskripsi */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{div.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {div.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-lg bg-white/10 text-gray-300 text-xs border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Lead */}
                <div className="pt-4 border-t border-white/10 text-sm text-gray-500">
                  Lead: <span className="text-gray-300">{div.leadBy}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
