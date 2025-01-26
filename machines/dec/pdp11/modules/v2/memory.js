/**
 * @fileoverview Implements the PDP-11 Memory component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import { BYTEARRAYS, DEBUG, DEBUGGER, MEMFAULT, PDP11, TYPEDARRAYS, WORDBUS } from "./defines.js";

/**
 * @class DataView
 * @property {function(number,boolean):number} getUint8
 * @property {function(number,number,boolean)} setUint8
 * @property {function(number,boolean):number} getUint16
 * @property {function(number,number,boolean)} setUint16
 * @property {function(number,boolean):number} getInt32
 * @property {function(number,number,boolean)} setInt32
 */

/**
 * @class MemoryPDP11
 * @property {number} id
 * @property {number} used
 * @property {number} size
 * @property {Int32Array} adw
 * @property {Object} controller
 * @property {DebuggerPDP11} dbg
 */
export default class MemoryPDP11 {
    /**
     * MemoryPDP11(bus, addr, used, size, type, controller)
     *
     * The Bus component allocates Memory objects so that each has a memory buffer with a
     * block-granular starting address and an address range equal to bus.nBlockSize; however,
     * the size of any given Memory object's underlying buffer can be either zero or bus.nBlockSize;
     * memory read/write functions for empty (buffer-less) blocks are mapped to readNone/writeNone.
     *
     * The Bus allocates empty blocks for the entire address space during initialization, so that
     * any reads/writes to undefined addresses will have no effect.  Later, the ROM and RAM
     * components will ask the Bus to allocate memory for specific ranges, and the Bus will allocate
     * as many new blockSize Memory objects as the ranges require.  Partial Memory blocks could
     * also be supported in theory, but in practice, they're not.
     *
     * Because Memory blocks now allow us to have a "sparse" address space, we could choose to
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
     * WARNING: Since Memory blocks are low-level objects that have no UI requirements, they
     * do not inherit from the Component class, so if you want to use any Component class methods,
     * such as Component.assert(), use the corresponding Debugger methods instead (assuming a debugger
     * is available).
     *
     * @param {BusPDP11} bus
     * @param {number|null} [addr] of lowest used address in block
     * @param {number} [used] portion of block in bytes (0 for none); must be a multiple of 4
     * @param {number} [size] of block's buffer in bytes (0 for none); must be a multiple of 4
     * @param {number} [type] is one of the MemoryPDP11.TYPE constants (default is MemoryPDP11.TYPE.NONE)
     * @param {Object} [controller] is an optional memory controller component
     */
    constructor(bus, addr, used, size, type, controller)
    {
        var a, i;
        this.bus = bus;
        this.id = (MemoryPDP11.idBlock += 2);
        this.adw = null;
        this.offset = 0;
        this.addr = addr;
        this.used = used;
        this.size = size || 0;
        this.type = type || MemoryPDP11.TYPE.NONE;
        this.fReadOnly = (type == MemoryPDP11.TYPE.ROM);
        this.controller = null;
        this.dbg = null;
        this.readByte = this.readByteDirect = this.readNone;
        this.readWord = this.readWordDirect = this.readWordDefault;
        this.writeByte = this.writeByteDirect = this.writeNone;
        this.writeWord = this.writeWordDirect = this.writeWordDefault;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        this.copyBreakpoints();     // initialize the block's Debugger info; the caller will reinitialize

        /*
         * TODO: Study the impact of dirty block tracking.  The original purposes were to allow saveMemory()
         * to save only dirty blocks, and to enable the Video component to quickly detect changes to the video buffer.
         * But the benefit to saveMemory() is minimal, and the Video component has other options; for example, it can
         * now use a custom memory controller that performs its own dirty block tracking.
         *
         * However, a quick test with dirty block tracking disabled didn't yield a noticeable improvement in performance,
         * so I think the overhead of our block-based architecture is swamping the impact of these micro-updates.
         */
        this.fDirty = this.fDirtyEver = false;

        /*
         * For empty memory blocks, all we need to do is ensure all access functions are mapped to "none" handlers.
         */
        if (!this.size) {
            this.setAccess();
            return;
        }

        /*
         * When a controller is specified, the controller must provide a buffer, via getControllerBuffer(),
         * and memory access functions, via getControllerAccess().
         */
        if (controller) {
            this.controller = controller;
            a = controller.getControllerBuffer(addr);
            this.adw = a[0];
            this.offset = a[1];
            this.setAccess(controller.getControllerAccess());
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
            this.buffer = new ArrayBuffer(this.size);
            this.dv = new DataView(this.buffer, 0, this.size);
            /*
             * If littleEndian is true, we can use ab[], aw[] and adw[] directly; well, we can use them
             * whenever the offset is a multiple of 1, 2 or 4, respectively.  Otherwise, we must fallback to
             * dv.getUint8()/dv.setUint8(), dv.getUint16()/dv.setUint16() and dv.getInt32()/dv.setInt32().
             */
            this.ab = new Uint8Array(this.buffer, 0, this.size);
            this.aw = new Uint16Array(this.buffer, 0, this.size >> 1);
            this.adw = new Int32Array(this.buffer, 0, this.size >> 2);
            this.setAccess(littleEndian? MemoryPDP11.afnArrayLE : MemoryPDP11.afnArrayBE);
        } else {
            /*
             * NOTE: An ArrayBuffer is defined as being zero-initialized, but the elements of a new
             * Array are not, so this code path takes care of zero-initialization ourselves.
             */
            if (BYTEARRAYS) {
                a = this.ab = new Array(this.size);
            } else {
                /*
                 * NOTE: This used to be the default mode of operation (!TYPEDARRAYS && !BYTEARRAYS), because
                 * it seemed to provide the best performance; however, that was then, and this is now.  TYPEDARRAYS
                 * is more efficient.
                 */
                a = this.adw = new Array(this.size >> 2);
            }
            for (i = 0; i < a.length; i++) a[i] = 0;
            this.setAccess(MemoryPDP11.afnMemory);
        }
    }

