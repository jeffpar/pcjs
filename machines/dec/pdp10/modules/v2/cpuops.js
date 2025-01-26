/**
 * @fileoverview Implements PDP-10 opcode handlers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Component from "../../../../modules/v2/component.js";
import StrLib from "../../../../modules/v2/strlib.js";
import { PDP10, SIMH } from "./defines.js";

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
 * opKA10(op)
 *
 * Originally, we received the full opcode (36 bits), then only the upper half-word (18 bits),
 * and now we receive only the upper 13 bits.  However, the octal values shown in the table and
 * function comments below still include all 18 bits of the original upper half-word, so that
 * you don't have to mentally un-shift them 5 bits.
 *
 * @this {CPUStatePDP10}
 * @param {number} op (the top 13 bits of the original opcode, shifted right to bit 0)
 */
PDP10.opKA10 = function(op)
{
    /*
     * We shift op right 4 more bits, leaving only the 9 bits required for the table index.  Those
     * 4 bits are normally an accumulator index, which we also mask and pass along, since most instructions
     * will use an accumulator, and those that don't simply ignore it.
     */
    PDP10.aOpXXX_KA10[op >> 4].call(this, op, op & PDP10.OPCODE.A_MASK);
};

/**
 * opUUO(0o0NN000): Unimplemented User Operation
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-64:
 *
 *      Store the instruction code, A and the effective address E in bits 0-8, 9-12 and 18-35 respectively of
 *      location 40; clear bits 13-17.  Execute the instruction contained in location 41.  The original contents
 *      of location 40 are lost.
 *
 *      All of these codes are equivalent when they occur in the Monitor or when time sharing is not in effect.
 *      But when a UUO appears in a user program, a code in the range 001-037 uses relocated locations 40 and 41
 *      (ie 40 and 41 in the user's block) and is thus entirely a part of and under control of the user program.
 *
 *      A code in the range 040-077 on the other hand uses unrelocated 40 and 41, and the instruction in the latter
 *      location is under control of the Monitor; these codes are thus specifically for user communication with
 *      the Monitor, which interprets them (refer to the Monitor manual for the meanings of the various codes).
 *
 *      The code 000 executes in the same way as 040-077 but is not a standard communication code: it is included
 *      so that control returns to the Monitor should a user program wipe itself out.
 *
 *      For a second processor connected to the same memory, the UUO trap is locations 140-141 instead of 40-41.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opUUO = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opUFA(0o130000): Unnormalized Floating Add
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-37:
 *
 *      Floating add the contents of location E to AC.  If the double length fraction in the sum is zero, clear
 *      accumulator A+1.  Otherwise normalize the sum only if the magnitude of its fractional part is >= 1, and place
 *      the high order part of the result in AC A+1.  The original contents of AC and E are unaffected.
 *
 *      NOTE: The result is placed in accumulator A+1. T his is the only arithmetic instruction that stores the result
 *      in a second accumulator, leaving the original operands intact.
 *
 *      If the exponent of the sum following the one-step normalization is > 127, set Overflow and Floating Overflow;
 *      the result stored has an exponent 256 less than the correct one.
 *
 *      SIDEBAR: The exponent of the sum is equal to that of the larger summand unless addition of the fractions
 *      overflows, in which case it is greater by 1.  Exponent overflow can occur only in the latter case.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opUFA = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opDFN(0o131000): Double Floating Negate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-37:
 *
 *      Negate the double length floating point number composed of the contents of AC and location E with AC on the left.
 *      Do this by taking the twos complement of the number whose sign is AC bit 0, whose exponent is in AC bits 1-8, and
 *      whose fraction is the 54-bit string in bits 9-35 of AC and location E.  Place the high order word of the result
 *      in AC; place the low order part of the fraction in bits 9-35 of location E without altering the original contents
 *      of bits 0-8 of that location.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opDFN = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSC(0o132000): Floating Scale
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-34:
 *
 *      If the fractional part of AC is zero, clear AC.  Otherwise add the scale factor given by E to the exponent part
 *      of AC (thus multiplying AC by 2^E), normalize the resulting word bringing 0s into bit positions vacated at the
 *      right, and place the result back in AC.
 *
 *      NOTE: A negative E is represented in standard twos complement notation, but the hardware compensates for this
 *      when scaling the exponent.
 *
 *      If the exponent after normalization is > 127, set Overflow and Floating Overflow; the result stored has an
 *      exponent 256 less than the correct one.  If < -128, set Overflow, Floating Overflow and Floating Underflow;
 *      the result stored has an exponent 256 greater than the correct one.
 *
 *      SIDEBAR: This instruction can be used to float a fixed number with 27 or fewer significant bits.  To float an
 *      integer contained within AC bits 9-35,
 *
 *          FSC AC,233
 *
 *      inserts the correct exponent to move the binary point from the right end to the left of bit 9 and then normalizes
 *      (233 [base 8] = 155 [base 10] = 128 + 27).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSC = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opIBP(0o133000): Increment Byte Pointer
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-16:
 *
 *      Increment the byte pointer in location E as explained [below].  The pointer has the format:
 *
 *                          1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3
 *      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
 *      P P P P P P S S S S S S - I X X X X Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y
 *
 *      where S is the size of the byte as a number of bits, and P is its position as the number of bits
 *      remaining at the right of the byte in the word (eg if P is 3 the rightmost bit of the byte is bit 32
 *      of the word).  The rest of the pointer is interpreted in the same way as in an instruction: I, X and Y
 *      are used to calculate the address of the location that is the source or destination of the byte.
 *
 *      To facilitate processing a series of bytes, several of the byte instructions increment the
 *      pointer, ie, modify it so that it points to the next byte position in a set of memory locations.
 *      Bytes are processed from left to right in a word, so incrementing merely replaces the current value
 *      of P by P - S, unless there is insufficient space in the present location for another byte of the
 *      specified size (P - S < 0).  In this case Y is increased by one to point to the next consecutive
 *      location, and P is set to 36 - S to point to the first byte at the left in the new location.
 *
 *      CAUTION: Do not allow Y to reach maximum value.  The whole pointer is incremented, so if Y is 2^18 - 1
 *      it becomes zero and X is also incremented.  The address calculation for the pointer uses the original X,
 *      but if a priority interrupt should occur before the calculation is complete, the incremented X is used
 *      when the instruction is repeated.
 *
 *      SPECIAL CONSIDERATIONS: If S is greater than P and also greater than 36, incrementing produces a new
 *      P equal to 100 - S rather than 36 - S.  For S > 36 the byte is at most the entire word; for P >= 36 no
 *      byte is processed (loading merely clears AC).  If both P and S are less than 36 but P + S > 36,
 *      a byte of size 36 - P is loaded from position P, or the right 36 - P bits of the byte are deposited
 *      in position P.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIBP = function(op, ac)
{
    var inc = 0;
    var w = this.readWord(this.regEA);
    var p = (w / PDP10.OPCODE.P_SCALE) & PDP10.OPCODE.P_MASK;
    var s = (w >> PDP10.OPCODE.S_SHIFT) & PDP10.OPCODE.S_MASK;
    p -= s;
    if (p < 0) {
        inc++;
        p = 36 - s;
        if (p < 0) p = 100 - s; // see SPECIAL CONSIDERATIONS and NOTE above
    }
    /*
     * Since the documentation above makes clear that the effect of the increment (of w) extends past the Y
     * bits and into (at least) the X bits, we first re-assemble a new pointer with updated P bits (along with
     * the original S bits and the remaining bits covered by PTR_MASK) and then increment as needed.
     *
     * Yes, PTR_MASK could have included the S bits as well and made the following expression a TINY bit simpler,
     * but I would like to keep PTR_MASK distinct from both the P and S fields.
     */
    w = (p * PDP10.OPCODE.P_SCALE) + (s << PDP10.OPCODE.S_SHIFT) + (w & PDP10.OPCODE.PTR_MASK);
    if (inc) w = (w + inc) % PDP10.WORD_LIMIT;
    this.writeWord(this.regEA, w);
};

/**
 * opILDB(0o134000): Increment Pointer and Load Byte
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-16:
 *
 *      Increment the byte pointer in location E as explained above. Then retrieve a byte of S bits from the
 *      location and position specified by the newly incremented pointer, load it into the right end of AC,
 *      and clear the remaining AC bits.  The location containing the byte is unaffected, the original contents
 *      of AC are lost.
 *
 *      SPECIAL CONSIDERATIONS: If S is greater than P and also greater than 36, incrementing produces a new
 *      P equal to 100 - S rather than 36 - S.  For S > 36 the byte is at most the entire word; for P >= 36 no
 *      byte is processed (loading merely clears AC).  If both P and S are less than 36 but P + S > 36,
 *      a byte of size 36 - P is loaded from position P, or the right 36 - P bits of the byte are deposited
 *      in position P.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opILDB = function(op, ac)
{
    /*
     * We're called in two phases: phase 1 is with regEA containing the address of the pointer, and phase 2
     * is with regEA containing the address of the bits to be loaded.
     *
     * We can implement this as a simple combination of opIBP() and opLDB(), but taking care that we only call
     * opIBP() on phase 1 (and only if the BIS flag is not set).
     */
    if (!(this.regPS & PDP10.PSFLAG.BIS)) {
        PDP10.opIBP.call(this, op, ac);
        this.regPS |= PDP10.PSFLAG.BIS;
    }
    PDP10.opLDB.call(this, op, ac);
};

/**
 * opLDB(0o135000): Load Byte
 *z
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-16:
 *
 *      Retrieve a byte of S bits from the location and position specified by the pointer contained in location E,
 *      load it into the right end of AC, and clear the remaining AC bits.  The location containing the byte is
 *      unaffected, the original contents of AC are lost.
 *
 *      SPECIAL CONSIDERATIONS: If S is greater than P and also greater than 36, incrementing produces a new
 *      P equal to 100 - S rather than 36 - S.  For S > 36 the byte is at most the entire word; for P >= 36 no
 *      byte is processed (loading merely clears AC).  If both P and S are less than 36 but P + S > 36,
 *      a byte of size 36 - P is loaded from position P, or the right 36 - P bits of the byte are deposited
 *      in position P.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opLDB = function(op, ac)
{
    /*
     * We're called in two phases: phase 1 is with regEA containing the address of the pointer, and phase 2
     * is with regEA containing the address of the bits to be loaded.
     */
    var w = this.readWord(this.regEA);
    if (this.regBP < 0) {
        this.regBP = w;
        this.regRA = this.regEA | PDP10.OPCODE.I_FIELD;
        return;
    }
    var p = (this.regBP / PDP10.OPCODE.P_SCALE) & PDP10.OPCODE.P_MASK;
    var s = (this.regBP >> PDP10.OPCODE.S_SHIFT) & PDP10.OPCODE.S_MASK;
    if (p + s < 32) {
        /*
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        w = ((w >> p) & ((1 << s) - 1)) >>> 0;
    } else {
        /*
         * Regarding the SPECIAL CONSIDERATIONS above, even if the P ("shift") and/or S ("mask") values are
         * over-large, that should be fine, because nothing but additional zero bits will be included (provided
         * our memory is working properly and didn't give us more than 36 bits of unsigned data).
         */
        w = Math.trunc(w / Math.pow(2, p)) % Math.pow(2, s);
    }
    this.writeWord(ac, w);
    this.regPS &= ~PDP10.PSFLAG.BIS;
    this.regBP = -1;
};

/**
 * opIDPB(0o136000): Increment Pointer and Deposit Byte
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-16:
 *
 *      Increment the byte pointer in location E as explained above.  Then deposit the right S bits of AC into
 *      the location and position specified by the newly incremented pointer.  The original contents of the bits
 *      that receive the byte are lost, AC and the remaining bits of the deposit location are unaffected.
 *
 *      SPECIAL CONSIDERATIONS: If S is greater than P and also greater than 36, incrementing produces a new
 *      P equal to 100 - S rather than 36 - S.  For S > 36 the byte is at most the entire word; for P >= 36 no
 *      byte is processed (loading merely clears AC).  If both P and S are less than 36 but P + S > 36,
 *      a byte of size 36 - P is loaded from position P, or the right 36 - P bits of the byte are deposited
 *      in position P.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIDPB = function(op, ac)
{
    /*
     * We're called in two phases: phase 1 is with regEA containing the address of the pointer, and phase 2
     * is with regEA containing the address of the bits to be stored.
     *
     * We can implement this as a simple combination of opIBP() and opDDB(), but taking care that we only call
     * opIBP() on phase 1 (and only if the BIS flag is not set).
     */
    if (!(this.regPS & PDP10.PSFLAG.BIS)) {
        PDP10.opIBP.call(this, op, ac);
        this.regPS |= PDP10.PSFLAG.BIS;
    }
    PDP10.opDPB.call(this, op, ac);
};

/**
 * opDPB(0o137000): Deposit Byte
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-16:
 *
 *      Deposit the right S bits of AC into the location and position specified by the pointer contained
 *      in location E.  The original contents of the bits that receive the byte are lost, AC and the remaining
 *      bits of the deposit location are unaffected.
 *
 *      SPECIAL CONSIDERATIONS: If S is greater than P and also greater than 36, incrementing produces a new
 *      P equal to 100 - S rather than 36 - S.  For S > 36 the byte is at most the entire word; for P >= 36 no
 *      byte is processed (loading merely clears AC).  If both P and S are less than 36 but P + S > 36,
 *      a byte of size 36 - P is loaded from position P, or the right 36 - P bits of the byte are deposited
 *      in position P.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opDPB = function(op, ac)
{
    /*
     * We're called in two phases: phase 1 is with regEA containing the address of the pointer, and phase 2
     * is with regEA containing the address of the bits to be stored.
     */
    var w = this.readWord(this.regEA);
    if (this.regBP < 0) {
        this.regBP = w;
        this.regRA = this.regEA | PDP10.OPCODE.I_FIELD;
        return;
    }
    var p = (this.regBP / PDP10.OPCODE.P_SCALE) & PDP10.OPCODE.P_MASK;
    var s = (this.regBP >> PDP10.OPCODE.S_SHIFT) & PDP10.OPCODE.S_MASK;
    /*
     * Regarding the SPECIAL CONSIDERATIONS above, even if the P ("shift") and/or S ("mask") values are
     * over-large, we "mask" the resulting byte value (b) to 36 bits, so that when we re-assemble the final
     * result (w), there shouldn't be any overlap or overflow.
     */
    var b = ((this.readWord(ac) % Math.pow(2, s)) * Math.pow(2, p)) % PDP10.WORD_LIMIT;
    w = (w - (w % Math.pow(2, p + s))) + b + (w % Math.pow(2, p));
    this.writeWord(this.regEA, w);
    this.regPS &= ~PDP10.PSFLAG.BIS;
    this.regBP = -1;
};

/**
 * opFAD(0o140000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFAD = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADI(0o141000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADM(0o142000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADB(0o143000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADR(0o144000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADR = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADRI(0o145000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADRI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADRM(0o146000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADRM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFADRB(0o147000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFADRB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSB(0o150000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBI(0o151000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBM(0o152000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBB(0o153000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBR(0o154000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBR = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBRI(0o155000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBRI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBRM(0o156000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBRM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFSBRB(0o157000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFSBRB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMP(0o160000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMP = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPI(0o161000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPM(0o162000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPB(0o163000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPR(0o164000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPR = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPRI(0o165000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPRI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPRM(0o166000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPRM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFMPRB(0o167000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFMPRB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDV(0o170000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDV = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVI(0o171000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVM(0o172000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVB(0o173000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVR(0o174000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVR = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVRI(0o175000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVRI = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVRM(0o176000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVRM = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opFDVRB(0o177000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opFDVRB = function(op, ac)
{
    this.opUndefined(op);
};

/**
 * opMOVE(0o200000): Move
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Move one word from the source to the destination specified by M.  The source is unaffected,
 *      the original contents of the destination are lost.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * Equivalents: opSETM(0o414000) and opSETMB(0o417000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVE = function(op, ac)
{
    this.writeWord(ac, this.readWord(this.regEA));
};

/**
 * opMOVEI(0o201000): Move Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Move one word from the source to the destination specified by M.  The source is unaffected,
 *      the original contents of the destination are lost.
 *
 *      SIDEBAR: MOVEI loads the word 0,E into AC and is thus equivalent to HRRZI.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * Equivalents: opSETMI(0o415000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVEI = function(op, ac)
{
    this.writeWord(ac, this.regEA);
};

/**
 * opMOVEM(0o202000): Move to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Move one word from the source to the destination specified by M.  The source is unaffected,
 *      the original contents of the destination are lost.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [A] and the destination is [E] (opposite of "Basic").
 *
 * Equivalents: opSETAM(0o426000) and opSETAB(0o427000).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVEM = function(op, ac)
{
    this.writeWord(this.regEA, this.readWord(ac));
};

/**
 * opMOVES(0o203000): Move to Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Move one word from the source to the destination specified by M.  The source is unaffected,
 *      the original contents of the destination are lost.
 *
 *      SIDEBAR: If A is zero, MOVES is a no-op; otherwise it is equivalent to MOVE.
 *
 * NOTE: This is a "Self" mode instruction: the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVES = function(op, ac)
{
    if (ac) this.writeWord(ac, this.readWord(this.regEA));
};

/**
 * opMOVS(0o204000): Move Swapped
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Interchange the left and right halves of the word from the source specified by M and move it to the
 *      specified destination.  The source is unaffected, the original contents of the destination are lost.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVS = function(op, ac)
{
    var src = this.readWord(this.regEA);
    src = ((src / PDP10.HALF_SHIFT)|0) + ((src & PDP10.HALF_MASK) * PDP10.HALF_SHIFT);
    this.writeWord(ac, src);
};

/**
 * opMOVSI(0o205000): Move Swapped Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Interchange the left and right halves of the word from the source specified by M and move it to the
 *      specified destination.  The source is unaffected, the original contents of the destination are lost.
 *
 *      SIDEBAR: Swapping halves in immediate mode loads the word E,0 into AC.  MOVSI is thus equivalent to HRLZI.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVSI = function(op, ac)
{
    this.writeWord(ac, this.regEA * PDP10.HALF_SHIFT);
};

/**
 * opMOVSM(0o206000): Move Swapped to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Interchange the left and right halves of the word from the source specified by M and move it to the
 *      specified destination.  The source is unaffected, the original contents of the destination are lost.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [A] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVSM = function(op, ac)
{
    var src = this.readWord(ac);
    src = ((src / PDP10.HALF_SHIFT)|0) + ((src & PDP10.HALF_MASK) * PDP10.HALF_SHIFT);
    this.writeWord(this.regEA, src);
};

/**
 * opMOVSS(0o207000): Move Swapped to Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Interchange the left and right halves of the word from the source specified by M and move it to the
 *      specified destination.  The source is unaffected, the original contents of the destination are lost.
 *
 * NOTE: This is a "Self" mode instruction: the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVSS = function(op, ac)
{
    var src = this.readWord(this.regEA);
    src = ((src / PDP10.HALF_SHIFT)|0) + ((src & PDP10.HALF_MASK) * PDP10.HALF_SHIFT);
    this.writeWord(this.regEA, src);
    if (ac) this.writeWord(ac, src);
};

/**
 * opMOVN(0o210000): Move Negative
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Negate the word from the source specified by M and move it to the specified destination.
 *      If the source word is fixed point -2^35 (400000 000000) set the Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^127 sets the flags, but this is not a normalized
 *      number).
 *
 *      If the source word is zero, set Carry 0 and Carry 1.  The source is unaffected, the original
 *      contents of the destination are lost.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVN = function(op, ac)
{
    this.writeWord(ac, PDP10.doNEG.call(this, this.readWord(this.regEA)));
};

/**
 * opMOVNI(0o211000): Move Negative Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Negate the word from the source specified by M and move it to the specified destination.
 *      If the source word is fixed point -2^35 (400000 000000) set the Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^127 sets the flags, but this is not a normalized
 *      number).
 *
 *      If the source word is zero, set Carry 0 and Carry 1.  The source is unaffected, the original
 *      contents of the destination are lost.
 *
 *      SIDEBAR: MOVNI loads AC with the negative of the word 0,E and can set no flags.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVNI = function(op, ac)
{
    /*
     * We used to perform an in-line two's complement of regEA, since doNEG() updates the flags, and the
     * documentation above claimed that MOVNI must "set no flags."  It's certainly true that regEA, being an
     * 18-bit value, could never be -2^35, but it COULD be zero.  However, SIMH doesn't treat zero any
     * differently for MOVNI, so we currently don't either.
     *
     * TODO: Verify the "set no flags" assertion on *real* (KA10) hardware.
     */
    this.writeWord(ac, PDP10.doNEG.call(this, this.regEA) /* this.regEA? PDP10.TWO_POW36 - this.regEA : 0 */);
};

