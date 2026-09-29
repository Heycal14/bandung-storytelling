"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_6, TemperatureDataPoint } from "@/data/content";

function getBarColor(temp: number): string {
  // Normalize temp between 22.8 and 24.4
  const ratio = Math.min(Math.max((temp - 22.8) / (24.4 - 22.8), 0), 1);
  if (ratio < 0.3) return "#8A8578"; // Muted for baseline cold
  if (ratio < 0.6) return "#C48265"; // Intermediate warm
  return "#B85C38"; // Terracotta hot
}

export default function Chapter6Temperature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [24, 0, 0, -16]);
  const barsReveal = useTransform(scrollYProgress, [0.15, 0.8], [0, CHAPTER_6.temperatureSeries.length]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[180vh] w-full bg-paper"
      aria-label="Bab 6: Kenaikan Suhu Udara"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row px-6 md:px-24 py-12 items-center justify-between gap-12">
        {/* Story column */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="w-full md:w-[42%] max-w-prose z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta">
              Bab {CHAPTER_6.chapterNumber}
            </span>
            <span className="text-muted text-xs">/</span>
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted">
              {CHAPTER_6.tag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-subhead tracking-tighter mb-6">
            {CHAPTER_6.title}
          </h2>

          <div className="inline-block bg-paper border border-ink/15 px-3 py-1.5 mb-6">
            <span className="font-mono text-sm tracking-wideMono text-terracotta font-medium">
              {CHAPTER_6.statMono}
            </span>
          </div>

          <p className="font-body text-lg text-ink/90 leading-editorial mb-4">
            {CHAPTER_6.leadParagraph}
          </p>
          <p className="font-body text-base text-ink/80 leading-editorial">
            {CHAPTER_6.secondaryParagraph}
          </p>
        </motion.div>

        {/* Visual Bar Strip Panel */}
        <div className="w-full md:w-[54%] h-[45vh] md:h-[70vh] flex flex-col justify-end border border-ink/15 p-6 md:p-10 bg-paper">
          {/* Vertical Bars Container */}
          <div className="flex items-end justify-between gap-1.5 md:gap-2 h-64 border-b border-ink/20 pb-2">
            {CHAPTER_6.temperatureSeries.map((item: TemperatureDataPoint, index: number) => {
              // Bar height based on temperature 22.0 to 25.0 scale
              const heightPercent = ((item.temp - 22.0) / 3.0) * 100;
              const color = getBarColor(item.temp);

              return (
                <div key={item.year} className="flex-1 flex flex-col items-center group relative">
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 font-mono text-[10px] bg-ink text-paper px-1.5 py-0.5 whitespace-nowrap pointer-events-none z-20">
                    {item.year}: {item.temp.toString().replace(".", ",")}°C
                  </div>

                  {/* The bar */}
                  <div
                    style={{
                      height: `${heightPercent}%`,
                      backgroundColor: color,
                    }}
                    className="w-full min-w-[6px] transition-all duration-300"
                  />

                  {/* Year marker on selected years */}
                  {index % 4 === 0 || index === CHAPTER_6.temperatureSeries.length - 1 ? (
                    <span className="font-mono text-[10px] text-muted tracking-wideMono mt-2">
                      {item.year.toString().slice(2)}
                    </span>
                  ) : (
                    <span className="h-[15px] mt-2 block" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mono Caption below (No title on chart panel) */}
          <div className="mt-4 flex justify-between items-center text-muted font-mono text-xs tracking-wideMono">
            <span>1990 (22,8°C)</span>
            <span>GRADASI SUHU RATA-RATA TAHUNAN</span>
            <span>2024 (24,4°C)</span>
          </div>
          <p className="font-mono text-[11px] text-muted tracking-wideMono mt-2">
            Catatan: BMKG Stasiun Geofisika Kelas I Bandung
          </p>
        </div>
      </div>
    </section>
  );
}
