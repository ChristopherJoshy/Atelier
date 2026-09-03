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
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper flex flex-col justify-between">
      <div className="max-w-2xl mx-auto w-full">
        {/* Top Header */}
        <div className="border-b border-ink/15 pb-6 mb-8 text-center sm:text-left">
          <span className="meta-mono-sm text-ink-faint block mb-1">PAGE // DIRECT LINKS</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-ink">
            CHRISTOPHER JOSHY
          </h1>
          <p className="font-mono text-xs text-signal-red font-semibold uppercase mt-1">
            COMPUTER ENGINEER · KERALA, INDIA · NEXUS TECH LEAD
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-3">
          {LINKS.map((link) => (
            <div key={link.label}>
              {link.internal ? (
                <Link
                  href={link.href}
                  className="p-4 bg-paper-tint border border-ink/15 hover:border-ink hover:bg-paper-card transition-all flex items-center justify-between group block"
                >
                  <div>
                    <h2 className="font-bold text-sm sm:text-base text-ink uppercase group-hover:text-signal-red transition-colors">
                      {link.label}
                    </h2>
                    <p className="text-xs text-ink-muted font-sans mt-0.5">
                      {link.desc}
                    </p>
                  </div>
                  <span className="text-ink-faint group-hover:text-signal-red transition-colors font-mono text-xs">
                    →
                  </span>
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-paper-tint border border-ink/15 hover:border-ink hover:bg-paper-card transition-all flex items-center justify-between group block"
                >
                  <div>
                    <h2 className="font-bold text-sm sm:text-base text-ink uppercase group-hover:text-signal-red transition-colors">
                      {link.label}
                    </h2>
                    <p className="text-xs text-ink-muted font-sans mt-0.5">
                      {link.desc}
                    </p>
                  </div>
                  <span className="text-ink-faint group-hover:text-signal-red transition-colors font-mono text-xs">
                    ↗
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 text-center font-mono text-xs text-ink-faint">
        <span>09°58&apos;N 76°31&apos;E // ALL CHANNELS VERIFIED</span>
      </div>
    </div>
  );
}
