import { Metadata } from "next";
import Link from "next/link";
import { EXPERIMENTS } from "@/lib/experiments";

export const metadata: Metadata = {
  title: "Experiments & Research Notebook — Christopher Joshy",
  description: "Empirical engineering log documenting reinforcement learning hypotheses, sensor invariants, and systems experiments.",
};

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad">
        {/* Top Engineering Notebook Monograph Banner */}
        <div className="border-b border-line pb-8 md:pb-10 mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">INDEX / 03 // RESEARCH NOTEBOOK</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">ENGINEERING NOTEBOOK</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                Empirical hypotheses, test fixtures, reward hacking failures, and mathematical optimizations. Real engineering includes experiments that failed and prompted superior architectures.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">METHOD: HYPOTHESIS ➔ BENCHMARK ➔ OBSERVATION</p>
              <p className="text-signal-red font-bold">FAILURES DOCUMENTED TRANSPARENTLY</p>
            </div>
          </div>
        </div>

        {/* Engineering Experiment Log Entries — more air */}
        <div className="space-y-8 md:space-y-10">
          {EXPERIMENTS.map((exp) => {
            const isFailed = exp.result === "FAILED";
            const isSuccess = exp.result === "SUCCESS";

            return (
              <article
                key={exp.id}
                className="card-editorial p-6 md:p-9 lg:p-10 font-mono overflow-hidden"
              >
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-3 border-b border-line pb-4 text-[12px]">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <span className="text-signal-red font-bold text-[13px]">{exp.num}</span>
                    <span className="text-ink-faint">/</span>
                    <span className="font-semibold text-ink uppercase tracking-wide text-[11px]">{exp.domain}</span>
                    <span className="text-ink-faint">/</span>
                    <span className="text-ink-muted text-[11px]">{exp.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-ink-faint text-[11px] tracking-wide uppercase">VERDICT:</span>
                    <span
                      className={`px-2.5 py-1 font-bold uppercase text-[11px] tracking-[0.08em] border ${
                        isFailed
                          ? "bg-signal-red text-white border-signal-red"
                          : isSuccess
                          ? "bg-ink text-paper border-ink"
                          : "bg-paper border-line text-ink"
                      }`}
                    >
                      {exp.result}
                    </span>
                  </div>
                </div>

                {/* Experiment Title */}
                <div className="pt-5">
                  <h2 className="text-[20px] sm:text-2xl font-bold uppercase text-ink font-sans tracking-tight leading-tight">
                    {exp.title}
                  </h2>
                </div>

                {/* Structured Scientific Notebook Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 text-[13.5px] font-sans">
                  <div className="space-y-4">
                    <div className="p-4 md:p-5 bg-paper border border-line">
                      <span className="meta-mono-sm block mb-2"> [01 // HYPOTHESIS]</span>
                      <p className="text-ink leading-[1.6]">{exp.hypothesis}</p>
                    </div>

                    <div className="p-4 md:p-5 bg-paper border border-line">
                      <span className="meta-mono-sm block mb-2"> [02 // TEST FIXTURE &amp; METHOD]</span>
                      <p className="text-ink-muted leading-[1.6]">{exp.method}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className={`p-4 md:p-5 border ${isFailed ? "bg-signal-red/[0.06] border-signal-red/20" : "bg-paper border-line"}`}>
                      <span className={`meta-mono-sm block mb-2 ${isFailed ? "text-signal-red font-bold" : ""}`}>[03 // EMPIRICAL OBSERVATION]</span>
                      <p className="text-ink leading-[1.6]">{exp.observation}</p>
                    </div>

                    <div className="p-4 md:p-5 bg-paper border border-line">
                      <span className="meta-mono-sm block mb-2">[04 // NEXT ITERATION / ARCHITECTURAL FIX]</span>
                      <p className="text-ink-muted leading-[1.6]">{exp.nextStep}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Metrics & Project Link */}
                <div className="pt-5 mt-6 border-t border-line flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono">
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    {exp.metrics?.map((m) => (
                      <div key={m.label} className="flex items-center gap-2">
                        <span className="text-ink-faint text-[11px] tracking-wide uppercase">{m.label}:</span>
                        <strong className="text-ink font-semibold">{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  {exp.repoSlug && (
                    <Link href={`/work/${exp.repoSlug}`} className="text-signal-red font-bold hover:underline underline-offset-4">
                      INSPECT REPOSITORY CASE STUDY →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
