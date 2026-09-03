"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export function ArchiveSpotlight() {
  // Showcase top 8 repositories in chronological format
  const spotlightProjects = PROJECTS.slice(0, 8);

  return (
    <section
      id="archive"
      className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/15 bg-paper relative"
      aria-label="Systems Archive Catalogue Spotlight"
    >
      {/* Section Monograph Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-ink/15">
        <div className="md:col-span-5">
          <span className="meta-mono-sm block text-ink-faint">STAGE 04 // COMPREHENSIVE INDEX</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-1">
            SYSTEMS ARCHIVE
          </h2>
        </div>

        <div className="md:col-span-4 flex items-end">
          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            Every repository, autonomous agent, and security utility filtered for authentic substance.
            Zero vanity prototypes or fake benchmarks.
          </p>
        </div>

        <div className="md:col-span-3 flex md:flex-col md:items-end justify-between font-mono text-xs text-ink-muted">
          <span className="text-ink-faint">CATALOGUE SIZE</span>
          <span className="text-ink font-bold">18 VERIFIED ENTRIES</span>
          <Link
            href="/archive"
            className="hover:text-signal-red transition-colors underline decoration-ink/20 font-bold"
          >
            VIEW FULL 18-SYSTEM ARCHIVE →
          </Link>
        </div>
      </div>

      {/* Structured Chronological Archive Table */}
      <div className="divide-y divide-ink/10 pt-6">
        {spotlightProjects.map((p) => {
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
                    <h3 className="text-lg sm:text-xl font-bold text-ink uppercase group-hover:text-signal-red transition-colors">
                      {p.title}
                    </h3>
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
}
