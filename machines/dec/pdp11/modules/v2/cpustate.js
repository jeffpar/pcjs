/**
 * @fileoverview Implements the PDP-11 CPU component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import BusPDP11 from "./bus.js";
import CPUPDP11 from "./cpu.js";
import MemoryPDP11 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER, PDP11 } from "./defines.js";

/*
 * Overview of Device Interrupt Support
 *
 * Originally, the CPU maintained a queue of requested interrupts.  Entries in this queue recorded a device's
 * priority, vector, and delay (ie, a number of instructions to execute before dispatching the interrupt).  This
 * queue would constantly grow and shrink as requests were issued and dispatched, and as long as there was something
 * in the queue, the CPU was constantly examining it.
 *
 * Now we are trying something more efficient.  First, for devices that require delays (like the SerialPort's receiver
 * and transmitter buffer registers, which are supposed to "clock" the data in and out at a specific baud rate), the
 * CPU offers timer services that will "fire" a callback after a specified delay, which are much more efficient than
 * requiring the CPU to dive into an interrupt queue and decrement delay counts on every instruction.
 *
 * Second, devices that generate interrupts will allocate an IRQ object during initialization; we will no longer
 * be creating and destroying interrupt event objects and inserting/deleting them in a constantly changing queue.
 * Each IRQ contains properties that never change (eg, the vector and priority), along with a "next" pointer that's
 * only used when the IRQ is active.
 *
 * When a device decides it's time to interrupt (either at the end of some I/O operation or when a timer has fired),
 * it will simply set the IRQ, which basically means that the IRQ will be linked onto a list of active IRQs, in
 * priority order, so that when the CPU is ready to acknowledge interrupts, it need only check the top of the active
 * IRQ list.
 */

/**
 * @typedef {Object} IRQ
 * @property {number} vector
 * @property {number} priority
 * @property {number} message
 * @property {IRQ|null} next
 */

/**
 * @class CPUStatePDP11
 * @unrestricted
 */
