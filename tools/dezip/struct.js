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

    static INT8             = -1;
    static INT16            = -2;
    static INT32            = -3;
    static INT64            = -4;
    static UINT8            = -5;
    static UINT16           = -6;
    static UINT32           = -7;
    static UINT64           = -8;
    static DOSTIMEDATE      = -9;
    static DOSDATETIME      = -10;

    static SIZES = {
        [Struct.STRING]:      0,
        [Struct.INT8]:        1,
        [Struct.INT16]:       2,
        [Struct.INT32]:       4,
        [Struct.INT64]:       8,
        [Struct.UINT8]:       1,
        [Struct.UINT16]:      2,
        [Struct.UINT32]:      4,
        [Struct.UINT64]:      8,
        [Struct.DOSTIMEDATE]: 4,        // 16-bit time followed by 16-bit date (used by ZIP headers and DOS)
        [Struct.DOSDATETIME]: 4         // 16-bit date followed by 16-bit time (used by ARC headers)
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
        case Struct.INT8:
            v = db.readInt8(offset);
            break;
        case Struct.INT16:
            v = this.littleEndian? db.readInt16LE(offset) : db.readInt16BE(offset);
            break;
        case Struct.INT32:
            v = this.littleEndian? db.readInt32LE(offset) : db.readInt32BE(offset);
            break;
        case Struct.INT64:
            /**
             * TODO: As we noted in StreamZip, perhaps we should be using BigInts, because what this function is
             * currently doing cannot accurately handle integer values larger than 2^53 (Number.MAX_SAFE_INTEGER).
             */
            v = this.littleEndian?
                (db.readInt32LE(offset) + db.readInt32LE(offset + 4) * 0x0000000100000000) :
                (db.readInt32BE(offset) * 0x0000000100000000 + db.readInt32BE(offset + 4));
            break;
        case Struct.UINT8:
            v = db.readUInt8(offset);
            break;
        case Struct.UINT16:
            v = this.littleEndian? db.readUInt16LE(offset) : db.readUInt16BE(offset);
            break;
        case Struct.UINT32:
            v = this.littleEndian? db.readUInt32LE(offset) : db.readUInt32BE(offset);
            break;
        case Struct.UINT64:
            /**
             * TODO: As we noted in StreamZip, perhaps we should be using BigInts, because what this function is
             * currently doing cannot accurately handle integer values larger than 2^53 (Number.MAX_SAFE_INTEGER).
             */
            v = this.littleEndian?
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
        case Struct.STRING:
            v = this.readString(db, offset, length, encoding);
            for (let i = 0; i < length; i++) {
                if (v.charCodeAt(i) == 0) {
                    v = v.substr(0, i);
                    break;
                }
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
        let orig = { ...d };
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
            warnings.push(`Error${exceptions > 1? 's' : ''}) in date/time: ${orig.m+1}/${orig.d}/${orig.y} ${orig.h}:${(orig.n < 10? '0' : '')}${orig.n}:${(orig.s < 10? '0' : '')}${orig.s})`);
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
            throw new Error("Structure size mismatch (" + length + " != " + this.length + ")");
        }
        return this;
    }
}
