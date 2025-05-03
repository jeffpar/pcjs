/**
 * @fileoverview Disk Image Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "../../machines/modules/v2/databuffer.js";
import StrLib     from "../../machines/modules/v2/strlib.js";
import Device     from "../../machines/modules/v3/device.js";
import MESSAGE    from "../../machines/modules/v3/message.js";
import CharSet    from "../../machines/pcx86/modules/v2/charset.js";
import DiskInfo   from "../../machines/pcx86/modules/v3/diskinfo.js";
import { node }   from "./nodeapi.js";

await node.import("crypto", "fs", "glob", "os", "path", "./BASFile.js", "./FileLib.js", "./StreamZip.js");

/**
 * @class {DiskLib}
 */
export default class DiskLib {

    /**
     * List of archive file types to expand when "--expand" is specified.
     */
    static asArchiveFileExts = [".ARC", ".ZIP"];       // order must match StreamZip.TYPE_* constants

    /**
     * List of text file types to convert line endings from LF to CR+LF when "--normalize" is specified.
     * A warning is always displayed when we replace line endings in any file being copied to a disk image.
     *
     * NOTE: Some files, like ".BAS" files, aren't always ASCII, which is why we now call isText() on all
     * these file contents first.
     *
     * UPDATE: Added ".MAC", ".INF", ".SKL", ".DAT", ".C", ".H", "." to the list for the benefit of the
     * MS-DOS repository at https://github.com/microsoft/MS-DOS.  The final entry (".") is a catch-all for
     * extension-less files (eg, EXE2BIN response files like "LOCSCR", which fail to satisfy EXE2BIN when
     * they have Unix-style line endings, and NMAKE makefiles, which actually seem to work fine with
     * with Unix-style line endings, but we may as well convert them anyway).
     */
    static asTextFileExts = [
        ".MD",  ".ME",  ".BAS", ".BAT", ".RAT", ".ASM", ".INC", ".LRF", ".NFO", ".DIZ",
        ".MAK", ".TXT", ".XML", ".MAC", ".INF", ".SKL", ".DAT", ".C",   ".H",   "."
    ];

    /**
     * DiskLib(device)
     *
     * @this {DiskLib}
     * @param {Device} device
     */
    constructor(device)
    {
        this.device = device;
        this.printf = device.printf.bind(device);
        this.sprintf = device.sprintf.bind(device);
        this.assert = device.assert.bind(device);
        this.nMaxDefault = 16384;
        this.nMaxInit = 0;
        this.nMaxCount = 0;
    }

    /**
     * printError(err, filename)
     *
     * @this {DiskLib}
     * @param {Error} err
     * @param {string} [filename]
     */
    printError(err, filename)
    {
        let msg = err.message || err.stack;
        if (filename) msg = node.path.basename(filename) + ": " + msg;
        this.printf("error: %s\n", msg);
    }

    /**
     * checkArchive(sPath, fExt)
     *
     * @this {DiskLib}
     * @param {string} sPath
     * @param {boolean} fExt (true to check path for archive extension only)
     * @returns {string|undefined}
     */
    checkArchive(sPath, fExt)
    {
        let sArchive;
        for (let sExt of [".ZIP", ".zip", ".ARC", ".arc"]) {
            if (fExt) {
                if (sPath.endsWith(sExt)) {
                    sArchive = sPath;   // sPath.slice(0, -sExt.length);
                    break;
                }
                continue;
            }
            let sFile = sPath.endsWith(sExt)? sPath : (sPath + sExt);
            if (this.existsFile(sFile)) {
                sArchive = sFile;
                break;
            }
        }
        return sArchive;
    }

    /**
     * isBASICFile(sFile)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @returns {boolean} true if the filename has a ".BAS" extension
     */
    isBASICFile(sFile)
    {
        let ext = node.path.parse(sFile).ext;
        return ext && ext.toUpperCase() == ".BAS";
    }

    /**
     * convertBASICFile(db, toUTF8, sPath)
     *
     * @this {DiskLib}
     * @param {DataBuffer} db (the contents of the BASIC file)
     * @param {boolean} [toUTF8] (true if we should convert characters from CP437 to UTF-8)
     * @param {string} [sPath] (for informational purposes only, since we're working entirely with the DataBuffer)
     * @returns {DataBuffer}
     */
    convertBASICFile(db, toUTF8, sPath)
    {
        let basfile = new node.BASFile(db, toUTF8, sPath, this.printf);
        return basfile.convert();
    }

    /**
     * existsDir(sDir, fError)
     *
     * @this {DiskLib}
     * @param {string} sDir
     * @param {boolean} [fError]
     * @returns {boolean}
     */
    existsDir(sDir, fError = true)
    {
        try {
            sDir = this.getLocalPath(sDir);
            let stat = node.fs.statSync(sDir);
            return stat.isDirectory();
        } catch(err) {
            if (fError) this.printError(err);
        }
        return false;
    }

    /**
     * existsFile(sFile, fError)
     *
     * This is really "existsFileOrDir()"; if you need to know which, call existsDir() afterward.
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @param {boolean} [fError]
     * @returns {boolean}
     */
    existsFile(sFile, fError = true)
    {
        try {
            sFile = this.getLocalPath(sFile);
            return node.fs.existsSync(sFile);
        } catch(err) {
            if (fError) this.printError(err);
        }
        return false;
    }

