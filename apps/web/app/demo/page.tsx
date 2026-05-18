import { ApiCatalogTable } from "@/components/demo/ApiCatalogTable";
import { ComplianceScoresPanel } from "@/components/demo/ComplianceScoresPanel";
import { DemoSummary } from "@/components/demo/DemoSummary";
import { ExceptionsPanel } from "@/components/demo/ExceptionsPanel";
import { GovernanceEvaluationPanel } from "@/components/demo/GovernanceEvaluationPanel";
import { GovernanceRulesPanel } from "@/components/demo/GovernanceRulesPanel";
import { PlatformRegistryTable } from "@/components/demo/PlatformRegistryTable";
import { StandardsPanel } from "@/components/demo/StandardsPanel";
import { ToolRegistryTable } from "@/components/demo/ToolRegistryTable";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default function DemoPage() {
  return (
    <>
      <Hero
        eyebrow="Interactive Demo"
        title="Governance Demo Using Sample Enterprise Data"
        description="Phase 2 registry views evaluate tools and APIs against governance rules, apply approved exceptions, and surface compliance scores from structured JSON in the data/ folder."
      />
      <Section
        title="Portfolio Snapshot"
        subtitle="Summary metrics computed from tools, APIs, platforms, rules, standards, and exceptions."
      >
        <DemoSummary />
      </Section>
      <Section
        title="Compliance Scores"
        subtitle="Rule-based evaluation with severity-weighted scoring and exception waivers."
      >
        <ComplianceScoresPanel />
      </Section>
      <Section title="Tool Registry" subtitle="Enterprise tools with governance metadata and live compliance scoring.">
        <ToolRegistryTable />
      </Section>
      <Section title="API Catalog" subtitle="API inventory with naming, versioning, and compliance evaluation.">
        <ApiCatalogTable />
      </Section>
      <Section title="Platform Registry" subtitle="Platforms linked to underlying tools in the portfolio.">
        <PlatformRegistryTable />
      </Section>
      <Section
        title="Governance Findings"
        subtitle="Assets requiring attention — failed rules with optional exception waivers."
      >
        <GovernanceEvaluationPanel />
      </Section>
      <Section title="Policy Exceptions" subtitle="Time-bound waivers for specific rules and assets.">
        <ExceptionsPanel />
      </Section>
      <Section title="Governance Rules" subtitle="Representative policy rules used for validation scenarios.">
        <GovernanceRulesPanel />
      </Section>
      <Section title="Engineering Standards" subtitle="Active standards mapped to governance and delivery controls.">
        <StandardsPanel />
      </Section>
    </>
  );
}