/**
 * opMOVNM(0o212000): Move Negative to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Negate the word from the source specified by M and move it to the specified destination.
 *      If the source word is fixed point -2^35 (400000 000000) set the Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^127 sets the flags, but this is not a normalized
 *      number).
 *
 *      If the source word is zero, set Carry 0 and Carry 1.  The source is unaffected, the original
 *      contents of the destination are lost.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [A] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVNM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.doNEG.call(this, this.readWord(ac)));
};

/**
 * opMOVNS(0o213000): Move Negative to Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-11:
 *
 *      Negate the word from the source specified by M and move it to the specified destination.
 *      If the source word is fixed point -2^35 (400000 000000) set the Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^127 sets the flags, but this is not a normalized
 *      number).
 *
 *      If the source word is zero, set Carry 0 and Carry 1.  The source is unaffected, the original
 *      contents of the destination are lost.
 *
 * NOTE: This is a "Self" mode instruction: the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVNS = function(op, ac)
{
    var dst = PDP10.doNEG.call(this, this.readWord(this.regEA));
    this.writeWord(this.regEA, dst);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opMOVM(0o214000): Move Magnitude
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-12:
 *
 *      Take the magnitude of the word contained in the source specified by M and move it to the
 *      specified destination.  If the source word is fixed point -2^35 (400000 000000) set the
 *      Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^27 sets the flags, but this is not a normalized
 *      number).
 *
 *      The source is unaffected, the original contents of the destination are lost.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVM = function(op, ac)
{
    this.writeWord(ac, PDP10.doABS.call(this, this.readWord(this.regEA)));
};

/**
 * opMOVMI(0o215000): Move Magnitude Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-12:
 *
 *      Take the magnitude of the word contained in the source specified by M and move it to the
 *      specified destination.  If the source word is fixed point -2^35 (400000 000000) set the
 *      Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^27 sets the flags, but this is not a normalized
 *      number).
 *
 *      The source is unaffected, the original contents of the destination are lost.
 *
 *      SIDEBAR: The word 0,E is equivalent to its magnitude, so MOVMI is equivalent to MOVEI.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVMI = function(op, ac)
{
    this.writeWord(ac, this.regEA);    // src is an 18-bit immediate value, so there's no need to call doABS()
};

/**
 * opMOVMM(0o216000): Move Magnitude to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-12:
 *
 *      Take the magnitude of the word contained in the source specified by M and move it to the
 *      specified destination.  If the source word is fixed point -2^35 (400000 000000) set the
 *      Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^27 sets the flags, but this is not a normalized
 *      number).
 *
 *      The source is unaffected, the original contents of the destination are lost.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [A] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVMM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.doABS.call(this, this.readWord(ac)));
};

/**
 * opMOVMS(0o217000): Move Magnitude to Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-12:
 *
 *      Take the magnitude of the word contained in the source specified by M and move it to the
 *      specified destination.  If the source word is fixed point -2^35 (400000 000000) set the
 *      Overflow and Carry 1 flags.
 *
 *      (Negating the equivalent floating point -1 * 2^27 sets the flags, but this is not a normalized
 *      number).
 *
 *      The source is unaffected, the original contents of the destination are lost.
 *
 * NOTE: This is a "Self" mode instruction: the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMOVMS = function(op, ac)
{
    var dst = PDP10.doABS.call(this, this.readWord(this.regEA));
    this.writeWord(this.regEA, dst);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opIMUL(0o220000): Integer Multiply
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the sign and the 35 low order magnitude bits of the
 *      product in the specified destination.  Set Overflow if the product is >= 2^35 or < -2^35 (ie if the high order
 *      word of the double length product is not null); the high order word is lost.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIMUL = function(op, ac)
{
    this.writeWord(ac, PDP10.doMUL.call(this, this.readWord(ac), this.readWord(this.regEA), true));
};

/**
 * opIMULI(0o221000): Integer Multiply Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the sign and the 35 low order magnitude bits of the
 *      product in the specified destination.  Set Overflow if the product is >= 2^35 or < -2^35 (ie if the high order
 *      word of the double length product is not null); the high order word is lost.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIMULI = function(op, ac)
{
    this.writeWord(ac, PDP10.doMUL.call(this, this.readWord(ac), this.regEA, true));
};

/**
 * opIMULM(0o222000): Integer Multiply to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the sign and the 35 low order magnitude bits of the
 *      product in the specified destination.  Set Overflow if the product is >= 2^35 or < -2^35 (ie if the high order
 *      word of the double length product is not null); the high order word is lost.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [E] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIMULM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.doMUL.call(this, this.readWord(ac), this.readWord(this.regEA), true));
};

/**
 * opIMULB(0o223000): Integer Multiply to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the sign and the 35 low order magnitude bits of the
 *      product in the specified destination.  Set Overflow if the product is >= 2^35 or < -2^35 (ie if the high order
 *      word of the double length product is not null); the high order word is lost.
 *
 * NOTE: This is a "Both" mode instruction: the source is [E] and the destination is [E] and [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIMULB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.doMUL.call(this, this.readWord(ac), this.readWord(this.regEA), true)));
};

/**
 * opMUL(0o224000): Multiply
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the high order word of the double length result
 *      in the specified destination.  If M specifies AC as a destination, place the low order word in accumulator
 *      A+1.  If both operands are -2^35 set Overflow; the double length result stored is -2^70.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A],[A+1] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMUL = function(op, ac)
{
    this.writeWord(ac, PDP10.doMUL.call(this, this.readWord(ac), this.readWord(this.regEA)));
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opMULI(0o225000): Multiply Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the high order word of the double length result
 *      in the specified destination.  If M specifies AC as a destination, place the low order word in accumulator
 *      A+1.  If both operands are -2^35 set Overflow; the double length result stored is -2^70.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A],[A+1].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMULI = function(op, ac)
{
    this.writeWord(ac, PDP10.doMUL.call(this, this.readWord(ac), this.regEA));
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opMULM(0o226000): Multiply to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the high order word of the double length result
 *      in the specified destination.  If M specifies AC as a destination, place the low order word in accumulator
 *      A+1.  If both operands are -2^35 set Overflow; the double length result stored is -2^70.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [E] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMULM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.doMUL.call(this, this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opMULB(0o227000): Multiply to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-28:
 *
 *      Multiply AC by the operand specified by M, and place the high order word of the double length result
 *      in the specified destination.  If M specifies AC as a destination, place the low order word in accumulator
 *      A+1.  If both operands are -2^35 set Overflow; the double length result stored is -2^70.
 *
 * NOTE: This is a "Both" mode instruction: the source is [E] and the destination is [E] and [A],[A+1].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opMULB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.doMUL.call(this, this.readWord(ac), this.readWord(this.regEA))));
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opIDIV(0o230000): Integer Divide
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the operand specified by M is zero, set Overflow and No Divide, and go immediately to the next instruction
 *      without affecting the original AC or memory operand in any way.  Otherwise divide AC by the specified operand,
 *      calculating a quotient of 35 magnitude bits including leading zeros.  Place the unrounded quotient in the
 *      specified destination.  If M specifies AC as the destination, place the remainder, with the same sign as the
 *      dividend, in accumulator A+1.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A],[A+1] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIDIV = function(op, ac)
{
    var dst = PDP10.doDIV.call(this, this.readWord(this.regEA), this.readWord(ac));
    if (dst < 0) return;
    this.writeWord(ac, dst);
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opIDIVI(0o231000): Integer Divide Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the operand specified by M is zero, set Overflow and No Divide, and go immediately to the next instruction
 *      without affecting the original AC or memory operand in any way.  Otherwise divide AC by the specified operand,
 *      calculating a quotient of 35 magnitude bits including leading zeros.  Place the unrounded quotient in the
 *      specified destination.  If M specifies AC as the destination, place the remainder, with the same sign as the
 *      dividend, in accumulator A+1.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A],[A+1].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIDIVI = function(op, ac)
{
    var dst = PDP10.doDIV.call(this, this.regEA, this.readWord(ac));
    if (dst < 0) return;
    this.writeWord(ac, dst);
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opIDIVM(0o232000): Integer Divide to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the operand specified by M is zero, set Overflow and No Divide, and go immediately to the next instruction
 *      without affecting the original AC or memory operand in any way.  Otherwise divide AC by the specified operand,
 *      calculating a quotient of 35 magnitude bits including leading zeros.  Place the unrounded quotient in the
 *      specified destination.  If M specifies AC as the destination, place the remainder, with the same sign as the
 *      dividend, in accumulator A+1.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [E] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIDIVM = function(op, ac)
{
    var dst = PDP10.doDIV.call(this, this.readWord(this.regEA), this.readWord(ac));
    if (dst < 0) return;
    this.writeWord(this.regEA, dst);
};

/**
 * opIDIVB(0o233000): Integer Divide to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the operand specified by M is zero, set Overflow and No Divide, and go immediately to the next instruction
 *      without affecting the original AC or memory operand in any way.  Otherwise divide AC by the specified operand,
 *      calculating a quotient of 35 magnitude bits including leading zeros.  Place the unrounded quotient in the
 *      specified destination.  If M specifies AC as the destination, place the remainder, with the same sign as the
 *      dividend, in accumulator A+1.
 *
 * NOTE: This is a "Both" mode instruction: the source is [E] and the destination is [E] and [A],[A+1].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIDIVB = function(op, ac)
{
    var dst = PDP10.doDIV.call(this, this.readWord(this.regEA), this.readWord(ac));
    if (dst < 0) return;
    this.writeWord(this.regEA, this.writeWord(ac, dst));
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opDIV(0o234000): Divide
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the magnitude of the number in AC is greater than or equal to that of the operand specified by M,
 *      set Overflow and No Divide, and go immediately to the next instruction without affecting the original AC
 *      or memory operand in any way.  Otherwise divide the double length number contained in accumulators A and A+1
 *      by the specified operand, calculating a quotient of 35 magnitude bits including leading zeros.  Place the
 *      unrounded quotient in the specified destination.  If M specifies AC as a destination, place the remainder,
 *      with the same sign as the dividend, in accumulator A+1.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A],[A+1] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opDIV = function(op, ac)
{
    var ext = this.readWord(ac);
    var dst = this.readWord((ac + 1) & 0o17);
    dst = PDP10.doDIV.call(this, this.readWord(this.regEA), dst, ext);
    if (dst < 0) return;
    this.writeWord(ac, dst);
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opDIVI(0o235000): Divide Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the magnitude of the number in AC is greater than or equal to that of the operand specified by M,
 *      set Overflow and No Divide, and go immediately to the next instruction without affecting the original AC
 *      or memory operand in any way.  Otherwise divide the double length number contained in accumulators A and A+1
 *      by the specified operand, calculating a quotient of 35 magnitude bits including leading zeros.  Place the
 *      unrounded quotient in the specified destination.  If M specifies AC as a destination, place the remainder,
 *      with the same sign as the dividend, in accumulator A+1.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A],[A+1].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opDIVI = function(op, ac)
{
    var ext = this.readWord(ac);
    var dst = this.readWord((ac + 1) & 0o17);
    dst = PDP10.doDIV.call(this, this.regEA, dst, ext);
    if (dst < 0) return;
    this.writeWord(ac, dst);
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opDIVM(0o236000): Divide to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the magnitude of the number in AC is greater than or equal to that of the operand specified by M,
 *      set Overflow and No Divide, and go immediately to the next instruction without affecting the original AC
 *      or memory operand in any way.  Otherwise divide the double length number contained in accumulators A and A+1
 *      by the specified operand, calculating a quotient of 35 magnitude bits including leading zeros.  Place the
 *      unrounded quotient in the specified destination.  If M specifies AC as a destination, place the remainder,
 *      with the same sign as the dividend, in accumulator A+1.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [E] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opDIVM = function(op, ac)
{
    var ext = this.readWord(ac);
    var dst = this.readWord((ac + 1) & 0o17);
    dst = PDP10.doDIV.call(this, this.readWord(this.regEA), dst, ext);
    if (dst < 0) return;
    this.writeWord(this.regEA, dst);
};

/**
 * opDIVB(0o237000): Divide to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-29:
 *
 *      If the magnitude of the number in AC is greater than or equal to that of the operand specified by M,
 *      set Overflow and No Divide, and go immediately to the next instruction without affecting the original AC
 *      or memory operand in any way.  Otherwise divide the double length number contained in accumulators A and A+1
 *      by the specified operand, calculating a quotient of 35 magnitude bits including leading zeros.  Place the
 *      unrounded quotient in the specified destination.  If M specifies AC as a destination, place the remainder,
 *      with the same sign as the dividend, in accumulator A+1.
 *
 * NOTE: This is a "Both" mode instruction: the source is [E] and the destination is [E] and [A],[A+1].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opDIVB = function(op, ac)
{
    var ext = this.readWord(ac);
    var dst = this.readWord((ac + 1) & 0o17);
    dst = PDP10.doDIV.call(this, this.readWord(this.regEA), dst, ext);
    if (dst < 0) return;
    this.writeWord(ac, this.writeWord(this.regEA, dst));
    this.writeWord((ac + 1) & 0o17, this.regEX);
};

/**
 * opASH(0o240000): Arithmetic Shift
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-31:
 *
 *      Arithmetic Shifting
 *
 *      These two instructions [ASH, ASHC] produce an arithmetic shift right or left of the number in AC
 *      or the double length number in accumulators A and A+1.  Shifting is the movement of the contents
 *      of a register bit-to-bit.  The operation discussed here is similar to logical shifting [see §2.4
 *      and the illustration on page 2-24], but in an arithmetic shift only the magnitude part is
 *      shifted - the sign is unaffected.  In a double length number the 70-bit string made up of the
 *      magnitude parts of the two words is shifted, but the sign of the low order word is made equal
 *      to the sign of the high order word.
 *
 *      Null bits are brought in at the end being vacated: a left shift brings in 0s at the right,
 *      whereas a right shift brings in the equivalent of the sign bit at the left.  In either case,
 *      information shifted out at the other end is lost.  A single shift left is equivalent to multiplying
 *      the number by 2 (provided no bit of significance is shifted out); a shift right divides the number
 *      by 2.
 *
 *      The number of places shifted is specified by the result of the effective address calculation
 *      taken as a signed number (in twos complement notation) modulo 2^8 in magnitude.  In other words
 *      the effective shift E is the number composed of bit 18 (which is the sign) and bits 28-35 of the
 *      calculation result.  Hence the programmer may specify the shift directly in the instruction
 *      (perhaps indexed) or give an indirect address to be used in calculating the shift.  A positive E
 *      produces motion to the left, a negative E to the right; E is thus the power of 2 by which the
 *      number is multiplied.  Maximum movement is 255 places.
 *
 *      ASH: Arithmetic Shift
 *
 *      Shift AC arithmetically the number of places specified by E.  Do not shift bit 0.  If E is positive,
 *      shift left bringing 0s into bit 35; data shifted out of bit 1 is lost; set Overflow if any bit of
 *      significance is lost (a 1 in a positive number, a 0 in a negative one).  If E is negative, shift right
 *      bringing 0s into bit 1 if AC is positive, 1s if negative; data shifted out of bit 35 is lost.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opASH = function(op, ac)
{
    /*
     * Convert the unsigned 18-bit value in regEA to a signed 8-bit value (-256 to 255).
     */
    var s = (((this.regEA & PDP10.HINT_LIMIT) << 14) >> 23) | (this.regEA & 0xff);
    if (s) {
        var v , bits;
        var w = this.readWord(ac);
        if (s > 0) {
            bits = PDP10.INT_MASK;
            v = (w < PDP10.INT_LIMIT)? 0 : PDP10.INT_LIMIT;
            if (s < 35) {
                v += (w * Math.pow(2, s)) % PDP10.INT_LIMIT;
                /*
                 * bits must be set to the mask of all magnitude bits shifted out of
                 * the original word.  Using 8-bit signed words as an example, this table shows
                 * the bits values that would correspond to shifting 1-7 bits left:
                 *
                 *    shifts    bits            value       calculation
                 *    ------    -----------     ------      -----------
                 *      1       0b01000000      128-64      128-Math.pow(2, 7-1)
                 *      2       0b01100000      128-32      128-Math.pow(2, 7-2)
                 *      3       0b01110000      128-16      128-Math.pow(2, 7-3)
                 *     ...
                 *      7       0b01111111      128-1       128-Math.pow(2, 7-7)
                 */
                bits = PDP10.INT_LIMIT - Math.pow(2, 35 - s);
            }
            if (w < PDP10.INT_LIMIT) {
                /*
                 * Since w was positive, overflow occurs ONLY if any of the bits we shifted out were 1s.
                 * If all those bits in the original value (w) were 0s, then adding bits to it could NOT
                 * produce a value > INT_MASK.
                 */
                if (w + bits > PDP10.INT_MASK) {
                    this.regPS |= PDP10.PSFLAG.AROV;
                }
            } else {
                /*
                 * Since w was negative, overflow occurs ONLY if any of the bits we shifted out were 0s.
                 * If all those bits in the original value (w) were 1s, subtracting bits from it could NOT
                 * produce a value <= INT_MASK.
                 */
                if (w - bits < PDP10.INT_LIMIT) {
                    this.regPS |= PDP10.PSFLAG.AROV;
                }
            }
        } else {
            if (s <= -35) {
                v = (w < PDP10.INT_LIMIT)? 0 : PDP10.INT_MASK;
            } else {
                v = Math.trunc(w / Math.pow(2, -s));
                if (w > PDP10.INT_MASK) {
                    bits = PDP10.WORD_LIMIT - Math.pow(2, 36 + s);
                    v += bits;
                }
            }
        }
        this.assert(v >= 0 && v < PDP10.WORD_LIMIT);
        this.writeWord(ac, v);
    }
};

/**
 * opROT(0o241000): Rotate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-25:
 *
 *      Rotate AC the number of places specified by E.  If E is positive, rotate left; bit 0 is rotated
 *      into bit 35.  If E is negative, rotate right; bit 35 is rotated into bit O.
 *
 *      The number of places moved is specified by the result of the effective address calculation taken as
 *      a signed number (in twos complement notation) modulo 2^8 in magnitude.  In other words the effective
 *      shift E is the number composed of bit 18 (which is the sign) and bits 28-35 of the calculation result.
 *      Hence the programmer may specify the shift directly in the instruction (perhaps indexed) or give an
 *      indirect address to be used in calculating the shift.  A positive E produces motion to the left,
 *      a negative E to the right; maximum movement is 255 places.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opROT = function(op, ac)
{
    /*
     * Convert the unsigned 18-bit value in regEA to a signed 8-bit value, modulo 36 (+/-35).
     */
    var s = ((((this.regEA & PDP10.HINT_LIMIT) << 14) >> 23) | (this.regEA & 0xff)) % 36;
    if (s) {
        var w = this.readWord(ac);
        /*
         * Note that a right rotation (s < 0) of s bits is equivalent to a left rotation (s > 0) of 36 + s bits.
         */
        if (s < 0) s = 36 + s;
        w = ((w * Math.pow(2, s)) % PDP10.WORD_LIMIT) + Math.trunc(w / Math.pow(2, 36 - s));
        this.writeWord(ac, w);
    }
};

/**
 * opLSH(0o242000): Logical Shift
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-24:
 *
 *      Shift and Rotate
 *
 *      The remaining logical instructions shift or rotate right or left the contents of AC or the contents
 *      of two accumulators, A and A+1 (mod 20 [base 8]), concatenated into a 72-bit register with A on the
 *      left.  The illustration below shows the movement of information these instructions produce in the
 *      accumulators.  In a (logical) shift the contents of a register are moved bit-to-bit with 0s brought
 *      in at the end being vacated; information shifted out at the other end is lost.  [For a discussion of
 *      arithmetic shifting see § 2.5.]  In rotation the contents are moved cyclically such that information
 *      rotated out at one end is put in at the other.
 *
 *      The number of places moved is specified by the result of the effective address calculation taken as a
 *      signed number (in twos complement notation) modulo 2^8 in magnitude.  In other words the effective shift
 *      E is the number composed of bit 18 (which is the sign) and bits 28-35 of the calculation result.  Hence
 *      the programmer may specify the shift directly in the instruction (perhaps indexed) or give an indirect
 *      address to be used in calculating the shift.  A positive E produces motion to the left, a negative E to
 *      the right; maximum movement is 255 places.
 *
 *      LSH: Logical Shift
 *
 *      Shift AC the number of places specified by E.  If E is positive, shift left bringing 0s into bit 35;
 *      data shifted out of bit 0 is lost.  If E is negative, shift right bringing 0s into bit 0; data shifted
 *      out of bit 35 is lost.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opLSH = function(op, ac)
{
    /*
     * Convert the unsigned 18-bit value in regEA to a signed 8-bit value (-256 to 255).
     */
    var s = (((this.regEA & PDP10.HINT_LIMIT) << 14) >> 23) | (this.regEA & 0xff);
    if (s) {
        var w = this.readWord(ac);
        if (s > 0) {
            if (s >= 36) {
                w = 0;
            } else {
                w = (w * Math.pow(2, s)) % PDP10.WORD_LIMIT;
            }
        } else {
            if (s <= -36) {
                w = 0;
            } else {
                w = Math.trunc(w / Math.pow(2, -s));
            }
        }
        this.writeWord(ac, w);
    }
};

