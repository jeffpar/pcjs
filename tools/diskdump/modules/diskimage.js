/**
 * @fileoverview Disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import FileInfo from "./fileinfo.js";

/**
* @typedef {Object} Sector
* @property {number} sector
* @property {number} length
* @property {number} dataMark
* @property {number} headCRC
* @property {boolean} headError
* @property {number} dataCRC
* @property {boolean} dataError
* @property {Array.<number>} data
* @property {number|null} pattern
* @property {number} iCylinder
* @property {number} iHead
* @property {number} iModify
* @property {number} cModify
* @property {FileInfo} file
* @property {number} offFile
*/

/**
 * @class DiskImage
 * @property {Array} diskData
 */
export default class DiskImage {
    /**
     * DiskImage(db)
     *
     * @this DiskImage
     * @param {Device} device
     * @param {DataBuffer|string} db
     */
    constructor(device, db)
    {
        this.device = device;
        this.db = db;
    }

    /**
     * getSize()
     *
     * @this DiskImage
     */
    getSize()
    {
        return this.db.length;
    }
}
