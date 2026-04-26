# Azure Static Web Apps Deployment

## Purpose

This document explains how CONNECT Framework's website is deployed using Azure Static Web Apps and GitHub Actions, with `apps/web` as the application path.

## Why Azure Static Web Apps

Azure Static Web Apps is a strong Phase 1 and Phase 2 fit for CONNECT because it provides:

- simple static web hosting with managed security and TLS
- direct GitHub integration for CI/CD workflows
- pull request preview environments for stakeholder review
- predictable and cost-conscious hosting options

## Deployment Model for CONNECT

CONNECT uses a GitHub-first deployment model:

1. Changes are pushed to `main` in GitHub.
2. GitHub Actions workflow executes deployment steps.
3. Azure Static Web Apps deploys content from `apps/web`.
4. Optional preview environments are created for open pull requests.

Primary workflow file:

- `.github/workflows/azure-static-web-apps.yml`

## Required Azure Setup Steps

1. Create a new **Static Web App** in Azure portal.
2. Select subscription, resource group, and preferred region.
3. Connect Azure to this GitHub repository.
4. Configure build/deploy settings:
   - App location: `apps/web`
   - Output location: empty for current Next.js setup in this repository
5. Save resource and capture the generated deployment token.

## GitHub Actions Integration

The repository includes a placeholder workflow with commented guidance.

Important details:

- no real secrets are committed to source control
- placeholder secret name is used in workflow:
  - `AZURE_STATIC_WEB_APPS_API_TOKEN_PLACEHOLDER`
- configure the real token in:
  - GitHub repository -> Settings -> Secrets and variables -> Actions

## Local Development Commands

From repository root:

```bash
cd apps/web
npm install
npm run dev
```

Useful supporting commands:

- `npm run dev:host`
- `npm run build`
- `npm run build:ci`
- `npm run start:prod`
- `npm run lint`
- `npm run typecheck`

## Custom Domain (Future Option)

When CONNECT moves beyond early validation, a custom domain can be attached:

1. Add custom domain in Azure Static Web Apps.
2. Configure DNS records with domain provider.
3. Validate ownership in Azure.
4. Enable managed TLS certificate.

## Cost-Conscious Hosting Notes

To control early-stage costs while preserving scale options:

- start on free or low-tier Static Web Apps plan
- use preview environments selectively
- keep frontend deployment static-first until backend APIs are introduced
- move to higher tiers only when traffic, SLA, or security requirements justify it

This approach supports practical experimentation and enterprise readiness at the same time.
