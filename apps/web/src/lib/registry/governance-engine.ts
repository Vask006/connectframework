import { getApis, getExceptions, getGovernanceRules, getTools } from "./load-data";
import type { ApiRecord, ComplianceResult, RuleFinding, ToolRecord } from "./types";

const SEVERITY_PENALTY: Record<string, number> = {
  High: 15,
  Medium: 8,
  Low: 3
};

function isWaived(assetId: string, ruleId: string): boolean {
  return getExceptions().some(
    (exception) =>
      exception.assetId === assetId &&
      exception.ruleId === ruleId &&
      exception.status === "Approved"
  );
}

function finalizeResult(
  assetId: string,
  assetType: "Tool" | "API",
  assetName: string,
  findings: RuleFinding[]
): ComplianceResult {
  const activeFindings = findings.filter((finding) => !finding.passed && !finding.waived);
  const penalty = activeFindings.reduce(
    (sum, finding) => sum + (SEVERITY_PENALTY[finding.severity] ?? 5),
    0
  );
  const score = Math.max(0, 100 - penalty);
  const status =
    score >= 85 ? "Compliant" : score >= 60 ? "Partially Compliant" : "Non-Compliant";

  return { assetId, assetType, assetName, score, status, findings };
}

function finding(
  ruleId: string,
  ruleName: string,
  severity: string,
  passed: boolean,
  message: string,
  waived: boolean
): RuleFinding {
  return { ruleId, ruleName, severity, passed, message, waived };
}

export function evaluateToolCompliance(tool: ToolRecord): ComplianceResult {
  const rules = getGovernanceRules();
  const findings: RuleFinding[] = [];

  const approvedRule = rules.find((rule) => rule.id === "rule-001");
  if (approvedRule) {
    const passed = tool.approved === true;
    findings.push(
      finding(
        approvedRule.id,
        approvedRule.name,
        approvedRule.severity,
        passed,
        passed ? "Tool is registered and approved." : "Tool is not approved for production use.",
        isWaived(tool.id, approvedRule.id)
      )
    );
  }

  const ownerRule = rules.find((rule) => rule.id === "rule-002");
  if (ownerRule) {
    const passed = tool.owner.trim().length > 0;
    findings.push(
      finding(
        ownerRule.id,
        ownerRule.name,
        ownerRule.severity,
        passed,
        passed ? "Owner is documented." : "Owner is missing.",
        isWaived(tool.id, ownerRule.id)
      )
    );
  }

  const costRule = rules.find((rule) => rule.id === "rule-003");
  if (costRule) {
    const passed = tool.costCenter.trim().length > 0;
    findings.push(
      finding(
        costRule.id,
        costRule.name,
        costRule.severity,
        passed,
        passed ? "Cost center is assigned." : "Cost center is missing.",
        isWaived(tool.id, costRule.id)
      )
    );
  }

  const securityRule = rules.find((rule) => rule.id === "rule-004");
  if (securityRule) {
    const passed = Boolean(tool.securityClassification);
    findings.push(
      finding(
        securityRule.id,
        securityRule.name,
        securityRule.severity,
        passed,
        passed
          ? `Security classification: ${tool.securityClassification}.`
          : "Security classification is not defined.",
        isWaived(tool.id, securityRule.id)
      )
    );
  }

  const observabilityRule = rules.find((rule) => rule.id === "rule-006");
  if (observabilityRule) {
    const passed = tool.observabilityEnabled === true;
    findings.push(
      finding(
        observabilityRule.id,
        observabilityRule.name,
        observabilityRule.severity,
        passed,
        passed ? "Observability is enabled." : "Observability is not enabled.",
        isWaived(tool.id, observabilityRule.id)
      )
    );
  }

  const privacyRule = rules.find((rule) => rule.id === "rule-007");
  if (privacyRule) {
    const passed = tool.dataPrivacyReviewed === true;
    findings.push(
      finding(
        privacyRule.id,
        privacyRule.name,
        privacyRule.severity,
        passed,
        passed ? "Privacy review is complete." : "Privacy review is incomplete.",
        isWaived(tool.id, privacyRule.id)
      )
    );
  }

  const lifecycleRule = rules.find((rule) => rule.id === "rule-008");
  if (lifecycleRule) {
    const passed = Boolean(tool.lifecycleStatus);
    findings.push(
      finding(
        lifecycleRule.id,
        lifecycleRule.name,
        lifecycleRule.severity,
        passed,
        passed ? `Lifecycle status: ${tool.lifecycleStatus}.` : "Lifecycle status is missing.",
        isWaived(tool.id, lifecycleRule.id)
      )
    );
  }

  return finalizeResult(tool.id, "Tool", tool.name, findings);
}

export function evaluateApiCompliance(api: ApiRecord): ComplianceResult {
  const rules = getGovernanceRules();
  const findings: RuleFinding[] = [];

  const ownerRule = rules.find((rule) => rule.id === "rule-002");
  if (ownerRule) {
    const passed = api.owner.trim().length > 0;
    findings.push(
      finding(
        ownerRule.id,
        ownerRule.name,
        ownerRule.severity,
        passed,
        passed ? "API owner is documented." : "API owner is missing.",
        isWaived(api.id, ownerRule.id)
      )
    );
  }

  const versioningRule = rules.find((rule) => rule.id === "rule-005");
  if (versioningRule) {
    const passed = /^v\d+$/i.test(api.version);
    findings.push(
      finding(
        versioningRule.id,
        versioningRule.name,
        versioningRule.severity,
        passed,
        passed ? `Version ${api.version} follows convention.` : "API version does not follow convention.",
        isWaived(api.id, versioningRule.id)
      )
    );
  }

  const namingRule = {
    id: "rule-naming",
    name: "API Naming Standard",
    severity: "Medium"
  };
  findings.push(
    finding(
      namingRule.id,
      namingRule.name,
      namingRule.severity,
      api.namingCompliant,
      api.namingCompliant
        ? "API name follows enterprise naming standard."
        : "API name violates enterprise naming standard.",
      isWaived(api.id, "rule-005")
    )
  );

  return finalizeResult(api.id, "API", api.name, findings);
}

export function getPortfolioComplianceSummary() {
  const toolResults = getTools().map(evaluateToolCompliance);
  const apiResults = getApis().map(evaluateApiCompliance);
  const all = [...toolResults, ...apiResults];

  return {
    averageScore: Math.round(all.reduce((sum, item) => sum + item.score, 0) / all.length),
    compliant: all.filter((item) => item.status === "Compliant").length,
    partial: all.filter((item) => item.status === "Partially Compliant").length,
    nonCompliant: all.filter((item) => item.status === "Non-Compliant").length,
    toolResults,
    apiResults
  };
}
