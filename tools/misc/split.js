/**
 * @fileoverview Utility for processing CSV files created by diskimage.js
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Overview
 * --------
 *
 * Starting with a CSV file created by diskimage.js; eg:
 *
 *      diskimage.js --all="*.{ZIP,ARC}" --list=csv > archives.csv
 *
 * this splits that CSV file into two smaller sets of files (archives-#.csv and files-#.csv),
 * making it easier to import the data into "archives" and "files" tables in a MySQL "software"
 * database.
 *
 * Every line of the input CSV (well, that we care about) should have the following fields:
 *
 *      hash,modified,attr,size,compressed,method,path,messages,comment
 *
 * unless the line continues the previous line's "comment" field (since they can be multi-line).
 *
 * For every line that begins with a 32-bit "hash", 19-char "modified" date and time, decimal
 * "attr", "size", and "compressed" values, and a "method" string, we extract the name of the
 * archive from the remainder of the line (ie, everything up to but not including the first
 * colon of "path").  We then record that name as the current archiveName and increment archiveID.
 *
 * Every time we encounter a new archiveName, we push a line with the following fields to the
 * archiveLines array:
 *
 *      archiveID,name,messages,comment
 *
 * We then increment fileID and push a line with the following fields to the fileLines array:
 *
 *      fileID,archiveID,hash,modified,attr,size,compressed,method,name,messages,comment
 *
 * where name is the everything in the original "path" after the colon.  This line must then
 * be followed by every line that does NOT begin with the above values (ie, any comment lines that
 * follow it).
 *
 * Once we have pushed 500000 lines to fileLines, we write them to files-#.csv and empty the array;
 * ditto for archiveLines, which is written to archives-#.csv.
 */
import fs from "fs";

let args = process.argv.slice(2);
let i = 0;
let fileCSV = args[i++];
if (!fileCSV) {
    console.log("Usage: node split.js <csvfile>");
    process.exit(1);
}

let lines = [];
let bufferSize = 1024 * 1024; // 1MB
let buffer = Buffer.alloc(bufferSize);
let leftover = "";

console.log(`reading ${fileCSV}...`);
let fd = fs.openSync(fileCSV, "r");

while (true) {
    let bytesRead = fs.readSync(fd, buffer, 0, bufferSize, null);
    if (!bytesRead) break;
    let chunk = leftover + buffer.toString("utf-8", 0, bytesRead);
    let chunkLines = chunk.split('\n');
    leftover = chunkLines.pop();
    for (let line of chunkLines) {
        lines.push(line.replace(/\r$/, ''));
    }
}
if (leftover) {
    lines.push(leftover.replace(/\r$/, ''));
}
fs.closeSync(fd);

let nFiles = 0;
let nArchives = 0;
let nMaxLines = 500000;
let headers = false;    // if true, this also implies we will NOT create split files
let archiveLines = [];
let fileLines = [];
let archiveName = "", archiveMode = false;
let archiveID = 10000000, fileID = 20000000;
let longestFileName = 0, longestArchiveName = 0, longestMethod = 0, longestMessage = 0;

let flushArchives = function() {
    let write = true;
    if (headers) {
        write = !nArchives;
        if (nArchives) nArchives--;
    }
    let archiveCSV = `archives-${++nArchives}.csv`;
    let text = (headers? "archiveID,name,messages,comment\n" : "") + archiveLines.join("\n");
    if (write) {
        console.log(`writing ${archiveCSV}...`);
        fs.writeFileSync(archiveCSV, text);
    } else {
        fs.appendFileSync(archiveCSV, text);
    }
    archiveLines = [];
};

let flushFiles = function() {
    let write = true;
    if (headers) {
        write = !nFiles;
        if (nFiles) nFiles--;
    }
    let fileCSV = `files-${++nFiles}.csv`;
    let text = (headers? "fileID,archiveID,hash,modified,attr,size,compressed,method,name,messages,comment\n" : "") + fileLines.join("\n");
    if (write) {
        console.log(`writing ${fileCSV}...`);
        fs.writeFileSync(fileCSV, text);
    } else {
        fs.appendFileSync(fileCSV, text);
    }
    fileLines = [];
};

