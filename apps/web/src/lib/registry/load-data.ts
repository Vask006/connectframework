import { readFileSync } from "node:fs";
import { join } from "node:path";
import type {
  ApiRecord,
  ExceptionRecord,
  GovernanceRule,
  PlatformRecord,
  StandardRecord,
  ToolRecord
} from "./types";

const dataDir = join(process.cwd(), "..", "..", "data");

function readJson<T>(filename: string): T {
  return JSON.parse(readFileSync(join(dataDir, filename), "utf-8")) as T;
}

export function getTools(): ToolRecord[] {
  return readJson<ToolRecord[]>("sample-tools.json");
}

export function getApis(): ApiRecord[] {
  return readJson<ApiRecord[]>("sample-apis.json");
}

export function getPlatforms(): PlatformRecord[] {
  return readJson<PlatformRecord[]>("sample-platforms.json");
}

export function getGovernanceRules(): GovernanceRule[] {
  return readJson<GovernanceRule[]>("sample-governance-rules.json");
}

export function getStandards(): StandardRecord[] {
  return readJson<StandardRecord[]>("sample-standards.json");
}

export function getExceptions(): ExceptionRecord[] {
  return readJson<ExceptionRecord[]>("sample-exceptions.json");
}

export function getRegistrySummary() {
  const tools = getTools();
  const apis = getApis();
  const platforms = getPlatforms();
  const rules = getGovernanceRules();
  const standards = getStandards();
  const exceptions = getExceptions();

  return {
    toolCount: tools.length,
    apiCount: apis.length,
    platformCount: platforms.length,
    ruleCount: rules.length,
    standardCount: standards.length,
    exceptionCount: exceptions.length,
    totalAnnualCost: tools.reduce((sum, tool) => sum + tool.annualCost, 0),
    rationalizeCount: tools.filter((tool) =>
      ["Rationalize", "Sunset Candidate"].includes(tool.lifecycleStatus)
    ).length
  };
}
