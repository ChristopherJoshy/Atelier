"use client";

import { motion } from "framer-motion";

export function AuraArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">EDGE VISION ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">RASPBERRY PI 4 // INSIGHTFACE ONNX</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">ANTI-SPOOF METRIC</span>
          <span className="font-bold text-signal-red uppercase text-xs">RGB LIVENESS &lt; 85ms</span>
        </div>
      </div>

      {/* Main Edge Vision Pipeline Diagram */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Camera Frame Capture */}
          <rect x="30" y="55" width="150" height="110" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="105" y="85" fill="#090909" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">CAMERA FEED</text>
          <text x="105" y="105" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">1080P @ 30 FPS</text>
          <text x="105" y="125" fill="#FF2E2E" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">LIVENESS PASS (0.98)</text>
          <text x="105" y="143" fill="#72706A" fontFamily="monospace" fontSize="8" textAnchor="middle">PHOTO-SPOOF REJECT</text>

          {/* Connection 1 */}
          <line x1="180" y1="110" x2="260" y2="110" stroke="#090909" strokeWidth="2" />

          {/* On-Device InsightFace Inference */}
          <rect x="260" y="45" width="180" height="130" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="350" y="75" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">RPI 4 NPU / ONNX</text>
          <text x="350" y="95" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">512D EMBEDDING EXTRACT</text>
          <text x="350" y="115" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">LATENCY: 82ms / FACE</text>
          <text x="350" y="133" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">ZERO CLOUD STREAMING</text>
          <text x="350" y="151" fill="#F3F1EC" fontFamily="monospace" fontSize="9" textAnchor="middle">LOCAL PRIVACY VAULT</text>

          {/* Connection 2 */}
          <line x1="440" y1="110" x2="520" y2="110" stroke="#090909" strokeWidth="2" />

          {/* Offline-First SQLite Ledger */}
          <rect x="520" y="55" width="170" height="110" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.08" rx="2" />
          <text x="605" y="85" fill="#FF2E2E" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">LOCAL SQLITE</text>
          <text x="605" y="105" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">OFFLINE BUFFER</text>
          <text x="605" y="125" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">MUTUAL TLS SYNC</text>
          <text x="605" y="143" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">ZERO-PACKET LOSS</text>

          {/* Flowing Embedding Vector */}
          <motion.circle
            cx="180"
            cy="110"
            r="4.5"
            fill="#FF2E2E"
            animate={{ cx: [180, 260, 440, 520] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">HARDWARE</span>
          <span className="text-ink font-semibold">RASPBERRY PI 4B (4GB)</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">RELIABILITY</span>
          <span className="text-ink font-semibold">CAMPUS POWER-CUT PROOF</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">CAMPUS TESTBED</span>
          <span className="text-signal-red font-bold">DEPARTMENT TEST DEPLOYED</span>
        </div>
      </div>
    </div>
  );
}
