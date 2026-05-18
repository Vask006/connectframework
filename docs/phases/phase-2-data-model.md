# Phase 2 — Governance Data Model

**Status:** Complete

## Goals

- Canonical schemas for tools, APIs, platforms, governance rules, standards, and exceptions
- Expanded demo-ready JSON datasets with documented contracts
- Lightweight governance evaluation and compliance scoring in the public demo

## Deliverables

| Deliverable | Location |
| --- | --- |
| Canonical schemas | `data/schemas/*.schema.json` |
| Expanded datasets | `data/sample-*.json` |
| Schema documentation | `data/schema.md` |
| Ingestion contract drafts | `data/contracts/` |
| Registry data layer | `apps/web/src/lib/registry/` |
| Governance evaluation engine | `apps/web/src/lib/registry/governance-engine.ts` |
| Interactive demo views | `/demo`, `/registry` |

## Evaluation rules (sample)

Tools are scored against rules 001–004, 006–008 (approval, owner, cost center, security, observability, privacy, lifecycle). APIs are scored against rules 002, 005, and naming compliance. Approved exceptions waive specific rule failures without changing the underlying record.

## Next phase

Phase 3 exposes evaluation via a .NET Web API, persists registry state, and adds approval workflows. See `docs/phases/phase-3-governance-engine.md`.
