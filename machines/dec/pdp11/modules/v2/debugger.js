/**
 * @fileoverview Implements the PDP-11 Debugger component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusPDP11 from "./bus.js";
import MemoryPDP11 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DbgLib from "../../../../modules/v2/dbglib.js";
import Keys from "../../../../modules/v2/keys.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import UsrLib from "../../../../modules/v2/usrlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, APPNAME, APPVERSION, COMPILED, DEBUG, DEBUGGER, PDP11, globals } from "./defines.js";

/**
 * DebuggerPDP11 Address Object
 *
 *      addr            address
 *      fPhysical       true if this is a physical address
 *      fTemporary      true if this is a temporary breakpoint address
 *      nBase           set if the address contained an explicit base (eg, 16, 10, 8, etc)
 *      sCmd            set for breakpoint addresses if there's an associated command string
 *      aCmds           preprocessed commands (from sCmd)
 *
 * @typedef {Object} DbgAddrPDP11
 * @property {number|null} addr
 * @property {boolean} fPhysical
 * @property {boolean} fTemporary
 * @property {number} [nBase]
 * @property {string} [sCmd]
 * @property {Array.<string>} [aCmds]
 */

/**
 * @class DebuggerPDP11
 * @unrestricted
 */
export default class DebuggerPDP11 extends DbgLib {
    /**
     * DebuggerPDP11(parmsDbg)
     *
     * The DebuggerPDP11 component supports the following optional (parmsDbg) properties:
     *
     *      commands: string containing zero or more commands, separated by ';'
     *
     *      messages: string containing zero or more message categories to enable;
     *      multiple categories must be separated by ',' or ';'.  Parsed by messageInit().
     *
     * The DebuggerPDP11 component is an optional component that implements a variety of user
     * commands for controlling the CPU, dumping and editing memory, etc.
     *
     * @param {Object} parmsDbg
     */
    constructor(parmsDbg)
    {
        super("Debugger", parmsDbg, -1);

        if (DEBUGGER) {

            /*
             * Since this Debugger doesn't use replaceRegs(), we can use parentheses instead of braces.
             */
            this.fInit = false;

            this.achGroup = ['(',')'];
            this.achAddress = [];

            /*
             * Most commands that require an address call parseAddr(), which defaults to dbgAddrNextCode
             * or dbgAddrNextData when no address has been given.  doDump() and doUnassemble(), in turn,
             * update dbgAddrNextData and dbgAddrNextCode, respectively, when they're done.
             *
             * For TEMPORARY breakpoint addresses, we set fTemporary to true, so that they can be automatically
             * cleared when they're hit.
             */
            this.dbgAddrNextCode = this.newAddr();
            this.dbgAddrNextData = this.newAddr();
            this.dbgAddrAssemble = this.newAddr();

            /*
             * aSymbolTable is an array of SymbolTable objects, one per ROM or other chunk of address space,
             * where each object contains the following properties:
             *
             *      sModule
             *      addr (physical address, if any; eg, symbols for a ROM)
             *      len
             *      aSymbols
             *      aOffsets
             *
             * See addSymbols() for more details, since that's how callers add sets of symbols to the table.
             */
            this.aSymbolTable = [];

            /*
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

            /*
             * The new "bn" command allows you to specify a number of instructions to execute and then stop;
             * "bn 0" disables any outstanding count.
             */
            this.nBreakInstructions = 0;

            /*
             * Execution history is allocated by historyInit() whenever checksEnabled() conditions change.
             * Execution history is updated whenever the CPU calls checkInstruction(), which will happen
             * only when checksEnabled() returns true (eg, whenever one or more breakpoints have been set).
             * This ensures that, by default, the CPU runs as fast as possible.
             */
            this.iInstructionHistory = 0;
            this.aInstructionHistory = [];
            this.nextHistory = undefined;
            this.historyInit();

            /*
             * Initialize DebuggerPDP11 message support.
             */
            this.dbg = this;
            this.afnDumpers = {};
            this.bitsMessage = this.bitsWarning = 0;
            this.sMessagePrev = null;
            this.aMessageBuffer = [];
            this.messageInit(parmsDbg['messages']);
            this.sInitCommands = parmsDbg['commands'];

            /*
             * Define remaining miscellaneous DebuggerPDP11 properties.
             */
            this.opTable = DebuggerPDP11.OPTABLE;
            this.aOpReserved = [];
            this.nStep = 0;
            this.sCmdTracePrev = null;
            this.sCmdDumpPrev = null;
            this.fIgnoreNextCheckFault = false;     // TODO: Does this serve any purpose on a PDP-11?
            this.nSuppressBreaks = 0;
            this.cInstructions = this.cInstructionsStart = 0;
            this.nCycles = this.nCyclesStart = this.msStart = 0;
            this.controlDebug = null;
            this.panel = null;

            /*
             * Make it easier to access DebuggerPDP11 commands from an external REPL (eg, the WebStorm
             * "live" console window); eg:
             *
             *      pdp11('r')
             *      pdp11('dw 0:0')
             *      pdp11('h')
             *      ...
             */
            var dbg = this;
            if (globals.window[APPCLASS] === undefined) {
                globals.window[APPCLASS] = function(s) { return dbg.doCommands(s); };
            }

        }   // endif DEBUGGER
    }

    /**
     * getAddr(dbgAddr, fWrite, nb)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11|null} [dbgAddr]
     * @param {boolean} [fWrite]
     * @param {number} [nb] number of bytes to check (1 or 2); default is 1
     * @returns {number} is the corresponding linear address, or PDP11.ADDR_INVALID
     */
    getAddr(dbgAddr, fWrite, nb)
    {
        var addr = dbgAddr && dbgAddr.addr;
        if (addr == null) addr = PDP11.ADDR_INVALID;
        return addr;
    }

    /**
     * newAddr(addr, fPhysical, nBase)
     *
     * Returns a NEW DbgAddrPDP11 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerPDP11}
     * @param {number|null} [addr]
     * @param {boolean} [fPhysical]
     * @param {number} [nBase]
     * @returns {DbgAddrPDP11}
     */
    newAddr(addr = null, fPhysical = false, nBase)
    {
        return {addr: addr, fPhysical: fPhysical, fTemporary: false, nBase: nBase};
    }

    /**
     * setAddr(dbgAddr, addr)
     *
     * Updates an EXISTING DbgAddrPDP11 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} addr
     * @returns {DbgAddrPDP11}
     */
    setAddr(dbgAddr, addr)
    {
        dbgAddr.addr = addr;
        dbgAddr.fTemporary = false;
        dbgAddr.nBase = undefined;
        return dbgAddr;
    }

    /**
     * packAddr(dbgAddr)
     *
     * Packs a DbgAddrPDP11 object into an Array suitable for saving in a machine state object.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @returns {Array}
     */
    packAddr(dbgAddr)
    {
        return [dbgAddr.addr, dbgAddr.fPhysical, dbgAddr.nBase, dbgAddr.fTemporary, dbgAddr.sCmd];
    }

    /**
     * unpackAddr(aAddr)
     *
     * Unpacks a DbgAddrPDP11 object from an Array created by packAddr() and restored from a saved machine state.
     *
     * @this {DebuggerPDP11}
     * @param {Array} aAddr
     * @returns {DbgAddrPDP11}
     */
    unpackAddr(aAddr)
    {
        var dbgAddr = this.newAddr(aAddr[0], aAddr[1], aAddr[2]);
        dbgAddr.fTemporary = aAddr[3];
        if (aAddr[4]) {
            dbgAddr.aCmds = this.parseCommand(dbgAddr.sCmd = aAddr[4]);
        }
        return dbgAddr;
    }

    /**
     * initBus(bus, cpu, dbg)
     *
     * @this {DebuggerPDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cmp = cmp;
        this.cpu = cpu;
        this.panel = cmp.panel;

        /*
         * Re-initialize Debugger message support if necessary
         */
        var sMessages = /** @type {string|undefined} */ (cmp.getMachineParm('messages'));
        if (sMessages) this.messageInit(sMessages);

        if (this.cpu.model < PDP11.MODEL_1140) {
            this.aOpReserved = this.aOpReserved.concat(DebuggerPDP11.OP1140);
        }
        if (this.cpu.model < PDP11.MODEL_1145) {
            this.aOpReserved = this.aOpReserved.concat(DebuggerPDP11.OP1145);
        }

