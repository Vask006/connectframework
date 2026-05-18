type ValidationIssue = { field: string; message: string };

export type ValidationResult = {
  valid: boolean;
  issues: ValidationIssue[];
};

function issue(field: string, message: string): ValidationIssue {
  return { field, message };
}

function requiredString(value: unknown, field: string, issues: ValidationIssue[]) {
  if (typeof value !== "string" || value.trim().length === 0) {
    issues.push(issue(field, "Required non-empty string."));
  }
}

export function validateToolRecord(record: Record<string, unknown>): ValidationResult {
  const issues: ValidationIssue[] = [];
  requiredString(record.id, "id", issues);
  requiredString(record.name, "name", issues);
  requiredString(record.owner, "owner", issues);
  requiredString(record.costCenter, "costCenter", issues);
  if (typeof record.annualCost !== "number" || record.annualCost < 0) {
    issues.push(issue("annualCost", "Must be a non-negative number."));
  }
  if (typeof record.approved !== "boolean") {
    issues.push(issue("approved", "Must be a boolean."));
  }
  return { valid: issues.length === 0, issues };
}

export function validateApiRecord(record: Record<string, unknown>): ValidationResult {
  const issues: ValidationIssue[] = [];
  requiredString(record.id, "id", issues);
  requiredString(record.name, "name", issues);
  requiredString(record.version, "version", issues);
  if (typeof record.namingCompliant !== "boolean") {
    issues.push(issue("namingCompliant", "Must be a boolean."));
  }
  return { valid: issues.length === 0, issues };
}

export function validateExceptionRecord(record: Record<string, unknown>): ValidationResult {
  const issues: ValidationIssue[] = [];
  requiredString(record.id, "id", issues);
  requiredString(record.assetId, "assetId", issues);
  requiredString(record.ruleId, "ruleId", issues);
  requiredString(record.justification, "justification", issues);
  return { valid: issues.length === 0, issues };
}
