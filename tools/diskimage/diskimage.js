#!/usr/bin/env node
/**
 * @fileoverview Command-line interface to disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import glob       from "glob";
import path       from "path";
import DiskLib    from "../modules/disklib.js";
import PCJSLib    from "../modules/pcjslib.js";
import StreamZip  from "../modules/streamzip.js";       // PCjs replacement for "node-stream-zip"
import JSONLib    from "../../machines/modules/v2/jsonlib.js";
import StrLib     from "../../machines/modules/v2/strlib.js";
import CharSet    from "../../machines/pcx86/modules/v2/charset.js";
import Device     from "../../machines/modules/v3/device.js";
import MESSAGE    from "../../machines/modules/v3/message.js";
import DiskInfo   from "../../machines/pcx86/modules/v3/diskinfo.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);
let diskLib = new DiskLib(device);
let rootDir, sFileIndexCache;

/**
 * compareDisks(sDisk1, sDisk2)
 *
 * @param {string} sDisk1
 * @param {string} sDisk2
 * @returns {boolean} (true if the contents of this buffer are equal to the contents of the specified buffer, false otherwise)
 */
function compareDisks(sDisk1, sDisk2)
{
    /**
     * Passing null for the encoding parameter tells readFileSync() to return a buffer (which, in our case, is a DataBuffer).
     */
    let db1 = diskLib.readFileSync(sDisk1, null);
    let db2 = diskLib.readFileSync(sDisk2, null);
    return db1 && db2 && db1.compare(db2) || false;
}

/**
 * createDisk(diskFile, diskette, argv, done)
 *
 * @param {string} diskFile
 * @param {Object} diskette
 * @param {Array} argv
 * @param {function(DiskInfo)} done
 */
function createDisk(diskFile, diskette, argv, done)
{
    let sArchiveFolder = "archive/";
    if (path.dirname(diskFile).endsWith("/disks")) {
        sArchiveFolder = "../archive/";
    }
    let sArchiveFile = path.join(path.dirname(diskFile), sArchiveFolder, path.basename(diskFile).replace(".json", ".img"));
    if (diskette.archive) {
        /**
         * The "archive" property determines what we look for in an "archive/" folder alongside the JSON disk image:
         *
         *  1) If it begins with a period, then we assume it's a file extension (eg, ".img", ".psi", etc)
         *  2) If it's "folder", then the name of the diskette is used as a folder name (with trailing slash)
         *  3) Anything else is more or less used as-is (and unless it contains a period, we add a trailing slash)
         */
        if (diskette.archive[0] == '/') {
            sArchiveFile = path.sep + diskette.archive.slice(1);
        } else if (diskette.archive[0] == '.') {
            if (diskette.archive != ".img") {
                sArchiveFile = sArchiveFile.replace(".img", diskette.archive.toUpperCase());
            }
        } else if (diskette.archive == "folder") {
            sArchiveFile = sArchiveFile.replace(".img", path.sep);
        } else {
            sArchiveFile = path.join(path.dirname(sArchiveFile), diskette.archive) + (diskette.archive.indexOf(".") < 0 && !diskette.archive.endsWith(path.sep)? path.sep : "");
        }
    } else if (!diskLib.existsFile(sArchiveFile)) {
        /**
         * Try automatically switching from a "--disk" to a "--dir" operation if there's no IMG file.
         */
        sArchiveFile = sArchiveFile.replace(".img", path.sep);
    }

    let name = path.basename(sArchiveFile);
    let fDir = false, arcType = 0, sExt = StrLib.getExtension(sArchiveFile);
    if (sArchiveFile.endsWith(path.sep)) {
        fDir = true;
        diskette.command = "--dir=" + name;
    }
    else if (sExt == "arc") {
        arcType = 1;
        diskette.command = "--arc=" + name;
    }
    else if (sExt == "zip") {
        arcType = 2;
        diskette.command = "--zip=" + name;
    }
    else {
        diskette.command = "--disk=" + name;
    }

    let driveInfo = createDriveInfo(argv, diskette);

    diskette.archive = sArchiveFile;
    printf("checking archive: %s\n", sArchiveFile);

    if (fDir || arcType) {
        let arcOffset = +argv['offset'] || 0;
        let label = diskette.label || argv['label'];
        let password = argv['password'];
        let normalize = diskette.normalize || argv['normalize'];
        let target = diskLib.getTargetValue(diskette.format);
        let listing = argv['list'];
        diskLib.readDir(sArchiveFile, arcType, arcOffset, label, password, normalize, target, undefined, listing, driveInfo, done);
    } else {
        done(diskLib.readDiskSync(sArchiveFile, false, driveInfo));
    }
}

/**
 * createDriveInfo(argv, diskette)
 *
 * @param {Object} argv
 * @param {Object} [diskette]
 * @returns {DiskInfo}
 */
