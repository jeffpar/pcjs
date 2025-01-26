/**
 * @fileoverview This file generates PCjs 8086 mode-byte decoders
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

try {
    /*
     * If Node is running us, this will succeed, and we'll have a print()
     * function (an alias for console.log).  If JSC is running us instead,
     * then this will fail (there is neither a global NOR a console object),
     * but that's OK, because print() is a built-in function.
     *
     * TODO: Find a cleaner way of doing this, and while you're at it, alias
     * Node's process.argv to JSC's "arguments" array, and Node's process.exit()
     * to JSC's quit().
     */
    var print = console.log;
} catch(err) {}

/*
 * I'm going to start by creating 4 sets of "mod,reg,r/m" aka OpMod tables:
 *
 *      Set 0: mod,r/m is dst, size is byte, dispatch table is aOpModMemByte
 *      Set 1: mod,r/m is dst, size is word, dispatch table is aOpModMemWord
 *      Set 2: reg is dst,     size is byte, dispatch table is aOpModRegByte
 *      Set 3: reg is dst,     size is word, dispatch table is aOpModRegWord
 *
 * See p. 3-41 of "The 8086 Book" for more details.
 */

var f16Only = true;
var aDst = ["Mem", "Reg"];
var aSize = ["Byte", "Word"];
var aOpPrefix = ["B", "W"];
var aAddrPrefix = [f16Only? "" : "16", "32"];
var aDisp = ["8", "16"];

/*
 * Index aREG like so: aREG[w][reg]
 */
var aREG = [
    ["AL", "CL", "DL", "BL", "AH", "CH", "DH", "BH"],
    ["AX", "CX", "DX", "BX", "SP", "BP", "SI", "DI"]
];

var w, sError = "";
var fGenMods = true;
var sEAFuncs = "";

var aBase  = ["EAX", "ECX", "EDX", "EBX", "ESP",  "EBP", "ESI", "EDI"];
var aIndex = ["EAX", "ECX", "EDX", "EBX", "none", "EBP", "ESI", "EDI"];