/**
 * opJFFO(0o243000): Jump if Find First One
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-56:
 *
 *      If AC contains zero, clear AC A+1 and go on to the next instruction in sequence.
 *
 *      If AC is not zero, count the number of leading 0s in it (0s to the left of the leftmost 1),
 *      and place the count in AC A+1.  Take the next instruction from location E and continue sequential
 *      operation from there.  In either case AC is unaffected, the original contents of AC A +1 are lost.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJFFO = function(op, ac)
{
    var dst = 0;
    var src = this.readWord(ac);
    if (src) {
        while (src < PDP10.INT_LIMIT) {
            dst++;
            src *= 2;
        }
        this.setPC(this.regEA);
    }
    this.writeWord((ac + 1) & 0o17, dst);
};

/**
 * opASHC(0o244000): Arithmetic Shift
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-32:
 *
 *      Concatenate the magnitude portions of accumulators A and A+1 with A on the left, and shift
 *      the 70-bit combination in bits 1-35 and 37-71 the number of places specified by E.  Do not shift
 *      AC bit 0, but make bit 0 of AC A+1 equal to it if at least one shift occurs (ie if E is nonzero).
 *
 *      If E is positive, shift left bringing 0s into bit 71 (bit 35 of AC A+1); bit 37 (bit 1 of AC A+1)
 *      is shifted into bit 35; data shifted out of bit 1 is lost; set Overflow if any bit of significance
 *      is lost (a 1 in a positive number, a 0 in a negative one).  If E is negative, shift right bringing 0s
 *      into bit 1 if AC is positive, 1s if negative; bit 35 is shifted into bit 37; data shifted out of
 *      bit 71 is lost.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opASHC = function(op, ac)
{
    /*
     * Convert the unsigned 18-bit value in regEA to a signed 8-bit value (-256 to 255).
     */
    var s = (((this.regEA & PDP10.HINT_LIMIT) << 14) >> 23) | (this.regEA & 0xff);
    if (s) {
        var bits;
        var wLeft = this.readWord(ac);
        var wRight = this.readWord((ac + 1) & 0o17);
        if (s > 0) {
            /*
             * Handle all the left shift cases below, which don't need to worry about sign-extension
             * but DO need to worry about overflow.
             */
            var wLeftOrig = wLeft;
            if (s >= 36) {
                /*
                 * Since all wLeft bits are being shifted out, any positive value other than zero OR any negative value
                 * other than WORD_MASK indicates an overflow.
                 */
                if (wLeft > 0 && wLeft < PDP10.INT_LIMIT || wLeft > PDP10.INT_MASK && wLeft < PDP10.WORD_MASK) {
                    this.regPS |= PDP10.PSFLAG.AROV;
                }
                if (s >= 71) {
                    /*
                     * Since all wRight bits are being shifted out, any positive value other than zero OR any negative value
                     * other than WORD_MASK indicates an overflow.
                     */
                    if (wRight > 0 && wRight < PDP10.INT_LIMIT || wRight > PDP10.INT_MASK && wRight < PDP10.WORD_MASK) {
                        this.regPS |= PDP10.PSFLAG.AROV;
                    }
                    wLeft = 0;
                } else {
                    /*
                     * Left shift 36-70 bits.
                     */
                    wLeft = (wRight * Math.pow(2, s - 35)) % PDP10.INT_LIMIT;
                    bits = PDP10.INT_LIMIT - Math.pow(2, 70 - s);
                    if (wLeftOrig <= PDP10.INT_MASK) {
                        /*
                         * Since wLeft was positive, overflow occurs ONLY if any of the bits we shifted out were 1s.
                         * If all those bits in the original value were 0s, then adding bits to it could NOT produce
                         * a value > INT_MASK.
                         */
                        if (wRight + bits > PDP10.INT_MASK) {
                            this.regPS |= PDP10.PSFLAG.AROV;
                        }
                    } else {
                        /*
                         * Since wLeft was negative, overflow occurs ONLY if any of the bits we shifted out were 0s.
                         * If all those bits in the original value were 1s, subtracting bits from it could NOT produce
                         * a value <= INT_MASK.
                         */
                        if (wRight - bits <= PDP10.INT_MASK) {
                            this.regPS |= PDP10.PSFLAG.AROV;
                        }
                    }
                }
                wRight = 0;
                if (wLeftOrig > PDP10.INT_MASK) {
                    wLeft += PDP10.INT_LIMIT;
                    wRight += PDP10.INT_LIMIT;
                }
            } else {
                /*
                 * Left shift 1-35 bits.
                 */
                wLeft = ((wLeft * Math.pow(2, s)) % PDP10.INT_LIMIT) + Math.trunc((wRight % PDP10.INT_LIMIT) / Math.pow(2, 35 - s));
                wRight = (wRight * Math.pow(2, s)) % PDP10.INT_LIMIT;
                /*
                 * Determine overflow and update the sign bits.
                 */
                bits = PDP10.INT_LIMIT - Math.pow(2, 35 - s);
                if (wLeftOrig <= PDP10.INT_MASK) {
                    /*
                     * Since wLeft was positive, overflow occurs ONLY if any of the bits we shifted out were 1s.
                     * If all those bits in the original value were 0s, then adding bits to it could NOT produce
                     * a value > INT_MASK.
                     */
                    if (wLeftOrig + bits > PDP10.INT_MASK) {
                        this.regPS |= PDP10.PSFLAG.AROV;
                    }
                } else {
                    /*
                     * Since wLeft was negative, overflow occurs ONLY if any of the bits we shifted out were 0s.
                     * If all those bits in the original value were 1s, subtracting bits from it could NOT produce
                     * a value <= INT_MASK.
                     */
                    if (wLeftOrig - bits <= PDP10.INT_MASK) {
                        this.regPS |= PDP10.PSFLAG.AROV;
                    }
                    /*
                     * Last but not least, update the sign bits of wLeft and wRight to indicate negative values.
                     */
                    wLeft += PDP10.INT_LIMIT;
                    wRight += PDP10.INT_LIMIT;
                }
            }
        } else {
            /*
             * Handle all the right shift cases below, which don't need to worry about overflow but DO
             * need to worry about sign-extension.
             */
            if (s <= -36) {
                if (s <= -72) {
                    wRight = (wLeft > PDP10.INT_MASK? PDP10.WORD_MASK : 0);
                } else {
                    wRight = Math.trunc((wLeft % PDP10.INT_LIMIT) / Math.pow(2, -s - 35));
                }
                if (wLeft <= PDP10.INT_MASK) {
                    wLeft = 0;
                } else {
                    wLeft = PDP10.WORD_MASK;
                    wRight += PDP10.INT_LIMIT;
                }
            } else {
                /*
                 * For this right shift of 1-35 bits, determine the value of bits shifted in from the left.
                 */
                bits = (wLeft > PDP10.INT_MASK? PDP10.WORD_LIMIT - Math.pow(2, 36 + s) : 0);
                /*
                 * The bits that we add to wRight from wLeft must be shifted right one additional bit, because
                 * they must "skip over" the sign bit of wRight.  This means we must zero the sign bit of wRight,
                 * which can be done by performing a "mod" with INT_LIMIT.
                 */
                wRight = Math.trunc((wRight % PDP10.INT_LIMIT) / Math.pow(2, -s)) + (((wLeft % PDP10.INT_LIMIT) * Math.pow(2, 35 + s)) % PDP10.INT_LIMIT);
                wLeft = Math.trunc(wLeft / Math.pow(2, -s)) + bits;
                /*
                 * Last but not least, we must set the sign of wRight to the sign of wLeft.
                 */
                if (wLeft > PDP10.INT_MASK) wRight += PDP10.INT_LIMIT;
            }
        }
        this.writeWord(ac, wLeft);
        this.writeWord((ac + 1) & 0o17, wRight);
    }
};

/**
 * opROTC(0o245000): Rotate Combined
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-26:
 *
 *      Concatenate accumulators A and A+1 with A on the left, and rotate the 72-bit combination the
 *      number of places specified by E.  If E is positive, rotate left; bit 0 is rotated into bit 71
 *      (bit 35 of AC A+1) and bit 36 into bit 35.  If E is negative, rotate right; bit 35 is rotated
 *      into bit 36 and bit 71 into bit 0.
 *
 *      The number of places moved is specified by the result of the effective address calculation taken as
 *      a signed number (in twos complement notation) modulo 2^8 in magnitude.  In other words the effective
 *      shift E is the number composed of bit 18 (which is the sign) and bits 28-35 of the calculation result.
 *      Hence the programmer may specify the shift directly in the instruction (perhaps indexed) or give an
 *      indirect address to be used in calculating the shift.  A positive E produces motion to the left,
 *      a negative E to the right; maximum movement is 255 places.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opROTC = function(op, ac)
{
    /*
     * Convert the unsigned 18-bit value in regEA to a signed 8-bit value, modulo 72 (+/-71).
     */
    var s = ((((this.regEA & PDP10.HINT_LIMIT) << 14) >> 23) | (this.regEA & 0xff)) % 72;
    if (s) {
        var wLeft = this.readWord(ac);
        var wRight = this.readWord((ac + 1) & 0o17);
        var wLeftOrig = wLeft;
        /*
         * Note that a right rotation (s < 0) of s bits is equivalent to a left rotation (s > 0) of 72 + s bits.
         */
        if (s < 0) s = 72 + s;
        if (s < 36) {
            wLeft = ((wLeft * Math.pow(2, s)) % PDP10.WORD_LIMIT) + Math.trunc(wRight / Math.pow(2, 36 - s));
            wRight = ((wRight * Math.pow(2, s)) % PDP10.WORD_LIMIT) + Math.trunc(wLeftOrig / Math.pow(2, 36 - s));
        } else {
            wLeft = ((wRight * Math.pow(2, s - 36)) % PDP10.WORD_LIMIT) + Math.trunc(wLeft / Math.pow(2, 72 - s));
            wRight = ((wLeftOrig * Math.pow(2, s - 36)) % PDP10.WORD_LIMIT) + Math.trunc(wRight / Math.pow(2, 72 - s));
        }
        this.writeWord(ac, wLeft);
        this.writeWord((ac + 1) & 0o17, wRight);
    }
};

/**
 * opLSHC(0o246000): Logical Shift Combined
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-25:
 *
 *      Concatenate accumulators A and A+1 with A on the left, and shift the 72-bit combination the number
 *      of places specified by E.  If E is positive, shift left bringing 0s into bit 71 (bit 35 of AC A+1);
 *      bit 36 is shifted into bit 35; data shifted out of bit 0 is lost.  If E is negative, shift right
 *      bringing 0s into bit 0; bit 35 is shifted into bit 36; data shifted out of bit 71 is lost.
 *
 *      The number of places moved is specified by the result of the effective address calculation taken as
 *      a signed number (in twos complement notation) modulo 2^8 in magnitude.  In other words the effective
 *      shift E is the number composed of bit 18 (which is the sign) and bits 28-35 of the calculation result.
 *      Hence the programmer may specify the shift directly in the instruction (perhaps indexed) or give an
 *      indirect address to be used in calculating the shift.  A positive E produces motion to the left,
 *      a negative E to the right; maximum movement is 255 places.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opLSHC = function(op, ac)
{
    /*
     * Convert the unsigned 18-bit value in regEA to a signed 8-bit value (-256 to 255).
     */
    var s = (((this.regEA & PDP10.HINT_LIMIT) << 14) >> 23) | (this.regEA & 0xff);
    if (s) {
        var wLeft = this.readWord(ac);
        var wRight = this.readWord((ac + 1) & 0o17);
        if (s > 0) {
            if (s >= 36) {
                if (s >= 72) {
                    wLeft = 0;
                } else {
                    wLeft = (wRight * Math.pow(2, s - 36)) % PDP10.WORD_LIMIT;
                }
                wRight = 0;
            } else {
                wLeft = ((wLeft * Math.pow(2, s)) % PDP10.WORD_LIMIT) + Math.trunc(wRight / Math.pow(2, 36 - s));
                wRight = (wRight * Math.pow(2, s)) % PDP10.WORD_LIMIT;
            }
        } else {
            if (s <= -36) {
                if (s <= -72) {
                    wRight = 0;
                } else {
                    wRight = Math.trunc(wLeft / Math.pow(2, -s - 36));
                }
                wLeft = 0;
            } else {
                wRight = Math.trunc(wRight / Math.pow(2, -s)) + ((wLeft * Math.pow(2, 36 + s)) % PDP10.WORD_LIMIT);
                wLeft = Math.trunc(wLeft / Math.pow(2, -s));
            }
        }
        this.writeWord(ac, wLeft);
        this.writeWord((ac + 1) & 0o17, wRight);
    }
};

/**
 * opEXCH(0o250000): Exchange
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-9:
 *
 *      Move the contents of location E to AC and move AC to location E.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opEXCH = function(op, ac)
{
    var tmp = this.readWord(ac);
    this.writeWord(ac, this.readWord(this.regEA));
    this.writeWord(this.regEA, tmp);
};

/**
 * opBLT(0o251000): Block Transfer
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-10:
 *
 *      Beginning at the location addressed by AC left, move words to another area of memory beginning at the
 *      location addressed by AC right.  Continue until a word is moved to location E.  The total number of words
 *      in the block is thus E - AC(right) + 1.
 *
 *      CAUTION: Priority interrupts are allowed during the execution of this instruction, following the processing
 *      of each word.  If an interrupt occurs, the BLT stores the source and destination addresses for the next word
 *      in AC, so when the processor restarts upon the return to the interrupted program, it actually resumes at
 *      the correct point within the BLT.  Therefore, unless the interrupt system is inactive, A and X must not address
 *      the same register as this would produce a different effective address calculation upon resumption should an
 *      interrupt occur; and the program must not attempt to load an accumulator addressed either by A or X unless it
 *      is the final location being loaded.  Furthermore, the program cannot assume that AC is the same after the BLT
 *      as it was before.
 *
 * TODO: Determine the logic behind SIMH's treatment of the AC register when it's part of the memory being transferred.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opBLT = function(op, ac)
{
    var fDone = false, fUpdate = false;
    var addrDst = this.readWord(ac);
    var addrSrc = (addrDst / PDP10.HALF_SHIFT)|0;
    addrDst &= PDP10.HALF_MASK;
    while (!fDone) {
        this.writeWord(addrDst, this.readWord(addrSrc));
        /*
         * NOTE: The PDP-10 specs (especially the KA10 Reference Manual) are not very clear on the exit criteria:
         * the transfer stops once AC left >= E, not AC left == E.  They are also not very clear on whether the addresses
         * are incremented before or after the exit criteria is checked; however, the KA10 "DAKAM" diagnostic seems
         * pretty adamant that, at least after a one-word BLT operation, the addresses should NOT be incremented.
         */
        if (!(fDone = (addrDst >= this.regEA))) {
            addrSrc = (addrSrc + 1) & PDP10.HALF_MASK;
            addrDst = (addrDst + 1) & PDP10.HALF_MASK;
            fUpdate = true;
        }
        if (fDone || !this.isRunning()) {
            /*
             * If the CPU isn't currently running, the CPU is presumably being stepped, so we'll treat that the
             * same as the "priority interrupt" condition described above, update the addresses, rewind the PC, and leave.
             */
            if (fUpdate) this.writeWord(ac, addrSrc * PDP10.HALF_SHIFT + addrDst);
            if (!fDone) this.advancePC(-1);
            break;
        }
    }
};

/**
 * opAOBJP(0o252000): Add One to Both Halves of AC and Jump if Positive
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-41:
 *
 *      Add 1000001 [base 8] to AC and place the result back in AC.  If the result is greater than or equal
 *      to zero (ie if bit 0 is 0, and hence a negative count in the left half has reached zero or a positive
 *      count has not yet reached 2^17), take the next instruction from location E and continue sequential
 *      operation from there.
 *
 *      The incrementing of both halves of AC simultaneously is effected by adding 1000001 [base 8].  A count
 *      of -2 in AC left is therefore increased to zero if 2^18 - 1 is incremented in AC right.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOBJP = function(op, ac)
{
    var dst = (this.readWord(ac) + 0o000001000001) % PDP10.WORD_LIMIT;
    this.writeWord(ac, dst);
    if (dst < PDP10.INT_LIMIT) this.setPC(this.regEA);
};

/**
 * opAOBJN(0o253000): Add One to Both Halves of AC and Jump if Negative
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-41:
 *
 *      Add 1000001 [base 8] to AC and place the result back in AC.  If the result is less than zero
 *      (ie if bit 0 is 1, and hence a negative count in the left half has not yet reached zero or a positive
 *      count has reached 2^17), take the next instruction from location E and continue sequential operation
 *      from there.
 *
 *      The incrementing of both halves of AC simultaneously is effected by adding 1000001 [base 8].  A count
 *      of -2 in AC left is therefore increased to zero if 2^18 - 1 is incremented in AC right.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOBJN = function(op, ac)
{
    var dst = (this.readWord(ac) + 0o000001000001) % PDP10.WORD_LIMIT;
    this.writeWord(ac, dst);
    if (dst >= PDP10.INT_LIMIT) this.setPC(this.regEA);
};

/**
 * opJRST(0o254000): Jump and Restore
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-57:
 *
 *      Perform the functions specified by F, then take the next instruction from location E and continue sequential
 *      operation from there. Bits 9-12 are programmed as follows.
 *
 *        9     Restore the channel on which the highest priority interrupt is currently being held [§ 2.13].
 *
 *              Unless the User In-out flag is set, this function cannot be executed in a user program.  Instead
 *              of restoring the channel, it stores its own instruction code, F and effective address E in bits 0-8,
 *              9-12 and 18-35 respectively of unrelocated location 40 (clearing bits 13-17), and then executes the
 *              instruction contained in location 41, which is under control of the monitor [§ 2.15].
 *
 *       10     Halt the processor.  When it stops, the MA lights on the console display an address one greater
 *              than that of the location containing the instruction that caused the halt, and PC displays the jump
 *              address (the location from which the next instruction will be taken if the operator causes the processor
 *              to resume operation without changing PC).
 *
 *              Unless the User In-out flag is set, this function cannot be executed in a user program.  Instead of
 *              halting the processor, it stores its own instruction code, F and effective address E in Bits 0-8, 9-12
 *              and 18-35 respectively of unrelocated location 40 (clearing bits 13-17), and then executes the
 *              instruction contained in location 41, which is under control of the monitor [§ 2.15].
 *
 *       11     Restore the flags listed above from the left half of the word in the last location referenced in the
 *              effective address calculation.  Hence to restore flags requires that the JRST instruction use indexing
 *              or indirect addressing.
 *
 *              Restoration of all but the user flags is directly according to the contents of the corresponding bits
 *              as given above: a flag is set by a 1 in the bit, cleared by a 0.  A 1 in bit 5 sets User but a 0 has no
 *              effect, so the Monitor can restart a user program by restoring flags but the user cannot leave user
 *              mode by this method.  A 0 in bit 6 clears User In-out, but a 1 sets it only if the JRST is being
 *              executed by the Monitor, ie if User is clear.
 *
 *       12     Enter user mode.  The user program starts at relocated location E.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJRST = function(op, ac)
{
    if (ac & 0b0001) {
        /*
         * Enter user mode.
         */
        this.setUserMode();
    }
    if (ac & 0b0010) {
        /*
         * Restore the flags.
         */
        this.setPS((this.regLA / PDP10.HALF_SHIFT)|0);
    }
    if (ac & 0b0100) {
        /*
         * Halt the processor.
         */
        this.stopCPU();
    }
    if (ac & 0b1000) {
        /*
         * Restore interrupt channel.
         */
        this.opUndefined(op);
    }
    this.setPC(this.regEA);
};

/**
 * opJFCL(0o255000): Jump on Flag and Clear
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-57:
 *
 *      If any flag specified by F [ac] is set, clear it and take the next instruction from location E,
 *      continuing sequential operation from there.
 *
 *      To select one or a combination of these flags (which are among those described above) the programmer can specify
 *      the equivalent of an AC address that places 1s in the appropriate bits, but MACRO recognizes mnemonics for some of
 *      the 13-bit instruction codes (bits 0-12).
 *
 *          JFCL        JFCL    0,      No-op                       25500
 *          JOV         JFCL    10,     Jump on Overflow            25540
 *          JCRY0       JFCL    4,      Jump on Carry 0             25520
 *          JCRY1       JFCL    2,      Jump on Carry 1             25510
 *          JCRY        JFCL    6,      Jump on Carry 0 or 1        25530
 *          JFOV        JFCL    1,      Jump on Floating Overflow   25504
 *
 *      SIDEBAR: This instruction can be used simply to clear the selected flags by having the jump address point to the
 *      next consecutive location, as in:
 *
 *          JFCL 17,.+1
 *
 *      which clears all four flags without disrupting the normal program sequence.  A JFCL that selects no flag is the fastest
 *      no-op as it neither fetches nor stores an operand, and bits 18-35 of the instruction word can be used to store information.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJFCL = function(op, ac)
{
    /*
     * The ac (F) bits from the opcode align perfectly with the top 4 bits of regPS; all we have to do is shift ac left 14.
     */
    var bitsPS = ac << 14;
    if (this.regPS & bitsPS) {
        this.regPS &= ~bitsPS;
        this.setPC(this.regEA);
    }
};

/**
 * opXCT(0o256000): Execute
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-56:
 *
 *      Execute the contents of location E as an instruction.  Any instruction may be executed, including another XCT.
 *      If an XCT executes a skip instruction, the skip is relative to the location of the XCT (the first XCT if there
 *      are several in a chain).  If an XCT executes a jump, program flow is altered as specified by the jump (no matter
 *      how many XCTs precede a jump instruction, when PC is saved it contains an address one greater than the location
 *      of the first XCT in the chain).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opXCT = function(op, ac)
{
    this.regXC = this.regEA;
};

/**
 * opPUSHJ(0o260000): Push Down and Jump
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-62:
 *
 *      Add 1000001 [base 8] to AC to increment both halves by one and place the result back in AC.  If the addition
 *      causes the count in AC left to reach zero, set the Pushdown Overflow flag.  Then place the current contents of
 *      the flags (as described above) in the left half of the location now addressed by AC right and the contents of
 *      PC in the right half of that location (at this time PC contains an address one greater than the location of
 *      the PUSHJ instruction).  Take the next instruction from location E and continue sequential operation from there.
 *
 *      The flags are unaffected except Byte Interrupt, which is cleared.  The original contents of the location added
 *      to the list are lost.  If this instruction is executed as a result of a priority interrupt or in unrelocated
 *      41 or 61 while the processor is in user mode, bit 5 of the PC word stored is 1 and the processor leaves user mode.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opPUSHJ = function(op, ac)
{
    var p = (this.readWord(ac) + 0o000001000001) % PDP10.WORD_LIMIT;
    this.writeWord(ac, p);
    if (!((p / PDP10.HALF_SHIFT)|0)) {
        this.regPS |= PDP10.PSFLAG.PDOV;
    }
    this.writeWord(p & PDP10.ADDR_MASK, this.getPS() * PDP10.HALF_SHIFT + this.getPC());
    this.regPS &= ~PDP10.PSFLAG.BIS;            // TODO: Verify that BIS is cleared AFTER calling getPS()
    this.setPC(this.regEA);
};

/**
 * opPUSH(0o261000): Push Down
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-13:
 *
 *      Add 000001 000001 to AC to increment both halves by one, then move the contents of location E to the
 *      location now addressed by AC right.  If the addition causes the count in AC left to reach zero, set the
 *      Pushdown Overflow flag.  The contents of E are unaffected, the original contents of the location added
 *      to the list are lost.
 *
 * If we trusted SIMH, then we could not literally interpret this instruction as adding 000001 000001 to AC,
 * because if AC contained 777777 777777, adding 000001 000001 would result in 000001 000000, not 000000 000000,
 * and yet 000000 000000 is EXACTLY what we get in SIMH.
 *
 * And yet, DEC's documentation clearly contradicts what SIMH is doing:
 *
 *      The incrementing and decrementing of both halves of AC simultaneously is effected by adding and subtracting
 *      000001 000001.  Hence a count of -2 in AC left is increased to zero if 2^18 - 1 is incremented in AC right,
 *      and conversely, 1 in AC left is decreased to -1 if zero is decremented in AC right.
 *
 * Perhaps SIMH is simply emulating the behavior of some later PDP-10 model, which performed independent increments?
 *
 * TODO: Investigate.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opPUSH = function(op, ac)
{
    var p = this.readWord(ac);
    if (!SIMH) {
        /*
         * This is the behavior that is clearly documented by DEC.
         */
        p += 0o000001000001;
        this.writeWord(p & PDP10.ADDR_MASK, this.readWord(this.regEA));
        if (p >= PDP10.WORD_LIMIT) p -= PDP10.WORD_LIMIT;
        if (!((p / PDP10.HALF_SHIFT)|0)) {
            this.regPS |= PDP10.PSFLAG.PDOV;
        }
    } else {
        /*
         * This is the SIMH behavior, which appears to increment each half of AC independently.
         */
        var addr = (p + 1) & PDP10.ADDR_MASK;
        this.writeWord(addr, this.readWord(this.regEA));
        p = (p + 0o000001000000) - (p & PDP10.ADDR_MASK) + addr;
        if (p >= PDP10.WORD_LIMIT) {
            p -= PDP10.WORD_LIMIT;
            this.regPS |= PDP10.PSFLAG.PDOV;
        }
    }
    this.writeWord(ac, p);
};

