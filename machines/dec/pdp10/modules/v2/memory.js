/**
 * @fileoverview Implements the PDP-10 Memory component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import { DEBUG, DEBUGGER, PDP10 } from "./defines.js";

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
 * @class MemoryPDP10
 * @property {number} id
 * @property {number} used
 * @property {number} size
 * @property {Array.<number>} aw
 */
export default class MemoryPDP10 {
    /**
     * MemoryPDP10(bus, addr, used, size, type)
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
     * WARNING: Since Memory blocks are low-level objects that have no UI requirements, they
     * do not inherit from the Component class, so if you want to use any Component class methods,
     * such as Component.assert(), use the corresponding Debugger methods instead (assuming a debugger
     * is available).
     *
     * @param {BusPDP10} bus
     * @param {number|null} [addr] of lowest used address in block
     * @param {number} [used] portion of block in words (0 for none)
     * @param {number} [size] of block's buffer in words (0 for none)
     * @param {number} [type] is one of the MemoryPDP10.TYPE constants (default is MemoryPDP10.TYPE.NONE)
     */
    constructor(bus, addr, used, size, type)
    {
        var a, i;
        this.bus = bus;
        this.id = (MemoryPDP10.idBlock += 2);
        this.adw = null;
        this.offset = 0;
        this.addr = addr;
        this.used = used;
        this.size = size || 0;
        this.type = type || MemoryPDP10.TYPE.NONE;
        this.fReadOnly = (type == MemoryPDP10.TYPE.ROM);
        this.dbg = null;
        this.readWord = this.readWordDirect = this.readNone;
        this.writeWord = this.writeWordDirect = this.writeNone;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        this.copyBreakpoints();     // initialize the block's Debugger info; the caller will reinitialize

        /*
         * TODO: Study the impact of dirty block tracking.  The original purposes were to allow saveMemory()
         * to save only dirty blocks, and to enable the Video component to quickly detect changes to the video buffer.
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
         * This is the normal case: allocate a buffer that provides a word of data per address;
         * no controller is required because our default memory access functions (see afnMemory)
         * know how to deal with this simple 1-1 mapping of addresses to words.
         *
         * TODO: Consider initializing the memory array to random (or pseudo-random) values in DEBUG
         * mode; pseudo-random might be best, to help make any bugs reproducible.
         */
        a = this.aw = new Array(this.size);
        for (i = 0; i < a.length; i++) a[i] = 0;
        this.setAccess(MemoryPDP10.afnMemory);
    }

    /**
     * init(addr)
     *
     * Quick reinitializer when reusing a Memory block.
     *
     * @this {MemoryPDP10}
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
     * @this {MemoryPDP10}
     * @param {MemoryPDP10} mem
     * @param {number} [type]
     * @param {DebuggerPDP10} [dbg]
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
            this.fReadOnly = (type == MemoryPDP10.TYPE.ROM);
        }
        this.aw = mem.aw;
        this.setAccess(MemoryPDP10.afnMemory);
        this.copyBreakpoints(dbg, mem);
    }

    /**
     * save()
     *
     * This gets the contents of a Memory block as an array of numeric values; used by Bus.saveMemory(),
     * which in turn is called by CPUState.save().
     *
     * @this {MemoryPDP10}
     * @returns {Array.<number>|null}
     */
    save()
    {
        return this.aw;
    }

    /**
     * restore(aw)
     *
     * This restores the contents of a Memory block from an array of numeric values; used by Bus.restoreMemory(),
     * which is called by CPUState.restore(), after all other components have been restored and thus all Memory
     * blocks have been allocated by their respective components.
     *
     * @this {MemoryPDP10}
     * @param {Array.<number>|null} aw
     * @returns {boolean} true if successful, false if block size mismatch
     */
    restore(aw)
    {
        if (aw && this.size == aw.length) {
            this.aw = aw;
            this.fDirty = true;
            return true;
        }
        return false;
    }

