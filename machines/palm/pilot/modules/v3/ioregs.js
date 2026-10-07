/**
 * @fileoverview Implements Palm Pilot I/O Registers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU68K  from "../../../../motorola/68k/modules/v3/cpu68k.js";
import Input   from "../../../../modules/v3/input.js";
import Memory  from "../../../../modules/v3/memory.js";
import MESSAGE from "../../../../modules/v3/message.js";
import PalmOS  from "./palmos.js";

/**
 * @typedef {MemoryConfig} PilotIOConfig
 * @property {number} [addr]
 * @property {number} size
 * @property {number} [type]
 * @property {Array.<number>} penRegion (x, y, width, height of the LCD on the input surface, in surface pixels)
 * @property {number} penHeight (height of the entire digitizer, in LCD pixels; eg, 160 rows of LCD + silk-screen rows)
 * @property {Object} buttonRegions (button IDs mapped to x, y, width, height rectangles on the input surface)
 */

/**
 * @class PilotIO
 * @unrestricted
 * @property {PilotIOConfig} config
 *
 * This is a port of HWDragonBall.java and HWLCDDragonBall.java, which emulate the MC68328 ("DragonBall")
 * hardware registers, including the interrupt controller, timers, I/O ports, SPI master (which the Pilot
 * uses to read the digitizer), RTC, and the LCD controller.
 *
 * In the original Java implementation, all hardware register values were maintained in a bank of memory
 * allocated along with the hardware address range, with special handling for frequently accessed registers
 * (eg, the timers).  We do the same thing here, using our own big-endian shadow of the register space
 * (see getByteEx() and friends, which correspond to the CPUMem GetByteEx() family of functions).
 */
export default class PilotIO extends Memory {
    /**
     * PilotIO(idMachine, idDevice, config)
     *
     * @this {PilotIO}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PilotIOConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['type'] = Memory.TYPE.READWRITE;
        config['addr'] = PilotIO.DBREGS_BASE & CPU68K.ADDR_MASK;
        config['size'] = PilotIO.DBREGS_SIZE;
        super(idMachine, idDevice, config);

        this.cpu = /** @type {CPU68K} */ (this.findDeviceByClass("CPU"));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
        this.video = null;          // the PilotVideo device will connect itself via setVideo()

        /**
         * Allocate our own big-endian register shadow, and then replace the default Memory interfaces with
         * our own, so that all byte, word, and long accesses are routed to the appropriate register handlers.
         */
        this.abRegs = new Uint8Array(PilotIO.DBREGS_SIZE);
        this.dvRegs = new DataView(this.abRegs.buffer);
        this.readData = this.getByte;
        this.readPair = this.getWord;
        this.readQuad = this.getLong;
        this.writeData = this.setByte;
        this.writePair = this.setWord;
        this.writeQuad = this.setLong;
        this.bus.addBlocks(this.config['addr'], this.size, Memory.TYPE.READWRITE, this);

        /**
         * Create "guard blocks" (dummy blocks that read as zero and ignore writes) immediately after RAM,
         * and at the ROM's address + 2Mb (if the ROM is smaller than that), just like CPUMem.InitMem() did, as a
         * simple way of making code that scans for memory (or for additional ROMs) see the "right" thing.
         */
        let ram = /** @type {Memory} */ (this.findDeviceByClass("RAM", false));
        if (ram) this.addGuardBlock(ram.config['addr'] + ram.config['size']);
        let rom = /** @type {Memory} */ (this.findDeviceByClass("ROM", false));
        if (rom && rom.config['addr'] == (0x10c00000 & CPU68K.ADDR_MASK) && rom.config['size'] <= 0x00200000) {
            this.addGuardBlock(rom.config['addr'] + 0x00200000);
        }

        /**
         * These are the hardware registers that we maintain internally, for the sake of performance and
         * convenience, as well as other hardware state that has no corresponding register.
         */
        this.awTMR1 = new Array(PilotIO.TMR_REGS);
        this.awTMR2 = new Array(PilotIO.TMR_REGS);
        this.xPenCurrent = this.yPenCurrent = 0;    // current pen position
        this.fPenDown = this.fPenUpPending = false; // keeps track of whether the pen is currently down
        this.fPenRead = false;                      // keeps track of whether the last pen position change has been read yet
        this.bPDDataEdge = 0;                       // keeps track of button interrupt transitions
        this.msRTCDelta = 0;                        // the delta between the device's time and the "real world" time
        this.nCyclesTimers = 0;                     // CPU cycle count when the timers were last updated
        this.nCyclesTMR1 = this.nCyclesTMR2 = 0;    // cycles not yet converted into timer ticks

        /**
         * The original Pilot uses the MC68328 ("DragonBall"), whereas later devices (eg, the Palm IIIc) use the
         * MC68EZ328 ("DragonBall EZ"), which has a mostly compatible (but simplified) set of registers; the most
         * important differences are a single timer (at the same address as TMR1, but using the TMR2 interrupt bit),
         * different interrupt levels, and different chip select registers.
         */
        this.fEZ = (this.config['chip'] == PilotIO.CHIP.EZ);
        this.abIMRLvl = this.fEZ? PilotIO.abIMRLvlEZ : PilotIO.abIMRLvl;
        this.lTMR1Bit = this.fEZ? PilotIO.IMR_TMR : PilotIO.IMR_TMR1;

        this.cpu.setHWRegs(this);
        this.timerTMR = this.time.addTimer(this.idDevice + ".timer", this.onTimer.bind(this));

        /**
         * Hook up the pen and the buttons.  The input surface (eg, an image of the Pilot) reports positions
         * via our onPen() handler, and keyboard/surface button events arrive via onButton().
         */
        let region = this.config['penRegion'] || [0, 0, PilotIO.DEF_SCREEN_WIDTH, PilotIO.DEF_SCREEN_HEIGHT];
        this.xPenRegion = region[0];
        this.yPenRegion = region[1];
        this.cxPenRegion = region[2];
        this.cyPenRegion = region[3];
        this.cyDigitizer = this.config['penHeight'] || PilotIO.DEF_SCREEN_HEIGHT;
        this.buttonRegions = this.config['buttonRegions'] || {};
        this.idButtonActive = null;
        if (this.input) {
            this.input.addInput(this.onPen.bind(this));
            for (let id in PilotIO.BUTTONS) {
                this.input.addListener(Input.TYPE.IDMAP, id, this.onButton.bind(this));
            }
        }

        /**
         * Support for loading PalmOS applications (see loadApp()), which needs a range of otherwise unused
         * addresses for temporary memory blocks; like CPUMem.InitTempBanks(), we use the range starting one block
         * past the end of RAM (since a guard block occupies the block immediately after RAM).
         */
        this.addrTemp = (ram? ram.config['addr'] + ram.config['size'] : 0) + this.bus.blockSize;
        this.addrTempLimit = rom? rom.config['addr'] : PilotIO.TEMP_LIMIT;
        this.aTempBlocks = [];
        this.aTempBlocksPrev = [];
        this.sAppLoading = null;
        this.addHandler(PilotIO.HANDLER.COMMAND, this.onCommand.bind(this));

        /**
         * On EZ-based devices, the digitizer is read using an A/D converter (see exchangeADC()), and these ranges
         * determine which A/D values correspond to the left/right and top/bottom edges of the digitizer.
         */
        this.aADCRangeX = this.config['adcRangeX'] || PilotIO.ADC_RANGE_X;

        /**
         * On EZ-based devices, the buttons are arranged in a matrix (see getKeyColumns()), so the 'keyMatrix' config
         * property maps each button ID to its matrix bit number (eg, row 2, column 0 is bit 8).
         */
        this.aKeyMatrix = [];
        let keyMatrix = this.config['keyMatrix'] || {};
        for (let id in PilotIO.BUTTONS) {
            this.aKeyMatrix[PilotIO.BUTTONS[id]] = keyMatrix[id] != undefined? keyMatrix[id] : PilotIO.BUTTONS[id];
        }
        this.aADCRangeY = this.config['adcRangeY'] || PilotIO.ADC_RANGE_Y;

