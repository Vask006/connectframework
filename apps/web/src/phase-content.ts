export type PhaseStatus = "Complete" | "In Progress" | "Planned";

export type RoadmapPhase = {
  id: string;
  phase: string;
  status: PhaseStatus;
  summary: string;
  objectives: string[];
  deliverables: string[];
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1 — Public Foundation",
    status: "Complete",
    summary:
      "Establish repository structure, public website, documentation, sample data, and architecture diagrams as portfolio evidence.",
    objectives: [
      "Present CONNECT clearly to enterprises and technical audiences",
      "Document architecture, use cases, and governance model",
      "Provide a build-verified monorepo baseline on GitHub"
    ],
    deliverables: [
      "Next.js public website (Home, Architecture, Use Cases, Roadmap, Demo, Docs, Modules)",
      "Mermaid and web architecture diagrams",
      "Sample tools, rules, and standards datasets",
      "CI workflow (lint, typecheck, build)"
    ]
  },
  {
    id: "phase-2",
    phase: "Phase 2 — Governance Data Model",
    status: "Complete",
    summary:
      "Canonical schemas, expanded registry datasets, ingestion contracts, and rule-based compliance evaluation in the public demo.",
    objectives: [
      "Standardize registry metadata",
      "Enable repeatable governance evaluations",
      "Prepare data for interactive demos and APIs"
    ],
    deliverables: [
      "JSON schemas for tools, APIs, platforms, rules, standards, exceptions",
      "Expanded sample datasets and ingestion contract examples",
      "Registry library and governance evaluation engine",
      "Demo and registry pages with compliance scoring"
    ]
  },
  {
    id: "phase-3",
    phase: "Phase 3 — Governance Engine MVP",
    status: "Planned",
    summary:
      "Implement policy evaluation primitives and first governance insight views.",
    objectives: [
      "Evaluate assets against governance rules",
      "Produce compliance scores and exceptions",
      "Expose governance operations via API"
    ],
    deliverables: [
      ".NET Web API scaffold (packages/api)",
      "Rule evaluation service",
      "Governance dashboard MVP",
      "Approval workflow prototype"
    ]
  },
  {
    id: "phase-4",
    phase: "Phase 4 — Consolidation Intelligence",
    status: "Planned",
    summary:
      "Detect overlap and generate explainable consolidation recommendations.",
    objectives: [
      "Identify duplicate tools and APIs",
      "Prioritize rationalization opportunities",
      "Support portfolio decision-making"
    ],
    deliverables: [
      "Overlap detection heuristics",
      "Recommendation engine with rationale",
      "Executive consolidation views",
      "Cost and risk impact summaries"
    ]
  },
  {
    id: "phase-5",
    phase: "Phase 5 — AI Assistant and Enablement",
    status: "Planned",
    summary:
      "Add explainable AI guidance for executives, architects, engineers, and risk officers.",
    objectives: [
      "Provide role-specific summaries",
      "Connect findings to training paths",
      "Improve recommendation quality over time"
    ],
    deliverables: [
      "Semantic Kernel integration",
      "RAG over governance corpus",
      "AI assistant UI workflows",
      "Training recommendation engine"
    ]
  },
  {
    id: "phase-6",
    phase: "Phase 6 — Enterprise Integrations",
    status: "Planned",
    summary:
      "Integrate CMDB, monitoring, CI/CD, and identity systems for continuous governance feedback.",
    objectives: [
      "Synchronize operational context",
      "Detect shadow IT signals",
      "Close the governance feedback loop"
    ],
    deliverables: [
      "CMDB connector",
      "Monitoring telemetry ingestion",
      "CI/CD policy gate integration",
      "Operational adoption metrics"
    ]
  }
];