    /**
     * zero(off, len, pattern)
     *
     * @this {MemoryPDP10}
     * @param {number} [off] (optional starting word offset within block)
     * @param {number} [len] (optional maximum number of words; default is the entire block)
     * @param {number} [pattern] (default is zero)
     */
    zero(off, len, pattern = 0)
    {
        /*
         * NOTE: If len is larger than the block, that's OK, because we also bounds-check the index.
         */
        off = off || 0;
        if (len === undefined) len = this.size;
        Component.assert(off >= 0 && off < this.size);

        /*
         * Although it's expected that most callers will supply unsigned 36-bit values, we're nice about
         * converting any signed values to their unsigned (two's complement) counterpart, provided they are
         * within the acceptable range.  Any values outside that range will be dealt with afterward.
         */
        if (pattern < 0 && pattern >= -PDP10.INT_LIMIT) {
            pattern += PDP10.WORD_LIMIT;
        }
        pattern = Math.trunc(Math.abs(pattern)) % PDP10.WORD_LIMIT;

        for (var i = off; len-- && i < this.size; i++) this.writeWordDirect(pattern, off, this.addr + off);
    }

    /**
     * setAccess(afn, fDirect)
     *
     * The afn parameter should be a 2-entry function table containing word read and write handlers.
     * See the static afnMemory table for an example.
     *
     * If no function table is specified, a default is selected based on the Memory type; similarly,
     * any undefined entries in the table are filled with default handlers.
     *
     * fDirect indicates that both the default AND the direct handlers should be updated.  Direct
     * handlers normally match the default handlers, except when "checked" handlers are installed;
     * this allows "checked" handlers to know where to dispatch the call after performing checks.
     * Examples of checks are read/write breakpoints, but it's really up to the Debugger to decide
     * what the check consists of.
     *
     * @this {MemoryPDP10}
     * @param {Array.<function()>} [afn] function table
     * @param {boolean} [fDirect] (true to update direct access functions as well; default is true)
     */
    setAccess(afn, fDirect)
    {
        if (!afn) {
            Component.assert(this.type == MemoryPDP10.TYPE.NONE);
            afn = MemoryPDP10.afnNone;
        }
        this.setReadAccess(afn, fDirect);
        this.setWriteAccess(afn, fDirect);
    }

    /**
     * setReadAccess(afn, fDirect)
     *
     * @this {MemoryPDP10}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setReadAccess(afn, fDirect)
    {
        if (!fDirect || !this.cReadBreakpoints) {
            this.readWord = afn[0] || this.readNone;
        }
        if (fDirect || fDirect === undefined) {
            this.readWordDirect = afn[0] || this.readNone;
        }
    }

    /**
     * setWriteAccess(afn, fDirect)
     *
     * @this {MemoryPDP10}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setWriteAccess(afn, fDirect)
    {
        if (!fDirect || !this.cWriteBreakpoints) {
            this.writeWord = !this.fReadOnly && afn[1] || this.writeNone;
        }
        if (fDirect || fDirect === undefined) {
            this.writeWordDirect = afn[1] || this.writeNone;
        }
    }

    /**
     * resetReadAccess()
     *
     * @this {MemoryPDP10}
     */
    resetReadAccess()
    {
        this.readWord = this.readWordDirect;
    }

    /**
     * resetWriteAccess()
     *
     * @this {MemoryPDP10}
     */
    resetWriteAccess()
    {
        this.writeWord = this.fReadOnly? this.writeNone : this.writeWordDirect;
    }

    /**
     * printAddr(sMessage)
     *
     * @this {MemoryPDP10}
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
     * @this {MemoryPDP10}
     * @param {number} off
     * @param {boolean} fWrite
     */
    addBreakpoint(off, fWrite)
    {
        if (!fWrite) {
            if (this.cReadBreakpoints++ === 0) {
                this.setReadAccess(MemoryPDP10.afnChecked, false);
            }
            if (DEBUG) this.printAddr("read breakpoint added to memory block");
        }
        else {
            if (this.cWriteBreakpoints++ === 0) {
                this.setWriteAccess(MemoryPDP10.afnChecked, false);
            }
            if (DEBUG) this.printAddr("write breakpoint added to memory block");
        }
    }