        this.onReset();
    }

    /**
     * onCommand(aTokens)
     *
     * Processes commands that we support (eg, "load [url]"), returning undefined for all other commands, so that
     * other command handlers (eg, the Debugger's) have a chance to process them.
     *
     * @this {PilotIO}
     * @param {Array.<string>} aTokens ([0] contains the entire command, [1] the first token, and so on)
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let result;
        if (aTokens[1] == "load") {
            result = this.loadApp(aTokens[2]);
        }
        return result;
    }

    /**
     * loadApp(url)
     *
     * Loads a PalmOS database (eg, a PRC file) and installs it, and if it's an application, launches it, using the
     * same sequence of API calls that the original Java implementation's web pages used (see LoadDB() in apps.htm):
     *
     *      LocalID=DmFindDatabase(0, p)
     *      if (LocalID) DmDeleteDatabase(0, LocalID)
     *      DmCreateDatabaseFromImage(p)
     *      LocalID=DmFindDatabase(0, p)
     *      if (LocalID) SysUIAppSwitch(0, LocalID, 0, 0)
     *
     * where p is the address of the database image, which conveniently begins with the database name.
     *
     * A relative URL (eg, "demos/Daleks.prc") is resolved relative to the machine's page, whether or not the page's
     * URL ends with a slash (eg, "/machines/palm/pilot" is treated the same as "/machines/palm/pilot/").
     *
     * @this {PilotIO}
     * @param {string} [url]
     * @returns {string}
     */
    loadApp(url)
    {
        if (!url) return "usage: load [url]\n";
        if (this.sAppLoading) return this.sprintf("still loading %s\n", this.sAppLoading);
        let base = window.location.origin + window.location.pathname;
        if (!base.endsWith('/') && base.lastIndexOf('.') < base.lastIndexOf('/')) base += '/';
        let sURL = new URL(url, base).href;
        this.sAppLoading = sURL;
        fetch(sURL).then((response) => {
            if (!response.ok) throw new Error(this.sprintf("%d %s", response.status, response.statusText));
            return response.arrayBuffer();
        }).then((buffer) => {
            this.installApp(sURL, new Uint8Array(buffer));
        }).catch((err) => {
            this.printf("unable to load %s: %s\n", sURL, err.message);
            this.sAppLoading = null;
        });
        return this.sprintf("loading %s\n", sURL);
    }

    /**
     * installApp(url, ab)
     *
     * @this {PilotIO}
     * @param {string} url
     * @param {Uint8Array} ab (contents of a PalmOS database image)
     */
    installApp(url, ab)
    {
        let sName = "", sType = "";
        if (ab.length >= PilotIO.DBHDR_SIZE) {
            for (let i = 0; i < PilotIO.DBHDR_NAME_LEN && ab[i]; i++) sName += String.fromCharCode(ab[i]);
            for (let i = 0; i < 4; i++) sType += String.fromCharCode(ab[PilotIO.DBHDR_TYPE + i]);
        }
        if (!sName) {
            this.printf("%s is not a PalmOS database\n", url);
            this.sAppLoading = null;
            return;
        }
        let addr = this.allocTempBlocks(ab);
        if (!addr) {
            this.printf("not enough memory for %s\n", url);
            this.sAppLoading = null;
            return;
        }
        let cpu = this.cpu;
        let trap = (sName) => PalmOS.getAPITrap(sName);
        let done = (sError) => {
            this.freeTempBlocks();
            this.sAppLoading = null;
            if (sError) {
                this.printf("unable to install %s: %s\n", sName, sError);
                return;
            }
            this.printf("installed %s\n", sName);
            if (this.input) this.input.setFocus();
        };
        let findDatabase = (next) => {
            cpu.injectTrap(trap("DmFindDatabase"), [[0, 2], [addr, 4]], (result) => {
                if (!result) done("call aborted"); else next(result.d0);
            });
        };
        this.printf("installing %s (%d bytes)\n", sName, ab.length);
        findDatabase((dbID) => {
            if (dbID) cpu.injectTrap(trap("DmDeleteDatabase"), [[0, 2], [dbID, 4]], (result) => {
                if (!result) done("call aborted");
            });
            cpu.injectTrap(trap("DmCreateDatabaseFromImage"), [[addr, 4]], (result) => {
                if (!result) {
                    done("call aborted");
                    return;
                }
                let err = result.d0 & 0xffff;
                findDatabase((dbID) => {
                    if (!dbID) {
                        done(this.sprintf("error %#06x", err));
                        return;
                    }
                    if (sType != "appl") {
                        done("");
                        return;
                    }
                    cpu.injectTrap(trap("SysUIAppSwitch"), [[0, 2], [dbID, 4], [0, 2], [0, 4]], (result) => {
                        done(result? "" : "call aborted");
                    });
                });
            });
        });
    }

    /**
     * allocTempBlocks(ab)
     *
     * Maps enough temporary memory blocks at addrTemp to hold the given data, preceded by a fake PalmOS chunk header
     * (like CPUMem.InitTempBanks()), since the data is passed to PalmOS APIs as if it were allocated from a heap.
     *
     * Temporary blocks have no saveState() or loadState() handlers, so they are never saved as part of the Bus state.
     *
     * @this {PilotIO}
     * @param {Uint8Array} ab
     * @returns {number} (address of data, or 0 if error)
     */
    allocTempBlocks(ab)
    {
        let cpu = this.cpu, bus = this.bus;
        let cbHeader = (cpu.getWord(PilotIO.ROM_BASE + PilotIO.ROMHDR_HDRVER) == 1? 6 : 8);
        let cbActual = (cbHeader + ab.length + 1) & ~0x1;
        let nBlocks = Math.ceil(cbActual / bus.blockSize);
        if (this.aTempBlocksPrev.length || this.addrTemp + nBlocks * bus.blockSize > this.addrTempLimit) {
            return 0;
        }
        for (let i = 0; i < nBlocks; i++) {
            let block = this.aTempBlocks[i];
            if (!block) {
                block = new Memory(this.idMachine, this.idDevice + "[TEMP:" + i + "]", {"type": Memory.TYPE.READWRITE, "size": bus.blockSize, "bus": bus.idDevice});
                block.saveState = block.loadState = /** @type {?} */ (null);
                this.aTempBlocks[i] = block;
            }
            this.aTempBlocksPrev.push(bus.setBlock(this.addrTemp + i * bus.blockSize, block));
        }
        let addr = this.addrTemp;
        if (cbHeader == 6) {
            cpu.setWord(addr, cbActual);
            cpu.setByte(addr + 2, 0xf2);
            cpu.setByte(addr + 3, cbActual - cbHeader - ab.length);
        } else {
            cpu.setByte(addr, cbActual - cbHeader - ab.length);
            cpu.setByte(addr + 1, cbActual >> 16);
            cpu.setWord(addr + 2, cbActual);
            cpu.setByte(addr + 4, 0xf2);
        }
        addr += cbHeader;
        bus.initBlocks(addr, ab.length, ab);
        return addr;
    }

    /**
     * freeTempBlocks()
     *
     * @this {PilotIO}
     */
    freeTempBlocks()
    {
        for (let i = 0; i < this.aTempBlocksPrev.length; i++) {
            this.bus.setBlock(this.addrTemp + i * this.bus.blockSize, this.aTempBlocksPrev[i]);
        }
        this.aTempBlocksPrev = [];
    }

    /**
     * addGuardBlock(addr)
     *
     * @this {PilotIO}
     * @param {number} addr
     */
    addGuardBlock(addr)
    {
        let guard = new Memory(this.idMachine, this.idDevice + "[GUARD:" + this.toBase(addr, 16, 32, "") + "]", {"type": Memory.TYPE.NONE, "size": this.bus.blockSize, "bus": this.bus.idDevice});
        guard.readData = guard.readPair = guard.readQuad = function readGuard() { return 0; };
        this.bus.addBlocks(addr & CPU68K.ADDR_MASK, this.bus.blockSize, Memory.TYPE.NONE, guard);
    }

    /**
     * setVideo(video)
     *
     * Called by the PilotVideo device, so that we can notify it of LCD state changes (see resetScreen()).
     *
     * @this {PilotIO}
     * @param {Object} video
     */
    setVideo(video)
    {
        this.video = video;
    }

    /**
     * loadState(state)
     *
     * Memory and I/O register states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {PilotIO}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                try {
                    let abRegs = this.decompress(state.shift(), this.abRegs.length);
                    for (let i = 0; i < abRegs.length; i++) this.abRegs[i] = abRegs[i];
                    this.awTMR1 = state.shift();
                    this.awTMR2 = state.shift();
                    this.bPDDataEdge = state.shift();
                    this.msRTCDelta = state.shift();
                    this.nCyclesTimers = this.time.getCycles();
                    this.nCyclesTMR1 = this.nCyclesTMR2 = 0;
                    this.scheduleTimers();
                    this.resetScreen();
                    return true;
                } catch(err) {
                    this.printf("PilotIO state error: %s\n", err.message);
                }
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and I/O register states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {PilotIO}
     * @param {Array} state
     */
    saveState(state)
    {
        this.updateTimers();
        state.push(this.idDevice);
        state.push(this.compress(this.abRegs));
        state.push(this.awTMR1);
        state.push(this.awTMR2);
        state.push(this.bPDDataEdge);
        state.push(this.msRTCDelta);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.  This is also a good time to get
     * access to the Debugger, if any, and give it the ability to display PalmOS API names.
     *
     * @this {PilotIO}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (this.dbg === undefined) {
            this.dbg = /** @type {Dbg68K} */ (this.findDeviceByClass("Debugger", false));
            if (this.dbg && this.dbg.setTrapHandler) this.dbg.setTrapHandler(PalmOS.getAPIName);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.  This is the equivalent of
     * HWDragonBall.Init() and HWLCDDragonBall.Init(), which initialize all the registers that are defined to
     * have non-zero starting values.
     *
     * @this {PilotIO}
     */
    onReset()
    {
        this.abRegs.fill(0);
        let regsInit = this.fEZ? PilotIO.regsInitEZ : PilotIO.regsInit;
        for (let offset in regsInit.ab) {
            this.setByteEx(+offset, regsInit.ab[offset]);
        }
        for (let offset in regsInit.aw) {
            this.setWordEx(+offset, regsInit.aw[offset]);
        }
        for (let offset in regsInit.al) {
            this.setLongEx(+offset, regsInit.al[offset]);
        }
        if (!this.fEZ) {
            for (let offset = PilotIO.DBREG_CSA0; offset <= PilotIO.DBREG_CSD3; offset += 4) {
                this.setLongEx(offset, PilotIO.CHIP_SELECT_DEFAULT);
            }
        }
        this.awTMR1.fill(0);
        this.awTMR2.fill(0);
        this.awTMR1[PilotIO.TCMP] = this.awTMR2[PilotIO.TCMP] = 0xFFFF;
        this.nCyclesTimers = this.time.getCycles();
        this.nCyclesTMR1 = this.nCyclesTMR2 = 0;
        this.fPenDown = this.fPenUpPending = this.fPenRead = false;
        this.bADCShift = this.nADCBits = this.bADCControl = 0;
        this.bPDDataEdge = this.wKeyBits = 0;
        this.msRTCDelta = 0;
        this.resetScreen();
    }

    /**
     * onButton(id, down)
     *
     * Input notifications for the Pilot's hardware buttons (eg, via keyboard).
     *
     * @this {PilotIO}
     * @param {string} id
     * @param {boolean} down
     */
    onButton(id, down)
    {
        let iBit = PilotIO.BUTTONS[id];
        if (iBit != undefined) {
            this.printf(MESSAGE.INPUT, "onButton(%s,%b)\n", id, down);
            this.updateButton(iBit, down);
        }
    }

    /**
     * onPen(col, row)
     *
     * Input notifications from the input surface (we configure the surface so that col and row are simply
     * the surface's own pixel coordinates).  Coordinates within the pen region are converted to digitizer
     * coordinates, which are the same as LCD coordinates, extended below the LCD to cover the silk-screen area;
     * coordinates within a button region are converted to button presses.  A col and row of -1 indicate that
     * the pen (or mouse button) was released.
     *
     * @this {PilotIO}
     * @param {number} col
     * @param {number} row
     */
    onPen(col, row)
    {
        if (col < 0 || row < 0) {
            if (this.idButtonActive) {
                this.onButton(this.idButtonActive, false);
                this.idButtonActive = null;
            }
            if (this.fPenDown) {
                this.updatePen(this.xPenCurrent, this.yPenCurrent, false);
            }
            return;
        }
        let x = Math.floor((col - this.xPenRegion) * PilotIO.DEF_SCREEN_WIDTH / this.cxPenRegion);
        let y = Math.floor((row - this.yPenRegion) * PilotIO.DEF_SCREEN_HEIGHT / this.cyPenRegion);
        if (x >= 0 && x < PilotIO.DEF_SCREEN_WIDTH && y >= 0 && y < this.cyDigitizer) {
            if (!this.idButtonActive) this.updatePen(x, y, true);
            return;
        }
        if (!this.fPenDown && !this.idButtonActive) {
            for (let id in this.buttonRegions) {
                let r = this.buttonRegions[id];
                if (col >= r[0] && col < r[0] + r[2] && row >= r[1] && row < r[1] + r[3]) {
                    this.idButtonActive = id;
                    this.onButton(id, true);
                    break;
                }
            }
        }
    }

    /**
     * onTimer()
     *
     * Called by the Time device whenever our timer fires, which we schedule for the next timer "compare" event.
     *
     * @this {PilotIO}
     */
    onTimer()
    {
        this.updateTimers();
        this.scheduleTimers();
    }

    /**
     * getByteEx(offset)
     *
     * Get one byte from the register shadow (the equivalent of CPUMem.GetByteEx()).
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getByteEx(offset)
    {
        return this.abRegs[offset];
    }

    /**
     * getWordEx(offset)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getWordEx(offset)
    {
        return this.dvRegs.getUint16(offset);
    }

    /**
     * getLongEx(offset)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getLongEx(offset)
    {
        return this.dvRegs.getInt32(offset);
    }

    /**
     * setByteEx(offset, data)
     *
     * Set one byte in the register shadow (the equivalent of CPUMem.SetByteEx()).
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setByteEx(offset, data)
    {
        this.abRegs[offset] = data;
    }

    /**
     * setWordEx(offset, data)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setWordEx(offset, data)
    {
        this.dvRegs.setUint16(offset, data & 0xffff);
    }

    /**
     * setLongEx(offset, data)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setLongEx(offset, data)
    {
        this.dvRegs.setInt32(offset, data|0);
    }

    /**
     * readDirect(offset)
     *
     * Overrides the Memory interface used by the Debugger, so that it can examine registers without side-effects.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    readDirect(offset)
    {
        return this.getByteEx(offset);
    }

    /**
     * writeDirect(offset, data)
     *
     * Overrides the Memory interface used by the Debugger, so that it can modify registers without side-effects.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    writeDirect(offset, data)
    {
        this.setByteEx(offset, data);
    }

    /**
     * isLCDReg(offset)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {boolean} (true if the offset is within the LCD controller register set)
     */
    isLCDReg(offset)
    {
        return offset >= PilotIO.LCDREGS_OFFSET && offset < PilotIO.LCDREGS_OFFSET + PilotIO.LCDREGS_SIZE;
    }

    /**
     * getByte(offset)
     *
     * Get one byte from the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getByte(offset)
    {
        let data = this.getByteEx(offset);
        if (!this.isLCDReg(offset)) {
            switch(offset) {
            case PilotIO.DBREG_PCDATA:
                if (this.fEZ) break;
                //
                // I don't know the details of the Port C Data register (PCDATA), but I do know that in PalmOS 3.3,
                // in a routine called PrvLowBatteryShutdownNow, if it doesn't see bit 4 (value 0x10) set in PCDATA,
                // then it wants to go to sleep (ie, TRAP HwrSleep).  Let's avoid that for now.  ;-) -JP
                //
                data |= 0x10;
                this.setByteEx(offset, data);
                break;
            case PilotIO.DBREG_PFDATA:
                if (!this.fEZ) break;
                //
                // When the Palm IIIc's PalmOS 3.5 ROM wakes the display, it turns on the LCD power (bit 5 of PFDATA)
                // and then waits for bit 0 of PFDATA to go high, so if bit 0 is an input, we make it follow bit 5.
                //
                if (!(this.getByteEx(PilotIO.DBREG_PFDIR) & 0x01)) {
                    data = (data & ~0x01) | ((data >> 5) & 0x01);
                }
                break;
            case PilotIO.DBREG_PDDATA:
                if (!this.fEZ) break;
                //
                // Similarly, in the Palm IIIc's PalmOS 3.5 ROM, PrvLowBatteryShutdownNow puts the device to sleep if
                // it doesn't see bit 7 (value 0x80) set in PDDATA, so we report that the battery is fine.  Bits 0-3
                // report the state of the key matrix columns (see getKeyColumns()).
                //
                data = (data & 0x70) | 0x80 | this.getKeyColumns(this.getByteEx(PilotIO.DBREG_PCDIR) & ~this.getByteEx(PilotIO.DBREG_PCDATA));
                break;
            }
        }
        this.printf(MESSAGE.PORTS, "getByte(%#06x): %#04x\n", offset, data);
        return data;
    }

    /**
     * getWord(offset)
     *
     * Get one word from the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getWord(offset)
    {
        let data = this.getWordEx(offset);
        if (!this.isLCDReg(offset)) {
            switch(offset) {
            case PilotIO.DBREG_PLLFSR:
                data ^= PilotIO.PLLFSR_CLK32;
                this.setWordEx(offset, data);
                break;

            case PilotIO.DBREG_TCTL1:
            case PilotIO.DBREG_TPRER1:
            case PilotIO.DBREG_TCMP1:
            case PilotIO.DBREG_TCR1:
            case PilotIO.DBREG_TCN1:
                this.updateTimers();
                data = this.awTMR1[(offset - PilotIO.DBREG_TCTL1) >> 1];
                break;

            case PilotIO.DBREG_TSTAT1:
                this.updateTimers();
                data = this.awTMR1[PilotIO.TSTAT];
                this.awTMR1[PilotIO.TSTAT_LASTREAD] |= data;
                break;

            case PilotIO.DBREG_TCTL2:
            case PilotIO.DBREG_TPRER2:
            case PilotIO.DBREG_TCMP2:
            case PilotIO.DBREG_TCR2:
            case PilotIO.DBREG_TCN2:
                this.updateTimers();
                data = this.awTMR2[(offset - PilotIO.DBREG_TCTL2) >> 1];
                break;

            case PilotIO.DBREG_TSTAT2:
                this.updateTimers();
                data = this.awTMR2[PilotIO.TSTAT];
                this.awTMR2[PilotIO.TSTAT_LASTREAD] |= data;
                break;

            case PilotIO.DBREG_SPIMDATA:
                if (this.fPenUpPending) {
                    this.fPenUpPending = false;
                    this.updateInterrupts(PilotIO.IMR_PEN, 0, false);
                }
                break;

            case PilotIO.DBREG_SPIMCONT:
                if (data & PilotIO.SPIMCONT_XCH) {
                    //
                    // BUGBUG: The 3.5 ROM gets stuck in PrvSetBacklightController if we don't clear this bit;
                    // we really need to understand how this controller works, and only clear SPIMCONT_XCH as appropriate -JP
                    //
                    data &= ~PilotIO.SPIMCONT_XCH;
                    this.setWordEx(offset, data);
                }
                break;
            }
        }
        this.printf(MESSAGE.PORTS, "getWord(%#06x): %#06x\n", offset, data);
        return data;
    }

    /**
     * getLong(offset)
     *
     * Get one long from the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getLong(offset)
    {
        let data = this.getLongEx(offset);
        if (!this.isLCDReg(offset)) {
            switch(offset) {
            case PilotIO.DBREG_RHMSR: {
                let date = new Date(Date.now() + this.msRTCDelta);
                data = (date.getHours() << PilotIO.RHMSR_HOURS_SHIFT) | (date.getMinutes() << PilotIO.RHMSR_MINUTES_SHIFT) | (date.getSeconds() << PilotIO.RHMSR_SECONDS_SHIFT);
                this.setLongEx(offset, data);       // shadow it
                break;
            }
            }
        }
        this.printf(MESSAGE.PORTS, "getLong(%#06x): %#010x\n", offset, data);
        return data;
    }

    /**
     * setByte(offset, data)
     *
     * Set one byte in the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setByte(offset, data)
    {
        let bPrev = this.getByteEx(offset);
        this.printf(MESSAGE.PORTS, "setByte(%#06x,%#04x)\n", offset, data);

        if (this.isLCDReg(offset)) {
            this.setByteEx(offset, data);
            if (offset - PilotIO.LCDREGS_OFFSET == PilotIO.LCDREG_CKCON) {
                if ((bPrev & PilotIO.CKCON_LCDON) != (data & PilotIO.CKCON_LCDON)) {
                    this.resetScreen();
                }
            }
            return;
        }

        switch (offset) {
        case PilotIO.DBREG_PDDATA:
            //
            // Writes to Port D Data clear the corresponding edge-triggered button interrupts (on the MC68EZ328 too,
            // where this is the only way to clear edge-triggered INT0-3 interrupts), and on the MC68328, since that
            // data must not propagate to PDDATA, we return now.
            //
            this.bPDDataEdge &= ~data;
            this.updateButtonInterrupts();
            if (this.fEZ) break;
            return;
        }

        this.setByteEx(offset, data);

        switch (offset) {
        case PilotIO.DBREG_IMR:
        case PilotIO.DBREG_IMR+1:
        case PilotIO.DBREG_IMR+2:
        case PilotIO.DBREG_IMR+3:
            this.updateInterrupts(0, 0, false);
            break;

        case PilotIO.DBREG_PDIRQEN:
            this.updateButtonInterrupts();
            break;

        case PilotIO.DBREG_PDIRQEDGE:
            if (this.fEZ) {
                //
                // If any INT0-3 pins become edge-sensitive while active (eg, when KeyWake re-enables edge-sensitive
                // key interrupts while the key that woke the device is still down), the edge detector sees an edge.
                // PalmOS relies on that, so that KeyHandleInterrupt can "swallow" the key press that woke the device.
                //
                let bRows = this.getByteEx(PilotIO.DBREG_PCDIR) & ~this.getByteEx(PilotIO.DBREG_PCDATA);
                this.bPDDataEdge |= (data & ~bPrev) & this.getKeyColumns(bRows);
                this.updateButtonInterrupts();
            }
            break;

        case PilotIO.DBREG_PCDIR:
        case PilotIO.DBREG_PCDATA:
        case PilotIO.DBREG_PDKBEN:
            if (this.fEZ) this.updateButtonInterrupts();
            break;

        case PilotIO.DBREG_PFDATA:
            if ((bPrev & PilotIO.PFDATA_LCDENABLE) != (data & PilotIO.PFDATA_LCDENABLE)) {
                this.resetScreen();
            }
            break;
        }
    }

    /**
     * setWord(offset, data)
     *
     * Set one word in the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setWord(offset, data)
    {
        this.printf(MESSAGE.PORTS, "setWord(%#06x,%#06x)\n", offset, data);

        if (this.isLCDReg(offset)) {
            this.setWordEx(offset, data);
            return;
        }

        switch(offset) {
        case PilotIO.DBREG_IMR:
        case PilotIO.DBREG_IMR+2:
            this.setWordEx(offset, data);
            this.updateInterrupts(0, 0, false);
            return;             // return, memory already updated

        case PilotIO.DBREG_ISR:
            this.clearEdgeInterrupts(data << 16);
            return;             // return, memory already updated

        case PilotIO.DBREG_ISR+2:
            return;             // no writable bits we have to pay attention to in ISR+2

        case PilotIO.DBREG_TCTL1:
        case PilotIO.DBREG_TPRER1:
        case PilotIO.DBREG_TCMP1:
            this.updateTimers();
            this.awTMR1[(offset - PilotIO.DBREG_TCTL1) >> 1] = data & 0xffff;
            this.scheduleTimers();
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_TCR1:
        case PilotIO.DBREG_TCN1:
            data = this.awTMR1[(offset - PilotIO.DBREG_TCTL1) >> 1];
            break;              // these timer registers are read-only

        case PilotIO.DBREG_TSTAT1:
            data = this.awTMR1[PilotIO.TSTAT] & (data | ~this.awTMR1[PilotIO.TSTAT_LASTREAD]);
            this.awTMR1[PilotIO.TSTAT_LASTREAD] = 0;
            if (!(data & PilotIO.TSTAT_COMP)) this.updateInterrupts(this.lTMR1Bit, 0, false);
            this.awTMR1[PilotIO.TSTAT] = data & 0xffff;
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_TCTL2:
        case PilotIO.DBREG_TPRER2:
        case PilotIO.DBREG_TCMP2:
            this.updateTimers();
            this.awTMR2[(offset - PilotIO.DBREG_TCTL2) >> 1] = data & 0xffff;
            this.scheduleTimers();
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_TCR2:
        case PilotIO.DBREG_TCN2:
            data = this.awTMR2[(offset - PilotIO.DBREG_TCTL2) >> 1];
            break;              // these timer registers are read-only

        case PilotIO.DBREG_TSTAT2:
            data = this.awTMR2[PilotIO.TSTAT] & (data | ~this.awTMR2[PilotIO.TSTAT_LASTREAD]);
            this.awTMR2[PilotIO.TSTAT_LASTREAD] = 0;
            if (!(data & PilotIO.TSTAT_COMP)) this.updateInterrupts(PilotIO.IMR_TMR2, 0, false);
            this.awTMR2[PilotIO.TSTAT] = data & 0xffff;
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_SPIMCONT:
            if (this.fEZ) {
                if (data & PilotIO.SPIMCONT_XCH) {
                    data = (data & ~PilotIO.SPIMCONT_XCH) | PilotIO.SPIMCONT_SPIMIRQ;
                    this.setWordEx(PilotIO.DBREG_SPIMDATA, this.exchangeADC(this.getWordEx(PilotIO.DBREG_SPIMDATA), (data & PilotIO.SPIMCONT_BITCOUNT) + 1));
                }
                break;
            }
            if ((data & PilotIO.SPIMCONT_XCH) && (data & PilotIO.SPIMCONT_IRQEN)) {
                //
                // The caller is wanting to exchange data, so set SPIMIRQ to indicate exchange complete
                // (data will be deposited in SPIMDATA); Port F Data apparently specifies the type of data requested.
                //
                data |= PilotIO.SPIMCONT_SPIMIRQ;
                data &= ~PilotIO.SPIMCONT_XCH;
                let spimdata = -1;
                switch (this.getByteEx(PilotIO.DBREG_PFDATA) & 0x0F) {
                case 0x6:
                    spimdata = (0xff - this.xPenCurrent) * 2;
                    this.fPenRead = true;
                    break;
                case 0x9:
                    spimdata = (0xff - this.yPenCurrent) * 2;
                    this.fPenRead = true;
                    break;
                }
                if (spimdata >= 0) this.setWordEx(PilotIO.DBREG_SPIMDATA, spimdata);
            }
            break;
        }

        this.setWordEx(offset, data);
    }

    /**
     * exchangeADC(dataOut, nBits)
     *
     * On EZ-based devices (eg, the Palm IIIc), the digitizer and battery voltage are read using a Burr-Brown ADS7843
     * A/D converter attached to the SPI master.  PalmOS (see the HAL routine at 0x10c76c70 in the Palm IIIc ROM)
     * sends an 8-bit control byte (as a 7-bit exchange followed by a 1-bit exchange), and then performs a 16-bit
     * exchange to read the 12-bit result, which it shifts right 3 bits.
     *
     * The control byte contains a start bit (bit 7), a channel select (bits 6-4), a mode bit (bit 3), a
     * single-ended/differential bit (bit 2), and power-down bits (bits 1-0).
     *
     * @this {PilotIO}
     * @param {number} dataOut (data being shifted out to the ADC)
     * @param {number} nBits (number of bits being exchanged)
     * @returns {number} (data shifted in from the ADC)
     */
    exchangeADC(dataOut, nBits)
    {
        let dataIn = 0;
        if (nBits >= 16) {
            let value = 0;
            switch((this.bADCControl >> 4) & 0x7) {
            case PilotIO.ADC_CHANNEL_X:
                value = this.getADCValue(this.xPenCurrent, PilotIO.DEF_SCREEN_WIDTH, this.aADCRangeX);
                this.fPenRead = true;
                break;
            case PilotIO.ADC_CHANNEL_Y:
                value = this.getADCValue(this.yPenCurrent, this.cyDigitizer, this.aADCRangeY);
                this.fPenRead = true;
                break;
            case PilotIO.ADC_CHANNEL_BATTERY:
                value = PilotIO.ADC_BATTERY_GOOD;
                break;
            }
            dataIn = (value << 3) & 0xffff;
            this.nADCBits = 0;
        } else {
            this.bADCShift = ((this.bADCShift << nBits) | (dataOut & ((1 << nBits) - 1))) & 0xff;
            this.nADCBits += nBits;
            if (this.nADCBits >= 8) {
                this.bADCControl = this.bADCShift;
                this.nADCBits = 0;
            }
        }
        this.printf(MESSAGE.PORTS, "exchangeADC(%#06x,%d): control=%#04x data=%#06x\n", dataOut, nBits, this.bADCControl, dataIn);
        return dataIn;
    }

    /**
     * getADCValue(pos, size, range)
     *
     * Converts a pen coordinate into a 12-bit A/D converter value, by linearly mapping the coordinate range
     * (0 to size) onto the given range of A/D values (which may be decreasing, to indicate an inverted axis).
     *
     * @this {PilotIO}
     * @param {number} pos
     * @param {number} size
     * @param {Array.<number>} range (eg, [0, 0xfff])
     * @returns {number}
     */
    getADCValue(pos, size, range)
    {
        return Math.round(range[0] + (range[1] - range[0]) * pos / size) & 0xfff;
    }

    /**
     * setLong(offset, data)
     *
     * Set one long in the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setLong(offset, data)
    {
        this.printf(MESSAGE.PORTS, "setLong(%#06x,%#010x)\n", offset, data);

        if (this.isLCDReg(offset)) {
            this.setLongEx(offset, data);
            return;
        }

        switch(offset) {
        case PilotIO.DBREG_IMR:
            this.setLongEx(offset, data);
            this.updateInterrupts(0, 0, false);
            return;             // return, memory already updated

        case PilotIO.DBREG_ISR:
            this.clearEdgeInterrupts(data);
            return;             // return, memory already updated

        case PilotIO.DBREG_RHMSR: {
            let date = new Date(Date.now() + this.msRTCDelta);
            date.setHours((data & PilotIO.RHMSR_HOURS) >> PilotIO.RHMSR_HOURS_SHIFT, (data & PilotIO.RHMSR_MINUTES) >> PilotIO.RHMSR_MINUTES_SHIFT, (data & PilotIO.RHMSR_SECONDS) >> PilotIO.RHMSR_SECONDS_SHIFT);
            this.msRTCDelta = date.getTime() - Date.now();
            break;
        }
        }

        this.setLongEx(offset, data);
    }

    /**
     * clearEdgeInterrupts(lData)
     *
     * Writing ones to ISR bits corresponding to edge-triggered interrupts clears them.
     *
     * @this {PilotIO}
     * @param {number} lData (the bits written to ISR)
     */
    clearEdgeInterrupts(lData)
    {
        let wICR = this.getWordEx(PilotIO.DBREG_ICR);
        let lIPR = this.getLongEx(PilotIO.DBREG_IPR);
        let lIPRNew = lIPR;
        if ((wICR & PilotIO.ICR_ET1) && (lData & PilotIO.IMR_IRQ1)) lIPRNew &= ~PilotIO.IMR_IRQ1;
        if ((wICR & PilotIO.ICR_ET2) && (lData & PilotIO.IMR_IRQ2)) lIPRNew &= ~PilotIO.IMR_IRQ2;
        if ((wICR & PilotIO.ICR_ET3) && (lData & PilotIO.IMR_IRQ3)) lIPRNew &= ~PilotIO.IMR_IRQ3;
        if ((wICR & PilotIO.ICR_ET6) && (lData & PilotIO.IMR_IRQ6)) lIPRNew &= ~PilotIO.IMR_IRQ6;
        if (lData & PilotIO.IMR_IRQ7) lIPRNew &= ~PilotIO.IMR_IRQ7;
        if (lIPRNew != lIPR) {
            this.setLongEx(PilotIO.DBREG_IPR, lIPRNew);
            this.updateInterrupts(0, 0, false);
        }
    }

    /**
     * updateButton(iBit, fDown)
     *
     * The Port D Data register contains bits that map to the hardware button interrupt lines (see PilotIO.BUTTONS).
     *
     * @this {PilotIO}
     * @param {number} iBit
     * @param {boolean} fDown
     */
    updateButton(iBit, fDown)
    {
        if (this.fEZ) {
            let iKey = this.aKeyMatrix[iBit];
            if (iKey == undefined || iKey < 0) return;
            let wKeyBits = this.wKeyBits;
            this.wKeyBits = fDown? (wKeyBits | (1 << iKey)) : (wKeyBits & ~(1 << iKey));
            //
            // An edge is latched only if the key's column (ie, the corresponding INT0-3 pin) is edge-sensitive.
            //
            let bCol = 1 << (iKey & 0x3);
            if (fDown && wKeyBits != this.wKeyBits && (this.getByteEx(PilotIO.DBREG_PDIRQEDGE) & bCol)) {
                this.bPDDataEdge |= bCol;
            }
            this.updateButtonInterrupts();
            return;
        }
        let bMask = 1 << iBit;
        let bPDData = this.getByteEx(PilotIO.DBREG_PDDATA);
        let bPDDataOrig = bPDData;
        if (fDown) {
            bPDData |= bMask;
        } else {
            bPDData &= ~bMask;
        }
        if (bPDData != bPDDataOrig) {
            this.bPDDataEdge |= bMask;
            this.setByteEx(PilotIO.DBREG_PDDATA, bPDData);
            this.updateButtonInterrupts();
        }
    }

    /**
     * updateButtonInterrupts()
     *
     * @this {PilotIO}
     */
    updateButtonInterrupts()
    {
        if (this.fEZ) {
            //
            // On the MC68EZ328, Port D bits 0-3 are INT0-3, which are presented to the interrupt controller only if
            // enabled in PDIRQEN, and which are either level-sensitive or (if enabled in PDIRQEDGE) edge-sensitive.
            //
            let bIQEN = this.getByteEx(PilotIO.DBREG_PDIRQEN) & 0xf;
            let bIQEG = this.getByteEx(PilotIO.DBREG_PDIRQEDGE) & 0xf;
            let bInts = ((this.getKeyColumns(PilotIO.KEY_ROWS) & ~bIQEG) | (this.bPDDataEdge & bIQEG)) & bIQEN;
            //
            // In addition, the keyboard (KB) interrupt is a level-sensitive interrupt that's asserted whenever any of the
            // Port D pins enabled in PDKBEN is low; PalmOS uses it to wake from sleep (see KeySleep in the Palm IIIc ROM),
            // after driving the rows of the key matrix low.
            //
            let bRows = this.getByteEx(PilotIO.DBREG_PCDIR) & ~this.getByteEx(PilotIO.DBREG_PCDATA);
            let lKB = (this.getKeyColumns(bRows) & this.getByteEx(PilotIO.DBREG_PDKBEN) & 0xf)? PilotIO.IMR_KBD : 0;
            this.updateInterrupts((bInts << 8) | lKB, PilotIO.IMR_INT0 | PilotIO.IMR_INT1 | PilotIO.IMR_INT2 | PilotIO.IMR_INT3 | PilotIO.IMR_KBD, true);
            return;
        }
        let bPDData = this.getByteEx(PilotIO.DBREG_PDDATA);
        let bPDIRQEdge = this.getByteEx(PilotIO.DBREG_PDIRQEDGE);
        let bPDIRQEn = this.getByteEx(PilotIO.DBREG_PDIRQEN);
        let lMask = PilotIO.IMR_INT0 | PilotIO.IMR_INT1 | PilotIO.IMR_INT2 | PilotIO.IMR_INT3 | PilotIO.IMR_INT4 | PilotIO.IMR_INT5 | PilotIO.IMR_INT6 | PilotIO.IMR_INT7;
        this.updateInterrupts(((this.bPDDataEdge & bPDIRQEdge) | (bPDData & ~bPDIRQEdge) & bPDIRQEn) << 8, lMask, true);
    }

    /**
     * getKeyColumns(bRows)
     *
     * On EZ-based devices (eg, the Palm IIIc), the hardware buttons are arranged in a matrix, where each row is
     * selected by driving one of Port C bits 0-2 low, and the columns are read from Port D bits 0-3 (which are
     * inverted by PDPOL, so pressed keys read as 1).  The keys in row N are recorded in bits (N*4) through (N*4)+3 of
     * wKeyBits, and the device's 'keyMatrix' config property determines which bit each button corresponds to.
     *
     * @this {PilotIO}
     * @param {number} bRows (bits 0-2 indicate which rows are selected)
     * @returns {number} (bits 0-3 indicate which columns contain a pressed key in the selected rows)
     */
    getKeyColumns(bRows)
    {
        let bCols = 0;
        for (let iRow = 0; iRow < 3; iRow++) {
            if (bRows & (1 << iRow)) bCols |= (this.wKeyBits >> (iRow * 4)) & 0xf;
        }
        return bCols;
    }

    /**
     * updatePen(x, y, fDown)
     *
     * @this {PilotIO}
     * @param {number} x
     * @param {number} y
     * @param {boolean} fDown
     */
    updatePen(x, y, fDown)
    {
        this.xPenCurrent = x;
        this.yPenCurrent = y;
        if (!this.fPenDown && fDown) {
            this.fPenDown = true;
            this.updateInterrupts(PilotIO.IMR_PEN, 0, true);
        }
        else if (this.fPenDown && !fDown) {
            this.fPenDown = false;
            //
            // In an attempt to avoid missing pen activity due to the emulator being unexpectedly busy, I don't
            // clear IPR_PEN if fPenRead is false.  I wait until the emulator has started reading pen data and clear
            // the interrupt at THAT time.
            //
            if (!this.fPenRead) {
                this.fPenUpPending = true;
            } else {
                //
                // BUGBUG: I suspect we should really be clearing PEN interrupts when the handler updates the IPR instead.
                // The problem with clearing them here is that the emulator could miss the transition altogether, and I seriously
                // doubt the real hardware clears the interrupt status on a "pen up" condition - but maybe it does.... -JP
                //
                this.updateInterrupts(PilotIO.IMR_PEN, 0, false);
            }
        }
        this.fPenRead = false;
    }

    /**
     * updateTimers()
     *
     * Update the high-frequency timers, by advancing them by the number of CPU cycles that have elapsed since
     * the last update.  The Java implementation estimated the number of elapsed cycles, using a combination of
     * opcode counts and elapsed real-world time, whereas we have an accurate CPU cycle count.
     *
     * @this {PilotIO}
     */
    updateTimers()
    {
        let nCycles = this.time.getCycles();
        let nCyclesAdd = nCycles - this.nCyclesTimers;
        this.nCyclesTimers = nCycles;
        if (nCyclesAdd > 0) {
            this.nCyclesTMR1 = this.updateTimer(this.awTMR1, this.nCyclesTMR1 + nCyclesAdd, this.lTMR1Bit);
            this.nCyclesTMR2 = this.updateTimer(this.awTMR2, this.nCyclesTMR2 + nCyclesAdd, PilotIO.IMR_TMR2);
        }
    }

    /**
     * getTimerDivisor(awTMR)
     *
     * Returns the number of CPU cycles per timer tick, or 0 if the timer isn't counting.
     *
     * The Java implementation always assumed that the input clock was the system clock; we also support
     * the system clock divided by 16 and the 32Khz clock.
     *
     * @this {PilotIO}
     * @param {Array.<number>} awTMR
     * @returns {number}
     */
    getTimerDivisor(awTMR)
    {
        let nDivisor = 0;
        if (awTMR[PilotIO.TCTL] & PilotIO.TCTL_TEN) {
            switch(awTMR[PilotIO.TCTL] & PilotIO.TCTL_CLKSOURCE) {
            case PilotIO.CLKSOURCE_SYSTEMCLOCK:
                nDivisor = 1;
                break;
            case PilotIO.CLKSOURCE_SYSTEMCLOCKDIV16:
                nDivisor = 16;
                break;
            case PilotIO.CLKSOURCE_32OR38KHZ:
            case PilotIO.CLKSOURCE_32OR38KHZ + 0x2:
            case PilotIO.CLKSOURCE_32OR38KHZ + 0x4:
            case PilotIO.CLKSOURCE_32OR38KHZ + 0x6:
                nDivisor = this.time.nCyclesPerSecond / 32768;
                break;
            }
            nDivisor *= (awTMR[PilotIO.TPRER] & PilotIO.TPRER_PRESCALER) + 1;
        }
        return nDivisor;
    }

    /**
     * updateTimer(awTMR, nCycles, lBit)
     *
     * Update the specified high-frequency timer, by converting the number of cycles accumulated since the
     * last call into timer ticks.
     *
     * @this {PilotIO}
     * @param {Array.<number>} awTMR
     * @param {number} nCycles
     * @param {number} lBit
     * @returns {number} (number of cycles not yet converted into ticks)
     */
    updateTimer(awTMR, nCycles, lBit)
    {
        let nDivisor = this.getTimerDivisor(awTMR);
        if (!nDivisor) return 0;
        let nTicks = Math.floor(nCycles / nDivisor);
        nCycles -= nTicks * nDivisor;
        if (nTicks) {
            let tcn = awTMR[PilotIO.TCN];
            let tcmp = awTMR[PilotIO.TCMP];
            let fCompare = false;
            if (!(awTMR[PilotIO.TCTL] & PilotIO.TCTL_FRR)) {
                //
                // In "restart" mode, the counter is reset to zero (and resumes counting) on every "compare event".
                //
                tcn += nTicks;
                if (tcn >= tcmp) {
                    fCompare = true;
                    tcn = tcmp? (tcn - tcmp) % tcmp : 0;
                }
            } else {
                //
                // In "free run" mode, the counter simply wraps around, and a "compare event" occurs whenever it passes TCMP.
                //
                let ticksToCompare = ((tcmp - tcn) & 0xffff) || 0x10000;
                if (nTicks >= ticksToCompare) fCompare = true;
                tcn = (tcn + nTicks) & 0xffff;
            }
            awTMR[PilotIO.TCN] = tcn;
            if (fCompare) {
                awTMR[PilotIO.TSTAT] |= PilotIO.TSTAT_COMP;
                if (awTMR[PilotIO.TCTL] & PilotIO.TCTL_IRQEN) {
                    this.updateInterrupts(lBit, 0, true);
                }
            }
        }
        return nCycles;
    }

    /**
     * scheduleTimers()
     *
     * Arm our Time timer to fire at the next timer "compare" event, so that timer interrupts are generated on time.
     *
     * @this {PilotIO}
     */
    scheduleTimers()
    {
        let nCyclesNext = -1;
        let awTMRs = [this.awTMR1, this.awTMR2];
        let anCycles = [this.nCyclesTMR1, this.nCyclesTMR2];
        for (let i = 0; i < awTMRs.length; i++) {
            let awTMR = awTMRs[i];
            let nDivisor = this.getTimerDivisor(awTMR);
            if (nDivisor && (awTMR[PilotIO.TCTL] & PilotIO.TCTL_IRQEN)) {
                let tcn = awTMR[PilotIO.TCN], tcmp = awTMR[PilotIO.TCMP];
                let nTicks = (awTMR[PilotIO.TCTL] & PilotIO.TCTL_FRR)? (((tcmp - tcn) & 0xffff) || 0x10000) : Math.max(tcmp - tcn, 1);
                let nCycles = Math.max(nTicks * nDivisor - anCycles[i], 1);
                if (nCyclesNext < 0 || nCycles < nCyclesNext) nCyclesNext = nCycles;
            }
        }
        if (nCyclesNext > 0) {
            this.time.setTimer(this.timerTMR, nCyclesNext / this.time.getCyclesPerMS(1), true);
        }
    }

    /**
     * updateInterrupts(lBits, lMask, fSet)
     *
     * Update the Interrupt Pending Register (IPR), and then propagate any pending interrupts that are NOT
     * masked to the Interrupt Status Register (ISR).  If this results in a change in the ISR, then we need
     * to tell the CPU to take a look, and see if the flags will allow an interrupt to occur.
     *
     * @this {PilotIO}
     * @param {number} lBits
     * @param {number} lMask
     * @param {boolean} fSet
     */
    updateInterrupts(lBits, lMask, fSet)
    {
        // Get the current IPR and compute a new IPR
        let lIPR = this.getLongEx(PilotIO.DBREG_IPR);
        let lIPRNew = fSet? ((lIPR & ~lMask) | lBits) : ((lIPR & ~lMask) & ~lBits);

        // Get the current IMR and compute a new ISR, using the new IPR
        let lIMR = this.getLongEx(PilotIO.DBREG_IMR);
        let lISR = this.getLongEx(PilotIO.DBREG_ISR);
        let lISRNew = lIPRNew & ~lIMR;

        // If the new IPR differs from the current IPR, update it
        if (lIPR != lIPRNew) {
            this.setLongEx(PilotIO.DBREG_IPR, lIPRNew);
        }

        // If the new ISR differs from the current ISR, update it, and indicate that interrupt status has changed
        if (lISR != lISRNew) {
            this.setLongEx(PilotIO.DBREG_ISR, lISRNew);
            if (lISRNew) {
                this.cpu.fCPU |= CPU68K.CPU_CHECKINTS;
            }
        }
    }

    /**
     * checkInterrupts(fInitiate)
     *
     * Called from the CPU whenever it notices CPU_CHECKINTS has been set.  Our job is to determine if an interrupt
     * is currently being asserted, and whether or not it is greater than the CPU's current IPM (Interrupt Priority Mask).
     *
     * @this {PilotIO}
     * @param {boolean} fInitiate
     * @returns {boolean} (true if an interrupt is ready to initiate, or has been if fInitiate is true)
     */
    checkInterrupts(fInitiate)
    {
        let cpu = this.cpu;

        //
        // BUGBUG: The following code is a hack to prevent simulating interrupts when the current stack is
        // dangerously close to the current task's interrupt stack.
        //
        // I've noticed that when booting PalmOS 3.3, the hardware interrupt service routine at 0x10c7cba2 loads
        // A0 from 0x11e (let's call location 0x11e the "current task pointer"), and then switches to a new
        // stack (let's call it the current task's "interrupt stack"), whose address is stored at A0+0x10.  In the
        // case of PalmOS 3.3, the current (first?) task is usually 0xe7fe, its application stack is usually 0xedf6
        // (set by 0x10c7c804), and its interrupt stack is usually 0xeafe.  Notice that the amount of room between
        // the stacks is surprisingly small: 0x2f8.  Set a breakpoint at 0x10c87a32, and when you hit it, set another
        // breakpoint at 0x10c7c7a2 -- at this second location, you will eventually see the stack (A7) drop as low
        // as 0xeb12.  At that instant, the stack is too low to allow an interrupt to occur, because the first thing the
        // interrupt service routine at 0x10c7cba2 will do is save a bunch of client registers, thereby overflowing
        // the application stack and overwriting the interrupt stack.  0x10c7c7a2 is not an arbitrary address
        // either: it's the very next instruction after the IPM (Interrupt Priority Mask) in the CPU's flags has
        // been reset to zero, clearing the way for any pending interrupt to be acknowledged.
        //
        // I've repro'ed the same thing in Palm's own emulator.  All the stacks are 0x16 bytes higher, but their
        // relative positions are identical, so the only reason their emulator (and presumably real devices) don't
        // crash is fortuitous timing with respect to TMR2.  Even if I'm simulating timer interrupts at a slightly
        // different/incorrect rate, PalmOS clearly has a window where their application stack is too small.
        //
        if (cpu.regA[7] <= 0xeb12+0x14 && cpu.regA[7] > 0xeafe) {
            return false;
        }

        if (cpu.fCPU & CPU68K.CPU_CHECKINTS) {
            let iLvlHighest = 0;
            let lISR = this.getLongEx(PilotIO.DBREG_ISR);
            for (let iBit = 0, lMask = 1; lISR && iBit < this.abIMRLvl.length; iBit++, lMask <<= 1) {
                if (lISR & lMask) {
                    if (iLvlHighest < this.abIMRLvl[iBit]) {
                        iLvlHighest = this.abIMRLvl[iBit];
                    }
                    lISR &= ~lMask;
                }
            }
            if (iLvlHighest > cpu.getFlagIPM()) {
                if (fInitiate) {
                    let iVector = (this.getByteEx(PilotIO.DBREG_IVR) & 0xff) + iLvlHighest;
                    this.printf(MESSAGE.INT, "interrupt level %d (vector %#04x)\n", iLvlHighest, iVector);
                    cpu.callException(iVector);
                    cpu.setFlagIPM(iLvlHighest);    // we can't change the IPM until callException() had a chance to save the current IPM on the stack
                    cpu.fCPU &= ~CPU68K.CPU_CHECKINTS;
                }
                return true;
            }
            cpu.fCPU &= ~CPU68K.CPU_CHECKINTS;
        }
        return false;
    }

    /**
     * getLCDStatus()
     *
     * Return true if the LCD controller is enabled and the LCD is on.
     *
     * @this {PilotIO}
     * @returns {boolean}
     */
    getLCDStatus()
    {
        if (!(this.getByteEx(PilotIO.DBREG_PFDATA) & PilotIO.PFDATA_LCDENABLE)) {
            return false;
        }
        if (!(this.getByteEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CKCON) & PilotIO.CKCON_LCDON)) {
            return false;
        }
        return true;
    }

    /**
     * getBufferWidth()
     *
     * Return width of screen buffer (in terms of words).
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getBufferWidth()
    {
        let cWords = this.getByteEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_LBAR);
        if (cWords & 0x1) {
            cWords++;           // BUGBUG: Why is this sometimes 9 instead of 10 for standard 1BPP operation? -JP
        }
        return cWords;
    }

    /**
     * getBufferStride()
     *
     * Return number of bytes per scanline.
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getBufferStride()
    {
        return this.getBufferWidth() * 2;
    }

    /**
     * getBPP()
     *
     * If we assume the physical screen width is a constant, then the LBAR register (which describes the number
     * of WORDS required for each scanline) can simply be multiplied by 16 (to yield the number of BITS required
     * for each scanline) and then divided by the width (to yield bits-per-pixel).
     *
     * @this {PilotIO}
     * @returns {number} (1 or 2, since DragonBall LCD controllers support only 1BPP and 2BPP)
     */
    getBPP()
    {
        let cBPP = ((this.getBufferWidth() * 16) / PilotIO.DEF_SCREEN_WIDTH)|0;
        return cBPP <= 1? 1 : 2;
    }

    /**
     * getBufferAddress()
     *
     * Return address of screen buffer.
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getBufferAddress()
    {
        return this.getLongEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_SSA);
    }

    /**
     * getGrayPalette()
     *
     * Return the 16-bit Gray Palette Mapping Register (GPMR), where bits 8-11, 12-15, 0-3, and 4-7 describe the
     * intensity of 2-bit pixel values 00, 01, 10, and 11.
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getGrayPalette()
    {
        return this.getWordEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_GPMR);
    }

    /**
     * resetScreen()
     *
     * Notify the video device (if any) that the LCD state has changed (the equivalent of Device.ResetScreen()).
     *
     * @this {PilotIO}
     */
    resetScreen()
    {
        if (this.video) this.video.resetScreen();
    }
}

