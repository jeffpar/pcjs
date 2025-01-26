/**
 * @fileoverview Common PCjs Debugger support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StrLib from "./strlib.js";
import Component from "./component.js";
import { DEBUGGER, MAXDEBUG } from "./defines.js";

/**
 * Debugger Address Object
 *
 * This is the basic structure; other debuggers may extend it.
 *
 * @typedef {Object} DbgAddr
 * @property {number}  [addr]
 * @property {boolean} [fTemporary]     (true if this is a temporary breakpoint address)
 * @property {string}  [sCmd]           (set for breakpoint addresses if there's an associated command string)
 * @property {Array.<string>} [aCmds]   (preprocessed commands (from sCmd))
 */

/**
 * Since the Closure Compiler treats ES6 classes as @struct rather than @dict by default,
 * it deters us from defining named properties on our components; eg:
 *
 *      this['exports'] = {...}
 *
 * results in an error:
 *
 *      Cannot do '[]' access on a struct
 *
 * So, in order to define 'exports', we must override the @struct assumption by annotating
 * the class as @unrestricted (or @dict).  Note that this must be done both here and in the
 * subclass (eg, SerialPort), because otherwise the Compiler won't allow us to *reference*
 * the named property either.
 *
 * TODO: Consider marking ALL our classes unrestricted, because otherwise it forces us to
 * define every single property the class uses in its constructor, which results in a fair
 * bit of redundant initialization, since many properties aren't (and don't need to be) fully
 * initialized until the appropriate init(), reset(), restore(), etc. function is called.
 *
 * The upside, however, may be that since the structure of the class is completely defined by
 * the constructor, JavaScript engines may be able to optimize and run more efficiently.
 *
 * @class DbgLib
 * @unrestricted
 */
export default class DbgLib extends Component {
    /**
     * DbgLib(parmsDbg)
     *
     * The DbgLib component supports the following optional (parmsDbg) properties:
     *
     *      base: the base to use for most numeric input/output (default is 16)
     *
     * The DbgLib component is a shared component containing a subset of functionality used by
     * the other CPU-specific Debuggers (eg, Debuggerx86).  Over time, the goal is to factor out as
     * much common debugging support as possible from those components into this one.
     *
     * @this {DbgLib}
     * @param {string} type
     * @param {Object} [parmsDbg]
     * @param {number} [bitsMessage] selects message(s) that the component wants to enable (default is 0)
     */
    constructor(type, parmsDbg, bitsMessage)
    {
        super(type, parmsDbg, bitsMessage);

        if (DEBUGGER) {

            /*
             * Default base used to display all values; modified with the "s base" command.
             */
            this.nBase = +parmsDbg['base'] || 16;

            /*
             * Default number of bits of integer precision; it can be overridden by the Debugger
             * but there is no command to adjust it.
             */
            this.nBits = 32;

            this.achGroup = ['{','}'];
            this.achAddress = ['[',']'];

            /*
             * These keep track of instruction activity, but only when tracing or when Debugger checks
             * have been enabled (eg, one or more breakpoints have been set).
             *
             * They are zeroed by the reset() notification handler.  cInstructions is advanced by
             * stepCPU() and checkInstruction() calls.  nCycles is updated by every stepCPU() or stop()
             * call and simply represents the number of cycles performed by the last run of instructions.
             */
            this.nCycles = 0;
            this.cOpcodes = this.cOpcodesStart = 0;

            /*
             * fAssemble is true when "assemble mode" is active, false when not.
             */
            this.fAssemble = false;

            /*
             * This maintains command history.  New commands are inserted at index 0 of the array.
             * When Enter is pressed on an empty input buffer, we default to the command at aPrevCmds[0].
             */
            this.iPrevCmd = -1;
            this.aPrevCmds = [];

            /*
             * aVariables is an object with properties that grow as setVariable() assigns more variables;
             * each property corresponds to one variable, where the property name is the variable name (ie,
             * a string beginning with a non-digit, followed by zero or more symbol characters and/or digits)
             * and the property value is the variable's numeric value.  See doVar() and setVariable() for
             * details.
             *
             * Note that parseValue() parses variables before numbers, so any variable that looks like a
             * unprefixed hex value (eg, "a5" as opposed to "0xa5") will trump the numeric value.  Unprefixed
             * hex values are a convenience of parseValue(), which always calls StrLib.parseInt() with a default
             * base of 16; however, that default be overridden with a variety of explicit prefixes or suffixes
             * (eg, a leading "0o" to indicate octal, a trailing period to indicate decimal, etc.)
             *
             * See StrLib.parseInt() for more details about supported numbers.
             */
            this.aVariables = {};

            /*
             * Array of functions to call when notifyEvent() is called.  Functions are added with onEvent().
             */
            this.afnNotify = [];

        }   // endif DEBUGGER
    }

