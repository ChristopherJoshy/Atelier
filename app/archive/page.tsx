import { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project & Systems Archive — Christopher Joshy",
  description: "Comprehensive catalogue of 18 repositories, models, games, and infrastructure tools built by Christopher Joshy.",
};

export default function ArchivePage() {
  // Group projects by year
  const years = ["2026", "2025—2026", "2025"];

  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">INDEX / 04 // COMPREHENSIVE CATALOGUE</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              SYSTEMS ARCHIVE
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              Complete index of 18 repositories, tools, autonomous agents, and game platforms.
              Filtered for authentic technical substance, zero vanity prototypes.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>TOTAL RECORDED: {PROJECTS.length} SYSTEMS</p>
            <p className="text-signal-red font-bold">REPOSITORIES &amp; LIVE DEPLOYMENTS VERIFIED</p>
          </div>
        </div>
      </div>

      {/* Structured Chronological Archive Table */}
      <div className="space-y-16">
        {years.map((year) => {
          const yearProjects = PROJECTS.filter((p) => p.year.includes(year) || p.year === year);

          return (
            <section key={year} className="space-y-4">
              <div className="flex items-center gap-4 pb-2 border-b-2 border-ink">
                <span className="font-mono text-xl font-bold text-signal-red">
                  // {year}
                </span>
                <span className="font-mono text-xs text-ink-faint uppercase">
                  [{yearProjects.length} ENTRIES]
                </span>
              </div>

              <div className="divide-y divide-ink/10 border-b border-ink/10">
                {yearProjects.map((p) => {
                  const isFeatured = p.tier === "featured";
                  const isSecondary = p.tier === "secondary";

                  return (
                    <div
                      key={p.slug}
                      className="py-4 md:py-5 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group hover:bg-paper-tint/60 px-3 transition-colors"
                    >
                      <div className="flex items-baseline gap-4 md:gap-8 md:w-5/12">
                        <span className="font-mono text-xs text-ink-faint group-hover:text-signal-red font-bold">
                          {p.num}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl sm:text-2xl font-bold text-ink uppercase group-hover:text-signal-red transition-colors">
                              {p.title}
                            </h2>
                            <span
                              className={`font-mono text-[0.62rem] px-1.5 py-0.2 border uppercase ${
                                isFeatured
                                  ? "bg-signal-red text-white border-signal-red font-bold"
                                  : isSecondary
                                  ? "bg-ink text-paper border-ink"
                                  : "bg-paper border-ink/20 text-ink-muted"
                              }`}
                            >
                              {p.tier || "ARCHIVE"}
                            </span>
                          </div>
                          <span className="meta-mono-sm text-ink-muted block mt-0.5 font-medium">
                            {p.category}
                          </span>
                        </div>
                      </div>

                      <div className="md:w-4/12">
                        <p className="text-xs text-ink-muted font-sans line-clamp-2">
                          {p.summary}
                        </p>
                      </div>

                      <div className="md:w-3/12 flex items-center md:justify-end gap-4 font-mono text-xs">
                        {p.links[0] && (
                          <a
                            href={p.links[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink hover:text-signal-red underline decoration-ink/20"
                          >
                            {p.links[0].type.toUpperCase()} ↗
                          </a>
                        )}

                        <Link
                          href={`/work/${p.slug}`}
                          className="px-3 py-1 bg-ink text-paper hover:bg-signal-red transition-colors text-[0.68rem] font-bold uppercase tracking-wider"
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
  );
}
