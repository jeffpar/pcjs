/**
 * @fileoverview 68K Debugger
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/* eslint-disable no-labels */
/* eslint-disable no-extra-label */

import CPU68K from "./cpu68k.js";
import Debugger from "../../../../modules/v3/debugger.js";

/**
 * 68K Debugger
 *
 * @class Dbg68K
 * @unrestricted
 */
export default class Dbg68K extends Debugger {
    /**
     * Dbg68K(idMachine, idDevice, config)
     *
     * @this {Dbg68K}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.maxOpcodeLength = 6;

        let i = 0;
        this.aEAModes = [];
        this.aEAModes[i++] = new DbgModeDRegByte(this);         // must match EAMODEINDEX_DREG_BYTE
        this.aEAModes[i++] = new DbgModeDRegWord(this);         // must match EAMODEINDEX_DREG_WORD
        this.aEAModes[i++] = new DbgModeDRegLong(this);         // must match EAMODEINDEX_DREG_LONG

        this.aEAModes[i++] = new DbgModeIllegal(this);          // must match EAMODEINDEX_ILLEGAL
        this.aEAModes[i++] = new DbgModeARegWord(this);         // must match EAMODEINDEX_AREG_WORD
        this.aEAModes[i++] = new DbgModeARegLong(this);         // must match EAMODEINDEX_AREG_LONG

        this.aEAModes[i++] = new DbgModeAValByte(this);
        this.aEAModes[i++] = new DbgModeAValWord(this);
        this.aEAModes[i++] = new DbgModeAValLong(this);

        this.aEAModes[i++] = new DbgModeAValIncByte(this);      // must match EAMODEINDEX_AREG_INCBYTE
        this.aEAModes[i++] = new DbgModeAValIncWord(this);      // must match EAMODEINDEX_AREG_INCWORD
        this.aEAModes[i++] = new DbgModeAValIncLong(this);      // must match EAMODEINDEX_AREG_INCLONG

        this.aEAModes[i++] = new DbgModeAValDecByte(this);      // must match EAMODEINDEX_AREG_DECBYTE
        this.aEAModes[i++] = new DbgModeAValDecWord(this);      // must match EAMODEINDEX_AREG_DECWORD
        this.aEAModes[i++] = new DbgModeAValDecLong(this);      // must match EAMODEINDEX_AREG_DECLONG

        this.aEAModes[i++] = new DbgModeAValDispByte(this);
        this.aEAModes[i++] = new DbgModeAValDispWord(this);
        this.aEAModes[i++] = new DbgModeAValDispLong(this);

        this.aEAModes[i++] = new DbgModeAValIndexByte(this);
        this.aEAModes[i++] = new DbgModeAValIndexWord(this);
        this.aEAModes[i++] = new DbgModeAValIndexLong(this);

        this.aEAModes[i++] = new DbgModeAbs16Byte(this);
        this.aEAModes[i++] = new DbgModeAbs16Word(this);
        this.aEAModes[i++] = new DbgModeAbs16Long(this);

        this.aEAModes[i++] = new DbgModeAbs32Byte(this);
        this.aEAModes[i++] = new DbgModeAbs32Word(this);
        this.aEAModes[i++] = new DbgModeAbs32Long(this);

        this.aEAModes[i++] = new DbgModePCValDispByte(this);
        this.aEAModes[i++] = new DbgModePCValDispWord(this);
        this.aEAModes[i++] = new DbgModePCValDispLong(this);

        this.aEAModes[i++] = new DbgModePCValIndexByte(this);
        this.aEAModes[i++] = new DbgModePCValIndexWord(this);
        this.aEAModes[i++] = new DbgModePCValIndexLong(this);

        this.aEAModes[i++] = new DbgModeImmediateByte(this);    // must match EAMODEINDEX_IMMEDIATE_BYTE
        this.aEAModes[i++] = new DbgModeImmediateWord(this);    // must match EAMODEINDEX_IMMEDIATE_WORD
        this.aEAModes[i++] = new DbgModeImmediateLong(this);    // must match EAMODEINDEX_IMMEDIATE_LONG
        this.aEAModes[i++] = new DbgModeIllegal(this);          // must match EAMODEINDEX_IMMEDIATE_ILLEGAL
    }

    /**
     * break(addr, fArmed)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {boolean} fArmed
     * @returns {boolean}
     */
    break(addr, fArmed)
    {
        return false;       // TODO
    }

