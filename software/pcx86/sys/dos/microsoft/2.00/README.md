---
layout: page
title: Microsoft MS-DOS 2.00
permalink: /software/pcx86/sys/dos/microsoft/2.00/
redirect_from: /disks/pcx86/dos/microsoft/2.00/
preview: https://diskettes.pcjs.org/pcx86/sys/dos/microsoft/2.00/MSDOS200-DISKS.jpg
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/512kb/machine.xml
    drives: '[{name:"PC-DOS 2.00 w/Tools (10Mb)",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-C400.json"},{name:"MS-DOS 1.x/2.x Source (10Mb)",type:3,path:"/harddisks/pcx86/10mb/MSDOS-SRC.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoStart: true
    autoType: $date\r$time\rD:\r
---

There was no MS-DOS 2.00 product *per se*.  Instead, there were OEM releases of MS-DOS based on version 2.00,
including:

  - [COMPAQ MS-DOS 2.11](/software/pcx86/sys/dos/compaq/2.11/)
  - [COMPAQ MS-DOS 2.12](/software/pcx86/sys/dos/compaq/2.12/)

### MS-DOS 2.00 Source Code

On March 25, 2014, source code upon which OEMs based their MS-DOS 1.x and 2.x releases was made available to the
public by the [Computer History Museum](http://www.computerhistory.org/atchm/microsoft-ms-dos-early-source-code/),
with the permission of Microsoft.

![MS-DOS 2.00]({{ site.software.diskettes.server }}/pcx86/sys/dos/microsoft/2.00/MSDOS200-DISKS.jpg)

Unfortunately, the Computer History Museum decided not to share the precise contents of the diskettes in its possession.
Instead, they released a ZIP archive that aggregated the contents of the MS-DOS 2.00 diskettes (pictured above) into two
folders, `v20object` and `v20source`, with no clear indication which files came from which disk, why some files were renamed,
what the original file names and timestamps were, and what (if anything) was omitted.

And it isn't entirely correct to describe those files as the source code for "MS-DOS 2.00".  The 2.00 files from the
OEM diskettes pictured above are primarily *binary* files, not source code.  The rest of the source files are actually
from a much later snapshot of source code, used to build MS-DOS 2.11, so at best, the collection should be referred to as
"MS-DOS 2.x".

To add to the confusion, some [WordStar 3.20](/software/pcx86/app/other/wordstar/3.20/) binary files were included in the
`v20source` folder, completely unrelated to MS-DOS--and also completely useless, since the main executable, `WS.COM`, was not
included.

### 2018 Update

On September 28, 2018, Microsoft [re-released](https://blogs.msdn.microsoft.com/commandline/2018/09/28/re-open-sourcing-ms-dos-1-25-and-2-0/)
the MS-DOS 1.x and 2.x source files on [GitHub](https://github.com/microsoft/ms-dos).  The files are identical to the
original CHM release, so no effort was made to improve the previous release, remove irrelevant files, organize them by
original diskette, etc.  And while GitHub is a great way to save and share files, Git repositories don't preserve original
file modification dates and times, unfortunately.

Microsoft's sole improvement of the 2018 re-release was to quietly relax restrictions on the reuse of the source code,
by releasing it under an [MIT License](https://en.wikipedia.org/wiki/MIT_License), instead of the older and much more restrictive
[Microsoft Research License Agreement](http://www.computerhistory.org/atchm/microsoft-research-license-agreement-msdos-v1-1-v2-0/).

### 2019 Update

Earlier this year, a PCjs user emailed me a list of the contents of Microsoft's MS-DOS 2.00 OEM distribution disks.
Based on that information, I recreated the five disks pictured above and added them to the PCjs Disk Library.  Directory
listings are provided [below](#directory-of-ms-dos-200-oem-disk-1).

Now that we know the contents of these disks, it's clear that the Computer History Museum made an even bigger mess than we
originally suspected.  All the files on those five disks were copied to either `v20object` or `v20source` folders, which
would have been OK if that's all they had done, but then they took another (unattributed) collection of MS-DOS 2.11 source files,
and instead of copying those files into separate folders, such as `v21object` and `v21source`, they copied them into the `v20`
folders as well.

They also duplicated all of the `.DOC` files as `.txt` files, and they appended `_v211` to a few 2.11 source files, presumably
to avoid file name collisions with the 2.00 files -- but why merge them at all?  Or were the 2.11 files already renamed, and CHM
mistakenly assumed (or was misinformed) that everything in the second collection was also from 2.00?  Unless someone from CHM
explains, we can only guess.

Moreover, the process they used to create the copies altered many of the 2.00 files' timestamps.  It seems likely that they
made some sort of intermediate disk image, transferred all the original files to that intermediate image, then mounted the
intermediate image and copied the files from there to the `v20object` and `v20source` folders.

What's wrong with that process?  Well, as I discussed in "[Daylight Savings Time Headache](/blog/2017/12/23/)", timestamps
in FAT disk images are purely *local* times; they reflect whatever time zone and DST adjustment was in effect at the time
they were created, but there is no record of *which* time zone or DST adjustment was used.  Unfortunately, when certain modern
operating systems (e.g., macOS) mount a FAT disk image, they try to partially compensate for that shortcoming, by quietly
applying a DST adjustment to any timestamps that were either inside or outside of DST, and that determination is based on whether
the *current* date is inside or outside of DST, which makes the alteration even more insidious.  And not all regions around
the world observe DST, even within the United States.

As a result, Daylight Savings Time is a serious obstacle to accurate date and time preservation.  And arbitrarily renaming
files with unexplained suffixes, or more convenient file extensions, doesn't help either.

I have attempted to correct all the file names and timestamps on the five disks below.  Whether the rest of the (2.11) files in
CHM's original archive suffer from similar timestamp alterations is hard to say without more information.

### Excerpt from README.DOC (Disk 1)

    The software/documentation on the five inch diskettes is arranged
    as follows:
    
    1.   DOS distribution diskette.  This diskette contains files which
         should be distributed to all users.  This allows the DOS
         distribution diskette to meet the requirements of users of high level
         language compilers as well as users running only applications.
         Many compilers marketed independently through the retail channel
         (including those of Microsoft) assume LINK comes with the DOS, as
         in the case of IBM.  How you choose to distribute BASIC (contracted
         for separately) is up to you.
    
    2.   Assembly Language Development System diskette.  This diskette
         contains files of interest to assembly language programmers.
         High level language programmers do not need these programs unless
         they are writing assembly language subroutines.  IBM chose to
         unbundle this package from the DOS distribution diskette (except
         for DEBUG), but you do not have to do so.
    
    3.   PRINT and FORMAT diskette.  This diskette contains .ASM source
         files which are necessary to assemble the print spooler, which you
         may wish to customize for greater performance.  .OBJ files are also
         included for the FORMAT utility.
    
    4.   Skeletal BIOS and documentation diskette.  This diskette contains
         the skeletal BIOS source code and the SYSINIT and SYSIMES object
         modules which must be linked with your BIOS module.  The proper
         sequence for linking is BIOS - SYSINIT - SYSIMES.
         A profiler utility is also included on the diskette, but this
         is not intended for end-users.  This is distributed for use by
         your development staff only and is not supported by Microsoft
         If you do decide to distribute it, it is at your own risk!
    
    5.   Documentation.  Features of 2.0 are documented on this disk.


{% include gallery/documents.html width="200" height="280" %}

### Directory of MS-DOS 2.00 OEM (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    DEBUG    COM     11764   2-01-83  10:13a
    EXE2BIN  EXE      1649   2-01-83   9:19a
    CHKDSK   COM      6330   2-01-83   9:16a
    COMMAND  COM     15480   2-08-83   7:50p
    EDLIN    COM      4389   2-01-83   9:31a
    PRINT    COM      3808   2-01-83  12:39p
    RECOVER  COM      2277   2-01-83   2:22p
    SYS      COM       850   2-01-83   2:26p
    MORE     COM      4364   1-14-83   6:42p
    DISKCOPY COM      1419   2-14-83   4:39p
    LINK     EXE     42368   1-06-83   4:36p
    SORT     EXE      1216   2-08-83   7:04p
    FIND     EXE      5796   1-14-83   6:35p
    FC       EXE      2553   2-01-83   9:36a
    MSDOS    SYS     16690   2-08-83   7:48p
    README   DOC      8832   1-01-80  12:03a
           16 file(s)     129785 bytes
                           26624 bytes free

### Directory of MS-DOS 2.00 OEM (Disk 2)

     Volume in drive A has no label
     Directory of A:\

    MASM     EXE     77440   2-01-83   1:13p
    CREF     EXE     13824   6-02-82   6:06p
            2 file(s)      91264 bytes
                           68608 bytes free

### Directory of MS-DOS 2.00 OEM (Disk 3)

     Volume in drive A has no label
     Directory of A:\

    DOSMAC   ASM      6656  10-18-82  12:06p
    DEVSYM   ASM      2688  10-18-82  12:07p
    DOSSYM   ASM     42112   1-01-80  12:07a
    GENFOR   ASM      4096   2-03-83   2:45p
    PRINT    ASM     48000   2-01-83  12:37p
    FORMAT   OBJ      4864   2-03-83   2:18p
    DOSPATCH TXT      2546   2-08-83   8:04p
    FORMAT   DOC     16640   2-03-83   3:37p
    FORMES   OBJ      1152   2-03-83   2:03p
            9 file(s)     128754 bytes
                           29696 bytes free

### Directory of MS-DOS 2.00 OEM (Disk 4)

     Volume in drive A has no label
     Directory of A:\

    PROHST   PAS     11520   1-28-83   6:07p
    FILBP    PAS      6144   1-28-83   6:08p
    SYSIMES  OBJ       384   1-24-83  11:42a
    SKELIO   ASM     45056   1-01-80  12:05a
    HRDDRV   ASM     17536   1-01-80  12:15a
    PROFIL   OBJ      2304  10-28-82   5:32p
    PROFIL   ASM     21248  10-28-82   5:31p
    PCLOCK   ASM      3200  10-28-82   5:32p
    SYSINIT  OBJ      3328   2-08-83   8:24p
    PROHST   EXE     41728   1-28-83   5:51p
    PROHST   HLP      1536   1-28-83   6:06p
           11 file(s)     153984 bytes
                            4096 bytes free

### Directory of MS-DOS 2.00 OEM (Disk 5)

     Volume in drive A has no label
     Directory of A:\

    SYSCALL  DOC     59136   1-27-83   3:18p
    DEVDRIV  DOC     37888   1-27-83   3:22p
    UTILITY  DOC     27776   1-27-83   3:26p
    QUICK    DOC      3456   1-27-83   3:39p
    INT24    DOC      4224   1-27-83   3:30p
    ANSI     DOC      6784   1-27-83   3:31p
    PROFILE  DOC      3968   1-27-83   3:34p
    CONFIG   DOC      3456   1-27-83   3:35p
    SYSINIT  DOC      3072   1-27-83   3:40p
    INCOMP   DOC      2688   1-27-83   3:42p
           10 file(s)     152448 bytes
                            5632 bytes free

### Building MS-DOS Source Code

For the machine below, a 10Mb hard disk image was created with all the MS-DOS 1.x and 2.x sources:

    node tools/old/diskdump/bin/diskdump.js --dir=src --format=json --output=MSDOS-SRC.json --label=MSDOSSRC --size=10000 --normalize --overwrite

NOTE: DiskDump has been superseded by the DiskImage utility.
See [PCjs Tools](https://github.com/jeffpar/pcjs/tree/master/tools) for more information.

The 2.11 source files were copied from the CHM release, only because they had preserved something *approximating* the
original timestamps:

      11648 Aug 18 14:26:36 1983 ALLOC.ASM
      14716 Aug 19 11:53:04 1983 BUF.ASM
      26880 Aug 18 16:10:38 1983 CHKDSK.ASM
      14080 Aug 18 16:14:44 1983 CHKMES.ASM
      40704 Aug 18 16:12:18 1983 CHKPROC.ASM
        900 Aug 25 15:06:18 1983 COMEQU.ASM
        128 Aug 18 15:18:16 1983 COMLINK
      23936 Aug 18 14:59:06 1983 COMMAND.ASM
        782 Aug 25 15:04:08 1983 COMSEG.ASM
        512 Dec 31 23:13:10 1979 COMSW.ASM
      20480 Aug 18 15:14:20 1983 COPY.ASM
      18304 Aug 18 15:15:16 1983 COPYPROC.ASM
       9472 Aug 18 15:15:56 1983 CPARSE.ASM
      14764 Aug 19 11:55:50 1983 CTRLC.ASM
      34304 Aug 18 16:03:54 1983 DEBASM.ASM
      27008 Aug 18 15:58:12 1983 DEBCOM1.ASM
      37356 Oct 20 10:28:10 1983 DEBCOM2.ASM
      38912 Aug 18 16:07:06 1983 DEBCONST.ASM
       2816 Aug 18 16:07:40 1983 DEBDATA.ASM
       1280 Jan  1 00:12:36 1980 DEBEQU.ASM
       5248 Dec 31 23:49:10 1979 DEBMES.ASM
      21888 Aug 18 16:05:14 1983 DEBUASM.ASM
      22016 Aug 18 15:56:58 1983 DEBUG.ASM
      12032 Aug 18 14:27:22 1983 DEV.ASM
       2688 Oct 18 12:07:22 1982 DEVSYM.ASM
      29568 Aug 18 14:28:48 1983 DIR.ASM
      14592 Aug 18 14:25:40 1983 DIRCALL.ASM
      38016 Aug 18 14:30:38 1983 DISK.ASM
       6656 Dec 31 23:51:48 1979 DISKCOPY.ASM
       7808 Dec 31 23:52:38 1979 DISKMES.ASM
        141 Aug 25 16:46:20 1983 DOSLINK
       4395 Sep 12 10:41:22 1983 DOSMAC_v211.ASM
      14098 Sep 28 14:41:50 1983 DOSMES.ASM
        357 Aug 25 15:04:22 1983 DOSSEG.ASM
      44887 Aug 25 15:05:44 1983 DOSSYM_v211.ASM
      56960 Jan  1 01:08:10 1980 EDLIN.ASM
       3200 Aug 18 16:21:46 1983 EDLMES.ASM
      13190 Sep 22 23:03:32 1983 EDLPROC.ASM
      13824 Dec 31 23:45:06 1979 EXE2BIN.ASM
      31011 Aug 19 11:59:32 1983 EXEC.ASM
        768 Dec 31 23:45:24 1979 EXEMES.ASM
      10112 Aug 18 14:31:30 1983 FAT.ASM
      65024 Dec 31 23:26:22 1979 FC.ASM
      13392 Aug 19 11:52:32 1983 FCB.ASM
       2048 Dec 31 23:26:42 1979 FCMES.ASM
      39168 Dec 31 23:28:36 1979 FIND.ASM
       1408 Dec 31 23:29:22 1979 FINDMES.ASM
      46720 Jan  1 13:48:16 1980 FORMAT.ASM
       4529 Sep 22 22:00:04 1983 FORMES.ASM
       4096 Feb  3 13:45:06 1983 GENFOR.ASM
      18048 Aug 18 14:14:38 1983 GETSET.ASM
        303 Aug 25 15:06:00 1983 IFEQU.ASM
      24832 Aug 18 15:01:24 1983 INIT.ASM
      18304 Aug 18 14:13:16 1983 MISC.ASM
       3712 Jan  1 01:39:20 1980 MORE.ASM
        313 Sep 22 21:23:54 1983 MOREMES.ASM
      22208 Jan  3 04:25:56 1980 MSCODE.ASM
      11520 Dec 31 23:15:46 1979 MSDATA.ASM
        176 Jan  3 04:18:14 1980 MSDOS.ASM
       9216 Dec 31 23:10:14 1979 MSHEAD.ASM
      13568 Dec 31 23:24:52 1979 MSINIT.ASM
      48000 Jan  1 01:42:56 1980 PRINT_v211.ASM
       3222 Aug 19 11:55:22 1983 PROC.ASM
       6784 Aug 18 15:00:18 1983 RDATA.ASM
       5760 Dec 31 23:39:06 1979 RECMES.ASM
      23808 Jan  1 02:01:58 1980 RECOVER.ASM
      14336 Aug 18 14:32:20 1983 ROM.ASM
       6912 Aug 18 14:59:40 1983 RUCODE.ASM
      17099 Sep 22 22:27:04 1983 SORT.ASM
       2688 Jan  1 02:07:50 1980 SORTMES.ASM
        256 Aug 18 14:32:46 1983 STDBUF.ASM
        256 Aug 18 14:33:56 1983 STDCALL.ASM
        256 Aug 18 14:39:02 1983 STDCTRLC.ASM
        193 Jan  3 06:40:50 1980 STDFCB.ASM
        210 Jan  3 06:41:02 1980 STDIO.ASM
        185 Jan  3 05:27:54 1980 STDPROC.ASM
       1280 Dec 31 23:12:18 1979 STDSW.ASM
       9726 Aug 19 11:54:24 1983 STRIN.ASM
      22784 Sep 22 21:29:40 1983 SYS.ASM
      21220 Jan  3 05:26:22 1980 SYSCALL.ASM
        512 Dec 31 23:44:22 1979 SYSIMES.ASM
      37644 Oct 12 21:24:26 1983 SYSINIT.ASM
       1206 Sep 22 21:52:50 1983 SYSMES.ASM
      33664 Sep  8 01:48:06 1983 TCODE.ASM
      13568 Aug 18 15:05:08 1983 TCODE2.ASM
      16896 Aug 18 15:10:32 1983 TCODE3.ASM
      27392 Aug 18 15:11:40 1983 TCODE4.ASM
      24576 Sep  8 01:49:00 1983 TCODE5.ASM
       9088 Dec 31 23:38:32 1979 TDATA.ASM
       7040 Aug 18 14:45:52 1983 TIME.ASM
       4480 Aug 18 15:17:42 1983 TSPC.ASM
       7808 Aug 18 15:13:22 1983 TUCODE.ASM
        896 Dec 31 23:03:04 1979 UINIT.ASM
      25984 Jan  3 05:57:14 1980 XENIX.ASM
      17792 Aug 18 14:51:18 1983 XENIX2.ASM

The 2.11 source files were further organized into folders corresponding to their respective binaries,
along with makefiles where appropriate
(eg, [MSDOS.MAK]({{ site.github.repository_url }}/blob/master/software/pcx86/sys/dos/microsoft/2.11/src/MSDOS/MSDOS.MAK)).
Also, in the 2.11 [INC]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/INC) folder,
`DOSMAC_v211.ASM` was copied to `DOSMAC.ASM`, and `DOSSYM_v211.ASM` was copied to `DOSSYM.ASM`.

- [CHKDSK]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/CHKDSK)
- [COMMAND]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/COMMAND)
- [DEBUG]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/DEBUG)
- [DISKCOPY]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/DISKCOPY)
- [EDLIN]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/EDLIN)
- [EXE2BIN]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/EXE2BIN)
- [FC]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/FC)
- [FIND]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/FIND)
- [FORMAT]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/FORMAT)
- [INC]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/INC)
- [IO]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/IO)
- [MORE]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/MORE)
- [MSDOS]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/MSDOS)
- [PRINT]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/PRINT)
- [RECOVER]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/RECOVER)
- [SORT]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/SORT)
- [SYS]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/SYS)

