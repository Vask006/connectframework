import { Hero } from "@/components/Hero";
import { RoadmapPhaseCard } from "@/components/RoadmapPhaseCard";
import { Section } from "@/components/Section";
import { roadmapPhases } from "@/src/phase-content";

export default function RoadmapPage() {
  return (
    <>
      <Hero
        eyebrow="Roadmap"
        title="CONNECT Framework Delivery Roadmap"
        description="Six phased stages from public foundation through enterprise integrations. Phase 1 is complete; later phases define the product evolution path."
      />
      <Section
        title="Phased Delivery Plan"
        subtitle="Each phase adds measurable governance capability while keeping the framework practical for enterprise adoption."
      >
        <div className="useCaseGrid">
          {roadmapPhases.map((item) => (
            <RoadmapPhaseCard
              key={item.id}
              phase={item.phase}
              status={item.status}
              summary={item.summary}
              objectives={item.objectives}
              deliverables={item.deliverables}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
