/**
 * @fileoverview Library for "unarchiving" compressed data in various legacy archive formats
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Blast() functionality adapted from https://github.com/madler/zlib/tree/master/contrib/blast
 * Copyright (C) 2003, 2012, 2013 Mark Adler
 */

import { Buffer } from 'node:buffer';

/**
 * @class Unarchive
 */
export default class Unarchive {
    /**
     * blastSync(data)
     *
     * @param {Buffer} input (IMPLODE_DCL data)
     * @returns {Buffer}
     */
    static blastSync(input)
    {
        let blast = new Blast(input);
        blast.decomp();
        return blast.outbuf;
    }

    /**
     * passThruSync(data)
     *
     * @param {Buffer} input (compressed data)
     * @returns {Buffer}
     */
    static passThruSync(input)
    {
        return input;
    }
}

/*
 * Blast functions for decompressing DCL_IMPLODE streams.
 *
 * Sadly, DCL_IMPLODE streams differ from the IMPLODE streams found in PKZIP files,
 * so this was a bit of a waste for my purposes, but perhaps someone else will find it useful.
 */

/**
 * Huffman table constructor for Blast.  count[1..MAXBITS] contains the number of
 * symbols of each length, which for a canonical code are stepped through in order.
 * symbol[] contains the symbol values in canonical order, where the number of entries
 * is the sum of the counts in count[].
 *
 * @class BlastHuffman
 * @property {Int16Array} count
 * @property {Int16Array} symbol
 * @property {number} left (number of possible codes left of current length)
 */
class BlastHuffman {
    /**
     * Given a list of repeated code lengths rep[0..n-1], where each byte is a
     * count (high four bits + 1) and a code length (low four bits), generate the
     * list of code lengths.  This compaction reduces the size of the object code.
     * Then given the list of code lengths length[0..n-1] representing a canonical
     * Huffman code for n symbols, construct the tables required to decode those
     * codes.  Those tables are the number of codes of each length, and the symbols
     * sorted by length, retaining their original order within each length.  The
     * return value is zero for a complete code set, negative for an over-
     * subscribed code set, and positive for an incomplete code set.  The tables
     * can be used if the return value is zero or positive, but they cannot be used
     * if the return value is negative.  If the return value is zero, it is not
     * possible for decode() using that table to return an error--any stream of
     * enough bits will resolve to a symbol.  If the return value is positive, then
     * it is possible for decode() using that table to return an error for received
     * codes past the end of the incomplete lengths.
     *
     * @this {BlastHuffman}
     * @param {number} nCounts (eg, MAXBITS)
     * @param {number} nSymbols
     * @param {number} rep
     */
    constructor(nCounts, nSymbols, rep)
    {
        let /* int */ symbol;                   // current symbol when stepping through length[]
        let /* int */ len;                      // current length when stepping through h->count[]
        let offs = new Array(nCounts+1);        // offsets in symbol table for each length
        let length = new Array(256);            // code lengths

        this.count = new Int16Array(nCounts+1);
        this.symbol = new Int16Array(nSymbols);
        this.left = 0;

        /* convert compact repeat counts into symbol bit length list */
        symbol = 0;
        for (let i = 0; i < rep.length; i++) {
            len = rep[i];
            this.left = (len >> 4) + 1;
            len &= 15;
            do {
                length[symbol++] = len;
            } while (--this.left);
        }
        let n = symbol;

        /* count number of codes of each length */
        for (len = 0; len <= nCounts; len++) {
            this.count[len] = 0;
        }
        for (symbol = 0; symbol < n; symbol++) {
            (this.count[length[symbol]])++;     // assumes lengths are within bounds
        }
        if (this.count[0] == n) {               // no codes!
            return;                             // complete, but decode() will fail
        }

        /* check for an over-subscribed or incomplete set of lengths */
        this.left = 1;                          // one possible code of zero length
        for (len = 1; len <= nCounts; len++) {
            this.left <<= 1;                    // one more bit, double codes left
            this.left -= this.count[len];       // deduct count from possible codes
            if (this.left < 0) {
                return;                         // over-subscribed (left > 0 means incomplete)
            }
        }

        /* generate offsets into symbol table for each length for sorting */
        offs[1] = 0;
        for (len = 1; len < nCounts; len++) {
            offs[len + 1] = offs[len] + this.count[len];
        }

        /*
         * put symbols in table sorted by length, by symbol order within each length
         */
        for (symbol = 0; symbol < n; symbol++) {
            if (length[symbol] != 0) {
                this.symbol[offs[length[symbol]]++] = symbol;
            }
        }

        /* left is zero for complete set, positive for incomplete set */
    }
}

