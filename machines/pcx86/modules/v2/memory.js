/**
 * @fileoverview Implements the PCx86 "physical" Memory component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import X86 from "./x86.js";
import Component from "../../../modules/v2/component.js";
import { BACKTRACK, BYTEARRAYS, DEBUG, DEBUGGER, I386, PAGEBLOCKS, TYPEDARRAYS } from "./defines.js";

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
 * @class Memoryx86
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Memoryx86 {
    /**
     * Last used block ID (used for debugging only)
     */
    static idBlock = 0;

    /**
     * Basic memory types
     *
     * RAM is the most conventional memory type, providing full read/write capability to x86-compatible (ie,
     * 'little endian") storage.  ROM is equally conventional, except that the fReadOnly property is set,
     * disabling writes.  VIDEO is treated exactly like RAM, unless a controller is provided.  Both RAM and
     * VIDEO memory are always considered writable, and even ROM can be written using the Bus setByteDirect()
     * interface (which in turn uses the Memory writeByteDirect() interface), allowing the ROM component to
     * initialize its own memory.  The CTRL type is used to identify memory-mapped devices that do not need
     * any default storage and always provide their own controller.
     *
     * UNPAGED and PAGED blocks are created by the CPU when paging is enabled; the role of an UNPAGED block
     * is simply to perform page translation and replace itself with a PAGED block, which redirects read/write
     * requests to the physical page located during translation.  UNPAGED and PAGED blocks are considered
     * "logical" blocks that don't contain any storage of their own; all other block types represent "physical"
     * memory (or a memory-mapped device).
     *
     * Unallocated regions of the address space contain a special memory block of type NONE that contains
     * no storage.  Mapping every addressable location to a memory block allows all accesses to be routed in
     * exactly the same manner, without resorting to any range or processor checks.
     *
     * Originally, the Debugger always went through the Bus interfaces, and could therefore modify ROMs as well,
     * but with the introduction of protected mode memory segmentation (and later paging), where logical and
     * physical addresses were no longer the same, that is no longer true.  For coherency, all Debugger memory
     * accesses now go through Segx86 and CPUx86 memory interfaces, so that the user sees the same segment
     * and page translation that the CPU sees.  However, the Debugger uses a special probeAddr() interface to
     * read memory, along with a special "fSuppress" flag to mapPageBlock(), to prevent its memory accesses
     * from triggering segment and/or page faults when invalid or not-present segments or pages are accessed.
     *
     * These types are not mutually exclusive.  For example, VIDEO memory could be allocated as RAM, with or
     * without a custom controller (the original Monochrome and CGA video cards used read/write storage that
     * was indistinguishable from RAM), and CTRL memory could be allocated as an empty block of any type, with
     * a custom controller.  A few types are required for certain features (eg, ROM is required if you want
     * read-only memory), but the larger purpose of these types is to help document the caller's intent and to
     * provide the Control Panel with the ability to highlight memory regions accordingly.
     */
    static TYPE = {
        NONE:       0,
        RAM:        1,
        ROM:        2,
        VIDEO:      3,
        CTRL:       4,
        UNPAGED:    5,
        PAGED:      6,
        COLORS:     ["black", "blue", "green", "cyan"],
        NAMES:      ["NONE",  "RAM",  "ROM",   "VIDEO", "H/W", "UNPAGED", "PAGED"]
    };

    static FLAGS = {
        CLEAN:      0x0,
        DIRTY:      0x1,
        MODIFIED:   0x2
    };

    /**
     * Memory(addr, used, size, type, controller)
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
     * @this {Memoryx86}
     * @param {number} [addr] of lowest used address in block
     * @param {number} [used] portion of block in bytes (0 for none); must be a multiple of 4
     * @param {number} [size] of block's buffer in bytes (0 for none); must be a multiple of 4
     * @param {number} [type] is one of the Memoryx86.TYPE constants (default is Memoryx86.TYPE.NONE)
     * @param {Controller} [controller] is an optional memory controller component
     * @param {CPUx86} [cpu] is required for UNPAGED memory blocks, so that the CPU can map it to a PAGED block
     */
    constructor(addr, used, size, type, controller, cpu)
    {
        let i;
        this.id = (Memoryx86.idBlock += 2);
        this.adw = null;
        this.offset = 0;
        this.addr = addr;
        this.used = used;
        this.size = size || 0;
        this.type = type || Memoryx86.TYPE.NONE;
        this.fReadOnly = (type == Memoryx86.TYPE.ROM);
        this.controller = null;
        this.cpu = cpu;             // if a CPU reference is provided, then this must be an UNPAGED Memory block allocation
        this.copyBreakpoints();     // initialize the block's Debugger info (eg, breakpoint totals); the caller will reinitialize

        /**
         * Dirty block tracking is now controller-specific.  As noted in the paged block handlers (eg, writeBytePLE),
         * the original purposes were to allow saveMemory() to save only dirty blocks and to enable the Video component
         * to quickly detect changes to the video buffer.  But saveMemory() has since been changed to save (and compress)
         * all memory blocks by default, and the Video component now uses a custom memory controller for all video modes,
         * which performs its own dirty block tracking, so general-purpose memory blocks no longer need to pay this
         * penalty.
         */
        this.flags = Memoryx86.FLAGS.CLEAN;

        if (BACKTRACK) {
            if (!size || controller) {
                this.fModBackTrack = false;
                this.readBackTrack = this.readBackTrackNone;
                this.writeBackTrack = this.writeBackTrackNone;
                this.modBackTrack = this.modBackTrackNone;
            } else {
                this.fModBackTrack = true;
                this.readBackTrack = this.readBackTrackIndex;
                this.writeBackTrack = this.writeBackTrackIndex;
                this.modBackTrack = this.modBackTrackIndex;
                this.abtIndexes = new Array(size);
                for (i = 0; i < size; i++) this.abtIndexes[i] = 0;
            }
        }

        /**
         * For empty memory blocks, all we need to do is ensure all access functions
         * are mapped to "none" handlers (or "unpaged" handlers if paging is enabled).
         */
        if (!size) {
            this.setAccess();
            return;
        }

        /**
         * When a controller is specified, the controller must provide a buffer,
         * via getMemoryBuffer(), and memory access functions, via getMemoryAccess().
         */
        if (controller) {
            this.controller = controller;
            let a = controller.getMemoryBuffer(addr|0);
            this.adw = a[0];
            this.offset = a[1];
            this.setAccess(controller.getMemoryAccess());
            return;
        }

        /**
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
            /**
             * If littleEndian is true, we can use ab[], aw[] and adw[] directly; well, we can use them
             * whenever the offset is a multiple of 1, 2 or 4, respectively.  Otherwise, we must fallback to
             * dv.getUint8()/dv.setUint8(), dv.getUint16()/dv.setUint16() and dv.getInt32()/dv.setInt32().
             */
            this.ab = new Uint8Array(this.buffer, 0, size);
            this.aw = new Uint16Array(this.buffer, 0, size >> 1);
            this.adw = new Int32Array(this.buffer, 0, size >> 2);
            this.setAccess(littleEndian? Memoryx86.afnArrayLE : Memoryx86.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = new Array(size);
            } else {
                /**
                 * NOTE: This is the default mode of operation (!TYPEDARRAYS && !BYTEARRAYS), because it
                 * seems to provide the best performance; and although in theory, that performance might
                 * come at twice the overhead of TYPEDARRAYS, it's increasingly likely that the JavaScript
                 * runtime will notice that all we ever store are 32-bit values, and optimize accordingly.
                 */
                this.adw = new Array(size >> 2);
                for (i = 0; i < this.adw.length; i++) this.adw[i] = 0;
            }
            this.setAccess(Memoryx86.afnMemory);
        }
    }

    /**
     * init(addr)
     *
     * Quick reinitializer when reusing a Memory block.
     *
     * @this {Memoryx86}
     * @param {number} addr
     */
    init(addr)
    {
        this.addr = addr;
    }

    /**
     * clean(fScrub)
     *
     * @this {Memoryx86}
     * @param {boolean} [fScrub]
     * @returns {boolean} (true if block is not dirty, false otherwise)
     */
    clean(fScrub)
    {
        if (this.flags & Memoryx86.FLAGS.DIRTY) {
            if (fScrub) {
                this.flags = (this.flags & ~Memoryx86.FLAGS.DIRTY) | Memoryx86.FLAGS.MODIFIED;
            }
            return false;
        }
        return true;
    }

    /**
     * modified()
     *
     * @this {Memoryx86}
     * @returns {boolean} (true if block is dirty and/or modified, false otherwise)
     */
    modified()
    {
        return (this.flags & (Memoryx86.FLAGS.DIRTY | Memoryx86.FLAGS.MODIFIED)) != 0;
    }

    /**
     * clone(mem, type)
     *
     * Converts the current Memory block (this) into a clone of the given Memory block (mem),
     * and optionally overrides the current block's type with the specified type.
     *
     * @this {Memoryx86}
     * @param {Memoryx86} mem
     * @param {number} [type]
     * @param {Debuggerx86} [dbg]
     */
    clone(mem, type, dbg)
    {
        /**
         * Original memory block IDs are even; cloned memory block IDs are odd;
         * the original ID of the current block is lost, but that's OK, since it was presumably
         * produced merely to become a clone.
         */
        this.id = mem.id | 0x1;
        this.used = mem.used;
        this.size = mem.size;
        if (type) {
            this.type = type;
            this.fReadOnly = (type == Memoryx86.TYPE.ROM);
        }
        if (TYPEDARRAYS) {
            this.buffer = mem.buffer;
            this.dv = mem.dv;
            this.ab = mem.ab;
            this.aw = mem.aw;
            this.adw = mem.adw;
            this.setAccess(littleEndian? Memoryx86.afnArrayLE : Memoryx86.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = mem.ab;
            } else {
                this.adw = mem.adw;
            }
            this.setAccess(Memoryx86.afnMemory);
        }
        this.copyBreakpoints(dbg, mem);
    }

    /**
     * save()
     *
     * This gets the contents of a Memory block as an array of 32-bit values; used by Bus.saveMemory(),
     * which in turn is called by CPUx86.save().
     *
     * Memory blocks with custom memory controllers do NOT save their contents; that's the responsibility
     * of the controller component.
     *
     * @this {Memoryx86}
     * @returns {Array|Int32Array|null}
     */
    save()
    {
        let adw, i;
        if (this.controller) {
            adw = null;
        }
        else if (BYTEARRAYS) {
            adw = new Array(this.size >> 2);
            let off = 0;
            for (i = 0; i < adw.length; i++) {
                adw[i] = this.ab[off] | (this.ab[off + 1] << 8) | (this.ab[off + 2] << 16) | (this.ab[off + 3] << 24);
                off += 4;
            }
        }
        else if (TYPEDARRAYS) {
            /**
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
     * This restores the contents of a Memory block from an array of 32-bit values; used by
     * Bus.restoreMemory(), which is called by CPUx86.restore(), after all other components have been
     * restored and thus all Memory blocks have been allocated by their respective components.
     *
     * @this {Memoryx86}
     * @param {Array} adw
     * @returns {boolean} true if successful, false if block size mismatch
     */
    restore(adw)
    {
        /**
         * If this block has its own controller, then that controller is responsible for performing the
         * restore, since we don't know the underlying memory format.  However, we no longer blow off these
         * restore calls, because old machine states may still try to restore video memory blocks for MDA
         * and CGA video buffers (and in those cases, the memory formats should be compatible).
         */
        let i;
        let off;
        if (this.controller) {
            if (this.adw) {
                /**
                 * If the controller memory buffer appears to be for either an MDA using 2048 16-bit values
                 * or a CGA using 8192 16-bit values, then split up the saved 32-bit values accordingly.
                 * Otherwise, do a 1-for-1 restore and hope for the best.
                 */
                if (this.adw.length == 2048 || this.adw.length == 8192) {
                    off = (this.offset >> 1);
                    for (i = 0; i < adw.length; i++) {
                        if (off >= this.adw.length) break;
                        this.adw[off++] = adw[i] & 0xffff;
                        this.adw[off++] = (adw[i] >> 16) & 0xffff;
                    }
                }
                else {
                    off = (this.offset >> 2);
                    for (i = 0; i < adw.length; i++) {
                        if (off >= this.adw.length) break;
                        this.adw[off++] = adw[i];
                    }
                }
                this.flags |= Memoryx86.FLAGS.DIRTY;
            }
            return true;
        }
        if (this.size == adw.length << 2) {
            if (BYTEARRAYS) {
                off = 0;
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
            this.flags |= Memoryx86.FLAGS.DIRTY;
            return true;
        }
        return false;
    }

    /**
     * setAccess(afn, fDirect)
     *
     * The afn parameter should be a 6-entry function table containing two byte handlers, two
     * short handlers, and two long handlers.  See the static afnMemory table for an example.
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
     * @this {Memoryx86}
     * @param {Array.<function()>} [afn] function table
     * @param {boolean} [fDirect] (true to update direct access functions as well; default is true)
     */
    setAccess(afn, fDirect)
    {
        if (!afn) {
            if (this.type == Memoryx86.TYPE.UNPAGED) {
                afn = Memoryx86.afnUnpaged;
            }
            else if (this.type == Memoryx86.TYPE.PAGED) {
                afn = Memoryx86.afnPaged;
            } else {
                Component.assert(this.type == Memoryx86.TYPE.NONE);
                afn = Memoryx86.afnNone;
            }
        }
        this.setReadAccess(afn, fDirect);
        this.setWriteAccess(afn, fDirect);
    }

    /**
     * setReadAccess(afn, fDirect)
     *
     * @this {Memoryx86}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setReadAccess(afn, fDirect)
    {
        if (!fDirect || !this.cReadBreakpoints) {
            this.readByte = afn[0] || this.readNone;
            this.readShort = afn[2] || this.readShortDefault;
            this.readLong = afn[4] || this.readLongDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.readByteDirect = afn[0] || this.readNone;
            this.readShortDirect = afn[2] || this.readShortDefault;
            this.readLongDirect = afn[4] || this.readLongDefault;
        }
    }

    /**
     * setWriteAccess(afn, fDirect)
     *
     * @this {Memoryx86}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setWriteAccess(afn, fDirect)
    {
        if (!fDirect || !this.cWriteBreakpoints) {
            this.writeByte = !this.fReadOnly && afn[1] || this.writeNone;
            this.writeShort = !this.fReadOnly && afn[3] || this.writeShortDefault;
            this.writeLong = !this.fReadOnly && afn[5] || this.writeLongDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.writeByteDirect = afn[1] || this.writeNone;
            this.writeShortDirect = afn[3] || this.writeShortDefault;
            this.writeLongDirect = afn[5] || this.writeLongDefault;
        }
    }

    /**
     * resetReadAccess()
     *
     * @this {Memoryx86}
     */
    resetReadAccess()
    {
        this.readByte = this.readByteDirect;
        this.readShort = this.readShortDirect;
        this.readLong = this.readLongDirect;
    }

    /**
     * resetWriteAccess()
     *
     * @this {Memoryx86}
     */
    resetWriteAccess()
    {
        this.writeByte = this.fReadOnly? this.writeNone : this.writeByteDirect;
        this.writeShort = this.fReadOnly? this.writeShortDefault : this.writeShortDirect;
        this.writeLong = this.fReadOnly? this.writeLongDefault : this.writeLongDirect;
    }

    /**
     * getPageBlock(addr, fWrite)
     *
     * Called for UNPAGED Memory blocks only.
     *
     * @this {Memoryx86}
     * @param {number} addr
     * @param {boolean} fWrite (true if called for a write, false if for a read)
     * @returns {Memoryx86}
     */
    getPageBlock(addr, fWrite)
    {
        /**
         * Even when mapPageBlock() fails (ie, when the page is not present or has insufficient privileges), it
         * will trigger a fault (since we don't set fSuppress), but it will still return a block (ie, an empty block).
         */
        return this.cpu.mapPageBlock(addr, fWrite);
    }

    /**
     * setPhysBlock(blockPhys, blockPDE, offPDE, blockPTE, offPTE)
     *
     * @this {Memoryx86}
     * @param {Memoryx86} blockPhys
     * @param {Memoryx86} blockPDE
     * @param {number} offPDE
     * @param {Memoryx86} blockPTE
     * @param {number} offPTE
     */
    setPhysBlock(blockPhys, blockPDE, offPDE, blockPTE, offPTE)
    {
        this.blockPhys = blockPhys;
        this.blockPDE = blockPDE;
        this.iPDE = offPDE >> 2;    // convert offPDE into iPDE (an adw index)
        this.blockPTE = blockPTE;
        this.iPTE = offPTE >> 2;    // convert offPTE into iPTE (an adw index)
        /**
         * This is an optimization for "normal" pages, installing paged memory handlers that mimic
         * normal memory but also know how to update page tables.  If any of the criteria are not met
         * for these special handlers, we fall back to the slower default "paged" memory handlers.
         */
        if (TYPEDARRAYS && littleEndian && blockPhys.adw && !blockPhys.controller && !blockPhys.cReadBreakpoints && !blockPhys.cWriteBreakpoints) {
            this.ab = blockPhys.ab;
            this.aw = blockPhys.aw;
            this.adw = blockPhys.adw;
            this.setAccess(Memoryx86.afnPagedLE);
        } else {
            this.bitPTEAccessed = blockPhys? Memoryx86.adjustEndian(X86.PTE.ACCESSED) : 0;
            this.bitPTEDirty = blockPhys? Memoryx86.adjustEndian(X86.PTE.ACCESSED | X86.PTE.DIRTY) : 0;
            this.setAccess(Memoryx86.afnPaged);
        }
    }

    /**
     * printAddr(sMessage)
     *
     * @this {Memoryx86}
     * @param {string} sMessage
     */
    printAddr(sMessage)
    {
        if (DEBUG && this.dbg) {
            this.dbg.printf(MESSAGE.MEM, "%s %%%x #%s\n", this.addr, this.id);
        }
    }

    /**
     * addBreakpoint(off, fWrite, cpu)
     *
     * NOTE: Some Memory blocks already require access to the CPU (eg, UNPAGED blocks that need to call cpu.mapPageBlock()),
     * while others require access only if the CPU has set a read or write breakpoint in one of its Debug registers; the latter
     * case is handled here by virtue of the CPU parameter.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {boolean} fWrite
     * @param {CPUx86} [cpu] (required for breakpoints set by the CPU, as opposed to the Debugger)
     */
    addBreakpoint(off, fWrite, cpu)
    {
        if (!fWrite) {
            if (this.cReadBreakpoints++ === 0) {
                if (cpu) this.cpu = cpu;
                this.setReadAccess(Memoryx86.afnChecked, false);
            }
            if (DEBUG) this.printAddr("read breakpoint added to memory block");
        }
        else {
            if (this.cWriteBreakpoints++ === 0) {
                if (cpu) this.cpu = cpu;
                this.setWriteAccess(Memoryx86.afnChecked, false);
            }
            if (DEBUG) this.printAddr("write breakpoint added to memory block");
        }
    }

    /**
     * removeBreakpoint(off, fWrite)
     *
     * NOTE: If this Memory block is not an UNPAGED block that might need to call cpu.mapPageBlock()), and it no
     * longer has any read or write breakpoints associated with it, then it no longer needs a CPU reference.  The
     * existence of a CPU reference only impacts the performance of the "checked" memory access functions, so it's
     * not critical to eliminate it.
     *
     * TODO: Another option would be to count CPU references separately from Debugger references, so that when
     * the former goes to zero, we can unconditionally remove the CPU reference; UNPAGED blocks would automatically
     * increment that reference count, so their CPU reference would never go away.
     *
     * @this {Memoryx86}
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
     * @this {Memoryx86}
     * @param {Debuggerx86} [dbg]
     * @param {Memoryx86} [mem] (outgoing Memory block to copy breakpoints from, if any)
     */
    copyBreakpoints(dbg, mem)
    {
        this.dbg = dbg;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        if (mem) {
            if (mem.cpu) this.cpu = mem.cpu;
            if ((this.cReadBreakpoints = mem.cReadBreakpoints)) {
                this.setReadAccess(Memoryx86.afnChecked, false);
            }
            if ((this.cWriteBreakpoints = mem.cWriteBreakpoints)) {
                this.setWriteAccess(Memoryx86.afnChecked, false);
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
     * Memory interfaces have always returned values that are properly masked to 8, 16 or 32 bits, respectively.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readNone(off, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.CPU + MESSAGE.MEM, "attempt to read invalid block %%%x\n", addr);
        }
        return 0xff;
    }

    /**
     * writeNone(off, v, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} v (could be either a byte or word value, since we use the same handler for both kinds of accesses)
     * @param {number} addr
     */
    writeNone(off, v, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.CPU + MESSAGE.MEM, "attempt to write %#06x to invalid block %%%x\n", v, addr);
        }
    }

    /**
     * readShortDefault(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortDefault(off, addr)
    {
        return this.readByte(off++, addr++) | (this.readByte(off, addr) << 8);
    }

    /**
     * readLongDefault(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongDefault(off, addr)
    {
        return this.readByte(off++, addr++) | (this.readByte(off++, addr++) << 8) | (this.readByte(off++, addr++) << 16) | (this.readByte(off, addr) << 24);
    }

    /**
     * writeShortDefault(off, w, addr)
     *
     * @this {Memoryx86}
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
     * writeLongDefault(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeLongDefault(off, w, addr)
    {
        this.writeByte(off++, w & 0xff, addr++);
        this.writeByte(off++, (w >> 8) & 0xff, addr++);
        this.writeByte(off++, (w >> 16) & 0xff, addr++);
        this.writeByte(off, (w >>> 24), addr);
    }

    /**
     * readByteMemory(off, addr)
     *
     * @this {Memoryx86}
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
     * @this {Memoryx86}
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
     * readLongMemory(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongMemory(off, addr)
    {
        if (BYTEARRAYS) {
            return this.ab[off] | (this.ab[off + 1] << 8) | (this.ab[off + 2] << 16) | (this.ab[off + 3] << 24);
        }
        let idw = off >> 2;
        let nShift = (off & 0x3) << 3;
        let l = this.adw[idw];
        if (nShift) {
            l >>>= nShift;
            l |= this.adw[idw + 1] << (32 - nShift);
        }
        return l;
    }

    /**
     * writeByteMemory(off, b, addr)
     *
     * @this {Memoryx86}
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
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeShortMemory(off, w, addr)
     *
     * @this {Memoryx86}
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
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeLongMemory(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongMemory(off, l, addr)
    {
        if (BYTEARRAYS) {
            this.ab[off] = (l & 0xff);
            this.ab[off + 1] = (l >> 8) & 0xff;
            this.ab[off + 2] = (l >> 16) & 0xff;
            this.ab[off + 3] = (l >> 24) & 0xff;
        } else {
            let idw = off >> 2;
            let nShift = (off & 0x3) << 3;
            if (!nShift) {
                this.adw[idw] = l;
            } else {
                let mask = (0xffffffff|0) << nShift;
                this.adw[idw] = (this.adw[idw] & ~mask) | (l << nShift);
                idw++;
                this.adw[idw] = (this.adw[idw] & mask) | (l >>> (32 - nShift));
            }
        }
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * readByteChecked(off, addr)
     *
     * NOTE: When we're called in the context of a PAGED block (eg, with one or more DEBUGGER breakpoints set),
     * the checkMemory functions need "this.addr + off" rather than "addr", because the former will be the physical
     * address rather than the linear address.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteChecked(off, addr)
    {
        if (!DEBUGGER || !this.dbg || this.addr == null || !this.dbg.checkMemoryRead(this.addr + off)) {
            if (I386 && this.cpu) this.cpu.checkMemoryException(addr, 1, false);
        }
        return this.readByteDirect(off, addr);
    }

    /**
     * readShortChecked(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortChecked(off, addr)
    {
        if (!DEBUGGER || !this.dbg || this.addr == null || !this.dbg.checkMemoryRead(this.addr + off, 2)) {
            if (I386 && this.cpu) this.cpu.checkMemoryException(addr, 2, false);
        }
        return this.readShortDirect(off, addr);
    }

    /**
     * readLongChecked(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongChecked(off, addr)
    {
        if (!DEBUGGER || !this.dbg || this.addr == null || !this.dbg.checkMemoryRead(this.addr + off, 4)) {
            if (I386 && this.cpu) this.cpu.checkMemoryException(addr, 4, false);
        }
        return this.readLongDirect(off, addr);
    }

    /**
     * writeByteChecked(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeByteChecked(off, b, addr)
    {
        if (!DEBUGGER || !this.dbg || this.addr == null || !this.dbg.checkMemoryWrite(this.addr + off)) {
            if (I386 && this.cpu) this.cpu.checkMemoryException(addr, 1, true);
        }
        if (this.fReadOnly) this.writeNone(off, b, addr); else this.writeByteDirect(off, b, addr);
    }

    /**
     * writeShortChecked(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortChecked(off, w, addr)
    {
        if (!DEBUGGER || !this.dbg || this.addr == null || !this.dbg.checkMemoryWrite(this.addr + off, 2)) {
            if (I386 && this.cpu) this.cpu.checkMemoryException(addr, 2, true);
        }
        if (this.fReadOnly) this.writeNone(off, w, addr); else this.writeShortDirect(off, w, addr);
    }

    /**
     * writeLongChecked(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongChecked(off, l, addr)
    {
        if (!DEBUGGER || !this.dbg || this.addr == null || !this.dbg.checkMemoryWrite(this.addr + off, 4)) {
            if (I386 && this.cpu) this.cpu.checkMemoryException(addr, 4, true);
        }
        if (this.fReadOnly) this.writeNone(off, l, addr); else this.writeLongDirect(off, l, addr);
    }

    /**
     * readBytePaged(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readBytePaged(off, addr)
    {
        this.blockPDE.adw[this.iPDE] |= this.bitPTEAccessed;
        this.blockPTE.adw[this.iPTE] |= this.bitPTEAccessed;
        return this.blockPhys.readByte(off, addr);
    }

    /**
     * readShortPaged(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortPaged(off, addr)
    {
        this.blockPDE.adw[this.iPDE] |= this.bitPTEAccessed;
        this.blockPTE.adw[this.iPTE] |= this.bitPTEAccessed;
        return this.blockPhys.readShort(off, addr);
    }

    /**
     * readLongPaged(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongPaged(off, addr)
    {
        this.blockPDE.adw[this.iPDE] |= this.bitPTEAccessed;
        this.blockPTE.adw[this.iPTE] |= this.bitPTEAccessed;
        return this.blockPhys.readLong(off, addr);
    }

    /**
     * writeBytePaged(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeBytePaged(off, b, addr)
    {
        this.blockPDE.adw[this.iPDE] |= this.bitPTEAccessed;
        this.blockPTE.adw[this.iPTE] |= this.bitPTEDirty;
        this.blockPhys.writeByte(off, b, addr);
    }

    /**
     * writeShortPaged(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeShortPaged(off, w, addr)
    {
        this.blockPDE.adw[this.iPDE] |= this.bitPTEAccessed;
        this.blockPTE.adw[this.iPTE] |= this.bitPTEDirty;
        this.blockPhys.writeShort(off, w, addr);
    }

    /**
     * writeLongPaged(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongPaged(off, l, addr)
    {
        this.blockPDE.adw[this.iPDE] |= this.bitPTEAccessed;
        this.blockPTE.adw[this.iPTE] |= this.bitPTEDirty;
        this.blockPhys.writeLong(off, l, addr);
    }

    /**
     * readByteUnpaged(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteUnpaged(off, addr)
    {
        return this.getPageBlock(addr, false).readByte(off, addr);
    }

    /**
     * readShortUnpaged(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortUnpaged(off, addr)
    {
        return this.getPageBlock(addr, false).readShort(off, addr);
    }

    /**
     * readLongUnpaged(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongUnpaged(off, addr)
    {
        return this.getPageBlock(addr, false).readLong(off, addr);
    }

    /**
     * writeByteUnpaged(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteUnpaged(off, b, addr)
    {
        this.getPageBlock(addr, true).writeByte(off, b, addr);
    }

    /**
     * writeShortUnpaged(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeShortUnpaged(off, w, addr)
    {
        this.getPageBlock(addr, true).writeShort(off, w, addr);
    }

    /**
     * writeLongUnpaged(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongUnpaged(off, l, addr)
    {
        this.getPageBlock(addr, true).writeLong(off, l, addr);
    }

    /**
     * readByteBE(off, addr)
     *
     * @this {Memoryx86}
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
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteLE(off, addr)
    {
        return this.ab[off];
    }

    /**
     * readBytePLE(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readBytePLE(off, addr)
    {
        this.blockPDE.adw[this.iPDE] |= X86.PTE.ACCESSED;
        this.blockPTE.adw[this.iPTE] |= X86.PTE.ACCESSED;
        /**
         * TODO: Review this performance hack.  Basically, after the first read of a page,
         * we redirect the default read handler to a faster handler.  However, if operating
         * systems clear the PDE/PTE bits without reloading CR3, they won't get set again.
         *
         * We should look into creating special write handlers for pages containing PDE/PTE
         * entries, and whenever those entries are written, reset the read/write handlers
         * for the corresponding pages.
         */
        this.readByte = this.readByteLE;
        return this.ab[off];
    }

    /**
     * readShortBE(off, addr)
     *
     * @this {Memoryx86}
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
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortLE(off, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned read
         * vs. always reading the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        return (off & 0x1)? (this.ab[off] | (this.ab[off+1] << 8)) : this.aw[off >> 1];
    }

    /**
     * readShortPLE(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortPLE(off, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned read
         * vs. always reading the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        this.blockPDE.adw[this.iPDE] |= X86.PTE.ACCESSED;
        this.blockPTE.adw[this.iPTE] |= X86.PTE.ACCESSED;
        /**
         * TODO: Review this performance hack.  Basically, after the first read of a page,
         * we redirect the default read handler to a faster handler.  However, if operating
         * systems clear the PDE/PTE bits without reloading CR3, they won't get set again.
         *
         * We should look into creating special write handlers for pages containing PDE/PTE
         * entries, and whenever those entries are written, reset the read/write handlers
         * for the corresponding pages.
         */
        this.readShort = this.readShortLE;
        return (off & 0x1)? (this.ab[off] | (this.ab[off+1] << 8)) : this.aw[off >> 1];
    }

    /**
     * readLongBE(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongBE(off, addr)
    {
        return this.dv.getInt32(off, true);
    }

    /**
     * readLongLE(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongLE(off, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned read
         * vs. always reading the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        return (off & 0x3)? (this.ab[off] | (this.ab[off+1] << 8) | (this.ab[off+2] << 16) | (this.ab[off+3] << 24)) : this.adw[off >> 2];
    }

    /**
     * readLongPLE(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readLongPLE(off, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned read
         * vs. always reading the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        this.blockPDE.adw[this.iPDE] |= X86.PTE.ACCESSED;
        this.blockPTE.adw[this.iPTE] |= X86.PTE.ACCESSED;
        /**
         * TODO: Review this performance hack.  Basically, after the first read of a page, we redirect the default
         * read handler to a faster handler.  However, if operating systems clear the PDE/PTE bits without reloading
         * CR3, they won't get set again.
         *
         * We should look into creating special write handlers for pages containing PDE/PTE entries, and whenever
         * those entries are written, reset the read/write handlers for the corresponding pages.
         */
        this.readLong = this.readLongLE;
        return (off & 0x3)? (this.ab[off] | (this.ab[off+1] << 8) | (this.ab[off+2] << 16) | (this.ab[off+3] << 24)) : this.adw[off >> 2];
    }

    /**
     * writeByteBE(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteBE(off, b, addr)
    {
        this.ab[off] = b;
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeByteLE(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeByteLE(off, b, addr)
    {
        this.ab[off] = b;
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeBytePLE(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeBytePLE(off, b, addr)
    {
        this.ab[off] = b;
        this.blockPDE.adw[this.iPDE] |= X86.PTE.ACCESSED;
        this.blockPTE.adw[this.iPTE] |= X86.PTE.ACCESSED | X86.PTE.DIRTY;
        /**
         * TODO: Review this performance hack.  Basically, after the first write of a page, we redirect the default
         * write handler to a faster handler.  However, if operating systems clear the PDE/PTE bits without reloading
         * CR3, they won't get set again.
         *
         * We should look into creating special write handlers for pages containing PDE/PTE entries, and whenever
         * those entries are written, reset the read/write handlers for the corresponding pages.
         */
        this.writeByte = this.writeByteLE;
        /**
         * NOTE: Technically, we should be setting the DIRTY flag on blockPDE and blockPTE as well, but let's consider
         * the two sole uses of DIRTY.  First, we have cleanMemory(), which is currently used only by the Video component,
         * and video memory should never contain page directories or page tables, so no worries there.  Second, we have
         * saveMemory(), but the CPU now asks that function to save all physical memory blocks whenever paging is enabled,
         * so no worries there either.
         */
        // this.blockPhys.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeShortBE(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortBE(off, w, addr)
    {
        this.dv.setUint16(off, w, true);
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeShortLE(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortLE(off, w, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned write
         * vs. always writing the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        if (off & 0x1) {
            this.ab[off] = w;
            this.ab[off+1] = w >> 8;
        } else {
            this.aw[off >> 1] = w;
        }
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeShortPLE(off, w, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortPLE(off, w, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned write
         * vs. always writing the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        if (off & 0x1) {
            this.ab[off] = w;
            this.ab[off+1] = w >> 8;
        } else {
            this.aw[off >> 1] = w;
        }
        this.blockPDE.adw[this.iPDE] |= X86.PTE.ACCESSED;
        this.blockPTE.adw[this.iPTE] |= X86.PTE.ACCESSED | X86.PTE.DIRTY;
        /**
         * TODO: Review this performance hack.  Basically, after the first write of a page,
         * we redirect the default write handler to a faster handler.  However, if operating
         * systems clear the PDE/PTE bits without reloading CR3, they won't get set again.
         *
         * We should look into creating special write handlers for pages containing PDE/PTE
         * entries, and whenever those entries are written, reset the read/write handlers
         * for the corresponding pages.
         */
        this.writeShort = this.writeShortLE;
        /**
         * NOTE: Technically, we should be setting the DIRTY flag on blockPDE and blockPTE as well, but let's
         * consider the two sole uses of DIRTY.  First, we have cleanMemory(), which is currently used only by
         * the Video component, and video memory should never contain page directories or page tables, so no
         * worries there.  Second, we have saveMemory(), but the CPU now asks that function to save all physical
         * memory blocks whenever paging is enabled, so no worries there either.
         */
        // this.blockPhys.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeLongBE(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongBE(off, l, addr)
    {
        this.dv.setInt32(off, l, true);
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeLongLE(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongLE(off, l, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned write
         * vs. always writing the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        if (off & 0x3) {
            this.ab[off] = l;
            this.ab[off+1] = (l >> 8);
            this.ab[off+2] = (l >> 16);
            this.ab[off+3] = (l >> 24);
        } else {
            this.adw[off >> 2] = l;
        }
        // this.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * writeLongPLE(off, l, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} l
     * @param {number} addr
     */
    writeLongPLE(off, l, addr)
    {
        /**
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned write
         * vs. always writing the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        if (off & 0x3) {
            this.ab[off] = l;
            this.ab[off+1] = (l >> 8);
            this.ab[off+2] = (l >> 16);
            this.ab[off+3] = (l >> 24);
        } else {
            this.adw[off >> 2] = l;
        }
        this.blockPDE.adw[this.iPDE] |= X86.PTE.ACCESSED;
        this.blockPTE.adw[this.iPTE] |= X86.PTE.ACCESSED | X86.PTE.DIRTY;
        /**
         * TODO: Review this performance hack.  Basically, after the first write of a page,
         * we redirect the default write handler to a faster handler.  However, if operating
         * systems clear the PDE/PTE bits without reloading CR3, they won't get set again.
         *
         * We should look into creating special write handlers for pages containing PDE/PTE
         * entries, and whenever those entries are written, reset the read/write handlers
         * for the corresponding pages.
         */
        this.writeLong = this.writeLongLE;
        /**
         * NOTE: Technically, we should be setting the DIRTY flag on blockPDE and blockPTE as well, but let's
         * consider the two sole uses of DIRTY.  First, we have cleanMemory(), which is currently used only by
         * the Video component, and video memory should never contain page directories or page tables, so no
         * worries there.  Second, we have saveMemory(), but the CPU now asks that function to save all physical
         * memory blocks whenever paging is enabled, so no worries there either.
         */
        // this.blockPhys.flags |= Memoryx86.FLAGS.DIRTY;
    }

    /**
     * readBackTrackNone(off)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @returns {number}
     */
    readBackTrackNone(off)
    {
        return 0;
    }

    /**
     * writeBackTrackNone(off, bti)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} bti
     */
    writeBackTrackNone(off, bti)
    {
    }

    /**
     * modBackTrackNone(fMod)
     *
     * @this {Memoryx86}
     * @param {boolean} fMod
     */
    modBackTrackNone(fMod)
    {
        return false;
    }

    /**
     * readBackTrackIndex(off)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @returns {number}
     */
    readBackTrackIndex(off)
    {
        return this.abtIndexes[off];
    }

    /**
     * writeBackTrackIndex(off, bti)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} bti
     * @returns {number} previous bti (0 if none)
     */
    writeBackTrackIndex(off, bti)
    {
        let btiPrev;
        btiPrev = this.abtIndexes[off];
        this.abtIndexes[off] = bti;
        return btiPrev;
    }

    /**
     * modBackTrackIndex(fMod)
     *
     * @this {Memoryx86}
     * @param {boolean} fMod
     * @returns {boolean} previous value
     */
    modBackTrackIndex(fMod)
    {
        let fModPrev = this.fModBackTrack;
        this.fModBackTrack = fMod;
        return fModPrev;
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

/**
 * This is the effective definition of afnNone, but we need not fully define it, because setAccess() uses these
 * defaults when any of the 6 handlers (ie, 2 byte handlers, 2 short handlers, and 2 long handlers) are undefined.
 *
Memoryx86.afnNone = [
    Memoryx86.prototype.readNone,
    Memoryx86.prototype.writeNone,
    Memoryx86.prototype.readShortDefault,
    Memoryx86.prototype.writeShortDefault,
    Memoryx86.prototype.readLongDefault,
    Memoryx86.prototype.writeLongDefault
];
 */
Memoryx86.afnNone = [];

Memoryx86.afnMemory = [
    Memoryx86.prototype.readByteMemory,
    Memoryx86.prototype.writeByteMemory,
    Memoryx86.prototype.readShortMemory,
    Memoryx86.prototype.writeShortMemory,
    Memoryx86.prototype.readLongMemory,
    Memoryx86.prototype.writeLongMemory
];

Memoryx86.afnChecked = [
    Memoryx86.prototype.readByteChecked,
    Memoryx86.prototype.writeByteChecked,
    Memoryx86.prototype.readShortChecked,
    Memoryx86.prototype.writeShortChecked,
    Memoryx86.prototype.readLongChecked,
    Memoryx86.prototype.writeLongChecked
];

if (PAGEBLOCKS) {
    Memoryx86.afnPaged = [
        Memoryx86.prototype.readBytePaged,
        Memoryx86.prototype.writeBytePaged,
        Memoryx86.prototype.readShortPaged,
        Memoryx86.prototype.writeShortPaged,
        Memoryx86.prototype.readLongPaged,
        Memoryx86.prototype.writeLongPaged
    ];

    Memoryx86.afnUnpaged = [
        Memoryx86.prototype.readByteUnpaged,
        Memoryx86.prototype.writeByteUnpaged,
        Memoryx86.prototype.readShortUnpaged,
        Memoryx86.prototype.writeShortUnpaged,
        Memoryx86.prototype.readLongUnpaged,
        Memoryx86.prototype.writeLongUnpaged
    ];
}

if (TYPEDARRAYS) {
    Memoryx86.afnArrayBE = [
        Memoryx86.prototype.readByteBE,
        Memoryx86.prototype.writeByteBE,
        Memoryx86.prototype.readShortBE,
        Memoryx86.prototype.writeShortBE,
        Memoryx86.prototype.readLongBE,
        Memoryx86.prototype.writeLongBE
    ];

    Memoryx86.afnArrayLE = [
        Memoryx86.prototype.readByteLE,
        Memoryx86.prototype.writeByteLE,
        Memoryx86.prototype.readShortLE,
        Memoryx86.prototype.writeShortLE,
        Memoryx86.prototype.readLongLE,
        Memoryx86.prototype.writeLongLE
    ];

    Memoryx86.afnPagedLE = [
        Memoryx86.prototype.readBytePLE,
        Memoryx86.prototype.writeBytePLE,
        Memoryx86.prototype.readShortPLE,
        Memoryx86.prototype.writeShortPLE,
        Memoryx86.prototype.readLongPLE,
        Memoryx86.prototype.writeLongPLE
    ];
}
