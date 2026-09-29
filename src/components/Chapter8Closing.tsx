"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_8 } from "@/data/content";

export default function Chapter8Closing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.4], [24, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[160vh] w-full bg-paper"
      aria-label="Bab 8: Penutup dan Kolofon"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-6 md:p-24 bg-[#1F2326]">
        {/* Visual 2024 Dusk Skyline Background */}
        <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity">
          <svg viewBox="0 0 1440 900" className="w-full h-full object-cover">
            <rect width="1440" height="900" fill="#14181B" />
            {/* Distant Tangkuban Parahu outline */}
            <path
              d="M0 480 Q 320 380 580 410 T 1050 340 Q 1280 400 1440 450 L 1440 900 L 0 900 Z"
              fill="#0F1214"
            />
            {/* Dense High-rise Sprawl 2024 */}
            <rect x="180" y="520" width="45" height="280" fill="#2E353B" />
            <rect x="240" y="470" width="60" height="330" fill="#242B30" />
            <rect x="420" y="500" width="80" height="300" fill="#2B3238" />
            <rect x="680" y="460" width="55" height="340" fill="#21272C" />
            <rect x="850" y="530" width="70" height="270" fill="#2E353B" />
            <rect x="1050" y="490" width="65" height="310" fill="#262D33" />
          </svg>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Top mono header */}
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-wideMono text-paper/70">
            {CHAPTER_8.monoOverlay} — EPILOG
          </p>
        </div>

        {/* Center Closing Statement */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 max-w-prose my-auto"
        >
          <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta block mb-4">
            Bab {CHAPTER_8.chapterNumber}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-paper leading-headline tracking-tighter mb-6">
            {CHAPTER_8.closingHeadline}
          </h2>
          <p className="font-body text-base sm:text-lg text-paper/85 leading-editorial mb-8">
            {CHAPTER_8.leadParagraph}
          </p>
        </motion.div>

        {/* Bottom Colophon & Source Line */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-10 border-t border-paper/20 pt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-paper/70 font-mono text-xs"
        >
          {CHAPTER_8.colophon.map((item) => (
            <div key={item.label}>
              <span className="text-paper/40 uppercase tracking-wideMono block mb-1">
                {item.label}
              </span>
              <span className="text-paper/90">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