        this.messageDump(MESSAGE.BUS,  function onDumpBus(asArgs) { dbg.dumpBus(asArgs); });

        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {DebuggerPDP11}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "textarea", "register", "flag", "rled", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "debugInput")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var dbg = this;
        switch (sBinding) {

        case "debugInput":
            this.bindings[sBinding] = control;
            this.controlDebug = /** @type {HTMLInputElement} */ (control);
            /*
             * For halted machines, this is fine, but for auto-start machines, it can be annoying.
             *
             *      control.focus();
             */
            control.onkeydown = function onKeyDownDebugInput(event) {
                var sCmd;
                if (event.keyCode == Keys.KEYCODE.CR) {
                    sCmd = dbg.controlDebug.value;
                    dbg.controlDebug.value = "";
                    dbg.doCommands(sCmd, true);
                }
                else if (event.keyCode == Keys.KEYCODE.ESC) {
                    dbg.controlDebug.value = sCmd = "";
                }
                else {
                    if (event.keyCode == Keys.KEYCODE.UP) {
                        sCmd = dbg.getPrevCommand();
                    }
                    else if (event.keyCode == Keys.KEYCODE.DOWN) {
                        sCmd = dbg.getNextCommand();
                    }
                    if (sCmd != null) {
                        var cch = sCmd.length;
                        dbg.controlDebug.value = sCmd;
                        dbg.controlDebug.setSelectionRange(cch, cch);
                    }
                }
                if (sCmd != null && event.preventDefault) event.preventDefault();
            };
            return true;

        case "debugEnter":
            this.bindings[sBinding] = control;
            WebLib.onClickRepeat(
                control,
                500, 100,
                function onClickDebugEnter(fRepeat) {
                    if (dbg.controlDebug) {
                        var sCmd = dbg.controlDebug.value;
                        dbg.controlDebug.value = "";
                        dbg.doCommands(sCmd, true);
                        return true;
                    }
                    if (DEBUG) dbg.printf(MESSAGE.LOG, "no debugger input buffer");
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
                    var fCompleted = false;
                    if (!dbg.isBusy(true)) {
                        dbg.setBusy(true);
                        fCompleted = dbg.stepCPU(fRepeat? 1 : 0, null);
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
     * setFocus(fScroll)
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fScroll] (true if you really want the control scrolled into view)
     */
    setFocus(fScroll)
    {
        if (this.controlDebug) {
            /*
             * This is the recommended work-around to prevent the browser from scrolling the focused element
             * into view.  The CPU is not a visual component, so when the CPU wants to set focus, the primary intent
             * is to ensure that keyboard input is fielded properly.
             */
            var x = 0, y = 0;
            if (!fScroll && window) {
                x = window.scrollX;
                y = window.scrollY;
            }

            this.controlDebug.focus();

            if (!fScroll && window) {
                window.scrollTo(x, y);
            }
        }
    }

    /**
     * mapUnibus(addr)
     *
     * @this {DebuggerPDP11}
     * @param {number} addr
     * @returns {number}
     */
    mapUnibus(addr)
    {
        return this.cpu.mapUnibus(addr);
    }

    /**
     * getByte(dbgAddr, inc)
     *
     * We must route all our memory requests through the CPU now, in case paging is enabled.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getByte(dbgAddr, inc)
    {
        var b = 0xff;
        var addr = this.getAddr(dbgAddr, false, 1);
        if (addr !== PDP11.ADDR_INVALID) {
            b = (dbgAddr.fPhysical || addr > 0xffff)? this.bus.getByteDirect(this.mapUnibus(addr)) : this.cpu.getByteSafe(addr);
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return b;
    }

    /**
     * getWord(dbgAddr, inc)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getWord(dbgAddr, inc)
    {
        var w = 0xffff;
        var addr = this.getAddr(dbgAddr, false, 2);
        if (addr !== PDP11.ADDR_INVALID) {
            w = (dbgAddr.fPhysical || addr > 0xffff)? this.bus.getWordDirect(this.mapUnibus(addr)) : this.cpu.getWordSafe(addr);
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return w;
    }

    /**
     * setByte(dbgAddr, b, inc)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} b
     * @param {number} [inc]
     */
    setByte(dbgAddr, b, inc)
    {
        var addr = this.getAddr(dbgAddr, true, 1);
        if (addr !== PDP11.ADDR_INVALID) {
            if (dbgAddr.fPhysical || addr > 0xffff) {
                this.bus.setByteDirect(this.mapUnibus(addr), b);
            } else {
                this.cpu.setByteSafe(addr, b);
            }
            if (inc) this.incAddr(dbgAddr, inc);
            this.cmp.updateDisplays(-1);
        }
    }

    /**
     * setWord(dbgAddr, w, inc)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} w
     * @param {number} [inc]
     */
    setWord(dbgAddr, w, inc)
    {
        var addr = this.getAddr(dbgAddr, true, 2);
        if (addr !== PDP11.ADDR_INVALID) {
            if (dbgAddr.fPhysical || addr > 0xffff) {
                this.bus.setWordDirect(this.mapUnibus(addr), w);
            } else {
                this.cpu.setWordSafe(addr, w);
            }
            if (inc) this.incAddr(dbgAddr, inc);
            this.cmp.updateDisplays(-1);
        }
    }

    /**
     * parseAddr(sAddr, fCode, fNoChecks)
     *
     * Address evaluation and validation (eg, range checks) are no longer performed at this stage.  That's
     * done later, by getAddr(), which returns PDP11.ADDR_INVALID for invalid segments, out-of-range offsets,
     * etc.  The Debugger's low-level get/set memory functions verify all getAddr() results, but even if an
     * invalid address is passed through to the Bus memory interfaces, the address will simply be masked with
     * bus.nBusMask; in the case of PDP11.ADDR_INVALID, that will generally refer to the top of the physical
     * address space.
     *
     * @this {DebuggerPDP11}
     * @param {string|undefined} sAddr
     * @param {boolean} [fCode] (true if target is code, false if target is data)
     * @param {boolean} [fNoChecks] (true when setting breakpoints that may not be valid now, but will be later)
     * @returns {DbgAddrPDP11|null|undefined}
     */
    parseAddr(sAddr, fCode, fNoChecks)
    {
        var dbgAddr;
        var dbgAddrNext = (fCode? this.dbgAddrNextCode : this.dbgAddrNextData);
        var addr = dbgAddrNext.addr;
        var fPhysical, nBase;
        if (sAddr !== undefined) {
            sAddr = this.parseReference(sAddr);
            var ch = sAddr.charAt(0);
            if (ch == '%') {
                fPhysical = true;
                sAddr = sAddr.substr(1);
            }
            dbgAddr = this.findSymbolAddr(sAddr);
            if (dbgAddr) return dbgAddr;
            if (sAddr.indexOf("0x") >= 0) {
                nBase = 16;
            } else if (sAddr.indexOf("0o") >= 0) {
                nBase = 8;
            } else if (sAddr.indexOf('.') >= 0) {
                nBase = 10;
            }
            addr = this.parseExpression(sAddr);
        }
        if (addr != null) {
            dbgAddr = this.newAddr(addr, fPhysical, nBase);
        }
        return dbgAddr;
    }

    /**
     * parseAddrOptions(dbdAddr, sOptions)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {string} [sOptions]
     */
    parseAddrOptions(dbgAddr, sOptions)
    {
        if (sOptions) {
            var a = sOptions.match(/(['"])(.*?)\1/);
            if (a) {
                dbgAddr.aCmds = this.parseCommand(dbgAddr.sCmd = a[2]);
            }
        }
    }

    /**
     * incAddr(dbgAddr, inc)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} [inc] contains value to increment dbgAddr by (default is 1)
     */
    incAddr(dbgAddr, inc)
    {
        if (dbgAddr.addr != null) {
            dbgAddr.addr += (inc || 1);
        }
    }

    /**
     * toStrOffset(off)
     *
     * @this {DebuggerPDP11}
     * @param {number|null|undefined} [off]
     * @returns {string} the hex representation of off
     */
    toStrOffset(off)
    {
        return this.toStrBase(off);
    }

    /**
     * toStrAddr(dbgAddr)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @returns {string} the hex representation of the address
     */
    toStrAddr(dbgAddr)
    {
        return (dbgAddr.fPhysical? '%' : '') + this.toStrOffset(dbgAddr.addr);
    }

    /**
     * getSZ(dbgAddr, cchMax)
     *
     * Gets zero-terminated (aka "ASCIIZ") string from dbgAddr.  It also stops at the first '$', in case this is
     * a '$'-terminated string -- mainly because I'm lazy and didn't feel like writing a separate get() function.
     * Yes, a zero-terminated string containing a '$' will be prematurely terminated, and no, I don't care.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {number} [cchMax] (default is 256)
     * @returns {string} (and dbgAddr advanced past the terminating zero)
     */
    getSZ(dbgAddr, cchMax)
    {
        var s = "";
        cchMax = cchMax || 256;
        while (s.length < cchMax) {
            var b = this.getByte(dbgAddr, 1);
            if (!b || b == 0x24 || b >= 127) break;
            s += (b >= 32? String.fromCharCode(b) : '.');
        }
        return s;
    }

    /**
     * dumpBlocks(aBlocks, sAddr)
     *
     * @this {DebuggerPDP11}
     * @param {Array} aBlocks
     * @param {string} [sAddr] (optional block address)
     */
    dumpBlocks(aBlocks, sAddr)
    {
        var addr = 0, i = 0, n = aBlocks.length;

        if (sAddr) {
            addr = this.getAddr(this.parseAddr(sAddr));
            if (addr === PDP11.ADDR_INVALID) {
                this.printf("invalid address: %s\n", sAddr);
                return;
            }
            i = addr >>> this.bus.nBlockShift;
            n = 1;
        }

        this.printf("blockid   physical   blockaddr  used    size    type\n");
        this.printf("--------  ---------  ---------  ------  ------  ----\n");

        var typePrev = -1, cPrev = 0;
        while (n--) {
            var block = aBlocks[i];
            if (block.type == typePrev) {
                if (!cPrev++) this.printf("...\n");
            } else {
                typePrev = block.type;
                var sType = MemoryPDP11.TYPE_NAMES[typePrev];
                if (block) {
                    this.printf("%08x  %%08x  %%08x  %#06x  %#06x  %s\n", block.id, i << this.bus.nBlockShift, block.addr, block.used, block.size, sType);
                }
                if (typePrev != MemoryPDP11.TYPE.NONE) typePrev = -1;
                cPrev = 0;
            }
            addr += this.bus.nBlockSize;
            i++;
        }
    }

    /**
     * dumpBus(asArgs)
     *
     * Dumps Bus allocations.
     *
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs (asArgs[0] is an optional block address)
     */
    dumpBus(asArgs)
    {
        this.dumpBlocks(this.bus.aBusBlocks, asArgs[0]);
    }

    /**
     * dumpHistory(sPrev, sLines)
     *
     * If sLines is not a number, it can be a instruction filter.  However, for the moment, the only
     * supported filter is "call", which filters the history buffer for all CALL and RET instructions
     * from the specified previous point forward.
     *
     * @this {DebuggerPDP11}
     * @param {string} [sPrev] is a (decimal) number of instructions to rewind to (default is 10)
     * @param {string} [sLines] is a (decimal) number of instructions to print (default is, again, 10)
     */
    dumpHistory(sPrev, sLines)
    {
        var sMore = "";
        var cHistory = 0;
        var iHistory = this.iInstructionHistory;
        var aHistory = this.aInstructionHistory;

        if (aHistory.length) {
            var nPrev = +sPrev || this.nextHistory;
            var nLines = +sLines || 10;

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
                /*
                 * If the dbgAddr of the last aHistory element contains a valid selector, wrap around.
                 */
                if (aHistory[aHistory.length - 1].addr == null) {
                    nPrev = iHistory + nPrev;
                    iHistory = 0;
                } else {
                    iHistory += aHistory.length;
                }
            }

            var aFilters = [];
            if (sLines == "call") {
                nLines = 100000;
                aFilters = ["CALL"];
            }

            if (sPrev !== undefined) {
                this.printf("%d instructions earlier:\n", nPrev);
            }

            /*
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
            while (nLines > 0 && iHistory != this.iInstructionHistory) {

                var dbgAddr = aHistory[iHistory++];
                if (dbgAddr.addr == null) break;

                /*
                 * We must create a new dbgAddr from the address in aHistory, because dbgAddr was
                 * a reference, not a copy, and we don't want getInstruction() modifying the original.
                 */
                var dbgAddrNew = this.newAddr(dbgAddr.addr);

                var sComment = "history";
                var nSequence = nPrev--;

                /*
                 * TODO: Need to some UI to control whether cycle counts are displayed as part of the history.
                 * It's currently disabled in checkInstruction(), so it's disable here, too.
                 *
                if (DEBUG && dbgAddr.cycleCount != null) {
                    sComment = "cycles";
                    nSequence = dbgAddr.cycleCount;
                }
                 */

                var sInstruction = this.getInstruction(dbgAddrNew, sComment, nSequence);

                if (!aFilters.length || sInstruction.indexOf(aFilters[0]) >= 0) {
                    this.printf("%s\n", sInstruction);
                }

                /*
                 * If there were OPERAND or ADDRESS overrides on the previous instruction, getInstruction()
                 * will have automatically disassembled additional bytes, so skip additional history entries.
                 */
                if (dbgAddrNew.cOverrides) {
                    iHistory += dbgAddrNew.cOverrides; nLines -= dbgAddrNew.cOverrides; nPrev -= dbgAddrNew.cOverrides;
                }

                if (iHistory >= aHistory.length) iHistory = 0;
                this.nextHistory = nPrev;
                cHistory++;
                nLines--;
            }
            /*
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
     * messageInit(sEnable)
     *
     * @this {DebuggerPDP11}
     * @param {string|undefined} sEnable contains zero or more message categories to enable, separated by ','
     */
    messageInit(sEnable)
    {
        this.dbg = this;
        this.bitsMessage = this.bitsWarning = MESSAGE.WARNING;
        this.sMessagePrev = null;
        this.aMessageBuffer = [];
        /*
         * Internally, we use "key" instead of "keys", since the latter is a method on JavasScript objects,
         * but externally, we allow the user to specify "keys"; "kbd" is also allowed as shorthand for "keyboard".
         */
        var aEnable = this.parseCommand(sEnable.replace("keys","key").replace("kbd","keyboard"), false, ',');
        if (aEnable.length) {
            for (var m in MESSAGE.NAMES) {
                if (UsrLib.indexOf(aEnable, m) >= 0) {
                    this.bitsMessage |= MESSAGE.NAMES[m];
                    this.printf("%s messages enabled\n", m);
                }
            }
        }
    }

    /**
     * messageDump(bitMessage, fnDumper)
     *
     * @this {DebuggerPDP11}
     * @param {number} bitMessage is one Messages category flag
     * @param {function(Array.<string>)} fnDumper is a function the Debugger can use to dump data for that category
     * @returns {boolean} true if successfully registered, false if not
     */
    messageDump(bitMessage, fnDumper)
    {
        for (var m in MESSAGE.NAMES) {
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
     * @this {DebuggerPDP11}
     * @param {string} sReg
     * @param {number} [off] optional offset into sReg
     * @returns {number} register index, or -1 if not found
     */
    getRegIndex(sReg, off)
    {
        sReg = sReg.toUpperCase();
        var iReg = DebuggerPDP11.REGS[sReg];
        if (iReg == null) {
            iReg = -1;
            if (sReg.charAt(0) == "R") {
                iReg = +sReg.charAt(1);
                if (iReg < 0 || iReg > 7) iReg = -1;
            }
        }
        return iReg;
    }

    /**
     * getRegName(iReg)
     *
     * @this {DebuggerPDP11}
     * @param {number} iReg (0-7; not used for other registers)
     * @returns {string}
     */
    getRegName(iReg)
    {
        var sReg;
        if (iReg < DebuggerPDP11.REG_AR || this.panel) sReg = DebuggerPDP11.REGNAMES[iReg];
        return sReg || "";
    }

    /**
     * getRegValue(iReg)
     *
     * Register numbers 0-7 are reserved for cpu.regsGen, 8-15 are reserved for cpu.regsAlt,
     * 16-19 for cpu.regsAltStack, 20 for regPSW, etc.
     *
     * @this {DebuggerPDP11}
     * @param {number} iReg
     * @returns {number|undefined}
     */
    getRegValue(iReg)
    {
        var value;
        if (iReg >= 0) {
            if (iReg < 8) {
                value = this.cpu.regsGen[iReg];
            }
            else if (iReg < 16) {
                value = this.cpu.regsAlt[iReg-8];
            }
            else if (iReg < 20) {
                value = this.cpu.regsAltStack[iReg-16];
            }
            else {
                var cpu = this.cpu;
                var panel = this.panel;
                switch(iReg) {
                case DebuggerPDP11.REG_PS:
                    value = this.cpu.getPSW();
                    break;
                case DebuggerPDP11.REG_PI:
                    value = cpu.getPIR();
                    break;
                case DebuggerPDP11.REG_ER:
                    value = cpu.regErr;
                    break;
                case DebuggerPDP11.REG_SL:
                    value = cpu.getSLR();
                    break;
                case DebuggerPDP11.REG_M0:
                    value = cpu.getMMR0();
                    break;
                case DebuggerPDP11.REG_M1:
                    value = cpu.getMMR1();
                    break;
                case DebuggerPDP11.REG_M2:
                    value = cpu.getMMR2();
                    break;
                case DebuggerPDP11.REG_M3:
                    value = cpu.getMMR3();
                    break;
                case DebuggerPDP11.REG_AR:
                    if (panel) value = panel.getAR();
                    break;
                case DebuggerPDP11.REG_DR:
                    if (panel) value = panel.getDR();
                    break;
                case DebuggerPDP11.REG_SR:
                    if (panel) value = panel.getSR();
                    break;
                }
            }
        }
        return value;
    }

    /**
     * replaceRegs(s)
     *
     * TODO: Implement or eliminate.
     *
     * @this {DebuggerPDP11}
     * @param {string} s
     * @returns {string}
     */
    replaceRegs(s)
    {
        return s;
    }

    /**
     * message(sMessage, bitsMessage)
     *
     * @this {DebuggerPDP11}
     * @param {string} sMessage
     * @param {number} [bitsMessage]
     */
    message(sMessage, bitsMessage)
    {
        var sAddress, fRunning;
        if ((bitsMessage & MESSAGE.ADDR) && this.cpu) {
            sAddress = " @" + this.toStrAddr(this.newAddr(this.cpu.getLastPC()));
            sMessage = sMessage.replace(/(\n?)$/, sAddress);
        }

        if (this.sMessagePrev && sMessage == this.sMessagePrev) return;
        this.sMessagePrev = sMessage;

        if (this.bitsMessage & MESSAGE.BUFFER) {
            this.aMessageBuffer.push(sMessage);
            return;
        }

        if ((this.bitsMessage & MESSAGE.HALT) && this.cpu && (fRunning = this.cpu.isRunning()) || this.isBusy(true)) {
            if (fRunning) sMessage = sMessage.replace(/(\n?)$/, " (cpu halted)$1");
            this.stopCPU();
        }

        this.print(sMessage, bitsMessage); // + " (" + this.cpu.getCycles() + " cycles)"

        /*
         * We have no idea what the frequency of print() calls might be; all we know is that they easily
         * screw up the CPU's careful assumptions about cycles per burst.  So we call yieldCPU() after every
         * message, to effectively end the current burst and start fresh.
         *
         * TODO: See CPUPDP11.calcStartTime() for a discussion of why we might want to call yieldCPU() *before*
         * we display the message.
         */
        if (this.cpu) this.cpu.yieldCPU();
    }

    /**
     * init()
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fAutoStart]
     */
    init(fAutoStart)
    {
        this.fInit = true;
        this.printf("Type ? for help with PDPjs Debugger commands\n");
        this.updateStatus();
        if (!fAutoStart) this.setFocus();
        if (this.sInitCommands) {
            var sCommands = this.sInitCommands;
            this.sInitCommands = null;
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
     * @this {DebuggerPDP11}
     * @param {boolean} [fQuiet]
     */
    historyInit(fQuiet)
    {
        var i;
        if (!this.checksEnabled()) {
            if (this.aInstructionHistory && this.aInstructionHistory.length && !fQuiet) {
                this.printf("instruction history buffer freed\n");
            }
            this.iInstructionHistory = 0;
            this.aInstructionHistory = [];
            return;
        }
        if (!this.aInstructionHistory || !this.aInstructionHistory.length) {
            this.aInstructionHistory = new Array(DebuggerPDP11.HISTORY_LIMIT);
            for (i = 0; i < this.aInstructionHistory.length; i++) {
                /*
                 * Preallocate dummy Addr (Array) objects in every history slot, so that
                 * checkInstruction() doesn't need to call newAddr() on every slot update.
                 */
                this.aInstructionHistory[i] = this.newAddr();
            }
            this.iInstructionHistory = 0;
            if (!fQuiet) {
                this.printf("instruction history buffer allocated\n");
            }
        }
    }

    /**
     * startCPU(fUpdateFocus, fQuiet)
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fUpdateFocus] is true to update focus
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if run request successful, false if not
     */
    startCPU(fUpdateFocus, fQuiet)
    {
        if (!this.checkCPU(fQuiet)) return false;
        this.cpu.startCPU(fUpdateFocus);
        return true;
    }

    /**
     * stepCPU(nCycles, fRegs, fUpdateDisplays)
     *
     * @this {DebuggerPDP11}
     * @param {number} nCycles (0 for one instruction without checking breakpoints)
     * @param {boolean|null} [fRegs] is true to display registers after step (default is false; use null for previous setting)
     * @param {boolean} [fUpdateDisplays] is false to disable Computer display updates (default is true)
     * @returns {boolean}
     */
    stepCPU(nCycles, fRegs, fUpdateDisplays)
    {
        if (!this.checkCPU()) return false;

        var sCmd = "";
        if (fRegs === null) {
            fRegs = (!this.sCmdTracePrev || this.sCmdTracePrev == "tr");
            sCmd = fRegs? "tr" : "t";
        }

        this.nCycles = 0;

        if (!nCycles) {
            /*
             * When single-stepping, the CPU won't call checkInstruction(), which is good for
             * avoiding breakpoints, but bad for instruction data collection if checks are enabled.
             * So we call checkInstruction() ourselves.
             */
            if (this.checksEnabled()) this.checkInstruction(this.cpu.getPC(), 0);
        }
        /*
         * For our typically tiny bursts (usually single instructions), mimic what runCPU() does.
         */
        try {
            nCycles = this.cpu.getBurstCycles(nCycles);
            var nCyclesStep = this.cpu.stepCPU(nCycles);
            if (nCyclesStep > 0) {
                this.cpu.updateTimers(nCyclesStep);
                this.nCycles += nCyclesStep;
                this.cpu.addCycles(nCyclesStep, true);
                this.cpu.updateChecksum(nCyclesStep);
                this.cInstructions++;
            }
        }
        catch(exception) {
            /*
             * We assume that any numeric exception was explicitly thrown by the CPU to interrupt the
             * current instruction.  For all other exceptions, we attempt a stack dump.
             */
            if (typeof exception != "number") {
                var e = exception;
                this.nCycles = 0;
                this.cpu.setError(e.stack || e.message);
            }
        }

        /*
         * Because we called cpu.stepCPU() and not cpu.startCPU(), we must nudge the Computer's update code,
         * and then update our own state.  Normally, the only time fUpdateDisplays will be false is when doTrace()
         * is calling us in a loop, in which case it will perform its own updateDisplays() when it's done.
         */
        if (fUpdateDisplays !== false) {
            if (this.panel) this.panel.stop();
            this.cmp.updateDisplays(-1);
        }

        this.updateStatus(fRegs || false, sCmd);
        return (this.nCycles > 0);
    }

    /**
     * stopCPU()
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fComplete]
     */
    stopCPU(fComplete)
    {
        if (this.cpu) this.cpu.stopCPU(fComplete);
    }

    /**
     * updateStatus(fRegs, sCmd)
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fRegs] (default is true)
     * @param {string} [sCmd]
     */
    updateStatus(fRegs, sCmd)
    {
        if (!this.fInit) return;

        if (fRegs === undefined) fRegs = true;

        if (sCmd) {
            this.printf("%s%s\n", DebuggerPDP11.PROMPT, sCmd);
        }

        var trapStatus = this.cpu.getTrapStatus();
        if (trapStatus) {
            var reason = trapStatus >> 8;
            var sReason = reason < 0? PDP11.REASONS[-reason] : this.toStrBase(reason);
            this.printf("trapped to %s (%s)\n", this.toStrBase(trapStatus & 0xff, 8), sReason);
        }

        this.dbgAddrNextCode = this.newAddr(this.cpu.getPC());
        /*
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
     * Make sure the CPU is ready (finished initializing), powered, not already running, and not in an error state.
     *
     * @this {DebuggerPDP11}
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
     * @this {DebuggerPDP11}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            /*
             * Because Debugger save/restore support is somewhat limited (and didn't always exist),
             * we deviate from the typical save/restore design pattern: instead of reset OR restore,
             * we always reset and then perform a (potentially limited) restore.
             */
            this.reset(true);

            // this.printf("%s\n", data? "resuming" : "powering up");

            if (data) {
                return this.restore(data);
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {DebuggerPDP11}
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
     * @this {DebuggerPDP11}
     * @param {boolean} fQuiet (true only when called from our own powerUp handler)
     */
    reset(fQuiet)
    {
        this.historyInit();
        this.cInstructions = this.cInstructionsStart = 0;
        this.sMessagePrev = null;
        this.nCycles = 0;
        this.dbgAddrNextCode = this.newAddr(this.cpu.getPC());
        /*
         * fRunning is set by start() and cleared by stop().  In addition, we clear
         * it here, so that if the CPU is reset while running, we can prevent stop()
         * from unnecessarily dumping the CPU state.
         */
        this.flags.running = false;
        this.clearTempBreakpoint();
        if (!fQuiet) this.updateStatus();
    }

    /**
     * save()
     *
     * This implements (very rudimentary) save support for the Debugger component.
     *
     * @this {DebuggerPDP11}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        state.set(0, this.packAddr(this.dbgAddrNextCode));
        state.set(1, this.packAddr(this.dbgAddrAssemble));
        state.set(2, [this.aPrevCmds, this.fAssemble, this.bitsMessage]);
        state.set(3, this.aSymbolTable);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements (very rudimentary) restore support for the Debugger component.
     *
     * @this {DebuggerPDP11}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        var i = 0;
        if (data[2] !== undefined) {
            this.dbgAddrNextCode = this.unpackAddr(data[i++]);
            this.dbgAddrAssemble = this.unpackAddr(data[i++]);
            this.aPrevCmds = data[i][0];
            if (typeof this.aPrevCmds == "string") this.aPrevCmds = [this.aPrevCmds];
            this.fAssemble = data[i][1];
            this.bitsMessage |= data[i][2];     // keep our current message bits set, and simply "add" any extra bits defined by the saved state
        }
        if (data[3]) this.aSymbolTable = data[3];
        return true;
    }

    /**
     * start(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has started.
     *
     * @this {DebuggerPDP11}
     * @param {number} ms
     * @param {number} nCycles
     */
    start(ms, nCycles)
    {
        if (!this.nStep) this.printf("running\n");
        this.flags.running = true;
        this.msStart = ms;
        this.nCyclesStart = nCycles;
        this.notifyEvent(DbgLib.EVENTS.EXIT);
    }

    /**
     * stop(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has now stopped.
     *
     * @this {DebuggerPDP11}
     * @param {number} ms
     * @param {number} nCycles
     */
    stop(ms, nCycles)
    {
        if (this.flags.running) {
            this.flags.running = false;
            this.nCycles = nCycles - this.nCyclesStart;
            this.notifyEvent(DbgLib.EVENTS.ENTER);
            if (!this.nStep) {
                var sStopped = "stopped";
                if (this.nCycles) {
                    var msTotal = ms - this.msStart;
                    var nCyclesPerSecond = (msTotal > 0? Math.round(this.nCycles * 1000 / msTotal) : 0);
                    sStopped += " (";
                    if (this.checksEnabled()) {
                        sStopped += this.cInstructions + " instructions, ";
                        /*
                         * $ops displays progress by calculating cInstructions - cInstructionsStart, so before
                         * zeroing cInstructions, we should subtract cInstructions from cInstructionsStart (since
                         * we're effectively subtracting cInstructions from cInstructions as well).
                         */
                        this.cInstructionsStart -= this.cInstructions;
                        this.cInstructions = 0;
                    }
                    sStopped += this.nCycles + " cycles, " + msTotal + " ms, " + nCyclesPerSecond + " hz)";
                } else {
                    if (this.messageEnabled(MESSAGE.HALT)) {
                        /*
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
            this.setFocus();
            this.clearTempBreakpoint(this.cpu.getPC());
            this.notifyEvent(DbgLib.EVENTS.READY);
            this.sMessagePrev = null;
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
     * @this {DebuggerPDP11}
     * @param {boolean} [fRelease] is true for release criteria only; default is false (any criteria)
     * @returns {boolean} true if every instruction needs to pass through checkInstruction(), false if not
     */
    checksEnabled(fRelease)
    {
        return ((DEBUG && !fRelease)? true : (this.aBreakExec.length > 1 || !!this.nBreakInstructions));
    }

    /**
     * checkInstruction(addr, nState)
     *
     * This "check" function is called by the CPU to inform us about the next instruction to be executed,
     * giving us an opportunity to look for "exec" breakpoints and update opcode instruction history.
     *
     * @this {DebuggerPDP11}
     * @param {number} addr
     * @param {number} nState is < 0 if stepping, 0 if starting, or > 0 if running
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkInstruction(addr, nState)
    {
        var opCode = -1;
        var cpu = this.cpu;

        /*
         * If opHalt() calls our stopInstruction() function, it will effectively rewind the PC back to the HALT,
         * purely for our debugging benefit, so we must compensate for that here by advancing the PC past the HALT
         * when the machine starts up again.
         */
        if (!nState) {
            opCode = this.cpu.getWordSafe(addr);
            /*
             * We have to be careful about this HALT-skipping code, because as fate would have it, I inadvertently
             * stopped the following diagnostic with a breakpoint *on* a HALT instruction:
             *
             *      .R EKBEE1
             *      EKBEE1.BIC
             *
             *      CEKBEE0 11/70 MEM MGMT
             *
             *      CPU UNDER TEST FOUND TO BE A KB11-CM
             *      bp 033330 hit
             *      stopped (28339757 instructions, 123994176 cycles, 19177 ms, 6465775 hz)
             *      R0=140000 R1=033330 R2=100143 R3=133260 R4=000000 R5=177700
             *      SP=000600 PC=033330 PS=140000 IR=000000 SL=000377 T0 N0 Z0 V0 C0
             *      033330: 000000                 HALT
             *
             * Since we haven't executed the HALT yet, it would be wrong (and would cause a diagnostic failure) to
             * skip over it.  In this particular case, the PDR for the address of the HALT instruction was invalid,
             * so the HALT gets fetched but not executed.
             *
             * My first thought was that maybe we need to probe the address more thoroughly (getWordSafe() does
             * not), but it should be sufficient to simply confirm that the PC of the last opcode executed matches
             * the addr of this HALT.
             *
             * Yes, I could save myself this grief by eliminating these PC hacks, both here and in stopInstruction(),
             * but I still think it's a useful debugging aid.
             */
            if (opCode == PDP11.OPCODE.HALT && this.cpu.getLastPC() == addr) {
                addr = this.cpu.advancePC(2);
            }
        }

        /*
         * If the CPU stopped on a breakpoint, we're not interested in stopping again if the machine is starting.
         */
        if (nState > 0) {
            if (this.nBreakInstructions) {
                if (!--this.nBreakInstructions) return true;
            }
            if (this.checkBreakpoint(addr, 1, this.aBreakExec)) {
                return true;
            }
        }

        /*
         * The rest of the instruction tracking logic can only be performed if historyInit() has allocated the
         * necessary data structures.  Note that there is no explicit UI for enabling/disabling history, other than
         * adding/removing breakpoints, simply because it's breakpoints that trigger the call to checkInstruction();
         * well, OK, and a few other things now, like enabling MESSAGE.INT messages.
         */
        if (nState >= 0 && this.aInstructionHistory.length) {
            this.cInstructions++;
            if (opCode < 0) {
                opCode = this.cpu.getWordSafe(addr);
            }
            if ((opCode & 0xffff) != PDP11.OPCODE.INVALID) {
                var dbgAddr = this.aInstructionHistory[this.iInstructionHistory];
                this.setAddr(dbgAddr, addr);
                // if (DEBUG) dbgAddr.cycleCount = cpu.getCycles();
                if (++this.iInstructionHistory == this.aInstructionHistory.length) this.iInstructionHistory = 0;
            }
        }
        return false;
    }

    /**
     * stopInstruction(sMessage)
     *
     * TODO: Currently, the only way to prevent this call from stopping the CPU is when you're single-stepping.
     *
     * @this {DebuggerPDP11}
     * @param {string} [sMessage]
     * @returns {boolean} true if stopping is enabled, false if not
     */
    stopInstruction(sMessage)
    {
        var cpu = this.cpu;
        if (cpu.isRunning()) {
            cpu.setPC(this.cpu.getLastPC());
            if (sMessage) this.printf("%s\n", sMessage);
            this.stopCPU();
            /*
             * TODO: Review the appropriate-ness of throwing a bogus vector number in order to immediately stop
             * the instruction.  It's handy, but it also means that we no longer actually return true, so callers
             * of either stopInstruction() or undefinedInstruction() may have unreachable code paths.
             */
            throw -1;
        }
        return false;
    }

    /**
     * undefinedInstruction(opCode)
     *
     * @this {DebuggerPDP11}
     * @param {number} opCode
     * @returns {boolean} true if stopping is enabled, false if not
     */
    undefinedInstruction(opCode)
    {
        if (this.messageEnabled(MESSAGE.CPU)) {
            this.printf(MESSAGE.CPU + MESSAGE.ADDR, "undefined opcode %s\n", this.toStrBase(opCode));
            return this.stopInstruction();  // allow the caller to step over it if they really want a trap generated
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
     * @this {DebuggerPDP11}
     * @param {number} addr
     * @param {number} [nb] (# of bytes; default is 1)
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkMemoryRead(addr, nb)
    {
        if (this.checkBreakpoint(addr, nb || 1, this.aBreakRead)) {
            this.stopCPU(false);
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
     * @this {DebuggerPDP11}
     * @param {number} addr
     * @param {number} [nb] (# of bytes; default is 1)
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkMemoryWrite(addr, nb)
    {
        if (this.checkBreakpoint(addr, nb || 1, this.aBreakWrite)) {
            this.stopCPU(false);
            return true;
        }
        return false;
    }

    /**
     * clearBreakpoints()
     *
     * @this {DebuggerPDP11}
     */
    clearBreakpoints()
    {
        var i, dbgAddr, addr;
        this.aBreakExec = ["bp"];
        if (this.aBreakRead !== undefined) {
            for (i = 1; i < this.aBreakRead.length; i++) {
                dbgAddr = this.aBreakRead[i];
                addr = this.getAddr(dbgAddr);
                if (!dbgAddr.fPhysical) {
                    this.cpu.removeMemBreak(addr, false);
                } else {
                    this.bus.removeMemBreak(addr, false);
                }
            }
        }
        this.aBreakRead = ["br"];
        if (this.aBreakWrite !== undefined) {
            for (i = 1; i < this.aBreakWrite.length; i++) {
                dbgAddr = this.aBreakWrite[i];
                addr = this.getAddr(dbgAddr);
                if (!dbgAddr.fPhysical) {
                    this.cpu.removeMemBreak(addr, true);
                } else {
                    this.bus.removeMemBreak(addr, true);
                }
            }
        }
        this.aBreakWrite = ["bw"];
        /*
         * nSuppressBreaks ensures we can't get into an infinite loop where a breakpoint lookup
         * requires reading memory that triggers more memory reads, which triggers more breakpoint checks.
         */
        this.nSuppressBreaks = 0;
        this.nBreakInstructions = 0;
    }

    /**
     * addBreakpoint(aBreak, dbgAddr, fTemporary)
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
     * @this {DebuggerPDP11}
     * @param {Array} aBreak
     * @param {DbgAddrPDP11} dbgAddr
     * @param {boolean} [fTemporary]
     * @returns {boolean} true if breakpoint added, false if already exists
     */
    addBreakpoint(aBreak, dbgAddr, fTemporary)
    {
        var fSuccess = true;

        // this.nSuppressBreaks++;

        /*
         * Instead of complaining that a breakpoint already exists (as we used to do), we now
         * allow breakpoints to be re-set; this makes it easier to update any commands that may
         * be associated with the breakpoint.
         *
         * The only exception: we DO allow a temporary breakpoint at an address where there may
         * already be a breakpoint, so that you can easily step ("p" or "g") over such addresses.
         */
        if (!fTemporary) {
            this.findBreakpoint(aBreak, dbgAddr, true, false, true);
        }

        if (aBreak != this.aBreakExec) {
            var addr = this.getAddr(dbgAddr);
            if (addr === PDP11.ADDR_INVALID) {
                this.printf("invalid address: %s\n", this.toStrAddr(dbgAddr));
                fSuccess = false;
            } else {
                var fWrite = (aBreak == this.aBreakWrite);
                /*
                 * We automatically promote any read/write breakpoint address to fPhysical if it's
                 * outside the 16-bit virtual address range.
                 */
                if (addr > 0xffff) dbgAddr.fPhysical = true;
                if (!dbgAddr.fPhysical) {
                    this.cpu.addMemBreak(addr, fWrite);
                } else {
                    this.bus.addMemBreak(addr, fWrite);
                }
            }
        }

        if (fSuccess) {
            aBreak.push(dbgAddr);
            if (fTemporary) {
                dbgAddr.fTemporary = true;
            }
            else {
                this.printBreakpoint(aBreak, aBreak.length-1, "set");
                this.historyInit();
            }
        }

        // this.nSuppressBreaks--;

        return fSuccess;
    }

    /**
     * findBreakpoint(aBreak, dbgAddr, fRemove, fTemporary, fQuiet)
     *
     * @this {DebuggerPDP11}
     * @param {Array} aBreak
     * @param {DbgAddrPDP11} dbgAddr
     * @param {boolean} [fRemove]
     * @param {boolean} [fTemporary]
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if found, false if not
     */
    findBreakpoint(aBreak, dbgAddr, fRemove, fTemporary, fQuiet)
    {
        var fFound = false;
        var addr = this.getAddr(dbgAddr);
        for (var i = 1; i < aBreak.length; i++) {
            var dbgAddrBreak = aBreak[i];
            if (addr == this.getAddr(dbgAddrBreak)) {
                if (!fTemporary || dbgAddrBreak.fTemporary) {
                    fFound = true;
                    if (fRemove) {
                        if (!dbgAddrBreak.fTemporary && !fQuiet) {
                            this.printBreakpoint(aBreak, i, "cleared");
                        }
                        aBreak.splice(i, 1);
                        if (aBreak != this.aBreakExec) {
                            var fWrite = (aBreak == this.aBreakWrite);
                            if (!dbgAddrBreak.fPhysical) {
                                this.cpu.removeMemBreak(addr, fWrite);
                            } else {
                                this.bus.removeMemBreak(addr, fWrite);
                            }
                        }
                        /*
                         * We'll mirror the logic in addBreakpoint() and leave the history buffer alone if this
                         * was a temporary breakpoint.
                         */
                        if (!dbgAddrBreak.fTemporary) {
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
     * @this {DebuggerPDP11}
     * @param {Array} aBreak
     * @returns {number} of breakpoints listed, 0 if none
     */
    listBreakpoints(aBreak)
    {
        for (var i = 1; i < aBreak.length; i++) {
            this.printBreakpoint(aBreak, i);
        }
        return aBreak.length - 1;
    }

    /**
     * printBreakpoint(aBreak, i, sAction)
     *
     * @this {DebuggerPDP11}
     * @param {Array} aBreak
     * @param {number} i
     * @param {string} [sAction]
     */
    printBreakpoint(aBreak, i, sAction)
    {
        var dbgAddr = aBreak[i];
        this.printf("%s %s%s\n", aBreak[0], this.toStrAddr(dbgAddr), (sAction? (' ' + sAction) : (dbgAddr.sCmd? (' "' + dbgAddr.sCmd + '"') : '')));
    }

    /**
     * setTempBreakpoint(dbgAddr)
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr of new temp breakpoint
     */
    setTempBreakpoint(dbgAddr)
    {
        this.addBreakpoint(this.aBreakExec, dbgAddr, true);
    }

    /**
     * clearTempBreakpoint(addr)
     *
     * @this {DebuggerPDP11}
     * @param {number|undefined} [addr] clear all temp breakpoints if no address specified
     */
    clearTempBreakpoint(addr)
    {
        if (addr !== undefined) {
            this.checkBreakpoint(addr, 1, this.aBreakExec, true);
            this.nStep = 0;
        } else {
            for (var i = 1; i < this.aBreakExec.length; i++) {
                var dbgAddrBreak = this.aBreakExec[i];
                if (dbgAddrBreak.fTemporary) {
                    if (!this.findBreakpoint(this.aBreakExec, dbgAddrBreak, true, true)) break;
                    i = 0;
                }
            }
        }
    }

    /**
     * checkBreakpoint(addr, nb, aBreak, fTemporary)
     *
     * @this {DebuggerPDP11}
     * @param {number} addr
     * @param {number} nb (# of bytes)
     * @param {Array} aBreak
     * @param {boolean} [fTemporary]
     * @returns {boolean} true if breakpoint has been hit, false if not
     */
    checkBreakpoint(addr, nb, aBreak, fTemporary)
    {
        /*
         * Time to check for breakpoints; note that this should be done BEFORE updating history data
         * (see checkInstruction), since we might not actually execute the current instruction.
         */
        var fBreak = false;

        if (!this.nSuppressBreaks++) {

            for (var i = 1; !fBreak && i < aBreak.length; i++) {

                var dbgAddrBreak = aBreak[i];

                if (fTemporary && !dbgAddrBreak.fTemporary) continue;

                /*
                 * If we're checking an execution address, which is always virtual, and virtual
                 * addresses are always restricted to 16 bits, let's mask the breakpoint address to match
                 * (the user should know better, but we'll be nice).
                 */
                var addrBreak = this.getAddr(dbgAddrBreak) & (aBreak == this.aBreakExec? 0xffff : -1);
                for (var n = 0; n < nb; n++) {

                    if ((addr + n) != addrBreak) continue;

                    var a;
                    fBreak = true;
                    if (dbgAddrBreak.fTemporary) {
                        this.findBreakpoint(aBreak, dbgAddrBreak, true, true);
                        fTemporary = true;
                    }
                    if ((a = dbgAddrBreak.aCmds)) {
                        /*
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
                        for (var j = 0; j < a.length; j++) {
                            if (!this.doCommand(a[j], true)) {
                                if (a[j].indexOf("if")) {
                                    fBreak = true;          // the failed command wasn't "if", so abort
                                    break;
                                }
                                var k = j + 1;
                                for (; k < a.length; k++) {
                                    if (!a[k].indexOf("else")) break;
                                    j++;
                                }
                                if (k == a.length) {        // couldn't find an "else" after the "if", so abort
                                    fBreak = true;
                                    break;
                                }
                                /*
                                 * If we're still here, we'll execute the "else" command (which is just a no-op),
                                 * followed by any remaining commands.
                                 */
                            }
                        }
                        if (!this.cpu.isRunning()) fBreak = true;
                    }
                    if (fBreak) {
                        if (!fTemporary) this.printBreakpoint(aBreak, i, "hit");
                        break;
                    }
                }
            }
        }

        this.nSuppressBreaks--;

        return fBreak;
    }

    /**
     * getInstruction(dbgAddr, sComment, nSequence)
     *
     * Get the next instruction, by decoding the opcode and any operands.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {string} [sComment] is an associated comment
     * @param {number|null} [nSequence] is an associated sequence number, undefined if none
     * @returns {string} (and dbgAddr is updated to the next instruction)
     */
    getInstruction(dbgAddr, sComment, nSequence)
    {
        var opNames = DebuggerPDP11.OPNAMES;
        var dbgAddrOp = this.newAddr(dbgAddr.addr);
        var opCode = this.getWord(dbgAddr, 2);

        var opDesc;
        for (var mask in this.opTable) {
            var opMasks = this.opTable[mask];
            opDesc = opMasks[opCode & mask];
            if (opDesc) break;
        }

        if (!opDesc) {
            opDesc = DebuggerPDP11.OPNONE;
        }

        var opNum = opDesc[0];
        if (this.aOpReserved.indexOf(opNum) >= 0) {
            opDesc = DebuggerPDP11.OPNONE;
            opNum = opDesc[0];
        }

        var sOperands = "", sTarget = "";
        var sOpName = opNames[opNum];
        var cOperands = opDesc.length - 1;

        if (!opNum && !cOperands) {
            sOperands = this.toStrBase(opCode);
        }

        for (var iOperand = 1; iOperand <= cOperands; iOperand++) {

            var opType = opDesc[iOperand];
            if (opType === undefined) continue;

            var sOperand = this.getOperand(opCode, opType, dbgAddr);

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }

            /*
             * If getOperand() returns an Array rather than a string, then the first element is the original
             * operand, and the second element contains additional information (eg, the target) of the operand.
             */
            if (typeof sOperand != "string") {
                sTarget = sOperand[1];
                sOperand = sOperand[0];
            }

            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        var sOpCodes = "";
        var sLine = this.toStrAddr(dbgAddrOp) + ":";
        if (dbgAddrOp.addr !== PDP11.ADDR_INVALID && dbgAddr.addr !== PDP11.ADDR_INVALID) {
            do {
                sOpCodes += ' ' + this.toStrBase(this.getWord(dbgAddrOp, 2));
                if (dbgAddrOp.addr == null) break;
            } while (dbgAddrOp.addr != dbgAddr.addr);
        }

        sLine += StrLib.pad(sOpCodes, -24);
        sLine += StrLib.pad(sOpName, -5);
        if (sOperands) sLine += ' ' + sOperands;

        if (sComment || sTarget) {
            sLine = StrLib.pad(sLine, -60) + ';' + (sComment || "");
            if (!this.cpu.flags.checksum) {
                sLine += (nSequence != null? '=' + nSequence.toString() : "");
            } else {
                var nCycles = this.cpu.getCycles();
                sLine += "cycles=" + nCycles.toString() + " cs=" + StrLib.toHex(this.cpu.nChecksum);
            }
            if (sTarget) {
                if (sLine.slice(-1) != ';') sLine += ' ';
                sLine += sTarget;
            }
        }
        return sLine;
    }

    /**
     * getOperand(opCode, opType, dbgAddr)
     *
     * If getOperand() returns an Array rather than a string, then the first element is the original
     * operand, and the second element is a comment containing additional information (eg, the target)
     * of the operand.
     *
     * @this {DebuggerPDP11}
     * @param {number} opCode
     * @param {number} opType
     * @param {DbgAddrPDP11} dbgAddr
     * @returns {string|Array.<string>}
     */
    getOperand(opCode, opType, dbgAddr)
    {
        var sOperand = "", disp, addr;
        /*
         * Take care of OP_OTHER opcodes first; then all we'll have to worry about
         * next are OP_SRC or OP_DST opcodes.
         */
        var opTypeOther = opType & DebuggerPDP11.OP_OTHER;
        if (opTypeOther == DebuggerPDP11.OP_BRANCH) {
            disp = ((opCode & 0xff) << 24) >> 23;
            addr = (dbgAddr.addr + disp) & 0xffff;
            sOperand = this.toStrBase(addr);
        }
        else if (opTypeOther == DebuggerPDP11.OP_DSTOFF) {
            disp = (opCode & 0x3f) << 1;
            addr = (dbgAddr.addr - disp) & 0xffff;
            sOperand = this.toStrBase(addr);
        }
        else if (opTypeOther == DebuggerPDP11.OP_DSTNUM3) {
            disp = (opCode & 0x07);
            sOperand = this.toStrBase(disp, 3);
        }
        else if (opTypeOther == DebuggerPDP11.OP_DSTNUM6) {
            disp = (opCode & 0x3f);
            sOperand = this.toStrBase(disp, 6);
        }
        else if (opTypeOther == DebuggerPDP11.OP_DSTNUM8) {
            disp = (opCode & 0xff);
            sOperand = this.toStrBase(disp, 8);
        }
        else {
            /*
             * Isolate all OP_SRC or OP_DST bits from opcode in the opMode variable.
             */
            var opMode = opCode & opType;

            /*
             * Convert OP_SRC bits into OP_DST bits, since they use the same format.
             */
            if (opType & DebuggerPDP11.OP_SRC) {
                opMode >>= 6;
                opType >>= 6;
            }
            if (opType & DebuggerPDP11.OP_DST) {
                var wIndex;
                var sTarget = null;
                var reg = opMode & DebuggerPDP11.OP_DSTREG;
                /*
                 * Note that opcodes that specify only REG bits in the opType mask (ie, no MOD bits)
                 * will automatically default to OPMODE_REG below.
                 */
                switch((opMode & DebuggerPDP11.OP_DSTMODE)) {

                case PDP11.OPMODE.REG:                  // 0x0: REGISTER
                    sOperand = this.getRegName(reg);
                    break;

                case PDP11.OPMODE.REGD:                 // 0x1: REGISTER DEFERRED
                    sOperand = '@' + this.getRegName(reg);
                    sTarget = this.getTarget(this.cpu.regsGen[reg]);
                    break;

                case PDP11.OPMODE.POSTINC:              // 0x2: POST-INCREMENT
                    if (reg < 7) {
                        sOperand = '(' + this.getRegName(reg) + ")+";
                    } else {
                        /*
                         * When using R7 (aka PC), POST-INCREMENT is known as IMMEDIATE
                         */
                        wIndex = this.getWord(dbgAddr, 2);
                        sOperand = '#' + this.toStrBase(wIndex, -1);
                    }
                    break;

                case PDP11.OPMODE.POSTINCD:             // 0x3: POST-INCREMENT DEFERRED
                    if (reg < 7) {
                        sOperand = "@(" + this.getRegName(reg) + ")+";
                    } else {
                        /*
                         * When using R7 (aka PC), POST-INCREMENT DEFERRED is known as ABSOLUTE
                         */
                        wIndex = this.getWord(dbgAddr, 2);
                        sOperand = "@#" + this.toStrBase(wIndex, -1);
                        sTarget = this.getTarget(wIndex);
                    }
                    break;

                case PDP11.OPMODE.PREDEC:               // 0x4: PRE-DECREMENT
                    sOperand = "-(" + this.getRegName(reg) + ")";
                    break;

                case PDP11.OPMODE.PREDECD:              // 0x5: PRE-DECREMENT DEFERRED
                    sOperand = "@-(" + this.getRegName(reg) + ")";
                    break;

                case PDP11.OPMODE.INDEX:                // 0x6: INDEX
                    wIndex = this.getWord(dbgAddr, 2);
                    sOperand = this.toStrBase(wIndex, -1) + '(' + this.getRegName(reg) + ')';
                    if (reg == 7) {
                        /*
                         * When using R7 (aka PC), INDEX is known as RELATIVE.  However, instead of displaying
                         * such an instruction like this:
                         *
                         *  016156: 010167 001300          MOV   R1,1300(PC)            ; @017462
                         *
                         * with the effective address display to the far right, let's display it like this instead:
                         *
                         *  016156: 010167 001300          MOV   R1,017462
                         *
                         * because you can still clearly see PC-relative offset (eg, 001300) as part of the disassembly.
                         *
                         *      sOperand = [sOperand, this.toStrBase((wIndex + dbgAddr.addr) & 0xffff)];
                         */
                        sOperand = this.toStrBase(wIndex = (wIndex + dbgAddr.addr) & 0xffff);
                        sTarget = this.getTarget(wIndex);
                    }
                    break;

                case PDP11.OPMODE.INDEXD:               // 0x7: INDEX DEFERRED
                    wIndex = this.getWord(dbgAddr, 2);
                    sOperand = '@' + this.toStrBase(wIndex) + '(' + this.getRegName(reg) + ')';
                    if (reg == 7) {
                        /*
                         * When using R7 (aka PC), INDEX DEFERRED is known as RELATIVE DEFERRED.  And for the same
                         * reasons articulated above, we now display the effective address inline.
                         *
                         *      sOperand = [sOperand, this.toStrBase((wIndex + dbgAddr.addr) & 0xffff)];
                         */
                        sOperand = '@' + this.toStrBase(wIndex = (wIndex + dbgAddr.addr) & 0xffff);
                        sTarget = this.getTarget(this.cpu.getWordSafe(wIndex));
                    }
                    break;

                default:
                    this.assert(false);
                    break;
                }

                if (sTarget) sOperand = [sOperand, sTarget];
            }
            else {
                this.assert(false);
            }
        }
        return sOperand;
    }

    /**
     * getTarget(addr)
     *
     * @this {DebuggerPDP11}
     * @param {number} addr
     * @returns {string|null}
     */
    getTarget(addr)
    {
        var sTarget = null;
        var a = this.cpu.getAddrInfo(addr);
        var addrPhysical = a[0];
        if (addrPhysical >= this.cpu.addrIOPage && addrPhysical < this.bus.addrIOPage) {
            addrPhysical = (addrPhysical - this.cpu.addrIOPage) + this.bus.addrIOPage;
        }
        return this.bus.getAddrInfo(addrPhysical);
    }

    /**
     * parseInstruction(sOp, sOperand, addr)
     *
     * TODO: Unimplemented.  See parseInstruction() in /machines/osi/c1p/modules/v2/debugger.js for a sample implementation.
     *
     * @this {DebuggerPDP11}
     * @param {string} sOp
     * @param {string|undefined} sOperand
     * @param {DbgAddrPDP11} dbgAddr of memory where this instruction is being assembled
     * @returns {Array.<number>} of opcode bytes; if the instruction can't be parsed, the array will be empty
     */
    parseInstruction(sOp, sOperand, dbgAddr)
    {
        var aOpBytes = [];
        this.printf("not supported yet\n");
        return aOpBytes;
    }

    /**
     * getFlagOutput(sFlag)
     *
     * @this {DebuggerPDP11}
     * @param {string} sFlag
     * @returns {string} value of flag
     */
    getFlagOutput(sFlag)
    {
        var b;
        switch (sFlag) {
        case 'N':
            b = this.cpu.getNF();
            break;
        case 'Z':
            b = this.cpu.getZF();
            break;
        case 'V':
            b = this.cpu.getVF();
            break;
        case 'C':
            b = this.cpu.getCF();
            break;
        default:
            b = 0;
            break;
        }
        return sFlag.charAt(0) + (b? '1' : '0') + ' ';
    }

    /**
     * getRegOutput(iReg)
     *
     * @this {DebuggerPDP11}
     * @param {number} iReg
     * @returns {string}
     */
    getRegOutput(iReg)
    {
        var sReg = this.getRegName(iReg);
        if (sReg) {
            sReg += '=' + this.toStrBase(this.getRegValue(iReg)) + ' ';
        }
        return sReg;
    }

    /**
     * getMiscDump()
     *
     * Sample register dump:
     *
     *      M0=xxxxxx M1=xxxxxx M2=xxxxxx M3=xxxxxx ER=xxxxxx
     *
     * @this {DebuggerPDP11}
     * @returns {string}
     */
    getMiscDump()
    {
        var sDump = "";
        sDump += this.getRegOutput(DebuggerPDP11.REG_M0) + this.getRegOutput(DebuggerPDP11.REG_M1);
        sDump += this.getRegOutput(DebuggerPDP11.REG_M2) + this.getRegOutput(DebuggerPDP11.REG_M3) + this.getRegOutput(DebuggerPDP11.REG_ER);
        sDump += '\n';
        sDump += this.getRegOutput(DebuggerPDP11.REG_SR) + this.getRegOutput(DebuggerPDP11.REG_AR) + this.getRegOutput(DebuggerPDP11.REG_DR);
        return sDump;
    }

    /**
     * getRegDump(fMisc)
     *
     * Sample register dump:
     *
     *      R0=xxxxxx R1=xxxxxx R2=xxxxxx R3=xxxxxx R4=xxxxxx R5=xxxxxx
     *      SP=xxxxxx PC=xxxxxx PS=xxxxxx PI=xxxxxx SL=xxxxxx T0 N0 Z0 V0 C0
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fMisc] (true to include misc registers)
     * @returns {string}
     */
    getRegDump(fMisc)
    {
        var i;
        var sDump = "";
        for (i = 0; i < PDP11.REG.SP; i++) {
            sDump += this.getRegOutput(i);
        }
        sDump += '\n';
        sDump += this.getRegOutput(PDP11.REG.SP) + this.getRegOutput(PDP11.REG.PC);
        sDump += this.getRegOutput(DebuggerPDP11.REG_PS) + this.getRegOutput(DebuggerPDP11.REG_PI) + this.getRegOutput(DebuggerPDP11.REG_SL);
        sDump += this.getFlagOutput('T') + this.getFlagOutput('N') + this.getFlagOutput('Z') + this.getFlagOutput('V') + this.getFlagOutput('C');
        if (fMisc) sDump += '\n' + this.getMiscDump();
        return sDump;
    }

    /**
     * comparePairs(p1, p2)
     *
     * @this {DebuggerPDP11}
     * @param {number|string|Array|Object} p1
     * @param {number|string|Array|Object} p2
     * @returns {number}
     */
    comparePairs(p1, p2)
    {
        return p1[0] > p2[0]? 1 : p1[0] < p2[0]? -1 : 0;
    }

    /**
     * addSymbols(sModule, addr, len, aSymbols)
     *
     * As fileimage.js (formerly filedump.js, which was formerly convrom.php) explains, aSymbols is a JSON-encoded object
     * whose properties consist of all the symbols (in upper-case), and the values of those properties are objects containing
     * any or all of the following properties:
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
     *      [addr, len, aSymbols, aOffsets]
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
     * @this {DebuggerPDP11}
     * @param {string|null} sModule
     * @param {number|null} addr (physical address where the symbols are located, if the memory is physical; eg, ROM)
     * @param {number} len (the size of the region, in bytes)
     * @param {Object} aSymbols (collection of symbols in this group; the format of this collection is described below)
     */
    addSymbols(sModule, addr, len, aSymbols)
    {
        var dbgAddr = {};
        var aOffsets = [];
        for (var sSymbol in aSymbols) {
            var symbol = aSymbols[sSymbol];
            if (typeof symbol == "number") {
                aSymbols[sSymbol] = symbol = {'o': symbol};
            }
            var offSymbol = symbol['o'];
            var sAnnotation = symbol['a'];
            if (offSymbol !== undefined) {
                UsrLib.binaryInsert(aOffsets, [offSymbol >>> 0, sSymbol], this.comparePairs);
            }
            if (sAnnotation) symbol['a'] = sAnnotation.replace(/''/g, "\"");
        }
        var symbolTable = {
            sModule: sModule,
            addr: addr,
            len: len,
            aSymbols: aSymbols,
            aOffsets: aOffsets
        };
        this.aSymbolTable.push(symbolTable);
    }

    /**
     * dumpSymbols()
     *
     * TODO: Add "numerical" and "alphabetical" dump options. This is simply dumping them in whatever
     * order they appeared in the original MAP file.
     *
     * @this {DebuggerPDP11}
     */
    dumpSymbols()
    {
        for (var iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            var symbolTable = this.aSymbolTable[iTable];
            for (var sSymbol in symbolTable.aSymbols) {
                if (sSymbol.charAt(0) == '.') continue;
                var symbol = symbolTable.aSymbols[sSymbol];
                var offSymbol = symbol['o'];
                if (offSymbol === undefined) continue;
                var sSymbolOrig = symbolTable.aSymbols[sSymbol]['l'];
                if (sSymbolOrig) sSymbol = sSymbolOrig;
                this.printf("%s %s\n", this.toStrOffset(offSymbol), sSymbol);
            }
        }
    }

    /**
     * findSymbol(dbgAddr, fNearest)
     *
     * Search aSymbolTable for dbgAddr, and return an Array for the corresponding symbol (empty if not found).
     *
     * If fNearest is true, and no exact match was found, then the Array returned will contain TWO sets of
     * entries: [0]-[3] will refer to closest preceding symbol, and [4]-[7] will refer to the closest subsequent symbol.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @param {boolean} [fNearest]
     * @returns {Array} where [0] == symbol name, [1] == symbol value, [2] == any annotation, and [3] == any associated comment
     */
    findSymbol(dbgAddr, fNearest)
    {
        var aSymbol = [];
        var addrSymbol = this.getAddr(dbgAddr) >>> 0;
        for (var iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            var symbolTable = this.aSymbolTable[iTable];
            var addr = symbolTable.addr >>> 0;
            var len = symbolTable.len;
            if (addrSymbol >= addr && addrSymbol < addr + len) {
                var offSymbol = addrSymbol - addr;
                var result = UsrLib.binarySearch(symbolTable.aOffsets, [offSymbol], this.comparePairs);
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
        return aSymbol;
    }

    /**
     * findSymbolAddr(sSymbol)
     *
     * Search our symbol tables for sSymbol, and if found, return a dbgAddr (same as parseAddr()).
     *
     * @this {DebuggerPDP11}
     * @param {string} sSymbol
     * @returns {DbgAddrPDP11|undefined}
     */
    findSymbolAddr(sSymbol)
    {
        var dbgAddr;
        var offSymbol = this.bus.getAddrByName(sSymbol);

        if (offSymbol == null && sSymbol.match(/^[a-z_][a-z0-9_]*$/i)) {
            var sUpperCase = sSymbol.toUpperCase();
            for (var iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
                var symbolTable = this.aSymbolTable[iTable];
                var symbol = symbolTable.aSymbols[sUpperCase];
                if (symbol != null) {
                    offSymbol = symbol['o'];
                    /*
                     * If the symbol matched but there's no 'o' offset (ie, it wasn't for an address), there's
                     * no point looking any farther, since each symbol appears only once.
                     *
                     * NOTE: We assume that every ROM is ORG'ed at 0x0000, and therefore unless the symbol has an
                     * explicitly-defined segment, we return the segment associated with the entire group; for a ROM,
                     * that segment is normally "addrROM >>> 4".  Down the road, we may want/need to support a special
                     * symbol entry (eg, ".ORG") that defines an alternate origin.
                     */
                    break;
                }
            }
        }
        if (offSymbol != null) {
            dbgAddr = this.newAddr(offSymbol);
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
     * @param {Array} aSymbol is updated with the specified symbol, if it exists
     */
    returnSymbol(iTable, iOffset, aSymbol)
    {
        var symbol = {};
        var aOffsets = this.aSymbolTable[iTable].aOffsets;
        var offset = 0, sSymbol = null;
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
     * @this {DebuggerPDP11}
     */
    doHelp()
    {
        var s = "commands:";
        for (var sCommand in DebuggerPDP11.COMMANDS) {
            s += '\n' + StrLib.pad(sCommand, -9) + DebuggerPDP11.COMMANDS[sCommand];
        }
        if (!this.checksEnabled()) s += "\nnote: history disabled if no exec breakpoints";
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
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs is the complete argument array, beginning with the "a" command in asArgs[0]
     */
    doAssemble(asArgs)
    {
        var dbgAddr = this.parseAddr(asArgs[1], true);
        if (!dbgAddr) return;

        this.dbgAddrAssemble = dbgAddr;
        if (asArgs[2] === undefined) {
            this.printf("begin assemble at %s\n", this.toStrAddr(dbgAddr));
            this.fAssemble = true;
            this.cmp.updateDisplays();
            return;
        }

        var aOpBytes = this.parseInstruction(asArgs[2], asArgs[3], dbgAddr);
        if (aOpBytes.length) {
            for (var i = 0; i < aOpBytes.length; i++) {
                this.setByte(dbgAddr, aOpBytes[i], 1);
            }
            /*
             * Since getInstruction() also updates the specified address, dbgAddrAssemble is automatically advanced.
             */
            this.printf("%s\n", this.getInstruction(this.dbgAddrAssemble));
        }
    }

    /**
     * doBreak(sCmd, sAddr, sOptions)
     *
     * As the "help" output below indicates, the following breakpoint commands are supported:
     *
     *      bp #    set exec breakpoint
     *      br #    set read breakpoint
     *      bw #    set write breakpoint
     *      bc #    clear breakpoint (* to clear all)
     *      bl      list all breakpoints
     *      bn [#]  break after # instruction(s)
     *
     * The "bn" command, like the "dh" command and all other commands that use an instruction count,
     * assumes a decimal value, regardless of the current base.  Use "bn" without an argument to display
     * the break count, and use "bn 0" to clear the break count.
     *
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     * @param {string|undefined} [sAddr]
     * @param {string} [sOptions] (the rest of the breakpoint command-line)
     */
    doBreak(sCmd, sAddr, sOptions)
    {
        if (sAddr == '?') {
            this.printf("breakpoint commands:\n");
            this.printf("\tbp #\tset exec breakpoint\n");
            this.printf("\tbr #\tset read breakpoint\n");
            this.printf("\tbw #\tset write breakpoint\n");
            this.printf("\tbc #\tclear breakpoint (* to clear all)\n");
            this.printf("\tbl\tlist all breakpoints\n");
            this.printf("\tbn [#]\tbreak after # instruction(s)\n");
            return;
        }

        var sParm = sCmd.charAt(1);
        if (sParm == 'l') {
            var cBreaks = 0;
            cBreaks += this.listBreakpoints(this.aBreakExec);
            cBreaks += this.listBreakpoints(this.aBreakRead);
            cBreaks += this.listBreakpoints(this.aBreakWrite);
            if (!cBreaks) this.printf("no breakpoints\n");
            return;
        }

        if (sParm == 'n') {
            var n = +sAddr || 0;
            if (sAddr) this.nBreakInstructions = n;
            this.printf("break after %d instruction(s)\n", n);
            return;
        }

        if (sAddr === undefined) {
            this.printf("missing breakpoint address\n");
            return;
        }

        var dbgAddr = this.newAddr();
        if (sAddr != '*') {
            dbgAddr = this.parseAddr(sAddr, true, true);
            if (!dbgAddr) return;
        }

        if (sParm == 'c') {
            if (dbgAddr.addr == null) {
                this.clearBreakpoints();
                this.printf("all breakpoints cleared\n");
                return;
            }
            if (this.findBreakpoint(this.aBreakExec, dbgAddr, true)) return;
            if (this.findBreakpoint(this.aBreakRead, dbgAddr, true)) return;
            if (this.findBreakpoint(this.aBreakWrite, dbgAddr, true)) return;
            this.printf("breakpoint missing: %s\n", this.toStrAddr(dbgAddr));
            return;
        }

        if (dbgAddr.addr == null) return;

        this.parseAddrOptions(dbgAddr, sOptions);

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
     * @this {DebuggerPDP11}
     * @param {string} [sCmd] (eg, "cls" or "clear")
     */
    doClear(sCmd)
    {
        this.cmp.clearPanel();
    }

    /**
     * doDump(asArgs)
     *
     * The length parameter is interpreted as a number of bytes (or words, or dwords) to dump,
     * and it is interpreted using the current base.
     *
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs (formerly sCmd, [sAddr], [sLen] and [sBytes])
     */
    doDump(asArgs)
    {
        var m;
        var sCmd = asArgs[0];
        var sAddr = asArgs[1];
        var sLen = asArgs[2];
        var sBytes = asArgs[3];

        if (sAddr == '?') {
            var sDumpers = "";
            for (m in MESSAGE.NAMES) {
                if (this.afnDumpers[m]) {
                    if (sDumpers) sDumpers += ',';
                    sDumpers += m;
                }
            }
            sDumpers += ",state,symbols";
            this.printf("dump memory commands:\n");
            this.printf("\tda [a]        dump info for address a\n");
            this.printf("\tdb [a] [n]    dump n bytes at address a\n");
            this.printf("\tdw [a] [n]    dump n words at address a\n");
            this.printf("\tdd [a] [n]    dump n dwords at address a\n");
            this.printf("\tds [a] [n]    dump n words at address a as JSON\n");
            this.printf("\tdh [p] [n]    dump n instructions from history position p\n");
            if (sDumpers.length) this.printf("dump extension commands:\n\t%s\n", sDumpers);
            return;
        }

        if (sAddr == "state") {
            var sState = this.cmp.powerOff(true);
            if (sLen == "console") {
                /*
                 * Console buffers are notoriously small, and even the following code, which breaks the
                 * data into parts (eg, "d state console 1", "d state console 2", etc) just isn't that helpful.
                 *
                 *      var nPart = +sBytes;
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
                if (sState) this.printf("%s\n", sState);
            }
            return;
        }

        if (sAddr == "symbols") {
            this.dumpSymbols();
            return;
        }

        if (sCmd == "d") {
            for (m in MESSAGE.NAMES) {
                if (asArgs[1] == m) {
                    var fnDumper = this.afnDumpers[m];
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
            if (!sAddr) sCmd = this.sCmdDumpPrev || "dw";
        } else {
            this.sCmdDumpPrev = sCmd;
        }

        if (sCmd == "dh") {
            this.dumpHistory(sAddr, sLen);
            return;
        }

        var dbgAddr = this.parseAddr(sAddr);
        if (!dbgAddr) return;

        if (sCmd == "da") {
            /*
             * Sample output for a virtual address ("da 23042"):
             *
             *                      00,010,011,000,100,010  00023042
             *       OFFSET:             0,011,000,100,010  00003042
             *   +   KIPAR1: 0,000,001,101,111,010,000,000  00157200
             *   &  MMUMASK: 1,111,111,111,111,111,111,111  17777777
             *   = PHYSICAL: 0,000,001,110,010,010,100,010  00162242
             *
             * and sample output for a physical address (eg, "da %37772"; note the % prefix):
             *
             *               0,000,000,011,111,111,111,010  00037772
             *       OFFSET:             1,111,111,111,010  00017772
             *   UNIMAP[01]: 1,111,100,001,110,111,000,000  17416700
             *     PHYSICAL: 1,111,100,011,110,110,111,010  17436672
             *
             * TODO: Tweak this output to accommodate 18-bit machines as well as 22-bit machines.
             */
            var fPhysical = (dbgAddr.fPhysical || dbgAddr.addr > 0xffff);
            var a = this.cpu.getAddrInfo(dbgAddr.addr || 0, fPhysical);
            this.printf("%s%s  %08o\n", StrLib.pad("", fPhysical? -12: -19), StrLib.toBin(dbgAddr.addr, fPhysical? 22 : 17, 3), dbgAddr.addr);
            if (a.length < 6) {
                if (a.length > 2) {
                    this.printf("    OFFSET:             %s  %08o\n", StrLib.toBin(a[3], 13, 3), a[3]);
                    this.printf("UNIMAP[%s]: %s  %08o\n", StrLib.toDec(a[1], 2), StrLib.toBin(a[2], 22, 3), a[2]);
                }
                this.printf("  PHYSICAL: %s  %08o\n", StrLib.toBin(a[0], 22, 3), a[0]);
            } else {
                this.printf("    OFFSET:             %s  %08o\n", StrLib.toBin(a[1], 13, 3), a[1]);
                this.printf("+   %sPAR%s: %s  %08o\n", DebuggerPDP11.MODES[a[2]], a[3], StrLib.toBin(a[4], 22, 3), a[4]);
                this.printf("&  MMUMASK: %s  %08o\n", StrLib.toBin(a[5], 22, 3), a[5]);
                this.printf("= PHYSICAL: %s  %08o\n", StrLib.toBin(a[0], 22, 3), a[0]);
            }
            return;
        }

        var len = 0;
        var fJSON = (sCmd == "ds");

        if (sLen) {
            if (sLen.charAt(0) == 'l') {
                sLen = sLen.substr(1) || sBytes;
                len = this.parseValue(sLen);
            }
            else {
                var dbgAddrEnd = this.parseAddr(sLen);
                if (dbgAddrEnd) len = dbgAddrEnd.addr - dbgAddr.addr;
            }
            if (len < 0) len = 0;
            if (len > 0x10000) len = 0x10000;
        }

        var nBase = this.nBase;
        if (dbgAddr.nBase) this.nBase = dbgAddr.nBase;

        /*
         * I've changed the code below to effectively make "dw" the default if only "d" is specified,
         * since this is primarily a word-oriented machine.
         */
        var size = (sCmd == "dd"? 4 : (sCmd == "db"? 1 : 2));
        var nBytes = (size * len) || 128;
        var nBytesPerLine = fJSON? 16 : this.nBase;
        var nLines = (((nBytes + nBytesPerLine - 1) / nBytesPerLine)|0) || 1;

        var sDump = "";
        while (nLines-- && nBytes > 0) {
            var sData = "", sChars = "";
            sAddr = this.toStrAddr(dbgAddr);
            /*
             * Dump 8 bytes per line when using base 8, and dump 16 bytes when using base 16.
             *
             * And while we used to always call getByte() and assemble them into words or dwords as appropriate, I've
             * changed the logic below to honor "dw" by calling getWord(), since the Bus interfaces have been updated
             * to prevent generating traps due to to Debugger access of unaligned memory and/or undefined IOPAGE addresses.
             *
             * Besides, it's nice for "db" and "dw" to generate the same Bus activity that typical byte and word reads do.
             */
            var i = nBytesPerLine;
            var data = 0, shift = 0;
            while (i > 0 && nBytes > 0) {
                var n = 1;
                var v = size == 1? this.getByte(dbgAddr, n) : this.getWord(dbgAddr, (n = 2));
                data |= (v << (shift << 3));
                shift += n;
                if (shift == size) {
                    if (fJSON) {
                        if (sData) sData += ",";
                        sData += "0x"+ StrLib.toHex(data, size << 1);
                    } else {
                        sData += this.toStrBase(data, size << 3);
                        sData += (size == 1? (i == 9? '-' : ' ') : "  ");
                    }
                    data = shift = 0;
                }
                i -= n; nBytes -= n;
                while (size == 1 && n--) {
                    var c = v & 0xff;
                    sChars += (c >= 32 && c < 127? String.fromCharCode(c) : '.');
                    v >>= 8;
                }
            }
            if (sDump) sDump += "\n";
            if (fJSON) {
                sDump += sData + ",";
            } else {
                sDump += sAddr + ":  " + sData + ((i == 0)? (' ' + sChars) : "");
            }
        }

        if (sDump) this.printf("%s\n", sDump);

        this.dbgAddrNextData = dbgAddr;
        this.nBase = nBase;
    }

    /**
     * doEdit(asArgs)
     *
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs
     */
    doEdit(asArgs)
    {
        var size, mask;
        var fnGet, fnSet;
        var sCmd = asArgs[0];
        var sAddr = asArgs[1];
        if (sCmd == "eb") {
            size = 1;
            mask = 0xff;
            fnGet = this.getByte;
            fnSet = this.setByte;
        }
        else if (sCmd == "e" || sCmd == "ew") {
            size = 2;
            mask = 0xffff;
            fnGet = this.getWord;
            fnSet = this.setWord;
        } else {
            sAddr = null;
        }
        if (sAddr == null) {
            this.printf("edit memory commands:\n");
            this.printf("\teb [a] [...]  edit bytes at address a\n");
            this.printf("\tew [a] [...]  edit words at address a\n");
            return;
        }
        var dbgAddr = this.parseAddr(sAddr);
        if (!dbgAddr) return;
        for (var i = 2; i < asArgs.length; i++) {
            var vNew = this.parseExpression(asArgs[i]);
            if (vNew === undefined) {
                this.printf("unrecognized value: %s\n", asArgs[i]);
                break;
            }
            if (vNew & ~mask) {
                this.printf("warning: %x exceeds %s-byte value\n", vNew, size);
            }
            this.printf("changing %s%s to %s\n", this.toStrAddr(dbgAddr), (this.messageEnabled(MESSAGE.BUS)? "" : (" from " + this.toStrBase(fnGet.call(this, dbgAddr), size << 3))), this.toStrBase(vNew, size << 3));
            fnSet.call(this, dbgAddr, vNew, size);
        }
    }

    /**
     * doHalt(fQuiet)
     *
     * @this {DebuggerPDP11}
     * @param {boolean} [fQuiet]
     */
    doHalt(fQuiet)
    {
        var sMsg;
        if (this.flags.running) {
            if (!fQuiet) this.printf("halting\n");
            this.stopCPU();
        } else {
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
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if expression is non-zero, false if zero (or undefined due to a parse error)
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
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs
     * @returns {boolean} true only if the instruction info command ("n") is supported
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
     * doVar(sCmd)
     *
     * The command must be of the form "{variable} = [{expression}]", where expression may contain constants,
     * operators, registers, symbols, other variables, or nothing at all; in the latter case, the variable, if
     * any, is deleted.
     *
     * Other supported shorthand: "var" with no parameters prints the values of all variables, and "var {variable}"
     * prints the value of the specified variable.
     *
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     * @returns {boolean} true if valid "var" assignment, false if not
     */
    doVar(sCmd)
    {
        var a = sCmd.match(/^\s*([A-Z_]?[A-Z0-9_]*)\s*(=?)\s*(.*)$/i);
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
            var v = this.parseExpression(a[3]);
            if (v !== undefined) {
                this.setVariable(a[1], v);
                return true;
            }
            return false;
        }
        this.printf("invalid assignment: %s\n", sCmd);
        return false;
    }

    /**
     * doList(sAddr, fPrint)
     *
     * @this {DebuggerPDP11}
     * @param {string} sAddr
     * @param {boolean} [fPrint]
     * @returns {string|null}
     */
    doList(sAddr, fPrint)
    {
        var sSymbol = null;

        var dbgAddr = this.parseAddr(sAddr, true);
        if (dbgAddr) {
            var addr = this.getAddr(dbgAddr);
            var aSymbol = this.findSymbol(dbgAddr, true);
            if (aSymbol.length) {
                var nDelta, sDelta, s;
                if (aSymbol[0]) {
                    sDelta = "";
                    nDelta = dbgAddr.addr - aSymbol[1];
                    if (nDelta) sDelta = " + " + StrLib.toHexWord(nDelta);
                    s = aSymbol[0] + " (" + this.toStrOffset(aSymbol[1]) + ')' + sDelta;
                    if (fPrint) this.printf("%s\n", s);
                    sSymbol = s;
                }
                if (aSymbol.length > 4 && aSymbol[4]) {
                    sDelta = "";
                    nDelta = aSymbol[5] - dbgAddr.addr;
                    if (nDelta) sDelta = " - " + StrLib.toHexWord(nDelta);
                    s = aSymbol[4] + " (" + this.toStrOffset(aSymbol[5]) + ')' + sDelta;
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
     * doMessages(asArgs)
     *
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs
     */
    doMessages(asArgs)
    {
        var m;
        var fCriteria = null;
        var sCategory = asArgs[1];
        if (sCategory == '?') sCategory = undefined;

        if (sCategory !== undefined) {
            var bitsMessage = 0;
            if (sCategory == "all") {
                bitsMessage = (0xffffffff|0) & ~(MESSAGE.HALT | MESSAGE.KEYS | MESSAGE.BUFFER);
                sCategory = null;
            } else if (sCategory == "on") {
                fCriteria = true;
                sCategory = null;
            } else if (sCategory == "off") {
                fCriteria = false;
                sCategory = null;
            } else {
                /*
                 * Internally, we use "key" instead of "keys", since the latter is a method on JavasScript objects,
                 * but externally, we allow the user to specify "keys"; "kbd" is also allowed as shorthand for "keyboard".
                 */
                if (sCategory == "keys") sCategory = "key";
                if (sCategory == "kbd") sCategory = "keyboard";
                for (m in MESSAGE.NAMES) {
                    if (sCategory == m) {
                        bitsMessage = MESSAGE.NAMES[m];
                        fCriteria = !!(this.bitsMessage & bitsMessage);
                        break;
                    }
                }
                if (!bitsMessage) {
                    this.printf("unknown message category: %s\n", sCategory);
                    return;
                }
            }
            if (bitsMessage) {
                if (asArgs[2] == "on") {
                    this.bitsMessage |= bitsMessage;
                    fCriteria = true;
                }
                else if (asArgs[2] == "off") {
                    this.bitsMessage &= ~bitsMessage;
                    fCriteria = false;
                    if (bitsMessage == MESSAGE.BUFFER) {
                        var i = this.aMessageBuffer.length >= 1000? this.aMessageBuffer.length - 1000 : 0;
                        while (i < this.aMessageBuffer.length) {
                            this.printf("%s\n", this.aMessageBuffer[i++]);
                        }
                        this.aMessageBuffer = [];
                    }
                }
            }
        }

        /*
         * Display those message categories that match the current criteria (on or off)
         */
        var n = 0;
        var sCategories = "";
        for (m in MESSAGE.NAMES) {
            if (!sCategory || sCategory == m) {
                var bitMessage = MESSAGE.NAMES[m];
                var fEnabled = !!(this.bitsMessage & bitMessage);
                if (fCriteria !== null && fCriteria != fEnabled) continue;
                if (sCategories) sCategories += ',';
                if (!(++n % 10)) sCategories += "\n\t";
                /*
                 * Internally, we use "key" instead of "keys", since the latter is a method on JavasScript objects,
                 * but externally, we allow the user to specify "keys".
                 */
                if (m == "key") m = "keys";
                sCategories += m;
            }
        }

        if (sCategory === undefined) {
            this.printf("message commands:\n\tm [category] [on|off]\tturn categories on/off\n");
        }

        this.printf("%s%s\n", (fCriteria !== null? (fCriteria? "messages on:  " : "messages off: ") : "message categories:\n\t"), (sCategories || "none"));

        this.historyInit();     // call this just in case MESSAGE.INT was turned on
    }

    /**
     * doOptions(asArgs)
     *
     * @this {DebuggerPDP11}
     * @param {Array.<string>} asArgs
     */
    doOptions(asArgs)
    {
        switch (asArgs[1]) {

        case "base":
            if (asArgs[2]) {
                var nBase = +asArgs[2];
                if (nBase == 8 || nBase == 10 || nBase == 16) {
                    this.nBase = nBase;
                } else {
                    this.printf("invalid base: %d\n", nBase);
                    break;
                }
            }
            this.printf("default base: %d\n", this.nBase);
            break;

        case "cs":
            var nCycles;
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
            return;

        case "sp":
            if (asArgs[2] !== undefined) {
                if (!this.cpu.setSpeed(+asArgs[2])) {
                    this.printf("warning: using 1x multiplier, previous target not reached\n");
                }
            }
            this.printf("target speed: %s (%dx)\n", this.cpu.getSpeedTarget(), this.cpu.getSpeed());
            return;

        default:
            if (asArgs[1]) {
                this.printf("unknown option: %s\n", asArgs[1]);
                return;
            }
            /* falls through */

        case "?":
            this.printf("debugger options:\n");
            this.printf("\tbase #\t\tset default base to #\n");
            this.printf("\tcs int #\tset checksum cycle interval to #\n");
            this.printf("\tcs start #\tset checksum cycle start count to #\n");
            this.printf("\tcs stop #\tset checksum cycle stop count to #\n");
            this.printf("\tsp #\t\tset speed multiplier to #\n");
            break;
        }
    }

    /**
     * doRegisters(asArgs, fInstruction)
     *
     * @this {DebuggerPDP11}
     * @param {Array.<string>} [asArgs]
     * @param {boolean} [fInstruction] (true to include the current instruction; default is true)
     */
    doRegisters(asArgs, fInstruction)
    {
        if (asArgs && asArgs[1] == '?') {
            this.printf("register commands:\n");
            this.printf("\tr\tdump registers\n");
            this.printf("\trm\tdump misc registers\n");
            this.printf("\trx [#]\tset flag or register x to [#]\n");
            return;
        }

        var fMisc = false;
        var cpu = this.cpu;
        if (fInstruction == null) fInstruction = true;

        if (asArgs != null && asArgs.length > 1) {
            var sReg = asArgs[1];

            if (sReg == 'm') {
                fMisc = true;
            }
            else {
                var sValue = null;
                var i = sReg.indexOf('=');
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

                var w = this.parseExpression(sValue);
                if (w === undefined) return;

                var sRegMatch = sReg.toUpperCase();
                switch (sRegMatch) {
                case "SP":
                case "R6":
                    cpu.setSP(w);
                    break;
                case "PC":
                case "R7":
                    cpu.setPC(w);
                    this.dbgAddrNextCode = this.newAddr(cpu.getPC());
                    break;
                case "N":
                    if (w) cpu.setNF(); else cpu.clearNF();
                    break;
                case "Z":
                    if (w) cpu.setZF(); else cpu.clearZF();
                    break;
                case "V":
                    if (w) cpu.setVF(); else cpu.clearVF();
                    break;
                case "C":
                    if (w) cpu.setCF(); else cpu.clearCF();
                    break;
                case "PS":
                    cpu.setPSW(w);
                    break;
                case "PI":
                    cpu.setPIR(w);
                    break;
                case "ER":
                    cpu.regErr = w;
                    fMisc = true;
                    break;
                case "SL":
                    cpu.setSLR(w);
                    break;
                case "M0":
                    cpu.setMMR0(w);
                    fMisc = true;
                    break;
                case "M3":
                    cpu.setMMR3(w);
                    fMisc = true;
                    break;
                case "AR":
                    if (this.panel) this.panel.setAR(w);
                    fMisc = true;
                    break;
                case "DR":
                    if (this.panel) this.panel.setDR(w);
                    fMisc = true;
                    break;
                case "SR":
                    if (this.panel) this.panel.setSR(w);
                    fMisc = true;
                    break;
                default:
                    if (sRegMatch.charAt(0) == 'R') {
                        var iReg = +sRegMatch.charAt(1);
                        if (iReg >= 0 && iReg < 6) {
                            cpu.regsGen[iReg] = w & 0xffff;
                            break;
                        }
                    }
                    this.printf("unknown register: %s\n", sReg);
                    return;
                }
                this.cmp.updateDisplays();
                this.printf("updated registers:\n");
            }
        }

        this.printf("%s\n", this.getRegDump(fMisc));

        if (fInstruction) {
            this.dbgAddrNextCode = this.newAddr(cpu.getPC());
            this.doUnassemble(this.toStrAddr(this.dbgAddrNextCode));
        }
    }

    /**
     * doRun(sCmd, sAddr, sOptions, fQuiet)
     *
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     * @param {string|undefined} [sAddr]
     * @param {string} [sOptions] (the rest of the breakpoint command-line)
     * @param {boolean} [fQuiet]
     */
    doRun(sCmd, sAddr, sOptions, fQuiet)
    {
        if (sCmd == "gt") {
            this.fIgnoreNextCheckFault = true;
        }
        if (sAddr !== undefined) {
            var dbgAddr = this.parseAddr(sAddr, true);
            if (!dbgAddr) return;
            this.parseAddrOptions(dbgAddr, sOptions);
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
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     */
    doPrint(sCmd)
    {
        sCmd = StrLib.trim(sCmd);
        var a = sCmd.match(/^(['"])(.*?)\1$/);
        if (!a) {
            this.parseExpression(sCmd, false);
        } else {
            if (a[2].length > 1) {
                this.printf("%s\n", this.replaceRegs(a[2]));
            } else {
                this.printValue(null, a[2].charCodeAt(0));
            }
        }
    }

    /**
     * doStep(sCmd, sOption)
     *
     * @this {DebuggerPDP11}
     * @param {string} [sCmd] "p" or "pr"
     * @param {string} [sOption]
     */
    doStep(sCmd, sOption)
    {
        if (sOption == '?') {
            this.printf("step commands:\n");
            this.printf("\tp\tstep over instruction\n");
            this.printf("\tpr\tstep over instruction with register update\n");
            return;
        }

        var fCallStep = true;
        var nRegs = (sCmd == "pr"? 1 : 0);
        /*
         * Set up the value for this.nStep (ie, 1 or 2) depending on whether the user wants
         * a subsequent register dump ("pr") or not ("p").
         */
        var nStep = 1 + nRegs;

        if (!this.nStep) {
            var dbgAddr = this.newAddr(this.cpu.getPC());
            var opCode = this.getWord(dbgAddr);

            if (opCode == PDP11.OPCODE.BPT || opCode == PDP11.OPCODE.IOT ||
                (opCode & PDP11.OPCODE.EMT_MASK) == PDP11.OPCODE.EMT_OP ||
                (opCode & PDP11.OPCODE.SOB_MASK) == PDP11.OPCODE.SOB_OP ||
                (opCode & PDP11.OPCODE.TRAP_MASK) == PDP11.OPCODE.TRAP_OP) {
                if (fCallStep) {
                    this.nStep = nStep;
                    this.incAddr(dbgAddr, 2);
                }
            } else if ((opCode & PDP11.OPCODE.JSR_MASK) == PDP11.OPCODE.JSR_OP) {
                var s = this.getInstruction(dbgAddr);
                this.assert(s.indexOf("JSR") >= 0);
                if (fCallStep) {
                    this.nStep = nStep;
                }
            }

            if (this.nStep) {
                this.setTempBreakpoint(dbgAddr);
                if (!this.startCPU()) {
                    if (this.cmp) this.cmp.setFocus();
                    this.nStep = 0;
                }
                /*
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
     * getCall(dbgAddr)
     *
     * Given a possible return address (typically from the stack), look for a matching CALL (or INT) that
     * immediately precedes that address.
     *
     * @this {DebuggerPDP11}
     * @param {DbgAddrPDP11} dbgAddr
     * @returns {string|null} CALL instruction at or near dbgAddr, or null if none
     */
    getCall(dbgAddr)
    {
        var sCall = null;
        var addr = dbgAddr.addr;
        var addrOrig = addr;
        for (var n = 1; n <= 6 && !!addr; n++) {
            if (n > 2) {
                dbgAddr.addr = addr;
                var s = this.getInstruction(dbgAddr);
                if (s.indexOf("JSR") >= 0) {
                    /*
                     * Verify that the length of this call, when added to the address of the call, matches
                     * the original return address.  We do this by getting the string index of the opcode bytes,
                     * subtracting that from the string index of the next space, and dividing that difference
                     * by two, to yield the length of the CALL (or INT) instruction, in bytes.
                     */
                    var i = s.indexOf(' ');
                    var j = s.indexOf(' ', i+1);
                    if (addr + (j - i - 1)/2 == addrOrig) {
                        sCall = s;
                        break;
                    }
                }
            }
            addr -= 2;
        }
        dbgAddr.addr = addrOrig;
        return sCall;
    }

    /**
     * doStackTrace(sCmd, sAddr)
     *
     * Use "k" for a normal stack trace and "ks" for a stack trace with symbolic info.
     *
     * @this {DebuggerPDP11}
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

        var nFrames = 10, cFrames = 0;
        var dbgAddrCall = this.newAddr();
        var dbgAddrStack = this.newAddr(this.cpu.getSP());
        this.printf("stack trace for %s\n", this.toStrAddr(dbgAddrStack));

        while (cFrames < nFrames) {
            var sCall = null, sCallPrev = null, cTests = 256;
            while ((dbgAddrStack.addr >>> 0) < 0x10000) {
                dbgAddrCall.addr = this.getWord(dbgAddrStack, 2);
                /*
                 * Because we're using the auto-increment feature of getWord(), and because that will automatically
                 * wrap the offset around the end of the segment, we must also check the addr property to detect the wrap.
                 */
                if (dbgAddrStack.addr == null || !cTests--) break;
                if (dbgAddrCall.addr & 0x1) continue;           // an odd address on the PDP-11 is not a valid instruction boundary
                sCall = this.getCall(dbgAddrCall);
                if (sCall) break;
            }
            /*
             * The sCallPrev check eliminates duplicate sequential calls, which are usually (but not always)
             * indicative of a false positive, in which case the previous call is probably bogus as well, but
             * at least we won't duplicate that mistake.  Of course, there are always exceptions, recursion
             * being one of them, but it's rare that we're debugging recursive code.
             */
            if (!sCall || sCall == sCallPrev) break;
            var sSymbol = null;
            if (sCmd == "ks") {
                var a = sCall.match(/[0-9A-F]+$/);
                if (a) sSymbol = this.doList(a[0]);
            }
            sCall = StrLib.pad(sCall, -50) + "  ;" + (sSymbol || "stack=" + this.toStrAddr(dbgAddrStack)); // + " return=" + this.toStrAddr(dbgAddrCall));
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
     * doesn't display anything until the the chunk has finished.  "tc 1" is also a useful
     * command in that it doesn't inhibit interrupts like "t" or "tr" does.
     *
     * However, generally a more useful command is "bn", which allows you to break after some
     * number of instructions have been executed (as opposed to some number of cycles).
     *
     * @this {DebuggerPDP11}
     * @param {string} [sCmd] ("t", "tc", or "tr")
     * @param {string} [sCount] # of instructions to step
     */
    doTrace(sCmd, sCount)
    {
        if (sCount == '?') {
            this.printf("trace commands:\n");
            this.printf("\tt  [#]\ttrace # instructions\n");
            this.printf("\ttr [#]\ttrace # instructions with register updates\n");
            this.printf("\ttc [#]\ttrace # cycles\n");
            this.printf("note: bn [#] breaks after # instructions without updates\n");
            return;
        }

        var dbg = this;
        var fRegs = (sCmd != "t");
        var nCount = this.parseValue(sCount, undefined, true) || 1;

        /*
         * We used to set nCycles to 1 when a count > 1 was specified, because nCycles set
         * to 0 used to mean "execute the next instruction without checking for interrupts".
         * Well, this machine's stepCPU() doesn't do that; it ALWAYS checks for interrupts,
         * so we should leave nCycles set to 0, so that if an interrupt is dispatched, we will
         * get to see the first instruction of the interrupt handler.
         */
        var nCycles = 0;    // (nCount == 1? 0 : 1);

        if (sCmd == "tc") {
            nCycles = nCount;
            nCount = 1;
        }
        this.sCmdTracePrev = sCmd;

        WebLib.onCountRepeat(
            nCount,
            function onCountStep() {
                return dbg.setBusy(true) && dbg.stepCPU(nCycles, fRegs, false);
            },
            function onCountStepComplete() {
                /*
                 * We explicitly called stepCPU() with fUpdateDisplays set to false, because repeatedly
                 * calling updateDisplays() can be very slow, especially if a Control Panel is present with
                 * displayLiveRegs enabled, so once the repeat count has been exhausted, we must perform
                 * a final updateDisplays().
                 */
                if (dbg.panel) dbg.panel.stop();
                dbg.cmp.updateDisplays(-1);
                dbg.setBusy(false);
            }
        );
    }

    /**
     * doUnassemble(sAddr, sAddrEnd, nLines)
     *
     * @this {DebuggerPDP11}
     * @param {string} [sAddr]
     * @param {string} [sAddrEnd]
     * @param {number} [nLines]
     */
    doUnassemble(sAddr, sAddrEnd, nLines)
    {
        var dbgAddr = this.parseAddr(sAddr, true);
        if (!dbgAddr) return;

        if (nLines === undefined) nLines = 1;

        var nBytes = 0x100;
        if (sAddrEnd !== undefined) {

            if (sAddrEnd.charAt(0) == 'l') {
                var n = this.parseValue(sAddrEnd.substr(1));
                if (n != null) nLines = n;
            }
            else {
                var dbgAddrEnd = this.parseAddr(sAddrEnd, true);
                if (!dbgAddrEnd || dbgAddrEnd.addr < dbgAddr.addr) return;

                nBytes = dbgAddrEnd.addr - dbgAddr.addr;
                if (!DEBUG && nBytes > 0x100) {
                    /*
                     * Limiting the amount of disassembled code to 256 bytes in non-DEBUG builds is partly to
                     * prevent the user from wedging the browser by dumping too many lines, but also a recognition
                     * that, in non-DEBUG builds, this.printf() keeps print output buffer truncated to 8Kb anyway.
                     */
                    this.printf("range too large\n");
                    return;
                }
                nLines = -1;
            }
        }

        var nPrinted = 0;
        var sInstruction;

        while (nBytes > 0 && nLines--) {

            var nSequence = (this.isBusy(false) || this.nStep)? this.nCycles : null;
            var sComment = (nSequence != null? "cycles" : null);
            var aSymbol = this.findSymbol(dbgAddr);

            var addr = dbgAddr.addr;    // we snap dbgAddr.addr *after* calling findSymbol(), which re-evaluates it

            if (aSymbol[0] && nLines) {
                if (!nPrinted && nLines || aSymbol[0].indexOf('+') < 0) {
                    var sLabel = aSymbol[0] + ':';
                    if (aSymbol[2]) sLabel += ' ' + aSymbol[2];
                    this.printf("%s\n", sLabel);
                }
            }

            if (aSymbol[3]) {
                sComment = aSymbol[3];
                nSequence = null;
            }

            sInstruction = this.getInstruction(dbgAddr, sComment, nSequence);

            this.printf("%s\n", sInstruction);
            this.dbgAddrNextCode = dbgAddr;
            nBytes -= dbgAddr.addr - addr;
            nPrinted++;
        }
    }

    /**
     * splitArgs(sCmd)
     *
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     * @returns {Array.<string>}
     */
    splitArgs(sCmd)
    {
        var asArgs = sCmd.replace(/ +/g, ' ').split(' ');
        asArgs[0] = asArgs[0].toLowerCase();
        if (asArgs && asArgs.length) {
            var s0 = asArgs[0];
            var ch0 = s0.charAt(0);
            for (var i = 1; i < s0.length; i++) {
                var ch = s0.charAt(i);
                if (ch0 == '?' || ch0 == 'r' || ch < 'a' || ch > 'z') {
                    asArgs[0] = s0.substr(i);
                    asArgs.unshift(s0.substr(0, i));
                    break;
                }
            }
        }
        return asArgs;
    }

    /**
     * doCommand(sCmd, fQuiet)
     *
     * @this {DebuggerPDP11}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if command processed, false if unrecognized
     */
    doCommand(sCmd, fQuiet)
    {
        var result = true;

        try {
            if (!sCmd.length || sCmd == "end") {
                if (this.fAssemble) {
                    this.printf("ended assemble at %s\n", this.toStrAddr(this.dbgAddrAssemble));
                    this.dbgAddrNextCode = this.dbgAddrAssemble;
                    this.fAssemble = false;
                }
                sCmd = "";
            }
            else if (!fQuiet) {
                this.printf("%s%s\n", DebuggerPDP11.PROMPT, sCmd);
            }

            var ch = sCmd.charAt(0);
            if (ch == '"' || ch == "'") return true;

            /*
             * Zap the previous message buffer to ensure the new command's output is not tossed out as a repeat.
             */
            this.sMessagePrev = null;

            /*
             * I've relaxed the !isBusy() requirement, to maximize our ability to issue Debugger commands externally.
             */
            if (this.isReady() /* && !this.isBusy(true) */ && sCmd.length > 0) {

                if (this.fAssemble) {
                    sCmd = "a " + this.toStrAddr(this.dbgAddrAssemble) + ' ' + sCmd;
                }

                var fError = false;
                var asArgs = this.splitArgs(sCmd);

                switch (asArgs[0].charAt(0)) {
                case 'a':
                    this.doAssemble(asArgs);
                    break;
                case 'b':
                    this.doBreak(asArgs[0], asArgs[1], sCmd);
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
                    fError = true;
                    break;
                case 'k':
                    this.doStackTrace(asArgs[0], asArgs[1]);
                    break;
                case 'l':
                    if (asArgs[0] == "ln") {
                        this.doList(asArgs[1], true);
                        break;
                    }
                    fError = true;
                    break;
                case 'm':
                    this.doMessages(asArgs);
                    break;
                case 'p':
                    if (asArgs[0] == "print") {
                        this.doPrint(sCmd.substr(5));
                        break;
                    }
                    this.doStep(asArgs[0], asArgs[1]);
                    break;
                case 'r':
                    if (sCmd == "reset") {
                        if (this.cmp) this.cmp.reset();
                        break;
                    }
                    this.doRegisters(asArgs);
                    break;
                case 's':
                    this.doOptions(asArgs);
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
                    if (asArgs[0] == "ver") {
                        this.printf("%s version %s (%s%s%s)\n", (APPNAME || "PDP11"), APPVERSION, this.cpu.model, (PDP11.COMPILED? ",RELEASE" : (PDP11.DEBUG? ",DEBUG" : ",NODEBUG")), (PDP11.TYPEDARRAYS? ",TYPEDARRAYS" : (PDP11.BYTEARRAYS? ",BYTEARRAYS" : ",LONGARRAYS")));
                        this.printf("%s\n", WebLib.getUserAgent());
                        break;
                    }
                    fError = true;
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
                    fError = true;
                    break;
                }
                if (fError) {
                    this.printf("unknown command: %s\n", sCmd);
                    result = false;
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
     * @this {DebuggerPDP11}
     * @param {string} sCommands
     * @param {boolean} [fSave]
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if all commands processed, false if not
     */
    doCommands(sCommands, fSave = false, fQuiet = false)
    {
        var a = this.parseCommand(sCommands, fSave);
        for (var s in a) {
            if (!this.doCommand(a[+s], fQuiet)) return false;
        }
        return true;
    }

    /**
     * DebuggerPDP11.init()
     *
     * This function operates on every HTML element of class "debugger", extracting the
     * JSON-encoded parameters for the Debugger constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Debugger component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeDbg = Component.getElementsByClass(APPCLASS, "debugger");
        for (var iDbg = 0; iDbg < aeDbg.length; iDbg++) {
            var eDbg = aeDbg[iDbg];
            var parmsDbg = Component.getComponentParms(eDbg);
            var dbg = new DebuggerPDP11(parmsDbg);
            Component.bindComponentControls(dbg, eDbg, APPCLASS);
        }
    }
}

if (DEBUGGER) {

    /*
     * NOTE: Every DebuggerPDP11 property from here to the first prototype function definition (initBus()) is
     * considered a "class constant"; most of them use our "all-caps" convention (and all of them SHOULD, but
     * that wouldn't help us catch any bugs).
     *
     * Technically, all of them should ALSO be preceded by a "@const" annotation, but that's a lot of work and it
     * really clutters the code.  I wish the Closure Compiler had a way to annotate every definition with a given
     * section with a single annotation....
     */

    DebuggerPDP11.COMMANDS = {
        '?':        "help/print",
        'a [#]':    "assemble",             // TODO: Implement this command someday
        'b [#]':    "breakpoint",           // multiple variations (use b? to list them)
        'c':        "clear output",
        'd [#]':    "dump memory",          // additional syntax: d [#] [l#], where l# is a number of bytes to dump
        'e [#]':    "edit memory",
        'g [#]':    "go [to #]",
        'h':        "halt",
        'if':       "eval expression",
        'int [#]':  "request interrupt",
        'k':        "stack trace",
        "ln":       "list nearest symbol(s)",
        'm':        "messages",
        'p':        "step over",            // other variations: pr (step and dump registers)
        'print':    "print expression",
        'r':        "dump/set registers",
        'reset':    "reset machine",
        's':        "set options",
        't [#]':    "trace",                // other variations: tr (trace and dump registers)
        'u [#]':    "unassemble",
        'var':      "assign variable",
        'ver':      "print version"
    };

    /*
     * CPU opcode IDs
     *
     * Not listed: BLO (same as BCS) and BHIS (same as BCC).
     */
    DebuggerPDP11.OPS = {
        NONE:   0,      ADC:    1,      ADCB:   2,      ADD:    3,      ASL:    4,      ASLB:   5,      ASR:    6,      ASRB:   7,
        BCC:    8,      BCS:    9,      BEQ:    10,     BGE:    11,     BGT:    12,     BHI:    13,     BIC:    14,     BICB:   15,
        BIS:    16,     BISB:   17,     BIT:    18,     BITB:   19,     BLE:    20,     BLOS:   21,     BLT:    22,     BMI:    23,
        BNE:    24,     BPL:    25,     BPT:    26,     BR:     27,     BVC:    28,     BVS:    29,     CCC:    30,     CLC:    31,
        CLCN:   32,     CLCV:   33,     CLCVN:  34,     CLCVZ:  35,     CLCZ:   36,     CLCZN:  37,     CLN:    38,     CLR:    39,
        CLRB:   40,     CLV:    41,     CLVN:   42,     CLVZ:   43,     CLVZN:  44,     CLZ:    45,     CLZN:   46,     CMP:    47,
        CMPB:   48,     COM:    49,     COMB:   50,     DEC:    51,     DECB:   52,     INC:    53,     INCB:   54,     HALT:   55,
        JMP:    56,     JSR:    57,     MARK:   58,     MFPD:   59,     MFPI:   60,     MFPS:   61,     MOV:    62,     MOVB:   63,
        MTPD:   64,     MTPI:   65,     MTPS:   66,     NEG:    67,     NEGB:   68,     NOP:    69,     RESET:  70,     ROL:    71,
        ROLB:   72,     ROR:    73,     RORB:   74,     RTI:    75,     RTS:    76,     SBC:    77,     SBCB:   78,     SCC:    79,
        SEC:    80,     SECN:   81,     SECV:   82,     SECVN:  83,     SECVZ:  84,     SECZ:   85,     SECZN:  86,     SEN:    87,
        SEV:    88,     SEVN:   89,     SEVZ:   90,     SEVZN:  91,     SEZ:    92,     SEZN:   93,     SUB:    94,     SWAB:   95,
        SXT:    96,     TST:    97,     TSTB:   98,     WAIT:   99,     MUL:    100,    DIV:    101,    ASH:    102,    ASHC:   103,
        XOR:    104,    SOB:    105,    EMT:    106,    TRAP:   107,    SPL:    108,    IOT:    109,    RTT:    110,    MFPT:   111
    };

    /*
     * CPU opcode names, indexed by CPU opcode ordinal (above)
     */
    DebuggerPDP11.OPNAMES = [
        ".WORD",        "ADC",          "ADCB",         "ADD",          "ASL",          "ASLB",         "ASR",          "ASRB",
        "BCC",          "BCS",          "BEQ",          "BGE",          "BGT",          "BHI",          "BIC",          "BICB",
        "BIS",          "BISB",         "BIT",          "BITB",         "BLE",          "BLOS",         "BLT",          "BMI",
        "BNE",          "BPL",          "BPT",          "BR",           "BVC",          "BVS",          "CCC",          "CLC",
        "CLCN",         "CLCV",         "CLCVN",        "CLCVZ",        "CLCZ",         "CLCZN",        "CLN",          "CLR",
        "CLRB",         "CLV",          "CLVN",         "CLVZ",         "CLVZN",        "CLZ",          "CLZN",         "CMP",
        "CMPB",         "COM",          "COMB",         "DEC",          "DECB",         "INC",          "INCB",         "HALT",
        "JMP",          "JSR",          "MARK",         "MFPD",         "MFPI",         "MFPS",         "MOV",          "MOVB",
        "MTPD",         "MTPI",         "MTPS",         "NEG",          "NEGB",         "NOP",          "RESET",        "ROL",
        "ROLB",         "ROR",          "RORB",         "RTI",          "RTS",          "SBC",          "SBCB",         "SCC",
        "SEC",          "SECN",         "SECV",         "SECVN",        "SECVZ",        "SECZ",         "SECZN",        "SEN",
        "SEV",          "SEVN",         "SEVZ",         "SEVZN",        "SEZ",          "SEZN",         "SUB",          "SWAB",
        "SXT",          "TST",          "TSTB",         "WAIT",         "MUL",          "DIV",          "ASH",          "ASHC",
        "XOR",          "SOB",          "EMT",          "TRAP",         "SPL",          "IOT",          "RTT",          "MFPT"
    ];

    /*
     * Register numbers 0-7 are reserved for cpu.regsGen, 8-15 are reserved for cpu.regsAlt, and 16-19 for cpu.regsStack.
     */
    DebuggerPDP11.REG_PS        = 20;
    DebuggerPDP11.REG_PI        = 21;
    DebuggerPDP11.REG_ER        = 22;
    DebuggerPDP11.REG_SL        = 23;
    DebuggerPDP11.REG_M0        = 24;
    DebuggerPDP11.REG_M1        = 25;
    DebuggerPDP11.REG_M2        = 26;
    DebuggerPDP11.REG_M3        = 27;
    DebuggerPDP11.REG_AR        = 28;           // ADDRESS register; see Panel's getAR() and setAR()
    DebuggerPDP11.REG_DR        = 29;           // DISPLAY/DATA register; see Panel's getDR() and setDR()
    DebuggerPDP11.REG_SR        = 30;           // SWITCH register; see Panel's getSR() and setSR()

    DebuggerPDP11.REGS = {
        "SP":   6,
        "PC":   7,
        "PS":   DebuggerPDP11.REG_PS,
        "PI":   DebuggerPDP11.REG_PI,
        "ER":   DebuggerPDP11.REG_ER,
        "SL":   DebuggerPDP11.REG_SL,
        "M0":   DebuggerPDP11.REG_M0,
        "M1":   DebuggerPDP11.REG_M1,
        "M2":   DebuggerPDP11.REG_M2,
        "M3":   DebuggerPDP11.REG_M3,
        "AR":   DebuggerPDP11.REG_AR,
        "DR":   DebuggerPDP11.REG_DR,
        "SR":   DebuggerPDP11.REG_SR
    };

    DebuggerPDP11.REGNAMES = [
        "R0", "R1", "R2", "R3", "R4", "R5", "SP", "PC",
        "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7",
        "S0", "S1", "S2", "S3",
        "PS", "PI", "ER", "SL", "M0", "M1", "M2", "M3",
        "AR", "DR", "SR"
    ];

    DebuggerPDP11.MODES = ["KI","KD","SI","SD","??","??","UI","UD"];

    /*
     * Operand type masks; anything that's not covered by OP_SRC or OP_DST must be a OP_OTHER value.
     */
    DebuggerPDP11.OP_DSTREG   = PDP11.OPREG.MASK;
    DebuggerPDP11.OP_DSTMODE  = PDP11.OPMODE.MASK;
    DebuggerPDP11.OP_DST      = (DebuggerPDP11.OP_DSTMODE | DebuggerPDP11.OP_DSTREG);
    DebuggerPDP11.OP_SRCREG   = PDP11.OPREG.MASK << 6;
    DebuggerPDP11.OP_SRCMODE  = PDP11.OPMODE.MASK << 6;
    DebuggerPDP11.OP_SRC      = (DebuggerPDP11.OP_SRCMODE | DebuggerPDP11.OP_SRCREG);
    DebuggerPDP11.OP_BRANCH   = 0x1000;
    DebuggerPDP11.OP_DSTOFF   = 0x2000;
    DebuggerPDP11.OP_DSTNUM3  = 0x3000;       // DST 3-bit number (ie, just the DSTREG field)
    DebuggerPDP11.OP_DSTNUM6  = 0x6000;       // DST 6-bit number (ie, both the DSTREG and DSTMODE fields)
    DebuggerPDP11.OP_DSTNUM8  = 0x8000;       // DST 8-bit number
    DebuggerPDP11.OP_OTHER    = 0xF000;

    /*
     * The OPTABLE contains opcode masks, and each mask refers to table of possible values, and each
     * value refers to an array that contains:
     *
     *      [0]: {number} of the opcode name (see OP.*)
     *      [1]: {number} containing the first operand type bit(s), if any
     *      [2]: {number} containing the second operand type bit(s), if any
     *
     * Note that, by convention, opcodes that require two operands list the SRC operand first and DST operand
     * second (ie, the OPPOSITE of the Intel convention).
     *
     * Also note that, for some of the newer PDP-11 opcodes (eg, MUL, DIV, ASH, ASHC), the location of the
     * opcode's SRC and DST bits are reversed.  This is why, for example, you'll see the MUL instruction defined
     * below as having OP_DST for the first operand and OP_SRCREG for the second operand.  This does NOT mean
     * that the opcode's destination operand is being listed first, but rather that the bits describing the source
     * operand are in the opcode's OP_DST field.
     */
    DebuggerPDP11.OPTABLE = {
        0xF000: {
            0x1000: [DebuggerPDP11.OPS.MOV,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 01SSDD
            0x2000: [DebuggerPDP11.OPS.CMP,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 02SSDD
            0x3000: [DebuggerPDP11.OPS.BIT,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 03SSDD
            0x4000: [DebuggerPDP11.OPS.BIC,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 04SSDD
            0x5000: [DebuggerPDP11.OPS.BIS,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 05SSDD
            0x6000: [DebuggerPDP11.OPS.ADD,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 06SSDD
            0x9000: [DebuggerPDP11.OPS.MOVB,    DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 11SSDD
            0xA000: [DebuggerPDP11.OPS.CMPB,    DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 12SSDD
            0xB000: [DebuggerPDP11.OPS.BITB,    DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 13SSDD
            0xC000: [DebuggerPDP11.OPS.BICB,    DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 14SSDD
            0xD000: [DebuggerPDP11.OPS.BISB,    DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST],        // 15SSDD
            0xE000: [DebuggerPDP11.OPS.SUB,     DebuggerPDP11.OP_SRC,         DebuggerPDP11.OP_DST]         // 16SSDD
        },
        0xFE00: {
            0x0800: [DebuggerPDP11.OPS.JSR,     DebuggerPDP11.OP_SRCREG,      DebuggerPDP11.OP_DST],        // 004RDD
            0x7000: [DebuggerPDP11.OPS.MUL,     DebuggerPDP11.OP_DST,         DebuggerPDP11.OP_SRCREG],     // 070RSS
            0x7200: [DebuggerPDP11.OPS.DIV,     DebuggerPDP11.OP_DST,         DebuggerPDP11.OP_SRCREG],     // 071RSS
            0x7400: [DebuggerPDP11.OPS.ASH,     DebuggerPDP11.OP_DST,         DebuggerPDP11.OP_SRCREG],     // 072RSS
            0x7600: [DebuggerPDP11.OPS.ASHC,    DebuggerPDP11.OP_DST,         DebuggerPDP11.OP_SRCREG],     // 073RSS
            0x7800: [DebuggerPDP11.OPS.XOR,     DebuggerPDP11.OP_SRCREG,      DebuggerPDP11.OP_DST],        // 074RDD
            0x7E00: [DebuggerPDP11.OPS.SOB,     DebuggerPDP11.OP_SRCREG,      DebuggerPDP11.OP_DSTOFF]      // 077Rnn
        },
        0xFF00: {
            0x0100: [DebuggerPDP11.OPS.BR,      DebuggerPDP11.OP_BRANCH],
            0x0200: [DebuggerPDP11.OPS.BNE,     DebuggerPDP11.OP_BRANCH],
            0x0300: [DebuggerPDP11.OPS.BEQ,     DebuggerPDP11.OP_BRANCH],
            0x0400: [DebuggerPDP11.OPS.BGE,     DebuggerPDP11.OP_BRANCH],
            0x0500: [DebuggerPDP11.OPS.BLT,     DebuggerPDP11.OP_BRANCH],
            0x0600: [DebuggerPDP11.OPS.BGT,     DebuggerPDP11.OP_BRANCH],
            0x0700: [DebuggerPDP11.OPS.BLE,     DebuggerPDP11.OP_BRANCH],
            0x8000: [DebuggerPDP11.OPS.BPL,     DebuggerPDP11.OP_BRANCH],
            0x8100: [DebuggerPDP11.OPS.BMI,     DebuggerPDP11.OP_BRANCH],
            0x8200: [DebuggerPDP11.OPS.BHI,     DebuggerPDP11.OP_BRANCH],
            0x8300: [DebuggerPDP11.OPS.BLOS,    DebuggerPDP11.OP_BRANCH],
            0x8400: [DebuggerPDP11.OPS.BVC,     DebuggerPDP11.OP_BRANCH],
            0x8500: [DebuggerPDP11.OPS.BVS,     DebuggerPDP11.OP_BRANCH],
            0x8600: [DebuggerPDP11.OPS.BCC,     DebuggerPDP11.OP_BRANCH],
            0x8700: [DebuggerPDP11.OPS.BCS,     DebuggerPDP11.OP_BRANCH],
            0x8800: [DebuggerPDP11.OPS.EMT,     DebuggerPDP11.OP_DSTNUM8],      // 104000..104377
            0x8900: [DebuggerPDP11.OPS.TRAP,    DebuggerPDP11.OP_DSTNUM8]       // 104400..104777
        },
        0xFFC0: {
            0x0040: [DebuggerPDP11.OPS.JMP,     DebuggerPDP11.OP_DST],          // 0001DD
            0x00C0: [DebuggerPDP11.OPS.SWAB,    DebuggerPDP11.OP_DST],          // 0003DD
            0x0A00: [DebuggerPDP11.OPS.CLR,     DebuggerPDP11.OP_DST],          // 0050DD
            0x0A40: [DebuggerPDP11.OPS.COM,     DebuggerPDP11.OP_DST],          // 0051DD
            0x0A80: [DebuggerPDP11.OPS.INC,     DebuggerPDP11.OP_DST],          // 0052DD
            0x0AC0: [DebuggerPDP11.OPS.DEC,     DebuggerPDP11.OP_DST],          // 0053DD
            0x0B00: [DebuggerPDP11.OPS.NEG,     DebuggerPDP11.OP_DST],          // 0054DD
            0x0B40: [DebuggerPDP11.OPS.ADC,     DebuggerPDP11.OP_DST],          // 0055DD
            0x0B80: [DebuggerPDP11.OPS.SBC,     DebuggerPDP11.OP_DST],          // 0056DD
            0x0BC0: [DebuggerPDP11.OPS.TST,     DebuggerPDP11.OP_DST],          // 0057DD
            0x0C00: [DebuggerPDP11.OPS.ROR,     DebuggerPDP11.OP_DST],          // 0060DD
            0x0C40: [DebuggerPDP11.OPS.ROL,     DebuggerPDP11.OP_DST],          // 0061DD
            0x0C80: [DebuggerPDP11.OPS.ASR,     DebuggerPDP11.OP_DST],          // 0062DD
            0x0CC0: [DebuggerPDP11.OPS.ASL,     DebuggerPDP11.OP_DST],          // 0063DD
            0x0D00: [DebuggerPDP11.OPS.MARK,    DebuggerPDP11.OP_DSTNUM6],      // 0064nn
            0x0D40: [DebuggerPDP11.OPS.MFPI,    DebuggerPDP11.OP_DST],          // 0065SS
            0x0D80: [DebuggerPDP11.OPS.MTPI,    DebuggerPDP11.OP_DST],          // 0066DD
            0x0DC0: [DebuggerPDP11.OPS.SXT,     DebuggerPDP11.OP_DST],          // 0067DD
            0x8A00: [DebuggerPDP11.OPS.CLRB,    DebuggerPDP11.OP_DST],          // 1050DD
            0x8A40: [DebuggerPDP11.OPS.COMB,    DebuggerPDP11.OP_DST],          // 1051DD
            0x8A80: [DebuggerPDP11.OPS.INCB,    DebuggerPDP11.OP_DST],          // 1052DD
            0x8AC0: [DebuggerPDP11.OPS.DECB,    DebuggerPDP11.OP_DST],          // 1053DD
            0x8B00: [DebuggerPDP11.OPS.NEGB,    DebuggerPDP11.OP_DST],          // 1054DD
            0x8B40: [DebuggerPDP11.OPS.ADCB,    DebuggerPDP11.OP_DST],          // 1055DD
            0x8B80: [DebuggerPDP11.OPS.SBCB,    DebuggerPDP11.OP_DST],          // 1056DD
            0x8BC0: [DebuggerPDP11.OPS.TSTB,    DebuggerPDP11.OP_DST],          // 1057DD
            0x8C00: [DebuggerPDP11.OPS.RORB,    DebuggerPDP11.OP_DST],          // 1060DD
            0x8C40: [DebuggerPDP11.OPS.ROLB,    DebuggerPDP11.OP_DST],          // 1061DD
            0x8C80: [DebuggerPDP11.OPS.ASRB,    DebuggerPDP11.OP_DST],          // 1062DD
            0x8CC0: [DebuggerPDP11.OPS.ASLB,    DebuggerPDP11.OP_DST],          // 1063DD
            0x8D00: [DebuggerPDP11.OPS.MTPS,    DebuggerPDP11.OP_DST],          // 1064SS (only on LSI-11)
            0x8D40: [DebuggerPDP11.OPS.MFPD,    DebuggerPDP11.OP_DST],          // 1065DD (same as MFPI if no separate instruction/data spaces)
            0x8D80: [DebuggerPDP11.OPS.MTPD,    DebuggerPDP11.OP_DST],          // 1066DD (same as MTPI if no separate instruction/data spaces)
            0x8DC0: [DebuggerPDP11.OPS.MFPS,    DebuggerPDP11.OP_DST]           // 1067SS (only on LSI-11)
        },
        0xFFF8: {
            0x0080: [DebuggerPDP11.OPS.RTS,     DebuggerPDP11.OP_DSTREG],       // 00020R
            0x0098: [DebuggerPDP11.OPS.SPL,     DebuggerPDP11.OP_DSTNUM3]       // 00023N
        },
        0xFFFF: {
            0x0000: [DebuggerPDP11.OPS.HALT],                                   // 000000
            0x0001: [DebuggerPDP11.OPS.WAIT],                                   // 000001
            0x0002: [DebuggerPDP11.OPS.RTI],                                    // 000002
            0x0003: [DebuggerPDP11.OPS.BPT],                                    // 000003
            0x0004: [DebuggerPDP11.OPS.IOT],                                    // 000004
            0x0005: [DebuggerPDP11.OPS.RESET],                                  // 000005
            0x0006: [DebuggerPDP11.OPS.RTT],                                    // 000006
            0x0007: [DebuggerPDP11.OPS.MFPT],                                   // 000007 (only on PDP-11/44 & KB11-EM?)
            0x00A0: [DebuggerPDP11.OPS.NOP],
            0x00A1: [DebuggerPDP11.OPS.CLC],
            0x00A2: [DebuggerPDP11.OPS.CLV],
            0x00A3: [DebuggerPDP11.OPS.CLCV],
            0x00A4: [DebuggerPDP11.OPS.CLZ],
            0x00A5: [DebuggerPDP11.OPS.CLCZ],
            0x00A6: [DebuggerPDP11.OPS.CLVZ],
            0x00A7: [DebuggerPDP11.OPS.CLCVZ],
            0x00A8: [DebuggerPDP11.OPS.CLN],
            0x00A9: [DebuggerPDP11.OPS.CLCN],
            0x00AA: [DebuggerPDP11.OPS.CLVN],
            0x00AB: [DebuggerPDP11.OPS.CLCVN],
            0x00AC: [DebuggerPDP11.OPS.CLZN],
            0x00AD: [DebuggerPDP11.OPS.CLCZN],
            0x00AE: [DebuggerPDP11.OPS.CLVZN],
            0x00AF: [DebuggerPDP11.OPS.CCC],                                    // aka CLCVZN
            0x00B0: [DebuggerPDP11.OPS.NOP],
            0x00B1: [DebuggerPDP11.OPS.SEC],
            0x00B2: [DebuggerPDP11.OPS.SEV],
            0x00B3: [DebuggerPDP11.OPS.SECV],
            0x00B4: [DebuggerPDP11.OPS.SEZ],
            0x00B5: [DebuggerPDP11.OPS.SECZ],
            0x00B6: [DebuggerPDP11.OPS.SEVZ],
            0x00B7: [DebuggerPDP11.OPS.SECVZ],
            0x00B8: [DebuggerPDP11.OPS.SEN],
            0x00B9: [DebuggerPDP11.OPS.SECN],
            0x00BA: [DebuggerPDP11.OPS.SEVN],
            0x00BB: [DebuggerPDP11.OPS.SECVN],
            0x00BC: [DebuggerPDP11.OPS.SEZN],
            0x00BD: [DebuggerPDP11.OPS.SECZN],
            0x00BE: [DebuggerPDP11.OPS.SEVZN],
            0x00BF: [DebuggerPDP11.OPS.SCC]                                     // aka SECVZN
        }
    };

    DebuggerPDP11.OPNONE = [DebuggerPDP11.OPS.NONE];

    /*
     * Table of opcodes added to the 11/40 and newer
     */
    DebuggerPDP11.OP1140 = [
        DebuggerPDP11.OPS.MARK,
        DebuggerPDP11.OPS.MFPI,
        DebuggerPDP11.OPS.MTPI,
        DebuggerPDP11.OPS.SXT,
        DebuggerPDP11.OPS.RTT,
        DebuggerPDP11.OPS.MUL,
        DebuggerPDP11.OPS.DIV,
        DebuggerPDP11.OPS.ASH,
        DebuggerPDP11.OPS.ASHC,
        DebuggerPDP11.OPS.XOR,
        DebuggerPDP11.OPS.SOB
    ];

    /*
     * Table of opcodes added to the 11/45 and newer
     */
    DebuggerPDP11.OP1145 = [
        DebuggerPDP11.OPS.SPL,
        DebuggerPDP11.OPS.MFPD,
        DebuggerPDP11.OPS.MTPD
    ];

    DebuggerPDP11.HISTORY_LIMIT = DEBUG? 100000 : 1000;

    DebuggerPDP11.PROMPT = ">> ";

    /*
     * Initialize every Debugger module on the page (as IF there's ever going to be more than one ;-))
     */
    WebLib.onInit(DebuggerPDP11.init);

}   // endif DEBUGGER
