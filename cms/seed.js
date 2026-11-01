const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname,'arova.db'));
db.pragma('journal_mode = WAL');

db.prepare(`INSERT OR IGNORE INTO pages (slug,title,seo_title,seo_description,canonical,status) VALUES (?,?,?,?,?,?)`)
  .run('about','درباره آرووا','درباره آرووا | AROVA','چرا آرووا وجود دارد.','/about','published');

const page = db.prepare("SELECT id FROM pages WHERE slug='about'").get();
db.prepare(`INSERT OR IGNORE INTO page_sections (page_id,section_type,section_order,content,visible) VALUES (?,?,?,?,?)`)
  .run(page.id,'hero',1,JSON.stringify({title:'آرووا',subtitle:'از دانستن تا ساختن'}),1);

const founders = [
  {slug:'sourena',name:'سورنا',public_title:'محصول و تجربه کاربری دیجیتال | هوش مصنوعی کاربردی',role:'بنیان‌گذار',short_positioning:'فکر محصول، تجربه کاربری دیجیتال و هوش مصنوعی کاربردی',status:'draft'},
  {slug:'dr-mohammad-hossein-roozbahani',name:'دکتر محمدحسین روزبهانی',public_title:'بنیان‌گذار علمی و آکادمیک',role:'بنیان‌گذار',short_positioning:'پیشینه آکادمیک و پژوهشی (در انتظار تأیید منبع)',status:'draft'}
];
const stmt = db.prepare(`INSERT OR IGNORE INTO founders (slug,name,public_title,role,short_positioning,status) VALUES (?,?,?,?,?,?)`);
for (const f of founders) stmt.run(f.slug,f.name,f.public_title,f.role,f.short_positioning,f.status);
console.log('Seeded. Founders:', db.prepare('SELECT slug,status FROM founders').all());
console.log('Pages:', db.prepare('SELECT slug,status FROM pages').all());
