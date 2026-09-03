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
      className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/15 bg-paper relative"
      aria-label="Selected Work Showcase"
    >
      {/* Section Monograph Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-ink/15">
        <div className="md:col-span-5">
          <span className="meta-mono-sm block text-ink-faint">STAGE 02 // VERIFIED SYSTEMS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-1">
            SELECTED WORK
          </h2>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => {
                setActiveTier("featured");
                setActiveSlug(featuredProjects[0].slug);
              }}
              className={`font-mono text-xs uppercase px-3 py-1 border transition-all ${
                activeTier === "featured"
                  ? "bg-ink text-paper border-ink font-bold"
                  : "bg-paper text-ink-muted border-ink/20 hover:border-ink"
              }`}
            >
              [03 FEATURED MONOGRAPHS]
            </button>
            <button
              onClick={() => {
                setActiveTier("secondary");
                setActiveSlug(secondaryProjects[0]?.slug || "aiva");
              }}
              className={`font-mono text-xs uppercase px-3 py-1 border transition-all ${
                activeTier === "secondary"
                  ? "bg-ink text-paper border-ink font-bold"
                  : "bg-paper text-ink-muted border-ink/20 hover:border-ink"
              }`}
            >
              [SECONDARY ARCHITECTURES]
            </button>
          </div>
        </div>

        <div className="md:col-span-4 flex items-end">
          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            Curated engineering records across hardware sensor invariants, vectorized reinforcement learning,
            and software supply-chain defenses. Every system is backed by public source code or verified medals.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-1.5 font-mono text-xs text-ink-muted">
          <span className="text-ink-faint text-[0.65rem]">INDEX: 3 FEATURED · 7 SECONDARY</span>
          <Link
            href="/work"
            className="text-signal-red font-bold hover:underline"
          >
            ALL CASE STUDIES →
          </Link>
        </div>
      </div>

      {/* Main Asymmetric Interaction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10">
        {/* Left Column: Interactive Project Index List (5 Cols) */}
        <div className="lg:col-span-5 space-y-2">
          {displayedProjects.map((project) => {
            const isActive = project.slug === activeProject.slug;

            return (
              <div
                key={project.slug}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onClick={() => setActiveSlug(project.slug)}
                tabIndex={0}
                onFocus={() => setActiveSlug(project.slug)}
                className={`group cursor-pointer p-4 md:p-6 border transition-all duration-200 outline-none relative ${
                  isActive
                    ? "bg-paper-tint border-ink shadow-sm"
                    : "bg-transparent border-ink/10 hover:border-ink/30 hover:bg-paper-tint/50"
                }`}
                role="button"
                aria-pressed={isActive}
              >
                {/* Active Redline Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeWorkIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-signal-red"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                <div className="flex justify-between items-baseline mb-1">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-mono text-xs font-bold tracking-widest ${
                        isActive ? "text-signal-red" : "text-ink-faint group-hover:text-ink"
                      }`}
                    >
                      {project.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-ink-faint">
                    {project.year}
                  </span>
                </div>

                <div className="pl-7">
                  <p className="font-mono text-[0.68rem] tracking-wider text-ink-muted uppercase font-semibold">
                    {project.category}
                  </p>
                  <p className="text-xs text-ink-muted mt-2 line-clamp-2 leading-relaxed font-sans">
                    {project.summary}
                  </p>

                  {/* Active Action Strip */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3 mt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem]"
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 bg-paper border border-ink/15 text-ink"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/work/${project.slug}`}
                        className="text-signal-red font-bold hover:underline inline-flex items-center gap-1"
                      >
                        FULL CASE STUDY →
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: High-End Art Preview Installation (7 Cols - Sticky) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="sticky top-24 space-y-4">
            {/* Header Callout for Active Art Installation */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 pb-2 border-b border-ink/10">
              <div>
                <span className="meta-mono-sm text-ink-faint">VISUAL METAPHOR // {activeProject.num}</span>
                <h4 className="text-lg md:text-xl font-bold tracking-tight text-ink uppercase">
                  {activeProject.heroStatement}
                </h4>
              </div>

              {activeProject.achievement && (
                <div className="flex items-center gap-2 font-mono text-xs text-signal-red font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-red" />
                  <span>{activeProject.achievement.rank}</span>
                </div>
              )}
            </div>

            {/* The Dynamic Art Installation with 520ms Crop Transition */}
            <ProjectVisualArt slug={activeProject.slug} />

            {/* Bottom Interaction & Links Bar */}
            <div className="p-4 bg-paper-tint border border-ink/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="meta-mono-sm block text-ink-faint">RESPONSIBILITY</span>
                <span className="font-mono text-xs font-semibold text-ink">
                  {activeProject.role}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {activeProject.links.slice(0, 2).map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 font-mono text-xs border border-ink/20 hover:border-ink bg-paper text-ink transition-all"
                  >
                    {link.label} ↗
                  </a>
                ))}

                <Link
                  href={`/work/${activeProject.slug}`}
                  className="px-4 py-1.5 font-mono text-xs bg-ink text-paper hover:bg-signal-red transition-colors font-bold uppercase tracking-wider"
                >
                  DEEP CASE STUDY →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
