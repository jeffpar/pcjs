/**
 * @fileoverview 68K Emulator
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/* eslint-disable no-labels */
/* eslint-disable no-extra-label */

import CPU      from "../../../../modules/v3/cpu.js";
import Debugger from "../../../../modules/v3/debugger.js";
import MESSAGE  from "../../../../modules/v3/message.js";
import { EAModeDRegByte, EAModeDRegWord, EAModeDRegLong, EAModeIllegal, EAModeARegWord, EAModeARegLong, EAModeAValByte, EAModeAValWord, EAModeAValLong, EAModeAValIncByte, EAModeAValIncWord, EAModeAValIncLong, EAModeAValDecByte, EAModeAValDecWord, EAModeAValDecLong, EAModeAValDispByte, EAModeAValDispWord, EAModeAValDispLong, EAModeAValIndexByte, EAModeAValIndexWord, EAModeAValIndexLong, EAModeAbs16Byte, EAModeAbs16Word, EAModeAbs16Long, EAModeAbs32Byte, EAModeAbs32Word, EAModeAbs32Long, EAModePCValDispByte, EAModePCValDispWord, EAModePCValDispLong, EAModePCValIndexByte, EAModePCValIndexWord, EAModePCValIndexLong, EAModeImmediateByte, EAModeImmediateWord, EAModeImmediateLong } from "./eamodes.js";

/**
 * @typedef {Config} CPU68KConfig
 * @property {string} busMemory
 * @property {number} [addrReset]
 */

/**
 * @typedef {Object} HWRegs
 * @property {function(boolean):boolean} checkInterrupts
 */

/**
 * 68K Emulator
 *
 * All registers (and all data values flowing through the EAMode classes) are maintained as signed 32-bit integers,
 * just like the original Java implementation, and all byte and word memory reads are sign-extended, again like Java's
 * GetByte() and GetWord().  Memory addresses are masked to 25 bits (see CPU68K.ADDR_MASK), which reproduces the 32Mb
 * address space replication that the original Java implementation (and the PalmOS ROMs it supported) relied upon.
 *
 * @class CPU68K
 * @unrestricted
 * @property {Bus} busMemory
 * @property {Input} inputDevice
 * @property {HWRegs|null} hwregs
 */
