/**
 * @fileoverview Command-line interface to disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import os         from "os";
import crypto     from "crypto";
import glob       from "glob";
import path       from "path";
import got        from "got";
import DataBuffer from "./nodebuffer.js";
import StdLib     from "./stdlib.js";
import Device     from "../../machines/modules/device.js";
import JSONLib    from "../../machines/modules/jsonlib.js";
import DiskInfo   from "../../machines/pcx86/modules/diskinfo.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);
let stdlib = new StdLib();
let moduleDir, rootDir, nMaxFiles, sFileIndex, useServer;

function printError(err)
{
    printf("%s\n", err.message);
}

/*
 * List of text file types to convert line endings from LF to CR+LF when "--normalize" is specified.
 * A warning is always displayed when we replace line endings in any file being copied to a disk image.
 *
 * NOTE: Some files, like ".BAS" files, aren't always ASCII, which is why we now call isASCII() on all
 * these file contents first.
 */
let asTextFileExts = [".MD", ".ME", ".BAS", ".BAT", ".ASM", ".LRF", ".MAK", ".TXT", ".XML"];

/**
 * compareDisks(sDisk1, sDisk2)
 *
 * @param {string} sDisk1
 * @param {string} sDisk2
 * @returns {boolean} (true if the contents of this buffer are equal to the contents of the specified buffer, false otherwise)
 */
function compareDisks(sDisk1, sDisk2)
{
    /*
     * Passing null for the encoding parameter tells readFile() to return a buffer (which, in our case, is a DataBuffer).
     */
    let db1 = readFile(sDisk1, null);
    let db2 = readFile(sDisk2, null);
    return db1 && db2 && db1.compare(db2) || false;
}

/**
 * createDisk(diskFile, diskette, argv)
 *
 * @param {string} diskFile
 * @param {Object} diskette
 * @param {Array} argv
 * @returns {DiskInfo|null}
 */
function createDisk(diskFile, diskette, argv)
{
    let di;
    let sArchiveFolder = "archive/";
    if (path.dirname(diskFile).endsWith("/disks")) {
        sArchiveFolder = "../archive/";
    }
    let sArchiveFile = path.join(path.dirname(diskFile), sArchiveFolder, path.basename(diskFile).replace(".json", ".img"));
    if (diskette.archive) {
        /*
         * The "archive" property determines what we look for in an "archive/" folder alongside the JSON disk image:
         *
         *  1) If it begins with a period, then we assume it's a file extension (eg, ".img", ".psi", etc)
         *  2) If it's "folder", then the name of the diskette is used as a folder name (with trailing slash)
         *  3) Anything else is more or less used as-is (and unless it contains a period, we add a trailing slash)
         */
        if (diskette.archive[0] == '/') {
            sArchiveFile = diskette.archive;
        } else if (diskette.archive[0] == '.') {
            sArchiveFile = sArchiveFile.replace(".img", diskette.archive);
        } else if (diskette.archive == "folder") {
            sArchiveFile = sArchiveFile.replace(".img", path.sep);
        } else {
            sArchiveFile = path.join(path.dirname(sArchiveFile), diskette.archive) + (diskette.archive.indexOf(".") < 0 && !diskette.archive.endsWith(path.sep)? path.sep : "");
        }
    } else if (!existsFile(sArchiveFile)) {
        /*
         * Try automatically switching from a "--disk" to a "--dir" operation if there's no IMG file.
         */
        sArchiveFile = sArchiveFile.replace(".img", path.sep);
    }
    let sectorIDs = argv['sectorID'] || diskette.argv['sectorID'];
    let sectorErrors = argv['sectorError'] || diskette.argv['sectorError'];
    let suppData = argv['suppData'] || diskette.argv['suppData'];
    if (suppData) suppData = readFile(suppData);
    let name = path.basename(sArchiveFile);
    if (sArchiveFile.endsWith(path.sep)) {
        diskette.command = "--dir " + name;
        let match = diskette.format && diskette.format.match(/^PC([0-9]+)K/);
        let kbTarget = match && +match[1] || 0;
        di = readDir(sArchiveFile, diskette.label, diskette.normalize, kbTarget);
    } else {
        diskette.command = "--disk " + name;
        di = readDisk(sArchiveFile, false, sectorIDs, sectorErrors, suppData);
    }
    diskette.archive = sArchiveFile;
    return di;
}

/**
 * dumpSector(di, sector, offset, limit)
 *
 * @param {DiskInfo} di
 * @param {Sector} sector
 * @param {number} [offset]
 * @param {number} [limit]
 * @returns {string}
 */
function dumpSector(di, sector, offset = 0, limit = -1)
{
    let sBytes = "", sChars = "", sLines = "";
    if (limit < 0) limit = di.cbSector;
    while (offset < limit) {
        let b = di.read(sector, offset);
        if (b < 0) break;
        if (!sLines || offset % 16 == 0) sLines += sprintf("%#06x  ", offset);
        sBytes += sprintf("%02x ", b);
        sChars += (b >= 0x20 && b < 0x7f? String.fromCharCode(b) : '.');
        if (++offset % 16 == 0) {
            sLines += sprintf("%48s %16s\n", sBytes, sChars);
            sBytes = sChars = "";
        }
    }
    if (sBytes) sLines += sprintf("%-48s %-16s\n", sBytes, sChars);
    return sLines;
}

/**
 * existsFile(sFile)
 *
 * @param {string} sFile
 * @returns {boolean}
 */
function existsFile(sFile)
{
    try {
        sFile = getFullPath(sFile);
        return fs.existsSync(sFile);
    } catch(err) {
        printError(err);
    }
    return false;
}

/**
 * getHash(data, type)
 *
 * @param {Array.<number>|DataBuffer} data
 * @param {string} [type] (eg, "md5")
 * @returns {string}
 */
