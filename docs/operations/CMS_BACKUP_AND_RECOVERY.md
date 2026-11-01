# CMS Backup and Recovery

## Database Location
- File: cms/arova.db (SQLite, WAL mode)
- WAL files: cms/arova.db-wal, cms/arova.db-shm (when server running)

## Backup Procedure
1. Stop CMS server (or use sqlite3 .backup).
2. Copy cms/arova.db, cms/arova.db-wal, cms/arova.db-shm to backup directory.
3. Or run: `node -e "const D=require('better-sqlite3'); const d=new D('cms/arova.db'); d.backup('backup.db').then(()=>console.log('done'))"`

## Restore Procedure
1. Stop CMS server.
2. Replace cms/arova.db (and wal/shm) with backup files.
3. Start CMS server; verify /api/health.

## Persistence Verified
- Server restart preserves data (founders, pages, status). Tested.

## Recovery Gaps
- No automated scheduled backups.
- No point-in-time recovery.
- No off-site backup.
- Single-file DB = single point of failure.

## Recommendations
- Implement daily automated backup script before production use.
- Store backups outside project directory.
- Test restore quarterly.
