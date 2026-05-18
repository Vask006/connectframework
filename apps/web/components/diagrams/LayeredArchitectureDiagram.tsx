import { architectureLayers } from "@/src/architecture-content";

export function LayeredArchitectureDiagram() {
  return (
    <div className="layeredDiagram" role="img" aria-label="CONNECT layered architecture diagram">
      {architectureLayers.map((layer) => (
        <div key={layer.layer} className="archLayer">
          <div className="archLayerHeader">
            <h3>{layer.layer}</h3>
            <p>{layer.description}</p>
          </div>
          <div className="archLayerModules">
            {layer.modules.map((module) => (
              <span key={module} className="archModuleChip">
                {module}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
