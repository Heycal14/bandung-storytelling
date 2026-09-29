"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_2 } from "@/data/content";

export default function Chapter2MapMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Crossfade satellite/landcover map from 1990 (0) to 2024 (1)
  const map2024Opacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const lossOverlayOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 0.3]);
  const yearLabel = useTransform(scrollYProgress, (pos) => (pos < 0.5 ? "1990" : "2024"));

  const textOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [24, 0, 0, -16]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[180vh] w-full bg-paper"
      aria-label="Bab 2: Peta Perubahan Tutupan Hijau"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row px-6 md:px-24 py-12 items-center justify-between gap-12">
        {/* Story Column (42% width) */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="w-full md:w-[42%] max-w-prose z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta">
              Bab {CHAPTER_2.chapterNumber}
            </span>
            <span className="text-muted text-xs">/</span>
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted">
              {CHAPTER_2.tag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-subhead tracking-tighter mb-6">
            {CHAPTER_2.title}
          </h2>

          <div className="inline-block bg-paper border border-ink/15 px-3 py-1.5 mb-6">
            <span className="font-mono text-sm tracking-wideMono text-negative font-medium">
              {CHAPTER_2.statMono}
            </span>
          </div>

          <p className="font-body text-lg text-ink/90 leading-editorial mb-4">
            {CHAPTER_2.leadParagraph}
          </p>
          <p className="font-body text-base text-ink/80 leading-editorial">
            {CHAPTER_2.secondaryParagraph}
          </p>

          <div className="mt-8 pt-4 border-t border-muted/30 grid grid-cols-2 gap-4">
            <div>
              <p className="font-mono text-xs uppercase text-muted tracking-wideMono">Tutupan 1990</p>
              <p className="font-mono text-xl font-medium text-ink">{CHAPTER_2.dataPoints.green1990}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-muted tracking-wideMono">Tutupan 2024</p>
              <p className="font-mono text-xl font-medium text-negative">{CHAPTER_2.dataPoints.green2024}</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Panel (58% width) */}
        <div className="w-full md:w-[54%] h-[45vh] md:h-[75vh] relative rounded-none border border-ink/15 overflow-hidden bg-[#ECE8E1]">
          {/* Map Year Badge */}
          <div className="absolute top-4 right-4 z-20 bg-paper/90 px-3 py-1 border border-ink/20">
            <motion.span className="font-mono text-xs tracking-wideMono text-ink font-semibold">
              {yearLabel}
            </motion.span>
          </div>

          {/* 1990 Satellite Landcover Vector Grid */}
          <div className="absolute inset-0 w-full h-full">
            <svg viewBox="0 0 600 500" className="w-full h-full object-cover">
              <rect width="600" height="500" fill="#E2DDD5" />
              {/* Mountain Forest Canopy North (Dark Olive Green) */}
              <path d="M0 0 L600 0 L600 180 Q350 210 180 160 L0 190 Z" fill="#4A7C59" opacity="0.85" />
              {/* Agricultural & Garden belt East/South */}
              <circle cx="480" cy="340" r="140" fill="#4A7C59" opacity="0.6" />
              <circle cx="120" cy="380" r="110" fill="#4A7C59" opacity="0.5" />
              {/* Built-up core 1990 */}
              <circle cx="290" cy="270" r="75" fill="#8A8578" opacity="0.6" />
              <path d="M260 220 L320 220 L340 310 L250 310 Z" fill="#1A1A1A" opacity="0.4" />
              {/* Contour Lines */}
              <path d="M50 120 Q 300 90 550 130" stroke="#8A8578" strokeWidth="0.8" fill="none" opacity="0.4" />
              <path d="M30 160 Q 320 140 570 170" stroke="#8A8578" strokeWidth="0.8" fill="none" opacity="0.4" />
            </svg>
          </div>

          {/* 2024 Satellite Landcover Overlay */}
          <motion.div style={{ opacity: map2024Opacity }} className="absolute inset-0 w-full h-full">
            <svg viewBox="0 0 600 500" className="w-full h-full object-cover">
              <rect width="600" height="500" fill="#DDD8CE" />
              {/* Shrunken North Forest */}
              <path d="M0 0 L600 0 L600 90 Q380 110 240 80 L0 100 Z" fill="#4A7C59" opacity="0.85" />
              {/* Massive Built-up sprawl 2024 */}
              <rect x="80" y="110" width="440" height="340" fill="#8A8578" opacity="0.5" />
              <circle cx="300" cy="280" r="190" fill="#1A1A1A" opacity="0.35" />
              {/* Dense urban gridlines */}
              <path d="M120 160 L480 160 M100 220 L500 220 M90 280 L510 280 M110 340 L490 340 M140 400 L460 400" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Subtle Red Tint Overlay for Deforestation / Green Loss (30% opacity) */}
          <motion.div
            style={{ opacity: lossOverlayOpacity }}
            className="absolute inset-0 bg-[#A83232] pointer-events-none mix-blend-multiply"
          />

          {/* Bottom legend */}
          <div className="absolute bottom-3 left-4 z-20 flex gap-4 text-[11px] font-mono uppercase tracking-wideMono text-ink/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-positive inline-block" /> Vegetasi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-ink/50 inline-block" /> Terbangun
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-negative/60 inline-block" /> Area Terkonversi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
