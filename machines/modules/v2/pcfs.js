/**
 * @fileoverview PCFS: The PCjs File System (simulates a *very* simple file system in the browser)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { globals } from "./defines.js";

/**
 * @typedef  {Object} PCFSItem
 * @property {string} name
 * @property {number} size
 * @property {Date} date
 * @property {*} data
 * @property {Array|null} files (null if not a directory, else an array of zero or more PCFSItem objects)
 */

if (!globals.pcjs['files']) {
    globals.pcjs['files'] = { name: "", size: 0, date: new Date(), files: [] };
}

/**
 * @class PCFS
 */
export default class PCFS {

    static root = "/pcfs";

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
                    if (next.name == name) {
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
                        let sub = {name, size: 0, date: new Date(), files: []};
                        dir.files.push(sub);
                        dir = sub;
                        continue;
                    }
                    break;
                }
            }
            if (!item && i == nodes.length) {
                if (fCreate) {
                    item = dir.files[dir.files.length] = {name: nodes[nodes.length-1], size: 0, date: new Date(), files: fDirectory? [] : null};
                } else if (fCreate === false) {
                    dir.files.splice(j, 1);
                }
            }
        }
        return item;
    }

    /**
     * setItem(item, data)
     *
     * @param {PCFSItem} item
     * @param {*} data
     */
    static setItem(item, data)
    {
        if (!item.files) {
            item.data = data;
            item.size = data.length;
            item.date = new Date();
        }
    }
}
