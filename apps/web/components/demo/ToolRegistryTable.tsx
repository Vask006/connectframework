import { getTools } from "@/src/lib/demo-data";

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
            <th>Annual Cost</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.id}>
              <td>
                <strong>{tool.name}</strong>
                <span className="tableSubtext">{tool.businessDomain}</span>
              </td>
              <td>{tool.category}</td>
              <td>{tool.owner}</td>
              <td>{tool.lifecycleStatus}</td>
              <td>{tool.riskLevel}</td>
              <td>{formatCurrency(tool.annualCost)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
