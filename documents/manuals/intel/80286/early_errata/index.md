---
layout: page
title: "Intel 80286 CPU Errata: A1 and B1 Steppings"
permalink: /documents/manuals/intel/80286/early_errata/
redirect_from: /pubs/pc/reference/intel/80286/early_errata/
---

[The following information is from an undated 15-page Intel document titled "Undocumented iAPX 286 Test Instruction",
p. 15]

Early versions of the 80286 have several errata items which may effect the implementation of software to emulate an
8086/8088 on a protected mode 80286 or expansion of the address space in real mode. These errata are in the A1 and B1
steppings of the 80286 and are fixed in later steppings of the 80286.

 * If the ES register has a null selector or ES:DI exceeds the segment limit when executing either the non-repeated
 MOVS or INS instructions, the saved CS:IP value seen by the exception 13 handler will point after the MOVS or
 INS instruction. The saved CS:IP value in later steppings will point at the failed instruction (including prefixes).

 * If the segment register used for the destination operand in either the POP to memory, FSTSW/FNSTSW, or
 FSTCW/FNSTCW instructions has a null selector in it or the segment limit is violated, the saved CS:IP value
 seen by the exception 13 (or 12 if SS override was used) handler will point after the POP/FSTSW/FNSTSW/FSTCW/FNSTCW
 instruction. The saved CS:IP value in later steppings will point at the failed instruction (including prefixes).

 * If the stack limit is violated by a PUSH from memory instruction, the saved CS:IP value seen by the exception 12
 handler will point after the PUSH instruction. The saved CS:IP value in later steppings will point at the failed
 PUSH instruction (including prefixes).

 * If a segment limit violation or IOPL violation occurs in the repeated MOVS, INS, OUTS, CMPS, SCAS, or STOS
 instructions, the value of CX seen by the exception 12 or 13 handler will be the value used at the start of the
 instruction. The SI and DI register values will reflect the iterations used by the instruction. Later steppings
 of the 80286 will assure the saved value of the CX register reflects the number of iterations performed.
    
 * The [LOADALL](../loadall/) instruction may incorrectly enter protected mode. This only affects systems that use
 [LOADALL](../loadall/) while in real mode and want to remain in real mode. Two possible workarounds are possible:
 execute [LOADALL](../loadall/) using 0-wait memory for the data values or be sure bit 0 of memory location 804H is
 zero. HOLD requests and processor extension data transfers should be inhibited while [LOADALL](../loadall/) is running.
 Later steppings of the 80286 will correctly load the MSW during [LOADALL](../loadall/) with HOLD and processor
 extension transfers.
