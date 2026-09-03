"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function EditorialEnding() {
  return (
    <footer
      className="bg-ink text-paper pt-14 md:pt-24 pb-10 md:pb-12 relative overflow-hidden select-none"
      aria-label="Editorial Ending and Direct Contact"
    >
      <div className="container-editorial section-pad">
        {/* Signature Inverted Redline Across Viewport — scroll draw */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-10 md:mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
            className="h-[1.5px] bg-signal-red w-full origin-left"
          />
          <span className="absolute right-0 -top-3 bg-ink px-3 font-mono text-[11px] text-signal-red tracking-[0.16em] uppercase font-semibold leading-none py-1">
            TERMINATION // 00.000
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 md:pb-14 border-b border-paper/10">
          {/* Giant Monolithic Farewell Typographic Call — editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-8 space-y-4"
          >
            <span className="meta-mono-sm text-paper/40 block tracking-[0.12em]">CLOSING DIRECTIVE // FIELD TRANSMISSION</span>
            <h2 className="display-monumental text-paper leading-[0.86] tracking-tighter !text-[clamp(2.8rem,8vw,6.5rem)]">
              BUILD <br />
              SOMETHING.
            </h2>
            <p className="font-sans text-[14px] md:text-[15px] text-paper/60 max-w-lg leading-[1.7] pt-3 border-l border-paper/10 pl-4">
              Available for systems architecture, reinforcement benchmarks, edge AI safety, and high-performance open source. No decks. Just verified builds.
            </p>
          </motion.div>

          {/* Minimal Direct Coordinates & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="md:col-span-4 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <span className="meta-mono-sm text-paper/40 block">DIRECT COMMUNICATIONS</span>
              <div className="space-y-1 font-mono text-[13px]">
                {[
                  { label: "EMAIL DIRECT", href: "mailto:christopherjoshy4@gmail.com" },
                  { label: "GITHUB PROFILE", href: "https://github.com/ChristopherJoshy" },
                  { label: "LINKEDIN IDENTITY", href: "https://www.linkedin.com/in/christopher-joshy-272a77290/" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-3 border-b border-paper/10 hover:border-paper/40 transition-colors"
                  >
                    <span className="tracking-wide">{l.label}</span>
                    <span className="text-signal-red group-hover:translate-x-1 transition-transform duration-300">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="font-mono text-[12px] text-paper/50 space-y-1 tracking-wide">
              <p>09°58′N 76°31′E</p>
              <p>KERALA, INDIA</p>
              <p className="text-paper/85 font-medium">NEXUS TECHNICAL LEADERSHIP</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Editorial Imprint */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[11px] tracking-wide text-paper/40">
          <div>
            <span>© 2026 CHRISTOPHER JOSHY · ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-5 md:gap-6">
            <Link href="/archive" className="hover:text-paper transition-colors hover:underline underline-offset-4">
              INDEX [CATALOGUE]
            </Link>
            <Link href="/experiments" className="hover:text-paper transition-colors hover:underline underline-offset-4">
              NOTEBOOK
            </Link>
            <Link href="/notes" className="hover:text-paper transition-colors hover:underline underline-offset-4">
              FIELD NOTES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
