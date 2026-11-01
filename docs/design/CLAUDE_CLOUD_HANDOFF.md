# Claude Cloud Handoff — AROVA

## Architecture
Astro 7.4.4 + TypeScript 5.9.3, Persian (fa-IR) RTL-first static site.
Local CMS: Node.js + better-sqlite3 (cms/), port 4000.
Content: Astro content collections (src/content/) + CMS.

## Install/Build
```
npm install
npm run dev          # port 4321
npm run build        # 19 pages
npm run check        # TS check
cd cms && node server.js  # CMS port 4000
```

## Routes
/, /about, /education, /advisory, /digital-solutions, /contact, /experts, /services (+ detail pages)

## Key Directories
- src/pages/ — routes
- src/components/ — UI components
- src/layouts/BaseLayout.astro — SEO, meta
- src/styles/ — tokens, global
- src/data/ — brand, experts, navigation
- src/content/ — content collections
- cms/ — local CMS (server.js, admin.html, seed.js)
- docs/ — all documentation

## Brand Documentation
- docs/BRAND_GUIDELINES.md
- docs/AROVA_Product_Feature_CMS_Blueprint_v2.0.md
- docs/AROVA_About_Founders_Implementation_Addendum_v1.0.md
- brand-assets/founders/ — founder skills portfolio

## Visual Direction
Premium Editorial × Technical Precision × Restrained Futurism
Palette: #141414, #202124, #5B1E2D, #35131D, #F2EFE9, #BFC1C5, #92949A

## Scope Restrictions (for Claude)
- Frontend UI/UX only
- Backend and CMS must remain unchanged
- No deployment or merging without approval
- No payment/LMS/checkout
- No fake credentials/testimonials/stats
- Founder credentials require approval

## Known Limitations
- No git history (repo just initialized)
- Founder content is draft placeholder
- Contact form uses mailto fallback
- No automated test suite
- Social links removed (no verified URLs)
- Playwright browser download geo-blocked (msedge channel used)
