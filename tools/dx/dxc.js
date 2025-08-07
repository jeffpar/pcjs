/**
 * @fileoverview DX Container Class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "./db.js";
import DZip from "./dzip.js";
import Disk from "./disk.js";
import ISO from "./iso.js";
import Format from "./format.js";
import { DiskInfo } from "./disk.js";
import { LegacyArc, LegacyZip } from "./legacy.js";

/**
 * @class DXC
 *
 * Wrapper class for all supported container items (DZip, Disk, ISO).
 */
export default class DXC {

    /**
     * Public class fields
     */
    static VERSION = "1.0";
    static COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";
    static EXCEPTIONS = {               // use bits 16-31 (bits 0-15 are reserved for other classes)
        UNIQUE:         0x10000
    };

    static FORMAT = {
        LIST: 0,                        // archive aka "PKZIP" format
        DIR:  1,                        // directory format
        XDIR: 3,                        // directory format with extended information (eg, sector details)
        CSV:  4                         // CSV format
    };

    /**
     * constructor(interfaces, interfaceOptions)
     *
     * @this {DXC}
     * @param {Interfaces} [interfaces]
     * @param {InterfaceOptions} [interfaceOptions]
     */
    constructor(interfaces = {}, interfaceOptions = {})
    {
        this.format = new Format();
        this.dzip = new DZip(interfaces, interfaceOptions);
        this.disk = new Disk(interfaces, interfaceOptions);
        this.iso = new ISO(interfaces, interfaceOptions);
    }

    /**
     * open(name, db, options)
     *
     * If successful, this method returns a Handle object used with our other high-level methods;
     * eg, readDirectory(), readFile(), and close().
     *
     * The db parameter can be used if the named item has already been read into a buffer, and
     * although a DataBuffer is preferred, we will automatically convert any supported data type
     * (eg, ArrayBuffer) into a DataBuffer.
     *
     * @this {DXC}
     * @param {string} name
     * @param {*} [db]
     * @param {*} [options]
     * @returns {Handle}
     */
    async open(name, db = null, options = {})
    {
        let dxc = this;
        let handle = {
            name,
            label: "",
            class: null,
            isArchive: false,
            isDisk: false
        };
        if (name.match(/\.(zip|arc)$/i)) {
            handle.isArchive = true;
            handle.class = dxc.dzip;
        }
        if (name.match(/\.(img|json)$/i)) {
            handle.isDisk = true;
            handle.class = dxc.disk;
        }
        if (name.match(/\.(iso|mdf|bin|cdr)$/i) || options.agnostic) {
            handle.isDisk = true;
            handle.class = dxc.iso;
        }
        if (!handle.class) {
            throw new Error(`Unrecognized container extension`);
        }
        if (db) {
            db = new DataBuffer(db);
        }
        handle.item = await handle.class.open(name, db, options);
        return handle;
    }

    /**
     * readDirectory(handle, filespec, filterExceptions, filterMethod)
     *
     * This function always returns a new list of container entries, based on any filtering that
     * has been requested (the underlying container always maintains a complete and unfiltered list).
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {string} [filespec]
     * @param {number} [filterExceptions] (0 if none)
     * @param {number} [filterMethod] (-1 if none)
     * @returns {Array.<Entry>} (array of container entries)
     */
    async readDirectory(handle, filespec = "*", filterExceptions = 0, filterMethod = -1)
    {
        let entries = await handle.class.readDirectory(handle.item, filespec, filterExceptions, filterMethod);
        //
        // We automatically read any label as well; some containers already know the label at the
        // time of open(), whereas others can't know until at least the root directory has been read.
        //
        handle.label = handle.class.readLabel(handle.item);
        return entries;
    }

