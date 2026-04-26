import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { UseCaseCard } from "@/components/UseCaseCard";

const useCases = [
  {
    title: "1. Tool Rationalization",
    problem:
      "Enterprises often run multiple tools that perform similar functions, increasing cost and operational complexity.",
    capability:
      "CONNECT detects overlap, compares cost, usage, risk, and adoption, and recommends practical consolidation options.",
    outcome:
      "Reduced tool sprawl, lower spend, and a clearer platform portfolio with better ownership accountability.",
    sampleOutput:
      "Recommendation: Consolidate 3 overlapping CI platforms into 1 strategic platform. Estimated annual savings: $480K. Risk: low migration risk for 78% of workloads."
  },
  {
    title: "2. API Governance",
    problem:
      "Teams frequently create duplicate or inconsistent APIs with unclear ownership and lifecycle management.",
    capability:
      "CONNECT validates API standards, naming conventions, ownership metadata, reuse potential, and lifecycle status.",
    outcome:
      "Improved API consistency, stronger reuse, and reduced duplication across platform and product teams.",
    sampleOutput:
      "API Governance Check: 27 APIs reviewed, 6 flagged for naming violations, 4 missing owners, 3 duplicate capabilities identified."
  },
  {
    title: "3. Cloud Standards Enforcement",
    problem:
      "Cloud resources are often provisioned inconsistently across teams, affecting security, cost control, and operations.",
    capability:
      "CONNECT validates naming, tagging, security baseline, cost guardrails, and deployment policy adherence.",
    outcome:
      "Higher standards compliance, better cloud hygiene, and more predictable operations and cost management.",
    sampleOutput:
      "Cloud Compliance Snapshot: 91% tag compliance, 14 resources missing cost-center tags, 5 deployments violating network policy baseline."
  },
  {
    title: "4. DevSecOps Alignment",
    problem:
      "Security, compliance, and delivery standards are often evaluated too late in the engineering lifecycle.",
    capability:
      "CONNECT links governance rules with CI/CD workflows, security scan signals, and engineering standard checks.",
    outcome:
      "Earlier issue detection, reduced rework, and stronger security and compliance posture in delivery pipelines.",
    sampleOutput:
      "Pipeline Governance Status: 42 services analyzed, 7 blocked by high-severity policy violations, 11 with unresolved security control exceptions."
  },
  {
    title: "5. Engineering Onboarding",
    problem:
      "Engineers struggle to identify approved tools, templates, standards, and platform paths when joining teams.",
    capability:
      "CONNECT provides AI-assisted guidance, approved stack recommendations, and role-based training paths.",
    outcome:
      "Faster onboarding, more consistent engineering practices, and reduced unapproved tool adoption.",
    sampleOutput:
      "Onboarding Plan: Backend Engineer - recommended stack (.NET API template, approved observability package, secure deployment checklist), estimated readiness: 10 business days."
  },
  {
    title: "6. Executive Governance Dashboard",
    problem:
      "Leaders lack consolidated visibility into tool sprawl, cost exposure, risk posture, and platform adoption trends.",
    capability:
      "CONNECT provides role-specific governance insights, measurable outcomes, and consolidation opportunity views.",
    outcome:
      "Improved decision confidence, clearer portfolio priorities, and measurable governance progress over time.",
    sampleOutput:
      "Executive Summary: Tool redundancy down 18% QoQ, projected annual optimization opportunity: $1.9M, high-risk unowned services reduced from 44 to 19."
  },
  {
    title: "7. Shadow IT Detection",
    problem:
      "Unregistered tools and platforms introduce hidden security, cost, and compliance risk.",
    capability:
      "CONNECT correlates telemetry with registry baselines to detect and classify unknown or unmanaged tools.",
    outcome:
      "Earlier visibility into shadow IT, reduced unmanaged risk, and stronger enterprise governance coverage.",
    sampleOutput:
      "Shadow IT Alert: 12 unregistered SaaS endpoints detected; 4 classified as high-risk due to sensitive data access and missing ownership."
  }
] as const;

export default function UseCasesPage() {
  return (
    <>
      <Hero
        eyebrow="Use Cases"
        title="Enterprise Use Cases for CONNECT Framework"
        description="CONNECT helps organizations apply governance in real operating conditions, from platform rationalization and API alignment to onboarding and risk visibility."
      />

      <Section
        title="Real Enterprise Scenarios"
        subtitle="Each use case includes the challenge, CONNECT capability, expected outcome, and a representative sample output."
      >
        <div className="useCaseGrid">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              title={useCase.title}
              problem={useCase.problem}
              capability={useCase.capability}
              outcome={useCase.outcome}
              sampleOutput={useCase.sampleOutput}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
