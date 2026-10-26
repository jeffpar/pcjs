---
layout: post
title: "Reimagining PC DOS Reimagined"
date: 2026-10-21 10:00:00
permalink: /blog/2026/10/21/
preview: /blog/images/BASIC-DOS-Cover.gif
description: "Introducing BASIC-DOS 2.00"
published: false
---

{% comment %}
OUTLINE / DRAFT -- not published (remove "published: false" when ready).
{% endcomment %}

[![BASIC-DOS](/blog/images/BASIC-DOS-Cover.gif)](https://basicdos.com/preview/)

Intro: what BASIC-DOS is, in one or two sentences, and why there's a post about it here.

- In 2020, I started [BASIC-DOS](https://basicdos.com), "PC DOS Reimagined": the operating system that *could* have shipped with the IBM PC in 1981
- A [Preview](https://basicdos.com/preview/) was ready in time for the PC's 40th anniversary (August 2021), but it was a technology demo: read-only file system, no hard disks, no floating-point, lots of gaps
- Five years later, BASIC-DOS 2.00 fills those gaps; this post "reimagines" the reimagining, as a usable system rather than a demo
- Still built with MASM 4.0, still runs on a 4.77Mhz 8088, still boots in a [64K machine](https://basicdos.com/demos/m64/pc/)

### The Original Vision

Quote the original vision statement from [Inspiration](https://basicdos.com/blog/2020/05/17/) (May 2020):

> In this alternate timeline, the year is 1980, and we know that in a little over a year, on August 12, 1981, the IBM PC will be introduced, and we really want to make the first PC operating system as compelling and powerful as possible.
>
> So, we have more time to prepare than Microsoft originally did, and we have the benefit of hindsight (or foresight, since it's 1980).
>
> For example, we know that higher capacity diskettes and hard disks will soon become available, so maybe we can make some early design decisions about the FAT file system that will smooth the way for those improvements.
>
> We also know that people will be looking for ways to be as productive as possible with their PCs, to maximize their investment.  Being able to run programs in the background (like TSRs) sounds nice, but perhaps a machine with a 16-bit processor and 20-bit address bus could also run several foreground programs simultaneously, too.
>
> And as we're designing the DOS command interpreter along with the BASIC interpreter, it becomes clear that a "batch language" with support for "environment variables" is remarkably similar to features that BASIC already provides.  Perhaps a "unified" interpreter could eliminate the need for those extra features, allow us to leverage the editing and debugging capabilities of BASIC, and produce a tool more powerful than either interpreter by itself.
>
> At the same time, perhaps we could find ways to make this unified interpreter faster, with support for programs larger than 64K, and support for integers larger than 16-bit -- to create programs that take *full* advantage of this new processor, instead of perpetuating limitations found on other older platforms (eg, 6502 and 8080-based systems).

- Point out that every one of those goals is now met in 2.00 (each feature below ties back to one of them)
- Also note the non-goal: BASIC-DOS isn't trying to be 100% PC DOS compatible; it implements what its own commands need, plus enough of the PC DOS API to run typical DOS programs

### Introducing BASIC-DOS 2.00

#### Disks and File Systems

- **Every standard diskette format**: BPBs (which PC DOS didn't have until 2.00), media checks, and BPB rebuilds, so BASIC-DOS reads and writes PC DOS 1.x and 2.x diskettes, including single-sided and 8-sector formats
  - TODO: confirm the 720K/1.2M/1.44M story; the README still lists 720K and 1.2M under FORMAT's remaining work
- **FAT12 and FAT16 hard disks**: primary partitions on up to two PC XT or PC AT hard disks (volumes up to 32Mb), and booting from a hard disk partition
- **Subdirectories everywhere**: paths in every file function, MD/RD/CD, a current directory per drive *per session*, and MV (RENAME) that moves files *and directories*, which PC DOS's RENAME never allowed
- A full read/write file system: handle and FCB functions, truncation, deletion, renaming, and file sharing rules that PC DOS didn't have until SHARE (3.0)
- A configurable FAT/directory sector cache (BUFFERS=)
- Volumes opened as files (eg, `C:`), instead of INT 25h/26h, even when unformatted
- Critical error handling with the familiar "Abort, Retry, Ignore, Fail?" (*Fail* didn't arrive in PC DOS until 3.3)
- Boot sector improvements from day one: system files anywhere in the root, in non-contiguous clusters (not in DOS until MS-DOS 5.0), and a boot prompt to choose the hard disk

#### Preemptive Multitasking

- Multiple DOS programs running at the same time, in *sessions*, with preemptive multitasking on an 8088
- Sessions can be arranged however you like:
  - **On the same screen**: split side-by-side or top/bottom ([40-column split](https://basicdos.com/demos/d40/pc/), [80-column split](https://basicdos.com/demos/d80/pc/))
  - **On the same monitor**: full-screen sessions on separate video pages ([Multiple Video Pages](https://basicdos.com/demos/p80/pc/))
  - **On multiple monitors**: MDA and CGA at once ([Dual Monitors](https://basicdos.com/demos/dual/xt/))
  - **On serial terminals**: a VT100 (or any terminal) on a COM port ([VT100](https://basicdos.com/demos/vt100/xt/), [Serial Display](https://basicdos.com/demos/serial/))
  - **Or all of the above**
- SHIFT-TAB switches focus; CTRL-ALT-DEL aborts just the program in the focused session
- Session commands: LIST SESSIONS, RESTART, END, WAITEND
- Screenshot idea: the Dual Monitors demo building BASIC-DOS on the CGA while PRIMES.BAT runs on the MDA

#### An Integrated BASIC/COMMAND Shell

- One interpreter for DOS commands *and* BASIC: no separate batch language, no environment variables, no SET, no %1, no IF EXIST, because ARG$, variables, and IF/THEN/ELSE already do those jobs

Environment variables become string variables, set with LET and tested with IF:

{% capture pcdos %}
SET NAME=JEFF
IF "%NAME%"=="JEFF" ECHO Hello, Jeff
IF NOT "%NAME%"=="JEFF" ECHO Who are you?
{% endcapture %}
{% capture basicdos %}
LET NAME$ = "JEFF"
IF NAME$ = "JEFF" THEN PRINT "Hello, Jeff"
IF NAME$ <> "JEFF" THEN PRINT "Who are you?"
{% endcapture %}
{% include compare.html left=pcdos right=basicdos %}

Labels become line numbers, and GOTO works the same way:

{% capture pcdos %}
:RETRY
MYPROG
IF ERRORLEVEL 1 GOTO RETRY
ECHO MYPROG succeeded
{% endcapture %}
{% capture basicdos %}
10 MYPROG
IF ERRORLEVEL >= 1 THEN GOTO 10
PRINT "MYPROG succeeded"
{% endcapture %}
{% include compare.html left=pcdos right=basicdos %}

- BAT files are BASIC programs; BAS and BAT files can run each other and continue (no CALL)
- BASIC is *compiled* to 8086 code before it runs: PRIMES.BAS is about 10x faster than BASICA/GW-BASIC (link the [benchmarks](https://basicdos.com/preview/part6/))
- 32-bit integers, programs not limited to a single 64K segment (code, text, variables, and strings in chained 4K blocks)
- Broad BASICA compatibility: DONKEY.BAS and the other PC DOS 1.00 samples run, drawing the same pixels; graphics (SCREEN, PSET, LINE, CIRCLE, PAINT, DRAW, GET, PUT), PLAY, SOUND, file I/O, ON ERROR
- Loads tokenized BAS files saved by BASICA and GW-BASIC
- Mixing DOS commands and BASIC on one line (`DIR *.BAS : PRINT "done"`), and redirecting an entire line with `:>`
- PRINTF USING, for C-style formatted output
- HELP for every command and function

#### True Pipes

- The PIPE$ driver: no temporary files, filters run *simultaneously* (each in its own session), and the amount of piped data is unlimited
- PC DOS didn't have pipes until 2.00, and even then they were simulated with temp files and ran sequentially
- Multi-stage pipelines (`TYPE FILE | SORT | MORE`), `>` and `>>` at the end of any pipeline
- Filters: FIND, MORE, SORT, TEE, TR, and WC
- Clean failure handling: if any command in a pipeline fails, the rest are ended

#### System Utilities Written in BASIC

- The BIN directory: FORMAT.BAS and MODE.BAS, commented programs anyone can LIST, learn from, and change
- "The utility *is* its source code," which suits an OS named after a language
- FORMAT also partitions hard disks (no separate FDISK)
- The interpreter grew to make them possible (IOCTL #, opening unformatted volumes)
- More candidates: CHKDSK, SYS, DISKCOPY, TREE, LABEL, ATTRIB
- Speed-sensitive tools stay in assembly: the filters, SLEEP, VI (a vi subset that works on terminals too), and DEBUG

#### Floating-Point Without Compromise

- The FPU$ driver detects an 8087 at boot and handles floating-point for everyone: use the 8087 if present, emulate it otherwise
- Applications don't have to choose between (or ship) hardware and software floating-point libraries
- IEEE 754 doubles only; no MBF (explain why MBF was a dead end: incompatible with the 8087)
- The emulation is fast and accurate: arithmetic matches the 8087 bit for bit, and math functions are within 1 ulp (fdlibm polynomials)
- BASICA/GW-BASIC can't use an 8087 at all, so on a machine with one, floating-point benchmarks run 8-19x faster in BASIC-DOS than in GW-BASIC

#### Serial I/O That Actually Works

- Interrupt-driven, asynchronous, fully buffered COM driver (eg, `COM1:9600,N,8,1,64,128` for 64-byte input and 128-byte output buffers)
- Contrast with PC DOS: polled BIOS INT 14h, no buffering, dropped characters at any real speed
- Asynchronous I/O was always the promise of DOS drivers' STRATEGY/INTERRUPT design, and PC DOS never delivered it; BASIC-DOS drivers have a single REQUEST entry point built for it
- That's what makes serial terminal sessions, the serial mouse, and the serial debugger possible

#### Device Drivers and Debugging

- **CONFIG.SYS from the start** (PC DOS didn't get it until 2.00): BUFFERS, CONSOLE, FILES, MEMSIZE, SESSIONS, SHELL, etc.
- **Installable device drivers** (DEVICE=), plus SKIP= to drop built-in drivers you don't want, and built-in drivers that unload themselves when their hardware isn't present (which is how it still boots in 64K)
- CLOCK$ reads the PC AT real-time clock
- **A rudimentary mouse driver** (MOUSE$): detects a Microsoft-compatible serial mouse at boot, draws a pointer in text and graphics modes, implements the core of INT 33h (functions 00h-04h, 07h, 08h), and supports BASIC MOUSE operations ([Serial Mouse](https://basicdos.com/demos/mouse/pc/))
- DEBUG.COM can run either as an app *or* as a device driver connected to a serial port.  It supports disassembly, breakpoints, single-stepping, memory dumps, and more ([Serial Debugger](https://basicdos.com/demos/debug/pc/))

#### Running Real DOS Programs

- Enough of the PC DOS API to run typical DOS programs: COM and EXE loading, memory functions, environment segments
- Highlight: [Wolfenstein 3D](https://basicdos.com/demos/wolf3d/at/) runs on BASIC-DOS (an LZEXE-compressed Borland C++ EXE, with VGA and Sound Blaster)
- Lean memory use: COMMAND.COM discards its transient portion while a program runs, and multiple COMMAND.COMs share code

#### Self-Hosting

- BASIC-DOS is sufficiently compatible with DOS APIs to run conventional DOS tools and build itself: MAKE, MASM 4.0, and LINK all work on BASIC-DOS, producing binaries identical to an MS-DOS build

#### Four Generations of Hardware

- Every [demo](https://basicdos.com/demos/) runs on the IBM PC, PC XT, PC AT, and COMPAQ DeskPro 386
- An unattended test suite that boots with and without an 8087
- A full [Manual](https://basicdos.com/docs/bdman/) and [Technical Reference](https://basicdos.com/docs/bdtech/)

### What's Still Missing

- Input redirection (`<`), file attributes and dates, the MID$ statement, comma print zones, RESUME NEXT, popup sessions, TSRs, and more utilities in BASIC
- Link to the [Project Status](https://basicdos.com/#project-status) list

### Try It

- Where to start: the [Preview](https://basicdos.com/preview/) pages and the [Demos](https://basicdos.com/demos/)
- Where to get it: the [GitHub repository](https://github.com/jeffpar/basicdos) (MIT License)
- Closing thought: the alternate timeline, 45 years later
