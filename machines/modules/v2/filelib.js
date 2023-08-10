/**
 * @fileoverview File I/O Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import path from "path";
import { globals } from "./defines.js";
import DataBuffer from "./databuffer.js";

let rootDir = "", localDisks = null;

/**
 * @class FileLib
 */
export default class FileLib {
    /**
     * getLocalPath(sFile)
     *
     * @param {string} sFile
     * @returns {string}
     */
    static getLocalPath(sFile)
    {
        /*
         * In addition to disk server paths, we had to add /machines (for diskette config files), /software
         * (for Markdown files containing supplementary copy-protection disk data), and /tools (for everything else).
         */
        let match = sFile.match(/^\/(disks\/|)(machines|software|tools|diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|cdroms|private)(\/.*)$/);
        if (match) {
            let subDir = "";
            if (match[2] != "machines" && match[2] != "software" && match[2] != "tools") {
                if (localDisks !== false) subDir = "disks";
            }
            sFile = path.join(rootDir, subDir, match[2], match[3]);
        }
        return sFile;
    }

    /**
     * readFileSync(sFile, encoding)
     *
     * @param {string} sFile
     * @param {string|null} [encoding]
     * @returns {DataBuffer|string|undefined}
     */
    static readFileSync(sFile, encoding = "utf8")
    {
        let data;
        if (sFile) {
            sFile = FileLib.getLocalPath(sFile);
            data = fs.readFileSync(sFile, encoding);
            if (!encoding) data = new DataBuffer(data);
        }
        return data;
    }

    /**
     * setRootDir(sDir, fLocalDisks)
     *
     * @param {string} sDir
     * @param {boolean} [fLocalDisks] (true for local disks, false for remote disks, and null for "don't care")
     */
    static setRootDir(sDir, fLocalDisks)
    {
        rootDir = sDir;
        globals.window['LOCALDISKS'] = localDisks = fLocalDisks;
    }
}

globals.node.readFileSync = FileLib.readFileSync;
