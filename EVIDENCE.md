# CONNECT Framework — Portfolio Evidence Guide

This repository is structured as **evidence** of enterprise product thinking, architecture design, and phased delivery planning for the CONNECT Framework.

## What reviewers should look at

### 1. Public website (`apps/web`)

| Page | URL path | Evidence demonstrated |
| --- | --- | --- |
| Home | `/` | Value proposition, problems, closed-loop model, modules |
| Architecture | `/architecture` | Layered architecture, flows, diagrams, target stack |
| Modules | `/modules` | Nine core CONNECT modules |
| Use Cases | `/use-cases` | Enterprise scenarios with outcomes |
| Demo | `/demo` | Registry views, compliance scoring, exceptions |
| Registry | `/registry` | Phase 2 canonical registry and compliance dashboard |
| Roadmap | `/roadmap` | Six phases with status, objectives, deliverables |
| Docs | `/docs` | Documentation hub linking to canonical repo docs |

### 2. Documentation (`docs/`)

- Product vision and strategy
- Architecture overview with Mermaid diagrams
- Enterprise use cases
- Sample governance model
- Phase-by-phase delivery documents (`docs/phases/`)

### 3. Data and schema (`data/`)

- Sample tools, APIs, platforms, governance rules, standards, and exceptions
- JSON schemas in `data/schemas/` and `data/schema.md`
- Ingestion contract examples in `data/contracts/`
- Governance evaluation in `apps/web/src/lib/registry/`

### 4. Architecture diagrams (`diagrams/`)

- Mermaid sources for system layers, governance loop, processing flow, MVP stack

### 5. Future platform scaffold (`packages/`)

- API placeholder for Phase 3 .NET backend

### 6. Build verification

GitHub Actions CI runs on every push:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Phase completion summary

| Phase | Status |
| --- | --- |
| Phase 1 — Public Foundation | **Complete** |
| Phase 2 — Governance Data Model | **Complete** |
| Phase 3 — Governance Engine MVP | Planned |
| Phase 4 — Consolidation Intelligence | Planned |
| Phase 5 — AI Assistant | Planned |
| Phase 6 — Enterprise Integrations | Planned |

## Local verification

```bash
npm install --prefix apps/web
npm run verify
npm run dev --prefix apps/web
```

Open http://localhost:3000

## Portfolio materials

- [GitHub profile README snippet](docs/portfolio/github-profile-snippet.md) — copy/paste for your GitHub profile
- [Executive summary outline (1 page)](docs/portfolio/executive-summary.md) — stakeholder briefing or PDF export
