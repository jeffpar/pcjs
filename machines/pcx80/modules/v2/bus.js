/**
 * @fileoverview Implements the PCx80 Bus component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MemoryX80 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import UsrLib from "../../../modules/v2/usrlib.js";
import { DEBUGGER, MAXDEBUG } from "./defines.js";

/**
 * BusInfoX80 object definition (returned by scanMemory())
 *
 * @typedef {Object} BusInfoX80
 * @property {number} cbTotal           (total bytes allocated)
 * @property {number} cBlocks           (total Memory blocks allocated)
 * @property {Array.<number>} aBlocks   (array of allocated Memory block numbers)
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class BusX80
 * @unrestricted
 */
export default class BusX80 extends Component {

    static ERROR = {
        ADD_MEM_INUSE:      1,
        ADD_MEM_BADRANGE:   2,
        SET_MEM_BADRANGE:   4,
        REM_MEM_BADRANGE:   5
    };

    /**
     * This defines the BlockInfo bit fields used by scanMemory() when it creates the aBlocks array.
     */
    static BlockInfo = UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3});

    /**
     * BusX80(cpu, dbg)
     *
     * The BusX80 component manages physical memory and I/O address spaces.
     *
     * The BusX80 component has no UI elements, so it does not require an init() handler,
     * but it still inherits from the Component class and must be allocated like any
     * other device component.  It's currently allocated by the Computer's init() handler,
     * which then calls the initBus() method of all the other components.
     *
     * For memory beyond the simple needs of the ROM and RAM components (ie, memory-mapped
     * devices), the address space must still be allocated through the BusX80 component via
     * addMemory().  If the component needs something more than simple read/write storage,
     * it must provide a custom controller.
     *
     * All port (I/O) operations are defined by external handlers; they register with us,
     * and we manage those registrations and provide support for I/O breakpoints, but the
     * only default I/O behavior we provide is ignoring writes to any unregistered output
     * ports and returning 0xff from any unregistered input ports.
     *
     * @this {BusX80}
     * @param {Object} parmsBus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    constructor(parmsBus, cpu, dbg)
    {
        super("Bus", parmsBus);

        this.cpu = cpu;
        this.dbg = dbg;

        this.nBusWidth = parmsBus['busWidth'] || 16;

        /*
         * Compute all BusX80 memory block parameters, based on the width of the bus.  The entire
         * address space is divided into blocks, using a block size that is (hopefully) appropriate to
         * the bus width.  The following table summarizes our simplistic calculations.
         *
         *      Bus Width                       Block Shift     Block Size
         *      ---------                       -----------     ----------
         *      16 bits (64Kb address space):   10              1Kb (64 maximum blocks)
         *      18 bits (256Kb address space):  11              2Kb (128 maximum blocks)
         *      20 bits (1Mb address space):    12              4Kb (256 maximum blocks)
         *      22 bits (4Mb address space):    13              8Kb (512 maximum blocks)
         *      24 bits (16Mb address space):   14              16Kb (1K maximum blocks)
         *      32 bits (4Gb address space);    15              32Kb (128K maximum blocks)
         *
         * The coarser block granularities (ie, 16Kb and 32Kb) may cause problems for certain RAM and/or ROM
         * allocations that are contiguous but are allocated out of order, or that have different controller
         * requirements.  Your choices, for the moment, are either to ensure the allocations are performed in
         * order, or to choose smaller nBlockShift values (at the expense of a generating a larger block array).
         */
        this.addrTotal = Math.pow(2, this.nBusWidth);
        this.nBusLimit = this.nBusMask = (this.addrTotal - 1) | 0;
        this.nBlockShift = (this.nBusWidth >> 1) + 2;
        if (this.nBlockShift < 10) this.nBlockShift = 10;
        if (this.nBlockShift > 15) this.nBlockShift = 15;
        this.nBlockSize = 1 << this.nBlockShift;
        this.nBlockLen = this.nBlockSize >> 2;
        this.nBlockLimit = this.nBlockSize - 1;
        this.nBlockTotal = (this.addrTotal / this.nBlockSize) | 0;
        this.nBlockMask = this.nBlockTotal - 1;
        this.assert(this.nBlockMask <= BusX80.BlockInfo.num.mask);

        /*
         * Lists of I/O notification functions: aPortInputNotify and aPortOutputNotify are arrays, indexed by
         * port, of sub-arrays which contain:
         *
         *      [0]: registered function to call for every I/O access
         *
         * The registered function is called with the port address, and if the access was triggered by the CPU,
         * the instruction pointer (IP) at the point of access.
         *
         * WARNING: Unlike the (old) read and write memory notification functions, these support only one
         * pair of input/output functions per port.  A more sophisticated architecture could support a list
         * of chained functions across multiple components, but I doubt that will be necessary here.
         *
         * UPDATE: The Debugger now piggy-backs on these arrays to indicate ports for which it wants notification
         * of I/O.  In those cases, the registered component/function elements may or may not be set, but the
         * following additional element will be set:
         *
         *      [1]: true to break on I/O, false to ignore I/O
         *
         * The false case is important if fPortInputBreakAll and/or fPortOutputBreakAll is set, because it allows the
         * Debugger to selectively ignore specific ports.
         */
        this.aPortInputNotify = [];
        this.aPortOutputNotify = [];
        this.fPortInputBreakAll = this.fPortOutputBreakAll = false;

        /*
         * By default, all I/O ports are 1 byte wide; ports that are wider must add themselves to one or both of
         * these lists, using addPortInputWidth() and/or addPortOutputWidth().
         */
        this.aPortInputWidth = [];
        this.aPortOutputWidth = [];

        /*
         * Allocate empty Memory blocks to span the entire physical address space.
         */
        this.initMemory();

        this.setReady();
    }

    /**
     * initMemory()
     *
     * Allocate enough (empty) Memory blocks to span the entire physical address space.
     *
     * @this {BusX80}
     */
    initMemory()
    {
        let block = new MemoryX80();
        block.copyBreakpoints(this.dbg);
        this.aMemBlocks = new Array(this.nBlockTotal);
        for (let iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            this.aMemBlocks[iBlock] = block;
        }
    }

    /**
     * reset()
     *
     * @this {BusX80}
     */
    reset()
    {
    }

    /**
     * powerUp(data, fRepower)
     *
     * We don't need a powerDown() handler, because for largely historical reasons, our state is saved by saveMemory(),
     * which called by the CPU.
     *
     * However, we do need a powerUp() handler, because on resumable machines, the Computer's onReset() function calls
     * everyone's powerUp() handler rather than their reset() handler.
     *
     * TODO: Perhaps Computer should be smarter: if there's no powerUp() handler, then fallback to the reset() handler.
     * In that case, however, we'd either need to remove the powerUp() stub in Component, or detect the existence of the stub.
     *
     * @this {BusX80}
     * @param {Object|null} data (always null because we supply no powerDown() handler)
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) this.reset();
        return true;
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
     * Even so, BusX80 memory management does NOT provide a general-purpose heap.  Most memory
     * allocations occur during machine initialization and never change.  In particular, there
     * is NO support for removing partial-block allocations.
     *
     * Each Memory block keeps track of a start address (addr) and length (used), indicating
     * the used space within the block; any free space that precedes or follows that used space
     * can be allocated later, by simply extending the beginning or ending of the previously used
     * space.  However, any holes that might have existed between the original allocation and an
     * extension are subsumed by the extension.
     *
     * @this {BusX80}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the MemoryX80.TYPE constants
     * @returns {boolean} true if successful, false if not
     */
    addMemory(addr, size, type)
    {
        let addrNext = addr;
        let sizeLeft = size;
        let iBlock = addrNext >>> this.nBlockShift;

        while (sizeLeft > 0 && iBlock < this.aMemBlocks.length) {

            let block = this.aMemBlocks[iBlock];
            let addrBlock = iBlock * this.nBlockSize;
            let sizeBlock = this.nBlockSize - (addrNext - addrBlock);
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
                        let sizeAvail = block.size - (addrNext - addrBlock);
                        if (sizeAvail > sizeLeft) sizeAvail = sizeLeft;
                        block.used = addrNext - block.addr + sizeAvail;
                        addrNext = addrBlock + this.nBlockSize;
                        sizeLeft -= sizeAvail;
                        iBlock++;
                        continue;
                    }
                }
                return this.reportError(BusX80.ERROR.ADD_MEM_INUSE, addrNext, sizeLeft);
            }

            let blockNew = new MemoryX80(addrNext, sizeBlock, this.nBlockSize, type);
            blockNew.copyBreakpoints(this.dbg, block);
            this.aMemBlocks[iBlock++] = blockNew;

            addrNext = addrBlock + this.nBlockSize;
            sizeLeft -= sizeBlock;
        }

        if (sizeLeft <= 0) {
            this.printf(MESSAGE.STATUS, "%dKb %s at 0x%04X\n", Math.floor(size / 1024), MemoryX80.TYPE.NAMES[type], addr);
            return true;
        }

        return this.reportError(BusX80.ERROR.ADD_MEM_BADRANGE, addr, size);
    }

    /**
     * cleanMemory(addr, size)
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} true if all blocks were clean, false if dirty; all blocks are cleaned in the process
     */
    cleanMemory(addr, size)
    {
        let fClean = true;
        let iBlock = addr >>> this.nBlockShift;
        let sizeBlock = this.nBlockSize - (addr & this.nBlockLimit);
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            if (this.aMemBlocks[iBlock].fDirty) {
                this.aMemBlocks[iBlock].fDirty = fClean = false;
                this.aMemBlocks[iBlock].fDirtyEver = true;
            }
            size -= sizeBlock;
            sizeBlock = this.nBlockSize;
            iBlock++;
        }
        return fClean;
    }

    /**
     * scanMemory(info, addr, size)
     *
     * Returns a BusInfoX80 object for the specified address range.
     *
     * @this {BusX80}
     * @param {Object} [info] previous BusInfoX80, if any
     * @param {number} [addr] starting address of range (0 if none provided)
     * @param {number} [size] size of range, in bytes (up to end of address space if none provided)
     * @returns {Object} updated info (or new info if no previous info provided)
     */
    scanMemory(info, addr, size)
    {
        if (addr == null) addr = 0;
        if (size == null) size = (this.addrTotal - addr) | 0;
        if (info == null) info = {cbTotal: 0, cBlocks: 0, aBlocks: []};

        let iBlock = addr >>> this.nBlockShift;
        let iBlockMax = ((addr + size - 1) >>> this.nBlockShift);

        info.cbTotal = 0;
        info.cBlocks = 0;
        while (iBlock <= iBlockMax) {
            let block = this.aMemBlocks[iBlock];
            info.cbTotal += block.size;
            if (block.size) {
                info.aBlocks.push(UsrLib.initBitFields(/** @type {BitFields} */ (BusX80.BlockInfo), iBlock, 0, 0, block.type));
                info.cBlocks++;
            }
            iBlock++;
        }
        return info;
    }

    /**
     * getWidth()
     *
     * @this {BusX80}
     * @returns {number}
     */
    getWidth()
    {
        return this.nBusWidth;
    }

    /**
     * removeMemory(addr, size)
     *
     * Replaces every block in the specified address range with empty Memory blocks that ignore all reads/writes.
     *
     * TODO: Update the removeMemory() interface to reflect the relaxed requirements of the addMemory() interface.
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} true if successful, false if not
     */
    removeMemory(addr, size)
    {
        if (!(addr & this.nBlockLimit) && size && !(size & this.nBlockLimit)) {
            let iBlock = addr >>> this.nBlockShift;
            while (size > 0) {
                let blockOld = this.aMemBlocks[iBlock];
                let blockNew = new MemoryX80(addr);
                blockNew.copyBreakpoints(this.dbg, blockOld);
                this.aMemBlocks[iBlock++] = blockNew;
                addr = iBlock * this.nBlockSize;
                size -= this.nBlockSize;
            }
            return true;
        }
        return this.reportError(BusX80.ERROR.REM_MEM_BADRANGE, addr, size);
    }

    /**
     * getMemoryBlocks(addr, size)
     *
     * @this {BusX80}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @returns {Array} of Memory blocks
     */
    getMemoryBlocks(addr, size)
    {
        let aBlocks = [];
        let iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            aBlocks.push(this.aMemBlocks[iBlock++]);
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
     * @this {BusX80}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @param {Array} aBlocks as returned by getMemoryBlocks()
     * @param {number} [type] is one of the MemoryX80.TYPE constants
     */
    setMemoryBlocks(addr, size, aBlocks, type)
    {
        let i = 0;
        let iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            let block = aBlocks[i++];
            this.assert(block);
            if (!block) break;
            if (type !== undefined) {
                let blockNew = new MemoryX80(addr);
                blockNew.clone(block, type, this.dbg);
                block = blockNew;
            }
            this.aMemBlocks[iBlock++] = block;
            size -= this.nBlockSize;
        }
    }

    /**
     * getByte(addr)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} byte (8-bit) value at that address
     */
    getByte(addr)
    {
        return this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].readByte(addr & this.nBlockLimit, addr);
    }

    /**
     * getByteDirect(addr)
     *
     * This is useful for the Debugger and other components that want to bypass getByte() breakpoint detection.
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} byte (8-bit) value at that address
     */
    getByteDirect(addr)
    {
        return this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].readByteDirect(addr & this.nBlockLimit, addr);
    }

    /**
     * getShort(addr)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} word (16-bit) value at that address
     */
    getShort(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            return this.aMemBlocks[iBlock].readShort(off, addr);
        }
        return this.aMemBlocks[iBlock++].readByte(off, addr) | (this.aMemBlocks[iBlock & this.nBlockMask].readByte(0, addr + 1) << 8);
    }

    /**
     * getShortDirect(addr)
     *
     * This is useful for the Debugger and other components that want to bypass getShort() breakpoint detection.
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} word (16-bit) value at that address
     */
    getShortDirect(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            return this.aMemBlocks[iBlock].readShortDirect(off, addr);
        }
        return this.aMemBlocks[iBlock++].readByteDirect(off, addr) | (this.aMemBlocks[iBlock & this.nBlockMask].readByteDirect(0, addr + 1) << 8);
    }

    /**
     * setByte(addr, b)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} b is the byte (8-bit) value to write (we truncate it to 8 bits to be safe)
     */
    setByte(addr, b)
    {
        this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].writeByte(addr & this.nBlockLimit, b & 0xff, addr);
    }

    /**
     * setByteDirect(addr, b)
     *
     * This is useful for the Debugger and other components that want to bypass breakpoint detection AND read-only
     * memory protection (for example, this is an interface the ROM component could use to initialize ROM contents).
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} b is the byte (8-bit) value to write (we truncate it to 8 bits to be safe)
     */
    setByteDirect(addr, b)
    {
        this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].writeByteDirect(addr & this.nBlockLimit, b & 0xff, addr);
    }

    /**
     * setShort(addr, w)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} w is the word (16-bit) value to write (we truncate it to 16 bits to be safe)
     */
    setShort(addr, w)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            this.aMemBlocks[iBlock].writeShort(off, w & 0xffff, addr);
            return;
        }
        this.aMemBlocks[iBlock++].writeByte(off, w & 0xff, addr);
        this.aMemBlocks[iBlock & this.nBlockMask].writeByte(0, (w >> 8) & 0xff, addr + 1);
    }

    /**
     * setShortDirect(addr, w)
     *
     * This is useful for the Debugger and other components that want to bypass breakpoint detection AND read-only
     * memory protection (for example, this is an interface the ROM component could use to initialize ROM contents).
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} w is the word (16-bit) value to write (we truncate it to 16 bits to be safe)
     */
    setShortDirect(addr, w)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            this.aMemBlocks[iBlock].writeShortDirect(off, w & 0xffff, addr);
            return;
        }
        this.aMemBlocks[iBlock++].writeByteDirect(off, w & 0xff, addr);
        this.aMemBlocks[iBlock & this.nBlockMask].writeByteDirect(0, (w >> 8) & 0xff, addr + 1);
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    addMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            let iBlock = addr >>> this.nBlockShift;
            this.aMemBlocks[iBlock].addBreakpoint(addr & this.nBlockLimit, fWrite);
        }
    }

    /**
     * removeMemBreak(addr, fWrite)
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    removeMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            let iBlock = addr >>> this.nBlockShift;
            this.aMemBlocks[iBlock].removeBreakpoint(addr & this.nBlockLimit, fWrite);
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
     * @this {BusX80}
     * @param {boolean} [fAll] (true to save all non-ROM memory blocks, regardless of their dirty flags)
     * @returns {Array} a
     */
    saveMemory(fAll)
    {
        let i = 0;
        let a = [];

        for (let iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            let block = this.aMemBlocks[iBlock];
            /*
             * We have to check both fDirty and fDirtyEver, because we may have called cleanMemory() on some of
             * the memory blocks (eg, video memory), and while cleanMemory() will clear a dirty block's fDirty flag,
             * it also sets the dirty block's fDirtyEver flag, which is left set for the lifetime of the machine.
             */
            if (fAll && block.type != MemoryX80.TYPE.ROM || block.fDirty || block.fDirtyEver) {
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
     * @this {BusX80}
     * @param {Array} a
     * @returns {boolean} true if successful, false if not
     */
    restoreMemory(a)
    {
        for (let i = 0; i < a.length - 1; i += 2) {
            let iBlock = a[i];
            let adw = a[i+1];
            if (adw && adw.length < this.nBlockLen) {
                adw = State.decompress(adw, this.nBlockLen);
            }
            let block = this.aMemBlocks[iBlock];
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
     * addPortInputBreak(port)
     *
     * @this {BusX80}
     * @param {number} [port]
     * @returns {boolean} true if break on port input enabled, false if disabled
     */
    addPortInputBreak(port)
    {
        if (port === undefined) {
            this.fPortInputBreakAll = !this.fPortInputBreakAll;
            return this.fPortInputBreakAll;
        }
        if (this.aPortInputNotify[port] === undefined) {
            this.aPortInputNotify[port] = [null, false];
        }
        this.aPortInputNotify[port][1] = !this.aPortInputNotify[port][1];
        return this.aPortInputNotify[port][1];
    }

    /**
     * addPortInputNotify(start, end, fn)
     *
     * Add a port input-notification handler to the list of such handlers.
     *
     * @this {BusX80}
     * @param {number} start port address
     * @param {number} end port address
     * @param {function(number,number)} fn is called with the port and IP values at the time of the input
     */
    addPortInputNotify(start, end, fn)
    {
        if (fn !== undefined) {
            for (let port = start; port <= end; port++) {
                if (this.aPortInputNotify[port] !== undefined) {
                    Component.warning("Input port " + StrLib.toHexWord(port) + " already registered");
                    continue;
                }
                this.aPortInputNotify[port] = [fn, false];
                if (MAXDEBUG) this.printf(MESSAGE.LOG, "addPortInputNotify(%#06x)\n", port);
            }
        }
    }

    /**
     * addPortInputTable(component, table, offset)
     *
     * Add port input-notification handlers from the specified table (a batch version of addPortInputNotify)
     *
     * @this {BusX80}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offset] is an optional port offset
     */
    addPortInputTable(component, table, offset)
    {
        if (offset === undefined) offset = 0;
        if (table) {
            for (let port in table) {
                this.addPortInputNotify(+port + offset, +port + offset, table[port].bind(component));
            }
        }
    }

    /**
     * addPortInputWidth(port, size)
     *
     * By default, all input ports are 1 byte wide; ports that are wider must call this function.
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     */
    addPortInputWidth(port, size)
    {
        this.aPortInputWidth[port] = size;
    }

    /**
     * checkPortInputNotify(port, size, addrIP)
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     * @param {number} [addrIP] is the IP value at the time of the input
     * @returns {number} simulated port data
     *
     * NOTE: It seems that parts of the ROM BIOS (like the RS-232 probes around F000:E5D7 in the 5150 BIOS)
     * assume that ports for non-existent hardware return 0xff rather than 0x00, hence my new default (0xff) below.
     */
    checkPortInputNotify(port, size, addrIP)
    {
        let data = 0, shift = 0;

        while (size > 0) {

            let aNotify = this.aPortInputNotify[port];
            let sizePort = this.aPortInputWidth[port] || 1;
            let maskPort = (sizePort == 1? 0xff : (sizePort == 2? 0xffff : -1));
            let dataPort = maskPort;

            /*
             * TODO: We need to decide what to do about 8-bit I/O to a 16-bit port (ditto for 16-bit I/O
             * to a 32-bit port).  We probably should pass the size through to the aNotify[0] handler,
             * and let it decide what to do, but I don't feel like changing all the I/O handlers right now.
             * The good news, at least, is that the 8-bit handlers would not have to do anything special.
             * This assert will warn us if this is a pressing need.
             */
            this.assert(size >= sizePort);

            if (aNotify !== undefined) {
                if (aNotify[0]) {
                    dataPort = aNotify[0](port, addrIP);
                    if (dataPort === undefined) {
                        dataPort = maskPort;
                    } else {
                        dataPort &= maskPort;
                    }
                }
                if (DEBUGGER && this.dbg && this.fPortInputBreakAll != aNotify[1]) {
                    this.dbg.checkPortInput(port, size, dataPort);
                }
            }
            else {
                if (DEBUGGER && this.dbg) {
                    this.dbg.messageIO(this, port, null, addrIP);
                    if (this.fPortInputBreakAll) this.dbg.checkPortInput(port, size, dataPort);
                }
            }

            data |= dataPort << shift;
            shift += (sizePort << 3);
            port += sizePort;
            size -= sizePort;
        }

        this.assert(!size);
        return data;
    }

    /**
     * addPortOutputBreak(port)
     *
     * @this {BusX80}
     * @param {number} [port]
     * @returns {boolean} true if break on port output enabled, false if disabled
     */
    addPortOutputBreak(port)
    {
        if (port === undefined) {
            this.fPortOutputBreakAll = !this.fPortOutputBreakAll;
            return this.fPortOutputBreakAll;
        }
        if (this.aPortOutputNotify[port] === undefined) {
            this.aPortOutputNotify[port] = [null, false];
        }
        this.aPortOutputNotify[port][1] = !this.aPortOutputNotify[port][1];
        return this.aPortOutputNotify[port][1];
    }

    /**
     * addPortOutputNotify(start, end, fn)
     *
     * Add a port output-notification handler to the list of such handlers.
     *
     * @this {BusX80}
     * @param {number} start port address
     * @param {number} end port address
     * @param {function(number,number)} fn is called with the port and IP values at the time of the output
     */
    addPortOutputNotify(start, end, fn)
    {
        if (fn !== undefined) {
            for (let port = start; port <= end; port++) {
                if (this.aPortOutputNotify[port] !== undefined) {
                    Component.warning("Output port " + StrLib.toHexWord(port) + " already registered");
                    continue;
                }
                this.aPortOutputNotify[port] = [fn, false];
                if (MAXDEBUG) this.printf(MESSAGE.LOG, "addPortOutputNotify(%#06x)\n", port);
            }
        }
    }

    /**
     * addPortOutputTable(component, table, offset)
     *
     * Add port output-notification handlers from the specified table (a batch version of addPortOutputNotify)
     *
     * @this {BusX80}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offset] is an optional port offset
     */
    addPortOutputTable(component, table, offset)
    {
        if (offset === undefined) offset = 0;
        if (table) {
            for (let port in table) {
                this.addPortOutputNotify(+port + offset, +port + offset, table[port].bind(component));
            }
        }
    }

    /**
     * addPortOutputWidth(port, size)
     *
     * By default, all output ports are 1 byte wide; ports that are wider must call this function.
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     */
    addPortOutputWidth(port, size)
    {
        this.aPortOutputWidth[port] = size;
    }

    /**
     * checkPortOutputNotify(port, size, data, addrIP)
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @param {number} [addrIP] is the IP value at the time of the output
     */
    checkPortOutputNotify(port, size, data, addrIP)
    {
        let shift = 0;

        while (size > 0) {

            let aNotify = this.aPortOutputNotify[port];
            let sizePort = this.aPortOutputWidth[port] || 1;
            let maskPort = (sizePort == 1? 0xff : (sizePort == 2? 0xffff : -1));
            let dataPort = (data >>>= shift) & maskPort;

            /*
             * TODO: We need to decide what to do about 8-bit I/O to a 16-bit port (ditto for 16-bit I/O
             * to a 32-bit port).  We probably should pass the size through to the aNotify[0] handler,
             * and let it decide what to do, but I don't feel like changing all the I/O handlers right now.
             * The good news, at least, is that the 8-bit handlers would not have to do anything special.
             * This assert will warn us if this is a pressing need.
             */
            this.assert(size >= sizePort);

            if (aNotify !== undefined) {
                if (aNotify[0]) {
                    aNotify[0](port, dataPort, addrIP);
                }
                if (DEBUGGER && this.dbg && this.fPortOutputBreakAll != aNotify[1]) {
                    this.dbg.checkPortOutput(port, size, dataPort);
                }
            }
            else {
                if (DEBUGGER && this.dbg) {
                    this.dbg.messageIO(this, port, dataPort, addrIP);
                    if (this.fPortOutputBreakAll) this.dbg.checkPortOutput(port, size, dataPort);
                }
            }

            shift += (sizePort << 3);
            port += sizePort;
            size -= sizePort;
        }
        this.assert(!size);
    }

    /**
     * removePortInputNotify(start, end)
     *
     * Remove port input-notification handler(s) (to be ENABLED later if needed)
     *
     * @this {BusX80}
     * @param {number} start address
     * @param {number} end address
     *
     removePortInputNotify(start, end)
     {
         for (let port = start; port < end; port++) {
             if (this.aPortInputNotify[port]) {
                 delete this.aPortInputNotify[port];
             }
         }
     }
     */

    /**
     * removePortOutputNotify(start, end)
     *
     * Remove port output-notification handler(s) (to be ENABLED later if needed)
     *
     * @this {BusX80}
     * @param {number} start address
     * @param {number} end address
     *
     removePortOutputNotify(start, end)
     {
         for (let port = start; port < end; port++) {
             if (this.aPortOutputNotify[port]) {
                 delete this.aPortOutputNotify[port];
             }
         }
     }
     */

    /**
     * reportError(op, addr, size, fQuiet)
     *
     * @this {BusX80}
     * @param {number} op
     * @param {number} addr
     * @param {number} size
     * @param {boolean} [fQuiet] (true if any error should be quietly logged)
     * @returns {boolean} false
     */
    reportError(op, addr, size, fQuiet)
    {
        this.printf(fQuiet? MESSAGE.NONE : MESSAGE.ERROR, "Memory block error (%d: %#x,%#x)\n", op, addr, size);
        return false;
    }
}
