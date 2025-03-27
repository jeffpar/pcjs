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
 *      arcID,hash,modified,attr,size,name,description,messages,comment
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
 * After importing all the split CSVs into MySQL, add a foreign key constraint to the "files" table:
 *
 *      ALTER TABLE files ADD CONSTRAINT fk_arcID FOREIGN KEY (arcID) REFERENCES arcs(arcID) ON DELETE CASCADE ON UPDATE CASCADE;
 */
import fs from "fs";
import path from "path";
import glob from "glob";

/**
 * This class is primarily concerned with converting characters between CP437 and UTF-8, when
 * extracting files from PC media or recreating files onto PC media, which is why it is located
 * in the "pcx86" section of the project.
 *
 * @class CharSet
 */
class CharSet {

    static CP437 = [
        '\u0000', '\u263A', '\u263B', '\u2665', '\u2666', '\u2663', '\u2660', '\u2022',
        '\u25D8', '\u25CB', '\u25D9', '\u2642', '\u2640', '\u266A', '\u266B', '\u263C',
        '\u25BA', '\u25C4', '\u2195', '\u203C', '\u00B6', '\u00A7', '\u25AC', '\u21A8',
        '\u2191', '\u2193', '\u2192', '\u2190', '\u221F', '\u2194', '\u25B2', '\u25BC',
        '\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027',
        '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F',
        '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037',
        '\u0038', '\u0039', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F',
        '\u0040', '\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047',
        '\u0048', '\u0049', '\u004A', '\u004B', '\u004C', '\u004D', '\u004E', '\u004F',
        '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057',
        '\u0058', '\u0059', '\u005A', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F',
        '\u0060', '\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067',
        '\u0068', '\u0069', '\u006A', '\u006B', '\u006C', '\u006D', '\u006E', '\u006F',
        '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077',
        '\u0078', '\u0079', '\u007A', '\u007B', '\u007C', '\u007D', '\u007E', '\u2302',
        '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7',
        '\u00EA', '\u00EB', '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5',
        '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
        '\u00FF', '\u00D6', '\u00DC', '\u00A2', '\u00A3', '\u00A5', '\u20A7', '\u0192',
        '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA',
        '\u00BF', '\u2310', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB',
        '\u2591', '\u2592', '\u2593', '\u2502', '\u2524', '\u2561', '\u2562', '\u2556',
        '\u2555', '\u2563', '\u2551', '\u2557', '\u255D', '\u255C', '\u255B', '\u2510',
        '\u2514', '\u2534', '\u252C', '\u251C', '\u2500', '\u253C', '\u255E', '\u255F',
        '\u255A', '\u2554', '\u2569', '\u2566', '\u2560', '\u2550', '\u256C', '\u2567',
        '\u2568', '\u2564', '\u2565', '\u2559', '\u2558', '\u2552', '\u2553', '\u256B',
        '\u256A', '\u2518', '\u250C', '\u2588', '\u2584', '\u258C', '\u2590', '\u2580',
        '\u03B1', '\u00DF', '\u0393', '\u03C0', '\u03A3', '\u03C3', '\u00B5', '\u03C4',
        '\u03A6', '\u0398', '\u03A9', '\u03B4', '\u221E', '\u03C6', '\u03B5', '\u2229',
        '\u2261', '\u00B1', '\u2265', '\u2264', '\u2320', '\u2321', '\u00F7', '\u2248',
        '\u00B0', '\u2219', '\u00B7', '\u221A', '\u207F', '\u00B2', '\u25A0', '\u00A0'
    ];

    /**
     * fromCP437(data, translateControl)
     *
     * @param {number|Array|string|DataBuffer} data
     * @param {boolean} [translateControl] (true to translate control characters; default is false)
     * @returns {string}
     */
    static fromCP437(data, translateControl = false)
    {
        let u = "";
        if (typeof data == "number") data = [data];
        for (let i = 0; i < data.length; i++) {
            let c;
            if (Array.isArray(data)) {
                c = data[i];
            } else {
                c = typeof data == "string"? data.charCodeAt(i) : data.readUInt8(i);
            }
            if (c < CharSet.CP437.length && (c >= 32 || translateControl && c != 10 && c != 13 && c != 26)) {
                u += CharSet.CP437[c];
            } else {
                if (translateControl && c == 26) break;
                u += String.fromCharCode(c);
            }
        }
        return u;
    }
}

