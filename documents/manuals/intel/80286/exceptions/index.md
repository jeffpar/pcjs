---
layout: page
title: "Intel 80286 CPU: Exceptions"
permalink: /documents/manuals/intel/80286/exceptions/
redirect_from: /pubs/pc/reference/intel/80286/exceptions/
---

[The following information is from an undated 15-page Intel document titled "[Undocumented iAPX 286 Test Instruction](/documents/manuals/intel/80286/files/80286_LOADALL.pdf#page=13)", pp. 13-14.
NOTE: The initial reference to LOADALL as "opcode 0F04H" and the subsequent references to the "0F05H opcode" are exactly
as they appear in the original document. Whether or not they were mistakes is unknown.]

The exception 13 handler will probably use a lookup table for the opcode byte of the instruction causing exception
13 to determine the correct action for this instruction. In general, any undefined opcode causes exception 6 and
would therefore not invoke exception 13. However, some implementations may emulate some instructions. The following
explains the empty entries in the opcode map to aid in determining an emulation strategy.

The following is a list of exclusions from the general rule of undefined 80286 opcodes causing exception 6.

 * The [LOADALL](../loadall/) instruction (opcode 0F04H) will cause exception 13 in protected mode if executed when
 CPL is not 0. [LOADALL](../loadall/) may be executed at any time in real address mode.
 
 * The 0F05H opcode will cause exception 13 in protected mode if executed when CPL is not 0. If 0F05H is executed
 in real address mode, or in protected mode when CPL=O, the 80286 stops normal execution. RESET must be used to
 restart the CPU in this case. The 0F05H opcode may be executed at any time in real address mode.
 
 * The opcode 82H is an alias for opcode 80H.
 
 * The 0D0H/0D1H opcode with a REG field = 6 is an alias for the SHL instruction (REG = 7).
 
 * The opcode 0D6H is a proprietary single byte instruction. No restrictions apply to its execution.
 It can be emulated as a NOP.

 * The 0F1H opcode is a prefix which performs no function. It counts like any other prefix towards the maximum
 instruction length. No restrictions apply to its execution.
   
 * The 0F6H/0F7H opcode with a REG field = 1 is an alias for the TEST instruction (REG=0).

Restarting string instructions which caused exception 12 (if SS override was used) or exception 13 requires updating
SI, DI, and CX (if repeat was used). Which registers are updated depends on the instruction and when the exception was
detected. The following rules apply:

 * For STOS, the DI register must always be updated by the exception handler to restart tne instruction.
 The state of the DF bit in the flag word and the operand size determines whether to use +2, +1, -1, or -2 to
 update DI. If a repeated STOS was used, add 2 to CX to restart the instruction.
 
 * For INS, the DI register must always be updated by the exception handler to restart the instruction. The state
 of the DF bit in the flag word and the operand size determines whether to use +2, +1, -1, or -2 to update DI.
 If a repeated INS was used, increment CX to restart the instruction. If exception 13 was not caused by an invalid
 IOPL during the first I/O read, then increment CX again if INS was repeated.
    
 * For SCAS, the SI register must always be updated by the exception handler to restart the instruction.
 The state of the DF bit in the flag word and the operand size determines whether to use +2, +1, -1, or -2 to
 update SI. If SCAS was repeated, add 2 to CX to restart it.
 
 * For OUTS, the SI register must always be updated by the exception handler to restart the instruction. The state
 of the DF bit in the flag word and the operand size determines whether to use +2, +1, -1, or -2 to update SI.
 If OUTS was repeated, add 2 to CX to restart it. Note that exception 13 may have been caused by an insufficient IOPL.
    
 * For MOVS, the SI register must always be updated by the exception handler to restart the instruction. The state
 of the DF bit in the flag word and the operand size determines whether to use +2, +1, -1, or -2 to update SI.
 The DI register must also be updated if the source operand (i.e. DS:SI or seg:SI if a segment override prefix was
 used) did not cause the exception. After updating SI, look at the source operand address to see if exception 13
 would occur. If not, then DI must also be updated the same as SI. Always increment CX to restart MOVS if it was
 repeated. IF DI was updated and a repeat prefix was used, then CX must be incremented again for correct instruction
 restart.
    
 * For CMPS, the DI register must always be updated by the exception handler to restart the instruction. The state
 of the DF bit in the flag word and the operand size determines whether to use +2, +1, -1, or -2 to update DI.
 The SI register must also be updated if the ES:DI operand did not cause the exception. After updating DI, look at
 ES:DI to see if exception 13 would occur. If not, then SI must also be updated the same as DI. Increment CX if
 CMPS was repeated to restart it. IF SI was updated and a repeat prefix was used, then CX must be incremented for
 correct instruction restart.
