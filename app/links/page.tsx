import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links & Direct Endpoints — Christopher Joshy",
  description: "Verified public links, repositories, and direct channels for Christopher Joshy.",
};

const LINKS = [
  { label: "Portfolio Homepage", href: "/", desc: "Editorial Poster & Systems Showcase", internal: true },
  { label: "Selected Work & Case Studies", href: "/work", desc: "Anchor, CHADMAN, Sahayi, VoiceShield", internal: true },
  { label: "GitHub Profile", href: "https://github.com/ChristopherJoshy", desc: "Source code, 17+ repositories, open source", internal: false },
  { label: "LinkedIn Network", href: "https://www.linkedin.com/in/christopher-joshy-272a77290/", desc: "Professional credentials & hackathons", internal: false },
  { label: "ghost-deps (npm package)", href: "https://www.npmjs.com/package/ghost-deps", desc: "Detect AI-hallucinated packages (v0.1.5)", internal: false },
  { label: "Typelo Competitive Platform", href: "https://www.typelo.tech/", desc: "Live 1v1 WebSocket typing arena", internal: false },
  { label: "Nexus Wars Arena", href: "https://nexuswars2026.vercel.app/", desc: "AI competitive programming platform", internal: false },
  { label: "Email Direct", href: "mailto:christopherjoshy4@gmail.com", desc: "christopherjoshy4@gmail.com", internal: false },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-10 md:pb-12 selection:bg-black selection:text-paper flex flex-col justify-between">
      <div className="container-editorial section-pad flex-1">
        <div className="max-w-2xl mx-auto w-full">
          {/* Top Header */}
          <div className="border-b border-line pb-6 md:pb-8 mb-8 text-center sm:text-left">
            <span className="meta-mono-sm block mb-2">PAGE // DIRECT LINKS</span>
            <h1 className="text-[28px] sm:text-4xl font-bold tracking-tight uppercase text-ink">CHRISTOPHER JOSHY</h1>
            <p className="font-mono text-[11px] text-signal-red font-semibold uppercase mt-2 tracking-[0.10em]">COMPUTER ENGINEER · KERALA, INDIA · NEXUS TECH LEAD</p>
          </div>

          {/* Links List — breathing, editorial hover */}
          <div className="space-y-3">
            {LINKS.map((link) => (
              <div key={link.label}>
                {link.internal ? (
                  <Link
                    href={link.href}
                    className="card-editorial p-4 md:p-5 flex items-center justify-between group block"
                  >
                    <div>
                      <h2 className="font-bold text-[14px] sm:text-[15px] text-ink uppercase group-hover:text-signal-red transition-colors tracking-tight">{link.label}</h2>
                      <p className="text-[13px] text-ink-muted font-sans mt-1">{link.desc}</p>
                    </div>
                    <span className="text-ink-faint group-hover:text-signal-red transition-colors font-mono text-xs ml-4 shrink-0">→</span>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-editorial p-4 md:p-5 flex items-center justify-between group block"
                  >
                    <div>
                      <h2 className="font-bold text-[14px] sm:text-[15px] text-ink uppercase group-hover:text-signal-red transition-colors tracking-tight">{link.label}</h2>
                      <p className="text-[13px] text-ink-muted font-sans mt-1">{link.desc}</p>
                    </div>
                    <span className="text-ink-faint group-hover:text-signal-red transition-colors font-mono text-xs ml-4 shrink-0">↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-10 text-center font-mono text-[11px] tracking-wide text-ink-faint container-editorial section-pad">
        <span>09°58′N 76°31′E // ALL CHANNELS VERIFIED</span>
      </div>
    </div>
  );
}
