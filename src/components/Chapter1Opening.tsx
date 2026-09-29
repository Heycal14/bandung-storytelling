"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_1 } from "@/data/content";

export default function Chapter1Opening() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [24, 0, 0, -16]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[160vh] w-full bg-paper"
      aria-label="Bab 1: Pembuka"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Historical Sepia Photo Simulation / High-contrast editorial visual */}
        <motion.div
          style={{ scale: photoScale }}
          className="absolute inset-0 w-full h-full bg-[#3d332a] filter sepia-[0.35] contrast-[1.05]"
        >
          {/* Detailed SVG Illustration of Bandung Basin 1990 Skyline */}
          <svg
            viewBox="0 0 1440 900"
            className="w-full h-full object-cover opacity-80"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="1440" height="900" fill="#2d2620" />
            {/* Mountain Skyline (Tangkuban Parahu & Burangrang) */}
            <path
              d="M0 460 Q 280 340 540 380 T 960 300 Q 1200 370 1440 430 L 1440 900 L 0 900 Z"
              fill="#221b16"
              opacity="0.9"
            />
            {/* Mid-ground Greenery & Low-rise Settlements 1990 */}
            <path
              d="M0 560 Q 320 480 720 520 T 1440 540 L 1440 900 L 0 900 Z"
              fill="#18130f"
              opacity="0.95"
            />
            {/* Subtle atmospheric mist line */}
            <line
              x1="0"
              y1="480"
              x2="1440"
              y2="480"
              stroke="#8A8578"
              strokeWidth="0.5"
              strokeDasharray="4 8"
              opacity="0.4"
            />
          </svg>

          {/* 60% Black scrim for text legibility */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Top-left mono metadata */}
        <div className="absolute top-8 left-6 md:left-24 z-10">
          <p className="font-mono text-xs uppercase tracking-wideMono text-paper/80">
            {CHAPTER_1.monoOverlay}
          </p>
        </div>

        {/* Center-left Editorial Title & Prose */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute inset-0 flex items-center px-6 md:px-24 z-10"
        >
          <div className="max-w-prose">
            <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta block mb-4">
              Bab {CHAPTER_1.chapterNumber}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-paper leading-headline tracking-tighter mb-6">
              {CHAPTER_1.title}
            </h1>
            <p className="font-display text-xl sm:text-2xl text-paper/90 mb-8 italic font-normal">
              {CHAPTER_1.subtitle}
            </p>
            <p className="font-body text-base sm:text-lg text-paper/90 leading-editorial mb-4">
              {CHAPTER_1.leadParagraph}
            </p>
            <p className="font-body text-base sm:text-lg text-paper/80 leading-editorial">
              {CHAPTER_1.secondaryParagraph}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
