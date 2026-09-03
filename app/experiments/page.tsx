import { Metadata } from "next";
import Link from "next/link";
import { EXPERIMENTS } from "@/lib/experiments";

export const metadata: Metadata = {
  title: "Experiments & Research Notebook — Christopher Joshy",
  description: "Empirical engineering log documenting reinforcement learning hypotheses, sensor invariants, and systems experiments.",
};

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Engineering Notebook Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">INDEX / 03 // RESEARCH NOTEBOOK</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              ENGINEERING NOTEBOOK
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              Empirical hypotheses, test fixtures, reward hacking failures, and mathematical optimizations.
              Real engineering includes experiments that failed and prompted superior architectures.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>METHOD: HYPOTHESIS ➔ BENCHMARK ➔ OBSERVATION</p>
            <p className="text-signal-red font-bold">FAILURES DOCUMENTED TRANSPARENTLY</p>
          </div>
        </div>
      </div>

      {/* Engineering Experiment Log Entries */}
      <div className="space-y-10">
        {EXPERIMENTS.map((exp) => {
          const isFailed = exp.result === "FAILED";
          const isSuccess = exp.result === "SUCCESS";
          const isConverged = exp.result === "CONVERGED";

          return (
            <article
              key={exp.id}
              className="p-8 md:p-10 bg-paper-tint border border-ink/20 font-mono space-y-6 hover:border-ink transition-colors"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 border-b border-ink/10 pb-4 text-xs">
                <div className="flex items-baseline gap-3">
                  <span className="text-signal-red font-bold">{exp.num}</span>
                  <span className="text-ink-faint">/</span>
                  <span className="font-semibold text-ink uppercase">{exp.domain}</span>
                  <span className="text-ink-faint">/</span>
                  <span className="text-ink-muted">{exp.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-ink-faint">VERDICT:</span>
                  <span
                    className={`px-2 py-0.5 font-bold uppercase text-[0.7rem] ${
                      isFailed
                        ? "bg-signal-red text-white"
                        : isSuccess
                        ? "bg-ink text-paper"
                        : "bg-paper border border-ink/20 text-ink"
                    }`}
                  >
                    {exp.result}
                  </span>
                </div>
              </div>

              {/* Experiment Title */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase text-ink font-sans tracking-tight">
                  {exp.title}
                </h2>
              </div>

              {/* Structured Scientific Notebook Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                {/* Hypothesis & Method */}
                <div className="space-y-4">
                  <div className="p-4 bg-paper border border-ink/10">
                    <span className="meta-mono-sm text-ink-faint block font-mono mb-1">
                      [01 // HYPOTHESIS]
                    </span>
                    <p className="text-ink leading-relaxed">
                      {exp.hypothesis}
                    </p>
                  </div>

                  <div className="p-4 bg-paper border border-ink/10">
                    <span className="meta-mono-sm text-ink-faint block font-mono mb-1">
                      [02 // TEST FIXTURE &amp; METHOD]
                    </span>
                    <p className="text-ink-muted leading-relaxed">
                      {exp.method}
                    </p>
                  </div>
                </div>

                {/* Observation & Learnings */}
                <div className="space-y-4">
                  <div className={`p-4 border ${isFailed ? "bg-signal-red/5 border-signal-red/30" : "bg-paper border-ink/10"}`}>
                    <span className={`meta-mono-sm block font-mono mb-1 ${isFailed ? "text-signal-red font-bold" : "text-ink-faint"}`}>
                      [03 // EMPIRICAL OBSERVATION]
                    </span>
                    <p className="text-ink leading-relaxed">
                      {exp.observation}
                    </p>
                  </div>

                  <div className="p-4 bg-paper border border-ink/10">
                    <span className="meta-mono-sm text-ink-faint block font-mono mb-1">
                      [04 // NEXT ITERATION / ARCHITECTURAL FIX]
                    </span>
                    <p className="text-ink-muted leading-relaxed">
                      {exp.nextStep}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics & Project Link */}
              <div className="pt-4 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex flex-wrap gap-4">
                  {exp.metrics?.map((m) => (
                    <div key={m.label} className="flex items-center gap-2">
                      <span className="text-ink-faint">{m.label}:</span>
                      <strong className="text-ink">{m.value}</strong>
                    </div>
                  ))}
                </div>

                {exp.repoSlug && (
                  <Link
                    href={`/work/${exp.repoSlug}`}
                    className="text-signal-red font-bold hover:underline"
                  >
                    INSPECT REPOSITORY CASE STUDY →
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
