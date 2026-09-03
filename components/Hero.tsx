"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface HeroProps {
  onScrollToWork: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const textRevealVariants = {
  hidden: { y: 36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const redlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.45 },
  },
};

const metaItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero({ onScrollToWork }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-[92vh] md:min-h-screen relative flex flex-col justify-between pt-20 sm:pt-24 pb-10 px-0 border-b border-line-subtle overflow-hidden bg-paper select-none"
      aria-label="Editorial Poster Hero"
    >
      {/* Background Architectural Grid — paper editorial, not congested */}
      <motion.div style={{ opacity: opacityBg }} className="absolute inset-0 pointer-events-none z-0">
        <div className="h-full w-full grid grid-cols-6 md:grid-cols-12 gap-0 px-5 sm:px-8 lg:px-16 container-editorial">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-line/35 h-full hidden md:block first:border-l last:border-r"
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-line/35 h-full block md:hidden first:border-l last:border-r"
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full flex-1 flex flex-col justify-between container-editorial section-pad"
      >
        {/* Row 1: Monograph Precision Metadata Header — 1col on mobile to fix cramped 2col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 sm:gap-4 md:gap-6 pb-6 md:pb-7 border-b border-line-subtle">
          <motion.div variants={metaItemVariants} className="sm:col-span-1 md:col-span-3">
            <span className="meta-mono-sm block">DISCIPLINE // IDENTIFIER</span>
            <p className="font-mono text-[13px] font-semibold tracking-wider text-ink uppercase mt-1.5">
              CHRISTOPHER JOSHY
            </p>
            <p className="meta-mono-sm mt-1 opacity-80">
              COMPUTER ENGINEER
            </p>
          </motion.div>

          <motion.div variants={metaItemVariants} className="sm:col-span-1 md:col-span-4">
            <span className="meta-mono-sm block">CORE SYSTEMS DOMAIN</span>
            <p className="font-mono text-[13px] text-ink uppercase mt-1.5 tracking-wider font-medium">
              AI · SYSTEMS · SECURITY
            </p>
            <p className="meta-mono-sm mt-1 opacity-80">
              RL / EDGE AI / SENSORS
            </p>
          </motion.div>

          <motion.div variants={metaItemVariants} className="sm:col-span-1 md:col-span-3">
            <span className="meta-mono-sm block">LOCATION &amp; ROLE</span>
            <p className="font-mono text-[13px] text-ink uppercase mt-1.5 tracking-wider">
              NEXUS TECH LEAD
            </p>
            <p className="meta-mono-sm mt-1 opacity-80">KERALA, INDIA</p>
          </motion.div>

          <motion.div
            variants={metaItemVariants}
            className="sm:col-span-1 md:col-span-2 flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2"
          >
            <span className="meta-mono-sm">STATUS</span>
            <div className="flex items-center gap-2.5 mt-0 sm:mt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-red opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-red" />
              </span>
              <span className="font-mono text-[13px] font-bold text-ink tracking-wider">2026 ACTIVE</span>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Monumental Oversized Typography */}
        <motion.div style={{ y: yTitle }} className="my-auto py-8 md:py-12 lg:py-10 min-w-0">
          <div className="overflow-hidden mb-4 md:mb-6 min-w-0">
            <motion.h1
              variants={textRevealVariants}
              className="display-monumental text-ink select-none ink-bleed min-w-0"
              style={{ fontFeatureSettings: '"ss01"' }}
            >
              CHRISTOPHER <span className="text-ink-muted font-light">JOSHY</span>
            </motion.h1>
          </div>

          {/* THE SIGNATURE REDLINE — 1.5px, precise, human */}
          <div className="relative py-3 md:py-5">
            <motion.div
              variants={redlineVariants}
              className="h-[1.5px] bg-signal-red w-full origin-left"
            />
            <motion.span
              variants={metaItemVariants}
              className="absolute right-0 -top-1 md:-top-1 bg-paper px-3 font-mono text-[11px] text-signal-red tracking-[0.18em] uppercase font-semibold leading-none py-1 border border-signal-red/15"
            >
              TRAJECTORY // 01.000
            </motion.span>
          </div>

          {/* Primary Engineering Manifesto — increased breathing */}
          {/* Primary Engineering Manifesto — editorial asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pt-6 md:pt-8">
            <div className="md:col-span-8 overflow-hidden">
              <motion.div variants={textRevealVariants} className="space-y-3">
                <span className="meta-mono block mb-2 font-semibold tracking-[0.14em] text-ink-muted">
                  [ENGINEERING THESIS]
                </span>
                <p className="text-[clamp(1.85rem,5.2vw,4.4rem)] font-bold tracking-tighter leading-[0.90] text-ink uppercase text-pretty">
                  I BUILD SYSTEMS <br />
                  <span className="text-ink-muted font-light">THAT THINK,</span> <br />
                  ADAPT AND ACT.
                </p>
              </motion.div>
            </div>

            {/* Asymmetric Side Column: Supporting Monograph Callout — more air */}
            <div className="md:col-span-4 flex flex-col justify-end md:border-l md:border-line md:pl-8 lg:pl-10 space-y-6 md:space-y-7">
              <motion.div variants={metaItemVariants} className="space-y-3">
                <span className="meta-mono-sm block">VERIFIED BENCHMARK</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl md:text-[2.2rem] font-bold tracking-tighter text-ink leading-none">
                    TOP 3%
                  </span>
                  <span className="font-mono text-[11px] text-signal-red font-bold tracking-widest border border-signal-red/25 px-1.5 py-0.5">
                    KAGGLE SILVER
                  </span>
                </div>
                <p className="font-sans text-[13.5px] md:text-[14px] text-ink-muted leading-[1.65]">
                  Rank 130 of 4,182 in NVIDIA Nemotron Reasoning. 1st Runner-Up at iQOO Bengaluru with the Anchor GPS Integrity Engine — judged live on hardware, not slides.
                </p>
              </motion.div>

              <motion.div variants={metaItemVariants} className="pt-5 border-t border-line">
                <span className="meta-mono-sm block mb-3">SYSTEM AUDIT LOG</span>
                <ul className="space-y-0 font-mono text-[11px] tracking-[0.08em] uppercase text-ink divide-y divide-line-subtle border-t border-line-subtle">
                  <li className="flex gap-2 py-2.5"><span className="text-signal-red">—</span> RAIM / FDE Sensor Invariants</li>
                  <li className="flex gap-2 py-2.5"><span className="text-signal-red">—</span> JAX Vectorized Reinforcement</li>
                  <li className="flex gap-2 py-2.5"><span className="text-signal-red">—</span> FHIR MCP Clinical Governance</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Row 3: Bottom Signal Bar — editorial rule */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pt-6 border-t border-line items-center">
          <motion.div variants={metaItemVariants} className="md:col-span-4 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-red" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-[0.10em] text-ink uppercase">
              SIGNAL: ANCHOR 01 / GPS INTEGRITY
            </span>
          </motion.div>

          <motion.div
            variants={metaItemVariants}
            className="md:col-span-5 flex flex-wrap items-center gap-4 font-mono text-[12px] text-ink-muted"
          >
            <Link href="/work" className="hover:text-ink transition-colors underline decoration-ink/25 underline-offset-[6px] hover:decoration-signal-red">
              [WORK]
            </Link>
            <Link href="/achievements" className="hover:text-ink transition-colors underline decoration-ink/25 underline-offset-[6px] hover:decoration-signal-red">
              [BENCHMARKS]
            </Link>
            <Link href="/experiments" className="hover:text-ink transition-colors underline decoration-ink/25 underline-offset-[6px] hover:decoration-signal-red">
              [NOTEBOOK]
            </Link>
            <Link href="/archive" className="hover:text-ink transition-colors underline decoration-ink/25 underline-offset-[6px] hover:decoration-signal-red">
              [ARCHIVE]
            </Link>
          </motion.div>

          <motion.div variants={metaItemVariants} className="md:col-span-3 md:text-right">
            <button
              onClick={onScrollToWork}
              className="group inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.14em] uppercase text-ink hover:text-signal-red transition-colors border border-line px-4 py-2.5 hover:border-signal-red bg-paper"
            >
              <span>EXPLORE WORK</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
