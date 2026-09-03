"use client";

import { motion } from "framer-motion";

export function ChadmanArt() {
  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-8 bg-paper-card border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Status */}
      <div className="flex justify-between items-start z-10 font-mono text-[0.65rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">SEARCH SPACE</span>
          <span className="font-bold text-ink tracking-wider">JAX FORWARD SIMULATION // BEAM K=8</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">RATING EVOLUTION</span>
          <span className="text-ink font-bold">ELO 929 → 1160 [v46+]</span>
        </div>
      </div>

      {/* Main Branching Decision Tree Field */}
      <div className="relative my-auto h-48 md:h-64 w-full flex items-center justify-center">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle Grid Coordinates */}
          <line x1="100" y1="20" x2="100" y2="280" stroke="#090909" strokeOpacity="0.06" strokeDasharray="2 2" />
          <line x1="220" y1="20" x2="220" y2="280" stroke="#090909" strokeOpacity="0.06" strokeDasharray="2 2" />
          <line x1="340" y1="20" x2="340" y2="280" stroke="#090909" strokeOpacity="0.06" strokeDasharray="2 2" />
          <line x1="460" y1="20" x2="460" y2="280" stroke="#090909" strokeOpacity="0.06" strokeDasharray="2 2" />

          {/* Root Node: Current Match State */}
          <circle cx="60" cy="150" r="5" fill="#090909" />
          <text x="45" y="172" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold">
            t=0
          </text>

          {/* Pruned/Dominated Branch Paths (Terminating Early in Faint Ink) */}
          <g stroke="#090909" strokeOpacity="0.2" strokeWidth="1">
            {/* Ply 1 Branches */}
            <path d="M 60 150 C 120 150, 140 80, 180 80" />
            <path d="M 60 150 C 120 150, 140 220, 180 220" />
            <path d="M 60 150 C 120 150, 140 120, 180 120" />
            <path d="M 60 150 C 120 150, 140 180, 180 180" />

            {/* Ply 2 Terminations (Cross marks / Dead ends) */}
            <path d="M 180 80 C 220 80, 240 50, 280 45" />
            <path d="M 180 80 C 220 80, 240 100, 280 105" />
            <path d="M 180 220 C 220 220, 240 250, 280 255" />
            <path d="M 180 220 C 220 220, 240 190, 280 195" />

            {/* Dominated markers (X) */}
            <text x="285" y="48" fill="#72706A" fontFamily="monospace" fontSize="8">× PRUNED</text>
            <text x="285" y="108" fill="#72706A" fontFamily="monospace" fontSize="8">× PRUNED</text>
            <text x="285" y="258" fill="#72706A" fontFamily="monospace" fontSize="8">× PRUNED</text>
            <text x="285" y="198" fill="#72706A" fontFamily="monospace" fontSize="8">× PRUNED</text>
          </g>

          {/* Additional Intermediate Pruned Sub-branches */}
          <g stroke="#090909" strokeOpacity="0.15" strokeWidth="0.8">
            <path d="M 180 120 C 240 120, 280 135, 340 135" />
            <path d="M 340 135 C 380 135, 400 115, 440 110" />
            <text x="445" y="113" fill="#72706A" fontFamily="monospace" fontSize="8">× PRUNED</text>
          </g>

          {/* THE SINGLE SURVIVING TRAJECTORY IN SIGNAL RED */}
          <motion.path
            d="M 60 150 C 120 150, 140 160, 180 160 C 240 160, 280 150, 340 150 C 400 150, 440 170, 500 170"
            stroke="#FF2E2E"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          />

          {/* Surviving Nodes */}
          <circle cx="180" cy="160" r="3.5" fill="#FF2E2E" />
          <circle cx="340" cy="150" r="4" fill="#FF2E2E" />
          <circle cx="500" cy="170" r="5" fill="#FF2E2E" />
          <circle cx="500" cy="170" r="11" stroke="#FF2E2E" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" />

          {/* Optimal Action Callout */}
          <text x="420" y="195" fill="#FF2E2E" fontFamily="monospace" fontSize="9" fontWeight="bold">
            OPTIMAL POLICY ACTION [v46+]
          </text>
          <text x="420" y="208" fill="#72706A" fontFamily="monospace" fontSize="8">
            REWARD PRIOR: TERMINAL WIN PPO
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-[0.62rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">SEARCH ENGINE</span>
          <span className="text-ink font-semibold">JAX PARALLEL ROLLOUT</span>
        </div>
        <div>
          <span className="text-ink-faint block">COMPUTE BUDGET</span>
          <span className="text-ink font-semibold">&lt; 50ms PER TURN</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">BRANCHING PRUNE</span>
          <span className="text-signal-red font-semibold">98.4% DOMINATED</span>
        </div>
      </div>
    </div>
  );
}
