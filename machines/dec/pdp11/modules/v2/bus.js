/**
 * @fileoverview Implements the PDP-11 Bus component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import MemoryPDP11 from "./memory.js";
import MESSAGE from "./message.js";
import StrLib from "../../../../modules/v2/strlib.js";
import UsrLib from "../../../../modules/v2/usrlib.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import { DEBUGGER, MAXDEBUG, PDP11, WORDBUS } from "./defines.js";

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
var BlockInfoPDP11 = /** @type {BlockInfo} */ (UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3}));

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
var BusInfoPDP11;

/**
 * @class BusPDP11
 * @unrestricted
 */
export default class BusPDP11 extends Component {
    /**
     * BusPDP11(parmsBus, cpu, dbg)
     *
     * The BusPDP11 component manages physical memory and I/O address spaces.
     *
     * The BusPDP11 component has no UI elements, so it does not require an init() handler,
     * but it still inherits from the Component class and must be allocated like any
     * other device component.  It's currently allocated by the Computer's init() handler,
     * which then calls the initBus() method of all the other components.
     *
     * For memory beyond the simple needs of the ROM and RAM components (ie, memory-mapped
     * devices), the address space must still be allocated through the BusPDP11 component via
     * addMemory().  If the component needs something more than simple read/write storage,
     * it must provide a custom controller.
     *
     * @param {Object} parmsBus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    constructor(parmsBus, cpu, dbg)
    {
        super("Bus", parmsBus, MESSAGE.BUS);

        this.cpu = cpu;
        this.dbg = dbg;

        /*
         * Supported values for nBusWidth are 16 (default), 18, and 22.  This represents the maximum size
         * of the bus for the life of the machine, regardless what memory management mode the CPU has enabled.
         */
        this.nBusWidth = +parmsBus['busWidth'] || 16;

        /*
         * Compute all BusPDP11 memory block parameters now, based on the width of the bus.
         *
         * Note that all PCjs machines divide their address space into blocks, using a block size appropriate for
         * the machine's bus width.  This allows us to efficiently allocate the entire address space, by reusing blocks
         * as appropriate, and to define to different address behaviors on a block-granular level.
         *
         * For PDPjs machines, the ideal block size is 8Kb (IOPAGE_LENGTH), the size of the IOPAGE on all PDP-11 machines;
         * as a result, our IOController functions assume that all incoming offsets are within a single 8Kb block.
         */
        this.addrTotal = 1 << this.nBusWidth;
        this.nBusMask = (this.addrTotal - 1);
        this.nBlockSize = BusPDP11.IOPAGE_LENGTH;
        this.nBlockShift = Math.log2(this.nBlockSize);      // ES6 ALERT (alternatively: Math.log(this.nBlockSize) / Math.LN2)
        this.nBlockLen = this.nBlockSize >> 2;
        this.nBlockLimit = this.nBlockSize - 1;
        this.nBlockTotal = (this.addrTotal / this.nBlockSize) | 0;
        this.nBlockMask = this.nBlockTotal - 1;
        this.assert(this.nBlockMask <= BlockInfoPDP11.num.mask);

        /*
         * aIOHandlers is an array (ie, a hash) of I/O notification handlers, indexed by address, where each
         * entry contains an array:
         *
         *      [0]: readByte(addr)
         *      [1]: writeByte(b, addr)
         *      [2]: readWord(addr)
         *      [3]: writeWord(w, addr)
         *
         * Each of these 4-element arrays are similar to the memory access arrays assigned to entire Memory
         * blocks, but these handlers generally target a specific address (or handful of addresses), while
         * Memory access handlers must service the entire block; see the setAccess() function in the Memory
         * component for details.
         *
         * Finally, for debugging purposes, if an I/O address has a symbolic name and message category,
         * they will be saved here:
         *
         *      [4]: symbolic name of I/O address
         *      [5]: message category
         *
         * UPDATE: The Debugger wants to piggy-back on these arrays to indicate addresses for which it wants
         * notification.  In those cases, the following additional element will be set:
         *
         *      [6]: true to break on I/O, false to ignore I/O
         *
         * The false case is important if fIOBreakAll is set, because it allows the Debugger to selectively
         * ignore specific addresses.
         */
        this.aIOHandlers = [];
        this.fIOBreakAll = false;
        this.nDisableFaults = 0;
        this.fFault = false;

        /*
         * Array of RESET notification handlers registered by Device components.
         */
        this.afnReset = [];

        /*
         * Before we can add any memory blocks that declare our component as a custom memory controller,
         * we must initialize the array that the getControllerAccess() method supplies to the Memory component.
         */
        this.afnIOPage = [
            BusPDP11.IOController.readByte,
            BusPDP11.IOController.writeByte,
            BusPDP11.IOController.readWord,
            BusPDP11.IOController.writeWord
        ];

