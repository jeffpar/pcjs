/**
 * @fileoverview Library for defining and loading on-disk structures
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Adapted from https://www.pcjs.org/tools/modules/structure.js
 */

import CharSet from "./charset.js";
import DataBuffer from "./db.js";

/**
 * Struct is a helper class for defining and loading on-disk structures.  For example:
 *
 *     static FileHeader = new Struct("FileHeader")
 *       .field('signature',     Struct.UINT32, {
 *           FILESIG:   0x04034b50                      // "PK\003\004" (local file header signature)
 *       })
 *       .field('version',       Struct.UINT16)         // version needed to extract
 *       .field('flags',         Struct.UINT16, {       // general purpose bit flag
 *           ENC:       0x0001,                         // encrypted file
 *           COMP1:     0x0002,                         // compression option
 *           COMP2:     0x0004,                         // compression option
 *           DESC:      0x0008,                         // data descriptor
 *           ENH:       0x0010,                         // enhanced deflation
 *           STR:       0x0040,                         // strong encryption
 *           LNG:       0x0400                          // UNICODE encoding
 *       })
 *       .field('method',        Struct.UINT16)         // compression method
 *       .field('time',          Struct.UINT16)         // modification time
 *       .field('date',          Struct.UINT16)         // modification date
 *       .field('crc',           Struct.UINT32)         // uncompressed file CRC-32 value
 *       .field('compressedSize',Struct.UINT32)         // compressed size
 *       .field('size',          Struct.UINT32)         // uncompressed size
 *       .field('nameLen',       Struct.UINT16)         // filename length
 *       .field('extraLen',      Struct.UINT16)         // extra field length
 *       .verifyLength(30);
 *
 * Then, to create/initialize an instance (ie, record) of that structure from a DataBuffer:
 *
 *   let header = FileHeader.readStruct(db, offset);
 *
 * @class Struct
 */
export default class Struct {

    static STRING           =   0;
    static INT8             =  -1;
    static INT16            =  -2;
    static INT32            =  -3;
    static INT64            =  -4;
    static UINT8            =  -5;
    static BYTE             =  -5;      // alias for UINT8
    static UINT16           =  -6;
    static WORD             =  -6;      // alias for UINT16
    static UINT32           =  -7;
    static DWORD            =  -7;      // alias for UINT32
    static UINT64           =  -8;
    static INT16LE          = -10;      // 16-bit little-endian integer
    static INT32LE          = -11;      // 32-bit little-endian integer
    static INT64LE          = -12;      // 64-bit little-endian integer
    static INT16BE          = -13;      // 16-bit big-endian integer
    static INT32BE          = -14;      // 32-bit big-endian integer
    static INT64BE          = -15;      // 64-bit big-endian integer
    static INT16CE          = -16;      // 16-bit combined-endian integer (ie, little-endian followed by big-endian)
    static INT32CE          = -17;      // 32-bit combined-endian integer (ie, little-endian followed by big-endian)
    static UINT16LE         = -18;      // 16-bit little-endian unsigned integer
    static UINT32LE         = -19;      // 32-bit little-endian unsigned integer
    static UINT64LE         = -20;      // 64-bit little-endian unsigned integer
    static UINT16BE         = -21;      // 16-bit big-endian unsigned integer
    static UINT32BE         = -22;      // 32-bit big-endian unsigned integer
    static UINT64BE         = -23;      // 64-bit big-endian unsigned integer
    static UINT16CE         = -24;      // 16-bit combined-endian unsigned integer (ie, little-endian followed by big-endian)
    static UINT32CE         = -25;      // 32-bit combined-endian unsigned integer (ie, little-endian followed by big-endian)
    static DOSTIMEDATE      = -26;
    static DOSDATETIME      = -27;
    static DECDATETIME      = -28;      // 17-byte date/time format used in ISO 9660 images

    static STR = function(length) {
        return length;
    };

    static DATA = function(length) {
        return length;
    };

