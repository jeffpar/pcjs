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
            let dirEntry = null;
            let archive = await dezip.open(testFile);
            console.log(`Archive ${testFile} opened successfully`);
            do {
                //
                // Using a series of random positions and lengths, call archive.readCache() with each entry
                // from that series, and the compare the data in the archive's cache buffer with the data in
                // prefill's cache buffer (the latter uses a fixed-size cache that never changes).
                //
                // NOTE: readCache() should be considered a private method, but because it's critical to the
                // proper function of all other methods, we want to exercise it.
                //
                // let series = [
                //     [  100,   100],
                //     [   50,   100],
                //     [   25,   475],
                //     [  600,   100],
                //     [  700,   100],
                //     [  700,   200],
                //     [  800,   200],
                //     [ 2000,   500],
                //     [ 2100,   300],
                //     [ 1500,   500],
                //     [ 1000,   200],
                //     [ 4000,   500],
                //     [49000,   500],
                // ];
                // let series = Array.from({ length: 1000 }, () => [
                //     Math.floor(Math.random() * 49458),
                //     Math.floor(Math.random() * 4097)
                // ]);
                // let prefill = await dezip.open(testFile, {prefill: true});
                // for (let entry of series) {
                //     let [position, extent] = entry;
                //     console.log(`Testing position ${position} and extent ${extent}`);
                //     let [offset1, length1] = await dezip.readCache(archive, position, extent);
                //     let [offset2, length2] = await dezip.readCache(prefill, position, extent);
                //     if (length1 != length2) {
                //         throw new Error(`Data lengths do not match (${length1} vs. ${length2})`);
                //     }
                //     for (let i = 0; i < length1; i++) {
                //         let b1 = archive.cache.db.readUInt8(offset1 + i);
                //         let b2 = prefill.cache.db.readUInt8(offset2 + i);
                //         if (b1 != b2) {
                //             throw new Error(`Data bytes do not match at position ${position + i} (${b1} vs. ${b2})`);
                //         }
                //     }
                // }
                dirEntry = await dezip.readDirectory(archive, dirEntry);
                if (!dirEntry) break;
                console.log(`dirEntry: ${JSON.stringify(dirEntry, null, 2)}`);
            } while (true);
            let fileEntry = null;
            // do {
            //     fileEntry = await dezip.readFile(archive, fileEntry);
            //     if (!fileEntry) break;
            //     console.log(`fileEntry: ${JSON.stringify(fileEntry, null, 2)}`);
            // } while (true);
            await dezip.close(archive);
        }
    } catch (error) {
        console.log(error.message);
    }
}

await main();
