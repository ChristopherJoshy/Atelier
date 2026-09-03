"use client";

import Link from "next/link";
import { EXPERIMENTS } from "@/lib/experiments";

export function ExperimentsSpotlight() {
  // Take the first 3 experiments including Kaggriculture
  const spotlightExperiments = EXPERIMENTS.slice(0, 3);

  return (
    <section
      id="experiments"
      className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/15 bg-paper relative"
      aria-label="Engineering Research Notebook Spotlight"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-ink/15">
        <div className="md:col-span-5">
          <span className="meta-mono-sm block text-ink-faint">STAGE 03 // RESEARCH NOTEBOOK</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-1">
            ENGINEERING NOTEBOOK
          </h2>
        </div>

        <div className="md:col-span-4 flex items-end">
          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            Empirical hypotheses, test fixtures, and mathematical optimizations.
            Real engineering documents failures transparently to build superior architectures.
          </p>
        </div>

        <div className="md:col-span-3 flex md:flex-col md:items-end justify-between font-mono text-xs text-ink-muted">
          <span className="text-ink-faint">METHODOLOGY</span>
          <span className="text-ink font-bold">HYPOTHESIS ➔ BENCHMARK</span>
          <Link
            href="/experiments"
            className="hover:text-signal-red transition-colors underline decoration-ink/20 font-bold"
          >
            ALL EXPERIMENTS →
          </Link>
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
        {spotlightExperiments.map((exp) => {
          const isPartial = exp.result === "PARTIAL";
          const isSuccess = exp.result === "SUCCESS";
          const isFailed = exp.result === "FAILED";

          return (
            <article
              key={exp.id}
              className="p-6 md:p-8 bg-paper-tint border border-ink/15 flex flex-col justify-between space-y-6 hover:border-ink transition-colors"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-ink/10 pb-3 font-mono text-xs">
                  <div className="flex items-baseline gap-2">
                    <span className="text-signal-red font-bold">{exp.num}</span>
                    <span className="text-ink-faint">/</span>
                    <span className="text-ink font-semibold uppercase">{exp.domain}</span>
                  </div>
                  <span
                    className={`px-1.5 py-0.5 text-[0.65rem] font-bold uppercase ${
                      isSuccess
                        ? "bg-ink text-paper"
                        : isPartial
                        ? "bg-signal-red text-white"
                        : "bg-paper border border-ink/20 text-ink"
                    }`}
                  >
                    {exp.result}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold uppercase text-ink leading-snug">
                  {exp.title}
                </h3>

                <div className="space-y-3 font-sans text-xs text-ink-muted">
                  <div>
                    <span className="font-mono text-[0.65rem] text-ink-faint uppercase block font-semibold">
                      [01 // HYPOTHESIS]
                    </span>
                    <p className="mt-0.5 leading-relaxed line-clamp-3">
                      {exp.hypothesis}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[0.65rem] text-ink-faint uppercase block font-semibold">
                      [02 // OBSERVATION]
                    </span>
                    <p className="mt-0.5 leading-relaxed line-clamp-3">
                      {exp.observation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-4 border-t border-ink/10 font-mono text-[0.68rem] flex flex-col gap-1.5">
                {exp.metrics?.slice(0, 2).map((m) => (
                  <div key={m.label} className="flex justify-between items-baseline">
                    <span className="text-ink-faint">{m.label}</span>
                    <span className="text-ink font-bold">{m.value}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
