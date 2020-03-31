---
layout: page
title: "The MS-DOS Encyclopedia: Appendix M: 8086/8088 Software Compatibility Issues"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-m/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-m/
---

### Appendix M: 8086/8088 Software Compatibility Issues

{% raw %}

	     In general, the Intel 80286 microprocessor running in real mode
	     executes 8086/8088 software correctly. The following is a list of the
	     actions to take to compensate for the minor differences between the
	     8086/8088 and real mode of the 80286.
	
	     ■  Do not rely on 8086/8088 instruction clock counts. The 80286 takes
	        fewer clocks for most instructions than the 8086/8088. The areas to
	        look into are delays between I/O operations and assumed delays when
	        the 8086/8088 is operating in parallel with an 8087 coprocessor.
	
	     ■  Note that divide exceptions point to the DIV instruction. Any
	        interrupt on the 80286 always leaves the saved CS:IP value pointing
	        to the instruction that failed. On the 8086/8088, the CS:IP value
	        saved for a divide exception points to the next instruction.
	
	     ■  Set up numeric exception handlers to allow prefixes. The saved
	        CS:IP value in the NPX environment save area points to any ESC
	        instruction prefixes. On 8086/8088 systems, this value points only
	        to the ESC instruction.
	
	     ■  Do not attempt undefined 8086/8088 operations. 8086/8088
	        instructions like POP CS or MOV CS,op either invoke exception 06H
	        (Invalid Opcode) or perform a protection setup operation like LIDT
	        on the 80286. Undefined bit encodings for bits 5-3 of the second
	        byte of POP MEM or PUSH MEM invoke exception 13H on the 80286.
	
	     ■  Do not rely on the value written by PUSH SP. The 80286 pushes a
	        different value on the stack for PUSH SP than does the 8086/8088.
	        If the value pushed is important, replace PUSH SP instructions with
	        the following instructions:
	
	        PUSH        BP
	        MOV         BP,SP
	        XCHG        BP,[BP]
	
	        This code functions like the 8086/8088 PUSH SP instruction on the
	        80286.
	
	     ■  Do not shift or rotate by more than 31 bits. The 80286 masks all
	        SHIFT/ROTATE counts to the low 5 bits. This MOD 32 operation limits
	        the count to a maximum of 31 bits. With this change, the longest
	        SHIFT/ROTATE instruction is 39 clocks. Without this change, the
	        longest SHIFT/ROTATE instruction is 264 clocks, which delays
	        interrupt response until the instruction completes execution.
	
	     ■  Do not duplicate prefixes. The 80286 sets an instruction-length
	        limit of 10 bytes. The only way to exceed this limit is to include
	        the same prefix two or more times before an instruction. Exception
	        06H occurs if the instruction-length limit is violated. The
	        8086/8088 has no instruction-length limit.
	
	     ■  Do not rely on odd 8086/8088 LOCK characteristics. The LOCK prefix
	        and its corresponding output signal should be used only to prevent
	        other bus masters from interrupting a data movement operation. The
	        80286 always asserts LOCK during an XCHG instruction with memory
	        (even if the LOCK prefix was not used). LOCK should be used only
	        with the XCHG, MOV, MOVS, INS, and OUTS instructions. The 80286
	        LOCK signal will not go active during an instruction prefetch.
	
	     ■  Do not rely on IDIV exceptions for quotients of 80H or 8000H. The
	        80286 can generate the largest negative number as a quotient for
	        IDIV instructions. The 8086/8088 generates exception 00H (Divide by
	        Zero) instead.
	
	     ■  Do not rely on address space wraparound.
	
	     ■  Do not use I/O ports 0F8-0FFH. These are reserved for controlling
	        the 80287 and future microprocessor extensions.

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