/**
 * opPOP(0o262000): Pop Up
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-13:
 *
 *      Move the contents of the location addressed by AC right to location E, then subtract 000001 000001
 *      from AC to decrement both halves by one.  If the subtraction causes the count in AC left to reach -1,
 *      set the Pushdown Overflow flag.  The original contents of E are lost.
 *
 *      NOTE: Because of the order in which the operands are stored, the instruction POP AC,AC would load the
 *      contents of the location addressed by AC right into AC on top of the pushdown count, destroying it.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opPOP = function(op, ac)
{
    var p = this.readWord(ac);
    var src = this.readWord(p & PDP10.ADDR_MASK);
    this.writeWord(this.regEA, src);
    if (this.regEA == ac) p = src;     // this avoids re-reading the accumulator if the write just overwrote it
    p -= 0o000001000001;
    if (p < 0) p += PDP10.WORD_LIMIT;
    if (((p / PDP10.HALF_SHIFT)|0) == PDP10.HALF_MASK) {
        this.regPS |= PDP10.PSFLAG.PDOV;
    }
    this.writeWord(ac, p);
};

/**
 * opPOPJ(0o263000): Pop Up and Jump
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-63:
 *
 *      Subtract 1000001 [base 8] from AC to decrement both halves by one and place the result back in AC.
 *      If the subtraction causes the count in AC left to reach -1, set the Pushdown Overflow flag.  Take the
 *      next instruction from the location addressed by the right half of the location that was addressed by
 *      AC right prior to the decrementing, and continue sequential operation from there.
 *
 *      SIDEBAR: The effective address E is ignored.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opPOPJ = function(op, ac)
{
    var p = this.readWord(ac);
    var pc = this.readWord(p & PDP10.ADDR_MASK);
    p -= 0o000001000001;
    if (p < 0) p += PDP10.WORD_LIMIT;
    if (((p / PDP10.HALF_SHIFT)|0) == PDP10.HALF_MASK) {
        this.regPS |= PDP10.PSFLAG.PDOV;
    }
    this.writeWord(ac, p);
    this.setPC(pc & PDP10.ADDR_MASK);
};

/**
 * opJSR(0o264000): Jump to Subroutine
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-57:
 *
 *      Place the current contents of the flags (as described above) in the left half of location E and the
 *      contents of PC in the right half (at this time PC contains an address one greater than the location of
 *      the JSR instruction).  Take the next instruction from location E + 1 and continue sequential operation
 *      from there.  The flags are unaffected except Byte Interrupt, which is cleared.
 *
 *      If this instruction is executed as a result of a priority interrupt or in un-relocated 41 or 61 while
 *      the processor is in user mode, bit 5 of the PC word stored is 1 and the processor leaves user mode.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJSR = function(op, ac)
{
    this.writeWord(this.regEA, this.getPS() * PDP10.HALF_SHIFT + this.getPC());
    this.regPS &= ~PDP10.PSFLAG.BIS;            // TODO: Verify that BIS is cleared AFTER calling getPS()
    this.setPC(this.regEA + 1);
};

/**
 * opJSP(0o265000): Jump and Save PC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-58:
 *
 *      Place the current contents of the flags (as described above) in AC left and the contents of PC in AC right
 *      (at this time PC contains an address one greater than the location of the JSP instruction).  Take the next
 *      instruction from location E and continue sequential operation from there.  The flags are unaffected except
 *      Byte Interrupt, which is cleared.
 *
 *      If this instruction is executed as a result of a priority interrupt or in un-relocated 41 or 61 while the
 *      processor is in user mode, bit 5 of the PC word stored is 1 and the processor leaves user mode.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJSP = function(op, ac)
{
    this.writeWord(ac, this.getPS() * PDP10.HALF_SHIFT + this.getPC());
    this.regPS &= ~PDP10.PSFLAG.BIS;            // TODO: Verify that BIS is cleared AFTER calling getPS()
    this.setPC(this.regEA);
};

/**
 * opJSA(0o266000): Jump and Save AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-61:
 *
 *      Place AC in location E, the effective address E in AC left, and the contents of PC in AC right (at this time
 *      PC contains an address one greater than the location of the JSA instruction).  Take the next instruction from
 *      location E + 1 and continue sequential operation from there.  The original contents of E are lost.
 *
 *      If this instruction is executed as a result of a priority interrupt or in unrelocated 41 or 61 while the processor
 *      is in user mode, bit 5 of the PC word stored is 1 and the processor leaves user mode.
 *
 * Regarding JSA and JRA:
 *
 *      A JSA combines advantages of the JSR and JSP.  JSA does modify memory, but it saves PC in an accumulator
 *      without losing its previous contents (at a cost of not saving the flags).  It is thus convenient for multiple-entry
 *      subroutines.  In a subroutine called by a JSR, the returning JRST must refer to the (single) entry point.
 *      Since a JRA can retrieve the original PC by addressing AC as an index register, it is independent of any entry point
 *      without tying up an accumulator to the extent a JSP would.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJSA = function(op, ac)
{
    this.writeWord(this.regEA, this.readWord(ac));
    this.writeWord(ac, this.regEA * PDP10.HALF_SHIFT + this.getPC());
    this.setPC(this.regEA + 1);
};

/**
 * opJRA(0o267000): Jump and Restore AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-61:
 *
 *      Place the contents of the location addressed by AC left into AC.  Take the next instruction from location E and
 *      continue sequential operation from there.
 *
 * This opcode functions as the counterpart to JSA, but ONLY if location E (the effective address calculated by the JRA) indexes
 * with the same AC that was used with the JSA.
 *
 *              JSA     17,F1
 *      R1:     ...
 *              ...
 *      F1:     0                       ; location to save AC 17, as specified by the A field of "JSA 17,F1"
 *      F2:     ...                     ; first instruction executed after "JSA 17,F1"
 *              JRA     17,(17)         ; return to R1, after restoring AC 17
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJRA = function(op, ac)
{
    var acc = this.readWord(ac);
    this.writeWord(ac, this.readWord((acc / PDP10.HALF_SHIFT)|0));
    this.setPC(this.regEA);
};

/**
 * opADD(0o270000): Add
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Add the operand specified by M to AC and place the result in the specified destination.  If the sum is >= 2^35
 *      set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the sum less 2^35.
 *      If the sum is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but a magnitude in negative form equal
 *      to the sum plus 2^35.  Set both carry flags if both summands are negative, or their signs differ and their magnitudes
 *      are equal or the positive one is the greater in magnitude.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opADD = function(op, ac)
{
    this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opADDI(0o271000): Add Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Add the operand specified by M to AC and place the result in the specified destination.  If the sum is >= 2^35
 *      set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the sum less 2^35.
 *      If the sum is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but a magnitude in negative form equal
 *      to the sum plus 2^35.  Set both carry flags if both summands are negative, or their signs differ and their magnitudes
 *      are equal or the positive one is the greater in magnitude.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opADDI = function(op, ac)
{
    this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), this.regEA));
};

/**
 * opADDM(0o272000): Add to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Add the operand specified by M to AC and place the result in the specified destination.  If the sum is >= 2^35
 *      set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the sum less 2^35.
 *      If the sum is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but a magnitude in negative form equal
 *      to the sum plus 2^35.  Set both carry flags if both summands are negative, or their signs differ and their magnitudes
 *      are equal or the positive one is the greater in magnitude.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [E] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opADDM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opADDB(0o273000): Add to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Add the operand specified by M to AC and place the result in the specified destination.  If the sum is >= 2^35
 *      set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the sum less 2^35.
 *      If the sum is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but a magnitude in negative form equal
 *      to the sum plus 2^35.  Set both carry flags if both summands are negative, or their signs differ and their magnitudes
 *      are equal or the positive one is the greater in magnitude.
 *
 * NOTE: This is a "Both" mode instruction: the source is [E] and the destination is [E] and [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opADDB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opSUB(0o274000): Subtract
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Subtract the operand specified by M from AC and place the result in the specified destination.  If the difference
 *      is >= 2^35 set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the
 *      difference less 2^35.  If the difference is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but
 *      a magnitude in negative form equal to the difference plus 2^35.  Set both carry flags if the signs of the operands are
 *      the same and AC is the greater or the two are equal, or the signs of the operands differ and AC is negative.
 *
 * NOTE: This is a "Basic" mode instruction: the source is [E] and the destination is [A] (opposite of "Memory").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSUB = function(op, ac)
{
    this.writeWord(ac, PDP10.doSUB.call(this, this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opSUBI(0o275000): Subtract Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Subtract the operand specified by M from AC and place the result in the specified destination.  If the difference
 *      is >= 2^35 set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the
 *      difference less 2^35.  If the difference is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but
 *      a magnitude in negative form equal to the difference plus 2^35.  Set both carry flags if the signs of the operands are
 *      the same and AC is the greater or the two are equal, or the signs of the operands differ and AC is negative.
 *
 * NOTE: This is an "Immediate" mode instruction: the source is the word 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSUBI = function(op, ac)
{
    this.writeWord(ac, PDP10.doSUB.call(this, this.readWord(ac), this.regEA));
};

/**
 * opSUBM(0o276000): Subtract to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Subtract the operand specified by M from AC and place the result in the specified destination.  If the difference
 *      is >= 2^35 set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the
 *      difference less 2^35.  If the difference is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but
 *      a magnitude in negative form equal to the difference plus 2^35.  Set both carry flags if the signs of the operands are
 *      the same and AC is the greater or the two are equal, or the signs of the operands differ and AC is negative.
 *
 * NOTE: This is a "Memory" mode instruction: the source is [E] and the destination is [E] (opposite of "Basic").
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSUBM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.doSUB.call(this, this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opSUBB(0o277000): Subtract to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-27:
 *
 *      Subtract the operand specified by M from AC and place the result in the specified destination.  If the difference
 *      is >= 2^35 set Overflow and Carry 1; the result stored has a minus sign but a magnitude in positive form equal to the
 *      difference less 2^35.  If the difference is < -2^35 set Overflow and Carry 0; the result stored has a plus sign but
 *      a magnitude in negative form equal to the difference plus 2^35.  Set both carry flags if the signs of the operands are
 *      the same and AC is the greater or the two are equal, or the signs of the operands differ and AC is negative.
 *
 * NOTE: This is a "Both" mode instruction: the source is [E] and the destination is [E] and [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSUBB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.doSUB.call(this, this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opCAIL(0o301000): Compare AC Immediate and Skip if AC Less than E
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAIL = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.regEA) < 0) this.setPC(this.regPC + 1);
};

/**
 * opCAIE(0o302000): Compare AC Immediate and Skip if Equal
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAIE = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.regEA) == 0) this.setPC(this.regPC + 1);
};

/**
 * opCAILE(0o303000): Compare AC Immediate and Skip if AC Less than or Equal to E
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAILE = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.regEA) <= 0) this.setPC(this.regPC + 1);
};

/**
 * opCAIA(0o304000): Compare AC Immediate but Always Skip
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAIA = function(op, ac)
{
    // TODO: Determine if there's any need to actually perform the comparison.
    this.setPC(this.regPC + 1);
};

/**
 * opCAIGE(0o305000): Compare AC Immediate and Skip if AC Greater than or Equal to E
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAIGE = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.regEA) >= 0) this.setPC(this.regPC + 1);
};

/**
 * opCAIN(0o306000): Compare AC Immediate and Skip if Not Equal
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAIN = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.regEA) != 0) this.setPC(this.regPC + 1);
};

/**
 * opCAIG(0o307000): Compare AC Immediate and Skip if AC Greater than E
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-42:
 *
 *      Compare AC with E (ie with the word 0,E) and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAIG = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.regEA) > 0) this.setPC(this.regPC + 1);
};

/**
 * opCAML(0o311000): Compare AC with Memory and Skip if AC Less
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAML = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.readWord(this.regEA)) < 0) this.setPC(this.regPC + 1);
};

/**
 * opCAME(0o312000): Compare AC with Memory and Skip if Equal
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAME = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.readWord(this.regEA)) == 0) this.setPC(this.regPC + 1);
};

/**
 * opCAMLE(0o313000): Compare AC with Memory and Skip if AC Less or Equal
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAMLE = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.readWord(this.regEA)) <= 0) this.setPC(this.regPC + 1);
};

/**
 * opCAMA(0o314000): Compare AC with Memory but Always Skip
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAMA = function(op, ac)
{
    // TODO: Determine if there's any need to actually perform the comparison.
    this.setPC(this.regPC + 1);
};

/**
 * opCAMGE(0o315000): Compare AC with Memory and Skip if AC Greater or Equal
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAMGE = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.readWord(this.regEA)) >= 0) this.setPC(this.regPC + 1);
};

/**
 * opCAMN(0o316000): Compare AC with Memory and Skip if Not Equal
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAMN = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.readWord(this.regEA)) != 0) this.setPC(this.regPC + 1);
};

/**
 * opCAMG(0o317000): Compare AC with Memory and Skip if AC Greater
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC with the contents of location E and skip the next instruction in sequence if the condition
 *      specified by M is satisfied.  The pair of numbers compared may be either both fixed or both normalized
 *      floating point.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opCAMG = function(op, ac)
{
    if (PDP10.CMP(this.readWord(ac), this.readWord(this.regEA)) > 0) this.setPC(this.regPC + 1);
};

/**
 * opJUMPL(0o321000): Jump if AC Less than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPL = function(op, ac)
{
    if (PDP10.SIGN(this.readWord(ac)) < 0) this.setPC(this.regEA);
};

/**
 * opJUMPE(0o322000): Jump if AC Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPE = function(op, ac)
{
    if (PDP10.SIGN(this.readWord(ac)) == 0) this.setPC(this.regEA);
};

/**
 * opJUMPLE(0o323000): Jump if AC Less than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPLE = function(op, ac)
{
    if (PDP10.SIGN(this.readWord(ac)) <= 0) this.setPC(this.regEA);
};

/**
 * opJUMPA(0o324000): Jump Always
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPA = function(op, ac)
{
    this.setPC(this.regEA);
};

/**
 * opJUMPGE(0o325000): Jump if AC Greater than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPGE = function(op, ac)
{
    if (PDP10.SIGN(this.readWord(ac)) >= 0) this.setPC(this.regEA);
};

/**
 * opJUMPN(0o326000): Jump if AC Not Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPN = function(op, ac)
{
    if (PDP10.SIGN(this.readWord(ac)) != 0) this.setPC(this.regEA);
};

/**
 * opJUMPG(0o327000): Jump if AC Greater than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-43:
 *
 *      Compare AC (fixed or floating) with zero, and if the condition specified by M is satisfied,
 *      take the next instruction from location E and continue sequential operation from there.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opJUMPG = function(op, ac)
{
    if (PDP10.SIGN(this.readWord(ac)) > 0) this.setPC(this.regEA);
};

/**
 * opSKIP(0o330000): Do Not Skip
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIP = function(op, ac)
{
    if (ac) this.writeWord(ac, this.readWord(this.regEA));
};

/**
 * opSKIPL(0o331000): Skip if Memory Less than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPL = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    if (PDP10.SIGN(dst) < 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSKIPE(0o332000): Skip if Memory Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPE = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    if (PDP10.SIGN(dst) == 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSKIPLE(0o333000): Skip if Memory Less than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPLE = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    if (PDP10.SIGN(dst) <= 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSKIPA(0o334000): Skip Always
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, this.readWord(this.regEA));
};

/**
 * opSKIPGE(0o335000): Skip if Memory Greater than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPGE = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    if (PDP10.SIGN(dst) >= 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSKIPN(0o336000): Skip if Memory Not Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPN = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    if (PDP10.SIGN(dst) != 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSKIPG(0o337000): Skip if Memory Greater than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Compare the contents (fixed or floating) of location E with zero, and skip the next instruction
 *      in sequence if the condition specified by M is satisfied.  If A is nonzero also place the contents
 *      of location E in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSKIPG = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    if (PDP10.SIGN(dst) > 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOJ(0o340000): Add One to AC but Do Not Jump
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJ = function(op, ac)
{
    this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
};

/**
 * opAOJL(0o341000): Add One to AC and Jump if Less than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJL = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    if (PDP10.SIGN(dst) < 0) this.setPC(this.regEA);
};

/**
 * opAOJE(0o342000): Add One to AC and Jump if Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJE = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    if (PDP10.SIGN(dst) == 0) this.setPC(this.regEA);
};

/**
 * opAOJLE(0o343000): Add One to AC and Jump if Less than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJLE = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    if (PDP10.SIGN(dst) <= 0) this.setPC(this.regEA);
};

/**
 * opAOJA(0o344000): Add One to AC and Jump Always
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJA = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    this.setPC(this.regEA);
};

/**
 * opAOJGE(0o345000): Add One to AC and Jump if Greater than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJGE = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    if (PDP10.SIGN(dst) >= 0) this.setPC(this.regEA);
};

/**
 * opAOJN(0o346000): Add One to AC and Jump if Not Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJN = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    if (PDP10.SIGN(dst) != 0) this.setPC(this.regEA);
};

/**
 * opAOJG(0o347000): Add One to AC and Jump if Greater than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-44:
 *
 *      Increment AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue
 *      sequential operation from there.  If AC originally contained 2^35 - 1, set the Overflow and Carry 1
 *      flags; if -1, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOJG = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), 1));
    if (PDP10.SIGN(dst) > 0) this.setPC(this.regEA);
};

/**
 * opAOS(0o350000): Add One to Memory but Do Not Skip
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOS = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSL(0o351000): Add One to Memory and Skip if Less than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSL = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (PDP10.SIGN(dst) < 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSE(0o352000): Add One to Memory and Skip if Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSE = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (PDP10.SIGN(dst) == 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSLE(0o353000): Add One to Memory and Skip if Less than to Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSLE = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (PDP10.SIGN(dst) <= 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSA(0o354000): Add One to Memory and Skip Always
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSA = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSGE(0o355000): Add One to Memory and Skip if Greater than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSGE = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (PDP10.SIGN(dst) >= 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSN(0o356000): Add One to Memory and Skip if Not Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSN = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (PDP10.SIGN(dst) != 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opAOSG(0o357000): Add One to Memory and Skip if Greater than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Increment the contents of location E by one and place the result back in E.  Compare the result
 *      with zero, and skip the next instruction in sequence if the condition specified by M is satisfied.
 *      If location E originally contained 2^35 - 1, set the Overflow and Carry 1 flags; if -1, set Carry 0
 *      and Carry 1.  If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAOSG = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), 1));
    if (PDP10.SIGN(dst) > 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOJ(0o360000): Subtract One from AC but Do Not Jump
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJ = function(op, ac)
{
    this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
};

/**
 * opSOJL(0o361000): Subtract One from AC and Jump if Less than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJL = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) < 0) this.setPC(this.regEA);
};

/**
 * opSOJE(0o362000): Subtract One from AC and Jump if Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJE = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) == 0) this.setPC(this.regEA);
};

/**
 * opSOJLE(0o363000): Subtract One from AC and Jump if Less than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJLE = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) <= 0) this.setPC(this.regEA);
};

/**
 * opSOJA(0o364000): Subtract One from AC and Jump Always
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJA = function(op, ac)
{
    this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    this.setPC(this.regEA);
};

/**
 * opSOJGE(0o365000): Subtract One from AC and Jump if Greater than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJGE = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) >= 0) this.setPC(this.regEA);
};

/**
 * opSOJN(0o366000): Subtract One from AC and Jump if Not Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJN = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) != 0) this.setPC(this.regEA);
};

/**
 * opSOJG(0o367000): Subtract One from AC and Jump if Greater than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-45:
 *
 *      Decrement AC by one and place the result back in AC.  Compare the result with zero, and if the
 *      condition specified by M is satisfied, take the next instruction from location E and continue sequential
 *      operation from there.  If AC originally contained - 2^35 , set the Overflow and Carry 0 flags; if any
 *      other nonzero number, set Carry 0 and Carry 1.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOJG = function(op, ac)
{
    var dst = this.writeWord(ac, PDP10.doADD.call(this, this.readWord(ac), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) > 0) this.setPC(this.regEA);
};

/**
 * opSOS(0o370000): Subtract One from Memory but Do Not Skip
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOS = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSL(0o371000): Subtract One from Memory and Skip if Less than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSL = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) < 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSE(0o372000): Subtract One from Memory and Skip if Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSE = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) == 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSLE(0o373000): Subtract One from Memory and Skip if Less than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSLE = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) <= 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSA(0o374000): Subtract One from Memory and Skip Always
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSA = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSGE(0o375000): Subtract One from Memory and Skip if Greater than or Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSGE = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) >= 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSN(0o376000): Subtract One from Memory and Skip if Not Equal to Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSN = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) != 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSOSG(0o377000): Subtract One from Memory and Skip if Greater than Zero
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-46:
 *
 *      Decrement the contents of location E by one and place the result back in E.  Compare the result with zero,
 *      and skip the next instruction in sequence if the condition specified by M is satisfied.  If location E originally
 *      contained -2^35 , set the Overflow and Carry 0 flags; if any other nonzero number, set Carry 0 and Carry 1.
 *      If A is nonzero also place the result in AC.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSOSG = function(op, ac)
{
    var dst = this.writeWord(this.regEA, PDP10.doADD.call(this, this.readWord(this.regEA), PDP10.WORD_MASK));
    if (PDP10.SIGN(dst) > 0) this.setPC(this.regPC + 1);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opSETZ(0o400000): Set to Zeros
 * opSETZI(0o401000): Set to Zeros Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-18:
 *
 *      Change the contents of the destination specified by M to all 0s.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETZ = function(op, ac)
{
    this.writeWord(ac, 0);
};

/**
 * opSETZM(0o402000): Set to Zeros Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-18:
 *
 *      Change the contents of the destination specified by M to all 0s.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETZM = function(op, ac)
{
    this.writeWord(this.regEA, 0);
};

/**
 * opSETZB(0o403000): Set to Zeros Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-18:
 *
 *      Change the contents of the destination specified by M to all 0s.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETZB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, 0));
};

/**
 * opAND(0o404000): And with AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the specified operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opAND = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opANDI(0o405000): And with AC Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the specified operand (E) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDI = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(this.readWord(ac), this.regEA));
};

/**
 * opANDM(0o406000): And with AC to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([E]) to the AND function of the specified operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.AND(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opANDB(0o407000): And with AC to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the AND function of the specified operand ([E])
 *      and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.AND(this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opANDCA(0o410000): And with Complement of AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the specified operand ([E])
 *      and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCA = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opANDCAI(0o411000): And with Complement of AC Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the specified operand (E)
 *      and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCAI = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), this.regEA));
};

/**
 * opANDCAM(0o412000): And with Complement of AC to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([E]) to the AND function of the specified operand ([E])
 *      and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCAM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opANDCAB(0o413000): And with Complement of AC to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the AND function of the specified operand ([E])
 *      and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCAB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opANDCM(0o420000): And Complement of Memory with AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the complement of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCM = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opANDCMI(0o421000): And Complement of Memory Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the complement of the specified
 *      operand (E) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCMI = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(this.readWord(ac), PDP10.WORD_MASK - this.regEA));
};

/**
 * opANDCMM(0o422000): And Complement of Memory to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([E]) to the AND function of the complement of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCMM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.AND(this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opANDCMB(0o423000): And Complement of Memory to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-20:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the AND function of the complement of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCMB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.AND(this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA))));
};

/**
 * opXOR(0o430000): Exclusive Or with AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([AC]) to the exclusive OR function of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opXOR = function(op, ac)
{
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opXORI(0o431000): Exclusive Or Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([AC]) to the exclusive OR function of the specified
 *      operand (E) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opXORI = function(op, ac)
{
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.regEA));
};

/**
 * opXORM(0o432000): Exclusive Or to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([E]) to the exclusive OR function of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opXORM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.XOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opXORB(0o433000): Exclusive Or to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the exclusive OR function of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opXORB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opIOR(0o434000): Inclusive Or with AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIOR = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opIORI(0o435000): Inclusive Or with AC Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the specified
 *      operand (E) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIORI = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.regEA));
};

/**
 * opIORM(0o436000): Inclusive Or with AC to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([E]) to the inclusive OR function of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIORM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.IOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opIORB(0o437000): Inclusive Or with AC to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the inclusive OR function of the specified
 *      operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opIORB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opANDCB(0o440000): And Complements of Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the complements of both
 *      the specified operand ([E]) and [AC].  The result is the NOR function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCB = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opANDCBI(0o441000): And Complements of Both Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([AC]) to the AND function of the complements of both
 *      the specified operand (E) and [AC].  The result is the NOR function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCBI = function(op, ac)
{
    this.writeWord(ac, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.regEA));
};

/**
 * opANDCBM(0o442000): And Complements of Both to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([E]) to the AND function of the complements of both
 *      the specified operand ([E]) and [AC].  The result is the NOR function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCBM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opANDCBB(0o443000): And Complements of Both to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the AND function of the complements of both
 *      the specified operand ([E]) and [AC].  The result is the NOR function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opANDCBB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.AND(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA))));
};

/**
 * opEQV(0o444000): Equivalence with AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-23:
 *
 *      Change the contents of the destination specified by M ([AC]) to the complement of the exclusive OR function of the
 *      specified operand ([E]) and [AC] (the result has 1s wherever the corresponding bits of the operands are the same).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opEQV = function(op, ac)
{
    this.writeWord(ac, PDP10.EQV(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opEQVI(0o445000): Equivalence Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-23:
 *
 *      Change the contents of the destination specified by M ([AC]) to the complement of the exclusive OR function of the
 *      specified operand (E) and [AC] (the result has 1s wherever the corresponding bits of the operands are the same).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opEQVI = function(op, ac)
{
    this.writeWord(ac, PDP10.EQV(this.readWord(ac), this.regEA));
};

/**
 * opEQVM(0o446000): Equivalence to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-23:
 *
 *      Change the contents of the destination specified by M ([E]) to the complement of the exclusive OR function of the
 *      specified operand ([E]) and [AC] (the result has 1s wherever the corresponding bits of the operands are the same).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opEQVM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.EQV(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opEQVB(0o447000): Equivalence to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-23:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the complement of the exclusive OR function of the
 *      specified operand ([E]) and [AC] (the result has 1s wherever the corresponding bits of the operands are the same).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opEQVB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.EQV(this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opSETCA(0o450000): Set to Complement of AC
 * opSETCAI(0o451000): Set to Complement of AC Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([AC]) to the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCA = function(op, ac)
{
    this.writeWord(ac, PDP10.WORD_MASK - this.readWord(ac));
};

/**
 * opSETCAM(0o452000): Set to Complement of AC Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([E]) to the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCAM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.WORD_MASK - this.readWord(ac));
};

/**
 * opSETCAB(0o453000): Set to Complement of AC Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCAB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.WORD_MASK - this.readWord(ac)));
};

/**
 * opORCA(0o454000): Inclusive Or with Complement of AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the specified
 *      operand ([E]) and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCA = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opORCAI(0o455000): Inclusive Or with Complement of AC Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the specified
 *      operand (E) and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCAI = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), this.regEA));
};

/**
 * opORCAM(0o456000): Inclusive Or with Complement of AC to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([E]) to the inclusive OR function of the specified
 *      operand ([E]) and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCAM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opORCAB(0o457000): Inclusive Or with Complement of AC to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-21:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the inclusive OR function of the specified
 *      operand ([E]) and the complement of [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCAB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), this.readWord(this.regEA))));
};

/**
 * opSETCM(0o460000): Set to Complement of Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([AC]) to the complement of the specified source
 *      operand ([E]).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCM = function(op, ac)
{
    this.writeWord(ac, PDP10.WORD_MASK - this.readWord(this.regEA));
};

/**
 * opSETCMI(0o461000): Set to Complement of Memory Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([AC]) to the complement of the specified source
 *      operand (E).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCMI = function(op, ac)
{
    this.writeWord(ac, PDP10.WORD_MASK - this.regEA);
};

/**
 * opSETCMM(0o462000): Set to Complement of Memory Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([E]) to the complement of the specified source
 *      operand ([E]).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCMM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.WORD_MASK - this.readWord(this.regEA));
};

/**
 * opSETCMB(0o463000): Set to Complement of Memory Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-19:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the complement of the specified source
 *      operand ([E]).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETCMB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opORCM(0o464000): Inclusive Or Complement of Memory with AC
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the complement of the
 *      specified operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCM = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opORCMI(0o465000): Inclusive Or Complement of Memory Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the complement of the
 *      specified operand (E) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCMI = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), PDP10.WORD_MASK - this.regEA));
};

/**
 * opORCMM(0o466000): Inclusive Or Complement of Memory to Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([E]) to the inclusive OR function of the complement of the
 *      specified operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCMM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.IOR(this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opORCMB(0o467000): Inclusive Or Complement of Memory to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the inclusive OR function of the complement of the
 *      specified operand ([E]) and [AC].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCMB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.IOR(this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA))));
};

/**
 * opORCB(0o470000): Inclusive Or Complements of Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the complements of both
 *      the specified operand ([E]) and [AC].  The result is the NAND function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCB = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opORCBI(0o471000): Inclusive Or Complements of Both Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([AC]) to the inclusive OR function of the complements of both
 *      the specified operand (E) and [AC].  The result is the NAND function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCBI = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.regEA));
};

/**
 * opORCBM(0o472000): Inclusive Or Complements of Both To Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([E]) to the inclusive OR function of the complements of both
 *      the specified operand ([E]) and [AC].  The result is the NAND function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCBM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA)));
};

/**
 * opORCBB(0o473000): Inclusive Or Complements of Both to Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-22:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to the inclusive OR function of the complements of both
 *      the specified operand ([E]) and [AC].  The result is the NAND function of the operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opORCBB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.IOR(PDP10.WORD_MASK - this.readWord(ac), PDP10.WORD_MASK - this.readWord(this.regEA))));
};

/**
 * opSETO(0o474000): Set to Ones
 * opSETOI(0o475000): Set to Ones Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-18:
 *
 *      Change the contents of the destination specified by M (AC) to all 1s.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETO = function(op, ac)
{
    this.writeWord(ac, PDP10.WORD_MASK);
};

/**
 * opSETOM(0o476000): Set to Ones Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-18:
 *
 *      Change the contents of the destination specified by M ([E]) to all 1s.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETOM = function(op, ac)
{
    this.writeWord(this.regEA, PDP10.WORD_MASK);
};

/**
 * opSETOB(0o477000): Set to Ones Both
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-18:
 *
 *      Change the contents of the destination specified by M ([E] and [AC]) to all 1s.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opSETOB = function(op, ac)
{
    this.writeWord(this.regEA, this.writeWord(ac, PDP10.WORD_MASK));
};

/**
 * opHLL(0o5N0000): Half Word Left to Left
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-3:
 *
 *      Move the left half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination are lost.
 *
 * For HLL, the source is [E] and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLL = function(op, ac)
{
    var src = this.readWord(this.regEA);
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHR(op, dst, src) + (src - (src & PDP10.HALF_MASK)));
};

/**
 * opHLLI(0o5N1000): Half Word Left to Left, Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-3:
 *
 *      Move the left half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination are lost.
 *
 *      SIDEBAR: HLLI merely clears AC left.
 *
 * For HLLI, the source is 0,E and the destination is [A].  But since this is a left-half-only operation, src is
 * effectively 0.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLLI = function(op, ac)
{
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHR(op, dst, 0));
};

/**
 * opHLLM(0o5N2000): Half Word Left to Left, Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-3:
 *
 *      Move the left half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination are lost.
 *
 * For HLLM, the source is [A] and the destination is [E].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLLM = function(op, ac)
{
    var src = this.readWord(ac);
    var dst = this.readWord(this.regEA);
    this.writeWord(this.regEA, PDP10.GETHR(op, dst, src) + (src - (src & PDP10.HALF_MASK)));
};

/**
 * opHLLS(0o5N3000): Half Word Left to Left, Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-3:
 *
 *      Move the left half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination are lost.
 *
 *      SIDEBAR: If A is zero, HLLS is a no-op, otherwise it is equivalent to HLL.
 *
 * For HLLS, the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLLS = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    dst = PDP10.SETHR(op, dst, dst);
    this.writeWord(this.regEA, dst);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opHRL(0o504000): Half Word Right to Left
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-4:
 *
 *      Move the right half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination left
 *      half are lost.
 *
 * For HRL, the source is [E] and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRL = function(op, ac)
{
    var src = (this.readWord(this.regEA) & PDP10.HALF_MASK) * PDP10.HALF_SHIFT;
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHR(op, dst, src) + src);
};

/**
 * opHRLI(0o505000): Half Word Right to Left, Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-4:
 *
 *      Move the right half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination left
 *      half are lost.
 *
 * For HRLI, the source is 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRLI = function(op, ac)
{
    var src = this.regEA * PDP10.HALF_SHIFT;
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHR(op, dst, src) + src);
};

/**
 * opHRLM(0o506000): Half Word Right to Left, Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-4:
 *
 *      Move the right half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination left
 *      half are lost.
 *
 * For HRLM, the source is [A] and the destination is [E].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRLM = function(op, ac)
{
    var src = (this.readWord(ac) & PDP10.HALF_MASK) * PDP10.HALF_SHIFT;
    var dst = this.readWord(this.regEA);
    this.writeWord(this.regEA, PDP10.GETHR(op, dst, src) + src);
};

/**
 * opHRLS(0o507000): Half Word Right to Left, Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-4:
 *
 *      Move the right half of the source word specified by M to the left half of the specified destination.
 *      The source and the destination right half are unaffected; the original contents of the destination left
 *      half are lost.
 *
 * For HRLS, the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRLS = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    var src = (dst & PDP10.HALF_MASK) * PDP10.HALF_SHIFT;
    dst = PDP10.GETHR(op, dst, src) + src;
    this.writeWord(this.regEA, dst);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opHRR(0o540000): Half Word Right to Right
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-6:
 *
 *      Move the right half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right
 *      half are lost.
 *
 * For HRR, the source is [E] and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRR = function(op, ac)
{
    var src = this.readWord(this.regEA) & PDP10.HALF_MASK;
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHL(op, dst, src) + src);
};

/**
 * opHRRI(0o541000): Half Word Right to Right, Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-6:
 *
 *      Move the right half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right
 *      half are lost.
 *
 * For HRRI, the source is 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRRI = function(op, ac)
{
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHL(op, dst, this.regEA) + this.regEA);
};

/**
 * opHRRM(0o542000): Half Word Right to Right, Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-6:
 *
 *      Move the right half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right
 *      half are lost.
 *
 * For HRRM, the source is [A] and the destination is [E].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRRM = function(op, ac)
{
    var src = this.readWord(ac) & PDP10.HALF_MASK;
    var dst = this.readWord(this.regEA);
    this.writeWord(this.regEA, PDP10.GETHL(op, dst, src) + src);
};

/**
 * opHRRS(0o543000): Half Word Right to Right, Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-6:
 *
 *      Move the right half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right
 *      half are lost.
 *
 *      SIDEBAR: If A is zero, HRRS is a no-op; otherwise it is equivalent to HRR.
 *
 * For HRRS, the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHRRS = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    dst = PDP10.SETHL(op, dst, dst);
    this.writeWord(this.regEA, dst);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opHLR(0o544000): Half Word Left to Right
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-7:
 *
 *      Move the left half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right half are lost.
 *
 * For HLR, the source is [E] and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLR = function(op, ac)
{
    var src = (this.readWord(this.regEA) / PDP10.HALF_SHIFT)|0;
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHL(op, dst, src) + src);
};

/**
 * opHLRI(0o545000): Half Word Left to Right, Immediate
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-7:
 *
 *      Move the left half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right half are lost.
 *
 *      SIDEBAR: HLRI merely clears AC right.
 *
 * For HLRI, the source is 0,E and the destination is [A].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLRI = function(op, ac)
{
    var dst = this.readWord(ac);
    this.writeWord(ac, PDP10.GETHL(op, dst, 0));
};

/**
 * opHLRM(0o546000): Half Word Left to Right, Memory
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-7:
 *
 *      Move the left half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right half are lost.
 *
 * For HLRM, the source is [A] and the destination is [E].
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLRM = function(op, ac)
{
    var src = (this.readWord(ac) / PDP10.HALF_SHIFT)|0;
    var dst = this.readWord(this.regEA);
    this.writeWord(this.regEA, PDP10.GETHL(op, dst, src) + src);
};

/**
 * opHLRS(0o547000): Half Word Left to Right, Self
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-7:
 *
 *      Move the left half of the source word specified by M to the right half of the specified destination.
 *      The source and the destination left half are unaffected; the original contents of the destination right half are lost.
 *
 * For HLRS, the source AND destination is [E] (and also [A] if A is non-zero).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opHLRS = function(op, ac)
{
    var dst = this.readWord(this.regEA);
    var src = (dst / PDP10.HALF_SHIFT)|0;
    dst = PDP10.GETHL(op, dst, src) + src;
    this.writeWord(this.regEA, dst);
    if (ac) this.writeWord(ac, dst);
};

/**
 * opTRNE(0o602000): Test Right, No Modification, and Skip if All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRNE = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), this.regEA) == 0) this.setPC(this.regPC + 1);
};

/**
 * opTLNE(0o603000): Test Left, No Modification, and Skip if All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLNE = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT) == 0) this.setPC(this.regPC + 1);
};

/**
 * opTRNA(0o604000): Test Right, No Modification, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRNA = function(op, ac)
{
    this.setPC(this.regPC + 1);
};

/**
 * opTLNA(0o605000): Test Left, No Modification, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLNA = function(op, ac)
{
    this.setPC(this.regPC + 1);
};

/**
 * opTRNN(0o606000): Test Right, No Modification, and Skip if Not All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRNN = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), this.regEA) != 0) this.setPC(this.regPC + 1);
};

/**
 * opTLNN(0o607000): Test Left, No Modification, and Skip if Not All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLNN = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT) != 0) this.setPC(this.regPC + 1);
};

/**
 * opTDNE(0o612000): Test Direct, No Modification, and Skip if All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDNE = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), this.readWord(this.regEA)) == 0) this.setPC(this.regPC + 1);
};

/**
 * opTSNE(0o613000): Test Swapped, No Modification, and Skip if All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSNE = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))) == 0) this.setPC(this.regPC + 1);
};

/**
 * opTDNA(0o614000): Test Direct, No Modification, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDNA = function(op, ac)
{
    this.setPC(this.regPC + 1);
};

/**
 * opTSNA(0o615000): Test Swapped, No Modification, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSNA = function(op, ac)
{
    this.setPC(this.regPC + 1);
};

/**
 * opTDNN(0o616000): Test Direct, No Modification, and Skip if Not All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDNN = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), this.readWord(this.regEA)) != 0) this.setPC(this.regPC + 1);
};

/**
 * opTSNN(0o617000): Test Swapped, No Modification, and Skip if Not All Masked Bits Equal 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSNN = function(op, ac)
{
    if (PDP10.AND(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))) != 0) this.setPC(this.regPC + 1);
};

/**
 * opTRZ(0o620000): Test Right, Zeros, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRZ = function(op, ac)
{
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), this.regEA));
};

/**
 * opTLZ(0o621000): Test Left, Zeros, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLZ = function(op, ac)
{
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTRZE(0o622000): Test Right, Zeros, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRZE = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, this.regEA));
};

/**
 * opTLZE(0o623000): Test Left, Zeros, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLZE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.regEA * PDP10.HALF_SHIFT;
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, src));
};

/**
 * opTRZA(0o624000): Test Right, Zeros, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRZA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), this.regEA));
};

/**
 * opTLZA(0o625000): Test Left, Zeros, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLZA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTRZN(0o626000): Test Right, Zeros, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRZN = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, this.regEA));
};

/**
 * opTLZN(0o627000): Test Left, Zeros, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLZN = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.regEA * PDP10.HALF_SHIFT;
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, src));
};

/**
 * opTDZ(0o630000): Test Direct, Zeros, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDZ = function(op, ac)
{
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opTSZ(0o631000): Test Swapped, Zeros, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSZ = function(op, ac)
{
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))));
};

/**
 * opTDZE(0o632000): Test Direct, Zeros, and Skip if All Masked Bits Equaled a
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDZE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.readWord(this.regEA);
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, src));
};

/**
 * opTSZE(0o633000): Test Swapped, Zeros, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSZE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = PDP10.SWAP(this.readWord(this.regEA));
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, src));
};

/**
 * opTDZA(0o634000): Test Direct, Zeros, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDZA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opTSZA(0o635000): Test Swapped, Zeros, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSZA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))));
};

/**
 * opTDZN(0o636000): Test Direct, Zeros, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDZN = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.readWord(this.regEA);
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, src));
};

/**
 * opTSZN(0o637000): Test Swapped, Zeros, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSZN = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = PDP10.SWAP(this.readWord(this.regEA));
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.CLR(dst, src));
};

/**
 * opTRC(0o640000): Test Right, Complement, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRC = function(op, ac)
{
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.regEA));
};

/**
 * opTLC(0o641000): Test Left, Complement, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLC = function(op, ac)
{
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTRCE(0o642000): Test Right, Complement, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRCE = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, this.regEA));
};

/**
 * opTLCE(0o643000): Test Left, Complement, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLCE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.regEA * PDP10.HALF_SHIFT;
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, src));
};

/**
 * opTRCA(0o644000): Test Right, Complement, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRCA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.regEA));
};

/**
 * opTLCA(0o645000): Test Left, Complement, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLCA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTRCN(0o646000): Test Right, Complement, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRCN = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, this.regEA));
};

/**
 * opTLCN(0o647000): Test Left, Complement, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLCN = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.regEA * PDP10.HALF_SHIFT;
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, src));
};

/**
 * opTDC(0o650000): Test Direct, Complement, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDC = function(op, ac)
{
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opTSC(0o651000): Test Swapped, Complement, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSC = function(op, ac)
{
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))));
};

/**
 * opTDCE(0o652000): Test Direct, Complement, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDCE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.readWord(this.regEA);
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, src));
};

/**
 * opTSCE(0o653000): Test Swapped, Complement, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSCE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = PDP10.SWAP(this.readWord(this.regEA));
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, src));
};

/**
 * opTDCA(0o654000): Test Direct, Complement, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDCA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opTSCA(0o655000): Test Swapped, Complement, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSCA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))));
};

/**
 * opTDCN(0o656000): Test Direct, Complement, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDCN = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.readWord(this.regEA);
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, src));
};

/**
 * opTSCN(0o657000): Test Swapped, Complement, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSCN = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = PDP10.SWAP(this.readWord(this.regEA));
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.XOR(dst, src));
};

/**
 * opTRO(0o660000): Test Right, Ones, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRO = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.regEA));
};

/**
 * opTLO(0o661000): Test Left, Ones, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLO = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTROE(0o662000): Test Right, Ones, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTROE = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, this.regEA));
};

/**
 * opTLOE(0o663000): Test Left, Ones, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLOE = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA * PDP10.HALF_SHIFT) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTROA(0o664000): Test Right, Ones, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTROA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.regEA));
};

/**
 * opTLOA(0o665000): Test Left, Ones, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLOA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.regEA * PDP10.HALF_SHIFT));
};

/**
 * opTRON(0o666000): Test Right, Ones, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTRON = function(op, ac)
{
    var dst = this.readWord(ac);
    if (PDP10.AND(dst, this.regEA) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, this.regEA));
};

/**
 * opTLON(0o667000): Test Left, Ones, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTLON = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.regEA * PDP10.HALF_SHIFT;
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, src));
};

/**
 * opTDO(0o670000): Test Direct, Ones, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDO = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opTSO(0o671000): Test Swapped, Ones, but Do Not Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSO = function(op, ac)
{
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))));
};

/**
 * opTDOE(0o672000): Test Direct, Ones, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDOE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.readWord(this.regEA);
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, src));
};

/**
 * opTSOE(0o673000): Test Swapped, Ones, and Skip if All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSOE = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = PDP10.SWAP(this.readWord(this.regEA));
    if (PDP10.AND(dst, src) == 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, src));
};

/**
 * opTDOA(0o674000): Test Direct, Ones, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDOA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), this.readWord(this.regEA)));
};

/**
 * opTSOA(0o675000): Test Swapped, Ones, but Always Skip
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSOA = function(op, ac)
{
    this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(this.readWord(ac), PDP10.SWAP(this.readWord(this.regEA))));
};

/**
 * opTDON(0o676000): Test Direct, Ones, and Skip if Not All Masked Bits Equaled 0
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTDON = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = this.readWord(this.regEA);
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, src));
};

/**
 * opTSON(0o677000): Test Swapped, Ones, and Skip if Not All Masked Bits Equaled a
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opTSON = function(op, ac)
{
    var dst = this.readWord(ac);
    var src = PDP10.SWAP(this.readWord(this.regEA));
    if (PDP10.AND(dst, src) != 0) this.setPC(this.regPC + 1);
    this.writeWord(ac, PDP10.IOR(dst, src));
};

/**
 * opBLKI(0o700000)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opBLKI = function(op, dev)
{
    this.opUndefined(op);
};

/**
 * opDATAI(0o700040)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opDATAI = function(op, dev)
{
    this.opUndefined(op);
};

/**
 * opBLKO(0o700100)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opBLKO = function(op, dev)
{
    this.opUndefined(op);
};

/**
 * opDATAO(0o700140)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opDATAO = function(op, dev)
{
    this.opUndefined(op);
};

/**
 * opCONO(0o700200)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opCONO = function(op, dev)
{
    switch(dev) {
    case PDP10.DEVICES.APR:
        this.writeFlags(this.readWord(this.regEA));
        break;
    default:
        this.opUndefined(op);
        break;
    }
};

/**
 * opCONI(0o700240)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opCONI = function(op, dev)
{
    switch(dev) {
    case PDP10.DEVICES.APR:
        this.writeWord(this.regEA, this.readFlags());
        break;
    default:
        this.opUndefined(op);
        break;
    }
};

/**
 * opCONSZ(0o700300)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opCONSZ = function(op, dev)
{
    this.opUndefined(op);
};

/**
 * opCONSO(0o700340)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} dev
 */
