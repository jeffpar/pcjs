/**
 * @fileoverview Disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device from "../../../machines/modules/device.js";
import FileInfo from "./fileinfo.js";

/**
* @typedef {Object} Sector
* @property {number} c
* @property {number} h
* @property {number} s
* @property {number} l
* @property {Array.<number>} d
* @property {number} dataMark
* @property {number} headCRC
* @property {boolean} headError
* @property {number} dataCRC
* @property {boolean} dataError
* @property {number} iModify
* @property {number} cModify
* @property {FileInfo} file
* @property {number} offFile
*/

/**
 * @class DiskImage
 * @property {Array} aDiskData
 * @property {number} cbDiskData
 * @property {number} nCylinders
 * @property {number} nHeads
 * @property {number} nSectors
 * @property {number} cbSector
 * @property {number} dwChecksum
 * @property {Array.<FileInfo>} aFileTable
 */
export default class DiskImage {
    /**
     * DiskImage(db)
     *
     * @this DiskImage
     * @param {Device} device
     * @param {DataBuffer|string} db
     * @param {string} [name]
     * @param {boolean} [fRead]
     * @param {boolean} [fWrite]
     */
    constructor(device, db, name, fRead, fWrite)
    {
        this.device = device;
        this.printf = device.printf.bind(device);
        this.assert = device.assert.bind(device);

        this.diskName = name || "[DiskImage]";

        if (typeof db == "string") {
            this.buildDiskFromJSON(db);
        } else {
            this.buildDiskFromBuffer(db, fRead, fWrite);
        }
    }

    /**
     * buildDiskFromBuffer(db, fRead, fWrite)
     *
     * Builds a disk image from a DataBuffer; set fRead to true if the image will be used for reading by
     * the caller, and set fWrite to true if it will also be used for writing.
     *
     * All callers are now required to convert their data to a DataBuffer first.  For example, if the caller
     * received an ArrayBuffer from a FileReader object, they must first create a DataBuffer from the ArrayBuffer.
     *
     * @this {DiskImage}
     * @param {DataBuffer} db
     * @param {boolean} [fRead]
     * @param {boolean} [fWrite]
     * @returns {boolean} true if successful (aDiskData initialized); false otherwise
     */
    buildDiskFromBuffer(db, fRead, fWrite)
    {
        this.aDiskData = null;
        this.cbDiskData = db.length;
        this.dwChecksum = 0;
        let diskFormat = DiskImage.GEOMETRIES[this.cbDiskData];
        if (diskFormat) {
            let ib = 0;
            this.nCylinders = diskFormat[0];
            this.nHeads = diskFormat[1];
            this.nSectors = diskFormat[2];
            this.cbSector = (diskFormat[3] || 512);
            this.aDiskData = new Array(this.nCylinders);
            for (let iCylinder = 0; iCylinder < this.aDiskData.length; iCylinder++) {
                let cylinder = this.aDiskData[iCylinder] = new Array(this.nHeads);
                for (let iHead = 0; iHead < cylinder.length; iHead++) {
                    let head = cylinder[iHead] = new Array(this.nSectors);
                    for (let iSector = 0; iSector < head.length; iSector++) {
                        let sector = this.buildSector(iCylinder, iHead, iSector + 1, this.cbSector, db, ib, fRead);
                        if (fWrite) {
                            /*
                             * If this disk is writable (ie, will be loaded into a machine with a read/write drive),
                             * then we also maintain the following information on a per-sector basis, as sectors are modified:
                             *
                             *      iModify:    index of first modified dword in sector
                             *      cModify:    number of modified dwords in sector
                             *      fDirty:     true if sector is dirty, false if clean (or cleaning in progress)
                             */
                            sector.iModify = sector.cModify = 0;
                            sector.fDirty = false;
                        }
                        head[iSector] = sector;
                        ib += this.cbSector;
                    }
                }
            }
            if (fRead) this.buildFileTable();
            return true;
        }
        return false;
    }

