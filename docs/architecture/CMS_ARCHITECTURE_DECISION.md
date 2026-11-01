# CMS Architecture Decision

## Recommendation
Keep the current Node.js + SQLite CMS as AROVA's first production architecture for Phase 1-2 (content, About, founders, experts). Defer Directus + PostgreSQL until multi-user editorial workflow, media management, or scale requirements justify the operational cost.

## Comparison

| Criteria | Node + SQLite (current) | Directus + PostgreSQL |
|---|---|---|
| Operational complexity | Low — single Node process + file DB | High — Docker, Postgres, Directus, extensions |
| Security | Adequate for single-admin; needs hardening (see audit) | Strong built-in auth/RBAC/audit; more surface area |
| Content modeling | Manual schema + custom admin; flexible but hand-built | Rich data modeling UI, relations, revisions |
| Multi-user editing | Not supported (single shared token) | Full RBAC, roles, workflows |
| Scalability | Single node; fine for low-traffic content site | Horizontal scale, connection pooling |
| Backup/recovery | File copy of .db + WAL checkpoint | pg_dump, Point-in-time recovery |
| Deployment | Single Node host or container | Requires Postgres host + Directus host |
| Migration cost | Already built and verified | New infra, learning curve, license review |

## Evidence
- Directus npm install timed out/stalled (>5 min) in this environment; no Docker or PostgreSQL installed. Directus + PostgreSQL cannot be run locally without additional infrastructure.
- Current CMS verified: health, CRUD, publication visibility, persistence across restart, parameterized queries.

## Re-evaluate when
- Need >3 concurrent editors or role-based permissions.
- Need media library, revision history, or page builder.
- Traffic or uptime requirements exceed single-node capacity.
- Approved hosting budget and Postgres availability.

## Decision date: 2026-11-01
