"use client";

import { motion } from "framer-motion";

export function VoiceShieldArt() {
  // Generate a matrix of spectral frequency bins
  const rows = 6;
  const cols = 16;

  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-8 bg-paper-card border border-ink/15 overflow-hidden select-none">
      {/* Top Monograph Status */}
      <div className="flex justify-between items-start z-10 font-mono text-[0.65rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">SIGNAL ANALYSIS</span>
          <span className="font-bold text-ink tracking-wider">MFCC + WAV2VEC2 LATENT EMBEDDING</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">VERDICT</span>
          <span className="text-signal-red font-bold">SYNTHETIC VOCODER DETECTED</span>
        </div>
      </div>

      {/* Main Spectrogram Frequency Grid Field */}
      <div className="relative my-auto h-48 md:h-64 w-full flex flex-col items-center justify-center">
        {/* Top Waveform Line */}
        <div className="w-full h-12 flex items-center justify-center mb-3">
          <svg viewBox="0 0 500 60" fill="none" className="w-full h-full">
            <path
              d="M 10 30 Q 50 5, 90 30 T 170 30 T 250 10 T 330 50 T 410 20 T 490 30"
              stroke="#090909"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.4"
            />
            {/* Anomalous high-frequency phase glitch in red */}
            <path
              d="M 270 28 L 285 5 L 300 55 L 315 8 L 330 50"
              stroke="#FF2E2E"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* 2D Spectrogram Heat Bins */}
        <div className="grid grid-cols-16 gap-1 w-full max-w-lg">
          {Array.from({ length: rows * cols }).map((_, idx) => {
            const row = Math.floor(idx / cols);
            const col = idx % cols;
            // Introduce synthetic anomaly cluster in columns 9 to 11
            const isAnomaly = (col >= 9 && col <= 11 && row <= 3);

            return (
              <motion.div
                key={idx}
                className={`h-4 sm:h-5 transition-colors duration-300 ${
                  isAnomaly
                    ? "bg-signal-red"
                    : (row + col) % 3 === 0
                    ? "bg-ink"
                    : (row + col) % 2 === 0
                    ? "bg-ink/60"
                    : "bg-ink/20"
                }`}
                animate={
                  isAnomaly
                    ? { opacity: [0.6, 1, 0.6] }
                    : { opacity: [0.4, 0.9, 0.4] }
                }
                transition={{
                  duration: isAnomaly ? 1.0 : 2.5,
                  repeat: Infinity,
                  delay: (col * 0.05) + (row * 0.1),
                }}
              />
            );
          })}
        </div>

        {/* Anomaly Annotation */}
        <div className="w-full max-w-lg flex justify-between items-center pt-2 font-mono text-[0.62rem] text-ink-muted">
          <span>0.0 kHz ───────── NYQUIST 4.0 kHz</span>
          <span className="text-signal-red font-semibold">VOCODER PHASE ERROR: +18.4 dB</span>
        </div>
      </div>

      {/* Bottom Telemetry Verification Bar */}
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-[0.62rem] text-ink-muted">
        <div>
          <span className="text-ink-faint block">COMPUTE PROFILE</span>
          <span className="text-ink font-semibold">CPU-ONLY LOW-LATENCY REST</span>
        </div>
        <div>
          <span className="text-ink-faint block">TARGET SECTOR</span>
          <span className="text-ink font-semibold">INDIAN BANKING TELEPHONY</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint block">CHALLENGE</span>
          <span className="text-ink font-semibold">UCO BANK PSB HACKATHON</span>
        </div>
      </div>
    </div>
  );
}
