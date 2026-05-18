# CONNECT Data Schema (Phase 2 Baseline)

Canonical JSON shapes for demo datasets and future registry ingestion.

## Tool (`data/sample-tools.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique tool identifier |
| `name` | string | Tool or platform name |
| `category` | string | Capability category |
| `businessDomain` | string | Owning business domain |
| `owner` | string | Responsible team |
| `annualCost` | number | Estimated annual cost (USD) |
| `complianceStatus` | string | Compliant, Partially Compliant, Under Review |
| `riskLevel` | string | Low, Medium, High |
| `usageLevel` | string | Low, Medium, High |
| `lifecycleStatus` | string | Strategic, Tolerate, Rationalize, Sunset Candidate |
| `description` | string | Short description |

## Governance Rule (`data/sample-governance-rules.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Rule identifier |
| `name` | string | Rule title |
| `description` | string | Rule intent |
| `severity` | string | High, Medium, Low |
| `appliesTo` | string | Scope of application |

## Standard (`data/sample-standards.json`)

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Standard identifier |
| `name` | string | Standard name |
| `domain` | string | Domain (API, Security, DevOps, etc.) |
| `version` | string | Standard version |
| `status` | string | Active, Draft, Retired |
| `description` | string | Standard summary |

## Future extensions

- API catalog entities
- Compliance score snapshots
- Exception records with expiry
- Integration connector metadata
