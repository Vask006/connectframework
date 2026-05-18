import { getPortfolioComplianceSummary } from "@/src/lib/demo-data";

function statusClass(status: string) {
  if (status === "Compliant") return "complianceBadge complianceCompliant";
  if (status === "Partially Compliant") return "complianceBadge compliancePartial";
  return "complianceBadge complianceNonCompliant";
}

export function ComplianceScoresPanel() {
  const summary = getPortfolioComplianceSummary();

  return (
    <div className="compliancePanel">
      <div className="demoSummaryGrid">
        <article className="demoMetric">
          <p className="demoMetricLabel">Portfolio Average Score</p>
          <p className="demoMetricValue">{summary.averageScore}%</p>
        </article>
        <article className="demoMetric">
          <p className="demoMetricLabel">Compliant Assets</p>
          <p className="demoMetricValue">{summary.compliant}</p>
        </article>
        <article className="demoMetric">
          <p className="demoMetricLabel">Partially Compliant</p>
          <p className="demoMetricValue">{summary.partial}</p>
        </article>
        <article className="demoMetric">
          <p className="demoMetricLabel">Non-Compliant</p>
          <p className="demoMetricValue">{summary.nonCompliant}</p>
        </article>
      </div>

      <div className="tableWrap complianceTable">
        <table className="dataTable">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Score</th>
              <th>Status</th>
              <th>Open Findings</th>
            </tr>
          </thead>
          <tbody>
            {[...summary.toolResults, ...summary.apiResults].map((result) => {
              const openFindings = result.findings.filter(
                (finding) => !finding.passed && !finding.waived
              ).length;
              return (
                <tr key={`${result.assetType}-${result.assetId}`}>
                  <td>
                    <strong>{result.assetName}</strong>
                    <span className="tableSubtext">{result.assetId}</span>
                  </td>
                  <td>{result.assetType}</td>
                  <td>{result.score}%</td>
                  <td>
                    <span className={statusClass(result.status)}>{result.status}</span>
                  </td>
                  <td>{openFindings}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