PDP10.opCONSO = function(op, dev)
{
    this.opUndefined(op);
};

/**
 * opIO(0o700xxx-0o777xxx): Input-Output Instructions
 *
 * From the DEC PDP-10 System Reference Manual (May 1968), p. 2-68:
 *
 *      The input-output instructions govern all transfers of data to and from the peripheral equipment, and also
 *      perform many operations within the processor.  An instruction in the in-out class is designated by 111 in
 *      bits 0-2, ie its left octal digit is 7.  Bits 3-9 address the device that is to respond to the instruction.
 *      The format thus allows for 128 codes, two of which, 000 and 004 respectively, address the processor and
 *      priority interrupt, and are used for the console and time share hardware as well.  A chart in Appendix A
 *      lists all devices for which codes have been assigned, and gives their mnemonics and DEC option numbers.
 *
 *      Bits 13-35 are the same as in all other instructions: they are the I, X, and Y parts, which are used to
 *      calculate an effective address, set of conditions, or mask to be used in the execution of the instruction.
 *      The remaining bits, 10-12, select one of the following eight 10 instructions.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 */
PDP10.opIO = function(op)
{
    PDP10.aOpIO_KA10[op & 7].call(this, op, (op >> 3) & 0o177);
};

/**
 * opNOP(op, ac)
 *
 * Used for all "defined" operations that, in fact, do nothing (eg, SETA, SETAI, CAI, JUMP).
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opNOP = function(op, ac)
{
};

/**
 * opNOPM(op, ac)
 *
 * Used for all "defined" operations that, in fact, do nothing (eg, SETMM, CAM) EXCEPT reference memory.
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} ac
 */
