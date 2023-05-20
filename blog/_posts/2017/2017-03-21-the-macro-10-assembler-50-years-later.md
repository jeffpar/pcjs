---
layout: post
title: The MACRO-10 Assembler, 50 Years Later
date: 2017-03-21 22:00:00
permalink: /blog/2017/03/21/
machines:
  - id: testka10
    type: pdp10
    config: /machines/dec/pdp10/ka10/test/debugger/machine.xml
    debugger: true
    commands: a 30724 /software/dec/pdp10/diag/ka10/dakaa/DAKAA.MAC
---

A few weeks ago, I finished my first cut of the *core* PDP-10 instructions in PDPjs.  Most of my remaining work
falls into these categories:

- UUOs (Unimplemented User Operations)
- Floating-point instructions 
- Input-Output instructions (eg, BLKI, BLKO, DATAI, DATAO)
- Miscellaneous instructions (eg, variations of PUSH, POP, JUMP) 

Floating-point is the biggest chunk of work, which I'm going to save for last, with the hope that most PDP-10 software
didn't use floating-point.  However, if all PDP-10 systems included floating-point hardware (which I haven't been able to
confirm yet), I may have no choice.  Floating-point emulation in JavaScript isn't hard -- PCjs already includes
[8087 Coprocessor Emulation](/machines/pcx86/modules/v2/fpux86.js) -- but getting all the details right is time-consuming.

The PDP-10 has a lot of instructions, and I quickly had far more instructions than I was willing or able to write tests for.
Besides, any tests I wrote would be based on the same potentially-flawed understandings that I had gleaned from DEC's
[PDP-10 Hardware Documentation](/machines/dec/pdp10/).  It was obvious that I needed to find a set of DEC PDP-10 diagnostics, much
like the [DEC PDP-11 Paper Tape Diagnostics](/software/dec/pdp11/tapes/diag/) I had used to flush most of the early bugs out of my
PDP-11 emulator.

