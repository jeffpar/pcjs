---
layout: page
title: Intel 8086/8088 CPU Information
permalink: /documents/manuals/intel/8086/
redirect_from: /pubs/pc/reference/intel/8086/
---

We do not have any official Intel documentation of 8086/8088 errata, but the following are well-known "features"
of those CPUs.

### 8086 Errata

### Interrupts Following MOV SS,xxx and POP SS Instructions May Corrupt Memory

On early Intel 8088 processors (marked "INTEL '78" or "(C) 1978"), if an interrupt occurs immediately after a
`MOV SS,xxx` or `POP SS` instruction, data may be pushed using an incorrect stack address, resulting in memory
corruption.

The work-around is to change SS (along with SP) only when hardware interrupts are disabled.  However, that does
not resolve NMIs (non-maskable interrupts); on IBM PCs, you can work around the NMI problem by temporarily disabling
NMIs (see port 0x61).

Intel provided a fix for this on later processors, by delaying the acknowledgement of hardware interrupts immediately
after a `MOV SS,xxx` or `POP SS` instruction; the delay lasts only one instruction, so you're obliged to change SP on
the very next instruction.

Intel's fix also appears to have been overbroad: *all* `MOV segreg,xxx` and `POP segreg`
instructions delay interrupts, not just `MOV SS,xxx` and `POP SS`.  In fact, it's been
[reported](http://www.malinov.com/Home/sergeys-projects/sergey-s-xt/historical-notes) that all
`PUSH segreg` instructions may also have the same delaying effect, at least on some 80C88 processors.

### Interrupted String Instructions With Multiple Prefixes Do Not Resume Correctly

If a repeated string instruction includes more than one override prefix; eg:

		REP ES: MOVSB

and an interrupt occurs, the instruction will restart with the last override prefix byte, ignoring any
preceding prefix bytes.  This was never fixed in any 8086/8088.

The recommended work-around is to ensure that the *segment override* is the last prefix byte, and then rewrite
the operation like this:

	top:
		REP ES: MOVSB
		JCXZ    done
		JMP     top
	done:

If you're not sure your assembler will output the `REP` and `ES:` overrides in the order shown, then you should
generate the override bytes manually, using **DB** or a similar assembler directive.

8086 Undocumented Instructions
------------------------------

Some of the following information is courtesy of the [OS/2 Museum](http://www.os2museum.com/wp/undocumented-8086-opcodes/).

### POP CS (0x0F)

This single-byte opcode existed only on the 8086/8088, and was of limited use, since it altered CS without a
corresponding IP.

There is no `POP CS` instruction on later x86 CPUs.  The opcode was explicitly made invalid on the 80186/80188,
but was reused on later CPUs (starting with the 80286) as the first byte in a series of two-byte opcodes.

### Duplicate Conditional Jumps (0x60-0x6F)

Opcodes 0x60 through 0x6F decode identically to the conditional jump opcodes at 0x70 through 0x7F, respectively.
This is not true for any other x86 CPU.

### MOV segreg,xxx (0x8E)

Similar to `POP CS`, this instruction was of limited value when the selected *segreg* was CS.

Note that *segreg* is encoded as a 3-bit value in the second byte of the instruction, where:

  - 0 = ES
  - 1 = CS (invalid on 80286 and later)
  - 2 = SS
  - 3 = DS
  - 4 = ES (invalid on 80286, FS on 80386 and later)
  - 5 = CS (invalid on 80286, GS on 80386 and later)
  - 6 = SS (invalid on 80286 and later)
  - 7 = DS (invalid on 80286 and later)
 
On the 8086/8088/80186/80188, values 0-3 were treated the same as values 4-7, and all values were allowed.

### Duplicate RET and RETF Instructions (0xC0, 0xC1, 0xC8, 0xC9)

  - Opcode 0xC0 decodes identically to RET n (0xC2) 
  - Opcode 0xC1 decodes identically to RET (0xC3) 
  - Opcode 0xC8 decodes identically to RETF n (0xCA) 
  - Opcode 0xC9 decodes identically to RET n (0xCB)

Starting with the 80186, opcodes 0xC0 and 0xC1 were reused for new shift and rotate instruction groups,
and opcodes 0xC8 and 0xC9 became the `ENTER` and `LEAVE` instructions.

### [AAM](/documents/manuals/intel/8086/ops/AAM/) (0xD4)

While AAM is documented, it has undocumented features (eg, its ability to divide by values other than 10,
and its effect on the flags).  See the [AAM](/documents/manuals/intel/8086/ops/AAM/) instruction for details.

### [AAD](/documents/manuals/intel/8086/ops/AAD/) (0xD5)

While AAD is documented, it has undocumented features (eg, its ability to multiply by values other than 10,
and its effect on the flags).  See the [AAD](/documents/manuals/intel/8086/ops/AAD/) instruction for details.

### [SALC](/documents/manuals/intel/8086/ops/SALC/) (0xD6)

Performs an operation equivalent to `SBB AL,AL`, but without modifying any flags.  In other words, AL will be set to
0xFF or 0x00, depending on whether CF is set or clear.  This instruction exists on all later x86 CPUs, but for some
reason, it has never been documented.  Also known as **SETALC**.

### Duplicate LOCK Prefix (0xF1)

It is believed that 0xF1 decodes identically to 0xF0 (the `LOCK` prefix).

On newer processors, 0xF1 is an undocumented instruction usually called `ICEBP` or `INT1`.  See the
[ICEBP](/documents/manuals/intel/80386/ops/ICEBP/) instruction for details.

### Assorted Publications

  - TBD
