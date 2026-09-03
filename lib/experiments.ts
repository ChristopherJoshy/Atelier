import { ExperimentItem } from "./types";

export const EXPERIMENTS: ExperimentItem[] = [
  {
    id: "exp-kaggriculture",
    num: "EXP/01",
    date: "2026.03 — ACTIVE",
    title: "Kaggriculture: Pure RL vs Rule-Based vs Forward-Simulation Beam Search",
    domain: "Reinforcement Learning",
    hypothesis: "A forward-simulation search architecture combining day-level beam search macro-planning with a priority-queue micro-executor will outperform both pure RL and rule-based heuristics in a complex economy simulator.",
    method: "Iterated across 3 distinct paradigms for the Kaggle simulation competition: Attempt 1 (PPO with dense reward shaping) → Attempt 2 (Hand-crafted priority rules) → Attempt 3 (Forward simulation scored against a high-speed Rust engine replica).",
    result: "PARTIAL",
    observation: "Attempt 1 (Pure RL) FAILED: reward shaping was fragile, and agent made catastrophic long-term economic trade-offs. Attempt 2 (Rule-based) stabilized at rank ~923, functional but uncompetitive against top searchers. Attempt 3 (Forward Sim + Day Beam Search) is actively achieving superior resource preservation across diverse opponent models.",
    nextStep: "Calibrating opponent prediction weights and scaling beam depth horizon against simulated end-game volatility. Active in-progress research.",
    metrics: [
      { label: "Attempt 1 (Pure RL)", value: "FAILED (Reward Hacking)" },
      { label: "Attempt 2 (Rules)", value: "Rank ~923 (Functional)" },
      { label: "Attempt 3 (Search)", value: "Active / In-Progress" }
    ]
  },
  {
    id: "exp-02",
    num: "EXP/02",
    date: "2026.01",
    title: "Least-Squares Acceleration vs Raw Finite Differences in GPS Kinematic Anomaly Detection",
    domain: "Sensor Integrity",
    hypothesis: "Fitting a linear velocity slope over a 30-second window will eliminate false-positive acceleration spikes caused by GPS multi-path jitter without diluting real vehicle braking signatures.",
    method: "Simulated 180s vehicle driving trace with GNSS multipath noise (±3.5m random walk). Compared simple discrete delta acceleration a = (v2 - v1) / dt against least-squares linear regression slope over sliding 15-sample windows.",
    result: "SUCCESS",
    observation: "Discrete delta generated 14 phantom acceleration spikes exceeding the 11.8 m/s² threshold due to meter-level noise. Least-squares regression suppressed 100% of noise spikes while correctly catching a true 1.4g anomalous injection at t=60s.",
    nextStep: "Hardened least-squares slope estimator as the default kinematic check in Anchor (checks/kinematic.py).",
    repoSlug: "anchor",
    metrics: [
      { label: "Discrete False Positives", value: "14 per 180s" },
      { label: "Least-Squares False Positives", value: "0 per 180s" }
    ]
  },
  {
    id: "exp-03",
    num: "EXP/03",
    date: "2026.02",
    title: "AST Specifier Extraction vs Regex Matching for AI Slopsquatting Detection",
    domain: "Package Security",
    hypothesis: "Static AST traversal via Babel parser will identify dynamically scoped imports and aliased require statements that naive regex scanners overlook.",
    method: "Tested regex scanner vs full ESTree AST crawler across 50 popular npm repositories containing complex import patterns (dynamic import(), require.resolve(), conditional imports).",
    result: "SUCCESS",
    observation: "Regex missed 23% of dynamic imports and generated 8 false alarms on commented-out package names. Full AST visitor achieved 100% precision in under 120ms execution overhead per project.",
    nextStep: "Standardized ESTree AST visitor into ghost-deps v0.1.5 release.",
    repoSlug: "ghost-deps",
    metrics: [
      { label: "Regex Recall", value: "77%" },
      { label: "AST Recall", value: "100%" }
    ]
  },
  {
    id: "exp-04",
    num: "EXP/04",
    date: "2026.01",
    title: "FHIR MCP Server Session Pooling vs Per-Request Client Spawning",
    domain: "Agent Orchestration",
    hypothesis: "Maintaining an active HTTP keep-alive connection pool for the FHIR client inside the Model Context Protocol (MCP) singleton will reduce round-trip tool execution latency below 80ms.",
    method: "Benchmarked 50 sequential tool requests querying postpartum clinical records from HAPI FHIR test server: Scenario A (fresh Axios instance per tool call) vs Scenario B (persistent pooled client with TCP reuse).",
    result: "CONVERGED",
    observation: "Connection setup overhead dropped from 145ms to 18ms per tool query. Overall tool round-trip latency decreased by 62%, preventing agent timeouts during complex clinical synthesis chains.",
    nextStep: "Incorporated connection pool architecture into sessionPool.ts in Josanshi.",
    repoSlug: "josanshi",
    metrics: [
      { label: "Initial Latency", value: "192ms P90" },
      { label: "Pooled Latency", value: "48ms P90" }
    ]
  },
  {
    id: "exp-05",
    num: "EXP/05",
    date: "2025.11",
    title: "Client-Side Prediction with Lag Compensation in Fixed-Tick Canvas Netcode",
    domain: "Realtime Netcode",
    hypothesis: "Simulating player movement locally and reconciling with authoritative server state at 60Hz will eliminate perceptible input latency over simulated 120ms ping conditions.",
    method: "Implemented deterministic ring buffer storing the last 64 inputs on client. Upon receiving server snapshot, rolled back unconfirmed state, replayed pending buffer, and smoothly interpolated visual rendering.",
    result: "SUCCESS",
    observation: "Visual stutter dropped to zero under stable 120ms ping. Position divergence during hard wall collisions required soft exponential smoothing to prevent visual snap.",
    nextStep: "Integrated into Z-Shooter production netcode.",
    repoSlug: "z-shooter",
    metrics: [
      { label: "Perceived Latency", value: "< 16ms (Local)" },
      { label: "Reconciliation Snap", value: "< 0.05px" }
    ]
  }
];
