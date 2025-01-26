/**
 * @fileoverview DataBuffer: A Buffer-Like Class for Node and Browsers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @class DataBuffer
 * @property {boolean} node
 * @property {number} length
 */
export default class DataBuffer {
    /**
     * DataBuffer
     *
     * Our pseudo-Buffer class constructor needs to handle:
     *
     *   1) Array.<number> (array of bytes)
     *   2) ArrayBuffer
     *   3) another DataBuffer
     *   4) string
     *   5) number (to create a buffer with that many bytes)
     *   6) Buffer (for Node-specific callers)
     *
     * The start and end parameters are only used with #3 (ie, when another DataBuffer is passed).
     *
     * NOTE: You will NOT find all the methods of the Buffer class implemented here (only the ones we actually use).
     *
     * @this {DataBuffer}
     * @param {*} [init]
     * @param {number} [start]
     * @param {number} [end]
     */
    constructor(init = 0, start, end)
    {
        this.node = (typeof Buffer != "undefined");
        if (typeof init == "number") {
            init = new ArrayBuffer(init);
        }
        if (this.node) {
            if (Buffer.isBuffer(init)) {
                this.buffer = init;
            }
            else if (init instanceof DataBuffer) {
                this.buffer = init.buffer.slice(start, end);
            }
            else {
                this.buffer = Buffer.from(init);
            }
            this.length = this.buffer.length;
        }
        else {
            if (init instanceof DataBuffer) {
                init = init.ab;
            }
            if (init instanceof ArrayBuffer) {
                this.ab = init.slice(start || 0, end || init.byteLength);
                this.length = this.ab.byteLength;
                this.dv = new DataView(this.ab, 0, this.length);
            }
            else {
                if (typeof init == "string") {
                    let enc = new TextEncoder("utf-8");
                    init = enc.encode(init);
                }
                this.ab = new ArrayBuffer(init.length);
                this.dv = new DataView(this.ab, 0, init.length);
                for (let i = 0; i < init.length; i++) {
                    this.dv.setUint8(i, init[i]);
                }
                this.length = init.length;
            }
            this.buffer = new Uint8Array(this.ab);
        }
    }

    /**
     * compare(dbTarget)
     *
     * @this {DataBuffer}
     * @param {DataBuffer} dbTarget
     * @returns {boolean} (true if the contents of this buffer are equal to the contents of the specified buffer, false otherwise)
     */
    compare(dbTarget)
    {
        if (this.node) {
            return !Buffer.compare(this.buffer, dbTarget.buffer);
        }
        return false;   // TODO
    }

    /**
     * copy(dbTarget, offTarget, offSource, offSourceEnd)
     *
     * @this {DataBuffer}
     * @param {DataBuffer} dbTarget
     * @param {number} [offTarget]
     * @param {number} [offSource]
     * @param {number} [offSourceEnd]
     */
    copy(dbTarget, offTarget = 0, offSource = 0, offSourceEnd = this.length)
    {
        if (this.node) {
            this.buffer.copy(dbTarget.buffer, offTarget, offSource, offSourceEnd);
        } else {
            let cbCopy = offSourceEnd - offSource;
            let cbMax = dbTarget.length - offTarget;
            if (cbCopy > cbMax) cbCopy = cbMax;
            while (cbCopy-- > 0) {
                dbTarget.writeUInt8(this.readUInt8(offSource++), offTarget++);
            }
        }
    }

    /**
     * fill(data, off, end)
     *
     * NOTE: The Node Buffer class doesn't support fill() with a simple Array of bytes (aka octets), which seems a bit odd,
     * since Buffer class methods, such as from(), DO support such arrays.  Since our modules will always be using DataBuffer,
     * I'm going to take the liberty of adding that support.
     *
     * @this {DataBuffer}
     * @param {Array|number} data
     * @param {number} [off]
     * @param {number} [end]
     */
    fill(data, off = 0, end = this.length)
    {
        if (this.node && typeof data == "number") {
            this.buffer.fill(data, off, end);
        } else {
            let i = 0;
            if (end > this.length) end = this.length;
            for (let o = off; o < end; o++) {
                this.writeUInt8(typeof data == "number"? data : data[i++], o);
            }
        }
    }

