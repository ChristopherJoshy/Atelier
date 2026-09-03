"use client";

import { motion } from "framer-motion";

export function ZShooterArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">GAME PHYSICS ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">VANILLA CANVAS 2D // SPATIAL HASH GRID</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">FRAME BUDGET</span>
          <span className="font-bold text-signal-red uppercase text-xs">60 FPS SOLID · &lt; 16.6ms TICK</span>
        </div>
      </div>

      {/* Main Spatial Hash Grid Collision Matrix */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Spatial Grid Cells */}
          {Array.from({ length: 6 }).map((_, col) =>
            Array.from({ length: 3 }).map((_, row) => (
              <rect
                key={`${col}-${row}`}
                x={40 + col * 70}
                y={25 + row * 55}
                width="70"
                height="55"
                stroke="#D5D1C6"
                strokeWidth="1"
                fill={col === 3 && row === 1 ? "#FF2E2E" : "#F3F1EC"}
                fillOpacity={col === 3 && row === 1 ? 0.12 : 0.4}
              />
            ))
          )}

          {/* Player Ship in Active Cell (Col 3, Row 1) */}
          <polygon points="285,110 270,120 270,100" fill="#090909" />
          <text x="285" y="90" fill="#090909" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">PLAYER SHIP</text>

          {/* Active Collision Check Bounds */}
          <rect x="250" y="80" width="70" height="55" stroke="#FF2E2E" strokeWidth="2" fill="none" />
          <text x="285" y="150" fill="#FF2E2E" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">O(1) HASH LOOKUP</text>

          {/* Projectile Trajectory */}
          <line x1="285" y1="110" x2="420" y2="110" stroke="#FF2E2E" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="420" cy="110" r="4" fill="#FF2E2E" />

          {/* Enemy Target */}
          <circle cx="420" cy="110" r="10" stroke="#090909" strokeWidth="2" fill="#F3F1EC" />
          <text x="420" y="85" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">ZOMBIE TARGET</text>

          {/* Right Panel: Engine Invariants */}
          <rect x="490" y="35" width="200" height="150" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="590" y="65" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">ZERO DEPENDENCY</text>
          <text x="590" y="88" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">NO PHASER / THREE.JS</text>
          <text x="590" y="110" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">PURE HTML5 CANVAS API</text>
          <text x="590" y="128" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">REQUESTANIMATIONFRAME TICK</text>
          <text x="590" y="146" fill="#F3F1EC" fontFamily="monospace" fontSize="9" textAnchor="middle">PARTICLE POOL REUSE</text>
          <text x="590" y="164" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">ZERO GARBAGE COLLECTION SPIKES</text>

          {/* Animated Bullet */}
          <motion.circle
            cx="285"
            cy="110"
            r="3.5"
            fill="#FF2E2E"
            animate={{ cx: [285, 420] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">PERFORMANCE</span>
          <span className="text-ink font-semibold">ZERO BUNDLE OVERHEAD</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">COLLISION COMPLEXITY</span>
          <span className="text-ink font-semibold">O(N) REDUCED TO O(1) HASH</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">SOURCE REPOSITORY</span>
          <span className="text-signal-red font-bold">Z-SHOOTER-GAME ↗</span>
        </div>
      </div>
    </div>
  );
}
