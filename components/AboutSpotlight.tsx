"use client";

import Link from "next/link";

export function AboutSpotlight() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/15 bg-paper relative"
      aria-label="About Christopher Joshy & Systems Philosophy"
    >
      {/* Section Monograph Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-ink/15">
        <div className="md:col-span-5">
          <span className="meta-mono-sm block text-ink-faint">STAGE 05 // SYSTEMS PHILOSOPHY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-ink mt-1">
            CHRISTOPHER JOSHY
          </h2>
        </div>

        <div className="md:col-span-4 flex items-end">
          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            Computer Engineer, institutional community lead, and systems developer based in Kerala, India.
            Building architectures governed by physical constraints rather than software illusions.
          </p>
        </div>

        <div className="md:col-span-3 flex md:flex-col md:items-end justify-between font-mono text-xs text-ink-muted">
          <span className="text-ink-faint">COMMUNITY ROLE</span>
          <span className="text-ink font-bold">TECH LEAD // NEXUS</span>
          <Link
            href="/about"
            className="hover:text-signal-red transition-colors underline decoration-ink/20 font-bold"
          >
            FULL PHILOSOPHY →
          </Link>
        </div>
      </div>

      {/* Main Editorial Portrait Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
        {/* Left Column: Authentic Monograph Badge (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 md:p-8 bg-paper-tint border border-ink/20 relative">
            <div className="flex justify-between items-baseline font-mono text-[0.65rem] text-ink-faint border-b border-ink/10 pb-3 mb-6">
              <span>FIELD RECORD // CJ-2026</span>
              <span className="text-signal-red font-semibold">AUTHENTIC PROFILE</span>
            </div>

            {/* Monogram Box & Editorial Graphic */}
            <div className="aspect-[4/3] bg-ink text-paper p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start font-mono text-[0.65rem] text-paper/40">
                <span>IDENTITY NO: 144864811</span>
                <span className="w-2 h-2 rounded-full bg-signal-red" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs text-signal-red uppercase tracking-widest block font-bold">
                  COMPUTER ENGINEER
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-paper">
                  CHRISTOPHER JOSHY
                </h3>
                <p className="font-mono text-[0.7rem] text-paper/60 tracking-wider">
                  SJCET PALAI · B.TECH CSE (2023—2027)
                </p>
              </div>

              <div className="pt-4 border-t border-paper/15 flex justify-between items-center font-mono text-[0.65rem] text-paper/50">
                <span>09°58&apos;N 76°31&apos;E</span>
                <span>KERALA, INDIA</span>
              </div>
            </div>

            <div className="pt-6 font-mono text-xs text-ink-muted space-y-2">
              <div className="flex justify-between border-b border-ink/10 pb-1.5">
                <span className="text-ink-faint">INSTITUTION</span>
                <span className="text-ink font-semibold">KTU / SJCET PALAI</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-1.5">
                <span className="text-ink-faint">DEGREE TRACK</span>
                <span className="text-ink font-semibold">B.Tech Computer Science &amp; Eng</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-1.5">
                <span className="text-ink-faint">COMMUNITY LEAD</span>
                <span className="text-signal-red font-bold">Nexus Open Source Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Systems Philosophy & 4 Technical Pillars (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="meta-mono text-signal-red font-bold block mb-2">
              [ENGINEERING MANIFESTO]
            </span>
            <blockquote className="display-title text-ink font-bold leading-[0.95] tracking-tight">
              &ldquo;I LIKE BUILDING SYSTEMS THAT ARE DIFFICULT TO FAKE.&rdquo;
            </blockquote>
            <p className="font-sans text-sm md:text-base text-ink-muted leading-relaxed mt-4">
              Modern engineering is saturated with thin API wrappers and synthetic demos that crumble
              under edge cases. I focus on systems where physics, mathematics, and execution speed dictate
              whether an architecture survives: sensor integrity, multi-agent reinforcement learning, and
              untrusted code execution.
            </p>
          </div>

          {/* The 4 Technical Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-ink/10">
            <div className="p-4 bg-paper-tint border border-ink/15 space-y-1">
              <span className="font-mono text-xs text-signal-red font-bold block">01 // INVARIANTS</span>
              <h4 className="font-bold text-sm text-ink uppercase">Physical Sensors</h4>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                Hardware limits: accelerometer gravity, barometric pressure, and solar ephemeris over mock flags.
              </p>
            </div>

            <div className="p-4 bg-paper-tint border border-ink/15 space-y-1">
              <span className="font-mono text-xs text-signal-red font-bold block">02 // SAFETY GATES</span>
              <h4 className="font-bold text-sm text-ink uppercase">Deterministic State</h4>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                State machines that isolate failures. Recovery requires mathematical consistency, not optimism.
              </p>
            </div>

            <div className="p-4 bg-paper-tint border border-ink/15 space-y-1">
              <span className="font-mono text-xs text-signal-red font-bold block">03 // RUNTIMES</span>
              <h4 className="font-bold text-sm text-ink uppercase">High Performance</h4>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                JAX vectorization, sub-50ms WebSocket netcode, and Linux nsjail sandbox isolation.
              </p>
            </div>

            <div className="p-4 bg-paper-tint border border-ink/15 space-y-1">
              <span className="font-mono text-xs text-signal-red font-bold block">04 // LOCAL-FIRST</span>
              <h4 className="font-bold text-sm text-ink uppercase">Edge AI Security</h4>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                Quantized 4-bit edge inference on NPU hardware with zero cloud dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
