/**
 * @fileoverview Library for decompressing various "legacy" ZIP (and ARC) formats
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Adapted from https://www.pcjs.org/tools/modules/legacyzip.js
 *
 * Unpack(), Unsqueeze(), Uncrunch(), and Uncrush() decompression code adapted from ARC source code
 * (C) Copyright 1985-87 by System Enhancement Associates and Thom Henderson, as released under the terms
 * of the GPL at https://github.com/hyc/arc/blob/master/LICENSE
 *
 * Stretch(), Expand(), and Explode() functionality adapted from https://www.hanshq.net/files/hwzip/hwzip-2.1.zip,
 * as released into the public domain by Hans Wennborg; see https://www.hanshq.net/zip2.html for more details.
 *
 * Blast() functionality adapted from https://github.com/madler/zlib/tree/master/contrib/blast
 * Copyright (C) 2003, 2012, 2013 Mark Adler
 */

import DataBuffer from "./db.js";

const DEBUG = false;

/**
 * Legacy ARC Support (decompression only)
 *
 * Programming notes (from ARC.C v5.21q):
 *
 *      ARC Version 2 differs from version 1 in that archive entries
 *      are automatically compressed when they are added to the archive,
 *      making a separate compression step unnecessary. The nature of the
 *      compression is indicated by the header version number placed in
 *      each archive entry, as follows:
 *
 *      1 = Old style, no compression
 *      2 = New style, no compression
 *      3 = Compression of repeated characters only
 *      4 = Compression of repeated characters plus Huffman SQueezing
 *      5 = Lempel-Zev packing of repeated strings (old style)
 *      6 = Lempel-Zev packing of repeated strings (new style)
 *      7 = Lempel-Zev Williams packing with improved hash function
 *      8 = Dynamic Lempel-Zev packing with adaptive reset
 *      9 = Dynamic Lempel-Zev packing, larger hash table
 *
 *      Type 5, Lempel-Zev packing, was added as of version 4.0
 *
 *      Type 6 is Lempel-Zev packing where runs of repeated characters
 *      have been collapsed, and was added as of version 4.1
 *
 *      Type 7 is a variation of Lempel-Zev using a different hash
 *      function which yields speed improvements of 20-25%, and was
 *      added as of version 4.6
 *
 *      Type 8 is a different implementation of Lempel-Zev, using a
 *      variable code size and an adaptive block reset, and was added
 *      as of version 5.0
 *
 *      Type 9 is a slight modification of type 8, first used by Phil
 *      Katz in his PKARC utilities. The primary difference is the use
 *      of a hash table twice as large as for type 8, and that this
 *      algorithm called Squashing, doesn't perform run-length encoding
 *      on the input data.
 *
 *      Version 4.3 introduced a temporary file for holding the result
 *      of the first crunch pass, thus speeding up crunching.
 *
 *      Version 4.4 introduced the ARCTEMP environment string, so that
 *      the temporary crunch file may be placed on a ramdisk. Also
 *      added was the distinction between Adding a file in all cases,
 *      and Updating a file only if the disk file is newer than the
 *      corresponding archive entry.
 *
 *      The compression method to use is determined when the file is
 *      added, based on whichever method yields the smallest result.
 *
 * @class LegacyArc
 */
export class LegacyArc
{
    /**
     * Notes regarding ARC compression method "naming conventions":
     *
     * I've not yet seen any examples of Method5 or Method7 "in the wild", but I have seen Method6
     * (see PC-SIG DISK0568: 123EGA.ARC), which PKXARC.EXE called "crunched" (with a lower-case "c"),
     * distinct from Method8 which it called "Crunched" (with an upper-case "C").
     *
     * Technically, yes, methods 5-7 and method 8 were all called "crunching", but 5-7 performed LZW
     * compression (with unpacked (5), packed (6), and "new hash" (7) variants) while method 8 performed
     * "dynamic" LZW compression.
     *
     * To distinguish the methods better, I'm going call 5-7 "Crunch" and 8 "Crush", placing method 8
     * squarely between "Crunch" and "Squash".
     */
    static methodNames = [
        "Unpack", "Pack", "Squeeze", "Crunch5", "Crunch6", "Crunch7", "Crush", "Squash"
    ];

    /**
     * unpackSync(src, dst_len)
     *
     * @param {DataBuffer} src (packed data)
     * @param {number} dst_len
     * @returns {DataBuffer|null}
     */
    static unpackSync(src, dst_len)
    {
        let unpack = new ArcUnpack();
        unpack.decomp(src, dst_len);
        //
        // We used to delete unpack.dst if decomp() returned false, but we now let getOutput() return whatever it can.
        //
        return unpack.getOutput();
    }

    /**
     * unsqueezeSync(src, dst_len)
     *
     * @param {DataBuffer} src (squeezed data)
     * @param {number} dst_len
     * @returns {DataBuffer|null}
     */
    static unsqueezeSync(src, dst_len)
    {
        let unsqueeze = new ArcUnsqueeze();
        unsqueeze.decomp(src, dst_len);
        //
        // We used to delete unsqueeze.dst if decomp() returned false, but we now let getOutput() return whatever it can.
        //
        return unsqueeze.getOutput();
    }

    /**
     * uncrunchSync(src, dst_len, type)
     *
     * @param {DataBuffer} src (crunched data)
     * @param {number} dst_len
     * @param {number} type (0 for unpacked, 1 for packed, 2 for packed w/new hash)
     * @returns {DataBuffer|null}
     */
    static uncrunchSync(src, dst_len, type)
    {
        let uncrunch = new ArcUncrunch();
        uncrunch.decomp(src, dst_len, type >= 1, type == 2);
        //
        // We used to delete uncrunch.dst if decomp() returned false, but we now let getOutput() return whatever it can.
        //
        return uncrunch.getOutput();
    }

    /**
     * uncrushSync(src, dst_len, squashed)
     *
     * @param {DataBuffer} src (crushed or squashed data)
     * @param {number} dst_len
     * @param {boolean} squashed (false if crushed, true if squashed)
     * @returns {DataBuffer|null}
     */
    static uncrushSync(src, dst_len, squashed)
    {
        let uncrush = new ArcUncrush();
        uncrush.decomp(src, dst_len, squashed);
        //
        // We used to delete uncrush.dst if decomp() returned false, but we now let getOutput() return whatever it can.
        //
        return uncrush.getOutput();
    }

    static crcTable = [         // CRC lookup table
        0x0000, 0xC0C1, 0xC181, 0x0140, 0xC301, 0x03C0, 0x0280, 0xC241,
        0xC601, 0x06C0, 0x0780, 0xC741, 0x0500, 0xC5C1, 0xC481, 0x0440,
        0xCC01, 0x0CC0, 0x0D80, 0xCD41, 0x0F00, 0xCFC1, 0xCE81, 0x0E40,
        0x0A00, 0xCAC1, 0xCB81, 0x0B40, 0xC901, 0x09C0, 0x0880, 0xC841,
        0xD801, 0x18C0, 0x1980, 0xD941, 0x1B00, 0xDBC1, 0xDA81, 0x1A40,
        0x1E00, 0xDEC1, 0xDF81, 0x1F40, 0xDD01, 0x1DC0, 0x1C80, 0xDC41,
        0x1400, 0xD4C1, 0xD581, 0x1540, 0xD701, 0x17C0, 0x1680, 0xD641,
        0xD201, 0x12C0, 0x1380, 0xD341, 0x1100, 0xD1C1, 0xD081, 0x1040,
        0xF001, 0x30C0, 0x3180, 0xF141, 0x3300, 0xF3C1, 0xF281, 0x3240,
        0x3600, 0xF6C1, 0xF781, 0x3740, 0xF501, 0x35C0, 0x3480, 0xF441,
        0x3C00, 0xFCC1, 0xFD81, 0x3D40, 0xFF01, 0x3FC0, 0x3E80, 0xFE41,
        0xFA01, 0x3AC0, 0x3B80, 0xFB41, 0x3900, 0xF9C1, 0xF881, 0x3840,
        0x2800, 0xE8C1, 0xE981, 0x2940, 0xEB01, 0x2BC0, 0x2A80, 0xEA41,
        0xEE01, 0x2EC0, 0x2F80, 0xEF41, 0x2D00, 0xEDC1, 0xEC81, 0x2C40,
        0xE401, 0x24C0, 0x2580, 0xE541, 0x2700, 0xE7C1, 0xE681, 0x2640,
        0x2200, 0xE2C1, 0xE381, 0x2340, 0xE101, 0x21C0, 0x2080, 0xE041,
        0xA001, 0x60C0, 0x6180, 0xA141, 0x6300, 0xA3C1, 0xA281, 0x6240,
        0x6600, 0xA6C1, 0xA781, 0x6740, 0xA501, 0x65C0, 0x6480, 0xA441,
        0x6C00, 0xACC1, 0xAD81, 0x6D40, 0xAF01, 0x6FC0, 0x6E80, 0xAE41,
        0xAA01, 0x6AC0, 0x6B80, 0xAB41, 0x6900, 0xA9C1, 0xA881, 0x6840,
        0x7800, 0xB8C1, 0xB981, 0x7940, 0xBB01, 0x7BC0, 0x7A80, 0xBA41,
        0xBE01, 0x7EC0, 0x7F80, 0xBF41, 0x7D00, 0xBDC1, 0xBC81, 0x7C40,
        0xB401, 0x74C0, 0x7580, 0xB541, 0x7700, 0xB7C1, 0xB681, 0x7640,
        0x7200, 0xB2C1, 0xB381, 0x7340, 0xB101, 0x71C0, 0x7080, 0xB041,
        0x5000, 0x90C1, 0x9181, 0x5140, 0x9301, 0x53C0, 0x5280, 0x9241,
        0x9601, 0x56C0, 0x5780, 0x9741, 0x5500, 0x95C1, 0x9481, 0x5440,
        0x9C01, 0x5CC0, 0x5D80, 0x9D41, 0x5F00, 0x9FC1, 0x9E81, 0x5E40,
        0x5A00, 0x9AC1, 0x9B81, 0x5B40, 0x9901, 0x59C0, 0x5880, 0x9841,
        0x8801, 0x48C0, 0x4980, 0x8941, 0x4B00, 0x8BC1, 0x8A81, 0x4A40,
        0x4E00, 0x8EC1, 0x8F81, 0x4F40, 0x8D01, 0x4DC0, 0x4C80, 0x8C41,
        0x4400, 0x84C1, 0x8581, 0x4540, 0x8701, 0x47C0, 0x4680, 0x8641,
        0x8201, 0x42C0, 0x4380, 0x8341, 0x4100, 0x81C1, 0x8081, 0x4040
    ];

   /**
    * getArcCRC(db, crc)
    *
    * Calculate CRC for the given ARC data.
    *
    * The logic for this method of calculating the CRC 16 bit polynomial is taken
    * from an article by David Schwaderer in the April 1985 issue of PC Tech Journal.
    *
    * @param {DataBuffer} db
    * @param {number} [crc] (running CRC value, if any)
    */
    static getArcCRC(db, crc = 0)
    {
        for (let i = 0; i < db.length; i++) {
            crc = LegacyArc.crcTable[(crc ^ db.buffer[i]) & 0xff] ^ ((crc >> 8) & 0xff);
        }
        return crc;
    }
}

/**
 * Legacy ZIP Support (decompression only)
 *
 * @class LegacyZip
 */
export class LegacyZip
{
    /**
     * Deflate is the modern zlib standard (not sure about Deflate64); the rest are "legacy" methods.
     * I'm also not sure when Deflate came into existence (reportedly with the release of PKZIP 2.x), but
     * it's certainly not used by ANY of the thousands of PC-SIG 9th edition ZIP files.
     */
    static methodNames = [
        "Store", "Shrink", "Reduce1", "Reduce2", "Reduce3", "Reduce4", "Implode", undefined, "Deflate", "Deflate64", "Implode2"
    ];

    /**
     * stretchSync(src, dst_len)
     *
     * @param {DataBuffer} src (SHRINK data)
     * @param {number} dst_len
     * @returns {DataBuffer|null}
     */
    static stretchSync(src, dst_len)
    {
        let stretch = new ZipStretch();
        stretch.decomp(src, dst_len);
        //
        // We used to delete stretch.dst if decomp() returned false, but we now let getOutput() return whatever it can.
        //
        return stretch.getOutput();
    }

    /**
     * expandSync(src, dst_len, comp_factor)
     *
     * @param {DataBuffer} src (REDUCE data)
     * @param {number} dst_len
     * @param {number} comp_factor
     * @returns {DataBuffer|null}
     */
    static expandSync(src, dst_len, comp_factor)
    {
        let expand = new ZipExpand();
        expand.decomp(src, dst_len, comp_factor);
        //
        // We used to delete expand.dst if decomp() returned false, but we now let getOutput() return whatever it can.
        //
        return expand.getOutput();
    }

