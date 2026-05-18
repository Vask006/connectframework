export type {
  ApiRecord,
  ExceptionRecord,
  GovernanceRule,
  PlatformRecord,
  StandardRecord,
  ToolRecord,
  ComplianceResult,
  RuleFinding
} from "./registry/types";

export {
  getTools,
  getApis,
  getPlatforms,
  getGovernanceRules,
  getStandards,
  getExceptions,
  getRegistrySummary
} from "./registry/load-data";

export {
  evaluateToolCompliance,
  evaluateApiCompliance,
  getPortfolioComplianceSummary
} from "./registry/governance-engine";

import { getGovernanceRules, getRegistrySummary } from "./registry/load-data";
import { getPortfolioComplianceSummary } from "./registry/governance-engine";

export function getDemoSummary() {
  const registry = getRegistrySummary();
  const rules = getGovernanceRules();
  const compliance = getPortfolioComplianceSummary();
  const highSeverityRules = rules.filter((rule) => rule.severity === "High").length;

  return {
    ...registry,
    highSeverityRules,
    averageComplianceScore: compliance.averageScore,
    compliantAssets: compliance.compliant,
    partialAssets: compliance.partial,
    nonCompliantAssets: compliance.nonCompliant
  };
}
