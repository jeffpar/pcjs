---
layout: post
title: Tiny Matrix Screensaver
date: 2018-05-14 10:00:00
permalink: /blog/2018/05/14/
preview: /blog/images/tiny-matrix-screensaver.png
machines:
  - id: matrix-demo
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/mda/640kb/rev3/debugger/machine.xml
    testRAM: false
    autoStart: true
    autoType: \r\rb:debug\r$10a\rles bx,[si]\rlahf\rstosw\rinc di\rinc di\rjmp 101\r\rrsi\r100\rg\r
---

A couple of weeks ago, I stumbled across this [tweet](https://twitter.com/isislovecruft/status/992144937910140928)
that piqued my interest:

[![Tiny Matrix Screensaver Tweet](/blog/images/tiny-matrix-screensaver-tweet.jpg)](https://twitter.com/isislovecruft/status/992144937910140928)

so I tweeted a [PCjs link](https://www.pcjs.org/devices/pcx86/machine/5170/mda/640kb/rev3/?autoType=$enter$enterb:debug$enter$10a$enterles%20bx,[si]$enterlahf$enterstosw$enterxchg%20cx,ax$enterjmp%20101$enter$enterrsi$enter100$enterg$enter)
to a "live" demo of the program, which you can also see in operation below.

{% include machine.html id="matrix-demo" %}

However, this 8-byte DOS program:

    100:    LES     BX,[SI]
            LAHF
            STOSW
            INC     DI
            INC     DI
            JMP     101

which you can create using the following `DEBUG` command sequence:

    A 100
    LES BX,[SI]
    LAHF
    STOSW
    INC DI
    INC DI
    JMP 101
    
    RCX
    8
    N MATRIX.COM
    W
    Q
    
comes with a few caveats.  First of all, it doesn't *quite* live up to the
[animated image](https://video.twimg.com/tweet_video/DcTOMa8X0AAW2V4.mp4) that was included with the tweet,
but it's still cute.

Second, it's dependent on some register entry conditions that are true only for *very* specific versions of DOS.
It expects the SI register to contain 0x100 and the Carry, Parity, Auxiliary Carry, Zero, and Sign flags
to all be clear.  This [handy table](/documents/misc/DOS_COM_Startup_Registers.pdf) of initial register values shows
the pitfalls of such an assumption: for example, the program won't work on any version of DOS &lt; 2.00.  I've
also tested it on PC DOS 3.00, where it fails because several of the arithmetic flags are *not* clear.
It’s also not initializing the Direction flag, and if that flag happened to be set "down" instead of "up", the
program would effectively do nothing; STOSW would modify the same word repeatedly.

Third, if the program is loaded with `DEBUG`, most of the initial register values are completely different.
`DEBUG` typically sets AL/AH to drive error codes (depending on whether the 2nd and 3rd command-line parameters
are filenames), BX:CX to the size of the program, and SP to 0xFFFE (or the top of available memory minus 2).  It
also clears the DX, BP, SI, DI, and Flags registers, and since this program assumes SI will contain a non-zero
value (0x100), it is incompatible with `DEBUG`.

Fourth, the program is writing through an entire 64K range starting at physical address 0xAB9F0 and ending at
0xBB9EF, so if there are any memory-mapped devices or UMBs in that range (other than the usual MDA or CGA text-mode
frame buffers), something bad could happen.

The requirement that all the arithmetic flags be clear insures that AH will contain 0x02 after the LAHF instruction.
Why doesn't LAHF set AH to 0x00 instead?  Because bit 1 of the Flags register is *always* set (it can't be cleared),
and LAHF loads *all* the low Flags bits into AH.  Intel's documentation says that Flags bits 1, 3, and 5 are
"undefined", but that simply means Intel preferred to not say anything about them.  The reality is that bit 1 is
always set and bits 3 and 5 are always clear.

And the value 0x02 is important, because it's used as a video attribute byte, where bits 0-3 define a character's
foreground color (2 is green) and bits 4-7 define its background color (0 is black).

Someone else posted a [7-byte version](https://www.pouet.net/prod.php?which=63126) that looks like this:

    100:    LES     BX,[SI]
            LAHF
            STOSW
            XCHG    CX,AX
            JMP     101

but which requires that CH be zero on entry.  This version is slower, because it's writing to every character cell
on the screen, instead of every other cell, but it has a similar effect, because every odd write is using the value
from CX, which contains a zero attribute in CH (black on black), making the pseudo-random character value in CL
irrelevant.
