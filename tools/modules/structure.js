/**
 * @fileoverview Structure Class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @class Structure
 */
export default class Structure {

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
        [Structure.INT8]: 1,
        [Structure.INT16]: 2,
        [Structure.INT32]: 4,
        [Structure.INT64]: 8,
        [Structure.UINT8]: 1,
        [Structure.UINT16]: 2,
        [Structure.UINT32]: 4,
        [Structure.UINT64]: 8
    };

    /**
     * constructor(name, littleEndian))
     *
     * @this {Structure}
     * @param {string} [name]
     * @param {boolean} [littleEndian]
     */
    constructor(name, littleEndian = true)
    {
        this._name = name || "Structure";
        this._littleEndian = littleEndian;
        this._off = 0;
        this._buf = null;
    }

    /**
     * field(name, type, values)
     *
     * type should be either a Structure constant (eg, Structure.INT8) or a length (implying a string).
     *
     * @this {Structure}
     * @param {string} name
     * @param {number} type
     * @param {Object} [values]
     * @returns {Structure}
     */
    field(name, type, values)
    {
        if (this[name]) {
            throw new Error("field " + name + " already defined in " + this._name);
        }
        let size = Structure.SIZES[type];
        if (!size) {
            size = type;
            type = Structure.STRING;
        }
        let f = {
            _off: this._off,
            _len: size,
            _type: type
        };
        if (values) {
            for (let value in values) {
                f[value] = values[value];
            }
        }
        this[name] = f;
        this._off += size;
        return this;
    }

    /**
     * getSize()
     *
     * @this {Structure}
     * @returns {number} size of the structure
     */
    getSize()
    {
        return this._off;
    }

    /**
     * verifySize(size)
     *
     * @this {Structure}
     * @param {number} size
     * @returns {Structure}
     */
    verifySize(size)
    {
        if (size != this.getSize()) {
            throw new Error("structure size mismatch (" + size + " != " + this.getSize() + ")");
        }
        return this;
    }

    /**
     * setData(buf, offset)
     *
     * @this {Structure}
     * @param {Buffer} buf
     * @param {number} [offset]
     */
    setData(buf, offset = 0)
    {
        this._buf = buf;
        this._bufOffset = offset;
        if (this._buf.length < this._bufOffset + this._off) {
            throw new Error("buffer too small (" + this._buf.length + " < " + (this._bufOffset + this._off) + ")");
        }
    }

    /**
     * getField(name, encoding)
     *
     * @this {Structure}
     * @param {string} name
     * @param {string} [encoding] (default is "utf8")
     * @return {number|string}
     */
    getField(name, encoding = "utf8")
    {
        let v;
        if (!this._buf) throw new Error("no data for " + this._name);
        let f = this[name];
        if (!f) throw new Error("field " + name + " not found in " + this._name);
        let off = f._off + this._bufOffset;
        let len = f._len;
        switch(f._type) {
        case Structure.INT8:
            v = this._buf.readInt8(off);
            break;
        case Structure.INT16:
            v = this._littleEndian? this._buf.readInt16LE(off) : this._buf.readInt16BE(off);
            break;
        case Structure.INT32:
            v = this._littleEndian? this._buf.readInt32LE(off) : this._buf.readInt32BE(off);
            break;
        case Structure.INT64:
            v = this._littleEndian?
                (this._buf.readInt32LE(off) + this._buf.readInt32LE(off + 4) * 0x0000000100000000) :
                (this._buf.readInt32BE(off) * 0x0000000100000000 + this._buf.readInt32BE(off + 4));
            break;
        case Structure.UINT8:
            v = this._buf.readUInt8(off);
            break;
        case Structure.UINT16:
            v = this._littleEndian? this._buf.readUInt16LE(off) : this._buf.readUInt16BE(off);
            break;
        case Structure.UINT32:
            v = this._littleEndian? this._buf.readUInt32LE(off) : this._buf.readUInt32BE(off);
            break;
        case Structure.UINT64:
            v = this._littleEndian?
                (this._buf.readUInt32LE(off) + this._buf.readUInt32LE(off + 4) * 0x0000000100000000) :
                (this._buf.readUInt32BE(off) * 0x0000000100000000 + this._buf.readUInt32BE(off + 4));
            break;
        case Structure.STRING:
            v = this._buf.toString(encoding, off, len);
            break;
        default:
            throw new Error("field " + name + " unsupported (" + this._type + ") in " + this._name);
        }
        return v;
    }

    /**
     * assignField(object, name, encoding)
     *
     * @this {Structure}
     * @param {Object} object
     * @param {string|Array.<string>} name (or array of names)
     * @param {string} [encoding] (default is "utf8")
     */
    assignField(object, name, encoding)
    {
        if (Array.isArray(name)) {
            for (let i = 0; i < name.length; i++) {
                this.assignField(object, name[i], encoding);
            }
            return;
        }
        object[name] = this.getField(name, encoding);
    }

    /**
     * verifyField(name, value, encoding)
     *
     * @this {Structure}
     * @param {string} name
     * @param {number|string} value
     * @param {string} [encoding] (default is "utf8")
     * @return {boolean}
     */
    verifyField(name, value, encoding)
    {
        let v = this.getField(name, encoding);
        let expected = this[name][value];
        if (v != expected) {
            throw new Error("field " + name + " (" + v + ") does not match " + value + " (" + expected + ")");
        }
        return true;
    }
}
