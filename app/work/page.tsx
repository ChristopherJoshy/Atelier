"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectVisualArt } from "@/components/art/ProjectVisualArt";

export default function WorkPage() {
  const allProjects = getFeaturedProjects();
  const [activeSlug, setActiveSlug] = useState<string>("anchor");
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "AI & RL", "SAFETY & EDGE", "SECURITY & DEFENSE", "SYSTEMS & TOOLS"];

  const filteredProjects = allProjects.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "AI & RL") return p.category.includes("Reinforcement") || p.category.includes("AI");
    if (filter === "SAFETY & EDGE") return p.category.includes("Safety") || p.category.includes("Edge");
    if (filter === "SECURITY & DEFENSE") return p.category.includes("Security") || p.category.includes("Defense");
    if (filter === "SYSTEMS & TOOLS") return p.category.includes("Systems") || p.category.includes("Clinical");
    return true;
  });

  const activeProject = allProjects.find((p) => p.slug === activeSlug) || allProjects[0];

  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24">
      <div className="container-editorial section-pad">
        {/* Top Editorial Monograph Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="border-b border-line pb-8 md:pb-10 mb-10 md:mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">INDEX / 01 // SELECTED WORK</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">PRIMARY SYSTEMS</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                Curated deep case studies across deterministic safety layers, competitive reinforcement learning,
                distributed local runtimes, and verified open-source infrastructure.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">EPOCH: 2025 — 2026</p>
              <p className="tracking-wide">STANDARD: ZERO SYNTHETIC FABRICATION</p>
              <p className="text-signal-red font-bold">ALL CASE STUDIES INTERACTIVE</p>
            </div>
          </div>

          {/* Filter Bar — larger, no AI pill slop */}
          <div className="flex flex-wrap gap-2.5 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-[11px] uppercase px-3.5 py-2 border transition-all tracking-[0.08em] ${
                  filter === cat
                    ? "bg-ink text-paper border-ink font-bold"
                    : "bg-paper text-ink-muted border-line hover:border-ink hover:text-ink"
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Project Roster (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredProjects.map((project, idx) => {
              const isActive = activeSlug === project.slug;
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  onMouseEnter={() => setActiveSlug(project.slug)}
                  onClick={() => setActiveSlug(project.slug)}
                  tabIndex={0}
                  onFocus={() => setActiveSlug(project.slug)}
                  className={`group cursor-pointer p-5 md:p-6 border transition-all duration-300 relative ${
                    isActive ? "bg-paper-tint border-ink" : "bg-transparent border-line hover:border-ink/25 hover:bg-paper-tint/50"
                  }`}
                  role="button"
                  aria-pressed={isActive}
                >
                  {isActive && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal-red" />}
                  <div className="flex justify-between items-baseline mb-1.5">
                    <div className="flex items-baseline gap-3">
                      <span className={`font-mono text-[11px] font-bold tracking-[0.14em] ${isActive ? "text-signal-red" : "text-ink-faint"}`}>{project.num}</span>
                      <h3 className="text-[20px] md:text-[22px] font-bold tracking-tight uppercase text-ink leading-none">{project.title}</h3>
                    </div>
                    <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>
                  </div>
                  <div className="pl-7">
                    <p className="font-mono text-[11px] tracking-[0.10em] text-ink-muted uppercase font-semibold">{project.category}</p>
                    <p className="text-[13.5px] text-ink-muted mt-2 leading-[1.6] font-sans line-clamp-2">{project.summary}</p>
                    {isActive && (
                      <div className="pt-3 mt-3 border-t border-line flex items-center justify-between">
                        <span className="font-mono text-[11px] text-signal-red font-bold">VIEW CASE STUDY →</span>
                        <span className="font-mono text-[11px] text-ink-faint">{project.status}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Live Vector Art & Case Study Portal (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeProject.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:sticky lg:top-24 space-y-5"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-3 pb-3 border-b border-line">
                <div>
                  <span className="meta-mono-sm block">CASE STUDY // {activeProject.num}</span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase text-ink mt-1">{activeProject.heroStatement}</h2>
                </div>
                <span className={`font-mono text-[11px] px-2 py-1 border font-bold tracking-wide ${activeProject.verified ? "bg-signal-red text-white border-signal-red" : "bg-paper border-line text-ink"}`}>
                  {activeProject.verified ? "VERIFIED" : activeProject.status}
                </span>
              </div>

              <div className="p-2 md:p-3 bg-paper-tint border border-line">
                <ProjectVisualArt slug={activeProject.slug} />
              </div>

              <div className="p-5 md:p-6 bg-paper-tint border border-line space-y-4">
                <p className="font-sans text-[14px] md:text-[15px] text-ink-muted leading-[1.65]">{activeProject.summary}</p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href={`/work/${activeProject.slug}`} className="flex-1 py-3 bg-ink text-paper hover:bg-signal-red transition-colors font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-center">
                    READ FULL MONOGRAPH →
                  </Link>
                  {activeProject.links[0] && (
                    <a href={activeProject.links[0].url} target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-line hover:border-ink bg-paper text-ink font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-center">
                      {activeProject.links[0].label} ↗
                    </a>
                  )}
                </div>
                <p className="meta-mono-sm opacity-70">ROLE: {activeProject.role}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
