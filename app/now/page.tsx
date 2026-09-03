import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now — Christopher Joshy",
  description: "What Christopher Joshy is building, researching, and leading right now in Kerala, India.",
};

export default function NowPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* Top Monograph Banner */}
      <div className="border-b border-ink/15 pb-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="meta-mono-sm text-ink-faint block mb-2">PAGE // NOW</span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              CURRENT FOCUS
            </h1>
            <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mt-3 leading-relaxed">
              Real-time update on active engineering tracks, community leadership, and research.
              Inspired by Derek Sivers&apos; /now movement.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right font-mono text-xs text-ink-muted space-y-1">
            <p>CYCLE: ACTIVE 2026</p>
            <p>LOCATION: KERALA, INDIA</p>
            <p className="text-signal-red font-bold">UPDATED PERIODICALLY</p>
          </div>
        </div>
      </div>

      {/* Structured Focus Areas */}
      <div className="space-y-10 max-w-4xl">
        <section className="p-8 bg-paper-tint border border-ink/20 space-y-3">
          <span className="meta-mono-sm text-signal-red font-bold block">01 // COMMUNITY LEADERSHIP</span>
          <h2 className="text-2xl font-bold uppercase text-ink">
            Nexus Tech Lead (SJCET Palai)
          </h2>
          <p className="text-sm md:text-base text-ink-muted font-sans leading-relaxed">
            Coordinating technical teams, reviewing student architectures, and driving open-source codebases
            at St. Joseph&apos;s College of Engineering and Technology. Introducing structured Git branching strategies,
            automated CI testing, and organizing high-throughput hackathons.
          </p>
        </section>

        <section className="p-8 bg-paper-tint border border-ink/20 space-y-3">
          <span className="meta-mono-sm text-signal-red font-bold block">02 // RESEARCH &amp; AI</span>
          <h2 className="text-2xl font-bold uppercase text-ink">
            Orbit Wars Reinforcement Learning
          </h2>
          <p className="text-sm md:text-base text-ink-muted font-sans leading-relaxed">
            Iterating on JAX forward-simulation rollouts and self-play PPO heuristics. Benchmarking policy weights
            across tournament ladders (v15 through v46+), focusing on sparse terminal reward formulations to prevent reward hacking.
          </p>
        </section>

        <section className="p-8 bg-paper-tint border border-ink/20 space-y-3">
          <span className="meta-mono-sm text-signal-red font-bold block">03 // SYSTEMS SECURITY</span>
          <h2 className="text-2xl font-bold uppercase text-ink">
            ghost-deps Maintenance &amp; Slopsquatting Defense
          </h2>
          <p className="text-sm md:text-base text-ink-muted font-sans leading-relaxed">
            Maintaining the published npm package <code className="font-mono text-xs px-1.5 py-0.5 bg-paper border border-ink/15 text-ink font-bold">ghost-deps@0.1.5</code>.
            Refining ESTree AST visitor passes to detect AI-hallucinated phantom package imports in developer CI/CD pipelines.
          </p>
        </section>

        <section className="p-8 bg-paper-tint border border-ink/20 space-y-3">
          <span className="meta-mono-sm text-signal-red font-bold block">04 // SYSTEMS PROGRAMMING</span>
          <h2 className="text-2xl font-bold uppercase text-ink">
            Rust for Safety Sensor Fusion
          </h2>
          <p className="text-sm md:text-base text-ink-muted font-sans leading-relaxed">
            Porting core components of the Anchor kinematic EKF and RAIM/FDE state machine to native Rust for zero-cost
            embedded Android memory safety.
          </p>
        </section>
      </div>
    </div>
  );
}
