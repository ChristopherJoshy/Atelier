"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnchorArt() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-8 bg-paper-card border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Coordinates */}
      <div className="flex justify-between items-start z-10 font-mono text-[0.65rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">SUBSYSTEM</span>
          <span className="font-bold text-ink tracking-wider">RAIM/FDE KINEMATIC INTEGRITY</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">STATE</span>
          <span className="text-signal-red font-bold animate-pulse">DENIED [ANOMALY DETECTED]</span>
        </div>
      </div>

      {/* Main Vector Trajectory Field */}
      <div className="relative my-auto h-48 md:h-64 w-full flex items-center justify-center">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle Coordinate Grid Lines */}
          <line x1="50" y1="50" x2="550" y2="50" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="50" y1="150" x2="550" y2="150" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="50" y1="250" x2="550" y2="250" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="150" y1="20" x2="150" y2="280" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="300" y1="20" x2="300" y2="280" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="450" y1="20" x2="450" y2="280" stroke="#090909" strokeOpacity="0.08" strokeDasharray="3 3" />

          {/* Ground Truth Physical IMU Trajectory (Smooth Valid Curve) */}
          <path
            d="M 60 220 C 140 210, 220 180, 300 150 C 380 120, 460 90, 540 80"
            stroke="#090909"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-40"
          />

          {/* Reported GPS Path with Sudden Teleportation Violation */}
          <path
            d="M 60 220 C 140 210, 220 180, 290 152"
            stroke="#090909"
            strokeWidth="2.5"
          />

          {/* THE ANOMALY JUMP (Violation in Signal Red) */}
          <motion.path
            d="M 290 152 L 380 35 L 480 50"
            stroke="#FF2E2E"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />

          {/* Anomaly Vector Vertex Point */}
          <circle cx="290" cy="152" r="4" fill="#090909" />
          <circle cx="380" cy="35" r="5" fill="#FF2E2E" />
          <circle cx="380" cy="35" r="12" stroke="#FF2E2E" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" />

          {/* Vector Direction Callouts */}
          <text x="395" y="38" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold">
            VIOLATION: ΔV 1089 km/h [TELEPORT]
          </text>
          <text x="395" y="52" fill="#72706A" fontFamily="monospace" fontSize="9">
            PHYSICS THRESHOLD: ≤ 11.8 m/s² (1.2g)
          </text>
          <text x="180" y="240" fill="#72706A" fontFamily="monospace" fontSize="9">
            ── PHYSICAL SENSOR GROUND TRUTH (IMU + BARO)
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-[0.62rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">KINEMATIC CHECK</span>
          <span className="text-ink font-semibold">LEAST-SQUARES SLOPE</span>
        </div>
        <div>
          <span className="text-ink-faint block">ACCELERATION</span>
          <span className="text-signal-red font-semibold">14.8 m/s² [REJECTED]</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">GROUND TRUTH</span>
          <span className="text-ink font-semibold">NOAA SOLAR + ISA BARO</span>
        </div>
      </div>
    </div>
  );
}
