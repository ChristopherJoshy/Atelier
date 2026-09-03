import { AchievementItem } from "./types";

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "nvidia-nemotron",
    year: "2026",
    title: "NVIDIA Nemotron Model Reasoning Challenge",
    organization: "Kaggle & NVIDIA",
    rank: "Silver Medal · Top 3% Worldwide",
    highlightValue: "0.860",
    highlightLabel: "SCORE / RANK 130 OF 4,182 TEAMS",
    description: "Built and fine-tuned a custom LoRA adapter for the NVIDIA Nemotron-3-Nano-30B architecture entirely by hand without AI assistance, ranking 130th globally out of 4,182 international teams on the private leaderboard.",
    verifiedEvidence: "Kaggle Verified Competition Record (130 / 4,182 · Silver Medal)",
    tags: ["LLM Reasoning", "NVIDIA Nemotron-3-Nano-30B", "LoRA Fine-Tuning", "Kaggle Silver"]
  },
  {
    id: "iqoo-hackathon",
    year: "2026",
    title: "iQOO Hackathon 2026 Bengaluru Battle (Student Track)",
    organization: "iQOO & Vivo (Organized with Reskilll)",
    rank: "1st Runner-Up · Grand Finals Qualified",
    highlightValue: "₹80,000",
    highlightLabel: "1ST RUNNER-UP · ₹80,000 PRIZE · GRAND FINALS",
    projectSlug: "anchor",
    prize: "₹80,000",
    description: "Built Anchor during an intense 30-hour sprint directly on a phone (Termux, proot Linux, GitHub, and Codex). Solved real-world location spoofing—such as delivery OTP fraud where couriers fake arrival coordinates. Engineered 7-sensor fusion physics cross-checks and RAIM/FDE state machine solo, winning 1st Runner-Up out of top student engineering teams across India and securing Grand Finals qualification.",
    verifiedEvidence: "Bengaluru City Battle Podium Finish (Team Nexus: Christopher Joshy, Amal Roy, Kevin Geo Saji)",
    tags: ["Sensor Fusion", "Android Termux/PRoot", "RAIM/FDE", "30-Hour Sprint", "₹80,000 Prize"]
  },
  {
    id: "stack-wars-2026",
    year: "2026",
    title: "Stack Wars 2026 (24-Hour Solo Hackathon)",
    organization: "IEDC AWH Engineering College",
    rank: "1st Place Winner",
    highlightValue: "1ST",
    highlightLabel: "SOLO WINNER · 47 TEAMS",
    projectSlug: "campuspulse",
    description: "Built CampusPulse / KTUcoin solo in 24 hours under the theme 'Reimagine the Campus' — an activity point tracking and event discovery platform with signed cryptographic QR attendance verification, taking 1st place among 47 competing teams.",
    verifiedEvidence: "Stack Wars 1st Place Trophy & Official Citation",
    tags: ["Solo 24h Build", "Web Architecture", "Supabase", "QR Cryptography"]
  },
  {
    id: "techasth-26",
    year: "2026",
    title: "TECHASTH'26 National Hackathon",
    organization: "IIIT Kottayam",
    rank: "National Finalist",
    highlightValue: "FINALIST",
    highlightLabel: "NATIONAL PODIUM TRACK",
    projectSlug: "sahayi",
    description: "Developed Sahayi, a voice-first multilingual AI health companion connecting rural callers across ordinary telephone calls with sub-15ms WebSocket stream latency and deterministic LangGraph safety brakes.",
    verifiedEvidence: "National Finalist Selection (Team Black Cats)",
    tags: ["Voice AI", "Healthcare", "Sarvam AI", "LangGraph"]
  },
  {
    id: "ieee-cs-sight",
    year: "2026",
    title: "IEEE CS SIGHT Society Website Competition",
    organization: "IEEE Computer Society",
    rank: "1st Place (Winner)",
    highlightValue: "1ST",
    highlightLabel: "WINNER · WCAG AA COMPLIANT",
    description: "Delivered a high-performance, fully accessible institutional platform adhering to strict WCAG 2.1 AA accessibility guidelines and international design criteria.",
    verifiedEvidence: "IEEE CS SIGHT 1st Place Certificate & Award",
    tags: ["Web Architecture", "Accessibility", "Design Systems", "Production"]
  },
  {
    id: "hackp-2026",
    year: "2026",
    title: "HAC'KP 2026 Cyberdome Hackathon",
    organization: "Kerala Police Cyberdome",
    rank: "Selected Innovator",
    highlightValue: "CYBERDOME",
    highlightLabel: "LAW ENFORCEMENT SYSTEMS",
    projectSlug: "acpia",
    description: "Architected ACPIA, an agentic child protection investigation assistant with psychological exposure shielding, cross-platform stylometric identity stitching, and forensic evidentiary logging.",
    verifiedEvidence: "Kerala Police Cyberdome Hackathon Presentation",
    tags: ["Cybersecurity", "Law Enforcement AI", "Identity Stitching", "Privacy"]
  }
];
