#!/usr/bin/env node
/**
 * @fileoverview Adds <script src="/assets/js/xslt-polyfill.min.js"> to all XML
 * files under /machines and /tools that use a machine.xsl stylesheet.
 *
 * The script tag is inserted immediately after the closing > of the <machine ...>
 * opening tag, indented with a tab to match the other child elements.
 *
 * Usage:
 *   node tools/misc/add-xslt-polyfill.js [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import pkg from 'glob';
const globSync = pkg.sync || pkg['module.exports']?.sync;

const SCRIPT_LINE = '\t<script src="/assets/js/xslt-polyfill.min.js" xmlns="http://www.w3.org/1999/xhtml"></script>';
const POLYFILL_MARKER = 'xslt-polyfill';
const XSL_PATTERN = /machine\.xsl/;

const dryRun = process.argv.includes('--dry-run');
const root = path.resolve(import.meta.dirname, '../..');

const xmlFiles = globSync('{machines,tools}/**/*.xml', { cwd: root }).map(f => path.join(root, f));

let modified = 0;
let skipped = 0;
let alreadyDone = 0;

for (const file of xmlFiles) {
    const content = fs.readFileSync(file, 'utf8');

    // Only process files that use a machine.xsl stylesheet
    if (!XSL_PATTERN.test(content)) {
        skipped++;
        continue;
    }

    // Skip files that already have the polyfill script
    if (content.includes(POLYFILL_MARKER)) {
        alreadyDone++;
        continue;
    }

    // Find the end of the <machine ...> opening tag.
    // The tag may span two lines: attributes on one line, lone ">" on the next.
    const lines = content.split('\n');
    let machineLineIdx = -1;
    let closingLineIdx = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (/^<machine[\s>]/.test(line)) {
            machineLineIdx = i;
            // The closing > of the opening tag may be on this line or the next
            if (line.includes('>')) {
                closingLineIdx = i;
            } else {
                // Look ahead for the line that contains the closing >
                for (let j = i + 1; j < lines.length; j++) {
                    if (lines[j].includes('>')) {
                        closingLineIdx = j;
                        break;
                    }
                }
            }
            break;
        }
    }

    if (machineLineIdx === -1 || closingLineIdx === -1) {
        console.warn(`WARN: Could not locate <machine> tag in ${file}`);
        skipped++;
        continue;
    }

    // Insert the script line after the closing line of the <machine> tag
    lines.splice(closingLineIdx + 1, 0, SCRIPT_LINE);
    const newContent = lines.join('\n');

    if (dryRun) {
        console.log(`[dry-run] Would modify: ${path.relative(root, file)}`);
    } else {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Modified: ${path.relative(root, file)}`);
    }
    modified++;
}

console.log(`\nDone. Modified: ${modified}, Already had polyfill: ${alreadyDone}, Skipped (no machine.xsl): ${skipped}`);
