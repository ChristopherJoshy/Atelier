"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSpotlight() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b border-line bg-paper relative"
      aria-label="About Christopher Joshy & Systems Philosophy"
    >
      <div className="container-editorial section-pad">
        {/* Section Monograph Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 md:pb-10 border-b border-line"
        >
          <div className="md:col-span-5">
            <span className="meta-mono-sm block">STAGE 05 // SYSTEMS PHILOSOPHY</span>
            <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-2 leading-[0.9]">
              CHRISTOPHER JOSHY
            </h2>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-md leading-[1.6]">
              Computer engineer who prefers the systems that expose truth under compression and latency budgets.
            </p>
          </div>

          <div className="md:col-span-3 flex md:flex-col md:items-end justify-between gap-2 font-mono text-xs text-ink-muted">
            <span className="text-ink-faint text-[11px] tracking-[0.12em] uppercase">COMMUNITY ROLE</span>
            <span className="text-ink font-bold text-[13px]">TECH LEAD // NEXUS</span>
            <Link href="/about" className="text-signal-red font-bold hover:underline underline-offset-4 text-[13px]">
              FULL PORTRAIT →
            </Link>
          </div>
        </motion.div>

        {/* Main Editorial Portrait Composition — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8 md:pt-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 md:p-8 bg-paper-tint border border-line space-y-6">
              <div className="flex justify-between items-baseline font-mono text-[11px] text-ink-faint border-b border-line/60 pb-3 tracking-wide">
                <span>FIELD RECORD // CJ-2026</span>
                <span className="text-signal-red font-semibold">AUTHENTIC PROFILE</span>
              </div>

              {/* Monogram Box */}
              <div className="aspect-[4/3] bg-ink text-paper p-6 md:p-7 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 28px)` }} />
                <div className="flex justify-between items-start font-mono text-[11px] text-paper/45 relative">
                  <span>IDENTITY NO: 144864811</span>
                  <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
                </div>

                <div className="space-y-1.5 relative">
                  <span className="font-mono text-[11px] text-signal-red uppercase tracking-[0.16em] block font-bold">
                    COMPUTER ENGINEER
                  </span>
                  <h3 className="text-[26px] sm:text-3xl md:text-[2rem] font-bold tracking-tight uppercase text-paper leading-none">
                    CHRISTOPHER JOSHY
                  </h3>
                  <p className="font-mono text-[11px] text-paper/60 tracking-wider">SJCET PALAI · B.TECH CSE (2023—2027)</p>
                </div>

                <div className="pt-4 border-t border-paper/15 flex justify-between items-center font-mono text-[11px] text-paper/50 relative">
                  <span>09°58′N 76°31′E</span>
                  <span>KERALA, INDIA</span>
                </div>
              </div>

              <div className="pt-2 font-mono text-[12px] text-ink-muted space-y-2.5">
                {[
                  ["INSTITUTION", "KTU / SJCET PALAI"],
                  ["DEGREE TRACK", "B.Tech Computer Science & Eng"],
                  ["COMMUNITY LEAD", "Nexus Open Source Community"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-line/60 pb-2">
                    <span className="text-ink-faint text-[11px] tracking-[0.08em] uppercase">{k}</span>
                    <span className={`text-right ${k === "COMMUNITY LEAD" ? "text-signal-red font-bold" : "text-ink font-semibold"}`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Systems Philosophy & 4 Technical Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="meta-mono text-signal-red font-bold block mb-3">[ENGINEERING MANIFESTO]</span>
              <blockquote className="display-title text-ink font-bold leading-[0.92] tracking-tight text-[2.2rem] md:text-[3rem] lg:text-[3.4rem]">
                &ldquo;I LIKE BUILDING SYSTEMS THAT ARE DIFFICULT TO FAKE.&rdquo;
              </blockquote>
              <p className="font-sans text-[15px] md:text-[16px] text-ink-muted leading-[1.65] mt-5 max-w-2xl">
                Modern engineering is saturated with thin API wrappers and synthetic demos that crumble under edge cases. I
                focus on systems where physics, mathematics, and execution speed dictate whether an architecture survives:
                sensor integrity, multi-agent reinforcement learning, and untrusted code execution.
              </p>
            </div>

            {/* The 4 Technical Pillars Grid — larger, breathing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-6 border-t border-line/60">
              {[
                { n: "01 // INVARIANTS", t: "Physical Sensors", d: "Hardware limits: accelerometer gravity, barometric pressure, and solar ephemeris over mock flags." },
                { n: "02 // SAFETY GATES", t: "Deterministic State", d: "State machines that isolate failures. Recovery requires mathematical consistency, not optimism." },
                { n: "03 // RUNTIMES", t: "High Performance", d: "JAX vectorization, sub-50ms WebSocket netcode, and Linux nsjail sandbox isolation." },
                { n: "04 // LOCAL-FIRST", t: "Edge AI Security", d: "Quantized 4-bit edge inference on NPU hardware with zero cloud dependencies." },
              ].map((p) => (
                <div key={p.n} className="card-editorial p-5 md:p-6 space-y-2">
                  <span className="font-mono text-[11px] text-signal-red font-bold block tracking-[0.08em]">{p.n}</span>
                  <h4 className="font-bold text-[14px] text-ink uppercase tracking-tight">{p.t}</h4>
                  <p className="font-sans text-[13.5px] text-ink-muted leading-[1.6]">{p.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
