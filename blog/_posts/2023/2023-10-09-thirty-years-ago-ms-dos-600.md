---
layout: post
title: "Thirty Years Ago: MS-DOS 6.00"
date: 2023-10-04 08:00:00
permalink: /blog/2023/10/04/
preview: /blog/images/msdos600-dblspace.png
description: "A retrospective on MS-DOS 6.00 and my small contributions to the product."
---

Over 30 years ago, in March 1993, Microsoft released [MS-DOS 6.00](/software/pcx86/sys/dos/microsoft/6.00/compressed),
the next major release of MS-DOS after 5.00 shipped in June 1991.

In addition to several new full-screen utilities, like `DEFRAG` to defragment your hard disk (licensed from Symantec),
`MSBACKUP` to efficiently backup your hard disk (also licensed from Symantec), and `MSAV` to check for viruses (licensed
from Central Point Software), there were a number of new command-line programs, such as `CHOICE`, `DELTREE`, `MOVE`,
`MSCDEX`, and `SMARTDRV`.

But the biggest addition to MS-DOS 6.00 was a new feature called **DoubleSpace** (dubbed "MagicDrive" internally) that
automatically compressed everything on your hard disk, providing up to "double" the amount of effective disk space -- or more,
or less, depending on how compressible your files were overall.

DoubleSpace was a significant feature that required changes across the entire system.  Most of the action, however,
took place inside a new device driver, `DBLSPACE.BIN`, that stored all your data in a Compressed Volume File (CVF) generally
named `DBLSPACE.000`.  In fact, if you booted an older version of MS-DOS (like 5.00), you wouldn't see much more than that:

    A>DIR C: /A

     Volume in drive C is HOST_FOR_C
     Volume Serial Number is 5739-B1B5
     Directory of C:\

    IO       SYS     40470 03-10-93   6:00a
    MSDOS    SYS     38138 03-10-93   6:00a
    DBLSPACE BIN     51214 03-10-93   6:00a
    DBLSPACE INI        91 10-03-23  12:26p
    DBLSPACE 000 131474432 10-03-23  12:26p
            5 file(s)  131604345 bytes
                         2605056 bytes free

When MS-DOS 6.00 starts up, it reads `DBLSPACE.INI`, which usually looks something like this:

    MaxRemovableDrives=2
    FirstDrive=D
    LastDrive=H
    MaxFileFragments=115
    ActivateDrive=H,C0

and tells the operating system to mount the *real* drive C: as drive H: instead, and to mount the CVF as drive C:

    C:\>DIR /C

     Volume in drive C is MS-DOS_6
     Volume Serial Number is 101B-323E
     Directory of C:\

    DOS          <DIR>     09-25-23  10:13p
    COMMAND  COM     52925 03-10-93   6:00a   1.4 to 1.0
    WINA20   386      9349 03-10-93   6:00a   5.3 to 1.0
    AUTOEXEC BAT        75 09-26-23   8:55a  16.0 to 1.0
    CONFIG   SYS       109 09-26-23   8:55a  16.0 to 1.0
                      2.0 to 1.0 average compression ratio
            5 file(s)      62458 bytes
                       253927424 bytes free

So our original hard disk, a 128Mb drive, now appears to be almost twice as large -- thanks to DoubleSpace.

Aside from the new `DBLSPACE.BIN` driver, the other main piece of DoubleSpace functionality resided in `DBLSPACE.EXE`, which
operated as both a setup and a maintenance program.  It provided a friendly UI, making it easy to create additional CVFs,
as well as resize, defragment, reformat, unmount, remount, and more.

![MS-DOS 6.00 DoubleSpace](/blog/images/msdos600-dblspace.png)

Feel free to tinker with MS-DOS 6.00 on the website:

  - [Microsoft MS-DOS 6.00 (Installed)](/software/pcx86/sys/dos/microsoft/6.00/)
  - [Microsoft MS-DOS 6.00 (Installed and Compressed)](/software/pcx86/sys/dos/microsoft/6.00/compressed/)

## Legal Woes

Microsoft bootstrapped its compression efforts by licensing code from Vertisoft, makers of DoubleDisk, a disk compression
product first released in 1989.  Starting with Verisoft's code, Microsoft created `DBLSPACE.BIN`, along with operating system
changes that allowed it to be loaded *before* CONFIG.SYS was processed -- so that CONFIG.SYS and any system files loaded
from that point forward could be *inside* the compressed volume instead of *outside* it.

Vertisoft was not directly involved with any of that work, but they did help produce other pieces of functionality, such
as code to convert Stacker and SuperStor compressed disks to DoubleSpace -- although apparently Stacker conversion was pulled
at the last minute, in February 1993, just as MS-DOS 6.00 was being finalized.