/**
 * Button IDs (as used by the Input device's map) and their corresponding Port D Data register bits.
 *
 * NOTE: The Java implementation also defined BUTTON_BACKLIGHT as a pseudo-button, to logically separate the
 * backlight function of the power button from its on/off function.
 */
PilotIO.BUTTONS = {
    "power":    0,
    "up":       1,
    "down":     2,
    "datebook": 3,
    "address":  4,
    "todolist": 5,
    "memopad":  6
};

/**
 * ROM header definitions (see CPUMem.java)
 */
PilotIO.ROM_BASE            = 0x10c00000;
PilotIO.ROMHDR_HDRVER       = 0x000c;       // eg, 0x0001 (PalmOS 1.0), which implies 6-byte heap chunk headers

/**
 * PalmOS database header definitions (see pdb_file_format.txt)
 */
PilotIO.DBHDR_NAME_LEN      = 32;           // the database name is a null-terminated string at offset 0
PilotIO.DBHDR_TYPE          = 0x3c;         // eg, "appl"
PilotIO.DBHDR_SIZE          = 0x4e;         // size of the header, up to (but not including) the record list

/**
 * Temporary blocks (see allocTempBlocks()) must not extend beyond this address (or the ROM, if any).
 */
PilotIO.TEMP_LIMIT          = 0x00400000;