if (!fGenMods) {

    var sOps = "", cOps = 0;

    for (var op = 0x00; op <= 0xFF; op++) {

        var i, iReg, sOp, sOpCode, sOperator, sDst, sDstReg;

        if (op >= 0x40 && op <= 0x4F) {
            i = op - 0x40;
            iReg = i % 8;
            sOpCode = (op < 0x48? "INC" : "DEC");
            sOperator = (op < 0x48? "+" : "-");
            sDst = aREG[1][iReg];
            sDstReg = "this.reg." + aREG[1][iReg];
            print("    /**");
            print("     * @this {X86CPU}");
            print("     *");
            print("     * op=0x" + toHex(op, 2) + " (" + sOpCode.toLowerCase() + " " + sDst + ")");
            print("     */");
            sOp = "op" + sOpCode + sDst;
            print("    " + sOp + ": function() {");
            print("        " + sDstReg + " = (" + sDstReg + " " + sOperator + " 1) & 0xffff;");
            print("    },");
            if (sOps) sOps += ((cOps % 4)? ", " : ",\n");
            sOps += "        this." + sOp;
            cOps++;
        }
        else if (op >= 0x50 && op <= 0x5F) {
            i = op - 0x50;
            iReg = i % 8;
            sOpCode = (op < 0x58? "PUSH" : "POP");
            sDst = aREG[1][iReg];
            sDstReg = "this.reg." + aREG[1][iReg];
            print("    /**");
            print("     * @this {X86CPU}");
            print("     *");
            print("     * op=0x" + toHex(op, 2) + " (" + sOpCode.toLowerCase() + " " + sDst + ")");
            print("     */");
            sOp = "op" + sOpCode + sDst;
            print("    " + sOp + ": function() {");
            if (op < 0x58) {
                print("        this.pushWord(" + sDstReg + ");");
            }
            else {
                print("        " + sDstReg + " = this.popWord();");
            }
            print("    },");
            if (sOps) sOps += ((cOps % 4)? ", " : ",\n");
            sOps += "        this." + sOp;
            cOps++;
        }
        else if (op == 0x90) {
            if (sOps) sOps += ((cOps % 4)? ", " : ",\n");
            sOps += "        this.opNOP";
            cOps++;
        }
        else if (op >= 0x91 && op <= 0x97) {
            i = op - 0x90;
            iReg = i % 8;
            sOpCode = "XCHG";
            sDst = aREG[1][iReg];
            sDstReg = "this.reg." + aREG[1][iReg];
            print("    /**");
            print("     * @this {X86CPU}");
            print("     *");
            print("     * op=0x" + toHex(op, 2) + " (" + sOpCode.toLowerCase() + " EAX," + sDst + ")");
            print("     */");
            sOp = "op" + sOpCode + sDst;
            print("    " + sOp + ": function() {");
            print("        var temp = this.regEAX; this.regEAX = " + sDstReg + "; " + sDstReg + " = temp;");
            print("    },");
            if (sOps) sOps += ((cOps % 4)? ", " : ",\n");
            sOps += "        this." + sOp;
            cOps++;
        }
        else if (op >= 0xB0 && op <= 0xBF) {
            i = op - 0xB0;
            w = (i < 8? 0 : 1);
            i = i % 8;
            sDst = aREG[w][i].toLowerCase();
            print("    /**");
            print("     * @this {X86CPU}");
            print("     *");
            print("     * op=0x" + toHex(op, 2) + " (mov " + aREG[w][i] + "," + aSize[w].toLowerCase() + ")");
            print("     */");
            sOp = "opMOV" + aREG[w][i] + aDisp[w];
            print("    " + sOp + ": function() {");
            var sRegSet = "", sRegSetEnd = null;
            if (w == 1) {
                sRegSet = "this.reg" + aREG[1][i] + " = ";
            }
            else {
                if (i < 4) {
                    sRegSet = "this.reg" + aREG[1][i] + " = (this.reg" + aREG[1][i] + " & ~0xff) | ";
                }
                else {
                    sRegSet = "this.reg" + aREG[1][i - 4] + " = (this.reg" + aREG[1][i - 4] + " & 0xff) | ";
                    sRegSetEnd = " << 8";
                }
            }
            print("        " + sRegSet + (sRegSetEnd? "(" : "") + "this.getIP" + aSize[w] + "()" + (sRegSetEnd? (sRegSetEnd + ")") : "") + ";");
            print("    },");
            if (sOps) sOps += ((cOps % 4)? ", " : ",\n");
            sOps += "        this." + sOp;
            cOps++;
        }
    }
}
else {

    /*
     * Index aMOD like so: aMOD[mod]
     */
    var aMOD = ["mem", "mem+d8", "mem+d16", "reg"];

    /*
     * Index aRM like so: aRM[a][mod][w][r_m], forcing w to 0 unless mod is 3
     */
    var aRM = [
        [
            [["BX+SI", "BX+DI", "BP+SI", "BP+DI", "SI", "DI", "d16", "BX"], []],
            [["BX+SI+d8", "BX+DI+d8", "BP+SI+d8", "BP+DI+d8", "SI+d8", "DI+d8", "BP+d8", "BX+d8"], []],
            [["BX+SI+d16", "BX+DI+d16", "BP+SI+d16", "BP+DI+d16", "SI+d16", "DI+d16", "BP+d16", "BX+d16"], []],
            [["AL", "CL", "DL", "BL", "AH", "CH", "DH", "BH"], ["AX", "CX", "DX", "BX", "SP", "BP", "SI", "DI"]]
        ],[
            [["EAX", "ECX", "EDX", "EBX", "sib", "d32", "ESI", "EDI"], []],
            [["EAX+d8", "ECX+d8", "EDX+d8", "EBX+d8", "sib+d8", "EBP+d8", "ESI+d8", "EDI+d8"], []],
            [["EAX+d32", "ECX+d32", "EDX+d32", "EBX+d32", "sib+d32", "EBP+d32", "ESI+d32", "EDI+d32"], []],
            [["AL", "CL", "DL", "BL", "AH", "CH", "DH", "BH"], ["EAX", "ECX", "EDX", "EBX", "ESP", "EBP", "ESI", "EDI"]]
        ]
    ];

    var cOpMods, mrm;
    var sOpMods, sOpMod, sContainer;

    if (f16Only) {
        print("var X86ModB = {};");
        print("var X86ModW = {};\n");
    } else {
        print("var X86ModB16 = {};");
        print("var X86ModW16 = {};");
        print("var X86ModB32 = {};");
        print("var X86ModW32 = {};\n");
    }

    for (var a = 0; a <= (f16Only? 0 : 1) && !sError; a++) {

        for (w = 0; w <= 1 && !sError; w++) {

            for (var d = 1; d >= 0 && !sError; d--) {

                cOpMods = 0;
                sOpMods = "";
                sContainer = "X86Mod" + aOpPrefix[w] + aAddrPrefix[a] + ".aOpMod" + aDst[d];

                print(sContainer + " = [");
                for (mrm = 0x00; mrm <= 0xff && !sError; mrm++) {
                    sOpMod = genMode(a, d, w, mrm);
                    if (sOpMod) {
                        if (sOpMods) sOpMods += ((cOpMods % 4)? ", " : ",\n");
                        sOpMods += "    " + sContainer + "." + sOpMod;
                        cOpMods++;
                    }
                }
                print("];\n");
            }

            cOpMods = 0;
            sOpMods = "";
            sContainer = "X86Mod" + aOpPrefix[w] + aAddrPrefix[a] + ".aOpModGrp";

            print(sContainer + " = [");
            for (mrm = 0x00; mrm <= 0xff && !sError; mrm++) {
                sOpMod = genMode(a, 0, w, mrm, "Grp");
                if (sOpMod) {
                    if (sOpMods) sOpMods += ((cOpMods % 4)? ", " : ",\n");
                    sOpMods += "    " + sContainer + "." + sOpMod;
                    cOpMods++;
                }
            }
            print("];\n");
        }
    }

    if (!f16Only) {
        sContainer = "X86ModSIB" + ".aOpModSIB";
        print(sContainer + " = [");
        for (var sib = 0x00; sib <= 0xff && !sError; sib++) {
            genSIB(sib);
        }
        print("];\n");
    }

    if (sEAFuncs) {
        print("var X86Mods = {\n" + sEAFuncs + "};\n");
    }
}

/**
 * genSIB(sib)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function genSIB(sib)
{
    var scale = (sib >> 6);
    var index = (sib >> 3) & 0x7;
    var base = (sib & 0x7);
    var sFunc = "opModSIB" + toHex(sib, 2);
    print("    /**");
    print("     * " + sFunc + "(): scale=" + toBin(scale, 2) + " (" + toHex(1 << scale, 1) + ")  index=" + toBin(index, 3) + " (" + aIndex[index] + ")  base=" + toBin(base, 3) + " (" + (base == 5? "mod? EBP : disp32)" : aBase[base] + ")"));
    print("     *");
    print("     * @this {X86CPU}");
    print("     * @param {number} mod");
    print("     */");
    print("    function " + sFunc + "(mod) {");
    var sMod = "this.reg" + aBase[base];
    if (aBase[base] == "ESP" || aBase[base] == "EBP") {
        if (base != 5) {
            print("        this.segData = this.segStack;");
        } else {
            sMod = "((this.segData = this.segStack), " + sMod + ")";
        }
    }
    var sBase = (base == 5? "(mod? " + sMod + " : this.getIPAddr())" : "this.reg" + aBase[base]);
    if (index != 4) sBase += " + " + (scale? ("(this.reg" + aIndex[index] + " << " + scale + ")") : ("this.reg" + aIndex[index]));
    print("        return " + sBase + ";");
    print("    }" + (sib < 255? "," : ""));
}

