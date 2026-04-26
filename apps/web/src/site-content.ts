// Shared content and labels for the landing page.
export const problemAreas = [
  "Tool sprawl across departments and business units.",
  "Duplicate platforms creating avoidable cost and complexity.",
  "Inconsistent standards across products and delivery teams.",
  "Fragmented governance models with limited accountability.",
  "Slow architecture reviews and delayed platform decisions.",
  "Shadow IT adoption outside approved governance pathways.",
  "Disconnected training and onboarding for engineering teams.",
  "Limited visibility across tools, APIs, platforms, and ownership."
] as const;

export const governanceLoop = [
  "Register",
  "Validate",
  "Analyze",
  "Recommend",
  "Train",
  "Monitor",
  "Improve"
] as const;

export const modules = [
  {
    name: "Collaboration Hub",
    description:
      "Shared workspace for governance discussions and decision traceability."
  },
  {
    name: "Governance Engine",
    description: "Policy evaluation and role-aware governance insights."
  },
  {
    name: "Tool Registry",
    description: "Inventory of platforms, APIs, products, and ownership."
  },
  {
    name: "Standardization Engine",
    description: "Standards mapping, scorecards, and exception guidance."
  },
  {
    name: "Consolidation Recommender",
    description: "Detection of redundancy and consolidation opportunities."
  },
  {
    name: "AI Assistant",
    description: "Explainable role-specific guidance for key decisions."
  },
  {
    name: "Training Platform",
    description: "Onboarding and upskilling aligned to governance objectives."
  },
  {
    name: "Monitoring and CMDB",
    description: "Operational and asset context for reliable governance."
  },
  {
    name: "API Services Catalog",
    description: "Discoverable enterprise services for reuse and alignment."
  }
] as const;

export const audiences = [
  {
    role: "Executives",
    detail:
      "Portfolio-level visibility into standardization progress and consolidation impact."
  },
  {
    role: "Architects",
    detail: "Structured governance workflows and standards-aligned decisions."
  },
  {
    role: "Engineers",
    detail:
      "Clear platform guidance, approved patterns, and reusable service pathways."
  },
  {
    role: "Risk and Compliance Officers",
    detail:
      "Transparent policy posture, ownership traceability, and control reporting."
  },
  {
    role: "Platform Teams",
    detail:
      "Shared operating model for adoption, service lifecycle, and platform health."
  }
] as const;

export const useCases = [
  "Tool rationalization",
  "API governance",
  "Cloud standards enforcement",
  "DevSecOps alignment",
  "Platform reuse",
  "Engineering onboarding",
  "Governance reporting"
] as const;
