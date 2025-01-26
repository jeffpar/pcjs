/**
 * @fileoverview Implements the PDP-10 Debugger component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusPDP10 from "./bus.js";
import Macro10 from "./macro10.js";
import MemoryPDP10 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DbgLib from "../../../../modules/v2/dbglib.js";
import Keys from "../../../../modules/v2/keys.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import UsrLib from "../../../../modules/v2/usrlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, APPNAME, APPVERSION, COMPILED, DEBUG, DEBUGGER, MAXDEBUG, PDP10, globals } from "./defines.js";

/**
 * DebuggerPDP10 Address Object
 *
 *      addr            address
 *      fPhysical       true if this is a physical address
 *      fTemporary      true if this is a temporary breakpoint address
 *      nBase           set if the address contained an explicit base (eg, 16, 10, 8, etc)
 *      sCmd            set for breakpoint addresses if there's an associated command string
 *      aCmds           preprocessed commands (from sCmd)
 *
 * @typedef {Object} DbgAddrPDP10
 * @property {number|null} addr
 * @property {boolean} fPhysical
 * @property {boolean} fTemporary
 * @property {number} [nBase]
 * @property {string} [sCmd]
 * @property {Array.<string>} [aCmds]
 */

/**
 * @class DebuggerPDP10
 * @unrestricted
 */
export default class DebuggerPDP10 extends DbgLib {
    /**
     * DebuggerPDP10(parmsDbg)
     *
     * The DebuggerPDP10 component supports the following optional (parmsDbg) properties:
     *
     *      commands: string containing zero or more commands, separated by ';'
     *
     *      messages: string containing zero or more message categories to enable;
     *      multiple categories must be separated by ',' or ';'.  Parsed by messageInit().
     *
     * The DebuggerPDP10 component is an optional component that implements a variety of user
     * commands for controlling the CPU, dumping and editing memory, etc.
     *
     * @this {DebuggerPDP10}
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
            this.nBusWidth = 18;        // default value, updated by initBus()

            this.nBits = 36;            // default integer precision
            this.achGroup = ['<','>'];
            this.achAddress = [];

            /*
             * Most commands that require an address call parseAddr(), and if a dbgAddr parameter is supplied
             * as as well (eg, dbgAddrCode, dbgAddrData), then that address will be used as the default.
             *
             * For TEMPORARY breakpoint addresses, we set fTemporary to true, so that they can be automatically
             * cleared when they're hit.
             */
            this.dbgAddrAcc = this.newAddr();
            this.dbgAddrCode = this.newAddr(0);
            this.dbgAddrData = this.newAddr(0);
            this.dbgAddrAssemble = this.newAddr(0);

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
             * Initialize DebuggerPDP10 message support.
             */
            this.dbg = this;
            this.afnDumpers = {};
            this.bitsMessage = this.bitsWarning = 0;
            this.sMessagePrev = null;
            this.aMessageBuffer = [];
            this.messageInit(parmsDbg['messages']);
            this.sInitCommands = parmsDbg['commands'];
            this.aCommands = [];

            /*
             * Define remaining miscellaneous DebuggerPDP10 properties.
             */
            this.aOpReserved = [];
            this.nStep = 0;
            this.sCmdTracePrev = null;
            this.sCmdDumpPrev = null;
            this.nSuppressBreaks = 0;
            this.cInstructions = this.cInstructionsStart = 0;
            this.nCycles = this.nCyclesStart = this.msStart = 0;
            this.controlDebug = null;
            this.panel = null;

            /**
             * This records any active Macro10 assembler object.
             *
             * @type {Macro10|null}
             */
            this.macro10 = null;

