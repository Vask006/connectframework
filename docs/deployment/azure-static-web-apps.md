# Azure Static Web Apps Deployment

## Purpose

Deploy the `apps/web` Next.js application using GitHub Actions and Azure Static Web Apps.

## Key Files

- Workflow: `.github/workflows/azure-static-web-apps.yml`
- Static Web Apps configuration: `infra/azure/staticwebapp.config.json`
- Infrastructure template: `infra/azure/main.bicep`

## Required Secret

- `AZURE_STATIC_WEB_APPS_API_TOKEN`