/**
 * List of supported DragonBall h/w registers (see p.24 of MC68328 User's Manual 12/9/97)
 */
PilotIO.DBREGS_BASE         = 0xfffff000;
PilotIO.DBREGS_SIZE         = 0x00001000;
PilotIO.DBREGS_LIMIT        = PilotIO.DBREGS_BASE + PilotIO.DBREGS_SIZE;

/**
 * System Control Register
 */
PilotIO.DBREG_SCR           = 0x000;

/**
 * Mask Revision Register
 */
PilotIO.DBREG_MRR           = 0x004;
PilotIO.DBREG_IDR           = 0x004;        // MC68EZ328 Silicon ID Register (chip ID, mask ID, and software ID)
PilotIO.EZ_CHIPID                   = 0x45;
PilotIO.EZ_MASKID                   = 0x01;

/**
 * Chip Select Base Registers
 */
PilotIO.DBREG_GRPBASEA      = 0x100;
PilotIO.DBREG_GRPBASEB      = 0x102;
PilotIO.DBREG_GRPBASEC      = 0x104;
PilotIO.DBREG_GRPBASED      = 0x106;

/**
 * Chip Select A Mask Registers
 */
PilotIO.DBREG_GRPMASKA      = 0x108;
PilotIO.DBREG_GRPMASKB      = 0x10A;
PilotIO.DBREG_GRPMASKC      = 0x10C;
PilotIO.DBREG_GRPMASKD      = 0x10E;

