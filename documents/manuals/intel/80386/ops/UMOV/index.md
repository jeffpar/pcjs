---
layout: page
title: "80386 Opcodes: UMOV (0x100F,0x110F,0x120F,0x130F)"
permalink: /documents/manuals/intel/80386/ops/UMOV/
redirect_from: /docs/x86/ops/UMOV/
---

### Description

Excerpt from [http://www.rcollins.org/secrets/opcodes/UMOV.html](http://www.rcollins.org/secrets/opcodes/UMOV.html):

	An undocumented op code used by ICE host software to perform
	memory cycles to the target system during HALT mode.
	
	Undocumented:  Available on all 80386/80486 processors.
	               Useful only to BONDOUT (ICE) processors.
	                                                             UMOV
	Flags:                                             User MOVE data
	+-+-+-+-+-+-+-+-+-+         +----------+----------+-------------+
	|O|D|I|T|S|Z|A|P|C|         | 00001111 | 000100dw | mod,reg,r/m |
	+-+-+-+-+-+-+-+-+-+         +----------+----------+-------------+
	| | | | | | | | | |         |    0F    |    1x    |      xx     |
	+-+-+-+-+-+-+-+-+-+         +----------+----------+-------------+
	
	UMOV is an acronym for User-MOVe.  When the In-Circuit Emulator
	(ICE) is in HALT mode, the CPU performs no recognizable bus
	cycles.  Since the '386 is a dynamic device, it must be executing
	some instructions during HALT, but it is not doing it in a way
	recognizable to a logic analyzer with a '386 probe attached.
	
	During HALT mode, the ICE differentiates between USER space and
	HOST space.  The ICE is fetching, and performing all bus cycles
	to HOST memory space during HALT, and not USER space.  Since the
	ICE differentiates between these two memory spaces, it needs a
	mechanism to access user memory space.  That mechanism is UMOV.
	When a user request to view memory, or disassemble memory, the
	ICE executes UMOV instructions to get data from User space.
	
	If UMOV is executed by a user program, it will appear it is a
	alias for MOV.
	
	The field operands to UMOV are exactly the same as the MOV
	instruction.  For example:
	d    Direction.  If set (d=1), do memory to register, or register
	     to register; the reg field is the destination.  If cleared
	     (d=0), do register to memory; the reg field is the source.
	w    Width.  Selects the default data width.  W=1 selects
	     word width, according to the appropriate CPU operating mode,
	     and/or size prefix override.  W=0 selects 8-bit operands.
