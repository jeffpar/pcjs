/*
 * Quick and dirty conversion of the LOG file produced by the DISK2COM app to an IMG file.
 */

"use strict";

let fs = require('fs');

let hex = function(s) {
    return parseInt(s, 16);
};

let logData = fs.readFileSync("NU201-SIDEB.log", "utf8");
let sector, reSector = /([0-9A-Z][0-9A-Z]):([0-9A-Z][0-9A-Z]):([0-9A-Z][0-9A-Z]).*\r?\n([\s\S]*?)\r?\n([0-9A-Z][0-9A-Z])\r?\n/g;
let bytes = [];
while ((sector = reSector.exec(logData))) {
    let cylNum = hex(sector[1]);
    let headNum = hex(sector[2]);
    let secNum = hex(sector[3]);
    let byteNum = sector[4].match(/[0-9A-Z][0-9A-Z]/g);
    let checkSum = 0;
    for (let i = 0; i < byteNum.length; i++) {
        let b = hex(byteNum[i]);
        bytes.push(b);
        checkSum += b;
    }
    console.log("C(" + cylNum + "):H(" + headNum + "):S(" + secNum + "): " + byteNum.length + " bytes");
    checkSum &= 0xff;
    if ((checkSum & 0xff) != hex(sector[5])) {
        console.log("checksum mismatch (original = " + sector[5] + ", calculated = " + checkSum.toString(16) + ")");
    }
}

let buf = Buffer.alloc(bytes.length);
for (let i = 0; i < bytes.length; i++) {
    buf[i] = bytes[i];
}

fs.writeFileSync("NU201-SIDEB.img", buf);
