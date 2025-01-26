/**
 * @fileoverview Implements the PDP-11 RAM component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MemoryPDP11 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DumpAPI from "../../../../modules/v2/dumpapi.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG } from "./defines.js";

/**
 * @class RAMPDP11
 * @unrestricted
 */
export default class RAMPDP11 extends Component {
    /**
     * RAMPDP11(parmsRAM)
     *
     * The RAMPDP11 component expects the following (parmsRAM) properties:
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
     * TODO: I seem to recall a PDP-11 diagnostic that failed if total RAM wasn't a multiple of 16Kb; our Bus
     * component defaults to a block size that matches BusPDP11.IOPAGE_LENGTH (ie, 8Kb), and we even allow partial
     * block allocations, so internally, we don't have that requirement, but for better compatibility, perhaps we
     * should display a non-fatal warning if addr or size don't fall on 16Kb boundaries.
     *
     * @param {Object} parmsRAM
     */
    constructor(parmsRAM)
    {
        super("RAM", parmsRAM);

        this.abInit = null;
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
     * @this {RAMPDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
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
     * @this {RAMPDP11}
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
     * @this {RAMPDP11}
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
     * @this {RAMPDP11}
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
                this.abInit = resource.aBytes;
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
     * @this {RAMPDP11}
     */
    initRAM()
    {
        if (!this.bus) return;

        if (!this.fAllocated && this.sizeRAM) {
            if (this.bus.addMemory(this.addrRAM, this.sizeRAM, MemoryPDP11.TYPE.RAM)) {
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
                if (!this.abInit) return;

                if (this.loadImage(this.abInit, this.addrLoad, this.addrExec, this.addrRAM)) {
                    this.printf(MESSAGE.STATUS, 'Loaded image "%s"\n', this.sFileName);
                } else {
                    this.printf(MESSAGE.NOTICE, "Error loading image \"%s\"\n", this.sFileName);
                }

                /*
                 * NOTE: We now retain this data, so that reset() can return the RAM to its predefined state.
                 *
                 *      delete this.abInit;
                 */
            }
            this.fReset = true;
            this.setReady();
        }
    }

    /**
     * reset()
     *
     * @this {RAMPDP11}
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
            if (this.abInit) {
                this.loadImage(this.abInit, this.addrLoad, this.addrExec, this.addrRAM, !this.dbg);
            }
        }
        this.fReset = false;
    }

    /**
     * loadImage(aBytes, addrLoad, addrExec, addrInit, fStart)
     *
     * If the array contains a PAPER tape image in the "Absolute Format," load it as specified
     * by the format; otherwise, load it as-is using the address(es) supplied.
     *
     * @this {RAMPDP11}
     * @param {Array|Uint8Array} aBytes
     * @param {number|null} [addrLoad]
     * @param {number|null} [addrExec] (this CAN override any starting address INSIDE the image)
     * @param {number|null} [addrInit]
     * @param {boolean} [fStart]
     * @returns {boolean} (true if loaded, false if not)
     */
    loadImage(aBytes, addrLoad, addrExec, addrInit, fStart)
    {
        var fStop = false;
        var fLoaded = false;
        /*
         * Data on tapes in the "Absolute Format" is organized into blocks; each block begins with
         * a 6-byte header:
         *
         *      2-byte signature (0x0001)
         *      2-byte block length (N + 6, because it includes the 6-byte header)
         *      2-byte load address
         *
         * followed by N data bytes.  If N is zero, then the 2-byte load address is the exec address,
         * unless the address is odd (usually 1).  DEC's Absolute Loader jumps to the exec address
         * in former case, halts in the latter.
         *
         * All values are stored "little endian" (low byte followed by high byte), just like the
         * PDP-11's memory architecture.
         *
         * After the data bytes, there is a single checksum byte.  The 8-bit sum of all the bytes in
         * the block (including the header bytes and checksum byte) should be zero.
         *
         * ANOMALIES: Tape files don't always begin with a signature word, so I allow any number of
         * leading zeros before the first signature.  Tape files don't always end cleanly either, so as
         * soon as I see an invalid signature, I break out of the loop without signalling an error, as
         * long as at least ONE block was successfully processed.  In fact, it's possible that as
         * soon as a block with ZERO data bytes is encountered, processing is supposed to stop, but
         * I haven't examined enough tapes (or the Absolute Loader code) to know for sure.
         */
        if (addrLoad == null) {
            var off = 0, fError = false;
            while (off < aBytes.length - 1) {
                var w = (aBytes[off] & 0xff) | ((aBytes[off+1] & 0xff) << 8);
                if (!w) {           // ignore pairs of leading zeros
                    off += 2;
                    continue;
                }
                if (!(w & 0xff)) {  // as well as single bytes of zero
                    off++;
                    continue;
                }
                var offBlock = off;
                if (w != 0x0001) {
                    this.printf(MESSAGE.PAPER, "invalid signature (%#06x) at offset %#06x\n", w, offBlock);
                    break;
                }
                if (off + 6 >= aBytes.length) {
                    this.printf(MESSAGE.PAPER, "invalid block at offset %#06x\n", offBlock);
                    break;
                }
                off += 2;
                var checksum = w;
                var len = (aBytes[off++] & 0xff) | ((aBytes[off++] & 0xff) << 8);
                var addr = (aBytes[off++] & 0xff) | ((aBytes[off++] & 0xff) << 8);
                checksum += (len & 0xff) + (len >> 8) + (addr & 0xff) + (addr >> 8);
                var offData = off, cbData = len -= 6;
                while (len > 0 && off < aBytes.length) {
                    checksum += aBytes[off++] & 0xff;
                    len--;
                }
                if (len != 0 || off >= aBytes.length) {
                    this.printf(MESSAGE.PAPER, "insufficient data for block at offset %#06x\n", offBlock);
                    break;
                }
                checksum += aBytes[off++] & 0xff;
                if (checksum & 0xff) {
                    this.printf(MESSAGE.PAPER, "invalid checksum (%#04x) for block at offset %#06x\n", checksum, offBlock);
                    break;
                }
                if (!cbData) {
                    if (addr & 0x1) {
                        fStop = true;
                    } else {
                        if (addrExec == null) addrExec = addr;
                    }
                    if (addrExec != null) this.printf(MESSAGE.PAPER, "starting address: %#06x\n", addrExec);
                } else {
                    this.printf(MESSAGE.PAPER, "loading %#06x bytes at %#06x-%%#06x\n", cbData, addr, addr + cbData);
                    while (cbData--) {
                        this.bus.setByteDirect(addr++, aBytes[offData++] & 0xff);
                    }
                }
                fLoaded = true;
            }
        }
        if (!fLoaded) {
            if (addrLoad == null) addrLoad = addrInit;
            if (addrLoad != null) {
                for (var i = 0; i < aBytes.length; i++) {
                    this.bus.setByteDirect(addrLoad + i, aBytes[i]);
                }
                fLoaded = true;
            }
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
            if (addrExec == null || fStop) {
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
     * RAMPDP11.init()
     *
     * This function operates on every HTML element of class "ram", extracting the
     * JSON-encoded parameters for the RAMPDP11 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a RAMPDP11 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeRAM = Component.getElementsByClass(APPCLASS, "ram");
        for (var iRAM = 0; iRAM < aeRAM.length; iRAM++) {
            var eRAM = aeRAM[iRAM];
            var parmsRAM = Component.getComponentParms(eRAM);
            var ram = new RAMPDP11(parmsRAM);
            Component.bindComponentControls(ram, eRAM, APPCLASS);
        }
    }
}

/*
 * Initialize all the RAMPDP11 modules on the page.
 */
WebLib.onInit(RAMPDP11.init);