/**
 * genMode(a, d, w, mrm, sGroup, sRO)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function genMode(a, d, w, mrm, sGroup, sRO)
{
    var mod = (mrm >> 6);
    var reg = (mrm >> 3) & 0x7;
    var r_m = (mrm & 0x7);
    var sRegGet = null;
    var sRegSet = null;
    var sRegSetBegin = "", sRegSetEnd = "";
    var sRegBTLo = null, sRegBTHi = null;
    if (!w) {
        switch (reg) {
        case 0:
            sRegGet = "this.regEAX & 0xff";
            sRegSet = "this.regEAX = (this.regEAX & ~0xff) | ";
            sRegBTLo = "this.backTrack.btiAL";
            break;
        case 1:
            sRegGet = "this.regECX & 0xff";
            sRegSet = "this.regECX = (this.regECX & ~0xff) | ";
            sRegBTLo = "this.backTrack.btiCL";
            break;
        case 2:
            sRegGet = "this.regEDX & 0xff";
            sRegSet = "this.regEDX = (this.regEDX & ~0xff) | ";
            sRegBTLo = "this.backTrack.btiDL";
            break;
        case 3:
            sRegGet = "this.regEBX & 0xff";
            sRegSet = "this.regEBX = (this.regEBX & ~0xff) | ";
            sRegBTLo = "this.backTrack.btiBL";
            break;
        case 4:
            sRegGet = f16Only? "this.regEAX >> 8" : "(this.regEAX >> 8) & 0xff";
            sRegSet = f16Only? "this.regEAX = (this.regEAX & 0xff) | " : "this.regEAX = (this.regEAX & ~0xff00) | ";
            sRegSetEnd = " << 8";
            sRegBTLo = "this.backTrack.btiAH";
            break;
        case 5:
            sRegGet = f16Only? "this.regECX >> 8" : "(this.regECX >> 8) & 0xff";
            sRegSet = f16Only? "this.regECX = (this.regECX & 0xff) | " : "this.regECX = (this.regECX & ~0xff00) | ";
            sRegSetEnd = " << 8";
            sRegBTLo = "this.backTrack.btiCH";
            break;
        case 6:
            sRegGet = f16Only? "this.regEDX >> 8" : "(this.regEDX >> 8) & 0xff";
            sRegSet = f16Only? "this.regEDX = (this.regEDX & 0xff) | " : "this.regEDX = (this.regEDX & ~0xff00) | ";
            sRegSetEnd = " << 8";
            sRegBTLo = "this.backTrack.btiDH";
            break;
        case 7:
            sRegGet = f16Only? "this.regEBX >> 8" : "(this.regEBX >> 8) & 0xff";
            sRegSet = f16Only? "this.regEBX = (this.regEBX & 0xff) | " : "this.regEBX = (this.regEBX & ~0xff00) | ";
            sRegSetEnd = " << 8";
            sRegBTLo = "this.backTrack.btiBH";
            break;
        default:
            sError = "unrecognized w=0 reg: " + reg;
            break;
        }
    }
    else {
        switch (reg) {
        case 0:
            sRegGet = f16Only? "this.regEAX" : "this.regEAX & this.dataMask";
            sRegSet = f16Only? "" : "this.regEAX = (this.regEAX & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiAL";
            sRegBTHi = "this.backTrack.btiAH";
            break;
        case 1:
            sRegGet = f16Only? "this.regECX" : "this.regECX & this.dataMask";
            sRegSet = f16Only? "" : "this.regECX = (this.regECX & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiCL";
            sRegBTHi = "this.backTrack.btiCH";
            break;
        case 2:
            sRegGet = f16Only? "this.regEDX" : "this.regEDX & this.dataMask";
            sRegSet = f16Only? "" : "this.regEDX = (this.regEDX & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiDL";
            sRegBTHi = "this.backTrack.btiDH";
            break;
        case 3:
            sRegGet = f16Only? "this.regEBX" : "this.regEBX & this.dataMask";
            sRegSet = f16Only? "" : "this.regEBX = (this.regEBX & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiBL";
            sRegBTHi = "this.backTrack.btiBH";
            break;
        case 4:
            sRegGet = f16Only? "this.regESP" : "this.regESP & this.dataMask";
            sRegSet = f16Only? "" : "this.regESP = (this.regESP & ~this.dataMask) | ";
            sRegBTLo = "X86.BACKTRACK.SP_LO";
            sRegBTHi = "X86.BACKTRACK.SP_HI";
            break;
        case 5:
            sRegGet = f16Only? "this.regEBP" : "this.regEBP & this.dataMask";
            sRegSet = f16Only? "" : "this.regEBP = (this.regEBP & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiBPLo";
            sRegBTHi = "this.backTrack.btiBPHi";
            break;
        case 6:
            sRegGet = f16Only? "this.regESI" : "this.regESI & this.dataMask";
            sRegSet = f16Only? "" : "this.regESI = (this.regESI & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiSILo";
            sRegBTHi = "this.backTrack.btiSIHi";
            break;
        case 7:
            sRegGet = f16Only? "this.regEDI" : "this.regEDI & this.dataMask";
            sRegSet = f16Only? "" : "this.regEDI = (this.regEDI & ~this.dataMask) | ";
            sRegBTLo = "this.backTrack.btiDILo";
            sRegBTHi = "this.backTrack.btiDIHi";
            break;
        default:
            sError = "unrecognized w=1 reg: " + reg;
            break;
        }
    }
    /*
     * The 8086/8088 cycle counts below come from p.3-48 of "The 8086 Book", where it discusses EA
     * ("effective address") calculations and the number of execution cycles required for each type
     * of calculation.
     *
     *
     */
    var fInline = true;
    var nCycles = null;
    var sModAddr = null;
    var sModFunc = null;
    var sModRegGet = null;
    var sModRegSet = null;
    var sModRegSetBegin = "", sModRegSetEnd = "";
    var sModRegBTLo = null, sModRegBTHi = null;
    var sModRegSeg = "Data";

    if (!a) {
        switch (mod) {
        case 0:
            switch (r_m) {
            case 0:
                sModAddr = "this.regEBX + this.regESI";
                sModFunc = "BXSI";
                nCycles = "this.cycleCounts.nEACyclesBaseIndex";        // 8086: 7
                break;
            case 1:
                sModAddr = "this.regEBX + this.regEDI";
                sModFunc = "BXDI";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexExtra";   // 8086: 8
                break;
            case 2:
                sModAddr = "this.regEBP + this.regESI";
                sModFunc = "BPSI";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexExtra";   // 8086: 8
                break;
            case 3:
                sModAddr = "this.regEBP + this.regEDI";
                sModFunc = "BPDI";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseIndex";        // 8086: 7
                break;
            case 4:
                sModAddr = "this.regESI";
                sModFunc = "SI";
                nCycles = "this.cycleCounts.nEACyclesBase";             // 8086: 5
                break;
            case 5:
                sModAddr = "this.regEDI";
                sModFunc = "DI";
                nCycles = "this.cycleCounts.nEACyclesBase";             // 8086: 5
                break;
            case 6:
                sModAddr = "this.getIPAddr()";
                sModFunc = "D16";
                nCycles = "this.cycleCounts.nEACyclesDisp";             // 8086: 6
                break;
            case 7:
                sModAddr = "this.regEBX";
                sModFunc = "BX";
                nCycles = "this.cycleCounts.nEACyclesBase";             // 8086: 5
                break;
            default:
                sError = "unrecognized mod=0 r/m: " + r_m;
                break;
            }
            break;
        case 1:
            switch (r_m) {
            case 0:
                sModAddr = "this.regEBX + this.regESI + this.getIPDisp()";
                sModFunc = "BXSID8";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDisp";        // 8086: 11
                break;
            case 1:
                sModAddr = "this.regEBX + this.regEDI + this.getIPDisp()";
                sModFunc = "BXDID8";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDispExtra";   // 8086: 12
                break;
            case 2:
                sModAddr = "this.regEBP + this.regESI + this.getIPDisp()";
                sModFunc = "BPSID8";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDispExtra";   // 8086: 12
                break;
            case 3:
                sModAddr = "this.regEBP + this.regEDI + this.getIPDisp()";
                sModFunc = "BPDID8";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDisp";        // 8086: 11
                break;
            case 4:
                sModAddr = "this.regESI + this.getIPDisp()";
                sModFunc = "SID8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            case 5:
                sModAddr = "this.regEDI + this.getIPDisp()";
                sModFunc = "DID8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            case 6:
                sModAddr = "this.regEBP + this.getIPDisp()";
                sModFunc = "BPD8";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            case 7:
                sModAddr = "this.regEBX + this.getIPDisp()";
                sModFunc = "BXD8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            default:
                sError = "unrecognized mod=1 r/m: " + r_m;
                break;
            }
            break;
        case 2:
            switch (r_m) {
            case 0:
                sModAddr = "this.regEBX + this.regESI + this.getIPAddr()";
                sModFunc = "BXSID16";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDisp";        // 8086: 11
                break;
            case 1:
                sModAddr = "this.regEBX + this.regEDI + this.getIPAddr()";
                sModFunc = "BXDID16";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDispExtra";   // 8086: 12
                break;
            case 2:
                sModAddr = "this.regEBP + this.regESI + this.getIPAddr()";
                sModFunc = "BPSID16";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDispExtra";   // 8086: 12
                break;
            case 3:
                sModAddr = "this.regEBP + this.regEDI + this.getIPAddr()";
                sModFunc = "BPDID16";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseIndexDisp";        // 8086: 11
                break;
            case 4:
                sModAddr = "this.regESI + this.getIPAddr()";
                sModFunc = "SID16";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            case 5:
                sModAddr = "this.regEDI + this.getIPAddr()";
                sModFunc = "DID16";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            case 6:
                sModAddr = "this.regEBP + this.getIPAddr()";
                sModFunc = "BPD16";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            case 7:
                sModAddr = "this.regEBX + this.getIPAddr()";
                sModFunc = "BXD16";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";             // 8086: 9
                break;
            default:
                sError = "unrecognized mod=2 r/m: " + r_m;
                break;
            }
            break;
        case 3:
            if (!w) {
                switch (r_m) {
                case 0:
                    sModRegGet = "this.regEAX & 0xff";
                    sModRegSet = "this.regEAX = (this.regEAX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiAL";
                    break;
                case 1:
                    sModRegGet = "this.regECX & 0xff";
                    sModRegSet = "this.regECX = (this.regECX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiCL";
                    break;
                case 2:
                    sModRegGet = "this.regEDX & 0xff";
                    sModRegSet = "this.regEDX = (this.regEDX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiDL";
                    break;
                case 3:
                    sModRegGet = "this.regEBX & 0xff";
                    sModRegSet = "this.regEBX = (this.regEBX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiBL";
                    break;
                case 4:
                    sModRegGet = f16Only? "(this.regEAX >> 8)" : "(this.regEAX >> 8) & 0xff";
                    sModRegSet = f16Only? "this.regEAX = (this.regEAX & 0xff) | " : "this.regEAX = (this.regEAX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiAH";
                    break;
                case 5:
                    sModRegGet = f16Only? "(this.regECX >> 8)" : "(this.regECX >> 8) & 0xff";
                    sModRegSet = f16Only? "this.regECX = (this.regECX & 0xff) | " : "this.regECX = (this.regECX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiCH";
                    break;
                case 6:
                    sModRegGet = f16Only? "(this.regEDX >> 8)" : "(this.regEDX >> 8) & 0xff";
                    sModRegSet = f16Only? "this.regEDX = (this.regEDX & 0xff) | " : "this.regEDX = (this.regEDX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiDH";
                    break;
                case 7:
                    sModRegGet = f16Only? "(this.regEBX >> 8)" : "(this.regEBX >> 8) & 0xff";
                    sModRegSet = f16Only? "this.regEBX = (this.regEBX & 0xff) | " : "this.regEBX = (this.regEBX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiBH";
                    break;
                default:
                    sError = "unrecognized w=0 mod=3 r/m: " + r_m;
                    break;
                }
            }
            else {
                switch (r_m) {
                case 0:
                    sModRegGet = f16Only? "this.regEAX" : "this.regEAX & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regEAX = (this.regEAX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiAL";
                    sModRegBTHi = "this.backTrack.btiAH";
                    break;
                case 1:
                    sModRegGet = f16Only? "this.regECX" : "this.regECX & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regECX = (this.regECX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiCL";
                    sModRegBTHi = "this.backTrack.btiCH";
                    break;
                case 2:
                    sModRegGet = f16Only? "this.regEDX" : "this.regEDX & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regEDX = (this.regEDX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiDL";
                    sModRegBTHi = "this.backTrack.btiDH";
                    break;
                case 3:
                    sModRegGet = f16Only? "this.regEBX" : "this.regEBX & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regEBX = (this.regEBX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiBL";
                    sModRegBTHi = "this.backTrack.btiBH";
                    break;
                case 4:
                    sModRegGet = f16Only? "this.regESP" : "this.regESP & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regESP = (this.regESP & ~this.dataMask) | ";
                    sModRegBTLo = "X86.BACKTRACK.SP_LO";
                    sModRegBTHi = "X86.BACKTRACK.SP_HI";
                    break;
                case 5:
                    sModRegGet = f16Only? "this.regEBP" : "this.regEBP & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regEBP = (this.regEBP & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiBPLo";
                    sModRegBTHi = "this.backTrack.btiBPHi";
                    break;
                case 6:
                    sModRegGet = f16Only? "this.regESI" : "this.regESI & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regESI = (this.regESI & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiSILo";
                    sModRegBTHi = "this.backTrack.btiSIHi";
                    break;
                case 7:
                    sModRegGet = f16Only? "this.regEDI" : "this.regEDI & this.dataMask";
                    sModRegSet = f16Only? "" : "this.regEDI = (this.regEDI & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiDILo";
                    sModRegBTHi = "this.backTrack.btiDIHi";
                    break;
                default:
                    sError = "unrecognized w=1 mod=3 r/m: " + r_m;
                    break;
                }
            }
            break;
        default:
            sError = "unrecognized mod: " + mod;
            break;
        }
    } else {
        switch (mod) {
        case 0:
            switch (r_m) {
            case 0:
                sModAddr = "this.regEAX";
                sModFunc = "EAX";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            case 1:
                sModAddr = "this.regECX";
                sModFunc = "ECX";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            case 2:
                sModAddr = "this.regEDX";
                sModFunc = "EDX";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            case 3:
                sModAddr = "this.regEBX";
                sModFunc = "EBX";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            case 4:
                sModAddr = "this.getSIBAddr(0)";
                sModFunc = "SIB";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            case 5:
                sModAddr = "this.getIPAddr()";
                sModFunc = "D32";
                nCycles = "this.cycleCounts.nEACyclesDisp";
                break;
            case 6:
                sModAddr = "this.regESI";
                sModFunc = "ESI";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            case 7:
                sModAddr = "this.regEDI";
                sModFunc = "EDI";
                nCycles = "this.cycleCounts.nEACyclesBase";
                break;
            default:
                sError = "unrecognized mod=0 r/m: " + r_m;
                break;
            }
            break;
        case 1:
            switch (r_m) {
            case 0:
                sModAddr = "this.regEAX + this.getIPDisp()";
                sModFunc = "EAXD8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 1:
                sModAddr = "this.regECX + this.getIPDisp()";
                sModFunc = "ECXD8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 2:
                sModAddr = "this.regEDX + this.getIPDisp()";
                sModFunc = "EDXD8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 3:
                sModAddr = "this.regEBX + this.getIPDisp()";
                sModFunc = "EBXD8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 4:
                sModAddr = "this.getSIBAddr(1) + this.getIPDisp()";
                sModFunc = "SIBD8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 5:
                sModAddr = "this.regEBP + this.getIPDisp()";
                sModFunc = "EBPD8";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 6:
                sModAddr = "this.regESI + this.getIPDisp()";
                sModFunc = "ESID8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 7:
                sModAddr = "this.regEDI + this.getIPDisp()";
                sModFunc = "EDID8";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            default:
                sError = "unrecognized mod=1 r/m: " + r_m;
                break;
            }
            break;
        case 2:
            switch (r_m) {
            case 0:
                sModAddr = "this.regEAX + this.getIPAddr()";
                sModFunc = "EAXD32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 1:
                sModAddr = "this.regECX + this.getIPAddr()";
                sModFunc = "ECXD32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 2:
                sModAddr = "this.regEDX + this.getIPAddr()";
                sModFunc = "EDXD32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 3:
                sModAddr = "this.regEBX + this.getIPAddr()";
                sModFunc = "EBXD32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 4:
                sModAddr = "this.getSIBAddr(2) + this.getIPAddr()";
                sModFunc = "SIBD32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 5:
                sModAddr = "this.regEBP + this.getIPAddr()";
                sModFunc = "EBPD32";
                sModRegSeg = "Stack";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 6:
                sModAddr = "this.regESI + this.getIPAddr()";
                sModFunc = "ESID32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            case 7:
                sModAddr = "this.regEDI + this.getIPAddr()";
                sModFunc = "EDID32";
                nCycles = "this.cycleCounts.nEACyclesBaseDisp";
                break;
            default:
                sError = "unrecognized mod=2 r/m: " + r_m;
                break;
            }
            break;
        case 3:
            if (!w) {
                switch (r_m) {
                case 0:
                    sModRegGet = "this.regEAX & 0xff";
                    sModRegSet = "this.regEAX = (this.regEAX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiAL";
                    break;
                case 1:
                    sModRegGet = "this.regECX & 0xff";
                    sModRegSet = "this.regECX = (this.regECX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiCL";
                    break;
                case 2:
                    sModRegGet = "this.regEDX & 0xff";
                    sModRegSet = "this.regEDX = (this.regEDX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiDL";
                    break;
                case 3:
                    sModRegGet = "this.regEBX & 0xff";
                    sModRegSet = "this.regEBX = (this.regEBX & ~0xff) | ";
                    sModRegBTLo = "this.backTrack.btiBL";
                    break;
                case 4:
                    sModRegGet = "(this.regEAX >> 8) & 0xff";
                    sModRegSet = "this.regEAX = (this.regEAX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiAH";
                    break;
                case 5:
                    sModRegGet = "(this.regECX >> 8) & 0xff";
                    sModRegSet = "this.regECX = (this.regECX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiCH";
                    break;
                case 6:
                    sModRegGet = "(this.regEDX >> 8) & 0xff";
                    sModRegSet = "this.regEDX = (this.regEDX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiDH";
                    break;
                case 7:
                    sModRegGet = "(this.regEBX >> 8) & 0xff";
                    sModRegSet = "this.regEBX = (this.regEBX & ~0xff00) | ";
                    sModRegSetEnd = " << 8";
                    sModRegBTLo = "this.backTrack.btiBH";
                    break;
                default:
                    sError = "unrecognized w=0 mod=3 r/m: " + r_m;
                    break;
                }
            }
            else {
                switch (r_m) {
                case 0:
                    sModRegGet = "this.regEAX & this.dataMask";
                    sModRegSet = "this.regEAX = (this.regEAX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiAL";
                    sModRegBTHi = "this.backTrack.btiAH";
                    break;
                case 1:
                    sModRegGet = "this.regECX & this.dataMask";
                    sModRegSet = "this.regECX = (this.regECX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiCL";
                    sModRegBTHi = "this.backTrack.btiCH";
                    break;
                case 2:
                    sModRegGet = "this.regEDX & this.dataMask";
                    sModRegSet = "this.regEDX = (this.regEDX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiDL";
                    sModRegBTHi = "this.backTrack.btiDH";
                    break;
                case 3:
                    sModRegGet = "this.regEBX & this.dataMask";
                    sModRegSet = "this.regEBX = (this.regEBX & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiBL";
                    sModRegBTHi = "this.backTrack.btiBH";
                    break;
                case 4:
                    sModRegGet = "this.regESP & this.dataMask";
                    sModRegSet = "this.regESP = (this.regESP & ~this.dataMask) | ";
                    sModRegBTLo = "X86.BACKTRACK.SP_LO";
                    sModRegBTHi = "X86.BACKTRACK.SP_HI";
                    break;
                case 5:
                    sModRegGet = "this.regEBP & this.dataMask";
                    sModRegSet = "this.regEBP = (this.regEBP & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiBPLo";
                    sModRegBTHi = "this.backTrack.btiBPHi";
                    break;
                case 6:
                    sModRegGet = "this.regESI & this.dataMask";
                    sModRegSet = "this.regESI = (this.regESI & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiSILo";
                    sModRegBTHi = "this.backTrack.btiSIHi";
                    break;
                case 7:
                    sModRegGet = "this.regEDI & this.dataMask";
                    sModRegSet = "this.regEDI = (this.regEDI & ~this.dataMask) | ";
                    sModRegBTLo = "this.backTrack.btiDILo";
                    sModRegBTHi = "this.backTrack.btiDIHi";
                    break;
                default:
                    sError = "unrecognized w=1 mod=3 r/m: " + r_m;
                    break;
                }
            }
            break;
        default:
            sError = "unrecognized mod: " + mod;
            break;
        }
    }

    if (sError) {
        print(sError);
        return null;
    }

    sOpMod = "opMod" + aAddrPrefix[a] + (sGroup? sGroup + (sRO? sRO : "") : aDst[d]) + aSize[w] + toHex(mrm, 2);

    var sTemp = aSize[w].charAt(0).toLowerCase();

    if (sGroup) {
        /*
         * Use this to generate ModRM decoders that accept an array (ie, "group") of functions, and pass along an implied argument as well
         */
        if (sRO && reg != 7) {
            sOpMod = "opMod" + aAddrPrefix[a] + (sGroup? sGroup : aDst[d]) + aSize[w] + toHex(mrm, 2);
            return sOpMod;
        }

        print("    /**");
        print("     * " + sOpMod + "(afnGrp, fnSrc): mod=" + toMod(d, mod) + "  reg=" + toReg(d, w, reg, sGroup) + "  r/m=" + toRM(a, mod, w, r_m));
        print("     *");
        print("     * @this {X86CPU}");
        print("     * @param {Array.<function(number,number)>} afnGrp");
        print("     * @param {function()} fnSrc");
        print("     */");
        print("    function " + sOpMod + "(afnGrp, fnSrc) {");

        if (sModAddr) {
            if (!d) {
                if (reg == 7 && sRO) {
                    if (sModFunc) {
                        if (fInline) {
                            print("        afnGrp[" + reg + "].call(this, this.getEA" + aSize[w] + sModRegSeg + "(" + sModAddr + "), fnSrc.call(this));");
                        } else {
                            sModFunc = "read" + sModFunc + aSize[w];
                            print("        var addr = X86Mods." + sModFunc + ".call(this);");
                            print("        afnGrp[" + reg + "].call(this, this.getEA" + aSize[w] + "(addr), fnSrc.call(this));");
                            genEAFunc(sModFunc, "this.regEA = " + sModRegSeg + "[1] + " + sModAddr);
                        }
                    } else {
                        print("        this.regEA = " + sModRegSeg + "[1] + " + sModAddr + ";");
                        print("        afnGrp[" + reg + "].call(this, this.getEA" + aSize[w] + "(this.regEA), fnSrc.call(this));");
                    }
                }
                else {
                    if (sModFunc) {
                        if (fInline) {
                            print("        var " + sTemp + " = afnGrp[" + reg + "].call(this, this.modEA" + aSize[w] + sModRegSeg + "(" + sModAddr + "), fnSrc.call(this));");
                            print("        this.setEA" + aSize[w] + "(" + sTemp + ");");
                        } else {
                            sModFunc = "write" + sModFunc + aSize[w];
                            print("        var addr = X86Mods." + sModFunc + ".call(this);");
                            print("        var " + sTemp + " = afnGrp[" + reg + "].call(this, this.modEA" + aSize[w] + "(addr), fnSrc.call(this));");
                            print("        this.setEA" + aSize[w] + "(addr, " + sTemp + ");");
                            genEAFunc(sModFunc, "this.regEAWrite = " + sModRegSeg + "[1] + " + sModAddr);
                        }
                    } else {
                        print("        this.regEAWrite = " + sModRegSeg + "[1] + " + sModAddr + ";");
                        print("        var " + sTemp + " = afnGrp[" + reg + "].call(this, this.modEA" + aSize[w] + "(this.regEAWrite), fnSrc.call(this));");
                        print("        this.setEA" + aSize[w] + "(this.regEAWrite, " + sTemp + ");");
                    }
                }
                if (nCycles !== null) {
                    print("        this.nStepCycles -= " + nCycles + ";");
                }
            }
        }
        else if (sModRegGet) {
            if (!sModRegSet) {
                sModRegSet = sModRegGet + " = ";
                sTemp = null;
            }
            if (sModRegSetEnd) {
                sModRegSetBegin = "(";
                sModRegSetEnd += ")";
            }
            if (reg == 7 && sRO) {
                print("        afnGrp[" + reg + "].call(this, " + sModRegGet + ", fnSrc.call(this));");
            } else {
                if (!sTemp) {
                    print("        " + sModRegSet + sModRegSetBegin + "afnGrp[" + reg + "].call(this, " + sModRegGet + ", fnSrc.call(this))" + sModRegSetEnd + ";");
                } else {
                    print("        var " + sTemp + " = afnGrp[" + reg + "].call(this, " + sModRegGet + ", fnSrc.call(this));");
                    print("        " + sModRegSet + sModRegSetBegin + sTemp + sModRegSetEnd + ";");
                }
                if (sModRegBTLo) {
                    if (!sModRegBTHi) {
                        print("        if (BACKTRACK) " + sModRegBTLo + " = this.backTrack.btiEALo;");
                    } else if (sModRegBTLo.indexOf("_") < 0) {
                        print("        if (BACKTRACK) {");
                        print("            " + sModRegBTLo + " = this.backTrack.btiEALo; " + sModRegBTHi + " = this.backTrack.btiEAHi;");
                        print("        }");
                    }
                }
            }
        }
    }
    else {

        /*
         * Is this OpMod a duplicate OpMod?  Specifically, when mod is 3 and d is 0, the destination is a register specified by r_m,
         * which should match the OpMod handler for when mod' == 3 and d' == 1 and reg' == r_m and r_m' == reg.
         */
        if (mod == 3 && !d) {
            var mrmPrime = (mod << 6) | (r_m << 3) | reg;
            print("    X86Mod" + aOpPrefix[w] + aAddrPrefix[a] + ".aOpModReg[0x" + toHex(mrmPrime, 2) + "],");
            sOpMod = "opMod" + aAddrPrefix[a] + aDst[1] + aSize[w] + toHex(mrmPrime, 2);
            return sOpMod;
        }

        print("    /**");
        print("     * " + sOpMod + "(fn): mod=" + toMod(d, mod) + "  reg=" + toReg(d, w, reg) + "  r/m=" + toRM(a, mod, w, r_m));
        print("     *");
        print("     * @this {X86CPU}");
        print("     * @param {function(number,number)} fn (dst,src)");
        print("     */");
        print("    function " + sOpMod + "(fn) {");

        if (sModAddr && sRegGet) {
            if (!d) {
                if (sModFunc) {
                    if (fInline) {
                        print("        var " + sTemp + " = fn.call(this, this.modEA" + aSize[w] + sModRegSeg + "(" + sModAddr + "), " + sRegGet + ");");
                        if (sRegBTLo) {
                            if (!sRegBTHi) {
                                print("        if (BACKTRACK) this.backTrack.btiEALo = " + sRegBTLo + ";");
                            } else {
                                print("        if (BACKTRACK) {");
                                print("            this.backTrack.btiEALo = " + sRegBTLo + "; this.backTrack.btiEAHi = " + sRegBTHi + ";");
                                print("        }");
                            }
                        }
                        print("        this.setEA" + aSize[w] + "(" + sTemp + ");");
                    } else {
                        sModFunc = "write" + sModFunc + aSize[w];
                        print("        var addr = X86Mods." + sModFunc + ".call(this);");
                        print("        var " + sTemp + " = fn.call(this, this.modEA" + aSize[w] + "(addr), " + sRegGet + ");");
                        print("        this.setEA" + aSize[w] + "(addr, " + sTemp + ");");
                        genEAFunc(sModFunc, "this.regEAWrite = " + sModRegSeg + "[1] + " + sModAddr);
                    }
                } else {
                    print("        this.regEAWrite = " + sModRegSeg + "[1] + " + sModAddr + ";");
                    print("        var " + sTemp + " = fn.call(this, this.modEA" + aSize[w] + "(this.regEAWrite), " + sRegGet + ");");
                    if (sRegBTLo) {
                        if (!sRegBTHi) {
                            print("        if (BACKTRACK) this.backTrack.btiEALo = " + sRegBTLo + ";");
                        } else {
                            print("        if (BACKTRACK) {");
                            print("            this.backTrack.btiEALo = " + sRegBTLo + "; this.backTrack.btiEAHi = " + sRegBTHi + ";");
                            print("        }");
                        }
                    }
                    print("        this.setEA" + aSize[w] + "(this.regEAWrite, " + sTemp + ");");
                }
            }
            else {
                if (!sRegSet) {
                    sRegSet = sRegGet + " = ";
                    sTemp = null;
                }
                if (sRegSetEnd) {
                    sRegSetBegin = "(";
                    sRegSetEnd += ")";
                }
                if (sModFunc) {
                    if (fInline) {
                        if (!sTemp) {
                            print("        " + sRegSet + sRegSetBegin + "fn.call(this, " + sRegGet + ", this.getEA" + aSize[w] + sModRegSeg + "(" + sModAddr + "))" + sRegSetEnd + ";");
                        } else {
                            print("        var " + sTemp + " = fn.call(this, " + sRegGet + ", this.getEA" + aSize[w] + sModRegSeg + "(" + sModAddr + "));");
                            print("        " + sRegSet + sRegSetBegin + sTemp + sRegSetEnd + ";");
                        }
                    } else {
                        sModFunc = "read" + sModFunc + aSize[w];
                        print("        var addr = X86Mods." + sModFunc + ".call(this);");
                        if (!sTemp) {
                            print("        " + sRegSet + sRegSetBegin + "fn.call(this, " + sRegGet + ", this.getEA" + aSize[w] + "(addr))" + sRegSetEnd + ";");
                        } else {
                            print("        var " + sTemp + " = fn.call(this, " + sRegGet + ", this.getEA" + aSize[w] + "(addr));");
                            print("        " + sRegSet + sRegSetBegin + sTemp + sRegSetEnd + ";");
                        }
                        genEAFunc(sModFunc, "this.regEA = " + sModRegSeg + "[1] + " + sModAddr);
                    }
                } else {
                    print("        this.regEA = " + sModRegSeg + "[1] + " + sModAddr + ";");
                    if (!sTemp) {
                        print("        " + sRegSet + sRegSetBegin + "fn.call(this, " + sRegGet + ", this.getEA" + aSize[w] + "(this.regEA))" + sRegSetEnd + ";");
                    } else {
                        print("        var " + sTemp + " = fn.call(this, " + sRegGet + ", this.getEA" + aSize[w] + "(this.regEA));");
                        print("        " + sRegSet + sRegSetBegin + sTemp + sRegSetEnd + ";");
                    }
                }
                if (sRegBTLo && sRegBTLo.indexOf("this.") >= 0) {
                    if (!sRegBTHi) {
                        print("        if (BACKTRACK) " + sRegBTLo + " = this.backTrack.btiEALo;");
                    } else {
                        print("        if (BACKTRACK) {");
                        print("            " + sRegBTLo + " = this.backTrack.btiEALo; " + sRegBTHi + " = this.backTrack.btiEAHi;");
                        print("        }");
                    }
                }
            }
            if (nCycles !== null) {
                print("        this.nStepCycles -= " + nCycles + ";");
            }
        }
        else if (sModRegGet && sRegGet) {
            if (!d) {
                if (!sModRegSet) {
                    sModRegSet = sModRegGet + " = ";
                    sTemp = null;
                }
                if (sModRegSetEnd) {
                    sModRegSetBegin = "(";
                    sModRegSetEnd += ")";
                }
                if (!sTemp) {
                    print("        " + sModRegSet + sModRegSetBegin + "fn.call(this, " + sModRegGet + ", " + sRegGet + ")" + sModRegSetEnd + ";");
                } else {
                    print("        var " + sTemp + " = fn.call(this, " + sModRegGet + ", " + sRegGet + ");");
                    print("        " + sModRegSet + sModRegSetBegin + sTemp + sModRegSetEnd + ";");
                }
                if (sModRegBTLo && sModRegBTLo.indexOf("this.") >= 0 && sRegBTLo && sModRegBTLo != sRegBTLo) {
                    if (!sModRegBTHi || !sRegBTHi) {
                        print("        if (BACKTRACK) " + sModRegBTLo + " = " + sRegBTLo + ";");
                    } else if (sModRegBTLo.indexOf("_") < 0) {
                        print("        if (BACKTRACK) {");
                        print("            " + sModRegBTLo + " = " + sRegBTLo + "; " + sModRegBTHi + " = " + sRegBTHi + ";");
                        print("        }");
                    }
                }
            }
            else {
                if (!sRegSet) {
                    sRegSet = sRegGet + " = ";
                    sTemp = null;
                }
                if (sRegSetEnd) {
                    sRegSetBegin = "(";
                    sRegSetEnd += ")";
                }
                if (!sTemp) {
                    print("        " + sRegSet + sRegSetBegin + "fn.call(this, " + sRegGet + ", " + sModRegGet + ")" + sRegSetEnd + ";");
                } else {
                    print("        var " + sTemp + " = fn.call(this, " + sRegGet + ", " + sModRegGet + ");");
                    print("        " + sRegSet + sRegSetBegin + sTemp + sRegSetEnd + ";");
                }
                if (sRegBTLo && sRegBTLo.indexOf("this.") >= 0 && sModRegBTLo && sRegBTLo != sModRegBTLo) {
                    if (!sRegBTHi || !sModRegBTHi) {
                        print("        if (BACKTRACK) " + sRegBTLo + " = " + sModRegBTLo + ";");
                    } else {
                        print("        if (BACKTRACK) {");
                        print("            " + sRegBTLo + " = " + sModRegBTLo + "; " + sRegBTHi + " = " + sModRegBTHi + ";");
                        print("        }");
                    }
                }
            }
        }
    }

    print("    }" + (mrm < 0xff? "," : ""));

    return sOpMod;
}

