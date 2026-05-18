import { evaluateApiCompliance, getApis } from "@/src/lib/demo-data";

function statusClass(status: string) {
  if (status === "Compliant") return "complianceBadge complianceCompliant";
  if (status === "Partially Compliant") return "complianceBadge compliancePartial";
  return "complianceBadge complianceNonCompliant";
}

export function ApiCatalogTable() {
  const apis = getApis();

  return (
    <div className="tableWrap">
      <table className="dataTable">
        <thead>
          <tr>
            <th>API</th>
            <th>Version</th>
            <th>Owner</th>
            <th>Lifecycle</th>
            <th>Naming</th>
            <th>Compliance</th>
          </tr>
        </thead>
        <tbody>
          {apis.map((api) => {
            const result = evaluateApiCompliance(api);
            return (
              <tr key={api.id}>
                <td>
                  <strong>{api.name}</strong>
                  <span className="tableSubtext">{api.domain}</span>
                </td>
                <td>{api.version}</td>
                <td>{api.owner || "—"}</td>
                <td>{api.lifecycleStatus}</td>
                <td>{api.namingCompliant ? "Compliant" : "Violation"}</td>
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
