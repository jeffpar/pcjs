/**
 * Patches vinyl-fs@3 prepare.js to avoid the deprecated fs.Stats constructor
 * warning (DEP0180) in Node.js v22+.
 */
const fs = require('fs');
const path = require('path');

// vinyl-fs may be at the top level or nested inside gulp/node_modules
const candidates = [
    path.join(__dirname, '../../node_modules/vinyl-fs/lib/dest/prepare.js'),
    path.join(__dirname, '../../node_modules/gulp/node_modules/vinyl-fs/lib/dest/prepare.js'),
];
const file = candidates.find(f => fs.existsSync(f));
if (!fs.existsSync(file)) process.exit(0);

const src = fs.readFileSync(file, 'utf8');
const patched = src.replace('new fs.Stats()', 'Object.create(fs.Stats.prototype)');

if (patched !== src) {
    fs.writeFileSync(file, patched);
    console.log('Patched vinyl-fs: replaced deprecated fs.Stats constructor');
}