        /*
         * Define all the properties to be initialized by initMemory()
         */
        this.aBusBlocks = this.aMemBlocks = [];
        this.iBlockIOPageBus = this.iBlockIOPageMem = 0;
        this.addrIOPage = this.nIOPageRange = this.nMemMask = 0;

        /*
         * We're ready to allocate empty Memory blocks to span the entire physical address space, including the
         * initial location of the IOPAGE.
         */
        this.initMemory();

        this.setReady();
    }

    /**
     * initMemory()
     *
     * Allocate enough (empty) Memory blocks to span the entire physical address space.
     *
     * Note that we now maintain two parallel arrays of these Memory blocks: aBusBlocks is for use by
     * devices (or any component using the "direct" interfaces), while aMemBlocks is for use by the CPU.
     *
     * Whereas the Bus memory map is fixed at init time, the CPU's memory map will vary depending on MMU
     * settings.  The CPU will call setIOPageRange() as needed to update the range of addressible memory,
     * which in turn will determine where the IOPAGE can be accessed.
     *
     * @this {BusPDP11}
     */
    initMemory()
    {
        var block = new MemoryPDP11(this);
        block.copyBreakpoints(this.dbg);

        this.aBusBlocks = new Array(this.nBlockTotal);
        this.aMemBlocks = new Array(this.nBlockTotal);
        for (var iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            this.aBusBlocks[iBlock] = this.aMemBlocks[iBlock] = block;
        }
        /*
         * NOTE: Don't confuse the Bus addrIOPage with the CPU's addrIOPage; ours is fixed,
         * based on the machine's Bus width, whereas the CPU's varies according to the MMU setting.
         */
        this.addrIOPage = this.addrTotal - BusPDP11.IOPAGE_LENGTH;
        this.addMemory(this.addrIOPage, BusPDP11.IOPAGE_LENGTH, MemoryPDP11.TYPE.CONTROLLER, this);

        this.iBlockIOPageBus = (this.addrIOPage & this.nBusMask) >>> this.nBlockShift;
        this.iBlockIOPageMem = this.iBlockIOPageBus;

        this.nIOPageRange = 0;
        this.nMemMask = this.nBusMask;
    }

    /**
     * setIOPageRange(nRange)
     *
     * This function is responsible for syncing the CPU memory map (aMemBlocks) with the Bus memory map (aBusBlocks)
     * and then updating the location of the IOPAGE within the CPU's memory map.  The location of the IOPAGE is always
     * fixed at the top of the Bus address space, but it moves (logically) within the CPU's address space according
     * to the CPU's current MMU settings, which nRange is a reflection of.
     *
     * @this {BusPDP11}
     * @param {number} nRange (16, 18 or 22; 0 removes the IOPAGE altogether)
     */
    setIOPageRange(nRange)
    {
        if (nRange != this.nIOPageRange) {
            for (var iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
                this.aMemBlocks[iBlock] = this.aBusBlocks[iBlock];
            }
            this.nIOPageRange = 0;
            this.nMemMask = this.nBusMask;
            if (nRange) {
                this.nIOPageRange = nRange;
                var addr = (1 << nRange);
                this.nMemMask = (addr - 1);
                addr -= BusPDP11.IOPAGE_LENGTH;
                this.iBlockIOPageMem = (addr & this.nMemMask) >>> this.nBlockShift;
                this.aMemBlocks[this.iBlockIOPageMem] = this.aBusBlocks[this.iBlockIOPageBus];
            }
        }
    }

    /**
     * getControllerBuffer(addr)
     *
     * Our Bus component also acts as custom memory controller for the IOPAGE, so it must also provide this function.
     *
     * @this {BusPDP11}
     * @param {number} addr
     * @returns {Array} containing the buffer (and the offset within that buffer that corresponds to the requested block)
     */
    getControllerBuffer(addr)
    {
        /*
         * No buffer is required for the IOPAGE; all accesses go to registered I/O handlers or to fault().
         */
        return [null, 0];
    }

    /**
     * getControllerAccess()
     *
     * Our Bus component also acts as custom memory controller for the IOPAGE, so it must also provide this function.
     *
     * @this {BusPDP11}
     * @returns {Array.<function()>}
     */
    getControllerAccess()
    {
        return this.afnIOPage;
    }

    /**
     * getWidth()
     *
     * @this {BusPDP11}
     * @returns {number}
     */
    getWidth()
    {
        return this.nBusWidth;
    }

    /**
     * reset()
     *
     * Call all registered reset() handlers.
     *
     * @this {BusPDP11}
     */
    reset()
    {
        for (var i = 0; i < this.afnReset.length; i++) {
            this.afnReset[i]();
        }
        this.setIOPageRange(16);
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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
     * @this {BusPDP11}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        return this.restoreMemory(data[0]);
    }

    /**
     * addMemory(addr, size, type, controller)
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
     * Even so, BusPDP11 memory management does NOT provide a general-purpose heap.  Most memory
     * allocations occur during machine initialization and never change.  In particular, there
     * is NO support for removing partial-block allocations.
     *
     * Each Memory block keeps track of a start address (addr) and length (used), indicating
     * the used space within the block; any free space that precedes or follows that used space
     * can be allocated later, by simply extending the beginning or ending of the previously used
     * space.  However, any holes that might have existed between the original allocation and an
     * extension are subsumed by the extension.
     *
     * @this {BusPDP11}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the MemoryPDP11.TYPE constants
     * @param {Object} [controller] is an optional memory controller component
     * @returns {boolean} true if successful, false if not
     */
    addMemory(addr, size, type, controller)
    {
        var addrNext = addr;
        var sizeLeft = size;
        var iBlock = addrNext >>> this.nBlockShift;

        while (sizeLeft > 0 && iBlock < this.aBusBlocks.length) {

            var block = this.aBusBlocks[iBlock];
            var addrBlock = iBlock * this.nBlockSize;
            var sizeBlock = this.nBlockSize - (addrNext - addrBlock);
            if (sizeBlock > sizeLeft) sizeBlock = sizeLeft;

            /*
             * addMemory() will now happily replace an existing block when a memory controller is specified;
             * this is a work-around to make life easier for setIOPageRange(), which otherwise would have to call
             * removeMemory() first, which would just waste time and memory allocating more (empty) blocks.
             */
            if (!controller && block && block.size) {
                if (block.type == type /* && block.controller == controller */) {
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
                return this.reportError(BusPDP11.ERROR.RANGE_INUSE, addrNext, sizeLeft);
            }

            var blockNew = new MemoryPDP11(this, addrNext, sizeBlock, this.nBlockSize, type, controller);
            blockNew.copyBreakpoints(this.dbg, block);
            this.aBusBlocks[iBlock++] = blockNew;

            addrNext = addrBlock + this.nBlockSize;
            sizeLeft -= sizeBlock;
        }

        if (sizeLeft <= 0) {
            this.printf(MESSAGE.STATUS, "Added %dKb %s at %o\n", (size >> 10), MemoryPDP11.TYPE_NAMES[type], addr);
            return true;
        }

        return this.reportError(BusPDP11.ERROR.RANGE_INVALID, addr, size);
    }

    /**
     * cleanMemory(addr, size)
     *
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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
                info.aBlocks.push(/** @type {BlockInfo} */ (UsrLib.initBitFields(BlockInfoPDP11, iBlock, 0, 0, block.type)));
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
     * @this {BusPDP11}
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
                var blockNew = new MemoryPDP11(this, addr);
                blockNew.copyBreakpoints(this.dbg, blockOld);
                this.aBusBlocks[iBlock++] = blockNew;
                addr = iBlock * this.nBlockSize;
                size -= this.nBlockSize;
            }
            return true;
        }
        return this.reportError(BusPDP11.ERROR.RANGE_INVALID, addr, size);
    }

    /**
     * getMemoryBlocks(addr, size)
     *
     * @this {BusPDP11}
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
     * setMemoryAccess(addr, size, afn, fQuiet)
     *
     * Updates the access functions in every block of the specified address range.  Since the only components
     * that should be dynamically modifying the memory access functions are those that use addMemory() with a custom
     * memory controller, we require that the block(s) being updated do in fact have a controller.
     *
     * @this {BusPDP11}
     * @param {number} addr
     * @param {number} size
     * @param {Array.<function()>} [afn]
     * @param {boolean} [fQuiet] (true if any error should be quietly logged)
     * @returns {boolean} true if successful, false if not
     */
    setMemoryAccess(addr, size, afn, fQuiet)
    {
        if (!(addr & this.nBlockLimit) && size && !(size & this.nBlockLimit)) {
            var iBlock = addr >>> this.nBlockShift;
            while (size > 0) {
                var block = this.aBusBlocks[iBlock];
                if (!block.controller) {
                    return this.reportError(BusPDP11.ERROR.NO_CONTROLLER, addr, size, fQuiet);
                }
                block.setAccess(afn, true);
                size -= this.nBlockSize;
                iBlock++;
            }
            return true;
        }
        return this.reportError(BusPDP11.ERROR.RANGE_INVALID, addr, size);
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
     * @this {BusPDP11}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @param {Array} aBlocks as returned by getMemoryBlocks()
     * @param {number} [type] is one of the MemoryPDP11.TYPE constants
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
                var blockNew = new MemoryPDP11(this, addr);
                blockNew.clone(block, type, this.dbg);
                block = blockNew;
            }
            this.aBusBlocks[iBlock++] = block;
            size -= this.nBlockSize;
        }
    }

    /**
     * getByte(addr)
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @returns {number} byte (8-bit) value at that address
     */
    getByte(addr)
    {
        return this.aMemBlocks[(addr & this.nMemMask) >>> this.nBlockShift].readByte(addr & this.nBlockLimit, addr);
    }

    /**
     * getWord(addr)
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @returns {number} word (16-bit) value at that address
     */
    getWord(addr)
    {
        var off = addr & this.nBlockLimit;
        var iBlock = (addr & this.nMemMask) >>> this.nBlockShift;
        if (!WORDBUS && off == this.nBlockLimit) {
            return this.aMemBlocks[iBlock++].readByte(off, addr) | (this.aMemBlocks[iBlock & this.nBlockMask].readByte(0, addr + 1) << 8);
        }
        return this.aMemBlocks[iBlock].readWord(off, addr);
    }

    /**
     * setByte(addr, b)
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @param {number} b is the byte (8-bit) value to write
     */
    setByte(addr, b)
    {
        this.assert(!(b & ~0xff));
        this.aMemBlocks[(addr & this.nMemMask) >>> this.nBlockShift].writeByte(addr & this.nBlockLimit, b, addr);
    }

    /**
     * setWord(addr, w)
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @param {number} w is the word (16-bit) value to write
     */
    setWord(addr, w)
    {
        var off = addr & this.nBlockLimit;
        var iBlock = (addr & this.nMemMask) >>> this.nBlockShift;
        if (!WORDBUS && off == this.nBlockLimit) {
            this.aMemBlocks[iBlock++].writeByte(off, w & 0xff, addr);
            this.aMemBlocks[iBlock & this.nBlockMask].writeByte(0, (w >> 8) & 0xff, addr + 1);
            return;
        }
        this.aMemBlocks[iBlock].writeWord(off, w, addr);
    }

    /**
     * getBlockDirect(addr)
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @returns {MemoryPDP11}
     */
    getBlockDirect(addr)
    {
        return this.aBusBlocks[(addr & this.nBusMask) >>> this.nBlockShift];
    }

    /**
     * getByteDirect(addr)
     *
     * This is used for device I/O and Debugger physical memory requests, not the CPU.
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @returns {number} byte (8-bit) value at that address
     */
    getByteDirect(addr)
    {
        this.fFault = false;
        this.nDisableFaults++;
        var b = this.getBlockDirect(addr).readByteDirect(addr & this.nBlockLimit, addr);
        this.nDisableFaults--;
        return b;
    }

    /**
     * getWordDirect(addr)
     *
     * This is used for device I/O and Debugger physical memory requests, not the CPU.
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @returns {number} word (16-bit) value at that address
     */
    getWordDirect(addr)
    {
        var w;
        this.fFault = false;
        this.nDisableFaults++;
        var off = addr & this.nBlockLimit;
        var block = this.getBlockDirect(addr);
        if (!WORDBUS && off == this.nBlockLimit) {
            w = block.readByteDirect(off, addr) | (this.getBlockDirect(addr + 1).readByteDirect(0, addr + 1) << 8);
        } else {
            w = block.readWordDirect(off, addr);
        }
        this.nDisableFaults--;
        return w;
    }

    /**
     * setByteDirect(addr, b)
     *
     * This is used for device I/O and Debugger physical memory requests, not the CPU.
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @param {number} b is the byte (8-bit) value to write (we truncate it to 8 bits to be safe)
     */
    setByteDirect(addr, b)
    {
        this.fFault = false;
        this.nDisableFaults++;
        this.getBlockDirect(addr).writeByteDirect(addr & this.nBlockLimit, b & 0xff, addr);
        this.nDisableFaults--;
    }

    /**
     * setWordDirect(addr, w)
     *
     * This is used for device I/O and Debugger physical memory requests, not the CPU.
     *
     * @this {BusPDP11}
     * @param {number} addr is a physical address
     * @param {number} w is the word (16-bit) value to write (we truncate it to 16 bits to be safe)
     */
    setWordDirect(addr, w)
    {
        this.fFault = false;
        this.nDisableFaults++;
        var off = addr & this.nBlockLimit;
        var block = this.getBlockDirect(addr);
        if (!WORDBUS && off == this.nBlockLimit) {
            block.writeByteDirect(off, w & 0xff, addr);
            this.getBlockDirect(addr + 1).writeByteDirect(0, (w >> 8) & 0xff, addr + 1);
        } else {
            block.writeWordDirect(off, w & 0xffff, addr);
        }
        this.nDisableFaults--;
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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
            if (fAll && block.type != MemoryPDP11.TYPE.ROM || block.fDirty || block.fDirtyEver) {
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
     * @this {BusPDP11}
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
     * @this {BusPDP11}
     * @param {number} type is one of the MemoryPDP11.TYPE constants
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
     * addIOHandlers(start, end, fnReadByte, fnWriteByte, fnReadWord, fnWriteWord, message, sName)
     *
     * Add I/O notification handlers to the master list (aIOHandlers).  The start and end addresses are typically
     * relative to the starting IOPAGE address, but they can also be absolute; we simply mask all addresses with
     * IOPAGE_MASK.
     *
     * CAVEATS: If a conflict is reported, a partial set of handlers may still have been added.  There is no mechanism
     * for removing handlers, since this is considered an initialization function.  And finally, when a range of addresses
     * is used, each successive address is advanced by 2, so if you really want to add a handler for a "+1" (usually odd)
     * address, then you must add it individually.  Failure to do is not necessarily fatal, because the IOController's
     * fallback behavior for an odd address is to call the byte handler for the preceding even address, but the byte
     * handler must be prepared for that (the handlers installed by ROM component's addROM() function are a good example).
     *
     * @this {BusPDP11}
     * @param {number} start address
     * @param {number} end address
     * @param {function(number)|null|undefined} fnReadByte
     * @param {function(number,number)|null|undefined} fnWriteByte
     * @param {function(number)|null|undefined} fnReadWord
     * @param {function(number,number)|null|undefined} fnWriteWord
     * @param {number} [message]
     * @param {string} [sName]
     * @returns {boolean} (true if entire range successfully registered, false if any conflicts)
     */
    addIOHandlers(start, end, fnReadByte, fnWriteByte, fnReadWord, fnWriteWord, message, sName)
    {
        var index = (start == end? -1 : 0);
        for (var addr = start; addr <= end; addr += 2) {
            var off = addr & BusPDP11.IOPAGE_MASK;
            if (this.aIOHandlers[off] !== undefined) {
                Component.warning("I/O address already registered: " + StrLib.toHexLong(addr));
                return false;
            }
            var s = sName || "unknown";
            if (s && index >= 0) s += index++;
            this.aIOHandlers[off] = [fnReadByte, fnWriteByte, fnReadWord, fnWriteWord, s, message || MESSAGE.BUS, false];
            if (MAXDEBUG) this.printf(MESSAGE.LOG, "addIOHandlers(%#010x)\n", addr);
        }
        return true;
    }

    /**
     * addIOTable(component, table, offReg)
     *
     * Add I/O notification handlers from the specified table (a batch version of addIOHandlers).
     *
     * @this {BusPDP11}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offReg] (optional offset to add to all register addresses)
     * @returns {boolean} (true if entire range successfully registered, false if any conflicts)
     */
    addIOTable(component, table, offReg)
    {
        for (var reg in table) {
            var addr = +reg + (offReg || 0);
            var afn = table[reg];

            /*
             * Don't install (ie, ignore) handlers for I/O addresses that are defined with a model number
             * that is "greater than" than the current model.
             */
            if (afn[6] && afn[6] > this.cpu.model) continue;

            var fnReadByte = afn[0]? afn[0].bind(component) : null;
            var fnWriteByte = afn[1]? afn[1].bind(component) : null;
            var fnReadWord = afn[2]? afn[2].bind(component) : null;
            var fnWriteWord = afn[3]? afn[3].bind(component) : null;

            /*
             * As discussed in the IOController comments below, when handlers are being registered for these
             * BYTE-granular UNIBUS addresses, we must install custom fallback handlers for all BYTE accesses.
             */
            if (addr >= PDP11.UNIBUS.R0SET0 && addr <= PDP11.UNIBUS.R6USER) {
                if (!fnReadByte && fnReadWord) {
                    fnReadByte = function readByteIORegister(readWord) {
                        return function(addr) {
                            return readWord(addr) & 0xff;
                        }.bind(component);
                    }(fnReadWord);
                }
                if (!fnWriteByte && fnWriteWord) {
                    fnWriteByte = function writeByteIORegister(writeWord) {
                        return function(data, addr) {
                            return writeWord(data, addr);
                        }.bind(component);
                    }(fnWriteWord);
                }
            }

            var sReg = afn[4];
            var nRegs = afn[5] || 1;

            for (var iReg = 0; iReg < nRegs; iReg++, addr += 2) {
                if (sReg && nRegs > 1) sReg = afn[4] + iReg;
                if (!this.addIOHandlers(addr, addr, fnReadByte, fnWriteByte, fnReadWord, fnWriteWord, afn[7] || component.bitsMessage, sReg || component.idComponent)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * getAddrInfo(addr)
     *
     * Determine if the physical address is a known IOPAGE address, and return information about it (ie, the name).
     *
     * @this {BusPDP11}
     * @param {number} addr (physical)
     * @returns {string|null}
     */
    getAddrInfo(addr)
    {
        var sName = null;
        if (addr >= this.addrIOPage) {
            var off = addr & BusPDP11.IOPAGE_MASK;
            var afn = this.aIOHandlers[off];
            if (afn) sName = afn[BusPDP11.IOHANDLER.REG_NAME];
        }
        return sName;
    }

    /**
     * getAddrByName(sName)
     *
     * Determine if the specified name has a corresponding physical address.
     *
     * @this {BusPDP11}
     * @param {string} sName
     * @returns {number|null}
     */
    getAddrByName(sName)
    {
        sName = sName.toUpperCase();
        for (var i in this.aIOHandlers) {
            var off = +i;
            var afn = this.aIOHandlers[off];
            if (afn[BusPDP11.IOHANDLER.REG_NAME] == sName) {
                return this.addrIOPage + off;
            }
        }
        return null;
    }

    /**
     * addResetHandler(fnReset)
     *
     * @this {BusPDP11}
     * @param {function()} fnReset
     */
    addResetHandler(fnReset)
    {
        this.afnReset.push(fnReset);
    }

    /**
     * fault(addr, err, access)
     *
     * Bus interface for signaling alignment errors, invalid memory, etc.
     *
     * @this {BusPDP11}
     * @param {number} addr
     * @param {number} [err]
     * @param {number} [access] (for diagnostic purposes only)
     */
    fault(addr, err, access)
    {
        this.fFault = true;
        if (!this.nDisableFaults) {
            if (DEBUGGER && this.dbg) {
                this.dbg.printf(MESSAGE.FAULT + MESSAGE.ADDR, "memory fault (%d) on %s\n", access, this.dbg.toStrBase(addr));
            }
            if (err) this.cpu.regErr |= err;
            this.cpu.trap(PDP11.TRAP.BUS, 0, addr);
        }
    }

    /**
     * checkFault()
     *
     * This also serves as a clearFault() function.
     *
     * @this {BusPDP11}
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
     * @this {BusPDP11}
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

BusPDP11.IOPAGE_16BIT   = 0x00E000; /*000160000*/               // eg, PDP-11/20
BusPDP11.IOPAGE_18BIT   = 0x03E000; /*000760000*/               // eg, PDP-11/45
BusPDP11.IOPAGE_22BIT   = 0x3FE000; /*017760000*/               // eg, PDP-11/70
BusPDP11.IOPAGE_LENGTH  = 0x002000;                             // ie, 8Kb
BusPDP11.IOPAGE_MASK    = BusPDP11.IOPAGE_LENGTH - 1;

BusPDP11.MASK_18BIT     = 0x03FFFF; /*000777777*/

BusPDP11.UNIBUS_22BIT   = 0x3C0000; /*017000000*/
BusPDP11.MASK_22BIT     = 0x3FFFFF; /*017777777*/

BusPDP11.ERROR = {
    RANGE_INUSE:        1,
    RANGE_INVALID:      2,
    NO_CONTROLLER:      3
};

/*
 * Every entry in the aIOHandlers table is an array with the following indexes:
 */
BusPDP11.IOHANDLER = {
    READ_BYTE:          0,
    WRITE_BYTE:         1,
    READ_WORD:          2,
    WRITE_WORD:         3,
    REG_NAME:           4,
    MSG_CATEGORY:       5,
    DBG_BREAK:          6
};

/*
 * These are our custom IOController functions for all IOPAGE accesses.  They look up the IOPAGE
 * offset in the aIOHandlers table, and if an entry exists, they use the appropriate IOHANDLER indexes
 * (above) to locate the registered read/write handlers.  If no handler is found, then fault() will
 * be called, triggering a trap -- unless traps are disabled because direct access was requested
 * (eg, by the Debugger).
 *
 * Handlers receive the original IOPAGE address that was used, although in most cases, it's ignored,
 * because most handlers usually handle only one address.  Only handlers used for a range of addresses
 * must pay attention to it.
 *
 * Note that these functions include fallbacks for byte reads when only word read handlers exist (by
 * masking or shifting the result) and for word reads if only byte handlers exist (by combining bytes).
 * Fallbacks for writes exist, too, but they are slightly more complicated, because a byte write using
 * a word write handler requires reading the word first, and then updating the appropriate byte within
 * that word.
 *
 * Those fallbacks may not always be appropriate; for example, byte writes to some device registers
 * must be zero-extended to update the entire word.  For those cases, the fallback's "preliminary" read
 * is issued with a fPreWrite flag so that the handler can distinguish a normal read from one of these
 * preliminary reads (aka read-before-write), and return an appropriate value for the update (eg, zero).
 *
 * If none of these fallback behaviors are appropriate, the device has a simple recourse: register
 * handlers for all possible addresses and sizes.
 *
 * Unlike regular Memory blocks, IOPAGE accesses permit word accesses on ODD addresses; that works
 * just fine by registering WORD handlers for the appropriate ODD addresses.  For BYTE accesses, it
 * depends.  For CPU register addresses, addIOHandlers() installs special byte handlers that perform
 * either a simple word read or write.  Other addresses must be handled on a case-by-case basis.
 *
 * TODO: Another small potential improvement would be for addIOHandlers() to install fallbacks for ALL
 * missing handlers, in both the ODD and EVEN cases, so there's never a need to check each function index
 * before calling it.  However, since there's no avoiding checking aIOHandlers[off] (unless we FULLY populate
 * the aIOHandlers array), and since these I/O accesses should be pretty infrequent relative to all other
 * memory accesses, the benefit seems pretty minimal.  Plus, all our fallback assumptions still need to be
 * verified, so let's wait until that's done before we start optimizing this code.
 */
BusPDP11.IOController = {
    /**
     * readByte(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByte: function(off, addr)
    {
        var b = -1;
        var bus = this.controller;
        var afn = bus.aIOHandlers[off];

        /*
         * Since addr is primarily used to advise an I/O handler of the target IOPAGE address, and since we don't want
         * our handlers to worry about the current IOPAGE location, we truncate addr to 16 bits (the IOPAGE's lowest location).
         */
        var addrMasked = addr & 0xffff;

        if (afn) {
            if (afn[BusPDP11.IOHANDLER.READ_BYTE]) {
                b = afn[BusPDP11.IOHANDLER.READ_BYTE](addrMasked);
            } else if (afn[BusPDP11.IOHANDLER.READ_WORD]) {
                if (!(addrMasked & 0x1)) {
                    b = afn[BusPDP11.IOHANDLER.READ_WORD](addrMasked) & 0xff;
                } else {
                    b = afn[BusPDP11.IOHANDLER.READ_WORD](addrMasked & ~0x1) >> 8;
                }
            }
        } else if (addrMasked & 0x1) {
            afn = bus.aIOHandlers[off & ~0x1];
            if (afn) {
                if (afn[BusPDP11.IOHANDLER.READ_WORD]) {
                    b = afn[BusPDP11.IOHANDLER.READ_WORD](addrMasked & ~0x1) >> 8;
                } else if (afn[BusPDP11.IOHANDLER.READ_BYTE]) {
                    /*
                     * WARNING: This is an unusual fall-back, because we're trying to read an ODD byte
                     * access using a BYTE handler registered for EVEN bytes.  But if that's all we've got,
                     * then presumably the handler is prepared for it (certainly, readROMByte() is).
                     */
                    b = afn[BusPDP11.IOHANDLER.READ_BYTE](addrMasked);
                }
            }
        }
        if (b >= 0) {
            if (DEBUGGER && this.dbg) {
                this.dbg.printf(MESSAGE.BUS + afn[BusPDP11.IOHANDLER.MSG_CATEGORY], "%s.readByte(%s): %s\n", afn[BusPDP11.IOHANDLER.REG_NAME], this.dbg.toStrBase(addr), this.dbg.toStrBase(b));
            }
            return b;
        }
        bus.fault(addr, PDP11.CPUERR.TIMEOUT, PDP11.ACCESS.READ_BYTE);
        b = 0xff;
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.BUS, "warning: unconverted read access to byte @%s: %s\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(b));
        }
        return b;
    },

    /**
     * writeByte(off, b, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits)
     * @param {number} addr
     */
    writeByte: function(off, b, addr)
    {
        var w;
        var fWrite = false;
        var bus = this.controller;
        var afn = bus.aIOHandlers[off];

        /*
         * Since addr is primarily used to advise an I/O handler of the target IOPAGE address, and since we don't want
         * our handlers to worry about the current IOPAGE location, we truncate addr to 16 bits (the IOPAGE's lowest location).
         */
        var addrMasked = addr & 0xffff;

        if (afn) {
            /*
             * If a writeByte() handler exists, call it; we're done.
             */
            if (afn[BusPDP11.IOHANDLER.WRITE_BYTE]) {
                afn[BusPDP11.IOHANDLER.WRITE_BYTE](b, addrMasked);
                fWrite = true;
            }
            /*
             * If a writeWord() handler exists, call the readWord() handler first to get the original data
             * (with fPreWrite set to true) and call writeWord() with the new data inserted into the original data.
             */
            else if (afn[BusPDP11.IOHANDLER.WRITE_WORD]) {
                w = afn[BusPDP11.IOHANDLER.READ_WORD]? afn[BusPDP11.IOHANDLER.READ_WORD](addrMasked, true) : 0;
                if (!(addrMasked & 0x1)) {
                    afn[BusPDP11.IOHANDLER.WRITE_WORD]((w & ~0xff) | b, addrMasked);
                    fWrite = true;
                } else {
                    afn[BusPDP11.IOHANDLER.WRITE_WORD]((w & 0xff) | (b << 8), addrMasked & ~0x1);
                    fWrite = true;
                }
            }
        } else if (addrMasked & 0x1) {
            /*
             * If no handler existed, and this address was odd, then perhaps a handler exists for the even address;
             * if so, call the readWord() handler first to get the original data (with fPreWrite set to true) and call
             * writeWord() with the new data inserted into (the high byte of) the original data.
             */
            afn = bus.aIOHandlers[off & ~0x1];
            if (afn) {
                if (afn[BusPDP11.IOHANDLER.WRITE_WORD]) {
                    addrMasked &= ~0x1;
                    w = afn[BusPDP11.IOHANDLER.READ_WORD]? afn[BusPDP11.IOHANDLER.READ_WORD](addrMasked, true) : 0;
                    afn[BusPDP11.IOHANDLER.WRITE_WORD]((w & 0xff) | (b << 8), addrMasked);
                    fWrite = true;
                } else if (afn[BusPDP11.IOHANDLER.WRITE_BYTE]) {
                    /*
                     * WARNING: This is an unusual fall-back, because we're trying to write an ODD byte
                     * access using a BYTE handler registered for EVEN bytes.  But if that's all we've got,
                     * then presumably the handler is prepared for it (certainly, writeROMByte() is).
                     */
                    afn[BusPDP11.IOHANDLER.WRITE_BYTE](b, addrMasked);
                    fWrite = true;
                }
            }
        }
        if (fWrite) {
            if (DEBUGGER && this.dbg) {
                this.dbg.printf(MESSAGE.BUS + afn[BusPDP11.IOHANDLER.MSG_CATEGORY], "%s.writeByte(%s,%s)\n", afn[BusPDP11.IOHANDLER.REG_NAME], this.dbg.toStrBase(addr), this.dbg.toStrBase(b));
            }
            return;
        }
        bus.fault(addr, PDP11.CPUERR.TIMEOUT, PDP11.ACCESS.WRITE_BYTE);
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.BUS, "warning: unconverted write access to byte @%s: %s\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(b));
        }
    },

    /**
     * readWord(off, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readWord: function(off, addr)
    {
        var w = -1;
        var bus = this.controller;
        var afn = bus.aIOHandlers[off];

        /*
         * Since addr is primarily used to advise an I/O handler of the target IOPAGE address, and since we don't want
         * our handlers to worry about the current IOPAGE location, we truncate addr to 16 bits (the IOPAGE's lowest location).
         */
        var addrMasked = addr & 0xffff;

        if (afn) {
            if (afn[BusPDP11.IOHANDLER.READ_WORD]) {
                w = afn[BusPDP11.IOHANDLER.READ_WORD](addrMasked);
            } else if (afn[BusPDP11.IOHANDLER.READ_BYTE]) {
                w = afn[BusPDP11.IOHANDLER.READ_BYTE](addrMasked) | (afn[BusPDP11.IOHANDLER.READ_BYTE](addrMasked + 1) << 8);
            }
        }
        if (w >= 0) {
            if (DEBUGGER && this.dbg) {
                this.dbg.printf(MESSAGE.BUS + afn[BusPDP11.IOHANDLER.MSG_CATEGORY], "%s.readWord(%s): %s\n", afn[BusPDP11.IOHANDLER.REG_NAME], this.dbg.toStrBase(addr), this.dbg.toStrBase(w));
            }
            return w;
        }
        bus.fault(addr, PDP11.CPUERR.TIMEOUT, PDP11.ACCESS.READ_WORD);
        w = 0xffff;
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.BUS, "warning: unconverted read access to word @%s: %s\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(w));
        }
        return w;
    },

    /**
     * writeWord(off, w, addr)
     *
     * @this {MemoryPDP11}
     * @param {number} off
     * @param {number} w (which should already be pre-masked to 16 bits)
     * @param {number} addr
     */
    writeWord: function(off, w, addr)
    {
        var fWrite = false;
        var bus = this.controller;
        var afn = bus.aIOHandlers[off];

        /*
         * Since addr is primarily used to advise an I/O handler of the target IOPAGE address, and since we don't want
         * our handlers to worry about the current IOPAGE location, we truncate addr to 16 bits (the IOPAGE's lowest location).
         */
        var addrMasked = addr & 0xffff;

        if (afn) {
            if (afn[BusPDP11.IOHANDLER.WRITE_WORD]) {
                afn[BusPDP11.IOHANDLER.WRITE_WORD](w, addrMasked);
                fWrite = true;
            } else if (afn[BusPDP11.IOHANDLER.WRITE_BYTE]) {
                afn[BusPDP11.IOHANDLER.WRITE_BYTE](w & 0xff, addrMasked);
                afn[BusPDP11.IOHANDLER.WRITE_BYTE](w >> 8, addrMasked + 1);
                fWrite = true;
            }
        }
        if (fWrite) {
            if (DEBUGGER && this.dbg) {
                this.dbg.printf(MESSAGE.BUS + afn[BusPDP11.IOHANDLER.MSG_CATEGORY], "%s.writeWord(%s,%s)\n", afn[BusPDP11.IOHANDLER.REG_NAME], this.dbg.toStrBase(addr), this.dbg.toStrBase(w));
            }
            return;
        }
        bus.fault(addr, PDP11.CPUERR.TIMEOUT, PDP11.ACCESS.WRITE_WORD);
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.BUS, "warning: unconverted write access to word @%s: %s\n", this.dbg.toStrBase(addr), this.dbg.toStrBase(w));
        }
    }
};
