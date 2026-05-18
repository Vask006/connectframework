import { getExceptions, getGovernanceRules } from "@/src/lib/demo-data";

function statusClass(status: string) {
  if (status === "Approved") return "complianceBadge complianceCompliant";
  if (status === "Pending") return "complianceBadge compliancePartial";
  return "complianceBadge complianceNonCompliant";
}

export function ExceptionsPanel() {
  const exceptions = getExceptions();
  const rules = getGovernanceRules();
  const ruleNames = new Map(rules.map((rule) => [rule.id, rule.name]));

  return (
    <div className="useCaseGrid">
      {exceptions.map((exception) => (
        <article key={exception.id} className="card">
          <div className="phaseCardHeader">
            <h3>{exception.assetId}</h3>
            <span className={statusClass(exception.status)}>{exception.status}</span>
          </div>
          <p>
            <strong>{exception.assetType}</strong> · Rule:{" "}
            {ruleNames.get(exception.ruleId) ?? exception.ruleId}
          </p>
          <p>{exception.justification}</p>
          <p className="tableSubtext">
            Owner: {exception.owner} · Approver: {exception.approver} · Expires:{" "}
            {exception.expiresOn}
          </p>
        </article>
      ))}
    </div>
  );
}
