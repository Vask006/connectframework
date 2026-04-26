type RoadmapPhaseCardProps = {
  phase: string;
  description: string;
};

export function RoadmapPhaseCard({ phase, description }: RoadmapPhaseCardProps) {
  return (
    <article className="card roadmapPhaseCard">
      <h3>{phase}</h3>
      <p>{description}</p>
    </article>
  );
}
