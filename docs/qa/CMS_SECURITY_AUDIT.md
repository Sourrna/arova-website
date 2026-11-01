# CMS Security Audit (Local PoC)

Date: 2026-11-01
Scope: cms/server.js, cms/admin.html, cms/arova.db

## Findings

### Authentication
- Single shared token via X-CMS-Token header (env AROVA_CMS_TOKEN, default "dev-token-change-me"). No user accounts, sessions, or MFA. Acceptable for local PoC only.

### Authorization
- Public GET /api/founders returns only status='published'. Non-published records return 404 to unauthenticated callers. Verified.
- Mutations (POST/PUT) require token; unauthenticated returns 401. Verified.

### SQL Injection
- All queries use parameterized statements (better-sqlite3 prepare/run with ? placeholders). No string concatenation in SQL. PASS.

### Input Validation
- Only NOT NULL constraints on slug/name. No length, format, or allow-list validation. MISSING.

### Error Handling / Info Leak
- SQLite errors (e.g. "NOT NULL constraint failed: founders.slug") returned verbatim to client. INFO LEAK. Fix: generic error messages.

### CORS
- Access-Control-Allow-Origin: * on all responses. Acceptable for dev; must be restricted in production.

### Security Headers
- No X-Frame-Options, CSP, HSTS, X-Content-Type-Options. MISSING.

### CSRF
- Token in custom header (not cookie) mitigates CSRF for browser clients. Acceptable.

### Secrets
- Token from env with insecure default. Production must set AROVA_CMS_TOKEN and remove default.

### Password Hashing
- N/A — no user passwords stored.

## Recommendations
1. Remove default token; fail to start if unset in production.
2. Generic error responses (no DB error text).
3. Add input validation (slug format, lengths).
4. Restrict CORS origin in production.
5. Add security headers middleware.
6. Implement proper user auth before multi-user use.

## Test Evidence
- Unauth POST → 401 (verified)
- Public GET with drafts → [] (verified)
- Non-published fetch without token → 404 (verified)
