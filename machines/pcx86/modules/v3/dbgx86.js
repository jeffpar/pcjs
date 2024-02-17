/**
 * @fileoverview Debugger for the x86 CPU
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Debugger from "../../../modules/v3/debugger.js";

/**
 * Debugger for the x86 CPU
 *
 * @class Dbgx86
 * @unrestricted
 */
export default class Dbgx86 extends Debugger {
    /**
     * Dbgx86(idMachine, idDevice, config)
     *
     * @this {Dbgx86}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands x86 instructions.
     *
     * @this {Dbgx86}
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

        /**
         * getNextByte()
         *
         * @returns {number}
         */
        let getNextByte = () => {
            let byte = opcodes.shift();
            sBytes += this.toBase(byte, 16, 8, "");
            this.addAddress(address, 1);
            return byte;
        };

        /**
         * getNextWord()
         *
         * @returns {number}
         */
        let getNextWord = () => getNextByte() | (getNextByte() << 8);

        let opcode = getNextByte();

        let sOperands = "";
        let sOpcode = this.sprintf("%#02x", opcode);

        let result = this.sprintf("%s %-7s %-7s %s", sAddr, sBytes, sOpcode, sOperands);
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

Dbgx86.CLASSES["Dbgx86"] = Dbgx86;
