/**
 * @fileoverview Implements the PDP-10 ROM component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusPDP10 from "./bus.js";
import MemoryPDP10 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DumpAPI from "../../../../modules/v2/dumpapi.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG } from "./defines.js";

/**
 * @class ROMPDP10
 * @unrestricted
 */
export default class ROMPDP10 extends Component {
    /**
     * ROMPDP10(parmsROM)
     *
     * The ROMPDP10 component expects the following (parmsROM) properties:
     *
     *      addr: physical address of ROM
     *      size: amount of ROM, in bytes
     *      alias: physical alias address (null if none)
     *      file: name of ROM data file
     *
     * NOTE: The ROM data will not be copied into place until the Bus is ready (see initBus()) AND
     * the ROM data file has finished loading (see finishLoad()).
     *
     * Also, while the size parameter may seem redundant, I consider it useful to confirm that the ROM
     * you received is the ROM you expected.
     *
     * @param {Object} parmsROM
     */
    constructor(parmsROM)
    {
        super("ROM", parmsROM, MESSAGE.ROM);

        this.abInit = null;
        this.aSymbols = null;

        this.addrROM = +parmsROM['addr'];
        this.sizeROM = +parmsROM['size'];
        this.fRetainROM = false;

        /*
         * The new 'alias' property can now be EITHER a single physical address (like 'addr') OR an array of
         * physical addresses; eg:
         *
         *      [0xf0000,0xffff0000,0xffff8000]
         *
         * We could have overloaded 'addr' to accomplish the same thing, but I think it's better to have any
         * aliased locations listed under a separate property.
         *
         * Most ROMs are not aliased, in which case the 'alias' property should have the default value of null.
         */
        this.addrAlias = parmsROM['alias'];
        if (typeof this.addrAlias == "string") {
            this.addrAlias = eval(this.addrAlias);
        }

        this.sFilePath = parmsROM['file'];
        this.sFileName = StrLib.getBaseName(this.sFilePath);

        if (this.sFilePath) {
            var sFileURL = this.sFilePath;
            if (DEBUG) this.printf(MESSAGE.LOG, "load(\"%s\")\n", sFileURL);
            /*
             * If the selected ROM file has a ".json" extension, then we assume it's pre-converted
             * JSON-encoded ROM data, so we load it as-is; ditto for ROM files with a ".hex" extension.
             * Otherwise, we ask our server-side ROM converter to return the file in a JSON-compatible format.
             */
            var sFileExt = StrLib.getExtension(this.sFileName);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFilePath + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES + '&' + DumpAPI.QUERY.DECIMAL + '=true';
            }
            var rom = this;
            WebLib.getResource(sFileURL, null, true, function doneLoad(sURL, sResponse, nErrorCode) {
                rom.finishLoad(sURL, sResponse, nErrorCode);
            });
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {ROMPDP10}
     * @param {ComputerPDP10} cmp
     * @param {BusPDP10} bus
     * @param {CPUStatePDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.initROM();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {ROMPDP10}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (this.aSymbols) {
            if (this.dbg) {
                this.dbg.addSymbols(this.id, this.addrROM, this.sizeROM, this.aSymbols);
            }
            /*
             * Our only role in the handling of symbols is to hand them off to the Debugger at our
             * first opportunity. Now that we've done that, our copy of the symbols, if any, are toast.
             */
            delete this.aSymbols;
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * Since we have nothing to do on powerDown(), and no state to return, we could simply omit
     * this function.  But it doesn't hurt anything, and maybe we'll use our state to save something
     * useful down the road, like user-defined symbols (ie, symbols that the Debugger may have
     * created, above and beyond those symbols we automatically loaded, if any, along with the ROM).
     *
     * @this {ROMPDP10}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return true;
    }

    /**
     * finishLoad(sURL, sData, nErrorCode)
     *
     * @this {ROMPDP10}
     * @param {string} sURL
     * @param {string} sData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    finishLoad(sURL, sData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load ROM resource (error %d: %s)\n", nErrorCode, sURL);
            this.sFilePath = null;
        }
        else {
            Component.addMachineResource(this.idMachine, sURL, sData);
            var resource = WebLib.parseMemoryResource(sURL, sData);
            if (resource) {
                this.abInit = resource.aBytes;
                this.aSymbols = resource.aSymbols;
            } else {
                this.sFilePath = null;
            }
        }
        this.initROM();
    }

    /**
     * initROM()
     *
     * This function is called by both initBus() and finishLoad(), but it cannot copy the initial data into place
     * until after initBus() has received the Bus component AND finishLoad() has received the data.  When both those
     * criteria are satisfied, the component becomes "ready".
     *
     * @this {ROMPDP10}
     */
    initROM()
    {
        if (!this.isReady()) {
            if (this.sFilePath) {
                /*
                 * Too early...
                 */
                if (!this.abInit || !this.bus) return;

                /*
                 * If no explicit size was specified, then use whatever the actual size is.
                 */
                if (!this.sizeROM) {
                    this.sizeROM = this.abInit.length;
                }
                if (this.abInit.length != this.sizeROM) {
                    /*
                     * Note that setError() sets the component's fError flag, which in turn prevents setReady() from
                     * marking the component ready.  TODO: Revisit this decision.  On the one hand, it sounds like a
                     * good idea to stop the machine in its tracks whenever a setError() occurs, but there may also be
                     * times when we'd like to forge ahead anyway.
                     */
                    this.setError("ROM size (" + StrLib.toHexLong(this.abInit.length) + ") does not match specified size (" + StrLib.toHexLong(this.sizeROM) + ")");
                }
                else if (this.addROM(this.addrROM)) {

                    var aliases = [];
                    if (typeof this.addrAlias == "number") {
                        aliases.push(this.addrAlias);
                    } else if (this.addrAlias != null && this.addrAlias.length) {
                        aliases = this.addrAlias;
                    }
                    for (var i = 0; i < aliases.length; i++) {
                        this.cloneROM(aliases[i]);
                    }
                    /*
                     * We used to hang onto the initial ROM data so that we could restore any bytes the CPU overwrote,
                     * using memory write-notification handlers, but with the introduction of read-only memory blocks, that's
                     * no longer necessary.
                     *
                     * TODO: Consider an option to retain the ROM data, and give the user some way of restoring ROMs.
                     * That may be useful for "resumable" machines that save/restore all dirty block of memory, regardless
                     * whether they're ROM or RAM.  However, the only way to modify a machine's ROM is with the Debugger,
                     * and Debugger users should know better.
                     */
                    if (!this.fRetainROM) {
                        delete this.abInit;
                    }
                }
            }
            this.setReady();
        }
    }

    /**
     * addROM(addr)
     *
     * @this {ROMPDP10}
     * @param {number} addr
     * @returns {boolean}
     */
    addROM(addr)
    {
        if (this.bus.addMemory(addr, this.sizeROM, MemoryPDP10.TYPE.ROM)) {
            if (DEBUG) {
                this.printf(MESSAGE.LOG, "addROM(%#010x): %#010x bytes\n", addr, this.abInit.length);
            }
            for (let i = 0; i < this.abInit.length; i++) {
                this.bus.setWordDirect(addr + i, this.abInit[i]);
            }
            return true;
        }

        /*
         * We don't need to report an error here, because addMemory() already takes care of that.
         */
        return false;
    }

    /**
     * cloneROM(addr)
     *
     * For ROMs with one or more alias addresses, we used to call addROM() for each address.  However,
     * that obviously wasted memory, since each alias was an independent copy, and if you used the
     * Debugger to edit the ROM in one location, the changes would not appear in the other location(s).
     *
     * Now that the Bus component provides low-level getMemoryBlocks() and setMemoryBlocks() methods
     * to manually get and set the blocks of any memory range, it is now possible to create true aliases.
     *
     * @this {ROMPDP10}
     * @param {number} addr
     */
    cloneROM(addr)
    {
        var aBlocks = this.bus.getMemoryBlocks(this.addrROM, this.sizeROM);
        this.bus.setMemoryBlocks(addr, this.sizeROM, aBlocks);
    }

    /**
     * ROMPDP10.init()
     *
     * This function operates on every HTML element of class "rom", extracting the
     * JSON-encoded parameters for the ROMPDP10 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a ROMPDP10 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeROM = Component.getElementsByClass(APPCLASS, "rom");
        for (var iROM = 0; iROM < aeROM.length; iROM++) {
            var eROM = aeROM[iROM];
            var parmsROM = Component.getComponentParms(eROM);
            var rom = new ROMPDP10(parmsROM);
            Component.bindComponentControls(rom, eROM, APPCLASS);
        }
    }
}

/*
 * NOTE: There's currently no need for this component to have a reset() function, since
 * once the ROM data is loaded, it can't be changed, so there's nothing to reinitialize.
 *
 * OK, well, I take that back, because the Debugger, if installed, has the ability to modify
 * ROM contents, so in that case, having a reset() function that restores the original ROM data
 * might be useful; then again, it might not, depending on what you're trying to debug.
 *
 * If we do add reset(), then we'll want to change initROM() to hang onto the original
 * ROM data; currently, we release it after copying it into the read-only memory allocated
 * via bus.addMemory().
 */

/*
 * Initialize all the ROMPDP10 modules on the page.
 */
WebLib.onInit(ROMPDP10.init);