    static SIZES = {
        [Struct.STR]:          0,       // ASCII string
        [Struct.INT8]:         1,
        [Struct.INT16]:        2,
        [Struct.INT32]:        4,
        [Struct.INT64]:        8,
        [Struct.INT16LE]:      2,       // 16-bit little-endian integer
        [Struct.INT32LE]:      4,       // 32-bit little-endian integer
        [Struct.INT64LE]:      8,       // 64-bit little-endian integer
        [Struct.INT16BE]:      2,       // 16-bit big-endian integer
        [Struct.INT32BE]:      4,       // 32-bit big-endian integer
        [Struct.INT64BE]:      8,       // 64-bit big-endian integer
        [Struct.INT16CE]:      4,       // 16-bit combined-endian integer (ie, little-endian followed by big-endian)
        [Struct.INT32CE]:      8,       // 32-bit combined-endian integer (ie, little-endian followed by big-endian)
        [Struct.UINT8]:        1,
        [Struct.UINT16]:       2,
        [Struct.UINT32]:       4,
        [Struct.UINT64]:       8,
        [Struct.UINT16LE]:     2,       // 16-bit little-endian unsigned integer
        [Struct.UINT32LE]:     4,       // 32-bit little-endian unsigned integer
        [Struct.UINT64LE]:     8,       // 64-bit little-endian unsigned integer
        [Struct.UINT16BE]:     2,       // 16-bit big-endian unsigned integer
        [Struct.UINT32BE]:     4,       // 32-bit big-endian unsigned integer
        [Struct.UINT64BE]:     8,       // 64-bit big-endian unsigned integer
        [Struct.UINT16CE]:     4,       // 16-bit combined-endian unsigned integer (ie, little-endian followed by big-endian)
        [Struct.UINT32CE]:     8,       // 32-bit combined-endian unsigned integer (ie, little-endian followed by big-endian)
        [Struct.DOSTIMEDATE]:  4,       // 16-bit time followed by 16-bit date (used by ZIP headers and DOS)
        [Struct.DOSDATETIME]:  4,       // 16-bit date followed by 16-bit time (used by ARC headers)
        [Struct.DECDATETIME]: 17        // 16-byte date/time string followed by 1-byte time zone offset (used by ISO 9660 images)
    };

    /**
     * constructor(name, littleEndian)
     *
     * @this {Struct}
     * @param {string} [name]
     * @param {boolean} [littleEndian]
     */
    constructor(name, littleEndian = true)
    {
        this.name = name || "Struct";
        this.littleEndian = littleEndian;
        this.fields = {};
        this.length = 0;
    }

    /**
     * field(name, type, values)
     *
     * type should be either a Struct constant (eg, Struct.INT8) or a length (implying a string).
     *
     * @this {Struct}
     * @param {string} name
     * @param {number} type
     * @param {Object} [values]
     * @returns {Struct}
     */
    field(name, type, values)
    {
        if (this.fields[name]) {
            throw new Error("Field " + name + " already defined in " + this.name);
        }
        let size = Struct.SIZES[type];
        if (!size) {
            size = type;
            type = Struct.STRING;
        }
        let field = {
            type: type,
            offset: this.length,
            length: size
        };
        if (values) {
            for (let value in values) {
                field[value] = values[value];
            }
        }
        this.fields[name] = field;
        this.length += size;
        return this;
    }

