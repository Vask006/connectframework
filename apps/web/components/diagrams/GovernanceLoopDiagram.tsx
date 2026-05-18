import { closedLoopSteps } from "@/src/architecture-content";

export function GovernanceLoopDiagram() {
  return (
    <div className="loopDiagram" role="img" aria-label="CONNECT closed-loop governance diagram">
      <div className="loopTrack">
        {closedLoopSteps.map((step, index) => (
          <div key={step} className="loopStepWrap">
            <div className="loopStep">{step}</div>
            {index < closedLoopSteps.length - 1 ? (
              <span className="loopArrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="loopNote">Continuous feedback returns insights to registration and validation.</p>
    </div>
  );
}
