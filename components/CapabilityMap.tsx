"use client";

import { useState } from "react";
import Link from "next/link";
import { CAPABILITY_MAP, SkillCapability } from "@/lib/skills";

export function CapabilityMap() {
  const [activeSkill, setActiveSkill] = useState<SkillCapability>(CAPABILITY_MAP[0]);

  // Group capabilities by category
  const categories = Array.from(new Set(CAPABILITY_MAP.map((s) => s.category)));

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/15 bg-paper relative"
      aria-label="Typographic Capability Map"
    >
      {/* Section Monograph Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-ink/15">
        <div className="md:col-span-4">
          <span className="meta-mono-sm block text-ink-faint">INDEX 03 // SYSTEMS CAPABILITY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-1">
            CAPABILITY MAP
          </h2>
        </div>
        <div className="md:col-span-5 flex items-end">
          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            No synthetic percentage progress bars. Every skill is grounded in production repositories,
            deployed services, and competition-tested code.
          </p>
        </div>
        <div className="md:col-span-3 flex md:flex-col md:items-end justify-between font-mono text-xs text-ink-muted">
          <span className="text-ink-faint">EVIDENCE ARCHITECTURE</span>
          <span className="text-ink font-bold">16 VERIFIED DOMAINS</span>
          <span className="text-signal-red font-semibold">HOVER OR TAP TO AUDIT</span>
        </div>
      </div>

      {/* Main Interactive Typographic Field */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
        {/* Left Side: Category Blocks with Massive Typographic Labels (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          {categories.map((category) => {
            const skillsInCat = CAPABILITY_MAP.filter((s) => s.category === category);

            return (
              <div key={category} className="space-y-2 border-b border-ink/10 pb-6">
                <span className="meta-mono-sm text-ink-faint block">
                  CATEGORY // {category.toUpperCase()}
                </span>

                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                  {skillsInCat.map((skill) => {
                    const isSelected = skill.name === activeSkill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => setActiveSkill(skill)}
                        onMouseEnter={() => setActiveSkill(skill)}
                        className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase transition-all duration-150 py-0.5 text-left ${
                          isSelected
                            ? "text-signal-red underline decoration-signal-red underline-offset-4 scale-105"
                            : "text-ink hover:text-signal-red"
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Active Capability Evidence Inspector (5 Cols - Sticky) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 p-6 md:p-8 bg-paper-tint border border-ink/20 space-y-6">
            <div className="flex justify-between items-baseline border-b border-ink/10 pb-4">
              <div>
                <span className="meta-mono-sm text-ink-faint block">ACTIVE CAPABILITY AUDIT</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ink uppercase mt-0.5">
                  {activeSkill.name}
                </h3>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 bg-paper border border-ink/15 text-signal-red font-bold">
                {activeSkill.status}
              </span>
            </div>

            <div className="space-y-4">
              <span className="meta-mono-sm text-ink-faint block">
                VERIFIED PROJECT IMPLEMENTATIONS ({activeSkill.projects.length})
              </span>

              <div className="space-y-3">
                {activeSkill.projects.map((proj) => (
                  <div
                    key={proj.slug}
                    className="p-3 bg-paper border border-ink/10 hover:border-ink/30 transition-colors"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-sm text-ink uppercase">
                        {proj.title}
                      </h4>
                      <Link
                        href={`/work/${proj.slug}`}
                        className="font-mono text-[0.65rem] text-signal-red hover:underline"
                      >
                        AUDIT →
                      </Link>
                    </div>
                    <p className="text-xs text-ink-muted font-sans leading-relaxed">
                      {proj.evidence}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-ink/10 flex justify-between items-center font-mono text-[0.65rem] text-ink-muted">
              <span>TRUTH CONSTRAINT: ZERO FABRICATION</span>
              <span className="text-ink font-semibold">CODEBASE GROUNDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
