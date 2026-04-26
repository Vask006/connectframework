# CONNECT Framework

CONNECT Framework is an AI-augmented enterprise governance and platform alignment platform that helps organizations reduce tool sprawl, enforce engineering standards, and drive informed consolidation decisions.

## Monorepo Layout

```text
connect-framework/
|
|-- apps/
|   `-- web/                     # Next.js + TypeScript public-facing website
|-- docs/                        # Architecture, product strategy, governance, deployment docs
|-- data/                        # Sample governance and platform datasets
|-- diagrams/                    # Architecture and process diagrams
|-- infra/
|   `-- azure/                   # Azure config and IaC templates
|-- .github/
|   `-- workflows/               # CI/CD workflows
|-- README.md
|-- LICENSE
`-- .gitignore
```

## Project Components

1. Collaboration Hub
2. Governance Engine
3. Tool Registry
4. Standardization Engine
5. Consolidation Recommender
6. AI Assistant
7. Training and Onboarding Platform
8. Monitoring and CMDB Integration
9. Platform Services API Catalog

## Web App Stack

- Next.js (App Router)
- TypeScript
- Clean responsive CSS

## Quick Start

1. Install dependencies:
   - `cd apps/web`
   - `npm install`
2. Run local development server:
   - `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Azure Deployment Readiness

- GitHub Actions workflow: `.github/workflows/azure-static-web-apps.yml`
- Azure config: `infra/azure/staticwebapp.config.json`
- IaC starter: `infra/azure/main.bicep`

## Documentation Index

- Architecture: `docs/architecture/overview.md`
- Product strategy: `docs/product-strategy/overview.md`
- Governance rules: `docs/governance-rules/overview.md`
- Use cases: `docs/use-cases/overview.md`
- Deployment: `docs/deployment/azure-static-web-apps.md`

## Contributing

See `CONTRIBUTING.md`.

## License

MIT License - see `LICENSE`.
