"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects, getSecondaryProjects } from "@/lib/projects";
import { ProjectVisualArt } from "./art/ProjectVisualArt";

export function SelectedWork() {
  const featuredProjects = getFeaturedProjects();
  const secondaryProjects = getSecondaryProjects();
  const [activeSlug, setActiveSlug] = useState<string>(featuredProjects[0]?.slug || "anchor");
  const [activeTier, setActiveTier] = useState<"featured" | "secondary">("featured");

  const displayedProjects = activeTier === "featured" ? featuredProjects : secondaryProjects;
  const activeProject = displayedProjects.find((p) => p.slug === activeSlug) || displayedProjects[0] || featuredProjects[0];

  return (
    <section
      id="selected-work"
      className="py-16 md:py-24 border-b border-line bg-paper relative"
      aria-label="Selected Work Showcase"
    >
      <div className="container-editorial section-pad">
        {/* Section Monograph Header — more air, larger type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 md:pb-10 border-b border-line"
        >
          <div className="md:col-span-5">
            <span className="meta-mono-sm block">STAGE 02 // VERIFIED SYSTEMS</span>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-2 leading-[0.9]">
              SELECTED WORK
            </h2>
            <div className="flex flex-wrap gap-2.5 mt-5">
              <button
                onClick={() => {
                  setActiveTier("featured");
                  setActiveSlug(featuredProjects[0].slug);
                }}
                className={`font-mono text-[11px] uppercase px-3.5 py-2 border transition-all tracking-[0.08em] ${
                  activeTier === "featured"
                    ? "bg-ink text-paper border-ink font-bold"
                    : "bg-paper text-ink-muted border-line hover:border-ink hover:text-ink"
                }`}
              >
                [03 FEATURED MONOGRAPHS]
              </button>
              <button
                onClick={() => {
                  setActiveTier("secondary");
                  setActiveSlug(secondaryProjects[0]?.slug || "aiva");
                }}
                className={`font-mono text-[11px] uppercase px-3.5 py-2 border transition-all tracking-[0.08em] ${
                  activeTier === "secondary"
                    ? "bg-ink text-paper border-ink font-bold"
                    : "bg-paper text-ink-muted border-line hover:border-ink hover:text-ink"
                }`}
              >
                [SECONDARY ARCHITECTURES]
              </button>
            </div>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-md leading-[1.6]">
              Curated engineering records across hardware sensor invariants, vectorized reinforcement learning, and
              software supply-chain defenses. Every system backed by public source or verified medals.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 font-mono text-xs text-ink-muted">
            <span className="text-ink-faint text-[11px] tracking-[0.12em] uppercase">INDEX: 3 FEATURED · 7 SECONDARY</span>
            <Link href="/work" className="text-signal-red font-bold hover:underline underline-offset-4 text-[13px] decoration-signal-red/30">
              ALL CASE STUDIES →
            </Link>
          </div>
        </motion.div>

        {/* Main Asymmetric Interaction Grid — editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 md:pt-10">
          {/* Left Column: Interactive Project Index List */}
          <div className="lg:col-span-5 space-y-0 divide-y divide-line-subtle border-y border-line-subtle">
            {displayedProjects.map((project, idx) => {
              const isActive = project.slug === activeProject.slug;

              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
                  onMouseEnter={() => setActiveSlug(project.slug)}
                  onClick={() => setActiveSlug(project.slug)}
                  tabIndex={0}
                  onFocus={() => setActiveSlug(project.slug)}
                  className={`group cursor-pointer py-5 px-4 md:px-5 transition-colors duration-300 outline-none relative border-l-[2.5px] ${
                    isActive
                      ? "bg-paper-tint border-l-signal-red"
                      : "bg-paper border-l-transparent hover:bg-paper-tint/40"
                  }`}
                  role="button"
                  aria-pressed={isActive}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-[11px] font-bold tracking-[0.14em] ${
                          isActive ? "text-signal-red" : "text-ink-faint group-hover:text-ink"
                        }`}
                      >
                        {project.num}
                      </span>
                      <h3 className="text-[22px] sm:text-2xl md:text-[26px] font-bold tracking-tight uppercase text-ink leading-none">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-ink-faint tracking-wide">
                      {project.year}
                    </span>
                  </div>

                  <div className="pl-7">
                    <p className="font-mono text-[11px] tracking-[0.10em] text-ink-muted uppercase font-semibold">
                      {project.category}
                    </p>
                    <p className="text-[13.5px] text-ink-muted mt-2.5 line-clamp-2 leading-[1.6] font-sans">
                      {project.summary}
                    </p>

                    {/* Active Action Strip — larger, more air */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-4 mt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-3 font-mono"
                      >
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-paper border border-line text-ink text-[11px] tracking-wide"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work/${project.slug}`}
                          className="text-signal-red font-bold hover:underline underline-offset-4 text-[12px] inline-flex items-center gap-1"
                        >
                          FULL CASE STUDY →
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High-End Art Preview Installation */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="lg:sticky lg:top-24 space-y-5">
              {/* Header Callout for Active Art Installation */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-3 pb-3 border-b border-line/60">
                <div>
                  <span className="meta-mono-sm">VISUAL METAPHOR // {activeProject.num}</span>
                  <h4 className="text-lg md:text-xl font-bold tracking-tight text-ink uppercase mt-1">
                    {activeProject.heroStatement}
                  </h4>
                </div>

                {activeProject.achievement && (
                  <div className="flex items-center gap-2 font-mono text-[11px] text-signal-red font-bold shrink-0 tracking-wide border border-signal-red/15 px-2 py-1 bg-signal-red/[0.04]">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse" />
                    <span>{activeProject.achievement.rank}</span>
                  </div>
                )}
              </div>

              {/* The Dynamic Art Installation with editorial frame */}
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                className="art-frame bg-paper"
              >
                <ProjectVisualArt slug={activeProject.slug} />
              </motion.div>
              <p className="font-mono text-[11px] text-ink-muted tracking-wide text-right -mt-1">
                FIG. {activeProject.num} — {activeProject.visualMetaphor.slice(0, 82)}…
              </p>

              {/* Bottom Interaction & Links Bar — editorial, not tinted slab */}
              <div className="p-4 md:p-5 bg-paper border border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="meta-mono-sm block">RESPONSIBILITY</span>
                  <span className="font-mono text-[13px] font-semibold text-ink mt-1 block">
                    {activeProject.role}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {activeProject.links.slice(0, 2).map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 font-mono text-[11px] border border-line hover:border-ink bg-paper text-ink transition-all tracking-wide"
                    >
                      {link.label} ↗
                    </a>
                  ))}

                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="px-4 py-2 font-mono text-[11px] bg-ink text-paper hover:bg-signal-red transition-colors font-bold uppercase tracking-[0.08em]"
                  >
                    DEEP CASE STUDY →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
