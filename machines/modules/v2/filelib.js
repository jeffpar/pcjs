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
import Proc from "./proclib.js";
import { globals } from "./defines.js";
import DataBuffer from "../v1/databuffer.js";

let args = Proc.getArgs();
let argv = args.argv;
let moduleDir = path.dirname(argv[0]);
let rootDir = path.join(moduleDir, "../../..");

/**
 * @class File
 */
export default class File {
    /**
     * getServerPath(sFile)
     *
     * @param {string} sFile
     * @returns {string}
     */
    static getServerPath(sFile)
    {
        /*
         * In addition to disk server paths, we had to add /machines (for diskette config files) and /software
         * (for Markdown files containing supplementary copy-protection disk data).
         */
        let match = sFile.match(/^\/(disks\/|)(machines|software|diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|cdroms|private)(\/.*)$/);
        if (match) {
            sFile = path.join(rootDir, (match[2] == "machines" || match[2] == "software"? "" : "disks"), match[2], match[3]);
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
        if (sFile && sFile.indexOf("http") != 0) {
            sFile = File.getServerPath(sFile);
            data = fs.readFileSync(sFile, encoding);
            if (!encoding) data = new DataBuffer(data);
        }
        return data;
    }
}

globals.node.rootDir = rootDir;
globals.node.readFileSync = File.readFileSync;