function getHash(data, type = "md5")
{
    let db;
    if (data instanceof DataBuffer) {
        db = data;
    } else {
        db = new DataBuffer(data);
    }
    return crypto.createHash(type).update(db.buffer).digest('hex');
}

/**
 * getFullPath(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function getFullPath(sFile)
{
    if (sFile[0] == '~') {
        sFile = os.homedir() + sFile.substr(1);
    }
    else if (isServerRoot(sFile)) {
        sFile = rootDir + sFile;
    }
    return sFile;
}

/**
 * isServerRoot(diskFile)
 *
 * @param {string} diskFile
 * @returns {boolean}
 */
function isServerRoot(diskFile)
{
    /*
     * In addition to disk server paths, we had to add /configs (for diskette config files) and /software (for Markdown files
     * containing supplementary copy-protection disk data).
     */
    return !!(diskFile.match(/^\/(configs|software|diskettes|gamedisks|harddisks|decdisks|pcsig[0-9a-z]*-disks|private|disks-cds)\//));
}

/**
 * isASCII(data)
 *
 * @param {string} data
 * @return {boolean} true if sData is entirely ASCII (ie, no bytes with bit 7 set)
 */
function isASCII(data)
{
    for (let i = 0; i < data.length; i++) {
        let b = data.charCodeAt(i);
        if (b & 0x80) return false;
    }
    return true;
}

/**
 * isTextFile(sFile)
 *
 * @param {string} sFile
 * @return {boolean} true if the filename contains a known text file extension, false if unknown
 */
function isTextFile(sFile)
{
    let sFileUC = sFile.toUpperCase();
    for (let i = 0; i < asTextFileExts.length; i++) {
        if (sFileUC.endsWith(asTextFileExts[i])) return true;
    }
    return false;
}

/**
 * mapDiskToServer(diskFile)
 *
 * @param {string} diskFile
 * @returns {string}
 */
function mapDiskToServer(diskFile)
{
    if (useServer || !existsFile(getFullPath(diskFile))) {
        diskFile = diskFile.replace(/^\/(diskettes|gamedisks|harddisks|decdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$1.pcjs.org/").replace(/^\/disks-cds\/([^/]*)\//, "https://$1.pcjs.org/");
    }
    return diskFile;
}

/**
 * printFileDesc(diskFile, diskName, desc)
 *
 * @param {string} diskFile
 * @param {string} diskName
 * @param {Object} desc
 */
function printFileDesc(diskFile, diskName, desc)
{
    printf("%-32s  %-12s  %s  %s %7d  %s\n", desc[DiskInfo.FILEDESC.HASH] || "-".repeat(32), desc[DiskInfo.FILEDESC.NAME], desc[DiskInfo.FILEDESC.DATE], desc[DiskInfo.FILEDESC.ATTR], desc[DiskInfo.FILEDESC.SIZE] || 0, diskName + ':' + desc[DiskInfo.FILEDESC.PATH]);
}

/**
 * printManifest(diskFile, diskName, manifest)
 *
 * @param {string} diskFile
 * @param {string} diskName
 * @param {Array.<FILEDESC>} manifest
 */
function printManifest(diskFile, diskName, manifest)
{
    manifest.forEach(function printManifestFile(desc) {
        printFileDesc(diskFile, diskName, desc);
    });
}

/**
 * processDisk(di, diskFile, argv, diskette)
 *
 * @param {DiskInfo} di
 * @param {string} diskFile
 * @param {Array} argv
 * @param {Object} [diskette] (if present, then we were invoked by readAll(), so any --output option should be ignored)
 */
function processDisk(di, diskFile, argv, diskette)
{
    di.setArgs(argv.slice(1).join(' '));

    /*
     * Any "--format=xxx" acts as a filter function; if the disk's format doesn't contain
     * the specified format, we skip the disk.
     */
    if (typeof argv['format'] == "string") {
        if (di.getFormat().indexOf(argv['format']) < 0) {
            return;
        }
    }

    if (!argv['quiet']) {
        printf("processing %s: %d bytes (checksum %d)\n", di.getName(), di.getSize(), di.getChecksum());
    }

    let sFindName = argv['file'];
    if (typeof sFindName == "string") {
        let sFindText = argv['find'];
        if (typeof sFindText != "string") sFindText = undefined;
        /*
         * TODO: Implement support for finding text in findFile()....
         */
        let desc = di.findFile(sFindName, sFindText);
        if (desc) {
            printFileDesc(di.getName(), desc);
            if (argv['index']) {
                /*
                 * We cheat and search for matching hash values in the provided index; this is much faster than laboriously
                 * opening and searching all the other disk images, even when they DO contain pre-generated file tables.
                 */
                if (sFileIndex === undefined) {
                    sFileIndex = readFile(argv['index']);
                    if (!sFileIndex) sFileIndex = null;
                }
                let cMatches = 0;
                if (sFileIndex) {
                    let re = new RegExp("^" + desc[DiskInfo.FILEDESC.HASH] + ".*$", "gm"), match;
                    while ((match = re.exec(sFileIndex))) {
                        if (match[0].indexOf(diskFile) >= 0) continue;
                        if (!cMatches++) printf("see also:\n");
                        printf("%s\n", match[0]);
                    }
                }
                if (!cMatches) printf("no matches\n");
            }
        }
    }

    let chs = argv['dump'];
    if (chs) {
        if (typeof chs != "string") {
            printf("specify --dump=C:H:S[:N]\n");
        } else {
            let values = chs.split(':');
            let iCylinder = +values[0], iHead = +values[1], idSector = +values[2], nSectors = +values[3] || 1;
            while (nSectors-- > 0) {
                let sector = di.seek(iCylinder, iHead, idSector);
                if (!sector) {
                    printf("unable to find %d:%d:%d\n", iCylinder, iHead, idSector);
                    break;
                }
                let sLines = sprintf("CHS=%d:%d:%d\n", iCylinder, iHead, idSector);
                sLines += dumpSector(di, sector, 0);
                printf("%s\n", sLines);
                idSector++;
            }
        }
    }

    if (argv['list']) {
        let sLines = "";
        let iVolume = +argv['volume'];
        if (isNaN(iVolume)) iVolume = -1;
        if (argv['list'] == "unused") {
            let lba = -1;
            while ((lba = di.getUnusedSector(iVolume, lba)) >= 0) {
                let sector = di.getSector(lba);
                let offset = di.getUnusedSectorData(sector);
                sLines += sprintf("\nLBA=%d\n", lba);
                /*
                 * There are two partial sector usage cases: the current sector contains the last N bytes of a file,
                 * or the sector is COMPLETELY unused (ie, offset is zero).  When would a file have a completely unused
                 * sector?  When the disk's cluster size is 2 or more sectors.  If a file ends somewhere in the middle
                 * of a cluster, leaving 1 or more sectors in that cluster unused, we still "flag" all the sectors in
                 * the cluster as belonging to the file.
                 *
                 * This is why we don't differentiate those cases on the basis of whether there's an associated file,
                 * but simply on whether the offset is zero.
                 */
                if (offset) {
                    let iFile = sector[DiskInfo.SECTOR.FILE_INDEX];
                    device.assert(iFile != undefined);
                    let file = di.fileTable[iFile];
                    let cbPartial = file.size - sector[DiskInfo.SECTOR.FILE_OFFSET];
                    sLines += sprintf("last %d bytes of %s:\n", cbPartial, file.path);
                    sLines += dumpSector(di, sector, 0, offset);
                }
                sLines += sprintf("unused %d bytes:\n", di.cbSector - offset);
                sLines += dumpSector(di, sector, offset);
            }
            if (!sLines) sLines = "no unused data space on disk";
        } else {
            sLines = di.getFileListing(iVolume) || "\tno listing available\n";
        }
        printf("%s\n", sLines);
    }

    if (argv['extract']) {
        let manifest = di.getFileManifest();
        manifest.forEach(function extractManifestFile(desc) {
            /*
             * Parse each file descriptor in much the same way that buildFileTableFromJSON() does.  That function
             * doesn't get the file's CONTENTS, because it's working with the file descriptors that have been stored
             * in a JSON file (where CONTENTS would be redundant and a waste of space).  Here, we call getFileManifest(),
             * which calls getFileDesc(true), which returns a complete file descriptor that includes CONTENTS.
             */
            let sPath = desc[DiskInfo.FILEDESC.PATH];
            if (sPath[0] == '/') sPath = sPath.substr(1);       // PATH should ALWAYS start with a slash, but let's be safe
            let name = path.basename(sPath);
            let size = desc[DiskInfo.FILEDESC.SIZE] || 0;
            let attr = +desc[DiskInfo.FILEDESC.ATTR];
            /*
             * We call parseDate() requesting a *local* date from the timestamp, because that's exactly how we're going
             * to use it: as a local file modification time.  Ordinarily we want to deal exclusively in UTC dates, unpolluted
             * by timezone information, but here we don't really have a choice.  Trying to fix the date after the fact,
             * by adding Date.getTimezoneOffset(), doesn't always work either, probably due to daylight savings time considerations;
             * best not to go down that rabbit hole.
             */
            let date = device.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
            let contents = desc[DiskInfo.FILEDESC.CONTENTS] || [];
            let db = new DataBuffer(contents);
            device.assert(size == db.length);
            let subDir = typeof argv['extract'] != "string"? di.getName() : "";
            if (subDir || name == argv['extract']) {
                let fSuccess = false;
                if (subDir) sPath = path.join(subDir, sPath);
                let dir = path.dirname(sPath);
                if (!existsFile(dir)) fs.mkdirSync(dir, {recursive: true});
                if (attr & DiskInfo.ATTR.SUBDIR) {
                    if (!existsFile(sPath)) {
                        fs.mkdirSync(sPath);
                        fSuccess = true;
                    }
                } else if (!(attr & DiskInfo.ATTR.VOLUME)) {
                    fSuccess = writeFile(sPath, db, true, argv['overwrite']);
                }
                if (fSuccess) fs.utimesSync(sPath, date, date);
            }
        });
    }

    if (argv['manifest']) {
        let manifest = di.getFileManifest(getHash);
        printManifest(diskFile, di.getName(), manifest);
    }

    /*
     * If --rewrite, then rewrite the JSON disk image.  --overwrite is implicit.
     */
    if (argv['rewrite']) {
        if (diskFile.endsWith(".json")) {
            writeDisk(diskFile, di, argv['legacy'], 0, true);
        }
    }

    /*
     * If --checkdisk, then let's load the corresponding archived disk image (.IMG) as well, convert it to JSON,
     * load the JSON as a disk image, save it as a temp .IMG, and verify that temp image and archived image are identical.
     *
     * You must ALSO specify --rebuild if you want the JSON disk image updated as well.
     */
    if (argv['checkdisk'] && diskette) {
        if (diskette.format) {
            let matchFormat = diskette.format.match(/PC([0-9]+)K/);
            if (matchFormat) {
                let diskSize = di.getSize();
                if (+matchFormat[1] * 1024 != diskSize) {
                    printf("warning: format '%s' does not match disk size (%d) for %s\n", diskette.format, diskSize, diskFile);
                }
            }
        }
        if (diskFile.endsWith(".json")) {
            if (typeof argv['checkdisk'] == "string" && diskFile.indexOf(argv['checkdisk']) < 0) return;
            let diTemp = createDisk(diskFile, diskette, argv);
            if (diTemp) {
                let sTempJSON = path.join(rootDir, "tmp", path.basename(diskFile).replace(/\.[a-z]+$/, "") + ".json");
                diTemp.setArgs(sprintf("%s --output %s%s", diskette.command, sTempJSON, diskette.args));
                writeDisk(sTempJSON, diTemp, argv['legacy'], 0, true, false);
                let warning = false;
                if (diskette.archive.endsWith(".img")) {
                    let json = diTemp.getJSON();
                    diTemp.buildDiskFromJSON(json);
                    let sTempIMG = sTempJSON.replace(".json",".img");
                    writeDisk(sTempIMG, diTemp, true, 0, true, false);
                    if (!compareDisks(sTempIMG, diskette.archive)) {
                        printf("warning: %s unsuccessfully rebuilt\n", diskette.archive);
                        warning = true;
                    } else {
                        fs.unlinkSync(sTempIMG);
                    }
                }
                if (!warning) {
                    if (argv['rebuild']) {
                        printf("rebuilding %s\n", diskFile);
                        fs.renameSync(sTempJSON, getFullPath(diskFile));
                    } else {
                        fs.unlinkSync(sTempJSON);
                    }
                }
            }
        }
    }

    /*
     * If --checkpage, then get the disk's listing and see if it's up-to-date in the website's index.md.
     *
     * Additionally, if the page doesn't have a machine, add one, tailored to the software's requirements as best we can.
     *
     * You must ALSO specify --rebuild if you want the index.md updated (or created) as well.
     */
    if (argv['checkpage'] && diskette && !diskette.hidden) {
        if (diskFile.indexOf("/private") >= 0) return;
        let sListing = di.getFileListing(0, 4);
        if (!sListing) return;
        let sIndex = "", sIndexNew = "", sAction = "";
        let sHeading = "\n### Directory of " + diskette.name + "\n";
        let sIndexFile = path.join(path.dirname(diskFile.replace(/\/(diskettes|gamedisks|harddisks|pcsig[0-9a-z-]*|private)\//, "/software/")), "index.md");
        if (existsFile(sIndexFile)) {
            sIndex = sIndexNew = readFile(sIndexFile);
            sAction = "updated";
        } else {
            if (diskette.title) {
                let permalink = path.dirname(diskette.path.replace(/^\/[^/]+/, "/software")) + path.sep;
                sIndexNew = "---\nlayout: page\ntitle: " + diskette.title + "\npermalink: " + permalink + "\n---\n";
                sIndexNew += sHeading + sListing;
                sAction = "created";
            }
        }

        /*
         * Step 1: make sure there's a machine present to load/examine/test the software.
         */
        let sMachineEmbed = "";
        let matchFrontMatter = sIndexNew.match(/^---\n([\s\S]*?\n)---\n/);
        if (matchFrontMatter && diskette) {
            let sFrontMatter = matchFrontMatter[1];
            let matchMachines = sFrontMatter.match(/^machines: *\n([\s\S]*?\n)(\S|$)/m);
            if (matchMachines) {
                /*
                 * If this was a generated machine and --rebuild is set, then we'll regenerate it.
                 */
                if (matchMachines[1].indexOf("autoGen: true") >= 0 && matchMachines[1].indexOf(diskette.name) >= 0 && argv['rebuild']) {
                    sFrontMatter = sFrontMatter.replace(matchMachines[0], matchMachines[2]);
                    sIndexNew = sIndexNew.replace(/\n\{% include machine.html .*?%\}\n/, "");
                    matchMachines = null;
                }
            }
            if (!matchMachines) {
                /*
                 * To add a compatible machine, we look at a few aspects of the diskette itself:
                 *
                 *      if the diskette format > 360K or any file dates are >= 1986, then a PC AT ("5170") is preferred;
                 *      otherwise, if any file dates are >= 1984, a PC XT ("5160") is preferred;
                 *      otherwise, a PC ("5150") should suffice.
                 *
                 * However, a diskette's "version" definition can also include a "@hardware" configuration with "options"
                 * that supplement or override those initial preferences:
                 *
                 *      manufacturer, such as "ibm" or "compaq"
                 *      model, such as "5150" or "5160"
                 *      video preference, such as "mda" or "cga"
                 *      memory preference, such "256kb" or "640kb"
                 *      hardware preference, such as "com1" or "mouse"
                 *      operating system (aka boot disk) preference, such as "PC DOS 2.00 (Disk 1)"
                 *
                 * Browse diskettes.json for more examples (look for "@hardware" properties).
                 *
                 * TODO: Finish support for all of the above preferences (eg, mouse support, serial and parallel ports, etc).
                 *
                 * TODO: Consider using the @hardware 'machine' property to allow a specific machine to be used; when that property
                 * is named 'url' instead, the /_includes/explorer/software.html template uses it to create a hardware_url link for the
                 * software, but we REALLY prefer having dedicated pages for each piece of software.
                 */
                let diskSize = di.getSize() / 1024;
                let dateNewest = di.getNewestDate(true);
                let yearNewest = dateNewest && dateNewest.getFullYear() || 1981;
                let hardware = diskette.hardware || {}, options = "";
                if (hardware) options = hardware.options || "";
                let aOptions = options.split(",");
                let findOption = function(aPossibleOptions) {
                    for (let i = 0; i < aPossibleOptions.length; i++) {
                        if (!aPossibleOptions[i]) continue;
                        for (let j = 0; j < aOptions.length; j++) {
                            if (aOptions[j].indexOf(aPossibleOptions[i]) >= 0) return aOptions[j];
                        }
                    }
                    return aPossibleOptions[0];
                };
                let findConfig = function(configPath) {
                    configPath = getFullPath(configPath);
                    let configPossible;
                    let aPossibleConfigs = glob.sync(configPath);
                    let optionMemory = findOption(["kb"]);
                    for (let i = 0; i < aPossibleConfigs.length; i++) {
                        let configFile = aPossibleConfigs[i];
                        if (configFile.indexOf("debugger") > 0 || configFile.indexOf("array") > 0) continue;
                        configPossible = configFile.substr(rootDir.length);
                        if (configFile.indexOf(optionMemory) >= 0) break;
                    }
                    return configPossible;
                };
                /*
                 * Now that we have all the raw inputs ("ingredients"), let's toss some defaults together.
                 */
                let sAutoGen = "    autoGen: true\n";
                let sAutoType = hardware.autoType;
                if (sAutoType == undefined) sAutoType = diskette.autoType;
                let manufacturer = findOption(["ibm","compaq"]);
                let sDefaultIBMModel = diskSize > 360 || yearNewest >= 1986? "5170" : (yearNewest >= 1984? "5160" : "5150");
                let sDefaultCOMPAQModel = diskSize > 360 || yearNewest >= 1986? "deskpro386" : "portable";
                let model = findOption({
                    "ibm": [sDefaultIBMModel, "5150","5160","5170"],
                    "compaq": [sDefaultCOMPAQModel, "portable","deskpro386"]
                }[manufacturer]);
                let video = findOption(["*","mda","cga","ega","vga","vdu"]);
                let configFile = hardware.config || findConfig("/configs/pcx86/machine/" + manufacturer + '/' + model + '/' + video + "/**/machine.xml");
                if (configFile == "none") configFile = "";
                if (configFile) {
                    let bootDisk = findOption(["", "DOS"]);
                    let demoDisk = diskette.name;
                    if (diskette.bootable) {
                        bootDisk = demoDisk;
                        demoDisk = "";
                    } else {
                        if (sAutoType == undefined) sAutoType = "$date\\r$time\\rB:\\rDIR\\r";
                    }
                    let sMachineID = (model.length <= 4? manufacturer : "") + model;
                    let sMachine = "  - id: " + sMachineID + "\n    type: pcx86\n    config: " + configFile + "\n";
                    for (let prop in hardware) {
                        if (prop == "config" || prop == "machine" || prop == "options" || prop == "url" || prop[0] == '@') continue;
                        let chQuote = "";
                        if (prop == "drives" || prop == "floppyDrives") {
                            chQuote = "'";
                            if (prop == "drives") bootDisk = "None";
                            sAutoType = "";
                        }
                        sMachine += "    " + prop + ": " + chQuote + hardware[prop] + chQuote + "\n";
                    }
                    if (bootDisk) bootDisk = "      A: \"" + bootDisk + "\"\n";
                    if (demoDisk) demoDisk = "      B: \"" + demoDisk + "\"\n";
                    let sAutoMount = "    autoMount:\n" + bootDisk + demoDisk;
                    if (sAutoType) sAutoType = "    autoType: " + sAutoType + "\n";
                    sFrontMatter += "machines:\n" + sMachine + sAutoGen + sAutoMount + (sAutoType || "");
                    sIndexNew = sIndexNew.replace(matchFrontMatter[1], sFrontMatter);
                    sMachineEmbed = "\n{% include machine.html id=\"" + sMachineID + "\" %}\n";
                }
            }
        }

        /*
         * Step 2: Making sure there's an up-to-date directory listing...
         */
        let sMatch = "\n(##+)\\s+Directory of " + diskette.name.replace("(","\\(").replace(")","\\)").replace("*","\\*").replace("+","\\+") + " *\n([\\s\\S]*?)(\n[^{\\s]|$)";
        let matchDirectory = sIndexNew.match(new RegExp(sMatch));
        if (matchDirectory) {
            if (matchDirectory[1].length != 3) {
                printf("warning: directory heading level '%s' should really be '###'\n", matchDirectory[1]);
            }
            let matchInclude = matchDirectory[2].match(/\n\{%.*?%}\n/);
            sIndexNew = sIndexNew.replace(matchDirectory[0], sHeading + (matchInclude? matchInclude[0] : "") + sListing + matchDirectory[3]);
        } else {
            /*
             * Look for the last "Directory of ..." entry and insert this directory listing after it (and if there's none, append it).
             */
            sListing = sHeading + sListing;
            let matchLast, match, re = /\n(##+)\\s+Directory of [^\n]*\n([\\s\\S]*?)\n(\\S|$)/g;
            while ((match = re.exec(sIndexNew))) {
                matchLast = match;
            }
            let index = sIndexNew.length, length = 0;
            if (matchLast) {
                index = matchLast.index;
                length = matchLast[0].length;
                if (matchLast[3]) length--;
            }
            sIndexNew = sIndexNew.substr(0, index + length) + sListing + sIndex.substr(index + length);
        }

        /*
         * Step 3: If a generated machine needs to be embedded, put it ahead of the first directory listing (which is why we waited until now).
         */
        if (sMachineEmbed) {
            matchDirectory = sIndexNew.match(/\n(##+)\s+Directory of /);
            if (matchDirectory) {
                sIndexNew = sIndexNew.replace(matchDirectory[0], sMachineEmbed + matchDirectory[0]);
            } else {
                printf("warning: unable to embed machine: %s\n", sIndexFile);
            }
        }

        if (!sIndexNew) {
            printf("\tmissing index for \"%s\": %s\n", diskette.title, sIndexFile);
        }
        else if (sIndexNew != sIndex) {
            if (argv['rebuild']) {
                if (writeFile(getFullPath(sIndexFile), sIndexNew, true, true)) {
                    printf("\t%s index for \"%s\": %s\n", sAction, diskette.title, sIndexFile);
                }
            } else {
                printf("\tindex for \"%s\" should be %s; use --rebuild\n", diskette.title, sAction);
            }
        }
    }

    if (!diskette) {
        let output = argv['output'] || argv[1];
        if (argv['boot']) {
            di.updateBootSector(readFile(argv['boot'], null));
        }
        if (output) writeDisk(output, di, argv['legacy'], argv['indent']? 2 : 0, argv['overwrite'], true, argv['writable']);
    }
}

/**
 * readAll(argv)
 *
 * If "--all=[string]" then the set of disks is limited to those where pathname contains [string].
 *
 * @param {Array} argv
 */
function readAll(argv)
{
    let family = "pcx86";
    let cConfigs = 0, cDisks = 0;
    let asFiles = glob.sync(path.join(rootDir, "/configs/" + family + "/*.json"));

    let messages;
    if (argv['quiet']) {
        messages = device.setMessages(Device.MESSAGE.WARN + Device.MESSAGE.ERROR, false);
    }

    let aDiskNames = {};        // we use this table of disk names to detect non-unique disk names
    asFiles.forEach(function readAllConfigs(configFile) {

        configFile = configFile.substr(rootDir.length);
        if (argv['verbose']) printf("reading %s...\n", configFile);
        let library = readJSON(configFile);
        if (library) {
            let aDiskettes = [];
            JSONLib.parseDiskettes(aDiskettes, library, "/pcx86", "/diskettes");
            aDiskettes.forEach(function readAllDiskettes(diskette) {
                diskette.argc = 0;
                diskette.argv = [];
                if (!diskette.args) {
                    diskette.args = "";
                } else {
                    [diskette.argc, diskette.argv] = stdlib.getArgs(diskette.args);
                    diskette.args = " " + diskette.args;
                }
                if (library['@local']) {
                    diskette.path = diskette.path.replace(library['@server'], library['@local']);
                }
                let diskFile = diskette.path;
                if (typeof argv['all'] == "string") {
                    if (argv['verbose']) printf("checking %s for '%s'...\n", diskFile, argv['all']);
                    if (diskFile.indexOf(argv['all']) < 0) return;
                }
                let sName = path.basename(diskFile);
                if (aDiskNames[sName]) {
                    if (argv['verbose']) printf("warning: %s disk name is not unique (see %s)\n", diskFile, aDiskNames[sName]);
                } else {
                    aDiskNames[sName] = diskFile;
                }
                let di = readDisk(diskFile);
                if (!di) {
                    di = createDisk(diskFile, diskette, argv);
                    if (di) {
                        writeDisk(diskFile, di);
                    }
                }
                if (di) {
                    processDisk(di, diskFile, argv, diskette);
                    cDisks++;
                }
            });
        }
        cConfigs++;
    });

    printf("%d config(s), %d disks(s) processed\n\n", cConfigs, cDisks);
    if (messages) device.setMessages(messages, true);
}

/**
 * readDir(sDir, sLabel, fNormalize, kbTarget, nMax)
 *
 * @param {string} sDir (directory name)
 * @param {string} [sLabel] (if not set with --label, then basename(sDir) will be used instead)
 * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
 * @param {number} [kbTarget] (target disk size, in Kb; zero or undefined if no target disk size)
 * @param {number} [nMax] (maximum number of files to read; default is 256)
 * @returns {DiskInfo|null}
 */
function readDir(sDir, sLabel, fNormalize, kbTarget, nMax)
{
    let di, diskName;
    if (sDir.endsWith('/')) {
        diskName = path.basename(sDir);
        if (!sLabel) {
            sLabel = path.basename(sDir).replace(/^.*-([^0-9][^-]+)$/, "$1");
        }
    } else {
        diskName = path.basename(path.dirname(sDir));
        /*
         * When we're given a list of files, we don't pick a default label; use --label if you want one.
         */
    }
    sDir = getFullPath(sDir);
    try {
        nMaxFiles = nMax || 256;
        let aFileData = readDirFiles(sDir, sLabel, fNormalize);
        di = new DiskInfo(device);
        let db = new DataBuffer();
        if (!di.buildDiskFromFiles(db, diskName, aFileData, kbTarget || 0)) {
            di = null;
        }
    } catch(err) {
        printError(err);
        di = null;
    }
    return di;
}

/**
 * readDirFiles(sDir, sLabel, fNormalize)
 *
 * @param {string} sDir (directory name)
 * @param {boolean|null} [sLabel] (optional volume label; this should NEVER be set when reading subdirectories)
 * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
 * @returns {Array.<FileData>}
 */
function readDirFiles(sDir, sLabel, fNormalize = false)
{
    let aFileData = [];

    let asFiles;
    if (sDir.endsWith('/')) {
        asFiles = fs.readdirSync(sDir);
        for (let i = 0; i < asFiles.length; i++) {
            asFiles[i] = path.join(sDir, asFiles[i]);
        }
    } else {
        asFiles = sDir.split(',');
        sDir = ".";
        for (let i = 0; i < asFiles.length; i++) {
            let sDirFile = path.dirname(asFiles[i]);
            if (sDirFile != ".") sDir = sDirFile;
            asFiles[i] = path.join(sDir, path.basename(asFiles[i]));
        }
    }

    /*
     * There are two special label strings you can pass on the command-line:
     *
     *      "--label none" (for no volume label at all)
     *      "--label default" (for our default volume label; currently "PCJS")
     *
     * Any other string following "--label" will be used as-is, and if no "--label" is specified
     * at all, we build a volume label from the basename of the directory.
     */
    if (sLabel == "none") {
        sLabel = "";
    } else if (sLabel == "default") {
        sLabel = DiskInfo.PCJS_LABEL;
    }

    /*
     * The label, if any, will always be first in the list; this shouldn't be a concern since
     * there is currently no support for building "bootable" disks from a set of files.
     */
    if (sLabel) {
        /*
         * I prefer a hard-coded date/time, because it avoids creating different disk images
         * time this utility is run.
         *
         * And remember, of all the Date() constructor parameters, month is the oddball;
         * it's interpreted as the actual month - 1, so 8 corresponds to September.  Brilliant.
         */
        let dateLabel = new Date(1989, 8, 27, 3, 0, 0);
        let file = {path: sDir, name: sLabel, attr: DiskInfo.ATTR.VOLUME, date: dateLabel, size: 0};
        aFileData.push(file);
    }

    for (let iFile = 0; iFile < asFiles.length && nMaxFiles > 0; iFile++, nMaxFiles--) {
        /*
         * fs.readdir() already excludes "." and ".." but there are also a wide variety of hidden
         * files on *nix systems that begin with a period, which in general we should ignore, too.
         *
         * TODO: Consider an override option that will allow hidden file(s) to be included as well.
         */
        let sPath = asFiles[iFile];
        let sName = path.basename(sPath);
        if (sName.charAt(0) == '.') continue;
        let file = {path: sPath, name: sName};
        let stats = fs.statSync(sPath);
        file.date = stats.mtime;
        if (stats.isDirectory()) {
            file.attr = DiskInfo.ATTR.SUBDIR;
            file.size = -1;
            file.data = new DataBuffer();
            file.files = readDirFiles(sPath + '/', null, fNormalize);
        } else {
            let fText = fNormalize && isTextFile(sName);
            let data = readFile(sPath, fText? "utf8" : null);
            if (!data) continue;
            if (data.length != stats.size) {
                printf("file data length (%d) does not match file size (%d)\n", data.length, stats.size);
            }
            if (fText) {
                if (isASCII(data)) {
                    let dataNew = data.replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
                    if (dataNew != data) printf("replaced line endings in %s (size changed from %d to %d bytes)\n", sName, data.length, dataNew.length);
                    data = dataNew;
                } else {
                    printf("non-ASCII data in %s (line endings unchanged)\n", sName);
                }
                data = new DataBuffer(data);
            }
            file.attr = DiskInfo.ATTR.ARCHIVE;
            file.size = data.length;
            file.data = data;
        }
        aFileData.push(file);
    }
    return aFileData;
}

/**
 * readDisk(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} diskFile
 * @param {boolean} [forceBPB]
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 * @returns {DiskInfo|null}
 */
function readDisk(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
{
    let db, di
    try {
        let diskName = path.basename(diskFile);
        di = new DiskInfo(device, diskName);
        if (diskName.endsWith(".json")) {
            db = readFile(diskFile, "utf8");
            if (!db) {
                di = null;
            } else {
                if (!di.buildDiskFromJSON(db)) di = null;
            }
        }
        else {
            /*
             * Passing null for the encoding parameter tells readFile() to return a buffer (which, in our case, is a DataBuffer).
             */
            db = readFile(diskFile, null);
            if (!db) {
                di = null;
            } else {
                let hash = getHash(db);
                if (diskName.endsWith(".psi")) {
                    if (!di.buildDiskFromPSI(db)) di = null;
                } else {
                    if (!di.buildDiskFromBuffer(db, hash, forceBPB, sectorIDs, sectorErrors, suppData)) di = null;
                }
            }
        }
    } catch(err) {
        printError(err);
        return null;
    }
    return di;
}

/**
 * readFile(sFile, encoding)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 * @returns {DataBuffer|string|undefined}
 */
function readFile(sFile, encoding = "utf8")
{
    let data;
    if (sFile) {
        try {
            sFile = getFullPath(sFile);
            data = fs.readFileSync(sFile, encoding);
            if (!encoding) data = new DataBuffer(data);
        } catch(err) {
            printError(err);
        }
    }
    return data;
}

/**
 * readJSON(sFile)
 *
 * @param {string} sFile
 * @returns {Object|undefined}
 */
function readJSON(sFile)
{
    let data, json;
    try {
        data = readFile(sFile);
        json = JSON.parse(data);
    } catch(err) {
        printError(err);
    }
    return json;
}

/**
 * writeDisk(diskFile, di, fLegacy, indent, fOverwrite, fPrint, fWritable)
 *
 * @param {string} diskFile
 * @param {DiskInfo} di
 * @param {boolean} [fLegacy]
 * @param {number} [indent]
 * @param {boolean} [fOverwrite]
 * @param {boolean} [fPrint]
 * @param {boolean} [fWritable]
 */
function writeDisk(diskFile, di, fLegacy = false, indent = 0, fOverwrite = false, fPrint = true, fWritable = false)
{
    let diskName = path.basename(diskFile);
    try {
        let fExists = existsFile(diskFile);
        if (!fExists || fOverwrite) {
            let data;
            let diskFileLC = diskFile.toLowerCase();
            if (diskFileLC.endsWith(".json")) {
                data = di.getJSON(getHash, fLegacy, 0);
            } else {
                let db = new DataBuffer(di.getSize());
                if (di.getData(db, fLegacy)) data = db.buffer;
            }
            if (data) {
                if (fPrint) printf("writing %s...\n", diskFile);
                diskFile = getFullPath(diskFile);
                let sDir = path.dirname(diskFile);
                if (!existsFile(sDir)) fs.mkdirSync(sDir, {recursive: true});
                if (fExists) fs.unlinkSync(diskFile);
                fs.writeFileSync(diskFile, data);
                if (diskFileLC.endsWith(".img") && !fWritable) fs.chmodSync(diskFile, 0o444);
            } else {
                printf("%s not written, no data\n", diskName);
            }
        } else {
            printf("%s exists, use --overwrite to replace\n", diskName);
        }
    }
    catch(err) {
        printError(err);
    }
}

/**
 * writeFile(sFile, data, fCreateDir, fOverwrite)
 *
 * @param {string} sFile
 * @param {DataBuffer|string} data
 * @param {boolean} [fCreateDir]
 * @param {boolean} [fOverwrite]
 * @returns {boolean}
 */
function writeFile(sFile, data, fCreateDir, fOverwrite)
{
    if (sFile) {
        try {
            if (data instanceof DataBuffer) {
                data = data.buffer;
            }
            if (fCreateDir) {
                let sDir = path.dirname(sFile);
                if (!existsFile(sDir)) fs.mkdirSync(sDir, {recursive: true});
            }
            if (!existsFile(sFile) || fOverwrite) {
                fs.writeFileSync(sFile, data);
                return true;
            }
            printf("%s exists, use --overwrite to replace\n", sFile);
        } catch(err) {
            printError(err);
        }
    }
    return false;
}

/**
 * processDiskAsync(input, argv)
 *
 * @param {string} input
 * @param {Array} argv
 */
async function processDiskAsync(input, argv)
{
    let di = await readDiskAsync(input, argv['forceBPB'], argv['sectorID'], argv['sectorError'], readFile(argv['suppData']));
    if (di) {
        processDisk(di, input, argv);
    }
}

/**
 * readDiskAsync(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} diskFile
 * @param {boolean} [forceBPB]
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 */
async function readDiskAsync(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
{
    let db, di
    try {
        let diskName = path.basename(diskFile);
        di = new DiskInfo(device, diskName);
        if (diskName.endsWith(".json")) {
            diskFile = mapDiskToServer(diskFile);
            if (diskFile.startsWith("http")) {
                printf("fetching %s\n", diskFile);
                let response = await got(diskFile);
                db = response.body;
            } else {
                db = await readFileAsync(diskFile, "utf8");
            }
            if (!db) {
                di = null;
            } else {
                if (!di.buildDiskFromJSON(db)) di = null;
            }
        }
        else {
            /*
             * Passing null for the encoding parameter tells readFile() to return a buffer (which, in our case, is a DataBuffer).
             */
            db = await readFileAsync(diskFile, null);
            if (!db) {
                di = null;
            } else {
                let hash = getHash(db);
                if (diskName.endsWith(".psi")) {
                    if (!di.buildDiskFromPSI(db)) di = null;
                } else {
                    if (!di.buildDiskFromBuffer(db, hash, forceBPB, sectorIDs, sectorErrors, suppData)) di = null;
                }
            }
        }
    } catch(err) {
        printError(err);
        return null;
    }
    return di;
}

/**
 * readFileAsync(sFile, encoding)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 */
function readFileAsync(sFile, encoding = "utf8")
{
    sFile = getFullPath(sFile);
    return new Promise((resolve, reject) => {
        fs.readFile(sFile, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

/**
 * main(argc, argv)
 *
 * Usage:
 *
 *      node diskimage.js [input disk image or directory] [output disk image] [options]
 *
 * You can use --disk and --dir to explicitly specify an input disk or directory, or you can implicitly
 * specify one as the first non-option argument (a directory is indicated by a trailing '/'); similarly,
 * you can use --output to explicitly specify an output disk image, or you can implicitly specify one as
 * the second non-option argument.
 *
 * To add files to a disk in a specific order, use --files=[comma-separated list of files].  And if you
 * want a particular boot sector, use --boot=[sector image file].
 *
 * Use --all to process all catalogued disks with the specified options, or --all=[subset] to process only
 * disks whose path or name contains [subset]; any input/output disk/directory names are ignored when
 * using --all.
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    let argv0 = argv[0].split(' ');
    let options = argv0.slice(1).join(' ');

    Device.DEBUG = !!argv['debug'];
    moduleDir = path.dirname(argv0[0]);
    rootDir = path.join(moduleDir, "../..");
    useServer = !!argv['server'];

    printf("DiskImage v%s\n%s\n%s\n", Device.VERSION, Device.COPYRIGHT, (options? sprintf("options: %s\n", options) : ""));

    if (Device.DEBUG) {
        device.setMessages(Device.MESSAGE.FILE, true);
    }

    device.setMessages(Device.MESSAGE.DISK + Device.MESSAGE.WARN + Device.MESSAGE.ERROR, true);

    if (argv['all']) {
        readAll(argv);
        return;
    }

    let input = argv['disk'];
    if (input) {
        /*
         * If you use --disk to specify a disk image, then I call the experimental async function.
         */
        processDiskAsync(input, argv);
        return;
    }

    let fDirectory = false
    input = argv['dir'];
    if (input) {
        fDirectory = true;          // directories should end with a trailing slash, but we'll make sure
        if (!input.endsWith('/')) input += '/';
    } else {
        input = argv['files'];
        if (input) {
            fDirectory = true;      // files must be a comma-separated list of files (and NO trailing slash)
        } else {
            input = argv[1];
            argv.splice(1, 1);
            fDirectory = !!(input && input.endsWith('/'));
        }
    }

    let di;
    if (input) {
        if (fDirectory) {
            /*
             * readDir() takes care of both directories and files, distinguishing between them on the basis of a trailing slash.
             */
            di = readDir(input, argv['label'], argv['normalize'], +argv['target'], +argv['maxfiles']);
            if (di) {
                let name = argv['output'] || argv[1];
                if (name) di.setName(path.basename(name));
            }
        } else {
            di = readDisk(input, argv['forceBPB'], argv['sectorID'], argv['sectorError'], readFile(argv['suppData']));
        }
    }
    if (di === null) return;

    if (di) {
        processDisk(di, input, argv);
        return;
    }

    printf("nothing to do\n");
}

main(...stdlib.getArgs());
