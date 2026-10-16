export interface PipelineStep {
  id: string;
  stepNumber: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  statusText: string;
  badgeColor: string;
  ciCommand: string;
  details: {
    purpose: string;
    rulesCovered: string[];
    sampleSnippet: string;
    exitCodeRule: string;
    executionTime: string;
  };
}

export interface ScanResult {
  targetUrl: string;
  scanDate: string;
  sha256: string;
  score: number;
  wcagLevel: 'A' | 'AA' | 'AAA';
  nbr17255Compliant: boolean;
  totalViolations: number;
  criticalViolations: number;
  warnings: number;
  passedChecks: number;
  items: {
    id: string;
    selector: string;
    rule: string;
    severity: 'critical' | 'serious' | 'moderate' | 'minor';
    description: string;
    recommendation: string;
    remediationDiff: {
      before: string;
      after: string;
    };
  }[];
}

export interface SensorTelemetry {
  lux: number;
  luxStatus: string;
  flickerRate: number;
  soundDba: number;
  soundStatus: string;
  routeClear: boolean;
  elevatorVoiceActive: boolean;
  ambientDampening: boolean;
  lastEvents: {
    time: string;
    node: string;
    message: string;
    type: 'success' | 'info' | 'warning' | 'alert';
  }[];
}
