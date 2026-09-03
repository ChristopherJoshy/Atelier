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
    <div className="min-h-screen bg-paper text-ink pt-24 pb-20 px-6 md:px-12">
      {/* Top Editorial Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">INDEX / 01 // SELECTED WORK</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              PRIMARY SYSTEMS
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              Curated deep case studies across deterministic safety layers, competitive reinforcement learning,
              distributed local runtimes, and verified open-source infrastructure.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>EPOCH: 2025 — 2026</p>
            <p>STANDARD: ZERO SYNTHETIC FABRICATION</p>
            <p className="text-signal-red font-semibold">ALL CASE STUDIES INTERACTIVE</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs uppercase px-3 py-1.5 border transition-all ${
                filter === cat
                  ? "bg-ink text-paper border-ink font-bold"
                  : "bg-paper text-ink-muted border-ink/15 hover:border-ink"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>
      </div>

      {/* Main 12-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Project Roster (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredProjects.map((proj) => {
            const isActive = proj.slug === activeSlug;

            return (
              <div
                key={proj.slug}
                onClick={() => setActiveSlug(proj.slug)}
                onMouseEnter={() => setActiveSlug(proj.slug)}
                className={`p-5 border transition-all cursor-pointer relative ${
                  isActive
                    ? "bg-paper-tint border-ink shadow-sm"
                    : "bg-paper border-ink/15 hover:border-ink/40"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-signal-red" />
                )}

                <div className="flex justify-between items-baseline mb-1.5">
                  <div className="flex items-baseline gap-3">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-signal-red" : "text-ink-faint"}`}>
                      {proj.num}
                    </span>
                    <h2 className="text-2xl font-bold uppercase text-ink">
                      {proj.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-ink-faint">{proj.year}</span>
                </div>

                <div className="pl-7 space-y-2">
                  <span className="meta-mono-sm text-ink-muted block font-semibold">
                    {proj.category}
                  </span>
                  <p className="text-xs text-ink-muted font-sans leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between font-mono text-[0.65rem]">
                    <span className="text-ink-faint">ROLE: {proj.role}</span>
                    <Link
                      href={`/work/${proj.slug}`}
                      className="text-signal-red font-bold hover:underline"
                    >
                      READ CASE STUDY →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Vector Art & Case Study Portal (7 Cols - Sticky) */}
        <div className="lg:col-span-7">
          <div className="sticky top-24 space-y-6">
            <div className="border-b border-ink/10 pb-3 flex justify-between items-baseline">
              <div>
                <span className="meta-mono-sm text-ink-faint">ACTIVE EXHIBIT // {activeProject.num}</span>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-ink mt-0.5">
                  {activeProject.heroStatement}
                </h3>
              </div>
              <Link
                href={`/work/${activeProject.slug}`}
                className="font-mono text-xs px-3 py-1.5 bg-signal-red text-white font-bold hover:bg-black transition-colors uppercase"
              >
                ENTER CASE STUDY →
              </Link>
            </div>

            {/* Vector Art Preview */}
            <ProjectVisualArt slug={activeProject.slug} />

            {/* Technical Detail Card */}
            <div className="p-6 bg-paper-tint border border-ink/15 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="meta-mono-sm text-ink-faint block">CORE PROBLEM</span>
                  <p className="font-sans text-ink-muted mt-1 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>
                <div>
                  <span className="meta-mono-sm text-ink-faint block">PHYSICAL INSIGHT</span>
                  <p className="font-sans text-ink-muted mt-1 leading-relaxed">
                    {activeProject.insight}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 font-mono text-[0.65rem]">
                  {activeProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-paper border border-ink/15 text-ink">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  {activeProject.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-signal-red underline"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
