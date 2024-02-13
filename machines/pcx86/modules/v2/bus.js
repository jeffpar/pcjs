/**
 * @fileoverview Implements the PCx86 Bus component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Memoryx86 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import UsrLib from "../../../modules/v2/usrlib.js";
import { BACKTRACK, DEBUGGER, MAXDEBUG, PAGEBLOCKS } from "./defines.js";


/**
 * BusInfo object definition (returned by scanMemory())
 *
 * @typedef {Object} BusInfo
 * @property {number} cbTotal           (total bytes allocated)
 * @property {number} cBlocks           (total Memory blocks allocated)
 * @property {Array.<number>} aBlocks   (array of allocated Memory block numbers)
 */

/**
 * BackTrack object definition
 *
 * @typedef {Object} BackTrack
 * @property {Object} obj   (reference to the source object (eg, ROM object, Sector object))
 * @property {number} off   (the offset within the source object that this object refers to)
 * @property {number} slot  (the slot (+1) in abtObjects which this object currently occupies)
 * @property {number} refs  (the number of memory references, as recorded by writeBackTrack())
 */

/**
 * Think of this Controller class definition as an interface definition, implemented by the Video Card
 * class and the RAM CompaqController class.
 *
 * @class Controller
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export class Controller {
    /**
     * getMemoryAccess()
     *
     * @this {Controller}
     * @returns {Array.<function()>}
     */
    getMemoryAccess()
    {
        return [];
    }

    /**
     * getMemoryBuffer(addr)
     *
     * @this {Controller}
     * @param {number} addr
     * @returns {Array} containing the buffer (and an offset within that buffer)
     */
    getMemoryBuffer(addr)
    {
        return [];
    }
}