    /**
     * read(db, offset, name, encoding, warnings)
     *
     * @this {Struct}
     * @param {DataBuffer} db
     * @param {number} offset
     * @param {string} name
     * @param {string} [encoding] (default is "cp437")
     * @param {Array} [warnings]
     * @returns {number|string}
     */
    read(db, offset, name, encoding = "cp437", warnings = [])
    {
        let v, time, date;
        let field = this.fields[name];
        if (!field) {
            throw new Error("Field " + name + " not found in " + this.name);
        }
        offset += field.offset;
        let length = field.length;
        if (offset + length > db.length) {
            throw new Error("Field " + name + " limit exceeds buffer limit (" + (offset + length) + " > " + db.length + ")");
        }
        switch(field.type) {
        case Struct.STRING:
            v = this.readString(db, offset, length, encoding);
            for (let i = 0; i < length; i++) {
                if (v.charCodeAt(i) == 0) {
                    v = v.slice(0, i);
                    break;
                }
            }
            v = v.trim();
            break;
        case Struct.INT8:
            v = db.readInt8(offset);
            break;
        case Struct.INT16:
            v = this.littleEndian? db.readInt16LE(offset) : db.readInt16BE(offset);
            break;
        case Struct.INT16LE:
            v = db.readInt16LE(offset);
            break;
        case Struct.INT16BE:
            v = db.readInt16BE(offset);
            break;
        case Struct.INT16CE:
            v = this.littleEndian? db.readInt16LE(offset) : db.readInt16BE(offset + 2);
            break;
        case Struct.INT32:
            v = this.littleEndian? db.readInt32LE(offset) : db.readInt32BE(offset);
            break;
        case Struct.INT32LE:
            v = db.readInt32LE(offset);
            break;
        case Struct.INT32BE:
            v = db.readInt32BE(offset);
            break;
        case Struct.INT32CE:
            v = this.littleEndian? db.readInt32LE(offset) : db.readInt32BE(offset + 4);
            break;
        case Struct.INT64:
        case Struct.INT64LE:
        case Struct.INT64BE:
            /**
             * TODO: As we noted in StreamZip, perhaps we should be using BigInts, because what this function is
             * currently doing cannot accurately handle integer values larger than 2^53 (Number.MAX_SAFE_INTEGER).
             */
            v = (this.littleEndian || field.type == Struct.INT64LE) && field.type != Struct.INT64BE?
                (db.readInt32LE(offset) + db.readInt32LE(offset + 4) * 0x0000000100000000) :
                (db.readInt32BE(offset) * 0x0000000100000000 + db.readInt32BE(offset + 4));
            break;
        case Struct.UINT8:
            v = db.readUInt8(offset);
            break;
        case Struct.UINT16:
            v = this.littleEndian? db.readUInt16LE(offset) : db.readUInt16BE(offset);
            break;
        case Struct.UINT16LE:
            v = db.readUInt16LE(offset);
            break;
        case Struct.UINT16BE:
            v = db.readUInt16BE(offset);
            break;
        case Struct.UINT16CE:
            v = this.littleEndian? db.readUInt16LE(offset) : db.readUInt16BE(offset + 2);
            break;
        case Struct.UINT32:
            v = this.littleEndian? db.readUInt32LE(offset) : db.readUInt32BE(offset);
            break;
        case Struct.UINT32LE:
            v = db.readUInt32LE(offset);
            break;
        case Struct.UINT32BE:
            v = db.readUInt32BE(offset);
            break;
        case Struct.UINT32CE:
            v = this.littleEndian? db.readUInt32LE(offset) : db.readUInt32BE(offset + 4);
            break;
        case Struct.UINT64:
        case Struct.UINT64LE:
        case Struct.UINT64BE:
            /**
             * TODO: As we noted in StreamZip, perhaps we should be using BigInts, because what this function is
             * currently doing cannot accurately handle integer values larger than 2^53 (Number.MAX_SAFE_INTEGER).
             */
            v = (this.littleEndian || field.type == Struct.UINT64LE) && field.type != Struct.UINT64BE?
                (db.readUInt32LE(offset) + db.readUInt32LE(offset + 4) * 0x0000000100000000) :
                (db.readUInt32BE(offset) * 0x0000000100000000 + db.readUInt32BE(offset + 4));
            break;
        case Struct.DOSTIMEDATE:        // since this is defined as a DOS field, we assume little-endian
            time = db.readUInt16LE(offset);
            date = db.readUInt16LE(offset + 2);
            v = this.parseDateTime(date, time, warnings);
            break;
        case Struct.DOSDATETIME:        // since this is defined as a DOS field, we assume little-endian
            date = db.readUInt16LE(offset);
            time = db.readUInt16LE(offset + 2);
            v = this.parseDateTime(date, time, warnings);
            break;
        case Struct.DECDATETIME:
            date = this.readString(db, offset, 16);
            date = date.replace(/([0-9][0-9][0-9][0-9])([0-9][0-9])([0-9][0-9])([0-9][0-9])([0-9][0-9])([0-9][0-9])([0-9][0-9])/, "$1-$2-$3 $4:$5:$6.$7");
            //
            // Time zone offset from GMT is in 15 minute intervals, starting at interval -48 (west) and running
            // up to interval 52 (east), spanning time zones GMT-12 through GMT+13.
            //
            v = new Date(date);
            let tz = db.readInt8(offset + 16);
            if (tz < -48 || tz > 52) {
                warnings.push(`Time zone offset ${tz} outside valid range (-48 to +52)`);
                tz = 0;
            }
            if (tz) {
                v.setTime(v.getTime() + tz * 15 * 60 * 1000);
            }
            break;
        default:
            throw new Error("Field " + name + " unsupported (" + field.type + ") in " + this.struct.name);
        }
        return v;
    }