PDP10.opNOPM = function(op, ac)
{
};

/**
 * opUndefined(op, ac)
 *
 * @this {CPUStatePDP10}
 * @param {number} op
 * @param {number} [ac]
 */
PDP10.opUndefined = function(op, ac)
{
    this.printf("undefined opcode: %o\n", op);
    this.advancePC(-1);
    this.stopCPU();
};

/**
 * doABS(src)
 *
 * Returns the absolute value (ABS) of the 36-bit operand; used by the MOVM* (Move Magnitude) instructions.
 *
 * @this {CPUStatePDP10}
 * @param {number} src (36-bit)
 * @returns {number} (absolute value of src)
 */
PDP10.doABS = function(src)
{
    if (src > PDP10.INT_MASK) {
        if (src != PDP10.INT_LIMIT) {
            src = PDP10.TWO_POW36 - src;
        } else {
            this.regPS |= (PDP10.PSFLAG.AROV | PDP10.PSFLAG.CRY1);
        }
    }
    return src;
};

/**
 * doADD(dst, src)
 *
 * Performs the addition (ADD) of two signed 36-bit operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst + src)
 */
PDP10.doADD = function(dst, src)
{
    /*
     * Since, in our happy little world, 36-bit values are always unsigned, the
     * only possible out-of-bounds value is a result >= WORD_LIMIT, which the mod cures.
     */
    var res = (dst + src) % PDP10.WORD_LIMIT;
    PDP10.setAddFlags.call(this, dst, src, res);
    return res;
};

/**
 * doDIV(src, dst, ext)
 *
 * Performs the division (DIV) of a 72-bit operand by a 36-bit operand.
 *
 * @this {CPUStatePDP10}
 * @param {number} src (36-bit divisor)
 * @param {number} dst (36-bit value)
 * @param {number} [ext] (36-bit value extension)
 * @returns {number} (dst / src) (the remainder is stored in regEX); -1 if error (no division performed)
 */
PDP10.doDIV = function(src, dst, ext)
{
    var fNegQ = false, fNegR = false;

    /*
     * Perform all the same up-front checks that the PDP-10 performs; if we do our job correctly, then it
     * will be impossible for the actual division operation to overflow (the asserts below should never fire).
     */
    if (ext === undefined) {
        if (!src) {
            this.regPS |= PDP10.PSFLAG.DCK | PDP10.PSFLAG.AROV;
            return -1;
        }
        ext = (dst > PDP10.INT_MASK)? PDP10.WORD_MASK : 0;
    } else {
        var srcAbs = (src < PDP10.INT_LIMIT? src : PDP10.TWO_POW36 - src);
        var extAbs = (ext < PDP10.INT_LIMIT? ext : PDP10.TWO_POW36 - ext - (dst? 1 : 0));
        if (extAbs >= srcAbs) {
            this.regPS |= PDP10.PSFLAG.DCK | PDP10.PSFLAG.AROV;
            return -1;
        }
    }

    /*
     * We're done with the PDP-10's "dual sign" operands now; produce a (unified) signed 72-bit dividend.
     */
    dst = PDP10.merge72.call(this, dst, ext);
    ext = this.regEX;

    /*
     * Make all the inputs positive now, to keep the division simple.  Fix up the results when we're done.
     */
    if (src > PDP10.INT_MASK) {
        src = PDP10.WORD_LIMIT - src;
        fNegQ = !fNegQ;
    }
    if (ext > PDP10.INT_MASK) {
        if (dst) {
            ext = PDP10.WORD_MASK - ext;
            dst = PDP10.WORD_LIMIT - dst;
        }
        else {
            if (ext) ext = PDP10.WORD_LIMIT - ext;
        }
        fNegR = true; fNegQ = !fNegQ;
    }

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
     */
    PDP10.INITD(this.regRes, 0, 0);
    PDP10.INITD(this.regPow, 1, 0);
    PDP10.INITD(this.regDiv, src, 0);
    PDP10.INITD(this.regRem, dst, ext);

    while (PDP10.CMPD(this.regRem, this.regDiv) > 0) {
        PDP10.ADDD(this.regDiv, this.regDiv);
        PDP10.ADDD(this.regPow, this.regPow);
    }
    do {
        if (PDP10.CMPD(this.regRem, this.regDiv) >= 0) {
            PDP10.SUBD(this.regRem, this.regDiv);
            PDP10.ADDD(this.regRes, this.regPow);
            if (PDP10.ZEROD(this.regRem)) break;
        }
        PDP10.SHRD(this.regDiv);
        PDP10.SHRD(this.regPow);
    } while (!PDP10.ZEROD(this.regPow));

    this.assert(!this.regRes[1], "extended quotient");
    this.assert(!this.regRem[1], "extended remainder");

    dst = this.regRes[0];
    this.regEX = this.regRem[0];

    if (fNegQ && dst) {
        dst = PDP10.WORD_LIMIT - dst;
    }

    if (fNegR && this.regEX) {
        this.regEX = PDP10.WORD_LIMIT - this.regEX;
    }

    return dst;
};

/**
 * doMUL(dst, src, fTruncate, fExternal)
 *
 * Performs the multiplication (MUL) of two signed 36-bit operands.
 *
 * To support 72-bit results, we perform the multiplication process as you would "by hand",
 * treating the operands to be multiplied as two 2-digit numbers, where each "digit" is an 18-bit
 * number (base 2^18).  Each individual multiplication of these 18-bit "digits" will produce
 * a result within 2^36, well within JavaScript integer accuracy.
 *
 * PDP-10 Diagnostic Notes
 * -----------------------
 *
 * The "DAKAK" diagnostic contains the following code:
 *
 *      036174: 200240 043643  MOVE    5,43643      ; [43643] = 400000000000
 *      036175: 200300 043603  MOVE    6,43603      ; [43603] = 777777777777
 *      036176: 200140 043604  MOVE    3,43604      ; [43604] = 000000000001
 *      036177: 224240 000003  MUL     5,3          ; Multiply 400000000000 by 000000000001
 *      036200: 312240 043604  CAME    5,43604      ; high order result in AC should be: 000000000001
 *      036201: 003240 033721  UUO     5,33721      ;
 *      036202: 312300 043602  CAME    6,43602      ; low order result in AC+1 should be: 000000000000
 *
 * The "natural" result is:
 *
 *      05=777777777777 06=400000000000
 *
 * And SIMH seems to agree.  So why does the DEC diagnostic expect:
 *
 *      05=000000000001 06=000000000000
 *
 * The answer can be found in the June 1982 "DECSYSTEM-10 and DECSYSTEM-20 Processor Reference Manual",
 * in the description of the MUL instruction:
 *
 *      CAUTION: In the KA10, an AC operand of 2^35 is treated as though it were +2^35, producing the
 *      incorrect sign in the product.
 *
 * This behavior is now simulated below for MODEL_KA10, at least to the extent that the diagnostic is happy.
 *
 * @this {CPUStatePDP10}
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @param {boolean} [fTruncate] (true to truncate the result to 36 bits; used by IMUL instructions)
 * @param {boolean} [fExternal] (true if external caller; avoids modifying the CPU state)
 * @returns {number} (dst * src) (the high 36 bits of the result; the low 36 bits are stored in regEX)
 */
PDP10.doMUL = function(dst, src, fTruncate, fExternal)
{
    var n1 = dst, n2 = src;
    var fNeg = false, res, ext;

    /*
     * If either input is in the negative range, record the sign and make it positive;
     * we'll negate the result afterward if necessary.
     */
    if (n1 > PDP10.INT_MASK) {
        if (fExternal || this.model != PDP10.MODEL_KA10 || n1 != PDP10.INT_LIMIT) {
            n1 = PDP10.WORD_LIMIT - n1;
            fNeg = !fNeg;
        }
    }

    if (n2 > PDP10.INT_MASK) {
        n2 = PDP10.WORD_LIMIT - n2;
        fNeg = !fNeg;
    }

    if (n1 < PDP10.HALF_SHIFT && n2 < PDP10.HALF_SHIFT) {
        res = n1 * n2;
        ext = 0;
    }
    else {
        var n1d1 = (n1 & PDP10.HALF_MASK);
        var n1d2 = Math.trunc(n1 / PDP10.HALF_SHIFT);
        var n2d1 = (n2 & PDP10.HALF_MASK);
        var n2d2 = Math.trunc(n2 / PDP10.HALF_SHIFT);
        var m1d1 = n1d1 * n2d1;
        var m1d2 = (n1d2 * n2d1) + Math.trunc(m1d1 / PDP10.HALF_SHIFT);
        ext = Math.trunc(m1d2 / PDP10.HALF_SHIFT);
        m1d2 = (m1d2 & PDP10.HALF_MASK) + (n1d1 * n2d2);
        res = ((m1d2 * PDP10.HALF_SHIFT) + (m1d1 & PDP10.HALF_MASK)) % PDP10.WORD_LIMIT;
        ext += Math.trunc(m1d2 / PDP10.HALF_SHIFT) + (n1d2 * n2d2);
    }

    if (fNeg) {
        if (res) {
            ext = PDP10.WORD_MASK - ext;
            res = PDP10.WORD_LIMIT - res;
        }
        else {
            if (ext) ext = PDP10.WORD_LIMIT - ext;
        }
    }

    ext = PDP10.split72.call(this, res, ext, fExternal);

    if (fTruncate) {
        /*
         * Special code for IMUL.  I originally tried to avoid calling split72() in this case, but the PDP-10
         * still appears to be splitting the result of the multiplication into separately signed 36-bit values,
         * so the simplest solution is to call split72() in all cases.
         */
        res = this.regEX;
        if (!fExternal) {
            /*
             * Regarding IMUL overflows, the original spec says:
             *
             *      Set Overflow if the product is >= 2^35 or < -2^35 (ie, if the high order word of the double
             *      length product is not null); the high order word is lost.
             *
             * However, when the "DAKAL" diagnostic performs a sequence like this:
             *
             *      00=000000000000 01=000000000000 02=000000000000 03=400000036755
             *      04=400000000000 05=000000000003 06=400000000000 07=000000000004
             *      10=000000000000 11=000000000011 12=777777400000 13=777777777776
             *      14=000000200000 15=400000037134 16=000000000016 17=000000000000
             *      PC=037145 RA=00400000 EA=400000 PS=000000 OV=0 C0=0 C1=0 ND=0 PD=0
             *      037145: 220600 000013  IMUL    14,13            ;cycles=1
             *
             * it sets 14=777777400000 and leaves overflow clear; since the 'high order word" would be 777777777777,
             * not null, I think the spec over-simplifies.  So our check is more exhaustive: it verifies that ext is
             * nothing more than an extension of the sign bit of res (ie, 0 if res is positive, -1 if res is negative).
             * Any other combination of values implies an overflow.
             */
            if ((ext || res > PDP10.INT_MASK) && (ext != PDP10.WORD_MASK || res <= PDP10.INT_MASK)) {
                this.regPS |= PDP10.PSFLAG.AROV;
            }
        }
        ext = res;
    }
    return ext;
};

/**
 * doNEG(src)
 *
 * Returns the negation (NEG) of the 36-bit operand; used by the MOVN* (Move Negative) instructions.
 *
 * @this {CPUStatePDP10}
 * @param {number} src (36-bit)
 * @returns {number} (src negated, but as an unsigned 36-bit result)
 */
PDP10.doNEG = function(src)
{
    if (!src) {
        this.regPS |= (PDP10.PSFLAG.CRY0 | PDP10.PSFLAG.CRY1);
    }
    else {
        /*
         * In the non-zero case, it's always safe to subtract src from TWO_POW36, but since we have to check for
         * the INT_LIMIT case anyway, and since subtraction in that case doesn't alter src, we skip the subtraction.
         */
        if (src == PDP10.INT_LIMIT) {
            this.regPS |= (PDP10.PSFLAG.AROV | PDP10.PSFLAG.CRY1);
        } else {
            src = PDP10.TWO_POW36 - src;
        }
    }
    return src;
};

/**
 * doSUB(dst, src)
 *
 * Performs the subtraction (SUB) of two signed 36-bit operands.
 *
 * @this {CPUStatePDP10}
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst - src)
 */
PDP10.doSUB = function(dst, src)
{
    /*
     * Since, in our happy little world, 36-bit values are always unsigned, the
     * only possible out-of-bounds value is a result < 0, which adding WORD_LIMIT cures.
     */
    var res = (dst - src);
    if (res < 0) res += PDP10.WORD_LIMIT;
    /*
     * We can leverage setAddFlags() by treating the subtraction as addition;
     * since res = dst - src, it is also true that dst = res + src.
     */
    PDP10.setAddFlags.call(this, res, src, dst);
    return res;
};

/**
 * merge72(dst, ext)
 *
 * Returns a unified 72-bit result from two independently-signed 36-bit values.
 *
 * @this {CPUStatePDP10}
 * @param {number} dst (36-bit value)
 * @param {number} ext (36-bit value)
 * @returns {number} (returns the lower 36 bits; the upper 36 bits  are stored in regEX)
 */
PDP10.merge72 = function(dst, ext)
{
    var sign = (ext - (ext % PDP10.INT_LIMIT));

    /*
     * For 72-bit inputs, the PDP-10 doesn't care whether or not the low word's sign
     * matches the high word's sign.  The high word's sign bit is the controlling bit.
     *
     *      this.assert(sign == (dst - (dst % PDP10.INT_LIMIT)), "sign mismatch");
     *
     * Compute value without the sign bit and add the low bit of extended in its place.
     */
    dst = (dst % PDP10.INT_LIMIT) + ((ext & 1) * PDP10.INT_LIMIT);
    this.regEX = sign + Math.trunc(ext / 2);
    return dst;
};

/**
 * split72(res, ext, fExternal)
 *
 * Returns two 36-bit values with matching sign bits from a unified 72-bit result.
 *
 * @this {CPUStatePDP10}
 * @param {number} res (36-bit value)
 * @param {number} ext (36-bit value)
 * @param {boolean} [fExternal] (true if external caller; avoids modifying the CPU state)
 * @returns {number} (returns the upper 36 bits; the lower 36 bits are stored in regEX)
 */
PDP10.split72 = function(res, ext, fExternal)
{
    /*
     * We just produced a signed 72-bit result, whereas the PDP-10 stores 72-bit arithmetic values as two
     * signed 36-bit results with matching signs.  Since that's effectively only 70 bits of magnitude (with
     * two sign bits), we lose one bit of magnitude.
     *
     * The conversion requires shifting ext left one bit so that we can move the high bit of res into the
     * low bit of ext, and then set the sign bit of res to match the sign bit of ext.
     */
    var sign = ext - (ext % PDP10.INT_LIMIT);
    ext = ((ext * 2) % PDP10.WORD_LIMIT) + Math.trunc(res / PDP10.INT_LIMIT);
    res = sign + (res % PDP10.INT_LIMIT);

    var signNew = ext - (ext % PDP10.INT_LIMIT);
    if (signNew != sign) {
        /*
         * I used to restore ext's original sign (ext = sign + (ext - signNew)), but the PDP-10's defined
         * behavior for multiplication overflow (ie, whenever both operands are 0o400000000000) is to set both
         * res and ext to 0o400000000000.
         *
         * To quote the original spec for the MUL instruction:
         *
         *      If both operands are -2^35 set Overflow; the double length result stored is -2^70.
         */
        res = ext;
    }

    if (fExternal) return res;

    if (res == PDP10.INT_LIMIT && ext == PDP10.INT_LIMIT) {
        this.regPS |= PDP10.PSFLAG.AROV;
    }
    this.regEX = res;
    return ext;
};

/**
 * setAddFlags(dst, src, res)
 *
 * @this {CPUStatePDP10}
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @param {number} res (36-bit value)
 */
PDP10.setAddFlags = function(dst, src, res)
{
    /*
     * Isolate the top two bits of dst, src, and res by "shifting" them into bits 0 and 1 of the
     * following variables.  Note that shifting with division only works when the values are unsigned
     * (which they MUST be).
     */
    Component.assert(dst >= 0 && src >= 0 && res >= 0);
    var dst01 = Math.trunc(dst / PDP10.TWO_POW34);
    var src01 = Math.trunc(src / PDP10.TWO_POW34);
    var res01 = Math.trunc(res / PDP10.TWO_POW34);

    /*
     * Transform bits 0 and 1 into carry flags, based on the following truth table:
     *
     *      D   S   R   C   Carry?
     *      -   -   -   -   ------
     *      0   0   0   0   no
     *      0   0   1   0   no (there must have been a carry out of the preceding bit, but it was "absorbed")
     *      0   1   0   1   yes (there must have been a carry out of the preceding bit, but it was NOT "absorbed")
     *      0   1   1   0   no
     *      1   0   0   1   yes (same as the preceding "yes" case)
     *      1   0   1   0   no
     *      1   1   0   1   yes (since the addition of two ones must always produce a carry)
     *      1   1   1   1   yes (since the addition of two ones must always produce a carry)
     */
    var bitsCarry = (dst01 ^ ((dst01 ^ src01) & (src01 ^ res01)));
    var fCarry0 = bitsCarry & 0b10;
    var fCarry1 = bitsCarry & 0b01;

    /*
     * Similarly, we transform bit 1 into an overflow flag, based on the following truth table;
     * note that X is (D ^ R) and Y is (S ^ R):
     *
     *      D   S   R   X   Y   O   Overflow?
     *      -   -   -   -   -   -   ---------
     *      0   0   0   0   0   0   no
     *      0   0   1   1   1   1   yes (adding two positive values yielded a negative value)
     *      0   1   0   0   1   0   no
     *      0   1   1   1   0   0   no
     *      1   0   0   1   0   0   no
     *      1   0   1   0   1   0   no
     *      1   1   0   1   1   1   yes (adding two negative values yielded a positive value)
     *      1   1   1   0   0   0   no
     */
    var fOverflow = ((dst01 ^ res01) & (src01 ^ res01)) & 0b10;
    this.regPS |= (fCarry0? PDP10.PSFLAG.CRY0 : 0) | (fCarry1? PDP10.PSFLAG.CRY1 : 0) | (fOverflow? PDP10.PSFLAG.AROV : 0);
};