    /**
     * extractFile(sDir, subDir, sPath, attr, date, db, argv, allowExpand, allowHidden, files)
     *
     * @this {DiskLib}
     * @param {string} sDir
     * @param {string} subDir
     * @param {string} sPath
     * @param {number} attr
     * @param {Date} date
     * @param {Buffer} db
     * @param {Object} argv
     * @param {boolean} [allowExpand]
     * @param {boolean} [allowHidden]
     * @param {Array.<fileData>} [files]
     * @returns {number} (number of items extracted, or -1 if an error occurred)
     */
    extractFile(sDir, subDir, sPath, attr, date, db, argv, allowExpand, allowHidden, files)
    {
        /**
         * File systems don't generally provide unnamed files, but unfortunately, ZIP/ARC files can
         * can contain all sorts of crap, including nameless files.  If the length is zero, we'll silently
         * skip it, otherwise we'll print a warning.
         */
        if (!sPath) {
            if (db.length) {
                this.printf("warning: skipping %d-byte unnamed file\n", db.length);
            }
            return 0;
        }
        /**
         * OS X / macOS loves to scribble bookkeeping data on any read-write diskettes or diskette images that
         * it mounts, so if we see any of those remnants (which we use to limit to "(attr & DiskInfo.ATTR.HIDDEN)"
         * but no longer assume they always will hidden), then we ignore them.
         *
         * This is why I make all my IMG files read-only and also write-protect physical diskettes before inserting
         * them into a drive.  Other operating systems pose similar threats.  For example, Windows 9x likes to modify
         * the 8-byte OEM signature field of a diskette's boot sector with unique volume-tracking identifiers.
         */
        if (sPath.endsWith("~1.TRA") || sPath.endsWith("TRASHE~1") || sPath.indexOf("FSEVEN~1") >= 0) {
            return 0;
        }

        if (!allowHidden) {
            if (attr & DiskInfo.ATTR.HIDDEN) {
                if (attr & DiskInfo.ATTR.SUBDIR) {
                    this.aHiddenDirs.push(sPath + '/');
                }
                return -1;
            } else {
                for (let i = 0; i < this.aHiddenDirs.length; i++) {
                    if (sPath.indexOf(this.aHiddenDirs[i]) == 0) {
                        return -1;
                    }
                }
            }
        }

        let sFullPath = node.path.join(sDir, subDir, sPath);
        let sFile = sFullPath.slice(sDir != '.' && sDir.length? sDir.length + 1 : 0);

        let dir = this.getLocalPath(node.path.dirname(sFullPath));
        this.makeDir(dir, true, argv['overwrite']);

        let total = 0;
        let fUpdate = false;

        if (attr & DiskInfo.ATTR.SUBDIR) {
            fUpdate = this.makeDir(this.getLocalPath(sFullPath), true);
        }
        else if (!(attr & DiskInfo.ATTR.VOLUME)) {
            let fPrinted = false;
            let fQuiet = !argv['verbose'];
            if (argv['expand'] && allowExpand) {
                let arcType = this.isArchiveFile(sFile);
                if (arcType) {
                    if (!fQuiet) this.printf("expanding: %s\n", sFile);
                    if (arcType == node.StreamZip.TYPE_ZIP && db.length >= 1 && db.readUInt8(0) == 0x1A) {
                        /**
                         * How often does this happen?  I don't know, but look at CCTRAN.ZIP on PC-SIG DISK2631. #ZipAnomalies
                         */
                        arcType = node.StreamZip.TYPE_ARC;
                        this.printf("warning: overriding %s as type ARC (%d)\n", sFile, arcType);
                    }
                    let diskLib = this;
                    let zip = new node.StreamZip({
                        file: sFile,
                        password: argv['password'],
                        buffer: db.buffer,
                        arcType: arcType,
                        storeEntries: true,
                        nameEncoding: "ascii",
                        printfDebug: diskLib.printf,
                        holdErrors: true
                    }).on('ready', () => {
                        let aFileData = diskLib.getArchiveFiles(zip, null, date, argv['list']);
                        for (let file of aFileData) {
                            let t = diskLib.extractFile(sDir, sFile, file.path, file.attr, file.date, file.data, argv, true, false, file.files);
                            if (t < 0) break;
                            total += t;
                        }
                        zip.close();
                        node.fs.utimesSync(this.getLocalPath(sFullPath), date, date);
                    }).on('error', (err) => {
                        diskLib.printError(err, sFile);
                        /**
                         * Since this implies a failure to extract anything from the archive, we'll call ourselves
                         * back with allowExpand not set, so that we simply extract the archive without expanding it.
                         */
                        if (diskLib.extractFile(sDir, subDir, sFile, attr, date, db, argv)) {
                            total++;
                        }
                    });
                    zip.open();
                    /**
                     * If we 'expand' the contents of an archive, then we likely don't want to also save the
                     * archive itself, so we return now.  If you do want both, we'll have to add a new option.
                     */
                    return total;
                }
            }
            if (argv['collection'] && this.existsFile(sFullPath) && !argv['overwrite']) {
                if (!fPrinted && !fQuiet) this.printf("extracted: %s\n", sFile);
                return ++total;
            }
            if (!fQuiet) this.printf("extracting: %s\n", sFile);
            /**
             * Originally, "normalize" was just an import option (to fix line endings of known text files on
             * disks we created); however, I'm going to make it an export option as well, and not just to revert
             * line endings, but to also address the fact that there are a lot of old "tokenized" BASIC files out
             * in the world, and they are much easier to work with locally in their "de-tokenized" form.
             */
            if (argv['normalize']) {
                /**
                 * BASIC files are dealt with separately, because there are 3 kinds: ASCII (for which we call
                 * normalize()), tokenized (which we convert to ASCII and automatically normalize in the process),
                 * and protected (which we decrypt and then de-tokenize).
                 */
                if (this.isBASICFile(sFullPath)) {
                    /**
                     * In addition to "de-tokenizing", we're also setting convertBASICFile()'s normalize parameter
                     * to true, to convert characters from CP437 to UTF-8, revert line-endings, and omit EOF.  We're
                     * currently combining both features as part of the "normalize" process.
                     */
                    db = this.convertBASICFile(db, true, sFullPath);
                }
                else if (this.isTextFile(sFullPath)) {
                    // if (!fQuiet) this.printf("normalizing: %s\n", sFile);
                    db = this.normalizeTextFile(db);
                }
            }
            fUpdate = this.writeFileSync(this.getLocalPath(sFullPath), db, true, argv['overwrite'], attr, argv['quiet']);
            if (fUpdate) {
                total++;
            }
        }
        if (fUpdate) {
            if (files) {
                for (let file of files) {
                    let t = this.extractFile(sDir, subDir, file.path, file.attr, file.date, file.data, argv, true, false, file.files);
                    if (t < 0) {
                        total = t;
                        break;
                    }
                    total += t;
                }
            }
            node.fs.utimesSync(this.getLocalPath(sFullPath), date, date);
        }
        return total;
    }

    /**
     * extractFiles(di, argv, extractName, extractDir, allowHidden, fExtractToFile)
     *
     * @this {DiskLib}
     * @param {DiskInfo} di
     * @param {Object} argv
     * @param {string} extractName
     * @param {string} extractDir
     * @param {boolean} [allowHidden]
     * @param {boolean} [fExtractToFile]
     * @returns {number}
     */
    extractFiles(di, argv, extractName, extractDir, allowHidden = false, fExtractToFile = true)
    {
        let total = 0;
        this.aHiddenDirs = [];
        let manifest = di.getFileManifest(null);                // add true for sorted manifest
        for (let i = 0; i < manifest.length; i++) {
            let desc = manifest[i];
            /**
             * Parse each file descriptor in much the same way that buildFileTableFromJSON() does.  That function
             * doesn't get the file's CONTENTS, because it's working with the file descriptors that have been stored
             * in a JSON file (where CONTENTS would be redundant and a waste of space).  Here, we call getFileManifest(),
             * which calls getFileDesc(true), which returns a complete file descriptor that includes CONTENTS.
             */
            let sPath = desc[DiskInfo.FILEDESC.PATH];
            if (sPath[0] == '/') sPath = sPath.substr(1);       // PATH should ALWAYS start with a slash, but let's be safe
            let name = node.path.basename(sPath).toUpperCase();
            let size = desc[DiskInfo.FILEDESC.SIZE] || 0;
            let attr = +desc[DiskInfo.FILEDESC.ATTR];

            /**
             * We call parseDate() requesting a *local* date from the timestamp, because that's exactly how we're going
             * to use it: as a local file modification time.  We used to deal exclusively in UTC dates, unpolluted
             * by timezone information, but here we don't really have a choice.  Trying to fix the date after the fact,
             * by adding Date.getTimezoneOffset(), doesn't always work either, probably due to Daylight Savings Time issues;
             * best not to go down that rabbit hole.
             */
            let date = this.device.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
            let contents = desc[DiskInfo.FILEDESC.CONTENTS] || [];
            let db = new DataBuffer(contents);
            this.device.assert(size == db.length);

            if (!extractName || extractName == name) {
                if (!fExtractToFile) {
                    if (extractName || this.isTextFile(sPath)) {
                        /**
                         * We assume normalization whenever the file is to be displayed instead of extracted to a file;
                         * in other words, --type implies --normalize.
                         *
                         * This DOES duplicate the normalization logic in extractFile(), and it might be preferable
                         * to pass and process fExtractToFile inside that function instead, but I'm not sure this feature
                         * warrants making extractFile() more complicated.
                         */
                        db = this.isBASICFile(sPath)? this.convertBASICFile(db, true, sPath) : this.normalizeTextFile(db);
                        this.printf("\n%s:\n%s\n", sPath, db.toString());
                        total++;
                    }
                } else {
                    let t = this.extractFile(extractDir, "", sPath, attr, date, db, argv, true, allowHidden);
                    if (t > 0) total += t;
                }
            }
        }
        if (fExtractToFile) this.printf("%d item(s) extracted to %s\n", total, extractDir || ".");
        return total;
    }

