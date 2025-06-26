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

/**
 * @class DXC
 *
 * Wrapper class for all supported container classes (DZip, Disk, ISO).
 */
export default class DXC {

    /**
     * Public class fields
     */
    static DEBUG = false;
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
        this.dzip = new DZip(interfaces, interfaceOptions);
        this.disk = new Disk(interfaces, interfaceOptions);
        this.iso = new ISO(interfaces, interfaceOptions);
    }

    /**
     * enableWarnings()
     *
     * @this {DXC}
     */
    enableWarnings()
    {
        this.dzip.enableWarnings();
        this.iso.enableWarnings();
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
     * @param {ArchiveOptions} [options]
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
        if (name.match(/(\.zip|\.arc)$/i)) {
            handle.isArchive = true;
            handle.class = this.dzip;
        }
        if (name.match(/(\.img|\.json)$/i)) {
            handle.isDisk = true;
            handle.class = this.disk;
        }
        if (name.match(/(\.iso|\.mdf|\.bin|\.cdr)$/i)) {
            handle.isDisk = true;
            handle.class = this.iso;
        }
        if (!handle.class) {
            throw new Error(`unrecognized archive extension`);
        }
        handle.archive = await handle.class.open(name, db, options);
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
        await handle.class.close(handle.archive);
    }

    /**
     * readDirectory(handle, filespec, filterExceptions, filterMethod)
     *
     * This function always returns a new list of archive entries, based on any filtering
     * that has been requested (the archive always maintains a complete and unfiltered list).
     *
     * @this {DXC}
     * @param {Handle} handle
     * @param {string} [filespec]
     * @param {number} [filterExceptions] (0 if none)
     * @param {number} [filterMethod] (-1 if none)
     * @returns {Array.<ArchiveEntry>} (array of archive entries)
     */
    async readDirectory(handle, filespec = "*", filterExceptions = 0, filterMethod = -1)
    {
        let entries = await handle.class.readDirectory(handle.archive, filespec, filterExceptions, filterMethod);
        //
        // We automatically read any label as well; some containers already know the label at
        // the time of open(), whereas others won't know until the root directory has been read.
        //
        handle.label = handle.class.readLabel(handle.archive);
        return entries;
    }

    /**
     * readFile(archive, entry, writeData)
     *
     * @this {DXC}
     * @param {Archive} archive
     * @param {ArchiveEntry} entry
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(handle, entry, writeData)
    {
        return await handle.class.readFile(handle.archive, entry, writeData);
    }
}
