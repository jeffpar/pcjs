/**
 * @fileoverview Emulation of the 8080 CPU
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU      from "../../../modules/v3/cpu.js";
import Debugger from "../../../modules/v3/debugger.js";
import MESSAGE  from "../../../modules/v3/message.js";

/**
 * Emulation of the 8080 CPU
 *
 * @class CPUx80
 * @unrestricted
 * @property {Bus} busIO
 * @property {Bus} busMemory
 * @property {Input} input
 */
export default class CPUx80 extends CPU {
    /**
     * CPUx80(idMachine, idDevice, config)
     *
     * @this {CPUx80}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        /**
         * Initialize the CPU.
         */
        this.initCPU();

        /**
         * Get access to the Bus devices, so we have access to the I/O and memory address spaces.
         */
        this.busIO = /** @type {Bus} */ (this.findDevice(this.config['busIO']));
        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['busMemory']));

        /**
         * Get access to the Input device, so we can call setFocus() as needed.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
    }

    /**
     * execute(nCycles)
     *
     * Called from startClock() to execute a series of instructions.
     *
     * Executes the specified "burst" of instructions.  This code exists outside of the startClock() function
     * to ensure that its try/catch exception handler doesn't interfere with the optimization of this tight loop.
     *
     * @this {CPUx80}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
        /**
         * If checkINTR() returns false, INTFLAG.HALT must be set, so no instructions should be executed.
         */
        if (!this.checkINTR()) return;
        while (this.nCyclesRemain > 0) {
            this.regPCLast = this.regPC;
            this.aOps[this.getPCByte()].call(this);
        }
    }

    /**
     * initCPU()
     *
     * Initializes the CPU's state.
     *
     * @this {CPUx80}
     */
    initCPU()
    {
        this.resetRegs();

        this.defineRegister("A", () => this.regA, (value) => this.regA = value & 0xff);
        this.defineRegister("B", () => this.regB, (value) => this.regB = value & 0xff);
        this.defineRegister("C", () => this.regC, (value) => this.regC = value & 0xff);
        this.defineRegister("D", () => this.regD, (value) => this.regD = value & 0xff);
        this.defineRegister("E", () => this.regE, (value) => this.regE = value & 0xff);
        this.defineRegister("H", () => this.regH, (value) => this.regH = value & 0xff);
        this.defineRegister("L", () => this.regL, (value) => this.regL = value & 0xff);
        this.defineRegister("CF", () => (this.getCF()? 1 : 0), (value) => {value? this.setCF() : this.clearCF();});
        this.defineRegister("PF", () => (this.getPF()? 1 : 0), (value) => {value? this.setPF() : this.clearPF();});
        this.defineRegister("AF", () => (this.getAF()? 1 : 0), (value) => {value? this.setAF() : this.clearAF();});
        this.defineRegister("ZF", () => (this.getZF()? 1 : 0), (value) => {value? this.setZF() : this.clearZF();});
        this.defineRegister("SF", () => (this.getSF()? 1 : 0), (value) => {value? this.setSF() : this.clearSF();});
        this.defineRegister("IF", () => (this.getIF()? 1 : 0), (value) => {value? this.setIF() : this.clearIF();});
        this.defineRegister("BC", this.getBC, this.setBC);
        this.defineRegister("DE", this.getDE, this.setDE);
        this.defineRegister("HL", this.getHL, this.setHL);
        this.defineRegister(Debugger.REGISTER.PC, this.getPC, this.setPC);

        /**
         * This 256-entry array of opcode functions is at the heart of the CPU engine.
         *
         * It might be worth trying a switch() statement instead, to see how the performance compares,
         * but I suspect that would vary quite a bit across JavaScript engines; for now, I'm putting my
         * money on array lookup.
         */
        this.aOps = [
            /* 0x00-0x03 */ this.opNOP,   this.opLXIB,  this.opSTAXB, this.opINXB,
            /* 0x04-0x07 */ this.opINRB,  this.opDCRB,  this.opMVIB,  this.opRLC,
            /* 0x08-0x0B */ this.opNOP,   this.opDADB,  this.opLDAXB, this.opDCXB,
            /* 0x0C-0x0F */ this.opINRC,  this.opDCRC,  this.opMVIC,  this.opRRC,
            /* 0x10-0x13 */ this.opNOP,   this.opLXID,  this.opSTAXD, this.opINXD,
            /* 0x14-0x17 */ this.opINRD,  this.opDCRD,  this.opMVID,  this.opRAL,
            /* 0x18-0x1B */ this.opNOP,   this.opDADD,  this.opLDAXD, this.opDCXD,
            /* 0x1C-0x1F */ this.opINRE,  this.opDCRE,  this.opMVIE,  this.opRAR,
            /* 0x20-0x23 */ this.opNOP,   this.opLXIH,  this.opSHLD,  this.opINXH,
            /* 0x24-0x27 */ this.opINRH,  this.opDCRH,  this.opMVIH,  this.opDAA,
            /* 0x28-0x2B */ this.opNOP,   this.opDADH,  this.opLHLD,  this.opDCXH,
            /* 0x2C-0x2F */ this.opINRL,  this.opDCRL,  this.opMVIL,  this.opCMA,
            /* 0x30-0x33 */ this.opNOP,   this.opLXISP, this.opSTA,   this.opINXSP,
            /* 0x34-0x37 */ this.opINRM,  this.opDCRM,  this.opMVIM,  this.opSTC,
            /* 0x38-0x3B */ this.opNOP,   this.opDADSP, this.opLDA,   this.opDCXSP,
            /* 0x3C-0x3F */ this.opINRA,  this.opDCRA,  this.opMVIA,  this.opCMC,
            /* 0x40-0x43 */ this.opMOVBB, this.opMOVBC, this.opMOVBD, this.opMOVBE,
            /* 0x44-0x47 */ this.opMOVBH, this.opMOVBL, this.opMOVBM, this.opMOVBA,
            /* 0x48-0x4B */ this.opMOVCB, this.opMOVCC, this.opMOVCD, this.opMOVCE,
            /* 0x4C-0x4F */ this.opMOVCH, this.opMOVCL, this.opMOVCM, this.opMOVCA,
            /* 0x50-0x53 */ this.opMOVDB, this.opMOVDC, this.opMOVDD, this.opMOVDE,
            /* 0x54-0x57 */ this.opMOVDH, this.opMOVDL, this.opMOVDM, this.opMOVDA,
            /* 0x58-0x5B */ this.opMOVEB, this.opMOVEC, this.opMOVED, this.opMOVEE,
            /* 0x5C-0x5F */ this.opMOVEH, this.opMOVEL, this.opMOVEM, this.opMOVEA,
            /* 0x60-0x63 */ this.opMOVHB, this.opMOVHC, this.opMOVHD, this.opMOVHE,
            /* 0x64-0x67 */ this.opMOVHH, this.opMOVHL, this.opMOVHM, this.opMOVHA,
            /* 0x68-0x6B */ this.opMOVLB, this.opMOVLC, this.opMOVLD, this.opMOVLE,
            /* 0x6C-0x6F */ this.opMOVLH, this.opMOVLL, this.opMOVLM, this.opMOVLA,
            /* 0x70-0x73 */ this.opMOVMB, this.opMOVMC, this.opMOVMD, this.opMOVME,
            /* 0x74-0x77 */ this.opMOVMH, this.opMOVML, this.opHLT,   this.opMOVMA,
            /* 0x78-0x7B */ this.opMOVAB, this.opMOVAC, this.opMOVAD, this.opMOVAE,
            /* 0x7C-0x7F */ this.opMOVAH, this.opMOVAL, this.opMOVAM, this.opMOVAA,
            /* 0x80-0x83 */ this.opADDB,  this.opADDC,  this.opADDD,  this.opADDE,
            /* 0x84-0x87 */ this.opADDH,  this.opADDL,  this.opADDM,  this.opADDA,
            /* 0x88-0x8B */ this.opADCB,  this.opADCC,  this.opADCD,  this.opADCE,
            /* 0x8C-0x8F */ this.opADCH,  this.opADCL,  this.opADCM,  this.opADCA,
            /* 0x90-0x93 */ this.opSUBB,  this.opSUBC,  this.opSUBD,  this.opSUBE,
            /* 0x94-0x97 */ this.opSUBH,  this.opSUBL,  this.opSUBM,  this.opSUBA,
            /* 0x98-0x9B */ this.opSBBB,  this.opSBBC,  this.opSBBD,  this.opSBBE,
            /* 0x9C-0x9F */ this.opSBBH,  this.opSBBL,  this.opSBBM,  this.opSBBA,
            /* 0xA0-0xA3 */ this.opANAB,  this.opANAC,  this.opANAD,  this.opANAE,
            /* 0xA4-0xA7 */ this.opANAH,  this.opANAL,  this.opANAM,  this.opANAA,
            /* 0xA8-0xAB */ this.opXRAB,  this.opXRAC,  this.opXRAD,  this.opXRAE,
            /* 0xAC-0xAF */ this.opXRAH,  this.opXRAL,  this.opXRAM,  this.opXRAA,
            /* 0xB0-0xB3 */ this.opORAB,  this.opORAC,  this.opORAD,  this.opORAE,
            /* 0xB4-0xB7 */ this.opORAH,  this.opORAL,  this.opORAM,  this.opORAA,
            /* 0xB8-0xBB */ this.opCMPB,  this.opCMPC,  this.opCMPD,  this.opCMPE,
            /* 0xBC-0xBF */ this.opCMPH,  this.opCMPL,  this.opCMPM,  this.opCMPA,
            /* 0xC0-0xC3 */ this.opRNZ,   this.opPOPB,  this.opJNZ,   this.opJMP,
            /* 0xC4-0xC7 */ this.opCNZ,   this.opPUSHB, this.opADI,   this.opRST0,
            /* 0xC8-0xCB */ this.opRZ,    this.opRET,   this.opJZ,    this.opJMP,
            /* 0xCC-0xCF */ this.opCZ,    this.opCALL,  this.opACI,   this.opRST1,
            /* 0xD0-0xD3 */ this.opRNC,   this.opPOPD,  this.opJNC,   this.opOUT,
            /* 0xD4-0xD7 */ this.opCNC,   this.opPUSHD, this.opSUI,   this.opRST2,
            /* 0xD8-0xDB */ this.opRC,    this.opRET,   this.opJC,    this.opIN,
            /* 0xDC-0xDF */ this.opCC,    this.opCALL,  this.opSBI,   this.opRST3,
            /* 0xE0-0xE3 */ this.opRPO,   this.opPOPH,  this.opJPO,   this.opXTHL,
            /* 0xE4-0xE7 */ this.opCPO,   this.opPUSHH, this.opANI,   this.opRST4,
            /* 0xE8-0xEB */ this.opRPE,   this.opPCHL,  this.opJPE,   this.opXCHG,
            /* 0xEC-0xEF */ this.opCPE,   this.opCALL,  this.opXRI,   this.opRST5,
            /* 0xF0-0xF3 */ this.opRP,    this.opPOPSW, this.opJP,    this.opDI,
            /* 0xF4-0xF7 */ this.opCP,    this.opPUPSW, this.opORI,   this.opRST6,
            /* 0xF8-0xFB */ this.opRM,    this.opSPHL,  this.opJM,    this.opEI,
            /* 0xFC-0xFF */ this.opCM,    this.opCALL,  this.opCPI,   this.opRST7
        ];
    }

    /**
     * loadState(stateCPU)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {CPUx80}
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
        if (idDevice != this.idDevice || (version|0) !== (+CPUx80.VERSION|0)) {
            this.printf("CPU state mismatch (%s %3.2f)\n", idDevice, version);
            return false;
        }
        try {
            this.regA = stateCPU.shift();
            this.regB = stateCPU.shift();
            this.regC = stateCPU.shift();
            this.regD = stateCPU.shift();
            this.regE = stateCPU.shift();
            this.regH = stateCPU.shift();
            this.regL = stateCPU.shift();
            this.setPC(stateCPU.shift());
            this.setSP(stateCPU.shift());
            this.setPS(stateCPU.shift());
            this.intFlags = stateCPU.shift();
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * saveState(stateCPU)
     *
     * @this {CPUx80}
     * @param {Array} stateCPU
     */
    saveState(stateCPU)
    {
        stateCPU.push(this.idDevice);
        stateCPU.push(+CPUx80.VERSION);
        stateCPU.push(this.regA);
        stateCPU.push(this.regB);
        stateCPU.push(this.regC);
        stateCPU.push(this.regD);
        stateCPU.push(this.regE);
        stateCPU.push(this.regH);
        stateCPU.push(this.regL);
        stateCPU.push(this.getPC());
        stateCPU.push(this.getSP());
        stateCPU.push(this.getPS());
        stateCPU.push(this.intFlags);
    }


    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {CPUx80}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state) {
            let stateCPU = state[0];
            if (this.loadState(stateCPU)) {
                state.shift();
                return true;
            }
        }
        return false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {CPUx80}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.time.start();
            if (this.input) this.input.setFocus();
        } else {
            this.time.stop();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {CPUx80}
     */
    onReset()
    {
        this.printf("reset\n");
        this.resetRegs();
        if (!this.time.isRunning()) this.print(this.toString());
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {CPUx80}
     * @param {Array} state
     */
    onSave(state)
    {
        let stateCPU = [];
        this.saveState(stateCPU);
        state.push(stateCPU);
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
     * @this {CPUx80}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        // TODO: Decide what bindings we want to support, and update them as appropriate.
    }

    /**
     * op=0x00 (NOP)
     *
     * @this {CPUx80}
     */
    opNOP()
    {
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x01 (LXI B,d16)
     *
     * @this {CPUx80}
     */
    opLXIB()
    {
        this.setBC(this.getPCWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x02 (STAX B)
     *
     * @this {CPUx80}
     */
    opSTAXB()
    {
        this.setByte(this.getBC(), this.regA);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x03 (INX B)
     *
     * @this {CPUx80}
     */
    opINXB()
    {
        this.setBC(this.getBC() + 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x04 (INR B)
     *
     * @this {CPUx80}
     */
    opINRB()
    {
        this.regB = this.incByte(this.regB);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x05 (DCR B)
     *
     * @this {CPUx80}
     */
    opDCRB()
    {
        this.regB = this.decByte(this.regB);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x06 (MVI B,d8)
     *
     * @this {CPUx80}
     */
    opMVIB()
    {
        this.regB = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x07 (RLC)
     *
     * @this {CPUx80}
     */
    opRLC()
    {
        let carry = this.regA << 1;
        this.regA = (carry & 0xff) | (carry >> 8);
        this.updateCF(carry & 0x100);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x09 (DAD B)
     *
     * @this {CPUx80}
     */
    opDADB()
    {
        let w;
        this.setHL(w = this.getHL() + this.getBC());
        this.updateCF((w >> 8) & 0x100);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x0A (LDAX B)
     *
     * @this {CPUx80}
     */
    opLDAXB()
    {
        this.regA = this.getByte(this.getBC());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x0B (DCX B)
     *
     * @this {CPUx80}
     */
    opDCXB()
    {
        this.setBC(this.getBC() - 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x0C (INR C)
     *
     * @this {CPUx80}
     */
    opINRC()
    {
        this.regC = this.incByte(this.regC);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x0D (DCR C)
     *
     * @this {CPUx80}
     */
    opDCRC()
    {
        this.regC = this.decByte(this.regC);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x0E (MVI C,d8)
     *
     * @this {CPUx80}
     */
    opMVIC()
    {
        this.regC = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x0F (RRC)
     *
     * @this {CPUx80}
     */
    opRRC()
    {
        let carry = (this.regA << 8) & 0x100;
        this.regA = (carry | this.regA) >> 1;
        this.updateCF(carry);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x11 (LXI D,d16)
     *
     * @this {CPUx80}
     */
    opLXID()
    {
        this.setDE(this.getPCWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x12 (STAX D)
     *
     * @this {CPUx80}
     */
    opSTAXD()
    {
        this.setByte(this.getDE(), this.regA);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x13 (INX D)
     *
     * @this {CPUx80}
     */
    opINXD()
    {
        this.setDE(this.getDE() + 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x14 (INR D)
     *
     * @this {CPUx80}
     */
    opINRD()
    {
        this.regD = this.incByte(this.regD);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x15 (DCR D)
     *
     * @this {CPUx80}
     */
    opDCRD()
    {
        this.regD = this.decByte(this.regD);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x16 (MVI D,d8)
     *
     * @this {CPUx80}
     */
    opMVID()
    {
        this.regD = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x17 (RAL)
     *
     * @this {CPUx80}
     */
    opRAL()
    {
        let carry = this.regA << 1;
        this.regA = (carry & 0xff) | this.getCF();
        this.updateCF(carry & 0x100);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x19 (DAD D)
     *
     * @this {CPUx80}
     */
    opDADD()
    {
        let w;
        this.setHL(w = this.getHL() + this.getDE());
        this.updateCF((w >> 8) & 0x100);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x1A (LDAX D)
     *
     * @this {CPUx80}
     */
    opLDAXD()
    {
        this.regA = this.getByte(this.getDE());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x1B (DCX D)
     *
     * @this {CPUx80}
     */
    opDCXD()
    {
        this.setDE(this.getDE() - 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x1C (INR E)
     *
     * @this {CPUx80}
     */
    opINRE()
    {
        this.regE = this.incByte(this.regE);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x1D (DCR E)
     *
     * @this {CPUx80}
     */
    opDCRE()
    {
        this.regE = this.decByte(this.regE);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x1E (MVI E,d8)
     *
     * @this {CPUx80}
     */
    opMVIE()
    {
        this.regE = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x1F (RAR)
     *
     * @this {CPUx80}
     */
    opRAR()
    {
        let carry = (this.regA << 8);
        this.regA = ((this.getCF() << 8) | this.regA) >> 1;
        this.updateCF(carry & 0x100);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x21 (LXI H,d16)
     *
     * @this {CPUx80}
     */
    opLXIH()
    {
        this.setHL(this.getPCWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x22 (SHLD a16)
     *
     * @this {CPUx80}
     */
    opSHLD()
    {
        this.setWord(this.getPCWord(), this.getHL());
        this.nCyclesRemain -= 16;
    }

    /**
     * op=0x23 (INX H)
     *
     * @this {CPUx80}
     */
    opINXH()
    {
        this.setHL(this.getHL() + 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x24 (INR H)
     *
     * @this {CPUx80}
     */
    opINRH()
    {
        this.regH = this.incByte(this.regH);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x25 (DCR H)
     *
     * @this {CPUx80}
     */
    opDCRH()
    {
        this.regH = this.decByte(this.regH);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x26 (MVI H,d8)
     *
     * @this {CPUx80}
     */
    opMVIH()
    {
        this.regH = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x27 (DAA)
     *
     * @this {CPUx80}
     */
    opDAA()
    {
        let src = 0;
        let CF = this.getCF();
        let AF = this.getAF();
        if (AF || (this.regA & 0x0F) > 9) {
            src |= 0x06;
        }
        if (CF || this.regA >= 0x9A) {
            src |= 0x60;
            CF = CPUx80.PS.CF;
        }
        this.regA = this.addByte(src);
        this.updateCF(CF? 0x100 : 0);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x29 (DAD H)
     *
     * @this {CPUx80}
     */
    opDADH()
    {
        let w;
        this.setHL(w = this.getHL() + this.getHL());
        this.updateCF((w >> 8) & 0x100);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x2A (LHLD a16)
     *
     * @this {CPUx80}
     */
    opLHLD()
    {
        this.setHL(this.getWord(this.getPCWord()));
        this.nCyclesRemain -= 16;
    }

    /**
     * op=0x2B (DCX H)
     *
     * @this {CPUx80}
     */
    opDCXH()
    {
        this.setHL(this.getHL() - 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x2C (INR L)
     *
     * @this {CPUx80}
     */
    opINRL()
    {
        this.regL = this.incByte(this.regL);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x2D (DCR L)
     *
     * @this {CPUx80}
     */
    opDCRL()
    {
        this.regL = this.decByte(this.regL);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x2E (MVI L,d8)
     *
     * @this {CPUx80}
     */
    opMVIL()
    {
        this.regL = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x2F (CMA)
     *
     * @this {CPUx80}
     */
    opCMA()
    {
        this.regA = ~this.regA & 0xff;
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x31 (LXI SP,d16)
     *
     * @this {CPUx80}
     */
    opLXISP()
    {
        this.setSP(this.getPCWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x32 (STA a16)
     *
     * @this {CPUx80}
     */
    opSTA()
    {
        this.setByte(this.getPCWord(), this.regA);
        this.nCyclesRemain -= 13;
    }

    /**
     * op=0x33 (INX SP)
     *
     * @this {CPUx80}
     */
    opINXSP()
    {
        this.setSP(this.getSP() + 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x34 (INR M)
     *
     * @this {CPUx80}
     */
    opINRM()
    {
        let addr = this.getHL();
        this.setByte(addr, this.incByte(this.getByte(addr)));
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x35 (DCR M)
     *
     * @this {CPUx80}
     */
    opDCRM()
    {
        let addr = this.getHL();
        this.setByte(addr, this.decByte(this.getByte(addr)));
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x36 (MVI M,d8)
     *
     * @this {CPUx80}
     */
    opMVIM()
    {
        this.setByte(this.getHL(), this.getPCByte());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x37 (STC)
     *
     * @this {CPUx80}
     */
    opSTC()
    {
        this.setCF();
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x39 (DAD SP)
     *
     * @this {CPUx80}
     */
    opDADSP()
    {
        let w;
        this.setHL(w = this.getHL() + this.getSP());
        this.updateCF((w >> 8) & 0x100);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0x3A (LDA a16)
     *
     * @this {CPUx80}
     */
    opLDA()
    {
        this.regA = this.getByte(this.getPCWord());
        this.nCyclesRemain -= 13;
    }

    /**
     * op=0x3B (DCX SP)
     *
     * @this {CPUx80}
     */
    opDCXSP()
    {
        this.setSP(this.getSP() - 1);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x3C (INR A)
     *
     * @this {CPUx80}
     */
    opINRA()
    {
        this.regA = this.incByte(this.regA);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x3D (DCR A)
     *
     * @this {CPUx80}
     */
    opDCRA()
    {
        this.regA = this.decByte(this.regA);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x3E (MVI A,d8)
     *
     * @this {CPUx80}
     */
    opMVIA()
    {
        this.regA = this.getPCByte();
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x3F (CMC)
     *
     * @this {CPUx80}
     */
    opCMC()
    {
        this.updateCF(this.getCF()? 0 : 0x100);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x40 (MOV B,B)
     *
     * @this {CPUx80}
     */
    opMOVBB()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x41 (MOV B,C)
     *
     * @this {CPUx80}
     */
    opMOVBC()
    {
        this.regB = this.regC;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x42 (MOV B,D)
     *
     * @this {CPUx80}
     */
    opMOVBD()
    {
        this.regB = this.regD;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x43 (MOV B,E)
     *
     * @this {CPUx80}
     */
    opMOVBE()
    {
        this.regB = this.regE;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x44 (MOV B,H)
     *
     * @this {CPUx80}
     */
    opMOVBH()
    {
        this.regB = this.regH;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x45 (MOV B,L)
     *
     * @this {CPUx80}
     */
    opMOVBL()
    {
        this.regB = this.regL;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x46 (MOV B,M)
     *
     * @this {CPUx80}
     */
    opMOVBM()
    {
        this.regB = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x47 (MOV B,A)
     *
     * @this {CPUx80}
     */
    opMOVBA()
    {
        this.regB = this.regA;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x48 (MOV C,B)
     *
     * @this {CPUx80}
     */
    opMOVCB()
    {
        this.regC = this.regB;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x49 (MOV C,C)
     *
     * @this {CPUx80}
     */
    opMOVCC()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x4A (MOV C,D)
     *
     * @this {CPUx80}
     */
    opMOVCD()
    {
        this.regC = this.regD;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x4B (MOV C,E)
     *
     * @this {CPUx80}
     */
    opMOVCE()
    {
        this.regC = this.regE;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x4C (MOV C,H)
     *
     * @this {CPUx80}
     */
    opMOVCH()
    {
        this.regC = this.regH;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x4D (MOV C,L)
     *
     * @this {CPUx80}
     */
    opMOVCL()
    {
        this.regC = this.regL;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x4E (MOV C,M)
     *
     * @this {CPUx80}
     */
    opMOVCM()
    {
        this.regC = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x4F (MOV C,A)
     *
     * @this {CPUx80}
     */
    opMOVCA()
    {
        this.regC = this.regA;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x50 (MOV D,B)
     *
     * @this {CPUx80}
     */
    opMOVDB()
    {
        this.regD = this.regB;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x51 (MOV D,C)
     *
     * @this {CPUx80}
     */
    opMOVDC()
    {
        this.regD = this.regC;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x52 (MOV D,D)
     *
     * @this {CPUx80}
     */
    opMOVDD()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x53 (MOV D,E)
     *
     * @this {CPUx80}
     */
    opMOVDE()
    {
        this.regD = this.regE;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x54 (MOV D,H)
     *
     * @this {CPUx80}
     */
    opMOVDH()
    {
        this.regD = this.regH;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x55 (MOV D,L)
     *
     * @this {CPUx80}
     */
    opMOVDL()
    {
        this.regD = this.regL;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x56 (MOV D,M)
     *
     * @this {CPUx80}
     */
    opMOVDM()
    {
        this.regD = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x57 (MOV D,A)
     *
     * @this {CPUx80}
     */
    opMOVDA()
    {
        this.regD = this.regA;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x58 (MOV E,B)
     *
     * @this {CPUx80}
     */
    opMOVEB()
    {
        this.regE = this.regB;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x59 (MOV E,C)
     *
     * @this {CPUx80}
     */
    opMOVEC()
    {
        this.regE = this.regC;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x5A (MOV E,D)
     *
     * @this {CPUx80}
     */
    opMOVED()
    {
        this.regE = this.regD;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x5B (MOV E,E)
     *
     * @this {CPUx80}
     */
    opMOVEE()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x5C (MOV E,H)
     *
     * @this {CPUx80}
     */
    opMOVEH()
    {
        this.regE = this.regH;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x5D (MOV E,L)
     *
     * @this {CPUx80}
     */
    opMOVEL()
    {
        this.regE = this.regL;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x5E (MOV E,M)
     *
     * @this {CPUx80}
     */
    opMOVEM()
    {
        this.regE = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x5F (MOV E,A)
     *
     * @this {CPUx80}
     */
    opMOVEA()
    {
        this.regE = this.regA;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x60 (MOV H,B)
     *
     * @this {CPUx80}
     */
    opMOVHB()
    {
        this.regH = this.regB;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x61 (MOV H,C)
     *
     * @this {CPUx80}
     */
    opMOVHC()
    {
        this.regH = this.regC;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x62 (MOV H,D)
     *
     * @this {CPUx80}
     */
    opMOVHD()
    {
        this.regH = this.regD;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x63 (MOV H,E)
     *
     * @this {CPUx80}
     */
    opMOVHE()
    {
        this.regH = this.regE;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x64 (MOV H,H)
     *
     * @this {CPUx80}
     */
    opMOVHH()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x65 (MOV H,L)
     *
     * @this {CPUx80}
     */
    opMOVHL()
    {
        this.regH = this.regL;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x66 (MOV H,M)
     *
     * @this {CPUx80}
     */
    opMOVHM()
    {
        this.regH = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x67 (MOV H,A)
     *
     * @this {CPUx80}
     */
    opMOVHA()
    {
        this.regH = this.regA;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x68 (MOV L,B)
     *
     * @this {CPUx80}
     */
    opMOVLB()
    {
        this.regL = this.regB;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x69 (MOV L,C)
     *
     * @this {CPUx80}
     */
    opMOVLC()
    {
        this.regL = this.regC;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x6A (MOV L,D)
     *
     * @this {CPUx80}
     */
    opMOVLD()
    {
        this.regL = this.regD;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x6B (MOV L,E)
     *
     * @this {CPUx80}
     */
    opMOVLE()
    {
        this.regL = this.regE;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x6C (MOV L,H)
     *
     * @this {CPUx80}
     */
    opMOVLH()
    {
        this.regL = this.regH;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x6D (MOV L,L)
     *
     * @this {CPUx80}
     */
    opMOVLL()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x6E (MOV L,M)
     *
     * @this {CPUx80}
     */
    opMOVLM()
    {
        this.regL = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x6F (MOV L,A)
     *
     * @this {CPUx80}
     */
    opMOVLA()
    {
        this.regL = this.regA;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x70 (MOV M,B)
     *
     * @this {CPUx80}
     */
    opMOVMB()
    {
        this.setByte(this.getHL(), this.regB);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x71 (MOV M,C)
     *
     * @this {CPUx80}
     */
    opMOVMC()
    {
        this.setByte(this.getHL(), this.regC);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x72 (MOV M,D)
     *
     * @this {CPUx80}
     */
    opMOVMD()
    {
        this.setByte(this.getHL(), this.regD);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x73 (MOV M,E)
     *
     * @this {CPUx80}
     */
    opMOVME()
    {
        this.setByte(this.getHL(), this.regE);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x74 (MOV M,H)
     *
     * @this {CPUx80}
     */
    opMOVMH()
    {
        this.setByte(this.getHL(), this.regH);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x75 (MOV M,L)
     *
     * @this {CPUx80}
     */
    opMOVML()
    {
        this.setByte(this.getHL(), this.regL);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x76 (HLT)
     *
     * @this {CPUx80}
     */
    opHLT()
    {
        this.nCyclesRemain -= 7;
        /**
         * The CPU is never REALLY halted by a HLT instruction; instead, we call requestHALT(), which
         * which sets INTFLAG.HALT and then ends the current burst; the CPU should not execute any
         * more instructions until checkINTR() indicates that a hardware interrupt has been requested.
         */
        this.requestHALT();
        /**
         * If interrupts have been disabled, then the machine is dead in the water (there is no NMI
         * NMI generation mechanism for this CPU), so let's stop the CPU; similarly, if the HALT message
         * category is enabled, then the Debugger must want us to stop the CPU.
         */
        if (!this.getIF() || this.isMessageOn(MESSAGE.HALT)) {
            let addr = this.getPC() - 1;
            this.setPC(addr);           // this is purely for the Debugger's benefit, to show the HLT
            this.time.stop();
        }
    }

    /**
     * op=0x77 (MOV M,A)
     *
     * @this {CPUx80}
     */
    opMOVMA()
    {
        this.setByte(this.getHL(), this.regA);
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x78 (MOV A,B)
     *
     * @this {CPUx80}
     */
    opMOVAB()
    {
        this.regA = this.regB;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x79 (MOV A,C)
     *
     * @this {CPUx80}
     */
    opMOVAC()
    {
        this.regA = this.regC;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x7A (MOV A,D)
     *
     * @this {CPUx80}
     */
    opMOVAD()
    {
        this.regA = this.regD;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x7B (MOV A,E)
     *
     * @this {CPUx80}
     */
    opMOVAE()
    {
        this.regA = this.regE;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x7C (MOV A,H)
     *
     * @this {CPUx80}
     */
    opMOVAH()
    {
        this.regA = this.regH;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x7D (MOV A,L)
     *
     * @this {CPUx80}
     */
    opMOVAL()
    {
        this.regA = this.regL;
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x7E (MOV A,M)
     *
     * @this {CPUx80}
     */
    opMOVAM()
    {
        this.regA = this.getByte(this.getHL());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x7F (MOV A,A)
     *
     * @this {CPUx80}
     */
    opMOVAA()
    {
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0x80 (ADD B)
     *
     * @this {CPUx80}
     */
    opADDB()
    {
        this.regA = this.addByte(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x81 (ADD C)
     *
     * @this {CPUx80}
     */
    opADDC()
    {
        this.regA = this.addByte(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x82 (ADD D)
     *
     * @this {CPUx80}
     */
    opADDD()
    {
        this.regA = this.addByte(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x83 (ADD E)
     *
     * @this {CPUx80}
     */
    opADDE()
    {
        this.regA = this.addByte(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x84 (ADD H)
     *
     * @this {CPUx80}
     */
    opADDH()
    {
        this.regA = this.addByte(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x85 (ADD L)
     *
     * @this {CPUx80}
     */
    opADDL()
    {
        this.regA = this.addByte(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x86 (ADD M)
     *
     * @this {CPUx80}
     */
    opADDM()
    {
        this.regA = this.addByte(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x87 (ADD A)
     *
     * @this {CPUx80}
     */
    opADDA()
    {
        this.regA = this.addByte(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x88 (ADC B)
     *
     * @this {CPUx80}
     */
    opADCB()
    {
        this.regA = this.addByteCarry(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x89 (ADC C)
     *
     * @this {CPUx80}
     */
    opADCC()
    {
        this.regA = this.addByteCarry(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x8A (ADC D)
     *
     * @this {CPUx80}
     */
    opADCD()
    {
        this.regA = this.addByteCarry(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x8B (ADC E)
     *
     * @this {CPUx80}
     */
    opADCE()
    {
        this.regA = this.addByteCarry(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x8C (ADC H)
     *
     * @this {CPUx80}
     */
    opADCH()
    {
        this.regA = this.addByteCarry(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x8D (ADC L)
     *
     * @this {CPUx80}
     */
    opADCL()
    {
        this.regA = this.addByteCarry(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x8E (ADC M)
     *
     * @this {CPUx80}
     */
    opADCM()
    {
        this.regA = this.addByteCarry(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x8F (ADC A)
     *
     * @this {CPUx80}
     */
    opADCA()
    {
        this.regA = this.addByteCarry(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x90 (SUB B)
     *
     * @this {CPUx80}
     */
    opSUBB()
    {
        this.regA = this.subByte(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x91 (SUB C)
     *
     * @this {CPUx80}
     */
    opSUBC()
    {
        this.regA = this.subByte(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x92 (SUB D)
     *
     * @this {CPUx80}
     */
    opSUBD()
    {
        this.regA = this.subByte(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x93 (SUB E)
     *
     * @this {CPUx80}
     */
    opSUBE()
    {
        this.regA = this.subByte(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x94 (SUB H)
     *
     * @this {CPUx80}
     */
    opSUBH()
    {
        this.regA = this.subByte(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x95 (SUB L)
     *
     * @this {CPUx80}
     */
    opSUBL()
    {
        this.regA = this.subByte(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x96 (SUB M)
     *
     * @this {CPUx80}
     */
    opSUBM()
    {
        this.regA = this.subByte(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x97 (SUB A)
     *
     * @this {CPUx80}
     */
    opSUBA()
    {
        this.regA = this.subByte(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x98 (SBB B)
     *
     * @this {CPUx80}
     */
    opSBBB()
    {
        this.regA = this.subByteBorrow(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x99 (SBB C)
     *
     * @this {CPUx80}
     */
    opSBBC()
    {
        this.regA = this.subByteBorrow(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x9A (SBB D)
     *
     * @this {CPUx80}
     */
    opSBBD()
    {
        this.regA = this.subByteBorrow(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x9B (SBB E)
     *
     * @this {CPUx80}
     */
    opSBBE()
    {
        this.regA = this.subByteBorrow(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x9C (SBB H)
     *
     * @this {CPUx80}
     */
    opSBBH()
    {
        this.regA = this.subByteBorrow(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x9D (SBB L)
     *
     * @this {CPUx80}
     */
    opSBBL()
    {
        this.regA = this.subByteBorrow(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0x9E (SBB M)
     *
     * @this {CPUx80}
     */
    opSBBM()
    {
        this.regA = this.subByteBorrow(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0x9F (SBB A)
     *
     * @this {CPUx80}
     */
    opSBBA()
    {
        this.regA = this.subByteBorrow(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA0 (ANA B)
     *
     * @this {CPUx80}
     */
    opANAB()
    {
        this.regA = this.andByte(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA1 (ANA C)
     *
     * @this {CPUx80}
     */
    opANAC()
    {
        this.regA = this.andByte(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA2 (ANA D)
     *
     * @this {CPUx80}
     */
    opANAD()
    {
        this.regA = this.andByte(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA3 (ANA E)
     *
     * @this {CPUx80}
     */
    opANAE()
    {
        this.regA = this.andByte(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA4 (ANA H)
     *
     * @this {CPUx80}
     */
    opANAH()
    {
        this.regA = this.andByte(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA5 (ANA L)
     *
     * @this {CPUx80}
     */
    opANAL()
    {
        this.regA = this.andByte(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA6 (ANA M)
     *
     * @this {CPUx80}
     */
    opANAM()
    {
        this.regA = this.andByte(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xA7 (ANA A)
     *
     * @this {CPUx80}
     */
    opANAA()
    {
        this.regA = this.andByte(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA8 (XRA B)
     *
     * @this {CPUx80}
     */
    opXRAB()
    {
        this.regA = this.xorByte(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xA9 (XRA C)
     *
     * @this {CPUx80}
     */
    opXRAC()
    {
        this.regA = this.xorByte(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xAA (XRA D)
     *
     * @this {CPUx80}
     */
    opXRAD()
    {
        this.regA = this.xorByte(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xAB (XRA E)
     *
     * @this {CPUx80}
     */
    opXRAE()
    {
        this.regA = this.xorByte(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xAC (XRA H)
     *
     * @this {CPUx80}
     */
    opXRAH()
    {
        this.regA = this.xorByte(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xAD (XRA L)
     *
     * @this {CPUx80}
     */
    opXRAL()
    {
        this.regA = this.xorByte(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xAE (XRA M)
     *
     * @this {CPUx80}
     */
    opXRAM()
    {
        this.regA = this.xorByte(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xAF (XRA A)
     *
     * @this {CPUx80}
     */
    opXRAA()
    {
        this.regA = this.xorByte(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB0 (ORA B)
     *
     * @this {CPUx80}
     */
    opORAB()
    {
        this.regA = this.orByte(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB1 (ORA C)
     *
     * @this {CPUx80}
     */
    opORAC()
    {
        this.regA = this.orByte(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB2 (ORA D)
     *
     * @this {CPUx80}
     */
    opORAD()
    {
        this.regA = this.orByte(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB3 (ORA E)
     *
     * @this {CPUx80}
     */
    opORAE()
    {
        this.regA = this.orByte(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB4 (ORA H)
     *
     * @this {CPUx80}
     */
    opORAH()
    {
        this.regA = this.orByte(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB5 (ORA L)
     *
     * @this {CPUx80}
     */
    opORAL()
    {
        this.regA = this.orByte(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB6 (ORA M)
     *
     * @this {CPUx80}
     */
    opORAM()
    {
        this.regA = this.orByte(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xB7 (ORA A)
     *
     * @this {CPUx80}
     */
    opORAA()
    {
        this.regA = this.orByte(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB8 (CMP B)
     *
     * @this {CPUx80}
     */
    opCMPB()
    {
        this.subByte(this.regB);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xB9 (CMP C)
     *
     * @this {CPUx80}
     */
    opCMPC()
    {
        this.subByte(this.regC);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xBA (CMP D)
     *
     * @this {CPUx80}
     */
    opCMPD()
    {
        this.subByte(this.regD);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xBB (CMP E)
     *
     * @this {CPUx80}
     */
    opCMPE()
    {
        this.subByte(this.regE);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xBC (CMP H)
     *
     * @this {CPUx80}
     */
    opCMPH()
    {
        this.subByte(this.regH);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xBD (CMP L)
     *
     * @this {CPUx80}
     */
    opCMPL()
    {
        this.subByte(this.regL);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xBE (CMP M)
     *
     * @this {CPUx80}
     */
    opCMPM()
    {
        this.subByte(this.getByte(this.getHL()));
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xBF (CMP A)
     *
     * @this {CPUx80}
     */
    opCMPA()
    {
        this.subByte(this.regA);
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xC0 (RNZ)
     *
     * @this {CPUx80}
     */
    opRNZ()
    {
        if (!this.getZF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xC1 (POP B)
     *
     * @this {CPUx80}
     */
    opPOPB()
    {
        this.setBC(this.popWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xC2 (JNZ a16)
     *
     * @this {CPUx80}
     */
    opJNZ()
    {
        let w = this.getPCWord();
        if (!this.getZF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xC3 (JMP a16)
     *
     * @this {CPUx80}
     */
    opJMP()
    {
        this.setPC(this.getPCWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xC4 (CNZ a16)
     *
     * @this {CPUx80}
     */
    opCNZ()
    {
        let w = this.getPCWord();
        if (!this.getZF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xC5 (PUSH B)
     *
     * @this {CPUx80}
     */
    opPUSHB()
    {
        this.pushWord(this.getBC());
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xC6 (ADI d8)
     *
     * @this {CPUx80}
     */
    opADI()
    {
        this.regA = this.addByte(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xC7 (RST 0)
     *
     * @this {CPUx80}
     */
    opRST0()
    {
        this.pushWord(this.getPC());
        this.setPC(0);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xC8 (RZ)
     *
     * @this {CPUx80}
     */
    opRZ()
    {
        if (this.getZF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xC9 (RET)
     *
     * @this {CPUx80}
     */
    opRET()
    {
        this.setPC(this.popWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xCA (JZ a16)
     *
     * @this {CPUx80}
     */
    opJZ()
    {
        let w = this.getPCWord();
        if (this.getZF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xCC (CZ a16)
     *
     * @this {CPUx80}
     */
    opCZ()
    {
        let w = this.getPCWord();
        if (this.getZF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xCD (CALL a16)
     *
     * @this {CPUx80}
     */
    opCALL()
    {
        let w = this.getPCWord();
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nCyclesRemain -= 17;
    }

    /**
     * op=0xCE (ACI d8)
     *
     * @this {CPUx80}
     */
    opACI()
    {
        this.regA = this.addByteCarry(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xCF (RST 1)
     *
     * @this {CPUx80}
     */
    opRST1()
    {
        this.pushWord(this.getPC());
        this.setPC(0x08);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xD0 (RNC)
     *
     * @this {CPUx80}
     */
    opRNC()
    {
        if (!this.getCF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xD1 (POP D)
     *
     * @this {CPUx80}
     */
    opPOPD()
    {
        this.setDE(this.popWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xD2 (JNC a16)
     *
     * @this {CPUx80}
     */
    opJNC()
    {
        let w = this.getPCWord();
        if (!this.getCF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xD3 (OUT d8)
     *
     * @this {CPUx80}
     */
    opOUT()
    {
        let port = this.getPCByte();
        this.busIO.writeData(port, this.regA);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xD4 (CNC a16)
     *
     * @this {CPUx80}
     */
    opCNC()
    {
        let w = this.getPCWord();
        if (!this.getCF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xD5 (PUSH D)
     *
     * @this {CPUx80}
     */
    opPUSHD()
    {
        this.pushWord(this.getDE());
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xD6 (SUI d8)
     *
     * @this {CPUx80}
     */
    opSUI()
    {
        this.regA = this.subByte(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xD7 (RST 2)
     *
     * @this {CPUx80}
     */
    opRST2()
    {
        this.pushWord(this.getPC());
        this.setPC(0x10);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xD8 (RC)
     *
     * @this {CPUx80}
     */
    opRC()
    {
        if (this.getCF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xDA (JC a16)
     *
     * @this {CPUx80}
     */
    opJC()
    {
        let w = this.getPCWord();
        if (this.getCF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xDB (IN d8)
     *
     * @this {CPUx80}
     */
    opIN()
    {
        let port = this.getPCByte();
        this.regA = this.busIO.readData(port) & 0xff;
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xDC (CC a16)
     *
     * @this {CPUx80}
     */
    opCC()
    {
        let w = this.getPCWord();
        if (this.getCF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xDE (SBI d8)
     *
     * @this {CPUx80}
     */
    opSBI()
    {
        this.regA = this.subByteBorrow(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xDF (RST 3)
     *
     * @this {CPUx80}
     */
    opRST3()
    {
        this.pushWord(this.getPC());
        this.setPC(0x18);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xE0 (RPO)
     *
     * @this {CPUx80}
     */
    opRPO()
    {
        if (!this.getPF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xE1 (POP H)
     *
     * @this {CPUx80}
     */
    opPOPH()
    {
        this.setHL(this.popWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xE2 (JPO a16)
     *
     * @this {CPUx80}
     */
    opJPO()
    {
        let w = this.getPCWord();
        if (!this.getPF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xE3 (XTHL)
     *
     * @this {CPUx80}
     */
    opXTHL()
    {
        let w = this.popWord();
        this.pushWord(this.getHL());
        this.setHL(w);
        this.nCyclesRemain -= 18;
    }

    /**
     * op=0xE4 (CPO a16)
     *
     * @this {CPUx80}
     */
    opCPO()
    {
        let w = this.getPCWord();
        if (!this.getPF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xE5 (PUSH H)
     *
     * @this {CPUx80}
     */
    opPUSHH()
    {
        this.pushWord(this.getHL());
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xE6 (ANI d8)
     *
     * @this {CPUx80}
     */
    opANI()
    {
        this.regA = this.andByte(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xE7 (RST 4)
     *
     * @this {CPUx80}
     */
    opRST4()
    {
        this.pushWord(this.getPC());
        this.setPC(0x20);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xE8 (RPE)
     *
     * @this {CPUx80}
     */
    opRPE()
    {
        if (this.getPF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xE9 (PCHL)
     *
     * @this {CPUx80}
     */
    opPCHL()
    {
        this.setPC(this.getHL());
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xEA (JPE a16)
     *
     * @this {CPUx80}
     */
    opJPE()
    {
        let w = this.getPCWord();
        if (this.getPF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xEB (XCHG)
     *
     * @this {CPUx80}
     */
    opXCHG()
    {
        let w = this.getHL();
        this.setHL(this.getDE());
        this.setDE(w);
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xEC (CPE a16)
     *
     * @this {CPUx80}
     */
    opCPE()
    {
        let w = this.getPCWord();
        if (this.getPF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xEE (XRI d8)
     *
     * @this {CPUx80}
     */
    opXRI()
    {
        this.regA = this.xorByte(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xEF (RST 5)
     *
     * @this {CPUx80}
     */
    opRST5()
    {
        this.pushWord(this.getPC());
        this.setPC(0x28);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xF0 (RP)
     *
     * @this {CPUx80}
     */
    opRP()
    {
        if (!this.getSF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xF1 (POP PSW)
     *
     * @this {CPUx80}
     */
    opPOPSW()
    {
        this.setPSW(this.popWord());
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xF2 (JP a16)
     *
     * @this {CPUx80}
     */
    opJP()
    {
        let w = this.getPCWord();
        if (!this.getSF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xF3 (DI)
     *
     * @this {CPUx80}
     */
    opDI()
    {
        this.clearIF();
        this.nCyclesRemain -= 4;
    }

    /**
     * op=0xF4 (CP a16)
     *
     * @this {CPUx80}
     */
    opCP()
    {
        let w = this.getPCWord();
        if (!this.getSF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xF5 (PUSH PSW)
     *
     * @this {CPUx80}
     */
    opPUPSW()
    {
        this.pushWord(this.getPSW());
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xF6 (ORI d8)
     *
     * @this {CPUx80}
     */
    opORI()
    {
        this.regA = this.orByte(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xF7 (RST 6)
     *
     * @this {CPUx80}
     */
    opRST6()
    {
        this.pushWord(this.getPC());
        this.setPC(0x30);
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xF8 (RM)
     *
     * @this {CPUx80}
     */
    opRM()
    {
        if (this.getSF()) {
            this.setPC(this.popWord());
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xF9 (SPHL)
     *
     * @this {CPUx80}
     */
    opSPHL()
    {
        this.setSP(this.getHL());
        this.nCyclesRemain -= 5;
    }

    /**
     * op=0xFA (JM a16)
     *
     * @this {CPUx80}
     */
    opJM()
    {
        let w = this.getPCWord();
        if (this.getSF()) this.setPC(w);
        this.nCyclesRemain -= 10;
    }

    /**
     * op=0xFB (EI)
     *
     * @this {CPUx80}
     */
    opEI()
    {
        this.setIF();
        this.nCyclesRemain -= 4;
        this.checkINTR();
    }

    /**
     * op=0xFC (CM a16)
     *
     * @this {CPUx80}
     */
    opCM()
    {
        let w = this.getPCWord();
        if (this.getSF()) {
            this.pushWord(this.getPC());
            this.setPC(w);
            this.nCyclesRemain -= 6;
        }
        this.nCyclesRemain -= 11;
    }

    /**
     * op=0xFE (CPI d8)
     *
     * @this {CPUx80}
     */
    opCPI()
    {
        this.subByte(this.getPCByte());
        this.nCyclesRemain -= 7;
    }

    /**
     * op=0xFF (RST 7)
     *
     * @this {CPUx80}
     */
    opRST7()
    {
        this.pushWord(this.getPC());
        this.setPC(0x38);
        this.nCyclesRemain -= 11;
    }

    /**
     * resetRegs()
     *
     * @this {CPUx80}
     */
    resetRegs()
    {
        this.regA = 0;
        this.regB = 0;
        this.regC = 0;
        this.regD = 0;
        this.regE = 0;
        this.regH = 0;
        this.regL = 0;
        this.setSP(0);
        this.setPC(this.addrReset);

        /**
         * regPCLast is an internal register that simply snapshots the PC at the start of every instruction;
         * this is useful not only for CPUs that need to support instruction restartability, but also for
         * diagnostic/debugging purposes.
         */
        this.regPCLast = this.regPC;

        /**
         * This resets the Processor Status flags (regPS), along with all the internal "result registers".
         */
        this.setPS(0);

        /**
         * intFlags contains some internal states we use to indicate whether a hardware interrupt (INTFLAG.INTR) or
         * Trap software interrupt (INTR.TRAP) has been requested, as well as when we're in a "HLT" state (INTFLAG.HALT)
         * that requires us to wait for a hardware interrupt (INTFLAG.INTR) before continuing execution.
         */
        this.intFlags = CPUx80.INTFLAG.NONE;
    }

    /**
     * setReset(addr)
     *
     * @this {CPUx80}
     * @param {number} addr
     */
    setReset(addr)
    {
        this.addrReset = addr;
        this.setPC(addr);
    }

    /**
     * getBC()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getBC()
    {
        return (this.regB << 8) | this.regC;
    }

    /**
     * setBC(w)
     *
     * @this {CPUx80}
     * @param {number} w
     */
    setBC(w)
    {
        this.regB = (w >> 8) & 0xff;
        this.regC = w & 0xff;
    }

    /**
     * getDE()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getDE()
    {
        return (this.regD << 8) | this.regE;
    }

    /**
     * setDE(w)
     *
     * @this {CPUx80}
     * @param {number} w
     */
    setDE(w)
    {
        this.regD = (w >> 8) & 0xff;
        this.regE = w & 0xff;
    }

    /**
     * getHL()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getHL()
    {
        return (this.regH << 8) | this.regL;
    }

    /**
     * setHL(w)
     *
     * @this {CPUx80}
     * @param {number} w
     */
    setHL(w)
    {
        this.regH = (w >> 8) & 0xff;
        this.regL = w & 0xff;
    }

    /**
     * getSP()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getSP()
    {
        return this.regSP;
    }

    /**
     * setSP(off)
     *
     * @this {CPUx80}
     * @param {number} off
     */
    setSP(off)
    {
        this.regSP = off & 0xffff;
    }

    /**
     * getPC()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getPC()
    {
        return this.regPC;
    }

    /**
     * offPC()
     *
     * @this {CPUx80}
     * @param {number} off
     * @returns {number}
     */
    offPC(off)
    {
        return (this.regPC + off) & 0xffff;
    }

    /**
     * setPC(off)
     *
     * @this {CPUx80}
     * @param {number} off
     */
    setPC(off)
    {
        this.regPC = off & 0xffff;
    }

    /**
     * clearCF()
     *
     * @this {CPUx80}
     */
    clearCF()
    {
        this.resultZeroCarry &= 0xff;
    }

    /**
     * getCF()
     *
     * @this {CPUx80}
     * @returns {number} 0 or 1 (CPUx80.PS.CF)
     */
    getCF()
    {
        return (this.resultZeroCarry & 0x100)? CPUx80.PS.CF : 0;
    }

    /**
     * setCF()
     *
     * @this {CPUx80}
     */
    setCF()
    {
        this.resultZeroCarry |= 0x100;
    }

    /**
     * updateCF(CF)
     *
     * @this {CPUx80}
     * @param {number} CF (0x000 or 0x100)
     */
    updateCF(CF)
    {
        this.resultZeroCarry = (this.resultZeroCarry & 0xff) | CF;
    }

    /**
     * clearPF()
     *
     * @this {CPUx80}
     */
    clearPF()
    {
        if (this.getPF()) this.resultParitySign ^= 0x1;
    }

    /**
     * getPF()
     *
     * @this {CPUx80}
     * @returns {number} 0 or CPUx80.PS.PF
     */
    getPF()
    {
        return (CPUx80.PARITY[this.resultParitySign & 0xff])? CPUx80.PS.PF : 0;
    }

    /**
     * setPF()
     *
     * @this {CPUx80}
     */
    setPF()
    {
        if (!this.getPF()) this.resultParitySign ^= 0x1;
    }

    /**
     * clearAF()
     *
     * @this {CPUx80}
     */
    clearAF()
    {
        this.resultAuxOverflow = (this.resultParitySign & 0x10) | (this.resultAuxOverflow & ~0x10);
    }

    /**
     * getAF()
     *
     * @this {CPUx80}
     * @returns {number} 0 or CPUx80.PS.AF
     */
    getAF()
    {
        return ((this.resultParitySign ^ this.resultAuxOverflow) & 0x10)? CPUx80.PS.AF : 0;
    }

    /**
     * setAF()
     *
     * @this {CPUx80}
     */
    setAF()
    {
        this.resultAuxOverflow = (~this.resultParitySign & 0x10) | (this.resultAuxOverflow & ~0x10);
    }

    /**
     * clearZF()
     *
     * @this {CPUx80}
     */
    clearZF()
    {
        this.resultZeroCarry |= 0xff;
    }

    /**
     * getZF()
     *
     * @this {CPUx80}
     * @returns {number} 0 or CPUx80.PS.ZF
     */
    getZF()
    {
        return (this.resultZeroCarry & 0xff)? 0 : CPUx80.PS.ZF;
    }

    /**
     * setZF()
     *
     * @this {CPUx80}
     */
    setZF()
    {
        this.resultZeroCarry &= ~0xff;
    }

    /**
     * clearSF()
     *
     * @this {CPUx80}
     */
    clearSF()
    {
        if (this.getSF()) this.resultParitySign ^= 0xc0;
    }

    /**
     * getSF()
     *
     * @this {CPUx80}
     * @returns {number} 0 or CPUx80.PS.SF
     */
    getSF()
    {
        return (this.resultParitySign & 0x80)? CPUx80.PS.SF : 0;
    }

    /**
     * setSF()
     *
     * @this {CPUx80}
     */
    setSF()
    {
        if (!this.getSF()) this.resultParitySign ^= 0xc0;
    }

    /**
     * clearIF()
     *
     * @this {CPUx80}
     */
    clearIF()
    {
        this.regPS &= ~CPUx80.PS.IF;
    }

    /**
     * getIF()
     *
     * @this {CPUx80}
     * @returns {number} 0 or CPUx80.PS.IF
     */
    getIF()
    {
        return (this.regPS & CPUx80.PS.IF);
    }

    /**
     * setIF()
     *
     * @this {CPUx80}
     */
    setIF()
    {
        this.regPS |= CPUx80.PS.IF;
    }

    /**
     * getPS()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getPS()
    {
        return (this.regPS & ~CPUx80.PS.RESULT) | (this.getSF() | this.getZF() | this.getAF() | this.getPF() | this.getCF());
    }

    /**
     * setPS(regPS)
     *
     * @this {CPUx80}
     * @param {number} regPS
     */
    setPS(regPS)
    {
        this.resultZeroCarry = this.resultParitySign = this.resultAuxOverflow = 0;
        if (regPS & CPUx80.PS.CF) this.resultZeroCarry |= 0x100;
        if (!(regPS & CPUx80.PS.PF)) this.resultParitySign |= 0x01;
        if (regPS & CPUx80.PS.AF) this.resultAuxOverflow |= 0x10;
        if (!(regPS & CPUx80.PS.ZF)) this.resultZeroCarry |= 0xff;
        if (regPS & CPUx80.PS.SF) this.resultParitySign ^= 0xc0;
        this.regPS = (this.regPS & ~(CPUx80.PS.RESULT | CPUx80.PS.INTERNAL)) | (regPS & CPUx80.PS.INTERNAL) | CPUx80.PS.SET;
        this.assert((regPS & CPUx80.PS.RESULT) == (this.getPS() & CPUx80.PS.RESULT));
    }

    /**
     * getPSW()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getPSW()
    {
        return (this.getPS() & CPUx80.PS.MASK) | (this.regA << 8);
    }

    /**
     * setPSW(w)
     *
     * @this {CPUx80}
     * @param {number} w
     */
    setPSW(w)
    {
        this.setPS((w & CPUx80.PS.MASK) | (this.regPS & ~CPUx80.PS.MASK));
        this.regA = w >> 8;
    }

    /**
     * addByte(src)
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA + src
     */
    addByte(src)
    {
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = this.regA + src) & 0xff;
    }

    /**
     * addByteCarry(src)
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA + src + carry
     */
    addByteCarry(src)
    {
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = this.regA + src + ((this.resultZeroCarry & 0x100)? 1 : 0)) & 0xff;
    }

    /**
     * andByte(src)
     *
     * Ordinarily, one would expect the Auxiliary Carry flag (AF) to be clear after this operation,
     * but apparently the 8080 will set AF if bit 3 in either operand is set.
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA & src
     */
    andByte(src)
    {
        this.resultZeroCarry = this.resultParitySign = this.resultAuxOverflow = this.regA & src;
        if ((this.regA | src) & 0x8) this.resultAuxOverflow ^= 0x10;        // set AF by inverting bit 4 in resultAuxOverflow
        return this.resultZeroCarry;
    }

    /**
     * decByte(b)
     *
     * We perform this operation using 8-bit two's complement arithmetic, by negating and then adding
     * the implied src of 1.  This appears to mimic how the 8080 manages the Auxiliary Carry flag (AF).
     *
     * @this {CPUx80}
     * @param {number} b
     * @returns {number}
     */
    decByte(b)
    {
        this.resultAuxOverflow = b ^ 0xff;
        b = this.resultParitySign = (b + 0xff) & 0xff;
        this.resultZeroCarry = (this.resultZeroCarry & ~0xff) | b;
        return b;
    }

    /**
     * incByte(b)
     *
     * @this {CPUx80}
     * @param {number} b
     * @returns {number}
     */
    incByte(b)
    {
        this.resultAuxOverflow = b;
        b = this.resultParitySign = (b + 1) & 0xff;
        this.resultZeroCarry = (this.resultZeroCarry & ~0xff) | b;
        return b;
    }

    /**
     * orByte(src)
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA | src
     */
    orByte(src)
    {
        return this.resultParitySign = this.resultZeroCarry = this.resultAuxOverflow = this.regA | src;
    }

    /**
     * subByte(src)
     *
     * We perform this operation using 8-bit two's complement arithmetic, by inverting src, adding
     * src + 1, and then inverting the resulting carry (resultZeroCarry ^ 0x100).  This appears to mimic
     * how the 8080 manages the Auxiliary Carry flag (AF).
     *
     * This function is also used as a cmpByte() function; compare instructions simply ignore the
     * return value.
     *
     * Example: A=66, SUI $10
     *
     * If we created the two's complement of 0x10 by negating it, there would just be one addition:
     *
     *      0110 0110   (0x66)
     *    + 1111 0000   (0xF0)  (ie, -0x10)
     *      ---------
     *    1 0101 0110   (0x56)
     *
     * But in order to mimic the 8080's AF flag, we must perform the two's complement of src in two steps,
     * inverting it before the add, and then incrementing after the add; eg:
     *
     *      0110 0110   (0x66)
     *    + 1110 1111   (0xEF)  (ie, ~0x10)
     *      ---------
     *    1 0101 0101   (0x55)
     *    + 0000 0001   (0x01)
     *      ---------
     *    1 0101 0110   (0x56)
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA - src
     */
    subByte(src)
    {
        src ^= 0xff;
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = (this.regA + src + 1) ^ 0x100) & 0xff;
    }

    /**
     * subByteBorrow(src)
     *
     * We perform this operation using 8-bit two's complement arithmetic, using logic similar to subByte(),
     * but changing the final increment to a conditional increment, because if the Carry flag (CF) is set, then
     * we don't need to perform the increment at all.
     *
     * This mimics the behavior of subByte() when the Carry flag (CF) is clear, and hopefully also mimics how the
     * 8080 manages the Auxiliary Carry flag (AF) when the Carry flag (CF) is set.
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA - src - carry
     */
    subByteBorrow(src)
    {
        src ^= 0xff;
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = (this.regA + src + ((this.resultZeroCarry & 0x100)? 0 : 1)) ^ 0x100) & 0xff;
    }

    /**
     * xorByte(src)
     *
     * @this {CPUx80}
     * @param {number} src
     * @returns {number} regA ^ src
     */
    xorByte(src)
    {
        return this.resultParitySign = this.resultZeroCarry = this.resultAuxOverflow = this.regA ^ src;
    }

    /**
     * getByte(addr)
     *
     * @this {CPUx80}
     * @param {number} addr is a linear address
     * @returns {number} byte (8-bit) value at that address
     */
    getByte(addr)
    {
        return this.busMemory.readData(addr)|0;
    }

    /**
     * getWord(addr)
     *
     * @this {CPUx80}
     * @param {number} addr is a linear address
     * @returns {number} word (16-bit) value at that address
     */
    getWord(addr)
    {
        return this.busMemory.readPair(addr);
    }

    /**
     * setByte(addr, b)
     *
     * @this {CPUx80}
     * @param {number} addr is a linear address
     * @param {number} b is the byte (8-bit) value to write (which we truncate to 8 bits to be safe)
     */
    setByte(addr, b)
    {
        this.busMemory.writeData(addr, b & 0xff);
    }

    /**
     * setWord(addr, w)
     *
     * @this {CPUx80}
     * @param {number} addr is a linear address
     * @param {number} w is the word (16-bit) value to write (which we truncate to 16 bits to be safe)
     */
    setWord(addr, w)
    {
        this.busMemory.writePair(addr, w & 0xffff);
    }

    /**
     * getPCByte()
     *
     * @this {CPUx80}
     * @returns {number} byte at the current PC; PC advanced by 1
     */
    getPCByte()
    {
        let b = this.getByte(this.regPC);
        this.setPC(this.regPC + 1);
        return b;
    }

    /**
     * getPCWord()
     *
     * @this {CPUx80}
     * @returns {number} word at the current PC; PC advanced by 2
     */
    getPCWord()
    {
        let w = this.getWord(this.regPC);
        this.setPC(this.regPC + 2);
        return w;
    }

    /**
     * popWord()
     *
     * @this {CPUx80}
     * @returns {number} word popped from the current SP; SP increased by 2
     */
    popWord()
    {
        let w = this.getWord(this.regSP);
        this.setSP(this.regSP + 2);
        return w;
    }

    /**
     * pushWord(w)
     *
     * @this {CPUx80}
     * @param {number} w is the word (16-bit) value to push at current SP; SP decreased by 2
     */
    pushWord(w)
    {
        this.setSP(this.regSP - 2);
        this.setWord(this.regSP, w);
    }

    /**
     * checkINTR()
     *
     * @this {CPUx80}
     * @returns {boolean} true if execution may proceed, false if not
     */
    checkINTR()
    {
        /**
         * If the Debugger is single-stepping, isRunning() will be false, which we take advantage
         * of here to avoid processing interrupts.  The Debugger will have to issue a "g" command
         * to resume normal interrupt processing.
         */
        if (this.time.isRunning()) {
            if ((this.intFlags & CPUx80.INTFLAG.INTR) && this.getIF()) {
                let nLevel;
                for (nLevel = 0; nLevel < 8; nLevel++) {
                    if (this.intFlags & (1 << nLevel)) break;
                }
                this.clearINTR(nLevel);
                this.clearIF();
                this.intFlags &= ~CPUx80.INTFLAG.HALT;
                this.aOps[CPUx80.OPCODE.RST0 | (nLevel << 3)].call(this);
            }
        }
        if (this.intFlags & CPUx80.INTFLAG.HALT) {
            /**
             * As discussed in opHLT(), the CPU is never REALLY halted by a HLT instruction; instead, opHLT()
             * calls requestHALT(), which sets INTFLAG.HALT and then ends the current burst; the CPU should not
             * execute any more instructions until checkINTR() indicates a hardware interrupt has been requested.
             */
            this.time.endBurst();
            return false;
        }
        return true;
    }

    /**
     * clearINTR(nLevel)
     *
     * Clear the corresponding interrupt level.
     *
     * nLevel can either be a valid interrupt level (0-7), or undefined to clear all pending interrupts
     * (eg, in the event of a system-wide reset).
     *
     * @this {CPUx80}
     * @param {number} [nLevel] (0-7, or undefined for all)
     */
    clearINTR(nLevel = -1)
    {
        let bitsClear = nLevel < 0? 0xff : (1 << nLevel);
        this.intFlags &= ~bitsClear;
    }

    /**
     * requestHALT()
     *
     * @this {CPUx80}
     */
    requestHALT()
    {
        this.intFlags |= CPUx80.INTFLAG.HALT;
        this.time.endBurst();
    }

    /**
     * requestINTR(nLevel)
     *
     * Request the corresponding interrupt level.
     *
     * Each interrupt level (0-7) has its own intFlags bit (0-7).  If the Interrupt Flag (IF) is also
     * set, then we know that checkINTR() will want to issue the interrupt, so we end the current burst.
     *
     * @this {CPUx80}
     * @param {number} nLevel (0-7)
     */
    requestINTR(nLevel)
    {
        this.intFlags |= (1 << nLevel);
        if (this.getIF()) {
            this.time.endBurst();
        }
    }

    /**
     * toInstruction(addr, opcode)
     *
     * Returns a string representation of the specified instruction.
     *
     * @this {CPUx80}
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
     * @this {CPUx80}
     * @returns {string}
     */
    toString()
    {
        return this.sprintf("A=%02X BC=%04X DE=%04X HL=%04X SP=%04X I%d S%d Z%d A%d P%d C%d\n%s", this.regA, this.getBC(), this.getDE(), this.getHL(), this.getSP(), this.getIF()?1:0, this.getSF()?1:0, this.getZF()?1:0, this.getAF()?1:0, this.getPF()?1:0, this.getCF()?1:0, this.toInstruction(this.regPC));
    }
}

/**
 * CPU model numbers (supported); future supported models could include the Z80.
 */
CPUx80.MODEL_8080 = 8080;

/**
 * This constant is used to mark points in the code where the physical address being returned
 * is invalid and should not be used.
 */
CPUx80.ADDR_INVALID = undefined;

/**
 * Processor Status flag definitions (stored in regPS)
 */
CPUx80.PS = {
    CF:     0x0001,     // bit 0: Carry Flag
    BIT1:   0x0002,     // bit 1: reserved, always set
    PF:     0x0004,     // bit 2: Parity Flag
    BIT3:   0x0008,     // bit 3: reserved, always clear
    AF:     0x0010,     // bit 4: Auxiliary Carry Flag
    BIT5:   0x0020,     // bit 5: reserved, always clear
    ZF:     0x0040,     // bit 6: Zero Flag
    SF:     0x0080,     // bit 7: Sign Flag
    ALL:    0x00D5,     // all "arithmetic" flags (CF, PF, AF, ZF, SF)
    MASK:   0x00FF,     //
    IF:     0x0200      // bit 9: Interrupt Flag (set if interrupts enabled; Intel calls this the INTE bit)
};

/**
 * These are the internal PS bits (outside of PS.MASK) that getPS() and setPS() can get and set,
 * but which cannot be seen with any of the documented instructions.
 */
CPUx80.PS.INTERNAL = CPUx80.PS.IF;

/**
 * PS "arithmetic" flags are NOT stored in regPS; they are maintained across separate result registers,
 * hence the RESULT designation.
 */
CPUx80.PS.RESULT   = CPUx80.PS.CF | CPUx80.PS.PF | CPUx80.PS.AF | CPUx80.PS.ZF | CPUx80.PS.SF;

/**
 * These are the "always set" PS bits for the 8080.
 */
CPUx80.PS.SET      = CPUx80.PS.BIT1;

CPUx80.PARITY = [          // 256-byte array with a 1 wherever the number of set bits of the array index is EVEN
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1
];

/**
 * Interrupt-related flags (stored in intFlags)
 */
CPUx80.INTFLAG = {
    NONE:   0x0000,
    INTR:   0x00ff,     // mask for 8 bits, representing interrupt levels 0-7
    HALT:   0x0100      // halt requested; see opHLT()
};

/**
 * Opcode definitions
 */
CPUx80.OPCODE = {
    HLT:    0x76,       // Halt
    ACI:    0xCE,       // Add with Carry Immediate (affects PS.ALL)
    CALL:   0xCD,       // Call
    RST0:   0xC7
    // to be continued....
};

CPUx80.CLASSES["CPUx80"] = CPUx80;
