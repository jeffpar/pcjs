/**
 * @fileoverview Support for 36-bit integers (using unsigned JavaScript numbers)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { DEBUG } from "./defines.js";

/*
    From the "PDP-10 System Reference Manual", May 1968, p. 1-4:

    1.1 NUMBER SYSTEM

    The program can interpret a data word as a 36-digit, unsigned binary number, or the left and right
    halves of a word can be taken as separate 18-bit numbers.  The PDP-10 repertoire includes instructions
    that effectively add or subtract one from both halves of a word, so the right half can be used for
    address modification when the word is addressed as an index register, while the left half is used to
    keep a control count.

    The standard arithmetic instructions in the PDP-10 use twos complement, fixed point conventions to do
    binary arithmetic.  In a word used as a number, bit 0 (the leftmost bit) represents the sign, 0 for positive,
    1 for negative.  In a positive number the remaining 35 bits are the magnitude in ordinary binary notation.
    The negative of a number is obtained by taking its twos complement. If x is an n-digit binary number, its
    twos complement is 2^n - x, and its ones complement is (2^n - 1) - x, or equivalently (2^n - x) - 1.

    Subtracting a number from 2^n - 1 (ie, from all 1s) is equivalent to performing the logical complement,
    ie changing all 0s to 1s and all 1s to 0s.  Therefore, to form the twos complement one takes the logical
    complement (usually referred to merely as the complement) of the entire word including the sign, and adds
    1 to the result.  In a negative number the sign bit is 1, and the remaining bits are the twos complement
    of the magnitude.

    Zero is represented by a word containing all 0s.  Complementing this number produces all 1s, and adding
    1 to that produces all 0s again.  Hence there is only one zero representation and its sign is positive.
    Since the numbers are symmetrical in magnitude about a single zero representation, all even numbers both
    positive and negative end in 0, all odd numbers in 1 (a number all 1s represents -1).  But since there are
    the same number of positive and negative numbers and zero is positive, there is one more negative number
    than there are nonzero positive numbers.  This is the most negative number and it cannot be produced by
    negating any positive number (its octal representation is 400000 000000 and its magnitude is one greater
    than the largest positive number).

    If ones complements were used for negatives one could read a negative number by attaching significance
    to the as instead of the 1s.  In twos complement notation each negative number is one greater than the
    complement of the positive number of the same magnitude, so one can read a negative number by attaching
    significance to the rightmost 1 and attaching significance to the 0s at the left of it (the negative number
    of largest magnitude has a 1 in only the sign position).  In a negative integer, 1s may be discarded at the
    left, just as leading 0s may be dropped in a positive integer.  In a negative fraction, 0s may be discarded
    at the right.  So long as only 0s are discarded, the number remains in twos complement form because it
    still has a 1 that possesses significance; but if a portion including the rightmost 1 is discarded, the
    remaining part of the fraction is now a ones complement.

    The computer does not keep track of a binary point - the programmer must adopt a point convention and shift
    the magnitude of the result to conform to the convention used.  Two common conventions are to regard a number
    as an integer (binary point at the right) or as a proper fraction (binary point at the left); in these two
    cases the range of numbers represented by a single word is -2^35 to 2^35 - 1, or -1 to 1 - 2^35.  Since
    multiplication and division make use of double length numbers, there are special instructions for performing
    these operations with integral operands.

    SIDEBAR: Multiplication produces a double length product, and the programmer must remember that discarding
    the low order part of a double length negative leaves the high order part in correct twos complement form
    only if the low order part is null.

    ...

    2.5 FIXED POINT ARITHMETIC

    For fixed point arithmetic the PDP-10 has instructions for arithmetic shifting (which is essentially
    multiplication by a power of 2) as well as for performing addition, subtraction, multiplication and division
    of numbers in fixed point format [§ 1.1].  In such numbers the position of the binary point is arbitrary
    (the programmer may adopt any point convention).  The add and subtract instructions involve only single length
    numbers, whereas multiply supplies a double length product, and divide uses a double length dividend.  The high
    and low order words respectively of a double length fixed point number are in accumulators A and A+1 (mod 20),
    where the magnitude is the 70-bit string in bits 1-35 of the two words and the signs of the two are identical.
    There are also integer multiply and divide instructions that involve only single length numbers and are
    especially suited for handling smaller integers, particularly those of eighteen bits or less such as addresses
    (of course they can be used for small fractions as well provided the programmer keeps track of the binary point).
    For convenience in the following, all operands are assumed to be integers (binary point at the right).

    The processor has four flags, Overflow, Carry 0, Carry 1 and No Divide, that indicate when the magnitude of a
    number is or would be larger than can be accommodated.  Carry 0 and Carry 1 actually detect carries out of bits
    0 and 1 in certain instructions that employ fixed point arithmetic operations: the add and subtract instructions
    treated here, the move instructions that produce the negative or magnitude of the word moved [§ 2.2], and the
    arithmetic test instructions that increment or decrement the test word [§ 2.7].  In these instructions an
    incorrect result is indicated - and the Overflow flag set - if the carries are different, ie if there is a carry
    into the sign but not out of it, or vice versa.  The Overflow flag is also set by No Divide being set, which
    means the processor has failed to perform a division because the magnitude of the dividend is greater than or
    equal to that of the divisor, or in integer divide, simply that the divisor is zero.  In other overflow cases
    only Overflow itself is set: these include too large a product in multiplication, and loss of significant bits
    in left arithmetic shifting.

    SIDEBAR: Overflow is determined directly from the carries, not from the carry flags, as their states may reflect
    events in previous instructions.
 */

/**
 * @class Int36
 * @property {number} value
 * @property {number|null} extended
 * @property {number} magnitude
 * @property {number|null} remainder
 * @property {number} error
 * @unrestricted
 *
 * The 'value' property stores the 36-bit value as an unsigned integer.  When the value should be
 * interpreted as a signed quantity, subtract BIT36 whenever value > INT_MASK.
 *
 * The 'extended' property stores an additional 36 bits of data from a multiplication, and can also
 * provide an additional 36 bits of data to a division.  Internally, it should be null whenever the
 * value is not extended.
 *
 * The 'magnitude' property is normally 35 for non-extended values and 71 for extended values;
 * it is set to 70 whenever 'value' and 'extended' are both converted to 35-bit values with matching
 * signs; see setMagnitude().
 *
 * The 'remainder' property stores the remainder from the last division.  You should assume it will
 * be set to null by any other operation.
 *
 * The 'error' property records any error(s) from the last operation.
 */
