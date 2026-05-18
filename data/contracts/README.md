# Registry Ingestion Contracts (Phase 2 Draft)

Example payloads for future API ingestion endpoints. These contracts align with JSON schemas in `data/schemas/`.

## Endpoints (planned — Phase 3)

| Method | Path | Payload example |
| --- | --- | --- |
| POST | `/registry/tools` | `ingestion-tool.example.json` |
| POST | `/registry/apis` | `ingestion-api.example.json` |
| POST | `/registry/platforms` | `ingestion-platform.example.json` |
| POST | `/governance/evaluate` | Asset ID + type → compliance result |

## Validation

Incoming payloads should be validated against the matching schema before persistence.
