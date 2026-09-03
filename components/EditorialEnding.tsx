"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function EditorialEnding() {
  return (
    <footer
      className="bg-ink text-paper pt-20 md:pt-32 pb-14 px-6 md:px-12 relative overflow-hidden select-none"
      aria-label="Editorial Ending and Direct Contact"
    >
      {/* Signature Inverted Redline Across Viewport */}
      <div className="relative mb-12 md:mb-16">
        <div className="h-[1px] bg-signal-red w-full" />
        <span className="absolute right-0 -top-3 bg-ink px-2 font-mono text-[0.62rem] text-signal-red tracking-widest uppercase font-semibold">
          TERMINATION // 00.000
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-paper/15">
        {/* Giant Monolithic Farewell Typographic Call */}
        <div className="md:col-span-8 space-y-4">
          <span className="meta-mono-sm text-paper/40 block">
            CLOSING DIRECTIVE // FIELD TRANSMISSION
          </span>
          <h2 className="display-title text-paper leading-[0.88] tracking-tighter">
            BUILD <br />
            SOMETHING.
          </h2>
          <p className="font-sans text-sm md:text-base text-paper/60 max-w-lg leading-relaxed pt-4">
            Available for systems architecture, reinforcement learning benchmarks,
            edge AI safety layers, and high-performance open-source initiatives.
          </p>
        </div>

        {/* Minimal Direct Coordinates & Links */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="meta-mono-sm text-paper/40 block">
              DIRECT COMMUNICATIONS
            </span>
            <div className="space-y-2 font-mono text-sm">
              <a
                href="mailto:christopherjoshy4@gmail.com"
                className="group flex items-center justify-between py-2 border-b border-paper/10 hover:border-paper transition-colors"
              >
                <span>EMAIL DIRECT</span>
                <span className="text-signal-red group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a
                href="https://github.com/ChristopherJoshy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2 border-b border-paper/10 hover:border-paper transition-colors"
              >
                <span>GITHUB PROFILE</span>
                <span className="text-signal-red group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/christopher-joshy-272a77290/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2 border-b border-paper/10 hover:border-paper transition-colors"
              >
                <span>LINKEDIN IDENTITY</span>
                <span className="text-signal-red group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>

          <div className="font-mono text-xs text-paper/50 space-y-1">
            <p>09°58&apos;N 76°31&apos;E</p>
            <p>KERALA, INDIA</p>
            <p className="text-paper/80 font-medium">NEXUS TECHNICAL LEADERSHIP</p>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Imprint */}
      <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-paper/40">
        <div>
          <span>© 2026 CHRISTOPHER JOSHY · ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/archive" className="hover:text-paper transition-colors">
            INDEX [CATALOGUE]
          </Link>
          <Link href="/experiments" className="hover:text-paper transition-colors">
            NOTEBOOK
          </Link>
          <Link href="/notes" className="hover:text-paper transition-colors">
            FIELD NOTES
          </Link>
        </div>
      </div>
    </footer>
  );
}
