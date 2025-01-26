/**
 * @fileoverview 68K Effective Addressing Modes
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU68K   from "./cpu68k.js";

/**
 * All EAMode subclasses must implement the following abstract methods:
 *
 *  getEA: calculate and set an effective address (ea)
 *  getData: get data from the effective address (ea)
 *  setData: set data at the effective address (ea)
 *  updateFlagZ: update Z flag
 *  updateFlagV: update V flag (WARNING: updateFlagZ must be called first)
 *
 * The EAMode class already provides wrappers for combining the above methods into frequently-used operations
 * (eg, getEAData() instead of getEA() + getData()).
 */
export default class EAMode
{
    /**
     * EAMode(cpu, mask, sign, width, type)
     *
     * @this {EAMode}
     * @param {CPU68K} cpu
     * @param {number} mask
     * @param {number} sign
     * @param {number} width
     * @param {number} type
     */
    constructor(cpu, mask, sign, width, type)
    {
        this.cpu = cpu;
        this.ea = 0;
        this.mask = mask;
        this.sign = sign;
        this.width = width;
        this.cycle2l = type * 2;
        this.cycle4l = type * 4;
        this.cycle2ADI = this.cycle2Dl = this.cycle4Aw = this.cycle4AD = this.cycle2ADl = this.cycle4ADl = 0;
    }

    /**
     * getEA(nnn)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @returns {number}
     */
    getEA(nnn) {
        return this.ea = nnn;
    }

    /**
     * getData()
     *
     * @this {EAMode}
     * @returns {number}
     */
    getData() {
        return 0;
    }

    /**
     * setData(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
     setData(data) {
     }

    /**
     * updateFlagZ(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlagZ(data) {
    }

    /**
     * updateFlagV()
     *
     * @this {EAMode}
     */
    updateFlagV() {
    }

    /**
     * advanceEA(nnn)
     *
     * @this {EAMode}
     * @param {number} nnn
     */
    advanceEA(nnn)
    {
        let nCycles = this.cpu.nCyclesDebug;
        this.getEA(nnn);
        this.cpu.nCyclesDebug = nCycles;
    }

    /**
     * getEAData(nnn)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @returns {number}
     */
    getEAData(nnn)
    {
        this.getEA(nnn);
        return this.getData();
    }

    /**
     * setEAData(nnn, data)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @param {number} data
     */
    setEAData(nnn, data)
    {
        this.getEA(nnn);
        this.setData(data);
    }

    /**
     * updateFlagsZNClearCV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlagsZNClearCV(data)
    {
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    /**
     * setDataFlagsZNClearV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsZNClearV(data)
    {
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVDst = 0;
        this.cpu.flagVNew = 0;
    }

    /**
     * setDataFlagsZNClearCV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsZNClearCV(data)
    {
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    /**
     * setDataFlagsExceptXClearCV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsExceptXClearCV(data)
    {
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    /**
     * setEADataFlagsZNClearCV(nnn, data)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @param {number} data
     */
    setEADataFlagsZNClearCV(nnn, data)
    {
        this.getEA(nnn);
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    // The rest of the Flags functions require that both dataSrc and dataDst be set first

    /**
     * updateFlags(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlags(data)
    {
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.updateFlagV();
        this.cpu.flagCSrc = this.cpu.flagXSrc = this.cpu.flagVSrc;
        this.cpu.flagCDst = this.cpu.flagXDst = this.cpu.flagVDst;
    }

    /**
     * updateFlagsExceptX(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlagsExceptX(data)
    {
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.updateFlagV();
        this.cpu.flagCSrc = this.cpu.flagVSrc;
        this.cpu.flagCDst = this.cpu.flagVDst;
    }

    /**
     * setDataFlags(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlags(data)
    {
        this.setData(data);
        this.updateFlags(data);
    }

    /**
     * setDataFlagsForAdd(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsForAdd(data)
    {
        this.setData(data);
        this.updateFlags(data);
        this.cpu.flagVSrc = ~this.cpu.flagVSrc;
        this.cpu.flagCDst = this.cpu.flagXDst = ~this.cpu.flagCDst;
    }

    /**
     * getIndexAddr(base)
     *
     * @this {EAMode}
     * @param {number} base
     * @returns {number}
     */
    getIndexAddr(base)
    {
        let addr = this.cpu.getPCWord();
        let i = (addr & 0x7000) >> 12;

        if ((addr & 0x0800) != 0) {
            if ((addr & 0x8000) != 0) {
                return base + this.cpu.regA[i] + (addr << 24 >> 24);
            }
            else {
                return base + this.cpu.regD[i] + (addr << 24 >> 24);
            }
        }
        else {
            if ((addr & 0x8000) != 0) {
                return base + (this.cpu.regA[i] << 16 >> 16) + (addr << 24 >> 24);
            }
            else {
                return base + (this.cpu.regD[i] << 16 >> 16) + (addr << 24 >> 24);
            }
        }
    }

}

export class EAModeIllegal extends EAMode {
    constructor(cpu) {
        super(cpu, 0, 0, 0, 0);
    }

    getEA(nnn) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
        return 0;
    }

