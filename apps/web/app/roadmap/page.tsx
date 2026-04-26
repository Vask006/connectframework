import { Hero } from "@/components/Hero";
import { RoadmapPhaseCard } from "@/components/RoadmapPhaseCard";
import { Section } from "@/components/Section";

const roadmapPhases = [
  {
    phase: "Phase 1 - Foundation",
    description: "Monorepo baseline, public web experience, and deployment readiness."
  },
  {
    phase: "Phase 2 - Registry and Standards",
    description: "Canonical data model, inventory ingestion, and standards mapping."
  },
  {
    phase: "Phase 3 - Recommendation Intelligence",
    description: "Explainable consolidation and alignment recommendations."
  },
  {
    phase: "Phase 4 - Integrations and AI",
    description: "Operational integrations and role-specific AI guidance."
  }
] as const;

export default function RoadmapPage() {
  return (
    <>
      <Hero
        eyebrow="Roadmap"
        title="CONNECT Framework Delivery Roadmap"
        description="The roadmap prioritizes practical progression from public framework visibility to enterprise-grade governance capabilities."
      />
      <Section title="Phased Plan" subtitle="Each phase builds measurable governance and platform alignment capabilities.">
        <div className="grid">
          {roadmapPhases.map((item) => (
            <RoadmapPhaseCard
              key={item.phase}
              phase={item.phase}
              description={item.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
