import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { documentationLinks, getDocHref } from "@/src/docs-content";
import { roadmapPhases } from "@/src/phase-content";

export default function DocsPage() {
  return (
    <>
      <Hero
        eyebrow="Documentation"
        title="CONNECT Framework Documentation Hub"
        description="Canonical documentation lives in the GitHub repository. Use this hub to navigate product, architecture, governance, and phase deliverables."
      />
      <Section title="Core Documents" subtitle="Primary references for organizations evaluating CONNECT.">
        <div className="docsGrid">
          {documentationLinks.map((doc) => (
            <a
              key={doc.path}
              className="docCard"
              href={getDocHref(doc.path)}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <span className="docPath">{doc.path}</span>
            </a>
          ))}
        </div>
      </Section>
      <Section title="Phase Documentation" subtitle="Delivery phases and evidence artifacts on GitHub.">
        <div className="docsGrid">
          {roadmapPhases.map((phase) => (
            <article key={phase.id} className="docCard docCardStatic">
              <h3>{phase.phase}</h3>
              <p>{phase.summary}</p>
              <span className={`phaseStatus ${phase.status === "Complete" ? "statusComplete" : phase.status === "In Progress" ? "statusProgress" : "statusPlanned"}`}>
                {phase.status}
              </span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
