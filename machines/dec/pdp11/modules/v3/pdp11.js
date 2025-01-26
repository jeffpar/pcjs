/**
 * @fileoverview Emulation of PDP-11 CPUs
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import PDP11Ops from "./pdp11ops.js";
import Debugger from "../../../../modules/v3/debugger.js";
import Memory   from "../../../../modules/v3/memory.js";
import MESSAGE  from "../../../../modules/v3/message.js";

/**
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
 * Emulation of the PDP-11 CPU
 *
 * @class PDP11
 * @unrestricted
 * @property {Bus} bus
 * @property {Input} input
 */
export default class PDP11 extends PDP11Ops {
    /**
     * PDP11(idMachine, idDevice, config)
     *
     * The PDP11 class supports the following config properties:
     *
     *      model: a number (eg, 1170) that should match one of the PDP11.MODEL_* values
     *      addrReset: reset address (default is 0)
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
     * @this {PDP11}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.model = +this.config['model'] || PDP11.MODEL_1170;
        this.addrReset = +this.config['addrReset'] || 0;

        /**
         * Get access to the Bus device and create an IOPage block for it.  We assume that the bus
         * has been defined with an 8K blockSize and an 8-bit dataWidth, because our buses are defined
         * in terms of their MINIMUM data size, not their maximum.  All read/write operations must be
         * some multiple of that minimum (usually 1, 2, or 4), hence the readData()/writeData(),
         * readPair()/writePair(), and readQuad()/writeQuad() bus interfaces.
         */
        this.bus = /** @type {Bus} */ (this.findDeviceByClass("Bus"));
        this.bus.setFaultHandler(this.fault.bind(this));
        this.blockIOPage = /** @type {IOPage} */ (this.findDeviceByClass("IOPage"));
        this.panel = /** @type {Device} */ (this.findDeviceByClass("Panel", false));

        /**
         * We also need some IOPage bookkeeping variables, such as the current IOPage address
         * and the previous block (if any) at that address.
         */
        this.addrIOPage = 0;
        this.blockIOPagePrev = null;

