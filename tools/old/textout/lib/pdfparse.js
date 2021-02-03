#!/usr/bin/env node
/**
 * @fileoverview Node command-line PDF parsing tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

const fs = require("fs");
const pdf = require("pdf-parse");
const strlib = require("../../../../machines/shared/lib/strlib");
const proclib = require("../../../../machines/shared/lib/proclib");
const args = proclib.getArgs();

let sSubcategory = "";
let dataBuffer = fs.readFileSync("../archive/Whats_In_Print_1984.pdf");

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    process.stdout.write(strlib.sprintf(format, ...args));
}

/**
 * sprintf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function sprintf(format, ...args)
{
    return strlib.sprintf(format, ...args);
}

function renderPage(pageData)
{
    /*
     * rows is an array of row data, where each row element is an array with the following columns:
     *
     *      y,title,author,magazine,date
     *
     * subs is a similar array of subcategory data:
     *
     *      y,subcategory
     */
    let fDebug = args.argv['debug'];
    let rows = [], subs = [], headings = 0;
    let colNames = ["title","author","magazine","date"];
    let sCategory = "", sError = "";
    let yHeadings = -1, yHeadingVariation = -1, yRows = [];
    let xTitle = -1, xAuthor = -1, xMagazine = -1, xDate = -1;

    let checkHeading = function(item, col) {
        let x = item.transform[4];
        let y = item.transform[5];
        if (yHeadings < 0) {
            yHeadings = y;
        } else {
            let yVariation = Math.abs(yHeadings - y);
            if (yHeadingVariation < yVariation) {
                yHeadingVariation = yVariation;
            }
        }
        headings++;
        if (fDebug) printf("found %s \"%s\" at (%d,%d)\n", colNames[col-1], getString(item), x, y);
        return x;
    };

    let getString = function(item) {
        let str = item.str;
        if (str.length > 1 && !str.match(/\S\S+/)) {    // this is intended only to repair strings like "B U S I N E S S   A R T I C L E S"....
            str = str.replace(/(\S)\s/g, "$1");
        }
        return str.replace(/\s+/g, " ").trim().replace(/"/g, '""');
    };

    let addRow = function(item, col) {
        let i, row;
        let x = item.transform[4];
        let y = item.transform[5];
        let str = getString(item);
        for (i = 0; i < rows.length; i++) {
            row = rows[i];
            if (y <= row[0] + 2 && y >= row[0] - 2) {
                if (row[col] != undefined) {
                    sError = sprintf("duplicate %s found at (%d,%d): \"%s\"", colNames[col-1], x, y, str);
                    if (fDebug) printf("error: %s\n", sError);
                    return;
                }
                break;
            }
        }
        if (i == rows.length) {
            row = [y];
            rows.push(row);
        }
        if (fDebug) sprintf("added %s found at (%d,%d): \"%s\"", colNames[col-1], x, y, str);
        row[col] = str;
    };

    let addSub = function(item) {
        let i, sub;
        let x = item.transform[4];
        let y = item.transform[5];
        let str = getString(item);
        for (i = 0; i < subs.length; i++) {
            sub = subs[i];
            if (y <= sub[0] + 2 && y >= sub[0] - 2) {
                sError = sprintf("duplicate subcategory found at (%d,%d): \"%s\"", x, y, str);
                if (fDebug) printf("error: %s\n", sError);
                break;
            }
        }
        if (i == subs.length) {
            sub = [y];
            sub[1] = str;
            subs.push(sub);
            if (fDebug) printf("added subcategory from (%d,%d): \"%s\"\n", x, y, str);
        }
    };

    let checkTitle = function(item) {
        let x = item.transform[4];
        if (x >= xTitle - 2 && x <= xTitle + 2) {
            addRow(item, 1);
            return true;
        }
        return false;
    };

    let checkAuthor = function(item) {
        let x = item.transform[4];
        if (x >= xAuthor - 2 && x <= xAuthor + 2) {
            addRow(item, 2);
            return true;
        }
        return false;
    };

    let checkMagazine = function(item) {
        let x = item.transform[4];
        if (x >= xMagazine - 2 && x <= xMagazine + 2) {
            addRow(item, 3);
            return true;
        }
        return false;
    };

    let checkDate = function(item) {
        let x = item.transform[4];
        if (x >= xDate - 2 && x <= xDate + 2) {
            addRow(item, 4);
            return true;
        }
        return false;
    };

    let render_options = {              // documentation at https://mozilla.github.io/pdf.js/
        normalizeWhitespace: true,      // replaces all occurrences of whitespace with standard spaces (0x20); default is false
        disableCombineTextItems: true   // do not attempt to combine same line TextItems; default false
    }

    return pageData.getTextContent(render_options).then(function(textContent) {
        if (pageData.pageNumber != args.argv['page']) return "";
        for (let i = 0; i < textContent.items.length; i++) {
            let item = textContent.items[i];
            if (headings < 5) {
                let str = getString(item);
                if (i == 0) {
                    sCategory = str;
                    headings++;
                }
                else if (str == "Title") {
                    xTitle = checkHeading(item, 1);
                }
                else if (str == "Author") {
                    xAuthor = checkHeading(item, 2);
                }
                else if (str.indexOf("Ma") == 0) {
                    xMagazine = checkHeading(item, 3);
                }
                else if (str == "Date") {
                    xDate = checkHeading(item, 4);
                }
                else {
                    sError = "unable to find all headings";
                    if (fDebug) printf("%s\n", sError);
                    break;
                }
                continue;
            }
            if (!checkTitle(item) && !checkAuthor(item) && !checkMagazine(item) && !checkDate(item)) {
                addSub(item);
            }
        }
        /*
         * Let's make sure that the rows are sorted by descending y values (ie, row[0]); ditto for subs.
         *
         * The ordinary top-down flow of text data inside PDFs means this is generally already true, but this
         * will guarantee it, ensuring we can safely insert the subs into the rows at the appropriate points.
         */
        rows.sort((a, b) => {a[0] > b[0]? -1 : (a[0] < b[0]? 1 : 0)});
        subs.sort((a, b) => {a[0] > b[0]? -1 : (a[0] < b[0]? 1 : 0)});

        let csv = "";
        let j = 0, sub = subs[j];
        for (let i = 0, j = 0; i < rows.length; i++) {
            let row = rows[i];
            if (sub && sub[0] > row[0]) {
                sSubcategory = sub[1];
                sub = subs[++j];
            }
            csv += sprintf('%d,"%s","%s","%s","%s","%s","%s"\n', pageData.pageNumber, sCategory, sSubcategory, row[1], row[2], row[3], row[4]);
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
    printf("--page = %d\n", argv['page']);

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

main(args.argc, args.argv);
