/**
 * @fileoverview Implements the PCx80 Memory component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import StrLib from "../../../modules/v2/strlib.js";
import { BYTEARRAYS, DEBUG, DEBUGGER, TYPEDARRAYS } from "./defines.js";

/**
 * @class DataView
 * @property {function(number,boolean):number} getUint8
 * @property {function(number,number,boolean)} setUint8
 * @property {function(number,boolean):number} getUint16
 * @property {function(number,number,boolean)} setUint16
 * @property {function(number,boolean):number} getInt32
 * @property {function(number,number,boolean)} setInt32
 */

var littleEndian = (TYPEDARRAYS? (function() {
    let buffer = new ArrayBuffer(2);
    new DataView(buffer).setUint16(0, 256, true);
    return new Uint16Array(buffer)[0] === 256;
})() : false);

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class MemoryX80
 * @unrestricted
 */
export default class MemoryX80 {
    /**
     * MemoryX80(addr, used, size, type)
     *
     * The Bus component allocates MemoryX80 objects so that each has a memory buffer with a
     * block-granular starting address and an address range equal to bus.nBlockSize; however,
     * the size of any given MemoryX80 object's underlying buffer can be either zero or bus.nBlockSize;
     * memory read/write functions for empty (buffer-less) blocks are mapped to readNone/writeNone.
     *
     * The Bus allocates empty blocks for the entire address space during initialization, so that
     * any reads/writes to undefined addresses will have no effect.  Later, the ROM and RAM
     * components will ask the Bus to allocate memory for specific ranges, and the Bus will allocate
     * as many new blockSize MemoryX80 objects as the ranges require.  Partial MemoryX80 blocks could
     * also be supported in theory, but in practice, they're not.
     *
     * Because MemoryX80 blocks now allow us to have a "sparse" address space, we could choose to
     * take the memory hit of allocating 4K arrays per block, where each element stores only one byte,
     * instead of the more frugal but slightly slower approach of allocating arrays of 32-bit dwords
     * (LONGARRAYS) and shifting/masking bytes/words to/from dwords; in theory, byte accesses would
     * be faster and word accesses somewhat less faster.
     *
     * However, preliminary testing of that feature (BYTEARRAYS) did not yield significantly faster
     * performance, so it is OFF by default to minimize our memory consumption.  Using TYPEDARRAYS
     * would seem best, but as discussed in defines.js, it's off by default, because it doesn't perform
     * as well as LONGARRAYS; the other advantage of TYPEDARRAYS is that it should theoretically use
     * about 1/2 the memory of LONGARRAYS (32-bit elements vs 64-bit numbers), but I value speed over
     * size at this point.  Also, not all JavaScript implementations support TYPEDARRAYS (IE9 is probably
     * the only real outlier: it lacks typed arrays but otherwise has all the necessary HTML5 support).
     *
     * WARNING: Since MemoryX80 blocks are low-level objects that have no UI requirements, they
     * do not inherit from the Component class, so if you want to use any Component class methods,
     * such as Component.assert(), use the corresponding Debugger methods instead (assuming a debugger
     * is available).
     *
     * @this {MemoryX80}
     * @param {number|null} [addr] of lowest used address in block
     * @param {number} [used] portion of block in bytes (0 for none); must be a multiple of 4
     * @param {number} [size] of block's buffer in bytes (0 for none); must be a multiple of 4
     * @param {number} [type] is one of the MemoryX80.TYPE constants (default is MemoryX80.TYPE.NONE)
     */
    constructor(addr, used, size, type)
    {
        let i;
        this.id = (MemoryX80.idBlock += 2);
        this.adw = null;
        this.offset = 0;
        this.addr = addr;
        this.used = used;
        this.size = size || 0;
        this.type = type || MemoryX80.TYPE.NONE;
        this.fReadOnly = (type == MemoryX80.TYPE.ROM);
        this.copyBreakpoints();     // initialize the block's Debugger info; the caller will reinitialize

        /*
         * TODO: Study the impact of dirty block tracking.  The original purposes were to allow saveMemory()
         * to save only dirty blocks, and to enable the Video component to quickly detect changes to the video buffer.
         * But the benefit to saveMemory() is minimal, and the Video component has other options; for example, it now
         * uses a custom memory controller for all EGA/VGA video modes, which performs its own dirty block tracking,
         * and that could easily be extended to the older MDA/CGA video modes, which still use conventional memory blocks.
         * Alternatively, we could restrict the use of dirty block tracking to certain memory types (eg, VIDEO memory).
         *
         * However, a quick test with dirty block tracking disabled didn't yield a noticeable improvement in performance,
         * so I think the overhead of our block-based architecture is swamping the impact of these micro-updates.
         */
        this.fDirty = this.fDirtyEver = false;

        /*
         * For empty memory blocks, all we need to do is ensure all access functions are mapped to "none" handlers.
         */
        if (!size) {
            this.setAccess();
            return;
        }

        /*
         * This is the normal case: allocate a buffer that provides 8 bits of data per address;
         * no controller is required because our default memory access functions (see afnMemory)
         * know how to deal with this simple 1-1 mapping of addresses to bytes and words.
         *
         * TODO: Consider initializing the memory array to random (or pseudo-random) values in DEBUG
         * mode; pseudo-random might be best, to help make any bugs reproducible.
         */
        if (TYPEDARRAYS) {
            this.buffer = new ArrayBuffer(size);
            this.dv = new DataView(this.buffer, 0, size);
            /*
             * If littleEndian is true, we can use ab[], aw[] and adw[] directly; well, we can use them
             * whenever the offset is a multiple of 1, 2 or 4, respectively.  Otherwise, we must fallback to
             * dv.getUint8()/dv.setUint8(), dv.getUint16()/dv.setUint16() and dv.getInt32()/dv.setInt32().
             */
            this.ab = new Uint8Array(this.buffer, 0, size);
            this.aw = new Uint16Array(this.buffer, 0, size >> 1);
            this.adw = new Int32Array(this.buffer, 0, size >> 2);
            this.setAccess(littleEndian? MemoryX80.afnArrayLE : MemoryX80.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = new Array(size);
            } else {
                /*
                 * NOTE: This is the default mode of operation (!TYPEDARRAYS && !BYTEARRAYS), because it
                 * seems to provide the best performance; and although in theory, that performance might
                 * come at twice the overhead of TYPEDARRAYS, it's increasingly likely that the JavaScript
                 * runtime will notice that all we ever store are 32-bit values, and optimize accordingly.
                 */
                this.adw = new Array(size >> 2);
                for (i = 0; i < this.adw.length; i++) this.adw[i] = 0;
            }
            this.setAccess(MemoryX80.afnMemory);
        }
    }

