/**
 * @fileoverview File Disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device from "../../../machines/modules/device.js";
import DiskImage from "./diskimage.js";

/**
 * @class FileInfo
 * @property {DiskImage} disk
 * @property {string} sPath
 * @property {string} sName
 * @property {number} bAttr
 * @property {Date} date
 * @property {number} cbSize
 * @property {Array.<number>} aLBA
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class FileInfo {
    /**
     * FileInfo(disk, sPath, sName, bAttr, cbSize, iCluster, aLBA)
     *
     * @param {DiskImage} disk
     * @param {string} sPath
     * @param {string} sName
     * @param {number} bAttr
     * @param {Date} date
     * @param {number} cbSize
     * @param {number} iCluster
     * @param {Array.<number>} aLBA
     */
    constructor(disk, sPath, sName, bAttr, date, cbSize, iCluster, aLBA)
    {
        this.device = disk.device;
        this.disk = disk;
        this.sPath = sPath;
        this.sName = sName;
        this.bAttr = bAttr;
        this.date = date;
        this.cbSize = cbSize;
        this.iCluster = iCluster;
        this.aLBA = aLBA;
        if (Device.DEBUG) {
            this.device.printf(Device.MESSAGE.FILE, '"%s" size=%d attr=%#0bx date=%#T cluster=%d sectors=%j\n', sPath, cbSize, bAttr, date, iCluster, aLBA);
        }
    }

    /**
     * loadValue(offset, length)
     *
     * @this {FileInfo}
     * @param {number} offset
     * @param {number} [length] (1, 2 or 4 bytes; default is 2)
     * @return {number|undefined}
     */
    loadValue(offset, length)
    {
        let l;
        length = length || 2;
        let iSector = offset >> 9;
        let offSector = offset & 0x1ff;
        let sector = this.disk.getSector(this.aLBA[iSector]);
        if (sector) {
            /*
             * If the read is wholly contained within a sector, read it with one call.
             */
            if (offSector + length <= sector[DiskImage.SECTOR.LENGTH]) {
                return this.disk.getSectorData(sector, offSector, length);
            }
            /*
             * The spans a sector boundary, so we just call ourselves one byte at a time.
             */
            l = 0;
            let shift = 0;
            while (length--) {
                l |= this.loadValue(offset++, 1) << shift;
                shift += 8;
            }
        }
        return l;
    }

    /**
     * loadString(offset, length)
     *
     * @this {FileInfo}
     * @param {number} offset
     * @param {number} [length] (if omitted, then string must be zero-terminated)
     * @return {string}
     */
    loadString(offset, length)
    {
        let s = "";
        if (!length) length = -1;
        while (length--) {
            let b = this.loadValue(offset++, 1);
            if (!b) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * loadField(aField, offset)
     *
     * @this {FileInfo}
     * @param {Array.<number>} aField
     * @param {number} [offset] (0 if not specified)
     * @return {number|undefined}
     */
    loadField(aField, offset)
    {
        return this.loadValue(aField[0] + (offset || 0), aField[1]);
    }

    /**
     * loadSegmentTable(offEntries, nEntries, nSegOffShift)
     *
     * @this {FileInfo}
     * @param {number} offEntries
     * @param {number} nEntries
     * @param {number} nSegOffShift
     */
    loadSegmentTable(offEntries, nEntries, nSegOffShift)
    {
        /*
         * Read the Segment Table entries now.
         */
        let iSegment = 1;
        this.aSegments = [];
        this.aOrdinals = [];                // this is an optional array for quick ordinal-to-segment lookup

        if (Device.DEBUG) {
            this.device.printf(Device.MESSAGE.FILE, "loadSegmentTable(%s,%#0lx,%#0wx)\n", this.sPath, offEntries, nEntries);
        }

        while (nEntries--) {
            let offSegment = this.loadValue(offEntries) << nSegOffShift;
            if (offSegment) {
                let lenSegment = this.loadValue(offEntries + 2) || 0x10000;       // 0 means 64K
                if (Device.DEBUG) {
                    this.device.printf(Device.MESSSAGE.FILE, "segment %d: offStart=%#0lx offEnd=%#0lx\n" + iSegment, offSegment, offSegment + lenSegment);
                }
                this.aSegments[iSegment++] = {offStart: offSegment, offEnd: offSegment + lenSegment - 1, aEntries: []};
            }
            offEntries += 8;
        }
        /*
         * Although not documented (at least not in any of the early Windows "New Executable" documents I've seen),
         * the Entry Table may also contain entries whose bSegment field is 0xFE, which doesn't correspond to a valid
         * segment number.  That pseudo-segment number appears to be reserved for constants.  Here are some examples
         * from a 3.1-vintage KRNL386.EXE:
         *
         *      cannot find segment 254 (offset 0xF000) for symbol __ROMBIOS with ordinal 173
         *      cannot find segment 254 (offset 0x0000) for symbol __0000H with ordinal 183
         *      cannot find segment 254 (offset 0x0040) for symbol __0040H with ordinal 193
         *      cannot find segment 254 (offset 0x0008) for symbol __AHINCR with ordinal 114
         *      cannot find segment 254 (offset 0x0003) for symbol __AHSHIFT with ordinal 113
         *      cannot find segment 254 (offset 0xA000) for symbol __A000H with ordinal 174
         *      cannot find segment 254 (offset 0xB000) for symbol __B000H with ordinal 181
         *      cannot find segment 254 (offset 0xC000) for symbol __C000H with ordinal 195
         *      cannot find segment 254 (offset 0xB800) for symbol __B800H with ordinal 182
         *      cannot find segment 254 (offset 0xD000) for symbol __D000H with ordinal 179
         *      cannot find segment 254 (offset 0xE000) for symbol __E000H with ordinal 190
         *      cannot find segment 254 (offset 0xF000) for symbol __F000H with ordinal 194
         *      cannot find segment 254 (offset 0x0001) for symbol __WINFLAGS with ordinal 178
         *
         * The simplest way to handle those Entry Table entries is creating an additional (fake) aSegments table entry.
         */
        this.aSegments[0xFE] = {offStart: 0, offEnd: 0, aEntries: []};
    }

    /**
     * loadEntryTable(offEntries, offEntriesEnd)
     *
     * @this {FileInfo}
     * @param {number} offEntries
     * @param {number} offEntriesEnd
     */
    loadEntryTable(offEntries, offEntriesEnd)
    {
        let iOrdinal = 1;

        if (Device.DEBUG) {
            this.device.printf("loadEntryTable(%#0lx,%#0lx)\n", offEntries, offEntriesEnd);
        }

        while (offEntries < offEntriesEnd) {

            let w = this.loadValue(offEntries);
            let bEntries = w & 0xff;
            if (!bEntries) break;
            let bSegment = w >> 8, iSegment;

            if (Device.DEBUG) {
                this.device.printf(Device.MESSAGE.FILE, "bundle for segment %d: %d entries @%#x\n", bSegment, bEntries, offEntries);
            }

            offEntries += 2;

            /*
             * bSegment 0x00 means all the entries spanned by bEntries are unused, so move on.
             */
            if (!bSegment) {
                iOrdinal += bEntries;
                continue;
            }
            while (bEntries--) {
                /*
                 * bSegment 0x01-0xFE means the next 3 bytes describe a fixed segment entry; the next
                 * byte contains flags indicating exported (0x1) and/or global/shared (0x2) data, and the
                 * next word is the offset within the segment.
                 */
                let offEntry;
                let offDebug = offEntries;
                let bFlags = this.loadValue(offEntries, 1);

                if (bSegment <= 0xFE) {
                    iSegment = bSegment;
                    offEntry = this.loadValue(offEntries + 1);
                    offEntries += 3;
                } else {
                    /*
                     * bSegment 0xFF means a movable segment entry, which is 6 bytes long: flags byte (which
                     * we've already read), an INT 0x3F (0xCD,0x3F), a 1-byte segment number, and a 2-byte offset.
                     */
                    iSegment = this.loadValue(offEntries + 3, 1);
                    offEntry = this.loadValue(offEntries + 4);
                    offEntries += 6;
                }
                if (!this.aSegments[iSegment]) {
                    if (Device.DEBUG) {
                        this.device.printf(Device.MESSAGE.FILE, "invalid segment: %d\n", iSegment);
                    }
                } else {
                    this.aSegments[iSegment].aEntries[iOrdinal] = [offEntry];
                    if (Device.DEBUG) {
                        this.device.printf(Device.MESSAGE.FILE, "ordinal %d: segment=%d offset=%#0lx @%x\n", iOrdinal, iSegment, offEntry, offDebug);
                    }
                }
                this.aOrdinals[iOrdinal] = [iSegment, offEntry];
                iOrdinal++;
            }
        }
    }

    /**
     * loadNameTable(aField, offset)
     *
     * NOTE: If offset is omitted, we assume we're reading the Resident Name Table, and therefore
     * the first name is the module name; otherwise, we assume it is the Non-Resident Name Table, and
     * that the first name is the module description.
     *
     * @this {FileInfo}
     * @param {number} offEntries
     * @param {number} [offEntriesEnd] (if omitted, then the table must be null-terminated)
     */
    loadNameTable(offEntries, offEntriesEnd)
    {
        let cNames = 0;

        if (Device.DEBUG) {
            this.device.printf(Device.MESSAGE.FILE, "loadNameTable(%#0lx,%#0lx)\n", offEntries, offEntriesEnd || 0);
        }

        while (!offEntriesEnd || offEntries < offEntriesEnd) {

            let offDebug = offEntries;
            let bLength = this.loadValue(offEntries, 1);
            if (!bLength) break;

            let sSymbol = this.loadString(offEntries + 1, bLength);
            if (!sSymbol) break;                    // an error must have occurred (this is not a natural way to end)
            offEntries += 1 + bLength;

            if (!cNames) {
                if (!offEntriesEnd) {
                    this.sModule = sSymbol;
                } else {
                    this.sDescription = sSymbol;
                }
            }
            else {
                let iOrdinal = this.loadValue(offEntries);
                let tuple = this.aOrdinals[iOrdinal];
                if (tuple) {
                    let iSegment = tuple[0];        // tuple[0] is the segment number and tuple[1] is the corresponding offEntry
                    if (this.aSegments[iSegment]) {
                        let aEntries = this.aSegments[iSegment].aEntries[iOrdinal];
                        this.device.assert(aEntries && aEntries.length == 1);
                        aEntries.push(sSymbol);
                        if (Device.DEBUG) {
                            this.device.printf(Device.MESSAGE.FILE, "segment %d offset %#0wx ordinal %d: %s @ %x\n", iSegment, aEntries[0], iOrdinal, sSymbol, offDebug);
                        }
                    } else {
                        if (Device.DEBUG) {
                            this.device.printf("%s: cannot find segment %d (offset %#0wx) for symbol %s with ordinal %d @%x\n", this.sPath, iSegment, tuple[1], sSymbol, iOrdinal, offDebug);
                        }
                    }
                } else {
                    if (Device.DEBUG) {
                        this.device.printf(Device.MESSAGE.FILE, "s: cannot find ordinal %d for symbol %s @%x\n", this.sPath, iOrdinal, sSymbol, offDebug);
                    }
                }
            }
            offEntries += 2;
            cNames++;
        }
    }

    /**
     * loadSymbols()
     *
     * For files with NE headers, extract all available symbolic information from the file.
     *
     * FileInfo is supplemented with the following properties:
     *
     *      sModule
     *      sDescription
     *      aSegments[]
     *
     * aSegments is indexed by 1-based segment numbers.  Each aSegments[] entry contains:
     *
     *      offStart (file-relative offset of start of segment data)
     *      offEnd (file-relative offset of end of segment data)
     *      aEntries[]
     *
     * aEntries is an array indexed by 1-based ordinals.  Each aEntries[] entry contains:
     *
     *      [offset, symbol]
     *
     * where offset is relative to the segment's offStart value, and symbol is a string describing the
     * entry.
     *
     * NOTE: Although aEntries arrays are similar to the Debugger's aOffsets arrays, they are not
     * interchangeable data structures, because ours is ordered by ordinal, whereas aOffsets is
     * ordered by offset.  We provide an interface, getModuleInfo(), to the Debugger that converts
     * our data into an intermediate array, aSymbols, which the Debugger then uses to build aOffsets.
     * It would be nice to avoid building that intermediate representation, but it's a side-effect of
     * the Debugger's earlier support for JSON-encoded MAP files.
     *
     * There will always be an offset at index 0 of an aEntries[] element, but some error or incomplete
     * symbolic information could result in a missing symbol at index 1, because symbol name processing is
     * separate from entry table processing.
     *
     * @this {FileInfo}
     */
    loadSymbols()
    {
        if (!this.sName.endsWith(".EXE") && !this.sName.endsWith(".DLL") && !this.sName.endsWith(".DRV")) {
            return;
        }

        if (this.loadField(FileInfo.OE.oeSignature) != FileInfo.OE.SIG) {
            return;
        }

        if (this.loadField(FileInfo.OE.oeRelocOffset) != FileInfo.OE.NE_SIG) {
            return;
        }

        let offNEHeader = this.loadField(FileInfo.OE.oeNEHeader);
        if (this.loadField(FileInfo.NE.neSignature, offNEHeader) != FileInfo.NE.SIG) {
            return;
        }

        let nEntries = this.loadField(FileInfo.NE.neSTEntries, offNEHeader);
        let offEntries = this.loadField(FileInfo.NE.neSTOffset, offNEHeader);
        let nSegOffShift = this.loadField(FileInfo.NE.neSegOffShift, offNEHeader);

        if (offEntries && nEntries) {
            this.loadSegmentTable(offEntries + offNEHeader, nEntries, nSegOffShift || 0);
        }

        offEntries = this.loadField(FileInfo.NE.neETOffset, offNEHeader);
        let cbEntries = this.loadField(FileInfo.NE.neETSize, offNEHeader);
        if (offEntries && cbEntries) {
            this.loadEntryTable(offEntries += offNEHeader, offEntries + cbEntries);
        }

        /*
         * Time to walk the Resident Name Table and update the corresponding ordinals.
         */
        offEntries = this.loadField(FileInfo.NE.neRNTOffset, offNEHeader);
        if (offEntries) {
            this.loadNameTable(offEntries + offNEHeader);
        }

        /*
         * Ditto for the Non-Resident Name Table, which for some reason, uses a file-relative offset rather than
         * an NE header-relative offset, and which is both sized AND null-terminated; we check both terminating
         * conditions to be safe.
         */
        offEntries = this.loadField(FileInfo.NE.neNRNTOffset, offNEHeader);
        cbEntries = this.loadField(FileInfo.NE.neNRNTSize, offNEHeader);
        if (offEntries && cbEntries) {
            this.loadNameTable(offEntries, offEntries + cbEntries);
        }
    }

    /**
     * getSymbol(off, fNearest)
     *
     * @this {FileInfo}
     * @param {number} off (offset relative to start of file)
     * @param {boolean} [fNearest] (true to return nearest symbol if a segment with symbols is found)
     * @return {string} symbol corresponding to file offset (of the file name + offset if no symbol found)
     */
    getSymbol(off, fNearest)
    {
        let sSymbol = null;
        if (this.aSegments) {
            for (let iSegment in this.aSegments) {
                let segment = this.aSegments[iSegment];
                if (off >= segment.offStart && off <= segment.offEnd) {
                    /*
                     * This is the one and only segment we need to check, so we can make off segment-relative now.
                     */
                    off -= segment.offStart;
                    /*
                     * To support fNearest, save the entry where (off - entry[0]) yields the smallest positive result.
                     */
                    let cbNearest = off, entryNearest;
                    for (let iOrdinal in segment.aEntries) {
                        let entry = segment.aEntries[iOrdinal];
                        let cb = off - entry[0];
                        if (!cb) {
                            sSymbol = this.sModule + '!' + entry[1];
                            break;
                        }
                        if (fNearest && cb > 0 && cb < cbNearest) {
                            entryNearest = entry;
                            cbNearest = cb;
                        }
                    }
                    if (!sSymbol && entryNearest) {
                        sSymbol = this.sModule + '!' + entryNearest[1] + "+" + this.device.sprintf("%#0x", cbNearest);
                    }
                    break;
                }
            }
        }
        return sSymbol || this.sName + '+' + this.device.sprintf("%#0x", off);
    }
}

/*
 * Original (aka "Old") Executable MS-DOS File Format
 *
 * Relocation entries are pairs of 16-bit words:
 *
 *      wOffset
 *      wSegment
 *
 * I've noticed that a "PKLITE" EXE may have a oeRelocOffset of 0x52, where the word at 0x001C is 0x210F and the
 * bytes from 0x001E through 0x0051 are:
 *
 *      "PKLITE Copr. 1990-92 PKWARE Inc. All Rights Reserved"
 *
 * Other EXEs have a oeRelocOffset of 0x1E, which begs the question: what is the word at 0x001C typically used for?
 *
 * It was not uncommon for there to be wasted space in the header; even an EXE with, say, 20 (0x14) entries would
 * likely have a wHeaderParas value of 0x20, which is 512 (0x200) bytes.  The desire, no doubt, was to align the
 * start of the EXE segment(s) to a traditional sector boundary.
 */
FileInfo.OE = {
    SIG:            0x5A4D,
    oeSignature:    [0x0000, 2],        // "MZ" (0x4D,0x5A)
    oeLastBytes:    [0x0002, 2],        // 0-511 (0 means the entire last block is used)
    oeBlocks:       [0x0004, 2],        // number of blocks in the file
    oeRelocEntries: [0x0006, 2],        // number of relocation entries in the header
    oeHeaderParas:  [0x0008, 2],        // number of (16-byte) paragraphs in the header
    oeExtraParas:   [0x000A, 2],        // minimum number of additional paragraphs required at load-time
    oeMaxParas:     [0x000C, 2],        // maximum number of additional paragraphs required at load-time
    oeSSRel:        [0x000E, 2],        // relative value of SS
    oeSPInit:       [0x0010, 2],        // initial value of SP
    oeChecksum:     [0x0012, 2],        // checksum if non-zero (sum of all words, including this, should be zero)
    oeIPInit:       [0x0014, 2],        // initial value of IP
    oeCSRel:        [0x0016, 2],        // relative value of CS
    oeRelocOffset:  [0x0018, 2],        // offset of first relocation item
    oeOverlay:      [0x001A, 2],        // overlay number (normally zero, implying main program)
    /*
     * The following fields are accommodated by the NE format, but they were actually defined by "the DOS 4.0 group"
     * as extensions to the OE format.
     */
    oeDOS40Bits:    [0x0020, 2],        // DOS 4.0 behavior bits
    oeUnusedBits:   [0x0022, 2],        // unused behavior bits
    /*
     * If oeRelocOffset (0x0018) is 0x40, then the file is considered an NE (New Executable) MS-DOS file, and
     * the offset of the NE header (from the start of the file) is a 32-bit value stored at 0x003C.  Note that early
     * versions of Windows (aka "DOS 2.0 Windows") originally defined the NE header offset as a 16-bit value stored
     * at 0x003E.  And before that, it may have been a 16-bit value stored at 0x0024, which would have been immediately
     * after the "behavior bits" fields shown above).
     */
    oeNEHeader:     [0x003C, 4],        // offset from start of file to NE header
    NE_SIG:         0x40
};

/*
 * New Executable MS-DOS File Format
 *
 * Unless otherwise specified, all *Offset fields are relative to the start of the NE header, and all *Size fields
 * are in bytes.
 */
FileInfo.NE = {
    SIG:            0x454E,
    neSignature:    [0x0000, 2],        // "NE" (0x4E,0x45)
    neLinkerVer:    [0x0002, 2],        // (low byte is version, high byte is revision)
    neETOffset:     [0x0004, 2],        // Entry Table offset
    neETSize:       [0x0006, 2],        // Entry Table size
    neChecksum:     [0x0008, 4],        // checksum (sum of all DWORDs in the file, excluding this one)
    neFlags:        [0x000C, 2],
    neDataSeg:      [0x000E, 2],
    neHeapSize:     [0x0010, 2],
    neStackSize:    [0x0012, 2],
    neCSIP:         [0x0014, 4],
    neSSSP:         [0x0018, 4],
    neSTEntries:    [0x001C, 2],        // Segment Table entries
    neMRTEntries:   [0x001E, 2],        // Module Reference Table entries
    neNRNTSize:     [0x0020, 2],        // Non-Resident Name Table size
    neSTOffset:     [0x0022, 2],        // Segment Table offset
    neRTOffset:     [0x0024, 2],        // Resource Table offset
    neRNTOffset:    [0x0026, 2],        // Resident Name Table offset
    neMRTOffset:    [0x0028, 2],        // Module Reference Table offset
    neINTOffset:    [0x002A, 2],        // Imported Names Table offset
    neNRNTOffset:   [0x002C, 4],        // Non-Resident Name Table offset (relative to start of file)
    neETMovable:    [0x0030, 2],        // number of movable entries in the Entry Table
    neSegOffShift:  [0x0032, 2],        // logical sector alignment shift count, log(base 2) of the segment sector size (default 9)
    /*
     * Fields after this point are post "DOS 2.0 Windows"...
     */
    neRTEntries:    [0x0034, 2],        // Resource Table entries
    neEXEType:      [0x0036, 1]         // executable type (0x02 for Windows)
    /*
     * 0x37 through 0x3F is reserved.
     */
};