    /**
     * markDataAccess(addr, length, iAccess)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {number} length
     * @param {number} iAccess
     */
    markDataAccess(addr, length, iAccess)
    {
        // TODO
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands 68K instructions.
     *
     * @this {Dbg68K}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let sBytes = null, sOp = null, sSrc = null, sDst = null;
        let op1 = 0, op2, ss, rrr, nnn, iMask, iModeSrc, iModeDst;
        let fError = false, fDispEA = false;
        let eaModeSrc = null, eaModeDst = null;

        try {

            this.curPC = address;                       // use specified addr instead of cpu.pc
            op1 = this.cpu.getWord(this.curPC);       // get next instruction (don't forget this can be a signed integer if the opcode is a signed word)
            this.curPC += 2;

            ss = CPU68K.ssBYTE;
            nnn = op1 & 0x7;
            rrr = (op1 >> 9) & 0x7;

    stage1: switch ((op1 >> 12) & 0xf) {

            case 0x0:
                //  case 0x0000:   ori      [00000000sswwwnnn, format ????????sswwwnnn]
                //  case 0x003c:   ori      [0000000000111100, format none]
                //  case 0x007c:   ori      [0000000001111100, format none]
                //  case 0x0100:   btst     [0000rrr100yyynnn, format ??????????yyynnn]
                //  case 0x0108:   movep    [0000rrr100001nnn, format none]
                //  case 0x0140:   bchg     [0000rrr101bbbnnn, format ??????????bbbnnn]
                //  case 0x0148:   movep    [0000rrr101001nnn, format none]
                //  case 0x0180:   bclr     [0000rrr110bbbnnn, format ??????????bbbnnn]
                //  case 0x0188:   movep    [0000rrr110001nnn, format none]
                //  case 0x01c0:   bset     [0000rrr111bbbnnn, format ??????????bbbnnn]
                //  case 0x01c8:   movep    [0000rrr111001nnn, format none]
                //  case 0x0200:   andi     [00000010sswwwnnn, format ????????sswwwnnn]
                //  case 0x023c:   andi     [0000001000111100, format none]
                //  case 0x027c:   andi     [0000001001111100, format none]
                //  case 0x0400:   subi     [00000100sswwwnnn, format ????????sswwwnnn]
                //  case 0x0600:   addi     [00000110sswwwnnn, format ????????sswwwnnn]
                //  case 0x0800:   btst     [0000100000zzznnn, format ??????????zzznnn]
                //  case 0x0840:   bchg     [0000100001bbbnnn, format ??????????bbbnnn]
                //  case 0x0880:   bclr     [0000100010bbbnnn, format ??????????bbbnnn]
                //  case 0x08c0:   bset     [0000100011bbbnnn, format ??????????bbbnnn]
                //  case 0x0a00:   eori     [00001010sswwwnnn, format ????????sswwwnnn]
                //  case 0x0a3c:   eori     [0000101000111100, format none]
                //  case 0x0a7c:   eori     [0000101001111100, format none]
                //  case 0x0c00:   cmpi     [00001100sswwwnnn, format ????????sswwwnnn]

                iModeSrc = CPU68K.EAMODEINDEX_DREG_LONG;

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    //  case 0x0000:   ori      [....0000sswwwnnn, format ????????sswwwnnn]
                    //  case 0x003c:   ori      [....000000111100, format none]
                    //  case 0x007c:   ori      [....000001111100, format none]
                    sOp = "ORI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        sDst = "CCR";
                    } else if ((op1 & 0x00c0) == 0x0040) {
                        sDst = "SR";
                    }
                    break stage1;

                case 0x2:
                    //  case 0x0200:   andi     [....0010sswwwnnn, format ????????sswwwnnn]
                    //  case 0x023c:   andi     [....001000111100, format none]
                    //  case 0x027c:   andi     [....001001111100, format none]
                    sOp = "ANDI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        sDst = "CCR";
                    } else if ((op1 & 0x00c0) == 0x0040) {
                        sDst = "SR";
                    }
                    break stage1;

                case 0x4:
                    //  case 0x0400:   subi     [....0100sswwwnnn, format ????????sswwwnnn]
                    sOp = "SUBI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    break stage1;

                case 0x6:
                    //  case 0x0600:   addi     [....0110sswwwnnn, format ????????sswwwnnn]
                    sOp = "ADDI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    break stage1;

                case 0x8:
                    //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn]
                    //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn]
                    //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn]
                    //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn]
                    iModeSrc = CPU68K.EAMODEINDEX_IMMEDIATE_WORD;
                    rrr = 0;
                    break;

                case 0xa:
                    //  case 0x0a00:   eori     [....1010sswwwnnn, format ????????sswwwnnn]
                    //  case 0x0a3c:   eori     [....101000111100, format none]
                    //  case 0x0a7c:   eori     [....101001111100, format none]
                    sOp = "EORI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        sDst = "CCR";
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        sDst = "SR";
                    }
                    break stage1;

                case 0xc:
                    //  case 0x0c00:   cmpi     [....1100sswwwnnn, format ????????sswwwnnn]
                    sOp = "CMPI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    break stage1;

                case 0xe:                   // undefined
                    break stage1;

