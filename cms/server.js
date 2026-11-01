const http = require('http');
const url = require('url');
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4000;
const TOKEN = process.env.AROVA_CMS_TOKEN || 'dev-token-change-me';
const DB_PATH = path.join(__dirname, 'arova.db');

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS founders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  public_title TEXT,
  role TEXT,
  short_positioning TEXT,
  bio_short TEXT,
  bio_full TEXT,
  education TEXT,
  academic_interests TEXT,
  research_experience TEXT,
  professional_experience TEXT,
  business_experience TEXT,
  selected_projects TEXT,
  expertise TEXT,
  publications TEXT,
  teaching_and_talks TEXT,
  certifications TEXT,
  portrait TEXT,
  social_links TEXT,
  featured_quote TEXT,
  display_order INTEGER DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft',
  seo_title TEXT,
  seo_description TEXT,
  evidence_note TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  seo_title TEXT,
  seo_description TEXT,
  canonical TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS page_sections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  page_id INTEGER NOT NULL,
  section_type TEXT NOT NULL,
  section_order INTEGER DEFAULT 0,
  content TEXT,
  visible INTEGER DEFAULT 1,
  FOREIGN KEY(page_id) REFERENCES pages(id) ON DELETE CASCADE
);
`);

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', c => data += c);
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function auth(req) {
  return req.headers['x-cms-token'] === TOKEN;
}

function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify(obj));
}

function listFounders(status) {
  if (status) return db.prepare('SELECT * FROM founders WHERE status=? ORDER BY display_order, id').all(status);
  return db.prepare('SELECT * FROM founders ORDER BY display_order, id').all();
}

function publicFounder(row) {
  if (!row) return null;
  const { evidence_note, ...rest } = row;
  return rest;
}

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  if (req.method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, X-CMS-Token', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE' });
    return res.end();
  }

  try {
    if (pathname === '/' && req.method === 'GET') {
      const html = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(html);
    }

    // Public: published founders only
    if (pathname === '/api/founders' && req.method === 'GET') {
      const status = parsed.query.status;
      if (status && !auth(req)) return json(res, 401, { error: 'unauthorized' });
      const rows = status ? listFounders(status) : listFounders('published');
      return json(res, 200, { data: (status ? rows : rows.map(publicFounder)) });
    }
    const fm = pathname.match(/^\/api\/founders\/(\d+)$/);
    if (fm && req.method === 'GET') {
      const row = db.prepare('SELECT * FROM founders WHERE id=?').get(fm[1]);
      if (!row) return json(res, 404, { error: 'not found' });
      if (row.status !== 'published' && !auth(req)) return json(res, 404, { error: 'not found' });
      return json(res, 200, { data: auth(req) ? row : publicFounder(row) });
    }
    const fslug = pathname.match(/^\/api\/founders\/slug\/(.+)$/);
    if (fslug && req.method === 'GET') {
      const row = db.prepare('SELECT * FROM founders WHERE slug=?').get(decodeURIComponent(fslug[1]));
      if (!row) return json(res, 404, { error: 'not found' });
      if (row.status !== 'published' && !auth(req)) return json(res, 404, { error: 'not found' });
      return json(res, 200, { data: auth(req) ? row : publicFounder(row) });
    }

    // Authenticated mutations
    if (pathname === '/api/founders' && req.method === 'POST') {
      if (!auth(req)) return json(res, 401, { error: 'unauthorized' });
      const b = await parseBody(req);
      const stmt = db.prepare(`INSERT INTO founders (slug,name,public_title,role,short_positioning,bio_short,bio_full,education,academic_interests,research_experience,professional_experience,business_experience,selected_projects,expertise,publications,teaching_and_talks,certifications,portrait,social_links,featured_quote,display_order,status,seo_title,seo_description,evidence_note) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
      const info = stmt.run(b.slug,b.name,b.public_title||null,b.role||null,b.short_positioning||null,b.bio_short||null,b.bio_full||null,b.education||null,b.academic_interests||null,b.research_experience||null,b.professional_experience||null,b.business_experience||null,b.selected_projects||null,b.expertise||null,b.publications||null,b.teaching_and_talks||null,b.certifications||null,b.portrait||null,b.social_links||null,b.featured_quote||null,b.display_order||0,b.status||'draft',b.seo_title||null,b.seo_description||null,b.evidence_note||null);
      return json(res, 201, { data: { id: info.lastInsertRowid } });
    }
    if (fm && req.method === 'PUT') {
      if (!auth(req)) return json(res, 401, { error: 'unauthorized' });
      const b = await parseBody(req);
      db.prepare(`UPDATE founders SET slug=?,name=?,public_title=?,role=?,short_positioning=?,bio_short=?,bio_full=?,education=?,academic_interests=?,research_experience=?,professional_experience=?,business_experience=?,selected_projects=?,expertise=?,publications=?,teaching_and_talks=?,certifications=?,portrait=?,social_links=?,featured_quote=?,display_order=?,status=?,seo_title=?,seo_description=?,evidence_note=?,updated_at=datetime('now') WHERE id=?`)
        .run(b.slug,b.name,b.public_title||null,b.role||null,b.short_positioning||null,b.bio_short||null,b.bio_full||null,b.education||null,b.academic_interests||null,b.research_experience||null,b.professional_experience||null,b.business_experience||null,b.selected_projects||null,b.expertise||null,b.publications||null,b.teaching_and_talks||null,b.certifications||null,b.portrait||null,b.social_links||null,b.featured_quote||null,b.display_order||0,b.status||'draft',b.seo_title||null,b.seo_description||null,b.evidence_note||null,fm[1]);
      return json(res, 200, { ok: true });
    }

    // Pages
    if (pathname === '/api/pages' && req.method === 'GET') {
      const status = parsed.query.status;
      if (status && !auth(req)) return json(res, 401, { error: 'unauthorized' });
      const rows = status ? db.prepare('SELECT * FROM pages WHERE status=?').all(status) : db.prepare("SELECT * FROM pages WHERE status='published'").all();
      return json(res, 200, { data: rows });
    }
    const pm = pathname.match(/^\/api\/pages\/slug\/(.+)$/);
    if (pm && req.method === 'GET') {
      const page = db.prepare('SELECT * FROM pages WHERE slug=?').get(decodeURIComponent(pm[1]));
      if (!page) return json(res, 404, { error: 'not found' });
      if (page.status !== 'published' && !auth(req)) return json(res, 404, { error: 'not found' });
      const sections = db.prepare('SELECT * FROM page_sections WHERE page_id=? ORDER BY section_order').all(page.id);
      return json(res, 200, { data: { page, sections } });
    }

    if (pathname === '/api/health') return json(res, 200, { ok: true, cms: 'arova-local', db: DB_PATH });

    json(res, 404, { error: 'not found' });
  } catch (e) {
    json(res, 500, { error: e.message });
  }
});

server.listen(PORT, () => {
  console.log(`AROVA CMS listening on http://localhost:${PORT}`);
  console.log(`Admin UI: http://localhost:${PORT}/`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
});
