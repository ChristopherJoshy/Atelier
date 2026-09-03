"use client";

import { motion } from "framer-motion";

export function NexusWarsArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">SECURITY SANDBOX</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">LINUX NSJAIL CONTAINERIZATION</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">TOURNAMENT RATING</span>
          <span className="font-bold text-signal-red uppercase text-xs">GLICKO-2 LADDER ENGINE</span>
        </div>
      </div>

      {/* Main Sandboxed Execution Diagram */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Host Boundary (Dashed outer box) */}
          <rect x="20" y="15" width="460" height="190" stroke="#D5D1C6" strokeWidth="1.5" strokeDasharray="5 5" fill="none" rx="4" />
          <text x="35" y="35" fill="#72706A" fontFamily="monospace" fontSize="9" fontWeight="bold">HOST LINUX WORKER NODE</text>

          {/* Sandbox 1: Student Bot A */}
          <rect x="40" y="50" width="180" height="135" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.05" rx="2" />
          <text x="130" y="75" fill="#FF2E2E" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">NSJAIL JAIL_01</text>
          <text x="130" y="95" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">UNTRUSTED BOT A</text>
          <text x="130" y="115" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">PID NAMESPACE ISOLATED</text>
          <text x="130" y="132" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">CGROUP CPU: 250ms CAP</text>
          <text x="130" y="150" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">SECCOMP BLOCKED SYSCALLS</text>

          {/* Sandbox 2: Student Bot B */}
          <rect x="260" y="50" width="180" height="135" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="350" y="75" fill="#090909" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">NSJAIL JAIL_02</text>
          <text x="350" y="95" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">UNTRUSTED BOT B</text>
          <text x="350" y="115" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">NETWORK ISOLATED</text>
          <text x="350" y="132" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">READ-ONLY FILESYSTEM</text>
          <text x="350" y="150" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">ZERO ESCAPE VECTORS</text>

          {/* Match Arbiter / Glicko Evaluation Hub */}
          <rect x="520" y="50" width="170" height="135" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="605" y="80" fill="#F3F1EC" fontFamily="monospace" fontSize="13" fontWeight="bold" textAnchor="middle">CENTRAL ARBITER</text>
          <text x="605" y="105" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">DETERMINISTIC TICK</text>
          <text x="605" y="125" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">PIPE IPC / PROTOBUF</text>
          <text x="605" y="145" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">GLICKO-2 UPDATE</text>
          <text x="605" y="165" fill="#F3F1EC" fontFamily="monospace" fontSize="9" textAnchor="middle">MINIO STORAGE</text>

          {/* IPC Pipes */}
          <line x1="220" y1="115" x2="260" y2="115" stroke="#D5D1C6" strokeWidth="1.5" />
          <path d="M 440 115 L 520 115" stroke="#FF2E2E" strokeWidth="2" />

          {/* Animated IPC Move Token */}
          <motion.circle
            cx="440"
            cy="115"
            r="4"
            fill="#FF2E2E"
            animate={{ cx: [440, 520] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">ISOLATION</span>
          <span className="text-ink font-semibold">LINUX CGROUPS + SECCOMP</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">SAFETY</span>
          <span className="text-ink font-semibold">ZERO ARBITRARY RCE RISK</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">COMMUNITY ARENA</span>
          <span className="text-signal-red font-bold">NEXUSWARS2026.VERCEL.APP ↗</span>
        </div>
      </div>
    </div>
  );
}
