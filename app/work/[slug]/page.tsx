import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import { ProjectVisualArt } from "@/components/art/ProjectVisualArt";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Christopher Joshy`,
    description: `${project.heroStatement} ${project.summary}`,
    openGraph: {
      title: `${project.title} — Systems Case Study`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isAnchor = project.slug === "anchor";
  const isChadman = project.slug === "chadman";
  const isGhostDeps = project.slug === "ghost-deps";
  const isFeatured = project.tier === "featured" || isAnchor || isChadman || isGhostDeps;

  return (
    <article className="min-h-screen bg-paper text-ink pt-20 pb-24 px-6 md:px-12 selection:bg-black selection:text-paper">
      {/* 01. NAVIGATION BACK LINK & METADATA BREADCRUMB */}
      <div className="border-b border-ink/15 pb-6 mb-10 pt-4 flex flex-col sm:flex-row justify-between sm:items-baseline gap-4">
        <div className="flex items-baseline gap-3">
          <Link
            href="/work"
            className="font-mono text-xs font-bold text-ink hover:text-signal-red transition-colors flex items-center gap-1.5"
          >
            <span>← SELECTED WORK</span>
          </Link>
          <span className="font-mono text-xs text-ink-faint">/</span>
          <span className="font-mono text-xs font-semibold text-ink-muted uppercase">
            {isFeatured ? `FEATURED MONOGRAPH ${project.num}` : `SECONDARY ARCHITECTURE ${project.num}`}
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-ink-muted">
          <span>YEAR: {project.year}</span>
          <span>STATUS: <strong className="text-ink">{project.status}</strong></span>
          {project.verified && (
            <span className="text-signal-red font-bold">● VERIFIED RECORD</span>
          )}
        </div>
      </div>

      {/* 02. HERO MONUMENTAL STATEMENT & ARTWORK */}
      <section className="pb-16 border-b border-ink/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="meta-mono-sm block text-ink-faint">
              MONOGRAPH // {project.category.toUpperCase()}
            </span>
            <h1 className="display-title tracking-tighter uppercase text-ink">
              {project.heroStatement}
            </h1>
            {project.heroSubStatement && (
              <p className="font-mono text-xs md:text-sm text-signal-red font-bold tracking-wider uppercase">
                {project.heroSubStatement}
              </p>
            )}
            <p className="font-sans text-base md:text-lg text-ink-muted leading-relaxed pt-2">
              {project.summary}
            </p>

            {/* Quick Metrics Strip */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-ink/10">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3 bg-paper-tint border border-ink/15">
                    <span className="meta-mono-sm block text-ink-faint">{m.label}</span>
                    <span className={`text-xl md:text-2xl font-bold tracking-tight mt-0.5 block ${m.isHighlight ? "text-signal-red" : "text-ink"}`}>
                      {m.value}
                    </span>
                    {m.annotation && (
                      <span className="font-mono text-[0.62rem] text-ink-muted block mt-0.5">
                        {m.annotation}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Vector Visual Metaphor Installation */}
          <div className="lg:col-span-6">
            <div className="p-2 border border-ink/20 bg-paper-tint shadow-sm">
              <ProjectVisualArt slug={project.slug} />
            </div>
            <p className="font-mono text-[0.65rem] text-ink-muted mt-2 text-right">
              VISUAL METAPHOR: {project.visualMetaphor}
            </p>
          </div>
        </div>
      </section>

      {/* 03. PROBLEM & INSIGHT (SPLIT EDITORIAL SECTION) */}
      <section className="py-16 border-b border-ink/15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <span className="meta-mono-sm text-ink-faint block mb-1">SECTION 01 // ANALYSIS</span>
            <h2 className="editorial-h2 text-ink">THE ASYMMETRY</h2>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="meta-mono text-signal-red font-bold block">[THE PROBLEM]</span>
            <p className="font-sans text-sm md:text-base text-ink leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="md:col-span-5 space-y-3 border-l md:border-ink/15 pl-0 md:pl-8">
            <span className="meta-mono text-ink font-bold block">[THE PHYSICAL INSIGHT]</span>
            <p className="font-sans text-sm md:text-base text-ink-muted leading-relaxed">
              {project.insight}
            </p>
          </div>
        </div>
      </section>

      {/* 04A. ANCHOR-SPECIFIC BENCHMARK EXPERIENCE */}
      {isAnchor && (
        <>
          {/* SCREEN 04/05: THE SIX SENSOR PHYSICS CHECKS */}
          <section className="py-16 border-b border-ink/15">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="meta-mono-sm text-ink-faint block mb-1">SECTION 02 // SENSOR FUSION ENGINE</span>
                <h2 className="display-title text-ink">SIX INDEPENDENT PHYSICS CHECKS</h2>
              </div>
              <span className="font-mono text-xs text-signal-red font-bold">
                7 FUSED SENSORS · DETERMINISTIC · ZERO CLOUD
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.physicsChecks?.map((check, i) => (
                <div
                  key={check.name}
                  className="p-6 bg-paper-tint border border-ink/15 flex flex-col justify-between space-y-4 hover:border-ink transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-2 font-mono text-xs">
                      <span className="text-signal-red font-bold">CHECK 0{i + 1}</span>
                      <span className="text-ink-faint">{check.file}</span>
                    </div>
                    <h3 className="text-xl font-bold text-ink uppercase">
                      {check.name}
                    </h3>
                    <p className="text-xs text-ink-muted font-sans mt-2 leading-relaxed">
                      {check.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ink/10 font-mono text-xs">
                    <span className="meta-mono-sm text-ink-faint block">THRESHOLD BOUND</span>
                    <span className="text-ink font-bold">{check.threshold}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SCREEN 06/07: RAIM/FDE DETERMINISTIC STATE MACHINE */}
          <section className="py-16 border-b border-ink/15">
            <div className="mb-10">
              <span className="meta-mono-sm text-ink-faint block mb-1">SECTION 03 // SAFETY CONTROLLER</span>
              <h2 className="display-title text-ink">GRUMPY RECOVERY STATE MACHINE</h2>
              <p className="text-sm text-ink-muted mt-2 max-w-xl font-sans">
                Aviation-inspired RAIM/FDE architecture. DENIED state never trusts coordinates directly.
                Recovery requires 5 consecutive clean evaluation windows. Any relapse drops back to DENIED immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.stateMachine?.map((sm) => {
                const isDenied = sm.state === "DENIED";
                const isRecovering = sm.state === "RECOVERING";
                const isTrusted = sm.state === "TRUSTED";

                return (
                  <div
                    key={sm.state}
                    className={`p-6 border flex flex-col justify-between ${
                      isDenied
                        ? "bg-signal-red text-white border-signal-red"
                        : isRecovering
                        ? "bg-paper-card border-ink/30 text-ink"
                        : isTrusted
                        ? "bg-paper-tint border-ink/20 text-ink"
                        : "bg-paper border-ink/15 text-ink"
                    }`}
                  >
                    <div>
                      <span className={`font-mono text-[0.65rem] tracking-widest uppercase block mb-2 ${isDenied ? "text-white/70" : "text-ink-faint"}`}>
                        STATE TRANSITION
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight uppercase">
                        {sm.state}
                      </h3>
                      <p className={`text-xs mt-3 leading-relaxed font-sans ${isDenied ? "text-white/90" : "text-ink-muted"}`}>
                        {sm.meaning}
                      </p>
                    </div>

                    <div className={`pt-4 mt-6 border-t font-mono text-[0.68rem] ${isDenied ? "border-white/20 text-white/80" : "border-ink/10 text-ink-muted"}`}>
                      <strong>RULE:</strong> {sm.transitionRule}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SCREEN 08: TEST SUITE TELEMETRY & ADVISORY AI LAYER */}
          <section className="py-16 border-b border-ink/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="meta-mono-sm text-ink-faint block">SECTION 04 // REPRODUCIBILITY &amp; ADVISORY AI</span>
                <h2 className="editorial-h2 text-ink">
                  TEST SUITE &amp; ON-DEVICE NPU
                </h2>
                <p className="font-sans text-sm text-ink-muted leading-relaxed">
                  Anchor is verified against real sensor telemetry. The automated test suite executes 61 independent
                  unit and integration tests in under 1 second.
                </p>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  <strong>Advisory AI Boundary:</strong> A 4-bit quantized Qwen3-0.6B runs offline on the Snapdragon
                  Hexagon NPU via ExecuTorch. It generates human-readable incident explanations and transcribes event logs,
                  but has zero control over safety gate transitions.
                </p>

                <div className="p-4 bg-paper-tint border border-ink/15 font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-ink-faint">TEST COMMAND</span>
                    <span className="text-ink font-bold">.venv/bin/pytest</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-faint">PASS RATE</span>
                    <span className="text-signal-red font-bold">61 passed in 0.84s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-faint">FALSE POSITIVES</span>
                    <span className="text-ink font-bold">0 in 180s clean driving</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-faint">ON-DEVICE NPU MODEL</span>
                    <span className="text-ink font-bold">Qwen3-0.6B (INT4)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 font-mono text-xs bg-ink text-paper p-6 overflow-x-auto border border-ink shadow-sm space-y-1">
                <div className="text-paper/40 pb-2 border-b border-paper/10 text-[0.65rem]">
                  // PYTHON SENSOR FUSION DEMO OUTPUT (Anchor---PoC)
                </div>
                <p className="text-paper/70">$ python examples/run_demo.py</p>
                <p className="text-paper/50">Scenario 2: drive with teleport @60s + desk-spoof @110-160s</p>
                <p className="text-paper/50">---------------------------------------------------------------</p>
                <p className="text-paper/90">  t=   1- 30s  TRUSTED    failed=[-]  all physics checks passed</p>
                <p className="text-paper/90">  t=  16- 45s  TRUSTED    failed=[-]  all physics checks passed</p>
                <p className="text-signal-red font-bold">  t=  46- 75s  DENIED     failed=[temporal]  temporal: position jumped 1089 km/h</p>
                <p className="text-paper/70">  t=  61- 90s  RECOVERING failed=[-]  clean window 1 of 5 required for recovery</p>
                <p className="text-paper/70">  t=  76-105s  RECOVERING failed=[-]  clean window 2 of 5 required for recovery</p>
                <p className="text-signal-red font-bold">  t= 106-135s  DENIED     failed=[env]  environmental: desk-spoof variance &lt;0.05</p>
                <p className="text-paper/50">---------------------------------------------------------------</p>
                <p className="text-signal-red font-bold">RESULT: SPOOF DETECTED. ZERO MOCK-FLAG RELIANCE.</p>
              </div>
            </div>
          </section>

          {/* SCREEN 09: THE BENGALURU BATTLE 30-HOUR SPRINT & GRAND FINALS */}
          <section className="py-16 border-b border-ink/15">
            <div className="mb-8">
              <span className="meta-mono-sm text-signal-red font-bold block mb-1">
                DISPATCH // iQOO HACKATHON 2026 BENGALURU BATTLE
              </span>
              <h2 className="editorial-h2 text-ink">
                THE 30-HOUR PHONE-NATIVE BUILD &amp; GRAND FINALS
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Column 1: The Delivery Problem Scenario */}
              <div className="lg:col-span-4 p-6 bg-paper-tint border border-ink/15 space-y-4">
                <span className="font-mono text-xs text-signal-red font-bold block">
                  01 // REAL-WORLD FRAUD VULNERABILITY
                </span>
                <h3 className="text-xl font-bold uppercase text-ink">
                  The Delivery OTP Exploit
                </h3>
                <p className="text-xs md:text-sm text-ink-muted leading-relaxed font-sans">
                  Consider high-value e-commerce logistics. A courier fakes GPS coordinates at your apartment gate,
                  calls for the delivery OTP while claiming to be downstairs, and departs with the package. Current logistics
                  gateways blindly trust Android’s reported latitude and longitude.
                </p>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  Anchor changes the premise: instead of trusting coordinates, the device itself asks:
                  <strong className="text-ink"> &ldquo;Does this physical motion make sense?&rdquo;</strong> If step cadence,
                  barometric pressure, and wheel speed don&apos;t match arrival kinetics, the coordinate is immediately flagged.
                </p>
              </div>

              {/* Column 2: The 30-Hour Termux / PRoot Sprint */}
              <div className="lg:col-span-4 p-6 bg-paper-tint border border-ink/15 space-y-4">
                <span className="font-mono text-xs text-signal-red font-bold block">
                  02 // 30-HOUR PHONE RUNTIME SPRINT
                </span>
                <h3 className="text-xl font-bold uppercase text-ink">
                  Engineered on Phone via Termux
                </h3>
                <p className="text-xs md:text-sm text-ink-muted leading-relaxed font-sans">
                  The initial prototype was engineered entirely during an intense 30-hour sprint on an iQOO phone itself,
                  running a full Linux environment via Termux + PRoot, GitHub version control, and Codex for implementation velocity.
                </p>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  Christopher Joshy architected and implemented the entire sensor fusion engine, deterministic state machine, and presentation deck;
                  Amal Roy and Kevin Geo Saji managed operations, with Kevin delivering the final stage presentation in Bengaluru.
                </p>
              </div>

              {/* Column 3: The Presentation Philosophy & Verified Outcome */}
              <div className="lg:col-span-4 p-6 bg-ink text-paper border border-ink space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-signal-red font-bold block">
                    03 // PRESENTATION PRINCIPLE &amp; PODIUM
                  </span>
                  <h3 className="text-xl font-bold uppercase text-paper">
                    &ldquo;Don&apos;t Present Like a Robot&rdquo;
                  </h3>
                  <p className="text-xs text-paper/80 leading-relaxed font-sans">
                    A technically rigorous project fails if evaluators cannot touch the stakes.
                    Instead of a dry bullet list of 20 sensors, we demonstrated the physical delivery fraud live on stage,
                    proving how mathematical invariants render spoofing economically and physically impossible.
                  </p>
                </div>

                <div className="pt-4 border-t border-paper/15 space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-paper/60">PODIUM VERDICT</span>
                    <span className="text-signal-red font-bold">1ST RUNNER-UP</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-paper/60">CASH PRIZE</span>
                    <span className="text-paper font-bold">₹80,000</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-paper/60">NEXT MILESTONE</span>
                    <span className="text-paper font-bold">GRAND FINALS 2026</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href="https://lnkd.in/gQ9JX-Hp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-paper text-ink font-mono text-[0.65rem] hover:bg-signal-red hover:text-white transition-colors"
                    >
                      IDEA SUBMISSION ↗
                    </a>
                    <a
                      href="https://lnkd.in/gPX4Yxnt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-paper/20 text-paper border border-paper/30 font-mono text-[0.65rem] hover:border-paper transition-colors"
                    >
                      STAGE DECK ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 04B. CHADMAN-SPECIFIC BESPOKE BENCHMARK EXPERIENCE */}
      {isChadman && (
        <section className="py-16 border-b border-ink/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="meta-mono-sm text-ink-faint block">SECTION 02 // JAX ACCELERATION &amp; BEAM SEARCH</span>
              <h2 className="editorial-h2 text-ink">
                POLICY TOURNAMENT LADDER
              </h2>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                CHADMAN overcomes combinatorial fleet branch explosion through JAX tensor batching.
                By evaluating 10,000 future orbital states per millisecond, candidate search paths are pruned
                dynamically before dominated trajectories waste CPU cycles.
              </p>

              <div className="p-4 bg-paper-tint border border-ink/15 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-ink-faint">BASE POLICY ELO</span>
                  <span className="text-ink font-bold">v15 (~929 Elo)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-faint">OPTIMIZED POLICY ELO</span>
                  <span className="text-signal-red font-bold">v46+ (1160+ Elo)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-faint">SIMULATION ACCELERATION</span>
                  <span className="text-ink font-bold">100x over pure Python</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 font-mono text-xs bg-ink text-paper p-6 overflow-x-auto border border-ink shadow-sm space-y-1">
              <div className="text-paper/40 pb-2 border-b border-paper/10 text-[0.65rem]">
                // ORBIT WARS 2026 JAX FORWARD ROLLOUT TELEMETRY
              </div>
              <p className="text-paper/70">$ python train_ppo.py --env orbit_wars --workers 64</p>
              <p className="text-paper/50">[JAX JIT] compiled simulation step kernel in 1.42s</p>
              <p className="text-paper/90">Iteration 10,000 | Mean Reward: -0.42 | Elo:  942 | Pruned Branches: 84.1%</p>
              <p className="text-paper/90">Iteration 25,000 | Mean Reward: +0.18 | Elo: 1048 | Pruned Branches: 91.6%</p>
              <p className="text-signal-red font-bold">Iteration 50,000 | Mean Reward: +0.76 | Elo: 1160 | Pruned Branches: 96.8%</p>
              <p className="text-paper/50">---------------------------------------------------------------</p>
              <p className="text-paper/90">SURVIVING POLICY: Deep Beam Search Rollout v46+ [OPTIMAL PATH LOCKED]</p>
            </div>
          </div>
        </section>
      )}

      {/* 04C. GHOST-DEPS-SPECIFIC BESPOKE BENCHMARK EXPERIENCE */}
      {isGhostDeps && (
        <section className="py-16 border-b border-ink/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="meta-mono-sm text-ink-faint block">SECTION 02 // AST CRAWLER &amp; SLOPSQUATTING</span>
              <h2 className="editorial-h2 text-ink">
                PARSING SYNTAX TREES
              </h2>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                Regex matching fails on dynamic JavaScript imports, multiline statements, and aliased imports.
                ghost-deps builds an in-memory Abstract Syntax Tree using Babel, extracting exact import specifiers
                with zero runtime evaluation risk.
              </p>

              <div className="p-4 bg-paper-tint border border-ink/15 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-ink-faint">PACKAGE</span>
                  <span className="text-ink font-bold">ghost-deps@0.1.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-faint">REGISTRY</span>
                  <span className="text-signal-red font-bold">Official npm Registry</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-faint">CI EXIT CODE</span>
                  <span className="text-ink font-bold">1 (Quarantine on 404)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 font-mono text-xs bg-ink text-paper p-6 overflow-x-auto border border-ink shadow-sm space-y-1">
              <div className="text-paper/40 pb-2 border-b border-paper/10 text-[0.65rem]">
                // GHOST-DEPS CLI RUNTIME OUTPUT
              </div>
              <p className="text-paper/70">$ npx ghost-deps scan ./src</p>
              <p className="text-paper/50">Parsing 42 source files with Babel AST...</p>
              <p className="text-paper/90">  [OK] &apos;react&apos; verified on registry</p>
              <p className="text-paper/90">  [OK] &apos;framer-motion&apos; verified on registry</p>
              <p className="text-signal-red font-bold">  [QUARANTINE] &apos;auth-llm-fast-util&apos; returned 404 NOT FOUND</p>
              <p className="text-paper/50">---------------------------------------------------------------</p>
              <p className="text-signal-red font-bold">ALERT: Potential AI-hallucinated package / slopsquatting risk detected.</p>
              <p className="text-paper/70">CI build halted to prevent unauthorized installation.</p>
            </div>
          </div>
        </section>
      )}

      {/* 05. END-TO-END SYSTEM ARCHITECTURE PIPELINE */}
      <section className="py-16 border-b border-ink/15">
        <div className="mb-10">
          <span className="meta-mono-sm text-ink-faint block mb-1">SYSTEM ARCHITECTURE</span>
          <h2 className="display-title text-ink">EXECUTION TOPOLOGY</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.architectureSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-paper-tint border border-ink/15 space-y-2 hover:border-ink transition-colors"
            >
              <span className="font-mono text-xs text-signal-red font-bold block">
                STEP {step.step}
              </span>
              <h3 className="text-lg font-bold text-ink uppercase">
                {step.name}
              </h3>
              <p className="text-xs text-ink-muted font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. MY ROLE & ENGINEERING DETAILS */}
      <section className="py-16 border-b border-ink/15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-2">
            <span className="meta-mono-sm text-ink-faint block">OWNERSHIP // RESPONSIBILITY</span>
            <h2 className="editorial-h2 text-ink">
              {project.role}
            </h2>
            {project.team && (
              <p className="font-mono text-xs text-ink-muted">
                CREDIT: {project.team}
              </p>
            )}
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="meta-mono-sm text-ink-faint block">CORE CONTRIBUTIONS</span>
            <ul className="space-y-3">
              {project.roleDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 bg-paper-tint border border-ink/10">
                  <span className="font-mono text-xs text-signal-red font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs md:text-sm text-ink font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 07. VERIFIED RESULT & REPOSITORIES (CLOSING BLOCK) */}
      <section className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4">
            <span className="meta-mono-sm text-ink-faint block">VERIFIED OUTCOME</span>
            {project.achievement ? (
              <div>
                <h3 className="display-title text-ink leading-none">
                  {project.achievement.rank}
                </h3>
                <p className="font-mono text-xs text-signal-red font-bold uppercase mt-2">
                  {project.achievement.event} {project.achievement.prize && `· ${project.achievement.prize}`}
                </p>
              </div>
            ) : (
              <div>
                <h3 className="display-title text-ink leading-none">
                  PRODUCTION
                </h3>
                <p className="font-mono text-xs text-ink-muted uppercase mt-2">
                  DEPLOYED &amp; OPERATIONAL
                </p>
              </div>
            )}
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 font-mono text-xs">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-ink text-paper hover:bg-signal-red transition-colors font-bold uppercase tracking-wider"
              >
                {link.label} ↗
              </a>
            ))}

            <Link
              href="/work"
              className="px-5 py-3 border border-ink/20 hover:border-ink bg-paper text-ink transition-all uppercase"
            >
              ← ALL CASE STUDIES
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