let iLine = 0;
for (let line of lines) {
    iLine++;
    let match = line.match(/^([a-z0-9-]{32}|),(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|),(\d+|),(-?\d+|),(-?\d+|),([^,]+|),(.*)$/);
    if (match) {
        //
        // The final capture group contains the remainder (ie, path, messages, and comment).
        //
        let hash = match[1];
        let modified = match[2];
        let attr = match[3];
        let size = match[4];
        let compressed = match[5];
        let method = match[6];
        if (method.length > longestMethod) longestMethod = method.length;
        let fullPath, remainder = match[7];
        //
        // This regex is intended to capture either a quoted OR unquoted path; note that either form is
        // permitted to contain quotes (but only the '""' double-double-quote variety), and only the former
        // is permitted to contain commas.
        //
        // It also captures the remainder of the line, which becomes the new remainder (messages and comment).
        //
        let matchPath = remainder.match(/^(?:"(.*?[^"])",|([^,]*),)(.*)$/);
        if (matchPath) {
            //
            // That regex always returns the first capture group in matchPath[1] and the second capture
            // group in matchPath[2], and since they both can't be true, one of them will always be undefined.
            //
            fullPath = matchPath[1] || matchPath[2];
            remainder = matchPath[3];
        } else {
            console.log(`unable to parse path in line ${iLine}: ${line}`);
            archiveMode = null;
            continue;
        }
        let matchMessage = remainder.match(/^"([^"]+)"/);
        if (matchMessage) {
            if (matchMessage[1].length > longestMessage) longestMessage = matchMessage[1].length;
        }
        let archiveNext = fullPath.split(":")[0];
        if (archiveName != archiveNext) {
            archiveName = archiveNext;
            if (archiveName.length > longestArchiveName) longestArchiveName = archiveName.length;
            //
            // Before we push another line, if we've reached nMaxLines, let's write what we've got.
            //
            if (archiveLines.length >= nMaxLines) {
                flushArchives();
            }
            let name = archiveName;
            if (name.indexOf('"') >= 0) {
                name = name.replace(/"/g, '""');
            }
            if (name.indexOf(',') >= 0) {
                name = `"${name}"`;
            }
            archiveLines.push(`${++archiveID},${name},${remainder}`);
            archiveMode = true;
        }
        else if (fullPath == archiveName || fullPath.indexOf(':') < 0) {
            //
            // We could try to update the original archiveLine with any new message info,
            // but it's easier to just re-record the line with a different archiveID.
            //
            archiveLines.push(`${++archiveID},${fullPath},${remainder}`);
            archiveMode = null;
        }
        else {
            let fileName = fullPath;
            if (fileName.indexOf(':') < 0) {
                //
                // This can happen when a processing error occurs in the middle of an archive,
                // and we don't actually know what file was being processed.
                //
            } else {
                fileName = fileName.split(":")[1];
            }
            if (fileName[0] == '/') fileName = fileName.slice(1);
            if (fileName.length > longestFileName) longestFileName = fileName.length;
            //
            // Before we push another line, if we've reached nMaxLines, let's write what we've got.
            //
            if (fileLines.length >= nMaxLines) {
                flushFiles();
            }
            //
            // NOTE: While my original intention was to only include fileName (not fullPath) in files-#.csv
            // (because it wastes space), it's more convenient to have it all in one place... for now.
            //
            let name = fullPath;
            if (name.indexOf('"') >= 0) {
                name = name.replace(/"/g, '""');
            }
            if (name.indexOf(',') >= 0) {
                name = `"${name}"`;
            }
            fileLines.push(`${++fileID},${archiveID},${hash},${modified},${attr},${size},${compressed},${method},${name},${remainder}`);
            archiveMode = false;
        }
    }
    else {
        if (line.match(/^(warning: |error: )/)) {
            console.log(`skipping line ${iLine}: ${line}`);
        } else if (archiveMode !== null) {
            if (!archiveMode) {
                fileLines.push(line);
            } else {
                archiveLines.push(line);
            }
        }
    }
}

if (archiveLines.length) {
    flushArchives();
}

if (fileLines.length) {
    flushFiles();
}

console.log(`longest file name: ${longestFileName}`);
console.log(`longest archive name: ${longestArchiveName}`);
console.log(`longest method: ${longestMethod}`);
console.log(`longest message: ${longestMessage}`);
