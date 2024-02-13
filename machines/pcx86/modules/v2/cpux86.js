/**
 * @fileoverview Implements PCx86 CPU support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU from "./cpu.js";
import Memoryx86 from "./memory.js";
import MESSAGE from "./message.js";
import Segx86 from "./segx86.js";
import X86 from "./x86.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, BACKTRACK, BUGS_8086, DEBUG, DEBUGGER, I386, MAXDEBUG, PAGEBLOCKS, PREFETCH } from "./defines.js";

/**
 * @class CPUx86
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class CPUx86 extends CPU {

    /**
     * NOTE: CPUx86.PFINFO.LENGTH must be set to a power of two, so that LENGTH - 1 will form a mask
     * (IP_MASK) we can use to create a sliding prefetch window of LENGTH bytes.  We also zero the low
     * 2 bits of IP_MASK so that the sliding window always starts on a 32-bit (long) boundary.  Finally,
     * instead of breaking all the longs we prefetch into bytes, we simply store the longs as-is into
     * every 4th element of the queue (the queue is a sparse array).
     */
    static PFLEN = 16;                  // 16 generates a 16-byte prefetch queue consisting of 4 32-bit entries
    static PFINFO = {
        LENGTH:     CPUx86.PFLEN,
        IP_MASK:    ((CPUx86.PFLEN - 1) & ~0x3)
    };

    static PAGEBLOCKS_CACHE = 512;      // TODO: This seems adequate for 4Mb of RAM, but it should be dynamically reconfigured

    /**
     * CPUx86(parmsCPU)
     *
     * The CPUx86 class uses the following (parmsCPU) properties:
     *
     *      model: a string (eg, "8088") that should match one of the X86.MODEL values (default is "8088")
     *      stepping: a string (eg, "B1") that should match one of the X86.STEPPING values (default is "")
     *
     * This extends the CPU class and passes any remaining parmsCPU properties to the CPU class
     * constructor, along with a default speed (cycles per second) based on the specified (or default)
     * CPU model number.
     *
     * The CPUx86 class was initially written to simulate a 8086/8088 microprocessor, although over time
     * it has evolved to support later microprocessors (eg, the 80186/80188 and the 80286, including
     * protected-mode support).
     *
     * This is a logical simulation, not a physical simulation, and performance is critical, second only
     * to the accuracy of the simulation when running real-world x86 software.  Consequently, it takes a
     * few liberties with the operation of the simulated hardware, especially with regard to timings,
     * little-used features, etc.  We do make an effort to maintain approximate instruction cycle counts,
     * but there are many other obstacles (eg, prefetch queue, wait states) to achieving accurate timings.
     *
     * For example, our 8237 DMA controller performs all DMA transfers immediately, since internally
     * they are all memory-to-memory, and attempting to interleave DMA cycles with instruction execution
     * cycles would hurt overall performance.  Similarly, 8254 timer counters are updated only on-demand.
     *
     * The 8237 and 8254, along with the 8259 interrupt controller and several other "chips", are combined
     * into a single ChipSet component, to keep the number of components we juggle to a minimum.
     *
     * All that being said, this does not change the overall goal: to produce as accurate a simulation as
     * possible, within the limits of what JavaScript allows and how precisely/predictably it behaves.
     *
     * @this {CPUx86}
     * @param {Object} parmsCPU
     */
    constructor(parmsCPU)
    {
        let nCyclesDefault;
        let model = +parmsCPU['model'] || X86.MODEL_8088;

        switch(model) {
        case X86.MODEL_8088:
        default:
            nCyclesDefault = 4772727;
            break;
        case X86.MODEL_80286:
            nCyclesDefault = 6000000;
            break;
        case X86.MODEL_80386:
            nCyclesDefault = 16000000;
            break;
        }

        super(parmsCPU, nCyclesDefault);

        this.model = model;

        /**
         * We take the 'stepping' value, convert it to a hex value, and then add that to the model to provide
         * a single value that's unique for any given CPU stepping.  If no stepping is provided, then stepping
         * is equal to model.
         */
        let stepping = parmsCPU['stepping'];
        this.stepping = model + (stepping? StrLib.parseInt(stepping, 16) : 0);

        /**
         * Initialize processor operation to match the requested model
         */
        this.initProcessor();

        /**
         * List of software interrupt notification functions: aIntNotify is an array, indexed by
         * interrupt number, where each element contains:
         *
         *      registered function to call for every software interrupt
         *
         * The registered function is called with the linear address (LIP) following the software interrupt;
         * if any function returns false, the software interrupt will be skipped (presumed to be emulated),
         * and no further notification functions will be called.
         *
         * NOTE: Registered functions are called only for INT N instructions -- *not* INT 0x03 or INTO or the
         * INT 0x00 generated by a divide-by-zero or any other kind of interrupt (nor any interrupt simulated
         * with PUSHF/CALLF).
         *
         * aIntReturn is a hash of return address notifications set up by software interrupt notification
         * functions that want to receive return notifications.  A software interrupt function must call
         * cpu.addIntReturn(fn).
         *
         * WARNING: There's no mechanism in place to insure that software interrupt return notifications don't
         * get "orphaned" if an interrupt handler bypasses the normal return path (INT 0x24 is one example of an
         * "evil" software interrupt).
         */
        this.aIntNotify = [];
        this.aIntReturn = [];

        /**
         * Since aReturnNotify is a "sparse array", this global count gives the CPU a quick way of knowing whether
         * or not RETF or IRET instructions need to bother calling checkIntReturn().
         */
        this.cIntReturn = 0;

        /**
         * A variety of stepCPU() state variables that don't strictly need to be initialized before the first
         * stepCPU() call, but it's good form to do so.
         */
        this.resetCycles();
        this.flags.complete = this.flags.debugCheck = false;

        /**
         * If there are no live registers to display, then updateStatus() can skip a bit....
         */
        this.cLiveRegs = 0;

        /**
         * We're just declaring aMemBlocks and associated Bus parameters here; they'll be initialized by initMemory()
         * when the Bus is initialized.
         */
        this.aBusBlocks = this.aMemBlocks = [];
        this.nBusMask = this.nMemMask = -1;
        this.nBlockShift = this.nBlockSize = this.nBlockLimit = this.nBlockTotal = this.nBlockMask = 0;

        if (PREFETCH) {
            this.cbPrefetch = 0;
            this.adwPrefetch = null;
        }

        /**
         * This initial resetRegs() call is important to create all the registers (eg, the Segx86 registers),
         * so that if/when we call restore(), it will have something to fill in.
         */
        this.resetRegs();
    }

    /**
     * initMemory(aMemBlocks, nBlockShift)
     *
     * Notification from Bus.initMemory(), giving us direct access to the entire memory space
     * (aMemBlocks).  Since the CPU must perform additional layers of address decoding depending
     * on the mode (real-mode, protected-mode, paging), it's best if the CPU can avoid going
     * through the Bus component for every memory access.
     *
     * We also initialize a 32-bit prefetch queue, containing dword-aligned values; the queue is
     * an array of dwords indexed by a masked regLIP; for example, a queue of 4 dwords is indexed
     * by "regLIP & 0xC"; we use a sparse array to avoid right-shifting the index, like so:
     *
     *      0:  [dword]
     *      4:  [dword]
     *      8:  [dword]
     *     12:  [dword]
     *
     * The actual regLIP mask is CPUx86.PFINFO.IP_MASK; ie, (CPUx86.PFINFO.LENGTH - 1) & ~0x3.
     *
     * On refilling, the queue is always filled to capacity, and cbPrefetch is set to its maximum
     * value (eg, a value from 16 to 13, depending on whether "regLIP & 0x3" is 0, 1, 2 or 3).
     *
     * When a byte is requested from the queue, the dword is extracted from index "regLIP & 0xC"
     * and then shifted by 0, 8, 16, or 24, depending on whether "regLIP & 0x3" is 0, 1, 2 or 3
     * (ie, "(regLIP & 0x3) << 3").
     *
     * TODO: Consider how/whether to simulate an effective prefetch queue size of 4 bytes for an 8088,
     * 6 bytes for an 8086, 12 for an 80386, etc.
     *
     * @this {CPUx86}
     * @param {Array} aMemBlocks
     * @param {number} nBlockShift
     */
    initMemory(aMemBlocks, nBlockShift)
    {
        /**
         * aBusBlocks preserves the Bus block array for the life of the machine, whereas aMemBlocks
         * will be altered if/when the CPU enables paging.  PAGEBLOCKS must be true when using Memory
         * blocks to simulate paging, ensuring that physical blocks and pages have the same size (4Kb).
         */
        this.aBusBlocks = this.aMemBlocks = aMemBlocks;
        this.nBlockShift = nBlockShift;
        this.nBlockSize = 1 << this.nBlockShift;
        this.nBlockLimit = this.nBlockSize - 1;
        this.nBlockTotal = aMemBlocks.length;
        this.nBlockMask = this.nBlockTotal - 1;
        if (PREFETCH) {
         // this.nBusCycles = 0;
            this.adwPrefetch = new Array(CPUx86.PFINFO.LENGTH);
        }
    }

    /**
     * setAddressMask(nBusMask)
     *
     * Notification from Bus.initMemory() and Bus.setA20(); the latter calls us whenever the physical
     * A20 line changes (note that on a 20-bit bus machine, address lines A20 and higher are always zero).
     *
     * For 32-bit bus machines (eg, 80386), nBusMask is never changed after the initial call, because A20
     * wrap-around is simulated by changing the physical memory map rather than altering the A20 bit in nBusMask.
     *
     * We maintain nMemMask separate from nBusMask, because when paging is enabled on the 80386, the CPU memory
     * functions are now dealing with linear addresses rather than physical addresses, so it would be incorrect
     * to apply nBusMask to those addresses; nMemMask must remain 0xffffffff (-1) for the duration.  If we change
     * how A20 is simulated on the 80386, then enablePageBlocks() and disablePageBlocks() will need to override
     * nMemMask appropriately.
     *
     * TODO: Ideally, we would eliminate masking altogether of 32-bit addresses, but that would require different
     * sets of memory access functions for different machines (ie, those with 20-bit or 24-bit buses).
     *
     * @this {CPUx86}
     * @param {number} nBusMask
     */
    setAddressMask(nBusMask)
    {
        this.nBusMask = this.nMemMask = nBusMask;
    }

    /**
     * addMemBreak(addr, fWrite, fPhysical)
     *
     * NOTE: addMemBreak() could be merged with addMemCheck(), but the new merged interface would
     * have to provide one additional parameter indicating whether the Debugger or the CPU is the client.
     *
     * For now, this is simply a DEBUGGER-only interface.
     *
     * @this {CPUx86}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     * @param {boolean} [fPhysical] (true for physical breakpoint, false for linear)
     * @returns {boolean}
     */
    addMemBreak(addr, fWrite, fPhysical)
    {
        if (DEBUGGER) {
            let iBlock = addr >>> this.nBlockShift;
            let aBlocks = (fPhysical? this.aBusBlocks : this.aMemBlocks);
            if (aBlocks[iBlock]) {
                aBlocks[iBlock].addBreakpoint(addr & this.nBlockLimit, fWrite);
                /**
                 * When a physical memory breakpoint is added, a fresh setPhysBlock() call is REQUIRED for any
                 * linear mappings to that address.  This is a bit of a sledgehammer solution, but at least it's a solution.
                 */
                if (fPhysical) this.flushPageBlocks();
                return true;
            }
        }
        return false;
    }

    /**
     * removeMemBreak(addr, fWrite, fPhysical)
     *
     * NOTE: removeMemBreak() could be merged with removeMemCheck(), but the new merged interface would
     * have to provide one additional parameter indicating whether the Debugger or the CPU is the client.
     *
     * For now, this is simply a DEBUGGER-only interface.
     *
     * @this {CPUx86}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     * @param {boolean} [fPhysical] (true for physical breakpoint, false for linear)
     */
    removeMemBreak(addr, fWrite, fPhysical)
    {
        if (DEBUGGER) {
            let iBlock = addr >>> this.nBlockShift;
            let aBlocks = (fPhysical? this.aBusBlocks : this.aMemBlocks);
            aBlocks[iBlock].removeBreakpoint(addr & this.nBlockLimit, fWrite);
            /**
             * When a physical memory breakpoint is removed, a fresh setPhysBlock() call is RECOMMENDED for any
             * linear mappings to that address.  This is a bit of a sledgehammer solution, but at least it's a solution.
             */
            if (fPhysical) this.flushPageBlocks();
        }
    }

    /**
     * addMemCheck(addr, fWrite)
     *
     * These functions provide Debug register functionality to the CPU by leveraging the same Memory block-based
     * breakpoint support originally created for our built-in Debugger.  Only minimal changes were required to the
     * Memory component, by adding additional checkMemoryException() call-outs from the "checked" Memory access
     * functions.
     *
     * Note that those call-outs occur only AFTER our own Debugger (if present) has checked the address and has
     * passed on it, because we want our own Debugger's breakpoints to take precedence over any breakpoints that
     * the emulated machine may have enabled.
     *
     * @this {CPUx86}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write check, false for a memory read check
     */
    addMemCheck(addr, fWrite)
    {
        let iBlock = addr >>> this.nBlockShift;
        this.aMemBlocks[iBlock].addBreakpoint(addr & this.nBlockLimit, fWrite, this);
    }

    /**
     * removeMemCheck(addr, fWrite)
     *
     * @this {CPUx86}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write check, false for a memory read check
     */
    removeMemCheck(addr, fWrite)
    {
        let iBlock = addr >>> this.nBlockShift;
        this.aMemBlocks[iBlock].removeBreakpoint(addr & this.nBlockLimit, fWrite);
    }

    /**
     * enablePageBlocks()
     *
     * Whenever the CPU turns on paging and/or updates CR3, this function is called to update our copy
     * of the Bus block array, to simulate paging.  Whenever the CPU turns paging off, disablePageBlocks()
     * must be called to restore our copy of the Bus block array to its original (physical) mapping.
     *
     * This also requires PAGEBLOCKS be enabled, to ensure the Bus is configured with a 4Kb block size.
     *
     * The first time this function is called, aMemBlocks and aBusBlocks are identical, so aMemBlocks is
     * reinitialized with special UNPAGED Memory blocks that know how to perform page directory/page table
     * lookup and replace themselves with special PAGED Memory blocks that reference memory from the
     * appropriate block in aBusBlocks.  A parallel array, aBlocksPaged, keeps track (by block number) of
     * which blocks have been PAGED, so that whenever CR3 is updated, those blocks can be quickly UNPAGED.
     *
     * @this {CPUx86}
     */
    enablePageBlocks()
    {
        if (!PAGEBLOCKS) {
            this.setError("PAGEBLOCKS support required");
            return;
        }
        let iBlock;
        if (this.aMemBlocks === this.aBusBlocks) {
            this.aMemBlocks = new Array(this.nBlockTotal);
            /**
             * TODO: Currently we allocate only one UNPAGED block for the entire linear address space;
             * only when a block is touched and becomes PAGED do we allocate a dedicated Memory block
             * for that slot.  One potential downside to using a single UNPAGED block, however, is that
             * it will accumulate all breakpoints for all UNPAGED blocks, requiring copyBreakpoints() to
             * do extra work to figure out which breakpoints should be copied (ie, removed) from the
             * outgoing block -- which it can't currently do, because blocks only keep track of the total
             * number of breakpoints, not the actual breakpoint addresses.
             *
             * So, Memory blocks either need to start maintaining their own breakpoint address lists,
             * or we need to allocate separate (empty) UNPAGED blocks for every slot.  I've not tackled
             * this yet, because it's largely just a debugging issue.
             *
             * Notice that when we call copyBreakpoints() here, it's merely to initialize the new block;
             * we make no attempt to copy any breakpoints from physical blocks to linear blocks, although
             * perhaps we should.  The plan for our Debugger is to maintain separate physical and linear
             * breakpoint address lists, but what about CPU Debug registers?  If the CPU sets the Debug
             * registers, then enables paging, do all the previous Debug register addresses automatically
             * become linear addresses?  I'm guessing they do.
             */
            this.blockUnpaged = new Memoryx86(undefined, 0, 0, Memoryx86.TYPE.UNPAGED, null, this);
            this.blockUnpaged.copyBreakpoints(this.dbg);
            for (iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
                this.aMemBlocks[iBlock] = this.blockUnpaged;
            }
            /**
             * We also use a special "empty" Memory block that mapPageBlock() can pass back to callers
             * whenever a valid block cannot be found for an UNPAGED block.  Under normal conditions,
             * an invalid block will trigger a fault, so memEmpty will never actually be returned, but
             * if the Debugger is suppressing faults or calling probeAddr(), returning memEmpty is helpful.
             */
            this.memEmpty = new Memoryx86();

            /**
             * Initialize our PAGEBLOCKS cache (see acquirePageBlock() and releasePageBlock()).
             */
            this.aCacheBlocks = new Array(CPUx86.PAGEBLOCKS_CACHE);
            this.iCacheBlocks = 0;
        } else {
            /**
             * Our equivalent of a TLB flush.  NOTE: We do not attempt to simulate an actual TLB; our
             * aMemBlocks array will "cache" as many pages (ie, allow as many PAGED block) as there are
             * entries in the array.  I'm assuming we won't run into any system software that relies on
             * a constrained TLB -- at least not from the 80386 era, which is all we're emulating.
             */
            for (let i = 0; i < this.aBlocksPaged.length; i++) {
                iBlock = this.aBlocksPaged[i];
                this.releasePageBlock(this.aMemBlocks[iBlock]);
                this.aMemBlocks[iBlock] = this.blockUnpaged;
            }
        }
        this.aBlocksPaged = [];
    }

    /**
     * flushPageBlocks()
     *
     * @this {CPUx86}
     */
    flushPageBlocks()
    {
        if (this.regCR0 & X86.CR0.PG) this.enablePageBlocks();
    }

    /**
     * acquirePageBlock(addr)
     *
     * This implements a simple paged memory block cache.  Candidates for caching must be released via
     * releasePageBlock().
     *
     * After acquiring a block from this cache, the caller MUST use setPhysBlock() to properly reinitialize
     * it for the new given linear address.
     *
     * @this {CPUx86}
     * @param {number} addr
     * @returns {Memoryx86}
     */
    acquirePageBlock(addr)
    {
        let block;
        if (this.iCacheBlocks > 0) {
            block = this.aCacheBlocks[--this.iCacheBlocks];
            /**
             * Paged memory blocks are all very generic and contain no memory of their own, so the fact
             * that we're not calling the Memory constructor to reinitialize it is OK.  setPhysBlock() is
             * what's critical, and the caller will take care of that.  However, to avoid any confusion,
             * especially when debugging, there are a few properties we should reinitialize, hence init().
             */
            block.init(addr);
        } else {
            block = new Memoryx86(addr, 0, 0, Memoryx86.TYPE.PAGED);
        }
        return block;
    }

    /**
     * releasePageBlock(block)
     *
     * Instead of simply tossing Memory blocks onto the garbage collector's heap, we'll retain a maximum
     * number (CPUx86.PAGEBLOCKS_CACHE) in aCacheBlocks, with iCacheBlocks pointing to the next free element.
     *
     * @this {CPUx86}
     * @param {Memoryx86} block
     */
    releasePageBlock(block)
    {
        this.assert(!!(block && block.type === Memoryx86.TYPE.PAGED));
        if (this.iCacheBlocks < CPUx86.PAGEBLOCKS_CACHE) {
            this.aCacheBlocks[this.iCacheBlocks++] = block;
        }
    }

    /**
     * mapPageBlock(addr, fWrite, fSuppress)
     *
     * Locate the corresponding physical PDE, PTE and memory blocks for the given linear address, and then
     * upgrade the block from an UNPAGED Memory block to a new PAGED Memory block; all future accesses to
     * the current page will go directly to that block, instead of coming here through the UNPAGED block
     * handlers.
     *
     * Note that since the incoming address (addr) is a linear address, we never need to mask it with nBusMask,
     * but all the intermediate (PDE, PTE) and final physical addresses we calculate should still be masked.
     *
     * Granted, nBusMask on a 32-bit bus is generally going to be 0xffffffff (-1), so masking might seem like
     * a waste of time; however, if we decide to once again rely on nBusMask for emulating A20 wrap-around
     * (instead of changing the physical memory map to alias the 2nd Mb to the 1st Mb), then performing
     * consistent masking will be important.
     *
     * Also, addrPDE, addrPTE and addrPhys do not need any offsets added to them, because we immediately shift
     * the offset portion of those addresses out.  But for now, at least for debugging and documentation purposes,
     * my preference is to include the offset in the address calculations.
     *
     * Besides, this should not be a performance-critical function; it's normally called only once per UNPAGED
     * page.  Obviously, if CR3 is constantly being updated, that will trigger repeated calls to enablePageBlocks(),
     * which will perform our equivalent of a TLB flush (ie, resetting all PAGED blocks back to UNPAGED blocks).
     * That would hurt our performance, but it would hurt performance on a real machine as well, so presumably
     * CR3 updates will be minimal.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @param {boolean} fWrite (true if called for a write, false if for a read)
     * @param {boolean} [fSuppress] (true if any faults, remapping, etc should be suppressed)
     * @returns {Memoryx86}
     */
    mapPageBlock(addr, fWrite, fSuppress)
    {
        let offPDE = (addr & X86.LADDR.PDE.MASK) >>> X86.LADDR.PDE.SHIFT;
        let addrPDE = this.regCR3 + offPDE;

        /**
         * bus.getLong(addrPDE) would be simpler, but setPhysBlock() needs to know blockPDE and offPDE, too.
         * TODO: Since we're immediately shifting addrPDE by nBlockShift, then we could also skip adding offPDE.
         */
        let blockPDE = this.aBusBlocks[(addrPDE & this.nBusMask) >>> this.nBlockShift];
        let pde = blockPDE.readLong(offPDE);

        if (!(pde & X86.PTE.PRESENT)) {
            if (!fSuppress) X86.helpPageFault.call(this, addr, false, fWrite);
            return this.memEmpty;
        }

        if (!(pde & X86.PTE.USER) && this.nCPL == 3) {
            if (!fSuppress) X86.helpPageFault.call(this, addr, true, fWrite);
            return this.memEmpty;
        }

        let offPTE = (addr & X86.LADDR.PTE.MASK) >>> X86.LADDR.PTE.SHIFT;
        let addrPTE = (pde & X86.PTE.FRAME) + offPTE;

        /**
         * bus.getLong(addrPTE) would be simpler, but setPhysBlock() needs to know blockPTE and offPTE, too.
         * TODO: Since we're immediately shifting addrPDE by nBlockShift, then we could also skip adding offPTE.
         */
        let blockPTE = this.aBusBlocks[(addrPTE & this.nBusMask) >>> this.nBlockShift];
        let pte = blockPTE.readLong(offPTE);

        if (!(pte & X86.PTE.PRESENT)) {
            if (!fSuppress) X86.helpPageFault.call(this, addr, false, fWrite);
            return this.memEmpty;
        }

        if (!(pte & X86.PTE.USER) && this.nCPL == 3) {
            if (!fSuppress) X86.helpPageFault.call(this, addr, true, fWrite);
            return this.memEmpty;
        }

        let addrPhys = (pte & X86.PTE.FRAME) + (addr & X86.LADDR.OFFSET);
        /**
         * TODO: Since we're immediately shifting addrPhys by nBlockShift, we could also skip adding the addr's offset.
         */
        let blockPhys = this.aBusBlocks[(addrPhys & this.nBusMask) >>> this.nBlockShift];
        if (fSuppress) return blockPhys;

        let iBlock = addr >>> this.nBlockShift;
        let block = this.aMemBlocks[iBlock];

        /**
         * So we have the block containing the physical memory corresponding to the given linear address.
         *
         * Now we can create a new PAGED Memory block and record the physical block info using setPhysBlock().
         */
        let blockPage = this.acquirePageBlock(addr & ~X86.LADDR.OFFSET);
        blockPage.setPhysBlock(blockPhys, blockPDE, offPDE, blockPTE, offPTE);
        blockPage.copyBreakpoints(this.dbg, block);

        this.aMemBlocks[iBlock] = blockPage;
        this.aBlocksPaged.push(iBlock);

        return blockPage;
    }

    /**
     * disablePageBlocks()
     *
     * Whenever the CPU turns off paging, this function restores the CPU's original aMemBlocks.
     *
     * @this {CPUx86}
     */
    disablePageBlocks()
    {
        if (this.aMemBlocks !== this.aBusBlocks) {
            this.aMemBlocks = this.aBusBlocks;
            this.blockUnpaged = null;
            this.aBlocksPaged = null;
            this.memEmpty = null;
        }
    }

    /**
     * isPagingEnabled()
     *
     * @this {CPUx86}
     * @returns {boolean}
     */
    isPagingEnabled()
    {
        let fPaging = !!(this.regCR0 & X86.CR0.PG);
        this.assert((this.aMemBlocks !== this.aBusBlocks) === fPaging);
        return fPaging;
    }

    /**
     * initProcessor()
     *
     * This isolates 80186/80188/80286/80386 support, so that it can be selectively enabled/tested.
     *
     * Here's a summary of 80186/80188 differences according to "AP-186: Introduction to the 80186
     * Microprocessor, March 1983" (pp.55-56).  "The iAPX 86,88 and iAPX 186,188 User's Manual Programmer's
     * Reference", p.3-38, apparently contains the same information, but I've not seen that document.
     *
     * Undefined [Invalid] Opcodes:
     *
     *      When the opcodes 63H, 64H, 65H, 66H, 67H, F1H, FEH/xx111xxxB and FFH/xx111xxxB are executed,
     *      the 80186 will execute an illegal [invalid] instruction exception, interrupt 0x06.
     *      The 8086 will ignore the opcode.
     *
     * 0FH opcode:
     *
     *      When the opcode 0FH is encountered, the 8086 will execute a POP CS, while the 80186 will
     *      execute an illegal [invalid] instruction exception, interrupt 0x06.
     *
     * Word Write at Offset FFFFH:
     *
     *      When a word write is performed at offset FFFFH in a segment, the 8086 will write one byte
     *      at offset FFFFH, and the other at offset 0, while the 80186 will write one byte at offset
     *      FFFFH, and the other at offset 10000H (one byte beyond the end of the segment). One byte segment
     *      underflow will also occur (on the 80186) if a stack PUSH is executed and the Stack Pointer
     *      contains the value 1.
     *
     * Shift/Rotate by Value Greater Then [sic] 31:
     *
     *      Before the 80186 performs a shift or rotate by a value (either in the CL register, or by an
     *      immediate value) it ANDs the value with 1FH, limiting the number of bits rotated to less than 32.
     *      The 8086 does not do this.
     *
     * LOCK prefix:
     *
     *      The 8086 activates its LOCK signal immediately after executing the LOCK prefix. The 80186 does
     *      not activate the LOCK signal until the processor is ready to begin the data cycles associated
     *      with the LOCKed instruction.
     *
     * Interrupted String Move Instructions:
     *
     *      If an 8086 is interrupted during the execution of a repeated string move instruction, the return
     *      value it will push on the stack will point to the last prefix instruction before the string move
     *      instruction. If the instruction had more than one prefix (e.g., a segment override prefix in
     *      addition to the repeat prefix), it will not be re-executed upon returning from the interrupt.
     *      The 80186 will push the value of the first prefix to the repeated instruction, so long as prefixes
     *      are not repeated, allowing the string instruction to properly resume.
     *
     * Conditions causing divide error with an integer divide:
     *
     *      The 8086 will cause a divide error whenever the absolute value of the quotient is greater then
     *      [sic] 7FFFH (for word operations) or if the absolute value of the quotient is greater than 7FH
     *      (for byte operations). The 80186 has expanded the range of negative numbers allowed as a quotient
     *      by 1 to include 8000H and 80H. These numbers represent the most negative numbers representable
     *      using 2's complement arithmetic (equaling -32768 and -128 in decimal, respectively).
     *
     * ESC Opcode:
     *
     *      The 80186 may be programmed to cause an interrupt type 7 whenever an ESCape instruction (used for
     *      co-processors like the 8087) is executed. The 8086 has no such provision. Before the 80186 performs
     *      this trap, it must be programmed to do so. [The details of this "programming" are not included.]
     *
     * Here's a summary of 80286 differences according to "80286 and 80287 Programmer's Reference Manual",
     * Appendix C, p.C-1 (p.329):
     *
     *   1. Add Six Interrupt Vectors
     *
     *      The 80286 adds six interrupts which arise only if the 8086 program has a hidden bug. These interrupts
     *      occur only for instructions which were undefined on the 8086/8088 or if a segment wraparound is attempted.
     *      It is recommended that you add an interrupt handler to the 8086 software that is to be run on the 80286,
     *      which will treat these interrupts as invalid operations.
     *
     *      This additional software does not significantly effect [sic] the existing 8086 software because the interrupts
     *      do not normally occur and should not already have been used since they are in the interrupt group reserved
     *      by Intel. [NOTE: IBM ignored Intel's admonishments.]
     *
     *   2. Do not Rely on 8086/8088 Instruction Clock Counts
     *
     *      The 80286 takes fewer clocks for most instructions than the 8086/8088. The areas to look into are delays
     *      between I/0 operations, and assumed delays in 8086/8088 operating in parallel with an 8087.
     *
     *   3. Divide Exceptions Point at the DIV Instruction
     *
     *      Any interrupt on the 80286 will always leave the saved CS:IP value pointing at the beginning of the
     *      instruction that failed (including prefixes). On the 8086, the CS:IP value saved for a divide exception
     *      points at the next instruction.
     *
     *   4. Use Interrupt 16 (0x10) for Numeric Exceptions
     *
     *      Any 80287 system must use interrupt vector 16 for the numeric error interrupt. If an 8086/8087 or 8088/8087
     *      system uses another vector for the 8087 interrupt, both vectors should point at the numeric error interrupt
     *      handler.
     *
     *   5. Numeric Exception Handlers Should allow Prefixes
     *
     *      The saved CS:IP value in the NPX environment save area will point at any leading prefixes before an ESC
     *      instruction. On 8086/8088 systems, this value points only at the ESC instruction.
     *
     *   6. Do Not Attempt Undefined 8086/8088 Operations
     *
     *      Instructions like POP CS or MOV CS,op will either cause exception 6 (undefined [invalid] opcode) or perform
     *      a protection setup operation like LIDT on the 80286. Undefined bit encodings for bits 5-3 of the second byte
     *      of POP MEM or PUSH MEM will cause exception 13 on the 80286.
     *
     *   7. Place a Far JMP Instruction at FFFF0H
     *
     *      After reset, CS:IP = F000:FFF0 on the 80286 (versus FFFF:0000 on the 8086/8088). This change was made to allow
     *      sufficient code space to enter protected mode without reloading CS. Placing a far JMP instruction at FFFF0H
     *      will avoid this difference. Note that the BOOTSTRAP option of LOC86 will automatically generate this jump
     *      instruction.
     *
     *   8. Do not Rely on the Value Written by PUSH SP
     *
     *      The 80286 will push a different value on the stack for PUSH SP than the 8086/8088. If the value pushed is
     *      important [and when would it NOT be?], replace PUSH SP instructions with the following three instructions:
     *
     *          PUSH    BP
     *          MOV     BP,SP
     *          XCHG    BP,[BP]
     *
     *      This code functions as the 8086/8088 PUSH SP instruction on the 80286.
     *
     *   9. Do not Shift or Rotate by More than 31 Bits
     *
     *      The 80286 masks all shift/rotate counts to the low 5 bits. This MOD 32 operation limits the count to a maximum
     *      of 31 bits. With this change, the longest shift/rotate instruction is 39 clocks. Without this change, the longest
     *      shift/rotate instruction would be 264 clocks, which delays interrupt response until the instruction completes
     *      execution.
     *
     *  10. Do not Duplicate Prefixes
     *
     *      The 80286 sets an instruction length limit of 10 bytes. The only way to violate this limit is by duplicating
     *      a prefix two or more times before an instruction. Exception 6 occurs if the instruction length limit is violated.
     *      The 8086/8088 has no instruction length limit.
     *
     *  11. Do not Rely on Odd 8086/8088 LOCK Characteristics
     *
     *      The LOCK prefix and its corresponding output signal should only be used to prevent other bus masters from
     *      interrupting a data movement operation. The 80286 will always assert LOCK during an XCHG instruction with memory
     *      (even if the LOCK prefix was not used). LOCK should only be used with the XCHG, MOV, MOVS, INS, and OUTS instructions.
     *
     *      The 80286 LOCK signal will not go active during an instruction prefetch.
     *
     *  12. Do not Single Step External Interrupt Handlers
     *
     *      The priority of the 80286 single step interrupt is different from that of the 8086/8088. This change was made
     *      to prevent an external interrupt from being single-stepped if it occurs while single stepping through a program.
     *      The 80286 single step interrupt has higher priority than any external interrupt.
     *
     *      The 80286 will still single step through an interrupt handler invoked by INT instructions or an instruction
     *      exception.
     *
     *  13. Do not Rely on IDIV Exceptions for Quotients of 80H or 8000H
     *
     *      The 80286 can generate the largest negative number as a quotient for IDIV instructions. The 8086 will instead
     *      cause exception O.
     *
     *  14. Do not Rely on NMI Interrupting NMI Handlers
     *
     *      After an NMI is recognized, the NMI input and processor extension limit error interrupt is masked until the
     *      first IRET instruction is executed.
     *
     *  15. The NPX error signal does not pass through an interrupt controller (an 8087 INT signal does). Any interrupt
     *      controller-oriented instructions for the 8087 may have to be deleted.
     *
     *  16. If any real-mode program relies on address space wrap-around (e.g., FFF0:0400=0000:0300), then external hardware
     *      should be used to force the upper 4 addresses to zero during real mode.
     *
     *  17. Do not use I/O ports 00F8-00FFH. These are reserved for controlling 80287 and future processor extensions.
     *
     * @this {CPUx86}
     */
    initProcessor()
    {
        this.PS_SET = X86.PS_SET_8086;
        this.PS_DIRECT = X86.PS_DIRECT_8086;
        this.PS_CLEAR_RM = X86.PS.IOPL.MASK | X86.PS.NT;

        this.OPFLAG_NOINTR_8086 = X86.OPFLAG.NOINTR;
        this.nShiftCountMask = 0xff;            // on an 8086/8088, all shift counts are used as-is

        this.cycleCounts = (this.model >= X86.MODEL_80286? X86.CYCLES_80286 : X86.CYCLES_8088);

        this.aOps     = X86.aOps;
        this.aOpGrp4b = X86.aOpGrp4b;
        this.aOpGrp4w = X86.aOpGrp4w;
        this.aOpGrp6  = X86.aOpGrp6Real;        // setProtMode() will ensure that aOpGrp6 is switched

        if (this.model >= X86.MODEL_80186) {
            /**
             * I don't go out of my way to make 80186/80188 cycle times accurate, since I'm not aware of any
             * IBM PC models that used those processors; beyond the 8086, my next priorities are the 80286 and
             * 80386, but I might revisit the 80186 someday.
             *
             * Instruction handlers that contain "hard-coded" 80286 cycle times include: opINSb, opINSw, opOUTSb,
             * opOUTSw, opENTER, and opLEAVE.
             */
            this.aOps = X86.aOps.slice();       // make copies of opcode tables before modifying
            this.aOpGrp4b = X86.aOpGrp4b.slice();
            this.aOpGrp4w = X86.aOpGrp4w.slice();
            this.nShiftCountMask = 0x1f;        // on newer processors, all shift counts are MOD 32
            this.aOps[0x0F]                 = X86.opInvalid;
            this.aOps[X86.OPCODE.PUSHA]     = X86.opPUSHA;      // 0x60
            this.aOps[X86.OPCODE.POPA]      = X86.opPOPA;       // 0x61
            this.aOps[X86.OPCODE.BOUND]     = X86.opBOUND;      // 0x62
            this.aOps[X86.OPCODE.ARPL]      = X86.opInvalid;    // 0x63
            this.aOps[X86.OPCODE.FS]        = X86.opInvalid;    // 0x64
            this.aOps[X86.OPCODE.GS]        = X86.opInvalid;    // 0x65
            this.aOps[X86.OPCODE.OS]        = X86.opInvalid;    // 0x66
            this.aOps[X86.OPCODE.AS]        = X86.opInvalid;    // 0x67
            this.aOps[X86.OPCODE.PUSHN]     = X86.opPUSHn;      // 0x68
            this.aOps[X86.OPCODE.IMULN]     = X86.opIMULn;      // 0x69
            this.aOps[X86.OPCODE.PUSH8]     = X86.opPUSH8;      // 0x6A
            this.aOps[X86.OPCODE.IMUL8]     = X86.opIMUL8;      // 0x6B
            this.aOps[X86.OPCODE.INSB]      = X86.opINSb;       // 0x6C
            this.aOps[X86.OPCODE.INSW]      = X86.opINSw;       // 0x6D
            this.aOps[X86.OPCODE.OUTSB]     = X86.opOUTSb;      // 0x6E
            this.aOps[X86.OPCODE.OUTSW]     = X86.opOUTSw;      // 0x6F
            this.aOps[0xC0]                 = X86.opGRP2bn;     // 0xC0
            this.aOps[0xC1]                 = X86.opGRP2wn;     // 0xC1
            this.aOps[X86.OPCODE.ENTER]     = X86.opENTER;      // 0xC8
            this.aOps[X86.OPCODE.LEAVE]     = X86.opLEAVE;      // 0xC9
            this.aOps[X86.OPCODE.INT1]      = X86.opUndefined;  // 0xF1
            this.aOpGrp4b[0x07]             = X86.fnGRPInvalid;
            this.aOpGrp4w[0x07]             = X86.fnGRPInvalid;

            if (this.model >= X86.MODEL_80286) {

                let i;
                this.PS_SET = X86.PS.BIT1;      // on the 80286, only BIT1 of Processor Status (flags) is always set
                this.PS_DIRECT |= X86.PS.IOPL.MASK | X86.PS.NT;

                this.OPFLAG_NOINTR_8086 = 0;    // for instructions that do *not* set NOINTR on an 80286 (eg, non-SS segment loads)

                this.aOps[0x0F] = X86.op0F;
                this.aOps0F = X86.aOps0F.slice();
                for (i = 0; i < this.aOps0F.length; i++) {
                    if (!this.aOps0F[i]) this.aOps0F[i] = X86.opUndefined;
                }
                this.aOps[X86.OPCODE.PUSHSP] = X86.opPUSHSP;    // 0x54
                this.aOps[X86.OPCODE.ARPL]   = X86.opARPL;      // 0x63

                if (I386) {
                    if (this.model >= X86.MODEL_80386) {
                        let bOpcode;
                        this.PS_CLEAR_RM = 0;   // NOTE: This allows the 80386 to modify X86.PS.NT in real-mode (which is presumably OK)
                        this.PS_DIRECT |= X86.PS.RF | X86.PS.VM;
                        this.aOps[X86.OPCODE.FS]    = X86.opFS;     // 0x64
                        this.aOps[X86.OPCODE.GS]    = X86.opGS;     // 0x65
                        this.aOps[X86.OPCODE.OS]    = X86.opOS;     // 0x66
                        this.aOps[X86.OPCODE.AS]    = X86.opAS;     // 0x67
                        this.aOps[X86.OPCODE.INT1]  = X86.opINT1;   // 0xF1
                        for (bOpcode in X86.aOps0F386) {
                            this.aOps0F[+bOpcode] = X86.aOps0F386[+bOpcode];
                        }
                        if (this.stepping >= X86.STEPPING_80386_A0 && this.stepping <= X86.STEPPING_80386_B0) {
                            this.aOps0F[0xA6] = X86.opXBTS;
                            this.aOps0F[0xA7] = X86.opIBTS;
                        }
                    } else {
                        /**
                         * Let's make any "undefined" 80286 0x0F opcode handler "invalid" instead IFF the opcode
                         * is defined on the 80386.  Whereas if someone is using an opcode that isn't defined on ANY
                         * of these processors, then I want to know about it; ie, leave it set to opUndefined().
                         */
                        for (i = 0; i < X86.aOps0F386.length; i++) {
                            if (X86.aOps0F386[i] && this.aOps0F[i] == X86.opUndefined) this.aOps0F[i] = X86.opInvalid;
                        }
                    }
                }
            }
        }
    }

    /**
     * reset()
     *
     * @this {CPUx86}
     */
    reset()
    {
        this.resetFPU();
        this.resetRegs();
        this.resetCycles();
        this.clearError();      // clear any fatal error/exception that setError() may have flagged
    }

    /**
     * resetFPU()
     *
     * @this {CPUx86}
     */
    resetFPU()
    {
        if (this.chipset) {
            if (this.chipset.getDIPCoprocessor()) {
                this.fpuActive = this.fpu;
            } else {
                this.fpuActive = null;
            }
        }
    }

    /**
     * getReg(i)
     *
     * @this {CPUx86}
     * @param {number} i (0-7)
     * @returns {number}
     */
    getReg(i)
    {
        let reg;
        switch(i) {
        case 0x0:
            reg = this.regEAX;
            break;
        case 0x1:
            reg = this.regECX;
            break;
        case 0x2:
            reg = this.regEDX;
            break;
        case 0x3:
            reg = this.regEBX;
            break;
        case 0x4:
            reg = this.getSP();
            break;
        case 0x5:
            reg = this.regEBP;
            break;
        case 0x6:
            reg = this.regESI;
            break;
        case 0x7:
            reg = this.regEDI;
            break;
        }
        return reg;
    }

    /**
     * setReg(i, reg)
     *
     * @this {CPUx86}
     * @param {number} i (0-7)
     * @param {number} reg
     */
    setReg(i, reg)
    {
        switch(i) {
        case 0x0:
            this.regEAX = reg;
            break;
        case 0x1:
            this.regECX = reg;
            break;
        case 0x2:
            this.regEDX = reg;
            break;
        case 0x3:
            this.regEBX = reg;
            break;
        case 0x4:
            this.setSP(reg);
            break;
        case 0x5:
            this.regEBP = reg;
            break;
        case 0x6:
            this.regESI = reg;
            break;
        case 0x7:
            this.regEDI = reg;
            break;
        }
    }

    /**
     * resetRegs()
     *
     * According to "The 8086 Book", p.7-5, a RESET signal initializes the following registers:
     *
     *      PS          =   0x0000 (which has the important side-effect of disabling interrupts and traps)
     *      IP          =   0x0000
     *      CS          =   0xFFFF
     *      DS/ES/SS    =   0x0000
     *
     * It is silent as to whether the remaining registers are initialized to any particular values.
     *
     * According to the "80286 and 80287 Programmer's Reference Manual", these 80286 registers are reset:
     *
     *      PS          =   0x0002
     *      MSW         =   0xFFF0
     *      IP          =   0xFFF0
     *      CS Selector =   0xF000      DS/ES/SS Selector =   0x0000
     *      CS Base     = 0xFF0000      DS/ES/SS Base     = 0x000000        IDT Base  = 0x000000
     *      CS Limit    =   0xFFFF      DS/ES/SS Limit    =   0xFFFF        IDT Limit =   0x03FF
     *
     * And from the "INTEL 80386 PROGRAMMER'S REFERENCE MANUAL 1986", section 10.1:
     *
     *      The contents of EAX depend upon the results of the power-up self test. The self-test may be requested
     *      externally by assertion of BUSY# at the end of RESET. The EAX register holds zero if the 80386 passed
     *      the test. A nonzero value in EAX after self-test indicates that the particular 80386 unit is faulty.
     *      If the self-test is not requested, the contents of EAX after RESET is undefined.
     *
     *      DX holds a component identifier and revision number after RESET as Figure 10-1 illustrates. DH contains
     *      3, which indicates an 80386 component. DL contains a unique identifier of the revision level.
     *
     *      EFLAGS      =   0x00000002
     *      IP          =   0x0000FFF0
     *      CS selector =   0xF000 (base of 0xFFFF0000 and limit of 0xFFFF)
     *      DS selector =   0x0000
     *      ES selector =   0x0000
     *      SS selector =   0x0000
     *      FS selector =   0x0000
     *      GS selector =   0x0000
     *      IDTR        =   base of 0 and limit of 0x3FF
     *
     * All other 80386 registers are undefined after a reset (ie, Intel did not document how or if they are set).
     *
     * We've elected to set DX to 0x0308 on a reset, the highest known 80386 revision, since we have no desire to
     * try to emulate all the bugs in older (eg, B1) steppings -- at least not initially.  We leave stepping-accurate
     * emulation for another day.  It's also known that the B1 (and possibly B0) reported 0x0303 in DX, and that
     * the D0 stepping reported 0x0305; beyond that, it's not known exactly what revision numbers Intel used for all
     * 80386 revisions.
     *
     * We define some additional "registers", such as regLIP, which mirrors the linear address corresponding to
     * CS:IP (the address of the next opcode byte).  In fact, regLIP functions as our internal IP register, so any
     * code that needs the real IP must call getIP().  This, in turn, means that whenever CS or IP must be modified,
     * regLIP must be recalculated, so you must use either setCSIP(), which takes both an offset and a segment,
     * or setIP(), whichever is appropriate; in unusual cases where only segCS is changing (eg, undocumented 8086
     * opcodes), use setCS().
     *
     * Similarly, regLSP mirrors the linear address corresponding to SS:SP, and therefore you must rely on getSP()
     * to read the current SP, and setSP() and setSS() to update SP and SS.
     *
     * The other segment registers, such as segDS and segES, have similar getters and setters, but we do not mirror
     * any other segment:offset values in the same way that regLIP mirrors CS:IP, or that regLSP mirrors SS:SP.
     *
     * @this {CPUx86}
     */
    resetRegs()
    {
        this.regEAX = 0;
        this.regEBX = 0;
        this.regECX = 0;
        this.regEDX = 0;
        this.regESP = 0;            // this isn't needed in a 16-bit environment, but is required for I386
        this.regEBP = 0;
        this.regESI = 0;
        this.regEDI = 0;

        /**
         * The following are internal "registers" used to capture intermediate values inside selected helper
         * functions and use them if they've been modified (or are known to change); for example, the MUL and DIV
         * instructions perform calculations that must be propagated to specific registers (eg, AX and/or DX), which
         * the ModRM decoder functions don't know about.  We initialize them here mainly for documentation purposes.
         */
        this.fMDSet = false;        // regMDHi and/or regMDLo are invalid unless fMDSet is true
        this.regMDLo = this.regMDHi = 0;
        this.r64Div = [0, 0];
        this.r64Rem = [0, 0];
        this.regXX = 0;             // for internal use only (eg, assists with ModRM helper functions)

        /**
         * This internal "register" is set in selected opcode handlers to record the original opcode; ordinarily,
         * we dispatch on the opcode but never save it, because it's rarely needed.
         */
        this.bOpcode = 0;

        /**
         * Another internal "register" we occasionally need is an interim copy of bModRM, set inside selected opcode
         * handlers so that the helper function can have access to the instruction's bModRM without resorting to a
         * closure (which, in the Chrome V8 engine, for example, may cause constant recompilation).
         */
        this.bModRM = 0;

        /**
         * NOTE: Even though the 8086 doesn't have CR0 (aka MSW) and IDTR, we initialize them for ALL CPUs, so
         * that functions like X86.helpINT() can use the same code for both.  The 8086/8088 have no direct way
         * of accessing or changing them, so this is an implementation detail those processors are unaware of.
         */
        this.regCR0 = X86.CR0.MSW.ON;
        this.addrIDT = 0;
        this.addrIDTLimit = 0x03FF;
        this.regPS = this.nIOPL = 0;// these should be set before the first setPS() call

        /**
         * Define all the result registers that can be used to "cache" arithmetic and logical flags.
         *
         * In addition, setPS() will initialize resultType, which keeps track of which flags are cached,
         * and resultSize, which maintains the size of the last result; initially, no flags are cached.
         */
        this.resultDst = this.resultSrc = this.resultArith = this.resultLogic = 0;

        /**
         * nFault is set by helpFault() and reset (to -1) by resetRegs() and opIRET().  Its initial purpose was to
         * help helpFault() determine when a nested fault should be converted into either a double-fault (DF_FAULT)
         * or a triple-fault (ie, a processor reset).
         *
         * It has since evolved into another important role: helping segCS.loadIDT() know when an exception
         * is occurring, as opposed to a software interrupt (eg, INT3, INT n or INTO).  The former must set nFault
         * to the corresponding fault #, whereas the latter must set it to -1, so that if the IDT contains a gate
         * whose DPL < CPL, a GP fault will be generated instead.
         *
         * The former always call helpFault(), and the latter call helpTrap(), so nFault is updated automatically.
         * However, there are also intermediate cases, like hardware interrupts, which call helpINT() after manually
         * setting nFault to the IDT #.  TODO: Review all those "intermediate" cases.
         */
        this.nFault = -1;

        /**
         * These are used to snapshot regLIP and regLSP, to help make instructions restartable;
         * currently opLIP is updated prior to every instruction, but opLSP is updated only for instructions
         * that modify the stack pointer (eg, RETF) and should otherwise remain set to X86.ADDR_INVALID.
         *
         * More recently, opCS was added to selectively snapshot an instruction's original CS in case an
         * exception occurs accessing the stack after a new CS has been loaded, allowing the exception handler
         * to recover the old CS and make instructions like CALLF restartable; otherwise, opCS should remain -1.
         *
         * Ditto for opSS and the SS register.
         */
        this.opCS = this.opSS = -1;
        this.opLIP = this.opLSP = X86.ADDR_INVALID;

        /**
         * Segment registers used to be defined as separate selector and base variables (eg, regCS and regCS0),
         * but now they are defined as Segx86 objects.
         */
        this.segCS     = new Segx86(this, Segx86.ID.CODE,  "CS");
        this.segDS     = new Segx86(this, Segx86.ID.DATA,  "DS");
        this.segES     = new Segx86(this, Segx86.ID.DATA,  "ES");
        this.segSS     = new Segx86(this, Segx86.ID.STACK, "SS");
        this.setSP(0);
        this.setSS(0);

        if (I386 && this.model >= X86.MODEL_80386) {
            /**
             * As explained above, EAX depends upon the results of the CPU's power-up self-test; however, the only
             * documented value is zero, which indicates that the 80386 passed.  Additionally, DH is set to the CPU
             * identifier (3) and DL is set to the revision level (stepping).
             */
            switch(this.stepping) {
            case X86.STEPPING_80386_B0:
            case X86.STEPPING_80386_B1:
                this.regEDX = 0x0303;
                break;
            case X86.STEPPING_80386_C0:
                this.regEDX = 0x0304;
                break;
            case X86.STEPPING_80386_D0:
                this.regEDX = 0x0305;
                break;
            case X86.STEPPING_80386_D1:
            case X86.STEPPING_80386_D2:
                this.regEDX = 0x0308;
                break;
            default:
                this.regEDX = 0x0300;       // in the absence of a specific stepping, set revision (DL) to zero
                break;
            }
            this.regCR0 = X86.CR0.ON | X86.CR0.ET;
            this.regCR1 = 0;                // reserved
            this.regCR2 = 0;                // page fault linear address (PFLA)
            this.regCR3 = 0;                // page directory base register (PDBR)
            this.regDR  = [0,0,0,0,null,null,0,0];              // Debug Registers DR0-DR7 (DR4-DR5 are undefined)
            this.regTR  = [null,null,null,null,null,null,0,0];  // Test Registers TR0-TR7 (TR0-TR5 are undefined)
            this.segFS = new Segx86(this, Segx86.ID.DATA,  "FS");
            this.segGS = new Segx86(this, Segx86.ID.DATA,  "GS");
            /**
             * Synchronize the fact that paging is initially disabled with our PAGEBLOCKS functions
             */
            this.disablePageBlocks();
        }

        this.segNULL = new Segx86(this, Segx86.ID.NULL,  "NULL");

        /**
         * The next few initializations mirror what we must do prior to each instruction (ie, inside the stepCPU() function);
         * note that opPrefixes, along with segData and segStack, are reset only after we've executed a non-prefix instruction.
         */
        this.segData = this.segDS;
        this.segStack = this.segSS;
        this.opFlags = this.opPrefixes = 0;
        this.regEA = this.regEAWrite = X86.ADDR_INVALID;

        this.segEA = this.segNULL;

        /**
         * intFlags contains some internal states we use to indicate whether a hardware interrupt (INTFLAG.INTR) or
         * Trap software interrupt (INTR.TRAP) has been requested, as well as when we're in a "HLT" state (INTFLAG.HALT)
         * that requires us to wait for a hardware interrupt (INTFLAG.INTR) before continuing execution.
         *
         * intFlags must be cleared only by checkINTR(), whereas opFlags must be cleared prior to every CPU operation.
         */
        this.intFlags = X86.INTFLAG.NONE;

        if (BACKTRACK) {
            /**
             * Initialize the backtrack indexes for all registers to zero.  And while, yes, it IS possible
             * for raw data to flow through segment registers as well, it's not common enough in real-mode
             * (and too difficult in protected-mode) to merit the overhead.  Ditto for SP, which can't really
             * be considered a general-purpose register.
             *
             * Every time getByte() is called, btiMem0 is filled with the matching backtrack info; similarly,
             * every time getWord() is called, btiMem0 and btiMem1 are filled with the matching backtrack info
             * for the low and high bytes, respectively.
             */
            this.backTrack = {
                btiAL:      0,
                btiAH:      0,
                btiBL:      0,
                btiBH:      0,
                btiCL:      0,
                btiCH:      0,
                btiDL:      0,
                btiDH:      0,
                btiBPLo:    0,
                btiBPHi:    0,
                btiSILo:    0,
                btiSIHi:    0,
                btiDILo:    0,
                btiDIHi:    0,
                btiMem0:    0,
                btiMem1:    0,
                btiMem2:    0,
                btiMem3:    0,
                btiEALo:    0,
                btiEAHi:    0,
                btiIO:      0
            };
        }

        /**
         * Set the initial CS:IP appropriate for the processor; this should be done before the first setPS() call,
         * in part so that CPL will be set properly.
         */
        if (this.model < X86.MODEL_80286) {
            this.setCSIP(0, 0xffff);
        } else {
            /**
             * Assorted 80286-specific registers.  The GDTR and IDTR registers are stored as the following pieces:
             *
             *      GDTR:   addrGDT (24 bits) and addrGDTLimit (24 bits)
             *      IDTR:   addrIDT (24 bits) and addrIDTLimit (24 bits)
             *
             * while the LDTR and TR are stored as special segment registers: segLDT and segTSS.
             *
             * So, yes, our GDTR and IDTR "registers" differ from other segment registers in that we do NOT record
             * the 16-bit limit specified by the LGDT or LIDT instructions; instead, we immediately calculate the limiting
             * address, and record that instead.
             *
             * In addition to different CS:IP reset values, the CS base address must be set to the top of the 16Mb
             * address space rather than the top of the first 1Mb (which is why the MODEL_5170 ROM must be addressable
             * at both 0x0F0000 and 0xFF0000; see the ROM component's "alias" parameter).
             *
             * TODO: Verify what the 80286 actually sets addrGDT and addrGDTLimit to on reset (or if it leaves them alone).
             */
            this.addrGDT = 0; this.addrGDTLimit = 0xffff;                   // GDTR
            this.segLDT = new Segx86(this, Segx86.ID.LDT, "LDT", true);     // LDTR
            this.segTSS = new Segx86(this, Segx86.ID.TSS, "TSS", true);     // TR
            this.segVER = new Segx86(this, Segx86.ID.VER, "VER", true);     // a scratch segment register for VERR and VERW instructions
            this.setCSIP(0xfff0, 0xf000);                   // on an 80286 or 80386, the default CS:IP is 0xF000:0xFFF0 instead of 0xFFFF:0x0000
            this.setCSBase(0xffff0000|0);                   // on an 80286 or 80386, all CS base address bits above bit 15 must be set
        }

        /**
         * This resets the Processor Status flags (regPS), along with all the internal "result registers";
         * we've taken care to ensure that both CPL and IOPL are initialized before this first setPS() call.
         */
        this.setPS(0);

        /**
         * Now that all the segment registers have been created, it's safe to set the current addressing mode.
         */
        this.setProtMode();
    }

    /**
     * updateAddrSize()
     *
     * Select the appropriate ModRM dispatch tables, based on the current ADDRESS size (addrSize), which
     * is based foremost on segCS.sizeAddr, but can also be overridden by an ADDRESS size instruction prefix.
     *
     * There used to be six primary ModRM dispatch table pointers:
     *
     *      aOpModRegByte
     *      aOpModMemByte
     *      aOpModGrpByte
     *      aOpModRegWord
     *      aOpModMemWord
     *      aOpModGrpWord
     *
     * However, when support for the 80386 was added, the number of dispatch tables doubled, and since each entry
     * in the table was a discrete function, decoding was fast, but it also required a LOT of code.
     *
     * So we have now replaced the above table pointers with function pointers:
     *
     *      decodeModRegByte (set to one of: modRegByte16, modRegByte32)
     *      decodeModMemByte (set to one of: modMemByte16, modMemByte32)
     *      decodeModGrpByte (set to one of: modGrpByte16, modGrpByte32)
     *      decodeModRegWord (set to one of: modRegShort16, modRegLong16, modRegShort32, modRegLong32)
     *      decodeModMemWord (set to one of: modMemShort16, modMemLong16, modMemShort32, modMemLong32)
     *      decodeModGrpWord (set to one of: modGrpShort16, modGrpLong16, modGrpShort32, modGrpLong32)
     *
     * So opcode handlers that used to do this:
     *
     *      this.aOpModMemByte[b].call(this, X86.fnADDb);
     *
     * now do this:
     *
     *      this.decodeModMemByte.call(this, X86.fnADDb);
     *
     * Decoding of ModRM bytes is now slightly slower, but the previous code is still in the repository
     * (look for x86modb.js and x86modw.js for the pre-80386 dispatch tables, and x86modb16.js, x86modb32.js,
     * x86modw16.js, x86modw32.js, and x86modsib.js for the post-80386 dispatch tables).
     *
     * @this {CPUx86}
     */
    updateAddrSize()
    {
        if (!I386) {
            this.getAddr = (PREFETCH? this.getShortPrefetch : this.getShort);
            this.decodeModRegByte = X86.modRegByte16;
            this.decodeModMemByte = X86.modMemByte16;
            this.decodeModGrpByte = X86.modGrpByte16;
            this.decodeModRegWord = X86.modRegShort16;
            this.decodeModMemWord = X86.modMemShort16;
            this.decodeModGrpWord = X86.modGrpShort16;
        } else {
            if (this.sizeAddr == 2) {
                this.getAddr = (PREFETCH? this.getShortPrefetch : this.getShort);
                this.decodeModRegByte = X86.modRegByte16;
                this.decodeModMemByte = X86.modMemByte16;
                this.decodeModGrpByte = X86.modGrpByte16;
                if (this.sizeData == 2) {
                    this.decodeModRegWord = X86.modRegShort16;
                    this.decodeModMemWord = X86.modMemShort16;
                    this.decodeModGrpWord = X86.modGrpShort16;
                } else {
                    this.decodeModRegWord = X86.modRegLong16;
                    this.decodeModMemWord = X86.modMemLong16;
                    this.decodeModGrpWord = X86.modGrpLong16;
                }
            } else {
                this.getAddr = (PREFETCH? this.getLongPrefetch : this.getLong);
                this.decodeModRegByte = X86.modRegByte32;
                this.decodeModMemByte = X86.modMemByte32;
                this.decodeModGrpByte = X86.modGrpByte32;
                if (this.sizeData == 2) {
                    this.decodeModRegWord = X86.modRegShort32;
                    this.decodeModMemWord = X86.modMemShort32;
                    this.decodeModGrpWord = X86.modGrpShort32;
                } else {
                    this.decodeModRegWord = X86.modRegLong32;
                    this.decodeModMemWord = X86.modMemLong32;
                    this.decodeModGrpWord = X86.modGrpLong32;
                }
            }
        }
    }

    /**
     * setDataSize(size)
     *
     * This is used by opcodes that require a particular OPERAND size, which we enforce by internally
     * simulating an OPERAND size override, if needed.
     *
     * @this {CPUx86}
     * @param {number} size (2 for 2-byte/16-bit operands, or 4 for 4-byte/32-bit operands)
     */
    setDataSize(size)
    {
        if (this.sizeData != size) {
            this.opPrefixes |= X86.OPFLAG.DATASIZE;
            this.sizeData = size;
            this.maskData = (size == 2? 0xffff : (0xffffffff|0));
            this.updateDataSize();
        }
    }

    /**
     * updateDataSize()
     *
     * @this {CPUx86}
     */
    updateDataSize()
    {
        if (this.sizeData == 2) {
            this.typeData = X86.RESULT.WORD;
            this.getWord = this.getShort;
            this.setWord = this.setShort;
            if (this.sizeAddr == 2) {
                this.decodeModRegWord = X86.modRegShort16;
                this.decodeModMemWord = X86.modMemShort16;
                this.decodeModGrpWord = X86.modGrpShort16;
            } else {
                this.decodeModRegWord = X86.modRegShort32;
                this.decodeModMemWord = X86.modMemShort32;
                this.decodeModGrpWord = X86.modGrpShort32;
            }
        } else {
            this.typeData = X86.RESULT.DWORD;
            this.getWord = this.getLong;
            this.setWord = this.setLong;
            if (this.sizeAddr == 2) {
                this.decodeModRegWord = X86.modRegLong16;
                this.decodeModMemWord = X86.modMemLong16;
                this.decodeModGrpWord = X86.modGrpLong16;
            } else {
                this.decodeModRegWord = X86.modRegLong32;
                this.decodeModMemWord = X86.modMemLong32;
                this.decodeModGrpWord = X86.modGrpLong32;
            }
        }
    }

    /**
     * resetSizes()
     *
     * @this {CPUx86}
     */
    resetSizes()
    {
        /**
         * The following contain the (default) ADDRESS size (2 for 16 bits, 4 for 32 bits), and the corresponding
         * masks for isolating the (src) bits of an address and clearing the (dst) bits of an address.  Like the
         * OPERAND size properties, these are reset to their segCS counterparts at the start of every new instruction.
         */
        if (this.sizeAddr != this.segCS.sizeAddr) {
            this.sizeAddr = this.segCS.sizeAddr;
            this.maskAddr = this.segCS.maskAddr;

            /**
             * It's also worth noting that instructions that implicitly use the stack also rely on STACK size,
             * which is based on the BIG bit of the last descriptor loaded into SS; use the following segSS properties:
             *
             *      segSS.sizeAddr      (2 or 4)
             *      segSS.maskAddr      (0xffff or 0xffffffff)
             *
             * As there is no STACK size instruction prefix override, there's no need to propagate these segSS properties
             * to separate CPUx86 properties, as we do for the OPERAND size and ADDRESS size properties.
             */
            this.updateAddrSize();
        }

        /**
         * The following contain the (default) OPERAND size (2 for 16 bits, 4 for 32 bits), and the corresponding masks
         * for isolating the (src) bits of an OPERAND and clearing the (dst) bits of an OPERAND.  These are reset to
         * their segCS counterparts at the start of every new instruction, but are also set here for documentation purposes.
         */
        if (this.sizeData != this.segCS.sizeData) {
            this.sizeData = this.segCS.sizeData;
            this.maskData = this.segCS.maskData;

            this.updateDataSize();
        }

        this.opPrefixes &= ~(X86.OPFLAG.ADDRSIZE | X86.OPFLAG.DATASIZE);
    }

    /**
     * getChecksum()
     *
     * @this {CPUx86}
     * @returns {number} a 32-bit summation of key elements of the current CPU state (used by the CPU checksum code)
     */
    getChecksum()
    {
        let sum = (this.regEAX + this.regEBX + this.regECX + this.regEDX + this.getSP() + this.regEBP + this.regESI + this.regEDI)|0;
        sum = (sum + this.getIP() + this.getCS() + this.getDS() + this.getSS() + this.getES() + this.getPS())|0;
        return sum;
    }

    /**
     * addIntNotify(nInt, fn)
     *
     * Add a software interrupt notification handler to the CPU's list of such handlers.
     *
     * TODO: Consider adding removeIntNotify().  Example use case: if the Debugger's intWindowsDebugger() function
     * detects that an INT 0x41 client is loaded, it would be quite happy to uninstall itself.
     *
     * @this {CPUx86}
     * @param {number} nInt
     * @param {function(number)} fn is called with the LIP value following the software interrupt
     */
    addIntNotify(nInt, fn)
    {
        this.assert(nInt >= 0 && nInt < 256);
        if (this.aIntNotify[nInt] === undefined) {
            this.aIntNotify[nInt] = [];
        }
        this.aIntNotify[nInt].push(fn);
    }

    /**
     * checkIntNotify(nInt)
     *
     * NOTE: This is called ONLY for "INT N" instructions -- not "INTO" or breakpoint or single-step interrupts
     * or divide exception interrupts, or hardware interrupts, or any simulation of an interrupt (eg, "PUSHF/CALLF").
     *
     * @this {CPUx86}
     * @param {number} nInt
     * @returns {boolean} true if software interrupt may proceed, false if software interrupt should be skipped
     */
    checkIntNotify(nInt)
    {
        let aNotify = this.aIntNotify[nInt];
        if (aNotify !== undefined) {
            for (let i = 0; i < aNotify.length; i++) {
                if (!aNotify[i](this.regLIP)) {
                    return false;
                }
            }
        }
        /**
         * The enabling of INT messages is one of the criteria that's also included in the Debugger's checksEnabled()
         * function, and therefore included in debugCheck, so for maximum speed, we check debugCheck first.
         *
         * NOTE: We've added MAXDEBUG to the test below, because onIntReturn() generates a lot of noise, via
         * dbg.messageIntReturn(), and because there's no way to be sure we'll catch the return (or for some interrupts,
         * *whether* they will return), so it's safer to disable this feature unless you really want it.
         *
         * For most purposes, just having dbg.messageInt(), and the Debugger's ability to selectively turn categories
         * of messages on and off, is good enough.
         */
        if (DEBUGGER && this.flags.debugCheck) {
            if (this.messageEnabled(MESSAGE.INT) && this.dbg.messageInt(nInt, this.regLIP) && MAXDEBUG) {
                this.addIntReturn(this.regLIP, function(cpu, nCycles) {
                    return function onIntReturn(nLevel) {
                        cpu.dbg.messageIntReturn(nInt, nLevel, cpu.getCycles() - nCycles);
                    };
                }(this, this.getCycles()));
            }
        }
        return true;
    }

    /**
     * addIntReturn(addr, fn)
     *
     * Add a return notification handler to the CPU's list of such handlers.
     *
     * When fn(n) is called, it's passed a "software interrupt level", which will normally be 0,
     * unless it's a return from a nested software interrupt (eg, return from INT 0x10 Video BIOS
     * call issued inside another INT 0x10 Video BIOS call).
     *
     * Note that the nesting could be due to a completely different software interrupt that
     * another interrupt notification function is intercepting, so use it as an advisory value only.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @param {function(number)} fn is an interrupt-return notification function
     */
    addIntReturn(addr, fn)
    {
        if (fn !== undefined) {
            if (this.aIntReturn[addr] == null) {
                this.cIntReturn++;
            }
            this.aIntReturn[addr] = fn;
        }
    }

    /**
     * checkIntReturn(addr)
     *
     * We check for possible "INT n" software interrupt returns in the cases of "IRET" (helpIRET), "RETF 2"
     * (helpRETF) and "JMPF [DWORD]" (fnJMPFdw).
     *
     * "JMPF [DWORD]" is an unfortunate choice that newer versions of DOS (as of at least 3.20, and probably
     * earlier) employed in their INT 0x13 hooks; I would have preferred not making this call for that opcode.
     *
     * It is expected (though not required) that callers will check cIntReturn and avoid calling this function
     * if the count is zero, for maximum performance.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     */
    checkIntReturn(addr)
    {
        let fn = this.aIntReturn[addr];
        if (fn != null) {
            fn(--this.cIntReturn);
            delete this.aIntReturn[addr];
        }
    }

    /**
     * checkDebugRegisters(fEnable)
     *
     * opMOVdr() simplifies its life by doing work ONLY if the contents of a Debug register is actually changing.
     *
     * Whenever a single register is about to change, it calls this function with fEnable set to false to REMOVE any
     * active checks, then updates the Debug register, then calls us again with fEnable set to true to (re)ADD active
     * checks.
     *
     * @this {CPUx86}
     * @param {boolean} fEnable
     */
    checkDebugRegisters(fEnable)
    {
        /**
         * We use a constant mask for the enable bits (X86.DR7.L0 | X86.DR7.G0) and shift our copy of regDR7
         * right 2 bits after each Debug register check.
         *
         * Similarly, we make a copy of regDR7 in bitsDR7 and shift the latter right 4 bits at a time, so that
         * the RW and LEN bits for the next Debug register are always in positions 1-0 and 3-2, respectively.
         */
        let regDR7 = this.regDR[7];
        let bitsDR7 = regDR7 >> 16;

        for (let i = 0; i < 4; i++) {
            if (regDR7 & (X86.DR7.L0 | X86.DR7.G0)) {
                /**
                 * We look only to the low bit of the RW field to determine if we should be watching for a write.
                 * FYI, if the low bit is clear but the high bit is set, that's "undefined"; we treat it as a read.
                 */
                let fWrite = !!(bitsDR7 & 0x1);
                /**
                 * The address in regDR[i] should already be masked with ~0x1 for 2-byte accesses (LEN == 0x1) or
                 * with ~0x3 for 4-byte accesses (LEN == 0x3), but if the client forgets, the hardware supposedly
                 * enforces it, so that's what we do here, too.
                 *
                 * FYI, if LEN is set to the "undefined" value of (0x2), we still apply a mask to the address, albeit
                 * a nonsensical mask of ~0x2 or 0xfffffffd.  That's how we define that particular "undefined" LEN.
                 */
                let addr = this.regDR[i];
                let len = ((bitsDR7 >> 2) & 0x3);
                addr &= ~len;       // NOTE: if LEN == 0x0, we don't need to mask, but ~0x0 is equivalent to no mask
                if (fEnable) {
                    this.addMemCheck(addr, fWrite);
                } else {
                    this.removeMemCheck(addr, fWrite);
                }
            }
            regDR7 >>= 2; bitsDR7 >>= 4;
        }
    }

    /**
     * checkMemoryException(addr, nb, fWrite)
     *
     * This "check" function is called by a Memory block to inform us that a memory read or write is occurring,
     * giving us the opportunity look for a matching "read" or "write" breakpoint enabled in one of the DRn registers.
     *
     * TODO: This currently does not discriminate between data reads and execution reads.  When we switch to a true
     * "prefetch" model, that would also be a good time to include a signal to this function indicating which "read"
     * accesses are are actually "exec" accesses.
     *
     * @this {CPUx86}
     * @param {number} addr
     * @param {number} nb (# of bytes)
     * @param {boolean|null} [fWrite] (false if read, true if write, null if exec)
     */
    checkMemoryException(addr, nb, fWrite)
    {
        /**
         * NOTE: We're preventing redundant X86.EXCEPTION.DB_EXC exceptions for a single instruction by checking
         * X86.OPFLAG.DBEXC.  I decided not to rely on the generic X86.OPFLAG.FAULT, because if an instruction
         * first triggers a DIFFERENT exception which then triggers a DEBUG exception (eg, because a Debug register
         * was set on the IDT entry of the first exception), then presumably we'd like to see that DEBUG exception,
         * as opposed to, say, a double fault.  TODO: Determine whether that SHOULD generate a double-fault.
         */
        if (!(this.opFlags & X86.OPFLAG.DBEXC) && (this.regDR[7] & X86.DR7.ENABLE)) {
            nb--;
            /**
             * We use a constant mask for the enable bits (X86.DR7.L0 | X86.DR7.G0) and shift our copy of regDR7
             * right 2 bits after each Debug register check.
             *
             * Similarly, we make a copy of regDR7 in bitsDR7 and shift the latter right 4 bits at a time, so that
             * the RW and LEN bits for the next Debug register are always in positions 1-0 and 3-2, respectively.
             */
            let regDR7 = this.regDR[7];
            let bitsDR7 = regDR7 >> 16;

            let bitsRWMask = X86.DR7.RW0 >> 16;
            let bitsRWRequired = (fWrite? 0x1 : (fWrite == false? 0x3 : 0x0));

            for (let i = 0; i < 4; i++) {
                if ((regDR7 & (X86.DR7.L0 | X86.DR7.G0)) && (bitsDR7 & bitsRWMask) == bitsRWRequired) {
                    /**
                     * NOTE: We reduced nb from 1-4 to 0-3 above, so we don't need to add 1 to len either.
                     */
                    let len = (bitsDR7 >> 2);
                    /**
                     * Time to determine if addr through addr + nb overlaps regDR[i] through regDR[i] + len.
                     */
                    if (addr + nb >= this.regDR[i] && addr <= this.regDR[i] + len) {
                        this.regDR[6] |= (1 << i);
                        /**
                         * Data access breakpoints are not faults; they must generate a trap at the end of the
                         * instruction, so we use the X86.INTFLAG.TRAP flag to generate the X86.EXCEPTION.DB_EXC trap.
                         *
                         *      X86.helpFault.call(this, X86.EXCEPTION.DB_EXC);
                         */
                        this.intFlags |= X86.INTFLAG.TRAP;
                        return;
                    }
                }
                regDR7 >>= 2; bitsDR7 >>= 4;
            }
        }
    }

    /**
     * isProtMode()
     *
     * @this {CPUx86}
     * @returns {boolean} true if protected-mode, false if not
     */
    isProtMode()
    {
        return !!(this.regCR0 & X86.CR0.MSW.PE);
    }

    /**
     * isV86Mode()
     *
     * @this {CPUx86}
     * @returns {boolean} true if V86-mode, false if not
     */
    isV86Mode()
    {
        return !!(this.regPS & X86.PS.VM);
    }

    /**
     * setProtMode(fProt, fV86)
     *
     * Update any opcode handlers that operate significantly differently in real-mode vs. protected-mode, and
     * notify all the segment registers about the mode change as well -- but only those that are "bi-modal"; internal
     * segment registers like segLDT and segTSS do not need to be notified, because they cannot be accessed in real-mode
     * (ie, LLDT, LTR, SLDT, STR are invalid instructions in real-mode, and are among the opcode handlers that we
     * update here).
     *
     * NOTE: Ideally, this function would do its work ONLY on mode *transitions*, but we assume calls to setProtMode()
     * are sufficiently infrequent that it doesn't really matter.
     *
     * @this {CPUx86}
     * @param {boolean} [fProt] (use the current MSW PE bit if not specified)
     * @param {boolean} [fV86] true if the X86.PS.VM (V86-mode) flag is set (or is about to be)
     */
    setProtMode(fProt, fV86)
    {
        if (fProt === undefined) {
            fProt = this.isProtMode();
        }
        if (fV86 === undefined) {
            fV86 = this.isV86Mode();
        }
        if (DEBUG && (fProt != this.isProtMode() || fV86 != this.isV86Mode())) {
            this.printf(MESSAGE.ADDR, "CPU switching to %s-mode\n", (fProt? (fV86? "v86" : "protected") : "real"));
        }
        this.aOpGrp6 = (fProt && !fV86? X86.aOpGrp6Prot : X86.aOpGrp6Real);
        this.segCS.updateMode(false, fProt, fV86);
        this.segDS.updateMode(false, fProt, fV86);
        this.segSS.updateMode(false, fProt, fV86);
        this.segES.updateMode(false, fProt, fV86);
        if (I386 && this.model >= X86.MODEL_80386) {
            this.segFS.updateMode(false, fProt, fV86);
            this.segGS.updateMode(false, fProt, fV86);
        }
        /**
         * This function used to be called only when I386 is true, but it's probably best if we ALWAYS call it, even
         * for 16-bit-only CPUs like the 8086 and 80286; this allows us to write opcode logic by either checking I386
         * and using appropriate hard-coded sizes, or NOT checking I386 and simply using the "soft-coded" sizes in
         * sizeData and sizeAddr.
         */
        this.resetSizes();
    }

    /**
     * saveProtMode()
     *
     * Save CPU state related to protected-mode, for save()
     *
     * @this {CPUx86}
     * @returns {Array}
     */
    saveProtMode()
    {
        if (this.addrGDT != null) {
            let a = [
                this.regCR0,
                this.addrGDT,
                this.addrGDTLimit,
                this.addrIDT,
                this.addrIDTLimit,
                this.segLDT.save(),
                this.segTSS.save(),
                this.nIOPL
            ];
            if (I386 && this.model >= X86.MODEL_80386) {
                a.push(this.regCR1);
                a.push(this.regCR2);
                a.push(this.regCR3);
                a.push(this.regDR);
                a.push(this.regTR);
            }
            return a;
        }
        return null;
    }

    /**
     * restoreProtMode()
     *
     * Restore CPU state related to protected-mode, for restore()
     *
     * @this {CPUx86}
     * @param {Array} a
     */
    restoreProtMode(a)
    {
        if (a && a.length) {
            this.regCR0 = a[0];
            this.addrGDT = a[1];
            this.addrGDTLimit = a[2];
            this.addrIDT = a[3];
            this.addrIDTLimit = a[4];
            this.segLDT.restore(a[5]);
            this.segTSS.restore(a[6]);
            this.nIOPL = a[7];
            if (I386 && this.model >= X86.MODEL_80386) {
                this.regCR1 = a[8];
                this.regCR2 = a[9];
                this.regCR3 = a[10];
                this.regDR  = a[11];
                this.regTR  = a[12];
            }
            this.setProtMode();
        }
    }

    /**
     * save(fRunning)
     *
     * This implements save support for the X86 component.
     *
     * NOTE: When the Computer starts issuing powerDown() calls, it always calls the CPU first, and the CPU's
     * powerDown() handler has the added responsibility of:
     *
     *      1) recording whether or not the CPU is currently running
     *      2) stopping the CPU if the powerDown is part of a shutDown
     *      3) passing the original running state to us
     *
     * UPDATES: The current speed multiplier from getSpeed() is now saved in group #3, so that your speed is preserved.
     *
     * @this {CPUx86}
     * @param {boolean} [fRunning]
     * @returns {Object|null}
     */
    save(fRunning)
    {
        let state = new State(this);
        state.set(0, [this.regEAX, this.regEBX, this.regECX, this.regEDX, this.getSP(), this.regEBP, this.regESI, this.regEDI]);
        let a = [this.getIP(), this.segCS.save(), this.segDS.save(), this.segSS.save(), this.segES.save(), this.saveProtMode(), this.getPS()];
        if (I386 && this.model >= X86.MODEL_80386) {
            a.push(this.segFS.save());
            a.push(this.segGS.save());
        }
        state.set(1, a);
        state.set(2, [this.segData.sName, this.segStack.sName, this.opFlags, this.opPrefixes, this.intFlags, this.regEA, this.regEAWrite]);
        state.set(3, [0, this.nTotalCycles, this.getSpeed(), fRunning, this.saveTimers()]);
        state.set(4, this.bus.saveMemory());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the X86 component.
     *
     * @this {CPUx86}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        let a = data[0];
        this.regEAX = a[0];
        this.regEBX = a[1];
        this.regECX = a[2];
        this.regEDX = a[3];
        let regESP = a[4];
        this.regEBP = a[5];
        this.regESI = a[6];
        this.regEDI = a[7];

        a = data[1];
        this.segCS.restore(a[1]);
        this.segDS.restore(a[2]);
        this.segSS.restore(a[3]);
        this.segES.restore(a[4]);
        this.restoreProtMode(a[5]);
        this.setPS(a[6]);

        /**
         * The introduction of protected-mode requires us to restore memory contents sooner than we used to
         * (ie, before we load any segment registers).
         */
        let fRestored = false;

        if (this.bus.restoreMemory(data[4])) {
            /**
             * It's important to call setCSIP(), both to ensure that the CPU's linear IP register (regLIP) is updated
             * properly AND to ensure the CPU's default ADDRESS and OPERAND sizes are set properly.
             */
            this.setCSIP(a[0], this.segCS.sel);

            /**
             * It's also important to call setSP(), so that the linear SP register (regLSP) will be updated properly;
             * we also need to call setSS(), to ensure that the lower and upper stack limits are properly initialized.
             */
            this.setSP(regESP);
            this.setSS(this.segSS.sel);

            if (I386 && this.model >= X86.MODEL_80386) {
                this.segFS.restore(a[7]);
                this.segGS.restore(a[8]);
            }
            fRestored = true;
        }

        a = data[2];
        this.segData  = a[0] != null && this.getSeg(a[0]) || this.segDS;
        this.segStack = a[1] != null && this.getSeg(a[1]) || this.segSS;
        this.opFlags = a[2];
        this.opPrefixes = a[3];
        this.intFlags = a[4];
        this.regEA = a[5];          // save/restore of last EA calculation(s) isn't strictly necessary,
        this.regEAWrite = a[6];     // but they may be of some interest to, say, the Debugger

        a = data[3];
        this.nTotalCycles = a[1];   // a[0] was previously nBurstDivisor (no longer used)
        this.setSpeed(a[2]);        // old states didn't contain a value from getSpeed(), but setSpeed() checks
        /**
         * autoStart is normally either true, false, or null (the latter depends on the presence of a debugger),
         * but there are special circumstances where it can be a number (ie, zero) if someone has decided that the
         * machine should NOT be auto-started regardless.
         */
        if (a[3] != null && this.flags.autoStart !== 0) {   // less old states didn't preserve the original running state
            this.flags.autoStart = a[3] || null;            // prefer null over false, because false is a firm no-autoStart
        }
        if (a[4] != null) {
            this.restoreTimers(a[4]);
        }
        /**
         * Making sure the ROM BIOS timer values are synced with the RTC (if any) is something the ChipSet component
         * would take care of automatically, but alas, it is initialized long before RAM is restored, so we have to make
         * this callback.
         */
        if (this.chipset) this.chipset.syncRTCTime();
        return fRestored;
    }

    /**
     * getSeg(sName)
     *
     * @param {string} sName
     * @returns {Segx86|Array}
     */
    getSeg(sName)
    {
        switch(sName) {
        case "CS":
            return this.segCS;
        case "DS":
            return this.segDS;
        case "SS":
            return this.segSS;
        case "ES":
            return this.segES;
        case "NULL":
            return this.segNULL;
        default:
            /**
             * HACK: We return a fake segment register object in which only the base linear address is valid,
             * because that's all the caller provided (ie, we must be restoring from an older state).
             */
            this.assert(typeof sName == "number");
            return [0, sName, 0, 0, ""];
        }
    }

    /**
     * getCS()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getCS()
    {
        return this.segCS.sel;
    }

    /**
     * setCS(sel)
     *
     * NOTE: This is used ONLY by those few undocumented 8086/8088/80186/80188 instructions that "MOV" or "POP" a value
     * into CS, which we assume have the same behavior as any other instruction that moves or pops a segment register
     * (ie, suppresses h/w interrupts for one instruction).  Instructions that "JMP" or "CALL" or "INT" or "IRET" a new
     * value into CS are always accompanied by a new IP value, so they use setCSIP() instead, which does NOT suppress
     * h/w interrupts.
     *
     * @this {CPUx86}
     * @param {number} sel
     * @returns {boolean}
     */
    setCS(sel)
    {
        if (this.setCSIP(this.getIP(), sel) != null) {
            if (!BUGS_8086) this.opFlags |= this.OPFLAG_NOINTR_8086;
            return true;
        }
        return false;
    }

    /**
     * getDS()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getDS()
    {
        return this.segDS.sel;
    }

    /**
     * setDS(sel)
     *
     * @this {CPUx86}
     * @param {number} sel
     */
    setDS(sel)
    {
        if (this.segDS.load(sel) !== X86.ADDR_INVALID) {
            if (!BUGS_8086) this.opFlags |= this.OPFLAG_NOINTR_8086;
            return true;
        }
        return false;
    }

    /**
     * getSS()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getSS()
    {
        return this.segSS.sel;
    }

    /**
     * setSS(sel)
     *
     * @this {CPUx86}
     * @param {number} sel
     * @param {boolean} [fInterruptable]
     * @returns {boolean}
     */
    setSS(sel, fInterruptable)
    {
        let regESP = this.getSP();
        let regLSP = this.segSS.load(sel);
        if (regLSP !== X86.ADDR_INVALID) {
            /**
             * The safest way to update regLSP after a potential change to segSS.base is to call setSP() with the
             * original stack pointer retrieved above via getSP().  When I tried to be clever and do this instead:
             *
             *      this.regLSP = (regLSP + regESP)|0;
             *
             * 16-bit stacks began inadvertently using ESP instead of SP.  The moral: don't be needlessly clever.
             */
            this.setSP(regESP);

            /**
             * The desire to use a linear stack pointer (regLSP) for internal stack operations has some pitfalls;
             * one involves these upper and lower limit calculations.  Example: Xenix 386 creates a (non-expand-down)
             * 32-bit data segment for all of DS, ES, and SS, which uses a limit of "-1"; ie:
             *
             *      SS=0018[ED800000,FFFFFFFF] DS=0018[ED800000,FFFFFFFF] ES=0018[ED800000,FFFFFFFF]
             *
             * so we end up calculating an upper limit of 0xED7FFFFF, which is lower than the lower limit of 0xED800000.
             *
             * For now, these "limit wrap-around" situations are resolved by using unsigned values and then applying
             * a linear address ceiling.  TODO: Come up with a simple solution for properly dealing with limit wrap-around.
             */
            if (this.segSS.fExpDown) {
                this.regLSPLimit = (this.segSS.base >>> 0) + (this.segSS.maskAddr >>> 0);
                this.regLSPLimitLow = (this.segSS.base >>> 0) + (this.segSS.limit >>> 0);
            } else {
                this.regLSPLimit = (this.segSS.base >>> 0) + (this.segSS.limit >>> 0);
                this.regLSPLimitLow = (this.segSS.base >>> 0);
            }

            this.regLSPLimit = Math.min(this.regLSPLimit, this.nMemMask >>> 0);
            this.regLSPLimitLow = Math.min(this.regLSPLimitLow, this.nMemMask >>> 0);

            if (!BUGS_8086 && !fInterruptable) this.opFlags |= X86.OPFLAG.NOINTR;
            return true;
        }
        return false;
    }

    /**
     * getES()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getES()
    {
        return this.segES.sel;
    }

    /**
     * setES(sel)
     *
     * @this {CPUx86}
     * @param {number} sel
     * @returns {boolean}
     */
    setES(sel)
    {
        if (this.segES.load(sel) !== X86.ADDR_INVALID) {
            if (!BUGS_8086) this.opFlags |= this.OPFLAG_NOINTR_8086;
            return true;
        }
        return false;
    }

    /**
     * getFS()
     *
     * NOTE: segFS is defined for I386 only.
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getFS()
    {
        return this.segFS.sel;
    }

    /**
     * setFS(sel)
     *
     * NOTE: segFS is defined for I386 only.
     *
     * @this {CPUx86}
     * @param {number} sel
     * @returns {boolean}
     */
    setFS(sel)
    {
        return this.segFS.load(sel) !== X86.ADDR_INVALID;
    }

    /**
     * getGS()
     *
     * NOTE: segGS is defined for I386 only.
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getGS()
    {
        return this.segGS.sel;
    }

    /**
     * setGS(sel)
     *
     * NOTE: segGS is defined for I386 only.
     *
     * @this {CPUx86}
     * @param {number} sel
     * @returns {boolean}
     */
    setGS(sel)
    {
        return this.segGS.load(sel) !== X86.ADDR_INVALID;
    }

    /**
     * getIP()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getIP()
    {
        return (this.regLIP - this.segCS.base)|0;
    }

    /**
     * setIP(off)
     *
     * @this {CPUx86}
     * @param {number} off
     */
    setIP(off)
    {
        this.regLIP = (this.segCS.base + (off & (I386? this.maskData : 0xffff)))|0;
        if (PREFETCH) this.refillPrefetch();
    }

    /**
     * setLIP(addr)
     *
     * @this {CPUx86}
     * @param {number} addr
     */
    setLIP(addr)
    {
        this.regLIP = addr;
        this.regLIPMax = (this.segCS.base >>> 0) + (this.segCS.limit >>> 0) + 1;

        /**
         * TODO: Verify the proper source for CPL.  Should it come from segCS.cpl or segCS.dpl?
         * Note that LOADALL386 wants it to come from segSS.dpl.
         */
        this.nCPL = this.segCS.cpl;             // cache the current CPL where it's more convenient

        if (I386 && this.model >= X86.MODEL_80386) {
            this.resetSizes();
        }

        /**
         * Here, we need to additionally test whether the prefetch buffer (adwPrefetch) has been allocated yet,
         * because when resetRegs() is first called, the Bus hasn't been initialized yet, so there's nothing to fetch.
         *
         * We'll allocate the prefetch buffer when the Bus calls initMemory().
         */
        if (PREFETCH && this.adwPrefetch) this.refillPrefetch();
    }

    /**
     * setCSIP(off, sel, fCall)
     *
     * This function is a little different from the other segment setters, only because it turns out that CS is
     * never set without an accompanying IP (well, except for a few undocumented instructions, like POP CS, which
     * were available ONLY on the 8086/8088/80186/80188; see setCS() for details).
     *
     * And even though this function is called setCSIP(), please note the order of the parameters is [IP,CS],
     * which matches the order that CS:IP values are normally stored in memory, allowing us to make calls like this:
     *
     *      this.setCSIP(this.popWord(), this.popWord());
     *
     * @this {CPUx86}
     * @param {number} off
     * @param {number} sel
     * @param {boolean} [fCall] is true if CALLF in progress, false if RETF/IRET in progress, undefined otherwise
     * @returns {boolean|null} true if a stack switch occurred; the only operation that needs to pay attention is opRETFn()
     */
    setCSIP(off, sel, fCall)
    {
        /**
         * Setting IP needs to occur AFTER loadCode(), because it may differ from the given IP if sel refers to a gate.
         */
        let base = this.segCS.loadCode(off, sel, fCall);
        if (base !== X86.ADDR_INVALID) {
            this.setLIP(base + (this.segCS.offIP & (I386? this.segCS.maskData : 0xffff)));
            return this.segCS.fStackSwitch;
        }
        return null;
    }

    /**
     * setCSBase(addr)
     *
     * Since the CPU must maintain regLIP as the sum of the CS base and the current IP, all calls to setBase()
     * for segCS need to go through here.
     *
     * @param {number} addr
     */
    setCSBase(addr)
    {
        let regIP = this.getIP();
        addr = this.segCS.setBase(addr);
        this.regLIP = (addr + regIP)|0;
        this.regLIPMax = (addr >>> 0) + (this.segCS.limit >>> 0) + 1;
    }

    /**
     * checkIP(inc)
     *
     * TODO: If we didn't care about compatibility, we could just return:
     *
     *      (this.regLIP + inc)|0
     *
     * and be done with it, because there probably isn't any "good" code that triggers the
     * "newLIP > this.regLIPMax" condition.  This check costs us about 2Mhz performance on an 80386.
     *
     * Turning PREFETCH on tends to offset this performance hit, but PREFETCH *without* this hit would
     * probably perform even better.
     *
     * @this {CPUx86}
     * @param {number} inc (positive)
     * @returns {number} new LIP
     */
    checkIP(inc)
    {
        let newLIP = (this.regLIP >>> 0) + inc;
        if (newLIP > this.regLIPMax) {
            /**
             * There's no such thing as a GP fault on the 8086/8088, and I'm now assuming that,
             * on newer processors, all attempts to fetch opcodes beyond the limit trigger a fault.
             */
            if (this.model <= X86.MODEL_8088 /* || this.segCS.limit == this.segCS.maskAddr */) {
                newLIP = this.segCS.base + ((newLIP - this.regLIPMax) & (I386? this.maskData : 0xffff));
                if (inc == 2) this.opFlags |= X86.OPFLAG.WRAP;
            } else {
                X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
            }
        }
        return newLIP|0;
    }

    /**
     * resetIP()
     *
     * @this {CPUx86}
     */
    resetIP()
    {
        if (PREFETCH) {
            this.cbPrefetch += this.regLIP - this.opLIP;
            this.regLIP = this.opLIP;
            /**
             * If the reset produces a prefetch total greater than the allocated amount, then we must have
             * refilled the queue somewhere in the middle of the rewound instruction, so we need to refill the
             * queue all over again; otherwise, the next repetition may fetch future data instead of past data.
             *
             * That's the bad news; the good news is that this extra refill should only hurt performance of the
             * first repetition.
             */
            if (this.cbPrefetch > CPUx86.PFINFO.LENGTH) this.refillPrefetch();
        } else {
            this.regLIP = this.opLIP;
        }
    }

    /**
     * rewindIP(fCheckSeg)
     *
     * This "rewinds" IP to the beginning of the current instruction (ie, the REP prefix of a string instruction).
     *
     * @this {CPUx86}
     * @param {boolean} [fCheckSeg]
     */
    rewindIP(fCheckSeg = false)
    {
        if (fCheckSeg && (this.opPrefixes & X86.OPFLAG.SEG)) {
            /**
             * This instruction has both REP and SEG overrides, so if we IRET'ed to it with interrupts enabled,
             * don't repeat it; this helps simulate the 8086/8088's failure to properly restart such an instruction
             * after a hardware interrupt (which became known as a "feature", hence not part of BUGS_8086).
             */
            if (this.model <= X86.MODEL_8088 && (this.opPrefixes & X86.OPFLAG.IRET) && (this.regPS & X86.PS.IF)) {
                return;
            }
        }
        this.opFlags |= X86.OPFLAG.REPEAT;
        this.resetIP();
    }

    /**
     * getSP()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getSP()
    {
        if (I386) {
            // assert(!((this.regLSP - this.segSS.base) & ~this.segSS.maskAddr));
            return (this.regESP & ~this.segSS.maskAddr) | (this.regLSP - this.segSS.base);
        }
        return (this.regLSP - this.segSS.base)|0;
    }

    /**
     * setSP(off)
     *
     * @this {CPUx86}
     * @param {number} off
     */
    setSP(off)
    {
        if (I386) {
            this.regESP = off;
            this.regLSP = (this.segSS.base + (off & this.segSS.maskAddr))|0;
        } else {
            this.regLSP = (this.segSS.base + off)|0;
        }
    }

    /**
     * setArithResult(dst, src, value, type, fSubtract)
     *
     * Updates the flags for arithmetic instructions; use setLogicResult() for logical instructions.
     *
     * The type parameter indicates both the size of the result (BYTE, WORD or DWORD) and which of the
     * flags should now be considered "cached" by the new result variables.  If the previous resultType
     * specifies any flags not contained in the new type parameter, then those flags must be immediately
     * calculated and written to the appropriate bit(s) in regPS.
     *
     * The default assumes an "addition" (eg, ADD, ADC, INC), where value = dst + src. The fSubtract
     * parameter is used to indicate a "subtraction" (eg, CMP, DEC, SUB, SBB), where value = dst - src;
     * We can transform a subtraction into an addition, since it's also true that dst = value + src,
     * by swapping swap dst and value -- which is exactly what we do below.  This allows all downstream
     * flag calculations (eg, getCF(), getOF()) to remain the same.
     *
     * @this {CPUx86}
     * @param {number} dst
     * @param {number} src
     * @param {number} value
     * @param {number} type
     * @param {boolean} [fSubtract]
     */
    setArithResult(dst, src, value, type, fSubtract)
    {
        if ((type & X86.RESULT.ALL) != X86.RESULT.ALL && type != this.resultType) {
            let diff = ((type ^ this.resultType) & this.resultType);
            if (diff) {
                if (diff & X86.RESULT.CF) this.getCF();
                if (diff & X86.RESULT.PF) this.getPF();
                if (diff & X86.RESULT.AF) this.getAF();
                if (diff & X86.RESULT.ZF) this.getZF();
                if (diff & X86.RESULT.SF) this.getSF();
                if (diff & X86.RESULT.OF) this.getOF();
            }
        }
        if (!fSubtract) {
            this.resultDst = dst;
            this.resultArith = value;
        } else {
            this.resultDst = value;
            this.resultArith = dst;
        }
        this.resultSrc = src;
        this.resultLogic = value;
        this.resultType = type;
    }

    /**
     * setLogicResult(value, type, carry, overflow)
     *
     * Updates the flags for logical instructions (eg, AND, OR, TEST, XOR); ie, instructions
     * that update PF, ZF, and SF, while clearing CF and OF (although CF and OF can be explicitly
     * set via the carry and overflow parameters as needed).  AF is always considered undefined.
     *
     * TODO: We should observe the behavior of AF on real CPUs, and determine if there is a
     * well-defined behavior, even though none is documented.  Ditto for OF on shift instructions
     * when the shift count > 1.
     *
     * @this {CPUx86}
     * @param {number} value
     * @param {number} type
     * @param {number} [carry]
     * @param {number} [overflow]
     * @returns {number} value
     */
    setLogicResult(value, type, carry, overflow)
    {
        this.resultType = type | X86.RESULT.LOGIC;
        this.resultLogic = value;
        if (carry) this.setCF(); else this.clearCF();
        if (overflow) this.setOF(); else this.clearOF();
        /**
         * Limited testing on actual hardware (the Intel Core i5 in my Mac Mini) as well as test
         * results from another user (https://github.com/jeffpar/pcjs/issues/81) suggest that AF is
         * cleared by logic ops (at least AND/OR/TEST/XOR; see https://sandpile.org/x86/flags.htm).
         *
         * The official Intel stance on AF in these circumstances is that it's "undefined", but we all
         * know that's just code for "we don't want to document how it ACTUALLY behaves".  Clearing AF
         * seems, um, "clearly" better than just letting it float, but that's all we can say for now.
         *
         * In particular, real-world tests with shift and rotate instructions are needed, because unlike
         * AND/OR/TEST/XOR, those alter carry in very specific ways, so why not "auxiliary carry" as well?
         *
         * In other words, clearAF() is not the end of the story; the original TODO above is still
         * very much a "to do".
         */
        this.clearAF();
        return value;
    }

    /**
     * setRotateResult(result, carry, size)
     *
     * Used by all rotate instructions (ie, RCL, RCR, ROL, ROR) to update CF and OF.
     *
     * TODO: We should observe the behavior of OF on real CPUs whenever the rotate count > 1,
     * and determine if there is a well-defined behavior, even though none is documented.
     *
     * @this {CPUx86}
     * @param {number} result
     * @param {number} carry
     * @param {number} size
     */
    setRotateResult(result, carry, size)
    {
        if (carry & size) this.setCF(); else this.clearCF();
        if ((result ^ carry) & size) this.setOF(); else this.clearOF();
    }

    /**
     * getCarry()
     *
     * @this {CPUx86}
     * @returns {number} 0 or 1, depending on whether CF is clear or set
     */
    getCarry()
    {
        return this.getCF()? 1 : 0;
    }

    /**
     * getCF()
     *
     * The following table summarizes bit 31 of the dst (D) and src (S) operands, bit 31 of the
     * addition (A), along with the expected carry bit (C):
     *
     *      D   S   A   C
     *      -   -   -   -
     *      0   0   0   0       no
     *      0   0   1   0       no (there must have been a carry out of bit 30, but it was "absorbed")
     *      0   1   0   1       yes (there must have been a carry out of bit 30, but it was NOT "absorbed")
     *      0   1   1   0       no
     *      1   0   0   1       yes (same as the preceding "yes" case)
     *      1   0   1   0       no
     *      1   1   0   1       yes (since the addition of two ones must always produce a carry)
     *      1   1   1   1       yes (since the addition of two ones must always produce a carry)
     *
     * So, we use the following calculation:
     *
     *      (resultDst ^ ((resultDst ^ resultSrc) & (resultSrc ^ resultArith))) & resultType
     *
     * NOTE: The above table assumes that the resultDst (D) and resultSrc (S) operands were ADDED to
     * produce resultArith (A); if they were SUBTRACTED instead (D - S), then D and A must be swapped
     * after the subtraction, so that the above truth table still applies; see setArithResult().
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.CF
     */
    getCF()
    {
        if (this.resultType & X86.RESULT.CF) {
            this.regPS &= ~X86.PS.CF;
            if ((this.resultDst ^ ((this.resultDst ^ this.resultSrc) & (this.resultSrc ^ this.resultArith))) & (this.resultType & X86.RESULT.TYPE)) {
                this.regPS |= X86.PS.CF;
            }
            this.resultType &= ~X86.RESULT.CF;
        }
        return this.regPS & X86.PS.CF;
    }

    /**
     * getPF()
     *
     * From http://graphics.stanford.edu/~seander/bithacks.html#ParityParallel:
     *
     *      unsigned int v;  // word value to compute the parity of
     *      v ^= v >> 16;
     *      v ^= v >> 8;
     *      v ^= v >> 4;
     *      v &= 0xf;
     *      return (0x6996 >> v) & 1;
     *
     *      The method above takes around 9 operations, and works for 32-bit words.  It may be optimized to work just on
     *      bytes in 5 operations by removing the two lines immediately following "unsigned int v;".  The method first shifts
     *      and XORs the eight nibbles of the 32-bit value together, leaving the result in the lowest nibble of v.  Next,
     *      the binary number 0110 1001 1001 0110 (0x6996 in hex) is shifted to the right by the value represented in the
     *      lowest nibble of v.  This number is like a miniature 16-bit parity-table indexed by the low four bits in v.
     *      The result has the parity of v in bit 1, which is masked and returned.
     *
     * The x86 parity flag (PF) is based exclusively on the low 8 bits of resultParitySign, so our calculation is bit
     * simpler.  Note that PF must be SET if that byte has EVEN parity, and CLEAR if it has ODD parity.
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.PF
     */
    getPF()
    {
        if (this.resultType & X86.RESULT.PF) {
            this.regPS &= ~X86.PS.PF;
            if ((0x9669 >> ((this.resultLogic ^ (this.resultLogic >> 4)) & 0xf)) & 1) {
                this.regPS |= X86.PS.PF;
            }
            this.resultType &= ~X86.RESULT.PF;
        }
        return this.regPS & X86.PS.PF;
    }

    /**
     * getAF()
     *
     * To determine if there's been a carry out of the low 4 bits of an arithmetic operation,
     * we look at all the possible inputs for bit 4, and calculate AF = A^(D^S).
     *
     *      D   S   A   D^S AF
     *      -   -   -   --- --
     *      0   0   0   0   0
     *      0   0   1   0   1
     *      0   1   0   1   1
     *      0   1   1   1   0
     *      1   0   0   1   1
     *      1   0   1   1   0
     *      1   1   0   0   0
     *      1   1   1   0   1
     *
     * The final calculation looks like:
     *
     *      (resultArith ^ (resultDst ^ resultSrc)) & 0x0010
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.AF
     */
    getAF()
    {
        if (this.resultType & X86.RESULT.AF) {
            this.regPS &= ~X86.PS.AF;
            if ((this.resultArith ^ (this.resultDst ^ this.resultSrc)) & 0x0010) {
                this.regPS |= X86.PS.AF;
            }
            this.resultType &= ~X86.RESULT.AF;
        }
        return this.regPS & X86.PS.AF;
    }

    /**
     * getZF()
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.ZF
     */
    getZF()
    {
        if (this.resultType & X86.RESULT.ZF) {
            this.regPS &= ~X86.PS.ZF;
            if (!(this.resultLogic & (((this.resultType & X86.RESULT.TYPE) - 1) | (this.resultType & X86.RESULT.TYPE)))) {
                this.regPS |= X86.PS.ZF;
            }
            this.resultType &= ~X86.RESULT.ZF;
        }
        return this.regPS & X86.PS.ZF;
    }

    /**
     * getSF()
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.SF
     */
    getSF()
    {
        if (this.resultType & X86.RESULT.SF) {
            this.regPS &= ~X86.PS.SF;
            if (this.resultLogic & (this.resultType & X86.RESULT.TYPE)) {
                this.regPS |= X86.PS.SF;
            }
            this.resultType &= ~X86.RESULT.SF;
        }
        return this.regPS & X86.PS.SF;
    }

    /**
     * getOF()
     *
     * Overflow was originally calculated as:
     *
     *      (resultParitySign ^ resultAuxOverflow ^ (resultParitySign >> 1)) & (resultSize >> 1)
     *
     * but as you can see, that calculation depends on the carry out of the 8/16/32-bit result in
     * resultParitySign, which we don't have access to for 32-bit results.  So we fall-back to the
     * following:
     *
     *      ((resultDst ^ resultArith) & (resultSrc ^ resultArith)) & resultType
     *
     * which you can verify from the following table of sign bits, where x1 is resultDst ^ resultArith,
     * and x2 is resultSrc ^ resultArith:
     *
     *      D   S   A   x1  x2  OF
     *      -   -   -   --  --  --
     *      0   0   0   0   0   0
     *      0   0   1   1   1   1 (adding two positive values yielded a negative value)
     *      0   1   0   0   1   0
     *      0   1   1   1   0   0
     *      1   0   0   1   0   0
     *      1   0   1   0   1   0
     *      1   1   0   1   1   1 (adding two negative values yielded a positive value)
     *      1   1   1   0   0   0
     *
     * NOTE: The above table assumes that the resultDst (D) and resultSrc (S) operands were ADDED to
     * produce resultArith (A); if they were SUBTRACTED instead (D - S), then D and A must be swapped
     * after the subtraction, so that the above truth table still applies; see setArithResult().
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.OF
     */
    getOF()
    {
        if (this.resultType & X86.RESULT.OF) {
            this.regPS &= ~X86.PS.OF;
            if (((this.resultDst ^ this.resultArith) & (this.resultSrc ^ this.resultArith)) & (this.resultType & X86.RESULT.TYPE)) {
                this.regPS |= X86.PS.OF;
            }
            this.resultType &= ~X86.RESULT.OF;
        }
        return this.regPS & X86.PS.OF;
    }

    /**
     * getTF()
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.TF
     */
    getTF()
    {
        return (this.regPS & X86.PS.TF);
    }

    /**
     * getIF()
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.IF
     */
    getIF()
    {
        return (this.regPS & X86.PS.IF);
    }

    /**
     * getDF()
     *
     * @this {CPUx86}
     * @returns {number} 0 or X86.PS.DF
     */
    getDF()
    {
        return (this.regPS & X86.PS.DF);
    }

    /**
     * clearCF()
     *
     * @this {CPUx86}
     */
    clearCF()
    {
        this.resultType &= ~X86.RESULT.CF;
        this.regPS &= ~X86.PS.CF;
    }

    /**
     * clearPF()
     *
     * @this {CPUx86}
     */
    clearPF()
    {
        this.resultType &= ~X86.RESULT.PF;
        this.regPS &= ~X86.PS.PF;
    }

    /**
     * clearAF()
     *
     * @this {CPUx86}
     */
    clearAF()
    {
        this.resultType &= ~X86.RESULT.AF;
        this.regPS &= ~X86.PS.AF;
    }

    /**
     * clearZF()
     *
     * @this {CPUx86}
     */
    clearZF()
    {
        this.resultType &= ~X86.RESULT.ZF;
        this.regPS &= ~X86.PS.ZF;
    }

    /**
     * clearSF()
     *
     * @this {CPUx86}
     */
    clearSF()
    {
        this.resultType &= ~X86.RESULT.SF;
        this.regPS &= ~X86.PS.SF;
    }

    /**
     * clearIF()
     *
     * @this {CPUx86}
     */
    clearIF()
    {
        this.regPS &= ~X86.PS.IF;
    }

    /**
     * clearDF()
     *
     * @this {CPUx86}
     */
    clearDF()
    {
        this.regPS &= ~X86.PS.DF;
    }

    /**
     * clearOF()
     *
     * @this {CPUx86}
     */
    clearOF()
    {
        this.resultType &= ~X86.RESULT.OF;
        this.regPS &= ~X86.PS.OF;
    }

    /**
     * setCF()
     *
     * @this {CPUx86}
     */
    setCF()
    {
        this.resultType &= ~X86.RESULT.CF;
        this.regPS |= X86.PS.CF;
    }

    /**
     * setPF()
     *
     * @this {CPUx86}
     */
    setPF()
    {
        this.resultType &= ~X86.RESULT.PF;
        this.regPS |= X86.PS.PF;
    }

    /**
     * setAF()
     *
     * @this {CPUx86}
     */
    setAF()
    {
        this.resultType &= ~X86.RESULT.AF;
        this.regPS |= X86.PS.AF;
    }

    /**
     * setZF()
     *
     * @this {CPUx86}
     */
    setZF()
    {
        this.resultType &= ~X86.RESULT.ZF;
        this.regPS |= X86.PS.ZF;
    }

    /**
     * setSF()
     *
     * @this {CPUx86}
     */
    setSF()
    {
        this.resultType &= ~X86.RESULT.SF;
        this.regPS |= X86.PS.SF;
    }

    /**
     * setIF()
     *
     * @this {CPUx86}
     */
    setIF()
    {
        this.regPS |= X86.PS.IF;
    }

    /**
     * setDF()
     *
     * @this {CPUx86}
     */
    setDF()
    {
        this.regPS |= X86.PS.DF;
    }

    /**
     * setOF()
     *
     * @this {CPUx86}
     */
    setOF()
    {
        this.resultType &= ~X86.RESULT.OF;
        this.regPS |= X86.PS.OF;
    }

    /**
     * getPS()
     *
     * @this {CPUx86}
     * @returns {number}
     */
    getPS()
    {
        return (this.regPS & ~X86.PS_CACHED) | (this.getCF() | this.getPF() | this.getAF() | this.getZF() | this.getSF() | this.getOF());
    }

    /**
     * setMSW(w)
     *
     * Factored out of x86op0f.js, since both opLMSW and opLOADALL are capable of setting a new MSW.
     * The caller is responsible for assessing the appropriate cycle cost.
     *
     * @this {CPUx86}
     * @param {number} w
     */
    setMSW(w)
    {
        /**
         * This instruction is always allowed to set MSW.PE, but it cannot clear MSW.PE once set;
         * therefore, we always OR the previous value of MSW.PE into the new value before loading.
         */
        w |= (this.regCR0 & X86.CR0.MSW.PE) | X86.CR0.MSW.ON;
        this.regCR0 = (this.regCR0 & ~X86.CR0.MSW.MASK) | (w & X86.CR0.MSW.MASK);
        /**
         * Since the 80286 cannot return to real-mode via this instruction, the only transition we
         * must worry about is to protected-mode.  And there's no harm calling setProtMode() if the
         * CPU is already in protected-mode; we could certainly optimize out the call in that case,
         * but the instruction isn't used frequently enough to warrant it.
         */
        if (this.regCR0 & X86.CR0.MSW.PE) this.setProtMode(true);
    }

    /**
     * setPS(regPS)
     *
     * @this {CPUx86}
     * @param {number} regPS
     * @param {number} [cpl]
     */
    setPS(regPS, cpl)
    {
        /**
         * OS/2 1.0 discriminates between an 80286 and an 80386 based on whether an IRET in real-mode that
         * pops 0xF000 into the flags is able to set *any* of flag bits 12-15: if it can, then OS/2 declares
         * the CPU an 80386.
         *
         * So, if the CPU is an 80286, we clear incoming bits 12-14 in real-mode (bit 15 is never allowed to
         * be modified, so there's no need to mask it).  And if the CPU is an 80386, no bits are automatically
         * cleared in real-mode (PS_CLEAR_RM is zero); although that allows the IOPL bits to change, it doesn't
         * affect real-mode operation, since CPL is always zero, making IOPL irrelevant.
         */
        if (!(this.regCR0 & X86.CR0.MSW.PE)) regPS &= ~this.PS_CLEAR_RM;

        /**
         * There are some cases (eg, an IRET returning to a less privileged code segment) where the CPL
         * we compare against should come from the outgoing code segment, so if the caller provided it, use it.
         */
        if (cpl === undefined) cpl = this.nCPL;

        /**
         * Since PS.IOPL and PS.IF are part of PS_DIRECT, we need to take care of any 80286-specific behaviors
         * before setting the PS_DIRECT bits from the incoming regPS bits.
         *
         * Specifically, PS.IOPL is unchanged if CPL > 0, and PS.IF is unchanged if CPL > IOPL.
         */
        if (!cpl) {
            this.nIOPL = (regPS & X86.PS.IOPL.MASK) >> X86.PS.IOPL.SHIFT;           // IOPL allowed to change
        } else {
            regPS = (regPS & ~X86.PS.IOPL.MASK) | (this.regPS & X86.PS.IOPL.MASK);  // IOPL not allowed to change
        }

        if (cpl > this.nIOPL) {
            regPS = (regPS & ~X86.PS.IF) | (this.regPS & X86.PS.IF);                // IF not allowed to change
        }

        this.resultType = X86.RESULT.BYTE;
        this.regPS = (this.regPS & ~(this.PS_DIRECT|X86.PS_CACHED)) | (regPS & (this.PS_DIRECT|X86.PS_CACHED)) | this.PS_SET;

        if (this.regPS & X86.PS.TF) {
            this.intFlags |= X86.INTFLAG.TRAP;
            this.opFlags |= X86.OPFLAG.NOINTR;
        }
    }

    /**
     * checkIOPM(port, nPorts, fInput)
     *
     * @this {CPUx86}
     * @param {number} port (0x0000 to 0xffff)
     * @param {number} nPorts (1 to 4)
     * @param {boolean} [fInput] (true if input, false if output; output assumed if not specified)
     * @returns {boolean} true if allowed, false if not
     */
    checkIOPM(port, nPorts, fInput)
    {
        let bitsPorts = 0;
        if (I386 && (this.regCR0 & X86.CR0.MSW.PE) && (this.nCPL > this.nIOPL || (this.regPS & X86.PS.VM)) && this.segTSS.addrIOPM) {
            let offIOPM = port >>> 3;
            let addrIOPM = this.segTSS.addrIOPM + offIOPM;
            bitsPorts = ((1 << nPorts) - 1) << (port & 0x7);
            while (bitsPorts && addrIOPM <= this.segTSS.addrIOPMLimit) {
                let bits = this.getByte(addrIOPM);
                if (bits & bitsPorts) break;
                bitsPorts >>>= 8;
                addrIOPM++;
            }
        }
        if (bitsPorts) {
            this.printf(MESSAGE.IOPM + MESSAGE.ADDR, "checkIOPM(%#06x,%d,%s): trapped\n", port, nPorts, (fInput? "input" : "output"));
            X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
            return false;
        }
        return true;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {CPUx86}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "AX")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let fBound = false;
        switch (sBinding) {
        case "EAX":
        case "EBX":
        case "ECX":
        case "EDX":
        case "ESP":
        case "EBP":
        case "ESI":
        case "EDI":
        case "EIP":
        case "AX":
        case "BX":
        case "CX":
        case "DX":
        case "SP":
        case "BP":
        case "SI":
        case "DI":
        case "IP":
        case "PC":      // deprecated as an alias for "IP" (still used by older XML files, like the one at http://tpoindex.github.io/crobots/)
        case "CS":
        case "DS":
        case "SS":
        case "ES":
        case "FS":
        case "GS":
        case "CR0":
        case "CR2":
        case "CR3":
        case "PS":      // this refers to "Processor Status", aka the 16-bit flags register (although DEBUG.COM refers to this as "PC", surprisingly)
        case "C":
        case "P":
        case "A":
        case "Z":
        case "S":
        case "T":
        case "I":
        case "D":
        case "V":
            this.bindings[sBinding] = control;
            this.cLiveRegs++;
            fBound = true;
            break;
        default:
            fBound = super.setBinding(sHTMLType, sBinding, control);
            break;
        }
        return fBound;
    }

    /**
     * probeAddr(addr, size, fPhysical)
     *
     * Used by the Debugger to probe addresses without risk of triggering a page fault, and by internal
     * functions, like helpCheckFault(), that must also avoid triggering faults, since they're not part of
     * standard CPU operation.
     *
     * Since originally written, I've also relaxed the requirement that the request be contained entirely
     * within a single block; this was never a problem for any size-aligned request, but unfortunately, it
     * was difficult for the Debugger to guarantee that every 2 or 4-byte request would be always be word or
     * dword-aligned.  So now requests that straddle blocks will be broken into smaller probeAddr() requests.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @param {number} [size] is a length (default is 1; if specified, must be 1, 2 or 4)
     * @param {boolean} [fPhysical] (true for physical probe, false for linear; linear is the default)
     * @returns {number|null} value at the specified address, or null if invalid
     */
    probeAddr(addr, size, fPhysical)
    {
        let aBlocks = (fPhysical? this.aBusBlocks : this.aMemBlocks);
        let block = aBlocks[(addr & this.nMemMask) >>> this.nBlockShift];
        if (block && block.type == Memoryx86.TYPE.UNPAGED) block = this.mapPageBlock(addr, false, true);

        if (block) {
            let off = addr & this.nBlockLimit;
            if (!size || size == 1) {
                return block.readByteDirect(off, addr);
            }
            if (size == 2) {
                if (off < this.nBlockLimit) {
                    return block.readShortDirect(off, addr);
                }
                return block.readByteDirect(off, addr) | (this.probeAddr(addr + 1, 1, fPhysical) << 8);
            }
            if (size == 4) {
                if (off < this.nBlockLimit - 2) {
                    return block.readLongDirect(off, addr);
                }
                if (off == this.nBlockLimit - 1) {
                    return block.readShortDirect(off, addr) | (this.probeAddr(addr + 2, 2, fPhysical) << 16);
                }
                return block.readByteDirect(off, addr) | (this.probeAddr(addr + 1, 1, fPhysical) << 8) | (this.probeAddr(addr + 2, 1, fPhysical) << 16) | (this.probeAddr(addr + 3, 1, fPhysical) << 24);
            }
        }

        /**
         * Since the Bus component initializes all unused portions of physical address space with an empty
         * block, we have also written mapPageBlock() to return an empty block (memEmpty) whenever there is
         * no valid mapping.  So if we ever end up here, this may represent a hole that needs plugging.
         *
         * It's also possible the caller passed a bogus parameter, such as an invalid size (must be 1, 2 or 4).
         */
        this.assert(false);
        return null;
    }

    /**
     * getByte(addr)
     *
     * Use bus.getByte() for physical addresses, and cpu.getByte() for linear addresses; the latter takes care
     * of paging, cycle counts, and BACKTRACK states, if any.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @returns {number} byte (8-bit) value at that address
     */
    getByte(addr)
    {
        if (BACKTRACK) this.backTrack.btiMem0 = this.bus.readBackTrack(addr);
        return this.aMemBlocks[(addr & this.nMemMask) >>> this.nBlockShift].readByte(addr & this.nBlockLimit, addr);
    }

    /**
     * getShort(addr)
     *
     * Use bus.getShort() for physical addresses, and cpu.getShort() for linear addresses; the latter takes care
     * of paging, cycle counts, and BACKTRACK states, if any.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @returns {number} word (16-bit) value at that address
     */
    getShort(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nMemMask) >>> this.nBlockShift;
        /**
         * On the 8088, it takes 4 cycles to read the additional byte REGARDLESS whether the address is odd or even.
         * TODO: For the 8086, the penalty is actually "(addr & 0x1) << 2" (4 additional cycles only when the address is odd).
         */
        this.nStepCycles -= this.cycleCounts.nWordCyclePenalty;

        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.bus.readBackTrack(addr);
            this.backTrack.btiMem1 = this.bus.readBackTrack(addr + 1);
        }
        if (off < this.nBlockLimit) {
            return this.aMemBlocks[iBlock].readShort(off, addr);
        }
        let w = this.aMemBlocks[iBlock].readByte(off, addr);
        if (!(this.opFlags & X86.OPFLAG.FAULT)) {
            w |= this.aMemBlocks[(iBlock + 1) & this.nBlockMask].readByte(0, addr + 1) << 8;
        }
        return w;
    }

    /**
     * getLong(addr)
     *
     * Use bus.getLong() for physical addresses, and cpu.getLong() for linear addresses; the latter takes care
     * of paging, cycle counts, and BACKTRACK states, if any.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @returns {number} long (32-bit) value at that address
     */
    getLong(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nMemMask) >>> this.nBlockShift;
        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.bus.readBackTrack(addr);
            this.backTrack.btiMem1 = this.bus.readBackTrack(addr + 1);
            this.backTrack.btiMem2 = this.bus.readBackTrack(addr + 2);
            this.backTrack.btiMem3 = this.bus.readBackTrack(addr + 3);
        }
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
            if (this.opFlags & X86.OPFLAG.FAULT) break;
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
     * Use bus.setByte() for physical addresses, and cpu.setByte() for linear addresses; the latter takes care
     * of paging, cycle counts, and BACKTRACK states, if any.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @param {number} b is the byte (8-bit) value to write (which we truncate to 8 bits; required by opSTOSb)
     */
    setByte(addr, b)
    {
        if (BACKTRACK) this.bus.writeBackTrack(addr, this.backTrack.btiMem0);
        this.aMemBlocks[(addr & this.nMemMask) >>> this.nBlockShift].writeByte(addr & this.nBlockLimit, b & 0xff, addr);
    }

    /**
     * setShort(addr, w)
     *
     * Use bus.setShort() for physical addresses, and cpu.setShort() for linear addresses; the latter takes care
     * of paging, cycle counts, and BACKTRACK states, if any.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @param {number} w is the word (16-bit) value to write (which we truncate to 16 bits to be safe)
     */
    setShort(addr, w)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nMemMask) >>> this.nBlockShift;
        /**
         * On the 8088, it takes 4 cycles to write the additional byte REGARDLESS whether the address is odd or even.
         * TODO: For the 8086, the penalty is actually "(addr & 0x1) << 2" (4 additional cycles only when the address is odd).
         */
        this.nStepCycles -= this.cycleCounts.nWordCyclePenalty;

        if (BACKTRACK) {
            this.bus.writeBackTrack(addr, this.backTrack.btiMem0);
            this.bus.writeBackTrack(addr + 1, this.backTrack.btiMem1);
        }
        if (off < this.nBlockLimit) {
            this.aMemBlocks[iBlock].writeShort(off, w & 0xffff, addr);
            return;
        }
        this.aMemBlocks[iBlock++].writeByte(off, w & 0xff, addr);
        if (this.opFlags & X86.OPFLAG.FAULT) return;
        this.aMemBlocks[iBlock & this.nBlockMask].writeByte(0, (w >> 8) & 0xff, addr + 1);
    }

    /**
     * setLong(addr, l)
     *
     * Use bus.setLong() for physical addresses, and cpu.setLong() for linear addresses; the latter takes care
     * of paging, cycle counts, and BACKTRACK states, if any.
     *
     * @this {CPUx86}
     * @param {number} addr is a linear address
     * @param {number} l is the long (32-bit) value to write
     */
    setLong(addr, l)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nMemMask) >>> this.nBlockShift;
        this.nStepCycles -= this.cycleCounts.nWordCyclePenalty;

        if (BACKTRACK) {
            this.bus.writeBackTrack(addr, this.backTrack.btiMem0);
            this.bus.writeBackTrack(addr + 1, this.backTrack.btiMem1);
            this.bus.writeBackTrack(addr + 2, this.backTrack.btiMem2);
            this.bus.writeBackTrack(addr + 3, this.backTrack.btiMem3);
        }
        if (off < this.nBlockLimit - 2) {
            this.aMemBlocks[iBlock].writeLong(off, l, addr);
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
            if (this.opFlags & X86.OPFLAG.FAULT) return;
            if (!--cbBlock) {
                iBlock = (iBlock + 1) & this.nBlockMask;
                off = 0;
            }
            l >>>= 8;
        }
    }

    /**
     * getEAByte(seg, off)
     *
     * @this {CPUx86}
     * @param {Segx86} seg register (eg, segDS)
     * @param {number} off is a segment-relative offset
     * @returns {number} byte (8-bit) value at that address
     */
    getEAByte(seg, off)
    {
        this.segEA = seg;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEA = seg.checkRead(this.offEA, 1);
        if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
        let b = this.getByte(this.regEA);
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiMem0;
        return b;
    }

    /**
     * getEAByteData(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} byte (8-bit) value at that address
     */
    getEAByteData(off)
    {
        return this.getEAByte(this.segData, off);
    }

    /**
     * getEAByteStack(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} byte (8-bit) value at that address
     */
    getEAByteStack(off)
    {
        return this.getEAByte(this.segStack, off);
    }

    /**
     * getEAWord(seg, off)
     *
     * @this {CPUx86}
     * @param {Segx86} seg register (eg, segDS)
     * @param {number} off is a segment-relative offset
     * @returns {number} word (16-bit or 32-bit) value at that address
     */
    getEAWord(seg, off)
    {
        let w;
        this.segEA = seg;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEA = seg.checkRead(this.offEA, (I386? this.sizeData : 2));
        if (this.opFlags & (X86.OPFLAG.NOREAD | X86.OPFLAG.WRAP)) {
            if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
            /**
             * The WRAP flag must have been set by checkReadReal(), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(this.regEA) | (this.getByte(seg.checkRead(0, 1)) << 8);
        }
        else {
            w = this.getWord(this.regEA);
        }
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * getEAShortData(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} short (16-bit) value at that address
     */
    getEAShortData(off)
    {
        let w;
        this.segEA = this.segData;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEA = this.segEA.checkRead(this.offEA, 2);
        if (this.opFlags & (X86.OPFLAG.NOREAD | X86.OPFLAG.WRAP)) {
            if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
            /**
             * The WRAP flag must have been set by checkReadReal(), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(this.regEA) | (this.getByte(this.segEA.checkRead(0, 1)) << 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        else {
            w = this.getShort(this.regEA);
        }
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * getEAShortStack(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} short (16-bit) value at that address
     */
    getEAShortStack(off)
    {
        let w;
        this.segEA = this.segStack;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEA = this.segEA.checkRead(this.offEA, 2);
        if (this.opFlags & (X86.OPFLAG.NOREAD | X86.OPFLAG.WRAP)) {
            if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
            /**
             * The WRAP flag must have been set by checkReadReal(), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(this.regEA) | (this.getByte(this.segEA.checkRead(0, 1)) << 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        else {
            w = this.getShort(this.regEA);
        }
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * getEALongData(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} long (32-bit) value at that address
     */
    getEALongData(off)
    {
        this.segEA = this.segData;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEA = this.segEA.checkRead(this.offEA, 4);
        if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
        let w = this.getLong(this.regEA);
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * getEALongDataWrite(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} long (32-bit) value at that address
     */
    getEALongDataWrite(off)
    {
        this.segEA = this.segData;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEAWrite = this.regEA = this.segEA.checkRead(this.offEA, 4);
        if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
        let w = this.getLong(this.regEA);
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * getEALongStack(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} long (32-bit) value at that address
     */
    getEALongStack(off)
    {
        this.segEA = this.segStack;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEA = this.segEA.checkRead(this.offEA, 4);
        if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
        let w = this.getLong(this.regEA);
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * getEALongStackWrite(off)
     *
     * @this {CPUx86}
     * @param {number} off is a segment-relative offset
     * @returns {number} long (32-bit) value at that address
     */
    getEALongStackWrite(off)
    {
        this.segEA = this.segStack;
        this.offEA = off & (I386? this.maskAddr : 0xffff);
        this.regEAWrite = this.regEA = this.segEA.checkRead(this.offEA, 4);
        if (this.opFlags & X86.OPFLAG.NOREAD) return 0;
        let w = this.getLong(this.regEA);
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiMem0;
            this.backTrack.btiEAHi = this.backTrack.btiMem1;
        }
        return w;
    }

    /**
     * setEAByte(b)
     *
     * @this {CPUx86}
     * @param {number} b is the byte (8-bit) value to write
     */
    setEAByte(b)
    {
        if (this.opFlags & X86.OPFLAG.NOWRITE) return;
        if (BACKTRACK) this.backTrack.btiMem0 = this.backTrack.btiEALo;
        this.setByte(this.segEA.checkWrite(this.offEA, 1), b);
    }

    /**
     * setEAShort(w)
     *
     * @this {CPUx86}
     * @param {number} w is the short (16-bit) value to write
     */
    setEAShort(w)
    {
        if (this.opFlags & X86.OPFLAG.NOWRITE) return;
        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.backTrack.btiEALo;
            this.backTrack.btiMem1 = this.backTrack.btiEAHi;
        }
        let addr = this.segEA.checkWrite(this.offEA, 2);
        if (this.opFlags & X86.OPFLAG.WRAP) {
            /**
             * The WRAP flag must have been set by checkWriteReal(), so we also know that we're dealing with
             * a 16-bit write, which allows us to make some simplifications here.
             */
            this.setByte(addr, w);
            this.setByte(this.segEA.checkWrite(0, 1), w >> 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        else {
            this.setShort(addr, w);
        }
    }

    /**
     * setEALong(l)
     *
     * @this {CPUx86}
     * @param {number} l is the long (32-bit) value to write
     */
    setEALong(l)
    {
        if (this.opFlags & X86.OPFLAG.NOWRITE) return;
        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.backTrack.btiEALo;
            this.backTrack.btiMem1 = this.backTrack.btiEAHi;
        }
        this.setLong(this.segEA.checkWrite(this.offEA, 4), l);
    }

    /**
     * setEAWord(w)
     *
     * @this {CPUx86}
     * @param {number} w is the word (16-bit or 32-bit) value to write
     */
    setEAWord(w)
    {
        if (this.opFlags & X86.OPFLAG.NOWRITE) return;
        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.backTrack.btiEALo;
            this.backTrack.btiMem1 = this.backTrack.btiEAHi;
        }
        let addr = this.segEA.checkWrite(this.offEA, this.sizeData);
        if (this.opFlags & X86.OPFLAG.WRAP) {
            /**
             * The WRAP flag must have been set by checkWriteReal(), so we also know that we're dealing with
             * a 16-bit write, which allows us to make some simplifications here.
             */
            this.setByte(addr, w);
            this.setByte(this.segEA.checkWrite(0, 1), w >> 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        else {
            this.setWord(addr, w);
        }
    }

    /**
     * getSOByte(seg, off)
     *
     * This is like getEAByte(), but it does NOT update regEA.
     *
     * @this {CPUx86}
     * @param {Segx86} seg register (eg, segDS)
     * @param {number} off is a segment-relative offset
     * @returns {number} byte (8-bit) value at that address
     */
    getSOByte(seg, off)
    {
       return this.getByte(seg.checkRead(off, 1));
    }

    /**
     * getSOWord(seg, off)
     *
     * This is like getEAWord(), but it does NOT update regEA.
     *
     * @this {CPUx86}
     * @param {Segx86} seg register (eg, segDS)
     * @param {number} off is a segment-relative offset
     * @returns {number} word (16-bit) value at that address
     */
    getSOWord(seg, off)
    {
        let w;
        let addr = seg.checkRead(off, this.sizeData);
        if (this.opFlags & X86.OPFLAG.WRAP) {
            /**
             * The WRAP flag must have been set by checkReadReal(), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(addr) | (this.getByte(seg.checkRead(0, 1)) << 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        else {
            w = this.getWord(addr);
        }
        return w;
    }

    /**
     * setSOByte(seg, off, b)
     *
     * This is like setEAByte(), but it does NOT update regEAWrite.
     *
     * @this {CPUx86}
     * @param {Segx86} seg register (eg, segDS)
     * @param {number} off is a segment-relative offset
     * @param {number} b is the byte (8-bit) value to write
     */
    setSOByte(seg, off, b)
    {
        this.setByte(seg.checkWrite(off, 1), b);
    }

    /**
     * setSOWord(seg, off, w)
     *
     * This is like setEAWord(), but it does NOT update regEAWrite.
     *
     * @this {CPUx86}
     * @param {Segx86} seg register (eg, segDS)
     * @param {number} off is a segment-relative offset
     * @param {number} w is the word (16-bit) value to write
     */
    setSOWord(seg, off, w)
    {
        let addr = seg.checkWrite(off, this.sizeData);
        if (this.opFlags & X86.OPFLAG.WRAP) {
            /**
             * The WRAP flag must have been set by checkWriteReal(), so we also know that we're dealing with
             * a 16-bit write, which allows us to make some simplifications here.
             */
            this.setByte(addr, w);
            this.setByte(seg.checkWrite(0, 1), w >> 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        else {
            this.setWord(addr, w);
        }
    }

    /**
     * getBytePrefetch()
     *
     * @this {CPUx86}
     * @returns {number} byte (8-bit) value at regLIP
     */
    getBytePrefetch()
    {
        if (!this.cbPrefetch) {
            this.refillPrefetch();
            if (!this.cbPrefetch) return this.getByte(this.regLIP);
        }
        let b = (this.adwPrefetch[this.regLIP & CPUx86.PFINFO.IP_MASK] >> ((this.regLIP & 0x3) << 3)) & 0xff;
        this.assert(b === this.getByte(this.regLIP));
        this.cbPrefetch--;
        return b;
    }

    /**
     * getShortPrefetch()
     *
     * @this {CPUx86}
     * @returns {number} short (16-bit) value at regLIP
     */
    getShortPrefetch()
    {
        if (this.cbPrefetch < 2) {
            this.refillPrefetch();
            if (this.cbPrefetch < 2) {
                this.cbPrefetch = 0;
                return this.getShort(this.regLIP);
            }
        }
        let shift = (this.regLIP & 0x3) << 3;
        let w = (this.adwPrefetch[this.regLIP & CPUx86.PFINFO.IP_MASK] >>> shift) & 0xffff;
        if (shift > 16) w |= (this.adwPrefetch[(this.regLIP + 4) & CPUx86.PFINFO.IP_MASK] & 0xff) << 8;
        this.assert(w === this.getShort(this.regLIP));
        this.cbPrefetch -= 2;
        return w;
    }

    /**
     * getLongPrefetch()
     *
     * @this {CPUx86}
     * @returns {number} long (32-bit) value at regLIP
     */
    getLongPrefetch()
    {
        if (this.cbPrefetch < 4) {
            this.refillPrefetch();
            if (this.cbPrefetch < 4) {
                this.cbPrefetch = 0;
                return this.getLong(this.regLIP);
            }
        }
        let shift = (this.regLIP & 0x3) << 3;
        let l = (this.adwPrefetch[this.regLIP & CPUx86.PFINFO.IP_MASK] >>> shift)|0;
        if (shift) l |= this.adwPrefetch[(this.regLIP + 4) & CPUx86.PFINFO.IP_MASK] << (32 - shift);
        this.assert(l === this.getLong(this.regLIP));
        this.cbPrefetch -= 4;
        return l;
    }

    /**
     * getWordPrefetch()
     *
     * @this {CPUx86}
     * @returns {number} short (16-bit) or long (32-bit) value as appropriate
     */
    getWordPrefetch()
    {
        return (I386 && this.sizeData == 4? this.getLongPrefetch() : this.getShortPrefetch());
    }

    /**
     * refillPrefetch()
     *
     * This function is similar to probeAddr() in that must NOT trigger a fault, because prefetching
     * inherently runs the risk of fetching more bytes that may actually be executed.  Also, to keep it
     * simple, we limit prefetching to whatever bytes (if any) are available in the current page.  If the
     * page is not present, or there are insufficient bytes in the current page to completely fill the
     * queue, then the caller must request byte(s) "the old-fashioned way", to ensure proper fault handling.
     *
     * For example, if getShortPrefetch() finds there are only 0 or 1 bytes in the prefetch queue, and
     * if it is unable to obtain any more bytes via refillPrefetch(), then getShortPrefetch() must call
     * getShort(this.regLIP) (which is also what would be called if PREFETCH was disabled completely).
     *
     * @this {CPUx86}
     */
    refillPrefetch()
    {
        let aBlocks = this.aMemBlocks;
        let regLIP = this.regLIP & ~0x3;
        let block = aBlocks[(regLIP & this.nMemMask) >>> this.nBlockShift];
        if (block && block.type == Memoryx86.TYPE.UNPAGED) {
            block = this.mapPageBlock(regLIP, false, true);
            if (block === this.memEmpty) block = null;
        }
        if (block) {
            let i = 0;
            let off = regLIP & this.nBlockLimit;
            let cbMax = this.nBlockSize - off;
            if (cbMax > CPUx86.PFINFO.LENGTH) cbMax = CPUx86.PFINFO.LENGTH;
            for (; i < cbMax; i += 4) {
                this.adwPrefetch[regLIP & CPUx86.PFINFO.IP_MASK] = block.readLongDirect(off, regLIP);
                off += 4; regLIP += 4;
            }
            this.cbPrefetch = i - (this.regLIP & 0x3);
         // this.nBusCycles += 4;
        } else {
            this.cbPrefetch = 0;
        }
    }

    /**
     * getIPByte()
     *
     * @this {CPUx86}
     * @returns {number} byte at the current IP; IP advanced by 1
     */
    getIPByte()
    {
        let newLIP = this.checkIP(1);
        let b = (PREFETCH? this.getBytePrefetch() : this.getByte(this.regLIP));
        if (BACKTRACK) this.bus.updateBackTrackCode(this.regLIP, this.backTrack.btiMem0);
        /**
         * With the following cycle penalty (which really only affects 8086/8088 CPUs), PC Tools 4.30
         * correctly reports an IBM PC-relative speed of 100% (assuming you're using a 4.77Mhz configuration).
         *
         * Unfortunately, adding this penalty creates other side-effects, including a timing failure in
         * the VGA BIOS when using a VGA with an IBM PC.  So, we'll have to take a second look at how PC Tools
         * calculates the machine's speed.
         *
         *      this.nStepCycles -= this.cycleCounts.nWordCyclePenalty;
         */
        this.regLIP = newLIP;
        return b;
    }

    /**
     * getIPShort()
     *
     * @this {CPUx86}
     * @returns {number} short at the current IP; IP advanced by 2
     */
    getIPShort()
    {
        let w;
        let newLIP = this.checkIP(2);
        if (PREFETCH) {
            w = this.getShortPrefetch();
        } else if (!(this.opFlags & X86.OPFLAG.WRAP)) {
            w = this.getShort(this.regLIP);
        } else {
            /**
             * The WRAP flag must have been set by checkIP(2), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(this.regLIP) | (this.getByte(newLIP - 1) << 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        if (BACKTRACK) {
            this.bus.updateBackTrackCode(this.regLIP, this.backTrack.btiMem0);
            this.bus.updateBackTrackCode(this.regLIP + 1, this.backTrack.btiMem1);
        }
        this.regLIP = newLIP;
        return w;
    }

    /**
     * getIPAddr()
     *
     * @this {CPUx86}
     * @returns {number} word at the current IP; IP advanced by 2 or 4, depending on address size
     */
    getIPAddr()
    {
        let w;
        let newLIP = this.checkIP(this.sizeAddr);
        if (PREFETCH) {
            w = this.getAddr();
        } else if (!(this.opFlags & X86.OPFLAG.WRAP)) {
            w = this.getAddr(this.regLIP);
        } else {
            /**
             * The WRAP flag must have been set by checkIP(), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(this.regLIP) | (this.getByte(newLIP - 1) << 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        if (BACKTRACK) {
            this.bus.updateBackTrackCode(this.regLIP, this.backTrack.btiMem0);
            this.bus.updateBackTrackCode(this.regLIP + 1, this.backTrack.btiMem1);
        }
        this.regLIP = newLIP;
        return w;
    }

    /**
     * getIPWord()
     *
     * @this {CPUx86}
     * @returns {number} word at the current IP; IP advanced by 2 or 4, depending on operand size
     */
    getIPWord()
    {
        let w;
        let newLIP = this.checkIP(this.sizeData);
        if (PREFETCH) {
            w = this.getWordPrefetch();
        } else if (!(this.opFlags & X86.OPFLAG.WRAP)) {
            w = this.getWord(this.regLIP);
        } else {
            /**
             * The WRAP flag must have been set by checkIP(), so we also know that we're dealing with
             * a 16-bit read, which allows us to make some simplifications here.
             */
            w = this.getByte(this.regLIP) | (this.getByte(newLIP - 1) << 8);
            this.opFlags &= ~X86.OPFLAG.WRAP;
        }
        if (BACKTRACK) {
            this.bus.updateBackTrackCode(this.regLIP, this.backTrack.btiMem0);
            this.bus.updateBackTrackCode(this.regLIP + 1, this.backTrack.btiMem1);
        }
        this.regLIP = newLIP;
        return w;
    }

    /**
     * getIPDisp()
     *
     * @this {CPUx86}
     * @returns {number} sign-extended (32-bit) value from the byte at the current IP; IP advanced by 1
     */
    getIPDisp()
    {
        let newLIP = this.checkIP(1);
        let w = ((PREFETCH? this.getBytePrefetch() : this.getByte(this.regLIP)) << 24) >> 24;
        if (BACKTRACK) this.bus.updateBackTrackCode(this.regLIP, this.backTrack.btiMem0);
        this.regLIP = newLIP;
        return w;
    }

    /**
     * peekIPByte()
     *
     * @this {CPUx86}
     * @returns {number} byte at the current IP
     */
    peekIPByte()
    {
        return (PREFETCH? this.getBytePrefetch() : this.getByte(this.regLIP));
    }

    /**
     * popWord()
     *
     * @this {CPUx86}
     * @returns {number} word popped from the current SP; SP increased by 2 or 4
     */
    popWord()
    {
        let data = this.getWord(this.regLSP);
        let width = I386? this.sizeData : 2;
        this.regLSP = (this.regLSP + width)|0;

        let delta = this.regLSPLimit - (this.regLSP >>> 0);
        if (delta < 0) {
            /**
             * There's no such thing as an SS fault on the 8086/8088, and in fact, we have to support the
             * operation even when the address straddles the wrap boundary; other emulators tend to barf on
             * a wrap, usually because they're running in V86 mode instead of real mode.
             */
            if (this.model <= X86.MODEL_8088) {
                this.setSP((this.regLSP - this.segSS.base) & this.segSS.maskAddr);
                if (delta < -1) {
                    data = (data & 0xff) | (this.getByte(this.regLSP - 1) << 8);
                }
            }
            else {
                /**
                 * I'm assuming that, on newer processors, when the stack segment limit is set to the maximum,
                 * it's OK for the stack to wrap, unless the new address is straddling the wrap boundary (ie, when
                 * delta is < -1).
                 *
                 * NOTE: This combines the old 8088 address-wrap check with the new segment-limit check, even though
                 * the correct time to do the latter is immediately BEFORE the fetch, not AFTER.
                 */
                if (delta < -1) {
                    X86.helpFault.call(this, X86.EXCEPTION.SS_FAULT, 0);
                }
                else if (!this.segSS.fExpDown && this.segSS.limit == this.segSS.maskAddr || this.segSS.fExpDown && !this.segSS.limit) {
                    this.setSP((this.regLSP - this.segSS.base) & this.segSS.maskAddr);
                }
            }
        }
        return data;
    }

    /**
     * pushWord(w)
     *
     * NOTE: pushWord() used to do a simplified version of pushData(), and while that might have made the emulator
     * slightly faster, it was woefully duplicative.  Let's trust the combination of the Closure Compiler and the
     * JavaScript engines to automatically inline instead.
     *
     * @this {CPUx86}
     * @param {number} w is the word (16-bit) value to push at current SP; SP decreased by 2 or 4
     */
    pushWord(w)
    {
        this.pushData(w, I386? this.sizeData : 2);
    }

    /**
     * pushData(data, width, size)
     *
     * The size parameter serves two very limited purposes: 1) the ability to push data according to a previous
     * operand size, and 2) the ability to write fewer bytes than the width if necessary.
     *
     * The former occurs when a 32-bit code segment performs a 16:32 call to a 16-bit code segment; after the
     * new 16-bit code segment is loaded (and possible stack switch occurs), the return address (both segment
     * and offset) must still be pushed as 32-bit values.
     *
     * The latter occurs with segment register pushes.  When a 32-bit operand size is in effect (ie, width is 4),
     * only the low 16 bits should be written (size must be 2).
     *
     * For all other kinds of pushes, width and size are impliedly the same.
     *
     * @this {CPUx86}
     * @param {number} data is the data to push at current SP; SP decreased by size
     * @param {number} width is the width of the data to push, in bytes (must be either 2 or 4)
     * @param {number} [size] is the size of the data to push, in bytes (must be 1, 2, or 4, and <= width)
     */
    pushData(data, width, size = width)
    {
        this.assert((width == 2 || width == 4) && (size > 0 && size <= width));

        let regLSP = (this.regLSP - width)|0;

        let delta = (regLSP >>> 0) - this.regLSPLimitLow;
        if (delta < 0) {
            /**
             * There's no such thing as an SS fault on the 8086/8088, and in fact, we have to support the
             * operation even when the address straddles the wrap boundary (ie, when delta is -1); other
             * emulators tend to barf on a wrap, usually because they're running in V86 mode instead of real mode.
             */
            if (this.model <= X86.MODEL_8088) {
                if (delta == -1) {
                    this.setByte(regLSP + 1, data >> 8);
                    this.setSP((regLSP - this.segSS.base) & this.segSS.maskAddr);
                    this.setByte(this.regLSP, data);
                    return;
                }
                this.assert(!this.segSS.fExpDown && this.segSS.limit == this.segSS.maskAddr);
            }
            /**
             * I'm assuming that, on newer processors, when the stack segment limit is set to the maximum,
             * it's OK for the stack to wrap, unless the new address is straddling the wrap boundary (ie, when
             * delta is < 0 and > -width).
             */
            if (!this.segSS.fExpDown && this.segSS.limit == this.segSS.maskAddr || this.segSS.fExpDown && !this.segSS.limit) {
                if (delta > -width) {
                    X86.helpFault.call(this, X86.EXCEPTION.SS_FAULT, 0);
                    return;
                }
                this.setSP((regLSP - this.segSS.base) & this.segSS.maskAddr);
                regLSP = this.regLSP;
            } else {
                X86.helpFault.call(this, X86.EXCEPTION.SS_FAULT, 0);
                return;
            }
        }

        switch(size) {
        case 1:
            this.setByte(regLSP, data);
            break;
        case 2:
            this.setShort(regLSP, data);
            break;
        case 4:
            this.setLong(regLSP, data);
            break;
        default:
            this.assert(false);
            break;
        }

        /**
         * We update this.regLSP at the end to make life simpler for opcode handlers that perform only one
         * pushWord() operation, relieving them from having to snapshot this.regLSP into this.opLSP needlessly.
         */
        this.regLSP = regLSP;
    }

    /**
     * checkINTR()
     *
     * This must only be called when intFlags (containing the simulated INTFLAG.INTR signal) is known to be set.
     * Note that it's perfectly possible that between the time updateINTR(true) was called and we request the
     * interrupt vector number below, the interrupt could have been cleared or masked, in which case getIRRVector()
     * will return -1 and we'll simply clear INTFLAG.INTR.
     *
     * intFlags has been overloaded with the INTFLAG.TRAP bit as well, since the acknowledgment of h/w interrupts
     * and the Trap flag are similar; they must both honor the NOINTR suppression flag, and stepCPU() shouldn't
     * have to check multiple variables when deciding whether to simulate an interrupt.
     *
     * This function also includes a check for the new async INTFLAG.DMA flag, which is triggered by a ChipSet call
     * to setDMA().  This DMA flag actually has nothing to do with interrupts; it's simply an expedient way to
     * piggy-back on the CPU's execution logic, to help drive async DMA requests.
     *
     * Originally, DMA requests (eg, FDC or HDC I/O operations) were all handled synchronously, since no actual
     * I/O was required to satisfy the request; from the CPU's perspective, this meant DMA operations were virtually
     * instantaneous.  However, with the introduction of remote disk connections, some actual I/O may now be required;
     * in practice, this means that the FIRST byte requested as part of a DMA operation may require a callback to
     * finish, while all remaining bytes will be retrieved during subsequent checkINTR() calls -- unless of course
     * additional remote I/O operations are required to complete the DMA operation.
     *
     * As a result, the CPU will run slightly slower while an async DMA request is in progress, but the slowdown
     * should be negligible.  One downside is that this slowdown will be in effect for the entire duration of the
     * I/O (ie, even while we're waiting for the remote I/O to finish), so the ChipSet component should avoid
     * calling setDMA() whenever possible.
     *
     * TODO: While comparing SYMDEB tracing in both PCx86 and VMware, I noticed that after single-stepping ANY
     * segment-load instruction, SYMDEB would get control immediately after that instruction in VMware, whereas
     * I delay acknowledgment of the Trap flag until the *following* instruction, so in PCx86, SYMDEB doesn't get
     * control until the following instruction.  I think PCx86 behavior is correct, at least for SS.
     *
     * ERRATA: Early revisions of the 8086/8088 failed to suppress hardware interrupts (and possibly also Trap
     * acknowledgements) after an SS load, but Intel corrected the problem at some point; however, I don't know when
     * that change was made or which IBM PC models may have been affected, if any.  TODO: More research required.
     *
     * WARNING: There is also a priority consideration here.  On the 8086/8088, hardware interrupts have higher
     * priority than Trap interrupts (which is why the code below is written the way it is).  A potentially
     * undesirable side-effect is that a hardware interrupt handler could end up being single-stepped if an
     * external interrupt occurs immediately after the Trap flag is set.  This is why some 8086 debuggers temporarily
     * mask all hardware interrupts during a single-step operation (although that doesn't help with NMIs generated
     * by a coprocessor).  As of the 80286, those priorities were inverted, giving the Trap interrupt higher priority
     * than external interrupts.
     *
     * TODO: Determine the priorities for the 80186.
     *
     * @this {CPUx86}
     * @returns {boolean} true if h/w interrupt (or trap) has just been acknowledged, false if not
     */
    checkINTR()
    {
        // DEBUG: this.assert(this.intFlags);

        if (!(this.opFlags & X86.OPFLAG.NOINTR)) {
            /**
             * As discussed above, the 8086/8088 give hardware interrupts higher priority than the TRAP interrupt,
             * whereas the 80286 and up give TRAPs higher priority.
             */
            let iPriority = (this.model < X86.MODEL_80286? 0 : 1);
            for (let cPriorities = 0; cPriorities < 2; cPriorities++) {
                switch(iPriority) {
                case 0:
                    if ((this.intFlags & X86.INTFLAG.INTR) && (this.regPS & X86.PS.IF)) {
                        let nIDT = this.chipset.getIRRVector();
                        if (nIDT >= -1) {
                            this.intFlags &= ~X86.INTFLAG.INTR;
                            if (nIDT >= 0) {
                                this.intFlags &= ~X86.INTFLAG.HALT;
                                X86.helpInterrupt.call(this, nIDT);
                                return true;
                            }
                        }
                    }
                    break;
                case 1:
                    if ((this.intFlags & X86.INTFLAG.TRAP)) {
                        this.intFlags &= ~X86.INTFLAG.TRAP;
                        if (I386 && this.model >= X86.MODEL_80386) this.regDR[6] |= X86.DR6.BS;
                        X86.helpInterrupt.call(this, X86.EXCEPTION.DB_EXC);
                        return true;
                    }
                    break;
                }
                iPriority = 1 - iPriority;
            }
        }
        /**
         * As long as the ChipSet component isn't calling setDMA(), we don't need to test INTFLAG.DMA...
         *
        if (this.intFlags & X86.INTFLAG.DMA) {
            if (!this.chipset.checkDMA()) {
                this.intFlags &= ~X86.INTFLAG.DMA;
            }
        }
         */
        return false;
    }

    /**
     * updateINTR(fRaise)
     *
     * This is called by the ChipSet component whenever a h/w interrupt needs to be simulated.
     * This is how the PIC component simulates raising the INTFLAG.INTR signal.  We will honor the request
     * only if we have a reference back to the ChipSet component.  The CPU will then "respond" by calling
     * checkINTR() and request the corresponding interrupt vector from the ChipSet.
     *
     * @this {CPUx86}
     * @param {boolean} fRaise is true to raise INTFLAG.INTR, false to lower
     */
    updateINTR(fRaise)
    {
        if (this.chipset) {
            if (fRaise) {
                this.intFlags |= X86.INTFLAG.INTR;
            } else {
                this.intFlags &= ~X86.INTFLAG.INTR;
            }
        }
    }

    /**
     * delayINTR()
     *
     * This is called by the ChipSet component whenever the IMR register is being unmasked, to avoid
     * interrupts being simulated too quickly. This works around a problem in the ROM BIOS "KBD_RESET"
     * (F000:E688) function, which is called with interrupts enabled by the "TST8" (F000:E30D) code.
     *
     * "KBD_RESET" appears to be written with the assumption that CLI is in effect, because it issues an
     * STI immediately after unmasking the keyboard IRQ.  And normally, the STI would delay INTFLAG.INTR
     * long enough to allow AH to be set to 0. But if interrupts are already enabled, an interrupt could
     * theoretically occur before the STI.  And since AH isn't initialized until after the STI, such an
     * interrupt would be missed.
     *
     * I'm assuming this never happens in practice because the PIC isn't that fast.  But for us to
     * guarantee that, we need to provide this function to the ChipSet component.
     *
     * @this {CPUx86}
     */
    delayINTR()
    {
        this.opFlags |= X86.OPFLAG.NOINTR;
    }

    /**
     * updateReg(sReg, nValue)
     *
     * This function helps updateStatus() by massaging the register names and values according to
     * CPU type before passing the call to displayValue(); in the "old days", updateStatus() called
     * displayValue() directly (although then it was called displayReg()).
     *
     * @this {CPUx86}
     * @param {string} sReg
     * @param {number} nValue
     */
    updateReg(sReg, nValue)
    {
        let cch = 4;
        if (sReg.length == 1) {
            cch = 1;
            nValue = nValue? 1 : 0;
        }
        if (this.model < 80386) {
            if (sReg.length > 2) {
                sReg = sReg.substr(1, 2);
            }
        } else {
            if (sReg == "PS" || sReg.length > 2) {
                cch = 8;
            }
        }
        this.displayValue(sReg, nValue, cch);
    }

    /**
     * updateStatus(fForce)
     *
     * This provides periodic Control Panel updates (eg, a few times per second; see Computer.UPDATES_PER_SECOND).
     * this is where we take care of any DOM updates (eg, register values) while the CPU is running.
     *
     * @this {CPUx86}
     * @param {boolean} [fForce] (true will display registers even if the CPU is running and "live" registers are not enabled)
     */
    updateStatus(fForce)
    {
        if (this.cLiveRegs) {
            if (fForce || !this.flags.running || this.flags.displayLiveRegs) {
                this.updateReg("EAX", this.regEAX);
                this.updateReg("EBX", this.regEBX);
                this.updateReg("ECX", this.regECX);
                this.updateReg("EDX", this.regEDX);
                this.updateReg("ESP", this.getSP());
                this.updateReg("EBP", this.regEBP);
                this.updateReg("ESI", this.regESI);
                this.updateReg("EDI", this.regEDI);
                this.updateReg("CS", this.getCS());
                this.updateReg("DS", this.getDS());
                this.updateReg("SS", this.getSS());
                this.updateReg("ES", this.getES());
                this.updateReg("EIP", this.getIP());
                let regPS = this.getPS();
                this.updateReg("PS", regPS);
                this.updateReg("V", (regPS & X86.PS.OF));
                this.updateReg("D", (regPS & X86.PS.DF));
                this.updateReg("I", (regPS & X86.PS.IF));
                this.updateReg("T", (regPS & X86.PS.TF));
                this.updateReg("S", (regPS & X86.PS.SF));
                this.updateReg("Z", (regPS & X86.PS.ZF));
                this.updateReg("A", (regPS & X86.PS.AF));
                this.updateReg("P", (regPS & X86.PS.PF));
                this.updateReg("C", (regPS & X86.PS.CF));
                if (this.model == X86.MODEL_80386) {
                    this.updateReg("FS", this.getFS());
                    this.updateReg("GS", this.getGS());
                    this.updateReg("CR0", this.regCR0);
                    this.updateReg("CR2", this.regCR2);
                    this.updateReg("CR3", this.regCR3);
                }
            }
        }

        let controlSpeed = this.bindings["speed"];
        if (controlSpeed) controlSpeed.textContent = this.getSpeedCurrent();
    }

    /**
     * setDebugCheck(fCheck)
     *
     * This interface has been added for the Debugger, for situations where the Debugger has altered
     * the debugCheck state but we don't necessarily want to stop the current instruction burst; ordinarily,
     * we update the X86.INTFLAG.DEBUGGER flag only when we're about to start a new instruction burst.
     *
     * @this {CPUx86}
     * @param {boolean} fCheck
     */
    setDebugCheck(fCheck)
    {
        this.flags.debugCheck = fCheck;
        if (fCheck) {
            this.intFlags |= X86.INTFLAG.DEBUGGER;
        } else {
            this.intFlags &= ~X86.INTFLAG.DEBUGGER;
        }
    }

    /**
     * stepCPU(nMinCycles)
     *
     * NOTE: Single-stepping should not be confused with the Trap flag; single-stepping is a Debugger
     * operation that's completely independent of Trap status.  The CPU can go in and out of Trap mode,
     * in and out of h/w interrupt service routines (ISRs), etc, but from the Debugger's perspective,
     * they're all one continuous stream of instructions that can be stepped or run at will.  Moreover,
     * stepping vs. running should never change the behavior of the simulation.
     *
     * Similarly, the Debugger's execution breakpoints have no involvement with the x86 breakpoint instruction
     * (0xCC); the Debugger monitors changes to the regLIP register to implement its own execution breakpoints.
     *
     * As a result, the Debugger's complete independence means you can run other 8086/8088 debuggers
     * (eg, DEBUG) inside the simulation without interference; you can even "debug" them with the Debugger.
     *
     * @this {CPUx86}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {number} of cycles executed; 0 indicates a pre-execution condition (ie, an execution breakpoint
     * was hit), -1 indicates a post-execution condition (eg, a read or write breakpoint was hit), and a positive
     * number indicates successful completion of that many cycles (which should always be >= nMinCycles).
     */
    stepCPU(nMinCycles)
    {
        /**
         * The Debugger uses fComplete to determine if the instruction completed (true) or was interrupted
         * by a breakpoint or some other exceptional condition (false).  NOTE: this does NOT include JavaScript
         * exceptions, which stepCPU() expects the caller to catch using its own exception handler.
         *
         * The CPU relies on the use of stopCPU() rather than fComplete, because the CPU never single-steps
         * (ie, nMinCycles is always some large number), whereas the Debugger does.  And conversely, when the
         * Debugger is single-stepping (even when performing multiple single-steps), fRunning is never set,
         * so stopCPU() would have no effect as far as the Debugger is concerned.
         */
        this.flags.complete = true;

        /**
         * debugCheck is true if we need to "check" every instruction with the Debugger.
         */
        this.setDebugCheck(DEBUGGER && this.dbg != undefined && this.dbg.checksEnabled());

        /**
         * nDebugState is checked only when debugCheck is true, and its sole purpose is to tell the first call
         * to checkInstruction() that it can skip breakpoint checks, and that will be true ONLY when fStarting is
         * true OR nMinCycles is zero (the latter means the Debugger is single-stepping).
         *
         * Once we snap fStarting, we clear it, because technically, we've moved beyond "starting" and have
         * officially "started" now.
         */
        let nDebugState = (!nMinCycles)? -1 : (this.flags.starting? 0 : 1);
        this.flags.starting = false;

        /**
         * We move the minimum cycle count to nStepCycles (the number of cycles left to step), so that other
         * functions have the ability to force that number to zero (eg, stopCPU()), and thus we don't have to check
         * any other criteria to determine whether we should continue stepping or not.
         */
        this.nBurstCycles = this.nStepCycles = nMinCycles;

        /**
         * NOTE: Even though runCPU() calls updateAllTimers(), we need an additional call here if we're being
         * called from the Debugger, so that single-stepping will update timers as well.  TODO: What about RTC?
         */
        if (this.chipset && !nMinCycles) this.chipset.updateAllTimers();

        /**
         * Let's also suppress h/w interrupts whenever the Debugger is single-stepping an instruction; I'm loathe
         * to allow Debugger interactions to affect the behavior of the virtual machine in ANY way, but I'm making
         * this small concession to avoid the occasional and sometimes unexpected Debugger command that ends up
         * stepping into a hardware interrupt service routine (ISR).
         *
         * Note that this is similar to the problem discussed in checkINTR() regarding the priority of external h/w
         * interrupts vs. Trap interrupts, but they require different solutions, because our Debugger operates
         * independently of the CPU.
         *
         * One exception I make here is when you've asked the Debugger to display PIC messages, the idea being that
         * if you're watching the PIC that closely, then you want to hardware interrupts to occur regardless.
         */
        if (!nMinCycles && !this.messageEnabled(MESSAGE.PIC)) this.opFlags |= X86.OPFLAG.NOINTR;

        do {
            let opPrefixes = this.opFlags & X86.OPFLAG_PREFIXES;
            if (opPrefixes) {
                this.opPrefixes |= opPrefixes;
            } else {
                /**
                 * opLIP is used, among other things, to help string instructions rewind to the first prefix
                 * byte whenever the instruction needs to be repeated.  Repeating string instructions in this
                 * manner (essentially restarting them) is a bit heavy-handed, but ultimately it's more compatible,
                 * because it allows hardware interrupts (as well as Trap processing and Debugger single-stepping)
                 * to occur at any point during the string operation, without any additional effort.
                 *
                 * NOTE: The way we restart string instructions actually fixes an 8086/8088 flaw, because string
                 * instructions with multiple prefixes (eg, a REP and a segment override) would not be restarted
                 * properly following a hardware interrupt.  The recommended workarounds were to either turn off
                 * interrupts or to follow the string instruction with a LOOPNZ back to the first prefix byte.
                 * To emulate the flawed behavior, turn on BUGS_8086.
                 */
                this.opLIP = this.regLIP;
                this.segData = this.segDS;
                this.segStack = this.segSS;
                this.regEA = this.regEAWrite = X86.ADDR_INVALID;

                if (I386 && (this.opPrefixes & (X86.OPFLAG.ADDRSIZE | X86.OPFLAG.DATASIZE))) {
                    this.resetSizes();
                }

                this.opPrefixes = this.opFlags & (X86.OPFLAG.REPEAT | X86.OPFLAG.IRET);

                if (this.intFlags) {
                    if (this.checkINTR()) {
                        if (!nMinCycles) {
                            this.assert(DEBUGGER);  // nMinCycles of zero should be generated ONLY by the Debugger
                            if (DEBUGGER) {
                                this.printf("interrupt dispatched\n");
                                this.opFlags = 0;
                                break;
                            }
                        }
                    }
                    if (this.intFlags & X86.INTFLAG.HALT) {
                        /**
                         * As discussed in opHLT(), the CPU is never REALLY halted by a HLT instruction, because the
                         * entire machine relies on the steady advance of the overall cycle count, to ensure that timer
                         * updates, video updates, etc, all continue to occur at the expected rates.
                         *
                         * So opHLT() sets X86.INTFLAG.HALT, signalling that we should not execute any more instructions
                         * until checkINTR() detects a hardware interrupt and clears X86.INTFLAG.HALT.
                         *
                         * Ideally, we would also end the current burst; ie:
                         *
                         *      this.nStepCycles = 0;
                         *      this.opFlags = 0;
                         *      break;
                         *
                         * and save the browser a bunch of work, which would translate into power savings for the host
                         * operating system, just as HLT was intended to do for the guest operating system.  Unfortunately,
                         * that screws up up our dynamic speed recalculations, because it makes it appear that a single
                         * instruction (HLT) performed the work of many.
                         *
                         * We could certainly add more cycle bookkeeping to compensate for HLT's lack of work, but for now,
                         * it's simpler to re-execute the HLT as long as X86.INTFLAG.HALT is set.
                         */
                        X86.opHLT.call(this);
                        continue;
                    }
                    if (this.intFlags & X86.INTFLAG.DEBUGGER) {
                        if (this.dbg.checkInstruction(this.regLIP, nDebugState)) {
                            this.stopCPU();
                            break;
                        }
                        nDebugState = 1;
                    }
                }
            }

            this.opFlags = 0;

            /**
            if (DEBUG || PREFETCH) {
                this.nBusCycles = 0;
                this.nSnapCycles = this.nStepCycles;
            }
             */

            this.aOps[this.getIPByte()].call(this);

            /**
            if (PREFETCH) {
                let nSpareCycles = (this.nSnapCycles - this.nStepCycles) - this.nBusCycles;
                if (nSpareCycles >= 4) {
                    this.fillPrefetch(nSpareCycles >> 2);   // for every 4 spare cycles, fetch 1 instruction byte
                }
            }
             */

            /**
            if (MAXDEBUG) {
                //
                // Make sure that every instruction is assessing a cycle cost, and that the cost is a net positive.
                //
                if (this.flags.complete && this.nStepCycles >= this.nSnapCycles && !(this.opFlags & X86.OPFLAG_PREFIXES)) {
                    this.printf("cycle miscount: %d\n", (this.nSnapCycles - this.nStepCycles));
                    this.setIP(this.opLIP - this.segCS.base);
                    this.stopCPU();
                    break;
                }
            }
             */

        } while (this.nStepCycles > 0);

        return (this.flags.complete? this.nBurstCycles - this.nStepCycles : (this.flags.complete === undefined? 0 : -1));
    }

    /**
     * setDMA(fActive)
     *
     * This is called by the ChipSet component to update DMA status.
     *
     * @this {CPUx86}
     * @param {boolean} fActive is true to set INTFLAG.DMA, false to clear
     *
     setDMA(fActive)
     {
        if (this.chipset) {
            if (fActive) {
                this.intFlags |= X86.INTFLAG.DMA;
            } else {
                this.intFlags &= ~X86.INTFLAG.DMA;
            }
        }
    }
     */

    /**
     * CPUx86.init()
     *
     * This function operates on every HTML element of class "cpu", extracting the
     * JSON-encoded parameters for the CPUx86 constructor from the element's "data-value"
     * attribute, invoking the constructor (which in turn invokes the CPU constructor)
     * to create a CPUx86 component, and then binding any associated HTML controls to the
     * new component.
     */
    static init()
    {
        let aeCPUs = Component.getElementsByClass(APPCLASS, "cpu");
        for (let iCPU = 0; iCPU < aeCPUs.length; iCPU++) {
            let eCPU = aeCPUs[iCPU];
            let parmsCPU = Component.getComponentParms(eCPU);
            let cpu = new CPUx86(parmsCPU);
            Component.bindComponentControls(cpu, eCPU, APPCLASS);
        }
    }
}

/**
 * Initialize every CPU module on the page
 */
WebLib.onInit(CPUx86.init);
