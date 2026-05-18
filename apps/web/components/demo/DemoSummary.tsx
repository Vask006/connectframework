import { getDemoSummary } from "@/src/lib/demo-data";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export function DemoSummary() {
  const summary = getDemoSummary();

  return (
    <div className="demoSummaryGrid">
      <article className="demoMetric">
        <p className="demoMetricLabel">Registered Tools</p>
        <p className="demoMetricValue">{summary.toolCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">API Catalog Entries</p>
        <p className="demoMetricValue">{summary.apiCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Platforms</p>
        <p className="demoMetricValue">{summary.platformCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Governance Rules</p>
        <p className="demoMetricValue">{summary.ruleCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Active Standards</p>
        <p className="demoMetricValue">{summary.standardCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Approved Exceptions</p>
        <p className="demoMetricValue">{summary.exceptionCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Annual Tool Spend (Sample)</p>
        <p className="demoMetricValue">{formatCurrency(summary.totalAnnualCost)}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Avg. Compliance Score</p>
        <p className="demoMetricValue">{summary.averageComplianceScore}%</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Non-Compliant Assets</p>
        <p className="demoMetricValue">{summary.nonCompliantAssets}</p>
      </article>
    </div>
  );
}
