import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Direct Channels — Christopher Joshy",
  description: "Direct communications with Christopher Joshy. Systems, AI, security, and open source collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-paper pt-24 pb-10 md:pb-12 selection:bg-paper selection:text-ink flex flex-col justify-between">
      <div className="container-editorial section-pad flex-1 flex flex-col">
        {/* Top Monograph Status */}
        <div className="border-b border-paper/10 pb-8 md:pb-10 mb-8 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm text-paper/40 block mb-2">INDEX / 07 // DIRECT DISPATCH</span>
              <h1 className="display-title tracking-tighter uppercase text-paper">TRANSMISSION</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-paper/60 max-w-xl mt-3 leading-[1.6]">
                Reach out directly for technical architecture, reinforcement learning competitions, safety sensor fusion
                builds, or open-source institutional leadership.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-paper/50 space-y-1.5">
              <p className="tracking-wide">PGP / AUTHENTIC CHANNELS ONLY</p>
              <p className="text-signal-red font-bold">KERALA, INDIA [09°58′N 76°31′E]</p>
            </div>
          </div>
        </div>

        {/* Main Dramatic Typographic Directive */}
        <div className="my-auto py-6 md:py-10 max-w-5xl">
          <div className="relative mb-6">
            <div className="h-[1px] bg-signal-red w-full" />
            <span className="absolute right-0 -top-3 bg-ink px-3 font-mono text-[11px] text-signal-red tracking-[0.16em] uppercase font-semibold leading-none py-1">
              DIRECT CHANNEL
            </span>
          </div>

          <h2 className="display-monumental text-paper leading-[0.86] tracking-tighter select-none">BUILD <br />SOMETHING.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 pt-10 md:pt-12 border-t border-paper/10 mt-8 md:mt-10">
            {[
              { n: "01 // ELECTRONIC MAIL", href: "mailto:christopherjoshy4@gmail.com", label: "christopherjoshy4@gmail.com ↗", desc: "Primary correspondence channel for research, job opportunities, and speaking." },
              { n: "02 // SOURCE REPOSITORIES", href: "https://github.com/ChristopherJoshy", label: "github.com/ChristopherJoshy ↗", desc: "Full public repository catalogue, commit histories, and open-source contributions." },
              { n: "03 // PROFESSIONAL LEDGER", href: "https://www.linkedin.com/in/christopher-joshy-272a77290/", label: "linkedin/in/christopher-joshy ↗", desc: "Institutional network, hackathon awards, and peer technical engagements." },
            ].map((c) => (
              <div key={c.n} className="p-6 bg-[#141414] border border-paper/10 hover:border-paper/20 transition-colors group">
                <span className="meta-mono-sm text-paper/40 block mb-3">{c.n}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[15px] sm:text-[16px] font-mono font-bold text-paper group-hover:text-signal-red transition-colors block break-all leading-tight"
                >
                  {c.label}
                </a>
                <p className="text-[13px] text-paper/50 font-sans mt-3 leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Monograph Footer */}
        <div className="pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[11px] tracking-wide text-paper/40">
          <div>
            <span>© 2026 CHRISTOPHER JOSHY · COMPUTER ENGINEER</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-paper transition-colors hover:underline underline-offset-4">
              ← RETURN TO HOMEPAGE
            </Link>
            <Link href="/archive" className="hover:text-paper transition-colors hover:underline underline-offset-4">
              SYSTEMS ARCHIVE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
