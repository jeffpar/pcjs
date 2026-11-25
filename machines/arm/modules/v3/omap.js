/**
 * @fileoverview TI OMAP310 (and OMAP1510) System-on-Chip Emulation
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "../../../modules/v3/device.js";
import Memory  from "../../../modules/v3/memory.js";
import MESSAGE from "../../../modules/v3/message.js";

/**
 * @typedef {Config} OMAPConfig
 * @property {string} [bus]
 * @property {string} [model] ("omap310" or "omap1510"; default is "omap310")
 */

/**
 * OMAPTimer
 *
 * All of the OMAP's timers (the three MPU timers, the watchdog timer, and the 32kHz "OS" timer) are down-counters
 * with the same basic behavior; they differ only in their register layouts, which the OMAP device takes care of.
 *
 * Timer values are derived from the machine's cycle count: every cycle represents 1/cyclesPerSecond seconds,
 * regardless of how fast the machine is actually running, so everything the machine does is repeatable.
 *
 * @class OMAPTimer
 * @unrestricted
 */
class OMAPTimer
{
    /**
     * OMAPTimer(omap, name, irq)
     *
     * @this {OMAPTimer}
     * @param {OMAP} omap
     * @param {string} name
     * @param {number} irq (interrupt line; see OMAP.IRQ)
     */
    constructor(omap, name, irq)
    {
        this.omap = omap;
        this.irq = irq;
        this.rate = 0;                  // input clock, in Hz (set by the OMAP device)
        this.fPrescale = true;          // true if the input clock is divided by 2^(ptv+1) (false for the 32kHz timer)
        this.iTimer = omap.time.addTimer(omap.idDevice + "." + name, this.onExpire.bind(this));
        this.reset(0);
    }

    /**
     * reset(resetVal)
     *
     * @this {OMAPTimer}
     * @param {number} resetVal
     */
    reset(resetVal)
    {
        this.enable = this.st = this.ar = this.ptv = 0;
        this.itEna = 1;
        this.val = 0;
        this.resetVal = resetVal;
        this.nCyclesBase = 0;           // the cycle count when val was last calculated
        this.fArmed = false;
    }

    /**
     * isCounting()
     *
     * @this {OMAPTimer}
     * @returns {boolean}
     */
    isCounting()
    {
        return !!(this.enable && this.st && this.rate);
    }

    /**
     * getCyclesPerTick()
     *
     * @this {OMAPTimer}
     * @returns {number} (the number of machine cycles between timer decrements; not necessarily an integer)
     */
    getCyclesPerTick()
    {
        return this.omap.time.nCyclesPerSecond * (this.fPrescale? (1 << (this.ptv + 1)) : 1) / this.rate;
    }

    /**
     * read()
     *
     * @this {OMAPTimer}
     * @returns {number} (the current value of the counter)
     */
    read()
    {
        if (!this.isCounting()) return this.val;
        let nTicks = Math.floor((this.omap.time.getCycles() - this.nCyclesBase) / this.getCyclesPerTick());
        return nTicks < this.val? this.val - nTicks : 0;
    }

    /**
     * sync()
     *
     * Brings val up-to-date; this must be called before changing anything that affects how the timer counts.
     *
     * @this {OMAPTimer}
     */
    sync()
    {
        this.val = this.read();
        this.nCyclesBase = this.omap.time.getCycles();
    }

    /**
     * update()
     *
     * Called (after sync()) whenever the timer has been reprogrammed; if the timer is now counting, it starts
     * over from its reset value.
     *
     * @this {OMAPTimer}
     */
    update()
    {
        if (this.isCounting()) {
            this.val = this.resetVal;
            this.fArmed = true;
            this.omap.armTimer(this.iTimer, Math.max(Math.ceil(this.val * this.getCyclesPerTick()), 1));
        } else {
            this.fArmed = false;
        }
    }

    /**
     * setRate(rate)
     *
     * @this {OMAPTimer}
     * @param {number} rate (new input clock, in Hz)
     */
    setRate(rate)
    {
        if (this.rate != rate) {
            this.sync();
            this.rate = rate;
            this.update();
        }
    }

    /**
     * onExpire()
     *
     * Called by the Time device when the counter reaches zero.  A timer that isn't set to auto-reload stops;
     * otherwise, it starts over.  In either case, it generates an (edge-triggered) interrupt.
     *
     * @this {OMAPTimer}
     */
    onExpire()
    {
        if (!this.fArmed) return;
        this.sync();
        if (!this.ar) {
            this.val = 0;
            this.st = 0;
        }
        if (this.itEna) this.omap.pulseIRQ(this.irq);
        this.update();
    }

    /**
     * saveState()
     *
     * The countdown of the timer's Time timer (if any) is saved separately, by the OMAP device.
     *
     * @this {OMAPTimer}
     * @returns {Array}
     */
    saveState()
    {
        this.sync();
        return [this.enable, this.st, this.ar, this.ptv, this.itEna, this.val, this.resetVal, this.fArmed, this.rate];
    }

    /**
     * loadState(state)
     *
     * @this {OMAPTimer}
     * @param {Array} state
     */
    loadState(state)
    {
        this.enable = state[0];
        this.st = state[1];
        this.ar = state[2];
        this.ptv = state[3];
        this.itEna = state[4];
        this.val = state[5];
        this.resetVal = state[6];
        this.fArmed = state[7];
        this.rate = state[8];
        this.nCyclesBase = this.omap.time.getCycles();
    }
}

/**
 * OMAP310 Emulation
 *
 * This device provides everything in the OMAP310 other than the CPU: the internal SRAM, and all the peripherals
 * that live at the top of the address space (0xfffb0000-0xfffeffff).  The OMAP1510 is the same chip with a DSP
 * added, which we do NOT emulate.
 *
 * Implemented so far: both interrupt handlers, the three MPU timers, the watchdog timer, the 32kHz timer, clock
 * and reset control (CLKM), the DPLLs, power management (ULPD), pin configuration, the ID registers, the MPUI and
 * TIPB bridge registers, the traffic controller (TCMI), GPIO, MPUIO (including the keyboard matrix), and enough of
 * the three UARTs to capture their output.
 *
 * Every register that we don't implement simply reads as whatever was last written to it (or zero), and the first
 * access to each such register is reported (use the Debugger's "m ports on" command to see those messages).
 *
 * The register descriptions here come from TI's OMAP5910 and OMAP310 documentation, and from the behavior of
 * QEMU's OMAP310 emulation, which was originally written to run the Palm Tungsten|E's PalmOS 5 ROM.
 *
 * @class OMAP
 * @unrestricted
 */
export default class OMAP extends Device
{
    /**
     * OMAP(idMachine, idDevice, config)
     *
     * @this {OMAP}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {OMAPConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.cpu = /** @type {CPUARM} */ (this.findDeviceByClass("CPU"));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        let idBus = this.config['bus'];
        this.bus = /** @type {Bus} */ (idBus? this.findDevice(idBus) : this.findDeviceByClass("Bus"));
        this.f1510 = (this.config['model'] == "omap1510");

        /**
         * The internal SRAM is ordinary memory, so we let the Bus allocate it.
         */
        this.bus.addBlocks(OMAP.SRAM_BASE, OMAP.SRAM_SIZE, Memory.TYPE.READWRITE);

        /**
         * All of the peripheral registers are handled by us, by way of a Memory block for every 4K of the
         * peripheral address space whose read and write functions call our readIO() and writeIO() functions.
         */
        this.assert(this.bus.blockSize == OMAP.IO_BLOCK);
        for (let addr = OMAP.IO_BASE; addr < OMAP.IO_LIMIT; addr += OMAP.IO_BLOCK) {
            this.addIOBlock(addr);
        }

        /**
         * The OMAP also has a window (at 0xe1000000) onto the DSP's peripherals; the OMAP310 has no DSP, but
         * PalmOS pokes at a few of those addresses anyway, so we make the entire window read as zeros.
         */
        let blockDSP = new Memory(this.idMachine, this.idDevice + "[DSP]", {
            "type": Memory.TYPE.NONE, "addr": OMAP.DSP_BASE, "size": OMAP.IO_BLOCK, "bus": this.bus.idDevice
        });
        blockDSP.readData = blockDSP.readPair = blockDSP.readQuad = blockDSP.readDirect = () => 0;
        blockDSP.writeData = blockDSP.writePair = blockDSP.writeQuad = blockDSP.writeDirect = () => {};
        this.bus.addBlocks(OMAP.DSP_BASE, OMAP.DSP_SIZE, Memory.TYPE.NONE, blockDSP);

        /**
         * Each "region" is a set of registers (in units of 256 bytes) with its own read and write functions,
         * both of which are passed the offset of a register within the region.
         */
        this.aRegions = new Array((OMAP.IO_LIMIT - OMAP.IO_BASE) >> 8);
        this.regsUnknown = new Map();   // values written to registers that we don't implement, by address
        this.accessUnknown = new Set(); // unimplemented registers that have already been reported

        this.ih = [this.newIH(), this.newIH()];
        this.timers = [
            new OMAPTimer(this, "timer1", OMAP.IRQ.TIMER1),
            new OMAPTimer(this, "timer2", OMAP.IRQ.TIMER2),
            new OMAPTimer(this, "timer3", OMAP.IRQ.TIMER3)
        ];
        this.wdt = new OMAPTimer(this, "wdt", OMAP.IRQ.WD_TIMER);
        this.osTimer = new OMAPTimer(this, "ostimer", OMAP.IRQ.OS_TIMER);
        this.osTimer.fPrescale = false;
        this.uarts = [{}, {}, {}];
        this.gpioHandlers = [];         // functions to call when a GPIO output changes
        this.mpuioHandlers = [];        // functions to call when an MPUIO output changes
        this.serialHandler = null;      // function to call with every byte written to a UART
        this.uwireSlaves = [];          // the devices attached to each of the uWire's 4 chip selects
        this.timerRTC = this.time.addTimer(this.idDevice + ".rtc", this.onRTC.bind(this));
        this.timerLCD = this.time.addTimer(this.idDevice + ".lcd", this.onLCDFrame.bind(this));
        this.timerAudio = this.time.addTimer(this.idDevice + ".audio", this.onAudioBlock.bind(this));
        this.audioRate = 44100;         // samples per second requested by whatever is attached to McBSP1
        this.audioHandler = null;       // function to call with every block of samples sent to McBSP1

        this.addRegion(0xfffecb00, 0x100, (off, fPeek) => this.readIH(0, off, fPeek), (off, value) => this.writeIH(0, off, value));
        this.addRegion(0xfffe0000, 0x100, (off, fPeek) => this.readIH(1, off, fPeek), (off, value) => this.writeIH(1, off, value));
        this.addRegion(0xfffec500, 0x100, (off) => this.readMPUTimer(0, off), (off, value) => this.writeMPUTimer(0, off, value));
        this.addRegion(0xfffec600, 0x100, (off) => this.readMPUTimer(1, off), (off, value) => this.writeMPUTimer(1, off, value));
        this.addRegion(0xfffec700, 0x100, (off) => this.readMPUTimer(2, off), (off, value) => this.writeMPUTimer(2, off, value));
        this.addRegion(0xfffec800, 0x100, this.readWDT, this.writeWDT);
        this.addRegion(0xfffb9000, 0x800, this.readOSTimer, this.writeOSTimer);
        this.addRegion(0xfffe0800, 0x800, this.readULPD, this.writeULPD);
        this.addRegion(0xfffe1000, 0x800, this.readPinConfig, this.writePinConfig);
        this.addRegion(0xfffe1800, 0x800, this.readDieID, null);
        this.addRegion(0xfffed400, 0x100, this.readJTAGID, null);
        this.addRegion(0xfffec900, 0x100, this.readMPUI, this.writeMPUI);
        this.addRegion(0xfffeca00, 0x100, (off) => this.readTIPB(0, off), (off, value) => this.writeTIPB(0, off, value));
        this.addRegion(0xfffed300, 0x100, (off) => this.readTIPB(1, off), (off, value) => this.writeTIPB(1, off, value));
        this.addRegion(0xfffecc00, 0x100, this.readTCMI, this.writeTCMI);
        this.addRegion(0xfffece00, 0x100, this.readCLKM, this.writeCLKM);
        this.addRegion(0xfffecf00, 0x100, (off) => this.readDPLL(0, off), (off, value) => this.writeDPLL(0, off, value));
        this.addRegion(0xfffed000, 0x100, (off) => this.readDPLL(1, off), (off, value) => this.writeDPLL(1, off, value));
        this.addRegion(0xfffed100, 0x100, (off) => this.readDPLL(2, off), (off, value) => this.writeDPLL(2, off, value));
        this.addRegion(0xfffb0000, 0x800, (off, fPeek) => this.readUART(0, off, fPeek), (off, value) => this.writeUART(0, off, value));
        this.addRegion(0xfffb0800, 0x800, (off, fPeek) => this.readUART(1, off, fPeek), (off, value) => this.writeUART(1, off, value));
        this.addRegion(0xfffb9800, 0x800, (off, fPeek) => this.readUART(2, off, fPeek), (off, value) => this.writeUART(2, off, value));
        this.addRegion(0xfffce000, 0x800, this.readGPIO, this.writeGPIO);
        this.addRegion(0xfffb5000, 0x800, this.readMPUIO, this.writeMPUIO);
        this.addRegion(0xfffb3000, 0x800, this.readUWire, this.writeUWire);
        this.addRegion(0xfffb4800, 0x800, this.readRTC, this.writeRTC);
        this.addRegion(0xfffec000, 0x100, this.readLCD, this.writeLCD);
        this.addRegion(0xfffed800, 0x800, this.readDMA, this.writeDMA, true);

