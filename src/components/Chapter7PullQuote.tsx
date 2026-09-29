"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHAPTER_7 } from "@/data/content";

export default function Chapter7PullQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const quoteOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.75, 0.95], [0, 1, 1, 0]);
  const quoteY = useTransform(scrollYProgress, [0.15, 0.45, 0.75, 0.95], [24, 0, 0, -16]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] w-full bg-paper flex items-center justify-center"
      aria-label="Bab 7: Kutipan Ahli"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-24">
        <motion.div
          style={{ opacity: quoteOpacity, y: quoteY }}
          className="max-w-3xl text-center py-[15vh]"
        >
          <span className="font-mono text-xs uppercase tracking-wideMono text-terracotta block mb-8">
            Bab {CHAPTER_7.chapterNumber} / {CHAPTER_7.tag}
          </span>

          <blockquote className="font-display text-2xl sm:text-4xl md:text-[40px] text-ink leading-subhead font-normal italic tracking-tighter mb-8">
            &ldquo;{CHAPTER_7.quote}&rdquo;
          </blockquote>

          <div className="border-t border-ink/15 w-16 mx-auto my-6" />

          <cite className="not-italic block">
            <span className="font-display text-lg font-semibold text-ink block">
              {CHAPTER_7.author}
            </span>
            <span className="font-mono text-xs uppercase tracking-wideMono text-muted block mt-1">
              {CHAPTER_7.role}
            </span>
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