    /**
     * readStruct(db, offset, encoding)
     *
     * @this {Struct}
     * @param {DataBuffer} db
     * @param {number} [offset]
     * @param {string} [encoding]
     * @returns {Object}
     */
    readStruct(db, offset = 0, encoding = "cp437")
    {
        let record = {}, warnings = [];
        for (let name in this.fields) {
            record[name] = this.read(db, offset, name, encoding, warnings);
        }
        if (warnings.length) {
            record.warnings = warnings;
        }
        return record;
    }

    /**
     * readString(db, offset, length, encoding)
     *
     * @this {Struct}
     * @param {DataBuffer} db
     * @param {number} offset
     * @param {number} length
     * @param {string} [encoding] (default is "cp437")
     * @returns {string}
     */
    readString(db, offset, length, encoding = "cp437")
    {
        return encoding == "cp437"? CharSet.fromCP437(db, offset, length, true) : db.toString(encoding, offset, offset+length);
    }

    /**
     * parseDateTime(date, time, warnings)
     *
     * ZIP/ARC archives contain local times, so we return a Date object in local time.
     *
     * @this {Struct}
     * @param {number} date (16 bits)
     * @param {number} time (16 bits)
     * @param {Array} [warnings]
     * @returns {Date}
     */
    parseDateTime(date, time, warnings = [])
    {
        let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        let d = {
            y: (date >> 9) + 1980,
            m: ((date >> 5) & 0xf) - 1,
            d: (date & 0x1f),
            h: (time >> 11),
            n: (time >> 5) & 0x3f,
            s: (time & 0x1f) << 1
        };
        /**
         * Date/time validation follows (although each part of the date/time is stored
         * in a limited number of bits, those bits can still contain out-of-bounds values).
         *
         * If date/time wasn't set (ie, 0x00000000), then m will be -1 and d will be 0,
         * resulting in a Date where getFullYear() < 1980.  We allow that, so that the caller
         * can detect that case and act accordingly; however, if date/time WAS set, then
         * we do NOT allow those values.
         *
         * Unfortunately, while files without dates were zipped by PKZIP with a date of zero,
         * when such files are unzipped with a modern `unzip` utility, the date is set to the
         * UNIX epoch, and when such files are re-zipped with a modern `zip` utility, the date
         * is set to Jan 1 1980, which is NOT zero.  By "rounding up" invalid dates to the
         * oldest valid MS-DOS date, modern zip utilities fail to preserve original timestamps
         * (or rather, the lack thereof); they should have re-zipped any date < 1980 as zero.
         */
        let exceptions = 0;
        let o = { ...d };
        if ((date || time) && d.m < 0) {
            d.m = 0;
            exceptions++;
        }
        if (d.m > 11) {
            d.m = 11;
            exceptions++;
        }
        if ((date || time) && d.d < 1) {
            d.d = 1;
            exceptions++;
        }
        if (d.d > 31) {
            d.d = monthDays[d.m];
            if (d.y % 4 == 0) d.d++;        // adequate for the range of years we're dealing with
            exceptions++;
        }
        if (d.h > 23) {
            d.h = 23;
            exceptions++;
        }
        if (d.n > 59) {
            d.n = 59;
            exceptions++;
        }
        if (d.s > 59) {
            d.s = 59;
            exceptions++;
        }
        if (exceptions) {
            warnings.push(`Invalid date/time: ${o.y}-${(o.m < 9? '0' : '')}${o.m+1}-${(o.d < 10? '0' : '')}${o.d} ${(o.h < 10? '0' : '')}${o.h}:${(o.n < 10? '0' : '')}${o.n}:${(o.s < 10? '0' : '')}${o.s}`);
        }
        return new Date(d.y, d.m, d.d, d.h, d.n, d.s);
    }

    /**
     * verifyLength(size)
     *
     * @this {Struct}
     * @param {number} length
     * @returns {Struct}
     */
    verifyLength(length)
    {
        if (length != this.length) {
            throw new Error(`${this.name} length is ${this.length}, expected ${length}`);
        }
        return this;
    }
}
