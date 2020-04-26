/**
 * @fileoverview Web version of DataBuffer
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @class DataBuffer
 * @property {Buffer} buffer
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
     *
     * The start and end parameters are only used with #3 (ie, when another DataBuffer is passed).
     *
     * @this {DataBuffer}
     * @param {Array|ArrayBuffer|DataBuffer|number|string} [init]
     * @param {number} [start]
     * @param {number} [end]
     */
    constructor(init = 0, start, end)
    {
        if (typeof init == "number") {
            init = new ArrayBuffer(init);
            /* fall into the ArrayBuffer case */
        }
        if (init instanceof ArrayBuffer) {
            this.ab = init;
            this.length = this.ab.byteLength;
            this.dv = new DataView(this.ab, 0, this.length);
            return;
        }
        if (init instanceof DataBuffer) {
            this.ab = init.ab;
            if (start == undefined) start = 0;
            if (end == undefined) end = init.length;
            this.length = end - start;
            this.dv = new DataView(this.ab, start, this.length);
        }
        else {
            let off;
            this.ab = new ArrayBuffer(init.length);
            this.dv = new DataView(this.ab, 0, init.length);
            if (typeof init != "string") {
                for (off = 0; off < init.length; off++) {
                    this.dv.setUint8(off, init[off]);
                }
            } else {
                for (off = 0; off < init.length; off++) {
                    this.dv.setUint8(off, init.charCodeAt(off));
                }
            }
            this.length = init.length;
        }
    }

    /**
     * copy(dbTarget, offTarget)
     *
     * @this {DataBuffer}
     * @param {DataBuffer} dbTarget
     * @param {number} offTarget
     */
    copy(dbTarget, offTarget)
    {
        let offMax = this.length;
        let cbMax = dbTarget.length - offTarget;
        if (offMax > cbMax) offMax = cbMax;
        for (let off = 0; off < offMax; off++) {
            dbTarget.writeUInt8(this.readUInt8(off), offTarget + off);
        }
    }

    /**
     * fill(data, off, end)
     *
     * @this {DataBuffer}
     * @param {Array|number} data
     * @param {number} [off]
     * @param {number} [end]
     */
    fill(data, off = 0, end = this.length)
    {
        let i = 0;
        if (end > this.length) end = this.length;
        for (let o = off; o < end; o++) {
            this.dv.setUint8(o, typeof data == "number"? data : data[i++]);
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
        this.ab = new ArrayBuffer(size);
        this.length = this.ab.byteLength;
        this.dv = new DataView(this.ab, 0, this.length);
    }

    /**
     * slice(start, end)
     *
     * @this {DataBuffer}
     * @param {number} [start]
     * @param {number} [end]
     * @return {DataBuffer}
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
        let i = 0;
        while (off < this.length) {
            this.dv.setUint8(off, s.charCodeAt(i++));
            off++;
        }
    }

    /**
     * readUInt8(b)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readUInt8(off)
    {
        return this.dv.getUint8(off);
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
        this.dv.setUint8(off, b);
    }

    /**
     * readUInt16BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readUInt16BE(off)
    {
        return this.dv.getUint16(off);
    }

    /**
     * readUInt16LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readUInt16LE(off)
    {
        return this.dv.getUint16(off, true);
    }

    /**
     * readUInt32BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readUInt32BE(off)
    {
        return this.dv.getUint32(off);
    }

    /**
     * readUInt32LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readUInt32LE(off)
    {
        return this.dv.getUint32(off, true);
    }

    /**
     * readInt32BE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readInt32BE(off)
    {
        return this.dv.getInt32(off);
    }

    /**
     * readInt32LE(off)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @return {number}
     */
    readInt32LE(off)
    {
        return this.dv.getInt32(off, true);
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
        this.dv.setInt32(off, dw, true);
    }

    /**
     * toString(format)
     *
     * @this {DataBuffer}
     * @param {string} [format]
     * @return {string}
     */
    toString(format)
    {
        return "";      // TODO: Implement; see also: encodeAsBase64()
    }
}
