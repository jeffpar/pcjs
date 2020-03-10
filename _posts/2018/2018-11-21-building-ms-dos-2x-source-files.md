---
layout: post
title: Building MS-DOS Source Files
date: 2018-11-21 10:00:00
permalink: /blog/2018/11/21/
preview: https://diskettes.pcjs.org/pcx86/sys/dos/microsoft/2.00/MSDOS200-DISKS.jpg
machines:
  - id: ibm5160
    type: pcx86
    config: /devices/pcx86/machine/5160/cga/512kb/machine.xml
    drives: '[{name:"PC-DOS 2.00 w/Tools (10Mb)",type:3,path:"/disks-demo/pcx86/drives/10mb/PCDOS200-C400.json"},{name:"MS-DOS 1.x/2.x Source (10Mb)",type:3,path:"/disks-demo/pcx86/dos/microsoft/2.00/MSDOS-SRC.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoType: $date\r$time\rD:\r
---

The [PCjs Disk Library](/disks/pcx86/) now includes a snapshot of the [MS-DOS 1.x/2.x Source Files](/disks/pcx86/dos/microsoft/2.00/)
from Microsoft's [September 28, 2018 re-release](https://blogs.msdn.microsoft.com/commandline/2018/09/28/re-open-sourcing-ms-dos-1-25-and-2-0/)
of MS-DOS source files on [GitHub](https://github.com/microsoft/ms-dos), along with a
[pre-configured machine](/disks/pcx86/dos/microsoft/2.00/#ms-dos-source-build-machine) ready to build the MS-DOS 2.x sources.
A similar machine is provided [below](/blog/2018/11/21/#ms-dos-source-build-machine).

Attempting to build the sources raises several questions, including:

- What version of MASM was used to build them?
- Are they a work-in-progress or a final distribution?

If you look at the pictures that the [Computer History Museum](http://www.computerhistory.org/) originally
[posted](http://www.computerhistory.org/atchm/microsoft-ms-dos-early-source-code/) when these files were first shared,
you'd get the impression that one of those questions had already been answered: DOS 2.00, final distribution.

![MS-DOS 2.00]({{ site.demo-disks.baseurl }}/pcx86/dos/microsoft/2.00/MSDOS200-DISKS.jpg)

Not so fast.

For reasons unknown, the Computer History Museum decided not to share the precise contents of the diskettes in its possession.
Instead, they released a ZIP archive that aggregated the contents of the MS-DOS 2.00 diskettes (pictured above) into two
folders, `v20object` and `v20source`, with no clear indication which files came from which disk, why some files were renamed,
what the original file names and timestamps were, and what (if anything) was omitted.

And it isn't entirely correct to describe those files as the source code for "MS-DOS 2.00".  The 2.00 files from the
OEM diskettes pictured above are primarily *binary* files, not source code.  The rest of the source files are actually
from a much later snapshot of source code, used to build MS-DOS 2.11, so at best, the collection should be referred to as
"MS-DOS 2.x".

To add to the confusion, some [WordStar 3.20](/disks/pcx86/apps/other/wordstar/3.20/) binary files were included in the
`v20source` folder, completely unrelated to MS-DOS--and also completely useless, since the main executable, `WS.COM`, was not
included.

And Microsoft's re-release on [GitHub](https://github.com/microsoft/ms-dos) changed nothing and clarified nothing -- except
that all the files can now be used according to a more relaxed [MIT License](https://en.wikipedia.org/wiki/MIT_License).

And when was this snapshot made?  Was work on MS-DOS 2.11 substantially finished, or was it still a work-in-progress?
Why, for example, do the CHKDSK *sources* contain the string "Ver 2.30", while the CHKDSK *binary* distributed with the source
code contains the string "Ver 2.10"?  Were these sources modified *after* work on 2.11 was complete?

On the other hand, an inspection of CHKDSK.COM in the [COMPAQ MS-DOS 2.11](/disks/pcx86/dos/compaq/2.11/) distribution ALSO
shows the string "Ver 2.30", and in fact, the CHKDSK.COM from COMPAQ MS-DOS 2.11 matches the
[CHKDSK.COM](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/built/CHKDSK)
built from the MS-DOS 2.x sources *perfectly*.

Go figure.

### The MASM Question

The release contained some build tools as well, including MASM.EXE from Feb 1, 1983, which reports:

    The Microsoft MACRO Assembler
    Version 1.10, Copyright (C) Microsoft Inc. 1981,82

but it's hard to believe this particular MASM.EXE was used to build much of anything, considering how buggy it was.
I first tried running it under PC DOS 1.10, on the assumption that that's what Microsoft would have used -- at least
when the files were originally being edited and assembled to create MS-DOS 2.00.

MASM 1.10 uses FCBs when running on DOS 1.x, and every time it encounters an include file, it allocates a DTA and an
FCB, reads the include file, and then frees the DTA and FCB.  Here's the MASM 1.10 code that frees them:

    >> u &1048:01dd
    MASM.EXE+0xE0ED:
    &1048:01DD 9C               PUSHF   
    &1048:01DE F64703FF         TEST     [BX+03],FF
    &1048:01E2 751E             JNZ      0202 (MASM.EXE+0xE112)
    &1048:01E4 8B7F04           MOV      DI,[BX+04]
    &1048:01E7 53               PUSH     BX
    &1048:01E8 9AEF01B90F       CALL     &0FB9:01EF (MASM.EXE+0xD80F)       ; *free* DTA at DI
    &1048:01ED 5B               POP      BX
    &1048:01EE F6068020FF       TEST     [2080],FF
    &1048:01F3 750D             JNZ      0202 (MASM.EXE+0xE112)
    &1048:01F5 813FFFFF         CMP      [BX],FFFF
    &1048:01F9 7407             JZ       0202 (MASM.EXE+0xE112)
    &1048:01FB 8B3F             MOV      DI,[BX]
    &1048:01FD 9AEF01B90F       CALL     &0FB9:01EF (MASM.EXE+0xD80F)       ; *free* FCB at DI
    &1048:0202 9D               POPF    
    &1048:0203 C707FFFF         MOV      [BX],FFFF
    &1048:0207 7206             JC       020F (MASM.EXE+0xE11F)

Disaster strikes at this instruction:

    &1048:0203 C707FFFF         MOV      [BX],FFFF

because whereas the first free (of the DTA) preserves the BX register, the second free (of the FCB) does not, so a
critical memory location is overwritten with 0xFFFF.  However, even after I patched the EXE:

    &1048:01F5 8B3F             MOV      DI,[BX]
    &1048:01F7 47               INC      DI
    &1048:01F8 7408             JZ       0202 (MASM.EXE+0xE112)
    &1048:01FA 4F               DEC      DI
    &1048:01FB 53               PUSH     BX
    &1048:01FC 9AEF01B90F       CALL     &0FB9:01EF (MASM.EXE+0xD80F)
    &1048:0201 5B               POP      BX

MASM still didn't work; usually it would simply hang.  I also tried running MASM 1.10 on PC DOS 2.00, where MASM
uses file handles instead of FCBs, but once again, no luck.  At that point, I decided to use my favorite version of
MASM from that era, [MASM 4.00](/disks/pcx86/tools/microsoft/masm/4.00/), since it was more important to me to get
something built, and since MASM 4.00 included some other handy tools, like MAKE.

### Organizing and Building the Files

As I explained on the [Microsoft MS-DOS 2.00](/disks/pcx86/dos/microsoft/2.00/) page, I decided to organize all
the source files into folders that corresponded to their respective binaries, along with makefiles where appropriate
(eg, [MSDOS.MAK](https://github.com/jeffpar/pcjs-demo-disks/blob/master/pcx86/dos/microsoft/2.11/src/MSDOS/MSDOS.MAK)).
Also, in the [INC](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/INC) folder,
`DOSMAC_v211.ASM` was copied to `DOSMAC.ASM`, and `DOSSYM_v211.ASM` was copied to `DOSSYM.ASM`, since the rest of the sources
are for MS-DOS 2.11 as well.

- [CHKDSK](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/CHKDSK)
- [COMMAND](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/COMMAND)
- [DEBUG](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/DEBUG)
- [DISKCOPY](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/DISKCOPY)
- [EDLIN](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/EDLIN)
- [EXE2BIN](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/EXE2BIN)
- [FC](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/FC)
- [FIND](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/FIND)
- [FORMAT](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/FORMAT)
- [INC](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/INC)
- [IO](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/IO)
- [MORE](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/MORE)
- [MSDOS](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/MSDOS)
- [PRINT](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/PRINT)
- [RECOVER](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/RECOVER)
- [SORT](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/SORT)
- [SYS](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/SYS)

Then the [MSDOS](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/MSDOS)
folder was supplemented with reconstructed
[IO.ASM](https://demo-disks.pcjs.org/pcx86/dos/microsoft/2.11/src/MSDOS/IO.ASM) and
[IO2.ASM](https://demo-disks.pcjs.org/pcx86/dos/microsoft/2.11/src/MSDOS/IO2.ASM) files from
[John Elliott](http://www.seasip.info/DOS/).

The resulting files, along with a [MK.BAT](https://github.com/jeffpar/pcjs-demo-disks/blob/master/pcx86/dos/microsoft/2.11/src/MK.BAT)
batch file, were installed in the machine below on drive D.  Drive C contains a bootable copy of PC DOS 2.00, along with
Microsoft MASM 4.00 and other assorted tools.

If `MK.BAT` is invoked with the name of one of the folders (eg, `MK COMMAND`), it will run `MAKE` in that
folder; to build all the folders, use `MK ALL`.

`MK.BAT` also accepts optional "OEM" and "VER" parameters.  For example, `MK MSDOS IBM 200` will build the **MSDOS**
folder with symbols **OEMIBM** and **VER200** defined.  Over time, I would like to use those symbols to
tweak the generated code, in order to produce binaries that match a particular original release.

[DOSSYM.ASM](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/INC/DOSSYM.ASM) has been
modified to check for "OEM" and "VER" symbols, and to display messages indicating the current build selection, alerting
you that the resulting binaries may differ from those produced by the original source code snapshot.

For example, files built using `MK ALL IBM 200` should display these messages:

    IBM release selected 
    VERSION 2.00 selected 

However, you will sometimes see these messages:

    IBM release pre-selected 
    VERSION 2.00 selected 

which means that another file, such as
[COMSW.ASM](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/COMMAND/COMSW.ASM) or
[STDSW.ASM](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/MSDOS/STDSW.ASM),
defined **IBM** before including
[DOSSYM.ASM](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/INC/DOSSYM.ASM).
And sometimes a file will set **IBM** itself, such as
[GETSET.ASM](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/src/MSDOS/GETSET.ASM).
The "pre-selected" messages help you catch any build discrepancies due to these oddities.

Other files have been modified as well, but only to eliminate extraneous characters (eg, multiple EOF characters)
that caused warnings or errors during the build process.

### MS-DOS Source Build Machine

A quick note about speed: the typical PC in the early 1980s was still a 4.77Mhz 8088-based machine, so it took
a considerable amount of time to assemble all the MS-DOS 2.x sources.  If you're impatient, you can load the machine
on this page with a higher speed multiplier (eg, [multiplier=8](https://www.pcjs.org/blog/2018/11/21/?multiplier=8))
or click the *Speed* button below until it's running at speed that you prefer (and that your browser supports).

In addition, all the build products (**OBJ**, **EXE**, **COM**, **LST**, and **MAP** files) from a successful
`MK ALL` command have already been saved in the [pcjs-disks](https://github.com/jeffpar/pcjs-demo-disks) repository, in the
[/pcx86/dos/microsoft/2.11/built](https://github.com/jeffpar/pcjs-demo-disks/tree/master/pcx86/dos/microsoft/2.11/built)
folder.

This machine is also available with the [PCjs Debugger](/disks/pcx86/dos/microsoft/2.00/debugger/).

{% include machine.html id="ibm5160" %}

*[@jeffpar](https://jeffpar.com)*  
*Nov 21, 2018*
