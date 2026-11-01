const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

function resolveImport(importPath, fromFile) {
  const fromDir = path.dirname(fromFile);
  const candidates = [
    importPath,
    importPath + '.astro',
    importPath + '.ts',
    importPath + '.js',
    importPath + '/index.astro',
    importPath + '/index.ts',
    importPath + '/index.js',
  ];
  for (const cand of candidates) {
    const fullPath = path.resolve(fromDir, cand);
    if (fs.existsSync(fullPath)) {
      return cand;
    }
  }
  return importPath;
}

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      const newContent = content.replace(/from ["'](\.\.\/[\w\/]+)([\w-]+)["']/g, (match, prefix, name) => {
        if (name.includes('.')) return match;
        const fullImport = prefix + name;
        const resolved = resolveImport(fullImport, fullPath);
        if (resolved !== fullImport) {
          return 'from "' + resolved + '"';
        }
        return match;
      });
      if (newContent !== original) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Fixed: ' + fullPath);
      }
    }
  }
}

processDir(srcDir);
console.log('Done');
