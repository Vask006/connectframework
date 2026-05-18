import { evaluateToolCompliance, getTools } from "@/src/lib/demo-data";

function statusClass(status: string) {
  if (status === "Compliant") return "complianceBadge complianceCompliant";
  if (status === "Partially Compliant") return "complianceBadge compliancePartial";
  return "complianceBadge complianceNonCompliant";
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export function ToolRegistryTable() {
  const tools = getTools();

  return (
    <div className="tableWrap">
      <table className="dataTable">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Category</th>
            <th>Owner</th>
            <th>Lifecycle</th>
            <th>Risk</th>
            <th>Approved</th>
            <th>Annual Cost</th>
            <th>Compliance</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => {
            const result = evaluateToolCompliance(tool);
            return (
            <tr key={tool.id}>
              <td>
                <strong>{tool.name}</strong>
                <span className="tableSubtext">{tool.businessDomain}</span>
              </td>
              <td>{tool.category}</td>
              <td>{tool.owner}</td>
              <td>{tool.lifecycleStatus}</td>
              <td>{tool.riskLevel}</td>
              <td>{tool.approved ? "Yes" : "No"}</td>
              <td>{formatCurrency(tool.annualCost)}</td>
              <td>
                <span className={statusClass(result.status)}>
                  {result.score}% · {result.status}
                </span>
              </td>
            </tr>
          );
          })}
        </tbody>
      </table>
    </div>
  );
}