    /**
     * removeBreakpoint(off, fWrite)
     *
     * @this {MemoryPDP10}
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
     * @this {MemoryPDP10}
     * @param {DebuggerPDP10} [dbg]
     * @param {MemoryPDP10} [mem] (outgoing MemoryPDP10 block to copy breakpoints from, if any)
     */
    copyBreakpoints(dbg, mem)
    {
        this.dbg = dbg;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        if (mem) {
            if ((this.cReadBreakpoints = mem.cReadBreakpoints)) {
                this.setReadAccess(MemoryPDP10.afnChecked, false);
            }
            if ((this.cWriteBreakpoints = mem.cWriteBreakpoints)) {
                this.setWriteAccess(MemoryPDP10.afnChecked, false);
            }
        }
    }

    /**
     * readNone(off, addr)
     *
     * @this {MemoryPDP10}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readNone(off, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "attempt to read invalid address %s\n", this.dbg.toStrBase(addr));
        }
        this.bus.fault(addr);
        return PDP10.WORD_INVALID;
    }

    /**
     * writeNone(v, off, addr)
     *
     * @this {MemoryPDP10}
     * @param {number} v
     * @param {number} off
     * @param {number} addr
     */
    writeNone(v, off, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.MEMORY, "attempt to write %s to invalid addresses %s\n", this.dbg.toStrBase(v), this.dbg.toStrBase(addr));
        }
        this.bus.fault(addr);
    }

    /**
     * readWordMemory(off, addr)
     *
     * @this {MemoryPDP10}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWordMemory(off, addr)
    {
        var w = this.aw[off];
        Component.assert(w >= 0 && w < PDP10.WORD_LIMIT);
        return w;
    }

    /**
     * writeWordMemory(w, off, addr)
     *
     * @this {MemoryPDP10}
     * @param {number} w
     * @param {number} off
     * @param {number} addr
     */
    writeWordMemory(w, off, addr)
    {
        Component.assert(w >= 0 && w < PDP10.WORD_LIMIT);
        if (this.aw[off] != w) {
            this.aw[off] = w;
            this.fDirty = true;
        }
    }

    /**
     * readWordChecked(off, addr)
     *
     * @this {MemoryPDP10}
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
     * writeWordChecked(w, off, addr)
     *
     * @this {MemoryPDP10}
     * @param {number} w
     * @param {number} off
     * @param {number} addr
     */
    writeWordChecked(w, off, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off, 2);
        }
        if (this.fReadOnly) this.writeNone(w, off, addr); else this.writeWordDirect(w, off, addr);
    }
}

/*
 * Basic memory types
 *
 * RAM is the most conventional memory type, providing full read/write capability.  ROM is equally
 * conventional, except that the fReadOnly property is set.  ROM can be written using the Bus setWordDirect()
 * interface (which in turn uses the Memory writeWordDirect() interface), allowing the ROM component to
 * initialize its own memory.
 */
MemoryPDP10.TYPE = {
    NONE:       0,
    RAM:        1,
    ROM:        2
};
MemoryPDP10.TYPE_COLORS = ["black", "blue", "green"];
MemoryPDP10.TYPE_NAMES  = ["NONE",  "RAM",  "ROM"];

/*
 * Last used block ID (used for debugging only)
 */
MemoryPDP10.idBlock = 0;

/*
 * This is the effective definition of afnNone, but we need not fully define it, because setAccess()
 * uses these defaults when any of the handlers are undefined.
 *
MemoryPDP10.afnNone = [
    MemoryPDP10.prototype.readNone,
    MemoryPDP10.prototype.writeNone
];
 */
MemoryPDP10.afnNone = [];

MemoryPDP10.afnMemory = [
    MemoryPDP10.prototype.readWordMemory,
    MemoryPDP10.prototype.writeWordMemory
];

MemoryPDP10.afnChecked = [
    MemoryPDP10.prototype.readWordChecked,
    MemoryPDP10.prototype.writeWordChecked
];
