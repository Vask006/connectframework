type ModuleCardProps = {
  name: string;
  description: string;
};

export function ModuleCard({ name, description }: ModuleCardProps) {
  return (
    <article className="card moduleCard">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
