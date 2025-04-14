/**
 * Script to test Dezip functions.
 */

import fs from "fs/promises";
import Dezip from "../dezip.js";

const dezip = new Dezip({fetch, open: fs.open}, {cacheSize: 4096});
const testFiles = [
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
            for (let entry of entries) {
                let data = await dezip.readFile(archive, entry);
            }
            await dezip.close(archive);
        }
    } catch (error) {
        console.log(error.message);
    }
}

await main();
