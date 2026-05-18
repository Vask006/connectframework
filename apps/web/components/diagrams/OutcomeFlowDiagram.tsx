import { closedLoopSteps } from "@/src/architecture-content";

const outcomeStages = [
  {
    title: "Enterprise Inputs",
    detail: "Tools, APIs, platforms, standards, and ownership metadata"
  },
  {
    title: "Registration and Metadata",
    detail: "Inventory capture, tagging, and baseline classification"
  },
  {
    title: "Governance and AI Analysis",
    detail: "Policy validation, standards checks, and explainable insights"
  },
  {
    title: "Recommendations and Decisions",
    detail: "Consolidation options and role-specific decision support"
  },
  {
    title: "Enablement and Monitoring",
    detail: "Training pathways with CMDB and telemetry feedback"
  }
] as const;

export function OutcomeFlowDiagram() {
  return (
    <div className="outcomeDiagram" role="img" aria-label="CONNECT outcome flow diagram">
      {outcomeStages.map((stage, index) => (
        <div key={stage.title} className="outcomeStage">
          <div className="diagramNode">{stage.title}</div>
          <p className="outcomeDetail">{stage.detail}</p>
          {index < outcomeStages.length - 1 ? (
            <div className="diagramArrow" aria-hidden="true">
              ↓
            </div>
          ) : null}
        </div>
      ))}
      <p className="loopNote">
        Closed-loop cycle: {closedLoopSteps.join(" → ")} → feedback
      </p>
    </div>
  );
}