    /**
     * init(addr)
     *
     * Quick reinitializer when reusing a Memory block.
     *
     * @this {MemoryPDP11}
     * @param {number} addr
     */
    init(addr)
    {
        this.addr = addr;
    }

    /**
     * clone(mem, type, dbg)
     *
     * Converts the current Memory block (this) into a clone of the given Memory block (mem),
     * and optionally overrides the current block's type with the specified type.
     *
     * @this {MemoryPDP11}
     * @param {MemoryPDP11} mem
     * @param {number} [type]
     * @param {DebuggerPDP11} [dbg]
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
            this.fReadOnly = (type == MemoryPDP11.TYPE.ROM);
        }
        if (TYPEDARRAYS) {
            this.buffer = mem.buffer;
            this.dv = mem.dv;
            this.ab = mem.ab;
            this.aw = mem.aw;
            this.adw = mem.adw;
            this.setAccess(littleEndian? MemoryPDP11.afnArrayLE : MemoryPDP11.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = mem.ab;
            } else {
                this.adw = mem.adw;
            }
            this.setAccess(MemoryPDP11.afnMemory);
        }
        this.copyBreakpoints(dbg, mem);
    }

    /**
     * save()
     *
     * This gets the contents of a Memory block as an array of 32-bit values; used by Bus.saveMemory(),
     * which in turn is called by CPUState.save().
     *
     * Memory blocks with custom memory controllers do NOT save their contents; that's the responsibility
     * of the controller component.
     *
     * @this {MemoryPDP11}
     * @returns {Array|Int32Array|null}
     */
    save()
    {
        var adw, i;
        if (this.controller) {
            adw = null;
        }
        else if (BYTEARRAYS) {
            adw = new Array(this.size >> 2);
            var off = 0;
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
     * This restores the contents of a Memory block from an array of 32-bit values;
     * used by Bus.restoreMemory(), which is called by CPUState.restore(), after all other
     * components have been restored and thus all Memory blocks have been allocated
     * by their respective components.
     *
     * @this {MemoryPDP11}
     * @param {Array|null} adw
     * @returns {boolean} true if successful, false if block size mismatch
     */
    restore(adw)
    {
        if (this.controller) {
            return (adw == null);
        }
        /*
         * At this point, it's a consistency error for adw to be null; it's happened once already,
         * when there was a restore bug in the Video component that added the frame buffer at the video
         * card's "spec'ed" address instead of the programmed address, so there were no controller-owned
         * memory blocks installed at the programmed address, and so we arrived here at a block with
         * no controller AND no data.
         */
        Component.assert(adw != null);

        if (adw && this.size == adw.length << 2) {
            var i;
            if (BYTEARRAYS) {
                var off = 0;
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
     * zero(off, len, pattern)
     *
     * Zeros the block.  Supporting off and len parameters is probably overkill, and makes more
     * work in the non-TYPEDARRAY, non-BYTEARRAY case, but that's not the typical case.  The other
     * exception is controller-based blocks, which may not have any array backing at all.
     *
     * @this {MemoryPDP11}
     * @param {number} [off] (optional starting byte offset within block)
     * @param {number} [len] (optional maximum number of bytes; default is the entire block)
     * @param {number} [pattern]
     */
    zero(off, len, pattern)
    {
        var i;
        off = off || 0;
        pattern = (pattern || 0) & 0xff;        // pattern & 0xff wasn't good enough for the Closure Compiler
        /*
         * NOTE: If len happens to be larger than the block, that's OK, because we also bounds-check the index.
         */
        if (len === undefined) len = this.size;
        Component.assert(off >= 0 && off < this.size);
        if ((TYPEDARRAYS || BYTEARRAYS) && this.ab) {
            for (i = off; len-- && i < this.ab.length; i++) this.ab[i] = pattern;
        } else {
            for (i = off; len-- && i < this.size; i++) this.writeByteDirect(off, pattern, this.addr + off);
        }
    }

    /**
     * setAccess(afn, fDirect)
     *
     * The afn parameter should be a 4-entry function table containing two byte handlers and
     * two word handlers.  See the static afnMemory table for an example.
     *
     * If no function table is specified, a default is selected based on the Memory type;
     * similarly, any undefined entries in the table are filled with default handlers that fall
     * back to the byte handlers, and if one or both byte handlers are undefined, they default
     * to handlers that simply ignore the access.
     *
     * fDirect indicates that both the default AND the direct handlers should be updated.  Direct
     * handlers normally match the default handlers, except when "checked" handlers are installed;
     * this allows "checked" handlers to know where to dispatch the call after performing checks.
     * Examples of checks are read/write breakpoints, but it's really up to the Debugger to decide
     * what the check consists of.
     *
     * @this {MemoryPDP11}
     * @param {Array.<function()>} [afn] function table
     * @param {boolean} [fDirect] (true to update direct access functions as well; default is true)
     */
    setAccess(afn, fDirect)
    {
        if (!afn) {
            Component.assert(this.type == MemoryPDP11.TYPE.NONE);
            afn = MemoryPDP11.afnNone;
        }
        this.setReadAccess(afn, fDirect);
        this.setWriteAccess(afn, fDirect);
    }

    /**
     * setReadAccess(afn, fDirect)
     *
     * @this {MemoryPDP11}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setReadAccess(afn, fDirect)
    {
        if (!fDirect || !this.cReadBreakpoints) {
            this.readByte = afn[0] || this.readNone;
            this.readWord = afn[2] || this.readWordDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.readByteDirect = afn[0] || this.readNone;
            this.readWordDirect = afn[2] || this.readWordDefault;
        }
    }

    /**
     * setWriteAccess(afn, fDirect)
     *
     * @this {MemoryPDP11}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setWriteAccess(afn, fDirect)
    {
        if (!fDirect || !this.cWriteBreakpoints) {
            this.writeByte = !this.fReadOnly && afn[1] || this.writeNone;
            this.writeWord = !this.fReadOnly && afn[3] || this.writeWordDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.writeByteDirect = afn[1] || this.writeNone;
            this.writeWordDirect = afn[3] || this.writeWordDefault;
        }
    }

    /**
     * resetReadAccess()
     *
     * @this {MemoryPDP11}
     */
    resetReadAccess()
    {
        this.readByte = this.readByteDirect;
        this.readWord = this.readWordDirect;
    }

    /**
     * resetWriteAccess()
     *
     * @this {MemoryPDP11}
     */
    resetWriteAccess()
    {
        this.writeByte = this.fReadOnly? this.writeNone : this.writeByteDirect;
        this.writeWord = this.fReadOnly? this.writeWordDefault : this.writeWordDirect;
    }

    /**
     * printAddr(sMessage)
     *
     * @this {MemoryPDP11}
     * @param {string} sMessage
     */
    printAddr(sMessage)
    {
        if (DEBUG && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "%s %s\n", sMessage, (this.addr != null? ('@' + this.dbg.toStrBase(this.addr)) : '#' + this.id));
        }
    }

    /**
     * addBreakpoint(off, fWrite)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {boolean} fWrite
     */
    addBreakpoint(off, fWrite)
    {
        if (!fWrite) {
            if (this.cReadBreakpoints++ === 0) {
                this.setReadAccess(MemoryPDP11.afnChecked, false);
            }
            if (DEBUG) this.printAddr("read breakpoint added to memory block");
        }
        else {
            if (this.cWriteBreakpoints++ === 0) {
                this.setWriteAccess(MemoryPDP11.afnChecked, false);
            }
            if (DEBUG) this.printAddr("write breakpoint added to memory block");
        }
    }

    /**
     * removeBreakpoint(off, fWrite)
     *
     * @this {MemoryPDP11}
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
     * @this {MemoryPDP11}
     * @param {DebuggerPDP11} [dbg]
     * @param {MemoryPDP11} [mem] (outgoing MemoryPDP11 block to copy breakpoints from, if any)
     */
    copyBreakpoints(dbg, mem)
    {
        this.dbg = dbg;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        if (mem) {
            if ((this.cReadBreakpoints = mem.cReadBreakpoints)) {
                this.setReadAccess(MemoryPDP11.afnChecked, false);
            }
            if ((this.cWriteBreakpoints = mem.cWriteBreakpoints)) {
                this.setWriteAccess(MemoryPDP11.afnChecked, false);
            }
        }
    }

    /**
     * readNone(off, addr)
     *
     * Previously, this always returned 0x00, but the initial memory probe by the COMPAQ DeskPro 386 ROM BIOS
     * writes 0x0000 to the first word of every 64Kb block in the nearly 16Mb address space it supports, and
     * if it reads back 0x0000, it will initially think that LOTS of RAM exists, only to be disappointed later
     * when it performs a more exhaustive memory test, generating unwanted error messages in the process.
     *
     * TODO: Determine if we should have separate readByteNone(), readWordNone() and readLongNone() functions
     * to return 0xff, 0xffff and 0xffffffff|0, respectively.  This seems sufficient for now, as it seems unlikely
     * that a system would require nonexistent memory locations to return ALL bits set.  However, another factor
     * is whether or not ODDADDR faults take precedence over NOMEMORY faults; if they do, then we need separate
     * interfaces.
     *
     * Also, I'm reluctant to address that potential issue by simply returning -1, because to date, the above
     * Memory interfaces have always returned values that are properly masked to 8, 16 or 32 bits, respectively.
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readNone(off, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "attempt to read invalid address %s\n", this.dbg.toStrBase(addr));
        }
        this.bus.fault(addr, PDP11.CPUERR.NOMEMORY, PDP11.ACCESS.READ);
        return 0xff;
    }

    /**
     * writeNone(off, v, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} v (could be either a byte or word value, since we use the same handler for both kinds of accesses)
     * @param {number} addr
     */
    writeNone(off, v, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "attempt to write %s to invalid addresses %s\n", this.dbg.toStrBase(v), this.dbg.toStrBase(addr));
        }
        this.bus.fault(addr, PDP11.CPUERR.NOMEMORY, PDP11.ACCESS.WRITE);
    }

    /**
     * readWordDefault(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWordDefault(off, addr)
    {
        return this.readByte(off++, addr++) | (this.readByte(off, addr) << 8);
    }

    /**
     * writeWordDefault(off, w, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeWordDefault(off, w, addr)
    {
        this.writeByte(off++, w & 0xff, addr++);
        this.writeByte(off, w >> 8, addr);
    }

    /**
     * readByteMemory(off, addr)
     *
     * @this {MemoryPDP11}
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
     * readWordMemory(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWordMemory(off, addr)
    {
        if (MEMFAULT && (off & 0x1)) {
            this.bus.fault(addr, PDP11.CPUERR.ODDADDR, PDP11.ACCESS.READ_WORD);
        }
        if (BYTEARRAYS) {
            return this.ab[off] | (this.ab[off + 1] << 8);
        }
        var w;
        var idw = off >> 2;
        var nShift = (off & 0x3) << 3;
        var dw = (this.adw[idw] >> nShift);
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
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteMemory(off, b, addr)
    {
        if (BYTEARRAYS) {
            this.ab[off] = b;
        } else {
            var idw = off >> 2;
            var nShift = (off & 0x3) << 3;
            this.adw[idw] = (this.adw[idw] & ~(0xff << nShift)) | (b << nShift);
        }
        this.fDirty = true;
    }

    /**
     * writeWordMemory(off, w, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeWordMemory(off, w, addr)
    {
        if (MEMFAULT && (off & 0x1)) {
            this.bus.fault(addr, PDP11.CPUERR.ODDADDR, PDP11.ACCESS.WRITE_WORD);
        }
        if (BYTEARRAYS) {
            this.ab[off] = (w & 0xff);
            this.ab[off + 1] = (w >> 8);
        } else {
            var idw = off >> 2;
            var nShift = (off & 0x3) << 3;
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
     * @this {MemoryPDP11}
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
     * readWordChecked(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWordChecked(off, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryRead(this.addr + off, 2);
        }
        return this.readWordDirect(off, addr);
    }

    /**
     * writeByteChecked(off, b, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteChecked(off, b, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off);
        }
        if (this.fReadOnly) this.writeNone(off, b, addr); else this.writeByteDirect(off, b, addr);
    }

    /**
     * writeWordChecked(off, w, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeWordChecked(off, w, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off, 2);
        }
        if (this.fReadOnly) this.writeNone(off, w, addr); else this.writeWordDirect(off, w, addr);
    }

    /**
     * readByteBE(off, addr)
     *
     * @this {MemoryPDP11}
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
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteLE(off, addr)
    {
        var b = this.ab[off];
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "Memory.readByte(%s): %s\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(b));
        }
        return b;
    }

    /**
     * readWordBE(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWordBE(off, addr)
    {
        if (MEMFAULT && (off & 0x1)) {
            this.bus.fault(addr, PDP11.CPUERR.ODDADDR, PDP11.ACCESS.READ_WORD);
        }
        return this.dv.getUint16(off, true);
    }

    /**
     * readWordLE(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWordLE(off, addr)
    {
        var w;
        if (MEMFAULT && (off & 0x1)) {
            this.bus.fault(addr, PDP11.CPUERR.ODDADDR, PDP11.ACCESS.READ_WORD);
        }
        /*
         * TODO: For non-WORDBUS machines, it remains to be seen if there's any advantage to checking the offset
         * for an aligned read vs. always reading the bytes separately.
         */
        if (WORDBUS || !(off & 0x1)) {
            w = this.aw[off >> 1];
        } else {
            w = this.ab[off] | (this.ab[off+1] << 8);
        }
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "Memory.readWord(%s): %s\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(w));
        }
        return w;
    }

