import { Metadata } from "next";
import Link from "next/link";
import { ACHIEVEMENTS } from "@/lib/achievements";

export const metadata: Metadata = {
  title: "Achievements & Benchmarks — Christopher Joshy",
  description: "Verified competitive programming medals, hackathon podium finishes, and institutional leadership awards.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Editorial Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">INDEX / 02 // COMPETITIVE BENCHMARKS</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              PROVEN OUTCOMES
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              No participation certificates or badge walls. Every entry represents an externally evaluated
              benchmark, global competition ranking, or cash award on a live stage.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>STANDARD: VERIFIED LEDGER ONLY</p>
            <p className="text-signal-red font-bold">100% FACTUAL FIDELITY</p>
          </div>
        </div>
      </div>

      {/* Monumental Editorial Achievement Entries */}
      <div className="space-y-12">
        {ACHIEVEMENTS.map((item, idx) => (
          <article
            key={item.id}
            className="p-6 sm:p-8 md:p-12 bg-paper-tint border border-ink/20 relative group hover:border-ink transition-colors"
          >
            {/* Top Index & Date Line */}
            <div className="flex justify-between items-baseline border-b border-ink/10 pb-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-signal-red font-bold">BENCHMARK // 0{idx + 1}</span>
                <span className="text-ink-faint">/</span>
                <span className="text-ink font-semibold uppercase">{item.organization}</span>
              </div>
              <span className="text-ink-faint">{item.year}</span>
            </div>

            {/* Monumental Benchmark Callout (Full width, zero horizontal collision risk) */}
            <div className="py-6 md:py-8 border-b border-ink/10">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter uppercase text-ink block leading-[0.88] break-words">
                {item.highlightValue}
              </span>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-signal-red" />
                <span className="font-mono text-xs md:text-sm font-bold text-signal-red uppercase tracking-wider">
                  {item.highlightLabel}
                </span>
              </div>
            </div>

            {/* Narrative, Citation & Evidence Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start">
              <div className="lg:col-span-4">
                <span className="meta-mono-sm text-ink-faint block">OFFICIAL CITATION</span>
                <h2 className="text-xl sm:text-2xl font-bold uppercase text-ink mt-1 leading-snug">
                  {item.title}
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm md:text-base text-ink-muted font-sans leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-ink-faint">
                    VERIFIED: <strong className="text-ink">{item.verifiedEvidence}</strong>
                  </span>

                  {item.projectSlug && (
                    <Link
                      href={`/work/${item.projectSlug}`}
                      className="text-signal-red font-bold hover:underline"
                    >
                      AUDIT PROJECT ARCHITECTURE →
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Tech/Discipline Tags */}
            <div className="pt-4 mt-6 border-t border-ink/10 flex flex-wrap gap-2 font-mono text-[0.65rem]">
              {item.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-paper border border-ink/15 text-ink">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