                case 0x1:
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn]
                    //  case 0x0108:   movep    [....rrr100001nnn, format none]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none]
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
                    //  case 0x0108:   movep    [....rrr100001nnn, format none]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none]
                    sOp = "MOVEP";  sSrc = "???";
                }
                else {
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn]

                    eaModeSrc = this.aEAModes[iModeSrc];
                    sSrc = eaModeSrc.getString(rrr);
                    if ((op1 & 0x0038) == 0x0000) {
                        //dataSrc = (1 << (dataSrc & 31));
                        eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {
                        //dataSrc = (1 << (dataSrc & 7));
                        if ((op1 & 0x00c0) == 0) {
                            eaModeDst = this.aEAModes[this.cpu.abModes401[op1 & 0x3f]];
                        } else {
                            eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0x3f]];
                        }
                        sDst = eaModeDst.getString(nnn);
                    }
                    switch ((op1 >> 6) & 0x3) {
                    case 0:
                        //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn]
                        sOp = "BTST";
                        break;
                    case 1:
                        //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn]
                        sOp = "BCHG";
                        break;

                    case 2:
                        //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn]
                        sOp = "BCLR";
                        break;

                    case 3:
                        //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn]
                        sOp = "BSET";
                        break;
                    }
                }
                break stage1;

            case 0x2:
                ss++;   // fall through...

            case 0x3:
                ss++;   // fall through...

            case 0x1:
                //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn]
                //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn]
                ss <<= 6;
                if ((op1 & 0x01c0) != 0x0040) {
                    //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn]
                    sOp = "MOVE";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[ss + (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[this.cpu.abModesMove[ss + ((op1 >> 6) & 0x3f)]];
                    sDst = eaModeDst.getString(rrr);
                }
                else {
                    //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn]
                    sOp = "MOVEA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[ss + (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_AREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0x4:
                //  case 0x4000:   negx     [01000000sswwwnnn, format ????????sswwwnnn]
                //  case 0x40c0:   move     [0100000011wwwnnn, format ??????????wwwnnn]
                //  case 0x4180:   chk      [0100rrr110xxxnnn, format ??????????xxxnnn, p.174]
                //  case 0x41c0:   lea      [0100rrr111pppnnn, format ??????????pppnnn, p.215]
                //  case 0x4200:   clr      [01000010sswwwnnn, format ????????sswwwnnn]
                //  case 0x42c0:   move     [0100001011wwwnnn, format ??????????wwwnnn]
                //  case 0x4400:   neg      [01000100sswwwnnn, format ????????sswwwnnn]
                //  case 0x44c0:   move     [0100010011xxxnnn, format ??????????xxxnnn]
                //  case 0x4600:   not      [01000110sswwwnnn, format ????????sswwwnnn]
                //  case 0x46c0:   move     [0100011011xxxnnn, format ??????????xxxnnn]
                //  case 0x4800:   nbcd     [0100100000wwwnnn, format ??????????wwwnnn]
                //  case 0x4840:   pea      [0100100001pppnnn, format ??????????pppnnn]
                //  case 0x4840:   swap     [0100100001000nnn, format none]
                //  case 0x4880:   ext      [0100100010000nnn, format none]
                //  case 0x4880:   movem    [010010001kuuunnn, format ?????????kuuunnn, p.233]
                //  case 0x48c0:   ext      [0100100011000nnn, format none]
                //  case 0x49c0:   ext      [0100100111000nnn, format none]
                //  case 0x4a00:   tst      [01001010ssmmmnnn, format ????????ssmmmnnn]
                //  case 0x4ac0:   tas      [0100101011wwwnnn, format ??????????wwwnnn]
                //  case 0x4afc:   illegal  [0100101011111100, format none]
                //  case 0x4c80:   movem    [010011001ktttnnn, format ?????????ktttnnn, p.233]
                //  case 0x4e40:   trap     [010011100100vvvv, format none]
                //  case 0x4e50:   link     [0100111001010nnn, format none]
                //  case 0x4e58:   unlk     [0100111001011nnn, format none]
                //  case 0x4e60:   move     [0100111001100nnn, format none]
                //  case 0x4e68:   move     [0100111001101nnn, format none]
                //  case 0x4e70:   reset    [0100111001110000, format none]
                //  case 0x4e71:   nop      [0100111001110001, format none]
                //  case 0x4e72:   stop     [0100111001110010, format none]
                //  case 0x4e73:   rte      [0100111001110011, format none]
                //  case 0x4e75:   rts      [0100111001110101, format none]
                //  case 0x4e76:   trapv    [0100111001110110, format none]
                //  case 0x4e77:   rtr      [0100111001110111, format none]
                //  case 0x4e80:   jsr      [0100111010pppnnn, format ??????????pppnnn]
                //  case 0x4ec0:   jmp      [0100111011pppnnn, format ??????????pppnnn]

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4000:   negx     [....0000sswwwnnn, format ????????sswwwnnn]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        sOp = "NEGX";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sSrc = eaModeDst.getString(nnn); // - GetFlagX();
                    }
                    else {                  // MOVE SR,%s
                        //  case 0x40c0:   move     [....000011wwwnnn, format ??????????wwwnnn]
                        sOp = "MOVE";  sSrc = "SR";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sDst = eaModeDst.getString(nnn);
                    }
                    break stage1;

                case 0x2:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4200:   clr      [....0010sswwwnnn, format ????????sswwwnnn]
                        sOp = "CLR";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {                  // MOVE CCR,%s
                        //  case 0x42c0:   move     [....001011wwwnnn, format ??????????wwwnnn]
                        sOp = "MOVE";  sSrc = "CCR";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sDst = eaModeDst.getString(nnn);
                    }
                    break stage1;

                case 0x4:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4400:   neg      [....0100sswwwnnn, format ????????sswwwnnn]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        sOp = "NEG";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sSrc = eaModeDst.getString(nnn);
                    }
                    else {                  // MOVE %s,CCR
                        //  case 0x44c0:   move     [....010011xxxnnn, format ??????????xxxnnn]
                        sOp = "MOVE";  sDst = "CCR";
                        eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sSrc = eaModeSrc.getString(nnn);
                    }
                    break stage1;

                case 0x6:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4600:   not      [....0110sswwwnnn, format ????????sswwwnnn]
                        sOp = "NOT";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {                  // MOVE %s,SR
                        //  case 0x46c0:   move     [....011011xxxnnn, format ??????????xxxnnn]
                        sOp = "MOVE";  sDst = "SR";
                        eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sSrc = eaModeSrc.getString(nnn);
                    }
                    break stage1;

                case 0x8:
                    //  case 0x4800:   nbcd     [....100000wwwnnn, format ??????????wwwnnn]
                    //  case 0x4840:   pea      [....100001pppnnn, format ??????????pppnnn]
                    //  case 0x4840:   swap     [....100001000nnn, format none]
                    //  case 0x4880:   ext      [....100010000nnn, format none]
                    //  case 0x4880:   movem    [....10001kuuunnn, format ?????????kuuunnn, p.233]
                    //  case 0x48c0:   ext      [....100011000nnn, format none]
                    switch ((op1 >> 6) & 0x3) {
                    case 0x0:
                        //  case 0x4800:   nbcd     [........00wwwnnn, format ??????????wwwnnn]
                        sOp = "NBCD";  sSrc = "???";
                        break stage1;

                    case 0x1:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4840:   swap     [........01000nnn, format none]
                            sOp = "SWAP";
                            eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            sDst = eaModeDst.getString(nnn);
                        }
                        else {
                            //  case 0x4840:   pea      [........01pppnnn, format ??????????pppnnn, p.264]
                            sOp = "PEA";
                            eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                            sSrc = eaModeSrc.getString(nnn);
                            if (sSrc.endsWith(".l")) {
                                sSrc = sSrc.substring(0, sSrc.length-2);
                            }
                        }
                        break stage1;

                    case 0x2:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none]
                            sOp = "EXT";
                            eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_WORD];
                            sDst = eaModeDst.getString(nnn);
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x3:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none]
                            sOp = "EXT";
                            eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            sDst = eaModeDst.getString(nnn);
                            break stage1;
                        }
                    }
                    //  case 0x4880:   movem    [........1kuuunnn, format ?????????kuuunnn, p.233]
                    //  NOTES: 1) This is a register-to-memory operation
                    //         2) For pre-decrement, the order of storing is A7 to A0, then D7 to D0 (bit 0 to bit 15)
                    //         3) For all other modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         4) Any register used in pre-decrement mode is stored before being decremented
                    sOp = "MOVEM";
                    iModeSrc = this.cpu.getWord(this.curPC);
                    this.curPC += 2;
                    sSrc = "{";
                    if ((op1 & 0x38) == 0x20) {
                        // Pre-decrement
                        iMask = 0x1;
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "A" + i;
                            }
                        }
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "D" + i;
                            }
                        }
                    }
                    else {
                        // All other modes
                        iMask = 0x1;
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "D" + i;
                            }
                        }
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "A" + i;
                            }
                        }
                    }
                    sSrc = sSrc + "}";
                    sDst = this.aEAModes[this.cpu.abModesD07[(op1 - 0x40) & 0xff]].getString(nnn);
                    break stage1;

                case 0xa:
                    if ((op1 & 0xc0) != 0xc0) {
                        //  case 0x4a00:   tst      [........ssmmmnnn, format ????????ssmmmnnn]
                        sOp = "TST";
                        eaModeDst = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x3f) != 0x3c) {
                        //  case 0x4ac0:   tas      [........11wwwnnn, format ??????????wwwnnn]
                        sOp = "TAS";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0x3f]];               // +(ssBYTE << 6)
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {
                        //  case 0x4afc:   illegal  [........11111100, format none]
                        sOp = "ILLEGAL";
                    }
                    break stage1;

                case 0xc:
                    //  case 0x4c80:   movem    [....11001ktttnnn, format ?????????ktttnnn, p.233]
                    //  NOTES: 1) This is a memory-to-register operation
                    //         2) For all modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         3) Any register used in post-increment mode is not affected by the value loaded for it (if any)
                    sOp = "MOVEM";
                    iModeDst = this.cpu.getWord(this.curPC);
                    this.curPC += 2;
                    sSrc = this.aEAModes[this.cpu.abModesC81[(op1 - 0x40) & 0xff]].getString(nnn);
                    sDst = "{";
                    iMask = 0x1;
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (sDst.length > 1) sDst = sDst + ",";
                            sDst = sDst + "D" + i;
                        }
                    }
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (sDst.length > 1) sDst = sDst + ",";
                            sDst = sDst + "A" + i;
                        }
                    }
                    sDst = sDst + "}";
                    break stage1;

                case 0xe:
                    switch ((op1 >> 4) & 0xf) {
                    case 0x4:
                        //  case 0x4e40:   trap     [........0100vvvv, format none]
                        sOp = "TRAP";
                        op2 = (op1 & 0xf);
                        if (op2 != 0xf) {
                            sSrc = this.sprintf("%x", op2);
                        } else {
                            op2 = this.cpu.getWord(this.curPC);
                            this.curPC += 2;
                            sSrc = "API"; // TODO: PalmOSTypes.getAPIName(op2);
                        }
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) {
                            //  case 0x4e50:   link     [........01010nnn, format none, p.216]
                            sOp = "LINK";
                            sSrc = "A" + nnn;
                            sDst = this.aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].getString(0);
                        }
                        else {
                            //  case 0x4e58:   unlk     [........01011nnn, format none]
                            sOp = "UNLK";
                            sSrc = "A" + nnn;
                        }
                        break stage1;

                    case 0x6:
                        //  case 0x4e60:   move     [........01100nnn, format none]
                        //  case 0x4e68:   move     [........01101nnn, format none]
                        sOp = "MOVE";
                        if ((op1 & 0x8) == 0) {
                            sSrc = "A" + nnn;
                            sDst = "USP";
                        }
                        else {
                            sSrc = "USP";
                            sDst = "A" + nnn;
                        }
                        break stage1;

                    case 0x7:
                        switch (op1 & 0xf) {
                        case 0x0:
                            //  case 0x4e70:   reset    [........01110000, format none]
                            sOp = "RESET";
                            break stage1;

                        case 0x1:
                            //  case 0x4e71:   nop      [........01110001, format none]
                            sOp = "NOP";
                            break stage1;

                        case 0x2:
                            //  case 0x4e72:   stop     [........01110010, format none]
                            sOp = "STOP";
                            sSrc = this.getImmediateHexString(this.cpu.getWord(this.curPC) & 0xffff);
                            this.curPC += 2;
                            break stage1;

                        case 0x3:
                            //  case 0x4e73:   rte      [........01110011, format none]
                            sOp = "RTE";
                            break stage1;

                        case 0x5:
                            //  case 0x4e75:   rts      [........01110101, format none]
                            sOp = "RTS";
                            break stage1;

                        case 0x6:
                            //  case 0x4e76:   trapv    [........01110110, format none]
                            sOp = "TRAPV";
                            break stage1;

                        case 0x7:
                            //  case 0x4e77:   rtr      [........01110111, format none]
                            sOp = "RTR";
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x8:
                    case 0x9:
                    case 0xa:
                    case 0xb:
                        //  case 0x4e80:   jsr      [........10pppnnn, format ??????????pppnnn, p.214]
                        sOp = "JSR";
                        eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                        sSrc = eaModeSrc.getString(nnn);
                        if (sSrc.endsWith(".l")) {
                            sSrc = sSrc.substring(0, sSrc.length-2);
                        }
                        break stage1;

                    case 0xc:
                    case 0xd:
                    case 0xe:
                    case 0xf:
                        //  case 0x4ec0:   jmp      [........11pppnnn, format ??????????pppnnn, p.213]
                        sOp = "JMP";
                        eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                        sSrc = eaModeSrc.getString(nnn);
                        if (sSrc.endsWith(".l")) {
                            sSrc = sSrc.substring(0, sSrc.length-2);
                        }
                        break stage1;
                    }
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
                        //  case 0x49c0:   ext      [....100111000nnn, format none]
                        sOp = "EXT";
                        eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        sDst = eaModeDst.getString(nnn);
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
                    sOp = "CHK";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    if (sSrc.endsWith(".w")) {
                        sSrc = sSrc.substring(0, sSrc.length-2);
                    }
                    sDst = "D" + rrr;
                }
                else {
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    sOp = "LEA";
                    eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];            // +(ssLONG << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    if (sSrc.endsWith(".l")) {
                        sSrc = sSrc.substring(0, sSrc.length-2);
                    }
                    sDst = "A" + rrr;
                }
                break stage1;

            case 0x5:
                //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn]
                //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn]
                //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????]
                //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn]
                if ((op1 & 0x00c0) != 0x00c0) {
                    sSrc = "#" + (CPU68K.aByteQuick[rrr]);
                    eaModeDst = this.aEAModes[this.cpu.abModes007[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    if ((op1 & 0x0100) == 0x0000) {
                        //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn]
                        sOp = "ADDQ";
                    }
                    else {
                        //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn]
                        sOp = "SUBQ";
                    }
                    break stage1;
                }
                else {
                    if ((op1 & 0x0038) != 0x0008) {
                        //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn]
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0x3f]];               // +(ssBYTE << 6)
                        sDst = eaModeDst.getString(nnn);
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // ST
                            sOp = "ST";
                            break stage1;
                        case 0x1:               // SF
                            sOp = "SF";
                            break stage1;
                        case 0x2:               // SHI
                            sOp = "SHI";
                            break stage1;
                        case 0x3:               // SLS
                            sOp = "SLS";
                            break stage1;
                        case 0x4:               // SCC
                            sOp = "SCC";
                            break stage1;
                        case 0x5:               // SCS
                            sOp = "SCS";
                            break stage1;
                        case 0x6:               // SNE
                            sOp = "SNE";
                            break stage1;
                        case 0x7:               // SEQ
                            sOp = "SEQ";
                            break stage1;
                        case 0x8:               // SVC
                            sOp = "SVC";
                            break stage1;
                        case 0x9:               // SVS
                            sOp = "SVS";
                            break stage1;
                        case 0xa:               // SPL
                            sOp = "SPL";
                            break stage1;
                        case 0xb:               // SMI
                            sOp = "SMI";
                            break stage1;
                        case 0xc:               // SGE
                            sOp = "SGE";
                            break stage1;
                        case 0xd:               // SLT
                            sOp = "SLT";
                            break stage1;
                        case 0xe:               // SGT
                            sOp = "SGT";
                            break stage1;
                        case 0xf:               // SLE
                            sOp = "SLE";
                            break stage1;
                        }
                    }
                    else {
                        //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????]
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // DBT
                            sOp = "DBT";
                            break;
                        case 0x1:               // DBRA/DBF
                            sOp = "DBRA";
                            break;
                        case 0x2:               // DBHI
                            sOp = "DBHI";
                            break;
                        case 0x3:               // DBLS
                            sOp = "DBLS";
                            break;
                        case 0x4:               // DBCC
                            sOp = "DBCC";
                            break;
                        case 0x5:               // DBCS
                            sOp = "DBCS";
                            break;
                        case 0x6:               // DBNE
                            sOp = "DBNE";
                            break;
                        case 0x7:               // DBEQ
                            sOp = "DBEQ";
                            break;
                        case 0x8:               // DBVC
                            sOp = "DBVC";
                            break;
                        case 0x9:               // DBVS
                            sOp = "DBVS";
                            break;
                        case 0xa:               // DBPL
                            sOp = "DBPL";
                            break;
                        case 0xb:               // DBMI
                            sOp = "DBMI";
                            break;
                        case 0xc:               // DBGE
                            sOp = "DBGE";
                            break;
                        case 0xd:               // DBLT
                            sOp = "DBLT";
                            break;
                        case 0xe:               // DBGT
                            sOp = "DBGT";
                            break;
                        case 0xf:               // DBLE
                            sOp = "DBLE";
                            break;
                        }
                        sSrc = "D" + (nnn);
                        sDst = this.sprintf("%x", this.curPC + this.cpu.getWord(this.curPC));
                        this.curPC += 2;
                        break stage1;
                    }
                }
                break;

            case 0x6:
                //  case 0x6000:   bcc      [0110ccccdddddddd, format ????ccccdddddddd]
                //  case 0x6100:   bsr      [01100001dddddddd, format none]
                switch ((op1 >> 8) & 0xf) {
                case 0x0:               // BRA
                    sOp = "BRA";
                    break;
                case 0x1:               // BSR
                    sOp = "BSR";
                    break;
                case 0x2:               // BHI
                    sOp = "BHI";
                    break;
                case 0x3:               // BLS
                    sOp = "BLS";
                    break;
                case 0x4:               // BCC
                    sOp = "BCC";
                    break;
                case 0x5:               // BCS
                    sOp = "BCS";
                    break;
                case 0x6:               // BNE
                    sOp = "BNE";
                    break;
                case 0x7:               // BEQ
                    sOp = "BEQ";
                    break;
                case 0x8:               // BVC
                    sOp = "BVC";
                    break;
                case 0x9:               // BVS
                    sOp = "BVS";
                    break;
                case 0xa:               // BPL
                    sOp = "BPL";
                    break;
                case 0xb:               // BMI
                    sOp = "BMI";
                    break;
                case 0xc:               // BGE
                    sOp = "BGE";
                    break;
                case 0xd:               // BLT
                    sOp = "BLT";
                    break;
                case 0xe:               // BGT
                    sOp = "BGT";
                    break;
                case 0xf:               // BLE
                    sOp = "BLE";
                    break;
                }
                if (op1 & 0xff) {
                    sSrc = this.sprintf("%x", this.curPC + (op1 << 24 >> 24));
                } else {
                    sSrc = this.sprintf("%x", this.curPC + this.cpu.getWord(this.curPC));
                    this.curPC += 2;
                }
                break stage1;

            case 0x7:
                //  case 0x7000:   moveq    [0111rrr0dddddddd, format none]
                sOp = "MOVEQ";
                sSrc = "#" + (op1 << 24 >> 24);
                sDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG].getString(rrr);
                break stage1;

            case 0x8:
                //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                if ((op1 & 0x01f0) == 0x0100) {
                    //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                    sOp = "SBCD";  sSrc = "???";
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x00c0) {
                    //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                    sOp = "DIVU";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn); // & 0xffff;
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x01c0) {
                    //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                    sOp = "DIVS";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0x0000) { // EA is src
                    //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                    sOp = "OR";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                }
                else {                          // EA is dst
                    //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                    sOp = "OR";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                break stage1;

            case 0x9:
                //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                    sOp = "SUBA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 8) & 0x1) + CPU68K.EAMODEINDEX_AREG_WORD];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                    sOp = "SUB";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                    sOp = "SUB";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                else {
                    //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                    sOp = "SUBX";
                    eaModeSrc = this.aEAModes[this.cpu.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    sSrc = eaModeSrc.getString(nnn); // - GetFlagX();
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0xa:                       // undefined
                break;

            case 0xb:
                //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                    sOp = "CMPA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 8) & 0x1) + CPU68K.EAMODEINDEX_AREG_WORD];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                    sOp = "CMP";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0038) != 0x08) {
                    //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                    sOp = "EOR";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                else {
                    //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                    sOp = "CMPM";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_AREG_INCBYTE];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0xc:
                //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn]
                //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn]
                //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn]
                //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn]
                //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn]
                op2 = (op1 >> 6) & 0x7;

                switch(op2) {
                case 0x0:
                case 0x1:
                case 0x2:                       // EA is src
                    //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                    sOp = "AND";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;

                case 0x3:
                    //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                    sOp = "MULU";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;

                case 0x4:
                case 0x5:
                case 0x6:                       // EA is dst
                    //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                    if ((op1 & 0x0030) != 0) {
                        sOp = "AND";
                        eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                        sSrc = eaModeSrc.getString(rrr);
                        eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                        break stage1;
                    }

                    switch(op2) {
                    case 0x4:
                        //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                        sOp = "ABCD";
                        eaModeSrc = this.aEAModes[this.cpu.abModesAddSubX[(op1 >> 3) & 0x1]];     // 0 or 1 (both ssBYTE)
                        sSrc = eaModeSrc.getString(nnn);
                        eaModeDst = eaModeSrc;
                        sDst = eaModeDst.getString(rrr);
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) { // EXG Drrr,Dnnn
                            //  case 0xc140:   exg      [1100rrr101000nnn, format ????rrr??????nnn, p.210]
                            sOp = "EXG";
                            sSrc = "D" + rrr;
                            sDst = "D" + nnn;
                        }
                        else {                  // EXG Arrr,Annn
                            //  case 0xc148:   exg      [1100rrr101001nnn, format ????rrr??????nnn, p.210]
                            sOp = "EXG";
                            sSrc = "A" + rrr;
                            sDst = "A" + nnn;
                        }
                        break stage1;

                    case 0x6:
                        if ((op1 & 0x8) != 0) { // EXG Drrr,Annn
                            //  case 0xc188:   exg      [1100rrr110001nnn, format ????rrr??????nnn, p.210]
                            sOp = "EXG";
                            sSrc = "D" + rrr;
                            sDst = "A" + nnn;
                            break stage1;
                        }
                    }
                    break;      // If we're still here, must be an invalid opcode

                case 0x7:
                    //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                    sOp = "MULS";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                break;

            case 0xd:
                //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                    sOp = "ADDA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 8) & 0x1) + CPU68K.EAMODEINDEX_AREG_WORD];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                    sOp = "ADD";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                    sOp = "ADD";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                else {
                    //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                    sOp = "ADDX";
                    eaModeSrc = this.aEAModes[this.cpu.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    sSrc = eaModeSrc.getString(nnn); // - GetFlagX();
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.getString(rrr);
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
                    sSrc = ((op1 & 0x20) == 0)? ("#" + CPU68K.aByteQuick[rrr]) : ("D" + rrr);
                    op2 = ((op1 >> 2) & 0x6) | ((op1 >> 8) & 0x1);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_BYTE + ((op1 >> 6) & 0x3)];
                }
                else {
                    sSrc = "1";
                    op2 = op1 >> 8;
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                }
                sDst = eaModeDst.getString(nnn);
                switch (op2 & 0x7) {
                case 0x0:
                    //  case 0xe000:   asr      [....000011uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe000:   asr      [....rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    sOp = "ASR";
                    break stage1;

                case 0x1:
                    //  case 0xe100:   asl      [....000111uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe100:   asl      [....rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    sOp = "ASL";
                    break stage1;

                case 0x2:
                    //  case 0xe200:   lsr      [....001011uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe008:   lsr      [....rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    sOp = "LSR";
                    break stage1;

                case 0x3:
                    //  case 0xe300:   lsl      [....001111uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe108:   lsl      [....rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    sOp = "LSL";
                    break stage1;

                case 0x4:
                    //  case 0xe400:   roxr     [....010011uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe010:   roxr     [....rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    sOp = "ROXR";
                    break stage1;

                case 0x5:
                    //  case 0xe500:   roxl     [....010111uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe110:   roxl     [....rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    sOp = "ROXL";
                    break stage1;

                case 0x6:
                    //  case 0xe600:   ror      [....011011uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe018:   ror      [....rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    sOp = "ROR";
                    break stage1;

                case 0x7:
                    //  case 0xe700:   rol      [....011111uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe118:   rol      [....rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    sOp = "ROL";
                    break stage1;
                }
                break;

            case 0xf:                       // undefined
                break;

            }   // End stage1

            if (sOp == null) {
                sOp = "???";
            }

            if (sSrc != null && sDst != null) {
                // If there are both src and dst operands, collapse any common ".b", ".w" or ".l" suffixes
                // into a single suffix on the opcode instead.  Also do the collapse if the src operand is an
                // immediate value (ie, prefixed with '#') or register list (ie, prefixed with '{').  And then
                // finally collapse both operands into a a single src operand, separated by commas, to further
                // simplify the code that follows.
                let iSrc = sSrc.length;
                let iDst = sDst.length;
                if (iSrc >= 2 && iDst >= 2) {
                    if (sSrc.charAt(iSrc-2) == '.' && sDst.charAt(iDst-2) == '.' && sSrc.charAt(iSrc-1) == sDst.charAt(iDst-1)) {
                        iSrc -= 2;
                        iDst -= 2;
                        sOp = sOp + sSrc.substring(iSrc);
                        sSrc = sSrc.substring(0,iSrc);
                        sDst = sDst.substring(0,iDst);
                    }
                    else if ((sSrc.charAt(0) == '#' || sSrc.charAt(0) == '{') && sDst.charAt(iDst-2) == '.') {
                        iDst -= 2;
                        sOp = sOp + sDst.substring(iDst);
                        sDst = sDst.substring(0,iDst);
                    }
                    else if (sSrc.charAt(iSrc-2) == '.' && sDst.charAt(0) == '{') {
                        iSrc -= 2;
                        sOp = sOp + sSrc.substring(iSrc);
                        sSrc = sSrc.substring(0,iSrc);
                    }
                }
                sSrc = sSrc + "," + sDst;
            }
            else {
                if (sSrc == null) {
                    sSrc = sDst;
                }
                if (sSrc != null) {
                    let iSrc = sSrc.length;
                    if (iSrc >= 2 && sSrc.charAt(iSrc-2) == '.') {
                        iSrc -= 2;
                        sOp = sOp + sSrc.substring(iSrc);
                        sSrc = sSrc.substring(0,iSrc);
                    }
                }
            }

            // Prefix the opcode mnemonic with the code words (up to 3 of them)

            sBytes = "";
            for (let i = 0; i < 6; i += 2) {
                if (((address + i) >>> 1) >= (this.curPC >>> 1)) break;
                sBytes = sBytes + this.sprintf("%04x", this.cpu.getWord(address+i) & 0xffff) + " ";
            }

        }
        catch (e) {sBytes = "error"; fError = true;}

        if (fError) {
            try {
                // See if we're currently *inside* an API call...
                if (address == this.cpu.getLong(CPU68K.EXCEPTION_TRAP_0xF * 4)) {
                    sBytes = null;
                    sOp = "INSIDE";
                    try {
                        let addrPC = this.cpu.getLong(this.cpu.regA[7]+2)-4;
                        // Could check "this.cpu.getWord(addrPC) == 0x4e4f" too,
                        // to make sure it's really a TRAP 0x0F instruction....
                        sSrc = "API";  // TODO: PalmOSTypes.getAPIName(this.cpu.getWord(addrPC+2));
                    }
                    catch (e) {
                        sSrc = "???";
                    }
                }
            }
            catch (e) {}
        }

        let addrCodeDump = this.curPC;

        if (sSrc != null && (fDispEA || op1 == CPU68K.OP_JMP_PC_REL || op1 == CPU68K.OP_JSR_PC_REL)) {

            // BUGBUG: This breaks down when both src and dst modes are the same,
            // because we might be using the same "eaMode" object for both operands, hence
            // its "ea" value for the src might have been overwritten by the value for the dst
            // (since normally the dst is decoded after the src).

            // Hopefully, this is not a problem anywhere in the emulator, as the normal operation
            // of the CPU is to extract the src data from the src ea before processing the dst,
            // but it can definitely affect the debugger, and it's something to be on the lookout
            // for in the emulator as well.  -JP

            let eaMode = eaModeSrc;
            if (eaMode == null || eaMode.sPrefix.startsWith("#")) {
                eaMode = eaModeDst;
            }
            if (eaMode != null && !eaMode.sPrefix.startsWith("#")) {

                // Check "eaMode.ea" for belonging to a debugger symbol group
                sSrc = sSrc + "  [" + eaMode.sPrefix/* + GetAddressSymbol(eaMode.ea, -1) */;

                if (sOp != "LEA" && sOp != "PEA" && sOp != "JMP" && sOp != "JSR") {
                    try {
                        sSrc = sSrc + "=" + this.sprintf("%x", eaMode.getData());
                    }
                    catch(e) {
                        sSrc = sSrc + "=???";
                    }
                }
                sSrc = sSrc + "]";
            }
        }
        return this.sprintf("%08x: %-15s %-8s %-40s;", address, sBytes, sOp, sSrc);
    }

    /**
     * getSignedHexString(i)
     *
     * Convert value to signed hex string (since the unsigned value should already appear in the disassembly)
     *
     * @this {Dbg68K}
     * @param {number} i
     * @returns {string}
     */
    getSignedHexString(i)
    {
        let s = i.toString(16);         // use toString() instead of sprintf() for signed conversion
        if (s.charAt(0) != '-') {
            return "0x" + s;
        } else {
            return "-0x" + s.substring(1);
        }
    }

    /**
     * getImmediateHexString(i)
     *
     * Convert immediate value to signed hex string (since the unsigned value should already appear in the disassembly)
     *
     * @this {Dbg68K}
     * @param {number} i
     * @returns {string}
     */
    getImmediateHexString(i)
    {
        return '#' + this.getSignedHexString(i);
    }

    /**
     * getIndexAddr(base)
     *
     * @this {Dbg68K}
     * @param {number} base
     * @returns {number}
     */
    getIndexAddr(base)
    {
        let addr = this.cpu.getWord(this.curPC);
        let i = (addr & 0x7000) >> 12, bAddr = addr << 24 >> 24;
        if ((addr & 0x0800) != 0) {
            if ((addr & 0x8000) != 0) {
                return base + this.cpu.regA[i] + bAddr;
            } else {
                return base + this.cpu.regD[i] + bAddr;
            }
        }
        else {
            if ((addr & 0x8000) != 0) {
                return base + (this.cpu.regA[i] << 16 >> 16) + bAddr;
            } else {
                return base + (this.cpu.regD[i] << 16 >> 16) + bAddr;
            }
        }
    }

    /**
     * getIndexAddrString(nnn)
     *
     * @this {Dbg68K}
     * @param {number} nnn
     * @returns {string}
     */
    getIndexAddrString(nnn)
    {
        let addr = this.cpu.getWord(this.curPC);
        this.curPC += 2;
        let i = (addr >> 12) & 0x7, bAddr = addr << 24 >> 24;
        return "(" + (bAddr != 0? this.getSignedHexString(bAddr) + "," : "") +
                ((nnn < 0)? "PC" : ("A" + nnn)) +
                ((addr & 0x8000) != 0? ",A":",D") + i + ((addr & 0x0800) != 0? ".l":".w") + ")";
    }
}