        this.reset();
    }

    /**
     * addIOBlock(addr)
     *
     * @this {OMAP}
     * @param {number} addr (address of a 4K block in the peripheral address space)
     */
    addIOBlock(addr)
    {
        let omap = this;
        let base = addr|0;
        let block = new Memory(this.idMachine, this.idDevice + "[" + this.toBase(addr, 16, 32) + "]", {
            "type": Memory.TYPE.READWRITE, "addr": addr, "size": OMAP.IO_BLOCK, "bus": this.bus.idDevice
        });
        block.readData = (offset) => omap.readIO(base + offset, 1);
        block.readPair = (offset) => omap.readIO(base + offset, 2);
        block.readQuad = (offset) => omap.readIO(base + offset, 4);
        block.writeData = (offset, value) => omap.writeIO(base + offset, value, 1);
        block.writePair = (offset, value) => omap.writeIO(base + offset, value, 2);
        block.writeQuad = (offset, value) => omap.writeIO(base + offset, value, 4);
        /**
         * These are the interfaces that the Debugger uses, which must not have any side-effects.
         */
        block.readDirect = (offset) => omap.readIO(base + offset, 1, true);
        block.writeDirect = (offset, value) => {};
        /**
         * These blocks contain no memory, so the Bus must not save or restore them (the state of the registers
         * is saved by our own saveState() function).
         */
        block.saveState = block.loadState = /** @type {?} */ (null);
        this.bus.addBlocks(addr, OMAP.IO_BLOCK, Memory.TYPE.READWRITE, block);
    }

    /**
     * addRegion(addr, size, read, write)
     *
     * @this {OMAP}
     * @param {number} addr
     * @param {number} size (a multiple of 256)
     * @param {function(this:OMAP,number,boolean=):(number|undefined)} read (returns undefined for unimplemented registers)
     * @param {function(this:OMAP,number,number):(boolean|undefined)|null} write (null if the region is read-only; returns false for unimplemented registers)
     * @param {boolean} [fWords] (true if the region's registers are 16 bits wide and located on 2-byte boundaries)
     */
    addRegion(addr, size, read, write, fWords = false)
    {
        let region = {addr: addr|0, read: read.bind(this), write: write? write.bind(this) : null, fWords};
        for (let i = 0; i < size; i += 0x100) {
            this.aRegions[(addr + i - OMAP.IO_BASE) >>> 8] = region;
        }
    }

    /**
     * readIO(addr, size, fPeek)
     *
     * Registers are 16 or 32 bits wide, and they're always located on 4-byte boundaries, so we read the entire
     * register and then return whichever part of it was requested.
     *
     * @this {OMAP}
     * @param {number} addr
     * @param {number} size (1, 2, or 4)
     * @param {boolean} [fPeek] (true to read without side-effects; ie, the Debugger is reading)
     * @returns {number}
     */
    readIO(addr, size, fPeek)
    {
        let region = this.aRegions[(addr - OMAP.IO_BASE) >>> 8];
        if (region && region.fWords) {
            let value = this.readReg(addr & ~0x1, fPeek) & 0xffff;
            if (size == 4) return value | (this.readReg((addr & ~0x1) + 2, fPeek) << 16);
            return (size == 2)? value : ((value >> ((addr & 0x1) << 3)) & 0xff);
        }
        let value = this.readReg(addr & ~0x3, fPeek);
        if (size == 4) return value|0;
        value >>>= (addr & 0x3) << 3;
        return (size == 2)? (value & 0xffff) : (value & 0xff);
    }

    /**
     * writeIO(addr, value, size)
     *
     * A write that covers only part of a register is treated as a write to the entire register, with the
     * rest of the register unchanged.
     *
     * @this {OMAP}
     * @param {number} addr
     * @param {number} value
     * @param {number} size (1, 2, or 4)
     */
    writeIO(addr, value, size)
    {
        let region = this.aRegions[(addr - OMAP.IO_BASE) >>> 8];
        if (region && region.fWords) {
            if (size == 1) {
                let shift = (addr & 0x1) << 3;
                value = (this.readReg(addr & ~0x1, true) & ~(0xff << shift)) | ((value & 0xff) << shift);
            }
            this.writeReg(addr & ~0x1, value & 0xffff);
            if (size == 4) this.writeReg((addr & ~0x1) + 2, value >>> 16);
            return;
        }
        let shift = (addr & 0x3) << 3;
        if (shift) {
            let mask = ((size == 2)? 0xffff : 0xff) << shift;
            value = (this.readReg(addr & ~0x3, true) & ~mask) | ((value << shift) & mask);
        } else if (size != 4) {
            value &= (size == 2)? 0xffff : 0xff;
        }
        this.writeReg(addr & ~0x3, value);
    }

    /**
     * readReg(addr, fPeek)
     *
     * @this {OMAP}
     * @param {number} addr (address of a register)
     * @param {boolean} [fPeek]
     * @returns {number}
     */
    readReg(addr, fPeek)
    {
        let value;
        let region = this.aRegions[(addr - OMAP.IO_BASE) >>> 8];
        if (region) value = region.read(addr - region.addr, fPeek);
        if (value == undefined) {
            value = this.regsUnknown.get(addr) || 0;
            if (!fPeek) this.reportUnknown(addr, "read", value);
        }
        return value;
    }

    /**
     * writeReg(addr, value)
     *
     * @this {OMAP}
     * @param {number} addr (address of a register)
     * @param {number} value
     */
    writeReg(addr, value)
    {
        let region = this.aRegions[(addr - OMAP.IO_BASE) >>> 8];
        if (!region || !region.write || region.write(addr - region.addr, value) === false) {
            this.regsUnknown.set(addr, value);
            this.reportUnknown(addr, "write", value);
        }
    }

    /**
     * reportUnknown(addr, sAccess, value)
     *
     * Reports the first read and the first write of every register that we don't implement.
     *
     * @this {OMAP}
     * @param {number} addr
     * @param {string} sAccess
     * @param {number} value
     */
    reportUnknown(addr, sAccess, value)
    {
        let key = sAccess + addr;
        if (!this.accessUnknown.has(key)) {
            this.accessUnknown.add(key);
            this.printf(MESSAGE.PORTS, "%#010x: unimplemented %s of %#010x (%#x)\n", this.cpu.regPCLast, sAccess, addr, value);
        }
    }

    /**
     * reset()
     *
     * @this {OMAP}
     */
    reset()
    {
        for (let ih of this.ih) {
            ih.irqs = ih.inputs = ih.sens = ih.fiq = 0;
            ih.mask = -1;
            ih.priority.fill(0);
            ih.sir = [0, 0];
            ih.agr = [true, true];
        }
        for (let timer of this.timers) timer.reset(31337);
        /**
         * The watchdog timer is enabled at reset; it's up to the software to turn it off.
         */
        this.wdt.reset(0xffff);
        this.wdt.enable = 1;
        this.wdtMode = 1;
        this.wdtFree = 1;
        this.wdtLast = 0;
        this.osTimer.reset(0x00ffffff);
        this.osTimer.itEna = 0;
        this.osTimer.ar = 1;
        this.osTimer.rate = 32768;

        this.ulpd = new Uint16Array(0x54 >> 2);
        this.ulpd.set([0x0001, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001, 0x0001, 0x03ff, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x2211, 0x0000, 0x0000, 0x0960, 0x0008, 0x0008]);
        this.nCyclesGauge = 0;

        this.pinConfig = new Int32Array(0x84 >> 2);
        this.mpuiCtrl = 0x0003ff1b;
        this.tipb = [[0xffff, 0x0009, 0x0000, 0x000f], [0xffff, 0x0009, 0x0000, 0x000f]];
        this.tcmi = new Int32Array(0x44 >> 2);
        this.tcmi.set([0, 0, 0, 0x10, 0x0010fffb, 0x0010fffb, 0x0010fffb, 0x0010fffb, 0x00618800, 0x37, 0, 0, 0, 0, 0, 0x3, 0]);

        this.clkm = {ckctl: 0x3000, idlect1: 0x0400, idlect2: 0x0100, ewupct: 0x003f, rstct1: 0, rstct2: 0, ckout1: 0x0015, scheme: 0, coldStart: 0};
        this.dpll = [0x2002, 0x2002, 0x2002];
        this.updateClocks();

        for (let uart of this.uarts) {
            uart.regs = new Uint8Array(32);
            uart.dll = uart.dlh = 0;
            uart.output = "";
        }

        this.gpio = {inputs: 0, outputs: 0xffff, dir: 0xffff, edge: 0xffff, mask: 0xffff, ints: 0, pins: 0xffff};
        this.mpuio = {inputs: 0, outputs: 0, dir: 0xffff, edge: 0, mask: 0, ints: 0, debounce: 0, latch: 0, event: 0, cols: 0, kbdMask: 0, rowLatch: 0x1f, buttons: [0, 0, 0, 0, 0]};

        this.uwire = {txbuf: 0, rxbuf: 0, control: 0, setup: [0, 0, 0, 0, 0]};

        /**
         * The RTC's time is kept as a number of milliseconds, just like a JavaScript Date, except that it
         * represents local time; we start it off with the real time.
         */
        let date = new Date();
        this.rtc = {
            ms: date.getTime() - date.getTimezoneOffset() * 60000,
            alarm: [0, 0, 0, 1, 1, 0],              // seconds, minutes, hours, day, month, year
            fRunning: false, fPM: false, fAutoComp: false, fRound: false,
            status: 0x80, interrupts: 0, comp: 0
        };
        this.armTimer(this.timerRTC, this.time.nCyclesPerSecond);

        this.lcd = {
            fEnabled: false, plm: 0, fTFT: false, fMono: false, interrupts: 0, ctrl: 0,
            width: 1, height: 1, timing: [0, 0, 0], subpanel: 0,
            fFrameDone: false, fPaletteDone: false, fSyncError: false
        };
        this.dma = {gcr: 0x000c, channels: []};
        for (let i = 0; i < OMAP.DMA.CHANNELS; i++) {
            this.dma.channels.push({
                csdp: 0, ccr: 0, interrupts: 0x0003, status: 0, cpc: 0, fWaiting: false,
                src: 0, dest: 0, elements: 0, frames: 0, frameIndex: 0, elementIndex: 0
            });
        }
        this.dmaLCD = {
            fSRAM: false, fDual: false, interrupts: 0, condition: 0, iFrame: -1,
            top: [0, 0], bottom: [0, 0]
        };

        this.regsUnknown.clear();
    }

    /**
     * armTimer(iTimer, nCycles)
     *
     * Arms one of our Time timers to fire after a number of cycles.
     *
     * Time's setTimer() function works in milliseconds, which isn't precise enough for us, and when it's called
     * in the middle of a burst of cycles (as it will be whenever software programs a timer), it doesn't account
     * for the cycles that the CPU has already executed in that burst.  So we set the countdown ourselves, adding
     * those cycles (since they'll be subtracted when the burst ends), and then we end the burst, so that the next
     * burst will be no longer than our countdown.
     *
     * @this {OMAP}
     * @param {number} iTimer
     * @param {number} nCycles
     */
    armTimer(iTimer, nCycles)
    {
        this.time.aTimers[iTimer - 1].nCyclesLeft = nCycles + this.cpu.getClock();
        this.cpu.stopClock();
        /**
         * Stopping the CPU isn't enough, because Time will simply restart it until the burst that Time
         * originally requested is complete, so we have to tell Time that the burst is over, too.
         */
        if (this.time.fRunning) this.time.endBurst();
    }

    /**
     * updateClocks()
     *
     * Called whenever the clock configuration changes.  The only clock rate that we actually care about is that
     * of the MPU timers, which use either the 12Mhz reference clock or the output of DPLL1.
     *
     * @this {OMAP}
     */
    updateClocks()
    {
        /**
         * NOTE: QEMU has the meaning of ARM_TIMXO the other way around, but the Tungsten|E's ROM sets this bit,
         * programs DPLL1 for 126Mhz, and then implements its microsecond delays by loading a timer (which
         * divides its clock by two) with 63 ticks per microsecond.
         */
        let rate = OMAP.CLK_REF;
        if (this.clkm.ckctl & OMAP.CLKM.CKCTL_TIMXO) {
            rate = this.getDPLLRate(this.dpll[0]);
        }
        for (let timer of this.timers) timer.setRate(rate);
        /**
         * The watchdog's clock is the reference clock divided by 14.
         */
        this.wdt.setRate(OMAP.CLK_REF / 14);
    }

    /**
     * getDPLLRate(ctl)
     *
     * @this {OMAP}
     * @param {number} ctl (DPLL control register)
     * @returns {number} (output clock, in Hz)
     */
    getDPLLRate(ctl)
    {
        if (ctl & OMAP.DPLL.PLL_ENABLE) {
            return OMAP.CLK_REF * (((ctl >> 7) & 0x1f) || 1) / (((ctl >> 5) & 0x3) + 1);
        }
        return OMAP.CLK_REF / [1, 2, 4, 4][(ctl >> 2) & 0x3];
    }

    /**
     * newIH()
     *
     * @this {OMAP}
     * @returns {Object} (the state of one interrupt handler)
     */
    newIH()
    {
        return {
            irqs: 0,                        // pending interrupts (ITR)
            mask: -1,                       // masked interrupts (MIR)
            inputs: 0,                      // the current state of every interrupt input
            sens: 0,                        // inputs that are level-sensitive (the rest are edge-sensitive)
            fiq: 0,                         // inputs that are routed to FIQ (the rest are routed to IRQ)
            priority: new Uint8Array(32),
            sir: [0, 0],                    // the highest-priority pending IRQ and FIQ, as of the last request
            agr: [true, true]               // true if a new IRQ or FIQ request is permitted (see CONTROL_REG)
        };
    }

    /**
     * setIRQ(irq, fAssert)
     *
     * Asserts or deasserts one of the interrupt inputs; lines 0-31 belong to the first-level interrupt handler,
     * and lines 32-63 belong to the second-level handler (whose output is line 0 of the first-level handler).
     *
     * @this {OMAP}
     * @param {number} irq (see OMAP.IRQ)
     * @param {boolean|number} fAssert
     */
    setIRQ(irq, fAssert)
    {
        let iHandler = irq >> 5, ih = this.ih[iHandler], bit = 1 << (irq & 31);
        if (fAssert) {
            /**
             * An edge-sensitive input becomes pending only when it changes; a level-sensitive input becomes
             * pending (again) whenever it's asserted.
             */
            let rise = ~ih.irqs & bit;
            if (!(ih.sens & bit)) rise &= ~ih.inputs;
            ih.inputs |= bit;
            if (rise) {
                ih.irqs |= rise;
                this.updateIH(iHandler, 0);
                this.updateIH(iHandler, 1);
            }
        } else {
            ih.irqs &= ~(ih.sens & bit);
            ih.inputs &= ~bit;
        }
    }

    /**
     * pulseIRQ(irq)
     *
     * @this {OMAP}
     * @param {number} irq
     */
    pulseIRQ(irq)
    {
        this.setIRQ(irq, true);
        this.setIRQ(irq, false);
    }

    /**
     * updateIH(iHandler, iType)
     *
     * If the handler has any unmasked pending interrupts of the given type, and it's allowed to make a new
     * request, then it records the highest-priority pending interrupt and asserts its output.  The output remains
     * asserted until software writes to CONTROL_REG to permit a new request.
     *
     * @this {OMAP}
     * @param {number} iHandler (0 or 1)
     * @param {number} iType (0 for IRQ, 1 for FIQ)
     */
    updateIH(iHandler, iType)
    {
        let ih = this.ih[iHandler];
        let pending = ih.irqs & ~ih.mask & (iType? ih.fiq : ~ih.fiq);
        if (pending && ih.agr[iType]) {
            ih.agr[iType] = false;
            /**
             * Find the pending interrupt with the highest priority (ie, the lowest priority value); if there's
             * more than one, the highest-numbered interrupt wins.
             */
            let line = 0;
            let priority = 255;
            for (let i = 0; i < 32; i++) {
                if ((pending & (1 << i)) && ih.priority[i] <= priority) {
                    priority = ih.priority[i];
                    line = i;
                }
            }
            ih.sir[iType] = line;
            this.setIHOutput(iHandler, iType, true);
        }
    }

    /**
     * setIHOutput(iHandler, iType, fAssert)
     *
     * @this {OMAP}
     * @param {number} iHandler
     * @param {number} iType
     * @param {boolean} fAssert
     */
    setIHOutput(iHandler, iType, fAssert)
    {
        if (!iHandler) {
            if (iType) {
                this.cpu.setFIQ(fAssert);
            } else {
                this.cpu.setIRQ(fAssert);
            }
        } else if (!iType) {
            this.setIRQ(OMAP.IRQ.IH2_IRQ, fAssert);
        }
    }

    /**
     * readIH(iHandler, offset, fPeek)
     *
     * @this {OMAP}
     * @param {number} iHandler
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readIH(iHandler, offset, fPeek)
    {
        let ih = this.ih[iHandler];
        switch (offset) {
        case OMAP.IH.ITR:
            return ih.irqs;
        case OMAP.IH.MIR:
            return ih.mask;
        case OMAP.IH.SIR_IRQ:
        case OMAP.IH.SIR_FIQ: {
            /**
             * Reading the number of the interrupt being requested also clears it, if it's edge-sensitive.
             */
            let line = ih.sir[(offset - OMAP.IH.SIR_IRQ) >> 2];
            if (!fPeek && !(ih.sens & (1 << line))) ih.irqs &= ~(1 << line);
            return line;
        }
        case OMAP.IH.CONTROL:
        case OMAP.IH.ISR:
            return 0;
        }
        if (offset >= OMAP.IH.ILR0 && offset < OMAP.IH.ISR) {
            let i = (offset - OMAP.IH.ILR0) >> 2;
            return (ih.priority[i] << 2) | (((ih.sens >>> i) & 1) << 1) | ((ih.fiq >>> i) & 1);
        }
        return undefined;
    }

    /**
     * writeIH(iHandler, offset, value)
     *
     * @this {OMAP}
     * @param {number} iHandler
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined} (false if the register isn't implemented)
     */
    writeIH(iHandler, offset, value)
    {
        let ih = this.ih[iHandler];
        switch (offset) {
        case OMAP.IH.ITR:
            /**
             * Writing zeros clears pending interrupts, except for level-sensitive inputs that are still asserted.
             */
            ih.irqs &= value | (ih.inputs & ih.sens);
            return;
        case OMAP.IH.MIR:
            ih.mask = value;
            this.updateIH(iHandler, 0);
            this.updateIH(iHandler, 1);
            return;
        case OMAP.IH.SIR_IRQ:
        case OMAP.IH.SIR_FIQ:
            return;
        case OMAP.IH.CONTROL:
            if (value & OMAP.IH.CONTROL_NEW_FIQ_AGR) {
                this.setIHOutput(iHandler, 1, false);
                ih.agr[1] = true;
                this.updateIH(iHandler, 1);
            }
            if (value & OMAP.IH.CONTROL_NEW_IRQ_AGR) {
                this.setIHOutput(iHandler, 0, false);
                ih.agr[0] = true;
                this.updateIH(iHandler, 0);
            }
            return;
        case OMAP.IH.ISR:
            /**
             * Software can request any interrupt (but only one at a time) by setting a bit here.
             */
            for (let i = 0; i < 32; i++) {
                if (value & (1 << i)) {
                    this.setIRQ((iHandler << 5) + i, true);
                    break;
                }
            }
            return;
        }
        if (offset >= OMAP.IH.ILR0 && offset < OMAP.IH.ISR) {
            let i = (offset - OMAP.IH.ILR0) >> 2, bit = 1 << i;
            ih.priority[i] = (value >> 2) & 0x1f;
            ih.sens = (value & 0x2)? (ih.sens | bit) : (ih.sens & ~bit);
            ih.fiq = (value & 0x1)? (ih.fiq | bit) : (ih.fiq & ~bit);
            return;
        }
        return false;
    }

    /**
     * readMPUTimer(iTimer, offset)
     *
     * @this {OMAP}
     * @param {number} iTimer (0-2)
     * @param {number} offset
     * @returns {number|undefined}
     */
    readMPUTimer(iTimer, offset)
    {
        let timer = this.timers[iTimer];
        switch (offset) {
        case 0x00:                      // CNTL_TIMER
            return (timer.enable << 5) | (timer.ptv << 2) | (timer.ar << 1) | timer.st;
        case 0x04:                      // LOAD_TIM (write-only)
            return 0;
        case 0x08:                      // READ_TIM
            return timer.read();
        }
        return undefined;
    }

    /**
     * writeMPUTimer(iTimer, offset, value)
     *
     * @this {OMAP}
     * @param {number} iTimer (0-2)
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeMPUTimer(iTimer, offset, value)
    {
        let timer = this.timers[iTimer];
        switch (offset) {
        case 0x00:                      // CNTL_TIMER
            timer.sync();
            timer.enable = (value >> 5) & 1;
            timer.ptv = (value >> 2) & 7;
            timer.ar = (value >> 1) & 1;
            timer.st = value & 1;
            timer.update();
            return;
        case 0x04:                      // LOAD_TIM
            timer.resetVal = value >>> 0;
            return;
        case 0x08:                      // READ_TIM (read-only)
            return;
        }
        return false;
    }

    /**
     * readWDT(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readWDT(offset)
    {
        let timer = this.wdt;
        switch (offset) {
        case 0x00:                      // CNTL_TIMER
            return (timer.ptv << 9) | (timer.ar << 8) | (timer.st << 7) | (this.wdtFree << 1);
        case 0x04:                      // READ_TIMER
            return timer.read() & 0xffff;
        case 0x08:                      // TIMER_MODE
            return this.wdtMode << 15;
        }
        return undefined;
    }

    /**
     * writeWDT(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeWDT(offset, value)
    {
        let timer = this.wdt;
        switch (offset) {
        case 0x00:                      // CNTL_TIMER
            timer.sync();
            timer.ptv = (value >> 9) & 7;
            timer.ar = (value >> 8) & 1;
            timer.st = (value >> 7) & 1;
            this.wdtFree = (value >> 1) & 1;
            timer.update();
            return;
        case 0x04:                      // LOAD_TIMER
            timer.resetVal = value & 0xffff;
            return;
        case 0x08:                      // TIMER_MODE
            /**
             * Writing 0xf5 followed by 0xa0 turns the watchdog off (ie, turns it into an ordinary timer).
             * Any other value after 0xf5 is supposed to reset the system, but QEMU's authors found that it had
             * no effect on a real Tungsten|E, so it has no effect here, either.
             */
            this.wdtMode |= (value >> 15) & 1;
            if (this.wdtLast == 0xf5 && (value & 0xff) == 0xa0) this.wdtMode = 0;
            this.wdtLast = value & 0xff;
            return;
        }
        return false;
    }

    /**
     * readOSTimer(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readOSTimer(offset)
    {
        let timer = this.osTimer;
        switch (offset) {
        case 0x00:                      // TVR
            return timer.resetVal;
        case 0x04:                      // TCR
            return timer.read();
        case 0x08:                      // CR
            return (timer.ar << 3) | (timer.itEna << 2) | timer.st;
        }
        return undefined;
    }

    /**
     * writeOSTimer(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeOSTimer(offset, value)
    {
        let timer = this.osTimer;
        switch (offset) {
        case 0x00:                      // TVR
            timer.resetVal = value & 0x00ffffff;
            return;
        case 0x04:                      // TCR (read-only)
            return;
        case 0x08:                      // CR
            timer.ar = (value >> 3) & 1;
            timer.itEna = (value >> 2) & 1;
            /**
             * The timer restarts if it's being started or stopped, or if the "reload" bit is set.
             */
            if (timer.st != (value & 1) || (value & 2)) {
                timer.sync();
                timer.enable = timer.st = value & 1;
                timer.update();
            }
            return;
        }
        return false;
    }

    /**
     * readULPD(offset, fPeek)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readULPD(offset, fPeek)
    {
        if (offset >= 0x54 || offset == 0x44) return undefined;
        let value = this.ulpd[offset >> 2];
        if (offset == OMAP.ULPD.IT_STATUS && !fPeek) {
            this.ulpd[offset >> 2] = 0;
            this.setIRQ(OMAP.IRQ.GAUGE_32K, false);
        }
        return value;
    }

    /**
     * writeULPD(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeULPD(offset, value)
    {
        let ulpd = this.ulpd, i = offset >> 2;
        switch (offset) {
        case 0x00:                      // COUNTER_32_LSB (read-only)
        case 0x04:                      // COUNTER_32_MSB (read-only)
        case 0x08:                      // COUNTER_HIGH_FREQ_LSB (read-only)
        case 0x0c:                      // COUNTER_HIGH_FREQ_MSB (read-only)
        case OMAP.ULPD.IT_STATUS:       // (read-only)
        case 0x40:                      // STATUS_REQ (read-only)
            return;
        case OMAP.ULPD.GAUGING_CTRL:
            /**
             * "Gauging" measures the high-frequency clock against the 32kHz clock: when it's stopped, the
             * number of ticks of each clock since it was started are reported, along with an interrupt.
             */
            if ((ulpd[i] ^ value) & 1) {
                let nCycles = this.time.getCycles();
                if (value & 1) {
                    this.nCyclesGauge = nCycles;
                } else {
                    let seconds = (nCycles - this.nCyclesGauge) / this.time.nCyclesPerSecond;
                    let ticks = Math.floor(seconds * 32768);
                    ulpd[0] = ticks & 0xffff;
                    ulpd[1] = (ticks / 0x10000) & 0xffff;
                    if (ticks > 0xffffffff) ulpd[OMAP.ULPD.IT_STATUS >> 2] |= 0x4;
                    ticks = Math.floor(seconds * OMAP.CLK_REF);
                    ulpd[2] = ticks & 0xffff;
                    ulpd[3] = (ticks / 0x10000) & 0xffff;
                    if (ticks > 0xffffffff) ulpd[OMAP.ULPD.IT_STATUS >> 2] |= 0x2;
                    ulpd[OMAP.ULPD.IT_STATUS >> 2] |= 0x1;
                    this.setIRQ(OMAP.IRQ.GAUGE_32K, true);
                }
            }
            ulpd[i] = value;
            return;
        case 0x18:
        case 0x1c:
        case 0x20:
        case 0x24:                      // SETUP_ANALOG_CELL3_ULPD1
        case 0x28:
        case 0x2c:
        case 0x38:                      // COUNTER_32_FIQ
        case 0x48:                      // LOCL_TIME
        case 0x50:                      // POWER_CTRL
            ulpd[i] = value;
            return;
        case 0x30:                      // CLOCK_CTRL
            ulpd[i] = value & 0x3f;
            return;
        case 0x34:                      // SOFT_REQ
            ulpd[i] = value & 0x1f;
            return;
        case 0x3c:                      // DPLL_CTRL
            ulpd[i] = this.lockDPLL(value);
            return;
        case 0x4c:                      // APLL_CTRL
            ulpd[i] = value & 0xf;
            return;
        }
        return false;
    }

    /**
     * lockDPLL(value)
     *
     * A DPLL control register reports the mode that the DPLL is actually in (bit 0) and whether it has locked
     * (bit 1); our DPLLs enter the requested mode and lock instantly.
     *
     * @this {OMAP}
     * @param {number} value (the value being written to a DPLL control register)
     * @returns {number} (the new value of that register)
     */
    lockDPLL(value)
    {
        value &= 0x2fff;
        return (value & ~OMAP.DPLL.LOCK) | ((value & OMAP.DPLL.PLL_ENABLE)? OMAP.DPLL.LOCK : 0) | OMAP.DPLL.BREAKLN;
    }

    /**
     * readPinConfig(offset)
     *
     * The pin configuration registers (FUNC_MUX_CTRL, PULL_DWN_CTRL, etc) have no effect on us.
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readPinConfig(offset)
    {
        return (offset < 0x84)? this.pinConfig[offset >> 2] : undefined;
    }

    /**
     * writePinConfig(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writePinConfig(offset, value)
    {
        if (offset >= 0x84) return false;
        this.pinConfig[offset >> 2] = value;
        return undefined;
    }

    /**
     * readDieID(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readDieID(offset)
    {
        switch (offset) {
        case 0x00:                      // DIE_ID_LSB
            return 0xc9581f0e|0;
        case 0x04:                      // DIE_ID_MSB
            return 0xa8858bfa|0;
        }
        return undefined;
    }

    /**
     * readJTAGID(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readJTAGID(offset)
    {
        switch (offset) {
        case 0x00:                      // JTAG_ID_LSB
            return this.f1510? 0x03310115 : 0x03310315;
        case 0x04:                      // JTAG_ID_MSB
            return (this.f1510? 0xfb47002f : 0xfb57402f)|0;
        }
        return undefined;
    }

    /**
     * readMPUI(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readMPUI(offset)
    {
        switch (offset) {
        case 0x00:                      // CTRL
            return this.mpuiCtrl;
        case 0x04:                      // DEBUG_ADDR
            return 0x01ffffff;
        case 0x08:                      // DEBUG_DATA
            return -1;
        case 0x0c:                      // DEBUG_FLAG
            return 0x00000800;
        case 0x10:                      // STATUS
        case 0x14:                      // DSP_STATUS
        case 0x18:                      // DSP_BOOT_CONFIG
            return 0;
        case 0x1c:                      // DSP_MPUI_CONFIG
            return 0x0000ffff;
        }
        return undefined;
    }

    /**
     * writeMPUI(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeMPUI(offset, value)
    {
        if (offset > 0x1c) return false;
        if (!offset) this.mpuiCtrl = value & 0x007fffff;
        return undefined;
    }

    /**
     * readTIPB(iBridge, offset)
     *
     * @this {OMAP}
     * @param {number} iBridge (0 for the private bridge, 1 for the public bridge)
     * @param {number} offset
     * @returns {number|undefined}
     */
    readTIPB(iBridge, offset)
    {
        if (offset < 0x10) return this.tipb[iBridge][offset >> 2];
        if (offset < 0x1c) return 0xffff;                       // ADDRESS_DBG, DATA_DEBUG_LOW, DATA_DEBUG_HIGH
        if (offset == 0x1c) return 0x00f8;                      // DEBUG_CNTR_SIG
        return undefined;
    }

    /**
     * writeTIPB(iBridge, offset, value)
     *
     * @this {OMAP}
     * @param {number} iBridge
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeTIPB(iBridge, offset, value)
    {
        if (offset > 0x1c) return false;
        if (offset < 0x10) {
            this.tipb[iBridge][offset >> 2] = value & [0xffff, 0x003f, 0x0003, 0x000f][offset >> 2];
        }
        return undefined;
    }

    /**
     * readTCMI(offset, fPeek)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readTCMI(offset, fPeek)
    {
        if (offset >= 0x44 || offset == 0x34 || offset == 0x38) return undefined;
        let value = this.tcmi[offset >> 2];
        /**
         * Bit 0 of EMIFF_SDRAM_CONFIG (the SDRAM self-refresh bit) clears itself.
         */
        if (offset == 0x20 && !fPeek) this.tcmi[offset >> 2] &= ~1;
        return value;
    }

    /**
     * writeTCMI(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeTCMI(offset, value)
    {
        if (offset >= 0x44 || offset == 0x34 || offset == 0x38) return false;
        this.tcmi[offset >> 2] = (offset == 0x0c)? ((value & 0xf) | 0x10) : value;
        return undefined;
    }

    /**
     * readCLKM(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readCLKM(offset)
    {
        let clkm = this.clkm;
        switch (offset) {
        case OMAP.CLKM.ARM_CKCTL:
            return clkm.ckctl;
        case OMAP.CLKM.ARM_IDLECT1:
            return clkm.idlect1;
        case OMAP.CLKM.ARM_IDLECT2:
            return clkm.idlect2;
        case OMAP.CLKM.ARM_EWUPCT:
            return clkm.ewupct;
        case OMAP.CLKM.ARM_RSTCT1:
            return clkm.rstct1;
        case OMAP.CLKM.ARM_RSTCT2:
            return clkm.rstct2;
        case OMAP.CLKM.ARM_SYSST:
            return (clkm.scheme << 11) | clkm.coldStart;
        case OMAP.CLKM.ARM_CKOUT1:
            return clkm.ckout1;
        case OMAP.CLKM.ARM_CKOUT2:
            return 0;
        }
        return undefined;
    }

    /**
     * writeCLKM(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeCLKM(offset, value)
    {
        let clkm = this.clkm;
        switch (offset) {
        case OMAP.CLKM.ARM_CKCTL:
            clkm.ckctl = value & 0x7fff;
            this.updateClocks();
            return;
        case OMAP.CLKM.ARM_IDLECT1:
            clkm.idlect1 = value & 0x0fff;
            /**
             * Setting SETARM_IDLE stops the CPU until the next interrupt.
             */
            if (value & OMAP.CLKM.IDLECT1_SETARM_IDLE) this.cpu.halt();
            return;
        case OMAP.CLKM.ARM_IDLECT2:
            clkm.idlect2 = value & 0x07ff;
            return;
        case OMAP.CLKM.ARM_EWUPCT:
            clkm.ewupct = value & 0x003f;
            return;
        case OMAP.CLKM.ARM_RSTCT1:
            clkm.rstct1 = value & 0x0007;
            if (value & 0x9) {
                /**
                 * A software reset: reset ourselves and the CPU, and record the fact that it wasn't a cold start.
                 */
                this.printf(MESSAGE.PORTS, "%#010x: software reset\n", this.cpu.regPCLast);
                this.reset();
                this.clkm.coldStart = 0xa;
                this.cpu.resetRegs();
            }
            return;
        case OMAP.CLKM.ARM_RSTCT2:
            clkm.rstct2 = value & 0x0001;
            return;
        case OMAP.CLKM.ARM_SYSST:
            clkm.scheme = (value >> 11) & 7;
            clkm.coldStart &= value & 0x3f;
            return;
        case OMAP.CLKM.ARM_CKOUT1:
            clkm.ckout1 = value & 0x003f;
            return;
        case OMAP.CLKM.ARM_CKOUT2:
            return;
        }
        return false;
    }

    /**
     * readDPLL(iDPLL, offset)
     *
     * @this {OMAP}
     * @param {number} iDPLL (0-2)
     * @param {number} offset
     * @returns {number|undefined}
     */
    readDPLL(iDPLL, offset)
    {
        return offset? undefined : this.dpll[iDPLL];
    }

    /**
     * writeDPLL(iDPLL, offset, value)
     *
     * @this {OMAP}
     * @param {number} iDPLL (0-2)
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeDPLL(iDPLL, offset, value)
    {
        if (offset) return false;
        this.dpll[iDPLL] = this.lockDPLL(value);
        this.updateClocks();
        return undefined;
    }

    /**
     * readUART(iUART, offset, fPeek)
     *
     * The UARTs are 16550-compatible, with one register every 4 bytes.  All we do is capture their output, so
     * the transmitter is always ready and the receiver never has anything.
     *
     * @this {OMAP}
     * @param {number} iUART (0-2)
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readUART(iUART, offset, fPeek)
    {
        let uart = this.uarts[iUART], iReg = offset >> 2;
        if (iReg >= uart.regs.length) return undefined;
        let fDLAB = uart.regs[OMAP.UART.LCR] & OMAP.UART.LCR_DLAB;
        switch (iReg) {
        case OMAP.UART.RHR:
            return fDLAB? uart.dll : 0;
        case OMAP.UART.IER:
            return fDLAB? uart.dlh : uart.regs[iReg];
        case OMAP.UART.IIR:
            return 0x01;                // no interrupt pending
        case OMAP.UART.LSR:
            return 0x60;                // transmitter empty
        case OMAP.UART.MSR:
            return 0;
        }
        return uart.regs[iReg];
    }

    /**
     * writeUART(iUART, offset, value)
     *
     * @this {OMAP}
     * @param {number} iUART (0-2)
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeUART(iUART, offset, value)
    {
        let uart = this.uarts[iUART], iReg = offset >> 2;
        if (iReg >= uart.regs.length) return false;
        let fDLAB = uart.regs[OMAP.UART.LCR] & OMAP.UART.LCR_DLAB;
        value &= 0xff;
        if (iReg == OMAP.UART.THR) {
            if (fDLAB) {
                uart.dll = value;
            } else if (this.serialHandler) {
                this.serialHandler(iUART, value);
            } else {
                /**
                 * With no one to give the output to, we display it, a line at a time.
                 */
                if (value == 0x0a || uart.output.length >= 256) {
                    this.printf("UART%d: %s\n", iUART + 1, uart.output);
                    uart.output = "";
                } else if (value != 0x0d) {
                    uart.output += String.fromCharCode(value);
                }
            }
        }
        else if (iReg == OMAP.UART.IER && fDLAB) {
            uart.dlh = value;
        }
        else {
            uart.regs[iReg] = value;
        }
        return undefined;
    }

    /**
     * setSerialHandler(func)
     *
     * @this {OMAP}
     * @param {function(number,number)|null} func (called with a UART number (0-2) and a byte)
     */
    setSerialHandler(func)
    {
        this.serialHandler = func;
    }

    /**
     * setGPIO(line, fHigh)
     *
     * Called by whatever is connected to one of the 16 GPIO pins to change its level.
     *
     * NOTE: An interrupt is generated only if the pin's direction bit is SET, which looks backwards (zero
     * means "output" when driving a pin), but it matches QEMU, which was tested with the Tungsten|E.
     *
     * @this {OMAP}
     * @param {number} line (0-15)
     * @param {boolean|number} fHigh
     */
    setGPIO(line, fHigh)
    {
        let gpio = this.gpio, bit = 1 << line, prev = gpio.inputs;
        gpio.inputs = fHigh? (prev | bit) : (prev & ~bit);
        if (((gpio.edge & gpio.inputs & ~prev) | (~gpio.edge & ~gpio.inputs & prev)) & bit & gpio.dir & ~gpio.mask) {
            gpio.ints |= bit;
            this.setIRQ(OMAP.IRQ.GPIO_BANK1, true);
        }
    }

    /**
     * addGPIOHandler(line, func)
     *
     * @this {OMAP}
     * @param {number} line (0-15)
     * @param {function(boolean)} func (called whenever the level of the GPIO output changes)
     */
    addGPIOHandler(line, func)
    {
        this.gpioHandlers[line] = func;
    }

    /**
     * notifyOutputs(handlers, diff, levels)
     *
     * @this {OMAP}
     * @param {Array} handlers
     * @param {number} diff (the outputs that have changed)
     * @param {number} levels (the new levels of all outputs)
     */
    notifyOutputs(handlers, diff, levels)
    {
        for (let line = 0; diff; line++, diff >>>= 1) {
            if ((diff & 1) && handlers[line]) handlers[line](!!((levels >>> line) & 1));
        }
    }

    /**
     * readGPIO(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readGPIO(offset)
    {
        let gpio = this.gpio;
        switch (offset) {
        case 0x00:                      // DATA_INPUT
            return gpio.inputs & gpio.pins;
        case 0x04:                      // DATA_OUTPUT
            return gpio.outputs;
        case 0x08:                      // DIRECTION_CONTROL
            return gpio.dir;
        case 0x0c:                      // INTERRUPT_CONTROL
            return gpio.edge;
        case 0x10:                      // INTERRUPT_MASK
            return gpio.mask;
        case 0x14:                      // INTERRUPT_STATUS
            return gpio.ints;
        case 0x18:                      // PIN_CONTROL
            return gpio.pins;
        }
        return undefined;
    }

    /**
     * writeGPIO(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeGPIO(offset, value)
    {
        let gpio = this.gpio, diff;
        value &= 0xffff;
        switch (offset) {
        case 0x00:                      // DATA_INPUT (read-only)
            return;
        case 0x04:                      // DATA_OUTPUT
            diff = (gpio.outputs ^ value) & ~gpio.dir;
            gpio.outputs = value;
            this.notifyOutputs(this.gpioHandlers, diff, value);
            return;
        case 0x08:                      // DIRECTION_CONTROL
            diff = gpio.outputs & (gpio.dir ^ value);
            gpio.dir = value;
            this.notifyOutputs(this.gpioHandlers, diff, gpio.outputs & ~gpio.dir);
            return;
        case 0x0c:                      // INTERRUPT_CONTROL
            gpio.edge = value;
            return;
        case 0x10:                      // INTERRUPT_MASK
            gpio.mask = value;
            return;
        case 0x14:                      // INTERRUPT_STATUS
            gpio.ints &= ~value;
            if (!gpio.ints) this.setIRQ(OMAP.IRQ.GPIO_BANK1, false);
            return;
        case 0x18:                      // PIN_CONTROL
            gpio.pins = value;
            return;
        }
        return false;
    }

    /**
     * setMPUIO(line, fHigh)
     *
     * Called by whatever is connected to one of the 16 MPUIO pins to change its level.
     *
     * @this {OMAP}
     * @param {number} line (0-15)
     * @param {boolean|number} fHigh
     */
    setMPUIO(line, fHigh)
    {
        let mpuio = this.mpuio, bit = 1 << line, prev = mpuio.inputs;
        mpuio.inputs = fHigh? (prev | bit) : (prev & ~bit);
        if (bit & mpuio.dir & ~mpuio.mask) {
            if ((mpuio.edge & mpuio.inputs & ~prev) | (~mpuio.edge & ~mpuio.inputs & prev)) {
                mpuio.ints |= bit;
                this.setIRQ(OMAP.IRQ.MPUIO, true);
            }
            if ((mpuio.event & 1) && (mpuio.event >> 1) == line) mpuio.latch = mpuio.inputs;
        }
    }

    /**
     * addMPUIOHandler(line, func)
     *
     * @this {OMAP}
     * @param {number} line (0-15)
     * @param {function(boolean)} func (called whenever the level of the MPUIO output changes)
     */
    addMPUIOHandler(line, func)
    {
        this.mpuioHandlers[line] = func;
    }

    /**
     * setKey(row, col, fDown)
     *
     * Presses or releases a key in the 5x8 keyboard matrix that's connected to the MPUIO.
     *
     * @this {OMAP}
     * @param {number} row (0-4)
     * @param {number} col (0-7)
     * @param {boolean} fDown
     */
    setKey(row, col, fDown)
    {
        let buttons = this.mpuio.buttons;
        buttons[row] = fDown? (buttons[row] | (1 << col)) : (buttons[row] & ~(1 << col));
        this.updateKeys();
    }

    /**
     * updateKeys()
     *
     * Updates the keyboard row latch: a row reads as zero if any key in that row is down and that key's column
     * is being driven low.
     *
     * @this {OMAP}
     */
    updateKeys()
    {
        let mpuio = this.mpuio, rows = 0, cols = ~mpuio.cols & 0xff;
        for (let row = 0; row < 5; row++) {
            if (mpuio.buttons[row] & cols) rows |= 1 << row;
        }
        this.setIRQ(OMAP.IRQ.KEYBOARD, rows && !mpuio.kbdMask);
        mpuio.rowLatch = ~rows & 0x1f;
    }

    /**
     * readMPUIO(offset, fPeek)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readMPUIO(offset, fPeek)
    {
        let mpuio = this.mpuio, value;
        switch (offset) {
        case 0x00:                      // INPUT_LATCH
            return mpuio.inputs;
        case 0x04:                      // OUTPUT_REG
            return mpuio.outputs;
        case 0x08:                      // IO_CNTL
            return mpuio.dir;
        case 0x0c:                      // (reserved, but PalmOS uses it)
            return 0;
        case 0x10:                      // KBR_LATCH
            return mpuio.rowLatch;
        case 0x14:                      // KBC_REG
            return mpuio.cols;
        case 0x18:                      // GPIO_EVENT_MODE_REG
            return mpuio.event;
        case 0x1c:                      // GPIO_INT_EDGE_REG
            return mpuio.edge;
        case 0x20:                      // KBD_INT
            return ((~mpuio.rowLatch & 0x1f) && !mpuio.kbdMask)? 1 : 0;
        case 0x24:                      // GPIO_INT
            value = mpuio.ints;
            if (!fPeek) {
                mpuio.ints &= mpuio.mask;
                if (value) this.setIRQ(OMAP.IRQ.MPUIO, false);
            }
            return value;
        case 0x28:                      // KBD_MASKIT
            return mpuio.kbdMask;
        case 0x2c:                      // GPIO_MASKIT
            return mpuio.mask;
        case 0x30:                      // GPIO_DEBOUNCING_REG
            return mpuio.debounce;
        case 0x34:                      // GPIO_LATCH_REG
            return mpuio.latch;
        }
        return undefined;
    }

    /**
     * writeMPUIO(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeMPUIO(offset, value)
    {
        let mpuio = this.mpuio, diff;
        value &= 0xffff;
        switch (offset) {
        case 0x00:                      // INPUT_LATCH (read-only)
        case 0x0c:                      // (reserved)
        case 0x10:                      // KBR_LATCH (read-only)
        case 0x20:                      // KBD_INT (read-only)
        case 0x24:                      // GPIO_INT (read-only)
        case 0x34:                      // GPIO_LATCH_REG (read-only)
            return;
        case 0x04:                      // OUTPUT_REG
            diff = (mpuio.outputs ^ value) & ~mpuio.dir;
            mpuio.outputs = value;
            this.notifyOutputs(this.mpuioHandlers, diff, value);
            return;
        case 0x08:                      // IO_CNTL
            diff = mpuio.outputs & (mpuio.dir ^ value);
            mpuio.dir = value;
            this.notifyOutputs(this.mpuioHandlers, diff, mpuio.outputs & ~mpuio.dir);
            return;
        case 0x14:                      // KBC_REG
            mpuio.cols = value & 0xff;
            this.updateKeys();
            return;
        case 0x18:                      // GPIO_EVENT_MODE_REG
            mpuio.event = value & 0x1f;
            return;
        case 0x1c:                      // GPIO_INT_EDGE_REG
            mpuio.edge = value;
            return;
        case 0x28:                      // KBD_MASKIT
            mpuio.kbdMask = value & 1;
            this.updateKeys();
            return;
        case 0x2c:                      // GPIO_MASKIT
            mpuio.mask = value;
            return;
        case 0x30:                      // GPIO_DEBOUNCING_REG
            mpuio.debounce = value & 0x1ff;
            return;
        }
        return false;
    }

    /**
     * attachUWire(chipSelect, slave)
     *
     * @this {OMAP}
     * @param {number} chipSelect (0-3)
     * @param {{send: function(number), receive: function():number}} slave
     */
    attachUWire(chipSelect, slave)
    {
        this.uwireSlaves[chipSelect] = slave;
    }

    /**
     * startUWire()
     *
     * Performs a uWire transfer, which sends some number of bits to the selected device and/or receives
     * some number of bits from it; our transfers are instantaneous.
     *
     * @this {OMAP}
     */
    startUWire()
    {
        let uwire = this.uwire;
        let slave = (uwire.control & OMAP.UWIRE.CSR_CS_CMD)? this.uwireSlaves[(uwire.control >> 10) & 0x3] : null;
        let nBits = (uwire.control >> 5) & 0x1f;
        if (nBits) {
            if (slave) slave.send(uwire.txbuf >> (16 - nBits));
            uwire.control &= ~OMAP.UWIRE.CSR_CSRB;
        }
        nBits = uwire.control & 0x1f;
        if (nBits) {
            if (slave) uwire.rxbuf = slave.receive() & 0xffff;
            uwire.control |= OMAP.UWIRE.CSR_RDRB;
        }
    }

    /**
     * readUWire(offset, fPeek)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readUWire(offset, fPeek)
    {
        let uwire = this.uwire;
        switch (offset) {
        case 0x00:                      // RDR
            if (!fPeek) uwire.control &= ~OMAP.UWIRE.CSR_RDRB;
            return uwire.rxbuf;
        case 0x04:                      // CSR
            return uwire.control;
        }
        if (offset >= 0x08 && offset <= 0x18) return uwire.setup[(offset - 0x08) >> 2];
        return undefined;
    }

    /**
     * writeUWire(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeUWire(offset, value)
    {
        let uwire = this.uwire;
        switch (offset) {
        case 0x00:                      // TDR
            uwire.txbuf = value & 0xffff;
            /**
             * If AUTO_TX_EN is set, then writing the data starts the transfer.
             */
            if ((uwire.setup[4] & 0x4) && ((uwire.setup[4] & 0x8) || (uwire.control & OMAP.UWIRE.CSR_CS_CMD))) {
                uwire.control |= OMAP.UWIRE.CSR_CSRB;
                this.startUWire();
            }
            return;
        case 0x04:                      // CSR
            uwire.control = value & 0x1fff;
            if (value & OMAP.UWIRE.CSR_START) this.startUWire();
            return;
        }
        if (offset >= 0x08 && offset <= 0x18) {
            let i = (offset - 0x08) >> 2;
            uwire.setup[i] = value & [0x003f, 0x0fc0, 0x0003, 0x0001, 0x000f][i];
            return;
        }
        return false;
    }

    /**
     * getRTC(i)
     *
     * @this {OMAP}
     * @param {number} i (0 for seconds, 1 for minutes, 2 for hours, 3 for day, 4 for month, 5 for year, 6 for weekday)
     * @returns {number}
     */
    getRTC(i)
    {
        let date = new Date(this.rtc.ms);
        switch (i) {
        case 0:
            return date.getUTCSeconds();
        case 1:
            return date.getUTCMinutes();
        case 2:
            return date.getUTCHours();
        case 3:
            return date.getUTCDate();
        case 4:
            return date.getUTCMonth() + 1;
        case 5:
            return date.getUTCFullYear() % 100;
        }
        return date.getUTCDay();
    }

    /**
     * setRTC(i, n)
     *
     * @this {OMAP}
     * @param {number} i (see getRTC())
     * @param {number} n
     */
    setRTC(i, n)
    {
        let date = new Date(this.rtc.ms);
        switch (i) {
        case 0:
            date.setUTCSeconds(n);
            break;
        case 1:
            date.setUTCMinutes(n);
            break;
        case 2:
            date.setUTCHours(n);
            break;
        case 3:
            date.setUTCDate(n);
            break;
        case 4:
            date.setUTCMonth(n - 1);
            break;
        case 5:
            date.setUTCFullYear(date.getUTCFullYear() - (date.getUTCFullYear() % 100) + n);
            break;
        }
        this.rtc.ms = date.getTime();
    }

    /**
     * onRTC()
     *
     * Called once every second (of machine time, not real time).
     *
     * @this {OMAP}
     */
    onRTC()
    {
        let rtc = this.rtc;
        if (rtc.fRound) {
            let sec = this.getRTC(0);
            rtc.ms += (sec < 30? -sec : 60 - sec) * 1000;
            rtc.fRound = false;
        }
        let sec = this.getRTC(0), min = this.getRTC(1), hour = this.getRTC(2);
        if (rtc.interrupts & 0x08) {
            let a = rtc.alarm;
            if (a[0] == sec && a[1] == min && a[2] == hour && a[3] == this.getRTC(3) && a[4] == this.getRTC(4) && a[5] == this.getRTC(5)) {
                rtc.status |= 0x40;
                this.setIRQ(OMAP.IRQ.RTC_ALARM, true);
            }
        }
        if (rtc.interrupts & 0x04) {
            /**
             * The periodic interrupt can be every second, minute, hour, or day.
             */
            let every = rtc.interrupts & 0x3;
            if (!every || !sec && (every == 1 || !min && (every == 2 || !hour))) {
                rtc.status |= 0x04 << every;
                this.pulseIRQ(OMAP.IRQ.RTC_TIMER);
            }
        }
        if (rtc.fRunning) rtc.ms += 1000;
        this.armTimer(this.timerRTC, this.time.nCyclesPerSecond);
    }

    /**
     * readRTC(offset, fPeek)
     *
     * All the time and date registers are BCD.
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readRTC(offset, fPeek)
    {
        let rtc = this.rtc, value;
        let toBCD = (n) => (((n / 10)|0) << 4) | (n % 10);
        let toHours = (hour) => rtc.fPM? ((hour > 11? 0x80 : 0) | toBCD(((hour + 11) % 12) + 1)) : toBCD(hour);
        switch (offset) {
        case 0x00:                      // SECONDS_REG
        case 0x04:                      // MINUTES_REG
        case 0x0c:                      // DAYS_REG
        case 0x10:                      // MONTHS_REG
        case 0x14:                      // YEARS_REG
            return toBCD(this.getRTC(offset >> 2));
        case 0x08:                      // HOURS_REG
            return toHours(this.getRTC(2));
        case 0x18:                      // WEEK_REG
            return this.getRTC(6);
        case 0x20:                      // ALARM_SECONDS_REG
        case 0x24:                      // ALARM_MINUTES_REG
        case 0x2c:                      // ALARM_DAYS_REG
        case 0x30:                      // ALARM_MONTHS_REG
        case 0x34:                      // ALARM_YEARS_REG
            return toBCD(rtc.alarm[(offset - 0x20) >> 2]);
        case 0x28:                      // ALARM_HOURS_REG
            return toHours(rtc.alarm[2]);
        case 0x40:                      // RTC_CTRL_REG
            return (rtc.fPM? 0x8 : 0) | (rtc.fAutoComp? 0x4 : 0) | (rtc.fRound? 0x2 : 0) | (rtc.fRunning? 0x1 : 0);
        case 0x44:                      // RTC_STATUS_REG
            value = rtc.status;
            if (!fPeek) rtc.status &= ~0x3d;
            return value;
        case 0x48:                      // RTC_INTERRUPTS_REG
            return rtc.interrupts;
        case 0x4c:                      // RTC_COMP_LSB_REG
            return rtc.comp & 0xff;
        case 0x50:                      // RTC_COMP_MSB_REG
            return (rtc.comp >> 8) & 0xff;
        }
        return undefined;
    }

    /**
     * writeRTC(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeRTC(offset, value)
    {
        let rtc = this.rtc;
        let fromBCD = (n) => ((n >> 4) & 0xf) * 10 + (n & 0xf);
        let fromHours = (n) => rtc.fPM? ((fromBCD(n & 0x3f) % 12) + ((n & 0x80)? 12 : 0)) : fromBCD(n & 0x3f);
        value &= 0xff;
        switch (offset) {
        case 0x00:                      // SECONDS_REG
        case 0x04:                      // MINUTES_REG
        case 0x0c:                      // DAYS_REG
        case 0x10:                      // MONTHS_REG
        case 0x14:                      // YEARS_REG
            this.setRTC(offset >> 2, fromBCD(value));
            return;
        case 0x08:                      // HOURS_REG
            this.setRTC(2, fromHours(value));
            return;
        case 0x18:                      // WEEK_REG (which we always derive from the date)
            return;
        case 0x20:                      // ALARM_SECONDS_REG
        case 0x24:                      // ALARM_MINUTES_REG
        case 0x2c:                      // ALARM_DAYS_REG
        case 0x30:                      // ALARM_MONTHS_REG
        case 0x34:                      // ALARM_YEARS_REG
            rtc.alarm[(offset - 0x20) >> 2] = fromBCD(value);
            return;
        case 0x28:                      // ALARM_HOURS_REG
            rtc.alarm[2] = fromHours(value);
            return;
        case 0x40:                      // RTC_CTRL_REG
            rtc.fPM = !!(value & 0x8);
            rtc.fAutoComp = !!(value & 0x4);
            rtc.fRound = !!(value & 0x2);
            rtc.fRunning = !!(value & 0x1);
            rtc.status = (rtc.status & ~0x02) | (rtc.fRunning? 0x02 : 0);
            return;
        case 0x44:                      // RTC_STATUS_REG (writing 1 clears the alarm bit; writing 0 clears the power-up bit)
            rtc.status &= ~((value & 0xc0) ^ 0x80);
            this.setIRQ(OMAP.IRQ.RTC_ALARM, rtc.status & 0x40);
            return;
        case 0x48:                      // RTC_INTERRUPTS_REG
            rtc.interrupts = value;
            return;
        case 0x4c:                      // RTC_COMP_LSB_REG
            rtc.comp = (rtc.comp & 0xff00) | value;
            return;
        case 0x50:                      // RTC_COMP_MSB_REG
            rtc.comp = (rtc.comp & 0x00ff) | (value << 8);
            return;
        }
        return false;
    }

    /**
     * updateLCDInterrupts()
     *
     * @this {OMAP}
     */
    updateLCDInterrupts()
    {
        let lcd = this.lcd;
        this.setIRQ(OMAP.IRQ.LCD_CTRL, lcd.fFrameDone && (lcd.interrupts & 0x1) || lcd.fPaletteDone && (lcd.interrupts & 0x2) || lcd.fSyncError);
    }

    /**
     * updateLCD()
     *
     * Called whenever the LCD controller is enabled or disabled.
     *
     * @this {OMAP}
     */
    updateLCD()
    {
        let lcd = this.lcd, dma = this.dmaLCD;
        if (!lcd.fEnabled) {
            dma.iFrame = -1;
            lcd.fSyncError = false;
            if (lcd.plm != 1) lcd.fFrameDone = true;
            this.updateLCDInterrupts();
            return;
        }
        if (dma.iFrame < 0) {
            lcd.fFrameDone = lcd.fPaletteDone = false;
            dma.iFrame = 0;
        }
        if (lcd.plm != 2 && !lcd.fPaletteDone) {
            lcd.fPaletteDone = true;
            this.updateLCDInterrupts();
        }
        this.armTimer(this.timerLCD, Math.ceil(this.time.nCyclesPerSecond / OMAP.LCD_REFRESH));
    }

    /**
     * onLCDFrame()
     *
     * Called at the LCD's refresh rate while the LCD controller is enabled; every time the LCD DMA channel
     * finishes sending a frame to the controller, it can generate an interrupt.
     *
     * @this {OMAP}
     */
    onLCDFrame()
    {
        let lcd = this.lcd, dma = this.dmaLCD;
        if (!lcd.fEnabled || dma.iFrame < 0) return;
        dma.condition |= 1 << dma.iFrame;
        if (dma.interrupts & 0x1) this.setIRQ(OMAP.IRQ.DMA_LCD, true);
        if (dma.fDual) dma.iFrame ^= 1;
        this.armTimer(this.timerLCD, Math.ceil(this.time.nCyclesPerSecond / OMAP.LCD_REFRESH));
    }

    /**
     * getLCDFrame()
     *
     * Returns a description of what the LCD is currently displaying, or null if it's off.  A frame buffer
     * begins with a palette (32 bytes, or 512 bytes for 8bpp and up), whose first entry also selects the number
     * of bits per pixel; the pixels follow.
     *
     * @this {OMAP}
     * @returns {{width: number, height: number, bpp: number, fTFT: boolean, addr: number, palette: Uint16Array}|null}
     */
    getLCDFrame()
    {
        let lcd = this.lcd, dma = this.dmaLCD;
        if (!lcd.fEnabled || lcd.plm == 1 || dma.iFrame < 0) return null;
        let addr = dma.top[dma.fDual? dma.iFrame ^ 1 : 0];
        let bus = this.bus, palette = new Uint16Array(256);
        let code = (bus.readDirect(addr + 1) >> 4) & 0x7;
        let bpp = [0, 2, 4, 8, 16, 16, 16, 16][code];
        if (!bpp) return null;
        let cbPalette = (code >= 3)? 0x200 : 0x20;
        for (let i = 0; i < (cbPalette >> 1); i++) {
            palette[i] = bus.readDirect(addr + i * 2) | (bus.readDirect(addr + i * 2 + 1) << 8);
        }
        return {width: lcd.width, height: lcd.height, bpp, fTFT: lcd.fTFT, addr: (addr + cbPalette)|0, palette};
    }

    /**
     * renderLCD(data)
     *
     * Converts the LCD's current frame to 32-bit RGBA pixels (eg, the data of a canvas ImageData object).
     *
     * @this {OMAP}
     * @param {Uint8ClampedArray|Uint8Array} data (must be large enough for the LCD's width * height * 4)
     * @returns {{width: number, height: number, bpp: number}|null} (null if the LCD is off, or data is too small)
     */
    renderLCD(data)
    {
        let frame = this.getLCDFrame();
        if (!frame) return null;
        let width = frame.width, height = frame.height, bpp = frame.bpp;
        let nPixels = width * height;
        if (data.length < nPixels * 4) return null;

        /**
         * Copy the frame out of memory first, one Bus block at a time, since reading it a byte at a time
         * through the Bus would be far too slow to do at the LCD's refresh rate.
         */
        let cb = (nPixels * bpp) >> 3;
        if (!this.abFrame || this.abFrame.length != cb) this.abFrame = new Uint8Array(cb);
        let ab = this.abFrame, bus = this.bus;
        for (let off = 0, addr = frame.addr; off < cb; ) {
            let block = bus.blocks[addr >>> bus.blockShift], offBlock = addr & bus.blockLimit;
            let n = Math.min(bus.blockSize - offBlock, cb - off);
            if (block.values && block.values.subarray) {
                ab.set(block.values.subarray(offBlock, offBlock + n), off);
            } else {
                for (let i = 0; i < n; i++) ab[off + i] = block.readDirect(offBlock + i);
            }
            off += n;
            addr = (addr + n)|0;
        }

        let i = 0, v;
        if (bpp == 16) {
            for (let off = 0; off < cb; off += 2) {
                v = ab[off] | (ab[off + 1] << 8);
                if (frame.fTFT) {       // 5:6:5
                    data[i++] = (v >> 8) & 0xf8;
                    data[i++] = (v >> 3) & 0xfc;
                    data[i++] = (v << 3) & 0xf8;
                } else {                // 4:4:4
                    data[i++] = (v >> 4) & 0xf0;
                    data[i++] = v & 0xf0;
                    data[i++] = (v << 4) & 0xf0;
                }
                data[i++] = 0xff;
            }
        } else {
            /**
             * Palette entries are 4:4:4, and the leftmost pixel in every byte is in the low bit(s).
             */
            let palette = frame.palette;
            let mask = (1 << bpp) - 1;
            for (let n = 0, off = 0, shift = 0; n < nPixels; n++) {
                v = palette[(ab[off] >> shift) & mask];
                data[i++] = (v >> 4) & 0xf0;
                data[i++] = v & 0xf0;
                data[i++] = (v << 4) & 0xf0;
                data[i++] = 0xff;
                shift += bpp;
                if (shift == 8) {
                    shift = 0;
                    off++;
                }
            }
        }
        return {width, height, bpp};
    }

    /**
     * readLCD(offset)
     *
     * @this {OMAP}
     * @param {number} offset
     * @returns {number|undefined}
     */
    readLCD(offset)
    {
        let lcd = this.lcd;
        switch (offset) {
        case 0x00:                      // LCD_CONTROL
            return (lcd.fTFT? 0x00800080 : 0) | (lcd.plm << 20) | (lcd.interrupts << 3) | (lcd.fMono? 0x2 : 0) | (lcd.fEnabled? 0x1 : 0) | lcd.ctrl | 0xfe000c34;
        case 0x04:                      // LCD_TIMING0
            return (lcd.timing[0] << 10) | (lcd.width - 1) | 0x0000000f;
        case 0x08:                      // LCD_TIMING1
            return (lcd.timing[1] << 10) | (lcd.height - 1);
        case 0x0c:                      // LCD_TIMING2
            return lcd.timing[2] | 0xfc000000;
        case 0x10:                      // LCD_STATUS
            return (lcd.fPaletteDone? 0x40 : 0) | (lcd.fSyncError? 0x04 : 0) | (lcd.fFrameDone? 0x01 : 0);
        case 0x14:                      // LCD_SUBPANEL
            return lcd.subpanel;
        }
        return undefined;
    }

    /**
     * writeLCD(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeLCD(offset, value)
    {
        let lcd = this.lcd;
        switch (offset) {
        case 0x00:                      // LCD_CONTROL
            lcd.plm = (value >> 20) & 0x3;
            lcd.fTFT = !!(value & 0x80);
            lcd.interrupts = (value >> 3) & 0x3;
            lcd.fMono = !!(value & 0x2);
            lcd.ctrl = value & 0x01cff300;
            if (lcd.fEnabled != !!(value & 0x1)) {
                lcd.fEnabled = !!(value & 0x1);
                this.updateLCD();
            }
            return;
        case 0x04:                      // LCD_TIMING0
            lcd.timing[0] = value >>> 10;
            lcd.width = (value & 0x3ff) + 1;
            return;
        case 0x08:                      // LCD_TIMING1
            lcd.timing[1] = value >>> 10;
            lcd.height = (value & 0x3ff) + 1;
            return;
        case 0x0c:                      // LCD_TIMING2
            lcd.timing[2] = value;
            return;
        case 0x10:                      // LCD_STATUS
            return;
        case 0x14:                      // LCD_SUBPANEL
            lcd.subpanel = value & 0xa1ffffff;
            return;
        }
        return false;
    }

    /**
     * readDMA(offset, fPeek)
     *
     * The only part of the DMA controller that we implement is the LCD channel, which continuously sends one
     * (or two) frame buffers to the LCD controller; all it does here is record where those frame buffers are.
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readDMA(offset, fPeek)
    {
        if (offset < OMAP.DMA.CHANNELS * 0x40) return this.readDMAChannel(offset >> 6, offset & 0x3f, fPeek);
        if (offset == 0x400) return this.dma.gcr;
        let dma = this.dmaLCD;
        if (offset == 0x300) {          // SYS_DMA_LCD_CTRL
            let value = (dma.fSRAM? 0x40 : 0) | (dma.condition << 3) | (dma.interrupts << 1) | (dma.fDual? 0x1 : 0);
            if (!fPeek) {
                dma.condition = 0;
                this.setIRQ(OMAP.IRQ.DMA_LCD, false);
            }
            return value;
        }
        if (offset >= 0x302 && offset <= 0x310) {
            /**
             * SYS_DMA_LCD_TOP_F1_L, TOP_F1_U, BOT_F1_L, BOT_F1_U, and then the same four registers for frame 2.
             */
            let i = (offset - 0x302) >> 1;
            let a = (i & 2)? dma.bottom : dma.top;
            return (a[i >> 2] >>> ((i & 1) << 4)) & 0xffff;
        }
        return undefined;
    }

    /**
     * writeDMA(offset, value)
     *
     * @this {OMAP}
     * @param {number} offset
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeDMA(offset, value)
    {
        if (offset < OMAP.DMA.CHANNELS * 0x40) return this.writeDMAChannel(offset >> 6, offset & 0x3f, value);
        if (offset == 0x400) {
            this.dma.gcr = value;
            return undefined;
        }
        let dma = this.dmaLCD;
        if (offset == 0x300) {          // SYS_DMA_LCD_CTRL
            dma.fSRAM = !!(value & 0x40);
            dma.condition = 0;
            dma.interrupts = (value >> 1) & 0x1;
            dma.fDual = !!(value & 0x1);
            return undefined;
        }
        if (offset >= 0x302 && offset <= 0x310) {
            let i = (offset - 0x302) >> 1, a = (i & 2)? dma.bottom : dma.top;
            if (i & 1) {
                a[i >> 2] = (a[i >> 2] & 0x0000ffff) | (value << 16);
            } else {
                a[i >> 2] = (a[i >> 2] & ~0xffff) | (value & 0xffff);
            }
            return undefined;
        }
        return false;
    }

    /**
     * updateDMAInterrupts()
     *
     * There are 9 DMA channels but only 6 DMA interrupts, so channels 6, 7, and 8 share the interrupts of
     * channels 0, 1, and 2.
     *
     * @this {OMAP}
     */
    updateDMAInterrupts()
    {
        let channels = this.dma.channels;
        for (let i = 0; i < 6; i++) {
            if (channels[i].status | (i < 3? channels[i + 6].status : 0)) this.setIRQ(OMAP.IRQ.DMA_CH0 + i, true);
        }
    }

    /**
     * startDMA(iChannel)
     *
     * Called when a DMA channel is enabled.  A channel that's synchronized to a peripheral waits for that
     * peripheral to request data, and since none of our peripherals do that (yet), such a channel just stays
     * enabled; otherwise, the entire transfer happens immediately.
     *
     * A transfer consists of some number of "frames", each of which is some number of "elements" (of 1, 2, or
     * 4 bytes); the source and destination addresses can each be constant, or incremented after every element,
     * or adjusted after every element (and every frame) by the amounts in the index registers.
     *
     * @this {OMAP}
     * @param {number} iChannel
     */
    startDMA(iChannel)
    {
        let ch = this.dma.channels[iChannel], bus = this.bus;
        if (!ch.elements || !ch.frames) return;
        if (ch.ccr & OMAP.DMA.CCR_SYNC) {
            /**
             * The only peripheral whose requests we simulate is McBSP1's transmitter, which is how PalmOS
             * plays audio: it requests one element per sample, so a block takes a predictable amount of time.
             */
            if ((ch.ccr & OMAP.DMA.CCR_SYNC) == OMAP.DMA.SYNC_MCBSP1_TX) this.armAudio(ch);
            return;
        }

        let cb = 1 << (ch.csdp & 0x3);
        if (cb > 4) cb = 4;
        let addrs = [ch.src, ch.dest], deltaElement = [0, 0], deltaFrame = [0, 0];
        for (let i = 0; i < 2; i++) {
            switch ((ch.ccr >> (12 + i * 2)) & 0x3) {
            case 0x1:                   // post-incremented
                deltaElement[i] = cb;
                break;
            case 0x2:                   // single-indexed
                deltaElement[i] = cb + ch.elementIndex - 1;
                break;
            case 0x3:                   // double-indexed
                deltaElement[i] = cb + ch.elementIndex - 1;
                deltaFrame[i] = ch.frameIndex - ch.elementIndex;
                break;
            }
        }
        for (let frame = 0; frame < ch.frames; frame++) {
            for (let element = 0; element < ch.elements; element++) {
                let src = addrs[0], dest = addrs[1];
                if (cb == 1) {
                    bus.writeData(dest, bus.readData(src));
                } else if (cb == 2) {
                    bus.writePair(dest, bus.readPair(src));
                } else {
                    bus.writeQuad(dest, bus.readQuad(src));
                }
                addrs[0] = (src + deltaElement[0])|0;
                addrs[1] = (dest + deltaElement[1])|0;
            }
            addrs[0] = (addrs[0] + deltaFrame[0])|0;
            addrs[1] = (addrs[1] + deltaFrame[1])|0;
        }
        ch.cpc = addrs[1] & 0xffff;
        ch.status |= ch.interrupts & (OMAP.DMA.CSR_HALF_FRAME | OMAP.DMA.CSR_FRAME | OMAP.DMA.CSR_LAST_FRAME | OMAP.DMA.CSR_BLOCK);
        /**
         * The transfer is complete, so the channel disables itself (even if it's set to "auto-initialize",
         * since an unsynchronized transfer that restarted itself would never end).
         */
        ch.ccr &= ~OMAP.DMA.CCR_ENABLE;
        this.updateDMAInterrupts();
    }

    /**
     * armAudio(ch)
     *
     * @this {OMAP}
     * @param {Object} ch (a DMA channel that's synchronized to McBSP1's transmitter)
     */
    armAudio(ch)
    {
        let nSamples = ch.elements * ch.frames;
        this.armTimer(this.timerAudio, Math.max(Math.ceil(nSamples * this.time.nCyclesPerSecond / this.audioRate), 1));
    }

    /**
     * onAudioBlock()
     *
     * Called when McBSP1 has consumed an entire block of samples from a DMA channel.  We don't account for
     * individual samples, so if the channel's half-frame interrupt is enabled, it arrives along with the
     * end-of-block interrupt instead of ahead of it.
     *
     * If the channel is set to "auto-initialize" (and either "repeat" or "end of programming" is set), it
     * starts over, using whatever source address and counts are in its registers now; otherwise, it's done.
     *
     * @this {OMAP}
     */
    onAudioBlock()
    {
        for (let ch of this.dma.channels) {
            if (!(ch.ccr & OMAP.DMA.CCR_ENABLE) || (ch.ccr & OMAP.DMA.CCR_SYNC) != OMAP.DMA.SYNC_MCBSP1_TX || ch.fWaiting) continue;
            if (this.audioHandler) {
                let cb = Math.min(1 << (ch.csdp & 0x3), 4), n = ch.elements * ch.frames;
                let samples = new Int32Array(n);
                for (let i = 0, addr = ch.src; i < n; i++, addr += cb) {
                    samples[i] = (cb == 4)? this.bus.readQuad(addr) : (cb == 2? this.bus.readPair(addr) : this.bus.readData(addr));
                }
                this.audioHandler(samples, cb, this.audioRate);
            }
            ch.status |= ch.interrupts & (OMAP.DMA.CSR_HALF_FRAME | OMAP.DMA.CSR_FRAME | OMAP.DMA.CSR_LAST_FRAME | OMAP.DMA.CSR_BLOCK);
            if (!(ch.ccr & OMAP.DMA.CCR_AUTO_INIT)) {
                ch.ccr &= ~OMAP.DMA.CCR_ENABLE;
            } else if (ch.ccr & (OMAP.DMA.CCR_REPEAT | OMAP.DMA.CCR_END_PROG)) {
                this.armAudio(ch);
            } else {
                ch.fWaiting = true;     // waiting for software to set "end of programming"
            }
        }
        this.updateDMAInterrupts();
    }

    /**
     * setAudioRate(rate)
     *
     * Called by the audio codec that's attached to McBSP1.
     *
     * @this {OMAP}
     * @param {number} rate (samples per second)
     */
    setAudioRate(rate)
    {
        if (rate > 0) this.audioRate = rate;
    }

    /**
     * setAudioHandler(func)
     *
     * @this {OMAP}
     * @param {function(Int32Array,number,number)|null} func (called with samples, bytes per sample, and sample rate)
     */
    setAudioHandler(func)
    {
        this.audioHandler = func;
    }

    /**
     * readDMAChannel(iChannel, reg, fPeek)
     *
     * @this {OMAP}
     * @param {number} iChannel
     * @param {number} reg
     * @param {boolean} [fPeek]
     * @returns {number|undefined}
     */
    readDMAChannel(iChannel, reg, fPeek)
    {
        let ch = this.dma.channels[iChannel], value;
        switch (reg) {
        case 0x00:                      // CSDP
            return ch.csdp;
        case 0x02:                      // CCR
            return ch.ccr;
        case 0x04:                      // CICR
            return ch.interrupts;
        case 0x06:                      // CSR
            /**
             * Reading the status clears it, along with the status of the channel that shares our interrupt.
             */
            value = ch.status;
            if (!fPeek) {
                let iSibling = (iChannel < 3)? iChannel + 6 : (iChannel >= 6? iChannel - 6 : -1);
                ch.status &= OMAP.DMA.CSR_SYNC;
                if (iSibling >= 0) this.dma.channels[iSibling].status &= OMAP.DMA.CSR_SYNC;
                this.setIRQ(OMAP.IRQ.DMA_CH0 + (iChannel % 6), false);
            }
            return value;
        case 0x08:                      // CSSA_L
            return ch.src & 0xffff;
        case 0x0a:                      // CSSA_U
            return ch.src >>> 16;
        case 0x0c:                      // CDSA_L
            return ch.dest & 0xffff;
        case 0x0e:                      // CDSA_U
            return ch.dest >>> 16;
        case 0x10:                      // CEN
            return ch.elements;
        case 0x12:                      // CFN
            return ch.frames;
        case 0x14:                      // CFI
            return ch.frameIndex & 0xffff;
        case 0x16:                      // CEI
            return ch.elementIndex & 0xffff;
        case 0x18:                      // CPC
            return ch.cpc;
        }
        return undefined;
    }

    /**
     * writeDMAChannel(iChannel, reg, value)
     *
     * @this {OMAP}
     * @param {number} iChannel
     * @param {number} reg
     * @param {number} value
     * @returns {boolean|undefined}
     */
    writeDMAChannel(iChannel, reg, value)
    {
        let ch = this.dma.channels[iChannel];
        switch (reg) {
        case 0x00:                      // CSDP
            ch.csdp = value;
            return;
        case 0x02: {                    // CCR
            let fEnabled = ch.ccr & OMAP.DMA.CCR_ENABLE;
            ch.ccr = value & 0xfbff;
            if (!(value & OMAP.DMA.CCR_ENABLE)) {
                ch.fWaiting = false;
            } else if (!fEnabled) {
                ch.fWaiting = false;
                this.startDMA(iChannel);
            } else if (ch.fWaiting && (value & OMAP.DMA.CCR_END_PROG)) {
                ch.fWaiting = false;
                this.startDMA(iChannel);
            }
            return;
        }
        case 0x04:                      // CICR
            ch.interrupts = value & 0x3f;
            return;
        case 0x06:                      // CSR (read-only)
        case 0x18:                      // CPC (read-only)
            return;
        case 0x08:                      // CSSA_L
            ch.src = (ch.src & ~0xffff) | value;
            return;
        case 0x0a:                      // CSSA_U
            ch.src = (ch.src & 0xffff) | (value << 16);
            return;
        case 0x0c:                      // CDSA_L
            ch.dest = (ch.dest & ~0xffff) | value;
            return;
        case 0x0e:                      // CDSA_U
            ch.dest = (ch.dest & 0xffff) | (value << 16);
            return;
        case 0x10:                      // CEN
            ch.elements = value;
            return;
        case 0x12:                      // CFN
            ch.frames = value;
            return;
        case 0x14:                      // CFI
            ch.frameIndex = (value << 16) >> 16;
            return;
        case 0x16:                      // CEI
            ch.elementIndex = (value << 16) >> 16;
            return;
        }
        return false;
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {OMAP}
     */
    onReset()
    {
        this.reset();
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {OMAP}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state && this.loadState(state[0])) {
            state.shift();
            return true;
        }
        return false;
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {OMAP}
     * @param {Array} state
     */
    onSave(state)
    {
        state.push(this.saveState());
    }

    /**
     * saveState()
     *
     * Most of our state lives in objects created by reset(), which are saved as arrays of their property values
     * (in the order that reset() defines them), so that property names don't matter (eg, in a compiled version).
     *
     * Anything based on the machine's cycle count is saved relative to the current cycle count, since the
     * cycle count starts over whenever the machine is restarted, and the countdowns of all our Time timers are
     * saved as well, so that every timer, LCD frame, and audio block resumes exactly where it left off.
     *
     * @this {OMAP}
     * @returns {Array}
     */
    saveState()
    {
        let saveObject = (obj) => Object.keys(obj).map((key) => ArrayBuffer.isView(obj[key])? Array.from(obj[key]) : obj[key]);
        let nCycles = this.time.getCycles();
        return [
            this.idDevice,
            OMAP.STATE_VERSION,
            this.ih.map(saveObject),
            this.timers.map((timer) => timer.saveState()),
            this.wdt.saveState(),
            this.osTimer.saveState(),
            [this.wdtMode, this.wdtFree, this.wdtLast],
            Array.from(this.ulpd),
            nCycles - this.nCyclesGauge,
            Array.from(this.pinConfig),
            this.mpuiCtrl,
            this.tipb,
            Array.from(this.tcmi),
            saveObject(this.clkm),
            this.dpll,
            this.uarts.map((uart) => [Array.from(uart.regs), uart.dll, uart.dlh]),
            saveObject(this.gpio),
            saveObject(this.mpuio),
            saveObject(this.uwire),
            saveObject(this.rtc),
            Date.now(),
            saveObject(this.lcd),
            this.dma.gcr,
            this.dma.channels.map(saveObject),
            saveObject(this.dmaLCD),
            this.audioRate,
            Array.from(this.regsUnknown),
            this.getTimers().map((iTimer) => this.time.aTimers[iTimer - 1].nCyclesLeft)
        ];
    }

    /**
     * loadState(state)
     *
     * @this {OMAP}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (!state || state[0] != this.idDevice || state[1] != OMAP.STATE_VERSION) {
            this.printf("OMAP state mismatch\n");
            return false;
        }
        let loadObject = (obj, values) => {
            Object.keys(obj).forEach((key, i) => {
                if (ArrayBuffer.isView(obj[key])) obj[key].set(values[i]); else obj[key] = values[i];
            });
        };
        try {
            this.reset();
            let i = 2, nCycles = this.time.getCycles();
            state[i++].forEach((values, iHandler) => loadObject(this.ih[iHandler], values));
            state[i++].forEach((values, iTimer) => this.timers[iTimer].loadState(values));
            this.wdt.loadState(state[i++]);
            this.osTimer.loadState(state[i++]);
            [this.wdtMode, this.wdtFree, this.wdtLast] = state[i++];
            this.ulpd.set(state[i++]);
            this.nCyclesGauge = nCycles - state[i++];
            this.pinConfig.set(state[i++]);
            this.mpuiCtrl = state[i++];
            this.tipb = state[i++];
            this.tcmi.set(state[i++]);
            loadObject(this.clkm, state[i++]);
            this.dpll = state[i++];
            state[i++].forEach((values, iUART) => {
                let uart = this.uarts[iUART];
                uart.regs.set(values[0]);
                uart.dll = values[1];
                uart.dlh = values[2];
            });
            loadObject(this.gpio, state[i++]);
            loadObject(this.mpuio, state[i++]);
            loadObject(this.uwire, state[i++]);
            loadObject(this.rtc, state[i++]);
            /**
             * A real RTC keeps running while the device is put away, so we let it catch up with the real time
             * that has elapsed since the state was saved.
             */
            let msSaved = state[i++];
            if (this.rtc.fRunning) this.rtc.ms += Math.max(Date.now() - msSaved, 0);
            loadObject(this.lcd, state[i++]);
            this.dma.gcr = state[i++];
            state[i++].forEach((values, iChannel) => loadObject(this.dma.channels[iChannel], values));
            loadObject(this.dmaLCD, state[i++]);
            this.audioRate = state[i++];
            this.regsUnknown = new Map(state[i++]);
            let aCycles = state[i++];
            this.getTimers().forEach((iTimer, j) => this.time.aTimers[iTimer - 1].nCyclesLeft = aCycles[j]);
        } catch(err) {
            this.printf("OMAP state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * getTimers()
     *
     * @this {OMAP}
     * @returns {Array.<number>} (all the Time timers that we use)
     */
    getTimers()
    {
        return [this.timers[0].iTimer, this.timers[1].iTimer, this.timers[2].iTimer, this.wdt.iTimer, this.osTimer.iTimer, this.timerRTC, this.timerLCD, this.timerAudio];
    }
}

OMAP.SRAM_BASE  = 0x20000000;
OMAP.SRAM_SIZE  = 0x00030000;           // 192K
OMAP.DSP_BASE   = 0xe1000000;
OMAP.DSP_SIZE   = 0x00020000;
OMAP.IO_BASE    = 0xfffb0000;
OMAP.IO_LIMIT   = 0xffff0000;
OMAP.IO_BLOCK   = 4096;
OMAP.CLK_REF    = 12000000;             // the 12Mhz reference clock
OMAP.LCD_REFRESH = 60;                  // LCD frames per second
OMAP.STATE_VERSION = 1;                 // the format of our saved state (see saveState())

/**
 * Interrupt lines: 0-31 are inputs to the first-level interrupt handler, 32-63 to the second-level handler.
 */
OMAP.IRQ = {
    IH2_IRQ:        0,
    CAMERA:         1,
    FIQ:            3,
    McBSP2_TX:      4,
    McBSP2_RX:      5,
    RTDX:           6,
    DSP_MMU_ABORT:  7,
    HOST:           8,
    ABORT:          9,
    BRIDGE_PRIV:    13,
    GPIO_BANK1:     14,
    UART3:          15,
    TIMER3:         16,
    DMA_CH0:        19,
    DMA_CH1:        20,
    DMA_CH2:        21,
    DMA_CH3:        22,
    DMA_CH4:        23,
    DMA_CH5:        24,
    DMA_LCD:        25,
    TIMER1:         26,
    WD_TIMER:       27,
    BRIDGE_PUB:     28,
    TIMER2:         30,
    LCD_CTRL:       31,
    KEYBOARD:       32 + 1,
    uWireTX:        32 + 2,
    uWireRX:        32 + 3,
    I2C:            32 + 4,
    MPUIO:          32 + 5,
    USB_HHC_1:      32 + 6,
    McBSP3TX:       32 + 10,
    McBSP3RX:       32 + 11,
    McBSP1TX:       32 + 12,
    McBSP1RX:       32 + 13,
    UART1:          32 + 14,
    UART2:          32 + 15,
    USB_W2FC:       32 + 20,
    ONE_WIRE:       32 + 21,
    OS_TIMER:       32 + 22,
    MMC:            32 + 23,
    GAUGE_32K:      32 + 24,
    RTC_TIMER:      32 + 25,
    RTC_ALARM:      32 + 26,
    DSP_MMU:        32 + 28
};

/**
 * Interrupt handler registers
 */
OMAP.IH = {
    ITR:        0x00,                   // interrupt register (pending interrupts)
    MIR:        0x04,                   // mask interrupt register
    SIR_IRQ:    0x10,                   // number of the interrupt that's requesting an IRQ
    SIR_FIQ:    0x14,                   // number of the interrupt that's requesting an FIQ
    CONTROL:    0x18,
    ILR0:       0x1c,                   // interrupt level registers (one for each of the 32 interrupts)
    ISR:        0x9c,                   // software interrupt register
    CONTROL_NEW_IRQ_AGR:    0x1,
    CONTROL_NEW_FIQ_AGR:    0x2
};

OMAP.CLKM = {
    ARM_CKCTL:      0x00,
    ARM_IDLECT1:    0x04,
    ARM_IDLECT2:    0x08,
    ARM_EWUPCT:     0x0c,
    ARM_RSTCT1:     0x10,
    ARM_RSTCT2:     0x14,
    ARM_SYSST:      0x18,
    ARM_CKOUT1:     0x1c,
    ARM_CKOUT2:     0x20,
    CKCTL_TIMXO:            0x1000,     // the MPU timers use DPLL1 instead of the reference clock
    IDLECT1_SETARM_IDLE:    0x0800
};

OMAP.DPLL = {
    LOCK:           0x0001,
    BREAKLN:        0x0002,
    PLL_ENABLE:     0x0010
};

OMAP.ULPD = {
    GAUGING_CTRL:   0x10,
    IT_STATUS:      0x14
};

OMAP.DMA = {
    CHANNELS:       9,
    CCR_SYNC:       0x001f,             // the peripheral request that the channel is synchronized to, if any
    CCR_ENABLE:     0x0080,
    CCR_AUTO_INIT:  0x0100,
    CCR_REPEAT:     0x0200,
    CCR_END_PROG:   0x0800,
    SYNC_MCBSP1_TX: 8,
    CSR_HALF_FRAME: 0x0004,
    CSR_FRAME:      0x0008,
    CSR_LAST_FRAME: 0x0010,
    CSR_BLOCK:      0x0020,
    CSR_SYNC:       0x0040
};

OMAP.UWIRE = {
    CSR_CS_CMD:     0x1000,             // chip select asserted
    CSR_START:      0x2000,
    CSR_CSRB:       0x4000,             // busy
    CSR_RDRB:       0x8000              // received data is ready
};

OMAP.UART = {
    RHR:    0,
    THR:    0,
    IER:    1,
    IIR:    2,
    LCR:    3,
    MCR:    4,
    LSR:    5,
    MSR:    6,
    LCR_DLAB:   0x80
};

OMAP.CLASSES["OMAP"] = OMAP;
