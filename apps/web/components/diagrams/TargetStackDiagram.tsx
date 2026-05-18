import { targetStack } from "@/src/architecture-content";

export function TargetStackDiagram() {
  return (
    <div className="stackDiagram" role="img" aria-label="CONNECT target MVP stack diagram">
      {targetStack.map((tier) => (
        <div key={tier.tier} className="stackTier">
          <div className="stackTierLabel">{tier.tier}</div>
          <div className="stackTierItems">
            {tier.items.map((item) => (
              <span key={item} className="stackItem">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
