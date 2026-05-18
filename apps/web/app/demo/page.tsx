import { DemoSummary } from "@/components/demo/DemoSummary";
import { GovernanceRulesPanel } from "@/components/demo/GovernanceRulesPanel";
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
        description="This prototype view demonstrates how CONNECT can present tool inventory, governance rules, and standards using structured data from the repository."
      />
      <Section
        title="Portfolio Snapshot"
        subtitle="Summary metrics computed from sample datasets in the data/ folder."
      >
        <DemoSummary />
      </Section>
      <Section title="Tool Registry" subtitle="Sample enterprise tools with cost, risk, and lifecycle metadata.">
        <ToolRegistryTable />
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
