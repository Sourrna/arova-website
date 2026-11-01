# AROVA Environment Variables

## Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PUBLIC_SITE_URL` | Canonical production site URL (for SEO) | `https://arova.example.com` |
| `FORM_PROVIDER_ENDPOINT` | (Optional) Form provider endpoint | |
| `FORM_PROVIDER_API_KEY` | (Optional) Form provider API key | |

## Instructions

1. Copy `.env.example` to `.env`.
2. Fill in `PUBLIC_SITE_URL` with your production domain.
3. Configure form provider variables only when a provider is available.
4. Never commit `.env` to Git.

## Security

- `PUBLIC_` variables are exposed to browser code — never put secrets in them.
- Form provider keys should be kept server-side if a serverless endpoint is used.
