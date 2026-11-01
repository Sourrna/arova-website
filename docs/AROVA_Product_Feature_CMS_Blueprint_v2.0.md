# AROVA Platform Evolution — Product & Engineering Master Specification v2.0

**Status:** Approved direction for implementation planning and phased execution  
**Project:** AROVA — Persian-first education, advisory and digital solutions platform  
**Existing project:** `C:\Users\Asus\arova`  
**Primary stack currently in use:** Astro + TypeScript  
**Primary language:** Persian (fa-IR), RTL-first  
**Important:** This document extends the existing project. It does not authorize a blind rewrite.

---

## 0. Executive directive

Transform AROVA from a mostly informational corporate website into a distinctive, premium, Persian-first **Digital Business & Education Platform**.

AROVA must serve three connected business arms:

1. **AROVA Education** — workshops, cohort-based programs, courses, organizational training and future learning products.
2. **AROVA Advisory** — consulting, technical assessment, AI/data strategy, digital transformation and expert-led advisory.
3. **AROVA Digital Solutions** — applied AI, software/product development, data solutions, simulation and digital-twin-related capabilities, limited to verified and deliverable services.

The public website is the acquisition, trust, education-discovery and conversion layer. A secure CMS/admin system is the operational content layer. A future LMS, payment system and CRM may be added as separate modules when there is a real operational need.

**Do not equate a successful build with a finished product.** Every feature needs a defined user outcome, a working implementation, acceptance criteria and evidence.

## 1. Non-negotiable product principles

- Persian-first: all public-facing core journeys, forms, navigation, CMS labels, validation messages and documentation must support Persian. Use `lang="fa"` and `dir="rtl"` correctly.
- Correct mixed-script rendering: Persian and English technical terms, numbers, dates, currencies, email addresses and URLs must remain legible. Use logical CSS properties and isolate LTR fragments where needed.
- Original AROVA identity: do not copy AIOLEARN, TIHE or international reference sites. Learn from their information architecture and interaction patterns, then create a distinct AROVA visual language.
- Premium editorial × technical precision × restrained futurism. Obsidian, graphite, burgundy, wine, ivory and silver remain the starting palette; refine with contrast-tested semantic tokens. Violet may be a restrained accent only.
- No generic AI-generated SaaS appearance: avoid default centered hero + purple gradient + random blobs, excessive glassmorphism, neon, gratuitous 3D, emoji icons and template-like card grids.
- Performance and accessibility are product requirements, not final polish.
- No fake metrics, testimonials, client logos, certifications, integrations, course ratings, student counts, outcomes or project claims.
- Do not publish unverified biography or project claims. Founder/expert credentials and case studies require source material and approval.
- Do not expose secrets or put privileged API keys in browser code.
- Do not deploy, publish, purchase services, create paid subscriptions, or make irreversible infrastructure changes without explicit user approval.
- Preserve the current Astro project and all working code. Use incremental migration, not a rewrite.

## 2. Reference research and what to learn

### Iranian references

