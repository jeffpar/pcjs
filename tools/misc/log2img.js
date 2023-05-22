/*
 * Quick and dirty conversion of the LOG file produced by the DISK2COM app to an IMG file.
 */

import fs from "fs";

let hex = function(s) {
    return parseInt(s, 16);
};

let nCylinders = 40, nHeads = 1, nSectors = 8;
let cbDiskData = nCylinders * nHeads * nSectors * 512;
let logData = fs.readFileSync("disk2com.log", "utf8");
let sector, reSector = /([0-9A-Z][0-9A-Z]):([0-9A-Z][0-9A-Z]):([0-9A-Z][0-9A-Z]).*\r?\n([\s\S]*?)\r?\n([0-9A-Z][0-9A-Z])\r?\n/g;
let bytes = new Array(cbDiskData);
while ((sector = reSector.exec(logData))) {
    let cylNum = hex(sector[1]);
    let headNum = hex(sector[2]);
    let secNum = hex(sector[3]);
    let byteNum = sector[4].match(/[0-9A-Z][0-9A-Z]/g);
    let checkSum = 0;
    let offset = cylNum * (nHeads * nSectors * 512) + headNum * (nSectors * 512) + (secNum - 1) * 512;
    for (let i = 0; i < byteNum.length; i++) {
        let b = hex(byteNum[i]);
        if (bytes[offset] !== undefined && bytes[offset] !== b) {
            console.log("C(" + cylNum + "):H(" + headNum + "):S(" + secNum + "):O(" + i + "): new value (" + b + ") differs from old value (" + bytes[offset] + ")");
        } else {
            bytes[offset++] = b;
        }
        checkSum += b;
    }
    console.log("C(" + cylNum + "):H(" + headNum + "):S(" + secNum + "): " + byteNum.length + " bytes");
    checkSum &= 0xff;
    if ((checkSum & 0xff) != hex(sector[5])) {
        console.log("checksum mismatch (original = " + sector[5] + ", calculated = " + checkSum.toString(16) + ")");
    }
}

let buf = Buffer.alloc(cbDiskData, 0xee);
for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] !== undefined) buf[i] = bytes[i];
}

fs.writeFileSync("disk2com.img", buf);
