---
layout: page
title: Microsoft OS/2 2.0 (Pre-Release)
permalink: /software/pcx86/sys/os2/microsoft/2.0/
machines:
  - id: deskpro386
    type: pcx86
    debugger: available
    config: /machines/pcx86/compaq/deskpro386/vga/4096kb/machine.xml
    drives: '[{name:"OS/2 2.0 Pre-Release (47Mb)",type:5,path:"https://basicdos.com/disks/historical/os2/2.0/pr2/MSOS2-2.0-PR2-47MB.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

The machine below is a COMPAQ DeskPro 386 with a 16Mhz 80386, 4Mb of memory (640K of conventional memory, 384K of "COMPAQ Built-in Memory" used for ROM Relocation and CEMM, and 3Mb of extended memory), a VGA Color Display, two 1.44Mb diskette drives, a 47Mb hard disk, and a serial mouse on COM1.  The hard disk contains Microsoft's second pre-release of OS/2 2.0 (revision 6.78, May 1990).

This is the same hard disk image used by the [OS/2 2.0 Pre-Release](https://basicdos.com/machines/demos/os2/2.0/) machine on the [BASIC-DOS](https://basicdos.com/) website, where it's used to compare BASIC-DOS and OS/2 2.0 capabilities.

{% include machine.html id="deskpro386" %}

OS/2 boots from the hard disk into Presentation Manager, whose Desktop Manager can start OS/2 sessions and DOS sessions, in a window or full screen; type `ver` in either kind of session to display "The Operating System/2 Version is 2.00".  Click the screen to capture the mouse, and press **Esc** to release it.

This pre-release came before IBM took over OS/2 2.0's development and added the Workplace Shell, so its desktop looks much like OS/2 1.2's, but it requires an 80386: it uses paging, runs 32-bit programs (built with the SDK's CL386 and LINK386), and runs each DOS session in its own V86 machine.

The hard disk also has a `C:\TOOLS` folder laid out like the one on the [BASIC-DOS](https://basicdos.com/machines/demos/bd/mmu/386/) hard disk, with the SDK's build tools (CL386, LINK386, NMAKE, etc) in `C:\TOOLS\BIN`, which **CONFIG.SYS** adds to the PATH, and the 386 compiler's include files and libraries in `C:\TOOLS\INCLUDE\386` and `C:\TOOLS\LIB\386`.  `make make386` builds the 32-bit versions of the HELLO and SUCKS demos in `C:\TOOLS\DEMOS` and of BDC (the BASIC-DOS C compiler) in `C:\TOOLS\BDC`, in each folder's `386` subfolder, and `make` alone does the same (MAKE.CMD in `C:\TOOLS\BIN` runs NMAKE with MAKE386 if no makefile is named); for example, in an OS/2 Window, type `cd \tools\demos\hello`, then `make`, and then `386\hello`.
