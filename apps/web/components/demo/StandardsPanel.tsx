import { getStandards } from "@/src/lib/demo-data";

export function StandardsPanel() {
  const standards = getStandards();

  return (
    <div className="grid">
      {standards.map((standard) => (
        <article key={standard.id} className="card">
          <h3>{standard.name}</h3>
          <p>{standard.description}</p>
          <p className="tableSubtext">
            {standard.domain} · v{standard.version} · {standard.status}
          </p>
        </article>
      ))}
    </div>
  );
}
