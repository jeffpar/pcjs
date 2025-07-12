/**
 * @fileoverview DX Container Class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DZip from "./dzip.js";
import Disk from "./disk.js";
import ISO from "./iso.js";
import Format from "./format.js";
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
     * @this {DXC}
     * @param {string} name
     * @param {DataBuffer} [db]
     * @param {*} [options]
     * @returns {Handle}
     */
    async open(name, db = null, options = {})
    {
        let handle = {
            name,
            label: "",
            class: null,
            isArchive: false,
            isDisk: false
        };
        if (name.match(/\.(zip|arc)$/i)) {
            handle.isArchive = true;
            handle.class = this.dzip;
        }
        if (name.match(/\.(img|json)$/i)) {
            handle.isDisk = true;
            handle.class = this.disk;
        }
        if (name.match(/\.(iso|mdf|bin|cdr)$/i) || options.agnostic) {
            handle.isDisk = true;
            handle.class = this.iso;
        }
        if (!handle.class) {
            throw new Error(`Unrecognized container extension`);
        }
        handle.item = await handle.class.open(name, db, options);
        return handle;
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
     * formatHeading(handle, parent)
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {string} [parent]
     * @returns {string}
     */
    formatHeading(handle, parent = "")
    {
        let s = "\n";
        s += "Filename         External    Internal   Method   Ratio  Attr  Date       Time      CRC\n";
        s += "--------         --------    --------   ------   -----  ----  ----       ----      ---";
        return s;
    }

    /**
     * formatEntry(handle, entry, parent)
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {Entry} entry
     * @param {string} [parent]
     * @returns {string}
     */
    formatEntry(handle, entry, parent = "")
    {
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
        let comment;
        if (entry.warnings.length) {
            comment = "[" + entry.warnings.join("; ") + "]";
        } else if (entry.comment) {
            comment = entry.comment;
        } else {
            comment = entry.target || (parent? parent + "/" + entry.name : entry.name);
            if (comment == name) {
                comment = "";
            }
        }
        if (comment.length) comment = "  " + comment;
        //
        // Originally, I limited CRC output to either 4 or 8 hex digits based on the archive type,
        // using "%0*x" instead of "%08x" and passing 4 for ARC and 8 for ZIP, but when archives contain
        // a mixture of ARC and ZIP archives, that results in irregular output, so I always display
        // 8 hex digits now.
        //
        // Also note that ARC file entries do not have an 'attr' field, so we default to 0.
        //
        return this.format.sprintf("%-14s %10d  %10d   %-9s %3d%%  %#04x  %T  %08x%s",
                name, entry.size, entry.compressedSize, nameMethod, ratio, entry.attr || 0, entry.modified, entry.crc, comment);
    }
}