export default class CPU68K extends CPU
{
    /**
     * CPU68K(idMachine, idDevice, config)
     *
     * @this {CPU68K}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        /**
         * Get access to the Bus that provides access to physical memory.
         */
        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['busMemory']));

        /**
         * Get access to the Input device, so we can call setFocus() as needed.
         */
        this.inputDevice = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        /**
         * The hardware register device (eg, PilotIO) that manages interrupts will connect itself via setHWRegs().
         */
        this.hwregs = null;

        /**
         * Initialize the CPU.
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
     * In the original Java implementation, CPUThread.run() was responsible for calling ExecuteOpcodes() repeatedly,
     * checking for interrupts (CPU_CHECKINTS), and processing any exception that GenerateException() recorded before
     * throwing a Java exception (iPendingException).  Here, all of that is managed by this function.
     *
     * One difference: when the 68K executes a STOP instruction, the Java implementation would sleep briefly and then
     * resume execution after the STOP; here, the CPU remains stopped (simply consuming cycles) until an interrupt
     * is acknowledged, which is how the real hardware behaves.
     *
     * @this {CPU68K}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
        this.nCyclesRemain = nCycles;

        while (this.nCyclesRemain > 0) {
            if (this.fCPU & (CPU68K.CPU_CHECKINTS | CPU68K.CPU_STOPPED)) {
                if ((this.fCPU & CPU68K.CPU_CHECKINTS) && this.hwregs && this.time.isRunning()) {
                    if (this.hwregs.checkInterrupts(true)) {
                        this.addCycles(44);
                    }
                }
                if ((this.fCPU & CPU68K.CPU_STOPPED) && (this.injection || this.aInjections.length)) {
                    this.checkInjections();
                }
                if (this.fCPU & CPU68K.CPU_STOPPED) {
                    this.nCyclesRemain = 0;
                    break;
                }
            }
            try {
                this.executeOpcodes();
            } catch(err) {
                if (err !== CPU68K.EXCEPTION_THROWN) throw err;
                this.processException();
            }
            if (this.fCPU & CPU68K.CPU_BREAKPOINT) {
                this.fCPU &= ~CPU68K.CPU_BREAKPOINT;
                break;
            }
        }
    }

    /**
     * startClock(nCycles)
     *
     * Overrides the CPU's startClock(), so that once a burst is complete, getClock() no longer reports the cycles
     * from that burst; otherwise, any device calling Time's getCycles() between bursts (eg, from a timer callback)
     * would see those cycles counted twice, since Time has already added them to its own cycle count.
     *
     * @this {CPU68K}
     * @param {number} [nCycles] (default is 0 to single-step)
     * @returns {number} (number of cycles actually "clocked")
     */
    startClock(nCycles = 0)
    {
        let nCyclesClocked = super.startClock(nCycles);
        this.nCyclesStart = this.nCyclesRemain = 0;
        return nCyclesClocked;
    }

    /**
     * executeOpcodes()
     *
     * This is the heart of the CPU, ported from ExecuteOpcodes() in CPUOps.java.  It executes instructions until
     * nCyclesRemain is exhausted or some condition in CPU_BREAKFLAGS occurs (eg, STOP or a change in interrupt state).
     *
     * @this {CPU68K}
     */
    executeOpcodes()
    {
        let aEAModes = this.aEAModes;
        let dataNew, dataTmp, cBits, cRegs, fCond;
        let op1, op2, reg, ss, rrr, nnn, eaModeSrc, eaModeDst, iModeSrc, iModeDst, iMask;

        while (this.nCyclesRemain > 0) {

            let nCyclesCur = this.nCyclesRemain;    // make sure the next opcode generates a non-zero cycle count

            this.regPCLast = this.regPC;        // update current opcode address
            op1 = this.getPCWord();             // get next instruction (don't forget this can be a signed integer if the opcode is a signed word)

            ss = 0;                             // (ssBYTE << 6)
            nnn = op1 & 0x7;
            rrr = (op1 >> 9) & 0x7;

    stage1: switch ((op1 >> 12) & 0xf) {

            case 0x0:
                //  case 0x0000:   ori      [00000000sswwwnnn, format ????????sswwwnnn, p.258]
                //  case 0x003c:   ori      [0000000000111100, format none,             p.260]
                //  case 0x007c:   ori      [0000000001111100, format none,             p.482]
                //  case 0x0100:   btst     [0000rrr100yyynnn, format ??????????yyynnn, p.166]
                //  case 0x0108:   movep    [0000rrr100001nnn, format none,             p.236]
                //  case 0x0140:   bchg     [0000rrr101bbbnnn, format ??????????bbbnnn, p.132]
                //  case 0x0148:   movep    [0000rrr101001nnn, format none,             p.236]
                //  case 0x0180:   bclr     [0000rrr110bbbnnn, format ??????????bbbnnn, p.135]
                //  case 0x0188:   movep    [0000rrr110001nnn, format none,             p.236]
                //  case 0x01c0:   bset     [0000rrr111bbbnnn, format ??????????bbbnnn, p.161]
                //  case 0x01c8:   movep    [0000rrr111001nnn, format none,             p.236]
                //  case 0x0200:   andi     [00000010sswwwnnn, format ????????sswwwnnn, p.123]
                //  case 0x023c:   andi     [0000001000111100, format none,             p.125]
                //  case 0x027c:   andi     [0000001001111100, format none,             p.457]
                //  case 0x0400:   subi     [00000100sswwwnnn, format ????????sswwwnnn, p.284]
                //  case 0x0600:   addi     [00000110sswwwnnn, format ????????sswwwnnn, p.114]
                //  case 0x0800:   btst     [0000100000zzznnn, format ??????????zzznnn, p.166]
                //  case 0x0840:   bchg     [0000100001bbbnnn, format ??????????bbbnnn, p.132]
                //  case 0x0880:   bclr     [0000100010bbbnnn, format ??????????bbbnnn, p.135]
                //  case 0x08c0:   bset     [0000100011bbbnnn, format ??????????bbbnnn, p.161]
                //  case 0x0a00:   eori     [00001010sswwwnnn, format ????????sswwwnnn, p.207]
                //  case 0x0a3c:   eori     [0000101000111100, format none,             p.209]
                //  case 0x0a7c:   eori     [0000101001111100, format none,             p.465]
                //  case 0x0c00:   cmpi     [00001100sswwwnnn, format ????????sswwwnnn, p.184]

                iModeSrc = CPU68K.EAMODEINDEX_DREG_LONG;

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    //  case 0x0000:   ori      [....0000sswwwnnn, format ????????sswwwnnn, p.258]
                    //  case 0x003c:   ori      [....000000111100, format none,             p.260]
                    //  case 0x007c:   ori      [....000001111100, format none,             p.482]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        if (op1 == 0 && this.dataSrc == 0) {
                            // BUGBUG: This isn't really an illegal instruction, but it probably
                            // wouldn't be found under normal circumstances, so let's help ourselves
                            // out by flagging it as an illegal instruction for now.... -JP
                            this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                        }
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst | this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        this.setORFlagsCCR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        this.setORFlagsSR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else {
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0x2:
                    //  case 0x0200:   andi     [....0010sswwwnnn, format ????????sswwwnnn, p.123]
                    //  case 0x023c:   andi     [....001000111100, format none,             p.125]
                    //  case 0x027c:   andi     [....001001111100, format none,             p.457]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst & this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2Dl);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        this.setANDFlagsCCR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        this.setANDFlagsSR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else {
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0x4:
                    //  case 0x0400:   subi     [....0100sswwwnnn, format ????????sswwwnnn, p.284]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    break stage1;

                case 0x6:
                    //  case 0x0600:   addi     [....0110sswwwnnn, format ????????sswwwnnn, p.114]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    break stage1;

                case 0x8:
                    //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn, p.166]
                    //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn, p.161]
                    iModeSrc = CPU68K.EAMODEINDEX_IMMEDIATE_WORD;
                    rrr = 0;
                    break;

                case 0xa:
                    //  case 0x0a00:   eori     [....1010sswwwnnn, format ????????sswwwnnn, p.207]
                    //  case 0x0a3c:   eori     [....101000111100, format none,             p.209]
                    //  case 0x0a7c:   eori     [....101001111100, format none,             p.465]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst ^ this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        this.setEORFlagsCCR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        this.setEORFlagsSR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else {
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0xc:
                    //  case 0x0c00:   cmpi     [....1100sswwwnnn, format ????????sswwwnnn, p.184]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    this.addCycles(4 + eaModeDst.cycle2Dl);
                    break stage1;

                case 0xe:
                    this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;

                case 0x1:
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn, p.166]
                    //  case 0x0108:   movep    [....rrr100001nnn, format none,             p.236]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none,             p.236]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none,             p.236]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn, p.161]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none,             p.236]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }

                if ((op1 & 0x0038) == 0x0008) {
                    //  case 0x0108:   movep    [....rrr100001nnn, format none, p.236]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none, p.236]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none, p.236]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none, p.236]
                    //  The Java implementation didn't support MOVEP, but it's simple enough: transfer every
                    //  other byte, starting at (d16,An), between memory and the specified data register.
                    reg = (this.regA[nnn] + this.getPCWord())|0;
                    cRegs = (op1 & 0x40)? 4 : 2;
                    if (op1 & 0x80) {
                        for (let i = (cRegs - 1) * 8; i >= 0; i -= 8, reg += 2) {
                            this.setByte(reg, this.regD[rrr] >> i);
                        }
                    } else {
                        dataNew = 0;
                        for (let i = 0; i < cRegs; i++, reg += 2) {
                            dataNew = (dataNew << 8) | (this.getByte(reg) & 0xff);
                        }
                        this.regD[rrr] = (cRegs == 4)? dataNew : (this.regD[rrr] & ~0xffff) | dataNew;
                    }
                    this.addCycles(8 + cRegs * 4);
                }
                else {
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn, p.166]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn, p.161]
                    eaModeSrc = aEAModes[iModeSrc];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    if ((op1 & 0x0038) == 0x0000) {
                        this.dataSrc = (1 << (this.dataSrc & 31));
                        eaModeDst = this.eaModeDRegLong;        // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(nnn);
                    }
                    else {
                        this.dataSrc = (1 << (this.dataSrc & 7));
                        if ((op1 & 0x00c0) == 0) {
                            //
                            // BTST is the only bit operation that permits an immediate destination, and only when the
                            // bit number is in a register (the Java implementation didn't permit it at all).
                            //
                            eaModeDst = aEAModes[(iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? this.abModes400 : this.abModes401)[op1 & 0x3f]];  // +(ssBYTE << 6)
                        } else {
                            eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];  // +(ssBYTE << 6)
                        }
                        this.dataDst = eaModeDst.getEAData(nnn);
                    }
                    switch ((op1 >> 6) & 0x3) {
                    case 0:
                        //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn, p.166]
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(4 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4) + eaModeDst.cycle2l);
                        break;
                    case 1:
                        //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn, p.132]
                        eaModeDst.setData(this.dataDst ^ this.dataSrc);
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(8 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4));
                        break;

                    case 2:
                        //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn, p.135]
                        eaModeDst.setData(this.dataDst & ~this.dataSrc);
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(8 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4) + eaModeDst.cycle2l);
                        break;

                    case 3:
                        //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn, p.161]
                        eaModeDst.setData(this.dataDst | this.dataSrc);
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(8 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4));
                        break;
                    }
                }
                break stage1;

            case 0x2:
                ss += 0x40;     // fall through...

            case 0x3:
                ss += 0x40;     // fall through...

            case 0x1:
                //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn, p.221]
                //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn, p.224]
                eaModeSrc = aEAModes[this.abModes000[ss + (op1 & 0x3f)]];
                this.dataSrc = eaModeSrc.getEAData(nnn);
                if ((op1 & 0x01c0) != 0x0040) {
                    //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn, p.221]
                    eaModeDst = aEAModes[this.abModesMove[ss + ((op1 >> 6) & 0x3f)]];
                    eaModeDst.setEADataFlagsZNClearCV(rrr, this.dataSrc);
                    this.addCycles(4);
                }
                else {
                    //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn, p.224]
                    this.regA[rrr] = this.dataSrc;
                    this.addCycles(4);
                }
                break stage1;

            case 0x4:
                //  case 0x4000:   negx     [01000000sswwwnnn, format ????????sswwwnnn, p.250]
                //  case 0x40c0:   move     [0100000011wwwnnn, format ??????????wwwnnn, p.230]
                //  case 0x4180:   chk      [0100rrr110xxxnnn, format ??????????xxxnnn, p.174]
                //  case 0x41c0:   lea      [0100rrr111pppnnn, format ??????????pppnnn, p.215]
                //  case 0x4200:   clr      [01000010sswwwnnn, format ????????sswwwnnn, p.178]
                //  case 0x42c0:   move     [0100001011wwwnnn, format ??????????wwwnnn, p.226]
                //  case 0x4400:   neg      [01000100sswwwnnn, format ????????sswwwnnn, p.248]
                //  case 0x44c0:   move     [0100010011xxxnnn, format ??????????xxxnnn, p.228]
                //  case 0x4600:   not      [01000110sswwwnnn, format ????????sswwwnnn, p.253]
                //  case 0x46c0:   move     [0100011011xxxnnn, format ??????????xxxnnn, p.474]
                //  case 0x4800:   nbcd     [0100100000wwwnnn, format ??????????wwwnnn, p.246]
                //  case 0x4840:   pea      [0100100001pppnnn, format ??????????pppnnn, p.264]
                //  case 0x4840:   swap     [0100100001000nnn, format none,             p.290]
                //  case 0x4880:   ext      [0100100010000nnn, format none,             p.211]
                //  case 0x4880:   movem    [010010001kuuunnn, format ?????????kuuunnn, p.233]
                //  case 0x48c0:   ext      [0100100011000nnn, format none,             p.211]
                //  case 0x49c0:   ext      [0100100111000nnn, format none,             p.211]
                //  case 0x4a00:   tst      [01001010ssmmmnnn, format ????????ssmmmnnn, p.297]
                //  case 0x4ac0:   tas      [0100101011wwwnnn, format ??????????wwwnnn, p.291]
                //  case 0x4afc:   illegal  [0100101011111100, format none,             p.212]
                //  case 0x4c80:   movem    [010011001ktttnnn, format ?????????ktttnnn, p.233]
                //  case 0x4e40:   trap     [010011100100vvvv, format none,             p.293]
                //  case 0x4e50:   link     [0100111001010nnn, format none,             p.216]
                //  case 0x4e58:   unlk     [0100111001011nnn, format none,             p.299]
                //  case 0x4e60:   move     [0100111001100nnn, format none,             p.476]
                //  case 0x4e68:   move     [0100111001101nnn, format none,             p.476]
                //  case 0x4e70:   reset    [0100111001110000, format none,             p.538]
                //  case 0x4e71:   nop      [0100111001110001, format none,             p.253]
                //  case 0x4e72:   stop     [0100111001110010, format none,             p.540]
                //  case 0x4e73:   rte      [0100111001110011, format none,             p.539]
                //  case 0x4e75:   rts      [0100111001110101, format none,             p.274]
                //  case 0x4e76:   trapv    [0100111001110110, format none,             p.296]
                //  case 0x4e77:   rtr      [0100111001110111, format none,             p.273]
                //  case 0x4e80:   jsr      [0100111010pppnnn, format ??????????pppnnn, p.214]
                //  case 0x4ec0:   jmp      [0100111011pppnnn, format ??????????pppnnn, p.213]

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4000:   negx     [....0000sswwwnnn, format ????????sswwwnnn, p.250]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        this.dataDst = 0;
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataSrc = eaModeDst.getEAData(nnn);
                        eaModeDst.setData(this.subX(eaModeDst.width, this.dataDst, this.dataSrc));
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE SR,%s
                        //  case 0x40c0:   move     [....000011wwwnnn, format ??????????wwwnnn, p.230]
                        eaModeDst = aEAModes[this.abModes407[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        eaModeDst.setEAData(nnn, this.getFlags());
                        this.addCycles(8 - eaModeDst.cycle2ADI);
                    }
                    break stage1;

                case 0x2:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4200:   clr      [....0010sswwwnnn, format ????????sswwwnnn, p.178]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                      //this.dataDst = eaModeDst.getEAData(nnn);         // technically, we're supposed to read the data from EA first,
                        eaModeDst.setEADataFlagsZNClearCV(nnn, 0);  // even though all we're going to do is immediately overwrite it -JP
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE CCR,%s
                        //  case 0x42c0:   move     [....001011wwwnnn, format ??????????wwwnnn, p.226]
                        eaModeDst = aEAModes[this.abModes407[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        eaModeDst.setEAData(nnn, this.getFlags() & CPU68K.FLAGS_CCR);
                        this.addCycles(8 - eaModeDst.cycle2ADI);   // BUGBUG: Need to confirm this is the same as "MOVE SR,%s" -JP
                    }
                    break stage1;

                case 0x4:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4400:   neg      [....0100sswwwnnn, format ????????sswwwnnn, p.248]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        this.dataDst = 0;
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataSrc = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlags(-this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE %s,CCR
                        //  case 0x44c0:   move     [....010011xxxnnn, format ??????????xxxnnn, p.228]
                        eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        this.setFlagsCCR(eaModeSrc.getEAData(nnn));
                        this.addCycles(12);
                    }
                    break stage1;

                case 0x6:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4600:   not      [....0110sswwwnnn, format ????????sswwwnnn, p.253]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(~this.dataDst);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE %s,SR
                        //  case 0x46c0:   move     [....011011xxxnnn, format ??????????xxxnnn, p.474]
                        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                        }
                        eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        this.setFlagsSR(eaModeSrc.getEAData(nnn));
                        this.addCycles(12);
                    }
                    break stage1;

                case 0x8:
                    //  case 0x4800:   nbcd     [....100000wwwnnn, format ??????????wwwnnn, p.246]
                    //  case 0x4840:   pea      [....100001pppnnn, format ??????????pppnnn, p.264]
                    //  case 0x4840:   swap     [....100001000nnn, format none,             p.290]
                    //  case 0x4880:   ext      [....100010000nnn, format none,             p.211]
                    //  case 0x4880:   movem    [....10001kuuunnn, format ?????????kuuunnn, p.233]
                    //  case 0x48c0:   ext      [....100011000nnn, format none,             p.211]
                    switch ((op1 >> 6) & 0x3) {
                    case 0x0:
                        //  case 0x4800:   nbcd     [........00wwwnnn, format ??????????wwwnnn, p.246]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        this.dataDst = 0;
                        this.dataSrc = eaModeDst.getEAData(nnn) & 0xff;
                        eaModeDst.setData(this.negBCD(this.dataSrc));
                        this.addCycles(8 - eaModeDst.cycle2ADI);
                        break stage1;

                    case 0x1:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4840:   swap     [........01000nnn, format none, p.290]
                            eaModeDst = this.eaModeDRegLong;    // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            this.dataDst = eaModeDst.getEAData(nnn);
                            eaModeDst.setDataFlagsZNClearCV((this.dataDst >>> 16) | ((this.dataDst & 0xffff) << 16));
                            this.addCycles(4);
                        }
                        else {
                            //  case 0x4840:   pea      [........01pppnnn, format ??????????pppnnn, p.264]
                            eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];// +(ssLONG << 6)
                            this.dataSrc = eaModeSrc.getEA(nnn);
                            this.pushLong(this.dataSrc);        // aEAModes[CPU68K.EAMODEINDEX_AREG_PUSHLONG].setEAData(7, this.dataSrc);
                            this.addCycles(4);                  // BUGBUG: approximate -JP
                        }
                        break stage1;

                    case 0x2:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none, p.211]
                            eaModeDst = aEAModes[CPU68K.EAMODEINDEX_DREG_WORD];
                            this.dataDst = eaModeDst.getEAData(nnn);
                            eaModeDst.setDataFlagsZNClearCV(this.dataDst << 24 >> 24);
                            this.addCycles(4);
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x3:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none, p.211]
                            eaModeDst = this.eaModeDRegLong;    // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            this.dataDst = eaModeDst.getEAData(nnn);
                            eaModeDst.setDataFlagsZNClearCV(this.dataDst << 16 >> 16);
                            this.addCycles(4);
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */
                    }

                    //  case 0x4880:   movem    [........1kuuunnn, format ?????????kuuunnn, p.233]
                    //  NOTES: 1) This is a register-to-memory operation
                    //         2) For pre-decrement, the order of storing is A7 to A0, then D7 to D0 (bit 0 to bit 15)
                    //         3) For all other modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         4) Any register used in pre-decrement mode is stored before being decremented
                    iModeSrc = this.getPCWord();
                    eaModeDst = aEAModes[this.abModesD07[(op1 - 0x40) & 0xff]];
                    cRegs = 0;
                    reg = this.regA[nnn];
                    eaModeDst.getEA(nnn);
                    iMask = 0x1;
                    if ((op1 & 0x38) == 0x20) {
                        //
                        // Pre-decrement (NOTE: If the address register used in pre-decrement mode is also
                        // one of the source operands, the 68000 writes the register's initial value, not its
                        // decremented value, hence it's important that we call setEAData(a[i]) instead of
                        // getEA() followed by setData(a[i]) -JP)
                        //
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(i == nnn? reg : this.regA[i]);
                            }
                        }
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(this.regD[i]);
                            }
                        }
                        if (cRegs == 0) this.regA[nnn] = reg;
                    }
                    else {
                        // All other modes
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(this.regD[i]);
                            }
                        }
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(this.regA[i]);
                            }
                        }
                    }
                    this.addCycles((4+eaModeDst.cycle4l)*cRegs);
                    break stage1;

                case 0xa:
                    if ((op1 & 0xc0) != 0xc0) {
                        //  case 0x4a00:   tst      [........ssmmmnnn, format ????????ssmmmnnn, p.297]
                        eaModeDst = aEAModes[this.abModes000[op1 & 0xff]];
                        eaModeDst.updateFlagsZNClearCV(eaModeDst.getEAData(nnn));
                        this.addCycles(4);
                    }
                    else if ((op1 & 0x3f) != 0x3c) {
                        //  case 0x4ac0:   tas      [........11wwwnnn, format ??????????wwwnnn, p.291]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.updateFlagsZNClearCV(this.dataDst);
                        eaModeDst.setData(this.dataDst | 0x80);
                        this.addCycles(14 - eaModeDst.cycle2ADI*5);
                    }
                    else {
                        //  case 0x4afc:   illegal  [........11111100, format none, p.212]
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0xc:
                    //  case 0x4c80:   movem    [....11001ktttnnn, format ?????????ktttnnn, p.233]
                    //  NOTES: 1) This is a memory-to-register operation
                    //         2) For all modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         3) Any register used in post-increment mode is not affected by the value loaded for it (if any)
                    iModeDst = this.getPCWord();
                    iModeSrc = op1 & 0x38;
                    eaModeSrc = aEAModes[this.abModesC81[(op1 - 0x40) & 0xff]];
                    cRegs = 0;
                    reg = this.regA[nnn];
                    eaModeSrc.getEA(nnn);
                    iMask = 0x1;
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (cRegs++ != 0) eaModeSrc.advanceEA(nnn);
                            this.regD[i] = eaModeSrc.getData();
                        }
                    }
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (cRegs++ != 0) eaModeSrc.advanceEA(nnn);
                            op2 = eaModeSrc.getData();
                            if (iModeSrc != 0x18 || i != nnn) { // if mode is "A[i]+" and i == nnn, then we must not set A[i]
                                this.regA[i] = op2;
                            }
                        }
                    }
                    if (cRegs == 0) this.regA[nnn] = reg;
                    this.addCycles(4 + (4+eaModeSrc.cycle4l)*cRegs);
                    break stage1;

                case 0xe:
                    switch ((op1 >> 4) & 0xf) {
                    case 0x4:
                        //  case 0x4e40:   trap     [........0100vvvv, format none, p.293]
                        if (this.dbg) {                         // see if the debugger wants us to break
                            if (this.dbg.break(this.regPCLast, true)) {
                                this.regPC = this.regPCLast;
                                this.fCPU |= CPU68K.CPU_BREAKPOINT;
                                return;
                            }
                        }
                        this.regPCTrap = this.regPCLast;        // keep track the last trap encountered
                        this.callException((op1 & 0xf) + 0x20);
                        this.addCycles(34);
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) {
                            //  case 0x4e50:   link     [........01010nnn, format none, p.216]
                            op2 = this.getPCWord();             // aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].getEAData(0);
                            this.pushLong(nnn == 7? this.regA[7] - 4 : this.regA[nnn]);   // "LINK A7" pushes the decremented A7
                            this.regA[nnn] = this.regA[7];
                            this.regA[7] = (this.regA[7] + op2)|0;
                            this.addCycles(16);
                        }
                        else {
                            //  case 0x4e58:   unlk     [........01011nnn, format none, p.299]
                            op2 = this.regA[7];         // this is strictly for MarkDataAccess's benefit (see below)
                            this.regA[7] = this.regA[nnn];
                            this.regA[nnn] = this.popLong();
                            this.addCycles(12);
                            if (this.dbg && this.dbg.markDataAccess) {
                                //
                                // Mark the entire frame just removed as "uninitialized", to
                                // help catch more errors.  There are other places where it might
                                // be nice to do this as well, like after we've returned to the
                                // caller and he's removed his args from the stack with an "ADD #xxx,A7",
                                // but we don't want to slow things down *too* much.... -JP
                                //
                                this.dbg.markDataAccess(op2, this.regA[7]-op2, CPU68K.DATAACCESS_UNINIT);
                            }
                        }
                        break stage1;

                    case 0x6:
                        //  case 0x4e60:   move     [........01100nnn, format none, p.476]
                        //  case 0x4e68:   move     [........01101nnn, format none, p.476]
                        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                            break stage1;
                        }
                        if ((op1 & 0x8) == 0) {
                            this.regUSP = this.regA[nnn];
                        }
                        else {
                            this.regA[nnn] = this.regUSP;
                        }
                        this.addCycles(4);
                        break stage1;

                    case 0x7:
                        switch (op1 & 0xf) {
                        case 0x0:
                            //  case 0x4e70:   reset    [........01110000, format none, p.538]
                            //  The RESET instruction asserts the RESET line for external devices only; the CPU
                            //  itself is unaffected, and we have no external devices that care, so this is a no-op.
                            if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                                this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                            }
                            this.addCycles(132);
                            break stage1;

                        case 0x1:
                            //  case 0x4e71:   nop      [........01110001, format none, p.253]
                            this.addCycles(4);
                            break stage1;

                        case 0x2:
                            //  case 0x4e72:   stop     [........01110010, format none, p.540]
                            if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                                this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                                break stage1;
                            }
                            op2 = this.getPCWord() & 0xffff;
                            // Check for OP_STOP_TRACE, OP_STOP_FREEZE, OP_STOP_INJECT
                            if (op2 < (CPU68K.OP_STOP_TRACE & 0xffff)) {
                                this.setFlagsSR(op2);
                            }
                            else {
                                //
                                // The definition of both OP_STOP_FREEZE and OP_STOP_INJECT is to reset
                                // the stack to PC, and then pop the next 'long' into PC.  This effectively
                                // "returns" us from a call injected by ScriptVarFunc.Call().
                                //
                                if (this.injection) {
                                    this.injection.result = {d0: this.regD[0], a0: this.regA[0]};
                                }
                                this.regA[7] = this.regPC;
                                this.regPC = this.popLong();
                                //
                                // OP_STOP_FREEZE also means that since the CPU was frozen at the time of
                                // the injection, that we should re-freeze the CPU now.  We're not really allowed
                                // to set CPU_FREEZE ourselves (that bit is "owned" by CPUThread), but setting
                                // CPU_FREEZEONSTOP should be good enough, since we're also setting CPU_STOPPED....
                                //
                                if (op2 == (CPU68K.OP_STOP_TRACE & 0xffff)) {
                                    this.fCPU |= CPU68K.CPU_TRACEONSTOP;
                                }
                                else if (op2 == (CPU68K.OP_STOP_FREEZE & 0xffff)) {
                                    this.fCPU |= CPU68K.CPU_FREEZEONSTOP;
                                }
                            }
                            this.fCPU |= CPU68K.CPU_STOPPED;
                            this.addCycles(4);
                            break stage1;

                        case 0x3:
                            //  case 0x4e73:   rte      [........01110011, format none, p.539]
                            this.returnFromException();
                            this.addCycles(20);
                            break stage1;

                        case 0x5:
                            //  case 0x4e75:   rts      [........01110101, format none, p.274]
                            this.regPC = this.popLong();        // aEAModes[CPU68K.EAMODEINDEX_AREG_POPLONG].getEAData(7);
                            this.addCycles(16);
                            break stage1;

                        case 0x6:
                            //  case 0x4e76:   trapv    [........01110110, format none, p.296]
                            if (this.getFlagV() != 0) {
                                this.genException(CPU68K.EXCEPTION_TRAPV_OVERFLOW);
                                this.addCycles(34);
                                break stage1;
                            }
                            this.addCycles(4);
                            break stage1;

                        case 0x7:
                            //  case 0x4e77:   rtr      [........01110111, format none, p.273]
                            this.setFlagsCCR(aEAModes[CPU68K.EAMODEINDEX_AREG_INCWORD].getEAData(7));
                            this.regPC = this.popLong();                // aEAModes[CPU68K.EAMODEINDEX_AREG_POPLONG].getEAData(7);
                            this.addCycles(20);
                            break stage1;

                        case 0x8:
                        case 0x9:
                        case 0xa:
                        case 0xb:
                        case 0xc:
                        case 0xd:
                        case 0xe:
                        case 0xf:
                            break;              // end up at this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION)
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x8:
                    case 0x9:
                    case 0xa:
                    case 0xb:
                        //  case 0x4e80:   jsr      [........10pppnnn, format ??????????pppnnn, p.214]
                        eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        this.dataSrc = eaModeSrc.getEA(nnn);
                        this.pushLong(this.regPC);              // aEAModes[CPU68K.EAMODEINDEX_AREG_PUSHLONG].setEAData(7, this.regPC);
                        this.regPC = this.dataSrc;
                        this.addCycles(6);                      // BUGBUG: approximate -JP
                        break stage1;

                    case 0xc:
                    case 0xd:
                    case 0xe:
                    case 0xf:
                        //  case 0x4ec0:   jmp      [........11pppnnn, format ??????????pppnnn, p.213]
                        eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        this.regPC = eaModeSrc.getEA(nnn);
                        break stage1;
                    }
                    this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;

                case 0x1:
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    if ((op1 & 0x00f8) == 0x00c0) {
                        //  case 0x49c0:   ext      [....100111000nnn, format none, p.211]
                        eaModeDst = this.eaModeDRegLong;        // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst << 24 >> 24);
                        this.addCycles(4);
                        break stage1;
                    }
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }

                if ((op1 & 0x00c0) == 0x0080) {
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    this.dataDst = this.regD[rrr] << 16 >> 16;
                    this.setFlagZ(this.dataDst == 0? 1 : 0);      // Z, V and C are officially undefined, but this
                    this.setFlagV(0);                               // is what real hardware does
                    this.setFlagC(0);
                    if (this.dataDst < 0) {
                        this.setFlagN(-1);
                        this.genException(CPU68K.EXCEPTION_CHK_INSTRUCTION);
                        this.addCycles(40);
                    }
                    else if (this.dataDst > this.dataSrc) {
                        this.setFlagN(0);
                        this.genException(CPU68K.EXCEPTION_CHK_INSTRUCTION);
                        this.addCycles(40);
                    }
                    else {
                        this.addCycles(10);
                    }
                }
                else {
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                    this.regA[rrr] = eaModeSrc.getEA(nnn);
                }
                break stage1;

            case 0x5:
                //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn, p.116]
                //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn, p.277]
                //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????, p.195]
                //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn, p.286]
                if ((op1 & 0x00c0) != 0x00c0) {
                    this.dataSrc = CPU68K.aByteQuick[rrr];
                    iModeDst = op1 & 0xf8;
                    if (iModeDst == 0x48 || iModeDst == 0x88) { // EAMODEINDEX_AREG_WORD or EAMODEINDEX_AREG_LONG
                        if ((op1 & 0x0100) == 0x0000) {         // affects entire A register and does not affect flags
                            this.regA[nnn] = (this.regA[nnn] + this.dataSrc)|0;
                            this.addCycles(8);                  // BUGBUG: For word accesses, table 8.5 says this is only 4 cycles (but only for ADDQ, not SUBQ) -JP
                        }
                        else {
                            this.regA[nnn] = (this.regA[nnn] - this.dataSrc)|0;
                            this.addCycles(8);
                        }
                        break stage1;
                    }
                    eaModeDst = aEAModes[this.abModes007[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    if ((op1 & 0x0100) == 0x0000) {
                        //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn, p.116]
                        eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else {
                        //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn. p.286]
                        eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD + eaModeDst.cycle4Aw);
                    }
                }
                else {
                    if ((op1 & 0x0038) != 0x0008) {
                        //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn, p.277]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        eaModeDst.getEA(nnn);
                        op2 = 0;                // prevent "used before initialization" warning
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // ST
                            op2 = -1;
                            break;
                        case 0x1:               // SF
                            op2 = 0;
                            break;
                        case 0x2:               // SHI
                            op2 = this.getFlagHI();
                            break;
                        case 0x3:               // SLS
                            op2 = ~this.getFlagHI();
                            break;
                        case 0x4:               // SCC
                            op2 = ~this.getFlagC();
                            break;
                        case 0x5:               // SCS
                            op2 = this.getFlagC();
                            break;
                        case 0x6:               // SNE
                            op2 = ~this.getFlagZ();
                            break;
                        case 0x7:               // SEQ
                            op2 = this.getFlagZ();
                            break;
                        case 0x8:               // SVC
                            op2 = ~this.getFlagV();
                            break;
                        case 0x9:               // SVS
                            op2 = this.getFlagV();
                            break;
                        case 0xa:               // SPL
                            op2 = ~this.getFlagN();
                            break;
                        case 0xb:               // SMI
                            op2 = this.getFlagN();
                            break;
                        case 0xc:               // SGE
                            op2 = this.getFlagGE();
                            break;
                        case 0xd:               // SLT
                            op2 = this.getFlagLT();
                            break;
                        case 0xe:               // SGT
                            op2 = this.getFlagGT();
                            break;
                        case 0xf:               // SLE
                            op2 = this.getFlagLE();
                            break;
                        }
                        eaModeDst.setData(op2);
                        this.addCycles(8 - eaModeDst.cycle2ADI - (op2 == 0? eaModeDst.cycle2ADI : 0));
                        break stage1;
                    }
                    else {
                        //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????, p.195]
                        let fCond = -1;
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // BUGBUG: Valid? -JP
                          //fCond = -1;
                            break;
                        case 0x1:               // DBRA
                            fCond = 0;
                            break;
                        case 0x2:               // DBHI
                            fCond = this.getFlagHI();
                            break;
                        case 0x3:               // DBLS
                            fCond = this.getFlagHI()+1;
                            break;
                        case 0x4:               // DBCC
                            fCond = this.getFlagC()+1;
                            break;
                        case 0x5:               // DBCS
                            fCond = this.getFlagC();
                            break;
                        case 0x6:               // DBNE
                            fCond = this.getFlagZ()+1;
                            break;
                        case 0x7:               // DBEQ
                            fCond = this.getFlagZ();
                            break;
                        case 0x8:               // DBVC
                            fCond = this.getFlagV()+1;
                            break;
                        case 0x9:               // DBVS
                            fCond = this.getFlagV();
                            break;
                        case 0xa:               // DBPL
                            fCond = this.getFlagN()+1;
                            break;
                        case 0xb:               // DBMI
                            fCond = this.getFlagN();
                            break;
                        case 0xc:               // DBGE
                            fCond = this.getFlagGE();
                            break;
                        case 0xd:               // DBLT
                            fCond = this.getFlagLT();
                            break;
                        case 0xe:               // DBGT
                            fCond = this.getFlagGT();
                            break;
                        case 0xf:               // DBLE
                            fCond = this.getFlagLE();
                            break;
                        }
                        this.dataSrc = this.getPCWord() - 2;    // aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0) - 2;
                        if (fCond == 0) {
                            //
                            // The DBcc instructions are hard-coded to decrement ONLY the low-order
                            // 16 bits of the data register, so we need both of the following lines, not
                            // simply "this.dataDst = --d[nnn]"...
                            //
                            this.dataDst = (this.regD[nnn] << 16 >> 16) - 1;
                            this.regD[nnn] = (this.regD[nnn] & ~0xffff) | (this.dataDst & 0xffff);

                            if (this.dataDst != -1) {
                                this.regPC = (this.regPC + this.dataSrc)|0;
                                this.addCycles(10);
                            }
                            else {
                                this.addCycles(14);
                            }
                        }
                        else {
                            this.addCycles(12);
                        }
                        break stage1;
                    }
                }
                break;

            case 0x6:
                //  case 0x6000:   bcc      [0110ccccdddddddd, format ????ccccdddddddd, p.130]
                //  case 0x6100:   bsr      [01100001dddddddd, format none,             p.164]
                fCond = -1;
                this.dataSrc = op1 << 24 >> 24;
                op2 = 0;
                if (this.dataSrc == 0) {
                    this.dataSrc = this.getPCWord() - 2;        // aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0) - 2;
                    op2 = 4;
                }

                switch ((op1 >> 8) & 0xf) {
                case 0x0:               // BRA
                  //fCond = -1;
                    break;
                case 0x1:               // BSR
                    this.pushLong(this.regPC);                  // aEAModes[CPU68K.EAMODEINDEX_AREG_PUSHLONG].setEAData(7, this.regPC);
                    this.regPC = (this.regPC + this.dataSrc)|0;
                    this.addCycles(18);
                    break stage1;
                case 0x2:               // BHI
                    fCond = this.getFlagHI();
                    break;
                case 0x3:               // BLS
                    fCond = this.getFlagHI()+1;
                    break;
                case 0x4:               // BCC
                    fCond = this.getFlagC()+1;
                    break;
                case 0x5:               // BCS
                    fCond = this.getFlagC();
                    break;
                case 0x6:               // BNE
                    fCond = this.getFlagZ()+1;
                    break;
                case 0x7:               // BEQ
                    fCond = this.getFlagZ();
                    break;
                case 0x8:               // BVC
                    fCond = this.getFlagV()+1;
                    break;
                case 0x9:               // BVS
                    fCond = this.getFlagV();
                    break;
                case 0xa:               // BPL
                    fCond = this.getFlagN()+1;
                    break;
                case 0xb:               // BMI
                    fCond = this.getFlagN();
                    break;
                case 0xc:               // BGE
                    fCond = this.getFlagGE();
                    break;
                case 0xd:               // BLT
                    fCond = this.getFlagLT();
                    break;
                case 0xe:               // BGT
                    fCond = this.getFlagGT();
                    break;
                case 0xf:               // BLE
                    fCond = this.getFlagLE();
                    break;
                }
                if (fCond != 0) {
                    this.regPC = (this.regPC + this.dataSrc)|0;
                    this.addCycles(10);
                }
                else {
                    this.addCycles(8 + op2);
                }
                break stage1;

            case 0x7:
                //  case 0x7000:   moveq    [0111rrr0dddddddd, format none, p.239]
                this.eaModeDRegLong.setEADataFlagsZNClearCV(rrr, op1 << 24 >> 24);
                this.addCycles(4);
                break stage1;

            case 0x8:
                //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                if ((op1 & 0x01f0) == 0x0100) {
                    //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                    eaModeSrc = aEAModes[this.abModesAddSubX[(op1 >> 3) & 0x1]];     // 0 or 1 (both ssBYTE)
                    this.dataSrc = eaModeSrc.getEAData(nnn) & 0xff;
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr) & 0xff;
                    eaModeDst.setData(this.subBCD(this.dataDst, this.dataSrc));
                    if ((op1 & 0x8) == 0) {
                        this.addCycles(6);
                    }
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x00c0) {
                    //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn) & 0xffff;
                    if (this.dataSrc == 0) {
                        this.setFlagsCCR(this.getFlags() & CPU68K.FLAGS_EXTEND);
                        this.genException(CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO);
                        this.addCycles(38);
                    }
                    else {
                        eaModeDst = this.eaModeDRegLong;        // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(rrr);
                        dataTmp = this.dataDst >>> 0;           // make dividend unsigned
                        dataNew = (dataTmp / this.dataSrc)|0;
                        dataTmp = (dataTmp % this.dataSrc)|0;
                        if ((dataNew & 0xffff0000) != 0) {
                            this.setDivOverflow();
                        }
                        else {                                  // flags are based on quotient (dataNew), not the quotient+remainder combo
                            eaModeDst.setData((dataNew & 0xffff) | (dataTmp << 16));
                            eaModeDst.updateFlagsZNClearCV(dataNew << 16 >> 16);
                        }
                        this.addCycles(140);
                    }
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x01c0) {
                    //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    if (this.dataSrc == 0) {
                        this.setFlagsCCR(this.getFlags() & CPU68K.FLAGS_EXTEND);
                        this.genException(CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO);
                        this.addCycles(38);
                    }
                    else {
                        eaModeDst = this.eaModeDRegLong;        // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(rrr);
                        dataNew = Math.trunc(this.dataDst / this.dataSrc);
                        dataTmp = (this.dataDst % this.dataSrc)|0;
                        if (dataNew < -0x8000 || dataNew > 0x7fff) {
                            this.setDivOverflow();
                        } else {                                // flags are based on quotient (dataNew), not the quotient+remainder combo
                            eaModeDst.setData((dataNew & 0xffff) | (dataTmp << 16));
                            eaModeDst.updateFlagsZNClearCV(dataNew);
                        }
                        this.addCycles(158);
                    }
                    break stage1;
                }
                if ((op1 & 0x0100) == 0x0000) { // EA is src
                    //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                    eaModeSrc = aEAModes[this.abModes400[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst | this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                }
                else {                          // EA is dst
                    //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst | this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l);
                }
                break stage1;

            case 0x9:
                //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                    eaModeSrc = aEAModes[this.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    this.regA[rrr] = (this.regA[rrr] - this.dataSrc)|0;
                    this.addCycles(8 - eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                    eaModeSrc = aEAModes[this.abModes000[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l);
                }
                else {
                    //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                    eaModeSrc = aEAModes[this.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setData(this.subX(eaModeDst.width, this.dataDst, this.dataSrc));
                    if ((op1 & 0x8) == 0) {
                        this.addCycles(4 + eaModeDst.cycle4l);
                    }
                }
                break stage1;

            case 0xa:
                this.genException(CPU68K.EXCEPTION_LINE_A);
                break;

            case 0xb:
                //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                    eaModeSrc = aEAModes[this.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[CPU68K.EAMODEINDEX_AREG_LONG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    this.addCycles(6);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                    eaModeSrc = aEAModes[this.abModes000[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l);
                    break stage1;
                }
                if ((op1 & 0x0038) != 0x08) {
                    //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst ^ this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                }
                else {
                    //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_AREG_INCBYTE];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    // Cycles needs no adjustment -- CMPM should be covered by EA cycles
                }
                break stage1;

            case 0xc:
                //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                op2 = (op1 >> 6) & 0x7;

                switch(op2) {
                case 0x0:
                case 0x1:
                case 0x2:                       // EA is src
                    //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                    eaModeSrc = aEAModes[this.abModes400[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst & this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;

                case 0x3:
                    //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn) & 0xffff;
                    eaModeDst = this.eaModeDRegLong;            // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    this.dataDst = eaModeDst.getEAData(rrr) & 0xffff;
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst * this.dataSrc);
                    this.addCycles(70);        // BUGBUG: worst-case timing -JP
                    break stage1;

                case 0x4:
                case 0x5:
                case 0x6:                       // EA is dst
                    //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                    if ((op1 & 0x0030) != 0) {
                        eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                        this.dataSrc = eaModeSrc.getEAData(rrr);
                        eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst & this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l);
                        break stage1;
                    }

                    switch(op2) {
                    case 0x4:
                        //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                        eaModeSrc = aEAModes[this.abModesAddSubX[(op1 >> 3) & 0x1]]; // 0 or 1 (both ssBYTE)
                        this.dataSrc = eaModeSrc.getEAData(nnn) & 0xff;
                        eaModeDst = eaModeSrc;
                        this.dataDst = eaModeDst.getEAData(rrr) & 0xff;
                        eaModeDst.setData(this.addBCD(this.dataDst, this.dataSrc));
                        if ((op1 & 0x8) == 0) {
                            this.addCycles(6);
                        }
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) { // EXG Drrr,Dnnn
                            //  case 0xc140:   exg      [1100rrr101000nnn, format ????rrr??????nnn, p.210]
                            op2 = this.regD[rrr];
                            this.regD[rrr] = this.regD[nnn];
                            this.regD[nnn] = op2;
                        }
                        else {                  // EXG Arrr,Annn
                            //  case 0xc148:   exg      [1100rrr101001nnn, format ????rrr??????nnn, p.210]
                            op2 = this.regA[rrr];
                            this.regA[rrr] = this.regA[nnn];
                            this.regA[nnn] = op2;
                        }
                        this.addCycles(6);
                        break stage1;

                    case 0x6:
                        if ((op1 & 0x8) != 0) { // EXG Drrr,Annn
                            //  case 0xc188:   exg      [1100rrr110001nnn, format ????rrr??????nnn, p.210]
                            op2 = this.regD[rrr];
                            this.regD[rrr] = this.regA[nnn];
                            this.regA[nnn] = op2;
                            this.addCycles(6);
                            break stage1;
                        }
                    }
                    break;      // If we're still here, must be an invalid opcode

                case 0x7:
                    //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = this.eaModeDRegLong;            // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    this.dataDst = eaModeDst.getEAData(rrr) << 16 >> 16;
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst * this.dataSrc);
                    this.addCycles(70);        // BUGBUG: worst-case timing -JP
                    break stage1;
                }

                this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                break;

            case 0xd:
                //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                    eaModeSrc = aEAModes[this.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    this.regA[rrr] = (this.regA[rrr] + this.dataSrc)|0;     // entire destination updated regardless of operand size
                    this.addCycles(8 - eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                    eaModeSrc = aEAModes[this.abModes000[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l);
                }
                else {
                    //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                    eaModeSrc = aEAModes[this.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setData(this.addX(eaModeDst.width, this.dataDst, this.dataSrc));
                    if ((op1 & 0x8) == 0) {
                        this.addCycles(4 + eaModeDst.cycle4l);
                    }
                }
                break stage1;

            case 0xe:
                //  case 0xe000:   asr      [1110000011uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe000:   asr      [1110rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe008:   lsr      [1110rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe010:   roxr     [1110rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe018:   ror      [1110rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe100:   asl      [1110rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe100:   asl      [1110000111uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe108:   lsl      [1110rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe110:   roxl     [1110rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe118:   rol      [1110rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe200:   lsr      [1110001011uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe300:   lsl      [1110001111uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe400:   roxr     [1110010011uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe500:   roxl     [1110010111uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe600:   ror      [1110011011uuunnn, format ??????????uuunnn, p.265]
                //  case 0xe700:   rol      [1110011111uuunnn, format ??????????uuunnn, p.265]
                if ((op1 & 0x00c0) != 0x00c0) {
                    cBits = ((op1 & 0x20) == 0)? CPU68K.aByteQuick[rrr] : (this.regD[rrr] & 0x3f);
                    op2 = ((op1 >> 2) & 0x6) | ((op1 >> 8) & 0x1);
                    eaModeDst = aEAModes[CPU68K.EAMODEINDEX_DREG_BYTE + ((op1 >> 6) & 0x3)];
                }
                else {
                    cBits = 1;
                    op2 = op1 >> 8;
                    eaModeDst = aEAModes[this.abModesC07[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                }
                this.dataDst = eaModeDst.getEAData(nnn);
                this.addCycles(8 + eaModeDst.cycle2ADl + (eaModeDst.cycle2ADI-1)*cBits);

                switch (op2 & 0x7) {
                //
                // NOTE: The Java implementation handled shift counts >= the operand width by first shifting one bit
                // and then reducing the count to width-1, which produced incorrect results and/or flags in a number
                // of cases (eg, counts larger than the width); the following code handles all those cases explicitly.
                //
                case 0x0:
                    //  case 0xe000:   asr      [....000011uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe000:   asr      [....rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    } else if (cBits >= eaModeDst.width) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst >> 31);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst >>> 31) : 0);
                    } else {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst >> cBits);
                        this.setFlagCX((this.dataDst >> (cBits-1)) & 0x1);
                    }
                    break stage1;

                case 0x1:
                    //  case 0xe100:   asl      [....000111uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe100:   asl      [....rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                        break stage1;
                    }
                    //
                    // V is set if the most significant bit changes at any time during the shift operation, which means
                    // that if the top cBits+1 bits of the operand are not all the same (or for large counts, if the
                    // operand is non-zero), V must be set.
                    //
                    if (cBits >= eaModeDst.width) {
                        dataTmp = this.dataDst & eaModeDst.mask;
                        eaModeDst.setDataFlagsZNClearCV(0);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst & 0x1) : 0);
                    } else {
                        dataNew = (eaModeDst.mask << (eaModeDst.width-cBits-1)) & eaModeDst.mask;
                        dataTmp = this.dataDst & dataNew;
                        dataTmp = (dataTmp != dataNew && dataTmp != 0)? 1 : 0;
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst << cBits);
                        this.setFlagCX((this.dataDst >> (eaModeDst.width-cBits)) & 0x1);
                    }
                    if (dataTmp != 0) this.setFlagV(-1);
                    break stage1;

                case 0x2:
                    //  case 0xe200:   lsr      [....001011uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe008:   lsr      [....rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    this.dataDst &= eaModeDst.mask;
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    } else if (cBits >= eaModeDst.width) {
                        eaModeDst.setDataFlagsZNClearCV(0);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst >>> (eaModeDst.width-1)) & 0x1 : 0);
                    } else {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst >>> cBits);
                        this.setFlagCX((this.dataDst >>> (cBits-1)) & 0x1);
                    }
                    break stage1;

                case 0x3:
                    //  case 0xe300:   lsl      [....001111uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe108:   lsl      [....rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    } else if (cBits >= eaModeDst.width) {
                        eaModeDst.setDataFlagsZNClearCV(0);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst & 0x1) : 0);
                    } else {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst << cBits);
                        this.setFlagCX((this.dataDst >> (eaModeDst.width-cBits)) & 0x1);
                    }
                    break stage1;

                case 0x4:
                    //  case 0xe400:   roxr     [....010011uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe010:   roxr     [....rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    this.dataDst &= eaModeDst.mask;
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst >>> 1) | (this.getFlagX() & eaModeDst.sign);
                        this.setFlagX(this.dataDst & 0x1);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    this.setFlagC(this.getFlagX());
                    break stage1;

                case 0x5:
                    //  case 0xe500:   roxl     [....010111uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe110:   roxl     [....rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst << 1) | (this.getFlagX() & 0x1);
                        this.setFlagX(this.dataDst & eaModeDst.sign);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    this.setFlagC(this.getFlagX());
                    break stage1;

                case 0x6:
                    //  case 0xe600:   ror      [....011011uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe018:   ror      [....rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                        break stage1;
                    }
                    this.dataDst &= eaModeDst.mask;
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst >>> 1) | ((this.dataDst & 0x1) << (eaModeDst.width-1));
                        this.setFlagC(this.dataDst & 0x1);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearV(this.dataDst);
                    break stage1;

                case 0x7:
                    //  case 0xe700:   rol      [....011111uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe118:   rol      [....rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                        break stage1;
                    }
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst << 1) | ((this.dataDst & eaModeDst.sign) >>> (eaModeDst.width-1));
                        this.setFlagC(this.dataDst & eaModeDst.sign);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearV(this.dataDst);
                    break stage1;
                }
                break;

            case 0xf:
                if (this.dbg && (op1 & CPU68K.OP_MYBREAKPOINT_MASK) == CPU68K.OP_MYBREAKPOINT) {
                    if (this.dbg.break(this.regPCLast, true)) { // see if the debugger wants us to break
                        this.regPC = this.regPCLast;
                        this.fCPU |= CPU68K.CPU_BREAKPOINT;
                        return;
                    }
                }
                this.genException(CPU68K.EXCEPTION_LINE_F);
                break;

            }   // End stage1

            //
            // The Java implementation (in DEBUG builds) treated any instruction that failed to generate a cycle count
            // as unsupported; we simply ensure that every instruction consumes at least some cycles.
            //
            if (nCyclesCur == this.nCyclesRemain) {
                this.addCycles(4);
            }

            if ((this.fCPU & CPU68K.CPU_BREAKFLAGS) != 0) {
                break;
            }
        }

        // Note that we've added CPU_BREAKPOINT to the list of flags that can kick us out of the execution loop.
        // That's because the breakpoint and TRAP instructions, which still return immediately because the desired
        // instruction has not actually been executed yet, are no longer the only reasons CPU_BREAKPOINT can be set.
        //
        // Data read/write breakpoints can now trigger CPU_BREAKPOINT condition as well (see MarkDataAccess() in
        // the Debugger).  We can't stop the instruction from executing, because not all emulated instruction are
        // "restartable" (eg, instructions that do pre-decrement or post-increment), so we have to let it finish and
        // then wind out of ExecuteOpcodes() normally, here at the bottom....
    }

    /**
     * initCPU()
     *
     * Initializes the CPU's state.
     *
     * @this {CPU68K}
     */
    initCPU()
    {
        this.initRegs();
        this.initEAModes();
        for (let i = 0; i < 8; i++) {
            this.defineRegister("A" + i, () => this.regA[i], (value) => this.regA[i] = value|0);
            this.defineRegister("D" + i, () => this.regD[i], (value) => this.regD[i] = value|0);
        }
        this.defineRegister("SP", () => this.regA[7], (value) => this.regA[7] = value|0);
        this.defineRegister("SR", () => this.getFlags(), (value) => this.setFlagsSR(value));
        this.defineRegister("SSP", () => (this.flags & CPU68K.FLAGS_SU)? this.regA[7] : this.regSSP, (value) => {
            if (this.flags & CPU68K.FLAGS_SU) this.regA[7] = value|0; else this.regSSP = value|0;
        });
        this.defineRegister("USP", () => (this.flags & CPU68K.FLAGS_SU)? this.regUSP : this.regA[7], (value) => {
            if (this.flags & CPU68K.FLAGS_SU) this.regUSP = value|0; else this.regA[7] = value|0;
        });
        this.defineRegister("C",  () => (this.getFlagC()? 1 : 0), (value) => this.setFlagC(value));
        this.defineRegister("V",  () => (this.getFlagV()? 1 : 0), (value) => this.setFlagV(value));
        this.defineRegister("Z",  () => (this.getFlagZ()? 1 : 0), (value) => this.setFlagZ(value));
        this.defineRegister("N",  () => (this.getFlagN()? 1 : 0), (value) => this.setFlagN(value));
        this.defineRegister("X",  () => (this.getFlagX()? 1 : 0), (value) => this.setFlagX(value));
        this.defineRegister(Debugger.REGISTER.PC, () => this.regPC, (value) => this.regPC = value|0);
    }

    /**
     * InitEAModes()
     *
     * @this {CPU68K}
     */
    initEAModes()
    {
        let i = 0;
        this.aEAModes = new Array(CPU68K.ssMAX * CPU68K.mmmMAX + 1);    // +1 for EAMODEINDEX_IMMEDIATE_ILLEGAL

        this.aEAModes[i++] = new EAModeDRegByte(this);                  // must match EAMODEINDEX_DREG_BYTE
        this.aEAModes[i++] = new EAModeDRegWord(this);                  // must match EAMODEINDEX_DREG_WORD
        this.aEAModes[i++] = this.eaModeDRegLong = new EAModeDRegLong(this);

        this.aEAModes[i++] = new EAModeIllegal(this);                   // must match EAMODEINDEX_ILLEGAL
        this.aEAModes[i++] = new EAModeARegWord(this);                  // must match EAMODEINDEX_AREG_WORD
        this.aEAModes[i++] = new EAModeARegLong(this);                  // must match EAMODEINDEX_AREG_LONG

        this.aEAModes[i++] = new EAModeAValByte(this);
        this.aEAModes[i++] = new EAModeAValWord(this);
        this.aEAModes[i++] = new EAModeAValLong(this);

        this.aEAModes[i++] = new EAModeAValIncByte(this);               // must match EAMODEINDEX_AREG_INCBYTE
        this.aEAModes[i++] = new EAModeAValIncWord(this);               // must match EAMODEINDEX_AREG_INCWORD
        this.aEAModes[i++] = new EAModeAValIncLong(this);               // must match EAMODEINDEX_AREG_INCLONG

        this.aEAModes[i++] = new EAModeAValDecByte(this);               // must match EAMODEINDEX_AREG_DECBYTE
        this.aEAModes[i++] = new EAModeAValDecWord(this);               // must match EAMODEINDEX_AREG_DECWORD
        this.aEAModes[i++] = new EAModeAValDecLong(this);               // must match EAMODEINDEX_AREG_DECLONG

        this.aEAModes[i++] = new EAModeAValDispByte(this);
        this.aEAModes[i++] = new EAModeAValDispWord(this);
        this.aEAModes[i++] = new EAModeAValDispLong(this);

        this.aEAModes[i++] = new EAModeAValIndexByte(this);
        this.aEAModes[i++] = new EAModeAValIndexWord(this);
        this.aEAModes[i++] = new EAModeAValIndexLong(this);

        this.aEAModes[i++] = new EAModeAbs16Byte(this);
        this.aEAModes[i++] = new EAModeAbs16Word(this);
        this.aEAModes[i++] = new EAModeAbs16Long(this);

        this.aEAModes[i++] = new EAModeAbs32Byte(this);
        this.aEAModes[i++] = new EAModeAbs32Word(this);
        this.aEAModes[i++] = new EAModeAbs32Long(this);

        this.aEAModes[i++] = new EAModePCValDispByte(this);
        this.aEAModes[i++] = new EAModePCValDispWord(this);
        this.aEAModes[i++] = new EAModePCValDispLong(this);

        this.aEAModes[i++] = new EAModePCValIndexByte(this);
        this.aEAModes[i++] = new EAModePCValIndexWord(this);
        this.aEAModes[i++] = new EAModePCValIndexLong(this);

        this.aEAModes[i++] = new EAModeImmediateByte(this);             // must match EAMODEINDEX_IMMEDIATE_BYTE
        this.aEAModes[i++] = new EAModeImmediateWord(this);             // must match EAMODEINDEX_IMMEDIATE_WORD
        this.aEAModes[i++] = new EAModeImmediateLong(this);             // must match EAMODEINDEX_IMMEDIATE_LONG
        this.aEAModes[i++] = new EAModeIllegal(this);                   // must match EAMODEINDEX_IMMEDIATE_ILLEGAL

        /**
         * The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
         * into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array.
         */
        this.abModes000 = new Array(256);
        this.initEAModeIndexArray(this.abModes000, 0x000);

        this.abModes007 = new Array(256);
        this.initEAModeIndexArray(this.abModes007, 0x007);

        this.abModes400 = new Array(256);
        this.initEAModeIndexArray(this.abModes400, 0x400);

        this.abModes401 = new Array(256);
        this.initEAModeIndexArray(this.abModes401, 0x401);

        this.abModes407 = new Array(256);
        this.initEAModeIndexArray(this.abModes407, 0x407);

        this.abModesC07 = new Array(256);
        this.initEAModeIndexArray(this.abModesC07, 0xC07);

        this.abModesC81 = new Array(256);
        this.initEAModeIndexArray(this.abModesC81, 0xC81);

        this.abModesD07 = new Array(256);
        this.initEAModeIndexArray(this.abModesD07, 0xD07);

        this.abModesD81 = new Array(256);
        this.initEAModeIndexArray(this.abModesD81, 0xD81);

        this.abModesMove = new Array(256);
        this.initEAModeIndexArrayInverted(this.abModesMove, 0x400);

        this.abModesAddSubX = new Array(6);
        this.abModesAddSubX[0] = CPU68K.EAMODEINDEX_DREG_BYTE;
        this.abModesAddSubX[1] = CPU68K.EAMODEINDEX_AREG_DECBYTE;
        this.abModesAddSubX[2] = CPU68K.EAMODEINDEX_DREG_WORD;
        this.abModesAddSubX[3] = CPU68K.EAMODEINDEX_AREG_DECWORD;
        this.abModesAddSubX[4] = CPU68K.EAMODEINDEX_DREG_LONG;
        this.abModesAddSubX[5] = CPU68K.EAMODEINDEX_AREG_DECLONG;
    }

    /**
     * initEAModeIndexArray(abModes, maskIllegal)
     *
     * The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
     * into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array
     * that CPUModes.InitModes() creates.  In fact, it is that function which calls US.
     *
     * @this {CPU68K}
     * @param {Array.<number>} abModes
     * @param {number} maskIllegal
     */
    initEAModeIndexArray(abModes, maskIllegal)
    {
        let i = 0;
        for (let ss = 0; ss < CPU68K.ssMAX && i < abModes.length; ss++) {
            let mmm, nnn;
            for (mmm = 0; mmm < 7; mmm++) {
                for (nnn = 0; nnn < 8; nnn++) {
                    if ((maskIllegal & (0x800 >> mmm)) != 0) {
                        abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                    }
                    else {
                        abModes[i++] = mmm * CPU68K.ssMAX + ss;
                        this.assert(mmm * CPU68K.ssMAX + ss <= 127, "initEAModeIndexArray: bad cast");
                    }
                }
            }
            for (nnn = 0; nnn < 5; nnn++) {
                if ((maskIllegal & (0x10 >> nnn)) != 0) {
                    abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                }
                else {
                    abModes[i++] = (mmm + nnn) * CPU68K.ssMAX + ss;
                    this.assert((mmm + nnn) * CPU68K.ssMAX + ss <= 127, "initEAModeIndexArray: bad cast");
                }
            }
            for (; nnn < 8; nnn++) {
                abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
            }
        }
        //
        // Any remaining entries correspond to an invalid size (ie, ss == 3), so make sure they are illegal, too.
        //
        while (i < abModes.length) {
            abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
        }
    }

    /**
     * initEAModeIndexArrayInverted(abModes, maskIllegal)
     *
     * The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
     * into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array
     * that initModes() creates.  In fact, it is that function which calls US.
     *
     * @this {CPU68K}
     * @param {Array.<number>} abModes
     * @param {number} maskIllegal
     */
    initEAModeIndexArrayInverted(abModes, maskIllegal)
    {
        let i = 0;
        for (let ss = 0; ss < CPU68K.ssMAX && i < abModes.length; ss++) {
            let rrr, www;
            for (rrr = 0; rrr < 8; rrr++) {
                for (www = 0; www < 7; www++) {
                    if ((maskIllegal & (0x800 >> www)) != 0) {
                        abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                    }
                    else {
                        abModes[i++] = www * CPU68K.ssMAX + ss;
                        this.assert(www * CPU68K.ssMAX + ss <= 127, "initEAModeIndexArrayInverted: bad cast");
                    }
                }
                if (rrr >= 5) {
                    abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                }
                else if ((maskIllegal & (0x10 >> rrr)) != 0) {
                    abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                }
                else {
                    abModes[i++] = (www +rrr) * CPU68K.ssMAX + ss;
                    this.assert((www + rrr) * CPU68K.ssMAX + ss <= 127, "initEAModeIndexArrayInverted: bad cast");
                }
            }
        }
        while (i < abModes.length) {
            abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
        }
    }

    /**
     * loadState(stateCPU)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {CPU68K}
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
        if (idDevice != this.idDevice || (version|0) !== (+CPU68K.VERSION|0)) {
            this.printf("CPU state mismatch (%s %3.2f)\n", idDevice, version);
            return false;
        }
        try {
            this.regA = stateCPU.shift();
            this.regD = stateCPU.shift();
            this.regPC = stateCPU.shift();
            this.regSSP = stateCPU.shift();
            this.regUSP = stateCPU.shift();
            this.flags = stateCPU.shift();
            this.setFlagsCCR(this.flags);
            this.fCPU = stateCPU.shift();
            this.fRestored = true;
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * saveState(stateCPU)
     *
     * @this {CPU68K}
     * @param {Array} stateCPU
     */
    saveState(stateCPU)
    {
        stateCPU.push(this.idDevice);
        stateCPU.push(+CPU68K.VERSION);
        stateCPU.push(this.regA);
        stateCPU.push(this.regD);
        stateCPU.push(this.regPC);
        stateCPU.push(this.regSSP);
        stateCPU.push(this.regUSP);
        stateCPU.push(this.getFlags());
        stateCPU.push(this.fCPU & (CPU68K.CPU_STOPPED | CPU68K.CPU_CHECKINTS));
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {CPU68K}
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
     * @this {CPU68K}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            /**
             * If the ROM wasn't loaded yet when initRegs() called resetRegs() (eg, the ROM's values are in a separate
             * file), the reset vectors weren't available, so if no saved state was restored either, reset again.
             */
            if (!this.fRestored) {
                this.resetRegs();
                this.fRestored = true;
            }
            this.time.start();
            if (this.inputDevice) this.inputDevice.setFocus();
        } else {
            this.time.stop();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {CPU68K}
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
     * @this {CPU68K}
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
     * @this {CPU68K}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        // TODO: Decide what bindings we want to support, and update them as appropriate.
    }

    /**
     * resetFlags(flagsNew)
     *
     * @this {CPU68K}
     * @param {number} flagsNew
     */
    resetFlags(flagsNew)
    {
        this.setFlagsSR(flagsNew);
        this.fCPU &= ~CPU68K.CPU_RESETFLAGS;
    }

    /**
     * getFlags()
     *
     * This function wants to perform unsigned 32-bit comparisons, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     */
    getFlags()
    {
        let flagsNew = this.flags & ~(CPU68K.FLAGS_EXTEND | CPU68K.FLAGS_NEGATIVE | CPU68K.FLAGS_ZERO | CPU68K.FLAGS_OVERFLOW | CPU68K.FLAGS_CARRY);

        // The following code is deliberate in-lining of the individual getFlag* functions, for performance

        if (this.flagZNew == 0) {
            flagsNew |= CPU68K.FLAGS_ZERO;
        }

        if (this.flagNNew < 0) {
            flagsNew |= CPU68K.FLAGS_NEGATIVE;
        }

        if ((this.flagCSrc >>> 0) > (this.flagCDst >>> 0)) {
            flagsNew |= CPU68K.FLAGS_CARRY;
        }

        if ((this.flagXSrc >>> 0) > (this.flagXDst >>> 0)) {
            flagsNew |= CPU68K.FLAGS_EXTEND;
        }

        if ((this.flagVNew < 0) != (this.flagVDst < 0) && (this.flagVSrc < 0) != (this.flagVDst < 0)) {
            flagsNew |= CPU68K.FLAGS_OVERFLOW;
        }

        // BUGBUG: No one should be depending on getFlags() propagating the arithmetic states to the CCR bits.
        // The main motivation for NOT propagating is that the debugger calls getFlags(), and we don't want the
        // debugger to have any side-effects (even supposedly innocuous ones). -JP
        //
        // return flags = flagsNew;

        return flagsNew;
    }

    /**
     * getFlagC()
     *
     * This function wants to perform an unsigned 32-bit comparison, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     * @returns {number}
     */
     getFlagC()
     {
         //
         // This needs to be an unsigned comparison, but unfortunately, Java doesn't
         // have unsigned data types.  The easiest thing to do is promote our variables to
         // 64-bit longs, and then mask them to 32 bits, insuring that we are comparing
         // positive values.
         //
         // NOTE: the 'L' appended to each 0xffffffff mask is essential, since otherwise
         // the masks would be treated as signed integers, and automatic promotion to longs
         // would turn them into 0xffffffffffffffff instead of 0x00000000ffffffff.
         //
         // return (((long)flagCSrc & 0xffffffffL) > ((long)flagCDst & 0xffffffffL))? -1 : 0;
         //
         return ((this.flagCSrc >>> 0) > (this.flagCDst >>> 0))? -1 : 0;
     }

    /**
     * getFlagV()
     *
     * @this {CPU68K}
     * @returns {number}
     */
     getFlagV()
     {
         return ((this.flagVNew < 0) != (this.flagVDst < 0) && (this.flagVSrc < 0) != (this.flagVDst < 0))? -1 : 0;
     }

    /**
     * getFlagZ()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagZ()
    {
        return (this.flagZNew == 0)? -1 : 0;
    }

    /**
     * getFlagN()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagN()
    {
        return (this.flagNNew < 0)? -1 : 0;
    }

    /**
     * getFlagX()
     *
     * This function wants to perform an unsigned 32-bit comparison, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagX()
    {
        //
        // This needs to be an unsigned comparison, but unfortunately, Java doesn't
        // have unsigned data types.  The easiest thing to do is promote our variables to
        // 64-bit longs, and then mask them to 32 bits, insuring that we are comparing
        // positive values.
        //
        // NOTE: the 'L' appended to each 0xffffffff mask is essential, since otherwise
        // the masks would be treated as signed integers, and automatic promotion to longs
        // would turn them into 0xffffffffffffffff instead of 0x00000000ffffffff.
        //
        // return (((long)flagXSrc & 0xffffffffL) > ((long)flagXDst & 0xffffffffL))? -1 : 0;
        //
        return ((this.flagXSrc >>> 0) > (this.flagXDst >>> 0))? -1 : 0;
    }

    /**
     * getFlagHI()
     *
     * This function wants to perform an unsigned 32-bit comparison, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagHI()
    {
        return (/* getFlagC() == 0 */ (this.flagCSrc >>> 0) <= (this.flagCDst >>> 0) && /* getFlagZ() == 0 */ this.flagZNew != 0)? -1 : 0;
    }

    /**
     * getFlagGE()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagGE()
    {
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (N && V || !N && !V)? -1 : 0;
    }

    /**
     * getFlagLT()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagLT()
    {
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (N && !V || !N && V)? -1 : 0;
    }

    /**
     * getFlagGT()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagGT()
    {
        let Z = this.getFlagZ() != 0;
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (N && V && !Z || !N && !V && !Z)? -1 : 0;
    }

    /**
     * getFlagLE()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagLE()
    {
        let Z = this.getFlagZ() != 0;
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (Z || N && !V || !N && V)? -1 : 0;
    }

    /**
     * getFlagIPM()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagIPM()
    {
        return (this.flags & CPU68K.FLAGS_IPM) >> CPU68K.FLAGS_IPM_SHIFT;
    }

    /**
     * setFlagsCCR(flags)
     *
     * Formerly setFlags(byte flags), setFlagsCCR() effectively sets the low byte of SR.
     *
     * @this {CPU68K}
     * @param {number} flags
     */
    setFlagsCCR(flags)
    {
        this.flagNNew = 0;
        this.flagCSrc = this.flagCDst = 0;
        this.flagVNew = this.flagVDst = 0;
        this.flagXSrc = this.flagXDst = 0;
        this.flagZNew = this.flagZTmp = 0;

        if ((flags & CPU68K.FLAGS_ZERO) == 0) {
            this.flagZNew = -1;
        }

        if ((flags & CPU68K.FLAGS_NEGATIVE) != 0) {
            this.flagNNew = -1;
        }

        if ((flags & CPU68K.FLAGS_CARRY) != 0) {
            this.flagCSrc = -1;
        }

        if ((flags & CPU68K.FLAGS_EXTEND) != 0) {
            this.flagXSrc = -1;
        }

        if ((flags & CPU68K.FLAGS_OVERFLOW) != 0) {
            this.flagVNew = this.flagVSrc = -1;
        }
    }

    /**
     * setFlagsSR(flags)
     *
     * Formerly setFlags(int flags), setFlagsSR() sets both the high and low (CCR) bytes of SR.
     *
     * Unlike the Java implementation, we also switch stacks whenever the supervisor bit changes, so that A7
     * is always the active stack pointer, and the inactive stack pointer is maintained in either regSSP or regUSP.
     *
     * @this {CPU68K}
     * @param {number} flags
     */
    setFlagsSR(flags)
    {
        flags &= CPU68K.FLAGS_MASK;

        // Before we blow away the original flag bits, let's see if the interrupt level
        // is dropping; if so, we'll want to set CPU_CHECKINTS....
        if ((flags & CPU68K.FLAGS_IPM) < (this.flags & CPU68K.FLAGS_IPM)) {
            this.fCPU |= CPU68K.CPU_CHECKINTS;
        }

        if ((flags ^ this.flags) & CPU68K.FLAGS_SU) {
            if (flags & CPU68K.FLAGS_SU) {
                this.regUSP = this.regA[7];
                this.regA[7] = this.regSSP;
            } else {
                this.regSSP = this.regA[7];
                this.regA[7] = this.regUSP;
            }
        }

        // Clear everything outside the CCR bits.
        this.flags &= CPU68K.FLAGS_CCR;

        // We probably don't need to carefully exclude the caller's CCR bits at this step,
        // since the CCR bits are always computed dynamically, but let's avoid any confusion.
        this.flags |= (flags & ~CPU68K.FLAGS_CCR);

        this.setFlagsCCR(flags);
    }

    /**
     * setFlagC(c)
     *
     * @this {CPU68K}
     * @param {number} c
     */
     setFlagC(c)
     {
         this.flagCSrc = this.flagCDst = 0;
         if (c != 0) {
             this.flagCSrc = -1;
         }
     }

    /**
     * setFlagV(v)
     *
     * @this {CPU68K}
     * @param {number} v
     */
    setFlagV(v)
    {
        this.flagVNew = this.flagVDst = 0;
        if (v != 0) {
            this.flagVNew = this.flagVSrc = -1;
        }
    }

    /**
     * setFlagZ(z)
     *
     * @this {CPU68K}
     * @param {number} z
     */
    setFlagZ(z)
    {
        this.flagZNew = (z == 0)? -1 : 0;
    }

    /**
     * setFlagN(n)
     *
     * @this {CPU68K}
     * @param {number} n
     */
    setFlagN(n)
    {
        this.flagNNew = (n != 0)? -1 : 0;
    }

    /**
     * setFlagX(x)
     *
     * @this {CPU68K}
     * @param {number} x
     */
    setFlagX(x)
    {
        this.flagXSrc = this.flagXDst = 0;
        if (x != 0) {
            this.flagXSrc = -1;
        }
    }

    /**
     * setFlagCX(c)
     *
     * @this {CPU68K}
     * @param {number} c
     */
    setFlagCX(c)
    {
        this.flagCSrc = this.flagCDst = 0;
        this.flagXSrc = this.flagXDst = 0;
        if (c != 0) {
            this.flagCSrc = this.flagXSrc = -1;
        }
    }

    /**
     * setORFlagsCCR(b)
     *
     * @this {CPU68K}
     * @param {number} b
     */
    setORFlagsCCR(b)                    // used to OR flags into CCR
    {
        this.setFlagsCCR(this.getFlags() | b);
    }

    /**
     * setORFlagsSR(s)
     *
     * @this {CPU68K}
     * @param {number} s
     */
    setORFlagsSR(s)                     // used to OR flags into SR (PRIVILEGED)
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        this.setFlagsSR(this.getFlags() | s);
    }

    /**
     * setANDFlagsCCR(b)
     *
     * @this {CPU68K}
     * @param {number} b
     */
    setANDFlagsCCR(b)                   // used to AND flags out of CCR
    {
        this.setFlagsCCR(this.getFlags() & b);
    }

    /**
     * setANDFlagsSR(s)
     *
     * @this {CPU68K}
     * @param {number} s
     */
    setANDFlagsSR(s)                    // used to AND flags out of SR (PRIVILEGED)
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        this.setFlagsSR(this.getFlags() & s);
    }

    /**
     * setEORFlagsCCR(b)
     *
     * @this {CPU68K}
     * @param {number} b
     */
    setEORFlagsCCR(b)                   // used to EOR flags in CCR
    {
        this.setFlagsCCR(this.getFlags() ^ b);
    }

    /**
     * setEORFlagsSR(s)
     *
     * @this {CPU68K}
     * @param {number} s
     */
    setEORFlagsSR(s)                    // used to EOR flags in SR (PRIVILEGED)
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        this.setFlagsSR(this.getFlags() ^ s);
    }

    /**
     * setFlagIPM(iLevel)
     *
     * @this {CPU68K}
     * @param {number} iLevel
     */
    setFlagIPM(iLevel)
    {
        this.flags &= ~CPU68K.FLAGS_IPM;
        this.flags |= (iLevel << CPU68K.FLAGS_IPM_SHIFT);
    }

    /**
     * initRegs()
     *
     * @this {CPU68K}
     */
    initRegs()
    {
        this.fCPU = 0;
        this.flags = 0;
        this.regPC = 0;                 // program counter
        this.regPCLast = 0;             // program counter for the previous instruction
        this.regPCTrap = 0;             // program counter for the last TRAP executed
        this.regSSP = 0;                // supervisor stack pointer (when in user mode)
        this.regUSP = 0;                // user stack pointer (when in supervisor mode)
        this.regD = [0,0,0,0,0,0,0,0];  // data registers
        this.regA = [0,0,0,0,0,0,0,0];  // address registers (regA[7] is always the active stack pointer)
        this.dataSrc = this.dataDst = 0;// internal data operands (exposed to the EAMode classes)
        this.flagNNew = this.flagZNew = this.flagZTmp = 0;
        this.flagCSrc = this.flagCDst = this.flagXSrc = this.flagXDst = 0;
        this.flagVSrc = this.flagVDst = this.flagVNew = 0;
        this.nCyclesRemain = 0;
        this.aInjections = [];          // queue of calls waiting to be injected (see injectTrap())
        this.injection = null;          // the injected call (if any) currently in progress
        this.addrVectors = this.config['resetVectors'];
        this.resetRegs();
    }

    /**
     * resetRegs()
     *
     * Simulates a 68K reset, which (in addition to resetting SR) loads SSP and PC from the reset vectors.
     *
     * On a real 68000, the reset vectors are at address 0, but on a DragonBall (as on many other 68K systems),
     * the boot ROM is temporarily decoded at that address, so we allow the config to specify where to find them
     * ('resetVectors'); if not specified, we fall back to the CPU's 'addrReset' setting for the initial PC.
     *
     * @this {CPU68K}
     */
    resetRegs()
    {
        for (let i = 0; i < this.regD.length; i++) {
            this.regD[i] = 0;
        }
        for (let i = 0; i < this.regA.length; i++) {
            this.regA[i] = 0;
        }
        this.regSSP = this.regUSP = 0;
        this.flags = CPU68K.FLAGS_SU;
        this.resetFlags(CPU68K.FLAGS_SU | CPU68K.FLAGS_IPM);
        this.regPC = this.addrReset;
        if (this.addrVectors != undefined) {
            this.regA[7] = this.getLong(this.addrVectors);
            this.regPC = this.getLong(this.addrVectors + 4);
        }
        this.regPCLast = this.regPC;
        this.nStep = 0;                 // instruction step counter
        this.iPendingException = CPU68K.EXCEPTION_NONE;
        this.addrPendingException = 0;  // set to exception-specific address, if any (eg, EA from EXCEPTION_ADDRESS_ERROR)
        this.abortInjections();
    }

    /**
     * setHWRegs(hwregs)
     *
     * Called by the device responsible for interrupt management (eg, PilotIO), so that we can call its
     * checkInterrupts() function whenever CPU_CHECKINTS has been set.
     *
     * @this {CPU68K}
     * @param {HWRegs} hwregs
     */
    setHWRegs(hwregs)
    {
        this.hwregs = hwregs;
    }

    /**
     * injectTrap(iTrap, aParms, done)
     *
     * Queues a "TRAP #15" call (eg, a PalmOS API) to be injected the next time the CPU is stopped (ie, idling on
     * a STOP instruction), which is the same approach that the original Java implementation used to make API calls
     * on behalf of scripts (see ScriptVarFunc.Call() and CPUThread.CheckStopEvents()).
     *
     * The call is made by pushing the following onto the stack: the address of the next instruction to execute (ie,
     * the instruction following the STOP), an OP_STOP_INJECT instruction, and a "TRAP #15" instruction with the given
     * selector, followed by all the parameters (in reverse order).  The PC is then set to the stacked TRAP instruction.
     * When the trap returns, the stacked OP_STOP_INJECT instruction restores the stack and PC and stops the CPU again,
     * at which point checkInjections() reports the results and issues the next queued call, if any.
     *
     * @this {CPU68K}
     * @param {number} iTrap (the API selector that follows the "TRAP #15" instruction)
     * @param {Array.<Array.<number>>} aParms (array of [value, size] pairs, where size is 2 or 4)
     * @param {function((Object|null))} done (called with {d0, a0} when the call returns, or null if aborted)
     */
    injectTrap(iTrap, aParms, done)
    {
        this.aInjections.push({iTrap, aParms, done});
    }

    /**
     * checkInjections()
     *
     * Called by execute() whenever the CPU is stopped and an injected call is either queued or in progress.
     *
     * @this {CPU68K}
     */
    checkInjections()
    {
        let injection = this.injection;
        if (injection) {
            if (!injection.result) return;
            this.injection = null;
            this.fCPU &= ~CPU68K.CPU_INJECTING;
            injection.done(injection.result);
        }
        injection = this.aInjections.shift();
        if (injection) {
            if ((this.getWord(this.regPC - 4) & 0xffff) != CPU68K.OP_STOP || !(this.flags & CPU68K.FLAGS_SU)) {
                this.printf("unable to inject %#06x at %#010x\n", injection.iTrap, this.regPC);
                injection.done(null);
                return;
            }
            this.pushLong(this.regPC);
            this.pushLong(CPU68K.OP_STOP_INJECT);
            this.pushLong((CPU68K.OP_TRAP_0xF << 16) | (injection.iTrap & 0xffff));
            let addrCall = this.regA[7];
            for (let i = injection.aParms.length - 1; i >= 0; i--) {
                let [value, size] = injection.aParms[i];
                if (size == 4) {
                    this.pushLong(value);
                } else {
                    this.pushWord(value);
                }
            }
            this.regPC = addrCall;
            this.fCPU &= ~CPU68K.CPU_STOPPED;
            this.fCPU |= CPU68K.CPU_INJECTING;
            this.injection = injection;
        }
    }

    /**
     * abortInjections()
     *
     * @this {CPU68K}
     */
    abortInjections()
    {
        let aInjections = this.aInjections;
        if (this.injection) aInjections.unshift(this.injection);
        this.aInjections = [];
        this.injection = null;
        this.fCPU &= ~CPU68K.CPU_INJECTING;
        for (let injection of aInjections) injection.done(null);
    }

    /**
     * addCycles(nCycles)
     *
     * @this {CPU68K}
     * @param {number} nCycles
     */
    addCycles(nCycles)
    {
        this.nCyclesRemain -= nCycles;
    }

    /**
     * callException(iVector, addrReturn)
     *
     * Now that we have access to all essential CPU components (flags, registers and memory),
     * we can implement CPU exception handling.  See the EXCEPTION_* definitions for a complete list
     * of supported exceptions.
     *
     * @this {CPU68K}
     * @param {number} iVector
     * @param {number} [addrReturn] (default is the current PC)
     */
    callException(iVector, addrReturn = this.regPC)
    {
        let handler = this.getLong(CPU68K.EVT_BASE + iVector*4);

        if (handler == 0) {
            this.printf("exception %#04x at %#010x: invalid handler\n", iVector, this.regPCLast);
            this.time.stop();
        }

        let flags = this.getFlags();
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.regUSP = this.regA[7];
            this.regA[7] = this.regSSP;
        }
        this.flags |= CPU68K.FLAGS_SU;          // indicates we're in supervisor mode now
        this.flags &= ~CPU68K.FLAGS_T1;         // the trace bit is also supposed to be cleared
        this.fCPU &= ~CPU68K.CPU_STOPPED;       // and any exception (eg, an interrupt) also terminates a STOP
        this.pushLong(addrReturn);
        this.pushWord(flags);
        this.regPC = handler;

        //
        //  BUGBUG: EXCEPTION_ACCESS_FAULT isn't being generated anywhere (I assume it should occur when an address
        //  outside valid ranges is encountered), and even EXCEPTION_ADDRESS_ERROR is only being generated in DEBUG builds,
        //  by MarkDataAccess_Debug().  Don't forget to call the "GenerateException(iVector, addr)" form whenever these
        //  particular exceptions are being generated. -JP
        //
        if (iVector == CPU68K.EXCEPTION_ACCESS_FAULT || iVector == CPU68K.EXCEPTION_ADDRESS_ERROR) {
            //
            //  BUGBUG: This is documented as "instruction register", but I'm not sure what that means; perhaps the
            //  16-bit instruction that triggered the exception?  Documentation is weak, but I didn't look too hard yet. -JP
            //
            this.pushWord(0);
            this.pushLong(this.addrPendingException);
            //
            //  BUGBUG: This is documented as "R/W" (bit 4), where Write=0 and Read=1, "I/N" (bit 3),
            //  where Instruction=0 and Not=1, and "Function Code" (bits 2-0), but the 68K Programmer's Reference Manual doesn't
            //  document. -JP
            //
            this.pushWord(0);
        }
    }

    /**
     * returnFromException()
     *
     * @this {CPU68K}
     */
    returnFromException()
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
        }
        let flags = this.popWord();
        this.regPC = this.popLong();
        this.setFlagsSR(flags);
    }

    /**
     * genException(iVector, sMessage)
     *
     * Record the emulated exception and then throw EXCEPTION_THROWN to force control to immediately return to
     * execute(), which will then call processException().  This is how the Java implementation (GenerateException)
     * aborted the current instruction as well.
     *
     * Internal "informational" exceptions use negative vector numbers; they don't have to interrupt the CPU.
     *
     * @this {CPU68K}
     * @param {number} iVector
     * @param {string} [sMessage]
     */
    genException(iVector, sMessage)
    {
        if (iVector < 0) {
            if (sMessage) this.printf(MESSAGE.CPU, "%s\n", sMessage);
            return;
        }
        this.iPendingException = iVector;
        this.sPendingException = sMessage;
        throw CPU68K.EXCEPTION_THROWN;
    }

    /**
     * processException()
     *
     * Called by execute() whenever genException() has thrown EXCEPTION_THROWN.
     *
     * The Java implementation always reset the PC to the beginning of the faulting instruction before calling
     * the exception handler, which is correct for most exceptions (eg, illegal instructions and privilege violations),
     * but for divide-by-zero, CHK, and TRAPV, the 68000 stacks the address of the NEXT instruction, so we do too.
     *
     * Exception vectors >= 0x100 are internal errors, which stop the machine.
     *
     * @this {CPU68K}
     */
    processException()
    {
        let iVector = this.iPendingException;
        this.iPendingException = CPU68K.EXCEPTION_NONE;
        if (iVector >= 0x100) {
            this.regPC = this.regPCLast;
            this.printf("%#010x: %s\n", this.regPCLast, this.sPendingException || this.sprintf("internal exception %#x", iVector));
            this.nCyclesRemain = 0;
            this.time.stop();
            return;
        }
        let addrReturn = this.regPCLast;
        if (iVector == CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO || iVector == CPU68K.EXCEPTION_CHK_INSTRUCTION || iVector == CPU68K.EXCEPTION_TRAPV_OVERFLOW) {
            addrReturn = this.regPC;
        }
        this.callException(iVector, addrReturn);
        this.addCycles(34);
    }

    /**
     * addX(width, dst, src)
     *
     * Performs an extended addition (dst + src + X) for ADDX, computing all the flags explicitly.
     *
     * The Java implementation folded X into the source operand and then relied on the normal "lazy" flag
     * calculations, which lost the carry whenever the adjusted source operand overflowed (eg, 0xff + X).
     *
     * Note that, as with all the extended operations, Z is cleared if the result is non-zero, unchanged otherwise.
     *
     * @this {CPU68K}
     * @param {number} width (8, 16, or 32)
     * @param {number} dst
     * @param {number} src
     * @returns {number}
     */
    addX(width, dst, src)
    {
        let res = (dst + src + (this.getFlagX()? 1 : 0))|0;
        let shift = 32 - width;
        let s = src << shift, d = dst << shift, r = res << shift;
        this.setFlagCX(((s & d) | (~r & d) | (s & ~r)) < 0? -1 : 0);
        this.setFlagV(((s & d & ~r) | (~s & ~d & r)) < 0? -1 : 0);
        if (r) this.flagZNew = r;
        this.flagNNew = r;
        return res;
    }

    /**
     * subX(width, dst, src)
     *
     * Performs an extended subtraction (dst - src - X) for SUBX and NEGX, computing all the flags explicitly.
     *
     * @this {CPU68K}
     * @param {number} width (8, 16, or 32)
     * @param {number} dst
     * @param {number} src
     * @returns {number}
     */
    subX(width, dst, src)
    {
        let res = (dst - src - (this.getFlagX()? 1 : 0))|0;
        let shift = 32 - width;
        let s = src << shift, d = dst << shift, r = res << shift;
        this.setFlagCX(((s & ~d) | (r & ~d) | (s & r)) < 0? -1 : 0);
        this.setFlagV(((~s & d & ~r) | (s & ~d & r)) < 0? -1 : 0);
        if (r) this.flagZNew = r;
        this.flagNNew = r;
        return res;
    }

    /**
     * addBCD(dst, src)
     *
     * Performs a BCD addition (dst + src + X), updating flags X, C, Z, N and V (N and V are officially undefined,
     * but we emulate the behavior of real hardware).
     *
     * @this {CPU68K}
     * @param {number} dst (byte)
     * @param {number} src (byte)
     * @returns {number} (byte)
     */
    addBCD(dst, src)
    {
        let res = (src & 0x0f) + (dst & 0x0f) + (this.getFlagX()? 1 : 0);
        let corf = (res > 9)? 6 : 0;
        res += (src & 0xf0) + (dst & 0xf0);
        let v = ~res;
        res += corf;
        let c = (res > 0x9f);
        if (c) res -= 0xa0;
        this.setBCDFlags(res, c, v & res);
        return res & 0xff;
    }

    /**
     * subBCD(dst, src)
     *
     * Performs a BCD subtraction (dst - src - X), updating flags X, C, Z, N and V (N and V are officially undefined,
     * but we emulate the behavior of real hardware).
     *
     * @this {CPU68K}
     * @param {number} dst (byte)
     * @param {number} src (byte)
     * @returns {number} (byte)
     */
    subBCD(dst, src)
    {
        let res = (dst & 0x0f) - (src & 0x0f) - (this.getFlagX()? 1 : 0);
        let corf = ((res >>> 0) > 0xf)? 6 : 0;
        res += (dst & 0xf0) - (src & 0xf0);
        let v = res, c = false;
        if ((res >>> 0) > 0xff) {
            res += 0xa0;
            c = true;
        } else if (res < corf) {
            c = true;
        }
        res = (res - corf) & 0xff;
        this.setBCDFlags(res, c, v & ~res);
        return res;
    }

    /**
     * negBCD(src)
     *
     * Performs a BCD negation (0 - src - X), updating flags X, C, Z, N and V (N and V are officially undefined,
     * but we emulate the behavior of real hardware).
     *
     * @this {CPU68K}
     * @param {number} src (byte)
     * @returns {number} (byte)
     */
    negBCD(src)
    {
        let res = (-src - (this.getFlagX()? 1 : 0))|0;
        if (res) {
            let v = res;
            if (((res | src) & 0x0f) == 0) res = (res & 0xf0) + 6;
            res = (res + 0x9a) & 0xff;
            this.setBCDFlags(res, true, v & ~res);
        } else {
            this.setFlagCX(0);
            this.setFlagV(0);
            this.flagNNew = 0;
        }
        return res;
    }

    /**
     * setBCDFlags(res, c, v)
     *
     * @this {CPU68K}
     * @param {number} res
     * @param {boolean} c
     * @param {number} v (bit 7 is the new V flag)
     */
    setBCDFlags(res, c, v)
    {
        this.setFlagCX(c? -1 : 0);
        if (res & 0xff) this.flagZNew = -1;     // Z is cleared if the result is non-zero, unchanged otherwise
        this.flagNNew = res << 24 >> 24;
        this.setFlagV(v & 0x80);
    }

    /**
     * setDivOverflow()
     *
     * On a 68000, a division overflow sets V and clears C; N and Z are officially undefined, but real hardware
     * leaves them unchanged.
     *
     * @this {CPU68K}
     */
    setDivOverflow()
    {
        this.setFlagV(-1);
        this.setFlagC(0);
    }

    /**
     * getByte(addr)
     *
     * Like the Java implementation, all reads are sign-extended.
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @returns {number} byte (8-bit) value at that address (sign-extended)
     */
    getByte(addr)
    {
        return this.busMemory.readData(addr & CPU68K.ADDR_MASK) << 24 >> 24;
    }

    /**
     * getWord(addr)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @returns {number} word (16-bit) value at that address (sign-extended)
     */
    getWord(addr)
    {
        return this.busMemory.readPair(addr & CPU68K.ADDR_MASK) << 16 >> 16;
    }

    /**
     * getLong(addr)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @returns {number} long (32-bit) value at that address (signed)
     */
    getLong(addr)
    {
        return this.busMemory.readQuad(addr & CPU68K.ADDR_MASK)|0;
    }

    /**
     * setByte(addr, b)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @param {number} b is the byte (8-bit) value to write (which we truncate to 8 bits to be safe)
     */
    setByte(addr, b)
    {
        this.busMemory.writeData(addr & CPU68K.ADDR_MASK, b & 0xff);
    }

    /**
     * setWord(addr, w)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @param {number} w is the word (16-bit) value to write (which we truncate to 16 bits to be safe)
     */
    setWord(addr, w)
    {
        this.busMemory.writePair(addr & CPU68K.ADDR_MASK, w & 0xffff);
    }

    /**
     * setLong(addr, l)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @param {number} l is the long (32-bit) value to write
     */
    setLong(addr, l)
    {
        this.busMemory.writeQuad(addr & CPU68K.ADDR_MASK, l|0);
    }

    /**
     * getPCByte()
     *
     * @this {CPU68K}
     * @returns {number} byte at the current PC; PC advanced by 1
     */
    getPCByte()
    {
        let b = this.getByte(this.regPC);
        this.regPC = (this.regPC + 1)|0;
        return b;
    }

    /**
     * getPCWord()
     *
     * @this {CPU68K}
     * @returns {number} word at the current PC (sign-extended); PC advanced by 2
     */
    getPCWord()
    {
        let w = this.getWord(this.regPC);
        this.regPC = (this.regPC + 2)|0;
        return w;
    }

    /**
     * getPCLong()
     *
     * @this {CPU68K}
     * @returns {number} long at the current PC; PC advanced by 4
     */
    getPCLong()
    {
        let l = this.getLong(this.regPC);
        this.regPC = (this.regPC + 4)|0;
        return l;
    }

    /**
     * popWord()
     *
     * Pop one word from the default stack.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    popWord()
    {
        let w = this.getWord(this.regA[7]);
        this.regA[7] = (this.regA[7] + 2)|0;
        return w;
    }

    /**
     * pushWord(data)
     *
     * Push one word onto the default stack.
     *
     * @this {CPU68K}
     * @param {number} data
     */
    pushWord(data)
    {
        this.regA[7] = (this.regA[7] - 2)|0;
        this.setWord(this.regA[7], data);
    }

    /**
     * popLong()
     *
     * Pop one long from the default stack.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    popLong()
    {
        let l = this.getLong(this.regA[7]);
        this.regA[7] = (this.regA[7] + 4)|0;
        return l;
    }

    /**
     * pushLong(data)
     *
     * Push one long onto the default stack.
     *
     * @this {CPU68K}
     * @param {number} data
     */
    pushLong(data)
    {
        this.regA[7] = (this.regA[7] - 4)|0;
        this.setLong(this.regA[7], data);
    }

    /**
     * toInstruction(addr, opcode)
     *
     * Returns a string representation of the specified instruction.
     *
     * @this {CPU68K}
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
     * Returns a string representation of the current CPU state.  For example, my original 68K Java emulator displayed:
     *
     *      D0=00002604 D1=000008fc D2=00000000 D3=00005e56
     *      D4=10c4b47e D5=00000000 D6=10c6e44c D7=00000001
     *      A0=fffff000 A1=10c068b6 A2=fffff000 A3=000071e0
     *      A4=00007abc A5=0000551e A6=000074b8 A7=000074a4 SR=2000 IC=1358690
     *      10c07148: 4e75            RTS                                             ;xnzvc
     *
     * @this {CPU68K}
     * @returns {string}
     */
    toString()
    {
        return this.sprintf("D0=%08x D1=%08x D2=%08x D3=%08x\nD4=%08x D5=%08x D6=%08x D7=%08x\nA0=%08x A1=%08x A2=%08x A3=%08x\nA4=%08x A5=%08x A6=%08x A7=%08x SR=%04x %s\n%s",
            this.regD[0], this.regD[1], this.regD[2], this.regD[3], this.regD[4], this.regD[5], this.regD[6], this.regD[7],
            this.regA[0], this.regA[1], this.regA[2], this.regA[3], this.regA[4], this.regA[5], this.regA[6], this.regA[7],
            this.getFlags(), this.getFlagString(), this.toInstruction(this.regPC));
    }

    /**
     * getFlagString()
     *
     * Returns the CCR flags in the same format my original Java debugger used (eg, "xnZvc").
     *
     * @this {CPU68K}
     * @returns {string}
     */
    getFlagString()
    {
        return (this.getFlagX()? 'X' : 'x') + (this.getFlagN()? 'N' : 'n') + (this.getFlagZ()? 'Z' : 'z') + (this.getFlagV()? 'V' : 'v') + (this.getFlagC()? 'C' : 'c');
    }
}