    /**
     * getRegIndex(sReg, off)
     *
     * NOTE: This must be implemented by the individual debuggers.
     *
     * @this {DbgLib}
     * @param {string} sReg
     * @param {number} [off] optional offset into sReg
     * @returns {number} register index, or -1 if not found
     */
    getRegIndex(sReg, off)
    {
        return -1;
    }

    /**
     * getRegValue(iReg)
     *
     * NOTE: This must be implemented by the individual debuggers.
     *
     * @this {DbgLib}
     * @param {number} iReg
     * @returns {number|undefined}
     */
    getRegValue(iReg)
    {
        return undefined;
    }

    /**
     * parseAddrReference(s, sAddr)
     *
     * Returns the given string with the given address reference replaced with the contents of that address.
     *
     * NOTE: This must be implemented by the individual debuggers.
     *
     * @this {DbgLib}
     * @param {string} s
     * @param {string} sAddr
     * @returns {string}
     */
    parseAddrReference(s, sAddr)
    {
        return s.replace('[' + sAddr + ']', "unimplemented");
    }

    /**
     * getNextCommand()
     *
     * @this {DbgLib}
     * @returns {string}
     */
    getNextCommand()
    {
        let sCmd;
        if (this.iPrevCmd > 0) {
            sCmd = this.aPrevCmds[--this.iPrevCmd];
        } else {
            sCmd = "";
            this.iPrevCmd = -1;
        }
        return sCmd;
    }

    /**
     * getPrevCommand()
     *
     * @this {DbgLib}
     * @returns {string|null}
     */
    getPrevCommand()
    {
        let sCmd = null;
        if (this.iPrevCmd < this.aPrevCmds.length - 1) {
            sCmd = this.aPrevCmds[++this.iPrevCmd];
        }
        return sCmd;
    }

