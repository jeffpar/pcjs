---
layout: post
title: Booting a Windows 95 Startup Disk on an IBM PC AT
date: 2018-04-07 10:00:00
permalink: /blog/2018/04/07/
---

While I was [working on programmable font support](/blog/2018/04/05/) for EGA and VGA video cards, I wanted a quick
way to change the display mode from 25 rows to 43 (or 50) rows, and I remembered that the `MODE` command that shipped
with Windows 95 did just that:

    MODE CO80,43

which was a shorthand version of:

    MODE CON: LINES=43

I don't know why it took DOS so long to add support for such a simple feature.  IBM introduced the EGA in 1984, and yet
PC DOS 7.00, introduced *eleven years later*, still couldn't perform this simple function, at least not without help:

    ANSI.SYS must be installed to perform requested function

Even OS/2 1.0, released in 1987, supported `MODE CO80,43`, from both the OS/2 *and* DOS command prompts.

Anyway, when I attempted to boot a machine with the "Windows 95 (Startup Disk)" in drive A:, nothing happened.  No DOS
prompt, no error message, just a hung machine.

A quick peek with a [machine using the PCjs debugger](/configs/pcx86/xml/machine/5170/ega/640kb/rev1/debugger/machine.xml)
revealed the reason.  The disk's boot sector executes this instruction:

    AX=0013 BX=0700 CX=0001 DX=0000 SP=7BE2 BP=7C00 SI=00E0 DI=0700 
    SS=0000 DS=0000 ES=0000 PS=0096 V0 D0 I0 T0 S1 Z0 A1 P1 C0 
    &0000:7D3D 666A00           PUSH     00000000

which is a 32-bit `PUSH` instruction, introduced on the 80386, whereas the machine I happened to be using was an 80286-based
PC AT.  So, fair enough, Windows 95 did require *at least* an 80386 processor or newer, so it makes sense that a Windows 95
Startup Disk would have similar expectations/requirements.  And the boot sector probably didn't have enough room to perform
its own processor detection and display an error message -- although, with the benefit of hindsight, perhaps the boot sector
should have simply avoided using non-8086 instructions entirely and left appropriate processor detection and warnings to the
real-mode kernel.

And what was the PC AT doing about this unrecognized 80386 instruction?  Not a whole lot.

    >> t
    Fault 0x06 on opcode 0x66 at &0000:7D3D (%7D3D)
    &F000:1805 1E               PUSH     DS                       ;cycles=0
    &F000:1806 52               PUSH     DX                       ;cycles=3
    &F000:1807 50               PUSH     AX                       ;cycles=3
    &F000:1808 53               PUSH     BX                       ;cycles=3
    &F000:1809 E8F1FF           CALL     17FD                     ;cycles=3
    &F000:17FD 50               PUSH     AX                       ;cycles=7
    &F000:17FE B84000           MOV      AX,0040                  ;cycles=3
    &F000:1801 8ED8             MOV      DS,AX                    ;cycles=2
    &F000:1803 58               POP      AX                       ;cycles=2
    &F000:1804 C3               RET                               ;cycles=5
    &F000:180C B00B             MOV      AL,0B                    ;cycles=11
    &F000:180E E620             OUT      20,AL                    ;cycles=2
    &F000:1810 EB00             JMP      1812                     ;cycles=5
    &F000:1812 90               NOP                               ;cycles=7
    &F000:1813 E420             IN       AL,20                    ;cycles=3
    &F000:1815 8AE0             MOV      AH,AL                    ;cycles=5
    &F000:1817 0AC4             OR       AL,AH                    ;cycles=2
    &F000:1819 7504             JNZ      181F (HW_INT)            ;cycles=2
    &F000:181B B4FF             MOV      AH,FF                    ;cycles=3
    &F000:181D EB2A             JMP      1849 (SET_INTR_FLAG)     ;cycles=2
    &F000:1849 88266B00         MOV      [006B],AH                ;cycles=7
    &F000:184D 5B               POP      BX                       ;cycles=5
    &F000:184E 58               POP      AX                       ;cycles=5
    &F000:184F 5A               POP      DX                       ;cycles=5
    &F000:1850 1F               POP      DS                       ;cycles=5
    &F000:1851 CF               IRET                              ;cycles=5

And at this point, we're right back to the 32-bit `PUSH` instruction.  This infinite loop continues until you reset
(or power off) the machine.  The boot sector turns off interrupts earlier, so Ctrl-Alt-Del is not an option. 

Because of the lack of feedback, I'm considering displaying a warning whenever a machine executes an invalid opcode
*and* the current invalid opcode handler is in ROM.

Hopefully, once an operating system has been successfully loaded, it will install its own invalid opcode handler,
and any opcode that it doesn't recognize will be treated like any other unrecoverable error (such as division by zero)
and terminate the current program, eliminating the need for PCjs to get involved.
