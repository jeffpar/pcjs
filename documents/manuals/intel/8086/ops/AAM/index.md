---
layout: page
title: "x86 Opcodes: AAM (0xD4)"
permalink: /documents/manuals/intel/8086/ops/AAM/
redirect_from: /docs/x86/ops/AAM/
---

### Description

Excerpt from [http://www.rcollins.org/secrets/opcodes/AAM.html](http://www.rcollins.org/secrets/opcodes/AAM.html):

	Undocumented:  Available to all Intel x86 processors.
	               Useful in production source code.
	                                                              AAM
	Flags:                                ASCII Adjust after Multiply
	+-+-+-+-+-+-+-+-+-+                       +----------+----------+
	|O|D|I|T|S|Z|A|P|C|                       | 11010100 |   DATA   |
	+-+-+-+-+-+-+-+-+-+                       +----------+----------+
	|0| | | |+|+|0|+|0|                       |    D4    |     IMM8 |
	+-+-+-+-+-+-+-+-+-+                       +----------+----------+
	
	AAM is shown as a two byte encoding used to divide AL by 10, putting
	the quotient in AH, and the remainder in AL. However, AAM is listed in
	the op code map as a single byte instruction. This leads one to wonder
	why a two-byte opcode is listed in the single-byte opcode map.
	
	In reality, the second byte is an undocumented operand to AAM. The operand
	is the divisor. In its documented incarnation, AAM is encoded as D4 0A.
	The operand 0A is the divisor. This divisor can be changed to any value
	between 0 and FF. Using AAM in this manner is useful -- as it extends the
	CPU instruction set to include a DIV IMM8 instruction that is not available
	from any other form of the DIV instruction.
	
	The extended form of the AAM instruction is also useful because it sets the
	flags register according to the results, unlike the DIV or IDIV instruction.
	According to Intel documentation, SF, ZF, and PF flags are set according
	to the result, while OF, AF, and CF are undefined. However, if AAM were used
	strictly as documented, then the Sign Flag (SF) could not be set under any
	circumstances, since anything divided by 10 will leave a remainder between
	0 and 9. Obviously the remainder could never be between 128 and 255 (or -1
	and -128 if you prefer) if used only as documented. Since AAM divides an
	8-bit number by another 8-bit number, a carry or overflow could never occur.
	Therefore CF and OF always=0. Intel claims they are undefined, but my
	observations are consistent with my theory.
	
	Contrary to documentation, AAM will generate exceptions in real mode,
	protected mode, and V86 mode. AAM can only generate Exception 0 -- divide
	by 0.
	
	Finally, in the Pentium User's Manual, this heretofore undocumented form of
	AMM is described. Intel says:
	
		Note: imm8 has the value of the instruction's second byte. The
		second byte under normally assembly [sic] of this instruction will
		be 0A, however, explicit modification of this byte will result in
		the operation described above and may alter results.
	
	This instruction exists in this form on all Intel x86 processors.

The following related files were saved on February 16, 2015 from [http://www.rcollins.org](http://www.rcollins.org/):

* [AAM.ASM](AAM.ASM)
