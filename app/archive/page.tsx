import { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project & Systems Archive — Christopher Joshy",
  description: "Comprehensive catalogue of 18 repositories, models, games, and infrastructure tools built by Christopher Joshy.",
};

export default function ArchivePage() {
  const years = ["2026", "2025—2026", "2025"];

  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad">
        {/* Top Monograph Banner */}
        <div className="border-b border-line pb-8 md:pb-10 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">INDEX / 04 // COMPREHENSIVE CATALOGUE</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">SYSTEMS ARCHIVE</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                Complete index of 18 repositories, tools, autonomous agents, and game platforms. Filtered for authentic
                technical substance, zero vanity prototypes.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">TOTAL RECORDED: {PROJECTS.length} SYSTEMS</p>
              <p className="text-signal-red font-bold">REPOSITORIES &amp; LIVE DEPLOYMENTS VERIFIED</p>
            </div>
          </div>
        </div>

        {/* Structured Chronological Archive Table */}
        <div className="space-y-12 md:space-y-16">
          {years.map((year) => {
            const yearProjects = PROJECTS.filter((p) => p.year.includes(year) || p.year === year);

            return (
              <section key={year} className="space-y-4">
                <div className="flex items-center gap-4 pb-3 border-b-2 border-ink">
                  <span className="font-mono text-[18px] md:text-xl font-bold text-signal-red">// {year}</span>
                  <span className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.12em]">[{yearProjects.length} ENTRIES]</span>
                </div>

                <div className="divide-y divide-line border-b border-line">
                  {yearProjects.map((p) => {
                    const isFeatured = p.tier === "featured";
                    const isSecondary = p.tier === "secondary";

                    return (
                      <div
                        key={p.slug}
                        className="py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 group hover:bg-paper-tint/60 px-3 md:px-4 transition-colors border-l-2 border-transparent hover:border-signal-red"
                      >
                        <div className="flex items-baseline gap-4 md:gap-6 md:w-5/12 min-w-0">
                          <span className="font-mono text-[11px] text-ink-faint group-hover:text-signal-red font-bold tracking-[0.12em] shrink-0">
                            {p.num}
                          </span>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 className="text-[19px] sm:text-[22px] font-bold text-ink uppercase group-hover:text-signal-red transition-colors leading-none break-words min-w-0">
                                {p.title}
                              </h2>
                              <span
                                className={`font-mono text-[10px] px-2 py-1 border uppercase tracking-[0.08em] font-bold whitespace-nowrap ${
                                  isFeatured
                                    ? "bg-signal-red text-white border-signal-red"
                                    : isSecondary
                                    ? "bg-ink text-paper border-ink"
                                    : "bg-paper border-line text-ink-muted"
                                }`}
                              >
                                {p.tier || "ARCHIVE"}
                              </span>
                            </div>
                            <span className="meta-mono-sm block mt-1.5 opacity-80">{p.category}</span>
                          </div>
                        </div>

                        <div className="md:w-4/12">
                          <p className="text-[13.5px] text-ink-muted font-sans line-clamp-2 leading-[1.6]">{p.summary}</p>
                        </div>

                        <div className="md:w-3/12 flex items-center md:justify-end gap-3 font-mono text-[12px] shrink-0">
                          {p.links[0] && (
                            <a
                              href={p.links[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ink hover:text-signal-red underline decoration-ink/20 underline-offset-4 hover:decoration-signal-red/40 transition-colors"
                            >
                              {p.links[0].type.toUpperCase()} ↗
                            </a>
                          )}

                          <Link
                            href={`/work/${p.slug}`}
                            className="px-3.5 py-2 bg-ink text-paper hover:bg-signal-red transition-colors text-[11px] font-bold uppercase tracking-[0.08em]"
                          >
                            CASE STUDY →
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