export default class CPUStatePDP11 extends CPUPDP11 {
    /**
     * CPUStatePDP11(parmsCPU)
     *
     * The CPUStatePDP11 class uses the following (parmsCPU) properties:
     *
     *      model: a number (eg, 1170) that should match one of the PDP11.MODEL_* values
     *      addrReset: reset address (default is 0)
     *
     * This extends the CPU class and passes any remaining parmsCPU properties to the CPU class
     * constructor, along with a default speed (cycles per second) based on the specified
     * (or default) CPU model number.
     *
     * After looking over the timings of PDP-11/70 instructions, nearly all of them appear
     * to be multiples of 150ns.  So that's what we'll consider a cycle.  How many 150ns are
     * in one second?  Approximately 6666667.  So by way of comparison to other PCjs machines,
     * that makes the PDP-11 (or at least the PDP-11/70) look like a 6.67Mhz machine.
     *
     * I've started with the PDP-11/70, since that's what Paul Nankervis started with.  When
     * I go back and add support for earlier PDP-11 models (primarily by neutering functions
     * that didn't exist), I will no doubt have to tweak some instruction cycle counts, too.
     *
     * Examples of operations that take 1 extra cycle (150ns): single and double operand byte
     * instructions with an odd address (except MOV/MTPI/MTPD/JMP/JRS), ADD/SUB/BIC/BIS/MOVB/CMP/BIT
     * instructions with src of R1-R7 and dst of R6-R7, RORB/ASRB with an odd address, and each
     * shift of ASH/ASHC.  As you can see, the rules are not simple.
     *
     * We're not simulating cache hardware, but our timings should be optimistic and assume 100%
     * cache hits; for cache hits, each read cycle is 300ns.  As for write cycles, they are always
     * 750ns.  My initial take on DEC's timings is that they are including the write time as part
     * of the total EF (execute/fetch) time.  So, for instructions that write to memory, it looks
     * like we'll normally need to add 5 cycles (750/150) to the instruction's base time, but
     * we'll need to keep an eye out for exceptions.
     *
     * @param {Object} parmsCPU
     */
    constructor(parmsCPU)
    {
        var nCyclesDefault = 0;
        var model = +parmsCPU['model'] || PDP11.MODEL_1170;

        switch(model) {
        case PDP11.MODEL_1170:
        default:
            nCyclesDefault = 6666667;
            break;
        }

        /*
         * ES6 ALERT: Classes cannot access "this" until all superclasses have been initialized as well.
         */
        super(parmsCPU, nCyclesDefault);

        this.model = model;
        this.addrReset = +parmsCPU['addrReset'] || 0;

        /*
         * These properties will be initialized by initCPU()
         */
        this.flagC = this.flagV = this.flagZ = this.flagN = 0;
        this.regPSW = this.pswMode = 0;
        this.pswTrap = 0;
        this.regsGen = this.regsAlt = this.regsAltStack = [];
        this.regsPAR = this.regsPDR = this.regsUniMap = this.regsControl = [];
        this.opFlags = 0;

        /*
         * These properties will be initialized by initMMU()
         */
        this.regMMR0 = this.regMMR1 = this.regMMR2 = this.regMMR3 = 0;
        this.regErr = this.regMBR = this.regPIR = this.regSLR = 0;
        this.mmuEnable = this.mmuLastMode = this.mmuLastPage = this.mmuMask = 0;
        this.addrLast = this.opLast = this.addrInvalid = 0;

        this.mapMMR3 = [4,2,0,1];   // map from mode to MMR3 I/D bit

        /*
         * Initialize processor operation to match the requested model.
         *
         * offRegSrc is a bias added to the register index calculated in readSrcWord() and readSrcByte(),
         * and by default has no effect on the register index, UNLESS this is a PDP-11/20, in which case the
         * bias is changed to 8 and we return one of the negative values you see above.  Those negative values
         * act as signals to writeDstWord() and writeDstByte(), effectively delaying evaluation of the register
         * until then.
         */
        this.offRegSrc = 0;
        this.maskRegSrcByte = 0xff;

        if (this.model <= PDP11.MODEL_1120) {
            this.opDecode = PDP11.op1120.bind(this);
            this.checkStackLimit = this.checkStackLimit1120;
            this.offRegSrc = 8;
            this.maskRegSrcByte = -1;
            this.pswUsed = ~(PDP11.PSW.UNUSED | PDP11.PSW.REGSET | PDP11.PSW.PMODE | PDP11.PSW.CMODE) & 0xffff;
            this.pswRegSet = 0;
        } else {
            this.opDecode = PDP11.op1140.bind(this);
            this.checkStackLimit = this.checkStackLimit1140;
            /*
             * The alternate register set (REGSET) doesn't exist on the 11/20 or 11/40; it's available on the 11/45 and 11/70.
             * Ditto for separate I/D spaces, SUPER mode, and the instructions MFPD, MTPD, and SPL.
             */
            this.pswUsed = ~(PDP11.PSW.UNUSED | (this.model <= PDP11.MODEL_1140? PDP11.PSW.REGSET : 0)) & 0xffff;
            this.pswRegSet = (this.model > PDP11.MODEL_1140? PDP11.PSW.REGSET : 0);
        }

        this.nDisableTraps = 0;
        this.trapVector = this.trapReason = 0;

        /** @type {IRQ|null} */
        this.irqNext = null;        // the head of the active IRQ list, in priority order

        /** @type {Array.<IRQ>} */
        this.aIRQs = [];            // list of all IRQs, active or not (to be used for auto-configuration)

        this.getByte = this.getByteDirect = this.getByteChecked;
        this.getWord = this.getWordDirect = this.getWordChecked;
        this.setByte = this.setByteDirect = this.setByteChecked;
        this.setWord = this.setWordDirect = this.setWordChecked;
        this.nReadBreaks = this.nWriteBreaks = 0;

        this.addrDSpace = this.addrIOPage = 0;
        this.getAddr = this.getVirtualAddrByMode;
        this.readWord = this.readWordFromVirtual;
        this.writeWord = this.writeWordToVirtual;

        this.srcMode = this.srcReg = 0;
        this.dstMode = this.dstReg = this.dstAddr = 0;

        this.flags.complete = false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * Called once the Bus has been initialized.
     *
     * @this {CPUStatePDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUPDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        super.initBus(cmp, bus, cpu, dbg);
        this.getByteDirect = bus.getByte.bind(bus);
        this.getWordDirect = bus.getWord.bind(bus);
        this.setByteDirect = bus.setByte.bind(bus);
        this.setWordDirect = bus.setWord.bind(bus);
    }

    /**
     * powerUp(data, fRepower)
     *
     * We hook the powerUp() notification only because it's our best opportunity to take care of any
     * floating vector assignments.
     *
     * @this {CPUStatePDP11}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        var vectorFloating = 0o300;
        for (var i = 0; i < this.aIRQs.length; i++) {
            var irq = this.aIRQs[i];
            if (irq.vector < 0) {
                irq.vector = vectorFloating;
                vectorFloating += 4;
            }
        }
        return super.powerUp(data, fRepower);
    }

    /**
     * reset()
     *
     * @this {CPUStatePDP11}
     */
    reset()
    {
        this.printf(MESSAGE.STATUS, "Model %d\n", this.model);
        if (this.flags.running) this.stopCPU();
        this.initCPU();
        this.resetCycles();
        this.clearError();          // clear any fatal error/exception that setError() may have flagged
        super.reset();
    }

    /**
     * initCPU()
     *
     * WARNING: It's tempting to call this function as early as the constructor() or initBus() calls, but
     * but we actually need to wait until our reset() or restore() function is called by the powerUp() handler,
     * ensuring that all device memory allocations have finished.  Only then is it safe to make the first call
     * to initCPU() -> initMMU() -> setMemoryAccess() -> Bus.setIOPageRange() and sync the Bus memory map with
     * the CPU memory map.
     *
     * @this {CPUStatePDP11}
     */
    initCPU()
    {
        /*
         * TODO: Verify the initial state of all PDP-11 flags and registers (are they well-documented?)
         */
        var f = 0xffff;
        this.flagC = 0x10000;       // PSW C bit
        this.flagV  = 0x8000;       // PSW V bit
        this.flagZ  = f;            // PSW Z bit        (TODO: Why do we clear instead of set Z, like other flags?)
        this.flagN  = 0x8000;       // PSW N bit
        this.regPSW = 0x000f;       // PSW other bits   (TODO: What's the point of setting the flag bits here, too?)

        this.regsGen = [            // General R0-R7
            0, 0, 0, 0, 0, 0, 0, this.addrReset, -1, -2, -3, -4, -5, -6, -7, -8
        ];
        this.regsAlt = [            // Alternate R0-R5
            0, 0, 0, 0, 0, 0
        ];
        this.regsAltStack = [       // Alternate R6 stack pointers (KERNEL, SUPER, UNUSED, USER)
            0, 0, 0, 0
        ];
        this.regsPAR = [            // memory management PAR registers by mode
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // KERNEL (8 KIPAR regs followed by 8 KDPAR regs)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // SUPER  (8 SIPDR regs followed by 8 SDPDR regs)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // mode 2 (not used)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]    // USER   (8 UIPDR regs followed by 8 UDPDR regs)
        ];
        this.regsPDR = [            // memory management PDR registers by mode
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // KERNEL (8 KIPDR regs followed by 8 KDPDR regs)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // SUPER  (8 SIPDR regs followed by 8 SDPDR regs)
            [f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f],   // mode 2 (not used)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]    // USER   (8 UIPDR regs followed by 8 UDPDR regs)
        ];
        this.regsUniMap = [         // 32 UNIBUS map registers
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.regsControl = [        // various control registers (177740-177756) we don't really care about
            0, 0, 0, 0, 0, 0, 0, 0
        ];

        this.pswMode = 0;           // current memory management mode (see PDP11.MODE.KERNEL | SUPER | UNUSED | USER)
        this.pswTrap = -1;
        this.regMBR = 0;

        /*
         * opFlags contains various conditions that stepCPU() needs to be aware of.
         */
        this.opFlags = 0;

        /*
         * srcMode and srcReg are set by SRCMODE decodes, and dstMode and dstReg are set for DSTMODE decodes,
         * indicating to the opcode handlers the mode(s) and register(s) used as part of the current opcode, so
         * that they can calculate the correct number of cycles.  dstAddr is set for byte operations that also
         * need to know the effective address for their cycle calculation.
         */
        this.srcMode = this.srcReg = 0;
        this.dstMode = this.dstReg = this.dstAddr = 0;

        this.initMMU();
    }

    /**
     * initMMU()
     *
     * Reset all registers required as part of a RESET instruction.
     *
     * TODO: Do we ever need to automatically clear regErr, or is it cleared manually?
     *
     * @this {CPUStatePDP11}
     */
    initMMU()
    {
        this.regMMR0 = 0;           // 177572
        this.regMMR1 = 0;           // 177574
        this.regMMR2 = 0;           // 177576
        this.regMMR3 = 0;           // 172516
        this.regErr = 0;            // 177766
        this.regPIR = 0;            // 177772
        this.regSLR = 0xff;         // 177774
        this.mmuEnable = 0;         // MMU enabled for PDP11.ACCESS.READ or PDP11.ACCESS.WRITE
        this.mmuLastMode = 0;
        this.mmuLastPage = 0;
        this.mmuMask = 0x3ffff;

        /*
         * This is queried and displayed by the Panel when it's not displaying its own ADDRESS register
         * (which takes precedence when, for example, you've manually halted the CPU and are independently
         * examining the contents of other addresses).
         *
         * We initialize it to whatever the current PC is, because according to @paulnank's pdp11.js: "Reset
         * displays next instruction address" and initMMU() is called on a RESET.
         */
        this.addrLast = this.regsGen[7];

        /*
         * This stores the PC in the lower 16 bits, and any auto-incs or auto-decs from the last opcode in the
         * upper 16 bits;  the lower 16 bits are used to update MMR2, and the upper 16 bits are used to update MMR1.
         * The upper bits are automatically zeroed at the start of every operation when the PC is copied to opLast.
         */
        this.opLast = 0;

        this.resetIRQs();

        /*
         * As initCPU() explains, we shouldn't be calling this function until well after initBus() has been
         * called, but we still make absolutely sure we have Bus access.
         */
        if (this.bus) {
            this.setMemoryAccess();
            this.addrInvalid = this.bus.getMemoryLimit(MemoryPDP11.TYPE.RAM);
        }
    }

    /**
     * getMMUState()
     *
     * Returns bit 0 set if 22-bit, bit 1 set if 18-bit, or bit 2 set if 16-bit; used by the Panel component.
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getMMUState()
    {
        return this.mmuEnable? ((this.regMMR3 & PDP11.MMR3.MMU_22BIT)? 1 : 2) : 4;
    }

    /**
     * resetCPU()
     *
     * @this {CPUStatePDP11}
     */
    resetCPU()
    {
        this.bus.reset();
        this.initMMU();
    }

    /**
     * setMemoryAccess()
     *
     * Define handlers and DSPACE setting appropriate for the current MMU mode, in order to eliminate unnecessary calls
     * to mapVirtualToPhysical().
     *
     * @this {CPUStatePDP11}
     */
    setMemoryAccess()
    {
        this.getByte = this.getByteDirect;
        this.getWord = this.getWordDirect;
        this.setByte = this.setByteDirect;
        this.setWord = this.setWordDirect;
        if (this.nReadBreaks) {
            this.getByte = this.getByteChecked;
            this.getWord = this.getWordChecked;
        }
        if (this.nWriteBreaks) {
            this.setByte = this.setByteChecked;
            this.setWord = this.setWordChecked;
        }
        if (this.mmuEnable) {
            this.addrDSpace = PDP11.ACCESS.DSPACE;
            this.addrIOPage = (this.regMMR3 & PDP11.MMR3.MMU_22BIT)? BusPDP11.IOPAGE_22BIT : BusPDP11.IOPAGE_18BIT;
            this.getAddr = this.getVirtualAddrByMode;
            this.readWord = this.nReadBreaks? this.readWordFromVirtualChecked : this.readWordFromVirtual;
            this.writeWord = this.nWriteBreaks? this.writeWordToVirtualChecked : this.writeWordToVirtual;
            this.bus.setIOPageRange((this.regMMR3 & PDP11.MMR3.MMU_22BIT)? 22 : 18);
        } else {
            this.addrDSpace = 0;
            this.addrIOPage = BusPDP11.IOPAGE_16BIT;
            this.getAddr = this.getPhysicalAddrByMode;
            this.readWord = this.nReadBreaks? this.readWordFromPhysicalChecked : this.readWordFromPhysical;
            this.writeWord = this.nWriteBreaks? this.writeWordToPhysicalChecked : this.writeWordToPhysical;
            this.bus.setIOPageRange(16);
        }
    }

    /**
     * getMMR0()
     *
     * NOTE: It's OK to bypass this function if you're only interested in bits that always stored directly in MMR0.
     *
     * 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 MMR0
     * nonr leng read trap unus unus ena mnt cmp  -mode- i/d  --page--   enable
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getMMR0()
    {
        var data = this.regMMR0;
        if (!(data & PDP11.MMR0.ABORT)) {
            data = (data & ~(PDP11.MMR0.UNUSED | PDP11.MMR0.PAGE | PDP11.MMR0.MODE)) | (this.mmuLastMode << 5) | (this.mmuLastPage << 1);
        }
        return data;
    }

    /**
     * setMMR0()
     *
     * @this {CPUStatePDP11}
     * @param {number} newMMR0
     */
    setMMR0(newMMR0)
    {
        newMMR0 &= ~PDP11.MMR0.UNUSED;

        if (this.regMMR0 != newMMR0) {
            if (newMMR0 & PDP11.MMR0.ABORT) {
                /*
                 * If updates to MMR0[1-7], MMR1, and MMR2 are being shut off (ie, MMR0.ABORT bits are transitioning
                 * from clear to set), then do one final sync with their real-time counterparts in opLast.
                 */
                if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
                    this.regMMR1 = (this.opLast >> 16) & 0xffff;
                    this.regMMR2 = this.opLast & 0xffff;
                }
            }
            /*
             * NOTE: We are not protecting the read-only state of the COMPLETED bit here; that's handled by writeMMR0().
             */
            this.regMMR0 = newMMR0;
            this.mmuLastMode = (newMMR0 & PDP11.MMR0.MODE) >> PDP11.MMR0.SHIFT.MODE;
            this.mmuLastPage = (newMMR0 & PDP11.MMR0.PAGE) >> PDP11.MMR0.SHIFT.PAGE;
            var mmuEnable = 0;
            if (newMMR0 & (PDP11.MMR0.ENABLED | PDP11.MMR0.MAINT)) {
                mmuEnable = PDP11.ACCESS.WRITE;
                if (newMMR0 & PDP11.MMR0.ENABLED) mmuEnable |= PDP11.ACCESS.READ;
            }
            if (this.mmuEnable != mmuEnable) {
                this.mmuEnable = mmuEnable;
                this.setMemoryAccess();
            }
        }
    }

    /**
     * getMMR1()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getMMR1()
    {
        /*
         * If updates to MMR1 have not been shut off (ie, MMR0.ABORT bits are clear), then we are allowed
         * to sync MMR1 with its real-time counterpart in opLast.
         *
         * UPDATE: Apparently, I was mistaken that this register would only be updated when the MMR0 ENABLED
         * bit was set.
         *
         *      if ((this.regMMR0 & (PDP11.MMR0.ABORT | PDP11.MMR0.ENABLED)) == PDP11.MMR0.ENABLED)
         */
        if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
            this.regMMR1 = (this.opLast >> 16) & 0xffff;
        }
        var result = this.regMMR1;
        if (result & 0xff00) {
            result = ((result << 8) | (result >> 8)) & 0xffff;
        }
        return result;
    }

    /**
     * getMMR2()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getMMR2()
    {
        /*
         * If updates to MMR2 have not been shut off (ie, MMR0.ABORT bits are clear), then we are allowed
         * to sync MMR2 with its real-time counterpart in opLast.
         *
         * UPDATE: Apparently, I was mistaken that this register would only be updated when the MMR0 ENABLED
         * bit was set.
         *
         *      if ((this.regMMR0 & (PDP11.MMR0.ABORT | PDP11.MMR0.ENABLED)) == PDP11.MMR0.ENABLED)
         */
        if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
            this.regMMR2 = this.opLast & 0xffff;
        }
        return this.regMMR2;
    }

    /**
     * getMMR3()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getMMR3()
    {
        return this.regMMR3;
    }

    /**
     * setMMR3()
     *
     * @this {CPUStatePDP11}
     * @param {number} newMMR3
     */
    setMMR3(newMMR3)
    {
        /*
         * Don't allow non-11/70 models to use 22-bit addressing or the UNIBUS map.
         */
        if (this.model < PDP11.MODEL_1170) {
            newMMR3 &= ~(PDP11.MMR3.MMU_22BIT | PDP11.MMR3.UNIBUS_MAP);
        }
        if (this.regMMR3 != newMMR3) {
            this.regMMR3 = newMMR3;
            this.mmuMask = (newMMR3 & PDP11.MMR3.MMU_22BIT)? BusPDP11.MASK_22BIT : BusPDP11.MASK_18BIT;
            this.setMemoryAccess();
        }
    }

    /**
     * setReset(addr, fStart, bUnit, addrStack)
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {boolean} [fStart] (true if a "startable" image was just loaded, false if not)
     * @param {number} [bUnit] (boot unit #)
     * @param {number} [addrStack]
     */
    setReset(addr, fStart, bUnit, addrStack)
    {
        this.addrReset = addr;

        this.setPC(addr);
        this.setPSW(0);

        this.resetCPU();

        if (fStart) {
            this.regsGen[0] = bUnit || 0;
            for (var i = 1; i <= 5; i++) this.regsGen[i] = 0;
            this.regsGen[6] = addrStack || 0o2000;
            if (!this.flags.powered) {
                this.flags.autoStart = true;
            }
            else if (!this.flags.running) {
                this.startCPU();
            }
        }
        else {
            if (this.dbg && this.flags.powered) {
                /*
                 * TODO: Review the decision to always stop the CPU if the Debugger is loaded.  Note that
                 * when stopCPU() stops a running CPU, the Debugger gets notified, so no need to notify it again.
                 *
                 * TODO: There are more serious problems to deal with if another component is slamming a new PC down
                 * the CPU's throat (presumably while also dropping some new code into RAM) while the CPU is running;
                 * we should probably force a complete reset, but for now, it's up to the user to hit the reset button
                 * themselves.
                 */
                if (!this.stopCPU() && !this.cmp.flags.reset) {
                    this.dbg.updateStatus();
                    this.cmp.updateDisplays(-1);
                }
            }
            else if (fStart === false) {
                this.stopCPU();
            }
        }
        if (!this.isRunning() && this.panel) this.panel.stop();
    }

    /**
     * getChecksum()
     *
     * TODO: Implement
     *
     * @this {CPUStatePDP11}
     * @returns {number} a 32-bit summation of key elements of the current CPU state (used by the CPU checksum code)
     */
    getChecksum()
    {
        return 0;
    }

    /**
     * save()
     *
     * @this {CPUStatePDP11}
     * @returns {Object|null}
     */
    save()
    {
        var state = new State(this);
        state.set(0, [
            this.regsGen,
            this.regsAlt,
            this.regsAltStack,
            this.regsPAR,
            this.regsPDR,
            this.regsUniMap,
            this.regsControl,
            this.regErr,
            this.regMBR,
            this.regPIR,
            this.regSLR,
            this.mmuLastMode,
            this.mmuLastPage,
            this.addrLast,
            this.opFlags,
            this.opLast,
            this.pswTrap,
            this.trapReason,
            this.trapVector,
            this.addrReset
        ]);
        state.set(1, [this.getPSW(),this.getMMR0(),this.getMMR1(),this.getMMR2(),this.getMMR3()]);
        state.set(2, [this.nTotalCycles, this.getSpeed(), this.flags.autoStart]);
        state.set(3, this.saveIRQs());
        state.set(4, this.saveTimers());
        return state.data();
    }

    /**
     * restore(data)
     *
     * @this {CPUStatePDP11}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        /*
         * ES6 ALERT: A handy destructuring assignment, which makes it easy to perform the inverse
         * of what save() does when it collects a bunch of object properties into an array.
         */
        [
            this.regsGen,
            this.regsAlt,
            this.regsAltStack,
            this.regsPAR,
            this.regsPDR,
            this.regsUniMap,
            this.regsControl,
            this.regErr,
            this.regMBR,
            this.regPIR,
            this.regSLR,
            this.mmuLastMode,
            this.mmuLastPage,
            this.addrLast,
            this.opFlags,
            this.opLast,
            this.pswTrap,
            this.trapReason,
            this.trapVector,
            this.addrReset
        ] = data[0];

        var a = data[1];
        this.setPSW(a[0]);
        this.setMMR0(a[1]);
        this.regMMR1 = a[2];
        this.regMMR2 = a[3];
        this.setMMR3(a[4]);

        a = data[2];
        this.nTotalCycles = a[0];
        this.setSpeed(a[1]);
        this.flags.autoStart = a[2];

        this.restoreIRQs(data[3]);
        this.restoreTimers(data[4]);
        return true;
    }

    /**
     * clearCF()
     *
     * @this {CPUStatePDP11}
     */
    clearCF()
    {
        this.flagC = 0;
    }

    /**
     * getCF()
     *
     * @this {CPUStatePDP11}
     * @returns {number} 0 or PDP11.PSW.CF
     */
    getCF()
    {
        return (this.flagC & 0x10000)? PDP11.PSW.CF: 0;
    }

    /**
     * setCF()
     *
     * @this {CPUStatePDP11}
     */
    setCF()
    {
        this.flagC = 0x10000;
    }

    /**
     * clearVF()
     *
     * @this {CPUStatePDP11}
     */
    clearVF()
    {
        this.flagV = 0;
    }

    /**
     * getVF()
     *
     * @this {CPUStatePDP11}
     * @returns {number} 0 or PDP11.PSW.VF
     */
    getVF()
    {
        return (this.flagV & 0x8000)? PDP11.PSW.VF: 0;
    }

    /**
     * setVF()
     *
     * @this {CPUStatePDP11}
     */
    setVF()
    {
        this.flagV = 0x8000;
    }

    /**
     * clearZF()
     *
     * @this {CPUStatePDP11}
     */
    clearZF()
    {
        this.flagZ = 1;
    }

    /**
     * getZF()
     *
     * @this {CPUStatePDP11}
     * @returns {number} 0 or PDP11.PSW.ZF
     */
    getZF()
    {
        return (this.flagZ & 0xffff)? 0 : PDP11.PSW.ZF;
    }

    /**
     * setZF()
     *
     * @this {CPUStatePDP11}
     */
    setZF()
    {
        this.flagZ = 0;
    }

    /**
     * clearNF()
     *
     * @this {CPUStatePDP11}
     */
    clearNF()
    {
        this.flagN = 0;
    }

    /**
     * getNF()
     *
     * @this {CPUStatePDP11}
     * @returns {number} 0 or PDP11.PSW.NF
     */
    getNF()
    {
        return (this.flagN & 0x8000)? PDP11.PSW.NF : 0;
    }

    /**
     * setNF()
     *
     * @this {CPUStatePDP11}
     */
    setNF()
    {
        this.flagN = 0x8000;
    }

    /**
     * getOpcode()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getOpcode()
    {
        var pc = this.opLast = this.regsGen[PDP11.REG.PC];
        /*
         * If PC is unaligned, a BUS trap will be generated, and because it will generate an
         * exception, the next line (the equivalent of advancePC(2)) will not be executed, ensuring that
         * original unaligned PC will be pushed onto the stack by trap().
         */
        var opCode = this.readWord(pc);
        this.regsGen[PDP11.REG.PC] = (pc + 2) & 0xffff;
        return opCode;
    }

    /**
     * advancePC(off)
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {CPUStatePDP11}
     * @param {number} off
     * @returns {number} (original PC)
     */
    advancePC(off)
    {
        var pc = this.regsGen[PDP11.REG.PC];
        this.regsGen[PDP11.REG.PC] = (pc + off) & 0xffff;
        return pc;
    }

    /**
     * branch(opCode)
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {boolean|number} condition
     */
    branch(opCode, condition)
    {
        if (condition) {
            var off = ((opCode << 24) >> 23);
            if (DEBUG && DEBUGGER && this.dbg && off == -2) {
                this.dbg.stopInstruction("branch to self");
            }
            this.setPC(this.getPC() + off);
            this.nStepCycles -= 2;
        }
        this.nStepCycles -= (2 + 1);
    }

    /**
     * getPC()
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getPC()
    {
        return this.regsGen[PDP11.REG.PC];
    }

    /**
     * getLastAddr()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getLastAddr()
    {
        return this.addrLast;
    }

    /**
     * getLastPC()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getLastPC()
    {
        return this.opLast & 0xffff;
    }

    /**
     * setPC()
     *
     * NOTE: Unlike other PCjs emulators, such as PCx86, where all PC updates MUST go through the setPC()
     * function, this function is nothing more than a convenience, because in the PDP-11, the PC can be loaded
     * like any other general register.  We fully expect this function to be inlined at runtime.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     */
    setPC(addr)
    {
        this.regsGen[PDP11.REG.PC] = addr & 0xffff;
    }

    /**
     * getSP()
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getSP()
    {
        return this.regsGen[PDP11.REG.SP];
    }

    /**
     * setSP()
     *
     * NOTE: Unlike other PCjs emulators, such as PCx86, where all SP updates MUST go through the setSP()
     * function, this function is nothing more than a convenience, because in the PDP-11, the PC can be loaded
     * like any other general register.  We fully expect this function to be inlined at runtime.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     */
    setSP(addr)
    {
        this.regsGen[PDP11.REG.SP] = addr & 0xffff;
    }

    /**
     * addIRQ(vector, priority, message)
     *
     * @this {CPUStatePDP11}
     * @param {number} vector (-1 for floating vector)
     * @param {number} priority
     * @param {number} [message]
     * @returns {IRQ}
     */
    addIRQ(vector, priority, message)
    {
        var irq = {vector: vector, priority: priority, message: message || 0, name: PDP11.VECTORS[vector], next: null};
        this.aIRQs.push(/** @type {IRQ} */ (irq));      // TODO: Why the F*CK do I need a type override? Damn JSDoc types....
        return irq;
    }

    /**
     * insertIRQ(irq)
     *
     * @this {CPUStatePDP11}
     * @param {IRQ} irq
     */
    insertIRQ(irq)
    {
        if (irq != this.irqNext) {
            var irqPrev = this.irqNext;
            if (!irqPrev || irqPrev.priority <= irq.priority) {
                irq.next = irqPrev;
                this.irqNext = irq;
            } else {
                do {
                    var irqNext = irqPrev.next;
                    if (!irqNext || irqNext.priority <= irq.priority) {
                        irq.next = irqNext;
                        irqPrev.next = irq;
                        break;
                    }
                    irqPrev = irqNext;
                } while (irqPrev);
            }
        }
        /*
         * See the writeXCSR() function for an explanation of why signalling an IRQ hardware interrupt
         * should be done using IRQ_DELAY rather than setting IRQ directly.
         */
        this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
    }

    /**
     * removeIRQ(irq)
     *
     * @this {CPUStatePDP11}
     * @param {IRQ} irq
     */
    removeIRQ(irq)
    {
        var irqPrev = this.irqNext;
        if (irqPrev == irq) {
            this.irqNext = irq.next;
        } else {
            while (irqPrev) {
                var irqNext = irqPrev.next;
                if (irqNext == irq) {
                    irqPrev.next = irqNext.next;
                    break;
                }
                irqPrev = irqNext;
            }
        }
        /*
         * We could also set irq.next to null now, but strictly speaking, that shouldn't be necessary.
         *
         * Last but not least, if there's still an IRQ on the active IRQ list, we need to make sure IRQ_DELAY
         * is still set.
         */
        if (this.irqNext) {
            this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
        }
    }

    /**
     * setIRQ(irq)
     *
     * @this {CPUStatePDP11}
     * @param {IRQ|null} irq
     */
    setIRQ(irq)
    {
        if (irq) {
            this.insertIRQ(irq);
            this.printf(irq.message + MESSAGE.INT + MESSAGE.ADDR, "setIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority);
        }
    }

    /**
     * clearIRQ(irq)
     *
     * @this {CPUStatePDP11}
     * @param {IRQ|null} irq
     */
    clearIRQ(irq)
    {
        if (irq) {
            this.removeIRQ(irq);
            this.printf(irq.message + MESSAGE.INT + MESSAGE.ADDR, "clearIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority);
        }
    }

    /**
     * findIRQ(vector)
     *
     * @this {CPUStatePDP11}
     * @param {number} vector
     * @returns {IRQ|null}
     */
    findIRQ(vector)
    {
        for (var i = 0; i < this.aIRQs.length; i++) {
            var irq = this.aIRQs[i];
            if (irq.vector === vector) return irq;
        }
        return null;
    }

    /**
     * checkIRQs(priority)
     *
     * @this {CPUStatePDP11}
     * @param {number} priority
     * @returns {IRQ|null}
     */
    checkIRQs(priority)
    {
        return (this.irqNext && this.irqNext.priority > priority)? this.irqNext : null;
    }

    /**
     * resetIRQs(priority)
     *
     * @this {CPUStatePDP11}
     */
    resetIRQs()
    {
        this.irqNext = null;
    }

    /**
     * saveIRQs()
     *
     * @this {CPUStatePDP11}
     * @returns {Array.<number>}
     */
    saveIRQs()
    {
        var aIRQVectors = [];
        var irq = this.irqNext;
        while (irq) {
            aIRQVectors.push(irq.vector);
            irq = irq.next;
        }
        return aIRQVectors;
    }

    /**
     * restoreIRQs(aIRQVectors)
     *
     * @this {CPUStatePDP11}
     * @param {Array.<number>} aIRQVectors
     */
    restoreIRQs(aIRQVectors)
    {
        for (var i = aIRQVectors.length - 1; i >= 0; i--) {
            var irq = this.findIRQ(aIRQVectors[i]);
            this.assert(irq != null);
            if (irq) {
                irq.next = this.irqNext;
                this.irqNext = irq;
            }
        }
    }

    /**
     * checkInterrupts()
     *
     * @this {CPUStatePDP11}
     * @returns {boolean} true if an interrupt was dispatched, false if not
     */
    checkInterrupts()
    {
        var fInterrupt = false;

        if (this.opFlags & PDP11.OPFLAG.IRQ) {

            var vector = PDP11.TRAP.PIRQ;
            var priority = (this.regPIR & PDP11.PSW.PRI) >> PDP11.PSW.SHIFT.PRI;

            var irq = this.checkIRQs(priority);
            if (irq) {
                vector = irq.vector;
                priority = irq.priority;
            }

            if (this.dispatchInterrupt(vector, priority)) {
                if (irq) this.removeIRQ(irq);
                fInterrupt = true;
            }

            if (!this.irqNext && !this.regPIR) {
                this.opFlags &= ~PDP11.OPFLAG.IRQ;
            }
        }
        else if (this.opFlags & PDP11.OPFLAG.IRQ_DELAY) {
            /*
             * We know that IRQ (bit 2) is clear, so since IRQ_DELAY (bit 0) is set, incrementing opFlags
             * will eventually transform IRQ_DELAY into IRQ, without affecting any other (higher) bits.
             */
            this.opFlags++;
        }
        return fInterrupt;
    }

    /**
     * dispatchInterrupt(vector, priority)
     *
     * TODO: The process of dispatching an interrupt MUST cost some cycles; either trap() needs to assess
     * that cost, or we do.
     *
     * @this {CPUStatePDP11}
     * @param {number} vector
     * @param {number} priority
     * @returns {boolean} (true if dispatched, false if not)
     */
    dispatchInterrupt(vector, priority)
    {
        var priorityCPU = (this.regPSW & PDP11.PSW.PRI) >> PDP11.PSW.SHIFT.PRI;
        if (priority > priorityCPU) {
            if (this.opFlags & PDP11.OPFLAG.WAIT) {
                this.advancePC(2);
                this.opFlags &= ~PDP11.OPFLAG.WAIT;
            }
            this.trap(vector, 0, PDP11.REASON.INTERRUPT);
            return true;
        }
        return false;
    }

    /**
     * checkTraps()
     *
     * NOTE: The following code processes these "deferred" traps in priority order.  Unfortunately, that
     * order seems to have changed since the 11/20.  For reference, here's the priority list for the 11/20:
     *
     *      1. Bus Errors
     *      2. Instruction Traps
     *      3. Trace Trap
     *      4. Stack Overflow Trap
     *      5. Power Failure Trap
     *
     * and for the 11/70:
     *
     *      1. HALT (Instruction, Switch, or Command)
     *      2. MMU Faults
     *      3. Parity Errors
     *      4. Bus Errors (including stack overflow traps?)
     *      5. Floating Point Traps
     *      6. TRAP Instruction
     *      7. TRACE Trap
     *      8. OVFL Trap
     *      9. Power Fail Trap
     *     10. Console Bus Request (Front Panel Operation)
     *     11. PIR 7, BR 7, PIR 6, BR 6, PIR 5, BR 5, PIR 4, BR 4, PIR 3, BR 3, PIR 2, PIR 1
     *     12. WAIT Loop
     *
     * TODO: Determine 1) if the 11/20 Handbook was wrong, or 2) if the 11/70 really has different priorities.
     *
     * Also, as the PDP-11/20 Handbook (1971), p.100, notes:
     *
     *      If a bus error is caused by the trap process handling instruction traps, trace traps, stack overflow
     *      traps, or a previous bus error, the processor is halted.
     *
     *      If a stack overflow is caused by the trap process in handling bus errors, instruction traps, or trace traps,
     *      the process is completed and then the stack overflow trap is sprung.
     *
     * TODO: Based on the above notes, we should probably be halting the CPU when a bus error occurs during a trap.
     *
     * @this {CPUStatePDP11}
     * @returns {boolean} (true if dispatched, false if not)
     */
    checkTraps()
    {
        if (this.opFlags & PDP11.OPFLAG.TRAP_MMU) {
            this.trap(PDP11.TRAP.MMU, PDP11.OPFLAG.TRAP_MMU, PDP11.REASON.FAULT);
            return true;
        }
        if (this.opFlags & PDP11.OPFLAG.TRAP_SP) {
            this.trap(PDP11.TRAP.BUS, PDP11.OPFLAG.TRAP_SP, PDP11.REASON.YELLOW);
            return true;
        }
        if (this.opFlags & PDP11.OPFLAG.TRAP_TF) {
            this.trap(PDP11.TRAP.BPT, PDP11.OPFLAG.TRAP_TF, PDP11.REASON.TRACE);
            return true;
        }
        return false;
    }

    /**
     * isWaiting()
     *
     * @this {CPUStatePDP11}
     * @returns {boolean} (true if OPFLAG.WAIT is set, false otherwise)
     */
    isWaiting()
    {
        return !!(this.opFlags & PDP11.OPFLAG.WAIT);
    }

    /**
     * getPSW()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getPSW()
    {
        var mask = PDP11.PSW.CMODE | PDP11.PSW.PMODE | PDP11.PSW.REGSET | PDP11.PSW.PRI | PDP11.PSW.TF;
        return this.regPSW = (this.regPSW & mask) | this.getNF() | this.getZF() | this.getVF() | this.getCF();
    }

    /**
     * setPSW(newPSW)
     *
     * This updates the CPU Processor Status Word.  The PSW should generally be written through
     * this routine so that changes can be tracked properly, for example the correct register set,
     * the current memory management mode, etc.  An exception is SPL which writes the priority directly.
     * Note that that N, Z, V, and C flags are actually stored separately for performance reasons.
     *
     * PSW    15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
     *        CMODE PMODE RS -------- PRIORITY  T  N  Z  V  C
     *
     * @this {CPUStatePDP11}
     * @param {number} newPSW
     */
    setPSW(newPSW)
    {
        newPSW &= this.pswUsed;
        this.flagN = newPSW << 12;
        this.flagZ = (~newPSW) & 4;
        this.flagV = newPSW << 14;
        this.flagC = newPSW << 16;
        if ((newPSW ^ this.regPSW) & this.pswRegSet) {
            /*
             * Swap register sets
             */
            for (var i = this.regsAlt.length; --i >= 0;) {
                var tmp = this.regsGen[i];
                this.regsGen[i] = this.regsAlt[i];
                this.regsAlt[i] = tmp;
            }
        }
        this.pswMode = (newPSW >> PDP11.PSW.SHIFT.CMODE) & PDP11.MODE.MASK;
        var oldMode = (this.regPSW >> PDP11.PSW.SHIFT.CMODE) & PDP11.MODE.MASK;
        if (this.pswMode != oldMode) {
            /*
             * Swap stack pointers
             */
            this.regsAltStack[oldMode] = this.regsGen[6];
            this.regsGen[6] = this.regsAltStack[this.pswMode];
        }
        this.regPSW = newPSW;

        /*
         * Trigger a call to checkInterrupts(), just in case.  If there's an active IRQ, then setting
         * OPFLAG.IRQ is a no-brainer, but even if not, we set IRQ_DELAY in case the priority was lowered
         * enough to permit a programmed interrupt (via regPIR).
         */
        this.opFlags &= ~PDP11.OPFLAG.IRQ;
        this.opFlags |= (this.irqNext? PDP11.OPFLAG.IRQ : PDP11.OPFLAG.IRQ_DELAY);
    }

    /**
     * getSLR()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getSLR()
    {
        return this.regSLR & 0xff00;
    }

    /**
     * setSLR(newSL)
     *
     * @this {CPUStatePDP11}
     * @param {number} newSLR
     */
    setSLR(newSLR)
    {
        this.regSLR = newSLR | 0xff;
    }

    /**
     * getPIR()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getPIR()
    {
        return this.regPIR;
    }

    /**
     * setPIR(newPIR)
     *
     * @this {CPUStatePDP11}
     * @param {number} newPIR
     */
    setPIR(newPIR)
    {
        newPIR &= PDP11.PIR.BITS;
        if (newPIR) {
            var bits = newPIR >> PDP11.PIR.SHIFT.BITS;
            do {
                newPIR += PDP11.PIR.PIA_INC;
            } while ((bits >>= 1));
            this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
        }
        this.regPIR = newPIR;
    }

    /**
     * updateNZVFlags(result)
     *
     * NOTE: Only N and Z are updated based on the result; V is zeroed, C is unchanged.
     *
     * @this {CPUStatePDP11}
     * @param {number} result
     */
    updateNZVFlags(result)
    {
        this.flagN = this.flagZ = result;
        this.flagV = 0;
    }

    /**
     * updateNZVCFlags(result)
     *
     * NOTE: Only N and Z are updated based on the result; both V and C are simply zeroed.
     *
     * @this {CPUStatePDP11}
     * @param {number} result
     */
    updateNZVCFlags(result)
    {
        this.flagN = this.flagZ = result;
        this.flagV = this.flagC = 0;
    }

    /**
     * updateAllFlags(result, overflow)
     *
     * NOTE: The V flag is simply zeroed, unless a specific value is provided (eg, by NEG).
     *
     * @this {CPUStatePDP11}
     * @param {number} result
     * @param {number} [overflow]
     */
    updateAllFlags(result, overflow)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = overflow || 0;
    }

    /**
     * updateAddFlags(result, src, dst)
     *
     * @this {CPUStatePDP11}
     * @param {number} result (dst + src)
     * @param {number} src
     * @param {number} dst
     */
    updateAddFlags(result, src, dst)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = (src ^ result) & (dst ^ result);
    }

    /**
     * updateDecFlags(result, dst)
     *
     * NOTE: We could have used updateSubFlags() if not for the fact that the C flag must be preserved.
     *
     * @this {CPUStatePDP11}
     * @param {number} result (dst - src, where src is an implied 1)
     * @param {number} dst
     */
    updateDecFlags(result, dst)
    {
        this.flagN = this.flagZ = result;
        /*
         * Because src is always 1 (with a zero sign bit), it can be optimized out of this calculation.
         */
        this.flagV = (/* src ^ */ dst) & (dst ^ result);
    }

    /**
     * updateIncFlags(result, dst)
     *
     * NOTE: We could have used updateAddFlags() if not for the fact that the C flag must be preserved.
     *
     * @this {CPUStatePDP11}
     * @param {number} result (dst + src, where src is an implied 1)
     * @param {number} dst
     */
    updateIncFlags(result, dst)
    {
        this.flagN = this.flagZ = result;
        /*
         * Because src is always 1 (with a zero sign bit), it can be optimized out of this calculation.
         */
        this.flagV = (/* src ^ */ result) & (dst ^ result);
    }

    /**
     * updateMulFlags(result)
     *
     * @this {CPUStatePDP11}
     * @param {number} result
     */
    updateMulFlags(result)
    {
        this.flagN = result >> 16;
        this.flagZ = this.flagN | result;
        this.flagV = 0;
        this.flagC = (result < -32768 || result > 32767)? 0x10000 : 0;
    }

    /**
     * updateShiftFlags(result)
     *
     * @this {CPUStatePDP11}
     * @param {number} result
     */
    updateShiftFlags(result)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = this.flagN ^ (this.flagC >> 1);
    }

    /**
     * updateSubFlags(result, src, dst)
     *
     * NOTE: CMP operations calculate (src - dst) rather than (dst - src), so when they call updateSubFlags(),
     * they must reverse the order of the src and dst parameters.
     *
     * @this {CPUStatePDP11}
     * @param {number} result (dst - src)
     * @param {number} src
     * @param {number} dst
     */
    updateSubFlags(result, src, dst)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = (src ^ dst) & (dst ^ result);
    }

    /**
     * trap(vector, flag, reason)
     *
     * trap() handles all the trap/abort functions.  It reads the trap vector from kernel
     * D space, changes mode to reflect the new PSW and PC, and then pushes the old PSW and
     * PC onto the new mode stack.
     *
     * @this {CPUStatePDP11}
     * @param {number} vector
     * @param {number} flag
     * @param {number} [reason] (for diagnostic purposes only)
     */
    trap(vector, flag, reason)
    {
        if (DEBUG && this.dbg) {
            if (this.messageEnabled(MESSAGE.TRAP)) {
                var sReason = reason < 0? PDP11.REASONS[-reason] : this.dbg.toStrBase(reason);
                this.printf(MESSAGE.TRAP + MESSAGE.ADDR, "trap to vector %s (%s)\n", this.dbg.toStrBase(vector, 8), sReason);
            }
        }

        if (this.nDisableTraps) return;

        if (this.pswTrap < 0) {
            this.pswTrap = this.getPSW();
        } else if (!this.pswMode) {
            reason = PDP11.REASON.RED;      // double-fault (nested trap) forces a RED condition
        }

        if (reason == PDP11.REASON.RED) {
            if (this.opFlags & PDP11.OPFLAG.TRAP_RED) {
                reason = PDP11.REASON.PANIC;
            }
            this.opFlags |= PDP11.OPFLAG.TRAP_RED;
            /*
             * The next two lines used to be deferred until after the setPSW() below, but
             * I'm not seeing any dependencies on these registers, so I'm consolidating the code.
             */
            this.regErr |= PDP11.CPUERR.RED;
            this.regsGen[6] = vector = 4;
        }

        if (reason != PDP11.REASON.PANIC) {
            /*
             * NOTE: Pre-setting the auto-dec values for MMR1 to 0xF6F6 is a work-around for an "EKBEE1"
             * diagnostic (PC 056710), which tests what happens when a misaligned read triggers a BUS trap,
             * and that trap then triggers an MMU trap during the first pushWord() below.
             *
             * One would think it would be fine to zero those bits by setting opLast to vector alone,
             * and then letting each of the pushWord() calls below shift their own 0xF6 auto-dec value into
             * opLast.  When the first pushWord() triggers an MMU trap, we obviously won't get to the second
             * pushWord(), yet the diagnostic expects TWO auto-decs to be recorded.  I'm puzzled why the
             * hardware apparently indicates TWO auto-decs, if SP wasn't actually decremented twice, but who
             * am I to judge.
             */
            this.opLast = vector | 0xf6f60000;

            /*
             * Read from kernel D space
             */
            this.pswMode = 0;
            var newPC = this.readWord(vector | this.addrDSpace);
            var newPSW = this.readWord(((vector + 2) & 0xffff) | this.addrDSpace);

            /*
             * Set new PSW with previous mode
             */
            this.setPSW((newPSW & ~PDP11.PSW.PMODE) | ((this.pswTrap >> 2) & PDP11.PSW.PMODE));

            this.pushWord(this.pswTrap);
            this.pushWord(this.regsGen[7]);
            this.setPC(newPC);
        }

        /*
         * TODO: Determine the appropriate number of cycles for traps; all I've done for now is move the
         * cycle charge from opTrap() to here, and reduced the amount the other opcode handlers that call
         * trap() charge by a corresponding amount (5).
         */
        this.nStepCycles -= (4 + 1);

        /*
         * DEC's "TRAP TEST" (MAINDEC-11-D0NA-PB) triggers a RESERVED trap with an invalid opcode and the
         * stack deliberately set too low, and expects the stack overflow trap to be "sprung" immediately
         * afterward, so we only want to "lose interest" in the TRAP flag(s) that were set on entry, not ALL
         * of them.
         *
         *      this.opFlags &= ~PDP11.OPFLAG.TRAP_MASK;    // lose interest in traps after an abort
         *
         * Well, OK, we're also supposed to "lose interest" in the TF flag, too; otherwise, DEC tests fail.
         *
         * Finally, setPSW() likes to always set IRQ, to force a check of hardware interrupts prior to
         * the next instruction, just in case the PSW priority was lowered.  However, there are "TRAP TEST"
         * tests like this one:
         *
         *      005640: 012706 007700          MOV   #7700,SP
         *      005644: 012767 000340 172124   MOV   #340,177776
         *      005652: 012767 000100 171704   MOV   #100,177564
         *      005660: 012767 005712 172146   MOV   #5712,000034   ; set TRAP vector (its PSW is already zero)
         *      005666: 012767 005714 172170   MOV   #5714,000064   ; set hardware interrupt vector (its PSW is already zero)
         *      005674: 012767 005716 172116   MOV   #5716,000020   ; set IOT vector
         *      005702: 012767 000340 172112   MOV   #340,000022    ; set IOT PSW
         *      005710: 104400                 TRAP  000
         *      005712: 000004                 IOT
         *      005714: 000000                 HALT
         *
         * where, after "TRAP 000" has executed, a hardware interrupt will be acknowledged, and instead of
         * executing the IOT, we'll execute the HALT and fail the test.  We avoid that by relying on the same
         * trick that the SPL instruction uses: setting IRQ_DELAY instead of IRQ, which effectively delays
         * IRQ detection for one instruction, which is just long enough to allow the diagnostic to pass.
         */
        this.opFlags &= ~(flag | PDP11.OPFLAG.TRAP_TF | PDP11.OPFLAG.IRQ_MASK);
        this.opFlags |= PDP11.OPFLAG.IRQ_DELAY | PDP11.OPFLAG.TRAP_LAST;

        this.pswTrap = -1;                                  // reset flag that we have a trap within a trap

        /*
         * These next properties (in conjunction with setting PDP11.OPFLAG.TRAP_LAST) are purely an aid for the Debugger;
         * see getTrapStatus().
         */
        this.trapReason = reason;
        this.trapVector = vector;

        if (reason == PDP11.REASON.PANIC) {
            this.stopCPU();
        }
        if (reason >= PDP11.REASON.RED) throw vector;
    }

    /**
     * trapReturn()
     *
     * @this {CPUStatePDP11}
     */
    trapReturn()
    {
        /*
         * This code used to defer updating regsGen[6] (SP) until after BOTH words had been popped, which seems
         * safer, but if we're going to do pushes in trap(), then I see no reason to avoid doing pops in trapReturn().
         */
        var addr = this.popWord();
        var newPSW = this.popWord();
        if (this.regPSW & PDP11.PSW.CMODE) {
            /*
             * Keep SPL and allow lower only for modes and register set.
             *
             * TODO: Review, because it seems a bit odd to only CLEAR the PRI bits in the new PSW, and then to OR in
             * CMODE, PMODE, and REGSET bits from the current PSW.
             */
            newPSW = (newPSW & ~PDP11.PSW.PRI) | (this.regPSW & (PDP11.PSW.PRI | PDP11.PSW.REGSET | PDP11.PSW.PMODE | PDP11.PSW.CMODE));
        }
        this.setPC(addr);
        this.setPSW(newPSW);
        this.opFlags &= ~PDP11.OPFLAG.TRAP_TF;
    }

    /**
     * getTrapStatus()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    getTrapStatus()
    {
        return (this.opFlags & PDP11.OPFLAG.TRAP_LAST)? (this.trapVector | this.trapReason << 8) : 0;
    }

    /**
     * mapUnibus(addr)
     *
     * Used to convert 18-bit addresses to 22-bit addresses.  Since mapUnibus() only looks at the low 18 bits of addr,
     * there's no need to mask addr first.  Note that if bits 13-17 are all set, then the 18-bit address points to the
     * top 8Kb of its 256Kb range, and mapUnibus() will return addr unchanged, since it should already be pointing to
     * the top 8Kb of the 4Mb 22-bit range.
     *
     * Also, when bits 18-21 of addr are ALL set (which callers check using addr >= BusPDP11.UNIBUS_22BIT aka 0x3C0000),
     * then we have a 22-bit address pointing to the top 256Kb range, so if the UNIBUS relocation map is enabled, we again
     * pass the lower 18 bits of that address through the map.
     *
     * From the PDP-11/70 Handbook:
     *
     *      On the 11/44 and 11/70, there are a total of 31 mapping registers for address relocation.  Each register is
     *      composed of a double 16-bit PDP-11 word (in consecutive locations) that holds the 22-bit base address.  These
     *      registers have UNIBUS addresses in the range 770200 to 770372.
     *
     *      If the UNIBUS map relocation is not enabled, an incoming 18-bit UNIBUS address has 4 leading zeroes added for
     *      referencing a 22-bit physical address. The lower 18 bits are the same. No relocation is performed.
     *
     *      If UNIBUS map relocation is enabled, the five high order bits of the UNIBUS address are used to select one of the
     *      31 mapping registers.  The low-order 13 bits of the incoming address are used as an offset from the base address
     *      contained in the 22-bit mapping register.  To form the physical address, the 13 low-order bits of the UNIBUS
     *      address are added to 22 bits of the selected mapping register to produce the 22-bit physical address.  The lowest
     *      order bit of all mapping registers is always a zero, since relocation is always on word boundaries.
     *
     * Sadly, because these mappings occur at a word-granular level, we can't implement the mappings by simply shuffling
     * the underlying block around in the Bus component; it would be much more efficient if we could.  That's how we move
     * the IOPAGE in response to addressing changes.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    mapUnibus(addr)
    {
        var idx = (addr >> 13) & 0x1F;
        if (idx < 31) {
            if (this.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                /*
                 * The UNIBUS map relocation is enabled
                 */
                addr = (this.regsUniMap[idx] + (addr & 0x1FFF)) & BusPDP11.MASK_22BIT;
                /*
                 * TODO: Review this assertion.
                 *
                 *      this.assert(addr < BusPDP11.UNIBUS_22BIT || addr >= BusPDP11.IOPAGE_22BIT);
                 */
            } else {
                /*
                 * Since UNIBUS map relocation is NOT enabled, then as explained above:
                 *
                 *      If the UNIBUS map relocation is not enabled, an incoming 18-bit UNIBUS address has 4 leading zeroes added for
                 *      referencing a 22-bit physical address. The lower 18 bits are the same. No relocation is performed.
                 */
                addr &= ~BusPDP11.UNIBUS_22BIT;
            }
        }
        return addr;
    }

    /**
     * getAddrInfo(addr, fPhysical)
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {boolean} [fPhysical]
     * @returns {Array}
     */
    getAddrInfo(addr, fPhysical)
    {
        var a = [];
        var addrPhysical;

        if (fPhysical) {
            addrPhysical = this.mapUnibus(addr);
            var idx = (addr >> 13) & 0x1F;
            a.push(addrPhysical);
            a.push(idx);
            if (this.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                a.push(this.regsUniMap[idx]);
                a.push(addr & 0x1FFF);
            }
        }
        else if (!this.mmuEnable) {
            addrPhysical = addr & 0xffff;
            if (addrPhysical >= BusPDP11.IOPAGE_16BIT) addrPhysical |= this.addrIOPage;
            a.push(addrPhysical);
        }
        else {
            var mode = this.pswMode << 1;
            var page = addr >> 13;
            if (page > 7) mode |= 1;
            if (!(this.regMMR3 & this.mapMMR3[this.pswMode])) page &= 7;
            var pdr = this.regsPDR[this.pswMode][page];
            var off = addr & 0x1fff;
            var paf = (this.regsPAR[this.pswMode][page] << 6);
            addrPhysical = (paf + off) & this.mmuMask;
            if (addrPhysical >= BusPDP11.UNIBUS_22BIT) addrPhysical = this.mapUnibus(addrPhysical);
            a.push(addrPhysical);   // a[0]
            a.push(off);            // a[1]
            a.push(mode);           // a[2] (0=KI, 1=KD, 2=SI, 3=SD, 4=??, 5=??, 6=UI, 7=UD)
            a.push(page & 7);       // a[3]
            a.push(paf);            // a[4]
            a.push(this.mmuMask);   // a[5]
        }
        return a;
    }

    /**
     * mapVirtualToPhysical(addrVirtual, access)
     *
     * mapVirtualToPhysical() does memory management.  It converts a 17-bit I/D virtual address to a
     * 22-bit physical address.  A real PDP 11/70 memory management unit can be enabled separately for
     * read and write for diagnostic purposes.  This is handled here by having an enable mask (mmuEnable)
     * which is tested against the operation access mask (access).  If there is no match, then the virtual
     * address is simply mapped as a 16 bit physical address with the upper page going to the IO address
     * space.  Significant access mask values used are PDP11.ACCESS.READ and PDP11.ACCESS.WRITE.
     *
     * When doing mapping, pswMode is used to decide what address space is to be used (0 = kernel,
     * 1 = supervisor, 2 = illegal, 3 = user).  Normally, pswMode is set by the setPSW() function, but
     * there are exceptions for instructions which move data between address spaces (MFPD, MFPI, MTPD,
     * and MTPI) and trap().  These will modify pswMode outside of setPSW() and then restore it again if
     * all worked.  If however something happens to cause a trap then no restore is done as setPSW()
     * will have been invoked as part of the trap, which will resynchronize pswMode.
     *
     * A PDP-11/70 is different from other PDP-11s in that the highest 18 bit space (017000000 & above)
     * maps directly to UNIBUS space - including low memory. This doesn't appear to be particularly useful
     * as it restricts maximum system memory - although it does appear to allow software testing of the
     * UNIBUS map.  This feature also appears to confuse some OSes which test consecutive memory locations
     * to find maximum memory -- and on a full memory system find themselves accessing low memory again at
     * high addresses.
     *
     * Construction of a Physical Address
     * ----------------------------------
     *
     *      Virtual Addr (VA)                                  12 11 10  9  8  7  6  5  4  3  2  1  0
     *    + Page Addr Field (PAF)   15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
     *                              -----------------------------------------------------------------
     *    = Physical Addr (PA)      21 20 19 18 17 16 15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
     *
     * The Page Address Field (PAF) comes from a Page Address Register (PAR) that is selected by Virtual
     * Address (VA) bits 15-13.  You can see from the above alignments that the VA contributes to the low
     * 13 bits, providing an 8Kb range.
     *
     * VA bits 0-5 pass directly through to the PA; those are also called the DIB (Displacement in Block) bits.
     * VA bits 6-12 are added to the low 7 bits of the PAF and are also called the BN (Block Number) bits.
     *
     * You can also think of the entire PAF as a block number, where each block is 64 bytes.  This is consistent
     * with the LSIZE register at 177760, which is supposed to contain the block number of the last 64-byte block
     * of memory installed.
     *
     * Note that if a PAR is initialized to zero, successively adding 0200 (0x80) to the PAR will advance the
     * base physical address to the next 8Kb page.
     *
     * @this {CPUStatePDP11}
     * @param {number} addrVirtual
     * @param {number} access
     * @returns {number}
     */
    mapVirtualToPhysical(addrVirtual, access)
    {
        var page, pdr, addr;

        /*
         * This can happen when the MAINT bit of MMR0 is set but not the ENABLED bit.
         */
        if (!(access & this.mmuEnable)) {
            addr = addrVirtual & 0xffff;
            if (addr >= BusPDP11.IOPAGE_16BIT) addr |= this.addrIOPage;
            return addr;
        }

        page = addrVirtual >> 13;
        if (!(this.regMMR3 & this.mapMMR3[this.pswMode])) page &= 7;
        pdr = this.regsPDR[this.pswMode][page];
        addr = ((this.regsPAR[this.pswMode][page] << 6) + (addrVirtual & 0x1fff)) & this.mmuMask;

        if (addr >= BusPDP11.UNIBUS_22BIT) addr = this.mapUnibus(addr);

        if (this.nDisableTraps) return addr;

        /*
         * TEST #122 ("KT BEND") in the "EKBEE1" diagnostic (PC 076060) triggers a NOMEMORY error using
         * this instruction:
         *
         *      076170: 005037 140100          CLR   @#140100
         *
         * It also triggers an ODDADDR error using this instruction:
         *
         *      076356: 005037 140001          CLR   @#140001
         *
         * @paulnank: So it turns out that the memory management unit that does odd address and non-existent
         * memory trapping: who knew? :-)  I thought these would have been handled at access time.
         *
         * @jeffpar: We're assuming, at least, that the MMU does its "NEXM" (NOMEMORY) non-existent memory test
         * very simplistically, by range-checking the address against something like the memory SIZE registers,
         * because otherwise the MMU would have to wait for a bus time-out: something so prohibitively expensive
         * that the MMU could not afford to do it.  I rely on addrInvalid, which is derived from the same Bus
         * getMemoryLimit() service that the SIZE registers (177760--177762) use to derive their value.
         */
        if (addr >= this.addrInvalid && addr < this.addrIOPage) {
            this.regErr |= PDP11.CPUERR.NOMEMORY;
            this.trap(PDP11.TRAP.BUS, 0, addr);
        }
        else if ((addr & 0x1) && !(access & PDP11.ACCESS.BYTE)) {
            this.regErr |= PDP11.CPUERR.ODDADDR;
            this.trap(PDP11.TRAP.BUS, 0, addr);
        }

        var newMMR0 = 0;
        switch (pdr & PDP11.PDR.ACF.MASK) {

        case PDP11.PDR.ACF.RO1:     // 0x1: read-only, abort on write attempt, memory management trap on read (11/70 only)
            newMMR0 = PDP11.MMR0.TRAP_MMU;
            /* falls through */

        case PDP11.PDR.ACF.RO:      // 0x2: read-only, abort on write attempt
            pdr |= PDP11.PDR.ACCESSED;
            if (access & PDP11.ACCESS.WRITE) {
                newMMR0 = PDP11.MMR0.ABORT_RO;
            }
            break;

        case PDP11.PDR.ACF.RW1:     // 0x4: read/write, memory management trap upon completion of a read or write
            newMMR0 = PDP11.MMR0.TRAP_MMU;
            /* falls through */

        case PDP11.PDR.ACF.RW2:     // 0x5: read/write, memory management trap upon completion of a write (11/70 only)
            if (access & PDP11.ACCESS.WRITE) {
                newMMR0 = PDP11.MMR0.TRAP_MMU;
            }
            /* falls through */

        case PDP11.PDR.ACF.RW:      // 0x6: read/write, no system trap/abort action
            pdr |= ((access & PDP11.ACCESS.WRITE) ? (PDP11.PDR.ACCESSED | PDP11.PDR.MODIFIED) : PDP11.PDR.ACCESSED);
            break;

        default:                    // 0x0 (non-resident, abort all accesses) or 0x3 or 0x7 (unused, abort all accesses)
            newMMR0 = PDP11.MMR0.ABORT_NR;
            break;
        }

        if ((pdr & (PDP11.PDR.PLF | PDP11.PDR.ED)) != PDP11.PDR.PLF) {      // skip checking most common case (hopefully)
            /*
             * The Page Descriptor Register (PDR) Page Length Field (PLF) is a 7-bit block number, where a block
             * is 64 bytes.  Since the bit 0 of the block number is located at bit 8 of the PDR, we shift the PDR
             * right 2 bits and then clear the bottom 6 bits by masking it with 0x1FC0.
             */
            if (pdr & PDP11.PDR.ED) {
                if (pdr & PDP11.PDR.PLF) {
                    if ((addrVirtual & 0x1FC0) < ((pdr >> 2) & 0x1FC0)) {
                        newMMR0 |= PDP11.MMR0.ABORT_PL;
                    }
                }
            } else {
                if ((addrVirtual & 0x1FC0) > ((pdr >> 2) & 0x1FC0)) {
                    newMMR0 |= PDP11.MMR0.ABORT_PL;
                }
            }
        }

        /*
         * Aborts and traps: log FIRST trap and MOST RECENT abort
         */
        this.regsPDR[this.pswMode][page] = pdr;
        if (addr != ((BusPDP11.IOPAGE_22BIT | PDP11.UNIBUS.MMR0) & this.mmuMask) || this.pswMode) {
            this.mmuLastMode = this.pswMode;
            this.mmuLastPage = page;
        }

        if (newMMR0) {
            if (newMMR0 & PDP11.MMR0.ABORT) {
                if (this.pswTrap >= 0) {
                    newMMR0 |= PDP11.MMR0.COMPLETED;
                }
                if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
                    newMMR0 |= (this.regMMR0 & PDP11.MMR0.TRAP_MMU) | (this.mmuLastMode << 5) | (this.mmuLastPage << 1);
                    this.assert(!(newMMR0 & ~PDP11.MMR0.UPDATE));
                    this.setMMR0((this.regMMR0 & ~PDP11.MMR0.UPDATE) | (newMMR0 & PDP11.MMR0.UPDATE));
                }
                /*
                 * NOTE: In unusual circumstances, if regMMR0 already indicated an ABORT condition above,
                 * we run the risk of infinitely looping; eg, we call trap(), which calls mapVirtualToPhysical()
                 * on the trap vector, which faults again, etc.
                 *
                 * TODO: Determine what a real PDP-11 does in that situation; in our case, trap() deals with it
                 * by checking an internal OPFLAG (TRAP_RED) and turning the next trap into a PANIC, triggering an
                 * immediate HALT.
                 */
                this.trap(PDP11.TRAP.MMU, PDP11.OPFLAG.TRAP_MMU, PDP11.REASON.ABORT);
            }
            if (!(this.regMMR0 & (PDP11.MMR0.ABORT | PDP11.MMR0.TRAP_MMU))) {
                /*
                 * TODO: Review the code below, because the address range seems over-inclusive.
                 */
                if (addr < ((BusPDP11.IOPAGE_22BIT | PDP11.UNIBUS.SIPDR0) & this.mmuMask) ||
                    addr > ((BusPDP11.IOPAGE_22BIT | PDP11.UNIBUS.UDPAR7 | 0x1) & this.mmuMask)) {
                    this.regMMR0 |= PDP11.MMR0.TRAP_MMU;
                    if (this.regMMR0 & PDP11.MMR0.MMU_TRAPS) this.opFlags |= PDP11.OPFLAG.TRAP_MMU;
                }
            }
        }
        return addr;
    }

    /**
     * popWord()
     *
     * @this {CPUStatePDP11}
     * @returns {number}
     */
    popWord()
    {
        var result = this.readWord(this.regsGen[6] | this.addrDSpace);
        this.regsGen[6] = (this.regsGen[6] + 2) & 0xffff;
        return result;
    }

    /**
     * pushWord(data)
     *
     * @this {CPUStatePDP11}
     * @param {number} data
     */
    pushWord(data)
    {
        var addrVirtual = (this.regsGen[6] - 2) & 0xffff;
        this.regsGen[6] = addrVirtual;              // BSD needs SP updated before any fault :-(
        this.opLast = (this.opLast & 0xffff) | ((this.opLast & ~0xffff) << 8) | (0x00f6 << 16);
        if (!(this.opFlags & PDP11.OPFLAG.TRAP_RED)) this.checkStackLimit(PDP11.ACCESS.WRITE_WORD, -2, addrVirtual);
        this.writeWord(addrVirtual, data);
    }

    /**
     * getAddrByMode(mode, reg, access)
     *
     * getAddrByMode() maps a six bit operand to a 17 bit I/D virtual address space.
     *
     * Instruction operands are six bits in length - three bits for the mode and three
     * for the register. The 17th I/D bit in the resulting virtual address represents
     * whether the reference is to Instruction space or Data space - which depends on
     * combination of the mode and whether the register is the Program Counter (R7).
     *
     * The eight modes are:-
     *      0   R           no valid virtual address
     *      1   (R)         operand from I/D depending if R = 7
     *      2   (R)+        operand from I/D depending if R = 7
     *      3   @(R)+       address from I/D depending if R = 7 and operand from D space
     *      4   -(R)        operand from I/D depending if R = 7
     *      5   @-(R)       address from I/D depending if R = 7 and operand from D space
     *      6   x(R)        x from I space but operand from D space
     *      7   @x(R)       x from I space but address and operand from D space
     *
     * Also need to keep MMR1 updated as this stores which registers have been
     * incremented and decremented so that the OS can reset and restart an instruction
     * if a page fault occurs.
     *
     * Stack Overflow Traps
     * --------------------
     * On the PDP-11/20, stack overflow traps occur when an address below 400 is referenced
     * by SP in either mode 4 (auto-decrement) or 5 (auto-decrement deferred).  The instruction
     * is allowed to complete before the trap is issued.  NOTE: This information comes
     * directly from the PDP-11/20 Handbook (1971), but the 11/20 diagnostics apparently only
     * test mode 4, not mode 5, because when I later removed stack limit checks for mode 5 on
     * the 11/70, none of the 11/20 tests complained.
     *
     * TODO: Find some independent confirmation as to whether ANY PDP-11 models check for
     * stack overflow on mode 5 (auto-decrement deferred); if they do, then further tweaks to
     * checkStackLimit functions may be required.
     *
     * On the PDP-11/70, the stack limit register (177774) allows a variable boundary for the
     * kernel stack.
     *
     * @this {CPUStatePDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getAddrByMode(mode, reg, access)
    {
        var addrVirtual, step;
        var addrDSpace = (access & PDP11.ACCESS.VIRT)? 0 : this.addrDSpace;

        /*
         * Modes that need to auto-increment or auto-decrement will break, in order to perform
         * the update; others will return an address immediately.
         */
        switch (mode) {
        /*
         * Mode 0: Registers don't have a virtual address, so trap.
         *
         * NOTE: Most instruction code paths never call getAddrByMode() when the mode is zero;
         * JMP and JSR instructions are exceptions, but that's OK, because those are documented as
         * ILLEGAL instructions which produce a BUS trap (as opposed to UNDEFINED instructions
         * that cause a RESERVED trap).
         */
        case 0:
            this.trap(PDP11.TRAP.BUS, 0, PDP11.REASON.ILLEGAL);
            return 0;

        /*
         * Mode 1: (R)
         */
        case 1:
            if (reg == 6) this.checkStackLimit(access, 0, this.regsGen[6]);
            this.nStepCycles -= (2 + 1);
            return (reg == 7? this.regsGen[reg] : (this.regsGen[reg] | addrDSpace));

        /*
         * Mode 2: (R)+
         */
        case 2:
            step = 2;
            addrVirtual = this.regsGen[reg];
            if (reg == 6) this.checkStackLimit(access, step, addrVirtual);
            if (reg != 7) {
                addrVirtual |= addrDSpace;
                if (reg < 6 && (access & PDP11.ACCESS.BYTE)) step = 1;
            }
            this.nStepCycles -= (2 + 1);
            break;

        /*
         * Mode 3: @(R)+
         */
        case 3:
            step = 2;
            addrVirtual = this.regsGen[reg];
            if (reg != 7) addrVirtual |= addrDSpace;
            addrVirtual = this.readWord(addrVirtual);
            addrVirtual |= addrDSpace;
            this.nStepCycles -= (5 + 2);
            break;

        /*
         * Mode 4: -(R)
         */
        case 4:
            step = -2;
            if (reg < 6 && (access & PDP11.ACCESS.BYTE)) step = -1;
            addrVirtual = (this.regsGen[reg] + step) & 0xffff;
            if (reg == 6) this.checkStackLimit(access, step, addrVirtual);
            if (reg != 7) addrVirtual |= addrDSpace;
            this.nStepCycles -= (3 + 1);
            break;

        /*
         * Mode 5: @-(R)
         */
        case 5:
            step = -2;
            addrVirtual = (this.regsGen[reg] - 2) & 0xffff;
            if (reg != 7) addrVirtual |= addrDSpace;
            addrVirtual = this.readWord(addrVirtual) | addrDSpace;
            this.nStepCycles -= (6 + 2);
            break;

        /*
         * Mode 6: d(R)
         */
        case 6:
            addrVirtual = this.readWord(this.advancePC(2));
            addrVirtual = (addrVirtual + this.regsGen[reg]) & 0xffff;
            if (reg == 6) this.checkStackLimit(access, 0, addrVirtual);
            this.nStepCycles -= (4 + 2);
            return addrVirtual | addrDSpace;

        /*
         * Mode 7: @d(R)
         */
        case 7:
            addrVirtual = this.readWord(this.advancePC(2));
            addrVirtual = (addrVirtual + this.regsGen[reg]) & 0xffff;
            addrVirtual = this.readWord(addrVirtual | this.addrDSpace);
            this.nStepCycles -= (7 + 3);
            return addrVirtual | addrDSpace;
        }

        this.regsGen[reg] = (this.regsGen[reg] + step) & 0xffff;
        this.opLast = (this.opLast & 0xffff) | ((this.opLast & ~0xffff) << 8) | ((((step << 3) & 0xf8) | reg) << 16);

        return addrVirtual;
    }

    /**
     * checkStackLimit1120(access, step, addr)
     *
     * @this {CPUStatePDP11}
     * @param {number} access
     * @param {number} step
     * @param {number} addr
     */
    checkStackLimit1120(access, step, addr)
    {
        /*
         * NOTE: DEC's "TRAP TEST" (MAINDEC-11-D0NA-PB) expects "TST -(SP)" to trap when SP is 150,
         * so we ignore the access parameter.  Also, strangely, it does NOT expect this instruction
         * to trap:
         *
         *      R0=006302 R1=000000 R2=000000 R3=000000 R4=000000 R5=000776
         *      SP=000000 PC=006346 PS=000344 IR=000000 SL=000377 T0 N0 Z1 V0 C0
         *      006346: 112667 171426          MOVB  (SP)+,000000
         *
         * so if the step parameter is positive, we let it go.
         */
        if (!this.pswMode && step <= 0 && addr <= this.regSLR) {
            /*
             * On older machines (eg, the PDP-11/20), there is no "YELLOW" and "RED" distinction, and the
             * instruction is always allowed to complete, so the trap must always be issued in this fashion.
             */
            this.opFlags |= PDP11.OPFLAG.TRAP_SP;
        }
    }

    /**
     * checkStackLimit1140(access, step, addr)
     *
     * @this {CPUStatePDP11}
     * @param {number} access
     * @param {number} step
     * @param {number} addr
     */
    checkStackLimit1140(access, step, addr)
    {
        if (!this.pswMode) {
            /*
             * NOTE: The 11/70 CPU Instruction Exerciser does NOT expect reads to trigger a stack overflow,
             * so we check the access parameter.
             *
             * Moreover, TEST 40 of diagnostic EKBBF0 executes this instruction:
             *
             *      R0=177777 R1=032435 R2=152110 R3=000024 R4=153352 R5=001164
             *      SP=177776 PC=020632 PS=000350 IR=000000 SL=000377 T0 N1 Z0 V0 C0
             *      020632: 005016                 CLR   @SP                    ;cycles=7
             *
             * expecting a RED stack overflow trap.  Yes, using *any* addresses in the IOPAGE for the stack isn't
             * a good idea, but who said it was illegal?  For now, we're going to restrict overflows to the highest
             * address tested by the diagnostic (0xFFFE, aka the PSW), by making that address negative.
             */
            if (addr >= 0xFFFE) addr |= ~0xFFFF;
            if ((access & PDP11.ACCESS.WRITE) && addr <= this.regSLR) {
                /*
                 * regSLR can never fall below 0xFF, so this subtraction can never go negative, so this comparison
                 * is always safe.
                 */
                if (addr <= this.regSLR - 32) {
                    this.trap(PDP11.TRAP.BUS, 0, PDP11.REASON.RED);
                } else {
                    this.regErr |= PDP11.CPUERR.YELLOW;
                    this.opFlags |= PDP11.OPFLAG.TRAP_SP;
                }
            }
        }
    }

    /**
     * getByteChecked(addr)
     *
     * This is the getByte() handler whenever the Debugger has one or more virtual memory READ breakpoints set;
     * otherwise, getByte() is bound to Bus.getByte().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    getByteChecked(addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryRead(addr, 1);
        }
        return this.getByteDirect(addr);
    }

    /**
     * getWordChecked(addr)
     *
     * This is the getWord() handler whenever the Debugger has one or more virtual memory READ breakpoints set;
     * otherwise, getWord() is bound to Bus.getWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    getWordChecked(addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryRead(addr, 2);
        }
        return this.getWordDirect(addr);
    }

    /**
     * setByteChecked(addr, data)
     *
     * This is the setByte() handler whenever the Debugger has one or more virtual memory WRITE breakpoints set;
     * otherwise, setByte() is bound to Bus.setByte().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {number} data
     */
    setByteChecked(addr, data)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryWrite(addr, 1);
        }
        this.setByteDirect(addr, data);
    }

    /**
     * setWordChecked(addr, data)
     *
     * This is the setWord() handler whenever the Debugger has one or more virtual memory WRITE breakpoints set;
     * otherwise, setWord() is bound to Bus.setWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {number} data
     */
    setWordChecked(addr, data)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryWrite(addr, 2);
        }
        this.setWordDirect(addr, data);
    }

    /**
     * getByteSafe(addr)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    getByteSafe(addr)
    {
        this.nDisableTraps++;
        var b = this.bus.getByte(this.mapVirtualToPhysical(addr, PDP11.ACCESS.READ_BYTE));
        this.nDisableTraps--;
        return b;
    }

    /**
     * getWordSafe(addr)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    getWordSafe(addr)
    {
        this.nDisableTraps++;
        var w = this.bus.getWord(this.mapVirtualToPhysical(addr, PDP11.ACCESS.READ_WORD));
        this.nDisableTraps--;
        return w;
    }

    /**
     * setByteSafe(addr, data)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {number} data
     */
    setByteSafe(addr, data)
    {
        this.nDisableTraps++;
        this.bus.setByte(this.mapVirtualToPhysical(addr, PDP11.ACCESS.WRITE_BYTE), data);
        this.nDisableTraps--;
    }

    /**
     * setWordSafe(addr, data)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {number} data
     */
    setWordSafe(addr, data)
    {
        this.nDisableTraps++;
        this.bus.setWord(this.mapVirtualToPhysical(addr, PDP11.ACCESS.WRITE_WORD), data);
        this.nDisableTraps--;
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    addMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            var nBreaks = fWrite? this.nWriteBreaks++ : this.nReadBreaks++;
            this.assert(nBreaks >= 0);
            if (!nBreaks) this.setMemoryAccess();
        }
    }

    /**
     * removeMemBreak(addr, fWrite)
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    removeMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            var nBreaks = fWrite? --this.nWriteBreaks : --this.nReadBreaks;
            this.assert(nBreaks >= 0);
            if (!nBreaks) this.setMemoryAccess();
        }
    }

    /**
     * getPhysicalAddrByMode(mode, reg, access)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through getAddr().
     *
     * @this {CPUStatePDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getPhysicalAddrByMode(mode, reg, access)
    {
        return this.getAddrByMode(mode, reg, access);
    }

    /**
     * getVirtualAddrByMode(mode, reg, access)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through getAddr().
     *
     * @this {CPUStatePDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getVirtualAddrByMode(mode, reg, access)
    {
        return this.mapVirtualToPhysical(this.getAddrByMode(mode, reg, access), access);
    }

    /**
     * readWordFromPhysical(addr)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    readWordFromPhysical(addr)
    {
        return this.bus.getWord(this.addrLast = addr);
    }

    /**
     * readWordFromPhysicalChecked(addr)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @returns {number}
     */
    readWordFromPhysicalChecked(addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryRead(addr, 2);
        }
        return this.readWordFromPhysical(addr);
    }

    /**
     * readWordFromVirtual(addrVirtual)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @returns {number}
     */
    readWordFromVirtual(addrVirtual)
    {
        return this.bus.getWord(this.addrLast = this.mapVirtualToPhysical(addrVirtual, PDP11.ACCESS.READ_WORD));
    }

    /**
     * readWordFromVirtualChecked(addrVirtual)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @returns {number}
     */
    readWordFromVirtualChecked(addrVirtual)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryRead(addrVirtual, 2);
        }
        return this.readWordFromVirtual(addrVirtual);
    }

    /**
     * writeWordToPhysical(addr, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeWordToPhysical(addr, data)
    {
        this.bus.setWord(this.addrLast = addr, data);
    }

    /**
     * writeWordToPhysicalChecked(addr, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeWordToPhysicalChecked(addr, data)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryWrite(addr, 2);
        }
        this.writeWordToPhysical(addr, data);
    }

    /**
     * writeWordToVirtual(addrVirtual, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @param {number} data
     */
    writeWordToVirtual(addrVirtual, data)
    {
        this.bus.setWord(this.addrLast = this.mapVirtualToPhysical(addrVirtual, PDP11.ACCESS.WRITE_WORD), data);
    }

    /**
     * writeWordToVirtualChecked(addrVirtual, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {CPUStatePDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @param {number} data
     */
    writeWordToVirtualChecked(addrVirtual, data)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.checkMemoryWrite(addrVirtual, 2);
        }
        this.writeWordToVirtual(addrVirtual, data);
    }

    /**
     * readWordFromPrevSpace(opCode, access)
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {number} access (really just PDP11.ACCESS.DSPACE or PDP11.ACCESS.ISPACE)
     * @returns {number}
     */
    readWordFromPrevSpace(opCode, access)
    {
        var data;
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (reg != 6 || ((this.regPSW >> 2) & PDP11.PSW.PMODE) === (this.regPSW & PDP11.PSW.PMODE)) {
                data = this.regsGen[reg];
            } else {
                data = this.regsAltStack[(this.regPSW >> 12) & 3];
            }
        } else {
            var addr = this.getAddrByMode(mode, reg, PDP11.ACCESS.READ_WORD);
            if (!(access & PDP11.ACCESS.DSPACE)) {
                if ((this.regPSW & 0xf000) !== 0xf000) addr &= 0xffff;
            }
            this.pswMode = (this.regPSW >> 12) & 3;
            data = this.readWord(addr | (access & this.addrDSpace));
            this.pswMode = (this.regPSW >> 14) & 3;
        }
        return data;
    }

    /**
     * writeWordToPrevSpace(opCode, access, data)
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {number} access (really just PDP11.ACCESS.DSPACE or PDP11.ACCESS.ISPACE)
     * @param {number} data
     */
    writeWordToPrevSpace(opCode, access, data)
    {
        this.opLast = (this.opLast & 0xffff) | (0x0016 << 16);
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (reg != 6 || ((this.regPSW >> 2) & PDP11.PSW.PMODE) === (this.regPSW & PDP11.PSW.PMODE)) {
                this.regsGen[reg] = data;
            } else {
                this.regsAltStack[(this.regPSW >> 12) & 3] = data;
            }
        } else {
            var addr = this.getAddrByMode(mode, reg, PDP11.ACCESS.WRITE_WORD);
            if (!(access & PDP11.ACCESS.DSPACE)) addr &= 0xffff;
            /*
             * TODO: Consider replacing the following code with writeWord(), by adding optional pswMode
             * parameters for each of the discrete mapVirtualToPhysical() and setWord() operations, because
             * as it stands, this is the only remaining call to mapVirtualToPhysical() outside of our
             * setMemoryAccess() handlers.
             */
            this.pswMode = (this.regPSW >> 12) & 3;
            addr = this.mapVirtualToPhysical(addr | (access & PDP11.ACCESS.DSPACE), PDP11.ACCESS.WRITE);
            this.pswMode = (this.regPSW >> 14) & 3;
            this.setWord(addr, data);
        }
    }

    /**
     * readSrcByte(opCode)
     *
     * WARNING: If the SRC operand is a register, offRegSrc ensures we return a negative register number
     * rather than the register value, because on the PDP-11/20, the final value of the register must be
     * resolved AFTER the DST operand has been decoded and any pre-decrement or post-increment operations
     * affecting the SRC register have been completed.  See readSrcWord() for more details.
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @returns {number}
     */
    readSrcByte(opCode)
    {
        var result;
        opCode >>= PDP11.SRCMODE.SHIFT;
        var reg = this.srcReg = opCode & PDP11.OPREG.MASK;
        var mode = this.srcMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg + this.offRegSrc] & this.maskRegSrcByte;
        } else {
            result = this.getByte(this.getAddr(mode, reg, PDP11.ACCESS.READ_BYTE));
        }
        return result;
    }

    /**
     * readSrcWord(opCode)
     *
     * WARNING: If the SRC operand is a register, offRegSrc ensures we return a negative register number
     * rather than the register value, because on the PDP-11/20, the final value of the register must be
     * resolved AFTER the DST operand has been decoded and any pre-decrement or post-increment operations
     * affecting the SRC register have been completed.
     *
     * Here's an example from DEC's "TRAP TEST" (MAINDEC-11-D0NA-PB):
     *
     *      007200: 012700 006340          MOV   #6340,R0
     *      007204: 010020                 MOV   R0,(R0)+
     *      007206: 026727 177126 006342   CMP   006340,#6342
     *      007214: 001401                 BEQ   007220
     *      007216: 000000                 HALT
     *
     * If this function returned the value of R0 for the SRC operand of "MOV R0,(R0)+", then the operation
     * would write 6340 to the destination, rather than 6342.
     *
     * Most callers don't need to worry about this, because if they pass the result from readSrcWord() directly
     * to writeDstWord() or updateDstWord(), those functions will take care of converting any negative register
     * number back into the current register value.  The exceptions are opcodes that don't modify the DST operand
     * (BIT, BITB, CMP, and CMPB); those opcode handlers must deal with negative register numbers themselves.
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @returns {number}
     */
    readSrcWord(opCode)
    {
        var result;
        opCode >>= PDP11.SRCMODE.SHIFT;
        var reg = this.srcReg = opCode & PDP11.OPREG.MASK;
        var mode = this.srcMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg + this.offRegSrc];
        } else {
            result = this.getWord(this.getAddr(mode, reg, PDP11.ACCESS.READ_WORD));
        }
        return result;
    }

    /**
     * readDstAddr(opCode)
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @returns {number}
     */
    readDstAddr(opCode)
    {
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        return this.getAddrByMode(mode, reg, PDP11.ACCESS.VIRT);
    }

    /**
     * readDstByte(opCode)
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @returns {number}
     */
    readDstByte(opCode)
    {
        var result;
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg] & 0xff;
        } else {
            result = this.getByte(this.getAddr(mode, reg, PDP11.ACCESS.READ_BYTE));
        }
        return result;
    }

    /**
     * readDstWord(opCode)
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @returns {number}
     */
    readDstWord(opCode)
    {
        var result;
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg];
        } else {
            result = this.getWord(this.getAddr(mode, reg, PDP11.ACCESS.READ_WORD));
        }
        return result;
    }

    /**
     * updateDstByte(opCode, data, fnOp)
     *
     * Used whenever the DST operand (as described by opCode) needs to be read before writing.
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {number} data
     * @param {function(number,number)} fnOp
     */
    updateDstByte(opCode, data, fnOp)
    {
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            var dst = this.regsGen[reg];
            data = (data < 0? (this.regsGen[-data-1] & 0xff) : data);
            this.regsGen[reg] = (dst & 0xff00) | fnOp.call(this, data, dst & 0xff);
        } else {
            var addr = this.dstAddr = this.getAddr(mode, reg, PDP11.ACCESS.UPDATE_BYTE);
            data = (data < 0? (this.regsGen[-data-1] & 0xff) : data);
            this.setByte(addr, fnOp.call(this, data, this.getByte(addr)));
            if (addr & 1) this.nStepCycles--;
        }
    }

    /**
     * updateDstWord(opCode, data, fnOp)
     *
     * Used whenever the DST operand (as described by opCode) needs to be read before writing.
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {number} data
     * @param {function(number,number)} fnOp
     */
    updateDstWord(opCode, data, fnOp)
    {
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;

        this.assert(data < 0 && data >= -8 || !(data & ~0xffff));

        if (!mode) {
            this.regsGen[reg] = fnOp.call(this, data < 0? this.regsGen[-data-1] : data, this.regsGen[reg]);
        } else {
            var addr = this.getAddr(mode, reg, PDP11.ACCESS.UPDATE_WORD);
            this.setWord(addr, fnOp.call(this, data < 0? this.regsGen[-data-1] : data, this.getWord(addr)));
        }
    }

    /**
     * writeDstByte(opCode, data, writeFlags, fnFlags)
     *
     * Used whenever the DST operand (as described by opCode) does NOT need to be read before writing.
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {number} data
     * @param {number} writeFlags (WRITE.BYTE aka 0xff, or WRITE.SBYTE aka 0xffff)
     * @param {function(number)} fnFlags
     */
    writeDstByte(opCode, data, writeFlags, fnFlags)
    {
        this.assert(writeFlags);
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (!data) {
                /*
                 * Potentially worthless optimization (but it looks good on "paper").
                 */
                this.regsGen[reg] &= ~writeFlags;
            } else {
                /*
                 * Potentially worthwhile optimization: skipping the sign-extending data shifts
                 * if writeFlags is WRITE.BYTE (but that requires an extra test and separate code paths).
                 */
                data = (data < 0? (this.regsGen[-data-1] & 0xff): data);
                this.regsGen[reg] = (this.regsGen[reg] & ~writeFlags) | (((data << 24) >> 24) & writeFlags);
            }
            fnFlags.call(this, data << 8);
        } else {
            var addr = this.getAddr(mode, reg, PDP11.ACCESS.WRITE_BYTE);
            fnFlags.call(this, (data = data < 0? (this.regsGen[-data-1] & 0xff) : data) << 8);
            this.setByte(addr, data);
            if (addr & 1) this.nStepCycles--;
        }
    }

    /**
     * writeDstWord(opCode, data, fnFlags)
     *
     * Used whenever the DST operand (as described by opCode) does NOT need to be read before writing.
     *
     * @this {CPUStatePDP11}
     * @param {number} opCode
     * @param {number} data
     * @param {function(number)} fnFlags
     */
    writeDstWord(opCode, data, fnFlags)
    {
        var reg = this.dstReg = opCode & PDP11.OPREG.MASK;
        var mode = this.dstMode = (opCode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;

        this.assert(data < 0 && data >= -8 || !(data & ~0xffff));

        if (!mode) {
            this.regsGen[reg] = (data = data < 0? this.regsGen[-data-1] : data);
            fnFlags.call(this, data);
        } else {
            var addr = this.getAddr(mode, reg, PDP11.ACCESS.WRITE_WORD);
            fnFlags.call(this, (data = data < 0? this.regsGen[-data-1] : data));
            this.setWord(addr, data);
        }
    }

    /**
     * stepCPU(nMinCycles)
     *
     * NOTE: Single-stepping should not be confused with the Trap flag; single-stepping is a Debugger
     * operation that's completely independent of Trap status.  The CPU can go in and out of Trap mode,
     * in and out of h/w interrupt service routines (ISRs), etc, but from the Debugger's perspective,
     * they're all one continuous stream of instructions that can be stepped or run at will.  Moreover,
     * stepping vs. running should never change the behavior of the simulation.
     *
     * @this {CPUStatePDP11}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {number} of cycles executed; 0 indicates a pre-execution condition (ie, an execution breakpoint
     * was hit), -1 indicates a post-execution condition (eg, a read or write breakpoint was hit), and a positive
     * number indicates successful completion of that many cycles (which should always be >= nMinCycles).
     */
    stepCPU(nMinCycles)
    {
        /*
         * The Debugger uses complete to determine if the instruction completed (true) or was interrupted
         * by a breakpoint or some other exceptional condition (false).  NOTE: this does NOT include JavaScript
         * exceptions, which stepCPU() expects the caller to catch using its own exception handler.
         *
         * The CPU relies on the use of stopCPU() rather than complete, because the CPU never single-steps
         * (ie, nMinCycles is always some large number), whereas the Debugger does.  And conversely, when the
         * Debugger is single-stepping (even when performing multiple single-steps), fRunning is never set,
         * so stopCPU() would have no effect as far as the Debugger is concerned.
         */
        this.flags.complete = true;

        /*
         * nDebugCheck is 1 if we want the Debugger's checkInstruction() to check every instruction,
         * -1 if we want it to check just the first instruction, and 0 if there's no need for any checks.
         */
        var nDebugCheck = (DEBUGGER && this.dbg)? (this.dbg.checksEnabled()? 1 : (this.flags.starting? -1 : 0)) : 0;

        /*
         * nDebugState is needed only when nDebugCheck is non-zero; it is -1 if this is a single-step, 0 if
         * this is the start of a new run, and 1 if this is a continuation of a previous run.  It is used by
         * checkInstruction() to determine if it should skip breakpoint checks and/or HALT instructions (ie,
         * if nDebugState is <= zero).
         */
        var nDebugState = (!nMinCycles)? -1 : (this.flags.starting? 0 : 1);
        this.flags.starting = false;        // we've moved beyond "starting" and have officially "started" now

        /*
         * We move the minimum cycle count to nStepCycles (the number of cycles left to step), so that other
         * functions have the ability to force that number to zero (eg, stopCPU()), and thus we don't have to check
         * any other criteria to determine whether we should continue stepping or not.
         */
        this.nBurstCycles = this.nStepCycles = nMinCycles;

        /*
         * And finally, move the nDebugCheck state to an OPFLAG bit, so that the loop need check only one variable.
         */
        this.opFlags = (this.opFlags & ~PDP11.OPFLAG.DEBUGGER) | (nDebugCheck? PDP11.OPFLAG.DEBUGGER : 0);

        do {
            if (this.opFlags) {
                /*
                 * NOTE: We still check DEBUGGER to ensure that this code will be compiled out of existence in
                 * non-DEBUGGER builds.
                 */
                if (DEBUGGER && (this.opFlags & PDP11.OPFLAG.DEBUGGER)) {
                    if (this.dbg.checkInstruction(this.getPC(), nDebugState)) {
                        this.stopCPU();
                        break;
                    }
                    if (!++nDebugCheck) this.opFlags &= ~PDP11.OPFLAG.DEBUGGER;
                    if (!nDebugState) nDebugState++;
                }
                /*
                 * If we're in the IRQ or WAIT state, check for any pending interrupts.
                 *
                 * NOTE: It's no coincidence that we're checking this BEFORE any pending traps, because in rare
                 * cases (including some presented by those pesky "TRAP TEST" diagnostics), the process of dispatching
                 * an interrupt can trigger a TRAP_SP stack overflow condition, which must be dealt with BEFORE we
                 * execute the first instruction of the interrupt handler.
                 */
                if ((this.opFlags & (PDP11.OPFLAG.IRQ_MASK | PDP11.OPFLAG.WAIT)) /* && nDebugState >= 0 */) {
                    if (this.checkInterrupts()) {
                        if ((this.opFlags & PDP11.OPFLAG.DEBUGGER) && this.dbg.checkInstruction(this.getPC(), nDebugState)) {
                            this.stopCPU();
                            break;
                        }
                        /*
                         * Since an interrupt was just dispatched, altering the normal flow of time and changing
                         * the future as we knew it, let's break out immediately if we're single-stepping, so that
                         * the Debugger gets to see the first instruction of the interrupt handler.  NOTE: This
                         * assumes that we've still commented out the nDebugState check above that used to bypass
                         * checkInterrupts() when single-stepping.
                         */
                        if (nDebugState < 0) break;
                    }
                }
                /*
                 * Next, check for any pending traps (which, as noted above, must be done after checkInterrupts()).
                 *
                 * I've moved this TRAP_MASK check BEFORE we decode the next instruction instead of immediately AFTER,
                 * just in case the last instruction threw an exception that kicked us out before we reached the bottom
                 * of the stepCPU() loop.
                 */
                if (this.opFlags & PDP11.OPFLAG.TRAP_MASK) {
                    if (this.checkTraps()) {
                        if ((this.opFlags & PDP11.OPFLAG.DEBUGGER) && this.dbg.checkInstruction(this.getPC(), nDebugState)) {
                            this.stopCPU();
                            break;
                        }
                        if (nDebugState < 0) break;
                    }
                }
            }

            /*
             * Snapshot the TF bit in opFlags, while clearing all other opFlags (except those in PRESERVE);
             * we'll check the TRAP_TF bit in opFlags when we come back around for another opcode.
             */
            this.opFlags = (this.opFlags & PDP11.OPFLAG.PRESERVE) | (this.regPSW & PDP11.PSW.TF);

            var opCode = this.getOpcode();
            this.opDecode(opCode);

        } while (this.nStepCycles > 0);

        return (this.flags.complete? this.nBurstCycles - this.nStepCycles : (this.flags.complete === false? -1 : 0));
    }

    /**
     * CPUStatePDP11.init()
     *
     * This function operates on every HTML element of class "cpu", extracting the
     * JSON-encoded parameters for the CPUStatePDP11 constructor from the element's "data-value"
     * attribute, invoking the constructor (which in turn invokes the CPU constructor)
     * to create a CPUStatePDP11 component, and then binding any associated HTML controls to the
     * new component.
     */
    static init()
    {
        var aeCPUs = Component.getElementsByClass(APPCLASS, "cpu");
        for (var iCPU = 0; iCPU < aeCPUs.length; iCPU++) {
            var eCPU = aeCPUs[iCPU];
            var parmsCPU = Component.getComponentParms(eCPU);
            var cpu = new CPUStatePDP11(parmsCPU);
            Component.bindComponentControls(cpu, eCPU, APPCLASS);
        }
    }
}

/*
 * Initialize every CPU module on the page
 */
WebLib.onInit(CPUStatePDP11.init);
