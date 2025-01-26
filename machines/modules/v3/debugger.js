/**
 * @fileoverview Debugger Services
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "./device.js";
import Memory  from "./memory.js";
import MESSAGE from "./message.js";

/**
 * DebuggerConfig properties
 *
 * @typedef {Config} DebuggerConfig
 * @property {number} [defaultRadix]
 */

/**
 * Defines a general-purpose Address structure that will hopefully meet the needs of all our
 * machines.  "off" is an (up to) 32-bit offset that is assumed to be PHYSICAL unless type is
 * VIRTUAL.  Normally, "seg" will be -1 (indicating it is unused), unless memory is segmented,
 * in which case "seg" must be set to a non-negative identifying the segment, and "off" will be
 * interpreted as an offset within that segment.  For machines that have different types of
 * segments (eg, real-mode vs. protected-mode segments), the address is assumed to be REAL
 * unless type is PROTECTED.
 *
 * @typedef {Object} Address
 * @property {number} off
 * @property {number} seg
 * @property {number} type
 * @property {boolean} [disabled] (used with addresses that are used as breakpoints)
 */

/**
 * Defines a Symbol object, added to our symbol table with addSymbol().
 *
 * @typedef {Object} SymbolObj
 * @property {Address} address
 * @property {number} type (see Debugger.SYMBOL_TYPE values)
 * @property {string} name
 */

 /**
  * Defines a Dump extension, added to our list of extensions with addDumper().
  *
  * @typedef {Object} Dumper
  * @property {Device} device
  * @property {string} name
  * @property {string} desc
  * @property {function()} func
  */

/**
 * Debugger Services
 *
 * @class Debugger
 * @unrestricted
 * @property {Array.<Array.<Address>>} aaBreakAddress
 */
export default class Debugger extends Device {

    static COMMANDS = [
        "b?\t\tbreak commands",
        "d?\t\tdump commands",
        "e[o] [addr] ...\tedit memory/ports",
        "g    [addr]\trun (to addr)",
        "h\t\thalt",
        "p    [expr]\tparse expression",
        "r?   [value]\tdisplay/set registers",
        "s?\t\tset commands",
        "t[r] [n]\tstep (n instructions)",
        "u    [addr] [n]\tunassemble (at addr)"
    ];

    static BREAK_COMMANDS = [
        "bc [n|*]\tclear break address",
        "bd [n|*]\tdisable break address",
        "be [n|*]\tenable break address",
        "bl [n]\t\tlist break addresses",
        "bi [addr]\tbreak on input",
        "bo [addr]\tbreak on output",
        "br [addr]\tbreak on read",
        "bw [addr]\tbreak on write",
        "bm [on|off]\tbreak on message",
        "bn [count]\tbreak on instruction count"
    ];

    static DUMP_COMMANDS = [
        "db  [addr]\tdump bytes (8 bits)",
        "dw  [addr]\tdump words (16 bits)",
        "dd  [addr]\tdump dwords (32 bits)",
        "di  [addr]\tdump input ports",
        "d*y [addr]\tdump values in binary",
        "dh  [n] [l]\tdump instruction history buffer",
        "ds\t\tdump machine state"
    ];

    static SET_COMMANDS = [
        "sh [on|off]\tset instruction history",
        "sp [n]\t\tset speed multiplier",
        "ss\t\tset debugger style"
    ];

    static ADDRESS = {
        VIRTUAL:    0x01,           // if seg is -1, this indicates if the address is physical (clear) or virtual (set)
        PHYSICAL:   0x00,
        PROTECTED:  0x02,           // if seg is NOT -1, this indicates if the address is real (clear) or protected (set)
        REAL:       0x00
    };

    /**
     * The required characteristics of these assigned values are as follows: all even values must be read
     * operations and all odd values must be write operations; all busMemory operations must come before all
     * busIO operations; and INPUT must be the first busIO operation.
     */
    static BREAKTYPE = {
        READ:       0,
        WRITE:      1,
        INPUT:      2,
        OUTPUT:     3
    };

    static BREAKCMD = {
        [Debugger.BREAKTYPE.READ]:     "br",
        [Debugger.BREAKTYPE.WRITE]:    "bw",
        [Debugger.BREAKTYPE.INPUT]:    "bi",
        [Debugger.BREAKTYPE.OUTPUT]:   "bo"
    };

    /**
     * Predefined "virtual registers" that we expect the CPU to support.
     */
    static REGISTER = {
        PC:         "PC"            // the CPU's program counter
    };

    static SYMBOL = {
        BYTE:       1,
        PAIR:       2,
        QUAD:       4,
        LABEL:      5,
        COMMENT:    6,
        VALUE:      7
    };

    static SYMBOL_TYPES = {
        "=":        Debugger.SYMBOL.VALUE,
        "1":        Debugger.SYMBOL.BYTE,
        "2":        Debugger.SYMBOL.PAIR,
        "4":        Debugger.SYMBOL.QUAD,
        "@":        Debugger.SYMBOL.LABEL,
        ";":        Debugger.SYMBOL.COMMENT
    };

    static HISTORY_LIMIT = 100000;