    /**
     * readFile(handle, entry, writeData)
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {Entry} entry
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(handle, entry, writeData)
    {
        return await handle.class.readFile(handle.item, entry, writeData);
    }

    /**
     * enquote(string)
     *
     * @this {DXC}
     * @param {string} string
     * @returns {string}
     */
    enquote(string)
    {
        //
        // Enquote a string for CSV output, but only if necessary.
        //
        // We use the "double-quote" character as the quote character, and escape any double-quotes
        // in the string with another double-quote.
        //
        if (!string) {
            return "";
        }
        if (string.match(/[\r\n,"]/)) {
            string = '"' + string.replace(/"/g, '""') + '"';
        }
        return string;
    }

    /**
     * filterEntry(handle, entry, filespec)
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {Entry} entry
     * @param {string} filespec
     * @returns {boolean}
     */
    filterEntry(handle, entry, filespec)
    {
        if (filespec) {
            const regex = new RegExp("(?:^|/)" + filespec.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");
            return regex.test(entry.name);
        }
        return false;
    }

    /**
     * formatEntry(handle, entry, type, parent)
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {Entry} entry
     * @param {number} [type] (see DXC.FORMAT values)
     * @param {string} [parent]
     * @returns {string}
     */
    formatEntry(handle, entry, type = 0, parent = "")
    {
        let dxc = this, line;
        let name = entry.name;
        let matchName = name.match(/([^/]+)\/?$/);
        if (matchName) {
            name = matchName[1];
        }
        if (name.length > 14) {
            name = "…" + name.slice(-13);
        }
        let nameMethod = handle.item.volTable? "None" : (entry.method < 0? LegacyArc.methodNames[-(entry.method + 2)] : LegacyZip.methodNames[entry.method]);
        if (entry.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
            nameMethod += '*';
        }
        let ratio = entry.size > entry.compressedSize? Math.round(100 * (entry.size - entry.compressedSize) / entry.size) : 0;
        let comment = "";
        if (entry.warnings.length) {
            comment = "[" + entry.warnings.join("; ") + "]";
        } else if (entry.comment) {
            comment = entry.comment;
        } else if (type != DXC.FORMAT.DIR) {
            comment = entry.target || (parent? parent + "/" + entry.name : entry.name);
            if (comment == name) {
                comment = "";
            }
        }
        if (comment.length) comment = "  " + comment;
        if (!type) {    // DXC.FORMAT.LIST
            //
            // Originally, I limited CRC output to either 4 or 8 hex digits based on the archive type,
            // using "%0*x" instead of "%08x" and passing 4 for ARC and 8 for ZIP, but when archives contain
            // a mixture of ARC and ZIP archives, that results in irregular output, so I always display
            // 8 hex digits now.
            //
            // Also note that ARC file entries do not have an 'attr' field, so we default to 0 to avoid "NaN".
            //
            line = dxc.format.sprintf("%-14s %10d  %10d   %-9s %3d%%  %#04x  %T  %08x%s",
                    name, entry.size, entry.compressedSize, nameMethod, ratio, entry.attr || 0, entry.modified, entry.crc, comment);
        }
        else if (type & DXC.FORMAT.DIR) {
            if (type == DXC.FORMAT.XDIR) {
                //
                // If the entry has an array of 'blocks', then display them.  However, we want to display
                // them succinctly, so for example, any series of blocks that's contiguous should be listed
                // as a single range.
                //
                // And since the handle item should also have a 'disk' object with 'nCylinders', 'nHeads',
                // and 'nSectors' properties, we can use those to calculate the C:H:S values of the start and
                // end values of the starting and ending block of each range, converting block numbers into
                // sector addresses.
                //
                if (entry.blocks) {
                    let disk = handle.item;
                    let blocks = entry.blocks;
                    let chs = function(block) {
                        let cylinder = block / (disk.nHeads * disk.nSectors)|0;
                        let head = ((block % (disk.nHeads * disk.nSectors)) / disk.nSectors)|0;
                        let sector = block % disk.nSectors;
                        return dxc.format.sprintf("%02d:%02d:%02d", cylinder, head, sector + 1);
                    };
                    if (blocks.length) {
                        let ranges = [];
                        let start = blocks[0], end = start;
                        let addRange = function() {
                            if (start == end) {
                                ranges.push(chs(start));
                            } else {
                                ranges.push(chs(start) + "-" + chs(end));
                            }
                        };
                        for (let i = 1; i < blocks.length; i++) {
                            if (blocks[i] == end + 1) {
                                end = blocks[i];
                            } else {
                                addRange();
                                start = blocks[i];
                                end = start;
                            }
                        }
                        addRange();
                        comment = dxc.format.sprintf("  [sectors %s]", ranges.join(", "));
                    }
                }
            }
            if (entry.attr & DiskInfo.ATTR.SUBDIR) {
                line = dxc.format.sprintf("%-14s %10s   %T%s", name, "<DIR>", entry.modified, comment);
            } else {
                line = dxc.format.sprintf("%-14s %10d   %T%s", name, entry.size, entry.modified, comment);
            }
        }
        else {          // DXC.FORMAT.CSV
            let comment = entry.comment || "";
            let warnings = entry.warnings.length? entry.warnings.join("; ") : "";
            let newest = entry.newestFileTime? dxc.format.sprintf("%T", new Date(entry.newestFileTime)) : "";
            line = dxc.format.sprintf(
                "%d,%d,%d,%s,%T,%s,%d,%d,%d,%d,%s,%s,%s,%s,%s,%s,%s,%s,%s\n",
                entry.fileID || 0, entry.itemID || 0, entry.setID || 0, entry.hash || "", entry.modified, newest, entry.totalFiles || 0, (entry.attr || 0) & 0xff, entry.size, entry.compressedSize || entry.size,
                entry.methodName || entry.source, dxc.enquote(entry.volume), dxc.enquote(handle.name), dxc.enquote(entry.name), dxc.enquote(entry.photo), (entry.photo && entry.widthPhoto? entry.widthPhoto + 'x' + entry.heightPhoto : ""), dxc.enquote(entry.thumb), dxc.enquote(comment), dxc.enquote(warnings)
            );
        }
        return line;
    }

    /**
     * formatHeading(type)
     *
     * @this {DXC}
     * @param {number} [type] (see DXC.FORMAT values)
     * @returns {string}
     */
    formatHeading(type = 0)
    {
        let s = "";
        if (!type) {    // DXC.FORMAT.LIST
            s =  "Filename         External    Internal   Method   Ratio  Attr  Date       Time      CRC\n";
            s += "--------         --------    --------   ------   -----  ----  ----       ----      ---\n";
        } else if (type == DXC.FORMAT.CSV) {
            s = "fileID,itemID,setID,hash,modified,newest,entries,attr,size,compressed,method,volume,path,name,photo,dimensions,thumb,comment,warnings\n";
        }
        return s;
    }

    /**
     * close(handle)
     *
     * @this {DXC}
     * @param {Handle} handle
     */
    async close(handle)
    {
        await handle.class.close(handle.item);
    }
}
