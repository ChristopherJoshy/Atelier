"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";

export function ArchiveSpotlight() {
  const spotlightProjects = PROJECTS.slice(0, 8);

  return (
    <section
      id="archive"
      className="py-16 md:py-24 border-b border-line bg-paper-tint/25 relative"
      aria-label="Systems Archive Catalogue Spotlight"
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
          <div className="md:col-span-5">
            <span className="meta-mono-sm block">STAGE 04 // COMPREHENSIVE INDEX</span>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-2 leading-[0.9]">
              SYSTEMS ARCHIVE
            </h2>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-md leading-[1.6]">
              17 intentional systems spanning AI reasoning, safety-critical edge inference, and clinical governance primitives.
            </p>
          </div>

          <div className="md:col-span-3 flex md:flex-col md:items-end justify-between gap-2 font-mono text-xs text-ink-muted">
            <span className="text-ink-faint text-[11px] tracking-[0.12em] uppercase">CATALOGUE SIZE</span>
            <span className="text-ink font-bold text-[13px]">18 VERIFIED ENTRIES</span>
            <Link href="/archive" className="text-signal-red font-bold hover:underline underline-offset-4 text-[13px]">
              BROWSE FULL CATALOGUE →
            </Link>
          </div>
        </motion.div>

        {/* Structured Chronological Archive Table — editorial */}
        <div className="divide-y divide-line pt-2">
          {spotlightProjects.map((p, idx) => {
            const isFeatured = p.tier === "featured";
            const isSecondary = p.tier === "secondary";
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 group hover:bg-paper-tint/60 px-3 md:px-4 transition-colors border-l-2 border-transparent hover:border-signal-red"
              >
                <div className="flex items-baseline gap-4 md:gap-6 md:w-5/12">
                  <span className="font-mono text-[11px] text-ink-faint group-hover:text-signal-red font-bold tracking-[0.12em] shrink-0">
                    {p.num}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-ink uppercase group-hover:text-signal-red transition-colors leading-none">
                        {p.title}
                      </h3>
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
                  <p className="text-[13.5px] text-ink-muted font-sans line-clamp-2 leading-[1.6]">
                    {p.summary}
                  </p>
                </div>

                <div className="md:w-3/12 flex items-center md:justify-end gap-3 font-mono text-[12px] shrink-0">
                  {p.links[0] && (
                    <a
                      href={p.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-signal-red underline decoration-ink/20 underline-offset-4 hover:decoration-signal-red/40 transition-colors text-[12px]"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