    /**
     * These are our operator precedence tables.  Operators toward the bottom (with higher values) have
     * higher precedence.  BINOP_PRECEDENCE was our original table; we had to add DECOP_PRECEDENCE because
     * the precedence of operators in DEC's MACRO-10 expressions differ.  Having separate tables also allows
     * us to remove operators that shouldn't be supported, but unless some operator creates a problem,
     * I prefer to keep as much commonality between the tables as possible.
     *
     * Missing from these tables are the (limited) set of unary operators we support (negate and complement),
     * since this is only a BINARY operator precedence, not a general-purpose precedence table.  Assume that
     * all unary operators take precedence over all binary operators.
     */
    static BINOP_PRECEDENCE = {
        '||':   5,      // logical OR
        '&&':   6,      // logical AND
        '!':    7,      // bitwise OR (conflicts with logical NOT, but we never supported that)
        '|':    7,      // bitwise OR
        '^!':   8,      // bitwise XOR (added by MACRO-10 sometime between the 1972 and 1978 versions)
        '&':    9,      // bitwise AND
        '!=':   10,     // inequality
        '==':   10,     // equality
        '>=':   11,     // greater than or equal to
        '>':    11,     // greater than
        '<=':   11,     // less than or equal to
        '<':    11,     // less than
        '>>>':  12,     // unsigned bitwise right shift
        '>>':   12,     // bitwise right shift
        '<<':   12,     // bitwise left shift
        '-':    13,     // subtraction
        '+':    13,     // addition
        '^/':   14,     // remainder
        '/':    14,     // division
        '*':    14,     // multiplication
        '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };

    static DECOP_PRECEDENCE = {
        ',,':   1,      // high-word,,low-word
        '||':   5,      // logical OR
        '&&':   6,      // logical AND
        '!=':   10,     // inequality
        '==':   10,     // equality
        '>=':   11,     // greater than or equal to
        '>':    11,     // greater than
        '<=':   11,     // less than or equal to
        '<':    11,     // less than
        '>>>':  12,     // unsigned bitwise right shift
        '>>':   12,     // bitwise right shift
        '<<':   12,     // bitwise left shift
        '-':    13,     // subtraction
        '+':    13,     // addition
        '^/':   14,     // remainder
        '/':    14,     // division
        '*':    14,     // multiplication
        '!':    15,     // bitwise OR (conflicts with logical NOT, but we never supported that)
        '|':    15,     // bitwise OR
        '^!':   15,     // bitwise XOR (added by MACRO-10 sometime between the 1972 and 1978 versions)
        '&':    15,     // bitwise AND
        '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };

    /**
     * Debugger(idMachine, idDevice, config)
     *
     * @this {Debugger}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {DebuggerConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['class'] = "Debugger";
        super(idMachine, idDevice, config);

        /**
         * Default radix (base).  This is used by our own functions (eg, parseExpression()),
         * but not by those we inherited (eg, parseInt()), which still use base 10 by default;
         * however, you can always coerce values to any base in any of those functions with
         * a prefix (eg, "0x" for hex) or suffix (eg, "." for decimal).
         */
        this.nDefaultRadix = this.config['defaultRadix'] || 16;

        /**
         * Default endian (0 = little, 1 = big).
         */
        this.nDefaultEndian = 0;                // TODO: Use it or lose it

        /**
         * Default maximum instruction (opcode) length, overridden by the CPU-specific debugger.
         */
        this.maxOpcodeLength = 1;

        /**
         * Default parsing parameters, sub-expression and address delimiters.
         */
        this.nASCIIBits = 8;                    // change to 7 for MACRO-10 compatibility
        this.achGroup = ['(',')'];
        this.achAddress = ['[',']'];

        /**
         * Add a new format type ('a') that understands Address objects, where width represents
         * the size of the address in bits, and uses the Debugger's default radix.
         *
         * TODO: Consider adding a 'bits' property to the Address object (or a Bus property so that
         * the appropriate addrWidth can be identified), in order to avoid the extra sprintf() width
         * parameter, allowing the use of "%a" instead of "%*a".
         *
         * TODO: Determine if it's worth getting rid of the separate dumpAddress() function.
         */
        this.addFormatType('a',
            /**
             * @param {string} type
             * @param {string} flags
             * @param {number} width
             * @param {number} precision
             * @param {Address} address
             * @returns {string}
             */
            (type, flags, width, precision, address) => this.toBase(address.off, this.nDefaultRadix, width)
        );

        /**
         * Add a new format type ('n') for numbers, where width represents the size of the value in bits,
         * and uses the Debugger's default radix.
         */
        this.addFormatType('n',
            /**
             * @param {string} type
             * @param {string} flags
             * @param {number} width
             * @param {number} precision
             * @param {number} value
             * @returns {string}
             */
            (type, flags, width, precision, value) => this.toBase(value, this.nDefaultRadix, width, flags.indexOf('#') < 0? "" : undefined)
        );

        /**
         * This controls how we stop the CPU on a break condition.  If fExceptionOnBreak is true, we'll
         * throw an exception, which the CPU will catch and halt; however, the downside of that approach
         * is that, in some cases, it may leave the CPU in an inconsistent state.  It's generally safer to
         * leave fExceptionOnBreak false, which will simply stop the clock, allowing the current instruction
         * to finish executing.
         */
        this.fExceptionOnBreak = false;

        /**
         * If greater than zero, decremented on every instruction until it hits zero, then CPU is stopped.
         */
        this.counterBreak = 0;

        /**
         * If set to MESSAGE.ALL, then we break on all messages.  It can be set to a subset of message bits,
         * but there is currently no UI for that.
         */
        this.messagesBreak = MESSAGE.NONE;

        /**
         * variables is an object with properties that grow as setVariable() assigns more variables;
         * each property corresponds to one variable, where the property name is the variable name (ie,
         * a string beginning with a non-digit, followed by zero or more symbol characters and/or digits)
         * and the property value is the variable's numeric value.
         *
         * Note that parseValue() parses variables before numbers, so any variable that looks like a
         * unprefixed hex value (eg, "a5" as opposed to "0xa5") will trump the numeric value.  Unprefixed
         * hex values are a convenience of parseValue(), which always calls parseInt() with a default
         * base of 16; however, that default be overridden with a variety of explicit prefixes or suffixes
         * (eg, a leading "0o" to indicate octal, a trailing period to indicate decimal, etc.)
         *
         * See parseInt() for more details about supported numbers.
         */
        this.variables = {};

        /**
         * Arrays of Symbol objects, one sorted by name and the other sorted by value; see addSymbols().
         */
        this.symbolsByName = [];
        this.symbolsByValue = [];

        /**
         * Get access to the CPU, so that in part so we can connect to all its registers; the Debugger has
         * no registers of its own, so we simply replace our registers with the CPU's.
         */
        this.cpu = /** @type {CPU} */ (this.findDeviceByClass("CPU"));
        this.registers = this.cpu.connectDebugger(this);

        /**
         * Get access to the Input device, so that we can switch focus whenever we start the machine.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        /**
         * Get access to the Bus devices, so we have access to the I/O and memory address spaces.
         * To minimize configuration redundancy, we rely on the CPU's configuration to get the Bus device IDs.
         */
        let idBus = this.cpu.config['busMemory'] || this.config['busMemory'];
        if (idBus) {
            this.busMemory = /** @type {Bus} */ (this.findDevice(idBus));
            idBus = this.cpu.config['busIO'] || this.config['busIO'];
            if (idBus) {
                this.busIO = /** @type {Bus} */ (this.findDevice(idBus, false));
            }
            if (!this.busIO) this.busIO = this.busMemory;
        } else {
            this.busMemory = this.busIO = /** @type {Bus} */ (this.findDeviceByClass('Bus'));
        }

        this.nDefaultBits = this.busMemory.addrWidth;
        this.addrMask = (Math.pow(2, this.nDefaultBits) - 1)|0;

        /**
         * Since we want to be able to clear/disable/enable/list break addresses by index number, we maintain
         * an array (aBreakIndexes) that maps index numbers to address array entries.  The mapping values are
         * a combination of BREAKTYPE (high byte) and break address entry (low byte).
         */
        this.cBreaks = 0;
        this.cBreakIgnore = 0;  // incremented and decremented around internal reads and writes
        this.aaBreakAddress = [];
        for (let type in Debugger.BREAKTYPE) {
            this.aaBreakAddress[Debugger.BREAKTYPE[type]] = [];
        }
        this.aBreakBuses = [];
        this.aBreakBuses[Debugger.BREAKTYPE.READ] = this.busMemory;
        this.aBreakBuses[Debugger.BREAKTYPE.WRITE] = this.busMemory;
        this.aBreakBuses[Debugger.BREAKTYPE.INPUT] = this.busIO;
        this.aBreakBuses[Debugger.BREAKTYPE.OUTPUT] = this.busIO;
        this.aBreakChecks = [];
        this.aBreakChecks[Debugger.BREAKTYPE.READ] = this.checkRead.bind(this);
        this.aBreakChecks[Debugger.BREAKTYPE.WRITE] = this.checkWrite.bind(this);
        this.aBreakChecks[Debugger.BREAKTYPE.INPUT] = this.checkInput.bind(this);
        this.aBreakChecks[Debugger.BREAKTYPE.OUTPUT] = this.checkOutput.bind(this);
        this.aBreakIndexes = [];
        this.fStepQuietly = undefined;          // when stepping, this informs onUpdate() how "quiet" to be
        this.tempBreak = null;                  // temporary auto-cleared break address managed by setTemp() and clearTemp()
        this.cInstructions = 0;                 // instruction counter (updated only if history is enabled)

        /**
         * Get access to the Time device, so we can stop and start time as needed.
         */
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.time.addUpdate(this);
        this.cTransitions = 0;

        /**
         * Initialize additional properties required for our onCommand() handler, including
         * support for dump extensions (which we use ourselves to implement the "d state" command).
         */
        this.aDumpers = [];                     // array of dump extensions (aka "Dumpers")
        this.sDumpPrev = "";                    // remembers the previous "dump" command invoked
        this.addDumper(this, "state", "dump machine state", this.dumpState);

        this.addressCode = this.newAddress();
        this.addressData = this.newAddress();
        this.historyForced = false;
        this.historyNext = 0;
        this.historyBuffer = [];
        this.addHandler(Debugger.HANDLER.COMMAND, this.onCommand.bind(this));

        let commands = /** @type {string} */ (this.getMachineConfig("commands"));
        if (commands) this.parseCommands(commands);
    }

    /**
     * addDumper(device, name, desc, func)
     *
     * @this {Debugger}
     * @param {Device} device
     * @param {string} name
     * @param {string} desc
     * @param {function(Array.<number>)} func
     */
    addDumper(device, name, desc, func)
    {
        this.aDumpers.push({device, name, desc, func});
    }

    /**
     * checkDumper(option, values)
     *
     * @this {Debugger}
     * @param {string} option
     * @param {Array.<number>} values
     * @returns {string|undefined}
     */
    checkDumper(option, values)
    {
        let result;
        for (let i = 0; i < this.aDumpers.length; i++) {
            let dumper = this.aDumpers[i];
            if (dumper.name == option) {
                result = dumper.func.call(dumper.device, values);
                break;
            }
        }
        return result;
    }

    /**
     * addSymbol(address, type, name)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} type (see Debugger.SYMBOL_TYPE values)
     * @param {string} name
     */
    addSymbol(address, type, name)
    {
        let symbol = {address, type, name};
        this.binaryInsert(this.symbolsByName, symbol, this.compareSymbolNames);
        this.binaryInsert(this.symbolsByValue, symbol, this.compareSymbolValues);
    }

    /**
     * addSymbols(aSymbols)
     *
     * This currently supports only symbol arrays, which consist of [address,type,name] triplets; eg:
     *
     *      "0320","=","HF_PORT",
     *      "0000:0034","4","HDISK_INT",
     *      "0040:0042","1","CMD_BLOCK",
     *      "0003","@","DISK_SETUP",
     *      "0000:004C","4","ORG_VECTOR",
     *      "0028",";","GET DISKETTE VECTOR"
     *
     * There are two basic symbol operations: findSymbolByValue(), which takes an address and finds the symbol,
     * if any, at that address, and findSymbolByName(), which takes a string and attempts to match it to an address.
     *
     * @this {Debugger}
     * @param {Array|undefined} aSymbols
     */
    addSymbols(aSymbols)
    {
        if (aSymbols && aSymbols.length) {
            for (let iSymbol = 0; iSymbol < aSymbols.length-2; iSymbol += 3) {
                let address = this.parseAddress(aSymbols[iSymbol]);
                if (!address) continue;     // ignore symbols with bad addresses
                let type = Debugger.SYMBOL_TYPES[aSymbols[iSymbol+1]];
                this.assert(type, "unrecognized symbol type: %s", aSymbols[iSymbol+1]);
                if (!type) continue;        // ignore symbols with unrecognized types
                let name = aSymbols[iSymbol+2];
                this.addSymbol(address, type, name);
            }
        }
    }

    /**
     * binaryInsert(a, v, fnCompare)
     *
     * If element v already exists in array a, the array is unchanged (we don't allow duplicates); otherwise, the
     * element is inserted into the array at the appropriate index.
     *
     * @this {Debugger}
     * @param {Array} a is an array
     * @param {Object} v is the value to insert
     * @param {function(SymbolObj,SymbolObj):number} [fnCompare]
     */
    binaryInsert(a, v, fnCompare)
    {
        let index = this.binarySearch(a, v, fnCompare);
        if (index < 0) {
            a.splice(-(index + 1), 0, v);
        }
    }

    /**
     * binarySearch(a, v, fnCompare)
     *
     * @this {Debugger}
     * @param {Array} a is an array
     * @param {Object} v
     * @param {function(SymbolObj,SymbolObj):number} [fnCompare]
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    binarySearch(a, v, fnCompare)
    {
        let left = 0;
        let right = a.length;
        let found = 0;
        if (fnCompare === undefined) {
            fnCompare = function(a, b) { return a > b? 1 : a < b? -1 : 0; };
        }
        while (left < right) {
            let middle = (left + right) >> 1;
            let compareResult;
            compareResult = fnCompare(v, a[middle]);
            if (compareResult > 0) {
                left = middle + 1;
            } else {
                right = middle;
                found = !compareResult;
            }
        }
        return found? left : ~left;
    }

    /**
     * compareSymbolNames(symbol1, symbol2)
     *
     * @this {Debugger}
     * @param {SymbolObj} symbol1
     * @param {SymbolObj} symbol2
     * @returns {number}
     */
    compareSymbolNames(symbol1, symbol2)
    {
        return symbol1.name > symbol2.name? 1 : symbol1.name < symbol2.name? -1 : 0;
    }

    /**
     * compareSymbolValues(symbol1, symbol2)
     *
     * @this {Debugger}
     * @param {SymbolObj} symbol1
     * @param {SymbolObj} symbol2
     * @returns {number}
     */
    compareSymbolValues(symbol1, symbol2)
    {
        return symbol1.address.off > symbol2.address.off? 1 : symbol1.address.off < symbol2.address.off? -1 : 0;
    }

    /**
     * findSymbolByName(name)
     *
     * Search symbolsByName for name and return the corresponding symbol (undefined if not found).
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    findSymbolByName(name)
    {
        let symbol = {address: null, type: 0, name};
        return this.binarySearch(this.symbolsByName, symbol, this.compareSymbolNames);
    }

    /**
     * findSymbolByValue(address)
     *
     * Search symbolsByValue for address and return the corresponding symbol (undefined if not found).
     *
     * @this {Debugger}
     * @param {Address} address
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    findSymbolByValue(address)
    {
        let symbol = {address, type: 0, name: undefined};
        return this.binarySearch(this.symbolsByValue, symbol, this.compareSymbolValues);
    }

    /**
     * getSymbol(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {number|undefined}
     */
    getSymbol(name)
    {
        let value;
        let i = this.findSymbolByName(name);
        if (i >= 0) {
            let symbol = this.symbolsByName[i];
            value = symbol.address.off;
        }
        return value;
    }

    /**
     * getSymbolName(address, type)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} [type]
     * @returns {string|undefined}
     */
    getSymbolName(address, type)
    {
        let name;
        let i = this.findSymbolByValue(address);
        if (i >= 0) {
            let symbol = this.symbolsByValue[i];
            if (!type || symbol.type == type) {
                name = symbol.name;
            }
        }
        return name;
    }

    /**
     * delVariable(name)
     *
     * @this {Debugger}
     * @param {string} name
     */
    delVariable(name)
    {
        delete this.variables[name];
    }

    /**
     * getVariable(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {number|undefined}
     */
    getVariable(name)
    {
        if (this.variables[name]) {
            return this.variables[name].value;
        }
        name = name.substr(0, 6);
        return this.variables[name] && this.variables[name].value;
    }

    /**
     * getVariableFixup(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {string|undefined}
     */
    getVariableFixup(name)
    {
        return this.variables[name] && this.variables[name].sUndefined;
    }

    /**
     * isVariable(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {boolean}
     */
    isVariable(name)
    {
        return this.variables[name] !== undefined;
    }

    /**
     * resetVariables()
     *
     * @this {Debugger}
     * @returns {Object}
     */
    resetVariables()
    {
        let a = this.variables;
        this.variables = {};
        return a;
    }

    /**
     * restoreVariables(a)
     *
     * @this {Debugger}
     * @param {Object} a (from previous resetVariables() call)
     */
    restoreVariables(a)
    {
        this.variables = a;
    }

    /**
     * setVariable(name, value, sUndefined)
     *
     * @this {Debugger}
     * @param {string} name
     * @param {number} value
     * @param {string|undefined} [sUndefined]
     */
    setVariable(name, value, sUndefined)
    {
        this.variables[name] = {value, sUndefined};
    }

    /**
     * addAddress(address, offset, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} offset
     * @param {Bus} [bus] (default is busMemory)
     * @returns {Address}
     */
    addAddress(address, offset, bus = this.busMemory)
    {
        address.off = (address.off + offset) & bus.addrLimit;
        return address;
    }

    /**
     * makeAddress(address)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address|number} address
     * @returns {Address}
     */
    makeAddress(address)
    {
        return typeof address == "number"? this.newAddress(address) : address;
    }

    /**
     * newAddress(address)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address|number} [address]
     * @returns {Address}
     */
    newAddress(address = 0)
    {
        let seg = -1, type = Debugger.ADDRESS.PHYSICAL;
        if (typeof address == "number") return {off: address, seg, type};
        return {off: address.off, seg: address.seg, type: address.type};
    }

    /**
     * parseAddress(sAddress, aUndefined)
     *
     * @this {Debugger}
     * @param {string} sAddress
     * @param {Array} [aUndefined]
     * @returns {Address|undefined|null} (undefined if no address supplied, null if a parsing error occurred)
     */
    parseAddress(sAddress, aUndefined)
    {
        let address;
        if (sAddress) {
            address = this.newAddress();
            let iAddr = 0;
            let ch = sAddress.charAt(iAddr);

            switch(ch) {
            case '&':
                iAddr++;
                break;
            case '#':
                iAddr++;
                address.type = Debugger.ADDRESS.PROTECTED;
                break;
            case '%':
                iAddr++;
                ch = sAddress.charAt(iAddr);
                if (ch == '%') {
                    iAddr++;
                } else {
                    address.type = Debugger.ADDRESS.VIRTUAL;
                }
                break;
            }

            let iColon = sAddress.indexOf(':', iAddr);
            if (iColon >= 0) {
                let seg = this.parseExpression(sAddress.substring(iAddr, iColon), aUndefined);
                if (seg == undefined) {
                    address = null;
                } else {
                    address.seg = seg;
                    iAddr = iColon + 1;
                }
            }
            if (address) {
                let off = this.parseExpression(sAddress.substring(iAddr), aUndefined);
                if (off == undefined) {
                    address = null;
                } else {
                    address.off = off & this.addrMask;
                }
            }
        }
        return address;
    }

    /**
     * readAddress(address, advance, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} [advance] (amount to advance address after read, if any)
     * @param {Bus} [bus] (default is busMemory)
     * @returns {number|undefined}
     */
    readAddress(address, advance, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        let value = bus.readDirect(address.off);
        if (advance) this.addAddress(address, advance, bus);
        this.cBreakIgnore--;
        return value;
    }

    /**
     * writeAddress(address, value, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} value
     * @param {Bus} [bus] (default is busMemory)
     */
    writeAddress(address, value, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        bus.writeDirect(address.off, value);
        this.cBreakIgnore--;
    }

    /**
     * setAddress(address, addr)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} addr
     */
    setAddress(address, addr)
    {
        address.off = addr;
    }

    /**
     * evalAND(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.AND().
     *
     * Performs the bitwise "and" (AND) of two operands > 32 bits.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst & src)
     */
    evalAND(dst, src)
    {
        /**
         * We AND the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 AND 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nDefaultBits <= 32) {
            return dst & src;
        }
        /**
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / Debugger.TWO_POW32)|0) & ((src / Debugger.TWO_POW32)|0)) * Debugger.TWO_POW32) + ((dst & src) >>> 0);
    }

    /**
     * evalMUL(dst, src)
     *
     * I could have adapted the code from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.doMUL(), but it was simpler to
     * write this base method and let the PDP-10 Debugger override it with a call to the *actual* doMUL() method.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst * src)
     */
    evalMUL(dst, src)
    {
        return dst * src;
    }

    /**
     * evalIOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.IOR().
     *
     * Performs the logical "inclusive-or" (OR) of two operands > 32 bits.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst | src)
     */
    evalIOR(dst, src)
    {
        /**
         * We OR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 OR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nDefaultBits <= 32) {
            return dst | src;
        }
        /**
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / Debugger.TWO_POW32)|0) | ((src / Debugger.TWO_POW32)|0)) * Debugger.TWO_POW32) + ((dst | src) >>> 0);
    }

    /**
     * evalXOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.XOR().
     *
     * Performs the logical "exclusive-or" (XOR) of two operands > 32 bits.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst ^ src)
     */
    evalXOR(dst, src)
    {
        /**
         * We XOR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 XOR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nDefaultBits <= 32) {
            return dst ^ src;
        }
        /**
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / Debugger.TWO_POW32)|0) ^ ((src / Debugger.TWO_POW32)|0)) * Debugger.TWO_POW32) + ((dst ^ src) >>> 0);
    }

    /**
     * evalOps(aVals, aOps, cOps)
     *
     * Some of our clients want a specific number of bits of integer precision.  If that precision is
     * greater than 32, some of the operations below will fail; for example, JavaScript bitwise operators
     * always truncate the result to 32 bits, so beware when using shift operations.  Similarly, it would
     * be wrong to always "|0" the final result, which is why we rely on truncate() now.
     *
     * Note that JavaScript integer precision is limited to 52 bits.  For example, in Node, if you set a
     * variable to 0x80000001:
     *
     *      foo=0x80000001|0
     *
     * then calculate foo*foo and display the result in binary using "(foo*foo).toString(2)":
     *
     *      '11111111111111111111111111111100000000000000000000000000000000'
     *
     * which is slightly incorrect because it has overflowed JavaScript's floating-point precision.
     *
     * 0x80000001 in decimal is -2147483647, so the product is 4611686014132420609, which is 0x3FFFFFFF00000001.
     *
     * @this {Debugger}
     * @param {Array.<number>} aVals
     * @param {Array.<string>} aOps
     * @param {number} [cOps] (default is -1 for all)
     * @returns {boolean} true if successful, false if error
     */
    evalOps(aVals, aOps, cOps = -1)
    {
        while (cOps-- && aOps.length) {
            let chOp = aOps.pop();
            if (aVals.length < 2) return false;
            let valNew;
            let val2 = aVals.pop();
            let val1 = aVals.pop();
            switch(chOp) {
            case '*':
                valNew = this.evalMUL(val1, val2);
                break;
            case '/':
                if (!val2) return false;
                valNew = Math.trunc(val1 / val2);
                break;
            case '^/':
                if (!val2) return false;
                valNew = val1 % val2;
                break;
            case '+':
                valNew = val1 + val2;
                break;
            case '-':
                valNew = val1 - val2;
                break;
            case '<<':
                valNew = val1 << val2;
                break;
            case '>>':
                valNew = val1 >> val2;
                break;
            case '>>>':
                valNew = val1 >>> val2;
                break;
            case '<':
                valNew = (val1 < val2? 1 : 0);
                break;
            case '<=':
                valNew = (val1 <= val2? 1 : 0);
                break;
            case '>':
                valNew = (val1 > val2? 1 : 0);
                break;
            case '>=':
                valNew = (val1 >= val2? 1 : 0);
                break;
            case '==':
                valNew = (val1 == val2? 1 : 0);
                break;
            case '!=':
                valNew = (val1 != val2? 1 : 0);
                break;
            case '&':
                valNew = this.evalAND(val1, val2);
                break;
            case '!':           // alias for MACRO-10 to perform a bitwise inclusive-or (OR)
            case '|':
                valNew = this.evalIOR(val1, val2);
                break;
            case '^!':          // since MACRO-10 uses '^' for base overrides, '^!' is used for bitwise exclusive-or (XOR)
                valNew = this.evalXOR(val1, val2);
                break;
            case '&&':
                valNew = (val1 && val2? 1 : 0);
                break;
            case '||':
                valNew = (val1 || val2? 1 : 0);
                break;
            case ',,':
                valNew = this.truncate(val1, 18, true) * Math.pow(2, 18) + this.truncate(val2, 18, true);
                break;
            case '_':
            case '^_':
                valNew = val1;
                /**
                 * While we always try to avoid assuming any particular number of bits of precision, the 'B' shift
                 * operator (which we've converted to '^_') is unique to the MACRO-10 environment, which imposes the
                 * following restrictions on the shift count.
                 */
                if (chOp == '^_') val2 = 35 - (val2 & 0xff);
                if (val2) {
                    /**
                     * Since binary shifting is a logical (not arithmetic) operation, and since shifting by division only
                     * works properly with positive numbers, we call truncate() to produce an unsigned value.
                     */
                    valNew = this.truncate(valNew, 0, true);
                    if (val2 > 0) {
                        valNew *= Math.pow(2, val2);
                    } else {
                        valNew = Math.trunc(valNew / Math.pow(2, -val2));
                    }
                }
                break;
            default:
                return false;
            }
            aVals.push(this.truncate(valNew));
        }
        return true;
    }

    /**
     * parseArray(asValues, iValue, iLimit, nBase, aUndefined)
     *
     * parseExpression() takes a complete expression and divides it into array elements, where even elements
     * are values (which may be empty if two or more operators appear consecutively) and odd elements are operators.
     *
     * For example, if the original expression was "2*{3+{4/2}}", parseExpression() would call parseArray() with:
     *
     *      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14
     *      -   -   -   -   -   -   -   -   -   -  --  --  --  --  --
     *      2   *       {   3   +       {   4   /   2   }       }
     *
     * This function takes care of recursively processing grouped expressions, by processing subsets of the array,
     * as well as handling certain base overrides (eg, temporarily switching to base-10 for binary shift suffixes).
     *
     * @this {Debugger}
     * @param {Array.<string>} asValues
     * @param {number} iValue
     * @param {number} iLimit
     * @param {number} nBase
     * @param {Array} [aUndefined]
     * @returns {number|undefined}
     */
    parseArray(asValues, iValue, iLimit, nBase, aUndefined)
    {
        let value;
        let sValue, sOp;
        let fError = false;
        let unary = 0;
        let aVals = [], aOps = [];

        let nBasePrev = this.nDefaultRadix;
        this.nDefaultRadix = nBase;

        while (iValue < iLimit) {
            let v;
            sValue = asValues[iValue++].trim();
            sOp = (iValue < iLimit? asValues[iValue++] : "");

            if (sValue) {
                v = this.parseValue(sValue, undefined, aUndefined, unary);
            } else {
                if (sOp == '{') {
                    let cOpen = 1;
                    let iStart = iValue;
                    while (iValue < iLimit) {
                        sValue = asValues[iValue++].trim();
                        sOp = (iValue < asValues.length? asValues[iValue++] : "");
                        if (sOp == '{') {
                            cOpen++;
                        } else if (sOp == '}') {
                            if (!--cOpen) break;
                        }
                    }
                    v = this.parseArray(asValues, iStart, iValue-1, this.nDefaultRadix, aUndefined);
                    if (v != null && unary) {
                        v = this.parseUnary(v, unary);
                    }
                    sValue = (iValue < iLimit? asValues[iValue++].trim() : "");
                    sOp = (iValue < iLimit? asValues[iValue++] : "");
                }
                else {
                    /**
                     * When parseExpression() calls us, it has collapsed all runs of whitespace into single spaces,
                     * and although it allows single spaces to divide the elements of the expression, a space is neither
                     * a unary nor binary operator.  It's essentially a no-op.  If we encounter it here, then it followed
                     * another operator and is easily ignored (although perhaps it should still trigger a reset of nBase
                     * and unary -- TBD).
                     */
                    if (sOp == ' ') {
                        continue;
                    }
                    if (sOp == '^B') {
                        this.nDefaultRadix = 2;
                        continue;
                    }
                    if (sOp == '^O') {
                        this.nDefaultRadix = 8;
                        continue;
                    }
                    if (sOp == '^D') {
                        this.nDefaultRadix = 10;
                        continue;
                    }
                    if (!(unary & (0xC0000000|0))) {
                        if (sOp == '+') {
                            continue;
                        }
                        if (sOp == '-') {
                            unary = (unary << 2) | 1;
                            continue;
                        }
                        if (sOp == '~' || sOp == '^-') {
                            unary = (unary << 2) | 2;
                            continue;
                        }
                        if (sOp == '^L') {
                            unary = (unary << 2) | 3;
                            continue;
                        }
                    }
                    fError = true;
                    break;
                }
            }

            if (v === undefined) {
                if (aUndefined) {
                    aUndefined.push(sValue);
                    v = 0;
                } else {
                    fError = true;
                    // aUndefined = [];
                    break;
                }
            }

            aVals.push(this.truncate(v));

            /**
             * When parseExpression() calls us, it has collapsed all runs of whitespace into single spaces,
             * and although it allows single spaces to divide the elements of the expression, a space is neither
             * a unary nor binary operator.  It's essentially a no-op.  If we encounter it here, then it followed
             * a value, and since we don't want to misinterpret the next operator as a unary operator, we look
             * ahead and grab the next operator if it's not preceded by a value.
             */
            if (sOp == ' ') {
                if (iValue < asValues.length - 1 && !asValues[iValue]) {
                    iValue++;
                    sOp = asValues[iValue++];
                } else {
                    fError = true;
                    break;
                }
            }

            if (!sOp) break;

            let aBinOp = (this.achGroup[0] == '<'? Debugger.DECOP_PRECEDENCE : Debugger.BINOP_PRECEDENCE);
            if (!aBinOp[sOp]) {
                fError = true;
                break;
            }
            if (aOps.length && aBinOp[sOp] <= aBinOp[aOps[aOps.length - 1]]) {
                this.evalOps(aVals, aOps, 1);
            }
            aOps.push(sOp);

            /**
             * The MACRO-10 binary shifting operator assumes a base-10 shift count, regardless of the current
             * base, so we must override the current base to ensure the count is parsed correctly.
             */
            this.nDefaultRadix = (sOp == '^_')? 10 : nBase;
            unary = 0;
        }

        if (fError || !this.evalOps(aVals, aOps) || aVals.length != 1) {
            fError = true;
        }

        if (!fError) {
            value = aVals.pop();
            this.assert(!aVals.length);
        } else if (!aUndefined) {
            this.printf("parse error (%s)\n", (sValue || sOp));
        }

        this.nDefaultRadix = nBasePrev;
        return value;
    }

    /**
     * parseASCII(expr, chDelim, nBits)
     *
     * @this {Debugger}
     * @param {string} expr
     * @param {string} chDelim
     * @param {number} nBits (number of bits to store for each ASCII character)
     * @returns {string|undefined}
     */
    parseASCII(expr, chDelim, nBits)
    {
        let i;
        let cchMax = (this.nDefaultBits / nBits)|0;
        while ((i = expr.indexOf(chDelim)) >= 0) {
            let v = 0;
            let j = i + 1;
            let cch = cchMax;
            while (j < expr.length) {
                let ch = expr[j++];
                if (ch == chDelim) {
                    cch = -1;
                    break;
                }
                if (!cch) break;
                cch--;
                let c = ch.charCodeAt(0);
                if (nBits == 6) {
                    c -= 0x20;
                }
                c &= ((1 << nBits) - 1);
                v = this.truncate(v * Math.pow(2, nBits) + c, nBits * cchMax, true);
            }
            if (cch >= 0) {
                this.printf("parse error (%c%s%c)\n", chDelim, expr, chDelim);
                return undefined;
            } else {
                expr = expr.substr(0, i) + this.toBase(v) + expr.substr(j);
            }
        }
        return expr;
    }

    /**
     * parseExpression(expr, aUndefined)
     *
     * A quick-and-dirty expression parser.  It takes an expression like:
     *
     *      EDX+EDX*4+12345678
     *
     * and builds a value stack in aVals and a "binop" (binary operator) stack in aOps:
     *
     *      aVals       aOps
     *      -----       ----
     *      EDX         +
     *      EDX         *
     *      4           +
     *      ...
     *
     * We pop 1 "binop" from aOps and 2 values from aVals whenever a "binop" of lower priority than its
     * predecessor is encountered, evaluate, and push the result back onto aVals.  Only selected unary
     * operators are supported (eg, negate and complement); no ternary operators like '?:' are supported.
     *
     * aUndefined can be used to pass an array that collects any undefined variables that parseExpression()
     * encounters; the value of an undefined variable is zero.  This mode was added for components that need
     * to support expressions containing "fixups" (ie, values that must be determined later).
     *
     * @this {Debugger}
     * @param {string|undefined} expr
     * @param {Array} [aUndefined] (collects any undefined variables)
     * @returns {number|undefined} numeric value, or undefined if expr contains any undefined or invalid values
     */
    parseExpression(expr, aUndefined)
    {
        let value;
        if (expr) {
            /**
             * The default delimiting characters for grouped expressions are braces; they can be changed by altering
             * achGroup, but when that happens, instead of changing our regular expressions and operator tables,
             * we simply replace all achGroup characters with braces in the given expression.
             *
             * Why not use parentheses for grouped expressions?  Because some debuggers use parseReference() to perform
             * parenthetical value replacements in message strings, and they don't want parentheses taking on a different
             * meaning.  And for some machines, like the PDP-10, the convention is to use parentheses for other things,
             * like indexed addressing, and to use angle brackets for grouped expressions.
             */
            if (this.achGroup[0] != '{') {
                expr = expr.split(this.achGroup[0]).join('{').split(this.achGroup[1]).join('}');
            }

            /**
             * Quoted ASCII characters can have a numeric value, too, which must be converted now, to avoid any
             * conflicts with the operators below.
             *
             * NOTE: MACRO-10 packs up to 5 7-bit ASCII codes from a double-quoted value, and up to 6 6-bit ASCII
             * (SIXBIT) codes from a single-quoted value.
             */
            expr = this.parseASCII(expr, '"', this.nASCIIBits);
            if (!expr) return value;
            expr = this.parseASCII(expr, "'", 6);
            if (!expr) return value;

            /**
             * All browsers (including, I believe, IE9 and up) support the following idiosyncrasy of a RegExp split():
             * when the RegExp uses a capturing pattern, the resulting array will include entries for all the pattern
             * matches along with the non-matches.  This effectively means that, in the set of expressions that we
             * support, all even entries in asValues will contain "values" and all odd entries will contain "operators".
             *
             * Although I started listing the operators in the RegExp in "precedential" order, that's not important;
             * what IS important is listing operators that contain shorter operators first.  For example, bitwise
             * shift operators must be listed BEFORE the logical less-than or greater-than operators.  The aBinOp tables
             * (BINOP_PRECEDENCE and DECOP_PRECEDENCE) are what determine precedence, not the RegExp.
             *
             * Also, to better accommodate MACRO-10 syntax, I've replaced the single '^' for XOR with '^!', and I've
             * added '!' as an alias for '|' (bitwise inclusive-or), '^-' as an alias for '~' (one's complement operator),
             * and '_' as a shift operator (+/- values specify a left/right shift, and the count is not limited to 32).
             *
             * And to avoid conflicts with MACRO-10 syntax, I've replaced the original mod operator ('%') with '^/'.
             *
             * The MACRO-10 binary shifting suffix ('B') is a bit more problematic, since a capital B can also appear
             * inside symbols, or inside hex values.  So if the default base is NOT 16, then I pre-scan for that suffix
             * and replace all non-symbolic occurrences with an internal shift operator ('^_').
             *
             * Note that parseInt(), which parseValue() relies on, supports both the MACRO-10 base prefix overrides
             * and the binary shifting suffix ('B'), but since that suffix can also be a bracketed expression, we have to
             * support it here as well.
             *
             * MACRO-10 supports only a subset of all the PCjs operators; for example, MACRO-10 doesn't support any of
             * the boolean logical/compare operators.  But unless we run into conflicts, I prefer sticking with this
             * common set of operators.
             *
             * All whitespace in the expression is collapsed to single spaces, and space has been added to the list
             * of "operators", but its sole function is as a separator, not as an operator.  parseArray() will ignore
             * single spaces as long as they are preceded and/or followed by a "real" operator.  It would be dangerous
             * to remove spaces entirely, because if an operator-less expression like "A B" was passed in, we would want
             * that to generate an error; if we converted it to "AB", evaluation might inadvertently succeed.
             */
            let regExp = /({|}|\|\||&&|\||\^!|\^B|\^O|\^D|\^L|\^-|~|\^_|_|&|!=|!|==|>=|>>>|>>|>|<=|<<|<|-|\+|\^\/|\/|\*|,,| )/;
            if (this.nDefaultRadix != 16) {
                expr = expr.replace(/(^|[^A-Z0-9$%.])([0-9]+)B/, "$1$2^_").replace(/\s+/g, ' ');
            }
            let asValues = expr.split(regExp);
            value = this.parseArray(asValues, 0, asValues.length, this.nDefaultRadix, aUndefined);
        }
        return value;
    }

    /**
     * parseUnary(value, unary)
     *
     * unary is actually a small "stack" of unary operations encoded in successive pairs of bits.
     * As parseExpression() encounters each unary operator, unary is shifted left 2 bits, and the
     * new unary operator is encoded in bits 0 and 1 (0b00 is none, 0b01 is negate, 0b10 is complement,
     * and 0b11 is reserved).  Here, we process the bits in reverse order (hence the stack-like nature),
     * ensuring that we process the unary operators associated with this value right-to-left.
     *
     * Since bitwise operators see only 32 bits, more than 16 unary operators cannot be supported
     * using this method.  We'll let parseExpression() worry about that; if it ever happens in practice,
     * then we'll have to switch to a more "expensive" approach (eg, an actual array of unary operators).
     *
     * @this {Debugger}
     * @param {number} value
     * @param {number} unary
     * @returns {number}
     */
    parseUnary(value, unary)
    {
        while (unary) {
            let bit;
            switch(unary & 0o3) {
            case 1:
                value = -this.truncate(value);
                break;
            case 2:
                value = this.evalXOR(value, -1);        // this is easier than adding an evalNOT()...
                break;
            case 3:
                bit = 35;                               // simple left-to-right zero-bit-counting loop...
                while (bit >= 0 && !this.evalAND(value, Math.pow(2, bit))) bit--;
                value = 35 - bit;
                break;
            }
            unary >>>= 2;
        }
        return value;
    }

    /**
     * parseValue(sValue, sName, aUndefined, unary)
     *
     * @this {Debugger}
     * @param {string} [sValue]
     * @param {string} [sName] is the name of the value, if any
     * @param {Array} [aUndefined]
     * @param {number} [unary] (0 for none, 1 for negate, 2 for complement, 3 for leading zeros)
     * @returns {number|undefined} numeric value, or undefined if sValue is either undefined or invalid
     */
    parseValue(sValue, sName, aUndefined, unary = 0)
    {
        let value;
        if (sValue != undefined) {
            value = this.getRegister(sValue.toUpperCase());
            if (value == undefined) {
                value = this.getSymbol(sValue);
                if (value == undefined) {
                    value = this.getVariable(sValue);
                    if (value == undefined) {
                        /**
                         * A feature of MACRO-10 is that any single-digit number is automatically interpreted as base-10.
                         */
                        value = this.parseInt(sValue, sValue.length > 1 || this.nDefaultRadix > 10? this.nDefaultRadix : 10);
                    } else {
                        let sUndefined = this.getVariableFixup(sValue);
                        if (sUndefined) {
                            if (aUndefined) {
                                aUndefined.push(sUndefined);
                            } else {
                                let valueUndefined = this.parseExpression(sUndefined, aUndefined);
                                if (valueUndefined !== undefined) {
                                    value += valueUndefined;
                                } else {
                                    if (Debugger.MAXDEBUG) this.printf("undefined %s: %s (%s)\n", (sName || "value"), sValue, sUndefined);
                                    value = undefined;
                                }
                            }
                        }
                    }
                }
            }
            if (value != undefined) {
                value = this.truncate(this.parseUnary(value, unary));
            } else {
                if (Debugger.MAXDEBUG) this.printf("invalid %s: %s\n", (sName || "value"), sValue);
            }
        } else {
            if (Debugger.MAXDEBUG) this.printf("missing %s\n", (sName || "value"));
        }
        return value;
    }

    /**
     * truncate(v, nBits, fUnsigned)
     *
     * @this {Debugger}
     * @param {number} v
     * @param {number} [nBits]
     * @param {boolean} [fUnsigned]
     * @returns {number}
     */
    truncate(v, nBits, fUnsigned)
    {
        let limit, vNew = v;
        nBits = nBits || this.nDefaultBits;

        if (fUnsigned) {
            if (nBits == 32) {
                vNew = v >>> 0;
            }
            else if (nBits < 32) {
                vNew = v & ((1 << nBits) - 1);
            }
            else {
                limit = Math.pow(2, nBits);
                if (v < 0 || v >= limit) {
                    vNew = v % limit;
                    if (vNew < 0) vNew += limit;
                }
            }
        }
        else {
            if (nBits <= 32) {
                vNew = (v << (32 - nBits)) >> (32 - nBits);
            }
            else {
                limit = Math.pow(2, nBits - 1);
                if (v >= limit) {
                    vNew = (v % limit);
                    if (((v / limit)|0) & 1) vNew -= limit;
                } else if (v < -limit) {
                    vNew = (v % limit);
                    if ((((-v - 1) / limit) | 0) & 1) {
                        if (vNew) vNew += limit;
                    }
                    else {
                        if (!vNew) vNew -= limit;
                    }
                }
            }
        }
        if (v != vNew) {
            if (Debugger.MAXDEBUG) this.printf("warning: value %d truncated to %d\n", v, vNew);
            v = vNew;
        }
        return v;
    }

    /**
     * addBreakAddress(address, aBreakAddress)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {Array} aBreakAddress
     * @returns {number} (>= 0 if added, < 0 if not)
     */
    addBreakAddress(address, aBreakAddress)
    {
        let entry = this.findBreakEntry(address, aBreakAddress);
        if (entry >= 0) {
            entry = -(entry + 1);
        } else {
            for (entry = 0; entry < aBreakAddress.length; entry++) {
                if (aBreakAddress[entry] == undefined) break;
            }
            aBreakAddress[entry] = address;
        }
        return entry;
    }

    /**
     * addBreakIndex(type, entry)
     *
     * @this {Debugger}
     * @param {number} type
     * @param {number} entry
     * @returns {number} (new index)
     */
    addBreakIndex(type, entry)
    {
        let index;
        for (index = 0; index < this.aBreakIndexes.length; index++) {
            if (this.aBreakIndexes[index] == undefined) break;
        }
        this.aBreakIndexes[index] = (type << 8) | entry;
        return index;
    }

    /**
     * clearBreak(index)
     *
     * @this {Debugger}
     * @param {number} index
     * @returns {string}
     */
    clearBreak(index)
    {
        if (index < -1) {
            return this.enumBreak(this.clearBreak);
        }
        let isEmpty = function(aBreaks) {
            for (let i = 0; i < aBreaks.length; i++) {
                if (aBreaks[i] != undefined) return false;
            }
            return true;
        };
        let result = "";
        if (index >= 0) {
            let mapping = this.aBreakIndexes[index];
            if (mapping != undefined) {
                let type = mapping >> 8;
                let entry = mapping & 0xff;
                let bus = this.aBreakBuses[type];
                if (!bus) {
                    result = "invalid bus";
                } else {
                    let success;
                    let aBreakAddress = this.aaBreakAddress[type];
                    let address = aBreakAddress[entry];
                    this.assert(address != undefined, "no break address at index: %d\n", index);
                    if (!(type & 1)) {
                        success = bus.untrapRead(address.off, this.aBreakChecks[type]);
                    } else {
                        success = bus.untrapWrite(address.off, this.aBreakChecks[type]);
                    }
                    if (success) {
                        aBreakAddress[entry] = undefined;
                        this.aBreakIndexes[index] = undefined;
                        if (isEmpty(aBreakAddress)) {
                            aBreakAddress.length = 0;
                            if (isEmpty(this.aBreakIndexes)) {
                                this.aBreakIndexes.length = 0;
                            }
                        }
                        result = this.sprintf("%2d: %s %*a cleared\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address);
                        if (!--this.cBreaks) {
                            if (!this.historyForced) result += this.enableHistory(false);
                        }
                        this.assert(this.cBreaks >= 0);
                    } else {
                        result = this.sprintf("invalid break address: %*a\n", bus.addrWidth, address);
                    }
                }
            } else {
                result = this.sprintf("invalid break index: %d\n", index);
            }
        } else {
            result = "missing break index\n";
        }
        return result;
    }

    /**
     * clearTemp(addr)
     *
     * Clears the current temporary break address if it matches the specified physical address.
     *
     * @this {Debugger}
     * @param {number} [addr]
     */
    clearTemp(addr)
    {
        if (this.tempBreak) {                   // if there's a previous temp break address
            if (addr == undefined || this.tempBreak.off == addr) {
                let index = this.findBreak(this.tempBreak);
                if (index >= 0) {               // and it wasn't already cleared via other means
                    this.clearBreak(index);     // then clear it now
                }
                this.tempBreak = null;
            }
        }
    }

    /**
     * enableBreak(index, enable)
     *
     * @this {Debugger}
     * @param {number} index
     * @param {boolean} [enable]
     * @returns {string}
     */
    enableBreak(index, enable = false)
    {
        if (index < -1) {
            return this.enumBreak(this.enableBreak, enable);
        }
        let result = "";
        if (index >= 0) {
            let mapping = this.aBreakIndexes[index];
            if (mapping != undefined) {
                let success = true;
                let type = mapping >> 8;
                let entry = mapping & 0xff;
                let aBreakAddress = this.aaBreakAddress[type];
                let address = aBreakAddress[entry];
                if (address != undefined) {
                    let action = enable? "enabled" : "disabled";
                    let bus = this.aBreakBuses[type];
                    if (!address.disabled == !enable) {
                        address.disabled = !enable;
                        result = this.sprintf("%2d: %s %*a %s\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address, action);
                    } else {
                        result = this.sprintf("%2d: %s %*a already %s\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address, action);
                    }
                } else {
                    result = this.sprintf("no break address at index: %d\n", index);
                    this.assert(false, result);
                }
            } else {
                result = this.sprintf("invalid break index: %d\n", index);
            }
        } else {
            result = "missing break index\n";
        }
        return result;
    }

    /**
     * enumBreak(func, option)
     *
     * @param {function(number,(boolean|undefined))} func
     * @param {boolean} [option]
     * @returns {string}
     */
    enumBreak(func, option)
    {
        let result = "";
        for (let index = 0; index < this.aBreakIndexes.length; index++) {
            if (this.aBreakIndexes[index] == undefined) continue;
            result += func.call(this, index, option);
        }
        if (!result) result = "no break addresses found";
        return result;
    }

    /**
     * findBreak(address, type)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} [type] (default is BREAKTYPE.READ)
     * @returns {number} (index of break address, -1 if not found)
     */
    findBreak(address, type = Debugger.BREAKTYPE.READ)
    {
        let index = -1;
        let entry = this.findBreakEntry(address, this.aaBreakAddress[type]);
        if (entry >= 0) {
            for (let i = 0; i < this.aBreakIndexes.length; i++) {
                let mapping = this.aBreakIndexes[i];
                if (mapping != undefined && type == (mapping >> 8) && entry == (mapping & 0xff)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    /**
     * findBreakAddr(addr, type)
     *
     * @this {Debugger}
     * @param {number} addr
     * @param {number} [type] (default is BREAKTYPE.READ)
     * @returns {Address|undefined} (matching break Address, undefined if not found)
     */
    findBreakAddr(addr, type = Debugger.BREAKTYPE.READ)
    {
        let aBreakAddress = this.aaBreakAddress[type];
        for (let i = 0; i < aBreakAddress.length; i++) {
            let address = aBreakAddress[i];
            if (address.off == addr) return address;
        }
        return undefined;
    }

    /**
     * findBreakEntry(address, aBreakAddress)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {Array} aBreakAddress
     * @returns {number} (matching break Address entry, -1 if not found)
     */
    findBreakEntry(address, aBreakAddress)
    {
        for (let i = 0; i < aBreakAddress.length; i++) {
            if (aBreakAddress[i].off == address.off) return i;
        }
        return -1;
    }

    /**
     * listBreak(fCommands)
     *
     * @this {Debugger}
     * @param {boolean} [fCommands] (true to generate a list of break commands for saveState())
     * @returns {string}
     */
    listBreak(fCommands = false)
    {
        let result = "";
        for (let index = 0; index < this.aBreakIndexes.length; index++) {
            let mapping = this.aBreakIndexes[index];
            if (mapping == undefined) continue;
            let type = mapping >> 8;
            let entry = mapping & 0xff;
            let address = this.aaBreakAddress[type][entry];
            let bus = this.aBreakBuses[type];
            let command = this.sprintf("%s %*a", Debugger.BREAKCMD[type], bus.addrWidth, address);
            if (fCommands) {
                if (result) result += ';';
                result += command;
                if (address.disabled) result += ";bd " + index;
            } else {
                result += this.sprintf("%2d: %s %s\n", index, command, address.disabled? "disabled" : "enabled");
            }
        }
        if (!result) {
            if (!fCommands) result = "no break addresses found\n";
        }
        return result;
    }

    /**
     * setBreak(address, type)
     *
     * @this {Debugger}
     * @param {Address} [address]
     * @param {number} [type] (default is BREAKTYPE.READ)
     * @returns {string}
     */
    setBreak(address, type = Debugger.BREAKTYPE.READ)
    {
        let result = "";
        if (address) {
            let success;
            let bus = this.aBreakBuses[type];
            if (!bus) {
                result = "invalid bus";
            } else {
                let entry = this.addBreakAddress(address, this.aaBreakAddress[type]);
                if (entry >= 0) {
                    if (!(type & 1)) {
                        success = bus.trapRead(address.off, this.aBreakChecks[type]);
                    } else {
                        success = bus.trapWrite(address.off, this.aBreakChecks[type]);
                    }
                    if (success) {
                        let index = this.addBreakIndex(type, entry);
                        result = this.sprintf("%2d: %s %*a set\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address);
                        if (!this.cBreaks++) {
                            if (!this.historyBuffer.length) result += this.enableHistory(true);
                        }
                    } else {
                        result = this.sprintf("invalid break address: %*a\n", bus.addrWidth, address);
                        this.aaBreakAddress[type][entry] = undefined;
                    }
                } else {
                    result = this.sprintf("%s %*a already set\n", Debugger.BREAKCMD[type], bus.addrWidth, address);
                }
            }
        } else {
            result = "missing break address\n";
        }
        return result;
    }

    /**
     * setBreakCounter(n)
     *
     * Set number of instructions to execute before breaking.
     *
     * @this {Debugger}
     * @param {number} n (-1 if no number was supplied, so just display current counter)
     * @returns {string}
     */
    setBreakCounter(n)
    {
        let result = "";
        if (n >= 0) this.counterBreak = n;
        result += "instruction break count: " + (this.counterBreak > 0? this.counterBreak : "disabled") + "\n";
        if (n > 0) {
            /**
             * It doesn't hurt to always call enableHistory(), but avoiding the call minimizes unnecessary messages.
             */
            if (!this.historyBuffer.length) result += this.enableHistory(true);
            this.historyForced = true;
        }
        return result;
    }

    /**
     * setBreakMessage(option)
     *
     * Set message(s) to break on when we are notified of being printed.
     *
     * @this {Debugger}
     * @param {string} option
     * @returns {string}
     */
    setBreakMessage(option)
    {
        let result;
        if (option) {
            let on = this.parseBoolean(option);
            if (on != undefined) {
                this.messagesBreak = on? MESSAGE.ALL : MESSAGE.NONE;
            } else {
                result = this.sprintf("unrecognized message option: %s\n", option);
            }
        }
        if (!result) {
            result = this.sprintf("break on message: %b\n", !!this.messagesBreak);
        }
        return result;
    }

    /**
     * setTemp(address)
     *
     * @this {Debugger}
     * @param {Address} address
     */
    setTemp(address)
    {
        this.tempBreak = address;
    }

    /**
     * checkInput(base, offset, value)
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkInput(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown input %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.INPUT);
            if (address && !address.disabled) {
                this.stopCPU("break on input %*a: %#0x", this.busIO.addrWidth, address, value);
            }
        }
    }

    /**
     * checkOutput(base, offset, value)
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkOutput(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown output %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.OUTPUT);
            if (address && !address.disabled) {
                this.stopCPU("break on output %*a: %#0x", this.busIO.addrWidth, address, value);
            }
        }
    }

    /**
     * checkRead(base, offset, value)
     *
     * If historyBuffer has been allocated, then we need to record all instruction fetches, which we
     * distinguish as reads where the physical address matches cpu.regPCLast.
     *
     * TODO: Additional logic will be required for machines where the logical PC differs from the physical
     * address (eg, machines with segmentation or paging enabled), but that's an issue for another day.
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkRead(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown read %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            if (this.historyBuffer.length) {
                if (addr == this.cpu.regPCLast) {
                    this.cInstructions++;
                    if (this.counterBreak > 0) {
                        if (!--this.counterBreak) {
                            this.stopCPU("break on instruction count");
                        }
                    }
                    this.historyBuffer[this.historyNext++] = addr;
                    if (this.historyNext == this.historyBuffer.length) this.historyNext = 0;
                }
            }
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.READ);
            if (address && !address.disabled) {
                this.stopCPU("break on read %*a: %#0x", this.busMemory.addrWidth, address, value);
                this.clearTemp(addr);
            }
        }
    }

    /**
     * checkWrite(base, offset, value)
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkWrite(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown write %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.WRITE);
            if (address && !address.disabled) {
                this.stopCPU("break on write %*a: %#0x", this.busMemory.addrWidth, address, value);
            }
        }
    }

    /**
     * checkVirtualRead(addrVirtual, length)
     *
     * @this {Debugger}
     * @param {number} addrVirtual
     * @param {number} length
     */
    checkVirtualRead(addrVirtual, length)
    {
    }

    /**
     * checkVirtualWrite(addrVirtual, length)
     *
     * @this {Debugger}
     * @param {number} addrVirtual
     * @param {number} length
     */
    checkVirtualWrite(addrVirtual, length)
    {
    }

    /**
     * stopCPU(message, ...args)
     *
     * @this {Debugger}
     * @param {string} message
     * @param {...} [args]
     */
    stopCPU(message, args)
    {
        message = this.sprintf(message, ...args);
        if (this.time.isRunning() && this.fExceptionOnBreak) {
            /**
             * We don't print the message in this case, because the CPU's exception handler already
             * does that; it has to be prepared for any kind of exception, not just those that we throw.
             */
            throw new Error(message);
        }
        this.printf("%s\n", message);
        this.time.stop();
    }

    /**
     * dumpAddress(address, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {Bus} [bus] (default is busMemory)
     * @returns {string}
     */
    dumpAddress(address, bus = this.busMemory)
    {
        return this.toBase(address.off, this.nDefaultRadix, bus.addrWidth, "");
    }

    /**
     * dumpHistory(index)
     *
     * The index parameter is interpreted as the number of instructions to rewind; if you also
     * specify a length, then that limits the number of instructions to display from the index point.
     *
     * @this {Debugger}
     * @param {number} index
     * @param {number} [length]
     * @returns {string}
     */
    dumpHistory(index, length = 10)
    {
        let result = "";
        if (this.historyBuffer.length) {
            let address, opcodes = [];
            if (length > this.historyBuffer.length) {
                length = this.historyBuffer.length;
            }
            if (index < 0) index = length;
            let i = this.historyNext - index;
            if (i < 0) i += this.historyBuffer.length;
            while (i >= 0 && i < this.historyBuffer.length && length > 0) {
                let addr = this.historyBuffer[i++];
                if (addr == undefined) break;
                if (i == this.historyBuffer.length) i = 0;
                if (address) {
                    address.off = addr;
                } else {
                    address = this.newAddress(addr);
                }
                for (let j = 0; j < this.maxOpcodeLength; j++) {
                    opcodes[j] = this.readAddress(address, 1);
                }
                this.addAddress(address, -opcodes.length);
                result += this.unassemble(address, opcodes, this.sprintf("[%6d]", index--));
                length--;
            }
        }
        return result || "no history";
    }

    /**
     * dumpInstruction(address, length)
     *
     * @this {Debugger}
     * @param {Address|number} address
     * @param {number} length
     * @returns {string}
     */
    dumpInstruction(address, length)
    {
        let opcodes = [], result = "";
        address = this.makeAddress(address);
        while (length--) {
            this.addAddress(address, opcodes.length);
            while (opcodes.length < this.maxOpcodeLength) {
                opcodes.push(this.readAddress(address, 1));
            }
            this.addAddress(address, -opcodes.length);
            result += this.unassemble(address, opcodes);
        }
        return result;
    }

    /**
     * dumpMemory(address, bits, length, format, ioBus)
     *
     * @this {Debugger}
     * @param {Address} [address] (default is addressData; advanced by the length of the dump)
     * @param {number} [bits] (default size is the memory bus data width; e.g., 8 bits)
     * @param {number} [length] (default length of dump is 128 values)
     * @param {string} [format] (formatting options; only 'y' for binary output is currently supported)
     * @param {boolean} [useIO] (true for busIO; default is busMemory)
     * @returns {string}
     */
    dumpMemory(address, bits, length, format, useIO)
    {
        let result = "";
        let bus = useIO? this.busIO : this.busMemory;
        if (!bits) bits = bus.dataWidth;
        let size = bits >> 3;
        if (!length) length = 128;
        let fASCII = false, cchBinary = 0;
        let cLines = ((length + 15) >> 4) || 1;
        let cbLine = (size == 4? 16 : this.nDefaultRadix);
        if (format == 'y') {
            cbLine = size;
            cLines = length;
            cchBinary = size * 8;
        }
        if (!address) address = this.addressData;
        while (cLines-- && length > 0) {
            let data = 0, iByte = 0, i;
            let sData = "", sChars = "";
            let sAddress = this.dumpAddress(address, bus);
            for (i = cbLine; i > 0 && length > 0; i--) {
                let b = this.readAddress(address, 1, bus);
                data |= (b << (iByte++ << 3));
                if (iByte == size) {
                    sData += this.toBase(data, 0, bits, "");
                    sData += (size == 1? (i == 9? '-' : ' ') : " ");
                    if (cchBinary) sChars += this.toBase(data, 2, bits, "");
                    data = iByte = 0;
                }
                if (!cchBinary) sChars += (b >= 32 && b < 127? String.fromCharCode(b) : (fASCII? '' : '.'));
                length--;
            }
            if (result) result += '\n';
            if (fASCII) {
                result += sChars;
            } else {
                result += sAddress + "  " + sData + " " + sChars;
            }
        }
        this.addressData = address;
        return result;
    }

    /**
     * dumpState()
     *
     * Simulate what the Machine class does to obtain the current state of the entire machine.
     *
     * @this {Debugger}
     * @returns {string}
     */
    dumpState()
    {
        let state = [];
        this.enumDevices(function enumDevice(device) {
            if (device.onSave) device.onSave(state);
            return true;
        });
        return JSON.stringify(state, null, 2);
    }

    /**
     * editMemory(address, values, useIO)
     *
     * @this {Debugger}
     * @param {Address|undefined} address
     * @param {Array.<number>} values
     * @param {boolean} [useIO] (true for busIO; default is busMemory)
     * @returns {string}
     */
    editMemory(address, values, useIO)
    {
        let count = 0, result = "";
        let bus = useIO? this.busIO : this.busMemory;
        for (let i = 0; address != undefined && i < values.length; i++) {
            let prev = this.readAddress(address, 0, bus);
            if (prev == undefined) break;
            this.writeAddress(address, values[i], bus);
            result += this.sprintf("%*a: %#*n changed to %#*n\n", this.busMemory.addrWidth, address, this.busMemory.dataWidth, prev, this.busMemory.dataWidth, values[i]);
            this.addAddress(address, 1, bus);
            count++;
        }
        if (!count) result += this.sprintf("%d locations updated\n", count);
        this.time.update();
        return result;
    }

    /**
     * enableHistory(enable)
     *
     * History refers to instruction execution history, which means we want to trap every read where
     * the requested address is the first byte of an instruction.  So if history is being enabled, we
     * preallocate an array to record every such physical address.
     *
     * The upside to this approach is that no special hooks are required inside the CPU, since we are
     * simply leveraging the Bus' ability to use different read handlers for all ROM and RAM blocks.
     *
     * @this {Debugger}
     * @param {boolean} [enable] (if undefined, then we simply return the current history status)
     * @returns {string}
     */
    enableHistory(enable)
    {
        let result = "";
        if (enable != undefined) {
            if (enable == !this.historyBuffer.length) {
                let cBlocks = 0;
                cBlocks += this.busMemory.enumBlocks(Memory.TYPE.READABLE, (block) => {
                    if (enable) {
                        this.busMemory.trapRead(block.addr, this.aBreakChecks[Debugger.BREAKTYPE.READ]);
                    } else {
                        this.busMemory.untrapRead(block.addr, this.aBreakChecks[Debugger.BREAKTYPE.READ]);
                    }
                });
                if (cBlocks) {
                    if (enable) {
                        this.historyNext = 0;
                        this.historyBuffer = new Array(Debugger.HISTORY_LIMIT);
                    } else {
                        this.historyBuffer = [];
                    }
                }
            }
        }
        result += this.sprintf("instruction history %s\n", this.historyBuffer.length? "enabled" : "disabled");
        return result;
    }

    /**
     * loadState(state)
     *
     * @this {Debugger}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            this.parseCommands(state.shift());
            this.machine.messages = state.shift();
            return true;
        }
        return false;
    }

    /**
     * notifyMessage(messages)
     *
     * Provides the Debugger with a notification whenever a message is being printed, along with the messages bits;
     * if any of those bits are set in messagesBreak, we break (ie, we stop the CPU).
     *
     * @this {Debugger}
     * @param {number} messages
     */
    notifyMessage(messages)
    {
        if (this.testBits(this.messagesBreak, messages)) {
            this.stopCPU("break on message");
            return;
        }
        /**
         * This is an effort to help keep the browser responsive when lots of messages are being generated.
         */
        this.time.yield();
    }

    /**
     * onCommand(aTokens)
     *
     * Processes basic debugger commands.
     *
     * @this {Debugger}
     * @param {Array.<string>} aTokens ([0] contains the entire command line; [1] and up contain tokens from the command)
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let cmd = aTokens[1], option = aTokens[2], values = [], aUndefined = [];
        let expr, name, index, address, bits, length, enable, useIO = false, result = "";

        this.fStepQuietly = undefined;

        if (option == '*') {
            index = -2;
        } else {
            index = this.parseInt(option);
            if (index == undefined) index = -1;
            address = this.parseAddress(option, aUndefined);
            if (address === null) return undefined;
        }

        length = 0;
        if (aTokens[3]) {
            length = this.parseInt(aTokens[3].substr(aTokens[3][0] == 'l'? 1 : 0)) || 8;
        }
        for (let i = 3; i < aTokens.length; i++) values.push(this.parseInt(aTokens[i], 16));

        if (cmd == 'd') {
            let dump = this.checkDumper(option, values);
            if (dump != undefined) return dump;
            cmd = this.sDumpPrev || cmd;
        }

        /**
         * We refrain from reporting potentially undefined symbols until after we've checked for dump extensions.
         */
        if (cmd[0] != 's' && aUndefined.length) {
            return "unrecognized symbol(s): " + aUndefined;
        }

        switch(cmd[0]) {
        case 'b':
            if (cmd[1] == 'c') {
                result = this.clearBreak(index);
            } else if (cmd[1] == 'd') {
                result = this.enableBreak(index);
            } else if (cmd[1] == 'e') {
                result = this.enableBreak(index, true);
            } else if (cmd[1] == 'i') {
                result = this.setBreak(address, Debugger.BREAKTYPE.INPUT);
            } else if (cmd[1] == 'l') {
                result = this.listBreak();
            } else if (cmd[1] == 'm') {
                result = this.setBreakMessage(option);
            } else if (cmd[1] == 'n') {
                result = this.setBreakCounter(index);
            } else if (cmd[1] == 'o') {
                result = this.setBreak(address, Debugger.BREAKTYPE.OUTPUT);
            } else if (cmd[1] == 'r') {
                result = this.setBreak(address, Debugger.BREAKTYPE.READ);
            } else if (cmd[1] == 'w') {
                result = this.setBreak(address, Debugger.BREAKTYPE.WRITE);
            } else if (cmd[1] == '?') {
                result = "break commands:\n";
                Debugger.BREAK_COMMANDS.forEach((cmd) => {result += cmd + '\n';});
                break;
            } else if (cmd[1]) {
                result = undefined;
            }
            break;

        case 'd':
            this.sDumpPrev = cmd;
            if (cmd[1] == 'b' || !cmd[1]) {
                bits = 8;
            } else if (cmd[1] == 'w') {
                bits = 16;
            } else if (cmd[1] == 'd') {
                bits = 32;
            } else if (cmd[1] == 'i') {
                if (!this.busIO) {
                    result = "invalid bus";
                    break;
                }
                bits = this.busIO.dataWidth;
                length = length || 1;
                useIO = true;
            } else if (cmd[1] == 'h') {
                this.sDumpPrev = "";
                result = this.dumpHistory(index, length);
                break;
            } else if (cmd[1] == '?') {
                this.sDumpPrev = "";
                result = "dump commands:\n";
                Debugger.DUMP_COMMANDS.forEach((cmd) => {result += cmd + '\n';});
                if (this.aDumpers.length) {
                    result += "dump extensions:\n";
                    for (let i = 0; i < this.aDumpers.length; i++) {
                        let dumper = this.aDumpers[i];
                        result += this.sprintf("d   %-12s%s\n", dumper.name, dumper.desc);
                    }
                }
                break;
            } else {
                this.sDumpPrev = "";
                result = undefined;
                break;
            }
            result = this.dumpMemory(address, bits, length, cmd[2], useIO);
            break;

        case 'e':
            if (cmd[1] == 'o') {
                if (!this.busIO) {
                    result = "invalid bus";
                    break;
                }
                useIO = true;
            } else if (cmd[1]) {
                result = undefined;
                break;
            }
            result = this.editMemory(address, values, useIO);
            break;

        case 'g':
            if (this.time.start()) {
                if (address != undefined) {
                    this.clearTemp();
                    result = this.setBreak(address);
                    if (result.indexOf(':') != 2) break;
                    this.setTemp(address);
                    result = "";
                }
                break;
            }
            result = "already started\n";
            break;

        case 'h':
            if (!this.time.stop()) result = "already stopped\n";
            break;

        case 'p':
            aTokens.shift();
            aTokens.shift();
            expr = aTokens.join(' ');
            result += this.sprintf("%s = %s\n", expr, this.toBase(this.parseExpression(expr)));
            break;

        case 'r':
            name = cmd.substr(1).toUpperCase();
            if (name) {
                if (this.cpu.getRegister(name) == undefined) {
                    result += this.sprintf("unrecognized register: %s\n", name);
                    break;
                }
                if (address != undefined) this.cpu.setRegister(name, address.off);
            }
            this.setAddress(this.addressCode, this.cpu.regPC);
            result += this.cpu.toString();
            break;

        case 's':
            enable = this.parseBoolean(option);
            if (cmd[1] == 'h') {
                /**
                 * Don't let the user turn off history if any breaks (which may depend on history) are still set.
                 */
                if (this.cBreaks || this.counterBreak > 0) {
                    enable = undefined;     // this ensures enableHistory() will simply return the status, not change it.
                }
                result = this.enableHistory(enable);
                if (enable != undefined) this.historyForced = enable;
            } else if (cmd[1] == 'p') {
                if (index > 0) {
                    this.time.setSpeed(index);
                    result = "target speed:  " + this.time.getSpeedTarget();
                } else {
                    result = "current speed: " + this.time.getSpeedCurrent();
                }
            } else if (cmd[1] == 's' && this.styles) {
                index = this.styles.indexOf(option);
                if (index >= 0) this.style = this.styles[index];
                result = "style: " + this.style;
            } else if (cmd[1] == '?') {
                result = "set commands:\n";
                Debugger.SET_COMMANDS.forEach((cmd) => {result += cmd + '\n';});
                break;
            } else {
                result = undefined;
            }
            break;

        case 't':
            length = this.parseInt(option, 10) || 1;
            this.fStepQuietly = true;
            if (cmd[1]) {
                if (cmd[1] != 'r') {
                    result = undefined;
                    break;
                }
                this.fStepQuietly = false;
            }
            this.time.onStep(length);
            break;

        case 'u':
            if (cmd[1]) {
                result = undefined;
                break;
            }
            if (!length) length = 8;
            if (!address) address = this.addressCode;
            result += this.dumpInstruction(address, length);
            this.addressCode = address;
            break;

        case '?':
            result = "debugger commands:\n";
            Debugger.COMMANDS.forEach((cmd) => {result += cmd + '\n';});
            break;

        default:
            result = undefined;
            break;
        }

        if (result == undefined && aTokens[0]) {
            result = "unrecognized command '" + aTokens[0] + "' (try '?')\n";
        }

        return result;
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {Debugger}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state) {
            let stateDbg = state[0];
            if (this.loadState(stateDbg)) {
                state.shift();
                return true;
            }
        }
        return false;
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {Debugger}
     * @param {Array} state
     */
    onSave(state)
    {
        let stateDbg = [];
        this.saveState(stateDbg);
        state.push(stateDbg);
        this.cTransitions = 0;
    }

    /**
     * onUpdate(fTransition)
     *
     * @this {Debugger}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (fTransition) {
            if (this.time.isRunning()) {
                this.restoreFocus();
            } else {
                if (this.fStepQuietly) {
                    this.print(this.dumpInstruction(this.cpu.regPC, 1));
                } else {
                    if (this.cInstructions) {
                        this.cpu.printf("%d instructions executed\n", this.cInstructions);
                        this.cInstructions = 0;
                    }
                    this.cpu.print(this.cpu.toString());
                    if (this.fStepQuietly == undefined) this.setFocus();
                }
            }
            this.cTransitions++;
        }
    }

    /**
     * saveState(stateDbg)
     *
     * @this {Debugger}
     * @param {Array} stateDbg
     */
    saveState(stateDbg)
    {
        stateDbg.push(this.idDevice);
        stateDbg.push(this.listBreak(true));
        stateDbg.push(this.machine.messages);
    }

    /**
     * restoreFocus()
     *
     * We don't want to "rip" focus from the user if this is the first transition (ie, the page containing
     * the machine has just finished loading); we use a transition count as a simple way of achieving that.
     *
     * @this {Debugger}
     */
    restoreFocus()
    {
        if (this.cTransitions && this.input) this.input.setFocus();
    }

    /**
     * setFocus()
     *
     * @this {Debugger}
     */
    setFocus()
    {
        if (this.cTransitions) {
            let element = this.findBinding(Debugger.BINDING.PRINT, true);
            if (element) element.focus();
        }
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Returns a string representation of the selected instruction.  Since all processor-specific code
     * should be in the overriding function, all we can do here is display the address and an opcode.
     *
     * @this {Debugger}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let getNextOp = () => {
            let op = opcodes.shift();
            this.addAddress(address, 1);
            return op;
        };
        let sAddress = this.dumpAddress(address);
        return this.sprintf("%s %02x       unsupported       ; %s\n", sAddress, getNextOp(), annotation || "");
    }
}

// Debugger.CLASSES["Debugger"] = Debugger;
