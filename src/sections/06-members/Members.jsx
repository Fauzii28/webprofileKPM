// =============================================================
// 📁 src/sections/06-members/Members.jsx
// =============================================================
// DIISI OLEH: Tim Members Section
// DESKRIPSI: Komponen tampilan profil anggota/pengurus KPM.
//
// ✅ TUGAS KALIAN:
//   1. Setiap anggota isi data diri di membersData.js
//   2. Simpan foto di public/members/ lalu isi field `photo`
//   3. Kustomisasi tampilan kartu anggota
//
// 💡 TIPS DESAIN:
//   - Card flip untuk depan/belakang (info depan + sosmed belakang)
//   - Filter berdasarkan divisi
//   - Modal popup untuk detail profil lengkap
// =============================================================

import { membersData } from "./membersData";

export default function Members() {
  const { members } = membersData;

  return (
    // ─── JANGAN HAPUS id="members" ───
    <section id="members" className="py-24 bg-gray-900 relative overflow-hidden">

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
            {membersData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {membersData.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {membersData.sectionDescription}
          </p>
        </div>

        {/* Members Grid — Placeholder jika kosong */}
        {members.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-white/20">
            <p className="text-gray-600">
              👥 Anggota KPM akan muncul di sini —
              isi <code className="text-cyan-400">membersData.members</code>
            </p>
          </div>
        ) : (
          // ================================================================
          // 🎨 ZONA DESAIN: Grid Anggota
          // ================================================================
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl bg-gray-800/60 border border-white/10 p-6 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center"
              >
                {/* Avatar / Foto */}
                <div className="mb-4 inline-block relative">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-20 h-20 rounded-2xl object-cover mx-auto"
                    />
                  ) : (
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.avatarColor} flex items-center justify-center text-white font-bold text-2xl mx-auto`}>
                      {member.initials}
                    </div>
                  )}
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800"></div>
                </div>

                {/* Info */}
                <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
                <p className="text-violet-400 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs mb-1">{member.division}</p>
                <p className="text-gray-600 text-xs mb-4">Angkatan {member.angkatan}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md bg-white/10 text-gray-400 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2 pt-4 border-t border-white/10">
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all text-xs"
                    >
                      GitHub
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:text-white hover:bg-blue-500/40 transition-all text-xs"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
