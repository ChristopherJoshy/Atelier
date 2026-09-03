"use client";

import { motion } from "framer-motion";

export function GhostDepsArt() {
  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-8 bg-paper-card border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Status */}
      <div className="flex justify-between items-start z-10 font-mono text-[0.65rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">AUDIT ENGINE</span>
          <span className="font-bold text-ink tracking-wider">AST SPECIFIER CRAWLER // v0.1.5</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">SUPPLY CHAIN RISK</span>
          <span className="text-signal-red font-bold animate-pulse">SLOPSQUATTING PHANTOM ISOLATED</span>
        </div>
      </div>

      {/* Main Dependency Graph Field */}
      <div className="relative my-auto h-48 md:h-64 w-full flex items-center justify-center">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Root App Node */}
          <rect x="40" y="130" width="80" height="40" stroke="#090909" strokeWidth="1.5" fill="#ECE8E0" />
          <text x="56" y="154" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold">
            package.json
          </text>

          {/* Valid Verified Dependency Branches */}
          <g stroke="#090909" strokeWidth="1.2" strokeOpacity="0.4">
            <path d="M 120 140 C 180 140, 200 70, 260 70" />
            <path d="M 120 150 C 180 150, 200 130, 260 130" />
            <path d="M 120 160 C 180 160, 200 190, 260 190" />
          </g>

          {/* Valid Dependency Nodes */}
          <rect x="260" y="55" width="90" height="30" stroke="#090909" strokeWidth="1.2" fill="#ECE8E0" />
          <text x="272" y="74" fill="#090909" fontFamily="monospace" fontSize="8">typescript</text>

          <rect x="260" y="115" width="90" height="30" stroke="#090909" strokeWidth="1.2" fill="#ECE8E0" />
          <text x="282" y="134" fill="#090909" fontFamily="monospace" fontSize="8">fastapi</text>

          <rect x="260" y="175" width="90" height="30" stroke="#090909" strokeWidth="1.2" fill="#ECE8E0" />
          <text x="288" y="194" fill="#090909" fontFamily="monospace" fontSize="8">redis</text>

          {/* Sub-branches for valid packages */}
          <g stroke="#090909" strokeWidth="1" strokeOpacity="0.25">
            <path d="M 350 70 L 410 50" />
            <path d="M 350 70 L 410 90" />
          </g>
          <circle cx="410" cy="50" r="3" fill="#090909" opacity="0.4" />
          <circle cx="410" cy="90" r="3" fill="#090909" opacity="0.4" />

          {/* PHANTOM HALLUCINATED DEPENDENCY (INJECTED BY LLM CODE) */}
          <motion.path
            d="M 120 170 C 180 170, 200 240, 260 240"
            stroke="#FF2E2E"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.0 }}
          />

          {/* Quarantined Phantom Node in Signal Red */}
          <rect x="260" y="225" width="130" height="32" stroke="#FF2E2E" strokeWidth="1.5" fill="#FF2E2E" fillOpacity="0.08" />
          <text x="268" y="245" fill="#FF2E2E" fontFamily="monospace" fontSize="8" fontWeight="bold">
            ⚠ hallucinated-auth-util
          </text>

          {/* Quarantine Cross Indicator */}
          <circle cx="410" cy="241" r="9" stroke="#FF2E2E" strokeWidth="1.5" fill="#ECE8E0" />
          <path d="M 405 236 L 415 246 M 415 236 L 405 246" stroke="#FF2E2E" strokeWidth="1.5" />

          <text x="430" y="244" fill="#FF2E2E" fontFamily="monospace" fontSize="8" fontWeight="bold">
            404 NOT IN NPM REGISTRY // QUARANTINED
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-[0.62rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">DISTRIBUTION</span>
          <span className="text-ink font-semibold">NPM REGISTRY (PUBLISHED)</span>
        </div>
        <div>
          <span className="text-ink-faint block">AST ENGINE</span>
          <span className="text-ink font-semibold">ESTREE DYNAMIC PARSER</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">DEFENSE SCOPE</span>
          <span className="text-signal-red font-semibold">SLOPSQUATTING ATTACKS</span>
        </div>
      </div>
    </div>
  );
}
