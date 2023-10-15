---
layout: page
title: "Intel 80286 CPU Errata: REP Restart"
permalink: /documents/manuals/intel/80286/rep_restart/
redirect_from: /pubs/pc/reference/intel/80286/rep_restart/
---

[The following information is from an Intel document titled "[80286 REP MOVS and REP INS Restartability, 15 October 1984](https://docs.pcjs.org/manuals/intel/80286/80286_B2_B3_REP-1984-10-15.pdf)"]

### 80286 REP MOVS and REP INS Restartability

The repeated string instructions on 80286 were made restartable after protection violations on the (B-2/B-3) and
later 80286 steppings. Should a protection violation occur when using these instructions in protected mode, it is
possible for the Exception 13 (General Protection Violation) handler to adjust the SI register and/or the DI register
and/or the CX register to allow proper restart of these instructions after it has corrected the protection violation.
[Note that when an external interrupt {from the INTR pin) interrupts a repeated string instruction, the repeated
string instructions on any stepping of 80286 all restart properly just by returning from the interrupt procedure.]

When a protection violation occurs, the exact rules for the exception 13 handler to use when restarting the repeated
string instructions were given in the Intel technical memo "iAPX 286 LOADALL Instruction." However, there is an
errata in the 80286 (B-2/B-3) and (C-2) steppings which prevent the restart rules given in "iAPX 286 LOADALL Instruction"
from properly restarting the REP MOVS and REP INS and REP OUTS instructions after a protection violation under all
conditions. Specifically, there is an inconsistency if a violation occurs on the last word or byte to be transferred by
REP MOVS or REP INS instructions, or a if an IOPL violation occurs from the REP OUTS instruction when the CX register
is initially 0001H.

Case of REP MOVSW or REP MOVSB:

> If the destination of the last word (REP MOVSW) or byte (REP MOVSB) to be moved causes a protection violation,
then the value in the CX register is 0000H. However, for the restart rule covering REP MOVS destination violations
to work properly at all times, the value in CX under this condition should be 0ffffH.

Case of REP INSW or REP INSB:

> If the memory destination of the last word (REP INSW) or byte (REP INSB) to be inputted causes a protection-violation,
then the value in the CX register is 0000H. However, for the restart rule covering REP INS destination violations to work
properly at all times, the value in CX under this condition should be 0ffffH.

Case of REP OUTSW or REP OUTSB:

> If the CX register is initially 0001H and a REP OUTSW or REP OUTSB causes an IOPL violation, then the value in the CX
register will be 0000H. However, for the rule covering REP OUTS restartability after IOPL violations to work properly
at all times, the value in CX (after the CPU detects the violation) under this condition should be 0ffffH.

The above three problems are being corrected in all future steppings of the 80286. When the corrections are made, the CX
register will hold 0ffffH when the CPU detects a violation due to the conditions above. Note that even when REP MOVS and
REP INS restartability is corrected, CX will correctly continue to be 0000H when these instructions complete without generating
a protection violation.
