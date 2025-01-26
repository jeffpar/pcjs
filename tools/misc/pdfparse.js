#!/usr/bin/env node
/**
 * @fileoverview Node command-line PDF parsing tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import pdf from "pdf-parse";
import PCJSLib from "../modules/pcjslib.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";

const [argc, argv] = PCJSLib.getArgs();

let dataBuffer;

/**
 * renderSheet(pageData)
 */
function renderSheet(pageData)
{
    let fDebug = argv['debug'];
    let sHeadings = [], xHeadings = [], xPrev = -1, yPrev = -1, nLines = 0, rows = [];

    let checkItem = function(item) {
        let i, j;
        let s = getString(item);
        let x = item.transform[4];
        let y = item.transform[5];
        if (x < xPrev) {
            if (!nLines) {
                rows.push(sHeadings);
            } else {
                if (Math.abs(y - yPrev) <= 1) {
                    /*
                     * We seem to have rewound to an earlier position on the same line.  Figure out what column
                     * that is, and then gather up all column data from that point on and append it to the preceding
                     * column.
                     */
                    for (i = 0; i < xHeadings.length; i++) {
                        if (xHeadings[i] >= x) break;
                    }
                    let t = "";
                    for (j = i; j < xHeadings.length; j++) {
                        if (rows[nLines][j] != undefined) {
                            t += rows[nLines][j];
                            delete rows[nLines][j];
                        }
                    }
                    rows[nLines][i-1] += t;
                    xPrev = -1;
                }
            }
            if (x < xPrev) {
                rows.push(new Array(sHeadings.length));
                nLines++;
                xPrev = -1;
            }
        }
        if (!nLines) {
            sHeadings.push(s);
            xHeadings.push(x);
        } else {
            /*
             * Check the current X position against those in xHeadings.  As soon as we find a heading whose X is >= the
             * current X, that's where we'll drop the current item.
             */
            for (i = 0; i < xHeadings.length; i++) {
                if (xHeadings[i] >= x) break;
            }
            rows[nLines][i] = s;
        }
        xPrev = x;
        yPrev = y;
        if (fDebug) printf("found \"%s\" at (%d,%d)\n", getString(item), x, y);
    };

    let getString = function(item) {
        let str = item.str;
        if (str.length > 1 && !str.match(/\S\S+/)) {    // this is intended only to repair strings like "B U S I N E S S   A R T I C L E S"....
            str = str.replace(/(\S)\s/g, "$1");
        }
        return str.replace(/\s+/g, " ").trim().replace(/"/g, '""');
    };

    let makeCSVLine = function(row) {
        let sLine = "";
        for (let i = 0; i < row.length; i++) {
            let col = row[i] || "";
            col = col.trim().replace(/"/g, '""');
            if (col.indexOf(',') >= 0 || col.indexOf('"') >= 0) col = '"' + col + '"';
            if (i > 0) sLine += ',';
            sLine += col;
        }
        return sLine;
    };

    let render_options = {              // documentation at https://mozilla.github.io/pdf.js/
        normalizeWhitespace: true,      // replaces all occurrences of whitespace with standard spaces (0x20); default is false
        disableCombineTextItems: true   // do not attempt to combine same line TextItems; default false
    };

    return pageData.getTextContent(render_options).then(function(textContent) {
        if (argv['page'] && pageData.pageNumber != argv['page']) return "";
        for (let i = 0; i < textContent.items.length; i++) {
            let item = textContent.items[i];
            checkItem(item);
        }
        let csv = "";
        for (let i = 0; i < rows.length; i++) {
            csv += makeCSVLine(rows[i]) + '\n';
        }
        return csv;
    });
}

/**
 * renderPage(pageData)
 */
function renderPage(pageData)
{
    let fDebug = argv['debug'];
    /*
     * headings and subs are arrays of descriptors: [string, x, y, cx, cy].
     *
     * rows are arrays of arrays of descriptors.
     */
    let rows = [], subs = [];
    let headings = [], pageHeadings = false, xPrev = -1;

    let isHeading = function(item) {
        let x = item.transform[4];
        let y = item.transform[5];
        let str = getString(item);
        /*
         * Deal with page and column headings first.
         */
        if (!pageHeadings) {
            if (headings.length <= 1 || Math.abs(headings[headings.length - 1][2] - y) <= 2) {
                let i = 0;
                if (headings.length) {
                    for (i = 1; i < headings.length; i++) {
                        if (Math.abs(headings[i][1] + headings[i][3] - x) <= 2) {
                            break;
                        }
                    }
                }
                if (!headings[i]) {
                    headings[i] = [str, x, y, item.width, item.height];
                } else {
                    headings[i][0] += ' ' + str;
                    headings[i][3] += 2 + item.width;
                }
                if (fDebug) printf("heading %d at (%d,%d): \"%s\"\n", i, x, y, headings[i][0]);
                xPrev = x;
                return true;
            }
            pageHeadings = true;
        }
        /*
         * Deal with subheadings next.
         */
        if (x < xPrev && x > headings[1][1] + 2) {
            if (!subs.length || Math.abs(subs[subs.length - 1][2] - y) > 2) {
                subs.push([str, x, y, item.width, item.height]);
            } else {
                subs[subs.length - 1][0] += ' ' + str;
                subs[subs.length - 1][3] += 2 + item.width;
            }
            if (fDebug) printf("subheading at (%d,%d): \"%s\"\n", x, y, subs[subs.length - 1][0]);
            return true;
        }
        return false;
    };

    let isValue = function(item) {
        let row = getRow(rows, item);
        if (row) {
            addValue(row, item);
            return true;
        }
        return false;
    };

    let getRow = function(rows, item) {
        let x = item.transform[4];
        let y = item.transform[5];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            if (Math.abs(row[0][2] - y) <= 2) {
                return row;
            }
        }
        if (Math.abs(headings[1][1] - x) <= 2) {
            let row = [];
            rows.push(row);
            return row;
        }
        return null;
    };

    let addValue = function(row, item) {
        let i;
        let x = item.transform[4];
        let y = item.transform[5];
        let str = getString(item);
        for (i = 1; i < headings.length; i++) {
            if (headings[i][1] > x + 2) {
                break;
            }
        }
        i -= 2;
        if (i < 0) i = 0;
        if (!row[i]) {
            row[i] = [str, x, y, item.width, item.height];
        } else {
            row[i][0] += ' ' + str;
            row[i][3] += 2 + item.width;
        }
        if (fDebug) printf("%s at (%d,%d): \"%s\"\n", headings[i+1][0], row[i][1], row[i][2], row[i][0]);
        xPrev = x;
    };

    let getString = function(item) {
        let str = item.str;
        if (str.length > 1 && !str.match(/\S\S+/)) {    // this is intended only to repair strings like "B U S I N E S S   A R T I C L E S"....
            str = str.replace(/(\S)\s/g, "$1");
        }
        return str.replace(/\s+/g, " ").trim().replace(/"/g, '""');
    };

    let render_options = {              // documentation at https://mozilla.github.io/pdf.js/
        normalizeWhitespace: true,      // replaces all occurrences of whitespace with standard spaces (0x20); default is false
        disableCombineTextItems: true   // do not attempt to combine same line TextItems; default false
    };

    return pageData.getTextContent(render_options).then(function(textContent) {
        if (argv['page'] && pageData.pageNumber != argv['page']) return "";
        if (pageData.pageNumber < 10 || pageData.pageNumber > 457) return "";
        for (let i = 0; i < textContent.items.length; i++) {
            let item = textContent.items[i];
            if (isHeading(item) || isValue(item)) continue;
            printf("unrecognized text: \"%s\"\n", getString(item));
        }

        /*
         * Let's make sure that the rows are sorted by descending y values; ditto for subs.
         *
         * The ordinary top-down flow of text data inside PDFs means this is generally already true, but this
         * will guarantee it, ensuring we can safely insert the subs into the rows at the appropriate points.
         */
        rows.sort((a, b) => {
            a[0][2] > b[0][2]? -1 : (a[0][2] < b[0][2]? 1 : 0);
        });
        subs.splice(subs.length - 1, 1);
        subs.sort((a, b) => {
            a[2] > b[2]? -1 : (a[2] < b[2]? 1 : 0);
        });

        let csv = "", j = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            while (subs[j+1] && subs[j+1][2] < row[0][2]) {
                j++;
            }
            csv += sprintf('%d,"%s","%s","%s","%s","%s","%s"\n', pageData.pageNumber, headings[0][0], subs[j]? subs[j][0] : "", row[0]? row[0][0] : "", row[1]? row[1][0] : "", row[2]? row[2][0] : "", row[3]? row[3][0] : "");
        }
        return csv;
    });
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    printf("%s --page=%d\n", argv[1], argv['page']);

    dataBuffer = fs.readFileSync(argv[1]);

    pdf(dataBuffer, {
        pagerender: renderPage
    }).then(function(data) {
        console.log(data.numpages);
        // number of rendered pages
        // console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        // console.log(data.metadata);
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        // console.log(data.version);
        // PDF text
        console.log(data.text);
    });
}

main(argc, argv);