/**
 * AND(dst, src)
 *
 * Performs the logical "and" (AND) of two 36-bit operands.
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst & src)
 */
PDP10.AND = function(dst, src)
{
    /*
     * Since dst and src are 36-bit values, we must AND the low 32 bits separately from the higher bits,
     * and then combine them with addition.  Since all bits above 36 will be zero, and since 0 AND 0 is 0,
     * no special masking for the higher bits is required.
     *
     * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
     * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
     * positive.
     *
     * Finally, all 36-bit data within a PDP-10 machine should ALWAYS be unsigned, which we now assert,
     * because the divisions below would not yield correct results with negative inputs.
     */
    Component.assert(dst >= 0 && src >= 0);
    return ((((dst / PDP10.TWO_POW32)|0) & ((src / PDP10.TWO_POW32)|0)) * PDP10.TWO_POW32) + ((dst & src) >>> 0);
};

/**
 * CLR(dst, src)
 *
 * Performs the logical "and" (AND) of a 36-bit operand and its complement.
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst & ~src)
 */
PDP10.CLR = function(dst, src)
{
    return PDP10.AND(dst, PDP10.NOT(src));
};

/**
 * CMP(dst, src)
 *
 * Performs the SIGNED comparison (CMP) of two 36-bit operands.
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst - src)
 */
PDP10.CMP = function(dst, src)
{
    return (dst < PDP10.INT_LIMIT? dst : dst - PDP10.WORD_LIMIT) - (src < PDP10.INT_LIMIT? src : src - PDP10.WORD_LIMIT);
};

/**
 * EQV(dst, src)
 *
 * Performs the logical "equivalence" (EQV) of two 36-bit operands (ie, NOT XOR)
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (~(dst ^ src))
 */
PDP10.EQV = function(dst, src)
{
    /*
     * Since dst and src are 36-bit values, we must EQV the low 32 bits separately from the higher bits,
     * and then combine them with addition.  Since all bits above 36 will be zero, and since 0 EQV 0 is 1,
     * we must mask the higher 4 bits with 0o17.
     *
     * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
     * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
     * positive.
     *
     * Finally, all 36-bit data within a PDP-10 machine should ALWAYS be unsigned, which we now assert,
     * because the divisions below would not yield correct results with negative inputs.
     */
    Component.assert(dst >= 0 && src >= 0);
    return ((~(((dst / PDP10.TWO_POW32)|0) ^ ((src / PDP10.TWO_POW32)|0)) & 0o17) * PDP10.TWO_POW32) + (~(dst ^ src) >>> 0);
};

/**
 * IOR(dst, src)
 *
 * Performs the logical "inclusive-or" (OR) of two 36-bit operands.
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst | src)
 */
PDP10.IOR = function(dst, src)
{
    /*
     * Since dst and src are 36-bit values, we must OR the low 32 bits separately from the higher bits,
     * and then combine them with addition.  Since all bits above 36 will be zero, and since 0 OR 0 is 0,
     * no special masking for the higher bits is required.
     *
     * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
     * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
     * positive.
     *
     * Finally, all 36-bit data within a PDP-10 machine should ALWAYS be unsigned, which we now assert,
     * because the divisions below would not yield correct results with negative inputs.
     */
    Component.assert(dst >= 0 && src >= 0);
    return ((((dst / PDP10.TWO_POW32)|0) | ((src / PDP10.TWO_POW32)|0)) * PDP10.TWO_POW32) + ((dst | src) >>> 0);
};

/**
 * NOT(src)
 *
 * Performs the one's complement (NOT) of a 36-bit operand.
 *
 * @param {number} src (36-bit value)
 * @returns {number} (~src)
 */
PDP10.NOT = function(src)
{
    /*
     * Since src is a 36-bit value, we must NOT the low 32 bits separately from the higher bits,
     * and then combine them with addition.  Since all bits above 36 will be zero, and since ~0 is 1,
     * we must mask the higher 4 bits with 0o17.
     *
     * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
     * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
     * positive.
     *
     * Finally, all 36-bit data within a PDP-10 machine should ALWAYS be unsigned, which we now assert,
     * because the divisions below would not yield correct results with negative inputs.
     */
    Component.assert(src >= 0);
    return ((~((src / PDP10.TWO_POW32)|0) & 0o17) * PDP10.TWO_POW32) + (~src >>> 0);
};

/**
 * SIGN(dst)
 *
 * Returns the signed form of the 36-bit operand; more efficient than doCMP(dst, 0).
 *
 * @param {number} dst (36-bit value)
 * @returns {number}
 */
PDP10.SIGN = function(dst)
{
    return (dst < PDP10.INT_LIMIT? dst : dst - PDP10.WORD_LIMIT);
};

/**
 * XOR(dst, src)
 *
 * Performs the logical "exclusive-or" (XOR) of two 36-bit operands.
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @returns {number} (dst ^ src)
 */
PDP10.XOR = function(dst, src)
{
    /*
     * Since dst and src are 36-bit values, we must XOR the low 32 bits separately from the higher bits,
     * and then combine them with addition.  Since all bits above 36 will be zero, and since 0 XOR 0 is 0,
     * no special masking for the higher bits is required.
     *
     * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
     * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
     * positive.
     *
     * Finally, all 36-bit data within a PDP-10 machine should ALWAYS be unsigned, which we now assert,
     * because the divisions below would not yield correct results with negative inputs.
     */
    Component.assert(dst >= 0 && src >= 0);
    return ((((dst / PDP10.TWO_POW32)|0) ^ ((src / PDP10.TWO_POW32)|0)) * PDP10.TWO_POW32) + ((dst ^ src) >>> 0);
};

/**
 * SWAP(src)
 *
 * Used by callers to "swap" the left and right half-words of a 36-bit operand.
 *
 * NOTE: Since HALF_MASK is an 18-bit value, it's safe to use "&" with HALF_MASK (equivalent to "%" with HALF_SHIFT).
 *
 * @param {number} src
 * @returns {number} (updated src)
 */
PDP10.SWAP = function(src)
{
    return ((src / PDP10.HALF_SHIFT)|0) + ((src & PDP10.HALF_MASK) * PDP10.HALF_SHIFT);
};

/**
 * GETHL(op, dst, src)
 *
 * Used by callers to obtain HL (half-word left) with HR (half-word right) zeroed.
 *
 * @param {number} op
 * @param {number} dst (36-bit value whose 18-bit left half is either preserved or modified)
 * @param {number} src (18-bit value used to determine the sign extension, if any, for the left half of dst)
 * @returns {number} (updated dst)
 */
PDP10.GETHL = function(op, dst, src)
{
    switch(op & 0o600) {
    case 0o000:
        dst -= (dst & PDP10.HALF_MASK);
        break;
    case 0o200:
        dst = 0;
        break;
    case 0o400:
        dst = (PDP10.HALF_MASK * PDP10.HALF_SHIFT);
        break;
    case 0o600:
        dst = (src > PDP10.HINT_MASK? (PDP10.HALF_MASK * PDP10.HALF_SHIFT) : 0);
        break;
    }
    return dst;
};

/**
 * SETHL(op, dst, src)
 *
 * Used by callers to obtain HL (half-word left) with HR (half-word right) preserved.
 *
 * @param {number} op
 * @param {number} dst (36-bit value whose 18-bit left half is either preserved or modified)
 * @param {number} src (18-bit value used to determine the sign extension, if any, for the left half of dst)
 * @returns {number} (updated dst)
 */
PDP10.SETHL = function(op, dst, src)
{
    if ((op &= 0o600)) {
        dst &= PDP10.HALF_MASK;
        switch(op) {
        case 0o400:
            dst += (PDP10.HALF_MASK * PDP10.HALF_SHIFT);
            break;
        case 0o600:
            dst += (src > PDP10.HINT_MASK? (PDP10.HALF_MASK * PDP10.HALF_SHIFT) : 0);
            break;
        }
    }
    return dst;
};

/**
 * GETHR(op, dst, src)
 *
 * Used by callers to obtain HR (half-word right) with HL (half-word left) zeroed.
 *
 * @param {number} op
 * @param {number} dst (36-bit value whose 18-bit right half is either preserved or modified)
 * @param {number} src (36-bit value used to determine the sign extension, if any, for the right half of dst)
 * @returns {number} (updated dst)
 */
PDP10.GETHR = function(op, dst, src)
{
    switch(op & 0o600) {
    case 0o000:
        dst = (dst & PDP10.HALF_MASK);
        break;
    case 0o200:
        dst = 0;
        break;
    case 0o400:
        dst = PDP10.HALF_MASK;
        break;
    case 0o600:
        dst = (src > PDP10.INT_MASK? PDP10.HALF_MASK : 0);
        break;
    }
    return dst;
};

/**
 * SETHR(op, dst, src)
 *
 * Used by callers to obtain HR (half-word right) with HL (half-word left) preserved.
 *
 * @param {number} op
 * @param {number} dst (36-bit value whose 18-bit right half is either preserved or modified)
 * @param {number} src (36-bit value used to determine the sign extension, if any, for the right half of dst)
 * @returns {number} (updated dst)
 */
PDP10.SETHR = function(op, dst, src)
{
    if ((op &= 0o600)) {
        dst -= (dst & PDP10.HALF_MASK);
        switch(op) {
        case 0o400:
            dst += PDP10.HALF_MASK;
            break;
        case 0o600:
            dst += (src > PDP10.INT_MASK? PDP10.HALF_MASK : 0);
            break;
        }
    }
    return dst;
};

/**
 * ADDD(dDst, dSrc)
 *
 * Adds a double-length value (dSrc) to another (dDst).
 *
 * @param {Array.<number>} dDst
 * @param {Array.<number>} dSrc
 */
PDP10.ADDD = function(dDst, dSrc)
{
    dDst[0] += dSrc[0];
    dDst[1] += dSrc[1];
    if (dDst[0] >= PDP10.WORD_LIMIT) {
        dDst[0] %= PDP10.WORD_LIMIT;
        dDst[1]++;
    }
};

/**
 * CMPD(dDst, dSrc)
 *
 * Compares double-length values (dDst and dSrc) by computing dDst - dSrc.
 *
 * @param {Array.<number>} dDst
 * @param {Array.<number>} dSrc
 * @returns {number} > 0 if dDst > dSrc, == 0 if dDst == dSrc, < 0 if dDst < dSrc
 */
PDP10.CMPD = function(dDst, dSrc)
{
    var result = dDst[1] - dSrc[1];
    if (!result) result = dDst[0] - dSrc[0];
    return result;
};

/**
 * INITD(dDst, lo, hi)
 *
 * Initializes a double-length value (dDst).
 *
 * @param {Array.<number>} dDst
 * @param {number} lo
 * @param {number} hi
 */
PDP10.INITD = function(dDst, lo, hi)
{
    dDst[0] = lo;
    dDst[1] = hi;
};

/**
 * SHRD(dDst)
 *
 * Shifts a double-length value (dDst) right one bit.
 *
 * @param {Array.<number>} dDst
 */
PDP10.SHRD = function(dDst)
{
    if (dDst[1] % 2) {
        dDst[0] += PDP10.WORD_LIMIT;
    }
    dDst[0] = Math.trunc(dDst[0] / 2);
    dDst[1] = Math.trunc(dDst[1] / 2);
};

/**
 * SUBD(dDst, dSrc)
 *
 * Subtracts a double-length value (dSrc) from another (dDst).
 *
 * @param {Array.<number>} dDst
 * @param {Array.<number>} dSrc
 */
PDP10.SUBD = function(dDst, dSrc)
{
    dDst[0] -= dSrc[0];
    dDst[1] -= dSrc[1];
    if (dDst[0] < 0) {
        dDst[0] += PDP10.WORD_LIMIT;
        dDst[1]--;
    }
};

/**
 * ZEROD(d)
 *
 * True if all bits in the double-length value (d) are zero, false otherwise.
 *
 * @param {Array.<number>} d
 * @returns {boolean}
 */
PDP10.ZEROD = function(d)
{
    return !d[0] && !d[1];
};

/*
 * If we want the basic half-word operations to handle all the sub-operations; ie:
 *
 *      None
 *      Zero-extend
 *      One-extend
 *      Sign-extend
 *
 * then we need to alias all the sub-functions to the corresponding primary functions.
 */
PDP10.opHLLZ    = PDP10.opHLL;
PDP10.opHLLZI   = PDP10.opHLLI;
PDP10.opHLLZM   = PDP10.opHLLM;
PDP10.opHLLZS   = PDP10.opHLLS;
PDP10.opHLLO    = PDP10.opHLL;
PDP10.opHLLOI   = PDP10.opHLLI;
PDP10.opHLLOM   = PDP10.opHLLM;
PDP10.opHLLOS   = PDP10.opHLLS;
PDP10.opHLLE    = PDP10.opHLL;
PDP10.opHLLEI   = PDP10.opHLLI;
PDP10.opHLLEM   = PDP10.opHLLM;
PDP10.opHLLES   = PDP10.opHLLS;
PDP10.opHRLZ    = PDP10.opHRL;
PDP10.opHRLZI   = PDP10.opHRLI;
PDP10.opHRLZM   = PDP10.opHRLM;
PDP10.opHRLZS   = PDP10.opHRLS;
PDP10.opHRLO    = PDP10.opHRL;
PDP10.opHRLOI   = PDP10.opHRLI;
PDP10.opHRLOM   = PDP10.opHRLM;
PDP10.opHRLOS   = PDP10.opHRLS;
PDP10.opHRLE    = PDP10.opHRL;
PDP10.opHRLEI   = PDP10.opHRLI;
PDP10.opHRLEM   = PDP10.opHRLM;
PDP10.opHRLES   = PDP10.opHRLS;
PDP10.opHRRZ    = PDP10.opHRR;
PDP10.opHRRZI   = PDP10.opHRRI;
PDP10.opHRRZM   = PDP10.opHRRM;
PDP10.opHRRZS   = PDP10.opHRRS;
PDP10.opHRRO    = PDP10.opHRR;
PDP10.opHRROI   = PDP10.opHRRI;
PDP10.opHRROM   = PDP10.opHRRM;
PDP10.opHRROS   = PDP10.opHRRS;
PDP10.opHRRE    = PDP10.opHRR;
PDP10.opHRREI   = PDP10.opHRRI;
PDP10.opHRREM   = PDP10.opHRRM;
PDP10.opHRRES   = PDP10.opHRRS;
PDP10.opHLRZ    = PDP10.opHLR;
PDP10.opHLRZI   = PDP10.opHLRI;
PDP10.opHLRZM   = PDP10.opHLRM;
PDP10.opHLRZS   = PDP10.opHLRS;
PDP10.opHLRO    = PDP10.opHLR;
PDP10.opHLROI   = PDP10.opHLRI;
PDP10.opHLROM   = PDP10.opHLRM;
PDP10.opHLROS   = PDP10.opHLRS;
PDP10.opHLRE    = PDP10.opHLR;
PDP10.opHLREI   = PDP10.opHLRI;
PDP10.opHLREM   = PDP10.opHLRM;
PDP10.opHLRES   = PDP10.opHLRS;

PDP10.opSETZI   = PDP10.opSETZ;
PDP10.opSETOI   = PDP10.opSETO;
PDP10.opSETCAI  = PDP10.opSETCA;
PDP10.opSETA    = PDP10.opNOP;
PDP10.opSETAI   = PDP10.opNOP;
PDP10.opSETAM   = PDP10.opMOVEM;
PDP10.opSETAB   = PDP10.opMOVEM;
PDP10.opSETM    = PDP10.opMOVE;
PDP10.opSETMI   = PDP10.opMOVEI;
PDP10.opSETMM   = PDP10.opNOPM;
PDP10.opSETMB   = PDP10.opMOVE;
PDP10.opCAI     = PDP10.opNOP;
PDP10.opCAM     = PDP10.opNOPM;
PDP10.opJUMP    = PDP10.opNOP;
PDP10.opTRN     = PDP10.opNOP;
PDP10.opTLN     = PDP10.opNOP;
PDP10.opTDN     = PDP10.opNOPM;
PDP10.opTSN     = PDP10.opNOPM;

