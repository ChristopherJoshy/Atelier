"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  onScrollToWork: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const textRevealVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const redlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.3,
    },
  },
};

const metaItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero({ onScrollToWork }: HeroProps) {
  return (
    <section
      className="min-h-screen relative flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-4 sm:px-6 md:px-12 border-b border-ink/15 overflow-hidden bg-paper select-none"
      aria-label="Editorial Poster Hero"
    >
      {/* Background Architectural Grid Lines (Subtle Editorial Wireframe) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 md:grid-cols-12 gap-4 px-4 sm:px-6 md:px-12 z-0 opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-ink/10 h-full hidden md:block first:border-l last:border-r" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-r border-ink/10 h-full block md:hidden first:border-l last:border-r" />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full flex-1 flex flex-col justify-between"
      >
        {/* Row 1: Monograph Precision Metadata Header */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-3 gap-x-4 pb-4 md:pb-6 border-b border-ink/15">
          <motion.div variants={metaItemVariants} className="col-span-1 md:col-span-3">
            <span className="meta-mono-sm block text-ink-faint">DISCIPLINE // IDENTIFIER</span>
            <p className="font-mono text-xs font-semibold tracking-wider text-ink uppercase mt-0.5">
              CHRISTOPHER JOSHY
            </p>
            <p className="meta-mono-sm text-ink-muted mt-0.5">
              COMPUTER ENGINEER
            </p>
          </motion.div>

          <motion.div variants={metaItemVariants} className="col-span-1 md:col-span-4">
            <span className="meta-mono-sm block text-ink-faint">CORE SYSTEMS DOMAIN</span>
            <p className="font-mono text-xs text-ink uppercase mt-0.5 tracking-wider font-medium">
              AI · SYSTEMS · SECURITY
            </p>
            <p className="meta-mono-sm text-ink-muted mt-0.5">
              RL / EDGE AI / SENSORS
            </p>
          </motion.div>

          <motion.div variants={metaItemVariants} className="col-span-1 md:col-span-3">
            <span className="meta-mono-sm block text-ink-faint">LOCATION &amp; ROLE</span>
            <p className="font-mono text-xs text-ink uppercase mt-0.5 tracking-wider">
              NEXUS TECH LEAD
            </p>
            <p className="meta-mono-sm text-ink-muted mt-0.5">
              KERALA, INDIA
            </p>
          </motion.div>

          <motion.div variants={metaItemVariants} className="col-span-1 md:col-span-2 flex flex-col items-start md:items-end justify-between">
            <span className="meta-mono-sm text-ink-faint">STATUS</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
              <span className="font-mono text-xs font-bold text-ink tracking-wider">2026 ACTIVE</span>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Monumental Oversized Typography (Asymmetric & Bleeding) */}
        <div className="my-auto py-6 md:py-12">
          {/* Christopher Joshy Oversized Banner */}
          <div className="overflow-hidden mb-3 md:mb-6">
            <motion.h1
              variants={textRevealVariants}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-bold text-ink select-none tracking-tighter uppercase leading-[0.88] break-words"
            >
              CHRISTOPHER <span className="text-ink-muted">JOSHY</span>
            </motion.h1>
          </div>

          {/* THE SIGNATURE REDLINE */}
          <div className="relative py-2 md:py-4">
            <motion.div
              variants={redlineVariants}
              className="h-[1.5px] bg-signal-red w-full"
            />
            {/* Fine coordinate tick mark at redline intersection */}
            <motion.span
              variants={metaItemVariants}
              className="absolute right-0 -top-2 md:-top-3 bg-paper px-2 font-mono text-[0.62rem] text-signal-red tracking-widest uppercase font-semibold"
            >
              TRAJECTORY // 01.000
            </motion.span>
          </div>

          {/* Primary Engineering Manifesto Statement */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 md:pt-6">
            <div className="md:col-span-8 overflow-hidden">
              <motion.div variants={textRevealVariants} className="space-y-1">
                <span className="meta-mono block text-ink-faint mb-2 font-bold tracking-widest">
                  [ENGINEERING THESIS]
                </span>
                <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] text-ink uppercase">
                  I BUILD SYSTEMS <br />
                  <span className="text-ink-muted">THAT THINK,</span> <br />
                  ADAPT AND ACT.
                </p>
              </motion.div>
            </div>

            {/* Asymmetric Side Column: Supporting Monograph Callout */}
            <div className="md:col-span-4 flex flex-col justify-end border-l border-ink/15 pl-4 sm:pl-6 md:pl-8 space-y-4 md:space-y-6">
              <motion.div variants={metaItemVariants} className="space-y-2 md:space-y-3">
                <span className="meta-mono-sm text-ink-faint block">VERIFIED BENCHMARK</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
                    TOP 3%
                  </span>
                  <span className="font-mono text-xs text-signal-red font-semibold">
                    KAGGLE SILVER
                  </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-ink-muted leading-relaxed">
                  Ranked 130 of 4,182 teams in NVIDIA Nemotron Model Reasoning Challenge.
                  1st Runner-Up at iQOO Bengaluru City Battle with Anchor GPS Integrity Engine.
                </p>
              </motion.div>

              <motion.div variants={metaItemVariants} className="pt-3 border-t border-ink/10">
                <span className="meta-mono-sm text-ink-faint block mb-2">SYSTEM AUDIT LOG</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="font-mono text-[0.62rem] px-2 py-0.5 bg-paper-tint border border-ink/15 text-ink">
                    RAIM/FDE SENSORS
                  </span>
                  <span className="font-mono text-[0.62rem] px-2 py-0.5 bg-paper-tint border border-ink/15 text-ink">
                    JAX REINFORCEMENT
                  </span>
                  <span className="font-mono text-[0.62rem] px-2 py-0.5 bg-paper-tint border border-ink/15 text-ink">
                    FHIR MCP SERVER
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Row 3: Bottom Signal Bar & Scroll Anchor */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-4 border-t border-ink/15 items-center">
          {/* Signal Indicator */}
          <motion.div variants={metaItemVariants} className="md:col-span-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-red" />
            </span>
            <span className="font-mono text-[0.68rem] font-semibold tracking-wider text-ink uppercase">
              SIGNAL: ANCHOR 01 / GPS INTEGRITY
            </span>
          </motion.div>

          {/* Quick Route Shortcuts */}
          <motion.div variants={metaItemVariants} className="md:col-span-5 flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted">
            <Link href="/work" className="hover:text-ink transition-colors underline decoration-ink/30 underline-offset-4">
              [WORK]
            </Link>
            <Link href="/achievements" className="hover:text-ink transition-colors underline decoration-ink/30 underline-offset-4">
              [BENCHMARKS]
            </Link>
            <Link href="/experiments" className="hover:text-ink transition-colors underline decoration-ink/30 underline-offset-4">
              [NOTEBOOK]
            </Link>
            <Link href="/archive" className="hover:text-ink transition-colors underline decoration-ink/30 underline-offset-4">
              [ARCHIVE]
            </Link>
          </motion.div>

          {/* Scroll Down Trigger */}
          <motion.div variants={metaItemVariants} className="md:col-span-3 md:text-right">
            <button
              onClick={onScrollToWork}
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-ink hover:text-signal-red transition-colors"
            >
              <span>EXPLORE WORK</span>
              <span className="transition-transform group-hover:translate-y-1">↓</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
