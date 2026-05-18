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
  costCenter: string;
  securityClassification: string;
  observabilityEnabled: boolean;
  dataPrivacyReviewed: boolean;
  approved: boolean;
  description: string;
};

export type ApiRecord = {
  id: string;
  name: string;
  version: string;
  owner: string;
  domain: string;
  lifecycleStatus: string;
  namingCompliant: boolean;
  reusable: boolean;
  securityClassification: string;
  costCenter: string;
  description: string;
};

export type PlatformRecord = {
  id: string;
  name: string;
  platformType: string;
  owner: string;
  businessDomain: string;
  lifecycleStatus: string;
  costCenter: string;
  linkedToolIds: string[];
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

export type ExceptionRecord = {
  id: string;
  assetId: string;
  assetType: string;
  ruleId: string;
  status: string;
  justification: string;
  owner: string;
  approver: string;
  expiresOn: string;
  riskLevel: string;
};

export type RuleFinding = {
  ruleId: string;
  ruleName: string;
  severity: string;
  passed: boolean;
  message: string;
  waived: boolean;
};

export type ComplianceResult = {
  assetId: string;
  assetType: "Tool" | "API";
  assetName: string;
  score: number;
  status: "Compliant" | "Partially Compliant" | "Non-Compliant";
  findings: RuleFinding[];
};