        /**
         * Get access to the Input device, so we can call setFocus() as needed.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        /**
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
            /**
             * The alternate register set (REGSET) doesn't exist on the 11/20 or 11/40; it's available on the 11/45 and 11/70.
             * Ditto for separate I/D spaces, SUPER mode, and the instructions MFPD, MTPD, and SPL.
             */
            this.pswUsed = ~(PDP11.PSW.UNUSED | (this.model <= PDP11.MODEL_1140? PDP11.PSW.REGSET : 0)) & 0xffff;
            this.pswRegSet = (this.model > PDP11.MODEL_1140? PDP11.PSW.REGSET : 0);
        }

        this.nDisableTraps = 0;
        this.trapVector = this.trapReason = 0;

        /** @type {IRQ|null} */
        this.irqNext = null;            // the head of the active IRQ list, in priority order

        /** @type {Array.<IRQ>} */
        this.aIRQs = [];                // list of all IRQs, active or not (to be used for auto-configuration)

        this.srcMode = this.srcReg = 0;
        this.dstMode = this.dstReg = this.dstAddr = 0;
        this.nReadBreaks = this.nWriteBreaks = 0;

        /**
         * We can now initialize the CPU.
         */
        this.initCPU();
    }

    /**
     * execute(nCycles)
     *
     * Called from startClock() to execute a series of instructions.
     *
     * Executes the specified "burst" of instructions.  This code exists outside of the startClock() function
     * to ensure that its try/catch exception handler doesn't interfere with the optimization of this tight loop.
     *
     * @this {PDP11}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
    }

    /**
     * initCPU()
     *
     * Initializes the CPU's state.
     *
     * @this {PDP11}
     */
    initCPU()
    {
        /**
         * TODO: Verify the initial state of all PDP-11 flags and registers (are they well-documented?)
         */
        let f = 0xffff;
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
        this.regsUNIMap = [         // 32 UNIBUS map registers
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.regsControl = [        // various control registers (177740-177756) we don't really care about
            0, 0, 0, 0, 0, 0, 0, 0
        ];

        this.pswMode = 0;           // current memory management mode (see PDP11.MODE.KERNEL | SUPER | UNUSED | USER)
        this.pswTrap = -1;
        this.regMBR = 0;

        /**
         * opFlags contains various conditions that stepCPU() needs to be aware of.
         */
        this.opFlags = 0;

        /**
         * srcMode and srcReg are set by SRCMODE decodes, and dstMode and dstReg are set for DSTMODE decodes,
         * indicating to the opcode handlers the mode(s) and register(s) used as part of the current opcode, so
         * that they can calculate the correct number of cycles.  dstAddr is set for byte operations that also
         * need to know the effective address for their cycle calculation.
         */
        this.srcMode = this.srcReg = 0;
        this.dstMode = this.dstReg = this.dstAddr = 0;

        this.initMMU();

        for (let i = 0; i <= 7; i++) {
            this.defineRegister("R"+i, () => this.regsGen[i], (value) => this.regsGen[i] = value & 0xffff);
        }
        this.defineRegisterAlias("R6", "SP");
        this.defineRegisterAlias("R7", Debugger.REGISTER.PC);
        this.defineRegister("CF", () => (this.getCF()? 1 : 0), (value) => {value? this.setCF() : this.clearCF();});
        this.defineRegister("NF", () => (this.getNF()? 1 : 0), (value) => {value? this.setNF() : this.clearNF();});
        this.defineRegister("VF", () => (this.getVF()? 1 : 0), (value) => {value? this.setVF() : this.clearVF();});
        this.defineRegister("ZF", () => (this.getZF()? 1 : 0), (value) => {value? this.setZF() : this.clearZF();});
        this.defineRegister("PS", () => this.getPSW(), (value) => this.setPSW(value));
        this.defineRegister("PI", () => this.getPIR(), (value) => this.setPIR(value));
        this.defineRegister("ER", () => this.regErr);
        this.defineRegister("SL", () => this.getSLR(), (value) => this.setSLR(value));
        this.defineRegister("M0", () => this.getMMR0(), (value) => this.setMMR0(value));
        this.defineRegister("M1", () => this.getMMR1());
        this.defineRegister("M2", () => this.getMMR2());
        this.defineRegister("M3", () => this.getMMR3(), (value) => this.setMMR3(value));
        // if (this.panel) {
        //     this.defineRegister("AR", () => this.panel.getAR(), (value) => this.panel.setAR(value));
        //     this.defineRegister("DR", () => this.panel.getDR(), (value) => this.panel.setDR(value));
        //     this.defineRegister("SR", () => this.panel.getSR(), (value) => this.panel.setSR(value));
        // }
    }

    /**
     * initMMU()
     *
     * Reset all registers required as part of a RESET instruction.
     *
     * TODO: Do we ever need to automatically clear regErr, or is it cleared manually?
     *
     * @this {PDP11}
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
        this.mapMMR3 = [4,2,0,1];   // map from mode to MMR3 I/D bit

        /**
         * This is queried and displayed by the Panel when it's not displaying its own ADDRESS register
         * (which takes precedence when, for example, you've manually halted the CPU and are independently
         * examining the contents of other addresses).
         *
         * We initialize it to whatever the current PC is, because according to paulnank's pdp11.js: "Reset
         * displays next instruction address" and initMMU() is called on a RESET.
         */
        this.addrLast = this.regsGen[7];

        /**
         * This stores the PC in the lower 16 bits, and any auto-incs or auto-decs from the last opcode in the
         * upper 16 bits;  the lower 16 bits are used to update MMR2, and the upper 16 bits are used to update MMR1.
         * The upper bits are automatically zeroed at the start of every operation when the PC is copied to opLast.
         */
        this.opLast = 0;
        this.resetIRQs();
        this.setMemoryAccess();
        this.addrInvalid = this.bus.getMemoryLimit(Memory.TYPE.READWRITE);
    }

    /**
     * onUpdate(fTransition)
     *
     * Enumerate all bindings and update their values.
     *
     * Called by Time's update() function whenever 1) its YIELDS_PER_UPDATE threshold is reached
     * (default is twice per second), 2) a step() operation has just finished (ie, the device is being
     * single-stepped), and 3) a start() or stop() transition has occurred.
     *
     * @this {PDP11}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        // TODO: Decide what bindings we want to support, and update them as appropriate.
    }

    /**
     * getMMR0()
     *
     * NOTE: It's OK to bypass this function if you're only interested in bits that always stored directly in MMR0.
     *
     * 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 MMR0
     * nonr leng read trap unus unus ena mnt cmp  -mode- i/d  --page--   enable
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMR0()
    {
        let data = this.regMMR0;
        if (!(data & PDP11.MMR0.ABORT)) {
            data = (data & ~(PDP11.MMR0.UNUSED | PDP11.MMR0.PAGE | PDP11.MMR0.MODE)) | (this.mmuLastMode << 5) | (this.mmuLastPage << 1);
        }
        return data;
    }

    /**
     * setMMR0()
     *
     * @this {PDP11}
     * @param {number} newMMR0
     */
    setMMR0(newMMR0)
    {
        newMMR0 &= ~PDP11.MMR0.UNUSED;

        if (this.regMMR0 != newMMR0) {
            if (newMMR0 & PDP11.MMR0.ABORT) {
                /**
                 * If updates to MMR0[1-7], MMR1, and MMR2 are being shut off (ie, MMR0.ABORT bits are transitioning
                 * from clear to set), then do one final sync with their real-time counterparts in opLast.
                 */
                if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
                    this.regMMR1 = (this.opLast >> 16) & 0xffff;
                    this.regMMR2 = this.opLast & 0xffff;
                }
            }
            /**
             * NOTE: We are not protecting the read-only state of the COMPLETED bit here; that's handled by writeMMR0().
             */
            this.regMMR0 = newMMR0;
            this.mmuLastMode = (newMMR0 & PDP11.MMR0.MODE) >> PDP11.MMR0.SHIFT.MODE;
            this.mmuLastPage = (newMMR0 & PDP11.MMR0.PAGE) >> PDP11.MMR0.SHIFT.PAGE;
            let mmuEnable = 0;
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
     * @this {PDP11}
     * @returns {number}
     */
    getMMR1()
    {
        /**
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
        let result = this.regMMR1;
        if (result & 0xff00) {
            result = ((result << 8) | (result >> 8)) & 0xffff;
        }
        return result;
    }

    /**
     * getMMR2()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMR2()
    {
        /**
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
     * @this {PDP11}
     * @returns {number}
     */
    getMMR3()
    {
        return this.regMMR3;
    }

    /**
     * setMMR3()
     *
     * @this {PDP11}
     * @param {number} newMMR3
     */
    setMMR3(newMMR3)
    {
        /**
         * Don't allow non-11/70 models to use 22-bit addressing or the UNIBUS map.
         */
        if (this.model < PDP11.MODEL_1170) {
            newMMR3 &= ~(PDP11.MMR3.MMU_22BIT | PDP11.MMR3.UNIBUS_MAP);
        }
        if (this.regMMR3 != newMMR3) {
            this.regMMR3 = newMMR3;
            this.mmuMask = (newMMR3 & PDP11.MMR3.MMU_22BIT)? PDP11.MASK_22BIT : PDP11.MASK_18BIT;
            this.setMemoryAccess();
        }
    }

    /**
     * setReset(addr, fStart, bUnit, addrStack)
     *
     * @this {PDP11}
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
            for (let i = 1; i <= 5; i++) this.regsGen[i] = 0;
            this.regsGen[6] = addrStack || 0o2000;
            // if (!this.flags.powered) {
            //     this.flags.autoStart = true;
            // }
            // else if (!this.flags.running) {
            //     this.startCPU();
            // }
        }
        else {
            // if (this.dbg && this.flags.powered) {
            //     /*
            //      * TODO: Review the decision to always stop the CPU if the Debugger is loaded.  Note that
            //      * when stopCPU() stops a running CPU, the Debugger gets notified, so no need to notify it again.
            //      *
            //      * TODO: There are more serious problems to deal with if another component is slamming a new PC down
            //      * the CPU's throat (presumably while also dropping some new code into RAM) while the CPU is running;
            //      * we should probably force a complete reset, but for now, it's up to the user to hit the reset button
            //      * themselves.
            //      */
            //     if (!this.stopCPU() && !this.cmp.flags.reset) {
            //         this.dbg.updateStatus();
            //         this.cmp.updateDisplays(-1);
            //     }
            // }
            // else if (fStart === false) {
            //     this.stopCPU();
            // }
        }
        // if (!this.isRunning() && this.panel) this.panel.stop();
    }

    /**
     * getMMUState()
     *
     * Returns bit 0 set if 22-bit, bit 1 set if 18-bit, or bit 2 set if 16-bit; used by the Panel component.
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMUState()
    {
        return this.mmuEnable? ((this.regMMR3 & PDP11.MMR3.MMU_22BIT)? 1 : 2) : 4;
    }

    /**
     * resetCPU()
     *
     * @this {PDP11}
     */
    resetCPU()
    {
        // TODO: Make sure all devices get reset notifications, and the IOPage address is reset.
        this.initMMU();
    }

    /**
     * setMemoryAccess()
     *
     * Define handlers and DSPACE setting appropriate for the current MMU mode, in order to eliminate
     * unnecessary calls to mapVirtualToPhysical().
     *
     * @this {PDP11}
     */
    setMemoryAccess()
    {
        if (this.blockIOPagePrev) {
            this.bus.setBlock(this.addrIOPage, this.blockIOPagePrev);
        }
        if (!this.mmuEnable) {
            this.addrDSpace = 0;
            this.addrIOPage = PDP11.IOPAGE_16BIT;
            this.getAddr = this.getPhysicalAddrByMode;
            this.readWord = this.readWordFromPhysical;
            this.writeWord = this.writeWordToPhysical;
        } else {
            this.addrDSpace = PDP11.ACCESS.DSPACE;
            this.addrIOPage = (this.regMMR3 & PDP11.MMR3.MMU_22BIT)? PDP11.IOPAGE_22BIT : PDP11.IOPAGE_18BIT;
            this.getAddr = this.getVirtualAddrByMode;
            this.readWord = this.nReadBreaks? this.readWordFromVirtualChecked : this.readWordFromVirtual;
            this.writeWord = this.nWriteBreaks? this.writeWordToVirtualChecked : this.writeWordToVirtual;
        }
        this.blockIOPagePrev = this.bus.setBlock(this.addrIOPage, this.blockIOPage);
    }

    /**
     * loadState(stateCPU)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {PDP11}
     * @param {Array} stateCPU
     * @returns {boolean}
     */
    loadState(stateCPU)
    {
        if (!stateCPU || !stateCPU.length) {
            this.printf("invalid saved state\n");
            return false;
        }
        let idDevice = stateCPU.shift();
        let version = stateCPU.shift();
        if (idDevice != this.idDevice || (version|0) !== (+PDP11.VERSION|0)) {
            this.printf("CPU state mismatch (%s %3.2f)\n", idDevice, version);
            return false;
        }
        try {
            this.regsGen = stateCPU.shift();
            this.regsAlt = stateCPU.shift();
            this.regsAltStack = stateCPU.shift();
            this.regsPAR = stateCPU.shift();
            this.regsPDR = stateCPU.shift();
            this.regsUNIMap = stateCPU.shift();
            this.regsControl = stateCPU.shift();
            this.regErr = stateCPU.shift();
            this.regMBR = stateCPU.shift();
            this.regPIR = stateCPU.shift();
            this.regSLR = stateCPU.shift();
            this.mmuLastMode = stateCPU.shift();
            this.mmuLastPage = stateCPU.shift();
            this.addrLast = stateCPU.shift();
            this.opFlags = stateCPU.shift();
            this.opLast = stateCPU.shift();
            this.pswTrap = stateCPU.shift();
            this.trapReason = stateCPU.shift();
            this.trapVector = stateCPU.shift();
            this.addrReset = stateCPU.shift();
            this.setPSW(stateCPU.shift());
            this.setMMR0(stateCPU.shift());
            this.regMMR1 = stateCPU.shift();
            this.regMMR2 = stateCPU.shift();
            this.setMMR3(stateCPU.shift());
            this.restoreIRQs(stateCPU.shift());
            // this.restoreTimers(stateCPU.shift());
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * saveState(stateCPU)
     *
     * @this {PDP11}
     * @param {Array} stateCPU
     */
    saveState(stateCPU)
    {
        stateCPU.push(this.idDevice);
        stateCPU.push(+PDP11.VERSION);
        stateCPU.push(this.regsGen);
        stateCPU.push(this.regsAlt);
        stateCPU.push(this.regsAltStack);
        stateCPU.push(this.regsPAR);
        stateCPU.push(this.regsPDR);
        stateCPU.push(this.regsUNIMap);
        stateCPU.push(this.regsControl);
        stateCPU.push(this.regErr);
        stateCPU.push(this.regMBR);
        stateCPU.push(this.regPIR);
        stateCPU.push(this.regSLR);
        stateCPU.push(this.mmuLastMode);
        stateCPU.push(this.mmuLastPage);
        stateCPU.push(this.addrLast);
        stateCPU.push(this.opFlags);
        stateCPU.push(this.opLast);
        stateCPU.push(this.pswTrap);
        stateCPU.push(this.trapReason);
        stateCPU.push(this.trapVector);
        stateCPU.push(this.addrReset);
        stateCPU.push(this.getPSW());
        stateCPU.push(this.getMMR0());
        stateCPU.push(this.getMMR1());
        stateCPU.push(this.getMMR2());
        stateCPU.push(this.getMMR3());
        stateCPU.push(this.saveIRQs());
        // stateCPU.push(this.saveTimers());
    }

    /**
     * clearCF()
     *
     * @this {PDP11}
     */
    clearCF()
    {
        this.flagC = 0;
    }

    /**
     * getCF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.CF
     */
    getCF()
    {
        return (this.flagC & 0x10000)? PDP11.PSW.CF: 0;
    }

    /**
     * setCF()
     *
     * @this {PDP11}
     */
    setCF()
    {
        this.flagC = 0x10000;
    }

    /**
     * clearVF()
     *
     * @this {PDP11}
     */
    clearVF()
    {
        this.flagV = 0;
    }

    /**
     * getVF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.VF
     */
    getVF()
    {
        return (this.flagV & 0x8000)? PDP11.PSW.VF: 0;
    }

    /**
     * setVF()
     *
     * @this {PDP11}
     */
    setVF()
    {
        this.flagV = 0x8000;
    }

    /**
     * clearZF()
     *
     * @this {PDP11}
     */
    clearZF()
    {
        this.flagZ = 1;
    }

    /**
     * getZF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.ZF
     */
    getZF()
    {
        return (this.flagZ & 0xffff)? 0 : PDP11.PSW.ZF;
    }

    /**
     * setZF()
     *
     * @this {PDP11}
     */
    setZF()
    {
        this.flagZ = 0;
    }

    /**
     * clearNF()
     *
     * @this {PDP11}
     */
    clearNF()
    {
        this.flagN = 0;
    }

    /**
     * getNF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.NF
     */
    getNF()
    {
        return (this.flagN & 0x8000)? PDP11.PSW.NF : 0;
    }

    /**
     * setNF()
     *
     * @this {PDP11}
     */
    setNF()
    {
        this.flagN = 0x8000;
    }

    /**
     * getOpcode()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getOpcode()
    {
        let pc = this.opLast = this.regsGen[PDP11.REG.PC];
        /**
         * If PC is unaligned, a BUS trap will be generated, and because it will generate an
         * exception, the next line (the equivalent of advancePC(2)) will not be executed, ensuring that
         * original unaligned PC will be pushed onto the stack by trap().
         */
        let opcode = this.readWord(pc);
        this.regsGen[PDP11.REG.PC] = (pc + 2) & 0xffff;
        return opcode;
    }

    /**
     * advancePC(off)
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {PDP11}
     * @param {number} off
     * @returns {number} (original PC)
     */
    advancePC(off)
    {
        let pc = this.regsGen[PDP11.REG.PC];
        this.regsGen[PDP11.REG.PC] = (pc + off) & 0xffff;
        return pc;
    }

    /**
     * branch(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {boolean|number} condition
     */
    branch(opcode, condition)
    {
        if (condition) {
            let off = ((opcode << 24) >> 23);
            if (PDP11.DEBUG && this.dbg && off == -2) {
                this.dbg.stopCPU("branch to self");
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
     * @this {PDP11}
     * @returns {number}
     */
    getPC()
    {
        return this.regsGen[PDP11.REG.PC];
    }

    /**
     * getLastAddr()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getLastAddr()
    {
        return this.addrLast;
    }

    /**
     * getLastPC()
     *
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
     * @param {number} addr
     */
    setSP(addr)
    {
        this.regsGen[PDP11.REG.SP] = addr & 0xffff;
    }

    /**
     * addIRQ(vector, priority, message)
     *
     * @this {PDP11}
     * @param {number} vector (-1 for floating vector)
     * @param {number} priority
     * @param {number} [message]
     * @returns {IRQ}
     */
    addIRQ(vector, priority, message)
    {
        let irq = {vector: vector, priority: priority, message: message || 0, name: PDP11.VECTORS[vector], next: null};
        this.aIRQs.push(irq);
        return irq;
    }

    /**
     * insertIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ} irq
     */
    insertIRQ(irq)
    {
        if (irq != this.irqNext) {
            let irqPrev = this.irqNext;
            if (!irqPrev || irqPrev.priority <= irq.priority) {
                irq.next = irqPrev;
                this.irqNext = irq;
            } else {
                do {
                    let irqNext = irqPrev.next;
                    if (!irqNext || irqNext.priority <= irq.priority) {
                        irq.next = irqNext;
                        irqPrev.next = irq;
                        break;
                    }
                    irqPrev = irqNext;
                } while (irqPrev);
            }
        }
        /**
         * See the writeXCSR() function for an explanation of why signalling an IRQ hardware interrupt
         * should be done using IRQ_DELAY rather than setting IRQ directly.
         */
        this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
    }

    /**
     * removeIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ} irq
     */
    removeIRQ(irq)
    {
        let irqPrev = this.irqNext;
        if (irqPrev == irq) {
            this.irqNext = irq.next;
        } else {
            while (irqPrev) {
                let irqNext = irqPrev.next;
                if (irqNext == irq) {
                    irqPrev.next = irqNext.next;
                    break;
                }
                irqPrev = irqNext;
            }
        }
        /**
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
     * @this {PDP11}
     * @param {IRQ|null} irq
     */
    setIRQ(irq)
    {
        if (irq) {
            this.insertIRQ(irq);
            this.printf(MESSAGE.INT + irq.message, "setIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority + ")");
        }
    }

    /**
     * clearIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ|null} irq
     */
    clearIRQ(irq)
    {
        if (irq) {
            this.removeIRQ(irq);
            this.printf(MESSAGE.INT + irq.message, "clearIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority + ")");
        }
    }

    /**
     * findIRQ(vector)
     *
     * @this {PDP11}
     * @param {number} vector
     * @returns {IRQ|null}
     */
    findIRQ(vector)
    {
        for (let i = 0; i < this.aIRQs.length; i++) {
            let irq = this.aIRQs[i];
            if (irq.vector === vector) return irq;
        }
        return null;
    }

    /**
     * checkIRQs(priority)
     *
     * @this {PDP11}
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
     * @this {PDP11}
     */
    resetIRQs()
    {
        this.irqNext = null;
    }

    /**
     * saveIRQs()
     *
     * @this {PDP11}
     * @returns {Array.<number>}
     */
    saveIRQs()
    {
        let aIRQVectors = [];
        let irq = this.irqNext;
        while (irq) {
            aIRQVectors.push(irq.vector);
            irq = irq.next;
        }
        return aIRQVectors;
    }

    /**
     * restoreIRQs(aIRQVectors)
     *
     * @this {PDP11}
     * @param {Array.<number>} aIRQVectors
     */
    restoreIRQs(aIRQVectors)
    {
        for (let i = aIRQVectors.length - 1; i >= 0; i--) {
            let irq = this.findIRQ(aIRQVectors[i]);
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
     * @this {PDP11}
     * @returns {boolean} true if an interrupt was dispatched, false if not
     */
    checkInterrupts()
    {
        let fInterrupt = false;

        if (this.opFlags & PDP11.OPFLAG.IRQ) {

            let vector = PDP11.TRAP.PIRQ;
            let priority = (this.regPIR & PDP11.PSW.PRI) >> PDP11.PSW.SHIFT.PRI;

            let irq = this.checkIRQs(priority);
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
            /**
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
     * @this {PDP11}
     * @param {number} vector
     * @param {number} priority
     * @returns {boolean} (true if dispatched, false if not)
     */
    dispatchInterrupt(vector, priority)
    {
        let priorityCPU = (this.regPSW & PDP11.PSW.PRI) >> PDP11.PSW.SHIFT.PRI;
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
     * @this {PDP11}
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
     * @this {PDP11}
     * @returns {boolean} (true if OPFLAG.WAIT is set, false otherwise)
     */
    isWaiting()
    {
        return !!(this.opFlags & PDP11.OPFLAG.WAIT);
    }

    /**
     * getPSW()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getPSW()
    {
        let mask = PDP11.PSW.CMODE | PDP11.PSW.PMODE | PDP11.PSW.REGSET | PDP11.PSW.PRI | PDP11.PSW.TF;
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
     * @this {PDP11}
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
            /**
             * Swap register sets
             */
            for (let i = this.regsAlt.length; --i >= 0;) {
                let tmp = this.regsGen[i];
                this.regsGen[i] = this.regsAlt[i];
                this.regsAlt[i] = tmp;
            }
        }
        this.pswMode = (newPSW >> PDP11.PSW.SHIFT.CMODE) & PDP11.MODE.MASK;
        let oldMode = (this.regPSW >> PDP11.PSW.SHIFT.CMODE) & PDP11.MODE.MASK;
        if (this.pswMode != oldMode) {
            /**
             * Swap stack pointers
             */
            this.regsAltStack[oldMode] = this.regsGen[6];
            this.regsGen[6] = this.regsAltStack[this.pswMode];
        }
        this.regPSW = newPSW;

        /**
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
     * @this {PDP11}
     * @returns {number}
     */
    getSLR()
    {
        return this.regSLR & 0xff00;
    }

    /**
     * setSLR(newSL)
     *
     * @this {PDP11}
     * @param {number} newSLR
     */
    setSLR(newSLR)
    {
        this.regSLR = newSLR | 0xff;
    }

    /**
     * getPIR()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getPIR()
    {
        return this.regPIR;
    }

    /**
     * setPIR(newPIR)
     *
     * @this {PDP11}
     * @param {number} newPIR
     */
    setPIR(newPIR)
    {
        newPIR &= PDP11.PIR.BITS;
        if (newPIR) {
            let bits = newPIR >> PDP11.PIR.SHIFT.BITS;
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
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
     * @param {number} result (dst - src, where src is an implied 1)
     * @param {number} dst
     */
    updateDecFlags(result, dst)
    {
        this.flagN = this.flagZ = result;
        /**
         * Because src is always 1 (with a zero sign bit), it can be optimized out of this calculation.
         */
        this.flagV = (/* src ^ */ dst) & (dst ^ result);
    }

    /**
     * updateIncFlags(result, dst)
     *
     * NOTE: We could have used updateAddFlags() if not for the fact that the C flag must be preserved.
     *
     * @this {PDP11}
     * @param {number} result (dst + src, where src is an implied 1)
     * @param {number} dst
     */
    updateIncFlags(result, dst)
    {
        this.flagN = this.flagZ = result;
        /**
         * Because src is always 1 (with a zero sign bit), it can be optimized out of this calculation.
         */
        this.flagV = (/* src ^ */ result) & (dst ^ result);
    }

    /**
     * updateMulFlags(result)
     *
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
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
     * fault(addr, reason)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} [reason]
     */
    fault(addr, reason)
    {
        if (reason <= 3) this.cpu.regErr |= PDP11.CPUERR.TIMEOUT;
        this.trap(PDP11.TRAP.BUS, 0, addr);
    }

    /**
     * trap(vector, flag, reason)
     *
     * trap() handles all the trap/abort functions.  It reads the trap vector from kernel
     * D space, changes mode to reflect the new PSW and PC, and then pushes the old PSW and
     * PC onto the new mode stack.
     *
     * @this {PDP11}
     * @param {number} vector
     * @param {number} flag
     * @param {number} [reason] (for diagnostic purposes only)
     */
    trap(vector, flag, reason)
    {
        this.printf(MESSAGE.TRAP, "trap to vector %o (%o: %s)\n", vector, reason, reason < 0? PDP11.REASONS[-reason] : "BUS ERROR");

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
            /**
             * The next two lines used to be deferred until after the setPSW() below, but
             * I'm not seeing any dependencies on these registers, so I'm consolidating the code.
             */
            this.regErr |= PDP11.CPUERR.RED;
            this.regsGen[6] = vector = 4;
        }

        if (reason != PDP11.REASON.PANIC) {
            /**
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

            /**
             * Read from kernel D space
             */
            this.pswMode = 0;
            let newPC = this.readWord(vector | this.addrDSpace);
            let newPSW = this.readWord(((vector + 2) & 0xffff) | this.addrDSpace);

            /**
             * Set new PSW with previous mode
             */
            this.setPSW((newPSW & ~PDP11.PSW.PMODE) | ((this.pswTrap >> 2) & PDP11.PSW.PMODE));

            this.pushWord(this.pswTrap);
            this.pushWord(this.regsGen[7]);
            this.setPC(newPC);
        }

        /**
         * TODO: Determine the appropriate number of cycles for traps; all I've done for now is move the
         * cycle charge from opTrap() to here, and reduced the amount the other opcode handlers that call
         * trap() charge by a corresponding amount (5).
         */
        this.nStepCycles -= (4 + 1);

        /**
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

        /**
         * These next properties (in conjunction with setting PDP11.OPFLAG.TRAP_LAST) are purely an aid for the Debugger;
         * see getTrapStatus().
         */
        this.trapReason = reason;
        this.trapVector = vector;

        if (reason == PDP11.REASON.PANIC) {
            this.time.stop();
        }
        if (reason >= PDP11.REASON.RED) throw vector;
    }

    /**
     * trapReturn()
     *
     * @this {PDP11}
     */
    trapReturn()
    {
        /**
         * This code used to defer updating regsGen[6] (SP) until after BOTH words had been popped, which seems
         * safer, but if we're going to do pushes in trap(), then I see no reason to avoid doing pops in trapReturn().
         */
        let addr = this.popWord();
        let newPSW = this.popWord();
        if (this.regPSW & PDP11.PSW.CMODE) {
            /**
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
     * @this {PDP11}
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
     * the IOPage in response to addressing changes.
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    mapUnibus(addr)
    {
        let idx = (addr >> 13) & 0x1F;
        if (idx < 31) {
            if (this.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                /**
                 * The UNIBUS map relocation is enabled
                 */
                addr = (this.regsUNIMap[idx] + (addr & 0x1FFF)) & PDP11.MASK_22BIT;
                /**
                 * TODO: Review this assertion.
                 *
                 *      this.assert(addr < BusPDP11.UNIBUS_22BIT || addr >= BusPDP11.IOPAGE_22BIT);
                 */
            } else {
                /**
                 * Since UNIBUS map relocation is NOT enabled, then as explained above:
                 *
                 *      If the UNIBUS map relocation is not enabled, an incoming 18-bit UNIBUS address has 4 leading zeroes added for
                 *      referencing a 22-bit physical address. The lower 18 bits are the same. No relocation is performed.
                 */
                addr &= ~PDP11.UNIBUS_22BIT;
            }
        }
        return addr;
    }

    /**
     * getAddrInfo(addr, fPhysical)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} [fPhysical]
     * @returns {Array}
     */
    getAddrInfo(addr, fPhysical)
    {
        let a = [];
        let addrPhysical;

        if (fPhysical) {
            addrPhysical = this.mapUnibus(addr);
            let idx = (addr >> 13) & 0x1F;
            a.push(addrPhysical);
            a.push(idx);
            if (this.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                a.push(this.regsUNIMap[idx]);
                a.push(addr & 0x1FFF);
            }
        }
        else if (!this.mmuEnable) {
            addrPhysical = addr & 0xffff;
            if (addrPhysical >= PDP11.IOPAGE_16BIT) addrPhysical |= this.addrIOPage;
            a.push(addrPhysical);
        }
        else {
            let mode = this.pswMode << 1;
            let page = addr >> 13;
            if (page > 7) mode |= 1;
            if (!(this.regMMR3 & this.mapMMR3[this.pswMode])) page &= 7;
            let pdr = this.regsPDR[this.pswMode][page];
            let off = addr & 0x1fff;
            let paf = (this.regsPAR[this.pswMode][page] << 6);
            addrPhysical = (paf + off) & this.mmuMask;
            if (addrPhysical >= PDP11.UNIBUS_22BIT) addrPhysical = this.mapUnibus(addrPhysical);
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
     * @this {PDP11}
     * @param {number} addrVirtual
     * @param {number} access
     * @returns {number}
     */
    mapVirtualToPhysical(addrVirtual, access)
    {
        let page, pdr, addr;

        /**
         * This can happen when the MAINT bit of MMR0 is set but not the ENABLED bit.
         */
        if (!(access & this.mmuEnable)) {
            addr = addrVirtual & 0xffff;
            if (addr >= PDP11.IOPAGE_16BIT) addr |= this.addrIOPage;
            return addr;
        }

        page = addrVirtual >> 13;
        if (!(this.regMMR3 & this.mapMMR3[this.pswMode])) page &= 7;
        pdr = this.regsPDR[this.pswMode][page];
        addr = ((this.regsPAR[this.pswMode][page] << 6) + (addrVirtual & 0x1fff)) & this.mmuMask;

        if (addr >= PDP11.UNIBUS_22BIT) addr = this.mapUnibus(addr);

        if (this.nDisableTraps) return addr;

        /**
         * TEST #122 ("KT BEND") in the "EKBEE1" diagnostic (PC 076060) triggers a NOMEMORY error using
         * this instruction:
         *
         *      076170: 005037 140100          CLR   @#140100
         *
         * It also triggers an ODDADDR error using this instruction:
         *
         *      076356: 005037 140001          CLR   @#140001
         *
         * paulnank: So it turns out that the memory management unit that does odd address and non-existent
         * memory trapping: who knew? :-)  I thought these would have been handled at access time.
         *
         * jeffpar: We're assuming, at least, that the MMU does its "NEXM" (NOMEMORY) non-existent memory test
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

        let newMMR0 = 0;
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
            /**
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

        /**
         * Aborts and traps: log FIRST trap and MOST RECENT abort
         */
        this.regsPDR[this.pswMode][page] = pdr;
        if (addr != ((PDP11.IOPAGE_22BIT | PDP11.UNIBUS.MMR0) & this.mmuMask) || this.pswMode) {
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
                /**
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
                /**
                 * TODO: Review the code below, because the address range seems over-inclusive.
                 */
                if (addr < ((PDP11.IOPAGE_22BIT | PDP11.UNIBUS.SIPDR0) & this.mmuMask) ||
                    addr > ((PDP11.IOPAGE_22BIT | PDP11.UNIBUS.UDPAR7 | 0x1) & this.mmuMask)) {
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
     * @this {PDP11}
     * @returns {number}
     */
    popWord()
    {
        let result = this.readWord(this.regsGen[6] | this.addrDSpace);
        this.regsGen[6] = (this.regsGen[6] + 2) & 0xffff;
        return result;
    }

    /**
     * pushWord(data)
     *
     * @this {PDP11}
     * @param {number} data
     */
    pushWord(data)
    {
        let addrVirtual = (this.regsGen[6] - 2) & 0xffff;
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
     * @this {PDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getAddrByMode(mode, reg, access)
    {
        let addrVirtual, step;
        let addrDSpace = (access & PDP11.ACCESS.VIRT)? 0 : this.addrDSpace;

        /**
         * Modes that need to auto-increment or auto-decrement will break, in order to perform
         * the update; others will return an address immediately.
         */
        switch (mode) {
        /**
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

        /**
         * Mode 1: (R)
         */
        case 1:
            if (reg == 6) this.checkStackLimit(access, 0, this.regsGen[6]);
            this.nStepCycles -= (2 + 1);
            return (reg == 7? this.regsGen[reg] : (this.regsGen[reg] | addrDSpace));

        /**
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

        /**
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

        /**
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

        /**
         * Mode 5: @-(R)
         */
        case 5:
            step = -2;
            addrVirtual = (this.regsGen[reg] - 2) & 0xffff;
            if (reg != 7) addrVirtual |= addrDSpace;
            addrVirtual = this.readWord(addrVirtual) | addrDSpace;
            this.nStepCycles -= (6 + 2);
            break;

        /**
         * Mode 6: d(R)
         */
        case 6:
            addrVirtual = this.readWord(this.advancePC(2));
            addrVirtual = (addrVirtual + this.regsGen[reg]) & 0xffff;
            if (reg == 6) this.checkStackLimit(access, 0, addrVirtual);
            this.nStepCycles -= (4 + 2);
            return addrVirtual | addrDSpace;

        /**
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
     * @this {PDP11}
     * @param {number} access
     * @param {number} step
     * @param {number} addr
     */
    checkStackLimit1120(access, step, addr)
    {
        /**
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
            /**
             * On older machines (eg, the PDP-11/20), there is no "YELLOW" and "RED" distinction, and the
             * instruction is always allowed to complete, so the trap must always be issued in this fashion.
             */
            this.opFlags |= PDP11.OPFLAG.TRAP_SP;
        }
    }

    /**
     * checkStackLimit1140(access, step, addr)
     *
     * @this {PDP11}
     * @param {number} access
     * @param {number} step
     * @param {number} addr
     */
    checkStackLimit1140(access, step, addr)
    {
        if (!this.pswMode) {
            /**
             * NOTE: The 11/70 CPU Instruction Exerciser does NOT expect reads to trigger a stack overflow,
             * so we check the access parameter.
             *
             * Moreover, TEST 40 of diagnostic EKBBF0 executes this instruction:
             *
             *      R0=177777 R1=032435 R2=152110 R3=000024 R4=153352 R5=001164
             *      SP=177776 PC=020632 PS=000350 IR=000000 SL=000377 T0 N1 Z0 V0 C0
             *      020632: 005016                 CLR   @SP                    ;cycles=7
             *
             * expecting a RED stack overflow trap.  Yes, using *any* addresses in the IOPage for the stack isn't
             * a good idea, but who said it was illegal?  For now, we're going to restrict overflows to the highest
             * address tested by the diagnostic (0xFFFE, aka the PSW), by making that address negative.
             */
            if (addr >= 0xFFFE) addr |= ~0xFFFF;
            if ((access & PDP11.ACCESS.WRITE) && addr <= this.regSLR) {
                /**
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
     * readByteSafe(addr)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    readByteSafe(addr)
    {
        this.nDisableTraps++;
        let b = this.bus.readData(this.mapVirtualToPhysical(addr, PDP11.ACCESS.READ_BYTE));
        this.nDisableTraps--;
        return b;
    }

    /**
     * readWordSafe(addr)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    readWordSafe(addr)
    {
        this.nDisableTraps++;
        let w = this.bus.readPair(this.mapVirtualToPhysical(addr, PDP11.ACCESS.READ_WORD));
        this.nDisableTraps--;
        return w;
    }

    /**
     * writeByteSafe(addr, data)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeByteSafe(addr, data)
    {
        this.nDisableTraps++;
        this.bus.writeData(this.mapVirtualToPhysical(addr, PDP11.ACCESS.WRITE_BYTE), data);
        this.nDisableTraps--;
    }

    /**
     * writeWordSafe(addr, data)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeWordSafe(addr, data)
    {
        this.nDisableTraps++;
        this.bus.writePair(this.mapVirtualToPhysical(addr, PDP11.ACCESS.WRITE_WORD), data);
        this.nDisableTraps--;
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    addMemBreak(addr, fWrite)
    {
        let nBreaks = fWrite? this.nWriteBreaks++ : this.nReadBreaks++;
        this.assert(nBreaks >= 0);
        if (!nBreaks) this.setMemoryAccess();
    }

    /**
     * removeMemBreak(addr, fWrite)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    removeMemBreak(addr, fWrite)
    {
        let nBreaks = fWrite? --this.nWriteBreaks : --this.nReadBreaks;
        this.assert(nBreaks >= 0);
        if (!nBreaks) this.setMemoryAccess();
    }

    /**
     * getPhysicalAddrByMode(mode, reg, access)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through getAddr().
     *
     * @this {PDP11}
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
     * @this {PDP11}
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
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    readWordFromPhysical(addr)
    {
        return this.bus.readPair(this.addrLast = addr);
    }

    /**
     * readWordFromVirtual(addrVirtual)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @returns {number}
     */
    readWordFromVirtual(addrVirtual)
    {
        return this.bus.readPair(this.addrLast = this.mapVirtualToPhysical(addrVirtual, PDP11.ACCESS.READ_WORD));
    }

    /**
     * readWordFromVirtualChecked(addrVirtual)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @returns {number}
     */
    readWordFromVirtualChecked(addrVirtual)
    {
        if (this.dbg) {
            this.dbg.checkVirtualRead(addrVirtual, 2);
        }
        return this.readWordFromVirtual(addrVirtual);
    }

    /**
     * writeWordToPhysical(addr, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeWordToPhysical(addr, data)
    {
        this.bus.writePair(this.addrLast = addr, data);
    }

    /**
     * writeWordToVirtual(addrVirtual, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @param {number} data
     */
    writeWordToVirtual(addrVirtual, data)
    {
        this.bus.writePair(this.addrLast = this.mapVirtualToPhysical(addrVirtual, PDP11.ACCESS.WRITE_WORD), data);
    }

    /**
     * writeWordToVirtualChecked(addrVirtual, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @param {number} data
     */
    writeWordToVirtualChecked(addrVirtual, data)
    {
        if (this.dbg) {
            this.dbg.checkVirtualWrite(addrVirtual, 2);
        }
        this.writeWordToVirtual(addrVirtual, data);
    }

    /**
     * readWordFromPrevSpace(opcode, access)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} access (really just PDP11.ACCESS.DSPACE or PDP11.ACCESS.ISPACE)
     * @returns {number}
     */
    readWordFromPrevSpace(opcode, access)
    {
        let data;
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (reg != 6 || ((this.regPSW >> 2) & PDP11.PSW.PMODE) === (this.regPSW & PDP11.PSW.PMODE)) {
                data = this.regsGen[reg];
            } else {
                data = this.regsAltStack[(this.regPSW >> 12) & 3];
            }
        } else {
            let addr = this.getAddrByMode(mode, reg, PDP11.ACCESS.READ_WORD);
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
     * writeWordToPrevSpace(opcode, access, data)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} access (really just PDP11.ACCESS.DSPACE or PDP11.ACCESS.ISPACE)
     * @param {number} data
     */
    writeWordToPrevSpace(opcode, access, data)
    {
        this.opLast = (this.opLast & 0xffff) | (0x0016 << 16);
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (reg != 6 || ((this.regPSW >> 2) & PDP11.PSW.PMODE) === (this.regPSW & PDP11.PSW.PMODE)) {
                this.regsGen[reg] = data;
            } else {
                this.regsAltStack[(this.regPSW >> 12) & 3] = data;
            }
        } else {
            let addr = this.getAddrByMode(mode, reg, PDP11.ACCESS.WRITE_WORD);
            if (!(access & PDP11.ACCESS.DSPACE)) addr &= 0xffff;
            /**
             * TODO: Consider replacing the following code with writeWord(), by adding optional pswMode
             * parameters for each of the discrete mapVirtualToPhysical() and writePair() operations, because
             * as it stands, this is the only remaining call to mapVirtualToPhysical() outside of our
             * setMemoryAccess() handlers.
             */
            this.pswMode = (this.regPSW >> 12) & 3;
            addr = this.mapVirtualToPhysical(addr | (access & PDP11.ACCESS.DSPACE), PDP11.ACCESS.WRITE);
            this.pswMode = (this.regPSW >> 14) & 3;
            this.bus.writePair(addr, data);
        }
    }

    /**
     * readSrcByte(opcode)
     *
     * WARNING: If the SRC operand is a register, offRegSrc ensures we return a negative register number
     * rather than the register value, because on the PDP-11/20, the final value of the register must be
     * resolved AFTER the DST operand has been decoded and any pre-decrement or post-increment operations
     * affecting the SRC register have been completed.  See readSrcWord() for more details.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readSrcByte(opcode)
    {
        let result;
        opcode >>= PDP11.SRCMODE.SHIFT;
        let reg = this.srcReg = opcode & PDP11.OPREG.MASK;
        let mode = this.srcMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg + this.offRegSrc] & this.maskRegSrcByte;
        } else {
            result = this.bus.readData(this.getAddr(mode, reg, PDP11.ACCESS.READ_BYTE));
        }
        return result;
    }

    /**
     * readSrcWord(opcode)
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
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readSrcWord(opcode)
    {
        let result;
        opcode >>= PDP11.SRCMODE.SHIFT;
        let reg = this.srcReg = opcode & PDP11.OPREG.MASK;
        let mode = this.srcMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg + this.offRegSrc];
        } else {
            result = this.bus.readPair(this.getAddr(mode, reg, PDP11.ACCESS.READ_WORD));
        }
        return result;
    }

    /**
     * readDstAddr(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readDstAddr(opcode)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        return this.getAddrByMode(mode, reg, PDP11.ACCESS.VIRT);
    }

    /**
     * readDstByte(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readDstByte(opcode)
    {
        let result;
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg] & 0xff;
        } else {
            result = this.bus.readData(this.getAddr(mode, reg, PDP11.ACCESS.READ_BYTE));
        }
        return result;
    }

    /**
     * readDstWord(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readDstWord(opcode)
    {
        let result;
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg];
        } else {
            result = this.bus.readPair(this.getAddr(mode, reg, PDP11.ACCESS.READ_WORD));
        }
        return result;
    }

    /**
     * updateDstByte(opcode, data, fnOp)
     *
     * Used whenever the DST operand (as described by opcode) needs to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {function(number,number)} fnOp
     */
    updateDstByte(opcode, data, fnOp)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            let dst = this.regsGen[reg];
            data = (data < 0? (this.regsGen[-data-1] & 0xff) : data);
            this.regsGen[reg] = (dst & 0xff00) | fnOp.call(this, data, dst & 0xff);
        } else {
            let addr = this.dstAddr = this.getAddr(mode, reg, PDP11.ACCESS.UPDATE_BYTE);
            data = (data < 0? (this.regsGen[-data-1] & 0xff) : data);
            this.bus.writeData(addr, fnOp.call(this, data, this.bus.readData(addr)));
            if (addr & 1) this.nStepCycles--;
        }
    }

    /**
     * updateDstWord(opcode, data, fnOp)
     *
     * Used whenever the DST operand (as described by opcode) needs to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {function(number,number)} fnOp
     */
    updateDstWord(opcode, data, fnOp)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;

        this.assert(data < 0 && data >= -8 || !(data & ~0xffff));

        if (!mode) {
            this.regsGen[reg] = fnOp.call(this, data < 0? this.regsGen[-data-1] : data, this.regsGen[reg]);
        } else {
            let addr = this.getAddr(mode, reg, PDP11.ACCESS.UPDATE_WORD);
            this.bus.writePair(addr, fnOp.call(this, data < 0? this.regsGen[-data-1] : data, this.bus.readPair(addr)));
        }
    }

    /**
     * writeDstByte(opcode, data, writeFlags, fnFlags)
     *
     * Used whenever the DST operand (as described by opcode) does NOT need to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {number} writeFlags (WRITE.BYTE aka 0xff, or WRITE.SBYTE aka 0xffff)
     * @param {function(number)} fnFlags
     */
    writeDstByte(opcode, data, writeFlags, fnFlags)
    {
        this.assert(writeFlags);
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (!data) {
                /**
                 * Potentially worthless optimization (but it looks good on "paper").
                 */
                this.regsGen[reg] &= ~writeFlags;
            } else {
                /**
                 * Potentially worthwhile optimization: skipping the sign-extending data shifts
                 * if writeFlags is WRITE.BYTE (but that requires an extra test and separate code paths).
                 */
                data = (data < 0? (this.regsGen[-data-1] & 0xff): data);
                this.regsGen[reg] = (this.regsGen[reg] & ~writeFlags) | (((data << 24) >> 24) & writeFlags);
            }
            fnFlags.call(this, data << 8);
        } else {
            let addr = this.getAddr(mode, reg, PDP11.ACCESS.WRITE_BYTE);
            fnFlags.call(this, (data = data < 0? (this.regsGen[-data-1] & 0xff) : data) << 8);
            this.bus.writeData(addr, data);
            if (addr & 1) this.nStepCycles--;
        }
    }

    /**
     * writeDstWord(opcode, data, fnFlags)
     *
     * Used whenever the DST operand (as described by opcode) does NOT need to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {function(number)} fnFlags
     */
    writeDstWord(opcode, data, fnFlags)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;

        this.assert(data < 0 && data >= -8 || !(data & ~0xffff));

        if (!mode) {
            this.regsGen[reg] = (data = data < 0? this.regsGen[-data-1] : data);
            fnFlags.call(this, data);
        } else {
            let addr = this.getAddr(mode, reg, PDP11.ACCESS.WRITE_WORD);
            fnFlags.call(this, (data = data < 0? this.regsGen[-data-1] : data));
            this.bus.writePair(addr, data);
        }
    }

    /**
     * toInstruction(addr, opcode)
     *
     * Returns a string representation of the specified instruction.
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number|undefined} [opcode]
     * @returns {string}
     */
    toInstruction(addr, opcode)
    {
        return this.dbg && this.dbg.dumpInstruction(addr, 1) || "";
    }

    /**
     * toString()
     *
     * Returns a string representation of the current CPU state.
     *
     * @this {PDP11}
     * @returns {string}
     */
    toString()
    {
        let s = "";
        if (this.dbg) {
            let regs = [
                "R0", "R1", "R2", "R3", "R4", "R5", "",
                "SP", "PC", "PS", "PI", "SL", "NF", "ZF", "VF", "CF", "",
                "M0", "M1", "M2", "M3", "ER", "",
                "SR", "AR", "DR"
            ];
            for (let i = 0; i < regs.length; i++) {
                let reg = regs[i];
                if (!reg) {
                    s += '\n';
                    continue;
                }
                let bits = 16;
                if (reg[1] == 'F') bits = 1;
                let value = this.getRegister(reg);
                /**
                 * We must call the Debugger's sprintf() instead of our own in order to use its custom formatters (eg, %n).
                 */
                if (value != undefined) s += this.dbg.sprintf("%s=%*n ", reg, bits, value);
            }
        }
        return s;
    }
}

/**
 * CPU model numbers (supported)
 *
 * The 11/20 includes the 11/10, which is not identified separately because there was
 * nothing functionally different about it.
 *
 * The 11/40 added the MODE bits to the PSW (but only KERNEL=00 and USER=11) and 18-bit
 * addressing via an MMU; there was still only one register set.
 *
 * The 11/45 added REGSET bit to the PSW (to support a second register set), SUPER=01
 * mode to the existing KERNEL=00 and USER=11 modes, separate I/D spaces, and other MMU
 * extensions (eg, MMR1 and MMR3).
 *
 * The 11/70 added 22-bit addressing and corresponding extensions to the MMU.
 */
PDP11.MODEL_1120 = 1120;
PDP11.MODEL_1140 = 1140;
PDP11.MODEL_1145 = 1145;
PDP11.MODEL_1170 = 1170;

/**
 * This constant is used to mark points in the code where the physical address being returned
 * is invalid and should not be used.
 *
 * In a 32-bit CPU, -1 (ie, 0xffffffff) could actually be a valid address, so consider changing
 * ADDR_INVALID to NaN or null (which is also why all ADDR_INVALID tests should use strict equality
 * operators).
 *
 * The main reason I'm NOT using NaN or null now is my concern that, by mixing non-numbers
 * (specifically, values outside the range of signed 32-bit integers), performance may suffer.
 *
 * WARNING: Like many of the properties defined here, ADDR_INVALID is a common constant, which the
 * Closure Compiler will happily inline (with or without @const annotations; in fact, I've yet to
 * see a @const annotation EVER improve automatic inlining).  However, if you don't make ABSOLUTELY
 * certain that this file is included BEFORE the first reference to any of these properties, that
 * automatic inlining will no longer occur.
 */
PDP11.ADDR_INVALID = -1;

/**
 * Processor modes
 */
PDP11.MODE = {
    KERNEL:     0x0,            // 11/40 and higher
    SUPER:      0x1,            // 11/45 and higher
    UNUSED:     0x2,
    USER:       0x3,            // 11/40 and higher
    MASK:       0x3
};

/**
 * Processor Status Word (stored in regPSW) at 177776
 */
PDP11.PSW = {
    CF:         0x0001,         // bit  0     (000001)  Carry Flag
    VF:         0x0002,         // bit  1     (000002)  Overflow Flag (aka OF on Intel processors)
    ZF:         0x0004,         // bit  2     (000004)  Zero Flag
    NF:         0x0008,         // bit  3     (000010)  Negative Flag (aka SF -- Sign Flag -- on Intel processors)
    TF:         0x0010,         // bit  4     (000020)  Trap Flag
    PRI:        0x00E0,         // bits 5-7   (000340)  Priority
    UNUSED:     0x0700,         // bits 8-10  (003400)  UNUSED
    /**
     * The REGSET bit (and the alternate register set stored in regsAlt) came into existence
     * with the 11/45; (ie, they were not present on the 11/10, 11/20, or 11/40).
     */
    REGSET:     0x0800,         // bit  11    (004000)  Register Set
    /**
     * The MODE bits came into existence with the 11/40 (eg, not present on the 11/10 or 11/20).
     */
    PMODE:      0x3000,         // bits 12-13 (030000)  Prev Mode (see PDP11.MODE)
    CMODE:      0xC000,         // bits 14-15 (140000)  Curr Mode (see PDP11.MODE)
    SHIFT: {
        CF:     0,
        VF:     1,
        ZF:     2,
        NF:     3,
        TF:     4,
        PRI:    5,
        PMODE:  12,
        CMODE:  14
    }
};

/**
 * Program Interrupt Register (stored in regPIR) at 177772
 *
 * The PIA bits at 5-7 are designed to align with PRI bits 5-7 in the PSW.
 */
PDP11.PIR = {
    BITS:       0xFE00,         // bits 9-15 correspond to interrupt requests 1-7
    PIA:        0x00EE,         // the PIA bits contain two copies of the corresponding interrupt request priority
    PIA_INC:    0x0022,         // both sets of PIA bits can be incremented with this constant
    SHIFT: {
        BITS:   9
    }
};

/**
 * PDP-11 trap vectors
 */
PDP11.TRAP = {
    UNDEFINED:  0x00,           // 000  (reserved)
    BUS:        0x04,           // 004  unaligned address, non-existent memory, illegal instruction, etc
    RESERVED:   0x08,           // 010  reserved instructions
    BPT:        0x0C,           // 014  BPT: breakpoint trap (trace)
    IOT:        0x10,           // 020  IOT: input/output trap
    PF:         0x14,           // 024  power fail
    EMT:        0x18,           // 030  EMT: emulator trap
    TRAP:       0x1C,           // 034  TRAP instruction
    PIRQ:       0xA0,           // 240  PIRQ: program interrupt request
    MMU:        0xA8            // 250  MMU: aborts and traps
};

/**
 * PDP-11 trap reasons; the reason may also be a non-negative address indicating a BUS memory error
 * (unaligned address or non-existent memory).  Any reason >= RED (which includes BUS memory errors) generate
 * immediate (thrown) traps, as they are considered ABORTs; the rest generate synchronous traps.
 */
PDP11.REASON = {
    PANIC:      -1,             // immediate halt (internal error)
    ABORT:      -2,             // immediate MMU fault
    ILLEGAL:    -3,             // immediate invalid opcode (BUS)
    RED:        -4,             // immediate stack overflow fault (BUS)
    YELLOW:     -5,             // deferred stack overflow fault (BUS)
    FAULT:      -6,             // deferred MMU fault
    TRACE:      -7,             // deferred TF fault (BPT)
    HALT:       -8,             // illegal HALT (BUS)
    OPCODE:     -9,             // opcode-generated trap (eg, BPT, EMT, IOT, TRAP, or RESERVED opcode)
    INTERRUPT:  -10,            // device-generated trap (vector is device-specific)
};

PDP11.REASONS = [
    "UNKNOWN",
    "PANIC",
    "ABORT",
    "ILLEGAL",
    "RED",
    "YELLOW",
    "FAULT",
    "TRACE",
    "HALT",
    "OPCODE",
    "INTERRUPT"
];

/**
 * Assorted common opcodes
 */
PDP11.OPCODE = {
    HALT:       0x0000,
    WAIT:       0x0001,
    BPT:        0x0003,
    IOT:        0x0004,
    JSR_OP:     0x0800,
    JSR_MASK:   0xFE00,
    SOB_OP:     0x7E00,
    SOB_MASK:   0xFE00,
    EMT_OP:     0x8800,
    EMT_MASK:   0xFF00,
    TRAP_OP:    0x8900,
    TRAP_MASK:  0xFF00,
    INVALID:    0xFFFF          // far from the only invalid opcode, just a KNOWN invalid opcode
};

/**
 * Internal operation state flags
 */
PDP11.OPFLAG = {
    IRQ_DELAY:  0x0001,         // incremented until it becomes IRQ (set by SPL and traps)
    IRQ:        0x0002,         // time to call checkInterrupts()
    IRQ_MASK:   0x0003,
    DEBUGGER:   0x0004,         // set if the Debugger wants to perform checks
    WAIT:       0x0008,         // WAIT operation in progress
    PRESERVE:   0x000F,         // OPFLAG bits to preserve prior to the next instruction
    TRAP_TF:    0x0010,         // aka PDP11.PSW.TF (WARNING: do not change this bit, or you will likely break opRTI())
    TRAP_SP:    0x0020,         // set for a deferred BUS trap (due to a "yellow" stack overflow condition)
    TRAP_MMU:   0x0040,
    TRAP_MASK:  0x0070,
    TRAP_LAST:  0x0080,         // set if last operation was a trap (see trapLast for the vector, and trapReason for the reason)
    TRAP_RED:   0x0100,         // set whenever a RED trap occurs, used to catch double RED traps (time to PANIC)
};

/**
 * Opcode reg (opcode bits 2-0)
 */
PDP11.OPREG = {
    MASK:       0x07
};

    /**
     * Opcode modes (opcode bits 5-3)
     */
PDP11.OPMODE = {
    REG:        0x00,           // REGISTER                 (register is operand)
    REGD:       0x08,           // REGISTER DEFERRED        (register is address of operand)
    POSTINC:    0x10,           // AUTO-INCREMENT           (register is address of operand, register incremented)
    POSTINCD:   0x18,           // AUTO-INCREMENT DEFERRED  (register is address of address of operand, register incremented)
    PREDEC:     0x20,           // AUTO-DECREMENT           (register decremented, register is address of operand)
    PREDECD:    0x28,           // AUTO-DECREMENT DEFERRED  (register decremented, register is address of address of operand)
    INDEX:      0x30,           // INDEX                    (register + next word is address of operand)
    INDEXD:     0x38,           // INDEX DEFERRED           (register + next word is address of address of operand)
    MASK:       0x38,
    SHIFT:      3
};

PDP11.DSTMODE = {
    REG:        0x0007,
    MODE:       0x0038,
    MASK:       0x003F,
    SHIFT:      0
};

PDP11.SRCMODE = {
    REG:        0x01C0,
    MODE:       0x0E00,
    MASK:       0x0FC0,
    SHIFT:      6
};

PDP11.REG = {
    SP:         6,
    PC:         7,
};

/**
 * Internal memory access flags
 */
PDP11.ACCESS = {
    WORD:       0x00,
    BYTE:       0x01,
    READ:       0x02,
    WRITE:      0x04,
    UPDATE:     0x06,
    VIRT:       0x08,           // getVirtualByMode() leaves bit 17 clear if this is set (otherwise the caller would have to clear it again)
    ISPACE:     0x00000,
    DSPACE:     0x10000         // getVirtualByMode() sets bit 17 in any 16-bit virtual address that refers to D space (as opposed to I space)
};

/**
 * Internal flags passed to writeDstByte()
 *
 * The BYTE and SBYTE values have been chosen so that they can be used directly as masks.
 */
PDP11.WRITE = {
    BYTE:       0xff,           // write byte normally
    SBYTE:      0xffff          // sign-extend byte to word
};

PDP11.CPUERR = {                // 177766
    RED:        0x0004,         // 000004 red zone stack limit
    YELLOW:     0x0008,         // 000010 yellow zone stack limit
    TIMEOUT:    0x0010,         // 000020 UNIBUS timeout error
    NOMEMORY:   0x0020,         // 000040 non-existent memory error
    ODDADDR:    0x0040,         // 000100 odd word address error (as in non-even, not strange)
    BADHALT:    0x0080          // 000200 HALT attempted in USER or SUPER modes
};

PDP11.MMR0 = {                  // 177572
    ENABLED:    0x0001,         // 000001 address relocation enabled
    PAGE_NUM:   0x000E,         // 000016 page number of last fault
    PAGE_D:     0x0010,         // 000020 last fault occurred in D space (11/45 and 11/70)
    PAGE:       0x001E,         // 000176 (all of the PAGE bits)
    MODE:       0x0060,         // 000140 processor mode as of last fault
    COMPLETED:  0x0080,         // 000200 last instruction completed (R/O) (11/70)
    MAINT:      0x0100,         // 000400 only destination mode references will be relocated
    MMU_TRAPS:  0x0200,         // 001000 enable MMU traps (11/70)
    UNUSED:     0x0C00,         // 006000
    TRAP_MMU:   0x1000,         // 010000 trap: MMU (11/70)
    ABORT_RO:   0x2000,         // 020000 abort: read-only
    ABORT_PL:   0x4000,         // 040000 abort: page length
    ABORT_NR:   0x8000,         // 100000 abort: non-resident
    ABORT:      0xE000,         // 160000 (all of the ABORT bits)
    UPDATE:     0xF0FE,         // Includes all of: ABORT, TRAP, COMPLETED, MODE, and PAGE bits
    SHIFT: {
        PAGE:   1,
        MODE:   5
    }
};

PDP11.MMR1 = {                  // 177574: general purpose auto-inc/auto-dec register (11/45 and 11/70)
    REG1_NUM:   0x0007,         //
    REG1_DELTA: 0x00F8,         //
    REG2_NUM:   0x0700,         //
    REG2_DELTA: 0xF800          //
};

PDP11.MMR2 = {                  // 177576: virtual program counter register
};

PDP11.MMR3 = {                  // 172516: mapping register (11/45 and 11/70)
    USER_D:     0x0001,         // (000001)
    SUPER_D:    0x0002,         // (000002)
    KERNEL_D:   0x0004,         // (000004)
    MMU_22BIT:  0x0010,         // (000020)
    UNIBUS_MAP: 0x0020          // (000040) UNIBUS map relocation enabled
};

PDP11.PDR = {
    ACF: {
        NR:     0x0,            // non-resident, abort all accesses
        RO1:    0x1,            // read-only, abort on write attempt, memory management trap on read (11/70)
        RO:     0x2,            // read-only, abort on write attempt
        U1:     0x3,            // unused, abort all accesses--reserved for future use
        RW1:    0x4,            // read/write, memory management trap upon completion of a read or write
        RW2:    0x5,            // read/write, memory management trap upon completion of a write (11/70)
        RW:     0x6,            // read/write, no system trap/abort action
        U2:     0x7,            // unused, abort all accesses--reserved for future use
        MASK:   0x7
    },
    ED:         0x0008,         // expansion direction (if set, the page expands downward from block number 127)
    UNUSED:     0x0030,
    MODIFIED:   0x0040,         // page has been written (bit cleared when either PDR or PAR is written)
    ACCESSED:   0x0080,         // page has been accessed (bit cleared when either PDR or PAR is written) (11/70)
    PLF:        0x7F00,         // page length field
    BC:         0x8000          // bypass cache (11/44 only)
};

/**
 * Assorted special (UNIBUS) addresses
 *
 * Within the PDP-11/45's 18-bit address space, of the 0x40000 possible addresses (256Kb), the top 0x2000
 * (8Kb) is called the IOPage and is reserved for CPU and I/O registers.  The IOPage spans 0x3E000-0x3FFFF.
 *
 * Within the PDP-11/70's 22-bit address space, of the 0x400000 possible addresses (4Mb), the top 0x20000
 * (256Kb) is mapped to the UNIBUS (not physical memory), and as before, the top 0x2000 (8Kb) of that is
 * mapped to the IOPage.
 *
 * To map 18-bit UNIBUS addresses to 22-bit physical addresses, the 11/70 uses a UNIBUS relocation map.
 * It consists of 31 double-word registers that each hold a 22-bit base address.  When UNIBUS relocation
 * is enabled, the top 5 bits of an address select one of the 31 mapping registers, and the bottom 13 bits
 * are then added to the contents of the selected mapping register.
 *
 * ES6 ALERT: By using octal constants, I'm finally dipping my toe into ES6 (aka ECMAScript 2015) waters.
 * You'll even see a few binary constants below, too.  If you're loading this raw source code into your browser,
 * then by now (2016) you're almost certainly using an ES6-aware browser.  Production sites should be using code
 * compiled by Google's Closure Compiler, which we configure to produce code that's backward-compatible with ES5
 * (for example, all binary, octal, and hex constants are converted to decimal values).
 *
 * For more details: https://github.com/google/closure-compiler/wiki/ECMAScript6
 */
PDP11.UNIBUS = {                // 16-bit     18-bit      22-bit    Description
    UNIMAP:     0o170200,       //                                  UNIBUS Mapping Registers (0-31) 64 words (ends at 0o170372)
    SIPDR0:     0o172200,       //                                  Supervisor I Page Descriptor Register 0
    SIPDR1:     0o172202,       //                                  Supervisor I Page Descriptor Register 1
    SIPDR2:     0o172204,       //                                  Supervisor I Page Descriptor Register 2
    SIPDR3:     0o172206,       //                                  Supervisor I Page Descriptor Register 3
    SIPDR4:     0o172210,       //                                  Supervisor I Page Descriptor Register 4
    SIPDR5:     0o172212,       //                                  Supervisor I Page Descriptor Register 5
    SIPDR6:     0o172214,       //                                  Supervisor I Page Descriptor Register 6
    SIPDR7:     0o172216,       //                                  Supervisor I Page Descriptor Register 7
    SDPDR0:     0o172220,       //                                  Supervisor D Page Descriptor Register 0
    SDPDR1:     0o172222,       //                                  Supervisor D Page Descriptor Register 1
    SDPDR2:     0o172224,       //                                  Supervisor D Page Descriptor Register 2
    SDPDR3:     0o172226,       //                                  Supervisor D Page Descriptor Register 3
    SDPDR4:     0o172230,       //                                  Supervisor D Page Descriptor Register 4
    SDPDR5:     0o172232,       //                                  Supervisor D Page Descriptor Register 5
    SDPDR6:     0o172234,       //                                  Supervisor D Page Descriptor Register 6
    SDPDR7:     0o172236,       //                                  Supervisor D Page Descriptor Register 7
    SIPAR0:     0o172240,       //                                  Supervisor I Page Address Register 0
    SIPAR1:     0o172242,       //                                  Supervisor I Page Address Register 1
    SIPAR2:     0o172244,       //                                  Supervisor I Page Address Register 2
    SIPAR3:     0o172246,       //                                  Supervisor I Page Address Register 3
    SIPAR4:     0o172250,       //                                  Supervisor I Page Address Register 4
    SIPAR5:     0o172252,       //                                  Supervisor I Page Address Register 5
    SIPAR6:     0o172254,       //                                  Supervisor I Page Address Register 6
    SIPAR7:     0o172256,       //                                  Supervisor I Page Address Register 7
    SDPAR0:     0o172260,       //                                  Supervisor D Page Address Register 0
    SDPAR1:     0o172262,       //                                  Supervisor D Page Address Register 1
    SDPAR2:     0o172264,       //                                  Supervisor D Page Address Register 2
    SDPAR3:     0o172266,       //                                  Supervisor D Page Address Register 3
    SDPAR4:     0o172270,       //                                  Supervisor D Page Address Register 4
    SDPAR5:     0o172272,       //                                  Supervisor D Page Address Register 5
    SDPAR6:     0o172274,       //                                  Supervisor D Page Address Register 6
    SDPAR7:     0o172276,       //                                  Supervisor D Page Address Register 7
    KIPDR0:     0o172300,       //                                  Kernel I Page Descriptor Register 0
    KIPDR1:     0o172302,       //                                  Kernel I Page Descriptor Register 1
    KIPDR2:     0o172304,       //                                  Kernel I Page Descriptor Register 2
    KIPDR3:     0o172306,       //                                  Kernel I Page Descriptor Register 3
    KIPDR4:     0o172310,       //                                  Kernel I Page Descriptor Register 4
    KIPDR5:     0o172312,       //                                  Kernel I Page Descriptor Register 5
    KIPDR6:     0o172314,       //                                  Kernel I Page Descriptor Register 6
    KIPDR7:     0o172316,       //                                  Kernel I Page Descriptor Register 7
    KDPDR0:     0o172320,       //                                  Kernel D Page Descriptor Register 0
    KDPDR1:     0o172322,       //                                  Kernel D Page Descriptor Register 1
    KDPDR2:     0o172324,       //                                  Kernel D Page Descriptor Register 2
    KDPDR3:     0o172326,       //                                  Kernel D Page Descriptor Register 3
    KDPDR4:     0o172330,       //                                  Kernel D Page Descriptor Register 4
    KDPDR5:     0o172332,       //                                  Kernel D Page Descriptor Register 5
    KDPDR6:     0o172334,       //                                  Kernel D Page Descriptor Register 6
    KDPDR7:     0o172336,       //                                  Kernel D Page Descriptor Register 7
    KIPAR0:     0o172340,       //                                  Kernel I Page Address Register 0
    KIPAR1:     0o172342,       //                                  Kernel I Page Address Register 1
    KIPAR2:     0o172344,       //                                  Kernel I Page Address Register 2
    KIPAR3:     0o172346,       //                                  Kernel I Page Address Register 3
    KIPAR4:     0o172350,       //                                  Kernel I Page Address Register 4
    KIPAR5:     0o172352,       //                                  Kernel I Page Address Register 5
    KIPAR6:     0o172354,       //                                  Kernel I Page Address Register 6
    KIPAR7:     0o172356,       //                                  Kernel I Page Address Register 7
    KDPAR0:     0o172360,       //                                  Kernel D Page Address Register 0
    KDPAR1:     0o172362,       //                                  Kernel D Page Address Register 1
    KDPAR2:     0o172364,       //                                  Kernel D Page Address Register 2
    KDPAR3:     0o172366,       //                                  Kernel D Page Address Register 3
    KDPAR4:     0o172370,       //                                  Kernel D Page Address Register 4
    KDPAR5:     0o172372,       //                                  Kernel D Page Address Register 5
    KDPAR6:     0o172374,       //                                  Kernel D Page Address Register 6
    KDPAR7:     0o172376,       //                                  Kernel D Page Address Register 7
    MMR3:       0o172516,       // 772516   17772516
    RLCS:       0o174400,       //                                  RL11 Control Status Register
    RLBA:       0o174402,       //                                  RL11 Bus Address Register
    RLDA:       0o174404,       //                                  RL11 Disk Address Register
    RLMP:       0o174406,       //                                  RL11 Multi-Purpose Register
    RLBE:       0o174410,       //                                  RL11 Bus (Address) Extension Register (RLV12 controller only)
    DL11:       0o176500,       //                                  DL11 Additional Register Range (ends at 0o176676)
    RXCS:       0o177170,       //                                  RX11 Command and Status Register
    RXDB:       0o177172,       //                                  RX11 Data Buffer Register
    RKDS:       0o177400,       //                                  RK11 Drive Status Register
    RKER:       0o177402,       //                                  RK11 Error Register
    RKCS:       0o177404,       //                                  RK11 Control Status Register
    RKWC:       0o177406,       //                                  RK11 Word Count Register
    RKBA:       0o177410,       //                                  RK11 Bus Address Register
    RKDA:       0o177412,       //                                  RK11 Disk Address Register
    RKUN:       0o177414,       //                                  RK11 UNUSED (just to make it clear we didn't forget something)
    RKDB:       0o177416,       //                                  RK11 Data Buffer Register
    LKS:        0o177546,       //                                  KW11-L Clock Status
    PRS:        0o177550,       //                                  PC11 (and PR11) Reader Status Register
    PRB:        0o177552,       //                                  PC11 (and PR11) Reader Buffer Register
    PPS:        0o177554,       //                                  PC11 Punch Status Register
    PPB:        0o177556,       //                                  PC11 Punch Buffer Register
    RCSR:       0o177560,       //                                  DL11 Receiver Status Register
    RBUF:       0o177562,       //                                  DL11 Receiver Data Buffer Register
    XCSR:       0o177564,       //                                  DL11 Transmitter Status Register
    XBUF:       0o177566,       //                                  DL11 Transmitter Data Buffer Register
    CNSW:       0o177570,       //                                  Console (Front Panel) Switch/Display Register
    MMR0:       0o177572,       // 777572   17777572
    MMR1:       0o177574,       // 777574   17777574
    MMR2:       0o177576,       // 777576   17777576
    UIPDR0:     0o177600,       //                                  User I Page Descriptor Register 0
    UIPDR1:     0o177602,       //                                  User I Page Descriptor Register 1
    UIPDR2:     0o177604,       //                                  User I Page Descriptor Register 2
    UIPDR3:     0o177606,       //                                  User I Page Descriptor Register 3
    UIPDR4:     0o177610,       //                                  User I Page Descriptor Register 4
    UIPDR5:     0o177612,       //                                  User I Page Descriptor Register 5
    UIPDR6:     0o177614,       //                                  User I Page Descriptor Register 6
    UIPDR7:     0o177616,       //                                  User I Page Descriptor Register 7
    UDPDR0:     0o177620,       //                                  User D Page Descriptor Register 0
    UDPDR1:     0o177622,       //                                  User D Page Descriptor Register 1
    UDPDR2:     0o177624,       //                                  User D Page Descriptor Register 2
    UDPDR3:     0o177626,       //                                  User D Page Descriptor Register 3
    UDPDR4:     0o177630,       //                                  User D Page Descriptor Register 4
    UDPDR5:     0o177632,       //                                  User D Page Descriptor Register 5
    UDPDR6:     0o177634,       //                                  User D Page Descriptor Register 6
    UDPDR7:     0o177636,       //                                  User D Page Descriptor Register 7
    UIPAR0:     0o177640,       //                                  User I Page Address Register 0
    UIPAR1:     0o177642,       //                                  User I Page Address Register 1
    UIPAR2:     0o177644,       //                                  User I Page Address Register 2
    UIPAR3:     0o177646,       //                                  User I Page Address Register 3
    UIPAR4:     0o177650,       //                                  User I Page Address Register 4
    UIPAR5:     0o177652,       //                                  User I Page Address Register 5
    UIPAR6:     0o177654,       //                                  User I Page Address Register 6
    UIPAR7:     0o177656,       //                                  User I Page Address Register 7
    UDPAR0:     0o177660,       //                                  User D Page Address Register 0
    UDPAR1:     0o177662,       //                                  User D Page Address Register 1
    UDPAR2:     0o177664,       //                                  User D Page Address Register 2
    UDPAR3:     0o177666,       //                                  User D Page Address Register 3
    UDPAR4:     0o177670,       //                                  User D Page Address Register 4
    UDPAR5:     0o177672,       //                                  User D Page Address Register 5
    UDPAR6:     0o177674,       //                                  User D Page Address Register 6
    UDPAR7:     0o177676,       //                                  User D Page Address Register 7
    R0SET0:     0o177700,       //
    R1SET0:     0o177701,       //
    R2SET0:     0o177702,       //
    R3SET0:     0o177703,       //
    R4SET0:     0o177704,       //
    R5SET0:     0o177705,       //
    R6KERNEL:   0o177706,       //
    R7KERNEL:   0o177707,       //
    R0SET1:     0o177710,       //
    R1SET1:     0o177711,       //
    R2SET1:     0o177712,       //
    R3SET1:     0o177713,       //
    R4SET1:     0o177714,       //
    R5SET1:     0o177715,       //
    R6SUPER:    0o177716,       //
    R6USER:     0o177717,       //
    /**
     * This next group of registers is largely ignored; all accesses are routed to regsControl[],
     * and therefore are managed as a block of 8 "CTRL" registers.
     */
    CTRL:       0o177740,
    LAERR:      0o177740,       //                                  Low Address Error                           (11/70 only)
    HAERR:      0o177742,       //                                  High Address Error                          (11/70 only)
    MEMERR:     0o177744,       //                                  Memory System Error                         (11/70 only)
    CACHEC:     0o177746,       //                                  Cache Control                               (11/70 only)
    MAINT:      0o177750,       //                                  Maintenance                                 (11/70 only)
    HITMISS:    0o177752,       //                                  Hit/Miss                                    (11/70 only)
    UNDEF1:     0o177754,       //
    UNDEF2:     0o177756,       //
    LSIZE:      0o177760,       //                                  Lower Size Register (last 64-byte block #)  (11/70 only)
    HSIZE:      0o177762,       //                                  Upper Size Register (always zero)           (11/70 only)
    SYSID:      0o177764,       //                                  System ID Register                          (11/70 only)
    CPUERR:     0o177766,       //                                  CPU error                                   (11/70 only)
    MB:         0o177770,       //                                  Microprogram break                          (11/70 only)
    PIR:        0o177772,       //                                  Program Interrupt Request
    SL:         0o177774,       //                                  Stack Limit Register
    PSW:        0o177776        // 777776   17777776    0x3FFFFE    Processor Status Word
};

PDP11.DL11 = {                  // Serial Line Interface (program compatible with the KL11 for control of console teleprinters)
    PRI:        4,
    RVEC:       0o060,
    XVEC:       0o064,
    RCSR: {                     // 177560: DL11 Receiver Status Register
        RE:     0x0001,         // Reader Enable (W/O)
        DTR:    0x0002,         // Data Terminal Ready (R/W)
        RTS:    0x0004,         // Request To Send (R/W)
        STD:    0x0008,         // Secondary Transmitted Data (R/W)
        DIE:    0x0020,         // Dataset Interrupt Enable (R/W)
        RIE:    0x0040,         // Receiver Interrupt Enable (R/W)
        RD:     0x0080,         // Receiver Done (R/O)
        SRD:    0x0400,         // Secondary Received Data (R/O)
        RA:     0x0800,         // Receiver Active (R/O)
        CD:     0x1000,         // Carrier Detect (R/O)
        CTS:    0x2000,         // Clear To Send (R/O)
        RI:     0x4000,         // Ring Indicator (R/O)
        DSC:    0x8000,         // Dataset Status Change (R/O)
        RMASK:  0xFFFE,         // bits readable (TODO: All I know for sure is that bit 0 is NOT readable; see readRCSR())
        WMASK:  0x006F,         // bits writable
        RS232:  0x0006,         // bits affecting RS-232 status updates
        BAUD:   9600
    },
    RBUF: {                     // 177562: DL11 Receiver Data Buffer Register
        DATA:   0x00ff,         // Received Data (R/O)
        PARITY: 0x1000,         // Received Data Parity (R/O)
        FE:     0x2000,         // Framing Error (R/O)
        OE:     0x4000,         // Overrun Error (R/O)
        ERROR:  0x8000          // Error (R/O)
    },
    XCSR: {                     // 177564: DL11 Transmitter Status Register
        BREAK:  0x0001,         // BREAK (R/W)
        MAINT:  0x0004,         // Maintenance (R/W)
        TIE:    0x0040,         // Transmitter Interrupt Enable (R/W)
        READY:  0x0080,         // Transmitter Ready (R/O)
        RMASK:  0x00C5,
        WMASK:  0x0045,
        BAUD:   9600
    },
    XBUF: {                     // 177566: DL11 Transmitter Data Buffer Register
        DATA:   0x00FF          // Transmitted Data (W/O) (TODO: Determine why pdp11.js effectively defined this as 0x7F)
    }
};

PDP11.KW11 = {                  // KW11-L Line Time Clock (60Hz; well, OK, or 50Hz, if you're in the UK, I suppose...)
    PRI:        6,
    VEC:        0o100,
    DELAY:      0,
    LKS: {                      // 177546: KW11-L Clock Status
        IE:     0x0040,         // Interrupt Enable
        MON:    0x0080,         // Monitor
        MASK:   0x00C0          // these are the only bits that can read or written
    }
};

PDP11.PC11 = {                  // High Speed Reader & Punch (PR11 is a Reader-only unit)
    PRI:        4,              // NOTE: reader has precedence over punch
    RVEC:       0o070,          // reader vector
    PVEC:       0o074,          // punch vector
    PRS: {                      // 177550: PC11 (and PR11) Reader Status Register
        RE:     0x0001,         // (000001) Reader Enable (W/O)
        IE:     0x0040,         // (000100) Reader Interrupt Enable (allows the DONE and ERROR bits to trigger an interrupt)
        DONE:   0x0080,         // (000200) Done (R/O)
        BUSY:   0x0800,         // (004000) Busy (R/O)
        ERROR:  0x8000,         // (100000) Error (R/O)
        CLEAR:  0x08C0,         // (004300) bits cleared on INIT
        RMASK:  0xFFFE,         // (177776) bits readable (TODO: All I know for sure is that bit 0 is NOT readable; see readPRS())
        WMASK:  0x0041,         // (000101) bits writable
        BAUD:   3600
    },
    PRB: {                      // 177552: PC11 (and PR11) Reader Buffer Register
        MASK:   0x00FF          // Data
    },
    PPS: {                      // 177554: PC11 Punch Status Register
        IE:     0x0040,         // Interrupt Enable
        RDY:    0x0080,         // Ready
        ERROR:  0x8000,         // Error (eg, no tape in punch, or punch has no power)
        WMASK:  0x0040,         // bits writable
        BAUD:   600
    },
    PPB: {                      // 177556: PC11 Punch Buffer Register
        MASK:   0x00FF          // Data
    }
};

PDP11.RK11 = {                  // RK11 Disk Controller
    PRI:        5,
    VEC:        0o220,
    DRIVES:     8,              // maximum of 8 drives
    RKDS: {                     // 177400: Drive Status Register
        SC:     0x000F,         // (000017) Sector Counter
        SCESA:  0x0010,         // (000020) Sector Counter Equals Sector Address
        WPS:    0x0020,         // (000040) Write Protected Status (set if write-protected)
        RRDY:   0x0040,         // (000100) Read/Write/Seek Ready
        DRDY:   0x0080,         // (000200) Drive Ready
        SOK:    0x0100,         // (000400) Sector Counter OK
        SIN:    0x0200,         // (001000) Seek Incomplete
        DRU:    0x0400,         // (002000) Drive Unsafe
        RK05:   0x0800,         // (004000) RK05 is the selected disk drive (always set)
        DPL:    0x1000,         // (010000) Drive Power Low
        ID:     0xE000,         // (160000) Drive ID (logical drive number of an interrupting drive)
        SHIFT: {
            ID:     13
        }
    },
    RKER: {                     // 177402: Error Register
        WCE:    0x0001,         // Write Check Error
        CSE:    0x0002,         // Checksum Error
        SE:     0x0003,         // Soft Error bits (cleared at the start of a new function)
        UNUSED: 0x001C,         // unused (returns zero)
        NXS:    0x0020,         // Non-Existent Sector
        NXC:    0x0040,         // Non-Existent Cylinder
        NXD:    0x0080,         // Non-Existent Disk
        TE:     0x0100,         // Timing Error
        DLT:    0x0200,         // Date Late
        NXM:    0x0400,         // Non-Existent Memory
        PGE:    0x0800,         // Programming Error
        SKE:    0x1000,         // Seek Error
        WLO:    0x2000,         // Write Lock-Out Violation
        OVR:    0x4000,         // Overrun
        DRE:    0x8000,         // Drive Error
        HE:     0x7FE0          // Hard Error bits (cleared only by Bus RESET or RK11 CRESET function)
    },
    RKCS: {                     // 177404: Control Status Register
        GO:     0x0001,         // (000001) Go (W/O)
        FUNC:   0x000E,         // (000016) Function Code (F2,F1,F0) (R/W)
        MEX:    0x0030,         // (000060) Memory Extension (R/W)
        IE:     0x0040,         // (000100) Interrupt Enable (R/W)
        CRDY:   0x0080,         // (000200) Controller Ready (R/O)
        SSE:    0x0100,         // (000400) Stop on Soft Error (R/W)
        EXB:    0x0200,         // (001000) Extra Bit (R/W)
        FMT:    0x0400,         // (002000) Format (R/W)
        IBA:    0x0800,         // (004000) Inhibit RKBA Increment (R/W)
        SCP:    0x2000,         // (020000) Search Complete (R/O)
        HE:     0x4000,         // (040000) Hard Error (R/O)
        ERR:    0x8000,         // (100000) Composite Error (R/O) (set when any RKER bit is set)
        UNUSED: 0x1200,         // (011000) unused
        RMASK:  0xEFFE,         // (167776) bits readable
        WMASK:  0x0F7F,         // (007577) bits writable
        SHIFT: {
            FUNC:   1,
            MEX:    4
        }
    },
    RKDA: {                     // 177412: Disk Address Register
        SA:     0x000F,         // (000017) Sector Address
        HS:     0x0010,         // (000020) Head Select (aka SUR: clear for upper disk head, set for lower)
        CA:     0x1FE0,         // (017740) Cylinder Address (aka CYL ADDR)
        DS:     0xE000,         // (160000) Drive Select (aka DR SEL)
        SHIFT: {
            HS:     4,
            CA:     5,
            DS:     13
        }
    },
    FUNC: {
        CRESET: 0b0000,         // (00) Controller Reset
        WRITE:  0b0010,         // (02) Write
        READ:   0b0100,         // (04) Read
        WCHK:   0b0110,         // (06) Write Check
        SEEK:   0b1000,         // (10) Seek
        RCHK:   0b1010,         // (12) Read Check
        DRESET: 0b1100,         // (14) Drive Reset
        WLOCK:  0b1110          // (16) Write Lock
    }
};

PDP11.RL11 = {                  // RL11 Disk Controller
    PRI:        5,
    VEC:        0o160,
    DRIVES:     4,              // maximum of 4 drives
    PREFIX:     "DY",
    RLCS: {                     // 174400: Control Status Register
        DRDY:   0x0001,         // (000001) Drive Ready (R/O)
        FUNC:   0x000E,         // (000016) Function Code (F2,F1,F0) (R/W)
        BAE:    0x0030,         // (000060) Bus Address Extension bits (BA17,BA16) (R/W)
        IE:     0x0040,         // (000100) Interrupt Enable (R/W)
        CRDY:   0x0080,         // (000200) Controller Ready (R/W)
        DS:     0x0300,         // (001400) Drive Select (DS1,DS0) (R/W)
        ERRC:   0x3C00,         // (036000) Error Code (R/O)
        DE:     0x4000,         // (040000) Drive Error (R/O)
        ERR:    0x8000,         // (100000) Composite Error (R/O)
        CLEAR:  0x3F7E,         // (037576) bits cleared on INIT (bits 1-6 and 8-13 are cleared)
        SET:    0x0080,         // (000200) bits set on INIT (bit 7 is set)
        RMASK:  0xFFFF,         // (177777) no write-only bits
        WMASK:  0x03FE,         // (001776) bits writable
        SHIFT: {
            FUNC:   1,
            BAE:    4,
            DS:     8
        }
    },
    RLBA: {                     // 174402: Bus Address Register
        WMASK:  0xFFFE          // bit 0 is effectively not writable (always zero)
    },
    /**
     * This register has 3 formats: one for Seek, another for Read/Write, and a third for Get Status
     */
    RLDA: {                     // 174404: Disk Address Register
        SEEK_CMD:   0x0001,     // Seek: bit 0 must be set, bits 1 and 3 must be clear
        SEEK_DIR:   0x0004,     // Direction (clear to move heads away from spindle (lower cylinder), set to move to higher cylinder)
        SEEK_HS:    0x0010,     // Head Select (clear to select upper head, set to select lower head)
        SEEK_CAD:   0xFF80,     // Cylinder Address Difference
        RW_SA:      0x003F,     // Sector Address
        RW_HS:      0x0040,     // Head Select
        RW_CA:      0xFF80,     // Cylinder Address (RL01 has 256 cylinders, RL02 has 512)
        GS_CMD:     0x0003,     // Get Status: bit 0 must be set, bit 1 set, and bits 2 and 4-7 clear (bits 8-15 unused)
        GS_RST:     0x0008,     // Reset (when set, clears error register before sending status word to controller)
        SHIFT: {
            RW_HS:  6,
            RW_CA:  7
        }
    },
    /**
     * This register has 3 formats: one for Read Header, another for Read/Write, and a third for Get Status
     */
    RLMP: {                     // 177406: Multi-Purpose Register
        GS_ST: {                // Major State Code (of the drive)
            LOADC:  0x0,        // Load Cartridge
            SPINUP: 0x1,        // Spin-Up
            BRUSHC: 0x2,        // Brush Cycle
            LOADH:  0x3,        // Load Heads
            SEEK:   0x4,        // Seek
            LOCKON: 0x5,        // Lock On
            UNLOADH:0x6,        // Unload Heads
            SPINDN: 0x7         // Spin-Down
        },
        GS_BH:      0x0008,     // Brushes Home
        GS_HO:      0x0010,     // Heads Out
        GS_CO:      0x0020,     // Cover Open (or dust cover is not in place)
        GS_HS:      0x0040,     // Head Selected (0 for upper head, 1 for lower head)
        GS_DT:      0x0080,     // Drive Type (0 for RL01, 1 for RL02)
        GS_DSE:     0x0100,     // Drive Select Error
        GS_VC:      0x0200,     // Volume Check (Set during transition from a head load state to a head-on-track state; cleared by execution of a Get Status command with Bit 3 asserted)
        GS_WGE:     0x0400,     // Write Gate Error
        GS_SPE:     0x0800,     // Spin Error
        GS_SKTO:    0x1000,     // Seek Time-Out
        GS_WL:      0x2000,     // Write Lock
        GS_CHE:     0x4000,     // Current Head Error
        GS_WDE:     0x8000      // Write Data Error
    },
    RLBE: {                     // 174410: Bus (Address) Extension Register
        MASK:   0x003F          // bits 5-0 correspond to bus address bits 21-16
    },
    ERRC: {                     // NOTE: These error codes are pre-shifted to read/write directly from/to RLCS.ERRC
        OPI:    0x0400,         // Operation Incomplete
        DCRC:   0x0800,         // Read Data CRC
        WCE:    0x0800,         // Write Check Error
        HCRC:   0x0C00,         // Header CRC
        DLT:    0x1000,         // Data Late
        HNF:    0x1400,         // Header Not Found
        NXM:    0x2000,         // Non-Existent Memory
        MPE:    0x2400          // Memory Parity Error (RLV12 only)
    },
    FUNC: {                     // NOTE: These function codes are pre-shifted to read/write directly from/to RLCS.FUNC
        NOP:    0b0000,         // (00) No-Op
        WCHK:   0b0010,         // (02) Write Check
        STATUS: 0b0100,         // (04) Get Status
        SEEK:   0b0110,         // (06) Seek
        RHDR:   0b1000,         // (10) Read Header
        WDATA:  0b1010,         // (12) Write Data
        RDATA:  0b1100,         // (14) Read Data
        RDNC:   0b1110          // (16) Read Data without Header Check
    }
};

PDP11.RX11 = {                  // RX11 Disk Controller
    PRI:        5,
    VEC:        0o264,
    DRIVES:     2,              // maximum of 2 drives
    PREFIX:     "DX",
    RXCS: {                     // 177170: Command and Status Register
        GO:     0x0001,         // (000001) Go (W/O)
        FUNC:   0x000E,         // (000016) Function Code (F2,F1,F0) (W/O)
        UNIT:   0x0010,         // (000020) Unit Select (W/O)
        DONE:   0x0020,         // (000040) Done (R/O)
        IE:     0x0040,         // (000100) Interrupt Enable (R/W, cleared on INIT)
        TR:     0x0080,         // (000200) Transfer Request (R/O)
        INIT:   0x4000,         // (040000) RX11 Initialize (W/O)
        ERR:    0x8000,         // (100000) Error (R/O, cleared on INIT or command)
        UNUSED: 0x3F00,         // (037400) unused
        RMASK:  0x80E0,         // (100340) bits readable
        WMASK:  0x405F          // (040137) bits writable
    },
    RXDB: {                     // 177172: Data Buffer Register
    },
    RXTA: {
        MASK:   0x007F
    },
    RXSA: {
        MASK:   0x001F
    },
    RXES: {
        /**
         * The DRDY bit is only valid when retrieved via a Read Status function or at completion of Initialize when it indicates
         * status of drive O.  It is asserted if the unit currently selected exists, is properly supplied with power, has a diskette
         * installed correctly, has its door closed, and has a diskette up to speed.
         *
         * If the Error bit was set in the RXCS but Error bits are not set in the RXES, then specific error conditions can be accessed via
         * a Read Error Register function.
         */
        CRC:    0x0001,         // CRC error (RXES is moved to the RXDB, and Error and Done are asserted)
        PARITY: 0x0002,         // parity error (RXES is moved to the RXDB, and Error and Done are asserted)
        ID:     0x0004,         // Initialize Done (following a programmable or UNIBUS initialization, or a power failure)
        DEL:    0x0040,         // Deleted Data Detected
        DRDY:   0x0080          // Drive Ready
    },
    FUNC: {                     // NOTE: These function codes are pre-shifted to read/write directly from/to RXCS.FUNC
        FILL:   0b0000,         // Fill Buffer
        EMPTY:  0b0010,         // Empty Buffer
        WRITE:  0b0100,         // Write Sector
        READ:   0b0110,         // Read Sector
        UNUSED: 0b1000,         // UNUSED
        RDSTAT: 0b1010,         // Read Status
        WRDEL:  0b1100,         // Write Deleted Data Sector
        RDERR:  0b1110          // Read Error Register
    },
    ERROR: {
        HOME0:      0o0010,     // Drive 0 failed to see home on Initialize
        HOME1:      0o0020,     // Drive 1 failed to see home on Initialize
        BAD_HOME:   0o0030,     // Found home when stepping out 10 tracks for INIT
        NO_TRACK:   0o0040,     // Tried to access a track greater than 77
        FOUND_HOME: 0o0050,     // Home was found before desired track was reached
        SELF_DIAG:  0o0060,     // Self-diagnostic error
        NO_SECTOR:  0o0070,     // Desired sector could not be found after looking at 52 headers (2 revolutions)
        NO_SEP:     0o0110,     // More than 40us and no SEP clock seen
        NO_PREAM:   0o0120,     // A preamble could not be found
        NO_IOMARK:  0o0130,     // Preamble found but no I/O mark found within allowable time span
        CRC_HEADER: 0o0140,     // CRC error on what we thought was a header
        BAD_TRACK:  0o0150,     // The header track address of a good header does not compare with the desired track
        NO_ID:      0o0160,     // Too many tries for an IDAM (identifies header)
        NO_DATA:    0o0170,     // Data AM not found in allotted time
        CRC_DATA:   0o0200,     // CRC error on reading the sector from the disk (No code appears in the ERREG).
        BAD_PARITY: 0o0210      // All parity errors
    }
};

PDP11.VECTORS = {
    0o060:  "DL11R",
    0o064:  "DL11X",
    0o070:  "PC11R",
    0o074:  "PC11X",
    0o100:  "KW11",
    0o160:  "RL11",
    0o220:  "RK11",
    0o264:  "RX11"
};

PDP11.RX11.RX01 = [
    "DX",
    77,  1, 26, 128,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    1,   0,  0, 128,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    0                           // default drive status
];

PDP11.RK11.RK05 = [
    "RK",
    203, 2, 12, 512,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    0,   0,  0, 512,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    PDP11.RK11.RKDS.RK05 | PDP11.RK11.RKDS.SOK | PDP11.RK11.RKDS.RRDY
];

PDP11.RL11.RL02K = [
    "RL",
    512, 2, 40, 256,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    0,   0,  0, 256,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    PDP11.RL11.RLMP.GS_ST.LOCKON | PDP11.RL11.RLMP.GS_BH | PDP11.RL11.RLMP.GS_HO
];

PDP11.ACCESS.READ_WORD   = PDP11.ACCESS.WORD | PDP11.ACCESS.READ;       // formerly READ_MODE (2)
PDP11.ACCESS.READ_BYTE   = PDP11.ACCESS.BYTE | PDP11.ACCESS.READ;       // formerly READ_MODE (2) | BYTE_MODE (1)
PDP11.ACCESS.WRITE_WORD  = PDP11.ACCESS.WORD | PDP11.ACCESS.WRITE;      // formerly WRITE_MODE (4)
PDP11.ACCESS.WRITE_BYTE  = PDP11.ACCESS.BYTE | PDP11.ACCESS.WRITE;      // formerly WRITE_MODE (4) | BYTE_MODE (1)
PDP11.ACCESS.UPDATE_WORD = PDP11.ACCESS.WORD | PDP11.ACCESS.UPDATE;     // formerly MODIFY_WORD (2 | 4)
PDP11.ACCESS.UPDATE_BYTE = PDP11.ACCESS.BYTE | PDP11.ACCESS.UPDATE;     // formerly MODIFY_BYTE (1 | 2 | 4)

/**
 * PSW arithmetic flags are NOT stored directly into the PSW register; they are maintained across separate flag registers.
 */
PDP11.PSW.FLAGS         = (PDP11.PSW.NF | PDP11.PSW.ZF | PDP11.PSW.VF | PDP11.PSW.CF);

PDP11.IOPAGE_16BIT      = 0x00E000;     // 000160000                    // eg, PDP-11/20
PDP11.IOPAGE_18BIT      = 0x03E000;     // 000760000                    // eg, PDP-11/45
PDP11.IOPAGE_22BIT      = 0x3FE000;     // 017760000                    // eg, PDP-11/70
PDP11.IOPAGE_LENGTH     = 0x002000;                                     // ie, 8Kb
PDP11.IOPAGE_MASK       = PDP11.IOPAGE_LENGTH - 1;

PDP11.MASK_18BIT        = 0x03FFFF;     // 000777777

PDP11.UNIBUS_22BIT      = 0x3C0000;     // 017000000
PDP11.MASK_22BIT        = 0x3FFFFF;     // 017777777

PDP11.CLASSES["PDP11"] = PDP11;
