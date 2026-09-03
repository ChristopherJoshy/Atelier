"use client";

import { motion } from "framer-motion";

export function ForgeArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">DISCOVERY ALGORITHM</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">QDRANT DENSE VECTOR EMBEDDINGS</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">COLLISION METRIC</span>
          <span className="font-bold text-signal-red uppercase text-xs">COSINE DISTANCE &gt; 0.82</span>
        </div>
      </div>

      {/* Main High-Dimensional Vector Clustering Diagram */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Vector Coordinate Space Grid */}
          <line x1="60" y1="30" x2="60" y2="190" stroke="#D5D1C6" strokeWidth="1.5" />
          <line x1="60" y1="190" x2="420" y2="190" stroke="#D5D1C6" strokeWidth="1.5" />
          <text x="65" y="45" fill="#72706A" fontFamily="monospace" fontSize="9">DIMENSION Z (NOVELTY)</text>
          <text x="320" y="205" fill="#72706A" fontFamily="monospace" fontSize="9">DIMENSION X (FEASIBILITY)</text>

          {/* Existing Project Clusters (Gray dots) */}
          <circle cx="120" cy="140" r="5" fill="#72706A" />
          <circle cx="140" cy="155" r="5" fill="#72706A" />
          <circle cx="160" cy="130" r="5" fill="#72706A" />
          <circle cx="180" cy="165" r="5" fill="#72706A" />
          <circle cx="150" cy="145" r="35" stroke="#72706A" strokeWidth="1" strokeDasharray="3 3" fill="#72706A" fillOpacity="0.05" />
          <text x="150" y="105" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">HISTORICAL CLUSTER [OVER-BUILT]</text>

          {/* Candidate Proposal Vector (Pulsing Red) */}
          <circle cx="340" cy="70" r="8" fill="#FF2E2E" />
          <circle cx="340" cy="70" r="28" stroke="#FF2E2E" strokeWidth="1.5" strokeDasharray="4 4" fill="#FF2E2E" fillOpacity="0.1" />
          <text x="340" y="38" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">CANDIDATE: NOVEL ANGLE</text>
          <text x="340" y="110" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">DISTANCE = 0.89 [ZERO COLLISION]</text>

          {/* Right Panel: LLM Routing & Memory Subsystem */}
          <rect x="470" y="40" width="220" height="150" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="580" y="70" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">ROUTING GATEWAY</text>
          <text x="580" y="92" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">MULTI-PROVIDER LLM</text>
          <text x="580" y="112" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">GROQ LLAMA 3.3 (LOW LATENCY)</text>
          <text x="580" y="128" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">GEMINI 2.0 (LONG CONTEXT)</text>
          <text x="580" y="148" fill="#F3F1EC" fontFamily="monospace" fontSize="9" textAnchor="middle">DUAL SESSION MEMORY</text>
          <text x="580" y="166" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">OPENAI CODEX BENGALURU</text>

          {/* Flow Connector */}
          <line x1="370" y1="70" x2="470" y2="70" stroke="#FF2E2E" strokeWidth="2" />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">VECTOR DATABASE</span>
          <span className="text-ink font-semibold">QDRANT EMBEDDINGS</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">PURPOSE</span>
          <span className="text-ink font-semibold">CAMPUS DUPLICATION AVOIDANCE</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">ORIGIN</span>
          <span className="text-signal-red font-bold">OPENAI CODEX HACKATHON</span>
        </div>
      </div>
    </div>
  );
}