            /*
             * Make it easier to access DebuggerPDP10 commands from an external REPL;
             * eg, the WebStorm "live" console window:
             *
             *      pdp10('r')
             *      pdp10('dw 0:0')
             *      pdp10('h')
             *      ...
             */
            var dbg = this;
            if (globals.window[APPCLASS] === undefined) {
                globals.window[APPCLASS] = function(s) { return dbg.doCommands(s); };
            }

        }   // endif DEBUGGER
    }

    /**
     * getAddr(dbgAddr, fWrite)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10|null} [dbgAddr]
     * @param {boolean} [fWrite]
     * @returns {number} is the corresponding linear address, or PDP10.ADDR_INVALID
     */
    getAddr(dbgAddr, fWrite)
    {
        var addr = dbgAddr && dbgAddr.addr;
        if (addr == null) addr = PDP10.ADDR_INVALID;
        return addr;
    }

    /**
     * newAddr(addr, fPhysical, nBase)
     *
     * Returns a NEW DbgAddrPDP10 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerPDP10}
     * @param {number|null} [addr]
     * @param {boolean} [fPhysical]
     * @param {number} [nBase]
     * @returns {DbgAddrPDP10}
     */
    newAddr(addr = null, fPhysical = false, nBase)
    {
        return {addr: addr, fPhysical: fPhysical, fTemporary: false, nBase: nBase};
    }

    /**
     * copyAddr(dbgAddr, dbgCopy)
     *
     * Updates an EXISTING DbgAddrPDP10 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @param {DbgAddrPDP10} dbgCopy
     * @returns {DbgAddrPDP10}
     */
    copyAddr(dbgAddr, dbgCopy)
    {
        dbgAddr.addr = dbgCopy.addr;
        dbgAddr.fPhysical = dbgCopy.fPhysical;
        dbgAddr.fTemporary = dbgCopy.fTemporary;
        dbgAddr.nBase = dbgCopy.nBase;
        return dbgAddr;
    }

    /**
     * setAddr(dbgAddr, addr, fPhysical, nBase)
     *
     * Updates an EXISTING DbgAddrPDP10 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @param {number} addr
     * @param {boolean} [fPhysical]
     * @param {number} [nBase]
     * @returns {DbgAddrPDP10}
     */
    setAddr(dbgAddr, addr, fPhysical, nBase)
    {
        dbgAddr.addr = addr;
        dbgAddr.fPhysical = fPhysical || false;
        dbgAddr.fTemporary = false;
        dbgAddr.nBase = nBase;
        return dbgAddr;
    }

    /**
     * packAddr(dbgAddr)
     *
     * Packs a DbgAddrPDP10 object into an Array suitable for saving in a machine state object.
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @returns {Array}
     */
    packAddr(dbgAddr)
    {
        return [dbgAddr.addr, dbgAddr.fPhysical, dbgAddr.fTemporary, dbgAddr.nBase, dbgAddr.sCmd];
    }

    /**
     * unpackAddr(aAddr)
     *
     * Unpacks a DbgAddrPDP10 object from an Array created by packAddr() and restored from a saved machine state.
     *
     * @this {DebuggerPDP10}
     * @param {Array} aAddr
     * @returns {DbgAddrPDP10}
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
     * @this {DebuggerPDP10}
     * @param {ComputerPDP10} cmp
     * @param {BusPDP10} bus
     * @param {CPUStatePDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cmp = cmp;
        this.cpu = cpu;
        this.panel = cmp.panel;
        this.nBusWidth = bus.getWidth();

        /*
         * Override the Debugger's message configuration if specified.
         */
        var sMessages = /** @type {string|undefined} */ (cmp.getMachineParm('messages'));
        if (sMessages) this.messageInit(sMessages);

        /*
         * Override the Debugger's initialization commands if specified.
         */
        var sCommands = /** @type {string|undefined} */ (cmp.getMachineParm('commands'));
        if (sCommands) this.sInitCommands = sCommands;

        /*
         * Update aOpReserved as appropriate for the current model
         */

        this.messageDump(MESSAGE.BUS,  function onDumpBus(asArgs) { dbg.dumpBus(asArgs); });

        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * getWord(dbgAddr, inc)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getWord(dbgAddr, inc)
    {
        var w = PDP10.WORD_INVALID;
        var addr = this.getAddr(dbgAddr, false);
        if (addr !== PDP10.ADDR_INVALID) {
            w = this.bus.getWordDirect(addr);
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return w;
    }

    /**
     * setWord(dbgAddr, w, inc)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @param {number} w
     * @param {number} [inc]
     */
    setWord(dbgAddr, w, inc)
    {
        var addr = this.getAddr(dbgAddr, true);
        if (addr !== PDP10.ADDR_INVALID) {
            this.bus.setWordDirect(addr, w);
            if (inc) this.incAddr(dbgAddr, inc);
            this.cmp.updateDisplays(-1);
        }
    }

    /**
     * evalMUL(dst, src)
     *
     * Overrides the standard multiplication function with one that honors PDP-10 semantics and precision.
     *
     * @this {DebuggerPDP10}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst * src)
     */
    evalMUL(dst, src)
    {
        /*
         * The CPU requires that all 36-bit inputs/outputs be UNSIGNED, whereas our expression evaluator allows signed
         * inputs/outputs.  So we perform two's complement conversions on all inputs/outputs as needed.
         */
        if (dst < 0) dst += PDP10.WORD_LIMIT;
        if (src < 0) src += PDP10.WORD_LIMIT;
        var result = PDP10.doMUL.call(this.cpu, dst, src, false, true);
        if (result >= PDP10.INT_LIMIT) result -= PDP10.WORD_LIMIT;
        if (MAXDEBUG) {
            var resultJS = this.truncate(dst * src);
            if (resultJS !== result) {
                var sReference = this.macro10? (" @" + this.toStrBase(this.macro10.nLocation)) : "";
                var sResults = "PDP-10: " + this.toStrBase(result, 36) + " JavaScript: " + this.toStrBase(resultJS, 36);
                this.printf("MUL(%s,%s) %s%s\n", this.toStrBase(dst, 36), this.toStrBase(src, 36), sResults, sReference);
            }
        }
        return result;
    }

    /**
     * parseAddr(sAddr, dbgAddr)
     *
     * Address evaluation and validation (eg, range checks) are no longer performed at this stage.  That's
     * done later, by getAddr(), which returns PDP10.ADDR_INVALID for invalid segments, out-of-range offsets,
     * etc.  The Debugger's low-level get/set memory functions verify all getAddr() results, but even if an
     * invalid address is passed through to the Bus memory interfaces, the address will simply be masked with
     * bus.nBusMask; in the case of PDP10.ADDR_INVALID, that will generally refer to the top of the physical
     * address space.
     *
     * @this {DebuggerPDP10}
     * @param {string|undefined} sAddr
     * @param {DbgAddrPDP10} [dbgAddr]
     * @returns {DbgAddrPDP10}
     */
    parseAddr(sAddr, dbgAddr)
    {
        var fPhysical, nBase;
        if (!dbgAddr) dbgAddr = this.newAddr();
        var addr = dbgAddr.addr;
        if (sAddr !== undefined) {
            sAddr = this.parseReference(sAddr);
            var ch = sAddr.charAt(0);
            if (ch == '%') {
                fPhysical = true;
                sAddr = sAddr.substr(1);
            }
            var dbgAddrTmp = this.findSymbolAddr(sAddr);
            if (dbgAddrTmp) return dbgAddrTmp;
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
            addr = this.validateWord(addr, this.nBusWidth);
            this.setAddr(dbgAddr, addr, fPhysical, nBase);
        }
        return dbgAddr;
    }

    /**
     * parseAddrOptions(dbdAddr, sOptions)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
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
     * validateWord(w, bits)
     *
     * @this {DebuggerPDP10}
     * @param {number} w
     * @param {number} [bits]
     * @returns {number}
     */
    validateWord(w, bits = 36)
    {
        /*
         * Although it's expected that most callers will supply unsigned 36-bit values, we're nice about
         * converting any signed values to their unsigned (two's complement) counterpart, provided they are
         * within the acceptable range.  Any values outside that range will be dealt with afterward.
         */
        if (w < 0 && w >= -PDP10.INT_LIMIT) {
            w += PDP10.WORD_LIMIT;
        }
        var value = Math.trunc(Math.abs(w)) % Math.pow(2, bits);
        if (DEBUG && w !== value) {
            this.printf("validateWord(%o): out of range, truncated to %o\n", w, value);
        }
        return value;
    }

    /**
     * incAddr(dbgAddr, inc)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
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
     * @this {DebuggerPDP10}
     * @param {number|null|undefined} [off]
     * @returns {string} default base representation of off
     */
    toStrOffset(off)
    {
        return this.toStrBase(off, 18);
    }

    /**
     * toStrAddr(dbgAddr)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @returns {string} default base representation of the address
     */
    toStrAddr(dbgAddr)
    {
        return this.toStrOffset(dbgAddr.addr);
    }

    /**
     * toStrWord(w)
     *
     * @this {DebuggerPDP10}
     * @param {number} w (up to, but not including, WORD_LIMIT)
     * @returns {string} octal representation of the 36-bit word, as two 18-bit values
     */
    toStrWord(w)
    {
        /*
         * ADDR_LIMIT is not derived from WORD_LIMIT; we're just taking advantage of the fact
         * that ADDR_LIMIT happens to be exactly half of WORD_LIMIT, and they are both powers of two.
         */
        return this.toStrBase(w / PDP10.ADDR_LIMIT, 18) + ' ' + this.toStrBase(w % PDP10.ADDR_LIMIT, 18);
    }

    /**
     * dumpBlocks(aBlocks, sAddr)
     *
     * @this {DebuggerPDP10}
     * @param {Array} aBlocks
     * @param {string} [sAddr] (optional block address)
     */
    dumpBlocks(aBlocks, sAddr)
    {
        var addr = 0, i = 0, n = aBlocks.length;

        if (sAddr) {
            addr = this.getAddr(this.parseAddr(sAddr, this.dbgAddrData));
            if (addr === PDP10.ADDR_INVALID) {
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
                var sType = MemoryPDP10.TYPE_NAMES[typePrev];
                if (block) {
                    this.printf("%08x  %%08x  %%08x  %#06x  %#06x  %s\n", block.id, i << this.bus.nBlockShift, block.addr, block.used, block.size, sType);
                }
                if (typePrev != MemoryPDP10.TYPE.NONE) typePrev = -1;
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {string|undefined} sEnable contains zero or more message categories to enable, separated by ','
     */
    messageInit(sEnable)
    {
        this.dbg = this;
        this.bitsMessage = this.bitsWarning = MESSAGE.FAULT | MESSAGE.WARNING;
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {string} sReg
     * @param {number} [off] optional offset into sReg
     * @returns {number} register index, or -1 if not found
     */
    getRegIndex(sReg, off)
    {
        return DebuggerPDP10.REGNAMES.indexOf(sReg.toUpperCase());
    }

    /**
     * getRegName(iReg)
     *
     * @this {DebuggerPDP10}
     * @param {number} iReg (0-7; not used for other registers)
     * @returns {string}
     */
    getRegName(iReg)
    {
        return DebuggerPDP10.REGNAMES[iReg] || "";
    }

    /**
     * getRegValue(iReg)
     *
     * @this {DebuggerPDP10}
     * @param {number} iReg
     * @returns {number|undefined}
     */
    getRegValue(iReg)
    {
        var value;
        var cpu = this.cpu;
        switch(iReg) {
        case DebuggerPDP10.REGS.PC:
            value = cpu.getPC();
            break;
        case DebuggerPDP10.REGS.RA:
            value = cpu.regRA;
            break;
        case DebuggerPDP10.REGS.EA:
            value = cpu.regEA;
            break;
        case DebuggerPDP10.REGS.PS:
            value = cpu.getPS();
            break;
        case DebuggerPDP10.REGS.OV:
            value = (cpu.regPS & PDP10.PSFLAG.AROV)? 1 : 0;
            break;
        case DebuggerPDP10.REGS.C0:
            value = (cpu.regPS & PDP10.PSFLAG.CRY0)? 1 : 0;
            break;
        case DebuggerPDP10.REGS.C1:
            value = (cpu.regPS & PDP10.PSFLAG.CRY1)? 1 : 0;
            break;
        case DebuggerPDP10.REGS.BI:
            value = (cpu.regPS & PDP10.PSFLAG.BIS)? 1 : 0;
            break;
        case DebuggerPDP10.REGS.ND:
            value = (cpu.regPS & PDP10.PSFLAG.DCK)? 1 : 0;
            break;
        case DebuggerPDP10.REGS.PD:
            value = (cpu.regPS & PDP10.PSFLAG.PDOV)? 1 : 0;
            break;
        }
        return value;
    }

    /**
     * setRegValue(iReg, value)
     *
     * @this {DebuggerPDP10}
     * @param {number} iReg
     * @param {number} value
     */
    setRegValue(iReg, value)
    {
        var flag = 0;
        var cpu = this.cpu;

        switch(iReg) {
        case DebuggerPDP10.REGS.PC:
            cpu.setPC(value);
            this.setAddr(this.dbgAddrCode, cpu.getPC());
            break;
        case DebuggerPDP10.REGS.PS:
            cpu.setPS(value);
            break;
        case DebuggerPDP10.REGS.OV:
            flag = PDP10.PSFLAG.AROV;
            break;
        case DebuggerPDP10.REGS.C0:
            flag = PDP10.PSFLAG.CRY0;
            break;
        case DebuggerPDP10.REGS.C1:
            flag = PDP10.PSFLAG.CRY1;
            break;
        case DebuggerPDP10.REGS.BI:
            flag = PDP10.PSFLAG.BIS;
            break;
        case DebuggerPDP10.REGS.ND:
            flag = PDP10.PSFLAG.DCK;
            break;
        case DebuggerPDP10.REGS.PD:
            flag = PDP10.PSFLAG.PDOV;
            break;
        }
        if (flag) {
            if (value) {
                cpu.regPS |= flag;
            } else {
                cpu.regPS &= ~flag;
            }
        }
    }

    /**
     * replaceRegs(s)
     *
     * TODO: Implement or eliminate.
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
         * TODO: See CPUPDP10.calcStartTime() for a discussion of why we might want to call yieldCPU() *before*
         * we display the message.
         */
        if (this.cpu) this.cpu.yieldCPU();
    }

    /**
     * init()
     *
     * @this {DebuggerPDP10}
     * @param {boolean} [fAutoStart]
     */
    init(fAutoStart)
    {
        this.fInit = true;
        this.printf("Type ? for help with PDPjs Debugger commands\n");
        this.updateStatus();
        if (!fAutoStart) this.setFocus();
        if (this.sInitCommands) {
            var sCmds = this.sInitCommands;
            this.sInitCommands = null;
            this.doCommands(sCmds, true);
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
     * @this {DebuggerPDP10}
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
            this.aInstructionHistory = new Array(DebuggerPDP10.HISTORY_LIMIT);
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {boolean} [fComplete]
     */
    stopCPU(fComplete)
    {
        if (this.cpu) this.cpu.stopCPU(fComplete);
    }

    /**
     * updateStatus(fRegs, sCmd)
     *
     * @this {DebuggerPDP10}
     * @param {boolean} [fRegs] (default is true)
     * @param {string} [sCmd]
     */
    updateStatus(fRegs = true, sCmd)
    {
        if (!this.fInit) return;

        if (sCmd) {
            this.printf("%s%s\n", DebuggerPDP10.PROMPT, sCmd);
        }

        this.setAddr(this.dbgAddrCode, this.cpu.getPC());

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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {boolean} fQuiet (true only when called from our own powerUp handler)
     */
    reset(fQuiet)
    {
        this.historyInit();
        this.cInstructions = this.cInstructionsStart = 0;
        this.sMessagePrev = null;
        this.nCycles = 0;
        this.setAddr(this.dbgAddrCode, this.cpu.getPC());
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
     * @this {DebuggerPDP10}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        state.set(0, this.packAddr(this.dbgAddrCode));
        state.set(1, this.packAddr(this.dbgAddrData));
        state.set(2, this.packAddr(this.dbgAddrAssemble));
        state.set(3, [this.aPrevCmds, this.fAssemble, this.bitsMessage]);
        state.set(4, this.aSymbolTable);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements (very rudimentary) restore support for the Debugger component.
     *
     * @this {DebuggerPDP10}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        var i = 0;
        if (data[3] !== undefined) {
            this.dbgAddrCode = this.unpackAddr(data[i++]);
            this.dbgAddrData = this.unpackAddr(data[i++]);
            this.dbgAddrAssemble = this.unpackAddr(data[i++]);
            this.aPrevCmds = data[i][0];
            if (typeof this.aPrevCmds == "string") this.aPrevCmds = [this.aPrevCmds];
            this.fAssemble = data[i][1];
            this.bitsMessage |= data[i][2];     // keep our current message bits set, and simply "add" any extra bits defined by the saved state
        }
        if (data[4]) this.aSymbolTable = data[4];
        return true;
    }

    /**
     * start(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has started.
     *
     * @this {DebuggerPDP10}
     * @param {number} ms
     * @param {number} nCycles
     */
    start(ms, nCycles)
    {
        if (!this.nStep) this.printf("running\n");
        this.flags.running = true;
        this.msStart = ms;
        this.nCyclesStart = nCycles;
    }

    /**
     * stop(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has now stopped.
     *
     * @this {DebuggerPDP10}
     * @param {number} ms
     * @param {number} nCycles
     */
    stop(ms, nCycles)
    {
        if (this.flags.running) {
            this.flags.running = false;
            this.nCycles = nCycles - this.nCyclesStart;
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
            opCode = this.cpu.readWord(addr);
            if ((opCode >> PDP10.OPCODE.A_SHIFT) == PDP10.OPCODE.HALT && this.cpu.getLastPC() == addr) {
                addr = this.cpu.advancePC(1);
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
                opCode = this.cpu.readWord(addr);
            }
            if (opCode >= 0) {
                var dbgAddr = this.aInstructionHistory[this.iInstructionHistory];
                this.setAddr(dbgAddr, addr);
                // if (DEBUG) dbgAddr.cycleCount = cpu.getCycles();
                if (++this.iInstructionHistory == this.aInstructionHistory.length) this.iInstructionHistory = 0;
            }
        }
        return false;
    }

    /**
     * findInstruction(opCode, fOperands)
     *
     * @this {DebuggerPDP10}
     * @param {number} opCode
     * @param {boolean} [fOperands] (optional; default is true)
     * @returns {string}
     */
    findInstruction(opCode, fOperands = true)
    {
        var opNum, opMask, aModes, iMode = 0;
        var op = (opCode / PDP10.OPCODE.OP_SCALE)|0;

        for (var mask in DebuggerPDP10.OPTABLE) {
            var opMasks = DebuggerPDP10.OPTABLE[mask];
            opNum = opMasks[op & mask];
            if (opNum) {
                opMask = +mask;
                /*
                 * When we extracted op from opCode using OP_SCALE, we included 6 additional bits
                 * to help distinguish OPIO instructions from non-OPIO instructions.  But for the
                 * following tests, we don't need those bits, so we get rid of them now.
                 */
                op >>= 6;
                switch(opMask) {
                case PDP10.OPCODE.OPMODE:
                    aModes = DebuggerPDP10.OPMODES;
                    iMode = (op & 3);
                    break;
                case PDP10.OPCODE.OPCOMP:
                    aModes = DebuggerPDP10.OPCOMPS;
                    iMode = (op & 7);
                    break;
                case PDP10.OPCODE.OPTEST:
                    aModes = DebuggerPDP10.OPTESTS;
                    iMode = ((op & 0o60) >> 2) | ((op & 0o6) >> 1);
                    break;
                }
                break;
            }
        }

        var sMode = aModes && aModes[iMode] || "";
        if (sMode == "S" && opNum > DebuggerPDP10.OPS.MOVM) sMode = "B";
        var sOperation = DebuggerPDP10.OPNAMES[opNum || 0] + sMode;

        if (!fOperands) {
            if (!opNum) sOperation = "";
        } else {
            if (!opNum) {
                sOperation = StrLib.pad(sOperation, -8) + this.toStrWord(opCode);
            } else {
                var n, sOperand;
                if (opMask == PDP10.OPCODE.OPIO) {
                    n = (opCode / PDP10.OPCODE.IO_SCALE) & PDP10.OPCODE.IO_MASK;
                    sOperand = this.toStrBase(n, -1);
                } else {
                    n = (opCode >> PDP10.OPCODE.A_SHIFT) & PDP10.OPCODE.A_MASK;
                    sOperand = this.toStrBase(n, -1);
                    for (var m = 0; sOperand && m < DebuggerPDP10.ALTOPS.length; m++) {
                        if (opNum == DebuggerPDP10.ALTOPS[m][0]) {
                            var opAlt = DebuggerPDP10.ALTOPS[m][n];
                            if (opAlt) {
                                sOperation = DebuggerPDP10.OPNAMES[opAlt];
                                sOperand = "";
                                break;
                            }
                        }
                    }
                }
                sOperation = StrLib.pad(sOperation, -8) + (sOperand? sOperand + ',' : "");
                if (opCode & PDP10.OPCODE.I_FIELD) sOperation += '@';
                sOperation += this.toStrBase(opCode & PDP10.OPCODE.Y_MASK, -1);
                var i = (opCode >> PDP10.OPCODE.X_SHIFT) & PDP10.OPCODE.X_MASK;
                if (i) sOperation += '(' + this.toStrBase(i, -1) + ')';
            }
        }
        return sOperation;
    }

    /**
     * getInstruction(dbgAddr, sComment, nSequence)
     *
     * Get the next instruction, by decoding the opcode and any operands.
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
     * @param {string} [sComment] is an associated comment
     * @param {number|null} [nSequence] is an associated sequence number, undefined if none
     * @returns {string} (and dbgAddr is updated to the next instruction)
     */
    getInstruction(dbgAddr, sComment, nSequence)
    {
        var dbgAddrOp = this.newAddr(dbgAddr.addr);
        var opCode = this.getWord(dbgAddr, 1);
        var sOperation = this.findInstruction(opCode);

        var sOpcodes = "";
        var sLine = this.toStrAddr(dbgAddrOp) + ":";
        if (dbgAddrOp.addr !== PDP10.ADDR_INVALID && dbgAddr.addr !== PDP10.ADDR_INVALID) {
            do {
                var w = this.getWord(dbgAddrOp, 1);
                sOpcodes += ' ' + this.toStrWord(w);
                if (dbgAddrOp.addr == null) break;
            } while (dbgAddrOp.addr != dbgAddr.addr);
        }

        sLine += StrLib.pad(sOpcodes, -16) + sOperation;

        if (sComment) {
            sLine = StrLib.pad(sLine, -48) + ';' + (sComment || "");
            if (!this.cpu.flags.checksum) {
                sLine += (nSequence != null? '=' + nSequence.toString() : "");
            } else {
                var nCycles = this.cpu.getCycles();
                sLine += "cycles=" + nCycles.toString() + " cs=" + StrLib.toHex(this.cpu.nChecksum);
            }
        }
        return sLine;
    }

    /**
     * parseInstruction(sOpcode, sOperands, addr, aUndefined)
     *
     * @this {DebuggerPDP10}
     * @param {string} sOpcode
     * @param {string} [sOperands]
     * @param {number} [addr] of memory where this instruction is being assembled
     * @param {Array} [aUndefined]
     * @returns {number} (opcode, or -1 if unrecognized instruction)
     */
    parseInstruction(sOpcode, sOperands, addr, aUndefined)
    {
        var opCode = -1;
        var opMask, opNum;

        if (!sOpcode) {
            /*
             * MACRO-10 also allows instructions to be assembled without an opcode (ie, just an address expression),
             * so if that's all we have, skip the opcode parsing.
             */
            if (sOperands) opCode = opMask = 0;
        }
        else {
            var sMnemonic = sOpcode.toUpperCase();
            /*
             * Perform any alternate mnemonic substitutions first
             */
            for (var m = 0; m < DebuggerPDP10.ALTOPS.length; m++) {
                for (var n in DebuggerPDP10.ALTOPS[m]) {
                    if (!+n) continue;
                    opNum = DebuggerPDP10.ALTOPS[m][n];
                    if (sMnemonic == DebuggerPDP10.OPNAMES[opNum]) {
                        sMnemonic = DebuggerPDP10.OPNAMES[DebuggerPDP10.ALTOPS[m][0]];
                        if (sOperands) sOperands = this.toStrBase(+n) + ',' + sOperands;
                        break;
                    }
                }
            }
            for (var mask in DebuggerPDP10.OPTABLE) {

                var aModes;
                opMask = +mask;
                var opMasks = DebuggerPDP10.OPTABLE[mask];

                switch (opMask) {
                case PDP10.OPCODE.OPMODE:
                    aModes = DebuggerPDP10.OPMODES;
                    break;
                case PDP10.OPCODE.OPCOMP:
                    aModes = DebuggerPDP10.OPCOMPS;
                    break;
                case PDP10.OPCODE.OPTEST:
                    aModes = DebuggerPDP10.OPTESTS;
                    break;
                default:
                    aModes = [""];
                    break;
                }
                var opMode = 0;
                for (var op in opMasks) {
                    opNum = opMasks[op];
                    for (var iMode = 0; iMode < aModes.length; iMode++) {

                        var sMode = aModes[iMode];
                        if (sMode == "S" && opNum > DebuggerPDP10.OPS.MOVM) sMode = "B";
                        var sCandidate = DebuggerPDP10.OPNAMES[opNum] + sMode;

                        if (sMnemonic == sCandidate) {
                            if (opMask != PDP10.OPCODE.OPTEST) {
                                opMode = iMode;
                            } else {
                                opMode = ((iMode & 0o3) << 1) | ((iMode & 0o14) << 2);
                            }
                            opCode = (op | (opMode << 6)) * PDP10.OPCODE.OP_SCALE;
                            break;
                        }
                    }
                    if (opCode >= 0) break;
                }
                if (opCode >= 0) break;
            }
            /*
             * MACRO-10 also allows instructions to be assembled without an opcode (ie, just an address expression),
             * so we'll give that a try next (as long as we're not mashing two symbols together).
             */
            if (opCode < 0 && (!sOperands || !sOperands.match(/^[0-9A-Z$%.?]/i))) {
                sOperands = sOpcode + sOperands;
                sOpcode = "";
                opCode = 0;
            }
        }

        if (opCode >= 0) {
            if (sOperands) {

                var aOperands = sOperands.split(',');
                if (aOperands.length > 2) {
                    if (!aUndefined) this.printf("too many operands: %s\n", sOperands);
                    aOperands.length = 0;
                    opCode = -1;
                }

                for (var i = 0; i < aOperands.length; i++) {

                    var operand, sOperand = aOperands[i].trim();
                    if (!sOperand) continue;

                    var match = sOperand.match(/(@?)([^(]*)\(?([^)]*)\)?/);
                    if (!match) {
                        if (!aUndefined) this.printf("unknown operand: %s\n", sOperand);
                        opCode = -1;
                        break;
                    }

                    /*
                     * If the operand contains an indirection operator (@) and/or index register (X), we parse those
                     * first and update the indirect (I) bit and index (X) bits as appropriate.  The order is important,
                     * because if we parse them AFTER parsing the address expression, we might lose an undefined symbol
                     * indication, and if the caller needs to handle address fixups, that would be bad.
                     */
                    if (match[1]) opCode += PDP10.OPCODE.I_FIELD;

                    sOperand = match[3];
                    if (sOperand) {
                        operand = this.parseExpression(sOperand, aUndefined);
                        if (operand == undefined) {
                            opCode = -1;
                            break;
                        }
                        /*
                         * Here's a fun tidbit from the April 1978 MACRO-10 manual, p. 4-5:
                         *
                         *      NOTE: To assemble the index, MACRO places the index register address in a fullword of storage,
                         *      swaps its halfwords, and then adds the swapped word to the instruction word.
                         *
                         * Which means that an instruction like this (where AC is zero):
                         *
                         *        8839  037653  205 00 0 00 400000      MOVSI   AC,(1B<^O<AC>>) ;INITIALIZE AC
                         *
                         * produces an instruction that does NOT use indexing at all, even though it is coded as such.  So my
                         * simplistic masking of the index operand with PDP10.OPCODE.X_MASK, while logical, was completely wrong:
                         *
                         *      if (operand < 0 || operand > PDP10.OPCODE.X_MASK) {
                         *          operand &= PDP10.OPCODE.X_MASK;
                         *          if (MAXDEBUG) this.printf("index (%s) truncated to %s\n", sOperand, this.toStrBase(operand));
                         *      }
                         *      opCode += operand << PDP10.OPCODE.X_SHIFT;
                         */
                        operand = PDP10.SWAP(this.truncate(operand, 36, true));
                        opCode += operand;
                    }

                    sOperand = match[2];
                    if (i || aOperands.length == 1) {
                        /*
                         * If this is NOT the first operand, replace all periods NOT preceded by a digit with the current address.
                         */
                        if (!sOperand) {
                            sOperand = "0";
                        } else {
                            sOperand = sOperand.replace(/(^|[^0-9])\./g, "$1" + this.toStrOffset(addr));
                        }
                    }

                    operand = this.parseExpression(sOperand, aUndefined);
                    if (operand == undefined) {
                        opCode = -1;
                        break;
                    }

                    if (!i && aOperands.length > 1) {
                        if (opMask == PDP10.OPCODE.OPIO) {
                            if (operand < 0 || operand > PDP10.OPCODE.IO_MASK) {
                                operand &= PDP10.OPCODE.IO_MASK;
                                if (MAXDEBUG) this.printf("device code (%s) truncated to %s\n", sOperand, this.toStrBase(operand));
                            }
                            opCode += (operand * PDP10.OPCODE.IO_SCALE);
                        }
                        else {
                            if (operand < 0 || operand > PDP10.OPCODE.A_MASK) {
                                operand &= PDP10.OPCODE.A_MASK;
                                if (MAXDEBUG) this.printf("accumulator (%s) truncated to %s\n", sOperand, this.toStrBase(operand));
                            }
                            opCode += (operand << PDP10.OPCODE.A_SHIFT);
                        }
                        continue;
                    }

                    /*
                     * I came across what I believe is a typo in the DEC "DAKAC" diagnostic:
                     *
                     *      CAME    [0,-1]      ;PASS TEST IF C(AC)=0,,-1
                     *
                     * Based on the comment, it's clear what they really meant was either "[0,,-1]" or "[XWD 0,-1]".
                     * However, they still got the desired result, which means when the assembler parses an mnemonic-less
                     * instruction like "0,-1", it must truncate the second (address) operand.
                     *
                     * TODO: Determine if I should ALWAYS truncate.  I'm trying to retain the flexibility of allowing
                     * a full 36-bit instruction to be encoded with a single numeric expression (ie, one operand).
                     */
                    if (sOpcode || i) {
                        if (operand < 0 || operand > PDP10.OPCODE.Y_MASK) {
                            operand &= PDP10.ADDR_MASK;
                            if (MAXDEBUG) this.printf("address (%s) truncated to %s\n", sOperand, this.toStrBase(operand));
                        }
                    }
                    opCode += operand;
                }
            }
            //
            // TODO: Complain about missing operands only if we know the instruction requires them.
            //
            // else {
            //     this.printf("missing operand(s)\n");
            //     opCode = -1;
            // }
        }

        if (opCode < 0 && !aUndefined) {
            this.printf("unknown instruction: %s %s\n", sOpcode, sOperands);
        }

        return opCode;
    }

    /**
     * stopInstruction(sMessage)
     *
     * TODO: Currently, the only way to prevent this call from stopping the CPU is when you're single-stepping.
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     */
    clearBreakpoints()
    {
        var i, dbgAddr, addr;
        this.aBreakExec = ["bp"];
        if (this.aBreakRead !== undefined) {
            for (i = 1; i < this.aBreakRead.length; i++) {
                dbgAddr = this.aBreakRead[i];
                addr = this.getAddr(dbgAddr);
                this.bus.removeMemBreak(addr, false);
            }
        }
        this.aBreakRead = ["br"];
        if (this.aBreakWrite !== undefined) {
            for (i = 1; i < this.aBreakWrite.length; i++) {
                dbgAddr = this.aBreakWrite[i];
                addr = this.getAddr(dbgAddr);
                this.bus.removeMemBreak(addr, true);
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
     * @this {DebuggerPDP10}
     * @param {Array} aBreak
     * @param {DbgAddrPDP10} dbgAddr
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
            if (addr === PDP10.ADDR_INVALID) {
                this.printf("invalid address: %s\n", this.toStrAddr(dbgAddr));
                fSuccess = false;
            } else {
                var fWrite = (aBreak == this.aBreakWrite);
                this.bus.addMemBreak(addr, fWrite);
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
     * @this {DebuggerPDP10}
     * @param {Array} aBreak
     * @param {DbgAddrPDP10} dbgAddr
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
                            this.bus.removeMemBreak(addr, fWrite);
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {Array} aBreak
     * @param {number} i
     * @param {string} [sAction]
     */
    printBreakpoint(aBreak, i, sAction)
    {
        var dbgAddr = aBreak[i];
        this.printf("%d %s%d\n", aBreak[0], this.toStrAddr(dbgAddr), (sAction? (' ' + sAction) : (dbgAddr.sCmd? (' "' + dbgAddr.sCmd + '"') : '')));
    }

    /**
     * setTempBreakpoint(dbgAddr)
     *
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr of new temp breakpoint
     */
    setTempBreakpoint(dbgAddr)
    {
        this.addBreakpoint(this.aBreakExec, dbgAddr, true);
    }

    /**
     * clearTempBreakpoint(addr)
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * getAccOutput(iAcc)
     *
     * @this {DebuggerPDP10}
     * @param {number} iAcc
     * @returns {string}
     */
    getAccOutput(iAcc)
    {
        var sReg = StrLib.toOct(iAcc, 2);
        this.setAddr(this.dbgAddrAcc, iAcc);
        sReg += '=' + this.toStrBase(this.getWord(this.dbgAddrAcc), 36) + ' ';
        return sReg;
    }

    /**
     * getRegOutput(iReg)
     *
     * @this {DebuggerPDP10}
     * @param {number} iReg
     * @returns {string}
     */
    getRegOutput(iReg)
    {
        var sReg = this.getRegName(iReg);
        if (sReg) {
            var nBits = (iReg >= DebuggerPDP10.REGS.OV? 1 : (iReg == DebuggerPDP10.REGS.RA? 23 : 18));
            sReg += '=' + this.toStrBase(this.getRegValue(iReg), nBits) + ' ';
        }
        return sReg;
    }

    /**
     * getMiscDump()
     *
     * @this {DebuggerPDP10}
     * @returns {string}
     */
    getMiscDump()
    {
        var sDump = "";
        for (var i = 0; i < DebuggerPDP10.REGNAMES.length; i++) {
            sDump += this.getRegOutput(i);
        }
        return sDump;
    }

    /**
     * getRegDump(fMisc)
     *
     * For now, fMisc defaults to true, providing a full register dump by default.
     *
     * @this {DebuggerPDP10}
     * @param {boolean|undefined} [fMisc] (true to include misc registers)
     * @returns {string}
     */
    getRegDump(fMisc = true)
    {
        var sDump = "";
        for (var i = 0; i < 16; i++) {
            if (i && !(i & 3)) sDump += '\n';
            sDump += this.getAccOutput(i);
        }
        if (fMisc) sDump += '\n' + this.getMiscDump();
        return sDump;
    }

    /**
     * comparePairs(p1, p2)
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
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
     * @this {DebuggerPDP10}
     * @param {string} sSymbol
     * @returns {DbgAddrPDP10|undefined}
     */
    findSymbolAddr(sSymbol)
    {
        var dbgAddr, offSymbol;

        if (sSymbol.match(/^[a-z_][a-z0-9_]*$/i)) {
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
     * loadImage(aWords, addrStart)
     *
     * @this {DebuggerPDP10}
     * @param {Array.<number>} aWords
     * @param {number|null|undefined} addrStart
     */
    loadImage(aWords, addrStart)
    {
        var bus = this.bus;
        var dbg = this.dbg;
        var nWords = 0, addrLo = null, addrHi = 0;
        aWords.forEach(function(w, addr) {
            bus.setWord(addr, w);
            if (addrLo == null) addrLo = addr;
            if (addr > addrHi) addrHi = addr;
            nWords++;
        });
        if (!nWords) {
            this.printf("no data\n");
        } else {
            var sStart = "start address ";
            if (addrStart != null) {
                this.cpu.setPC(addrStart);
                sStart += this.toStrBase(addrStart);
            } else {
                sStart += "unspecified";
            }
            this.printf("%d words loaded at %s-%s, %s\n", nWords, this.toStrBase(addrLo), this.toStrBase(addrHi), sStart);
            this.updateStatus();
        }
    }

    /**
     * returnSymbol(iTable, iOffset, aSymbol)
     *
     * Helper function for findSymbol().
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     */
    doHelp()
    {
        var s = "commands:";
        for (var sCommand in DebuggerPDP10.COMMANDS) {
            s += '\n' + StrLib.pad(sCommand, -9) + DebuggerPDP10.COMMANDS[sCommand];
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
     *      [2]: the opcode mnemonic (eg, "hrli")
     *      [3]: the operands, if any
     *
     * The Debugger enters "assemble mode" whenever only the first (or first and second) arguments are present.
     * As long as "assemble mode is active, the user can omit the first two arguments on all later assemble commands
     * until "assemble mode" is cancelled with an empty command line; the command processor automatically prepends "a"
     * and the next available target address to the argument array.
     *
     * Entering "assemble mode" is optional; one could enter a series of fully-qualified assemble commands; eg:
     *
     *      a 100 hrli 1,111111
     *      a 101 hrri 1,444444
     *      ...
     *
     * without ever entering "assemble mode", but of course, that requires more typing and doesn't take advantage
     * of automatic target address advancement (see dbgAddrAssemble).
     *
     * When filename(s) or URL(s) are provided in lieu of an opcode, we pass those on to the Macro10 component for
     * assembling (multiple files must be separated by semicolons), along with any option letters that were included
     * with the "a" command; for example, if "ap" was specified, then "p" will be passed to Macro10 as an option.
     *
     * See the Macro10 component for a list of supported options.
     *
     * When assembling a file, the target address determines the initial location counter for the assembly process,
     * but that can always be overridden by a LOC (or RELOC) pseudo-op in the file.  The target address will also be
     * used as the starting address unless that's overridden by an END pseudo-op.  In the absence of a target address,
     * the location counter starts at zero, and the starting address defaults to the PC register.
     *
     * @this {DebuggerPDP10}
     * @param {Array.<string>} asArgs is the complete argument array, beginning with the "a" command in asArgs[0]
     * @returns {boolean}
     */
    doAssemble(asArgs)
    {
        var sOptions = asArgs[0].substr(1);
        var sAddr = asArgs[1] && asArgs[1][0] >= '0' && asArgs[1][0] <= '9'? asArgs[1] : undefined;
        var sOpcode = sAddr? asArgs[2] : asArgs[1];
        var dbgAddr = this.parseAddr(sAddr, this.dbgAddrAssemble);

        if (!sOpcode) {
            this.printf("begin assemble at %s\n", this.toStrAddr(dbgAddr));
            this.fAssemble = true;
            this.cmp.updateDisplays();
            return true;
        }

        var match = sOpcode.match(/^(['"]?)(.*?)(\.klm|\.mac|\.html|\.txt|)\1$/i);
        if (match && (match[1] || match[3])) {
            var dbg = this;
            var cpu = this.cpu;
            dbgAddr = this.parseAddr(sAddr);
            if (this.macro10) {
                dbg.printf("assembly already in progress\n");
            }
            else {
                var sFile = match[2] + match[3];
                if (!match[3]) sOptions += 's';
                var addrLoad = dbgAddr.addr;
                var macro10 = this.macro10 = new Macro10(dbg);
                macro10.assembleFiles(sFile, addrLoad, sOptions, function doneMacro10(nErrorCode, sURL) {
                    if (!nErrorCode) {
                        /*
                         * NOTE: Most Debugger operations run in the context of doCommand(), which catches any exceptions;
                         * however, this callback may be running in a different context (eg, a network request callback), so
                         * better safe than sorry.
                         */
                        try {
                            var addrStart = macro10.getStart();
                            if (addrStart == null) addrStart = addrLoad;
                            dbg.loadImage(macro10.getImage(), addrStart);
                        } catch(e) {
                            if (typeof e == "number") {
                                nErrorCode = e || -1;
                            } else {
                                dbg.printf("%s\n", e.message);
                                nErrorCode = -1;        // fake error so that command processing stops
                            }
                        }
                    }
                    if (nErrorCode) {
                        dbg.printf("error (%d) processing %s\n", nErrorCode, (sURL || sFile));
                    }
                    dbg.macro10 = null;
                    if (!nErrorCode) dbg.doCommands();
                });
            }
            return false;
        }

        asArgs.shift();
        asArgs.shift();
        asArgs.shift();
        var sOperands = asArgs.join("");
        var opCode = this.parseInstruction(sOpcode, sOperands, dbgAddr.addr || 0);

        if (opCode >= 0) {
            this.setWord(dbgAddr, opCode);
            this.printf("%s\n", this.getInstruction(dbgAddr));
        }
        return true;
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
     * @this {DebuggerPDP10}
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

        var dbgAddr = sAddr == '*'? this.newAddr() : this.parseAddr(sAddr, this.dbgAddrCode);

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
     * @this {DebuggerPDP10}
     * @param {string} [sCmd] (eg, "cls" or "clear")
     */
    doClear(sCmd)
    {
        this.cmp.clearPanel();
    }

    /**
     * doDump(asArgs)
     *
     * @this {DebuggerPDP10}
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
                    sDumpers = sDumpers + m;
                }
            }
            sDumpers += ",state,symbols";
            this.printf("dump memory commands:\n");
            this.printf("\tdw [a] [n]    dump n words at address a\n");
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

        var len = 0;
        var fJSON = (sCmd == "ds");
        var dbgAddr = this.parseAddr(sAddr, this.dbgAddrData);

        if (sLen) {
            if (sLen.charAt(0) == 'l') {
                sLen = sLen.substr(1) || sBytes;
                len = this.parseValue(sLen);
            }
            else {
                var dbgAddrEnd = this.parseAddr(sLen);
                len = dbgAddrEnd.addr - dbgAddr.addr;
            }
            if (len < 0) len = 0;
            if (len > 0x10000) len = 0x10000;
        }

        var nBase = this.nBase;
        if (dbgAddr.nBase) this.nBase = dbgAddr.nBase;

        var size = (sCmd == "db"? 1 : 2);
        var nWords = len || 32;
        var nWordsPerLine = (size == 1? 1 : 4);
        var nLines = (((nWords + nWordsPerLine - 1) / nWordsPerLine)|0) || 1;

        var sDump = "";
        while (nLines-- && nWords > 0) {
            var sData = "", sChars = "";
            sAddr = this.toStrAddr(dbgAddr);
            var n = nWordsPerLine;
            while (n-- > 0 && nWords-- > 0) {
                var w = this.getWord(dbgAddr, 1);
                if (fJSON) {
                    if (sData) sData += ',';
                    sData += w;
                } else {
                    sData += this.toStrWord(w);
                    sData += '  ';
                }
                /*
                 * TODO: Provide some UI for choosing whether to dump SIXBIT or ASCII data.
                 */
                var nBits = 7;
                var shift = 36 - nBits;
                for (var i = 0; size == 1 && shift >= 0; i++) {
                    var c = ((w / Math.pow(2, shift)) % Math.pow(2, nBits));
                    sData += this.toStrBase(c, nBits) + ' ';
                    c += (nBits == 6? 0x20 : 0);
                    sChars += (c < 0x20? '.' : String.fromCharCode(c));
                    shift -= nBits;
                }
            }
            if (sDump) sDump += "\n";
            if (fJSON) {
                sDump += sData + ",";
            } else {
                sDump += sAddr + ": " + sData + ((n < 0)? (' ' + sChars) : "");
            }
        }

        if (sDump) this.printf("%s\n", sDump);

        this.nBase = nBase;
    }

    /**
     * doEdit(asArgs)
     *
     * @this {DebuggerPDP10}
     * @param {Array.<string>} asArgs
     */
    doEdit(asArgs)
    {
        var fnGet, fnSet;
        var sCmd = asArgs[0];
        var sAddr = asArgs[1];
        if (sCmd == "e" || sCmd == "ew") {
            fnGet = this.getWord;
            fnSet = this.setWord;
        } else {
            sAddr = null;
        }
        if (sAddr == null) {
            this.printf("edit memory commands:\n");
            this.printf("\tew [a] [...]  edit words at address a\n");
            return;
        }
        var dbgAddr = this.parseAddr(sAddr, this.dbgAddrData);
        for (var i = 2; i < asArgs.length; i++) {
            var w = this.parseExpression(asArgs[i]);
            if (w === undefined) break;
            w = this.validateWord(w);
            this.printf("changing %s from %s to %s\n", this.toStrAddr(dbgAddr), this.toStrWord(fnGet.call(this, dbgAddr)), this.toStrWord(w));
            fnSet.call(this, dbgAddr, w, 1);
        }
    }

    /**
     * doHalt(fQuiet)
     *
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
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
        this.printf("invalid assignment:%s\n", sCmd);
        return false;
    }

    /**
     * doList(sAddr, fPrint)
     *
     * @this {DebuggerPDP10}
     * @param {string} sAddr
     * @param {boolean} [fPrint]
     * @returns {string|null}
     */
    doList(sAddr, fPrint)
    {
        var sSymbol = null;

        var dbgAddr = this.parseAddr(sAddr);
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
        return sSymbol;
    }

    /**
     * doMessages(asArgs)
     *
     * @this {DebuggerPDP10}
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
                bitsMessage = (0xffffffff|0) & ~(MESSAGE.HALT | MESSAGE.KEYS | MESSAGE.LOG);
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
     * @this {DebuggerPDP10}
     * @param {Array.<string>} asArgs
     */
    doOptions(asArgs)
    {
        switch (asArgs[1]) {

        case "base":
            if (asArgs[2]) {
                var nBase = +asArgs[2];
                if (nBase == 2 || nBase == 8 || nBase == 10 || nBase == 16) {
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
     * @this {DebuggerPDP10}
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

        var cpu = this.cpu;
        var fMisc = undefined;
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

                var value = this.parseExpression(sValue);
                if (value === undefined) return;

                var iReg = this.getRegIndex(sReg);
                if (iReg < 0) {
                    this.printf("unknown register: %s\n", sReg);
                    return;
                }

                this.setRegValue(iReg, value);

                this.cmp.updateDisplays();
                this.printf("updated registers:\n");
            }
        }

        this.printf("%s\n", this.getRegDump(fMisc));

        if (fInstruction) {
            this.setAddr(this.dbgAddrCode, cpu.getXC());
            this.doUnassemble(this.toStrAddr(this.dbgAddrCode));
        }
    }

    /**
     * doRun(sCmd, sAddr, sOptions, fQuiet)
     *
     * @this {DebuggerPDP10}
     * @param {string} sCmd
     * @param {string|undefined} [sAddr]
     * @param {string} [sOptions] (the rest of the breakpoint command-line)
     * @param {boolean} [fQuiet]
     */
    doRun(sCmd, sAddr, sOptions, fQuiet)
    {
        if (sAddr !== undefined) {
            var dbgAddr = this.parseAddr(sAddr);
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {string} [sCmd] "p" or "pr"
     * @param {string} [sOption]
     */
    doStep(sCmd, sOption)
    {
        var fCallStep = true;
        var nRegs = (sCmd == "p"? 0 : (sCmd == "pr"? 1 : -1));

        if (sOption == '?' || nRegs < 0) {
            this.printf("step commands:\n");
            this.printf("\tp\tstep over instruction\n");
            this.printf("\tpr\tstep over instruction with register update\n");
            return;
        }

        /*
         * Set up the value for this.nStep (ie, 1 or 2) depending on whether the user wants
         * a subsequent register dump ("pr") or not ("p").
         */
        var nStep = 1 + nRegs;

        if (!this.nStep) {
            var dbgAddr = this.newAddr(this.cpu.getPC());
            var opCode = this.getWord(dbgAddr);

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
     * @this {DebuggerPDP10}
     * @param {DbgAddrPDP10} dbgAddr
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
     * @this {DebuggerPDP10}
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
        var dbgAddrStack = this.newAddr(/*this.cpu.getSP()*/);
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
     * @this {DebuggerPDP10}
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
     * @this {DebuggerPDP10}
     * @param {string} [sAddr]
     * @param {string} [sAddrEnd]
     * @param {number} [nLines]
     */
    doUnassemble(sAddr, sAddrEnd, nLines)
    {
        var dbgAddr = this.parseAddr(sAddr, this.dbgAddrCode);

        if (nLines === undefined) nLines = 1;

        var nBytes = 0x100;
        if (sAddrEnd !== undefined) {

            if (sAddrEnd.charAt(0) == 'l') {
                var n = this.parseValue(sAddrEnd.substr(1));
                if (n != null) nLines = n;
            }
            else {
                var dbgAddrEnd = this.parseAddr(sAddrEnd);
                if (dbgAddrEnd.addr < dbgAddr.addr) return;

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
            this.copyAddr(this.dbgAddrAssemble, dbgAddr);
            this.printf("%s\n", this.getInstruction(dbgAddr, sComment, nSequence));
            nBytes -= dbgAddr.addr - addr;
            nPrinted++;
        }
    }

    /**
     * splitArgs(sCmd, sDelim)
     *
     * @this {DebuggerPDP10}
     * @param {string} sCmd
     * @param {string} [sDelim]
     * @returns {Array.<string>}
     */
    splitArgs(sCmd, sDelim = " ")
    {
        var asArgs = [];
        var chQuote = "";
        var i = 0, iLast = 0;

        while (i < sCmd.length) {
            var ch = sCmd[i++];
            if (chQuote) {
                if (ch == chQuote) {
                    chQuote = "";
                    asArgs.push(sCmd.substr(iLast, i - iLast));
                    iLast = i;
                }
                continue;
            }
            if (ch == '"' || ch == "'") {
                chQuote = ch;
                continue;
            }
            if (sDelim.indexOf(ch) >= 0) {
                asArgs.push(sCmd.substr(iLast, i - iLast - 1));
                iLast = i;
            }
        }
        if (iLast < i) {
            asArgs.push(sCmd.substr(iLast, i - iLast));
        }

        asArgs[0] = asArgs[0].toLowerCase();
        if (asArgs && asArgs.length) {
            var s0 = asArgs[0];
            var ch0 = s0.charAt(0);
            for (i = 1; i < s0.length; i++) {
                ch = s0.charAt(i);
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
     * @this {DebuggerPDP10}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if command processed, false if unrecognized
     */
    doCommand(sCmd, fQuiet)
    {
        var result = true;

        try {
            if (DEBUG && sCmd == "test") {
                this.doTest();
                return true;
            }
            if (!sCmd.length || sCmd == "end") {
                if (this.fAssemble) {
                    this.printf("ended assemble at %s\n", this.toStrAddr(this.dbgAddrAssemble));
                    this.fAssemble = false;
                }
                sCmd = "";
            }
            else if (!fQuiet) {
                this.printf("%s%s\n", DebuggerPDP10.PROMPT, sCmd);
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
                    result = this.doAssemble(asArgs);
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
                        this.printf("%s version %s (%s%s)\n", (APPNAME || "PDP10"), APPVERSION, this.cpu.model, (COMPILED? ",RELEASE" : (DEBUG? ",DEBUG" : ",NODEBUG")));
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
            this.printf("Debugger %s\n", (e.stack || e.message));
            result = false;
        }
        return result;
    }

    /**
     * doCommands(sCmds, fSave)
     *
     * This function is now written so that if any async command, such as assemble ('a'), stopped the
     * flow of commands by returning false, it can call us from its callback handler with no arguments,
     * and command processing should continue where it left off.
     *
     * @this {DebuggerPDP10}
     * @param {string} [sCmds]
     * @param {boolean} [fSave]
     * @returns {boolean} true if all commands processed, false if not
     */
    doCommands(sCmds, fSave)
    {
        if (sCmds != null) {
            this.aCommands = this.parseCommand(sCmds, fSave);
        }
        var sCmd;
        while ((sCmd = this.aCommands.shift())) {
            if (!this.doCommand(sCmd)) return false;
        }
        return true;
    }

    /**
     * doTest()
     *
     * This function exercises the disassembler by performing look-ups for all possible operation codes
     * and displaying the results.  It's not intended to be included in the compiled version of the Debugger
     * (DEBUG only).
     *
     * @this {DebuggerPDP10}
     */
    doTest()
    {
        if (MAXDEBUG) {
            var ops = {}, aOpXXX = [];
            var op, opXXX, opCode, sOperation;
            for (op = 0o00000; op <= 0o77774; op += 4) {
                opCode = op * Math.pow(2, 21);
                sOperation = this.findInstruction(opCode, false);
                if (!sOperation) continue;
                if (ops[sOperation] === undefined) {
                    ops[sOperation] = op;
                } else {
                    ops[sOperation] &= op;
                }
                opXXX = op >> 6;
                if (!aOpXXX[opXXX]) {
                    aOpXXX[opXXX] = sOperation;
                } else if (aOpXXX[opXXX] != sOperation) {
                    aOpXXX[opXXX] = "XXX";
                }
            }
            for (sOperation in ops) {
                op = ops[sOperation];
                this.printf("%s%s\n", StrLib.pad(sOperation + ":", -8), this.toStrWord(op * Math.pow(2, 21)));
                //
                // The following code leveraged the disassembler to generate opcode handlers.
                //
                // this.printf("/**\n");
                // this.printf(" * op%s(%s)\n", sOperation, this.toStrWord(op * Math.pow(2, 21)));
                // this.printf(" *\n");
                // this.printf(" * @this {CPUStatePDP10}\n");
                // this.printf(" * @param {number} opCode\n");
                // this.printf(" */\n");
                // this.printf("PDP10.op%s = function(opCode)\n", sOperation);
                // this.printf("{\n");
                // this.printf("%s\n", "    this.opUndefined(op);");
                // this.printf("};\n\n");
            }
            //
            // The following code generated an opcode dispatch table.
            //
            // this.printf("PDP10.aOpXXX = [\n");
            // for (opXXX = 0o000; opXXX <= 0o777; opXXX++) {
            //     sOperation = aOpXXX[opXXX];
            //     sOperation = sOperation? ("    PDP10.op" + sOperation + ",") : "    PDP10.opUndefined,";
            //     sOperation = StrLib.pad(sOperation, -32);
            //     sOperation += "// " + StrLib.toOct(opXXX, 3, true) + "xxx";
            //     this.printf("%s\n", sOperation);
            // }
            // this.printf("];\n");
        }
    }

    /**
     * DebuggerPDP10.init()
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
            var dbg = new DebuggerPDP10(parmsDbg);
            Component.bindComponentControls(dbg, eDbg, APPCLASS);
        }
    }
}

if (DEBUGGER) {

    /*
     * NOTE: Every DebuggerPDP10 property from here to the first prototype function definition (initBus()) is
     * considered a "class constant"; most of them use our "all-caps" convention (and all of them SHOULD, but
     * that wouldn't help us catch any bugs).
     *
     * Technically, all of them should ALSO be preceded by a "@const" annotation, but that's a lot of work and it
     * really clutters the code.  I wish the Closure Compiler had a way to annotate every definition with a given
     * section with a single annotation....
     */

    DebuggerPDP10.COMMANDS = {
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
     */
    DebuggerPDP10.OPS = {
        NONE:   0,
        HLL:    1,      HLLZ:   2,      HLLO:   3,      HLLE:   4,
        HRL:    5,      HRLZ:   6,      HRLO:   7,      HRLE:   8,
        HRR:    9,      HRRZ:   10,     HRRO:   11,     HRRE:   12,
        HLR:    13,     HLRZ:   14,     HLRO:   15,     HLRE:   16,
        MOVE:   17,     MOVS:   18,     MOVN:   19,     MOVM:   20,
        EXCH:   21,     BLT:    22,     PUSH:   23,     POP:    24,
        LDB:    25,     DPB:    26,     IBP:    27,     ILDB:   28,
        IDPB:   29,     SETZ:   30,     SETO:   31,     SETA:   32,
        SETCA:  33,     SETM:   34,     SETCM:  35,     AND:    36,
        ANDCA:  37,     ANDCM:  38,     ANDCB:  39,     IOR:    40,
        ORCA:   41,     ORCM:   42,     ORCB:   43,     XOR:    44,
        EQV:    45,     LSH:    46,     LSHC:   47,     ROT:    48,
        ROTC:   49,     ADD:    50,     SUB:    51,     MUL:    52,
        IMUL:   53,     DIV:    54,     IDIV:   55,     ASH:    56,
        ASHC:   57,     FSC:    58,     FADR:   59,     FSBR:   60,
        FMPR:   61,     FDVR:   62,     DFN:    63,     UFA:    64,
        FAD:    65,     FSB:    66,     FMP:    67,     FDV:    68,
        AOBJP:  69,     AOBJN:  70,     CAI:    71,     CAM:    72,
        JUMP:   73,     SKIP:   74,     AOJ:    75,     AOS:    76,
        SOJ:    77,     SOS:    78,     TR:     79,     TL:     80,
        TD:     81,     TS:     82,     XCT:    83,     JFFO:   84,
        JFCL:   85,     JSR:    86,     JSP:    87,     JRST:   88,
        JSA:    89,     JRA:    90,     PUSHJ:  91,     POPJ:   92,
        BLKI:   93,     DATAI:  94,     BLKO:   95,     DATAO:  96,
        CONO:   97,     CONI:   98,     CONSZ:  99,     CONSO:  100,
        UUO:    101,    JOV:    102,    JCRY0:  103,    JCRY1:  104,
        JCRY:   105,    JFOV:   106,    HALT:   107,    JRSTF:  108,
        JEN:    109
    };

    /*
     * CPU opcode names, indexed by CPU opcode ordinal (above)
     */
    DebuggerPDP10.OPNAMES = [
        ".WORD",
        "HLL",          "HLLZ",         "HLLO",         "HLLE",
        "HRL",          "HRLZ",         "HRLO",         "HRLE",
        "HRR",          "HRRZ",         "HRRO",         "HRRE",
        "HLR",          "HLRZ",         "HLRO",         "HLRE",
        "MOVE",         "MOVS",         "MOVN",         "MOVM",
        "EXCH",         "BLT",          "PUSH",         "POP",
        "LDB",          "DPB",          "IBP",          "ILDB",
        "IDPB",         "SETZ",         "SETO",         "SETA",
        "SETCA",        "SETM",         "SETCM",        "AND",
        "ANDCA",        "ANDCM",        "ANDCB",        "IOR",
        "ORCA",         "ORCM",         "ORCB",         "XOR",
        "EQV",          "LSH",          "LSHC",         "ROT",
        "ROTC",         "ADD",          "SUB",          "MUL",
        "IMUL",         "DIV",          "IDIV",         "ASH",
        "ASHC",         "FSC",          "FADR",         "FSBR",
        "FMPR",         "FDVR",         "DFN",          "UFA",
        "FAD",          "FSB",          "FMP",          "FDV",
        "AOBJP",        "AOBJN",        "CAI",          "CAM",
        "JUMP",         "SKIP",         "AOJ",          "AOS",
        "SOJ",          "SOS",          "TR",           "TL",
        "TD",           "TS",           "XCT",          "JFFO",
        "JFCL",         "JSR",          "JSP",          "JRST",
        "JSA",          "JRA",          "PUSHJ",        "POPJ",
        "BLKI",         "DATAI",        "BLKO",         "DATAO",
        "CONO",         "CONI",         "CONSZ",        "CONSO",
        "UUO",          "JOV",          "JCRY0",        "JCRY1",
        "JCRY",         "JFOV",         "HALT",         'JRSTF',
        "JEN"
    ];

    DebuggerPDP10.REGS = {
        PC:     0,
        RA:     1,
        EA:     2,
        PS:     3,
        OV:     4,                              // single-bit "register" representing the Overflow flag
        C0:     5,                              // single-bit "register" representing the Carry 0 flag
        C1:     6,                              // single-bit "register" representing the Carry 1 flag
        BI:     7,                              // single-bit "register" representing the Byte Interrupt flag
        ND:     8,                              // single-bit "register" representing the No Divide flag
        PD:     9,                              // single-bit "register" representing the Pushdown Overflow flag
    };

    DebuggerPDP10.REGNAMES = [
        "PC", "RA", "EA", "PS", "OV", "C0", "C1", "BI", "ND", "PD"
    ];

    /*
     * OPTABLE is a collection of masks, and each mask refers to a collection of opcode
     * patterns associated with that mask; the disassembler applies each mask to the opcode,
     * and when a masked opcode matches one of the associated patterns, the corresponding
     * instruction is considered a match.
     */
    DebuggerPDP10.OPTABLE = {
        [PDP10.OPCODE.OPUUO]: {                 // 0o70000
            0o00000: DebuggerPDP10.OPS.UUO
        },
        [PDP10.OPCODE.OPMASK]: {                // 0o77700
            0o13000: DebuggerPDP10.OPS.UFA,
            0o13100: DebuggerPDP10.OPS.DFN,
            0o13200: DebuggerPDP10.OPS.FSC,
            0o13300: DebuggerPDP10.OPS.IBP,
            0o13400: DebuggerPDP10.OPS.ILDB,
            0o13500: DebuggerPDP10.OPS.LDB,
            0o13600: DebuggerPDP10.OPS.IDPB,
            0o13700: DebuggerPDP10.OPS.DPB,
            0o24000: DebuggerPDP10.OPS.ASH,
            0o24100: DebuggerPDP10.OPS.ROT,
            0o24200: DebuggerPDP10.OPS.LSH,
            0o24300: DebuggerPDP10.OPS.JFFO,
            0o24400: DebuggerPDP10.OPS.ASHC,
            0o24500: DebuggerPDP10.OPS.ROTC,
            0o24600: DebuggerPDP10.OPS.LSHC,
            0o25000: DebuggerPDP10.OPS.EXCH,
            0o25100: DebuggerPDP10.OPS.BLT,
            0o25200: DebuggerPDP10.OPS.AOBJP,
            0o25300: DebuggerPDP10.OPS.AOBJN,
            0o25400: DebuggerPDP10.OPS.JRST,    // includes HALT, JRSTF, and JEN
            0o25500: DebuggerPDP10.OPS.JFCL,    // includes JOV, JCRY0, JCRY1, JCRY, and JFOV
            0o25600: DebuggerPDP10.OPS.XCT,
            0o26000: DebuggerPDP10.OPS.PUSHJ,
            0o26100: DebuggerPDP10.OPS.PUSH,
            0o26200: DebuggerPDP10.OPS.POP,
            0o26300: DebuggerPDP10.OPS.POPJ,
            0o26400: DebuggerPDP10.OPS.JSR,
            0o26500: DebuggerPDP10.OPS.JSP,
            0o26600: DebuggerPDP10.OPS.JSA,
            0o26700: DebuggerPDP10.OPS.JRA,
        },
        [PDP10.OPCODE.OPMODE]: {                // 0o77400
            0o14000: DebuggerPDP10.OPS.FAD,
            0o14400: DebuggerPDP10.OPS.FADR,
            0o15000: DebuggerPDP10.OPS.FSB,
            0o15400: DebuggerPDP10.OPS.FSBR,
            0o16000: DebuggerPDP10.OPS.FMP,
            0o16400: DebuggerPDP10.OPS.FMPR,
            0o17000: DebuggerPDP10.OPS.FDV,
            0o17400: DebuggerPDP10.OPS.FDVR,
            0o20000: DebuggerPDP10.OPS.MOVE,
            0o20400: DebuggerPDP10.OPS.MOVS,
            0o21000: DebuggerPDP10.OPS.MOVN,
            0o21400: DebuggerPDP10.OPS.MOVM,
            0o22000: DebuggerPDP10.OPS.IMUL,
            0o22400: DebuggerPDP10.OPS.MUL,
            0o23000: DebuggerPDP10.OPS.IDIV,
            0o23400: DebuggerPDP10.OPS.DIV,
            0o27000: DebuggerPDP10.OPS.ADD,
            0o27400: DebuggerPDP10.OPS.SUB,
            0o40000: DebuggerPDP10.OPS.SETZ,    // MACRO alias: CLEAR
            0o40400: DebuggerPDP10.OPS.AND,
            0o41000: DebuggerPDP10.OPS.ANDCA,
            0o41400: DebuggerPDP10.OPS.SETM,
            0o42000: DebuggerPDP10.OPS.ANDCM,
            0o42400: DebuggerPDP10.OPS.SETA,
            0o43000: DebuggerPDP10.OPS.XOR,
            0o43400: DebuggerPDP10.OPS.IOR,     // MACRO alias: OR
            0o44000: DebuggerPDP10.OPS.ANDCB,
            0o44400: DebuggerPDP10.OPS.EQV,
            0o45000: DebuggerPDP10.OPS.SETCA,
            0o45400: DebuggerPDP10.OPS.ORCA,
            0o46000: DebuggerPDP10.OPS.SETCM,
            0o46400: DebuggerPDP10.OPS.ORCM,
            0o47000: DebuggerPDP10.OPS.ORCB,
            0o47400: DebuggerPDP10.OPS.SETO,
            0o50000: DebuggerPDP10.OPS.HLL,
            0o50400: DebuggerPDP10.OPS.HRL,
            0o51000: DebuggerPDP10.OPS.HLLZ,
            0o51400: DebuggerPDP10.OPS.HRLZ,
            0o52000: DebuggerPDP10.OPS.HLLO,
            0o52400: DebuggerPDP10.OPS.HRLO,
            0o53000: DebuggerPDP10.OPS.HLLE,
            0o53400: DebuggerPDP10.OPS.HRLE,
            0o54000: DebuggerPDP10.OPS.HRR,
            0o54400: DebuggerPDP10.OPS.HLR,
            0o55000: DebuggerPDP10.OPS.HRRZ,
            0o55400: DebuggerPDP10.OPS.HLRZ,
            0o56000: DebuggerPDP10.OPS.HRRO,
            0o56400: DebuggerPDP10.OPS.HLRO,
            0o57000: DebuggerPDP10.OPS.HRRE,
            0o57400: DebuggerPDP10.OPS.HLRE
        },
        [PDP10.OPCODE.OPCOMP]: {                // 0o77000
            0o30000: DebuggerPDP10.OPS.CAI,
            0o31000: DebuggerPDP10.OPS.CAM,
            0o32000: DebuggerPDP10.OPS.JUMP,
            0o33000: DebuggerPDP10.OPS.SKIP,
            0o34000: DebuggerPDP10.OPS.AOJ,
            0o35000: DebuggerPDP10.OPS.AOS,
            0o36000: DebuggerPDP10.OPS.SOJ,
            0o37000: DebuggerPDP10.OPS.SOS,
        },
        [PDP10.OPCODE.OPTEST]: {                // 0o71100
            0o60000: DebuggerPDP10.OPS.TR,
            0o60100: DebuggerPDP10.OPS.TL,
            0o61000: DebuggerPDP10.OPS.TD,
            0o61100: DebuggerPDP10.OPS.TS,
        },
        [PDP10.OPCODE.OPIO]: {                  // 0o70034
            0o70000: DebuggerPDP10.OPS.BLKI,
            0o70004: DebuggerPDP10.OPS.DATAI,
            0o70010: DebuggerPDP10.OPS.BLKO,
            0o70014: DebuggerPDP10.OPS.DATAO,
            0o70020: DebuggerPDP10.OPS.CONO,
            0o70024: DebuggerPDP10.OPS.CONI,
            0o70030: DebuggerPDP10.OPS.CONSZ,
            0o70034: DebuggerPDP10.OPS.CONSO
        }
    };

    DebuggerPDP10.OPMODES = ["", "I", "M", "S"];
    DebuggerPDP10.OPCOMPS = ["", "L", "E", "LE", "A", "GE", "N", "G"];
    DebuggerPDP10.OPTESTS = ["N", "NE", "NA", "NN", "Z", "ZE", "ZA", "ZN", "C", "CE", "CA", "CN", "O", "OE", "OA", "ON"];

    /*
     * Apparently, DEC's MACRO program permits "JFCL xxx" (with a single argument) as an alternate for "JFCL 0,xxx"
     * (which in turn is long-hand for "No-op", since JFCL with 0 does nothing).
     */
    DebuggerPDP10.JFCL = {
        0o00:    DebuggerPDP10.OPS.JFCL,
        0o10:    DebuggerPDP10.OPS.JOV,
        0o04:    DebuggerPDP10.OPS.JCRY0,
        0o02:    DebuggerPDP10.OPS.JCRY1,
        0o06:    DebuggerPDP10.OPS.JCRY,
        0o01:    DebuggerPDP10.OPS.JFOV
    };

    DebuggerPDP10.JRST = {
        0o00:    DebuggerPDP10.OPS.JRST,
        0o04:    DebuggerPDP10.OPS.HALT,
        0o02:    DebuggerPDP10.OPS.JRSTF,
        0o12:    DebuggerPDP10.OPS.JEN
    };

    DebuggerPDP10.ALTOPS = [
        DebuggerPDP10.JFCL, DebuggerPDP10.JRST
    ];

    DebuggerPDP10.HISTORY_LIMIT = DEBUG? 100000 : 1000;

    DebuggerPDP10.PROMPT = ">> ";

    /*
     * Initialize every Debugger module on the page (as IF there's ever going to be more than one ;-))
     */
    WebLib.onInit(DebuggerPDP10.init);

}   // endif DEBUGGER
