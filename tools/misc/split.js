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
 *      diskimage.js --dir=. --list=csv
 *
 * or:
 *
 *      diskimage.js --all="*.{ZIP,ARC}" --list=csv
 *
 * this splits that CSV file into two smaller sets of files (arcs-#.csv and files-#.csv),
 * making it easier to import the data into "arcs" and "files" tables in a MySQL "software"
 * database.
 *
 * Every line of the input CSV (well, that we care about) should have the following fields:
 *
 *      hash,modified,attr,size,compressed,method,name,path,messages,comment
 *
 * unless the line continues the previous line's "comment" field (since they can be multi-line).
 *
 * Every line that begins with a 32-bit "hash", 19-char "modified" date and time, decimal
 * "attr", "size", and "compressed" values, and a "method" string signals a new file... unless
 * attr is 8, which signals a new archive.
 *
 * Every time we encounter a new archive, we push a line with the following fields to the
 * archiveLines array:
 *
 *      arcID,hash,modified,attr,size,name,messages,comment
 *
 * We then increment fileID and push a line with the following fields to the fileLines array:
 *
 *      fileID,arcID,hash,modified,attr,size,compressed,method,name,path,messages,comment
 *
 * Those lines must then be followed by every line that does NOT begin with the above values
 * (ie, any comment lines that follow it).
 *
 * Once we have pushed 500000 lines to fileLines, we write them to files-#.csv and empty the array;
 * ditto for archiveLines, which is written to arcs-#.csv.
 *
 * NOTES
 *
 * After importing all the split CSVs into MySQL, I noticed that the arcID of the first entry for
 * each archive in the "files" CSVs was off by 1, so I fixed those arcIDs after-the-fact:
 *
 *      UPDATE files SET arcID = arcID + 1 WHERE method = 'None' AND (name LIKE '%.ZIP' OR name LIKE '%.ARC');
 *
 * Once that was fixed, I was then able to add a foreign key constraint to the "files" table:
 *
 *      ALTER TABLE files ADD CONSTRAINT fk_arc_id FOREIGN KEY (arcID) REFERENCES arcs(arcID) ON DELETE CASCADE ON UPDATE CASCADE;
 */
import fs from "fs";
import path from "path";

let args = process.argv.slice(2);
let i = 0;
let fileCSV = args[i++];
if (!fileCSV) {
    console.log("Usage: node split.js <csv file>");
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
let headers = false;    // if true, this also means we will NOT create split files
let archiveLines = [];
let fileLines = [];
let lastFileIndex = 0, lastFilePath = "";
let archiveMode = false;
let arcID = 10000000, fileID = 20000000;
let longestFileName = "", longestPathName = "", longestMethod = "", longestMessage = "";

let flushArchives = function() {
    let write = true;
    if (headers) {
        write = !nArchives;
        if (nArchives) nArchives--;
    }
    let archiveCSV = `arcs-${++nArchives}.csv`;
    let text = (headers? "arcID,hash,modified,attr,size,name,messages,comment\n" : "") + archiveLines.join("\n") + "\n";
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
    let text = (headers? "fileID,arcID,hash,modified,attr,size,compressed,method,name,path,messages,comment\n" : "") + fileLines.join("\n") + "\n";
    if (write) {
        console.log(`writing ${fileCSV}...`);
        fs.writeFileSync(fileCSV, text);
    } else {
        fs.appendFileSync(fileCSV, text);
    }
    fileLines = [];
};

let iLine = 0;
let prevMatch = {};

for (let line of lines) {
    iLine++;
    let match = line.match(/^([a-z0-9-]{32}|),(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|),(\d+|),(-?\d+|),(-?\d+|),([^,]+|),(.*)$/);
    if (match) {
        //
        // The final capture group contains the remainder (ie, name, path, messages, and comment).
        //
        let hash = match[1];
        if (hash == "--------------------------------") hash = "NULL";
        let modified = match[2];
        let attr = match[3];
        let size = match[4];
        let compressed = match[5];
        let method = match[6];
        if (method.length > longestMethod.length) longestMethod = method;
        let fileName, pathName, remainder = match[7];
        //
        // This regex is intended to capture either a quoted OR unquoted name; note that either form
        // is permitted to contain quotes (but only the '""' double double-quote variety), and only the former
        // is permitted to contain commas.
        //
        // It also captures the rest of the line, which becomes the new remainder (path, messages, and comment).
        //
        match = remainder.match(/^(?:"(.*?[^"])",|([^,]*),)(.*)$/);
        if (match) {
            //
            // That regex always returns the first capture group in matchPath[1] and the second capture
            // group in matchPath[2], and since they both can't be true, one of them will always be undefined.
            //
            fileName = match[1] || match[2];
            if (fileName.length > longestFileName.length) longestFileName = fileName;
            remainder = match[3];
            //
            // Repeat the process for the path.
            //
            match = remainder.match(/^(?:"(.*?[^"])",|([^,]*),)(.*)$/);
            if (match) {
                pathName = match[1] || match[2];
                if (pathName.length > longestPathName.length) longestPathName = pathName;
                remainder = match[3];
            }
        }
        if (!match) {
            console.log(`unable to parse file names in line ${iLine}: ${line}`);
            archiveMode = null;
            continue;
        }
        match = remainder.match(/^"([^"]+)"/);
        if (match) {
            if (match[1].length > longestMessage.length) longestMessage = match[1];
        }
        if (+attr == 8) {
            //
            // Before we push another line, if we've reached nMaxLines, let's write what we've got.
            //
            if (archiveLines.length >= nMaxLines) {
                flushArchives();
            }
            let pathPrev = path.join(prevMatch.pathName, prevMatch.fileName);
            if (pathName != pathPrev || modified != prevMatch.modified) {
                console.log(`archive ${pathName} does not match previous file ${pathPrev}`);
            }
            let pathNameQuoted = pathName.replace(/"/g, '""');
            if (pathNameQuoted.indexOf(',') >= 0 || pathNameQuoted == "NULL") pathNameQuoted = `"${pathNameQuoted}"`;
            archiveLines.push(`${++arcID},${prevMatch.hash},${prevMatch.modified},${prevMatch.attr},${prevMatch.size},${pathNameQuoted},${remainder}`);
            archiveMode = true;
        }
        else if (+size == -1) {
            //
            // Ignore directory entries...
            //
        } else if (!hash) {
            //
            // Lines without a hash indicate an unexpected error in the processing of an archive;
            // our only goal here is to capture the error message, appending it to the file's previous entry.
            //
            // Messages, if any, are always quoted.  This differs from fileName and pathName fields, which are only quoted
            // if they contain commas.
            //
            let i, processed = false;
            let fullPath = path.join(pathName, fileName);
            let pathNameQuoted = pathName.replace(/"/g, '""');
            if (pathNameQuoted.indexOf(',') >= 0 || pathNameQuoted == "NULL") pathNameQuoted = `"${pathNameQuoted}"`;
            if (lastFilePath == fullPath && fileLines[lastFileIndex] && (i = fileLines[lastFileIndex].indexOf(pathNameQuoted)) >= 0) {
                let lastFileLine = fileLines[lastFileIndex];
                i += pathNameQuoted.length;
                //
                // When there's no message in lastFileLine (as indicated by ",," after pathName), we can just replace
                // ",," with "," + remainder.
                //
                if (lastFileLine.slice(i, i + 2) == ",,") {
                    fileLines[lastFileIndex] = lastFileLine.replace(pathNameQuoted + ",,", pathNameQuoted + "," + remainder);
                    processed = true;
                } else {
                    //
                    // This case is more work, because we have to merge the new message with the existing message(s) in
                    // lastFileLine.
                    //
                    let matchNew = remainder.match(/^"([^"]+)"/);
                    let message = matchNew? matchNew[1] : "";
                    let matchLast = lastFileLine.slice(i).match(/^,"([^"]+)"/);
                    let lastMessage = matchLast? matchLast[1] : "";
                    if (message && lastMessage) {
                        message = `${lastMessage}; ${message}`;
                        fileLines[lastFileIndex] = lastFileLine.replace(lastMessage, message);
                        if (message.length > longestMessage.length) longestMessage = message;
                        processed = true;
                    }
                }
            }
            if (!processed) {
                console.log(`unable to find process line ${line}`);
            }
        } else {
            //
            // Before we push another line, if we've reached nMaxLines, let's write what we've got.
            //
            if (fileLines.length >= nMaxLines) {
                flushFiles();
                lastFileIndex = 0;
            }
            lastFilePath = path.join(pathName, fileName);
            lastFileIndex = fileLines.length;
            let fileNameQuoted = fileName.replace(/"/g, '""');
            if (fileNameQuoted.indexOf(',') >= 0 || fileNameQuoted == "NULL") fileNameQuoted = `"${fileNameQuoted}"`;
            let pathNameQuoted = pathName.replace(/"/g, '""');
            if (pathNameQuoted.indexOf(',') >= 0 || pathNameQuoted == "NULL") pathNameQuoted = `"${pathNameQuoted}"`;
            fileLines.push(`${++fileID},${arcID},${hash},${modified},${attr},${size},${compressed},${method},${fileNameQuoted},${pathNameQuoted},${remainder}`);
            archiveMode = false;
        }
        prevMatch = {
            hash, modified, attr, size, compressed, method, fileName, pathName
        };
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

console.log(`longest file name: ${longestFileName.length} (${longestFileName})`);
console.log(`longest path name: ${longestPathName.length} (${longestPathName})`);
console.log(`longest method: ${longestMethod.length} (${longestMethod})`);
console.log(`longest message: ${longestMessage.length} (${longestMessage})`);
