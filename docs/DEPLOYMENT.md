# AROVA Deployment

## Preferred Target
Cloudflare Pages (static site hosting). The project is host-agnostic — any static host that serves the `dist/` output will work.

## Build

```bash
npm install
npm run build
```

Output: `dist/`

## Preview

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```
PUBLIC_SITE_URL=https://your-domain.com
```

`PUBLIC_SITE_URL` is used for canonical tags and sitemap. Change this after the domain is selected.

## Form Configuration

The contact form uses a mailto fallback by default. To use a form provider:
1. Set `FORM_PROVIDER_ENDPOINT` and `FORM_PROVIDER_API_KEY` in `.env`.
2. Implement the provider adapter in `src/utils/form-provider.ts`.
3. Update `src/pages/contact.astro` to use the adapter instead of mailto.

## Do Not
- Do not commit secrets to Git.
- Do not deploy without explicit owner approval.
- Do not change DNS or create accounts without authorization.
