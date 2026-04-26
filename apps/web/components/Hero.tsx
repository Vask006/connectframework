import Link from "next/link";

type HeroAction = {
  label: string;
  href: string;
  primary?: boolean;
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: HeroAction[];
};

export function Hero({ eyebrow, title, description, actions = [] }: HeroProps) {
  return (
    <section className="hero">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{description}</p>
      {actions.length > 0 ? (
        <div className="ctaGroup">
          {actions.map((action) => (
            <Link
              key={action.label}
              className={`btn ${action.primary ? "btnPrimary" : ""}`.trim()}
              href={action.href}
            >
              {action.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
