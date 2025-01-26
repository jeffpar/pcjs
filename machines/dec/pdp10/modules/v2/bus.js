/**
 * @fileoverview Implements the PDP-10 Bus component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MemoryPDP10 from "./memory.js";
import MESSAGE from "./message.js";
import StrLib from "../../../../modules/v2/strlib.js";
import UsrLib from "../../../../modules/v2/usrlib.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import { DEBUGGER, PDP10 } from "./defines.js";

/*
 * Data types used by scanMemory()
 */

/**
 * This defines the BlockInfo bit fields used by scanMemory() when it creates the aBlocks array.
 *
 * @typedef {Object} BlockInfo
 * @property {BitField} num
 * @property {BitField} count
 * @property {BitField} btmod
 * @property {BitField} type
 */

var BlockInfoPDP10 = /** @type {BlockInfo} */ (UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3}));

/**
 * BusInfo object definition (returned by scanMemory())
 *
 *  cbTotal:    total bytes allocated
 *  cBlocks:    total Memory blocks allocated
 *  aBlocks:    array of allocated Memory block numbers
 *
 * @typedef {Object} BusInfo
 * @property {number} cbTotal
 * @property {number} cBlocks
 * @property {Array.<BlockInfo>} aBlocks
 */

 /**
  * @type {BusInfo}
  */
var BusInfoPDP10;

/**
 * @class BusPDP10
 * @unrestricted
 */
export default class BusPDP10 extends Component {
    /**
     * BusPDP10(parmsBus, cpu, dbg)
     *
     * The BusPDP10 component manages physical memory and I/O address spaces.
     *
     * The BusPDP10 component has no UI elements, so it does not require an init() handler,
     * but it still inherits from the Component class and must be allocated like any
     * other device component.  It's currently allocated by the Computer's init() handler,
     * which then calls the initBus() method of all the other components.
     *
     * For memory beyond the simple needs of the ROM and RAM components (ie, memory-mapped
     * devices), the address space must still be allocated through the BusPDP10 component via
     * addMemory().  If the component needs something more than simple read/write storage,
     * it must provide a custom controller.
     *
     * @param {Object} parmsBus
     * @param {CPUStatePDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    constructor(parmsBus, cpu, dbg)
    {
        super("Bus", parmsBus, MESSAGE.BUS);

        this.cpu = cpu;
        this.dbg = dbg;

        /*
         * Supported values for nBusWidth: 18 (default).  This represents the maximum size of the bus for the
         * life of the machine, regardless what memory management mode the CPU has enabled.
         */
        this.nBusWidth = +parmsBus['busWidth'] || 18;

        /*
         * Compute all BusPDP10 memory block parameters now, based on the width of the bus.
         *
         * Note that all PCjs machines divide their address space into blocks, using a block size appropriate for
         * the machine's bus width.  This allows us to efficiently allocate the entire address space, by reusing blocks
         * as appropriate, and to define to different address behaviors on a block-granular level.
         */
        this.addrTotal = 1 << this.nBusWidth;
        this.nBusMask = (this.addrTotal - 1);
        this.nBlockSize = 16384;
        this.nBlockShift = Math.log2(this.nBlockSize);      // ES6 ALERT (alternatively: Math.log(this.nBlockSize) / Math.LN2)
        this.nBlockLen = this.nBlockSize >> 2;
        this.nBlockLimit = this.nBlockSize - 1;
        this.nBlockTotal = (this.addrTotal / this.nBlockSize) | 0;
        this.nBlockMask = this.nBlockTotal - 1;
        this.assert(this.nBlockMask <= BlockInfoPDP10.num.mask);

        this.nDisableFaults = 0;
        this.fFault = false;

        /*
         * Define all the properties to be initialized by initMemory()
         */
        this.aBusBlocks = [];

        /*
         * We're ready to allocate empty Memory blocks to span the entire physical address space.
         */
        this.initMemory();