/**
 * Group Chip Select Option Registers
 */
PilotIO.DBREG_CSA0          = 0x110;
PilotIO.DBREG_CSA1          = 0x114;
PilotIO.DBREG_CSA2          = 0x118;
PilotIO.DBREG_CSA3          = 0x11C;
PilotIO.DBREG_CSB0          = 0x120;
PilotIO.DBREG_CSB1          = 0x124;
PilotIO.DBREG_CSB2          = 0x128;
PilotIO.DBREG_CSB3          = 0x12C;
PilotIO.DBREG_CSC0          = 0x130;
PilotIO.DBREG_CSC1          = 0x134;
PilotIO.DBREG_CSC2          = 0x138;
PilotIO.DBREG_CSC3          = 0x13C;
PilotIO.DBREG_CSD0          = 0x140;
PilotIO.DBREG_CSD1          = 0x144;
PilotIO.DBREG_CSD2          = 0x148;
PilotIO.DBREG_CSD3          = 0x14C;

PilotIO.CHIP_SELECT_DEFAULT = 0x00010006;

/**
 * PLL (Phase-Locked Loop Clock Generator) Control Register (16-bit)
 *
 * To put the CPU in "sleep mode", the simplest approach is to wait until PLLFSR_CLK32 in DBREG_PLLFSR goes high,
 * and then shut down the PLL by setting PLLCR_DISPLL in DBREG_PLLCR.  Any interrupt specified as a "wake up" interrupt
 * in DBREG_IWR can take the CPU out of "sleep mode" (true even if the interrupt is masked).  For example:
 *
 *      lea     #$fff202,A1     ; point to the Freq Sel reg.
 *      lea     #$fff200,A0     ; point to the Ctrl reg.
 *  l1: move.w  (A1),D0         ; sync to rising CLK32 edge
 *      bpl.w   l1              ; wait for CLK32 to go high
 *      bset    #3,(A0)         ; disable PLL
 *      stop    #$2000          ; stop fetching and wait for any IRQ
 *
 * It's also good practice to disable CLKO before sleeping and re-enabling after wake-up (but I'm not sure if this
 * is a software recommendation or a hardware-only issue).  There's also the potential for an external device to try to power
 * itself from the DragonBall's output pins, in which case it may be best to insure the pin(s) are in the "low state"
 * (which again may be a hardware-only issue).
 */
