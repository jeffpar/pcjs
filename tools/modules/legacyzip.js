/**
 * @fileoverview Library for decompressing various "legacy" ZIP formats
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Stretch(), Expand(), and Explode() functionality adapted from https://www.hanshq.net/files/hwzip/hwzip-2.1.zip
 * Released into the public domain by Hans Wennborg; see https://www.hanshq.net/zip2.html for more details.
 *
 * Blast() functionality adapted from https://github.com/madler/zlib/tree/master/contrib/blast
 * Copyright (C) 2003, 2012, 2013 Mark Adler
 */

import { Buffer } from 'node:buffer';

const DEBUG = true;

/**
 * @class LegacyZip
 */
export default class LegacyZip
{
    /**
     * stretchSync(src)
     *
     * @param {Buffer} src (SHRINK data)
     * @returns {Stretch}
     */
    static stretchSync(src)
    {
        let stretch = new Stretch(src);
        stretch.decomp();
        return stretch;
    }

    /**
     * expandSync(src)
     *
     * @param {Buffer} src (REDUCE data)
     * @returns {Expand}
     */
    static expandSync(src)
    {
        let expand = new Expand(src);
        expand.decomp();
        return expand;
    }

    /**
     * explodeSync(src, dst_len, large_wnd, lit_tree)
     *
     * Decompress (explode) the data in src. The uncompressed data is dst_len
     * bytes long. large_wnd is true if a large window was used for compression,
     * and lit_tree is true if literals were Huffman coded.
     *
     * Returns an Explode object.  Call getRead() to get the number of source
     * bytes read, and getOutput() to the destination data.
     *
     * @param {Buffer} src (IMPLODE data)
     * @param {number} dst_len
     * @param {boolean} large_wnd
     * @param {boolean} lit_tree
     * @returns {Explode}
     */
    static explodeSync(src, dst_len, large_wnd, lit_tree)
    {
        let explode = new Explode();
        if (!explode.decomp(src, dst_len, large_wnd, lit_tree, false) || explode.getRead() !== src.length) {
            explode.decomp(src, dst_len, large_wnd, lit_tree, true);
        }
        return explode;
    }

    /**
     * blastSync(src)
     *
     * @param {Buffer} src (IMPLODE_DCL data)
     * @returns {Blast}
     */
    static blastSync(src)
    {
        let blast = new Blast();

        // let test = Buffer.from([0x00, 0x04, 0x82, 0x24, 0x25, 0x8f, 0x80, 0x7f]);
        // blast.decomp(test);
        // dst = blast.getOutput();

        blast.decomp(src);
        return blast;
    }
}

/**
 * @class BitStream
 * @property {Buffer} src               // Source bytes
 * @property {number} bitpos            // Bit position of the next bit to read
 * @property {number} bitend            // Bit position of the past-the-end bit
 */
class BitStream
{
    /*
     * The original code set MIN_BITS to (64 - 7), because it read 64 bits at a time,
     * and if bitpos wasn't on a byte boundary, it would shift 1-7 zeros into the top
     * of the result, and the caller would simply assert that it never used more MIN_BITS.
     *
     * Well, this version reads 32 bits at a time, because while there is now BigInt
     * support in JavaScript, it's faster sticking with 32-bit values.  Unfortunately,
     * setting MIN_BITS to (32 - 7) triggered assertions that the caller was using more
     * than 25 bits from a single bits() call, which was risky.
     *
     * So now we set MIN_BITS to 32, and at the same time, whenever bitpos isn't on a
     * byte boundary, we pad the result with more bits from stream instead of zeros;
     * it may often be unnecessary, but since we can't predict the caller's needs,
     * we have no choice.
     */
    static MIN_BITS = 32;

