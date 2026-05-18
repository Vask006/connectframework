# CONNECT Framework

**AI-Augmented Enterprise Governance and Platform Alignment**

> Portfolio and product evidence repository — hosted on GitHub with a build-verified public website.

## Overview

CONNECT Framework is an enterprise-focused framework and product prototype designed to help organizations govern tools, platforms, APIs, and engineering standards with greater clarity and consistency.

It provides a practical structure for aligning engineering execution with enterprise strategy through explainable, AI-assisted governance workflows.

## Evidence repository

This project is maintained as **portfolio evidence** including:

- Public website (`apps/web`) with architecture, use cases, interactive demo, modules, roadmap, and documentation hub
- Canonical documentation (`docs/`)
- Sample governance datasets (`data/`)
- Architecture diagrams (`diagrams/`)
- Six-phase delivery roadmap with status tracking
- CI build verification (no cloud deployment required)

See **[EVIDENCE.md](./EVIDENCE.md)** for a reviewer guide.

**Portfolio materials:** [GitHub profile snippet](docs/portfolio/github-profile-snippet.md) · [Executive summary (1 page)](docs/portfolio/executive-summary.md)

## Problem Statement

- Tool sprawl across teams and business units
- Duplicate systems and overlapping platform capabilities
- Inconsistent engineering and architecture standards
- Fragmented governance processes and ownership gaps
- Limited engineering guidance on approved patterns and tools
- Limited leadership visibility into cost, risk, and adoption trends

## Solution

**Register → Validate → Analyze → Recommend → Train → Monitor → Improve**

## Core Modules

1. Collaboration Hub
2. Governance Engine
3. Tool Registry
4. Standardization Engine
5. Consolidation Recommender
6. AI Assistant
7. Training Platform
8. Monitoring and CMDB Integration
9. API Services Catalog

## Delivery Phases

| Phase | Status |
| --- | --- |
| Phase 1 — Public Foundation | Complete |
| Phase 2 — Governance Data Model | In Progress |
| Phase 3 — Governance Engine MVP | Planned |
| Phase 4 — Consolidation Intelligence | Planned |
| Phase 5 — AI Assistant | Planned |
| Phase 6 — Enterprise Integrations | Planned |

Details: `docs/phases/README.md` and `/roadmap` on the website.

## Repository Structure

```text
connect-framework/
├── apps/web/          # Next.js public website + interactive demo
├── docs/              # Product, architecture, governance, phases
├── data/              # Sample JSON datasets + schema
├── diagrams/          # Mermaid architecture diagrams
├── packages/          # Future API and shared libraries (scaffold)
├── .github/workflows/ # CI (lint, typecheck, build)
├── EVIDENCE.md        # Portfolio reviewer guide
└── README.md
```

## Quick Start

```bash
# From repository root
npm install --prefix apps/web
npm run dev
```

Open http://localhost:3000

### Verify build

```bash
npm run verify
```

## Website pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Architecture | `/architecture` |
| Modules | `/modules` |
| Use Cases | `/use-cases` |
| Interactive Demo | `/demo` |
| Roadmap | `/roadmap` |
| Documentation Hub | `/docs` |

## Technology Stack

**Current:** Next.js, TypeScript, CSS, GitHub Actions CI

**Future:** .NET Web API, PostgreSQL/Cosmos DB, Semantic Kernel, vector database, knowledge graph

## Documentation

- [Product vision](docs/product-strategy/vision.md)
- [Architecture overview](docs/architecture/architecture-overview.md)
- [Enterprise use cases](docs/use-cases/enterprise-use-cases.md)
- [Governance model](docs/governance-rules/sample-governance-model.md)
- [Data schema](data/schema.md)
- [Phases](docs/phases/README.md)
- [Diagrams](diagrams/README.md)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT License — see [LICENSE](./LICENSE).