    getData() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
        return 0;
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

export class EAModeDRegByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
        this.cycle2ADI = 2;
        this.cycle4AD = 4;
    }

    getData() {
        return this.cpu.regD[this.ea] << 24 >> 24;
    }

    getEAData(nnn) {                            // overrides default method, for speed
        return this.cpu.regD[this.ea = nnn] << 24 >> 24;
    }

    setData(data) {
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xff) | (data & 0xff);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }

    setEADataFlagsZNClearCV(nnn, data) {        // overrides default method, for speed
        this.ea = nnn;
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xff) | (data & 0xff);
        this.cpu.flagZNew = data << 24 >> 24;
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }
}
export class EAModeDRegWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
        this.cycle2ADI = 2;
        this.cycle4AD = 4;
    }

    getData() {
        return this.cpu.regD[this.ea] << 16 >> 16;
    }

    getEAData(nnn) {                            // overrides default method, for speed
        return this.cpu.regD[this.ea = nnn] << 16 >> 16;
    }

    setData(data) {
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xffff) | (data & 0xffff);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }

    setEADataFlagsZNClearCV(nnn, data) {        // overrides default method, for speed
        this.ea = nnn;
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xffff) | (data & 0xffff);
        this.cpu.flagZNew = data << 16 >> 16;
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }
}
export class EAModeDRegLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
        this.cycle2Dl = this.cycle2ADI = this.cycle2ADl = 2;
        this.cycle4AD = this.cycle4ADl = 4;
    }

    getData() {
        return this.cpu.regD[this.ea];
    }

    getEAData(nnn) {                            // overrides default method, for speed
        return this.cpu.regD[this.ea = nnn];
    }

    setData(data) {
        this.cpu.regD[this.ea] = data;
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }

    setEADataFlagsZNClearCV(nnn, data) {        // overrides default method, for speed
        this.ea = nnn;
        this.cpu.regD[this.ea] = data;
        this.cpu.flagZNew = data;
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }
}

export class EAModeARegWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
        this.cycle2ADI = 2;
        this.cycle4Aw = this.cycle4AD = 4;
    }

    getData() {
        return this.cpu.regA[this.ea] << 16 >> 16;
    }

    setData(data) {
        this.cpu.regA[this.ea] = data;          // NOTE: the entire A register is always updated, and byte operations are illegal
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}
export class EAModeARegLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
        this.cycle2ADI = this.cycle2ADl = 2;
        this.cycle4AD = this.cycle4ADl = 4;
    }

    getData() {
        return this.cpu.regA[this.ea];
    }

    setData(data) {
        this.cpu.regA[this.ea] = data;
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }

    setEAData(nnn, data) {                      // overrides default method, for speed
        this.cpu.regA[this.ea = nnn] = data;
    }
}

export class EAModeAValByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        return this.ea = this.cpu.regA[nnn];
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}
export class EAModeAValWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        return this.ea = this.cpu.regA[nnn];
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}
export class EAModeAValLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.regA[nnn];
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeAValIncByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regA[nnn];
        this.cpu.regA[nnn] += CPU68K.aByteInc[nnn];
        return this.ea;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

export class EAModeAValIncWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regA[nnn];
        this.cpu.regA[nnn] += 2;
        return this.ea;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}
export class EAModeAValIncLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        this.ea = this.cpu.regA[nnn];
        this.cpu.regA[nnn] += 4;
        return this.ea;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeAValDecByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);                  // BUGBUG: 6 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
        this.cpu.regA[nnn] -= CPU68K.aByteInc[nnn];
        return this.ea = this.cpu.regA[nnn];
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

export class EAModeAValDecWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);                  // BUGBUG: 6 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
        this.cpu.regA[nnn] -= 2;
        return this.ea = this.cpu.regA[nnn];
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModeAValDecLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);                  // BUGBUG: 10 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
        this.cpu.regA[nnn] -= 4;
        return this.ea = this.cpu.regA[nnn];
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeAValDispByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.regA[nnn] + this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

export class EAModeAValDispWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.regA[nnn] + this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModeAValDispLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.regA[nnn] + this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeAValIndexByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regA[nnn]);
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

export class EAModeAValIndexWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regA[nnn]);
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModeAValIndexLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(14);
        return this.ea = this.getIndexAddr(this.cpu.regA[nnn]);
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeAbs16Byte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}
export class EAModeAbs16Word extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModeAbs16Long extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeAbs32Byte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.getPCLong();
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}
export class EAModeAbs32Word extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.getPCLong();
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModeAbs32Long extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(16);
        return this.ea = this.cpu.getPCLong();
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModePCValDispByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.regPC + this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

export class EAModePCValDispWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.regPC + this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModePCValDispLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.regPC + this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModePCValIndexByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regPC);
    }

    advanceEA(nnn) {
        this.ea += 1;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

export class EAModePCValIndexWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regPC);
    }

    advanceEA(nnn) {
        this.ea += 2;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

export class EAModePCValIndexLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(14);
        return this.ea = this.getIndexAddr(this.cpu.regPC);
    }

    advanceEA(nnn) {
        this.ea += 4;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst;
        this.cpu.flagVSrc = this.cpu.dataSrc;
    }
}

export class EAModeImmediateByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
        this.cycle2ADI = 2;
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC+1;
        this.cpu.regPC += 2;
        return this.ea;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    getEAData(nnn) {                            // overrides default method, for speed
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC+1;
        return this.cpu.getPCWord() << 24 >> 24;
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

export class EAModeImmediateWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
        this.cycle2ADI = 2;
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC;
        this.cpu.regPC += 2;
        return this.ea;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    getEAData(nnn) {                            // overrides default method, for speed
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC;
        return this.cpu.getPCWord();
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

export class EAModeImmediateLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
        this.cycle2ADI = 2;
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        this.ea = this.cpu.regPC;
        this.cpu.regPC += 4;
        return this.ea;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    getEAData(nnn) {                            // overrides default method, for speed
        this.cpu.addCycles(8);
        this.ea = this.cpu.regPC;
        return this.cpu.getPCLong();
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}
