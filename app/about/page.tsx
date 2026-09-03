import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy — Christopher Joshy",
  description: "Computer Engineer, Nexus Tech Lead, and systems builder based in Kerala, India. Working across AI, systems programming, and security.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">INDEX / 05 // SYSTEMS PORTRAIT</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              CHRISTOPHER JOSHY
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              Computer Engineer, institutional community lead, and systems developer based in Kerala, India.
              Building architectures governed by physical constraints rather than software illusions.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>LOCATION: 09°58&apos;N 76°31&apos;E (KERALA, IN)</p>
            <p className="text-signal-red font-bold">TECH LEAD // NEXUS OPEN SOURCE</p>
          </div>
        </div>
      </div>

      {/* Main Editorial Portrait Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-ink/15">
        {/* Left Column: Authentic Archival Plate / Monograph (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-paper-tint border border-ink/20 relative">
            <div className="flex justify-between items-baseline font-mono text-[0.65rem] text-ink-faint border-b border-ink/10 pb-3 mb-6">
              <span>FIELD SPECIMEN // CJ-2026</span>
              <span className="text-signal-red font-semibold">AUTHENTIC RECORD</span>
            </div>

            {/* Monogram Box & Editorial Graphic */}
            <div className="aspect-[4/3] bg-ink text-paper p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start font-mono text-[0.65rem] text-paper/40">
                <span>IDENTITY NO: 144864811</span>
                <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs text-signal-red uppercase tracking-widest block font-bold">
                  COMPUTER ENGINEER
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-paper">
                  CHRISTOPHER JOSHY
                </h2>
                <p className="font-mono text-[0.7rem] text-paper/60 tracking-wider">
                  SJCET PALAI · B.TECH CSE (2023—2027)
                </p>
              </div>

              <div className="pt-4 border-t border-paper/15 flex justify-between items-center font-mono text-[0.65rem] text-paper/50">
                <span>KERALA, INDIA</span>
                <span>KTU ECOSYSTEM</span>
              </div>
            </div>

            <div className="pt-6 font-mono text-xs text-ink-muted space-y-2">
              <div className="flex justify-between border-b border-ink/10 pb-1.5">
                <span className="text-ink-faint">INSTITUTION</span>
                <span className="text-ink font-semibold">SJCET Palai</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-1.5">
                <span className="text-ink-faint">COMMUNITY</span>
                <span className="text-ink font-semibold">Tech Lead @ Nexus</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-1.5">
                <span className="text-ink-faint">KAGGLE MEDAL</span>
                <span className="text-signal-red font-bold">Silver (Top 3%)</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span className="text-ink-faint">CORE FOCUS</span>
                <span className="text-ink font-semibold">AI / Systems / Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Philosophy & Technical Manifesto (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="meta-mono-sm text-ink-faint block mb-2">SYSTEMS PHILOSOPHY</span>
            <blockquote className="display-title text-ink tracking-tight leading-[0.94] uppercase">
              &ldquo;I LIKE BUILDING SYSTEMS THAT ARE DIFFICULT TO FAKE.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-4 font-sans text-sm md:text-base text-ink leading-relaxed">
            <p>
              Much of modern software is paper-thin: generic wrappers over external cloud APIs, cosmetic user interfaces
              disconnected from underlying hardware, and security layers that rely on software trust flags.
            </p>
            <p className="text-ink-muted">
              My engineering focus is grounded in physical truth: sensor fusion algorithms that reject coordinates
              when kinematics disagree with gravity, competitive reinforcement learning models that optimize rollouts in JAX,
              and supply-chain tooling that parses AST import trees directly to prevent hallucinated dependency attacks.
            </p>
            <p className="text-ink-muted">
              As Tech Lead of Nexus at SJCET Palai, I direct student engineering squads, organize technical hackathons,
              review architecture diagrams, and build open-source infrastructure that ships into actual production.
            </p>
          </div>

          {/* Core Four Technical Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-ink/10">
            <div className="p-4 bg-paper-tint border border-ink/15">
              <span className="meta-mono-sm text-signal-red block font-bold">PILLAR 01</span>
              <h3 className="font-bold text-ink uppercase mt-1">PHYSICAL INVARIANTS</h3>
              <p className="text-xs text-ink-muted mt-1 font-sans">
                Anchoring safety and truth to real-world physics, conservation laws, and hardware sensors.
              </p>
            </div>

            <div className="p-4 bg-paper-tint border border-ink/15">
              <span className="meta-mono-sm text-signal-red block font-bold">PILLAR 02</span>
              <h3 className="font-bold text-ink uppercase mt-1">DETERMINISTIC GATES</h3>
              <p className="text-xs text-ink-muted mt-1 font-sans">
                AI is advisory; deterministic state machines and mathematically auditable rules govern critical decisions.
              </p>
            </div>

            <div className="p-4 bg-paper-tint border border-ink/15">
              <span className="meta-mono-sm text-signal-red block font-bold">PILLAR 03</span>
              <h3 className="font-bold text-ink uppercase mt-1">HIGH-PERFORMANCE RUNTIMES</h3>
              <p className="text-xs text-ink-muted mt-1 font-sans">
                Leveraging JAX vectorization, raw Canvas 2D loops, and Linux namespace sandboxes to eliminate framework bloat.
              </p>
            </div>

            <div className="p-4 bg-paper-tint border border-ink/15">
              <span className="meta-mono-sm text-signal-red block font-bold">PILLAR 04</span>
              <h3 className="font-bold text-ink uppercase mt-1">LOCAL-FIRST PRIVACY</h3>
              <p className="text-xs text-ink-muted mt-1 font-sans">
                Running computer vision and speech recognition on edge Raspberry Pi and mobile hardware without centralized streaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
