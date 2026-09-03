import { NoteItem } from "./types";

export const NOTES: NoteItem[] = [
  {
    slug: "why-physics-beats-heuristics",
    date: "2026.02.14",
    title: "Why Physics Beats Software Flags: Lessons from Anchor",
    subtitle: "When software trust boundaries fail, hardware conservation laws remain.",
    readTime: "4 MIN",
    tags: ["Systems", "Sensor Fusion", "Integrity"],
    content: [
      "Modern operating systems are built on layers of abstraction that can be spoofed in user-space. When Android provides an isFromMockProvider() flag, it is fundamentally an honor-system indicator. Anyone with root, Magisk, or a patched OS kernel can zero that bit.",
      "During our engineering on Anchor for the iQOO Hackathon, our core thesis was simple: you cannot lie to gravity. An accelerometer on a car accelerating onto an expressway measures a continuous force vector. An accelerometer sitting on a table in an apartment experiences 9.81 m/s² strictly downward, with a noise variance of less than (0.02 m/s²)².",
      "If a GPS fix claims the vehicle leaped 12 kilometers in 30 seconds, or accelerated at 2.4g in a budget sedan, mathematics provides an unassailable rejection. The physical world is immutable. Build your security architectures around conservation laws, not software flags."
    ]
  },
  {
    slug: "reward-hacking-in-orbital-self-play",
    date: "2026.01.28",
    title: "Reward Hacking in Multi-Agent RL: Orbit Wars v18 to v34",
    subtitle: "The subtle dangers of intermediate reward shaping in simultaneous-turn games.",
    readTime: "5 MIN",
    tags: ["Reinforcement Learning", "JAX", "PPO"],
    content: [
      "In competitive self-play reinforcement learning, intermediate reward shaping is seductive. Sparse terminal rewards (+1 for win, -1 for loss) take millions of frames to propagate back through opening moves. Adding a gentle gradient—like rewarding total planet mass—seems like the obvious solution.",
      "What actually happens is that the policy finds the shortest path to maximizing the reward function rather than winning the game. In Orbit Wars v22, our agent learned to sit in neutral orbits accumulating mass while completely ignoring the opponent's military march toward its home planet.",
      "The fix was removing the intermediate mass reward entirely, keeping purely sparse terminal outcomes, and instead accelerating simulation throughput using JAX to generate 50,000 matches per hour. If training is fast enough, sparse rewards always produce more robust, unhackable strategies."
    ]
  },
  {
    slug: "mcp-as-the-contract-for-clinical-ai",
    date: "2026.01.10",
    title: "Model Context Protocol as the Contract for Clinical AI",
    subtitle: "Why decoupled tool servers are the only safe way to bridge LLMs with EHR data.",
    readTime: "3 MIN",
    tags: ["MCP", "Healthcare", "FHIR"],
    content: [
      "Large language models should never directly query raw database tables in clinical environments. A hallucinated SQL query or an unvetted API request can leak HIPAA identifiers or misinterpret vital dosage contraindications.",
      "In building Josanshi for the Agents Assemble hackathon, we implemented the Model Context Protocol (MCP) as a strict firewall. The LLM only sees structured tool signatures: assessPostpartumDepressionRisk, verifyMedicationContraindication, checkVaccineSafety.",
      "The MCP server handles session pooling, token authentication, and HL7 FHIR normalization deterministically. The AI suggests, but the MCP contract enforces invariants."
    ]
  }
];
