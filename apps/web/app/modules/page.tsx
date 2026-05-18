import { Hero } from "@/components/Hero";
import { ModuleCard } from "@/components/ModuleCard";
import { Section } from "@/components/Section";
import { modules } from "@/src/site-content";

export default function ModulesPage() {
  return (
    <>
      <Hero
        eyebrow="Core Modules"
        title="CONNECT Framework Module Catalog"
        description="Nine integrated modules form the CONNECT operating model for enterprise governance, platform alignment, and AI-assisted decision support."
      />
      <Section
        title="Module Overview"
        subtitle="Each module supports a specific part of the closed-loop governance lifecycle."
      >
        <div className="grid">
          {modules.map((module) => (
            <ModuleCard key={module.name} name={module.name} description={module.description} />
          ))}
        </div>
      </Section>
    </>
  );
}
