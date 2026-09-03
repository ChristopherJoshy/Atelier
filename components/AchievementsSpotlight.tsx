"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/achievements";

export function AchievementsSpotlight() {
  return (
    <section
      className="py-16 md:py-24 border-b border-line bg-paper-tint/35 relative"
      aria-label="Key Achievements Spotlight"
    >
      <div className="container-editorial section-pad">
        {/* Section Monograph Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 md:pb-10 border-b border-line"
        >
          <div className="md:col-span-4">
            <span className="meta-mono-sm block">INDEX 02 // RECOGNITION</span>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-2 leading-[0.9]">
              KEY BENCHMARKS
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-md leading-[1.6]">
              Verified outcomes measured against global leaderboards, hardware safety invariants, and national engineering
              stages. No speculation.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 font-mono text-xs text-ink-muted">
            <span className="text-ink-faint text-[11px] tracking-[0.12em] uppercase">EVIDENCE: STRICTLY VERIFIED</span>
            <Link href="/achievements" className="text-signal-red font-bold hover:underline underline-offset-4 text-[13px]">
              VIEW ALL BENCHMARKS →
            </Link>
          </div>
        </motion.div>

        {/* Monumental Typographic Achievement Blocks — editorial, not dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pt-8 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="card-editorial p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group bg-paper"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-signal-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="meta-mono-sm block mb-5">COMPETITION // KAGGLE &amp; NVIDIA · 2026</span>

            <div className="my-2">
              <span className="display-title block text-ink leading-[0.82] text-[3.2rem] md:text-[4.2rem]">
                0.860
              </span>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-signal-red shrink-0" />
                <span className="font-mono text-[11px] font-bold text-signal-red uppercase tracking-[0.10em]">
                  TOP ~3% GLOBALLY (RANK 130 OF 4,182)
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-line/60 space-y-2.5 mt-4">
              <h3 className="font-bold text-[15px] text-ink uppercase tracking-tight">NVIDIA Nemotron Challenge</h3>
              <p className="text-[13.5px] text-ink-muted leading-[1.6] font-sans">
                Optimized multi-step reasoning heuristics and prompt-chaining topologies over the Nemotron model family.
              </p>
              <span className="meta-mono-sm block pt-2">KAGGLE SILVER MEDALIST</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="card-editorial p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group bg-paper"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-signal-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="meta-mono-sm block mb-5">CITY BATTLE // iQOO · BENGALURU 2026</span>

            <div className="my-2">
              <span className="display-title block text-ink leading-[0.82] text-[3.2rem] md:text-[4.2rem]">₹80K</span>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-signal-red shrink-0" />
                <span className="font-mono text-[11px] font-bold text-signal-red uppercase tracking-[0.10em]">
                  1ST RUNNER-UP (STUDENT TRACK)
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-line/60 space-y-2.5 mt-4">
              <h3 className="font-bold text-[15px] text-ink uppercase tracking-tight">Anchor: GPS Integrity Engine</h3>
              <p className="text-[13.5px] text-ink-muted leading-[1.6] font-sans">
                Designed deterministic RAIM/FDE multi-sensor fusion safety layer proving physical spoof detection on
                Android.
              </p>
              <span className="meta-mono-sm block pt-2">PODIUM FINISH · TEAM NEXUS</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="card-editorial p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group md:col-span-2 lg:col-span-1 bg-paper"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-signal-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="meta-mono-sm block mb-5">NATIONAL STAGE // IIIT KOTTAYAM · 2026</span>

            <div className="my-2">
              <span className="display-title block text-ink leading-[0.82] text-[3.2rem] md:text-[4.2rem]">FINAL</span>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-signal-red shrink-0" />
                <span className="font-mono text-[11px] font-bold text-signal-red uppercase tracking-[0.10em]">
                  NATIONAL FINALIST (PODIUM SELECTION)
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-line/60 space-y-2.5 mt-4">
              <h3 className="font-bold text-[15px] text-ink uppercase tracking-tight">Sahayi: Multilingual AI Health</h3>
              <p className="text-[13.5px] text-ink-muted leading-[1.6] font-sans">
                Voice-first telephone gateway delivering clinical triage in Malayalam with ~12ms stream latency and
                zero-latency safety brakes.
              </p>
              <span className="meta-mono-sm block pt-2">TEAM BLACK CATS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
