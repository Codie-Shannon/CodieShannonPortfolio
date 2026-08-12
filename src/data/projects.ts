export type ProjectCategory =
  | "Flagship"
  | "Business System"
  | "Developer Tool"
  | "Engineering Lab"
  | "Game / Unity"
  | "Archive";

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  github: string;
  status: string;
  featured?: boolean;
  role?: string;
  proof?: string[];
  limitation?: string;
  visual?: "command" | "archive" | "ops" | "desktop" | "unity" | "portal" | "lab";
}

export const projects: Project[] = [
  {
    slug:"lifeos", name:"LifeOS", eyebrow:"Flagship · .NET / WPF",
    summary:"A local-first operating platform that turns work, money, follow-ups, projects, evidence and daily pressure into visible state across desktop and mobile surfaces.",
    category:"Flagship", stack:[".NET","WPF","C#","Mobile","Automation"], github:"https://github.com/Codie-Shannon/LifeOS",
    status:"Active flagship", featured:true, visual:"command",
    role:"Product architecture, desktop/mobile engineering, workflow design and release evidence.",
    proof:["Cross-module command-centre workflows","Desktop + mobile product surfaces","Versioned build/test/evidence process"],
    limitation:"Active product development; public portfolio material should describe verified current capability, not future roadmap items."
  },
  {
    slug:"family-archive", name:"Family Archive", eyebrow:"Flagship · Archive platform",
    summary:"A private family-media preservation platform built around integrity, role-aware access, duplicate review, derivative browsing and controlled archive workflows.",
    category:"Flagship", stack:["Laravel","PHP","Media","Integrity","Cloud"], github:"https://github.com/Codie-Shannon/FamilyArchive",
    status:"Portfolio-ready", featured:true, visual:"archive",
    role:"Archive architecture, preservation rules, access control, intake/review workflows and production validation.",
    proof:["Original-preservation boundaries","Role-aware archive workflows","Large-scale family media handling"],
    limitation:"Public proof must use synthetic or sanitized content; private family media never belongs in the public portfolio."
  },
  {
    slug:"operationsflow", name:"OperationsFlow", eyebrow:"Business System · Blazor",
    summary:"Operational records, corrective actions, documents, risk, training, reporting and data-quality workflows in one business-facing system.",
    category:"Business System", stack:[".NET","Blazor","Operations","Reporting"], github:"https://github.com/Codie-Shannon/OperationsFlow",
    status:"Validated", featured:true, visual:"ops",
    role:"End-to-end business workflow design and .NET/Blazor implementation.",
    proof:["Operational workflow coverage","Reporting and evidence surfaces","Business-system information architecture"]
  },
  {
    slug:"media-manager", name:"Media Manager", eyebrow:"Desktop Application · .NET",
    summary:"A restored and modernized desktop media application that preserves the history of an earlier diploma build while replacing brittle integrations and improving reliability.",
    category:"Developer Tool", stack:[".NET","Desktop","API","Modernization"], github:"https://github.com/Codie-Shannon/media-manager",
    status:"v1.0.1", featured:true, visual:"desktop",
    role:"Legacy recovery, integration replacement, desktop engineering and portfolio restoration.",
    proof:["Recovered legacy application path","Modern provider/API boundary","Portable demo and release packaging"]
  },
  {
    slug:"tokyo-nights-racing", name:"Tokyo Nights Racing", eyebrow:"Game / Unity",
    summary:"A Unity racing portfolio project covering environment work, race flow, traffic, vehicle-facing systems and practical game-development tooling.",
    category:"Game / Unity", stack:["Unity","C#","Vehicle Systems","Game Dev"], github:"https://github.com/Codie-Shannon/Tokyo-Nights-Racing",
    status:"Portfolio release", featured:true, visual:"unity",
    role:"Unity implementation, world/race systems and debugging/performance work.",
    proof:["Playable racing flow","Vehicle and traffic systems","Environment and tooling work"]
  },
  {
    slug:"clientportal", name:"ClientPortal", eyebrow:"Business System · Node / Vue",
    summary:"Client projects, requests, approvals, milestones, messages, document metadata, role-aware visibility and audit history.",
    category:"Business System", stack:["Node.js","Vue","TypeScript","Audit"], github:"https://github.com/Codie-Shannon/ClientPortal",
    status:"v1.0.0", featured:true, visual:"portal",
    role:"Full-stack business workflow proof.",
    proof:["Role-aware client workflow","Auditable request and milestone history","TypeScript web architecture"]
  },
  {
    slug:"debugforge", name:"DebugForge Studio", eyebrow:"Developer Tool · Diagnostics",
    summary:"Log analysis, bug triage, reproduction workflows, comparison and evidence reporting for application diagnostics.",
    category:"Developer Tool", stack:[".NET","Diagnostics","Testing"], github:"https://github.com/Codie-Shannon/DebugForgeStudio",
    status:"v1.0.0", visual:"lab"
  },
  {
    slug:"qaforge", name:"QAForge", eyebrow:"Developer Tool · QA",
    summary:"Test planning, bug tracking, TestPilot guidance, readiness checks and deterministic release validation.",
    category:"Developer Tool", stack:[".NET","QA","Testing","Release"], github:"https://github.com/Codie-Shannon/QAForge",
    status:"v1.0.0", visual:"lab"
  },
  {
    slug:"document-intelligence", name:"Document Intelligence Lab", eyebrow:"Engineering Lab · FastAPI",
    summary:"OCR-oriented intake, classification, extraction, confidence review, human approval, batching and export.",
    category:"Engineering Lab", stack:["Python","FastAPI","OCR","Human Review"], github:"https://github.com/Codie-Shannon/DocumentIntelligenceLab",
    status:"v1.0.0", visual:"lab"
  },
  {
    slug:"desktop-gateway", name:"DesktopGateway", eyebrow:"Developer Tool · Remote systems",
    summary:"Wake-on-LAN, readiness, heartbeat, remote-session planning, transfer planning, power safety and audit evidence.",
    category:"Developer Tool", stack:[".NET","WoL","Moonlight","Automation"], github:"https://github.com/Codie-Shannon/DesktopGateway",
    status:"v1.0.0", visual:"lab"
  },
  {
    slug:"secure-tenant", name:"SecureTenant Lab", eyebrow:"Engineering Lab · Security",
    summary:"Multi-tenant authorization, isolation and audit boundaries for ASP.NET Core systems.",
    category:"Engineering Lab", stack:[".NET","ASP.NET Core","Security","Audit"], github:"https://github.com/Codie-Shannon/SecureTenantLab",
    status:"Validated", visual:"lab"
  },
  {
    slug:"syncbridge", name:"SyncBridge Lab", eyebrow:"Engineering Lab · Offline-first",
    summary:"Ordered outbox, idempotency, conflict resolution, recovery and audit for offline-first synchronization.",
    category:"Engineering Lab", stack:[".NET","Sync","Offline-first","Outbox"], github:"https://github.com/Codie-Shannon/SyncBridgeLab",
    status:"Validated", visual:"lab"
  }
];

export const featuredProjects = projects.filter(project => project.featured);
