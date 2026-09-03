"use client";

import { motion } from "framer-motion";

export function OrixArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">MATCHING ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">GEOSPATIAL CORRIDOR INTERSECTION</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">TRUST MODEL</span>
          <span className="font-bold text-signal-red uppercase text-xs">BILATERAL ELO REPUTATION</span>
        </div>
      </div>

      {/* Main Corridor Intersection Diagram */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Main Transit Corridor Highway (Curved Path) */}
          <path d="M 40 160 C 200 160, 300 60, 680 60" stroke="#090909" strokeWidth="4" />
          <text x="50" y="180" fill="#72706A" fontFamily="monospace" fontSize="10">ROUTE ORIGIN [KOTTAYAM]</text>
          <text x="670" y="45" fill="#72706A" fontFamily="monospace" fontSize="10" textAnchor="end">DESTINATION [SJCET PALAI]</text>

          {/* Tolerance Buffer Envelope */}
          <path d="M 40 180 C 200 180, 300 80, 680 80" stroke="#D5D1C6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 40 140 C 200 140, 300 40, 680 40" stroke="#D5D1C6" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Commuter Node 1 */}
          <circle cx="200" cy="130" r="7" fill="#090909" />
          <text x="200" y="115" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">DRIVER (1420 ELO)</text>

          {/* Commuter Node 2 (Pickup match) */}
          <circle cx="340" cy="80" r="7" fill="#FF2E2E" />
          <circle cx="340" cy="80" r="22" stroke="#FF2E2E" strokeWidth="1.5" strokeDasharray="3 3" fill="#FF2E2E" fillOpacity="0.1" />
          <text x="340" y="55" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">PASSENGER PICKUP</text>
          <text x="340" y="120" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">DETOUR: 180m (&lt; 400m CAP)</text>

          {/* Bilateral Rating Box */}
          <rect x="490" y="100" width="200" height="95" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="590" y="125" fill="#F3F1EC" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">BILATERAL VERDICT</text>
          <text x="590" y="145" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">MATCH CONFIRMED (0.94)</text>
          <text x="590" y="163" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">ZERO-BURDEN GEOFENCE</text>
          <text x="590" y="179" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">PHONE BATTERY DRAIN &lt; 2%</text>

          {/* Moving Car Indicator */}
          <motion.circle
            cx="40"
            cy="160"
            r="5"
            fill="#FF2E2E"
            animate={{
              cx: [40, 200, 340, 680],
              cy: [160, 130, 80, 60]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">ROUTE EFFICIENCY</span>
          <span className="text-ink font-semibold">MAX DETOUR 400 METERS</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">REPUTATION</span>
          <span className="text-ink font-semibold">DOUBLE-BLIND POST RIDE</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">DEPLOYMENT</span>
          <span className="text-signal-red font-bold">CAMPUS COMMUTER NETWORK</span>
        </div>
      </div>
    </div>
  );
}