PilotIO.DBREG_PLLCR         = 0x200;
PilotIO.PLLCR_DISPLL                = 0x0008;       // disables PLL if set (to put the CPU in "sleep mode")
PilotIO.PLLCR_CLKEN                 = 0x0010;       // enables CLKO pin if set
PilotIO.PLLCR_SYSCLK                = 0x0700;       // sets system clock to VCO/(2^(SYSCLK+1)), or to VCO if SYSCLK >= 4
PilotIO.PLLCR_PIXCLK                = 0x3800;       // sets LCD pixel clock to VCO/(2^(PIXCLK+1)), or to VCO if PIXCLK >= 4

/**
 * PLL (Phase-Locked Loop Clock Generator) Frequency Select Register (16-bit)
 *
 * On a Pilot, PLLFSR's default value of 0x0123 is used, which means that P is 35 and Q is 1.  P and Q and used to form
 * what's called the "PLL Divisor", using the following formula:  14*(P+1) + Q+1.  So the default PLL Divisor is 506.
 * When choosing other divisors, Q must range from 1 to 14, and P must be greater than Q (which also means that not
 * all divisor values below 225 are possible).
 *
 * The PLL Divisor is used to generate the master frequency, aka system clock.  Assuming a 32.768Khz crystal, multiply that
 * by 506 to get a master frequency of 16.580608Mhz.  DragonBall documentation says 506 was chosen since it can generate standard
 * baud frequencies with an error of only 0.05% (they say an "accuracy of 0.05%" but I think they misspoke :-)).
 */
PilotIO.DBREG_PLLFSR        = 0x202;
PilotIO.PLLFSR_PCOUNT               = 0x00FF;       // P counter
PilotIO.PLLFSR_QCOUNT               = 0x0F00;       // Q counter
PilotIO.PLLFSR_PROT                 = 0x4000;       // protects P and Q counters from additional writes
PilotIO.PLLFSR_CLK32                = 0x8000;       // current state of the CLK32 signal (BUGBUG: we just toggle it -JP)

/**
 * Power Control Register (8-bit, but could also be accessed as a word at 0x206, where bits 8-15 are reserved)
 */
PilotIO.DBREG_PCTLR         = 0x207;
PilotIO.PCTLR_WIDTH                 = 0x1f;         // # of 1/31 the clock is bursted
PilotIO.PCTLR_STOP                  = 0x40;         // immediately enters power-saving mode ("doze mode")
PilotIO.PCTLR_PCEN                  = 0x80;         // enables power controller (disabled by interrupts)

/**
 * Interrupt Vector Register (8-bit)
 */
PilotIO.DBREG_IVR           = 0x300;