    /**
     * init(addr)
     *
     * Quick reinitializer when reusing a MemoryX80 block.
     *
     * @this {MemoryX80}
     * @param {number} addr
     */
    init(addr)
    {
        this.addr = addr;
    }

    /**
     * clone(mem, type)
     *
     * Converts the current MemoryX80 block (this) into a clone of the given MemoryX80 block (mem),
     * and optionally overrides the current block's type with the specified type.
     *
     * @this {MemoryX80}
     * @param {MemoryX80} mem
     * @param {number} [type]
     * @param {DebuggerX80} [dbg]
     */
    clone(mem, type, dbg)
    {
        /*
         * Original memory block IDs are even; cloned memory block IDs are odd;
         * the original ID of the current block is lost, but that's OK, since it was presumably
         * produced merely to become a clone.
         */
        this.id = mem.id | 0x1;
        this.used = mem.used;
        this.size = mem.size;
        if (type) {
            this.type = type;
            this.fReadOnly = (type == MemoryX80.TYPE.ROM);
        }
        if (TYPEDARRAYS) {
            this.buffer = mem.buffer;
            this.dv = mem.dv;
            this.ab = mem.ab;
            this.aw = mem.aw;
            this.adw = mem.adw;
            this.setAccess(littleEndian? MemoryX80.afnArrayLE : MemoryX80.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = mem.ab;
            } else {
                this.adw = mem.adw;
            }
            this.setAccess(MemoryX80.afnMemory);
        }
        this.copyBreakpoints(dbg, mem);
    }

