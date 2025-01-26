/**
 * @fileoverview Implements the PCx80 ROM component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MemoryX80 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import DumpAPI from "../../../modules/v2/dumpapi.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class ROMx80
 * @unrestricted
 */
export default class ROMx80 extends Component {
    /**
     * ROMx80(parmsROM)
     *
     * The ROMx80 component expects the following (parmsROM) properties:
     *
     *      addr: physical address of ROM
     *      size: amount of ROM, in bytes
     *      alias: physical alias address (null if none)
     *      file: name of ROM data file
     *
     * NOTE: The ROM data will not be copied into place until the Bus is ready (see initBus()) AND the
     * ROM data file has finished loading (see doneLoad()).
     *
     * Also, while the size parameter may seem redundant, I consider it useful to confirm that the ROM you received
     * is the ROM you expected.
     *
     * @this {ROMx80}
     * @param {Object} parmsROM
     */
    constructor(parmsROM)
    {
        super("ROM", parmsROM);

        this.abROM = null;
        this.addrROM = parmsROM['addr'];
        this.sizeROM = parmsROM['size'];

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

        this.sFilePath = parmsROM['file'];
        this.sFileName = StrLib.getBaseName(this.sFilePath);

        if (this.sFilePath) {
            let sFileURL = this.sFilePath;
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "load(\"%s\"\n", sFileURL);
            /*
             * If the selected ROM file has a ".json" extension, then we assume it's pre-converted
             * JSON-encoded ROM data, so we load it as-is; ditto for ROM files with a ".hex" extension.
             * Otherwise, we ask our server-side ROM converter to return the file in a JSON-compatible format.
             */
            let sFileExt = StrLib.getExtension(this.sFileName);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFilePath + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES + '&' + DumpAPI.QUERY.DECIMAL + '=true';
            }
            let rom = this;
            WebLib.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                rom.doneLoad(sURL, sResponse, nErrorCode);
            });
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {ROMx80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.copyROM();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {ROMx80}
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
     * @this {ROMx80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return true;
    }

    /**
     * doneLoad(sURL, sROMData, nErrorCode)
     *
     * @this {ROMx80}
     * @param {string} sURL
     * @param {string} sROMData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sROMData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load system ROM (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sROMData);

        if (sROMData.charAt(0) == "[" || sROMData.charAt(0) == "{") {
            try {
                /*
                 * The most likely source of any exception will be here: parsing the JSON-encoded ROM data.
                 */
                let rom = eval("(" + sROMData + ")");

                /*
                 * PCjs v2 ROM images contain, at a minimum, a 'width' value and a 'values' array, along with
                 * other optional properties, like default load address ('addr'), endianness ('littleEndian'), etc.
                 *
                 * So we'll start with that and fall back to 8-bit 'bytes' or 32-bit 'longs' (or worst-case, 'data',
                 * but the length of 'data' values varied according to the machine architecture, so the introduction
                 * of 'data' was a "bit" ill-advised).
                 */
                let width = rom['width'];
                let values = rom['values'];
                let littleEndian = (rom['littleEndian'] !== false);
                if (!width || !values) {
                    width = 0;
                    if ((values = rom['bytes'])) {
                        width = 8;
                    }
                    else if ((values = rom['longs'] || rom['data'])) {
                        width = 32;
                    }
                }
                /*
                 * Convert all values to bytes, so that subsequent code has a simple and consistent data format: abROM.
                 */
                if (width) {
                    if (width == 8) {
                        this.abROM = values;
                    } else {
                        let bpv = width >>> 3;
                        this.abROM = new Array(values.length * bpv);
                        for (let i = 0, ib = 0; i < values.length; i++) {
                            let v = values[i];
                            if (littleEndian) {
                                for (let b = 0; b < bpv; b++) {
                                    this.abROM[ib + b] = v & 0xff;
                                    v >>>= 8;
                                }
                            } else {
                                for (let b = bpv - 1; b >= 0; b--) {
                                    this.abROM[ib + b] = v & 0xff;
                                    v >>>= 8;
                                }
                            }
                            ib += bpv;
                        }
                    }
                }
                else {
                    this.abROM = rom;
                }

                this.aSymbols = rom['symbols'];

                if (!this.abROM.length) {
                    Component.error("Empty ROM: " + sURL);
                    return;
                }
                else if (this.abROM.length == 1) {
                    Component.error(this.abROM[0]);
                    return;
                }
            } catch (e) {
                this.printf(MESSAGE.NOTICE, "ROM data error: %s\n", e.message);
                return;
            }
        }
        else {
            /*
             * Parse the ROM data manually; we assume it's in "simplified" hex form (a series of hex byte-values
             * separated by whitespace).
             */
            let sHexData = sROMData.replace(/\n/gm, " ").replace(/ +$/, "");
            let asHexData = sHexData.split(" ");
            this.abROM = new Array(asHexData.length);
            for (let i = 0; i < asHexData.length; i++) {
                this.abROM[i] = StrLib.parseInt(asHexData[i], 16);
            }
        }
        this.copyROM();
    }

    /**
     * copyROM()
     *
     * This function is called by both initBus() and doneLoad(), but it cannot copy the the ROM data into place
     * until after initBus() has received the Bus component AND doneLoad() has received the abROM data.  When both
     * those criteria are satisfied, the component becomes "ready".
     *
     * @this {ROMx80}
     */
    copyROM()
    {
        if (!this.isReady()) {
            if (!this.sFilePath) {
                this.setReady();
            }
            else if (this.abROM && this.bus) {
                /*
                 * If no explicit size was specified, then use whatever the actual size is.
                 */
                if (!this.sizeROM) {
                    this.sizeROM = this.abROM.length;
                }
                if (this.abROM.length != this.sizeROM) {
                    /*
                     * Note that setError() sets the component's fError flag, which in turn prevents setReady() from
                     * marking the component ready.  TODO: Revisit this decision.  On the one hand, it sounds like a
                     * good idea to stop the machine in its tracks whenever a setError() occurs, but there may also be
                     * times when we'd like to forge ahead anyway.
                     */
                    this.setError("ROM size (" + StrLib.toHexLong(this.abROM.length) + ") does not match specified size (" + StrLib.toHexLong(this.sizeROM) + ")");
                }
                else if (this.addROM(this.addrROM)) {

                    let aliases = [];
                    if (typeof this.addrAlias == "number") {
                        aliases.push(this.addrAlias);
                    } else if (this.addrAlias != null && this.addrAlias.length) {
                        aliases = this.addrAlias;
                    }
                    for (let i = 0; i < aliases.length; i++) {
                        this.cloneROM(aliases[i]);
                    }
                    /*
                     * We used to hang onto the original ROM data so that we could restore any bytes the CPU overwrote,
                     * using memory write-notification handlers, but with the introduction of read-only memory blocks, that's
                     * no longer necessary.
                     *
                     * TODO: Consider an option to retain the ROM data, and give the user some way of restoring ROMs.
                     * That may be useful for "resumable" machines that save/restore all dirty block of memory, regardless
                     * whether they're ROM or RAM.  However, the only way to modify a machine's ROM is with the Debugger,
                     * and Debugger users should know better.
                     */
                    delete this.abROM;
                }
                this.setReady();
            }
        }
    }

    /**
     * addROM(addr)
     *
     * @this {ROMx80}
     * @param {number} addr
     * @returns {boolean}
     */
    addROM(addr)
    {
        if (this.bus.addMemory(addr, this.sizeROM, MemoryX80.TYPE.ROM)) {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "addROM(%#010x): %#010x bytes\n", addr, this.abROM.length);
            for (let i = 0; i < this.abROM.length; i++) {
                this.bus.setByteDirect(addr + i, this.abROM[i]);
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
     * @this {ROMx80}
     * @param {number} addr
     */
    cloneROM(addr)
    {
        let aBlocks = this.bus.getMemoryBlocks(this.addrROM, this.sizeROM);
        this.bus.setMemoryBlocks(addr, this.sizeROM, aBlocks);
    }

    /**
     * ROMx80.init()
     *
     * This function operates on every HTML element of class "rom", extracting the
     * JSON-encoded parameters for the ROMx80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a ROMx80 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeROM = Component.getElementsByClass(APPCLASS, "rom");
        for (let iROM = 0; iROM < aeROM.length; iROM++) {
            let eROM = aeROM[iROM];
            let parmsROM = Component.getComponentParms(eROM);
            let rom = new ROMx80(parmsROM);
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
 * If we do add reset(), then we'll want to change copyROM() to hang onto the original
 * ROM data; currently, we release it after copying it into the read-only memory allocated
 * via bus.addMemory().
 */

/*
 * Initialize all the ROMx80 modules on the page.
 */
WebLib.onInit(ROMx80.init);
