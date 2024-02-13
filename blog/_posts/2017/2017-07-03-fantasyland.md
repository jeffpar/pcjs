---
layout: post
title: FantasyLand
date: 2017-07-03 22:00:00
permalink: /blog/2017/07/03/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    state: /software/pcx86/lang/logitech/modula2/1.10/state.json
    config: /machines/pcx86/ibm/5160/ega/256kb/debugger/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

I recently added a demo of the [Logitech Modula-2/86 Compiler (1984)](/software/pcx86/lang/logitech/modula2/1.10/),
because I wanted to recreate the IBM PC test environment that John T. Cockerham had used in his October 1986
[PC Tech Journal](/documents/magazines/pctj/) article "[Evaluating the EGA: The EGA Standard](/documents/magazines/pctj/#pctj-1986-10)".

I actually wanted to do that several years ago, when I first added EGA support to PCx86 (the PCjs emulation of the
IBM PC), because Cockerham described two rigorous tests of EGA hardware compatibility that I would have liked to try:

- **FantasyLand**, an EGA demo written by IBM in 1984
- [EGATEST](/software/pcx86/sw/magazines/pctj/#directory-of-pc-tech-journal-1986-10), a program written by Cockerham himself in Modula-2

Cockerham describes **FantasyLand**:

> IBM wrote FantasyLand in 1984 in order to demonstrate some of the more obscure features of the EGA.
The program was distributed very selectively to dealers and sales representatives; it has never been a product
intended for sale.

> FantasyLand builds a large, 150-by-400-character virtual text screen in the EGA video RAM. The screen uses custom
fonts to create a map of an imaginary continent, complete with rivers, lakes, mountains, and fantastic creatures
like dragons and sea serpents. The illusion of bit-mapped graphics is great, but all the drawings actually are done
with custom characters from a 25-by-80 window into the larger virtual text screen. The program allows vertical and
horizontal smooth scrolling throughout the map by using the cursor keys, allowing the user to tour FantasyLand. Help
screens are implemented with the EGA's split-screen abilities and scroll smoothly up from the bottom of the screen when
requested.

> To make the test even more rigorous, FantasyLand uses the EGA's switchable fonts to create animation effects.
The program loads several copies of a custom font into memory, and an interrupt service routine cycles through the
copies every four system clock ticks. Certain characters in the custom font have slight differences across the copies
so that, when cycled, they give the illusion of motion--a dragon flaps his wings, smoke billows from a chimney, grass
waves in the wind. By tying the animation directly to the system's 8253 timer interrupt, font switching happens
continuously, independent of CPU speed and divorced from other program operations. Rapid ongoing font changes, along
with fast smooth scrolling in both directions, test subtle timing dependencies between subunits of the EGA.

Due to the "very selective" distribution of the program, **FantasyLand** has been impossible to locate.
Even Cockerham seemed reluctant to tell us *too* much about the program.  My *guess* is that [Page 48](/documents/magazines/pctj/#pctj-1986-10)
of the October 1986 issue displays a zoomed-in section of a **FantasyLand** screen, but it's unattributed, so who knows.
If you come across a copy of **FantasyLand**, *please* let me know.

So, given that **FantasyLand** seemed unattainable, I next turned my attention to Cockerham's own **EGATEST**.

The [October 1986](/documents/magazines/pctj/#PCTJ-1986-10) issue contains the **EGATEST** program listing,
starting on Page 64, but who wants to type in all that code?  And while the issue -- like all our archived publications -- has
been OCR'ed, there's always a significant number of errors in the Optical Character Recognition process.

Another option would have been to download the code from PC Tech Journal's own "PCTECHline" -- if we were doing this
30 years ago.  Even back then, PCTECHline apparently wasn't the the most reliable service.  In fact, the very same
issue of [PC Tech Journal (Page 14)](/documents/magazines/pctj/#pctj-1986-10) contains the following "Update/Apology":

> **PCTECHLINE UPDATE**

> The telephone number for PCTECHline, now operating from our new Columbia, Maryland, office, has been changed to
301/740-8383. The PCTECHline number is always published in our masthead.

> Improvements to our system are planned. Six telephone lines have already been installed in our new lab for this
purpose; the lines will be put into service one by one as demand warrants. The bottleneck in our plan ning is our
fondness for PCTECHline's software; unfortunately, its current multiline capabilities are not to our liking. We hope
that better solutions are forthcoming from the vendor, Micro-Systems Software.

> Part of the plan is to increase the capacity and performance of the PCTECHline computer. We do not yet know how this
will be accomplished. One idea is to install an RT/PC that has the performance to handle at least six lines and the
necessary software (AIX) to control them. We would value the experience gained on the RT and users would benefit from
the expansion of services it would allow.
  
> We apologize for any disruption of service that may be caused by our move to Columbia or our experiments with new
equipment and service. As always, we invite your comments and suggestions for PCTECHline. --WF

As it turns out, the simplest means of obtaining all the code was finding it in another online archive.  A website
called [The Programmer's Corner](https://www.pcorner.com) contains a [Magazine File Archive](https://www.pcorner.com/list/MAG),
and in that archive, a file named [PCTJ1086.ZIP](https://www.pcorner.com/list/MAG/PCTJ1086.ZIP/INFO/) appears to
contain all of Cockerham's **EGATEST** files.

I've transferred the contents of that ZIP archive to a PCx86 diskette image named
"[PC Tech Journal (1986-10)](/software/pcx86/sw/magazines/pctj/#directory-of-pc-tech-journal-1986-10)", which we can now
load into the machine below, and then run "EGAMAKE.BAT" to rebuild the entire program.

### Building EGATEST

Unfortunately, as of this writing, while the **EGATEST** code *mostly* compiles, it encounters a few errors along the way
that I've not resolved yet (like a missing `TimeDate` module).  And the closest version of the compiler I was able to find
is [Logitech Modula-2/86 Compiler 1.10](/software/pcx86/lang/logitech/modula2/1.10/).  Cockerham doesn't mention what version
of the compiler he used, but it may well have been a newer version (2.00?), since that article was published almost two
years after version 1.10 was released.

I'm also at a bit of a disadvantage with Modula-2 itself: I've never written anything in Modula-2, I've never used
any Logitech compilers before now, and the closest documentation I've been able to locate is for
[Logitech Modula-2/86 Compiler 1.00](/software/pcx86/lang/logitech/modula2/1.00/) (the previous version).

On the other hand, maybe I'm trying too hard, because Cockerham provided the final binary as well: **EGATEST.EXE**.

How well does it work?  I must confess, I don't know, because I'm too chicken to try it right now.  I know my EGA
simulation, while good, is far from perfect, so before I dive into these tests, I want to make sure I have enough time
set aside to debug and fix the inevitable problems.

Anyway, the [Logitech Modula-2/86 Demo](/software/pcx86/lang/logitech/modula2/1.10/) machine has been recreated below,
along with the PCjs Debugger.  One nice thing about this configuration is that COM1 is connected to the Debugger's
output window, so you can use the MS-DOS command:

	CTTY COM1

to redirect all console I/O, making it easy to copy and paste the text for future reference.  And in fact, that's
exactly what I've done "below the fold".

{% include machine.html id="ibm5160-msdos320" %}

### Transcript of the EGATEST Build Process (as of July 3, 2017)

    PCx86 v1.35.2
    Copyright © 2012-2024 Jeff Parsons <Jeff@pcjs.org>
    License: MIT <https://www.pcjs.org/LICENSE.txt>
    Loading /machines/pcx86/ibm/5160/rom/hdc/IBM-XEBEC-1982.json5.......
    Loading /machines/pcx86/ibm/5160/rom/basic/BASIC110.json5.......
    Loading /machines/pcx86/ibm/5160/rom/bios/1982-11-08/XTBIOS-REV1.json5.......
    Loading /machines/pcx86/ibm/video/ega/1984-09-13/IBM-EGA.json5.......
    HDC: Type 3 "10Mb Hard Disk" is fixed disk 0
    Loading /harddisks/pcx86/10mb/MSDOS320-C400.json.......
    Loading /software/pcx86/lang/logitech/modula2/1.10/state.json........
    Bus: 8Kb ROM at 000C8000
    Bus: 8Kb ROM at 000FE000
    Bus: 32Kb ROM at 000F6000
    Bus: 16Kb ROM at 000C0000
    HDC: Mounted disk "10Mb Hard Disk" in drive C
    Bus: 640Kb RAM at 0000
    RAM: 0xa0000 (640Kb) size overrides SW1
    RAM: ROM BIOS memory test has been disabled
    Bus: 32Kb VIDEO at 000B8000
    Type ? for help with PCx86 Debugger commands
    AX=0100 BX=0004 CX=00F9 DX=007F SP=09F6 BP=0000 SI=00D3 DI=01A9 
    SS=028C DS=028C ES=028C PS=F202 V0 D0 I1 T0 S0 Z0 A0 P0 C0 
    &028C:14AD 2E              CS:     
    &028C:14AE 8F068005        POP      WORD [0580]
    running
    Loading /disks/pcx86/shareware/pctj/PCTJ8610.json.......
    FDC: Mounted diskette "PC Tech Journal (1986-10)" in drive A

    C:\>mkdir egatest

    C:\>cd egatest

    C:\EGATEST>copy a:*.*
    A:DOTTIME.DEF
    A:DOTTIME.MOD
    A:DRAWPOLY.DEF
    A:DRAWPOLY.MOD
    A:EDITBLCK
    A:EGAMAKE.BAT
    A:EGATEST.EXE
    A:EGATEST.MOD
    A:FONTBUMP.DEF
    A:FONTBUMP.MOD
    A:INFO
    A:LOWEGA.DEF
    A:LOWEGA.MOD
    A:OPCODES.DEF
    A:OPCODES.MOD
    A:OTHRFONT.DAT
    A:PAUSES.DEF
    A:PAUSES.MOD
    A:POINTLIB.DEF
    A:POINTLIB.MOD
            20 File(s) copied

    C:\EGATEST>egamake

    C:\EGATEST>rem

    C:\EGATEST>rem compile files in this order to avoid version conflicts

    C:\EGATEST>rem

    C:\EGATEST>m2 comp  opcodes.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> opcodes.def

    Syntax Analysis
    target speed: 9.54Mhz
    Declaration Analysis
    target speed: 19.08Mhz
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  pointlib.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, target speed: 38.16Mhz
    Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> pointlib.def

    Syntax Analysis
    Declaration Analysis
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  lowega.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> lowega.def

    Syntax Analysis
        PointLib in file: C:PointLib.SYM
    Declaration Analysis
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  pauses.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> pauses.def

    Syntax Analysis
    Declaration Analysis
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  drawpoly.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> drawpoly.def

    Syntax Analysis
        LowEGA   in file: C:LowEGA.SYM
        PointLib in file: C:PointLib.SYM
    Declaration Analysis
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  dottime.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> dottime.def

    Syntax Analysis
    Declaration Analysis
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  fontbump.def
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> fontbump.def

    Syntax Analysis
    Declaration Analysis
    Symbol File Generation
    Termination
    End Compilation

    C:\EGATEST>m2 comp  lowega.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> lowega.mod

    Syntax Analysis
        LowEGA   in file: C:LowEGA.SYM
        PointLib in file: C:PointLib.SYM
        Opcodes  in file: C:Opcodes.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:   5342 bytes   Datasize:     94 bytes
    End Compilation

    C:\EGATEST>m2 comp  egatest.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> egatest.mod

    Syntax Analysis
        Terminal in file: C:\M2LIB\SYM\Terminal.SYM
        InOut    in file: C:\M2LIB\SYM\InOut.SYM
        LowEGA   in file: C:LowEGA.SYM
        PointLib in file: C:PointLib.SYM
        FontBump in file: C:FontBump.SYM
        Conversi in file: C:\M2LIB\SYM\Conversi.SYM
        Strings  in file: C:\M2LIB\SYM\Strings.SYM
        Pauses   in file: C:Pauses.SYM
        DrawPoly in file: C:DrawPoly.SYM
        DotTime  in file: C:DotTime.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:   5362 bytes   Datasize:    294 bytes
    End Compilation

    C:\EGATEST>m2 comp  fontbump.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> fontbump.mod

    Syntax Analysis
        FontBump in file: C:FontBump.SYM
        FileSyst in file: C:\M2LIB\SYM\FileSyst.SYM
        LowEGA   in file: C:LowEGA.SYM
        Opcodes  in file: C:Opcodes.SYM
        Pauses   in file: C:Pauses.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:    715 bytes   Datasize:   3638 bytes
    End Compilation

    C:\EGATEST>m2 comp  pointlib.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> pointlib.mod

    Syntax Analysis
        PointLib in file: C:PointLib.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:     97 bytes   Datasize:      0 bytes
    End Compilation

    C:\EGATEST>m2 comp  opcodes.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> opcodes.mod

    Syntax Analysis
        Opcodes  in file: C:Opcodes.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:     17 bytes   Datasize:      0 bytes
    End Compilation

    C:\EGATEST>m2 comp  pauses.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> pauses.mod

    Syntax Analysis
        Pauses   in file: C:Pauses.SYM
        Terminal in file: C:\M2LIB\SYM\Terminal.SYM
        LowEGA   in file: C:LowEGA.SYM
        PointLib in file: C:PointLib.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:    483 bytes   Datasize:      0 bytes
    End Compilation

    C:\EGATEST>m2 comp  dottime.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> dottime.mod

    Syntax Analysis
        DotTime  in file: C:DotTime.SYM
        Terminal in file: C:\M2LIB\SYM\Terminal.SYM
        LowEGA   in file: C:LowEGA.SYM
        TimeDate in file: DK:TimeDate.SYM
        ---- file not found
        TimeDate in file>  ---- DK:Pass1.LOD warning
    Termination
    End Compilation

    ===>  warning, file DK:M2COMP.LOD
    ^C

    Terminate batch job (Y/N)? n
    C:\EGATEST>m2 comp  drawpoly.mod
    LOGITECH MODULA-2/86 Compiler, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        source file> drawpoly.mod

    Syntax Analysis
        DrawPoly in file: C:DrawPoly.SYM
        LowEGA   in file: C:LowEGA.SYM
        PointLib in file: C:PointLib.SYM
    Declaration Analysis
    Block Analysis
    Code Generation
    Termination
        The interactive setting of the options was: S+ /R+ /T+ 
        Codesize:    781 bytes   Datasize:      0 bytes
    End Compilation

    C:\EGATEST>rem

    C:\EGATEST>rem Linker requires manual entry of two real-number library file

    C:\EGATEST>rem names unless you have renamed one set of the E87, C87, or M87

    C:\EGATEST>rem libraries to be your standard set.  If not, add prefix E87, C87,

    C:\EGATEST>rem or M87 to library names realc.lnk and reals.lnk & enter manually

    C:\EGATEST>rem in response to linker query.   See section 5.7.2 in red manual.

    C:\EGATEST>rem

    C:\EGATEST>m2 link  egatest
    LOGITECH MODULA-2/86 Linker, DOS 8086, Rel. 1.10, Nov 84
    Copyright (C) 1983, 1984 LOGITECH.

        master file  > egatest.LNK
        linked with:
            Terminal      in file : C:\M2LIB\LNK\Terminal.LNK
            Termbase      in file : C:\M2LIB\LNK\Termbase.LNK
            System        in file : C:\M2LIB\LNK\System.LNK
            Keyboard      in file : C:\M2LIB\LNK\Keyboard.LNK
            ASCII         in file : C:\M2LIB\LNK\ASCII.LNK
            Display       in file : C:\M2LIB\LNK\Display.LNK
            InOut         in file : C:\M2LIB\LNK\InOut.LNK
            FileSystem    in file : C:\M2LIB\LNK\FileSyst.LNK
            DiskFiles     in file : C:\M2LIB\LNK\DiskFile.LNK
            LowEGA        in file : C:LowEGA.LNK
            PointLib      in file : C:PointLib.LNK
            Opcodes       in file : C:Opcodes.LNK
            FontBumper    in file : C:FontBump.LNK
            Pauses        in file : C:Pauses.LNK
            Conversions   in file : C:\M2LIB\LNK\Conversi.LNK
            Strings       in file : C:\M2LIB\LNK\Strings.LNK
            DrawPoly      in file : C:DrawPoly.LNK
            DotTime       in file : DK:DotTime.LNK
        ---- file not found
            DotTime       in file > 
    ===>  warning, file DK:M2LINK.LOD

    C:\EGATEST>m2 lod2exe egatest
    lod2exe.LOD<NUL><NUL><NUL><NUL> not found in current directory or in \M2LOD
    C:\EGATEST>
    C:\EGATEST>
    C:\EGATEST>
