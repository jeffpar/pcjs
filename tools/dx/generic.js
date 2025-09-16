/**
 * @fileoverview Generic file module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "./db.js";

/**
 * We give the user total control over the interfaces that will be used to read files,
 * which also relieves us from importing them ourselves, allowing this code to easily run in
 * any environment (eg, Node.js, browser, etc).
 *
 * @typedef  {object}   Interfaces
 * @property {function} fetch       (fetch() interface to read remote files)
 * @property {function} open        (open() interface to open local files)
 *
 * @typedef  {object}   InterfaceOptions
 * @property {number}   cacheSize   (size of cache buffer, if needed; default is 64K)
 * @property {string}   encoding    (encoding to use for strings in archives; default is "cp437")
 */

/**
 * This class provides an environment-agnostic interface for reading files.
 *
 * @class Generic
 * @property {Interfaces} interfaces
 * @property {number} cacheSize (default is 64K)
 * @property {string} encoding (default is "cp437")
 * @property {boolean} debug (if true, enable additional checks/warnings; default is false)
 */
export default class Generic {

    /**
     * constructor(interfaces, interfaceOptions)
     *
     * @this {Generic}
     * @param {Interfaces} [interfaces]
     * @param {InterfaceOptions} [interfaceOptions]
     */
    constructor(interfaces = {}, interfaceOptions = {})
    {
        this.interfaces = interfaces;
        //
        // Set default interface options.
        //
        this.cacheSize = interfaceOptions.cacheSize || 64 * 1024;
        this.encoding = (interfaceOptions.encoding || "cp437").toLowerCase();
        this.debug = (interfaceOptions.debug || false);
    }

    /**
     * open(name, db, options)
     *
     * Returns an object to be used with various read functions.
     *
     * @this {Generic}
     * @param {string} name
     * @param {DataBuffer} [db]
     * @param {object} [options]
     * @returns {object}
     */
    async open(name, db = null, options = {})
    {
        let fileInfo = {};
        if (db) {
            fileInfo.db = db;
            fileInfo.source = "Buffer";
        }
        else if (this.interfaces.open && !name.match(/^https?:\/\//i)) {
            let file = await this.interfaces.open(name, "r");
            if (!file) {
                throw new Error(`Unable to open ${name}`);
            }
            const stats = await file.stat();
            if (!stats.size) {
                await file.close();
                throw new Error(`File is empty`);
            }
            //
            // If the caller supplied a modification date for the image, then we stick with that,
            // because the caller may have extracted the image from another container that preserved
            // the original date.  Otherwise, we use the modification date provided by the file system.
            //
            if (!fileInfo.modified) {
                fileInfo.modified = stats.mtime;
            }
            let db = new DataBuffer(stats.size);
            let result = await file.read(db.buffer);
            if (result.bytesRead < db.length) {
                db = db.slice(0, result.bytesRead);
            }
            await file.close();
            fileInfo.db = db;
            fileInfo.source = "FS";
        }
        else if (this.interfaces.fetch) {
            let response = await this.interfaces.fetch(name);
            if (!response.ok) {
                throw new Error(`Unable to fetch ${name} (${response.statusText})`);
            }
            let arrayBuffer = await response.arrayBuffer();
            fileInfo.db = new DataBuffer(new Uint8Array(arrayBuffer));
            fileInfo.source = "Network";
        }
        else {
            throw new Error("No open interface available");
        }
        fileInfo.name = name;
        fileInfo.size = fileInfo.db.length;
        return fileInfo;
    }

    /**
     * readDirectory(fileInfo, filespec, filterExceptions, filterMethod)
     *
     * @this {Generic}
     * @param {object} fileInfo
     * @param {string} [filespec]
     * @param {number} [filterExceptions] (0 if none)
     * @param {number} [filterMethod] (-1 if none)
     * @returns {Array}
     */
    async readDirectory(fileInfo, filespec = "*", filterExceptions = 0, filterMethod = -1)
    {
        return [];
    }

    /**
     * readFile(fileInfo, entry, writeData)
     *
     * @this {Generic}
     * @param {object} fileInfo
     * @param {object} entry (an entry from readDirectory())
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(fileInfo, entry, writeData)
    {
        return undefined;
    }

    /**
     * readLabel(fileInfo)
     *
     * @this {Generic}
     * @param {object} fileInfo
     * @returns {string}
     */
    readLabel(fileInfo)
    {
        return "";
    }

    /**
     * close(fileInfo)
     *
     * @this {Generic}
     * @param {object} fileInfo
     */
    async close(fileInfo)
    {
        return;
    }
}
