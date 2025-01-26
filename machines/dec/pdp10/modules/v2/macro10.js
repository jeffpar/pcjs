/**
 * @fileoverview A MACRO-10 "work-alike" Mini-Assembler for the PDP-10
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DebuggerPDP10 from "./debugger.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { MAXDEBUG, PDP10 } from "./defines.js";

/**
 * Elements of tblMacros.
 *
 * @typedef {Object} Mac
 * @property {string} name
 * @property {number} nOperand
 * @property {Array.<string>} aParms
 * @property {Array.<string>} aDefaults
 * @property {Array.<string>} aValues
 * @property {string} sText
 * @property {number} nLine
 */

/**
 * Elements of tblSymbols.
 *
 * @typedef {Object} Sym
 * @property {string} name
 * @property {number} value
 * @property {number} nType
 * @property {number} nLine
 */

/**
 * Elements of aLiterals.
 *
 * @typedef {Object} Lit
 * @property {string} name
 * @property {Array.<number>} aWords
 * @property {Array.<string>} aFixups
 */

/**
 * Elements of stackScopes.
 *
 * @typedef {Object} Scope
 * @property {string} [name]
 * @property {Array.<number>} aWords
 * @property {Array.<string>} aFixups
 * @property {number} nLocation
 * @property {number} nLocationScope
 * @property {number} nLine
 */

/**
 * @class Macro10
 * @property {string} sURL
 * @property {number|null} addrLoad
 * @property {string} sOptions
 * @property {DebuggerPDP10} dbg
 * @property {function(...)|undefined} done
 * @property {number} iURL
 * @property {Array.<string>} aURLs
 * @property {Array.<number>} anLines
 * @property {Array.<string>} asLines
 * @property {number|null|undefined} addrStart
 * @unrestricted
 */
export default class Macro10 {
    /**
     * Macro10(dbg)
     *
     * A "mini" version of DEC's MACRO-10 assembler, with just enough features to support the handful
     * of DEC diagnostic source code files that we choose to throw at it.
     *
     * We rely on the calling component (dbg) to provide a variety of helper services (eg, printf(),
     * parseExpression(), etc).  This is NOT a subclass of Component, so Component services are not part
     * of this class.
     *
     * @this {Macro10}
     * @param {DebuggerPDP10} dbg (used to provide helper services to the Macro10 class)
     */
    constructor(dbg)
    {
        this.dbg = dbg;
    }

    /**
     * init(addrLoad, sOptions, done)
     *
     * Initializes all instance properties.  Called by assembleFiles() and assembleString().
     *
     * Supported options include:
     *
     *      'd': leave all symbols in the debugger's variable table
     *      'p': print the preprocessed resource(s) without assembling them
     *      'l': print lines as they are parsed
     *      's': treat the URL as a string and assemble it (assembleFiles() only)
     *
     * The done() callback is called after the resource(s) have been loaded (if necessary), parsed, and
     * assembled.  The caller must use other methods to obtain further results (eg, getImage(), getStart()).
     *
     * The callback includes a non-zero error code if there was an error (and the URL):
     *
     *      done(nErrorCode, sURL)
     *
     * @this {Macro10}
     * @param {number|null} [addrLoad] (the absolute address to assemble the code at, if any)
     * @param {string|undefined} [sOptions] (zero or more letter codes to control the assembly process)
     * @param {function(...)|undefined} [done]
     */
    init(addrLoad, sOptions, done)
    {
        this.addrLoad = addrLoad;
        this.sOptions = (sOptions || "").toLowerCase();
        this.done = done;

        this.iURL = 0;
        this.aURLs = [];

        /**
         * Number of lines per file.
         *
         * @type {Array.<number>}
         */
        this.anLines = [];

        /**
         * Lines from all the resources.
         *
         * @type {Array.<string>}
         */
        this.asLines = [];

        if (MAXDEBUG) this.dbg.printf("starting PCjs MACRO-10 Mini-Assembler...\n");

        /*
         * Initialize all the tables and other data structures that MACRO-10 uses.
         *
         * The Macros (tblMacros) and Symbols (tblSymbols) tables are fairly straightforward: they are
         * indexed by a macro or symbol name, and each element is a Mac or Sym object, respectively.
         *
         * We also treat REPEAT blocks and CONDITIONAL (eg, IFE) blocks like macros, except that they are
         * anonymous, parameter-less, and immediately invoked.  REPEAT blocks are always immediately invoked
         * (repeatedly, based on the repeat count), whereas CONDITIONAL blocks are either immediately
         * invoked if the associated condition is true or skipped if the condition is false.
         *
         * Finally, we have LITERAL blocks, which are semi-anonymous (we give each one an auto-generated
         * name based on the current location) and are automatically but not immediately invoked.  Instead,
         * after we've finished processing all the lines in the original input file, we run through all
         * the LITERAL blocks in tblMacros and process the associated statement(s) at that time.
         *
         * Macros have the name that was assigned to them, REPEAT and conditional blocks have generated names
         * that match the pseudo-op (eg, "?REPEAT", "?IFE"), and LITERAL blocks have generated location-based
         * names.  All generated names use a leading question mark ('?') so that they don't conflict with
         * normal MACRO-10 symbols.
         */

        /**
         * @type {Object.<Mac>}
         */
        this.tblMacros = {};

        /**
         * @type {Object.<Sym>}
         */
        this.tblSymbols = {};

        /**
         * @type {Array.<Lit>}
         */
        this.aLiterals = [];            // array of literals

        /**
         * This keeps track of symbols suffixed with '#', which are later assembled into a variable pool,
         * following the literal pool.
         *
         * @type {Array.<string>}
         */
        this.aVariables = [];

        /**
         * @type {Array.<number>}
         */
        this.aWords = [];               // filled in by the various genXXX() functions

        /**
         * This sparse array is indexed by location, and each used entry contains any undefined symbols that
         * must be evaluated to fully resolve the word at the corresponding location.  NOTE: There's no requirement
         * that the array be sparse; we could certainly fill each unused entry with null (ie, for locations that
         * don't require a fixup).
         *
         * @type {Array.<string>}
         */
        this.aFixups = [];

        /**
         * This array parallels aFixups, providing context (ie, line numbers) for any fixups that we want to analyze.
         *
         * @type {Array.<number>}
         */
        this.aLineRefs = [];

        this.nLine = 0;
        this.nError = 0;
        this.nLiteral = 0;              // used to uniquely number literals

        /**
         * @type {number}
         */
        this.nLocation = this.addrLoad || 0;

        /**
         * @type {number}
         */
        this.nLocationScope = -1;

        /**
         * @type {Array.<Scope>}
         */
        this.stackScopes = [];

        this.sOperator = null;          // the active operator, if any
        this.nMacroDef = 0;             // the active macro definition state
        this.sMacroDef = null;          // the active macro definition name
        this.chMacroOpen = this.chMacroClose = '';

        /*
         * This regular expression breaks each MACRO-10 line into the following elements:
         *
         *      [1]: label (with trailing colon), if any
         *      [2]: operator (eg, opcode mnemonic or pseudo-op), if any
         *      [3]: operator/operand whitespace separator, if any
         *      [4]: operand(s), if any
         *      [5]: comment, if any
         */
        this.reLine = /^[ \t]*([A-Z$%.?][0-9A-Z$%.]*:|)[ \t]*([A-Z$%.][0-9A-Z$%.]*|)([ \t]*)([^;]+|)(;?[\s\S]*)/i;

        this.macroCall = null;          // the active macro being called, if any

        /**
         * If an ASCII/ASCIZ/SIXBIT pseudo-op is active, chASCII is set to the separator
         * and sASCII collects the intervening character(s).
         *
         * @type {null|string}
         */
        this.chASCII = null;

        /**
         * @type {string}
         */
        this.sASCII = "";

        this.addrStart = null;
    }

