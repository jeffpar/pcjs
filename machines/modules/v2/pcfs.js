/**
 * @fileoverview PCFS: PCjs File System (simulates a very simple file system in the browser)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { globals } from "./defines.js";

/**
 * @typedef  {Object} PCFSItem
 * @property {string} name
 * @property {number} size
 * @property {number} attr
 * @property {Date} date
 * @property {*} data
 * @property {Array|null} files (null if not a directory, else an array of zero or more PCFSItem objects)
 */

/**
 * @class PCFS
 */
export default class PCFS {

    static root = "/pcfs";

    static ATTR = {                 // copied from /machines/pcx86/modules/v3/diskinfo.js (DiskInfo.ATTR.*)
        READONLY:       0x01,       // PC DOS 2.0 and up
        HIDDEN:         0x02,
        SYSTEM:         0x04,
        VOLUME:         0x08,       // PC DOS 2.0 and up
        LFN:            0x0f,       // combination used by Windows 95 (MS-DOS 7.0) and up, indicating a long filename (LFN) DIRENT
        SUBDIR:         0x10,       // PC DOS 2.0 and up
        ARCHIVE:        0x20,       // PC DOS 2.0 and up
    };

    /**
     * isPCFS(path)
     *
     * @param {string} path
     * @returns {boolean}
     */
    static isPCFS(path)
    {
        return path.indexOf(PCFS.root) == 0;
    }

    /**
     * getRoot(path)
     *
     * @param {string} path
     * @returns {Array|null}
     */
    static getRoot(path)
    {
        return PCFS.isPCFS(path)? globals.pcjs['files'] : null;
    }

    /**
     * getNodes(path)
     *
     * @param {string} path
     * @returns {Array}
     */
    static getNodes(path)
    {
        return path.slice(PCFS.root.length+1).split('/');
    }

    /**
     * getItem(path, fCreate, fDirectory)
     *
     * @param {string} path
     * @param {boolean} [fCreate] (true to create, false to remove)
     * @param {boolean} [fDirectory]
     * @returns {PCFSItem|null}
     */
    static getItem(path, fCreate, fDirectory)
    {
        let item = null;
        let dir = PCFS.getRoot(path);
        if (dir) {
            let nodes = PCFS.getNodes(path);
            let i, j;
            for (i = 0; i < nodes.length; i++) {
                let name = nodes[i], match = false;
                if (!name) {
                    item = dir;
                    break;
                }
                for (j = 0; j < dir.files.length; j++) {
                    let next = dir.files[j];
                    if (next.name.toLowerCase() == name.toLowerCase()) {
                        if (i == nodes.length - 1) {
                            item = next;
                            break;
                        }
                        if (next.files) {
                            dir = next;
                            match = true;
                            break;
                        }
                    }
                }
                if (item) break;
                if (match) continue;
                if (i < nodes.length-1) {
                    if (fCreate) {
                        let sub = {name, size: 0, attr: PCFS.ATTR.SUBDIR, date: new Date(), files: []};
                        dir.files.push(sub);
                        dir = sub;
                        continue;
                    }
                    break;
                }
            }
            if (!item && i == nodes.length) {
                if (fCreate) {
                    let attr = fDirectory? PCFS.ATTR.SUBDIR : PCFS.ATTR.ARCHIVE;
                    item = dir.files[dir.files.length] = {name: nodes[nodes.length-1], size: 0, attr: attr, date: new Date(), files: fDirectory? [] : null};
                } else if (fCreate === false) {
                    dir.files.splice(j, 1);
                }
            }
        }
        return item;
    }

    /**
     * setItem(item, data, date, attr)
     *
     * @param {PCFSItem} item
     * @param {*} [data]
     * @param {Date} [date]
     * @param {number} [attr]
     */
    static setItem(item, data, date, attr)
    {
        if (!item.files && data) {
            item.data = data;
            item.size = data.length;
            if (!date) date = new Date();
        }
        if (date) {
            item.date = date;
        }
        if (attr !== undefined) {
            item.attr = attr;
        }
    }
}

if (!globals.pcjs['files']) {
    globals.pcjs['files'] = { name: "", size: 0, attr: PCFS.ATTR.SUBDIR, date: new Date(), files: [] };
}
