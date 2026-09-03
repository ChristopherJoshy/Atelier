import { Metadata } from "next";
import Link from "next/link";
import { NOTES } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Engineering Field Notes — Christopher Joshy",
  description: "Short technical dispatches and architectural observations on sensor invariants, RL reward shaping, and clinical MCP tools.",
};

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">INDEX / 06 // TECHNICAL DISPATCHES</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              FIELD NOTES
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              Concise architectural observations, lessons learned from hackathon trenches, and systems analysis.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>DISPATCH FREQUENCY: PERIODIC</p>
            <p className="text-signal-red font-bold">WRITTEN FOR BUILDERS</p>
          </div>
        </div>
      </div>

      {/* Field Notes Articles */}
      <div className="space-y-16 max-w-4xl">
        {NOTES.map((note) => (
          <article
            key={note.slug}
            className="p-8 md:p-10 bg-paper-tint border border-ink/20 space-y-6 hover:border-ink transition-colors"
          >
            <div className="flex justify-between items-baseline border-b border-ink/10 pb-4 font-mono text-xs text-ink-muted">
              <div className="flex items-center gap-3">
                <span className="text-signal-red font-bold">{note.date}</span>
                <span className="text-ink-faint">/</span>
                <span>{note.readTime}</span>
              </div>
              <div className="flex gap-2">
                {note.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-paper border border-ink/15 text-ink text-[0.65rem]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight">
                {note.title}
              </h2>
              <p className="font-mono text-xs text-ink-muted mt-1">
                {note.subtitle}
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm md:text-base text-ink-muted leading-relaxed">
              {note.content.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-ink/10 font-mono text-xs text-ink-faint">
              <span>CHRISTOPHER JOSHY // ARCHIVAL DISPATCH</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