/**
 * Definitions ported from CPUDefs.java
 *
 * Exception vector assignments (see p.631)
 */
CPU68K.EXCEPTION_NONE                  = 0x00;  // vector 0 contains reset SSP, vector 1 contains reset PC
CPU68K.EXCEPTION_ACCESS_FAULT          = 0x02;  // aka "Bus Error"
CPU68K.EXCEPTION_ADDRESS_ERROR         = 0x03;
CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION   = 0x04;
CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO    = 0x05;
CPU68K.EXCEPTION_CHK_INSTRUCTION       = 0x06;
CPU68K.EXCEPTION_TRAPV_OVERFLOW        = 0x07;
CPU68K.EXCEPTION_PRIVILEGE_VIOLATION   = 0x08;
CPU68K.EXCEPTION_TRACE                 = 0x09;
CPU68K.EXCEPTION_LINE_A                = 0x0a;  // aka "Line 1010 Emulator"
CPU68K.EXCEPTION_LINE_F                = 0x0b;  // aka "Line 1111 Emulator"
CPU68K.EXCEPTION_UNINITIALIZED_IVR     = 0x0f;  // where interrupts go when the IVR hasn't been initialized yet

CPU68K.EXCEPTION_TRAP_0xF              = 0x2f;  // TRAP 0xf uses vector 0x2f (ie, TRAP n uses vector 0x2n)