/**
 * Interrupt levels (7 is highest priority, 1 is lowest).  The interrupt vector
 * number for an interrupt is formed by the low 3 bits of the level and the high 5 bits
 * of the IVR (the low 3 bits of the IVR are always zero).  If an interrupt occurs
 * before the IVR has been programmed, vector number 0xf is generated by default.
 * The vector number is then multiplied by 4 to form the corresponding vector address (ie,
 * there is no vector base register (VBR); the 68000's vector base is hard-coded to zero).
 */
PilotIO.INTLVL_IRQ7             = 7;
PilotIO.INTLVL_SPIS             = 6;        // Serial Peripheral Interface Slave
PilotIO.INTLVL_TMR1             = 6;
PilotIO.INTLVL_IRQ6             = 6;
PilotIO.INTLVL_PEN              = 5;
PilotIO.INTLVL_SPIM             = 4;        // Serial Peripheral Interface Master
PilotIO.INTLVL_TMR2             = 4;
PilotIO.INTLVL_UART             = 4;
PilotIO.INTLVL_WDT              = 4;        // Watchdog Timer
PilotIO.INTLVL_RTC              = 4;
PilotIO.INTLVL_KBD              = 4;
PilotIO.INTLVL_PWM              = 4;
PilotIO.INTLVL_INT              = 4;
PilotIO.INTLVL_IRQ3             = 3;
PilotIO.INTLVL_IRQ2             = 2;
PilotIO.INTLVL_IRQ1             = 1;

PilotIO.abIMRLvl = [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 3, 6, 5, 6, 6, 7];

/**
 * Interrupt levels for each IMR/ISR/IPR bit on the MC68EZ328 (see section 6 of the MC68EZ328 User's Manual)
 */
PilotIO.abIMRLvlEZ = [4, 6, 4, 4, 4, 0, 4, 6, 4, 4, 4, 4, 0, 0, 0, 0, 1, 2, 3, 6, 5, 0, 4, 7];

/**
 * Supported DragonBall chips (see the 'chip' property of the PilotIO config)
 */
PilotIO.CHIP = {
    DB:     "MC68328",
    EZ:     "MC68EZ328"
};

/**
 * Interrupt Control Register (16-bit)
 */
PilotIO.DBREG_ICR           = 0x302;
PilotIO.ICR_ET6                     = 0x0100;
PilotIO.ICR_ET3                     = 0x0200;
PilotIO.ICR_ET2                     = 0x0400;
PilotIO.ICR_ET1                     = 0x0800;

/**
 * Interrupt Mask Register (32-bit)
 */
PilotIO.DBREG_IMR           = 0x304;
PilotIO.IMR_SPIM                    = 0x00000001;
PilotIO.IMR_TMR2                    = 0x00000002;
PilotIO.IMR_UART                    = 0x00000004;
PilotIO.IMR_WDT                     = 0x00000008;
PilotIO.IMR_RTC                     = 0x00000010;
PilotIO.IMR_KBD                     = 0x00000040;
PilotIO.IMR_PWM                     = 0x00000080;
PilotIO.IMR_INT0                    = 0x00000100;
PilotIO.IMR_INT1                    = 0x00000200;
PilotIO.IMR_INT2                    = 0x00000400;
PilotIO.IMR_INT3                    = 0x00000800;
PilotIO.IMR_INT4                    = 0x00001000;
PilotIO.IMR_INT5                    = 0x00002000;
PilotIO.IMR_INT6                    = 0x00004000;
PilotIO.IMR_INT7                    = 0x00008000;
PilotIO.IMR_IRQ1                    = 0x00010000;
PilotIO.IMR_IRQ2                    = 0x00020000;
PilotIO.IMR_IRQ3                    = 0x00040000;
PilotIO.IMR_IRQ6                    = 0x00080000;
PilotIO.IMR_PEN                     = 0x00100000;
PilotIO.IMR_SPIS                    = 0x00200000;
PilotIO.IMR_TMR1                    = 0x00400000;
PilotIO.IMR_TMR                     = 0x00000002;   // the MC68EZ328's only timer uses the same bit as TMR2
PilotIO.IMR_IRQ7                    = 0x00800000;

PilotIO.DBREG_IWR           = 0x308;        // Interrupt Wakeup Enable Register (32-bit)
PilotIO.DBREG_ISR           = 0x30C;        // Interrupt Status Register (32-bit)
PilotIO.DBREG_IPR           = 0x310;        // Interrupt Pending Register (32-bit)

/**
 * Port registers (all 8-bit)
 */
PilotIO.DBREG_PADIR         = 0x400;
PilotIO.DBREG_PADATA        = 0x401;
PilotIO.DBREG_PASEL         = 0x403;
PilotIO.DBREG_PBDIR         = 0x408;
PilotIO.DBREG_PBDATA        = 0x409;
PilotIO.DBREG_PBSEL         = 0x40B;
PilotIO.DBREG_PCDIR         = 0x410;

/**
 * I don't know the details of the Port C Data register (PCDATA), but I do know that in PalmOS 3.3,
 * in a routine called PrvLowBatteryShutdownNow, if it doesn't see bit 4 (value 0x10) set in PCDATA,
 * then it wants to go to sleep (ie, TRAP HwrSleep).  Let's avoid that for now.  ;-) -JP
 */
PilotIO.DBREG_PCDATA        = 0x411;
PilotIO.DBREG_PCSEL         = 0x413;

/**
 * The Port D Data register contains bits that map to the hardware button interrupt lines:
 *      Bit 0:  DeviceInterface.BUTTON_POWER
 *      Bit 1:  DeviceInterface.BUTTON_UP
 *      Bit 2:  DeviceInterface.BUTTON_DOWN
 *      Bit 3:  DeviceInterface.BUTTON_DATEBOOK
 *      Bit 4:  DeviceInterface.BUTTON_ADDRESS
 *      Bit 5:  DeviceInterface.BUTTON_TODOLIST
 *      Bit 6:  DeviceInterface.BUTTON_MEMOPAD
 *      Bit 7:  Undefined
 */
PilotIO.DBREG_PDDIR         = 0x418;
PilotIO.DBREG_PDDATA        = 0x419;
PilotIO.DBREG_PDPUEN        = 0x41A;
PilotIO.DBREG_PDPOL         = 0x41C;
PilotIO.DBREG_PDIRQEN       = 0x41D;
PilotIO.DBREG_PDKBEN        = 0x41E;        // MC68EZ328 Port D Keyboard Enable Register
PilotIO.DBREG_PDIRQEDGE     = 0x41F;
PilotIO.DBREG_PEDIR         = 0x420;
PilotIO.DBREG_PEDATA        = 0x421;
PilotIO.DBREG_PEPUEN        = 0x422;
PilotIO.DBREG_PESEL         = 0x423;
PilotIO.DBREG_PFDIR         = 0x428;

/**
 * The Port F Data register contains bits that control the LCD display.  The most important one is bit 4 (0x10).
 */
PilotIO.DBREG_PFDATA        = 0x429;
PilotIO.PFDATA_LCDENABLE            = 0x10;
PilotIO.DBREG_PFPUEN        = 0x42A;
PilotIO.DBREG_PFSEL         = 0x42B;
PilotIO.DBREG_PGDIR         = 0x430;
PilotIO.DBREG_PGDATA        = 0x431;
PilotIO.DBREG_PGPUEN        = 0x432;
PilotIO.DBREG_PGSEL         = 0x433;
PilotIO.DBREG_PJDIR         = 0x438;
PilotIO.DBREG_PJDATA        = 0x439;
PilotIO.DBREG_PJSEL         = 0x43B;
PilotIO.DBREG_PKDIR         = 0x440;
PilotIO.DBREG_PKDATA        = 0x441;
PilotIO.DBREG_PKPUEN        = 0x442;
PilotIO.DBREG_PKSEL         = 0x443;
PilotIO.DBREG_PMDIR         = 0x448;
PilotIO.DBREG_PMDATA        = 0x449;
PilotIO.DBREG_PMPUEN        = 0x44A;
PilotIO.DBREG_PMSEL         = 0x44B;

PilotIO.DBREG_PWMC          = 0x500;        // PWM Control Register
PilotIO.DBREG_PWMP          = 0x502;        // PWM Period Register
PilotIO.DBREG_PWMW          = 0x504;        // PWM Width Register
PilotIO.DBREG_PWMCNT        = 0x506;        // PWM Counter Register

PilotIO.DBREG_TCTL1         = 0x600;        // Timer Unit 1 Control Register (TMR1, 16-bit)
PilotIO.TCTL                    = 0;
PilotIO.TCTL_TEN                    = 0x0001;       // timer enable
PilotIO.TCTL_CLKSOURCE              = 0x000E;       // clock source
PilotIO.CLKSOURCE_STOPCOUNT         =    0x0;
PilotIO.CLKSOURCE_SYSTEMCLOCK       =    0x2;       // input clock = system clock
PilotIO.CLKSOURCE_SYSTEMCLOCKDIV16  =    0x4;       // input clock = system clock / 16
PilotIO.CLKSOURCE_TINPIN            =    0x6;
PilotIO.CLKSOURCE_32OR38KHZ         =    0x8;
PilotIO.TCTL_IRQEN                  = 0x0010;       // reference event interrupt enable
PilotIO.TCTL_OM                     = 0x0020;       // output mode
PilotIO.TCTL_CAPTUREEDGE            = 0x00C0;       // capture edge
PilotIO.TCTL_FRR                    = 0x0100;       // free run/restart

PilotIO.DBREG_TPRER1        = 0x602;        // Timer Unit 1 Prescaler Register (16-bit)
PilotIO.TPRER                   = 1;        // the value TPRER_PRESCALER+1 is used to divide the input clock
PilotIO.TPRER_PRESCALER             = 0x00FF;

PilotIO.DBREG_TCMP1         = 0x604;        // Timer Unit 1 Compare Register (16-bit)
PilotIO.TCMP                    = 2;

PilotIO.DBREG_TCR1          = 0x606;        // Timer Unit 1 Capture Register (16-bit, R/O)
PilotIO.TCR                     = 3;

PilotIO.DBREG_TCN1          = 0x608;        // Timer Unit 1 Counter Register (16-bit, R/O)
PilotIO.TCN                     = 4;

PilotIO.DBREG_TSTAT1        = 0x60A;        // Timer Unit 1 Status Register (16-bit)
PilotIO.TSTAT                   = 5;
PilotIO.TSTAT_COMP                  = 0x0001;       // compare event
PilotIO.TSTAT_CAPT                  = 0x0002;       // capture event

PilotIO.TSTAT_LASTREAD          = 6;        // this isn't a real register, just something we maintain internally
PilotIO.TMR_REGS                = 7;        // total # of TMR registers

PilotIO.DBREG_TCTL2         = 0x60C;        // Timer Unit 2 Control Register (TMR2, 16-bit)
PilotIO.DBREG_TPRER2        = 0x60E;        // Timer Unit 2 Prescaler Register (16-bit)

/**
 * On a Pilot, TCMP2 is set to 0xD7E4, or 55268.  Since TCTL2 sets the input clock to the system clock,
 * and TPRER2 is set to 2 (which divides the input clock by 3), 100 interrupts per second are generated
 * (16580608 / 3 / 55268).
 */
PilotIO.DBREG_TCMP2         = 0x610;        // Timer Unit 2 Compare Register (16-bit)
PilotIO.DBREG_TCR2          = 0x612;        // Timer Unit 2 Capture Register (16-bit, R/O)
PilotIO.DBREG_TCN2          = 0x614;        // Timer Unit 2 Counter Register (16-bit, R/O)
PilotIO.DBREG_TSTAT2        = 0x616;        // Timer Unit 2 Status Register (16-bit)
PilotIO.DBREG_WCSR          = 0x618;        // Watchdog Control and Status Register
PilotIO.DBREG_WRR           = 0x61A;        // Watchdog Compare Register
PilotIO.DBREG_WCN           = 0x61C;        // Watchdog Counter Register

