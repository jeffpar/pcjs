---
layout: post
title: Stepping Through PDP-10 Diagnostics
date: 2017-03-24 22:00:00
permalink: /blog/2017/03/24/
machines:
  - id: testka10
    type: pdp10
    config: /machines/dec/pdp10/ka10/test/debugger/machine.xml
    debugger: true
    commands: a 30724 /software/dec/pdp10/diags/ka10/dakaa/DAKAA.MAC
---

Now that the PDPjs MACRO-10 Mini-Assembler is [limping along](/blog/2017/03/21/), it's time to start assembling some
of DEC's PDP-10 "Basic Instruction" diagnostics and loading them into a test machine.  The first diagnostic I tried was
[KA10 Basic Instruction Diagnostic #1 (MAINDEC-10-DAKAA)](/software/dec/pdp10/diag/ka10/dakaa/), which has been loaded into
the machine below.

{% include machine.html id="testka10" %}

Here were the results of my first run attempt:

	>> a 30724 /software/dec/pdp10/diags/ka10/dakaa/DAKAA.MAC
	starting PCjs MACRO-10 Mini-Assembler...
	loading DAKAA.MAC
	CPU will not be auto-started (click Run to start)
	2844 words loaded at 030724-036357
	00=000000000000 01=000000000000 02=000000000000 03=000000000000 
	04=000000000000 05=000000000000 06=000000000000 07=000000000000 
	10=000000000000 11=000000000000 12=000000000000 13=000000000000 
	14=000000000000 15=000000000000 16=000000000000 17=000000000000 
	PC=030724 RA=00000000 EA=000000 C0=0 C1=0 OV=0 ND=0 PD=0 
	030724: 254000 030741  JRST    30741
	>> g
	running
	undefined opcode: 000000
	stopped (1698 instructions, 1697 cycles, 14 ms, 121214 hz)
	00=000000000000 01=000000000000 02=777777777777 03=000000000000 
	04=777777777777 05=000000000000 06=000000000000 07=777777777777 
	10=777777777777 11=000000000000 12=000000000000 13=000000000000 
	14=000000000000 15=000000000000 16=000000000000 17=000000000000 
	PC=035057 RA=00000000 EA=000000 C0=0 C1=0 OV=0 ND=0 PD=0 
	035057: 000000 000000  UUO     0,0
	>> dh
	035044: 444000 036353  EQV     0,36353          ;history=10
	035045: 332000 000000  SKIPE   0,0              ;history=9
	035047: 324000 035050  JUMPA   0,35050          ;history=8
	035050: 200000 036354  MOVE    0,36354          ;history=7
	035051: 404000 036355  AND     0,36355          ;history=6
	035052: 444000 036356  EQV     0,36356          ;history=5
	035053: 444000 036357  EQV     0,36357          ;history=4
	035054: 332000 000000  SKIPE   0,0              ;history=3
	035056: 324000 035057  JUMPA   0,35057          ;history=2
	035057: 000000 000000  UUO     0,0              ;history=1

Happily, this was a good outcome, because 035057 is the end of the test.  If you look at the diagnostic's
[listing file](/software/dec/pdp10/diag/ka10/dakaa/DAKAA.LST.txt), this is what you would normally see at address 035057:

	035057	254 00 0 00 030057 	ENDXX:	JRST	BEGEND		;LOOP PROGRAM

I had similar success with [Diagnostic #2 (MAINDEC-10-DAKAB)](/software/dec/pdp10/diag/ka10/dakab/).

Problems started to crop up in [Diagnostic #3 (MAINDEC-10-DAKAC)](/software/dec/pdp10/diag/ka10/dakac/):

	        CAME    [0,-1]          ;PASS TEST IF C(AC)=0,,-1

Based on the comment, it's clear what they really meant was either "[0,,-1]" or "[XWD 0,-1]".  However, they still got the
desired result, which means that even when the assembler parses an mnemonic-less instruction like "0,-1", it must still truncate
the second (address) operand.  Once I generated the appropriate value (000000,777777), the test passed.

And I had several failures running [Diagnostic #4 (MAINDEC-10-DAKAD)](/software/dec/pdp10/diag/ka10/dakad/):

	>> a 30724 /software/dec/pdp10/diags/ka10/dakad/DAKAD.MAC
	starting PCjs MACRO-10 Mini-Assembler...
	loading DAKAD.MAC
	1986 words loaded at 030724-034625
	00=000000000000 01=000000000000 02=777777777777 03=000000000000 
	04=777777777777 05=000000000000 06=000000000000 07=777777777777 
	10=777777777777 11=000000000000 12=000000000000 13=000000000000 
	14=000000000000 15=000000000000 16=000000000000 17=000000000000 
	PC=030724 RA=00000000 EA=000000 C0=0 C1=0 OV=0 ND=0 PD=0 
	030724: 254000 030741  JRST    30741
	>> g
	running
	stopped (450 instructions, 449 cycles, 8 ms, 56125 hz)
	00=000000000017 01=400000000000 02=000000000001 03=400000000000 
	04=000004000004 05=000005000005 06=000006000006 07=000007000007 
	10=000010000010 11=000011000011 12=000012000012 13=000013000013 
	14=000014000014 15=000015000015 16=000016000016 17=000017000017 
	PC=032007 RA=00032007 EA=032007 C0=0 C1=0 OV=0 ND=0 PD=0 
	032007: 324000 032010  JUMPA   0,32010
	>> dh
	031774: 201100 000001  MOVEI   2,1              ;history=10
	031775: 200142 000000  MOVE    3,0(2)           ;history=9
	031776: 312140 034461  CAME    3,34461          ;history=8
	032000: 324000 032001  JUMPA   0,32001          ;history=7
	032001: 476000 000003  SETOM   0,3              ;history=6
	032002: 205040 400000  MOVSI   1,400000         ;history=5
	032003: 201100 000001  MOVEI   2,1              ;history=4
	032004: 200142 000000  MOVE    3,0(2)           ;history=3
	032005: 312140 034462  CAME    3,34462          ;history=2
	032006: 254200 032007  HALT    32007            ;history=1

In this case, both AC3 and memory location 34462 contained 400000000000, so the CAME ("Compare AC with Memory
and Skip if Equal") instruction should have "skipped" the HALT, but it didn't.

Thus was due to a bug in the [cpuops.js](/machines/dec/pdp10/lib/cpuops.js) *CMP()* function:

```javascript
/**
 * CMP(dst, src)
 *
 * Performs the SIGNED comparison (CMP) of two 36-bit operands.
 *
 * @param {number} dst (36-bit value)
 * @param {number} src (36-bit value)
 * @return {number} (dst - src)
 */
PDP10.CMP = function(dst, src)
{
    return (dst < PDP10.INT_LIMIT? dst : dst - PDP10.WORD_LIMIT) - (src < PDP10.INT_LIMIT? src : src - PDP10.INT_LIMIT);
};
```

Basically, there was a typo.  Here's the correction:

```javascript
    return (dst < PDP10.INT_LIMIT? dst : dst - PDP10.WORD_LIMIT) - (src < PDP10.INT_LIMIT? src : src - PDP10.WORD_LIMIT);
```

After fixing that and trying again, the diagnostic got a bit farther:

	>> g
	running
	stopped (1119 instructions, 1118 cycles, 12 ms, 93167 hz)
	00=000001000001 01=000000000000 02=000000000002 03=000000000003 
	04=000000000004 05=000000000005 06=000000000006 07=000000000007 
	10=000000000010 11=000000000011 12=000000000012 13=000000000013 
	14=000000000014 15=000000000015 16=000000000016 17=000000777723 
	PC=033446 RA=00033446 EA=033446 C0=0 C1=0 OV=0 ND=0 PD=0 
	033446: 324000 033447  JUMPA   0,33447
	>> dh
	033432: 253000 033434  AOBJN   0,33434          ;history=10
	033434: 324000 033435  JUMPA   0,33435          ;history=9
	033435: 200000 034573  MOVE    0,34573          ;history=8
	033436: 252000 033440  AOBJP   0,33440          ;history=7
	033437: 334000 000000  SKIPA   0,0              ;history=6
	033441: 324000 033442  JUMPA   0,33442          ;history=5
	033442: 474000 000000  SETO    0,0              ;history=4
	033443: 253000 033444  AOBJN   0,33444          ;history=3
	033444: 312000 034574  CAME    0,34574          ;history=2
	033445: 254200 033446  HALT    33446            ;history=1

The problem here was that after `SETO 0,0`, AC0 contained 777777,777777, so when the AOBJN ("Add One to Both Halves
of AC and Jump if Negative") instruction added 000001,000001 to it, the result should have been 000001,000000, but
because other another typo, this time in the *opAOBJN()* function:

```javascript
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
 * @param {number} acc
 */
PDP10.opAOBJN = function(op, acc)
{
    var dst = (this.readWord(acc) + 0o000001000001) % PDP10.WORD_MASK;
    this.writeWord(acc, dst);
    if (dst >= PDP10.INT_LIMIT) this.setPC(this.regEA);
};
```
when `dst` became 0o1000001000000 and exceeded WORD_MASK (0o777777777777), it needed to be mod'ed with WORD_LIMIT (0o1000000000000),
not WORD_MASK, to truncate the value to 36 bits.  Here's the corrected line:

```javascript
    var dst = (this.readWord(acc) + 0o000001000001) % PDP10.WORD_LIMIT;
```

The last few problems involved the `SOJ` and `SOS` instructions, which expected the carry and overflow flags to be set
consistently with an *addition* of negative 1 (777777,777777) rather than a *subtraction* of positive 1.  That was an easy fix,
but I'm not convinced that all flag-related issues are resolved, so more arithmetic operation testing is required.

Finally, when the "DAKAD" diagnostic generated an indirect word reference:

	E217:   E217A(3)

my MACRO-10 Mini-Assembler passed the reference to the Debugger's assembler function first, because that function already knows
how to parse address expressions that use indirection and/or indexing, including expressions (eg, "E217A") that require a fix-up.
Unfortunately, the Debugger failed to pass the fix-up information back to the MACRO-10 Mini-Assembler, because evaluation of the
indexing expression was overwriting fix-up information, if any, from the preceding expression.
