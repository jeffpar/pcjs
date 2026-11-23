@
@ ARM CPU test program for the PCjs ARM emulator (see testarm.js)
@
@ This program runs "bare metal" on QEMU's sx1 machine (an OMAP310, which uses the same ARM925T core as the OMAP1510)
@ and on the PCjs CPUARM device, and it reports everything it does by writing text to the first OMAP UART; the two
@ sets of output must match exactly.
@
@ The hand-written tests in this file cover processor modes, banked registers, exceptions, and the MMU; they are
@ followed by thousands of randomly generated instruction tests that testarm.js appends to this file.
@
@ Everything that is UNPREDICTABLE (or that QEMU is known to do differently from real ARM9 hardware, such as unaligned
@ loads and stores of the PC) is deliberately avoided here, and tested separately by testarm.js.
@
@ Register conventions: R8 is the UART, R9 is the work area, and R0-R2 are scratch (destroyed by puthex).
@
        .syntax unified
        .text
        .arm

        .equ    UART,       0xfffb0000
        .equ    WORK,       0x10400000          @ work area (and, at +0x100, a 32-word scratch buffer)
        .equ    STACKS,     0x10500000
        .equ    TTB,        0x10600000          @ first-level page table
        .equ    COARSE,     0x10604000          @ coarse page table for VA 0x00000000
        .equ    FINE,       0x10608000          @ fine page table for VA 0x00100000
        .equ    PAGES,      0x10700000          @ physical memory for the pages mapped at VA 0x00000000
        .equ    SECTION,    0x10800000          @ physical memory for assorted sections
        .equ    FCSE,       0x10900000          @ physical memory for the section at VA 0x02000000

        .macro  PUTC c
        mov     r0, #\c
        strb    r0, [r8]
        .endm

        .macro  LABEL c1, c2
        b       99f
        .ltorg
99:
        PUTC    \c1
        PUTC    \c2
        PUTC    10
        .endm

        .macro  SHOW reg
        mov     r0, \reg
        bl      puthex
        .endm

        .macro  TO_THUMB
        add     r12, pc, #1
        bx      r12
        .thumb
        .endm

        .macro  TO_ARM
        .balignw 4, 0x46c0
        bx      pc
        nop
        .arm
        .endm

_start:
        msr     cpsr_fc, #0xd3
        ldr     r8, =UART
        ldr     r9, =WORK
        ldr     sp, =STACKS
        b       main

@
@ puthex: print R0 as 8 hex digits and a newline (destroys R0-R2 and the flags)
@
puthex:
        mov     r2, #8
1:      mov     r0, r0, ror #28
        and     r1, r0, #15
        cmp     r1, #10
        addlt   r1, r1, #'0'
        addge   r1, r1, #'a'-10
        strb    r1, [r8]
        subs    r2, r2, #1
        bne     1b
        mov     r1, #10
        strb    r1, [r8]
        mov     pc, lr

@
@ report: print a hash of R0-R7, the flags, and the scratch buffer (preserves R0-R7; destroys R12 and the flags)
@
report:
        stmia   r9, {r0-r7}
        mrs     r0, cpsr
        mov     r0, r0, lsr #28
        mov     r1, #8
        mov     r2, r9
1:      ldr     r3, [r2], #4
        eor     r0, r3, r0, ror #5
        add     r0, r0, r0, lsl #3
        subs    r1, r1, #1
        bne     1b
        add     r2, r9, #0x100
        mov     r1, #32
2:      ldr     r3, [r2], #4
        eor     r0, r3, r0, ror #5
        add     r0, r0, r0, lsl #3
        subs    r1, r1, #1
        bne     2b
        mov     r12, lr
        bl      puthex
        mov     lr, r12
        ldmia   r9, {r0-r7}
        mov     pc, lr