    /**
     * explodeSync(src, dst_len, large_wnd, lit_tree)
     *
     * Decompress (explode) the data in src. The uncompressed data is dst_len
     * bytes long. large_wnd is true if a large window was used for compression,
     * and lit_tree is true if literals were Huffman coded.
     *
     * Returns a Decompress object.  Call getBytesRead() to get the number of source
     * bytes read, and getOutput() to the destination data.
     *
     * @param {DataBuffer} src (IMPLODE data)
     * @param {number} dst_len
     * @param {boolean} large_wnd
     * @param {boolean} lit_tree
     * @returns {DataBuffer|null}
     */
    static explodeSync(src, dst_len, large_wnd, lit_tree)
    {
        let explode = new ZipExplode();
        //
        // We make two attempts to explode the data, in case we encounter the rare PKZIP 1.01/1.02 bug
        // described here: https://www.hanshq.net/zip2.html (search for references to "pk101_bug_compat").
        //
        if (!explode.decomp(src, dst_len, large_wnd, lit_tree, false) || explode.getBytesRead() != src.length) {
            if (!explode.decomp(src, dst_len, large_wnd, lit_tree, true) || explode.getBytesRead() != src.length) {
                //
                // We used to delete explode.dst if decomp() returned false, but we now let getOutput() return whatever it can.
                //
            }
            else {
                //
                // We can see the aforementioned bug when decompressing cd.textfiles.com/cds/originalsw/download/25/PKZ101.EXE
                //
                assert(true, "explodeSync() recovered");
            }
        }
        return explode.getOutput();
    }

    /**
     * blastSync(src)
     *
     * @param {DataBuffer} src (IMPLODE_DCL data)
     * @returns {DataBuffer|null}
     */
    static blastSync(src)
    {
        let blast = new ZipBlast();
        blast.decomp(src);
        return blast.getOutput;
    }

    static crcTable = (() => {
        const table = [];
        for (let i = 0; i < 256; i++) {
            let c = i;
            for (let j = 0; j < 8; j++) {
                c = (c & 1)? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
            }
            table[i] = c;
        }
        return table;
    })();

  /**
    * getZipCRC(db, crc)
    *
    * Calculate CRC for the given ZIP data.
    *
    * @param {DataBuffer} db
    * @param {number} [crc] (running CRC value, if any)
    * @returns {number}
    */
    static getZipCRC(db, crc = -1)
    {
        for (let i = 0; i < db.length; i++) {
            crc = LegacyZip.getZipCRCByte(db.buffer[i], crc);
        }
        return crc;
    }

   /**
    * getZipCRCByte(b, crc)
    *
    * Calculate CRC for the given ZIP byte.
    *
    * @param {number} b
    * @param {number} [crc] (running CRC value, if any)
    * @returns {number}
    */
    static getZipCRCByte(b, crc = -1)
    {
        return LegacyZip.crcTable[(crc ^ b) & 0xff] ^ (crc >>> 8);
    }
}

/**
 * @class BitStream
 * @property {DataBuffer} db            // Source bytes
 * @property {number} bit_pos           // Bit position of the next bit to read
 * @property {number} bit_end           // Bit position of the past-the-end bit
 */
class BitStream
{
    /**
     * The original code set MIN_BITS to (64 - 7), because it read 64 bits at a time,
     * and if bit_pos wasn't on a byte boundary, it would shift 1-7 zeros into the top
     * of the result, and the caller would assert that it never used more than MIN_BITS.
     *
     * Well, this version reads 32 bits at a time, because while there is now BigInt
     * support in JavaScript, it's faster sticking with 32-bit values.  Unfortunately,
     * setting MIN_BITS to (32 - 7) triggered assertions that the caller (ZipExplode.decomp())
     * was using more than 25 bits from a single bits() call, which was risky.
     *
     * So now we set MIN_BITS to 32, and at the same time, whenever bit_pos isn't on a
     * byte boundary, we pad the result with more bits from the stream instead of zeros;
     * it may often be unnecessary, but if we can't predict the caller's needs, then
     * we have no choice.  Callers that specify how many bits they need will not pay that
     * penalty.
     */
    static MIN_BITS = 32;

    /**
     * constructor(db)
     *
     * @this {BitStream}
     * @param {DataBuffer} db
     */
    constructor(db)
    {
        this.db = db;
        this.end = db.length;
        this.bit_pos = 0;
        this.bit_end = this.end * 8;
        this.cachePos = -1;
        this.cacheBits = 0;
    }

    /**
     * avail(n)
     *
     * @this {BitStream}
     * @param {number} n
     * @returns {boolean} (true if at least n bits are available)
     */
    avail(n)
    {
        return (this.bit_pos + n <= this.bit_end);
    }

    /**
     * empty()
     *
     * Equivalent to !avail(0)
     *
     * @this {BitStream}
     * @returns {boolean} (true if no more bits available)
     */
    empty()
    {
        return (this.bit_pos >= this.bit_end);
    }

    /**
     * bits(lsb, fAdvance)
     *
     * Gets the next bits from the input stream. The number of bits returned is
     * between MIN_BITS and 32, depending on the position in the stream, or fewer
     * if the end of stream is reached. The upper bits are zero-padded.
     *
     * Calling bits(n, true) is equivalent to lsb(bits(), n) followed by advance(n).
     *
     * @this {BitStream}
     * @param {number} [lsb] (optional number of least significant bits)
     * @param {boolean} [fAdvance] (true to advance the bit position by lsb bits)
     */
    bits(lsb = 0, fAdvance = false)
    {
        let bits;
        let next = (this.bit_pos >> 3);
        let bit_off = this.bit_pos % 8;

        if (DEBUG) {
            assert(!lsb || lsb <= BitStream.MIN_BITS);
            assert(next <= this.end, "reading past end of BitStream");
        }
        let bytesAvail = this.end - next;
        if (bytesAvail >= 4) {
            if (next == this.cachePos) {
                bits = this.cacheBits;
            } else {
                bits = this.cacheBits = this.db.readUInt32LE(next);
                this.cachePos = next;
            }
            next += 4;
            bytesAvail = 4;
        } else {
            bits = 0;
            for (let i = 0; i < bytesAvail; i++) {
                bits |= this.db.readUInt8(next++) << (i << 3);
            }
        }
        if (bit_off) {
            bits >>>= bit_off;
            let bitsAvail = (bytesAvail << 3) - bit_off;
            /**
             * If we're not sure how many bits the caller wants (because lsb is zero), or
             * the caller wants more bits than we just read, then try to read one more byte.
             */
            if ((!lsb && BitStream.MIN_BITS == 32 || lsb > bitsAvail) && next < this.end) {
                let b = this.db.readUInt8(next) << (32 - bit_off);
                bits |= b;
            }
        }
        if (lsb) {
            bits &= (1 << lsb) - 1;
            if (fAdvance) this.advance(lsb);
        }
        return bits;
    }

    /**
     * bitsSigned(lsb, fAdvance)
     *
     * Identical to bits(), but the highest requested bit is treated as a sign bit,
     * so if that bit is set, then it is propagated to the sign bit of our return value.
     *
     * @this {BitStream}
     * @param {number} [lsb] (optional number of least significant bits)
     * @param {boolean} [fAdvance] (true to advance the bit position by lsb bits)
     */
    bitsSigned(lsb = 0, fAdvance = false)
    {
        let bits = this.bits(lsb, fAdvance);
        if (lsb > 0 && lsb < 32 && (bits & (1 << (lsb - 1)))) {
            bits |= -1 << lsb;
        }
        return bits;
    }

    /**
     * advance(n)
     *
     * Advances n bits in the BitStream.
     *
     * @this {BitStream}
     * @param {number} n
     * @returns {boolean} (true if successful, false if that many bits are not available in the stream)
     */
    advance(n)
    {
        if (DEBUG) {
            assert(this.bit_pos <= this.bit_end);
        }
        if (this.bit_end - this.bit_pos < n) {
            return false;
        }
        this.bit_pos += n;
        return true;
    }

    /**
     * getRead(n)
     *
     * Returns the number of n-bit units read (ie, number of bits if n is 1, number of bytes if n is 8, etc)
     *
     * @this {BitStream}
     * @param {number} [n]
     * @returns {number}
     */
    getRead(n = 1)
    {
        return (BitStream.roundUp(this.bit_pos, n) / n);
    }

    /**
     * lsb(v, n)
     *
     * Returns the bottom n bits ("least significant bits") of v.
     *
     * @param {number} v
     * @param {number} n
     * @returns {number}
     */
    static lsb(v, n)
    {
        return v & ((1 << n) - 1);
    }

    /**
     * roundUp(x, m)
     *
     * Rounds x up to the next multiple of m, which must be a power of 2.
     *
     * @param {number} x
     * @param {number} m
     * @returns {number}
     */
    static roundUp(x, m)
    {
        if (DEBUG) {
            assert((m & (m - 1)) == 0, `${m} must be a power of two`);
        }
        return (x + m - 1) & (-m);              // Hacker's Delight (2nd), 3-1.
    }
}

/**
 * @typedef {Object} Lookup
 * @property {number} sym
 * @property {number} len
 *
 * @class HuffmanDecoder
 * @property {Array.<Lookup>} table
 */
class HuffmanDecoder
{
    static MAX_HUFFMAN_SYMBOLS = 288;           // deflate uses max 288 symbols
    static MAX_HUFFMAN_BITS = 16;               // implode uses max 16-bit codewords
    static HUFFMAN_LOOKUP_TABLE_BITS = 8;       // seems a good trade-off

    /**
     * constructor()
     *
     * @this {HuffmanDecoder}
     */
    constructor()
    {
        /**
         * In the original implementation, table was an array of 16-bit values,
         * split into two bit-fields:
         *
         *      sym: 9 bits (wide enough to fit the max symbol nbr)
         *      len: 8 bits (0 means no symbol)
         *
         * In this implementation, each entry is simply an object with 'sym' and 'len' properties.
         */
        this.table = new Array(1 << HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);
        this.sentinel_bits = new Array(HuffmanDecoder.MAX_HUFFMAN_BITS + 1);
        this.offset_first_sym_idx = new Array(HuffmanDecoder.MAX_HUFFMAN_BITS + 1);
        this.syms = new Array(HuffmanDecoder.MAX_HUFFMAN_SYMBOLS);
        this.num_syms = 0;                      // for debugging only
    }

