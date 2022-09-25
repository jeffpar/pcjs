/**
 * @fileoverview Node version of DataBuffer
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2022 Jeff Parsons
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
    constructor(init = 0, start, end)
    {
        if (typeof init == "number") {
            this.new(init);
        }
        else if (init instanceof Buffer) {
            this.buffer = init;
        }
        else if (init instanceof DataBuffer) {
            this.buffer = init.buffer.slice(start, end);
        } else {
            this.buffer = Buffer.from(init);
        }
        this.length = this.buffer.length;
    }

    /**
     * compare(dbTarget)
     *
     * NOTE: This method isn't part of the Node Buffer class, but it's useful for creating comparing buffers without the client
     * needing to known which DataBuffer class to import (eg, nodebuffer.js or webbuffer.js).
     *
     * The implementation here in nodebuffer.js is trivial, because there's a Node Buffer class method that compares two buffers.
     *
     * @this {DataBuffer}
     * @param {DataBuffer} dbTarget
     * @returns {boolean} (true if the contents of this buffer are equal to the contents of the specified buffer, false otherwise)
     */
    compare(dbTarget)
    {
        return !Buffer.compare(this.buffer, dbTarget.buffer);
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
        this.buffer.copy(dbTarget.buffer, offTarget);
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
        if (typeof data == "number") {
            this.buffer.fill(data, off, end);
        } else {
            let i = 0;
            if (end > this.length) end = this.length;
            for (let o = off; o < end; o++) {
                this.buffer[o] = data[i++];
            }
        }
    }

    /**
     * new(size)
     *
     * NOTE: This method isn't part of the Node Buffer class, but it's useful for creating new buffers without the client
     * needing to known which DataBuffer class to import (eg, nodebuffer.js or webbuffer.js).
     *
     * @this {DataBuffer}
     * @param {number} size
     */
    new(size)
    {
        this.buffer = Buffer.alloc(size);
        this.length = size;
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
        this.buffer.write(s, off, len);
    }

    /**
     * readUInt8(b)
     *
     * @this {DataBuffer}
     * @param {number} off
     * @returns {number}
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
     * @returns {number}
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
     * @returns {number}
     */
    readUInt16LE(off)
    {
        return this.buffer.readUInt16LE(off);
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
        this.buffer.writeUInt16LE(w, off);
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
        return this.buffer.readUInt32BE(off);
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
        return this.buffer.readUInt32LE(off);
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
        return this.buffer.readInt32BE(off);
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
     * toString(format)
     *
     * @this {DataBuffer}
     * @param {string} [format]
     * @returns {string}
     */
    toString(format)
    {
        return this.buffer.toString(format);
    }
}