/**
 * All DbgMode subclasses must implement the following abstract methods:
 *
 *  getString: get effective address (ea) string
 *  getData: get data at effective address
 */

/* eslint-disable require-jsdoc */

class DbgMode
{
    /**
     * DbgMode(dbg, sPrefix)
     *
     * @this {DbgMode}
     * @param {Dbg68K} dbg
     * @param {string} [sPrefix]
     */
    constructor(dbg, sPrefix)
    {
        this.dbg = dbg;
        this.sPrefix = sPrefix || "";
        this.cpu = dbg.cpu;
        this.ea = 0;
    }

    /**
     * getString(nnn)
     *
     * @this {DbgMode}
     * @param {number} nnn
     * @returns {string}
     */
    getString(nnn)
    {
        return "";
    }

    /**
     * getData()
     *
     * @this {DbgMode}
     * @returns {number}
     */
    getData(nnn)
    {
        return 0;
    }
}

class DbgModeIllegal extends DbgMode
{
    getString(nnn) {
        return "???";
    }

    getData() {
        return 0;
    }
}

class DbgModeDRegByte extends DbgMode {
    constructor(dbg) {
        super(dbg, "D");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".b";
    }

    getData() {
        return this.cpu.regD[this.ea] & 0xff;
    }
}

class DbgModeDRegWord extends DbgMode {
    constructor(dbg) {
        super(dbg, "D");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".w";
    }

