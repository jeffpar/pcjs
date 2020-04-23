/**
 * @fileoverview Node version of DataBuffer
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
     *   6) Buffer (for Node-specific callers)
     *
     * The start and end parameters are only used with #3 (ie, when another DataBuffer is passed).
     *
     * @this {DataBuffer}
     * @param {Array|ArrayBuffer|Buffer|DataBuffer|number|string} [init]
     * @param {number} [start]
     * @param {number} [end]
     */
    constructor(init, start, end)
    {
        if (typeof init == "number") {
            this.buffer = Buffer.alloc(init);
        }
        else if (typeof init == "object") {
            if (init instanceof Buffer) {
                this.buffer = init;
            }
            if (init instanceof DataBuffer) {
                this.buffer = init.buffer.slice(start, end);
            }
        } else {
            this.buffer = Buffer.from(init);
        }
        this.length = this.buffer.length;
    }

    /**
     * fill(b)
     *
     * @this {DataBuffer}
     * @param {number} b
     */
    fill(b)
    {
        this.buffer.fill(b);
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
        this.buffer.write(s, off, len);
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
        return this.buffer.readUInt8(off);
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
        this.buffer.writeUInt8(b, off);
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
        return this.buffer.readUInt16BE(off);
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
        return this.buffer.readUInt16LE(off);
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
        return this.buffer.readUInt32BE(off);
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
        return this.buffer.readUInt32LE(off);
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
        return this.buffer.readInt32BE(off);
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
        return this.buffer.readInt32LE(off);
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
        this.buffer.writeInt32LE(dw, off);
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
        this.buffer.copy(bufTarget.buffer, offTarget);
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
        return this.buffer.toString(format);
    }
}
