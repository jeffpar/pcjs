/**
 * @fileoverview Palm Tungsten|E Board Emulation
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "../../../../modules/v3/device.js";
import Input   from "../../../../modules/v3/input.js";
import Memory  from "../../../../modules/v3/memory.js";
import MESSAGE from "../../../../modules/v3/message.js";
import PalmOS  from "./palmos.js";

/**
 * @typedef {Config} TungstenConfig
 * @property {string} [bus]
 * @property {Array.<number>} [penRegion] (the [x, y, width, height] of the LCD on the input surface)
 * @property {number} [penHeight] (the height of the digitizer in LCD pixels, including the Graffiti area; default is 440)
 * @property {Object} [buttonRegions] (the [x, y, width, height] of each button on the input surface, by button ID)
 */

/**
 * Palm Tungsten|E Board Emulation
 *
 * This device represents everything on the Tungsten|E's circuit board that isn't part of the OMAP310 or one of
 * the other chips we emulate: the buttons, and the assorted signals that are connected to the OMAP's GPIO and
 * MPUIO pins.  It also provides the values that are read from the unused portions of the OMAP's four external
 * "chip select" address ranges, which PalmOS examines to see what's installed.
 *
 * The wiring described here comes from QEMU's Tungsten|E ("cheetah") machine.
 *
 * @class Tungsten
 * @unrestricted
 */
export default class Tungsten extends Device
{
    /**
     * Tungsten(idMachine, idDevice, config)
     *
     * @this {Tungsten}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {TungstenConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        let idBus = this.config['bus'];
        this.bus = /** @type {Bus} */ (idBus? this.findDevice(idBus) : this.findDeviceByClass("Bus"));
        this.omap = /** @type {OMAP} */ (this.findDeviceByClass("OMAP"));
        this.tsc = /** @type {TSC2102} */ (this.findDeviceByClass("TSC2102", false));

        /**
         * Fill the rest of the chip select address ranges (ie, everything that isn't the flash ROM, which
         * must already have been added to the Bus).
         */
        let rom = /** @type {Memory} */ (this.findDeviceByClass("ROM", false));
        let addrROM = rom? rom.config['addr'] + rom.config['size'] : 0;
        addrROM = Math.ceil(addrROM / this.bus.blockSize) * this.bus.blockSize;
        this.addStatic(addrROM, Tungsten.CS_SIZE - addrROM, 0xffffffff);
        this.addStatic(Tungsten.CS_SIZE, Tungsten.CS_SIZE, 0x0000e1a0);
        this.addStatic(Tungsten.CS_SIZE * 2, Tungsten.CS_SIZE, 0x0000e1a0);
        this.addStatic(Tungsten.CS_SIZE * 3, Tungsten.CS_SIZE, 0xe1a0e1a0);

        /**
         * Hook up the pen and the buttons.  The input surface (eg, an image of the Tungsten|E) reports positions
         * via our onPen() handler, and keyboard events for the buttons arrive via onButton().
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
        let region = this.config['penRegion'] || [0, 0, Tungsten.LCD_WIDTH, Tungsten.LCD_HEIGHT];
        this.xPenRegion = region[0];
        this.yPenRegion = region[1];
        this.cxPenRegion = region[2];
        this.cyPenRegion = region[3];
        this.cyDigitizer = this.config['penHeight'] || 440;
        this.buttonRegions = this.config['buttonRegions'] || {};
        this.idButtonActive = null;
        this.fPenDown = false;
        this.xPen = this.yPen = 0;
        if (this.input) {
            this.input.addInput(this.onPen.bind(this));
            for (let id in Tungsten.BUTTONS) {
                this.input.addListener(Input.TYPE.IDMAP, id, this.onButton.bind(this));
            }
        }

        /**
         * Support for installing PalmOS applications (see loadApp()).
         */
        this.cpu = /** @type {CPUARM} */ (this.findDeviceByClass("CPU"));
        this.rom = rom;
        this.aInjections = [];          // queue of PalmOS API calls waiting to be injected (see injectTrap())
        this.injection = null;          // the injected call (if any) currently in progress
        this.addrTrapCall = this.addrTrapReturn = 0;
        this.fHooked = false;
        this.sAppLoading = null;
        this.addHandler(Device.HANDLER.COMMAND, this.onCommand.bind(this));