    /**
     * new(size)
     *
     * @this {DataBuffer}
     * @param {number} size
     */
    new(size)
    {
        if (this.node && Buffer.alloc) {        // TODO: Determine why the Closure Compiler requires checking for 'alloc'
            this.buffer = Buffer.alloc(size);
            this.length = size;
        } else {
            this.ab = new ArrayBuffer(size);
            this.length = this.ab.byteLength;
            this.dv = new DataView(this.ab, 0, this.length);
        }
    }

    /**
     * slice(start, end)
     *
     * @this {DataBuffer}
     * @param {number} [start]
     * @param {number} [end]
     * @returns {DataBuffer}
     */
    slice(start, end)
    {
        return new DataBuffer(this, start || 0, end);
    }

    /**
     * write(s, off, len)
     *
     * @this {DataBuffer}
     * @param {string} s
     * @param {number} off
     * @param {number} len
     */
    write(s, off, len)
    {
        if (this.node) {
            this.buffer.write(s, off, len);
        } else {
            let i = 0;
            while (off < this.length) {
                this.dv.setUint8(off, s.charCodeAt(i++));
                off++;
            }
        }
    }

    /**
     * readUInt8(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readUInt8(off)
    {
        return this.node? this.buffer.readUInt8(off) : this.dv.getUint8(off);
    }

    /**
     * writeUInt8(b, off)
     *
     * @this {DataBuffer}
     * @param {number} b
     * @param {number} off
     */
    writeUInt8(b, off)
    {
        if (this.node) this.buffer.writeUInt8(b, off); else this.dv.setUint8(off, b);
    }

    /**
     * readUInt16BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readUInt16BE(off)
    {
        return this.node? this.buffer.readUInt16BE(off) : this.dv.getUint16(off);
    }

    /**
     * readUInt16LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readUInt16LE(off)
    {
        return this.node? this.buffer.readUInt16LE(off) : this.dv.getUint16(off, true);
    }

    /**
     * writeUInt16LE(w, off)
     *
     * @this {DataBuffer}
     * @param {number} w
     * @param {number} off
     */
    writeUInt16LE(w, off)
    {
        if (this.node) this.buffer.writeUInt16LE(w, off); else this.dv.setUint16(off, w, true);
    }

    /**
     * readInt16BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readInt16BE(off)
    {
        return this.node? this.buffer.readInt16BE(off) : this.dv.getInt16(off);
    }

    /**
     * readInt16LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readInt16LE(off)
    {
        return this.node? this.buffer.readInt16LE(off) : this.dv.getInt16(off, true);
    }

    /**
     * readUInt32BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readUInt32BE(off)
    {
        return this.node? this.buffer.readUInt32BE(off) : this.dv.getUint32(off);
    }

    /**
     * readUInt32LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readUInt32LE(off)
    {
        return this.node? this.buffer.readUInt32LE(off): this.dv.getUint32(off, true);
    }

    /**
     * readInt32BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readInt32BE(off)
    {
        return this.node? this.buffer.readInt32BE(off) : this.dv.getInt32(off);
    }

    /**
     * readInt32LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
     */
    readInt32LE(off)
    {
        return this.node? this.buffer.readInt32LE(off) : this.dv.getInt32(off, true);
    }

    /**
     * writeInt32LE(dw, off)
     *
     * @this {DataBuffer}
     * @param {number} dw
     * @param {number} off
     */
    writeInt32LE(dw, off)
    {
        if (this.node) this.buffer.writeInt32LE(dw, off); else this.dv.setInt32(off, dw, true);
    }

    /**
     * toString(format, start, end)
     *
     * @this {DataBuffer}
     * @param {string} [format]
     * @param {number} [start]
     * @param {number} [end]
     * @returns {string}
     */
    toString(format, start = 0, end = this.length)
    {
        let s = "";
        if (this.node) {
            s = this.buffer.toString(format, start, end);
        } else {
            let a = new Uint8Array(this.ab, start, end - start);
            if (format && "TextDecoder" in window) {
                let dec = new TextDecoder(format);
                s = dec.decode(a);
            } else {
                // s = String.fromCharCode(...a) fails for large arrays...
                for (let i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
            }
        }
        return s;
    }
}
