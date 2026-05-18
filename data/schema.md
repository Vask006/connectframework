# CONNECT Data Schema (Phase 2)

Canonical JSON shapes for demo datasets, JSON Schema validation (`data/schemas/`), and registry ingestion contracts (`data/contracts/`).

## Tool (`data/sample-tools.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique tool identifier |
| `name` | string | Tool or platform name |
| `category` | string | Capability category |
| `businessDomain` | string | Owning business domain |
| `owner` | string | Responsible team |
| `annualCost` | number | Estimated annual cost (USD) |
| `complianceStatus` | string | Compliant, Partially Compliant, Under Review, Non-Compliant |
| `riskLevel` | string | Low, Medium, High |
| `usageLevel` | string | Low, Medium, High |
| `lifecycleStatus` | string | Strategic, Tolerate, Rationalize, Sunset Candidate |
| `costCenter` | string | Financial cost center code |
| `securityClassification` | string | Public, Internal, Confidential, Restricted |
| `observabilityEnabled` | boolean | Logging and monitoring enabled |
| `dataPrivacyReviewed` | boolean | Privacy review completed |
| `approved` | boolean | Approved for production use |
| `description` | string | Short description |

Schema: `data/schemas/tool.schema.json`

## API (`data/sample-apis.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique API identifier |
| `name` | string | API name (enterprise naming standard) |
| `version` | string | Version label (e.g. `v1`, `v2`) |
| `owner` | string | Owning team |
| `domain` | string | Business or capability domain |
| `lifecycleStatus` | string | Active, Draft, Deprecated |
| `namingCompliant` | boolean | Follows API naming standard |
| `reusable` | boolean | Intended for cross-team reuse |
| `securityClassification` | string | Data classification |
| `costCenter` | string | Financial cost center code |
| `description` | string | Short description |

Schema: `data/schemas/api.schema.json`

## Platform (`data/sample-platforms.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique platform identifier |
| `name` | string | Platform name |
| `platformType` | string | Integration, Developer Platform, Analytics, etc. |
| `owner` | string | Owning team |
| `businessDomain` | string | Business domain |
| `lifecycleStatus` | string | Strategic, Tolerate, Rationalize, Sunset Candidate |
| `costCenter` | string | Financial cost center code |
| `linkedToolIds` | string[] | Tool IDs grouped under this platform |
| `description` | string | Short description |

Schema: `data/schemas/platform.schema.json`

## Governance Rule (`data/sample-governance-rules.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Rule identifier |
| `name` | string | Rule title |
| `description` | string | Rule intent |
| `severity` | string | High, Medium, Low |
| `appliesTo` | string | Scope of application |

Schema: `data/schemas/governance-rule.schema.json`

## Standard (`data/sample-standards.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Standard identifier |
| `name` | string | Standard name |
| `domain` | string | Domain (API, Security, DevOps, etc.) |
| `version` | string | Standard version |
| `status` | string | Active, Draft, Retired |
| `description` | string | Standard summary |

Schema: `data/schemas/standard.schema.json`

## Exception (`data/sample-exceptions.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Exception identifier |
| `assetId` | string | Tool, API, or platform ID |
| `assetType` | string | Tool, API, or Platform |
| `ruleId` | string | Waived governance rule ID |
| `status` | string | Approved, Pending, Rejected, Expired |
| `justification` | string | Business rationale |
| `owner` | string | Requesting team |
| `approver` | string | Approving authority |
| `expiresOn` | string | Expiry date (ISO 8601) |
| `riskLevel` | string | Low, Medium, High |

Schema: `data/schemas/exception.schema.json`

## Ingestion contracts

Example payloads for future registry APIs are in `data/contracts/`:

- `ingestion-tool.example.json`
- `ingestion-api.example.json`
- `ingestion-platform.example.json`

See `data/contracts/README.md` for endpoint mapping (Phase 3).

## Governance evaluation

The web app evaluates tools and APIs at build/render time using rules in `sample-governance-rules.json`, with approved exceptions from `sample-exceptions.json`. Implementation: `apps/web/src/lib/registry/governance-engine.ts`.