    /**
     * assembleFiles(sURL, addrLoad, sOptions, done)
     *
     * Requests the resource(s) specified by sURL; multiple resources can be requested by separating
     * them with semicolons.  The resources are requested and combined in the same order they are listed,
     * and after the last resource has been received, they are assembled as a single unit.
     *
     * As a courtesy to the Debugger's doAssemble() function, we allow it to select between assembleFiles()
     * and assembleString() by specifying an 's' option here, rather than having two separate code paths.
     *
     * @this {Macro10}
     * @param {string} sURL (the URL(s) of the resource to be assembled)
     * @param {number|null} [addrLoad] (the absolute address to assemble the code at, if any)
     * @param {string|undefined} [sOptions] (zero or more letter codes to control the assembly process)
     * @param {function(...)|undefined} [done]
     */
    assembleFiles(sURL, addrLoad, sOptions, done)
    {
        if (sOptions && sOptions.indexOf('s') >= 0) {
            this.assembleString(sURL, addrLoad, sOptions, done);
            return;
        }

        this.init(addrLoad, sOptions, done);

        this.aURLs = sURL.split(';');

        this.loadNextResource();
    }

    /**
     * assembleString(sText, addrLoad, sOptions, done)
     *
     * Assembles the given text.
     *
     * @this {Macro10}
     * @param {string} sText
     * @param {number|null} [addrLoad] (the absolute address to assemble the code at, if any)
     * @param {string|undefined} [sOptions] (zero or more letter codes to control the assembly process)
     * @param {function(...)|undefined} [done]
     * @returns {number}
     */
    assembleString(sText, addrLoad, sOptions, done)
    {
        this.init(addrLoad, sOptions, done);

        this.asLines = sText.split(/(\r?\n)/);
        this.anLines.push(this.asLines.length);

        this.parseResources();

        if (this.done) this.done(this.nError);

        return this.nError;
    }

    /**
     * loadNextResource()
     *
     * @this {Macro10}
     */
    loadNextResource()
    {
        if (this.iURL == this.aURLs.length) {
            this.parseResources();
            if (this.done) this.done(this.nError);
            return;
        }

        var macro10 = this;
        var sURL = this.aURLs[this.iURL];

        this.dbg.printf("loading %s\n", StrLib.getBaseName(sURL));

        /*
         * We know that local resources ending with ".MAC" are actually stored with a ".txt" extension.
         */
        if (sURL.indexOf(':') < 0) {
            var sExt = sURL.slice(-4).toUpperCase();
            if (".MAC.KLM".indexOf(sExt) >= 0) sURL += ".txt";
        }

        WebLib.getResource(sURL, null, true, function processMacro10(sFile, sResource, nErrorCode) {
            if (nErrorCode) {
                if (macro10.done) macro10.done(nErrorCode, sFile);
                return;
            }
            var sText = sResource;
            if (StrLib.endsWith(sFile, ".html")) {
                /*
                 * We want to parse ONLY the text between <PRE>...</PRE> tags, and eliminate any HTML entities.
                 */
                sText = "";
                var match, re = /<pre>([\s\S]*?)<\/pre>/gi;
                while ((match = re.exec(sResource))) {
                    var s = match[1];
                    if (s.indexOf('&') >= 0) s = s.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&');
                    sText += s;
                }
                match = sText.match(/&[a-z]+;/i);
                if (match) macro10.warning("unrecognized HTML entity '" + match[0] + "'");
            }

            /*
             * For a file containing N lines, split() will return an array of N*2+1 entries, with every even entry
             * containing the characters, if any, preceding a line-ending, and every odd entry (including the final
             * entry) containing a line-ending.
             *
             * If, for some reason, split() doesn't do that, then we try to warn and patch things up as best we can.
             */
            var asLines = sText.split(/(\r?\n)/);
            if (asLines.length & 1) {
                s = asLines.pop();
                if (s) {
                    macro10.warning("unexpected line '" + s + "'");
                    asLines.push(s);
                    asLines.push("");
                }
            } else {
                macro10.warning("unexpected number of lines (" + asLines.length + ")");
            }

            macro10.asLines = macro10.asLines.concat(asLines);
            macro10.anLines[macro10.iURL] = (asLines.length >> 1);
            macro10.iURL++;

            setTimeout(function() {
                macro10.loadNextResource();
            }, 0);
        });
    }

    /**
     * getImage()
     *
     * Service for the Debugger to obtain the assembled data after a (hopefully) successful assembly process.
     *
     * @this {Macro10}
     * @returns {Array.<number>}
     */
    getImage()
    {
        return this.aWords;
    }

    /**
     * getStart()
     *
     * Service for the Debugger to obtain the starting address after a (hopefully) successful assembly process.
     *
     * @this {Macro10}
     * @returns {number|null|undefined}
     */
    getStart()
    {
        return this.addrStart;
    }

    /**
     * parseResources()
     *
     * Begin the assembly process.
     *
     * @this {Macro10}
     * @returns {number}
     */
    parseResources()
    {
        var macro10 = this;

        /*
         * If the "preprocess" option is set, then print everything without assembling.
         */
        if (this.sOptions.indexOf('p') >= 0) {
            this.dbg.printf("%s\n", this.asLines.join(""));
            return 0;
        }

        var a = this.dbg.resetVariables();

        /*
         * Add predefined device codes
         */
        this.addSymbol("APR", 0);       // Priority Interrupt
        this.addSymbol("PI",  4);       // Arithmetic Processor

        try {
            for (let i = 0; i < this.asLines.length; i += 2) {

                this.nLine++;

                /*
                 * If the "line" option is set, then print all the lines as they are parsed.
                 */
                if (this.sOptions.indexOf('l') >= 0) {
                    this.dbg.printf("%s: %s\n", this.getLineRef(), this.asLines[i]);
                }

                /*
                 * Since, at this early stage, I'm not sure whether all the resources I'm interested in
                 * assembling have had their original CR/LF line endings preserved (eg, some files may have
                 * been converted to LF-only line endings), I'm going to skip over whatever line endings
                 * are in the array (stored in every OTHER entry) and insert my own uniform CR/LF sequences.
                 */
                if (!this.parseLine(this.asLines[i] + '\r\n')) break;

                /*
                 * When an END statement is encountered, addrStart will change from null to either undefined
                 * or a starting address.
                 */
                if (this.addrStart !== null) break;
            }

            if (this.nMacroDef) {
                this.error("open block", this.tblMacros[this.sMacroDef].nLine);
            }

            if (this.stackScopes.length) {
                this.error("open scope", this.stackScopes[0].nLine);
            }

            /*
             * Process all literals next.
             */
            this.doLiterals();

            /*
             * Process all variables next.
             */
            this.doVariables();

            /*
             * And last but not least, perform all fixups.
             */
            this.aFixups.forEach(function processFixup(sValue, nLocation) {
                let value = macro10.parseExpression(sValue, undefined, nLocation, macro10.aLineRefs[nLocation]);
                if (value === undefined) return;
                value += macro10.aWords[nLocation];
                macro10.aWords[nLocation] = macro10.truncate(value, nLocation);
            });

        } catch(err) {
            this.dbg.printf("%s\n", err.message);
            this.nError = -1;
        }

        if (this.sOptions.indexOf('d') < 0) this.dbg.restoreVariables(a);

        return this.nError;
    }