export default class Int36 {
    /**
     * Int36(obj, extended)
     *
     * The constructor, which simply calls set(), creates an Int36 from either:
     *
     *      1) another Int36
     *      2) a single 36-bit value, with an optional 36-bit extension
     *      3) nothing (initial value will be zero)
     *
     * All internal Int36 values (ie, the value and any extension) are unsigned values in the range:
     *
     *      0 <= i <= Math.pow(2, 36) - 1
     *
     * The lower bound is ZERO and the upper bound is Int36.WORD_MASK.  Whenever an Int36 value should be
     * interpreted as a signed value, values above Int36.INT_MASK (ie, values with bit 35 set) should be
     * converted to their signed counterpart by subtracting the value from Int36.WORD_LIMIT (aka WORD_MASK + 1);
     * the easiest way to do that is call isNeg() to check the sign bit and then call negate() as
     * appropriate.
     *
     * NOTE: We use modern bit numbering, where bit 0 is the right-most (least-significant) bit and
     * bit 35 is the left-most bit.  This is opposite of the PDP-10 convention, which defined bit 0 as the
     * left-most bit and bit 35 as the right-most bit.
     *
     * Although the integer precision of JavaScript floating-point (IEEE 754 double-precision) numbers is:
     *
     *      -Math.pow(2, 53) <= i <= Math.pow(2, 53)
     *
     * it seems unwise to ever permit our internal values to creep outside the 36-bit range, because
     * floating-point operations will drop least-significant bits in favor of most-significant bits when a
     * result becomes too large, which is the opposite of what integer operations traditionally do.  There
     * might be some optimization benefits to performing our internal 36-bit truncation "lazily", but at
     * least initially, I prefer to truncate() the results of all 36-bit arithmetic operations immediately.
     *
     * Most of the Int36 operations come in two flavors: those that accept numbers, and those that accept
     * another Int36.  The latter are more efficient, because (as just explained) an Int36's internal value
     * should always be in range, whereas external numbers could be out of range OR have a fractional value
     * OR be something else entirely (NaN, Infinity, -Infinity, undefined, etc), so numeric inputs are
     * always passed through the static validate() function.
     *
     * We could eliminate the two flavors and check each parameter's type, like we do in the constructor,
     * but constructor calls are infrequent (if they're not, you're doing something wrong), whereas Int36-only
     * operations should be as fast and unchecked as possible.
     *
     * @this {Int36}
     * @param {Int36|number} [obj] (if omitted, the default is zero)
     * @param {number|null} [extended]
     */
    constructor(obj, extended)
    {
        this.set(obj, extended);
    }

    /**
     * set(obj, extended)
     *
     * @this {Int36}
     * @param {Int36|number} [obj] (if omitted, the default is zero)
     * @param {number|null} [extended]
     */
    set(obj = 0, extended)
    {
        if (obj instanceof Int36) {
            this.value = obj.value;
            this.extended = obj.extended;
            this.magnitude = obj.magnitude;
            this.remainder = obj.remainder;
        }
        else {
            this.value = Int36.validate(obj || 0);
            this.extended = null;
            this.magnitude = 35;
            /*
             * NOTE: Surprisingly, isNaN(null) is false, whereas isNaN(undefined) is true.  Go figure.
             */
            if (extended != null && !isNaN(extended)) {
                this.extended = Int36.validate(extended);
                /*
                 * Since I'm not requiring there to be any relationship between these independently set values
                 * (ie, that their sign bits match), we have to treat this Int36 as a signed 71-bit value until
                 * further notice.
                 */
                this.magnitude = 71;
            }
            this.remainder = null;
        }
        this.error = Int36.ERROR.NONE;
    }

    /**
     * toDecimal(fUnsigned)
     *
     * @this {Int36}
     * @param {boolean} fUnsigned
     * @returns {string}
     */
    toDecimal(fUnsigned)
    {
        let s = "", fNeg = false;
        let i36Div = new Int36(10000000000);
        let i36Rem = new Int36();
        let i36Tmp = new Int36(this);

        if (!fUnsigned && i36Tmp.isNeg()) {
            i36Tmp.negate();
            fNeg = true;
        }
        /*
         * Conversion of any 72-bit value should take no more than 3 divisions by 10,000,000,000.
         */
        let nMaxDivs = 3, quotient, minDigits;
        do {
            i36Tmp.div(i36Div);
            /*
             * In a perfect world, there would be no errors, because all calculations at this point
             * are within known bounds.  But let's make sure we don't produce garbage or spin our wheels.
             */
            if (i36Tmp.error || i36Tmp.remainder >= 10000000000 || !nMaxDivs--) {
                s = "error";
                break;
            }
            quotient = i36Tmp.value || i36Tmp.extended;
            let minDigits = (quotient? 10 : 1);
            i36Rem.set(i36Tmp.remainder);
            do {
                i36Rem.divNum(10);
                if (i36Rem.remainder < 0 || i36Rem.remainder > 9) {
                    quotient = 0;
                    s = "error";
                    break;
                }
                s = String.fromCharCode(0x30 + i36Rem.remainder) + s;
            } while (--minDigits > 0 || i36Rem.value);
        } while (quotient);

        if (fNeg) s = '-' + s;
        return s;
    }

