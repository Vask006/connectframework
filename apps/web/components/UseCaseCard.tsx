type UseCaseCardProps = {
  title: string;
  problem: string;
  capability: string;
  outcome: string;
  sampleOutput: string;
};

export function UseCaseCard({
  title,
  problem,
  capability,
  outcome,
  sampleOutput
}: UseCaseCardProps) {
  return (
    <article className="useCaseCard">
      <h3>{title}</h3>
      <dl className="useCaseMeta">
        <div>
          <dt>Problem</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>CONNECT capability</dt>
          <dd>{capability}</dd>
        </div>
        <div>
          <dt>Expected outcome</dt>
          <dd>{outcome}</dd>
        </div>
        <div>
          <dt>Sample output</dt>
          <dd className="sampleOutput">{sampleOutput}</dd>
        </div>
      </dl>
    </article>
  );
}