PilotIO.DBREG_SPISR         = 0x700;        // SPIS (Serial Peripheral Interface Slave) Register (16-bit)

PilotIO.DBREG_SPIMDATA      = 0x800;        // SPIM (Serial Peripheral Interface Master) Data Register (16-bit)
PilotIO.DBREG_SPIMCONT      = 0x802;        // SPIM (Serial Peripheral Interface Master) Control/Status Register (16-bit)
PilotIO.SPIMCONT_BITCOUNT           = 0x000F;   // number of bits to exchange, minus 1
PilotIO.SPIMCONT_POL                = 0x0010;       // polarity
PilotIO.SPIMCONT_PHA                = 0x0020;       // phase
PilotIO.SPIMCONT_IRQEN              = 0x0040;       // interrupt request enable
PilotIO.SPIMCONT_SPIMIRQ            = 0x0080;
PilotIO.SPIMCONT_XCH                = 0x0100;
PilotIO.SPIMCONT_SPIMEN             = 0x0200;       // SPI master enable
PilotIO.SPIMCONT_DATARATE           = 0xE000;

/**
 * Burr-Brown ADS7843 channel selections (see exchangeADC())
 */
PilotIO.KEY_ROWS                    = 0x07;     // Port C bits that select key matrix rows on EZ-based devices
PilotIO.ADC_CHANNEL_Y               = 1;
PilotIO.ADC_CHANNEL_BATTERY         = 2;
PilotIO.ADC_CHANNEL_X               = 5;
PilotIO.ADC_BATTERY_GOOD            = 0xc80;
PilotIO.ADC_RANGE_X                 = [0xfff, 0];
PilotIO.ADC_RANGE_Y                 = [0xfff, 0];

PilotIO.DBREG_USTCNT        = 0x900;        // UART Status/Control Register
PilotIO.DBREG_UBAUD         = 0x902;        // UART Baud Control Register
PilotIO.DBREG_URX           = 0x904;        // UART RX Register
PilotIO.DBREG_UTX           = 0x906;        // UART TX Register
PilotIO.DBREG_UMISC         = 0x908;        // UART Misc Register

/**
 * List of supported DragonBall LCD Controller registers (the LCDREG_* offsets are relative to LCDREGS_BASE)
 */
PilotIO.LCDREGS_BASE        = 0xfffffa00;
PilotIO.LCDREGS_SIZE        = 0x00000034;
PilotIO.LCDREGS_LIMIT       = PilotIO.LCDREGS_BASE + PilotIO.LCDREGS_SIZE;
PilotIO.LCDREGS_OFFSET      = PilotIO.LCDREGS_BASE - PilotIO.DBREGS_BASE;

PilotIO.LCDREG_SSA          = 0x00;         // LCD Screen Starting Address Register (LSSA, 32-bit)
PilotIO.LCDREG_VPW          = 0x05;         // LCD Virtual Page Width Register (LVPW, 8-bit, normally set to 10, units are words)
PilotIO.LCDREG_XMAX         = 0x08;         // LCD Screen Width Register (LXMAX, 16-bit)
PilotIO.LCDREG_YMAX         = 0x0A;         // LCD Screen Height Register (LYMAX, 16-bit)
PilotIO.LCDREG_CXP          = 0x18;         // LCD Cursor X Position Register (LCXP, 16-bit)
PilotIO.LCDREG_CYP          = 0x1A;         // LCD Cursor Y Position Register (LCYP, 16-bit)
PilotIO.LCDREG_CWCH         = 0x1C;         // LCD Cursor Width & Height Register (LCWCH, 16-bit)
PilotIO.LCDREG_BLKC         = 0x1F;         // LCD Blink Control Register (LBLKC, 8-bit)
PilotIO.LCDREG_PICF         = 0x20;         // LCD Panel Interface Configuration Register (LPICF, 8-bit)
                                            //  (bit 0 normally clear for 1-bit mode, set for 2-bit mode)
PilotIO.LCDREG_POLCF        = 0x21;         // LCD Polarity Configuration Register (LPOLCF, 8-bit)
PilotIO.LCDREG_ACDRC        = 0x23;         // ACD (M) Rate Control Register (LACDRC, 8-bit)
PilotIO.LCDREG_PXCD         = 0x25;         // LCD Pixel Clock Divider Register (LPXCD, 8-bit)
PilotIO.LCDREG_CKCON        = 0x27;         // LCD Clocking Control Register (LCKCON, 8-bit)
PilotIO.CKCON_LCDON               = 0x80;   // bit 7 enables LCD controller if set, disables if clear
PilotIO.LCDREG_LBAR         = 0x29;         // LCD Last Buffer Address Register (LLBAR, 8-bit, normally same as VPW)
PilotIO.LCDREG_OTCR         = 0x2B;         // LCD Octet Terminal Count Register (LOTCR, 8-bit)
PilotIO.LCDREG_POSR         = 0x2D;         // LCD Panning Offset Register (LPOSR, 8-bit)
PilotIO.LCDREG_FRCM         = 0x31;         // LCD Frame-Rate Modulation Control Register (LFRCM, 8-bit)
PilotIO.LCDREG_GPMR         = 0x32;         // LCD Gray Palette Mapping Register (LGPMR, 16-bit)

PilotIO.DEF_SCREEN_WIDTH    = 160;
PilotIO.DEF_SCREEN_HEIGHT   = 160;

PilotIO.DBREG_RHMSR         = 0xB00;        // RTC Hours Minutes Seconds Register (32-bit)
PilotIO.RHMSR_HOURS                 = 0x1f000000;
PilotIO.RHMSR_HOURS_SHIFT           = 24;
PilotIO.RHMSR_MINUTES               = 0x003f0000;
PilotIO.RHMSR_MINUTES_SHIFT         = 16;
PilotIO.RHMSR_SECONDS               = 0x0000003f;
PilotIO.RHMSR_SECONDS_SHIFT         = 0;
PilotIO.DBREG_RALARM        = 0xB04;        // RTC Alarm Register
PilotIO.DBREG_RCTL          = 0xB0C;        // RTC Control Register
PilotIO.DBREG_RISR          = 0xB0E;        // RTC Interrupt Status Register
PilotIO.DBREG_RIENR         = 0xB10;        // RTC Interrupt Enable Register
PilotIO.DBREG_RSTPWCH       = 0xB12;        // RTC Stopwatch Register

PilotIO.regsInit = {};
PilotIO.regsInit.ab = {
    [PilotIO.DBREG_PCTLR]:    0x1F,
    [PilotIO.DBREG_PDPUEN]:   0xFF,
    [PilotIO.DBREG_PEPUEN]:   0x80,
    [PilotIO.DBREG_PESEL]:    0x80,
    [PilotIO.DBREG_PFPUEN]:   0xFF,
    [PilotIO.DBREG_PFSEL]:    0xFF,
    [PilotIO.DBREG_PGPUEN]:   0xFF,
    [PilotIO.DBREG_PGSEL]:    0xFF,
    [PilotIO.DBREG_PKPUEN]:   0x3F,
    [PilotIO.DBREG_PKSEL]:    0x3F,
    [PilotIO.DBREG_PMPUEN]:   0xFF,
    [PilotIO.DBREG_PMSEL]:    0x02
};

PilotIO.regsInit.aw = {
    [PilotIO.DBREG_PLLCR]:    0x2400,
    [PilotIO.DBREG_PLLFSR]:   0x0123,         // sets Q counter to 0x1, P counter to 0x23
    [PilotIO.DBREG_TCMP1]:    0xFFFF,
    [PilotIO.DBREG_TCMP2]:    0xFFFF,
    [PilotIO.DBREG_WCSR]:     0x0001,
    [PilotIO.DBREG_WRR]:      0xFFFF,
    [PilotIO.DBREG_UBAUD]:    0x003F
};

PilotIO.regsInit.al = {
    [PilotIO.DBREG_IMR]:      0x00FFFFFF,
    [PilotIO.DBREG_IWR]:      0x00FFFFFF
};

Object.assign(PilotIO.regsInit.ab, {
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_VPW]:    (PilotIO.DEF_SCREEN_WIDTH/8)/2,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_BLKC]:   0x7F,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CKCON]:  0x40,         // LCD controller initially disabled
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_LBAR]:   (PilotIO.DEF_SCREEN_WIDTH/8)/2,   // we initialize this to 10, they seem to prefer 9, hmmm
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_OTCR]:   0x3F,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_FRCM]:   0xB9
});

Object.assign(PilotIO.regsInit.aw, {
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_XMAX]:   0x03FF,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_YMAX]:   0x01FF,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CWCH]:   0x0101,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_GPMR]:   0x1073
});

/**
 * MC68EZ328 register reset values (see Table 1-3 of the MC68EZ328 User's Manual)
 */
PilotIO.regsInitEZ = {
    ab: {
        [PilotIO.DBREG_SCR]:      0x1C,
        [PilotIO.DBREG_IDR]:      PilotIO.EZ_CHIPID,
        [PilotIO.DBREG_IDR+1]:    PilotIO.EZ_MASKID,
        [PilotIO.DBREG_PCTLR]:    0x1F,
        [0x402]:                  0xFF,     // PAPUEN
        [0x40A]:                  0xFF,     // PBPUEN
        [0x40B]:                  0xFF,     // PBSEL
        [0x412]:                  0xFF,     // PCPDEN
        [0x413]:                  0xFF,     // PCSEL
        [PilotIO.DBREG_PDPUEN]:   0xFF,
        [0x41B]:                  0xF0,     // PDSEL
        [0x422]:                  0xFF,     // PEPUEN
        [PilotIO.DBREG_PESEL]:    0xFF,
        [0x42A]:                  0xFF,     // PFPUEN
        [PilotIO.DBREG_PGPUEN]:   0x3D,
        [PilotIO.DBREG_PGSEL]:    0x08,
        [0x504]:                  0xFE,     // PWMP
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_VPW]:    0xFF,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_BLKC]:   0x7F,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CKCON]:  0x40,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_LBAR]:   0xFF,     // LRRA on the EZ
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_FRCM]:   0xB9,
        [PilotIO.LCDREGS_OFFSET + 0x33]:                  0x84      // LGPMR is 8-bit on the EZ
    },
    aw: {
        [0x110]:                  0x00E0,   // CSA
        [0x116]:                  0x0200,   // CSD
        [0x118]:                  0x0060,   // EMUCS
        [PilotIO.DBREG_PLLCR]:    0x2430,
        [PilotIO.DBREG_PLLFSR]:   0x0123,
        [PilotIO.DBREG_TCMP1]:    0xFFFF,
        [PilotIO.DBREG_PWMC]:     0x0020,
        [PilotIO.DBREG_UBAUD]:    0x003F,
        [0xB0A]:                  0x0001,   // WATCHDOG
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_XMAX]:   0x03FF,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_YMAX]:   0x01FF,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CWCH]:   0x0101
    },
    al: {
        [PilotIO.DBREG_IMR]:      0x00FFFFFF
    }
};

PilotIO.CLASSES["PilotIO"] = PilotIO;