    getData() {
        return this.cpu.regD[this.ea] & 0xffff;
    }
}

class DbgModeDRegLong extends DbgMode {
    constructor(dbg) {
        super(dbg, "D");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".l";
    }

    getData() {
        return this.cpu.regD[this.ea];
    }
}

class DbgModeARegWord extends DbgMode {
    constructor(dbg) {
        super(dbg, "A");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".w";
    }

    getData() {
        return this.cpu.regA[this.ea] & 0xffff;
    }
}

class DbgModeARegLong extends DbgMode {
    constructor(dbg) {
        super(dbg, "A");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".l";
    }

    getData() {
        return this.cpu.regA[this.ea];
    }
}

class DbgModeAValByte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ").b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValWord extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ").w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValLong extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ").l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeAValIncByte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ")+.b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValIncWord extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ")+.w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValIncLong extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ")+.l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeAValDecByte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn] - CPU68K.aByteInc[nnn];
        return "-(A" + nnn + ").b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValDecWord extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn] - 2;
        return "-(A" + nnn + ").w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValDecLong extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn] - 4;
        return "-(A" + nnn + ").l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeAValDispByte extends DbgMode {
    getString(nnn) {
        let i = this.cpu.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        this.ea = this.cpu.regA[nnn] + i;
        return (i != 0? this.dbg.getSignedHexString(i) : "") + "(A" + nnn + ").b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValDispWord extends DbgMode {
    getString(nnn) {
        let i = this.cpu.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        this.ea = this.cpu.regA[nnn] + i;
        return (i != 0? this.dbg.getSignedHexString(i) : "") + "(A" + nnn + ").w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValDispLong extends DbgMode {
    getString(nnn) {
        let i = this.cpu.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        this.ea = this.cpu.regA[nnn] + i;
        return (i != 0? this.dbg.getSignedHexString(i) : "") + "(A" + nnn + ").l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeAValIndexByte extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.cpu.regA[nnn]);
        return this.dbg.getIndexAddrString(nnn) + ".b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValIndexWord extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.cpu.regA[nnn]);
        return this.dbg.getIndexAddrString(nnn) + ".w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValIndexLong extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.cpu.regA[nnn]);
        return this.dbg.getIndexAddrString(nnn) + ".l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeAbs16Byte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        return this.dbg.sprintf("(%x).b", this.ea);
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAbs16Word extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        return this.dbg.sprintf("(%x).w", this.ea);
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAbs16Long extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        return this.dbg.sprintf("(%x).l", this.ea);
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeAbs32Byte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.getLong(this.dbg.curPC);
        this.dbg.curPC += 4;
        return this.dbg.sprintf("(%x).b", this.ea);
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeAbs32Word extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.getLong(this.dbg.curPC);
        this.dbg.curPC += 4;
        return this.dbg.sprintf("(%x).w", this.ea);
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAbs32Long extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.getLong(this.dbg.curPC);
        this.dbg.curPC += 4;
        return this.dbg.sprintf("(%x).l", this.ea);
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModePCValDispByte extends DbgMode {
    getString(nnn) {
        let i = this.cpu.getWord(this.dbg.curPC);
        this.ea = this.dbg.curPC + i;
        this.dbg.curPC += 2;
        return (i? this.dbg.getSignedHexString(i) : "") + "(PC).b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModePCValDispWord extends DbgMode {
    getString(nnn) {
        let i = this.cpu.getWord(this.dbg.curPC);
        this.ea = this.dbg.curPC + i;
        this.dbg.curPC += 2;
        return (i? this.dbg.getSignedHexString(i) : "") + "(PC).w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModePCValDispLong extends DbgMode {
    getString(nnn) {
        let i = this.cpu.getWord(this.dbg.curPC);
        this.ea = this.dbg.curPC + i;
        this.dbg.curPC += 2;
        return (i? this.dbg.getSignedHexString(i) : "") + "(PC).l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModePCValIndexByte extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.dbg.curPC);
        return this.dbg.getIndexAddrString(-1) + ".b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}
class DbgModePCValIndexWord extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.dbg.curPC);
        return this.dbg.getIndexAddrString(-1) + ".w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}
class DbgModePCValIndexLong extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.dbg.curPC);
        return this.dbg.getIndexAddrString(-1) + ".l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

class DbgModeImmediateByte extends DbgMode {
    constructor(dbg) {
        super(dbg, "#");
    }

    getString(nnn) {
        this.ea = this.dbg.curPC + 1;
        this.dbg.curPC += 2;
        return this.dbg.getImmediateHexString(this.cpu.getByte(this.ea));     // + ".b";
    }

    getData() {
        return this.cpu.getByte(this.ea) & 0xff;
    }
}

class DbgModeImmediateWord extends DbgMode {
    constructor(dbg) {
        super(dbg, "#");
    }

    getString(nnn) {
        this.ea = this.dbg.curPC;
        this.dbg.curPC += 2;
        return this.dbg.getImmediateHexString(this.cpu.getWord(this.ea));     // + ".w";
    }

    getData() {
        return this.cpu.getWord(this.ea) & 0xffff;
    }
}

class DbgModeImmediateLong extends DbgMode {
    constructor(dbg) {
        super(dbg, "#");
    }

    getString(nnn) {
        this.ea = this.dbg.curPC;
        this.dbg.curPC += 4;
        return this.dbg.getImmediateHexString(this.cpu.getLong(this.ea));     // + ".l";
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }
}

/**
 * Definitions ported from DebuggerInterface.java
 */
Dbg68K.MEMTYPE_ROM         = 0;
Dbg68K.MEMTYPE_DEVICE      = 1;
Dbg68K.MEMTYPE_CODE        = 2;
Dbg68K.MEMTYPE_DATA        = 3;

Dbg68K.DATAACCESS_NONE     = 0;
Dbg68K.DATAACCESS_READ     = 1;
Dbg68K.DATAACCESS_WRITE    = 2;
Dbg68K.DATAACCESS_UNINIT   = 3;

Dbg68K.CLASSES["Dbg68K"] = Dbg68K;
