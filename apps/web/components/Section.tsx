import { SectionHeader } from "@/components/SectionHeader";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <SectionHeader title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}