Or rather, February 1993 would have been "last minute", until the lawsuit filed by Stac in January 1993 forced Microsoft
to re-evaluate.  Stac claimed that the DoubleSpace infringed two of Stac's patents: [5,016,009](https://patents.google.com/patent/US5016009A/en) and [4,701,745](https://patents.google.com/patent/US4701745A/en?oq=US4701745).

For me, life quickly changed on February 13, 1993, when I received this email:

    From: Paul Maritz
    Sent: Saturday, February 13, 1993 12:06 PM
    To: Jeff Parsons; Mark Zbikowski
    Cc: Ben Slivka; Brad Chase; Brad Silverberg; Jim Allchin; John Mason;
    Nathan Myhrvold; Rick Rashid
    Subject: special duty

    You are both amongst the best x86 assembly language coders that we have at MS.
    We are thus asking you to help out with a very serious problem that we face - namely
    the STAC / DOS6 lawsuit.

    Our lawyers have recommended that we have a backup compression mechanism for DOS6
    ready to go as soon as possible. The initial work on this has been done under Rick
    Rashid in Nathanm's area. They have a C language implementation of a technique that
    we believe is safe (covered under patents that we have rights to). The challenge
    is to get this technique into the tightest possible x86 assembly code, as soon as
    possible. This is where we are asking you to help. Jimall and Bradsi are aware that
    you will be "stolen" for some weeks.

    Could you both meet with Rick Rashid as early as possible on Monday to get this
    effort under way as soon as is possible. Thanks.

The next several weeks were probably some of the most stressful that I'd experienced at Microsoft.  Looking back, it's amazing
to me that with all the critical-path code that was being rewritten at that late date, MS-DOS 6.00 still shipped the following
month, in March 1993.

I don't recall all the details of the alleged patent infringement, and I'm not sure I ever knew all the details, because frankly,
it wasn't necessary for me to know the details.  A number of other people had already been working on the problem and had come up
with several solutions, and it simply fell to me and MarkZ to implement them in x86 assembly -- preferably very fast, bug-free
assembly, of course.

As far as I can tell now, Stac patent 5,016,009 was the crux of the problem.  It combined LZ77 compression with hashing, and
while LZ77 compression was fine, and hashing was fine, apparently the *combination* of the two became a patentable innovation.

So we were initially tasked with writing a compressor based on **Miller-Wegman**, an algorithm that was either not patented or
that Microsoft owned or licensed.  When that turned out to be too slow, we instead built a compressor (internally known as XCFR or
the "Rashid Search Algorithm") that avoided hashing by using a 256x8 look-up table along with a 256-entry LRU table, and also
incorporated a new Microsoft Realtime Compression Format (MRCF) for outputting the raw bytes and offset-length pairs.  That,
of course, meant that the decompressor had to be rewritten as well.

With hindsight, it's probably safe to say that Microsoft should *not* have shipped MS-DOS 6.00 quite so quickly after that
rewrite, because unfortunately, our code (well, in the case below, *my* code) was not, um, bug-free:

    From: Chuck Strouss
    To: SYS Astro Team Development Group; Peter Stewart; Jeff Parsons
    Subject: Bug in DBLSPACE decompress
    Date: Monday, June 14, 1993 3:40PM

    In RDCOMP.ASM, near the first JC instruction, there is a bug when a block ends
    at 10000h and the last several bytes are in a repeat string.  It was reported by
    Temporal Acuity Products.

to which I replied:

    From: Jeff Parsons
    Sent: Monday, June 14, 1993 4:49 PM
    To: Chuck Strouss; Ben Slivka; Jim Mathews; Peter Stewart
    Subject: RE: Bug in DBLSPACE decompress

    well... shit!

This bug was only in the 80386 code path, but that wasn't much consolation.  And it was one of at least a half-dozen or so DoubleSpace bugs that Microsoft was aware by June of 1993.  Other bugs included:

  - A particular series of reads, writes, and undeletes may cause an undelete to fail (FAT is marked USED, but MDFAT is left marked FREE; note that MDFAT refers to the "MagicDrive" FAT internal to the CVF)
  - A particular series of operations followed by undelete may cause a cross link (not taking into account data that may be in buffers)
  - Read into video memory in planar VGA modes results in garbage display (decompression depends on being able to read previously decompressed data, but VGA memory in these video modes does not read back what was written to it)
  - If a disk error occurs while updating a cluster, a cross link may be created (error would be on writing to a part of the sector heap that we had not used previously)
  - When Metro Software's LaserTwin 5.0 TSR is loaded, it intercepts write operations and breaks them up into smaller writes; however, sometimes those smaller writes can end up being ZERO bytes long, which DOS correctly treats as a truncate operation.  If that happens when the system is writing to the DoubleSpace CVF, the compressed volume will be truncated (not really a DoubleSpace bug, but a bug with severe consequences)