    /**
     * parseCommand(sCmd, fSave, chSep)
     *
     * @this {DbgLib}
     * @param {string|undefined} sCmd
     * @param {boolean} [fSave] is true to save the command, false if not
     * @param {string} [chSep] is the command separator character (default is ';')
     * @returns {Array.<string>}
     */
    parseCommand(sCmd, fSave, chSep)
    {
        if (fSave) {
            if (!sCmd) {
                if (this.fAssemble) {
                    sCmd = "end";
                } else {
                    sCmd = this.aPrevCmds[this.iPrevCmd+1];
                }
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
        let a = [];
        if (sCmd) {
            /*
             * With the introduction of breakpoint commands (ie, quoted command sequences
             * associated with a breakpoint), we can no longer perform simplistic splitting.
             *
             *      a = sCmd.split(chSep || ';');
             *      for (let i = 0; i < a.length; i++) a[i] = StrLib.trim(a[i]);
             *
             * We may now split on semi-colons ONLY if they are outside a quoted sequence.
             *
             * Also, to allow quoted strings *inside* breakpoint commands, we first replace all
             * DOUBLE double-quotes with single quotes.
             */
            sCmd = sCmd.replace(/""/g, "'");

            let iPrev = 0;
            let chQuote = null;
            chSep = chSep || ';';
            /*
             * NOTE: Processing charAt() up to and INCLUDING length is not a typo; we're taking
             * advantage of the fact that charAt() with an invalid index returns an empty string,
             * allowing us to use the same substring() call to capture the final portion of sCmd.
             *
             * In a sense, it allows us to pretend that the string ends with a zero terminator.
             */
            for (let i = 0; i <= sCmd.length; i++) {
                let ch = sCmd.charAt(i);
                if (ch == '"' || ch == "'") {
                    if (!chQuote) {
                        chQuote = ch;
                    } else if (ch == chQuote) {
                        chQuote = null;
                    }
                }
                else if (ch == chSep && !chQuote || !ch) {
                    /*
                     * Recall that substring() accepts starting (inclusive) and ending (exclusive)
                     * indexes, whereas substr() accepts a starting index and a length.  We need the former.
                     */
                    a.push(StrLib.trim(sCmd.substring(iPrev, i)));
                    iPrev = i + 1;
                }
            }
        }
        return a;
    }

    /**
     * evalAND(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.AND().
     *
     * Performs the bitwise "and" (AND) of two operands > 32 bits.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst & src)
     */
    evalAND(dst, src)
    {
        /*
         * We AND the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 AND 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nBits <= 32) {
            return dst & src;
        }
        /*
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / DbgLib.TWO_POW32)|0) & ((src / DbgLib.TWO_POW32)|0)) * DbgLib.TWO_POW32) + ((dst & src) >>> 0);
    }

    /**
     * evalIOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.IOR().
     *
     * Performs the logical "inclusive-or" (OR) of two operands > 32 bits.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst | src)
     */
    evalIOR(dst, src)
    {
        /*
         * We OR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 OR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nBits <= 32) {
            return dst | src;
        }
        /*
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / DbgLib.TWO_POW32)|0) | ((src / DbgLib.TWO_POW32)|0)) * DbgLib.TWO_POW32) + ((dst | src) >>> 0);
    }

    /**
     * evalXOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.XOR().
     *
     * Performs the logical "exclusive-or" (XOR) of two operands > 32 bits.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst ^ src)
     */
    evalXOR(dst, src)
    {
        /*
         * We XOR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 XOR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nBits <= 32) {
            return dst ^ src;
        }
        /*
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / DbgLib.TWO_POW32)|0) ^ ((src / DbgLib.TWO_POW32)|0)) * DbgLib.TWO_POW32) + ((dst ^ src) >>> 0);
    }

    /**
     * evalMUL(dst, src)
     *
     * I could have adapted the code from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.doMUL(), but it was simpler to
     * write this base method and let the PDP-10 Debugger override it with a call to the *actual* doMUL() method.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst * src)
     */
    evalMUL(dst, src)
    {
        return dst * src;
    }

    /**
     * truncate(v, nBits, fUnsigned)
     *
     * @this {DbgLib}
     * @param {number} v
     * @param {number} [nBits]
     * @param {boolean} [fUnsigned]
     * @returns {number}
     */
    truncate(v, nBits, fUnsigned)
    {
        let limit, vNew = v;
        nBits = nBits || this.nBits;

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
            if (MAXDEBUG) this.printf("warning: value %d truncated to %d\n", v, vNew);
            v = vNew;
        }
        return v;
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
     * @this {DbgLib}
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
         // case '_':
            case '^_':
                valNew = val1;
                /*
                 * While we always try to avoid assuming any particular number of bits of precision, the 'B' shift
                 * operator (which we've converted to '^_') is unique to the MACRO-10 environment, which imposes the
                 * following restrictions on the shift count.
                 */
                if (chOp == '^_') val2 = 35 - (val2 & 0xff);
                if (val2) {
                    /*
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
     * @param {Array.<string>} asValues
     * @param {number} iValue
     * @param {number} iLimit
     * @param {number} nBase
     * @param {Array|undefined} [aUndefined]
     * @returns {number|undefined}
     */
    parseArray(asValues, iValue, iLimit, nBase, aUndefined)
    {
        let value;
        let sValue, sOp;
        let fError = false;
        let nUnary = 0;
        let aVals = [], aOps = [];

        let nBasePrev = this.nBase;
        this.nBase = nBase;

        while (iValue < iLimit) {
            let v;
            sValue = asValues[iValue++].trim();
            sOp = (iValue < iLimit? asValues[iValue++] : "");

            if (sValue) {
                v = this.parseValue(sValue, undefined, aUndefined, nUnary);
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
                    v = this.parseArray(asValues, iStart, iValue-1, this.nBase, aUndefined);
                    if (v != null && nUnary) {
                        v = this.parseUnary(v, nUnary);
                    }
                    sValue = (iValue < iLimit? asValues[iValue++].trim() : "");
                    sOp = (iValue < iLimit? asValues[iValue++] : "");
                }
                else {
                    /*
                     * When parseExpression() calls us, it has collapsed all runs of whitespace into single spaces,
                     * and although it allows single spaces to divide the elements of the expression, a space is neither
                     * a unary nor binary operator.  It's essentially a no-op.  If we encounter it here, then it followed
                     * another operator and is easily ignored (although perhaps it should still trigger a reset of nBase
                     * and nUnary -- TBD).
                     */
                    if (sOp == ' ') {
                        continue;
                    }
                    if (sOp == '^B') {
                        this.nBase = 2;
                        continue;
                    }
                    if (sOp == '^O') {
                        this.nBase = 8;
                        continue;
                    }
                    if (sOp == '^D') {
                        this.nBase = 10;
                        continue;
                    }
                    if (!(nUnary & (0xC0000000|0))) {
                        if (sOp == '+') {
                            continue;
                        }
                        if (sOp == '-') {
                            nUnary = (nUnary << 2) | 1;
                            continue;
                        }
                        if (sOp == '~' || sOp == '^-') {
                            nUnary = (nUnary << 2) | 2;
                            continue;
                        }
                        if (sOp == '^L') {
                            nUnary = (nUnary << 2) | 3;
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
                    aUndefined = [];
                    break;
                }
            }

            aVals.push(this.truncate(v));

            /*
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

            let aBinOp = (this.achGroup[0] == '<'? DbgLib.aDECOpPrecedence : DbgLib.aBinOpPrecedence);
            if (!aBinOp[sOp]) {
                fError = true;
                break;
            }
            if (aOps.length && aBinOp[sOp] <= aBinOp[aOps[aOps.length - 1]]) {
                this.evalOps(aVals, aOps, 1);
            }
            aOps.push(sOp);

            /*
             * The MACRO-10 binary shifting operator assumes a base-10 shift count, regardless of the current
             * base, so we must override the current base to ensure the count is parsed correctly.
             */
            this.nBase = (sOp == '^_')? 10 : nBase;
            nUnary = 0;
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

        this.nBase = nBasePrev;
        return value;
    }

    /**
     * parseASCII(sExp, chDelim, nBits, cchMax)
     *
     * @this {DbgLib}
     * @param {string} sExp
     * @param {string} chDelim
     * @param {number} nBits
     * @param {number} cchMax
     * @returns {string|undefined}
     */
    parseASCII(sExp, chDelim, nBits, cchMax)
    {
        let i;
        while ((i = sExp.indexOf(chDelim)) >= 0) {
            let v = 0;
            let j = i + 1;
            let cch = cchMax;
            while (j < sExp.length) {
                let ch = sExp[j++];
                if (ch == chDelim) {
                    cch = -1;
                    break;
                }
                if (!cch) break;
                cch--;
                let c = ch.charCodeAt(0);
                if (nBits == 7) {
                    c &= 0x7F;
                } else {
                    c = (c - 0x20) & 0x3F;
                }
                v = this.truncate(v * Math.pow(2, nBits) + c, nBits * cchMax, true);
            }
            if (cch >= 0) {
                this.printf("parse error (%s%s%s)\n", chDelim, sExp, chDelim);
                return undefined;
            } else {
                sExp = sExp.substr(0, i) + this.toStrBase(v, -1) + sExp.substr(j);
            }
        }
        return sExp;
    }

    /**
     * parseExpression(sExp, fQuiet)
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
     * fQuiet can be used to pass an array that collects any undefined variables that parseExpression()
     * encounters; the value of an undefined variable is zero.  This mode was added for components that need
     * to support expressions containing "fixups" (ie, values that must be determined later).
     *
     * @this {DbgLib}
     * @param {string|undefined} sExp
     * @param {Array|undefined|boolean} [fQuiet]
     * @returns {number|undefined} numeric value, or undefined if sExp contains any undefined or invalid values
     */
    parseExpression(sExp, fQuiet)
    {
        let value = undefined;
        let fPrint = (fQuiet === false);
        let aUndefined = Array.isArray(fQuiet)? fQuiet : undefined;

        if (sExp) {

            /*
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
                sExp = sExp.split(this.achGroup[0]).join('{').split(this.achGroup[1]).join('}');
            }

            /*
             * Quoted ASCII characters can have a numeric value, too, which must be converted now, to avoid any
             * conflicts with the operators below.
             */
            sExp = this.parseASCII(sExp, '"', 7, 5);    // MACRO-10 packs up to 5 7-bit ASCII codes into a value
            if (!sExp) return value;
            sExp = this.parseASCII(sExp, "'", 6, 6);    // MACRO-10 packs up to 6 6-bit ASCII (SIXBIT) codes into a value
            if (!sExp) return value;

            /*
             * All browsers (including, I believe, IE9 and up) support the following idiosyncrasy of a RegExp split():
             * when the RegExp uses a capturing pattern, the resulting array will include entries for all the pattern
             * matches along with the non-matches.  This effectively means that, in the set of expressions that we
             * support, all even entries in asValues will contain "values" and all odd entries will contain "operators".
             *
             * Although I started listing the operators in the RegExp in "precedential" order, that's not important;
             * what IS important is listing operators that contain shorter operators first.  For example, bitwise
             * shift operators must be listed BEFORE the logical less-than or greater-than operators.  The aBinOp tables
             * (aBinOpPrecedence and aDECOpPrecedence) are what determine precedence, not the RegExp.
             *
             * Also, to better accommodate MACRO-10 syntax, I've replaced the single '^' for XOR with '^!', and I've
             * added '!' as an alias for '|' (bitwise inclusive-or), '^-' as an alias for '~' (one's complement operator),
             * and '_' as a shift operator (+/- values specify a left/right shift, and the count is not limited to 32).
             *
             * 2023 Update: I've removed '_' as a shift operator, because it interferes with symbols that use underscores.
             *
             * And to avoid conflicts with MACRO-10 syntax, I've replaced the original mod operator ('%') with '^/'.
             *
             * The MACRO-10 binary shifting suffix ('B') is a bit more problematic, since a capital B can also appear
             * inside symbols, or inside hex values.  So if the default base is NOT 16, then I pre-scan for that suffix
             * and replace all non-symbolic occurrences with an internal shift operator ('^_').
             *
             * Note that StrLib.parseInt(), which parseValue() relies on, supports both the MACRO-10 base prefix overrides
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
            let regExp = /({|}|\|\||&&|\||\^!|\^B|\^O|\^D|\^L|\^-|~|\^_|&|!=|!|==|>=|>>>|>>|>|<=|<<|<|-|\+|\^\/|\/|\*|,,| )/;
            if (this.nBase != 16) {
                sExp = sExp.replace(/(^|[^A-Z0-9$%.])([0-9]+)B/, "$1$2^_").replace(/\s+/g, ' ');
            }
            let asValues = sExp.split(regExp);
            value = this.parseArray(asValues, 0, asValues.length, this.nBase, aUndefined);
            if (value !== undefined && fPrint) {
                this.printValue(null, value);
            }
        }
        return value;
    }

    /**
     * parseReference(s)
     *
     * Returns the given string with any "{expression}" sequences replaced with the value of the expression,
     * and any "[address]" references replaced with the contents of the address.  Expressions are parsed BEFORE
     * addresses.
     *
     * @this {DbgLib}
     * @param {string} s
     * @returns {string|undefined}
     */
    parseReference(s)
    {
        let a;
        let chOpen = this.achGroup[0];
        let chClose = this.achGroup[1];
        let chEscape = (chOpen == '(' || chOpen == '{' || chOpen == '[')? '\\' : '';
        let chInnerEscape = (chOpen == '['? '\\' : '');
        let reSubExp = new RegExp(chEscape + chOpen + "([^" + chInnerEscape + chOpen + chInnerEscape + chClose + "]+)" + chEscape + chClose);
        while ((a = s.match(reSubExp))) {
            let value = this.parseExpression(a[1]);
            if (value === undefined) return undefined;
            let sSearch = chOpen + a[1] + chClose;
            let sReplace = value != null? this.toStrBase(value) : "undefined";
            /*
             * Note that by default, the String replace() method only replaces the FIRST occurrence,
             * and there MIGHT be more than one occurrence of the expression we just parsed, so we could
             * do this instead:
             *
             *      s = s.split(sSearch).join(sReplace);
             *
             * However, that's knd of an expensive (slow) solution, and it's not strictly necessary, since
             * any additional identical expressions will be picked up on a subsequent iteration through this loop.
             */
            s = s.replace(sSearch, sReplace);
        }
        if (this.achAddress.length) {
            chOpen = this.achAddress[0];
            chClose = this.achAddress[1];
            chEscape = (chOpen == '(' || chOpen == '{' || chOpen == '[')? '\\' : '';
            chInnerEscape = (chOpen == '['? '\\' : '');
            reSubExp = new RegExp(chEscape + chOpen + "([^" + chInnerEscape + chOpen + chInnerEscape + chClose + "]+)" + chEscape + chClose);
            while ((a = s.match(reSubExp))) {
                s = this.parseAddrReference(s, a[1]);
            }
        }
        return this.parseSysVars(s);
    }

    /**
     * parseSysVars(s)
     *
     * Returns the given string with any recognized "$var" replaced with its value; eg:
     *
     *      $ops: the number of opcodes executed since the last time it was displayed (or reset)
     *
     * @this {DbgLib}
     * @param {string} s
     * @returns {string}
     */
    parseSysVars(s)
    {
        let a;
        while ((a = s.match(/\$([a-z]+)/i))) {
            let v = null;
            switch(a[1].toLowerCase()) {
            case "ops":
                v = this.cOpcodes - this.cOpcodesStart;
                break;
            }
            if (v == null) break;
            s = s.replace(a[0], v.toString());
        }
        return s;
    }

    /**
     * parseUnary(value, nUnary)
     *
     * nUnary is actually a small "stack" of unary operations encoded in successive pairs of bits.
     * As parseExpression() encounters each unary operator, nUnary is shifted left 2 bits, and the
     * new unary operator is encoded in bits 0 and 1 (0b00 is none, 0b01 is negate, 0b10 is complement,
     * and 0b11 is reserved).  Here, we process the bits in reverse order (hence the stack-like nature),
     * ensuring that we process the unary operators associated with this value right-to-left.
     *
     * Since bitwise operators see only 32 bits, more than 16 unary operators cannot be supported
     * using this method.  We'll let parseExpression() worry about that; if it ever happens in practice,
     * then we'll have to switch to a more "expensive" approach (eg, an actual array of unary operators).
     *
     * @this {DbgLib}
     * @param {number} value
     * @param {number} nUnary
     * @returns {number}
     */
    parseUnary(value, nUnary)
    {
        while (nUnary) {
            let bit;
            switch(nUnary & 0o3) {
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
            nUnary >>>= 2;
        }
        return value;
    }

    /**
     * parseValue(sValue, sName, fQuiet, nUnary)
     *
     * @this {DbgLib}
     * @param {string} [sValue]
     * @param {string} [sName] is the name of the value, if any
     * @param {Array|boolean} [fQuiet]
     * @param {number} [nUnary] (0 for none, 1 for negate, 2 for complement, 3 for leading zeros)
     * @returns {number|undefined} numeric value, or undefined if sValue is either undefined or invalid
     */
    parseValue(sValue, sName, fQuiet, nUnary = 0)
    {
        let value;
        let aUndefined = Array.isArray(fQuiet)? fQuiet : undefined;

        if (sValue != undefined) {
            let iReg = this.getRegIndex(sValue);
            if (iReg >= 0) {
                value = this.getRegValue(iReg);
            } else {
                value = this.getVariable(sValue);
                if (value != undefined) {
                    let sUndefined = this.getVariableFixup(sValue);
                    if (sUndefined) {
                        if (aUndefined) {
                            aUndefined.push(sUndefined);
                        } else {
                            let valueUndefined = this.parseExpression(sUndefined, fQuiet);
                            if (valueUndefined !== undefined) {
                                value += valueUndefined;
                            } else {
                                if (!fQuiet) {
                                    this.printf("undefined %s: %s (%s)\n", (sName || "value"), sValue, sUndefined);
                                }
                                value = undefined;
                            }
                        }
                    }
                } else {
                    /*
                     * A feature of MACRO-10 is that any single-digit number is automatically interpreted as base-10.
                     */
                    value = StrLib.parseInt(sValue, sValue.length > 1 || this.nBase > 10? this.nBase : 10);
                }
            }
            if (value != undefined) {
                value = this.truncate(this.parseUnary(value, nUnary));
            } else {
                if (!fQuiet) {
                    this.printf("invalid %s: %s\n", (sName || "value"), sValue);
                }
            }
        } else {
            if (!fQuiet) {
                this.printf("missing %s\n", (sName || "value"));
            }
        }
        return value;
    }

    /**
     * printValue(sVar, value)
     *
     * @this {DbgLib}
     * @param {string|null|*} sVar
     * @param {number|undefined} value
     * @returns {boolean} true if value defined, false if not
     */
    printValue(sVar, value)
    {
        let sValue;
        let fDefined = false;
        if (value !== undefined) {
            fDefined = true;
            if (this.nBase == 8) {
                sValue = this.toStrBase(value, this.nBits, 8, 1) + "  " + value + '.';
            } else {
                sValue = this.toStrBase(value, this.nBits, 16, 1) + "  " + this.toStrBase(value, this.nBits, 8, 1) + "  " + this.toStrBase(value, this.nBits, 2, this.nBits <= 32? 8 : 6) + "  " + value + '.';
            }
            if (value >= 0x20 && value < 0x7F) {
                sValue += " '" + String.fromCharCode(value) + "'";
            }
        }
        sVar = (sVar != null? (sVar + ": ") : "");
        this.printf("%s%s\n", sVar, sValue);
        return fDefined;
    }

    /**
     * resetVariables()
     *
     * @this {DbgLib}
     * @returns {Object}
     */
    resetVariables()
    {
        let a = this.aVariables;
        this.aVariables = {};
        return a;
    }

    /**
     * restoreVariables(a)
     *
     * @this {DbgLib}
     * @param {Object} a (from previous resetVariables() call)
     */
    restoreVariables(a)
    {
        this.aVariables = a;
    }

    /**
     * printVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} [sVar]
     * @returns {boolean} true if all value(s) defined, false if not
     */
    printVariable(sVar)
    {
        let cVariables = 0;
        if (this.aVariables) {
            if (sVar) {
                return this.printValue(sVar, this.aVariables[sVar] && this.aVariables[sVar].value);
            }
            let aVars = Object.keys(this.aVariables);
            aVars.sort();
            for (let i = 0; i < aVars.length; i++) {
                this.printValue(aVars[i], this.aVariables[aVars[i]].value);
                cVariables++;
            }
        }
        return cVariables > 0;
    }

    /**
     * delVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     */
    delVariable(sVar)
    {
        delete this.aVariables[sVar];
    }

    /**
     * getVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @returns {number|undefined}
     */
    getVariable(sVar)
    {
        if (this.aVariables[sVar]) {
            return this.aVariables[sVar].value;
        }
        sVar = sVar.substr(0, 6);
        return this.aVariables[sVar] && this.aVariables[sVar].value;
    }

    /**
     * getVariableFixup(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @returns {string|undefined}
     */
    getVariableFixup(sVar)
    {
        return this.aVariables[sVar] && this.aVariables[sVar].sUndefined;
    }

    /**
     * isVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @returns {boolean}
     */
    isVariable(sVar)
    {
        return this.aVariables[sVar] !== undefined;
    }

    /**
     * setVariable(sVar, value, sUndefined)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @param {number} value
     * @param {string|undefined} [sUndefined]
     */
    setVariable(sVar, value, sUndefined)
    {
        this.aVariables[sVar] = {value, sUndefined};
    }

    /**
     * toStrBase(n, nBits, nBase, nGrouping)
     *
     * Use this instead of Str's toOct()/toDec()/toHex() to convert numbers to the Debugger's default base.
     *
     * @this {DbgLib}
     * @param {number|null|undefined} n
     * @param {number} [nBits] (-1 to strip leading zeros, 0 to allow a variable number of digits)
     * @param {number} [nBase]
     * @param {number} [nGrouping] (if nBase is 2, this is a grouping; otherwise, it's a prefix condition)
     * @returns {string}
     */
    toStrBase(n, nBits = 0, nBase = 0, nGrouping = 0)
    {
        let s;
        switch(nBase || this.nBase) {
        case 2:
            s = StrLib.toBin(n, nBits > 0? nBits : 0, nGrouping);
            break;
        case 8:
            s = StrLib.toOct(n, nBits > 0? ((nBits + 2)/3)|0 : 0, !!nGrouping);
            break;
        case 10:
            /*
             * The multiplier is actually Math.log(2)/Math.log(10), but an approximation is more than adequate.
             */
            s = StrLib.toDec(n, nBits > 0? Math.ceil(nBits * 0.3) : 0);
            break;
        case 16:
        default:
            s = StrLib.toHex(n, nBits > 0? ((nBits + 3) >> 2) : 0, !!nGrouping);
            break;
        }
        return (nBits < 0? StrLib.stripLeadingZeros(s) : s);
    }

    /**
     * onEvent(fnNotify)
     *
     * @param {function()} fnNotify
     */
    onEvent(fnNotify)
    {
        this.afnNotify.push(fnNotify);
    }

    /**
     * notifyEvent(nEvent, dataEvent)
     *
     * @param {number} nEvent (see DbgLib.EVENTS)
     * @param {number} [dataEvent] (optional data for event)
     */
    notifyEvent(nEvent, dataEvent)
    {
        for (let i = 0; i < this.afnNotify.length; i++) {
            this.afnNotify[i](nEvent, dataEvent);
        }
    }
}

if (DEBUGGER) {

    /*
     * These are our operator precedence tables.  Operators toward the bottom (with higher values) have
     * higher precedence.  aBinOpPrecedence was our original table; we had to add aDECOpPrecedence because
     * the precedence of operators in DEC's MACRO-10 expressions differ.  Having separate tables also allows
     * us to remove operators that shouldn't be supported, but unless some operator creates a problem,
     * I prefer to keep as much commonality between the tables as possible.
     *
     * Missing from these tables are the (limited) set of unary operators we support (negate and complement),
     * since this is only a BINARY operator precedence, not a general-purpose precedence table.  Assume that
     * all unary operators take precedence over all binary operators.
     */
    DbgLib.aBinOpPrecedence = {
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
    //  '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };
    DbgLib.aDECOpPrecedence = {
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
    //  '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };

    /*
     * Assorted constants
     */
    DbgLib.TWO_POW32 = Math.pow(2, 32);

}   // endif DEBUGGER

DbgLib.EVENTS = {
    EXIT:       0,
    ENTER:      1,
    READY:      2,
};