function createDriveInfo(argv, diskette)
{
    let driveInfo = {};

    let typeDrive = argv['drivetype'];
    if (typeof typeDrive == "string") {
        let match = typeDrive.match(/^([0-9]+):([0-9]+):([0-9]+):?([0-9]*)$/i);
        if (match) {
            driveInfo.driveCtrl = "PCJS";      // this pseudo drive controller is required for custom drive geometries
            driveInfo.driveType = 0;
            driveInfo.nCylinders = +match[1];
            driveInfo.nHeads = +match[2];
            driveInfo.nSectors = +match[3];
            driveInfo.cbSector = +match[4] || 512;
            if (argv['partitioned'] !== undefined) {
                driveInfo.partitioned = !!argv['partitioned'];
            } else {
                driveInfo.partitioned = (driveInfo.nCylinders * driveInfo.nHeads * driveInfo.nSectors * driveInfo.cbSector >= DiskInfo.MIN_PARTITION);
            }
        } else {
            match = typeDrive.match(/^([A-Z]+|):?([0-9]+)$/i);
            if (match) {
                let driveCtrl = match[1].toUpperCase() || driveInfo.driveCtrl || "XT";
                let driveType = +match[2];
                if (DiskInfo.validateDriveType(driveCtrl, driveType)) {
                    driveInfo.driveCtrl = driveCtrl;
                    driveInfo.driveType = driveType;
                }
            }
            else if (typeDrive == "custom") {
                //
                // We'll signal to findDriveType() that it should calculate a disk geometry and hope for the best.
                //
                driveInfo.driveCtrl = "PCJS";
                driveInfo.partitioned = true;
            }
        }
        if (!driveInfo.driveCtrl) {
            printf("unrecognized drive type: %s\n", typeDrive);
        }
    }

    let typeFAT = argv['fat'];
    if (typeof typeFAT == "string") {
        let match = typeFAT.match(/^([0-9]+):?([0-9]*):?([0-9]*)$/i);
        if (match) {
            driveInfo.driveCtrl = driveInfo.driveCtrl || "XT";
            driveInfo.typeFAT = +match[1];
            if (match[2]) driveInfo.clusterSize = +match[2] || 0;
            if (match[3]) driveInfo.rootEntries = +match[3] || 0;
        }
    }

    driveInfo.sectorIDs = diskette && diskette.argv['sectorID'] || argv['sectorID'];
    driveInfo.sectorErrors = diskette && diskette.argv['sectorError'] || argv['sectorError'];
    driveInfo.suppData = diskLib.readFileSync(diskette && diskette.argv['suppData'] || argv['suppData']);

    return driveInfo;
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
 * printFileDesc(diskFile, diskName, desc)
 *
 * @param {string} diskFile
 * @param {string} diskName
 * @param {Object} desc
 */
function printFileDesc(diskFile, diskName, desc)
{
    printf("%-32s  %s  %#05x %7d  %s\n", desc[DiskInfo.FILEDESC.HASH] || "-".repeat(32), desc[DiskInfo.FILEDESC.DATE], +desc[DiskInfo.FILEDESC.ATTR], desc[DiskInfo.FILEDESC.SIZE] || 0, diskFile + ':' + desc[DiskInfo.FILEDESC.PATH]);
    // printf("%-32s  %-12s  %s  %#05x %7d  %s\n", desc[DiskInfo.FILEDESC.HASH] || "-".repeat(32), desc[DiskInfo.FILEDESC.NAME], desc[DiskInfo.FILEDESC.DATE], +desc[DiskInfo.FILEDESC.ATTR], desc[DiskInfo.FILEDESC.SIZE] || 0, diskFile + ':' + desc[DiskInfo.FILEDESC.PATH]);
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
 * processDisk(di, diskFile, argv, diskette, fSingle)
 *
 * @param {DiskInfo} di
 * @param {string} diskFile
 * @param {Array} argv
 * @param {Object} [diskette] (if present, then we were invoked by readCollection(), so any --output option should be ignored)
 * @param {boolean} [fSingle]
 */
function processDisk(di, diskFile, argv, diskette = null, fSingle = false)
{
    di.setArgs(argv.slice(1).join(' '));

    /**
     * Any "--format=xxx" acts as a filter function; if the disk's format doesn't contain
     * the specified format, we skip the disk.
     */
    if (typeof argv['format'] == "string") {
        let sFormat = di.getFormat();
        if (sFormat.indexOf(argv['format']) < 0) {
            printf("warning: specified format (\"%s\") does not match disk format (\"%s\")\n", argv['format'], sFormat);
            return;
        }
    }

    if (argv['all'] || argv['collection']) {
        if (!argv['verbose']) {
            printf("processing: %s\n", diskFile);
        } else {
            printf("processing: %s (%d bytes, hash %s)\n", diskFile /* di.getName() */, di.getSize(), di.getHash());
        }
    }

    //
    // TODO: Document the --file option
    //
    let sFindName = argv['file'];
    if (typeof sFindName == "string") {
        let sFindText = argv['find'];
        if (typeof sFindText != "string") sFindText = false;
        /**
         * TODO: Implement support for finding text in findFile()....
         */
        let desc = di.findFile(sFindName, sFindText);
        if (desc) {
            printFileDesc(diskFile, di.getName(), desc);
            if (argv['index']) {
                /**
                 * We cheat and search for matching hash values in the provided index; this is much faster than
                 * opening and searching all the other disk images, even when they DO contain pre-generated file tables.
                 */
                if (sFileIndexCache === undefined) {
                    sFileIndexCache = diskLib.readFileSync(argv['index']);
                    if (!sFileIndexCache) sFileIndexCache = null;
                }
                let cMatches = 0;
                if (sFileIndexCache) {
                    let re = new RegExp("^" + desc[DiskInfo.FILEDESC.HASH] + ".*$", "gm"), match;
                    while ((match = re.exec(sFileIndexCache))) {
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
        let iCylinder, iHead, idSector, nSectors;
        if (typeof chs == "string") {
            let values = chs.split(':');
            iCylinder = +values[0], iHead = +values[1], idSector = +values[2], nSectors = +values[3] || 1;
        }
        if (isNaN(iCylinder) || isNaN(iHead) || !idSector) {
            printf("specify --dump=C:H:S[:N]\n");
        } else {
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
        let listing = argv['list'];
        let sLines = "";
        let iVolume = +argv['volume'];
        if (isNaN(iVolume)) iVolume = -1;
        if (listing == "unused") {
            let lba = -1;
            while ((lba = di.getUnusedSector(iVolume, lba)) >= 0) {
                let sector = di.getSector(lba);
                let offset = di.getUnusedSectorData(sector);
                sLines += sprintf("\nLBA=%d\n", lba);
                /**
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
        }
        else if (listing != "archive" && listing != "csv") {
            /**
             * "dir" is implied if no other listing option (eg, "metadata", "sorted") is specified.
             */
            let listing = argv['list'];
            if (typeof listing != "string") listing = "dir";
            sLines = di.getFileListing(iVolume, 0, listing) || "\tno listing available\n";
        }
        if (sLines) printf("%s\n", sLines);
    }

    /**
     * Similar to --extract, --type is another form of extraction (ie, extract file(s) to the console).
     */
    let sExtraction, fExtractToFile;
    if (argv['type']) {
        fExtractToFile = false;
        sExtraction = argv['type'];
    } else if (argv['extract']) {
        fExtractToFile = true;
        sExtraction = argv['extract'];
    }
    let fExtractAll = (typeof sExtraction != "string");

    if (sExtraction) {
        let extractDir = argv['dest'];
        if (typeof extractDir != "string") {
            extractDir = "";
        } else if (diskFile.indexOf("http") != 0) {
            //
            // "%c" is an undocumented option that allows me to extract files to a companion
            // folder (eg, "contents") located alongside the original folder (eg, "download").
            //
            extractDir = extractDir.replace("%c", path.dirname(diskFile).replace("/download/", "/contents/"));
            extractDir = extractDir.replace("%d", path.dirname(diskFile)).replace("%f", di.getName());
        }
        let extractName = "", extractFolder = "";
        if (fExtractAll) {
            /**
             * Normally, we want every disk to be extracted into its own folder, but if you're just
             * extracting a single disk AND you've already specified an extraction dir, then we don't need
             * to ALSO put the files inside their own disk-based folder name.
             */
            if (!fSingle || !extractDir) {
                extractFolder = di.getName();
            }
        } else {
            extractName = sExtraction.toUpperCase();
        }
        if (argv['collection'] && !extractDir) {
            extractFolder = diskLib.getLocalPath(path.join(path.dirname(diskFile), "archive", extractFolder));
            if (diskFile.indexOf("/private") == 0 && diskFile.indexOf("/disks") > 0) {
                extractFolder = extractFolder.replace("/disks/archive", "/archive");
            }
        }
        diskLib.extractFiles(di, argv, extractName, path.join(extractDir, extractFolder), argv['hidden'] || !fExtractAll, fExtractToFile);
    }

    if (argv['manifest']) {
        let manifest = di.getFileManifest(diskLib.getHash, argv['sorted'], argv['metadata']);
        printManifest(diskFile, di.getName(), manifest);
    }

    /**
     * If --rewrite, then rewrite the JSON disk image.  --overwrite is implicit.
     */
    if (argv['rewrite']) {
        if (StrLib.getExtension(diskFile) == "json") {
            diskLib.writeDiskSync(diskFile, di, argv['legacy'], 0, true, argv['quiet'], undefined, argv['source']);
        }
    }

    /**
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
        /**
         * If a JSON disk image was originally built from kryoflux data AND included special args (eg, for copy-protection),
         * then don't bother with the rebuild, because those disks can't be saved as IMG disk images.
         */
        if (StrLib.getExtension(diskFile) == "json" && !(diskette.kryoflux && diskette.args)) {
            if (typeof argv['checkdisk'] == "string" && diskFile.indexOf(argv['checkdisk']) < 0) return;
            createDisk(diskFile, diskette, argv, function(diTemp) {
                if (diTemp) {
                    let sTempJSON = path.join(rootDir, "disks", "tmp", path.basename(diskFile).replace(/\.[a-z]+$/, "") + ".json");
                    diTemp.setArgs(sprintf("%s --output %s%s", diskette.command, sTempJSON, diskette.args));
                    diskLib.writeDiskSync(sTempJSON, diTemp, argv['legacy'], 0, true, true, undefined, diskette.source);
                    let warning = false;
                    if (StrLib.getExtension(diskette.archive) == "img") {
                        let json = diTemp.getJSON();
                        diTemp.buildDiskFromJSON(json);
                        let sTempIMG = sTempJSON.replace(".json",".img");
                        diskLib.writeDiskSync(sTempIMG, diTemp, true, 0, true, true, undefined, diskette.source);
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
                            fs.renameSync(sTempJSON, diskLib.getLocalPath(diskFile));
                        } else {
                            fs.unlinkSync(sTempJSON);
                        }
                    }
                }
            });
        }
    }

    /**
     * If --checkpage, then get the disk's listing and see if it's up-to-date in the website's README.md.
     *
     * Additionally, if the page doesn't have a machine, add one, tailored to the software's requirements as best we can.
     *
     * You must ALSO specify --rebuild if you want the README.md updated (or created) as well.
     */
    if (argv['checkpage'] && diskette && !diskette.hidden && !diskette.demos) {
        /**
         * We don't need/want any software pages checked/built for private diskette collections.
         *
         * The PCSIG08 software pages (originally at /software/pcx86/shareware/pcsig08/ and later moved
         * to /software/pcx86/sw/misc/pcsig08/) were hand-generated, so it would take some extra effort
         * to automatically rebuild those.  However, those pages no longer use their own set of diskette
         * images at pcsig8a-disks.pcjs.org and pcsig8b-disks.pcjs.org, and the pages themselves are now
         * deprecated in favor of the more complete set of pages at /software/pcx86/sw/misc/pcsig/, so the
         * "pcsig8" exception below is a bit moot now.
         *
         * 2023-09-12 UPDATE: GitHub Pages has started giving me deployment errors, due to the large number
         * of pages the website contains when a page for every PC-SIG diskette is added to the site.  Even
         * though the pcjs repository itself is well under the "soft" 1Gb limit that GitHub recommends, there
         * is apparently also a "soft" (undocumented?) 1Gb limit on the amount of data GitHub Pages can deploy
         * as well, and since the web pages are significantly larger than the README files in the repo,
         * we were trying to deploy over 1.5Gb.  The size itself only generated a warning, but the process of
         * deploying that much data was timing out after about 10 minutes.  None of this is explained very
         * well by GitHub (or their email notifications), but at least their logs hinted at the problem.
         *
         * So, for now, only PC-SIG pages for diskettes that we have original copies of are being retained,
         * and the rest are no longer being automatically generated.  Hence the "/pcsig" exception below
         * (formerly "/pcsig8").
         */
        if (diskFile.indexOf("/private") >= 0 || diskFile.indexOf("/pcsig") >= 0) return;

        if (typeof argv['checkpage'] == "string") {
            if (argv['verbose']) printf("checking %s for '%s'...\n", diskFile, argv['checkpage']);
            if (diskFile.indexOf(argv['checkpage']) < 0) return;
        }

        let sListing = di.getFileListing(0, 4);
        if (!sListing) return;
        let sIndex = "", sIndexNew = "", sAction = "";
        let sHeading = "\n### Directory of " + diskette.name + "\n";
        let sIndexFile = path.join(path.dirname(diskLib.replaceServerPrefix(diskFile, "/software/")), "README.md");
        if (diskLib.existsFile(sIndexFile)) {
            sIndex = sIndexNew = diskLib.readFileSync(sIndexFile);
            sAction = "updated";
        } else {
            if (diskette.title) {
                let sTitle = diskette.title;
                if (sTitle.match(/[#:[\]{}]/)) {
                    sTitle = '"' + sTitle + '"';
                }
                let permalink = path.dirname(diskette.path.replace(/^\/(disks\/|)[^/]+/, "/software")) + '/';
                sIndexNew = "---\nlayout: page\ntitle: " + sTitle + "\npermalink: " + permalink + "\n---\n";
                sIndexNew += sHeading + sListing;
                sAction = "created";
            }
        }

        /**
         * Step 1: make sure there's a machine present to load/examine/test the software.
         */
        let sMachineEmbed = "";
        let matchFrontMatter = sIndexNew.match(/^---\n([\s\S]*?\n)---\n/);
        if (matchFrontMatter && diskette) {
            let sFrontMatter = matchFrontMatter[1];
            let matchMachines = sFrontMatter.match(/^machines: *\n([\s\S]*?\n)(\S|$)/m);
            if (matchMachines) {
                /**
                 * If this was a generated machine and --rebuild is set, then we'll regenerate it.
                 */
                if (matchMachines[1].indexOf("autoGen: true") >= 0 && matchMachines[1].indexOf(diskette.name) >= 0 && argv['rebuild']) {
                    sFrontMatter = sFrontMatter.replace(matchMachines[0], matchMachines[2]);
                    sIndexNew = sIndexNew.replace(/\n\{% include machine.html .*?%\}\n/, "");
                    matchMachines = null;
                }
            }
            if (!matchMachines) {
                /**
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
                    configPath = diskLib.getLocalPath(configPath);
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
                /**
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
                let configFile = hardware.config || findConfig("/machines/pcx86/" + manufacturer + '/' + model + '/' + video + "/**/machine.xml");
                if (configFile == "none") configFile = "";
                if (configFile) {
                    let bootDisk = findOption(["", "DOS"]);
                    let demoDisk = diskette.name;
                    let sDiskettes = "";
                    let diskMatch = diskFile.match(/\/pcsig\/([0-9])[0-9]+-/);
                    if (diskMatch) {
                        sDiskettes = "    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json\n";
                    }
                    if (diskette.bootable) {
                        bootDisk = demoDisk;
                        demoDisk = "";
                    } else {
                        if (sAutoType == undefined) sAutoType = "$date\\r$time\\rB:\\rDIR\\r";
                    }
                    let sMachineID = (model.length <= 4? manufacturer : "") + model;
                    let sMachine = "  - id: " + sMachineID + "\n    type: pcx86\n    config: " + configFile + "\n";
                    for (let prop in hardware) {
                        if (prop == "autoType" || prop == "config" || prop == "machine" || prop == "options" || prop == "url" || prop[0] == '@') continue;
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
                    sFrontMatter += "machines:\n" + sMachine + sDiskettes + sAutoGen + sAutoMount + (sAutoType || "");
                    sIndexNew = sIndexNew.replace(matchFrontMatter[1], sFrontMatter);
                    sMachineEmbed = "\n{% include machine.html id=\"" + sMachineID + "\" %}\n";
                }
            }
        }

        /**
         * Step 2: Making sure there's an up-to-date directory listing.  The listing can include a picture of
         * the diskette, if any, and a link to the source of the diskette, if any, so append those to the listing now.
         *
         * Picture example:
         *
         *      ![MS C 1.03 Beta (Disk 1)]({{ site.software.miscdisks.server }}/pcx86/lang/microsoft/c/1.03/MSC103-BETA-DISK1.jpg)
         */
        let sDiskPic = diskette.path.replace(".json", ".jpg");
        if (!diskLib.existsFile(sDiskPic)) {
            sDiskPic = diskette.path.replace(".json", ".png");
        }
        if (diskLib.existsFile(sDiskPic)) {
            let sDiskServer = diskLib.getServerPrefix(sDiskPic);
            if (sDiskServer) {
                sListing += "\n![" + diskette.name + "]({{ site.software." + sDiskServer.replace("disks/", "") + ".server }}" + sDiskPic.slice(sDiskServer.length + 1) + ")\n";
            }
            /**
             * Let's rematch the page header and see if the page also needs a preview image.
             */
            matchFrontMatter = sIndexNew.match(/^(---\n[\s\S]*?\n---\n)/);
            if (matchFrontMatter) {
                let sFrontMatter = matchFrontMatter[1];
                let match = sFrontMatter.match(/\npreview:.*\n/);
                if (!match) {
                    match = sFrontMatter.match(/\npermalink:.*\n/);
                    if (match) {
                        let n = match.index + match[0].length;
                        sDiskPic = diskLib.getServerPath(sDiskPic, true);
                        sFrontMatter = sFrontMatter.slice(0, n) + "preview: " + sDiskPic + "\n" + sFrontMatter.slice(n);
                        sIndexNew = sFrontMatter + sIndexNew.slice(matchFrontMatter[0].length);
                    }
                }
            }
        }
        if (diskette.source && !diskette.source.indexOf("http")) {
            sListing += "\n[[Source](" + diskette.source + ")]\n";
        }

        let sMatch = "\n(##+)\\s+Directory of " + diskette.name.replace("(","\\(").replace(")","\\)").replace("*","\\*").replace("+","\\+") + " *\n([\\s\\S]*?)(\n[^!{[\\s]|$)";
        let matchDirectory = sIndexNew.match(new RegExp(sMatch));
        if (matchDirectory) {
            if (matchDirectory[1].length != 3) {
                printf("warning: directory heading level '%s' should really be '###'\n", matchDirectory[1]);
            }
            let matchInclude = matchDirectory[2].match(/\n\{%.*?%}\n/);
            /**
             * Work around JavaScript's handling of '$' in the replacement string ('$' is interpreted as a back-reference
             * indicator, with '$$' interpreted as '$', even when the search string is NOT a regular expression) by first
             * replacing every '$' with '$$' in sListing (the only portion where we're likely encounter '$' characters).
             *
             * Note that the work-around itself is subject to the interpretation of '$$' as '$', therefore it must use '$$$$'.
             */
            sIndexNew = sIndexNew.replace(matchDirectory[0], sHeading + (matchInclude? matchInclude[0] : "") + sListing.replace(/\$/g, "$$$$") + matchDirectory[3]);
        } else {
            /**
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

        /**
         * Step 3: If a generated machine needs to be embedded, put it just ahead of the first directory listing (which
         * is why we waited until now); if there are any diskette 'info' summary lines, we want it just ahead of those, too.
         */
        let info = "";
        if (diskette.info) {
            let i;
            info += "\n## Information about \"" + diskette.info.diskTitle + "\"\n\n";
            for (i = 0; i < diskette.info.diskSummary.length; i++) {
                info += "    " + diskette.info.diskSummary[i] + "\n";
            }
        }

        /**
         * Along with any diskette info, see if there are any files in the decompressed archive folder that we might want
         * to include in the index, too.
         *
         * For now, this inclusion is limited to the PC-SIG collection.
         */
        let samples = "";
        if (diskFile.indexOf("/pcsig/") >= 0) {
            let sampleSpec = path.join(path.dirname(diskLib.getLocalPath(diskette.path)), "archive", "**", "*.{ASM,BAS,DOC,TXT}");
            let sampleFiles = glob.sync(sampleSpec);
            for (let sampleFile of sampleFiles) {
                let sample = diskLib.readFileSync(sampleFile);
                if (sample) {
                    if (CharSet.isText(sample)) {
                        let fileType = StrLib.getExtension(sampleFile) == "BAS"? "bas" : "";
                        if (sample[sample.length-1] != '\n') sample += '\n';
                        sample = "{% raw %}\n```" + fileType + "\n" + sample /* .replace(/([^\n]*\n)/g, '    $1\n') */ + "```\n{% endraw %}\n";
                        samples += "\n## " + path.basename(sampleFile) + "\n\n" + sample;
                    } else {
                        printf("warning: ignoring non-text file '%s'\n", sampleFile);
                    }
                }
            }
        }

        /**
         * Clean out any old info and then add any new info.  It should be bracketed by 'info_begin'/'info_end' comments.
         */
        let sInsert = sMachineEmbed;
        let match = sIndexNew.match(/\n\{% comment %\}info_begin\{% endcomment %\}[\S\s]*\{% comment %\}info_end\{% endcomment %\}\n\n/);
        if (match) {
            sIndexNew = sIndexNew.slice(0, match.index) + sIndexNew.slice(match.index + match[0].length);
        } else {
            let i = sIndexNew.indexOf(info);            // look for (old) unbracketed info, too (probably don't need this anymore)
            if (i >= 0) {
                sIndexNew = sIndexNew.slice(0, i) + sIndexNew.slice(i + info.length);
            }
        }
        if (info) {
            sInsert += "\n{% comment %}info_begin{% endcomment %}\n" + info + "{% comment %}info_end{% endcomment %}\n\n";
        }

        /**
         * Clean out any old samples and then add any new samples.  They should be bracketed by 'samples_begin'/'samples_end' comments.
         */
        match = sIndexNew.match(/\{% comment %\}samples_begin\{% endcomment %\}[\S\s]*\{% comment %\}samples_end\{% endcomment %\}\n/);
        if (match) {
            sIndexNew = sIndexNew.slice(0, match.index) + sIndexNew.slice(match.index + match[0].length);
        }
        if (samples) {
            sInsert += "{% comment %}samples_begin{% endcomment %}\n" + samples + "\n{% comment %}samples_end{% endcomment %}\n";
        }

        if (sInsert) {
            matchDirectory = sIndexNew.match(/\n(##+)\s+Directory of /);
            if (matchDirectory) {
                /**
                 * WARNING: This is another place where we need to work around JavaScript's handling of '$' in the replacement string.
                 */
                sIndexNew = sIndexNew.replace(matchDirectory[0], sInsert.replace(/\$/g, "$$$$") + matchDirectory[0]);
            } else {
                sIndexNew += sInsert;
            }
        }

        /**
         * Step 4: Add a document gallery section if there are any documents associated with this software.
         */
        if (diskette.documents) {
            let skip = true;
            for (let document of diskette.documents) {
                if (document['@link'] != path.dirname(sIndexFile) + '/') {
                    skip = false;
                    break;
                }
            }
            if (!skip) {
                let sHeader = "\n<!-- Documentation -->\n";
                let sGallery = sHeader + "\n{% include gallery/documents.html width=\"200\" height=\"260\" %}\n";
                if (sIndexNew && sIndexNew.indexOf(sHeader) < 0) {
                    sIndexNew += sGallery;
                }
            }
        }

        if (!sIndexNew) {
            printf("\tmissing index for \"%s\": %s\n", diskette.title, sIndexFile);
        }
        else if (sIndexNew != sIndex) {
            if (argv['rebuild']) {
                if (diskLib.writeFileSync(diskLib.getLocalPath(sIndexFile), sIndexNew, true, true)) {
                    printf("\t%s index for \"%s\": %s\n", sAction, diskette.title, sIndexFile);
                }
            } else {
                printf("\tindex for \"%s\" should be %s (%s); use --rebuild\n", diskette.title, sAction, sIndexFile);
            }
        }
    }

    /**
     * NOTE: When recreating an IMG file from a JSON file, if the JSON file preserved the original BPB
     * (which includes the original OEM signature), then you can use --legacy to tell writeDiskSync() to tell
     * getData() to restore those BPB bytes as well.  Otherwise, we leave the PCJS_OEM signature, if any, alone.
     */
    if (!diskette) {
        if (argv['boot']) {
            di.updateBootSector(diskLib.readFileSync(argv['boot'], null));
        }
        let output = argv['output'];
        if (!output || typeof output == "boolean") {
            output = argv[1];
        }
        if (output) {
            if (typeof output == "string") output = [output];
            if (Array.isArray(output)) {
                output.forEach((outputFile) => {
                    let file = outputFile.replace("%d", path.dirname(diskFile)).replace("%f", di.getName());
                    diskLib.writeDiskSync(file, di, argv['legacy'], argv['indent']? 2 : 0, argv['overwrite'], argv['quiet'], argv['writable'], argv['source']);
                });
            } else {
                printf("missing output file(s)\n");
            }
        }
    }
}

/**
 * readCollection(argv)
 *
 * If "--collection=[string]" then the set of disks is limited to those where pathname contains [string].
 *
 * @param {Array} argv
 */
function readCollection(argv)
{
    let family = "pcx86";
    let asServers = ["diskettes", "gamedisks", "miscdisks", "pcsigdisks", "private"];
    let cCollections = 0, cDisks = 0;
    let asCollections = [];
    asServers.forEach((server) => {
        asCollections = asCollections.concat(glob.sync(path.join(rootDir, "disks" + path.sep + server + path.sep + family + path.sep + (server == "pcsigdisks"? "diskettes-annotated.json" : "diskettes.json"))));
    });
    let messages;
    if (argv['quiet']) {
        messages = device.setMessages(MESSAGE.WARNING + MESSAGE.ERROR, false);
    }
    let aDiskNames = {};        // we use this table of disk names to detect non-unique disk names
    asCollections.forEach(function readAllCollections(collectionFile) {
        collectionFile = collectionFile.substr(rootDir.length);
        if (argv['verbose']) printf("reading collection %s...\n", collectionFile);
        let library = diskLib.readJSONSync(collectionFile);
        if (library) {
            let aDiskettes = [];
            JSONLib.parseDiskettes(aDiskettes, library, "/pcx86", "/diskettes");
            aDiskettes.forEach(function readAllDiskettes(diskette) {
                diskette.argc = 0;
                diskette.argv = [];
                if (!diskette.args) {
                    diskette.args = "";
                } else {
                    [diskette.argc, diskette.argv] = PCJSLib.getArgs(diskette.args);
                    diskette.args = " " + diskette.args;
                }
                /**
                 * TODO: I don't think '@local' is being used anymore, so consider removing this support.  The last
                 * place I saw it used was in the PCSIG08 diskettes.json files, but weblib.getResource() knows how to map
                 * local folder names (eg, /pcsig8a-disks) to the corresponding server names now, as does this module,
                 * so there's probably no longer any need for this.
                 */
                if (library['@local']) {
                    diskette.path = diskette.path.replace(library['@server'], library['@local']);
                }
                let diskFile = diskette.path;
                if (typeof argv['collection'] == "string") {
                    if (argv['verbose']) printf("checking %s for '%s'...\n", diskFile, argv['collection']);
                    if (diskFile.indexOf(argv['collection']) < 0) return;
                }
                let sName = path.basename(diskFile);
                if (aDiskNames[sName]) {
                    if (argv['verbose']) printf("warning: %s disk name is not unique (see %s)\n", diskFile, aDiskNames[sName]);
                } else {
                    aDiskNames[sName] = diskFile;
                }
                let done = function(di, fWrite = true) {
                    if (di) {
                        if (fWrite) {
                            diskLib.writeDiskSync(diskFile, di, false, 0, undefined, undefined, undefined, diskette.source);
                        }
                        processDisk(di, diskFile, argv, diskette);
                        cDisks++;
                    }
                };
                let di = diskLib.readDiskSync(diskFile);
                if (di) {
                    done(di, false);
                } else {
                    createDisk(diskFile, diskette, argv, done);
                }
            });
        }
        cCollections++;
    });

    printf("%d config(s), %d disks(s) processed\n\n", cCollections, cDisks);
    if (messages) device.setMessages(messages, true);
}

/**
 * getArchiveOffset(sArchive, arcType, sOffset)
 *
 * There were some ARC archives embedded in EXE files (eg, old self-extracting archives) produced by PKware, before they
 * started using ZIP archives.  Examples include:
 *
 *      PKX35A35.EXE
 *      PK361.EXE
 *      PKFIND11.EXE
 *
 * They can be detected by a 32-bit signature near the end of the file ("PK\xAA\x55" or 0x55aa4b50) followed by a 32-bit
 * archive size.  The beginning of the archive can be found by subtracting the archive size from the file size (ie, the file
 * size up to and including the 32-bit archive size), and then subtracting another 40 (0x28) bytes from that value.
 *
 * TODO: Determine what that final 40-byte offset represents.
 *
 * However, since this is an expensive operation, we perform this search ONLY if 1) the caller doesn't provide an explicit
 * offset, 2) the caller explicitly set the archive type to TYPE_ARC, and 3) the input file is an EXE file.
 *
 * There were self-extracting ARC archives produced by SEA (System Enhancement Associates) as well (eg, ARC602.EXE from 1989),
 * but those used a different format; this function does not yet support those files.
 *
 * Self-extracting ZIP archives don't need any help locating the archive offset, because the ZIP file format specifically
 * allows for prepended files (eg, EXE files).
 *
 * @param {string} sArchive
 * @param {number} arcType
 * @param {string} sOffset
 * @returns {number} (the specified --offset value, if any, else the offset of the embedded ARC archive, if any; -1 if none)
 */
function getArchiveOffset(sArchive, arcType, sOffset)
{
    let offset = 0;
    if (sOffset) {
        offset = +sOffset || 0;
    } else {
        if (arcType == StreamZip.TYPE_ARC && sArchive.toUpperCase().endsWith(".EXE")) {
            offset = -1;
            let data = diskLib.readFileSync(sArchive, null);
            if (data) {
                let sizeArc = -1, sizeFile;
                let max = 512;      // limit the search to the last 512 bytes of the file
                for (let o = data.length - 8; o >= 0 && max--; o--) {
                    if (data.readUInt32LE(o) == 0x55aa4b50) {
                        sizeArc = data.readUInt32LE(o + 4);
                        sizeFile = o + 8;
                        break;
                    }
                }
                if (sizeArc > 0 && sizeArc < sizeFile) {
                    offset = sizeFile - sizeArc - 40;
                }
            }
        }
    }
    return offset;
}

/**
 * processDiskAsync(input, argv, fSingle)
 *
 * @param {string} input
 * @param {Array} argv
 * @param {boolean} [fSingle]
 */
async function processDiskAsync(input, argv, fSingle = false)
{
    let driveInfo = createDriveInfo(argv);
    let di = await diskLib.readDiskAsync(input, argv['forceBPB'], driveInfo);
    if (di) {
        processDisk(di, input, argv, null, fSingle);
    }
}

/**
 * processAll(all, argv)
 *
 * @param {string} all
 * @param {Array} argv
 */
function processAll(all, argv)
{
    if (all && typeof all == "string") {
        let max = +argv['max'] || 0;
        let asFiles = glob.sync(diskLib.getLocalPath(all));
        if (asFiles.length) {
            let outdir = argv['output'];                // if specified, --output is assumed to be a directory
            let type =  argv['type'] || "json";         // if specified, --type should be a known file extension
            if (type[0] != '.') type = '.' + type;
            let filter = argv['filter'];
            filter = (typeof filter == "string")? new RegExp(filter) : null;
            for (let sFile of asFiles) {
                if (filter && !filter.test(sFile)) continue;
                let args = [argv[0], sFile];
                args['all'] = true;
                if (outdir) {
                    args['output'] = path.join(outdir.replace("%d", path.dirname(sFile)), path.parse(sFile).name + type);
                }
                for (let arg of ['dest', 'drivetype', 'expand', 'extract', 'list', 'manifest', 'normalize', 'overwrite', 'quiet', 'target', 'verbose']) {
                    if (argv[arg] !== undefined) args[arg] = argv[arg];
                }
                processArgs(args);
                if (!--max) break;
            }
        } else {
            printf("no files matched \"%s\"\n", all);
        }
        return true;
    }
    return false;
}

/**
 * processArgs(argv, fSingle)
 *
 * Formerly part of main(), but factored out so that it can also be called for a list of files ("--all").
 *
 * @param {Array} argv
 * @param {boolean} [fSingle]
 * @returns {boolean} true if something was processed, false if not
 */
function processArgs(argv, fSingle = false)
{
    let input;
    let fDir = false, fFiles = false, arcType = 0;

    let done = function(di)
    {
        if (di) {
            if (fFiles) {
                /**
                * When a disk is created from a list of files, the default name isn't very meaningful;
                * the basename of the output file isn't much more helpful, but it's better than nothing.
                *
                * This only affects the 'name' property in 'imageInfo', which is of limited interest anyway.
                */
                let name = argv['output'];
                if (Array.isArray(name)) {
                    name = name[0];
                }
                if (name) {
                    /**
                     * If name isn't a string, then it must be an array (because the user specified multiple
                     * outputs), which is allowed in case you want to create, for example, both IMG and JSON
                     * disk images with a single command.
                     */
                    if (typeof name != "string") name = name[0];
                    di.setName(path.basename(name));
                }
            }
            processDisk(di, input, argv, null, fSingle);
            return true;
        }
        if (input) printf("unable to process %s\n", input);
        return false;
    };

    input = argv['dir'];
    if (input) {                    // if --dir, the directory should end with a trailing slash (but we'll make sure)
        fDir = (typeof input == "string");
        if (input && !input.endsWith('/')) input += '/';
    } else {
        input = argv['files'];
        if (input) {                // if --files, the list of files should be separated with commas (and NO trailing slash)
            fDir = fFiles = (typeof input == "string");
        } else {
            input = argv['arc'];
            if (input) {
                arcType = 1;
            } else {
                input = argv['zip'];
                if (input) {
                    arcType = 2;
                }
            }
            if (!input || typeof input == "boolean") {
                input = argv[1];
                if (input) {
                    argv.shift();
                    if (!arcType) {
                        if (input.endsWith('/')) {
                            fDir = true;
                        } else {
                            arcType = diskLib.isArchiveFile(input);
                        }
                    }
                } else {
                    arcType = 0;
                }
            }
        }
    }

    let driveInfo = createDriveInfo(argv);

    if (fDir || arcType) {
        let offset = getArchiveOffset(input, arcType, argv['offset']);
        if (offset < 0) {
            printf("error: %s is not a supported archive file\n", input);
            return true;
        }
        let listing = argv['list'];
        if (listing === true) {
            argv['list'] = arcType? "archive" : "dir";
        }
        diskLib.readDir(input, arcType, offset, argv['label'], argv['password'], argv['normalize'], diskLib.getTargetValue(argv['target']), +argv['maxfiles'] || 0, listing, driveInfo, done);
        return true;
    }

    if (input) {
        return done(diskLib.readDiskSync(input, argv['forceBPB'], driveInfo));
    }

    return false;
}

/**
 * main(argc, argv)
 *
 * Usage:
 *
 *      [node] diskimage.js [input disk image or directory] [output disk image] [options]
 *
 * You can use --disk and --dir to explicitly specify an input disk or directory, or you can implicitly
 * specify one as the first non-option argument (a directory is indicated by a trailing slash); similarly,
 * you can use --output to explicitly specify an output disk image, or you can implicitly specify one as
 * the second non-option argument.
 *
 * To add files to a disk in a specific order, use --files=[comma-separated list of files].  And if you
 * want a particular boot sector, use --boot=[sector image file].
 *
 * You can also use the contents of a ZIP archive as your input source with --zip=[zipfile]; ditto for
 * ARC files using --arc=[arcfile].  To also print a listing of an archive's contents, include --list=archive.
 *
 * Use --all to process all files that match the "globbed" filespec (eg, "--all='/Volumes/PCSIG_13B/*.ZIP'");
 * when using --all, --output can be used to specify an output directory, and --type can be used to specify
 * the output file extension (default is "json").
 *
 * Use --collection to process all disk collections with the specified options, or --collection=[subset]
 * to process only disks whose path or name contains [subset]; any input/output disk/directory names are
 * ignored when using --collection.  NOTE: This feature only work with PCjs diskette collections, which
 * must have a corresponding diskettes.json.
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    let arg0 = argv[0].split(' ');
    let options = arg0.slice(1).join(' ');

    rootDir = path.join(path.dirname(arg0[0]), "../..");
    diskLib.setRootDir(rootDir, rootDir, argv['local']? true : (argv['remote']? false : null));

    Device.DEBUG = !!argv['debug'];

    if (!argv['quiet'] && argv['list'] != "csv") {
        printf("DiskImage v%s\n%s\n%s\n", Device.VERSION, Device.COPYRIGHT, (options? sprintf("Options: %s", options) : ""));
    }

    if (Device.DEBUG) {
        device.setMessages(MESSAGE.FILE, true);
    }

    device.setMessages(MESSAGE.DISK + MESSAGE.WARNING + MESSAGE.ERROR, true);

    if (argv['help']) {
        let optionsInput = {
            "--all=[filespec]":         "process all matching disk images",
            "--arc=[arcfile]\t":        "read all files in an ARC archive",
            "--boot=[bootfile]":        "replace boot sector with specified file",
            "--dir=[directory]":        "read all files in a directory",
            "--disk=[diskimage]":       "read disk image (.img or .json)",
            "--files=[filelist]":       "read all files in a comma-separated list",
            "--zip=[zipfile]\t":        "read all files in a ZIP archive"
        };
        let optionsOutput = {
            "--drivetype=[value]":      "set drive type (eg, AT:1 or C:H:S or \"custom\")",
            "--dest=[directory]":       "write extracted files to destination directory",
            "--extract (-e)\t":         "extract all files in disks or archives",
            "--extract[=filename]":     "extract specified file in disks or archives",
            "--fat=[value(s)]":         "set FAT type (12 or 16) [:cluster size[:root size]]",
            "--output=[diskimage]":     "write disk image (.img or .json)",
            "--target=[nK|nM]":         "set target disk size (eg, \"360K\", \"10M\")",
            "--type[=filename]":        "extract text file(s) to console",
        };
        let optionsOther = {
            "--dump=[C:H:S:N]":         "dump N sectors starting at sector C:H:S",
            "--expand (-x)\t":          "expand all archives inside disk or archive",
            "--label=[label]\t":        "set volume label of output disk image",
            "--list[=option]\t":        "listing option (dir, archive, unused, sorted, metadata)",
            "--normalize\t":            "convert line endings and character encoding of text files",
            "--partitioned (-p)":       "force partitioned disk image",
            "--password=[string]":      "use password for decompression (ARC files only)",
            "--quiet (-q)\t":           "minimum messages",
            "--verbose (-v)\t":         "maximum messages"
        };
        let optionGroups = {
            "Input options:":           optionsInput,
            "Output options:":          optionsOutput,
            "Other options:":           optionsOther
        };
        printf("\nUsage:\n\n\tnode diskimage.js [input diskimage] [output diskimage] [options]\n");
        for (let group in optionGroups) {
            printf("\n%s\n\n", group);
            for (let option in optionGroups[group]) {
                printf("\t%s\t%s\n", option, optionGroups[group][option]);
            }
        }
        printf("\nEnclose option values in quotes if they contain whitespace or wildcards.\n");
        printf("Some options (eg, --dest) can also use %d and %f for input directory and file.\n");
        return;
    }

    if (argv['collection']) {
        readCollection(argv);
        return;
    }

    let input = argv['disk'];
    if (typeof input != "string") {
        input = argv[1];
        if (input && input.indexOf("http") == 0) {
            argv.shift();
        } else {
            input = null;
        }
    }
    if (input) {
        /**
         * If you used --disk to specify a disk image (or you specified a remote image), call the experimental async function.
         */
        processDiskAsync(input, argv, true);
        return;
    }

    if (processAll(argv['all'], argv) || processArgs(argv, true)) {
        return;
    }

    printf("nothing to do\n");
}

main(...PCJSLib.mapArgs({
    '?': "help",
    'e': "extract",
    'l': "list",
    'p': "partitioned",
    'q': "quiet",
    'v': "verbose",
    'x': "expand"
}));