    /**
     * toString(radix, fUnsigned)
     *
     * @this {Int36}
     * @param {number} [radix] (default is 10)
     * @param {boolean} [fUnsigned] (default is signed for radix 10, unsigned for any other radix)
     * @returns {string}
     */
    toString(radix = 10, fUnsigned = false)
    {
        if (radix == 10) {
            return this.toDecimal(fUnsigned);
        }

        let value = this.value;
        let extended = this.extended;

        if (radix == 8) {
            let s = Int36.octal(value);
            if (extended != null) {
                s = Int36.octal(extended) + ' ' + s;
            }
            if (this.remainder != null) {
                s += ':' + Int36.octal(this.remainder);
            }
            if (DEBUG && this.error) {
                if (this.error & Int36.ERROR.OVERFLOW) {
                    s += " overflow";
                }
                if (this.error & Int36.ERROR.UNDERFLOW) {
                    s += " underflow";
                }
                if (this.error & Int36.ERROR.DIVZERO) {
                    s += " divide-by-zero";
                }
            }
            return s;
        }

        if (extended != null) {
            /*
             * TODO: Need a radix-independent solution for these extended (up to 72-bit) values,
             * because after 52 bits, JavaScript will start dropping least-significant bits.  Until
             * then, you're better off sticking with octal (see above).
             */
            value = extended * Int36.WORD_LIMIT + value;
        }
        return value.toString(radix);
    }

    /**
     * truncate(result, operand, fSub)
     *
     * The range of valid results (0 - WORD_MASK) is divided into two equal sub-ranges: 0 to INT_MASK,
     * where the sign bit is zero (the bottom range), and INT_MASK+1 to WORD_MASK (the top range), where
     * the sign bit is one.  During a single arithmetic operation, the result can "wrap around" from
     * the bottom range to the top, or from the top range to the bottom, but it's an overflow/underflow
     * error ONLY if the result "wraps across" the midpoint between the two ranges, producing an
     * unnaturally small delta (<= INT_MASK).
     *
     * This can be confirmed independently by examining the sign bits (BIT35) of the original value
     * (V), the operand (O), the result (R), as well as two intermediate calculations, VR = (V ^ R)
     * and OR = (O ^ R), and a final calculation, E = (VR & OR).  If E is set, then overflow (V == 0)
     * or underflow (V == 1) occurred.
     *
     * In the case of subtraction (when fSub is true), consult the second table, which replaces OR
     * with OV (O ^ V).
     *
     *      V   O   R   VR  OR  E
     *      -   -   -   --  --  -
     *      0   0   0   0   0   0
     *      0   0   1   1   1   1 (adding positive to positive yielded negative: overflow)
     *      0   1   0   0   1   0
     *      0   1   1   1   0   0
     *      1   0   0   1   0   0
     *      1   0   1   0   1   0
     *      1   1   0   1   1   1 (adding negative to negative yielded positive: underflow)
     *      1   1   1   0   0   0
     *
     *      V   O   R   VR  OV  E
     *      -   -   -   --  --  -
     *      0   0   0   0   0   0
     *      0   0   1   1   0   0
     *      0   1   0   0   1   0
     *      0   1   1   1   1   1 (subtracting negative from positive yielded negative: overflow)
     *      1   0   0   1   1   1 (subtracting positive from negative yielded positive: underflow)
     *      1   0   1   0   1   0
     *      1   1   0   1   0   0
     *      1   1   1   0   0   0
     *
     * NOTE: This function's job is to truncate the result of an operation to 36-bit accuracy,
     * not to remove any fractional portion that might also exist.  If an operation could have produced
     * a non-integer result (eg, div()), it's the caller's responsibility to deal with that first.
     *
     * @this {Int36}
     * @param {number} result
     * @param {number} [operand]
     * @param {boolean} [fSub] (true if operand was subtracted)
     * @returns {number}
     */
    truncate(result, operand, fSub)
    {
        if (DEBUG && result !== Math.trunc(result)) {
            console.log("Int36.truncate(" + result + " is not an integer)");
        }

        this.extended = null;
        this.magnitude = 35;
        this.remainder = null;
        this.error = Int36.ERROR.NONE;

        if (result < 0) {
            result += Int36.WORD_LIMIT;
        }

        result %= Int36.WORD_LIMIT;

        /*
         * We don't actually need to know what the operand was to determine overflow or underflow
         * for addition or subtraction, just the original value (this.value) the new value (result).
         *
         * We do, however, need to know the operand if we want to confirm our error calculation using
         * the truth table above, which requires examining the sign bits of all the inputs and outputs.
         */
        if (operand !== undefined) {
            /*
             * Calculating V, R, O, and E as described above is somewhat tedious, because bits
             * above bit 31 cannot be accessed directly; we shift all the sign bits down to bit 0
             * using division first.  We don't need to truncate the results, because the subsequent
             * bitwise operations perform truncation automatically.
             */
            let e = 0, v = 0, r = 0, o = 0;
            if (DEBUG) {
                v = this.value / Int36.INT_LIMIT, r = result / Int36.INT_LIMIT, o = operand / Int36.INT_LIMIT;
                e = ((v ^ r) & (o ^ (fSub? v : r))) & 1;
            }
            if ((result > Int36.INT_MASK) != (this.value > Int36.INT_MASK)) {
                let delta = result - this.value;
                if (Math.abs(delta) <= Int36.INT_MASK) {
                    this.error |= (delta > 0? Int36.ERROR.OVERFLOW : Int36.ERROR.UNDERFLOW);
                    if (DEBUG && (delta > 0) != !(e & v)) e = 0;
                }
            }
            if (DEBUG && (!this.error) != (!e)) console.log("overflow inconsistency");
        }
        return result;
    }

    /**
     * add(i36)
     *
     * @this {Int36}
     * @param {Int36} i36
     */
    add(i36)
    {
        this.value = this.truncate(this.value + i36.value, i36.value);
    }

    /**
     * addNum(num)
     *
     * @this {Int36}
     * @param {number} num
     */
    addNum(num)
    {
        num = Int36.validate(num);
        this.value = this.truncate(this.value + num, num);
    }

    /**
     * sub(i36)
     *
     * @this {Int36}
     * @param {Int36} i36
     */
    sub(i36)
    {
        this.value = this.truncate(this.value - i36.value, i36.value, true);
    }

    /**
     * subNum(num)
     *
     * @this {Int36}
     * @param {number} num
     */
    subNum(num)
    {
        num = Int36.validate(num);
        this.value = this.truncate(this.value - num, num, true);
    }

    /**
     * mul(i36)
     *
     * @this {Int36}
     * @param {Int36} i36
     */
    mul(i36)
    {
        this.mulExtended(i36.value);
    }