    /**
     * buildFileTable()
     *
     * This function builds (or rebuilds) a complete file table from the (first) FAT volume found on the current
     * disk, and then updates all the sector objects to point back to the corresponding file.  Used for BACKTRACK
     * and SYMBOLS support.  Because this is an expensive operation, in terms of both time and memory, it should
     * only be called when a disk is mounted or has been modified (eg, by applying deltas from a saved machine state).
     *
     * More recently, the FileInfo objects in the table have been enhanced to include debugging information if
     * the file is an EXE or DLL, which we determine merely by checking the file extension.
     *
     * Note that while most of the methods in this module use CHS-style parameters, because our primary clients
     * are old disk controllers that deal exclusively with cylinder/head/sector values, here we use 0-based
     * "volume" sector numbers for volume-relative block addresses (aka VBAs or Volume Block Addresses), and
     * 0-based "logical" sector numbers for disk-relative block addresses (aka LBAs or Logical Block Addresses).
     *
     * @this {DiskImage}
     */
    buildFileTable()
    {
        this.deleteFileData();

        this.aFileTable = [];

        let i, off, dir = {}, iSector;
        let cbDisk = this.nCylinders * this.nHeads * this.nSectors * this.cbSector;

        let sectorBoot = this.getSector(0);
        if (!sectorBoot) {
            if (Device.DEBUG) this.printf(Device.MESSAGE.FILE, "buildFileTable(): unable to read boot sector\n");
            return;
        }

        dir.lbaVolume = dir.vbaTotal = 0;
        dir.cbSector = this.getSectorData(sectorBoot, DiskImage.BPB.SECTOR_BYTES, 2);

        if (dir.cbSector != this.cbSector) {
            /*
             * When the first sector doesn't appear to contain a valid BPB, the most likely explanations are:
             *
             *      1. The image is from a diskette formatted by DOS 1.xx, which didn't use BPBs
             *      2. The image is a fixed (partitioned) disk and the first sector is actually an MBR
             *      3. The image is from a diskette that used a non-standard sector size (ie, not 512)
             *
             * To start, if this is an 160Kb disk (circa DOS 1.00) or a 320Kb disk (circa DOS 1.10), then we'll
             * assume it's a 12-bit FAT, set assorted BPB values accordingly, and see if our assumption holds up.
             */
            dir.vbaFAT = 1;
            dir.nFATBits = 12;
            dir.vbaRoot = dir.vbaFAT + 2;   // both 160Kb and 320Kb disks contained 2 FATs, each containing 1 sector
            dir.nClusterSecs = 1;
            dir.cbSector = this.cbSector;

            if (cbDisk == 160 * 1024 && this.getClusterEntry(dir, 0, 0) == DiskImage.FAT.MEDIA_160KB) {
                dir.vbaTotal = 320;
                dir.nEntries = 64;
            }
            else if (cbDisk == 320 * 1024 && this.getClusterEntry(dir, 0, 0) == DiskImage.FAT.MEDIA_320KB) {
                dir.vbaTotal = 640;
                dir.nEntries = 112;
                this.assert(this.nHeads == 2);
                dir.nClusterSecs++;         // 320Kb disks use 2 sectors/cluster
            }
            else {
                /*
                 * So, this is either a fixed (partitioned) disk, or a disk using a non-standard sector size; let's assume
                 * the former and check for an MBR.  For now, we're only going to process the first active partition we find.
                 */
                off = DiskImage.MBR.PARTITIONS.OFFSET;
                for (i = 0; i < 4; i++) {
                    let bStatus = this.getSectorData(sectorBoot, off + DiskImage.MBR.PARTITIONS.ENTRY.STATUS, 1);
                    if (bStatus == DiskImage.MBR.PARTITIONS.STATUS.ACTIVE) {
                        dir.lbaVolume = this.getSectorData(sectorBoot, off + DiskImage.MBR.PARTITIONS.ENTRY.VBA_FIRST, 4);
                        sectorBoot = this.getSector(dir.lbaVolume);
                        if (sectorBoot && this.getSectorData(sectorBoot, DiskImage.BPB.SECTOR_BYTES, 2) != this.cbSector) {
                            sectorBoot = null;
                        }
                        break;
                    }
                    off += DiskImage.MBR.PARTITIONS.ENTRY_LENGTH;
                }
                if (i == 4) sectorBoot = null;
            }
            if (!sectorBoot) {
                if (Device.DEBUG) {
                    this.printf(Device.MESSAGE.FILE, "buildFileTable(): unrecognized %d-byte disk image with %d-byte sectors\n", cbDisk, this.cbSector);
                }
                return;
            }
        }

        if (!dir.vbaTotal) {
            dir.vbaTotal = this.getSectorData(sectorBoot, DiskImage.BPB.TOTAL_SECS, 2) || this.getSectorData(sectorBoot, DiskImage.BPB.LARGE_SECS, 4);
            dir.vbaFAT = this.getSectorData(sectorBoot, DiskImage.BPB.RESERVED_SECS, 2);
            dir.vbaRoot = dir.vbaFAT + this.getSectorData(sectorBoot, DiskImage.BPB.FAT_SECS, 2) * this.getSectorData(sectorBoot, DiskImage.BPB.TOTAL_FATS, 1);
            dir.nEntries = this.getSectorData(sectorBoot, DiskImage.BPB.ROOT_DIRENTS, 2);
            dir.nClusterSecs = this.getSectorData(sectorBoot, DiskImage.BPB.CLUSTER_SECS, 1);
        }

        dir.vbaData = dir.vbaRoot + (((dir.nEntries * DiskImage.DIRENT.LENGTH + (dir.cbSector - 1)) / dir.cbSector) | 0);
        dir.nClusters = (((dir.vbaTotal - dir.vbaData) / dir.nClusterSecs) | 0);

        /*
         * In all FATs, the first valid cluster number is 2, as 0 is used to indicate a free cluster and 1 is reserved.
         *
         * In a 12-bit FAT chain, the largest valid cluster number (clusterMax) is 0xFF6; 0xFF7 is reserved for marking
         * bad clusters and should NEVER appear in a cluster chain, and 0xFF8-0xFFF are used to indicate the end of a chain.
         * Reports that cluster numbers 0xFF0-0xFF6 are "reserved" (eg, http://support.microsoft.com/KB/65541) should be
         * ignored; those numbers may have been considered "reserved" at some early point in FAT's history, but no longer.
         *
         * Since 12 bits yield 4096 possible values, and since 11 of the values (0, 1, and 0xFF7-0xFFF) cannot be used to
         * refer to an actual cluster, that leaves a theoretical maximum of 4085 clusters for a 12-bit FAT.  However, for
         * reasons that only a small (and shrinking -- RIP AAR) number of people know, the actual cut-off is 4084.
         *
         * So, a FAT volume with 4084 or fewer clusters uses a 12-bit FAT, a FAT volume with 4085 to 65524 clusters uses
         * a 16-bit FAT, and a FAT volume with more than 65524 clusters uses a 32-bit FAT.
         *
         * TODO: Eventually add support for FAT32.
         */
        dir.nFATBits = (dir.nClusters <= DiskImage.FAT12.MAX_CLUSTERS? 12 : 16);
        dir.clusterMax = (dir.nFATBits == 12? DiskImage.FAT12.CLUSNUM_MAX : DiskImage.FAT16.CLUSNUM_MAX);

        if (Device.DEBUG) {
            this.printf(Device.MESSAGE.FILE, "buildFileTable()\n  vbaFAT: %d\n  vbaRoot: %d\n  vbaData: %d\n  vbaTotal: %d\n  nClusterSecs: %d\n  nClusters: %d\n", dir.vbaFAT, dir.vbaRoot, dir.vbaData, dir.vbaTotal, dir.nClusterSecs, dir.nClusters);
        }

        /*
         * The following assertion is here only to catch anomalies; it is NOT a requirement that the number of data sectors
         * be a perfect multiple of nClusterSecs, but if it ever happens, it's worth verifying we didn't miscalculate something.
         */
        i = (dir.vbaTotal - dir.vbaData) % dir.nClusterSecs;
        if (i) {
            if (Device.DEBUG) {
                this.printf(Device.MESSAGE.FILE, "buildFileTable(): %d-byte disk image wasting %d sectors\n", cbDisk, i);
            }
        }

        /*
         * Similarly, it is NOT a requirement that the size of all root directory entries be a perfect multiple of the sector
         * size (cbSector), but it may indicate a problem if it's not.  Note that when it comes time to read the root directory,
         * we treat it exactly like any other directory; that is, we ignore the nEntries value and scan the entire contents of
         * every sector allocated to the directory.  TODO: Determine whether DOS reads all root sector contents or only nEntries
         * (ie, create a test volume where nEntries * 32 is NOT a multiple of cbSector and watch what happens).
         */
        this.assert(!((dir.nEntries * DiskImage.DIRENT.LENGTH) % dir.cbSector));

        let aLBA = [];
        for (let vba = dir.vbaRoot; vba < dir.vbaData; vba++) aLBA.push(dir.lbaVolume + vba);
        this.getDir(dir, "", aLBA);

        /*
         * Create the sector-to-file mappings now.
         */
        for (i = 0; i < this.aFileTable.length; i++) {
            let file = this.aFileTable[i];
            if (file.name[0] == '.') continue;
            off = 0;
            for (iSector = 0; iSector < file.aLBA.length; iSector++) {
                this.updateSector(file, file.aLBA[iSector], off);
                off += this.cbSector;
            }
            file.loadSymbols();
        }
    }

