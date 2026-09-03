"use client";

import { motion } from "framer-motion";

export function AivaArt() {
  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-8 bg-paper-card border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Status */}
      <div className="flex justify-between items-start z-10 font-mono text-[0.65rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">TOPOLOGY</span>
          <span className="font-bold text-ink tracking-wider">DISTRIBUTED P2P EVENT MESH</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">SYNC LATENCY</span>
          <span className="text-ink font-bold">&lt; 25ms [LOCAL WEBSOCKET]</span>
        </div>
      </div>

      {/* Main Distributed Network Diagram */}
      <div className="relative my-auto h-48 md:h-64 w-full flex items-center justify-center">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle Grid Rings around Central Intelligence */}
          <circle cx="300" cy="150" r="80" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />
          <circle cx="300" cy="150" r="130" stroke="#090909" strokeOpacity="0.05" strokeDasharray="4 4" />

          {/* Peer-to-Peer Inter-Device Links */}
          <line x1="140" y1="90" x2="140" y2="210" stroke="#090909" strokeOpacity="0.15" strokeDasharray="2 2" />
          <line x1="140" y1="210" x2="460" y2="210" stroke="#090909" strokeOpacity="0.15" strokeDasharray="2 2" />
          <line x1="460" y1="210" x2="460" y2="90" stroke="#090909" strokeOpacity="0.15" strokeDasharray="2 2" />

          {/* Radial Spokes connecting to central AIVA coordinator */}
          <line x1="140" y1="90" x2="300" y2="150" stroke="#090909" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="140" y1="210" x2="300" y2="150" stroke="#090909" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="460" y1="90" x2="300" y2="150" stroke="#090909" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="460" y1="210" x2="300" y2="150" stroke="#090909" strokeWidth="1.5" strokeOpacity="0.3" />

          {/* Active Red Sync Packet Pulsing between Mobile and Coordinator */}
          <motion.circle
            cx="220"
            cy="120"
            r="3.5"
            fill="#FF2E2E"
            animate={{
              cx: [140, 300, 140],
              cy: [90, 150, 90],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Active Red Sync Packet between IoT Edge and Coordinator */}
          <motion.circle
            cx="380"
            cy="180"
            r="3.5"
            fill="#FF2E2E"
            animate={{
              cx: [460, 300, 460],
              cy: [210, 150, 210],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Node 1: Mobile Client (Phone) */}
          <rect x="110" y="70" width="60" height="40" stroke="#090909" strokeWidth="1.5" fill="#ECE8E0" />
          <text x="120" y="94" fill="#090909" fontFamily="monospace" fontSize="8" fontWeight="bold">PHONE</text>

          {/* Node 2: Workstation (PC / Browser) */}
          <rect x="110" y="190" width="60" height="40" stroke="#090909" strokeWidth="1.5" fill="#ECE8E0" />
          <text x="128" y="214" fill="#090909" fontFamily="monospace" fontSize="8" fontWeight="bold">PC</text>

          {/* Node 3: Home IoT Hub (Raspberry Pi) */}
          <rect x="430" y="70" width="60" height="40" stroke="#090909" strokeWidth="1.5" fill="#ECE8E0" />
          <text x="442" y="94" fill="#090909" fontFamily="monospace" fontSize="8" fontWeight="bold">EDGE</text>

          {/* Node 4: Ambient Sensor Node */}
          <rect x="430" y="190" width="60" height="40" stroke="#090909" strokeWidth="1.5" fill="#ECE8E0" />
          <text x="438" y="214" fill="#090909" fontFamily="monospace" fontSize="8" fontWeight="bold">SENSOR</text>

          {/* Central AIVA Core Node */}
          <circle cx="300" cy="150" r="22" fill="#090909" />
          <circle cx="300" cy="150" r="26" stroke="#FF2E2E" strokeWidth="1.5" strokeOpacity="0.8" />
          <text x="286" y="154" fill="#F3F1EC" fontFamily="monospace" fontSize="10" fontWeight="bold">
            AIVA
          </text>

          {/* Semantic Labels */}
          <text x="250" y="192" fill="#72706A" fontFamily="monospace" fontSize="8">
            SHARED LOCAL STATE
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-[0.62rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">STORAGE PRIVACY</span>
          <span className="text-ink font-semibold">LOCAL ZERO-CLOUD LEDGER</span>
        </div>
        <div>
          <span className="text-ink-faint block">RPC PROTOCOL</span>
          <span className="text-ink font-semibold">TOKENIZED WEBSOCKET MESH</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">SCAM SHIELD</span>
          <span className="text-signal-red font-semibold">ACTIVE TELEPHONY GUARD</span>
        </div>
      </div>
    </div>
  );
}