    /**
     * writeByteBE(off, b, addr)
     *
     * @this {MemoryPDP11}
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
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteLE(off, b, addr)
    {
        this.ab[off] = b;
        this.fDirty = true;
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "Memory.writeByte(%s,%s)\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(b));
        }
    }

    /**
     * writeWordBE(off, w, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeWordBE(off, w, addr)
    {
        if (MEMFAULT && (off & 0x1)) {
            this.bus.fault(addr, PDP11.CPUERR.ODDADDR, PDP11.ACCESS.WRITE_WORD);
        }
        this.dv.setUint16(off, w, true);
        this.fDirty = true;
    }

    /**
     * writeWordLE(off, w, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeWordLE(off, w, addr)
    {
        if (MEMFAULT && (off & 0x1)) {
            this.bus.fault(addr, PDP11.CPUERR.ODDADDR, PDP11.ACCESS.WRITE_WORD);
        }
        /*
         * TODO: For non-WORDBUS machines, it remains to be seen if there's any advantage to checking the offset
         * for an aligned write vs. always writing the bytes separately.
         */
        if (WORDBUS || !(off & 0x1)) {
            this.aw[off >> 1] = w;
        } else {
            this.ab[off] = w;
            this.ab[off+1] = w >> 8;
        }
        this.fDirty = true;
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "Memory.writeWord(%s,%s)\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(w));
        }
    }
}

