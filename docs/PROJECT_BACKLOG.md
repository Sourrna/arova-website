# AROVA Project Backlog

## WP0 — Discovery & Tooling
- [ ] Verify upstream repos/licenses for requested skills
- [ ] Install compatible skills/tools (UI UX Pro Max, Anthropic Frontend Design, Impeccable, Emil Kowalski, Vercel web-design-guidelines, Taste, Playwright CLI, AwesomeDesign.md, img2threejs)
- [ ] Investigate AIOLEARN, TIHE, REA references
- [ ] Create skill inventory + unresolved references doc

## WP1 — Foundation (done)
- [x] Astro + TS project
- [x] Design tokens, global styles
- [x] Logo SVGs (provisional)
- [x] Core pages scaffold
- [x] Canonical/OG/Twitter meta
- [x] CMS PoC (Node+SQLite)

## WP2 — Home
- [ ] Editorial homepage rebuild per blueprint §3.2
- [ ] Hero, three business arms, featured programs, services, case studies (verified only), founder intro, proof, knowledge highlights, CTA, footer

## WP3 — About/Founders (mostly done)
- [x] About page sections
- [x] Founder profiles (draft placeholders)
- [ ] Wire to CMS (done for founders fetch)
- [ ] Evidence-based content pending founder approval

## WP4 — Education
- [x] Catalog + detail pages scaffold
- [ ] Filters, search, sort
- [ ] Workshop/cohort/learning path pages
- [ ] Honest enrollment interest form

## WP5 — Advisory
- [x] Advisory + detail pages scaffold
- [ ] Consultation request wizard
- [ ] Problem→approach→deliverables structure

## WP6 — Digital Solutions
- [x] Digital solutions + detail pages scaffold
- [ ] Case study catalog/detail
- [ ] Project inquiry form

## WP7 — Contact
- [x] Contact form (mailto fallback)
- [ ] Consultation wizard, org training inquiry, course interest, project inquiry

## WP8 — QA
- [ ] Playwright browser tests (desktop 1440, tablet 768, mobile 390)
- [ ] Accessibility audit
- [ ] Performance audit
- [ ] Screenshots in docs/qa

## WP9 — Docs
- [ ] REFERENCE_ANALYSIS.md
- [ ] ARCHITECTURE_DECISIONS.md
- [ ] DESIGN_SYSTEM.md
- [ ] TOOLS_AND_SKILLS.md

## Final Audit Status (2026-11-01)
- Build: 19 pages, 0 errors
- Type check: 77 errors (pre-existing, non-blocking)
- Screenshots: 26 files
- CMS: wired, publication workflow verified
- Overall completion: ~72%
- Report: docs/WEBSITE_COMPLETION_REPORT.md

## Git Readiness Proposal (pending approval)
- Git installed (2.55.0) but repo not initialized.
- .gitignore created covering node_modules, dist, .astro, .env, cms/*.db, cms/node_modules.
- Sensitive files identified: cms/arova.db (local data), .env (none present; only .env.example).
- Proposal: run 'git init' + initial commit only after explicit approval. No remotes configured.
- Founder credentials remain unpublished.
- Contact conversion via mailto fallback + phone/social placeholders (dead # links noted).
- Production URL pending.
- TypeScript: 0 errors. Build: 19 pages, 0 errors.

## Objective Defect Resolution (2026-11-01)
- Social links: removed dead # links (no verified URLs found)
- Experts route conflict: removed redundant [slug].astro (static pages cover both experts)
- CSS/RTL: no hardcoded directional properties found
- Image usage proposal: docs/IMAGE_USAGE_PROPOSAL.md
- TypeScript: 0 errors, Build: 19 pages 0 errors

## Founder Review Preparation (2026-11-01)
- docs/review/FOUNDER_REVIEW_PACKAGE.md created
- docs/review/WEBSITE_CONTENT_REVIEW.md created
- docs/review/LOCAL_REVIEW_GUIDE.md created
- Image usage proposal: docs/IMAGE_USAGE_PROPOSAL.md
- Git init proposal documented (pending approval)