    /**
     * init(lengths, n)
     *
     * @this {HuffmanDecoder}
     * @param {Array.<number>} lengths
     * @param {number} n
     * @returns {boolean}
     */
    init(lengths, n)
    {
        let /* uint16_t */ count = new Array(HuffmanDecoder.MAX_HUFFMAN_BITS + 1).fill(0);
        let /* uint16_t */ code = new Array(HuffmanDecoder.MAX_HUFFMAN_BITS + 1);
        let /* uint16_t */ sym_idx = new Array(HuffmanDecoder.MAX_HUFFMAN_BITS + 1);

        if (DEBUG) {
            assert(n <= HuffmanDecoder.MAX_HUFFMAN_SYMBOLS);
        }
        this.num_syms = n;
        /**
         * Zero-initialize the lookup table
         */
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = {
                sym: 0,
                len: 0
            };
        }
        /**
         * Count the number of codewords of each length
         */
        for (let i = 0; i < n; i++) {
            if (DEBUG) {
                assert(lengths[i] <= HuffmanDecoder.MAX_HUFFMAN_BITS);
            }
            count[lengths[i]]++;
        }
        count[0] = 0;           // ignore zero-length codewords
        /**
         * Compute sentinel_bits and offset_first_sym_idx for each length
         */
        code[0] = 0;
        sym_idx[0] = 0;
        for (let l = 1; l <= HuffmanDecoder.MAX_HUFFMAN_BITS; l++) {
            /**
             * First canonical codeword of this length
             */
            code[l] = ((code[l - 1] + count[l - 1]) << 1) & 0xffff;

            if (count[l] != 0 && code[l] + count[l] - 1 > (1 << l) - 1) {
                /**
                 * The last codeword is longer than l bits
                 */
                return false;
            }

            let s = ((code[l] + count[l]) << (HuffmanDecoder.MAX_HUFFMAN_BITS - l)) & 0xffffffff;
            this.sentinel_bits[l] = s;
            if (DEBUG) {
                assert(this.sentinel_bits[l] >= code[l], "overflow");
            }
            sym_idx[l] = sym_idx[l - 1] + count[l - 1];
            this.offset_first_sym_idx[l] = (sym_idx[l] - code[l]) & 0xffff;
        }
        /**
         * Build mapping from index to symbol and populate the lookup table
         */
        for (let i = 0; i < n; i++) {
            let l = lengths[i];
            if (l == 0) continue;

            this.syms[sym_idx[l]] = i & 0xffff;
            sym_idx[l]++;

            if (l <= HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS) {
                this.insert(i, l, code[l]);
                code[l]++;
            }
        }
        return true;
    }

    /**
     * insert(sym, len, codeword)
     *
     * @this {HuffmanDecoder}
     * @param {number} sym
     * @param {number} len
     * @param {number} codeword
     */
    insert(/* size_t */ sym, /* int */ len, /* uint16_t */ codeword)
    {
        if (DEBUG) {
            assert(len <= HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);
        }
        codeword = HuffmanDecoder.reverse16(codeword, len);     // Make it LSB-first
        let pad_len = HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS - len;
        /**
         * Pad the pad_len upper bits with all bit combinations
         */
        for (let padding = 0; padding < (1 << pad_len); padding++) {
            let index = (codeword | (padding << len)) & 0xffff;
            this.table[index].sym = sym & 0xffff;
            this.table[index].len = len & 0xffff;
            if (DEBUG) {
                assert(this.table[index].sym == sym && this.table[index].len == len, "bitfield overflow");
            }
        }
    }

    /**
     * decode(bits)
     *
     * Decode a symbol from the LSB-first zero-padded bits.
     *
     * Returns {sym, used}, where sym is the decoded symbol number or -1 if no
     * symbol could be decoded, and used is the number of bits used to decode the
     * symbol, or zero if no symbol could be decoded.
     *
     * @this {HuffmanDecoder}
     * @param {number} bits
     * @returns {Object} ({sym, used})
     */
    decode(/* uint16_t */ bits)
    {
        bits &= 0xffff;
        /**
         * First try the lookup table
         */
        let lookup_bits = BitStream.lsb(bits, HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);
        if (DEBUG) {
            assert(lookup_bits < this.table.length);
        }
        if (this.table[lookup_bits].len) {
            if (DEBUG) {
                assert(this.table[lookup_bits].len <= HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);
                assert(this.table[lookup_bits].sym < this.num_syms);
            }
            return {sym: this.table[lookup_bits].sym, used: this.table[lookup_bits].len};
        }
        /**
         * Then do canonical decoding with the bits in MSB-first order
         */
        bits = HuffmanDecoder.reverse16(bits, HuffmanDecoder.MAX_HUFFMAN_BITS);
        for (let l = HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS + 1; l <= HuffmanDecoder.MAX_HUFFMAN_BITS; l++) {
            if (bits < this.sentinel_bits[l]) {
                bits >>= HuffmanDecoder.MAX_HUFFMAN_BITS - l;
                let sym_idx = (this.offset_first_sym_idx[l] + bits) & 0xffff;
                if (DEBUG) {
                    assert(sym_idx < this.num_syms);
                }
                return {sym: this.syms[sym_idx], used: l};
            }
        }
        return {sym: -1, used: 0};
    }

    /**
     * reverse16(x, n)
     *
     * Reverse the n least significant bits of x.
     * The (16 - n) most significant bits of the result will be zero.
     *
     * @param {number} x
     * @param {number} n
     * @returns {number}
     */
    static reverse16(/* uint16_t */ x, /* int */ n)
    {
        let /* uint16_t */ lo, hi;
        let /* uint16_t */ reversed;
        if (DEBUG) {
            assert(n > 0 && n <= 16);
        }
        lo = x & 0xff;
        hi = x >> 8;
        reversed = ((HuffmanDecoder.reverse8_tbl[lo] << 8) | HuffmanDecoder.reverse8_tbl[hi]) & 0xffff;
        return reversed >> (16 - n);
    }

    static /* uint8_t */ reverse8_tbl = [
        /* 0x00 */ 0x00,    /* 0x01 */ 0x80,    /* 0x02 */ 0x40,    /* 0x03 */ 0xc0,
        /* 0x04 */ 0x20,    /* 0x05 */ 0xa0,    /* 0x06 */ 0x60,    /* 0x07 */ 0xe0,
        /* 0x08 */ 0x10,    /* 0x09 */ 0x90,    /* 0x0a */ 0x50,    /* 0x0b */ 0xd0,
        /* 0x0c */ 0x30,    /* 0x0d */ 0xb0,    /* 0x0e */ 0x70,    /* 0x0f */ 0xf0,
        /* 0x10 */ 0x08,    /* 0x11 */ 0x88,    /* 0x12 */ 0x48,    /* 0x13 */ 0xc8,
        /* 0x14 */ 0x28,    /* 0x15 */ 0xa8,    /* 0x16 */ 0x68,    /* 0x17 */ 0xe8,
        /* 0x18 */ 0x18,    /* 0x19 */ 0x98,    /* 0x1a */ 0x58,    /* 0x1b */ 0xd8,
        /* 0x1c */ 0x38,    /* 0x1d */ 0xb8,    /* 0x1e */ 0x78,    /* 0x1f */ 0xf8,
        /* 0x20 */ 0x04,    /* 0x21 */ 0x84,    /* 0x22 */ 0x44,    /* 0x23 */ 0xc4,
        /* 0x24 */ 0x24,    /* 0x25 */ 0xa4,    /* 0x26 */ 0x64,    /* 0x27 */ 0xe4,
        /* 0x28 */ 0x14,    /* 0x29 */ 0x94,    /* 0x2a */ 0x54,    /* 0x2b */ 0xd4,
        /* 0x2c */ 0x34,    /* 0x2d */ 0xb4,    /* 0x2e */ 0x74,    /* 0x2f */ 0xf4,
        /* 0x30 */ 0x0c,    /* 0x31 */ 0x8c,    /* 0x32 */ 0x4c,    /* 0x33 */ 0xcc,
        /* 0x34 */ 0x2c,    /* 0x35 */ 0xac,    /* 0x36 */ 0x6c,    /* 0x37 */ 0xec,
        /* 0x38 */ 0x1c,    /* 0x39 */ 0x9c,    /* 0x3a */ 0x5c,    /* 0x3b */ 0xdc,
        /* 0x3c */ 0x3c,    /* 0x3d */ 0xbc,    /* 0x3e */ 0x7c,    /* 0x3f */ 0xfc,
        /* 0x40 */ 0x02,    /* 0x41 */ 0x82,    /* 0x42 */ 0x42,    /* 0x43 */ 0xc2,
        /* 0x44 */ 0x22,    /* 0x45 */ 0xa2,    /* 0x46 */ 0x62,    /* 0x47 */ 0xe2,
        /* 0x48 */ 0x12,    /* 0x49 */ 0x92,    /* 0x4a */ 0x52,    /* 0x4b */ 0xd2,
        /* 0x4c */ 0x32,    /* 0x4d */ 0xb2,    /* 0x4e */ 0x72,    /* 0x4f */ 0xf2,
        /* 0x50 */ 0x0a,    /* 0x51 */ 0x8a,    /* 0x52 */ 0x4a,    /* 0x53 */ 0xca,
        /* 0x54 */ 0x2a,    /* 0x55 */ 0xaa,    /* 0x56 */ 0x6a,    /* 0x57 */ 0xea,
        /* 0x58 */ 0x1a,    /* 0x59 */ 0x9a,    /* 0x5a */ 0x5a,    /* 0x5b */ 0xda,
        /* 0x5c */ 0x3a,    /* 0x5d */ 0xba,    /* 0x5e */ 0x7a,    /* 0x5f */ 0xfa,
        /* 0x60 */ 0x06,    /* 0x61 */ 0x86,    /* 0x62 */ 0x46,    /* 0x63 */ 0xc6,
        /* 0x64 */ 0x26,    /* 0x65 */ 0xa6,    /* 0x66 */ 0x66,    /* 0x67 */ 0xe6,
        /* 0x68 */ 0x16,    /* 0x69 */ 0x96,    /* 0x6a */ 0x56,    /* 0x6b */ 0xd6,
        /* 0x6c */ 0x36,    /* 0x6d */ 0xb6,    /* 0x6e */ 0x76,    /* 0x6f */ 0xf6,
        /* 0x70 */ 0x0e,    /* 0x71 */ 0x8e,    /* 0x72 */ 0x4e,    /* 0x73 */ 0xce,
        /* 0x74 */ 0x2e,    /* 0x75 */ 0xae,    /* 0x76 */ 0x6e,    /* 0x77 */ 0xee,
        /* 0x78 */ 0x1e,    /* 0x79 */ 0x9e,    /* 0x7a */ 0x5e,    /* 0x7b */ 0xde,
        /* 0x7c */ 0x3e,    /* 0x7d */ 0xbe,    /* 0x7e */ 0x7e,    /* 0x7f */ 0xfe,
        /* 0x80 */ 0x01,    /* 0x81 */ 0x81,    /* 0x82 */ 0x41,    /* 0x83 */ 0xc1,
        /* 0x84 */ 0x21,    /* 0x85 */ 0xa1,    /* 0x86 */ 0x61,    /* 0x87 */ 0xe1,
        /* 0x88 */ 0x11,    /* 0x89 */ 0x91,    /* 0x8a */ 0x51,    /* 0x8b */ 0xd1,
        /* 0x8c */ 0x31,    /* 0x8d */ 0xb1,    /* 0x8e */ 0x71,    /* 0x8f */ 0xf1,
        /* 0x90 */ 0x09,    /* 0x91 */ 0x89,    /* 0x92 */ 0x49,    /* 0x93 */ 0xc9,
        /* 0x94 */ 0x29,    /* 0x95 */ 0xa9,    /* 0x96 */ 0x69,    /* 0x97 */ 0xe9,
        /* 0x98 */ 0x19,    /* 0x99 */ 0x99,    /* 0x9a */ 0x59,    /* 0x9b */ 0xd9,
        /* 0x9c */ 0x39,    /* 0x9d */ 0xb9,    /* 0x9e */ 0x79,    /* 0x9f */ 0xf9,
        /* 0xa0 */ 0x05,    /* 0xa1 */ 0x85,    /* 0xa2 */ 0x45,    /* 0xa3 */ 0xc5,
        /* 0xa4 */ 0x25,    /* 0xa5 */ 0xa5,    /* 0xa6 */ 0x65,    /* 0xa7 */ 0xe5,
        /* 0xa8 */ 0x15,    /* 0xa9 */ 0x95,    /* 0xaa */ 0x55,    /* 0xab */ 0xd5,
        /* 0xac */ 0x35,    /* 0xad */ 0xb5,    /* 0xae */ 0x75,    /* 0xaf */ 0xf5,
        /* 0xb0 */ 0x0d,    /* 0xb1 */ 0x8d,    /* 0xb2 */ 0x4d,    /* 0xb3 */ 0xcd,
        /* 0xb4 */ 0x2d,    /* 0xb5 */ 0xad,    /* 0xb6 */ 0x6d,    /* 0xb7 */ 0xed,
        /* 0xb8 */ 0x1d,    /* 0xb9 */ 0x9d,    /* 0xba */ 0x5d,    /* 0xbb */ 0xdd,
        /* 0xbc */ 0x3d,    /* 0xbd */ 0xbd,    /* 0xbe */ 0x7d,    /* 0xbf */ 0xfd,
        /* 0xc0 */ 0x03,    /* 0xc1 */ 0x83,    /* 0xc2 */ 0x43,    /* 0xc3 */ 0xc3,
        /* 0xc4 */ 0x23,    /* 0xc5 */ 0xa3,    /* 0xc6 */ 0x63,    /* 0xc7 */ 0xe3,
        /* 0xc8 */ 0x13,    /* 0xc9 */ 0x93,    /* 0xca */ 0x53,    /* 0xcb */ 0xd3,
        /* 0xcc */ 0x33,    /* 0xcd */ 0xb3,    /* 0xce */ 0x73,    /* 0xcf */ 0xf3,
        /* 0xd0 */ 0x0b,    /* 0xd1 */ 0x8b,    /* 0xd2 */ 0x4b,    /* 0xd3 */ 0xcb,
        /* 0xd4 */ 0x2b,    /* 0xd5 */ 0xab,    /* 0xd6 */ 0x6b,    /* 0xd7 */ 0xeb,
        /* 0xd8 */ 0x1b,    /* 0xd9 */ 0x9b,    /* 0xda */ 0x5b,    /* 0xdb */ 0xdb,
        /* 0xdc */ 0x3b,    /* 0xdd */ 0xbb,    /* 0xde */ 0x7b,    /* 0xdf */ 0xfb,
        /* 0xe0 */ 0x07,    /* 0xe1 */ 0x87,    /* 0xe2 */ 0x47,    /* 0xe3 */ 0xc7,
        /* 0xe4 */ 0x27,    /* 0xe5 */ 0xa7,    /* 0xe6 */ 0x67,    /* 0xe7 */ 0xe7,
        /* 0xe8 */ 0x17,    /* 0xe9 */ 0x97,    /* 0xea */ 0x57,    /* 0xeb */ 0xd7,
        /* 0xec */ 0x37,    /* 0xed */ 0xb7,    /* 0xee */ 0x77,    /* 0xef */ 0xf7,
        /* 0xf0 */ 0x0f,    /* 0xf1 */ 0x8f,    /* 0xf2 */ 0x4f,    /* 0xf3 */ 0xcf,
        /* 0xf4 */ 0x2f,    /* 0xf5 */ 0xaf,    /* 0xf6 */ 0x6f,    /* 0xf7 */ 0xef,
        /* 0xf8 */ 0x1f,    /* 0xf9 */ 0x9f,    /* 0xfa */ 0x5f,    /* 0xfb */ 0xdf,
        /* 0xfc */ 0x3f,    /* 0xfd */ 0xbf,    /* 0xfe */ 0x7f,    /* 0xff */ 0xff
    ];
}

/**
 * @class Decompress
 * @property {BitStream} bs
 * @property {DataBuffer} dst
 *
 * Decompress is the base class for ArcUnpack, ZipStretch, ZipExpand, and ZipExplode classes.
 *
 * ArcUnpack, in turn, is the base class for ArcUnsqueeze, ArcUncrunch, and ArcUncrush classes.
 */
class Decompress
{
    /**
     * init(src, dst_len)
     *
     * Initialize buffers and decompression state.
     *
     * @this {Decompress}
     * @param {DataBuffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        this.bs = new BitStream(src);
        this.dst = DataBuffer.alloc(dst_len);
        this.dst_pos = 0;
    }

    /**
     * getBytesRead()
     *
     * Returns the number of bytes read from the source BitStream.
     *
     * @this {Decompress}
     * @returns {number}
     */
    getBytesRead()
    {
        return this.bs.getRead(8);
    }

