// =============================================================
// 📁 src/App.jsx
// =============================================================
// DIISI OLEH: Gatekeeper (faris)
// DESKRIPSI: Komponen root — merangkai semua section menjadi satu
//            halaman lengkap.
//
// ⚠️  Jangan hapus atau ubah urutan section tanpa koordinasi!
// =============================================================

import Navbar  from "./components/shared/Navbar";
import Footer  from "./components/shared/Footer";

// ── Section Imports ───────────────────────────────────────────
import Hero      from "./sections/01-hero/Hero";
import About     from "./sections/02-about/About";
import Divisions from "./sections/03-divisions/Divisions";
import Programs  from "./sections/04-programs/Programs";
import Gallery   from "./sections/05-gallery/Gallery";
import Members   from "./sections/06-members/Members";
import Contact   from "./sections/07-contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ── Navigasi (fixed, muncul di semua halaman) ────── */}
      <Navbar />

      {/* ── Konten Utama ────────────────────────────────── */}
      <main>
        {/*
          URUTAN SECTION (jangan ubah id-nya!):
          #hero → #about → #divisions → #programs → #gallery → #members → #contact
        */}
        <Hero />
        <About />
        <Divisions />
        <Programs />
        <Gallery />
        <Members />
        <Contact />
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <Footer />

    </div>
  );
}
