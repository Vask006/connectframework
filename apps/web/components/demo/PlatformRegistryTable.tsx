import { getPlatforms, getTools } from "@/src/lib/demo-data";

export function PlatformRegistryTable() {
  const platforms = getPlatforms();
  const tools = getTools();
  const toolNames = new Map(tools.map((tool) => [tool.id, tool.name]));

  return (
    <div className="tableWrap">
      <table className="dataTable">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Lifecycle</th>
            <th>Linked Tools</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((platform) => (
            <tr key={platform.id}>
              <td>
                <strong>{platform.name}</strong>
                <span className="tableSubtext">{platform.businessDomain}</span>
              </td>
              <td>{platform.platformType}</td>
              <td>{platform.owner}</td>
              <td>{platform.lifecycleStatus}</td>
              <td>
                {platform.linkedToolIds
                  .map((id) => toolNames.get(id) ?? id)
                  .join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
