import { InfoCard } from "@/components/InfoCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

const highLevelFlow = [
  "Tool / API / Platform Registration",
  "Metadata Extraction and Auto-Tagging",
  "Governance Validation",
  "AI Analysis",
  "Consolidation Recommendation",
  "Role-Specific Decision Support",
  "Training and Onboarding",
  "Continuous Monitoring and CMDB Feedback"
] as const;

const modules = [
  {
    title: "Collaboration Hub",
    description:
      "Provides a shared space for governance discussions, design decisions, and traceability."
  },
  {
    title: "Governance Engine",
    description:
      "Evaluates policy rules and standards across tools, platforms, and engineering workflows."
  },
  {
    title: "Tool Registry",
    description:
      "Maintains a centralized inventory of tools, platforms, APIs, owners, and lifecycle states."
  },
  {
    title: "Standardization Engine",
    description:
      "Maps enterprise standards to implementation artifacts and highlights alignment gaps."
  },
  {
    title: "Consolidation Recommender",
    description:
      "Identifies overlap and presents rationalization opportunities with practical trade-offs."
  },
  {
    title: "AI Assistant",
    description:
      "Delivers explainable summaries and role-specific guidance for leaders and delivery teams."
  },
  {
    title: "Training and Onboarding Platform",
    description:
      "Converts governance outcomes into role-based enablement and onboarding pathways."
  },
  {
    title: "Monitoring and CMDB Integration",
    description:
      "Feeds operational telemetry and enterprise asset context back into governance workflows."
  },
  {
    title: "Platform Services API Catalog",
    description:
      "Promotes discoverability and reuse of approved platform services and enterprise APIs."
  }
] as const;

const aiCapabilities = [
  "Metadata extraction",
  "Tool classification",
  "Duplicate detection",
  "Governance rule explanation",
  "Standards validation",
  "Risk scoring",
  "Recommendation generation",
  "Training recommendation",
  "Executive and engineer summaries"
] as const;

export default function ArchitecturePage() {
  return (
    <>
      <Hero
        eyebrow="Architecture"
        title="CONNECT Framework Enterprise Architecture"
        description="CONNECT combines governance, tool registry, AI analysis, standardization, training, and monitoring into a closed-loop platform that supports strategic and delivery decisions across the enterprise."
      />

      <Section
        title="High-Level Flow"
        subtitle="Core processing lifecycle from registration to continuous governance improvement."
      >
        <div className="verticalFlow" aria-label="CONNECT high-level architecture flow">
          {highLevelFlow.map((step, index) => (
            <div key={step} className="verticalFlowRow">
              <div className="verticalFlowStep">{step}</div>
              {index < highLevelFlow.length - 1 ? (
                <div className="verticalFlowArrow" aria-hidden="true">
                  ↓
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Core Architecture Modules"
        subtitle="Each module contributes to a practical governance operating model."
      >
        <div className="grid">
          {modules.map((module) => (
            <InfoCard
              key={module.title}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </Section>

      <Section
        title="AI Role in CONNECT"
        subtitle="AI capabilities are applied as explainable assistance rather than opaque automation."
      >
        <div className="tagGrid">
          {aiCapabilities.map((capability) => (
            <div key={capability} className="tagCard">
              {capability}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Future Technical Architecture"
        subtitle="Practical target stack for productization and enterprise deployment."
      >
        <div className="grid gridAudience">
          <InfoCard title="Frontend" description="React / Next.js" />
          <InfoCard title="Backend" description=".NET Web API" />
          <InfoCard title="Database" description="PostgreSQL or Cosmos DB" />
          <InfoCard
            title="Knowledge Graph"
            description="Neo4j or graph-capable database"
          />
          <InfoCard
            title="AI / RAG"
            description="Semantic Kernel, vector database, Azure OpenAI or open-source LLM"
          />
          <InfoCard
            title="Hosting"
            description="Azure Static Web Apps, Azure App Service, Azure Container Apps"
          />
        </div>
      </Section>

      <Section
        title="Architecture Diagram"
        subtitle="Simple logical view of how enterprise inputs move through governance intelligence to outcomes."
      >
        <div className="diagram">
          <div className="diagramNode">Enterprise Inputs</div>
          <div className="diagramArrow">↓</div>
          <div className="diagramNode">Registration + Metadata Processing</div>
          <div className="diagramArrow">↓</div>
          <div className="diagramNode">Governance + AI Analysis</div>
          <div className="diagramArrow">↓</div>
          <div className="diagramNode">Recommendations + Decision Support</div>
          <div className="diagramArrow">↓</div>
          <div className="diagramNode">Training + Monitoring Feedback Loop</div>
        </div>
      </Section>
    </>
  );
}