    /**
     * mulNum(num)
     *
     * @this {Int36}
     * @param {number} num
     */
    mulNum(num)
    {
        this.mulExtended(Int36.validate(num));
    }

    /**
     * mulExtended(value)
     *
     * To support 72-bit results, we perform the multiplication process as you would "by hand",
     * treating the operands to be multiplied as two 2-digit numbers, where each "digit" is an 18-bit
     * number (base 2^18).  Each individual multiplication of these 18-bit "digits" will produce
     * a result within 2^36, well within JavaScript integer accuracy.
     *
     * TODO: Review what should happen when the multiplicand is extended; currently, we simply ignore
     * the extended portion.
     *
     * @this {Int36}
     * @param {number} value
     */
    mulExtended(value)
    {
        let fNeg = false, extended;
        let n1 = this.value, n2 = value;

        this.error = Int36.ERROR.NONE;

        if (n1 > Int36.INT_MASK) {
            n1 = Int36.WORD_LIMIT - n1;
            fNeg = !fNeg;
        }

        if (n2 > Int36.INT_MASK) {
            n2 = Int36.WORD_LIMIT - n2;
            fNeg = !fNeg;
        }

        if (n1 < Int36.HALF_SHIFT && n2 < Int36.HALF_SHIFT) {
            value = n1 * n2;
            extended = 0;
        }
        else {
            let n1d1 = (n1 % Int36.HALF_SHIFT);
            let n1d2 = Math.trunc(n1 / Int36.HALF_SHIFT);
            let n2d1 = (n2 % Int36.HALF_SHIFT);
            let n2d2 = Math.trunc(n2 / Int36.HALF_SHIFT);

            let m1d1 = n1d1 * n2d1;
            let m1d2 = (n1d2 * n2d1) + Math.trunc(m1d1 / Int36.HALF_SHIFT);
            extended = Math.trunc(m1d2 / Int36.HALF_SHIFT);
            m1d2 = (m1d2 % Int36.HALF_SHIFT) + (n1d1 * n2d2);
            value = (m1d2 * Int36.HALF_SHIFT) + (m1d1 % Int36.HALF_SHIFT);
            extended += Math.trunc(m1d2 / Int36.HALF_SHIFT) + (n1d2 * n2d2);
        }

        this.value = this.truncate(value);
        this.extended = this.truncate(extended);
        this.magnitude = 71;

        if (fNeg) this.negate();

        this.setMagnitude(70);
    }

    /**
     * div(i36)
     *
     * @this {Int36}
     * @param {Int36} i36
     */
    div(i36)
    {
        this.divExtended(i36.value);
    }

    /**
     * divNum(num)
     *
     * @this {Int36}
     * @param {number} num
     */
    divNum(num)
    {
        this.divExtended(Int36.validate(num));
    }

    /**
     * divExtended(divisor)
     *
     * We disallow a divisor of zero; however, we no longer disallow a divisor smaller than the
     * extended portion of the dividend, even though such a divisor would produce a quotient larger
     * than 36 bits.  Instead, we support extended quotients, because some of our internal functions
     * (eg, toDecimal()) require it.
     *
     * For callers that can only handle 36-bit quotients, they can either perform their own preliminary
     * check of the divisor against any extended dividend, or they can simply allow all divisions to
     * proceed, check for an extended quotient afterward, and report the appropriate error.
     *
     * @this {Int36}
     * @param {number} divisor
     */
    divExtended(divisor)
    {
        this.error = Int36.ERROR.NONE;

        if (!divisor) {
            this.error |= Int36.ERROR.DIVZERO;
            return;
        }

        let fNegQ = false, fNegR = false;

        if (divisor > Int36.INT_MASK) {
            divisor = Int36.WORD_LIMIT - divisor;
            fNegQ = !fNegQ;
        }

        if (this.isNeg()) {
            this.negate();
            fNegR = true; fNegQ = !fNegQ;
        }

        this.extend();

        this.setMagnitude(71);

        /*
         * Initialize the four double-length 72-bit values we need for the division process.
         *
         * The process involves shifting the divisor left 1 bit (ie, doubling it) until it equals
         * or exceeds the dividend, and then repeatedly subtracting the divisor from the dividend and
         * shifting the divisor right 1 bit until the divisor is "exhausted" (no bits left), with an
         * "early out" if the dividend gets "exhausted" first.
         *
         * Note that each element of these double arrays is a 36-bit value, so it's rarely a good idea
         * to use bitwise operators on them, because those would operate on only the low 32 bits.
         * Stick with the double worker functions I've created, and trust your JavaScript engine to
         * inline/optimize the code.
         *
         * TODO: Profile this code to determine if individual variables (eg, dResLo and dResHi)
         * instead of 2-element arrays is faster and/or less impactful on garbage collection.  I prefer
         * both the simplified syntax of arrays as well as their extensibility if we ever want/need
         * to go beyond 72 bits.
         */
        let dRes = [0, 0];
        let dPow = [1, 0];
        let dDiv = [divisor, 0];
        let dRem = [this.value, this.extended];

        while (Int36.cmpD(dRem, dDiv) > 0) {
            Int36.addD(dDiv, dDiv);
            Int36.addD(dPow, dPow);
        }
        do {
            if (Int36.cmpD(dRem, dDiv) >= 0) {
                Int36.subD(dRem, dDiv);
                Int36.addD(dRes, dPow);
                if (Int36.zeroD(dRem)) break;
            }
            Int36.shrD(dDiv);
            Int36.shrD(dPow);
        } while (!Int36.zeroD(dPow));

        /*
         * Since divisors are limited to 36-bit values, something's wrong if we have an extended remainder.
         */
        this.assert(!dRem[1], "extended remainder");

        this.value = dRes[0];
        this.extended = dRes[1];
        this.remainder = dRem[0];

        if (fNegQ) this.negate();

        this.reduce();

        if (fNegR && this.remainder) {
            this.remainder = Int36.WORD_LIMIT - this.remainder;
        }
    }

    /**
     * ash(i36)
     *
     * @this {Int36}
     * @param {Int36} i36 (18-bit value representing the number of bits to arithmetically shift left (> 0) or right (< 0))
     */
    ash(i36)
    {
        this.ashNum(i36.value);
    }