    /**
     * parseLine(sLine, aParms, aValues, aDefaults)
     *
     * @this {Macro10}
     * @param {string} sLine (line contents)
     * @param {Array.<string>} [aParms]
     * @param {Array.<string>} [aValues]
     * @param {Array.<string>} [aDefaults]
     * @returns {boolean}
     */
    parseLine(sLine, aParms, aValues, aDefaults)
    {
        var i, matchLine;

        if (this.chASCII != null) {
            sLine = this.defASCII(sLine);
        }

        var fParse = true;
        var sLabel, sOperator = "", sSeparator, sOperands, sRemainder;

        while (fParse) {
            matchLine = sLine.match(this.reLine);
            if (!matchLine || matchLine[5] && matchLine[5].slice(0, 1) != ';') {
                this.error("failed to parse line '" + sLine + "'");
                return false;
            }
            fParse = false;
            sOperator = matchLine[2].toUpperCase();

            /*
             * TODO: The following kludge needs to be fixed at some point.  The goal here is to prevent any
             * of the caller's parameters from replacing any IRP/IRPC call parameters, but the goal is actually
             * much bigger than that, because it's not just IRP/IRPC call parameters that must be left intact,
             * but ANY macro call parameters; IRP/IRPC macros are just easier to pick out.  Unfortunately, as
             * the code is currently structured, we won't know if we're dealing with any macro call parameters
             * on this line until parseMacro() is called, below.
             */
            if (sOperator == Macro10.PSEUDO_OP.IRP || sOperator == Macro10.PSEUDO_OP.IRPC) {
                aParms = null;
            }

            if (aParms) {
                for (var iParm = 0; iParm < aParms.length; iParm++) {
                    var sParm = aParms[iParm];

                    var macroDef = this.tblMacros[this.sMacroDef];
                    if (macroDef && macroDef.aParms.indexOf(sParm) >= 0) continue;

                    var sReplace = aValues[iParm] || aDefaults[iParm] || "";
                    var iSearch = 0;
                    var iLimit = sLine.length - matchLine[5].length;    // set the limit at the start of the comment, if any
                    while (iSearch < iLimit) {
                        var iMatch = sLine.indexOf(sParm, iSearch);
                        if (iMatch < 0) break;
                        iSearch = iMatch + 1;
                        var iMatchEnd = iMatch + sParm.length;
                        var chPre = '', chPost = '';
                        if ((!iMatch || !this.isSymbolChar(chPre = sLine[iMatch - 1])) && (iMatchEnd >= sLine.length || !this.isSymbolChar(chPost = sLine[iMatchEnd]))) {
                            /*
                             * If the "concatenation character" (') appears before (or after) the symbol being replaced, remove it.
                             */
                            if (chPre == "'") iMatch--;
                            if (chPost == "'") iMatchEnd++;
                            sLine = sLine.substr(0, iMatch) + sReplace + sLine.substr(iMatchEnd);
                            iSearch = iMatch + sReplace.length;
                            fParse = true;
                        }
                    }
                }
                aParms = null;
            }
            if (this.nMacroDef) {
                if (this.nMacroDef == 1) {
                    i = sLine.indexOf(this.chMacroOpen);
                    if (i >= 0) {
                        this.nMacroDef++;
                        sLine = sLine.substr(i+1);
                    } else {
                        this.error("expected " + this.sOperator + " definition in '" + sLine + "'");
                    }
                }
                if (this.nMacroDef > 1) {
                    sLine = this.appendMacro(sLine);
                    fParse = true;
                }
                if (this.nMacroDef) return true;
            }
        }

        sLabel = matchLine[1];
        sSeparator = matchLine[3];
        sOperands = matchLine[4].trim();
        sRemainder = matchLine[4] + matchLine[5];

        if (sLabel) {
            sLabel = sLabel.slice(0, -1);
            this.addSymbol(sLabel, this.nLocation, Macro10.SYMTYPE.LABEL);
        }

        var matchOp;
        if (sOperator && (matchOp = sOperands.match(/^([=:]+)(.*)/))) {
            var nType = 0;
            sLabel = sOperator;
            sOperator = matchOp[1];
            sOperands = matchOp[2];
            if (sOperator == '==') {
                nType |= Macro10.SYMTYPE.PRIVATE;
            }
            else if (sOperator == '=:') {
                nType |= Macro10.SYMTYPE.INTERNAL;
            }
            this.addSymbol(sLabel, sOperands, nType);
            sOperator = sOperands = "";
        }

        if (!sOperator && !sOperands) return true;

        this.sOperator = sOperator;

        /*
         * Check the operands for a literal.  If the line contains and/or ends with a literal
         * we record it and replace it with an internal symbol.  We assume only one literal per line,
         * especially since they can be open-ended (ie, continue for multiple lines).
         */
        var sLiteral = this.getLiteral(sOperands);
        if (sLiteral) {
            sOperands = sOperands.replace(sLiteral, this.defMacro(Macro10.PSEUDO_OP.LITERAL, this.getLiteral(sRemainder)));
            if (!sSeparator) sSeparator = "\t";
        }

        /*
         * Check the operands for any reserved symbols (ie, symbols with a trailing '#', such as "USER#").
         */
        var sSymbol;
        while ((sSymbol = this.getReserved(sOperands))) {
            sOperands = sOperands.replace(sSymbol, sSymbol.slice(0, -1));
        }

        if (!this.parseMacro(sOperator, sOperands)) {

            switch (sOperator) {
            case Macro10.PSEUDO_OP.ASCII:
            case Macro10.PSEUDO_OP.ASCIZ:
            case Macro10.PSEUDO_OP.SIXBIT:
                this.defASCII(sRemainder);
                break;

            case Macro10.PSEUDO_OP.BLOCK:
                this.defBLOCK(sOperands);
                break;

            case Macro10.PSEUDO_OP.BYTE:
                this.defBYTE(sOperands);
                break;

            case Macro10.PSEUDO_OP.END:
                this.defEND(sOperands);
                break;

            case Macro10.PSEUDO_OP.EXP:
                this.defWord(sOperands);
                break;

            case Macro10.PSEUDO_OP.LIT:
                this.doLiterals();
                break;

            case Macro10.PSEUDO_OP.LOC:
                this.defLocation(sOperands);
                break;

            case Macro10.PSEUDO_OP.VAR:
                this.doVariables();
                break;

            case Macro10.PSEUDO_OP.XWD:
                this.defXWD(sOperands);
                break;

            case Macro10.PSEUDO_OP.DEFINE:
            case Macro10.PSEUDO_OP.IF1:
            case Macro10.PSEUDO_OP.IFDEF:
            case Macro10.PSEUDO_OP.IFDIF:
            case Macro10.PSEUDO_OP.IFE:
            case Macro10.PSEUDO_OP.IFG:
            case Macro10.PSEUDO_OP.IFGE:
            case Macro10.PSEUDO_OP.IFIDN:
            case Macro10.PSEUDO_OP.IFL:
            case Macro10.PSEUDO_OP.IFLE:
            case Macro10.PSEUDO_OP.IFN:
            case Macro10.PSEUDO_OP.IFNDEF:
            case Macro10.PSEUDO_OP.IRP:
            case Macro10.PSEUDO_OP.IRPC:
            case Macro10.PSEUDO_OP.OPDEF:
            case Macro10.PSEUDO_OP.REPEAT:
                this.defMacro(sOperator, sRemainder);
                break;

            case Macro10.PSEUDO_OP.PURGE:
                this.delSymbols(sOperands);
                break;

            case Macro10.PSEUDO_OP.LALL:    // TODO
            case Macro10.PSEUDO_OP.LIST:    // TODO
            case Macro10.PSEUDO_OP.NOSYM:   // TODO
            case Macro10.PSEUDO_OP.PAGE:    // TODO
            case Macro10.PSEUDO_OP.SUBTTL:  // TODO
            case Macro10.PSEUDO_OP.TITLE:   // TODO
            case Macro10.PSEUDO_OP.XALL:    // TODO
            case Macro10.PSEUDO_OP.XLIST:   // TODO
                break;

            default:
                this.defWord(sOperator, sSeparator, sOperands);
                break;
            }
        }
        return true;
    }

    /**
     * parseLiteral(name, sText)
     *
     * This is like parseText() except that we set up a new scope, including new aWords and aFixups arrays.
     *
     * @this {Macro10}
     * @param {string} name
     * @param {string} sText
     */
    parseLiteral(name, sText)
    {
        this.pushScope(name);
        this.parseText(sText);
        this.popScope();
    }

