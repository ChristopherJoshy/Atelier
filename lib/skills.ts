export interface SkillCapability {
  name: string;
  category: "Languages" | "AI & Inference" | "Systems & Infrastructure" | "Applications & Mobile" | "Protocols & Hardware";
  status: "Primary" | "Learning" | "Production";
  projects: {
    slug: string;
    title: string;
    evidence: string;
  }[];
}

export const CAPABILITY_MAP: SkillCapability[] = [
  {
    name: "Python",
    category: "Languages",
    status: "Primary",
    projects: [
      { slug: "anchor", title: "Anchor", evidence: "Sensor fusion EKF and RAIM/FDE safety algorithms" },
      { slug: "chadman", title: "CHADMAN", evidence: "JAX and PPO competitive reinforcement learning" },
      { slug: "sahayi", title: "Sahayi", evidence: "FastAPI voice stream handler and LangGraph workflows" },
      { slug: "voiceshield", title: "VoiceShield AI", evidence: "PyTorch deep learning audio classification pipeline" },
      { slug: "acpia", title: "ACPIA", evidence: "Stylometric graph analysis and forensic processing" }
    ]
  },
  {
    name: "Rust",
    category: "Languages",
    status: "Learning",
    projects: [
      { slug: "anchor", title: "Anchor Engine", evidence: "Low-level sensor memory safety experiments & systems benchmarks" }
    ]
  },
  {
    name: "TypeScript",
    category: "Languages",
    status: "Primary",
    projects: [
      { slug: "ghost-deps", title: "ghost-deps", evidence: "Published npm package AST parsing engine (v0.1.5)" },
      { slug: "josanshi", title: "Josanshi", evidence: "FHIR MCP server with session pooling and type safety" },
      { slug: "typelo", title: "Typelo", evidence: "Real-time client typing racing engine and anti-cheat" },
      { slug: "nexus-wars", title: "Nexus Wars", evidence: "Full-stack competition platform and match spectator" }
    ]
  },
  {
    name: "JAX",
    category: "AI & Inference",
    status: "Production",
    projects: [
      { slug: "chadman", title: "CHADMAN", evidence: "Vectorized environment simulation and GPU/TPU forward rollouts" }
    ]
  },
  {
    name: "PPO & RL",
    category: "AI & Inference",
    status: "Production",
    projects: [
      { slug: "chadman", title: "CHADMAN", evidence: "Self-play policy optimization across 30+ iterations (Elo 929-1160)" }
    ]
  },
  {
    name: "Elo & Rating Systems",
    category: "AI & Inference",
    status: "Production",
    projects: [
      { slug: "chadman", title: "CHADMAN", evidence: "Tournament Elo progression from ~929 to 1160+ in self-play RL" },
      { slug: "typelo", title: "Typelo", evidence: "Real-time 1v1 keystroke race rating calculation" },
      { slug: "nexus-wars", title: "Nexus Wars", evidence: "Glicko-2 ladder rankings for untrusted student bots" },
      { slug: "orix", title: "ORIX", evidence: "Reputation-weighted driver-rider matchmaking algorithms" }
    ]
  },
  {
    name: "LangGraph",
    category: "AI & Inference",
    status: "Production",
    projects: [
      { slug: "sahayi", title: "Sahayi", evidence: "Multi-turn clinical dialogue graph with deterministic safety brakes" }
    ]
  },
  {
    name: "Model Context Protocol (MCP)",
    category: "AI & Inference",
    status: "Production",
    projects: [
      { slug: "josanshi", title: "Josanshi", evidence: "Production HL7 FHIR MCP server architecture" }
    ]
  },
  {
    name: "Wav2Vec2 & Audio DSP",
    category: "AI & Inference",
    status: "Production",
    projects: [
      { slug: "voiceshield", title: "VoiceShield AI", evidence: "MFCC, spectral roll-off, and neural deepfake classification" }
    ]
  },
  {
    name: "Linux & nsjail",
    category: "Systems & Infrastructure",
    status: "Primary",
    projects: [
      { slug: "nexus-wars", title: "Nexus Wars", evidence: "Cgroup and namespace sandboxing for untrusted Python execution" }
    ]
  },
  {
    name: "Docker & Containerization",
    category: "Systems & Infrastructure",
    status: "Primary",
    projects: [
      { slug: "nexus-wars", title: "Nexus Wars", evidence: "Containerized worker execution pool" },
      { slug: "voiceshield", title: "VoiceShield AI", evidence: "Lightweight CPU-only containerized microservice" }
    ]
  },
  {
    name: "Redis",
    category: "Systems & Infrastructure",
    status: "Primary",
    projects: [
      { slug: "typelo", title: "Typelo", evidence: "Sub-second matchmaking queues and live game channels" },
      { slug: "orix", title: "Orix", evidence: "Real-time commuter matching and session caches" },
      { slug: "ideator", title: "Ideator", evidence: "High-speed semantic query caching" }
    ]
  },
  {
    name: "PostgreSQL & MongoDB",
    category: "Systems & Infrastructure",
    status: "Primary",
    projects: [
      { slug: "nexus-wars", title: "Nexus Wars", evidence: "Relational match records, bot versions, and Elo audit trail" },
      { slug: "campuspulse", title: "CampusPulse", evidence: "Activity points ledger and event participant tracking" }
    ]
  },
  {
    name: "React & Next.js",
    category: "Applications & Mobile",
    status: "Primary",
    projects: [
      { slug: "typelo", title: "Typelo", evidence: "Real-time WebSocket client interface" },
      { slug: "nexus-wars", title: "Nexus Wars", evidence: "Tournament spectator portal and live match playback" },
      { slug: "ideator", title: "Ideator", evidence: "Interactive concept discovery workspace" }
    ]
  },
  {
    name: "Flutter & React Native",
    category: "Applications & Mobile",
    status: "Production",
    projects: [
      { slug: "orix", title: "Orix", evidence: "Cross-platform student mobile carpooling app" },
      { slug: "aura", title: "A.U.R.A.", evidence: "Caregiver dashboard and real-time patient alert system" }
    ]
  },
  {
    name: "Raspberry Pi & Edge IoT",
    category: "Protocols & Hardware",
    status: "Production",
    projects: [
      { slug: "aura", title: "A.U.R.A.", evidence: "Edge module running InsightFace and faster-whisper on physical device" },
      { slug: "aiva", title: "AIVA", evidence: "Ambient smart home sensory hub" }
    ]
  },
  {
    name: "WebSockets & WebRTC",
    category: "Protocols & Hardware",
    status: "Primary",
    projects: [
      { slug: "typelo", title: "Typelo", evidence: "Low-latency bidirectional keystroke streaming" },
      { slug: "sahayi", title: "Sahayi", evidence: "Twilio 8kHz μ-law real-time voice gateway (~12ms P50)" },
      { slug: "z-shooter", title: "Z-Shooter", evidence: "60Hz server-reconciled tick transmission" }
    ]
  }
];