/**
 * genEAFunc(sFuncName, sFuncBody)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function genEAFunc(sFuncName, sFuncBody)
{
    if (sEAFuncs.indexOf(sFuncName) < 0) {
        sEAFuncs += "    /**\n";
        sEAFuncs += "     * @this {X86CPU}\n";
        sEAFuncs += "     * @returns {number}\n";
        sEAFuncs += "     */\n";
        sEAFuncs += "    " + sFuncName + ": function() {\n";
        sEAFuncs += "        return (" + sFuncBody + ");\n";
        sEAFuncs += "    },\n";
    }
}

/**
 * toMod(d, mod)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function toMod(d, mod)
{
    return toBin(mod, 2) + " (" + (d? "src" : "dst") + ":" + aMOD[mod] + ")";
}

/**
 * toReg(d, w, reg, sGroup)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function toReg(d, w, reg, sGroup)
{
    return toBin(reg, 3) + " (" + (sGroup? "afnGrp[" + reg + "]" : (d? "dst" : "src") + ":" + aREG[w][reg]) + ")";
}

/**
 * toRM(a, mod, w, r_m)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function toRM(a, mod, w, r_m)
{
    return toBin(r_m, 3) + " (" + aRM[a][mod][mod < 3? 0 : w][r_m] + ")";
}

/**
 * toBin(v, len)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function toBin(v, len)
{
    var s = "0000000000000000" + v.toString(2);
    return s.slice(s.length - (len === undefined? 8 : (len < 16? len : 16)));
}

/**
 * toHex(v, len)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function toHex(v, len)
{
    var s = "00000000" + v.toString(16);
    return s.slice(s.length - (len === undefined? 4 : (len < 8? len : 8))).toUpperCase();
}
