# CONNECT Framework

**AI-Augmented Enterprise Governance and Platform Alignment**

## Overview

CONNECT Framework is an enterprise-focused framework and product prototype designed to help organizations govern tools, platforms, APIs, and engineering standards with greater clarity and consistency.

It exists to address a common challenge in digital transformation programs: technology adoption moves quickly, but governance, standardization, and decision support often remain fragmented. CONNECT provides a practical structure for aligning engineering execution with enterprise strategy through explainable, AI-assisted governance workflows.

## Problem Statement

Many organizations face recurring governance and platform alignment issues:

- Tool sprawl across teams and business units
- Duplicate systems and overlapping platform capabilities
- Inconsistent engineering and architecture standards
- Fragmented governance processes and ownership gaps
- Limited engineering guidance on approved patterns and tools
- Limited leadership visibility into cost, risk, and adoption trends

## Solution

CONNECT applies a closed-loop governance model:

**Register → Validate → Analyze → Recommend → Train → Monitor**

This model helps enterprises move from static governance documentation to an iterative operating approach with measurable outcomes.

## Core Modules

- **Collaboration Hub**: Shared governance workspace for architecture discussions, decisions, and traceability.
- **Governance Engine**: Rule evaluation and policy validation across tools, APIs, and platforms.
- **Tool Registry**: Central inventory of tools, ownership, lifecycle, cost, and usage metadata.
- **Standardization Engine**: Standards mapping, compliance checks, and exception tracking.
- **Consolidation Recommender**: Overlap detection and rationalization recommendations.
- **AI Assistant**: Explainable role-specific guidance for executives, architects, and engineers.
- **Training Platform**: Targeted onboarding and learning paths based on governance outcomes.
- **Monitoring and CMDB**: Operational telemetry and configuration context for continuous governance.
- **API Services Catalog**: Discoverable catalog of reusable internal platform and API services.

## Target Users

- Enterprise architects
- Engineering teams
- Platform teams
- Executives
- Risk and compliance teams
- Digital transformation teams

## Current Status

CONNECT is currently in **Phase 1**: public website and framework foundation.

Current focus areas include:

- Public-facing project experience
- Architecture and use-case documentation
- Monorepo baseline for future implementation
- Azure deployment readiness artifacts

## Roadmap

1. Public website
2. Interactive demo
3. MVP platform
4. AI assistant
5. Enterprise integrations

## Technology Stack

### Current

- Next.js (React)
- TypeScript
- CSS (clean responsive styling; Tailwind optional in future)
- GitHub Actions
- Azure Static Web Apps readiness

### Future (Target)

- .NET Web API
- PostgreSQL and/or Cosmos DB
- Semantic Kernel
- Vector database
- Azure OpenAI or open-source LLM

## Repository Structure

```text
connect-framework/
|
|-- apps/
|   `-- web/                     # Public website and future UI surfaces (Next.js + TypeScript)
|-- docs/                        # Architecture, product strategy, governance, use cases, deployment docs
|-- data/                        # Sample tools, governance rules, and standards datasets
|-- diagrams/                    # Architecture and process diagrams
|-- infra/
|   `-- azure/                   # Azure deployment config and IaC templates
|-- .github/
|   `-- workflows/               # CI/CD and deployment workflows
|-- README.md
|-- LICENSE
`-- .gitignore
```

## Local Development

From repository root:

```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

CONNECT is being prepared for deployment to **Azure Static Web Apps**.

- GitHub workflow: `.github/workflows/azure-static-web-apps.yml`
- Azure Static Web Apps config: `infra/azure/staticwebapp.config.json`
- Infrastructure starter template: `infra/azure/main.bicep`

Deployment will evolve as backend services and enterprise integrations are introduced in later phases.

## License

License is currently a project placeholder during early framework development.  
For long-term adoption, **MIT** or **Apache 2.0** are recommended options depending on governance, contribution, and commercial strategy decisions.

See `LICENSE` for the current repository license file.

## Documentation Index

- Architecture: `docs/architecture/overview.md`
- Product strategy: `docs/product-strategy/overview.md`
- Governance rules: `docs/governance-rules/overview.md`
- Use cases: `docs/use-cases/overview.md`
- Deployment: `docs/deployment/azure-static-web-apps.md`

## Contributing

See `CONTRIBUTING.md`.
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
