"use client";

import { motion } from "framer-motion";

export function SahayiArt() {
  const bars = [14, 28, 45, 78, 92, 54, 32, 68, 85, 42, 22, 60, 95, 72, 38, 18, 52, 88, 64, 30];

  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-8 bg-paper-card border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Status */}
      <div className="flex justify-between items-start z-10 font-mono text-[0.65rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">PIPELINE</span>
          <span className="font-bold text-ink tracking-wider">TWILIO 8kHz STREAM ➔ SARVAM INDIC ASR</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">SAFETY BRAKE</span>
          <span className="text-signal-red font-bold">&lt; 1ms [DETERMINISTIC INTERCEPT]</span>
        </div>
      </div>

      {/* Main Acoustic Waveform & Indic Typography Field */}
      <div className="relative my-auto h-48 md:h-64 w-full flex flex-col items-center justify-center">
        {/* Layered Language Typography Background (Faint Watermark) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none font-bold text-4xl sm:text-6xl text-ink tracking-widest uppercase">
          MALAYALAM // INDIC
        </div>

        {/* Dynamic Acoustic Spectrum Bars */}
        <div className="flex items-center gap-1.5 md:gap-2 h-32 w-full justify-center px-4">
          {bars.map((height, i) => {
            const isSafetySpike = i === 8 || i === 12;
            return (
              <motion.div
                key={i}
                className={`w-1.5 sm:w-2 rounded-none ${
                  isSafetySpike ? "bg-signal-red" : "bg-ink"
                }`}
                animate={{
                  height: [
                    `${height * 0.4}%`,
                    `${height}%`,
                    `${height * 0.3}%`,
                    `${height * 0.8}%`,
                  ],
                }}
                transition={{
                  duration: 1.4 + (i % 4) * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            );
          })}
        </div>

        {/* Telemetry Annotation Line */}
        <div className="flex items-center justify-between w-full max-w-md pt-4 border-t border-ink/10 font-mono text-[0.65rem] text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            <span>STREAM P50: ~12ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-red" />
            <span className="text-signal-red font-semibold">EMERGENCY DETECTOR: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-[0.62rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">ASR MODEL</span>
          <span className="text-ink font-semibold">SARVAM AI REGIONAL</span>
        </div>
        <div>
          <span className="text-ink-faint block">CLINICAL DIALOGUE</span>
          <span className="text-ink font-semibold">LANGGRAPH ORCHESTRATION</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">RECOGNITION</span>
          <span className="text-ink font-semibold">TECHASTH&apos;26 FINALIST</span>
        </div>
      </div>
    </div>
  );
}