    /**
     * deleteFileData()
     *
     * In order for buildFileTable() to rebuild an existing table (eg, after deltas have been
     * applied), we need to zap any and all existing file table references in the sector data.
     *
     * @this {DiskImage}
     */
    deleteFileData()
    {
        if (this.aFileTable && this.aFileTable.length) {
            let aDiskData = this.aDiskData;
            for (let iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                for (let iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                        let sector = aDiskData[iCylinder][iHead][iSector];
                        if (sector) {
                            delete sector[DiskImage.SECTOR.FILE_INFO];
                            delete sector[DiskImage.SECTOR.FILE_OFFSET];
                        }
                    }
                }
            }
        }
    }

    /**
     * getFileListing()
     *
     * @returns {string}
     */
    getFileListing()
    {
        let sListing = "";
        if (this.aFileTable) {
            let curDir = null;
            let cbDir = 0, nDir = 0;
            let cbTotal = 0, nTotal = 0;
            let getTotal = function(nDir, cbDir) {
                return this.device.sprintf(" %8d file(s)   %8d bytes\n", nDir, cbDir);
            }.bind(this);
            for (let i = 0; i < this.aFileTable.length; i++) {
                let file = this.aFileTable[i];
                let name = file.name;
                let j = file.path.lastIndexOf('\\');
                let dir = file.path.substring(0, j);
                if (!dir) dir = "\\";
                let ext = "";
                if (name[0] != '.') {
                    j = name.indexOf(".");
                    if (j >= 0) {
                        ext = name.substr(j + 1);
                        name = name.substr(0, j);
                    }
                }
                if (curDir != dir) {
                    if (curDir != null) {
                        sListing += getTotal(nDir, cbDir);
                    }
                    curDir = dir;
                    sListing += this.device.sprintf("\nDirectory of A:%s\n\n", dir);
                    cbDir = nDir = 0;
                }
                let sSize;
                if (file.attr & DiskImage.ATTR.SUBDIR) {
                    sSize = "<DIR>    ";
                } else {
                    sSize = this.device.sprintf("%9d", file.size);
                    cbDir += file.size;
                    cbTotal += file.size;
                }
                sListing += this.device.sprintf("%-8s %-3s %s  %#2M-%#02D-%#0.2Y  %#2I:%#02N%#.1A\n", name, ext, sSize, file.date);
                nTotal++;
                nDir++;
            }
            sListing += getTotal(nDir, cbDir);
            if (nTotal > nDir) {
                sListing += "\nTotal files listed:\n"
                sListing += getTotal(nTotal, cbTotal);
            }
        }
        return sListing;
    }

    /**
     * getModuleInfo(sModule, nSegment)
     *
     * If the given module and segment number is found, we return an Array of symbol offsets, indexed by symbol name.
     *
     * @this {DiskImage}
     * @param {string} sModule
     * @param {number} nSegment
     * @return {Object}
     */
    getModuleInfo(sModule, nSegment)
    {
        let aSymbols = {};
        if (this.aFileTable) {
            for (let iFile = 0; iFile < this.aFileTable.length; iFile++) {
                let file = this.aFileTable[iFile];
                if (file.sModule != sModule) continue;
                let segment = file.aSegments[nSegment];
                if (!segment) continue;
                for (let iOrdinal in segment.aEntries) {
                    let entry = segment.aEntries[iOrdinal];
                    /*
                     * entry[1] is the symbol name, which becomes the index, and entry[0] is the offset.
                     */
                    aSymbols[entry[1]] = entry[0];
                }
                break;
            }
        }
        return aSymbols;
    }

    /**
     * getSymbolInfo(sSymbol)
     *
     * For all whole or partial symbol matches, return them in an Array of entries:
     *
     *      [symbol, file name, segment number, segment offset, segment size].
     *
     * TODO: This function has many limitations (ie, slow, case-sensitive), but it gets the job done for now.
     *
     * @this {DiskImage}
     * @param {string} sSymbol
     * @return {Array}
     */
    getSymbolInfo(sSymbol)
    {
        let aInfo = [];
        if (this.aFileTable) {
            let sSymbolUpper = sSymbol.toUpperCase();
            for (let iFile = 0; iFile < this.aFileTable.length; iFile++) {
                let file = this.aFileTable[iFile];
                for (let iSegment in file.aSegments) {
                    let segment = file.aSegments[iSegment];
                    for (let iOrdinal in segment.aEntries) {
                        let entry = segment.aEntries[iOrdinal];
                        if (entry[1] && entry[1].indexOf(sSymbolUpper) >= 0) {
                            aInfo.push([entry[1], file.name, iSegment, entry[0], segment.offEnd - segment.offStart]);
                        }
                    }
                }
            }
        }
        return aInfo;
    }

    /**
     * getDir(dir, path, aLBA)
     *
     * @this {DiskImage}
     * @param {Object} dir
     * @param {string} path
     * @param {Array.<number>} aLBA
     */
    getDir(dir, path, aLBA)
    {
        let file;
        let iStart = this.aFileTable.length;
        let nEntriesPerSector = (dir.cbSector / DiskImage.DIRENT.LENGTH) | 0;

        dir.path = path + "\\";

        if (Device.DEBUG) this.printf('getDir("%s","%s")\n', this.diskName, dir.path);

        for (let iSector = 0; iSector < aLBA.length; iSector++) {
            let lba = aLBA[iSector];
            for (let iEntry = 0; iEntry < nEntriesPerSector; iEntry++) {
                if (!this.getDirEntry(dir, lba, iEntry)) {
                    iSector = aLBA.length;
                    break;
                }
                if (dir.name == null /* || dir.name == "." || dir.name == ".." */) continue;
                let path = dir.path + dir.name;
                let dateMod = this.device.parseDate(
                    (dir.modDate >> 9) + 1980,
                    ((dir.modDate >> 5) & 0xf) - 1,
                    (dir.modDate & 0x1f),
                    (dir.modTime >> 11),
                    (dir.modTime >> 5) & 0x3f,
                    (dir.modTime & 0x1f) << 1
                );
                file = new FileInfo(this, path, dir.name, dir.attr, dateMod, dir.size, dir.cluster, dir.aLBA);
                this.aFileTable.push(file);
            }
        }

        let iEnd = this.aFileTable.length;

        for (let i = iStart; i < iEnd; i++) {
            file = this.aFileTable[i];
            if ((file.attr & DiskImage.ATTR.SUBDIR) && file.aLBA.length && file.name[0] != '.') {
                this.getDir(dir, path + "\\" + file.name, file.aLBA);
            }
        }
    }

    /**
     * getDirEntry(dir, lba, i)
     *
     * This sets the following properties on the 'dir' object:
     *
     *      sName (null if invalid/deleted entry)
     *      attr
     *      size
     *      cluster
     *      aLBA (ie, array of physical block addresses)
     *
     * On return, it's the caller's responsibility to copy out any data into a new object
     * if it wants to preserve any of the above information.
     *
     * This function also caches the following properties in the 'dir' object:
     *
     *      lbaDirCache (of the last directory sector read, if any)
     *      sectorDirCache (of the last directory sector read, if any)
     *
     * Also, the caller must also set the following 'dir' helper properties, so that clusters
     * can be located and converted to sectors (see convertClusterToSectors):
     *
     *      vbaFAT
     *      vbaData
     *      cbSector
     *      clusterMax
     *      nClusterSecs
     *      nFATBits
     *
     * @this {DiskImage}
     * @param {Object} dir (to be filled in)
     * @param {number} lba (a sector of the directory)
     * @param {number} i (an entry in the directory sector, 0-based)
     * @returns {boolean} true if entry was returned (even if invalid/deleted), false if no more entries
     */
    getDirEntry(dir, lba, i)
    {
        if (!dir.sectorDirCache || !dir.lbaDirCache || dir.lbaDirCache != lba) {
            dir.lbaDirCache = lba;
            dir.sectorDirCache = this.getSector(dir.lbaDirCache);
            // if (Device.DEBUG) this.printf(Device.MESSAGE.DISK, this.dumpSector(dir.sectorDirCache, dir.lbaDirCache, dir.path));
        }
        if (dir.sectorDirCache) {
            let off = i * DiskImage.DIRENT.LENGTH;
            let b = this.getSectorData(dir.sectorDirCache, off, 1);
            if (b == DiskImage.DIRENT.UNUSED) {
                return false;
            }
            if (b == DiskImage.DIRENT.INVALID) {
                dir.name = null;
                return true;
            }
            dir.name = this.getSectorString(dir.sectorDirCache, off + DiskImage.DIRENT.NAME, 8).trim();
            let s = this.getSectorString(dir.sectorDirCache, off + DiskImage.DIRENT.EXT, 3).trim();
            if (s.length) dir.name += '.' + s;
            dir.attr = this.getSectorData(dir.sectorDirCache, off + DiskImage.DIRENT.ATTR, 1);
            dir.modDate = this.getSectorData(dir.sectorDirCache, off + DiskImage.DIRENT.MODDATE, 2);
            dir.modTime = this.getSectorData(dir.sectorDirCache, off + DiskImage.DIRENT.MODTIME, 2);
            dir.size = this.getSectorData(dir.sectorDirCache, off + DiskImage.DIRENT.SIZE, 4);
            dir.cluster = this.getSectorData(dir.sectorDirCache, off + DiskImage.DIRENT.CLUSTER, 2);
            dir.aLBA = this.convertClusterToSectors(dir);
            return true;
        }
        return false;
    }

    /**
     * convertClusterToSectors(dir)
     *
     * @this {DiskImage}
     * @param {Object} dir
     * @return {Array.<number>} of LBAs (physical block addresses)
     */
    convertClusterToSectors(dir)
    {
        let aLBA = [];
        let cluster = dir.cluster;
        if (cluster) {
            do {
                if (cluster < DiskImage.FAT12.CLUSNUM_MIN) {
                    this.assert(false);
                    break;
                }
                let vba = dir.vbaData + ((cluster - DiskImage.FAT12.CLUSNUM_MIN) * dir.nClusterSecs);
                for (let i = 0; i < dir.nClusterSecs; i++) {
                    aLBA.push(dir.lbaVolume + vba++);
                }
                cluster = this.getClusterEntry(dir, cluster, 0) | this.getClusterEntry(dir, cluster, 1);
            } while (cluster <= dir.clusterMax);
            this.assert(cluster != dir.clusterMax + 1);        // make sure we never see CLUSNUM_BAD in a cluster chain
        }
        return aLBA;
    }

    /**
     * getClusterEntry(dir, cluster, iByte)
     *
     * @this {DiskImage}
     * @param {Object} dir
     * @param {number} cluster
     * @param {number} iByte (0 for low byte of cluster entry, 1 for high byte)
     * @return {number}
     */
    getClusterEntry(dir, cluster, iByte)
    {
        let w = 0;
        let cbitsSector = dir.cbSector * 8;
        let offBits = dir.nFATBits * cluster + (iByte? 8 : 0);
        let iSector = (offBits / cbitsSector) | 0;
        if (!dir.sectorFATCache || !dir.vbaFATCache || dir.vbaFATCache != dir.vbaFAT + iSector) {
            dir.vbaFATCache = dir.vbaFAT + iSector;
            dir.sectorFATCache = this.getSector(dir.lbaVolume + dir.vbaFATCache);
        }
        if (dir.sectorFATCache) {
            offBits = (offBits % cbitsSector) | 0;
            let off = (offBits >> 3);
            w = this.getSectorData(dir.sectorFATCache, off, 1);
            if (!iByte) {
                if (offBits & 0x7) w >>= 4;
            } else {
                if (dir.nFATBits == 16) {
                    w <<= 8;
                } else {
                    this.assert(dir.nFATBits == 12);
                    if (offBits & 0x7) {
                        w <<= 4;
                    } else {
                        w = (w & 0xf) << 8;
                    }
                }
            }
        }
        return w;
    }

    /**
     * getSector(lba)
     *
     * @this {DiskImage}
     * @param {number} lba (physical block address)
     * @return {Sector|null} sector
     */
    getSector(lba)
    {
        let nSectorsPerCylinder = this.nHeads * this.nSectors;
        let iCylinder = (lba / nSectorsPerCylinder) | 0;
        if (iCylinder < this.nCylinders) {
            let nSectorsRemaining = (lba % nSectorsPerCylinder);
            let iHead = (nSectorsRemaining / this.nSectors) | 0;
            /*
             * LBA numbers are 0-based, but the sector numbers in CHS addressing are 1-based, so add one to iSector
             */
            let iSector = (nSectorsRemaining % this.nSectors) + 1;
            return this.seek(iCylinder, iHead, iSector);
        }
        return null;
    }

    /**
     * getSectorData(sector, off, len)
     *
     * WARNING: This function is restricted to reading data contained ENTIRELY within the specified sector.
     *
     * NOTE: Yes, this function is not the most efficient way to read a byte/word/dword value from within a sector,
     * but given the different states a sector may be in, it's certainly the simplest and safest, and since this is
     * only used by buildFileTable() and its progeny, it's not clear that we need to be superfast anyway.
     *
     * @this {DiskImage}
     * @param {Sector} sector
     * @param {number} off (byte offset)
     * @param {number} len (1 to 4 bytes)
     * @return {number}
     */
    getSectorData(sector, off, len)
    {
        let dw = 0;
        let nShift = 0;
        this.assert(len > 0 && len <= 4);
        while (len--) {
            this.assert(off < sector[DiskImage.SECTOR.LENGTH]);
            let b = this.read(sector, off++);
            this.assert(b >= 0);
            if (b < 0) break;
            dw |= (b << nShift);
            nShift += 8;
        }
        return dw;
    }

    /**
     * getSectorString(sector, off, len)
     *
     * WARNING: This function is restricted to reading a string contained ENTIRELY within the specified sector.
     *
     * @this {DiskImage}
     * @param {Sector} sector
     * @param {number} off (byte offset)
     * @param {number} len (use -1 to read a null-terminated string)
     * @return {string}
     */
    getSectorString(sector, off, len)
    {
        let s = "";
        while (len--) {
            let b = this.read(sector, off++);
            if (b <= 0) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * updateSector(file, lba, off)
     *
     * Like getSector(), this must convert a LBA into CHS values; consider factoring that conversion code out.
     *
     * @this {DiskImage}
     * @param {FileInfo} file
     * @param {number} lba (physical block address from the file's aLBA)
     * @param {number} off (file offset corresponding to the given LBA of the given file)
     * @return {boolean} true if successfully updated, false if not
     */
    updateSector(file, lba, off)
    {
        let nSectorsPerCylinder = this.nHeads * this.nSectors;
        let iCylinder = (lba / nSectorsPerCylinder) | 0;
        let nSectorsRemaining = (lba % nSectorsPerCylinder);
        let iHead = (nSectorsRemaining / this.nSectors) | 0;
        let iSector = (nSectorsRemaining % this.nSectors);
        let cylinder, head, sector;
        if ((cylinder = this.aDiskData[iCylinder]) && (head = cylinder[iHead]) && (sector = head[iSector])) {
            if (sector[DiskImage.SECTOR.ID] != iSector + 1) {
                if (Device.DEBUG) this.printf("warning: %d:%d:%d has non-standard sector ID %d; see file %s\n", iCylinder, iHead, iSector + 1, sector[DiskImage.SECTOR.ID], file.path);
            }
            if (sector[DiskImage.SECTOR.FILE_INFO]) {
                if (Device.DEBUG) this.printf('warning: "%s" cross-linked at offset %d with "%s" at offset %d\n', sector[DiskImage.SECTOR.FILE_INFO].path, sector[DiskImage.SECTOR.FILE_OFFSET], file.path, off);
                return false;
            }
            sector[DiskImage.SECTOR.FILE_INFO] = file;
            sector[DiskImage.SECTOR.FILE_OFFSET] = off;
            return true;
        }
        if (Device.DEBUG) this.printf(Device.MESSAGE.DISK, "unable to map LBA %d to CHS\n", lba);
        return false;
    }

    /**
     * buildSector(iCylinder, iHead, idSector, cbSector, db, ib, fRead)
     *
     * Builds a Sector object with the following properties (see DiskImage.SECTOR for complete list):
     *
     *      Property    Description                     Deprecated
     *      'c':        cylinder number (0-based)       ('cylinder')
     *      'h':        head number (0-based)           ('head')
     *      's':        sector ID                       ('sector')
     *      'l':        size of the sector, in bytes    ('length')
     *      'd':        array of dwords                 ('data')
     *
     * NOTE: The 'pattern' property is no longer used; if the sector ends with a repeated 32-bit pattern,
     * we now store that pattern as the last 'd' array value and shrink the array.
     *
     * @this {DiskImage}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} idSector
     * @param {number} cbSector
     * @param {DataBuffer} [db]
     * @param {number} [ib]
     * @param {boolean} [fRead]
     * @returns {Sector}
     */
    buildSector(iCylinder, iHead, idSector, cbSector, db, ib, fRead)
    {
        let ad = [];
        let sector = /** @type {Sector} */ ({
            [DiskImage.SECTOR.CYLINDER]: iCylinder,
            [DiskImage.SECTOR.HEAD]:     iHead,
            [DiskImage.SECTOR.ID]:       idSector,
            [DiskImage.SECTOR.LENGTH]:   cbSector,
            [DiskImage.SECTOR.DATA]:     ad
        });
        let cd = this.cbSector >> 2;
        let dwPrev = null, cPrev = 0;
        for (let id = 0; id < cd; id++, ib += 4) {
            let dw = ad[id] = db? db.readInt32LE(ib) : 0;
            if (dwPrev === dw) {
                cPrev++;
            } else {
                dwPrev = dw;
                cPrev = 0;
            }
            this.dwChecksum = (this.dwChecksum + dw) & (0xffffffff|0);
        }
        ad.length -= cPrev;
        return sector;
    }

    /**
     * getJSON(indent)
     *
     * @this DiskImage
     * @param {number} [indent]
     * @returns {string}
     */
    getJSON(indent = 0)
    {
        this.deleteFileData();
        return JSON.stringify(this.aDiskData, null, indent);
    }

    /**
     * getSize()
     *
     * @this DiskImage
     */
    getSize()
    {
        return this.cbDiskData;
    }

    /**
     * read(sector, iByte, fCompare)
     *
     * @this {DiskImage}
     * @param {Sector} sector (returned from a previous seek)
     * @param {number} iByte (byte index within the given sector)
     * @param {boolean} [fCompare] is true if this write-compare read
     * @return {number} the specified (unsigned) byte, or -1 if no more data in the sector
     */
    read(sector, iByte, fCompare)
    {
        let b = -1;
        if (sector) {
            if (Device.DEBUG && !iByte && !fCompare) {
                this.printf(Device.MESSAGE.DISK, 'read("%s",CHS=%d:%d:%d)\n', this.diskName, sector[DiskImage.SECTOR.CYLINDER], sector[DiskImage.SECTOR.HEAD], sector[DiskImage.SECTOR.ID]);
            }
            if (iByte < sector[DiskImage.SECTOR.LENGTH]) {
                let adw = sector[DiskImage.SECTOR.DATA];
                let idw = iByte >> 2;
                let dw = (idw < adw.length? adw[idw] : adw[adw.length-1]);
                b = ((dw >> ((iByte & 0x3) << 3)) & 0xff);
            }
        }
        return b;
    }

    /**
     * seek(iCylinder, iHead, idSector, sectorPrev, fWrite, done)
     *
     * TODO: There's some dodgy code in seek() that allows floppy images to be dynamically
     * reconfigured with more heads and/or sectors/track, and it does so by peeking at more drive
     * properties.  That code used to be in the FDC component, where it was perfectly reasonable
     * to access those properties.  We need a cleaner interface back to the drive, similar to the
     * info() interface we provide to the controller.
     *
     * Whether or not the "dynamic reconfiguration" feature itself is perfectly reasonable is,
     * of course, a separate question.
     *
     * @this {DiskImage}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} idSector
     * @param {Sector|null} [sectorPrev]
     * @param {boolean} [fWrite]
     * @param {function(Sector,boolean)} [done]
     * @return {Sector|null} is the requested sector, or null if not found (or not available yet)
     */
    seek(iCylinder, iHead, idSector, sectorPrev, fWrite, done)
    {
        let sector = null;
        let drive = this.drive;
        let cylinder = this.aDiskData[iCylinder];
        if (cylinder) {
            let i;
            let track = cylinder[iHead];
            /*
             * The following code allows a single-sided diskette image to be reformatted (ie, "expanded")
             * as a double-sided image, provided the drive has more than one head (see drive.nHeads).
             *
             * NOTE: Strangely, we must ignore the number of drive heads both here and in doFormat(); otherwise,
             * PC DOS 1.10 "FORMAT /1" will fail.  Even though "/1" means format as a single-sided diskette, FORMAT
             * still attempts to format the first track with head 1.
             */
            if (!track && drive && drive.bFormatting && iHead < 2 /* drive.nHeads */) {
                track = new Array(drive.bSectorEnd);
                for (i = 0; i < track.length; i++) {
                    track[i] = this.buildSector(iCylinder, iHead, i + 1, drive.nBytes);
                }
                /*
                 * TODO: This is more dodginess, because we can't be certain that every cylinder on the disk
                 * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                 * properties (eg, this.nHeads), on the assumption that the disk's geometry is homogeneous.
                 */
                if (iHead < drive.nHeads) {
                    cylinder[iHead] = track;
                    this.nHeads = iHead + 1;
                }
            }
            if (track) {
                for (i = 0; i < track.length; i++) {
                    if (track[i] && track[i][DiskImage.SECTOR.ID] == idSector) {
                        sector = track[i];
                        /*
                         * When confronted with a series of sectors with the same sector ID (as found, for example, on
                         * the 1984 King's Quest copy-protected diskette), we're supposed to advance to another sector in
                         * the series.  So if the current sector matches the previous sector, we'll peek at the next sector
                         * (if any), and if it has the same sector ID, then we'll choose that sector instead.
                         */
                        if (sectorPrev && sectorPrev == sector) {
                            let j = i, sectorNext;
                            while (true) {
                                if (++j >= track.length) j = 0;
                                sectorNext = track[j];
                                if (sectorNext == sector) break;
                                if (sectorNext[DiskImage.SECTOR.ID] == idSector) {
                                    sector = sectorNext;
                                    i = j;
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
                /*
                 * The following code allows an 8-sector track to be reformatted (ie, "expanded") as a 9-sector track.
                 */
                if (!sector && drive && drive.bFormatting && drive.bSector == 9) {
                    sector = track[i] = this.buildSector(iCylinder, iHead, drive.bSector, drive.nBytes);
                    /*
                     * TODO: This is more dodginess, because we can't be certain that every track on the disk
                     * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                     * properties (eg, this.nSectors), on the assumption that the disk's geometry is homogeneous.
                     */
                    if (this.nSectors < drive.bSector) this.nSectors = drive.bSector;
                }
            }
        }
        if (done) done(sector, false);
        return sector;
    }

    /**
     * write(sector, iByte, b)
     *
     * @this {DiskImage}
     * @param {Sector} sector (returned from a previous seek)
     * @param {number} iByte (byte index within the given sector)
     * @param {number} b the byte value to write
     * @return {boolean|null} true if write successful, false if write-protected, null if out of bounds
     */
    write(sector, iByte, b)
    {
        if (this.fWriteProtected)
            return false;

        if (Device.DEBUG && !iByte) {
            this.printf(Device.MESSAGE.DISK, 'write("%s",CHS=%d:%d:%d)\n', this.diskName, sector.iCylinder, sector.iHead, sector[DiskImage.SECTOR.ID]);
        }

        if (iByte < sector[DiskImage.SECTOR.LENGTH]) {
            if (b != this.read(sector, iByte, true)) {
                let adw = sector[DiskImage.SECTOR.DATA];
                let dwPattern = adw[adw.length-1];
                let idw = iByte >> 2;
                let nShift = (iByte & 0x3) << 3;
                /*
                 * Ensure every byte up to the specified byte is properly initialized.
                 */
                for (let i = adw.length; i <= idw; i++) adw[i] = dwPattern;
                if (!sector.cModify) {
                    sector.iModify = idw;
                    sector.cModify = 1;
                } else if (idw < sector.iModify) {
                    sector.cModify += sector.iModify - idw;
                    sector.iModify = idw;
                } else if (idw >= sector.iModify + sector.cModify) {
                    sector.cModify += idw - (sector.iModify + sector.cModify) + 1;
                }
                adw[idw] = (adw[idw] & ~(0xff << nShift)) | (b << nShift);
            }
            return true;
        }
        return null;
    }

}

/*
 * Sector object keys.
 */
DiskImage.SECTOR = {
    CYLINDER:   'c',                // cylinder number (0-based)
    HEAD:       'h',                // head number (0-based)
    ID:         's',                // sector ID (generally 1-based, except for unusual/copy-protected disks)
    LENGTH:     'l',                // sector length, in bytes (generally 512, except for unusual/copy-protected disks)
    DATA:       'd',                // array of signed 32-bit values (if less than length/4, the last value is repeated)
    /*
     * The following properties are only added at runtime; they are not stored in JSON disk images.
     */
    FILE_INFO:  'fileInfo',
    FILE_OFFSET:'fileOffset'
};

DiskImage.MBR = {
    PARTITIONS: {
        OFFSET:     0x1BE,
        ENTRY: {
            STATUS:         0x00,   // 1-byte (0x80 if active)
            CHS_FIRST:      0x01,   // 3-byte CHS specifier
            TYPE:           0x04,   // 1-byte TYPE (see below)
            CHS_LAST:       0x05,   // 3-byte CHS specifier
            VBA_FIRST:      0x08,   // 4-byte Volume Block Address
            VBA_TOTAL:      0x0C,   // 4-byte Volume Block Address
        },
        ENTRY_LENGTH:       0x10,
        STATUS: {
            ACTIVE:         0x80
        },
        TYPE: {
            EMPTY:          0x00,
            FAT12_PRIMARY:  0x01,   // DOS 2.0 and up (12-bit FAT)
            FAT16_PRIMARY:  0x04    // DOS 3.0 and up (16-bit FAT)
        }
    },
    SIG_OFFSET:     0x1FE,
    SIGNATURE:      0xAA55          // to be clear, the low byte (at offset 0x1FE) is 0x55 and the high byte (at offset 0x1FF) is 0xAA
};

/*
 * Boot sector offsets (and assorted constants) in DOS-compatible boot sectors (DOS 2.0 and up)
 *
 * WARNING: I've heard apocryphal stories about SIGNATURE being improperly reversed on some systems
 * (ie, 0x55AA instead 0xAA55) -- perhaps by a dyslexic programmer -- so be careful out there.
 */
DiskImage.BOOT = {
    JMP_OPCODE:     0x000,      // 1 byte for a JMP opcode, followed by a 1 or 2-byte offset
    OEM_STRING:     0x003,      // 8 bytes
    SIG_OFFSET:     0x1FE,
    SIGNATURE:      0xAA55      // to be clear, the low byte (at offset 0x1FE) is 0x55 and the high byte (at offset 0x1FF) is 0xAA
};

/*
 * BIOS Parameter Block (BPB) offsets in DOS-compatible boot sectors (DOS 2.x and up)
 *
 * NOTE: DOS 2.x OEM documentation says that the words starting at offset 0x018 (TRACK_SECS, TOTAL_HEADS, and HIDDEN_SECS)
 * are optional, but even the DOS 2.0 FORMAT utility initializes all three of those words.  There may be some OEM media out
 * there with BPBs that are only valid up to offset 0x018, but I've not run across any media like that.
 *
 * DOS 3.20 added LARGE_SECS, but unfortunately, it was added as a 2-byte value at offset 0x01E.  DOS 3.31 decided
 * to make both HIDDEN_SECS and LARGE_SECS 4-byte values, which meant that LARGE_SECS had to move from 0x01E to 0x020.
 */
DiskImage.BPB = {
    SECTOR_BYTES:   0x00B,      // 2 bytes: bytes per sector (eg, 0x200 or 512)
    CLUSTER_SECS:   0x00D,      // 1 byte: sectors per cluster (eg, 1)
    RESERVED_SECS:  0x00E,      // 2 bytes: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (eg, 1)
    TOTAL_FATS:     0x010,      // 1 byte: FAT copies (eg, 2)
    ROOT_DIRENTS:   0x011,      // 2 bytes: root directory entries (eg, 0x40 or 64) 0x40 * 0x20 = 0x800 (1 sector is 0x200 bytes, total of 4 sectors)
    TOTAL_SECS:     0x013,      // 2 bytes: number of sectors (eg, 0x140 or 320); if zero, refer to LARGE_SECS
    MEDIA_ID:       0x015,      // 1 byte: media ID (see DiskImage.FAT.MEDIA_*); should also match the first byte of the FAT (aka FAT ID)
    FAT_SECS:       0x016,      // 2 bytes: sectors per FAT (eg, 1)
    TRACK_SECS:     0x018,      // 2 bytes: sectors per track (eg, 8)
    TOTAL_HEADS:    0x01A,      // 2 bytes: number of heads (eg, 1)
    HIDDEN_SECS:    0x01C,      // 2 bytes (DOS 2.x) or 4 bytes (DOS 3.31 and up): number of hidden sectors (always 0 for non-partitioned media)
    LARGE_SECS:     0x020       // 4 bytes (DOS 3.31 and up): number of sectors if TOTAL_SECS is zero
};

/*
 * Common (supported) diskette geometries.
 *
 * Each entry in GEOMETRIES is an array of values in "CHS" order:
 *
 *      [# cylinders, # heads, # sectors/track, # bytes/sector, media ID]
 *
 * If the 4th value is omitted, the sector size is assumed to be 512.  The order of these "geometric" values mirrors
 * the structure of our JSON-encoded disk images, which consist of an array of cylinders, each of which is an array of
 * heads, each of which is an array of sector objects.
 */
DiskImage.GEOMETRIES = {
    163840:  [40,1,8,,0xFE],    // media ID 0xFE: 40 cylinders, 1 head (single-sided),   8 sectors/track, ( 320 total sectors x 512 bytes/sector ==  163840)
    184320:  [40,1,9,,0xFC],    // media ID 0xFC: 40 cylinders, 1 head (single-sided),   9 sectors/track, ( 360 total sectors x 512 bytes/sector ==  184320)
    327680:  [40,2,8,,0xFF],    // media ID 0xFF: 40 cylinders, 2 heads (double-sided),  8 sectors/track, ( 640 total sectors x 512 bytes/sector ==  327680)
    368640:  [40,2,9,,0xFD],    // media ID 0xFD: 40 cylinders, 2 heads (double-sided),  9 sectors/track, ( 720 total sectors x 512 bytes/sector ==  368640)
    737280:  [80,2,9,,0xF9],    // media ID 0xF9: 80 cylinders, 2 heads (double-sided),  9 sectors/track, (1440 total sectors x 512 bytes/sector ==  737280)
    1228800: [80,2,15,,0xF9],   // media ID 0xF9: 80 cylinders, 2 heads (double-sided), 15 sectors/track, (2400 total sectors x 512 bytes/sector == 1228800)
    1474560: [80,2,18,,0xF0],   // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 18 sectors/track, (2880 total sectors x 512 bytes/sector == 1474560)
    2949120: [80,2,36,,0xF0],   // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 36 sectors/track, (5760 total sectors x 512 bytes/sector == 2949120)
    /*
     * The following are some common disk sizes and their CHS values, since missing or bogus MBR and/or BPB values
     * might mislead us when attempting to determine the exact disk geometry.
     */
    10653696:[306,4,17],        // PC XT 10Mb hard drive (type 3)
    21411840:[615,4,17],        // PC AT 20Mb hard drive (type 2)
    /*
     * Assorted DEC disk formats.
     */
    256256:  [77, 1,26,128],    // RX01 single-platter diskette: 77 tracks, 1 head, 26 sectors/track, 128 bytes/sector, for a total of 256256 bytes
    2494464: [203,2,12,512],    // RK03 single-platter disk cartridge: 203 tracks, 2 heads, 12 sectors/track, 512 bytes/sector, for a total of 2494464 bytes
    5242880: [256,2,40,256],    // RL01K single-platter disk cartridge: 256 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 5242880 bytes
    10485760:[512,2,40,256]     // RL02K single-platter disk cartridge: 512 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 10485760 bytes
};

/*
 * Media ID (descriptor) bytes for DOS-compatible FAT-formatted disks (stored in the first byte of the FAT)
 */
DiskImage.FAT = {
    MEDIA_160KB:    0xFE,       // 5.25-inch, 1-sided,  8-sector, 40-track
    MEDIA_180KB:    0xFC,       // 5.25-inch, 1-sided,  9-sector, 40-track
    MEDIA_320KB:    0xFF,       // 5.25-inch, 2-sided,  8-sector, 40-track
    MEDIA_360KB:    0xFD,       // 5.25-inch, 2-sided,  9-sector, 40-track
    MEDIA_720KB:    0xF9,       //  3.5-inch, 2-sided,  9-sector, 80-track
    MEDIA_1200KB:   0xF9,       //  3.5-inch, 2-sided, 15-sector, 80-track
    MEDIA_FIXED:    0xF8,       // fixed disk (aka hard drive)
    MEDIA_1440KB:   0xF0,       //  3.5-inch, 2-sided, 18-sector, 80-track
    MEDIA_2880KB:   0xF0        //  3.5-inch, 2-sided, 36-sector, 80-track
};

/*
 * Cluster constants for 12-bit FATs (CLUSNUM_FREE, CLUSNUM_RES and CLUSNUM_MIN are the same for all FATs)
 */
DiskImage.FAT12 = {
    MAX_CLUSTERS:   4084,
    CLUSNUM_FREE:   0,          // this should NEVER appear in cluster chain (except at the start of an empty chain)
    CLUSNUM_RES:    1,          // reserved; this should NEVER appear in cluster chain
    CLUSNUM_MIN:    2,          // smallest valid cluster number
    CLUSNUM_MAX:    0xFF6,      // largest valid cluster number
    CLUSNUM_BAD:    0xFF7,      // bad cluster; this should NEVER appear in cluster chain
    CLUSNUM_EOC:    0xFF8       // end of chain (actually, anything from 0xFF8-0xFFF indicates EOC)
};

/*
 * Cluster constants for 16-bit FATs (CLUSNUM_FREE, CLUSNUM_RES and CLUSNUM_MIN are the same for all FATs)
 */
DiskImage.FAT16 = {
    MAX_CLUSTERS:   65524,
    CLUSNUM_FREE:   0,          // this should NEVER appear in cluster chain (except at the start of an empty chain)
    CLUSNUM_RES:    1,          // reserved; this should NEVER appear in cluster chain
    CLUSNUM_MIN:    2,          // smallest valid cluster number
    CLUSNUM_MAX:    0xFFF6,     // largest valid cluster number
    CLUSNUM_BAD:    0xFFF7,     // bad cluster; this should NEVER appear in cluster chain
    CLUSNUM_EOC:    0xFFF8      // end of chain (actually, anything from 0xFFF8-0xFFFF indicates EOC)
};

/*
 * Directory Entry offsets (and assorted constants) in FAT disk images
 *
 * NOTE: Versions of DOS prior to 2.0 used INVALID exclusively to mark available directory entries; any entry marked
 * UNUSED was actually considered USED.  In DOS 2.0 and up, UNUSED was added to indicate that all remaining entries were
 * unused, relieving it from having to initialize the rest of the sectors in the directory cluster(s).  And in fact,
 * you will likely encounter garbage in subsequent directory sectors if you read beyond the first UNUSED entry.
 *
 * For more details on MODTIME and MODDATE, see diskimage.js; in particular, buildDateTime() and getDSTAdjustedTime().
 */
DiskImage.DIRENT = {
    NAME:           0x000,      // 8 bytes
    EXT:            0x008,      // 3 bytes
    ATTR:           0x00B,      // 1 byte
    MODTIME:        0x016,      // 2 bytes: bits 15-11 is hour (0-31), bits 10-5 is minute (0-63), bits 4-0 is second/2 (0-31)
    MODDATE:        0x018,      // 2 bytes: bits 15-9 is year (0 for 1980, 127 for 2107), bits 8-5 is month (1-12), bits 4-0 is day (1-31)
    CLUSTER:        0x01A,      // 2 bytes
    SIZE:           0x01C,      // 4 bytes (typically zero for subdirectories)
    LENGTH:         0x20,       // 32 bytes total
    UNUSED:         0x00,       // indicates this and all subsequent directory entries are unused
    INVALID:        0xE5        // indicates this directory entry is unused
};

/*
 * Possible values for DIRENT.ATTR
 */
DiskImage.ATTR = {
    READONLY:       0x01,       // PC-DOS 2.0 and up
    HIDDEN:         0x02,
    SYSTEM:         0x04,
    LABEL:          0x08,       // PC-DOS 2.0 and up
    SUBDIR:         0x10,       // PC-DOS 2.0 and up
    ARCHIVE:        0x20        // PC-DOS 2.0 and up
};
