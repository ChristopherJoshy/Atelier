import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Direct Channels — Christopher Joshy",
  description: "Direct communications with Christopher Joshy. Systems, AI, security, and open source collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-paper pt-24 pb-24 px-6 md:px-12 selection:bg-paper selection:text-ink flex flex-col justify-between">
      {/* Top Monograph Status */}
      <div className="border-b border-paper/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-paper/40 block mb-2">INDEX / 07 // DIRECT DISPATCH</span>
            <h1 className="display-title tracking-tighter uppercase text-paper">
              TRANSMISSION
            </h1>
            <p className="font-sans text-sm md:text-base text-paper/60 max-w-xl mt-3 leading-relaxed">
              Reach out directly for technical architecture, reinforcement learning competitions,
              safety sensor fusion builds, or open-source institutional leadership.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-paper/50 space-y-1">
            <p>PGP / AUTHENTIC CHANNELS ONLY</p>
            <p className="text-signal-red font-bold">KERALA, INDIA [09°58&apos;N 76°31&apos;E]</p>
          </div>
        </div>
      </div>

      {/* Main Dramatic Typographic Directive */}
      <div className="my-auto py-12 max-w-5xl">
        <div className="relative mb-6">
          <div className="h-[1px] bg-signal-red w-full" />
          <span className="absolute right-0 -top-3 bg-ink px-2 font-mono text-[0.62rem] text-signal-red tracking-widest uppercase font-semibold">
            DIRECT CHANNEL
          </span>
        </div>

        <h2 className="display-monumental text-paper leading-[0.86] tracking-tighter select-none">
          BUILD <br />
          SOMETHING.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-paper/15 mt-10">
          <div className="p-6 bg-dark-surface border border-paper/10 hover:border-paper/30 transition-colors">
            <span className="meta-mono-sm text-paper/40 block mb-2">01 // ELECTRONIC MAIL</span>
            <a
              href="mailto:christopherjoshy4@gmail.com"
              className="text-base sm:text-lg font-mono font-bold text-paper hover:text-signal-red transition-colors block break-all"
            >
              christopherjoshy4@gmail.com ↗
            </a>
            <p className="text-xs text-paper/50 font-sans mt-2">
              Primary correspondence channel for research, job opportunities, and speaking.
            </p>
          </div>

          <div className="p-6 bg-dark-surface border border-paper/10 hover:border-paper/30 transition-colors">
            <span className="meta-mono-sm text-paper/40 block mb-2">02 // SOURCE REPOSITORIES</span>
            <a
              href="https://github.com/ChristopherJoshy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-mono font-bold text-paper hover:text-signal-red transition-colors block"
            >
              github.com/ChristopherJoshy ↗
            </a>
            <p className="text-xs text-paper/50 font-sans mt-2">
              Full public repository catalogue, commit histories, and open-source contributions.
            </p>
          </div>

          <div className="p-6 bg-dark-surface border border-paper/10 hover:border-paper/30 transition-colors">
            <span className="meta-mono-sm text-paper/40 block mb-2">03 // PROFESSIONAL LEDGER</span>
            <a
              href="https://www.linkedin.com/in/christopher-joshy-272a77290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-mono font-bold text-paper hover:text-signal-red transition-colors block"
            >
              linkedin/in/christopher-joshy ↗
            </a>
            <p className="text-xs text-paper/50 font-sans mt-2">
              Institutional network, hackathon awards, and peer technical engagements.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Monograph Footer */}
      <div className="pt-12 border-t border-paper/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-paper/40">
        <div>
          <span>© 2026 CHRISTOPHER JOSHY · COMPUTER ENGINEER</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-paper transition-colors">
            ← RETURN TO HOMEPAGE
          </Link>
          <Link href="/archive" className="hover:text-paper transition-colors">
            SYSTEMS ARCHIVE
          </Link>
        </div>
      </div>
    </div>
  );
}
