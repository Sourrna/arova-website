# Local Review Guide

## Start Website
```
npm install
npm run dev
```
Open http://localhost:4321

## Start CMS (optional, for founder content review)
```
cd cms
node server.js
```
CMS admin: http://localhost:4000/ (token: dev-token-change-me)

## Route URLs
- http://localhost:4321/
- http://localhost:4321/about
- http://localhost:4321/education
- http://localhost:4321/advisory
- http://localhost:4321/digital-solutions
- http://localhost:4321/contact
- http://localhost:4321/experts
- http://localhost:4321/services

## Screenshots
docs/qa/screenshots/ (26 files, 1440/768/390)
Index: docs/VISUAL_REVIEW_INDEX.md

## CMS Founder Content Review
1. Start CMS server
2. Open http://localhost:4000/
3. Use token: dev-token-change-me
4. View founders in draft status
5. To publish: PUT /api/founders/:id with status=published
6. Rebuild Astro: npm run build (fetches published founders at build time)
7. Verify About page shows published founders

## Build Verification
```
npm run build   # 19 pages, 0 errors
npm run check   # 0 errors, 4 hints
```