    /**
     * getOutput()
     *
     * Get the output buffer.
     *
     * @this {Decompress}
     * @returns {DataBuffer|null}
     */
    getOutput()
    {
        if (this.dst) {
            if (DEBUG) {
                assert(this.dst_pos == this.dst.length);
            }
            if (this.dst_pos < this.dst.length) {
                this.dst = this.dst.slice(0, this.dst_pos);
            }
        }
        return this.dst || null;
    }

    /**
     * readByte(off)
     *
     * Reads a byte from the output buffer.
     *
     * @this {Decompress}
     * @param {number} off
     * @returns {number}
     */
    readByte(off)
    {
        let b = this.dst.buffer[off];
        if (DEBUG) {
            assert(b >= 0);
        }
        return b;
        // return this.dst.readUInt8(off);
    }

    /**
     * copyBytes(to, from, len)
     *
     * Copies len bytes to/from the output buffer.
     *
     * @this {Decompress}
     * @param {number} to
     * @param {number} from
     * @param {number} len
     */
    copyBytes(to, from, len)
    {
        if (DEBUG) {
            assert(len > 0 && to + len <= this.dst.length && from + len < this.dst.length);
        }
        for (let i = 0; i < len; i++) {
            // this.writeByte(this.readByte(from + i), to + i);
            this.dst.buffer[to + i] = this.dst.buffer[from + i];
        }
    }

    /**
     * writeByte(b, off)
     *
     * Writes a byte to the output buffer at the specified offset.
     *
     * @this {Decompress}
     * @param {number} b
     * @param {number} [off]
     */
    writeByte(b, off)
    {
        if (DEBUG) {
            assert(b >= 0 && off < this.dst.length);
        }
        // this.dst.writeUInt8(b, off);
        this.dst.buffer[off] = b;
    }

    /**
     * writeOutput(b, fAdvance)
     *
     * Appends to the output buffer.
     *
     * @this {Decompress}
     * @param {number} b
     * @param {boolean} [fAdvance]
     */
    writeOutput(b, fAdvance = true)
    {
        if (DEBUG) {
            assert(this.dst_pos < this.dst.length);
        }
        if (this.dst_pos < this.dst.length) {
            this.dst.buffer[this.dst_pos] = b;
            // this.writeByte(b, this.dst_pos);
            if (fAdvance) this.dst_pos++;
        }
    }
}

/**
 * @class ArcUnpack
 *
 * ArcUnpack is used to decompress packed streams.
 */
class ArcUnpack extends Decompress
{
    /**
     * Stuff for repeat unpacking
     */
    static DLE = 0x90;          // repeat byte flag

    /**
     * Repeat unpacking states
     */
    static NOHIST = 0;          // no relevant history
    static INREP = 1;           // sending a repeated value
    static MYDATA = 32766;      // size of data[]

    /**
     * init(src, dst_len, packed)
     *
     * @this {ArcUnpack}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {boolean} [packed]
     */
    init(src, dst_len, packed)
    {
        super.init(src, dst_len);

        this.state = ArcUnpack.NOHIST;
        this.lastc = -1;

        this.data = new Array(ArcUnpack.MYDATA);

        if (!packed) {
            this.putBytes = this.moveBytes.bind(this);
        } else {
            this.putBytes = this.unpackBytes.bind(this);
        }
    }

    /**
     * moveBytes(data, len)
     *
     * @this {ArcUnpack}
     * @param {Array} data
     * @param {number} len
     */
    moveBytes(data, len)
    {
        for (let i = 0; i < len; i++) {
            this.writeOutput(data[i]);
        }
    }

    /**
     * unpackBytes(data, len)
     *
     * This routine is used to decode non-repeat (packed) compression streams.
     * Bytes are passed one at a time in coded format, and are written out uncoded.
     * The data is stored normally, except that runs of more than two characters
     * are represented as:
     *
     *      <char> <DLE> <count>
     *
     * With a special case that a count of zero indicates a DLE as data, not as a
     * repeat marker.
     *
     * @this {ArcUnpack}
     * @param {Array} data
     * @param {number} len
     */
    unpackBytes(data, len)
    {
        for (let i = 0; i < len; i++) {
            if (this.state == ArcUnpack.INREP) {
                if (data[i]) {
                    while (--data[i]) {
                        if (DEBUG) {
                            assert(this.lastc >= 0);
                        }
                        this.writeOutput(this.lastc);
                    }
                } else {
                    this.writeOutput(ArcUnpack.DLE);
                }
                this.state = ArcUnpack.NOHIST;
            } else {
                if (data[i] != ArcUnpack.DLE) {
                    this.writeOutput(this.lastc = data[i]);
                } else {
                    this.state = ArcUnpack.INREP;
                }
            }
        }
    }

    /**
     * decomp(src, dst_len)
     *
     * Decompresses a packed stream.
     *
     * @this {ArcUnpack}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @returns {boolean|null}
     */
    decomp(src, dst_len)
    {
        this.init(src, dst_len, true);
        this.putBytes(src.buffer, src.length);
        return true;
    }
}

/**
 * @class ArcUnsqueeze
 *
 * ArcUnsqueeze is used to decompress squeezed streams.
 */
class ArcUnsqueeze extends ArcUnpack
{
    static SPEOF = 256;                 // special endfile token
    static NUMVALS = 257;               // 256 data values plus SPEOF

    /**
     * init(src, dst_len)
     *
     * @this {ArcUnsqueeze}
     * @param {DataBuffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        super.init(src, dst_len, true);

        /**
         * Initialize Huffman unsqueezing (from init_usq() in arcusq.c)
         */
        this.numNodes = this.bs.bits(16, true);
        if (this.numNodes >= ArcUnsqueeze.NUMVALS) {
            throw new Error("Invalid decode tree");
        }

        /**
         * Initialize for possible empty tree (SPEOF only)
         *
         * Each node entry contain two child entries: child[0] aka "left", and child[1] aka "right".
         */
        this.node = new Array(this.numNodes);
        this.node[0] = {child: [-(ArcUnsqueeze.SPEOF + 1), -(ArcUnsqueeze.SPEOF + 1)]};

        /**
         * Get decoding tree from file
         *
         * NOTE: The 16-bit values being pulled from the bit stream (child[0] and child[1]) are signed,
         * so we must fetch them using bitsSigned() instead of bits().
         */
        for (let i = 0; i < this.numNodes; ++i) {
            this.node[i] = {child: [this.bs.bitsSigned(16, true), this.bs.bitsSigned(16, true)]};
        }
    }

    /**
     * getBytes(data)
     *
     * Get bytes from squeezed file (see getb_usq() in arcusq.c)
     *
     * @this {ArcUnsqueeze}
     * @param {Array} data
     */
    getBytes(data)
    {
        let j;
        let o = 0;                      // data index
        for (j = 0; j < data.length; j++) {
            /**
             * Follow bit stream in tree to a leaf
             */
            let i;                      // tree index
            for (i = 0; i >= 0;) {
                /**
                 * Work down(up?) from root
                 */
                if (this.bs.empty()) {
                    return j;
                }
                let b = this.bs.bits(1, true);
                i = this.node[i].child[b];
            }
            /**
             * Decode fake node index to original data value
             */
            i = -(i + 1) | 0;
            if (DEBUG) {
                assert(i >= 0 && i <= ArcUnsqueeze.SPEOF);
            }
            if (i == ArcUnsqueeze.SPEOF) break;
            this.data[o++] = i;
        }
        return j;
    }

    /**
     * decomp(src, dst_len)
     *
     * Decompresses a squeezed stream.
     *
     * @this {ArcUnsqueeze}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @returns {boolean|null}
     */
    decomp(src, dst_len)
    {
        let len;
        this.init(src, dst_len, true);
        do {
            len = this.getBytes(this.data);
            this.putBytes(this.data, len);
        } while (len == ArcUnpack.MYDATA);
        return true;
    }
}

/**
 * @class ArcUncrunch
 *
 * ArcUncrunch is used to decompress crunched (LZW) streams.
 */
class ArcUncrunch extends ArcUnpack
{
    /**
     * @typedef {Object} st_entry               // string table entry
     * @property {number} used                  // true when this entry is in use (char)
     * @property {number} follower              // char following string (u_char)
     * @property {number} next                  // ptr to next in collision list (u_short)
     * @property {number} predecessor           // code for preceding string (u_short)
     */

    static TABSIZE  = 4096;                     // string table size
    static STKSIZE  = 4096;                     // stack size (TODO: figure out the minimum size)
    static NO_PRED  = 0xFFFF;
    static EMPTY    = 0xFFFF;
    static NOT_FND  = 0xFFFF;

    /**
     * init(src, dst_len, packed, newHash)
     *
     * @this {ArcUncrunch}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {boolean} packed
     * @param {boolean} newHash
     */
    init(src, dst_len, packed, newHash)
    {
        super.init(src, dst_len, packed);
        if (!newHash) {
            this.getHash = this.oldHash.bind(this);
        } else {
            this.getHash = this.newHash.bind(this);
        }
        this.string_tab = new Array(ArcUncrunch.TABSIZE);
        for (let i = 0; i < this.string_tab.length; i++) {
            this.string_tab[i] = {used: 0, follower: 0, next: 0, predecessor: 0};
        }
        for (let i = 0; i < 256; i++) {
            this.updateTable(ArcUncrunch.NO_PRED, i);
        }
        this.sp = 0;
        this.stack = new Array(ArcUncrunch.STKSIZE);
        this.code_count = ArcUncrunch.TABSIZE - 256;    // note space left in table
        this.inflag = 0;
        this.oldcode = this.getCode();
        this.finchar = this.string_tab[this.oldcode].follower;
        this.o = 0;
        this.data[this.o++] = this.finchar;
    }

    /**
     * oldHash(pred, foll)
     *
     * Calculates a hash value by taking the middle twelve bits of the square of the key.
     *
     * @this {ArcUncrunch}
     * @param {number} pred     // code for preceding string (u_short)
     * @param {number} foll     // value of following char (u_char)
     * @returns {number}        // hash value (u_short)
     */
    oldHash(pred, foll)
    {
        let local = ((pred + foll) | 0x0800) & 0xFFFF;  // create the hash key
        local *= local;                                 // square it
        return (local >> 6) & (ArcUncrunch.TABSIZE-1);  // return the middle 12 bits
    }

    /**
     * newHash(pred, foll)
     *
     * Works somewhat differently from oldHash() and was tried because it makes ARC about
     * 23% faster.  This approach was abandoned because dynamic Lempel-Zev works as well, and
     * packs smaller also.  However, inadvertent release of a developmental copy forces us
     * to leave this in.
     *
     * @this {ArcUncrunch}
     * @param {number} pred     // code for preceding string (u_short)
     * @param {number} foll     // value of following char (u_char)
     * @returns {number}        // hash value (u_short)
     */
    newHash(pred, foll)
    {
        return (((pred + foll) & 0xFFFF) * 15073) & (ArcUncrunch.TABSIZE-1);
    }

    /**
     * eolist(index)
     *
     * Trace down a list of entries with duplicate keys until the last duplicate is found.
     *
     * @this {ArcUncrunch}
     * @param {number} index
     * @returns {number}
     */
    eolist(index)
    {
        let temp;
        while ((temp = this.string_tab[index].next)) {
            index = temp;
        }
        return index;
    }

    /**
     * hash(pred, foll)
     *
     * The hash() routine is used to find a spot in the hash table for a new
     * entry.  It performs a "hash and linear probe" lookup, using getHash() to
     * calculate the starting hash value and eolist() to perform the linear probe.
     *
     * This routine DOES NOT detect a table full condition.  That MUST be checked
     * for elsewhere.
     *
     * @this {ArcUncrunch}
     * @param {number} pred     // code for preceding string (u_short)
     * @param {number} foll     // char following char (u_char)
     * @returns {number}
     */
    hash(pred, foll)
    {
        let ep, local, next;                    // scratch storage

        local = this.getHash(pred, foll);       // get initial hash value

        if (!this.string_tab[local].used) {     // if that spot is free
            return local;                       // then that's all we need
        }
        /**
         * Collision has occurred
         */
        local = this.eolist(local);             // move to last duplicate

        /**
         * We must find an empty spot. We start looking 101 places
         * down the table from the last duplicate.
         */
        next = (local + 101) & 0x0FFF;
        ep = this.string_tab[next];             // initialize pointer

        while (ep.used) {                       // while empty spot not found
            if (++next == ArcUncrunch.TABSIZE) {
                next = 0;                       // wrap to beginning of table
                ep = this.string_tab[0];
            } else {
                ep = this.string_tab[next];     // point to next element in table
            }
        }

        /**
         * local still has the pointer to the last duplicate, while
         * next has the pointer to the spot we found.  We use this to
         * maintain the chain of pointers to duplicates.
         */
        this.string_tab[local].next = next;
        return next;
    }

    /**
     * updateTable(pred, foll)
     *
     * Add an entry to the string table.  As previously stated, no checks are made to ensure
     * that the table has any room.  This must be done elsewhere.
     *
     * @this {ArcUncrunch}
     * @param {number} pred     // code for preceding string (u_short)
     * @param {number} foll     // character which follows string (u_short)
     */
    updateTable(pred, foll)
    {
        let ep = this.string_tab[this.hash(pred, foll)];
        ep.used = true;         // this spot is now in use
        ep.next = 0;            // no duplicates after this yet
        ep.predecessor = pred;  // note code of preceding string
        ep.follower = foll;     // note char after string
    }