Then the [MSDOS]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/MSDOS)
folder was supplemented with reconstructed
[IO.ASM](https://diskettes.pcjs.org/pcx86/sys/dos/microsoft/2.11/src/MSDOS/IO.ASM) and
[IO2.ASM](https://diskettes.pcjs.org/pcx86/sys/dos/microsoft/2.11/src/MSDOS/IO2.ASM) files from
[John Elliott](http://www.seasip.info/DOS/).

The resulting files, along with a [MK.BAT]({{ site.github.repository_url }}/blob/master/software/pcx86/sys/dos/microsoft/2.11/src/MK.BAT)
batch file, were installed in the machine below on drive D.  Drive C contains a bootable copy of PC DOS 2.00, along with
Microsoft MASM 4.00 and other assorted tools.

If `MK.BAT` is invoked with the name of one of the folders (eg, `MK COMMAND`), it will run `MAKE` in that
folder; to build all the folders, use `MK ALL`.

`MK.BAT` also accepts optional "OEM" and "VER" parameters.  For example, `MK MSDOS IBM 200` will build the **MSDOS**
folder with symbols **OEMIBM** and **VER200** defined.  Over time, the PCjs Project will use those symbols to
tweak the source files, in order to produce binaries that match the corresponding original release.

[DOSSYM.ASM]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/INC/DOSSYM.ASM) has been
modified to check for "OEM" and "VER" symbols, and to display messages indicating the current build selection, alerting
you that the resulting binaries may differ from those produced by the original source code snapshot.

For example, files built using `MK ALL IBM 200` should display these messages:

    IBM release selected 
    VERSION 2.00 selected 

However, you will sometimes see these messages:

    IBM release pre-selected 
    VERSION 2.00 selected 

which means that another file, such as
[COMSW.ASM]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/COMMAND/COMSW.ASM) or
[STDSW.ASM]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/MSDOS/STDSW.ASM),
defined **IBM** before including
[DOSSYM.ASM]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/INC/DOSSYM.ASM).
And sometimes a file will set **IBM** itself, such as
[GETSET.ASM]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/src/MSDOS/GETSET.ASM).
The "pre-selected" messages help you catch any build discrepancies due to these oddities.

