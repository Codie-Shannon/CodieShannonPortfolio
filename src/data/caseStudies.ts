export interface CaseStudy {
  slug: string;
  projectSlug: string;
  label: string;
  title: string;
  problem: string;
  constraints: string[];
  approach: string[];
  proof: string[];
  limitations: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "lifeos",
    projectSlug: "lifeos",
    label: "01 / FLAGSHIP PLATFORM",
    title: "LifeOS",
    problem: "Important work, money pressure, follow-ups, projects and evidence can exist across too many disconnected places. LifeOS is built to turn that pressure into visible operational state rather than another flat task list.",
    constraints: [
      "The useful product has to work as a system, not as a collection of disconnected pages.",
      "External integrations and AI cannot silently own or mutate core state.",
      "Public portfolio claims must describe verified current capability rather than future roadmap items."
    ],
    approach: [
      "Use a shared domain model across desktop and mobile surfaces.",
      "Treat follow-up, evidence, work, money and pressure as connected state.",
      "Use review-first integration boundaries and explicit release evidence.",
      "Advance through bounded build groups with build, test, screenshot, documentation and repository closure gates."
    ],
    proof: [
      "Desktop and mobile product surfaces.",
      "Cross-module command-centre workflows.",
      "Versioned implementation, regression and screenshot evidence.",
      "Public product documentation and release packaging."
    ],
    limitations: [
      "LifeOS remains an active flagship product; future roadmap capabilities are not presented as already shipped.",
      "External-provider behavior depends on provider/API availability and permission boundaries."
    ]
  },
  {
    slug: "family-archive",
    projectSlug: "family-archive",
    label: "02 / PRESERVATION PLATFORM",
    title: "Family Archive",
    problem: "A serious family archive has to preserve original media, source context and decisions over time while still making approved content easy to browse and contribute to.",
    constraints: [
      "Originals must never be silently overwritten or replaced.",
      "Duplicate and restoration decisions require human review.",
      "Private family information and original storage details cannot leak into public proof."
    ],
    approach: [
      "Separate preservation facts from editable descriptive metadata.",
      "Use immutable hashes, lineage and derivative records around accepted media.",
      "Apply role-aware browsing, contribution, review and administration boundaries.",
      "Use synthetic or sanitized public evidence while keeping the real archive private."
    ],
    proof: [
      "Controlled intake and duplicate-review workflows.",
      "Derivative-only archive browsing.",
      "Role-aware access and metadata history.",
      "Production-scale family media handling and validation."
    ],
    limitations: [
      "Public portfolio material intentionally omits real private family data.",
      "Public screenshots must remain synthetic, sanitized or otherwise explicitly safe."
    ]
  },
  {
    slug: "operationsflow",
    projectSlug: "operationsflow",
    label: "03 / BUSINESS SYSTEM",
    title: "OperationsFlow",
    problem: "Operational records, actions, risk, training, documents and reporting lose value when they live as isolated registers. OperationsFlow models those areas as one connected operational system.",
    constraints: [
      "The system has to remain understandable to business users.",
      "Evidence and status need to remain traceable across workflow changes.",
      "The portfolio version must not expose client-specific information."
    ],
    approach: [
      "Model operational records and corrective actions as linked workflow state.",
      "Connect risk, training, document and reporting surfaces instead of duplicating data.",
      "Prioritize clear status, filtering, auditability and human review.",
      "Package the project as a business-system proof rather than a generic dashboard."
    ],
    proof: [
      "Blazor/.NET application architecture.",
      "Risk, action, training, document and reporting surfaces.",
      "Operational workflow and data-quality evidence."
    ],
    limitations: [
      "Public proof uses safe demonstration data.",
      "Client-specific variants or discovery material are kept separate unless explicitly approved."
    ]
  },
  {
    slug: "media-manager",
    projectSlug: "media-manager",
    label: "04 / RESTORATION + MODERNIZATION",
    title: "Media Manager",
    problem: "An early desktop application had historical value but brittle dependencies and integration paths. The goal was to recover the original work, make it run again and modernize it without erasing its origin story.",
    constraints: [
      "The recovered original needed to be preserved before redesign.",
      "Direct IMDb scraping needed to be replaced with a supported provider boundary.",
      "Personal media and API credentials could not appear in public artifacts."
    ],
    approach: [
      "Recover and stabilize the original controls/application path first.",
      "Verify existing workflows before changing presentation.",
      "Introduce provider-neutral metadata integration with offline/manual fallback.",
      "Perform the modern UI redesign after functionality and history were secured."
    ],
    proof: [
      "Restored application path and before/after evidence.",
      "Modern provider/API abstraction.",
      "Portable release packaging and desktop workflow validation."
    ],
    limitations: [
      "Metadata availability depends on supported providers.",
      "Public evidence excludes private media libraries and credentials."
    ]
  },
  {
    slug: "tokyo-nights-racing",
    projectSlug: "tokyo-nights-racing",
    label: "05 / UNITY SYSTEMS",
    title: "Tokyo Nights Racing",
    problem: "A racing portfolio project needed to prove more than a scene: it had to connect race flow, vehicles, environment, traffic and playable interaction into a coherent game-development proof.",
    constraints: [
      "Performance had to remain usable while environment and traffic systems expanded.",
      "Different vehicle and race flows needed predictable behavior.",
      "Portfolio evidence had to show actual gameplay rather than only editor work."
    ],
    approach: [
      "Build a compact world with freeroam and race routes.",
      "Develop race, garage, settings and vehicle-facing systems incrementally.",
      "Test traffic and performance under increasing load.",
      "Capture gameplay and interface evidence as the project reached portfolio closure."
    ],
    proof: [
      "Playable race/freeroam flow.",
      "Vehicle, traffic and settings systems.",
      "Gameplay screenshots and portfolio montage."
    ],
    limitations: [
      "This is a portfolio game-development proof, not a commercial content release.",
      "Third-party asset licensing remains separate from original code/system proof."
    ]
  }
];