    /**
     * getDiskSector(di, lba)
     *
     * @this {DiskLib}
     * @param {DiskInfo} di
     * @param {number} lba (logical block address, aka 0-based sector number)
     * @returns {DataBuffer}
     */
    getDiskSector(di, lba)
    {
        let db;
        let sector = di.getSector(lba);
        if (sector) {
            let ab = [], dw = 0;
            let data = sector[DiskInfo.SECTOR.DATA];
            let dwords = sector[DiskInfo.SECTOR.LENGTH] / 4;
            for (let i = 0; i < dwords; i++) {
                if (i < data.length) dw = data[i];
                for (let shift = 0; shift < 32; shift += 8) {
                    ab.push((dw >>> shift) & 0xff);
                }
            }
            db = new DataBuffer(ab);
        }
        return db;
    }

    /**
     * getHash(data, type)
     *
     * @this {DiskLib}
     * @param {Array.<number>|string|DataBuffer} data
     * @param {string} [type] (eg, "md5")
     * @returns {string}
     */
    getHash(data, type = "md5")
    {
        let db;
        if (data instanceof DataBuffer) {
            db = data;
        } else {
            db = new DataBuffer(data);
        }
        return node.crypto? node.crypto.createHash(type).update(db.buffer).digest('hex') : "";
    }

    /**
     * getLocalPath(sFile)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @returns {string}
     */
    getLocalPath(sFile)
    {
        if (sFile[0] == '~') {
            sFile = node.os.homedir() + sFile.substr(1);
        }
        else {
            sFile = node.FileLib.getLocalPath(sFile);
        }
        return sFile;
    }

