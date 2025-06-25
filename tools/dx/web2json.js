/**
 * web2json.js
 *
 * Reads pages from discmaster.textfiles.com and creates JSON data
 *
 * Usage: node web2json.js [URL]
 */
import path from "path";
import Format from "./format.js";

const format = new Format();
const printf = function(...args) {
    let s = format.sprintf(...args);
    process.stdout.write(s);
};

const options = {
    "help": {
        type: "boolean",
        usage: "--help",
        alias: "-h",
        description: "display this help message",
        handler: function() {
            printf("\nUsage:\n    %s [options] [URL]\n", path.basename(process.argv[1]));
            printf("\nOptions:\n");
            for (let key in options) {
                let option = options[key];
                if (option.internal) continue;
                let aliases = Array.isArray(option.alias)? option.alias.join(",") : option.alias;
                printf("    %-18s %s%s\n", option.usage, option.description, aliases? " [" + aliases + "]" : "");
            }
        }
    }
};

/**
 * main(argc, argv, errors)
 *
 * @param {number} argc
 * @param {Array} argv
 * @param {Array} errors
 */
async function main(argc, argv, errors)
{
    let file;
    printf("import.js %s\n%s\n\nArguments: %s\n", "1.0", "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>", argv[0]);
    if (argv.help) {
        options.help.handler();
        return;
    }
    if (argv[1]) {
        try {
            let response = await fetch(argv[1]);
            if (!response.ok) {
                errors.push("Unable to fetch URL: " + response.statusText);
            } else {
                let text = await response.text();
                //
                // Example of a URL we want to parse:
                //
                //      https://discmaster.textfiles.com/cd-rom/Shareware%20&%20Freeware
                //
                // And the HTML data from that URL we want to parse:
                //
                //      <tr>
                //          <th><tt>Title</tt>
                //          <th><tt>Year</tt>
                //          <th><tt>Publisher</tt>
                //          <th><tt># Files</tt>
                //          <th><tt>Size</tt>
                //          <th><tt>Handled</tt>
                //          <th><tt>Origin</tt>
                //      <tr>
                //          <td><tt>&nbsp;&nbsp;</tt><a href="/browse/10562">Education Platinum</a>
                //          <td align="right"><tt>1994</tt>
                //          <td align="center">Limelight
                //          <td align="right"><tt>21,966</tt>
                //          <td align="right"><tt>652.2&nbsp;MB</tt>
                //          <td align="right"><tt>96%</tt>
                //          <td><a href="https://archive.org/details/various_cd-rom_iso_collection_2016_07">archive.org</a>
                //      ...
                //
                let headings = [], data = [];
                let table = text.match(/<table cellspacing="1" border="5">([\S\s]*)<\/table>/);
                if (table) {
                    let tableRows = table[1].split(/<tr>/);
                    if (tableRows.length) {
                        let i = 1;
                        let fields = tableRows[i].split(/<th>/);
                        if (fields.length > 1) {
                            headings = fields.slice(1).map(f => f.replace(/<tt>(.*?)<\/tt>/, "$1").replace("# ", "").trim());
                            i++;
                        }
                        while (i < tableRows.length) {
                            let dataRow = {};
                            let tableRow = tableRows[i++];
                            fields = tableRow.split(/<td[^>]*>/);
                            if (fields.length > 2) {
                                fields = fields.slice(1);
                                for (let j = 0; j < fields.length; j++) {
                                    let field = fields[j];
                                    let match = field.match(/<a href="([^"]+)">([^<]*)<\/a>/);
                                    if (match) {
                                        if (match[1][0] != '/') {
                                            field = match[1];
                                        } else {
                                            field = match[2];
                                        }
                                    } else {
                                        field = field.replace(/<tt>(.*?)<\/tt>/, "$1");
                                    }
                                    field = field.replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").trim();
                                    dataRow[headings[j] || j] = field;
                                }
                                //
                                // Before we add this row, let's see if it maps to one or more archive.org URLs...
                                //
                                let rowPushed = false;
                                if (dataRow['Origin'].startsWith("https://archive.org/")) {
                                    let responsePage = await fetch(dataRow['Origin']);
                                    if (responsePage.ok) {
                                        let page = await responsePage.text();
                                        //
                                        // We're looking for links that look like this:
                                        //
                                        //      <a class="format-summary download-pill" href="/download/Simtel20_Sept92/Simtel20_Sept92.cdr"
                                        //      title="626.4M"
                                        //      data-toggle="tooltip" data-placement="auto left" data-container="body">
                                        //      ISO IMAGE                  <span class="iconochive-download"  aria-hidden="true"></span><span class="icon-label sr-only">download</span>                </a>
                                        //
                                        let matchISOs = page.matchAll(/<a class=".*?download-pill"[^>]*href="([^"]+\.iso)"[^>]*>\s*(.*\.iso)\s*<[\S\s]*?<\/a>/g);
                                        for (let matchISO of matchISOs) {
                                            dataRow['ISO'] = "https://archive.org" + matchISO[1];
                                            let newRow = { ...dataRow };
                                            data.push(newRow);
                                            rowPushed = true;
                                        }
                                        if (!rowPushed) {
                                            matchISOs = page.matchAll(/<a class=".*?download-pill"[^>]*href="([^"]+)"[^>]*>\s*(ISO IMAGE)\s*<[\S\s]*<\/a>/g);
                                            for (let matchISO of matchISOs) {
                                                dataRow['ISO'] = "https://archive.org" + matchISO[1];
                                                let newRow = { ...dataRow };
                                                data.push(newRow);
                                                rowPushed = true;
                                            }
                                        }
                                    }
                                }
                                if (!rowPushed) {
                                    data.push(dataRow);
                                }
                            }
                        }
                    } else {
                        errors.push("No table found in URL");
                    }
                }
                printf("Extracted %d table rows from URL %s\n", data.length, argv.url);
                printf("%2j\n", data);
            }
        } catch (error) {
            errors.push("Error fetching URL: " + error.message);
        }
    }
    if (errors.length) {
        for (let error of errors) {
            printf("%s\n", error);
        }
        return;
    }
}

await main(...Format.parseArgs(process.argv, options));
