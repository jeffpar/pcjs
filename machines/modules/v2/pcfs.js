/**
 * @fileoverview PCFS Library
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

/**
 * @class PCFS
 */
export default class PCFS {
    /**
     * PCFS
     *
     * @this {PCFS}
     */
    constructor()
    {
        this.root = globals.pcjs['files'] || [];
    }

    /**
     * isPCFS(path)
     *
     * @param {string} path
     * @returns {boolean}
     */
    isPCFS(path)
    {
        return path.indexOf("/pcfs/") == 0;
    }

    /**
     * getItem(path, fCreate, fDirectory)
     *
     * @this {PCFS}
     * @param {string} path
     * @param {boolean} [fCreate] (true to create, false to remove, undefined if don't care)
     * @param {boolean} [fDirectory]
     * @returns {PCFSItem|null}
     */
    getItem(path, fCreate, fDirectory)
    {
        let item = null;
        if (this.isPCFS(path)) {
            let parts = path.slice(6).split('/');
            let dir = this.root, i, j;
            for (i = 0; i < parts.length; i++) {
                let name = parts[i], match = false;
                for (j = 0; j < dir.length; j++) {
                    let next = dir[j];
                    if (next.name == name) {
                        if (i == parts.length - 1) {
                            item = next;
                            break;
                        }
                        if (next.files) {
                            dir = next.files;
                            match = true;
                            break;
                        }
                    }
                }
                if (item) break;
                if (match) continue;
                if (i < parts.length - 1) {
                    if (fCreate) {
                        let sub = {name, size: 0, date: new Date(), files: []};
                        dir.push(sub);
                        dir = sub.files;
                        continue;
                    }
                    break;
                }
            }
            if (!item && i == parts.length) {
                if (fCreate) {
                    item = dir[dir.length] = {name: parts[parts.length-1], size: 0, date: new Date(), files: fDirectory? [] : null};
                } else if (fCreate === false) {
                    dir.splice(j, 1);
                }
            }
        }
        return item;
    }

    /**
     * setItem(item, data)
     *
     * @this {PCFS}
     * @param {PCFSItem} item
     * @param {*} data
     */
    setItem(item, data)
    {
        item.data = data;
        item.size = data.length;
        item.date = new Date();
    }
}