    /**
     * save()
     *
     * This gets the contents of a MemoryX80 block as an array of 32-bit values; used by BusX80.saveMemory(),
     * which in turn is called by CPUState.save().
     *
     * MemoryX80 blocks with custom memory controllers do NOT save their contents; that's the responsibility
     * of the controller component.
     *
     * @this {MemoryX80}
     * @returns {Array|Int32Array|null}
     */
    save()
    {
        let adw, i;
        if (BYTEARRAYS) {
            adw = new Array(this.size >> 2);
            let off = 0;
            for (i = 0; i < adw.length; i++) {
                adw[i] = this.ab[off] | (this.ab[off + 1] << 8) | (this.ab[off + 2] << 16) | (this.ab[off + 3] << 24);
                off += 4;
            }
        }
        else if (TYPEDARRAYS) {
            /*
             * It might be tempting to just return a copy of Int32Array(this.buffer, 0, this.size >> 2),
             * but we can't be sure of the "endianness" of an Int32Array -- which would be OK if the array
             * was always saved/restored on the same machine, but there's no guarantee of that, either.
             * So we use getInt32() and require little-endian values.
             *
             * Moreover, an Int32Array isn't treated by JSON.stringify() and JSON.parse() exactly like
             * a normal array; it's serialized as an Object rather than an Array, so it lacks a "length"
             * property and causes problems for State.store() and State.parse().
             */
            adw = new Array(this.size >> 2);
            for (i = 0; i < adw.length; i++) {
                adw[i] = this.dv.getInt32(i << 2, true);
            }
        }
        else {
            adw = this.adw;
        }
        return adw;
    }

    /**
     * restore(adw)
     *
     * This restores the contents of a MemoryX80 block from an array of 32-bit values;
     * used by BusX80.restoreMemory(), which is called by CPUState.restore(), after all other
     * components have been restored and thus all MemoryX80 blocks have been allocated
     * by their respective components.
     *
     * @this {MemoryX80}
     * @param {Array|null} adw
     * @returns {boolean} true if successful, false if block size mismatch
     */
    restore(adw)
    {
        /*
         * At this point, it's a consistency error for adw to be null; it's happened once already,
         * when there was a restore bug in the Video component that added the frame buffer at the video
         * card's "spec'ed" address instead of the programmed address, so there were no controller-owned
         * memory blocks installed at the programmed address, and so we arrived here at a block with
         * no controller AND no data.
         */
        Component.assert(adw != null);

        if (adw && this.size == adw.length << 2) {
            let i;
            if (BYTEARRAYS) {
                let off = 0;
                for (i = 0; i < adw.length; i++) {
                    this.ab[off] = adw[i] & 0xff;
                    this.ab[off + 1] = (adw[i] >> 8) & 0xff;
                    this.ab[off + 2] = (adw[i] >> 16) & 0xff;
                    this.ab[off + 3] = (adw[i] >> 24) & 0xff;
                    off += 4;
                }
            } else if (TYPEDARRAYS) {
                for (i = 0; i < adw.length; i++) {
                    this.dv.setInt32(i << 2, adw[i], true);
                }
            } else {
                this.adw = adw;
            }
            this.fDirty = true;
            return true;
        }
        return false;
    }

    /**
     * setAccess(afn, fDirect)
     *
     * If no function table is specified, a default is selected based on the MemoryX80 type.
     *
     * @this {MemoryX80}
     * @param {Array.<function()>} [afn] function table
     * @param {boolean} [fDirect] (true to update direct access functions as well; default is true)
     */
    setAccess(afn, fDirect)
    {
        if (!afn) {
            Component.assert(this.type == MemoryX80.TYPE.NONE);
            afn = MemoryX80.afnNone;
        }
        this.setReadAccess(afn, fDirect);
        this.setWriteAccess(afn, fDirect);
    }

