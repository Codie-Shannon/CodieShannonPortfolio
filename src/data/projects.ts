export type ProjectCategory = "Flagship" | "Business System" | "Engineering Lab" | "Developer Tool" | "Game / Unity";

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
}

export const projects: Project[] = [
  { slug:"lifeos", name:"LifeOS", eyebrow:"Flagship · .NET / WPF", summary:"A long-running personal operations platform spanning planning, workflows, information management, integrations, desktop tooling and mobile companion work.", category:"Flagship", stack:[".NET","WPF","C#","Automation"], github:"https://github.com/Codie-Shannon/LifeOS", status:"Active development", featured:true },
  { slug:"family-archive", name:"Family Archive", eyebrow:"Flagship · Production validation", summary:"Role-aware family media archive with integrity checks, duplicate review, cloud import, controlled originals access and large-scale photo handling.", category:"Flagship", stack:[".NET","Media","Integrity","Cloud"], github:"https://github.com/Codie-Shannon/FamilyArchive", status:"Production validation", featured:true },
  { slug:"operationsflow", name:"OperationsFlow", eyebrow:"Business System · Blazor", summary:"Operational records, corrective actions, documents, risk, training, reporting and data-quality workflows.", category:"Business System", stack:[".NET","Blazor","Operations","Reporting"], github:"https://github.com/Codie-Shannon/OperationsFlow", status:"Validated", featured:true },
  { slug:"clientportal", name:"ClientPortal", eyebrow:"Business System · Node / Vue", summary:"Client projects, requests, approvals, milestones, messages, document metadata, role-aware visibility and audit history.", category:"Business System", stack:["Node.js","Vue","TypeScript","Audit"], github:"https://github.com/Codie-Shannon/ClientPortal", status:"v1.0.0", featured:true },
  { slug:"media-manager", name:"Media Manager", eyebrow:"Desktop Application · .NET", summary:"A modernized rebuild of an earlier diploma application, preserving its history while replacing fragile integrations and improving reliability.", category:"Developer Tool", stack:[".NET","Desktop","API","Modernization"], github:"https://github.com/Codie-Shannon/media-manager", status:"v1.0.1", featured:true },
  { slug:"tokyo-nights-racing", name:"Tokyo Nights Racing", eyebrow:"Game / Unity", summary:"A Unity racing portfolio project demonstrating vehicle systems, environment work, traffic, race flow and game-facing tooling.", category:"Game / Unity", stack:["Unity","C#","Vehicle Systems","Game Dev"], github:"https://github.com/Codie-Shannon/Tokyo-Nights-Racing", status:"Portfolio release", featured:true },
  { slug:"debugforge", name:"DebugForge Studio", eyebrow:"Developer Tool · .NET", summary:"Log analysis, bug triage, reproduction workflows, comparison and evidence reporting for application diagnostics.", category:"Developer Tool", stack:[".NET","Diagnostics","Testing"], github:"https://github.com/Codie-Shannon/DebugForgeStudio", status:"v1.0.0" },
  { slug:"qaforge", name:"QAForge", eyebrow:"Developer Tool · .NET", summary:"Test planning, bug tracking, TestPilot guidance, readiness checks and deterministic release validation.", category:"Developer Tool", stack:[".NET","QA","Testing","Release"], github:"https://github.com/Codie-Shannon/QAForge", status:"v1.0.0" },
  { slug:"document-intelligence", name:"Document Intelligence Lab", eyebrow:"Engineering Lab · FastAPI", summary:"OCR-oriented intake, classification, extraction, confidence review, human approval, batching and export.", category:"Engineering Lab", stack:["Python","FastAPI","OCR","Human Review"], github:"https://github.com/Codie-Shannon/DocumentIntelligenceLab", status:"v1.0.0" },
  { slug:"desktop-gateway", name:"DesktopGateway", eyebrow:"Developer Tool · .NET", summary:"Wake-on-LAN, readiness, heartbeat, remote-session planning, transfer planning, power safety and audit evidence.", category:"Developer Tool", stack:[".NET","WoL","Moonlight","Automation"], github:"https://github.com/Codie-Shannon/DesktopGateway", status:"v1.0.0" },
  { slug:"secure-tenant", name:"SecureTenant Lab", eyebrow:"Engineering Lab · Security", summary:"Multi-tenant authorization, isolation and audit boundaries for ASP.NET Core systems.", category:"Engineering Lab", stack:[".NET","ASP.NET Core","Security","Audit"], github:"https://github.com/Codie-Shannon/SecureTenantLab", status:"Validated" },
  { slug:"syncbridge", name:"SyncBridge Lab", eyebrow:"Engineering Lab · Offline-first", summary:"Ordered outbox, idempotency, conflict resolution, recovery and audit for offline-first synchronization.", category:"Engineering Lab", stack:[".NET","Sync","Offline-first","Outbox"], github:"https://github.com/Codie-Shannon/SyncBridgeLab", status:"Validated" }
];

export const featuredProjects = projects.filter((project) => project.featured);
