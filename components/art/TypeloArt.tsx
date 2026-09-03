"use client";

import { motion } from "framer-motion";

export function TypeloArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Protocol Status */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">NETCODE ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">AUTHORITATIVE WEBSOCKET // REDIS QUEUE</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">SYNCHRONIZATION</span>
          <span className="font-bold text-signal-red uppercase text-xs">&lt; 50ms LATENCY · LIVE</span>
        </div>
      </div>

      {/* Main Real-Time 1v1 Keystroke Synchronization Timeline */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Axis Timeline */}
          <line x1="40" y1="110" x2="680" y2="110" stroke="#D5D1C6" strokeWidth="2" />
          <text x="40" y="200" fill="#72706A" fontFamily="monospace" fontSize="10">t = 0ms</text>
          <text x="360" y="200" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">DELTA VERIFIED @ SERVER</text>
          <text x="680" y="200" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="end">t = 48ms</text>

          {/* Lane 1: Player A Keystroke Stream (Client) */}
          <rect x="40" y="30" width="130" height="55" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="105" y="55" fill="#090909" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">PLAYER 01</text>
          <text x="105" y="72" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">124 WPM · 98% ACC</text>

          {/* Lane 2: Player B Keystroke Stream (Opponent) */}
          <rect x="40" y="130" width="130" height="55" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="105" y="155" fill="#090909" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">PLAYER 02</text>
          <text x="105" y="172" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="middle">118 WPM · 99% ACC</text>

          {/* Central Authoritative WebSocket Judge */}
          <rect x="290" y="55" width="140" height="110" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="360" y="90" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">WS SERVER</text>
          <text x="360" y="110" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">DELTA VALIDATOR</text>
          <text x="360" y="128" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">ANTI-MACRO FILTER</text>
          <text x="360" y="146" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">REDIS CHANNEL</text>

          {/* Rating Outcome Node */}
          <rect x="550" y="65" width="130" height="90" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.08" rx="2" />
          <text x="615" y="98" fill="#FF2E2E" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">ELO RECALC</text>
          <text x="615" y="118" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">RATING + 18</text>
          <text x="615" y="136" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">GLICKO-2 LADDER</text>

          {/* Connecting Lines */}
          <line x1="170" y1="58" x2="290" y2="85" stroke="#090909" strokeWidth="1.5" />
          <line x1="170" y1="158" x2="290" y2="135" stroke="#090909" strokeWidth="1.5" />
          <line x1="430" y1="110" x2="550" y2="110" stroke="#FF2E2E" strokeWidth="2" />

          {/* Animated Keystroke Delta Packets */}
          <motion.circle
            cx="170"
            cy="58"
            r="4"
            fill="#090909"
            animate={{ cx: [170, 290] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="430"
            cy="110"
            r="4"
            fill="#FF2E2E"
            animate={{ cx: [430, 550] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 0.4 }}
          />
        </svg>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">AUTHORITATIVE</span>
          <span className="text-ink font-semibold">SERVER-SIDE VERDICT</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">MATCHMAKING</span>
          <span className="text-ink font-semibold">REDIS PUB/SUB ROOMS</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">PRODUCTION URL</span>
          <span className="text-signal-red font-bold">TYPELO.TECH ↗</span>
        </div>
      </div>
    </div>
  );
}