    /**
     * setReadAccess(afn, fDirect)
     *
     * @this {MemoryX80}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setReadAccess(afn, fDirect)
    {
        if (!fDirect || !this.cReadBreakpoints) {
            this.readByte = afn[0] || this.readNone;
            this.readShort = afn[2] || this.readShortDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.readByteDirect = afn[0] || this.readNone;
            this.readShortDirect = afn[2] || this.readShortDefault;
        }
    }

    /**
     * setWriteAccess(afn, fDirect)
     *
     * @this {MemoryX80}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setWriteAccess(afn, fDirect)
    {
        if (!fDirect || !this.cWriteBreakpoints) {
            this.writeByte = !this.fReadOnly && afn[1] || this.writeNone;
            this.writeShort = !this.fReadOnly && afn[3] || this.writeShortDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.writeByteDirect = afn[1] || this.writeNone;
            this.writeShortDirect = afn[3] || this.writeShortDefault;
        }
    }

    /**
     * resetReadAccess()
     *
     * @this {MemoryX80}
     */
    resetReadAccess()
    {
        this.readByte = this.readByteDirect;
        this.readShort = this.readShortDirect;
    }

    /**
     * resetWriteAccess()
     *
     * @this {MemoryX80}
     */
    resetWriteAccess()
    {
        this.writeByte = this.fReadOnly? this.writeNone : this.writeByteDirect;
        this.writeShort = this.fReadOnly? this.writeShortDefault : this.writeShortDirect;
    }

    /**
     * printAddr(sMessage)
     *
     * @this {MemoryX80}
     * @param {string} sMessage
     */
    printAddr(sMessage)
    {
        if (DEBUG && this.dbg) {
            this.dbg.printf(MESSAGE.MEM, "%s %d\n", sMessage, (this.addr != null? ('%' + StrLib.toHex(this.addr)) : '#' + this.id));
        }
    }

    /**
     * addBreakpoint(off, fWrite)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {boolean} fWrite
     */
    addBreakpoint(off, fWrite)
    {
        if (!fWrite) {
            if (this.cReadBreakpoints++ === 0) {
                this.setReadAccess(MemoryX80.afnChecked, false);
            }
            if (DEBUG) this.printAddr("read breakpoint added to memory block");
        }
        else {
            if (this.cWriteBreakpoints++ === 0) {
                this.setWriteAccess(MemoryX80.afnChecked, false);
            }
            if (DEBUG) this.printAddr("write breakpoint added to memory block");
        }
    }

    /**
     * removeBreakpoint(off, fWrite)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {boolean} fWrite
     */
    removeBreakpoint(off, fWrite)
    {
        if (!fWrite) {
            if (--this.cReadBreakpoints === 0) {
                this.resetReadAccess();
                if (DEBUG) this.printAddr("all read breakpoints removed from memory block");
            }
            Component.assert(this.cReadBreakpoints >= 0);
        }
        else {
            if (--this.cWriteBreakpoints === 0) {
                this.resetWriteAccess();
                if (DEBUG) this.printAddr("all write breakpoints removed from memory block");
            }
            Component.assert(this.cWriteBreakpoints >= 0);
        }
    }

    /**
     * copyBreakpoints(dbg, mem)
     *
     * @this {MemoryX80}
     * @param {DebuggerX80} [dbg]
     * @param {MemoryX80} [mem] (outgoing MemoryX80 block to copy breakpoints from, if any)
     */
    copyBreakpoints(dbg, mem)
    {
        this.dbg = dbg;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        if (mem) {
            if ((this.cReadBreakpoints = mem.cReadBreakpoints)) {
                this.setReadAccess(MemoryX80.afnChecked, false);
            }
            if ((this.cWriteBreakpoints = mem.cWriteBreakpoints)) {
                this.setWriteAccess(MemoryX80.afnChecked, false);
            }
        }
    }