        this.reset();
    }

    /**
     * onCommand(aTokens)
     *
     * Processes commands that we support (eg, "load [url]"), returning undefined for all other commands, so that
     * other command handlers (eg, the Debugger's) have a chance to process them.
     *
     * @this {Tungsten}
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
     * Loads a PalmOS database (eg, a PRC file) and installs it, and if it's an application, launches it, using
     * the same sequence of PalmOS API calls that the 68K-based Palm machines use (see PilotIO's loadApp()).
     *
     * @this {Tungsten}
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
     * Installs a PalmOS database image:
     *
     *      p=MemChunkNew(0, size, memNewChunkFlagNonMovable | memNewChunkFlagAllowLarge)
     *      (copy the image to p)
     *      LocalID=DmFindDatabase(0, p)
     *      if (LocalID) DmDeleteDatabase(0, LocalID)
     *      DmCreateDatabaseFromImage(p)
     *      LocalID=DmFindDatabase(0, p)
     *      MemChunkFree(p)
     *      if (LocalID) SysUIAppSwitch(0, LocalID, 0, 0)
     *
     * where p conveniently begins with the database name, since that's how every database image begins.
     *
     * @this {Tungsten}
     * @param {string} url
     * @param {Uint8Array} ab (contents of a PalmOS database image)
     */
    installApp(url, ab)
    {
        let sName = "", sType = "";
        if (ab.length >= Tungsten.DBHDR_SIZE) {
            for (let i = 0; i < Tungsten.DBHDR_NAME_LEN && ab[i]; i++) sName += String.fromCharCode(ab[i]);
            for (let i = 0; i < 4; i++) sType += String.fromCharCode(ab[Tungsten.DBHDR_TYPE + i]);
        }
        if (!sName) {
            this.printf("%s is not a PalmOS database\n", url);
            this.sAppLoading = null;
            return;
        }
        let trap = (sName) => PalmOS.getAPITrap(sName);
        let addr = 0;
        let done = (sError) => {
            this.sAppLoading = null;
            if (sError) {
                this.printf("unable to install %s: %s\n", sName, sError);
                return;
            }
            this.printf("installed %s\n", sName);
            if (this.input) this.input.setFocus();
        };
        let call = (sTrap, aParms, next) => {
            this.injectTrap(trap(sTrap), aParms, (result) => {
                if (!result) done("call aborted"); else next(result);
            });
        };
        this.printf("installing %s (%d bytes)\n", sName, ab.length);
        /**
         * MemPtrNew() can't allocate more than 64K, so we call MemChunkNew() instead, which can.
         */
        call("MemChunkNew", [[0, 2], [ab.length, 4], [Tungsten.MEMCHUNK_NONMOVABLE | Tungsten.MEMCHUNK_ALLOWLARGE, 2]], (result) => {
            addr = result.a0;
            if (!addr || !this.writeBytes(addr, ab)) {
                if (!addr) {
                    done("not enough memory");
                } else {
                    call("MemChunkFree", [[addr, 4]], () => done("invalid memory"));
                }
                return;
            }
            call("DmFindDatabase", [[0, 2], [addr, 4]], (result) => {
                let create = () => {
                    call("DmCreateDatabaseFromImage", [[addr, 4]], (result) => {
                        let err = result.d0 & 0xffff;
                        call("DmFindDatabase", [[0, 2], [addr, 4]], (result) => {
                            let dbID = result.d0;
                            call("MemChunkFree", [[addr, 4]], () => {
                                if (!dbID) {
                                    done(this.sprintf("error %#06x", err));
                                } else if (sType != "appl") {
                                    done("");
                                } else {
                                    call("SysUIAppSwitch", [[0, 2], [dbID, 4], [0, 2], [0, 4]], () => done(""));
                                }
                            });
                        });
                    });
                };
                if (result.d0) {
                    call("DmDeleteDatabase", [[0, 2], [result.d0, 4]], create);
                } else {
                    create();
                }
            });
        });
    }

    /**
     * injectTrap(iTrap, aParms, done)
     *
     * Queues a PalmOS API call, using the API's 68K "trap" number and 68K calling conventions.
     *
     * PalmOS 5 is an ARM operating system, but it runs applications written for the 68K by emulating them, using
     * a component named PACE, which converts every 68K "TRAP #15" into a call to the corresponding ARM function.
     * All of those calls pass through one spot in PACE, so we hook that spot (see findTrapDispatch()), and wait for
     * the current application to call EvtGetEvent(), which every application does whenever it has nothing else to
     * do.  At that point, we make each of our own calls instead, by pushing its parameters onto the 68K stack and
     * substituting its trap number, and when the last of them has returned, we let EvtGetEvent() proceed.
     *
     * This obviously requires that the current application be a 68K application, but that is true of nearly
     * all PalmOS applications, including the ones built into the ROM.
     *
     * @this {Tungsten}
     * @param {number} iTrap (eg, 0xa045 for DmFindDatabase)
     * @param {Array.<Array.<number>>} aParms (array of [value, size] pairs, where size is 2 or 4)
     * @param {function((Object|null))} done (called with {d0, a0} when the call returns, or null if aborted)
     */
    injectTrap(iTrap, aParms, done)
    {
        if (!this.fHooked) {
            if (!this.findTrapDispatch() || !this.cpu.setHook(this.addrTrapCall, this.onTrapCall.bind(this)) || !this.cpu.setHook(this.addrTrapReturn, this.onTrapReturn.bind(this))) {
                this.printf("unable to find the PalmOS trap dispatcher\n");
                done(null);
                return;
            }
            this.fHooked = true;
        }
        this.aInjections.push({iTrap, aParms, done});
    }

    /**
     * findTrapDispatch()
     *
     * Locates the code in PACE that dispatches 68K traps, which looks like this in the Tungsten|E's ROM:
     *
     *      303169e8: e59d9018   LDR      R9,[SP,#0x18]
     *      303169ec: e59d0000   LDR      R0,[SP]           ; R0 = emulation state (see Tungsten.EMUL)
     *      303169f0: e1a0100c   MOV      R1,R12            ; R1 = trap number
     *      303169f4: eb0024ee   BL       0x3031fdb4
     *      303169f8: ...
     *
     * @this {Tungsten}
     * @returns {boolean} (true if found)
     */
    findTrapDispatch()
    {
        if (this.addrTrapCall) return true;
        let bus = this.bus;
        let addrROM = this.rom? this.rom.config['addr'] : 0, sizeROM = this.rom? this.rom.config['size'] : 0;
        let readLong = (addr) => bus.readDirect(addr) | (bus.readDirect(addr + 1) << 8) | (bus.readDirect(addr + 2) << 16) | (bus.readDirect(addr + 3) << 24);
        for (let off = 0; off < sizeROM - 16; off += 4) {
            let addr = addrROM + off;
            if (bus.readDirect(addr) == 0x18 && readLong(addr) == (0xe59d9018|0) && readLong(addr + 4) == (0xe59d0000|0) && readLong(addr + 8) == (0xe1a0100c|0) && (readLong(addr + 12) >>> 24) == 0xeb) {
                /**
                 * PalmOS maps the ROM at a fixed virtual address; make sure that's where this code is.
                 */
                let addrVirtual = (Tungsten.ROM_VIRTUAL + off)|0;
                if (this.cpu.translateDebug(addrVirtual) != addr) break;
                this.addrTrapCall = addrVirtual;
                this.addrTrapReturn = addrVirtual + 16;
                return true;
            }
        }
        return false;
    }

    /**
     * removeHooks()
     *
     * @this {Tungsten}
     */
    removeHooks()
    {
        if (this.fHooked) {
            this.cpu.setHook(this.addrTrapCall, null);
            this.cpu.setHook(this.addrTrapReturn, null);
            this.fHooked = false;
        }
    }

    /**
     * onTrapCall()
     *
     * Called when PACE is about to dispatch a trap (R12 contains the trap number).
     *
     * @this {Tungsten}
     */
    onTrapCall()
    {
        let regs = this.cpu.regs;
        if (this.injection || !this.aInjections.length) return;
        if ((regs[12] & 0xffff) != PalmOS.getAPITrap("EvtGetEvent")) return;
        this.trapOrig = regs[12];
        this.addrEmulState = this.readLong(regs[13]);
        this.spOrig = this.readLong(this.addrEmulState + Tungsten.EMUL.REG_A7);
        this.startInjection();
    }

    /**
     * startInjection()
     *
     * @this {Tungsten}
     */
    startInjection()
    {
        let injection = this.aInjections.shift();
        let sp = this.spOrig;
        /**
         * Parameters are pushed in reverse order, and (like everything else in 68K memory) they're big-endian.
         */
        for (let i = injection.aParms.length - 1; i >= 0; i--) {
            let [value, size] = injection.aParms[i];
            sp -= size;
            for (let j = 0; j < size; j++) {
                this.writeByte(sp + j, (value >>> ((size - 1 - j) << 3)) & 0xff);
            }
        }
        this.writeLong(this.addrEmulState + Tungsten.EMUL.REG_A7, sp);
        this.cpu.regs[12] = injection.iTrap;
        this.injection = injection;
    }

    /**
     * onTrapReturn()
     *
     * Called when PACE's trap dispatcher has returned.  If the trap was one of ours, we collect the results,
     * and then send PACE back to dispatch either our next trap or the trap that we originally intercepted.
     *
     * @this {Tungsten}
     * @returns {boolean|undefined} (false to skip the instruction we hooked)
     */
    onTrapReturn()
    {
        let injection = this.injection;
        if (!injection) return undefined;
        this.injection = null;
        let d0 = this.readLong(this.addrEmulState + Tungsten.EMUL.REG_D0);
        let a0 = this.readLong(this.addrEmulState + Tungsten.EMUL.REG_A0);
        this.writeLong(this.addrEmulState + Tungsten.EMUL.REG_A7, this.spOrig);
        injection.done({d0, a0});
        if (this.aInjections.length) {
            this.startInjection();
        } else {
            this.cpu.regs[12] = this.trapOrig;
            this.removeHooks();
        }
        this.cpu.regPC = this.addrTrapCall;
        return false;
    }

    /**
     * abortInjections()
     *
     * @this {Tungsten}
     */
    abortInjections()
    {
        let aInjections = this.aInjections;
        if (this.injection) aInjections.unshift(this.injection);
        this.aInjections = [];
        this.injection = null;
        this.fHooked = false;           // a reset is in progress, so there's no point in trying to remove the hooks
        this.sAppLoading = null;
        for (let injection of aInjections) injection.done(null);
    }

    /**
     * readLong(addr)
     *
     * Reads a long from the machine's virtual memory (as supervisor, and without generating any faults).
     *
     * @this {Tungsten}
     * @param {number} addr
     * @returns {number}
     */
    readLong(addr)
    {
        let value = 0;
        for (let i = 0; i < 4; i++) {
            let addrPhysical = this.cpu.translateDebug(addr + i);
            if (addrPhysical != undefined) value |= this.bus.readDirect(addrPhysical & this.bus.addrLimit) << (i << 3);
        }
        return value;
    }

    /**
     * writeByte(addr, b)
     *
     * @this {Tungsten}
     * @param {number} addr
     * @param {number} b
     * @returns {boolean} (true if the address is valid)
     */
    writeByte(addr, b)
    {
        let addrPhysical = this.cpu.translateDebug(addr);
        if (addrPhysical == undefined) return false;
        this.bus.writeDirect(addrPhysical & this.bus.addrLimit, b);
        return true;
    }

    /**
     * writeLong(addr, value)
     *
     * @this {Tungsten}
     * @param {number} addr
     * @param {number} value
     */
    writeLong(addr, value)
    {
        for (let i = 0; i < 4; i++) this.writeByte(addr + i, (value >>> (i << 3)) & 0xff);
    }

    /**
     * writeBytes(addr, ab)
     *
     * @this {Tungsten}
     * @param {number} addr
     * @param {Uint8Array} ab
     * @returns {boolean} (true if all the addresses were valid)
     */
    writeBytes(addr, ab)
    {
        for (let i = 0; i < ab.length; i++) {
            if (!this.writeByte(addr + i, ab[i])) return false;
        }
        return true;
    }

    /**
     * onButton(id, down)
     *
     * Input notifications for the hardware buttons (eg, via the keyboard).
     *
     * @this {Tungsten}
     * @param {string} id
     * @param {boolean} down
     */
    onButton(id, down)
    {
        this.printf(MESSAGE.INPUT, "onButton(%s,%b)\n", id, down);
        this.setButton(id, down);
    }

    /**
     * onPen(col, row)
     *
     * Input notifications from the input surface, which is configured so that col and row are the surface's
     * own pixel coordinates.  Coordinates within the pen region are converted to LCD coordinates (extended
     * below the LCD to cover the Graffiti area), and coordinates within a button region are converted to
     * button presses.  A col and row of -1 indicate that the pen (or mouse button) was released.
     *
     * @this {Tungsten}
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
                this.fPenDown = false;
                this.setPen(this.xPen, this.yPen, false);
            }
            return;
        }
        let x = Math.floor((col - this.xPenRegion) * Tungsten.LCD_WIDTH / this.cxPenRegion);
        let y = Math.floor((row - this.yPenRegion) * Tungsten.LCD_HEIGHT / this.cyPenRegion);
        if (x >= 0 && x < Tungsten.LCD_WIDTH && y >= 0 && y < this.cyDigitizer) {
            if (!this.idButtonActive) {
                this.fPenDown = true;
                this.setPen(this.xPen = x, this.yPen = y, true);
            }
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
     * addStatic(addr, size, value)
     *
     * Fills a range of addresses with a block that always reads as the same 32-bit value (and ignores writes).
     *
     * @this {Tungsten}
     * @param {number} addr
     * @param {number} size
     * @param {number} value
     */
    addStatic(addr, size, value)
    {
        let block = new Memory(this.idMachine, this.idDevice + "[" + this.toBase(addr, 16, 32) + "]", {
            "type": Memory.TYPE.NONE, "addr": addr, "size": this.bus.blockSize, "bus": this.bus.idDevice
        });
        block.readData = block.readDirect = (offset) => (value >>> ((offset & 0x3) << 3)) & 0xff;
        block.readPair = (offset) => (value >>> ((offset & 0x1) << 3)) & 0xffff;
        block.readQuad = (offset) => value|0;
        block.writeData = block.writePair = block.writeQuad = block.writeDirect = () => {};
        /**
         * The Bus won't replace existing blocks unless their type is NONE, which is true of blocks that the Bus
         * created by default, and it's also true of our blocks, so that other devices can replace them.
         */
        this.bus.addBlocks(addr, size, Memory.TYPE.NONE, block);
    }

    /**
     * reset()
     *
     * Sets all the board's inputs to the OMAP to their idle levels.
     *
     * @this {Tungsten}
     */
    reset()
    {
        this.abortInjections();
        let omap = this.omap;
        omap.setGPIO(Tungsten.GPIO.USB_DETECT, false);
        omap.setGPIO(Tungsten.GPIO.USB_OR_DC, false);
        omap.setGPIO(Tungsten.GPIO.TSC, false);
        omap.setGPIO(Tungsten.GPIO.HEADPHONES, false);
        omap.setMPUIO(Tungsten.MPUIO.DC, false);
        omap.setMPUIO(Tungsten.MPUIO.MMC_SWITCH, true);         // no card in the SD slot
        omap.setMPUIO(Tungsten.MPUIO.MMC1, true);
        omap.setMPUIO(Tungsten.MPUIO.MMC2, true);
        omap.setMPUIO(Tungsten.MPUIO.MMC3, true);
    }

    /**
     * setButton(id, fDown)
     *
     * @this {Tungsten}
     * @param {string} id (see Tungsten.BUTTONS)
     * @param {boolean} fDown
     * @returns {boolean} (true if the button exists)
     */
    setButton(id, fDown)
    {
        let button = Tungsten.BUTTONS[id];
        if (!button) return false;
        this.omap.setKey(button[0], button[1], fDown);
        return true;
    }

    /**
     * setPen(x, y, fDown)
     *
     * @this {Tungsten}
     * @param {number} x (in LCD pixels)
     * @param {number} y (in LCD pixels; values beyond the bottom of the LCD are in the Graffiti area)
     * @param {boolean} fDown
     */
    setPen(x, y, fDown)
    {
        if (this.tsc) this.tsc.setPen(x, y, fDown);
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {Tungsten}
     */
    onReset()
    {
        this.reset();
    }
}

