/**
 * Script to test the Dezip class.
 */

import fs from "fs/promises";
import Dezip from "../dezip.js";

const dezip = new Dezip({fetch, open: fs.open});
const testFiles = [
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
            while (true) {
                let header = await dezip.readHeader(archive);
                if (!header) break;
                console.log(`header for "${header.fname}"`);
                // let data = await archive.readData(entry);
                // console.log(`Data length: ${data.length}`);
            }
            await dezip.close(archive);
        }
    } catch (error) {
        console.log(error.message);
    }
}

await main();
