import { getGovernanceRules } from "@/src/lib/demo-data";

export function GovernanceRulesPanel() {
  const rules = getGovernanceRules();

  return (
    <div className="useCaseGrid">
      {rules.map((rule) => (
        <article key={rule.id} className="card">
          <div className="phaseCardHeader">
            <h3>{rule.name}</h3>
            <span className={`phaseStatus ${rule.severity === "High" ? "statusComplete" : "statusProgress"}`}>
              {rule.severity}
            </span>
          </div>
          <p>{rule.description}</p>
          <p className="tableSubtext">Applies to: {rule.appliesTo}</p>
        </article>
      ))}
    </div>
  );
}
