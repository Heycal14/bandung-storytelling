"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_3 } from "@/data/content";

export default function Chapter3LineChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [24, 0, 0, -16]);

  // SVG Chart Geometry
  // Viewbox: 600 x 360. Margins: L: 50, R: 40, T: 40, B: 50
  // X range: 1990 (50) -> 2024 (560)
  // Y range: 0% (310) -> 100% (40)
  const chartPoints = CHAPTER_3.chartData.map((d) => {
    const x = 50 + ((d.year - 1990) / 34) * 510;
    const y = 310 - (d.value / 100) * 270;
    return { x, y, ...d };
  });

  const svgPathD = chartPoints.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, "");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[180vh] w-full bg-paper"
      aria-label="Bab 3: Grafik Pertumbuhan Lahan Terbangun"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row px-6 md:px-24 py-12 items-center justify-between gap-12">
        {/* Story column */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="w-full md:w-[42%] max-w-prose z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta">
              Bab {CHAPTER_3.chapterNumber}
            </span>
            <span className="text-muted text-xs">/</span>
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted">
              {CHAPTER_3.tag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-subhead tracking-tighter mb-6">
            {CHAPTER_3.title}
          </h2>

          <div className="inline-block bg-paper border border-ink/15 px-3 py-1.5 mb-6">
            <span className="font-mono text-sm tracking-wideMono text-ink font-medium">
              {CHAPTER_3.statMono}
            </span>
          </div>

          <p className="font-body text-lg text-ink/90 leading-editorial mb-4">
            {CHAPTER_3.leadParagraph}
          </p>
          <p className="font-body text-base text-ink/80 leading-editorial">
            {CHAPTER_3.secondaryParagraph}
          </p>
        </motion.div>

        {/* Visual Line Chart Panel */}
        <div className="w-full md:w-[54%] h-[45vh] md:h-[70vh] flex flex-col justify-center border border-ink/15 p-6 bg-paper">
          <div className="flex justify-between items-baseline mb-3">
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted">
              Persentase Wilayah Terbangun (%)
            </span>
            <span className="font-mono text-xs tracking-wideMono text-muted">
              1990 — 2024
            </span>
          </div>

          <div className="relative w-full aspect-[16/10]">
            <svg viewBox="0 0 600 360" className="w-full h-full overflow-visible">
              {/* Horizontal Baselines at 0%, 25%, 50%, 75%, 100% */}
              {[0, 25, 50, 75, 100].map((val) => {
                const y = 310 - (val / 100) * 270;
                return (
                  <g key={val}>
                    <line
                      x1="50"
                      y1={y}
                      x2="560"
                      y2={y}
                      stroke="#8A8578"
                      strokeWidth="0.75"
                      strokeDasharray="3 4"
                      opacity="0.45"
                    />
                    <text
                      x="40"
                      y={y + 4}
                      textAnchor="end"
                      fill="#8A8578"
                      className="font-mono text-[11px]"
                    >
                      {val}%
                    </text>
                  </g>
                );
              })}

              {/* X Axis Labels */}
              {[1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024].map((yr) => {
                const x = 50 + ((yr - 1990) / 34) * 510;
                return (
                  <text
                    key={yr}
                    x={x}
                    y="335"
                    textAnchor="middle"
                    fill="#8A8578"
                    className="font-mono text-[11px]"
                  >
                    {yr}
                  </text>
                );
              })}

              {/* The Single Editorial Data Line (1.5px stroke, ink on paper) */}
              <motion.path
                d={svgPathD}
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength }}
              />

              {/* Start & End Callout Points */}
              <circle cx="50" cy={310 - (36.4 / 100) * 270} r="3" fill="#1A1A1A" />
              <circle cx="560" cy={310 - (78.8 / 100) * 270} r="3" fill="#B85C38" />

              <text
                x="560"
                y={310 - (78.8 / 100) * 270 - 12}
                textAnchor="middle"
                fill="#B85C38"
                className="font-mono text-xs font-semibold"
              >
                78,8%
              </text>
            </svg>
          </div>

          <p className="font-mono text-[11px] text-muted tracking-wideMono mt-4">
            Sumber: Analisis Spasial Lahan BPS & KLHK
          </p>
        </div>
      </div>
    </section>
  );
}