        this.setReady();
    }

    /**
     * initMemory()
     *
     * Allocate enough (empty) Memory blocks to span the entire physical address space.
     *
     * @this {BusPDP10}
     */
    initMemory()
    {
        var block = new MemoryPDP10(this);
        block.copyBreakpoints(this.dbg);

        this.aBusBlocks = new Array(this.nBlockTotal);
        for (var iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            this.aBusBlocks[iBlock] = block;
        }
    }

    /**
     * reset()
     *
     * @this {BusPDP10}
     */
    reset()
    {
    }

    /**
     * getWidth()
     *
     * @this {BusPDP10}
     * @returns {number}
     */
    getWidth()
    {
        return this.nBusWidth;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {BusPDP10}
     * @param {Object|null} data (always null because we supply no powerDown() handler)
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {BusPDP10}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * save()
     *
     * @this {BusPDP10}
     * @returns {Object|null}
     */
    save()
    {
        var state = new State(this);
        state.set(0, this.saveMemory());
        return state.data();
    }

    /**
     * restore(data)
     *
     * @this {BusPDP10}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        return this.restoreMemory(data[0]);
    }

    /**
     * addMemory(addr, size, type)
     *
     * Adds new Memory blocks to the specified address range.  Any Memory blocks previously
     * added to that range must first be removed via removeMemory(); otherwise, you'll get
     * an allocation conflict error.  This helps prevent address calculation errors, redundant
     * allocations, etc.
     *
     * We've relaxed some of the original requirements (ie, that addresses must start at a
     * block-granular address, or that sizes must be equal to exactly one or more blocks),
     * because machines with large block sizes can make it impossible to load certain ROMs at
     * their required addresses.  Every allocation still allocates a whole number of blocks.
     *
     * Even so, BusPDP10 memory management does NOT provide a general-purpose heap.  Most memory
     * allocations occur during machine initialization and never change.  In particular, there
     * is NO support for removing partial-block allocations.
     *
     * Each Memory block keeps track of a start address (addr) and length (used), indicating
     * the used space within the block; any free space that precedes or follows that used space
     * can be allocated later, by simply extending the beginning or ending of the previously used
     * space.  However, any holes that might have existed between the original allocation and an
     * extension are subsumed by the extension.
     *
     * @this {BusPDP10}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the MemoryPDP10.TYPE constants
     * @returns {boolean} true if successful, false if not
     */
    addMemory(addr, size, type)
    {
        var addrNext = addr;
        var sizeLeft = size;
        var iBlock = addrNext >>> this.nBlockShift;

        while (sizeLeft > 0 && iBlock < this.aBusBlocks.length) {

            var block = this.aBusBlocks[iBlock];
            var addrBlock = iBlock * this.nBlockSize;
            var sizeBlock = this.nBlockSize - (addrNext - addrBlock);
            if (sizeBlock > sizeLeft) sizeBlock = sizeLeft;

            if (block && block.size) {
                if (block.type == type) {
                    /*
                     * Where there is already a similar block with a non-zero size, we allow the allocation only if:
                     *
                     *   1) addrNext + sizeLeft <= block.addr (the request precedes the used portion of the current block), or
                     *   2) addrNext >= block.addr + block.used (the request follows the used portion of the current block)
                     */
                    if (addrNext + sizeLeft <= block.addr) {
                        block.used += (block.addr - addrNext);
                        block.addr = addrNext;
                        return true;
                    }
                    if (addrNext >= block.addr + block.used) {
                        var sizeAvail = block.size - (addrNext - addrBlock);
                        if (sizeAvail > sizeLeft) sizeAvail = sizeLeft;
                        block.used = addrNext - block.addr + sizeAvail;
                        addrNext = addrBlock + this.nBlockSize;
                        sizeLeft -= sizeAvail;
                        iBlock++;
                        continue;
                    }
                }
                return this.reportError(BusPDP10.ERROR.RANGE_INUSE, addrNext, sizeLeft);
            }

            var blockNew = new MemoryPDP10(this, addrNext, sizeBlock, this.nBlockSize, type);
            blockNew.copyBreakpoints(this.dbg, block);
            this.aBusBlocks[iBlock++] = blockNew;

            addrNext = addrBlock + this.nBlockSize;
            sizeLeft -= sizeBlock;
        }

        if (sizeLeft <= 0) {
            this.printf(MESSAGE.STATUS, "Added %dKb %s at %o\n", (size >> 10), MemoryPDP10.TYPE_NAMES[type], addr);
            return true;
        }

        return this.reportError(BusPDP10.ERROR.RANGE_INVALID, addr, size);
    }

    /**
     * cleanMemory(addr, size)
     *
     * @this {BusPDP10}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} true if all blocks were clean, false if dirty; all blocks are cleaned in the process
     */
    cleanMemory(addr, size)
    {
        var fClean = true;
        var iBlock = addr >>> this.nBlockShift;
        var sizeBlock = this.nBlockSize - (addr & this.nBlockLimit);
        while (size > 0 && iBlock < this.aBusBlocks.length) {
            if (this.aBusBlocks[iBlock].fDirty) {
                this.aBusBlocks[iBlock].fDirty = fClean = false;
                this.aBusBlocks[iBlock].fDirtyEver = true;
            }
            size -= sizeBlock;
            sizeBlock = this.nBlockSize;
            iBlock++;
        }
        return fClean;
    }

    /**
     * zeroMemory(addr, size, pattern)
     *
     * @this {BusPDP10}
     * @param {number} addr
     * @param {number} size
     * @param {number} [pattern]
     */
    zeroMemory(addr, size, pattern)
    {
        var off = addr & this.nBlockLimit;
        var iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aBusBlocks.length) {
            this.aBusBlocks[iBlock].zero(off, size, pattern);
            size -= this.nBlockSize;
            iBlock++;
            off = 0;
        }
    }

    /**
     * scanMemory(info, addr, size)
     *
     * Returns a BusInfo object for the specified address range.
     *
     * @this {BusPDP10}
     * @param {BusInfo} [info] previous BusInfo, if any
     * @param {number} [addr] starting address of range (0 if none provided)
     * @param {number} [size] size of range, in bytes (up to end of address space if none provided)
     * @returns {BusInfo} updated info (or new info if no previous info provided)
     */
    scanMemory(info, addr, size)
    {
        if (addr == null) addr = 0;
        if (size == null) size = (this.addrTotal - addr) | 0;
        if (info == null) info = {cbTotal: 0, cBlocks: 0, aBlocks: []};

        var iBlock = addr >>> this.nBlockShift;
        var iBlockMax = ((addr + size - 1) >>> this.nBlockShift);

        info.cbTotal = 0;
        info.cBlocks = 0;
        while (iBlock <= iBlockMax) {
            var block = this.aBusBlocks[iBlock];
            info.cbTotal += block.size;
            if (block.size) {
                info.aBlocks.push(/** @type {BlockInfo} */ (UsrLib.initBitFields(BlockInfoPDP10, iBlock, 0, 0, block.type)));
                info.cBlocks++;
            }
            iBlock++;
        }
        return info;
    }

    /**
     * removeMemory(addr, size)
     *
     * Replaces every block in the specified address range with empty Memory blocks that ignore all reads/writes.
     *
     * TODO: Update the removeMemory() interface to reflect the relaxed requirements of the addMemory() interface.
     *
     * @this {BusPDP10}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} true if successful, false if not
     */
    removeMemory(addr, size)
    {
        if (!(addr & this.nBlockLimit) && size && !(size & this.nBlockLimit)) {
            var iBlock = addr >>> this.nBlockShift;
            while (size > 0) {
                var blockOld = this.aBusBlocks[iBlock];
                var blockNew = new MemoryPDP10(this, addr);
                blockNew.copyBreakpoints(this.dbg, blockOld);
                this.aBusBlocks[iBlock++] = blockNew;
                addr = iBlock * this.nBlockSize;
                size -= this.nBlockSize;
            }
            return true;
        }
        return this.reportError(BusPDP10.ERROR.RANGE_INVALID, addr, size);
    }

    /**
     * getMemoryBlocks(addr, size)
     *
     * @this {BusPDP10}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @returns {Array} of Memory blocks
     */
    getMemoryBlocks(addr, size)
    {
        var aBlocks = [];
        var iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aBusBlocks.length) {
            aBlocks.push(this.aBusBlocks[iBlock++]);
            size -= this.nBlockSize;
        }
        return aBlocks;
    }

    /**
     * setMemoryBlocks(addr, size, aBlocks, type)
     *
     * If no type is specified, then specified address range uses all the provided blocks as-is;
     * this form of setMemoryBlocks() is used for complete physical aliases.
     *
     * Otherwise, new blocks are allocated with the specified type; the underlying memory from the
     * provided blocks is still used, but the new blocks may have different access to that memory.
     *
     * @this {BusPDP10}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @param {Array} aBlocks as returned by getMemoryBlocks()
     * @param {number} [type] is one of the MemoryPDP10.TYPE constants
     */
    setMemoryBlocks(addr, size, aBlocks, type)
    {
        var i = 0;
        var iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aBusBlocks.length) {
            var block = aBlocks[i++];
            this.assert(block);
            if (!block) break;
            if (type !== undefined) {
                var blockNew = new MemoryPDP10(this, addr);
                blockNew.clone(block, type, this.dbg);
                block = blockNew;
            }
            this.aBusBlocks[iBlock++] = block;
            size -= this.nBlockSize;
        }
    }

    /**
     * getWord(addr)
     *
     * @this {BusPDP10}
     * @param {number} addr is a physical address
     * @returns {number} word (36-bit) value at that address
     */
    getWord(addr)
    {
        var off = addr & this.nBlockLimit;
        var iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        return this.aBusBlocks[iBlock].readWord(off, addr);
    }

    /**
     * setWord(addr, w)
     *
     * @this {BusPDP10}
     * @param {number} addr is a physical address
     * @param {number} w is the word (36-bit) value to write
     */
    setWord(addr, w)
    {
        var off = addr & this.nBlockLimit;
        var iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        this.aBusBlocks[iBlock].writeWord(w, off, addr);
    }

    /**
     * getBlockDirect(addr)
     *
     * @this {BusPDP10}
     * @param {number} addr is a physical address
     * @returns {MemoryPDP10}
     */
    getBlockDirect(addr)
    {
        return this.aBusBlocks[(addr & this.nBusMask) >>> this.nBlockShift];
    }

    /**
     * getWordDirect(addr)
     *
     * This is used for device I/O and Debugger physical memory requests, not the CPU.
     *
     * @this {BusPDP10}
     * @param {number} addr is a physical address
     * @returns {number} word (36-bit) value at that address
     */
    getWordDirect(addr)
    {
        var w;
        var off = addr & this.nBlockLimit;
        var block = this.getBlockDirect(addr);
        this.nDisableFaults++;
        w = block.readWordDirect(off, addr);
        this.nDisableFaults--;
        return w;
    }

    /**
     * setWordDirect(addr, w)
     *
     * This is used for device I/O and Debugger physical memory requests, not the CPU.
     *
     * @this {BusPDP10}
     * @param {number} addr is a physical address
     * @param {number} w is the word (36-bit) value to write
     */
    setWordDirect(addr, w)
    {
        var off = addr & this.nBlockLimit;
        var block = this.getBlockDirect(addr);
        this.nDisableFaults++;
        block.writeWordDirect(w, off, addr);
        this.nDisableFaults--;
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {BusPDP10}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    addMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            var iBlock = addr >>> this.nBlockShift;
            this.aBusBlocks[iBlock].addBreakpoint(addr & this.nBlockLimit, fWrite);
        }
    }

    /**
     * removeMemBreak(addr, fWrite)
     *
     * @this {BusPDP10}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    removeMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            var iBlock = addr >>> this.nBlockShift;
            this.aBusBlocks[iBlock].removeBreakpoint(addr & this.nBlockLimit, fWrite);
        }
    }

    /**
     * saveMemory(fAll)
     *
     * The only memory blocks we save are those marked as dirty, but most likely all of RAM will have been marked dirty,
     * and even if our dirty-memory flags were as smart as our dirty-sector flags (ie, were set only when a write changed
     * what was already there), it's unlikely that would reduce the number of RAM blocks we must save/restore.  At least
     * all the ROM blocks should be clean (except in the unlikely event that the Debugger was used to modify them).
     *
     * All dirty blocks will be stored in a single array, as pairs of block numbers and data arrays, like so:
     *
     *      [iBlock0, [dw0, dw1, ...], iBlock1, [dw0, dw1, ...], ...]
     *
     * In a normal 4Kb block, there will be 1K DWORD values in the data array.  Remember that each DWORD is a signed 32-bit
     * integer (because they are formed using bitwise operator rather than floating-point math operators), so don't be
     * surprised to see negative numbers in the data.
     *
     * The above example assumes "uncompressed" data arrays.  If we choose to use "compressed" data arrays, the data arrays
     * will look like:
     *
     *      [count0, dw0, count1, dw1, ...]
     *
     * where each count indicates how many times the following DWORD value occurs.  A data array length less than 1K indicates
     * that it's compressed, since we'll only store them in compressed form if they actually shrank, and we'll use State
     * helper methods compress() and decompress() to create and expand the compressed data arrays.
     *
     * @this {BusPDP10}
     * @param {boolean} [fAll] (true to save all non-ROM memory blocks, regardless of their dirty flags)
     * @returns {Array} a
     */
    saveMemory(fAll)
    {
        var i = 0;
        var a = [];

        for (var iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            var block = this.aBusBlocks[iBlock];
            /*
             * We have to check both fDirty and fDirtyEver, because we may have called cleanMemory() on some of
             * the memory blocks (eg, video memory), and while cleanMemory() will clear a dirty block's fDirty flag,
             * it also sets the dirty block's fDirtyEver flag, which is left set for the lifetime of the machine.
             */
            if (fAll && block.type != MemoryPDP10.TYPE.ROM || block.fDirty || block.fDirtyEver) {
                a[i++] = iBlock;
                a[i++] = State.compress(block.save());
            }
        }

        return a;
    }

    /**
     * restoreMemory(a)
     *
     * This restores the contents of all Memory blocks; called by CPUState.restore().
     *
     * In theory, we ONLY have to save/restore block contents.  Other block attributes,
     * like the type, the memory controller (if any), and the active memory access functions,
     * should already be restored, since every component (re)allocates all the memory blocks
     * it was using when it's restored.  And since the CPU is guaranteed to be the last
     * component to be restored, all those blocks (and their attributes) should be in place now.
     *
     * See saveMemory() for more information on how the memory block contents are saved.
     *
     * @this {BusPDP10}
     * @param {Array} a
     * @returns {boolean} true if successful, false if not
     */
    restoreMemory(a)
    {
        var i;
        for (i = 0; i < a.length - 1; i += 2) {
            var iBlock = a[i];
            var adw = a[i+1];
            if (adw && adw.length < this.nBlockLen) {
                adw = State.decompress(adw, this.nBlockLen);
            }
            var block = this.aBusBlocks[iBlock];
            if (!block || !block.restore(adw)) {
                /*
                 * Either the block to restore hasn't been allocated, indicating a change in the machine
                 * configuration since it was last saved (the most likely explanation) or there's some internal
                 * inconsistency (eg, the block size is wrong).
                 */
                Component.error("Unable to restore memory block " + iBlock);
                return false;
            }
        }
        return true;
    }

    /**
     * getMemoryLimit(type)
     *
     * @this {BusPDP10}
     * @param {number} type is one of the MemoryPDP10.TYPE constants
     * @returns {number} (the limiting address of the specified memory type, zero if none)
     */
    getMemoryLimit(type)
    {
        var addr = 0;
        for (var iBlock = 0; iBlock < this.aBusBlocks.length; iBlock++) {
            var block = this.aBusBlocks[iBlock];
            if (block.type == type) {
                addr = block.addr + block.used;
            }
        }
        return addr;
    }

    /**
     * fault(addr, err, access)
     *
     * Bus interface for signaling alignment errors, invalid memory, etc.
     *
     * @this {BusPDP10}
     * @param {number} addr
     * @param {number} [err]
     * @param {number} [access] (for diagnostic purposes only)
     */
    fault(addr, err, access)
    {
        this.fFault = true;
        if (!this.nDisableFaults) {
            if (DEBUGGER && this.dbg) {
                this.dbg.printf(MESSAGE.FAULT + MESSAGE.ADDR, "memory fault on %s\n", this.dbg.toStrBase(addr));
            }
            this.cpu.haltCPU();
        }
    }

    /**
     * checkFault()
     *
     * This also serves as a clearFault() function.
     *
     * @this {BusPDP10}
     * @returns {boolean}
     */
    checkFault()
    {
        var f = this.fFault;
        this.fFault = false;
        return f;
    }

    /**
     * reportError(errNum, addr, size, fQuiet)
     *
     * @this {BusPDP10}
     * @param {number} errNum
     * @param {number} addr
     * @param {number} size
     * @param {boolean} [fQuiet] (true if any error should be quietly logged)
     * @returns {boolean} false
     */
    reportError(errNum, addr, size, fQuiet)
    {
        this.printf(fQuiet? MESSAGE.NONE : MESSAGE.ERROR, "Memory block error (%d: %#x,%#x)\n", errNum, addr, size);
        return false;
    }
}

BusPDP10.ERROR = {
    RANGE_INUSE:        1,
    RANGE_INVALID:      2
};