    /**
     * parseMacro(name, sOperands)
     *
     * For OPDEF macros, the operands are opcode values rather than conventional macro parameter values.
     * As the MACRO-10 manual explains:
     *
     *      Defines the symbol as an operator equivalent to expression, giving the symbol a fullword value.
     *      When the operator is later used with operands, the accumulator fields are added, the indirect bits
     *      are ORed, the memory addresses are added, and the index register addresses are added.
     *
     *      EXAMPLE:    OPDEF CAL [MOVE 1,@SYM(2)]
     *                  CAL 1,BOL(2)
     *
     *      RESULT:     MOVE 2,@SYM+BOL(4)
     *
     * The easiest thing to do is parse the OPDEF text, allowing it to generate its default "fullword value",
     * then parse the operands in their own scope, extract the bits generated from the operands, and merge them
     * into the generated OPDEF value.
     *
     * @this {Macro10}
     * @param {string} name
     * @param {string} [sOperands]
     * @returns {boolean}
     */
    parseMacro(name, sOperands)
    {
        var macro = this.tblMacros[name];
        if (!macro) return false;

        if (sOperands != null) {
            /*
             * If this is an OPDEF, then a two-step process is required: generate the OPDEF's value, then parse
             * the operands and merge their bits with the OPDEF's bits.
             */
            if (macro.nOperand == Macro10.MACRO_OP.OPDEF) {

                var nLocation = this.nLocation;
                this.parseText(macro.sText);
                if (nLocation < this.nLocation) {

                    /*
                     * An OPDEF invocation *may* have operands, but it's not required to.
                     */
                    if (!sOperands) return true;

                    this.pushScope();
                    this.parseText(sOperands);
                    var w = this.aWords[0];
                    var sFixup = this.aFixups[0];
                    this.popScope();
                    if (w !== undefined) {
                        this.aWords[nLocation] += (w & (PDP10.OPCODE.A_FIELD | PDP10.OPCODE.X_FIELD | PDP10.OPCODE.Y_FIELD));
                        /*
                         * We can't "OR" (|=) the I_FIELD bit into the target word, because it's a 36-bit value and bitwise
                         * operators truncate to 32 bits, so we'll use addition, trusting that the field was initially zero.
                         */
                        this.dbg.assert(!(this.aWords[nLocation] & PDP10.OPCODE.I_FIELD));
                        this.aWords[nLocation] += (w & PDP10.OPCODE.I_FIELD);
                        if (sFixup) {
                            if (!this.aFixups[nLocation]) {
                                this.aFixups[nLocation] = sFixup;
                            } else {
                                this.aFixups[nLocation] += '+' + sFixup;
                            }
                        }
                        return true;
                    }
                }

                /*
                 * Either the OPDEF didn't generate any data OR the OPDEF's operands failed to evaluate.
                 */
                this.error("OPDEF '" + name + "' (" + sOperands + ") failed");
                return false;
            }
            var macroPrev = this.macroCall;
            this.macroCall = macro;
            macro.aValues = this.getValues(sOperands, true);
            this.parseText(macro.sText, macro.aParms, macro.aValues, macro.aDefaults);
            /*
             * WARNING: Our simplistic approach to macro expansion and processing means that recursive macros
             * (such as the SHIFT macro in /software/dec/pdp10/tests/macro10/TEXT.MAC) could blow the stack.  Nothing bad
             * should happen (other than a JavaScript stack limit exception aborting the assembly), but it begs
             * the question: did MACRO-10 perform any tail recursion optimizations or other tricks to prevent macros
             * from gobbling stack, or could they blow MACRO-10's stack just as easily?
             */
            this.macroCall = macroPrev;
            return true;
        }

        if (name[0] != '?') return false;

        var sOperator = name.substr(1);

        switch(sOperator) {
        case Macro10.PSEUDO_OP.IFE:
        case Macro10.PSEUDO_OP.IFDIF:
        case Macro10.PSEUDO_OP.IFNDEF:
            if (!macro.nOperand) {
                this.parseText(macro.sText);
            }
            break;

        case Macro10.PSEUDO_OP.IFG:
            if (macro.nOperand > 0) {
                this.parseText(macro.sText);
            }
            break;

        case Macro10.PSEUDO_OP.IFGE:
            if (macro.nOperand >= 0) {
                this.parseText(macro.sText);
            }
            break;

        case Macro10.PSEUDO_OP.IFL:
            if (macro.nOperand < 0) {
                this.parseText(macro.sText);
            }
            break;

        case Macro10.PSEUDO_OP.IFLE:
            if (macro.nOperand <= 0) {
                this.parseText(macro.sText);
            }
            break;

        case Macro10.PSEUDO_OP.IF1:
        case Macro10.PSEUDO_OP.IFN:
        case Macro10.PSEUDO_OP.IFDEF:
        case Macro10.PSEUDO_OP.IFIDN:
            if (macro.nOperand) {
                this.parseText(macro.sText);
            }
            break;

        case Macro10.PSEUDO_OP.IRP:
        case Macro10.PSEUDO_OP.IRPC:
            for (let i = 0; i < macro.aValues.length; i++) {
                this.parseText(macro.sText, macro.aParms, [macro.aValues[i]], []);
            }
            break;

        case Macro10.PSEUDO_OP.REPEAT:
            while (macro.nOperand-- > 0) {
                this.parseText(macro.sText);
            }
            break;

        default:
            this.parseLiteral(name, macro.sText);
            break;
        }
        return true;
    }

    /**
     * parseText(sText, aParms, aValues, aDefaults)
     *
     * @this {Macro10}
     * @param {string} sText
     * @param {Array.<string>} [aParms]
     * @param {Array.<string>} [aValues]
     * @param {Array.<string>} [aDefaults]
     */
    parseText(sText, aParms, aValues, aDefaults)
    {
        /*
         * Unlike the caller of parseResources(), we don't split the text using a capture group,
         * so all line separators are tossed, and just like parseResources(), we always include a
         * uniform CR/LF sequence at the end of each line.
         *
         * TODO: Consider whether callers should always store their text snippets as line arrays, too,
         * to avoid this re-splitting.
         */
        var asLines = sText.split(/\r?\n/);
        for (var iLine = 0; iLine < asLines.length; iLine++) {
            var sLine = asLines[iLine] + '\r\n';
            if (!this.parseLine(sLine, aParms, aValues, aDefaults)) break;
        }
    }

    /**
     * pushScope(name)
     *
     * @this {Macro10}
     * @param {string} [name] (must be defined for literals only)
     */
    pushScope(name)
    {
        this.stackScopes.push({
            name,
            aWords: this.aWords,
            aFixups: this.aFixups,
            nLocation: this.nLocation,
            nLocationScope: this.nLocationScope,
            nLine: this.nLine
        });
        this.aWords = [];
        this.aFixups = [];
        if (this.nLocationScope < 0) this.nLocationScope = this.nLocation;
        this.nLocation = 0;
    }

    /**
     * popScope()
     *
     * @this {Macro10}
     */
    popScope()
    {
        if (!this.stackScopes.length) {
            this.error("scope nesting error");
            return;
        }
        var name = this.stackScopes[this.stackScopes.length - 1].name;
        if (name) this.aLiterals.push({name, aWords: this.aWords, aFixups: this.aFixups});
        var scope = this.stackScopes.pop();
        this.aWords = scope.aWords;
        this.aFixups = scope.aFixups;
        this.nLocation = scope.nLocation;
        this.nLocationScope = scope.nLocationScope;
        if (!this.stackScopes.length && this.nLocationScope != -1) {
            this.error("scope restore error");
        }
    }

    /**
     * getExpression(sOperands, sDelim)
     *
     * TODO: Add support for IFIDN, IFDIF, IFB and IFNB: if the first non-blank, non-tab character is
     * a character other than '<', then that becomes the delimiter, allowing angle brackets in the string.
     *
     * @this {Macro10}
     * @param {string} sOperands
     * @param {string} [sDelim] (eg, comma, closing parenthesis)
     * @returns {string|null} (if the operands begin with an expression, return it)
     */
    getExpression(sOperands, sDelim = ",")
    {
        var i = 0;
        var fQuotes = false;
        var sOperand = null;
        var cNesting = 0;
        while (i < sOperands.length) {
            var ch = sOperands[i++];
            if (ch == '"') {
                fQuotes = !fQuotes;
                continue;
            }
            if (fQuotes) continue;
            if (!cNesting && sDelim.indexOf(ch) >= 0) {
                i--;
                break;
            }
            if (ch == '<') {
                cNesting++;
            } else if (ch == '>') {
                if (--cNesting < 0) {
                    this.error("missing bracket(s) in '" + sOperands + "'");
                    break;
                }
            }
        }
        if (!cNesting) {
            sOperand = sOperands.substr(0, i);
        }
        else if (cNesting > 0) {
            this.error("extra bracket(s) in '" + sOperands + "'");
        }
        return sOperand;
    }

