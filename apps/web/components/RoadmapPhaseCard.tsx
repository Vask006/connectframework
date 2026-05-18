import type { PhaseStatus } from "@/src/phase-content";

type RoadmapPhaseCardProps = {
  phase: string;
  status: PhaseStatus;
  summary: string;
  objectives: string[];
  deliverables: string[];
};

const statusClass: Record<PhaseStatus, string> = {
  Complete: "statusComplete",
  "In Progress": "statusProgress",
  Planned: "statusPlanned"
};

export function RoadmapPhaseCard({
  phase,
  status,
  summary,
  objectives,
  deliverables
}: RoadmapPhaseCardProps) {
  return (
    <article className="card roadmapPhaseCard">
      <div className="phaseCardHeader">
        <h3>{phase}</h3>
        <span className={`phaseStatus ${statusClass[status]}`}>{status}</span>
      </div>
      <p>{summary}</p>
      <h4>Objectives</h4>
      <ul className="phaseList">
        {objectives.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Deliverables</h4>
      <ul className="phaseList">
        {deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
