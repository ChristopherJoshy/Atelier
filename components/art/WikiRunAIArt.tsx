"use client";

import { motion } from "framer-motion";

export function WikiRunAIArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">TRAVERSAL ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">DIRECTED HYPERLINK GRAPH // SEMANTIC A*</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">SEARCH HEURISTIC</span>
          <span className="font-bold text-signal-red uppercase text-xs">COSINE EMBEDDING EMBEDDING BIAS</span>
        </div>
      </div>

      {/* Main Directed Hyperlink Graph Traversal */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Start Article Node */}
          <circle cx="60" cy="110" r="22" stroke="#090909" strokeWidth="2" fill="#F3F1EC" />
          <text x="60" y="114" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">START</text>
          <text x="60" y="145" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">[QUANTUM]</text>

          {/* Intermediate Graph Nodes */}
          <circle cx="200" cy="50" r="18" stroke="#D5D1C6" strokeWidth="1.5" fill="#F3F1EC" />
          <text x="200" y="54" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">PHYSICS</text>

          <circle cx="200" cy="170" r="18" stroke="#D5D1C6" strokeWidth="1.5" fill="#F3F1EC" />
          <text x="200" y="174" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">OPTICS</text>

          {/* High-Utility Path Node (Pruned best branch) */}
          <circle cx="340" cy="90" r="22" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.1" />
          <text x="340" y="94" fill="#FF2E2E" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">LASERS</text>
          <text x="340" y="125" fill="#FF2E2E" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">UTILITY: 0.88</text>

          <circle cx="480" cy="130" r="22" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.1" />
          <text x="480" y="134" fill="#FF2E2E" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">FIBER OPTIC</text>

          {/* Target Article Node */}
          <circle cx="640" cy="110" r="24" stroke="#090909" strokeWidth="2" fill="#090909" />
          <text x="640" y="114" fill="#F3F1EC" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">TARGET</text>
          <text x="640" y="148" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">[INTERNET]</text>

          {/* Graph Edges */}
          <line x1="82" y1="100" x2="182" y2="55" stroke="#D5D1C6" strokeWidth="1" />
          <line x1="82" y1="120" x2="182" y2="165" stroke="#D5D1C6" strokeWidth="1" />
          <line x1="82" y1="110" x2="318" y2="92" stroke="#FF2E2E" strokeWidth="2" />
          <line x1="362" y1="95" x2="458" y2="125" stroke="#FF2E2E" strokeWidth="2" />
          <line x1="502" y1="128" x2="616" y2="112" stroke="#FF2E2E" strokeWidth="2" />

          {/* Moving Traversal Agent */}
          <motion.circle
            cx="60"
            cy="110"
            r="4.5"
            fill="#FF2E2E"
            animate={{
              cx: [60, 340, 480, 640],
              cy: [110, 90, 130, 110]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">SHORTEST PATH</span>
          <span className="text-ink font-semibold">AVERAGE 4 HOPS TO TARGET</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">PRUNING</span>
          <span className="text-ink font-semibold">SEMANTIC VECTOR EMBEDDING</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">SOURCE</span>
          <span className="text-signal-red font-bold">WIKIRUN-AI ↗</span>
        </div>
      </div>
    </div>
  );
}
