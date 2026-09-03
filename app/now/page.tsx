import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now — Christopher Joshy",
  description: "What Christopher Joshy is building, researching, and leading right now in Kerala, India.",
};

export default function NowPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 selection:bg-black selection:text-paper">
      <div className="container-editorial section-pad">
        {/* Top Monograph Banner */}
        <div className="border-b border-line pb-8 md:pb-10 mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8">
              <span className="meta-mono-sm block mb-2">PAGE // NOW</span>
              <h1 className="display-title tracking-tighter uppercase text-ink">CURRENT FOCUS</h1>
              <p className="font-sans text-[14px] md:text-[15px] text-ink-muted max-w-xl mt-3 leading-[1.6]">
                Real-time update on active engineering tracks, community leadership, and research. Inspired by Derek Sivers&apos; /now movement.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right font-mono text-[11px] md:text-xs text-ink-muted space-y-1.5">
              <p className="tracking-wide">CYCLE: ACTIVE 2026</p>
              <p className="tracking-wide">LOCATION: KERALA, INDIA</p>
              <p className="text-signal-red font-bold">UPDATED PERIODICALLY</p>
            </div>
          </div>
        </div>

        {/* Structured Focus Areas — breathing */}
        <div className="space-y-6 md:space-y-7 max-w-4xl">
          {[
            { n: "01 // COMMUNITY LEADERSHIP", t: "Nexus Tech Lead (SJCET Palai)", d: "Coordinating technical teams, reviewing student architectures, and driving open-source codebases at St. Joseph's College of Engineering and Technology. Introducing structured Git branching strategies, automated CI testing, and organizing high-throughput hackathons." },
            { n: "02 // RESEARCH & AI", t: "Orbit Wars Reinforcement Learning", d: "Iterating on JAX forward-simulation rollouts and self-play PPO heuristics. Benchmarking policy weights across tournament ladders (v15 through v46+), focusing on sparse terminal reward formulations to prevent reward hacking." },
            { n: "03 // SYSTEMS SECURITY", t: "ghost-deps Maintenance & Slopsquatting Defense", d: "Maintaining the published npm package ghost-deps@0.1.5. Refining ESTree AST visitor passes to detect AI-hallucinated phantom package imports in developer CI/CD pipelines." },
            { n: "04 // SYSTEMS PROGRAMMING", t: "Rust for Safety Sensor Fusion", d: "Porting core components of the Anchor kinematic EKF and RAIM/FDE state machine to native Rust for zero-cost embedded Android memory safety." },
          ].map((s) => (
            <section key={s.n} className="card-editorial p-6 md:p-8 space-y-3">
              <span className="meta-mono-sm text-signal-red font-bold block">{s.n}</span>
              <h2 className="text-[20px] md:text-2xl font-bold uppercase text-ink tracking-tight">{s.t}</h2>
              <p className="text-[14px] md:text-[15px] text-ink-muted font-sans leading-[1.65]">{s.d}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