/**
 * @class Blast
 * @property {Buffer} inbuf     // (replaces infun and inhow)
 * @property {number} in        // next input location
 * @property {number} left      // available input at in
 * @property {number} bitbuf    // bit buffer
 * @property {number} bitcnt    // number of bits in bit buffer
 * @property {Buffer} outbuf    // (replaces outfun and outhow)
 * @property {number} next      // index of next write location in out[]
 * @property {boolean} first    // true to check distances (for first 4K)
 * @property {Uint8Array} out   // output array and sliding window
 */
class Blast {

    static MAXBITS  = 13;       // maximum code length
    static MAXWIN   = 4096;     // maximum window size
    static litcode = new BlastHuffman(Blast.MAXBITS, 256,
       [11, 124, 8, 7, 28, 7, 188, 13, 76, 4, 10, 8, 12, 10, 12, 10, 8, 23, 8,
        9, 7, 6, 7, 8, 7, 6, 55, 8, 23, 24, 12, 11, 7, 9, 11, 12, 6, 7, 22, 5,
        7, 24, 6, 11, 9, 6, 7, 22, 7, 11, 38, 7, 9, 8, 25, 11, 8, 11, 9, 12,
        8, 12, 5, 38, 5, 38, 5, 11, 7, 5, 6, 21, 6, 10, 53, 8, 7, 24, 10, 27,
        44, 253, 253, 253, 252, 252, 252, 13, 12, 45, 12, 45, 12, 61, 12, 45, 44, 173]
    );
    static lencode = new BlastHuffman(Blast.MAXBITS, 16, [2, 35, 36, 53, 38, 23]);
    static distcode = new BlastHuffman(Blast.MAXBITS, 64, [2, 20, 53, 230, 247, 151, 248]);
    static /* const short */ base = [3, 2, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24, 40, 72, 136, 264]; // base for length codes
    static /* const char */ extra = [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8];           // extra bits for length codes

    /**
     * constructor(input)
     *
     * @this {Blast}
     * @param {Buffer} input
     */
    constructor(input)
    {
        this.inbuf = input;
        this.left = input.length;
        this.in = this.bitbuf = this.bitcnt = 0;
        this.outbuf = Buffer.alloc(0);
        this.next = 0;
        this.first = true;
        this.out = new Uint8Array(Blast.MAXWIN);
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
            val |= this.inbuf[this.in++] << this.bitcnt;
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
     * @returns {number}
     */
    decomp()
    {
        let /* int */ lit;              // true if literals are coded
        let /* int */ dict;             // log2(dictionary size) - 6
        let /* int */ symbol;           // decoded symbol, extra bits for distance
        let /* int */ len;              // length for copy
        let /* unsigned */ dist;        // distance for copy
        let /* int */ copy;             // copy counter
        let /* byte * */ from, to;      // copy pointers (indexes)

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
     * Decode a code from the stream s using huffman table h.  Return the symbol
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
     * @param {Huffman} h
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
            bitbuf = this.inbuf[this.in++];
            this.left--;
            if (left > 8) left = 8;
        }
        return -9;                          /* ran out of codes */
    }

    /**
     * flush(length)
     *
     * Flush the output array (up to length bytes) to the output buffer.
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
        this.outbuf = Buffer.concat([this.outbuf, a]);
        return true;
    }
}
