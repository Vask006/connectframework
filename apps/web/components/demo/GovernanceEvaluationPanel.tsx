import {
  evaluateApiCompliance,
  evaluateToolCompliance,
  getApis,
  getTools
} from "@/src/lib/demo-data";

export function GovernanceEvaluationPanel() {
  const evaluations = [
    ...getTools().map(evaluateToolCompliance),
    ...getApis().map(evaluateApiCompliance)
  ].filter((result) => result.status !== "Compliant");

  return (
    <div className="evaluationList">
      {evaluations.map((result) => (
        <article key={`${result.assetType}-${result.assetId}`} className="card evaluationCard">
          <div className="phaseCardHeader">
            <h3>
              {result.assetName}{" "}
              <span className="tableSubtext">
                ({result.assetType} · {result.score}%)
              </span>
            </h3>
            <span className="complianceBadge compliancePartial">{result.status}</span>
          </div>
          <ul className="findingList">
            {result.findings
              .filter((finding) => !finding.passed)
              .map((finding) => (
                <li key={finding.ruleId}>
                  <strong>{finding.ruleName}</strong> ({finding.severity})
                  {finding.waived ? " — waived by approved exception" : ""}
                  <span className="tableSubtext">{finding.message}</span>
                </li>
              ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
