// Architecture diagram and page content shared across the architecture experience.

export const architectureLayers = [
  {
    layer: "Experience Layer",
    description: "Role-specific interfaces for governance collaboration and guidance.",
    modules: ["Collaboration Hub", "AI Assistant", "Training Platform"]
  },
  {
    layer: "Governance Intelligence Layer",
    description: "Policy evaluation, standards alignment, and consolidation intelligence.",
    modules: ["Governance Engine", "Standardization Engine", "Consolidation Recommender"]
  },
  {
    layer: "Platform Knowledge Layer",
    description: "Enterprise inventory of tools, platforms, APIs, and ownership.",
    modules: ["Tool Registry", "API Services Catalog"]
  },
  {
    layer: "Integration Layer",
    description: "Operational and asset context from enterprise systems.",
    modules: ["Monitoring and CMDB Integration"]
  }
] as const;

export const processingFlow = [
  "Tool / API / Platform Registration",
  "Metadata Extraction and Auto-Tagging",
  "Governance Validation",
  "AI Analysis",
  "Consolidation Recommendation",
  "Role-Specific Decision Support",
  "Training and Onboarding",
  "Continuous Monitoring and CMDB Feedback"
] as const;

export const closedLoopSteps = [
  "Register",
  "Validate",
  "Analyze",
  "Recommend",
  "Train",
  "Monitor",
  "Improve"
] as const;

export const architectureModules = [
  {
    title: "Collaboration Hub",
    description:
      "Shared workspace for governance discussions, design decisions, and traceability."
  },
  {
    title: "Governance Engine",
    description:
      "Evaluates policy rules and standards across tools, platforms, and engineering workflows."
  },
  {
    title: "Tool Registry",
    description:
      "Maintains a centralized inventory of tools, platforms, APIs, owners, and lifecycle states."
  },
  {
    title: "Standardization Engine",
    description:
      "Maps enterprise standards to implementation artifacts and highlights alignment gaps."
  },
  {
    title: "Consolidation Recommender",
    description:
      "Identifies overlap and presents rationalization opportunities with practical trade-offs."
  },
  {
    title: "AI Assistant",
    description:
      "Delivers explainable summaries and role-specific guidance for leaders and delivery teams."
  },
  {
    title: "Training and Onboarding Platform",
    description:
      "Converts governance outcomes into role-based enablement and onboarding pathways."
  },
  {
    title: "Monitoring and CMDB Integration",
    description:
      "Feeds operational telemetry and enterprise asset context back into governance workflows."
  },
  {
    title: "Platform Services API Catalog",
    description:
      "Promotes discoverability and reuse of approved platform services and enterprise APIs."
  }
] as const;

export const aiCapabilities = [
  "Metadata extraction",
  "Tool classification",
  "Duplicate detection",
  "Governance rule explanation",
  "Standards validation",
  "Risk scoring",
  "Recommendation generation",
  "Training recommendation",
  "Executive and engineer summaries"
] as const;

export const targetStack = [
  { tier: "Users", items: ["Executives", "Architects", "Engineers", "Risk Officers"] },
  { tier: "Frontend", items: ["Next.js (React + TypeScript)", "Azure Static Web Apps"] },
  { tier: "Backend", items: [".NET Web API", "Azure App Service / Container Apps"] },
  { tier: "Data", items: ["PostgreSQL / Cosmos DB", "Knowledge Graph (Neo4j)"] },
  { tier: "AI / RAG", items: ["Semantic Kernel", "Vector Database", "Azure OpenAI / OSS LLM"] },
  { tier: "Integrations", items: ["CMDB", "Monitoring", "CI/CD", "Identity"] }
] as const;
