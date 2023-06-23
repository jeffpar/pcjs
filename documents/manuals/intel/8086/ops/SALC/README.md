---
layout: page
title: "x86 Opcodes: SALC (0xD6)"
permalink: /documents/manuals/intel/8086/ops/SALC/
redirect_from: /docs/x86/ops/SALC/
---

### Description

Excerpt from [http://www.rcollins.org/secrets/opcodes/SALC.html](http://www.rcollins.org/secrets/opcodes/SALC.html):

	An undocumented op code that performs an operation common to
	every Assembly language subroutine to C and many other higher
	level languages. This instruction is a C programmers 'dream'
	instruction for interfacing to assembly language.
	
	Undocumented:  Available to all Intel x86 processors
	               Useful in production source code.
	                                                             SALC
	Flags:                                       SET Carry flag to AL
	+-+-+-+-+-+-+-+-+-+                                  +----------+
	|O|D|I|T|S|Z|A|P|C|                                  | 11010110 |
	+-+-+-+-+-+-+-+-+-+                                  +----------+
	| | | | | | | | | |                                  |    D6    |
	+-+-+-+-+-+-+-+-+-+                                  +----------+
	
	The name SALC simply stands for SET the Carry flag in AL. This
	instruction is categorized as an undocumented single-byte proprietary
	instruction. Intel claims it can be emulated as a NOP. Hardly a NOP,
	this instruction sets AL=FF if the Carry Flag is set (CF=1), or resets
	AL=00 if the Carry Flag is clear (CF=0). It can best be emulated as
	SBB AL,AL. SALC doesn't change any flags, where SBB AL,AL does.
	
	This instruction is most useful to high-level language programmers
	whose programs call assembly language, and expect AL to indicate success
	or failure. Since it is convenient for assembly language programs to
	return status in the CF, this instruction will convert that status to a
	form compatible with high level languages.
	
	Over the years, this instruction has been given many names by various
	discoverers. I originally gave it the name SETCAL, but the most common
	name I've seen in print is SETALC. The name given above, SALC is an
	official Intel name.
	
	While perusing the P6 opcode map, I always check for known, undocumented
	opcodes. After weeding through the map for many minutes, my patience and
	perseverance paid off. I found the opcode, and its name. Intel's name for
	this opcode is SALC. This would indicate that Intel plans to officially
	document this instruction, beginning with the P6.