@
@ Exception handlers; each prints a letter followed by one or more values.
@
@ The undefined instruction and SWI handlers return to the next instruction.
@
und_handler:
        stmfd   sp!, {r0-r3, r12, lr}
        PUTC    'U'
        ldr     r0, [sp, #20]
        bl      puthex
        mrs     r0, spsr
        ldr     r1, =0xf00000ff
        and     r0, r0, r1
        bl      puthex
        ldmfd   sp!, {r0-r3, r12, lr}
        movs    pc, lr

@
@ SWI 0x77 is special: it returns to the caller WITHOUT restoring the CPSR, leaving the caller in Supervisor mode.
@
swi_handler:
        stmfd   sp!, {r0-r3, r12, lr}
        PUTC    'S'
        mrs     r3, spsr
        tst     r3, #0x20
        ldreq   r0, [lr, #-4]
        biceq   r0, r0, #0xff000000
        ldrhne  r0, [lr, #-2]
        andne   r0, r0, #0xff
        mov     r12, r0
        bl      puthex
        ldr     r1, =0xf00000ff
        and     r0, r3, r1
        bl      puthex
        cmp     r12, #0x77
        ldmfdeq sp!, {r0-r3, r12, pc}
        ldmfd   sp!, {r0-r3, r12, pc}^

@
@ The prefetch abort handler can't return to the aborted instruction, so it "returns" to the address in R11 instead
@ (in ARM state).
@
pabt_handler:
        PUTC    'P'
        mov     r0, lr
        bl      puthex
        mrs     r0, spsr
        ldr     r1, =0xf00000ff
        and     r0, r0, r1
        bl      puthex
        mrs     r0, spsr
        bic     r0, r0, #0x20
        msr     spsr_c, r0
        movs    pc, r11

@
@ The data abort handler prints the fault status and address, and then skips the aborted instruction.
@
dabt_handler:
        mrs     r12, spsr
        tst     r12, #0x20
        subeq   lr, lr, #4
        subne   lr, lr, #6
        stmfd   sp!, {r0-r3, r12, lr}
        PUTC    'D'
        mrc     p15, 0, r0, c5, c0, 0
        and     r0, r0, #0xff
        bl      puthex
        mrc     p15, 0, r0, c6, c0, 0
        bl      puthex
        ldr     r0, [sp, #20]
        bl      puthex
        ldmfd   sp!, {r0-r3, r12, pc}^

        .ltorg

main:
        @
        @ Initialize the scratch buffer.
        @
        add     r0, r9, #0x100
        ldr     r1, =0x12345678
        mov     r2, #32
1:      str     r1, [r0], #4
        add     r1, r1, r1, ror #3
        subs    r2, r2, #1
        bne     1b

        @
        @ ID registers
        @
        LABEL   'I', 'D'
        mrc     p15, 0, r0, c0, c0, 0
        bl      puthex
        mrc     p15, 0, r0, c0, c0, 1
        bl      puthex
        mrc     p15, 0, r0, c1, c0, 0
        bl      puthex

        @
        @ Banked registers: give every mode's SP, LR, and SPSR (and FIQ's R8-R12) distinct values...
        @
        LABEL   'B', 'K'
        mov     r10, #0xaa
        mov     r11, #0xbb
        mov     r12, #0xcc

        .irp    mode, 0x11, 0x12, 0x17, 0x1b, 0x1f, 0x13
        msr     cpsr_c, #(0xc0 | \mode)
        ldr     sp, =(0x11110000 + \mode)
        ldr     lr, =(0x22220000 + \mode)
        .if     \mode != 0x1f
        ldr     r0, =(0xf0000000 | (\mode << 20) | 0x10)
        msr     spsr_fsxc, r0
        .endif
        .if     \mode == 0x11
        mov     r8, #0x81
        mov     r9, #0x91
        mov     r10, #0xa1
        mov     r11, #0xb1
        mov     r12, #0xc1
        .endif
        .endr

        @
        @ ...and then read them all back.
        @
        .irp    mode, 0x11, 0x12, 0x17, 0x1b, 0x1f, 0x13
        msr     cpsr_c, #(0xc0 | \mode)
        mov     r4, sp
        mov     r5, lr
        mrs     r6, spsr
        add     r7, r8, r10
        add     r7, r7, r12
        .if     \mode == 0x11
        add     r7, r7, r9
        add     r7, r7, r11
        .endif
        msr     cpsr_c, #0xd3
        SHOW    r4
        SHOW    r5
        .if     \mode != 0x1f
        ldr     r1, =0xf00000ff
        and     r0, r6, r1
        bl      puthex
        .endif
        .if     \mode == 0x11
        SHOW    r7
        .endif
        .endr
        SHOW    r10
        SHOW    r11
        SHOW    r12

        @
        @ The S bit on STM and LDM transfers the User mode registers; try that from Supervisor and FIQ modes.
        @
        stmia   r9, {sp, lr}^
        nop
        ldr     r0, [r9]
        bl      puthex
        ldr     r0, [r9, #4]
        bl      puthex
        ldr     r0, =0x33330001
        str     r0, [r9]
        ldr     r0, =0x33330002
        str     r0, [r9, #4]
        ldmia   r9, {sp, lr}^
        nop
        msr     cpsr_c, #0xdf
        mov     r4, sp
        mov     r5, lr
        msr     cpsr_c, #0xd3
        SHOW    r4
        SHOW    r5
        SHOW    sp
        SHOW    lr

        mov     r4, r9
        msr     cpsr_c, #0xd1
        stmia   r4, {r8-r14}^
        nop
        ldr     r0, =0x44440000
        str     r0, [r4, #8]
        ldmia   r4, {r8-r12}^
        nop
        mov     r5, r10
        msr     cpsr_c, #0xd3
        SHOW    r10
        SHOW    r5
        mov     r10, #0xaa
        mov     r4, #0
1:      ldr     r0, [r9, r4]
        bl      puthex
        add     r4, r4, #4
        cmp     r4, #28
        bne     1b

        @
        @ Now give every exception mode a real stack.
        @
        .irp    mode, 0x11, 0x12, 0x17, 0x1b, 0x1f, 0x13
        msr     cpsr_c, #(0xc0 | \mode)
        ldr     sp, =(STACKS - (\mode << 12))
        .endr

        @
        @ MRS and MSR
        @
        LABEL   'M', 'S'
        msr     cpsr_f, #0xf0000000
        mrs     r0, cpsr
        ldr     r4, =0xf00000ff
        and     r0, r0, r4
        bl      puthex
        msr     cpsr_f, #0x50000000
        mrs     r0, cpsr
        and     r0, r0, r4
        bl      puthex
        mov     r0, #0
        msr     cpsr_f, r0
        mov     r0, #0xa0000000
        msr     spsr_f, r0
        mrs     r0, spsr
        and     r0, r0, r4
        bl      puthex
        mov     r0, #0x1f
        msr     spsr_c, r0
        mrs     r0, spsr
        and     r0, r0, r4
        bl      puthex
        mvn     r0, #0
        msr     spsr_fsxc, r0
        mrs     r0, spsr
        and     r0, r0, r4
        bl      puthex
        mrs     r0, cpsr
        and     r0, r0, r4
        bl      puthex

        @
        @ Condition codes (ARM): for each of the 16 combinations of flags, record which conditions are true.
        @
        LABEL   'C', 'A'
        .irp    flags, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        msr     cpsr_f, #(\flags << 28)
        mov     r4, #0
        orreq   r4, r4, #(1 << 0)
        orrne   r4, r4, #(1 << 1)
        orrcs   r4, r4, #(1 << 2)
        orrcc   r4, r4, #(1 << 3)
        orrmi   r4, r4, #(1 << 4)
        orrpl   r4, r4, #(1 << 5)
        orrvs   r4, r4, #(1 << 6)
        orrvc   r4, r4, #(1 << 7)
        orrhi   r4, r4, #(1 << 8)
        orrls   r4, r4, #(1 << 9)
        orrge   r4, r4, #(1 << 10)
        orrlt   r4, r4, #(1 << 11)
        orrgt   r4, r4, #(1 << 12)
        orrle   r4, r4, #(1 << 13)
        SHOW    r4
        .endr

        @
        @ Condition codes (Thumb), using only instructions that don't affect the flags.
        @
        LABEL   'C', 'T'
        .irp    flags, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        mov     r10, #1
        mov     r11, #0
        msr     cpsr_f, #(\flags << 28)
        TO_THUMB
        .irp    cond, eq, ne, cs, cc, mi, pl, vs, vc, hi, ls, ge, lt, gt, le
        add     r11, r11
        b\cond  1f
        b       2f
1:      add     r11, r10
2:
        .endr
        TO_ARM
        SHOW    r11
        .endr
        mov     r10, #0xaa
        mov     r11, #0xbb

        @
        @ Assorted ARM instructions
        @
        LABEL   'A', 'R'
        ldr     r4, =0x11223344
        add     r5, r9, #0x40
        str     r4, [r5]
        ldr     r6, =0xaabbccdd
        swp     r7, r6, [r5]
        SHOW    r7
        ldr     r0, [r5]
        bl      puthex
        swpb    r7, r4, [r5]
        SHOW    r7
        ldr     r0, [r5]
        bl      puthex

        @ a loaded PC ignores bit 0 on ARMv4T (ie, no interworking)
        ldr     r0, =1f
        orr     r0, r0, #1
        str     r0, [r5]
        ldr     pc, [r5]
        PUTC    '!'
1:      mrs     r0, cpsr
        and     r0, r0, #0x20
        bl      puthex

        @ STM with the base register first in the list stores the original base
        mov     r4, r5
        stmia   r4!, {r4, r6}
        sub     r0, r4, r5
        bl      puthex
        ldr     r0, [r5]
        sub     r0, r0, r5
        bl      puthex

        @ LDM with the base register in the list loads the base
        ldr     r0, =0x55667788
        str     r0, [r5]
        mov     r4, r5
        ldmia   r4!, {r4, r6}
        SHOW    r4
        SHOW    r6

        @ all four block transfer modes, with a full register list
        add     r4, r9, #0x140
        ldr     r0, =0x01010101
        add     r1, r0, r0
        add     r2, r1, r0
        add     r3, r2, r0
        stmdb   r4!, {r0-r3}
        stmib   r4!, {r0-r3}
        stmda   r4!, {r0-r3}
        stmia   r4!, {r0-r3}
        add     r5, r9, #0x140
        sub     r0, r4, r5
        bl      puthex
        ldmdb   r4!, {r0-r3}
        add     r6, r0, r3
        ldmib   r4!, {r0-r3}
        add     r6, r6, r1
        ldmda   r4!, {r0-r3}
        add     r6, r6, r2
        ldmia   r4!, {r0-r3}
        add     r6, r6, r3
        SHOW    r6
        sub     r0, r4, r5
        bl      puthex
        bl      report

        @ BX to Thumb and back, and BL/BX within ARM
        ldr     r0, =2f
        mov     lr, pc
        bx      r0
        b       3f
2:      PUTC    'x'
        bx      lr
3:      PUTC    10

        @
        @ Assorted Thumb instructions
        @
        LABEL   'T', 'H'
        ldr     r0, =0x80000001
        ldr     r1, =0x7fffffff
        TO_THUMB
        mov     r4, sp
        push    {r0, r1, lr}
        mov     r5, sp
        subs    r4, r4, r5              @ 12
        ldr     r5, [sp, #4]            @ 0x7fffffff
        str     r0, [sp, #4]
        add     r6, sp, #4
        ldr     r6, [r6]                @ 0x80000001
        sub     sp, #16
        mov     r7, sp
        add     sp, #16
        mov     r2, sp
        subs    r7, r2, r7              @ 16
        pop     {r2, r3}
        add     sp, #4
        mov     r10, r2                 @ 0x80000001
        mov     r11, r3                 @ 0x80000001
        add     r10, r11
        cmp     r10, r11
        bne     1f
        movs    r7, #0xee
1:      mov     r2, r10
        bl      thumb_func
        bl      thumb_func
        adr     r3, 2f
        adds    r3, #1
        mov     lr, r3
        b       thumb_func
        .balign 4
2:      ldr     r1, =0xcafe0000
        adds    r1, r1, r3
        adr     r3, 3f
        mov     pc, r3
        movs    r1, #0
        .balign 4
3:      adr     r3, 4f
        push    {r3}                    @ a popped PC ignores bit 0 on ARMv4T (ie, no interworking)
        pop     {pc}
        movs    r1, #0
        .balign 4
4:      b       5f

thumb_func:
        push    {r4, lr}
        adds    r2, #1
        pop     {r4, pc}

        .ltorg
5:
        TO_ARM
        bl      report
        SHOW    r1
        SHOW    r2
        SHOW    r4
        SHOW    r5
        SHOW    r6
        SHOW    r7
        mov     r10, #0xaa
        mov     r11, #0xbb

        @
        @ MMU: build the page tables (see the list of mappings below), and then turn it on.
        @
        LABEL   'M', 'M'
        ldr     r0, =TTB
        mov     r1, #0
        ldr     r2, =0x3000             @ clear all three tables (0xc000 bytes)
1:      str     r1, [r0], #4
        subs    r2, r2, #1
        bne     1b

        ldr     r4, =TTB
        @ VA 0x10000000-0x11ffffff: RAM (identity, domain 0, AP 3)
        ldr     r0, =(0x10000000 | 0xc12)
        add     r1, r4, #(0x100 << 2)
        mov     r2, #32
1:      str     r0, [r1], #4
        add     r0, r0, #0x00100000
        subs    r2, r2, #1
        bne     1b
        @ VA 0xfff00000: peripherals (identity, domain 0, AP 3)
        ldr     r0, =(0xfff00000 | 0xc12)
        ldr     r1, =(TTB + (0xfff << 2))
        str     r0, [r1]
        @ VA 0x00000000: coarse page table
        ldr     r0, =(COARSE | 0x11)
        str     r0, [r4, #(0x000 << 2)]
        @ VA 0x00100000: fine page table
        ldr     r0, =(FINE | 0x13)
        str     r0, [r4, #(0x001 << 2)]
        @ VA 0x00200000: section, domain 1, AP 3
        ldr     r0, =(SECTION | 0xc12 | (1 << 5))
        str     r0, [r4, #(0x002 << 2)]
        @ VA 0x00300000: section, domain 0, AP 0
        ldr     r0, =(SECTION | 0x012)
        str     r0, [r4, #(0x003 << 2)]
        @ VA 0x00400000: section, domain 2, AP 0
        ldr     r0, =(SECTION | 0x012 | (2 << 5))
        str     r0, [r4, #(0x004 << 2)]
        @ VA 0x00500000: section, domain 0, AP 1
        ldr     r0, =(SECTION | 0x412)
        str     r0, [r4, #(0x005 << 2)]
        @ VA 0x00600000: section, domain 0, AP 2
        ldr     r0, =(SECTION | 0x812)
        str     r0, [r4, #(0x006 << 2)]
        @ VA 0x02000000: section, domain 0, AP 3 (for the FCSE test)
        ldr     r0, =(FCSE | 0xc12)
        str     r0, [r4, #(0x020 << 2)]

        ldr     r4, =COARSE
        @ VA 0x00000000: small page, AP 3 (the exception vectors)
        ldr     r0, =(PAGES | 0xff2)
        str     r0, [r4, #(0 << 2)]
        @ VA 0x00001000: small page, with subpage APs of 3, 2, 1, and 0
        ldr     r0, =((PAGES + 0x1000) | (3 << 4) | (2 << 6) | (1 << 8) | (0 << 10) | 2)
        str     r0, [r4, #(1 << 2)]
        @ VA 0x00002000: unmapped
        @ VA 0x00003000: tiny page (which is not valid in a coarse page table)
        ldr     r0, =((PAGES + 0x3000) | 0x33)
        str     r0, [r4, #(3 << 2)]
        @ VA 0x00010000: large page, with subpage APs of 3, 1, 2, and 0
        ldr     r0, =((PAGES + 0x10000) | (3 << 4) | (1 << 6) | (2 << 8) | (0 << 10) | 1)
        add     r1, r4, #(16 << 2)
        mov     r2, #16
1:      str     r0, [r1], #4
        subs    r2, r2, #1
        bne     1b

        ldr     r4, =FINE
        @ VA 0x00100000: tiny page, AP 3
        ldr     r0, =((PAGES + 0x20000) | (3 << 4) | 3)
        str     r0, [r4, #(0 << 2)]
        @ VA 0x00100400: tiny page, AP 1
        ldr     r0, =((PAGES + 0x20400) | (1 << 4) | 3)
        str     r0, [r4, #(1 << 2)]
        @ VA 0x00100800: unmapped
        @ VA 0x00101000: small page, AP 3
        ldr     r0, =((PAGES + 0x21000) | 0xff2)
        str     r0, [r4, #(4 << 2)]
        str     r0, [r4, #(5 << 2)]
        str     r0, [r4, #(6 << 2)]
        str     r0, [r4, #(7 << 2)]

        ldr     r0, =TTB
        mcr     p15, 0, r0, c2, c0, 0
        mov     r0, #0x31               @ domain 0: client, domain 1: no access, domain 2: manager
        mcr     p15, 0, r0, c3, c0, 0
        mrc     p15, 0, r0, c1, c0, 0
        orr     r0, r0, #1
        mcr     p15, 0, r0, c1, c0, 0
        nop
        nop
        mrc     p15, 0, r0, c1, c0, 0
        bl      puthex
        mrc     p15, 0, r0, c2, c0, 0
        bl      puthex
        mrc     p15, 0, r0, c3, c0, 0
        bl      puthex

        @
        @ Install the exception vectors at VA 0.
        @
        mov     r0, #0
        ldr     r1, =0xe59ff018         @ LDR PC,[PC,#0x18]
        mov     r2, #8
1:      str     r1, [r0], #4
        subs    r2, r2, #1
        bne     1b
        ldr     r1, =und_handler
        str     r1, [r0, #0x04]
        ldr     r1, =swi_handler
        str     r1, [r0, #0x08]
        ldr     r1, =pabt_handler
        str     r1, [r0, #0x0c]
        ldr     r1, =dabt_handler
        str     r1, [r0, #0x10]
        b       1f
        .ltorg
1:
        @
        @ Exceptions: SWI and undefined instructions, in both ARM and Thumb states
        @
        LABEL   'E', 'X'
        msr     cpsr_f, #0x60000000
        svc     0x123
        .word   0xe7f000f0              @ undefined
        .word   0xee000a10              @ MCR for a coprocessor we don't have
        .word   0x07f000f0              @ undefined, but conditional (EQ), so not executed the second time
        msr     cpsr_f, #0x90000000
        .word   0x07f000f0
        TO_THUMB
        svc     0x42
        .short  0xde00                  @ undefined
        nop
        TO_ARM

        @
        @ Data aborts: every kind of fault that the MMU can generate
        @
        LABEL   'D', 'A'
        ldr     r6, =0xdeadbeef
        ldr     r4, =0x00700000         @ unmapped section
        mov     r5, r6
        ldr     r5, [r4]
        SHOW    r5
        str     r5, [r4, #0x124]
        ldrb    r5, [r4, #0x3]
        ldr     r4, =0x00200000         @ domain with no access
        ldr     r5, [r4, #8]
        ldr     r4, =0x00002000         @ unmapped page
        ldr     r5, [r4, #0xc]
        ldr     r4, =0x00003000         @ tiny page in a coarse page table
        ldr     r5, [r4, #0xc]
        ldr     r4, =0x00100800         @ unmapped tiny page
        strh    r5, [r4, #2]

        @ AP 0, with and without the S and R bits
        ldr     r4, =0x00300000
        ldr     r7, =0x00c0ffee
        ldr     r10, =(SECTION + 0x10)
        str     r7, [r10]
        mov     r5, r6
        ldr     r5, [r4, #0x10]         @ fault
        SHOW    r5
        mrc     p15, 0, r3, c1, c0, 0
        orr     r0, r3, #0x100          @ S
        mcr     p15, 0, r0, c1, c0, 0
        ldr     r5, [r4, #0x10]         @ ok
        SHOW    r5
        str     r5, [r4, #0x10]         @ fault
        orr     r0, r3, #0x200          @ R
        mcr     p15, 0, r0, c1, c0, 0
        mov     r5, r6
        ldr     r5, [r4, #0x10]         @ ok
        SHOW    r5
        str     r5, [r4, #0x10]         @ fault
        orr     r0, r3, #0x300          @ S and R
        mcr     p15, 0, r0, c1, c0, 0
        mrc     p15, 0, r0, c1, c0, 0
        bl      puthex
        mcr     p15, 0, r3, c1, c0, 0

        @ a "manager" domain ignores AP
        ldr     r4, =0x00400000
        ldr     r5, =0x600dcafe
        str     r5, [r4, #0x14]
        ldr     r0, [r10, #4]
        bl      puthex

        @ now give domain 1 "client" access
        mov     r0, #0x35
        mcr     p15, 0, r0, c3, c0, 0
        ldr     r4, =0x00200000
        ldr     r5, [r4, #0x14]
        SHOW    r5
        mov     r0, #0x39               @ and now an invalid value
        mcr     p15, 0, r0, c3, c0, 0
        ldr     r5, [r4, #0x14]
        mov     r0, #0x31
        mcr     p15, 0, r0, c3, c0, 0

        @ small page subpages (APs of 3, 2, 1, and 0)
        ldr     r4, =0x00001000
        mov     r5, #0x11
        str     r5, [r4]
        add     r5, r5, #0x11
        str     r5, [r4, #0x400]
        add     r5, r5, #0x11
        str     r5, [r4, #0x800]
        add     r5, r5, #0x11
        str     r5, [r4, #0xc00]        @ fault
        ldr     r10, =(PAGES + 0x1000)
        ldr     r0, [r10]
        bl      puthex
        ldr     r0, [r10, #0x400]
        bl      puthex
        ldr     r0, [r10, #0x800]
        bl      puthex

        @ large page subpages (APs of 3, 1, 2, and 0)
        ldr     r4, =0x00010000
        mov     r5, #0x55
        str     r5, [r4, #0x20]
        add     r4, r4, #0x4000
        add     r5, r5, #0x11
        str     r5, [r4, #0x20]
        add     r4, r4, #0x4000
        add     r5, r5, #0x11
        str     r5, [r4, #0x20]
        add     r4, r4, #0x4000
        add     r5, r5, #0x11
        str     r5, [r4, #0x20]         @ fault
        ldr     r10, =(PAGES + 0x10020)
        ldr     r0, [r10]
        bl      puthex
        add     r10, r10, #0x4000
        ldr     r0, [r10]
        bl      puthex
        add     r10, r10, #0x4000
        ldr     r0, [r10]
        bl      puthex

        @ tiny pages, and a small page in a fine page table
        ldr     r4, =0x00100000
        mov     r5, #0x99
        str     r5, [r4, #0x30]
        add     r5, r5, #0x11
        str     r5, [r4, #0x430]
        ldr     r4, =0x00101000
        add     r5, r5, #0x11
        str     r5, [r4, #0xc30]
        ldr     r10, =(PAGES + 0x20030)
        ldr     r0, [r10]
        bl      puthex
        ldr     r0, [r10, #0x400]
        bl      puthex
        ldr     r10, =(PAGES + 0x21c30)
        ldr     r0, [r10]
        bl      puthex
        mov     r10, #0xaa
        b       1f
        .ltorg
1:
        @ an aborted instruction leaves its base register unchanged
        LABEL   'B', 'R'
        ldr     r7, =0x006ffffc
        mov     r4, r7
        ldr     r5, [r4, #4]!
        sub     r0, r4, r7
        bl      puthex
        add     r4, r7, #4
        ldr     r5, [r4], #4
        sub     r0, r4, r7
        bl      puthex
        mov     r4, r7
        str     r5, [r4, #4]!
        sub     r0, r4, r7
        bl      puthex
        sub     r4, r7, #4
        ldmia   r4!, {r0-r3}
        sub     r0, r4, r7
        bl      puthex
        sub     r4, r7, #4
        stmia   r4!, {r0-r3}
        sub     r0, r4, r7
        bl      puthex
        add     r4, r7, #8
        ldmdb   r4!, {r5, r6}
        sub     r0, r4, r7
        bl      puthex

        @ LDRT and STRT use User mode permissions
        LABEL   'L', 'T'
        ldr     r4, =0x00500000         @ AP 1
        ldr     r6, =0xdeadbeef
        ldr     r5, =0x12121212
        str     r5, [r4]
        mov     r5, r6
        ldrt    r5, [r4], #0            @ fault
        SHOW    r5
        ldr     r5, [r4]
        SHOW    r5
        strt    r6, [r4], #0            @ fault
        ldr     r4, =0x00600000         @ AP 2
        ldrt    r5, [r4], #4            @ ok
        SHOW    r5
        strbt   r6, [r4], #0            @ fault
        ldr     r5, [r4]                @ ok (ie, we're still using privileged permissions)
        ldr     r0, =0x00600000
        sub     r0, r4, r0
        bl      puthex

        @ data abort in Thumb state
        LABEL   'D', 'T'
        ldr     r4, =0x00700000
        ldr     r6, =0xdeadbeef
        TO_THUMB
        adds    r5, r6, #0
        ldr     r5, [r4, #8]
        adds    r5, #1
        strb    r5, [r4, #9]
        adds    r5, #1
        TO_ARM
        SHOW    r5

        @
        @ Prefetch aborts
        @
        LABEL   'P', 'A'
        ldr     r11, =1f
        ldr     r4, =0x00700000
        mov     pc, r4
1:      ldr     r11, =2f
        ldr     r4, =0x00700101
        bx      r4
2:      mrs     r0, cpsr
        ldr     r1, =0xf00000ff
        and     r0, r0, r1
        bl      puthex
        mov     r11, #0xbb

        @
        @ User mode
        @
        LABEL   'U', 'M'
        msr     cpsr_c, #0xd0
        mrc     p15, 0, r0, c1, c0, 0   @ undefined
        msr     cpsr_c, #0xd3           @ ignored
        msr     cpsr_f, #0xa0000000
        mrs     r0, cpsr
        ldr     r4, =0xf00000ff
        and     r0, r0, r4
        bl      puthex
        ldr     r6, =0xdeadbeef
        ldr     r4, =0x00500000         @ AP 1
        mov     r5, r6
        ldr     r5, [r4]                @ fault
        SHOW    r5
        ldr     r4, =0x00600000         @ AP 2
        ldr     r5, [r4]                @ ok
        SHOW    r5
        str     r5, [r4]                @ fault
        ldr     r4, =0x00001000         @ subpage APs of 3, 2, 1, and 0
        ldr     r5, [r4]                @ ok
        str     r5, [r4]                @ ok
        ldr     r5, [r4, #0x400]        @ ok
        SHOW    r5
        str     r5, [r4, #0x400]        @ fault
        ldr     r5, [r4, #0x800]        @ fault
        ldr     r5, [r4, #0xc00]        @ fault
        ldr     r4, =0x00100400         @ tiny page, AP 1
        ldr     r5, [r4]                @ fault
        ldr     r4, =0x00300000         @ AP 0
        ldr     r5, [r4]                @ fault
        svc     0x77
        mrs     r0, cpsr
        and     r0, r0, #0xff
        bl      puthex

        @ AP 0 in User mode, with the S and R bits
        mrc     p15, 0, r3, c1, c0, 0
        orr     r0, r3, #0x100          @ S
        mcr     p15, 0, r0, c1, c0, 0
        msr     cpsr_c, #0xd0
        ldr     r4, =0x00300000
        ldr     r5, [r4, #0x10]         @ fault
        svc     0x77
        orr     r0, r3, #0x200          @ R
        mcr     p15, 0, r0, c1, c0, 0
        msr     cpsr_c, #0xd0
        mov     r5, r6
        ldr     r5, [r4, #0x10]         @ ok
        SHOW    r5
        str     r5, [r4, #0x10]         @ fault
        svc     0x77
        mcr     p15, 0, r3, c1, c0, 0

        @
        @ Fast Context Switch Extension: with a process ID of 1, VA 0x00001000 becomes VA 0x02001000.
        @
        LABEL   'F', 'C'
        ldr     r1, =(FCSE + 0x1000)
        ldr     r0, =0xfc5e0001
        str     r0, [r1]
        ldr     r4, =0x00001000
        mov     r0, #0x02000000
        mcr     p15, 0, r0, c13, c0, 0
        ldr     r5, [r4]
        mrc     p15, 0, r6, c13, c0, 0
        mov     r0, #0
        mcr     p15, 0, r0, c13, c0, 0
        SHOW    r5
        SHOW    r6
        ldr     r5, [r4]
        SHOW    r5
        b       random
        .ltorg

@
@ The randomly generated tests are appended here by testarm.js, starting with the label "random", and ending with
@ code that prints "DONE".
@