I don't know if the video memory bug was ever fixed.  Wikipedia's article on [DriveSpace](https://en.wikipedia.org/wiki/DriveSpace) (which was the new name for DoubleSpace as of MS-DOS 6.22) alludes to the problem:

> A few computer programs, particularly games, were incompatible with DoubleSpace because they effectively bypassed the DoubleSpace driver.

But I'm not aware of any problems with games that involved "bypassing" the driver.  Any game-related problems were almost certainly due to DoubleSpace decompressing data directly into video memory while the video card's write and read modes differed.

## Introducing MultiConfig

On a happier, or at least less contentious note, MS-DOS 6.00 also introduced a feature known as **MultiConfig**, which I
have some fondness for, because it was something I personally championed and implemented.  And -- good news -- I don't think
it had any serious bugs.

I don't recall precisely where the idea came from.  I think it started as something that I and Naveen Jain, a Program Manager
on the team, discussed in early 1992.  He created a preliminary spec in February 1992, and then I implemented the feature
in March 1992 and updated the spec to match what I had implemented.

The code was originally added to **Jaguar**, which was planned to be the next major update to MS-DOS after 5.00.
But at some point, **Astro** -- originally intended as a smaller interim MS-DOS update -- grew to the point where it was
clearly going to be the next major update, thanks in large part to the addition of DoubleSpace disk compression.

When it was clear that **Astro** would become MS-DOS 6.00, I think management went looking for other low-hanging fruit,
such as any new **Jaguar** features that could be incorporated into **Astro** relatively easily with minimal risk.
MultiConfig fit the bill.

However, it wasn't a slam dunk.  I had to push for it, because there were a few risk-averse people in management that felt
the risk/reward ratio was too high.  They claimed that most users would not use this feature (which was true), but that point
also worked in my favor: most of the new code would not be executed until and unless someone actually added one or more of the
new commands to their CONFIG.SYS.  So any risks largely affected only "power users".

## What is MultiConfig?

MultiConfig was a collection of features added to the processing of CONFIG.SYS, to make it easier to start your PC
in a particular way without having to boot from a special floppy or edit/copy a new CONFIG.SYS each time.  It added some new
commands to CONFIG.SYS:

  - INCLUDE
  - MENUCOLOR
  - MENUDEFAULT
  - MENUITEM
  - NUMLOCK
  - SET
  - SUBMENU

and it included some new ways to interact with CONFIG.SYS.  The message "Starting MS-DOS..." was added as an indirect means
of alerting you that you now had two seconds to press one of several new start-up keys:

  - F5: Bypass CONFIG.SYS and AUTOEXEC.BAT
  - F8: Interactively step through CONFIG.SYS

You could also tap a Shift key -- that was equivalent to pressing F5.  Apparently there was an Astro "press tour" in August
1992, and someone in that tour suggested adding the Shift key, so we did.  They claimed that holding the Shift key while
starting Windows also bypassed certain files and/or functions, but I don't recall to what extent that was true.

Additionally, if you didn't want anyone using your machine to bypass or alter CONFIG.SYS, you could add
these lines to the file:

  - SWITCHES=/N: disable all start-up keys
  - SWITCHES=/F: eliminate the two-second pause

/N also implied /F, since if start-up keys were disabled, there was no need to wait two seconds.

Note that SWITCHES was not a new command; other older "switches" included:

  - /K: Forces an enhanced keyboard to behave like a conventional keyboard (DOS 4.0+)
  - /T: Indicates the BIOS time rollover byte is a flag instead of a counter (DOS 5.0+)
  - /W: Specifies that the WINA20.386 file has been moved to a directory other than the root directory (DOS 5.0+)

Finally, while we're on the subject of the keyboard-related features, I should add that NUMLOCK wasn't really a MultiConfig
feature; it was just something I thought would be handy.  Recall that early PCs had no BIOS setup screens, and MS-DOS was
still an operating system designed to run on any PC, including the original IBM PC.  So this CONFIG.SYS command:

  - NUMLOCK=[ON\|OFF]

could be used to set your keyboard's initial Num-Lock state.  A case could be made for this being a legitimate
MultiConfig feature though, since you could select menu items with arrow keys *or* by pressing the number of a menu item.
So if you wanted to use your numeric keypad, then you would want to ensure that Num-Lock matched your preferred selection
method.

## With Great Power Comes... Menus

The real power of MultiConfig was the ability to create user-friendly boot menus and let you organize sets of CONFIG.SYS
commands into either named or `[common]` blocks.  Blocks began with a bracketed block name (eg, `[menu]`, `[common]`, `[doslow]`)
and ended at the next bracketed block name (or end of file).

Here's a simple example:

    [menu]
    menuitem=doslow,Load DOS in LOW memory
    menuitem=doshigh,Load DOS in HIGH memory
    menudefault=doslow,15
    menucolor=15,1

    [common]
    device=c:\dos\himem.sys

    [doslow]
    dos=low

    [doshigh]
    dos=high

    [common]
    device=c:\dos\setver.exe
    files=30

And the screen that would appear when booting:

![MS-DOS 6.00 MultiConfig](/blog/images/msdos600-multiconfig.png)

Each `menuitem` in the `[menu]` block describes a menu item; the first argument is a block name (eg, `doslow`, `doshigh`),
and the second argument is a description.  Other `[menu]` block keywords included `menudefault`, which specifies the
default menu item (and optional timeout value in seconds), and `menucolor`, which selects foreground and background colors
for the menu.

In the above example, no matter which menu item you selected, HIMEM.SYS would always be loaded first, because it was in a
`[common]` block that appeared before the other blocks.  Then all commands in the selected block (`[doslow]` or
`[doshigh]`) would be processed next, then all the commands in the next `[common]` block -- and so on.

Another feature was "forced prompting".  If you included a `?` after the `DEVICE` keyword, you would receive an unconditional
prompt for that particular driver.  For example:

    device?=c:\dos\setver.exe

would *always* generate the following prompt:

    DEVICE=C:\DOS\SETVER.EXE [Y,N]?

And that feature wasn't limited to device drivers.  The following line:

    dos?=high

would also generate a prompt:

    DOS=HIGH [Y,N]?

## Menu Overload

Below is a more complex example, extracted from an email I wrote back on July 1, 1992 (at 2:34am apparently).

This example illustrates how you could use `submenu` (as opposed to `menuitem`) to define menu items that
referred to other menu blocks, in order to create multi-level menus.  Originally, the keyword for that feature was
simply `menu`, but the **Astro** team (specifically, Betsy Tinney, who helped refine the MultiConfig UI for **Astro**)
suggested a keyword that was clearer.

It also shows how you could `include` named blocks from other blocks.  For example, a number of the blocks, like `[dosumb]`,
include another block, `[dos]`, that contains commands common to the other blocks.  Every block *could* duplicate those
commands itself, but factoring out common sets of commands made for a more maintainable CONFIG.SYS.  Blocks named `[common]`
were *always* processed in the order they appeared, whereas blocks with any other name would be processed whenever
(and *only* whenever) they were explicitly included.

Finally, this example also uses the `SET` command, which defines environment variables to be passed to `COMMAND.COM`.
In addition, a special `CONFIG` environment variable is automatically set to the name of the block from the final selected
`menuitem` (eg, `dosumb`).  This was useful for batch files like AUTOEXEC.BAT, if they needed to customize their actions
according to the selected CONFIG.SYS configuration.

    [menu]
    numlock=off
    menucolor=15,1
    menudefault=lanmenu,15
    submenu=dosmenu,DOS configurations
    submenu=lanmenu,LanMan configurations

    [dosmenu]
    menudefault=dosumb,15
    menuitem=dosumb,     DOS 7.00 only
    menuitem=dosems,     DOS 7.00 w/EMS
    menuitem=dosansi,    DOS 7.00 w/ANSI
    menuitem=dos386max,  DOS 7.00 w/386Max
    menuitem=dosdbg,     DOS 7.00 w/Soft-ICE
    menuitem=cougar,     DOS 7.00 w/Cougar

    [lanmenu]
    menudefault=winball,15
    menuitem=lanman20,   DOS 7.00 w/Lanman 2.0
    menuitem=lanman21,   DOS 7.00 w/Lanman 2.1 w/XNS
    menuitem=lanman21nb, DOS 7.00 w/Lanman 2.1 w/XNS+NetBeui
    ;menuitem=lanman21xm,DOS 7.00 w/Lanman 2.1 w/XNS Mono
    menuitem=lanman21dbg,DOS 7.00 w/Lanman 2.1 w/Soft-ICE
    menuitem=winball,    DOS 7.00 w/Winball

    [common]
    set tmp=c:\tmp
    set linktmp=c:\tmp
    set temp=c:\win31\temp
    set dircmd=/l/o
    set home=d:\tools\bound
    set init=d:\tools\bound
    set alias=jeffpar
    set logname=jeffpar
    set mailname=jeffpar
    set basspec=d:\tools\dos
    set helpfiles=d:\tools\help;c:\src\cougar\dev\tools\help
    set country=usa-ms
    set proj=c:\src\cougar\dos\dos86
    set lib=d:\tools\windev\lib
    set include=d:\tools\windev\include;d:\src\myinc
    set path=d:\tools\dos;d:\tools\bound;d:\tools\windev;c:\lanman\netprog;c:\win31;c:\dos
    set prompt=$p$g

    [dos]
    break=on
    dos=high,umb
    files=60
    buffers=10
    stacks=9,256
    lastdrivehigh=z
    shell=c:\dos\command.com /p c:\dos /e:1024 /z

    [dosumb]
    include dos
    device=c:\win31\himem.sys
    device=c:\win31\emm386.exe noems i=b000-b7ff x=d800-dfff

    [dosems]
    include dos
    device=c:\win31\himem.sys
    device=c:\win31\emm386.exe 1024 ram i=b000-b7ff x=d800-dfff frame=e000

    [dosansi]
    include dosumb
    devicehigh=c:\dos\ansi.sys

    [dos386max]
    include dos
    device=d:\tools\386max\386max.sys

    [dosdbg]
    device=c:\s-ice\s-ice.exe /tra 1000
    include dos

    [lanman20]
    include dosumb
    include lanman20_drivers
    include lanman_logon

    [lanman20_drivers]
    devicehigh=c:\lanman\drivers\protman\protman.dos /i:c:\lanman
    devicehigh=c:\lanman\drivers\ethernet\ub\ubnei.dos
    devicehigh=c:\lanman\drivers\protocol\netbeui\netbeui.dos
    devicehigh=c:\lanman\drivers\protocol\xns\ubxpw.dos
    devicehigh=c:\lanman\drivers\protocol\xns\ubloop.dos
    installhigh c:\lanman\drivers\protman\netbind.exe

    [lanman21]
    include dosumb
    include lanman21_drivers
    include lanman_logon

    [lanman21nb]
    include dosumb
    include lanman21_drivers
    install c:\lanman\netprog\load.com netbeui
    include lanman_logon

    [lanman21xm]
    include dosumb
    install c:\lanman\xnsmono\loadniu.exe -r -d -m:d8 -i:5 -p:4 c:\lanman\xnsmono\exniu2.xfm c:\lanman\xnsmono\1a.lc
    install c:\lanman\xnsmono\xnsbios.exe -m:d8 -i:5 -p:4
    include lanman_logon

    [lanman21dbg]
    device=c:\s-ice\s-ice.exe /tra 1000
    include dos
    include lanman21_drivers
    include lanman_logon

    [lanman21_drivers]
    devicehigh=c:\lanman\drivers\protman\protman.dos /i:c:\lanman
    devicehigh=c:\lanman\drivers\ethernet\ub\ubnei.dos
    device=c:\lanman\drivers\protocol\ubxns\ubxps.dos
    install c:\lanman\netprog\netbind.com

    [lanman_logon]
    install c:\lanman\netprog\net.exe start workstation
    install c:\lanman\netprog\net.exe logon jeffpar2 /y
    ;install c:\lanman\netprog\net.exe use k: \\jeffpar\astro dos6
    ;install c:\lanman\netprog\net.exe use j: \\jeffpar\cougar dos7

    [winball]
    include dosumb
    include lanman21_drivers
    devicehigh=c:\win31\redirdrv.sys
    devicehigh=c:\win31\system\vnbhlp.dos
    shell=c:\dos\command.com /p c:\dos /e:1024 /z /k windb
    set path=d:\tools\dos;d:\tools\bound;d:\tools\windev;c:\win31;c:\dos

    [cougar]
    include dosumb
    include lanman21_drivers
    devicehigh=c:\win31\redirdrv.sys
    devicehigh=c:\win31\system\vnbhlp.dos
    shell=c:\dos\command.com /p c:\dos /e:1024 /z /k cougar7
    set path=d:\tools\dos;d:\tools\bound;d:\tools\windev;c:\win31;c:\dos;d:\cougar

    [common]
    installhigh d:\tools\dos\keyfix.com
    installhigh c:\win31\mouse.com
    installhigh c:\dos\share.exe
    installhigh c:\win31\smartdrv.exe 1024
    installhigh c:\dos\doskey.com /a /e /x /p /k:128 /f:d:\tools\dos\aliases
    install c:\dos\mode.com con:rate=30 delay=1
    install d:\tools\dos\50.com
