// =============================================================
// 📁 src/sections/02-about/About.jsx
// =============================================================
// DIISI OLEH: Tim About Section
// DESKRIPSI: Komponen tampilan section "Tentang KPM".
//
// ✅ TUGAS KALIAN:
//   1. Edit aboutData.js untuk mengisi konten
//   2. Kustomisasi tampilan di file ini
//
// 💡 TIPS DESAIN:
//   - Bisa pakai layout 2 kolom (teks kiri, visual kanan)
//   - Tambahkan foto gedung/kegiatan jika ada
//   - Timeline berdiri KPM bisa jadi elemen menarik
// =============================================================

import { aboutData } from "./aboutData";

export default function About() {
  return (
    // ─── JANGAN HAPUS id="about" ───
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">

      {/* ================================================================
          🎨 ZONA DESAIN: Background / Dekorasi Visual
          ================================================================ */}
      <div className="absolute inset-0">
        {/* TODO: Tambahkan elemen background di sini */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            {aboutData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {aboutData.sectionTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            {aboutData.mainDescription}
          </p>
        </div>

        {/* ================================================================
            🎨 ZONA DESAIN: Layout Utama
            ================================================================
            TODO: Desain layout section ini.
            Bisa 2 kolom, bisa full-width, bisa ada gambar, dsb.
            ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Kolom Kiri: Visi & Misi */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">🎯 Visi</h3>
              <p className="text-gray-400 leading-relaxed">{aboutData.vision}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">🚀 Misi</h3>
              <ul className="space-y-2">
                {aboutData.missions.map((mission, i) => (
                  <li key={i} className="flex gap-3 text-gray-400">
                    <span className="text-violet-400 mt-1">▹</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Nilai-nilai */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">💡 Nilai-nilai Kami</h3>
            {aboutData.values.map((val, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-2xl">{val.icon}</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">{val.title}</h4>
                  <p className="text-gray-400 text-sm">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements — hanya tampil jika ada isi */}
        {aboutData.achievements.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">🏆 Pencapaian</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {aboutData.achievements.map((ach) => (
                <div key={ach.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-3xl mb-3">{ach.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{ach.title}</h4>
                  <p className="text-violet-400 text-xs mb-2">{ach.event}</p>
                  <p className="text-gray-500 text-xs">{ach.description}</p>
                  <span className="text-xs text-gray-600 mt-2 block">{ach.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder jika achievements kosong */}
        {aboutData.achievements.length === 0 && (
          <div className="text-center py-12 rounded-2xl border border-dashed border-white/20">
            <p className="text-gray-600 text-sm">
              🏆 Pencapaian KPM akan muncul di sini — isi <code className="text-violet-400">aboutData.achievements</code>
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