CPU68K.TRAP_0xF_PALMOS_API             = 0xa000;// PalmOS encodes API numbers in the word following the OP_TRAP_0xF instruction, starting with this value

/**
 * Exception vector numbers < 0 are used for internal "warning exceptions" and can be ignored
 */
CPU68K.EXCEPTION_INVALID_CODE          = -1;
CPU68K.EXCEPTION_INVALID_DATA          = -2;
CPU68K.EXCEPTION_UNIMPLEMENTED_CODE    = -3;
CPU68K.EXCEPTION_UNINITIALIZED_DATA    = -4;

/**
 * Exception vector numbers >= 256 are used for internal "error exceptions" (eg, assertion failures) and cannot be ignored
 */
CPU68K.EXCEPTION_UNSUPP_INSTRUCTION    = 0x100; // unsupported instruction
CPU68K.EXCEPTION_INVALID_HANDLER       = 0x101; // exception handler is invalid (eg, corrupt vector contents)

/**
 * This is the object that genException() throws (and execute() catches) after recording the pending exception.
 */
CPU68K.EXCEPTION_THROWN                = {exception: "68K"};

/**
 * Used with Debugger's markDataAccess(), if supported.
 */
CPU68K.DATAACCESS_UNINIT               = 3;

/**
 * Opcodes that we have special checks for in various places...
 */
