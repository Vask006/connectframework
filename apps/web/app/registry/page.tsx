import { ApiCatalogTable } from "@/components/demo/ApiCatalogTable";
import { ComplianceScoresPanel } from "@/components/demo/ComplianceScoresPanel";
import { DemoSummary } from "@/components/demo/DemoSummary";
import { ExceptionsPanel } from "@/components/demo/ExceptionsPanel";
import { PlatformRegistryTable } from "@/components/demo/PlatformRegistryTable";
import { ToolRegistryTable } from "@/components/demo/ToolRegistryTable";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default function RegistryPage() {
  return (
    <>
      <Hero
        eyebrow="Phase 2 — Registry"
        title="Canonical Registry and Compliance Views"
        description="Unified registry presentation for tools, APIs, and platforms backed by JSON schemas, ingestion contracts, and a lightweight governance evaluation engine."
      />
      <Section
        title="Registry Overview"
        subtitle="Portfolio counts and compliance summary from sample enterprise datasets."
      >
        <DemoSummary />
      </Section>
      <Section title="Compliance Dashboard" subtitle="Portfolio-wide scores and per-asset status.">
        <ComplianceScoresPanel />
      </Section>
      <Section title="Tools" subtitle="Tool registry with governance fields and evaluation results.">
        <ToolRegistryTable />
      </Section>
      <Section title="APIs" subtitle="API catalog entries with versioning and naming checks.">
        <ApiCatalogTable />
      </Section>
      <Section title="Platforms" subtitle="Platform groupings and linked tool relationships.">
        <PlatformRegistryTable />
      </Section>
      <Section title="Exceptions" subtitle="Approved and pending policy exceptions.">
        <ExceptionsPanel />
      </Section>
    </>
  );
}