    /**
     * parseExpression(sExp, aUndefined, nLocation, nLine)
     *
     * This is a wrapper around the Debugger's parseExpression() function to take care of some
     * additional requirements we have, such as interpreting a period as the current location and
     * interpreting two expressions separated by two commas as the left and right 18-bit halves
     * of a 36-bit value.
     *
     * @this {Macro10}
     * @param {string} sExp
     * @param {Array|undefined} [aUndefined]
     * @param {number|undefined} [nLocation]
     * @param {number|undefined} [nLine]
     * @returns {number|undefined}
     */
    parseExpression(sExp, aUndefined, nLocation, nLine)
    {
        var result = -1;

        if (nLocation === undefined) {
            nLocation = (this.nLocationScope >= 0? this.nLocationScope : this.nLocation);
        }

        /*
         * The SIXBIT (and presumably ASCII; not sure about ASCIZ) pseudo-ops can also be used in expressions
         * (or at least assignments), so we check for those in the given expression and convert them to quoted
         * sequences that the Debugger's parseExpression() understands.
         */
        var sEval = sExp.replace(/SIXBIT\s*(\S)(.*?)\1/g, "'$2'").replace(/ASCII\s*(\S)(.*?)\1/g, '"$2"');

        /*
         * If this is NOT a first-pass call, then let's not waste time calling parseInstruction(); not only
         * may it generate redundant error messages, but it shouldn't be necessary, because we should be down
         * to fixup expressions.
         */
        if (aUndefined) {
            var match;
            var sOperator = "";
            var sOperands = sEval;
            if ((match = sEval.match(/^([^\s]+)\s*(.*?)\s*$/))) {
                sOperator = match[1];
                sOperands = match[2];
            }
            result = this.dbg.parseInstruction(sOperator, sOperands, nLocation, aUndefined);
        }

        if (result < 0) {
            /*
             * Check for the "period" syntax that MACRO-10 uses to represent the value of the current location.
             * The Debugger's parseInstruction() method understands that syntax, but its parseExpression() method
             * does not.
             *
             * Note that the Debugger's parseInstruction() replaces any period not PRECEDED by a decimal
             * digit with the current address, because our Debuggers' only other interpretation of a period
             * is as the suffix of a decimal integer, whereas MACRO-10's only other interpretation of a period
             * is (I think) as the decimal point within a floating-point number, so here we only replace periods
             * that are not FOLLOWED by a decimal digit.
             */
            sEval = sEval.replace(/\.([^0-9]|$)/g, this.dbg.toStrBase(nLocation, -1) + "$1");
            result = this.dbg.parseExpression(sEval, aUndefined);
            if (result === undefined) {
                this.error("unable to parse expression '" + sExp + "'", nLine);
            }
        }
        return result;
    }

    /**
     * getLiteral(sOperands)
     *
     * Check the operands for a literal (ie, an expression starting with a square bracket).
     *
     * @this {Macro10}
     * @param {string} sOperands
     * @returns {string} (if the operands contain a literal, return it)
     */
    getLiteral(sOperands)
    {
        var cNesting = 0;
        var sLiteral = "";
        var i = 0, iBegin = -1, iEnd = sOperands.length;
        while (i < sOperands.length) {
            var ch = sOperands[i];
            if (ch == ';') break;
            if (ch == '[') {
                if (!cNesting++) iBegin = i;
            }
            i++;
            if (ch == ']' && --cNesting <= 0) {
                iEnd = i;
                break;
            }
        }
        if (cNesting < 0) {
            this.error("missing bracket(s) in '" + sOperands + "'");
        }
        if (iBegin >= 0) {
            sLiteral = sOperands.substr(iBegin, iEnd - iBegin);
        }
        return sLiteral;
    }

    /**
     * getDefaults(aParms)
     *
     * Check the given array of macro parameters for default values, remove them, and return them in a parallel array.
     *
     * @this {Macro10}
     * @param {Array.<string>} aParms
     * @returns {Array.<string>}
     */
    getDefaults(aParms)
    {
        var aDefaults = [];
        for (var i = 0; i < aParms.length; i++) {
            var j = aParms[i].indexOf('<');
            if (j >= 0) {
                var k = aParms[i].lastIndexOf('>');
                if (k < 0) k = aParms[i].length;
                aDefaults[i] = aParms[i].substr(j, k - j);
                aParms[i] = aParms[i].substr(0, j);
            }
        }
        return aDefaults;
    }

    /**
     * getLineRef(nLine)
     *
     * @this {Macro10}
     * @param {number|undefined} [nLine]
     * @returns {string}
     */
    getLineRef(nLine = this.nLine)
    {
        var iURL = 0;
        while (nLine > this.anLines[iURL]) {
            nLine -= this.anLines[iURL];
            if (iURL < this.aURLs.length - 1) {
                iURL++;
            } else {
                break;
            }
        }
        return StrLib.getBaseName(this.aURLs[iURL] + " line " + nLine);
    }