**AIOLEARN (https://aiolearn.com/)** — inspect course discovery, topic-based schools, free/in-person/online learning formats, course cards, learning paths, instructor context and consultation entry points.

**TIHE (https://tihe.ac.ir/)** — inspect online, organizational and video courses, instructor-led course details, account/cart patterns, articles and course commerce structure.

Extract useful feature patterns and information architecture. Do not copy their visual identity, text, code or exact layouts. Do not assume every visible feature is operational without testing.

### International reference patterns

- **Coursera:** course catalog taxonomy, course detail hierarchy, learning pathways and learner journey.
- **Maven:** cohort-based course presentation, instructor positioning, cohort dates, outcomes and enrollment conversion.
- **Linear:** interaction quality, navigation precision, spacing, hierarchy, keyboard behavior and restrained motion.
- **IDEO:** consulting storytelling, problem framing, process explanation and case-study narrative.
- Also research a small number of relevant premium consulting, university/education and digital-product studios. Prefer current, inspectable references over trend lists.

Create a `docs/REFERENCE_ANALYSIS.md` containing:
- URL and date inspected
- observed feature/pattern
- user problem it solves
- what AROVA should adapt
- what AROVA should deliberately not copy
- evidence/limitations

## 3. Product and information architecture

Build the public platform around these areas.

### 3.1 Main public navigation

- خانه
- آموزش
  - کارگاه‌ها
  - دوره‌ها
  - آموزش سازمانی
  - مسیرهای یادگیری
- مشاوره
  - مشاوره هوش مصنوعی و داده
  - ارزیابی و طراحی راهکار
  - تحول دیجیتال و راهبرد فناوری
- راهکارهای دیجیتال
  - هوش مصنوعی کاربردی و اتوماسیون
  - توسعه محصول و نرم‌افزار
  - داده، شبیه‌سازی و دوقلوی دیجیتال (only where supported by verified capability)
- پروژه‌ها / مطالعات موردی
- متخصصان
- دانش‌نامه
- درباره آرووا
- تماس / درخواست همکاری

Navigation labels and exact route names may be refined for Persian clarity, but all sections must have a coherent discoverable path. Do not create empty routes merely to inflate page count.

### 3.2 Home page

Create a high-impact editorial homepage with:
- distinct brand hero and concise value proposition
- primary CTA: explore programs / request consultation (choose based on user journey)
- secondary CTA: explore capabilities
- three business-arm introduction
- featured programs/workshops
- selected services
- selected verified case studies/projects
- founder/expert introduction
- proof and trust section using only verified evidence
- editorial/knowledge highlights
- final conversion section
- thoughtful footer with contact and legal links

Do not cram every feature onto the homepage. Use hierarchy and purposeful pacing.

### 3.3 Education platform

Implement:
- education landing page
- course/program catalog
- filters: subject, format, level, audience, availability/status
- search and sort
- course/program detail pages
- workshop detail pages
- cohort-based program detail pages
- organizational training page and inquiry form
- learning-path pages
- course metadata: title, summary, learning outcomes, audience, prerequisites, level, format, duration/session count, instructor, syllabus, delivery method, dates/cohort, availability, CTA, FAQs and related content
- course statuses: draft, upcoming, enrollment open, full, in progress, completed, archived
- optional free/paid label only when the business model is configured
- no fabricated price, dates, ratings, capacity or enrollment counts

The MVP may collect an enrollment/interest request without providing video lessons or a learner account. Label this honestly. Do not call a lead form an LMS.

### 3.4 Advisory and digital solutions

Implement:
- service catalog and detail pages
- service categories and audience fit
- problem → approach → deliverables → engagement model → prerequisites → CTA structure
- consultation request wizard with progressive disclosure
- project/case-study catalog and detail pages
- case-study taxonomy by industry, capability and technology
- project status and publication approval
- evidence fields for claims, outcomes and metrics
- no invented client names, confidential work, quantified impact or logos

### 3.5 Experts

Implement:
- expert directory
- individual profiles
- expertise taxonomy
- verified biography, education, publications, selected projects and teaching areas
- profile-to-course/service/project relationships
- separate public-approved and internal-only fields

### 3.6 Knowledge Hub

Implement:
- articles, guides, insights, announcements and resources
- categories, tags, author, publication/update dates, reading time and related content
- search and filters
- SEO metadata and social sharing
- editorial workflow
- Persian-first publishing; allow English content later without breaking RTL/LTR rendering

### 3.7 Conversion and contact journeys

Implement real, transparent journeys:
- general contact
- consultation request
- organizational training inquiry
- course interest/enrollment inquiry
- project/solution inquiry
- newsletter only if a real provider and consent process are configured

Each form must have validation, accessible error messages, submission state, anti-spam protection appropriate to the chosen backend, consent/legal copy, and a real persistence/delivery path. Never show success if the request was not stored or delivered. `mailto:` is a fallback, not the primary lead-management architecture.

## 4. Full CMS: AROVA Studio

The user requires a comprehensive CMS with broad customization of the public site. Build **AROVA Studio** as the branded administration experience.

### 4.1 Recommended architecture

Evaluate and implement a self-hostable, SQL-backed headless CMS. Preferred first candidate: **Directus + PostgreSQL**, connected to the existing Astro frontend. Directus offers data modeling, APIs, granular permissions, extensions and an Astro integration path.

Before implementation, verify current Directus license/edition constraints, extension compatibility, deployment requirements, security practices and total operating cost. Compare against Strapi 5 only if a material advantage appears. Document the decision in `docs/ARCHITECTURE_DECISIONS.md`.

Important distinction:
- Directus may provide the content/data engine and much of the admin foundation.
- AROVA Studio must provide AROVA-specific navigation, dashboards, editorial workflows, custom modules and branded experience.
- Do not claim every pixel of the third-party admin is custom if it is not. If the requirement truly demands a fully bespoke admin UI, build a dedicated AROVA admin frontend over the CMS APIs and explain the extra maintenance cost.
- Do not introduce a hosted dependency or paid plan without approval.
- Local development must be reproducible. Use Docker Compose for local PostgreSQL/CMS if appropriate, with clear Windows instructions. Production hosting is a separate decision.

### 4.2 CMS modules

Required content modules:
1. Dashboard
2. Pages and flexible page builder
3. Global site settings
4. Navigation and footer manager
5. Reusable sections/blocks
6. Courses and programs
7. Workshops and cohorts
8. Learning paths
9. Instructors/experts
10. Services
11. Projects and case studies
12. Articles and knowledge resources
13. Categories and tags
14. Media library
15. Contact/consultation leads
16. Enrollment and organizational training inquiries
17. FAQs
18. Testimonials only if verified and consented
19. SEO and redirects
20. Forms and form configuration
21. Users, roles and permissions
22. Publishing workflow and revision history
23. Audit log
24. Theme and design settings
25. Integration/configuration status

### 4.3 Flexible page builder

Build a controlled, schema-driven page builder from reusable sections, not arbitrary unvalidated HTML.

Initial block library:
- hero (editorial, split, image-led, minimal)
- rich text
- image/media with caption
- feature grid
- course/program collection
- service collection
- expert collection
- case-study collection
- statistics (only verified values)
- quote/testimonial (approved only)
- CTA band
- FAQ accordion
- logo/partner strip (approved marks only)
- timeline/process
- comparison table
- video embed with privacy-conscious loading
- downloadable resource
- contact/inquiry form
- related content
- custom HTML only for trusted super-admins, sanitized and disabled by default

Allow editors to:
- add, remove, reorder and duplicate sections
- choose layout variants and alignment
- edit content and media
- control visibility and section background from approved tokens
- preview desktop/tablet/mobile
- save drafts and publish
- schedule publication if supported
- revert to prior revisions

The public frontend must render blocks consistently and safely. Unknown block types must fail gracefully and be reported.

### 4.4 CMS customization

Provide:
- AROVA logo/brand application once approved
- Persian UI labels where supported; if a dependency has incomplete Persian localization, document it and localize custom modules
- dashboard widgets relevant to AROVA
- custom navigation and module organization
- custom fields and relationships
- custom workflows
- role-specific dashboards
- theme settings constrained to the approved design system
- extension points documented for future development

### 4.5 Roles and permissions

Minimum roles:
- Owner / Super Admin
- Administrator
- Managing Editor
- Education Manager
- Advisory/Services Manager
- Author
- Reviewer
- Lead/Operations Manager
- Read-only Analyst

Implement least privilege. Protect founder-only settings, credentials, integrations and sensitive lead data. Define field-level and collection-level access where available.

### 4.6 Editorial workflow

Required lifecycle:
`Draft → In Review → Approved → Scheduled (optional) → Published → Archived`

Support:
- revision history
- author/editor attribution
- review notes
- publish permissions
- preview links protected from public indexing
- rollback
- content expiry/archive
- clear audit trail for important changes

## 5. Visual identity and logo — not yet approved

**AROVA does not have a final approved logo.** Existing temporary SVG assets, if any, must be treated as provisional until the founders approve a final identity.

Create a logo design exploration, not a random generated icon:
- explore at least 3 genuinely distinct directions
- direction A: The Convergence — two paths meeting / knowledge to implementation
- direction B: The Knowledge System — structured A monogram
- direction C: The Editorial Mark — distinctive wordmark-led identity
- assess Persian and Latin wordmarks together
- test at favicon, mobile header, desktop header, monochrome, light/dark and print sizes
- ensure vector geometry, legibility and originality
- avoid generic AI nodes, brain icons, glowing circuits and stock marks
- prepare SVG masters and usage variants only after selecting a direction
- create a logo comparison board and concise rationale
- do not declare a logo final or replace all assets until founders approve a direction

Brand direction:
- Premium Editorial × Technical Precision × Restrained Futurism
- starting palette: Obsidian `#141414`, Graphite `#202124`, Burgundy `#5B1E2D`, Wine `#35131D`, Ivory `#F2EFE9`, Silver `#BFC1C5`, Muted Gray `#92949A`
- violet only as a restrained accent if it improves the system
- Persian typography must be carefully selected, legible, performant and correctly licensed
- define a full token system: primitive → semantic → component
- define typography scale, spacing, grid, radii, shadows, borders, focus rings, breakpoints and motion tokens
- define component states: default, hover, focus, active, disabled, loading, success and error

Tagline direction: «از دانستن تا ساختن.»  
Supporting statement: «دانش را به تصمیم و فناوری را به راهکار تبدیل می‌کنیم.»

## 6. UX, motion and interaction quality

Create a coherent, bespoke interface. Required:
- responsive desktop/tablet/mobile compositions
- premium navigation with accessible mobile behavior
- mega-menu only where it improves discoverability
- breadcrumbs on deep routes
- meaningful page transitions where technically appropriate
- carefully choreographed scroll reveals, never hiding essential content
- subtle hover/focus feedback
- purposeful micro-interactions
- skeleton/loading states where data loading exists
- empty, error, success and offline states
- accessible dialogs, drawers, accordions, tabs and filters
- keyboard navigation and visible focus
- `prefers-reduced-motion` support
- no scroll hijacking, excessive parallax or motion that harms reading
- preserve fast first paint and avoid unnecessary client-side JavaScript

Use Motion One/GSAP/CSS only after evaluating actual need, bundle size, licensing and Astro compatibility. Prefer CSS for simple transitions. Do not install several overlapping animation libraries.

## 7. Tooling and agent skills

Inspect Kilo's actual runtime, supported skill format, MCP support, Node version, package manager and workspace policy before installing anything. Do not assume Claude Code-specific install commands work in Kilo.

Evaluate these public repositories and install only compatible, useful skills:
- UI UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Anthropic Agent Skills / frontend-design: https://github.com/anthropics/skills
- Impeccable: https://github.com/pbakaus/impeccable
- Emil Kowalski Skills: https://github.com/emilkowalski/skills
- Vercel Agent Skills: https://github.com/vercel-labs/agent-skills
- Playwright MCP: https://github.com/microsoft/playwright
- Figma Context MCP (only if Figma is actually used): https://github.com/GLips/Figma-Context-MCP

Use these as candidates, not as an instruction to blindly install every repository.

For each skill/tool:
- inspect source, README, license, install method, compatibility and maintenance
- inspect scripts and dependencies before execution
- avoid `curl | sh`, opaque installers, unreviewed binary downloads and privilege escalation
- pin versions where practical
- record exact installation location and version
- document why it is used and how to update/remove it
- do not install duplicate skills that conflict
- do not send source code, project secrets or user data to external services

Required capabilities:
- UI/UX design intelligence
- frontend design and design-system governance
- accessibility review
- motion/interaction craft
- browser automation and rendered visual QA
- screenshot capture at desktop and mobile sizes
- visual regression where practical
- logo/vector design workflow
- performance and bundle analysis
- security and dependency auditing

**Browser QA:** use Playwright or compatible browser automation. The Playwright MCP is a candidate; verify Kilo support and configure only if compatible. If MCP cannot be connected, install Playwright as a project dev dependency and create deterministic browser tests. Do not claim visual QA based only on source-code inspection.

Create:
- `docs/TOOLS_AND_SKILLS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/REFERENCE_ANALYSIS.md`
- `docs/ARCHITECTURE_DECISIONS.md`

## 8. Technical architecture and migration

Current frontend: Astro + TypeScript. Preserve it unless a documented, compelling technical reason requires change.

Target architecture:
- Astro public frontend, primarily server/static rendered as appropriate
- TypeScript strict
- Directus + PostgreSQL candidate for content/admin backend
- schema-driven content models and typed API client
- secure server-side environment variables
- image optimization and responsive media
- caching and invalidation strategy
- preview mode protected from indexing
- form submission endpoint/API with server-side validation and spam controls
- structured logging and backup/restore instructions
- environment separation: local, staging, production
- migration and seed strategy
- API error and fallback behavior
- CI checks for type, lint, tests, build and accessibility smoke tests

Do not add a database or CMS to the public frontend bundle. Never expose admin tokens or database credentials.

### Hosting and cost constraints

No hosting provider, production database, domain or paid subscription is pre-approved. Build a local reproducible setup first. Provide low-cost deployment options and a monthly cost estimate only after verifying current prices. Do not deploy or create paid resources without approval.

## 9. Security, privacy and compliance

- secure admin authentication
- strong password/session practices and MFA if supported
- least-privilege roles
- server-side validation
- CSRF protections where applicable
- rate limiting and anti-spam for forms
- safe media upload validation
- content sanitization and safe rich text rendering
- dependency and secret scanning
- secure headers and CSP appropriate to actual integrations
- no public exposure of leads, drafts or private expert data
- privacy notice aligned with actual data collection and retention
- explicit consent for newsletter/marketing
- data export and deletion process for personal data
- backups and restore test
- audit trail for sensitive administrative actions

Do not claim legal compliance without a qualified review.

## 10. Search, SEO, analytics and discovery

- correct Persian metadata and canonical URLs
- Open Graph and social cards
- sitemap generated from actual published content
- robots rules
- redirects management
- structured data only when accurate
- breadcrumbs and internal linking
- content search with Persian normalization
- handle Arabic/Persian character variants (`ي/ی`, `ك/ک`), half-spaces, diacritics and common spacing differences in search
- pagination and filter URLs that do not create duplicate-indexing problems
- analytics only after selecting a privacy-appropriate provider and obtaining required consent
- no fake analytics dashboards or invented traffic figures

## 11. Feature roadmap and release boundaries

### Release A — Foundation and brand experience
- inspect existing code and create baseline
- reference analysis
- design direction and logo exploration
- design tokens and component system
- homepage, navigation, footer and responsive foundations
- real browser visual QA

### Release B — Public business platform
- education catalog and detail pages
- service catalog and detail pages
- experts
- projects/case studies
- knowledge hub
- search, filters and related content
- conversion-focused forms

### Release C — CMS and operations
- PostgreSQL + CMS local environment
- AROVA Studio branded modules
- page builder and global settings
- all content collections and relations
- media management
- roles, permissions, editorial workflow and revisions
- frontend CMS integration and preview
- backup/restore documentation

### Release D — Validation and launch readiness
- browser tests across key routes
- desktop 1440px, tablet 768px and mobile 390px screenshots
- accessibility audit
- performance audit
- security review
- content accuracy review
- build, typecheck, lint and tests
- deployment guide and cost options
- no deployment until explicit approval

### Future modules — only after operating model is ready
- full LMS: learner accounts, course progress, lessons, quizzes, assignments, certificates and instructor tools
- payment gateway and invoices
- cohort scheduling and session booking
- CRM pipeline and follow-up automation
- email automation and newsletter
- organizational client portal
- advanced analytics

Do not implement payment, LMS or CRM as fake UI. If not connected to a real backend/provider, label as future/not enabled.

## 12. Acceptance criteria

A feature is complete only if:
- its user problem and behavior are documented
- it is reachable through a sensible user journey
- it works on desktop and mobile
- it supports Persian RTL and mixed English text
- loading, empty, error and success states are handled
- it is keyboard accessible
- it has no broken links or dead controls
- data is real, editable and persisted where persistence is promised
- permissions are enforced server-side
- it has automated tests where appropriate
- rendered browser evidence exists for visual features
- documentation is updated

### Definition of Done

- no fake buttons, placeholder links or dead routes
- no invented content or metrics
- all public pages have correct SEO metadata
- all published CMS content renders correctly
- drafts are not publicly exposed
- admin endpoints are protected
- form submissions are genuinely stored/delivered
- backup/restore procedure documented
- TypeScript, lint, tests, accessibility smoke checks and production build pass
- screenshots and QA report included
- remaining limitations explicitly listed

## 13. Kilo execution protocol

1. Inspect `C:\Users\Asus\arova` and report the actual current structure, framework version, package manager, routes, dependencies, build scripts and existing changes.
2. Create a safe branch or backup before substantial changes. Never delete user work.
3. Read the existing implementation blueprint and project docs.
4. Produce a concise implementation gap analysis mapped to this specification.
5. Research and install compatible skills/tools with security review. Do not install everything blindly.
6. Create a task ledger with P0/P1/P2, dependencies, acceptance criteria and status.
7. Implement incrementally, phase by phase. Keep the app runnable.
8. For any external dependency, verify compatibility and license before adding it.
9. For the CMS, build and verify a local end-to-end proof first: admin login → create/edit/publish a page → Astro renders it → draft remains private.
10. Do not begin expensive or irreversible infrastructure work.
11. Run actual browser QA and capture screenshots; do not substitute source inspection.
12. Update all docs and report evidence.

Autonomy:
- Make routine engineering decisions without asking repeated questions.
- If a decision affects recurring cost, hosting, domain, paid services, public claims, logo final approval, payment processing, data retention or irreversible changes, stop and report options for approval.
- If credentials are missing, implement a safe local path and document the exact required secret names. Never invent credentials.
- If network/TLS fails, retry safely, use smaller operations and continue unrelated work. Never disable TLS verification.

## 14. Final report format

Provide:
- actual project path and branch
- architecture decision and why
- installed skills/tools with versions, licenses and locations
- reference analysis summary
- logo directions and approval status
- implemented features with evidence
- CMS modules and data models
- local startup commands for Windows
- environment variables required (names only; never values)
- TypeScript/lint/test/build results
- browser screenshots at 1440px, 768px and 390px
- accessibility/performance/security findings
- known limitations and external blockers
- estimated operational cost ranges with dated sources, if researched
- explicit confirmation that nothing was deployed

**Start by inspecting the current AROVA project. Do not restart it, do not produce only another plan, and do not claim completion without evidence.**
