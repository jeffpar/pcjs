/**
 * @fileoverview Library for "unarchiving" compressed data in various legacy archive formats
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * explode() functionality adapted from https://github.com/madler/zlib/tree/master/contrib/blast
 * Copyright (C) 2003, 2012, 2013 Mark Adler
 */

import { Buffer } from 'node:buffer';

/**
 * @class Unarchive
 */
export default class Unarchive {
    /**
     * explodeSync(data)
     *
     * @param {Buffer} input ("imploded" data)
     * @return {Buffer}
     */
    static explodeSync(input)
    {
        let explode = new Explode(input);
        explode.decomp();
        return explode.outbuf;
    }
}

/**
 * @class Explode
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
class Explode {

    static MAXBITS  = 13;       // maximum code length
    static MAXWIN   = 4096;     // maximum window size

    /**
     * @this {Explode}
     * @param {Buffer} input
     */
    constructor(input)
    {
        this.inbuf = input;
        this.outbuf = Buffer.alloc(input.length * 4);
        this.first = true;
        this.in = this.left = this.bitbuf = this.bitcnt = this.next = 0;
        this.out = new Uint8Array(Explode.MAXWIN);
    }

    /**
     * @this {Explode}
     */
    decomp()
    {
    }
}