CPU68K.OP_TRAP                         = 0x4e40;
CPU68K.OP_TRAP_MASK                    = 0xfff0;
CPU68K.OP_TRAP_0xF                     = 0x4e4f;// vectors via EXCEPTION_TRAP_0xF
CPU68K.OP_TRAP_0xF_MASK                = 0xffff;
CPU68K.OP_LINK                         = 0x4e50;
CPU68K.OP_LINK_MASK                    = 0xfff8;
CPU68K.OP_STOP                         = 0x4e72;
CPU68K.OP_STOP_TRACE                   = 0x4e72fffd;
CPU68K.OP_STOP_FREEZE                  = 0x4e72fffe;
CPU68K.OP_STOP_INJECT                  = 0x4e72ffff;
CPU68K.OP_RTE                          = 0x4e73;
CPU68K.OP_RTS                          = 0x4e75;
CPU68K.OP_JSR                          = 0x4e80;
CPU68K.OP_JSR_MASK                     = 0xffc0;
CPU68K.OP_JSR_PC_REL                   = 0x4eba;
CPU68K.OP_JSR_PC_REL_INDEX             = 0x4ebb;
CPU68K.OP_JMP_PC_REL                   = 0x4efa;
CPU68K.OP_JMP_PC_REL_INDEX             = 0x4efb;
CPU68K.OP_BSR                          = 0x6100;
CPU68K.OP_BSR_MASK                     = 0xff00;
CPU68K.OP_MYBREAKPOINT                 = 0xf003;// my "unofficial" breakpoint instruction
CPU68K.OP_MYBREAKPOINT_MASK            = 0xffff;// mask needed only because opcode happens to be a signed value