/*
 * Basic memory types
 *
 * RAM is the most conventional memory type, providing full read/write capability to x86-compatible (ie,
 * 'little endian") storage.  ROM is equally conventional, except that the fReadOnly property is set,
 * disabling writes.  VIDEO is treated exactly like RAM, unless a controller is provided.  Both RAM and
 * VIDEO memory are always considered writable, and even ROM can be written using the Bus setByteDirect()
 * interface (which in turn uses the Memory writeByteDirect() interface), allowing the ROM component to
 * initialize its own memory.  The CONTROLLER type is used to identify memory-mapped devices that do not
 * need any default storage and always provide their own controller.
 *
 * Unallocated regions of the address space contain a special memory block of type NONE that contains
 * no storage.  Mapping every addressable location to a memory block allows all accesses to be routed in
 * exactly the same manner, without resorting to any range or processor checks.
 *
 * These types are not mutually exclusive.  For example, VIDEO memory could be allocated as RAM, with or
 * without a custom controller (the original Monochrome and CGA video cards used read/write storage that
 * was indistinguishable from RAM), and CONTROLLER memory could be allocated as an empty block of any type,
 * with a custom controller.  A few types are required for certain features (eg, ROM is required if you want
 * read-only memory), but the larger purpose of these types is to help document the caller's intent and to
 * provide the Control Panel with the ability to highlight memory regions accordingly.
 */
