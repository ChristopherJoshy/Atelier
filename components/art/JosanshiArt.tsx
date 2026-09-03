"use client";

import { motion } from "framer-motion";

export function JosanshiArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Status */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">PROTOCOL LAYER</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">MCP SERVER ➔ HL7 FHIR GATEWAY</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">SESSION ARCHITECTURE</span>
          <span className="font-bold text-signal-red uppercase text-xs">POOLED TCP // HTTP KEEP-ALIVE</span>
        </div>
      </div>

      {/* Main Clinical Protocol Flow Diagram (Scaled for clarity) */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Layer 1: Client / LLM Agent */}
          <rect x="20" y="80" width="130" height="75" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="85" y="112" fill="#090909" fontFamily="monospace" fontSize="13" fontWeight="bold" textAnchor="middle">LLM AGENT</text>
          <text x="85" y="134" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">CLINICAL QUERY</text>

          {/* Connection 1 */}
          <line x1="150" y1="117" x2="220" y2="117" stroke="#090909" strokeWidth="2" />

          {/* Layer 2: MCP Transport & Session Pool */}
          <rect x="220" y="65" width="150" height="105" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="295" y="98" fill="#090909" fontFamily="monospace" fontSize="13" fontWeight="bold" textAnchor="middle">MCP PROTOCOL</text>
          <text x="295" y="120" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">SESSION POOLING</text>
          <text x="295" y="138" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">TCP KEEP-ALIVE</text>
          <text x="295" y="156" fill="#FF2E2E" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">&lt; 18ms LATENCY</text>

          {/* Deterministic Safety Verification Branch */}
          <path d="M 295 65 L 295 25 L 430 25" stroke="#FF2E2E" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="430" y="10" width="160" height="32" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.1" rx="2" />
          <text x="510" y="31" fill="#FF2E2E" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">
            SAFETY GATES: IMMUTABLE
          </text>

          {/* Connection 2 */}
          <line x1="370" y1="117" x2="430" y2="117" stroke="#090909" strokeWidth="2" />

          {/* Layer 3: Clinical Tools */}
          <rect x="430" y="60" width="145" height="115" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="502" y="90" fill="#090909" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">CLINICAL TOOLS</text>
          <text x="502" y="112" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">POSTPARTUM VITALS</text>
          <text x="502" y="130" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">DRUG INTERACTIONS</text>
          <text x="502" y="148" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">VACCINE TIMELINES</text>

          {/* Connection 3 */}
          <line x1="575" y1="117" x2="620" y2="117" stroke="#090909" strokeWidth="2" />

          {/* Layer 4: FHIR Server Repository */}
          <rect x="620" y="80" width="90" height="75" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="665" y="112" fill="#F3F1EC" fontFamily="monospace" fontSize="13" fontWeight="bold" textAnchor="middle">HL7 FHIR</text>
          <text x="665" y="134" fill="#9C988F" fontFamily="monospace" fontSize="10" textAnchor="middle">EHR STORE</text>

          {/* Flowing Verified Request Packet */}
          <motion.circle
            cx="150"
            cy="117"
            r="5"
            fill="#FF2E2E"
            animate={{ cx: [150, 220, 370, 430, 575, 620] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">ARCHITECTURE</span>
          <span className="text-ink font-semibold">DECOUPLED TS MCP</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">STANDARDS</span>
          <span className="text-ink font-semibold">HL7 FHIR CLINICAL SPECS</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">EVENT CONTEXT</span>
          <span className="text-signal-red font-bold">AGENTS ASSEMBLE 2026</span>
        </div>
      </div>
    </div>
  );
}
