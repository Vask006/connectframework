import { processingFlow } from "@/src/architecture-content";

export function ProcessingFlowDiagram() {
  return (
    <div className="verticalFlow" aria-label="CONNECT processing flow diagram">
      {processingFlow.map((step, index) => (
        <div key={step} className="verticalFlowRow">
          <div className="verticalFlowStep">
            <span className="flowStepIndex">{index + 1}</span>
            <span>{step}</span>
          </div>
          {index < processingFlow.length - 1 ? (
            <div className="verticalFlowArrow" aria-hidden="true">
              ↓
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
