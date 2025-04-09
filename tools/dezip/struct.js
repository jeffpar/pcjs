/**
 * @fileoverview Struct: A Class for Defining and Loading On-Disk Structures
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Adapted from (and should ultimately replace) /tools/modules/structure.js
 */

import CharSet from "./charset.js";

/**
 * Struct is a helper class for defining and loading on-disk structures.  For example:
 *
 *     static LocalHeader = new Struct("LocalHeader")
 *       .field('signature',     Struct.UINT32, {
 *           LOCSIG:    0x04034b50                      // "PK\003\004" (local file header signature)
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
 *       .field('fnameLen',      Struct.UINT16)         // filename length
 *       .field('extraLen',      Struct.UINT16)         // extra field length
 *       .verifySize(30);
 *
 * Then, to create/initialize an instance (ie, record) of that structure from a DataBuffer:
 *
 *   let header = LocalHeader.readStruct(db, offset);
 *
 * @class Struct
 */
export default class Struct {

    static INT8 = -1;
    static INT16 = -2;
    static INT32 = -3;
    static INT64 = -4;
    static UINT8 = -5;
    static UINT16 = -6;
    static UINT32 = -7;
    static UINT64 = -8;
    static STRING = -9;

    static SIZES = {
        [Struct.INT8]: 1,
        [Struct.INT16]: 2,
        [Struct.INT32]: 4,
        [Struct.INT64]: 8,
        [Struct.UINT8]: 1,
        [Struct.UINT16]: 2,
        [Struct.UINT32]: 4,
        [Struct.UINT64]: 8
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
            throw new Error("field " + name + " already defined in " + this.name);
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
     * getSize()
     *
     * @this {Struct}
     * @returns {number} size of the structure
     */
    getSize()
    {
        return this.length;
    }

    /**
     * verifySize(size)
     *
     * @this {Struct}
     * @param {number} size
     * @returns {Struct}
     */
    verifySize(size)
    {
        if (size != this.getSize()) {
            throw new Error("structure size mismatch (" + size + " != " + this.getSize() + ")");
        }
        return this;
    }

    /**
     * readStruct(db, offset)
     *
     * @this {Struct}
     * @param {DataBuffer} db
     * @param {number} offset
     * @returns {Object}
     */
    readStruct(db, offset = 0)
    {
        let record = {};
        for (let name in this.fields) {
            record[name] = this.get(db, offset, name);
        }
        return record;
    }

    /**
     * readString(db, offset, length)
     *
     * @this {Struct}
     * @param {DataBuffer} db
     * @param {number} offset
     * @param {number} length
     * @returns {string}
     */
    readString(db, offset, length)
    {
        return CharSet.fromCP437(db, offset, length);
    }

    /**
     * get(db, offset, name, encoding)
     *
     * @this {Struct}
     * @param {DataBuffer} db
     * @param {number} offset
     * @param {string} name
     * @param {string} [encoding] (default is "utf8")
     * @returns {number|string}
     */
    get(db, offset, name, encoding = "utf8")
    {
        let v;
        let field = this.fields[name];
        if (!field) throw new Error("field " + name + " not found in " + this.name);
        offset += field.offset;
        let length = field.length;
        if (offset + length > db.length) {
            throw new Error("field " + name + " limit exceeds buffer limit (" + (offset + length) + " > " + db.length + ")");
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
        case Struct.STRING:
            v = db.toString(encoding, offset, offset + length);
            for (let i = 0; i < length; i++) {
                if (v.charCodeAt(i) == 0) {
                    v = v.substr(0, i);
                    break;
                }
            }
            break;
        default:
            throw new Error("field " + name + " unsupported (" + field.type + ") in " + this.struct.name);
        }
        return v;
    }
}