MemoryPDP11.TYPE = {
    NONE:       0,
    RAM:        1,
    ROM:        2,
    VIDEO:      3,
    CONTROLLER: 4
};
MemoryPDP11.TYPE_COLORS = ["black", "blue", "green", "cyan"];
MemoryPDP11.TYPE_NAMES  = ["NONE",  "RAM",  "ROM",   "VID",  "H/W"];

/*
 * Last used block ID (used for debugging only)
 */
MemoryPDP11.idBlock = 0;

/*
 * This is the effective definition of afnNone, but we need not fully define it, because setAccess()
 * uses these defaults when any of the 4 handlers (ie, 2 byte handlers and 2 word handlers) are undefined.
 *
MemoryPDP11.afnNone = [
    MemoryPDP11.prototype.readNone,
    MemoryPDP11.prototype.writeNone,
    MemoryPDP11.prototype.readWordDefault,
    MemoryPDP11.prototype.writeWordDefault
];
 */
MemoryPDP11.afnNone = [];

MemoryPDP11.afnMemory = [
    MemoryPDP11.prototype.readByteMemory,
    MemoryPDP11.prototype.writeByteMemory,
    MemoryPDP11.prototype.readWordMemory,
    MemoryPDP11.prototype.writeWordMemory
];

MemoryPDP11.afnChecked = [
    MemoryPDP11.prototype.readByteChecked,
    MemoryPDP11.prototype.writeByteChecked,
    MemoryPDP11.prototype.readWordChecked,
    MemoryPDP11.prototype.writeWordChecked
];

if (TYPEDARRAYS) {
    MemoryPDP11.afnArrayBE = [
        MemoryPDP11.prototype.readByteBE,
        MemoryPDP11.prototype.writeByteBE,
        MemoryPDP11.prototype.readWordBE,
        MemoryPDP11.prototype.writeWordBE
    ];

    MemoryPDP11.afnArrayLE = [
        MemoryPDP11.prototype.readByteLE,
        MemoryPDP11.prototype.writeByteLE,
        MemoryPDP11.prototype.readWordLE,
        MemoryPDP11.prototype.writeWordLE
    ];
}

var littleEndian = (TYPEDARRAYS? (function() {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setUint16(0, 256, true);
    return new Uint16Array(buffer)[0] === 256;
})() : false);