/**
 * @class Bus
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Busx86 extends Component {
    /**
     * BackTrack indexes are 31-bit values, where bits 0-8 store an object offset (0-511) and bits 16-30 store
     * an object number (1-32767).  Object number 0 is reserved for dynamic data (ie, data created independent
     * of any source); examples include zero values produced by instructions such as "SUB AX,AX" or "XOR AX,AX".
     * We must special-case instructions like that, because even though AX will almost certainly contain some source
     * data prior to the instruction, the result no longer has any connection to the source.  Similarly, "SBB AX,AX"
     * may produce 0 or -1, depending on carry, but since we don't track the source of individual bits (including the
     * carry flag), AX is now source-less.  TODO: This is an argument for maintaining source info on selected flags,
     * even though it would be rather expensive.
     *
     * The 7 middle bits (9-15) record type and access information, as follows:
     *
     *      bit 15: set to indicate a "data" byte, clear to indicate a "code" byte
     *
     * All bytes start out as "data" bytes; only once they've been executed do they become "code" bytes.  For code
     * bytes, the remaining 6 middle bits (9-14) represent an execution count that starts at 1 (on the byte's initial
     * transition from data to code) and tops out at 63.
     *
     * For data bytes, the remaining middle bits indicate any transformations the data has undergone; eg:
     *
     *      bit 14: ADD/SUB/INC/DEC
     *      bit 13: MUL/DIV
     *      bit 12: OR/AND/XOR/NOT
     *
     * We make no attempt to record the original data or the transformation data, only that the transformation occurred.
     *
     * Other middle bits indicate whether the data was ever read and/or written:
     *
     *      bit 11: READ
     *      bit 10: WRITE
     *
     * Bit 9 is reserved for now.
     */
    static BTINFO = {
        SLOT_MAX:       32768,
        SLOT_SHIFT:     16,
        TYPE_DATA:      0x8000,
        TYPE_ADDSUB:    0x4000,
        TYPE_MULDIV:    0x2000,
        TYPE_LOGICAL:   0x1000,
        TYPE_READ:      0x0800,
        TYPE_WRITE:     0x0400,
        TYPE_COUNT_INC: 0x0200,
        TYPE_COUNT_MAX: 0x7E00,
        TYPE_MASK:      0xFE00,
        TYPE_SHIFT:     9,
        OFF_MAX:        512,
        OFF_MASK:       0x1FF
    };

    static ERROR = {
        ADD_MEM_INUSE:      1,
        ADD_MEM_BADRANGE:   2,
        SET_MEM_NOCTRL:     3,
        SET_MEM_BADRANGE:   4,
        REM_MEM_BADRANGE:   5
    };

    /**
     * This defines the BlockInfo bit fields used by scanMemory() when it creates the aBlocks array.
     */
    static BlockInfo = UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3});

    /**
     * Busx86(cpu, dbg)
     *
     * The Busx86 component manages physical memory and I/O address spaces.
     *
     * The Busx86 component has no UI elements, so it does not require an init() handler,
     * but it still inherits from the Component class and must be allocated like any
     * other device component.  It's currently allocated by the Computer's init() handler,
     * which then calls the initBus() method of all the other components.
     *
     * When initMemory() initializes the entire address space, it also passes aMemBlocks
     * to the CPU object, so that the CPU can perform its own address-to-block calculations
     * (essential, for example, when the CPU enables paging).
     *
     * For memory beyond the simple needs of the ROM and RAM components (ie, memory-mapped
     * devices), the address space must still be allocated through the Busx86 component via
     * addMemory().  If the component needs something more than simple read/write storage,
     * it must provide a controller with getMemoryBuffer() and getMemoryAccess() methods.
     *
     * All port (I/O) operations are defined by external handlers; they register with us,
     * and we manage those registrations and provide support for I/O breakpoints, but the
     * only default I/O behavior we provide is ignoring writes to any unregistered output
     * ports and returning 0xff from any unregistered input ports.
     *
     * @this {Busx86}
     * @param {Object} parmsBus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    constructor(parmsBus, cpu, dbg)
    {
        super("Busx86", parmsBus);

        this.cpu = cpu;
        this.dbg = dbg;

        this.nBusWidth = +parmsBus['busWidth'] || 20;

        /**
         * Compute all Bus memory block parameters, based on the width of the bus.
         *
         * Regarding blockTotal, we want to avoid using block overflow expressions like:
         *
         *      iBlock < this.nBlockTotal? iBlock : 0
         *
         * As long as we know that blockTotal is a power of two (eg, 256 or 0x100, in the case of
         * nBusWidth == 20 and blockSize == 4096), we can define blockMask as (blockTotal - 1) and
         * rewrite the previous expression as:
         *
         *      iBlock & this.nBlockMask
         *
         * Similarly, we mask addresses with busMask to enforce "A20 wrap" on 20-bit buses.
         * For larger buses, A20 wrap can be simulated by either clearing bit 20 of busMask or by
         * changing all the block entries for the 2nd megabyte to match those in the 1st megabyte.
         *
         *      Bus Property        Old hard-coded values (when nBusWidth was always 20)
         *      ------------        ----------------------------------------------------
         *      this.nBusLimit      0xfffff
         *      this.nBusMask       [same as busLimit]
         *      this.nBlockSize     4096
         *      this.nBlockLen      (this.nBlockSize >> 2)
         *      this.nBlockShift    12
         *      this.nBlockLimit    0xfff
         *      this.nBlockTotal    ((this.nBusLimit + this.nBlockSize) / this.nBlockSize) | 0
         *      this.nBlockMask     (this.nBlockTotal - 1) [ie, 0xff]
         *
         * Note that we choose a nBlockShift value (and thus a physical memory block size) based on "buswidth":
         *
         *      Bus Width                       Block Shift     Block Size
         *      ---------                       -----------     ----------
         *      20 bits (1Mb address space):    12              4Kb (256 maximum blocks)
         *      24 bits (16Mb address space):   14              16Kb (1K maximum blocks)
         *      32 bits (4Gb address space);    15              32Kb (128K maximum blocks)
         *
         * The coarser block granularities (ie, 16Kb and 32Kb) may cause problems for certain RAM and/or ROM
         * allocations that are contiguous but are allocated out of order, or that have different controller
         * requirements.  Your choices, for the moment, are either to ensure the allocations are performed in
         * order, or to choose smaller nBlockShift values (at the expense of a generating a larger block array).
         *
         * UPDATE: The above is mostly historical thinking, because the new default block size is 4K (assuming
         * PAGEBLOCKS is set, which it always is now).  We really need the lower granularity for all machines,
         * because the original IBM MDA video card needs to be able to do 4K-granular aliasing.
         */
        this.addrTotal = Math.pow(2, this.nBusWidth);
        this.nBusLimit = this.nBusMask = (this.addrTotal - 1) | 0;
        this.nBlockShift = (PAGEBLOCKS /* && this.nBusWidth == 32 */ || this.nBusWidth <= 20)? 12 : (this.nBusWidth <= 24? 14 : 15);
        this.nBlockSize = 1 << this.nBlockShift;
        this.nBlockLen = this.nBlockSize >> 2;
        this.nBlockLimit = this.nBlockSize - 1;
        this.nBlockTotal = (this.addrTotal / this.nBlockSize) | 0;
        this.nBlockMask = this.nBlockTotal - 1;
        this.assert(this.nBlockMask <= Busx86.BlockInfo.num.mask);

        /**
         * Lists of I/O notification functions: aPortInputNotify and aPortOutputNotify are arrays, indexed by
         * port, of sub-arrays which contain:
         *
         *      [0]: registered function to call for every I/O access
         *
         * The registered function is called with the port address, and if the access was triggered by the CPU,
         * the linear instruction pointer (LIP) at the point of access.
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

        /**
         * By default, all I/O ports are 1 byte wide; ports that are wider must add themselves to one or both of
         * these lists, using addPortInputWidth() and/or addPortOutputWidth().
         */
        this.aPortInputWidth = [];
        this.aPortOutputWidth = [];

        /**
         * Allocate empty Memory blocks to span the entire physical address space.
         */
        this.initMemory();

        if (BACKTRACK) {
            this.abtObjects = [];
            this.cbtDeletions = 0;
            this.ibtLastAlloc = -1;
            this.ibtLastDelete = 0;
        }

        this.setReady();
    }

    /**
     * initMemory()
     *
     * Allocate enough (empty) Memory blocks to span the entire physical address space.
     *
     * @this {Busx86}
     */
    initMemory()
    {
        let block = new Memoryx86();
        block.copyBreakpoints(this.dbg);
        this.aMemBlocks = new Array(this.nBlockTotal);
        for (let iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            this.aMemBlocks[iBlock] = block;
        }
        this.cpu.initMemory(this.aMemBlocks, this.nBlockShift);
        this.cpu.setAddressMask(this.nBusMask);
    }

    /**
     * reset()
     *
     * @this {Busx86}
     */
    reset()
    {
        this.setA20(true);
        if (BACKTRACK) this.ibtLastDelete = 0;
    }

    /**
     * powerUp(data, fRepower)
     *
     * We don't need a powerDown() handler, because for largely historical reasons, our state (including the A20 state)
     * is saved by saveMemory(), which called by the CPU.
     *
     * However, we do need a powerUp() handler, because on resumable machines, the Computer's onReset() function calls
     * everyone's powerUp() handler rather than their reset() handler.
     *
     * TODO: Perhaps Computer should be smarter: if there's no powerUp() handler, then fallback to the reset() handler.
     * In that case, however, we'd either need to remove the powerUp() stub in Component, or detect the existence of the stub.
     *
     * @this {Busx86}
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
     * Even so, Bus memory management does NOT provide a general-purpose heap.  Most memory
     * allocations occur during machine initialization and never change.  In particular, there
     * is NO support for removing partial-block allocations.  Typically, the only region that
     * changes post-initialization is the Video buffer, and only in the EGA/VGA implementation.
     *
     * Each Memory block keeps track of a start address (addr) and length (used), indicating
     * the used space within the block; any free space that precedes or follows that used space
     * can be allocated later, by simply extending the beginning or ending of the previously used
     * space.  However, any holes that might have existed between the original allocation and an
     * extension are subsumed by the extension.
     *
     * @this {Busx86}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the Memoryx86.TYPE constants
     * @param {Controller} [controller] is an optional memory controller component
     * @returns {boolean} true if successful, false if not
     */
    addMemory(addr, size, type, controller)
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
                if (block.type == type && block.controller == controller) {
                    /**
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
                return this.reportError(Busx86.ERROR.ADD_MEM_INUSE, addrNext, sizeLeft);
            }

            let blockNew = new Memoryx86(addrNext, sizeBlock, this.nBlockSize, type, controller);
            blockNew.copyBreakpoints(this.dbg, block);
            this.aMemBlocks[iBlock++] = blockNew;

            addrNext = addrBlock + this.nBlockSize;
            sizeLeft -= sizeBlock;
        }
        if (sizeLeft <= 0) {
            /**
             * If all addMemory() calls happened ONLY during device initialization, the following code would not
             * be necessary; unfortunately, the Video component can add and remove physical memory blocks during video
             * mode changes, so we have to kick out any PAGED blocks that could have references to those physical memory
             * blocks.  If paging isn't enabled (or supported by the current the CPU), this call has no effect.
             *
             * We could handle this case with a little more, um, precision, but Video mode changes aren't frequent enough
             * to warrant it.
             */
            this.cpu.flushPageBlocks();
            if (!this.cpu.isRunning()) {        // allocation messages at "run time" are bit too much
                let kb = Math.round(size / 1024);
                let sb = kb? (kb + "Kb") : (size + " bytes");
                this.printf(MESSAGE.STATUS, "%s %s at 0x%X\n", sb, Memoryx86.TYPE.NAMES[type], addr);
            }
            return true;
        }
        return this.reportError(Busx86.ERROR.ADD_MEM_BADRANGE, addr, size);
    }

    /**
     * cleanMemory(addr, size, fScrub)
     *
     * @this {Busx86}
     * @param {number} addr
     * @param {number} size
     * @param {boolean} [fScrub] (true to "scrub" blocks as well)
     * @returns {boolean} (true if all blocks were clean, false otherwise)
     */
    cleanMemory(addr, size, fScrub)
    {
        let fClean = true;
        let iBlock = addr >>> this.nBlockShift;
        let sizeBlock = this.nBlockSize - (addr & this.nBlockLimit);
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            if (!this.aMemBlocks[iBlock].clean(fScrub)) {
                fClean = false;
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
     * Returns a BusInfo object for the specified address range.
     *
     * @this {Busx86}
     * @param {Object} [info] previous BusInfo, if any
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
                let btmod = (BACKTRACK && block.modBackTrack(false)? 1 : 0);
                info.aBlocks.push(UsrLib.initBitFields(/** @type {BitFields} */ (Busx86.BlockInfo), iBlock, 0, btmod, block.type));
                info.cBlocks++;
            }
            iBlock++;
        }
        return info;
    }

    /**
     * getA20()
     *
     * @this {Busx86}
     * @returns {boolean} true if enabled, false if disabled
     */
    getA20()
    {
        return !this.aBlocks2Mb && this.nBusLimit == this.nBusMask;
    }

    /**
     * setA20(fEnable)
     *
     * On 32-bit bus machines, I've adopted the approach that COMPAQ took with DeskPro 386 machines,
     * which is to map the 1st Mb to the 2nd Mb whenever A20 is disabled, rather than blindly masking
     * the A20 address bit from all addresses; in fact, this is what the DeskPro 386 ROM BIOS requires.
     *
     * For 24-bit bus machines, we take the same approach that most if not all 80286 systems took, which
     * is simply masking the A20 address bit.  A lot of 32-bit machines probably took the same approach.
     *
     * TODO: On machines with a 32-bit bus, look into whether we can eliminate address masking altogether,
     * which seems feasible, provided all incoming addresses are already pre-truncated to 32 bits.  Also,
     * confirm that DeskPro 386 machines mapped the ENTIRE 1st Mb to the 2nd, and not simply the first 64Kb,
     * which is technically all that 8086 address wrap-around compatibility would require.
     *
     * @this {Busx86}
     * @param {boolean} fEnable is true to enable A20 (default), false to disable
     */
    setA20(fEnable)
    {
        if (this.nBusWidth == 32) {
            if (fEnable) {
                if (this.aBlocks2Mb) {
                    this.setMemoryBlocks(0x100000, 0x100000, this.aBlocks2Mb);
                    this.aBlocks2Mb = null;
                }
            } else {
                if (!this.aBlocks2Mb) {
                    this.aBlocks2Mb = this.getMemoryBlocks(0x100000, 0x100000);
                    this.setMemoryBlocks(0x100000, 0x100000, this.getMemoryBlocks(0x0, 0x100000));
                }
            }
        }
        else if (this.nBusWidth > 20) {
            let addrMask = (this.nBusMask & ~0x100000) | (fEnable? 0x100000 : 0);
            if (addrMask != this.nBusMask) {
                this.nBusMask = addrMask;
                if (this.cpu) this.cpu.setAddressMask(addrMask);
            }
        }
    }

    /**
     * getWidth()
     *
     * @this {Busx86}
     * @returns {number}
     */
    getWidth()
    {
        return this.nBusWidth;
    }

    /**
     * setMemoryAccess(addr, size, afn, fQuiet)
     *
     * Updates the access functions in every block of the specified address range.  Since the only components
     * that should be dynamically modifying the memory access functions are those that use addMemory() with a custom
     * memory controller, we require that the block(s) being updated do in fact have a controller.
     *
     * @this {Busx86}
     * @param {number} addr
     * @param {number} size
     * @param {Array.<function()>} [afn]
     * @param {boolean} [fQuiet] (true if any error should be quietly logged)
     * @returns {boolean} true if successful, false if not
     */
    setMemoryAccess(addr, size, afn, fQuiet)
    {
        if (!(addr & this.nBlockLimit) && size && !(size & this.nBlockLimit)) {
            let iBlock = addr >>> this.nBlockShift;
            while (size > 0) {
                let block = this.aMemBlocks[iBlock];
                if (!block.controller) {
                    return this.reportError(Busx86.ERROR.SET_MEM_NOCTRL, addr, size, fQuiet);
                }
                block.setAccess(afn, true);
                size -= this.nBlockSize;
                iBlock++;
            }
            return true;
        }
        return this.reportError(Busx86.ERROR.SET_MEM_BADRANGE, addr, size);
    }

    /**
     * removeMemory(addr, size)
     *
     * Replaces every block in the specified address range with empty Memory blocks that ignore all reads/writes.
     *
     * TODO: Update the removeMemory() interface to reflect the relaxed requirements of the addMemory() interface.
     *
     * @this {Busx86}
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
                let blockNew = new Memoryx86(addr);
                blockNew.copyBreakpoints(this.dbg, blockOld);
                this.aMemBlocks[iBlock++] = blockNew;
                addr = iBlock * this.nBlockSize;
                size -= this.nBlockSize;
            }
            /**
             * If all removeMemory() calls happened ONLY during device initialization, the following code would not
             * be necessary; unfortunately, the Video component can add and remove physical memory blocks during video
             * mode changes, so we have to kick out any PAGED blocks that could have references to those physical memory
             * blocks.  If paging isn't enabled (or supported by the current the CPU), this call has no effect.
             *
             * We could handle this case with a little more, um, precision, but Video mode changes aren't frequent enough
             * to warrant it.
             */
            this.cpu.flushPageBlocks();
            return true;
        }
        return this.reportError(Busx86.ERROR.REM_MEM_BADRANGE, addr, size);
    }

    /**
     * getMemoryBlocks(addr, size)
     *
     * @this {Busx86}
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
     * @this {Busx86}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @param {Array} aBlocks as returned by getMemoryBlocks()
     * @param {number} [type] is one of the Memoryx86.TYPE constants
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
                let blockNew = new Memoryx86(addr);
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
     * For physical addresses only; for linear addresses, use cpu.getByte().
     *
     * @this {Busx86}
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
     * @this {Busx86}
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
     * For physical addresses only; for linear addresses, use cpu.getShort().
     *
     * @this {Busx86}
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
     * @this {Busx86}
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
     * getLong(addr)
     *
     * For physical addresses only; for linear addresses, use cpu.getLong().
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @returns {number} long (32-bit) value at that address
     */
    getLong(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off < this.nBlockLimit - 2) {
            return this.aMemBlocks[iBlock].readLong(off, addr);
        }
        /**
         * I think the previous version of this function tried to be too clever (ie, reading the last
         * long in the current block and the first long in the next block and masking/combining the results),
         * which may have also created some undesirable side-effects for custom memory controllers.
         * This simpler (and probably more reliable) approach is to simply read the long as individual bytes.
         */
        let l = 0;
        let cb = 4, nShift = 0;
        let cbBlock = 4 - (off & 0x3);    // (off & 0x3) will be 1, 2 or 3, so cbBlock will be 3, 2, or 1
        while (cb--) {
            l |= (this.aMemBlocks[iBlock].readByte(off++, addr++) << nShift);
            if (!--cbBlock) {
                iBlock = (iBlock + 1) & this.nBlockMask;
                off = 0;
            }
            nShift += 8;
        }
        return l;
    }

    /**
     * setByte(addr, b)
     *
     * For physical addresses only; for linear addresses, use cpu.setByte().
     *
     * @this {Busx86}
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
     * @this {Busx86}
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
     * For physical addresses only; for linear addresses, use cpu.setShort().
     *
     * @this {Busx86}
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
     * @this {Busx86}
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
     * setLong(addr, l)
     *
     * For physical addresses only; for linear addresses, use cpu.setLong().
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @param {number} l is the long (32-bit) value to write
     */
    setLong(addr, l)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off < this.nBlockLimit - 2) {
            this.aMemBlocks[iBlock].writeLong(off, l);
            return;
        }
        /**
         * I think the previous version of this function tried to be too clever (ie, reading and rewriting
         * the last long in the current block, and then reading and rewriting the first long in the next
         * block), which may have also created some undesirable side-effects for custom memory controllers.
         * This simpler (and probably more reliable) approach is to simply write the long as individual bytes.
         */
        let cb = 4;
        let cbBlock = 4 - (off & 0x3);    // (off & 0x3) will be 1, 2 or 3, so cbBlock will be 3, 2, or 1
        while (cb--) {
            this.aMemBlocks[iBlock].writeByte(off++, l & 0xff, addr++);
            if (!--cbBlock) {
                iBlock = (iBlock + 1) & this.nBlockMask;
                off = 0;
            }
            l >>>= 8;
        }
    }

    /**
     * addBackTrackObject(obj, bto, off)
     *
     * If bto is null, then we create bto (ie, an object that wraps obj and records off).
     *
     * If bto is NOT null, then we verify that off is within the given bto's range; if not,
     * then we must create a new bto and return that instead.
     *
     * @this {Busx86}
     * @param {Object} obj
     * @param {BackTrack|null} bto
     * @param {number} off (the offset within obj that this wrapper object is relative to)
     * @returns {BackTrack|null}
     */
    addBackTrackObject(obj, bto, off)
    {
        if (BACKTRACK && obj) {
            let cbtObjects = this.abtObjects.length;
            if (!bto) {
                /**
                 * Try the most recently created bto, on the off-chance it's what the caller needs
                 */
                if (this.ibtLastAlloc >= 0) bto = this.abtObjects[this.ibtLastAlloc];
            }
            if (!bto || bto.obj != obj || off < bto.off || off >= bto.off + Busx86.BTINFO.OFF_MAX) {

                bto = {obj: obj, off: off, slot: 0, refs: 0};

                let slot;
                if (!this.cbtDeletions) {
                    slot = cbtObjects;
                } else {
                    for (slot = this.ibtLastDelete; slot < cbtObjects; slot++) {
                        let btoTest = this.abtObjects[slot];
                        if (!btoTest || !btoTest.refs && !this.isBackTrackWeak(slot << Busx86.BTINFO.SLOT_SHIFT)) {
                            this.ibtLastDelete = slot + 1;
                            this.cbtDeletions--;
                            break;
                        }
                    }
                    /**
                     * There's no longer any guarantee that simply because cbtDeletions was non-zero that there WILL
                     * be an available (existing) slot, because cbtDeletions also counts weak references that may still
                     * be weak.
                     *
                     *      this.assert(slot < cbtObjects);
                     */
                }
                /**
                 *  I hit the following error after running in a machine with lots of disk activity:
                 *
                 *      Error: assertion failure in deskpro386.bus
                 *      at Busx86.Component.assert (http://localhost:8088/machines/modules/v2/component.js:732:31)
                 *      at Busx86.addBackTrackObject (http://localhost:8088/machines/pcx86/modules/v2/bus.js:980:18)
                 *      at onATCReadData (http://localhost:8088/machines/pcx86/modules/v2/hdc.js:1410:35)
                 *      at HDC.readData (http://localhost:8088/machines/pcx86/modules/v2/hdc.js:2573:23)
                 *      at HDC.inATCByte (http://localhost:8088/machines/pcx86/modules/v2/hdc.js:1398:20)
                 *      at HDC.inATCData (http://localhost:8088/machines/pcx86/modules/v2/hdc.js:1487:17)
                 *      at Busx86.checkPortInputNotify (http://localhost:8088/machines/pcx86/modules/v2/bus.js:1457:38)
                 *      at CPUx86.INSw (http://localhost:8088/machines/pcx86/modules/v2/x86ops.js:1640:26)
                 *      at CPUx86.stepCPU (http://localhost:8088/machines/pcx86/modules/v2/cpux86.js:4637:37)
                 *      at CPUx86.CPU.runCPU (http://localhost:8088/machines/pcx86/modules/v2/cpu.js:1014:22)
                 *
                 * TODO: Investigate.  For now, disable BACKTRACK if you run into this or other problems.
                 */
                this.assert(slot < Busx86.BTINFO.SLOT_MAX);
                this.ibtLastAlloc = slot;
                bto.slot = slot + 1;
                if (slot == cbtObjects) {
                    this.abtObjects.push(bto);
                } else {
                    this.abtObjects[slot] = bto;
                }
            }
            return bto;
        }
        return null;
    }

    /**
     * getBackTrackIndex(bto, off)
     *
     * @this {Busx86}
     * @param {BackTrack|null} bto
     * @param {number} off
     * @returns {number}
     */
    getBackTrackIndex(bto, off)
    {
        let bti = 0;
        if (BACKTRACK && bto) {
            bti = (bto.slot << Busx86.BTINFO.SLOT_SHIFT) | Busx86.BTINFO.TYPE_DATA | (off - bto.off);
        }
        return bti;
    }

    /**
     * writeBackTrackObject(addr, bto, off)
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @param {BackTrack|null} bto
     * @param {number} off
     */
    writeBackTrackObject(addr, bto, off)
    {
        if (BACKTRACK && bto) {
            this.assert(off - bto.off >= 0 && off - bto.off < Busx86.BTINFO.OFF_MAX);
            let bti = (bto.slot << Busx86.BTINFO.SLOT_SHIFT) | Busx86.BTINFO.TYPE_DATA | (off - bto.off);
            this.writeBackTrack(addr, bti);
        }
    }

    /**
     * readBackTrack(addr)
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @returns {number}
     */
    readBackTrack(addr)
    {
        if (BACKTRACK) {
            return this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].readBackTrack(addr & this.nBlockLimit);
        }
        return 0;
    }

    /**
     * writeBackTrack(addr, bti)
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @param {number} bti
     */
    writeBackTrack(addr, bti)
    {
        if (BACKTRACK) {
            let slot = bti >>> Busx86.BTINFO.SLOT_SHIFT;
            let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
            let btiPrev = this.aMemBlocks[iBlock].writeBackTrack(addr & this.nBlockLimit, bti);
            let slotPrev = btiPrev >>> Busx86.BTINFO.SLOT_SHIFT;
            if (slot != slotPrev) {
                this.aMemBlocks[iBlock].modBackTrack(true);
                if (btiPrev && slotPrev) {
                    let btoPrev = this.abtObjects[slotPrev-1];
                    if (!btoPrev) {
                        this.printf(MESSAGE.DEBUG + MESSAGE.WARNING, "writeBackTrack(%%%x,%x): previous index (%x) refers to empty slot (%d)\n", addr, bti, btiPrev, slotPrev);
                    }
                    else if (btoPrev.refs <= 0) {
                        this.printf(MESSAGE.DEBUG + MESSAGE.WARNING, "writeBackTrack(%%%x,%x): previous index (%x) refers to object with bad ref count (%d)\n", addr, bti, btiPrev, btoPrev.refs);
                        /**
                         * We used to just slam a null into the previous slot and consider it gone, but there may still
                         * be "weak references" to that slot (ie, it may still be associated with a register bti).
                         *
                         * The easiest way to handle weak references is to leave the slot allocated, with the object's ref
                         * count sitting at zero, and change addBackTrackObject() to look for both empty slots AND non-empty
                         * slots with a ref count of zero; in the latter case, it should again check for weak references,
                         * after which we can re-use the slot if all its weak references are now gone.
                         */
                        if (!this.isBackTrackWeak(btiPrev)) this.abtObjects[slotPrev-1] = null;
                        /**
                         * TODO: Consider what the appropriate trigger should be for resetting ibtLastDelete to zero;
                         * if we don't OCCASIONALLY set it to zero, we may never clear out obsolete weak references,
                         * whereas if we ALWAYS set it to zero, we may be forcing addBackTrackObject() to scan the entire
                         * table too often.
                         *
                         * I'd prefer to do something like this:
                         *
                         *      if (this.ibtLastDelete > slotPrev-1) this.ibtLastDelete = slotPrev-1;
                         *
                         * or even this:
                         *
                         *      if (this.ibtLastDelete > slotPrev-1) this.ibtLastDelete = 0;
                         *
                         * But neither one of those guarantees that we will at least occasionally scan the entire table.
                         */
                        this.ibtLastDelete = 0;
                        this.cbtDeletions++;
                    }
                }
                if (bti && slot) {
                    let bto = this.abtObjects[slot-1];
                    if (bto) {
                        this.assert(slot == bto.slot);
                        bto.refs++;
                    }
                }
            }
        }
    }

    /**
     * isBackTrackWeak(bti)
     *
     * @param {number} bti
     * @returns {boolean} true if the given bti is still referenced by a register, false if not
     */
    isBackTrackWeak(bti)
    {
        let bt = this.cpu.backTrack;
        let slot = bti >> Busx86.BTINFO.SLOT_SHIFT;
        return (bt.btiAL   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiAH   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiBL   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiBH   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiCL   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiCH   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiDL   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiDH   >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiBPLo >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiBPHi >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiSILo >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiSIHi >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiDILo >> Busx86.BTINFO.SLOT_SHIFT == slot ||
                bt.btiDIHi >> Busx86.BTINFO.SLOT_SHIFT == slot
        );
    }

    /**
     * updateBackTrackCode(addr, bti)
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @param {number} bti
     */
    updateBackTrackCode(addr, bti)
    {
        if (BACKTRACK) {
            if (bti & Busx86.BTINFO.TYPE_DATA) {
                bti = (bti & ~Busx86.BTINFO.TYPE_MASK) | Busx86.BTINFO.TYPE_COUNT_INC;
            } else if ((bti & Busx86.BTINFO.TYPE_MASK) < Busx86.BTINFO.TYPE_COUNT_MAX) {
                bti += Busx86.BTINFO.TYPE_COUNT_INC;
            } else {
                return;
            }
            this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].writeBackTrack(addr & this.nBlockLimit, bti);
        }
    }

    /**
     * getBackTrackObject(bti)
     *
     * @this {Busx86}
     * @param {number} bti
     * @returns {Object|null}
     */
    getBackTrackObject(bti)
    {
        if (BACKTRACK) {
            let slot = bti >>> Busx86.BTINFO.SLOT_SHIFT;
            if (slot) return this.abtObjects[slot-1];
        }
        return null;
    }

    /**
     * getBackTrackInfo(bti, fSymbol, fNearest)
     *
     * @this {Busx86}
     * @param {number} bti
     * @param {boolean} [fSymbol] (true to return only symbol)
     * @param {boolean} [fNearest] (true to return nearest symbol)
     * @returns {string|null}
     */
    getBackTrackInfo(bti, fSymbol, fNearest)
    {
        if (BACKTRACK) {
            let bto = this.getBackTrackObject(bti);
            if (bto) {
                let off = bti & Busx86.BTINFO.OFF_MASK;
                let file = bto.obj.file;
                if (file) {
                    this.assert(!bto.off);
                    return file.getSymbol(bto.obj.offFile + off, fNearest);
                }
                if (!fSymbol || fNearest) {
                    if (bto.obj.idComponent) {
                        return bto.obj.idComponent + '+' + StrLib.toHex(bto.off + off, 0, true);
                    }
                }
            }
        }
        return null;
    }

    /**
     * getSymbol(addr, fNearest)
     *
     * @this {Busx86}
     * @param {number} addr
     * @param {boolean} [fNearest] (true to return nearest symbol)
     * @returns {string|null}
     */
    getSymbol(addr, fNearest)
    {
        return BACKTRACK? this.getBackTrackInfo(this.readBackTrack(addr), true, fNearest) : null;
    }

    /**
     * saveMemory(fAll)
     *
     * All blocks will be stored in a single array, as pairs of block numbers and data arrays, like so:
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
     * @this {Busx86}
     * @param {boolean} [fAll] (true to save all non-ROM memory blocks, regardless of their modified() state)
     * @returns {Array} a
     */
    saveMemory(fAll = true)
    {
        /**
         * A quick-and-dirty work-around for 32-bit bus machines, to ensure that all blocks in the 2nd Mb are
         * mapped in before we save.  We do this by forcing A20 on, and then turning it off again before we leave.
         */
        let fA20 = this.getA20();
        if (!fA20) this.setA20(true);

        let i = 0, a = [];
        for (let iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            let block = this.aMemBlocks[iBlock];
            if (block.size) {
                if (fAll && block.type != Memoryx86.TYPE.ROM || block.modified()) {
                    let adw = block.save();
                    if (adw) {
                        a[i++] = iBlock;
                        a[i++] = State.compress(adw);
                    }
                }
            }
        }
        if (!fA20) this.setA20(false);
        a[i] = fA20;
        return a;
    }

    /**
     * restoreMemory(a)
     *
     * This restores the contents of all Memory blocks; called by CPUx86.restore().
     *
     * In theory, we ONLY have to save/restore block contents.  Other block attributes,
     * like the type, the memory controller (if any), and the active memory access functions,
     * should already be restored, since every component (re)allocates all the memory blocks
     * it was using when it's restored.  And since the CPU is guaranteed to be the last
     * component to be restored, all those blocks (and their attributes) should be in place now.
     *
     * See saveMemory() for more information on how the memory block contents are saved.
     *
     * @this {Busx86}
     * @param {Array} a
     * @returns {boolean} true if successful, false if not
     */
    restoreMemory(a)
    {
        let i, scale = 1;
        for (i = 0; i < a.length - 1; i += 2) {
            let iBlock = a[i] * scale, adw = a[i+1];
            /**
             * One wrinkle here is dealing with blocks that were saved when the machine was using an
             * older (larger) block size (eg, 16K or 32K), because now I ALWAYS use a block size of 4K.
             *
             * Detecting that situation is a little tricky, because our memory states don't include the
             * block size that was in effect, and the blocks themselves could be compressed; in a worst
             * case scenario, the very first block of a machine using 16K blocks might have been compressed
             * to exactly 4K, and we'd have no idea if that block should be decompressed or used as-is.
             *
             * So, if the length of the block is less than our default length, we know we must decompress,
             * but furthermore, if the length is not a power-of-two, that's another clue.  Checking for
             * a power-of-two is a simple matter of AND'ing the value with one less than the value; if
             * the result is non-zero, it's not a power-of-two.
             */
            if (adw) {
                if (adw.length < this.nBlockLen * scale || (adw.length & (adw.length - 1))) {
                    adw = State.decompress(adw);
                }
                let nBlocks = (adw.length / this.nBlockLen)|0;
                if (nBlocks && scale == 1) scale = nBlocks;
                while (nBlocks > 0) {
                    let adwBlock = nBlocks > 1? adw.splice(0, this.nBlockLen) : adw;
                    let block = this.aMemBlocks[iBlock];
                    if (!block || !block.restore(adwBlock)) {
                        /**
                         * Either the block to restore hasn't been allocated, indicating a change in the machine
                         * configuration since it was last saved (the most likely explanation) or there's some internal
                         * inconsistency (eg, the block size is wrong).
                         */
                        Component.error("Unable to restore memory block " + iBlock);
                        return false;
                    }
                    nBlocks--;
                    iBlock++;
                }
            }
        }
        if (a[i] !== undefined) this.setA20(a[i]);
        return true;
    }

    /**
     * addPortInputBreak(port)
     *
     * @this {Busx86}
     * @param {number|null} [port]
     * @returns {boolean} true if break on port input enabled, false if disabled
     */
    addPortInputBreak(port)
    {
        if (port == null) {
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
     * @this {Busx86}
     * @param {number} start port address
     * @param {number} end port address
     * @param {function(number,number)} fn is called with the port and LIP values at the time of the input
     */
    addPortInputNotify(start, end, fn)
    {
        if (fn !== undefined) {
            for (let port = start; port <= end; port++) {
                if (this.aPortInputNotify[port] !== undefined) {
                    Component.warning("input port " + StrLib.toHexWord(port) + " already registered");
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
     * @this {Busx86}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offset] is an optional port offset
     */
    addPortInputTable(component, table, offset)
    {
        if (offset === undefined) offset = 0;
        for (let port in table) {
            this.addPortInputNotify(+port + offset, +port + offset, table[port].bind(component));
        }
    }

    /**
     * addPortInputWidth(port, size)
     *
     * By default, all input ports are 1 byte wide; ports that are wider must call this function.
     *
     * @this {Busx86}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     */
    addPortInputWidth(port, size)
    {
        this.aPortInputWidth[port] = size;
    }

    /**
     * checkPortInputNotify(port, size, addrLIP)
     *
     * @this {Busx86}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     * @param {number} [addrLIP] is the LIP value at the time of the input
     * @returns {number} simulated port data
     *
     * NOTE: It seems that parts of the ROM BIOS (like the RS-232 probes around F000:E5D7 in the 5150 BIOS)
     * assume that ports for non-existent hardware return 0xff rather than 0x00, hence my new default (0xff) below.
     */
    checkPortInputNotify(port, size, addrLIP)
    {
        let data = 0, shift = 0;

        while (size > 0) {

            let aNotify = this.aPortInputNotify[port];
            let sizePort = this.aPortInputWidth[port] || 1;
            let maskPort = (sizePort == 1? 0xff : (sizePort == 2? 0xffff : -1));
            let dataPort = maskPort;

            /**
             * TODO: We need to decide what to do about 8-bit I/O to a 16-bit port (ditto for 16-bit I/O
             * to a 32-bit port).  We probably should pass the size through to the aNotify[0] handler,
             * and let it decide what to do, but I don't feel like changing all the I/O handlers right now.
             * The good news, at least, is that the 8-bit handlers would not have to do anything special.
             * This assert will warn us if this is a pressing need.
             */
            this.assert(size >= sizePort);

            if (BACKTRACK) {
                this.cpu.backTrack.btiIO = 0;
            }

            if (aNotify !== undefined) {
                if (aNotify[0]) {
                    dataPort = aNotify[0](port, addrLIP);
                    if (dataPort == null) {
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
                    this.dbg.messageIO(this, port, undefined, addrLIP);
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
     * @this {Busx86}
     * @param {number|null} [port]
     * @returns {boolean} true if break on port output enabled, false if disabled
     */
    addPortOutputBreak(port)
    {
        if (port == null) {
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
     * @this {Busx86}
     * @param {number} start port address
     * @param {number} end port address
     * @param {function(number,number)} fn is called with the port and LIP values at the time of the output
     */
    addPortOutputNotify(start, end, fn)
    {
        if (fn !== undefined) {
            for (let port = start; port <= end; port++) {
                if (this.aPortOutputNotify[port] !== undefined) {
                    Component.warning("output port " + StrLib.toHexWord(port) + " already registered");
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
     * @this {Busx86}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offset] is an optional port offset
     */
    addPortOutputTable(component, table, offset)
    {
        if (offset === undefined) offset = 0;
        for (let port in table) {
            this.addPortOutputNotify(+port + offset, +port + offset, table[port].bind(component));
        }
    }

    /**
     * addPortOutputWidth(port, size)
     *
     * By default, all output ports are 1 byte wide; ports that are wider must call this function.
     *
     * @this {Busx86}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     */
    addPortOutputWidth(port, size)
    {
        this.aPortOutputWidth[port] = size;
    }

    /**
     * checkPortOutputNotify(port, size, data, addrLIP)
     *
     * @this {Busx86}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @param {number} [addrLIP] is the LIP value at the time of the output
     */
    checkPortOutputNotify(port, size, data, addrLIP)
    {
        let shift = 0;

        while (size > 0) {

            let aNotify = this.aPortOutputNotify[port];
            let sizePort = this.aPortOutputWidth[port] || 1;
            let maskPort = (sizePort == 1? 0xff : (sizePort == 2? 0xffff : -1));
            let dataPort = (data >>>= shift) & maskPort;

            /**
             * TODO: We need to decide what to do about 8-bit I/O to a 16-bit port (ditto for 16-bit I/O
             * to a 32-bit port).  We probably should pass the size through to the aNotify[0] handler,
             * and let it decide what to do, but I don't feel like changing all the I/O handlers right now.
             * The good news, at least, is that the 8-bit handlers would not have to do anything special.
             * This assert will warn us if this is a pressing need.
             */
            this.assert(size >= sizePort);

            if (aNotify !== undefined) {
                if (aNotify[0]) {
                    aNotify[0](port, dataPort, addrLIP);
                }
                if (DEBUGGER && this.dbg && this.fPortOutputBreakAll != aNotify[1]) {
                    this.dbg.checkPortOutput(port, size, dataPort);
                }
            }
            else {
                if (DEBUGGER && this.dbg) {
                    this.dbg.messageIO(this, port, dataPort, addrLIP);
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
     * reportError(op, addr, size, fQuiet)
     *
     * @this {Busx86}
     * @param {number} op
     * @param {number} addr
     * @param {number} size
     * @param {boolean} [fQuiet] (true if any error should be quietly logged)
     * @returns {boolean} false
     */
    reportError(op, addr, size, fQuiet)
    {
        this.printf(fQuiet? MESSAGE.DEBUG : MESSAGE.NONE, "Memory block error (%d: %x,%x)\n", op, addr, size);
        return false;
    }

    /**
     * getLongDirect(addr)
     *
     * This is useful for the Debugger and other components that want to bypass getLong() breakpoint detection.
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @returns {number} long (32-bit) value at that address
     *
     getLongDirect(addr)
     {
         let off = addr & this.nBlockLimit;
         let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
         if (off < this.nBlockLimit - 2) {
             return this.aMemBlocks[iBlock].readLongDirect(off, addr);
         }
         //
         // I think the previous version of this function tried to be too clever (ie, reading the last
         // long in the current block and the first long in the next block and masking/combining the results),
         // which may have also created some undesirable side-effects for custom memory controllers.
         // This simpler (and probably more reliable) approach is to simply read the long as individual bytes.
         //
         let l = 0;
         let cb = 4, nShift = 0;
         let cbBlock = 4 - (off & 0x3);    // (off & 0x3) will be 1, 2 or 3, so cbBlock will be 3, 2, or 1
         while (cb--) {
             l |= (this.aMemBlocks[iBlock].readByteDirect(off++, addr++) << nShift);
             if (!--cbBlock) {
                 iBlock = (iBlock + 1) & this.nBlockMask;
                 off = 0;
             }
             nShift += 8;
         }
         return l;
     }
     */

    /**
     * setLongDirect(addr, l)
     *
     * This is useful for the Debugger and other components that want to bypass breakpoint detection AND read-only
     * memory protection (for example, this is an interface the ROM component could use to initialize ROM contents).
     *
     * @this {Busx86}
     * @param {number} addr is a physical address
     * @param {number} l is the long (32-bit) value to write
     *
     setLongDirect(addr, l)
     {
         let off = addr & this.nBlockLimit;
         let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
         if (off < this.nBlockLimit - 2) {
             this.aMemBlocks[iBlock].writeLongDirect(off, l, addr);
             return;
         }
         //
         // I think the previous version of this function tried to be too clever (ie, reading and rewriting
         // the last long in the current block, and then reading and rewriting the first long in the next
         // block), which may have also created some undesirable side-effects for custom memory controllers.
         // This simpler (and probably more reliable) approach is to simply write the long as individual bytes.
         //
         let cb = 4;
         let cbBlock = 4 - (off & 0x3);    // (off & 0x3) will be 1, 2 or 3, so cbBlock will be 3, 2, or 1
         while (cb--) {
             this.aMemBlocks[iBlock].writeByteDirect(off++, l & 0xff, addr++);
             if (!--cbBlock) {
                 iBlock = (iBlock + 1) & this.nBlockMask;
                 off = 0;
             }
             l >>>= 8;
         }
     }
     */

    /**
     * getBackTrackObjectFromAddr(addr)
     *
     * @this {Busx86}
     * @param {number} addr
     * @returns {Object|null}
     *
     getBackTrackObjectFromAddr(addr)
     {
         return BACKTRACK? this.getBackTrackObject(this.readBackTrack(addr)) : null;
     }
     */

    /**
     * getBackTrackInfoFromAddr(addr)
     *
     * @this {Busx86}
     * @param {number} addr
     * @returns {string|null}
     *
     getBackTrackInfoFromAddr(addr)
     {
         return BACKTRACK? this.getBackTrackInfo(this.readBackTrack(addr)) : null;
     }
     */

    /**
     * removePortInputNotify(start, end)
     *
     * Remove port input-notification handler(s) (to be ENABLED later if needed)
     *
     * @this {Busx86}
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
     * @this {Busx86}
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
}
