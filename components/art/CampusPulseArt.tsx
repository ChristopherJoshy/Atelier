"use client";

import { motion } from "framer-motion";

export function CampusPulseArt() {
  return (
    <div className="w-full h-full min-h-[360px] relative flex flex-col justify-between p-6 md:p-8 bg-paper-tint border border-ink/15 overflow-hidden select-none">
      {/* Top Status Header */}
      <div className="flex justify-between items-start z-10 font-mono text-xs text-ink-muted border-b border-ink/10 pb-3">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">CRYPTOGRAPHIC ENGINE</span>
          <span className="font-bold text-ink tracking-wider uppercase text-xs sm:text-sm">HMAC-SHA256 SIGNED DYNAMIC QR LEDGER</span>
        </div>
        <div className="text-right">
          <span className="text-ink-faint text-[0.68rem] block">STACK WARS 2026</span>
          <span className="font-bold text-signal-red uppercase text-xs">1ST PLACE SOLO WINNER</span>
        </div>
      </div>

      {/* Main Dynamic QR Cryptography Pipeline */}
      <div className="relative my-auto w-full py-4 flex items-center justify-center">
        <svg
          viewBox="0 0 720 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[220px]"
        >
          {/* Stage 1: Organizer Session Signer */}
          <rect x="30" y="55" width="160" height="110" stroke="#090909" strokeWidth="2" fill="#F3F1EC" rx="2" />
          <text x="110" y="85" fill="#090909" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">SESSION GENERATOR</text>
          <text x="110" y="105" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">10s ROTATING SEED</text>
          <text x="110" y="125" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">EVENT_ID + TIMESTAMP</text>
          <text x="110" y="143" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">HMAC SIGNATURE HASH</text>

          {/* Connection 1 */}
          <line x1="190" y1="110" x2="270" y2="110" stroke="#090909" strokeWidth="2" />

          {/* Stage 2: Attendee Device Verification */}
          <rect x="270" y="45" width="170" height="130" stroke="#090909" strokeWidth="2" fill="#090909" rx="2" />
          <text x="355" y="75" fill="#F3F1EC" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">DEVICE SCANNER</text>
          <text x="355" y="95" fill="#FF2E2E" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">ANTI-PROXY GUARD</text>
          <text x="355" y="115" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">GEOLOCATION RADIUS CHECK</text>
          <text x="355" y="133" fill="#9C988F" fontFamily="monospace" fontSize="9" textAnchor="middle">CLIENT NONCE VALIDATION</text>
          <text x="355" y="151" fill="#F3F1EC" fontFamily="monospace" fontSize="9" textAnchor="middle">SINGLE-USE ENFORCEMENT</text>

          {/* Connection 2 */}
          <line x1="440" y1="110" x2="520" y2="110" stroke="#090909" strokeWidth="2" />

          {/* Stage 3: KTU Activity Ledger Settlement */}
          <rect x="520" y="55" width="170" height="110" stroke="#FF2E2E" strokeWidth="2" fill="#FF2E2E" fillOpacity="0.08" rx="2" />
          <text x="605" y="85" fill="#FF2E2E" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">ACTIVITY LEDGER</text>
          <text x="605" y="105" fill="#090909" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">SUPABASE RLS ATOMIC</text>
          <text x="605" y="125" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">KTU POINT CERTIFICATE</text>
          <text x="605" y="143" fill="#72706A" fontFamily="monospace" fontSize="9" textAnchor="middle">IMMUTABLE LOG RECORD</text>

          {/* Flowing QR Verification Packet */}
          <motion.circle
            cx="190"
            cy="110"
            r="4.5"
            fill="#FF2E2E"
            animate={{ cx: [190, 270, 440, 520] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-ink/10 pt-3 font-mono text-xs text-ink-muted">
        <div>
          <span className="text-ink-faint text-[0.68rem] block">BUILD METRIC</span>
          <span className="text-ink font-semibold">SOLO 24-HOUR HACKATHON</span>
        </div>
        <div>
          <span className="text-ink-faint text-[0.68rem] block">SECURITY INVARIANT</span>
          <span className="text-ink font-semibold">ZERO PROXY ATTENDANCE</span>
        </div>
        <div className="sm:text-right">
          <span className="text-ink-faint text-[0.68rem] block">COMPETITIVE OUTCOME</span>
          <span className="text-signal-red font-bold">1ST OF 47 TEAMS 🏆</span>
        </div>
      </div>
    </div>
  );
}
