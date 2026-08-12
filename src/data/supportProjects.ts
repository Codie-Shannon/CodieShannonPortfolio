export interface SupportProject {
  slug: string;
  name: string;
  description: string;
  github: string;
  language: string;
  updatedAt: string;
}

// Deliberately curated after the 2026-08 repository audit. Flagship projects,
// case studies, archive material, hidden repositories, and repair candidates are
// represented in their own sections (or omitted) instead of being duplicated here.
export const supportProjects: SupportProject[] = [
  {
    slug: "accessaudit",
    name: "AccessAudit",
    description: "Native review-first synthetic access-audit proof with risk, remediation, sign-off, and audit evidence.",
    github: "https://github.com/Codie-Shannon/AccessAudit",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "assettrack",
    name: "AssetTrack",
    description: "Native ASP.NET Core asset lifecycle, maintenance, audit, and export-boundary proof.",
    github: "https://github.com/Codie-Shannon/AssetTrack",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "clouddeploylab",
    name: "CloudDeployLab",
    description: "Azure and GitHub Actions deployment proof with reproducible builds, health checks, infrastructure-as-code, and verified release artifacts.",
    github: "https://github.com/Codie-Shannon/CloudDeployLab",
    language: "HTML",
    updatedAt: "2026-08-05",
  },
  {
    slug: "dynamicsopsdemo",
    name: "DynamicsOpsDemo",
    description: "Native Dynamics/Dataverse-style CRM and operations workflow proof.",
    github: "https://github.com/Codie-Shannon/DynamicsOpsDemo",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "eventstreamlab",
    name: "EventStreamLab",
    description: ".NET 8 SignalR event-stream proof for ordering, replay, backpressure, and diagnostics.",
    github: "https://github.com/Codie-Shannon/EventStreamLab",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "integrationgatewaylab",
    name: "IntegrationGatewayLab",
    description: ".NET 8 integration gateway proof for contracts, idempotency, retries, imports, and operational evidence.",
    github: "https://github.com/Codie-Shannon/IntegrationGatewayLab",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "kbforge",
    name: "KBForge",
    description: "Native troubleshooting-tree and knowledge-base support proof.",
    github: "https://github.com/Codie-Shannon/KBForge",
    language: "C#",
    updatedAt: "2026-08-11",
  },
  {
    slug: "onboardingflow-laravel-proof",
    name: "OnboardingFlow Laravel Proof",
    description: "Laravel onboarding workflow proof spanning invites, submission, document evidence, review, follow-up, reporting, and audit history.",
    github: "https://github.com/Codie-Shannon/onboardingflow-laravel-proof",
    language: "Blade",
    updatedAt: "2026-08-07",
  },
  {
    slug: "operationsflow-toolkit",
    name: "OperationsFlow Toolkit",
    description: "Power BI and Microsoft 365 workflow-design toolkit for safety, compliance, document control, work orders, and risk reporting.",
    github: "https://github.com/Codie-Shannon/OperationsFlow-Toolkit",
    language: "PowerShell",
    updatedAt: "2026-08-08",
  },
  {
    slug: "opsdiagnosticslab",
    name: "OpsDiagnosticsLab",
    description: ".NET 8 operational diagnostics proof for health, traces, jobs, controlled replay, and support packs.",
    github: "https://github.com/Codie-Shannon/OpsDiagnosticsLab",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "opspilotai",
    name: "OpsPilotAI",
    description: "Human-reviewed workflow extraction proof with a deterministic local provider.",
    github: "https://github.com/Codie-Shannon/OpsPilotAI",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "phoenixmodern",
    name: "PhoenixModern",
    description: "Node.js/Vue vehicle-dealership workflow covering inventory, enquiries, admin review, validation, and REST APIs.",
    github: "https://github.com/Codie-Shannon/PhoenixModern",
    language: "JavaScript",
    updatedAt: "2026-08-11",
  },
  {
    slug: "rulesenginelab",
    name: "RulesEngineLab",
    description: ".NET 8 explainable rules proof for evaluation, versioning, regression cases, and decision evidence.",
    github: "https://github.com/Codie-Shannon/RulesEngineLab",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "searchretrievallab",
    name: "SearchRetrievalLab",
    description: ".NET 8 search proof for indexing, filters, saved queries, explainable ranking, evaluation, and provenance.",
    github: "https://github.com/Codie-Shannon/SearchRetrievalLab",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "supportdesksimulator",
    name: "SupportDeskSimulator",
    description: "Native support-ticket, SLA, escalation, and knowledge-linking proof.",
    github: "https://github.com/Codie-Shannon/SupportDeskSimulator",
    language: "HTML",
    updatedAt: "2026-08-11",
  },
  {
    slug: "workflowconnectorhub",
    name: "WorkflowConnectorHub",
    description: "Public-safe ASP.NET Core integration proof with mock connectors, idempotency, bounded retries, human review, and audit evidence.",
    github: "https://github.com/Codie-Shannon/WorkflowConnectorHub",
    language: "HTML",
    updatedAt: "2026-08-10",
  },
];
