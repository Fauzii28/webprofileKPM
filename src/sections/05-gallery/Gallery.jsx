// =============================================================
// 📁 src/sections/05-gallery/Gallery.jsx
// =============================================================
// DIISI OLEH: Tim Gallery Section
// DESKRIPSI: Galeri foto KPM dengan carousel infinite-loop,
//            parallax, dan banyak cara navigasi:
//              - drag / geser pakai mouse atau jari
//              - swipe 2 jari horizontal di trackpad
//              - panah, dot, dan keyboard ← →
//
// 🎛️  CARA KERJA LOOP (instan, tanpa nunggu transisi selesai):
//   Slide duplikat ditaruh di ujung kiri & kanan:
//     [foto terakhir] [foto 1 ... foto N] [foto 1]
//   Sebelum animasi dimulai, posisi dilompatkan lebih dulu ke
//   duplikat yang tampak identik (transisi dimatikan 1 frame),
//   lalu langsung dianimasikan ke slide tujuan. Jadi foto
//   terakhir → pertama langsung jalan, tanpa jeda.
// =============================================================

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { galleryData } from "./galleryData";

// easeInOutCubic: mulai pelan, ngebut di tengah, pelan lagi di akhir
// → lebih "meluncur" dibanding ease-out yang langsung nyentak di awal.
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const DEFAULT_DURATION = 950;
const PARALLAX_FACTOR = 0.12; // foto bergerak 12% dari jarak kartu
const ICON_PARALLAX_FACTOR = 0.22; // emoji placeholder lebih depan lagi
const SCROLL_PARALLAX_RANGE = 80; // px, pergerakan background saat scroll
const WHEEL_COOLDOWN = 600; // ms, jeda antar swipe trackpad
const WHEEL_THRESHOLD = 6; // abaikan noise wheel kecil
const WRAP_DURATION = 520; // ms, durasi khusus saat sambung loop (tetap lebih cepat)
const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const DURATION = REDUCED_MOTION ? 0 : DEFAULT_DURATION;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  // posisi 1 = foto asli pertama; 0 dan total + 1 = slide duplikat.
  const [position, setPosition] = useState(1);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [snapDuration, setSnapDuration] = useState(DURATION);
  const [isLoopJumping, setIsLoopJumping] = useState(false);
  const [metrics, setMetrics] = useState({ step: 0, width: 0, offset: 0 });

  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const pointerRef = useRef(null);
  const navRef = useRef({ next: () => {}, prev: () => {} });
  const pendingRef = useRef(null); // posisi tujuan setelah lompatan 1 frame

  const filtered =
    activeFilter === "Semua"
      ? galleryData.items
      : galleryData.items.filter((item) => item.category === activeFilter);

  const total = filtered.length;
  const looping = total > 1;
  const logicalIndex = looping
    ? (((position - 1) % total) + total) % total
    : 0;
  // Duplikat di kedua ujung supaya transisi loop tidak mundur jauh.
  const slides = looping
    ? [filtered[total - 1], ...filtered, filtered[0]]
    : filtered;

  // Ukur lebar satu slide + jarak antar slide, dan padding supaya
  // slide aktif berada tepat di tengah saat ada peek di sampingnya.
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const slide = track?.firstElementChild;
    if (!viewport || !track || !slide) return;

    const slideWidth = slide.offsetWidth; // abaikan transform scale
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = slideWidth + gap;
    const offset = Math.max(0, (viewport.clientWidth - slideWidth) / 2);

    setMetrics((prev) =>
      prev.step === step && prev.width === slideWidth && prev.offset === offset
        ? prev
        : { step, width: slideWidth, offset },
    );
  }, []);

  useLayoutEffect(() => {
    measure();

    const viewport = viewportRef.current;
    if (!viewport) return;

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(measure);
      observer.observe(viewport);
      const firstSlide = trackRef.current?.firstElementChild;
      if (firstSlide) observer.observe(firstSlide);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, activeFilter, total]);

  // Lompatan 1 frame ke duplikat yang tampak identik, lalu lanjut
  // ke posisi tujuan dengan transisi yang sudah aktif lagi.
  useLayoutEffect(() => {
    if (!isLoopJumping) return;
    const track = trackRef.current;
    if (track) void track.offsetWidth; // paksa flush style "transition: none"

    const frame = requestAnimationFrame(() => {
      setIsLoopJumping(false);
      const pending = pendingRef.current;
      if (pending) {
        pendingRef.current = null;
        setSnapDuration(pending.duration);
        setPosition(pending.position);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [isLoopJumping]);

  // Paralaks background: gerakkan layer blur mengikuti posisi scroll.
  // Pakai ref + requestAnimationFrame supaya tidak memicu re-render.
  useEffect(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section || REDUCED_MOTION) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const y = (0.5 - progress) * SCROLL_PARALLAX_RANGE * 2;
      bg.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (nextPosition, duration = DURATION) => {
    if (!looping) {
      setSnapDuration(duration);
      setPosition(Math.max(1, Math.min(nextPosition, total)));
      return;
    }

    // Lewat ujung: lompat ke duplikat identik dulu (1 frame), lalu
    // animasikan ke slide asli. Tidak ada tunggu transitionend.
    if (nextPosition > total) {
      pendingRef.current = { position: 1, duration: Math.min(duration, WRAP_DURATION) };
      setIsLoopJumping(true);
      setPosition(0);
      return;
    }
    if (nextPosition < 1) {
      pendingRef.current = {
        position: total,
        duration: Math.min(duration, WRAP_DURATION),
      };
      setIsLoopJumping(true);
      setPosition(total + 1);
      return;
    }

    setSnapDuration(duration);
    setPosition(nextPosition);
  };

  const next = () => {
    if (!looping || isLoopJumping || position < 1 || position > total) return;
    goTo(position + 1);
  };

  const prev = () => {
    if (!looping || isLoopJumping || position < 1 || position > total) return;
    goTo(position - 1);
  };

  // Dipakai listener wheel supaya tidak closure stale pada state posisi.
  useEffect(() => {
    navRef.current = { next, prev };
  });

  // Swipe 2 jari horizontal di trackpad / mouse wheel horizontal.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !looping) return;

    let cooldownUntil = 0;
    const onWheel = (event) => {
      // Hanya gerakan horizontal yang dianggap swipe galeri.
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      if (Math.abs(event.deltaX) < WHEEL_THRESHOLD) return;

      event.preventDefault(); // cegah browser back/forward saat overscroll
      const now = performance.now();
      if (now < cooldownUntil) return;
      cooldownUntil = now + WHEEL_COOLDOWN;

      if (event.deltaX > 0) navRef.current.next();
      else navRef.current.prev();
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [looping]);

  const changeFilter = (category) => {
    pendingRef.current = null;
    setActiveFilter(category);
    setPosition(1);
    setDragX(0);
    setIsLoopJumping(false);
    setSnapDuration(DURATION);
  };

  const onPointerDown = (event) => {
    if (!looping || event.button > 0) return;
    pointerRef.current = {
      id: event.pointerId,
      x: event.clientX,
      time: performance.now(),
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    const start = pointerRef.current;
    if (!start || start.id !== event.pointerId) return;

    let delta = event.clientX - start.x;

    // Rubber band hanya untuk galeri non-loop (1 foto).
    if (!looping) {
      if (position === 1 && delta > 0) delta *= 0.35;
      if (position === total && delta < 0) delta *= 0.35;
    }

    setDragX(delta);
  };

  const onPointerEnd = (event) => {
    const start = pointerRef.current;
    if (!start) return;
    pointerRef.current = null;

    const delta = (event.clientX ?? start.x) - start.x;
    const elapsed = Math.max(1, performance.now() - start.time);
    const velocity = Math.abs(delta) / elapsed; // px per ms

    // Geseran cepat → snap lebih pendek, geseran santai → lebih panjang.
    const duration =
      DURATION === 0
        ? 0
        : Math.round(Math.min(1100, Math.max(650, 950 - velocity * 180)));

    const threshold = Math.min(80, metrics.step * 0.18);
    let target = position;
    if (delta < -threshold) target = position + 1;
    else if (delta > threshold) target = position - 1;

    goTo(target, duration);
    setDragX(0);
    setIsDragging(false);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const translate = metrics.offset - position * metrics.step + dragX;

  // Paralaks carousel: jarak slide terhadap tengah viewport
  // (slide aktif = 0). Foto bergeser berlawanan arah lebih lambat.
  const parallaxLimit = metrics.width * 0.17;
  const getParallax = (slideIndex, factor = PARALLAX_FACTOR) => {
    const distanceFromCenter = (slideIndex - position) * metrics.step + dragX;
    const shift = -distanceFromCenter * factor;
    return Math.max(-parallaxLimit, Math.min(parallaxLimit, shift));
  };
  const parallaxTransition =
    isDragging || isLoopJumping
      ? "none"
      : `transform ${snapDuration}ms ${EASE}`;

  return (
    // ─── JANGAN HAPUS id="gallery" — dipakai untuk smooth scroll navigasi ───
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 bg-gray-950 relative overflow-hidden"
    >
      {/* ================================================================
          🎨 ZONA DESAIN: Background (paralaks saat scroll)
          ================================================================ */}
      <div ref={bgRef} className="absolute -inset-y-24 inset-x-0 will-change-transform">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-pink-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-[12%] w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            {galleryData.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {galleryData.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {galleryData.sectionDescription}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryData.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => changeFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
              style={{ transitionTimingFunction: EASE }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel — Placeholder jika kosong */}
        {total === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-white/20">
            <p className="text-gray-600">
              📸 Foto-foto KPM akan muncul di sini —
              isi <code className="text-pink-400">galleryData.items</code>
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Area geser */}
            <div
              ref={viewportRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Galeri kegiatan KPM"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerEnd}
              onPointerCancel={onPointerEnd}
              className="overflow-hidden py-3 cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 rounded-3xl"
              style={{ touchAction: "pan-y" }}
            >
              <div
                ref={trackRef}
                className="flex gap-5 will-change-transform"
                style={{
                  transform: `translate3d(${translate}px, 0, 0)`,
                  transition:
                    isDragging || isLoopJumping
                      ? "none"
                      : `transform ${snapDuration}ms ${EASE}`,
                }}
              >
                {slides.map((item, i) => (
                  <div
                    key={`${item.id}-${i}`}
                    aria-hidden={i !== position}
                    className={`shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] transition-[opacity,transform] duration-700 ${
                      i === position
                        ? "opacity-100 scale-100"
                        : "opacity-45 scale-[0.94]"
                    }`}
                    style={{
                      transition: isLoopJumping ? "none" : undefined,
                      transitionTimingFunction: EASE,
                    }}
                  >
                    {/* ==========================================================
                        🎨 ZONA DESAIN: Kartu Foto
                        ========================================================== */}
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl">
                      {item.image ? (
                        // Foto nyata — path relatif dari public/, mis.:
                        // "/gallery/workshop/workshop-react-2024.jpg"
                        <img
                          src={item.image}
                          alt={item.title}
                          draggable={false}
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
                          style={{
                            transform: `translate3d(${getParallax(i)}px, 0, 0) scale(1.35)`,
                            transition: parallaxTransition,
                          }}
                        />
                      ) : (
                        // Placeholder warna jika belum ada foto
                        <>
                          <div
                            className={`absolute -inset-x-[18%] inset-y-0 bg-gradient-to-br ${item.placeholderColor} will-change-transform`}
                            style={{
                              transform: `translate3d(${getParallax(i, 0.08)}px, 0, 0)`,
                              transition: parallaxTransition,
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span
                              className="text-5xl opacity-30 will-change-transform"
                              style={{
                                transform: `translate3d(${getParallax(i, ICON_PARALLAX_FACTOR)}px, 0, 0)`,
                                transition: parallaxTransition,
                              }}
                            >
                              {item.placeholderIcon}
                            </span>
                          </div>
                        </>
                      )}

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs border border-white/20">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panah navigasi */}
            {looping && (
              <>
                <button
                  type="button"
                  aria-label="Foto sebelumnya"
                  onClick={prev}
                  className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 border border-white/15 text-white flex items-center justify-center hover:bg-pink-600 transition-all duration-300 shadow-xl z-10"
                  style={{ transitionTimingFunction: EASE }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Foto berikutnya"
                  onClick={next}
                  className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 border border-white/15 text-white flex items-center justify-center hover:bg-pink-600 transition-all duration-300 shadow-xl z-10"
                  style={{ transitionTimingFunction: EASE }}
                >
                  ›
                </button>
              </>
            )}

            {/* Dot + counter */}
            <div className="flex flex-col items-center gap-3 mt-8">
              {looping && (
                <div className="flex items-center justify-center gap-3">
                  {filtered.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Tampilkan foto ${i + 1}`}
                      aria-current={i === logicalIndex}
                      onClick={() => goTo(i + 1)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === logicalIndex
                          ? "w-8 bg-gradient-to-r from-pink-500 to-orange-500"
                          : "w-2 bg-white/25 hover:bg-white/50"
                      }`}
                      style={{ transitionTimingFunction: EASE }}
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-500 text-xs">
                <span className="tabular-nums">{logicalIndex + 1} / {total}</span>
                <span className="mx-2 text-gray-700">•</span>
                Tarik, swipe 2 jari trackpad, atau tekan ← →
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
