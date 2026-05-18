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
        <p className="demoMetricLabel">Governance Rules</p>
        <p className="demoMetricValue">{summary.ruleCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Active Standards</p>
        <p className="demoMetricValue">{summary.standardCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Annual Tool Spend (Sample)</p>
        <p className="demoMetricValue">{formatCurrency(summary.totalAnnualCost)}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">Rationalization Candidates</p>
        <p className="demoMetricValue">{summary.rationalizeCount}</p>
      </article>
      <article className="demoMetric">
        <p className="demoMetricLabel">High-Severity Rules</p>
        <p className="demoMetricValue">{summary.highSeverityRules}</p>
      </article>
    </div>
  );
}