    /**
     * readNone(off)
     *
     * Previously, this always returned 0x00, but the initial memory probe by the COMPAQ DeskPro 386 ROM BIOS
     * writes 0x0000 to the first word of every 64Kb block in the nearly 16Mb address space it supports, and
     * if it reads back 0x0000, it will initially think that LOTS of RAM exists, only to be disappointed later
     * when it performs a more exhaustive memory test, generating unwanted error messages in the process.
     *
     * TODO: Determine if we should have separate readByteNone(), readShortNone() and readLongNone() functions
     * to return 0xff, 0xffff and 0xffffffff|0, respectively.  This seems sufficient for now, as it seems unlikely
     * that a system would require nonexistent memory locations to return ALL bits set.
     *
     * Also, I'm reluctant to address that potential issue by simply returning -1, because to date, the above
     * MemoryX80 interfaces have always returned values that are properly masked to 8, 16 or 32 bits, respectively.
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readNone(off, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.CPU + MESSAGE.MEM + MESSAGE.ADDR, "attempt to read invalid block %#x\n", this.addr);
        }
        return 0xff;
    }

    /**
     * writeNone(off, v, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} v (could be either a byte or word value, since we use the same handler for both kinds of accesses)
     * @param {number} addr
     */
    writeNone(off, v, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.CPU + MESSAGE.MEM + MESSAGE.ADDR, "attempt to write %#06x to invalid block %#x\n", v, this.addr);
        }
    }

    /**
     * readShortDefault(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortDefault(off, addr)
    {
        return this.readByte(off++, addr++) | (this.readByte(off, addr) << 8);
    }

    /**
     * writeShortDefault(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeShortDefault(off, w, addr)
    {
        this.writeByte(off++, w & 0xff, addr++);
        this.writeByte(off, w >> 8, addr);
    }

    /**
     * readByteMemory(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteMemory(off, addr)
    {
        if (BYTEARRAYS) {
            return this.ab[off];
        }
        return ((this.adw[off >> 2] >>> ((off & 0x3) << 3)) & 0xff);
    }

    /**
     * readShortMemory(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortMemory(off, addr)
    {
        if (BYTEARRAYS) {
            return this.ab[off] | (this.ab[off + 1] << 8);
        }
        let w;
        let idw = off >> 2;
        let nShift = (off & 0x3) << 3;
        let dw = (this.adw[idw] >> nShift);
        if (nShift < 24) {
            w = dw & 0xffff;
        } else {
            w = (dw & 0xff) | ((this.adw[idw + 1] & 0xff) << 8);
        }
        return w;
    }

    /**
     * writeByteMemory(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteMemory(off, b, addr)
    {
        if (BYTEARRAYS) {
            this.ab[off] = b;
        } else {
            let idw = off >> 2;
            let nShift = (off & 0x3) << 3;
            this.adw[idw] = (this.adw[idw] & ~(0xff << nShift)) | (b << nShift);
        }
        this.fDirty = true;
    }

    /**
     * writeShortMemory(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeShortMemory(off, w, addr)
    {
        if (BYTEARRAYS) {
            this.ab[off] = (w & 0xff);
            this.ab[off + 1] = (w >> 8);
        } else {
            let idw = off >> 2;
            let nShift = (off & 0x3) << 3;
            if (nShift < 24) {
                this.adw[idw] = (this.adw[idw] & ~(0xffff << nShift)) | (w << nShift);
            } else {
                this.adw[idw] = (this.adw[idw] & 0x00ffffff) | (w << 24);
                idw++;
                this.adw[idw] = (this.adw[idw] & (0xffffff00|0)) | (w >> 8);
            }
        }
        this.fDirty = true;
    }

    /**
     * readByteChecked(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteChecked(off, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryRead(this.addr + off);
        }
        return this.readByteDirect(off, addr);
    }

    /**
     * readShortChecked(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortChecked(off, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryRead(this.addr + off, 2);
        }
        return this.readShortDirect(off, addr);
    }

    /**
     * writeByteChecked(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeByteChecked(off, b, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off);
        }
        if (this.fReadOnly) this.writeNone(off, b, addr); else this.writeByteDirect(off, b, addr);
    }

    /**
     * writeShortChecked(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortChecked(off, w, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off, 2);
        }
        if (this.fReadOnly) this.writeNone(off, w, addr); else this.writeShortDirect(off, w, addr);
    }

    /**
     * readByteBE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteBE(off, addr)
    {
        return this.ab[off];
    }

    /**
     * readByteLE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteLE(off, addr)
    {
        return this.ab[off];
    }

    /**
     * readShortBE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortBE(off, addr)
    {
        return this.dv.getUint16(off, true);
    }

    /**
     * readShortLE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortLE(off, addr)
    {
        /*
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned read
         * vs. always reading the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        return (off & 0x1)? (this.ab[off] | (this.ab[off+1] << 8)) : this.aw[off >> 1];
    }

    /**
     * writeByteBE(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteBE(off, b, addr)
    {
        this.ab[off] = b;
        this.fDirty = true;
    }

    /**
     * writeByteLE(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeByteLE(off, b, addr)
    {
        this.ab[off] = b;
        this.fDirty = true;
    }

    /**
     * writeShortBE(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortBE(off, w, addr)
    {
        this.dv.setUint16(off, w, true);
        this.fDirty = true;
    }

    /**
     * writeShortLE(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortLE(off, w, addr)
    {
        /*
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned write
         * vs. always writing the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        if (off & 0x1) {
            this.ab[off] = w;
            this.ab[off+1] = w >> 8;
        } else {
            this.aw[off >> 1] = w;
        }
        this.fDirty = true;
    }

    /**
     * adjustEndian(dw)
     *
     * @param {number} dw
     * @returns {number}
     */
    static adjustEndian(dw)
    {
        if (TYPEDARRAYS && !littleEndian) {
            dw = (dw << 24) | ((dw << 8) & 0x00ff0000) | ((dw >> 8) & 0x0000ff00) | (dw >>> 24);
        }
        return dw;
    }
}