    /**
     * getCode()
     *
     * Get the next 12-bit code from the input stream.
     *
     * @this {ArcUncrunch}
     * @returns {number}
     */
    getCode()
    {
        let x;
        if ((this.inflag ^= 1)) {
            x = (this.bs.bits(8, true) << 4) | (this.bs.bits(8) >> 4);
            // x = (*inbeg++ << 4); x |= (*inbeg >> 4);
        }
        else {
            x = ((this.bs.bits(8, true) & 0x0f) << 8) | this.bs.bits(8, true);
            // x = (*inbeg++ & 0x0f) << 8; x |= (*inbeg++);
        }
        return x;
    }

    /**
     * push(c)
     *
     * @this {ArcUncrunch}
     * @param {number} c
     */
    push(c)
    {
        this.stack[this.sp] = c;
        if (++this.sp >= ArcUncrunch.STKSIZE) {
            throw new Error("Stack overflow");
        }
    }

    /**
     * pop()
     *
     * @this {ArcUncrunch}
     * @returns {number}
     */
    pop()
    {
        return (this.sp > 0? this.stack[--this.sp] : ArcUncrunch.EMPTY);
    }

    /**
     * getBytes(data)
     *
     * Get bytes from crunched file (see getb_ucr() in arclzw.c)
     *
     * @this {ArcUncrunch}
     * @param {Array} data
     */
    getBytes(data)
    {
        let code, newcode, len, ep;
        do {
            if (!this.sp) {                     // if stack is empty
                if (!this.bs.avail(12)) {
                    break;                      // insufficient bits remaining
                }
                newcode = this.getCode();
                code = newcode;
                ep = this.string_tab[code];     // initialize string_tab pointer

                if (!ep.used) {                 // if code isn't known
                    code = this.oldcode;
                    ep = this.string_tab[code]; // re-initialize pointer
                    this.push(this.finchar);
                }
                while (ep.predecessor != ArcUncrunch.NO_PRED) {
                    this.push(ep.follower);     // decode string backwards
                    code = ep.predecessor;
                    ep = this.string_tab[code];
                }
                this.finchar = ep.follower;
                this.push(this.finchar);        // save first character also */

                /**
                 * The above loop will terminate, one way or another, with
                 * string_tab[code].follower equal to the first character in
                 * the string.
                 */
                if (this.code_count) {          // if room left in string table
                    this.updateTable(this.oldcode, this.finchar);
                    --this.code_count;
                }
                this.oldcode = newcode;
            }
            this.data[this.o++] = this.pop();
        } while (this.o < this.data.length);
        len = this.o;
        this.o = 0;
        return len;
    }

    /**
     * decomp(src, dst_len, packed, newHash)
     *
     * Decompresses a crunched stream.
     *
     * @this {ArcUncrunch}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {boolean} packed
     * @param {boolean} newHash
     * @returns {boolean|null}
     */
    decomp(src, dst_len, packed, newHash)
    {
        let len;
        this.init(src, dst_len, packed, newHash);
        do {
            len = this.getBytes(this.data);
            this.putBytes(this.data, len);
        } while (len == ArcUnpack.MYDATA);
        return true;
    }
}

/**
 * @class ArcUncrush
 *
 * ArcUncrush is used to decompress crushed or squashed streams.
 */
class ArcUncrush extends ArcUnpack
{
    /**
     * Definitions for the new dynamic Lempel-Zev crunch (herein referred to as "crush")
     */
    static CRBITS   = 12;               // maximum bits per code
    static CRHSIZE  = 5003;             // 80% occupancy
    static CRGAP    = 2048;             // ratio check interval
    static SQBITS   = 13;               // Squash values of above
    static SQHSIZE  = 10007;            // TODO: figure out the minimum sizes for the suffix and prefix arrays
    static STKSIZE  = 4096;             // stack size (TODO: figure out the minimum size)
    static SQGAP    = 10000;
    static INIT_BITS = 9;               // initial number of bits/code

    /**
     * The next two codes should not be changed lightly, as they must not lie within the contiguous general code space.
     */
    static FIRST    = 257;              // first free entry
    static CLEAR    = 256;              // table clear output code

    static RMASK = [                    // right side masks
        0x00, 0x01, 0x03, 0x07, 0x0f, 0x1f, 0x3f, 0x7f, 0xff
    ];
    static LMASK = [                    // left side masks (merely for completeness)
        0xff, 0xfe, 0xfc, 0xf8, 0xf0, 0xe0, 0xc0, 0x80, 0x00
    ];

    /**
     * init(src, dst_len, squashed)
     *
     * @this {ArcUncrush}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {boolean} squashed (false if crushed, true if squashed)
     */
    init(src, dst_len, squashed)
    {
        super.init(src, dst_len, !squashed);

        this.suffix = /* (u_char *) */ new Array(ArcUncrush.SQHSIZE /* * sizeof(u_long) */);
        this.prefix = /* (u_short *) */ new Array(ArcUncrush.SQHSIZE /* * sizeof(u_short) */);
        this.stack = new Array(ArcUncrush.STKSIZE);
        if (squashed) {
            this.maxBits = ArcUncrush.SQBITS;
        } else {
            this.maxBits = ArcUncrush.CRBITS;
            let code = this.bs.bits(8, true);
            if (code != this.maxBits) {
                throw new Error("File packed with " + code + " bits (maximum is " + this.maxBits + ")");
            }
        }

        this.clear_flg = 0;
        this.max_maxcode = 1 << this.maxBits;   // largest possible code (+1)
        this.n_bits = ArcUncrush.INIT_BITS;     // number of bits/code
        this.maxcode = this.maxCode(this.n_bits);
        this.free_ent = ArcUncrush.FIRST;
        this.offset = this.size = 0;
        this.buf = new Array(ArcUncrush.SQBITS);

        /**
         * Initialize the first 256 entries in the tables.
         */
        this.prefix.fill(0, 0, 256);
        for (let code = 255; code >= 0; code--) this.suffix[code] = code;
    }

    /**
     * maxCode(nBits)
     *
     * @this {ArcUncrush}
     * @param {number} nBits
     * @returns {number}
     */
    maxCode(nBits)
    {
        return (1 << nBits) - 1;        // maximum code calculation
    }

    /**
     * getCode()
     *
     * @this {ArcUncrush}
     * @returns {number}
     */
    getCode()
    {
        let code, r_off, bits, bp = 0;

        if (this.clear_flg > 0 || this.offset >= this.size || this.free_ent > this.maxcode) {
            /**
             * If the next entry will be too big for the current code
             * size, then we must increase the size. This implies reading
             * a new buffer full, too.
             */
            if (this.free_ent > this.maxcode) {
                this.n_bits++;
                if (this.n_bits == this.maxBits) {
                    this.maxcode = this.max_maxcode;
                } else {
                    this.maxcode = this.maxCode(this.n_bits);
                }
            }
            if (this.clear_flg > 0) {
                this.maxcode = this.maxCode(this.n_bits = ArcUncrush.INIT_BITS);
                this.clear_flg = 0;
            }
            for (this.size = 0; this.size < this.n_bits; this.size++) {
                if (this.bs.empty()) {
                    code = -1;
                    break;
                }
                code = this.bs.bits(8, true);
                this.buf[this.size] = code;
            }
            if (this.size <= 0) {
                return -1;
            }
            this.offset = 0;
            /**
             * Round size down to integral number of codes
             */
            this.size = (this.size << 3) - (this.n_bits - 1);
        }
        r_off = this.offset;
        bits = this.n_bits;

        /**
         * Get to the first byte.
         */
        bp += (r_off >> 3);
        r_off &= 7;

        /**
         * Get first part (low order bits)
         */
        code = (this.buf[bp++] >> r_off);
        bits -= 8 - r_off;
        r_off = 8 - r_off;

        /**
         * Get any 8 bit parts in the middle (<=1 for up to 16 bits).
         */
        if (bits >= 8) {
            code |= this.buf[bp++] << r_off;
            r_off += 8;
            bits -= 8;
        }

        /**
         * Get high order bits.
         */
        code |= (this.buf[bp] & ArcUncrush.RMASK[bits]) << r_off;
        this.offset += this.n_bits;

        return code & this.maxCode(this.maxBits);
    }

    /**
     * decomp(src, dst_len, squashed)
     *
     * Decompresses a crushed or squashed stream.
     *
     * This routine adapts to the codes in the file, building the string table on-the-fly,
     * requiring no table to be stored in the compressed file.
     *
     * @this {ArcUncrush}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {boolean} squashed (false if crushed, true if squashed)
     * @returns {boolean|null}
     */
    decomp(src, dst_len, squashed)
    {
        this.init(src, dst_len, squashed);

        if (this.bs.empty()) {
            return false;
        }

        let o = 0;                      // data index
        let p = 0;                      // stack pointer
        let code, oldcode, incode;
        let finchar = oldcode = this.getCode();

        if (oldcode == -1) {            // EOF?
            return false;               // get out
        }
        this.data[o++] = finchar;       // first code is char

        while ((code = this.getCode()) > -1) {
            if (code == ArcUncrush.CLEAR) {
                /**
                 * Reset string table.
                 */
                this.prefix.fill(0, 0, 256);
                this.clear_flg = 1;
                this.free_ent = ArcUncrush.FIRST - 1;
                code = this.getCode();
                if (code == -1) {       // O, untimely death! */
                    break;
                }
            }
            let incode = code;

            /**
             * Special case for KwKwK string.
             */
            if (code >= this.free_ent) {
                if (code > this.free_ent) {
                    throw new Error("Corrupted compressed file (code " + code + ", max " + this.free_ent + ")");
                }
                this.stack[p++] = finchar;
                code = oldcode;
            }

            /**
             * Generate output characters in reverse order
             */
            while (code >= 256) {
                this.stack[p++] = this.suffix[code];
                code = this.prefix[code];
            }
            this.stack[p++] = finchar = this.suffix[code];

            /**
             * And put them out in forward order
             */
            do {
                this.data[o++] = this.stack[--p];
                if (o == this.data.length) {
                    this.putBytes(this.data, o);
                    o = 0;
                }
            } while (p > 0);

            /**
             * Generate the new entry.
             */
            if ((code = this.free_ent) < this.max_maxcode) {
                this.prefix[code] = oldcode;
                this.suffix[code] = finchar;
                this.free_ent = code + 1;
            }

            /**
             * Remember previous code.
             */
            oldcode = incode;
        }
        if (o > 0) {
            this.putBytes(this.data, o);
        }
        return true;
    }
}

/**
 * @class ZipStretch
 *
 * ZipStretch is used to decompress SHRINK streams.
 *
 * NOTE: Stretch is what other implementations would call "unshrink".
 */
class ZipStretch extends Decompress
{
    static OK = true;                   // decompression successful
    static FULL = false;                // not enough room in the output buffer
    static ERR = null;                  // error in the input data

    static CHAR_BIT = 8;
    static MIN_CODE_SIZE = 9;
    static MAX_CODE_SIZE = 13;
    static MAX_CODE = ((1 << ZipStretch.MAX_CODE_SIZE) - 1);
    static INVALID_CODE = 0xffff;
    static CONTROL_CODE = 256;
    static INC_CODE_SIZE = 1;
    static PARTIAL_CLEAR = 2;
    static UNKNOWN_LEN = 0xffff;

    /**
     * @typedef {Object} Code
     * @property {number} prefix_code   // (uint16_t) INVALID_CODE means the entry is invalid
     * @property {number} ext_byte      // (uint8_t)
     * @property {number} len           // (uint16_t)
     * @property {number} last_dst_pos  // (size_t)
     *
     * @typedef {Array.<Code>} CodeTable
     *
     * @typedef {Object} CodeQueue
     * @property {number} next_idx      // (uint16_t)
     * @property {Array}  codes         // (uint16_t)
     */

    /**
     * init(src, dst_len)
     *
     * Initialize buffers and decompression state.
     *
     * @this {ZipStretch}
     * @param {DataBuffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        super.init(src, dst_len);
        this.codetable = this.allocCodeTable();
        this.codequeue = this.allocCodeQueue();
        this.code_size = 0;             // updated by readCode()
        this.curr_code = 0;             // updated by readCode()
        this.first_byte = 0;            // updated by outputCode()
        this.len = 0;                   // updated by outputCode()
    }

    /**
     * allocCodeTable()
     *
     * @this {ZipStretch}
     * @returns {CodeTable}
     */
    allocCodeTable()
    {
        let table = /** @type {Array.<Code>} */ new Array(ZipStretch.MAX_CODE + 1);
        /**
         * Codes for literal bytes.  Set a phony prefix_code so they're valid.
         */
        let i;
        for (i = 0; i <= 0xff; i++) {
            let prefix_code = i;
            let ext_byte = i, len = 1;
            table[i] = {prefix_code, ext_byte, len};
        }
        for (; i < table.length; i++) {
            let prefix_code = ZipStretch.INVALID_CODE;
            let ext_byte, len;      // undefined
            table[i] = {prefix_code, ext_byte, len};
        }
        return table;
    }

