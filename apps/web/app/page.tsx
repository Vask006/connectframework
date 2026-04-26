import Link from "next/link";
import { InfoCard } from "@/components/InfoCard";
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
      <section className="hero">
        <p className="eyebrow">CONNECT Framework</p>
        <h1>AI-Augmented Enterprise Governance and Platform Alignment</h1>
        <p>
          CONNECT helps organizations reduce tool sprawl, enforce standards, guide
          engineers, detect redundant platforms, and align digital transformation
          through explainable AI-assisted governance.
        </p>
        <div className="ctaGroup">
          <Link className="btn btnPrimary" href="#solution">
            Explore the Framework
          </Link>
          <Link className="btn" href="/architecture">
            View Architecture
          </Link>
        </div>
      </section>

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
            <InfoCard
              key={module.name}
              title={module.name}
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
            <InfoCard
              key={audience.role}
              title={audience.role}
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
          <Link className="btn btnPrimary" href="/roadmap">
            View Project Roadmap
          </Link>
        </div>
      </Section>
    </>
  );
}
