"use client";

import { motion } from "framer-motion";

export function AcpiaArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">FORENSIC ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">STYLOMETRIC IDENTITY GRAPH // EXPOSURE SHIELD</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">LAW ENFORCEMENT</span>
          <span className="font-bold text-signal-red uppercase text-xs">KERALA POLICE CYBERDOME</span>
        </div>
      </div>

      {/* Main Stylometric Identity Stitching Diagram */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Persona A (Forum 1) */}
          <rect x="30" y="30" width="160" height="65" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="110" y="55" fill="#090909" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">PSEUDONYM ALICE_88</text>
          <text x="110" y="73" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">TELEGRAM CHANNEL A</text>
          <text x="110" y="87" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">N-GRAM PUNCTUATION: 0.88</text>

          {/* Persona B (Forum 2) */}
          <rect x="30" y="125" width="160" height="65" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="110" y="150" fill="#090909" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">PSEUDONYM CIPHER_9</text>
          <text x="110" y="168" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">DISCORD GUILD B</text>
          <text x="110" y="182" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">VOCABULARY JACCARD: 0.91</text>

          {/* Stylometric Correlation Core */}
          <rect x="270" y="55" width="180" height="110" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="360" y="85" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">STYLOMETRY ENGINE</text>
          <text x="360" y="105" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">IDENTITY STITCHED (94%)</text>
          <text x="360" y="125" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">TF-IDF FREQUENCY FUSION</text>
          <text x="360" y="143" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">CROSS-PLATFORM CLUSTER</text>

          {/* Exposure Shielding Gate */}
          <rect x="520" y="55" width="170" height="110" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.08" rx="2" />
          <text x="605" y="85" fill="#FF2E2E" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">EXPOSURE SHIELD</text>
          <text x="605" y="105" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">AGENTIC REDACTION</text>
          <text x="605" y="125" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">TRAUMA FILTER: ACTIVE</text>
          <text x="605" y="143" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">EVIDENTIARY HASH SEALED</text>

          {/* Connectors */}
          <line x1="190" y1="62" x2="270" y2="85" stroke="#090909" strokeWidth="1.5" />
          <line x1="190" y1="157" x2="270" y2="135" stroke="#090909" strokeWidth="1.5" />
          <line x1="450" y1="110" x2="520" y2="110" stroke="#FF2E2E" strokeWidth="2" />

          {/* Evidence Verification Token */}
          <motion.circle
            cx="270"
            cy="110"
            r="4.5"
            fill="#FF2E2E"
            animate={{ cx: [270, 450, 520] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">OFFICER SAFETY</span>
          <span className="text-ink font-semibold">AUTOMATIC MEDIA REDACTION</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">LEGAL COMPLIANCE</span>
          <span className="text-ink font-semibold">COURT-ADMISSIBLE CHAIN</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">HACKATHON</span>
          <span className="text-signal-red font-bold">HAC&apos;KP 2026 CYBERDOME</span>
        </div>
      </div>
    </div>
  );
}
