---
layout: page
title: "Obsolete 80386 Instructions: IBTS and XBTS"
permalink: /pubs/pc/reference/intel/80386/ibts_xbts/
---

Obsolete 80386 Instructions
---

Here's more information on the 80386 opcodes (IBTS and XBTS) that were removed from the 80386 as of the B1 stepping.

### [IBTS (0x0F 0xA7)](http://asm.inightmare.org/opcodelst/index.php?op=IBTS)

	Opcode IBTS
	
	CPU: 80386 step A0-B0 only 
	Type of Instruction: User 
	
	Instruction: IBTS base,bitoffset,len,src
	
	Flags Affected: None 
	
	CPU mode: RM,PM,VM 
	
	IBTS    r/m16,AX,CL,r16 
	IBTS    r/m32,EAX,CL,r32 
	COP (Code of Operation): 0FH A7H 
	
	Clocks:	IBTS 
	80386:	12/19

### [XBTS (0x0F 0xA6)](http://asm.inightmare.org/opcodelst/index.php?op=XBTS)

    Opcode XBTS

    CPU: 80386 step A0-B0 only
    Type of Instruction: User

    Instruction: XBTS dst,base,bitoffset,len

    Flags Affected: None

    CPU mode: RM,PM,VM

    XBTS    r16,r/m16,AX,CL
    XBTS    r32,r/m32,EAX,CL
    COP (Code of Operation): 0FH A6H

    Clocks: XBTS
    80386:  6/13

FYI, PCjs now has limited support for the XBTS (0x0F 0xA6) and IBTS (0x0F 0xA7) instructions in any 80386 machine
configuration file that contains a CPU *stepping* attribute of "A0" through "B0".

By limited, I mean that:

1. The Debugger component can disassemble them
2. The X86CPU component can emulate them (but only for bit indexes 0-31)

I'm content with limited emulation, because it seems unlikely there is much (if any) real-world software that actually
used those short-lived instructions except as a way of discriminating between 80386 steppings.  I also couldn't find any
decent specs for exactly how these instructions operated, so the emulation will have to stay limited.

The 0xA6 and 0xA7 opcodes were briefly reused on early 80486 CPUs for the byte and word forms, respectively, of CMPXCHG,
but then those CMPXCHG instructions were moved to opcodes 0xB0 and 0xB1 on later 80486 CPUs.

NOTE: The "PC Magazine Programmer's Technical Reference" claims that CMPXCHG used 0x0F opcodes 0xA6 and 0xA7 only on the
80486 B0 stepping, and that they were moved to 0x0F opcodes 0xB0 and 0xB1 on the "B1" stepping.  However, I can't find
any independent confirmation of that.

Most other sources suggest that CMPXCHG used the old XBTS/IBTS opcodes only on 80486 "A" steppings, not any "B" steppings.
The PC Magazine author may have simply confused the 0xB0 and 0xB1 opcodes with the B0 and B1 steppings.