/**
 * Descriptions of known memory locations/limits.  See CPUMem for a description of the entire
 * memory map.  Suffice to say here that we only provide for (at most) 32Mb unique addresses, because
 * CPUMem masks the top 7 bits from all effective addresses.  In other words, all unique memory
 * locations must be unique in the low 25 bits.  Also note that those locations are effectively
 * replicated 128 times throughout the entire 4Gb (32-bit) address space.  RAM_LIMIT is set to the
 * largest power-of-two RAM size (0x800000 or 8Mb) that fits within that unique address space (32Mb)
 * AND still leaves enough room for a ROM (typically starting around 0x10c00000, equivalent to 0xc00000
 * after masking, or 12Mb).
 *
 * RAM must also be mirrored at offset 0x10000000.  The exact extent and behavior (eg, write-protection)
 * of the mirrored region is TBD, until we have a better understanding of the hardware.  The fact that
 * we're masking the top two hex digits from all effective addresses provides sufficiently compatible
 * mirroring for now.
 */
CPU68K.EVT_BASE                = 0x00000000;
CPU68K.EVT_SIZE                = 4*256;
CPU68K.RAM_BASE                = 0x00000000;
CPU68K.RAM_LIMIT               = 0x00800000;    // 8Mb
CPU68K.RAM_MIRROR              = 0x10000000;
CPU68K.ADDR_MASK               = 0x01ffffff;    // all addresses are masked to 25 bits (32Mb)

