---
layout: page
title: "x86 Opcodes: AAD (0xD5)"
permalink: /documents/manuals/intel/8086/ops/AAD/
redirect_from: /docs/x86/ops/AAD/
---

### Description

Excerpt from [http://www.rcollins.org/secrets/opcodes/AAD.html](http://www.rcollins.org/secrets/opcodes/AAD.html):

	Undocumented:  Available to all Intel x86 processors
	               Useful in production source code.
	                                                              AAD
	Flags:                               ASCII Adjust before Division
	+-+-+-+-+-+-+-+-+-+                       +----------+----------+
	|O|D|I|T|S|Z|A|P|C|                       | 11010101 |   DATA   |
	+-+-+-+-+-+-+-+-+-+                       +----------+----------+
	|+| | | |+|+|+|+|+|                       |    D5    |     IMM8 |
	+-+-+-+-+-+-+-+-+-+                       +----------+----------+
	
	This instruction is the multiplication counterpart to AAM. As is the
	case with AAM, AAD uses the second byte as an operand. This operand is
	the multiplicand for AAD. Like AAM, AAD provides a way to execute a
	MUL IMM8 that is unavailable through any other means in the CPU.
	
	Unlike MUL, or IMUL, AAD sets all of the CPU status flags according
	to the result. Intel states that the Overflow Flag (OF), Auxiliary carry
	Flag (AF), and Carry Flag (CF) are undefined. This assertion is incorrect.
	These flags are fully defined, and are set consistently with respect to
	any other integer operations.
	
	And again, like AMM, beginning with the Pentium, Intel has finally
	acknowledged the existence of the second byte of this instruction as its
	operand. Intel says:
	
		Note: imm8 has the value of the instruction's second byte. The
		second byte under normally assembly [sic] of this instruction will
		be 0A, however, explicit modification of this byte will result in
		the operation described above and may alter results.
	
	This instruction exists in this form on all Intel x86 processors.

The following related files were saved on February 16, 2015 from [http://www.rcollins.org](http://www.rcollins.org/):

  - [AAD.ASM](AAD.ASM)
