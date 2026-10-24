// =============================================================
// 📁 src/sections/07-contact/Contact.jsx
// =============================================================
// DIISI OLEH: Tim Contact Section
// DESKRIPSI: Komponen form kontak, FAQ, dan tautan media sosial.
//
// ✅ TUGAS KALIAN:
//   1. Isi contactData.js dengan FAQ dan opsi divisi yang benar
//   2. Pastikan siteConfig.js sudah diisi dengan email & sosmed
//   3. Kustomisasi tampilan form sesuai selera
//
// 💡 TIPS:
//   - Karena stateless, form ini TIDAK mengirim ke server
//   - Untuk kirim email nyata, bisa integrasikan Formspree/EmailJS
//     (tidak butuh backend!) — tanyakan gatekeeper untuk setup
//   - Atau arahkan ke link WhatsApp/Discord
// =============================================================

import { useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import { contactData } from "./contactData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", division: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO (opsional): Integrasikan Formspree atau EmailJS di sini
    // Sekarang hanya tampilkan pesan sukses
    setSubmitted(true);
    setForm({ name: "", email: "", division: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    // ─── JANGAN HAPUS id="contact" ───
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">

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
            {contactData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {contactData.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {contactData.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Kolom Kiri: Form */}
          <div className="rounded-3xl bg-gray-800/60 border border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>

            {/* Success State */}
            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-300 text-sm">
                {contactData.successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama kamu"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@contoh.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Divisi Minat</label>
                <select
                  value={form.division}
                  onChange={(e) => setForm({ ...form, division: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-all"
                >
                  <option value="">Pilih divisi (opsional)</option>
                  {contactData.divisionOptions.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tulis pertanyaan atau pesan kamu..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg"
              >
                Kirim Pesan 🚀
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Info + Sosmed + FAQ */}
          <div className="space-y-6">

            {/* Info Kontak */}
            <div className="rounded-3xl bg-gray-800/60 border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Info Kontak</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-3xl bg-gray-800/60 border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Media Sosial</h3>
              {/* ================================================================
                  🎨 ZONA DESAIN: Social Media Links
                  ================================================================
                  Social links diambil otomatis dari siteConfig.socials.
                  Isi siteConfig.js untuk menampilkan link di bawah.
                  ================================================================ */}
              <div className="space-y-3">
                {Object.entries(siteConfig.socials)
                  .filter(([, url]) => url !== null)
                  .map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <span className="capitalize text-white font-medium text-sm">{platform}</span>
                      <span className="text-gray-500 text-xs ml-auto">{url}</span>
                    </a>
                  ))}
                {Object.values(siteConfig.socials).every((v) => v === null) && (
                  <p className="text-gray-600 text-sm text-center py-4">
                    Isi sosial media di <code className="text-violet-400">siteConfig.socials</code>
                  </p>
                )}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="rounded-3xl bg-gray-800/60 border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">FAQ</h3>
              {contactData.faqs.length === 0 ? (
                <p className="text-gray-600 text-sm text-center py-4">
                  Isi FAQ di <code className="text-violet-400">contactData.faqs</code>
                </p>
              ) : (
                <div className="space-y-2">
                  {contactData.faqs.map((faq) => (
                    <div key={faq.id} className="border border-white/10 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left text-white font-medium text-sm hover:bg-white/5 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <span className={`transition-transform duration-300 text-violet-400 ${openFaq === faq.id ? "rotate-180" : ""}`}>▼</span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? "max-h-40" : "max-h-0"}`}>
                        <p className="px-4 pb-4 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