/**
 * CPU states
 *
 * CPU_STARTED is set by CPUThread.Start(), and cleared by the CPU thread itself (inside CPUThread.run())
 * in response to seeing CPU_KILLED (at which time the CPU thread clears CPU_KILLED as well).  CPUThread.Stop()
 * only has work to do if CPU_STARTED is set.  CPUThread.Thaw() automatically calls CPUThread.Start() to
 * insure the CPU has been started.  Start() and Thaw(), as well as Resume(), along with Stop() and Freeze(),
 * are all synchronized.
 *
 * CPU_RUNNING is set by the CPU thread immediately before executing any opcodes (before ExecuteOpcodes()).
 * After it has finished executing some number of opcodes, it calls WaitResume(), which then clears
 * CPU_RUNNING.  WaitResume() then wakes up anyone who's blocked in Freeze(), Halt() or WaitStep(), as
 * they wait for their blocking request to be honored.  Freeze(), Halt(), WaitStep() and WaitResume() are
 * all synchronized.  WaitResume() returns and allows the CPU to continue running once it has been unblocked
 * or killed.
 *
 * NOTE: CPU_RUNNING is an internal state, used to detect when the CPU has acknowledged a pending freeze or
 * suspend or halt.  For example, if the CPU encounters a "STOP", CPU_RUNNING will be cleared, but only temporarily,
 * so use IsHalted() to accurately determine the CPU's "run state".
 *
 * CPU_FROZEN, CPU_SUSPENDED, CPU_STOPPED, and CPU_TRACING have similar effects (ie, to block CPU execution) but
 * are necessarily independent.  The CPU_SUSPENDED state may change as the needs of the device change (eg, it may
 * be set when a "STOP" instruction is encountered, and it may be cleared when a simulated hardware interrupt
 * fires), and the debugger is not allowed to modify that state.  On the other hand, CPU_TRACING is specifically
 * for the debugger alone to modify.  Unlike other debuggers that must use the hardware's trace flag, our
 * debugger prefers to not interfere with the hardware, making it possible even to debug software trace handlers.
 * As for CPU_FROZEN, that happens when the CPU needs to be stopped externally, such as when the device is being
 * powered down, memory is being reinitialized, calls are being injected, or possibly if/when we decide to replace
 * selected OS functions with native functions that must block the CPU until the native function is done.
 *
 * NOTE: CPU_SUSPENDED is not currently used with "STOP" instructions, largely because we aren't using an
 * external event (eg, separate thread) to drive our virtual timer hardware.  Instead, we are depending on
 * the CPU to execute instructions regularly, and then we're using the instruction count to simulate a
 * virtual cycle count that in turn drives the virtual timer(s).  That means the CPU thread can only yield/sleep
 * briefly on "STOP" instructions, otherwise the timer(s) would never advance.
 *
 * Also, it's easy to be confused about why we need CPU_TRACING *and* CPU_STEPPING *and* a stepping count.
 * Here's why: the debugger can't use CPU_SUSPENDED to stop the CPU because that would interfere with the
 * device's simulated suspend state (well, IF we were using CPU_SUSPENDED on "STOP" instructions that is),
 * so CPU_TRACING serves the same purpose, exclusively for the debugger.  Second, yes, a stepping count is the
 * only other thing the debugger would need to implement single-stepping, but that would require any code
 * monitoring changes in the CPU's state to check TWO variables;  by changing one more bit (CPU_STEPPING)
 * whenever the debugger also changes the stepping count, the state change can be detected more simply.
 *
 * Finally, why is CPU_WATCHALL also separate?  Because instruction watching is yet another state completely
 * independent of whether or not the device is suspended (eg, powered down, dozing, or whatever) and also
 * independent of whether or not the debugger is currently single-stepping, running free until a breakpoint, etc.
 */

