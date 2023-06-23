---
layout: page
title: "80386 Opcodes: ICEBP (0xF1)"
permalink: /documents/manuals/intel/80386/ops/ICEBP/
redirect_from: /docs/x86/ops/ICEBP/
---

### Description

Excerpt from [http://www.rcollins.org/secrets/opcodes/ICEBP.html](http://www.rcollins.org/secrets/opcodes/ICEBP.html):

	An undocumented op code that will make debugging run-time code
	on an ICE easier. Normally, to set an arbitrary breakpoint in a
	program which was loaded by an operating system, you must perform
	a laborious task of figuring out where your program was loaded
	in memory. Follow that process with an equally laborious task of
	calculating the offset in memory which corresponds to the desired
	breakpoint.
	
	This process is exacerbated by programs which use many segments,
	especially many code segments. Now for one final complication,
	consider that your program switches from real mode, to protected mode,
	with paging enabled, and you are not using a 1-to-1 mapping of physical
	to virtual memory. You want to talk about a nightmare just to figure
	out where to set a breakpoint?
	
	All of these problems are eliminated, simply by using this instruction
	-- provided you know its caveats.
	
	Undocumented:  Available to all 80386-class (and above)
	               processors as described herein.
	               May be available to 80286 processors, but
	                 implemented in a different manner.
	               Useful to BONDOUT (ICE) processors.
	               Especially useful during ICE debugging.
	               Useful in production source code.
	                                                            ICEBP
	Flags:                                            ICE Break Point
	+-+-+-+-+-+-+-+-+-+                                  +----------+
	|O|D|I|T|S|Z|A|P|C|                                  | 11110001 |
	+-+-+-+-+-+-+-+-+-+                                  +----------+
	| | | | | | | | | |                                  |    F1    |
	+-+-+-+-+-+-+-+-+-+                                  +----------+
	
	The name ICEBP was given by a pre-production Intel ICE that had the
	ability to disassemble undocumented op codes. The name ICEBP is a
	misnomer because the instruction is actually a single byte single-step
	exception (INT-01).
	
	How you use ICEBP depends upon whether or not you are using an 80386
	ICE, Intel486 ICE, or Pentium ICE. For the purposes of this article,
	usage of ICEBP on 80386 and Intel486 are identical. Pentium enables
	ICEBP a little differently than its predecessors.
	
	Two effects of ICEBP -- 80386 and Intel486
	
	ICEBP has two operational effects: When Interrupt Redirection (IR) is
	disabled, ICEBP acts as a single byte INT 01. When this instruction occurs,
	it invokes the standard INT 01 handler. Unlike the single step exception
	(Trap Flag=1), this instruction does not set the trap flag on the stack
	image, nor modifies the trap flag on the stack image. Therefore, upon
	termination of the INT 01 handler, execution continues without further
	occurrences of the single step breakpoints.
	
	When Interrupt Redirection is enabled, ICEBP will attempt to invoke the
	hardware breakpoint handler associated with an In Circuit Emulator (ICE).
	If the processor is a production CPU, the processor will hang. If the
	processor is a BONDOUT CPU attached to an ICE, ICEBP will cause the ICE
	to break from emulation. On an Intel ICE, the message "Unknown Breakpoint
	at address xxxx:xxxx:xxxxxxxx" appears on the screen.
	
	There are two ways to enable Interrupt Redirection. It can be done by
	directly programming DR7 (see "Undocumented Bits in DR7"), or this bit
	can be set (indirectly) using an ICE. To set this bit using an ICE, you
	must first be in HALT mode. Any "go til" command that uses the debug
	registers will enable Interrupt Redirection. For example, "go til 1234:5678
	execute," "go til 1025:3245 write," or simply "go til 0 p" will enable
	Interrupt Redirection. This work because the ICE actually uses the debug
	registers to trap debug exceptions. Of course, this directly implies that
	any time the ICE uses the debug registers to signify break points, and
	emulation halts, it does so following an INT 01 to the ICE break point
	handler (since interrupt redirection is enabled).