    /**
     * ashNum(num)
     *
     * @this {Int36}
     * @param {number} num (18-bit value representing the number of bits to arithmetically shift left (> 0) or right (< 0))
     */
    ashNum(num)
    {
        num = Int36.validate(num);
        this.error = Int36.ERROR.NONE;

        /*
         * Convert the unsigned 18-bit value in regEA to a signed 8-bit value (+/-255).
         */
        let s = ((num << 14) >> 14) % 256;

        if (this.extended == null) {
            if (s) {
                /*
                 * Simulate opASH()
                 */
                let w = this.value, bitsShifted;
                /*
                 * Convert the unsigned word (w) to a signed value (i), for convenience.
                 */
                let i = w > Int36.INT_MASK? -(Int36.WORD_LIMIT - w) : w;
                if (s > 0) {
                    if (s >= 35) {
                        i = (i < 0? Int36.INT_LIMIT : 0);
                        bitsShifted = Int36.INT_MASK;
                    } else {
                        i = (i * Math.pow(2, s)) % Int36.INT_LIMIT;
                        /*
                         * bitsShifted must be set to the mask of all magnitude bits shifted out of
                         * the original word.  Using 8-bit signed words as an example, this table shows
                         * the bitsShifted values that would correspond to shifting 1-7 bits left:
                         *
                         *    shifts    bitsShifted     value       calculation
                         *    ------    -----------     ------      -----------
                         *      1       0b01000000      128-64      128-Math.pow(2, 7-1)
                         *      2       0b01100000      128-32      128-Math.pow(2, 7-2)
                         *      3       0b01110000      128-16      128-Math.pow(2, 7-3)
                         *     ...
                         *      7       0b01111111      128-1       128-Math.pow(2, 7-7)
                         */
                        bitsShifted = Int36.INT_LIMIT - Math.pow(2, 35 - s);
                    }
                    if (w <= Int36.INT_MASK) {
                        /*
                         * Since w was positive, overflow occurs ONLY if any of the bits we shifted out were 1s.
                         * If all those bits in the original value (w) were 0s, then adding bitsShifted to it could NOT
                         * produce a value > INT_MASK.
                         */
                        if (w + bitsShifted > Int36.INT_MASK) this.error |= Int36.ERROR.OVERFLOW;
                    } else {
                        /*
                         * Since w was negative, overflow occurs ONLY if any of the bits we shifted out were 0s.
                         * If all those bits in the original value (w) were 1s, subtracting bitsShifted from it could NOT
                         * produce a value <= INT_MASK.
                         */
                        if (w - bitsShifted <= Int36.INT_MASK) this.error |= Int36.ERROR.OVERFLOW;
                    }
                } else {
                    if (s <= -35) {
                        i = (i < 0? -1 : 0);
                    } else {
                        i = Math.trunc(i / Math.pow(2, -s));
                    }
                }
                w = (i < 0? i + Int36.WORD_LIMIT : i);
                this.value = w;
            }
        }
        else {
            if (s) {
                /*
                 * Simulate opASHC()
                 *
                 * TODO: Note that we force the result to be treated as a 70-bit result (we set magnitude to 70 at the end);
                 * however, what should happen if the incoming value wasn't a proper 70-bit value (ie, if the signs of value
                 * and extended didn't match)?
                 */
                let bits;
                let wRight = this.value;
                let wLeft = this.extended;
                if (s > 0) {
                    /*
                     * Handle all the left shift cases below, which don't need to worry about sign-extension
                     * but DO need to worry about overflow.
                     */
                    let wLeftOrig = wLeft;
                    if (s >= 36) {
                        /*
                         * Since all wLeft bits are being shifted out, any positive value other than zero OR any negative value
                         * other than WORD_MASK indicates an overflow.
                         */
                        if (wLeft > 0 && wLeft < Int36.INT_LIMIT || wLeft > Int36.INT_MASK && wLeft < Int36.WORD_MASK) {
                            this.error |= Int36.ERROR.OVERFLOW;
                        }
                        if (s >= 71) {
                            /*
                             * Since all wRight bits are being shifted out, any positive value other than zero OR any negative value
                             * other than WORD_MASK indicates an overflow.
                             */
                            if (wRight > 0 && wRight < Int36.INT_LIMIT || wRight > Int36.INT_MASK && wRight < Int36.WORD_MASK) {
                                this.error |= Int36.ERROR.OVERFLOW;
                            }
                            wLeft = 0;
                        } else {
                            /*
                             * Left shift 36-70 bits.
                             */
                            wLeft = (wRight * Math.pow(2, s - 35)) % Int36.INT_LIMIT;
                            bits = Int36.INT_LIMIT - Math.pow(2, 70 - s);
                            if (wLeftOrig <= Int36.INT_MASK) {
                                /*
                                 * Since wLeft was positive, overflow occurs ONLY if any of the bits we shifted out were 1s.
                                 * If all those bits in the original value were 0s, then adding bits to it could NOT produce
                                 * a value > INT_MASK.
                                 */
                                if (wRight + bits > Int36.INT_MASK) this.error |= Int36.ERROR.OVERFLOW;
                            } else {
                                /*
                                 * Since wLeft was negative, overflow occurs ONLY if any of the bits we shifted out were 0s.
                                 * If all those bits in the original value were 1s, subtracting bits from it could NOT produce
                                 * a value <= INT_MASK.
                                 */
                                if (wRight - bits <= Int36.INT_MASK) this.error |= Int36.ERROR.OVERFLOW;
                            }
                        }
                        wRight = 0;
                        if (wLeftOrig > Int36.INT_MASK) {
                            wLeft += Int36.INT_LIMIT;
                            wRight += Int36.INT_LIMIT;
                        }
                    } else {
                        /*
                         * Left shift 1-35 bits.
                         */
                        wLeft = ((wLeft * Math.pow(2, s)) % Int36.INT_LIMIT) + Math.trunc((wRight % Int36.INT_LIMIT) / Math.pow(2, 35 - s));
                        wRight = (wRight * Math.pow(2, s)) % Int36.INT_LIMIT;
                        /*
                         * Determine overflow and update the sign bits.
                         */
                        bits = Int36.INT_LIMIT - Math.pow(2, 35 - s);
                        if (wLeftOrig <= Int36.INT_MASK) {
                            /*
                             * Since wLeft was positive, overflow occurs ONLY if any of the bits we shifted out were 1s.
                             * If all those bits in the original value were 0s, then adding bits to it could NOT produce
                             * a value > INT_MASK.
                             */
                            if (wLeftOrig + bits > Int36.INT_MASK) this.error |= Int36.ERROR.OVERFLOW;
                        } else {
                            /*
                             * Since wLeft was negative, overflow occurs ONLY if any of the bits we shifted out were 0s.
                             * If all those bits in the original value were 1s, subtracting bits from it could NOT produce
                             * a value <= INT_MASK.
                             */
                            if (wLeftOrig - bits <= Int36.INT_MASK) this.error |= Int36.ERROR.OVERFLOW;
                            /*
                             * Last but not least, update the sign bits of wLeft and wRight to indicate negative values.
                             */
                            wLeft += Int36.INT_LIMIT;
                            wRight += Int36.INT_LIMIT;
                        }
                    }
                } else {
                    /*
                     * Handle all the right shift cases below, which don't need to worry about overflow but DO
                     * need to worry about sign-extension.
                     */
                    if (s <= -36) {
                        if (s <= -72) {
                            wRight = (wLeft > Int36.INT_MASK? Int36.WORD_MASK : 0);
                        } else {
                            wRight = Math.trunc((wLeft % Int36.INT_LIMIT) / Math.pow(2, -s - 35));
                        }
                        if (wLeft <= Int36.INT_MASK) {
                            wLeft = 0;
                        } else {
                            wLeft = Int36.WORD_MASK;
                            wRight += Int36.INT_LIMIT;
                        }
                    } else {
                        /*
                         * For this right shift of 1-35 bits, determine the value of bits shifted in from the left.
                         */
                        bits = (wLeft > Int36.INT_MASK? Int36.WORD_LIMIT - Math.pow(2, 36 + s) : 0);
                        /*
                         * The bits that we add to wRight from wLeft must be shifted right one additional bit, because
                         * they must "skip over" the sign bit of wRight.  This means we must zero the sign bit of wRight,
                         * which can be done by performing a "mod" with INT_LIMIT.
                         */
                        wRight = Math.trunc((wRight % Int36.INT_LIMIT) / Math.pow(2, -s)) + (((wLeft % Int36.INT_LIMIT) * Math.pow(2, 35 + s)) % Int36.INT_LIMIT);
                        wLeft = Math.trunc(wLeft / Math.pow(2, -s)) + bits;
                        /*
                         * Last but not least, we must set the sign of wRight to the sign of wLeft.
                         */
                        if (wLeft > Int36.INT_MASK) wRight += Int36.INT_LIMIT;
                    }
                }
                this.value = wRight;
                this.extended = wLeft;
            }
            /*
             * We allow ashNum(0) as a way of marking an extended Int36 as a 70-bit value.
             */
            this.magnitude = 70;
        }
    }

