import { Metadata } from "next";
import Link from "next/link";
import { ACHIEVEMENTS } from "@/lib/achievements";

export const metadata: Metadata = {
  title: "Achievements & Benchmarks — Christopher Joshy",
  description: "Verified competitive programming medals, hackathon podium finishes, and institutional leadership awards.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad">
        {/* Top Editorial Monograph Banner */}
        <div className="border-b border-line pb-8 md:pb-10 mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">INDEX / 02 // VERIFIED RECOGNITION</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">KEY BENCHMARKS</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                No inflated leaderboards. Every number backed by public verification: Kaggle profiles, hackathon certificates, and deployed production artifacts.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">DATASET: KAGGLE + iQOO + IIIT KOTTAYAM</p>
              <p className="text-signal-red font-bold">3 PODIUM FINISHES VERIFIED</p>
            </div>
          </div>
        </div>

        {/* Monumental Editorial Achievement Entries — more breathing */}
        <div className="space-y-10 md:space-y-12">
          {ACHIEVEMENTS.map((item, idx) => (
            <article
              key={item.id}
              className="card-editorial p-6 sm:p-8 md:p-10 lg:p-12 relative group"
            >
              {/* Top Index & Date Line */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 border-b border-line pb-4 font-mono text-[12px]">
                <div className="flex items-center gap-3">
                  <span className="text-signal-red font-bold tracking-wide">BENCHMARK // 0{idx + 1}</span>
                  <span className="text-ink-faint">/</span>
                  <span className="text-ink font-semibold uppercase tracking-wide">{item.organization}</span>
                </div>
                <span className="text-ink-faint font-medium">{item.year}</span>
              </div>

              {/* Monumental Benchmark Callout */}
              <div className="py-6 md:py-8 border-b border-line">
                <span className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-bold tracking-tighter uppercase text-ink block leading-[0.88] break-words">
                  {item.highlightValue}
                </span>
                <div className="flex items-center gap-2.5 mt-4">
                  <span className="w-2 h-2 rounded-full bg-signal-red shrink-0" />
                  <span className="font-mono text-[11px] md:text-[13px] font-bold text-signal-red uppercase tracking-[0.10em]">
                    {item.highlightLabel}
                  </span>
                </div>
              </div>

              {/* Narrative, Citation & Evidence Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 pt-6 items-start">
                <div className="lg:col-span-4">
                  <span className="meta-mono-sm block">OFFICIAL CITATION</span>
                  <h2 className="text-[20px] sm:text-2xl font-bold uppercase text-ink mt-2 leading-tight tracking-tight">{item.title}</h2>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-[14px] md:text-[15px] text-ink-muted font-sans leading-[1.65]">{item.description}</p>

                  <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4 font-mono text-[12px]">
                    <span className="text-ink-faint">
                      VERIFIED: <strong className="text-ink font-semibold">{item.verifiedEvidence}</strong>
                    </span>

                    {item.projectSlug && (
                      <Link href={`/work/${item.projectSlug}`} className="text-signal-red font-bold hover:underline underline-offset-4">
                        AUDIT PROJECT ARCHITECTURE →
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Tech/Discipline Tags — larger */}
              <div className="pt-5 mt-6 border-t border-line flex flex-wrap gap-2 font-mono">
                {item.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1.5 bg-paper border border-line text-ink text-[11px] tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
