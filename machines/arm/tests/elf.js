/**
 * @fileoverview Minimal ELF32 "linker" for ARM test programs
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * linkObject(buf, base)
 *
 * Extracts the .text section from a relocatable ARM ELF object file (eg, one produced by "clang -c") and applies
 * its relocations, producing a binary image that can be loaded at the given base address.  This saves us from
 * needing a real ARM linker; the only requirement is that the entire program must live in the .text section.
 *
 * @param {Buffer} buf (contents of the object file)
 * @param {number} base (address where the image will be loaded)
 * @returns {Buffer}
 */
export function linkObject(buf, base)
{
    if (buf.readUInt32BE(0) != 0x7f454c46 || buf[4] != 1 || buf[5] != 1 || buf.readUInt16LE(18) != 40) {
        throw new Error("not a 32-bit little-endian ARM ELF file");
    }
    let shoff = buf.readUInt32LE(32), shentsize = buf.readUInt16LE(46), shnum = buf.readUInt16LE(48), shstrndx = buf.readUInt16LE(50);
    let sections = [];
    for (let i = 0; i < shnum; i++) {
        let o = shoff + i * shentsize;
        sections.push({
            name: buf.readUInt32LE(o), type: buf.readUInt32LE(o + 4), offset: buf.readUInt32LE(o + 16), size: buf.readUInt32LE(o + 20),
            link: buf.readUInt32LE(o + 24), info: buf.readUInt32LE(o + 28), entsize: buf.readUInt32LE(o + 36)
        });
    }
    let getString = (section, off) => {
        let start = section.offset + off, end = start;
        while (buf[end]) end++;
        return buf.toString("latin1", start, end);
    };
    let iText = sections.findIndex((s) => getString(sections[shstrndx], s.name) == ".text");
    if (iText < 0) throw new Error("no .text section");
    let text = sections[iText];
    let image = Buffer.from(buf.subarray(text.offset, text.offset + text.size));

    for (let rel of sections) {
        if (rel.type != 9 /* SHT_REL */ || rel.info != iText) continue;
        let symtab = sections[rel.link], strtab = sections[symtab.link];
        for (let o = rel.offset; o < rel.offset + rel.size; o += 8) {
            let off = buf.readUInt32LE(o), info = buf.readUInt32LE(o + 4);
            let type = info & 0xff, oSym = symtab.offset + (info >>> 8) * 16;
            let name = getString(strtab, buf.readUInt32LE(oSym));
            if (type == 0 /* R_ARM_NONE */ || type == 40 /* R_ARM_V4BX */) continue;
            if (buf.readUInt16LE(oSym + 14) != iText) {
                throw new Error("relocation at " + off.toString(16) + " refers to symbol outside .text: " + name);
            }
            let S = buf.readUInt32LE(oSym + 4), P = off, A, op, op2;
            switch (type) {
            case 2:             // R_ARM_ABS32
                image.writeInt32LE((image.readInt32LE(off) + S + base)|0, off);
                break;
            case 3:             // R_ARM_REL32
                image.writeInt32LE((image.readInt32LE(off) + S - P)|0, off);
                break;
            case 1:             // R_ARM_PC24
            case 28:            // R_ARM_CALL
            case 29:            // R_ARM_JUMP24
                op = image.readUInt32LE(off);
                A = (op << 8) >> 6;
                if ((S & 1) || ((S + A - P) & 3)) throw new Error("unsupported interworking branch to " + name);
                image.writeUInt32LE(((op & 0xff000000) | (((S + A - P) >> 2) & 0x00ffffff)) >>> 0, off);
                break;
            case 10:            // R_ARM_THM_CALL
                op = image.readUInt16LE(off);
                op2 = image.readUInt16LE(off + 2);
                A = ((op << 21) >> 9) | ((op2 & 0x7ff) << 1);
                A = (S + A - P)|0;
                image.writeUInt16LE((op & 0xf800) | ((A >> 12) & 0x7ff), off);
                image.writeUInt16LE((op2 & 0xf800) | ((A >> 1) & 0x7ff), off + 2);
                break;
            case 102:           // R_ARM_THM_JUMP11
                op = image.readUInt16LE(off);
                A = (S + ((op << 21) >> 20) - P)|0;
                if (A < -2048 || A > 2046) throw new Error("branch out of range to " + name);
                image.writeUInt16LE((op & 0xf800) | ((A >> 1) & 0x7ff), off);
                break;
            case 103:           // R_ARM_THM_JUMP8
                op = image.readUInt16LE(off);
                A = (S + ((op << 24) >> 23) - P)|0;
                if (A < -256 || A > 254) throw new Error("branch out of range to " + name);
                image.writeUInt16LE((op & 0xff00) | ((A >> 1) & 0xff), off);
                break;
            default:
                throw new Error("unsupported relocation type " + type + " at " + off.toString(16) + " (" + name + ")");
            }
        }
    }
    return image;
}
