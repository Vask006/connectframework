const repoBase =
  "https://github.com/Vask006/connectframework/blob/main";

export const documentationLinks = [
  {
    title: "Product Vision",
    path: "docs/product-strategy/vision.md",
    description: "Vision, audience, value proposition, and differentiation."
  },
  {
    title: "Architecture Overview",
    path: "docs/architecture/architecture-overview.md",
    description: "System layers, data flow, AI role, and target MVP stack."
  },
  {
    title: "Enterprise Use Cases",
    path: "docs/use-cases/enterprise-use-cases.md",
    description: "Role-based scenarios and expected outcomes."
  },
  {
    title: "Sample Governance Model",
    path: "docs/governance-rules/sample-governance-model.md",
    description: "Rules, scoring, approvals, and exception handling."
  },
  {
    title: "Data Schema",
    path: "data/schema.md",
    description: "JSON contracts for tools, rules, and standards."
  },
  {
    title: "Delivery Phases",
    path: "docs/phases/README.md",
    description: "Phase 1–6 goals, status, and deliverables."
  },
  {
    title: "Architecture Diagrams",
    path: "diagrams/README.md",
    description: "Mermaid diagram sources for system and process views."
  }
] as const;

export function getDocHref(path: string) {
  return `${repoBase}/${path}`;
}