    /**
     * updateCodeTable(i, prev_code)
     *
     * @this {ZipStretch}
     * @param {number} i
     * @param {number} prev_code
     */
    updateCodeTable(i, prev_code)
    {
        this.codetable[i].prefix_code = prev_code;
        this.codetable[i].ext_byte = this.first_byte;
        this.codetable[i].len = this.codetable[prev_code].len + 1;
        this.codetable[i].last_dst_pos = this.codetable[prev_code].last_dst_pos;
    }

    /**
     * allocCodeQueue()
     *
     * @this {ZipStretch}
     * @returns {CodeQueue}
     */
    allocCodeQueue()
    {
        let queue = {
            next_idx: 0,
            codes: new Array(ZipStretch.MAX_CODE - ZipStretch.CONTROL_CODE + 1)
        };
        let code_queue_size = 0;
        for (let code = ZipStretch.CONTROL_CODE + 1; code <= ZipStretch.MAX_CODE; code++) {
            queue.codes[code_queue_size++] = code;
        }
        if (DEBUG) {
            assert(code_queue_size < queue.codes.length);
        }
        /**
         * Add an end-of-queue marker
         */
        queue.codes[code_queue_size] = ZipStretch.INVALID_CODE;
        return queue;
    }

    /**
     * getCodeQueueNext()
     *
     * Returns the next code in the queue, or INVALID_CODE if the queue is empty.
     *
     * @this {ZipStretch}
     * @returns {number}
     */
    getCodeQueueNext()
    {
        if (DEBUG) {
            assert(this.codequeue.next_idx < this.codequeue.codes.length);
        }
        return this.codequeue.codes[this.codequeue.next_idx];
    }

    /**
     * removeCodeQueueNext()
     *
     * Returns and removes the next code from the queue, or returns INVALID_CODE if the queue is empty.
     *
     * @this {ZipStretch}
     * @returns {number}
     */
    removeCodeQueueNext()
    {
        let /* uint16_t */ code = this.getCodeQueueNext();
        if (code != ZipStretch.INVALID_CODE) {
            this.codequeue.next_idx++;
        }
        return code;
    }

    /**
     * readCode()
     *
     * @this {ZipStretch}
     * @returns {boolean}
     */
    readCode()
    {
        if (DEBUG) {
            assert(/* sizeof(code) */ 2 * ZipStretch.CHAR_BIT >= this.code_size);
        }
        let /* uint16_t */ code = this.bs.bits(this.code_size);
        if (!this.bs.advance(this.code_size)) {
            return false;
        }
        /**
         * Handle regular codes (the common case)
         */
        if (code != ZipStretch.CONTROL_CODE) {
            this.curr_code = code;
            return true;
        }
        /**
         * Handle control codes
         */
        let /* uint16_t */ control_code = this.bs.bits(this.code_size);
        if (!this.bs.advance(this.code_size)) {
            this.curr_code = ZipStretch.INVALID_CODE;
            return true;
        }

        if (control_code == ZipStretch.INC_CODE_SIZE && this.code_size < ZipStretch.MAX_CODE_SIZE) {
            this.code_size++;
            return this.readCode();
        }

        if (control_code == ZipStretch.PARTIAL_CLEAR) {
            this.clearPartial();
            return this.readCode();
        }

        this.curr_code = ZipStretch.INVALID_CODE;
        return true;
    }

    /**
     * clearPartial()
     *
     * @this {ZipStretch}
     */
    clearPartial()
    {
        let is_prefix = new Array(ZipStretch.MAX_CODE + 1).fill(false);

        /**
         * Scan for codes that have been used as a prefix.
         */
        for (let i = ZipStretch.CONTROL_CODE + 1; i <= ZipStretch.MAX_CODE; i++) {
            if (this.codetable[i].prefix_code != ZipStretch.INVALID_CODE) {
                is_prefix[this.codetable[i].prefix_code] = true;
            }
        }

        /**
         * Clear "non-prefix" codes in the table; populate the code queue.
         */
        let code_queue_size = 0;
        for (let i = ZipStretch.CONTROL_CODE + 1; i <= ZipStretch.MAX_CODE; i++) {
            if (!is_prefix[i]) {
                this.codetable[i].prefix_code = ZipStretch.INVALID_CODE;
                    this.codequeue.codes[code_queue_size++] = i;
            }
        }
        this.codequeue.codes[code_queue_size] = ZipStretch.INVALID_CODE;   // end-of-queue marker
        this.codequeue.next_idx = 0;
    }

    /**
     * outputCode(code)
     *
     * Output the string represented by a code into dst at dst_pos.
     * Returns OK on success, and also updates first_byte and len with the
     * first byte and length of the output string, respectively.
     *
     * @this {ZipStretch}
     * @param {number} prev_code
     * @returns {boolean}
     */
    outputCode(prev_code)
    {
        let code = this.curr_code;
        if (DEBUG) {
            assert(code <= ZipStretch.MAX_CODE && code != ZipStretch.CONTROL_CODE);
            assert(this.dst_pos < this.dst.length);
        }
        if (code <= 0xff) {
            /**
             * Output literal byte
             */
            if (DEBUG) {
                assert(code >= 0);
            }
            this.first_byte = code;
            this.len = 1;
            this.writeOutput(code, false);
            return ZipStretch.OK;
        }
        if (this.codetable[code].prefix_code == ZipStretch.INVALID_CODE || this.codetable[code].prefix_code == code) {
            /**
             * Reject invalid codes. Self-referential codes may exist in the table but cannot be used.
             */
            return ZipStretch.ERR;
        }
        if (this.codetable[code].len != ZipStretch.UNKNOWN_LEN) {
            /**
             * Output string with known length (the common case).
             */
            if (this.dst.length - this.dst_pos < this.codetable[code].len) {
                return ZipStretch.FULL;
            }
            this.copyBytes(this.dst_pos, this.codetable[code].last_dst_pos, this.codetable[code].len);
            this.first_byte = this.dst.buffer[this.dst_pos];
            this.len = this.codetable[code].len;
            return ZipStretch.OK;
        }
        /**
         * Output a string of unknown length. This happens when the prefix was invalid
         * (due to partial clearing) when the code was inserted into the table. The prefix
         * can then become valid when it's added to the table at a later point.
         */
        if (DEBUG) {
            assert(this.codetable[code].len == ZipStretch.UNKNOWN_LEN);
        }
        let /* uint16_t */ prefix_code = this.codetable[code].prefix_code;
        if (DEBUG) {
            assert(prefix_code > ZipStretch.CONTROL_CODE);
        }
        if (prefix_code == this.getCodeQueueNext()) {
            /**
             * The prefix code hasn't been added yet, but we were just about to: the KwKwK case.
             * Add the previous string extended with its first byte.
             */
            if (DEBUG) {
                assert(this.codetable[prev_code].prefix_code != ZipStretch.INVALID_CODE);
            }
            this.updateCodeTable(prefix_code, prev_code);
            this.writeOutput(this.first_byte, false);
        }
        else if (this.codetable[prefix_code].prefix_code == ZipStretch.INVALID_CODE) {
            /**
             * The prefix code is still invalid.
             */
            return ZipStretch.ERR;
        }
        /**
         * Output the prefix string, then the extension byte.
         */
        this.len = this.codetable[prefix_code].len + 1;
        if (this.dst.length - this.dst_pos < this.len) {
            return ZipStretch.FULL;
        }
        this.copyBytes(this.dst_pos, this.codetable[prefix_code].last_dst_pos, this.codetable[prefix_code].len);
        this.writeByte(this.codetable[code].ext_byte, this.dst_pos + this.len - 1);
        this.first_byte = this.readByte(this.dst_pos);
        /**
         * Update the code table now that the string has a length and pos.
         */
        if (DEBUG) {
            assert(prev_code != code);
        }
        this.codetable[code].len = this.len & 0xffff;
        this.codetable[code].last_dst_pos = this.dst_pos;

        return ZipStretch.OK;
    }

    /**
     * decomp(src, dst_len)
     *
     * Decompresses a SHRINK stream.
     *
     * @this {ZipStretch}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @returns {boolean|null}
     */
    decomp(src, dst_len)
    {
        this.init(src, dst_len);
        this.code_size = ZipStretch.MIN_CODE_SIZE;
        /**
         * Handle the first code separately since there is no previous code.
         */
        if (!this.readCode()) {
            return ZipStretch.OK;
        }
        if (DEBUG) {
            assert(this.curr_code != ZipStretch.CONTROL_CODE);
        }
        if (this.curr_code > 0xff) {
            return ZipStretch.ERR;                 // the first code must be a literal
        }
        if (this.dst_pos == /* dst_len */ this.dst.length) {
            return ZipStretch.FULL;
        }
        this.first_byte = this.curr_code & 0xff;
        this.codetable[this.curr_code].last_dst_pos = this.dst_pos;
        this.writeOutput(this.first_byte);

        let prev_code = this.curr_code;
        while (this.readCode()) {
            if (this.curr_code == ZipStretch.INVALID_CODE) {
                return ZipStretch.ERR;
            }
            if (this.dst_pos == /* dst_len */ this.dst.length) {
                return ZipStretch.FULL;
            }
            /**
             * Handle KwKwK: next code used before being added.
             */
            if (this.curr_code == this.getCodeQueueNext()) {
                if (this.codetable[prev_code].prefix_code == ZipStretch.INVALID_CODE) {
                    /**
                     * The previous code is no longer valid.
                     */
                    return ZipStretch.ERR;
                }
                /**
                 * Extend the previous code with its first byte.
                 */
                if (DEBUG) {
                    assert(this.curr_code != prev_code);
                }
                this.updateCodeTable(this.curr_code, prev_code);
                if (DEBUG) {
                    assert(this.dst_pos < /* dst_len */ this.dst.length);
                }
                this.writeOutput(this.first_byte, false);
            }
            /**
             * Output the string represented by the current code.
             */
            let s = this.outputCode(prev_code);
            if (s !== ZipStretch.OK) {
                return s;
            }
            /**
             * Verify that the output matches walking the prefixes.
             */
            let c = this.curr_code;
            for (let i = 0; i < this.len; i++) {
                if (DEBUG) {
                    assert(this.codetable[c].len == this.len - i);
                    assert(this.codetable[c].ext_byte == this.dst.buffer[this.dst_pos + this.len - i - 1]);
                }
                c = this.codetable[c].prefix_code;
            }
            /**
             * Add a new code to the string table if there's room.  The string is the
             * previous code's string extended with the first byte of the current code's string.
             */
            let new_code = this.removeCodeQueueNext();
            if (new_code != ZipStretch.INVALID_CODE) {
                if (DEBUG) {
                    assert(this.codetable[prev_code].last_dst_pos < this.dst_pos);
                }
                this.updateCodeTable(new_code, prev_code);
                if (this.codetable[prev_code].prefix_code == ZipStretch.INVALID_CODE) {
                    /**
                     * prev_code was invalidated in a partial clearing.  Until that code is re-used,
                     * the string represented by new_code is indeterminate.
                     */
                    this.codetable[new_code].len = ZipStretch.UNKNOWN_LEN;
                }
                /**
                 * If prev_code was invalidated in a partial clearing, it's possible that new_code == prev_code,
                 * in which case it will never be used or cleared.
                 */
            }
            this.codetable[this.curr_code].last_dst_pos = this.dst_pos;
            this.dst_pos += this.len;
            prev_code = this.curr_code;
        }
        return ZipStretch.OK;
    }
}

/**
 * @class ZipExpand
 * @property {DataBuffer} src
 * @property {DataBuffer} dst
 *
 * ZipExpand is used to decompress REDUCE streams.
 */
class ZipExpand extends Decompress
{
    static DLE_BYTE = 0x90;                         // "distance-length encoding" marker
    static FOLLOWER_SETS = 256;
    static FOLLOWERS_PER_SET = 32;                  // maximum followers per set

    /**
     * @typedef {Object} FollowerSet
     * @property {number} size                      // (uint8_t)
     * @property {number} idx_bw                    // (uint8_t) index bit width
     * @property {Array.<number>} followers         // (uint8_t * 32)
     *
     * @typedef {Array.<FollowerSet>} FollowerSets  // (FollowerSet * 256)
     */

    /**
     * init(src, dst_len, comp_factor)
     *
     * Initialize buffers.
     *
     * @this {ZipExpand}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {number} comp_factor
     */
    init(src, dst_len, comp_factor)
    {
        super.init(src, dst_len);
        if (DEBUG) {
            assert(comp_factor >= 1 && comp_factor <= 4);
        }
        this.comp_factor = comp_factor;
    }

