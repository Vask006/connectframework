import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ModuleCard } from "@/components/ModuleCard";
import { Section } from "@/components/Section";
import {
  audiences,
  governanceLoop,
  modules,
  problemAreas,
  useCases
} from "@/src/site-content";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="CONNECT Framework"
        title="AI-Augmented Enterprise Governance and Platform Alignment"
        description="CONNECT helps organizations reduce tool sprawl, enforce standards, guide engineers, detect redundant platforms, and align digital transformation through explainable AI-assisted governance."
        actions={[
          { label: "Explore the Framework", href: "#solution", primary: true },
          { label: "View Interactive Demo", href: "/demo" },
          { label: "View Architecture", href: "/architecture" }
        ]}
      />

      <Section
        title="Enterprise Problems We Address"
        subtitle="Many organizations struggle to govern platforms consistently across fast-moving engineering environments."
      >
        <div className="listPanel">
          <ul className="bulletList">
            {problemAreas.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="solution"
        title="Closed-Loop Governance System"
        subtitle="CONNECT applies a practical cycle to continuously improve governance quality and platform alignment."
      >
        <div className="flow">
          {governanceLoop.map((step, index) => (
            <div key={step} className="flowItem">
              <span>{step}</span>
              {index < governanceLoop.length - 1 ? (
                <span className="flowArrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Core Modules" subtitle="Nine integrated modules form the CONNECT operating model.">
        <div className="grid">
          {modules.map((module) => (
            <ModuleCard
              key={module.name}
              name={module.name}
              description={module.description}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Audience Focus"
        subtitle="Role-specific guidance supports strategic and operational decision-making."
      >
        <div className="grid gridAudience">
          {audiences.map((audience) => (
            <ModuleCard
              key={audience.role}
              name={audience.role}
              description={audience.detail}
            />
          ))}
        </div>
      </Section>

      <Section title="Use Cases" subtitle="Representative outcomes CONNECT is designed to support.">
        <div className="tagGrid">
          {useCases.map((item) => (
            <div key={item} className="tagCard">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Next Step">
        <div className="ctaPanel">
          <p>
            CONNECT is being developed as a practical framework and product prototype
            for enterprise governance, engineering standardization, and AI-assisted
            platform alignment.
          </p>
          <Link className="btn btnPrimary" href="/demo">
            View Interactive Demo
          </Link>
          <Link className="btn" href="/roadmap">
            View Project Roadmap
          </Link>
        </div>
      </Section>
    </>
  );
}