    /**
     * constructor(src)
     *
     * @this {BitStream}
     * @param {Buffer} src
     */
    constructor(src)
    {
        this.src = src;
        this.end = src.length;
        this.bitpos = 0;
        this.bitend = this.end * 8;
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
        let next = (this.bitpos >> 3);
        let bitoff = this.bitpos % 8;

        assert(next < this.end, "bits() reading past end of stream");

        let bytesAvail = this.end - next;
        if (bytesAvail >= 4) {
            bits = this.src.readUInt32LE(next);
            next += 4;
        } else {
            bits = 0;
            for (let i = 0; i < bytesAvail; i++) {
                bits |= this.src.readUInt8(next++) << (i * 8);
            }
        }
        if (bitoff) {
            bits >>>= bitoff;
            if (BitStream.MIN_BITS == 32 && next < this.end) {
                let b = this.src.readUInt8(next) << (32 - bitoff);
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
        assert(this.bitpos <= this.bitend);
        if (this.bitend - this.bitpos < n) {
            return false;
        }
        this.bitpos += n;
        return true;
    }

    /**
     * getRead()
     *
     * Returns the number of bytes read from the input stream.
     *
     * @this {BitStream}
     * @returns {number}
     */
    getRead()
    {
        return BitStream.roundUp(this.bitpos, 8) >> 3;
    }

    /**
     * lsb(bits, n)
     *
     * Returns the n least significant bits of bits.
     *
     * @param {number} bits
     * @param {number} n
     * @returns {number}
     */
    static lsb(bits, n)
    {
        return bits & ((1 << n) - 1);
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
        assert((m & (m - 1)) == 0, `${m} must be a power of two`);
        return (x + m - 1) & (-m);              // Hacker's Delight (2nd), 3-1.
    }
}

/**
 * @typedef {Object} HuffmanLookup
 * @property {number} sym
 * @property {number} len
 *
 * @class HuffmanDecoder
 * @property {Array.<HuffmanLookup>} table
 */
class HuffmanDecoder
{
    static MAX_HUFFMAN_SYMBOLS = 288;           // Deflate uses max 288 symbols
    static MAX_HUFFMAN_BITS = 16;               // Implode uses max 16-bit codewords
    static HUFFMAN_LOOKUP_TABLE_BITS = 8;       // Seems a good trade-off

    /**
     * constructor()
     *
     * @this {HuffmanDecoder}
     */
    constructor()
    {
        /*
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

        assert(n <= HuffmanDecoder.MAX_HUFFMAN_SYMBOLS);
        this.num_syms = n;

        /* Zero-initialize the lookup table */
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = {
                sym: 0,
                len: 0
            }
        }

        /* Count the number of codewords of each length */
        for (let i = 0; i < n; i++) {
            assert(lengths[i] <= HuffmanDecoder.MAX_HUFFMAN_BITS);
            count[lengths[i]]++;
        }
        count[0] = 0;           // ignore zero-length codewords

        /* Compute sentinel_bits and offset_first_sym_idx for each length */
        code[0] = 0;
        sym_idx[0] = 0;
        for (let l = 1; l <= HuffmanDecoder.MAX_HUFFMAN_BITS; l++) {

            /* First canonical codeword of this length */
            code[l] = ((code[l - 1] + count[l - 1]) << 1) & 0xffff;

            if (count[l] != 0 && code[l] + count[l] - 1 > (1 << l) - 1) {
                /* The last codeword is longer than l bits */
                return false;
            }

            let s = ((code[l] + count[l]) << (HuffmanDecoder.MAX_HUFFMAN_BITS - l)) & 0xffffffff;
            this.sentinel_bits[l] = s;
            assert(this.sentinel_bits[l] >= code[l], "overflow");

            sym_idx[l] = sym_idx[l - 1] + count[l - 1];
            this.offset_first_sym_idx[l] = (sym_idx[l] - code[l]) & 0xffff;
        }

        /* Build mapping from index to symbol and populate the lookup table */
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
        assert(len <= HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);

        codeword = reverse16(codeword, len);    // Make it LSB-first
        let pad_len = HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS - len;

        /* Pad the pad_len upper bits with all bit combinations */
        for (let padding = 0; padding < (1 << pad_len); padding++) {
            let index = (codeword | (padding << len)) & 0xffff;
            this.table[index].sym = sym & 0xffff;
            this.table[index].len = len & 0xffff;
            assert(this.table[index].sym == sym && this.table[index].len == len, "bitfield overflow");
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
    decode(bits)
    {
        bits &= 0xffff;
        /* First try the lookup table */
        let lookup_bits = BitStream.lsb(bits, HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);
        assert(lookup_bits < this.table.length);
        if (this.table[lookup_bits].len) {
            assert(this.table[lookup_bits].len <= HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS);
            assert(this.table[lookup_bits].sym < this.num_syms);
            return {sym: this.table[lookup_bits].sym, used: this.table[lookup_bits].len};
        }
        /* Then do canonical decoding with the bits in MSB-first order */
        bits = reverse16(bits, HuffmanDecoder.MAX_HUFFMAN_BITS);
        for (let l = HuffmanDecoder.HUFFMAN_LOOKUP_TABLE_BITS + 1; l <= HuffmanDecoder.MAX_HUFFMAN_BITS; l++) {
            if (bits < this.sentinel_bits[l]) {
                bits >>= HuffmanDecoder.MAX_HUFFMAN_BITS - l;
                let sym_idx = (this.offset_first_sym_idx[l] + bits) & 0xffff;
                assert(sym_idx < this.num_syms);
                return {sym: this.syms[sym_idx], used: l};
            }
        }
        return {sym: -1, used: 0};
    }
}

/**
 * @class Stretch
 * @property {Buffer} src
 * @property {Buffer} dst
 *
 * Stretch is used to decompress SHRINK streams.
 *
 * NOTE: Stretch is what most other implementations call "unshrink", which isn't very imaginative.
 */
class Stretch
{
    /**
     * constructor()
     *
     * @this {Stretch}
     */
    constructor()
    {
        this.src = this.dst = null;
    }

    /**
     * init(src, dst_len)
     *
     * Initialize buffers.
     *
     * @this {Stretch}
     * @param {Buffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        this.bs = new BitStream(src);
        this.dst = Buffer.alloc(dst_len);
        this.dst_pos = 0;
    }

    /**
     * getRead()
     *
     * @this {Stretch}
     * @returns {number}
     */
    getRead()
    {
        return this.bs.getRead();
    }

    /**
     * getOutput()
     *
     * Get the output buffer.
     *
     * @this {Stretch}
     * @returns {Buffer}
     */
    getOutput()
    {
        return this.dst;
    }

    /**
     * decomp(src)
     *
     * @this {Stretch}
     * @param {Buffer} src
     * @returns {number}
     */
    decomp(src)
    {
        return 0;
    }
}

/**
 * @class Expand
 * @property {Buffer} src
 * @property {Buffer} dst
 *
 * Expand is used to decompress REDUCE streams.
 */
class Expand
{
    /**
     * constructor()
     *
     * @this {Expand}
     */
    constructor()
    {
    }

    /**
     * init(src, dst_len)
     *
     * Initialize buffers.
     *
     * @this {Expand}
     * @param {Buffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        this.bs = new BitStream(src);
        this.dst = Buffer.alloc(dst_len);
        this.dst_pos = 0;
    }

    /**
     * getRead()
     *
     * @this {Expand}
     * @returns {number}
     */
    getRead()
    {
        return this.bs.getRead();
    }

    /**
     * getOutput()
     *
     * Get the output buffer.
     *
     * @this {Expand}
     * @returns {Buffer}
     */
    getOutput()
    {
        return this.dst;
    }

    /**
     * decomp()
     *
     * @this {Expand}
     * @param {Buffer} src
     * @returns {number}
     */
    decomp(src)
    {
        return 0;
    }
}

/**
 * @class Explode
 *
 * Explode is used to decompress IMPLODE streams.
 */
class Explode
{
    static OK = true;
    static ERR = false;
    static OUTBUF = 4096;

    /**
     * constructor()
     *
     * @this {Explode}
     */
    constructor()
    {
    }

    /**
     * init(src, dst_len)
     *
     * Initialize buffers and allocate the Huffman decoders.
     *
     * @this {Explode}
     * @param {Buffer} src
     * @param {number} dst_len
     */
    init(src, dst_len)
    {
        this.bs = new BitStream(src);
        this.dst = Buffer.alloc(dst_len);
        this.dst_pos = 0;
        this.lit_decoder = new HuffmanDecoder();
        this.len_decoder = new HuffmanDecoder();
        this.dist_decoder = new HuffmanDecoder();
    }

    /**
     * getRead()
     *
     * @this {Explode}
     * @returns {number}
     */
    getRead()
    {
        return this.bs.getRead();
    }

    /**
     * getOutput()
     *
     * Get the output buffer.
     *
     * @this {Explode}
     * @returns {Buffer}
     */
    getOutput()
    {
        return this.dst;
    }

    /**
     * readOutput(off)
     *
     * Read from the output buffer.
     *
     * @this {Explode}
     * @param {number} off
     * @returns {number}
     */
    readOutput(off)
    {
        return this.dst.readUInt8(off);
    }

    /**
     * writeOutput(b)
     *
     * Append to the output buffer.
     *
     * @this {Explode}
     * @param {number} b
     */
    writeOutput(b)
    {
        this.dst.writeUInt8(b, this.dst_pos++);
    }

    /**
     * decomp(src, dst_len, large_wnd, lit_tree, pk101_bug_compat)
     *
     * @this {Explode}
     * @param {Buffer} src
     * @param {number} dst_len
     * @param {boolean} large_wnd
     * @param {boolean} lit_tree
     * @param {boolean} pk101_bug_compat (true to emulate PKZIP 1.01 bug)
     * @returns {Buffer}
     */
    decomp(src, dst_len, large_wnd, lit_tree, pk101_bug_compat)
    {
        this.init(src, dst_len);

        if (lit_tree) {
            if (!this.read_huffman_code(256, this.lit_decoder)) {
                return null;
            }
        }
        if (!this.read_huffman_code(64, this.len_decoder) || !this.read_huffman_code(64, this.dist_decoder)) {
            return null;
        }

        let sym, used, dist, len;
        let min_len = (pk101_bug_compat? (large_wnd? 3 : 2) : (lit_tree? 3 : 2));

        while (this.dst_pos < dst_len) {

            let bits = this.bs.bits();

            /* Literal */
            if (BitStream.lsb(bits, 1) == 0x1) {
                bits >>>= 1;
                if (lit_tree) {
                    ({ sym, used } = this.lit_decoder.decode(~bits));
                    assert(sym >= 0, `huffman lit decode unsuccessful (${sym})`);
                    if (!this.bs.advance(1 + used)) {
                        return null;
                    }
                } else {
                    sym = BitStream.lsb(bits, 8);
                    if (!this.bs.advance(1 + 8)) {
                        return null;
                    }
                }
                assert(sym >= 0 && sym <= 0xff);
                this.writeOutput(sym);
                continue;
            }

            /* Backref */
            assert(BitStream.lsb(bits, 1) == 0x0);
            bits >>>= 1;
            let used_tot = 1;

            /* Read the low dist bits */
            if (large_wnd) {
                dist = BitStream.lsb(bits, 7);
                bits >>>= 7;
                used_tot += 7;
            } else {
                dist = BitStream.lsb(bits, 6);
                bits >>>= 6;
                used_tot += 6;
            }

            /* Read the Huffman-encoded high dist bits */
            ({ sym, used } = this.dist_decoder.decode(~bits));
            assert(sym >= 0, `huffman dist decode unsuccessful (${sym})`);
            used_tot += used;
            bits >>>= used;
            dist |= sym << (large_wnd ? 7 : 6);
            dist += 1;

            /* Read the Huffman-encoded len */
            ({ sym, used } = this.len_decoder.decode(~bits));
            assert(sym >= 0, `huffman len decode unsuccessful (${sym})`);
            used_tot += used;
            bits >>>= used;
            len = (sym + min_len);

            if (sym == 63) {
                /* Read an extra len byte */
                len += BitStream.lsb(bits, 8);
                used_tot += 8;
                bits >>>= 8;                    // TODO: unnecessary?
            }

            assert(used_tot <= BitStream.MIN_BITS);
            if (!this.bs.advance(used_tot)) {
                return null;
            }

            if (len > dst_len - this.dst_pos) {
                return null;                    // not enough room
            }

            /* Copy, handling overlap and implicit zeros */
            for (let i = 0; i < len; i++) {
                if (dist > this.dst_pos) {
                    this.writeOutput(0);
                    continue;
                }
                this.writeOutput(this.readOutput(this.dst_pos - dist));
            }
        }
        return this.dst;
    }

    /**
     * read_huffman_code(num_lens, decoder)
     *
     * Initialize Huffman decoder with num_lens codeword lengths.
     * Returns false if the input is invalid.
     *
     * @this {Explode}
     * @param {number} num_lens
     * @param {HuffmanDecoder} decoder
     */
    read_huffman_code(num_lens, decoder)
    {
        let lens = new Array(256);
        let len_count = new Array(17).fill(0);
        assert(num_lens <= lens.length);

        /* Number of bytes representing the Huffman code */
        let byte = this.bs.bits(8, true);
        let num_bytes = byte + 1;

        let codeword_idx = 0;
        for (let byte_idx = 0; byte_idx < num_bytes; byte_idx++) {
            byte = this.bs.bits(8, true);

            let codeword_len = (byte & 0xf) + 1;        // low four bits plus one
            let run_length   = (byte >> 4)  + 1;        // high four bits plus one

            assert(codeword_len >= 1 && codeword_len <= 16);
            assert(codeword_len < len_count.length);
            len_count[codeword_len] += run_length;

            if (codeword_idx + run_length > num_lens) {
                return false;                           // too many codeword lengths
            }
            for (let i = 0; i < run_length; i++) {
                assert(codeword_idx < num_lens);
                lens[codeword_idx++] = codeword_len;
            }
        }

        assert(codeword_idx <= num_lens);
        if (codeword_idx < num_lens) {
            return false;                               // too few codeword lengths
        }

        /* Check that the Huffman tree is full */
        let avail_codewords = 1;
        for (let i = 1; i <= 16; i++) {
            assert(avail_codewords >= 0);
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
        assert(ok);
        return true;
    }
}

/**
 * @class Blast
 * @property {Buffer} src       // (replaces infun and inhow)
 * @property {number} in        // next input location
 * @property {number} left      // available input at in
 * @property {number} bitbuf    // bit buffer
 * @property {number} bitcnt    // number of bits in bit buffer
 * @property {Buffer} dst       // (replaces outfun and outhow)
 * @property {number} next      // index of next write location in out[]
 * @property {boolean} first    // true to check distances (for first 4K)
 * @property {Uint8Array} out   // output array and sliding window
 *
 * Blast is used to decompress DCL_IMPLODE streams.
 *
 * Sadly, DCL_IMPLODE streams differ from the IMPLODE streams found in PKZIP files,
 * so this was a bit of a waste for my purposes, but perhaps someone else will find it useful. -JP
 */
class Blast
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

    /*
     * Static tables used by decomp()
     */
    static /* const short */ base = [3, 2, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24, 40, 72, 136, 264]; // base for length codes
    static /* const char */ extra = [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8];           // extra bits for length codes

    /**
     * constructor()
     *
     * @this {Blast}
     */
    constructor()
    {
        if (!Blast.litcode) {
            Blast.litcode = Blast.constructHuffman(Blast.MAXBITS, 256,
                [11, 124, 8, 7, 28, 7, 188, 13, 76, 4, 10, 8, 12, 10, 12, 10, 8, 23, 8,
                 9, 7, 6, 7, 8, 7, 6, 55, 8, 23, 24, 12, 11, 7, 9, 11, 12, 6, 7, 22, 5,
                 7, 24, 6, 11, 9, 6, 7, 22, 7, 11, 38, 7, 9, 8, 25, 11, 8, 11, 9, 12,
                 8, 12, 5, 38, 5, 38, 5, 11, 7, 5, 6, 21, 6, 10, 53, 8, 7, 24, 10, 27,
                 44, 253, 253, 253, 252, 252, 252, 13, 12, 45, 12, 45, 12, 61, 12, 45, 44, 173]
             );
             Blast.lencode = Blast.constructHuffman(Blast.MAXBITS, 16, [2, 35, 36, 53, 38, 23]);
             Blast.distcode = Blast.constructHuffman(Blast.MAXBITS, 64, [2, 20, 53, 230, 247, 151, 248]);
        }
        this.out = new Uint8Array(Blast.MAXWIN);
    }

    /**
     * init(src)
     *
     * Initialize buffers.
     *
     * @this {Explode}
     * @param {Buffer} src
     */
    init(src)
    {
        this.src = src;
        this.left = src.length;
        this.in = this.bitbuf = this.bitcnt = 0;
        this.dst = Buffer.alloc(0);
        this.next = 0;
        this.first = true;
    }

    /**
     * getOutput()
     *
     * Get the output buffer.
     *
     * @this {Blast}
     * @returns {Buffer}
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
     * @this {Blast}
     * @param {Buffer} src
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

        /* read header */
        lit = this.bits(8);
        if (lit > 1) return -1;
        dict = this.bits(8);
        if (dict < 4 || dict > 6) return -2;

        /* decode literals and length/distance pairs */
        do {
            if (this.bits(1)) {
                /* get length */
                symbol = this.decode(Blast.lencode);
                len = Blast.base[symbol] + this.bits(Blast.extra[symbol]);
                if (len == 519) {
                    break;              // end code
                }
                /* get distance */
                symbol = len == 2? 2 : dict;
                dist = this.decode(Blast.distcode) << symbol;
                dist += this.bits(symbol);
                dist++;
                if (this.first && dist > this.next) {
                    return -3;          // distance too far back
                }
                /* copy length bytes from distance bytes back */
                do {
                    to = this.next;
                    from = to - dist;
                    copy = Blast.MAXWIN;
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
                    if (this.next == Blast.MAXWIN) {
                        if (!this.flush(this.next)) return 1;
                        this.next = this.first = 0;
                    }
                } while (len != 0);
            }
            else {
                /* get literal and write it */
                symbol = lit? this.decode(Blast.litcode) : this.bits(8);
                this.out[this.next++] = symbol;
                if (this.next == Blast.MAXWIN) {
                    if (!this.flush(this.next)) return 1;
                    this.next = this.first = 0;
                }
            }
        } while (true);

        /* write any leftover output */
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
     * @this {Blast}
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
            left = (Blast.MAXBITS+1) - len;
            if (left == 0) break;
            if (this.left == 0) {
                throw new Error("Blast.decode(): out of input");
            }
            bitbuf = this.src[this.in++];
            this.left--;
            if (left > 8) left = 8;
        }
        return -9;                          /* ran out of codes */
    }

    /**
     * flush(length)
     *
     * Flush the output buffer (up to length bytes) to the destination buffer.
     *
     * @this {Blast}
     * @param {number} length
     * @returns {boolean}
     */
    flush(length)
    {
        let a = this.out;
        if (length < a.length) {
            a = a.slice(0, length);
        }
        this.dst = Buffer.concat([this.dst, a]);
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
     * @this {Blast}
     * @param {number} need
     * @returns {number}
     */
    bits(need)
    {
        let /* int */ val;          // bit accumulator

        /* load at least need bits into val */
        val = this.bitbuf;
        while (this.bitcnt < need) {
            if (this.left == 0) {
                throw new Error("Blast.bits(): out of input");
            }
            /* load eight more bits */
            val |= this.src[this.in++] << this.bitcnt;
            this.left--;
            this.bitcnt += 8;
        }

        /* drop need bits and update buffer, always zero to seven bits left */
        this.bitbuf = val >> need;
        this.bitcnt -= need;

        /* return need bits, zeroing the bits above that */
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

        /* convert compact repeat counts into symbol bit length list */
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

        /* count number of codes of each length */
        for (len = 0; len <= nCounts; len++) {
            huffman.count[len] = 0;
        }
        for (symbol = 0; symbol < n; symbol++) {
            (huffman.count[length[symbol]])++;  // assumes lengths are within bounds
        }
        if (huffman.count[0] == n) {            // no codes!
            return huffman;                     // complete, but decode() will fail
        }

        /* check for an over-subscribed or incomplete set of lengths */
        huffman.left = 1;                       // one possible code of zero length
        for (len = 1; len <= nCounts; len++) {
            huffman.left <<= 1;                 // one more bit, double codes left
            huffman.left -= huffman.count[len]; // deduct count from possible codes
            if (huffman.left < 0) {
                return huffman;                 // over-subscribed (left > 0 means incomplete)
            }
        }

        /* generate offsets into symbol table for each length for sorting */
        offs[1] = 0;
        for (len = 1; len < nCounts; len++) {
            offs[len + 1] = offs[len] + huffman.count[len];
        }

        /*
        * put symbols in table sorted by length, by symbol order within each length
        */
        for (symbol = 0; symbol < n; symbol++) {
            if (length[symbol] != 0) {
                huffman.symbol[offs[length[symbol]]++] = symbol;
            }
        }

        /* left is zero for complete set, positive for incomplete set */
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
    if (DEBUG) {
        if (!exp) {
            throw new Error("assertion failure" + (msg? ": " + msg : ""));
        }
    }
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
function reverse16(/* uint16_t */ x, /* int */ n)
{
    let /* uint16_t */ lo, hi;
    let /* uint16_t */ reversed;

    assert(n > 0);
    assert(n <= 16);

    lo = x & 0xff;
    hi = x >> 8;

    reversed = ((reverse8_tbl[lo] << 8) | reverse8_tbl[hi]) & 0xffff;

    return reversed >> (16 - n);
}

const /* uint8_t */ reverse8_tbl = [
    /* 0x00 */ 0x00,
    /* 0x01 */ 0x80,
    /* 0x02 */ 0x40,
    /* 0x03 */ 0xc0,
    /* 0x04 */ 0x20,
    /* 0x05 */ 0xa0,
    /* 0x06 */ 0x60,
    /* 0x07 */ 0xe0,
    /* 0x08 */ 0x10,
    /* 0x09 */ 0x90,
    /* 0x0a */ 0x50,
    /* 0x0b */ 0xd0,
    /* 0x0c */ 0x30,
    /* 0x0d */ 0xb0,
    /* 0x0e */ 0x70,
    /* 0x0f */ 0xf0,
    /* 0x10 */ 0x08,
    /* 0x11 */ 0x88,
    /* 0x12 */ 0x48,
    /* 0x13 */ 0xc8,
    /* 0x14 */ 0x28,
    /* 0x15 */ 0xa8,
    /* 0x16 */ 0x68,
    /* 0x17 */ 0xe8,
    /* 0x18 */ 0x18,
    /* 0x19 */ 0x98,
    /* 0x1a */ 0x58,
    /* 0x1b */ 0xd8,
    /* 0x1c */ 0x38,
    /* 0x1d */ 0xb8,
    /* 0x1e */ 0x78,
    /* 0x1f */ 0xf8,
    /* 0x20 */ 0x04,
    /* 0x21 */ 0x84,
    /* 0x22 */ 0x44,
    /* 0x23 */ 0xc4,
    /* 0x24 */ 0x24,
    /* 0x25 */ 0xa4,
    /* 0x26 */ 0x64,
    /* 0x27 */ 0xe4,
    /* 0x28 */ 0x14,
    /* 0x29 */ 0x94,
    /* 0x2a */ 0x54,
    /* 0x2b */ 0xd4,
    /* 0x2c */ 0x34,
    /* 0x2d */ 0xb4,
    /* 0x2e */ 0x74,
    /* 0x2f */ 0xf4,
    /* 0x30 */ 0x0c,
    /* 0x31 */ 0x8c,
    /* 0x32 */ 0x4c,
    /* 0x33 */ 0xcc,
    /* 0x34 */ 0x2c,
    /* 0x35 */ 0xac,
    /* 0x36 */ 0x6c,
    /* 0x37 */ 0xec,
    /* 0x38 */ 0x1c,
    /* 0x39 */ 0x9c,
    /* 0x3a */ 0x5c,
    /* 0x3b */ 0xdc,
    /* 0x3c */ 0x3c,
    /* 0x3d */ 0xbc,
    /* 0x3e */ 0x7c,
    /* 0x3f */ 0xfc,
    /* 0x40 */ 0x02,
    /* 0x41 */ 0x82,
    /* 0x42 */ 0x42,
    /* 0x43 */ 0xc2,
    /* 0x44 */ 0x22,
    /* 0x45 */ 0xa2,
    /* 0x46 */ 0x62,
    /* 0x47 */ 0xe2,
    /* 0x48 */ 0x12,
    /* 0x49 */ 0x92,
    /* 0x4a */ 0x52,
    /* 0x4b */ 0xd2,
    /* 0x4c */ 0x32,
    /* 0x4d */ 0xb2,
    /* 0x4e */ 0x72,
    /* 0x4f */ 0xf2,
    /* 0x50 */ 0x0a,
    /* 0x51 */ 0x8a,
    /* 0x52 */ 0x4a,
    /* 0x53 */ 0xca,
    /* 0x54 */ 0x2a,
    /* 0x55 */ 0xaa,
    /* 0x56 */ 0x6a,
    /* 0x57 */ 0xea,
    /* 0x58 */ 0x1a,
    /* 0x59 */ 0x9a,
    /* 0x5a */ 0x5a,
    /* 0x5b */ 0xda,
    /* 0x5c */ 0x3a,
    /* 0x5d */ 0xba,
    /* 0x5e */ 0x7a,
    /* 0x5f */ 0xfa,
    /* 0x60 */ 0x06,
    /* 0x61 */ 0x86,
    /* 0x62 */ 0x46,
    /* 0x63 */ 0xc6,
    /* 0x64 */ 0x26,
    /* 0x65 */ 0xa6,
    /* 0x66 */ 0x66,
    /* 0x67 */ 0xe6,
    /* 0x68 */ 0x16,
    /* 0x69 */ 0x96,
    /* 0x6a */ 0x56,
    /* 0x6b */ 0xd6,
    /* 0x6c */ 0x36,
    /* 0x6d */ 0xb6,
    /* 0x6e */ 0x76,
    /* 0x6f */ 0xf6,
    /* 0x70 */ 0x0e,
    /* 0x71 */ 0x8e,
    /* 0x72 */ 0x4e,
    /* 0x73 */ 0xce,
    /* 0x74 */ 0x2e,
    /* 0x75 */ 0xae,
    /* 0x76 */ 0x6e,
    /* 0x77 */ 0xee,
    /* 0x78 */ 0x1e,
    /* 0x79 */ 0x9e,
    /* 0x7a */ 0x5e,
    /* 0x7b */ 0xde,
    /* 0x7c */ 0x3e,
    /* 0x7d */ 0xbe,
    /* 0x7e */ 0x7e,
    /* 0x7f */ 0xfe,
    /* 0x80 */ 0x01,
    /* 0x81 */ 0x81,
    /* 0x82 */ 0x41,
    /* 0x83 */ 0xc1,
    /* 0x84 */ 0x21,
    /* 0x85 */ 0xa1,
    /* 0x86 */ 0x61,
    /* 0x87 */ 0xe1,
    /* 0x88 */ 0x11,
    /* 0x89 */ 0x91,
    /* 0x8a */ 0x51,
    /* 0x8b */ 0xd1,
    /* 0x8c */ 0x31,
    /* 0x8d */ 0xb1,
    /* 0x8e */ 0x71,
    /* 0x8f */ 0xf1,
    /* 0x90 */ 0x09,
    /* 0x91 */ 0x89,
    /* 0x92 */ 0x49,
    /* 0x93 */ 0xc9,
    /* 0x94 */ 0x29,
    /* 0x95 */ 0xa9,
    /* 0x96 */ 0x69,
    /* 0x97 */ 0xe9,
    /* 0x98 */ 0x19,
    /* 0x99 */ 0x99,
    /* 0x9a */ 0x59,
    /* 0x9b */ 0xd9,
    /* 0x9c */ 0x39,
    /* 0x9d */ 0xb9,
    /* 0x9e */ 0x79,
    /* 0x9f */ 0xf9,
    /* 0xa0 */ 0x05,
    /* 0xa1 */ 0x85,
    /* 0xa2 */ 0x45,
    /* 0xa3 */ 0xc5,
    /* 0xa4 */ 0x25,
    /* 0xa5 */ 0xa5,
    /* 0xa6 */ 0x65,
    /* 0xa7 */ 0xe5,
    /* 0xa8 */ 0x15,
    /* 0xa9 */ 0x95,
    /* 0xaa */ 0x55,
    /* 0xab */ 0xd5,
    /* 0xac */ 0x35,
    /* 0xad */ 0xb5,
    /* 0xae */ 0x75,
    /* 0xaf */ 0xf5,
    /* 0xb0 */ 0x0d,
    /* 0xb1 */ 0x8d,
    /* 0xb2 */ 0x4d,
    /* 0xb3 */ 0xcd,
    /* 0xb4 */ 0x2d,
    /* 0xb5 */ 0xad,
    /* 0xb6 */ 0x6d,
    /* 0xb7 */ 0xed,
    /* 0xb8 */ 0x1d,
    /* 0xb9 */ 0x9d,
    /* 0xba */ 0x5d,
    /* 0xbb */ 0xdd,
    /* 0xbc */ 0x3d,
    /* 0xbd */ 0xbd,
    /* 0xbe */ 0x7d,
    /* 0xbf */ 0xfd,
    /* 0xc0 */ 0x03,
    /* 0xc1 */ 0x83,
    /* 0xc2 */ 0x43,
    /* 0xc3 */ 0xc3,
    /* 0xc4 */ 0x23,
    /* 0xc5 */ 0xa3,
    /* 0xc6 */ 0x63,
    /* 0xc7 */ 0xe3,
    /* 0xc8 */ 0x13,
    /* 0xc9 */ 0x93,
    /* 0xca */ 0x53,
    /* 0xcb */ 0xd3,
    /* 0xcc */ 0x33,
    /* 0xcd */ 0xb3,
    /* 0xce */ 0x73,
    /* 0xcf */ 0xf3,
    /* 0xd0 */ 0x0b,
    /* 0xd1 */ 0x8b,
    /* 0xd2 */ 0x4b,
    /* 0xd3 */ 0xcb,
    /* 0xd4 */ 0x2b,
    /* 0xd5 */ 0xab,
    /* 0xd6 */ 0x6b,
    /* 0xd7 */ 0xeb,
    /* 0xd8 */ 0x1b,
    /* 0xd9 */ 0x9b,
    /* 0xda */ 0x5b,
    /* 0xdb */ 0xdb,
    /* 0xdc */ 0x3b,
    /* 0xdd */ 0xbb,
    /* 0xde */ 0x7b,
    /* 0xdf */ 0xfb,
    /* 0xe0 */ 0x07,
    /* 0xe1 */ 0x87,
    /* 0xe2 */ 0x47,
    /* 0xe3 */ 0xc7,
    /* 0xe4 */ 0x27,
    /* 0xe5 */ 0xa7,
    /* 0xe6 */ 0x67,
    /* 0xe7 */ 0xe7,
    /* 0xe8 */ 0x17,
    /* 0xe9 */ 0x97,
    /* 0xea */ 0x57,
    /* 0xeb */ 0xd7,
    /* 0xec */ 0x37,
    /* 0xed */ 0xb7,
    /* 0xee */ 0x77,
    /* 0xef */ 0xf7,
    /* 0xf0 */ 0x0f,
    /* 0xf1 */ 0x8f,
    /* 0xf2 */ 0x4f,
    /* 0xf3 */ 0xcf,
    /* 0xf4 */ 0x2f,
    /* 0xf5 */ 0xaf,
    /* 0xf6 */ 0x6f,
    /* 0xf7 */ 0xef,
    /* 0xf8 */ 0x1f,
    /* 0xf9 */ 0x9f,
    /* 0xfa */ 0x5f,
    /* 0xfb */ 0xdf,
    /* 0xfc */ 0x3f,
    /* 0xfd */ 0xbf,
    /* 0xfe */ 0x7f,
    /* 0xff */ 0xff
];
