# AROVA Implementation Task Ledger

**Master spec:** docs/AROVA_Product_Feature_CMS_Blueprint_v2.0.md
**Mandatory extension:** docs/AROVA_About_Founders_Implementation_Addendum_v1.0.md
**Project:** C:\Users\Asus\arova
**Stack:** Astro + TypeScript, Persian (fa-IR) RTL-first

## Reconciliation notes
- Addendum extends (does not replace) master blueprint.
- Shared design tokens, routing conventions, content lifecycle (Draft→Review→Approved→Published→Archived), SEO/canonical pattern, and AROVA Studio CMS direction are the single system.
- About/Founders content must be editable via CMS models (Founder, About Page) per addendum §4; not a separate About system.
- No invented founder credentials, metrics, clients, testimonials. Use draft placeholders for missing facts.

## Phase 0 — Baseline (done)
- [x] Astro 7.4.4 + TS project initialized
- [x] Design tokens, global.css, utilities.css
- [x] Logo SVGs (provisional)
- [x] Core pages created (index, about, services, education, advisory, digital-solutions, experts, contact, privacy)
- [x] Content collections with status field
- [x] Canonical/OG/Twitter meta in BaseLayout (all pages pass canonical)
- [x] Production build passes (19 pages)

## Phase A — Foundation & Brand Experience (Release A)
- [ ] Reference analysis doc (docs/REFERENCE_ANALYSIS.md) — P1
- [ ] Architecture decisions doc (docs/ARCHITECTURE_DECISIONS.md) — P1
- [ ] Design system doc (docs/DESIGN_SYSTEM.md) — P1
- [ ] Tools/skills doc (docs/TOOLS_AND_SKILLS.md) — P2
- [ ] Homepage editorial rebuild — P1
- [ ] Navigation/footer refinement — P1
- [ ] Real browser visual QA screenshots — P1

## Phase B — Public Business Platform (Release B)
- [x] Education catalog/detail pages — baseline exists
- [x] Service catalog/detail pages — baseline exists
- [x] Experts directory + detail pages — baseline (needs content integrity fixes)
- [ ] Projects/case studies — not implemented
- [ ] Knowledge hub (articles) — partial
- [ ] Search/filters — not implemented
- [ ] Conversion forms (consultation, org training, course interest, project inquiry) — contact only

## Phase C — CMS & Operations (Release C)
- [ ] PostgreSQL + CMS local env (Directus candidate) — not started
- [ ] AROVA Studio branded modules — not started
- [ ] Page builder — not started
- [ ] Roles/permissions/workflow — not started
- [ ] Frontend CMS integration + preview — not started

## Phase D — Validation & Launch Readiness
- [ ] Browser tests across key routes — not started
- [ ] Screenshots 1440/768/390 — not started
- [ ] Accessibility audit — partial
- [ ] Security review — partial

## About & Founders (Addendum)
- [x] About page rebuilt per §3 (hero, story, founders, academic foundation, business execution, philosophy, why AROVA, CTA) — done 2026-11-01
- [x] Founder profiles cleaned: removed fabricated/mixed-language content; draft placeholders with CMS note — done 2026-11-01
- [ ] Founder CMS models documented — pending CMS phase
- [ ] Evidence/publication controls — pending CMS phase
- [x] CTAs link to real destinations (/education, /contact) — verified 2026-11-01

## Current blockers / content gaps
- No git repository (no version control baseline)
- No CMS backend yet (content in Astro collections / static)
- Founder CVs/source material not located in repo; claims must stay draft
- Expert pages contain mixed-language artifacts and unverified claims (sourena, dr-mohammad-hossein-roozbahani)
- About page contains mixed-language artifacts

## About & Founders — Verification (2026-11-01)
- Screenshots: docs/qa/screenshots/about-{1440,768,390}.png, experts-{sourena,roozbahani}-1440.png
- RTL/Persian: html lang=fa dir=rtl confirmed in rendered output
- SEO: canonical=https://arova.example.com/about, og:url, twitter:title/description present
- Founder profiles: structured with title, positioning, draft notice, activity areas, CMS-draft note. No degrees, employers, publications, metrics, or client claims rendered.
- CTAs: /education, /contact (all resolve to real routes)
- Expert pages: sourena and dr-mohammad-hossein-roozbahani render cleanly; no broken HTML; draft placeholders only.
- Build: 19 pages, 0 errors.

### Remaining blockers (About & Founders)
1. No CMS backend exists yet → About sections and founder profiles are hardcoded in .astro, NOT editable via AROVA Studio. Requires Release C (PostgreSQL + Directus) to implement Founder/About Page collections and wire frontend to API.
2. No draft/review/approval/publication workflow for About or experts (static pages). Status field exists only in Astro content collections (services/workshops/insights).
3. No real founder source material (CVs) in repo → all credential fields remain draft placeholders pending founder approval.
4. Footer social links are dead (#) — pre-existing, out of scope but noted.
5. Expert detail route conflict: both static files and [slug].astro exist (build warns). Consider consolidating to [slug].astro + content collection.

## CMS Foundation PoC (2026-11-01)
- Architecture: Local CMS in `cms/` using Node.js built-in http + better-sqlite3 (SQLite). Directus + PostgreSQL evaluated but blocked: no Docker or PostgreSQL installed locally; Directus npm install timed out/stalled after 5+ minutes (network/size). SQLite is a genuine, editable, persisted backend with REST API and admin UI — not a static abstraction.
- Files: cms/server.js, cms/admin.html, cms/seed.js, cms/package.json, cms/arova.db (generated)
- Schema: founders (full addendum §4 fields + status), pages, page_sections. Status lifecycle: draft/review/approved/published/archived enforced via status field.
- Endpoints: /api/health, /api/founders (public=published only), /api/founders?status= (auth), /api/founders/:id, /api/founders/slug/:slug, POST/PUT with X-CMS-Token, /api/pages, /api/pages/slug/:slug.
- Verified: public endpoint returns [] when all founders draft; after PUT status=published, public returns 1; reverted to draft. Drafts never exposed publicly (404 for non-published without token).
- Admin UI: http://localhost:4000/ (token-gated mutations).
- Astro integration: WIRED. About page fetches published founders from CMS at build time (PUBLIC_CMS_URL, default localhost:4000). Verified: published founder renders; all-draft shows empty state. Drafts never exposed publicly.

## Phase 2 — CMS Hardening (2026-11-01)
- Security audit: docs/qa/CMS_SECURITY_AUDIT.md. Findings: parameterized queries PASS; unauth writes 401; drafts hidden; missing input validation, security headers, generic error handling; single shared token auth.
- Data reliability: SQLite persists across restart; WAL mode; no migrations system yet; backup/restore documented in docs/operations/CMS_BACKUP_AND_RECOVERY.md.
- Publishing workflow: Draft/Review/Approved/Published/Archived status field exists; transitions enforced by client (no server-side state machine yet). Recommend adding transition validation.
- Astro integration: build-time fetch verified; empty vs failure distinguishable via try/catch (failure → empty list + no error thrown). Drafts never in public output.
- Architecture decision: docs/architecture/CMS_ARCHITECTURE_DECISION.md — keep Node+SQLite for now; defer Directus+Postgres.
- Build: 19 pages, 0 errors.

## Status legend
- [ ] not started  [~] in progress  [x] done  [!] blocked
Last updated: 2026-11-01
Build: 19 pages, 0 errors (astro build 2026-11-01)
