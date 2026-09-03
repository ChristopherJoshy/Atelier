import { ProjectData } from "./types";

export const PROJECTS: ProjectData[] = [
  // ==========================================
  // FEATURED TIER: 3 FULL NARRATIVE CASE STUDIES
  // ==========================================
  {
    slug: "anchor",
    num: "01",
    title: "Anchor",
    year: "2026",
    status: "Finalist",
    tier: "featured",
    category: "Safety & Edge AI",
    summary: "On-device GPS integrity monitoring engine for Android that detects coordinate spoofing by continuously cross-examining GNSS claims against 7 physical sensor invariants.",
    heroStatement: "GPS CAN LIE. PHYSICS CAN'T.",
    heroSubStatement: "ANDROID SENSOR FUSION · EDGE AI · RAIM/FDE SAFETY PIPELINE",
    visualMetaphor: "A clean kinematic trajectory that suddenly bifurcates into an impossible physical jump, flagged by a single red anomaly vector.",
    role: "Solo Architecture & Engineering Build (Team Nexus Co-Presentation)",
    roleDetails: [
      "Built the entire application and presentation deck personally: architecture, safety layer, multi-sensor fusion, state machine, and verdict logic",
      "Teammates Amal Roy and Kevin Geo Saji helped present at the hackathon, with Kevin leading the final on-stage presentation",
      "Engineered multi-sensor EKF cross-check routines across 7 fused sensor streams: GNSS, IMU, Magnetometer, Barometer, Solar Compass, Camera, and C/N0",
      "Defined strict deterministic thresholds: kinematic jerk (11.8 m/s²), heading divergence (>35°), temporal teleport (>1000 km/h), and desk-spoof variance (<0.05 m/s²)",
      "Integrated fine-tuned 4-bit quantized Qwen3-0.6B running locally via ExecuTorch on Snapdragon Hexagon NPU for advisory incident explanations without gating safety"
    ],
    team: "Team Nexus (Christopher Joshy, Amal Roy, Kevin Geo Saji) · iQOO Hackathon 2026",
    technologies: ["Android", "Python", "Sensor Fusion", "EKF", "RAIM/FDE", "ExecuTorch", "Snapdragon NPU", "Qwen3-0.6B"],
    problem: "GPS spoofing apps inject simulated geographic coordinates directly into Android location APIs. Software 'mock location' flags are easily bypassed. Autonomous systems, banking apps, and delivery workflows blindly accept fake coordinates that violate basic laws of motion.",
    insight: "A spoofer can manipulate satellite pseudo-ranges in software, but cannot fake the real physical universe: gravity acting on the accelerometer, barometric air pressure differences, or the sun's deterministic astronomical azimuth.",
    solution: "Anchor continuously evaluates 30-second sliding windows against six independent physics checks. Verdicts feed into a deterministic state machine (TRUSTED, DEGRADED, DENIED, RECOVERING). No cloud round-trips required.",
    physicsChecks: [
      {
        name: "Kinematic Consistency",
        description: "Computes implied acceleration from consecutive fixes using least-squares slope. Rejects trajectories exceeding 11.8 m/s² (~1.2g) for driving or 3.0 m/s² for pedestrian motion.",
        threshold: "≤ 11.8 m/s² (1.2g)",
        file: "checks/kinematic.py"
      },
      {
        name: "Heading Divergence",
        description: "Pairs GNSS bearing against magnetometer compass heading. Sustained divergence >35° over 3 consecutive samples triggers a violation.",
        threshold: "≤ 35° divergence over 3 samples",
        file: "checks/heading.py"
      },
      {
        name: "Temporal Jump (Coarse Backstop)",
        description: "Displacement divided by time delta between consecutive fixes. Any teleport displacement exceeding 1000 km/h is immediately rejected.",
        threshold: "Displacement speed > 1000 km/h",
        file: "checks/temporal.py"
      },
      {
        name: "Altitude Barometric Agreement",
        description: "Converts raw barometric pressure to altitude via the International Standard Atmosphere (ISA) formula. Rejects fixes drifting >150m from pressure curves.",
        threshold: "ISA altitude drift ≤ 150m",
        file: "checks/altitude.py"
      },
      {
        name: "Environmental Desk-Spoof",
        description: "Detects phone stationary on desk (IMU variance < 0.05 m/s²) while GNSS claims >1.0 m/s motion. Flags after four contradictory windows.",
        threshold: "Variance < 0.05² m/s² with GNSS > 1.0 m/s",
        file: "checks/environmental.py"
      },
      {
        name: "Solar Ephemeris Alignment & C/N0",
        description: "Evaluates NOAA solar-position equations in pure math. Compares astronomical solar azimuth against phone heading with 15° tolerance and tracks satellite signal-to-noise ratio.",
        threshold: "Astronomical solar vector ±15°",
        file: "checks/solar.py"
      }
    ],
    stateMachine: [
      {
        state: "TRUSTED",
        meaning: "All physics checks pass consistently. Location fixes are released to application.",
        transitionRule: "Initial state or 5 consecutive clean windows from RECOVERING."
      },
      {
        state: "DEGRADED",
        meaning: "Single low-confidence anomaly detected (e.g. temporary multipath or magnetic perturbation). Fixes flagged as provisional.",
        transitionRule: "Triggered on 1 anomaly with confidence < 0.7."
      },
      {
        state: "DENIED",
        meaning: "Critical physics violation detected (two failing checks or one check ≥ 0.7 confidence). Location is marked hostile.",
        transitionRule: "Immediate drop upon kinematic, temporal, or multi-sensor contradiction."
      },
      {
        state: "RECOVERING",
        meaning: "Location claims appear normal again, but trust is withheld until stability is mathematically proven.",
        transitionRule: "Requires 5 consecutive uninterrupted clean evaluation windows. Any failure immediately drops back to DENIED."
      }
    ],
    architectureSteps: [
      { step: "01", name: "7-Sensor Stream Acquisition", desc: "Streams raw Android GNSS, IMU, Barometer, Magnetometer, Solar Compass, Camera, and C/N0 at native hardware rates." },
      { step: "02", name: "Validation & Normalization", desc: "Filters sensor noise, applies least-squares slope smoothing, and formats uniform 30s sliding windows." },
      { step: "03", name: "Physics Consistency Core", desc: "Executes 6 independent deterministic check routines (Kinematic, Heading, Temporal, Altitude, Desk, Solar)." },
      { step: "04", name: "RAIM/FDE Fusion Gate", desc: "Aggregates confidence votes. If checks disagree, isolates the fault and computes safety verdict." },
      { step: "05", name: "Deterministic Safety State", desc: "State machine transitions between TRUSTED, DEGRADED, DENIED, and RECOVERING." },
      { step: "06", name: "On-Device AI Advisory", desc: "Local 4-bit Qwen3-0.6B running via ExecuTorch transcribes events and provides explanations without controlling safety." }
    ],
    metrics: [
      { label: "Fused Sensors", value: "7 Types", annotation: "GNSS, IMU, MAG, BARO, SUN, CAM, C/N0" },
      { label: "Test Suite Pass", value: "61 / 61", annotation: "100% passing in < 1.0s (pytest)" },
      { label: "Recovery Ceiling", value: "5 Windows", annotation: "Grumpy anti-spoof hysteresis" },
      { label: "Hackathon Award", value: "1st Runner-Up", annotation: "₹80,000 Prize (iQOO City Battle)", isHighlight: true }
    ],
    achievement: {
      title: "First Runner-Up (Student Track)",
      event: "iQOO Hackathon 2026 Bengaluru City Battle",
      rank: "1st Runner-Up",
      prize: "₹80,000",
      year: "2026"
    },
    links: [
      { label: "Anchor PoC (GitHub)", url: "https://github.com/ChristopherJoshy/Anchor---PoC", type: "github" },
      { label: "Anchor Full Build (GitHub)", url: "https://github.com/ChristopherJoshy/Anchor---Full-Build-", type: "github" },
      { label: "Idea Video (LinkedIn)", url: "https://lnkd.in/gQ9JX-Hp", type: "live" },
      { label: "Presentation Deck", url: "https://lnkd.in/gPX4Yxnt", type: "live" }
    ],
    featured: true,
    archive: false,
    verified: true
  },
  {
    slug: "chadman",
    num: "02",
    title: "CHADMAN",
    year: "2025—2026",
    status: "Research",
    tier: "featured",
    category: "Reinforcement Learning",
    summary: "Competitive reinforcement learning agents engineered with JAX vectorization, self-play PPO, forward simulation rollouts, and deep beam search for Orbit Wars 2026.",
    heroStatement: "ONE AGENT. THOUSANDS OF POSSIBLE FUTURES.",
    heroSubStatement: "ORBIT WARS 2026 · JAX FORWARD SIMULATION · PPO SELF-PLAY",
    visualMetaphor: "Hundreds of thin candidate search trajectories branching outward, pruned by utility bounds, leaving a single surviving optimal policy highlighted in red.",
    role: "Lead RL Researcher & Policy Architect",
    roleDetails: [
      "Vectorized game state mechanics and forward orbital dynamics directly in JAX for 100x acceleration over pure Python",
      "Designed and tuned PPO (Proximal Policy Optimization) self-play curriculum spanning versions v15 through v46+",
      "Engineered hybrid heuristic-search evaluation combining deep beam search rollouts with policy value networks",
      "Benchmarked agent Elo against tournament populations, scaling ratings from ~929 to 1160+"
    ],
    technologies: ["JAX", "Python", "PPO", "Reinforcement Learning", "Beam Search", "NumPy", "Self-Play"],
    problem: "Orbital gravity mechanics, fleet transfer delays, and multi-planet capture create exponential branching factors where standard Monte Carlo Tree Search is too slow for real-time turn limits.",
    insight: "Combining vectorized JAX simulation rollouts with a hybrid heuristic search allows the agent to evaluate 10,000 future trajectories per millisecond and prune dominated moves early.",
    solution: "A dual-stage agent that predicts high-level planetary control targets via a value network, followed by a constrained beam search that simulates tactical fleet trajectories over multi-step horizons.",
    architectureSteps: [
      { step: "01", name: "JAX State Vectorization", desc: "Transforms orbital coordinates and fleet velocities into batch-parallel tensors." },
      { step: "02", name: "Candidate Branch Generator", desc: "Generates tactical action sets using domain-specific heuristics and value network priors." },
      { step: "03", name: "Forward Simulation Rollouts", desc: "Simulates game trajectories forward across 10-step planetary orbits." },
      { step: "04", name: "Dominance Pruning", desc: "Prunes inferior branches early using upper-bound utility evaluation." },
      { step: "05", name: "Surviving Action Dispatch", desc: "Selects the surviving optimal action vector and dispatches the move within latency bounds." }
    ],
    metrics: [
      { label: "Policy Generations", value: "v15 → v46+", annotation: "Iterative self-play progression" },
      { label: "Tournament Elo", value: "~929 → 1160", annotation: "Verified competition rating", isHighlight: true },
      { label: "Rollout Speed", value: "10,000 / ms", annotation: "JAX accelerated tensor sim" }
    ],
    links: [
      { label: "Orbit Wars Heuristics Model", url: "https://github.com/ChristopherJoshy/Orbit-Wars-2026-herustrics-model", type: "github" },
      { label: "Orbit Wars 2026 Engine", url: "https://github.com/ChristopherJoshy/Orbit-Wars-2026", type: "github" }
    ],
    featured: true,
    archive: false,
    verified: true
  },
  {
    slug: "ghost-deps",
    num: "03",
    title: "ghost-deps",
    year: "2026",
    status: "Published",
    tier: "featured",
    category: "Supply Chain Defense",
    summary: "Published npm security package that parses JavaScript/TypeScript ASTs to intercept AI-hallucinated package imports before malicious actors can register them (slopsquatting).",
    heroStatement: "THE PACKAGE DOESN'T EXIST.",
    heroSubStatement: "PUBLISHED NPM SECURITY CLI (v0.1.5) · AST PARSER · SLOPSQUATTING DEFENSE",
    visualMetaphor: "A project dependency graph where real modules connect cleanly in black, while an unresolvable hallucinated package node is isolated and flagged in red.",
    role: "Creator & Maintainer",
    roleDetails: [
      "Authored and published the open-source CLI tool to the official npm registry (v0.1.5)",
      "Implemented AST visitor using Babel/TypeScript parser to extract all import specifiers without executing arbitrary code",
      "Engineered real-time npm registry lookup with local LRU caching to detect unowned 404 package names",
      "Designed zero-configuration CI/CD integration for GitHub Actions to quarantine phantom packages"
    ],
    technologies: ["TypeScript", "Node.js", "AST (Babel)", "npm Registry API", "Security CLI", "GitHub Actions"],
    problem: "AI code generation tools frequently hallucinate package names that do not exist on npm. Threat actors register these hallucinated package names with malicious payloads (slopsquatting), infecting downstream developers who blindly run npm install.",
    insight: "By parsing the Abstract Syntax Tree directly during CI/pre-commit and cross-checking every external dependency against the live npm registry, phantom dependencies can be quarantined before an install command ever touches disk.",
    solution: "An automated CLI that inspects source files, extracts dependency specifiers, verifies package ownership on npm, and flags unregistered packages before malicious actors can claim them.",
    architectureSteps: [
      { step: "01", name: "AST Specifier Extraction", desc: "Parses TS/JS code into AST nodes, identifying all ImportDeclaration and require() call specifiers." },
      { step: "02", name: "Scope Resolution", desc: "Filters out local relative paths, built-in Node.js modules, and workspace aliases." },
      { step: "03", name: "Registry Verification", desc: "Queries npm registry endpoints with HTTP caching to verify package existence." },
      { step: "04", name: "Anomaly Flagging", desc: "Detects 404 responses and flags potential slopsquatting candidates." },
      { step: "05", name: "CI Quarantine Gate", desc: "Fails the build with exit code 1 to prevent automated package installation." }
    ],
    metrics: [
      { label: "npm Registry", value: "v0.1.5", annotation: "Live public package", isHighlight: true },
      { label: "Analysis Engine", value: "Babel AST", annotation: "Zero runtime execution risk" },
      { label: "Latency", value: "< 250ms", annotation: "Parallel registry lookups" }
    ],
    links: [
      { label: "View on npm Registry", url: "https://www.npmjs.com/package/ghost-deps", type: "npm" },
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: true,
    archive: false,
    verified: true
  },

  // ==========================================
  // SECONDARY TIER: LIGHTER SINGLE-SCROLL PAGES
  // ==========================================
  {
    slug: "chris-code",
    num: "04",
    title: "Chris Code",
    year: "2026",
    status: "Research",
    tier: "secondary",
    category: "Platform & Netcode",
    summary: "In-progress open-source autonomous agent orchestrator delegating to specialized plan, build, debug, and compaction subagents with custom persistent project memory and Telegram control.",
    heroStatement: "AUTONOMOUS AGENT ORCHESTRATION WITH PERSISTENT MEMORY.",
    visualMetaphor: "A multi-agent hierarchical tree orchestrating task delegators, compaction queues, and external memory caches.",
    role: "Solo Creator & Systems Engineer",
    roleDetails: [
      "Built multi-agent orchestrator that dispatches tasks to plan, build, debug, and compaction workers",
      "Designed persistent project-memory system enabling context continuity across long-horizon coding sessions",
      "Integrated Telegram bot interface and Stitch MCP servers for mobile remote control and tool execution"
    ],
    technologies: ["TypeScript", "Node.js", "LLM Orchestration", "MCP", "Telegram API", "Vector Memory"],
    problem: "Single-agent LLM systems lose architectural context over multi-file refactors, hallucinate obsolete code patterns, and cannot be managed remotely during long execution runs.",
    insight: "Separating planning, execution, and memory compaction into isolated subagent lifecycles prevents context window contamination and keeps execution state persistent.",
    solution: "A modular agent framework featuring compaction subagents, local file diff verification, model routing, and remote mobile observability via Telegram.",
    architectureSteps: [
      { step: "01", name: "Task Ingestion", desc: "Receives coding goals via CLI or Telegram webhook." },
      { step: "02", name: "Planner Delegation", desc: "Generates step-by-step diff plans and dependency graphs." },
      { step: "03", name: "Builder Execution", desc: "Applies precise line edits and verifies syntax." },
      { step: "04", name: "Memory Compaction", desc: "Compacts transcript history into persistent project knowledge." }
    ],
    metrics: [
      { label: "Target Launch", value: "Beta 2026", annotation: "In active development", isHighlight: true }
    ],
    links: [
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },
  {
    slug: "typelo",
    num: "05",
    title: "Typelo",
    year: "2026",
    status: "Live",
    tier: "secondary",
    category: "Platform & Netcode",
    summary: "Live real-time competitive 1v1 typing platform with server-authoritative WebSocket netcode, Redis matchmaking, and an automated Glicko/Elo rating engine.",
    heroStatement: "SUB-50MS COMPETITIVE REAL-TIME NETCODE.",
    visualMetaphor: "Two parallel high-frequency keystroke streams synchronized across a server-authoritative timeline.",
    role: "Full-Stack & Netcode Engineer",
    roleDetails: [
      "Engineered server-authoritative WebSocket protocol to prevent client-side keystroke tampering",
      "Integrated Redis pub/sub and matchmaking queues for low-latency player pairing",
      "Implemented mathematical Elo rating progression that recalculates after every 1v1 match"
    ],
    technologies: ["Next.js", "TypeScript", "WebSockets", "Node.js", "Redis", "Tailwind CSS", "Elo Engine"],
    problem: "Standard browser typing tests execute client-side and rely on trust flags, making them vulnerable to JavaScript macro tampering and artificial speed inflation.",
    insight: "Server-side keystroke delta verification with timestamped WebSocket packets eliminates cheating while maintaining responsive local typing feedback.",
    solution: "A production multiplayer platform running live at typelo.tech with sub-50ms synchronization, global leaderboards, and ranked matchmaking.",
    architectureSteps: [
      { step: "01", name: "Keystroke Streaming", desc: "Transmits raw keystroke timestamps via persistent WebSockets." },
      { step: "02", name: "Server Validation", desc: "Validates typing speed against physical human limits on the backend." },
      { step: "03", name: "Elo Recalculation", desc: "Updates player ratings using dynamic Glicko-2 / Elo formulas." }
    ],
    metrics: [
      { label: "Production Status", value: "Live", annotation: "typelo.tech", isHighlight: true },
      { label: "Sync Latency", value: "< 50ms", annotation: "Server-authoritative WebSockets" }
    ],
    links: [
      { label: "Play Live (typelo.tech)", url: "https://www.typelo.tech/", type: "live" },
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },
  {
    slug: "forge",
    num: "06",
    title: "Forge",
    year: "2026",
    status: "Research",
    tier: "secondary",
    category: "Platform & Netcode",
    summary: "AI project discovery platform featuring semantic collision avoidance, dual-memory architecture, and multi-provider LLM routing. Originated at OpenAI Codex Hackathon Bengaluru.",
    heroStatement: "IDEA DISCOVERY WITH VECTOR COLLISION AVOIDANCE.",
    visualMetaphor: "A high-dimensional vector space where candidate project ideas are clustered and checked against existing student repositories.",
    role: "Lead Systems & Backend Architect (Team Badarymen)",
    roleDetails: [
      "Designed semantic collision detection algorithm using Qdrant vector embeddings to prevent duplicate student project builds",
      "Engineered multi-provider LLM routing gateway with automatic fallback across Groq, Gemini, and OpenAI",
      "Built dual-memory subsystem separating working session memory from persistent domain knowledge"
    ],
    technologies: ["FastAPI", "Python", "Qdrant", "Redis", "React", "Vector Embeddings", "Groq API"],
    problem: "College engineering students repeatedly build identical, generic capstone projects without realizing prior cohorts have already solved the same problem.",
    insight: "Computing cosine distance across vector embeddings of existing project repositories identifies duplicate ideas immediately and suggests novel, unsolved angles.",
    solution: "An intelligent ideation engine that audits proposal viability, checks for prior work collisions, and routes queries through optimized LLM backends.",
    architectureSteps: [
      { step: "01", name: "Concept Vectorization", desc: "Encodes project proposals into 768-dimensional dense vectors." },
      { step: "02", name: "Collision Query", desc: "Searches Qdrant database to calculate overlap against historical project submissions." },
      { step: "03", name: "Novelty Scoring", desc: "Generates uniqueness reports and routes architectural refinements to LLMs." }
    ],
    metrics: [
      { label: "Origin", value: "OpenAI Codex Hackathon", annotation: "Bengaluru 2026", isHighlight: true },
      { label: "Target Audience", value: "100+ Students", annotation: "Campus deployment" }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy/Ideator-", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },
  {
    slug: "aiva",
    num: "07",
    title: "AIVA",
    year: "2026",
    status: "Live",
    tier: "secondary",
    category: "Distributed Systems",
    summary: "Cross-device proactive companion operating across phones, PCs, and edge IoT devices via a local P2P event mesh for tutoring, elderly safety, and scam protection.",
    heroStatement: "ONE INTELLIGENCE. MANY DEVICES.",
    visualMetaphor: "A decentralized mesh network where phone, PC, and edge Raspberry Pi nodes route encrypted event signals.",
    role: "Distributed Systems & P2P Mesh Architect",
    roleDetails: [
      "Architected local event mesh synchronizing state across Android, Linux desktop, and Raspberry Pi nodes",
      "Built multimodal sensor pipelines for local vision and audio event classification",
      "Enforced local-first execution without external telemetry leakage"
    ],
    technologies: ["Python", "FastAPI", "WebSockets", "P2P Networking", "Edge AI", "OpenCV"],
    problem: "Siloed consumer AI apps operate inside isolated browser tabs, lacking physical situational awareness across a user's multi-device ecosystem.",
    insight: "Treating distributed personal devices as peer nodes that exchange lightweight local sensor events enables proactive assistance without cloud latency.",
    solution: "A decentralized companion runtime that correlates activity across personal devices to protect against scams, assist with study, and monitor safety.",
    architectureSteps: [
      { step: "01", name: "Edge Device Discovery", desc: "Discovers local peer hardware using mDNS and zero-configuration networking." },
      { step: "02", name: "Encrypted Event Broker", desc: "Routes lightweight telemetry packets over local WebSockets." },
      { step: "03", name: "Proactive Context Engine", desc: "Synthesizes multi-device state to deliver timely assistive interventions." }
    ],
    metrics: [
      { label: "Architecture", value: "P2P Mesh", annotation: "Decentralized local nodes", isHighlight: true }
    ],
    links: [
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },
  {
    slug: "voiceshield",
    num: "08",
    title: "VoiceShield AI",
    year: "2026",
    status: "Finalist",
    tier: "secondary",
    category: "Security & Audio",
    summary: "Deepfake voice fraud detection engine for Indian banking institutions analyzing audio spectrograms, MFCC features, and vocoder artifacts via a CPU-only REST API.",
    heroStatement: "WHEN A VOICE ISN'T A VOICE.",
    visualMetaphor: "An audio acoustic waveform decomposing into a 2D Fourier spectrogram, with unnatural vocoder phase coherence flagged in red.",
    role: "Audio Feature Engineer & Backend Developer",
    roleDetails: [
      "Designed feature extraction pipeline combining Mel-Frequency Cepstral Coefficients (MFCC) and Wav2Vec2 embeddings",
      "Trained classification model to identify acoustic phase artifacts characteristic of neural vocoders",
      "Optimized inference runtime to execute entirely on standard CPU servers in < 350ms"
    ],
    technologies: ["Python", "PyTorch", "Wav2Vec2", "Librosa", "FastAPI", "Audio DSP"],
    problem: "Generative AI voice clones bypass traditional telephone banking voice authentication, enabling fraudulent financial transfers.",
    insight: "Synthetic vocoders leave distinct spectral artifacts and abnormal pitch stability that do not occur in natural biological vocal tracts.",
    solution: "A real-time API that analyzes incoming customer audio streams during banking verification and flags synthetic speech before authorizations proceed.",
    architectureSteps: [
      { step: "01", name: "Audio Ingestion", desc: "Accepts raw telephony audio streams at 8kHz and 16kHz sampling rates." },
      { step: "02", name: "Spectral Feature Extraction", desc: "Computes 2D Fourier spectrograms and 40-band MFCC representations." },
      { step: "03", name: "Acoustic Artifact Scoring", desc: "Evaluates synthetic vocoder probability and issues an anomaly risk score." }
    ],
    metrics: [
      { label: "Event", value: "PSB Hackathon", annotation: "UCO Bank 2026", isHighlight: true },
      { label: "Inference Target", value: "CPU-Only", annotation: "< 350ms per audio clip" }
    ],
    links: [
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },
  {
    slug: "josanshi",
    num: "09",
    title: "Josanshi",
    year: "2026",
    status: "Production",
    tier: "secondary",
    category: "Clinical MCP Tools",
    summary: "Maternal healthcare AI system providing an HL7 FHIR Model Context Protocol (MCP) server with persistent connection pooling and deterministic safety guardrails.",
    heroStatement: "CLINICAL MCP PROTOCOL WITH HL7 FHIR INTEGRITY.",
    visualMetaphor: "A clinical protocol flow gateway connecting decoupled AI models to strict FHIR electronic health record schemas.",
    role: "MCP Protocol Architect & Backend Lead",
    roleDetails: [
      "Engineered native Model Context Protocol (MCP) server interfacing Gemini Flash Lite with HL7 FHIR health records",
      "Designed persistent TCP session pooling for high-throughput clinical queries",
      "Enforced deterministic safety boundary: AI can summarize records, but cannot write prescriptions or modify vital histories"
    ],
    technologies: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "HL7 FHIR", "Gemini API", "PostgreSQL"],
    problem: "LLM healthcare bots frequently fabricate patient dosages and hallucinate clinical observations when connected directly to EHR databases.",
    insight: "Decoupling AI reasoning from database mutations via a typed MCP server with strict schema validation eliminates hallucinated medical record edits.",
    solution: "A standards-compliant clinical MCP server connecting autonomous medical agents to real FHIR endpoints through auditable safety gates.",
    architectureSteps: [
      { step: "01", name: "Clinical Query Intake", desc: "Parses clinical inquiries via Model Context Protocol standard." },
      { step: "02", name: "FHIR Schema Validation", desc: "Validates all parameter requests against official HL7 FHIR resources." },
      { step: "03", name: "Safety Gating", desc: "Blocks unauthorized state mutations and validates clinical ranges." }
    ],
    metrics: [
      { label: "Protocol", value: "Model Context Protocol", annotation: "HL7 FHIR compliant", isHighlight: true },
      { label: "Hackathon", value: "Agents Assemble", annotation: "Healthcare AI Endgame" }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy/Agents-Assemble---The-Healthcare-AI-Endgame-Josanshi", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },
  {
    slug: "nexus-wars",
    num: "10",
    title: "Nexus Wars",
    year: "2025",
    status: "Live",
    tier: "secondary",
    category: "Platform & Netcode",
    summary: "Competitive AI programming platform executing untrusted user-submitted Python agents inside isolated Linux nsjail sandboxes with Glicko-2 tournament matchmaking.",
    heroStatement: "SANDBOXED AI CODE EXECUTION ENGINE.",
    visualMetaphor: "Dual sandboxed execution containers monitored by a centralized judge process calculating rating updates.",
    role: "Platform Lead & Infrastructure Engineer",
    roleDetails: [
      "Configured secure Linux nsjail sandboxes isolating CPU, memory, and filesystem namespaces from host servers",
      "Built automated Glicko-2 / Elo ladder matchmaking system pairing submitted bots based on skill confidence",
      "Deployed distributed worker architecture utilizing PostgreSQL and MinIO object storage"
    ],
    technologies: ["Linux (nsjail)", "Python", "Next.js", "TypeScript", "PostgreSQL", "MinIO", "Glicko-2"],
    problem: "Hosting competitive coding competitions where students upload arbitrary code creates extreme security vulnerabilities and server takeover risks.",
    insight: "Hardening Linux cgroups and seccomp filters inside lightweight nsjail containers permits microsecond untrusted code execution with zero escape vectors.",
    solution: "A live competitive platform built for the Nexus open-source community allowing hundreds of students to submit, battle, and rank AI algorithms safely.",
    architectureSteps: [
      { step: "01", name: "Submission Ingestion", desc: "Receives user code and stores snapshots securely in MinIO." },
      { step: "02", name: "Sandboxed Execution", desc: "Spawns isolated nsjail environments with restricted system call access." },
      { step: "03", name: "Tournament Rating Update", desc: "Calculates match results and updates student leaderboards via Glicko-2." }
    ],
    metrics: [
      { label: "Security Sandbox", value: "Linux nsjail", annotation: "Hardware cgroup isolation", isHighlight: true },
      { label: "Platform", value: "Live", annotation: "nexuswars2026.vercel.app" }
    ],
    links: [
      { label: "Nexus Wars Arena", url: "https://nexuswars2026.vercel.app/", type: "live" },
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy/Nexus-Wars", type: "github" }
    ],
    featured: false,
    archive: false,
    verified: true
  },

  // ==========================================
  // ARCHIVE TIER: COMPLETE CATALOGUE OF 10+ REPOSITORIES
  // ==========================================
  {
    slug: "sahayi",
    num: "11",
    title: "Sahayi",
    year: "2026",
    status: "Finalist",
    tier: "archive",
    category: "Voice AI & Health",
    summary: "Voice-first multilingual AI health companion bridging Malayalam and Indian languages via Twilio 8kHz audio streams, Sarvam AI, and LangGraph clinical safety brakes.",
    heroStatement: "SPEAK. IT UNDERSTANDS.",
    visualMetaphor: "Acoustic audio waveforms streaming into Indic language translation nodes with sub-second turnaround.",
    role: "Voice Pipeline & Backend Systems Architect",
    roleDetails: [
      "Constructed sub-15ms WebSocket gateway between incoming Twilio telephone audio streams and Sarvam AI Indic STT",
      "Engineered LangGraph deterministic state controller halting conversations upon medical danger flags"
    ],
    technologies: ["Python", "FastAPI", "Twilio API", "Sarvam AI", "LangGraph", "WebSockets"],
    problem: "Rural healthcare lines struggle with complex IVR dial-pad menus that illiterate and non-English-speaking patients cannot navigate.",
    insight: "Streaming low-latency audio directly to specialized Indic speech models eliminates dial pads and lets users describe symptoms naturally.",
    solution: "An automated voice assistant that converses naturally in local languages while maintaining rigorous clinical escalation safety rules.",
    architectureSteps: [
      { step: "01", name: "Telephony Gateway", desc: "Streams 8kHz raw audio frames from Twilio via WebSockets." },
      { step: "02", name: "Indic Speech-to-Text", desc: "Transcribes Malayalam speech via Sarvam AI API in real time." },
      { step: "03", name: "Safety Intervention", desc: "LangGraph evaluates danger keywords and transfers emergencies to hospital staff." }
    ],
    metrics: [
      { label: "Award", value: "National Finalist", annotation: "TECHASTH'26", isHighlight: true }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy/Sahayi-HackX-BlackCats", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "orix",
    num: "12",
    title: "ORIX",
    year: "2026",
    status: "Live",
    tier: "archive",
    category: "Platform & Netcode",
    summary: "College-only rideshare platform at waitlist stage with verified student communities, ELO-based driver reputation, smart route matching, fare splitting, and encrypted chat.",
    heroStatement: "CAMPUS RIDESHARE WITH ELO REPUTATION MATCHING.",
    visualMetaphor: "Campus route corridors pairing verified riders and drivers with mutual rating verification.",
    role: "Full-Stack Engineer & Product Lead",
    roleDetails: [
      "Built verified student onboarding with institutional email domain validation",
      "Implemented ELO reputation algorithm weighting driver ratings based on completion reliability",
      "Engineered WebSocket chat and SOS emergency broadcast triggers"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Supabase", "PostgreSQL"],
    problem: "University students face high travel costs and unreliable campus transit with no trusted peer-to-peer rideshare alternatives.",
    insight: "Restricting network access to verified student domains combined with mathematical reputation scoring creates a self-policing campus transit pool.",
    solution: "A mobile-responsive platform enabling verified campus members to split commutes safely and coordinate rides in real time.",
    architectureSteps: [
      { step: "01", name: "Campus Authentication", desc: "Validates institutional email credentials." },
      { step: "02", name: "Route Clustering", desc: "Matches travelers along common transit arteries." },
      { step: "03", name: "Reputation Update", desc: "Applies Elo adjustments based on mutual ride reviews." }
    ],
    metrics: [
      { label: "Current Stage", value: "Waitlist Pre-Launch", annotation: "or1x.vercel.app", isHighlight: true }
    ],
    links: [
      { label: "View Live Portal", url: "https://or1x.vercel.app/", type: "live" },
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "campuspulse",
    num: "13",
    title: "CampusPulse / KTUcoin",
    year: "2026",
    status: "Live",
    tier: "archive",
    category: "Platform & Netcode",
    summary: "KTU activity point tracking and campus event discovery platform featuring a swipeable poster feed and QR attendance verification. Built solo in a 24-hour hackathon.",
    heroStatement: "SOLO 24-HOUR HACKATHON 1ST PLACE WINNER.",
    visualMetaphor: "A chronological student feed validating campus participation and recording verified activity points.",
    role: "Solo Creator (Stack Wars 2026 1st Place Winner)",
    roleDetails: [
      "Built the full application end-to-end solo in 24 hours under the theme 'Reimagine the Campus'",
      "Designed swipeable event discovery interface modeled after social feeds",
      "Implemented cryptographic QR code generation and scan verification for physical event attendance",
      "Won 1st Place out of 47 competing teams at IEDC AWH Engineering College"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "QR Cryptography"],
    problem: "KTU university students manually track activity points using paper certificates, resulting in lost records and graduation delays.",
    insight: "Digitizing campus event announcements and tying attendance to signed cryptographic QR scans automates activity point validation instantly.",
    solution: "A unified portal where colleges publish events and students verify attendance with a single scan.",
    architectureSteps: [
      { step: "01", name: "Event Publishing", desc: "Club leads upload event posters with activity point values." },
      { step: "02", name: "QR Generation", desc: "Generates expiring time-coded QR tokens for verification." },
      { step: "03", name: "Attendance Validation", desc: "Scans student credentials and logs verified points." }
    ],
    metrics: [
      { label: "Award", value: "1st Place Winner", annotation: "Stack Wars 2026 (47 Teams)", isHighlight: true },
      { label: "Build Duration", value: "24 Hours", annotation: "100% Solo Engineering" }
    ],
    links: [
      { label: "Live Deployment", url: "https://kt-ucoin.vercel.app/", type: "live" },
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy/KTUcoin", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "acpia",
    num: "14",
    title: "ACPIA",
    year: "2026",
    status: "Finalist",
    tier: "archive",
    category: "Security & Audio",
    summary: "Agentic child-protection investigation assistant featuring an exposure-shielding privacy layer and cross-platform identity stitching via stylometric fingerprinting for HAC'KP 2026.",
    heroStatement: "STYLOMETRIC FORENSICS & INVESTIGATIVE PRIVACY.",
    visualMetaphor: "Cross-platform identity graph stitching linguistic stylometry while shielding human investigators from illicit material.",
    role: "Security Systems Engineer & Algorithm Designer",
    roleDetails: [
      "Selected as Innovator at Kerala Police Cyberdome HAC'KP 2026 hackathon",
      "Engineered exposure-shielding layer abstracting illicit imagery before presentation to human investigators",
      "Built stylometric text analyzer extracting vocabulary frequency distributions to correlate suspect identities across chat forums"
    ],
    technologies: ["Python", "Stylometry NLP", "Computer Vision", "Privacy Engineering", "FastAPI"],
    problem: "Digital investigators face severe psychological trauma when analyzing child exploitation cases and struggle to track perpetrators across pseudonymous accounts.",
    insight: "Linguistic habits (punctuation patterns, typo distributions, syntax quirks) form distinct stylometric fingerprints that link accounts without exposing raw media.",
    solution: "A privacy-preserving forensic toolkit assisting law enforcement in correlating evidence while protecting investigators from exposure.",
    architectureSteps: [
      { step: "01", name: "Linguistic Feature Extraction", desc: "Parses text logs into syntactic and n-gram frequency distributions." },
      { step: "02", name: "Stylometric Matching", desc: "Computes cosine distance to cluster pseudonymous online identities." },
      { step: "03", name: "Visual Shielding Gate", desc: "Replaces illicit media with synthetic descriptive metadata bounding boxes." }
    ],
    metrics: [
      { label: "Selected Innovator", value: "Kerala Police Cyberdome", annotation: "HAC'KP 2026", isHighlight: true }
    ],
    links: [
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "aura",
    num: "15",
    title: "A.U.R.A",
    year: "2026",
    status: "Live",
    tier: "archive",
    category: "Distributed Systems",
    summary: "Elderly and dementia care companion combining a React Native mobile app with an edge Raspberry Pi hardware module running InsightFace recognition and faster-whisper.",
    heroStatement: "EDGE HARDWARE ASSISTANCE FOR DEMENTIA CARE.",
    visualMetaphor: "Edge Raspberry Pi camera and microphone nodes streaming local face verification to a family caregiver dashboard.",
    role: "Edge AI & IoT Hardware Engineer",
    roleDetails: [
      "Deployed InsightFace biometric facial recognition directly onto Raspberry Pi 4 edge module",
      "Optimized faster-whisper speech recognition for local offline voice query processing",
      "Built WebSocket alert trigger transmitting emergency fall and disorientation signals to caregiver phones"
    ],
    technologies: ["Raspberry Pi", "React Native", "FastAPI", "InsightFace", "faster-whisper", "WebSockets"],
    problem: "Dementia patients experience severe distress when failing to recognize visiting family members and frequently forget medication schedules.",
    insight: "Edge computer vision running in the patient's room can quietly prompt them with gentle audio reminders of who is entering without uploading video to cloud servers.",
    solution: "A privacy-preserving smart home module that recognizes familiar faces and alerts remote caregivers to emergencies.",
    architectureSteps: [
      { step: "01", name: "Edge Face Detection", desc: "Processes 1080p camera frames via InsightFace on Raspberry Pi." },
      { step: "02", name: "Audio Guidance", desc: "Whispers gentle recognition prompts via local speaker." },
      { step: "03", name: "Caregiver Dispatch", desc: "Alerts family smartphones via WebSockets when disorientation occurs." }
    ],
    metrics: [
      { label: "Hardware Node", value: "Raspberry Pi 4", annotation: "100% On-Premise Computer Vision", isHighlight: true }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/ChristopherJoshy/A.U.R.A", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "z-shooter",
    num: "16",
    title: "Z-Shooter",
    year: "2025",
    status: "Live",
    tier: "archive",
    category: "Platform & Netcode",
    summary: "Fixed-tick Canvas 2D top-down zombie survival shooter featuring client-side kinematic prediction, entity spatial hashing, and zero framework overhead.",
    heroStatement: "60FPS CANVAS 2D SPATIAL HASHING SURVIVAL ENGINE.",
    visualMetaphor: "Spatial grid hashing partitioning hundreds of kinematic entity vectors into constant-time collision cells.",
    role: "Game Engine & Mechanics Developer",
    roleDetails: [
      "Wrote raw HTML5 Canvas 2D render loop maintaining stable 60fps on low-tier mobile browsers",
      "Implemented spatial hashing collision detection reducing pairwise entity checks from O(n²) to O(n)",
      "Engineered vector kinematics for weapon recoil, bullet penetration, and swarm pathfinding"
    ],
    technologies: ["TypeScript", "HTML5 Canvas", "Spatial Hashing", "Kinematics", "Audio API"],
    problem: "Standard browser game engines include heavy runtime frameworks that drop frame rates on budget hardware.",
    insight: "Writing a lightweight spatial hashing grid and direct Canvas 2D draw calls delivers 60fps with zero third-party game libraries.",
    solution: "A pure web-native arcade survival game running live at z-shooter.vercel.app with instant loading and immediate input response.",
    architectureSteps: [
      { step: "01", name: "Fixed Tick Update", desc: "Runs physics updates on an exact 60Hz delta accumulator." },
      { step: "02", name: "Spatial Grid Hashing", desc: "Sorts entities into 64x64 grid cells for instantaneous collision resolution." },
      { step: "03", name: "Direct Canvas Render", desc: "Draws visual frame buffers directly without DOM tree overhead." }
    ],
    metrics: [
      { label: "Frame Rate", value: "60 FPS", annotation: "Consistent mobile execution", isHighlight: true }
    ],
    links: [
      { label: "Play Z-Shooter Live", url: "https://z-shooter.vercel.app/", type: "live" },
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "wikirunai",
    num: "17",
    title: "WikiRunAI",
    year: "2025",
    status: "Live",
    tier: "archive",
    category: "Platform & Netcode",
    summary: "Interactive Wikipedia speed-run race engine where human players compete against heuristic AI agents navigating the shortest hyperlink path between two disparate world topics.",
    heroStatement: "GRAPH SEARCH HEURISTIC CHALLENGE PLATFORM.",
    visualMetaphor: "A directed semantic knowledge graph traversing hyperlinked articles toward a target node.",
    role: "Full-Stack Developer & Search Heuristic Designer",
    roleDetails: [
      "Built real-time Wikipedia REST API integration extracting outgoing link arrays dynamically",
      "Implemented embedding-based cosine distance heuristic to guide autonomous speed-run agent navigation"
    ],
    technologies: ["React", "TypeScript", "Wikipedia REST API", "Vector Embeddings", "Graph Traversal"],
    problem: "Understanding semantic distance between disparate domains of human knowledge is unintuitive for both humans and simple search algorithms.",
    insight: "Treating Wikipedia as a directed graph where semantic embedding distances guide branch selection allows discovering unexpected intellectual connections.",
    solution: "An interactive web challenge where participants compete against AI agents to solve the shortest link path between randomly chosen world concepts.",
    architectureSteps: [
      { step: "01", name: "Endpoint Selection", desc: "Selects two semantically distant Wikipedia article anchors." },
      { step: "02", name: "Hyperlink Graph Extraction", desc: "Fetches live link arrays directly from Wikipedia REST endpoints." },
      { step: "03", name: "Heuristic Breadth Search", desc: "Evaluates semantic vectors to prioritize highest-affinity outgoing links." }
    ],
    metrics: [
      { label: "Platform", value: "Live Challenge", annotation: "wikirunai.vercel.app", isHighlight: true }
    ],
    links: [
      { label: "Play WikiRunAI Live", url: "https://wikirunai.vercel.app/", type: "live" },
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  },
  {
    slug: "neernadi",
    num: "18",
    title: "NeerNadi",
    year: "2025",
    status: "Archived",
    tier: "archive",
    category: "Sensing & Satellite",
    summary: "Well-water contamination detection concept featuring solar/battery monitoring nodes integrating with Kerala's existing testing infrastructure. Built as an entry for a Google Gemini student competition.",
    heroStatement: "DISTRIBUTED WELL-WATER MONITORING CONCEPT.",
    visualMetaphor: "Decentralized water table sensor nodes reporting pH, turbidity, and chemical anomalies across rural panchayats.",
    role: "Concept Lead & Hardware Architecture (Competition Entry)",
    roleDetails: [
      "Designed solar-powered monitoring node architecture incorporating turbidity, pH, and conductivity sensors",
      "Structured data integration schema designed to feed into Kerala's established panchayat water-testing workflows",
      "Submitted as conceptual entry for Google Gemini student technology competition"
    ],
    technologies: ["Hardware Concept", "Sensor Nodes", "IoT Architecture", "Environmental Sensing"],
    problem: "Rural households across Kerala rely on private open wells that are periodically contaminated during monsoon flood seasons without early warning.",
    insight: "Augmenting existing government testing labs with low-cost local conductivity nodes enables community-wide anomaly detection before contamination reaches drinking supplies.",
    solution: "An environmental sensing concept connecting community well nodes to regional public health databases.",
    architectureSteps: [
      { step: "01", name: "Node Telemetry", desc: "Measures water turbidity and electrical conductivity." },
      { step: "02", name: "Panchayat Ingestion", desc: "Aggregates seasonal readings into regional water quality models." }
    ],
    metrics: [
      { label: "Entry", value: "Competition Concept", annotation: "Google Gemini Student Challenge", isHighlight: true }
    ],
    links: [
      { label: "GitHub Profile", url: "https://github.com/ChristopherJoshy", type: "github" }
    ],
    featured: false,
    archive: true,
    verified: true
  }
];

export function getFeaturedProjects(): ProjectData[] {
  return PROJECTS.filter((p) => p.tier === "featured" || (p.featured && p.tier !== "archive"));
}

export function getSecondaryProjects(): ProjectData[] {
  return PROJECTS.filter((p) => p.tier === "secondary");
}

export function getArchiveProjects(): ProjectData[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