    /**
     * getReserved(sOperands)
     *
     * Check the operands for any reserved symbols (ie, symbols with a trailing '#', such as "USER#").
     *
     * @this {Macro10}
     * @param {string} sOperands
     * @returns {string|null} (if the operands contain a reserved symbol, return it)
     */
    getReserved(sOperands)
    {
        var match, sReserved = null;
        if ((match = sOperands.match(/([A-Z$%.][0-9A-Z$%.]*)#/i))) {
            sReserved = match[0];
            var sLabel = match[1];
            var name = '?' + sLabel;
            /*
             * We now allow reserved symbols to reused (which would make sense if they appeared in a macro).
             */
            if (this.tblMacros[name] === undefined) {
                var aParms, aDefaults, aValues;
                aParms = aDefaults = aValues = [];
                this.tblMacros[name] = {
                    name: name,
                    nOperand: Macro10.MACRO_OP.RESERVED,
                    aParms,
                    aDefaults,
                    aValues,
                    sText: sLabel + ": 0",
                    nLine: this.nLine
                };
                this.aVariables.push(name);
            }
        }
        return sReserved;
    }

    /**
     * getString(sValue, nConversion)
     *
     * Converts the given expression string (sValue) to one of the following, based on the conversion code (nConversion):
     *
     *      0: numeric string (default)
     *      1: SIXBIT string
     *      2: ASCII string
     *
     * If the expression cannot be evaluated, or if the requested conversion isn't recognized, the original value is returned.
     *
     * @this {Macro10}
     * @param {string} sValue
     * @param {number} [nConversion]
     * @returns {string}
     */
    getString(sValue, nConversion = 0)
    {
        var c, s;
        var value = this.parseExpression(sValue);
        if (value !== undefined) {
            var cchMax = 5;
            switch(nConversion) {
            case 0:
                sValue = this.dbg.toStrBase(value, -1);
                break;
            case 6:
                cchMax++;
                /* falls through */
            case 7:
                s = "";
                while (value && cchMax--) {
                    c = value & (Math.pow(2, nConversion) - 1);
                    s = String.fromCharCode(c + (nConversion == 6? 0x20 : 0)) + s;
                    value = Math.trunc(value / Math.pow(2, nConversion));
                }
                break;
            }
        }
        return sValue;
    }

    /**
     * getSymbol(sOperands)
     *
     * Check the operands for a symbol.  TODO: Use this method?
     *
     * @this {Macro10}
     * @param {string} sOperands
     * @returns {string|null} (if the operands contain a symbol, return it)
     */
    getSymbol(sOperands)
    {
        var match = sOperands.match(/([A-Z$%.][0-9A-Z$%.]*)/i);
        return match && match[1] || null;
    }

    /**
     * getValues(sOperands, fParens)
     *
     * @this {Macro10}
     * @param {string} sOperands
     * @param {boolean} [fParens] (true to strip any parens from around the entire operands)
     * @returns {Array.<string>}
     */
    getValues(sOperands, fParens)
    {
        var aValues = [];
        if (fParens) sOperands = sOperands.replace(/^\(?(.*?)\)?$/, "$1");
        while (sOperands) {
            sOperands = sOperands.trim();
            var sOperand = this.getExpression(sOperands);
            if (!sOperand) break;
            var sValue = sOperand;
            if (sOperand[0] == '\\') {
                var cchPrefix = 1;
                var nConversion = 0;
                if (sOperand[1] == "'") {
                    cchPrefix++;
                    nConversion = 6;
                } else if (sOperand[1] == '"') {
                    cchPrefix++;
                    nConversion = 7;
                }
                sValue = this.getString(sOperand.substr(cchPrefix), nConversion);
            }
            aValues.push(sValue);
            sOperands = sOperands.substr(sOperand.length + 1);
        }
        return aValues;
    }

    /**
     * isDefined(sName)
     *
     * @this {Macro10}
     * @param {string} sName
     * @returns {boolean}
     */
    isDefined(sName)
    {
        return this.isMacro(sName) || this.isSymbol(sName) || this.dbg.isVariable(sName);
    }

    /**
     * isMacro(sName)
     *
     * @this {Macro10}
     * @param {string} sName
     * @returns {boolean}
     */
    isMacro(sName)
    {
        return this.tblMacros[sName] !== undefined;
    }

    /**
     * isSymbol(sName)
     *
     * @this {Macro10}
     * @param {string} sName
     * @returns {boolean}
     */
    isSymbol(sName)
    {
        return this.tblSymbols[sName] !== undefined;
    }

    /**
     * isSymbolChar(ch)
     *
     * @this {Macro10}
     * @param {string} ch
     * @returns {boolean}
     */
    isSymbolChar(ch)
    {
        return !!ch.match(/[0-9A-Z$%.]/i);
    }

    /**
     * defASCII(sOperands)
     *
     * @this {Macro10}
     * @param {string} sOperands
     * @returns {string} (returns whatever portion of the string was not part of an ASCII pseudo-op)
     */
    defASCII(sOperands)
    {
        var sRemain = sOperands;
        if (this.chASCII == null) {
            this.chASCII = this.sASCII = "";
            if (sOperands) {
                this.chASCII = sOperands[0];
                sRemain = sOperands = sOperands.substr(1);
            }
        }
        if (this.chASCII) {
            var i = sOperands.indexOf(this.chASCII);
            if (i < 0) {
                sRemain = "";
            } else {
                sRemain = sOperands.substr(i + 1);
                sOperands = sOperands.substr(0, i);
                this.chASCII = null;
            }
            this.sASCII += sOperands;
        }
        if (this.chASCII == null) {
            this.genASCII();
        }
        return sRemain;
    }

    /**
     * defMacro(sOperator, sOperands)
     *
     * If sOperator is DEFINE (or OPDEF), then a macro definition is expected.  If it's REPEAT, then we're
     * starting a REPEAT block instead.
     *
     * REPEAT blocks piggy-back on this code because they're essentially anonymous immediately-invoked macros;
     * we use an illegal MACRO-10 symbol ('?REPEAT') to name the anonymous macro while it's being defined, and the
     * macro's nOperand field will contain the repeat count.
     *
     * The piggy-backing continues with other pseudo-ops like IFE, which again contain an anonymous block of text
     * that is immediately invoked if the criteria associated with the expression stored in the nOperand field is
     * satisfied.  That satisfaction occurs (or doesn't occur) when parseMacro() is called, once the macro has
     * been fully defined.
     *
     * @this {Macro10}
     * @param {string} sOperator
     * @param {string} sOperands
     * @returns {string}
     */
    defMacro(sOperator, sOperands)
    {
        var i, match, name, nOperand, aParms, aDefaults, aValues, iMatch;

        this.chMacroOpen = '<';
        this.chMacroClose = '>';
        aParms = aDefaults = aValues = [];

        if (sOperator == Macro10.PSEUDO_OP.DEFINE) {
            /*
             * This is a DEFINE (macro) block.  At present, this requires that all
             * (parenthesized) parameters exist on the same line, but the (angle-bracketed)
             * definition can continue on for multiple lines.
             */
            match = sOperands.match(/([A-Z$%.][0-9A-Z$%.]*)\s*(\([^)]*\)|)\s*,?\s*(<|)([\s\S]*)/i);
            if (!match) {
                this.error("unrecognized " + sOperator + " in '" + sOperands + "'");
                return sOperands;
            }
            name = match[1];
            /*
             * If this macro has defined parameters, parse them (and any defaults) now.
             */
            if (match[2] && match[2] != ',') {
                aParms = this.getValues(match[2], true);
                aDefaults = this.getDefaults(aParms);
            }
            nOperand = Macro10.MACRO_OP.DEFINE;
            iMatch = 3;
        }
        else if (sOperator == Macro10.PSEUDO_OP.OPDEF) {
            /*
             * This is a OPDEF block.  Unlike DEFINE blocks, I'm assuming that the
             * (square-bracketed) definition begins on the same line, but I'm not requiring
             * it to end on the same line (I'm not sure that MACRO-10 allowed multi-line
             * OPDEFs, but it doesn't matter to us).
             */
            this.chMacroOpen = '[';
            this.chMacroClose = ']';
            match = sOperands.match(/([A-Z$%.][0-9A-Z$%.]*)\s*(\[)([\s\S]*)/i);
            if (!match) {
                this.error("unrecognized " + sOperator + " in '" + sOperands + "'");
                return sOperands;
            }
            name = match[1];
            nOperand = Macro10.MACRO_OP.OPDEF;
            iMatch = 2;
        }
        else if (sOperator == Macro10.PSEUDO_OP.LITERAL) {
            /*
             * This is a LITERAL block.
             */
            this.chMacroOpen = '[';
            this.chMacroClose = ']';
            name = '?' + StrLib.toDec(++this.nLiteral, 5);
            if (this.tblMacros[name] !== undefined) {
                this.error("literal symbol '" + name + "' redefined");
            }
            match = [sOperands[0], sOperands.substr(1)];
            nOperand = Macro10.MACRO_OP.LITERAL;
            iMatch = 0;
        }
        else if (sOperator == Macro10.PSEUDO_OP.IRP || sOperator == Macro10.PSEUDO_OP.IRPC) {
            /*
             * IRP (and IRPC) blocks are very similar to DEFINE blocks, but they define exactly ONE macro parameter
             * with NO parentheses (whereas regular macros always define their parameters, if any, WITH parentheses),
             * and then the IRP (or IRPC) block is immediately invoked with the corresponding value from the
             * enclosing macro.
             */
            if (!this.macroCall) {
                this.error(sOperator + " outside of macro");
            }
            match = sOperands.match(/([A-Z$%.][0-9A-Z$%.]*)\s*,\s*(<|)([\s\S]*)/i);
            if (!match) {
                this.error("unrecognized " + sOperator + " operands '" + sOperands + "'");
                return sOperands;
            }
            for (i = 0; i < this.macroCall.aParms.length; i++) {
                if (match[1] == this.macroCall.aParms[i]) break;
            }
            if (i == this.macroCall.aParms.length) {
                this.error("invalid " + sOperator + " parameter '" + match[1] + "'");
                return sOperands;
            }
            name = '?' + sOperator;
            aParms = [match[1]];
            if (sOperator == Macro10.PSEUDO_OP.IRPC) {
                aValues = this.macroCall.aValues[i].split("");
            } else {
                aValues = this.getValues(this.macroCall.aValues[i]);
            }
            nOperand = aValues.length;
            iMatch = 2;
        }
        else {
            /*
             * This must be a REPEAT or CONDITIONAL block.
             */
            if (sOperator == Macro10.PSEUDO_OP.IF1) {
                nOperand = 1;
                if (sOperands[0] == ',') sOperands = sOperands.substr(1).trim();
            }
            else {
                var sOperand = this.getExpression(sOperands);
                if (!sOperand) {
                    this.error("missing " + sOperator + " expression '" + sOperands + "'");
                    return sOperands;
                }
                sOperands = sOperands.substr(sOperand.length + 1);
                sOperand = sOperand.trim();
                if (sOperator == Macro10.PSEUDO_OP.IFDIF || sOperator == Macro10.PSEUDO_OP.IFIDN) {
                    var sOperand2 = this.getExpression(sOperands);
                    if (!sOperand2) {
                        this.error("missing second " + sOperator + " expression '" + sOperands + "'");
                        return sOperands;
                    }
                    sOperands = sOperands.substr(sOperand2.length + 1);
                    sOperand2 = sOperand2.trim();
                    nOperand = (sOperand == sOperand2)? 1 : 0;
                }
                if (sOperator == Macro10.PSEUDO_OP.IFDEF || sOperator == Macro10.PSEUDO_OP.IFNDEF) {
                    nOperand = this.isDefined(sOperand)? 1 : 0;
                } else {
                    /*
                     * The expression is either a repeat count or a condition.  Either way, we must be able to
                     * resolve it now, so we don't set fPass1 (but that doesn't mean it's the second pass, either).
                     */
                    nOperand = this.parseExpression(sOperand) || 0;
                }
            }
            match = sOperands.match(/\s*(<|)([\s\S]*)/i);
            name = '?' + sOperator;
            iMatch = 1;
        }

        /*
         * Now we need to set a global parsing state: we are either about to receive a macro definition on
         * subsequent lines (1), the definition has already started on the current line (2), or the definition
         * started and ended on the current line (0).
         */
        name = name.toUpperCase();
        this.nMacroDef = 1;
        this.sMacroDef = name;
        this.tblMacros[name] = {name, nOperand, aParms, aDefaults, aValues, sText: "", nLine: this.nLine};

        if (match[iMatch]) {                            // if there is an opening bracket
            this.nMacroDef = 2;                         // then the macro definition has started
            this.appendMacro(match[iMatch + 1]);
        }

        return name;
    }

    /**
     * appendMacro(sLine)
     *
     * @this {Macro10}
     * @param {string} sLine
     * @returns {string}
     */
    appendMacro(sLine)
    {
        var sRemain = "";
        for (var i = 0; i < sLine.length; i++) {
            if (sLine[i] == this.chMacroOpen) {
                this.nMacroDef++;
            } else if (sLine[i] == this.chMacroClose) {
                this.nMacroDef--;
                if (this.nMacroDef == 1) {
                    this.nMacroDef = 0;
                    sRemain = sLine.substr(i + 1);
                    sLine = sLine.substr(0, i);
                    break;
                }
            }
        }
        var name = this.sMacroDef || "";
        this.tblMacros[name].sText += sLine;
        if (!this.nMacroDef) {
            this.sMacroDef = null;
            this.parseMacro(name);
        }
        return sRemain;
    }

    /**
     * addSymbol(name, value, nType)
     *
     * @this {Macro10}
     * @param {string} name
     * @param {number|string} value
     * @param {number} [nType]
     */
    addSymbol(name, value, nType = 0)
    {
        name = name.toUpperCase().substr(0, 6);
        if ((nType & Macro10.SYMTYPE.LABEL) && this.tblSymbols[name] !== undefined) {
            this.error("redefined label '" + name + "'");
            return;
        }
        var sUndefined = undefined;
        if (typeof value == 'string') {
            var aUndefined = [];
            var v = this.parseExpression(value, aUndefined);
            if (v === undefined) {
                this.error("invalid symbol '" + name + "': " + value);
                return;
            }
            if (aUndefined.length > 1) {
                this.error("too many undefined symbols in '" + name + "': " + aUndefined.join());
            }
            value = v;
            sUndefined = aUndefined[0];
        }
        var sym = this.tblSymbols[name];
        if (sym) {
            sym.value = value;
            sym.nType = nType;
            sym.nLine = this.nLine;
        } else {
            this.tblSymbols[name] = {name, value, nType, nLine: this.nLine};
        }
        this.dbg.setVariable(name, value, sUndefined);
    }

    /**
     * defBLOCK()
     *
     * Processes the BLOCK pseudo-op.
     *
     * @this {Macro10}
     * @param {string} sOperands
     */
    defBLOCK(sOperands)
    {
        var w = this.parseExpression(sOperands);
        if (w !== undefined && w >= 0 && w <= 0o777777) {
            this.nLocation += w;    // while (w--) this.genWord(0);
        } else {
            this.error("unrecognized BLOCK expression '" + sOperands + "'");
        }
    }

    /**
     * defBYTE()
     *
     * Processes the BYTE pseudo-op.
     *
     * @this {Macro10}
     * @param {string} sOperands
     */
    defBYTE(sOperands)
    {
        var sOperand;
        var nBits = 0, nValue = 0, nBitsRemaining = 36;

        while ((sOperand = this.getExpression(sOperands))) {
            sOperands = sOperands.substr(sOperand.length).trim();
            var sValue = sOperand;
            var match = sOperand.match(/^\((.*)\)\s*(.*)$/);
            if (match) {
                if (match[1]) nBits = this.parseExpression("^D" + match[1]);
                sValue = match[2];
            }
            if (!nBits) {
                /*
                 * According the the 1978 MACRO-10 spec, "If the byte size is 0 or is missing (empty parentheses), a zero word
                 * is generated."  I'm not clear exactly on how to interpret this, so I'll make a simplistic assumption for now.
                 */
                this.genWord(0);
                continue;
            }
            var v = sValue? this.parseExpression(sValue) : 0;
            if (v === undefined || nBits < 0 || nBits > 36) {
                this.error("unexpected BYTE operand: " + sOperand);
                break;
            }
            v = this.dbg.truncate(v, nBits, true);
            if (nBitsRemaining < nBits) {
                this.genWord(nValue);
                nValue = 0;
                nBitsRemaining = 36;
            }
            nValue += v * Math.pow(2, nBitsRemaining - nBits);
            nBitsRemaining -= nBits;
        }
        if (nBitsRemaining < 36) {
            this.genWord(nValue);
        }
    }

    /**
     * defEND()
     *
     * Processes the END pseudo-op.
     *
     * @this {Macro10}
     * @param {string} sOperands
     */
    defEND(sOperands)
    {
        if (!sOperands) {
            this.addrStart = this.addrLoad;
        } else {
            this.addrStart = this.parseExpression(sOperands);
            if (this.addrStart === undefined) {
                this.error("unrecognized END expression '" + sOperands + "'");
            }
        }
    }

    /**
     * defLocation(sOperands)
     *
     * Processes the LOC pseudo-op.
     *
     * @this {Macro10}
     * @param {string} sOperands
     */
    defLocation(sOperands)
    {
        this.nLocation = this.parseExpression(sOperands) || 0;
    }

    /**
     * defXWD()
     *
     * Processes the XWD pseudo-op.
     *
     * Since the XWD pseudo-op appears to be equivalent to two values separated by two commas, which defWord() must also
     * support, we can piggy-back on defWord().
     *
     * @this {Macro10}
     * @param {string} sOperands
     */
    defXWD(sOperands)
    {
        this.defWord(sOperands.replace(",", ",,"));
    }

    /**
     * defWord(sOperator, sSeparator, sOperands)
     *
     * @this {Macro10}
     * @param {string} sOperator
     * @param {string} [sSeparator]
     * @param {string} [sOperands]
     */
    defWord(sOperator, sSeparator = "", sOperands = "")
    {
        var aUndefined = [];
        var sExp = (sOperator + sSeparator + sOperands).trim();
        var w = this.parseExpression(sExp, aUndefined);
        if (w !== undefined) {
            if (!aUndefined.length) {
                this.genWord(w);
            } else if (aUndefined.length == 1) {
                this.genWord(w, aUndefined[0]);
            }
            else {
                this.genWord(0, sExp);
            }
        } else {
            this.error("unrecognized word expression '" + sExp + "'");
        }
    }

    /**
     * delSymbols(sOperands)
     *
     * @this {Macro10}
     * @param {string} sOperands
     */
    delSymbols(sOperands)
    {
        var aValues = this.getValues(sOperands);
        for (var i = 0; i < aValues.length; i++) {
            this.dbg.delVariable(aValues[i]);
            delete this.tblSymbols[aValues[i]];
        }
    }

    /**
     * doLiterals()
     *
     * @this {Macro10}
     */
    doLiterals()
    {
        let nLocationLiterals = this.nLocation;

        for (let i = 0; i < this.aLiterals.length; i++) {
            /*
             * Apparently, the time has come to implement "literal collapsing"; I was treating it as just
             * a nice optimization, but it turns out that DEC has written tests that actually DEPEND on it:
             *
             *      C26300: HRRZI   [135531,,246642]    ;PRELOAD AC0 WITH 0,, LITERAL ADDRESS
             *              JRA     .+1                 ;*JRA SHOULD PLACE C(AC0) INTO AC0
             *              CAIE    [135531,,246642]    ;PASS IF JRA PLACED C(AC0) INTO AC0
             *              STOP
             *
             * If the HRRZI and CAIE instructions don't refer to the same exact literal, the test will fail.
             * For purposes of this particular test, the values they stuffed into the literals are essentially
             * gibberish, but the same literal may be used in another test where the values are significant.
             *
             * However, I'm still going to keep it simple.  In this example from p. 2-8 of the April 1978
             * MACRO-10 manual, I will NOT be attempting to collapse null words at the end of ASCIZ sequences
             * with other null words, especially if they were defined before the ASCIZ:
             *
             *      Literals having the same value are collapsed in MACRO's literal pool.
             *      Thus for the statements:
             *
             *              PUSH    P,[0]
             *              PUSH    P,[0]
             *              MOVEI   1,[ASCIZ /TEST1/]
             *
             *      the same address is shared by the two literals [0], and by the null word
             *      generated at the end of [ASCIZ /TEST1/].
             */
            let lit = this.aLiterals[i];
            /*
             * First things first: verify that the literal is one contiguous zero-based set of words (I'm not sure
             * how it couldn't be, but better safe than sorry).
             */
            let aWords = [];
            let nWords = 0;
            lit.aWords.forEach(function(w, nLocation) {
                if (nLocation === aWords.length) aWords.push(w);
                nWords++;
            });
            if (nWords == aWords.length) {
                /*
                 * So far, so good.  Now we'll simply brute-force-search our way through the existing set of
                 * literals, looking for a complete match.
                 */
                for (let nLocation = nLocationLiterals; nLocation + nWords <= this.nLocation; nLocation++) {
                    let n;
                    for (n = 0; n < nWords; n++) {
                        /*
                         * This check requires that the initial values of the words in the literals match AND that
                         * their fixup expressions, if any, match as well.  Here again, MACRO-10 may be more aggressive
                         * in either verifying fixup equality or evaluating any fixups that it can immediately, but
                         * but I prefer to leave all fixup evaluation where it is (below), after all literals and then
                         * all variables have been added to the output.
                         */
                        if (aWords[n] !== this.aWords[nLocation + n] || lit.aFixups[n] != this.aFixups[nLocation]) break;
                    }
                    if (n == nWords) {
                        this.addSymbol(lit.name, nLocation, Macro10.SYMTYPE.LABEL);
                        lit = null;
                        break;
                    }
                }
            }
            if (lit) {
                var macro10 = this;
                this.addSymbol(lit.name, this.nLocation, Macro10.SYMTYPE.LABEL);
                lit.aWords.forEach(function(w, nLocation) {
                    macro10.genWord(w, lit.aFixups[nLocation]);
                });
            }
        }
        this.aLiterals = [];
    }

    /**
     * doVariables()
     *
     * @this {Macro10}
     */
    doVariables()
    {
        for (let i = 0; i < this.aVariables.length; i++) {
            let name = this.aVariables[i];
            let macro = this.tblMacros[name];
            if (!macro) {
                /*
                 * This is more of an assert(), because it should never happen, regardless of input.
                 */
                this.error("missing definition for variable '" + name + "'");
                continue;
            }
            this.parseText(macro.sText);
        }
        this.aVariables = [];
    }

    /**
     * genASCII()
     *
     * Based on the last operator, generate the appropriate ASCII/ASCIZ/SIXBIT data.
     *
     * @this {Macro10}
     */
    genASCII()
    {
        var n = 0, w = 0;       // number of characters in current word, and current word
        var bits, shift;        // bits per character, and bits to left-shift next character
        var cch = this.sASCII.length;
        if (this.sOperator == Macro10.PSEUDO_OP.ASCIZ) cch++;
        for (var i = 0; i < cch; i++) {
            if (!n) {
                w = 0; shift = 29; bits = 7;
                if (this.sOperator == Macro10.PSEUDO_OP.SIXBIT) {
                    bits--; shift++;
                }
            }
            /*
             * If we're processing an ASCIZ pseudo-op, then yes, we will fetch one character beyond
             * the end of sASCII, which will return NaN, but when we mask a falsey value like NaN, we
             * get zero, so it's all good.
             */
            var c = this.sASCII.charCodeAt(i) & 0o177;
            /*
             * If we're doing 6-bit encoding, then perform the conversion of lower-case to upper-case,
             * and then adjust/mask.
             */
            if (bits == 6) {
                if (c >= 0x61 && c <= 0x7A) c -= 0x20;
                c = (c + 0o40) & 0o77;
            }
            w += c * Math.pow(2, shift);
            shift -= bits;
            n++;
            if (shift < 0) {
                this.genWord(w);
                n = 0;
            }
        }
        if (n) this.genWord(w);
    }

    /**
     * genWord(value, sUndefined)
     *
     * @this {Macro10}
     * @param {number} value (default value for the current location)
     * @param {string} [sUndefined] (optional fixup to evaluate later)
     */
    genWord(value, sUndefined)
    {
        this.aWords[this.nLocation] = this.truncate(value);
        if (sUndefined !== undefined) this.aFixups[this.nLocation] = sUndefined;
        this.aLineRefs[this.nLocation] = this.nLine;
        this.nLocation++;
    }

    /**
     * truncate(value, nLocation)
     *
     * @this {Macro10}
     * @param {number} value
     * @param {number} [nLocation]
     * @returns {number}
     */
    truncate(value, nLocation = this.nLocation)
    {
        var w = this.dbg.truncate(value || 0, 36, true);
        if (value < -PDP10.INT_LIMIT || value >= PDP10.WORD_LIMIT) {
            this.warning("truncated value " + StrLib.toOct(value) + " at location " + StrLib.toOct(nLocation) + " to " + StrLib.toOct(w));
        }
        return w;
    }

    /**
     * error(sError, nLine)
     *
     * @this {Macro10}
     * @param {string} sError
     * @param {number} [nLine]
     * @throws {Error}
     */
    error(sError, nLine)
    {
        throw new Error("error in " + this.getLineRef(nLine) + ": " + sError);
    }

    /**
     * warning(sWarning, nLine)
     *
     * @this {Macro10}
     * @param {string} sWarning
     * @param {number} [nLine]
     */
    warning(sWarning, nLine)
    {
        this.dbg.printf("warning in %s: %s\n", this.getLineRef(nLine), sWarning);
    }
}

Macro10.SYMTYPE = {
    LABEL:      0x01,
    PRIVATE:    0x02,
    INTERNAL:   0x04
};

Macro10.PSEUDO_OP = {
    ASCII:      "ASCII",
    ASCIZ:      "ASCIZ",
    BLOCK:      "BLOCK",
    BYTE:       "BYTE",
    DEFINE:     "DEFINE",
    END:        "END",
    EXP:        "EXP",
    IF1:        "IF1",
    IFDEF:      "IFDEF",
    IFDIF:      "IFDIF",
    IFE:        "IFE",
    IFG:        "IFG",
    IFGE:       "IFGE",
    IFIDN:      "IFIDN",
    IFL:        "IFL",
    IFLE:       "IFLE",
    IFN:        "IFN",
    IFNDEF:     "IFNDEF",
    IRP:        "IRP",
    IRPC:       "IRPC",
    LALL:       "LALL",
    LIT:        "LIT",
    LITERAL:    "LITERAL",      // this is a pseudo-pseudo-op, for internal use only
    LIST:       "LIST",
    LOC:        "LOC",
    NOSYM:      "NOSYM",
    OPDEF:      "OPDEF",
    PAGE:       "PAGE",
    PURGE:      "PURGE",
    REPEAT:     "REPEAT",
    SIXBIT:     "SIXBIT",
    SUBTTL:     "SUBTTL",
    TITLE:      "TITLE",
    VAR:        "VAR",
    XALL:       "XALL",
    XWD:        "XWD",
    XLIST:      "XLIST"
};

/*
 * This enumerates the kinds of macros stored in tblMacros.  The nOperand field should contain
 * one of these values, unless it's a REPEAT or CONDITIONAL block, in which case it will contain
 * either a repeat count or conditional value.
 */
Macro10.MACRO_OP = {
    DEFINE:         -1,
    OPDEF:          -2,
    LITERAL:        -3,
    RESERVED:       -4,
};
