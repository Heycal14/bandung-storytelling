"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_4 } from "@/data/content";

export default function Chapter4SplitScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Divider moves from 15% to 85% as user scrolls
  const dividerPercent = useTransform(scrollYProgress, [0.15, 0.85], [15, 85]);
  const clipPathLeft = useTransform(dividerPercent, (val) => `inset(0 ${100 - val}% 0 0)`);
  const clipPathRight = useTransform(dividerPercent, (val) => `inset(0 0 0 ${val}%)`);
  const dividerLeft = useTransform(dividerPercent, (val) => `${val}%`);

  const textOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [24, 0, 0, -16]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[190vh] w-full bg-paper"
      aria-label="Bab 4: Lanskap Kota Sebelum dan Sesudah"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row px-6 md:px-24 py-12 items-center justify-between gap-12">
        {/* Story column */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="w-full md:w-[42%] max-w-prose z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta">
              Bab {CHAPTER_4.chapterNumber}
            </span>
            <span className="text-muted text-xs">/</span>
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted">
              {CHAPTER_4.tag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-subhead tracking-tighter mb-6">
            {CHAPTER_4.title}
          </h2>

          <p className="font-body text-lg text-ink/90 leading-editorial mb-4">
            {CHAPTER_4.leadParagraph}
          </p>
          <p className="font-body text-base text-ink/80 leading-editorial">
            {CHAPTER_4.secondaryParagraph}
          </p>
        </motion.div>

        {/* Visual Split Screen Panel */}
        <div className="w-full md:w-[54%] h-[45vh] md:h-[70vh] relative border border-ink/15 overflow-hidden bg-[#D8D4CC]">
          {/* Left Layer: 1990 Historical Street View */}
          <motion.div
            style={{ clipPath: clipPathLeft }}
            className="absolute inset-0 w-full h-full bg-[#3c342b] filter sepia-[0.3]"
          >
            <svg viewBox="0 0 600 450" className="w-full h-full object-cover">
              <rect width="600" height="450" fill="#2d2620" />
              {/* Heritage Art Deco Building Façade 1990 */}
              <rect x="60" y="140" width="220" height="240" fill="#6d6356" />
              <rect x="80" y="170" width="40" height="60" fill="#1e1814" />
              <rect x="140" y="170" width="40" height="60" fill="#1e1814" />
              <rect x="200" y="170" width="40" height="60" fill="#1e1814" />
              {/* Wide open canopy trees on sidewalk */}
              <circle cx="340" cy="220" r="70" fill="#384f39" />
              <rect x="330" y="270" width="18" height="110" fill="#231b14" />
              {/* Quiet Street 1990 */}
              <polygon points="0,450 600,450 400,280 200,280" fill="#4a4237" />
            </svg>
            <span className="absolute bottom-4 left-4 font-mono text-xs tracking-wideMono bg-paper/90 px-2 py-1 text-ink">
              1990 — Koridor Braga
            </span>
          </motion.div>

          {/* Right Layer: 2024 Modern Dense View */}
          <motion.div
            style={{ clipPath: clipPathRight }}
            className="absolute inset-0 w-full h-full bg-[#202426]"
          >
            <svg viewBox="0 0 600 450" className="w-full h-full object-cover">
              <rect width="600" height="450" fill="#1a1c1e" />
              {/* Dense Highrise and Billboards 2024 */}
              <rect x="60" y="70" width="220" height="310" fill="#3a4045" />
              <rect x="300" y="40" width="240" height="340" fill="#2d3338" />
              {/* Neon & Commercial billboards */}
              <rect x="90" y="100" width="160" height="50" fill="#B85C38" opacity="0.8" />
              <rect x="330" y="90" width="180" height="60" fill="#8A8578" opacity="0.6" />
              {/* Tangled Utility Wires */}
              <line x1="0" y1="120" x2="600" y2="170" stroke="#111" strokeWidth="2" />
              <line x1="0" y1="140" x2="600" y2="190" stroke="#111" strokeWidth="1.5" />
              <line x1="0" y1="160" x2="600" y2="210" stroke="#111" strokeWidth="1.5" />
              {/* Congested Road */}
              <polygon points="0,450 600,450 400,280 200,280" fill="#30353a" />
            </svg>
            <span className="absolute bottom-4 right-4 font-mono text-xs tracking-wideMono bg-paper/90 px-2 py-1 text-ink">
              2024 — Komersial Padat
            </span>
          </motion.div>

          {/* 1px Ink Divider Line */}
          <motion.div
            style={{ left: dividerLeft }}
            className="absolute top-0 bottom-0 w-[1.5px] bg-paper shadow-sm z-20 -translate-x-1/2 pointer-events-none"
          >
            {/* Top Mono Label badge */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-ink text-paper px-2.5 py-0.5 whitespace-nowrap">
              <span className="font-mono text-[10px] tracking-wideMono">
                1990 | 2024
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
