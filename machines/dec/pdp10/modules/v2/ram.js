/**
 * @fileoverview Implements the PDP-10 RAM component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MemoryPDP10 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DumpAPI from "../../../../modules/v2/dumpapi.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, PDP10 } from "./defines.js";

/**
 * @class RAMPDP10
 * @unrestricted
 */
export default class RAMPDP10 extends Component {
    /**
     * RAMPDP10(parmsRAM)
     *
     * The RAMPDP10 component expects the following (parmsRAM) properties:
     *
     *      addr: starting physical address of RAM (default is 0)
     *      size: amount of RAM, in bytes (default is 0, which means defer to motherboard switch settings)
     *      file: name of optional data file to load into RAM (default is "")
     *      load: optional file load address (overrides any load address specified in the data file; default is null)
     *      exec: optional file exec address (overrides any exec address specified in the data file; default is null)
     *
     * NOTE: We make a note of the specified size, but no memory is initially allocated for the RAM until the
     * Computer component calls powerUp().
     *
     * @param {Object} parmsRAM
     */
    constructor(parmsRAM)
    {
        super("RAM", parmsRAM);

        this.aData = null;
        this.aSymbols = null;

        this.addrRAM = +parmsRAM['addr'];
        this.sizeRAM = +parmsRAM['size'];

        this.addrLoad = parmsRAM['load'];
        this.addrExec = parmsRAM['exec'];
        if (this.addrLoad != null) this.addrLoad = +this.addrLoad;
        if (this.addrExec != null) this.addrExec = +this.addrExec;

        this.fInstalled = (!!this.sizeRAM); // 0 is the default value for 'size' when none is specified
        this.fAllocated = this.fReset = false;

        this.sFilePath = parmsRAM['file'];
        this.sFileName = StrLib.getBaseName(this.sFilePath);

        if (this.sFilePath) {
            var sFileURL = this.sFilePath;
            if (DEBUG) this.printf(MESSAGE.LOG, "load(\"%s\")\n", sFileURL);
            /*
             * If the selected data file has a ".json" extension, then we assume it's pre-converted
             * JSON-encoded data, so we load it as-is; ditto for ROM files with a ".hex" extension.
             * Otherwise, we ask our server-side converter to return the file in a JSON-compatible format.
             */
            var sFileExt = StrLib.getExtension(this.sFileName);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFilePath + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES + '&' + DumpAPI.QUERY.DECIMAL + '=true';
            }
            var ram = this;
            WebLib.getResource(sFileURL, null, true, function doneLoad(sURL, sResponse, nErrorCode) {
                ram.finishLoad(sURL, sResponse, nErrorCode);
            });
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {RAMPDP10}
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
        this.initRAM();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {RAMPDP10}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (this.aSymbols) {
            if (this.dbg) {
                this.dbg.addSymbols(this.id, this.addrRAM, this.sizeRAM, this.aSymbols);
            }
            /*
             * Our only role in the handling of symbols is to hand them off to the Debugger at our
             * first opportunity. Now that we've done that, our copy of the symbols, if any, are toast.
             */
            delete this.aSymbols;
        }
        if (!fRepower) {
            /*
             * Since we use the Bus to allocate all our memory, memory contents are already restored for us,
             * so we don't save any state, and therefore no state should be restored.  Just do a reset().
             */
            this.assert(!data);
            this.reset();
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {RAMPDP10}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        /*
         * The Computer powers down the CPU first, at which point CPUState state is saved,
         * which includes the Bus state, and since we use the Bus component to allocate all
         * our memory, memory contents are already saved for us, so we don't need the usual
         * save logic.
         */
        return true;
    }

    /**
     * finishLoad(sURL, sData, nErrorCode)
     *
     * @this {RAMPDP10}
     * @param {string} sURL
     * @param {string} sData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    finishLoad(sURL, sData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load RAM resource (error %d: %s)\n", nErrorCode, sURL);
            this.sFilePath = null;
        }
        else {
            Component.addMachineResource(this.idMachine, sURL, sData);
            var resource = WebLib.parseMemoryResource(sURL, sData);
            if (resource) {
                this.aData = resource.aData;
                this.aSymbols = resource.aSymbols;
                if (this.addrLoad == null) this.addrLoad = resource.addrLoad;
                if (this.addrExec == null) this.addrExec = resource.addrExec;
            } else {
                this.sFilePath = null;
            }
        }
        this.initRAM();
    }

    /**
     * initRAM()
     *
     * This function is called by both initBus() and finishLoad(), but it cannot copy the initial data into place
     * until after initBus() has received the Bus component AND finishLoad() has received the data.  When both those
     * criteria are satisfied, the component becomes "ready".
     *
     * @this {RAMPDP10}
     */
    initRAM()
    {
        if (!this.bus) return;

        if (!this.fAllocated && this.sizeRAM) {
            if (this.bus.addMemory(this.addrRAM, this.sizeRAM, MemoryPDP10.TYPE.RAM)) {
                this.fAllocated = true;
            } else {
                this.sizeRAM = 0;           // don't bother trying again (it just results in redundant error messages)
            }
        }
        if (!this.isReady()) {
            if (!this.fAllocated) {
                Component.error("No RAM allocated");
            }
            else if (this.sFilePath) {
                /*
                 * Too early...
                 */
                if (!this.aData) return;

                if (this.loadImage(this.aData, this.addrLoad, this.addrExec, this.addrRAM)) {
                    this.printf(MESSAGE.STATUS, 'Loaded image "%s"\n', this.sFileName);
                } else {
                    this.printf(MESSAGE.STATUS, 'Error loading image "%s"\n', this.sFileName);
                }

                /*
                 * NOTE: We now retain this data, so that reset() can return the RAM to its predefined state.
                 *
                 *      delete this.aData;
                 */
            }
            this.fReset = true;
            this.setReady();
        }
    }

    /**
     * reset()
     *
     * @this {RAMPDP10}
     */
    reset()
    {
        if (this.fAllocated && !this.fReset) {
            /*
             * TODO: Add a configuration parameter for selecting the byte pattern on reset?
             * Note that when memory blocks are originally created, they are currently always
             * zero-initialized, so this would only affect resets.
             */
            this.bus.zeroMemory(this.addrRAM, this.sizeRAM, 0);
            if (this.aData) {
                this.loadImage(this.aData, this.addrLoad, this.addrExec, this.addrRAM, !this.dbg);
            }
        }
        this.fReset = false;
    }

    /**
     * loadImage(aData, addrLoad, addrExec, addrInit, fStart)
     *
     * If the array contains a PAPER tape image in the "Absolute Format," load it as specified
     * by the format; otherwise, load it as-is using the address(es) supplied.
     *
     * @this {RAMPDP10}
     * @param {Array} aData
     * @param {number|null} [addrLoad]
     * @param {number|null} [addrExec] (this CAN override any starting address INSIDE the image)
     * @param {number|null} [addrInit]
     * @param {boolean} [fStart]
     * @returns {boolean} (true if loaded, false if not)
     */
    loadImage(aData, addrLoad, addrExec, addrInit, fStart)
    {
        var fLoaded = false;

        if (addrLoad == null) {
            addrLoad = addrInit;
        }
        if (addrLoad != null) {
            for (var i = 0; i < aData.length; i++) {
                this.bus.setWordDirect(addrLoad + i, aData[i]);
            }
            fLoaded = true;
        }
        if (fLoaded) {
            /*
             * Set the start address to whatever the caller provided, or failing that, whatever start
             * address was specified inside the image.
             *
             * For example, the diagnostic "MAINDEC-11-D0AA-PB" doesn't include a start address inside the
             * image, but we know that the directions for that diagnostic say to "Start and Restart at 200",
             * so we have manually inserted an "exec":128 in the JSON containing the image.
             */
            if (addrExec == null) {
                this.cpu.stopCPU();
                fStart = false;
            }
            if (addrExec != null) {
                this.cpu.setReset(addrExec, fStart);
            }
        }
        return fLoaded;
    }

    /**
     * RAMPDP10.init()
     *
     * This function operates on every HTML element of class "ram", extracting the
     * JSON-encoded parameters for the RAMPDP10 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a RAMPDP10 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeRAM = Component.getElementsByClass(APPCLASS, "ram");
        for (var iRAM = 0; iRAM < aeRAM.length; iRAM++) {
            var eRAM = aeRAM[iRAM];
            var parmsRAM = Component.getComponentParms(eRAM);
            var ram = new RAMPDP10(parmsRAM);
            Component.bindComponentControls(ram, eRAM, APPCLASS);
        }
    }
}

/*
 * Initialize all the RAMPDP10 modules on the page.
 */
WebLib.onInit(RAMPDP10.init);
