import { Metadata } from "next";
import Link from "next/link";
import { NOTES } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Engineering Field Notes — Christopher Joshy",
  description: "Short technical dispatches and architectural observations on sensor invariants, RL reward shaping, and clinical MCP tools.",
};

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad">
        {/* Top Monograph Banner */}
        <div className="border-b border-line pb-8 md:pb-10 mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">INDEX / 06 // TECHNICAL DISPATCHES</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">FIELD NOTES</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                Concise architectural observations, lessons learned from hackathon trenches, and systems analysis.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">DISPATCH FREQUENCY: PERIODIC</p>
              <p className="text-signal-red font-bold">WRITTEN FOR BUILDERS</p>
            </div>
          </div>
        </div>

        {/* Field Notes Articles — more breathing */}
        <div className="space-y-10 md:space-y-12 max-w-4xl">
          {NOTES.map((note) => (
            <article
              key={note.slug}
              className="card-editorial p-6 md:p-9 lg:p-10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-3 border-b border-line pb-4 font-mono text-[12px] text-ink-muted">
                <div className="flex items-center gap-3">
                  <span className="text-signal-red font-bold tracking-wide">{note.date}</span>
                  <span className="text-ink-faint">/</span>
                  <span className="tracking-wide">{note.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-paper border border-line text-ink text-[11px] tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[22px] sm:text-[26px] md:text-3xl font-bold uppercase text-ink tracking-tight leading-tight">
                  {note.title}
                </h2>
                <p className="font-mono text-[12px] text-ink-muted mt-2 tracking-wide">{note.subtitle}</p>
              </div>

              <div className="space-y-4 font-sans text-[14px] md:text-[15px] text-ink-muted leading-[1.7]">
                {note.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-line font-mono text-[11px] text-ink-faint tracking-[0.08em] uppercase">
                <span>CHRISTOPHER JOSHY // ARCHIVAL DISPATCH</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