Unfortunately, this presented something of a chicken-and-egg problem, because the PDP-10 emulator is still too immature to
support any simulated devices, even something as simple as paper tape.  However, since I did find a series of PDP-10 Model KA10
diagnostics in [source code form](http://pdp-10.trailing-edge.com/klad_sources/), all I needed was some way to assemble those
files into binaries that I could load directly in a PDPjs test machine.

One solution would have been to run a TOPS-10 simulation using the SIMH emulator, assemble the desired tests inside that virtual
machine, extract the binaries, and then load them into a PDPjs machine.  But that would have meant familiarizing myself with
both SIMH and TOPS-10, and the process of editing, assembling, and transferring binaries to PDPjs would have been cumbersome at
best.

### Introducing the MACRO-10 "Mini-Assembler"

I decided that the shortest turn-around from *assembly* phase to *run* phase (aka *crash-and-burn* phase) would be to
assemble the files in PDPjs itself.  So the PDPjs [MACRO-10 "Mini-Assembler"](/machines/dec/pdp10/modules/v2/macro10.js) was born.
Any machine that includes the PDPjs Debugger (like the machine below) now includes MACRO-10 support as well.

{% include machine.html id="testka10" %}

The above machine uses the Debugger's assemble ('a') command to assemble DEC's "DAKAA" diagnostic
[KA10 Basic Instruction Diagnostic](/software/dec/pdp10/diag/ka10/dakaa/) and load the resulting code at address 30724:

	a 30724 /software/dec/pdp10/diag/ka10/dakaa/DAKAA.MAC

The Debugger invokes the MACRO-10 mini-assembler whenever the target address is followed by an argument ending with ".MAC".

As previously described in the section on [PDPjs PDP-10 Opcode Tests](/software/dec/pdp10/test/opcodes/), the Debugger already
allowed you to assemble instructions directly into memory (eg, `a 100 hrli 1,111111`).  This "immediate mode" feature is provided
exclusively by the Debugger; MACRO-10 features are not available in that mode.

However, one feature that *is* available in both the Debugger and the mini-assembler is full MACRO-10-style expression evaluation,
since they share the same expression parser.  Here are some examples, using the Debugger's "print" command:

	>> print 27
	23. 0o000027

Both the Debugger and MACRO-10 start out by assuming a default base (radix) of 8, so the value "27" is evaluated as an octal
number, and for convenience, the "print" command displays the result in both octal and decimal.  You can change the default base
in the Debugger with the `s base` command (eg, `s base 10`), where the new base is always interpreted as a decimal number.
This command differs from MACRO-10, which uses the `RADIX` pseudo-op to change the default base.

Obviously, it would be nice if both the Debugger and the MACRO-10 mini-assembler used matching commands, but the PCjs debuggers
were written before MACRO-10 support was a consideration, so for now, that's life.

All of the MACRO-10-style base prefixes are supported (**^D** for decimal, **^B** for binary, an **^O** for octal):

	>> print ^D27
	0o000000000033  27.
	
	>> print ^B1001
	0o000000000011  9.
	
	>> print ^O1001
	0o000000001001  513.

Expressions using angle brackets, another MACRO-10 convention, is also supported:

	>> print ^D<45-22>
	0o000000000027  23.

Note that the base modifier (**^D**) applies to the entire expression.  You can also add MACRO-10 suffixes to integers:

	K:  "kilo-", thousands
	M:  "mega-", millions
	G:  "giga-", billions
	
so:

	>> print 5K
	0o000000005000  2560.
	
    >> print 5M
    0o000005000000  1310720.
    
    >> print 5G
    0o005000000000  671088640.
    
	>> print ^D5K
	0o000000011610  5000.
	
    >> print ^D5M
    0o000023045500  5000000.
    
    >> print ^D5G
    0o045201371000  5000000000.

Binary shifting using a **B** suffix is also supported.  Note that MACRO-10 binary shifting is a "bit" unusual by today's
standards, because the value after the **B**, *n*, is not a count but rather the desired bit position of the right-most bit of
the original value.  Moreover, MACRO-10 considers bit 0 the left-most bit, and bit 35 the right-most bit.  Last but not least,
*n* is always interpreted as a decimal value, regardless of the current base (radix).

*n* can be converted to a shift count by calculating (35 - n): if the count is positive, it's a left-shift, and if it's negative,
it's a right-shift.  Here are some examples: 

	>> print 1B0
	0o400000000000  -34359738368.
	
	>> print 1B17
	0o000001000000  262144.
	
	>> print 1B35
	0o000000000001  1.
	
	>> print -1B35
	0o777777777777  -1.
	
	>> print -1B53
	0o000000777777  262143.
	
	>> print -1B70
	0o000000000001  1.

And as the [MACRO-10 Assembler Programmer's Reference Manual (June 1972)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp1i3qATlvub3JxoDQ),
p. 1-17, points out, all of the following "binary shifting" expressions are equivalent:

	>> print 10B32
	0o000000000100  64. '@'
	
	>> print ^O10B32
	0o000000000100  64. '@'
	
	>> print 10B<42-10>
	0o000000000100  64. '@'
	
	>> print 10B<^D<42-10>>
	0o000000000100  64. '@'
	
	>> print 10B<^D42-^D10>
	0o000000000100  64. '@'

"Left arrow" shifting is also supported, although the character that the original MACRO-10 manuals referred to as a "left arrow"
is actually an underscore; later manuals refer to this as "underscore shifting".  Underscore shifting uses straightforward shift
counts: if the count is positive, it's a left-shift, and if it's negative, it's a right-shift.

	>> print 1_^D18
	0o000001000000  262144.

	>> print -1_^D-18
	0o000000777777  262143.

Character constants are also supported, in both the 7-bit ASCII and 6-bit SIXBIT formats.  If more than 5 7-bit characters
or more than 6 6-bit characters are specified, an error will be reported, since the value cannot fit in a 36-bit word.  The
character values will be stored in the same order that they are listed, but unlike values generated by MACRO-10 pseudo-ops
**ASCII**, **ASCIZ**, and **SIXBIT**, the final value will be right-justified instead of left-justified.

Use double-quotes for ASCII constants and single-quotes for SIXBIT constants:

	>> print +'SIXBIT'
	0o635170425164  -13255955852.

	>> print +"HELLO"
	0o221054623117  19473311311.

NOTE: When using the PCjs debugger, the constant must be preceded by an arithmetic operator (eg, '+'), otherwise it interprets
the quoted argument as a string.  This is an idiosyncrasy of the "print" command, not the expression parser.

Most MACRO-10 logical and arithmetic operators are supported, including:

- Unary arithmetic operators (+ and -)
- Unary complement operator (^-, aliased to ~)
- Unary base overrides (^D, ^O, and ^B)
- Unary zero-bit-count operator (^L)
- Binary shifting (B) and underscore shifting (_) operators
- Logical binary operations (! for OR, ^! for XOR, and & for AND)
- Multiplication and division (* and /)
- Addition and subtraction (+ and -)
- Angle brackets for expression grouping (< and >)

Unfortunately, since the PCjs expression parser predates MACRO-10 support, there are bound to be differences that I
haven't ironed out yet.  One known difference involves numeric constants with a trailing period (decimal point): PCjs
historically treats such constants as decimal *integers*, whereas MACRO-10 treats numeric constants with either a
leading, embedded, or trailing period as a decimal *floating-point* number.  I've chosen to ignore this difference for
now, since I'm holding off on all floating-point support for as long as possible.

Much more work is needed to make the MACRO-10 "Mini-Assembler" a general-purpose assembler, but it's already proved itself
useful in assembling the following tests:

- [KA10 Basic Instruction Diagnostic #1](/software/dec/pdp10/diag/ka10/dakaa/)
- [KA10 Basic Instruction Diagnostic #4](/software/dec/pdp10/diag/ka10/dakad/)
- [Assorted MACRO-10 Mini-Assembler Tests](/software/dec/pdp10/test/macro10/)

However, there's "*assembling*" and then there's "*assembling correctly*".  One early problem I had to immediately
address was the handling of literals.  I was originally collecting all the literal (square-bracketed) expressions, like the
**[ZZ]** in the following statement:

	    MOVE    [ZZ]            ;MOVE THE CURRENT VALUE OF ZZ INTO E. ZZ IS NON-ZERO

and processing them at the end of the first pass.  Well, since ZZ is a symbol that changes repeatedly inside a REPEAT pseudo-op, it
became clear that I needed to process literals immediately.  This meant creating a separate assembly scope while processing each
literal; in fact, it meant a stack of scopes, in case literals contained nested literals.

As the [MACRO-10 Assembler Programmer's Reference Manual (April 1978)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp1hxEi9aXmTStmyhA)
explains:

	A literal can include any term, symbol, expression, or statement, but
	it must generate at least one but no more than 99 words of data.  A
	statement that does not generate data (such as a direct-assignment
	statement or a RADIX pseudo-op)	can be included in a literal, but the
	literal must not consist entirely of such statements.
	
	You can nest literals up to 18 levels.  You can include any number of
	labels in a literal, but a forward reference to a label in a literal
	is illegal.
	
	If you use a dot (.) in a literal to retrieve the location counter,
	remember that the counter is pointing at the statement containing the
	literal, not at the literal itself.
	
	In nested literals, a dot location counter references a statement
	outside the outermost literal.
	
	In the sequence:
	
	    JRST [HRRZ AC1,V
	            CAIE AC1,OP
	            JRST .+1
	            JRST EVTSTS]
	    SKIPE C
	
	the expression .+1 generates the address of SKIPE C, not JRST EVTSTS.
	
	Literals having the same value are collapsed in MACRO's literal pool.
	Thus for the statements:
	
	    PUSH P,[0]
	    PUSH P,[0]
	    MOVEI AC1,[ASCIZ /TEST1/]
	    
	the same address is shared by the two literals [0], and by the null
	word generated at the end of [ASCIZ /TESTI/].  Literal collapsing is
	suppressed for those literals that contain errors, undefined expressions,
	or EXTERNAL symbols.
	
Our Mini-Assembler doesn't enforce all the above requirements.  It doesn't care if less than 1 or more
than 99 words of data are generated, and it doesn't care if you nest more than 18 levels.  It does attempt to honor
MACRO-10's scoping rules for the dot (.) operator, however.

There's also some ambiguity in the above documentation.  For example, it says that a literal may contain "any
term, symbol, expression, or statement," but it's not clear if that includes labels.
And when they say that "a forward reference to a label in a literal is illegal," does that only apply to a label
defined *within* the literal, or to *any* forward reference?  In other words, which element is illegal in a literal:
the forward reference, or the label?

In any case, our assembler doesn't care, and it's now able to assemble a simple
[Nested Literal Test](/software/dec/pdp10/test/macro10/#nested-literal-test) on the
[MACRO-10 Mini-Assembler Tests](/software/dec/pdp10/test/macro10/) page.

So, things are improving, but it's still too early expect a lot from the MACRO-10 Mini-Assembler.  It currently supports
only a handful of pseudo-ops, and all the code and data it generates is intended for absolute loading only; for now,
it makes no distinction between relocatable and absolute addresses, and the **LOC** and **RELOC** pseudo-ops, like every
other unrecognized or unsupported opcode or pseudo-op, will simply generate an error.

If that sounds like a joke, it's not.  This, however, is:

> A man walks into a bar, asks the bartender for a fixup, and the bartender responds, "Absolutely!"
