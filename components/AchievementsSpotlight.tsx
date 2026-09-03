"use client";

import Link from "next/link";
import { ACHIEVEMENTS } from "@/lib/achievements";

export function AchievementsSpotlight() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/15 bg-paper relative"
      aria-label="Key Achievements Spotlight"
    >
      {/* Section Monograph Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-ink/15">
        <div className="md:col-span-4">
          <span className="meta-mono-sm block text-ink-faint">INDEX 02 // RECOGNITION</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-1">
            KEY BENCHMARKS
          </h2>
        </div>
        <div className="md:col-span-5 flex items-end">
          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            Verified competitive programming medals, national hackathon podium finishes,
            and institutional technical leadership awards.
          </p>
        </div>
        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-1.5 font-mono text-xs text-ink-muted">
          <span className="text-ink-faint text-[0.65rem]">EVIDENCE: STRICTLY VERIFIED</span>
          <Link
            href="/achievements"
            className="text-signal-red font-bold hover:underline"
          >
            VIEW ALL ACHIEVEMENTS →
          </Link>
        </div>
      </div>

      {/* Monumental Typographic Achievement Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {/* Card 1: NVIDIA Nemotron Reasoning */}
        <div className="border border-ink/15 p-6 md:p-8 bg-paper-tint flex flex-col justify-between group hover:border-ink transition-colors relative">
          <span className="meta-mono-sm text-ink-faint block mb-4">
            COMPETITION // KAGGLE &amp; NVIDIA · 2026
          </span>

          <div className="my-4">
            <span className="display-title block text-ink leading-none">
              0.860
            </span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-signal-red" />
              <span className="font-mono text-xs font-bold text-signal-red uppercase tracking-wider">
                TOP ~3% GLOBALLY (RANK 130 OF 4,182)
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-ink/10 space-y-2">
            <h3 className="font-bold text-base text-ink uppercase">
              NVIDIA Nemotron Challenge
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Optimized multi-step reasoning heuristics and prompt-chaining topologies over the Nemotron model family.
            </p>
            <span className="meta-mono-sm block text-ink-faint pt-2">
              KAGGLE SILVER MEDALIST
            </span>
          </div>
        </div>

        {/* Card 2: iQOO Hackathon Bengaluru City Battle */}
        <div className="border border-ink/15 p-6 md:p-8 bg-paper-tint flex flex-col justify-between group hover:border-ink transition-colors relative">
          <span className="meta-mono-sm text-ink-faint block mb-4">
            CITY BATTLE // iQOO · BENGALURU 2026
          </span>

          <div className="my-4">
            <span className="display-title block text-ink leading-none">
              ₹80K
            </span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-signal-red" />
              <span className="font-mono text-xs font-bold text-signal-red uppercase tracking-wider">
                1ST RUNNER-UP (STUDENT TRACK)
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-ink/10 space-y-2">
            <h3 className="font-bold text-base text-ink uppercase">
              Anchor: GPS Integrity Engine
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Designed deterministic RAIM/FDE multi-sensor fusion safety layer proving physical spoof detection on Android.
            </p>
            <span className="meta-mono-sm block text-ink-faint pt-2">
              PODIUM FINISH · TEAM NEXUS
            </span>
          </div>
        </div>

        {/* Card 3: TECHASTH'26 National Finalist */}
        <div className="border border-ink/15 p-6 md:p-8 bg-paper-tint flex flex-col justify-between group hover:border-ink transition-colors relative md:col-span-2 lg:col-span-1">
          <span className="meta-mono-sm text-ink-faint block mb-4">
            NATIONAL STAGE // IIIT KOTTAYAM · 2026
          </span>

          <div className="my-4">
            <span className="display-title block text-ink leading-none">
              FINAL
            </span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-signal-red" />
              <span className="font-mono text-xs font-bold text-signal-red uppercase tracking-wider">
                NATIONAL FINALIST (PODIUM SELECTION)
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-ink/10 space-y-2">
            <h3 className="font-bold text-base text-ink uppercase">
              Sahayi: Multilingual AI Health
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Voice-first telephone gateway delivering clinical triage in Malayalam with ~12ms stream latency and zero-latency safety brakes.
            </p>
            <span className="meta-mono-sm block text-ink-faint pt-2">
              TEAM BLACK CATS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