CPU68K.CPU_NONE             = 0x00000000;
CPU68K.CPU_STARTED          = 0x00000001;   // CPU thread created
CPU68K.CPU_RUNNING          = 0x00000002;   // CPU thread executing opcodes
CPU68K.CPU_WAITING          = 0x00000004;   // CPU thread waiting (to be unfrozen, unsuspended or untraced)
CPU68K.CPU_KILLED           = 0x00000008;   // CPU thread needs to be shut down
CPU68K.CPU_FROZEN           = 0x00000010;   // block execution until unfrozen (asynchronous)
CPU68K.CPU_SUSPENDED        = 0x00000020;   // block execution until resumed (synchronous)
CPU68K.CPU_TRACING          = 0x00000040;   // used by debugger to block execution (independent of CPU_FROZEN and CPU_SUSPENDED)
CPU68K.CPU_STEPPING         = 0x00000080;   // used by debugger to single-step instruction(s) until step count goes to zero
CPU68K.CPU_STOPPED          = 0x00000100;   // this is how we currently implement STOP (instead of CPU_SUSPENDED)
CPU68K.CPU_WATCHHW          = 0x00000200;   // used by debugger to watch hardware accesses
CPU68K.CPU_WATCHALL         = 0x00000400;   // used by debugger to single-step and display every instruction
CPU68K.CPU_BREAKPOINT       = 0x00000800;   // ExecuteOpcodes detected one of the debugger's breakpoints
CPU68K.CPU_EXCEPTION        = 0x00001000;   // CPUThread.run() caught an exception
CPU68K.CPU_CHECKINTS        = 0x00002000;   // some condition has changed warranting interrupt check
CPU68K.CPU_CHECKLCD         = 0x00004000;   // some condition has changed warranting LCD screen check
CPU68K.CPU_TRACEONSTOP      = 0x00008000;   // auto-trace the CPU on STOP
CPU68K.CPU_FREEZEONSTOP     = 0x00010000;   // auto-freeze the CPU on STOP
CPU68K.CPU_INJECTING        = 0x00020000;   // in the process of injecting a call
CPU68K.CPU_PAGING           = 0x00040000;   // in the process of demand-paging some memory
CPU68K.CPU_MEMINIT          = 0x10000000;   // memory subsystem initialized (CPUMem.InitMem has been called)
CPU68K.CPU_VALID            = 0x20000000;   // CPU loaded from valid server

CPU68K.CPU_RESETFLAGS       = (CPU68K.CPU_STOPPED | CPU68K.CPU_WATCHHW | CPU68K.CPU_WATCHALL | CPU68K.CPU_BREAKPOINT | CPU68K.CPU_EXCEPTION | CPU68K.CPU_CHECKINTS | CPU68K.CPU_CHECKLCD | CPU68K.CPU_TRACEONSTOP | CPU68K.CPU_FREEZEONSTOP | CPU68K.CPU_INJECTING);
CPU68K.CPU_BREAKFLAGS       = (CPU68K.CPU_KILLED | CPU68K.CPU_FROZEN | CPU68K.CPU_SUSPENDED | CPU68K.CPU_STOPPED | CPU68K.CPU_TRACING | CPU68K.CPU_BREAKPOINT | CPU68K.CPU_CHECKINTS | CPU68K.CPU_CHECKLCD);

CPU68K.aByteInc         = [1, 1, 1, 1, 1, 1, 1, 2];
CPU68K.aByteQuick       = [8, 1, 2, 3, 4, 5, 6, 7];

CPU68K.ssBYTE           = 0;
CPU68K.ssWORD           = 1;
CPU68K.ssLONG           = 2;
CPU68K.ssMAX            = 3;

CPU68K.mmmDREG          = 0;
CPU68K.mmmAREG          = 1;
CPU68K.mmmAVAL          = 2;
CPU68K.mmmAVALINC       = 3;
CPU68K.mmmAVALDEC       = 4;
CPU68K.mmmAVALDISP      = 5;
CPU68K.mmmAVALINDEX     = 6;
CPU68K.mmmABS16         = 7;
CPU68K.mmmABS32         = 8;
CPU68K.mmmPCVALDISP     = 9;
CPU68K.mmmPCVALINDEX    = 10;
CPU68K.mmmIMMEDIATE     = 11;
CPU68K.mmmMAX           = 12;

CPU68K.EAMODEINDEX_DREG                 = 0;
CPU68K.EAMODEINDEX_DREG_BYTE            = 0;
CPU68K.EAMODEINDEX_DREG_WORD            = 1;
CPU68K.EAMODEINDEX_DREG_LONG            = 2;
CPU68K.EAMODEINDEX_ILLEGAL              = 3;
CPU68K.EAMODEINDEX_AREG_WORD            = 4;
CPU68K.EAMODEINDEX_AREG_LONG            = 5;
CPU68K.EAMODEINDEX_AREG_INCBYTE         = 9;
CPU68K.EAMODEINDEX_AREG_INCWORD         = 10;
CPU68K.EAMODEINDEX_AREG_INCLONG         = 11;
CPU68K.EAMODEINDEX_AREG_DECBYTE         = 12;
CPU68K.EAMODEINDEX_AREG_DECWORD         = 13;
CPU68K.EAMODEINDEX_AREG_DECLONG         = 14;
CPU68K.EAMODEINDEX_IMMEDIATE            = 33;
CPU68K.EAMODEINDEX_IMMEDIATE_BYTE       = 33;
CPU68K.EAMODEINDEX_IMMEDIATE_WORD       = 34;
CPU68K.EAMODEINDEX_IMMEDIATE_LONG       = 35;
CPU68K.EAMODEINDEX_IMMEDIATE_ILLEGAL    = 36;

/**
 * Definitions ported from CPUFlags.java
 */
CPU68K.FLAGS_CARRY        = 0x0001;
CPU68K.FLAGS_OVERFLOW     = 0x0002;
CPU68K.FLAGS_ZERO         = 0x0004;
CPU68K.FLAGS_NEGATIVE     = 0x0008;
CPU68K.FLAGS_EXTEND       = 0x0010;
CPU68K.FLAGS_CCR          = 0x001f;
CPU68K.FLAGS_RESERVED1    = 0x00e0;
CPU68K.FLAGS_IPM          = 0x0700;             // Interrupt Priority Mask
CPU68K.FLAGS_IPM_SHIFT    = 8;
CPU68K.FLAGS_RESERVED2    = 0x0800;
CPU68K.FLAGS_MI           = 0x1000;             // (always 0 on 68000)
CPU68K.FLAGS_SU           = 0x2000;             // 1 == supervisor mode
CPU68K.FLAGS_T0           = 0x4000;             // (always 0 on 68000)
CPU68K.FLAGS_T1           = 0x8000;             // 1 == trace on any instruction
CPU68K.FLAGS_MASK         = 0xa71f;             // all the SR bits that actually exist on a 68000

CPU68K.CLASSES["CPU68K"] = CPU68K;
