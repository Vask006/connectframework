import { InfoCard } from "@/components/InfoCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { GovernanceLoopDiagram } from "@/components/diagrams/GovernanceLoopDiagram";
import { LayeredArchitectureDiagram } from "@/components/diagrams/LayeredArchitectureDiagram";
import { OutcomeFlowDiagram } from "@/components/diagrams/OutcomeFlowDiagram";
import { ProcessingFlowDiagram } from "@/components/diagrams/ProcessingFlowDiagram";
import { TargetStackDiagram } from "@/components/diagrams/TargetStackDiagram";
import {
  aiCapabilities,
  architectureModules
} from "@/src/architecture-content";

export default function ArchitecturePage() {
  return (
    <>
      <Hero
        eyebrow="Architecture"
        title="CONNECT Framework Enterprise Architecture"
        description="CONNECT combines governance, tool registry, AI analysis, standardization, training, and monitoring into a closed-loop platform that supports strategic and delivery decisions across the enterprise."
      />

      <Section
        title="Architecture Overview"
        subtitle="A modular architecture that aligns governance policy with platform inventory, AI-assisted analysis, and continuous operational feedback."
      >
        <LayeredArchitectureDiagram />
      </Section>

      <Section
        title="Closed-Loop Governance Model"
        subtitle="CONNECT operates as a repeatable cycle rather than a one-time compliance exercise."
      >
        <GovernanceLoopDiagram />
      </Section>

      <Section
        title="High-Level Processing Flow"
        subtitle="Core processing lifecycle from registration to continuous governance improvement."
      >
        <ProcessingFlowDiagram />
      </Section>

      <Section
        title="Core Architecture Modules"
        subtitle="Each module contributes to a practical governance operating model."
      >
        <div className="grid">
          {architectureModules.map((module) => (
            <InfoCard
              key={module.title}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </Section>

      <Section
        title="AI Role in CONNECT"
        subtitle="AI capabilities are applied as explainable assistance rather than opaque automation."
      >
        <div className="tagGrid">
          {aiCapabilities.map((capability) => (
            <div key={capability} className="tagCard">
              {capability}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Future Technical Architecture"
        subtitle="Practical target stack for productization and enterprise deployment."
      >
        <TargetStackDiagram />
      </Section>

      <Section
        title="Outcome Flow Diagram"
        subtitle="How enterprise inputs move through governance intelligence to measurable outcomes."
      >
        <OutcomeFlowDiagram />
      </Section>
    </>
  );
}
