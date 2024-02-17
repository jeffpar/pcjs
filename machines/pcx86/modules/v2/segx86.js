/**
 * @fileoverview Implements PCx86 segment registers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import X86 from "./x86.js";
import { DEBUG, DEBUGGER, I386 } from "./defines.js";

/**
 * NOTE: The protected-mode support in this module was initially added for 80286 support, and is
 * currently being upgraded for 80386 support.  In a perfect world, all 80386-related support would
 * be disabled/skipped whenever the processor is merely an 80286.  And in fact, that's the case
 * with some of the early changes (eg, skipping X86.DESC.EXT.BASE2431 and X86.DESC.EXT.LIMIT1619
 * fields unless the processor is an 80386).
 *
 * However, the reality is that I won't always be that strict, either because I'm lazy or I don't
 * want to risk a run-time performance hit or (more pragmatically) because any 80286 code you're likely
 * to run probably won't attempt to use descriptor types or other features unique to the 80386 anyway,
 * so the extra paranoia may not be worth the effort.  Ultimately, I would like to see the code tailor
 * itself to the current CPU model, generally with model-specific functions, but that's a lot of work.
 */

/**
 * @class Segx86
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Segx86 {

    static ID = {
        NULL:   0,          // "NULL"
        CODE:   1,          // "CS"
        DATA:   2,          // "DS", "ES", "FS", "GS"
        STACK:  3,          // "SS"
        TSS:    4,          // "TSS"
        LDT:    5,          // "LDT"
        VER:    6,          // "VER"
        DBG:    7           // "DBG"
    };

    static CALLBREAK_SEL = 0x0001;

    /**
     * Segx86(cpu, sName)
     *
     * @this {Segx86}
     * @param {CPUx86} cpu
     * @param {number} id
     * @param {string} [sName] segment register name
     * @param {boolean} [fProt] true if segment register used exclusively in protected-mode (eg, segLDT)
     */
    constructor(cpu, id, sName, fProt)
    {
        this.cpu = cpu;
        this.id = id;
        this.sName = sName || "";
        this.sel = 0;
        this.limit = 0xffff;
        this.offMax = this.limit + 1;
        this.base = 0;
        this.acc = this.type = 0;
        this.ext = 0;
        this.cpl = this.dpl = 0;
        this.addrDesc = X86.ADDR_INVALID;
        this.sizeData = this.sizeAddr = 2;
        this.maskData = this.maskAddr = 0xffff;

        this.loadV86 = this.loadReal;
        this.checkReadV86 = this.checkReadWriteReal;
        this.checkWriteV86 = this.checkReadWriteReal;

        /**
         * Preallocated object for "probed" segment loads
         */
        this.probe = {
            sel: -1, base: 0, limit: 0, acc: 0, type: 0, ext: 0, addrDesc: X86.ADDR_INVALID
        };

        /**
         * The following properties are used for CODE segments only (ie, segCS); if the process of loading
         * CS also requires a stack switch, then fStackSwitch will be set to true; additionally, if the stack
         * switch was the result of a CALL (ie, fCall is true) and one or more (up to 32) parameters are on
         * the old stack, they will be copied to awParms, and then once the stack is switched, the parameters
         * will be pushed from awParms onto the new stack.
         *
         * The typical ways of loading a new segment into CS are JMPF, CALLF (or INT), and RETF (or IRET),
         * via CPU functions setCSIP() and helpINT(), which use segCS.loadCode() and segCS.loadIDT(), respectively.
         *
         * loadCode() requires an fCall value: null means NO privilege level transition may occur, true
         * allows a stack switch and a privilege transition to a numerically lower privilege, and false allows
         * a stack restore and a privilege transition to a numerically greater privilege.
         *
         * loadIDT() sets fCall to true unconditionally in protected-mode (fCall has no meaning in real-mode).
         */
        if (this.id == 1 /* Segx86.ID.CODE */) {        // don't use Segx86.ID.CODE until it's defined, or the Closure Compiler won't inline it
            this.offIP = 0;
            this.fCall = null;
            this.fStackSwitch = false;
            this.awParms = new Array(32);
            this.aCallBreaks = [];
        }

        this.updateMode(true, fProt);

        if (this.id == 0 /* Segx86.ID.NULL */) {
            this.checkRead = this.checkReadWriteNone;
            this.checkWrite = this.checkReadWriteNone;
        }
    }

    /**
     * addCallBreak(fn)
     *
     * Returns a "call break" address in an [off, sel] array.  The given function, fn(), is called
     * whenever that address is called, and if fn() returns false, then the call is skipped.  Otherwise,
     * the call is performed (ie, the old CS:[E]IP is pushed on the stack, and CS:[E]IP is set to the
     * "call break" address.  Which is probably a bad idea, so your function should probably always
     * return false.  Just sayin'.  TODO: Should probably just force all "call break" calls to be skipped.
     *
     * @this {Segx86}
     * @param {function()} fn
     * @returns {Array.<number>} containing offset and selector of call-break address
     */
    addCallBreak(fn)
    {
        this.aCallBreaks.push(fn);
        return [this.aCallBreaks.length, Segx86.CALLBREAK_SEL];
    }

    /**
     * loadCode(off, sel, fCall)
     *
     * A simple wrapper function that encapsulates setting offIP and fCall for segCS loads.
     *
     * @this {Segx86}
     * @param {number} off
     * @param {number} sel
     * @param {boolean|undefined} fCall is true if CALLF in progress, false if RETF/IRET in progress, undefined otherwise
     * @returns {number} base address of selected segment, or X86.ADDR_INVALID if error
     */
    loadCode(off, sel, fCall)
    {
        this.offIP = off;
        this.fCall = fCall;
        return this.load(sel);
    }

    /**
     * loadReal(sel, fProbe)
     *
     * The default segment load() function for real-mode.
     *
     * @this {Segx86}
     * @param {number} sel
     * @param {boolean} [fProbe] (here only to make the function signatures of loadReal() and loadProt() match)
     * @returns {number} base address of selected segment
     */
    loadReal(sel, fProbe)
    {
        this.sel = sel & 0xffff;
        /**
         * Loading a new value into a segment register in real-mode alters ONLY the selector and the base;
         * all other attributes (eg, limit, operand size, address size, etc) are unchanged.  If you run any
         * code that switches to protected-mode, loads a 32-bit code segment, and then switches back to
         * real-mode, it is THAT code's responsibility to load a 16-bit segment into CS before returning to
         * real-mode; otherwise, your machine will probably be toast.
         */
        return this.base = this.sel << 4;
    }

    /**
     * loadProt(sel, fProbe)
     *
     * This replaces the segment's default load() function whenever the segment is notified via updateMode() by the
     * CPU's setProtMode() that the processor is now in protected-mode.
     *
     * Segments in protected-mode are referenced by selectors, which are indexes into descriptor tables (GDT or LDT)
     * whose descriptors are 4-word (8-byte) entries:
     *
     *      word 0: segment limit (0-15)
     *      word 1: base address low
     *      word 2: base address high (0-7), segment type (8-11), descriptor type (12), DPL (13-14), present bit (15)
     *      word 3: used only on 80386 and up (should be set to zero for upward compatibility)
     *
     * See X86.DESC for offset and bit definitions.
     *
     * IDT descriptor entries are handled separately by loadIDT(), which is mapped to loadIDTReal() or loadIDTProt().
     *
     * @this {Segx86}
     * @param {number} sel
     * @param {boolean} [fProbe]
     * @returns {number} base address of selected segment, or X86.ADDR_INVALID if error
     */
    loadProt(sel, fProbe)
    {
        let addrDT;
        let addrDTLimit;
        let cpu = this.cpu;

        /**
         * Some instructions (eg, CALLF) load a 32-bit value for the selector, while others (eg, LDS) do not;
         * however, in ALL cases, only the low 16 bits are significant.
         */
        sel &= 0xffff;

        if (!(sel & X86.SEL.LDT)) {
            addrDT = cpu.addrGDT;
            addrDTLimit = cpu.addrGDTLimit;
        } else {
            addrDT = cpu.segLDT.base;
            addrDTLimit = (addrDT + cpu.segLDT.limit)|0;
        }
        /**
         * The ROM BIOS POST executes some test code in protected-mode without properly initializing the LDT,
         * which has no bearing on the ROM's own code, because it never loads any LDT selectors, but if at the same
         * time our Debugger attempts to validate a selector in one of its breakpoints, that could cause some grief.
         *
         * Fortunately, the Debugger now has its own interface, probeDesc(), so that should no longer be a concern.
         */
        if (addrDT) {
            let addrDesc = (addrDT + (sel & X86.SEL.MASK))|0;
            if ((addrDTLimit - addrDesc)|0 >= 7) {
                /**
                 * TODO: This is the first of many steps toward accurately counting cycles in protected mode;
                 * I simply noted that "POP segreg" takes 5 cycles in real mode and 20 in protected mode, so I'm
                 * starting with a 15-cycle difference.  Obviously the difference will vary with the instruction,
                 * and will be much greater whenever the load fails.
                 */
                cpu.nStepCycles -= 15;
                return this.loadDesc8(addrDesc, sel, fProbe);
            }
            if (this.id < Segx86.ID.VER) {
                X86.helpFault.call(cpu, fProbe && this.id == Segx86.ID.STACK? X86.EXCEPTION.TS_FAULT : X86.EXCEPTION.GP_FAULT, sel & X86.ERRCODE.SELMASK);
            }
        }
        return X86.ADDR_INVALID;
    }

    /**
     * loadIDTReal(nIDT, nBytes)
     *
     * @this {Segx86}
     * @param {number} nIDT
     * @param {number} [nBytes]
     * @returns {number} address from selected vector
     */
    loadIDTReal(nIDT, nBytes = 0)
    {
        let cpu = this.cpu;
        /**
         * NOTE: The COMPAQ DeskPro 386 ROM loads the IDTR for the real-mode IDT with a limit of 0xffff instead
         * of the normal 0x3ff.  A limit higher than 0x3ff is OK, since all real-mode IDT entries are 4 bytes, and
         * there's no way to issue an interrupt with a vector > 0xff.  Just something to be aware of.
         */
        cpu.assert(nIDT >= 0 && nIDT < 256 && !cpu.addrIDT && cpu.addrIDTLimit >= 0x3ff);

        if (DEBUGGER && cpu.dbg) {
            if (cpu.dbg.checkVectorBP(nIDT, nBytes, false)) {
                return X86.ADDR_INVALID;
            }
        }

        /**
         * Intel documentation for INT/INTO under "REAL ADDRESS MODE EXCEPTIONS" says:
         *
         *      "[T]he 80286 will shut down if the SP = 1, 3, or 5 before executing the INT or INTO instruction--due to lack of stack space"
         *
         * TODO: Verify that 80286 real-mode actually enforces the above.  See http://www.pcjs.org/pubs/pc/reference/intel/80286/progref/#page-260
         */
        let addrIDT = cpu.addrIDT + (nIDT << 2);
        let off = cpu.getShort(addrIDT);
        cpu.regPS &= ~(X86.PS.TF | X86.PS.IF);
        return (this.load(cpu.getShort(addrIDT + 2)) + off)|0;
    }

    /**
     * loadIDTProt(nIDT, nBytes)
     *
     * @this {Segx86}
     * @param {number} nIDT
     * @param {number} [nBytes]
     * @returns {number} address from selected vector, or X86.ADDR_INVALID if error
     */
    loadIDTProt(nIDT, nBytes = 0)
    {
        let cpu = this.cpu;
        cpu.assert(nIDT >= 0 && nIDT < 256);

        if (DEBUGGER && cpu.dbg) {
            if (cpu.dbg.checkVectorBP(nIDT, nBytes, true)) {
                return X86.ADDR_INVALID;
            }
        }

        let offIDT = nIDT << 3;
        let addrDesc = (cpu.addrIDT + offIDT)|0;
        if (((cpu.addrIDTLimit - addrDesc)|0) >= 7) {
            this.fCall = true;
            let addr = this.loadDesc8(addrDesc, offIDT);
            if (addr !== X86.ADDR_INVALID) {
                addr += this.offIP;
            }
            return addr;
        }
        X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, offIDT | X86.ERRCODE.IDT);
        return X86.ADDR_INVALID;
    }

    /**
     * checkReadWriteNone(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address
     */
    checkReadWriteNone(off, cb)
    {
        return (this.base + off)|0;
    }

    /**
     * checkReadWriteReal(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address
     */
    checkReadWriteReal(off, cb)
    {
        /**
         * Since off could be a 32-bit value with the sign bit (bit 31) set, we must convert
         * it to an unsigned value using ">>>"; offMax was already converted at segment load time.
         */
        if ((off >>> 0) + cb > this.offMax) {
            if (this.cpu.model <= X86.MODEL_8088) {
                this.cpu.opFlags |= X86.OPFLAG.WRAP;
            } else {
                X86.helpFault.call(this.cpu, X86.EXCEPTION.GP_FAULT);
            }
        }
        return (this.base + off)|0;
    }

    /**
     * checkReadProt(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, or X86.ADDR_INVALID if not
     */
    checkReadProt(off, cb)
    {
        /**
         * Since off could be a 32-bit value with the sign bit (bit 31) set, we must convert
         * it to an unsigned value using ">>>"; offMax was already converted at segment load time.
         */
        if ((off >>> 0) + cb <= this.offMax) {
            return (this.base + off)|0;
        }
        return this.checkReadProtDisallowed(off, cb);
    }

    /**
     * checkReadProtDown(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, X86.ADDR_INVALID if not
     */
    checkReadProtDown(off, cb)
    {
        /**
         * Since off could be a 32-bit value with the sign bit (bit 31) set, we must convert
         * it to an unsigned value using ">>>"; offMax was already converted at segment load time.
         */
        if ((off >>> 0) + cb > this.offMax) {
            return (this.base + off)|0;
        }
        return this.checkReadProtDisallowed(off, cb);
    }

    /**
     * checkReadProtDisallowed(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, X86.ADDR_INVALID if not
     */
    checkReadProtDisallowed(off, cb)
    {
        X86.helpFault.call(this.cpu, X86.EXCEPTION.GP_FAULT, 0);
        return X86.ADDR_INVALID;
    }

    /**
     * checkWriteProt(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, X86.ADDR_INVALID if not
     */
    checkWriteProt(off, cb)
    {
        /**
         * Since off could be a 32-bit value with the sign bit (bit 31) set, we must convert
         * it to an unsigned value using ">>>"; offMax was already converted at segment load time.
         */
        if ((off >>> 0) + cb <= this.offMax) {
            return (this.base + off)|0;
        }
        return this.checkWriteProtDisallowed(off, cb);
    }

    /**
     * checkWriteProtDown(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, X86.ADDR_INVALID if not
     */
    checkWriteProtDown(off, cb)
    {
        /**
         * Since off could be a 32-bit value with the sign bit (bit 31) set, we must convert
         * it to an unsigned value using ">>>"; offMax was already converted at segment load time.
         */
        if ((off >>> 0) + cb > this.offMax) {
            return (this.base + off)|0;
        }
        return this.checkWriteProtDisallowed(off, cb);
    }

    /**
     * checkWriteProtDisallowed(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, X86.ADDR_INVALID if not
     */
    checkWriteProtDisallowed(off, cb)
    {
        X86.helpFault.call(this.cpu, X86.EXCEPTION.GP_FAULT, 0);
        return X86.ADDR_INVALID;
    }

    /**
     * checkReadDebugger(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, or X86.ADDR_INVALID if error
     */
    checkReadDebugger(off, cb)
    {
        /**
         * The Debugger doesn't have separate "check" interfaces for real and protected mode,
         * since it's not performance-critical.  If addrDesc is invalid, then we assume real mode.
         *
         * TODO: This doesn't actually check the segment for readability.
         */
        if (DEBUGGER) {
            if (this.addrDesc === X86.ADDR_INVALID ||
                this.fExpDown && (off >>> 0) + cb > this.offMax ||
                !this.fExpDown && (off >>> 0) + cb <= this.offMax) {
                return (this.base + off)|0;
            }
        }
        return X86.ADDR_INVALID;
    }

    /**
     * checkWriteDebugger(off, cb)
     *
     * @this {Segx86}
     * @param {number} off is a segment-relative offset
     * @param {number} cb is number of bytes to check (1, 2 or 4)
     * @returns {number} corresponding linear address if valid, or X86.ADDR_INVALID if error
     */
    checkWriteDebugger(off, cb)
    {
        /**
         * The Debugger doesn't have separate "check" interfaces for real and protected mode,
         * since it's not performance-critical.  If addrDesc is invalid, then we assume real mode.
         *
         * TODO: This doesn't actually check the segment for writability.
         */
        if (DEBUGGER) {
            if (this.addrDesc === X86.ADDR_INVALID ||
                this.fExpDown && (off >>> 0) + cb > this.offMax ||
                !this.fExpDown && (off >>> 0) + cb <= this.offMax) {
                return (this.base + off)|0;
            }
        }
        return X86.ADDR_INVALID;
    }

    /**
     * loadDesc(sel, acc, base, limit)
     *
     * Used to manually load a segment register from the data provided (see LOADALL386).
     *
     * @this {Segx86}
     * @param {number} sel
     * @param {number} acc
     * @param {number} base
     * @param {number} limit
     */
    loadDesc(sel, acc, base, limit)
    {
        this.sel = sel;
        this.base = base;
        this.limit = limit;
        this.offMax = (limit >>> 0) + 1;
        this.acc = acc;
        this.type = (acc & X86.DESC.ACC.TYPE.MASK);
        this.ext = (acc >> 16) & (X86.DESC.EXT.BIG | X86.DESC.EXT.LIMITPAGES);

        let addrDT = (sel & X86.SEL.LDT)? this.cpu.segLDT.base : this.cpu.addrGDT;
        this.addrDesc = (addrDT + (sel & X86.SEL.MASK))|0;

        /**
         * NOTE: This code must take care to leave the mode of the TSS, LDT, and VER segment registers alone;
         * in particular, we must not allow a real-mode LOADALL to modify their mode, because the rest of PCx86
         * assumes that their mode will never change (they were allocated with fProt set to true).
         */
        if (this.id < Segx86.ID.TSS) this.updateMode(true);

        if (DEBUG) this.messageSeg(sel, base, limit, this.type);
    }

    /**
     * loadDesc6(addrDesc, sel)
     *
     * Used to load a protected-mode selector that refers to a 6-byte "descriptor cache" entry (see LOADALL286):
     *
     *      word 0: base address low
     *      word 1: base address high (0-7), segment type (8-11), descriptor type (12), DPL (13-14), present bit (15)
     *      word 2: segment limit (0-15)
     *
     * @this {Segx86}
     * @param {number} addrDesc is the descriptor address
     * @param {number} sel is the associated selector
     * @returns {number} base address of selected segment
     */
    loadDesc6(addrDesc, sel)
    {
        let cpu = this.cpu;
        let acc = cpu.getShort(addrDesc + 2);
        let base = cpu.getShort(addrDesc) | ((acc & 0xff) << 16);
        let limit = cpu.getShort(addrDesc + 4);

        this.sel = sel;
        this.base = base;
        this.limit = limit;
        this.offMax = (limit >>> 0) + 1;
        this.acc = acc;
        this.type = (acc & X86.DESC.ACC.TYPE.MASK);
        this.ext = 0;
        this.addrDesc = addrDesc;

        /**
         * NOTE: This code must take care to leave the mode of the TSS, LDT, and VER segment registers alone;
         * in particular, we must not allow a real-mode LOADALL to modify their mode, because the rest of PCx86
         * assumes that their mode will never change (they were allocated with fProt set to true).
         */
        if (this.id < Segx86.ID.TSS) this.updateMode(true);

        if (DEBUG) this.messageSeg(sel, base, limit, this.type);

        return base;
    }

    /**
     * loadDesc8(addrDesc, sel, fProbe)
     *
     * Used to load a protected-mode selector that refers to an 8-byte "descriptor table" (GDT, LDT, IDT) entry:
     *
     *      word 0: segment limit (0-15)
     *      word 1: base address low
     *      word 2: base address high (0-7), segment type (8-11), descriptor type (12), DPL (13-14), present bit (15)
     *      word 3: used only on 80386 and up (should be set to zero for upward compatibility)
     *
     * See X86.DESC for offset and bit definitions.
     *
     * When fProbe is set, we do NOT modify the public properties of the Segx86 object (see class Segx86 above).
     * We will generate a fault if any of the usual error conditions are detected (and return X86.ADDR_INVALID), but
     * otherwise, we merely stash all the descriptor values it reads in the Segx86's private "probe" object.
     *
     * Probed loads allow us to deal with complex segment load operations (ie, those involving an implied stack-switch
     * or task-switch), by allowing us to probe all the new selectors and generate the necessary faults before modifying
     * any segment registers; if all the probes succeed, then the original load can proceed.
     *
     * The next non-probed load of a probed selector will move those probed descriptor values into the Segx86 object,
     * saving us from having to reload and reparse the descriptor.  However, if a different selector is loaded between
     * the probed and non-probed loads, the probed data is tossed.
     *
     * @this {Segx86}
     * @param {number} addrDesc is the descriptor address
     * @param {number} sel is the associated selector, or nIDT*8 if IDT descriptor
     * @param {boolean} [fProbe] (true if this is a probe)
     * @returns {number} base address of selected segment, or X86.ADDR_INVALID if error
     */
    loadDesc8(addrDesc, sel, fProbe)
    {
        let cpu = this.cpu;

        /**
         * If the previous load was a successful "probed" load of the same segment, then we simply load
         * up all the cached descriptor values from the probe and return.
         */
        if (!fProbe && sel === this.probe.sel) {
            this.sel = sel;
            this.base = this.probe.base;
            this.limit = this.probe.limit;
            this.offMax = (this.probe.limit >>> 0) + 1;
            this.acc = this.probe.acc;
            this.type = this.probe.type;
            this.ext = this.probe.ext;
            this.addrDesc = this.probe.addrDesc;
            this.probe.sel = -1;
            this.updateMode(true, true, false);
            return this.base;
        }

        /**
         * Any other load, probed or otherwise, should "flush" the probe cache, by setting probe.sel to -1.
         */
        this.probe.sel = -1;

        /**
         * Load the descriptor from memory.
         */
        let limit = cpu.getShort(addrDesc + X86.DESC.LIMIT.OFFSET);
        let limitOrig;
        let acc = cpu.getShort(addrDesc + X86.DESC.ACC.OFFSET);
        let type = (acc & X86.DESC.ACC.TYPE.MASK);
        let base = cpu.getShort(addrDesc + X86.DESC.BASE.OFFSET) | ((acc & X86.DESC.ACC.BASE1623) << 16);
        let ext = cpu.getShort(addrDesc + X86.DESC.EXT.OFFSET);
        let selMasked = sel & X86.SEL.MASK;

        if (I386 && cpu.model >= X86.MODEL_80386) {
            limitOrig = limit;
            base |= (ext & X86.DESC.EXT.BASE2431) << 16;
            limit |= (ext & X86.DESC.EXT.LIMIT1619) << 16;
            if (ext & X86.DESC.EXT.LIMITPAGES) limit = (limit << 12) | 0xfff;
        }

        let rpl, dpl, fCall, typeTSS;
        let sizeGate, selCode, cplOld, cplNew, fIDT;
        let addrTSS, offSP, lenSP, regSPPrev, regSSPrev, regPSClear, regSP;

        switch (this.id) {

        case Segx86.ID.CODE:

            /**
             * NOTE: Since we are Segx86.ID.CODE, we can use this.cpl instead of the more convoluted
             * this.cpu.segCS.cpl.
             */
            fCall = this.fCall;
            this.fStackSwitch = false;

            /**
             * This special bit of code is currently used only by the Debugger, when it needs to inject
             * a 16:32 callback address into the machine that it can intercept calls to.  We call these
             * "call break" addresses, because they're essentially breakpoints that only operate when
             * a particular address is called; specifically, an address with selector 0x0001 and an offset
             * that forms a (1-based) index into the aCallBreaks function table.
             *
             * In protected-mode, any null selector, including 0x0001 (null with an RPL of 1), is
             * an invalid CS selector, and while it's not inconceivable that an operating system might
             * use such a selector for some strange purpose, I've not seen such an operating system.
             * And in any case, those operating systems are not likely to trigger the Debugger's call to
             * addCallBreak(), so no call breaks will be generated, and this code will never execute.
             *
             * TODO: If we ever need this to be mode-independent, it can be moved somewhere where it will
             * trigger for both real and protected-mode code segment loads, because CALLBREAK_SEL (0x0001)
             * is also a very unlikely real-mode CS value (but again, not inconceivable).  I think this is
             * a reasonable solution, and it's likely the best we can do without injecting code into the
             * machine that we could address -- and even then, it would not be a mode-independent address.
             */
            if (fCall && sel == Segx86.CALLBREAK_SEL && this.aCallBreaks.length) {
                let iBreak = this.offIP - 1;
                let fnCallBreak = this.aCallBreaks[iBreak];
                cpu.assert(fnCallBreak);
                if (fnCallBreak && !fnCallBreak()) {
                    return X86.ADDR_INVALID;
                }
            }

            rpl = sel & X86.SEL.RPL;
            dpl = (acc & X86.DESC.ACC.DPL.MASK) >> X86.DESC.ACC.DPL.SHIFT;
            sizeGate = -1;

            if (!selMasked) {
                /**
                 * selMasked is really the descriptor table offset, and a zero offset is fine for the IDT,
                 * and it's probably fine for the LDT, but it's definitely NOT fine for the GDT, because
                 * that's a reference to the null selector.  A null selector is allowed in DS, ES, FS, or GS,
                 * but never CS or SS.  Since there's no parameter that tells us which table we're using,
                 * we have to check manually.
                 *
                 * If we ARE attempting to load a null selector from the GDT, then we zero type, ensuring that
                 * sizeGate will remain invalid (-1), triggering a GP_FAULT below.
                 */
                if (addrDesc >= cpu.addrGDT && addrDesc < cpu.addrGDTLimit) type = 0;
            }

            if (type >= X86.DESC.ACC.TYPE.CODE_EXECONLY) {
                /**
                 * There are three basic ways to load a new code segment (ignoring special cases like LOADALL):
                 *
                 *      1) CALLF (fCall is true)
                 *      2) RETF (fCall is false)
                 *      3) JMPF (fCall is undefined)
                 *
                 * Also, note that if fProbe is set, we're being called on behalf of a gate, in which case the
                 * gate logic will examine the relative privileges.
                 */
                if (fProbe != null) {
                    sizeGate = 0;
                }
                else if (fCall !== false) {
                    /**
                     * We deal with CALLF/JMPF first.  We've already ascertained that the selector type is a
                     * segment, not a gate, so the next important distinction is CONFORMING vs. non-CONFORMING.
                     *
                     * For a CONFORMING target, we must verify that its DPL <= CPL.  For a non-CONFORMING target,
                     * we must verify that RPL <= CPL and DPL == CPL.  Assuming both those tests pass, we must also
                     * ensure that the current CPL is recorded as the new RPL (that is, the RPL bits of sel must be
                     * updated).
                     */
                    if (type & X86.DESC.ACC.TYPE.CONFORMING) {
                        if (dpl <= this.cpl) {
                            sizeGate = 0;
                        }
                    } else {
                        if (rpl <= this.cpl && dpl == this.cpl) {
                            sizeGate = 0;
                        }
                    }
                    if (!sizeGate) {
                        sel = (sel & ~X86.SEL.RPL) | (this.cpl & X86.SEL.RPL);
                    }
                }
                else {
                    /**
                     * We deal with RETF next.  For starters, we must verify that RPL >= CPL.  Moreover, if
                     * RPL > CPL, then we have a privilege level change that requires a stack switch, assuming
                     * the stack selector is acceptable.
                     */
                    if (rpl >= this.cpl) {
                        if (rpl > this.cpl) {
                            /**
                             * TODO: See if we can defer calling setSS() and setSP() until AFTER the final checks
                             * below, because if, for example, the new CS is not PRESENT, we must generate a fault,
                             * which in turn must restore the original stack, which means helpRETF() must snapshot
                             * the stack registers.
                             */
                            regSP = cpu.popWord();
                            cpu.setSS(cpu.popWord(), true);
                            cpu.setSP(regSP);
                            this.fStackSwitch = true;
                        }
                        sizeGate = 0;
                    }
                }
            }
            else if (type == X86.DESC.ACC.TYPE.TSS286 || type == X86.DESC.ACC.TYPE.TSS386) {
                if (!this.switchTSS(sel, fCall)) {
                    return X86.ADDR_INVALID;
                }
                return this.base;
            }
            else if (type == X86.DESC.ACC.TYPE.GATE_CALL) {
                sizeGate = 2;
                regPSClear = 0;
                if (rpl < this.cpl) rpl = this.cpl;     // set RPL to max(RPL,CPL) for call gates
            }
            else if (type == X86.DESC.ACC.TYPE.GATE386_CALL) {
                sizeGate = 4;
                regPSClear = 0;
                if (rpl < this.cpl) rpl = this.cpl;     // set RPL to max(RPL,CPL) for call gates
            }
            else if (type == X86.DESC.ACC.TYPE.GATE286_INT) {
                sizeGate = 2;
                regPSClear = (X86.PS.VM | X86.PS.NT | X86.PS.TF | X86.PS.IF);
                cpu.assert(!(acc & 0x1f));
            }
            else if (type == X86.DESC.ACC.TYPE.GATE386_INT) {
                sizeGate = 4;
                regPSClear = (X86.PS.VM | X86.PS.NT | X86.PS.TF | X86.PS.IF);
                cpu.assert(!(acc & 0x1f));
            }
            else if (type == X86.DESC.ACC.TYPE.GATE286_TRAP) {
                sizeGate = 2;
                regPSClear = (X86.PS.VM | X86.PS.NT | X86.PS.TF);
                cpu.assert(!(acc & 0x1f));
            }
            else if (type == X86.DESC.ACC.TYPE.GATE386_TRAP) {
                sizeGate = 4;
                regPSClear = (X86.PS.VM | X86.PS.NT | X86.PS.TF);
                cpu.assert(!(acc & 0x1f));
            }
            else if (type == X86.DESC.ACC.TYPE.GATE_TASK) {
                if (!this.switchTSS(base & 0xffff, fCall)) {
                    return X86.ADDR_INVALID;
                }
                return this.base;
            }

            if (sizeGate > 0 && !(acc & X86.DESC.ACC.PRESENT)) sizeGate = 0;

            if (sizeGate > 0) {
                /**
                 * Note that since GATE_INT/GATE_TRAP descriptors should appear in the IDT only, that means sel
                 * will actually be nIDT * 8, which means the rpl will always be zero; additionally, the nWords
                 * portion of ACC should always be zero, but that's really dependent on the descriptor being properly
                 * set (which we assert above).
                 */
                cplOld = this.cpl;
                fIDT = (addrDesc == cpu.addrIDT + sel);

                /**
                 * Software interrupts (where fIDT is true and cpu.nFault < 0) require an additional test:
                 * if DPL < CPL, then we must fall into the GP_FAULT code at the end of this case.
                 */
                if (rpl <= dpl && (!fIDT || cpu.nFault >= 0 || cplOld <= dpl))  {

                    /**
                     * For gates, there is no "base" and "limit", but rather "selector" and "offset"; the selector
                     * is located where the first 16 bits of base are normally stored, and the offset comes from the
                     * original limit and ext fields.
                     *
                     * TODO: Verify the PRESENT bit of the gate descriptor, and issue NP_FAULT as appropriate.
                     */
                    selCode = base & 0xffff;
                    if (I386 && (type & X86.DESC.ACC.TYPE.NONSEG_386)) {
                        limit = limitOrig | (ext << 16);
                    }

                    let selStack = 0, offStack = 0;
                    cplNew = (selCode & X86.SEL.RPL);

                    /**
                     * If a stack switch is required, we must perform "probed" loads of both the new selCode
                     * and selStack segments, so that if either probe fails, a fault will be generated while the
                     * old code segment is still loaded.
                     */
                    if (cplNew < cplOld) {
                        /**
                         * Intel pseudo-code suggests that selStack should be "probed" before selCode, but it also
                         * implies that we need to have the DPL of selCode in order to select the correct selStack,
                         * so who knows...?
                         */
                        if (this.loadProt(selCode, true) === X86.ADDR_INVALID) {
                            return X86.ADDR_INVALID;
                        }
                        /**
                         * Intel pseudo-code suggests that the TSS stack pointer offset is based on the DPL of selCode
                         * rather than the RPL of selCode.  TODO: Check for instances where DPL and RPL of selCode differ,
                         * and then figure out which should really be used.
                         */
                        addrTSS = cpu.segTSS.base;
                        if (!I386 || !(cpu.segTSS.type & X86.DESC.ACC.TYPE.NONSEG_386)) {
                            offSP = (cplNew << 2) + X86.TSS286.CPL0_SP;
                            lenSP = 2;
                        } else {
                            offSP = (cplNew << 3) + X86.TSS386.CPL0_ESP;
                            lenSP = 4;
                        }
                        selStack = cpu.getShort(addrTSS + offSP + lenSP);

                        /**
                         * Intel pseudo-code indicates at least FIVE discrete selStack tests that could trigger
                         * a TS_FAULT at this point:
                         *
                         *      1) Selector must not be null else #TS(O)
                         *      2) Selector index must be within its descriptor table limits else #TS (SS selector)
                         *      3) Selector's RPL must equal DPL of code segment else #TS (SS selector)
                         *      4) Stack segment DPL must equal DPL of code segment else #TS (SS selector)
                         *      5) Descriptor must indicate writable data segment else #TS (SS selector)
                         */
                        if (!selStack) {
                            X86.helpFault.call(cpu, X86.EXCEPTION.TS_FAULT, selStack);
                            return X86.ADDR_INVALID;
                        }

                        if (cpu.segSS.loadProt(selStack, true) === X86.ADDR_INVALID) {
                            return X86.ADDR_INVALID;
                        }
                        /**
                         * Both probes succeeded, so we can proceed with "normal" loads for both selCode and
                         * selStack (which should automatically use the values cached by the "probed" loads above).
                         */
                        offStack = (lenSP == 2)? cpu.getShort(addrTSS + offSP) : cpu.getLong(addrTSS + offSP);
                    }

                    /**
                     * Now that we're past all the probes, it should be safe to clear all flags that need clearing.
                     */
                    let regPS = cpu.regPS;
                    cpu.regPS &= ~regPSClear;
                    if (regPS & X86.PS.VM) {
                        cpu.setProtMode(true, false);
                    }

                    /**
                     * TODO: Consider whether we can skip this loadProt() call if this.sel already contains selCode
                     * (and the previous mode matches, which might require we cache the mode in the Segx86 object, too).
                     */
                    if (this.loadProt(selCode, false) === X86.ADDR_INVALID) {
                        return X86.ADDR_INVALID;
                    }

                    cpu.setDataSize(sizeGate);

                    this.offIP = limit;

                    // cpu.assert(this.cpl == cplNew);

                    if (cplNew < cplOld) {

                        if (fCall !== true) {
                            cpu.assert(false);
                            return X86.ADDR_INVALID;
                        }

                        regSP = cpu.getSP();
                        let i = 0, nWords = (acc & 0x1f);
                        while (nWords--) {
                            this.awParms[i++] = cpu.getSOWord(cpu.segSS, regSP);
                            regSP += 2;
                        }

                        regSSPrev = cpu.getSS();
                        regSPPrev = cpu.getSP();

                        cpu.setSS(selStack, true);
                        cpu.setSP(offStack);

                        if (regPS & X86.PS.VM) {
                            /**
                             * Frames coming from V86-mode ALWAYS contain 32-bit values, and look like this:
                             *
                             *      low:    EIP
                             *              CS (upper 16 bits undefined)
                             *              EFLAGS
                             *              ESP
                             *              SS (upper 16 bits undefined)
                             *              ES (upper 16 bits undefined)
                             *              DS (upper 16 bits undefined)
                             *              FS (upper 16 bits undefined)
                             *      high:   GS (upper 16 bits undefined)
                             *
                             * Our caller (eg, helpINT()) will take care of pushing the final bits (EFLAGS, CS, and EIP).
                             */
                            cpu.setDataSize(4);
                            cpu.assert(I386 && cpu.model >= X86.MODEL_80386);
                            cpu.pushData(cpu.segGS.sel, 4, 2);
                            cpu.setGS(0);
                            cpu.pushData(cpu.segFS.sel, 4, 2);
                            cpu.setFS(0);
                            cpu.pushData(cpu.segDS.sel, 4, 2);
                            cpu.setDS(0);
                            cpu.pushData(cpu.segES.sel, 4, 2);
                            cpu.setES(0);
                        }
                        cpu.pushData(regSSPrev, cpu.sizeData, 2);
                        cpu.pushWord(regSPPrev);
                        while (i) cpu.pushWord(this.awParms[--i]);
                        this.fStackSwitch = true;
                    }
                    return this.base;
                }
            }

            if (sizeGate != 0) {
                X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, (sel & X86.ERRCODE.SELMASK) | (fIDT? X86.ERRCODE.IDT : 0));
                return X86.ADDR_INVALID;
            }

            if (!(acc & X86.DESC.ACC.PRESENT)) {
                X86.helpFault.call(cpu, X86.EXCEPTION.NP_FAULT, (sel & X86.ERRCODE.SELMASK) | (fIDT? X86.ERRCODE.IDT : 0));
                return X86.ADDR_INVALID;
            }
            break;

        case Segx86.ID.DATA:
            if (selMasked) {
                /**
                 * OS/2 1.0 faults on segments with "empty descriptors" multiple times during boot; for example:
                 *
                 *      Fault 0x0B (0x002C) on opcode 0x8E at 3190:3A05 (%112625)
                 *      AX=0000 BX=0970 CX=0300 DX=0300 SP=0ABE BP=0ABA SI=0000 DI=001A
                 *      SS=0038[175CE0,0B5F] DS=19C0[177300,2C5F] ES=001F[1743A0,07FF] A20=ON
                 *      CS=3190[10EC20,B89F] LD=0028[174BC0,003F] GD=[11A4E0,490F] ID=[11F61A,03FF]
                 *      TR=0010 MS=0000FFF3 PS=3256 V0 D0 I1 T0 S0 Z1 A1 P1 C0
                 *      3190:3A05 8E4604          MOV      ES,[BP+04]
                 *      ## dw ss:bp+4 l1
                 *      0038:0ABE  002F  19C0  0000  067C  07FC  0AD2  0010  C420   /.....|....... .
                 *      ## ds 2f
                 *      dumpDesc(0x002F): %174BE8
                 *      base=000000 limit=0000 type=0x00 (undefined) ext=0x0000 dpl=0x00
                 *
                 * And Windows 95 Setup, during the "Analyzing Your Computer" phase, will fault on an attempt to load
                 * a GDT selector of type LDT (why it does this is a mystery I've not yet investigated):
                 *
                 *      Fault 0x0D (0x26F0) on opcode 0x8E @039F:039B (%199E9B)
                 *      EAX=0000149F EBX=00000100 ECX=000026F3 EDX=0020149F
                 *      ESP=0000AA34 EBP=0000AA3C ESI=000026E7 EDI=00000080
                 *      SS=155F[002AC9D0,C0BF] DS=149F[0031B470,9B1F] ES=0237[000C0000,FFFF]
                 *      CS=039F[00199B00,2ABF] FS=0000[00000000,0000] GS=0000[00000000,0000]
                 *      LD=0038[00FA4C50,FFEF] GD=[00FA0800,011F] ID=[00FA0000,07FF] TR=0088 A20=ON
                 *      CR0=0000FFF1 CR2=00000000 CR3=00000000 PS=00003246 V0 D0 I1 T0 S0 Z1 A0 P1 C0
                 *      039F:039B 8EC1            MOV      ES,CX
                 *      ## ds cx
                 *      dumpDesc(0x26F3): %00FA2EF0
                 *      base=0006C726 limit=0000 type=0x02 (ldt,not present) ext=0x0000 dpl=0x00
                 *
                 * In both cases, the segment type is not valid for the target segment register *and* the PRESENT bit
                 * is clear.  OS/2 doesn't seem to care whether I report an NP_FAULT or GP_FAULT, but Windows 95 definitely
                 * cares: it will resolve the fault only if a GP_FAULT is reported.  And Intel's 80386 Programmers Reference
                 * implies that, yes, GP_FAULT checks are supposed to be performed *before* NP_FAULT checks.
                 */
                if (type < X86.DESC.ACC.TYPE.SEG || (type & (X86.DESC.ACC.TYPE.CODE | X86.DESC.ACC.TYPE.READABLE)) == X86.DESC.ACC.TYPE.CODE) {
                    X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, sel & X86.ERRCODE.SELMASK);
                    return X86.ADDR_INVALID;
                }
                /**
                 * TODO: This would be a good place to perform some additional access rights checks, too.
                 */
                if (!(acc & X86.DESC.ACC.PRESENT)) {
                    X86.helpFault.call(cpu, X86.EXCEPTION.NP_FAULT, sel & X86.ERRCODE.SELMASK);
                    return X86.ADDR_INVALID;
                }
            }
            break;

        case Segx86.ID.STACK:
            if (!selMasked || type < X86.DESC.ACC.TYPE.SEG || (type & (X86.DESC.ACC.TYPE.CODE | X86.DESC.ACC.TYPE.WRITABLE)) != X86.DESC.ACC.TYPE.WRITABLE) {
                X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, sel & X86.ERRCODE.SELMASK);
                return X86.ADDR_INVALID;
            }
            if (!(acc & X86.DESC.ACC.PRESENT)) {
                X86.helpFault.call(cpu, X86.EXCEPTION.SS_FAULT, sel & X86.ERRCODE.SELMASK);
                return X86.ADDR_INVALID;
            }
            break;

        case Segx86.ID.TSS:
            typeTSS = type & ~X86.DESC.ACC.TYPE.TSS_BUSY;
            if (!selMasked || typeTSS != X86.DESC.ACC.TYPE.TSS286 && typeTSS != X86.DESC.ACC.TYPE.TSS386) {
                X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, sel & X86.ERRCODE.SELMASK);
                return X86.ADDR_INVALID;
            }
            /**
             * For more efficient IOPM lookups, we cache the starting linear address in segTSS.addrIOPM, and the
             * last valid address in segTSS.addrIOPMLimit.
             */
            if (typeTSS == X86.DESC.ACC.TYPE.TSS386) {
                this.addrIOPM = (base + cpu.getShort(base + X86.TSS386.TASK_IOPM + 2)) >>> 0;
                this.addrIOPMLimit = (base + this.limit) >>> 0;
            }
            break;

        case Segx86.ID.VER:
            /**
             * For LSL, we must support any descriptor marked X86.DESC.ACC.TYPE.SEG, as well as TSS and LDT descriptors.
             */
            if (!(type & X86.DESC.ACC.TYPE.SEG) && type > X86.DESC.ACC.TYPE.TSS286_BUSY && type != X86.DESC.ACC.TYPE.TSS386 && type != X86.DESC.ACC.TYPE.TSS386_BUSY) {
                return X86.ADDR_INVALID;
            }
            break;

        default:
            /**
             * The only other cases are:
              *
              *     Segx86.ID.NULL, Segx86.ID.LDT, and Segx86.ID.DBG
              *
              * which correspond to segNULL, segLDT and segDebugger; however, segLDT is the only one that might require further validation (TODO: Investigate).
             */
            break;
        }

        if (fProbe) {
            this.probe.sel = sel;
            this.probe.base = base;
            this.probe.limit = limit;
            this.probe.acc = acc;
            this.probe.type = type;
            this.probe.ext = ext;
            this.probe.addrDesc = addrDesc;
        } else {
            this.sel = sel;
            this.base = base;
            this.limit = limit;
            this.offMax = (limit >>> 0) + 1;
            this.acc = acc;
            this.type = type;
            this.ext = ext;
            this.addrDesc = addrDesc;
            /**
             * A quick recap of what updateMode(fLoad=true, fProt=true, fV86=false) actually updates:
             *
             *      cpl
             *      dpl
             *      dataSize
             *      dataMask
             *      addrSize
             *      addrMask
             *      fExpDown
             *      load()
             *      loadIDT()
             *      checkRead()
             *      checkWrite()
             */
            this.updateMode(true, true, false);
        }

        if (DEBUG) this.messageSeg(sel, base, limit, type, ext);

        return base;
    }

    /**
     * switchTSS(selNew, fNest)
     *
     * Implements TSS (Task State Segment) task switching.
     *
     * NOTES: This typically occurs during double-fault processing, because the IDT entry for DF_FAULT normally
     * contains a task gate.  Interestingly, if we force a GP_FAULT to occur at a sufficiently early point in the
     * OS/2 1.0 initialization code, OS/2 does a nice job of displaying the GP fault and then shutting down:
     *
     *      0090:067B FB            STI
     *      0090:067C EBFD          JMP      067B
     *
     * but it may not have yet reprogrammed the master PIC to re-vector hardware interrupts to IDT entries 0x50-0x57,
     * so when the next timer interrupt (IRQ 0) occurs, it vectors through IDT entry 0x08, which is the DF_FAULT
     * vector. A spurious double-fault is generated, and a clean shutdown turns into a messy crash.
     *
     * Of course, that all could have been avoided if IBM had heeded Intel's advice and not used Intel-reserved IDT
     * entries for PC interrupts.
     *
     * TODO: Add TSS validity checks and appropriate generation of TS_FAULT exceptions; the only rudimentary checks
     * we currently perform are of the GP_FAULT variety.
     *
     * @this {Segx86}
     * @param {number} selNew
     * @param {boolean|null} [fNest] is true if nesting, false if un-nesting, null if neither
     * @returns {boolean} true if successful, false if error
     */
    switchTSS(selNew, fNest)
    {
        let cpu = this.cpu;
        cpu.assert(this === cpu.segCS);

        let cplOld = this.cpl;
        let selOld = cpu.segTSS.sel;
        let addrOld = cpu.segTSS.base;

        if (!fNest) {
            /**
             * TODO: Verify that it is (always) correct to require that the BUSY bit be currently set.
             */
            if (!(cpu.segTSS.type & X86.DESC.ACC.TYPE.TSS_BUSY)) {
                X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, selNew & X86.ERRCODE.SELMASK);
                return false;
            }
            /**
             * TODO: Should I be more paranoid about writing our cached ACC value back into the descriptor?
             */
            cpu.setShort(cpu.segTSS.addrDesc + X86.DESC.ACC.OFFSET, cpu.segTSS.acc &= ~X86.DESC.ACC.TYPE.TSS_BUSY);
        }

        if (cpu.segTSS.load(selNew) === X86.ADDR_INVALID) {
            return false;
        }

        let addrNew = cpu.segTSS.base;
        if (DEBUG && DEBUGGER && cpu.dbg) {
            cpu.dbg.printf(MESSAGE.TSS, "%s: TR %#06x (%#06x), new TR %#06x (%#06x)\n", fNest? "Task switch" : "Task return", selOld, addrOld, selNew, addrNew);
        }

        if (fNest !== false) {
            if (cpu.segTSS.type & X86.DESC.ACC.TYPE.TSS_BUSY) {
                X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, selNew & X86.ERRCODE.SELMASK);
                return false;
            }
            cpu.setShort(cpu.segTSS.addrDesc + X86.DESC.ACC.OFFSET, cpu.segTSS.acc |= X86.DESC.ACC.TYPE.TSS_BUSY);
        }

        /**
         * Now that we're done checking the TSS_BUSY bit in the TYPE field (which is a subset of the ACC field),
         * sync any changes made above in the ACC field to the TYPE field.
         */
        cpu.segTSS.type = (cpu.segTSS.type & ~X86.DESC.ACC.TYPE.TSS_BUSY) | (cpu.segTSS.acc & X86.DESC.ACC.TYPE.TSS_BUSY);

        /**
         * Update the old TSS
         */
        let offSS;
        let offSP;
        if (cpu.segTSS.type == X86.DESC.ACC.TYPE.TSS286 || cpu.segTSS.type == X86.DESC.ACC.TYPE.TSS286_BUSY) {
            cpu.setShort(addrOld + X86.TSS286.TASK_IP, cpu.getIP());
            cpu.setShort(addrOld + X86.TSS286.TASK_PS, cpu.getPS());
            cpu.setShort(addrOld + X86.TSS286.TASK_AX, cpu.regEAX);
            cpu.setShort(addrOld + X86.TSS286.TASK_CX, cpu.regECX);
            cpu.setShort(addrOld + X86.TSS286.TASK_DX, cpu.regEDX);
            cpu.setShort(addrOld + X86.TSS286.TASK_BX, cpu.regEBX);
            cpu.setShort(addrOld + X86.TSS286.TASK_SP, cpu.getSP());
            cpu.setShort(addrOld + X86.TSS286.TASK_BP, cpu.regEBP);
            cpu.setShort(addrOld + X86.TSS286.TASK_SI, cpu.regESI);
            cpu.setShort(addrOld + X86.TSS286.TASK_DI, cpu.regEDI);
            cpu.setShort(addrOld + X86.TSS286.TASK_ES, cpu.segES.sel);
            cpu.setShort(addrOld + X86.TSS286.TASK_CS, cpu.segCS.sel);
            cpu.setShort(addrOld + X86.TSS286.TASK_SS, cpu.segSS.sel);
            cpu.setShort(addrOld + X86.TSS286.TASK_DS, cpu.segDS.sel);
            /**
             * Reload all registers from the new TSS; it's important to reload the LDTR sooner
             * rather than later, so that as segment registers are reloaded, any LDT selectors will
             * will be located in the correct table.
             */
            cpu.segLDT.load(cpu.getShort(addrNew + X86.TSS286.TASK_LDT));
            cpu.setPS(cpu.getShort(addrNew + X86.TSS286.TASK_PS) | (fNest? X86.PS.NT : 0));
            cpu.assert(!fNest || !!(cpu.regPS & X86.PS.NT));
            cpu.regEAX = cpu.getShort(addrNew + X86.TSS286.TASK_AX);
            cpu.regECX = cpu.getShort(addrNew + X86.TSS286.TASK_CX);
            cpu.regEDX = cpu.getShort(addrNew + X86.TSS286.TASK_DX);
            cpu.regEBX = cpu.getShort(addrNew + X86.TSS286.TASK_BX);
            cpu.regEBP = cpu.getShort(addrNew + X86.TSS286.TASK_BP);
            cpu.regESI = cpu.getShort(addrNew + X86.TSS286.TASK_SI);
            cpu.regEDI = cpu.getShort(addrNew + X86.TSS286.TASK_DI);
            cpu.segES.load(cpu.getShort(addrNew + X86.TSS286.TASK_ES));
            cpu.segDS.load(cpu.getShort(addrNew + X86.TSS286.TASK_DS));
            cpu.setCSIP(cpu.getShort(addrNew + X86.TSS286.TASK_IP), cpu.getShort(addrNew + X86.TSS286.TASK_CS));
            offSS = X86.TSS286.TASK_SS;
            offSP = X86.TSS286.TASK_SP;
            if (this.cpl < cplOld) {
                offSP = (this.cpl << 2) + X86.TSS286.CPL0_SP;
                offSS = offSP + 2;
            }
            cpu.setSS(cpu.getShort(addrNew + offSS), true);
            cpu.setSP(cpu.getShort(addrNew + offSP));
        } else {
            cpu.assert(cpu.segTSS.type == X86.DESC.ACC.TYPE.TSS386 || cpu.segTSS.type == X86.DESC.ACC.TYPE.TSS386_BUSY);
            cpu.setLong(addrOld + X86.TSS386.TASK_CR3, cpu.regCR3);
            cpu.setLong(addrOld + X86.TSS386.TASK_EIP, cpu.getIP());
            cpu.setLong(addrOld + X86.TSS386.TASK_PS,  cpu.getPS());
            cpu.setLong(addrOld + X86.TSS386.TASK_EAX, cpu.regEAX);
            cpu.setLong(addrOld + X86.TSS386.TASK_ECX, cpu.regECX);
            cpu.setLong(addrOld + X86.TSS386.TASK_EDX, cpu.regEDX);
            cpu.setLong(addrOld + X86.TSS386.TASK_EBX, cpu.regEBX);
            cpu.setLong(addrOld + X86.TSS386.TASK_ESP, cpu.getSP());
            cpu.setLong(addrOld + X86.TSS386.TASK_EBP, cpu.regEBP);
            cpu.setLong(addrOld + X86.TSS386.TASK_ESI, cpu.regESI);
            cpu.setLong(addrOld + X86.TSS386.TASK_EDI, cpu.regEDI);
            cpu.setLong(addrOld + X86.TSS386.TASK_ES,  cpu.segES.sel);
            cpu.setLong(addrOld + X86.TSS386.TASK_CS,  cpu.segCS.sel);
            cpu.setLong(addrOld + X86.TSS386.TASK_SS,  cpu.segSS.sel);
            cpu.setLong(addrOld + X86.TSS386.TASK_DS,  cpu.segDS.sel);

            /**
             * segFS and segGS exist only on 80386 machines
             */
            cpu.assert(I386 && cpu.model >= X86.MODEL_80386);
            cpu.setLong(addrOld + X86.TSS386.TASK_FS,  cpu.segFS.sel);
            cpu.setLong(addrOld + X86.TSS386.TASK_GS,  cpu.segGS.sel);

            /**
             * Reload all registers from the new TSS; it's important to reload the LDTR sooner
             * rather than later, so that as segment registers are reloaded, any LDT selectors will
             * will be located in the correct table.
             */
            X86.helpLoadCR3.call(cpu, cpu.getLong(addrNew + X86.TSS386.TASK_CR3));
            cpu.segLDT.load(cpu.getShort(addrNew + X86.TSS386.TASK_LDT));
            cpu.setPS(cpu.getLong(addrNew + X86.TSS386.TASK_PS) | (fNest? X86.PS.NT : 0));
            cpu.assert(!fNest || !!(cpu.regPS & X86.PS.NT));
            cpu.regEAX = cpu.getLong(addrNew + X86.TSS386.TASK_EAX);
            cpu.regECX = cpu.getLong(addrNew + X86.TSS386.TASK_ECX);
            cpu.regEDX = cpu.getLong(addrNew + X86.TSS386.TASK_EDX);
            cpu.regEBX = cpu.getLong(addrNew + X86.TSS386.TASK_EBX);
            cpu.regEBP = cpu.getLong(addrNew + X86.TSS386.TASK_EBP);
            cpu.regESI = cpu.getLong(addrNew + X86.TSS386.TASK_ESI);
            cpu.regEDI = cpu.getLong(addrNew + X86.TSS386.TASK_EDI);
            cpu.segES.load(cpu.getShort(addrNew + X86.TSS386.TASK_ES));
            cpu.segDS.load(cpu.getShort(addrNew + X86.TSS386.TASK_DS));

            /**
             * segFS and segGS exist only on 80386 machines
             */
            cpu.assert(I386 && cpu.model >= X86.MODEL_80386);
            cpu.segFS.load(cpu.getShort(addrNew + X86.TSS386.TASK_FS));
            cpu.segGS.load(cpu.getShort(addrNew + X86.TSS386.TASK_GS));

            cpu.setCSIP(cpu.getLong(addrNew + X86.TSS386.TASK_EIP), cpu.getShort(addrNew + X86.TSS386.TASK_CS));
            offSS = X86.TSS386.TASK_SS;
            offSP = X86.TSS386.TASK_ESP;
            if (this.cpl < cplOld) {
                offSP = (this.cpl << 3) + X86.TSS386.CPL0_ESP;
                offSS = offSP + 4;
            }
            cpu.setSS(cpu.getShort(addrNew + offSS), true);
            cpu.setSP(cpu.getLong(addrNew + offSP));
        }

        /**
         * Fortunately, X86.TSS286.PREV_TSS and X86.TSS386.PREV_TSS refer to the same TSS offset.
         */
        if (fNest) cpu.setShort(addrNew + X86.TSS286.PREV_TSS, selOld);

        cpu.regCR0 |= X86.CR0.MSW.TS;
        return true;
    }

    /**
     * setBase(addr)
     *
     * This is used in unusual situations where the base must be set independently; normally, the base is
     * set according to the selector provided to load(), but there are a few cases where setBase() is required.
     *
     * For example, in resetRegs(), the real-mode CS selector must be reset to 0xF000 for an 80286 or 80386,
     * but the CS base must be set to 0x00FF0000 or 0xFFFF0000, respectively.  To simplify life for setBase()
     * callers, we allow them to specify 32-bit bases, which we then truncate to 24 bits as needed.
     *
     * WARNING: Since the CPU must maintain regLIP as the sum of the CS base and the current IP, all calls
     * to segCS.setBase() need to go through cpu.setCSBase().
     *
     * @this {Segx86}
     * @param {number} addr
     * @returns {number} addr, truncated as needed
     */
    setBase(addr)
    {
        if (this.cpu.model < X86.MODEL_80386) addr &= 0xffffff;
        return this.base = addr;
    }

    /**
     * save()
     *
     * Early versions of PCx86 saved only segment selectors, since that's all that mattered in real-mode;
     * newer versions need to save/restore all the "core" properties of the Segx86 object (ie, properties other
     * than those that updateMode() will take care of restoring later).
     *
     * @this {Segx86}
     * @returns {Array}
     */
    save()
    {
        return [
            this.sel,
            this.base,
            this.limit,
            this.acc,
            this.id,
            this.sName,
            this.cpl,
            this.dpl,
            this.addrDesc,
            this.sizeAddr,
            this.maskAddr,
            this.sizeData,
            this.maskData,
            this.type,
            this.offMax
        ];
    }

    /**
     * restore(a)
     *
     * Early versions of PCx86 saved only segment selectors, since that's all that mattered in real-mode;
     * newer versions need to save/restore all the "core" properties of the Segx86 object (ie, properties other
     * than those that updateMode() will take care of restoring later).
     *
     * @this {Segx86}
     * @param {Array|number} a
     */
    restore(a)
    {
        if (typeof a == "number") {
            this.load(a);
        } else {
            this.sel      = a[0];
            this.base     = a[1];
            this.limit    = a[2];
            this.acc      = a[3];
            this.id       = a[4];
            this.sName    = a[5];
            this.cpl      = a[6];
            this.dpl      = a[7];
            this.addrDesc = a[8];
            this.sizeAddr = a[9]  || 2;
            this.maskAddr = a[10] || 0xffff;
            this.sizeData = a[11] || 2;
            this.maskData = a[12] || 0xffff;
            this.type     = a[13] || (this.acc & X86.DESC.ACC.TYPE.MASK);
            this.offMax   = a[14] || (this.limit >>> 0) + 1;
        }
    }

    /**
     * updateMode(fLoad, fProt, fV86)
     *
     * Ensures that the segment register's access (ie, load and check methods) matches the specified (or current)
     * operating mode (real or protected).
     *
     * @this {Segx86}
     * @param {boolean} [fLoad] true if the segment was just (re)loaded, false if not
     * @param {boolean} [fProt] true for protected-mode access, false for real-mode access, undefined for current mode
     * @param {boolean} [fV86] true for V86-mode access, false for protected-mode access, undefined for current mode
     */
    updateMode(fLoad, fProt, fV86)
    {
        if (fProt === undefined) {
            fProt = !!(this.cpu.regCR0 & X86.CR0.MSW.PE);
        }

        /**
         * The fExpDown property is used for STACK segments only (ie, segSS); we want to make it easier for
         * setSS() to set stack lower and upper limits, which requires knowing whether or not the segment is
         * marked as EXPDOWN.
         */
        this.fExpDown = false;

        if (fProt) {
            this.load = this.loadProt;
            this.loadIDT = this.loadIDTProt;
            this.checkRead = this.checkReadProt;
            this.checkWrite = this.checkWriteProt;

            if (fV86 === undefined) {
                fV86 = !!(this.cpu.regPS & X86.PS.VM);
            }

            if (fV86) {
                this.load = this.loadV86;
                this.checkRead = this.checkReadV86;
                this.checkWrite = this.checkWriteV86;
                /**
                 * One important feature of V86-mode (as compared to real-mode) are that other segment attributes
                 * (eg, limit, operand size, address size, etc) ARE updated, whereas in real-mode, segment attributes
                 * remain set to whatever was in effect in protected-mode.
                 */
                this.cpl = this.dpl = 3;
                this.sizeData = this.sizeAddr = 2;
                this.maskData = this.maskAddr = 0xffff;
                this.limit = 0xffff;
                this.offMax = this.limit + 1;
                this.addrDesc = X86.ADDR_INVALID;
                this.fStackSwitch = false;
                return;
            }

            /**
             * TODO: For null GDT selectors, should we rely on the descriptor being invalid, or should we assume that
             * the null descriptor might contain uninitialized (or other) data?  I'm assuming the latter, hence the
             * following null selector test.  However, if we're not going to consult the descriptor, is there anything
             * else we should (or should not) be doing for null GDT selectors?
             */
            if (!(this.sel & ~X86.SEL.RPL)) {
                this.checkRead = this.checkReadProtDisallowed;
                this.checkWrite = this.checkWriteProtDisallowed;

            }
            else if (this.type & X86.DESC.ACC.TYPE.SEG) {
                /**
                 * If the READABLE bit of CODE_READABLE is not set, then disallow reads.
                 */
                if ((this.type & X86.DESC.ACC.TYPE.CODE_READABLE) == X86.DESC.ACC.TYPE.CODE_EXECONLY) {
                    this.checkRead = this.checkReadProtDisallowed;
                }
                /**
                 * If the CODE bit is set, or the the WRITABLE bit is not set, then disallow writes.
                 */
                if ((this.type & X86.DESC.ACC.TYPE.CODE) || !(this.type & X86.DESC.ACC.TYPE.WRITABLE)) {
                    this.checkWrite = this.checkWriteProtDisallowed;
                }
                /**
                 * If the CODE bit is not set *and* the EXPDOWN bit is set, then invert the limit check.
                 */
                if ((this.type & (X86.DESC.ACC.TYPE.CODE | X86.DESC.ACC.TYPE.EXPDOWN)) == X86.DESC.ACC.TYPE.EXPDOWN) {
                    if (this.checkRead == this.checkReadProt) this.checkRead = this.checkReadProtDown;
                    if (this.checkWrite == this.checkWriteProt) this.checkWrite = this.checkWriteProtDown;
                    this.fExpDown = true;
                }
                if (fLoad && this.id < Segx86.ID.VER) {
                    /**
                     * We must update the descriptor's ACCESSED bit whenever the segment is "accessed" (ie,
                     * loaded); unlike the ACCESSED and DIRTY bits in PTEs, a descriptor ACCESSED bit is only
                     * updated on loads, not on every memory access.
                     *
                     * We compute the address of the descriptor byte containing the ACCESSED bit (offset 0x5);
                     * note that it's perfectly normal for addrDesc to occasionally be invalid (eg, when the CPU
                     * is creating protected-mode-only segment registers like LDT and TSS, or when the CPU has
                     * transitioned from real-mode to protected-mode and new selector(s) have not been loaded yet).
                     *
                     * NOTE: I do NOT update the ACCESSED bit for null GDT selectors, because I'm assuming the
                     * hardware does not update it either.  In fact, I've seen code that uses the null GDT descriptor
                     * for other purposes, on the assumption that that descriptor is completely unused.
                     */
                    if ((this.sel & ~X86.SEL.RPL) && this.addrDesc !== X86.ADDR_INVALID) {
                        let addrType = this.addrDesc + X86.DESC.ACC.TYPE.OFFSET;
                        let bType = this.cpu.getByte(addrType);
                        /**
                         * This code used to ALWAYS call setByte(), but that's a waste of time if ACCESSED is already
                         * set.  TODO: It would also be nice if we could simply use the cached type value, and eliminate
                         * the getByte() call; that seems a bit risky, but I think we should still try it someday.
                         */
                        if (!(bType & (X86.DESC.ACC.TYPE.ACCESSED >> 8))) {
                            this.cpu.setByte(addrType, bType | (X86.DESC.ACC.TYPE.ACCESSED >> 8));
                        }
                    }
                }
            }

            /**
             * TODO: For non-SEG descriptors, are there other checks or functions we should establish?
             */

            /**
             * Any update to the following properties must occur only on segment loads, not simply when
             * we're updating segment registers as part of a mode change.
             */
            if (fLoad) {
                this.cpl = this.sel & X86.SEL.RPL;
                this.dpl = (this.acc & X86.DESC.ACC.DPL.MASK) >> X86.DESC.ACC.DPL.SHIFT;
                if (this.cpu.model < X86.MODEL_80386 || !(this.ext & X86.DESC.EXT.BIG)) {
                    this.sizeData = 2;
                    this.maskData = 0xffff;
                } else {
                    this.sizeData = 4;
                    this.maskData = (0xffffffff|0);
                }
                this.sizeAddr = this.sizeData;
                this.maskAddr = this.maskData;
            }
            return;
        }
        /**
         * One important feature of real-mode (as compared to V86-mode) are that other segment attributes
         * (eg, limit, operand size, address size, etc) are NOT updated, enabling features like "big real-mode"
         * (aka "unreal mode"), which is used by system software like HIMEM.SYS to access extended memory from
         * real-mode.
         */
        this.load = this.loadReal;
        this.loadIDT = this.loadIDTReal;
        this.checkRead = this.checkReadWriteReal;
        this.checkWrite = this.checkReadWriteReal;
        this.cpl = this.dpl = 0;
        this.addrDesc = X86.ADDR_INVALID;
        this.fStackSwitch = false;
    }

    /**
     * messageSeg(sel, base, limit, type, ext)
     *
     * @this {Segx86}
     * @param {number} sel
     * @param {number} base
     * @param {number} limit
     * @param {number} type
     * @param {number} [ext]
     */
    messageSeg(sel, base, limit, type, ext)
    {
        if (DEBUG) {
            let dbg = this.cpu.dbg;
            if (DEBUGGER && dbg && dbg.messageEnabled(MESSAGE.SEG)) {
                let ch = (this.sName.length < 3? " " : "");
                let sDPL = " dpl=" + this.dpl;
                if (this.id == Segx86.ID.CODE) sDPL += " cpl=" + this.cpl;
                dbg.printf(MESSAGE.SEG, "loadSeg(%s):%ssel=%#06x base=%x limit=%#06x type=%#06x%s\n", this.sName, ch, sel, base, limit, type, sDPL);
            }
            /**
             * Unless I've got a bug that's causing descriptor corruption, it appears that Windows 3.0 may be setting the
             * EXT field of descriptors, even when the processor is an 80286; eg, the EXT field below has been set to 0x000F:
             *
             *      ## ds 1bd
             *      dumpSel(0x01BD): %1101B8
             *      %001101B8  FFFF  C090  B317  000F
             *
             * So I've disabled this assert (I had already disabled the "base !== X86.ADDR_INVALID" check).
             *
             *      this.cpu.assert(base !== X86.ADDR_INVALID && (this.cpu.model >= X86.MODEL_80386 || !ext || ext == X86.DESC.EXT.AVAIL));
             */
        }
    }

    /**
     * probeDesc(sel)
     *
     * This is a neutered version of loadProt() designed for the Debugger.
     *
     * @this {Segx86}
     * @param {number} sel
     * @returns {number} base address of selected segment, or X86.ADDR_INVALID if error
     */
    probeDesc(sel)
    {
        if (DEBUGGER) {
            let addrDT;
            let addrDTLimit;
            let cpu = this.cpu;

            sel &= 0xffff;

            if (!(sel & X86.SEL.LDT)) {
                addrDT = cpu.addrGDT;
                addrDTLimit = cpu.addrGDTLimit;
            } else {
                addrDT = cpu.segLDT.base;
                addrDTLimit = (addrDT + cpu.segLDT.limit)|0;
            }

            let addrDesc = (addrDT + (sel & X86.SEL.MASK))|0;

            if ((addrDTLimit - addrDesc)|0 >= 7) {

                /**
                 * Load the descriptor from memory using probeAddr().
                 */
                let limit = cpu.probeAddr(addrDesc + X86.DESC.LIMIT.OFFSET, 2);
                let acc = cpu.probeAddr(addrDesc + X86.DESC.ACC.OFFSET, 2);
                let type = (acc & X86.DESC.ACC.TYPE.MASK);
                let base = cpu.probeAddr(addrDesc + X86.DESC.BASE.OFFSET, 2) | ((acc & X86.DESC.ACC.BASE1623) << 16);
                let ext = cpu.probeAddr(addrDesc + X86.DESC.EXT.OFFSET, 2);

                if (I386 && cpu.model >= X86.MODEL_80386) {
                    base |= (ext & X86.DESC.EXT.BASE2431) << 16;
                    limit |= (ext & X86.DESC.EXT.LIMIT1619) << 16;
                    if (ext & X86.DESC.EXT.LIMITPAGES) limit = (limit << 12) | 0xfff;
                }

                this.sel = sel;
                this.base = base;
                this.limit = limit;
                this.offMax = (limit >>> 0) + 1;
                this.acc = acc;
                this.type = type;
                this.ext = ext;
                this.addrDesc = addrDesc;
                this.updateMode(true, true, false);
                return base;
            }
        }
        return X86.ADDR_INVALID;
    }

    /**
     * loadAcc(sel, fGDT)
     *
     * this {Segx86}
     * param {number} sel (protected-mode only)
     * param {boolean} [fGDT] is true if sel must be in the GDT
     * return {number} ACC field from descriptor, or X86.DESC.ACC.INVALID if error
     *
     loadAcc(sel, fGDT)
     {
         let addrDT;
         let addrDTLimit;
         let cpu = this.cpu;

         if (!(sel & X86.SEL.LDT)) {
             addrDT = cpu.addrGDT;
             addrDTLimit = cpu.addrGDTLimit;
         } else if (!fGDT) {
             addrDT = cpu.segLDT.base;
             addrDTLimit = (addrDT + cpu.segLDT.limit)|0;
         }
         if (addrDT !== undefined) {
             let addrDesc = (addrDT + (sel & X86.SEL.MASK))|0;
             if (((addrDTLimit - addrDesc)|0) >= 7) {
                 return cpu.getShort(addrDesc + X86.DESC.ACC.OFFSET);
             }
         }
         X86.helpFault.call(cpu, X86.EXCEPTION.GP_FAULT, sel & X86.ERRCODE.SELMASK);
         return X86.DESC.ACC.INVALID;
     }
     */
}