Tungsten.CS_SIZE = 0x04000000;          // each of the OMAP's four chip selects covers 64Mb
Tungsten.ROM_VIRTUAL = 0x30000000;      // where PalmOS maps the ROM
Tungsten.DBHDR_NAME_LEN = 32;           // a database image begins with the database's null-terminated name
Tungsten.DBHDR_TYPE = 0x3c;             // eg, "appl"
Tungsten.DBHDR_SIZE = 0x4e;             // size of the header, up to (but not including) the record list
Tungsten.MEMCHUNK_NONMOVABLE = 0x0200;  // memNewChunkFlagNonMovable
Tungsten.MEMCHUNK_ALLOWLARGE = 0x1000;  // memNewChunkFlagAllowLarge

/**
 * Offsets of the 68K registers in PACE's emulation state (which begins with the current 68K instruction, followed
 * by D0-D7, A0-A7, and the PC)
 */
Tungsten.EMUL = {
    REG_D0:     0x04,
    REG_A0:     0x24,
    REG_A7:     0x40
};

Tungsten.LCD_WIDTH = 320;
Tungsten.LCD_HEIGHT = 320;

/**
 * OMAP GPIO pins
 */
Tungsten.GPIO = {
    USB_DETECT:     0,
    USB_OR_DC:      1,
    TSC:            4,
    PINTDAV:        6,
    MMC_WP:         8,
    MMC_POWER:      9,
    HDQ:            11,
    HEADPHONES:     14,
    SPEAKER:        15
};

/**
 * OMAP MPUIO pins
 */
Tungsten.MPUIO = {
    DC:             2,
    MMC_SWITCH:     4,
    MMC1:           6,
    MMC2:           7,
    MMC3:           11
};

/**
 * The buttons, and their [row, column] positions in the OMAP's keyboard matrix
 */
Tungsten.BUTTONS = {
    "datebook":     [0, 0],
    "address":      [1, 0],
    "todolist":     [2, 0],
    "memopad":      [3, 0],
    "power":        [4, 0],
    "left":         [0, 1],
    "down":         [1, 1],
    "up":           [2, 1],
    "right":        [3, 1],
    "select":       [4, 1]
};

Tungsten.CLASSES["Tungsten"] = Tungsten;
