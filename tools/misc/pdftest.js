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

let dataBuffer = fs.readFileSync("tmp/What's_In_Print_1984.pdf");

function render_page(pageData) {
    //check documents https://mozilla.github.io/pdf.js/
    let render_options = {
        //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
        normalizeWhitespace: true,
        //do not attempt to combine same line TextItem's. The default value is `false`.
        disableCombineTextItems: false
    }
    return pageData.getTextContent(render_options)
    .then(function(textContent) {
        if (pageData.pageNumber != 10) return "";
        let text = "page " + pageData.pageNumber + "\n";
        for (let item of textContent.items) {
            text += "  (x=" + item.transform[4] + ",y=" + item.transform[5] + "): '" + item.str + "'\n";
            // if (lastY == item.transform[5] || !lastY){
            //     // text += item.str;
            // }
            // else{
            //     // text += '\n' + item.str;
            // }
            // lastY = item.transform[5];
        }
        return text;
    });
}

let options = {
    pagerender: render_page
};

pdf(dataBuffer, options).then(function(data) {
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