    /**
     * lsh(i36)
     *
     * @this {Int36}
     * @param {Int36} i36 (18-bit value representing the number of bits to logically shift left (> 0) or right (< 0))
     */
    lsh(i36)
    {
        this.lshNum(i36.value);
    }

    /**
     * lshNum(num)
     *
     * @this {Int36}
     * @param {number} num (18-bit value representing the number of bits to logically shift left (> 0) or right (< 0))
     */
    lshNum(num)
    {
        num = Int36.validate(num);
        this.error = Int36.ERROR.NONE;

        /*
         * Convert the unsigned 18-bit value in regEA to a signed 8-bit value (+/-255).
         */
        let s = ((num << 14) >> 14) % 256;

        if (this.extended == null) {
            if (s) {
                let w = this.value;
                if (s > 0) {
                    if (s >= 36) {
                        w = 0;
                    } else {
                        w = (w * Math.pow(2, s)) % Int36.WORD_LIMIT;
                    }
                } else {
                    if (s <= -36) {
                        w = 0;
                    } else {
                        w = Math.trunc(w / Math.pow(2, -s));
                    }
                }
                this.value = w;
            }
        } else {
            if (s) {
                let wRight = this.value;
                let wLeft = this.extended;
                if (s > 0) {
                    if (s >= 36) {
                        wRight = 0;
                        if (s >= 72) {
                            wLeft = 0;
                        } else {
                            wLeft = (wRight * Math.pow(2, s - 36)) % Int36.WORD_LIMIT;
                        }
                    } else {
                        wLeft = ((wLeft * Math.pow(2, s)) % Int36.WORD_LIMIT) + Math.trunc(wRight / Math.pow(2, 36 - s));
                        wRight = (wRight * Math.pow(2, s)) % Int36.WORD_LIMIT;
                    }
                } else {
                    if (s <= -36) {
                        wLeft = 0;
                        if (s <= -72) {
                            wRight = 0;
                        } else {
                            wRight = Math.trunc(wLeft / Math.pow(2, -s - 36));
                        }
                    } else {
                        wRight = Math.trunc(wRight / Math.pow(2, -s)) + ((wLeft * Math.pow(2, 36 + s)) % Int36.WORD_LIMIT);
                        wLeft = Math.trunc(wLeft / Math.pow(2, -s));
                    }
                }
                this.value = wRight;
                this.extended = wLeft;
            }
            /*
             * We allow lshNum(0) as a way of marking an extended Int36 as a 71-bit value.
             *
             * TODO: Perhaps we should support magnitude 72 as way of indicating that the value should be treated as an
             * unsigned 72-bit value?
             */
            this.magnitude = 71;
        }
    }

    /**
     * rot(i36)
     *
     * @this {Int36}
     * @param {Int36} i36 (18-bit value representing the number of bits to logically rotate left (> 0) or right (< 0))
     */
    rot(i36)
    {
        this.rotNum(i36.value);
    }

