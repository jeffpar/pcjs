/**
 * @fileoverview Implements the PCx86 Debugger component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Interrupts from "./interrupts.js";
import Memoryx86 from "./memory.js";
import MESSAGE from "./message.js";
import Segx86 from "./segx86.js";
import X86 from "./x86.js";
import Component from "../../../modules/v2/component.js";
import DbgLib from "../../../modules/v2/dbglib.js";
import Keys from "../../../modules/v2/keys.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import UsrLib from "../../../modules/v2/usrlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, APPNAME, APPVERSION, BACKTRACK, BYTEARRAYS, COMPILED, DEBUG, DEBUGGER, I386, MAXDEBUG, PREFETCH, SYMBOLS, TYPEDARRAYS, globals } from "./defines.js";

/**
 * @typedef {Object}    DbgAddrx86
 * @property {number}   [off]
 * @property {number}   [sel]
 * @property {number}   [addr]
 * @property {number}   [type]
 * @property {boolean}  [fData32]
 * @property {boolean}  [fAddr32]
 * @property {boolean}  [fData32Orig]
 * @property {boolean}  [fAddr32Orig]
 * @property {boolean}  [fTempBreak]
 * @property {string}   [sCmd]
 * @property {Array.<string>} [aCmds]
 * @property {number}   [nCPUCycles]    (added to DbgAddrx86 objects stored in history buffer)
 * @property {number}   [nDebugCycles]  (added to DbgAddrx86 objects stored in history buffer)
 * @property {number}   [nDebugState]   (added to DbgAddrx86 objects stored in history buffer)
 */

/**
 * @typedef {Object}    VectorBP
 * @property {number}   [vector]
 * @property {number}   [type]
 * @property {DbgAddrx86} [dbgAddr]
 */

/**
 * Debugger Breakpoint Tips
 *
 * Here's an example of our powerful new breakpoint command capabilities:
 *
 *      bp 0397:022B "?'GlobalAlloc(wFlags:[ss:sp+8],dwBytes:[ss:sp+6][ss:sp+4])';g [ss:sp+2]:[ss:sp] '?ax;if ax'"
 *
 * The above breakpoint will display a pleasing "GlobalAlloc()" string containing the current
 * stack parameters, and will briefly stop execution on the return to print the result in AX,
 * halting the CPU whenever AX is zero (the default behavior of "if" whenever the expression is
 * false is to look for an "else" and automatically halt when there is no "else").
 *
 * How do you figure out where the code for GlobalAlloc is in the first place?  You need to have
 * BACKTRACK support enabled (which currently means running the non-COMPILED version), so that as
 * the Disk component loads disk images, it will automatically extract symbolic information from all
 * "NE" (New Executable) binaries on those disks, which the Debugger's "dt" command can then search
 * for you; eg:
 *
 *      ## dt globalalloc
 *      GLOBALALLOC: KRNL386.EXE 0001:022B len 0xC570
 *
 * And then you just need to do a bit more sleuthing to find the right CODE segment.  And that just
 * got easier, now that the PCx86 Debugger mimics portions of the Windows Debugger INT 0x41 interface;
 * see intWindowsDebugger() for details.  So even if you neglect to run WDEB386.EXE /E inside the
 * machine before running Windows, you should still see notifications like:
 *
 *      KERNEL!undefined code(0001)=#0397 len 0000C580
 *
 * in the PCx86 Debugger output window, as segments are being loaded by the Windows kernel.
 */

/**
 * @class Debuggerx86
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Debuggerx86 extends DbgLib {
    /**
     * Debuggerx86(parmsDbg)
     *
     * The Debuggerx86 component is an optional component that implements a variety of user commands
     * for controlling the CPU, dumping and editing memory, etc.
     *
     * Debuggerx86 extends the shared Debugger component and supports the following optional (parmsDbg)
     * properties:
     *
     *      commands: string containing zero or more commands, separated by ';'
     *
     *      messages: string containing zero or more message categories to enable;
     *      multiple categories must be separated by ',' or ';'.  Parsed by messageInit().
     *
     * @this {Debuggerx86}
     * @param {Object} parmsDbg
     */
    constructor(parmsDbg)
    {
        super("Debugger", parmsDbg, -1);

        if (DEBUGGER) {

            /**
             * Default number of hex chars in a register and a linear address (ie, for real-mode);
             * updated by initBus().
             */
            this.cchReg = 4;
            this.cchAddr = 5;
            this.maskAddr = 0xfffff;

            /**
             * Most commands that require an address call parseAddr(), which defaults to dbgAddrNextCode
             * or dbgAddrNextData when no address has been given.  doDump() and doUnassemble(), in turn,
             * update dbgAddrNextData and dbgAddrNextCode, respectively, when they're done.
             *
             * All dbgAddr variables contain properties off, sel, and addr, where sel:off represents the
             * segmented address and addr is the corresponding linear address (if known).  For certain
             * segmented addresses (eg, breakpoint addresses), we pre-compute the linear address and save
             * that in addr, so that the breakpoint will still operate as intended even if the mode changes
             * later (eg, from real-mode to protected-mode).
             *
             * Finally, for TEMPORARY breakpoint addresses, we set fTempBreak to true, so that they can be
             * automatically cleared when they're hit.
             */
            this.dbgAddrNextCode = this.newAddr(0, 0);
            this.dbgAddrNextData = this.newAddr(0, 0);
            this.dbgAddrAssemble = this.newAddr(0, 0);

            /**
             * aSymbolTable is an array of SymbolTable objects, one per ROM or other chunk of address space,
             * where each object contains the following properties:
             *
             *      sModule
             *      nSegment
             *      sel
             *      off
             *      addr (physical address, if any; eg, symbols for a ROM)
             *      len
             *      aSymbols
             *      aOffsets
             *
             * See addSymbols() for more details, since that's how callers add sets of symbols to the table.
             */
            this.aSymbolTable = [];

            /**
             * clearBreakpoints() initializes the breakpoints lists: aBreakExec is a list of addresses
             * to halt on whenever attempting to execute an instruction at the corresponding address,
             * and aBreakRead and aBreakWrite are lists of addresses to halt on whenever a read or write,
             * respectively, occurs at the corresponding address.
             *
             * NOTE: Curiously, after upgrading the Google Closure Compiler from v20141215 to v20150609,
             * the resulting compiled code would crash in clearBreakpoints(), because the (renamed) aBreakRead
             * property was already defined.  To eliminate whatever was confusing the Closure Compiler, I've
             * explicitly initialized all the properties that clearBreakpoints() (re)initializes.
             */
            this.aBreakExec = this.aBreakRead = this.aBreakWrite = [];
            this.clearBreakpoints();

            /**
             * The new "bn" command allows you to specify a number of instructions to execute and then stop;
             * "bn 0" disables any outstanding count.
             */
            this.nBreakIns = 0;

            /**
             * A new breakpoint command, "bv", allows you to monitor an interrupt vector.  Vector breakpoints
             * don't simply monitor "INT" instructions; they also snapshot the vector address when the "bv"
             * command is issued and monitor execution of that address.  The array is filled with VectorBP objects,
             * which contain vector and dbgAddr properties.
             */
            this.aVectorBP = [];
            this.vectorHalt = true;             // true to halt on vector breakpoints
            this.vectorSkip = -1;
            this.vectorTrace = -1;              // >= 0 whenever a vector has been traced

            /**
             * Execution history is allocated by historyInit() whenever checksEnabled() conditions change.
             * Execution history is updated whenever the CPU calls checkInstruction(), which will happen
             * only when checksEnabled() returns true (eg, whenever one or more breakpoints have been set).
             * This ensures that, by default, the CPU runs as fast as possible.
             */
            this.historyInit();

            /**
             * Initialize Debugger message and command support
             */
            this.afnDumpers = {};
            this.messageInit(parmsDbg['messages']);
            this.sCommandsInit = parmsDbg['commands'];

            /**
             * Make it easier to access Debugger commands from an external REPL, like the WebStorm "live" console
             * window; eg:
             *
             *      pcx86('r')
             *      pcx86('dw 0:0')
             *      pcx86('h')
             *      ...
             */
            let dbg = this;
            if (globals.window[APPCLASS] === undefined) {
                globals.window[APPCLASS] = function(s) { return dbg.doCommands(s); };
            }

        }   // endif DEBUGGER
    }

    /**
     * initBus(bus, cpu, dbg)
     *
     * @this {Debuggerx86}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.cmp = cmp;
        this.fdc = cmp.getMachineComponent("FDC", false);
        this.hdc = cmp.getMachineComponent("HDC", false);
        this.mouse = cmp.getMachineComponent("Mouse", false);

        /**
         * Re-initialize Debugger message and command support as needed
         */
        let sMessages = cmp.getMachineParm('messages');
        if (sMessages) this.messageInit(sMessages);
        this.sCommandsInit = cmp.getMachineParm('commands') || this.sCommandsInit;

        /**
         * If CHIPSET or VIDEO messages are enabled at startup, we enable ChipSet or Video diagnostic info in
         * the instruction history buffer as appropriate.
         */
        if (this.messageEnabled(MESSAGE.CHIPSET)) {
            this.chipset = cmp.getMachineComponent("ChipSet");
        }
        else if (this.messageEnabled(MESSAGE.VIDEO)) {
            this.video = cmp.getMachineComponent("Video");
        }

        this.cchAddr = bus.getWidth() >> 2;
        this.maskAddr = bus.nBusLimit;

        /**
         * Allocate a special segment "register", for use whenever a requested selector is not currently loaded
         */
        this.segDebugger = new Segx86(this.cpu, Segx86.ID.DBG, "DBG");

        this.aaOpDescs = Debuggerx86.aaOpDescs;
        if (this.cpu.model >= X86.MODEL_80186) {
            this.aaOpDescs = Debuggerx86.aaOpDescs.slice();
            this.aaOpDescs[0x0F] = Debuggerx86.aOpDescUndefined;
            if (this.cpu.model >= X86.MODEL_80286) {
                /**
                 * TODO: Consider whether the aOpDesc0F table should be split in two: one for 80286-only instructions,
                 * and one for both 80286 and 80386.  For now, the Debugger is not as strict as the CPUx86 is about
                 * the instructions it supports for each type of CPU, in part because an 80286 machine could still be
                 * presented with 80386-only code that is simply "skipped over" when then CPU doesn't support it.
                 *
                 * Obviously I'm not being entirely consistent, since I don't disassemble *any* 0x0F opcodes for any
                 * pre-80286 CPUs.  But at least I'm being up front about it.
                 */
                this.aaOpDescs[0x0F] = Debuggerx86.aOpDesc0F;
                if (I386 && this.cpu.model >= X86.MODEL_80386) this.cchReg = 8;
            }
        }

        this.messageDump(MESSAGE.BUS,  function onDumpBus(asArgs) { dbg.dumpBus(asArgs); });
        this.messageDump(MESSAGE.DESC, function onDumpSel(asArgs) { dbg.dumpSel(asArgs); });
        this.messageDump(MESSAGE.DOS,  function onDumpDOS(asArgs) { dbg.dumpDOS(asArgs); });
        this.messageDump(MESSAGE.MEM,  function onDumpMem(asArgs) { dbg.dumpMem(asArgs); });
        this.messageDump(MESSAGE.TSS,  function onDumpTSS(asArgs) { dbg.dumpTSS(asArgs); });

        let fSymbols = cmp.getMachineBoolean('symbols');
        if (DEBUG && fSymbols !== false || fSymbols) {
            if (Interrupts.WINDBG.ENABLED || Interrupts.WINDBGRM.ENABLED) {
                this.fWinDbg = null;
                this.cTrapFaults = 0;
                this.fIgnoreNextCheckFault = false;
                this.cpu.addIntNotify(Interrupts.WINCB.VECTOR, this.intWindowsCallBack.bind(this));
                this.cpu.addIntNotify(Interrupts.WINDBG.VECTOR, this.intWindowsDebugger.bind(this));
            }
            if (Interrupts.WINDBGRM.ENABLED) {
                this.fWinDbgRM = null;
                this.cpu.addIntNotify(Interrupts.WINDBGRM.VECTOR, this.intWindowsDebuggerRM.bind(this));
            }
        }
        this.setReady();
    }

    /**
     * addSegmentInfo(dbgAddr, nSegment, sel, fCode, fPrint)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr (address of module name)
     * @param {number} nSegment (logical segment number)
     * @param {number} sel (current selector)
     * @param {boolean} fCode (true if code segment, false if data segment)
     * @param {boolean|null} [fPrint] (false means we're merely monitoring, so let WDEB386 print its own notifications)
     */
    addSegmentInfo(dbgAddr, nSegment, sel, fCode, fPrint)
    {
        let sModule = this.getSZ(dbgAddr);
        let seg = this.getSegment(sel);
        let len = seg? seg.limit + 1 : 0;
        let sSection = (fCode? "_CODE" : "_DATA") + StrLib.toHex(nSegment, 2);
        if (fPrint) {
            this.printf(MESSAGE.DEBUG, "%s %s(%04X)=#%04X len %0X\n", sModule, (fCode? "code" : "data"), nSegment, sel, len);
        }
        let off = 0;
        let aSymbols = this.findModuleInfo(sModule, nSegment);
        aSymbols[sModule + sSection] = off;
        this.addSymbols(sModule, nSegment, sel, off, null, len, aSymbols);
    }

    /**
     * removeSegmentInfo(sel, fPrint)
     *
     * @this {Debuggerx86}
     * @param {number} sel
     * @param {boolean|null} [fPrint] (false means we're merely monitoring OR we don't really care about these notifications)
     */
    removeSegmentInfo(sel, fPrint)
    {
        let sModuleRemoved = this.removeSymbols(null, sel);
        if (fPrint) {
            if (sModuleRemoved) {
                this.printf(MESSAGE.DEBUG, "%s #%04X removed\n", sModuleRemoved, sel);
            } else {
                this.printf(MESSAGE.DEBUG, "unable to remove module for segment #%04X\n", sel);
            }
        }
    }

    /**
     * addSectionInfo(dbgAddr, fCode, fPrint)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr (address of D386_Device_Params)
     * @param {boolean} fCode (true if code section, false if data section)
     * @param {boolean|null} [fPrint] (false means we're merely monitoring, so let WDEB386 print its own notifications)
     */
    addSectionInfo(dbgAddr, fCode, fPrint)
    {
        let nSegment = this.getShort(dbgAddr, 2);
        let sel = this.getShort(dbgAddr, 2);
        let off = this.getLong(dbgAddr, 4);
        let len = this.getLong(dbgAddr, 4);
        let dbgAddrModule = this.newAddr(this.getLong(dbgAddr, 4), this.getShort(dbgAddr, 2));
        let dbgAddrParent = this.newAddr(this.getLong(dbgAddr, 4), this.getShort(dbgAddr, 2));
        // sel = this.getShort(dbgAddr, 2) || sel;
        let sParent = this.getSZ(dbgAddrParent).toUpperCase();
        let sModule = this.getSZ(dbgAddrModule).toUpperCase();
        if (sParent == sModule) {
            sParent = "";
        } else {
            sParent += '!';
        }
        let sSection = (fCode? "_CODE" : "_DATA") + StrLib.toHex(nSegment, 2);
        /**
         * Mimics WDEB386 output, except that WDEB386 only displays a linear address, omitting the selector.
         */
        if (fPrint) {
            this.printf(MESSAGE.DEBUG, "%s%s %s(%04X)=%04X:%0X len %0X\n", sParent, sModule, (fCode? "code" : "data"), nSegment, sel, off, len);
        }
        /**
         * TODO: Add support for 32-bit symbols; findModuleInfo() relies on Disk.getModuleInfo(),
         * and the Disk component doesn't yet know how to parse 32-bit executables.
         */
        let aSymbols = this.findModuleInfo(sModule, nSegment);
        aSymbols[sModule + sSection] = off;
        this.addSymbols(sModule, nSegment, sel, off, null, len, aSymbols);
    }

    /**
     * removeSectionInfo(nSegment, dbgAddr, fPrint)
     *
     * @this {Debuggerx86}
     * @param {number} nSegment (logical segment number)
     * @param {DbgAddrx86} dbgAddr (address of module)
     * @param {boolean|null} [fPrint] (false means we're merely monitoring OR we don't really care about these notifications)
     */
    removeSectionInfo(nSegment, dbgAddr, fPrint)
    {
        let sModule = this.getSZ(dbgAddr).toUpperCase();
        let sModuleRemoved = this.removeSymbols(sModule, nSegment);
        if (fPrint) {
            if (sModuleRemoved) {
                this.printf(MESSAGE.DEBUG, "%s %04X removed\n", sModule, nSegment);
            } else {
                this.printf(MESSAGE.DEBUG, "unable to remove %s for section %04X\n", sModule, nSegment);
            }
        }
    }

    /**
     * intWindowsCallBack()
     *
     * This intercepts calls to Windows callback addresses, which use INT 0x30 (aka Transfer Space Faults).
     *
     * We're only interested in one particular callback: the VW32_Int41Dispatch (0x002A002A) that KERNEL32
     * issues as 32-bit executable sections are loaded.
     *
     * At the time that INT 0x30 occurs, a far 32-bit call has been made, preceded by a near 32-bit call,
     * preceded by a 32-bit push of the Windows Debugger function # that would normally be in EAX if this had
     * been an actual INT 0x41.
     *
     * NOTE: Regardless whether we're "handling" INT 0x41 or merely "monitoring" INT 0x41, as far as THIS
     * interrupt is concerned, we always let the system process it, because execution never continues at the
     * instruction following an INT 0x30; in fact, execution doesn't even continue after the far 32-bit call
     * (even though the kernel places a "RET 4" after that call).  So, rather than recreate all that automatic
     * address popping, we let the system do it for us, since it's designed to work whether a debugger (eg,
     * WDEB386's DEBUG VxD) is installed or not.
     *
     * TODO: Consider "consuming" all VW32_Int41Dispatch callbacks, because the Windows 95 kernel goes to
     * great effort to pass those requests on to the DEBUG VxD, which end up going nowhere when the VxD isn't
     * loaded (to load it, you must either run WDEB386.EXE or install the VxD via SYSTEM.INI).  Regrettably,
     * Windows 95 assumes that if WDEB386 support is present, then a DEBUG VxD must be present as well.
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @returns {boolean} (true to proceed with the INT 0x30 software interrupt)
     */
    intWindowsCallBack(addr)
    {
        let cpu = this.cpu;

        if (this.fWinDbg != null && cpu.regEAX == 0x002A002A) {

            let DX = cpu.regEDX & 0xffff;
            let SI = cpu.regESI & 0xffff;
            let dbgAddr = this.newAddr(cpu.getSP() + 0x0C, cpu.getSS());
            let EAX = this.getLong(dbgAddr);

            switch(EAX) {
            case Interrupts.WINDBG.LOADSEG32:
                /**
                 *  SI == segment type:
                 *      0x0     code selector
                 *      0x1     data selector
                 *  DX:EBX -> D386_Device_Params structure (see addSectionInfo() for details)
                 */
                this.addSectionInfo(this.newAddr(cpu.regEBX, DX), !SI, this.fWinDbg);
                break;
            }
        }
        return true;
    }

    /**
     * intWindowsDebugger()
     *
     * This intercepts calls to the Windows Debugger protected-mode interface (INT 0x41).
     *
     * It's enabled if Interrupts.WINDBG.ENABLED is true, but it must ALSO be enabled if
     * Interrupts.WINDBGRM.ENABLED is true, because if the latter decides to respond to requests,
     * then we must start responding, too.  Windows assumes that if INT 0x68 support is present,
     * then INT 0x41 support must be present as well.
     *
     * That is why intWindowsDebuggerRM() will also set this.fWinDbg to true: we MUST return false
     * for all INT 0x41 requests, so that all requests are consumed, since there's no guarantee
     * that a valid INT 0x41 handler will exist inside the machine.
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @returns {boolean} (true to proceed with the INT 0x41 software interrupt, false to skip)
     */
    intWindowsDebugger(addr)
    {
        let dbgAddr;
        let cpu = this.cpu;
        let AX = cpu.regEAX & 0xffff;
        let BX = cpu.regEBX & 0xffff;
        let CX = cpu.regECX & 0xffff;
        let DX = cpu.regEDX & 0xffff;
        let SI = cpu.regESI & 0xffff;
        let DI = cpu.regEDI & 0xffff;
        let ES = cpu.segES.sel;

        if (this.fWinDbg == null) {
            if (AX == Interrupts.WINDBG.IS_LOADED) {
                /**
                 * We're only going to respond to this function if no one else did, in which case,
                 * we'll set fWinDbg to true and handle additional notifications.
                 */
                cpu.addIntReturn(addr, function(dbg) {
                    return function onInt41Return(nLevel) {
                        if ((cpu.regEAX & 0xffff) != Interrupts.WINDBG.LOADED) {
                            cpu.regEAX = (cpu.regEAX & ~0xffff) | Interrupts.WINDBG.LOADED;
                            /**
                             * TODO: We need a DEBUGGER message category; using the MEM category for now.
                             */
                            dbg.printf(MESSAGE.DEBUG, "INT 41 handling enabled\n");
                            dbg.fWinDbg = true;
                        } else {
                            dbg.printf(MESSAGE.DEBUG, "INT 41 monitoring enabled\n");
                            dbg.fWinDbg = false;
                        }
                    };
                }(this));
            }
            return true;
        }

        /**
         * NOTE: If this.fWinDbg is true, then all cases should return false, because we're taking full
         * responsibility for all requests (don't assume there's valid interrupt handler inside the machine).
         */
        switch(AX) {
        case Interrupts.WINDBG.ISCHAR:              // 0x0003 (called regularly by Win31)
            break;

        case Interrupts.WINDBG.FORCEDGO16:          // 0x0040 (called regularly by Win31)
            /**
             * 2023 Update: It's been a while since I've tried doing a clean install of Windows 95, and this was
             * firing incessantly.  TODO: Investigate who/what is triggering this later.
             */
            break;

        case Interrupts.WINDBG.IS_LOADED:           // 0x004F
            if (this.fWinDbg) {
                cpu.regEAX = (cpu.regEAX & ~0xffff) | Interrupts.WINDBG.LOADED;
                this.printf(MESSAGE.DEBUG, "INT 41 handling enabled\n");
            }
            break;

        case Interrupts.WINDBG.LOADSEG:             // 0x0050
            this.addSegmentInfo(this.newAddr(DI, ES), BX+1, CX, !(SI & 0x1), this.fWinDbg);
            break;

        case Interrupts.WINDBG.FREESEG:             // 0x0052
            this.removeSegmentInfo(BX, this.fWinDbg);
            break;

        case Interrupts.WINDBG.KRNLVARS:            // 0x005A
            /**
             *  BX = version number of this data (0x3A0)
             *  DX:CX points to:
             *      WORD    hGlobalHeap     ****
             *      WORD    pGlobalHeap     ****
             *      WORD    hExeHead        ****
             *      WORD    hExeSweep
             *      WORD    topPDB
             *      WORD    headPDB
             *      WORD    topsizePDB
             *      WORD    headTDB         ****
             *      WORD    curTDB          ****
             *      WORD    loadTDB
             *      WORD    LockTDB
             *      WORD    SelTableLen     ****
             *      DWORD   SelTableStart   ****
             */
            break;

        case Interrupts.WINDBG.RELSEG:              // 0x005C
        case Interrupts.WINDBG.EXITCALL:            // 0x0062
        case Interrupts.WINDBG.LOADDLL:             // 0x0064
        case Interrupts.WINDBG.DELMODULE:           // 0x0065
        case Interrupts.WINDBG.UNKNOWN66:           // 0x0066
        case Interrupts.WINDBG.UNKNOWN67:           // 0x0067
            /**
             * TODO: Figure out what to do with these notifications, if anything
             */
            break;

        case Interrupts.WINDBG.LOADHIGH:            // 0x005D
        case Interrupts.WINDBG.REGDOTCMD:           // 0x0070
        case Interrupts.WINDBG.CONDBP:              // 0xF001
            break;

        case Interrupts.WINDBG.CHECKFAULT:          // 0x007F
            if (this.fWinDbg) {
                /**
                 * AX == 0 means handle fault normally, 1 means issue TRAPFAULT
                 */
                cpu.regEAX = (cpu.regEAX & ~0xffff) | (this.fIgnoreNextCheckFault? 0 : 1);
                this.printf(MESSAGE.DEBUG, "INT 41 CHECKFAULT: fault=%04X type=%04X trap=%b\n", BX, CX, !this.fIgnoreNextCheckFault);
            }
            break;

        case Interrupts.WINDBG.TRAPFAULT:           // 0x0083
            /**
             * If we responded with AX == 1 to a preceding CHECKFAULT notification, then we should receive the
             * following TRAPFAULT notification; additionally, a TRAPFAULT notification may be issued without
             * any CHECKFAULT warning if the user was presented with a fault dialog containing a "Debug" button,
             * and the user clicked it.
             *
             * Regardless, whenever we receive this notification, we allocate a temporary breakpoint at the
             * reported fault address.
             */
            if (this.fWinDbg) {
                dbgAddr = this.newAddr(cpu.regEDX, CX);
                if (!this.cTrapFaults++) {
                    this.printf("INT 41 TRAPFAULT: fault=%04X error=%08X addr=%s\n", BX, cpu.regESI, this.toHexAddr(dbgAddr));
                    this.addBreakpoint(this.aBreakExec, dbgAddr, true);
                    this.historyInit(true);         // temporary breakpoints don't normally trigger history, but in this case, we want it to
                } else {
                    this.printf("TRAPFAULT failed\n");
                    this.findBreakpoint(this.aBreakExec, dbgAddr, true, true, true);
                    this.cTrapFaults = 0;
                    this.stopCPU();
                }
            }
            break;

        case Interrupts.WINDBG.GETSYMBOL:           // 0x008D
            if (this.fWinDbg) cpu.regEAX = (cpu.regEAX & ~0xffff)|1;        // AX == 1 means not found
            break;

        case Interrupts.WINDBG.LOADSEG32:           // 0x0150
            /**
             *  SI == segment type:
             *      0x0     code selector
             *      0x1     data selector
             *  DX:EBX -> D386_Device_Params structure (see addSectionInfo() for details)
             */
            this.addSectionInfo(this.newAddr(cpu.regEBX, DX), !SI, this.fWinDbg);
            break;

        case Interrupts.WINDBG.FREESEG32:           // 0x0152
            /**
             *  BX == segment number
             *  DX:EDI -> module name
             */
            this.removeSectionInfo(BX, this.newAddr(cpu.regEDI, DX), this.fWinDbg);
            break;

        case Interrupts.WINDBG.FORCEDBP:            // 0xF002
            break;

        default:
            if (this.fWinDbg) {
                this.printf(MESSAGE.DEBUG, "INT 41: AX=%04X (unhandled)\n", AX);
            }
            break;
        }

        /**
         * Let's try to limit the scope of any "gt" command by resetting this flag after any INT 0x41
         */
        this.fIgnoreNextCheckFault = false;

        return !this.fWinDbg;
    }

    /**
     * intWindowsDebuggerRM()
     *
     * This intercepts calls to the Windows Debugger real-mode interface (INT 0x68).
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @returns {boolean} (true to proceed with the INT 0x68 software interrupt, false to skip)
     */
    intWindowsDebuggerRM(addr)
    {
        let cpu = this.cpu;
        let AL = cpu.regEAX & 0xff;
        let AH = (cpu.regEAX >> 8) & 0xff;
        let BX = cpu.regEBX & 0xffff;
        let CX = cpu.regECX & 0xffff;
        let DX = cpu.regEDX & 0xffff;
        let DI = cpu.regEDI & 0xffff;
        let ES = cpu.segES.sel;

        if (this.fWinDbgRM == null) {
            if (AH == Interrupts.WINDBGRM.IS_LOADED) {
                /**
                 * It looks like IFSHLP.SYS issues a preliminary INT 0x68 before Windows 95 gets rolling,
                 * and the Windows Debugger will not have had a chance to load yet, so we need to ignore
                 * that call.  We detect IFSHLP.SYS by looking for "IFS$" in the caller's code segment,
                 * where the IFSHLP device driver header is located.
                 */
                if (cpu.getLong((cpu.segCS.sel << 4) + 0x0A) == 0x24534649) {
                    this.printf(MESSAGE.DEBUG, "ignoring INT 68 from IFSHLP.SYS\n");
                    return true;
                }
                /**
                 * Ditto for WDEB386 itself, which presumably wants to avoid loading on top of itself.
                 * The offset of the "WDEB" signature is at 0x82 in the Windows 3.1 version (3.10.46 1/16/92),
                 * and at 0x5F in the Windows 95 version.
                 */
                if (cpu.getLong((cpu.segCS.sel << 4) + 0x82) == 0x42454457 ||
                    cpu.getLong((cpu.segCS.sel << 4) + 0x5F) == 0x42454457) {
                    this.printf(MESSAGE.DEBUG, "ignoring INT 68 from WDEB386.EXE\n");
                    return true;
                }
                /**
                 * We're only going to respond to this function if no one else did, in which case, we'll set
                 * fWinDbgRM to true and handle additional notifications.
                 */
                cpu.addIntReturn(addr, function(dbg) {
                    return function onInt68Return(nLevel) {
                        if ((cpu.regEAX & 0xffff) != Interrupts.WINDBGRM.LOADED) {
                            cpu.regEAX = (cpu.regEAX & ~0xffff) | Interrupts.WINDBGRM.LOADED;
                            dbg.printf(MESSAGE.DEBUG, "INT 68 handling enabled\n");
                            /**
                             * If we turn on INT 0x68 handling, we must also turn on INT 0x41 handling,
                             * because Windows assumes that the latter handler exists whenever the former does.
                             */
                            dbg.fWinDbg = dbg.fWinDbgRM = true;
                        } else {
                            dbg.printf(MESSAGE.DEBUG, "INT 68 monitoring enabled\n");
                            dbg.fWinDbgRM = false;
                        }
                    };
                }(this));
            }
            return true;
        }

        /**
         * NOTE: If this.fWinDbgRM is true, then all cases should return false, because we're taking full
         * responsibility for all requests (don't assume there's valid interrupt handler inside the machine).
         */
        switch(AH) {
        case Interrupts.WINDBGRM.IS_LOADED:         // 0x43
            if (this.fWinDbgRM) {
                cpu.regEAX = (cpu.regEAX & ~0xffff) | Interrupts.WINDBGRM.LOADED;
            }
            break;

        case Interrupts.WINDBGRM.PREP_PMODE:        // 0x44
            if (this.fWinDbgRM) {
                /**
                 * Use our fancy new "call break" mechanism to obtain a special address that will
                 * trap all calls, routing control to the specified function (callWindowsDebuggerPMInit).
                 */
                let a = cpu.segCS.addCallBreak(this.callWindowsDebuggerPMInit.bind(this));
                if (a) {
                    cpu.regEDI = a[0];              // ES:EDI receives the "call break" address
                    cpu.setES(a[1]);
                }
            }
            break;

        case Interrupts.WINDBGRM.FREESEG:           // 0x48
            this.removeSegmentInfo(BX, this.fWinDbg);
            break;

        case Interrupts.WINDBGRM.REMOVESEGS:        // 0x4F
            /**
             * TODO: This probably just signals the end of module loading; nothing is required, but we should
             * clean up whatever we can....
             */
            break;

        case Interrupts.WINDBGRM.LOADSEG:           // 0x50
            if (AL == 0x20) {
                /**
                 *  Real-mode EXE
                 *  CX == paragraph
                 *  ES:DI -> module name
                 */
                this.addSegmentInfo(this.newAddr(DI, ES), 0, CX, true, this.fWinDbgRM);
            }
            else if (AL < 0x80) {
                /**
                 *  AL == segment type:
                 *      0x00    code selector
                 *      0x01    data selector
                 *      0x10    code segment
                 *      0x11    data segment
                 *      0x40    code segment & sel
                 *      0x41    data segment & sel
                 *  BX == segment #
                 *  CX == actual segment/selector
                 *  DX == actual selector (if 0x40 or 0x41)
                 *  ES:DI -> module name
                 */
                this.addSegmentInfo(this.newAddr(DI, ES), BX+1, (AL & 0x40)? DX : CX, !(AL & 0x1), this.fWinDbgRM);
            }
            else {
                /**
                 *  AL == segment type:
                 *      0x80    device driver code seg
                 *      0x81    device driver data seg
                 *  ES:DI -> D386_Device_Params structure (see addSectionInfo() for details)
                 */
                this.addSectionInfo(this.newAddr(DI, ES), !(AL & 0x1), this.fWinDbgRM);
            }
            if (this.fWinDbgRM) {
                cpu.regEAX = (cpu.regEAX & ~0xff) | 0x01;
            }
            break;

        default:
            if (this.fWinDbgRM) {
                this.printf(MESSAGE.DEBUG, "INT 68: AH=%02X (unhandled)\n", AH);
            }
            break;
        }

        return !this.fWinDbgRM;
    }

    /**
     * callWindowsDebuggerPMInit()
     *
     * This intercepts calls to the Windows Debugger "PMInit" interface; eg:
     *
     *      AL = function code
     *
     *          0 - initialize IDT
     *              ES:EDI points to protected mode IDT
     *
     *          1 - initialize page checking
     *              BX = physical selector
     *              ECX = linear bias
     *
     *          2 - specify that debug queries are supported
     *
     *          3 - initialize spare PTE
     *              EBX = linear address of spare PTE
     *              EDX = linear address the PTE represents
     *
     *          4 - set Enter/Exit VMM routine address
     *              EBX = Enter VMM routine address
     *              ECX = Exit VMM routine address
     *              EDX = $_Debug_Out_Service address
     *              ESI = $_Trace_Out_Service address
     *              The VMM enter/exit routines must return with a retfd
     *
     *          5 - get debugger size/physical address
     *              returns: AL = 0 (don't call AL = 1)
     *              ECX = size in bytes
     *              ESI = starting physical code/data address
     *
     *          6 - set debugger base/initialize spare PTE
     *              EBX = linear address of spare PTE
     *              EDX = linear address the PTE represents
     *              ESI = starting linear address of debug code/data
     *
     *          7 - enable memory context functions
     *
     * @this {Debuggerx86}
     * @returns {boolean} (must always return false to skip the call, because the call is using a CALLBREAK address)
     */
    callWindowsDebuggerPMInit()
    {
        let cpu = this.cpu;
        let AL = cpu.regEAX & 0xff;
        if (MAXDEBUG) this.printf("INT 68 callback: AL=%02X\n", AL);
        if (AL == 5) {
            cpu.regECX = cpu.regESI = 0;                // our in-machine debugger footprint is zero
            cpu.regEAX = (cpu.regEAX & ~0xff) | 0x01;   // TODO: Returning a "don't call" response sounds good, but what does it REALLY mean?
        }
        return false;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {Debuggerx86}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "debugInput")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} (true if binding was successful, false if unrecognized binding request)
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let dbg = this;
        switch (sBinding) {

        case "debugInput":
            this.bindings[sBinding] = control;
            this.controlDebug = /** @type {HTMLInputElement} */ (control);
            /**
             * For halted machines, this is fine, but for auto-start machines, it can be annoying.
             *
             *      controlInput.focus();
             */
            control.onkeydown = function onKeyDownDebugInput(event) {
                let sLine;
                if (event.keyCode == Keys.KEYCODE.CR) {
                    sLine = dbg.controlDebug.value;
                    dbg.controlDebug.value = "";
                    dbg.doCommands(sLine, true);
                }
                else if (event.keyCode == Keys.KEYCODE.ESC) {
                    dbg.controlDebug.value = sLine = "";
                }
                else {
                    if (event.keyCode == Keys.KEYCODE.UP) {
                        sLine = dbg.getPrevCommand();
                    }
                    else if (event.keyCode == Keys.KEYCODE.DOWN) {
                        sLine = dbg.getNextCommand();
                    }
                    if (sLine != null) {
                        let cch = sLine.length;
                        dbg.controlDebug.value = sLine;
                        dbg.controlDebug.setSelectionRange(cch, cch);
                    }
                }
                if (sLine != null && event.preventDefault) event.preventDefault();
            };
            return true;

        case "debugEnter":
            this.bindings[sBinding] = control;
            WebLib.onClickRepeat(
                control,
                500, 100,
                function onClickDebugEnter(fRepeat) {
                    if (dbg.controlDebug) {
                        let sCommands = dbg.controlDebug.value;
                        dbg.controlDebug.value = "";
                        dbg.doCommands(sCommands, true);
                        return true;
                    }
                    if (DEBUG) dbg.printf(MESSAGE.LOG, "no debugger input buffer\n");
                    return false;
                }
            );
            return true;

        case "step":
            this.bindings[sBinding] = control;
            WebLib.onClickRepeat(
                control,
                500, 100,
                function onClickStep(fRepeat) {
                    let fCompleted = false;
                    if (!dbg.isBusy(true)) {
                        dbg.setBusy(true);
                        fCompleted = dbg.stepCPU(fRepeat? 1 : 0);
                        dbg.setBusy(false);
                    }
                    return fCompleted;
                }
            );
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * updateFocus()
     *
     * @this {Debuggerx86}
     */
    updateFocus()
    {
        if (this.controlDebug) this.controlDebug.focus();
    }

    /**
     * getCPUMode()
     *
     * @this {Debuggerx86}
     * @returns {boolean} (true if protected mode, false if not)
     */
    getCPUMode()
    {
        return !!(this.cpu && (this.cpu.regCR0 & X86.CR0.MSW.PE) && !(this.cpu.regPS & X86.PS.VM));
    }

    /**
     * getAddressType()
     *
     * @this {Debuggerx86}
     * @returns {number}
     */
    getAddressType()
    {
        return this.getCPUMode()? Debuggerx86.ADDRTYPE.PROT : Debuggerx86.ADDRTYPE.REAL;
    }

    /**
     * getSegment(sel, type)
     *
     * If the selector matches that of any of the CPU segment registers, then return the CPU's segment
     * register, instead of using our own segDebugger segment register.  This makes it possible for us to
     * see what the CPU is seeing at certain critical junctures, such as after an LMSW instruction has
     * switched the processor from real to protected mode.  Actually loading the selector from the GDT/LDT
     * should be done only as a last resort.
     *
     * @this {Debuggerx86}
     * @param {number|undefined} sel
     * @param {number} [type] (defaults to getAddressType())
     * @returns {Segx86|null} (seg)
     */
    getSegment(sel, type)
    {
        let typeDefault = this.getAddressType();

        if (!type) type = typeDefault;

        if (type == typeDefault) {
            if (sel === this.cpu.getCS()) return this.cpu.segCS;
            if (sel === this.cpu.getDS()) return this.cpu.segDS;
            if (sel === this.cpu.getES()) return this.cpu.segES;
            if (sel === this.cpu.getSS()) return this.cpu.segSS;
            if (I386 && this.cpu.model >= X86.MODEL_80386) {
                if (sel === this.cpu.getFS()) return this.cpu.segFS;
                if (sel === this.cpu.getGS()) return this.cpu.segGS;
            }
            /**
             * Even if nSuppressBreaks is set, we'll allow the call in real-mode,
             * because a loadReal() request using segDebugger should generally be safe.
             */
            if (this.nSuppressBreaks && type == Debuggerx86.ADDRTYPE.PROT || !this.segDebugger) return null;
        }
        let seg = this.segDebugger;
        if (type != Debuggerx86.ADDRTYPE.PROT) {
            seg.loadReal(sel);
            seg.limit = 0xffff;         // although an ACTUAL real-mode segment load would not modify the limit,
            seg.offMax = 0x10000;       // proper segDebugger operation requires that we update the limit ourselves
        } else {
            seg.probeDesc(sel);
        }
        return seg;
    }

    /**
     * getAddr(dbgAddr, fWrite, nb)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86|undefined} dbgAddr
     * @param {boolean} [fWrite]
     * @param {number} [nb] number of bytes to check (1, 2 or 4); default is 1
     * @returns {number} (is the corresponding linear address, or X86.ADDR_INVALID)
     */
    getAddr(dbgAddr, fWrite, nb)
    {
        /**
         * Some addresses (eg, breakpoint addresses) save their original linear address in dbgAddr.addr,
         * so we want to use that if it's there, but otherwise, dbgAddr is assumed to be a segmented address
         * whose linear address must always be (re)calculated based on current machine state (mode, active
         * descriptor tables, etc).
         */
        let addr = dbgAddr && dbgAddr.addr;
        if (addr == undefined) {
            addr = X86.ADDR_INVALID;
            if (dbgAddr) {
                /**
                 * TODO: We should try to cache the seg inside dbgAddr, to avoid unnecessary calls to getSegment().
                 */
                let seg = this.getSegment(dbgAddr.sel, dbgAddr.type);
                if (seg) {
                    if (!fWrite) {
                        addr = seg.checkReadDebugger(dbgAddr.off || 0, nb || 1);
                    } else {
                        addr = seg.checkWriteDebugger(dbgAddr.off || 0, nb || 1);
                    }
                    dbgAddr.addr = addr;
                }
            }
        }
        return addr;
    }

    /**
     * getByte(dbgAddr, inc)
     *
     * We must route all our memory requests through the CPU now, in case paging is enabled.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getByte(dbgAddr, inc)
    {
        let b = 0xff;
        let addr = this.getAddr(dbgAddr, false, 1);
        if (addr !== X86.ADDR_INVALID) {
            /**
             * TODO: Determine what we should do about the fact that we're masking any error from probeAddr()
             */
            b = this.cpu.probeAddr(addr, 1, dbgAddr.type == Debuggerx86.ADDRTYPE.PHYSICAL) | 0;
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return b;
    }

    /**
     * getWord(dbgAddr, fAdvance)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fAdvance]
     * @returns {number}
     */
    getWord(dbgAddr, fAdvance)
    {
        return dbgAddr.fData32? this.getLong(dbgAddr, fAdvance? 4 : 0) : this.getShort(dbgAddr, fAdvance? 2 : 0);
    }

    /**
     * getShort(dbgAddr, inc)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getShort(dbgAddr, inc)
    {
        let w = 0xffff;
        let addr = this.getAddr(dbgAddr, false, 2);
        if (addr !== X86.ADDR_INVALID) {
            /**
             * TODO: Determine what we should do about the fact that we're masking any error from probeAddr()
             */
            w = this.cpu.probeAddr(addr, 2, dbgAddr.type == Debuggerx86.ADDRTYPE.PHYSICAL) | 0;
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return w;
    }

    /**
     * getLong(dbgAddr, inc)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getLong(dbgAddr, inc)
    {
        let l = -1;
        let addr = this.getAddr(dbgAddr, false, 4);
        if (addr !== X86.ADDR_INVALID) {
            /**
             * TODO: Determine what we should do about the fact that we're masking any error from probeAddr()
             */
            l = this.cpu.probeAddr(addr, 4, dbgAddr.type == Debuggerx86.ADDRTYPE.PHYSICAL) | 0;
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return l;
    }

    /**
     * setByte(dbgAddr, b, inc, fNoUpdate)
     *
     * NOTE: If you need to patch a ROM, you MUST use the ROM location's physical address.
     *
     * WARNING: Be careful with the editing commands that use function, because we don't have a safe
     * counterpart to cpu.probeAddr().
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} b
     * @param {number} [inc]
     * @param {boolean} [fNoUpdate] (when doing a large number of setByte() calls, set this to true and call cpu.updateCPU() when you're done)
     */
    setByte(dbgAddr, b, inc, fNoUpdate)
    {
        let addr = this.getAddr(dbgAddr, true, 1);
        if (addr !== X86.ADDR_INVALID) {
            if (dbgAddr.type != Debuggerx86.ADDRTYPE.PHYSICAL) {
                this.cpu.setByte(addr, b);
            } else {
                this.bus.setByteDirect(addr, b);
            }
            if (inc) this.incAddr(dbgAddr, inc);
            if (!fNoUpdate) this.cpu.updateCPU(true);   // we set fForce to true in case video memory was the target
        }
    }

    /**
     * setShort(dbgAddr, w, inc, fFast)
     *
     * NOTE: If you need to patch a ROM, you MUST use the ROM location's physical address.
     *
     * WARNING: Be careful with the editing commands that use function, because we don't have a safe
     * counterpart to cpu.probeAddr().
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} w
     * @param {number} [inc]
     * @param {boolean} [fFast]
     */
    setShort(dbgAddr, w, inc, fFast)
    {
        let addr = this.getAddr(dbgAddr, true, 2);
        if (addr !== X86.ADDR_INVALID) {
            if (dbgAddr.type != Debuggerx86.ADDRTYPE.PHYSICAL) {
                this.cpu.setShort(addr, w);
            } else {
                this.bus.setShortDirect(addr, w);
            }
            if (inc) this.incAddr(dbgAddr, inc);
            if (!fFast) this.cpu.updateCPU(true);       // we set fForce to true in case video memory was the target
        }
    }

    /**
     * newAddr(off, sel, addr, type, fData32, fAddr32)
     *
     * Returns a NEW DbgAddrx86 object, initialized with specified values and/or defaults.
     *
     * @this {Debuggerx86}
     * @param {number} [off] (default is zero)
     * @param {number} [sel] (default is undefined)
     * @param {number} [addr] (default is undefined)
     * @param {number} [type] (default is based on current CPU mode)
     * @param {boolean} [fData32] (default is the current CPU operand size)
     * @param {boolean} [fAddr32] (default is the current CPU address size)
     * @returns {DbgAddrx86}
     */
    newAddr(off, sel, addr, type, fData32, fAddr32)
    {
        return this.setAddr({}, off, sel, addr, type, fData32, fAddr32);
    }

    /**
     * getAddrPrefix(dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @returns {string}
     */
    getAddrPrefix(dbgAddr)
    {
        let ch;

        switch (dbgAddr.type) {
        case Debuggerx86.ADDRTYPE.REAL:
        case Debuggerx86.ADDRTYPE.V86:
            ch = '&';
            break;
        case Debuggerx86.ADDRTYPE.PROT:
            ch = '#';
            break;
        case Debuggerx86.ADDRTYPE.LINEAR:
            ch = '%';
            break;
        case Debuggerx86.ADDRTYPE.PHYSICAL:
            ch = '%%';
            break;
        default:
            ch = dbgAddr.sel? '' : '%';
            break;
        }
        return ch;
    }

    /**
     * setAddr(dbgAddr, off, sel, addr, type, fData32, fAddr32)
     *
     * Updates an EXISTING DbgAddrx86 object, initialized with specified values and/or defaults.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} [off] (default is zero)
     * @param {number} [sel] (default is undefined)
     * @param {number} [addr] (default is undefined)
     * @param {number} [type] (default is based on current CPU mode)
     * @param {boolean} [fData32] (default is the current CPU operand size)
     * @param {boolean} [fAddr32] (default is the current CPU address size)
     * @returns {DbgAddrx86}
     */
    setAddr(dbgAddr, off, sel, addr, type, fData32, fAddr32)
    {
        dbgAddr.off = off || 0;
        dbgAddr.sel = sel;
        dbgAddr.addr = addr;
        dbgAddr.type = type || this.getAddressType();
        dbgAddr.fData32 = (fData32 != undefined)? fData32 : !!(this.cpu && this.cpu.segCS.sizeData == 4);
        dbgAddr.fAddr32 = (fAddr32 != undefined)? fAddr32 : !!(this.cpu && this.cpu.segCS.sizeAddr == 4);
        dbgAddr.fTempBreak = false;
        return dbgAddr;
    }

    /**
     * packAddr(dbgAddr)
     *
     * Packs a DbgAddrx86 object into an Array suitable for saving in a machine state object.
     *
     * NOTE: Element 6 was previously used to maintain an override count; that's no longer needed, hence the 0.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @returns {Array}
     */
    packAddr(dbgAddr)
    {
        return [dbgAddr.off, dbgAddr.sel, dbgAddr.addr, dbgAddr.fTempBreak, dbgAddr.fData32, dbgAddr.fAddr32, 0];
    }

    /**
     * unpackAddr(aAddr)
     *
     * Unpacks a DbgAddrx86 object from an Array created by packAddr() and restored from a saved machine state.
     *
     * @this {Debuggerx86}
     * @param {Array} aAddr
     * @returns {DbgAddrx86}
     */
    unpackAddr(aAddr)
    {
        return {off: aAddr[0], sel: aAddr[1], addr: aAddr[2], fTempBreak: aAddr[3], fData32: aAddr[4], fAddr32: aAddr[5]};
    }

    /**
     * checkLimit(dbgAddr, fUpdate)
     *
     * Used by incAddr() and parseAddr() to ensure that the (updated) dbgAddr offset is within segment bounds.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fUpdate] (true to update segment info)
     * @returns {boolean}
     */
    checkLimit(dbgAddr, fUpdate)
    {
        if (dbgAddr.sel != undefined) {
            let seg = this.getSegment(dbgAddr.sel, dbgAddr.type);
            if (seg) {
                let off = dbgAddr.off;
                if (!seg.fExpDown) {
                    if ((off >>> 0) >= seg.offMax) {
                        return false;
                    }
                }
                else {
                    if ((off >>> 0) < seg.offMax) {
                        return false;
                    }
                }
                if (fUpdate) {
                    dbgAddr.off = off & seg.maskAddr;
                    dbgAddr.fData32 = (seg.sizeData == 4);
                    dbgAddr.fAddr32 = (seg.sizeAddr == 4);
                }
            }
        }
        return true;
    }

    /**
     * parseAddr(sAddr, fCode, fNoChecks, fQuiet)
     *
     * As discussed above, dbgAddr variables contain one or more of: off, sel, and addr.  They represent
     * a segmented address (sel:off) when sel is defined or a linear address (addr) when sel is undefined.
     *
     * To create a segmented address, specify two values separated by ':'; for a linear address, use
     * a '%' prefix.  We check for ':' after '%', so if for some strange reason you specify both, the
     * address will be treated as segmented, not linear.
     *
     * The '%' syntax is similar to that used by the Windows 80386 kernel debugger (wdeb386) for linear
     * addresses.  If/when we add support for processors with page tables, we will likely adopt the same
     * convention for linear addresses and provide a different syntax (eg, "%%") physical memory references.
     *
     * Address evaluation and validation (eg, range checks) are no longer performed at this stage.  That's
     * done later, by getAddr(), which returns X86.ADDR_INVALID for invalid segments, out-of-range offsets,
     * etc.  The Debugger's low-level get/set memory functions verify all getAddr() results, but even if an
     * invalid address is passed through to the Bus memory interfaces, the address will simply be masked with
     * Bus.nBusLimit; in the case of X86.ADDR_INVALID, that will generally refer to the top of the physical
     * address space.
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sAddr
     * @param {boolean} [fCode] (true if target is code, false if target is data)
     * @param {boolean} [fNoChecks] (true when setting breakpoints that may not be valid now, but will be later)
     * @param {boolean} [fQuiet]
     * @returns {DbgAddrx86|undefined}
     */
    parseAddr(sAddr, fCode, fNoChecks, fQuiet)
    {
        let dbgAddr;
        let dbgAddrNext = (fCode? this.dbgAddrNextCode : this.dbgAddrNextData);

        let type = fNoChecks? Debuggerx86.ADDRTYPE.NONE : dbgAddrNext.type;
        let off = dbgAddrNext.off, sel = dbgAddrNext.sel, addr = dbgAddrNext.addr;

        if (sAddr !== undefined) {

            sAddr = this.parseReference(sAddr);

            let ch = sAddr.charAt(0);
            let iColon = sAddr.indexOf(':');

            switch(ch) {
            case '&':
                type = Debuggerx86.ADDRTYPE.REAL;
                break;
            case '#':
                type = Debuggerx86.ADDRTYPE.PROT;
                break;
            case '%':
                type = Debuggerx86.ADDRTYPE.LINEAR;
                ch = sAddr.charAt(1);
                if (ch == '%') {
                    type = Debuggerx86.ADDRTYPE.PHYSICAL;
                    ch += ch;
                }
                off = addr = 0;
                sel = undefined;        // we still have code that relies on this crutch, instead of the type field
                break;
            default:
                if (iColon >= 0) type = Debuggerx86.ADDRTYPE.NONE;
                ch = '';
                break;
            }

            if (ch) {
                sAddr = sAddr.substr(ch.length);
                iColon -= ch.length;
            }

            dbgAddr = this.findSymbolAddr(sAddr);
            if (dbgAddr) return dbgAddr;

            if (iColon < 0) {
                if (sel != undefined) {
                    off = this.parseExpression(sAddr, fQuiet);
                    addr = undefined;
                } else {
                    addr = this.parseExpression(sAddr, fQuiet);
                    if (addr == undefined) off = undefined;
                }
            }
            else {
                sel = this.parseExpression(sAddr.substring(0, iColon), fQuiet);
                off = this.parseExpression(sAddr.substring(iColon + 1), fQuiet);
                addr = undefined;
            }
        }

        if (off != undefined) {
            dbgAddr = this.newAddr(off, sel, addr, type);
            if (!fNoChecks && !this.checkLimit(dbgAddr, true)) {
                this.printf("invalid offset: %s\n", this.toHexAddr(dbgAddr));
                dbgAddr = undefined;
            }
        }
        return dbgAddr;
    }

    /**
     * parseAddrOptions(dbgAddr, sLine)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {string} [sLine]
     */
    parseAddrOptions(dbgAddr, sLine)
    {
        if (sLine) {
            let a = sLine.match(/(['"])(.*?)\1/);
            if (a) {
                dbgAddr.aCmds = this.parseCommand(dbgAddr.sLine = a[2]);
            }
        }
    }

    /**
     * parseAddrReference(s, sAddr)
     *
     * Returns the given string with the given address references replaced with the contents of the address.
     *
     * @this {Debuggerx86}
     * @param {string} s
     * @param {string} sAddr
     * @returns {string}
     */
    parseAddrReference(s, sAddr)
    {
        let dbgAddr = this.parseAddr(sAddr);
        return s.replace('[' + sAddr + ']', dbgAddr? StrLib.toHex(this.getWord(dbgAddr), dbgAddr.fData32? 8 : 4) : "undefined");
    }

    /**
     * incAddr(dbgAddr, inc)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} [inc] contains value to increment dbgAddr by (default is 1)
     */
    incAddr(dbgAddr, inc)
    {
        inc = inc || 1;
        if (dbgAddr.addr != undefined) {
            dbgAddr.addr += inc;
        }
        if (dbgAddr.sel != undefined) {
            dbgAddr.off += inc;
            if (!this.checkLimit(dbgAddr)) {
                dbgAddr.off = 0;
                dbgAddr.addr = undefined;
            }
        }
    }

    /**
     * toHexOffset(off, sel, fAddr32)
     *
     * @this {Debuggerx86}
     * @param {number|undefined} [off]
     * @param {number|undefined} [sel]
     * @param {boolean} [fAddr32] is true for 32-bit ADDRESS size
     * @returns {string} (the hex representation of off (or sel:off))
     */
    toHexOffset(off, sel, fAddr32)
    {
        if (sel != undefined) {
            return StrLib.toHex(sel, 4) + ':' + StrLib.toHex(off, (off & ~0xffff) || fAddr32? 8 : 4);
        }
        return StrLib.toHex(off);
    }

    /**
     * toHexAddr(dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @returns {string} (the hex representation of the address)
     */
    toHexAddr(dbgAddr)
    {
        let ch = this.getAddrPrefix(dbgAddr);
        /**
         * TODO: Revisit the decision to check sel == undefined; I would rather see these decisions based on type.
         */
        return (dbgAddr.type >= Debuggerx86.ADDRTYPE.LINEAR || dbgAddr.sel == undefined)? (ch + StrLib.toHex(dbgAddr.addr)) : (ch + this.toHexOffset(dbgAddr.off, dbgAddr.sel, dbgAddr.fAddr32));
    }

    /**
     * getSZ(dbgAddr, cchMax)
     *
     * Gets zero-terminated (aka "ASCIIZ") string from dbgAddr.  It also stops at the first '$', in case this is
     * a '$'-terminated string -- mainly because I'm lazy and didn't feel like writing a separate get() function.
     * Yes, a zero-terminated string containing a '$' will be prematurely terminated -- not a big deal.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {number} [cchMax] (default is 256)
     * @returns {string} (and dbgAddr advanced past the terminating zero)
     */
    getSZ(dbgAddr, cchMax)
    {
        let s = "";
        cchMax = cchMax || 256;
        while (s.length < cchMax) {
            let b = this.getByte(dbgAddr, 1);
            if (!b || b == 0x24 || b >= 127) break;
            s += (b >= 32? String.fromCharCode(b) : '.');
        }
        return s;
    }

    /**
     * dumpBackTrack(asArgs)
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    dumpBackTrack(asArgs)
    {
        let sInfo = "no information";
        if (BACKTRACK) {
            let sAddr = asArgs[0];
            let dbgAddr = this.parseAddr(sAddr, true, true, true);
            if (dbgAddr) {
                let addr = this.getAddr(dbgAddr);
                if (dbgAddr.type != Debuggerx86.ADDRTYPE.PHYSICAL) {
                    let pageInfo = this.getPageInfo(addr);
                    if (pageInfo) {
                        dbgAddr.addr = pageInfo.addrPhys;
                        dbgAddr.type = Debuggerx86.ADDRTYPE.PHYSICAL;
                    }
                }
                sInfo = this.toHexAddr(dbgAddr) + ": " + (this.bus.getSymbol(addr, true) || sInfo);
            } else {
                let component, componentPrev = null;
                while ((component = this.cmp.getMachineComponent("Disk", componentPrev))) {
                    let aInfo = component.getSymbolInfo(sAddr);
                    if (aInfo.length) {
                        sInfo = "";
                        for (let i in aInfo) {
                            let a = aInfo[i];
                            if (sInfo) sInfo += '\n';
                            sInfo += a[0] + ": " + a[1] + ' ' + StrLib.toHex(a[2], 4) + ':' + StrLib.toHex(a[3], 4) + " len " + StrLib.toHexWord(a[4]);
                        }
                    }
                    componentPrev = component;
                }
            }
        }
        return sInfo;
    }

    /**
     * dumpBlocks(aBlocks, sAddr, fLinear)
     *
     * @this {Debuggerx86}
     * @param {Array} aBlocks
     * @param {string} [sAddr] (optional block address)
     * @param {boolean} [fLinear] (true if linear, physical otherwise)
     */
    dumpBlocks(aBlocks, sAddr, fLinear)
    {
        let addr = 0, i = 0, n = aBlocks.length;

        if (sAddr) {
            addr = this.getAddr(this.parseAddr(sAddr));
            if (addr === X86.ADDR_INVALID) {
                this.printf("invalid address: %s\n\n");
                return;
            }
            i = addr >>> this.cpu.nBlockShift;
            n = 1;
        }

        this.printf("blockid   %s   blockaddr   used    size    type\n", fLinear? "linear  " : "physical");
        this.printf("--------  ---------  ----------  ------  ------  ----\n");

        let typePrev = -1, cPrev = 0;
        while (n--) {
            let block = aBlocks[i];
            /**
             * We need to replicate a portion of what probeAddr() does, which is to "peek" at the
             * underlying physical block of any UNPAGED block.  An UNPAGED block doesn't imply
             * that the page is invalid, but merely that the CPU has not yet been asked to perform
             * the page directory/page table lookup.
             *
             * To do that, we use the same mapPageBlock() interface that the CPU uses, with fSuppress
             * set, so that it doesn't 1) generate a fault or 2) modify the block.  Blocks should only
             * "validated" when a CPU operation touches the corresponding page, and they should be only
             * be "invalidated" when the CPU wants to flush the TLB (ie, whenever CR3 is updated).
             */
            if (block && block.type == Memoryx86.TYPE.UNPAGED) {
                block = this.cpu.mapPageBlock(addr, false, true);
            }
            if (block.type == typePrev) {
                if (!cPrev++) this.printf("...\n");
            } else {
                typePrev = block.type;
                let sType = Memoryx86.TYPE.NAMES[typePrev];
                if (typePrev == Memoryx86.TYPE.PAGED) {
                    block = block.blockPhys;
                    this.assert(block);
                    sType += " -> " + Memoryx86.TYPE.NAMES[block.type];
                }
                if (block) {
                    this.printf("%08x  %%%08x  %%%%%08x  %#06x  %#06x  %s\n", block.id, i << this.cpu.nBlockShift, block.addr, block.used, block.size, sType);
                }
                if (typePrev != Memoryx86.TYPE.NONE && typePrev != Memoryx86.TYPE.UNPAGED) typePrev = -1;
                cPrev = 0;
            }
            addr += this.cpu.nBlockSize;
            i++;
        }
    }

    /**
     * dumpBus(asArgs)
     *
     * Dumps Bus allocations.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs (asArgs[0] is an optional block address)
     */
    dumpBus(asArgs)
    {
        this.dumpBlocks(this.cpu.aBusBlocks, asArgs[0]);
    }

    /**
     * dumpDOS(asArgs)
     *
     * Dumps DOS MCBs (Memory Control Blocks).
     *
     * TODO: Add some code to detect the current version of DOS (if any) and locate the first MCB automatically.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    dumpDOS(asArgs)
    {
        let mcb;
        let sMCB = asArgs[0];
        if (sMCB) {
            mcb = this.parseValue(sMCB);
        }
        if (mcb === undefined) {
            this.printf("invalid MCB\n");
            return;
        }
        this.printf("dumpMCB(%#06x)\n", mcb);
        while (mcb) {
            let dbgAddr = this.newAddr(0, mcb);
            let bSig = this.getByte(dbgAddr, 1);
            let wPID = this.getShort(dbgAddr, 2);
            let wParas = this.getShort(dbgAddr, 5);
            if (bSig != 0x4D && bSig != 0x5A) break;
            this.printf("%s: '%s' PID=%#06x LEN=%#06x \"%s\"\n", this.toHexOffset(0, mcb), String.fromCharCode(bSig), wPID, wParas, this.getSZ(dbgAddr, 8));
            mcb += 1 + wParas;
        }
    }

    /**
     * dumpIDT(asArgs)
     *
     * Dumps an IDT vector entry.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    dumpIDT(asArgs)
    {
        let sIDT = asArgs[0];

        if (!sIDT) {
            this.printf("no IDT vector\n");
            return;
        }

        let nIDT = this.parseValue(sIDT);
        if (nIDT === undefined || nIDT < 0 || nIDT > 255) {
            this.printf("invalid vector: %s\n", sIDT);
            return;
        }

        let ch = '&', fProt = this.cpu.isProtMode(), fAddr32 = false;
        let addrIDT = this.cpu.addrIDT + (nIDT << (fProt? 3 : 2));
        let off = this.cpu.getShort(addrIDT + X86.DESC.LIMIT.OFFSET);
        let sel = this.cpu.getShort(addrIDT + X86.DESC.BASE.OFFSET);
        if (fProt) {
            ch = '#';
            let acc = this.cpu.getShort(addrIDT + X86.DESC.ACC.OFFSET);
            if (acc & X86.DESC.ACC.TYPE.NONSEG_386) {
                fAddr32 = true;
                off |= this.cpu.getShort(addrIDT + X86.DESC.EXT.OFFSET) << 16;
            }
        }

        this.printf("dumpIDT(%#06x): %s%04x:%0*x\n", nIDT, ch, sel, fAddr32? 8 : 4, off);
    }

    /**
     * dumpMem(asArgs)
     *
     * Dumps page allocations.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs (asArgs[0] is an optional block address)
     */
    dumpMem(asArgs)
    {
        this.dumpBlocks(this.cpu.aMemBlocks, asArgs[0], this.cpu.aMemBlocks !== this.cpu.aBusBlocks);
    }

    /**
     * getPageEntry(addrPE, lPE, fPTE)
     *
     * @this {Debuggerx86}
     * @param {number} addrPE
     * @param {number} lPE
     * @param {boolean} [fPTE] (true if the entry is a PTE, false if it's a PDE)
     * @returns {string}
     */
    getPageEntry(addrPE, lPE, fPTE)
    {
        let s = StrLib.toHex(addrPE) + ' ' + StrLib.toHex(lPE) + ' ';
        s += (fPTE && (lPE & X86.PTE.DIRTY))? 'D' : '-';
        s += (lPE & X86.PTE.ACCESSED)? 'A' : '-';
        s += (lPE & X86.PTE.USER)? 'U' : 'S';
        s += (lPE & X86.PTE.READWRITE)? 'W' : 'R';
        s += (lPE & X86.PTE.PRESENT)? 'P' : 'N';
        return s;
    }

    /**
     * getPageInfo(addr)
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @returns {Object|null}
     */
    getPageInfo(addr)
    {
        let pageInfo = null;
        if (I386 && this.cpu.model >= X86.MODEL_80386) {
            let bus = this.bus;
            /**
             * Here begins code remarkably similar to mapPageBlock() (with fSuppress set).
             */
            pageInfo = {};
            pageInfo.offPDE = (addr & X86.LADDR.PDE.MASK) >>> X86.LADDR.PDE.SHIFT;
            pageInfo.addrPDE = this.cpu.regCR3 + pageInfo.offPDE;
            pageInfo.blockPDE = bus.aMemBlocks[(pageInfo.addrPDE & bus.nBusMask) >>> bus.nBlockShift];
            pageInfo.lPDE = pageInfo.blockPDE.readLong(pageInfo.offPDE);
            pageInfo.offPTE = (addr & X86.LADDR.PTE.MASK) >>> X86.LADDR.PTE.SHIFT;
            pageInfo.addrPTE = (pageInfo.lPDE & X86.PTE.FRAME) + pageInfo.offPTE;
            pageInfo.blockPTE = bus.aMemBlocks[(pageInfo.addrPTE & bus.nBusMask) >>> bus.nBlockShift];
            pageInfo.lPTE = pageInfo.blockPTE.readLong(pageInfo.offPTE);
            pageInfo.addrPhys = (pageInfo.lPTE & X86.PTE.FRAME) + (addr & X86.LADDR.OFFSET);
            //let blockPhys = bus.aMemBlocks[(addrPhys & bus.nBusMask) >>> bus.nBlockShift];
        }
        return pageInfo;
    }

    /**
     * dumpPage(asArgs)
     *
     * Dumps page table information about the given linear address.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    dumpPage(asArgs)
    {
        let sAddr = asArgs[0];
        if (!sAddr) {
            this.printf("missing address\n");
            return;
        }

        let addr = this.getAddr(this.parseAddr(sAddr));
        if (addr === X86.ADDR_INVALID) {
            this.printf("invalid address: %s\n", sAddr);
            return;
        }

        let pageInfo = this.getPageInfo(addr);
        if (!pageInfo) {
            this.printf("unsupported operation\n");
            return;
        }

        this.printf("linear     PDE addr   PDE             PTE addr   PTE             physical\n");
        this.printf("---------  ---------- --------        ---------- --------        ----------\n");
        let s = '%' + StrLib.toHex(addr);
        s += "  %%" + this.getPageEntry(pageInfo.addrPDE, pageInfo.lPDE);
        s += "  %%" + this.getPageEntry(pageInfo.addrPTE, pageInfo.lPTE, true);
        s += "  %%" + StrLib.toHex(pageInfo.addrPhys);
        this.printf("%s\n", s);
    }

    /**
     * dumpSel(asArgs)
     *
     * Dumps a descriptor for the given selector.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    dumpSel(asArgs)
    {
        let sSel = asArgs[0];

        if (!sSel) {
            this.printf("no selector\n");
            return;
        }

        let sel = this.parseValue(sSel);
        if (sel === undefined) {
            this.printf("invalid selector: %s\n", sSel);
            return;
        }

        let seg = this.getSegment(sel, Debuggerx86.ADDRTYPE.PROT);
        this.printf("dumpSel(%#06x): %%%0*x\n", seg? seg.sel : sel, this.cchAddr, seg? seg.addrDesc : null);
        if (!seg) return;

        let sType;
        let fGate = false;
        if (seg.type & X86.DESC.ACC.TYPE.SEG) {
            if (seg.type & X86.DESC.ACC.TYPE.CODE) {
                sType = "code";
                sType += (seg.type & X86.DESC.ACC.TYPE.READABLE)? ",readable" : ",execonly";
                if (seg.type & X86.DESC.ACC.TYPE.CONFORMING) sType += ",conforming";
            }
            else {
                sType = "data";
                sType += (seg.type & X86.DESC.ACC.TYPE.WRITABLE)? ",writable" : ",readonly";
                if (seg.type & X86.DESC.ACC.TYPE.EXPDOWN) sType += ",expdown";
            }
            if (seg.type & X86.DESC.ACC.TYPE.ACCESSED) sType += ",accessed";
        }
        else {
            let sysDesc = Debuggerx86.SYSDESCS[seg.type];
            if (sysDesc) {
                sType = sysDesc[0];
                fGate = sysDesc[1];
            }
        }

        if (sType && !(seg.acc & X86.DESC.ACC.PRESENT)) sType += ",not present";

        let sDump;
        if (fGate) {
            sDump = "seg=" + StrLib.toHexWord(seg.base & 0xffff) + " off=" + StrLib.toHexWord(seg.limit);
        } else {
            sDump = "base=" + StrLib.toHex(seg.base, this.cchAddr) + " limit=" + this.getLimitString(seg.limit);
        }
        /**
         * When we dump the EXT word, we mask off the LIMIT1619 and BASE2431 bits, because those have already
         * been incorporated into the limit and base properties of the segment register; all we care about here
         * are whether EXT contains any of the AVAIL (0x10), BIG (0x40) or LIMITPAGES (0x80) bits.
         */
        this.printf("%s type=%#04x (%s) ext=%#06x dpl=%#04x\n", sDump, seg.type >> 8, sType, seg.ext & ~(X86.DESC.EXT.LIMIT1619 | X86.DESC.EXT.BASE2431), seg.dpl);
    }

    /**
     * dumpHistory(sPrev, sLines, sComment)
     *
     * If sLines is not a number, it can be a instruction filter.  However, for the moment, the only
     * supported filter is "call", which filters the history buffer for all CALL and RET instructions
     * from the specified previous point forward.
     *
     * @this {Debuggerx86}
     * @param {string} [sPrev] is a (decimal) number of instructions to rewind to (default is 10)
     * @param {string} [sLines] is a (decimal) number of instructions to print (default is, again, 10)
     * @param {string} [sComment] (should be either "history" or "cycles"; default is "history")
     */
    dumpHistory(sPrev, sLines, sComment = "history")
    {
        let sMore = "";
        let cHistory = 0;
        let iHistory = this.iOpcodeHistory;
        let aHistory = this.aOpcodeHistory;

        if (aHistory.length) {

            let nPrev = +sPrev || this.nextHistory;
            let nLines = +sLines || 10;

            if (isNaN(nPrev)) {
                nPrev = nLines;
            } else {
                sMore = "more ";
            }

            if (nPrev > aHistory.length) {
                this.printf("note: only %d available\n", aHistory.length);
                nPrev = aHistory.length;
            }

            iHistory -= nPrev;
            if (iHistory < 0) {
                /**
                 * If the dbgAddr of the last aHistory element contains a valid selector, wrap around.
                 */
                if (aHistory[aHistory.length - 1].sel == null) {
                    nPrev = iHistory + nPrev;
                    iHistory = 0;
                } else {
                    iHistory += aHistory.length;
                }
            }

            let aFilters = [];
            if (sLines == "call") {
                nLines = 100000;
                aFilters = ["CALL"];
            }

            if (sPrev !== undefined) {
                this.printf("%d instructions earlier:\n", nPrev);
            }

            let sBuffer = "";
            let nCyclesPrev = 0;
            let fDumpCycles = (sComment == "cycles");

            /**
             * TODO: The following is necessary to prevent dumpHistory() from causing additional (or worse, recursive)
             * faults due to segmented addresses that are no longer valid, but the only alternative is to dramatically
             * increase the amount of memory used to store instruction history (eg, storing copies of all the instruction
             * bytes alongside the execution addresses).
             *
             * For now, we're living dangerously, so that our history dumps actually work.
             *
             *      this.nSuppressBreaks++;
             *
             * If you re-enable this protection, be sure to re-enable the decrement below, too.
             */
            while (nLines > 0 && iHistory != this.iOpcodeHistory) {

                let dbgAddr = aHistory[iHistory++];
                if (dbgAddr.sel == null) break;

                /**
                 * We must create a new dbgAddr from the address in aHistory, because dbgAddr was
                 * a reference, not a copy, and we don't want getInstruction() modifying the original.
                 */
                let dbgAddrNew = this.newAddr(dbgAddr.off, dbgAddr.sel, dbgAddr.addr, dbgAddr.type, dbgAddr.fData32, dbgAddr.fAddr32);

                let nSequence = nPrev--;
                if (fDumpCycles) {
                    nSequence = nCyclesPrev;
                    if (dbgAddr.nCPUCycles != null) {
                        nSequence = dbgAddr.nCPUCycles - nCyclesPrev;
                        nCyclesPrev = dbgAddr.nCPUCycles;
                    }
                }

                let sInstruction = this.getInstruction(dbgAddrNew, sComment, nSequence);

                if (dbgAddr.nDebugState != null) {
                    if (dbgAddr.nDebugCycles != null) {
                        sInstruction += " (" + dbgAddr.nDebugCycles + "," + StrLib.toHexByte(dbgAddr.nDebugState) + ")";
                    } else {
                        sInstruction += " (" + StrLib.toHexByte(dbgAddr.nDebugState >> 16) + ",AX=" + StrLib.toHexWord(dbgAddr.nDebugState & 0xffff) + ")";
                    }
                }

                if (!aFilters.length || sInstruction.indexOf(aFilters[0]) >= 0) {
                    sBuffer += (sBuffer? '\n' : '') + sInstruction;
                }

                if (iHistory >= aHistory.length) iHistory = 0;
                this.nextHistory = nPrev;
                cHistory++;
                nLines--;
            }

            if (sBuffer) this.printf("%s\n", sBuffer);

            /**
             * See comments above.
             *
             *      this.nSuppressBreaks--;
             */
        }

        if (!cHistory) {
            this.printf("no %shistory available\n", sMore);
            this.nextHistory = undefined;
        }
    }

    /**
     * dumpTSS(asArgs)
     *
     * This dumps a TSS using the given selector.  If none is specified, the current TR is used.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    dumpTSS(asArgs)
    {
        let seg, sel;
        let sSel = asArgs[0];

        if (!sSel) {
            seg = this.cpu.segTSS;
        } else {
            sel = this.parseValue(sSel);
            if (sel === undefined) {
                this.printf("invalid task selector: %s\n", sSel);
                return;
            }
            seg = this.getSegment(sel, Debuggerx86.ADDRTYPE.PROT);
        }

        this.printf("dumpTSS(%#06x): %%0*x\n", seg? seg.sel : sel, this.cchAddr, seg? seg.base : null);
        if (!seg) return;

        let sDump = "";
        let type = seg.type & ~X86.DESC.ACC.TYPE.TSS_BUSY;
        let cch = (type == X86.DESC.ACC.TYPE.TSS286? 4 : 8);
        let aTSSFields = (type == X86.DESC.ACC.TYPE.TSS286? Debuggerx86.TSS286 : Debuggerx86.TSS386);
        let off, addr, v;
        for (let sField in aTSSFields) {
            off = aTSSFields[sField];
            addr = seg.base + off;
            v = this.cpu.probeAddr(addr, 2);
            if (type == X86.DESC.ACC.TYPE.TSS386) {
                v |= this.cpu.probeAddr(addr + 2, 2) << 16;
            }
            if (sDump) sDump += '\n';
            sDump += StrLib.toHexWord(off) + ' ' + StrLib.pad(sField + ':', -11) + StrLib.toHex(v, cch);
        }
        if (type == X86.DESC.ACC.TYPE.TSS386) {
            let iPort = 0;
            off = (v >>> 16);
            /**
             * We arbitrarily cut the IOPM dump off at port 0x3FF; we're not currently interested in anything above that.
             */
            while (off < seg.offMax && iPort < 0x3ff) {
                addr = seg.base + off;
                v = this.cpu.probeAddr(addr, 2);
                sDump += "\n" + StrLib.toHexWord(off) + " ports " + StrLib.toHexWord(iPort) + '-' + StrLib.toHexWord(iPort+15) + ": " + StrLib.toBinBytes(v, 2);
                iPort += 16;
                off += 2;
            }
        }
        this.print(sDump + "\n");
    }

    /**
     * findModuleInfo(sModule, nSegment)
     *
     * Since we're not sure what Disk the module was loaded from, we have to check all of them.
     *
     * @this {Debuggerx86}
     * @param {string} sModule
     * @param {number} nSegment
     * @returns {Object}
     */
    findModuleInfo(sModule, nSegment)
    {
        let aSymbols = {};
        if (SYMBOLS) {
            let component, componentPrev = null;
            while ((component = this.cmp.getMachineComponent("Disk", componentPrev))) {
                let a = component.getModuleInfo(sModule, nSegment);
                if (a) {
                    aSymbols = a;
                    break;
                }
                componentPrev = component;
            }
        }
        return aSymbols;
    }

    /**
     * messageInit(sEnable)
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sEnable contains zero or more message categories to enable, separated by ','
     */
    messageInit(sEnable)
    {
        this.dbg = this;
        this.bitsMessage = MESSAGE.WARNING + (DEBUG? MESSAGE.DEBUG : 0);
        this.sMessagePrev = null;
        this.aMessageBuffer = [];
        let aEnable = this.parseCommand(sEnable, false, ',');
        if (aEnable.length) {
            this.bitsMessage -= MESSAGE.WARNING;    // when specific messages are being enabled, WARNING must be explicitly set
            for (let m in MESSAGE.NAMES) {
                if (UsrLib.indexOf(aEnable, m) >= 0) {
                    this.bitsMessage += MESSAGE.NAMES[m];
                    this.printf("%s messages enabled\n", m);
                }
            }
        }
        this.historyInit();                         // call this just in case MESSAGE.INT was turned on
    }

    /**
     * messageDump(bitMessage, fnDumper)
     *
     * @this {Debuggerx86}
     * @param {number} bitMessage is one Messages category flag
     * @param {function(Array.<string>)} fnDumper is a function the Debugger can use to dump data for that category
     * @returns {boolean} (true if successfully registered, false if not)
     */
    messageDump(bitMessage, fnDumper)
    {
        for (let m in MESSAGE.NAMES) {
            if (bitMessage == MESSAGE.NAMES[m]) {
                this.afnDumpers[m] = fnDumper;
                return true;
            }
        }
        return false;
    }

    /**
     * getRegIndex(sReg, off)
     *
     * @this {Debuggerx86}
     * @param {string} sReg
     * @param {number} [off] optional offset into sReg
     * @returns {number} (register index, or -1 if not found)
     */
    getRegIndex(sReg, off)
    {
        let i;
        sReg = sReg.toUpperCase();
        if (off == null) {
            i = UsrLib.indexOf(Debuggerx86.REGS, sReg);
        } else {
            i = UsrLib.indexOf(Debuggerx86.REGS, sReg.substr(off, 3));
            if (i < 0) i = UsrLib.indexOf(Debuggerx86.REGS, sReg.substr(off, 2));
        }
        return i;
    }

    /**
     * getRegString(iReg)
     *
     * @this {Debuggerx86}
     * @param {number} iReg
     * @returns {string}
     */
    getRegString(iReg)
    {
        let cch = 0;
        let n = this.getRegValue(iReg);
        if (n != null) {
            switch(iReg) {
            case Debuggerx86.REG_AL:
            case Debuggerx86.REG_CL:
            case Debuggerx86.REG_DL:
            case Debuggerx86.REG_BL:
            case Debuggerx86.REG_AH:
            case Debuggerx86.REG_CH:
            case Debuggerx86.REG_DH:
            case Debuggerx86.REG_BH:
                cch = 2;
                break;
            case Debuggerx86.REG_AX:
            case Debuggerx86.REG_CX:
            case Debuggerx86.REG_DX:
            case Debuggerx86.REG_BX:
            case Debuggerx86.REG_SP:
            case Debuggerx86.REG_BP:
            case Debuggerx86.REG_SI:
            case Debuggerx86.REG_DI:
            case Debuggerx86.REG_IP:
            case Debuggerx86.REG_SEG + Debuggerx86.REG_ES:
            case Debuggerx86.REG_SEG + Debuggerx86.REG_CS:
            case Debuggerx86.REG_SEG + Debuggerx86.REG_SS:
            case Debuggerx86.REG_SEG + Debuggerx86.REG_DS:
            case Debuggerx86.REG_SEG + Debuggerx86.REG_FS:
            case Debuggerx86.REG_SEG + Debuggerx86.REG_GS:
                cch = 4;
                break;
            case Debuggerx86.REG_EAX:
            case Debuggerx86.REG_ECX:
            case Debuggerx86.REG_EDX:
            case Debuggerx86.REG_EBX:
            case Debuggerx86.REG_ESP:
            case Debuggerx86.REG_EBP:
            case Debuggerx86.REG_ESI:
            case Debuggerx86.REG_EDI:
            case Debuggerx86.REG_CR0:
            case Debuggerx86.REG_CR1:
            case Debuggerx86.REG_CR2:
            case Debuggerx86.REG_CR3:
            case Debuggerx86.REG_EIP:
                cch = 8;
                break;
            case Debuggerx86.REG_PS:
                cch = this.cchReg;
                break;
            }
        }
        return cch? StrLib.toHex(n, cch) : "??";
    }

    /**
     * getRegValue(iReg)
     *
     * @this {Debuggerx86}
     * @param {number} iReg
     * @returns {number|undefined}
     */
    getRegValue(iReg)
    {
        let n;
        if (iReg >= 0) {
            let cpu = this.cpu;
            switch(iReg) {
            case Debuggerx86.REG_AL:
                n = cpu.regEAX & 0xff;
                break;
            case Debuggerx86.REG_CL:
                n = cpu.regECX & 0xff;
                break;
            case Debuggerx86.REG_DL:
                n = cpu.regEDX & 0xff;
                break;
            case Debuggerx86.REG_BL:
                n = cpu.regEBX & 0xff;
                break;
            case Debuggerx86.REG_AH:
                n = (cpu.regEAX >> 8) & 0xff;
                break;
            case Debuggerx86.REG_CH:
                n = (cpu.regECX >> 8) & 0xff;
                break;
            case Debuggerx86.REG_DH:
                n = (cpu.regEDX >> 8) & 0xff;
                break;
            case Debuggerx86.REG_BH:
                n = (cpu.regEBX >> 8) & 0xff;
                break;
            case Debuggerx86.REG_AX:
                n = cpu.regEAX & 0xffff;
                break;
            case Debuggerx86.REG_CX:
                n = cpu.regECX & 0xffff;
                break;
            case Debuggerx86.REG_DX:
                n = cpu.regEDX & 0xffff;
                break;
            case Debuggerx86.REG_BX:
                n = cpu.regEBX & 0xffff;
                break;
            case Debuggerx86.REG_SP:
                n = cpu.getSP() & 0xffff;
                break;
            case Debuggerx86.REG_BP:
                n = cpu.regEBP & 0xffff;
                break;
            case Debuggerx86.REG_SI:
                n = cpu.regESI & 0xffff;
                break;
            case Debuggerx86.REG_DI:
                n = cpu.regEDI & 0xffff;
                break;
            case Debuggerx86.REG_IP:
                n = cpu.getIP() & 0xffff;
                break;
            case Debuggerx86.REG_PS:
                n = cpu.getPS();
                break;
            case Debuggerx86.REG_SEG + Debuggerx86.REG_ES:
                n = cpu.getES();
                break;
            case Debuggerx86.REG_SEG + Debuggerx86.REG_CS:
                n = cpu.getCS();
                break;
            case Debuggerx86.REG_SEG + Debuggerx86.REG_SS:
                n = cpu.getSS();
                break;
            case Debuggerx86.REG_SEG + Debuggerx86.REG_DS:
                n = cpu.getDS();
                break;
            default:
                if (this.cpu.model == X86.MODEL_80286) {
                    if (iReg == Debuggerx86.REG_CR0) {
                        n = cpu.regCR0;
                    }
                }
                else if (I386 && this.cpu.model >= X86.MODEL_80386) {
                    switch(iReg) {
                    case Debuggerx86.REG_EAX:
                        n = cpu.regEAX;
                        break;
                    case Debuggerx86.REG_ECX:
                        n = cpu.regECX;
                        break;
                    case Debuggerx86.REG_EDX:
                        n = cpu.regEDX;
                        break;
                    case Debuggerx86.REG_EBX:
                        n = cpu.regEBX;
                        break;
                    case Debuggerx86.REG_ESP:
                        n = cpu.getSP();
                        break;
                    case Debuggerx86.REG_EBP:
                        n = cpu.regEBP;
                        break;
                    case Debuggerx86.REG_ESI:
                        n = cpu.regESI;
                        break;
                    case Debuggerx86.REG_EDI:
                        n = cpu.regEDI;
                        break;
                    case Debuggerx86.REG_CR0:
                        n = cpu.regCR0;
                        break;
                    case Debuggerx86.REG_CR1:
                        n = cpu.regCR1;
                        break;
                    case Debuggerx86.REG_CR2:
                        n = cpu.regCR2;
                        break;
                    case Debuggerx86.REG_CR3:
                        n = cpu.regCR3;
                        break;
                    case Debuggerx86.REG_SEG + Debuggerx86.REG_FS:
                        n = cpu.getFS();
                        break;
                    case Debuggerx86.REG_SEG + Debuggerx86.REG_GS:
                        n = cpu.getGS();
                        break;
                    case Debuggerx86.REG_EIP:
                        n = cpu.getIP();
                        break;
                    }
                }
                break;
            }
        }
        return n;
    }

    /**
     * replaceRegs(s)
     *
     * @this {Debuggerx86}
     * @param {string} s
     * @returns {string}
     */
    replaceRegs(s)
    {
        /**
         * Replace any references first; this means that register references inside the reference
         * do NOT need to be prefixed with '@'.
         */
        s = this.parseReference(s) || s;

        /**
         * Replace every @XX (or @XXX), where XX (or XXX) is a register, with the register's value.
         */
        let i = 0;
        let b, sChar, sAddr, dbgAddr, sReplace;
        while ((i = s.indexOf('@', i)) >= 0) {
            let iReg = this.getRegIndex(s, i + 1);
            if (iReg >= 0) {
                s = s.substr(0, i) + this.getRegString(iReg) + s.substr(i + 1 + Debuggerx86.REGS[iReg].length);
            }
            i++;
        }
        /**
         * Replace every #XX, where XX is a hex byte value, with the corresponding ASCII character (if printable).
         */
        i = 0;
        while ((i = s.indexOf('#', i)) >= 0) {
            sChar = s.substr(i+1, 2);
            b = StrLib.parseInt(sChar, 16);
            if (b != null && b >= 32 && b < 127) {
                sReplace = sChar + " '" + String.fromCharCode(b) + "'";
                s = s.replace('#' + sChar, sReplace);
                i += sReplace.length;
                continue;
            }
            i++;
        }
        /**
         * Replace every $XXXX:XXXX, where XXXX:XXXX is a segmented address, with the zero-terminated string at that address.
         */
        i = 0;
        while ((i = s.indexOf('$', i)) >= 0) {
            sAddr = s.substr(i+1, 9);
            dbgAddr = this.parseAddr(sAddr);
            if (dbgAddr) {
                sReplace = sAddr + ' "' + this.getSZ(dbgAddr) + '"';
                s = s.replace('$' + sAddr, sReplace);
                i += sReplace.length;
                continue;
            }
            i++;
        }
        /**
         * Replace every ^XXXX:XXXX, where XXXX:XXXX is a segmented address, with the FCB filename stored at that address.
         */
        i = 0;
        while ((i = s.indexOf('^', i)) >= 0) {
            sAddr = s.substr(i+1, 9);
            dbgAddr = this.parseAddr(sAddr);
            if (dbgAddr) {
                this.incAddr(dbgAddr);
                sReplace = sAddr + ' "' + this.getSZ(dbgAddr, 11) + '"';
                s = s.replace('^' + sAddr, sReplace);
                i += sReplace.length;
                continue;
            }
            i++;
        }
        return s;
    }

    /**
     * message(sMessage, bitsMessage)
     *
     * @this {Debuggerx86}
     * @param {string} sMessage
     * @param {number} [bitsMessage]
     */
    message(sMessage, bitsMessage = 0)
    {
        if ((bitsMessage & MESSAGE.ADDR) && this.cpu) {
            let sAddress = StrLib.sprintf(" at %s (%%%X)$1",  this.toHexAddr(this.newAddr(this.cpu.getIP(), this.cpu.getCS())), this.cpu.regLIP);
            sMessage = sMessage.replace(/(\n?)$/, sAddress);
        }

        if (Component.testBits(this.bitsMessage, MESSAGE.BUFFER)) {
            this.aMessageBuffer.push(sMessage);
            return;
        }

        if (this.sMessagePrev && sMessage == this.sMessagePrev) return;
        this.sMessagePrev = sMessage;

        if (bitsMessage && Component.testBits(this.bitsMessage, MESSAGE.HALT)) {
            sMessage = sMessage.replace(/(\n?)$/, " (cpu halted)$1");
            this.stopCPU();
        }

        this.print(sMessage, bitsMessage); // + " (" + this.cpu.getCycles() + " cycles)"

        /**
         * We have no idea what the frequency of print() calls might be; all we know is that they easily
         * screw up the CPU's careful assumptions about cycles per burst.  So we call yieldCPU() after every
         * message, to effectively end the current burst and start fresh.
         *
         * TODO: See CPU.calcStartTime() for a discussion of why we might want to call yieldCPU() *before*
         * we display the message.
         */
        if (this.cpu) this.cpu.yieldCPU();
    }

    /**
     * messageInt(nInt, addr, fForce)
     *
     * @this {Debuggerx86}
     * @param {number} nInt
     * @param {number} addr (LIP after the "INT n" instruction has been fetched but not dispatched)
     * @param {boolean} [fForce] (true if the message should be forced)
     * @returns {boolean} (true if message generated (which in turn triggers addIntReturn() inside checkIntNotify()), false if not)
     */
    messageInt(nInt, addr, fForce)
    {
        let AH, DL;
        let fMessage = fForce;
        let nCategory;

        /**
         * We currently arrive here only because the CPU has already determined that INT messages are enabled,
         * or because the ChipSet's RTC interrupt handler has already determined that INT messages are enabled.
         *
         * But software interrupts are very common, so we generally require additional categories to be enabled;
         * unless the caller has set fForce, we check those additional categories now.
         */
        if (!fMessage) {
            /**
             * Display all software interrupts if CPU messages are enabled (and it's not an "annoying" interrupt);
             * note that in some cases, even "annoying" interrupts can be turned with an extra message category.
             */
            fMessage = this.messageEnabled(MESSAGE.CPU) && Debuggerx86.INT_ANNOYING.indexOf(nInt) < 0;
            if (!fMessage) {
                /**
                 * Alternatively, display this software interrupt if its corresponding message category is enabled.
                 */
                nCategory = Debuggerx86.INT_MESSAGES[nInt];
                if (nCategory) {
                    if (this.messageEnabled(nCategory)) {
                        fMessage = true;
                    } else {
                        /**
                         * Alternatively, display this FDC interrupt if HDC messages are enabled (since they share
                         * a common software interrupt).  Normally, an HDC BIOS will copy the original DISK (0x13)
                         * vector to the ALT_DISK (0x40) vector, but it's a nuisance having to check different
                         * interrupts in different configurations for the same frickin' functionality, so we don't.
                         */
                        fMessage = (nCategory == MESSAGE.FDC && this.messageEnabled(nCategory = MESSAGE.HDC));
                    }
                }
            }
        }
        if (fMessage) {
            AH = (this.cpu.regEAX >> 8) & 0xff;
            DL = this.cpu.regEDX & 0xff;
            if (nInt == Interrupts.DOS /* 0x21 */ && AH == 0x0b ||
                nCategory == MESSAGE.FDC && DL >= 0x80 || nCategory == MESSAGE.HDC && DL < 0x80) {
                fMessage = false;
            }
        }
        if (fMessage) {
            let aFuncs = Interrupts.FUNCS[nInt];
            let sFunc = (aFuncs && aFuncs[AH]) || "";
            if (sFunc) sFunc = this.replaceRegs(sFunc);
            /**
             * For display purposes only, rewind addr to the address of the responsible "INT n" instruction;
             * we know it's the two-byte "INT n" instruction because that's the only opcode handler that calls
             * checkIntNotify() at the moment.
             */
            addr -= 2;
            this.printf("INT %#04X: AH=%#04X at %s %s\n",  nInt, AH, this.toHexOffset(addr - this.cpu.segCS.base, this.cpu.getCS()), sFunc);
        }
        return fMessage;
    }

    /**
     * messageIntReturn(nInt, nLevel, nCycles)
     *
     * @this {Debuggerx86}
     * @param {number} nInt
     * @param {number} nLevel
     * @param {number} nCycles
     * @param {string} [sResult]
     */
    messageIntReturn(nInt, nLevel, nCycles, sResult)
    {
        this.printf("INT %#04X: C=%d%s (cycles=%d%s)\n", nInt, (this.cpu.getCF()? 1 : 0), (sResult || ""), nCycles, (nLevel? ",level=" + (nLevel+1) : ""));
    }

    /**
     * messageIO(component, port, bOut, addrFrom, name, bIn, bitsMessage)
     *
     * @this {Debuggerx86}
     * @param {Component} component
     * @param {number} port
     * @param {number} [bOut] if an output operation
     * @param {number} [addrFrom]
     * @param {string} [name] of the port, if any
     * @param {number} [bIn] is the input value, if known, on an input operation
     * @param {number} [bitsMessage] is zero or more Messages flag(s)
     */
    messageIO(component, port, bOut, addrFrom, name, bIn, bitsMessage)
    {
        /**
         * Add MESSAGE.PORT to the set of required message flags.
         */
        bitsMessage = Component.setBits(bitsMessage || 0, MESSAGE.PORT);
        /**
         * We don't want to see "unknown" I/O messages unless WARNING is enabled.
         */
        if (!name) bitsMessage = Component.setBits(bitsMessage, MESSAGE.WARNING);

        if (addrFrom == undefined || Component.testBits(this.bitsMessage, bitsMessage)) {
            let sFrom = "";
            if (addrFrom != undefined) {
                let selFrom = this.cpu.getCS();
                addrFrom -= this.cpu.segCS.base;
                sFrom = "at " + this.toHexOffset(addrFrom, selFrom);
            }
            if (bOut == undefined) {
                this.printf("%s.inPort(%#06X,%s): %#04X %s\n", component.idComponent, port, name || "unknown", bIn, sFrom);
            } else {
                this.printf("%s.outPort(%#06X,%s,%#04X) %s\n", component.idComponent, port, name || "unknown", bOut, sFrom);
            }
        }
    }

    /**
     * init()
     *
     * @this {Debuggerx86}
     */
    init()
    {
        this.printf("Type ? for help with PCx86 Debugger commands\n");
        this.updateStatus();
        if (this.sCommandsInit) {
            let sCommands = this.sCommandsInit;
            this.sCommandsInit = null;
            this.doCommands(sCommands);
        }
    }

    /**
     * historyInit(fQuiet)
     *
     * This function is intended to be called by the constructor, reset(), addBreakpoint(), findBreakpoint()
     * and any other function that changes the checksEnabled() criteria used to decide whether checkInstruction()
     * should be called.
     *
     * That is, if the history arrays need to be allocated and haven't already been allocated, then allocate them,
     * and if the arrays are no longer needed, then deallocate them.
     *
     * @this {Debuggerx86}
     * @param {boolean} [fQuiet]
     */
    historyInit(fQuiet)
    {
        let i;
        if (!this.checksEnabled()) {
            if (this.aOpcodeHistory && this.aOpcodeHistory.length && !fQuiet) {
                this.printf("history buffer freed\n");
            }
            this.iOpcodeHistory = 0;
            this.aOpcodeHistory = [];
            this.aaOpcodeCounts = [];
            return;
        }
        if (!this.aOpcodeHistory || !this.aOpcodeHistory.length) {
            this.aOpcodeHistory = new Array(Debuggerx86.HISTORY_LIMIT);
            for (i = 0; i < this.aOpcodeHistory.length; i++) {
                /**
                 * Preallocate dummy Addr (Array) objects in every history slot, so that
                 * checkInstruction() doesn't need to call newAddr() on every slot update.
                 */
                this.aOpcodeHistory[i] = this.newAddr();
            }
            this.iOpcodeHistory = 0;
            if (!fQuiet) {
                this.printf("history buffer allocated\n");
            }
        }
        if (!this.aaOpcodeCounts || !this.aaOpcodeCounts.length) {
            this.aaOpcodeCounts = new Array(256);
            for (i = 0; i < this.aaOpcodeCounts.length; i++) {
                this.aaOpcodeCounts[i] = [i, 0];
            }
        }
    }

    /**
     * startCPU(fUpdateFocus, fQuiet)
     *
     * @this {Debuggerx86}
     * @param {boolean} [fUpdateFocus]
     * @param {boolean} [fQuiet]
     * @returns {boolean} (true if run request successful, false if not)
     */
    startCPU(fUpdateFocus, fQuiet)
    {
        if (this.checkCPU(fQuiet)) {
            return this.cpu.startCPU(fUpdateFocus, fQuiet);
        }
        return false;
    }

    /**
     * stepCPU(nCycles, fRegs, fUpdateCPU)
     *
     * @this {Debuggerx86}
     * @param {number} nCycles (0 for one instruction without checking breakpoints)
     * @param {boolean} [fRegs] is true to display registers after step (default is false)
     * @param {boolean} [fUpdateCPU] is false to disable calls to updateCPU() (default is true)
     * @returns {boolean}
     */
    stepCPU(nCycles, fRegs, fUpdateCPU)
    {
        if (!this.checkCPU()) return false;

        this.nCycles = 0;
        let fCheck = !nCycles;
        do {
            if (fCheck) {
                /**
                 * When single-stepping, the CPU won't call checkInstruction(), which is good for
                 * avoiding breakpoints, but bad for instruction data collection if checks are enabled.
                 * So we call checkInstruction() ourselves.
                 */
                if (this.checksEnabled()) this.checkInstruction(this.cpu.regLIP, 0);
                fCheck = false;     // only check once per instruction
            }
            /**
             * For our typically tiny bursts (usually single instructions), mimic what runCPU() does.
             */
            try {
                let nCyclesStep = this.cpu.stepCPU(nCycles);
                if (nCyclesStep > 0) {
                    this.nCycles += nCyclesStep;
                    this.cpu.addCycles(nCyclesStep, true);
                    this.cpu.updateTimers(nCyclesStep);
                    this.cpu.updateChecksum(nCyclesStep);
                    this.cOpcodes++;
                }
            }
            catch(exception) {
                if (typeof exception != "number") {
                    let e = exception;
                    this.nCycles = 0;
                    this.cpu.setError(e.stack || e.message);
                }
            }
        } while (this.cpu.opFlags & X86.OPFLAG_PREFIXES);

        /**
         * Because we called cpu.stepCPU() and not cpu.startCPU(), we must nudge the cpu's update code,
         * and then update our own state.  Normally, the only time fUpdateCPU will be false is when doTrace()
         * is calling us in a loop, in which case it will perform its own updateCPU() when it's done.
         */
        if (fUpdateCPU !== false) this.cpu.updateCPU(true);

        this.updateStatus(fRegs || false);
        return (this.nCycles > 0);
    }

    /**
     * stopCPU()
     *
     * @this {Debuggerx86}
     * @param {boolean} [fComplete]
     * @returns {boolean}
     */
    stopCPU(fComplete)
    {
        return this.cpu && this.cpu.stopCPU(fComplete) || false;
    }

    /**
     * updateStatus(fRegs)
     *
     * @this {Debuggerx86}
     * @param {boolean} [fRegs] (default is true)
     */
    updateStatus(fRegs)
    {
        if (fRegs === undefined) fRegs = true;

        this.dbgAddrNextCode = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
        /**
         * this.nStep used to be a simple boolean, but now it's 0 (or undefined)
         * if inactive, 1 if stepping over an instruction without a register dump, or 2
         * if stepping over an instruction with a register dump.
         */
        if (!fRegs || this.nStep == 1) {
            this.doUnassemble();
        } else {
            this.doRegisters();
        }
    }

    /**
     * checkCPU(fQuiet)
     *
     * Make sure the CPU is ready (finished initializing), not busy (already running), and not in an error state.
     *
     * @this {Debuggerx86}
     * @param {boolean} [fQuiet]
     * @returns {boolean}
     */
    checkCPU(fQuiet)
    {
        if (!this.cpu || !this.cpu.isReady() || !this.cpu.isPowered() || this.cpu.isRunning()) {
            if (!fQuiet) this.printf("cpu busy or unavailable, command ignored\n");
            return false;
        }
        return !this.cpu.isError();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {Debuggerx86}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} (true if successful, false if failure)
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            /**
             * Because Debugger save/restore support is somewhat limited (and didn't always exist),
             * we deviate from the typical save/restore design pattern: instead of reset OR restore,
             * we always reset and then perform a (potentially limited) restore.
             */
            this.reset(true);

            // this.printf("%s\n", data? "resuming" : "powering up");

            if (data && this.restore) {
                if (!this.restore(data)) return false;
            }

            this.fpuActive = this.cpu.fpuActive;
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {Debuggerx86}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean}
     */
    powerDown(fSave, fShutdown)
    {
        if (fShutdown) this.printf("%s\n", fSave? "suspending" : "shutting down");
        return fSave? this.save() : true;
    }

    /**
     * reset(fQuiet)
     *
     * This is a notification handler, called by the Computer, to inform us of a reset.
     *
     * @this {Debuggerx86}
     * @param {boolean} fQuiet (true only when called from our own powerUp handler)
     */
    reset(fQuiet)
    {
        this.historyInit();
        this.cOpcodes = this.cOpcodesStart = 0;
        this.sMessagePrev = null;
        this.nCycles = 0;
        this.dbgAddrNextCode = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
        this.clearTempBreakpoint();
        if (!fQuiet && !this.flags.running) this.updateStatus();
    }

    /**
     * save()
     *
     * This implements (very rudimentary) save support for the Debugger component.
     *
     * @this {Debuggerx86}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.packAddr(this.dbgAddrNextCode));
        state.set(1, this.packAddr(this.dbgAddrNextData));
        state.set(2, this.packAddr(this.dbgAddrAssemble));
        state.set(3, [this.aPrevCmds, this.fAssemble, Component.setBits(this.bitsMessage, MESSAGE.BUFFER)]);
        state.set(4, this.aSymbolTable);
        state.set(5, [this.aBreakExec, this.aBreakRead, this.aBreakWrite]);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements (very rudimentary) restore support for the Debugger component.
     *
     * @this {Debuggerx86}
     * @param {Object} data
     * @returns {boolean} (true if successful, false if failure)
     */
    restore(data)
    {
        let i = 0;
        if (data[i]) this.dbgAddrNextCode = this.unpackAddr(data[i++]);
        /**
         * dbgAddrNextData wasn't saved until there were at least 6 elements, hence the check for data[5] instead of data[i]
         */
        if (data[5]) this.dbgAddrNextData = this.unpackAddr(data[i++]);
        if (data[i]) this.dbgAddrAssemble = this.unpackAddr(data[i++]);
        if (data[i]) {
            this.aPrevCmds = data[i][0];
            if (typeof this.aPrevCmds == "string") this.aPrevCmds = [this.aPrevCmds];
            this.fAssemble = data[i][1];
            let bitsMessage = data[i][2];
            /**
             * We ensure that we're restoring updated Messages flags, by verifying that MESSAGE.BUFFER was set by the save()
             * function; if so, we clear MESSAGE.BUFFER before restoring it (and yes, this means we'll never restore the BUFFER
             * setting, which is fine, and we'll also never restore any old Messages flags, which I doubt anyone will miss).
             */
            if (Component.testBits(bitsMessage, MESSAGE.BUFFER)) {
                bitsMessage = Component.clearBits(bitsMessage, MESSAGE.BUFFER);
                this.bitsMessage = Component.setBits(this.bitsMessage, bitsMessage);
            }
            i++;
        }
        if (data[i]) {
            this.aSymbolTable = data[i++];
        }
        if (data[i]) {
            this.restoreBreakpoints(this.aBreakExec, data[i][0]);
            this.restoreBreakpoints(this.aBreakRead, data[i][1]);
            this.restoreBreakpoints(this.aBreakWrite, data[i][2]);
        }
        return true;
    }

    /**
     * start(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has started.
     *
     * @this {Debuggerx86}
     * @param {number} ms
     * @param {number} nCycles
     */
    start(ms, nCycles)
    {
        this.flags.running = true;
        this.msStart = ms;
        this.nCyclesStart = nCycles;
        if (!this.nStep) {
            this.printf("running\n");
        }
        this.notifyEvent(DbgLib.EVENTS.EXIT, this.nStep);
    }

    /**
     * stop(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has now stopped.
     *
     * @this {Debuggerx86}
     * @param {number} ms
     * @param {number} nCycles
     */
    stop(ms, nCycles)
    {
        if (this.flags.running) {
            let nStep = this.nStep;
            this.flags.running = false;
            this.nCycles = nCycles - this.nCyclesStart;
            this.notifyEvent(DbgLib.EVENTS.ENTER, nStep);
            if (!nStep) {
                let sStopped = "stopped";
                if (this.nCycles) {
                    let msTotal = ms - this.msStart;
                    let nCyclesPerSecond = (msTotal > 0? Math.round(this.nCycles * 1000 / msTotal) : 0);
                    sStopped += " (";
                    if (this.checksEnabled()) {
                        sStopped += this.cOpcodes + " opcodes, ";
                        /**
                         * $ops displays progress by calculating cOpcodes - cOpcodesStart, so before
                         * zeroing cOpcodes, we should subtract cOpcodes from cOpcodesStart (since we're
                         * effectively subtracting cOpcodes from cOpcodes as well).
                         */
                        this.cOpcodesStart -= this.cOpcodes;
                        this.cOpcodes = 0;
                    }
                    sStopped += this.nCycles + " cycles, " + msTotal + " ms, " + nCyclesPerSecond + " hz)";
                    if (MAXDEBUG && this.chipset) {
                        let i, c, n;
                        for (i = 0; i < this.chipset.acInterrupts.length; i++) {
                            c = this.chipset.acInterrupts[i];
                            if (!c) continue;
                            n = c / Math.round(msTotal / 1000);
                            this.printf("IRQ%d: %d interrupts (%d per sec)\n", i, c, n);
                            this.chipset.acInterrupts[i] = 0;
                        }
                        for (i = 0; i < this.chipset.acTimersFired.length; i++) {
                            c = this.chipset.acTimersFired[i];
                            if (!c) continue;
                            n = c / Math.round(msTotal / 1000);
                            this.printf("TIMER%d: %d fires (%d per sec)\n", i, c, n);
                            this.chipset.acTimersFired[i] = 0;
                        }
                        n = 0;
                        for (i = 0; i < this.chipset.acTimer0Counts.length; i++) {
                            let a = this.chipset.acTimer0Counts[i];
                            n += a[0];
                            this.printf("TIMER0 update #%d: [%d,%d,%d]\n", i, a[0], a[1], a[2]);
                        }
                        this.chipset.acTimer0Counts = [];
                    }
                } else {
                    if (this.messageEnabled(MESSAGE.HALT)) {
                        /**
                         * It's possible the user is trying to 'g' past a fault that was blocked by helpCheckFault()
                         * for the Debugger's benefit; if so, it will continue to be blocked, so try displaying a helpful
                         * message (another helpful tip would be to simply turn off the "halt" message category).
                         */
                        sStopped += " (use the 't' command to execute blocked faults)";
                    }
                }
                this.printf("%s\n", sStopped);
            }
            this.updateStatus(true);
            this.updateFocus();
            this.clearTempBreakpoint(this.cpu.regLIP);
            this.notifyEvent(DbgLib.EVENTS.READY, nStep);
        }
    }

    /**
     * checksEnabled(fRelease)
     *
     * This "check" function is called by the CPU; we indicate whether or not every instruction needs to be checked.
     *
     * Originally, this returned true even when there were only read and/or write breakpoints, but those breakpoints
     * no longer require the intervention of checkInstruction(); the Bus component automatically swaps in/out appropriate
     * "checked" Memory access functions to deal with those breakpoints in the corresponding Memory blocks.  So I've
     * simplified the test below.
     *
     * @this {Debuggerx86}
     * @param {boolean} [fRelease] is true for release criteria only; default is false (any criteria)
     * @returns {boolean} (true if every instruction needs to pass through checkInstruction(), false if not)
     */
    checksEnabled(fRelease)
    {
        return ((MAXDEBUG && !fRelease)? true : (this.aBreakExec.length > 1 || this.aVectorBP.length > 0 || !!this.nBreakIns || this.messageEnabled(MESSAGE.INT) /* || this.aBreakRead.length > 1 || this.aBreakWrite.length > 1 */));
    }

    /**
     * checkInstruction(addr, nState)
     *
     * This "check" function is called by the CPU to inform us about the next instruction to be executed,
     * giving us an opportunity to look for "exec" breakpoints and update opcode frequencies and instruction history.
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @param {number} nState is < 0 if stepping, 0 if starting, or > 0 if running
     * @returns {boolean} (true if breakpoint hit, false if not)
     */
    checkInstruction(addr, nState)
    {
        let cpu = this.cpu;

        if (nState > 0) {
            if (this.nBreakIns && !--this.nBreakIns) {
                return true;
            }
            if (this.checkBreakpoint(addr, 1, this.aBreakExec)) {
                return true;
            }
            /**
             * Halt if running with interrupts disabled and IOPL < CPL, because that's likely an error.
             */
            if (MAXDEBUG && !(cpu.regPS & X86.PS.IF) && cpu.nIOPL < cpu.nCPL) {
                this.printf("interrupts disabled at IOPL %d and CPL %d\n", cpu.nIOPL, cpu.nCPL);
                return true;
            }
        }

        /**
         * The rest of the instruction tracking logic can only be performed if historyInit() has allocated the
         * necessary data structures.  Note that there is no explicit UI for enabling/disabling history, other than
         * adding/removing breakpoints, simply because it's breakpoints that trigger the call to checkInstruction();
         * well, OK, and a few other things now, like enabling MESSAGE.INT messages.
         */
        if (nState >= 0) {
            this.cOpcodes++;
            if (this.aaOpcodeCounts.length) {
                let bOpcode = cpu.probeAddr(addr);
                if (bOpcode != null) {
                    this.aaOpcodeCounts[bOpcode][1]++;
                    /**
                     * If any vector breakpoints are set AND we're not halting on vector breakpoints AND we
                     * did not just encounter an interrupt vector, then do NOT log the instruction.  Otherwise, log it.
                     */
                    let fLog = (!this.aVectorBP.length || this.vectorHalt || this.vectorTrace >= 0);

                    // if (cpu.getIP() == 0x3C0F && cpu.getCS() == 0x048F) fLog = true;

                    if (fLog) {

                        let dbgAddr = this.aOpcodeHistory[this.iOpcodeHistory];
                        this.setAddr(dbgAddr, cpu.getIP(), cpu.getCS());

                        /**
                         * This was added to collapse repeated instructions into a single entry in the history buffer.
                         */
                        let iPrevHistory = this.iOpcodeHistory? this.iOpcodeHistory - 1 : this.aOpcodeHistory.length - 1;
                        let dbgPrev = this.aOpcodeHistory[iPrevHistory];
                        if (dbgPrev.off == dbgAddr.off && dbgPrev.sel == dbgAddr.sel) {
                            this.iOpcodeHistory = iPrevHistory;
                            dbgAddr = dbgPrev;
                        }

                        dbgAddr.nCPUCycles = cpu.getCycles();

                        /**
                         * If vector tracing is enabled and we just encountered a vector, record some additional info.
                         */
                        if (this.aVectorBP.length && !this.vectorHalt && this.vectorTrace >= 0) {
                            dbgAddr.nDebugState = (cpu.regEAX & 0xffff) | (this.vectorTrace << 16);
                        }
                        /**
                         * For debugging timer issues, snap cycles remaining in the current burst and the state of TIMER0.
                         */
                        else if (this.chipset) {
                            let timer = this.chipset.aTimers[0];
                            dbgAddr.nDebugCycles = cpu.nStepCycles;
                            dbgAddr.nDebugState = timer.countCurrent[0] | (timer.countCurrent[1] << 8);
                        }
                        /**
                         * For debugging video timing (eg, retrace) issues, it's helpful to record the state of the Video
                         * component's countdown timer.  timerVideo will be set to null if there's no Video component or the
                         * timer doesn't exist, so findTimer() should be called at most once.
                         */
                        else if (this.video) {
                            if (this.timerVideo === undefined) {
                                this.timerVideo = cpu.findTimer(this.video.id);
                            }
                            if (this.timerVideo) {
                                dbgAddr.nDebugCycles = this.timerVideo[1];
                                dbgAddr.nDebugState = this.video.getRetraceBits(this.video.cardActive);
                            }
                        }
                        else {
                            delete dbgAddr.nDebugCycles;
                            delete dbgAddr.nDebugState;
                        }
                        if (++this.iOpcodeHistory == this.aOpcodeHistory.length) this.iOpcodeHistory = 0;
                    }
                }
            }
            this.vectorSkip = this.vectorTrace;
            this.vectorTrace = -1;
        }
        return false;
    }

    /**
     * checkMemoryRead(addr, nb)
     *
     * This "check" function is called by a Memory block to inform us that a memory read occurred, giving us an
     * opportunity to track the read if we want, and look for a matching "read" breakpoint, if any.
     *
     * In the "old days", it would be an error for this call to fail to find a matching Debugger breakpoint, but now
     * Memory blocks have no idea whether the Debugger or the machine's Debug register(s) triggered this "checked" read.
     *
     * If we return true, we "trump" the machine's Debug register(s); false allows normal Debug register processing.
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @param {number} [nb] (# of bytes; default is 1)
     * @returns {boolean} (true if breakpoint hit, false if not)
     */
    checkMemoryRead(addr, nb)
    {
        if (this.checkBreakpoint(addr, nb || 1, this.aBreakRead)) {
            this.stopCPU(true);
            return true;
        }
        return false;
    }

    /**
     * checkMemoryWrite(addr, nb)
     *
     * This "check" function is called by a Memory block to inform us that a memory write occurred, giving us an
     * opportunity to track the write if we want, and look for a matching "write" breakpoint, if any.
     *
     * In the "old days", it would be an error for this call to fail to find a matching Debugger breakpoint, but now
     * Memory blocks have no idea whether the Debugger or the machine's Debug register(s) triggered this "checked" write.
     *
     * If we return true, we "trump" the machine's Debug register(s); false allows normal Debug register processing.
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @param {number} [nb] (# of bytes; default is 1)
     * @returns {boolean} (true if breakpoint hit, false if not)
     */
    checkMemoryWrite(addr, nb)
    {
        if (this.checkBreakpoint(addr, nb || 1, this.aBreakWrite)) {
            this.stopCPU(true);
            return true;
        }
        return false;
    }

    /**
     * checkPortInput(port, size, data)
     *
     * This "check" function is called by the Bus component to inform us that port input occurred.
     *
     * @this {Debuggerx86}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @returns {boolean} (true if breakpoint hit, false if not)
     */
    checkPortInput(port, size, data)
    {
        /**
         * We trust that the Bus component won't call us unless we told it to, so we halt unconditionally.
         */
        this.printf("break on input from port %#06x: %x\n", port, data);
        this.stopCPU(true);
        return true;
    }

    /**
     * checkPortOutput(port, size, data)
     *
     * This "check" function is called by the Bus component to inform us that port output occurred.
     *
     * @this {Debuggerx86}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @returns {boolean} (true if breakpoint hit, false if not)
     */
    checkPortOutput(port, size, data)
    {
        /**
         * We trust that the Bus component won't call us unless we told it to, so we halt unconditionally.
         */
        this.printf("break on output to port %#06x: %x\n", port, data);
        this.stopCPU(true);
        return true;
    }

    /**
     * clearBreakpoints()
     *
     * @this {Debuggerx86}
     */
    clearBreakpoints()
    {
        let i, dbgAddr;
        this.aBreakExec = ["bp"];
        if (this.aBreakRead !== undefined) {
            for (i = 1; i < this.aBreakRead.length; i++) {
                dbgAddr = this.aBreakRead[i];
                this.cpu.removeMemBreak(this.getAddr(dbgAddr), false, dbgAddr.type == Debuggerx86.ADDRTYPE.PHYSICAL);
            }
        }
        this.aBreakRead = ["br"];
        if (this.aBreakWrite !== undefined) {
            for (i = 1; i < this.aBreakWrite.length; i++) {
                dbgAddr = this.aBreakWrite[i];
                this.cpu.removeMemBreak(this.getAddr(dbgAddr), true, dbgAddr.type == Debuggerx86.ADDRTYPE.PHYSICAL);
            }
        }
        this.aBreakWrite = ["bw"];
        /**
         * nSuppressBreaks ensures we can't get into an infinite loop where a breakpoint lookup requires
         * reading a segment descriptor via getSegment(), and that triggers more memory reads, which triggers
         * more breakpoint checks.
         */
        this.nSuppressBreaks = 0;
    }

    /**
     * addBreakpoint(aBreak, dbgAddr, fTempBreak, fQuiet)
     *
     * In case you haven't already figured this out, all our breakpoint commands use the address
     * to identify a breakpoint, not an incrementally assigned breakpoint index like other debuggers;
     * see doBreak() for details.
     *
     * This has a few implications, one being that you CANNOT set more than one kind of breakpoint
     * on a single address.  In practice, that's rarely a problem, because you can almost always set
     * a different breakpoint on a neighboring address.
     *
     * Also, there is one exception to the "one address, one breakpoint" rule, and that involves
     * temporary breakpoints (ie, one-time execution breakpoints that either a "p" or "g" command
     * may create to step over a chunk of code).  Those breakpoints automatically clear themselves,
     * so there usually isn't any need to refer to them using breakpoint commands.
     *
     * TODO: Consider supporting the more "traditional" breakpoint index syntax; the current
     * address-based syntax was implemented solely for expediency and consistency.  At the same time,
     * also consider a more WDEB386-like syntax, where "br" is used to set a variety of access-specific
     * breakpoints, using modifiers like "r1", "r2", "w1", "w2, etc.
     *
     * @this {Debuggerx86}
     * @param {Array} aBreak
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fTempBreak]
     * @param {boolean} [fQuiet]
     * @returns {boolean} (true if breakpoint added, false if already exists)
     */
    addBreakpoint(aBreak, dbgAddr, fTempBreak, fQuiet)
    {
        let fSuccess = true;

        // this.nSuppressBreaks++;

        /**
         * Instead of complaining that a breakpoint already exists (as we used to do), we now
         * allow breakpoints to be re-set; this makes it easier to update any commands that may
         * be associated with the breakpoint.
         *
         * The only exception: we DO allow a temporary breakpoint at an address where there may
         * already be a breakpoint, so that you can easily step ("p" or "g") over such addresses.
         */
        if (!fTempBreak) {
            this.findBreakpoint(aBreak, dbgAddr, true, false, true);
        }

        if (aBreak != this.aBreakExec) {
            let addr = this.getAddr(dbgAddr);
            if (addr === X86.ADDR_INVALID || !this.cpu.addMemBreak(addr, aBreak == this.aBreakWrite, dbgAddr.type == Debuggerx86.ADDRTYPE.PHYSICAL)) {
                this.printf("invalid address: %s\n", this.toHexAddr(dbgAddr));
                fSuccess = false;
            }
        }

        if (fSuccess) {
            aBreak.push(dbgAddr);
            if (fTempBreak) {
                /**
                 * Force temporary breakpoints to use their linear address, if one is available, by zapping
                 * the selector; this allows us to step over calls or interrupts that change the processor mode.
                 *
                 * TODO: Unfortunately, this will fail to "step" over a call in segment that moves during the call;
                 * consider alternatives.
                 */
                if (dbgAddr.addr != undefined) dbgAddr.sel = undefined;
                dbgAddr.fTempBreak = true;
            }
            else {
                if (!fQuiet) this.printBreakpoint(aBreak, aBreak.length-1, "set");
                this.historyInit();
            }
        }

        // this.nSuppressBreaks--;

        return fSuccess;
    }

    /**
     * findBreakpoint(aBreak, dbgAddr, fRemove, fTempBreak, fQuiet)
     *
     * @this {Debuggerx86}
     * @param {Array} aBreak
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fRemove]
     * @param {boolean} [fTempBreak]
     * @param {boolean} [fQuiet]
     * @returns {boolean} (true if found, false if not)
     */
    findBreakpoint(aBreak, dbgAddr, fRemove, fTempBreak, fQuiet)
    {
        let fFound = false;
        let addr = this.mapBreakpoint(this.getAddr(dbgAddr));
        for (let i = 1; i < aBreak.length; i++) {
            let dbgAddrBreak = aBreak[i];
            if (addr !== X86.ADDR_INVALID && addr == this.mapBreakpoint(this.getAddr(dbgAddrBreak)) ||
                addr === X86.ADDR_INVALID && dbgAddr.sel == dbgAddrBreak.sel && dbgAddr.off == dbgAddrBreak.off) {
                if (!fTempBreak || dbgAddrBreak.fTempBreak) {
                    fFound = true;
                    if (fRemove) {
                        if (!dbgAddrBreak.fTempBreak && !fQuiet) {
                            this.printBreakpoint(aBreak, i, "cleared");
                        }
                        aBreak.splice(i, 1);
                        if (aBreak != this.aBreakExec) {
                            this.cpu.removeMemBreak(addr, aBreak == this.aBreakWrite, dbgAddrBreak.type == Debuggerx86.ADDRTYPE.PHYSICAL);
                        }
                        /**
                         * We'll mirror the logic in addBreakpoint() and leave the history buffer alone if this
                         * was a temporary breakpoint.
                         */
                        if (!dbgAddrBreak.fTempBreak) {
                            this.historyInit();
                        }
                        break;
                    }
                    if (!fQuiet) this.printBreakpoint(aBreak, i, "exists");
                    break;
                }
            }
        }
        return fFound;
    }

    /**
     * listBreakpoints(aBreak)
     *
     * @this {Debuggerx86}
     * @param {Array} aBreak
     * @returns {number} (of breakpoints listed, 0 if none)
     */
    listBreakpoints(aBreak)
    {
        for (let i = 1; i < aBreak.length; i++) {
            this.printBreakpoint(aBreak, i);
        }
        return aBreak.length - 1;
    }

    /**
     * printBreakpoint(aBreak, i, sAction)
     *
     * TODO: We may need to start printing linear addresses also (if any), because segmented address can be ambiguous.
     *
     * @this {Debuggerx86}
     * @param {Array} aBreak
     * @param {number} i
     * @param {string} [sAction]
     */
    printBreakpoint(aBreak, i, sAction)
    {
        let dbgAddr = aBreak[i];
        this.printf("%s %s%s\n", aBreak[0], this.toHexAddr(dbgAddr), (sAction? (' ' + sAction) : (dbgAddr.sCmd? (' "' + dbgAddr.sCmd + '"') : '')));
    }

    /**
     * restoreBreakpoints(aBreak, aDbgAddr)
     *
     * @this {Debuggerx86}
     * @param {Array} aBreak
     * @param {Array} aDbgAddr
     */
    restoreBreakpoints(aBreak, aDbgAddr)
    {
        if (aDbgAddr[0] != aBreak[0]) return;
        for (let i = 1; i < aDbgAddr.length; i++) {
            let dbgAddr = aDbgAddr[i];
            this.addBreakpoint(aBreak, dbgAddr, dbgAddr.fTempBreak, true);
        }
    }

    /**
     * setTempBreakpoint(dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr of new temp breakpoint
     */
    setTempBreakpoint(dbgAddr)
    {
        this.addBreakpoint(this.aBreakExec, dbgAddr, true);
    }

    /**
     * clearTempBreakpoint(addr)
     *
     * @this {Debuggerx86}
     * @param {number|undefined} [addr] clear all temp breakpoints if no address specified
     */
    clearTempBreakpoint(addr)
    {
        if (addr !== undefined) {
            this.checkBreakpoint(addr, 1, this.aBreakExec, true);
            this.nStep = 0;
        } else {
            for (let i = 1; i < this.aBreakExec.length; i++) {
                let dbgAddrBreak = this.aBreakExec[i];
                if (dbgAddrBreak.fTempBreak) {
                    if (!this.findBreakpoint(this.aBreakExec, dbgAddrBreak, true, true)) break;
                    i = 0;
                }
            }
        }
    }

    /**
     * mapBreakpoint(addr)
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @returns {number}
     */
    mapBreakpoint(addr)
    {
        /**
         * Map addresses in the top 64Kb at the top of the address space (assuming either a 16Mb or 4Gb
         * address space) to the top of the 1Mb range.
         *
         * The fact that those two 64Kb regions are aliases of each other on an 80286 is a pain in the BUTT,
         * because any CS-based breakpoint you set immediately after a CPU reset will have a physical address
         * in the top 16Mb, yet after the first inter-segment JMP, you will be running in the first 1Mb.
         */
        if (addr !== X86.ADDR_INVALID) {
            let mask = (this.maskAddr & ~0xffff);
            if ((addr & mask) == mask) addr &= 0x000fffff;
        }
        return addr;
    }

    /**
     * checkBreakpoint(addr, nb, aBreak, fTempBreak)
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @param {number} nb (# of bytes)
     * @param {Array} aBreak
     * @param {boolean} [fTempBreak]
     * @returns {boolean} (true if breakpoint has been hit, false if not)
     */
    checkBreakpoint(addr, nb, aBreak, fTempBreak)
    {
        /**
         * Time to check for execution breakpoints; note that this should be done BEFORE updating frequency
         * or history data (see checkInstruction), since we might not actually execute the current instruction.
         */
        let fBreak = false;

        if (!this.nSuppressBreaks++) {

            addr = this.mapBreakpoint(addr);

            /**
             * As discussed in opINT3(), I decided to check for INT3 instructions here: we'll tell the CPU to
             * stop on INT3 whenever both the INT and HALT message bits are set; a simple "g" command allows you
             * to continue.
             */
            if (this.messageEnabled(MESSAGE.INT + MESSAGE.HALT)) {
                if (this.cpu.probeAddr(addr) == X86.OPCODE.INT3) {
                    fBreak = true;
                }
            }

            if (!fBreak && this.checkVectorAddr(addr)) {
                fBreak = true;
            }

            for (let i = 1; !fBreak && i < aBreak.length; i++) {

                let dbgAddrBreak = aBreak[i];

                if (fTempBreak && !dbgAddrBreak.fTempBreak) continue;

                /**
                 * We need to zap the linear address field of the breakpoint address before
                 * calling getAddr(), to force it to recalculate the linear address every time,
                 * unless this is a breakpoint on a linear address (as indicated by a null sel).
                 */
                if (dbgAddrBreak.sel != null) dbgAddrBreak.addr = undefined;

                /**
                 * We used to calculate the linear address of the breakpoint at the time the
                 * breakpoint was added, so that a breakpoint set in one mode (eg, in real-mode)
                 * would still work as intended if the mode changed later (eg, to protected-mode).
                 *
                 * However, that created difficulties setting protected-mode breakpoints in segments
                 * that might not be defined yet, or that could move in physical memory.
                 *
                 * If you want to create a real-mode breakpoint that will break regardless of mode,
                 * use the physical address of the real-mode memory location instead.
                 */
                let addrBreak = this.mapBreakpoint(this.getAddr(dbgAddrBreak));
                for (let n = 0; n < nb; n++) {
                    if (addr + n == addrBreak) {
                        let a;
                        fBreak = true;
                        if (dbgAddrBreak.fTempBreak) {
                            this.findBreakpoint(aBreak, dbgAddrBreak, true, true);
                            /**
                             * If nDebugState is set, then we're dealing with a VxD service breakpoint.
                             */
                            if (dbgAddrBreak.nDebugState) {
                                this.incAddr(dbgAddrBreak, 2);
                                this.addVxDSymbol(dbgAddrBreak.nDebugState, dbgAddrBreak, this.fWinDbg);
                                fBreak = false;
                            }
                            fTempBreak = true;
                        }
                        if ((a = dbgAddrBreak.aCmds)) {
                            /**
                             * When one or more commands are attached to a breakpoint, we don't halt by default.
                             * Instead, we set fBreak to true only if, at the completion of all the commands, the
                             * CPU is halted; in other words, you should include "h" as one of the breakpoint commands
                             * if you want the breakpoint to stop execution.
                             *
                             * Another useful command is "if", which will return false if the expression is false,
                             * at which point we'll jump ahead to the next "else" command, and if there isn't an "else",
                             * we abort.
                             */
                            fBreak = false;
                            for (let j = 0; j < a.length; j++) {
                                if (!this.doCommand(a[j], true)) {
                                    if (a[j].indexOf("if")) {
                                        fBreak = true;          // the failed command wasn't "if", so abort
                                        break;
                                    }
                                    let k = j + 1;
                                    for (; k < a.length; k++) {
                                        if (!a[k].indexOf("else")) break;
                                        j++;
                                    }
                                    if (k == a.length) {        // couldn't find an "else" after the "if", so abort
                                        fBreak = true;
                                        break;
                                    }
                                    /**
                                     * If we're still here, we'll execute the "else" command (which is just a no-op),
                                     * followed by any remaining commands.
                                     */
                                }
                            }
                            if (!this.cpu.isRunning()) fBreak = true;
                        }
                        if (fBreak) {
                            if (!fTempBreak) this.printBreakpoint(aBreak, i, "hit");
                            break;
                        }
                    }
                }
            }
        }
        this.nSuppressBreaks--;
        return fBreak;
    }

    /**
     * addVectorBP(vector, chType)
     *
     * @this {Debuggerx86}
     * @param {number} vector
     * @param {string} chType
     * @returns {boolean} (true if breakpoint added, false if error)
     */
    addVectorBP(vector, chType)
    {
        let i = this.findVectorBP(vector);
        if (i < 0) {
            let dbgAddr;
            let type = (chType == '#' || !chType && this.getCPUMode())? Debuggerx86.ADDRTYPE.PROT : Debuggerx86.ADDRTYPE.REAL;
            if (type != Debuggerx86.ADDRTYPE.PROT) {
                let addr = this.cpu.getLong(vector << 2);
                let off = addr & 0xffff;
                let sel = (addr >> 16) & 0xffff;
                addr = (sel << 4) + off;
                dbgAddr = this.newAddr(off, sel, addr, type);
            }
            this.aVectorBP.push({vector, type, dbgAddr});
            this.listVectorBP(vector, true);
            this.historyInit();
            return true;
        }
        return false;
    }

    /**
     * checkVectorBP(vector, nBytes, fProt)
     *
     * @this {Debuggerx86}
     * @param {number} vector
     * @param {number} nBytes
     * @param {boolean} fProt (true if protected-mode interrupt)
     * @returns {boolean}
     */
    checkVectorBP(vector, nBytes, fProt)
    {
        if (this.vectorSkip < 0) {
            this.vectorTrace = vector;
            if (vector == Interrupts.VxD.VECTOR && fProt && this.fWinDbg !== undefined) {
                let dbgAddr = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
                /**
                 * Since nDebugState is normally only used by addresses stored in the history buffer
                 * (ie, not for breakpoint addresses), we are now going to make an exception to that rule
                 * and store the VxD service ID in nDebugState.  checkBreakpoint() will detect this and
                 * call addVxDSymbol() accordingly, since the service call should be "fixed up" when the
                 * the breakpoint is hit (ie, when the service call is re-executed).
                 */
                dbgAddr.nDebugState = this.getLong(dbgAddr);
                this.incAddr(dbgAddr, -2);
                this.setTempBreakpoint(dbgAddr);
                /**
                 * We also set the CPU's debugCheck flag, to guarantee that the CPU will start calling
                 * checkInstruction(); note that we don't bother with a corresponding setDebugCheck(false)
                 * when the last VxD breakpoint is removed, because debugCheck is automatically updated
                 * at the start of every burst.
                 */
                this.cpu.setDebugCheck(true);
            }
            if (this.vectorHalt) {
                let i = this.findVectorBP(vector);
                if (i >= 0) {
                    let vbp = this.aVectorBP[i];
                    if (fProt == (vbp.type == Debuggerx86.ADDRTYPE.PROT)) {
                        this.printf("break on vector %02X\n", vector);
                        this.stopCPU();
                        if (nBytes) {
                            this.cpu.setIP(this.cpu.getIP() - nBytes);
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    /**
     * checkVectorAddr(addr)
     *
     * @this {Debuggerx86}
     * @param {number} addr
     * @returns {boolean}
     */
    checkVectorAddr(addr)
    {
        if (this.vectorSkip < 0) {
            for (let i = 0; i < this.aVectorBP.length; i++) {
                let dbgAddr = this.aVectorBP[i].dbgAddr;
                if (dbgAddr && dbgAddr.addr == addr) {
                    this.vectorTrace = this.aVectorBP[i].vector;
                    if (this.vectorHalt) {
                        this.printf("break on vector %02X\n", this.vectorTrace);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * findVectorBP(vector)
     *
     * @this {Debuggerx86}
     * @param {number} vector
     * @returns {number}
     */
    findVectorBP(vector)
    {
        for (let i = 0; i < this.aVectorBP.length; i++) {
            if (this.aVectorBP[i].vector == vector) {
                return i;
            }
        }
        return -1;
    }

    /**
     * listVectorBP(vector, enabled)
     *
     * @this {Debuggerx86}
     * @param {number} [vector]
     * @param {boolean} [enabled]
     */
    listVectorBP(vector, enabled = true)
    {
        let i;
        for (i = 0; i < this.aVectorBP.length; i++) {
            let vbp = this.aVectorBP[i];
            if (vector == undefined || vbp.vector == vector) {
                let s = (enabled? "enabled" : "disabled");
                if (vbp.type == Debuggerx86.ADDRTYPE.PROT) {
                    this.printf("vector #%02X %s\n", vbp.vector, s);
                } else {
                    this.printf("vector &%02X %s (%04X:%04X)\n", vbp.vector, s, vbp.dbgAddr.sel, vbp.dbgAddr.off);
                }
            }
        }
        if (!i) {
            this.printf("no vector breakpoints\n");
        }
    }

    /**
     * removeVectorBP(vector)
     *
     * @this {Debuggerx86}
     * @param {number} vector
     * @returns {boolean} (true if breakpoint removed, false if error)
     */
    removeVectorBP(vector)
    {
        let i = this.findVectorBP(vector);
        if (i >= 0) {
            this.listVectorBP(vector, false);
            this.aVectorBP.splice(i, 1);
            this.historyInit();
            return true;
        }
        return false;
    }

    /**
     * getInstruction(dbgAddr, sComment, nSequence)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {string} [sComment] is an associated comment
     * @param {number} [nSequence] is an associated sequence number, -1 or undefined if none
     * @returns {string} (and dbgAddr is updated to the next instruction)
     */
    getInstruction(dbgAddr, sComment, nSequence)
    {
        let bModRM = -1;
        let asOpcodes = Debuggerx86.INS_NAMES;
        let dbgAddrIns = this.newAddr(dbgAddr.off, dbgAddr.sel, dbgAddr.addr, dbgAddr.type);

        /**
         * Incorporate segment, operand size, and address size overrides into the current instruction.
         *
         * Note that redundant prefixes must be ignored;  see opOS() and opAS() for details.  We limit the
         * total number of overrides to something reasonable (ie, 8).
         */
        let cMaxOverrides = 8;
        let fDataPrefix = false, fAddrPrefix = false;
        let bOpcode, aOpDesc, iIns, sPrefix = "", sSegment = "";

        do {
            bOpcode = this.getByte(dbgAddr, 1);
            aOpDesc = this.aaOpDescs[bOpcode];
            iIns = aOpDesc[0];
            let type = aOpDesc[1];
            if (type == Debuggerx86.TYPE_PREFIX) {
                if (bOpcode >= X86.OPCODE.LOCK) {
                    sPrefix = asOpcodes[iIns];
                } else {
                    sSegment = asOpcodes[iIns]; // eg, ES:, CS:, SS:, DS:
                }
            }
            else if (type == (Debuggerx86.TYPE_PREFIX | Debuggerx86.TYPE_80386)) {
                if (this.cpu.model < X86.MODEL_80386) break;
                if (bOpcode == X86.OPCODE.OS) {
                    if (!fDataPrefix) {
                        dbgAddr.fData32 = !dbgAddr.fData32;
                        fDataPrefix = true;
                    }
                } else if (bOpcode == X86.OPCODE.AS) {
                    if (!fAddrPrefix) {
                        dbgAddr.fAddr32 = !dbgAddr.fAddr32;
                        fAddrPrefix = true;
                    }
                } else {
                    sSegment = asOpcodes[iIns]; // eg, FS:, GS:
                }
            } else {
                break;
            }
        } while (cMaxOverrides--);

        if (iIns == Debuggerx86.INS.OP0F) {
            let b = this.getByte(dbgAddr, 1);
            aOpDesc = Debuggerx86.aaOp0FDescs[b] || Debuggerx86.aOpDescUndefined;
            bOpcode |= (b << 8);
            iIns = aOpDesc[0];
        }

        if (iIns == Debuggerx86.INS.ESC) {
            bModRM = this.getByte(dbgAddr, 1);
            let aOpFPUDesc = this.getFPUInstruction(bOpcode, bModRM);
            if (aOpFPUDesc) {
                asOpcodes = Debuggerx86.FINS_NAMES;
                aOpDesc = aOpFPUDesc;
                iIns = aOpDesc[0];
            }
        }

        if (iIns >= asOpcodes.length) {
            bModRM = this.getByte(dbgAddr, 1);
            aOpDesc = Debuggerx86.aaGrpDescs[iIns - asOpcodes.length][(bModRM >> 3) & 0x7];
            iIns = aOpDesc[0];
        }

        let sOpcode = asOpcodes[iIns];
        let cOperands = aOpDesc.length - 1;
        let sOperands = "";

        if (dbgAddr.fData32) {
            if (iIns == Debuggerx86.INS.CBW) {
                sOpcode = "CWDE";       // sign-extend AX into EAX, instead of AL into AX
            }
            else if (iIns == Debuggerx86.INS.CWD) {
                sOpcode = "CDQ";        // sign-extend EAX into EDX:EAX, instead of AX into DX:AX
            }
            else if (iIns >= Debuggerx86.INS.POPA && iIns <= Debuggerx86.INS.PUSHA) {
                sOpcode += 'D';         // transform POPA/POPF/PUSHF/PUSHA to POPAD/POPFD/PUSHFD/PUSHAD as appropriate
            }
        }

        if (this.isStringIns(bOpcode)) {
            cOperands = 0;              // suppress operands for string instructions, and add 'D' suffix as appropriate
            if (dbgAddr.fData32 && sOpcode.slice(-1) == 'W') sOpcode = sOpcode.slice(0, -1) + 'D';
        }

        let typeCPU = -1;
        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let disp, off, cch;
            let sOperand = "";
            let type = aOpDesc[iOperand];
            if (type === undefined) continue;

            if (typeCPU < 0) typeCPU = type >> Debuggerx86.TYPE_CPU_SHIFT;

            if (iIns == Debuggerx86.INS.LOADALL) {
                if (typeCPU == Debuggerx86.CPU_80286) {
                    sOperands = "[%800]";
                } else if (typeCPU == Debuggerx86.CPU_80386) {
                    /**
                     * NOTE: The 80386 LOADALL documentation, such as it is, doesn't suggest that segment
                     * overrides are allowed, but then again, it doesn't say they're not; we'll disassemble
                     * it as is, because chances are all legitimate uses of LOADALL in the known universe
                     * don't use an override, and if any do, then presumably that's because it works (or is
                     * ignored).
                     */
                    sOperands = (sSegment || "ES:") + "[" + (dbgAddr.fAddr32? 'E':'') + "DI]";
                }
            }

            let typeSize = type & Debuggerx86.TYPE_SIZE;
            if (typeSize == Debuggerx86.TYPE_NONE) {
                continue;
            }
            let typeMode = type & Debuggerx86.TYPE_MODE;
            if (typeMode >= Debuggerx86.TYPE_MODRM) {
                if (bModRM < 0) {
                    bModRM = this.getByte(dbgAddr, 1);
                }
                if (typeMode < Debuggerx86.TYPE_MODREG) {
                    /**
                     * This test also encompasses TYPE_MODMEM, which is basically the inverse of the case
                     * below (ie, only Mod values *other* than 11 are allowed); however, I believe that in
                     * some cases that's merely a convention, and that if you try to execute an instruction
                     * like "LEA AX,BX", it will actually do something (on some if not all processors), so
                     * there's probably some diagnostic value in allowing those cases to be disassembled.
                     */
                    sOperand = this.getModRMOperand(sOpcode, sSegment, bModRM, type, cOperands, dbgAddr);
                }
                else if (typeMode == Debuggerx86.TYPE_MODREG) {
                    /**
                     * TYPE_MODREG instructions assume that Mod is 11 (only certain early 80486 steppings
                     * actually *required* that Mod contain 11) and always treat RM as a register (which we
                     * could also simulate by setting Mod to 11 and letting getModRMOperand() do its thing).
                     */
                    sOperand = this.getRegOperand(bModRM & 0x7, type, dbgAddr);
                }
                else {
                    /**
                     * All remaining cases are register-based (eg, TYPE_REG); getRegOperand() will figure out which.
                     */
                    sOperand = this.getRegOperand((bModRM >> 3) & 0x7, type, dbgAddr);
                }
            }
            else if (typeMode == Debuggerx86.TYPE_ONE) {
                sOperand = '1';
            }
            else if (typeMode == Debuggerx86.TYPE_IMM) {
                sOperand = this.getImmOperand(type, dbgAddr);
            }
            else if (typeMode == Debuggerx86.TYPE_IMMOFF) {
                if (!dbgAddr.fAddr32) {
                    cch = 4;
                    off = this.getShort(dbgAddr, 2);
                } else {
                    cch = 8;
                    off = this.getLong(dbgAddr, 4);
                }
                sOperand = sSegment + '[' + StrLib.toHex(off, cch) + ']';
            }
            else if (typeMode == Debuggerx86.TYPE_IMMREL) {
                if (typeSize == Debuggerx86.TYPE_BYTE) {
                    disp = ((this.getByte(dbgAddr, 1) << 24) >> 24);
                }
                else {
                    disp = this.getWord(dbgAddr, true);
                }
                off = (dbgAddr.off + disp) & (dbgAddr.fData32? -1 : 0xffff);
                sOperand = StrLib.toHex(off, dbgAddr.fData32? 8: 4);
                let aSymbol = this.findSymbol(this.newAddr(off, dbgAddr.sel));
                if (aSymbol[0]) sOperand += " (" + aSymbol[0] + ")";
            }
            else if (typeMode == Debuggerx86.TYPE_IMPREG) {
                if (typeSize == Debuggerx86.TYPE_ST) {
                    sOperand = "ST";
                } else if (typeSize == Debuggerx86.TYPE_STREG) {
                    sOperand = "ST(" + (bModRM & 0x7) + ")";
                } else {
                    sOperand = this.getRegOperand((type & Debuggerx86.TYPE_IREG) >> 8, type, dbgAddr);
                }
            }
            else if (typeMode == Debuggerx86.TYPE_IMPSEG) {
                sOperand = this.getRegOperand((type & Debuggerx86.TYPE_IREG) >> 8, Debuggerx86.TYPE_SEGREG, dbgAddr);
            }
            else if (typeMode == Debuggerx86.TYPE_DSSI) {
                sOperand = (sSegment || "DS:") + "[SI]";
            }
            else if (typeMode == Debuggerx86.TYPE_ESDI) {
                sOperand = (sSegment || "ES:") + "[DI]";
            }
            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }
            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let sBytes = "";
        let sLine = this.toHexAddr(dbgAddrIns) + ' ';
        if (dbgAddrIns.addr !== X86.ADDR_INVALID && dbgAddr.addr !== X86.ADDR_INVALID) {
            do {
                sBytes += StrLib.toHex(this.getByte(dbgAddrIns, 1), 2);
                if (dbgAddrIns.addr === X86.ADDR_INVALID || dbgAddrIns.addr == undefined) break;
            } while (dbgAddrIns.addr != dbgAddr.addr);
        }

        sLine += StrLib.pad(sBytes, dbgAddrIns.fAddr32? -20 : -16) + ' ';

        if (sPrefix.indexOf("REP") == 0) {
            /**
             * For MOVS, STOS, OUTS, INS (and perhaps also LODS, although that doesn't seem useful), REPZ (0xF3) becomes
             * REP, because the Z flag is ignored.  And apparently, the same is true for REPNZ (0xF2); ie, either prefix can
             * be used.  I considered leaving REPNZ alone, to highlight the uncommon use of that prefix with those instructions,
             * but it doesn't seem that interesting.
             *
             * So, unless the instruction is CMPS or SCAS, just display a simple REP prefix.
             */
            if (bOpcode != X86.OPCODE.CMPSB && bOpcode != X86.OPCODE.CMPSW && bOpcode != X86.OPCODE.SCASB && bOpcode != X86.OPCODE.SCASW) {
                sPrefix = "REP";
            }
        }
        if (sPrefix) {
            sOperands = sOpcode + ' ' + sOperands;
            sOpcode = sPrefix;
        }

        sLine += StrLib.pad(sOpcode, -8);
        if (sOperands) sLine += ' ' + sOperands;

        if (this.cpu.model < Debuggerx86.CPUS[typeCPU]) {
            sComment = Debuggerx86.CPUS[typeCPU] + " CPU only";
        }

        if (sComment) {
            sLine = StrLib.pad(sLine, dbgAddrIns.fAddr32? -74 : -62) + ';' + sComment;
            if (!this.cpu.flags.checksum) {
                sLine += (nSequence >= 0? '=' + nSequence.toString() : "");
            } else {
                let nCycles = this.cpu.getCycles();
                sLine += "cycles=" + nCycles.toString() + " cs=" + StrLib.toHex(this.cpu.nChecksum);
            }
        }

        this.initAddrSize(dbgAddr);
        return sLine;
    }

    /**
     * getFPUInstruction(bOpcode, bModRM)
     *
     * @this {Debuggerx86}
     * @param {number} bOpcode
     * @param {number} bModRM
     * @returns {Array|null} (FPU instruction group, or null if none)
     */
    getFPUInstruction(bOpcode, bModRM)
    {
        let aOpDesc = null;

        let mod = (bModRM >> 6) & 0x3;
        let reg = (bModRM >> 3) & 0x7;
        let r_m = (bModRM & 0x7);

        /**
         * Similar to how opFPU() decodes FPU instructions, we combine mod and reg into one
         * decodable value: put mod in the high nibble and reg in the low nibble, after first
         * collapsing all mod values < 3 to zero.
         */
        let modReg = (mod < 3? 0 : 0x30) + reg;

        /**
         * All values >= 0x34 imply mod == 3 and reg >= 4, so now we shift reg into the high
         * nibble and r_m into the low, yielding values >= 0x40.
         */
        if ((bOpcode == X86.OPCODE.ESC1 || bOpcode == X86.OPCODE.ESC3) && modReg >= 0x34) {
            modReg = (reg << 4) | r_m;
        }

        let aaOpDesc = Debuggerx86.aaaOpFPUDescs[bOpcode];
        if (aaOpDesc) aOpDesc = aaOpDesc[modReg];

        return aOpDesc;
    }

    /**
     * getImmOperand(type, dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {number} type
     * @param {DbgAddrx86} dbgAddr
     * @returns {string} (operand)
     */
    getImmOperand(type, dbgAddr)
    {
        let aSymbol;
        let sOperand = ' ';
        let typeSize = type & Debuggerx86.TYPE_SIZE;

        switch (typeSize) {
        case Debuggerx86.TYPE_BYTE:
            /**
             * There's the occasional immediate byte we don't need to display (eg, the 0x0A
             * following an AAM or AAD instruction), so we suppress the byte if it lacks a TYPE_IN
             * or TYPE_OUT designation (and TYPE_BOTH, as the name implies, includes both).
             */
            if (type & Debuggerx86.TYPE_BOTH) {
                sOperand = StrLib.toHex(this.getByte(dbgAddr, 1), 2);
            }
            break;
        case Debuggerx86.TYPE_SBYTE:
            sOperand = StrLib.toHex((this.getByte(dbgAddr, 1) << 24) >> 24);
            break;
        case Debuggerx86.TYPE_WORD:
            if (dbgAddr.fData32) {
                sOperand = StrLib.toHex(this.getLong(dbgAddr, 4), 8);
                break;
            }
            /* falls through */
        case Debuggerx86.TYPE_SHORT:
            sOperand = StrLib.toHex(this.getShort(dbgAddr, 2), 4);
            break;
        case Debuggerx86.TYPE_FARP:
            dbgAddr = this.newAddr(this.getWord(dbgAddr, true), this.getShort(dbgAddr, 2), undefined, dbgAddr.type, dbgAddr.fData32, dbgAddr.fAddr32);
            sOperand = this.toHexAddr(dbgAddr);
            aSymbol = this.findSymbol(dbgAddr);
            if (aSymbol[0]) sOperand += " (" + aSymbol[0] + ")";
            break;
        default:
            sOperand = "imm(" + StrLib.toHexWord(type) + ')';
            break;
        }
        return sOperand;
    }

    /**
     * getRegOperand(bReg, type, dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {number} bReg
     * @param {number} type
     * @param {DbgAddrx86} dbgAddr
     * @returns {string} (operand)
     */
    getRegOperand(bReg, type, dbgAddr)
    {
        let typeMode = type & Debuggerx86.TYPE_MODE;
        if (typeMode == Debuggerx86.TYPE_SEGREG) {
            if (bReg > Debuggerx86.REG_GS ||
                bReg >= Debuggerx86.REG_FS && this.cpu.model < X86.MODEL_80386) return "??";
            bReg += Debuggerx86.REG_SEG;
        }
        else if (typeMode == Debuggerx86.TYPE_CTLREG) {
            bReg += Debuggerx86.REG_CR0;
        }
        else if (typeMode == Debuggerx86.TYPE_DBGREG) {
            bReg += Debuggerx86.REG_DR0;
        }
        else if (typeMode == Debuggerx86.TYPE_TSTREG) {
            bReg += Debuggerx86.REG_TR0;
        }
        else {
            let typeSize = type & Debuggerx86.TYPE_SIZE;
            if (typeSize >= Debuggerx86.TYPE_SHORT) {
                if (bReg < Debuggerx86.REG_AX) {
                    bReg += Debuggerx86.REG_AX - Debuggerx86.REG_AL;
                }
                if (typeSize == Debuggerx86.TYPE_LONG || typeSize == Debuggerx86.TYPE_WORD && dbgAddr.fData32) {
                    bReg += Debuggerx86.REG_EAX - Debuggerx86.REG_AX;
                }
            }
        }
        return Debuggerx86.REGS[bReg];
    }

    /**
     * getSIBOperand(bMod, dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {number} bMod
     * @param {DbgAddrx86} dbgAddr
     * @returns {string} (operand)
     */
    getSIBOperand(bMod, dbgAddr)
    {
        let bSIB = this.getByte(dbgAddr, 1);
        let bScale = bSIB >> 6;
        let bIndex = (bSIB >> 3) & 0x7;
        let bBase = bSIB & 0x7;
        let sOperand = "";
        /**
         * Unless bMod is zero AND bBase is 5, there's always a base register.
         */
        if (bMod || bBase != 5) {
            sOperand = Debuggerx86.RMS[bBase + 8];
        }
        if (bIndex != 4) {
            if (sOperand) sOperand += '+';
            sOperand += Debuggerx86.RMS[bIndex + 8];
            if (bScale) sOperand += '*' + (0x1 << bScale);
        }
        /**
         * If bMod is zero AND bBase is 5, there's a 32-bit displacement instead of a base register.
         */
        if (!bMod && bBase == 5) {
            if (sOperand) sOperand += '+';
            sOperand += StrLib.toHex(this.getLong(dbgAddr, 4));
        }
        return sOperand;
    }

    /**
     * getModRMOperand(sOpcode, sSegment, bModRM, type, cOperands, dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {string} sOpcode
     * @param {string} sSegment
     * @param {number} bModRM
     * @param {number} type
     * @param {number} cOperands (if 1, memory operands are prefixed with the size; otherwise, size can be inferred)
     * @param {DbgAddrx86} dbgAddr
     * @returns {string} (operand)
     */
    getModRMOperand(sOpcode, sSegment, bModRM, type, cOperands, dbgAddr)
    {
        let sOperand = "";
        let bMod = bModRM >> 6;
        let bRM = bModRM & 0x7;
        if (bMod < 3) {
            let disp;
            let fInteger = (sOpcode.indexOf("FI") == 0);
            if (!bMod && (!dbgAddr.fAddr32 && bRM == 6 || dbgAddr.fAddr32 && bRM == 5)) {
                bMod = 2;
            } else {
                if (dbgAddr.fAddr32) {
                    if (bRM != 4) {
                        bRM += 8;
                    } else {
                        sOperand = this.getSIBOperand(bMod, dbgAddr);
                    }
                }
                if (!sOperand) sOperand = Debuggerx86.RMS[bRM];
            }
            if (bMod == 1) {
                disp = this.getByte(dbgAddr, 1);
                if (!(disp & 0x80)) {
                    sOperand += '+' + StrLib.toHex(disp, 2);
                }
                else {
                    disp = ((disp << 24) >> 24);
                    sOperand += '-' + StrLib.toHex(-disp, 2);
                }
            }
            else if (bMod == 2) {
                if (sOperand) sOperand += '+';
                if (!dbgAddr.fAddr32) {
                    disp = this.getShort(dbgAddr, 2);
                    sOperand += StrLib.toHex(disp, 4);
                } else {
                    disp = this.getLong(dbgAddr, 4);
                    sOperand += StrLib.toHex(disp);
                }
            }
            sOperand = sSegment + '[' + sOperand + ']';
            if (cOperands == 1) {
                let sType = "";
                type &= Debuggerx86.TYPE_SIZE;
                if (type == Debuggerx86.TYPE_WORD) {
                    type = (dbgAddr.fData32? Debuggerx86.TYPE_LONG : Debuggerx86.TYPE_SHORT);
                }
                switch(type) {
                case Debuggerx86.TYPE_FARP:
                    sType = "FAR";
                    break;
                case Debuggerx86.TYPE_BYTE:
                    sType = "BYTE";
                    break;
                case Debuggerx86.TYPE_SHORT:
                    if (fInteger) {
                        sType = "INT16";
                        break;
                    }
                    /* falls through */
                    sType = "WORD";
                    break;
                case Debuggerx86.TYPE_LONG:
                    sType = "DWORD";
                    break;
                case Debuggerx86.TYPE_SINT:
                    if (fInteger) {
                        sType = "INT32";
                        break;
                    }
                    /* falls through */
                case Debuggerx86.TYPE_SREAL:
                    sType = "REAL32";
                    break;
                case Debuggerx86.TYPE_LINT:
                    if (fInteger) {
                        sType = "INT64";
                        break;
                    }
                    /* falls through */
                case Debuggerx86.TYPE_LREAL:
                    sType = "REAL64";
                    break;
                case Debuggerx86.TYPE_TREAL:
                    sType = "REAL80";
                    break;
                case Debuggerx86.TYPE_BCD80:
                    sType = "BCD80";
                    break;
                }
                if (sType) sOperand = sType + ' ' + sOperand;
            }
        }
        else {
            sOperand = this.getRegOperand(bRM, type, dbgAddr);
        }
        return sOperand;
    }

    /**
     * parseInstruction(sOp, sOperand, addr)
     *
     * TODO: Unimplemented.  See parseInstruction() in /machines/osi/c1p/modules/v2/debugger.js for a working implementation.
     *
     * @this {Debuggerx86}
     * @param {string} sOp
     * @param {string|undefined} sOperand
     * @param {DbgAddrx86} dbgAddr of memory where this instruction is being assembled
     * @returns {Array.<number>} (of opcode bytes; if the instruction can't be parsed, the array will be empty)
     */
    parseInstruction(sOp, sOperand, dbgAddr)
    {
        let aOpBytes = [];
        this.printf("not supported yet\n");
        return aOpBytes;
    }

    /**
     * getFlagOutput(sFlag)
     *
     * @this {Debuggerx86}
     * @param {string} sFlag
     * @returns {string} (value of flag)
     */
    getFlagOutput(sFlag)
    {
        let b;
        switch (sFlag) {
        case 'V':
            b = this.cpu.getOF();
            break;
        case 'D':
            b = this.cpu.getDF();
            break;
        case 'I':
            b = this.cpu.getIF();
            break;
        case 'T':
            b = this.cpu.getTF();
            break;
        case 'S':
            b = this.cpu.getSF();
            break;
        case 'Z':
            b = this.cpu.getZF();
            break;
        case 'A':
            b = this.cpu.getAF();
            break;
        case 'P':
            b = this.cpu.getPF();
            break;
        case 'C':
            b = this.cpu.getCF();
            break;
        default:
            b = 0;
            break;
        }
        return sFlag + (b? '1' : '0') + ' ';
    }

    /**
     * getLimitString(l)
     *
     * @this {Debuggerx86}
     * @param {number} l
     * @returns {string}
     */
    getLimitString(l)
    {
        return StrLib.toHex(l, (l & ~0xffff)? 8 : 4);
    }

    /**
     * getRegOutput(iReg)
     *
     * @this {Debuggerx86}
     * @param {number} iReg
     * @returns {string}
     */
    getRegOutput(iReg)
    {
        if (iReg >= Debuggerx86.REG_AX && iReg <= Debuggerx86.REG_DI && this.cchReg > 4) iReg += Debuggerx86.REG_EAX - Debuggerx86.REG_AX;
        let sReg = Debuggerx86.REGS[iReg];
        if (iReg == Debuggerx86.REG_CR0 && this.cpu.model == X86.MODEL_80286) sReg = "MS";
        return sReg + '=' + this.getRegString(iReg) + ' ';
    }

    /**
     * getSegOutput(seg, fProt)
     *
     * @this {Debuggerx86}
     * @param {Segx86} seg
     * @param {boolean} [fProt]
     * @returns {string}
     */
    getSegOutput(seg, fProt)
    {
        return seg.sName + '=' + StrLib.toHex(seg.sel, 4) + (fProt? '[' + StrLib.toHex(seg.base, this.cchAddr) + ',' + this.getLimitString(seg.limit) + ']' : "");
    }

    /**
     * getDTROutput(sName, sel, addr, addrLimit)
     *
     * @this {Debuggerx86}
     * @param {string} sName
     * @param {number|null|*} sel
     * @param {number} addr
     * @param {number} addrLimit
     * @returns {string}
     */
    getDTROutput(sName, sel, addr, addrLimit)
    {
        return sName + '=' + (sel != null? StrLib.toHex(sel, 4) : "") + '[' + StrLib.toHex(addr, this.cchAddr) + ',' + StrLib.toHex(addrLimit - addr, 4) + ']';
    }

    /**
     * getRegDump(fProt)
     *
     * Sample 8086 and 80286 real-mode register dump:
     *
     *      AX=0000 BX=0000 CX=0000 DX=0000 SP=0000 BP=0000 SI=0000 DI=0000
     *      SS=0000 DS=0000 ES=0000 PS=0002 V0 D0 I0 T0 S0 Z0 A0 P0 C0
     *      F000:FFF0 EA5BE000F0    JMP      F000:E05B
     *
     * Sample 80386 real-mode register dump:
     *
     *      EAX=00000000 EBX=00000000 ECX=00000000 EDX=00000000
     *      ESP=00000000 EBP=00000000 ESI=00000000 EDI=00000000
     *      SS=0000 DS=0000 ES=0000 FS=0000 GS=0000 PS=00000002 V0 D0 I0 T0 S0 Z0 A0 P0 C0
     *      F000:FFF0 EA05F900F0    JMP      F000:F905
     *
     * Sample 80286 protected-mode register dump:
     *
     *      AX=0000 BX=0000 CX=0000 DX=0000 SP=0000 BP=0000 SI=0000 DI=0000
     *      SS=0000[000000,FFFF] DS=0000[000000,FFFF] ES=0000[000000,FFFF] A20=ON
     *      CS=F000[FF0000,FFFF] LD=0000[000000,FFFF] GD=[000000,FFFF] ID=[000000,03FF]
     *      TR=0000 MS=FFF0 PS=0002 V0 D0 I0 T0 S0 Z0 A0 P0 C0
     *      F000:FFF0 EA5BE000F0    JMP      F000:E05B
     *
     * Sample 80386 protected-mode register dump:
     *
     *      EAX=00000000 EBX=00000000 ECX=00000000 EDX=00000000
     *      ESP=00000000 EBP=00000000 ESI=00000000 EDI=00000000
     *      SS=0000[00000000,FFFF] DS=0000[00000000,FFFF] ES=0000[00000000,FFFF]
     *      CS=F000[FFFF0000,FFFF] FS=0000[00000000,FFFF] GS=0000[00000000,FFFF]
     *      LD=0000[00000000,FFFF] GD=[00000000,FFFF] ID=[00000000,03FF] TR=0000 A20=ON
     *      CR0=00000010 CR2=00000000 CR3=00000000 PS=00000002 V0 D0 I0 T0 S0 Z0 A0 P0 C0
     *      F000:0000FFF0 EA05F900F0    JMP      F000:0000F905
     *
     * This no longer includes CS in real-mode (or EIP in any mode), because that information can be obtained from the
     * first line of disassembly, which an "r" or "rp" command will also display.
     *
     * Note that even when the processor is in real mode, you can always use the "rp" command to force a protected-mode
     * dump, in case you need to verify any selector base or limit values, since those also affect real-mode operation.
     *
     * @this {Debuggerx86}
     * @param {boolean} [fProt]
     * @returns {string}
     */
    getRegDump(fProt)
    {
        let s;
        if (fProt === undefined) fProt = this.getCPUMode();

        s = this.getRegOutput(Debuggerx86.REG_AX) +
            this.getRegOutput(Debuggerx86.REG_BX) +
            this.getRegOutput(Debuggerx86.REG_CX) +
            this.getRegOutput(Debuggerx86.REG_DX) + (this.cchReg > 4? '\n' : '') +
            this.getRegOutput(Debuggerx86.REG_SP) +
            this.getRegOutput(Debuggerx86.REG_BP) +
            this.getRegOutput(Debuggerx86.REG_SI) +
            this.getRegOutput(Debuggerx86.REG_DI) + '\n' +
            this.getSegOutput(this.cpu.segSS, fProt) + ' ' +
            this.getSegOutput(this.cpu.segDS, fProt) + ' ' +
            this.getSegOutput(this.cpu.segES, fProt) + ' ';

        if (fProt) {
            let sTR = "TR=" + StrLib.toHex(this.cpu.segTSS.sel, 4);
            let sA20 = "A20=" + (this.bus.getA20()? "ON " : "OFF ");
            if (this.cpu.model < X86.MODEL_80386) {
                sTR = '\n' + sTR;
                s += sA20; sA20 = '';
            }
            s += '\n' + this.getSegOutput(this.cpu.segCS, fProt) + ' ';
            if (I386 && this.cpu.model >= X86.MODEL_80386) {
                sA20 += '\n';
                s += this.getSegOutput(this.cpu.segFS, fProt) + ' ' +
                     this.getSegOutput(this.cpu.segGS, fProt) + '\n';
            }
            s += this.getDTROutput("LD", this.cpu.segLDT.sel, this.cpu.segLDT.base, this.cpu.segLDT.base + this.cpu.segLDT.limit) + ' ' +
                 this.getDTROutput("GD", null, this.cpu.addrGDT, this.cpu.addrGDTLimit) + ' ' +
                 this.getDTROutput("ID", null, this.cpu.addrIDT, this.cpu.addrIDTLimit) + ' ';
            s += sTR + ' ' + sA20;
            s += this.getRegOutput(Debuggerx86.REG_CR0);
            if (I386 && this.cpu.model >= X86.MODEL_80386) {
                s += this.getRegOutput(Debuggerx86.REG_CR2) + this.getRegOutput(Debuggerx86.REG_CR3);
            }
        } else {
            if (I386 && this.cpu.model >= X86.MODEL_80386) {
                s += this.getSegOutput(this.cpu.segFS, fProt) + ' ' +
                     this.getSegOutput(this.cpu.segGS, fProt) + ' ';
            }
        }

        s += this.getRegOutput(Debuggerx86.REG_PS) +
             this.getFlagOutput('V') + this.getFlagOutput('D') + this.getFlagOutput('I') + this.getFlagOutput('T') +
             this.getFlagOutput('S') + this.getFlagOutput('Z') + this.getFlagOutput('A') + this.getFlagOutput('P') + this.getFlagOutput('C');

        return s;
    }

    /**
     * comparePairs(p1, p2)
     *
     * @this {Debuggerx86}
     * @param {number|string|Array|Object} p1
     * @param {number|string|Array|Object} p2
     * @returns {number}
     */
    comparePairs(p1, p2)
    {
        return p1[0] > p2[0]? 1 : p1[0] < p2[0]? -1 : 0;
    }

    /**
     * addSymbols(sModule, nSegment, sel, off, addr, len, aSymbols)
     *
     * As fileimage.js (formerly filedump.js, which was formerly convrom.php) explains, aSymbols is a
     * JSON-encoded object whose properties consist of all the symbols (in upper-case), and the values of
     * those properties are objects containing any or all of the following properties:
     *
     *      'v': the value of an absolute (unsized) value
     *      'b': either 1, 2, 4 or undefined if an unsized value
     *      's': either a hard-coded segment or undefined
     *      'o': the offset of the symbol within the associated address space
     *      'l': the original-case version of the symbol, present only if it wasn't originally upper-case
     *      'a': annotation for the specified offset; eg, the original assembly language, with optional comment
     *
     * To that list of properties, we also add:
     *
     *      'p': the physical address (calculated whenever both 's' and 'o' properties are defined)
     *
     * Note that values for any 'v', 'b', 's' and 'o' properties are unquoted decimal values, and the values
     * for any 'l' or 'a' properties are quoted strings. Also, if double-quotes were used in any of the original
     * annotation ('a') values, they will have been converted to two single-quotes, so we're responsible for
     * converting them back to individual double-quotes.
     *
     * For example:
     *      {
     *          'HF_PORT': {
     *              'v':800
     *          },
     *          'HDISK_INT': {
     *              'b':4, 's':0, 'o':52
     *          },
     *          'ORG_VECTOR': {
     *              'b':4, 's':0, 'o':76
     *          },
     *          'CMD_BLOCK': {
     *              'b':1, 's':64, 'o':66
     *          },
     *          'DISK_SETUP': {
     *              'o':3
     *          },
     *          '.40': {
     *              'o':40, 'a':"MOV AX,WORD PTR ORG_VECTOR ;GET DISKETTE VECTOR"
     *          }
     *      }
     *
     * If a symbol only has an offset, then that offset value can be assigned to the symbol property directly:
     *
     *          'DISK_SETUP': 3
     *
     * The last property is an example of an "anonymous" entry, for offsets where there is no associated symbol.
     * Such entries are identified by a period followed by a unique number (usually the offset of the entry), and
     * they usually only contain offset ('o') and annotation ('a') properties.  I could eliminate the leading
     * period, but it offers a very convenient way of quickly discriminating among genuine vs. anonymous symbols.
     *
     * We add all these entries to our internal symbol table, which is an array of 4-element arrays, each of which
     * look like:
     *
     *      [sel, off, addr, len, aSymbols, aOffsets]
     *
     * There are two basic symbol operations: findSymbol(), which takes an address and finds the symbol, if any,
     * at that address, and findSymbolAddr(), which takes a string and attempts to match it to a non-anonymous
     * symbol with a matching offset ('o') property.
     *
     * To implement findSymbol() efficiently, addSymbols() creates an array of [offset, sSymbol] pairs
     * (aOffsets), one pair for each symbol that corresponds to an offset within the specified address space.
     *
     * We guarantee the elements of aOffsets are in offset order, because we build it using binaryInsert();
     * it's quite likely that the MAP file already ordered all its symbols in offset order, but since they're
     * hand-edited files, we can't assume that, and we need to ensure that findSymbol()'s binarySearch() operates
     * properly.
     *
     * @this {Debuggerx86}
     * @param {string|null} sModule
     * @param {number} nSegment (zero if undefined)
     * @param {number} sel (the default segment/selector for all symbols in this group)
     * @param {number} off (from the base of the given selector)
     * @param {number|null|*} addr (physical address where the symbols are located, if the memory is physical; eg, ROM)
     * @param {number} len (the size of the region, in bytes)
     * @param {Object} aSymbols (collection of symbols in this group; the format of this collection is described below)
     */
    addSymbols(sModule, nSegment, sel, off, addr, len, aSymbols)
    {
        let dbgAddr = {};
        let aOffsets = [];
        for (let sSymbol in aSymbols) {
            let symbol = aSymbols[sSymbol];
            if (typeof symbol == "number") {
                aSymbols[sSymbol] = symbol = {'o': symbol};
            }
            let offSymbol = symbol['o'];
            let selSymbol = symbol['s'];
            let sAnnotation = symbol['a'];
            if (offSymbol !== undefined) {
                if (selSymbol !== undefined) {
                    dbgAddr.off = offSymbol;
                    dbgAddr.sel = selSymbol;
                    dbgAddr.addr = undefined;
                    /**
                     * getAddr() computes the corresponding physical address and saves it in dbgAddr.addr.
                     */
                    this.getAddr(dbgAddr);
                    /**
                     * The physical address for any symbol located in the top 64Kb of the machine's address space
                     * should be relocated to the top 64Kb of the first 1Mb, so that we're immune from any changes
                     * to the A20 line.
                     */
                    if ((dbgAddr.addr & ~0xffff) == (this.bus.nBusLimit & ~0xffff)) {
                        dbgAddr.addr &= 0x000fffff;
                    }
                    symbol['p'] = dbgAddr.addr;
                }
                UsrLib.binaryInsert(aOffsets, [offSymbol >>> 0, sSymbol], this.comparePairs);
            }
            if (sAnnotation) symbol['a'] = sAnnotation.replace(/''/g, "\"");
        }
        let symbolTable = {
            sModule: sModule,
            nSegment: nSegment,
            sel: sel,
            off: off,
            addr: addr,
            len: len,
            aSymbols: aSymbols,
            aOffsets: aOffsets
        };
        let iTable = this.aSymbolTable.findIndex(function(symbolTable) {
            return symbolTable.sModule == sModule && symbolTable.nSegment == nSegment;
        });
        if (iTable < 0) iTable = this.aSymbolTable.length;
        this.aSymbolTable[iTable] = symbolTable;
    }

    /**
     * addVxDSymbol(id, dbgAddr, fPrint)
     *
     * @this {Debuggerx86}
     * @param {number} id
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fPrint]
     * @returns {boolean|null} (true if symbol added OR matching symbol already exists, false if not)
     */
    addVxDSymbol(id, dbgAddr, fPrint)
    {
        let idSrv = id & 0xffff;
        let idVxD = (id >> 16) & 0xffff;
        let aVxDs = Object.keys(Interrupts.VxD);
        for (let sVxD of aVxDs) {
            if (idVxD == Interrupts.VxD[sVxD].id) {
                if (Interrupts.VxD[sVxD].fn) {
                    let sService = Interrupts.VxD[sVxD].fn[idSrv];
                    if (sService) {
                        let dbg = this;
                        let addSymbol = function(sSymbol, addr) {
                            let offSymbol = addr >>> 0;
                            let iTable = dbg.aSymbolTable.findIndex(function(symbolTable) {
                                return /* symbolTable.sModule == sVxD */ symbolTable.sel == 0x28 &&
                                        offSymbol >= (symbolTable.off >>> 0) && offSymbol < ((symbolTable.off + symbolTable.len) >>> 0);
                            });
                            if (iTable >= 0) {
                                let keySymbol = sSymbol.toUpperCase();
                                let symbolTable = dbg.aSymbolTable[iTable];
                                let symbol = symbolTable.aSymbols[keySymbol];
                                if (symbol) {
                                    if (symbol['o'] == offSymbol && symbol['s'] == symbolTable.sel) {
                                        return true;
                                    }
                                    dbg.printf(MESSAGE.DEBUG + MESSAGE.ERROR, "%s.%s (%%%X) does not match previous value (%%%X)\n", sVxD, sSymbol, offSymbol, symbol['o']);
                                    return false;
                                }
                                let pair = [offSymbol, keySymbol];
                                let result = UsrLib.binarySearch(symbolTable.aOffsets, pair, dbg.comparePairs);
                                if (result < 0) {
                                    symbolTable.aOffsets.splice(-(result + 1), 0, pair);
                                    symbolTable.aSymbols[keySymbol] = {'o': offSymbol, 's': symbolTable.sel};
                                    if (fPrint && sSymbol[0] != '$') {
                                        dbg.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s.%s: %%%X\n", sVxD, sSymbol, offSymbol);
                                    }
                                } else {
                                    // dbg.printf(MESSAGE.DEBUG + MESSAGE.WARNING, "%s.%s (%%%X) already has symbol: %s\n", sVxD, sSymbol, offSymbol, symbolTable.aOffsets[result][1]);
                                    symbolTable.aOffsets[result] = pair;
                                    symbolTable.aSymbols[keySymbol] = {'o': offSymbol, 's': symbolTable.sel};
                                }
                                return true;
                            }
                            dbg.printf(MESSAGE.DEBUG + MESSAGE.ERROR, "%s.%s (%%%X) out of range (check %%%X)\n", sVxD, sSymbol, offSymbol, dbgAddr.addr-2);
                            return false;
                        };
                        /**
                         * We actually need to add TWO symbols for every VxD service: one with a prefix (eg, '$') that
                         * represents the jump table entry for the service, and one without the prefix that represents the
                         * initial value in the jump table.
                         */
                        let addr = dbg.getLong(dbgAddr);
                        if (addSymbol('$' + sService, addr)) {
                            dbgAddr.addr = addr;
                            return addSymbol(sService, dbg.getLong(dbgAddr));
                        }
                        return false;
                    }
                    if (idSrv < 32768) {        // TODO: Figure out what the larger service numbers represent
                        this.printf(MESSAGE.DEBUG + MESSAGE.WARNING, "%s service %d: unrecognized (check %%%X)\n", sVxD, idSrv, dbgAddr.addr-2);
                    }
                    return false;
                }
                return false;                   // if our VxD table doesn't have a function list yet, don't bother with a warning
            }
        }
        this.printf(MESSAGE.DEBUG + MESSAGE.WARNING, "VxD %d: unrecognized (check %%%X)\n", idVxD, dbgAddr.addr-2);
        return false;
    }

    /**
     * removeSymbols(sModule, nSegment)
     *
     * @this {Debuggerx86}
     * @param {string|null|*} sModule
     * @param {number} [nSegment] (segment # if sModule set, selector if sModule clear)
     * @returns {string|null} (name of the module removed, or null if no module was found)
     */
    removeSymbols(sModule, nSegment)
    {
        let sModuleRemoved = null;
        for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            let symbolTable = this.aSymbolTable[iTable];
            if (sModule && symbolTable.sModule != sModule) continue;
            if (sModule && nSegment == symbolTable.nSegment || !sModule && nSegment == symbolTable.sel) {
                sModuleRemoved = symbolTable.sModule;
                this.aSymbolTable.splice(iTable, 1);
                break;
            }
        }
        return sModuleRemoved;
    }

    /**
     * dumpSymbols()
     *
     * TODO: Add "numerical" and "alphabetical" dump options. This is simply dumping them in whatever
     * order they appeared in the original MAP file.
     *
     * @this {Debuggerx86}
     */
    dumpSymbols()
    {
        let cSymbols = 0;
        for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            let symbolTable = this.aSymbolTable[iTable];
            for (let sSymbol in symbolTable.aSymbols) {
                if (sSymbol.charAt(0) == '.') continue;
                let symbol = symbolTable.aSymbols[sSymbol];
                let offSymbol = symbol['o'];
                if (offSymbol === undefined) continue;
                let selSymbol = symbol['s'];
                if (selSymbol === undefined) selSymbol = symbolTable.sel;
                let sSymbolOrig = symbolTable.aSymbols[sSymbol]['l'];
                if (sSymbolOrig) sSymbol = sSymbolOrig;
                this.printf("%s %s\n", this.toHexOffset(offSymbol, selSymbol), sSymbol);
                cSymbols++;
            }
        }
        if (!cSymbols) this.printf("no symbols\n");
    }

    /**
     * findSymbol(dbgAddr, fNearest)
     *
     * Search aSymbolTable for dbgAddr, and return an Array for the corresponding symbol (empty if not found).
     *
     * If fNearest is true, and no exact match was found, then the Array returned will contain TWO sets of
     * entries: [0]-[3] will refer to closest preceding symbol, and [4]-[7] will refer to the closest subsequent symbol.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fNearest]
     * @returns {Array} (where [0] == symbol name, [1] == symbol value, [2] == any annotation, and [3] == any associated comment)
     */
    findSymbol(dbgAddr, fNearest)
    {
        let aSymbol = [];
        let offSymbol = dbgAddr.off >>> 0;
        let addrSymbol = this.getAddr(dbgAddr) >>> 0;
        for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            let symbolTable = this.aSymbolTable[iTable];
            let sel = symbolTable.sel;
            let off = symbolTable.off >>> 0;
            let addr = symbolTable.addr;
            if (addr != null) addr >>>= 0;
            let len = symbolTable.len;
            if (sel == 0x30) sel = 0x28;        // TODO: Remove this hack once we're able to differentiate Windows 95 ring 0 code and data
            if (sel == dbgAddr.sel && offSymbol >= off && offSymbol < off + len || addr != null && addrSymbol >= addr && addrSymbol < addr + len) {
                let result = UsrLib.binarySearch(symbolTable.aOffsets, [offSymbol], this.comparePairs);
                if (result >= 0) {
                    this.returnSymbol(iTable, result, aSymbol);
                }
                else if (fNearest) {
                    result = ~result;
                    this.returnSymbol(iTable, result-1, aSymbol);
                    this.returnSymbol(iTable, result, aSymbol);
                }
                break;
            }
        }
        if (!aSymbol.length) {
            let sSymbol = this.bus.getSymbol(addrSymbol, true);
            if (sSymbol) {
                aSymbol.push(sSymbol);
                aSymbol.push(addrSymbol);
            }
        }
        return aSymbol;
    }

    /**
     * findSymbolAddr(sSymbol)
     *
     * Search aSymbolTable for sSymbol, and if found, return a dbgAddr (same as parseAddr())
     *
     * @this {Debuggerx86}
     * @param {string} sSymbol
     * @returns {DbgAddrx86|undefined}
     */
    findSymbolAddr(sSymbol)
    {
        let dbgAddr;
        if (sSymbol.match(/^[a-z_][a-z0-9_]*$/i)) {
            let sUpperCase = sSymbol.toUpperCase();
            for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
                let symbolTable = this.aSymbolTable[iTable];
                let symbol = symbolTable.aSymbols[sUpperCase];
                if (symbol !== undefined) {
                    let offSymbol = symbol['o'];
                    if (offSymbol !== undefined) {
                        /**
                         * We assume that every ROM is ORG'ed at 0x0000, and therefore unless the symbol has an
                         * explicitly-defined segment, we return the segment associated with the entire group; for
                         * a ROM, that segment is normally "addrROM >>> 4".  Down the road, we may want/need to
                         * support a special symbol entry (eg, ".ORG") that defines an alternate origin.
                         */
                        let selSymbol = symbol['s'];
                        if (selSymbol === undefined) selSymbol = symbolTable.sel;
                        dbgAddr = this.newAddr(offSymbol, selSymbol, symbol['p']);
                    }
                    /**
                     * The symbol matched, but it wasn't for an address (no 'o' offset), and there's no point
                     * looking any farther, since each symbol appears only once, so we indicate it's an unknown symbol.
                     */
                    break;
                }
            }
        }
        return dbgAddr;
    }

    /**
     * returnSymbol(iTable, iOffset, aSymbol)
     *
     * Helper function for findSymbol().
     *
     * @param {number} iTable
     * @param {number} iOffset
     * @param {Array} aSymbol (updated with the specified symbol, if it exists)
     */
    returnSymbol(iTable, iOffset, aSymbol)
    {
        let symbol = {};
        let aOffsets = this.aSymbolTable[iTable].aOffsets;
        let offset = 0, sSymbol = null;
        if (iOffset >= 0 && iOffset < aOffsets.length) {
            offset = aOffsets[iOffset][0];
            sSymbol = aOffsets[iOffset][1];
        }
        if (sSymbol) {
            symbol = this.aSymbolTable[iTable].aSymbols[sSymbol];
            sSymbol = (sSymbol.charAt(0) == '.'? null : (symbol['l'] || sSymbol));
        }
        aSymbol.push(sSymbol);
        aSymbol.push(offset);
        aSymbol.push(symbol['a']);
        aSymbol.push(symbol['c']);
    }

    /**
     * doHelp()
     *
     * @this {Debuggerx86}
     */
    doHelp()
    {
        let s = "debugger commands:";
        for (let sCommand in Debuggerx86.COMMANDS) {
            s += '\n  ' + StrLib.pad(sCommand, -7) + Debuggerx86.COMMANDS[sCommand];
        }
        if (!this.checksEnabled()) s += "\nnote: frequency/history disabled if no exec breakpoints";
        this.printf("%s\n", s);
    }

    /**
     * doAssemble(asArgs)
     *
     * This always receives the complete argument array, where the order of the arguments is:
     *
     *      [0]: the assemble command (assumed to be "a")
     *      [1]: the target address (eg, "200")
     *      [2]: the operation code, aka instruction name (eg, "adc")
     *      [3]: the operation mode operand, if any (eg, "14", "[1234]", etc)
     *
     * The Debugger enters "assemble mode" whenever only the first (or first and second) arguments are present.
     * As long as "assemble mode is active, the user can omit the first two arguments on all later assemble commands
     * until "assemble mode" is cancelled with an empty command line; the command processor automatically prepends "a"
     * and the next available target address to the argument array.
     *
     * Entering "assemble mode" is optional; one could enter a series of fully-qualified assemble commands; eg:
     *
     *      a ff00 cld
     *      a ff01 ldx 28
     *      ...
     *
     * without ever entering "assemble mode", but of course, that requires more typing and doesn't take advantage
     * of automatic target address advancement (see dbgAddrAssemble).
     *
     * NOTE: As the previous example implies, you can even assemble new instructions into ROM address space;
     * as our setByte() function explains, the ROM write-notification handlers only refuse writes from the CPU.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs is the complete argument array, beginning with the "a" command in asArgs[0]
     */
    doAssemble(asArgs)
    {
        let dbgAddr = this.parseAddr(asArgs[1], true);
        if (!dbgAddr) return;

        this.dbgAddrAssemble = dbgAddr;
        if (asArgs[2] === undefined) {
            this.printf("begin assemble at %s\n", this.toHexAddr(dbgAddr));
            this.fAssemble = true;
            this.cpu.updateCPU();
            return;
        }

        let aOpBytes = this.parseInstruction(asArgs[2], asArgs[3], dbgAddr);
        if (aOpBytes.length) {
            for (let i = 0; i < aOpBytes.length; i++) {
                this.setByte(dbgAddr, aOpBytes[i], 1);
            }
            /**
             * Since getInstruction() also updates the specified address, dbgAddrAssemble is automatically advanced.
             */
            this.printf("%s\n", this.getInstruction(this.dbgAddrAssemble));
        }
    }

    /**
     * doBreak(asArgs, sLine)
     *
     * As the "help" output below indicates, the following breakpoint commands are supported:
     *
     *      bp [a]  set exec breakpoint on linear addr [a]
     *      br [a]  set read breakpoint on linear addr [a]
     *      bw [a]  set write breakpoint on linear addr [a]
     *      bc [a]  clear breakpoint on linear addr [a] (use "*" for all breakpoints)
     *      bl      list breakpoints
     *
     * to which we have recently added the following I/O breakpoint commands:
     *
     *      bi [p]  toggle input breakpoint on port [p] (use "*" for all input ports)
     *      bo [p]  toggle output breakpoint on port [p] (use "*" for all output ports)
     *
     * These two new commands operate as toggles so that if "*" is used to trap all input (or output),
     * you can also use these commands to NOT trap specific ports.
     *
     *      bn [n]  break after [n] instructions
     *
     * TODO: Update the "bl" command to include any/all I/O breakpoints, and the "bc" command to
     * clear them.  Because "bi" and "bo" commands are piggy-backing on Bus functions, those breakpoints
     * are currently outside the realm of what the "bl" and "bc" commands are aware of.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     * @param {string} [sLine] (the complete command-line)
     */
    doBreak(asArgs, sLine)
    {
        let sCmd = asArgs.shift();
        let sAddr = asArgs.shift();
        if (sAddr == '?') {
            this.printf("breakpoint commands:\n");
            this.printf("\tbi [p]\ttoggle break on input port [p]\n");
            this.printf("\tbo [p]\ttoggle break on output port [p]\n");
            this.printf("\tbp [a]\tset exec breakpoint at addr [a]\n");
            this.printf("\tbr [a]\tset read breakpoint at addr [a]\n");
            this.printf("\tbw [a]\tset write breakpoint at addr [a]\n");
            this.printf("\tbc [a]\tclear breakpoint at addr [a]\n");
            this.printf("\tbl\tlist all breakpoints\n");
            this.printf("\tbn [n]\tbreak after [n] instruction(s)\n");
            this.printf("\tbv [n]\ttoggle break on interrupt vector [n]\n");
            return;
        }
        let sParm = sCmd.charAt(1);
        if (sParm == 'l') {
            let cBreaks = 0;
            cBreaks += this.listBreakpoints(this.aBreakExec);
            cBreaks += this.listBreakpoints(this.aBreakRead);
            cBreaks += this.listBreakpoints(this.aBreakWrite);
            if (!cBreaks) this.printf("no breakpoints\n");
            return;
        }
        if (sParm == 'n') {
            this.nBreakIns = this.parseValue(sAddr);
            this.printf("break after %d instruction(s)\n", this.nBreakIns);
            return;
        }
        if (sParm == 'v') {
            if (!sAddr) {
                this.listVectorBP();
                return;
            }
            do {
                let chType = sAddr[0];
                if (chType == '&' || chType == '#') {
                    sAddr = sAddr.slice(1);
                } else {
                    chType = '';
                }
                let vector = this.parseValue(sAddr);
                if (vector != undefined) {
                    if (this.removeVectorBP(vector)) {
                        continue;
                    }
                    if (this.addVectorBP(vector, chType)) {
                        continue;
                    }
                }
                this.printf("vector %s invalid\n", sAddr);
                break;
            } while ((sAddr = asArgs.shift()));
            return;
        }
        if (sAddr === undefined) {
            this.printf("missing breakpoint address\n");
            return;
        }
        let dbgAddr = {};
        if (sAddr != '*') {
            dbgAddr = this.parseAddr(sAddr, true, true);
            if (!dbgAddr) return;
        }

        sAddr = (dbgAddr.off == null? sAddr : StrLib.toHexWord(dbgAddr.off));

        if (sParm == 'c') {
            if (dbgAddr.off == null) {
                this.clearBreakpoints();
                this.printf("all breakpoints cleared\n");
                return;
            }
            if (this.findBreakpoint(this.aBreakExec, dbgAddr, true)) return;
            if (this.findBreakpoint(this.aBreakRead, dbgAddr, true)) return;
            if (this.findBreakpoint(this.aBreakWrite, dbgAddr, true)) return;
            this.printf("breakpoint missing: %s\n", this.toHexAddr(dbgAddr));
            return;
        }

        if (sParm == 'i') {
            this.printf("breakpoint %s: port %s (input)\n", (this.bus.addPortInputBreak(dbgAddr.off)? "enabled" : "cleared"), sAddr);
            return;
        }

        if (sParm == 'o') {
            this.printf("breakpoint %s: port %s (output)\n", (this.bus.addPortOutputBreak(dbgAddr.off)? "enabled" : "cleared"), sAddr);
            return;
        }

        if (dbgAddr.off == null) return;

        this.parseAddrOptions(dbgAddr, sLine);

        if (sParm == 'p') {
            this.addBreakpoint(this.aBreakExec, dbgAddr);
            return;
        }
        if (sParm == 'r') {
            this.addBreakpoint(this.aBreakRead, dbgAddr);
            return;
        }
        if (sParm == 'w') {
            this.addBreakpoint(this.aBreakWrite, dbgAddr);
            return;
        }
        this.printf("unknown breakpoint command: %s\n", sParm);
    }

    /**
     * doClear(sCmd)
     *
     * @this {Debuggerx86}
     * @param {string} [sCmd] (eg, "cls" or "clear")
     */
    doClear(sCmd)
    {
        this.cmp.clearPanel();
    }

    /**
     * doDump(asArgs)
     *
     * For memory dumps, the second parameter (sLen) is interpreted as a length (by default, in hex)
     * only if it contains an 'l' prefix; otherwise it's interpreted as an ending address (inclusive).
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs (formerly sCmd, [sAddr], [sLen] and [sBytes])
     */
    doDump(asArgs)
    {
        let m;
        let sCmd = asArgs[0];
        let sAddr = asArgs[1];
        let sLen = asArgs[2];
        let sBytes = asArgs[3];

        if (sAddr == '?') {
            let sDumpers = "";
            for (m in MESSAGE.NAMES) {
                if (this.afnDumpers[m]) {
                    if (sDumpers) sDumpers += ',';
                    sDumpers += m;
                }
            }
            sDumpers += ",state,symbols";
            this.printf("dump memory commands:\n");
            this.printf("\tda [a] [#]    dump # ASCII chars at address a\n");
            this.printf("\tdb [a] [#]    dump # bytes at address a\n");
            this.printf("\tdw [a] [#]    dump # words at address a\n");
            this.printf("\tdd [a] [#]    dump # dwords at address a\n");
            this.printf("\tdh [n] [#]    dump # instructions from history n\n");
            this.printf("\tdi [#]        dump descriptor info for IDT #\n");
            this.printf("\tds [#]        dump descriptor info for selector #\n");
            if (BACKTRACK) {
                this.printf("\tdt [a]        dump backtrack info for address a\n");
            }
            this.printf("\tdby,dwy,ddy   dump data in binary\n");
            if (sDumpers.length) this.printf("dump extension commands:\n\t%s\n", sDumpers);
            return;
        }

        if (sAddr == "state") {
            let sState = this.cmp.powerOff(true);
            if (!sState) {
                this.printf("powerOff() error\n");
            }
            else if (sLen == "console") {
                /**
                 * Console buffers are notoriously small, and even the following code, which breaks the
                 * data into parts (eg, "d state console 1", "d state console 2", etc) just isn't that helpful.
                 *
                 *      let nPart = +sBytes;
                 *      if (nPart) sState = sState.substr(1000000 * (nPart-1), 1000000);
                 *
                 * So, the best way to capture a large machine state is to use the new "Save Machine" link
                 * that downloads a machine's entire state.  Alternatively, run your own local server and use
                 * server-side storage.  Take a look at the "Save" binding in computer.js, which binds an HTML
                 * control to the computer.powerOff() and computer.saveServerState() functions.
                 */
                console.log(sState);
            } else {
                this.doClear();
                this.printf("%s\n", sState);
            }
            return;
        }

        if (sAddr == "symbols") {
            this.dumpSymbols();
            return;
        }

        /**
         * Transform a "ds" command into a "d desc" command (simply as shorthand); ditto for "dg" and "dl",
         * only because that's the syntax that WDEB386 used.  I'm uncertain what WDEB386 would do with an LDT
         * selector passed to "dg" or a GDT selector passed to "dl" (because I'm too lazy to check right now),
         * but that seems nonsensical.
         */
        if (sCmd == "ds" || sCmd == "dg" || sCmd == "dl") {
            sCmd = "d";
            asArgs = [sCmd, "desc", sAddr];
        }

        /**
         * Handle the "dp" (aka "d page") commands here.
         */
        if (sCmd == "d" && sAddr == "page") {
            sCmd = "dp";
            asArgs.shift();
        }
        if (sCmd == "dp") {
            asArgs.shift();
            this.dumpPage(asArgs);
            return;
        }

        if (sCmd == "d") {
            /**
             * Transform a "d disk" command into a "l json" command (TODO: Register a dumper for "disk" instead?)
             */
            if (sAddr == "disk") {
                asArgs[0] = "l";
                asArgs[1] = "json";
                this.doLoad(asArgs);
                return;
            }
            for (m in MESSAGE.NAMES) {
                if (asArgs[1] == m) {
                    let fnDumper = this.afnDumpers[m];
                    if (fnDumper) {
                        asArgs.shift();
                        asArgs.shift();
                        fnDumper(asArgs);
                    } else {
                        this.printf("no dump registered for %s\n", sAddr);
                    }
                    return;
                }
            }
            if (!sAddr) sCmd = this.sCmdDumpPrev || "db";
        }

        if (sCmd == "dh") {
            this.dumpHistory(sAddr, sLen, sBytes);
            return;
        }

        if (sCmd == "di") {
            asArgs.shift();
            this.dumpIDT(asArgs);
            return;
        }

        if (sCmd == "dt") {
            asArgs.shift();
            let sInfo = this.dumpBackTrack(asArgs);
            this.printf("%s\n", sInfo);
            return;
        }

        if (sCmd[1] && "abwd".indexOf(sCmd[1]) < 0) {
            this.printf("unrecognized dump command\n");
            return;
        }

        this.sCmdDumpPrev = sCmd;

        let dbgAddr = this.parseAddr(sAddr);
        if (!dbgAddr || dbgAddr.sel == null && dbgAddr.addr == null) return;

        let len = 0;
        if (sLen) {
            if (sLen.charAt(0) == 'l') {
                sLen = sLen.substr(1) || sBytes;
                len = this.parseValue(sLen);
            } else {
                let dbgAddrEnd = this.parseAddr(sLen);
                if (!dbgAddrEnd) return;
                /**
                 * To be more DEBUG-like, when an ending address is used instead of a length, we treat it inclusively, hence the "+ 1".
                 */
                if (dbgAddr.type != Debuggerx86.ADDRTYPE.LINEAR) {
                    len = dbgAddrEnd.off - dbgAddr.off + 1;
                } else {
                    len = dbgAddrEnd.addr - dbgAddr.addr + 1;
                }
            }
            if (len < 0 || len > 0x10000) len = 0;
        }

        let sDump = "", fASCII = false, cchBinary = 0;
        let size = (sCmd[1] == 'd'? 4 : (sCmd[1] == 'w'? 2 : 1));
        let cb = (size * len) || 128;
        let cLines = ((cb + 15) >> 4) || 1;
        let cbLine = (size == 4? 16 : this.nBase);  // the base also happens to be a reasonable number of bytes/line

        /**
         * The "da" variation uses a line size of 160 bytes, because that's the number of characters
         * per line in a text frame buffer; if no ending address or length is specified, the number of
         * lines defaults to 25 (the typical number of visible lines in a frame buffer).
         *
         * Beyond that, the command doesn't make any other assumptions about the memory format.  Video
         * frame buffers usually dump nicely because all the attribute bytes tend to be non-ASCII.
         */
        if (sCmd[1] == 'a') {
            fASCII = true;
            cbLine = 160;
            cLines = (len <= 1? 25 : Math.ceil(len / cbLine));
            cb = cLines * cbLine;
        }
        else if (sCmd[2] == 'y') {
            cbLine = size;
            if (!len) cb = 8;
            cLines = cb;
            cchBinary = size * 8;
        }

        while (cLines-- && cb > 0) {
            let data = 0, iByte = 0, i;
            let sData = "", sChars = "";
            sAddr = this.toHexAddr(dbgAddr);
            for (i = cbLine; i > 0 && cb > 0; i--) {
                let b = this.getByte(dbgAddr, 1);
                data |= (b << (iByte++ << 3));
                if (iByte == size) {
                    sData += (this.nBase == 8? StrLib.toOct(data, size * 3) : StrLib.toHex(data, size * 2));
                    sData += (size == 1? (i == 9? '-' : ' ') : "  ");
                    if (cchBinary) sChars += StrLib.toBin(data, cchBinary);
                    data = iByte = 0;
                }
                if (!cchBinary) sChars += (b >= 32 && b < 127? String.fromCharCode(b) : (fASCII? '' : '.'));
                cb--;
            }
            if (sDump) sDump += '\n';
            if (fASCII) {
                sDump += sChars;
            } else {
                sDump += sAddr + "  " + sData + StrLib.pad(sChars, sChars.length + i * 3 + 1);
            }
        }
        if (sDump) this.print(sDump.replace(/\s*$/, "") + "\n");
        this.dbgAddrNextData = dbgAddr;
    }

    /**
     * doEdit(asArgs)
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    doEdit(asArgs)
    {
        let sAddr = asArgs[1];
        if (sAddr == null) {
            this.printf("edit memory commands:\n");
            this.printf("\teb [a] [...]  edit bytes at address a\n");
            this.printf("\tew [a] [...]  edit words at address a\n");
            return;
        }
        let dbgAddr = this.parseAddr(sAddr);
        if (!dbgAddr) return;

        /**
         * Use "ev b000:0000" to fill MDA video memory with test data (and "ev b800:0000" to fill CGA video memory).
         */
        if (asArgs[0] == "ev") {
            for (let i = 0; i < 256; i++) {
                let sHex = StrLib.toHex(i, 2);
                if (i && !(i & 0xf)) this.incAddr(dbgAddr, 64);
                this.setShort(dbgAddr, (i << 8) | sHex.charCodeAt(0), 2, true);
                this.setShort(dbgAddr, (i << 8) | sHex.charCodeAt(1), 2, true);
                this.setShort(dbgAddr, (i << 8) | 0x20, 2, i < 255);
            }
            return;
        }

        let size = 1;
        let mask = 0xff;
        let fnGet = this.getByte;
        let fnSet = this.setByte;
        if (asArgs[0] == "ew") {
            size = 2;
            mask = 0xffff;
            fnGet = this.getShort;
            fnSet = this.setShort;
        }

        let cch = size << 1;
        let fASCII = false;
        for (let i = 2; i < asArgs.length; i++) {
            let sArg = asArgs[i];
            /**
             * Now that all debugger commands go through parseCommand(), we can accept interesting commands like this:
             *
             *      ew b800:0 "Happy Birthday"
             *
             * and the quoted string will arrive as a single argument.  We now parse such a string into a series of byte
             * values, and additionally, if you're using "ew" instead of "eb", only the low byte of every word will be
             * updated.  This is what we call ASCII replacement mode (fASCII is true), which ends as soon as we encounter
             * the empty string that we add to the end of the series.
             */
            if (sArg[0] == '"' || sArg[0] == "'") {
                let asNum = [];
                for (let j = 1; j < sArg.length; j++) {
                    let ch = sArg[j];
                    if (ch == sArg[0]) break;
                    asNum.push(StrLib.toHexByte(ch.charCodeAt(0)));
                }
                asNum.push("");
                asArgs.splice(i, 1, ...asNum);
                sArg = asArgs[i];
                fASCII = true;
            }
            if (!sArg) {
                fASCII = false;
                continue;
            }
            let vNew = this.parseExpression(sArg);
            if (vNew === undefined) {
                this.printf("unrecognized value: %s\n", sArg);
                break;
            }
            if (vNew & ~mask) {
                this.printf("warning: %x exceeds %s-byte value\n", vNew, size);
            }
            let vOld = fnGet.call(this, dbgAddr);
            if (fASCII) vNew = (vOld & ~0xff) | (vNew & 0x7f);
            this.printf("changing %s from %#0*x to %#0*x\n", this.toHexAddr(dbgAddr), cch, vOld, cch, vNew);
            fnSet.call(this, dbgAddr, vNew, size);
        }
    }

    /**
     * doFreqs(sParm)
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sParm
     */
    doFreqs(sParm)
    {
        if (sParm == '?') {
            this.printf("frequency commands:\n");
            this.printf("\tclear\tclear all frequency counts\n");
            return;
        }
        let i;
        let cData = 0;
        if (this.aaOpcodeCounts) {
            if (sParm == "clear") {
                for (i = 0; i < this.aaOpcodeCounts.length; i++) {
                    this.aaOpcodeCounts[i] = [i, 0];
                }
                this.printf("frequency data cleared\n");
                cData++;
            }
            else if (sParm !== undefined) {
                this.printf("unknown frequency command: %s\n", sParm);
                cData++;
            }
            else {
                let aaSortedOpcodeCounts = this.aaOpcodeCounts.slice();
                aaSortedOpcodeCounts.sort(function(p, q) {
                    return q[1] - p[1];
                });
                for (i = 0; i < aaSortedOpcodeCounts.length; i++) {
                    let bOpcode = aaSortedOpcodeCounts[i][0];
                    let cFreq = aaSortedOpcodeCounts[i][1];
                    if (cFreq) {
                        this.printf("%s (%#04x): %d times\n", (Debuggerx86.INS_NAMES[this.aaOpDescs[bOpcode][0]] + "  ").substr(0, 5), bOpcode, cFreq);
                        cData++;
                    }
                }
            }
        }
        if (!cData) {
            this.printf("no frequency data available\n");
        }
    }

    /**
     * doHalt(fQuiet)
     *
     * @this {Debuggerx86}
     * @param {boolean} [fQuiet]
     */
    doHalt(fQuiet)
    {
        if (!this.stopCPU()) {
            if (this.isBusy(true)) return;
            if (!fQuiet) this.printf("already halted\n");
        }
    }

    /**
     * doIf(sCmd, fQuiet)
     *
     * NOTE: Don't forget that the default base for all numeric constants is 16 (hex), so when you evaluate
     * an expression like "a==10", it will compare the value of the variable "a" to 0x10; use a trailing period
     * (eg, "10.") if you really intend decimal.
     *
     * Also, if no variable named "a" exists, "a" will evaluate to 0x0A, so the expression "a==10" becomes
     * "0x0A==0x10" (false), whereas the expression "a==10." becomes "0x0A==0x0A" (true).
     *
     * @this {Debuggerx86}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} (true if expression is non-zero, false if zero (or undefined due to a parse error))
     */
    doIf(sCmd, fQuiet)
    {
        sCmd = StrLib.trim(sCmd);
        if (!this.parseExpression(sCmd)) {
            if (!fQuiet) this.printf("false: %s\n", sCmd);
            return false;
        }
        if (!fQuiet) this.printf("true: %s\n", sCmd);
        return true;
    }

    /**
     * doInfo(asArgs)
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     * @returns {boolean} (true only if the instruction info command ("n") is supported)
     */
    doInfo(asArgs)
    {
        if (DEBUG) {
            this.printf("msPerYield: %d\n", this.cpu.msPerYield);
            this.printf("nCyclesPerYield: %d\n", this.cpu.nCyclesPerYield);
            return true;
        }
        return false;
    }

    /**
     * doInput(sPort)
     *
     * Simulate a 1-byte port input operation.
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sPort
     */
    doInput(sPort)
    {
        if (!sPort || sPort == '?') {
            this.printf("input commands:\n");
            this.printf("\ti [p]\tread port [p]\n");
            /**
             * TODO: Regarding this warning, consider adding an "unchecked" version of
             * bus.checkPortInputNotify(), since all Debugger memory accesses are unchecked, too.
             *
             * All port I/O handlers ARE aware when the Debugger is calling (addrFrom is undefined),
             * but changing them all to be non-destructive would take time, and situations where you
             * actually want to affect the hardware state are just as likely as not....
             */
            this.printf("warning: port accesses can affect hardware state\n");
            return;
        }
        let port = this.parseValue(sPort);
        if (port !== undefined) {
            let bIn = this.bus.checkPortInputNotify(port, 1);
            this.printf("%#06x: %#04x\n", port, bIn);
        }
    }

    /**
     * doInt(sInt)
     *
     * Displays information about the given software interrupt (assuming that said interrupt is in progress).
     *
     * These messages also reset the system variable $ops (by updating cOpcodesStart), to make it easier to see
     * how many opcodes were executed since these interrupts "started".
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sInt
     * @returns {boolean} (true if successful, false if not)
     */
    doInt(sInt)
    {
        switch(this.parseValue(sInt)) {
        case 0x13:
            this.messageInt(Interrupts.DISK, this.cpu.regLIP, true);
            this.cOpcodesStart = this.cOpcodes;
            return true;
        case 0x21:
            this.messageInt(Interrupts.DOS, this.cpu.regLIP, true);
            this.cOpcodesStart = this.cOpcodes;
            return true;
        default:
            return false;
        }
    }

    /**
     * doVar(sCmd)
     *
     * The command must be of the form "{variable} = [{expression}]", where expression may contain constants,
     * operators, registers, symbols, other variables, or nothing at all; in the latter case, the variable, if
     * any, is deleted.
     *
     * Other supported shorthand: "var" with no parameters prints the values of all variables, and "let {variable}"
     * prints the value of the specified variable.
     *
     * @this {Debuggerx86}
     * @param {string} sCmd
     * @returns {boolean} (true if valid "var" assignment, false if not)
     */
    doVar(sCmd)
    {
        let a = sCmd.match(/^\s*([A-Z_]?[A-Z0-9_]*)\s*(=?)\s*(.*)$/i);
        if (a) {
            if (!a[1]) {
                if (!this.printVariable()) this.printf("no variables\n");
                return true;    // it's not considered an error to print an empty list of variables
            }
            if (!a[2]) {
                return this.printVariable(a[1]);
            }
            if (!a[3]) {
                this.delVariable(a[1]);
                return true;    // it's not considered an error to delete a variable that didn't exist
            }
            let v = this.parseExpression(a[3]);
            if (v !== undefined) {
                this.setVariable(a[1], v);
                return true;
            }
            return false;
        }
        this.printf("invalid assignment:%s\n", sCmd);
        return false;
    }

    /**
     * doList(sAddr, fPrint)
     *
     * @this {Debuggerx86}
     * @param {string} sAddr
     * @param {boolean} [fPrint]
     * @returns {string|null}
     */
    doList(sAddr, fPrint)
    {
        let sSymbol = null;

        let dbgAddr = this.parseAddr(sAddr, true);
        if (dbgAddr) {

            let addr = this.getAddr(dbgAddr);
            if (MAXDEBUG && fPrint) {
                this.printf("%s (%%0*x)\n", this.toHexAddr(dbgAddr), this.cchAddr, addr);
            }

            let aSymbol = this.findSymbol(dbgAddr, true);
            if (aSymbol.length) {
                let nDelta, sDelta, s;
                if (aSymbol[0]) {
                    sDelta = "";
                    nDelta = (dbgAddr.off >>> 0) - aSymbol[1];
                    if (nDelta) sDelta = " + " + StrLib.toHex(nDelta, 0, true);
                    s = aSymbol[0] + " (" + this.toHexOffset(aSymbol[1], dbgAddr.sel) + ')' + sDelta;
                    if (fPrint) this.printf("%s\n", s);
                    sSymbol = s;
                }
                if (aSymbol.length > 4 && aSymbol[4]) {
                    sDelta = "";
                    nDelta = aSymbol[5] - (dbgAddr.off >>> 0);
                    if (nDelta) sDelta = " - " + StrLib.toHex(nDelta, 0, true);
                    s = aSymbol[4] + " (" + this.toHexOffset(aSymbol[5], dbgAddr.sel) + ')' + sDelta;
                    if (fPrint) this.printf("%s\n", s);
                    if (!sSymbol) sSymbol = s;
                }
            } else {
                if (fPrint) this.printf("no symbols\n");
            }
        }
        return sSymbol;
    }

    /**
     * doLoad(asArgs)
     *
     * The format of this command mirrors the DOS DEBUG "L" command:
     *
     *      l [address] [drive #] [sector #] [# sectors]
     *
     * The only optional parameter is the last, which defaults to 1 sector if not specified.
     *
     * As a quick-and-dirty way of getting the current contents of a disk image as a JSON dump
     * (which you can then save as .json disk image file), I also support this command:
     *
     *      l json [drive #]
     *
     * which is aliased to this command:
     *
     *      d disk [drive #]
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    doLoad(asArgs)
    {
        if (!asArgs[1] || asArgs[1] == '?') {
            this.printf("load commands:\n");
            this.printf("\tl [address] [drive #] [sector #] [# sectors]\n");
            return;
        }

        let fJSON = (asArgs[1] == "json");
        let iDrive, iSector = 0, nSectors = 0;

        let dbgAddr = (fJSON? {} : this.parseAddr(asArgs[1]));
        if (!dbgAddr) return;

        iDrive = this.parseValue(asArgs[2], "drive #");
        if (iDrive === undefined) return;
        if (!fJSON) {
            iSector = this.parseValue(asArgs[3], "sector #");
            if (iSector === undefined) return;
            nSectors = this.parseValue(asArgs[4], "# of sectors");
            if (nSectors === undefined) nSectors = 1;
        }

        /**
         * We choose the disk controller very simplistically: FDC for drives 0 or 1, and HDC for drives 2
         * and up, unless no HDC is present, in which case we assume FDC for all drive numbers.
         *
         * Both controllers must obviously support the same interfaces; ie, copyDrive(), seekDrive(),
         * and readData().  We also rely on the disk property to determine whether the drive is "loaded".
         *
         * In the case of the HDC, if the drive is valid, then by definition it is also "loaded", since an HDC
         * drive and its disk are inseparable; it's certainly possible that the disk object may be empty at
         * this point (ie, if the disk is uninitialized and unformatted), but that will only affect whether the
         * read succeeds or not.
         */
        let dc = this.fdc;
        if (iDrive >= 2 && this.hdc) {
            iDrive -= 2;
            dc = this.hdc;
        }
        if (dc) {
            let drive = dc.copyDrive(iDrive);
            if (drive) {
                if (drive.disk) {
                    if (fJSON) {
                        /**
                         * This is an interim solution to dumping disk images in JSON.  It has many problems, the
                         * "biggest" being that the large disk images really need to be compressed first, because they
                         * get "inflated" with use.  See the dump() method in the Disk component for more details.
                         */
                        this.doClear();
                        this.printf("%s\n", drive.disk.convertToJSON());
                        return;
                    }
                    if (dc.seekDrive(drive, iSector, nSectors)) {
                        let cb = 0;
                        let fAbort = false;
                        let sAddr = this.toHexAddr(dbgAddr);
                        while (!fAbort && drive.nBytes-- > 0) {
                            (function(dbg, dbgAddrCur) {
                                dc.readData(drive, function(b, fAsync) {
                                    if (b < 0) {
                                        dbg.printf("out of data at address %s\n", dbg.toHexAddr(dbgAddrCur));
                                        fAbort = true;
                                        return;
                                    }
                                    dbg.setByte(dbgAddrCur, b, 1, true);
                                    cb++;
                                });
                            }(this, dbgAddr));
                        }
                        /**
                         * Call updateCPU() now, since we forced setByte() to defer all updates
                         */
                        this.cpu.updateCPU(true);
                        this.printf("%d bytes read at %s\n", cb, sAddr);
                    } else {
                        this.printf("sector %d request out of range\n", iSector);
                    }
                } else {
                    this.printf("drive %d not loaded\n", iDrive);
                }
            } else {
                this.printf("invalid drive: %d\n", iDrive);
            }
        } else {
            this.printf("disk controller not present\n");
        }
    }

    /**
     * doMessages(asArgs)
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    doMessages(asArgs)
    {
        let m;
        let fCriteria = null;
        let sCategory = asArgs[1];
        let bitsMessage = this.bitsMessage;

        if (sCategory == '?') sCategory = undefined;

        if (sCategory !== undefined) {
            let bits = 0;
            if (sCategory == "all") {
                bits = MESSAGE.ALL - MESSAGE.HALT - MESSAGE.BUFFER;
                sCategory = null;
            } else if (sCategory == "on") {
                fCriteria = true;
                sCategory = null;
            } else if (sCategory == "off") {
                fCriteria = false;
                sCategory = null;
            } else {
                for (m in MESSAGE.NAMES) {
                    if (sCategory == m) {
                        bits = MESSAGE.NAMES[m];
                        fCriteria = Component.testBits(bitsMessage, bits);
                        break;
                    }
                }
                if (!bits) {
                    this.printf("unknown message category: %s\n", sCategory);
                    return;
                }
            }
            if (bits) {
                if (asArgs[2] == "on") {
                    bitsMessage = Component.setBits(bitsMessage, bits);
                    fCriteria = true;
                }
                else if (asArgs[2] == "off") {
                    bitsMessage = Component.clearBits(bitsMessage, bits);
                    fCriteria = false;
                    if (bits == MESSAGE.BUFFER) {
                        this.printf("%s\n", this.aMessageBuffer.join(""));
                        this.aMessageBuffer = [];
                    }
                }
            }
        }

        /**
         * Display those message categories that match the current criteria (on or off)
         */
        let n = 0;
        let sCategories = "";
        for (m in MESSAGE.NAMES) {
            if (!sCategory || sCategory == m) {
                let bits = MESSAGE.NAMES[m];
                let fEnabled = Component.testBits(bitsMessage, bits);
                if (fCriteria !== null && fCriteria != fEnabled) continue;
                if (sCategories) sCategories += ',';
                if (!(++n % 10)) sCategories += "\n\t";
                sCategories += m;
            }
        }

        if (sCategory === undefined) {
            this.printf("message commands:\n\tm [category] [on|off]\tturn categories on/off\n");
        }

        this.printf("%s%s\n", (fCriteria !== null? (fCriteria? "messages on:  " : "messages off: ") : "message categories:\n\t"), (sCategories || "none"));

        this.bitsMessage = bitsMessage;

        this.historyInit();     // call this just in case MESSAGE.INT was turned on
    }

    /**
     * doMouse(sAction, sDelta)
     *
     * When using the "click" action, specify 0 for Mouse.BUTTON.LEFT or 2 for Mouse.BUTTON.RIGHT.
     *
     * @this {Debuggerx86}
     * @param {string} sAction
     * @param {string} sDelta
     */
    doMouse(sAction, sDelta)
    {
        if (this.mouse) {
            let n = 0, sign = 1;
            if (sDelta) {
                if (sDelta.charAt(0) == '-') {
                    sign = -1;
                    sDelta = sDelta.substr(1);
                }
                n = this.parseValue(sDelta, sAction);
                if (n === undefined) return;
                n = (n * sign)|0;
            }
            switch(sAction) {
            case "x":
                this.mouse.moveMouse(n, 0);
                break;
            case "y":
                this.mouse.moveMouse(0, n);
                break;
            case "click":
                this.mouse.clickMouse(n, true);
                this.mouse.clickMouse(n, false);
                break;
            default:
                this.printf("unknown action: %s\n", sAction);
                break;
            }
            return;
        }
        this.printf("no mouse\n");
    }

    /**
     * doExecOptions(asArgs)
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} asArgs
     */
    doExecOptions(asArgs)
    {
        if (asArgs[0].length > 1) {
            asArgs.splice(1, 0, asArgs[0].slice(1));
            asArgs[0] = asArgs[0].charAt(0);
        }
        if (!asArgs[1] || asArgs[1] == '?') {
            this.printf("execution options:\n");
            this.printf("\tbv [halt|trace]\n");
            this.printf("\tcs int #\tset checksum cycle interval to #\n");
            this.printf("\tcs start #\tset checksum cycle start count to #\n");
            this.printf("\tcs stop #\tset checksum cycle stop count to #\n");
            this.printf("\tsp #\t\tset speed multiplier to #\n");
            return;
        }
        let nCycles;
        switch (asArgs[1]) {
        case "bv":
            switch (asArgs[2]) {
            case "halt":
                this.vectorHalt = true;
                break;
            case "trace":
                this.vectorHalt = false;
                break;
            default:
                if (asArgs[2]) {
                    this.printf("unknown vector option: %s\n", asArgs[2]);
                    return;
                }
            }
            this.printf("vector breakpoints: %s\n", (this.vectorHalt? "halt" : "trace"));
            break;
        case "cs":
            if (asArgs[3] !== undefined) nCycles = +asArgs[3];          // warning: decimal instead of hex conversion
            switch (asArgs[2]) {
            case "int":
                this.cpu.nCyclesChecksumInterval = nCycles;
                break;
            case "start":
                this.cpu.nCyclesChecksumStart = nCycles;
                break;
            case "stop":
                this.cpu.nCyclesChecksumStop = nCycles;
                break;
            default:
                this.printf("unknown cs option\n");
                return;
            }
            if (nCycles !== undefined) {
                this.cpu.resetChecksum();
            }
            this.printf("checksums %s\n", (this.cpu.flags.checksum? "enabled" : "disabled"));
            break;
        case "sp":
            if (asArgs[2] !== undefined) {
                if (!this.cpu.setSpeed(+asArgs[2])) {
                    this.printf("warning: using 1x multiplier, previous target not reached\n");
                }
            }
            this.printf("target speed: %s (%dx)\n", this.cpu.getSpeedTarget(), this.cpu.getSpeed());
            break;
        default:
            this.printf("unknown option: %s\n", asArgs[1]);
            break;
        }
    }

    /**
     * doOutput(sPort, sByte)
     *
     * Simulate a 1-byte port output operation.
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sPort
     * @param {string|undefined} sByte (string representation of 1 byte)
     */
    doOutput(sPort, sByte)
    {
        if (!sPort || sPort == '?') {
            this.printf("output commands:\n");
            this.printf("\to [p] [b]\twrite byte [b] to port [p]\n");
            /**
             * TODO: Regarding this warning, consider adding an "unchecked" version of
             * bus.checkPortOutputNotify(), since all Debugger memory accesses are unchecked, too.
             *
             * All port I/O handlers ARE aware when the Debugger is calling (addrFrom is undefined),
             * but changing them all to be non-destructive would take time, and situations where you
             * actually want to affect the hardware state are just as likely as not....
             */
            this.printf("warning: port accesses can affect hardware state\n");
            return;
        }
        let port = this.parseValue(sPort, "port #");
        let bOut = this.parseValue(sByte);
        if (port !== undefined && bOut !== undefined) {
            this.bus.checkPortOutputNotify(port, 1, bOut);
            this.printf("%#06x: %#04x\n", port, bOut);
        }
    }

    /**
     * doRegisters(asArgs, fInstruction)
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} [asArgs]
     * @param {boolean} [fInstruction] (true to include the current instruction; default is true)
     */
    doRegisters(asArgs, fInstruction)
    {
        if (asArgs && asArgs[1] == '?') {
            this.printf("register commands:\n");
            this.printf("\tr\tdump registers\n");
            if (this.fpuActive) this.printf("\trfp\tdump floating-point registers\n");
            this.printf("\trp\tdump all registers\n");
            this.printf("\trx [#]\tset flag or register x to [#]\n");
            return;
        }

        let fProt;
        if (fInstruction == null) fInstruction = true;

        if (asArgs != null && asArgs.length > 1) {
            let sReg = asArgs[1];
            if (this.fpuActive && sReg == "fp") {
                this.doFPURegisters(asArgs);
                return;
            }
            if (sReg == 'p') {
                fProt = (this.cpu.model >= X86.MODEL_80286);
            }
            else {
             // fInstruction = false;
                let sValue = null;
                let i = sReg.indexOf('=');
                if (i > 0) {
                    sValue = sReg.substr(i + 1);
                    sReg = sReg.substr(0, i);
                }
                else if (asArgs.length > 2) {
                    sValue = asArgs[2];
                }
                else {
                    this.printf("missing value for %s\n", asArgs[1]);
                    return;
                }

                let w = this.parseExpression(sValue);
                if (w === undefined) return;

                let fUnknown, fValid = true;
                let sRegMatch = sReg.toUpperCase();
                if (sRegMatch[0] == 'E' && sRegMatch[1] != 'S' && this.cchReg <= 4) {
                    sRegMatch = null;
                }
                switch (sRegMatch) {
                case "AL":
                    this.cpu.regEAX = (this.cpu.regEAX & ~0xff) | (w & 0xff);
                    break;
                case "AH":
                    this.cpu.regEAX = (this.cpu.regEAX & ~0xff00) | ((w << 8) & 0xff);
                    break;
                case "AX":
                    this.cpu.regEAX = (this.cpu.regEAX & ~0xffff) | (w & 0xffff);
                    break;
                case "BL":
                    this.cpu.regEBX = (this.cpu.regEBX & ~0xff) | (w & 0xff);
                    break;
                case "BH":
                    this.cpu.regEBX = (this.cpu.regEBX & ~0xff00) | ((w << 8) & 0xff);
                    break;
                case "BX":
                    this.cpu.regEBX = (this.cpu.regEBX & ~0xffff) | (w & 0xffff);
                    break;
                case "CL":
                    this.cpu.regECX = (this.cpu.regECX & ~0xff) | (w & 0xff);
                    break;
                case "CH":
                    this.cpu.regECX = (this.cpu.regECX & ~0xff00) | ((w << 8) & 0xff);
                    break;
                case "CX":
                    this.cpu.regECX = (this.cpu.regECX & ~0xffff) | (w & 0xffff);
                    break;
                case "DL":
                    this.cpu.regEDX = (this.cpu.regEDX & ~0xff) | (w & 0xff);
                    break;
                case "DH":
                    this.cpu.regEDX = (this.cpu.regEDX & ~0xff00) | ((w << 8) & 0xff);
                    break;
                case "DX":
                    this.cpu.regEDX = (this.cpu.regEDX & ~0xffff) | (w & 0xffff);
                    break;
                case "SP":
                    this.cpu.setSP((this.cpu.getSP() & ~0xffff) | (w & 0xffff));
                    break;
                case "BP":
                    this.cpu.regEBP = (this.cpu.regEBP & ~0xffff) | (w & 0xffff);
                    break;
                case "SI":
                    this.cpu.regESI = (this.cpu.regESI & ~0xffff) | (w & 0xffff);
                    break;
                case "DI":
                    this.cpu.regEDI = (this.cpu.regEDI & ~0xffff) | (w & 0xffff);
                    break;
                /**
                 * DANGER: For any of the segment loads below, by going through the normal CPU
                 * segment load procedure, you run the risk of generating a fault in the machine
                 * if you're not careful.  So, um, be careful.
                 */
                case "DS":
                    this.cpu.setDS(w);
                    break;
                case "ES":
                    this.cpu.setES(w);
                    break;
                case "SS":
                    this.cpu.setSS(w);
                    break;
                case "CS":
                 // fInstruction = true;
                    this.cpu.setCS(w);
                    this.dbgAddrNextCode = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
                    break;
                case "IP":
                case "EIP":
                 // fInstruction = true;
                    this.cpu.setIP(w);
                    this.dbgAddrNextCode = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
                    break;
                /**
                 * I used to alias "PC" (Program Counter) to "IP" (Instruction Pointer), because in PC-DOS 1.00
                 * through 2.10, DEBUG.COM did the same thing.  Then I discovered that, starting with PC-DOS 3.00,
                 * DEBUG.COM changed "PC" to refer to the 16-bit flags register (Program or Processor Control?)
                 * I've elected to go for PC-DOS 3.00+ compatibility, since that will be more widely known.
                 *
                 * PCx86 prefers "PS" (Processor Status) for accessing the FLAGS register in its 16-bit (or 32-bit)
                 * entirety.  Individual flag bits can also be accessed as 1-bit registers, using the names shown
                 * below ("C", "P", "A", "Z", etc.)
                 */
                case "PC":
                case "PS":
                    this.cpu.setPS(w);
                    break;
                case 'C':
                    if (w) this.cpu.setCF(); else this.cpu.clearCF();
                    break;
                case 'P':
                    if (w) this.cpu.setPF(); else this.cpu.clearPF();
                    break;
                case 'A':
                    if (w) this.cpu.setAF(); else this.cpu.clearAF();
                    break;
                case 'Z':
                    if (w) this.cpu.setZF(); else this.cpu.clearZF();
                    break;
                case 'S':
                    if (w) this.cpu.setSF(); else this.cpu.clearSF();
                    break;
                case 'I':
                    if (w) this.cpu.setIF(); else this.cpu.clearIF();
                    break;
                case 'D':
                    if (w) this.cpu.setDF(); else this.cpu.clearDF();
                    break;
                case 'V':
                    if (w) this.cpu.setOF(); else this.cpu.clearOF();
                    break;
                default:
                    fUnknown = true;
                    if (this.cpu.model >= X86.MODEL_80286) {
                        fUnknown = false;
                        switch(sRegMatch){
                        case "MS":
                            this.cpu.setMSW(w);
                            break;
                        case "TR":
                            /**
                             * DANGER: Like any of the segment loads above, by going through the normal CPU
                             * segment load procedure, you run the risk of generating a fault in the machine
                             * if you're not careful.  So, um, be careful.
                             */
                            if (this.cpu.segTSS.load(w) === X86.ADDR_INVALID) {
                                fValid = false;
                            }
                            break;
                        /**
                         * TODO: Add support for GDTR (addr and limit), IDTR (addr and limit), and perhaps
                         * even the ability to edit descriptor information associated with each segment register.
                         */
                        default:
                            fUnknown = true;
                            if (I386 && this.cpu.model >= X86.MODEL_80386) {
                                fUnknown = false;
                                switch(sRegMatch){
                                case "EAX":
                                    this.cpu.regEAX = w;
                                    break;
                                case "EBX":
                                    this.cpu.regEBX = w;
                                    break;
                                case "ECX":
                                    this.cpu.regECX = w;
                                    break;
                                case "EDX":
                                    this.cpu.regEDX = w;
                                    break;
                                case "ESP":
                                    this.cpu.setSP(w);
                                    break;
                                case "EBP":
                                    this.cpu.regEBP = w;
                                    break;
                                case "ESI":
                                    this.cpu.regESI = w;
                                    break;
                                case "EDI":
                                    this.cpu.regEDI = w;
                                    break;
                                /**
                                 * DANGER: For any of the segment loads below, by going through the normal CPU
                                 * segment load procedure, you run the risk of generating a fault in the machine
                                 * if you're not careful.  So, um, be careful.
                                 */
                                case "FS":
                                    this.cpu.setFS(w);
                                    break;
                                case "GS":
                                    this.cpu.setGS(w);
                                    break;
                                case "CR0":
                                    this.cpu.regCR0 = w;
                                    X86.helpLoadCR0.call(this.cpu, w);
                                    break;
                                case "CR2":
                                    this.cpu.regCR2 = w;
                                    break;
                                case "CR3":
                                    this.cpu.regCR3 = w;
                                    X86.helpLoadCR3.call(this.cpu, w);
                                    break;
                                /**
                                 * TODO: Add support for DR0-DR7 and TR6-TR7.
                                 */
                                default:
                                    fUnknown = true;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    if (fUnknown) {
                        this.printf("unknown register: %s\n", sReg);
                        return;
                    }
                }
                if (!fValid) {
                    this.printf("invalid value: %s\n", sValue);
                    return;
                }
                this.cpu.updateCPU();
                this.printf("updated registers:\n");
            }
        }

        this.printf("%s\n", this.getRegDump(fProt));

        if (fInstruction) {
            this.dbgAddrNextCode = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
            this.doUnassemble(this.toHexAddr(this.dbgAddrNextCode));
        }
    }

    /**
     * doFPURegisters(asArgs)
     *
     * NOTE: If we're called, the existence of an FPU has already been verified.
     *
     * @this {Debuggerx86}
     * @param {Array.<string>} [asArgs]
     */
    doFPURegisters(asArgs)
    {
        let fpu = this.fpuActive;
        this.assert(fpu);
        let wStatus = fpu.getStatus(), wControl = fpu.getControl();
        for (let i = 0; i < 8; i++) {
            let a = fpu.readFPUStack(i);
            if (!a) break;
            let sValue = StrLib.pad(a[2].toFixed(15), 24);
            this.printf("ST%d: %s  %x,%x  [%d:%s]\n", i, sValue, a[4], a[3], a[0], Debuggerx86.FPU_TAGS[a[1]]);
            // this.printf("  REG%d %s%s%s\n", a[0], StrLib.toBin(a[7], 16), StrLib.toBin(a[6]), StrLib.toBin(a[5]));
        }
        this.printf("    B3SSS210ESPUOZDI               xxxIRRPPIxPUOZDI\n");
        this.printf("SW: %s (%#06x)  CW: %s (%#06x)\n", StrLib.toBin(wStatus, 16), wStatus, StrLib.toBin(wControl, 16), wControl);
    }

    /**
     * doRun(sCmd, sAddr, sLine, fQuiet)
     *
     * @this {Debuggerx86}
     * @param {string} sCmd
     * @param {string|undefined} [sAddr]
     * @param {string} [sLine] (the complete command-line)
     * @param {boolean} [fQuiet]
     */
    doRun(sCmd, sAddr, sLine, fQuiet)
    {
        if (sCmd == "gt") {
            this.fIgnoreNextCheckFault = true;
        }
        if (sAddr !== undefined) {
            let dbgAddr = this.parseAddr(sAddr, true);
            if (!dbgAddr) return;
            this.parseAddrOptions(dbgAddr, sLine);
            this.setTempBreakpoint(dbgAddr);
        }
        this.startCPU(true, fQuiet);
    }

    /**
     * doPrint(sCmd)
     *
     * NOTE: If the string to print is a quoted string, then we run it through replaceRegs(), so that
     * you can take advantage of all the special replacement options used for software interrupt logging.
     *
     * @this {Debuggerx86}
     * @param {string} sCmd
     */
    doPrint(sCmd)
    {
        sCmd = StrLib.trim(sCmd);
        let a = sCmd.match(/^(['"])(.*?)\1$/);
        if (!a) {
            this.parseExpression(sCmd, false);
        } else {
            this.printf("%s\n", this.replaceRegs(a[2]));
        }
    }

    /**
     * doStep(sCmd)
     *
     * @this {Debuggerx86}
     * @param {string} [sCmd] "p" or "pr"
     */
    doStep(sCmd)
    {
        let fCallStep = true;
        let nRegs = (sCmd == "pr"? 1 : 0);
        /**
         * Set up the value for this.nStep (ie, 1 or 2) depending on whether the user wants
         * a subsequent register dump ("pr") or not ("p").
         */
        let nStep = 1 + nRegs;
        if (!this.nStep) {
            let fPrefix;
            let fRepeat = false;
            let dbgAddr = this.newAddr(this.cpu.getIP(), this.cpu.getCS());
            do {
                fPrefix = false;
                let bOpcode = this.getByte(dbgAddr), bOp2;
                switch (bOpcode) {
                case X86.OPCODE.ES:
                case X86.OPCODE.CS:
                case X86.OPCODE.SS:
                case X86.OPCODE.DS:
                case X86.OPCODE.FS:     // I386 only
                case X86.OPCODE.GS:     // I386 only
                case X86.OPCODE.OS:     // I386 only
                case X86.OPCODE.AS:     // I386 only
                case X86.OPCODE.LOCK:
                    this.incAddr(dbgAddr, 1);
                    fPrefix = true;
                    break;
                case X86.OPCODE.INT3:
                case X86.OPCODE.INTO:
                    this.nStep = nStep;
                    this.incAddr(dbgAddr, 1);
                    break;
                case X86.OPCODE.INTN:
                    this.nStep = nStep;
                    this.incAddr(dbgAddr, 1);
                    bOp2 = this.getByte(dbgAddr);
                    this.incAddr(dbgAddr, 1);
                    /**
                     * Look for INT 0x32 functions 4-6 and skip over the null-terminated string following the interrupt.
                     */
                    if (bOp2 == 0x32) {
                        let regAH = (this.cpu.regEAX >> 8) & 0xFF;
                        if (regAH >= 0x04 && regAH <= 0x06) {
                            let limit = 128;
                            while ((bOp2 = this.getByte(dbgAddr)) && limit--) {
                                this.incAddr(dbgAddr, 1);
                            }
                            this.incAddr(dbgAddr, 1);
                        }
                    }
                    break;
                case X86.OPCODE.LOOPNZ:
                case X86.OPCODE.LOOPZ:
                case X86.OPCODE.LOOP:
                    this.nStep = nStep;
                    this.incAddr(dbgAddr, dbgAddr.fData32? 4 : 2);
                    break;
                case X86.OPCODE.CALL:
                    if (fCallStep) {
                        this.nStep = nStep;
                        this.incAddr(dbgAddr, dbgAddr.fData32? 5 : 3);
                    }
                    break;
                case X86.OPCODE.CALLF:
                    if (fCallStep) {
                        this.nStep = nStep;
                        this.incAddr(dbgAddr, dbgAddr.fData32? 7 : 5);
                    }
                    break;
                case X86.OPCODE.GRP4W:
                    if (fCallStep) {
                        let w = this.getWord(dbgAddr) & X86.OPCODE.CALLMASK;
                        if (w == X86.OPCODE.CALLW || w == X86.OPCODE.CALLFDW) {
                            this.nStep = nStep;
                            this.getInstruction(dbgAddr);       // advance dbgAddr past this variable-length CALL
                        }
                    }
                    break;
                case X86.OPCODE.REPZ:
                case X86.OPCODE.REPNZ:
                    this.incAddr(dbgAddr, 1);
                    fRepeat = fPrefix = true;
                    break;
                case X86.OPCODE.INSB:
                case X86.OPCODE.INSW:
                case X86.OPCODE.OUTSB:
                case X86.OPCODE.OUTSW:
                case X86.OPCODE.MOVSB:
                case X86.OPCODE.MOVSW:
                case X86.OPCODE.CMPSB:
                case X86.OPCODE.CMPSW:
                case X86.OPCODE.STOSB:
                case X86.OPCODE.STOSW:
                case X86.OPCODE.LODSB:
                case X86.OPCODE.LODSW:
                case X86.OPCODE.SCASB:
                case X86.OPCODE.SCASW:
                    if (fRepeat) {
                        this.nStep = nStep;
                        this.incAddr(dbgAddr, 1);
                    }
                    break;
                default:
                    break;
                }
            } while (fPrefix);

            if (this.nStep) {
                this.setTempBreakpoint(dbgAddr);
                if (!this.startCPU()) {
                    if (this.cmp) this.cmp.updateFocus();
                    this.nStep = 0;
                }
                /**
                 * A successful run will ultimately call stop(), which will in turn call clearTempBreakpoint(),
                 * which will clear nStep, so there's your assurance that nStep will be reset.  Now we may have
                 * stopped for reasons unrelated to the temporary breakpoint, but that's OK.
                 */
            } else {
                this.doTrace(nRegs? "tr" : "t");
            }
        } else {
            this.printf("step in progress\n");
        }
    }

    /**
     * getCall(dbgAddr, fFar)
     *
     * Given a possible return address (typically from the stack), look for a matching CALL (or INT) that
     * immediately precedes that address.
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     * @param {boolean} [fFar]
     * @returns {string|null} (CALL instruction at or near dbgAddr, or null if none)
     */
    getCall(dbgAddr, fFar)
    {
        let sCall = null;
        let off = dbgAddr.off;
        let offOrig = off;
        for (let n = 1; n <= 6 && !!off; n++) {
            if (n > 2) {
                dbgAddr.off = off;
                dbgAddr.addr = undefined;
                let s = this.getInstruction(dbgAddr);
                if (s.indexOf("CALL") >= 0 || fFar && s.indexOf("INT") >= 0) {
                    /**
                     * Verify that the length of this CALL (or INT), when added to the address of the CALL (or INT),
                     * matches the original return address.  We do this by getting the string index of the opcode bytes,
                     * subtracting that from the string index of the next space, and dividing that difference by two,
                     * to yield the length of the CALL (or INT) instruction, in bytes.
                     */
                    let i = s.indexOf(' ');
                    let j = s.indexOf(' ', i+1);
                    if (off + (j - i - 1)/2 == offOrig) {
                        sCall = s;
                        break;
                    }
                }
            }
            off--;
        }
        dbgAddr.off = offOrig;
        return sCall;
    }

    /**
     * doStackTrace(sCmd, sAddr)
     *
     * Use "k" for a normal stack trace and "ks" for a stack trace with symbolic info.
     *
     * @this {Debuggerx86}
     * @param {string} [sCmd]
     * @param {string} [sAddr] (not used yet)
     */
    doStackTrace(sCmd, sAddr)
    {
        if (sAddr == '?') {
            this.printf("stack trace commands:\n");
            this.printf("\tk\tshow frame addresses\n");
            this.printf("\tks\tshow symbol information\n");
            return;
        }

        let nFrames = 10, cFrames = 0;
        let selCode = this.cpu.segCS.sel;
        let dbgAddrCall = this.newAddr();
        let dbgAddrStack = this.newAddr(this.cpu.getSP(), this.cpu.getSS());
        this.printf("stack trace for %s\n", this.toHexAddr(dbgAddrStack));

        while (cFrames < nFrames) {
            let sCall = null, sCallPrev = null, cTests = 256;
            while ((dbgAddrStack.off >>> 0) < this.cpu.regLSPLimit) {
                dbgAddrCall.off = this.getWord(dbgAddrStack, true);
                /**
                 * Because we're using the auto-increment feature of getWord(), and because that will automatically
                 * wrap the offset around the end of the segment, we must also check the addr property to detect the wrap.
                 */
                if (dbgAddrStack.addr == null || !cTests--) break;
                dbgAddrCall.sel = selCode;
                sCall = this.getCall(dbgAddrCall);
                if (sCall) break;
                dbgAddrCall.sel = this.getWord(dbgAddrStack);
                sCall = this.getCall(dbgAddrCall, true);
                if (sCall) {
                    selCode = this.getWord(dbgAddrStack, true);
                    /**
                     * It's not strictly necessary that we skip over the flags word that's pushed as part of any INT
                     * instruction, but it reduces the risk of misinterpreting it as a return address on the next iteration.
                     */
                    if (sCall.indexOf("INT") > 0) this.getWord(dbgAddrStack, true);
                    break;
                }
            }
            /**
             * The sCallPrev check eliminates duplicate sequential calls, which are usually (but not always)
             * indicative of a false positive, in which case the previous call is probably bogus as well, but
             * at least we won't duplicate that mistake.  Of course, there are always exceptions, recursion
             * being one of them, but it's rare that we're debugging recursive code.
             */
            if (!sCall || sCall == sCallPrev) break;
            let sSymbol = null;
            if (sCmd == "ks") {
                let a = sCall.match(/[0-9A-F]+$/);
                if (a) sSymbol = this.doList(a[0]);
            }
            sCall = StrLib.pad(sCall, dbgAddrCall.fAddr32? -74 : -62) + ';' + (sSymbol || "stack=" + this.toHexAddr(dbgAddrStack)); // + " return=" + this.toHexAddr(dbgAddrCall));
            this.printf("%s\n", sCall);
            sCallPrev = sCall;
            cFrames++;
        }
        if (!cFrames) this.printf("no return addresses found\n");
    }

    /**
     * doTrace(sCmd, sCount)
     *
     * The "t" and "tr" commands interpret the count as a number of instructions, and since
     * we call the Debugger's stepCPU() for each iteration, a single instruction includes
     * any/all prefixes; the CPU's stepCPU() treats prefixes as discrete operations.  The only
     * difference between "t" and "tr": the former displays only the next instruction, while
     * the latter also displays the (updated) registers.
     *
     * The "tc" command interprets the count as a number of cycles rather than instructions,
     * allowing you to quickly execute large chunks of instructions with a single command; it
     * doesn't display anything until the the chunk has finished.
     *
     * However, generally a more useful command is "bn", which allows you to break after some
     * number of instructions have been executed (as opposed to some number of cycles).
     *
     * @this {Debuggerx86}
     * @param {string} [sCmd] ("t", "tc", or "tr")
     * @param {string} [sCount] # of instructions to step
     */
    doTrace(sCmd, sCount)
    {
        let dbg = this;
        let fRegs = (sCmd != "t");
        let nCount = this.parseValue(sCount, undefined, true) || 1;
        let nCycles = (nCount == 1? 0 : 1);
        if (sCmd == "tc") {
            nCycles = nCount;
            nCount = 1;
        }
        WebLib.onCountRepeat(
            nCount,
            function onCountStep() {
                return dbg.setBusy(true) && dbg.stepCPU(nCycles, fRegs, false);
            },
            function onCountStepComplete() {
                /**
                 * We explicitly called stepCPU() with fUpdateCPU === false, because repeatedly
                 * calling updateCPU() can be very slow, especially when fDisplayLiveRegs is true,
                 * so once the repeat count has been exhausted, we must perform a final updateCPU().
                 */
                dbg.cpu.updateCPU(true);
                dbg.setBusy(false);
            }
        );
    }

    /**
     * initAddrSize(dbgAddr)
     *
     * @this {Debuggerx86}
     * @param {DbgAddrx86} dbgAddr
     */
    initAddrSize(dbgAddr)
    {
        /**
         * For proper disassembly of instructions preceded by an OPERAND (0x66) size prefix, we set
         * dbgAddr.fData32 to true whenever the operand size is 32-bit; similarly, for an ADDRESS (0x67)
         * size prefix, we set dbgAddr.fAddr32 to true whenever the address size is 32-bit.
         *
         * Initially (and every time we've processed a complete instruction), both fields must be
         * set to their original value.
         */
        if (dbgAddr.fData32Orig != null) dbgAddr.fData32 = dbgAddr.fData32Orig;
        if (dbgAddr.fAddr32Orig != null) dbgAddr.fAddr32 = dbgAddr.fAddr32Orig;
        dbgAddr.fData32Orig = dbgAddr.fData32;
        dbgAddr.fAddr32Orig = dbgAddr.fAddr32;
    }

    /**
     * isStringIns(bOpcode)
     *
     * @this {Debuggerx86}
     * @param {number} bOpcode
     * @returns {boolean} (true if string instruction, false if not)
     */
    isStringIns(bOpcode)
    {
        return (bOpcode >= X86.OPCODE.MOVSB && bOpcode <= X86.OPCODE.CMPSW || bOpcode >= X86.OPCODE.STOSB && bOpcode <= X86.OPCODE.SCASW);
    }

    /**
     * doUnassemble(sAddr, sAddrEnd, n)
     *
     * @this {Debuggerx86}
     * @param {string} [sAddr]
     * @param {string} [sAddrEnd]
     * @param {number} [n]
     */
    doUnassemble(sAddr, sAddrEnd, n)
    {
        let dbgAddr = this.parseAddr(sAddr, true);
        if (!dbgAddr) return;

        if (n === undefined) n = 1;

        let cb = 0x100;
        if (sAddrEnd !== undefined) {

            let dbgAddrEnd = this.parseAddr(sAddrEnd, true);
            if (!dbgAddrEnd || dbgAddrEnd.off < dbgAddr.off) return;

            /**
             * We now +1 the count to make the ending address inclusive (just like the dump command).
             */
            cb = dbgAddrEnd.off - dbgAddr.off + 1;
            if (cb < 0) cb = 1;
            /**
             * Limiting the amount of disassembled code to 4K helps prevent the user from wedging the browser.
             */
            if (cb > 0x1000) cb = 0x1000;
            n = -1;
        }

        let cLines = 0;
        let sInstruction;
        this.initAddrSize(dbgAddr);

        while (cb > 0 && n--) {

            let nSequence = (this.isBusy(false) || this.nStep)? this.nCycles : -1;
            let sComment = (nSequence >= 0? "cycles" : "");
            let aSymbol = this.findSymbol(dbgAddr);

            let addr = dbgAddr.addr;    // we snap dbgAddr.addr *after* calling findSymbol(), which re-evaluates it

            if (aSymbol[0] && n) {
                if (!cLines && n || aSymbol[0].indexOf('+') < 0) {
                    let sLabel = aSymbol[0] + ':';
                    if (aSymbol[2]) sLabel += ' ' + aSymbol[2];
                    this.printf("%s\n", sLabel);
                }
            }

            if (aSymbol[3]) {
                sComment = aSymbol[3];
                nSequence = -1;
            }

            sInstruction = this.getInstruction(dbgAddr, sComment, nSequence);

            this.printf("%s\n", sInstruction);
            this.dbgAddrNextCode = dbgAddr;
            cb -= dbgAddr.addr - addr;
            cLines++;
        }
    }

    /**
     * parseCommand(sCmd, fSave, chSep)
     *
     * @this {Debuggerx86}
     * @param {string|undefined} sCmd
     * @param {boolean} [fSave] is true to save the command, false if not
     * @param {string} [chSep] is the command separator character (default is ';')
     * @returns {Array.<string>}
     */
    parseCommand(sCmd, fSave, chSep = ';')
    {
        if (fSave) {
            if (!sCmd) {
                sCmd = this.aPrevCmds[this.iPrevCmd+1];
            } else {
                if (this.iPrevCmd < 0 && this.aPrevCmds.length) {
                    this.iPrevCmd = 0;
                }
                if (this.iPrevCmd < 0 || sCmd != this.aPrevCmds[this.iPrevCmd]) {
                    this.aPrevCmds.splice(0, 0, sCmd);
                    this.iPrevCmd = 0;
                }
                this.iPrevCmd--;
            }
        }
        let asArgs = [];
        if (sCmd) {
            /**
             * With the introduction of breakpoint commands (ie, quoted command sequences
             * associated with a breakpoint), we can no longer perform simplistic splitting.
             *
             *      asArgs = sCmd.split(chSep);
             *      for (let i = 0; i < asArgs.length; i++) asArgs[i] = StrLib.trim(asArgs[i]);
             *
             * We may now split on semi-colons ONLY if they are outside a quoted sequence.
             *
             * Also, to allow quoted strings *inside* breakpoint commands, we first replace all
             * DOUBLE double-quotes with single quotes.
             */
            sCmd = sCmd.replace(/""/g, "'");

            let iPrev = 0;
            let chQuote = null;
            /**
             * NOTE: Processing charAt() up to and INCLUDING length is not a typo; we're taking
             * advantage of the fact that charAt() with an invalid index returns an empty string,
             * allowing us to use the same substring() call to capture the final portion of sCmd.
             *
             * In a sense, it allows us to pretend that the string ends with a zero terminator.
             */
            let fQuoted = false;
            for (let i = 0, chPrev = null; i <= sCmd.length; i++) {
                let ch = sCmd.charAt(i);
                if (ch == '"' || ch == "'") {
                    if (!chQuote) {
                        chQuote = ch;
                        fQuoted = true;
                    } else if (ch == chQuote) {
                        chQuote = null;
                    }
                }
                else if (ch == chSep && !chQuote && ch != chPrev || !ch) {
                    /**
                     * Recall that substring() accepts starting (inclusive) and ending (exclusive)
                     * indexes, whereas substr() accepts a starting index and a length.  We need the former.
                     */
                    let s = StrLib.trim(sCmd.substring(iPrev, i));
                    if (!fQuoted) s = s.toLowerCase();
                    asArgs.push(s);
                    iPrev = i + 1;
                    fQuoted = false;
                }
                chPrev = ch;
            }
            if (chSep == ' ' && asArgs.length) {
                /**
                 * I've folded in the old shiftArgs() code here: deal with any command (eg, "r") that allows but
                 * doesn't require whitespace between the command and first argument, and break them apart anyway.
                 */
                let s0 = asArgs[0];
                let ch0 = s0.charAt(0);
                for (let i = 1; i < s0.length; i++) {
                    let ch = s0.charAt(i);
                    if (ch0 == '?' || ch0 == 'r' || ch < 'a' || ch > 'z') {
                        asArgs[0] = s0.substr(i);
                        asArgs.unshift(s0.substr(0, i));
                        break;
                    }
                }
            }
        }
        return asArgs;
    }

    /**
     * doCommand(sCmd, fQuiet)
     *
     * @this {Debuggerx86}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} (true if command processed, false if unrecognized)
     */
    doCommand(sCmd, fQuiet)
    {
        let result = true;

        if (!this.cpu) {
            this.printf("no CPU attached\n");
            return false;
        }

        try {
            if (!sCmd.length || sCmd == "end") {
                if (this.fAssemble) {
                    this.printf("ended assemble at %s\n", this.toHexAddr(this.dbgAddrAssemble));
                    this.dbgAddrNextCode = this.dbgAddrAssemble;
                    this.fAssemble = false;
                }
                sCmd = "";
            }
            else if (!fQuiet) {
                let sPrompt = ">> ";
                if (this.cpu.regCR0 & X86.CR0.MSW.PE) {
                    sPrompt = (this.cpu.regPS & X86.PS.VM)? "-- " : "## ";
                }
                this.printf("%s%s\n", sPrompt, sCmd);
            }

            let ch = sCmd.charAt(0);
            if (ch == '"' || ch == "'") return true;

            /**
             * Zap the previous message buffer to ensure the new command's output is not tossed out as a repeat.
             */
            this.sMessagePrev = null;

            /**
             * I've relaxed the !isBusy() requirement, to maximize our ability to issue Debugger commands externally.
             */
            if (this.isReady() /* && !this.isBusy(true) */ && sCmd.length > 0) {

                if (this.fAssemble) {
                    sCmd = "a " + this.toHexAddr(this.dbgAddrAssemble) + ' ' + sCmd;
                }

                let asArgs = this.parseCommand(sCmd, false, ' ');

                switch (asArgs[0].charAt(0)) {
                case 'a':
                    this.doAssemble(asArgs);
                    break;
                case 'b':
                    this.doBreak(asArgs, sCmd);
                    break;
                case 'c':
                    this.doClear(asArgs[0]);
                    break;
                case 'd':
                    if (!COMPILED && sCmd == "debug") {
                        window.DEBUG = true;
                        this.printf("DEBUG checks on\n");
                        break;
                    }
                    this.doDump(asArgs);
                    break;
                case 'e':
                    if (asArgs[0] == "else") break;
                    this.doEdit(asArgs);
                    break;
                case 'f':
                    this.doFreqs(asArgs[1]);
                    break;
                case 'g':
                    this.doRun(asArgs[0], asArgs[1], sCmd, fQuiet);
                    break;
                case 'h':
                    this.doHalt(fQuiet);
                    break;
                case 'i':
                    if (asArgs[0] == "if") {
                        if (!this.doIf(sCmd.substr(2), fQuiet)) {
                            result = false;
                        }
                        break;
                    }
                    if (asArgs[0] == "int") {
                        if (!this.doInt(asArgs[1])) {
                            result = false;
                        }
                        break;
                    }
                    this.doInput(asArgs[1]);
                    break;
                case 'k':
                    this.doStackTrace(asArgs[0], asArgs[1]);
                    break;
                case 'l':
                    if (asArgs[0] == "ln") {
                        this.doList(asArgs[1], true);
                        break;
                    }
                    this.doLoad(asArgs);
                    break;
                case 'm':
                    if (asArgs[0] == "mouse") {
                        this.doMouse(asArgs[1], asArgs[2]);
                        break;
                    }
                    this.doMessages(asArgs);
                    break;
                case 'o':
                    this.doOutput(asArgs[1], asArgs[2]);
                    break;
                case 'p':
                    if (asArgs[0] == "print") {
                        this.doPrint(sCmd.substr(5));
                        break;
                    }
                    this.doStep(asArgs[0]);
                    break;
                case 'r':
                    if (sCmd == "reset") {
                        if (this.cmp) this.cmp.reset();
                        break;
                    }
                    this.doRegisters(asArgs);
                    break;
                case 't':
                    this.doTrace(asArgs[0], asArgs[1]);
                    break;
                case 'u':
                    this.doUnassemble(asArgs[1], asArgs[2], 8);
                    break;
                case 'v':
                    if (asArgs[0] == "var") {
                        if (!this.doVar(sCmd.substr(3))) {
                            result = false;
                        }
                        break;
                    }
                    this.printf("%s version %s (%s%s%s%s%s)\n", (APPNAME || "PCx86"), APPVERSION, this.cpu.model, (COMPILED? ",RELEASE" : (DEBUG? ",DEBUG" : ",NODEBUG")), (PREFETCH? ",PREFETCH" : ",NOPREFETCH"), (TYPEDARRAYS? ",TYPEDARRAYS" : (BYTEARRAYS? ",BYTEARRAYS" : ",LONGARRAYS")), (BACKTRACK? ",BACKTRACK" : ",NOBACKTRACK"));
                    this.printf("%s\n", WebLib.getUserAgent());
                    break;
                case 'x':
                    this.doExecOptions(asArgs);
                    break;
                case '?':
                    if (asArgs[1]) {
                        this.doPrint(sCmd.substr(1));
                        break;
                    }
                    this.doHelp();
                    break;
                case 'n':
                    if (!COMPILED && sCmd == "nodebug") {
                        window.DEBUG = false;
                        this.printf("DEBUG checks off\n");
                        break;
                    }
                    if (this.doInfo(asArgs)) break;
                    /* falls through */
                default:
                    if (!fQuiet) this.printf("unknown command: %s\n", sCmd);
                    result = false;
                    break;
                }
            }
        } catch(e) {
            this.printf("debugger error: %s\n", (e.stack || e.message));
            result = false;
        }
        return result;
    }

    /**
     * doCommands(sCommands, fSave, fQuiet)
     *
     * @this {Debuggerx86}
     * @param {string} sCommands
     * @param {boolean} [fSave]
     * @param {boolean} [fQuiet]
     * @returns {boolean} (true if all commands processed, false if not)
     */
    doCommands(sCommands, fSave = false, fQuiet = false)
    {
        let a = this.parseCommand(sCommands, fSave);
        for (let s in a) {
            if (!this.doCommand(a[+s], fQuiet)) return false;
        }
        return true;
    }

    /**
     * Debuggerx86.init()
     *
     * This function operates on every HTML element of class "debugger", extracting the
     * JSON-encoded parameters for the Debugger constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Debugger component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeDbg = Component.getElementsByClass(APPCLASS, "debugger");
        for (let iDbg = 0; iDbg < aeDbg.length; iDbg++) {
            let eDbg = aeDbg[iDbg];
            let parmsDbg = Component.getComponentParms(eDbg);
            let dbg = new Debuggerx86(parmsDbg);
            Component.bindComponentControls(dbg, eDbg, APPCLASS);
        }
    }
}

if (DEBUGGER) {

    /**
     * NOTE: The Debugger properties below are considered "class constants"; most of them use our "all-caps"
     * convention (and all of them SHOULD, but that wouldn't help us catch any bugs).
     *
     * Technically, all of them should ALSO be preceded by a "@const" annotation, but that's a lot of work and it
     * really clutters the code.  I wish the Closure Compiler had a way to annotate every definition with a given
     * section with a single annotation....
     *
     * Bugs can slip through the cracks without those annotations; for example, I unthinkingly redefined TYPE_SI
     * at one point, and if all the definitions had been preceded by an "@const", that mistake would have been
     * caught at compile-time.
     */

    /**
     * Information regarding interrupts of interest (used by messageInt() and others)
     */
    Debuggerx86.INT_MESSAGES = {
        0x10:       MESSAGE.VIDEO,
        0x13:       MESSAGE.FDC,
        0x15:       MESSAGE.CHIPSET,
        0x16:       MESSAGE.KBD,
     // 0x1A:       MESSAGE.RTC,       // ChipSet contains its own custom messageInt() handler for the RTC
        0x1C:       MESSAGE.TIMER,
        0x21:       MESSAGE.DOS,
        0x33:       MESSAGE.MOUSE
    };

    /**
     * Information regarding "annoying" interrupts (which aren't annoying so much as too frequent);
     * note that some of these can still be enabled if you really want them (eg, RTC can be turned on
     * with RTC messages, ALT_TIMER with TIMER messages, etc).
     */
    Debuggerx86.INT_ANNOYING = [Interrupts.TIMER, Interrupts.TMR_BREAK, Interrupts.DOS_IDLE, Interrupts.DOS_NETBIOS, Interrupts.VIDEO_VGA];

    Debuggerx86.COMMANDS = {
        '?':     "help/print",
        'a [#]': "assemble",            // TODO: Implement this command someday
        'b [#]': "breakpoint",          // multiple variations (use b? to list them)
        'c':     "clear output",
        'd [#]': "dump memory",         // additional syntax: d [#] [l#], where l# is a number of bytes to dump
        'e [#]': "edit memory",
        'f':     "frequencies",
        'g [#]': "go [to #]",
        'h':     "halt",
        'i [#]': "input port #",
        'if':    "eval expression",
        'k':     "stack trace",
        'l':     "load sector(s)",
        "ln":    "list nearest symbol(s)",
        'm':     "messages",
        'mouse': "mouse action",        // syntax: mouse {action} {delta} (eg, mouse x 10, mouse click 0, etc)
        'o [#]': "output port #",
        'p':     "step over",           // other variations: pr (step and dump registers)
        'print': "print expression",
        'r':     "dump/set registers",
        'reset': "reset machine",
        't [#]': "trace",               // other variations: tr (trace and dump registers)
        'u [#]': "unassemble",
        'x':     "execution options",
        'v':     "print version",
        'var':   "assign variable"
    };

    /**
     * Supported address types; the type field in a DbgAddrx86 object may be one of:
     *
     *      NONE, REAL, PROT, V86, LINEAR or PHYSICAL
     *
     * REAL and V86 addresses are specified with a '&' prefix, PROT addresses with a '#' prefix,
     * LINEAR addresses with '%', and PHYSICAL addresses with '%%'.
     */
    Debuggerx86.ADDRTYPE = {
        NONE:       0x00,
        REAL:       0x01,
        PROT:       0x02,
        V86:        0x03,
        LINEAR:     0x04,
        PHYSICAL:   0x05
    };

    /**
     * CPU instruction ordinals
     *
     * Note that individual instructions end with ordinal 163 and instruction groups begin with ordinal 164;
     * the disassembler knows it's dealing with a group whenever the ordinal is not a valid index into INS_NAMES.
     *
     * NOTE: While this list started alphabetical, there are a few wrinkles; eg, POPA/POPF/PUSHF/PUSHA are
     * sequential to make it easier to detect instructions that require a D suffix when the operand size is 32 bits.
     */
    Debuggerx86.INS = {
        NONE:   0,   AAA:    1,   AAD:    2,   AAM:    3,   AAS:    4,   ADC:    5,   ADD:    6,   AND:    7,
        ARPL:   8,   AS:     9,   BOUND:  10,  BSF:    11,  BSR:    12,  BT:     13,  BTC:    14,  BTR:    15,
        BTS:    16,  CALL:   17,  CBW:    18,  CLC:    19,  CLD:    20,  CLI:    21,  CLTS:   22,  CMC:    23,
        CMP:    24,  CMPSB:  25,  CMPSW:  26,  CS:     27,  CWD:    28,  DAA:    29,  DAS:    30,  DEC:    31,
        DIV:    32,  DS:     33,  ENTER:  34,  ES:     35,  ESC:    36,  FS:     37,  GS:     38,  HLT:    39,
        IBTS:   40,  IDIV:   41,  IMUL:   42,  IN:     43,  INC:    44,  INS:    45,  INT:    46,  INT1:   47,
        INT3:   48,  INTO:   49,  IRET:   50,  JBE:    51,  JC:     52,  JCXZ:   53,  JG:     54,  JGE:    55,
        JL:     56,  JLE:    57,  JMP:    58,  JA:     59,  JNC:    60,  JNO:    61,  JNP:    62,  JNS:    63,
        JNZ:    64,  JO:     65,  JP:     66,  JS:     67,  JZ:     68,  LAHF:   69,  LAR:    70,  LDS:    71,
        LEA:    72,  LEAVE:  73,  LES:    74,  LFS:    75,  LGDT:   76,  LGS:    77,  LIDT:   78,  LLDT:   79,
        LMSW:   80,  LOADALL:81,  LOCK:   82,  LODSB:  83,  LODSW:  84,  LOOP:   85,  LOOPNZ: 86,  LOOPZ:  87,
        LSL:    88,  LSS:    89,  LTR:    90,  MOV:    91,  MOVSB:  92,  MOVSW:  93,  MOVSX:  94,  MOVZX:  95,
        MUL:    96,  NEG:    97,  NOP:    98,  NOT:    99,  OR:     100, OS:     101, OUT:    102, OUTS:   103,
        POP:    104, POPA:   105, POPF:   106, PUSHF:  107, PUSHA:  108, PUSH:   109, RCL:    110, RCR:    111,
        REPNZ:  112, REPZ:   113, RET:    114, RETF:   115, ROL:    116, ROR:    117, SAHF:   118, SALC:   119,
        SAR:    120, SBB:    121, SCASB:  122, SCASW:  123, SETBE:  124, SETC:   125, SETG:   126, SETGE:  127,
        SETL:   128, SETLE:  129, SETNBE: 130, SETNC:  131, SETNO:  132, SETNP:  133, SETNS:  134, SETNZ:  135,
        SETO:   136, SETP:   137, SETS:   138, SETZ:   139, SGDT:   140, SHL:    141, SHLD:   142, SHR:    143,
        SHRD:   144, SIDT:   145, SLDT:   146, SMSW:   147, SS:     148, STC:    149, STD:    150, STI:    151,
        STOSB:  152, STOSW:  153, STR:    154, SUB:    155, TEST:   156, VERR:   157, VERW:   158, WAIT:   159,
        XBTS:   160, XCHG:   161, XLAT:   162, XOR:    163, GRP1B:  164, GRP1W:  165, GRP1SW: 166, GRP2B:  167,
        GRP2W:  168, GRP2B1: 169, GRP2W1: 170, GRP2BC: 171, GRP2WC: 172, GRP3B:  173, GRP3W:  174, GRP4B:  175,
        GRP4W:  176, OP0F:   177, GRP6:   178, GRP7:   179, GRP8:   180
    };

    /**
     * CPU instruction names (mnemonics), indexed by CPU instruction ordinal (above)
     */
    Debuggerx86.INS_NAMES = [
        "INVALID","AAA",    "AAD",    "AAM",    "AAS",    "ADC",    "ADD",    "AND",
        "ARPL",   "AS:",    "BOUND",  "BSF",    "BSR",    "BT",     "BTC",    "BTR",
        "BTS",    "CALL",   "CBW",    "CLC",    "CLD",    "CLI",    "CLTS",   "CMC",
        "CMP",    "CMPSB",  "CMPSW",  "CS:",    "CWD",    "DAA",    "DAS",    "DEC",
        "DIV",    "DS:",    "ENTER",  "ES:",    "ESC",    "FS:",    "GS:",    "HLT",
        "IBTS",   "IDIV",   "IMUL",   "IN",     "INC",    "INS",    "INT",    "INT1",
        "INT3",   "INTO",   "IRET",   "JBE",    "JC",     "JCXZ",   "JG",     "JGE",
        "JL",     "JLE",    "JMP",    "JA",     "JNC",    "JNO",    "JNP",    "JNS",
        "JNZ",    "JO",     "JP",     "JS",     "JZ",     "LAHF",   "LAR",    "LDS",
        "LEA",    "LEAVE",  "LES",    "LFS",    "LGDT",   "LGS",    "LIDT",   "LLDT",
        "LMSW",   "LOADALL","LOCK",   "LODSB",  "LODSW",  "LOOP",   "LOOPNZ", "LOOPZ",
        "LSL",    "LSS",    "LTR",    "MOV",    "MOVSB",  "MOVSW",  "MOVSX",  "MOVZX",
        "MUL",    "NEG",    "NOP",    "NOT",    "OR",     "OS:",    "OUT",    "OUTS",
        "POP",    "POPA",   "POPF",   "PUSHF",  "PUSHA",  "PUSH",   "RCL",    "RCR",
        "REPNZ",  "REPZ",   "RET",    "RETF",   "ROL",    "ROR",    "SAHF",   "SALC",
        "SAR",    "SBB",    "SCASB",  "SCASW",  "SETBE",  "SETC",   "SETG",   "SETGE",
        "SETL",   "SETLE",  "SETNBE", "SETNC",  "SETNO",  "SETNP",  "SETNS",  "SETNZ",
        "SETO",   "SETP",   "SETS",   "SETZ",   "SGDT",   "SHL",    "SHLD",   "SHR",
        "SHRD",   "SIDT",   "SLDT",   "SMSW",   "SS:",    "STC",    "STD",    "STI",
        "STOSB",  "STOSW",  "STR",    "SUB",    "TEST",   "VERR",   "VERW",   "WAIT",
        "XBTS",   "XCHG",   "XLAT",   "XOR"
    ];

    /**
     * FPU instruction ordinals
     *
     * Unlike CPU instruction ordinals, these are not organized alphabetically (which I did only for the
     * sake of tidiness), but rather by functionality; ie:
     *
     *      0-3:    real transfers
     *      4-6:    integer transfers
     *      7-8:    packed decimal transfers
     *      9-11:   addition
     *      12-17:  subtraction
     *      18-20:  multiplication
     *      21-26:  division
     *      27-33:  other
     *      34-40:  comparisons
     *      41-45:  transcendental
     *      46-52:  constants
     *      53-77:  coprocessor control
     *      78---:  new for 80287 or higher
     *
     * Also, unlike the CPU instructions, there is no NONE ("INVALID") instruction; if an ESC instruction
     * can't be decoded as a valid FPU instruction, then it should remain an ESC instruction.
     */
    Debuggerx86.FINS = {
        FLD:    0,   FST:    1,   FSTP:   2,   FXCH:   3,   FILD:   4,   FIST:   5,   FISTP:  6,   FBLD:   7,
        FBSTP:  8,   FADD:   9,   FADDP:  10,  FIADD:  11,  FSUB:   12,  FSUBP:  13,  FISUB:  14,  FSUBR:  15,
        FSUBRP: 16,  FISUBR: 17,  FMUL:   18,  FMULP:  19,  FIMUL:  20,  FDIV:   21,  FDIVP:  22,  FIDIV:  23,
        FDIVR:  24,  FDIVRP: 25,  FIDIVR: 26,  FSQRT:  27,  FSCALE: 28,  FPREM:  29,  FRNDINT:30,  FXTRACT:31,
        FABS:   32,  FCHS:   33,  FCOM:   34,  FCOMP:  35,  FCOMPP: 36,  FICOM:  37,  FICOMP: 38,  FTST:   39,
        FXAM:   40,  FPTAN:  41,  FPATAN: 42,  F2XM1:  43,  FYL2X:  44,  FYL2XP1:45,  FLDZ:   46,  FLD1:   47,
        FLDPI:  48,  FLDL2T: 49,  FLDL2E: 50,  FLDLG2: 51,  FLDLN2: 52,  FINIT:  53,  FNINIT: 54,  FDISI:  55,
        FNDISI: 56,  FENI:   57,  FNENI:  58,  FLDCW:  59,  FSTCW:  60,  FNSTCW: 61,  FSTSW:  62,  FNSTSW: 63,
        FCLEX:  64,  FNCLEX: 65,  FSTENV: 66,  FNSTENV:67,  FLDENV: 68,  FSAVE:  69,  FNSAVE: 70,  FRSTOR: 71,
        FINCSTP:72,  FDECSTP:73,  FFREE:  74,  FFREEP: 75,  FNOP:   76,  FWAIT:  77,  FSETPM: 78,  FSINCOS:79,
        FSTSWAX:80
    };

    /**
     * FPU instruction names (mnemonics), indexed by FPU instruction ordinal (above)
     */
    Debuggerx86.FINS_NAMES = [
        "FLD",    "FST",    "FSTP",   "FXCH",   "FILD",   "FIST",   "FISTP",  "FBLD",
        "FBSTP",  "FADD",   "FADDP",  "FIADD",  "FSUB",   "FSUBP",  "FISUB",  "FSUBR",
        "FSUBRP", "FISUBR", "FMUL",   "FMULP",  "FIMUL",  "FDIV",   "FDIVP",  "FIDIV",
        "FDIVR",  "FDIVRP", "FIDIVR", "FSQRT",  "FSCALE", "FPREM",  "FRNDINT","FXTRACT",
        "FABS",   "FCHS",   "FCOM",   "FCOMP",  "FCOMPP", "FICOM",  "FICOMP", "FTST",
        "FXAM",   "FPTAN",  "FPATAN", "F2XM1",  "FYL2X",  "FYL2XP1","FLDZ",   "FLD1",
        "FLDPI",  "FLDL2T", "FLDL2E", "FLDLG2", "FLDLN2", "FINIT",  "FNINIT", "FDISI",
        "FNDISI", "FENI",   "FNENI",  "FLDCW",  "FSTCW",  "FNSTCW", "FSTSW",  "FNSTSW",
        "FCLEX",  "FNCLEX", "FSTENV", "FNSTENV","FLDENV", "FSAVE",  "FNSAVE", "FRSTOR",
        "FINCSTP","FDECSTP","FFREE",  "FFREEP", "FNOP",   "FWAIT",  "FSETPM", "FSINCOS",
        "FSTSWAX"
    ];

    Debuggerx86.FPU_TAGS = ["VALID", "ZERO ", "SPEC ", "EMPTY"];

    Debuggerx86.CPU_8086  = 0;
    Debuggerx86.CPU_80186 = 1;
    Debuggerx86.CPU_80286 = 2;
    Debuggerx86.CPU_80386 = 3;
    Debuggerx86.CPUS = [8086, 80186, 80286, 80386];

    /**
     * ModRM masks and definitions
     */
    Debuggerx86.REG_AL         = 0x00;          // bits 0-2 are standard Reg encodings
    Debuggerx86.REG_CL         = 0x01;
    Debuggerx86.REG_DL         = 0x02;
    Debuggerx86.REG_BL         = 0x03;
    Debuggerx86.REG_AH         = 0x04;
    Debuggerx86.REG_CH         = 0x05;
    Debuggerx86.REG_DH         = 0x06;
    Debuggerx86.REG_BH         = 0x07;
    Debuggerx86.REG_AX         = 0x08;
    Debuggerx86.REG_CX         = 0x09;
    Debuggerx86.REG_DX         = 0x0A;
    Debuggerx86.REG_BX         = 0x0B;
    Debuggerx86.REG_SP         = 0x0C;
    Debuggerx86.REG_BP         = 0x0D;
    Debuggerx86.REG_SI         = 0x0E;
    Debuggerx86.REG_DI         = 0x0F;
    Debuggerx86.REG_SEG        = 0x10;
    Debuggerx86.REG_IP         = 0x16;
    Debuggerx86.REG_PS         = 0x17;
    Debuggerx86.REG_EAX        = 0x18;
    Debuggerx86.REG_ECX        = 0x19;
    Debuggerx86.REG_EDX        = 0x1A;
    Debuggerx86.REG_EBX        = 0x1B;
    Debuggerx86.REG_ESP        = 0x1C;
    Debuggerx86.REG_EBP        = 0x1D;
    Debuggerx86.REG_ESI        = 0x1E;
    Debuggerx86.REG_EDI        = 0x1F;
    Debuggerx86.REG_CR0        = 0x20;
    Debuggerx86.REG_CR1        = 0x21;
    Debuggerx86.REG_CR2        = 0x22;
    Debuggerx86.REG_CR3        = 0x23;
    Debuggerx86.REG_DR0        = 0x28;
    Debuggerx86.REG_DR1        = 0x29;
    Debuggerx86.REG_DR2        = 0x2A;
    Debuggerx86.REG_DR3        = 0x2B;
    Debuggerx86.REG_DR6        = 0x2E;
    Debuggerx86.REG_DR7        = 0x2F;
    Debuggerx86.REG_TR0        = 0x30;
    Debuggerx86.REG_TR6        = 0x36;
    Debuggerx86.REG_TR7        = 0x37;
    Debuggerx86.REG_EIP        = 0x38;

    Debuggerx86.REGS = [
        "AL",  "CL",  "DL",  "BL",  "AH",  "CH",  "DH",  "BH",
        "AX",  "CX",  "DX",  "BX",  "SP",  "BP",  "SI",  "DI",
        "ES",  "CS",  "SS",  "DS",  "FS",  "GS",  "IP",  "PS",
        "EAX", "ECX", "EDX", "EBX", "ESP", "EBP", "ESI", "EDI",
        "CR0", "CR1", "CR2", "CR3", null,  null,  null,  null,  // register names used with TYPE_CTLREG
        "DR0", "DR1", "DR2", "DR3", null,  null,  "DR6", "DR7", // register names used with TYPE_DBGREG
        null,  null,  null,  null,  null,  null,  "TR6", "TR7", // register names used with TYPE_TSTREG
        "EIP"
    ];

    Debuggerx86.REG_ES         = 0x00;          // bits 0-1 are standard SegReg encodings
    Debuggerx86.REG_CS         = 0x01;
    Debuggerx86.REG_SS         = 0x02;
    Debuggerx86.REG_DS         = 0x03;
    Debuggerx86.REG_FS         = 0x04;
    Debuggerx86.REG_GS         = 0x05;
    Debuggerx86.REG_UNKNOWN    = 0x00;

    Debuggerx86.MOD_NODISP     = 0x00;          // use RM below, no displacement
    Debuggerx86.MOD_DISP8      = 0x01;          // use RM below + 8-bit displacement
    Debuggerx86.MOD_DISP16     = 0x02;          // use RM below + 16-bit displacement
    Debuggerx86.MOD_REGISTER   = 0x03;          // use REG above

    Debuggerx86.RM_BXSI        = 0x00;
    Debuggerx86.RM_BXDI        = 0x01;
    Debuggerx86.RM_BPSI        = 0x02;
    Debuggerx86.RM_BPDI        = 0x03;
    Debuggerx86.RM_SI          = 0x04;
    Debuggerx86.RM_DI          = 0x05;
    Debuggerx86.RM_BP          = 0x06;
    Debuggerx86.RM_IMMOFF      = Debuggerx86.RM_BP;       // only if MOD_NODISP
    Debuggerx86.RM_BX          = 0x07;

    Debuggerx86.RMS = [
        "BX+SI", "BX+DI", "BP+SI", "BP+DI", "SI",    "DI",    "BP",    "BX",
        "EAX",   "ECX",   "EDX",   "EBX",   "ESP",   "EBP",   "ESI",   "EDI"
    ];

    /**
     * Operand type descriptor masks and definitions
     *
     * Note that the letters in () in the comments refer to Intel's
     * nomenclature used in Appendix A of the 80386 Programmers Reference Manual.
     */
    Debuggerx86.TYPE_SIZE      = 0x000F;        // size field
    Debuggerx86.TYPE_MODE      = 0x00F0;        // mode field
    Debuggerx86.TYPE_IREG      = 0x0F00;        // implied register field
    Debuggerx86.TYPE_OTHER     = 0xF000;        // "other" field

    /**
     * TYPE_SIZE values.  Some definitions use duplicate values when the operands are the
     * same size and the Debugger doesn't need to make a distinction.
     */
    Debuggerx86.TYPE_NONE      = 0x0000;        //     (all other TYPE fields ignored)
    Debuggerx86.TYPE_BYTE      = 0x0001;        // (b) byte, regardless of operand size
    Debuggerx86.TYPE_SBYTE     = 0x0002;        //     byte sign-extended to word
    Debuggerx86.TYPE_SHORT     = 0x0003;        // (w) 16-bit value
    Debuggerx86.TYPE_WORD      = 0x0004;        // (v) 16-bit or 32-bit value
    Debuggerx86.TYPE_LONG      = 0x0005;        // (d) 32-bit value
    Debuggerx86.TYPE_SEGP      = 0x0006;        // (p) 32-bit or 48-bit pointer
    Debuggerx86.TYPE_FARP      = 0x0007;        // (p) 32-bit or 48-bit pointer for JMP/CALL
    Debuggerx86.TYPE_PREFIX    = 0x0008;        //     (treat similarly to TYPE_NONE)
    /**
     * The remaining TYPE_SIZE values are for the FPU.  Note that there are not enough values
     * within this nibble for every type to have a unique value, so to differentiate between two
     * types of the same size (eg, SINT and SREAL), we can inspect the opcode string, because only
     * FI* instructions use INT operands.  Also, some FPU sizes are not in this list (eg, the
     * so-called "word-integer"); since a word-integer is always 16 bits, we specify TYPE_SHORT,
     * which the Debugger should display as "INT16" for FI* instructions.
     */
    Debuggerx86.TYPE_ST        = 0x0009;        //     FPU ST (implicit stack top)
    Debuggerx86.TYPE_STREG     = 0x000A;        //     FPU ST (explicit stack register, relative to top)
    Debuggerx86.TYPE_SINT      = 0x000B;        //     FPU SI (short-integer; 32-bit); displayed as "INT32"
    Debuggerx86.TYPE_SREAL     = 0x000B;        //     FPU SR (short-real; 32-bit); displayed as "REAL32"
    Debuggerx86.TYPE_LINT      = 0x000C;        //     FPU LI (long-integer; 64-bit); displayed as "INT64"
    Debuggerx86.TYPE_LREAL     = 0x000C;        //     FPU LR (long-real; 64-bit); displayed as "REAL64"
    Debuggerx86.TYPE_TREAL     = 0x000D;        //     FPU TR (temp-real; 80-bit); displayed as "REAL80"
    Debuggerx86.TYPE_BCD80     = 0x000E;        //     FPU PD (packed-decimal; 18 BCD digits in 80 bits, bits 72-78 unused, sign in bit 79); displayed as "BCD80"
    Debuggerx86.TYPE_ENV       = 0x000F;        //     FPU ENV (environment; 14 bytes in real-mode, 28 bytes in protected-mode)
    Debuggerx86.TYPE_FPU       = 0x000F;        //     FPU SAVE (save/restore; 94 bytes in real-mode, 108 bytes in protected-mode)

    /**
     * TYPE_MODE values.  Order is somewhat important, as all values implying the presence
     * of a ModRM byte are assumed to be >= TYPE_MODRM.
     */
    Debuggerx86.TYPE_IMM       = 0x0000;        // (I) immediate data
    Debuggerx86.TYPE_ONE       = 0x0010;        //     implicit 1 (eg, shifts/rotates)
    Debuggerx86.TYPE_IMMOFF    = 0x0020;        // (A) immediate offset
    Debuggerx86.TYPE_IMMREL    = 0x0030;        // (J) immediate relative
    Debuggerx86.TYPE_DSSI      = 0x0040;        // (X) memory addressed by DS:SI
    Debuggerx86.TYPE_ESDI      = 0x0050;        // (Y) memory addressed by ES:DI
    Debuggerx86.TYPE_IMPREG    = 0x0060;        //     implicit register in TYPE_IREG
    Debuggerx86.TYPE_IMPSEG    = 0x0070;        //     implicit segment reg in TYPE_IREG
    Debuggerx86.TYPE_MODRM     = 0x0080;        // (E) standard ModRM decoding
    Debuggerx86.TYPE_MODMEM    = 0x0090;        // (M) ModRM refers to memory only
    Debuggerx86.TYPE_MODREG    = 0x00A0;        // (R) ModRM refers to register only
    Debuggerx86.TYPE_REG       = 0x00B0;        // (G) standard Reg decoding
    Debuggerx86.TYPE_SEGREG    = 0x00C0;        // (S) Reg selects segment register
    Debuggerx86.TYPE_CTLREG    = 0x00D0;        // (C) Reg selects control register
    Debuggerx86.TYPE_DBGREG    = 0x00E0;        // (D) Reg selects debug register
    Debuggerx86.TYPE_TSTREG    = 0x00F0;        // (T) Reg selects test register

    /**
     * TYPE_IREG values, based on the REG_* constants.
     * For convenience, they include TYPE_IMPREG or TYPE_IMPSEG as appropriate.
     */
    Debuggerx86.TYPE_AL = (Debuggerx86.REG_AL << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_CL = (Debuggerx86.REG_CL << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_DL = (Debuggerx86.REG_DL << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_BL = (Debuggerx86.REG_BL << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_AH = (Debuggerx86.REG_AH << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_CH = (Debuggerx86.REG_CH << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_DH = (Debuggerx86.REG_DH << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_BH = (Debuggerx86.REG_BH << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_BYTE);
    Debuggerx86.TYPE_AX = (Debuggerx86.REG_AX << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_CX = (Debuggerx86.REG_CX << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_DX = (Debuggerx86.REG_DX << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_BX = (Debuggerx86.REG_BX << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_SP = (Debuggerx86.REG_SP << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_BP = (Debuggerx86.REG_BP << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_SI = (Debuggerx86.REG_SI << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_DI = (Debuggerx86.REG_DI << 8 | Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_WORD);
    Debuggerx86.TYPE_ES = (Debuggerx86.REG_ES << 8 | Debuggerx86.TYPE_IMPSEG | Debuggerx86.TYPE_SHORT);
    Debuggerx86.TYPE_CS = (Debuggerx86.REG_CS << 8 | Debuggerx86.TYPE_IMPSEG | Debuggerx86.TYPE_SHORT);
    Debuggerx86.TYPE_SS = (Debuggerx86.REG_SS << 8 | Debuggerx86.TYPE_IMPSEG | Debuggerx86.TYPE_SHORT);
    Debuggerx86.TYPE_DS = (Debuggerx86.REG_DS << 8 | Debuggerx86.TYPE_IMPSEG | Debuggerx86.TYPE_SHORT);
    Debuggerx86.TYPE_FS = (Debuggerx86.REG_FS << 8 | Debuggerx86.TYPE_IMPSEG | Debuggerx86.TYPE_SHORT);
    Debuggerx86.TYPE_GS = (Debuggerx86.REG_GS << 8 | Debuggerx86.TYPE_IMPSEG | Debuggerx86.TYPE_SHORT);

    /**
     * TYPE_OTHER bit definitions
     */
    Debuggerx86.TYPE_IN    = 0x1000;            // operand is input
    Debuggerx86.TYPE_OUT   = 0x2000;            // operand is output
    Debuggerx86.TYPE_BOTH  = (Debuggerx86.TYPE_IN | Debuggerx86.TYPE_OUT);
    Debuggerx86.TYPE_8086  = (Debuggerx86.CPU_8086 << 14);
    Debuggerx86.TYPE_8087  = Debuggerx86.TYPE_8086;
    Debuggerx86.TYPE_80186 = (Debuggerx86.CPU_80186 << 14);
    Debuggerx86.TYPE_80286 = (Debuggerx86.CPU_80286 << 14);
    Debuggerx86.TYPE_80287 = Debuggerx86.TYPE_80286;
    Debuggerx86.TYPE_80386 = (Debuggerx86.CPU_80386 << 14);
    Debuggerx86.TYPE_80387 = Debuggerx86.TYPE_80386;
    Debuggerx86.TYPE_CPU_SHIFT = 14;

    Debuggerx86.HISTORY_LIMIT = DEBUG? 100000 : 1000;

    /**
     * Opcode 0x0F has a distinguished history:
     *
     *      On the 8086, it functioned as POP CS
     *      On the 80186, it generated an Invalid Opcode (UD_FAULT) exception
     *      On the 80286, it introduced a new (and growing) series of two-byte opcodes
     *
     * Based on the active CPU model, we make every effort to execute and disassemble this (and every other)
     * opcode appropriately, by setting the opcode's entry in aaOpDescs accordingly.  0x0F in aaOpDescs points
     * to the 8086 table: aOpDescPopCS.
     *
     * Note that we must NOT modify aaOpDescs directly.  this.aaOpDescs will point to Debuggerx86.aaOpDescs
     * if the processor is an 8086, because that's the processor that the hard-coded contents of the table
     * represent; for all other processors, this.aaOpDescs will contain a copy of the table that we can modify.
     */
    Debuggerx86.aOpDescPopCS     = [Debuggerx86.INS.POP,  Debuggerx86.TYPE_CS   | Debuggerx86.TYPE_OUT];
    Debuggerx86.aOpDescUndefined = [Debuggerx86.INS.NONE, Debuggerx86.TYPE_NONE];
    Debuggerx86.aOpDesc0F        = [Debuggerx86.INS.OP0F, Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_BOTH];

    /**
     * The aaOpDescs array is indexed by opcode, and each element is a sub-array (aOpDesc) that describes
     * the corresponding opcode. The sub-elements are as follows:
     *
     *      [0]: {number} of the opcode name (see INS.*)
     *      [1]: {number} containing the destination operand descriptor bit(s), if any
     *      [2]: {number} containing the source operand descriptor bit(s), if any
     *      [3]: {number} containing the occasional third operand descriptor bit(s), if any
     *
     * These sub-elements are all optional. If [0] is not present, the opcode is undefined; if [1] is not
     * present (or contains zero), the opcode has no (or only implied) operands; if [2] is not present, the
     * opcode has only a single operand.  And so on.
     */
    Debuggerx86.aaOpDescs = [
    /* 0x00 */ [Debuggerx86.INS.ADD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x01 */ [Debuggerx86.INS.ADD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x02 */ [Debuggerx86.INS.ADD,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x03 */ [Debuggerx86.INS.ADD,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x04 */ [Debuggerx86.INS.ADD,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x05 */ [Debuggerx86.INS.ADD,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x06 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_ES     | Debuggerx86.TYPE_IN],
    /* 0x07 */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_ES     | Debuggerx86.TYPE_OUT],

    /* 0x08 */ [Debuggerx86.INS.OR,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x09 */ [Debuggerx86.INS.OR,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x0A */ [Debuggerx86.INS.OR,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x0B */ [Debuggerx86.INS.OR,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x0C */ [Debuggerx86.INS.OR,    Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x0D */ [Debuggerx86.INS.OR,    Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x0E */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_CS     | Debuggerx86.TYPE_IN],
    /* 0x0F */ Debuggerx86.aOpDescPopCS,

    /* 0x10 */ [Debuggerx86.INS.ADC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x11 */ [Debuggerx86.INS.ADC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x12 */ [Debuggerx86.INS.ADC,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x13 */ [Debuggerx86.INS.ADC,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x14 */ [Debuggerx86.INS.ADC,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x15 */ [Debuggerx86.INS.ADC,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x16 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_SS     | Debuggerx86.TYPE_IN],
    /* 0x17 */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_SS     | Debuggerx86.TYPE_OUT],

    /* 0x18 */ [Debuggerx86.INS.SBB,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x19 */ [Debuggerx86.INS.SBB,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x1A */ [Debuggerx86.INS.SBB,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x1B */ [Debuggerx86.INS.SBB,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x1C */ [Debuggerx86.INS.SBB,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x1D */ [Debuggerx86.INS.SBB,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x1E */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_DS     | Debuggerx86.TYPE_IN],
    /* 0x1F */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_DS     | Debuggerx86.TYPE_OUT],

    /* 0x20 */ [Debuggerx86.INS.AND,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x21 */ [Debuggerx86.INS.AND,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x22 */ [Debuggerx86.INS.AND,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x23 */ [Debuggerx86.INS.AND,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x24 */ [Debuggerx86.INS.AND,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x25 */ [Debuggerx86.INS.AND,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x26 */ [Debuggerx86.INS.ES,    Debuggerx86.TYPE_PREFIX],
    /* 0x27 */ [Debuggerx86.INS.DAA],

    /* 0x28 */ [Debuggerx86.INS.SUB,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x29 */ [Debuggerx86.INS.SUB,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x2A */ [Debuggerx86.INS.SUB,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x2B */ [Debuggerx86.INS.SUB,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x2C */ [Debuggerx86.INS.SUB,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x2D */ [Debuggerx86.INS.SUB,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x2E */ [Debuggerx86.INS.CS,    Debuggerx86.TYPE_PREFIX],
    /* 0x2F */ [Debuggerx86.INS.DAS],

    /* 0x30 */ [Debuggerx86.INS.XOR,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x31 */ [Debuggerx86.INS.XOR,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x32 */ [Debuggerx86.INS.XOR,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x33 */ [Debuggerx86.INS.XOR,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x34 */ [Debuggerx86.INS.XOR,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x35 */ [Debuggerx86.INS.XOR,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x36 */ [Debuggerx86.INS.SS,    Debuggerx86.TYPE_PREFIX],
    /* 0x37 */ [Debuggerx86.INS.AAA],

    /* 0x38 */ [Debuggerx86.INS.CMP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x39 */ [Debuggerx86.INS.CMP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x3A */ [Debuggerx86.INS.CMP,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x3B */ [Debuggerx86.INS.CMP,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x3C */ [Debuggerx86.INS.CMP,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_IN,     Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x3D */ [Debuggerx86.INS.CMP,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_IN,     Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x3E */ [Debuggerx86.INS.DS,    Debuggerx86.TYPE_PREFIX],
    /* 0x3F */ [Debuggerx86.INS.AAS],

    /* 0x40 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH],
    /* 0x41 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_CX     | Debuggerx86.TYPE_BOTH],
    /* 0x42 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_BOTH],
    /* 0x43 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_BX     | Debuggerx86.TYPE_BOTH],
    /* 0x44 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_SP     | Debuggerx86.TYPE_BOTH],
    /* 0x45 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_BP     | Debuggerx86.TYPE_BOTH],
    /* 0x46 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_SI     | Debuggerx86.TYPE_BOTH],
    /* 0x47 */ [Debuggerx86.INS.INC,   Debuggerx86.TYPE_DI     | Debuggerx86.TYPE_BOTH],

    /* 0x48 */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH],
    /* 0x49 */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_CX     | Debuggerx86.TYPE_BOTH],
    /* 0x4A */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_BOTH],
    /* 0x4B */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_BX     | Debuggerx86.TYPE_BOTH],
    /* 0x4C */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_SP     | Debuggerx86.TYPE_BOTH],
    /* 0x4D */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_BP     | Debuggerx86.TYPE_BOTH],
    /* 0x4E */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_SI     | Debuggerx86.TYPE_BOTH],
    /* 0x4F */ [Debuggerx86.INS.DEC,   Debuggerx86.TYPE_DI     | Debuggerx86.TYPE_BOTH],

    /* 0x50 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_IN],
    /* 0x51 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_CX     | Debuggerx86.TYPE_IN],
    /* 0x52 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_IN],
    /* 0x53 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_BX     | Debuggerx86.TYPE_IN],
    /* 0x54 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_SP     | Debuggerx86.TYPE_IN],
    /* 0x55 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_BP     | Debuggerx86.TYPE_IN],
    /* 0x56 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_SI     | Debuggerx86.TYPE_IN],
    /* 0x57 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_DI     | Debuggerx86.TYPE_IN],

    /* 0x58 */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_OUT],
    /* 0x59 */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_CX     | Debuggerx86.TYPE_OUT],
    /* 0x5A */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_OUT],
    /* 0x5B */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_BX     | Debuggerx86.TYPE_OUT],
    /* 0x5C */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_SP     | Debuggerx86.TYPE_OUT],
    /* 0x5D */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_BP     | Debuggerx86.TYPE_OUT],
    /* 0x5E */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_SI     | Debuggerx86.TYPE_OUT],
    /* 0x5F */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_DI     | Debuggerx86.TYPE_OUT],

    /* 0x60 */ [Debuggerx86.INS.PUSHA, Debuggerx86.TYPE_NONE   | Debuggerx86.TYPE_80186],
    /* 0x61 */ [Debuggerx86.INS.POPA,  Debuggerx86.TYPE_NONE   | Debuggerx86.TYPE_80186],
    /* 0x62 */ [Debuggerx86.INS.BOUND, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x63 */ [Debuggerx86.INS.ARPL,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
    /* 0x64 */ [Debuggerx86.INS.FS,    Debuggerx86.TYPE_PREFIX | Debuggerx86.TYPE_80386],
    /* 0x65 */ [Debuggerx86.INS.GS,    Debuggerx86.TYPE_PREFIX | Debuggerx86.TYPE_80386],
    /* 0x66 */ [Debuggerx86.INS.OS,    Debuggerx86.TYPE_PREFIX | Debuggerx86.TYPE_80386],
    /* 0x67 */ [Debuggerx86.INS.AS,    Debuggerx86.TYPE_PREFIX | Debuggerx86.TYPE_80386],

    /* 0x68 */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80186],
    /* 0x69 */ [Debuggerx86.INS.IMUL,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x6A */ [Debuggerx86.INS.PUSH,  Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80186],
    /* 0x6B */ [Debuggerx86.INS.IMUL,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x6C */ [Debuggerx86.INS.INS,   Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_DX    | Debuggerx86.TYPE_IN],
    /* 0x6D */ [Debuggerx86.INS.INS,   Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_DX    | Debuggerx86.TYPE_IN],
    /* 0x6E */ [Debuggerx86.INS.OUTS,  Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_IN    | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_DSSI | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x6F */ [Debuggerx86.INS.OUTS,  Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_IN    | Debuggerx86.TYPE_80186, Debuggerx86.TYPE_DSSI | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],

    /* 0x70 */ [Debuggerx86.INS.JO,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x71 */ [Debuggerx86.INS.JNO,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x72 */ [Debuggerx86.INS.JC,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x73 */ [Debuggerx86.INS.JNC,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x74 */ [Debuggerx86.INS.JZ,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x75 */ [Debuggerx86.INS.JNZ,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x76 */ [Debuggerx86.INS.JBE,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x77 */ [Debuggerx86.INS.JA,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],

    /* 0x78 */ [Debuggerx86.INS.JS,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x79 */ [Debuggerx86.INS.JNS,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x7A */ [Debuggerx86.INS.JP,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x7B */ [Debuggerx86.INS.JNP,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x7C */ [Debuggerx86.INS.JL,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x7D */ [Debuggerx86.INS.JGE,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x7E */ [Debuggerx86.INS.JLE,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x7F */ [Debuggerx86.INS.JG,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],

    /* 0x80 */ [Debuggerx86.INS.GRP1B, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x81 */ [Debuggerx86.INS.GRP1W, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x82 */ [Debuggerx86.INS.GRP1B, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x83 */ [Debuggerx86.INS.GRP1SW,Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x84 */ [Debuggerx86.INS.TEST,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x85 */ [Debuggerx86.INS.TEST,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_REG   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x86 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
    /* 0x87 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],

    /* 0x88 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x89 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x8A */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0x8B */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x8C */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_SEGREG | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
    /* 0x8D */ [Debuggerx86.INS.LEA,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_MODMEM | Debuggerx86.TYPE_WORD ],
    /* 0x8E */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_SEGREG | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0x8F */ [Debuggerx86.INS.POP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT],

    /* 0x90 */ [Debuggerx86.INS.NOP],
    /* 0x91 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_CX  | Debuggerx86.TYPE_BOTH],
    /* 0x92 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_DX  | Debuggerx86.TYPE_BOTH],
    /* 0x93 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_BX  | Debuggerx86.TYPE_BOTH],
    /* 0x94 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_SP  | Debuggerx86.TYPE_BOTH],
    /* 0x95 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_BP  | Debuggerx86.TYPE_BOTH],
    /* 0x96 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_SI  | Debuggerx86.TYPE_BOTH],
    /* 0x97 */ [Debuggerx86.INS.XCHG,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_BOTH,   Debuggerx86.TYPE_DI  | Debuggerx86.TYPE_BOTH],

    /* 0x98 */ [Debuggerx86.INS.CBW],
    /* 0x99 */ [Debuggerx86.INS.CWD],
    /* 0x9A */ [Debuggerx86.INS.CALL,  Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_FARP |  Debuggerx86.TYPE_IN],
    /* 0x9B */ [Debuggerx86.INS.WAIT],
    /* 0x9C */ [Debuggerx86.INS.PUSHF],
    /* 0x9D */ [Debuggerx86.INS.POPF],
    /* 0x9E */ [Debuggerx86.INS.SAHF],
    /* 0x9F */ [Debuggerx86.INS.LAHF],

    /* 0xA0 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMMOFF | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xA1 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMMOFF | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xA2 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_IMMOFF | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT,     Debuggerx86.TYPE_AL    | Debuggerx86.TYPE_IN],
    /* 0xA3 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_IMMOFF | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,     Debuggerx86.TYPE_AX    | Debuggerx86.TYPE_IN],
    /* 0xA4 */ [Debuggerx86.INS.MOVSB, Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT,     Debuggerx86.TYPE_DSSI  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xA5 */ [Debuggerx86.INS.MOVSW, Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,     Debuggerx86.TYPE_DSSI  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xA6 */ [Debuggerx86.INS.CMPSB, Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,      Debuggerx86.TYPE_DSSI  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xA7 */ [Debuggerx86.INS.CMPSW, Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,      Debuggerx86.TYPE_DSSI  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],

    /* 0xA8 */ [Debuggerx86.INS.TEST,  Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_IN,     Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xA9 */ [Debuggerx86.INS.TEST,  Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_IN,     Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xAA */ [Debuggerx86.INS.STOSB, Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT,   Debuggerx86.TYPE_AL    | Debuggerx86.TYPE_IN],
    /* 0xAB */ [Debuggerx86.INS.STOSW, Debuggerx86.TYPE_ESDI   | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,   Debuggerx86.TYPE_AX    | Debuggerx86.TYPE_IN],
    /* 0xAC */ [Debuggerx86.INS.LODSB, Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_DSSI | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xAD */ [Debuggerx86.INS.LODSW, Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_DSSI | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xAE */ [Debuggerx86.INS.SCASB, Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_IN,     Debuggerx86.TYPE_ESDI | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xAF */ [Debuggerx86.INS.SCASW, Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_IN,     Debuggerx86.TYPE_ESDI | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],

    /* 0xB0 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB1 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_CL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB2 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_DL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB3 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_BL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB4 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_AH     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB5 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_CH     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB6 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_DH     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xB7 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_BH     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],

    /* 0xB8 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xB9 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_CX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xBA */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xBB */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_BX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xBC */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_SP     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xBD */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_BP     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xBE */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_SI     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xBF */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_DI     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],

    /* 0xC0 */ [Debuggerx86.INS.GRP2B, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80186,  Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xC1 */ [Debuggerx86.INS.GRP2W, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80186,  Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xC2 */ [Debuggerx86.INS.RET,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
    /* 0xC3 */ [Debuggerx86.INS.RET],
    /* 0xC4 */ [Debuggerx86.INS.LES,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,   Debuggerx86.TYPE_MODMEM  | Debuggerx86.TYPE_SEGP  | Debuggerx86.TYPE_IN],
    /* 0xC5 */ [Debuggerx86.INS.LDS,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,   Debuggerx86.TYPE_MODMEM  | Debuggerx86.TYPE_SEGP  | Debuggerx86.TYPE_IN],
    /* 0xC6 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT,   Debuggerx86.TYPE_IMM     | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xC7 */ [Debuggerx86.INS.MOV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,   Debuggerx86.TYPE_IMM     | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],

    /* 0xC8 */ [Debuggerx86.INS.ENTER, Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80186,    Debuggerx86.TYPE_IMM   | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xC9 */ [Debuggerx86.INS.LEAVE, Debuggerx86.TYPE_NONE   | Debuggerx86.TYPE_80186],
    /* 0xCA */ [Debuggerx86.INS.RETF,  Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
    /* 0xCB */ [Debuggerx86.INS.RETF],
    /* 0xCC */ [Debuggerx86.INS.INT3],
    /* 0xCD */ [Debuggerx86.INS.INT,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xCE */ [Debuggerx86.INS.INTO],
    /* 0xCF */ [Debuggerx86.INS.IRET],

    /* 0xD0 */ [Debuggerx86.INS.GRP2B1,Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH,  Debuggerx86.TYPE_ONE    | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xD1 */ [Debuggerx86.INS.GRP2W1,Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH,  Debuggerx86.TYPE_ONE    | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xD2 */ [Debuggerx86.INS.GRP2BC,Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH,  Debuggerx86.TYPE_CL     | Debuggerx86.TYPE_IN],
    /* 0xD3 */ [Debuggerx86.INS.GRP2WC,Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH,  Debuggerx86.TYPE_CL     | Debuggerx86.TYPE_IN],
    /* 0xD4 */ [Debuggerx86.INS.AAM,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_BYTE],
    /* 0xD5 */ [Debuggerx86.INS.AAD,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_BYTE],
    /* 0xD6 */ [Debuggerx86.INS.SALC],
    /* 0xD7 */ [Debuggerx86.INS.XLAT],

    /* 0xD8 */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xD9 */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xDA */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xDB */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xDC */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xDD */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xDE */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xDF */ [Debuggerx86.INS.ESC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],

    /* 0xE0 */ [Debuggerx86.INS.LOOPNZ,Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xE1 */ [Debuggerx86.INS.LOOPZ, Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xE2 */ [Debuggerx86.INS.LOOP,  Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xE3 */ [Debuggerx86.INS.JCXZ,  Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xE4 */ [Debuggerx86.INS.IN,    Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xE5 */ [Debuggerx86.INS.IN,    Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_IMM  | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
    /* 0xE6 */ [Debuggerx86.INS.OUT,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,    Debuggerx86.TYPE_AL   | Debuggerx86.TYPE_IN],
    /* 0xE7 */ [Debuggerx86.INS.OUT,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,    Debuggerx86.TYPE_AX   | Debuggerx86.TYPE_IN],

    /* 0xE8 */ [Debuggerx86.INS.CALL,  Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xE9 */ [Debuggerx86.INS.JMP,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
    /* 0xEA */ [Debuggerx86.INS.JMP,   Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_FARP  | Debuggerx86.TYPE_IN],
    /* 0xEB */ [Debuggerx86.INS.JMP,   Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
    /* 0xEC */ [Debuggerx86.INS.IN,    Debuggerx86.TYPE_AL     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_DX   | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
    /* 0xED */ [Debuggerx86.INS.IN,    Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_OUT,    Debuggerx86.TYPE_DX   | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
    /* 0xEE */ [Debuggerx86.INS.OUT,   Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN,    Debuggerx86.TYPE_AL    | Debuggerx86.TYPE_IN],
    /* 0xEF */ [Debuggerx86.INS.OUT,   Debuggerx86.TYPE_DX     | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN,    Debuggerx86.TYPE_AX    | Debuggerx86.TYPE_IN],

    /* 0xF0 */ [Debuggerx86.INS.LOCK,  Debuggerx86.TYPE_PREFIX],
    /* 0xF1 */ [Debuggerx86.INS.INT1,  Debuggerx86.TYPE_NONE   | Debuggerx86.TYPE_80386],
    /* 0xF2 */ [Debuggerx86.INS.REPNZ, Debuggerx86.TYPE_PREFIX],
    /* 0xF3 */ [Debuggerx86.INS.REPZ,  Debuggerx86.TYPE_PREFIX],
    /* 0xF4 */ [Debuggerx86.INS.HLT],
    /* 0xF5 */ [Debuggerx86.INS.CMC],
    /* 0xF6 */ [Debuggerx86.INS.GRP3B, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
    /* 0xF7 */ [Debuggerx86.INS.GRP3W, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],

    /* 0xF8 */ [Debuggerx86.INS.CLC],
    /* 0xF9 */ [Debuggerx86.INS.STC],
    /* 0xFA */ [Debuggerx86.INS.CLI],
    /* 0xFB */ [Debuggerx86.INS.STI],
    /* 0xFC */ [Debuggerx86.INS.CLD],
    /* 0xFD */ [Debuggerx86.INS.STD],
    /* 0xFE */ [Debuggerx86.INS.GRP4B, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
    /* 0xFF */ [Debuggerx86.INS.GRP4W, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH]
    ];

    Debuggerx86.aaOp0FDescs = {
        0x00: [Debuggerx86.INS.GRP6,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_BOTH],
        0x01: [Debuggerx86.INS.GRP7,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_BOTH],
        0x02: [Debuggerx86.INS.LAR,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_MODMEM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN],
        0x03: [Debuggerx86.INS.LSL,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_MODMEM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN],
        0x05: [Debuggerx86.INS.LOADALL,Debuggerx86.TYPE_80286],
        0x06: [Debuggerx86.INS.CLTS,   Debuggerx86.TYPE_80286],
        0x07: [Debuggerx86.INS.LOADALL,Debuggerx86.TYPE_80386],   // TODO: implied operand is ES:[(E)DI]
        0x20: [Debuggerx86.INS.MOV,    Debuggerx86.TYPE_MODREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_CTLREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_IN],
        0x21: [Debuggerx86.INS.MOV,    Debuggerx86.TYPE_MODREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_DBGREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_IN],
        0x22: [Debuggerx86.INS.MOV,    Debuggerx86.TYPE_CTLREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_IN],
        0x23: [Debuggerx86.INS.MOV,    Debuggerx86.TYPE_DBGREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_IN],
        0x24: [Debuggerx86.INS.MOV,    Debuggerx86.TYPE_MODREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_TSTREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_IN],
        0x26: [Debuggerx86.INS.MOV,    Debuggerx86.TYPE_TSTREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODREG | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_IN],
        0x80: [Debuggerx86.INS.JO,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x81: [Debuggerx86.INS.JNO,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x82: [Debuggerx86.INS.JC,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x83: [Debuggerx86.INS.JNC,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x84: [Debuggerx86.INS.JZ,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x85: [Debuggerx86.INS.JNZ,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x86: [Debuggerx86.INS.JBE,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x87: [Debuggerx86.INS.JA,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x88: [Debuggerx86.INS.JS,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x89: [Debuggerx86.INS.JNS,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x8A: [Debuggerx86.INS.JP,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x8B: [Debuggerx86.INS.JNP,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x8C: [Debuggerx86.INS.JL,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x8D: [Debuggerx86.INS.JGE,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x8E: [Debuggerx86.INS.JLE,    Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x8F: [Debuggerx86.INS.JG,     Debuggerx86.TYPE_IMMREL | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386],
        0x90: [Debuggerx86.INS.SETO,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x91: [Debuggerx86.INS.SETNO,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x92: [Debuggerx86.INS.SETC,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x93: [Debuggerx86.INS.SETNC,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x94: [Debuggerx86.INS.SETZ,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x95: [Debuggerx86.INS.SETNZ,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x96: [Debuggerx86.INS.SETBE,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x97: [Debuggerx86.INS.SETNBE, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x98: [Debuggerx86.INS.SETS,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x99: [Debuggerx86.INS.SETNS,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x9A: [Debuggerx86.INS.SETP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x9B: [Debuggerx86.INS.SETNP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x9C: [Debuggerx86.INS.SETL,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x9D: [Debuggerx86.INS.SETGE,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x9E: [Debuggerx86.INS.SETLE,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0x9F: [Debuggerx86.INS.SETG,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386],
        0xA0: [Debuggerx86.INS.PUSH,   Debuggerx86.TYPE_FS     | Debuggerx86.TYPE_IN    | Debuggerx86.TYPE_80386],
        0xA1: [Debuggerx86.INS.POP,    Debuggerx86.TYPE_FS     | Debuggerx86.TYPE_OUT   | Debuggerx86.TYPE_80386],
        0xA3: [Debuggerx86.INS.BT,     Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN   | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xA4: [Debuggerx86.INS.SHLD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        0xA5: [Debuggerx86.INS.SHLD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_CL  | Debuggerx86.TYPE_IN],
        0xA6: [Debuggerx86.INS.XBTS,   Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_AX  | Debuggerx86.TYPE_IN,  Debuggerx86.TYPE_CL    | Debuggerx86.TYPE_IN],
        0xA7: [Debuggerx86.INS.IBTS,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_AX     | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_CL  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xA8: [Debuggerx86.INS.PUSH,   Debuggerx86.TYPE_GS     | Debuggerx86.TYPE_IN    | Debuggerx86.TYPE_80386],
        0xA9: [Debuggerx86.INS.POP,    Debuggerx86.TYPE_GS     | Debuggerx86.TYPE_OUT   | Debuggerx86.TYPE_80386],
        0xAB: [Debuggerx86.INS.BTS,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xAC: [Debuggerx86.INS.SHRD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        0xAD: [Debuggerx86.INS.SHRD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN, Debuggerx86.TYPE_CL  | Debuggerx86.TYPE_IN],
        0xAF: [Debuggerx86.INS.IMUL,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xB2: [Debuggerx86.INS.LSS,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,                           Debuggerx86.TYPE_MODMEM | Debuggerx86.TYPE_SEGP  | Debuggerx86.TYPE_IN],
        0xB3: [Debuggerx86.INS.BTR,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xB4: [Debuggerx86.INS.LFS,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,                           Debuggerx86.TYPE_MODMEM | Debuggerx86.TYPE_SEGP  | Debuggerx86.TYPE_IN],
        0xB5: [Debuggerx86.INS.LGS,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT,                           Debuggerx86.TYPE_MODMEM | Debuggerx86.TYPE_SEGP  | Debuggerx86.TYPE_IN],
        0xB6: [Debuggerx86.INS.MOVZX,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
        0xB7: [Debuggerx86.INS.MOVZX,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
        0xBA: [Debuggerx86.INS.GRP8,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_IMM    | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
        0xBB: [Debuggerx86.INS.BTC,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xBC: [Debuggerx86.INS.BSF,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xBD: [Debuggerx86.INS.BSR,    Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        0xBE: [Debuggerx86.INS.MOVSX,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
        0xBF: [Debuggerx86.INS.MOVSX,  Debuggerx86.TYPE_REG    | Debuggerx86.TYPE_LONG  | Debuggerx86.TYPE_OUT  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN]
    };

    /**
     * Be sure to keep the following table in sync with FPUx86.aaOps
     */
    Debuggerx86.aaaOpFPUDescs = {
        0xD8: {
            0x00: [Debuggerx86.FINS.FADD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x01: [Debuggerx86.FINS.FMUL,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FCOM,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x03: [Debuggerx86.FINS.FCOMP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x04: [Debuggerx86.FINS.FSUB,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x05: [Debuggerx86.FINS.FSUBR,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FDIV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x07: [Debuggerx86.FINS.FDIVR,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x30: [Debuggerx86.FINS.FADD,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x31: [Debuggerx86.FINS.FMUL,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x32: [Debuggerx86.FINS.FCOM,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x33: [Debuggerx86.FINS.FCOMP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x34: [Debuggerx86.FINS.FSUB,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x35: [Debuggerx86.FINS.FSUBR,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x36: [Debuggerx86.FINS.FDIV,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x37: [Debuggerx86.FINS.FDIVR,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST    | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN]
        },
        0xD9: {
            0x00: [Debuggerx86.FINS.FLD,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FST,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_OUT],
            0x03: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SREAL | Debuggerx86.TYPE_OUT],
            0x04: [Debuggerx86.FINS.FLDENV, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_ENV   | Debuggerx86.TYPE_IN],
            0x05: [Debuggerx86.FINS.FLDCW,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FSTENV, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_ENV   | Debuggerx86.TYPE_OUT],
            0x07: [Debuggerx86.FINS.FSTCW,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT],
            0x30: [Debuggerx86.FINS.FLD,    Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT],
            0x31: [Debuggerx86.FINS.FXCH,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT],
            0x32: [Debuggerx86.FINS.FNOP],
            0x33: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT],   // Obsolete encoding
            0x40: [Debuggerx86.FINS.FCHS],
            0x41: [Debuggerx86.FINS.FABS],
            0x44: [Debuggerx86.FINS.FTST],
            0x45: [Debuggerx86.FINS.FXAM],
            0x50: [Debuggerx86.FINS.FLD1],
            0x51: [Debuggerx86.FINS.FLDL2T],
            0x52: [Debuggerx86.FINS.FLDL2E],
            0x53: [Debuggerx86.FINS.FLDPI],
            0x54: [Debuggerx86.FINS.FLDLG2],
            0x55: [Debuggerx86.FINS.FLDLN2],
            0x56: [Debuggerx86.FINS.FLDZ],
            0x60: [Debuggerx86.FINS.F2XM1],
            0x61: [Debuggerx86.FINS.FYL2X],
            0x62: [Debuggerx86.FINS.FPTAN],
            0x63: [Debuggerx86.FINS.FPATAN],
            0x64: [Debuggerx86.FINS.FXTRACT],
            0x66: [Debuggerx86.FINS.FDECSTP],
            0x67: [Debuggerx86.FINS.FINCSTP],
            0x70: [Debuggerx86.FINS.FPREM],
            0x71: [Debuggerx86.FINS.FYL2XP1],
            0x72: [Debuggerx86.FINS.FSQRT],
            0x74: [Debuggerx86.FINS.FRNDINT],
            0x75: [Debuggerx86.FINS.FSCALE]
        },
        0xDA: {
            0x00: [Debuggerx86.FINS.FIADD,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x01: [Debuggerx86.FINS.FIMUL,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FICOM,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x03: [Debuggerx86.FINS.FICOMP, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x04: [Debuggerx86.FINS.FISUB,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x05: [Debuggerx86.FINS.FISUBR, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FIDIV,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN],
            0x07: [Debuggerx86.FINS.FIDIVR, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT | Debuggerx86.TYPE_IN]
        },
        0xDB: {
            0x00: [Debuggerx86.FINS.FILD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT  | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FIST,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT  | Debuggerx86.TYPE_OUT],
            0x03: [Debuggerx86.FINS.FISTP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SINT  | Debuggerx86.TYPE_OUT],
            0x05: [Debuggerx86.FINS.FLD,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_TREAL | Debuggerx86.TYPE_IN],
            0x07: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_TREAL | Debuggerx86.TYPE_OUT],
            0x40: [Debuggerx86.FINS.FENI],
            0x41: [Debuggerx86.FINS.FDISI],
            0x42: [Debuggerx86.FINS.FCLEX],
            0x43: [Debuggerx86.FINS.FINIT],
            0x44: [Debuggerx86.FINS.FSETPM,  Debuggerx86.TYPE_80287],
            0x73: [Debuggerx86.FINS.FSINCOS, Debuggerx86.TYPE_80387]
        },
        0xDC: {
            0x00: [Debuggerx86.FINS.FADD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x01: [Debuggerx86.FINS.FMUL,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FCOM,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x03: [Debuggerx86.FINS.FCOMP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x04: [Debuggerx86.FINS.FSUB,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x05: [Debuggerx86.FINS.FSUBR,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FDIV,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x07: [Debuggerx86.FINS.FDIVR,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x30: [Debuggerx86.FINS.FADD,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x31: [Debuggerx86.FINS.FMUL,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x32: [Debuggerx86.FINS.FCOM,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],    // Obsolete encoding
            0x33: [Debuggerx86.FINS.FCOMP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],    // Obsolete encoding
            0x34: [Debuggerx86.FINS.FSUBR,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x35: [Debuggerx86.FINS.FSUB,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x36: [Debuggerx86.FINS.FDIVR,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x37: [Debuggerx86.FINS.FDIV,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN]
        },
        0xDD: {
            0x00: [Debuggerx86.FINS.FLD,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FST,    Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_OUT],
            0x03: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LREAL | Debuggerx86.TYPE_OUT],
            0x04: [Debuggerx86.FINS.FRSTOR, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_FPU   | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FSAVE,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_FPU   | Debuggerx86.TYPE_OUT],
            0x07: [Debuggerx86.FINS.FSTSW,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT],
            0x30: [Debuggerx86.FINS.FFREE,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x31: [Debuggerx86.FINS.FXCH,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT],   // Obsolete encoding
            0x32: [Debuggerx86.FINS.FST,    Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x33: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN]
        },
        0xDE: {
            0x00: [Debuggerx86.FINS.FIADD,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x01: [Debuggerx86.FINS.FIMUL,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FICOM,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x03: [Debuggerx86.FINS.FICOMP, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x04: [Debuggerx86.FINS.FISUB,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x05: [Debuggerx86.FINS.FISUBR, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FIDIV,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x07: [Debuggerx86.FINS.FIDIVR, Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x30: [Debuggerx86.FINS.FADDP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x31: [Debuggerx86.FINS.FMULP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x32: [Debuggerx86.FINS.FCOMP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],    // Obsolete encoding
            0x33: [Debuggerx86.FINS.FCOMPP, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],
            0x34: [Debuggerx86.FINS.FSUBRP, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x35: [Debuggerx86.FINS.FSUBP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x36: [Debuggerx86.FINS.FDIVRP, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN],
            0x37: [Debuggerx86.FINS.FDIVP,  Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_ST | Debuggerx86.TYPE_IN]
        },
        0xDF: {
            0x00: [Debuggerx86.FINS.FILD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_IN],
            0x02: [Debuggerx86.FINS.FIST,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT],
            0x03: [Debuggerx86.FINS.FISTP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_SHORT | Debuggerx86.TYPE_OUT],
            0x04: [Debuggerx86.FINS.FBLD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BCD80 | Debuggerx86.TYPE_IN],
            0x05: [Debuggerx86.FINS.FILD,   Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LINT  | Debuggerx86.TYPE_IN],
            0x06: [Debuggerx86.FINS.FBSTP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_BCD80 | Debuggerx86.TYPE_OUT],
            0x07: [Debuggerx86.FINS.FISTP,  Debuggerx86.TYPE_MODRM  | Debuggerx86.TYPE_LINT  | Debuggerx86.TYPE_OUT],
            0x30: [Debuggerx86.FINS.FFREEP, Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],    // Obsolete encoding
            0x31: [Debuggerx86.FINS.FXCH,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_OUT],   // Obsolete encoding
            0x32: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],    // Obsolete encoding
            0x33: [Debuggerx86.FINS.FSTP,   Debuggerx86.TYPE_IMPREG | Debuggerx86.TYPE_STREG | Debuggerx86.TYPE_IN],    // Obsolete encoding
            0x34: [Debuggerx86.FINS.FSTSWAX, Debuggerx86.TYPE_80287]
        }
    };

    Debuggerx86.aaGrpDescs = [
      [
        /* GRP1B */
        [Debuggerx86.INS.ADD,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.OR,   Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ADC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SBB,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.AND,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SUB,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.XOR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.CMP,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP1W */
        [Debuggerx86.INS.ADD,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.OR,   Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ADC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SBB,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.AND,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SUB,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.XOR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.CMP,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP1SW */
        [Debuggerx86.INS.ADD,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.OR,   Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ADC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SBB,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.AND,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SUB,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.XOR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.CMP,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_SBYTE | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP2B */
        [Debuggerx86.INS.ROL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ROR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.SAR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP2W */
        [Debuggerx86.INS.ROL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ROR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.SAR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH | Debuggerx86.TYPE_80286, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP2B1 */
        [Debuggerx86.INS.ROL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ROR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.SAR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP2W1 */
        [Debuggerx86.INS.ROL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ROR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.SAR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_ONE | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP2BC */
        [Debuggerx86.INS.ROL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ROR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.SAR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP2WC */
        [Debuggerx86.INS.ROL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.ROR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.RCR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.SHR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.SAR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH, Debuggerx86.TYPE_CL | Debuggerx86.TYPE_IN]
      ],
      [
        /* GRP3B */
        [Debuggerx86.INS.TEST, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.NOT,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.NEG,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.MUL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.IMUL, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.DIV,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.IDIV, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH]
      ],
      [
        /* GRP3W */
        [Debuggerx86.INS.TEST, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN,   Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.NOT,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.NEG,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.MUL,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.IMUL, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.DIV,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.IDIV, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH]
      ],
      [
        /* GRP4B */
        [Debuggerx86.INS.INC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.DEC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_BYTE  | Debuggerx86.TYPE_BOTH],
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined
      ],
      [
        /* GRP4W */
        [Debuggerx86.INS.INC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.DEC,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_BOTH],
        [Debuggerx86.INS.CALL, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.CALL, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_FARP  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.JMP,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.JMP,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_FARP  | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.PUSH, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN],
         Debuggerx86.aOpDescUndefined
      ],
      [ /* OP0F */ ],
      [
        /* GRP6 */
        [Debuggerx86.INS.SLDT, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.STR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.LLDT, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.LTR,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.VERR, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.VERW, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined
      ],
      [
        /* GRP7 */
        [Debuggerx86.INS.SGDT, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.SIDT, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.LGDT, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.LIDT, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
        [Debuggerx86.INS.SMSW, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80286],
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.LMSW, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_SHORT| Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80286],
         Debuggerx86.aOpDescUndefined
      ],
      [
        /* GRP8 */
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
         Debuggerx86.aOpDescUndefined,
        [Debuggerx86.INS.BT,  Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_IN  | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.BTS, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.BTR, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN],
        [Debuggerx86.INS.BTC, Debuggerx86.TYPE_MODRM | Debuggerx86.TYPE_WORD  | Debuggerx86.TYPE_OUT | Debuggerx86.TYPE_80386, Debuggerx86.TYPE_IMM | Debuggerx86.TYPE_BYTE | Debuggerx86.TYPE_IN]
      ]
    ];

    /**
     * Table of system (non-segment) descriptors, including indicators of which ones are gates.
     */
    Debuggerx86.SYSDESCS = {
        0x0100: ["tss286",       false],
        0x0200: ["ldt",          false],
        0x0300: ["busy tss286",  false],
        0x0400: ["call gate",    true],
        0x0500: ["task gate",    true],
        0x0600: ["int gate286",  true],
        0x0700: ["trap gate286", true],
        0x0900: ["tss386",       false],
        0x0B00: ["busy tss386",  false],
        0x0C00: ["call gate386", true],
        0x0E00: ["int gate386",  true],
        0x0F00: ["trap gate386", true]
    };

    /**
     * TSS field names and offsets used by dumpTSS()
     */
    Debuggerx86.TSS286 = {
        "PREV_TSS":     0x00,
        "CPL0_SP":      0x02,
        "CPL0_SS":      0x04,
        "CPL1_SP":      0x06,
        "CPL1_SS":      0x08,
        "CPL2_SP":      0x0a,
        "CPL2_SS":      0x0c,
        "TASK_IP":      0x0e,
        "TASK_PS":      0x10,
        "TASK_AX":      0x12,
        "TASK_CX":      0x14,
        "TASK_DX":      0x16,
        "TASK_BX":      0x18,
        "TASK_SP":      0x1a,
        "TASK_BP":      0x1c,
        "TASK_SI":      0x1e,
        "TASK_DI":      0x20,
        "TASK_ES":      0x22,
        "TASK_CS":      0x24,
        "TASK_SS":      0x26,
        "TASK_DS":      0x28,
        "TASK_LDT":     0x2a
    };
    Debuggerx86.TSS386 = {
        "PREV_TSS":     0x00,
        "CPL0_ESP":     0x04,
        "CPL0_SS":      0x08,
        "CPL1_ESP":     0x0c,
        "CPL1_SS":      0x10,
        "CPL2_ESP":     0x14,
        "CPL2_SS":      0x18,
        "TASK_CR3":     0x1C,
        "TASK_EIP":     0x20,
        "TASK_PS":      0x24,
        "TASK_EAX":     0x28,
        "TASK_ECX":     0x2C,
        "TASK_EDX":     0x30,
        "TASK_EBX":     0x34,
        "TASK_ESP":     0x38,
        "TASK_EBP":     0x3C,
        "TASK_ESI":     0x40,
        "TASK_EDI":     0x44,
        "TASK_ES":      0x48,
        "TASK_CS":      0x4C,
        "TASK_SS":      0x50,
        "TASK_DS":      0x54,
        "TASK_FS":      0x58,
        "TASK_GS":      0x5C,
        "TASK_LDT":     0x60,
        "TASK_IOPM":    0x64
    };

    /**
     * Initialize every Debugger module on the page (as IF there's ever going to be more than one ;-))
     */
    WebLib.onInit(Debuggerx86.init);

}   // endif DEBUGGER
