/**
 * Script to test the Dezip class.
 */

import fs from "fs/promises";
import Dezip from "../dezip.js";

const dezip = new Dezip({fetch, open: fs.open}, {scratchSize: 4096});
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
            let prefill = await dezip.open(testFile, {prefill: true});
            console.log(`Archive ${testFile} opened successfully`);
            do {
                //
                // Using a series of random offsets and lengths, call archive.fillScratch() with each entry
                // from that series, and the compare the data in the archive's scratch buffer with the data in
                // prefill's scratch buffer.
                //
                let series = [
                    [100, 100],
                    [100, 200],
                    [400, 100],
                    [400, 200],
                    [49000, 100],
                    [49000, 1000],
                ];
                for (let entry of series) {
                    console.log(`Testing position ${entry[0]} and length ${entry[1]}`);
                    let [offset, length] = await dezip.fillScratch(archive, entry[0], entry[1]);
                    let [offsetPre, lengthPre] = await dezip.fillScratch(prefill, entry[0], entry[1]);
                    if (length != lengthPre) {
                        throw new Error(`Data lengths do not match for offset ${offset} and length ${length}`);
                    }
                    for (let i = 0; i < length; i++) {
                        let b = archive.scratch.db.readUInt8(offset + i);
                        let bPre = prefill.scratch.db.readUInt8(offsetPre + i);
                        if (b != bPre) {
                            throw new Error(`Data does not match for offset ${offset + i}: ${b} != ${bPre}`);
                        }
                    }
                }
                let header = await dezip.readHeader(archive);
                if (!header) break;
                console.log(`header for "${header.fname}"`);
                // let data = await archive.readData(entry);
                // console.log(`Data length: ${data.length}`);
            } while (true);
            await dezip.close(archive);
        }
    } catch (error) {
        console.log(error.message);
    }
}

await main();
