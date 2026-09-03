import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy — Christopher Joshy",
  description: "Computer Engineer, Nexus Tech Lead, and systems builder based in Kerala, India. Working across AI, systems programming, and security.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad">
        {/* Top Monograph Banner */}
        <div className="border-b border-line pb-8 md:pb-10 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">INDEX / 05 // SYSTEMS PORTRAIT</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">CHRISTOPHER JOSHY</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                Computer Engineer, institutional community lead, and systems developer based in Kerala, India. Building
                architectures governed by physical constraints rather than software illusions.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">LOCATION: 09°58′N 76°31′E (KERALA, IN)</p>
              <p className="text-signal-red font-bold">TECH LEAD // NEXUS OPEN SOURCE</p>
            </div>
          </div>
        </div>

        {/* Main Editorial Portrait Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-line">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 bg-paper-tint border border-line relative">
              <div className="flex justify-between items-baseline font-mono text-[11px] text-ink-faint border-b border-line pb-3 mb-6 tracking-wide">
                <span>FIELD SPECIMEN // CJ-2026</span>
                <span className="text-signal-red font-semibold">AUTHENTIC RECORD</span>
              </div>

              <div className="aspect-[4/3] bg-ink text-paper p-6 md:p-7 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 28px)` }} />
                <div className="flex justify-between items-start font-mono text-[11px] text-paper/45 relative">
                  <span>IDENTITY NO: 144864811</span>
                  <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
                </div>

                <div className="space-y-1.5 relative">
                  <span className="font-mono text-[11px] text-signal-red uppercase tracking-[0.16em] block font-bold">
                    COMPUTER ENGINEER
                  </span>
                  <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-paper leading-none">
                    CHRISTOPHER JOSHY
                  </h2>
                  <p className="font-mono text-[11px] text-paper/60 tracking-wider">SJCET PALAI · B.TECH CSE (2023—2027)</p>
                </div>

                <div className="pt-4 border-t border-paper/15 flex justify-between items-center font-mono text-[11px] text-paper/50 relative">
                  <span>KERALA, INDIA</span>
                  <span>KTU ECOSYSTEM</span>
                </div>
              </div>

              <div className="pt-6 font-mono text-[12px] text-ink-muted space-y-2.5">
                {[
                  ["INSTITUTION", "SJCET Palai"],
                  ["COMMUNITY", "Tech Lead @ Nexus"],
                  ["KAGGLE MEDAL", "Silver (Top 3%)"],
                  ["CORE FOCUS", "AI / Systems / Security"],
                ].map(([k, v], i, arr) => (
                  <div key={k} className={`flex justify-between gap-4 pb-2 ${i < arr.length - 1 ? "border-b border-line" : ""}`}>
                    <span className="text-ink-faint text-[11px] tracking-[0.08em] uppercase">{k}</span>
                    <span className={`${k === "KAGGLE MEDAL" ? "text-signal-red font-bold" : "text-ink font-semibold"} text-right`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="meta-mono-sm block mb-2">SYSTEMS PHILOSOPHY</span>
              <blockquote className="display-title text-ink tracking-tight leading-[0.92] text-[2.2rem] md:text-[3rem] lg:text-[3.6rem] uppercase font-bold">
                &ldquo;I LIKE BUILDING SYSTEMS THAT ARE DIFFICULT TO FAKE.&rdquo;
              </blockquote>
            </div>

            <div className="space-y-4 font-sans text-[14px] md:text-[15px] text-ink leading-[1.65]">
              <p>
                Much of modern software is paper-thin: generic wrappers over external cloud APIs, cosmetic user interfaces
                disconnected from underlying hardware, and security layers that rely on software trust flags.
              </p>
              <p className="text-ink-muted">
                My engineering focus is grounded in physical truth: sensor fusion algorithms that reject coordinates when
                kinematics disagree with gravity, competitive reinforcement learning models that optimize rollouts in JAX, and
                supply-chain tooling that parses AST import trees directly to prevent hallucinated dependency attacks.
              </p>
              <p className="text-ink-muted">
                As Tech Lead of Nexus at SJCET Palai, I direct student engineering squads, organize technical hackathons,
                review architecture diagrams, and build open-source infrastructure that ships into actual production.
              </p>
            </div>

            {/* Core Four Technical Pillars — editorial cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-6 border-t border-line">
              {[
                { n: "PILLAR 01", t: "PHYSICAL INVARIANTS", d: "Anchoring safety and truth to real-world physics, conservation laws, and hardware sensors." },
                { n: "PILLAR 02", t: "DETERMINISTIC GATES", d: "AI is advisory; deterministic state machines and mathematically auditable rules govern critical decisions." },
                { n: "PILLAR 03", t: "HIGH-PERFORMANCE RUNTIMES", d: "Leveraging JAX vectorization, raw Canvas 2D loops, and Linux namespace sandboxes to eliminate framework bloat." },
                { n: "PILLAR 04", t: "LOCAL-FIRST PRIVACY", d: "Running computer vision and speech recognition on edge Raspberry Pi and mobile hardware without centralized streaming." },
              ].map((p) => (
                <div key={p.n} className="card-editorial p-5 md:p-6">
                  <span className="font-mono text-[11px] text-signal-red font-bold tracking-[0.08em]">{p.n}</span>
                  <h3 className="font-bold text-ink uppercase mt-1.5 text-[13px] tracking-tight">{p.t}</h3>
                  <p className="text-[13.5px] text-ink-muted mt-1.5 font-sans leading-[1.6]">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
