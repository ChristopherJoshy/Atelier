export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "npm" | "paper" | "demo";
}

export interface ArchitectureNode {
  step: string;
  name: string;
  desc: string;
  tech?: string;
  isAnomalyTarget?: boolean;
}

export interface MetricItem {
  label: string;
  value: string;
  annotation?: string;
  isHighlight?: boolean;
}

export interface ProjectData {
  slug: string;
  num: string;
  title: string;
  year: string;
  status: "Production" | "Live" | "Published" | "Research" | "Finalist" | "Archived";
  category: "Safety & Edge AI" | "Reinforcement Learning" | "Distributed Systems" | "Voice AI & Health" | "Security & Audio" | "Supply Chain Defense" | "Clinical MCP Tools" | "Platform & Netcode" | "Sensing & Satellite";
  summary: string;
  heroStatement: string;
  heroSubStatement?: string;
  visualMetaphor: string;
  role: string;
  roleDetails: string[];
  team?: string;
  technologies: string[];
  problem: string;
  insight: string;
  solution: string;
  physicsChecks?: {
    name: string;
    description: string;
    threshold: string;
    file?: string;
  }[];
  stateMachine?: {
    state: string;
    meaning: string;
    transitionRule: string;
  }[];
  architectureSteps: ArchitectureNode[];
  metrics?: MetricItem[];
  achievement?: {
    title: string;
    event: string;
    rank: string;
    prize?: string;
    year: string;
  };
  links: ProjectLink[];
  featured: boolean;
  tier?: "featured" | "secondary" | "archive";
  archive: boolean;
  verified: boolean;
  notes?: string;
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  rank: string;
  highlightValue: string;
  highlightLabel: string;
  projectSlug?: string;
  prize?: string;
  description: string;
  verifiedEvidence: string;
  tags: string[];
}

export interface ExperimentItem {
  id: string;
  num: string;
  date: string;
  title: string;
  domain: "Reinforcement Learning" | "Sensor Integrity" | "Package Security" | "Agent Orchestration" | "Realtime Netcode";
  hypothesis: string;
  method: string;
  result: "SUCCESS" | "FAILED" | "CONVERGED" | "PARTIAL";
  observation: string;
  nextStep: string;
  repoSlug?: string;
  metrics?: { label: string; value: string }[];
}

export interface NoteItem {
  slug: string;
  date: string;
  title: string;
  subtitle: string;
  readTime: string;
  tags: string[];
  content: string[];
}
