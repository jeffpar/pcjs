/**
 * @fileoverview Implements the PCx80 RAM component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPUDefX80 from "./cpudef.js";
import MemoryX80 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import DumpAPI from "../../../modules/v2/dumpapi.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class RAMx80
 * @unrestricted
 */
export default class RAMx80 extends Component {
    /**
     * RAMx80(parmsRAM)
     *
     * The RAMx80 component expects the following (parmsRAM) properties:
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
     * @this {RAMx80}
     * @param {Object} parmsRAM
     */
    constructor(parmsRAM)
    {
        super("RAM", parmsRAM);

        this.abInit = null;
        this.aSymbols = null;

        this.addrRAM = parmsRAM['addr'];
        this.sizeRAM = parmsRAM['size'];
        this.addrLoad = parmsRAM['load'];
        this.addrExec = parmsRAM['exec'];

        this.fInstalled = (!!this.sizeRAM); // 0 is the default value for 'size' when none is specified
        this.fAllocated = false;

        this.sFilePath = parmsRAM['file'];
        this.sFileName = StrLib.getBaseName(this.sFilePath);

        if (this.sFilePath) {
            let sFileURL = this.sFilePath;
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "load(\"%s\")\n", sFileURL);
            /*
             * If the selected data file has a ".json" extension, then we assume it's pre-converted
             * JSON-encoded data, so we load it as-is; ditto for ROM files with a ".hex" extension.
             * Otherwise, we ask our server-side converter to return the file in a JSON-compatible format.
             */
            let sFileExt = StrLib.getExtension(this.sFileName);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFilePath + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES + '&' + DumpAPI.QUERY.DECIMAL + '=true';
            }
            let ram = this;
            WebLib.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                ram.doneLoad(sURL, sResponse, nErrorCode);
            });
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {RAMx80}
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
        this.initRAM();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {RAMx80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        /*
         * The Computer powers up the CPU last, at which point CPUState state is restored,
         * which includes the Bus state, and since we use the Bus to allocate all our memory,
         * memory contents are already restored for us, so we don't need the usual restore
         * logic.
         */
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {RAMx80}
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
     * doneLoad(sURL, sData, nErrorCode)
     *
     * @this {RAMx80}
     * @param {string} sURL
     * @param {string} sData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load RAM resource (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sData);

        let resource = WebLib.parseMemoryResource(sURL, sData);
        if (resource) {
            this.abInit = resource.aBytes;
            this.aSymbols = resource.aSymbols;
            if (this.addrLoad == null) this.addrLoad = resource.addrLoad;
            if (this.addrExec == null) this.addrExec = resource.addrExec;
        } else {
            this.sFilePath = null;
        }
        this.initRAM();
    }

    /**
     * initRAM()
     *
     * This function is called by both initBus() and doneLoad(), but it cannot copy the initial data into place
     * until after initBus() has received the Bus component AND doneLoad() has received the data.  When both those
     * criteria are satisfied, the component becomes "ready".
     *
     * @this {RAMx80}
     */
    initRAM()
    {
        if (!this.fAllocated && this.sizeRAM) {
            if (this.bus.addMemory(this.addrRAM, this.sizeRAM, MemoryX80.TYPE.RAM)) {
                this.fAllocated = true;
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
                if (!this.abInit || !this.bus) return;

                let addr = this.addrRAM;
                if (this.addrLoad !== null) addr = this.addrLoad;
                for (let i = 0; i < this.abInit.length; i++) {
                    this.bus.setByteDirect(addr + i, this.abInit[i]);
                }

                if (this.addrExec !== null) {
                    /*
                     * Here's where we enable our "Fake CP/M" support, triggered by the user loading a "writable" ROM image
                     * at offset 0x100.  Fake CP/M support works by installing HLT opcodes at well-known CP/M addresses
                     * (namely, 0x0000, which is the CP/M reset vector, and 0x0005, which is the CP/M system call vector) and
                     * then telling the CPU to call us whenever a HLT occurs, so we can check PC for one of these addresses.
                     */
                    if (this.addrExec == RAMx80.CPM.INIT) {
                        for (let i = 0; i < RAMx80.CPM.VECTORS.length; i++) {
                            this.bus.setByteDirect(RAMx80.CPM.VECTORS[i], CPUDefX80.OPCODE.HLT);
                        }
                        this.cpu.addHaltCheck(function(rom) {
                            return function(addr) {
                                return rom.checkCPMVector(addr);
                            };
                        }(this));
                    }
                    this.cpu.setReset(this.addrExec);
                }

                /*
                 * TODO: Consider an option to retain this data and give the user a way of restoring the initial contents.
                 */
                delete this.abInit;
            }
            this.setReady();
        }
    }

    /**
     * reset()
     *
     * @this {RAMx80}
     */
    reset()
    {
        /*
         * If you want to zero RAM on reset, then this would be a good place to do it.
         */
    }

    /**
     * checkCPMVector(addr)
     *
     * @this {RAMx80}
     * @param {number} addr (of the HLT opcode)
     * @returns {boolean} true if special processing performed, false if not
     */
    checkCPMVector(addr)
    {
        let i = RAMx80.CPM.VECTORS.indexOf(addr);
        if (i >= 0) {
            let fCPM = false;
            let cpu = this.cpu;
            let dbg = this.dbg;
            if (addr == RAMx80.CPM.BDOS.VECTOR) {
                fCPM = true;
                switch(cpu.regC) {
                case RAMx80.CPM.BDOS.FUNC.CON_WRITE:
                    this.writeCPMString(this.getCPMChar(cpu.regE));
                    break;
                case RAMx80.CPM.BDOS.FUNC.STR_WRITE:
                    this.writeCPMString(this.getCPMString(cpu.getDE(), '$'));
                    break;
                default:
                    fCPM = false;
                    break;
                }
            }
            if (fCPM) {
                CPUDefX80.opRET.call(cpu);     // for recognized calls, automatically return
            }
            else if (dbg) {
                this.print("\nCP/M vector %#06x\n", addr);
                cpu.setPC(addr);                // this is purely for the Debugger's benefit, to show the HLT
                dbg.stopCPU();
            }
            return true;
        }
        return false;
    }

    /**
     * getCPMChar(ch)
     *
     * @this {RAMx80}
     * @param {number} ch
     * @returns {string}
     */
    getCPMChar(ch)
    {
        return String.fromCharCode(ch);
    }

    /**
     * getCPMString(addr, chEnd)
     *
     * @this {RAMx80}
     * @param {number} addr (of a string)
     * @param {string|number} [chEnd] (terminating character, default is 0)
     * @returns {string}
     */
    getCPMString(addr, chEnd)
    {
        let s = "";
        let cchMax = 255;
        let bEnd = chEnd && chEnd.length && chEnd.charCodeAt(0) || chEnd || 0;
        while (cchMax--) {
            let b = this.cpu.getByte(addr++);
            if (b == bEnd) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * writeCPMString(s)
     *
     * @this {RAMx80}
     * @param {string} s
     */
    writeCPMString(s)
    {
        this.print(s.replace(/\r/g, ''));
    }

    /**
     * RAMx80.init()
     *
     * This function operates on every HTML element of class "ram", extracting the
     * JSON-encoded parameters for the RAMx80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a RAMx80 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeRAM = Component.getElementsByClass(APPCLASS, "ram");
        for (let iRAM = 0; iRAM < aeRAM.length; iRAM++) {
            let eRAM = aeRAM[iRAM];
            let parmsRAM = Component.getComponentParms(eRAM);
            let ram = new RAMx80(parmsRAM);
            Component.bindComponentControls(ram, eRAM, APPCLASS);
        }
    }
}

RAMx80.CPM = {
    BIOS: {
        VECTOR:         0x0000
    },
    BDOS: {
        VECTOR:         0x0005,
        FUNC: {                         // function number (specified in regC)
            RESET:      0x00,
            CON_READ:   0x01,           // output: A = L = ASCII character
            CON_WRITE:  0x02,           // input: E = ASCII character
            AUX_READ:   0x03,           // output: A = L = ASCII character
            AUX_WRITE:  0x04,           // input: E = ASCII character
            PRN_WRITE:  0x05,           // input: E = ASCII character
            MEM_SIZE:   0x06,           // output: base address of CCP (Console Command Processor), but which register? (perhaps moot if this was CP/M 1.3 only...)
            CON_IO:     0x06,           // input: E = ASCII character (or 0xFF to return ASCII character in A)
            GET_IOBYTE: 0x07,
            SET_IOBYTE: 0x08,
            STR_WRITE:  0x09            // input: DE = address of string
        }
    },
    INIT:               0x100
};

RAMx80.CPM.VECTORS = [RAMx80.CPM.BIOS.VECTOR, RAMx80.CPM.BDOS.VECTOR];

/*
 * Initialize all the RAMx80 modules on the page.
 */
WebLib.onInit(RAMx80.init);