Other files have been modified here as well, primarily to eliminate extraneous characters that caused warnings or
errors during the build process.  Which raises the question: which version of MASM was originally used to build
these sources?  The MASM.EXE that was bundled with this snapshot is dated Feb 1, 1983 and reports:

    The Microsoft MACRO Assembler
    Version 1.10, Copyright (C) Microsoft Inc. 1981,82

However, it's rather buggy, so it almost certainly was *not* used.  In fact, we now know that this copy of MASM
was distributed on the 2.00 OEM diskettes, so there's no reason to assume it had anything to do with the 2.11 files.
More information on [The MASM Question](/blog/2018/11/21/#the-masm-question) is in the PCjs blog.

### MS-DOS Source Build Machine

A quick note about speed: the typical PC in the early 1980s was still a 4.77Mhz 8088-based machine, so it took
a considerable amount of time to assemble all the MS-DOS 2.x sources.  If you're impatient, you can load the machine
on this page with a higher speed multiplier (eg, [multiplier=8](?multiplier=8))
or click the *Speed* button below until it's running at speed that you prefer (and that your browser supports).

In addition, all the build products (**OBJ**, **EXE**, **COM**, **LST**, and **MAP** files) from a successful
`MK ALL` command have already been saved in the [PCjs repository]({{ site.github.repository_url }}), in the
[/software/pcx86/sys/dos/microsoft/2.11/bin]({{ site.github.repository_url }}/tree/master/software/pcx86/sys/dos/microsoft/2.11/bin)
folder.

{% include machine.html id="ibm5160" %}

The results of running `MK ALL` on the 2.11 sources are shown below:

    D:\211>MK ALL

    D:\211>ECHO OFF


    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'EXE2BIN.OBJ'
            MASM /DOEM /DVER /I..\INC EXE2BIN.ASM,EXE2BIN.OBJ,EXE2BIN.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21402 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'EXEMES.OBJ'
            MASM /DOEM /DVER /I..\INC EXEMES.ASM,EXEMES.OBJ,EXEMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    49490 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'EXE2BIN.EXE'
            LINK EXE2BIN.OBJ EXEMES.OBJ,EXE2BIN.EXE,EXE2BIN.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.




    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'CHKDSK.OBJ'
            MASM /DOEM /DVER /I..\INC CHKDSK.ASM,CHKDSK.OBJ,CHKDSK.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    17514 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'CHKMES.OBJ'
            MASM /DOEM /DVER /I..\INC CHKMES.ASM,CHKMES.OBJ,CHKMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    19856 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'CHKPROC.OBJ'
            MASM /DOEM /DVER /I..\INC CHKPROC.ASM,CHKPROC.OBJ,CHKPROC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    14796 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'CHKDSK.EXE'
            LINK CHKDSK.OBJ CHKPROC.OBJ CHKMES.OBJ,CHKDSK.EXE,CHKDSK.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'CHKDSK.COM'
            EXE2BIN CHKDSK.EXE CHKDSK.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'COMMAND.OBJ'
            MASM /DOEM /DVER /I..\INC COMMAND.ASM,COMMAND.OBJ,COMMAND.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    16470 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'RUCODE.OBJ'
            MASM /DOEM /DVER /I..\INC RUCODE.ASM,RUCODE.OBJ,RUCODE.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    18744 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'RDATA.OBJ'
            MASM /DOEM /DVER /I..\INC RDATA.ASM,RDATA.OBJ,RDATA.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    44822 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'INIT.OBJ'
            MASM /DOEM /DVER /I..\INC INIT.ASM,INIT.OBJ,INIT.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    16858 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'UINIT.OBJ'
            MASM /DOEM /DVER /I..\INC UINIT.ASM,UINIT.OBJ,UINIT.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    49500 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TCODE.OBJ'
            MASM /DOEM /DVER /I..\INC TCODE.ASM,TCODE.OBJ,TCODE.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    13556 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TCODE2.OBJ'
            MASM /DOEM /DVER /I..\INC TCODE2.ASM,TCODE2.OBJ,TCODE2.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    16854 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TCODE3.OBJ'
            MASM /DOEM /DVER /I..\INC TCODE3.ASM,TCODE3.OBJ,TCODE3.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    15546 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TCODE4.OBJ'
            MASM /DOEM /DVER /I..\INC TCODE4.ASM,TCODE4.OBJ,TCODE4.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    12576 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TCODE5.OBJ'
            MASM /DOEM /DVER /I..\INC TCODE5.ASM,TCODE5.OBJ,TCODE5.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    13546 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TUCODE.OBJ'
            MASM /DOEM /DVER /I..\INC TUCODE.ASM,TUCODE.OBJ,TUCODE.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    18744 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'COPY.OBJ'
            MASM /DOEM /DVER /I..\INC COPY.ASM,COPY.OBJ,COPY.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    15590 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'COPYPROC.OBJ'
            MASM /DOEM /DVER /I..\INC COPYPROC.ASM,COPYPROC.OBJ,COPYPROC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    16726 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'CPARSE.OBJ'
            MASM /DOEM /DVER /I..\INC CPARSE.ASM,CPARSE.OBJ,CPARSE.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    18780 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TDATA.OBJ'
            MASM /DOEM /DVER /I..\INC TDATA.ASM,TDATA.OBJ,TDATA.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    45422 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TSPC.OBJ'
            MASM /DOEM /DVER /I..\INC TSPC.ASM,TSPC.OBJ,TSPC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    18440 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'COMMAND.EXE'
            LINK @COMMAND.LRF,COMMAND.EXE,COMMAND.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Object Modules [.OBJ]: COMMAND.OBJ RUCODE.OBJ RDATA.OBJ INIT.OBJ UINIT.OBJ +
    Object Modules [.OBJ]: TCODE.OBJ TCODE2.OBJ TCODE3.OBJ TCODE4.OBJ TCODE5.OBJ +
    Object Modules [.OBJ]: TUCODE.OBJ COPY.OBJ COPYPROC.OBJ CPARSE.OBJ TDATA.OBJ TSPC.OBJ
    Warning: no stack segment
    make : target does not exist 'COMMAND.COM'
            EXE2BIN COMMAND.EXE COMMAND.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'DEBUG.OBJ'
            MASM /DOEM /DVER /I..\INC DEBUG.ASM,DEBUG.OBJ,DEBUG.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    19858 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBASM.OBJ'
            MASM /DOEM /DVER /I..\INC DEBASM.ASM,DEBASM.OBJ,DEBASM.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    15906 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBUASM.OBJ'
            MASM /DOEM /DVER /I..\INC DEBUASM.ASM,DEBUASM.OBJ,DEBUASM.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    16890 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBCOM1.OBJ'
            MASM /DOEM /DVER /I..\INC DEBCOM1.ASM,DEBCOM1.OBJ,DEBCOM1.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    19788 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBCOM2.OBJ'
            MASM /DOEM /DVER /I..\INC DEBCOM2.ASM,DEBCOM2.OBJ,DEBCOM2.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    15286 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBCONST.OBJ'
            MASM /DOEM /DVER /I..\INC DEBCONST.ASM,DEBCONST.OBJ,DEBCONST.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    14794 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBDATA.OBJ'
            MASM /DOEM /DVER /I..\INC DEBDATA.ASM,DEBDATA.OBJ,DEBDATA.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21416 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBMES.OBJ'
            MASM /DOEM /DVER /I..\INC DEBMES.ASM,DEBMES.OBJ,DEBMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    22896 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEBUG.EXE'
            LINK @DEBUG.LRF,DEBUG.EXE,DEBUG.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Object Modules [.OBJ]: DEBUG.OBJ DEBCOM1.OBJ DEBCOM2.OBJ +
    Object Modules [.OBJ]: DEBUASM.OBJ DEBASM.OBJ DEBCONST.OBJ +
    Object Modules [.OBJ]: DEBDATA.OBJ DEBMES.OBJ
    Warning: no stack segment
    make : target does not exist 'DEBUG.COM'
            EXE2BIN DEBUG.EXE DEBUG.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'DISKCOPY.OBJ'
            MASM /DOEM /DVER /I..\INC DISKCOPY.ASM,DISKCOPY.OBJ,DISKCOPY.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21816 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DISKMES.OBJ'
            MASM /DOEM /DVER /I..\INC DISKMES.ASM,DISKMES.OBJ,DISKMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21846 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DISKCOPY.EXE'
            LINK DISKCOPY.OBJ DISKMES.OBJ,DISKCOPY.EXE,DISKCOPY.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'DISKCOPY.COM'
            EXE2BIN DISKCOPY.EXE DISKCOPY.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'EDLIN.OBJ'
            MASM /DOEM /DVER /I..\INC EDLIN.ASM,EDLIN.OBJ,EDLIN.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    11962 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'EDLMES.OBJ'
            MASM /DOEM /DVER /I..\INC EDLMES.ASM,EDLMES.OBJ,EDLMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    22868 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'EDLPROC.OBJ'
            MASM /DOEM /DVER /I..\INC EDLPROC.ASM,EDLPROC.OBJ,EDLPROC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21768 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'EDLIN.EXE'
            LINK EDLIN.OBJ EDLMES.OBJ EDLPROC.OBJ,EDLIN.EXE,EDLIN.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'EDLIN.COM'
            EXE2BIN EDLIN.EXE EDLIN.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'FC.OBJ'
            MASM /DOEM /DVER /I..\INC FC.ASM,FC.OBJ,FC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    16070 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FCMES.OBJ'
            MASM /DOEM /DVER /I..\INC FCMES.ASM,FCMES.OBJ,FCMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    49468 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FC.EXE'
            LINK FC.OBJ FCMES.OBJ,FC.EXE,FC.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.




    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'FIND.OBJ'
            MASM /DOEM /DVER /I..\INC FIND.ASM,FIND.OBJ,FIND.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    46076 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FINDMES.OBJ'
            MASM /DOEM /DVER /I..\INC FINDMES.ASM,FINDMES.OBJ,FINDMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    49456 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FIND.EXE'
            LINK FIND.OBJ FINDMES.OBJ,FIND.EXE,FIND.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.




    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'FORMAT.OBJ'
            MASM /DOEM /DVER /I..\INC FORMAT.ASM,FORMAT.OBJ,FORMAT.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    15052 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FORMES.OBJ'
            MASM /DOEM /DVER /I..\INC FORMES.ASM,FORMES.OBJ,FORMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    22866 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'GENFOR.OBJ'
            MASM /DOEM /DVER /I..\INC GENFOR.ASM,GENFOR.OBJ,GENFOR.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    22862 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FORMAT.EXE'
            LINK FORMAT.OBJ FORMES.OBJ GENFOR.OBJ,FORMAT.EXE,FORMAT.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'FORMAT.COM'
            EXE2BIN FORMAT.EXE FORMAT.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'MORE.OBJ'
            MASM /DOEM /DVER /I..\INC MORE.ASM,MORE.OBJ,MORE.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    23942 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'MOREMES.OBJ'
            MASM /DOEM /DVER /I..\INC MOREMES.ASM,MOREMES.OBJ,MOREMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    50456 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'MORE.EXE'
            LINK MORE.OBJ MOREMES.OBJ,MORE.EXE,MORE.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'MORE.COM'
            EXE2BIN MORE.EXE MORE.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'ALLOC.OBJ'
            MASM /DOEM /DVER /I..\INC ALLOC.ASM,ALLOC.OBJ,ALLOC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    20102 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DIRCALL.OBJ'
            MASM /DOEM /DVER /I..\INC DIRCALL.ASM,DIRCALL.OBJ,DIRCALL.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    19132 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DEV.OBJ'
            MASM /DOEM /DVER /I..\INC DEV.ASM,DEV.OBJ,DEV.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    20088 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DIR.OBJ'
            MASM /DOEM /DVER /I..\INC DIR.ASM,DIR.OBJ,DIR.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    17244 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DISK.OBJ'
            MASM /DOEM /DVER /I..\INC DISK.ASM,DISK.OBJ,DISK.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    15100 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'DOSMES.OBJ'
            MASM /DOEM /DVER /I..\INC DOSMES.ASM,DOSMES.OBJ,DOSMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    22332 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'FAT.OBJ'
            MASM /DOEM /DVER /I..\INC FAT.ASM,FAT.OBJ,FAT.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    20026 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'GETSET.OBJ'
            MASM /DOEM /DVER /I..\INC GETSET.ASM,GETSET.OBJ,GETSET.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    19094 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'MISC.OBJ'
            MASM /DOEM /DVER /I..\INC MISC.ASM,MISC.OBJ,MISC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    18074 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'MSCODE.OBJ'
            MASM /DOEM /DVER /I..\INC MSCODE.ASM,MSCODE.OBJ,MSCODE.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    16066 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'MSDOS.OBJ'
            MASM /DOEM /DVER /I..\INC MSDOS.ASM,MSDOS.OBJ,MSDOS.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    13794 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'ROM.OBJ'
            MASM /DOEM /DVER /I..\INC ROM.ASM,ROM.OBJ,ROM.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    19150 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'STDBUF.OBJ'
            MASM /DOEM /DVER /I..\INC STDBUF.ASM,STDBUF.OBJ,STDBUF.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    19026 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'STDCALL.OBJ'
            MASM /DOEM /DVER /I..\INC STDCALL.ASM,STDCALL.OBJ,STDCALL.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    18092 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'STDCTRLC.OBJ'
            MASM /DOEM /DVER /I..\INC STDCTRLC.ASM,STDCTRLC.OBJ,STDCTRLC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    19052 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'STDFCB.OBJ'
            MASM /DOEM /DVER /I..\INC STDFCB.ASM,STDFCB.OBJ,STDFCB.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    19162 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'STDIO.OBJ'
            MASM /DOEM /DVER /I..\INC STDIO.ASM,STDIO.OBJ,STDIO.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    18146 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'STDPROC.OBJ'
            MASM /DOEM /DVER /I..\INC STDPROC.ASM,STDPROC.OBJ,STDPROC.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    Non-IBM release pre-selected 
    VERSION 2.11 pre-selected 

    17136 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'TIME.OBJ'
            MASM /DOEM /DVER /I..\INC TIME.ASM,TIME.OBJ,TIME.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21026 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'XENIX.OBJ'
            MASM /DOEM /DVER /I..\INC XENIX.ASM,XENIX.OBJ,XENIX.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    16200 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'XENIX2.OBJ'
            MASM /DOEM /DVER /I..\INC XENIX2.ASM,XENIX2.OBJ,XENIX2.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    18066 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'MSDOS.EXE'
            LINK @MSDOS.LRF,MSDOS.EXE,MSDOS.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Object Modules [.OBJ]: MSDOS.OBJ MSCODE.OBJ DOSMES.OBJ MISC.OBJ GETSET.OBJ DIRCALL.OBJ +
    Object Modules [.OBJ]: ALLOC.OBJ DEV.OBJ DIR.OBJ DISK.OBJ FAT.OBJ ROM.OBJ STDBUF.OBJ STDCALL.OBJ +
    Object Modules [.OBJ]: STDCTRLC.OBJ STDFCB.OBJ STDPROC.OBJ STDIO.OBJ TIME.OBJ XENIX.OBJ XENIX2.OBJ
    Warning: no stack segment
    make : target does not exist 'MSDOS.SYS'
            EXE2BIN MSDOS.EXE MSDOS.SYS



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'PRINT.OBJ'
            MASM /DOEM /DVER /I..\INC PRINT.ASM,PRINT.OBJ,PRINT.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    IBM release pre-selected 
    VERSION 2.11 pre-selected 

    13654 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'PRINT.EXE'
            LINK PRINT.OBJ,PRINT.EXE,PRINT.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'PRINT.COM'
            EXE2BIN PRINT.EXE PRINT.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'RECOVER.OBJ'
            MASM /DOEM /DVER /I..\INC RECOVER.ASM,RECOVER.OBJ,RECOVER.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    19706 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'RECMES.OBJ'
            MASM /DOEM /DVER /I..\INC RECMES.ASM,RECMES.OBJ,RECMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21816 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'RECOVER.EXE'
            LINK RECOVER.OBJ RECMES.OBJ,RECOVER.EXE,RECOVER.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'RECOVER.COM'
            EXE2BIN RECOVER.EXE RECOVER.COM



    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'SORT.OBJ'
            MASM /DOEM /DVER /I..\INC SORT.ASM,SORT.OBJ,SORT.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    22648 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'SORTMES.OBJ'
            MASM /DOEM /DVER /I..\INC SORTMES.ASM,SORTMES.OBJ,SORTMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.


    49456 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'SORT.EXE'
            LINK SORT.OBJ SORTMES.OBJ,SORT.EXE,SORT.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

            EXEMOD SORT.EXE /MAX 1 /MIN 1
    Microsoft (R) EXE File Header Utility  Version 4.00
    Copyright (C) Microsoft Corp 1985.  All rights reserved.




    D:\211>ECHO OFF
    Microsoft (R) Program Maintenance Utility  Version 4.02
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    make : target does not exist 'SYS.OBJ'
            MASM /DOEM /DVER /I..\INC SYS.ASM,SYS.OBJ,SYS.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    21360 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'SYSMES.OBJ'
            MASM /DOEM /DVER /I..\INC SYSMES.ASM,SYSMES.OBJ,SYSMES.LST;
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985.  All rights reserved.

    VERSION 2.11 pre-selected 

    23964 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
    make : target does not exist 'SYS.EXE'
            LINK SYS.OBJ SYSMES.OBJ,SYS.EXE,SYS.MAP/M;
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Warning: no stack segment
    make : target does not exist 'SYS.COM'
            EXE2BIN SYS.EXE SYS.COM
