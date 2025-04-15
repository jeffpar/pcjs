/**
 * Script to test Dezip functions.
 */

import fs from "fs/promises";
import zlib from "zlib";
import Dezip from "../dezip.js";

const dezip = new Dezip(
    {
        fetch,
        open: fs.open,
        inflate: zlib.inflateRaw,
        createInflate: zlib.createInflateRaw
    },
    {
        cacheSize: 4096
    }
);

const testFiles = [
    "deflated.zip",
    "localonly.zip",
    "pkz080.zip",
    "http://cd.textfiles.com/originalsw/25/pkz080.zip"
];

/**
 * Function to test the Dezip class.
 */
async function main() {
    try {
        for (let testFile of testFiles) {
            let archive = await dezip.open(testFile);
            console.log(`Archive ${testFile} opened successfully`);
            let entries = await dezip.readDirectory(archive);
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                try {
                    let db = await dezip.readFile(archive, entry);
                    console.log(`Entry ${i}: ${entry.fileHeader.fname}: ${db.length} bytes`);
                } catch (error) {
                    console.log(`Entry ${i}: ${entry.fileHeader.fname}: ${error.message}`);
                }
            }
            await dezip.close(archive);
        }
    } catch (error) {
        console.log(error.message);
    }
}

await main();
