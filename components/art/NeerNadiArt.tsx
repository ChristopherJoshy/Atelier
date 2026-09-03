"use client";

import { motion } from "framer-motion";

export function NeerNadiArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">ENVIRONMENTAL TELEMETRY</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">KERALA RIVERINE SENSOR MESH // ESP32</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">STREAMING PROTOCOL</span>
          <span className="font-bold text-signal-red uppercase text-xs">MQTT QOS-1 // 30s TELEMETRY</span>
        </div>
      </div>

      {/* Main River Sensor Mesh Diagram */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Meandering River Basin */}
          <path d="M 30 110 Q 180 50, 360 110 T 690 110" stroke="#090909" strokeWidth="8" strokeLinecap="round" opacity="0.15" />
          <text x="40" y="70" fill="#72706A" fontFamily="monospace" fontSize="9">UPSTREAM [MEENACHIL RIVER]</text>
          <text x="680" y="70" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="end">DOWNSTREAM ESTUARY</text>

          {/* Sensor Probe Station 01 */}
          <rect x="120" y="40" width="130" height="70" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="185" y="65" fill="#090909" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">NODE_PALAI_01</text>
          <text x="185" y="82" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">pH: 7.2 · TDS: 142</text>
          <text x="185" y="98" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">SOLAR HARVESTING</text>

          {/* Sensor Probe Station 02 (Contamination Anomaly Spike) */}
          <rect x="330" y="115" width="140" height="75" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.08" rx="2" />
          <text x="400" y="140" fill="#FF2E2E" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">NODE_ETTUMANOOR</text>
          <text x="400" y="158" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">TDS SPIKE: 480 PPM</text>
          <text x="400" y="174" fill="#090909" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">DISCHARGE ALERT</text>

          {/* Central Analytics Hub */}
          <rect x="530" y="50" width="160" height="110" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="610" y="80" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">CENTRAL INGEST</text>
          <text x="610" y="100" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">WATER INTEGRITY</text>
          <text x="610" y="120" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">MQTT OVER TLS</text>
          <text x="610" y="138" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">COMMUNITY DISPATCH</text>

          {/* Telemetry Links */}
          <line x1="250" y1="75" x2="330" y2="135" stroke="#090909" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="470" y1="145" x2="530" y2="115" stroke="#FF2E2E" strokeWidth="2" />

          {/* Animated Water Sample Packet */}
          <motion.circle
            cx="250"
            cy="75"
            r="4"
            fill="#FF2E2E"
            animate={{
              cx: [250, 330, 470, 530],
              cy: [75, 135, 145, 115]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">HARDWARE</span>
          <span className="text-ink font-semibold">ESP32 + RS485 PROBES</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">POWER BUDGET</span>
          <span className="text-ink font-semibold">DEEP SLEEP &lt; 15μA</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">LOCAL APPLICATION</span>
          <span className="text-signal-red font-bold">KERALA FLOOD WATCH</span>
        </div>
      </div>
    </div>
  );
}