    /**
     * rotNum(num)
     *
     * @this {Int36}
     * @param {number} num (18-bit value representing the number of bits to logically rotate left (> 0) or right (< 0))
     */
    rotNum(num)
    {
        let s;
        num = Int36.validate(num);
        this.error = Int36.ERROR.NONE;

        if (this.extended == null) {
            /*
             * Convert the unsigned 18-bit value in regEA to a signed 8-bit value, modulo 36 (+/-35).
             */
            s = ((num << 14) >> 14) % 36;
            if (s) {
                let w = this.value;
                /*
                 * Note that a right rotation (s < 0) of s bits is equivalent to a left rotation (s > 0) of 36 + s bits.
                 */
                if (s < 0) s = 36 + s;
                w = ((w * Math.pow(2, s)) % Int36.WORD_LIMIT) + Math.trunc(w / Math.pow(2, 36 - s));
                this.value = w;
            }
        }
        else {
            /*
             * Convert the unsigned 18-bit value in regEA to a signed 8-bit value, modulo 72 (+/-71).
             */
            s = ((num << 14) >> 14) % 72;
            if (s) {
                let wRight = this.value;
                let wLeft = this.extended;
                let wLeftOrig = wLeft;
                /*
                 * Note that a right rotation (s < 0) of s bits is equivalent to a left rotation (s > 0) of 72 + s bits.
                 */
                if (s < 0) s = 72 + s;
                if (s < 36) {
                    wLeft = ((wLeft * Math.pow(2, s)) % Int36.WORD_LIMIT) + Math.trunc(wRight / Math.pow(2, 36 - s));
                    wRight = ((wRight * Math.pow(2, s)) % Int36.WORD_LIMIT) + Math.trunc(wLeftOrig / Math.pow(2, 36 - s));
                } else {
                    wLeft = ((wRight * Math.pow(2, s - 36)) % Int36.WORD_LIMIT) + Math.trunc(wLeft / Math.pow(2, 72 - s));
                    wRight = ((wLeftOrig * Math.pow(2, s - 36)) % Int36.WORD_LIMIT) + Math.trunc(wRight / Math.pow(2, 72 - s));
                }
                this.value = wRight;
                this.extended = wLeft;
            }
            /*
             * We allow rotNum(0) as a way of marking an extended Int36 as a 71-bit value.
             *
             * TODO: Perhaps we should support magnitude 72 as way of indicating that the value should be treated as an
             * unsigned 72-bit value?
             */
            this.magnitude = 71;
        }
    }

    /**
     * extend()
     *
     * Sets extended to match the sign of value (if not already set).
     *
     * @this {Int36}
     */
    extend()
    {
        if (this.extended == null) {
            this.extended = (this.value > Int36.INT_MASK? Int36.WORD_MASK : 0);
        }
    }

    /**
     * reduce()
     *
     * Unsets extended if it's superfluous; opposite of extend().
     *
     * @this {Int36}
     */
    reduce()
    {
        if (this.extended == 0 && this.value <= Int36.INT_MASK || this.extended == Int36.WORD_MASK && this.value > Int36.INT_MASK) {
            this.extended = null;
            this.magnitude = 35;
        }
    }

    /**
     * isNeg()
     *
     * @this {Int36}
     * @returns {boolean}
     */
    isNeg()
    {
        return (this.extended > Int36.INT_MASK || this.extended == null && this.value > Int36.INT_MASK);
    }

    /**
     * negate()
     *
     * negate() MUST automatically extend the value, because the two's complement of the most negative
     * number (INT_LIMIT) still has its sign bit set, so we must rely on the sign of the extended value to
     * compensate.
     *
     * This is handled below by setting extended first, based on the opposite of the value's current sign;
     * we could negate extended AFTER negating value, but then we'd need a special test for the INT_LIMIT value.
     *
     * A side-effect of this call is that the magnitude is forced to 71, on the presumption that we're about
     * to perform an arithmetic operation that is more easily performed on a unified 71-bit value than two
     * independently signed 35-bit values.
     *
     * @this {Int36}
     */
    negate()
    {
        if (this.extended == null) {
            /*
             * Set extended to the OPPOSITE of the current value.
             */
            this.assert(this.magnitude == 35);
            this.extended = (this.value > Int36.INT_MASK? 0 : Int36.WORD_MASK);
            this.magnitude = 71;
        }
        else {
            this.setMagnitude(71);
            if (this.value) {
                /*
                 * Perform one's complement on the extended value.
                 */
                this.extended = Int36.WORD_MASK - this.extended;
            }
            else {
                /*
                 * Perform two's complement on the extended value.
                 */
                if (this.extended) this.extended = Int36.WORD_LIMIT - this.extended;
            }
        }
        /*
         * Perform two's complement on the value.
         */
        if (this.value) {
            this.value = Int36.WORD_LIMIT - this.value;
        }
    }

    /**
     * setMagnitude(n)
     *
     * NOTE: This handles only two specific magnitude conversions: 71 to 70, and 70 to 71.  Conversions to/from 35-bit
     * values are generally handled inline.
     *
     * @this {Int36}
     * @param {number} n
     */
    setMagnitude(n)
    {
        if (this.extended != null) {

            let sign = this.extended - (this.extended % Int36.INT_LIMIT);

            if (this.magnitude == 70 && n == 71) {
                /*
                 * Let's assert that the sign bits of both halves match.
                 */
                this.assert(Math.trunc(this.value / Int36.INT_LIMIT) == Math.trunc(this.extended / Int36.INT_LIMIT), "sign mismatch");
                /*
                 * Compute value without the sign bit and add the low bit of extended in its place.
                 */
                this.value = (this.value % Int36.INT_LIMIT) + ((this.extended * Int36.INT_LIMIT) % Int36.WORD_LIMIT);
                this.extended = sign + Math.trunc(this.extended / 2);
                this.magnitude = 71;
            }
            else if (this.magnitude == 71 && n == 70) {
                /*
                 * Reducing the magnitude requires shifting extended left one bit so that we can move
                 * the high bit of value into the low bit of extended, and then set the sign bit of value
                 * to match the sign bit of extended.
                 */
                this.extended = ((this.extended * 2) % Int36.WORD_LIMIT) + Math.trunc(this.value / Int36.INT_LIMIT);
                this.value = sign + (this.value % Int36.INT_LIMIT);
                let signNew = this.extended - (this.extended % Int36.INT_LIMIT);
                if (sign != signNew) {
                    this.extended = sign + (this.extended - signNew);
                    this.error |= Int36.ERROR.OVERFLOW;
                }
                this.magnitude = 70;
            }
        }
    }