PDP10.aOpXXX_KA10 = [
    PDP10.opUUO,                // 0o000xxx
    PDP10.opUUO,                // 0o001xxx
    PDP10.opUUO,                // 0o002xxx
    PDP10.opUUO,                // 0o003xxx
    PDP10.opUUO,                // 0o004xxx
    PDP10.opUUO,                // 0o005xxx
    PDP10.opUUO,                // 0o006xxx
    PDP10.opUUO,                // 0o007xxx
    PDP10.opUUO,                // 0o010xxx
    PDP10.opUUO,                // 0o011xxx
    PDP10.opUUO,                // 0o012xxx
    PDP10.opUUO,                // 0o013xxx
    PDP10.opUUO,                // 0o014xxx
    PDP10.opUUO,                // 0o015xxx
    PDP10.opUUO,                // 0o016xxx
    PDP10.opUUO,                // 0o017xxx
    PDP10.opUUO,                // 0o020xxx
    PDP10.opUUO,                // 0o021xxx
    PDP10.opUUO,                // 0o022xxx
    PDP10.opUUO,                // 0o023xxx
    PDP10.opUUO,                // 0o024xxx
    PDP10.opUUO,                // 0o025xxx
    PDP10.opUUO,                // 0o026xxx
    PDP10.opUUO,                // 0o027xxx
    PDP10.opUUO,                // 0o030xxx
    PDP10.opUUO,                // 0o031xxx
    PDP10.opUUO,                // 0o032xxx
    PDP10.opUUO,                // 0o033xxx
    PDP10.opUUO,                // 0o034xxx
    PDP10.opUUO,                // 0o035xxx
    PDP10.opUUO,                // 0o036xxx
    PDP10.opUUO,                // 0o037xxx
    PDP10.opUUO,                // 0o040xxx
    PDP10.opUUO,                // 0o041xxx
    PDP10.opUUO,                // 0o042xxx
    PDP10.opUUO,                // 0o043xxx
    PDP10.opUUO,                // 0o044xxx
    PDP10.opUUO,                // 0o045xxx
    PDP10.opUUO,                // 0o046xxx
    PDP10.opUUO,                // 0o047xxx
    PDP10.opUUO,                // 0o050xxx
    PDP10.opUUO,                // 0o051xxx
    PDP10.opUUO,                // 0o052xxx
    PDP10.opUUO,                // 0o053xxx
    PDP10.opUUO,                // 0o054xxx
    PDP10.opUUO,                // 0o055xxx
    PDP10.opUUO,                // 0o056xxx
    PDP10.opUUO,                // 0o057xxx
    PDP10.opUUO,                // 0o060xxx
    PDP10.opUUO,                // 0o061xxx
    PDP10.opUUO,                // 0o062xxx
    PDP10.opUUO,                // 0o063xxx
    PDP10.opUUO,                // 0o064xxx
    PDP10.opUUO,                // 0o065xxx
    PDP10.opUUO,                // 0o066xxx
    PDP10.opUUO,                // 0o067xxx
    PDP10.opUUO,                // 0o070xxx
    PDP10.opUUO,                // 0o071xxx
    PDP10.opUUO,                // 0o072xxx
    PDP10.opUUO,                // 0o073xxx
    PDP10.opUUO,                // 0o074xxx
    PDP10.opUUO,                // 0o075xxx
    PDP10.opUUO,                // 0o076xxx
    PDP10.opUUO,                // 0o077xxx
    PDP10.opUndefined,          // 0o100xxx
    PDP10.opUndefined,          // 0o101xxx
    PDP10.opUndefined,          // 0o102xxx
    PDP10.opUndefined,          // 0o103xxx
    PDP10.opUndefined,          // 0o104xxx
    PDP10.opUndefined,          // 0o105xxx
    PDP10.opUndefined,          // 0o106xxx
    PDP10.opUndefined,          // 0o107xxx
    PDP10.opUndefined,          // 0o110xxx
    PDP10.opUndefined,          // 0o111xxx
    PDP10.opUndefined,          // 0o112xxx
    PDP10.opUndefined,          // 0o113xxx
    PDP10.opUndefined,          // 0o114xxx
    PDP10.opUndefined,          // 0o115xxx
    PDP10.opUndefined,          // 0o116xxx
    PDP10.opUndefined,          // 0o117xxx
    PDP10.opUndefined,          // 0o120xxx
    PDP10.opUndefined,          // 0o121xxx
    PDP10.opUndefined,          // 0o122xxx
    PDP10.opUndefined,          // 0o123xxx
    PDP10.opUndefined,          // 0o124xxx
    PDP10.opUndefined,          // 0o125xxx
    PDP10.opUndefined,          // 0o126xxx
    PDP10.opUndefined,          // 0o127xxx
    PDP10.opUFA,                // 0o130xxx
    PDP10.opDFN,                // 0o131xxx
    PDP10.opFSC,                // 0o132xxx
    PDP10.opIBP,                // 0o133xxx
    PDP10.opILDB,               // 0o134xxx
    PDP10.opLDB,                // 0o135xxx
    PDP10.opIDPB,               // 0o136xxx
    PDP10.opDPB,                // 0o137xxx
    PDP10.opFAD,                // 0o140xxx
    PDP10.opFADI,               // 0o141xxx
    PDP10.opFADM,               // 0o142xxx
    PDP10.opFADB,               // 0o143xxx
    PDP10.opFADR,               // 0o144xxx
    PDP10.opFADRI,              // 0o145xxx
    PDP10.opFADRM,              // 0o146xxx
    PDP10.opFADRB,              // 0o147xxx
    PDP10.opFSB,                // 0o150xxx
    PDP10.opFSBI,               // 0o151xxx
    PDP10.opFSBM,               // 0o152xxx
    PDP10.opFSBB,               // 0o153xxx
    PDP10.opFSBR,               // 0o154xxx
    PDP10.opFSBRI,              // 0o155xxx
    PDP10.opFSBRM,              // 0o156xxx
    PDP10.opFSBRB,              // 0o157xxx
    PDP10.opFMP,                // 0o160xxx
    PDP10.opFMPI,               // 0o161xxx
    PDP10.opFMPM,               // 0o162xxx
    PDP10.opFMPB,               // 0o163xxx
    PDP10.opFMPR,               // 0o164xxx
    PDP10.opFMPRI,              // 0o165xxx
    PDP10.opFMPRM,              // 0o166xxx
    PDP10.opFMPRB,              // 0o167xxx
    PDP10.opFDV,                // 0o170xxx
    PDP10.opFDVI,               // 0o171xxx
    PDP10.opFDVM,               // 0o172xxx
    PDP10.opFDVB,               // 0o173xxx
    PDP10.opFDVR,               // 0o174xxx
    PDP10.opFDVRI,              // 0o175xxx
    PDP10.opFDVRM,              // 0o176xxx
    PDP10.opFDVRB,              // 0o177xxx
    PDP10.opMOVE,               // 0o200xxx
    PDP10.opMOVEI,              // 0o201xxx
    PDP10.opMOVEM,              // 0o202xxx
    PDP10.opMOVES,              // 0o203xxx
    PDP10.opMOVS,               // 0o204xxx
    PDP10.opMOVSI,              // 0o205xxx
    PDP10.opMOVSM,              // 0o206xxx
    PDP10.opMOVSS,              // 0o207xxx
    PDP10.opMOVN,               // 0o210xxx
    PDP10.opMOVNI,              // 0o211xxx
    PDP10.opMOVNM,              // 0o212xxx
    PDP10.opMOVNS,              // 0o213xxx
    PDP10.opMOVM,               // 0o214xxx
    PDP10.opMOVMI,              // 0o215xxx
    PDP10.opMOVMM,              // 0o216xxx
    PDP10.opMOVMS,              // 0o217xxx
    PDP10.opIMUL,               // 0o220xxx
    PDP10.opIMULI,              // 0o221xxx
    PDP10.opIMULM,              // 0o222xxx
    PDP10.opIMULB,              // 0o223xxx
    PDP10.opMUL,                // 0o224xxx
    PDP10.opMULI,               // 0o225xxx
    PDP10.opMULM,               // 0o226xxx
    PDP10.opMULB,               // 0o227xxx
    PDP10.opIDIV,               // 0o230xxx
    PDP10.opIDIVI,              // 0o231xxx
    PDP10.opIDIVM,              // 0o232xxx
    PDP10.opIDIVB,              // 0o233xxx
    PDP10.opDIV,                // 0o234xxx
    PDP10.opDIVI,               // 0o235xxx
    PDP10.opDIVM,               // 0o236xxx
    PDP10.opDIVB,               // 0o237xxx
    PDP10.opASH,                // 0o240xxx
    PDP10.opROT,                // 0o241xxx
    PDP10.opLSH,                // 0o242xxx
    PDP10.opJFFO,               // 0o243xxx
    PDP10.opASHC,               // 0o244xxx
    PDP10.opROTC,               // 0o245xxx
    PDP10.opLSHC,               // 0o246xxx
    PDP10.opUndefined,          // 0o247xxx
    PDP10.opEXCH,               // 0o250xxx
    PDP10.opBLT,                // 0o251xxx
    PDP10.opAOBJP,              // 0o252xxx
    PDP10.opAOBJN,              // 0o253xxx
    PDP10.opJRST,               // 0o254xxx
    PDP10.opJFCL,               // 0o255xxx
    PDP10.opXCT,                // 0o256xxx
    PDP10.opUndefined,          // 0o257xxx
    PDP10.opPUSHJ,              // 0o260xxx
    PDP10.opPUSH,               // 0o261xxx
    PDP10.opPOP,                // 0o262xxx
    PDP10.opPOPJ,               // 0o263xxx
    PDP10.opJSR,                // 0o264xxx
    PDP10.opJSP,                // 0o265xxx
    PDP10.opJSA,                // 0o266xxx
    PDP10.opJRA,                // 0o267xxx
    PDP10.opADD,                // 0o270xxx
    PDP10.opADDI,               // 0o271xxx
    PDP10.opADDM,               // 0o272xxx
    PDP10.opADDB,               // 0o273xxx
    PDP10.opSUB,                // 0o274xxx
    PDP10.opSUBI,               // 0o275xxx
    PDP10.opSUBM,               // 0o276xxx
    PDP10.opSUBB,               // 0o277xxx
    PDP10.opCAI,                // 0o300xxx
    PDP10.opCAIL,               // 0o301xxx
    PDP10.opCAIE,               // 0o302xxx
    PDP10.opCAILE,              // 0o303xxx
    PDP10.opCAIA,               // 0o304xxx
    PDP10.opCAIGE,              // 0o305xxx
    PDP10.opCAIN,               // 0o306xxx
    PDP10.opCAIG,               // 0o307xxx
    PDP10.opCAM,                // 0o310xxx
    PDP10.opCAML,               // 0o311xxx
    PDP10.opCAME,               // 0o312xxx
    PDP10.opCAMLE,              // 0o313xxx
    PDP10.opCAMA,               // 0o314xxx
    PDP10.opCAMGE,              // 0o315xxx
    PDP10.opCAMN,               // 0o316xxx
    PDP10.opCAMG,               // 0o317xxx
    PDP10.opJUMP,               // 0o320xxx
    PDP10.opJUMPL,              // 0o321xxx
    PDP10.opJUMPE,              // 0o322xxx
    PDP10.opJUMPLE,             // 0o323xxx
    PDP10.opJUMPA,              // 0o324xxx
    PDP10.opJUMPGE,             // 0o325xxx
    PDP10.opJUMPN,              // 0o326xxx
    PDP10.opJUMPG,              // 0o327xxx
    PDP10.opSKIP,               // 0o330xxx
    PDP10.opSKIPL,              // 0o331xxx
    PDP10.opSKIPE,              // 0o332xxx
    PDP10.opSKIPLE,             // 0o333xxx
    PDP10.opSKIPA,              // 0o334xxx
    PDP10.opSKIPGE,             // 0o335xxx
    PDP10.opSKIPN,              // 0o336xxx
    PDP10.opSKIPG,              // 0o337xxx
    PDP10.opAOJ,                // 0o340xxx
    PDP10.opAOJL,               // 0o341xxx
    PDP10.opAOJE,               // 0o342xxx
    PDP10.opAOJLE,              // 0o343xxx
    PDP10.opAOJA,               // 0o344xxx
    PDP10.opAOJGE,              // 0o345xxx
    PDP10.opAOJN,               // 0o346xxx
    PDP10.opAOJG,               // 0o347xxx
    PDP10.opAOS,                // 0o350xxx
    PDP10.opAOSL,               // 0o351xxx
    PDP10.opAOSE,               // 0o352xxx
    PDP10.opAOSLE,              // 0o353xxx
    PDP10.opAOSA,               // 0o354xxx
    PDP10.opAOSGE,              // 0o355xxx
    PDP10.opAOSN,               // 0o356xxx
    PDP10.opAOSG,               // 0o357xxx
    PDP10.opSOJ,                // 0o360xxx
    PDP10.opSOJL,               // 0o361xxx
    PDP10.opSOJE,               // 0o362xxx
    PDP10.opSOJLE,              // 0o363xxx
    PDP10.opSOJA,               // 0o364xxx
    PDP10.opSOJGE,              // 0o365xxx
    PDP10.opSOJN,               // 0o366xxx
    PDP10.opSOJG,               // 0o367xxx
    PDP10.opSOS,                // 0o370xxx
    PDP10.opSOSL,               // 0o371xxx
    PDP10.opSOSE,               // 0o372xxx
    PDP10.opSOSLE,              // 0o373xxx
    PDP10.opSOSA,               // 0o374xxx
    PDP10.opSOSGE,              // 0o375xxx
    PDP10.opSOSN,               // 0o376xxx
    PDP10.opSOSG,               // 0o377xxx
    PDP10.opSETZ,               // 0o400xxx
    PDP10.opSETZI,              // 0o401xxx
    PDP10.opSETZM,              // 0o402xxx
    PDP10.opSETZB,              // 0o403xxx
    PDP10.opAND,                // 0o404xxx
    PDP10.opANDI,               // 0o405xxx
    PDP10.opANDM,               // 0o406xxx
    PDP10.opANDB,               // 0o407xxx
    PDP10.opANDCA,              // 0o410xxx
    PDP10.opANDCAI,             // 0o411xxx
    PDP10.opANDCAM,             // 0o412xxx
    PDP10.opANDCAB,             // 0o413xxx
    PDP10.opSETM,               // 0o414xxx
    PDP10.opSETMI,              // 0o415xxx
    PDP10.opSETMM,              // 0o416xxx
    PDP10.opSETMB,              // 0o417xxx
    PDP10.opANDCM,              // 0o420xxx
    PDP10.opANDCMI,             // 0o421xxx
    PDP10.opANDCMM,             // 0o422xxx
    PDP10.opANDCMB,             // 0o423xxx
    PDP10.opSETA,               // 0o424xxx
    PDP10.opSETAI,              // 0o425xxx
    PDP10.opSETAM,              // 0o426xxx
    PDP10.opSETAB,              // 0o427xxx
    PDP10.opXOR,                // 0o430xxx
    PDP10.opXORI,               // 0o431xxx
    PDP10.opXORM,               // 0o432xxx
    PDP10.opXORB,               // 0o433xxx
    PDP10.opIOR,                // 0o434xxx
    PDP10.opIORI,               // 0o435xxx
    PDP10.opIORM,               // 0o436xxx
    PDP10.opIORB,               // 0o437xxx
    PDP10.opANDCB,              // 0o440xxx
    PDP10.opANDCBI,             // 0o441xxx
    PDP10.opANDCBM,             // 0o442xxx
    PDP10.opANDCBB,             // 0o443xxx
    PDP10.opEQV,                // 0o444xxx
    PDP10.opEQVI,               // 0o445xxx
    PDP10.opEQVM,               // 0o446xxx
    PDP10.opEQVB,               // 0o447xxx
    PDP10.opSETCA,              // 0o450xxx
    PDP10.opSETCAI,             // 0o451xxx
    PDP10.opSETCAM,             // 0o452xxx
    PDP10.opSETCAB,             // 0o453xxx
    PDP10.opORCA,               // 0o454xxx
    PDP10.opORCAI,              // 0o455xxx
    PDP10.opORCAM,              // 0o456xxx
    PDP10.opORCAB,              // 0o457xxx
    PDP10.opSETCM,              // 0o460xxx
    PDP10.opSETCMI,             // 0o461xxx
    PDP10.opSETCMM,             // 0o462xxx
    PDP10.opSETCMB,             // 0o463xxx
    PDP10.opORCM,               // 0o464xxx
    PDP10.opORCMI,              // 0o465xxx
    PDP10.opORCMM,              // 0o466xxx
    PDP10.opORCMB,              // 0o467xxx
    PDP10.opORCB,               // 0o470xxx
    PDP10.opORCBI,              // 0o471xxx
    PDP10.opORCBM,              // 0o472xxx
    PDP10.opORCBB,              // 0o473xxx
    PDP10.opSETO,               // 0o474xxx
    PDP10.opSETOI,              // 0o475xxx
    PDP10.opSETOM,              // 0o476xxx
    PDP10.opSETOB,              // 0o477xxx
    PDP10.opHLL,                // 0o500xxx
    PDP10.opHLLI,               // 0o501xxx
    PDP10.opHLLM,               // 0o502xxx
    PDP10.opHLLS,               // 0o503xxx
    PDP10.opHRL,                // 0o504xxx
    PDP10.opHRLI,               // 0o505xxx
    PDP10.opHRLM,               // 0o506xxx
    PDP10.opHRLS,               // 0o507xxx
    PDP10.opHLLZ,               // 0o510xxx
    PDP10.opHLLZI,              // 0o511xxx
    PDP10.opHLLZM,              // 0o512xxx
    PDP10.opHLLZS,              // 0o513xxx
    PDP10.opHRLZ,               // 0o514xxx
    PDP10.opHRLZI,              // 0o515xxx
    PDP10.opHRLZM,              // 0o516xxx
    PDP10.opHRLZS,              // 0o517xxx
    PDP10.opHLLO,               // 0o520xxx
    PDP10.opHLLOI,              // 0o521xxx
    PDP10.opHLLOM,              // 0o522xxx
    PDP10.opHLLOS,              // 0o523xxx
    PDP10.opHRLO,               // 0o524xxx
    PDP10.opHRLOI,              // 0o525xxx
    PDP10.opHRLOM,              // 0o526xxx
    PDP10.opHRLOS,              // 0o527xxx
    PDP10.opHLLE,               // 0o530xxx
    PDP10.opHLLEI,              // 0o531xxx
    PDP10.opHLLEM,              // 0o532xxx
    PDP10.opHLLES,              // 0o533xxx
    PDP10.opHRLE,               // 0o534xxx
    PDP10.opHRLEI,              // 0o535xxx
    PDP10.opHRLEM,              // 0o536xxx
    PDP10.opHRLES,              // 0o537xxx
    PDP10.opHRR,                // 0o540xxx
    PDP10.opHRRI,               // 0o541xxx
    PDP10.opHRRM,               // 0o542xxx
    PDP10.opHRRS,               // 0o543xxx
    PDP10.opHLR,                // 0o544xxx
    PDP10.opHLRI,               // 0o545xxx
    PDP10.opHLRM,               // 0o546xxx
    PDP10.opHLRS,               // 0o547xxx
    PDP10.opHRRZ,               // 0o550xxx
    PDP10.opHRRZI,              // 0o551xxx
    PDP10.opHRRZM,              // 0o552xxx
    PDP10.opHRRZS,              // 0o553xxx
    PDP10.opHLRZ,               // 0o554xxx
    PDP10.opHLRZI,              // 0o555xxx
    PDP10.opHLRZM,              // 0o556xxx
    PDP10.opHLRZS,              // 0o557xxx
    PDP10.opHRRO,               // 0o560xxx
    PDP10.opHRROI,              // 0o561xxx
    PDP10.opHRROM,              // 0o562xxx
    PDP10.opHRROS,              // 0o563xxx
    PDP10.opHLRO,               // 0o564xxx
    PDP10.opHLROI,              // 0o565xxx
    PDP10.opHLROM,              // 0o566xxx
    PDP10.opHLROS,              // 0o567xxx
    PDP10.opHRRE,               // 0o570xxx
    PDP10.opHRREI,              // 0o571xxx
    PDP10.opHRREM,              // 0o572xxx
    PDP10.opHRRES,              // 0o573xxx
    PDP10.opHLRE,               // 0o574xxx
    PDP10.opHLREI,              // 0o575xxx
    PDP10.opHLREM,              // 0o576xxx
    PDP10.opHLRES,              // 0o577xxx
    PDP10.opTRN,                // 0o600xxx
    PDP10.opTLN,                // 0o601xxx
    PDP10.opTRNE,               // 0o602xxx
    PDP10.opTLNE,               // 0o603xxx
    PDP10.opTRNA,               // 0o604xxx
    PDP10.opTLNA,               // 0o605xxx
    PDP10.opTRNN,               // 0o606xxx
    PDP10.opTLNN,               // 0o607xxx
    PDP10.opTDN,                // 0o610xxx
    PDP10.opTSN,                // 0o611xxx
    PDP10.opTDNE,               // 0o612xxx
    PDP10.opTSNE,               // 0o613xxx
    PDP10.opTDNA,               // 0o614xxx
    PDP10.opTSNA,               // 0o615xxx
    PDP10.opTDNN,               // 0o616xxx
    PDP10.opTSNN,               // 0o617xxx
    PDP10.opTRZ,                // 0o620xxx
    PDP10.opTLZ,                // 0o621xxx
    PDP10.opTRZE,               // 0o622xxx
    PDP10.opTLZE,               // 0o623xxx
    PDP10.opTRZA,               // 0o624xxx
    PDP10.opTLZA,               // 0o625xxx
    PDP10.opTRZN,               // 0o626xxx
    PDP10.opTLZN,               // 0o627xxx
    PDP10.opTDZ,                // 0o630xxx
    PDP10.opTSZ,                // 0o631xxx
    PDP10.opTDZE,               // 0o632xxx
    PDP10.opTSZE,               // 0o633xxx
    PDP10.opTDZA,               // 0o634xxx
    PDP10.opTSZA,               // 0o635xxx
    PDP10.opTDZN,               // 0o636xxx
    PDP10.opTSZN,               // 0o637xxx
    PDP10.opTRC,                // 0o640xxx
    PDP10.opTLC,                // 0o641xxx
    PDP10.opTRCE,               // 0o642xxx
    PDP10.opTLCE,               // 0o643xxx
    PDP10.opTRCA,               // 0o644xxx
    PDP10.opTLCA,               // 0o645xxx
    PDP10.opTRCN,               // 0o646xxx
    PDP10.opTLCN,               // 0o647xxx
    PDP10.opTDC,                // 0o650xxx
    PDP10.opTSC,                // 0o651xxx
    PDP10.opTDCE,               // 0o652xxx
    PDP10.opTSCE,               // 0o653xxx
    PDP10.opTDCA,               // 0o654xxx
    PDP10.opTSCA,               // 0o655xxx
    PDP10.opTDCN,               // 0o656xxx
    PDP10.opTSCN,               // 0o657xxx
    PDP10.opTRO,                // 0o660xxx
    PDP10.opTLO,                // 0o661xxx
    PDP10.opTROE,               // 0o662xxx
    PDP10.opTLOE,               // 0o663xxx
    PDP10.opTROA,               // 0o664xxx
    PDP10.opTLOA,               // 0o665xxx
    PDP10.opTRON,               // 0o666xxx
    PDP10.opTLON,               // 0o667xxx
    PDP10.opTDO,                // 0o670xxx
    PDP10.opTSO,                // 0o671xxx
    PDP10.opTDOE,               // 0o672xxx
    PDP10.opTSOE,               // 0o673xxx
    PDP10.opTDOA,               // 0o674xxx
    PDP10.opTSOA,               // 0o675xxx
    PDP10.opTDON,               // 0o676xxx
    PDP10.opTSON,               // 0o677xxx
    PDP10.opIO,                 // 0o700xxx
    PDP10.opIO,                 // 0o701xxx
    PDP10.opIO,                 // 0o702xxx
    PDP10.opIO,                 // 0o703xxx
    PDP10.opIO,                 // 0o704xxx
    PDP10.opIO,                 // 0o705xxx
    PDP10.opIO,                 // 0o706xxx
    PDP10.opIO,                 // 0o707xxx
    PDP10.opIO,                 // 0o710xxx
    PDP10.opIO,                 // 0o711xxx
    PDP10.opIO,                 // 0o712xxx
    PDP10.opIO,                 // 0o713xxx
    PDP10.opIO,                 // 0o714xxx
    PDP10.opIO,                 // 0o715xxx
    PDP10.opIO,                 // 0o716xxx
    PDP10.opIO,                 // 0o717xxx
    PDP10.opIO,                 // 0o720xxx
    PDP10.opIO,                 // 0o721xxx
    PDP10.opIO,                 // 0o722xxx
    PDP10.opIO,                 // 0o723xxx
    PDP10.opIO,                 // 0o724xxx
    PDP10.opIO,                 // 0o725xxx
    PDP10.opIO,                 // 0o726xxx
    PDP10.opIO,                 // 0o727xxx
    PDP10.opIO,                 // 0o730xxx
    PDP10.opIO,                 // 0o731xxx
    PDP10.opIO,                 // 0o732xxx
    PDP10.opIO,                 // 0o733xxx
    PDP10.opIO,                 // 0o734xxx
    PDP10.opIO,                 // 0o735xxx
    PDP10.opIO,                 // 0o736xxx
    PDP10.opIO,                 // 0o737xxx
    PDP10.opIO,                 // 0o740xxx
    PDP10.opIO,                 // 0o741xxx
    PDP10.opIO,                 // 0o742xxx
    PDP10.opIO,                 // 0o743xxx
    PDP10.opIO,                 // 0o744xxx
    PDP10.opIO,                 // 0o745xxx
    PDP10.opIO,                 // 0o746xxx
    PDP10.opIO,                 // 0o747xxx
    PDP10.opIO,                 // 0o750xxx
    PDP10.opIO,                 // 0o751xxx
    PDP10.opIO,                 // 0o752xxx
    PDP10.opIO,                 // 0o753xxx
    PDP10.opIO,                 // 0o754xxx
    PDP10.opIO,                 // 0o755xxx
    PDP10.opIO,                 // 0o756xxx
    PDP10.opIO,                 // 0o757xxx
    PDP10.opIO,                 // 0o760xxx
    PDP10.opIO,                 // 0o761xxx
    PDP10.opIO,                 // 0o762xxx
    PDP10.opIO,                 // 0o763xxx
    PDP10.opIO,                 // 0o764xxx
    PDP10.opIO,                 // 0o765xxx
    PDP10.opIO,                 // 0o766xxx
    PDP10.opIO,                 // 0o767xxx
    PDP10.opIO,                 // 0o770xxx
    PDP10.opIO,                 // 0o771xxx
    PDP10.opIO,                 // 0o772xxx
    PDP10.opIO,                 // 0o773xxx
    PDP10.opIO,                 // 0o774xxx
    PDP10.opIO,                 // 0o775xxx
    PDP10.opIO,                 // 0o776xxx
    PDP10.opIO                  // 0o777xxx
];

PDP10.aOpIO_KA10 = [
    PDP10.opBLKI,               // 0o70000x
    PDP10.opDATAI,              // 0o70004x
    PDP10.opBLKO,               // 0o70010x
    PDP10.opDATAO,              // 0o70014x
    PDP10.opCONO,               // 0o70020x
    PDP10.opCONI,               // 0o70024x
    PDP10.opCONSZ,              // 0o70030x
    PDP10.opCONSO               // 0o70034x
];
