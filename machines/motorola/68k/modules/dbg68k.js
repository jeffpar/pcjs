/**
 * @fileoverview 68K Debugger
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2022 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Debugger from "../../../modules/debugger.js";

/**
 * 68K Debugger
 *
 * @class {Dbg68K}
 * @unrestricted
 */
export default class Dbg68K extends Debugger {
    /**
     * Dbg68K(idMachine, idDevice, config)
     *
     * @this {Dbg68K}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.maxOpcodeLength = 6;
    }

    /**
     * break(addr, fArmed)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {boolean} fArmed
     * @returns {boolean}
     */
    break(addr, fArmed)
    {
        return false;       // TODO
    }

    /**
     * markDataAccess(addr, length, iAccess)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {number} length
     * @param {number} iAccess
     */
    markDataAccess(addr, length, iAccess)
    {
        // TODO
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands 8080 instructions.
     *
     * @this {Dbg68K}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let sAddr = this.dumpAddress(address), sBytes = "";
        let sLabel = this.getSymbolName(address, Debugger.SYMBOL.LABEL);
        let sComment = this.getSymbolName(address, Debugger.SYMBOL.COMMENT);

        let result = this.sprintf("%s %-7s %-7s %s", sAddr, sBytes);
        if (!annotation) {
            if (sComment) annotation = sComment;
        } else {
            if (sComment) annotation += " " + sComment;
        }
        if (annotation) result = this.sprintf("%-32s; %s", result, annotation);
        if (sLabel) result = sLabel + ":\n" + result;
        return result + "\n";
    }
}

/**
 * Definitions ported from DebuggerInterface.java
 */
Dbg68K.MEMTYPE_ROM         = 0;
Dbg68K.MEMTYPE_DEVICE      = 1;
Dbg68K.MEMTYPE_CODE        = 2;
Dbg68K.MEMTYPE_DATA        = 3;

Dbg68K.DATAACCESS_NONE     = 0;
Dbg68K.DATAACCESS_READ     = 1;
Dbg68K.DATAACCESS_WRITE    = 2;
Dbg68K.DATAACCESS_UNINIT   = 3;

Dbg68K.CLASSES["Dbg68K"] = Dbg68K;
