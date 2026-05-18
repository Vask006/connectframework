import { readFileSync } from "node:fs";
import { join } from "node:path";

const dataDir = join(process.cwd(), "..", "..", "data");

function readJson<T>(filename: string): T {
  const raw = readFileSync(join(dataDir, filename), "utf-8");
  return JSON.parse(raw) as T;
}

export type ToolRecord = {
  id: string;
  name: string;
  category: string;
  businessDomain: string;
  owner: string;
  annualCost: number;
  complianceStatus: string;
  riskLevel: string;
  usageLevel: string;
  lifecycleStatus: string;
  description: string;
};

export type GovernanceRule = {
  id: string;
  name: string;
  description: string;
  severity: string;
  appliesTo: string;
};

export type StandardRecord = {
  id: string;
  name: string;
  domain: string;
  version: string;
  status: string;
  description: string;
};

export function getTools(): ToolRecord[] {
  return readJson<ToolRecord[]>("sample-tools.json");
}

export function getGovernanceRules(): GovernanceRule[] {
  return readJson<GovernanceRule[]>("sample-governance-rules.json");
}

export function getStandards(): StandardRecord[] {
  return readJson<StandardRecord[]>("sample-standards.json");
}

export function getDemoSummary() {
  const tools = getTools();
  const rules = getGovernanceRules();
  const standards = getStandards();

  const totalAnnualCost = tools.reduce((sum, tool) => sum + tool.annualCost, 0);
  const rationalizeCount = tools.filter((tool) =>
    ["Rationalize", "Sunset Candidate"].includes(tool.lifecycleStatus)
  ).length;
  const highSeverityRules = rules.filter((rule) => rule.severity === "High").length;

  return {
    toolCount: tools.length,
    ruleCount: rules.length,
    standardCount: standards.length,
    totalAnnualCost,
    rationalizeCount,
    highSeverityRules
  };
}