/*
 * Basic memory types
 *
 * RAM is the most conventional memory type, providing full read/write capability to x86-compatible (ie,
 * 'little endian") storage.  ROM is equally conventional, except that the fReadOnly property is set,
 * disabling writes.  VIDEO is treated exactly like RAM, unless a controller is provided.  Both RAM and
 * VIDEO memory are always considered writable, and even ROM can be written using the Bus setByteDirect()
 * interface (which in turn uses the MemoryX80 writeByteDirect() interface), allowing the ROM component to
 * initialize its own memory.  The CTRL type is used to identify memory-mapped devices that do not need
 * any default storage and always provide their own controller.
 *
 * Unallocated regions of the address space contain a special memory block of type NONE that contains
 * no storage.  Mapping every addressible location to a memory block allows all accesses to be routed in
 * exactly the same manner, without resorting to any range or processor checks.
 *
 * These types are not mutually exclusive.  For example, VIDEO memory could be allocated as RAM, with or
 * without a custom controller (the original Monochrome and CGA video cards used read/write storage that
 * was indistinguishable from RAM), and CTRL memory could be allocated as an empty block of any type, with
 * a custom controller.  A few types are required for certain features (eg, ROM is required if you want
 * read-only memory), but the larger purpose of these types is to help document the caller's intent and to
 * provide the Control Panel with the ability to highlight memory regions accordingly.
 */
MemoryX80.TYPE = {
    NONE:       0,
    RAM:        1,
    ROM:        2,
    VIDEO:      3,
    CTRL:       4,
    COLORS:     ["black", "blue", "green", "cyan"],
    NAMES:      ["NONE",  "RAM",  "ROM",   "VID",  "H/W"]
};

/*
 * Last used block ID (used for debugging only)
 */
MemoryX80.idBlock = 0;


/*
 * This is the effective definition of afnNone, but we need not fully define it, because setAccess()
 * uses these defaults when any of the 4 handlers (ie, 2 byte handlers and 2 short handlers) are undefined.
 *
MemoryX80.afnNone = [
    MemoryX80.prototype.readNone,
    MemoryX80.prototype.writeNone,
    MemoryX80.prototype.readShortDefault,
    MemoryX80.prototype.writeShortDefault
];
 */
MemoryX80.afnNone = [];

MemoryX80.afnMemory = [
    MemoryX80.prototype.readByteMemory,
    MemoryX80.prototype.writeByteMemory,
    MemoryX80.prototype.readShortMemory,
    MemoryX80.prototype.writeShortMemory
];

MemoryX80.afnChecked = [
    MemoryX80.prototype.readByteChecked,
    MemoryX80.prototype.writeByteChecked,
    MemoryX80.prototype.readShortChecked,
    MemoryX80.prototype.writeShortChecked
];

if (TYPEDARRAYS) {
    MemoryX80.afnArrayBE = [
        MemoryX80.prototype.readByteBE,
        MemoryX80.prototype.writeByteBE,
        MemoryX80.prototype.readShortBE,
        MemoryX80.prototype.writeShortBE
    ];

    MemoryX80.afnArrayLE = [
        MemoryX80.prototype.readByteLE,
        MemoryX80.prototype.writeByteLE,
        MemoryX80.prototype.readShortLE,
        MemoryX80.prototype.writeShortLE
    ];
}
