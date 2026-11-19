/**
 * Patches source-map-resolve (via gulp-sourcemaps -> css) to work with decode-uri-component@0.5.x,
 * which fixes GHSA-vcc3-ghjq-m6fr and GHSA-qr28-fpjm-wq7f but is ESM-only.  require() of an ESM module
 * returns its namespace object, so we unwrap the default export.  See the "overrides" in package.json.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../../node_modules/source-map-resolve/index.js');
if (!fs.existsSync(file)) process.exit(0);

const src = fs.readFileSync(file, 'utf8');
if (src.includes('decodeUriComponentLib.default')) process.exit(0);
const patched = src.replace(
    'var decodeUriComponentLib = require("decode-uri-component")\n',
    'var decodeUriComponentLib = require("decode-uri-component")\nif (typeof decodeUriComponentLib !== "function") decodeUriComponentLib = decodeUriComponentLib.default\n'
);

if (patched !== src) {
    fs.writeFileSync(file, patched);
    console.log('Patched source-map-resolve: unwrapped ESM default export of decode-uri-component');
}