let headers = true;
let nMaxLines = 500000;
let nMaxDescription = 0;

let args = process.argv.slice(1);
let fileCSV = args[1];
let matchArg = fileCSV && fileCSV.match(/--(\d+)/);
if (matchArg) {
    nMaxLines = +matchArg[1];
    if (nMaxLines < 100) {
        console.log("number of lines must be at least 100");
        process.exit(1);
    }
    headers = false;
    fileCSV = args[2];
}
if (!fileCSV) {
    console.log("Usage: node split.js [--number] <CSV file>");
    process.exit(1);
}

let nFiles = 0;
let nArchives = 0;
let archiveLines = [];
let fileLines = [];
let fixLines = [];
let lastFileIndex = 0, lastFilePath = "";
let archiveMode = false;
let arcID = 10000000, fileID = 20000000;
let longestFileName = "", longestPathName = "", longestMethod = "", longestDescription = "", longestMessage = "";

//
// Let's collect all the names of the associated LST/TXT/PRN files, and then organize them by
// assigning each one to a lookup table that is first indexed by group "xxxx" (where "xxxx" is the
// first part of "xxxx-lists" path component) and is then indexed by tape "nnnn" (where "nnnn" is
// 4-digit number derived from the 1-to-4-digit number at the end of a LST/TXT/PRN basename).
//
let tapeLookup = {};
let tapeFiles = glob.sync("../Downloads/ibm-wgam-wbiz-collection/*-lists/**/*.{LST,TXT,PRN,lst,txt,prn}");
for (let tapeFile of tapeFiles) {
    let groupMatch = tapeFile.match(/\/([a-z]+)-lists\//);
    if (!groupMatch) {
        console.log(`unable to determine group for tape file ${tapeFile}`);
        continue;
    }
    let tapeMatch = tapeFile.match(/(\d{1,4})\.(lst|txt|prn)$/i);
    if (!tapeMatch) {
        console.log(`unable to determine tape for tape file ${tapeFile}`);
        continue;
    }
    let group = groupMatch[1];
    let tape = +tapeMatch[1];
    if (!tapeLookup[group]) tapeLookup[group] = {};
    if (tapeLookup[group][tape]) {
        let prevFile = tapeLookup[group][tape].tapeFile;
        let prevFix = prevFile.includes(".fix");
        let currFix = tapeFile.includes(".fix");
        let prevLst = prevFile.endsWith(".lst") || prevFile.endsWith(".LST");
        let currLst = tapeFile.endsWith(".lst") || tapeFile.endsWith(".LST");
        let prevStat = fs.statSync(prevFile);
        let currStat = fs.statSync(tapeFile);
        let prevSize = prevStat.size;
        let currSize = currStat.size;
        if (prevSize == currSize) {
            continue;
        }
        if (tapeLookup[group][tape].altFile) {
            // console.log(`multiple possible listings for tape ${tape} in group ${group}:\n\tprev: ${tapeLookup[group][tape].tapeFile}\n\t alt: ${tapeLookup[group][tape].altFile}\n\tcurr: ${tapeFile}`);
        }
        //
        // Prefer .fix over non-fix files, and .lst over non-lst files (for now)
        //
        if (!prevFix && currFix || !prevLst && currLst) {
            tapeLookup[group][tape].altFile = tapeLookup[group][tape].tapeFile;
            tapeLookup[group][tape].tapeFile = tapeFile;
        } else {
            tapeLookup[group][tape].altFile = tapeFile;
        }
        continue;
    }
    tapeLookup[group][tape] = {
        tapeFile,
        altFile: null,
        tapeArchives: null
    };
}

let findDescription = function(pathName) {
    let description = "";
    //
    // Extract the second path component from pathName, which should be something like "ibm####", "wbix####",
    // "wgam####", or "xtra####".  From that component, the letters provide the necessary group and the digits
    // provide the tape number, which we can then use to look up the tapeInfo in tapeLookup.
    //
    let match = pathName.match(/\/([a-z]+)(\d{1,4})(\.fix|)\//i);
    if (match) {
        let group = match[1].toLowerCase();
        let tape = +match[2];
        let tapeInfo = tapeLookup[group] && tapeLookup[group][tape];
        if (tapeInfo) {
            let archive;
            if (!tapeInfo.tapeArchives) {
                tapeInfo.tapeArchives = {};
                let buffer = fs.readFileSync(tapeInfo.tapeFile);
                let tapeListing = CharSet.fromCP437(buffer).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                //
                // Let's parse tapeListing into tapeArchives, which will be another lookup table indexed by
                // filenames, which then gives us the corresponding descriptions.
                //
                // The tape listings contain rows of information that look like:
                //
                //      Filename  Size  [Date]  Description
                //
                // The filenames are 8.3 archive filenames, the size is a decimal number, the date is of the form
                // "MM/DD/YY" (or "MM-DD-YYYY", and may not be present at all), and the description can be anything.
                // If the following line(s) do not match the above format, then the description is assumed to continue
                // on those line(s).
                //
                let lines = tapeListing.split(/\n/);
                let archiveDesc;
                for (let i = 0; i < lines.length; i++) {
                    let line = lines[i];
                    if (!line || line.charCodeAt(0) == 26) continue;
                    let match = line.match(/^(\S{1,8}\.?\S{1,3}?)\s+([\d,]+)\s+(\d+[/-]\d+[/-]\d+|)\s*(.*)$/);
                    if (match) {
                        if (archive) {
                            if (nMaxDescription && archiveDesc.length > nMaxDescription) {
                                console.log(`archive description exceeds ${nMaxDescription} characters in ${tapeInfo.tapeFile}:\n\t${archiveDesc}`);
                                archiveDesc = archiveDesc.slice(0, nMaxDescription-3) + "...";
                            }
                            tapeInfo.tapeArchives[archive] = archiveDesc;
                        }
                        archive = match[1];
                        archiveDesc = match[4];
                    } else if (archive && line.indexOf('\x00') < 0) {
                        if (archiveDesc) archiveDesc += ' ';
                        archiveDesc += line;
                        //
                        // Pipe characters (|) sometimes signal the beginning of a multi-line description,
                        // but sometimes not, and sometimes they appear in the middle of lines in a multi-line
                        // description, so let's do our best to eliminate them without screwing up the text.
                        //
                        archiveDesc = archiveDesc.replace(/\s*\|\s*/g, ' ').replace(/\s+/g, ' ').trim();
                    }
                }
                if (archive) {
                    if (nMaxDescription && archiveDesc.length > nMaxDescription) {
                        // console.log(`archive description exceeds ${nMaxDescription} characters in ${tapeInfo.tapeFile}:\n\t${archiveDesc}`);
                        archiveDesc = archiveDesc.slice(0, nMaxDescription-3) + "...";
                    }
                    tapeInfo.tapeArchives[archive] = archiveDesc;
                }
                let archives = Object.keys(tapeInfo.tapeArchives);
                if (!archives.length) {
                    console.log(`no archive details found in ${tapeInfo.tapeFile}`);
                }
            }
            archive = path.basename(pathName);
            description = tapeInfo.tapeArchives[archive];
            if (description == undefined) {
                // console.log(`unable to find description for archive ${archive} on tape ${tape} in group ${group}`);
                description = "";
            }
        } else {
            // console.log(`unable to find tape ${tape} in group ${group}`);
        }
    } else {
        console.log(`unable to determine group and tape for pathName ${pathName}`);
    }
    return description;
};

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

let flushArchives = function() {
    let write = true;
    let archiveCSV = `arcs.csv`;
    if (headers) {
        write = !nArchives++;
    } else {
        archiveCSV = `arcs-${++nArchives}.csv`;
    }
    let text = (headers && write? "arcID,hash,modified,attr,size,name,description,messages,comment\n" : "") + archiveLines.join("\n") + "\n";
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
    let fileCSV = `files.csv`;
    if (headers) {
        write = !nFiles++;
    } else {
        fileCSV = `files-${++nFiles}.csv`;
    }
    let text = (headers && write? "fileID,arcID,hash,modified,attr,size,compressed,method,name,path,messages,comment\n" : "") + fileLines.join("\n") + "\n";
    if (write) {
        console.log(`writing ${fileCSV}...`);
        fs.writeFileSync(fileCSV, text);
    } else {
        fs.appendFileSync(fileCSV, text);
    }
    fileLines = [];
};

let quoteString = function(s) {
    let sQuoted = s.replace(/"/g, '""');
    if (sQuoted.indexOf('"') >= 0 || sQuoted.indexOf(',') >= 0 || sQuoted == "NULL") {
        sQuoted = `"${sQuoted}"`;
    }
    return sQuoted;
};

let iLine = 0;
let prevMatch = {};
let arcTable = {};

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
        // This regex is intended to capture either a quoted OR unquoted name;
        // it also captures the rest of the line, which becomes the new remainder.
        //
        match = remainder.match(/^(?:"(.*?[^"])",|([^,]*),)(.*)$/);
        if (match) {
            //
            // That regex always returns the first capture group in match[1] and the second capture
            // group in match[2], and since they both can't be true, one of them will always be undefined.
            //
            fileName = match[1] || match[2];
            fileName = fileName.replace(/""/g, '"');
            if (fileName.length > longestFileName.length) longestFileName = fileName;
            remainder = match[3];
            //
            // Repeat the process for the path.
            //
            match = remainder.match(/^(?:"(.*?[^"])",|([^,]*),)(.*)$/);
            if (match) {
                pathName = match[1] || match[2];
                pathName = pathName.replace(/""/g, '"');
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
            //
            // Advance arcID, and update the previous file's arcID to match this new archive's arcID.
            //
            ++arcID;
            if (arcTable[pathName]) {
                arcTable[pathName] = arcID;
            }
            if (fileLines.length) {
                let prevFileIndex = fileLines.length - 1;
                fileLines[prevFileIndex] = fileLines[prevFileIndex].replace(/^(\d+),(\d+),/, `$1,${arcID},`);
            } else {
                console.log(`unable to update previous file with arcID ${arcID}`);
            }
            //
            // Let's see if we can find a matching LST/TXT file with a description for this archive.
            //
            let description = findDescription(pathName);
            if (description.length > longestDescription.length) longestDescription = description;
            archiveLines.push(`${arcID},${prevMatch.hash},${prevMatch.modified},${prevMatch.attr},${prevMatch.size},${quoteString(pathName)},${quoteString(description)},${remainder}`);
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
            let pathNameQuoted = quoteString(pathName);
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
            fileID++;
            let arcEntry = "NULL", arcName = null;
            if (fileName.match(/\.(ZIP|ARC)$/i)) {
                arcName = path.join(pathName, fileName);
            } else {
                let match = pathName.match(/^(.*\.(?:ZIP|ARC)).*$/i);
                if (match) {
                    arcName = match[1];
                }
            }
            if (arcName) {
                arcEntry = arcTable[arcName];
                if (!arcEntry) {
                    arcTable[arcName] = arcEntry = arcID;
                }
                if (arcEntry != arcID) {
                    // fixLines.push(`${fileID},${arcID},${arcEntry}`);
                }
            } else {
                // fixLines.push(`${fileID},${arcID},${arcEntry}`);
            }
            fileLines.push(`${fileID},${arcEntry},${hash},${modified},${attr},${size},${compressed},${method},${quoteString(fileName)},${quoteString(pathName)},${remainder}`);
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

if (fixLines.length) {
    console.log(`writing fixes.csv...`);
    fs.writeFileSync("fixes.csv", fixLines.join("\n") + "\n");
}

console.log(`longest file name: ${longestFileName.length} (${longestFileName})`);
console.log(`longest path name: ${longestPathName.length} (${longestPathName})`);
console.log(`longest method: ${longestMethod.length} (${longestMethod})`);
console.log(`longest description: ${longestDescription.length} (${longestDescription})`);
console.log(`longest message: ${longestMessage.length} (${longestMessage})`);
