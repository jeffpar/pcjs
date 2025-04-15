/**
 * Script to test Dezip functions.
 */

import fs from "fs/promises";
import path from "path";
import zlib from "zlib";
import Dezip from "../dezip.js";
import { LegacyZip } from "../../modules/legacyzip.js";

const dezip = new Dezip(
    {
        fetch,
        open: fs.open,
        inflate: zlib.inflateRaw,                   // interface for ZIP_DEFLATE (async) data
     // createInflate: zlib.createInflateRaw,       // interface for ZIP_DEFLATE (chunked async) data
        stretchSync: LegacyZip.stretchSync,         // interface for ZIP_SHRINK data
        expandSync: LegacyZip.expandSync,           // interface for ZIP_REDUCE# data
        explodeSync: LegacyZip.explodeSync,         // interface for ZIP_IMPLODE data
        blastSync: LegacyZip.blastSync              // interface for ZIP_IMPLODE_DCL data
    },
    {
        cacheSize: 4096
    }
);

/**
 * Function to test the Dezip class.
 */
async function main() {
    //
    // Read a list of test files from a CSV file
    //
    let testFiles = [];
    let file = await fs.readFile("files.csv", "utf8");
    let lines = file.split("\n");
    let split = (line, headers) => {
        let fields = [];
        let regex = /"([^"]*)"|([^,]+)/g;
        let match;
        while ((match = regex.exec(line)) !== null) {
            fields.push(match[1] || match[2]);
        }
        if (headers) {
            let row = {};
            for (let i = 0; i < headers.length; i++) {
                row[headers[i]] = fields[i];
            }
            return row;
        }
        return fields;
    };
    let headers = split(lines[0]);
    for (let i = 1; i < lines.length; i++) {
        let row = split(lines[i], headers);
        testFiles.push(`/Volumes/MacSSD/Archives/sets/ibm-wgam-wbiz-collection/download${row.path}/${row.name}`);
    }
    //
    // Process the test files
    //
    for (let n = 0 /*28724*/; n < testFiles.length; n++) {
        let testFile = testFiles[n];
        let fileName = path.basename(testFile);
        let archive = await dezip.open(testFile);
        console.log(`archive #${n+1} ${testFile} opened successfully`);
        try {
            let entries = await dezip.readDirectory(archive);
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                try {
                    let db = await dezip.readFile(archive, entry);
                    // console.log(`${fileName} entry #${i+1}: ${entry.fileHeader.fname}: ${db.length} bytes`);
                } catch (error) {
                    if (!error.message.includes("does not match expected size")) {
                        throw new Error(`${fileName} entry #${i+1}: ${entry.dirHeader?.fname || "unknown"}: ${error.message}`);
                    }
                }
            }
        } catch (error) {
            console.log(error.message);
        }
        await dezip.close(archive);
    }
}

await main();
