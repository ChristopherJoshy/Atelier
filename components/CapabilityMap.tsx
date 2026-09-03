"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CAPABILITY_MAP, SkillCapability } from "@/lib/skills";

export function CapabilityMap() {
  const [activeSkill, setActiveSkill] = useState<SkillCapability>(CAPABILITY_MAP[0]);

  const categories = Array.from(new Set(CAPABILITY_MAP.map((s) => s.category)));

  return (
    <section
      className="py-16 md:py-24 border-b border-line bg-paper relative"
      aria-label="Typographic Capability Map"
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
          <div className="md:col-span-4">
            <span className="meta-mono-sm block">INDEX 03 // SYSTEMS CAPABILITY</span>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-2 leading-[0.9]">
              CAPABILITY MAP
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-md leading-[1.6]">
              16 grounded competencies mapped directly to auditable repository evidence — never abstract buzzword pillars.
            </p>
          </div>
          <div className="md:col-span-3 flex md:flex-col md:items-end justify-between gap-2 font-mono text-xs text-ink-muted">
            <span className="text-ink-faint text-[11px] tracking-[0.12em] uppercase">EVIDENCE ARCHITECTURE</span>
            <span className="text-ink font-bold text-[13px]">16 VERIFIED DOMAINS</span>
            <span className="text-signal-red font-semibold text-[11px] tracking-wide">HOVER OR TAP TO AUDIT</span>
          </div>
        </motion.div>

        {/* Main Interactive Typographic Field */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 md:pt-10">
          {/* Left Side: Category Blocks */}
          <div className="lg:col-span-7 space-y-6">
            {categories.map((category, catIdx) => {
              const skillsInCat = CAPABILITY_MAP.filter((s) => s.category === category);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.06 }}
                  className="space-y-3 border-b border-line/60 pb-6 last:border-0"
                >
                  <span className="meta-mono-sm block">CATEGORY // {category.toUpperCase()}</span>

                  <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 pt-1">
                    {skillsInCat.map((skill) => {
                      const isSelected = skill.name === activeSkill.name;

                      return (
                        <button
                          key={skill.name}
                          onClick={() => setActiveSkill(skill)}
                          onMouseEnter={() => setActiveSkill(skill)}
                          className={`text-[20px] sm:text-2xl md:text-[26px] lg:text-3xl font-bold tracking-tight uppercase transition-all duration-200 py-1 text-left leading-none focus-visible:outline-none ${
                            isSelected
                              ? "text-signal-red underline decoration-signal-red decoration-2 underline-offset-[6px]"
                              : "text-ink hover:text-signal-red focus-visible:text-signal-red focus-visible:underline focus-visible:decoration-signal-red focus-visible:decoration-2 focus-visible:underline-offset-[6px]"
                          }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Active Capability Evidence Inspector */}
          <div className="lg:col-span-5">
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:sticky lg:top-24 card-editorial p-6 md:p-7 space-y-6"
            >
              <div className="flex justify-between items-baseline gap-3 border-b border-line/60 pb-4">
                <div>
                  <span className="meta-mono-sm block">ACTIVE CAPABILITY AUDIT</span>
                  <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight text-ink uppercase mt-1 leading-none">
                    {activeSkill.name}
                  </h3>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 bg-paper border border-line text-signal-red font-bold tracking-wide shrink-0">
                  {activeSkill.status}
                </span>
              </div>

              <div className="space-y-4">
                <span className="meta-mono-sm block">VERIFIED PROJECT IMPLEMENTATIONS ({activeSkill.projects.length})</span>

                <div className="space-y-3">
                  {activeSkill.projects.map((proj) => (
                    <div key={proj.slug} className="p-3.5 bg-paper border border-line hover:border-ink/20 transition-colors">
                      <div className="flex justify-between items-baseline gap-3 mb-1">
                        <h4 className="font-bold text-[13px] text-ink uppercase tracking-tight">{proj.title}</h4>
                        <Link href={`/work/${proj.slug}`} className="font-mono text-[11px] text-signal-red hover:underline underline-offset-4 shrink-0">
                          AUDIT →
                        </Link>
                      </div>
                      <p className="text-[13px] text-ink-muted font-sans leading-[1.6]">{proj.evidence}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex justify-between items-center font-mono text-[11px] text-ink-muted tracking-wide">
                <span className="uppercase">TRUTH CONSTRAINT: ZERO FABRICATION</span>
                <span className="text-ink font-semibold">CODEBASE GROUNDED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