    /**
     * readFollowerSets(nSets, nFollowers)
     *
     * Allocates memory for n follower sets and then reads that number of sets from the input stream.
     *
     * @this {ZipExpand}
     * @param {number} nSets
     * @param {number} nFollowers
     * @returns {boolean}
     */
    readFollowerSets(nSets, nFollowers)
    {
        this.fsets = new Array(nSets);
        for (let i = nSets - 1; i >= 0; i--) {
            let size = this.bs.bits(6);
            if (size > nFollowers || !this.bs.advance(6)) {
                return false;
            }
            let followers = new Array(size);
            this.fsets[i] = {
                size,
                idx_bw: ZipExpand.getBitWidth(size),
                followers
            };
            for (let j = 0; j < size; j++) {
                followers[j] = this.bs.bits(8);
                if (!this.bs.advance(8)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * getBitWidth(n)
     *
     * Returns the number of bits (bit width) used to represent indices in a follower set of size n.
     *
     * @param {number} n
     * @returns {number}
     */
    static getBitWidth(n)
    {
        if (DEBUG) {
            assert(n <= 32);
        }
        if (n > 16) { return 5; }
        if (n > 8)  { return 4; }
        if (n > 4)  { return 3; }
        if (n > 2)  { return 2; }
        if (n > 0)  { return 1; }
        return 0;
    }

    /**
     * getMaxLen()
     *
     * @this {ZipExpand}
     * @returns {number}
     */
    getMaxLen()
    {
        let v_len_bits = (8 - this.comp_factor);
        /**
         * Bits in V + extra len byte + implicit 3.
         */
        return ((1 << v_len_bits) - 1) + 255 + 3;
    }

    /**
     * getMaxDist()
     *
     * @this {ZipExpand}
     * @returns {number}
     */
    getMaxDist()
    {
        let v_dist_bits = this.comp_factor;
        /**
         * Bits in V * 256 + W byte + implicit 1.
         */
        return ((1 << v_dist_bits) - 1) * 256 + 255 + 1;
    }

    /**
     * readNextByte()
     *
     * Read the next byte from the bitstream, based on the existing value of
     * curr_byte and the follower sets.  curr_byte is updated with the next byte.
     *
     * Returns true on success and false on bad data or end of input.
     *
     * @this {ZipExpand}
     * @returns {boolean}
     */
    readNextByte()
    {
        let bits = this.bs.bits();
        let prev_byte = this.curr_byte;

        if (this.fsets[prev_byte].size == 0) {
            /**
             * No followers; read a literal byte.
             */
            this.curr_byte = bits & 0xff;
            return this.bs.advance(8);
        }
        if (BitStream.lsb(bits, 1) == 1) {
            /**
             * Don't use the follower set; read a literal byte.
             */
            this.curr_byte = (bits >> 1) & 0xff;
            return this.bs.advance(1 + 8);
        }
        /**
         * The bits represent the index of a follower byte.
         */
        let idx_bw = this.fsets[prev_byte].idx_bw;
        let follower_idx = BitStream.lsb(bits >> 1, idx_bw);
        if (follower_idx >= this.fsets[prev_byte].size) {
            return false;
        }
        this.curr_byte = this.fsets[prev_byte].followers[follower_idx];
        return this.bs.advance(1 + idx_bw);
    }

    /**
     * decomp(src, dst_len, comp_factor)
     *
     * @this {ZipExpand}
     * @param {number} dst_len
     * @param {number} comp_factor (1-4)
     * @returns {boolean}
     */
    decomp(src, dst_len, comp_factor)
    {
        this.init(src, dst_len, comp_factor);

        if (!this.readFollowerSets(ZipExpand.FOLLOWER_SETS, ZipExpand.FOLLOWERS_PER_SET)) {
            return false;
        }

        /**
         * Number of bits in V used for backref length
         */
        let v_len_bits = (8 - comp_factor);

        /**
         * The first "previous byte" is implicitly zero
         */
        this.curr_byte = 0;

        while (this.dst_pos < dst_len) {
            /**
             * Read a literal byte or DLE marker.
             */
            if (!this.readNextByte()) {
                return false;
            }
            if (this.curr_byte != ZipExpand.DLE_BYTE) {
                /**
                 * Output a literal byte.
                 */
                this.writeOutput(this.curr_byte);
                continue;
            }
            /**
             * Read the V byte which determines the length.
             */
            if (!this.readNextByte()) {
                return false;
            }
            if (this.curr_byte == 0) {
                /**
                 * Output a literal DLE byte.
                 */
                this.writeOutput(ZipExpand.DLE_BYTE);
                continue;
            }
            let v = this.curr_byte;
            let len = BitStream.lsb(v, v_len_bits);
            if (len == (1 << v_len_bits) - 1) {
                /**
                 * Read an extra length byte.
                 */
                if (!this.readNextByte()) {
                    return false;
                }
                len += this.curr_byte;
            }
            len += 3;
            /**
             * Read the W byte, which together with V gives the distance.
             */
            if (!this.readNextByte()) {
                return false;
            }
            let dist = (v >> v_len_bits) * 256 + this.curr_byte + 1;
            if (DEBUG) {
                assert(len <= this.getMaxLen());
                assert(dist <= this.getMaxDist());
            }
            /**
             * Output the back reference.
             */
            if (len > dst_len - this.dst_pos) {
                /**
                 * Not enough room.
                 */
                return false;
            }
            /**
             * Copy, handling overlap and implicit zeros.
             */
            for (let i = 0; i < len; i++) {
                if (dist > this.dst_pos) {
                    this.writeOutput(0);
                    continue;
                }
                this.writeOutput(this.readByte(this.dst_pos - dist));
            }
        }
        return true;
    }
}

/**
 * @class ZipExplode
 *
 * ZipExplode is used to decompress IMPLODE streams.
 */
class ZipExplode extends Decompress
{
    /**
     * init(src, dst_len)
     *
     * Initializes buffers and allocates the Huffman decoders.
     *
     * @this {ZipExplode}
     * @param {DataBuffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        super.init(src, dst_len);
        this.lit_decoder = new HuffmanDecoder();
        this.len_decoder = new HuffmanDecoder();
        this.dist_decoder = new HuffmanDecoder();
    }

    /**
     * decomp(src, dst_len, large_wnd, lit_tree, pk101_bug_compat)
     *
     * Decompresses an IMPLODE stream.
     *
     * @this {ZipExplode}
     * @param {DataBuffer} src
     * @param {number} dst_len
     * @param {boolean} large_wnd
     * @param {boolean} lit_tree
     * @param {boolean} pk101_bug_compat (true to emulate PKZIP 1.01 bug)
     * @returns {boolean}
     */
    decomp(src, dst_len, large_wnd, lit_tree, pk101_bug_compat)
    {
        this.init(src, dst_len);

        if (lit_tree) {
            if (!this.readHuffmanCode(256, this.lit_decoder)) {
                return false;
            }
        }
        if (!this.readHuffmanCode(64, this.len_decoder) || !this.readHuffmanCode(64, this.dist_decoder)) {
            return false;
        }

        let sym, used, dist, len;
        let min_len = (pk101_bug_compat? (large_wnd? 3 : 2) : (lit_tree? 3 : 2));

        while (this.dst_pos < dst_len) {
            let bits = this.bs.bits();
            /**
             * Literal
             */
            if (BitStream.lsb(bits, 1) == 0x1) {
                bits >>>= 1;
                if (lit_tree) {
                    ({ sym, used } = this.lit_decoder.decode(~bits));
                    if (DEBUG) {
                        assert(sym >= 0, `huffman literal decode unsuccessful (${sym})`);
                    }
                    if (!this.bs.advance(1 + used)) {
                        return false;
                    }
                } else {
                    sym = BitStream.lsb(bits, 8);
                    if (!this.bs.advance(1 + 8)) {
                        return false;
                    }
                }
                if (DEBUG) {
                    assert(sym >= 0 && sym <= 0xff);
                }
                this.writeOutput(sym);
                continue;
            }
            /**
             * Backref
             */
            if (DEBUG) {
                assert(BitStream.lsb(bits, 1) == 0x0);
            }
            bits >>>= 1;
            let used_tot = 1;
            /**
             * Read the low dist bits
             */
            if (large_wnd) {
                dist = BitStream.lsb(bits, 7);
                bits >>>= 7;
                used_tot += 7;
            } else {
                dist = BitStream.lsb(bits, 6);
                bits >>>= 6;
                used_tot += 6;
            }
            /**
             * Read the Huffman-encoded high distance bits
             */
            ({ sym, used } = this.dist_decoder.decode(~bits));
            if (DEBUG) {
                assert(sym >= 0, `huffman distance decode unsuccessful (${sym})`);
            }
            used_tot += used;
            bits >>>= used;
            dist |= sym << (large_wnd ? 7 : 6);
            dist += 1;
            /**
             * Read the Huffman-encoded length
             */
            ({ sym, used } = this.len_decoder.decode(~bits));
            if (DEBUG) {
                assert(sym >= 0, `huffman length decode unsuccessful (${sym})`);
            }
            used_tot += used;
            len = (sym + min_len);
            /**
             * Before we (possibly) read an extra len byte, let's advance our
             * position within the BitStream now, so that we don't run the risk of
             * exhausting our 32-bit 'bits' buffer.  This also eliminates the
             * need for a final 'bits >>>= used'.
             */
            if (DEBUG) {
                assert(used_tot <= BitStream.MIN_BITS);
            }
            if (!this.bs.advance(used_tot)) {
                return false;
            }
            /**
             * Read an extra len byte if necessary
             */
            if (sym == 63) {
                len += this.bs.bits(8, true);   // auto-advance
            }
            if (len > dst_len - this.dst_pos) {
                return false;                   // not enough room
            }
            /**
             * Copy, handling overlap and implicit zeros
             */
            for (let i = 0; i < len; i++) {
                if (dist > this.dst_pos) {
                    this.writeOutput(0);
                    continue;
                }
                this.writeOutput(this.readByte(this.dst_pos - dist));
            }
        }
        return true;
    }

    /**
     * readHuffmanCode(num_lens, decoder)
     *
     * Initialize Huffman decoder with num_lens codeword lengths.
     * Returns false if the input is invalid.
     *
     * @this {ZipExplode}
     * @param {number} num_lens
     * @param {HuffmanDecoder} decoder
     */
    readHuffmanCode(num_lens, decoder)
    {
        let lens = new Array(256);
        let len_count = new Array(17).fill(0);
        if (DEBUG) {
            assert(num_lens <= lens.length);
        }
        /**
         * Number of bytes representing the Huffman code
         */
        let byte = this.bs.bits(8, true);
        let num_bytes = byte + 1;

        let codeword_idx = 0;
        for (let byte_idx = 0; byte_idx < num_bytes; byte_idx++) {
            byte = this.bs.bits(8, true);
            let codeword_len = (byte & 0xf) + 1;        // low four bits plus one
            let run_length   = (byte >> 4)  + 1;        // high four bits plus one
            if (DEBUG) {
                assert(codeword_len >= 1 && codeword_len <= 16);
                assert(codeword_len < len_count.length);
            }
            len_count[codeword_len] += run_length;
            if (codeword_idx + run_length > num_lens) {
                return false;                           // too many codeword lengths
            }
            for (let i = 0; i < run_length; i++) {
                if (DEBUG) {
                    assert(codeword_idx < num_lens);
                }
                lens[codeword_idx++] = codeword_len;
            }
        }
        if (DEBUG) {
            assert(codeword_idx <= num_lens);
        }
        if (codeword_idx < num_lens) {
            return false;                               // too few codeword lengths
        }
        /**
         * Check that the Huffman tree is full
         */
        let avail_codewords = 1;
        for (let i = 1; i <= 16; i++) {
            if (DEBUG) {
                assert(avail_codewords >= 0);
            }
            avail_codewords *= 2;
            avail_codewords -= len_count[i];
            if (avail_codewords < 0) {
                return false;                           // higher count than available codewords
            }
        }
        if (avail_codewords != 0) {
            return false;                               // not all codewords were used
        }
        let ok = decoder.init(lens, num_lens);
        if (DEBUG) {
            assert(ok);
        }
        return true;
    }
}

/**
 * @class ZipBlast
 * @property {DataBuffer} src   // (replaces infun and inhow)
 * @property {number} in        // next input location
 * @property {number} left      // available input at in
 * @property {number} bitbuf    // bit buffer
 * @property {number} bitcnt    // number of bits in bit buffer
 * @property {DataBuffer} dst   // (replaces outfun and outhow)
 * @property {number} next      // index of next write location in out[]
 * @property {boolean} first    // true to check distances (for first 4K)
 * @property {Uint8Array} out   // output array and sliding window
 *
 * ZipBlast is used to decompress DCL_IMPLODE streams.
 *
 * Sadly, DCL_IMPLODE streams differ from the IMPLODE streams found in PKZIP files,
 * so this was a bit of a waste for my purposes, but perhaps someone else will find it useful. -JP
 */
class ZipBlast
{
    static MAXBITS  = 13;       // maximum code length
    static MAXWIN   = 4096;     // maximum window size

    /**
     * Huffman code decoding tables.  count[1..MAXBITS] contains the number
     * of symbols of each length, which for a canonical code are stepped through
     * in order.  symbol[] contains the symbol values in canonical order, where the
     * number of entries is the sum of the counts in count[].
     *
     * To improve overall load time, we defer initializing the BlastHuffman tables
     * until the first Blast constructor call (which may never even occur).
     *
     * @typedef {Object} BlastHuffman
     * @property {Int16Array} count
     * @property {Int16Array} symbol
     * @property {number} left
     */
    static litcode;
    static lencode;
    static distcode;

    /**
     * Static tables used by decomp()
     */
    static /* const short */ base = [3, 2, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24, 40, 72, 136, 264]; // base for length codes
    static /* const char */ extra = [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8];           // extra bits for length codes

    /**
     * constructor()
     *
     * @this {ZipBlast}
     */
    constructor()
    {
        if (!ZipBlast.litcode) {
            ZipBlast.litcode = ZipBlast.constructHuffman(ZipBlast.MAXBITS, 256,
                [11, 124, 8, 7, 28, 7, 188, 13, 76, 4, 10, 8, 12, 10, 12, 10, 8, 23, 8,
                 9, 7, 6, 7, 8, 7, 6, 55, 8, 23, 24, 12, 11, 7, 9, 11, 12, 6, 7, 22, 5,
                 7, 24, 6, 11, 9, 6, 7, 22, 7, 11, 38, 7, 9, 8, 25, 11, 8, 11, 9, 12,
                 8, 12, 5, 38, 5, 38, 5, 11, 7, 5, 6, 21, 6, 10, 53, 8, 7, 24, 10, 27,
                 44, 253, 253, 253, 252, 252, 252, 13, 12, 45, 12, 45, 12, 61, 12, 45, 44, 173]
             );
             ZipBlast.lencode = ZipBlast.constructHuffman(ZipBlast.MAXBITS, 16, [2, 35, 36, 53, 38, 23]);
             ZipBlast.distcode = ZipBlast.constructHuffman(ZipBlast.MAXBITS, 64, [2, 20, 53, 230, 247, 151, 248]);
        }
        this.out = new Uint8Array(ZipBlast.MAXWIN);
    }

    /**
     * init(src)
     *
     * Initialize buffers.
     *
     * @this {ZipBlast}
     * @param {DataBuffer} src
     */
    init(src)
    {
        this.src = src;
        this.left = src.length;
        this.in = this.bitbuf = this.bitcnt = 0;
        this.dst = DataBuffer.alloc(0);
        this.next = 0;
        this.first = true;
    }

    /**
     * getOutput()
     *
     * Get the output buffer.
     *
     * @this {ZipBlast}
     * @returns {DataBuffer}
     */
    getOutput()
    {
        return this.dst;
    }

    /**
     * decomp()
     *
     * Decode "implode" compression stream
     *
     * First byte is 0 if literals are uncoded or 1 if they are coded.  Second
     * byte is 4, 5, or 6 for the number of extra bits in the distance code.
     * This is the base-2 logarithm of the dictionary size minus six.
     *
     * Compressed data is a combination of literals and length/distance pairs
     * terminated by an end code.  Literals are either Huffman coded or
     * uncoded bytes.  A length/distance pair is a coded length followed by a
     * coded distance to represent a string that occurs earlier in the
     * uncompressed data that occurs again at the current location.
     *
     * A bit preceding a literal or length/distance pair indicates which comes
     * next, 0 for literals, 1 for length/distance.
     *
     * If literals are uncoded, then the next eight bits are the literal, in the
     * normal bit order in the stream, i.e. no bit-reversal is needed. Similarly,
     * no bit reversal is needed for either the length extra bits or the distance
     * extra bits.
     *
     * Literal bytes are simply written to the output.  A length/distance pair is
     * an instruction to copy previously uncompressed bytes to the output.  The
     * copy is from distance bytes back in the output stream, copying for length
     * bytes.
     *
     * Distances pointing before the beginning of the output data are not permitted.
     *
     * Overlapped copies, where the length is greater than the distance, are
     * allowed and common.  For example, a distance of one and a length of 518
     * simply copies the last byte 518 times.  A distance of four and a length of
     * twelve copies the last four bytes three times.  A simple forward copy
     * ignoring whether the length is greater than the distance or not implements
     * this correctly.
     *
     * @this {ZipBlast}
     * @param {DataBuffer} src
     * @returns {number}
     */
    decomp(src)
    {
        let /* int */ lit;              // true if literals are coded
        let /* int */ dict;             // log2(dictionary size) - 6
        let /* int */ symbol;           // decoded symbol, extra bits for distance
        let /* int */ len;              // length for copy
        let /* unsigned */ dist;        // distance for copy
        let /* int */ copy;             // copy counter
        let /* byte * */ from, to;      // copy pointers (indexes)

        this.init(src);
        /**
         * Read header
         */
        lit = this.bits(8);
        if (lit > 1) return -1;
        dict = this.bits(8);
        if (dict < 4 || dict > 6) return -2;
        /**
         * Decode literals and length/distance pairs
         */
        do {
            if (this.bits(1)) {
                /**
                 * Get length
                 */
                symbol = this.decode(ZipBlast.lencode);
                len = ZipBlast.base[symbol] + this.bits(ZipBlast.extra[symbol]);
                if (len == 519) {
                    break;              // end code
                }
                /**
                 * Get distance
                 */
                symbol = len == 2? 2 : dict;
                dist = this.decode(ZipBlast.distcode) << symbol;
                dist += this.bits(symbol);
                dist++;
                if (this.first && dist > this.next) {
                    return -3;          // distance too far back
                }
                /**
                 * Copy length bytes from distance bytes back
                 */
                do {
                    to = this.next;
                    from = to - dist;
                    copy = ZipBlast.MAXWIN;
                    if (this.next < dist) {
                        from += copy;
                        copy = dist;
                    }
                    copy -= this.next;
                    if (copy > len) copy = len;
                    len -= copy;
                    this.next += copy;
                    do {
                        this.out[to++] = this.out[from++];
                    } while (--copy);
                    if (this.next == ZipBlast.MAXWIN) {
                        if (!this.flush(this.next)) return 1;
                        this.next = this.first = 0;
                    }
                } while (len != 0);
            }
            else {
                /**
                 * Get literal and write it
                 */
                symbol = lit? this.decode(ZipBlast.litcode) : this.bits(8);
                this.out[this.next++] = symbol;
                if (this.next == ZipBlast.MAXWIN) {
                    if (!this.flush(this.next)) return 1;
                    this.next = this.first = 0;
                }
            }
        } while (true);
        /**
         * Write any leftover output
         */
        if (this.next) {
            this.flush(this.next);
        }
        return 0;
    }

    /**
     * decode(h)
     *
     * Decode a code from the stream using Huffman table h.  Return the symbol
     * or a negative value if there is an error.  If all of the lengths are zero,
     * i.e. an empty code, or if the code is incomplete and an invalid code is
     * received, then -9 is returned after reading MAXBITS bits.
     *
     * The codes as stored in the compressed data are bit-reversed relative to
     * a simple integer ordering of codes of the same lengths.  Hence below the
     * bits are pulled from the compressed data one at a time and used to
     * build the code value reversed from what is in the stream in order to
     * permit simple integer comparisons for decoding.
     *
     * The first code for the shortest length is all ones.  Subsequent codes of
     * the same length are simply integer decrements of the previous code.  When
     * moving up a length, a one bit is appended to the code.  For a complete
     * code, the last code of the longest length will be all zeros.  To support
     * this ordering, the bits pulled during decoding are inverted to apply the
     * more "natural" ordering starting with all zeros and incrementing.
     *
     * @this {ZipBlast}
     * @param {BlastHuffman} h
     * @returns {number}
     */
    decode(h)
    {
        let /* int */ len;              // current number of bits in code
        let /* int */ code;             // len bits being decoded
        let /* int */ first;            // first code of length len
        let /* int */ count;            // number of codes of length len
        let /* int */ index;            // index of first code of length len in symbol table
        let /* int */ bitbuf;           // bits from stream
        let /* int */ left;             // bits left in next or left to process
        let /* short * */ next;         // next number of codes

        bitbuf = this.bitbuf;
        left = this.bitcnt;
        code = first = index = 0;
        len = 1;
        next = 1;
        while (true) {
            while (left--) {
                code |= (bitbuf & 1) ^ 1;   // invert code
                bitbuf >>= 1;
                count = h.count[next++];
                if (code < first + count) { // if length len, return symbol
                    this.bitbuf = bitbuf;
                    this.bitcnt = (this.bitcnt - len) & 7;
                    return h.symbol[index + (code - first)];
                }
                index += count;             // else update for next length
                first += count;
                first <<= 1;
                code <<= 1;
                len++;
            }
            left = (ZipBlast.MAXBITS+1) - len;
            if (left == 0) break;
            if (this.left == 0) {
                throw new Error("ZipBlast.decode() out of input");
            }
            bitbuf = this.src.buffer[this.in++];
            this.left--;
            if (left > 8) left = 8;
        }
        return -9;                          // ran out of codes
    }

    /**
     * flush(length)
     *
     * Flush the output buffer (up to length bytes) to the destination buffer.
     *
     * @this {ZipBlast}
     * @param {number} length
     * @returns {boolean}
     */
    flush(length)
    {
        let a = this.out;
        if (length < a.length) {
            a = a.slice(0, length);
        }
        this.dst = DataBuffer.concat([this.dst, a]);
        return true;
    }

    /**
     * bits(need)
     *
     * Return need bits from the input stream.  This always leaves less than
     * eight bits in the buffer.  bits() works properly for need == 0.
     *
     * Bits are stored in bytes from the least significant bit to the most
     * significant bit.  Therefore bits are dropped from the bottom of the bit
     * buffer, using shift right, and new bytes are appended to the top of the
     * bit buffer, using shift left.
     *
     * @this {ZipBlast}
     * @param {number} need
     * @returns {number}
     */
    bits(need)
    {
        let /* int */ val;          // bit accumulator

        /**
         * Load at least need bits into val
         */
        val = this.bitbuf;
        while (this.bitcnt < need) {
            if (this.left == 0) {
                throw new Error("ZipBlast.bits() out of input");
            }
            /**
             * Load eight more bits
             */
            val |= this.src.buffer[this.in++] << this.bitcnt;
            this.left--;
            this.bitcnt += 8;
        }

        /**
         * Drop need bits and update buffer, always zero to seven bits left
         */
        this.bitbuf = val >> need;
        this.bitcnt -= need;

        /**
         * Return need bits, zeroing the bits above that
         */
        return val & ((1 << need) - 1);
    }

    /**
     * constructHuffman(nCounts, nSymbols, rep)
     *
     * Given a list of repeated code lengths rep[0..n-1], where each byte is a
     * count (high four bits + 1) and a code length (low four bits), generate the
     * list of code lengths.  This compaction reduces the size of the object code.
     * Then given the list of code lengths length[0..n-1] representing a canonical
     * Huffman code for n symbols, construct the tables required to decode those
     * codes.  Those tables are the number of codes of each length, and the symbols
     * sorted by length, retaining their original order within each length.
     *
     * The return value is zero for a complete code set, negative for an over-
     * subscribed code set, and positive for an incomplete code set.  The tables
     * can be used if the return value is zero or positive, but they cannot be used
     * if the return value is negative.  If the return value is zero, it is not
     * possible for decode() using that table to return an error--any stream of
     * enough bits will resolve to a symbol.  If the return value is positive, then
     * it is possible for decode() using that table to return an error for received
     * codes past the end of the incomplete lengths.
     *
     * Porting observations: the original "construct" function was supplied a table
     * by the caller, whereas we allocate the table ourselves, so that's what we
     * must return.  The numeric return value ("left") described above sounds useful,
     * but the original code never examines it, so we could just drop it on the floor.
     * However, perhaps someone will find it useful in the future, so we include it
     * in the BlastHuffman table. -JP
     *
     * @param {number} nCounts (eg, MAXBITS)
     * @param {number} nSymbols
     * @param {number} rep
     * @returns {BlastHuffman}
     */
    static constructHuffman(nCounts, nSymbols, rep)
    {
        let /* int */ symbol;                   // current symbol when stepping through length[]
        let /* int */ len;                      // current length when stepping through h->count[]
        let offs = new Array(nCounts+1);        // offsets in symbol table for each length
        let length = new Array(256);            // code lengths

        let huffman = {
            count: new Int16Array(nCounts+1),
            symbol: new Int16Array(nSymbols),
            left: 0                             // number of possible codes left
        };
        /**
         * Convert compact repeat counts into symbol bit length list
         */
        symbol = 0;
        for (let i = 0; i < rep.length; i++) {
            len = rep[i];
            huffman.left = (len >> 4) + 1;
            len &= 15;
            do {
                length[symbol++] = len;
            } while (--huffman.left);
        }
        let n = symbol;
        /**
         * Count number of codes of each length
         */
        for (len = 0; len <= nCounts; len++) {
            huffman.count[len] = 0;
        }
        for (symbol = 0; symbol < n; symbol++) {
            (huffman.count[length[symbol]])++;  // assumes lengths are within bounds
        }
        if (huffman.count[0] == n) {            // no codes!
            return huffman;                     // complete, but decode() will fail
        }
        /**
         * Check for an over-subscribed or incomplete set of lengths
         */
        huffman.left = 1;                       // one possible code of zero length
        for (len = 1; len <= nCounts; len++) {
            huffman.left <<= 1;                 // one more bit, double codes left
            huffman.left -= huffman.count[len]; // deduct count from possible codes
            if (huffman.left < 0) {
                return huffman;                 // over-subscribed (left > 0 means incomplete)
            }
        }
        /**
         * Generate offsets into symbol table for each length for sorting
         */
        offs[1] = 0;
        for (len = 1; len < nCounts; len++) {
            offs[len + 1] = offs[len] + huffman.count[len];
        }
        /**
         * Put symbols in table sorted by length, by symbol order within each length
         */
        for (symbol = 0; symbol < n; symbol++) {
            if (length[symbol] != 0) {
                huffman.symbol[offs[length[symbol]]++] = symbol;
            }
        }
        /**
         * Left is zero for complete set, positive for incomplete set
         */
        return huffman;
    }
}

/**
 * assert(exp, msg)
 *
 * @param {*} exp
 * @param {string} [msg]
 */
function assert(exp, msg)
{
    if (DEBUG && !exp) {
        throw new Error(msg || "Assertion failure");
    }
}
