export default function RoadmapPage() {
  return (
    <section>
      <h1 className="pageTitle">Roadmap</h1>
      <div className="grid">
        <article className="card">
          <h3>Phase 1 - Foundation</h3>
          <p>Monorepo baseline, public web app, and deployment readiness.</p>
        </article>
        <article className="card">
          <h3>Phase 2 - Registry and Standards</h3>
          <p>Canonical data model, inventory ingestion, and standards mapping.</p>
        </article>
        <article className="card">
          <h3>Phase 3 - Recommendation Intelligence</h3>
          <p>Explainable consolidation and alignment recommendations.</p>
        </article>
        <article className="card">
          <h3>Phase 4 - Integrations and AI</h3>
          <p>Operational integrations and role-based AI guidance.</p>
        </article>
      </div>
    </section>
  );
}
