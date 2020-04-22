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
     * @this {DataBuffer}
     * @param {number|string|Array|DataBuffer|Buffer} [init]
     * @param {number} [start]
     * @param {number} [end]
     */
    constructor(init, start, end)
    {
        if (typeof init == "number") {
            this.ab = new ArrayBuffer(init);
            this.dv = new DataView(this.ab, 0, init);
            this.length = init;
        }
        else if (start === undefined) {
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
        } else {
            this.ab = init.ab;
            if (end === undefined) end = this.ab.length;
            this.dv = new DataView(this.ab, start, this.length = end - start);
        }
    }

    /**
     * fill(b)
     *
     * @this {DataBuffer}
     * @param {number} b
     */
    fill(b)
    {
        for (let off = 0; off < this.length; off++) {
            this.dv.setUint8(off, b);
        }
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
     * copy(bufTarget, offTarget)
     *
     * @this {DataBuffer}
     * @param {DataBuffer} bufTarget
     * @param {number} offTarget
     */
    copy(bufTarget, offTarget)
    {
        let offMax = this.length;
        let cbMax = bufTarget.length - offTarget;
        if (offMax > cbMax) offMax = cbMax;
        for (let off = 0; off < offMax; off++) {
            bufTarget.writeUInt8(this.readUInt8(off), offTarget + off);
        }
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
