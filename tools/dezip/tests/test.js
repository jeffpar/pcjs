/**
 * Script to test Dezip functions.
 */

import fs from "fs/promises";
import Dezip from "../dezip.js";

const dezip = new Dezip({fetch, open: fs.open}, {cacheSize: 4096});
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
            let header;
            let archive = await dezip.open(testFile);
            let prefill = await dezip.open(testFile, {prefill: true});
            console.log(`Archive ${testFile} opened successfully`);
            do {
                //
                // Using a series of random positions and lengths, call archive.fillCache() with each entry
                // from that series, and the compare the data in the archive's cache buffer with the data in
                // prefill's cache buffer (the latter uses a fixed-size cache that never changes).
                //
                // NOTE: fillCache() should be considered a private method, but because it's critical to the
                // proper function of all other methods, we want to exercise it.
                //
                // while (true) {
                //     let series = Array.from({ length: 1000 }, () => [
                //         Math.floor(Math.random() * 49458),
                //         Math.floor(Math.random() * 4097)
                //     ]);
                //     for (let entry of series) {
                //         let [position, extent] = entry;
                //         console.log(`Testing position ${position} and extent ${extent}`);
                //         let [offset1, length1] = await dezip.fillCache(archive, position, extent);
                //         let [offset2, length2] = await dezip.fillCache(prefill, position, extent);
                //         if (length1 != length2) {
                //             throw new Error(`Data lengths do not match (${length1} vs. ${length2})`);
                //         }
                //         for (let i = 0; i < length1; i++) {
                //             let b1 = archive.cache.db.readUInt8(offset1 + i);
                //             let b2 = prefill.cache.db.readUInt8(offset2 + i);
                //             if (b1 != b2) {
                //                 throw new Error(`Data bytes do not match at position ${position + i} (${b1} vs. ${b2})`);
                //             }
                //         }
                //     }
                // }
                //
                header = await dezip.readHeader(archive, header);
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