    /**
     * readBits(off, len)
     *
     * @param {number} off (the bit position of the right-most bit of the result, using modern bit numbering)
     * @param {number} len
     * @returns {number}
     */
    readBits(off, len)
    {
        let w = this.value;
        if (off + len <= 32) {
            w = (w >> off) & ((1 << len) - 1);
        } else {
            w = Math.trunc(w / Math.pow(2, off)) % Math.pow(2, len);
        }
        return w;
    }

    /**
     * writeBits(bits, off, len)
     *
     * @param {number} bits (only the right-most len of bits are used, so it doesn't need to be pre-masked)
     * @param {number} off (the bit position of the right-most bit of the result, using modern bit numbering)
     * @param {number} len
     */
    writeBits(bits, off, len)
    {
        let w = this.value;
        let shift = Math.pow(2, off);
        bits %= Math.pow(2, len);
        let v = (w % Math.pow(2, off + len));
        w = (w - v) + (bits * shift) + (v % shift);
        this.value = w;
    }

    /**
     * assert(fCondition, sMessage)
     *
     * @param {boolean} fCondition
     * @param {string} [sMessage]
     */
    assert(fCondition, sMessage)
    {
        if (DEBUG) {
            if (!fCondition) {
                try {
                    throw(new Error(sMessage || "assertion failure"));
                }
                catch(err) {
                    console.log(err.message);
                    if (err.stack) console.log(err.stack);
                }
            }
        }
    }

    /**
     * addD(dDst, dSrc)
     *
     * Adds dSrc to dDst.
     *
     * @param {Array.<number>} dDst
     * @param {Array.<number>} dSrc
     */
    static addD(dDst, dSrc)
    {
        dDst[0] += dSrc[0];
        dDst[1] += dSrc[1];
        if (dDst[0] >= Int36.WORD_LIMIT) {
            dDst[0] %= Int36.WORD_LIMIT;
            dDst[1]++;
        }
    }

    /**
     * cmpD(dDst, dSrc)
     *
     * Compares dDst to dSrc, by computing dDst - dSrc.
     *
     * @param {Array.<number>} dDst
     * @param {Array.<number>} dSrc
     * @returns {number} > 0 if dDst > dSrc, == 0 if dDst == dSrc, < 0 if dDst < dSrc
     */
    static cmpD(dDst, dSrc)
    {
        let result = dDst[1] - dSrc[1];
        if (!result) result = dDst[0] - dSrc[0];
        return result;
    }

    /**
     * shrD(dDst)
     *
     * Shifts dDst right one bit.
     *
     * @param {Array.<number>} dDst
     */
    static shrD(dDst)
    {
        if (dDst[1] % 2) {
            dDst[0] += Int36.WORD_LIMIT;
        }
        dDst[0] = Math.trunc(dDst[0] / 2);
        dDst[1] = Math.trunc(dDst[1] / 2);
    }

    /**
     * subD(dDst, dSrc)
     *
     * Subtracts dSrc from dDst.
     *
     * @param {Array.<number>} dDst
     * @param {Array.<number>} dSrc
     */
    static subD(dDst, dSrc)
    {
        dDst[0] -= dSrc[0];
        dDst[1] -= dSrc[1];
        if (dDst[0] < 0) {
            dDst[0] += Int36.WORD_LIMIT;
            dDst[1]--;
        }
    }

    /**
     * zeroD(d)
     *
     * True if bits are all zero, false otherwise.
     *
     * @param {Array.<number>} d
     */
    static zeroD(d)
    {
        return !d[0] && !d[1];
    }

    /**
     * octal(value)
     *
     * @param {number} value
     * @returns {string}
     */
    static octal(value)
    {
        if (value < 0) {
            value += Int36.WORD_LIMIT;
        }
        let s = value.toString(8);
        if (value >= 0 && !Math.trunc(value / Int36.WORD_LIMIT)) {
            s = "0o" + ("000000000000" + s).slice(-12);
        }
        return s;
    }

    /**
     * validate(num, bits)
     *
     * This ensures that any incoming (external) 36-bit values conform to our internal requirements.
     *
     * @param {number} num
     * @param {number} [bits] (an alternative number of bits to restrict the value to)
     * @returns {number}
     */
    static validate(num, bits = 36)
    {
        /*
         * Although it's expected that most callers will supply unsigned 36-bit values, we're nice about
         * converting any signed values to their unsigned (two's complement) counterpart, provided they are
         * within the acceptable range.  Any values outside that range will be dealt with afterward.
         */
        if (num < 0 && num >= -Int36.INT_LIMIT) {
            num += Int36.WORD_LIMIT;
        }
        let value = Math.trunc(Math.abs(num)) % Math.pow(2, bits);
        if (DEBUG && num !== value) {
            console.log("Int36.validate(" + Int36.octal(num) + "): out of range, truncated to " + Int36.octal(value));
        }
        return value;
    }
}

Int36.ERROR = {
    NONE:       0x0,
    OVERFLOW:   0x1,
    UNDERFLOW:  0x2,
    DIVZERO:    0x4
};

Int36.HINT_MASK  = Math.pow(2, 17) - 1; //         131,071          (377777): signed half-word (half-int) mask
Int36.HINT_LIMIT = Math.pow(2, 17);     //         131,072          (400000): signed half-word (half-int) limit
Int36.HALF_MASK  = Math.pow(2, 18) - 1; //         262,143   (000000 777777): unsigned half-word mask
Int36.HALF_SHIFT = Math.pow(2, 18);     //         262,144   (000001 000000): unsigned half-word shift
Int36.INT_MASK   = Math.pow(2, 35) - 1; //  34,359,738,367   (377777 777777): signed word (magnitude) mask
Int36.INT_LIMIT  = Math.pow(2, 35);     //  34,359,738,368   (400000 000000): signed word (magnitude) limit
Int36.WORD_MASK  = Math.pow(2, 36) - 1; //  68,719,476,735   (777777 777777): unsigned word mask
Int36.WORD_LIMIT = Math.pow(2, 36);     //  68,719,476,736 (1 000000 000000): unsigned word limit
