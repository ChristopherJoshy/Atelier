"use client";

import { motion } from "framer-motion";

export function ChrisCodeArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">AGENT ARCHITECTURE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">HIERARCHICAL MULTI-AGENT ORCHESTRATOR</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">PERSISTENT MEMORY</span>
          <span className="font-bold text-signal-red uppercase text-xs">LOCAL COMPACTION QUEUE</span>
        </div>
      </div>

      {/* Main Agent Orchestration Tree */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Central Orchestrator Node */}
          <rect x="40" y="70" width="160" height="80" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="120" y="100" fill="#F3F1EC" fontFamily="monospace" fontSize="13" fontWeight="bold" textAnchor="middle">ORCHESTRATOR</text>
          <text x="120" y="120" fill="#9C988F" fontFamily="monospace" fontSize="10" textAnchor="middle">TASK DISPATCHER</text>
          <text x="120" y="136" fill="#FF2E2E" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">TELEGRAM + MCP</text>

          {/* Subagent 1: Planner */}
          <rect x="300" y="20" width="160" height="50" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="380" y="42" fill="#090909" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">PLANNER AGENT</text>
          <text x="380" y="58" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">DIFF DECOMPOSITION</text>

          {/* Subagent 2: Builder */}
          <rect x="300" y="85" width="160" height="50" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="380" y="107" fill="#090909" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">BUILDER AGENT</text>
          <text x="380" y="123" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">AST LINE EDITING</text>

          {/* Subagent 3: Compactor */}
          <rect x="300" y="150" width="160" height="50" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="380" y="172" fill="#090909" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">COMPACTOR AGENT</text>
          <text x="380" y="188" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">TRANSCRIPT SUMMARIES</text>

          {/* Persistent Project Memory Bank */}
          <rect x="540" y="55" width="150" height="110" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.08" rx="2" />
          <text x="615" y="90" fill="#FF2E2E" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">MEMORY BANK</text>
          <text x="615" y="110" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">VECTOR ARCHIVE</text>
          <text x="615" y="128" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">PERSISTENT CACHE</text>
          <text x="615" y="146" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">PROJECT REPO MAP</text>

          {/* Connectors */}
          <path d="M 200 100 L 250 100 L 250 45 L 300 45" stroke="#090909" strokeWidth="1.5" />
          <path d="M 200 110 L 300 110" stroke="#090909" strokeWidth="1.5" />
          <path d="M 200 120 L 250 120 L 250 175 L 300 175" stroke="#090909" strokeWidth="1.5" />
          <path d="M 460 45 L 500 45 L 500 95 L 540 95" stroke="#090909" strokeWidth="1.5" />
          <path d="M 460 110 L 540 110" stroke="#090909" strokeWidth="1.5" />
          <path d="M 460 175 L 500 175 L 500 125 L 540 125" stroke="#FF2E2E" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Flowing Task Token */}
          <motion.circle
            cx="200"
            cy="110"
            r="4"
            fill="#FF2E2E"
            animate={{ cx: [200, 300, 460, 540] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">ORCHESTRATION</span>
          <span className="text-ink font-semibold">MULTI-STAGE DELEGATION</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">REMOTE PROTOCOL</span>
          <span className="text-ink font-semibold">TELEGRAM BOT BOTNET</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">OPEN-SOURCE</span>
          <span className="text-signal-red font-bold">1-YEAR FORK ROADMAP</span>
        </div>
      </div>
    </div>
  );
}
