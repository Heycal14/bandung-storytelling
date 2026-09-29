"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_5 } from "@/data/content";

function formatIndonesianNumber(num: number): string {
  return Math.round(num).toLocaleString("id-ID");
}

export default function Chapter5Population() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentCount, setCurrentCount] = useState<number>(CHAPTER_5.startValue);

  // Map scroll progress to population value
  const popValue = useTransform(
    scrollYProgress,
    [0.15, 0.75],
    [CHAPTER_5.startValue, CHAPTER_5.endValue]
  );

  const textOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [24, 0, 0, -16]);

  useEffect(() => {
    return popValue.on("change", (latest) => {
      setCurrentCount(Math.round(latest));
    });
  }, [popValue]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[180vh] w-full bg-paper"
      aria-label="Bab 5: Kepadatan Populasi"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row px-6 md:px-24 py-12 items-center justify-between gap-12">
        {/* Story column */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="w-full md:w-[42%] max-w-prose z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta">
              Bab {CHAPTER_5.chapterNumber}
            </span>
            <span className="text-muted text-xs">/</span>
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted">
              {CHAPTER_5.tag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-subhead tracking-tighter mb-6">
            {CHAPTER_5.title}
          </h2>

          <p className="font-body text-lg text-ink/90 leading-editorial mb-4">
            {CHAPTER_5.leadParagraph}
          </p>
          <p className="font-body text-base text-ink/80 leading-editorial">
            {CHAPTER_5.secondaryParagraph}
          </p>
        </motion.div>

        {/* Visual Counter Panel */}
        <div className="w-full md:w-[54%] h-[45vh] md:h-[70vh] flex flex-col justify-center items-start border border-ink/15 p-8 md:p-12 bg-paper">
          <span className="font-mono text-xs uppercase tracking-wideMono text-muted mb-4 block">
            Jumlah Penduduk Kota Administratif
          </span>

          {/* 96px Mono Counter with -4% tracking */}
          <div className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold tracking-tightest text-ink tabular-nums leading-none">
            {formatIndonesianNumber(currentCount)}
          </div>

          <div className="w-full h-px bg-ink/15 my-6" />

          {/* Single sentence in serif explaining what changed */}
          <p className="font-body text-lg sm:text-xl text-ink/90 italic leading-snug">
            Tambahan 469.748 jiwa bermukim di wilayah yang luasnya tidak pernah bertambah satu meter pun.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <span className="font-mono text-xs uppercase text-muted tracking-wideMono block">Tahun 1990</span>
              <span className="font-mono text-sm font-semibold text-ink">2.058.106</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-muted tracking-wideMono block">Tahun 2024</span>
              <span className="font-mono text-sm font-semibold text-terracotta">2.527.854</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
