# Repository audit and remediation report

Audit date: 2026-08-12  
Owner: `Codie-Shannon`  
Scope: all 36 public repositories

## Outcome

Every public repository received exactly one disposition: 29 `SHOWCASE`, 4 `REPAIR`, 2 `HIDE`, and 1 `ARCHIVE`. The machine-readable record is [`repository-audit.json`](repository-audit.json).

The ten known broken-evidence repositories were repaired, validated, committed, and pushed. The common defect was diagnosed first in SyncBridgeLab: the screenshot script launched the compiled ASP.NET application from its output directory, so the content root did not contain `wwwroot`. Edge then saved a valid image of an HTTP 404 page and returned exit code zero.

The repair applied to all ten repositories:

1. Start the web application with the web project as its working directory.
2. Preflight every capture URL.
3. Require HTTP 2xx and a non-empty response body.
4. Reject obvious 404/not-found/browser-error content before launching the browser.
5. Regenerate screenshots and contact sheets, then run each full release verifier.

| Repository | Verification | Pushed commit |
| --- | ---: | --- |
| SyncBridgeLab | 16/16 | `9aa3d5e` |
| SecureTenantLab | 16/16 | `fd6af4c` |
| SearchRetrievalLab | 17/17 | `d923257` |
| RulesEngineLab | 17/17 | `2d03212` |
| QAForge | 21/21 | `7f3f00e` |
| OpsDiagnosticsLab | 16/16 | `d2891e4` |
| IntegrationGatewayLab | 16/16 | `74f956b` |
| EventStreamLab | 17/17 | `994d3e6` |
| DesktopGateway | 19/19 | `8aa1f43` |
| DebugForgeStudio | 18/18 | `76957ec` |

## Portfolio curation

The portfolio now uses fresh validated evidence from those ten repositories. Support Projects is an explicit allow-list instead of a public-repository mirror. It excludes:

- repositories already represented in Projects;
- the profile and portfolio repositories;
- FamilyArchive while it is under repair;
- the three Unity tools whose build/test validation passed but whose visual proof failed the portfolio gate;
- the weaker, redundant standalone Power BI dashboard;
- student work, which belongs only in Student Archive.

FamilyArchive was removed from active portfolio presentation. No changes were made inside that repository.

## Stop conditions and open repairs

### FamilyArchive

Audit work stopped because the local checkout contains unrelated changes. Current remote `main` also has failing test and lint workflows. Reconcile the local work and restore CI before re-auditing and re-approving it for the portfolio.

### MissionMarkerToolkit, TrafficSystemLite, and VehicleSetupWizard

All three import cleanly in Unity 2022.3 and pass 16/16 EditMode tests. Their current evidence is diagram-like proof rather than the tools operating on meaningful Unity content. They remain public but are classified `REPAIR` and are omitted from the portfolio until representative editor and Game-view captures exist.

### LifeOS local reproduction

The local machine has .NET SDK 9.0.316 and no Android workload, while LifeOS targets .NET 10 and Android. The current remote `main` commit `c1af56612a167175c5ad31499326dd0a4e527d6a` has a successful .NET workflow, so the repository remains `SHOWCASE`; local reproduction requires the documented newer toolchain.

## Other validation highlights

- All audited web and .NET proof applications with release verifiers passed their available builds, tests, API smoke checks, and evidence checks.
- `media-manager` passed x64 Debug/Release builds, stability testing, portable packaging, privacy scanning, manifest, archive, and checksum verification.
- `onboardingflow-laravel-proof` passed Composer, npm, PHPUnit (10 tests / 37 assertions), and 11 screenshot checks.
- `Tokyo-Nights-Racing` passed Unity 2022.3.62f1 import/compile validation and has strong playable Game-view evidence.
- `student-work-archive` passed validation for all 22 manifests and remains historical archive content only.

## Acceptance status

The inventory, exact dispositions, ten-repository repair, portfolio allow-list, refreshed portfolio evidence, validation results, and machine-readable audit are complete. Four repositories intentionally remain in `REPAIR`; their blockers are explicit above and no behavior-changing or destructive workaround was attempted.
