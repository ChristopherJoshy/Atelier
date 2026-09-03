"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EXPERIMENTS } from "@/lib/experiments";

export function ExperimentsSpotlight() {
  const spotlightExperiments = EXPERIMENTS.slice(0, 3);

  return (
    <section
      id="experiments"
      className="py-16 md:py-24 border-b border-line bg-paper relative"
      aria-label="Engineering Research Notebook Spotlight"
    >
      <div className="container-editorial section-pad">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 md:pb-10 border-b border-line"
        >
          <div className="md:col-span-5">
            <span className="meta-mono-sm block">STAGE 03 // RESEARCH NOTEBOOK</span>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-2 leading-[0.9]">
              ENGINEERING NOTEBOOK
            </h2>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-md leading-[1.6]">
              Hypothesis-driven log: empirical tests, instructive failures, and repeatable observations preserved transparently.
            </p>
          </div>

          <div className="md:col-span-3 flex md:flex-col md:items-end justify-between gap-2 font-mono text-xs text-ink-muted">
            <span className="text-ink-faint text-[11px] tracking-[0.12em] uppercase">METHODOLOGY</span>
            <span className="text-ink font-bold text-[12px] tracking-wide">HYPOTHESIS ➔ BENCHMARK</span>
            <Link href="/experiments" className="text-signal-red font-bold hover:underline underline-offset-4 text-[13px] mt-1">
              VIEW FULL NOTEBOOK →
            </Link>
          </div>
        </motion.div>

        {/* Experiments Grid — editorial, not dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 pt-8 md:pt-10">
          {spotlightExperiments.map((exp, idx) => {
            const isFailed = exp.result === "FAILED";
            const isPartial = exp.result === "PARTIAL";
            const isSuccess = exp.result === "SUCCESS";

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="card-editorial p-6 md:p-7 flex flex-col justify-between overflow-hidden group"
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-baseline border-b border-line/60 pb-3.5 font-mono text-xs">
                    <div className="flex items-baseline gap-2">
                      <span className="text-signal-red font-bold text-[13px]">{exp.num}</span>
                      <span className="text-ink-faint">/</span>
                      <span className="text-ink font-semibold uppercase tracking-wide text-[11px]">{exp.domain}</span>
                    </div>
                    <span
                      className={`px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] border ${
                        isSuccess
                          ? "bg-ink text-paper border-ink"
                          : isPartial
                          ? "bg-signal-red text-white border-signal-red"
                          : "bg-paper border-line text-ink"
                      }`}
                    >
                      {exp.result}
                    </span>
                  </div>

                  <h3 className="text-[18px] md:text-[20px] font-bold uppercase text-ink leading-[1.15] tracking-tight">
                    {exp.title}
                  </h3>

                  <div className="space-y-4 font-sans text-[13.5px] text-ink-muted">
                    <div>
                      <span className="meta-mono-sm block font-semibold opacity-80">[01 // HYPOTHESIS]</span>
                      <p className="mt-1.5 leading-[1.6] line-clamp-3">{exp.hypothesis}</p>
                    </div>

                    <div>
                      <span className="meta-mono-sm block font-semibold opacity-80">[02 // OBSERVATION]</span>
                      <p className="mt-1.5 leading-[1.6] line-clamp-3">{exp.observation}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Metrics Bar — larger, breathing */}
                <div className="pt-4 mt-6 border-t border-line/60 font-mono flex flex-col gap-2">
                  {exp.metrics?.slice(0, 2).map((m) => (
                    <div key={m.label} className="flex justify-between items-baseline gap-3 text-[12px]">
                      <span className="text-ink-faint tracking-wide uppercase text-[11px]">{m.label}</span>
                      <span className="text-ink font-bold text-right">{m.value}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