    /**
     * getServerPath(diskFile, fRemote)
     *
     * @this {DiskLib}
     * @param {string} diskFile
     * @param {boolean} [fRemote] (true to return remote address)
     * @returns {string}
     */
    getServerPath(diskFile, fRemote = node.remote)
    {
        if (fRemote || !this.existsFile(diskFile)) {
            diskFile = diskFile.replace(/^\/(machines|software|tools)\//, "https://www.pcjs.org/$1/");
            diskFile = diskFile.replace(/^\/(disks\/|)(machines|software|tools|diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$2.pcjs.org/").replace(/^\/disks\/cdroms\/([^/]*)\//, "https://$2.pcjs.org/");
        }
        return diskFile;
    }

    /**
     * getServerPrefix(diskFile)
     *
     * @this {DiskLib}
     * @param {string} diskFile
     * @returns {string|undefined}
     */
    getServerPrefix(diskFile)
    {
        let match = diskFile.match(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|cdroms|private)\//);
        return match && (match[1] + match[2]);
    }

    /**
     * replaceServerPrefix(diskFile, sReplace)
     *
     * @this {DiskLib}
     * @param {string} diskFile
     * @param {string} sReplace (eg, "/software/")
     * @returns {string}
     */
    replaceServerPrefix(diskFile, sReplace)
    {
        return diskFile.replace(/\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|pcsigdisks|pcsig[0-9a-z-]*-disks|private)\//, sReplace);
    }

    /**
     * isArchiveFile(sFile)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @returns {number} StreamZip TYPE value, or 0 if not an archive file
     */
    isArchiveFile(sFile)
    {
        let sExt = node.path.parse(sFile).ext.toUpperCase();
        return DiskLib.asArchiveFileExts.indexOf(sExt) + 1;
    }

    /**
     * isTextFile(sFile)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @returns {boolean} true if the filename contains a known text file extension, false if unknown
     */
    isTextFile(sFile)
    {
        let sFileUC = sFile.toUpperCase();
        if (sFileUC.indexOf('.') < 0) {
            sFileUC += '.';
        }
        for (let i = 0; i < DiskLib.asTextFileExts.length; i++) {
            if (sFileUC.endsWith(DiskLib.asTextFileExts[i])) return true;
        }
        return false;
    }

    /**
     * makeDir(sDir, recursive, deleteFile)
     *
     * The deleteFile parameter is never true unless '--overwrite' was specified; it is only intended
     * to come into play when using '--expand' along with '--extract', because if any earlier '--extract'
     * did NOT use '--expand', then any archives inside the source disk/archive will have been extracted
     * as a file rather than a directory -- in which case, we must delete the file before we can create
     * a directory.
     *
     * @this {DiskLib}
     * @param {string} sDir
     * @param {boolean} [recursive]
     * @param {boolean} [deleteFile] (delete any existing file with the same name as the directory)
     * @returns {boolean} true if successful (or the directory already exists), false if error
     */
    makeDir(sDir, recursive = false, deleteFile = false)
    {
        let success = true;
        if (this.existsFile(sDir, false) && !this.existsDir(sDir, false) && deleteFile) {
            try {
                node.fs.unlinkSync(sDir);
            } catch(err) {
                this.printError(err);
                success = false;
            }
        }
        if (success && !this.existsFile(sDir, false)) {
            try {
                node.fs.mkdirSync(sDir, {recursive});
            } catch(err) {
                this.printError(err);
                success = false;
            }
        }
        return success;
    }

    /**
     * addMetaData(di, sDir, sPath, aFiles)
     *
     * @this {DiskLib}
     * @param {DiskInfo} di
     * @param {string} sDir
     * @param {string} sPath
     * @param {Array.<FileData>} [aFiles]
     */
    addMetaData(di, sDir, sPath, aFiles)
    {
        sPath = node.path.join(sDir, sPath);
        let sArchiveDir = this.checkArchive(sPath, true);
        if (sArchiveDir) {
            let sArchiveFile = this.checkArchive(sArchiveDir);
            if (sArchiveFile) {
                let aArchiveData = [];
                let aArchiveFiles = node.glob.sync(node.path.join(sArchiveDir, "**"));
                for (let j = 0; j < aArchiveFiles.length; j++) {
                    let sPath = aArchiveFiles[j];
                    let sName = node.path.basename(sPath);
                    let stats = node.fs.statSync(sPath);
                    if (!stats.isDirectory()) {
                        let data = this.readFileSync(sPath, null);
                        if (!data) continue;
                        let file = {
                            hash: this.getHash(data),
                            path: sPath.slice(sDir.length),
                            attr: DiskInfo.ATTR.METADATA,
                            date: stats.mtime,
                            size: data.length
                        };
                        aArchiveData.push(file);
                    }
                }
                di.addMetaData(aArchiveData);
            }
        }
        if (aFiles) {
            for (let i = 0; i < aFiles.length; i++) {
                this.addMetaData(di, sDir, aFiles[i].path, aFiles[i].files);
            }
        }
    }

    /**
     * makeFileDesc(sDir, name, data, attr, date)
     *
     * This mimics getFileDesc() in diskinfo.js, but it creates a FILEDESC object from input
     * parameters rather than a FileInfo object.
     *
     * @this {DiskLib}
     * @param {string} sDir
     * @param {string} name
     * @param {DataBuffer|string} data
     * @param {number} [attr]
     * @param {Date} [date]
     * @returns {Object}
     */
    makeFileDesc(sDir, name, data, attr = DiskInfo.ATTR.ARCHIVE, date = new Date())
    {
        return {
            [DiskInfo.FILEDESC.PATH]: node.path.join(sDir, name),
            [DiskInfo.FILEDESC.NAME]: name,
            [DiskInfo.FILEDESC.ATTR]: this.sprintf("%#0bx", attr),
            [DiskInfo.FILEDESC.DATE]: this.sprintf("%T", date),
            [DiskInfo.FILEDESC.SIZE]: data.length,
            [DiskInfo.FILEDESC.CONTENTS]: data,
            [DiskInfo.FILEDESC.VOL]:  0
        };
    }

    /**
     * normalizeTextFile(db)
     *
     * @this {DiskLib}
     * @param {DataBuffer} db
     * @returns {DataBuffer}
     */
    normalizeTextFile(db)
    {
        return node.BASFile.normalize(db, true);
    }

    /**
     * readDir(sDir, arcType, arcOffset, label, sPassword, fNormalize, kbTarget, nMax, listing, driveInfo, done)
     *
     * @this {DiskLib}
     * @param {string} sDir (directory name)
     * @param {number} [arcType] (1 if ARC file, 2 if ZIP file, otherwise 0)
     * @param {number} [arcOffset] (0 if none)
     * @param {string} [label] (if not set with --label, then basename(sDir) will be used instead)
     * @param {string} [sPassword] (password; for encrypted ARC files only at this point)
     * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
     * @param {number} [kbTarget] (target disk size, in Kb; zero or undefined if no target disk size)
     * @param {number} [nMax] (maximum number of files to read; default is 256)
     * @param {string|boolean} [listing] (listing options, if any)
     * @param {DriveInfo} [driveInfo] (custom drive parameters, if any)
     * @param {function(DiskInfo)} [done] (optional function to call on completion)
     */
    readDir(sDir, arcType, arcOffset, label, sPassword, fNormalize, kbTarget, nMax, listing, driveInfo = {}, done)
    {
        let diskLib = this;
        /**
         * There are two special label strings you can pass on the command-line:
         *
         *      "--label none" (for no volume label at all)
         *      "--label default" (for our default volume label; currently "PCJS")
         *
         * Any other string following "--label" will be used as-is, and if no "--label" is specified at all,
         * we build a volume label from the basename of the directory.
         */
        let dateLabel;
        if (label == "none" || label == false) {
            label = "";
        } else if (label == "default" || label == true) {
            label = DiskInfo.PCJS_LABEL;
            dateLabel = new Date(1989, 8, 27, 3, 0, 0);
        }
        let diskName = node.path.basename(sDir);
        if (sDir.endsWith('/')) {
            if (label == undefined) {
                label = diskName.replace(/^.*-([^0-9][^-]+)$/, "$1");
            }
        } else if (arcType) {
            if (label == undefined) {
                label = diskName.replace(/\.[^.]*$/, "");
            }
        } else {
            diskName = node.path.basename(node.path.dirname(sDir));
            /**
             * When we're given a list of files, we don't pick a default label; use --label if you want one.
             */
        }
        sDir = this.getLocalPath(sDir);

        let printCSV = function(parent, files) {
            for (let file of files) {
                let db = file.data;
                let hash = db && db.length? diskLib.getHash(db) : "--------------------------------";
                let modified = diskLib.sprintf("%T", file.date);
                let attr = file.attr;
                let size = file.size;
                let compressedSize = file.compressedSize || size;
                let method = file.method || "None";
                //
                // Why do we have to remove CRs from filenames?  Just ask "ibm3240-3249/ibm3247/PGCMS101.ZIP/MileageSaver.zip"...
                //
                let pathName = node.path.join(parent, file.path).replace(/\r/g, '').replace(/"/g, '""');
                let fileName = node.path.basename(pathName);
                pathName = node.path.dirname(pathName);
                if (pathName.indexOf(',') >= 0) pathName = '"' + pathName + '"';
                if (fileName.indexOf(',') >= 0) fileName = '"' + fileName + '"';
                if (!file.messages) file.messages = [];
                //
                // We used to determine arcType below, only if file.files was NOT set, but we now want to determine
                // it sooner, so that we can record any discrepancies (eg, wrong archive type) in the archive's messages.
                //
                let arcType = file.files? 0 : diskLib.isArchiveFile(file.path);
                if (arcType) {
                    if (arcType == node.StreamZip.TYPE_ZIP && db.length >= 1 && db.readUInt8(0) == 0x1A) {
                        /**
                         * How often does this happen?  I don't know, but look at CCTRAN.ZIP on PC-SIG DISK2631. #ZipAnomalies
                         */
                        arcType = node.StreamZip.TYPE_ARC;
                        file.messages.push("overriding as type ARC");
                    }
                }
                let messages = "";
                for (let message of file.messages) {
                    if (messages) messages += "; ";
                    messages += message.replace(/^(warning|error): [^ ]*:?\s*/, "");
                }
                if (messages) messages = '"' + messages.replace(/"/g, '""') + '"';
                let comment = "";
                if (file.comment) {
                    comment = '"' + file.comment.replace(/"/g, '""').replace(/\r/g, '') + '"';
                }
                diskLib.printf("%s,%s,%d,%d,%d,%s,%s,%s,%s,%s\n", hash, modified, attr, size, compressedSize, method, fileName, pathName, messages, comment);
                if (file.files) {
                    printCSV(parent, file.files);
                } else if (arcType) {
                    //
                    // Reset pathName to an unquoted/unmodified version now.
                    //
                    pathName = node.path.join(parent, file.path);
                    let zip = new node.StreamZip({
                        file: file.path,
                        // password: argv['password'],
                        buffer: db.buffer,
                        arcType: arcType,
                        storeEntries: true,
                        nameEncoding: "ascii",
                        printfDebug: diskLib.printf,
                        holdErrors: true
                    }).on('ready', () => {
                        //
                        // We used to pass null for the label, but now we always want a label entry
                        // to which getArchivesFiles() can attach the archive's comment string (if any).
                        //
                        let label = file.name.replace(/\.[^.]*$/, "");
                        let aFileData = diskLib.getArchiveFiles(zip, label, file.date, listing);
                        printCSV(pathName, aFileData);
                        zip.close();
                    }).on('error', (err) => {
                        pathName = pathName.replace(/"/g, '""');
                        let fileName = node.path.basename(pathName);
                        pathName = node.path.dirname(pathName);
                        diskLib.printf(",,,,,,\"%s\",\"%s\",\"%s\",\n", fileName, pathName, err.message);
                    });
                    zip.open();
                }
            }
        };

        let readDone = function(aFileData) {
            if (listing == "csv") {
                /**
                 * We're not going to create a disk in this case, just display detailed information about the files.
                 */
                printCSV("", aFileData);
                return;
            }
            if (aFileData) {
                let db = new DataBuffer();
                let di = new DiskInfo(diskLib.device);
                if (driveInfo.files) {
                    for (let i = driveInfo.files.length - 1; i >= 0; i--) {
                        let desc = driveInfo.files[i];
                        desc.attr = +desc[DiskInfo.FILEDESC.ATTR];
                        desc.data = new DataBuffer(desc[DiskInfo.FILEDESC.CONTENTS]);
                        desc.date =diskLib.device.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
                        delete desc[DiskInfo.FILEDESC.HASH];
                        delete desc[DiskInfo.FILEDESC.CONTENTS];
                        let j = aFileData.findIndex((file) => (file.name === desc.name));
                        if (j >= 0) {
                            aFileData.splice(j, 1);
                        }
                        aFileData.unshift(desc);
                    }
                }
                if (di.buildDiskFromFiles(db, diskName, aFileData, kbTarget, diskLib.getHash, driveInfo)) {
                    /**
                     * Walk aFileData and look for archives accompanied by folders containing their expanded contents.
                     */
                    if (arcType) sDir = sDir.slice(0, -4);
                    for (let i = 0; i < aFileData.length; i++) {
                        diskLib.addMetaData(di, sDir, aFileData[i].path, aFileData[i].files);
                    }
                    done(di);
                    return;
                }
            }
            done();
        };
        if (listing === true) {
            listing = arcType? "archive" : "dir";
        }
        try {
            this.nMaxInit = this.nMaxCount = nMax || this.nMaxDefault;
            if (!arcType) {
                this.readDirFiles(sDir, label, dateLabel, fNormalize, 0, driveInfo, readDone);
            } else {
                this.readArchiveFiles(sDir, arcType, arcOffset, label, sPassword, listing || "", readDone);
            }
        } catch(err) {
            this.printError(err);
        }
    }

    /**
     * readDirFiles(sDir, label, dateLabel, fNormalize, iLevel, driveInfo, done)
     *
     * @this {DiskLib}
     * @param {string} sDir (slash-terminated directory name OR comma-delimited list of files)
     * @param {string|null} [label] (optional volume label; this should NEVER be set when reading subdirectories)
     * @param {Date|null} [dateLabel] (optional volume date)
     * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
     * @param {number} [iLevel] (current directory level, primarily for diagnostic purposes only; zero if unspecified)
     * @param {DriveInfo} [driveInfo] (custom drive parameters, if any)
     * @param {function(Array.<FileData>)} [done] (optional function to call on completion)
     * @returns {Array.<FileData>}
     */
    readDirFiles(sDir, label, dateLabel, fNormalize = false, iLevel = 0, driveInfo, done)
    {
        let asFiles;
        let aFiles = [];
        if (sDir.endsWith('/')) {
            asFiles = node.fs.readdirSync(sDir);
            /**
             * Node typically returns directory entries in sorted order (at least on macOS, perhaps not on Windows);
             * however, I have noticed that other runtimes (eg, Bun) don't necessarily return sorted results, so for
             * consistency across all operating systems *and* runtimes, we always sort them ourselves.
             */
            asFiles.sort();
            for (let i = 0; i < asFiles.length; i++) {
                asFiles[i] = node.path.join(sDir, asFiles[i]);
            }
        } else {
            asFiles = sDir.split(',');
            sDir = ".";
            for (let i = 0; i < asFiles.length; i++) {
                let sDirFile = node.path.dirname(asFiles[i]);
                if (sDirFile != ".") sDir = sDirFile;
                asFiles[i] = node.path.join(sDir, node.path.basename(asFiles[i]));
            }
        }

        /**
         * The label, if any, will always be first in the list; this shouldn't be a concern since there is currently
         * no support for building "bootable" disks from a set of files.
         *
         * By default, I prefer a hard-coded date/time, because it avoids creating different disk images every time this is run.
         */
        if (label && (!driveInfo || driveInfo.verDOS >= 2)) {
            let sPath = '/' + node.path.basename(label);
            let file = {path: sPath, name: label, attr: DiskInfo.ATTR.VOLUME, date: dateLabel || new Date(), size: 0};
            aFiles.push(file);
        }

        let iFile;
        for (iFile = 0; iFile < asFiles.length && this.nMaxCount > 0; iFile++, this.nMaxCount--) {
            /**
             * node.fs.readdirSync() already excludes "." and ".." but there are also a variety of hidden
             * files on *nix systems that begin with a period, which in general we should ignore, too.
             *
             * TODO: Consider an override option that will allow hidden file(s) to be included as well.
             */
            let sPath = asFiles[iFile];
            let sName = node.path.basename(sPath);
            if (sName.charAt(0) == '.') continue;
            let file = {path: (sPath[0] != '/' && sPath[1] != ':'? '/' : '') + sPath, name: sName, nameEncoding: "utf8"};
            /**
             * When statSync() is being handled by PCFS, it may include an "attr" property if the file or directory
             * originated from a DOS disk image or DOS archive.  Otherwise, we rely on the standard "mode" property.
             */
            let stats = node.fs.statSync(sPath);
            file.date = stats.mtime;
            if (stats.isDirectory()) {
                if (driveInfo && driveInfo.verDOS < 2) {
                    continue;
                }
                let sArchive = this.checkArchive(sPath, false);
                if (sArchive) {
                    // this.printf("warning: skipping directory matching archive: %s\n", sArchive);
                    continue;
                }
                file.attr = DiskInfo.ATTR.SUBDIR | (stats.attr|0);
                file.size = -1;
                file.data = new DataBuffer();
                file.files = this.readDirFiles(sPath + '/', null, null, fNormalize, iLevel + 1, driveInfo);
            } else {
                /**
                 * To properly deal with normalization of BASIC files, we first read the file into
                 * a DataBuffer and make sure the first byte isn't 0xFE or 0xFF (because that indicates
                 * the BASIC program is tokenized and should be left as-is).
                 *
                 * Once we're convinced we're dealing with a text file, we re-read the file with UTF-8
                 * encoding.  The assumption here is that YOU, by specifically requesting normalization,
                 * are telling us that the files being read here are "modern" (eg, UTF-8 or at least plain
                 * ASCII) files that should be converted to PC standards.
                 */
                let data = this.readFileSync(sPath, null);
                if (!data) continue;
                let fText = fNormalize && this.isTextFile(sName);
                if (fText) {
                    if (this.isBASICFile(sName)) {
                        if (data.length && data.readUInt8(0) >= 0xFE) fText = false;
                    }
                }
                if (fText) {
                    let text = this.readFileSync(sPath);
                    if (CharSet.isText(text, [0xFFFD])) {
                        let textNew = CharSet.toCP437(text, {'\uFFFD': 0x2A}).replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
                        if (textNew != text) {
                            this.printf(MESSAGE.FILE + MESSAGE.INFO, "replaced line endings in %s (size changed from %d to %d bytes)\n", sName, text.length, textNew.length);
                        }
                        text = textNew;
                    } else {
                        this.printf(MESSAGE.FILE + MESSAGE.INFO, "non-ASCII data in %s (line endings unchanged)\n", sName);
                    }
                    data = new DataBuffer(text);
                } else {
                    if (data.length != stats.size) {
                        this.printf("file data length (%d) does not match file size (%d)\n", data.length, stats.size);
                    }
                }
                file.attr = stats.attr;
                if (file.attr === undefined) {
                    file.attr = DiskInfo.ATTR.ARCHIVE;
                    if (!(stats.mode & 0o200)) {
                        file.attr |= DiskInfo.ATTR.READONLY;
                    }
                }
                file.size = data.length;
                file.data = data;
            }
            aFiles.push(file);
        }
        if (iFile < asFiles.length) {
            if (this.nMaxCount >= 0) {
                this.printf("warning: %d file limit reached, use --maxfiles # to increase\n", this.nMaxInit);
                this.nMaxCount = -1;
            }
        }
        if (done) {
            done(aFiles);
        }
        return aFiles;
    }

    /**
     * getArchiveFiles(zip, label, date, listing)
     *
     * @this {DiskLib}
     * @param {StreamZip} zip
     * @param {string} [label]
     * @param {Date} [date]
     * @param {string} [listing]
     * @returns {Array.<FileData>}
     */
    getArchiveFiles(zip, label, date, listing)
    {
        let aFiles = [];
        let comment = "";
        if (zip.comment) {
            //
            // TODO: We shouldn't be calling fromCP437() unless --normalize is specified,
            // and we should perhaps suppress comments entirely unless --verbose is specified.
            //
            // WARNING: Comments can be multi-line and we do not normalize the line-endings
            // (they are typically CR/LF).
            //
            comment = CharSet.fromCP437(zip.comment, true);
        }
        if (listing == "archive") {
            this.printf("\nreading: %s\n", zip.fileName);
            if (comment) {
                this.printf("%s\n", comment.trimEnd());
            }
            this.printf("\nFilename        Length   Method       Size  Ratio   Date       Time       CRC\n");
            this.printf("--------        ------   ------       ----  -----   ----       ----       ---\n");
        }
        let messages = "";
        let entries = Object.values(zip.entries());

        if (label) {
            let file = {path: '/' + label, name: label, attr: DiskInfo.ATTR.VOLUME, date, size: 0};
            //
            // We attach any archive comment to the label entry, which never actually exists in an archive.
            //
            if (comment) {
                file.comment = comment;
            }
            aFiles.push(file);
        }

        for (let entry of entries) {

            let path = entry.name.replace(/:/g, '_');
            let name = node.path.basename(path);
            let file = {path, name, nameEncoding: "cp437"};
            /**
             * The 'time' field in StreamZip entries is a UTC time, which is unfortunate,
             * because file times stored in a ZIP file are *local* times.
             *
             * So I've updated StreamZip to include the file's local time as a Date object
             * ('date') in the entry object.  If it's not available (eg, we're using an older
             * version of StreamZip), then we'll fall back to our 'time' field work-around.
             */
            file.date = entry.date;
            if (!file.date) {
                let date = new Date(entry.time);
                file.date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
            }
            /**
             * Not all archives provide discrete entries for every subdirectory before they are
             * referenced, so we must always examine every entry for subdirectory components and
             * add them to the file list if they don't already exist.
             */
            let files = aFiles, subDir = "";
            let sep = file.path.indexOf('/') >= 0? '/' : '\\';
            let dirs = file.path.split(sep);
            if (!entry.isDirectory) {
                file.path = dirs.join(node.path.sep);
                file.name = dirs.pop();
            }
            for (let dir of dirs) {
                if (!dir || dir == '.') continue;
                subDir += dir + '/';
                let file = files.find(function(file) { return file.name == dir && file.attr == DiskInfo.ATTR.SUBDIR; });
                if (!file) {
                    file = {path: subDir, name: dir, attr: DiskInfo.ATTR.SUBDIR, size: -1, date, data: new DataBuffer(), files: []};
                    files.push(file);
                }
                files = file.files;
            }
            /**
             * Notes regarding ARC compression method "naming conventions":
             *
             * I've not yet seen any examples of Method5 or Method7 "in the wild", but I have seen Method6
             * (see PC-SIG DISK0568: 123EGA.ARC), which PKXARC.EXE called "crunched" (with a lower-case "c"),
             * distinct from Method8 which it called "Crunched" (with an upper-case "C").
             *
             * Technically, yes, methods 5-7 and method 8 were all called "crunching", but 5-7 performed LZW
             * compression (with unpacked (5), packed (6), and "new hash" (7) variants) while method 8 performed
             * "dynamic" LZW compression.
             *
             * To distinguish the methods better, I'm going call 5-7 "Crunch" and 8 "Crush", placing method 8
             * squarely between "Crunch" and "Squash".
             */
            const methodsARC = [
                "Store", "Pack", "Squeeze", "Crunch5", "Crunch", "Crunch7", "Crush", "Squash"
            ];
            /**
             * Deflate is the modern zlib standard (not sure about Deflate64); the rest are "legacy" methods.
             * I'm also not sure when Deflate came into existence; it's certainly not used by ANY of the thousands
             * of PC-SIG 9th edition ZIP files.
             */
            const methodsZIP = [
                "Store", "Shrink", "Reduce1", "Reduce2", "Reduce3", "Reduce4", "Implode", undefined, "Deflate", "Deflate64", "Implode2"
            ];
            let method = entry.method < 0? methodsARC[-entry.method - 2] : methodsZIP[entry.method];
            if (entry.encrypted) method += '*';
            if (!entry.isDirectory) {
                /**
                 * HACK to skip decompression for all entries except a named entry.
                 */
                let data;
                if (!listing || listing == "archive" || listing == "csv" || listing == entry.name) {
                    data = zip.entryDataSync(entry.name);
                    data = new DataBuffer(data || 0);
                } else {
                    data = new DataBuffer(entry.size);
                }
                file.attr = DiskInfo.ATTR.ARCHIVE;
                file.size = data.length;
                file.data = data;
                //
                // For archives, we're going to supplement the file object with some additional information.
                //
                file.method = method;
                file.compressedSize = entry.compressedSize;
                file.crc = entry.crc;
                if (entry.comment) {
                    file.comment = CharSet.fromCP437(entry.comment, true);
                }
                if (entry.messages && entry.messages.length) {
                    file.messages = entry.messages;
                }
                files.push(file);
            }
            if (listing == "archive") {
                if (entry.messages && entry.messages.length) {
                    for (let message of entry.messages) {
                        messages += message + "\n";
                    }
                }
                let filename = CharSet.fromCP437(file.name);
                if (filename.length > 14) {
                    filename = "..." + filename.slice(filename.length - 11);
                }
                let filesize = file.size || 0;
                if (filesize < 0) {
                    filesize = 0;
                    filename += node.path.sep;
                }
                if (!filename) {
                    filename = "[NoName]";
                }
                let ratio = filesize > entry.compressedSize? Math.round(100 * (filesize - entry.compressedSize) / filesize) : 0;
                if (entry.errors) filesize = -1;
                if (!Device.DEBUG) {
                    let text = "";
                    if (entry.comment) {
                        //
                        // WARNING: Comments can be multi-line and we do not normalize the line-endings
                        // (they are typically CR/LF).
                        //
                        text = "  <" + CharSet.fromCP437(entry.comment, true) + ">";
                    }
                    this.printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x%s\n",
                        filename, filesize, method, entry.compressedSize, ratio, file.date, zip.arcType == node.StreamZip.TYPE_ARC? 4 : 8, entry.crc, text);
                } else {
                    this.printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x  %#010x\n",
                        filename, filesize, method, entry.compressedSize, ratio, file.date, zip.arcType == node.StreamZip.TYPE_ARC? 4 : 8, entry.crc, entry.offset);
                }
            }
        }
        if (messages) this.printf("%s", messages);
        if (listing == "archive") this.printf("\n");
        return aFiles;
    }

    /**
     * getTargetValue(sTarget)
     *
     * Target is normally a number in Kb (eg, 360 for a 360K diskette); you can also add a suffix (eg, K or M).
     * K is assumed, whereas M will automatically produce a Kb value equal to the specified Mb value (eg, 10M is
     * equivalent to 10240K).
     *
     * If neither K nor M is specified AND the value is "large" (more than 1M), it's automatically converted to Kb.
     *
     * @this {DiskLib}
     * @param {string} sTarget
     * @returns {number} (target Kb for disk image, 0 if no target)
     */
    getTargetValue(sTarget)
    {
        let target = 0;
        if (sTarget) {
            let match = sTarget.match(/^(PC|)([0-9.]+)(K|M|)$/i);
            if (match) {
                target = +match[2];
                let multiplier = match[3].toUpperCase();
                if (multiplier == 'M') {
                    target *= 1024;
                }
                else if (!multiplier && target >= 1000000) {
                    target = Math.round(target / 1024);
                }
            }
        }
        return target;
    }

    /**
     * readArchiveFiles(sArchive, arcType, arcOffset, label, sPassword, listing, done)
     *
     * @this {DiskLib}
     * @param {string} sArchive (ARC/ZIP filename)
     * @param {number} arcType (1 for ARC, 2 for ZIP)
     * @param {number} arcOffset (0 if none)
     * @param {string} label (optional volume label)
     * @param {string} sPassword (optional password)
     * @param {string} listing (listing options, if any)
     * @param {function(Array.<FileData>)} done
     */
    readArchiveFiles(sArchive, arcType, arcOffset, label, sPassword, listing, done)
    {
        let diskLib = this;
        let stats = node.fs.statSync(sArchive);
        let zip = new node.StreamZip({
            file: sArchive,
            password: sPassword,
            arcType: arcType,
            arcOffset: arcOffset,
            storeEntries: true,
            nameEncoding: "ascii",
            // printfDebug: this.printf,
            holdErrors: true
        });
        zip.on('ready', function readArchiveFilesReady() {
            let aFileData = diskLib.getArchiveFiles(zip, label, stats.mtime, listing);
            zip.close();
            done(aFileData);
        });
        zip.on('error', function readArchiveFilesError(err) {
            if (listing != "csv") {
                diskLib.printError(err, sArchive);
            } else {
                let pathName = sArchive.replace(/"/g, '""');
                let fileName = node.path.basename(pathName);
                pathName = node.path.dirname(pathName);
                diskLib.printf(",,,,,,\"%s\",\"%s\",\"%s\",\n", fileName, pathName, err.message);
            }
        });
    }

    /**
     * readDiskAsync(diskFile, forceBPB, driveInfo)
     *
     * @this {DiskLib}
     * @param {string} diskFile
     * @param {boolean} [forceBPB]
     * @param {DriveInfo} [driveInfo]
     */
    async readDiskAsync(diskFile, forceBPB, driveInfo)
    {
        let db, di;
        try {
            let diskName = node.path.basename(diskFile);
            let ext = StrLib.getExtension(diskName);
            diskFile = this.getServerPath(diskFile);
            this.printf(MESSAGE.DEBUG, "reading: %s\n", diskFile);
            if (diskFile.startsWith("http")) {
                let response = await fetch(diskFile);
                if (response.ok) {
                    if (ext == "json") {
                        db = await response.text();
                    } else {
                        db = await response.arrayBuffer();
                    }
                } else {
                    throw new Error("error reading " + diskFile + " (" + response.status + ")");
                }
            } else {
                db = await this.readFile(diskFile, ext == "json"? "utf8" : null);
            }
            if (db) {
                di = new DiskInfo(this.device, diskName);
                if (ext == "json") {
                    if (!di.buildDiskFromJSON(db)) di = null;
                }
                else if (ext == "zip" || ext == "arc" || ext == "exe") {
                    let diskLib = this;
                    db = new DataBuffer(db);
                    let zip = new node.StreamZip({
                        file: diskName,
                        buffer: db.buffer,
                        arcType: ext == "arc"? node.StreamZip.TYPE_ARC : node.StreamZip.TYPE_ZIP,
                        storeEntries: true,
                        nameEncoding: "ascii"
                    }).on('ready', () => {
                        let aFileData = diskLib.getArchiveFiles(zip);
                        let db = new DataBuffer();
                        di.buildDiskFromFiles(db, diskName, aFileData);
                        zip.close();
                    }).on('error', (err) => {
                        zip.close();
                        throw err;
                    });
                    zip.open();
                }
                else {
                    db = new DataBuffer(db);
                    if (ext == "psi") {
                        if (!di.buildDiskFromPSI(db)) di = null;
                    } else {
                        if (!di.buildDiskFromBuffer(db, forceBPB, this.getHash, driveInfo)) di = null;
                    }
                }
            }
        } catch(err) {
            this.printError(err, diskFile);
            return null;
        }
        return di;
    }

    /**
     * readDiskSync(diskFile, forceBPB)
     *
     * @this {DiskLib}
     * @param {string} diskFile
     * @param {boolean} [forceBPB]
     * @param {DriveInfo} [driveInfo]
     * @returns {DiskInfo|null}
     */
    readDiskSync(diskFile, forceBPB, driveInfo)
    {
        let db, di;
        try {
            let diskName = node.path.basename(diskFile);
            di = new DiskInfo(this.device, diskName);
            if (StrLib.getExtension(diskName) == "json") {
                db = this.readFileSync(diskFile);
                if (!db) {
                    di = null;
                } else {
                    if (!di.buildDiskFromJSON(db)) di = null;
                }
            }
            else {
                /**
                 * Passing null for the encoding parameter tells readFileSync() to return a DataBuffer.
                 */
                db = this.readFileSync(diskFile, null);
                if (!db) {
                    di = null;
                } else {
                    if (StrLib.getExtension(diskName) == "psi") {
                        if (!di.buildDiskFromPSI(db)) di = null;
                    } else {
                        if (!di.buildDiskFromBuffer(db, forceBPB, this.getHash, driveInfo)) di = null;
                    }
                }
            }
            if (di) {
                let sDir = this.getLocalPath(diskFile.replace(/\.[a-z]+$/i, ""));
                // sDir = node.path.join(node.path.dirname(sDir), "archive", node.path.basename(sDir));
                let aDiskFiles = node.glob.sync(node.path.join(sDir, "**"));
                for (let i = 0; i < aDiskFiles.length; i++) {
                    this.addMetaData(di, sDir, aDiskFiles[i].slice(sDir.length));
                }
            }
        } catch(err) {
            this.printError(err);
            return null;
        }
        return di;
    }

    /**
     * readFile(sFile, encoding)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @param {string|null} [encoding]
     */
    async readFile(sFile, encoding = "utf8")
    {
        sFile = this.getLocalPath(sFile);
        return new Promise((resolve, reject) => {
            node.fs.readFile(sFile, encoding, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    /**
     * readFileAsync(sFile, encoding, quiet)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @param {string|null} [encoding]
     * @param {boolean} [quiet]
     * @returns {DataBuffer|string|undefined}
     */
    async readFileAsync(sFile, encoding = "utf8", quiet = false)
    {
        let db;
        sFile = this.getServerPath(sFile);
        this.printf(MESSAGE.DEBUG, "reading: %s\n", sFile);
        try {
            if (sFile.startsWith("http")) {
                let response = await fetch(sFile);
                if (response.ok) {
                    if (encoding) {
                        db = await response.text();
                    } else {
                        db = await response.arrayBuffer();
                    }
                }
            } else {
                db = await this.readFile(sFile, encoding);
            }
        } catch(err) {
            if (!quiet) this.printError(err);
        }
        if (db && !encoding) {
            db = new DataBuffer(db);
        }
        return db;
    }

    /**
     * readFileSync(sFile, encoding, quiet)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @param {string|null} [encoding]
     * @param {boolean} [quiet]
     * @returns {DataBuffer|string|undefined}
     */
    readFileSync(sFile, encoding = "utf8", quiet = false)
    {
        let data;
        if (sFile) {
            try {
                sFile = this.getLocalPath(sFile);
                data = node.FileLib.readFileSync(sFile, encoding);
            } catch(err) {
                if (!quiet) this.printError(err);
            }
        }
        return data;
    }

    /**
     * readJSONSync(sFile)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @returns {Object|undefined}
     */
    readJSONSync(sFile)
    {
        let data, json;
        try {
            data = this.readFileSync(sFile);
            json = JSON.parse(data);
        } catch(err) {
            this.printError(err);
        }
        return json;
    }

    /**
     * writeDiskSync(diskFile, di, fLegacy, indent, fOverwrite, fQuiet, fWritable, source)
     *
     * @this {DiskLib}
     * @param {string} diskFile
     * @param {DiskInfo} di
     * @param {boolean} [fLegacy]
     * @param {number} [indent]
     * @param {boolean} [fOverwrite]
     * @param {boolean} [fQuiet]
     * @param {boolean} [fWritable]
     * @param {string} [source]
     * @returns {boolean}
     */
    writeDiskSync(diskFile, di, fLegacy = false, indent = 0, fOverwrite = false, fQuiet = false, fWritable = false, source = "")
    {
        let diskName = node.path.basename(diskFile);
        try {
            let fExists = this.existsFile(diskFile);
            if (!fExists || fOverwrite) {
                let data;
                let diskFileLC = diskFile.toLowerCase();
                if (diskFileLC.endsWith(".json")) {
                    data = di.getJSON(this.getHash, fLegacy, 0, source);
                } else {
                    let db = new DataBuffer(di.getSize());
                    if (di.getData(db, fLegacy)) data = db.buffer;
                }
                if (data) {
                    if (!fQuiet) this.printf("writing %s...\n", diskFile);
                    diskFile = this.getLocalPath(diskFile);
                    let sDir = node.path.dirname(diskFile);
                    this.makeDir(sDir, true);
                    if (fExists) node.fs.unlinkSync(diskFile);
                    node.fs.writeFileSync(diskFile, data);
                    if (diskFileLC.endsWith(".img") && !fWritable) node.fs.chmodSync(diskFile, 0o444);
                    return true;
                }
                this.printf("%s not written, no data\n", diskName);
            } else {
                if (!fQuiet) this.printf("warning: %s exists, use --overwrite to replace\n", diskFile);
            }
        }
        catch(err) {
            this.printError(err);
        }
        return false;
    }

    /**
     * writeFileSync(sFile, data, fCreateDir, fOverwrite, attr, fQuiet)
     *
     * @this {DiskLib}
     * @param {string} sFile
     * @param {DataBuffer|Array|string|undefined} data
     * @param {boolean} [fCreateDir]
     * @param {boolean} [fOverwrite]
     * @param {number} [attr]
     * @param {boolean} [fQuiet]
     * @returns {boolean}
     */
    writeFileSync(sFile, data, fCreateDir, fOverwrite, attr = undefined, fQuiet = false)
    {
        if (sFile) {
            try {
                if (data === undefined) {
                    data = [];
                }
                if (data instanceof DataBuffer) {
                    data = data.buffer;
                } else if (Array.isArray(data)) {
                    data = new DataBuffer(data).buffer;
                }
                if (fCreateDir) {
                    let sDir = node.path.dirname(sFile);
                    this.makeDir(sDir, true);
                }
                let fExists = this.existsFile(sFile);
                if (fExists && fOverwrite) {
                    node.fs.chmodSync(sFile, 0o644);
                }
                if (!fExists || fOverwrite) {
                    node.fs.writeFileSync(sFile, data);
                    if (attr !== undefined) {
                        let mode = (attr & DiskInfo.ATTR.READONLY)? 0o444 : 0o644;
                        node.fs.chmodSync(sFile, mode, attr);
                    }
                    return true;
                }
                if (!fQuiet) this.printf("warning: %s exists, use --overwrite to replace\n", sFile);
            } catch(err) {
                this.printError(err);
            }
        }
        return false;
    }

    /**
     * setRootDir(sRoot, sHome, fLocalDisks)
     *
     * @this {DiskLib}
     * @param {string} sRoot
     * @param {string} sHome
     * @param {boolean} [fLocalDisks]
     */
    setRootDir(sRoot, sHome, fLocalDisks = false)
    {
        node.FileLib.setRootDir(sRoot, sHome, fLocalDisks);
    }
}
