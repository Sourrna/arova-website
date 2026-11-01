# AROVA

Persian-first RTL website for AROVA — education, advisory and digital solutions brand.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Production Build

```bash
npm run build
npm run preview
```

## Type Check

```bash
npm run check
```

## Deployment

See `docs/DEPLOYMENT.md` for deployment steps.

## Stack

- [Astro](https://astro.build/) — static site generator
- [TypeScript](https://www.typescriptlang.org/) — strict type checking
- CSS custom properties — design tokens
- Persian (fa-IR) RTL-first typography

## Content

All content is managed through Astro Content Collections in `src/content/`.
Each item uses a `status` field (`draft`, `review`, `published`). Only `published`
items render publicly.

## Brand Assets

Logo SVGs live in `public/images/logo/`. See `docs/BRAND_GUIDELINES.md`.
