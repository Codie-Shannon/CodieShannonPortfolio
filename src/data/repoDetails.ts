export interface RepoSection { heading:string; paragraphs:string[]; bullets:string[]; code:string[]; }
export interface RepoDetail { title:string; repoName:string; github:string; syncedAt:string; overview:string[]; sections:RepoSection[]; }
export const repoDetails: Record<string, RepoDetail> = {
  "codie-shannon": {
    "title": "Codie Shannon",
    "repoName": "Codie-Shannon",
    "github": "https://github.com/Codie-Shannon/Codie-Shannon",
    "syncedAt": "2026-08-12",
    "overview": [
      "Software developer and contractor based in New Zealand, focused on practical systems that automate work, improve operational visibility, and turn messy processes into reliable software.",
      "My portfolio spans **C#/.NET**, **ASP.NET Core**, **Blazor**, **Microsoft 365 / Power Platform**, **Python / FastAPI**, **Node.js / TypeScript / Vue**, **SQL**, integrations, document processing, QA tooling, and Unity development."
    ],
    "sections": [
      {
        "heading": "LifeOS",
        "paragraphs": [
          "A long-running personal operations platform covering planning, workflow, information management, desktop tooling, mobile companion work, integrations, and automation."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Family Archive",
        "paragraphs": [
          "A production-oriented family media archive with integrity checks, duplicate review, role-aware access, media workflows, cloud import, and large-scale photo handling."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Rover",
        "paragraphs": [
          "A planned robotics / hardware-control platform that will connect software, embedded devices, telemetry, and remote operations."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Business systems",
        "paragraphs": [],
        "bullets": [
          "OperationsFlow — operational records, corrective actions, documents, risk, training, reporting, and data quality.",
          "OnboardingFlow — structured onboarding workflow and evidence.",
          "AssetTrack — asset lifecycle, maintenance, audit, and export boundaries.",
          "ClientPortal — client projects, requests, approvals, milestones, messages, document metadata, role-aware visibility, and audit history.",
          "DynamicsOpsDemo — CRM / operations workflow concepts around Microsoft business systems."
        ],
        "code": []
      },
      {
        "heading": "Engineering labs",
        "paragraphs": [
          "These repositories isolate specific engineering problems so the implementation, validation, and evidence are easy to inspect."
        ],
        "bullets": [
          "SyncBridgeLab — offline-first sync, ordered outbox, idempotency, conflicts, recovery, and audit.",
          "SecureTenantLab — multi-tenant authorization and isolation.",
          "RulesEngineLab — deterministic business-rule evaluation and validation.",
          "SearchRetrievalLab — indexing, filtering, saved queries, ranking, evaluation, and provenance.",
          "EventStreamLab — real-time event streaming and observability.",
          "IntegrationGatewayLab — API integration, gateway behavior, and resilience.",
          "OpsDiagnosticsLab — diagnostics, health checks, logging, and operational visibility.",
          "DocumentIntelligenceLab — OCR, classification, extraction, confidence review, human approval, batching, and export."
        ],
        "code": []
      },
      {
        "heading": "Developer and QA tooling",
        "paragraphs": [],
        "bullets": [
          "DebugForgeStudio — log analysis, bug triage, reproduction workflows, comparison, and evidence reporting.",
          "QAForge — test planning, bug tracking, TestPilot guidance, release readiness, and deterministic validation.",
          "KBForge — knowledge-base and retrieval workflow tooling.",
          "SupportDeskSimulator — support and ticket workflow simulation."
        ],
        "code": []
      },
      {
        "heading": "Game and Unity tooling",
        "paragraphs": [],
        "bullets": [
          "Tokyo Nights Racing — Unity racing-game portfolio project.",
          "TrafficSystemLite — lightweight vehicle traffic simulation.",
          "VehicleSetupWizard — Unity editor tooling for vehicle setup.",
          "MissionMarkerToolkit — reusable Unity editor / level-design tooling."
        ],
        "code": []
      },
      {
        "heading": "Earlier work and archive",
        "paragraphs": [],
        "bullets": [
          "Media Manager — rebuilt and modernized diploma-era desktop application.",
          "Student Work Archive — preserved and validated student project archive.",
          "Case Study Library — supporting case-study site for portfolio work.",
          "Power BI Work Order Dashboard — reporting and work-order analysis."
        ],
        "code": []
      },
      {
        "heading": "How I work",
        "paragraphs": [
          "I use a consistent engineering process across projects: scoped implementation, deterministic validation, CI, security/public-data boundaries, screenshot evidence, documentation, and versioned closure.",
          "That process is intentionally standardized. The systems themselves cover different problems, stacks, and domains.",
          "**Current focus:** portfolio presentation, production validation of Family Archive, continued LifeOS development, and preparation for the next work-acquisition push."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "vehiclesetupwizard": {
    "title": "Vehicle Setup Wizard",
    "repoName": "VehicleSetupWizard",
    "github": "https://github.com/Codie-Shannon/VehicleSetupWizard",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A reusable Unity 2022.3 editor package for guided, inspectable, reversible vehicle setup.",
      "**Status:** native-validated public release (`v1.0.0`) **Package:** `com.codieshannon.vehicle-setup-wizard` **Unity:** 2022.3 LTS **Evidence:** two screenshot groups, eight Unity-native captures"
    ],
    "sections": [
      {
        "heading": "Workflow",
        "paragraphs": [],
        "bullets": [
          "select a vehicle root and setup profile;",
          "map wheel transforms and intent;",
          "choose a vehicle type or apply a preset;",
          "review validation findings;",
          "preview generated setup;",
          "apply through Undo-aware editor operations;",
          "inspect generated values before play mode."
        ],
        "code": []
      },
      {
        "heading": "Package boundary",
        "paragraphs": [
          "This is a setup/workflow automation tool, not a universal vehicle physics engine. Controller integration remains behind an adapter identifier/reference boundary."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "trafficsystemlite": {
    "title": "Traffic System Lite",
    "repoName": "TrafficSystemLite",
    "github": "https://github.com/Codie-Shannon/TrafficSystemLite",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A reusable Unity 2022.3 traffic package for route graphs, intersection reservation, player-aware lifecycle limits, and diagnostics.",
      "**Status:** native-validated public release (`v1.0.0`) **Package:** `com.codieshannon.traffic-system-lite` **Unity:** 2022.3 LTS **Evidence:** two screenshot groups, eight Unity-native captures"
    ],
    "sections": [
      {
        "heading": "Core workflow",
        "paragraphs": [],
        "bullets": [
          "create and link route nodes;",
          "assign speed limits;",
          "reserve constrained intersections through `IntersectionGate`;",
          "configure traffic agents;",
          "apply bounded spawn/despawn settings;",
          "inspect route gizmos and runtime occupancy;",
          "scale only after validation."
        ],
        "code": []
      },
      {
        "heading": "Package boundary",
        "paragraphs": [
          "No game map, licensed vehicle, or third-party controller dependency is required or redistributed."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "syncbridgelab": {
    "title": "SyncBridge Lab",
    "repoName": "SyncBridgeLab",
    "github": "https://github.com/Codie-Shannon/SyncBridgeLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A synthetic-only .NET 8 offline-first sync proof for outbox ordering, idempotency, conflict review, recovery, and audit evidence.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "queue offline commands;",
          "preserve deterministic command order;",
          "acknowledge only the head command;",
          "apply commands idempotently;",
          "detect version mismatches;",
          "preserve both conflict candidates;",
          "resolve explicitly as Local, Remote, or Manual;",
          "record operational audit evidence."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "All devices, records, commands, and conflicts are generated fixtures. No cloud account or production secret is required."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "supportdesksimulator": {
    "title": "SupportDesk Simulator",
    "repoName": "SupportDeskSimulator",
    "github": "https://github.com/Codie-Shannon/SupportDeskSimulator",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A native support-ticket workflow proof covering queue state, SLA risk, escalation, knowledge references, resolution, and audit evidence.",
      "**Status:** native-validated public release (`v1.0.0`) **Portfolio lane:** Knowledge and support **Stack:** .NET 8 / ASP.NET Core / C# 12 **KBForge:** reference-only linking; no live connection **Evidence:** two screenshot groups, eight native captures"
    ],
    "sections": [
      {
        "heading": "Workflow",
        "paragraphs": [
          "`ticket -> assign -> respond -> knowledge link / escalation -> resolve`",
          "Priority determines first-response and resolution targets. Public replies record first-response evidence, while escalation and resolution are retained as explicit audit events."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "KBForge boundary",
        "paragraphs": [
          "v1.0.0 supports knowledge article references only. It does not call KBForge or any other live knowledge service."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "Every customer, ticket, reply, target, product, and support event in the public demonstration is synthetic."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Verify",
        "paragraphs": [],
        "bullets": [],
        "code": [
          ".\\tools\\verify-release.ps1"
        ]
      }
    ]
  },
  "securetenantlab": {
    "title": "SecureTenant Lab",
    "repoName": "SecureTenantLab",
    "github": "https://github.com/Codie-Shannon/SecureTenantLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A synthetic-only .NET 8 tenant-security proof for isolation, role/action decisions, admin review, audit evidence, and hardening.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "validate identity and resource tenant;",
          "deny cross-tenant access before evaluating role;",
          "apply explicit role/action policy with default deny;",
          "require administrator role and reason for membership changes;",
          "record tenant-scoped audit evidence;",
          "surface hardening findings for risky configuration."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "All tenants, users, roles, tokens, and resources are generated fixtures. No production identity provider or secret is required."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "searchretrievallab": {
    "title": "Search & Retrieval Lab",
    "repoName": "SearchRetrievalLab",
    "github": "https://github.com/Codie-Shannon/SearchRetrievalLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A synthetic-only .NET 8 search proof for indexing, filtering, saved queries, explainable ranking, evaluation, and provenance.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "index synthetic documents;",
          "apply type/tag filters;",
          "rank title, body, and tag matches;",
          "expose score reasons with each hit;",
          "save and replay search requests;",
          "compare results with synthetic relevance judgements;",
          "calculate deterministic precision evidence."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "All indexed content, people, tags, queries, and relevance judgements are generated fixtures. No production search provider, customer corpus, or secret is required."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "rulesenginelab": {
    "title": "Rules Engine Lab",
    "repoName": "RulesEngineLab",
    "github": "https://github.com/Codie-Shannon/RulesEngineLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A synthetic-only .NET 8 rules proof for deterministic evaluation, explanation evidence, versioning, and regression assurance.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "define explicit rules;",
          "evaluate facts deterministically;",
          "emit MATCH / SKIP evidence;",
          "preserve rule-set id and version;",
          "run regression cases against candidate versions;",
          "mark compatible changes Ready or changed outcomes Review."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "All policies, applicants, requests, scores, and outcomes are fictional. This repository demonstrates software structure and explainability, not real-world eligibility or approval decisions."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "qaforge": {
    "title": "QAForge",
    "repoName": "QAForge",
    "github": "https://github.com/Codie-Shannon/QAForge",
    "syncedAt": "2026-08-12",
    "overview": [
      "A .NET 8 QA workspace for manual test plans, explicit execution states, integrated TestPilot runs, evidence, bugs, templates, CI results, and release-readiness proof.",
      "**Status:** native-validated public release (`v1.0.0`) **Evidence:** 3 screenshot groups / 12 native browser captures"
    ],
    "sections": [
      {
        "heading": "Core proof",
        "paragraphs": [],
        "bullets": [
          "manual PASS / FAIL / BLOCKED / NOT TESTED execution;",
          "release readiness with explicit counts;",
          "TestPilot guided steps and evidence gates;",
          "evidence-linked bug reports;",
          "validated JSON imports;",
          "reusable templates;",
          "CI readiness summaries;",
          "reviewer-ready portfolio proof."
        ],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "All projects, test plans, executions, screenshots, defects, CI results, and release decisions are synthetic. PASS/FAIL does not prove complete test coverage and QAForge never releases software automatically."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "phoenixmodern": {
    "title": "Phoenix Modern Rebuild",
    "repoName": "PhoenixModern",
    "github": "https://github.com/Codie-Shannon/PhoenixModern",
    "syncedAt": "2026-08-12",
    "overview": [
      "A modern Node.js / Vue 3 rebuild of the Phoenix vehicle-dealership concept.",
      "**Status:** native-validated public release (`v1.0.0`) **Evidence:** 2 screenshot groups / 8 native browser captures"
    ],
    "sections": [
      {
        "heading": "Core proof",
        "paragraphs": [],
        "bullets": [
          "typed/validated vehicle domain;",
          "deterministic inventory search and filtering;",
          "vehicle detail lookup;",
          "enquiry creation;",
          "explicit admin enquiry lifecycle;",
          "native REST API;",
          "Vue/Vite production build;",
          "migration/modernisation evidence."
        ],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "All dealers, vehicles, customers, prices, enquiries, images, and finance examples are fictional. The project demonstrates dealership software workflows and does not make finance or lending decisions."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "opspilotai": {
    "title": "OpsPilot AI",
    "repoName": "OpsPilotAI",
    "github": "https://github.com/Codie-Shannon/OpsPilotAI",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A practical AI-assisted workflow extraction proof that turns messy synthetic business text into structured suggestions and requires human review before save.",
      "**Status:** native-validated public release (`v1.0.0`) **Portfolio lane:** AI-assisted business workflow **Stack:** .NET 8 / ASP.NET Core / C# 12 **Provider:** local deterministic provider **External AI:** not connected in v1.0.0 **Evidence:** two native screenshot groups, eight native captures"
    ],
    "sections": [
      {
        "heading": "Purpose",
        "paragraphs": [
          "Take business text such as enquiries, incident reports, meeting notes, or debug summaries and turn it into structured workflow suggestions without presenting a random chatbot or autonomous agent."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "What it proves",
        "paragraphs": [],
        "bullets": [
          "text intake and normalisation;",
          "summary and issue/request classification;",
          "action item extraction;",
          "priority/category suggestion;",
          "structured workflow output;",
          "human Approve, Reject, and NeedsReview decisions;",
          "save blocked until human approval;",
          "audit history and workflow reporting;",
          "safe export excluding raw source text and private reviewer notes;",
          "deterministic tests and native API smoke validation;",
          "cross-platform Ubuntu CI."
        ],
        "code": []
      },
      {
        "heading": "Provider boundary",
        "paragraphs": [
          "v1.0.0 intentionally uses a deterministic local provider. No OpenAI or other external AI API is called. No model API key, token, live email connector, autonomous execution, or external write exists.",
          "A real external AI provider remains a separate future scope."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Run locally",
        "paragraphs": [],
        "bullets": [],
        "code": [
          "dotnet run --project .\\src\\OpsPilotAI.Web\\OpsPilotAI.Web.csproj"
        ]
      },
      {
        "heading": "Verify",
        "paragraphs": [],
        "bullets": [],
        "code": [
          ".\\tools\\verify-release.ps1"
        ]
      },
      {
        "heading": "Evidence groups",
        "paragraphs": [
          "All demonstration inputs and outputs are synthetic."
        ],
        "bullets": [
          "**SG01 - Workflow Extraction and Task Triage**",
          "**SG02 - Human Review, Audit, and Provider Boundaries**"
        ],
        "code": []
      }
    ]
  },
  "opsdiagnosticslab": {
    "title": "Ops Diagnostics Lab",
    "repoName": "OpsDiagnosticsLab",
    "github": "https://github.com/Codie-Shannon/OpsDiagnosticsLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A synthetic-only .NET 8 operational diagnostics proof for health, logs, traces, failed jobs, controlled replay, support packs, and runbook evidence.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "evaluate process/dependency/queue health;",
          "correlate structured logs by TraceId and JobId;",
          "identify failed jobs;",
          "permit replay only when the job is replayable and an operator reason is supplied;",
          "create a support pack linking health, traces, jobs, and runbook guidance."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "Everything is generated synthetic evidence. No customer logs, real secrets, production jobs, or external service calls are present."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "operationsflow": {
    "title": "OperationsFlow",
    "repoName": "OperationsFlow",
    "github": "https://github.com/Codie-Shannon/OperationsFlow",
    "syncedAt": "2026-08-12",
    "overview": [
      "> **Current status:** Week 4 Microsoft 365 pilot implementation is complete. OperationsFlow now has local SQL-backed authentication, Microsoft OAuth2 sign-in, local-vs-Microsoft sign-in status, local SQL roles/permissions, SharePoint-backed evidence storage through Microsoft Graph, SharePoint metadata writeback, document upload/delete lifecycle, current-user activity logging, reporting, data quality checks, and reviewer-ready documentation.",
      "OperationsFlow is **production pilot-ready for a single-tenant Microsoft 365 environment**. It is not being presented as a fully hardened enterprise SaaS platform; it is a working portfolio/pilot system that proves the core business workflow, identity, storage, evidence, reporting, and permission model."
    ],
    "sections": [
      {
        "heading": "Project Purpose",
        "paragraphs": [
          "OperationsFlow is a practical internal business workflow system built to prove that scattered operational work can be captured, reviewed, prioritised, evidenced, and reported from one place.",
          "It is designed around real workplace patterns:"
        ],
        "bullets": [
          "work orders and operational requests",
          "corrective actions and source-linked follow-up work",
          "document intake and document processing",
          "controlled document review",
          "training compliance follow-up",
          "risk register follow-up",
          "document/evidence attachments",
          "management reports",
          "data quality checks",
          "activity traceability",
          "role-based workflow access",
          "Microsoft 365 / SharePoint evidence storage"
        ],
        "code": []
      },
      {
        "heading": "What This Project Demonstrates",
        "paragraphs": [],
        "bullets": [
          ".NET 8 / Blazor application development.",
          "Entity Framework Core persistence.",
          "SQLite/local development support and SQL Server/LocalDB production-foundation support.",
          "Local SQL-backed authentication and seeded demo accounts.",
          "Microsoft OAuth2 sign-in for tenant accounts.",
          "Microsoft account to local OperationsFlow user mapping through `ExternalLoginLinks`.",
          "Local SQL roles and permissions as the application authorization source.",
          "Enforced page/action permissions for workflow actions, evidence uploads/deletes, exports, settings, and user management.",
          "Shared UI components and consolidated styling.",
          "Workflow modules connected through reports, reminders, workload, activity history, and data quality.",
          "File storage abstraction with local and SharePoint providers.",
          "SharePoint evidence upload through Microsoft Graph."
        ],
        "code": []
      },
      {
        "heading": "Current Project Metrics",
        "paragraphs": [],
        "bullets": [
          "Local SQL-backed authentication: implemented.",
          "Microsoft OAuth2 sign-in: implemented.",
          "Local vs Microsoft-linked status display: implemented.",
          "Local roles/permissions: implemented.",
          "ReadOnly permission enforcement: implemented and tested.",
          "Admin workflow actions: implemented and tested.",
          "SharePoint file/evidence storage: implemented.",
          "SharePoint metadata writeback: implemented.",
          "SharePoint delete lifecycle: implemented.",
          "Record attachment panels: implemented.",
          "Document Library: implemented.",
          "Data Quality missing-evidence checks: implemented."
        ],
        "code": []
      },
      {
        "heading": "Walkthrough Video",
        "paragraphs": [
          "A 5-minute silent walkthrough video is available here:",
          "OperationsFlow — Microsoft 365 Pilot Walkthrough",
          "The video demonstrates the main Week 4 review path: local and Microsoft sign-in, Microsoft-linked Admin status, Microsoft 365 connection testing, SharePoint evidence upload, metadata writeback, document lifecycle handling, activity logging, and ReadOnly permission enforcement."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Screenshot Preview",
        "paragraphs": [
          "The screenshots below show the strongest Week 4 review path: sign-in, Microsoft 365 connection, role mapping, SharePoint metadata, Document Library provider, and ReadOnly permission enforcement."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "6. ReadOnly permissions",
        "paragraphs": [
          "More screenshots are available in `Docs/Screenshots`, ordered by review relevance."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Authentication",
        "paragraphs": [
          "OperationsFlow supports local SQL login and Microsoft OAuth2 login. Microsoft sign-in proves tenant identity; OperationsFlow then maps the Microsoft identity to a local user and loads local roles/permissions."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Dashboard",
        "paragraphs": [
          "Shows operational status, workflow counts, recent activity, and sign-in/authentication status."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Work Orders",
        "paragraphs": [
          "Tracks operational work by site, department, owner, priority, status, due date, file count, details page, activity history, and attachments."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Corrective Actions",
        "paragraphs": [
          "Tracks corrective/improvement actions from incidents, audits, inspections, risks, training gaps, document reviews, and compliance follow-ups."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "missionmarkertoolkit": {
    "title": "Mission Marker Toolkit",
    "repoName": "MissionMarkerToolkit",
    "github": "https://github.com/Codie-Shannon/MissionMarkerToolkit",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A reusable Unity 2022.3 editor/runtime package for mission markers, objectives, interaction prompts, distance visibility, and minimap-friendly integration.",
      "**Status:** native-validated public release (`v1.0.0`) **Package:** `com.codieshannon.mission-markers` **Unity:** 2022.3 LTS **Evidence:** two screenshot groups, eight Unity-native captures"
    ],
    "sections": [
      {
        "heading": "Runtime",
        "paragraphs": [],
        "bullets": [
          "MarkerProfile and ObjectiveDefinition ScriptableObjects",
          "Objective, Location, Interaction, and Discovery marker kinds",
          "Active, Hidden, Completed, and Disabled states",
          "distance-aware visibility and fade",
          "interaction-range evaluation",
          "state-change event",
          "optional `IMissionMarkerMapAdapter` boundary"
        ],
        "code": []
      },
      {
        "heading": "Editor",
        "paragraphs": [
          "The package provides a setup-friendly custom inspector with missing-target/profile warnings plus a Create Marker menu helper."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Validation",
        "paragraphs": [
          "v1.0.0 was imported as an embedded package into a blank Unity 2022.3 project and passed 16 EditMode tests.",
          "GitHub Actions validates the public package contract without requiring a private Unity licence secret."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "The package is standalone. It contains no Tokyo Nights scene dependency, licensed game asset, or hard dependency on a particular minimap package."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "kbforge": {
    "title": "KBForge",
    "repoName": "KBForge",
    "github": "https://github.com/Codie-Shannon/KBForge",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A native troubleshooting-tree and knowledge-base proof for support operations.",
      "**Status:** native-validated public release (`v1.0.0`) **Portfolio lane:** Knowledge and support **Stack:** .NET 8 / ASP.NET Core / C# 12 / SQLite **Import/export:** JSON **Evidence:** two screenshot groups, eight native captures"
    ],
    "sections": [
      {
        "heading": "Purpose",
        "paragraphs": [
          "Build guided troubleshooting flows backed by searchable knowledge articles, evidence, known fixes, escalation paths, and retained publishing lineage."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Core model",
        "paragraphs": [
          "`incident -> troubleshooting tree -> checks/decisions -> known fix or escalation -> support report`",
          "Articles support the troubleshooting workflow rather than existing as isolated documents."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Persistence",
        "paragraphs": [
          "v1.0.0 uses local SQLite with JSON export/import validation. No server is required."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "All notes, incidents, products, articles, evidence, and logs are synthetic. No private tickets, credentials, production connectors, or autonomous remediation are included."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Verify",
        "paragraphs": [],
        "bullets": [],
        "code": [
          ".\\tools\\verify-release.ps1"
        ]
      }
    ]
  },
  "integrationgatewaylab": {
    "title": "Integration Gateway Lab",
    "repoName": "IntegrationGatewayLab",
    "github": "https://github.com/Codie-Shannon/IntegrationGatewayLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A synthetic-only .NET 8 integration proof for contract validation, idempotency, bounded retries, import validation, and operational evidence.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "validate endpoint, idempotency key, and reference;",
          "stage an accepted result once;",
          "replay the original result for duplicate keys;",
          "plan bounded webhook retry;",
          "move exhausted synthetic deliveries to dead-letter state;",
          "validate import candidates before downstream work."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "No external service is called. All providers, payloads, webhooks, import records, and identifiers are generated fixtures."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "eventstreamlab": {
    "title": "EventStream Lab",
    "repoName": "EventStreamLab",
    "github": "https://github.com/Codie-Shannon/EventStreamLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A local-only .NET 8 / ASP.NET Core SignalR proof for ordered event intake, bounded replay, backpressure, and stream diagnostics.",
      "**Status:** native-validated public release (`v1.0.0`) **Stack:** .NET 8 / ASP.NET Core SignalR / C# **Evidence:** two screenshot groups, eight native browser captures"
    ],
    "sections": [
      {
        "heading": "Core flow",
        "paragraphs": [],
        "bullets": [
          "subscribe a client to a named stream;",
          "publish an event with a monotonically increasing sequence;",
          "reject duplicates/out-of-order events;",
          "flag sequence gaps;",
          "request bounded replay;",
          "retain only a bounded in-memory window;",
          "report buffer depth, dropped events, gaps, and last sequence."
        ],
        "code": []
      },
      {
        "heading": "Public boundary",
        "paragraphs": [
          "All events are generated fixtures. The default demo is local-only and has no production broker dependency."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "dynamicsopsdemo": {
    "title": "DynamicsOps Demo",
    "repoName": "DynamicsOpsDemo",
    "github": "https://github.com/Codie-Shannon/DynamicsOpsDemo",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A native Dataverse-style CRM and operations workflow proof built with synthetic data.",
      "**Status:** native-validated public release (`v1.0.0`) **Portfolio lane:** CRM and Power Platform **Stack:** .NET 8 / ASP.NET Core / C# 12 **Dataverse:** not connected **Evidence:** two screenshot groups, eight native captures"
    ],
    "sections": [
      {
        "heading": "Purpose",
        "paragraphs": [
          "Demonstrate Dynamics 365 / Dataverse-style business thinking across sales pipeline, service cases, jobs, work orders, activities, compliance, audit, and reporting without pretending to be a live Dynamics implementation."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Business process",
        "paragraphs": [
          "`Enquiry -> Qualified -> Case -> Job -> WorkOrder -> Completed`",
          "Compliance-required records cannot complete until the checkpoint is explicitly completed."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Platform boundary",
        "paragraphs": [
          "All organisations, contacts, cases, activities, work orders, and financial values are synthetic. No Dynamics 365 tenant, Dataverse environment, Power Apps connection, Power Automate flow, tenant ID, connector secret, or live CRM data is included."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Verify",
        "paragraphs": [],
        "bullets": [],
        "code": [
          ".\\tools\\verify-release.ps1"
        ]
      }
    ]
  },
  "documentintelligencelab": {
    "title": "Document Intelligence Lab",
    "repoName": "DocumentIntelligenceLab",
    "github": "https://github.com/Codie-Shannon/DocumentIntelligenceLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "A Python/FastAPI proof for review-first document classification, candidate field extraction, confidence, provenance, batch processing, and evidence export.",
      "**Status:** native-validated public release (`v1.0.0`) **Evidence:** 3 screenshot groups / 12 native browser captures"
    ],
    "sections": [
      {
        "heading": "Core proof",
        "paragraphs": [],
        "bullets": [
          "validated document intake;",
          "candidate invoice / purchase-order classification;",
          "confidence and reason evidence;",
          "field extraction with provenance;",
          "Approved / PartiallyApproved / Rejected / NeedsReview states;",
          "batch review routing;",
          "evidence export;",
          "deterministic tests and native HTTP smoke."
        ],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "All documents, OCR text, classifications, extracted fields, confidence values, and review decisions are synthetic. The app consumes supplied OCR text, does not claim production OCR accuracy, and never auto-approves extracted fields."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "desktopgateway": {
    "title": "DesktopGateway",
    "repoName": "DesktopGateway",
    "github": "https://github.com/Codie-Shannon/DesktopGateway",
    "syncedAt": "2026-08-12",
    "overview": [
      "A .NET 8 local-workstation gateway proof for device profiles, Wake-on-LAN packet generation, readiness, heartbeat, Moonlight session planning, storage transfers, safe power requests, and audit evidence.",
      "**Status:** native-validated public release (`v1.0.0`) **Evidence:** 2 screenshot groups / 8 native browser captures"
    ],
    "sections": [
      {
        "heading": "Core proof",
        "paragraphs": [],
        "bullets": [
          "profile and MAC validation;",
          "deterministic 102-byte Wake-on-LAN magic packet generation;",
          "required readiness checks;",
          "heartbeat freshness;",
          "Sunshine/Moonlight readiness planning;",
          "transfer-capacity checks;",
          "exact-confirmation shutdown/restart/sleep requests;",
          "explicit audit entries."
        ],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "All device profiles, network responses, sessions, transfers, and power actions are synthetic or simulated. Wake packets are generated but not sent. Remote sessions are planned but not launched. Power requests never execute destructive actions."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "debugforgestudio": {
    "title": "DebugForge Studio",
    "repoName": "DebugForgeStudio",
    "github": "https://github.com/Codie-Shannon/DebugForgeStudio",
    "syncedAt": "2026-08-12",
    "overview": [
      "A .NET 8 debugging and investigation workspace for synthetic log analysis, incident triage, reproduction, hypotheses, file comparison, and evidence export.",
      "**Status:** native-validated public release (`v1.0.0`) **Evidence:** 3 screenshot groups / 12 native browser captures"
    ],
    "sections": [
      {
        "heading": "Proof",
        "paragraphs": [],
        "bullets": [
          "collection and streaming log scan paths",
          "normalized repeated-error signatures",
          "explicit incident triage",
          "ordered reproduction steps",
          "evidence-backed hypotheses",
          "working-vs-broken comparison",
          "Markdown / JSON investigation exports",
          "deterministic tests and native HTTP smoke"
        ],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "All logs, files, incidents, error signatures, reproduction steps, and reports are synthetic. DebugForge produces candidate evidence only; it does not execute fixes or write to external systems."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "clientportal": {
    "title": "ClientPortal",
    "repoName": "ClientPortal",
    "github": "https://github.com/Codie-Shannon/ClientPortal",
    "syncedAt": "2026-08-12",
    "overview": [
      "A Node.js / Vue 3 client-project portal proof for project visibility, requests, approvals, messages, document metadata, milestones, and audit history.",
      "**Status:** native-validated public release (`v1.0.0`) **Evidence:** 2 screenshot groups / 8 native browser captures"
    ],
    "sections": [
      {
        "heading": "Core proof",
        "paragraphs": [],
        "bullets": [
          "projects and milestones;",
          "consent-gated client requests;",
          "client-role approval decisions;",
          "staff/client visibility boundaries;",
          "message workflow;",
          "metadata-only document references;",
          "audit history;",
          "native REST API;",
          "Vue/Vite production build."
        ],
        "code": []
      },
      {
        "heading": "Boundary",
        "paragraphs": [
          "All clients, projects, documents, messages, approvals, and staff are synthetic. Files are represented only as metadata references; no real client file content or storage path is included."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "assettrack": {
    "title": "AssetTrack",
    "repoName": "AssetTrack",
    "github": "https://github.com/Codie-Shannon/AssetTrack",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A native, mobile-friendly asset register proof for equipment, vehicles, documents, and IT assets with assignment, service, retirement, audit, reporting, and safe export boundaries.",
      "**Status:** native-validated public release (\u000b1.0.0) **Portfolio lane:** Business systems **Stack:** .NET 8 / ASP.NET Core / C# 12 **Evidence:** two native screenshot groups, eight native captures"
    ],
    "sections": [
      {
        "heading": "Purpose",
        "paragraphs": [
          "Show practical asset lifecycle control without expanding into procurement, accounting, or live telemetry."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "What it proves",
        "paragraphs": [],
        "bullets": [
          "unique asset-id and tag validation;",
          "asset assignment and location history;",
          "service scheduling and maintenance-risk evaluation;",
          "condition recording and retirement without history deletion;",
          "native audit events and runtime reporting;",
          "export views that exclude private operational notes;",
          "deterministic tests and native API smoke validation;",
          "cross-platform Ubuntu CI;",
          "public-safe synthetic evidence."
        ],
        "code": []
      },
      {
        "heading": "Run locally",
        "paragraphs": [
          "`powershell dotnet run --project .\\src\\AssetTrack.Web\\AssetTrack.Web.csproj `"
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Verify",
        "paragraphs": [
          "`powershell .\\tools\\verify-release.ps1 `"
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Evidence groups",
        "paragraphs": [
          "The eight screenshots under docs/screenshot-groups were captured from the running native ASP.NET Core application during v1.0.0 manual review."
        ],
        "bullets": [
          "**SG01 - Asset Register, Assignment, and Service Workflow**",
          "**SG02 - Maintenance Risk, Audit, and Export Evidence**"
        ],
        "code": []
      },
      {
        "heading": "Data boundary",
        "paragraphs": [
          "All assets, people, serial references, locations, maintenance records, warranty dates, and notes are fictional. Export views intentionally exclude private operational notes."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Out of scope",
        "paragraphs": [],
        "bullets": [
          "no live telemetry or hardware control;",
          "no procurement or accounting integration;",
          "no production authentication or persistent database;",
          "no real serial numbers, people, locations, or client data."
        ],
        "code": []
      },
      {
        "heading": "Rights",
        "paragraphs": [
          "Public visibility does not grant a blanket open-source licence. See RIGHTS_AND_LICENSING.md.",
          "Created by **Codie Shannon**."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "accessaudit": {
    "title": "AccessAudit",
    "repoName": "AccessAudit",
    "github": "https://github.com/Codie-Shannon/AccessAudit",
    "syncedAt": "2026-08-12",
    "overview": [
      "> A native, review-first access audit proof using synthetic users, groups, permissions, risk flags, remediation evidence, sign-off, and retained audit history.",
      "**Status:** native-validated public release (`v1.0.0`) **Portfolio lane:** Security and administration **Stack:** .NET 8 / ASP.NET Core / C# 12 **Evidence:** two native screenshot groups, eight native captures"
    ],
    "sections": [
      {
        "heading": "Purpose",
        "paragraphs": [
          "Provide credible Microsoft 365-style access-review proof without requiring or publishing a live tenant."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "What it proves",
        "paragraphs": [],
        "bullets": [
          "permission-matrix modelling;",
          "privileged, guest, stale, and broad-access risk flags;",
          "explicit human Retain, Remove, and NeedsReview decisions;",
          "remediation tracking separated from recommendation;",
          "sign-off gates and retained audit evidence;",
          "native reporting for risk and review completion;",
          "export views that exclude private reviewer notes;",
          "deterministic tests and native API smoke validation;",
          "cross-platform Ubuntu CI;",
          "public-safe synthetic evidence."
        ],
        "code": []
      },
      {
        "heading": "Run locally",
        "paragraphs": [],
        "bullets": [],
        "code": [
          "dotnet run --project .\\src\\AccessAudit.Web\\AccessAudit.Web.csproj"
        ]
      },
      {
        "heading": "Verify",
        "paragraphs": [],
        "bullets": [],
        "code": [
          ".\\tools\\verify-release.ps1"
        ]
      },
      {
        "heading": "Evidence groups",
        "paragraphs": [
          "The eight screenshots under `docs/screenshot-groups` were captured from the running native ASP.NET Core application during v1.0.0 manual review."
        ],
        "bullets": [
          "**SG01 - Permission Matrix and Risk Review**",
          "**SG02 - Remediation, Sign-off, and Audit Evidence**"
        ],
        "code": []
      },
      {
        "heading": "Security and data boundary",
        "paragraphs": [
          "The directory is entirely synthetic. No tenant IDs, real users, group memberships, Microsoft Graph credentials, tokens, or live permission writes are included."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Out of scope",
        "paragraphs": [],
        "bullets": [
          "no live Microsoft 365 or Entra tenant connection;",
          "no Microsoft Graph write operations;",
          "no automated access removal;",
          "no production authentication or persistent database;",
          "no real user, group, tenant, or permission data;",
          "no production compliance certification."
        ],
        "code": []
      },
      {
        "heading": "Rights",
        "paragraphs": [
          "Public visibility does not grant a blanket open-source licence. See `RIGHTS_AND_LICENSING.md`.",
          "Created by **Codie Shannon**."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "family-archive": {
    "title": "Family Archive",
    "repoName": "FamilyArchive",
    "github": "https://github.com/Codie-Shannon/FamilyArchive",
    "syncedAt": "2026-08-12",
    "overview": [
      "Family Archive is a privacy-first, preservation-grade family history platform. It protects immutable originals, creates traceable viewing and restoration derivatives, and gives approved family members a simpler way to contribute, review and discover shared history.",
      "**Live product:** familyarchive.bayforgesystems.com"
    ],
    "sections": [
      {
        "heading": "Release state",
        "paragraphs": [
          "interruption recovery, isolated failures, idempotent replay and reconciliation",
          "free-form, original-first manual split editor, proven by approved Group 34 evidence",
          "final cropping in that order, with manual 90-degree overrides in Group 36",
          "continuity, proven by approved Group 35 evidence"
        ],
        "bullets": [
          "Current release: **v4.2.0 — Batch Content Safeguards**",
          "Official evidence: **37 approved and closed screenshot groups**",
          "Media supported by the completed workflow: **photos**",
          "Production services: Laravel Cloud, MySQL, Wasabi object storage and Google Maps",
          "Migration qualification: a synthetic 30,000-entry run proved checkpoints,",
          "Real family migration: deliberately separate and not represented by public evidence",
          "Composite scans: automatic border and borderless layout suggestions plus a",
          "Split-photo rendering: padded child extraction, independent rotation/deskew and",
          "Private source exclusions: pre-discovery subtree pruning and fail-closed resume",
          "Batch content safeguards: identification-document and sensitive-minor holds are"
        ],
        "code": []
      },
      {
        "heading": "What the product demonstrates",
        "paragraphs": [
          "The complete feature inventory is in Capabilities. The architecture and preservation rules are described in the System Overview."
        ],
        "bullets": [
          "Immutable, checksum-verified originals with no-overwrite storage boundaries",
          "Quarantine, duplicate review, human acceptance and append-only audit history",
          "Automatic and manual restoration from the verified original, with versioned lineage",
          "Multi-photo scan detection and reversible separation into independently reviewed photos",
          "Clipping-safe child rendering that rotates or deskews before calculating the final crop",
          "Resumable batch intake designed for tens of thousands of photos",
          "Strict source-subtree exclusions whose names and contents never enter discovery",
          "Manual, per-batch safety classification with fail-closed approval enforcement",
          "Delegated family roles, guided non-email access and owner-controlled exceptions",
          "Albums, permission-aware search and privacy-reviewed interactive maps",
          "Embedded family messaging with participant-controlled mute, archive and block",
          "Live production health, restrictive browser headers and private Wasabi storage"
        ],
        "code": []
      },
      {
        "heading": "Preservation contract",
        "paragraphs": [
          "Accepted originals are never overwritten, silently replaced or automatically deleted. Quarantine objects, originals and derivatives have separate identities. Every viewing or restoration derivative records its source lineage. Automated processing produces suggestions; people make consequential archive decisions."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Architecture at a glance",
        "paragraphs": [
          "The detailed trust boundaries, storage prefixes and processing rules are in the System Overview."
        ],
        "bullets": [],
        "code": [
          "flowchart LR",
          "A[\"Approved family members\"] --> B[\"Laravel application\"]",
          "B --> C[\"MySQL metadata and audit history\"]",
          "B --> D[\"Queue workers\"]",
          "D --> E[\"Private Wasabi prefixes\"]",
          "E --> F[\"Quarantine\"]",
          "F --> G[\"Human review\"]",
          "G --> H[\"Immutable original\"]",
          "H --> I[\"Versioned derivatives\"]",
          "B --> J[\"Permission-aware archive, albums and maps\"]"
        ]
      },
      {
        "heading": "Privacy and evidence",
        "paragraphs": [
          "The repository, tests and public screenshot evidence use synthetic people, places and media. Real family photos, names, storage identifiers, credentials and local source paths are excluded. The release verifier checks those boundaries and validates the official PNG evidence packs.",
          "See Security, Threat Model and Evidence Guide.",
          "The source is publicly viewable for portfolio and evaluation purposes, but it is not open source. See Rights and Licensing."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Technology",
        "paragraphs": [],
        "bullets": [
          "PHP 8.3+ and Laravel 13",
          "Livewire 4, Flux, Tailwind CSS and Vite",
          "MySQL in hosted production",
          "Pest, Larastan and Laravel Pint",
          "Wasabi S3-compatible private object storage",
          "Google Maps for privacy-reviewed public locations"
        ],
        "code": []
      },
      {
        "heading": "Run locally",
        "paragraphs": [
          "Install and initialize the project:",
          "Run the local application services:",
          "Run the full engineering and release gate:",
          "The portfolio dataset is synthetic. Configure a unique `PORTFOLIO_DEMO_PASSWORD`, then seed a fresh local database:"
        ],
        "bullets": [],
        "code": [
          "composer setup",
          "composer dev",
          "composer test",
          "composer release:verify",
          "php artisan db:seed --class=PortfolioDemoSeeder"
        ]
      },
      {
        "heading": "Documentation",
        "paragraphs": [
          "Created and developed by **Codie Shannon** under **BayForge Systems**."
        ],
        "bullets": [
          "Documentation index",
          "Current maintenance boundary",
          "Capabilities",
          "Release history",
          "v4.0.0 release notes",
          "Roadmap and closed groups",
          "Build and evidence process",
          "Development process"
        ],
        "code": []
      }
    ]
  },
  "workflowconnectorhub": {
    "title": "Workflow Connector Hub",
    "repoName": "WorkflowConnectorHub",
    "github": "https://github.com/Codie-Shannon/WorkflowConnectorHub",
    "syncedAt": "2026-08-12",
    "overview": [
      "A public-safe ASP.NET Core integration proof that receives synthetic requests, routes them through deterministic mock connectors, protects against duplicate execution, applies bounded retries, escalates unresolved work for human review, and preserves an audit trail.",
      "**Status:** released at `v1.0.0` **Portfolio lane:** business systems, APIs, and workflow integration **Stack:** .NET 8, ASP.NET Core, C# **Data:** synthetic only"
    ],
    "sections": [
      {
        "heading": "What it proves",
        "paragraphs": [],
        "bullets": [
          "request validation and correlation;",
          "connector abstraction without fake production claims;",
          "idempotency-key replay protection;",
          "review-first routing for sensitive mock connector categories;",
          "bounded retries and dead-letter escalation;",
          "append-only submission, replay, and attempt evidence;",
          "native API, responsive evidence UI, deterministic tests, and CI."
        ],
        "code": []
      },
      {
        "heading": "Native workflow",
        "paragraphs": [
          "The running application exposes:",
          "All connectors are local mocks. The project does not contain provider credentials and does not perform external writes."
        ],
        "bullets": [],
        "code": [
          "GET  /health",
          "GET  /api/status",
          "GET  /api/demo",
          "GET  /api/audit",
          "GET  /api/requests/{idempotencyKey}",
          "POST /api/requests",
          "POST /api/requests/{idempotencyKey}/attempts"
        ]
      },
      {
        "heading": "Run locally",
        "paragraphs": [],
        "bullets": [],
        "code": [
          "dotnet restore",
          "dotnet build .\\WorkflowConnectorHub.sln --configuration Release",
          "dotnet run --configuration Release --project .\\tests\\WorkflowConnectorHub.Tests\\WorkflowConnectorHub.Tests.csproj",
          ".\\tools\\run-native-demo.ps1",
          "http://127.0.0.1:5088/overview.html"
        ]
      },
      {
        "heading": "Verify the release",
        "paragraphs": [
          "The release gate validates the native build, deterministic domain tests, two screenshot groups, manual-review hashes, documentation, and public boundary."
        ],
        "bullets": [],
        "code": [
          ".\\tools\\verify-release.ps1"
        ]
      },
      {
        "heading": "SG01 - Intake, Routing, and Connector Execution",
        "paragraphs": [],
        "bullets": [
          "native overview and metrics;",
          "live synthetic submission;",
          "replay protection;",
          "audit/review surface;",
          "responsive mobile workflow."
        ],
        "code": []
      },
      {
        "heading": "SG02 - Failure Recovery, Audit, and Release Evidence",
        "paragraphs": [
          "See `docs/screenshot-groups`."
        ],
        "bullets": [
          "validation and retry gates;",
          "operational summaries;",
          "public safety and scope boundaries;",
          "responsive mobile assurance."
        ],
        "code": []
      },
      {
        "heading": "Deliberate boundaries",
        "paragraphs": [],
        "bullets": [
          "no real connector credentials;",
          "no live email, calendar, file, GitHub, or accounting write;",
          "no uncontrolled retry loop;",
          "no silent duplicate request creation;",
          "no automatic approval of review or dead-letter records;",
          "no client payloads or proprietary workflow rules;",
          "no claim of production deployment."
        ],
        "code": []
      },
      {
        "heading": "Architecture and evidence",
        "paragraphs": [
          "Created and developed by **Codie Shannon**."
        ],
        "bullets": [
          "`docs/ARCHITECTURE.md`",
          "`docs/CASE_STUDY.md`",
          "`docs/REPRODUCTION.md`",
          "`docs/LIMITATIONS.md`",
          "`BUILD_STATUS.md`"
        ],
        "code": []
      }
    ]
  },
  "operationsflow-toolkit": {
    "title": "OperationsFlow Toolkit",
    "repoName": "OperationsFlow-Toolkit",
    "github": "https://github.com/Codie-Shannon/OperationsFlow-Toolkit",
    "syncedAt": "2026-08-12",
    "overview": [
      "A Power BI and Microsoft 365 workflow-design toolkit covering safety, corrective actions, training compliance, document control, work orders, and risk reporting."
    ],
    "sections": [
      {
        "heading": "Completed Power BI layer",
        "paragraphs": [
          "The v1.3 report contains six pages:",
          "The report uses six synthetic CSV datasets and is documented through six approved screenshots."
        ],
        "bullets": [
          "Executive Overview",
          "Corrective Actions",
          "Training Compliance",
          "Document Control",
          "Work Orders",
          "Risk Register"
        ],
        "code": []
      },
      {
        "heading": "Microsoft 365 design layer",
        "paragraphs": [
          "The repository also documents a future implementation using:",
          "That implementation is **designed but not deployed**. The repository does not claim a live Microsoft 365 solution."
        ],
        "bullets": [
          "Microsoft Lists or SharePoint Lists;",
          "Power Apps;",
          "Power Automate;",
          "Power BI connected to live list data."
        ],
        "code": []
      },
      {
        "heading": "Evidence",
        "paragraphs": [
          "`docs/screenshot-groups/screenshot-group-01-toolkit-closure`"
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Reproduction",
        "paragraphs": [
          "See `docs/REPRODUCTION.md`."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Status",
        "paragraphs": [
          "Closed at **v1.3.0** and in maintenance mode.",
          "The Power BI report history, six-page v1.3 report, synthetic datasets, Microsoft 365 design documentation, manual review, screenshot evidence, repository validation, release package, and checksum are complete.",
          "The broader Blazor application is maintained separately in the OperationsFlow repository.",
          "Created and developed by **Codie Shannon**."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "power-bi-work-order-dashboard": {
    "title": "Power BI Work Order Dashboard",
    "repoName": "power-bi-work-order-dashboard",
    "github": "https://github.com/Codie-Shannon/power-bi-work-order-dashboard",
    "syncedAt": "2026-08-12",
    "overview": [
      "A focused Power BI dashboard using synthetic work-order data to demonstrate operational KPI design, filtering, DAX-backed reporting, and management-ready visualisation."
    ],
    "sections": [
      {
        "heading": "What it shows",
        "paragraphs": [],
        "bullets": [
          "total, open, completed, and overdue work-order KPIs;",
          "jobs by status and job type;",
          "open, in-progress, and overdue work;",
          "assigned-person filtering;",
          "operational reporting from a synthetic CSV source."
        ],
        "code": []
      },
      {
        "heading": "Evidence",
        "paragraphs": [
          "Screenshot Group 01 contains one approved full-dashboard image:",
          "`docs/screenshot-groups/screenshot-group-01-operational-reporting`",
          "One image is intentional here: this is a focused single-page dashboard rather than a multi-page application."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Files",
        "paragraphs": [],
        "bullets": [
          "`WorkOrderDashboard.pbix` - Power BI report",
          "`sample_work_orders.csv` - synthetic source data",
          "`dashboard-preview.png` - dashboard preview",
          "`docs/` - reproduction, release, and evidence documentation"
        ],
        "code": []
      },
      {
        "heading": "Reproduction",
        "paragraphs": [
          "See `docs/REPRODUCTION.md`."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Status",
        "paragraphs": [
          "Closed at **v1.0.0** and in maintenance mode.",
          "The report package, source data, screenshot evidence, manual Power BI review, repository verifier, GitHub Actions validation, release artifact, and checksum are complete."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Data boundary",
        "paragraphs": [
          "All records are synthetic. No real company, client, employee, site, or work order data is included.",
          "Created and developed by **Codie Shannon**."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "tokyo-nights-racing": {
    "title": "Tokyo Nights Racing",
    "repoName": "Tokyo-Nights-Racing",
    "github": "https://github.com/Codie-Shannon/Tokyo-Nights-Racing",
    "syncedAt": "2026-08-12",
    "overview": [
      "**Tokyo Nights Racing** is a Unity/C# arcade racing systems portfolio project built to demonstrate connected gameplay systems, data-driven architecture, AI racing, vehicle management, freeroam traffic, settings persistence, scene flow, and custom editor tooling.",
      "> This is a technical portfolio prototype, not a commercial game release. The focus is on demonstrating systems architecture, gameplay programming, AI, tools, and scene flow."
    ],
    "sections": [
      {
        "heading": "At a Glance",
        "paragraphs": [],
        "bullets": [
          "**Engine:** Unity 2022.3 LTS",
          "**Language:** C#",
          "**Project Type:** Arcade racing systems prototype",
          "**Focus:** Gameplay systems, AI, data-driven race setup, traffic, UI, settings, scene flow, and tooling",
          "**Status:** Playable portfolio build",
          "**Portfolio Status:** Closed at v0.1.0"
        ],
        "code": []
      },
      {
        "heading": "Quick Review Guide",
        "paragraphs": [
          "For a fast review, start with:",
          "Recommended code areas:"
        ],
        "bullets": [
          "Watch the gameplay demo video.",
          "Review the Technical Highlights section.",
          "Check the screenshots.",
          "Inspect the vehicle database, race mode database, AI racing, checkpoint progress, traffic spawner, settings persistence, and scene return systems.",
          "Vehicle / garage systems.",
          "Race mode and race loading systems.",
          "AI waypoint and checkpoint progress systems.",
          "Traffic spawning systems.",
          "Settings and audio persistence.",
          "Scene return-state handling.",
          "Editor setup tools."
        ],
        "code": []
      },
      {
        "heading": "Gameplay Demo",
        "paragraphs": [
          "Gameplay demo video: Tokyo Nights Racing - Unity C# Systems Portfolio Demo"
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Overview",
        "paragraphs": [
          "Tokyo Nights Racing is an arcade racing prototype featuring a main menu carousel, garage vehicle selection, race modes, checkpoint-based race progress, high-speed waypoint AI, freeroam traffic, configurable settings, audio routing, loading screens, and scene return flows.",
          "The project was built around a systems-focused goal: create a playable Unity racing project where vehicles, races, AI, traffic, menus, settings, and scene transitions are all connected through reusable data-driven systems."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Why I Built This",
        "paragraphs": [
          "I built Tokyo Nights Racing as a systems-focused Unity portfolio project. The goal was not just to make a racing prototype, but to build a connected project with data-driven vehicles, race modes, AI opponents, freeroam traffic, settings, scene loading, and custom tooling.",
          "The project was designed to show how I structure and debug larger systems, especially where multiple scenes, saved data, UI, gameplay, physics, and AI all need to work together."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "My Role",
        "paragraphs": [
          "I designed, implemented, debugged, and integrated the main gameplay systems, race flow, AI behavior, vehicle database, garage flow, traffic system, settings, UI logic, scene return handling, and supporting editor tools.",
          "The project also involved replacing risky prototype assets, cleaning the project for public release, organizing scripts, fixing missing references, preparing screenshots, and documenting the work for GitHub."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Technical Highlights",
        "paragraphs": [],
        "bullets": [
          "Built a ScriptableObject-driven vehicle and race mode architecture.",
          "Created a garage/equip/save system using separate gameplay, preview, and AI prefabs.",
          "Built a main menu Race Modes launcher that selects compatible races based on the equipped vehicle.",
          "Implemented checkpoint-based race progress shared by both player and AI.",
          "Built custom waypoint-based racing AI capable of high-speed racing on curved tracks.",
          "Separated AI steering from official race progress to avoid waypoint/checkpoint ranking bugs.",
          "Added freeroam traffic with node-based spawning, traffic vehicle database selection, and density settings.",
          "Implemented scene return flows for Main Menu, Garage, RaceScene, and Freeroam.",
          "Added persistent settings for audio, quality, fullscreen, and traffic density.",
          "Routed car audio through Unity AudioMixer groups.",
          "Created editor tools for audio routing and vehicle ground checkpoint alignment.",
          "Cleaned and prepared the project for public GitHub portfolio use."
        ],
        "code": []
      },
      {
        "heading": "What This Demonstrates",
        "paragraphs": [
          "This project demonstrates:"
        ],
        "bullets": [
          "C# gameplay systems programming.",
          "Unity scene flow and state management.",
          "Data-driven architecture using ScriptableObjects.",
          "AI behavior and checkpoint-based race logic.",
          "UI/menu systems and saved settings.",
          "Physics-based vehicle setup and debugging.",
          "Debugging complex multi-system bugs.",
          "Editor tooling for repetitive setup tasks.",
          "Public project cleanup and documentation."
        ],
        "code": []
      },
      {
        "heading": "Best Areas to Review",
        "paragraphs": [
          "The most important systems to review in the project are:"
        ],
        "bullets": [
          "Vehicle database and garage flow.",
          "Race mode database and main menu race launcher.",
          "Race position/checkpoint system.",
          "AI waypoint controller and checkpoint progress separation.",
          "Traffic spawner and traffic vehicle database.",
          "Scene loading and return-state handling.",
          "Settings menu and persistent audio settings.",
          "Editor tools for audio routing and vehicle ground checkpoint alignment."
        ],
        "code": []
      },
      {
        "heading": "Key Features",
        "paragraphs": [],
        "bullets": [
          "Arcade vehicle controller with Road, OffRoad, AllTerrain, and MonsterTruck vehicle classes.",
          "Garage vehicle selection system with saved equipped vehicle.",
          "ScriptableObject-based vehicle database.",
          "ScriptableObject-based race mode database.",
          "Main menu Race Modes launcher that selects compatible races based on the equipped vehicle.",
          "Checkpoint-based race progress and position tracking.",
          "Custom waypoint-based racing AI.",
          "AI uses waypoints for driving and checkpoints for official race progress.",
          "Grid start system for player and AI racers.",
          "Freeroam traffic system with traffic vehicle database and spawn nodes.",
          "Traffic density setting with 50 / 100 / 150 / 200 density options.",
          "Settings menu with audio, quality, fullscreen, and traffic density."
        ],
        "code": []
      }
    ]
  },
  "onboardingflow-laravel-proof": {
    "title": "OnboardingFlow",
    "repoName": "onboardingflow-laravel-proof",
    "github": "https://github.com/Codie-Shannon/onboardingflow-laravel-proof",
    "syncedAt": "2026-08-12",
    "overview": [
      "OnboardingFlow is a Laravel/MySQL proof-of-concept for a trackable onboarding workflow.",
      "It was built as a standalone sample-data project to demonstrate how an onboarding process could move from manual emailed documents into a structured review workflow with invites, submissions, document requirements, review steps, missing-information follow-up, SharePoint-backed uploads, reporting, and activity history.",
      "This proof is **not connected to OSHE systems** and is **not production-ready**. It is intended as a safe visual and technical proof-of-concept."
    ],
    "sections": [
      {
        "heading": "Project Summary",
        "paragraphs": [
          "OnboardingFlow demonstrates a complete onboarding review loop:",
          "The purpose of the proof is to make the workflow easier to review visually before any real pilot or production work is considered."
        ],
        "bullets": [
          "An admin creates an onboarding template.",
          "An admin creates an invite for an applicant.",
          "The applicant opens a public onboarding link.",
          "The applicant submits details and uploads required documents.",
          "Uploaded documents are stored through SharePoint.",
          "A reviewer checks the submission, checklist, and document requirements.",
          "If information is missing, the reviewer can request updates.",
          "The applicant can reopen the same link and resubmit.",
          "The reviewer continues review and can approve the onboarding.",
          "Activity history and reports show the workflow trail."
        ],
        "code": []
      },
      {
        "heading": "Video Walkthrough",
        "paragraphs": [
          "A full walkthrough video is available here:",
          "OnboardingFlow Proof-of-Concept Walkthrough",
          "The walkthrough demonstrates the full sample workflow, including invite tracking, public submission, SharePoint document uploads, reviewer checks, missing-information follow-up, applicant resubmission, activity history, and reporting."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Screenshots",
        "paragraphs": [
          "Screenshots are stored in:"
        ],
        "bullets": [],
        "code": [
          "docs/screenshots/"
        ]
      },
      {
        "heading": "What It Demonstrates",
        "paragraphs": [],
        "bullets": [
          "Template-based onboarding invites",
          "Public applicant onboarding form",
          "Submission tracking",
          "Required document tracking",
          "SharePoint-backed document uploads",
          "Reviewer checklist",
          "Missing-information detection",
          "Missing-information follow-up messages",
          "Applicant resubmission workflow",
          "Admin / Reviewer / Read-only roles",
          "Activity history / audit trail",
          "Reports page"
        ],
        "code": []
      },
      {
        "heading": "Tech Stack",
        "paragraphs": [],
        "bullets": [
          "Laravel",
          "PHP",
          "MySQL",
          "Blade",
          "Tailwind CSS",
          "Microsoft Graph",
          "Outlook email sending",
          "SharePoint document storage"
        ],
        "code": []
      },
      {
        "heading": "Development Tools",
        "paragraphs": [],
        "bullets": [
          "Laragon for fast local PHP/MySQL proof-of-concept development",
          "Composer",
          "npm / Vite",
          "Cursor for AI-assisted code editing and project iteration",
          "ChatGPT for planning, debugging support, documentation drafting, QA planning, demo review, and packaging",
          "Git / GitHub for version control and project presentation"
        ],
        "code": []
      },
      {
        "heading": "Local Development Environment",
        "paragraphs": [
          "This proof-of-concept was built locally using **Laragon** to move quickly on a Windows development machine.",
          "Laragon was used for the proof because the priority was to rapidly validate the onboarding workflow, database structure, Microsoft Graph email flow, SharePoint document uploads, reviewer process, QA checklist, screenshots, and demo packaging.",
          "This does **not** mean Laragon would be the preferred environment for a real pilot or production project.",
          "For a production-aligned setup, the environment should be reviewed against the organisation's existing stack, development standards, deployment process, hosting approach, and security requirements. Based on the stack previously described for the live environment, that may include Laravel/PHP, MySQL, Composer, npm, Git, React/JavaScript, Tailwind CSS, Lando, Docker, Linux hosting, and the organisation's existing hosting/security requirements."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Recommended Demo Path",
        "paragraphs": [],
        "bullets": [
          "Log in as admin.",
          "Open the dashboard.",
          "Open the invite list.",
          "Open an onboarding invite.",
          "Open the public applicant form.",
          "Submit applicant details and upload required documents.",
          "Confirm uploaded files appear in SharePoint.",
          "Review uploaded documents from the admin/reviewer screen.",
          "Mark the invite as Needs Info.",
          "Preview or send the needs-info follow-up email.",
          "Open the same public link in resubmission mode.",
          "Resubmit missing information and documents."
        ],
        "code": []
      },
      {
        "heading": "Demo Users",
        "paragraphs": [
          "After seeding:"
        ],
        "bullets": [],
        "code": [
          "admin@example.com / password",
          "reviewer@example.com / password",
          "readonly@example.com / password"
        ]
      },
      {
        "heading": "Admin",
        "paragraphs": [
          "Admin users can:"
        ],
        "bullets": [
          "Create templates",
          "Create invites",
          "Send invite emails",
          "Review submissions",
          "Update document status",
          "Add notes",
          "Send needs-info emails",
          "Export CSV",
          "View reports and activity history"
        ],
        "code": []
      }
    ]
  },
  "clouddeploylab": {
    "title": "CloudDeploy Lab",
    "repoName": "CloudDeployLab",
    "github": "https://github.com/Codie-Shannon/CloudDeployLab",
    "syncedAt": "2026-08-12",
    "overview": [
      "CloudDeploy Lab is a focused Azure and GitHub Actions portfolio proof. It shows how a small ASP.NET Core service moves from source control to repeatable restore, build, test, publish, health verification and an explicitly approved Azure deployment.",
      "The project uses synthetic deployment history and creates no paid cloud resource automatically."
    ],
    "sections": [
      {
        "heading": "What it proves",
        "paragraphs": [],
        "bullets": [
          "ASP.NET Core 8 and minimal APIs",
          "deterministic restore, Release build, tests and publish",
          "health and build-information endpoints",
          "GitHub Actions CI",
          "manual Azure App Service deployment",
          "Bicep infrastructure definition",
          "environment and secret boundaries",
          "release verification and screenshot evidence discipline"
        ],
        "code": []
      },
      {
        "heading": "Local verification",
        "paragraphs": [
          "Run locally:",
          "Open `http://localhost:5078`."
        ],
        "bullets": [],
        "code": [
          "dotnet restore .\\CloudDeployLab.sln",
          "dotnet build .\\CloudDeployLab.sln -c Release --no-restore",
          "dotnet test .\\CloudDeployLab.sln -c Release --no-build",
          "pwsh .\\tools\\verify-release.ps1",
          "dotnet run --project .\\src\\CloudDeployLab.Web\\CloudDeployLab.Web.csproj"
        ]
      },
      {
        "heading": "Safety boundary",
        "paragraphs": [],
        "bullets": [
          "No production credential is committed.",
          "Azure deployment is manual and requires an explicitly configured publish profile.",
          "The dashboard displays synthetic history until a real approved deployment is connected.",
          "No cloud resource is created by the normal CI workflow."
        ],
        "code": []
      },
      {
        "heading": "Status",
        "paragraphs": [
          "Closed at **v1.0.0** and in maintenance mode.",
          "The local Release verifier, automated endpoint tests, GitHub Actions workflow, verified web artifact, and Screenshot Group 01 have all been completed.",
          "The project does not claim a live Azure deployment. Azure remains a guarded, manually approved future deployment path."
        ],
        "bullets": [],
        "code": []
      }
    ]
  },
  "media-manager": {
    "title": "Media Manager",
    "repoName": "media-manager",
    "github": "https://github.com/Codie-Shannon/media-manager",
    "syncedAt": "2026-08-12",
    "overview": [
      "Privacy-first C# WPF media library organiser - restored from my diploma-era origin project and modernized with supported metadata providers.",
      "Media Manager is a local Windows desktop application for organising, enriching, searching, and maintaining personal media libraries. The corrected `v1.0.1` portfolio release preserves the recovered application and its original custom-controls architecture while presenting a verified, modern product.",
      "> **The application that taught me how to build software, completed by the developer it helped me become.**"
    ],
    "sections": [
      {
        "heading": "Project significance",
        "paragraphs": [
          "Media Manager was the first serious application I built during my software-development diploma. It taught me how application structure, WPF, custom controls, file-system workflows, metadata, persistence, debugging, and interface design fit together.",
          "Years later, I recovered the project from a damaged drive. The recovered snapshot preserved substantial real application work, but it was only partially functional and was not a reproducible or release-ready build. I preserved that historical baseline, repaired and reconnected the custom controls library, progressively stabilized its workflows with isolated synthetic data, replaced brittle site scraping with supported provider APIs, strengthened local data handling, and redesigned the interface. This is a modernised origin project, not a greenfield rewrite."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Historical baseline status",
        "paragraphs": [
          "The repository distinguishes three states:",
          "| State | Meaning | | --- | --- | | Recovered snapshot | Partially functional historical source recovered from a damaged drive. It demonstrates the original scope and interface, but does not prove every historical workflow or establish the condition of the application when originally submitted. | | Original-interface functional restoration | A separate, acceptance-complete Student Projects edition based on the pre-modern Group 4 snapshot. It preserves the original interface while carrying the remaining functional corrections and its own complete verification evidence. | | Modern release | The corrected `v1.0.1` application in this repository: supported providers, reliability work, modern interface, verified player surfaces, packaging, and release evidence. |",
          "The recovered snapshot being incomplete today does not mean the diploma application never worked. It means the damaged-drive recovery could not provide a complete, reproducible copy or full acceptance evidence on its own.",
          "Read the full original application history and modernisation case study."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Original to modern",
        "paragraphs": [
          "The evidence is deliberately matched:",
          "| Recovered snapshot | Reproducible build checkpoint | Modern completed release | | --- | --- | --- | | 13 original screenshots | 13 restored screenshots | 13 modern screenshots |",
          "Every public capture uses generated artwork and synthetic records. The fixed sequences show the same shell, libraries, forms, sorting, provider state, and selected-item details at each stage. Screenshots prove the states pictured; they are not, by themselves, evidence that every workflow passed."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Core features",
        "paragraphs": [
          "Media Manager is a desktop organiser. It is not a streaming service, Plex/Kodi replacement, cloud platform, or active IMDb scraper."
        ],
        "bullets": [
          "Six local library types: movies, TV shows, videos, pictures, music, and games.",
          "Folder hierarchies, media cards, selected-item details, search, sorting, filtering, and favourites.",
          "Add, edit, remove, delete, reveal-in-Explorer, playback, gallery, and game-launch workflows.",
          "TMDB metadata for movies and television; IGDB metadata for games.",
          "Manual metadata entry plus no-key, offline, timeout, rate-limit, and stale-cache behavior.",
          "SQLite persistence with health checks, path-redacted catalog export, verified backups, staged restore, rollback, and corruption recovery.",
          "Disposable `--demo` profile with generated covers and neutral local fixtures.",
          "Modern navy/cyan shell with visible focus, accessible names, scroll-safe commands, and responsive long-form layouts."
        ],
        "code": []
      },
      {
        "heading": "Architecture",
        "paragraphs": [
          "| Area | Responsibility | | --- | --- | | `src/Media_Manager` | .NET Framework 4.7.2 WPF application, views, local workflows, provider boundary, persistence, recovery, and modern application theme | | `src/MediaControlsLibrary` | Recovered reusable WPF controls for navigation, cards, details, forms, dialogs, folder browsing, and viewer surfaces | | `src/MediaControlsTester` | Demonstration harness for the reusable controls; some labels intentionally demonstrate styling without configured destinations | | `tests/MediaManager.StabilityTests` | Dependency-light x64 regression executable using disposable data and mocked provider responses | | `sample-data` | Publication-safe fixture policy and generated demo-catalog description | | `packaging` | Repeatable Release x64 portable-package pipeline and privacy gate |",
          "The recovery intentionally retains a pragmatic hybrid of view code-behind, view models, and static workflow helpers. Provider and data-recovery boundaries were introduced incrementally where they materially improved safety and testability; the project was not rewritten merely to appear newer. See architecture."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Metadata providers",
        "paragraphs": [
          "`IMetadataProvider` keeps provider response types and authentication out of the UI:",
          "Provider calls are cancellable, have bounded timeouts, use timestamped local caches, and always retain a manual-entry route. Credentials are optional, stored outside the repository, and protected for the current Windows user with DPAPI. Setup, failure states, and attribution are documented in metadata-provider-migration.md."
        ],
        "bullets": [
          "TMDB: movie, TV, season, and episode search/details, including supported lookup of legacy IMDb external IDs.",
          "IGDB: game search/details through Twitch application credentials."
        ],
        "code": []
      },
      {
        "heading": "Privacy and local-first behavior",
        "paragraphs": [
          "Normal use stores the database, settings, encrypted provider configuration, caches, covers, backups, recovery copies, and rolling logs in the current Windows user's local application-data profile. Demo mode instead uses a disposable directory under `%TEMP%` and never opens the normal profile.",
          "The repository and portable package exclude real libraries, databases, API credentials, logs, personal paths, recovered copyrighted samples, caches, and generated build directories. Backups exclude media files and provider credentials; catalog export redacts local path roots. See the complete privacy model and release audit."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Build and run",
        "paragraphs": [
          "Requirements:",
          "From a Developer PowerShell:",
          "The normal executable uses the current user's local profile. Use `--demo` for a completely synthetic portfolio walkthrough.",
          "Build the portable Release:"
        ],
        "bullets": [
          "Windows 10/11 x64;",
          "Visual Studio 2022 with .NET desktop development;",
          ".NET Framework 4.7.2 developer pack;",
          "NuGet package restore."
        ],
        "code": [
          "nuget restore MediaManager.sln -ConfigFile NuGet.Config",
          "msbuild MediaManager.sln /t:Rebuild /p:Configuration=Release /p:Platform=x64",
          "src\\Media_Manager\\bin\\x64\\Release\\Media_Manager.exe --demo",
          "powershell -NoProfile -ExecutionPolicy Bypass -File packaging\\build-portable.ps1",
          "powershell -NoProfile -ExecutionPolicy Bypass -File tools\\verify-release.ps1"
        ]
      },
      {
        "heading": "Testing and evidence",
        "paragraphs": [
          "After building each x64 configuration:",
          "The suite covers destructive hierarchy behavior, malformed data, provider mapping and cancellation, encrypted settings, offline fallback, backup/restore, corrupt-database recovery, archive validation, path redaction, demo isolation, and a 2,500-record health scan. Manual matrices verify the complete UI and filesystem workflows. See testing.md, build-status.md, and the evidence index.",
          "Watch the silent modern-interface walkthrough."
        ],
        "bullets": [],
        "code": [
          "tests\\MediaManager.StabilityTests\\bin\\x64\\Debug\\MediaManager.StabilityTests.exe",
          "tests\\MediaManager.StabilityTests\\bin\\x64\\Release\\MediaManager.StabilityTests.exe"
        ]
      },
      {
        "heading": "Release status",
        "paragraphs": [
          "`v1.0.1` is the current release. It retains the seven-group recovery and modernisation closure and adds the corrective player pass:",
          "The historical `group-2-complete` tag records the point where clean builds and startup were restored. Groups 3–5 were intended to establish the fully functional pre-modern baseline, but a later live audit found that their playback check had verified open/return behavior without detecting the constrained full-window player layout. The defect was corrected and evidenced in `v1.0.1`; the separate original-interface Student Projects edition now carries the equivalent functional correction and independent acceptance evidence without adopting the modern theme.",
          "See release notes, changelog, closed current bucket, and master plan."
        ],
        "bullets": [
          "preserved recovered baseline;",
          "restored reproducible application builds;",
          "stabilised original workflows;",
          "replaced unsupported scraping with provider APIs;",
          "strengthened local data safety and portable release behavior;",
          "completed the modern interface;",
          "completed packaging, public documentation, visual evidence, privacy/licensing review, and release proof."
        ],
        "code": []
      }
    ]
  },
  "student-work-archive": {
    "title": "Student Work Archive",
    "repoName": "student-work-archive",
    "github": "https://github.com/Codie-Shannon/student-work-archive",
    "syncedAt": "2026-08-12",
    "overview": [
      "Historical learning work by Codie Shannon, primarily from 2021–2023.",
      "This public consolidated repository separates historical student work from current professional projects. Individual entries may remain excluded from prominent portfolio featuring pending attribution, privacy, security, or licensing review.",
      "Each project entry is self-contained at the archive level: runnable projects preserve the sanitized fixed source used for verification, while report and design projects preserve their complete usable deliverables. Historical files excluded for privacy, security, licensing, or machine-specific reasons are identified in the entry's manifest and README."
    ],
    "sections": [
      {
        "heading": "Start here",
        "paragraphs": [
          "security policy before reusing or running historical material.",
          "for the curated public presentation."
        ],
        "bullets": [
          "Browse the 22-project archive index.",
          "Follow the exact reproduction requirements and commands.",
          "Review rights and licensing and the",
          "Read the archive's closed maintenance state.",
          "Visit the Student Projects portfolio"
        ],
        "code": []
      },
      {
        "heading": "Verified audit snapshot",
        "paragraphs": [
          "`portfolioFeatureReviewRequired` does not control GitHub visibility. It records whether an already archived project needs an additional review before it is featured on Codie's professional portfolio website.",
          "See the archive index, the reproduction index, the evidence checklist, visibility and feature recommendations, and rights and licensing.",
          "Machine-readable portfolio data is available at website-data/student-projects.json."
        ],
        "bullets": [
          "22 historical projects reviewed and packaged",
          "18 executable, interactive, database, notebook, or prototype projects exercised",
          "4 report or presentation projects rendered and reviewed",
          "191 meaningful evidence images preserved",
          "44 fresh audit documents: DOCX and PDF for every project",
          "14 entries require an additional portfolio-feature review",
          "No dependency folders, compiled installers, private keys, or live credentials included"
        ],
        "code": []
      }
    ]
  },
  "lifeos": {
    "title": "LifeOS",
    "repoName": "LifeOS",
    "github": "https://github.com/Codie-Shannon/LifeOS",
    "syncedAt": "2026-08-12",
    "overview": [
      "**A local-first personal and work operating system for turning work, money, projects, evidence, household activity, integrations, AI review and daily pressure into visible, reviewable state.**",
      "LifeOS is a safety-first platform built by Codie Shannon around purpose-built Desktop, Full Mobile, Mobile Companion and Website products. It is an operations system for controlled review, execution, provenance and evidence—not a generic task list or template.",
      "> **Current checkpoint:** LifeOS v28.0.0-alpha.2 is active through Group 128 with CV templates, refined A4 preview, ATS/readability review and safe PDF/DOCX export. The preserved v27/Group 120 release candidate remains historical evidence, not a promise that feature development has ended."
    ],
    "sections": [
      {
        "heading": "Product status",
        "paragraphs": [
          "| Product | Status | |---|---| | **LifeOS Desktop** | Current through Group 128, including CV templates, A4 review and derivative export | | **LifeOS Full Mobile** | Purpose-built Android application aligned through Group 128, including offline-safe capture, review and execution | | **LifeOS Mobile Companion** | Separate lightweight companion product; beta complete and closed | | **LifeOS Website** | Product, documentation, onboarding, factual portfolio and release-candidate evidence surface | | **Shared Core** | Authoritative contracts, deterministic validation, read models, provenance, audit, conflict and safety boundaries | | **Current release lane** | v28 Career Documents Studio; CV Builder and templates/export complete, cover letters next |",
          "Full Mobile and Mobile Companion are separate products. They can share contracts and libraries, but retain different scope, UX and release tracks."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "What LifeOS brings together",
        "paragraphs": [],
        "bullets": [
          "Command Centre pressure and priority visibility",
          "work records, sessions, billable time, projects, next actions and proof linkage",
          "money records, invoices, payments, financial review and reports",
          "document and evidence intake with original preservation",
          "agenda, daily state, household, grocery and shared-routine workflows",
          "relationship, communication and follow-up context",
          "Google and Microsoft provider foundations with review-first integration intake",
          "guarded provider contracts, explicit approval boundaries and audit",
          "native deterministic intelligence plus optional provider-backed AI review",
          "scheduled-communication proposals without silent or automatic sending",
          "Career Studio opportunity, application, materials and preparation flows",
          "documentation, packaging, validation and closed-beta readiness tooling"
        ],
        "code": [
          "Important information becomes visible state.",
          "State affects pressure.",
          "Pressure feeds review.",
          "Review controls action.",
          "Evidence preserves trust."
        ]
      },
      {
        "heading": "Desktop",
        "paragraphs": [
          "The deep administration surface for detailed review, filtering, reporting, audit, evidence and planning across Work, Career, Money, Life, Household, Projects, integrations, Assistant and Settings."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Full Mobile",
        "paragraphs": [
          "A separate .NET Android application—not a responsive copy of Desktop—for quick capture, review, execution, status and queued offline actions."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Mobile Companion",
        "paragraphs": [
          "A lighter product for local quick capture, pairing, delivery acknowledgement, notifications and review-first Desktop intake. It is not interchangeable with Full Mobile."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Website",
        "paragraphs": [
          "The product, documentation and evidence foundation. Website packaging, onboarding and the cross-product release-candidate gate are complete through Group 120."
        ],
        "bullets": [],
        "code": []
      },
      {
        "heading": "Current capability lanes",
        "paragraphs": [],
        "bullets": [
          "**Work and operating day:** work sessions, billable records, timesheet proof and operating-day review.",
          "**Money and documents:** trusted local financial records, preserved evidence, review-first extraction and derivative reporting/export.",
          "**Career Studio:** opportunity and application pipelines, evidence-backed materials, interview preparation and bounded analytics.",
          "**Household and Grocery:** inventory, meals, stores, recurring essentials, shared routines, receipt candidates and spending review.",
          "**Provider integrations:** normalized, source-backed candidates with explicit review, duplicate detection, conflict handling and provenance.",
          "**Guarded provider contracts:** permission, preview, confirmation, audit, cancellation and Emergency Stop boundaries; external writes remain disabled at the current checkpoint.",
          "**Native intelligence and optional AI:** deterministic local insights remain primary; external AI is optional, bounded and review-first.",
          "**Scheduled communications:** proposals, timing, readiness and audit are modeled without automatic sending or autonomous messaging.",
          "**Product readiness:** documentation and packaging hub, closed-beta baseline, release proof and validation tooling."
        ],
        "code": []
      },
      {
        "heading": "Safety model",
        "paragraphs": [
          "LifeOS is local-first, review-first and fail-closed."
        ],
        "bullets": [
          "Imported or generated information is not trusted automatically.",
          "Trust promotion and authoritative linking require explicit review.",
          "Conflicts preserve both versions until explicit resolution.",
          "Provider access is bounded; external writes remain disabled.",
          "No autonomous financial posting, payment initiation, career applications, messaging, grocery ordering or destructive evidence handling.",
          "Original documents and evidence are preserved; exports and previews are derivatives.",
          "Provenance, freshness, confidence and audit history remain visible where relevant.",
          "AI cannot silently mutate authoritative LifeOS state."
        ],
        "code": []
      },
      {
        "heading": "Evidence",
        "paragraphs": [
          "Official evidence is stored under `docs/screenshot-groups/`. The standard target is eight approved screenshots per screenshot group; a group may document a smaller genuine-capture override when the available product surfaces do not support eight distinct truthful views.",
          "Recent evidence:",
          "All public demonstrations must use fictional, sanitized or explicitly approved proof data."
        ],
        "bullets": [
          "Groups 121-124 - CV Builder Foundation",
          "Groups 117-120 - Product-Complete Release Candidate",
          "Groups 112-116 - Website Packaging and Onboarding",
          "Groups 108-111 - Privacy, Export, Backup and Controls",
          "Groups 104-107 - Evidence Automation and Proof Tooling",
          "Groups 99-103 - New Zealand Grocery Lookup Worker",
          "Groups 95-98 — Pay-Later and Money Integrations",
          "Groups 91-94 — Social and Messaging Integrations",
          "Groups 87-90 — Scheduled Communications",
          "Groups 83-86 — Native Intelligence and Optional AI",
          "Groups 80-82 — Closed Beta Baseline",
          "Groups 77-79 — Documentation and Packaging Hub"
        ],
        "code": []
      },
      {
        "heading": "Repository structure",
        "paragraphs": [],
        "bullets": [],
        "code": [
          "LifeOS.Desktop/       WPF desktop application",
          "LifeOS.Shared/        shared platform services and storage",
          "src/LifeOS.Core/      domain contracts, services and deterministic rules",
          "src/LifeOS.Mobile/    full Android mobile application",
          "src/LifeOS.Companion/ lightweight Android companion application",
          "src/LifeOS.Website/   public website and documentation surface",
          "tests/                Core, Mobile, Companion and Website regression tests",
          "docs/                 status, release notes, manual tests and screenshot evidence",
          "tools/                validation, packaging and evidence helpers",
          ".github/workflows/    continuous integration"
        ]
      }
    ]
  }
};
