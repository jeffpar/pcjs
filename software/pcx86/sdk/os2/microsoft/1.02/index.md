---
layout: page
title: Microsoft OS/2 SDK 1.02
permalink: /software/pcx86/sdk/os2/microsoft/1.02/
redirect_from:
  - /disks/pcx86/tools/microsoft/os2/sdk/1.02/
  - /pubs/pc/software/os2/microsoft/ptk10/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/640kb/rev3/machine.xml
    autoGen: true
    autoMount:
      B: "MS OS/2 SDK 1.02 (INSTALL)"
    autoType: $date\r$time\rB:\rDIR\r
---

This copy of the Microsoft OS/2 SDK (1.02) was obtained from the [WinWorld](https://winworldpc.com/product/os-2-1x/10)
website.  Unfortunately, it's missing the **NETWORK** disk, so we've included an empty **NETWORK** disk
that allows the SDK installation script to finish.

This SDK was released in December 1987 along with [Microsoft OS/2 1.0](/software/pcx86/sys/os2/microsoft/1.0/).
We don't have all of the printed documentation that came with the SDK, such as the *Installation Guide*, but we do
have the Microsoft® Operating System/2 Programmer’s Toolkit documentation from March 1988 (see below), thanks to the
[OS/2 Museum](http://www.os2museum.com/wp/os2-history/os2-library/os2-1-x-programming/).

{% include gallery/documents.html %}

Other documentation is available for selected OS/2 SDK tools:

  - [SDKED (SDK Editor)](#using-sdked)

### Installation

If you mount the **TOOLKIT1** disk and look in the **OS2DOC** folder, you'll find **READ.ME!**, which includes some very
useful information about the SDK installation process:

	The installation guide is confusing, can you give me three easy steps to
	installing the SDK?
	
	    Sure.  First, put the program diskette into your machine and reboot it.
	    Follow the instructions.  If you have a new machine, first format the
	    hard drive, then reboot with the program diskette.
	
	    Second: copy the files \OS2DOC\INPUT.EXE and \OS2DOC\INSTSDK.CMD from the
	    TOOLKIT diskette to the root of your hard drive.  Run the program INSTSDK
	    and answer its questions.
	
	    Thats, all. [sic]

One of the first questions that the INSTSDK.CMD script asks is:

	Are you installing MS OS/2 SDK on a PS/2 machine?

PCjs currently only simulates PC, XT and AT-class machines, not PS/2 machines, so you might be inclined to answer
**NO** to that question, but in fact, the correct answer is **YES**, because the SDK doesn't actually care what kind
of machine you're using.  It's asking that question merely to determine whether you're using 3.5-inch or 5.25-inch SDK
distribution diskettes.  These disks happen to be the 3.5-inch versions, so you must pretend you're using a PS/2.

Also, this SDK may have only been tested with Microsoft's release of OS/2 1.0, because if you install it on
[IBM OS/2 1.0](/software/pcx86/sys/os2/ibm/1.0/), the script will fail when it attempts to run LIBBUILD to build
all the C runtime libraries.  Apparently, this is because IBM OS/2 1.0 creates an OS2INIT.CMD with PATH set to:

	C:\;C:\OS2;C:\OS2\INSTALL;

so when INSTSDK.CMD updates the PATH, it appends its own directories with a leading semi-colon, resulting in:

	C:\;C:\OS2;C:\OS2\INSTALL;;C:\OS2SDK\TOOLS\BIN;C:\OS2SDK\TOOLS\PBIN

and the "double semi-colon" apparently causes PATH searches to terminate prematurely, so the LIBBUILD program will
not be found.

To complete the SDK installation, fix the PATH in OS2INIT.CMD, then type the following command:

	for %i in (s m c l) do libbuild %i em %LIB%

and *now* your MS OS/2 SDK should be fully installed.  Well, not *quite* fully, because you won't have the files from
the missing **NETWORK** disk; specifically:

	IPCCALLS.DLL
	IPCCALLS.LIB
	IPCTEST.C
	LANMAN.INI
	MAILSLOT.H
	MAKEFILE
	NAMPIPE.SYS
	NMPIPE.H
	README.DOC

but you aren't likely to need those.  We will rebuild a copy of that missing disk from other sources and
include it with the SDK diskettes at a later date.

{% include machine.html id="ibm5170" %}

### Directory of MS OS/2 SDK 1.02 (INSTALL)

     Volume in drive A is OS2INSTALL
     Directory of A:\

    OS2BIO   COM      7168  12-15-87  12:00a
    OS2DOS   COM    262930  12-15-87  12:00a
    ANSICALL DLL      3637  12-15-87  12:00a
    BKSCALLS DLL      5704  12-15-87  12:00a
    BMSCALLS DLL      2576  12-15-87  12:00a
    BVSCALLS DLL     32768  12-15-87  12:00a
    CLOCK01  SYS      2762  12-15-87  12:00a
    CMD      EXE     57648  12-15-87  12:00a
    CONFIG   SYS        73  12-15-87  12:00a
    COUNTRY  SYS     14644  12-15-87  12:00a
    DISK01   506     20352  12-15-87  12:00a
    DISK01   ESD     20352  12-15-87  12:00a
    DISK01   SYS     20352  12-15-87  12:00a
    DOSCALL1 DLL      8709  12-15-87  12:00a
    FDISK    COM     38352  12-15-87  12:00a
    FORMAT   COM     47344  12-15-87  12:00a
    FORMAT   DTA        11  12-15-87  12:00a
    FORMATS  TBL       590  12-15-87  12:00a
    HARDERR  EXE     16304  12-15-87  12:00a
    INSTAID  EXE     64282  12-15-87  12:00a
    INSTALL  CTL*        7  12-16-87  11:13a
    INSTIBM  EXE     64282  12-15-87  12:00a
    INSTMS   EXE     64826  12-15-87  12:00a
    KBD01    SYS     16945  12-15-87  12:00a
    KBDCALLS DLL      7232  12-15-87  12:00a
    MONCALLS DLL      7351  12-15-87  12:00a
    MOUCALLS DLL      5701  12-15-87  12:00a
    MSG      DLL      6578  12-15-87  12:00a
    NLS      DLL      5162  12-15-87  12:00a
    OS2BOOT  COM       512  12-15-87  12:00a
    OSO001   MSG     65077  12-15-87  12:00a
    PRINT01  SYS      7683  12-15-87  12:00a
    QUECALLS DLL     11238  12-15-87  12:00a
    SCREEN01 SYS      1583  12-15-87  12:00a
    SESMGR   DLL     24262  12-15-87  12:00a
    SHELL    EXE     36944  12-15-87  12:00a
    SHELL    LIB     17348  12-15-87  12:00a
    SHELL11F AIF       269  12-15-87  12:00a
    SHELL11F AII        86  12-15-87  12:00a
    STARTUP  CMD        15  12-15-87  12:00a
    SWAPPER  EXE      4150  12-15-87  12:00a
    VIOCALLS DLL     13981  12-15-87  12:00a
           42 file(s)     987790 bytes
                          457216 bytes free

### Directory of MS OS/2 SDK 1.02 (PROGRAM)

     Volume in drive A is OS2PROGRAM
     Directory of A:\

    OS2BIO   COM      7168  12-15-87  12:00a
    OS2DOS   COM    262930  12-15-87  12:00a
    4201     DCP     17081  12-15-87  12:00a
    5202     DCP       416  12-15-87  12:00a
    ANSICALL DLL      3637  12-15-87  12:00a
    BKSCALLS DLL      5704  12-15-87  12:00a
    BMSCALLS DLL      2576  12-15-87  12:00a
    BVSCALLS DLL     32768  12-15-87  12:00a
    CLOCK01  SYS      2762  12-15-87  12:00a
    CMD      EXE     57648  12-15-87  12:00a
    COM01    SYS      8758  12-15-87  12:00a
    COMMAND  COM     25271  12-15-87  12:00a
    CONFIG   SYS        73  12-15-87  12:00a
    COUNTRY  SYS     14644  12-15-87  12:00a
    CREATEDD EXE     48032  12-15-87  12:00a
    DISK01   506     20352  12-15-87  12:00a
    DISK01   ESD     20352  12-15-87  12:00a
    DISK01   SYS     20352  12-15-87  12:00a
    DOSCALL1 DLL      8709  12-15-87  12:00a
    DOSCALLS LIB     29184  12-15-87  12:00a
    EGA      SYS      2110  12-15-87  12:00a
    EXTDSKDD SYS      1860  12-15-87  12:00a
    HARDERR  EXE     16304  12-15-87  12:00a
    KBD01    SYS     16945  12-15-87  12:00a
    KBDCALLS DLL      7232  12-15-87  12:00a
    KEYBOARD DCP     85917  12-15-87  12:00a
    LINK     EXE    109046  12-15-87  12:00a
    MONCALLS DLL      7351  12-15-87  12:00a
    MOUCALLS DLL      5701  12-15-87  12:00a
    MOUSEA00 SYS     16950  12-15-87  12:00a
    MOUSEA01 SYS     16438  12-15-87  12:00a
    MOUSEA02 SYS     16438  12-15-87  12:00a
    MOUSEA03 SYS     16438  12-15-87  12:00a
    MOUSEA04 SYS     16438  12-15-87  12:00a
    MSG      DLL      6578  12-15-87  12:00a
    NLS      DLL      5162  12-15-87  12:00a
    OS2BOOT  COM       512  12-15-87  12:00a
    OSO001   MSG     65077  12-15-87  12:00a
    POINTDD  SYS      5886  12-15-87  12:00a
    PRINT01  SYS      7683  12-15-87  12:00a
    PROGRAM  CTL*        7  12-16-87  11:11a
    QUECALLS DLL     11238  12-15-87  12:00a
    SCREEN01 SYS      1583  12-15-87  12:00a
    SESMGR   DLL     24262  12-15-87  12:00a
    SHELL    EXE     36944  12-15-87  12:00a
    SHELL    LIB     17348  12-15-87  12:00a
    SHELL11F AIF       269  12-15-87  12:00a
    SHELL11F AII        86  12-15-87  12:00a
    SPOOLCP  DLL      9828  12-15-87  12:00a
    SWAPPER  EXE      4150  12-15-87  12:00a
    VDISK    SYS      4662  12-15-87  12:00a
    VIOCALLS DLL     13981  12-15-87  12:00a
    VIOTBL   DCP     52162  12-15-87  12:00a
           53 file(s)    1191003 bytes
                          250880 bytes free

### Directory of MS OS/2 SDK 1.02 (SUPP)

     Volume in drive A is OS2SUPP
     Directory of A:\

    ANSI     EXE      9984  12-15-87  12:00a
    ANSI     SYS      1694  12-15-87  12:00a
    APPEND   EXE      6274  12-15-87  12:00a
    ASSIGN   COM      1689  12-15-87  12:00a
    ATTRIB   EXE     29080  12-15-87  12:00a
    BACKUP   COM     49216  12-15-87  12:00a
    CHKDSK   COM     49232  12-15-87  12:00a
    COMP     COM     33056  12-15-87  12:00a
    DISKCOMP COM     38400  12-15-87  12:00a
    DISKCOPY COM     39456  12-15-87  12:00a
    EDLIN    COM      8151  12-15-87  12:00a
    FIND     EXE     27424  12-15-87  12:00a
    GRAFTABL COM      7112  12-15-87  12:00a
    GWBASIC  EXE     78864  12-15-87  12:00a
    HELP     BAT       479  12-15-87  12:00a
    HELP     CMD       463  12-15-87  12:00a
    HELPMSG  EXE     27408  12-15-87  12:00a
    JOIN     EXE     21040  12-15-87  12:00a
    KEYB     COM     12636  12-15-87  12:00a
    LABEL    COM     26372  12-15-87  12:00a
    MODE     COM     55956  12-15-87  12:00a
    MORE     COM     48866  12-15-87  12:00a
    OSO001H  MSG     84201  12-15-87  12:00a
    PATCH    EXE     37132  12-15-87  12:00a
    PRINT    COM     28492  12-15-87  12:00a
    RECOVER  COM     36928  12-15-87  12:00a
    REPLACE  EXE     33568  12-15-87  12:00a
    RESTORE  COM     54896  12-15-87  12:00a
    SETCOM40 EXE      8654  12-15-87  12:00a
    SORT     EXE     29946  12-15-87  12:00a
    SPOOL    EXE     77370  12-15-87  12:00a
    SUBST    EXE     21024  12-15-87  12:00a
    SUPP     CTL*        7  12-11-87   3:30p
    SYS      COM     32606  12-15-87  12:00a
    TRACE    EXE     10474  12-15-87  12:00a
    TRACEFMT EXE     64432  12-15-87  12:00a
    TREE     COM     28928  12-15-87  12:00a
    XCOPY    EXE     41168  12-15-87  12:00a
           38 file(s)    1162678 bytes
                          284672 bytes free

### Directory of MS OS/2 SDK 1.02 (TOOLKIT1)

     Volume in drive A is OS2TOOLKIT1
     Directory of A:\

    DEMOS        <DIR>      12-15-87  12:00a
    OS2DOC       <DIR>      12-15-87  12:00a
    PROFILER     <DIR>      12-15-87  12:00a
    TOOLKIT1 CTL*        7  12-16-87  11:10a
            4 file(s)          7 bytes

     Directory of A:\DEMOS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    EXAMPLES     <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\DEMOS\EXAMPLES

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    ALLOC        <DIR>      12-15-87  12:00a
    ARGUMENT     <DIR>      12-15-87  12:00a
    ASMEXMPL     <DIR>      12-15-87  12:00a
    ASYNCIO      <DIR>      12-15-87  12:00a
    BEEPC        <DIR>      12-15-87  12:00a
    CONFIG       <DIR>      12-15-87  12:00a
    COUNTRY      <DIR>      12-15-87  12:00a
    CRITSEC      <DIR>      12-15-87  12:00a
    CSALIAS      <DIR>      12-15-87  12:00a
    CWAIT        <DIR>      12-15-87  12:00a
    DATETIME     <DIR>      12-15-87  12:00a
    DOSEXIT      <DIR>      12-15-87  12:00a
    DYNLINK      <DIR>      12-15-87  12:00a
    EXITLIST     <DIR>      12-15-87  12:00a
    FSINFO       <DIR>      12-15-87  12:00a
    GETENV       <DIR>      12-15-87  12:00a
    DO       BAT        36  12-15-87  12:00a
    DO       CMD        19  12-15-87  12:00a
    MAKEALL  BAT      1666  12-15-87  12:00a
    MAKEALL  CMD      1666  12-15-87  12:00a
    README            2484  12-15-87  12:00a
           23 file(s)       5871 bytes

     Directory of A:\DEMOS\EXAMPLES\ALLOC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    ALLOC              199  12-15-87  12:00a
    ALLOC    C        1826  12-15-87  12:00a
    ALLOC    EXE     19100  12-15-87  12:00a
            5 file(s)      21125 bytes

     Directory of A:\DEMOS\EXAMPLES\ARGUMENT

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    ARGUMENT           164  12-15-87  12:00a
    ARGUMENT C        2826  12-15-87  12:00a
    ARGUMENT EXE      8182  12-15-87  12:00a
            5 file(s)      11172 bytes

     Directory of A:\DEMOS\EXAMPLES\ASMEXMPL

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    ASMEXMPL           211  12-15-87  12:00a
    ASMEXMPL ASM      3626  12-15-87  12:00a
    ASMEXMPL EXE      1273  12-15-87  12:00a
            5 file(s)       5110 bytes

     Directory of A:\DEMOS\EXAMPLES\ASYNCIO

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    ASYNCIO            149  12-15-87  12:00a
    ASYNCIO  C        1011  12-15-87  12:00a
    ASYNCIO  EXE      9396  12-15-87  12:00a
            5 file(s)      10556 bytes

     Directory of A:\DEMOS\EXAMPLES\BEEPC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BEEPC              192  12-15-87  12:00a
    BEEPC    C         548  12-15-87  12:00a
    BEEPC    EXE      9454  12-15-87  12:00a
            5 file(s)      10194 bytes

     Directory of A:\DEMOS\EXAMPLES\CONFIG

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CONFIG             198  12-15-87  12:00a
    CONFIG   C         812  12-15-87  12:00a
    CONFIG   EXE     19068  12-15-87  12:00a
            5 file(s)      20078 bytes

     Directory of A:\DEMOS\EXAMPLES\COUNTRY

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    COUNTRY            201  12-15-87  12:00a
    COUNTRY  C        1331  12-15-87  12:00a
    COUNTRY  EXE     19564  12-15-87  12:00a
            5 file(s)      21096 bytes

     Directory of A:\DEMOS\EXAMPLES\CRITSEC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CRITSEC            110  12-15-87  12:00a
    CRITSEC  C        2593  12-15-87  12:00a
    CRITSEC  EXE      8158  12-15-87  12:00a
            5 file(s)      10861 bytes

     Directory of A:\DEMOS\EXAMPLES\CSALIAS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CSALIAS            204  12-15-87  12:00a
    CSALIAS  C        2646  12-15-87  12:00a
    CSALIAS  EXE     19072  12-15-87  12:00a
            5 file(s)      21922 bytes

     Directory of A:\DEMOS\EXAMPLES\CWAIT

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CHILD    C         360  12-15-87  12:00a
    CHILD    EXE      9388  12-15-87  12:00a
    CWAIT              240  12-15-87  12:00a
    CWAIT    C        2494  12-15-87  12:00a
    CWAIT    EXE      9574  12-15-87  12:00a
            7 file(s)      22056 bytes

     Directory of A:\DEMOS\EXAMPLES\DATETIME

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DATETIME           206  12-15-87  12:00a
    DATETIME C        1934  12-15-87  12:00a
    DATETIME EXE     19690  12-15-87  12:00a
            5 file(s)      21830 bytes

     Directory of A:\DEMOS\EXAMPLES\DOSEXIT

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DOSEXIT            153  12-15-87  12:00a
    DOSEXIT  C        2141  12-15-87  12:00a
    DOSEXIT  EXE      9996  12-15-87  12:00a
            5 file(s)      12290 bytes

     Directory of A:\DEMOS\EXAMPLES\DYNLINK

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    FAR          <DIR>      12-15-87  12:00a
    NEAR         <DIR>      12-15-87  12:00a
    DYNCVP   CMD        35  12-15-87  12:00a
    DYNDEMO2 EXE      5098  12-15-87  12:00a
    DYNGO    CMD       151  12-15-87  12:00a
    DYNINIT  ASM       424  12-15-87  12:00a
    DYNLIB   C        1986  12-15-87  12:00a
    DYNLIB   DEF      2204  12-15-87  12:00a
    DYNLIB   H         144  12-15-87  12:00a
    DYNLIB2  C        1242  12-15-87  12:00a
    DYNLIB3  ASM      6648  12-15-87  12:00a
    DYNLINK           2400  12-15-87  12:00a
    DYNLINK  CMD       660  12-15-87  12:00a
    DYNLINK  DEF       181  12-15-87  12:00a
    DYNLINK1 C         520  12-15-87  12:00a
    DYNLINK2 C        1541  12-15-87  12:00a
    README            3956  12-15-87  12:00a
           19 file(s)      27190 bytes

     Directory of A:\DEMOS\EXAMPLES\DYNLINK\FAR

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DYNLIB   C        1412  12-15-87  12:00a
    DYNLIB2  C        1253  12-15-87  12:00a
            4 file(s)       2665 bytes

     Directory of A:\DEMOS\EXAMPLES\DYNLINK\NEAR

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DYNLIB   C        1699  12-15-87  12:00a
    DYNLIB2  C        1242  12-15-87  12:00a
            4 file(s)       2941 bytes

     Directory of A:\DEMOS\EXAMPLES\EXITLIST

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    EXITLIST           154  12-15-87  12:00a
    EXITLIST C        2095  12-15-87  12:00a
    EXITLIST EXE      9402  12-15-87  12:00a
            5 file(s)      11651 bytes

     Directory of A:\DEMOS\EXAMPLES\FSINFO

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    FSINFO             198  12-15-87  12:00a
    FSINFO   C        3632  12-15-87  12:00a
    FSINFO   EXE     17624  12-15-87  12:00a
            5 file(s)      21454 bytes

     Directory of A:\DEMOS\EXAMPLES\GETENV

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    GETENV             194  12-15-87  12:00a
    GETENV   C        1037  12-15-87  12:00a
    GETENV   EXE     19062  12-15-87  12:00a
            5 file(s)      20293 bytes

     Directory of A:\OS2DOC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    INPUT    EXE     13062  12-15-87  12:00a
    INSTSDK  BAT      4729  12-15-87  12:00a
    INSTSDK  CMD      3824  12-15-87  12:00a
    READ     ME!      7527  12-15-87  12:00a
            6 file(s)      29142 bytes

     Directory of A:\PROFILER

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    EXAMPLE      <DIR>      12-15-87  12:00a
    OS2DOSP  COM    265006  12-15-87  12:00a
    PROFILE  DLL      1050  12-15-87  12:00a
    PROFILE  DOC      5750  12-15-87  12:00a
    PROFILE  H         540  12-15-87  12:00a
    PROFILE  LIB      1024  12-15-87  12:00a
            8 file(s)     273370 bytes

     Directory of A:\PROFILER\EXAMPLE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    TESTPROF C        1051  12-15-87  12:00a
    TESTPROF DEF        59  12-15-87  12:00a
    TESTPROF LRF       120  12-15-87  12:00a
    TESTPROF MAK       518  12-15-87  12:00a
            6 file(s)       1748 bytes

    Total files listed:
          154 file(s)     584622 bytes
                           69632 bytes free

### Directory of MS OS/2 SDK 1.02 (TOOLKIT2)

     Volume in drive A is OS2TOOLKIT2
     Directory of A:\

    DEMOS        <DIR>      12-15-87  12:00a
    LIB          <DIR>      12-15-87  12:00a
    TOOLKIT2 CTL*        7  12-11-87   3:30p
            3 file(s)          7 bytes

     Directory of A:\DEMOS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    EXAMPLES     <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\DEMOS\EXAMPLES

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    HELLO        <DIR>      12-15-87  12:00a
    HUGE         <DIR>      12-15-87  12:00a
    INFOSEG      <DIR>      12-15-87  12:00a
    IOPL         <DIR>      12-15-87  12:00a
    KEYS         <DIR>      12-15-87  12:00a
    KILL         <DIR>      12-15-87  12:00a
    MACHMODE     <DIR>      12-15-87  12:00a
    MONITORS     <DIR>      12-15-87  12:00a
    MOVE         <DIR>      12-15-87  12:00a
    PIPES        <DIR>      12-15-87  12:00a
    QHTYPE       <DIR>      12-15-87  12:00a
    QUEUES       <DIR>      12-15-87  12:00a
    REALLOC      <DIR>      12-15-87  12:00a
    SESSION      <DIR>      12-15-87  12:00a
    SETMAXFH     <DIR>      12-15-87  12:00a
    SETVEC       <DIR>      12-15-87  12:00a
    SHARE        <DIR>      12-15-87  12:00a
    SIGNAL       <DIR>      12-15-87  12:00a
    SLEEP        <DIR>      12-15-87  12:00a
    SUBALLOC     <DIR>      12-15-87  12:00a
    SUSPEND      <DIR>      12-15-87  12:00a
    THREADS      <DIR>      12-15-87  12:00a
    TIMER        <DIR>      12-15-87  12:00a
    VERSION      <DIR>      12-15-87  12:00a
           26 file(s)          0 bytes

     Directory of A:\DEMOS\EXAMPLES\HELLO

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    HELLO              173  12-15-87  12:00a
    HELLO    C          66  12-15-87  12:00a
    HELLO    EXE     14174  12-15-87  12:00a
            5 file(s)      14413 bytes

     Directory of A:\DEMOS\EXAMPLES\HUGE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    HUGE               186  12-15-87  12:00a
    HUGE     C        2348  12-15-87  12:00a
    HUGE     EXE     16044  12-15-87  12:00a
            5 file(s)      18578 bytes

     Directory of A:\DEMOS\EXAMPLES\INFOSEG

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    INFOSEG            149  12-15-87  12:00a
    INFOSEG  C        2182  12-15-87  12:00a
    INFOSEG  EXE      9408  12-15-87  12:00a
            5 file(s)      11739 bytes

     Directory of A:\DEMOS\EXAMPLES\IOPL

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    IOPL               354  12-15-87  12:00a
    IOPL     DEF        60  12-15-87  12:00a
    IOPL     EXE      8584  12-15-87  12:00a
    IOPLMAIN C         633  12-15-87  12:00a
    IOPLSUB  ASM      3087  12-15-87  12:00a
            7 file(s)      12718 bytes

     Directory of A:\DEMOS\EXAMPLES\KEYS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    KEYS               194  12-15-87  12:00a
    KEYS     C         923  12-15-87  12:00a
    KEYS     EXE     14724  12-15-87  12:00a
            5 file(s)      15841 bytes

     Directory of A:\DEMOS\EXAMPLES\KILL

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    KILL               134  12-15-87  12:00a
    KILL     C        1815  12-15-87  12:00a
    KILL     EXE      9878  12-15-87  12:00a
            5 file(s)      11827 bytes

     Directory of A:\DEMOS\EXAMPLES\MACHMODE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    MACHMODE           210  12-15-87  12:00a
    MACHMODE C         373  12-15-87  12:00a
    MACHMODE EXE     19038  12-15-87  12:00a
            5 file(s)      19621 bytes

     Directory of A:\DEMOS\EXAMPLES\MONITORS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    MONITORS           166  12-15-87  12:00a
    MONITORS C        8845  12-15-87  12:00a
    MONITORS EXE     14059  12-15-87  12:00a
            5 file(s)      23070 bytes

     Directory of A:\DEMOS\EXAMPLES\MOVE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    MOVE               182  12-15-87  12:00a
    MOVE     C        1345  12-15-87  12:00a
    MOVE     EXE     20596  12-15-87  12:00a
            5 file(s)      22123 bytes

     Directory of A:\DEMOS\EXAMPLES\PIPES

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    PC       C         371  12-15-87  12:00a
    PC       EXE      8292  12-15-87  12:00a
    PCHILD   C        2004  12-15-87  12:00a
    PCHILD   EXE      8320  12-15-87  12:00a
    PIPES              359  12-15-87  12:00a
    PIPES    C        3210  12-15-87  12:00a
    PIPES    EXE      8354  12-15-87  12:00a
    PP       C        3812  12-15-87  12:00a
    PP       EXE      8140  12-15-87  12:00a
           11 file(s)      42862 bytes

     Directory of A:\DEMOS\EXAMPLES\QHTYPE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    QHTYPE             198  12-15-87  12:00a
    QHTYPE   C        2230  12-15-87  12:00a
    QHTYPE   EXE     19418  12-15-87  12:00a
            5 file(s)      21846 bytes

     Directory of A:\DEMOS\EXAMPLES\QUEUES

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CUST     C        4358  12-15-87  12:00a
    CUST     EXE      3360  12-15-87  12:00a
    DEFINES  H        1238  12-15-87  12:00a
    FIFOQUE  CMD        94  12-15-87  12:00a
    LIFOQUE  CMD        94  12-15-87  12:00a
    PRIOQUE  CMD        98  12-15-87  12:00a
    QUEUES             260  12-15-87  12:00a
    README            1553  12-15-87  12:00a
    SERV     C        4897  12-15-87  12:00a
    SERV     EXE     10232  12-15-87  12:00a
           12 file(s)      26184 bytes

     Directory of A:\DEMOS\EXAMPLES\REALLOC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    REALLOC            210  12-15-87  12:00a
    REALLOC  C         574  12-15-87  12:00a
    REALLOC  EXE      8942  12-15-87  12:00a
            5 file(s)       9726 bytes

     Directory of A:\DEMOS\EXAMPLES\SESSION

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SESSION            167  12-15-87  12:00a
    SESSION  C        3634  12-15-87  12:00a
    SESSION  EXE      9268  12-15-87  12:00a
            5 file(s)      13069 bytes

     Directory of A:\DEMOS\EXAMPLES\SETMAXFH

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SETMAXFH           154  12-15-87  12:00a
    SETMAXFH C        1314  12-15-87  12:00a
    SETMAXFH EXE      9914  12-15-87  12:00a
            5 file(s)      11382 bytes

     Directory of A:\DEMOS\EXAMPLES\SETVEC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SETVEC             202  12-15-87  12:00a
    SETVEC   C        2764  12-15-87  12:00a
    SETVEC   EXE     19016  12-15-87  12:00a
            5 file(s)      21982 bytes

     Directory of A:\DEMOS\EXAMPLES\SHARE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SHARE              211  12-15-87  12:00a
    SHARE    C        3461  12-15-87  12:00a
    SHARE    EXE      9980  12-15-87  12:00a
    SHARE    H        1069  12-15-87  12:00a
    SHRCHILD C        1376  12-15-87  12:00a
    SHRCHILD EXE      3334  12-15-87  12:00a
            8 file(s)      19431 bytes

     Directory of A:\DEMOS\EXAMPLES\SIGNAL

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SIGNAL             232  12-15-87  12:00a
    SIGNAL   C        2645  12-15-87  12:00a
    SIGNAL   EXE     19998  12-15-87  12:00a
            5 file(s)      22875 bytes

     Directory of A:\DEMOS\EXAMPLES\SLEEP

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SLEEP              192  12-15-87  12:00a
    SLEEP    C         901  12-15-87  12:00a
    SLEEP    EXE     19052  12-15-87  12:00a
            5 file(s)      20145 bytes

     Directory of A:\DEMOS\EXAMPLES\SUBALLOC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SUBALLOC           210  12-15-87  12:00a
    SUBALLOC C        2572  12-15-87  12:00a
    SUBALLOC EXE     19570  12-15-87  12:00a
            5 file(s)      22352 bytes

     Directory of A:\DEMOS\EXAMPLES\SUSPEND

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SUSPEND            153  12-15-87  12:00a
    SUSPEND  C        2084  12-15-87  12:00a
    SUSPEND  EXE      9946  12-15-87  12:00a
            5 file(s)      12183 bytes

     Directory of A:\DEMOS\EXAMPLES\THREADS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    THREADS            151  12-15-87  12:00a
    THREADS  C        5269  12-15-87  12:00a
    THREADS  EXE      9900  12-15-87  12:00a
            5 file(s)      15320 bytes

     Directory of A:\DEMOS\EXAMPLES\TIMER

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    TIMER              139  12-15-87  12:00a
    TIMER    C        2742  12-15-87  12:00a
    TIMER    EXE      3324  12-15-87  12:00a
            5 file(s)       6205 bytes

     Directory of A:\DEMOS\EXAMPLES\VERSION

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    VERSION            204  12-15-87  12:00a
    VERSION  C         589  12-15-87  12:00a
    VERSION  EXE     19018  12-15-87  12:00a
            5 file(s)      19811 bytes

     Directory of A:\LIB

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    API      LIB     81408  12-15-87  12:00a
    DOSCALLS LIB     29184  12-15-87  12:00a
            4 file(s)     110592 bytes

    Total files listed:
          174 file(s)     545902 bytes
                           97280 bytes free

### Directory of MS OS/2 SDK 1.02 (UTILITY1)

     Volume in drive A is OS2UTILITY1
     Directory of A:\

    INIT         <DIR>      12-15-87  12:00a
    TOOLS        <DIR>      12-15-87  12:00a
    UTILITY1 CTL*        7  12-11-87   3:30p
            3 file(s)          7 bytes

     Directory of A:\INIT

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    AUTOEXEC BAT       561  12-15-87  12:00a
    TOOLS    INI      1711  12-15-87  12:00a
            4 file(s)       2272 bytes

     Directory of A:\TOOLS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIN          <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\TOOLS\BIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CHKCACHE EXE     25165  12-15-87  12:00a
    ECH      EXE     18342  12-15-87  12:00a
    EXEHDR   EXE     29504  12-15-87  12:00a
    EXP      EXE     31186  12-15-87  12:00a
    LIB      EXE     49034  12-15-87  12:00a
    LIBWHERE EXE     21962  12-15-87  12:00a
    LINK     EXE    109046  12-15-87  12:00a
    MAKE     EXE     38942  12-15-87  12:00a
    RM       EXE     24334  12-15-87  12:00a
    SDKED    EXE    177270  12-15-87  12:00a
    SDKGREP  EXE     30410  12-15-87  12:00a
    SHD      EXE     26710  12-15-87  12:00a
    UNDEL    EXE     29012  12-15-87  12:00a
    WHERE    EXE     33056  12-15-87  12:00a
           16 file(s)     643973 bytes

    Total files listed:
           26 file(s)     646252 bytes
                           71680 bytes free

### Directory of MS OS/2 SDK 1.02 (UTILITY2)

     Volume in drive A is OS2UTILITY2
     Directory of A:\

    TOOLS        <DIR>      12-15-87  12:00a
    UTILITY2 CTL*        7  12-11-87   3:30p
            2 file(s)          7 bytes

     Directory of A:\TOOLS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIN          <DIR>      12-15-87  12:00a
    PBIN         <DIR>      12-15-87  12:00a
            4 file(s)          0 bytes

     Directory of A:\TOOLS\BIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIND     EXE     36946  12-15-87  12:00a
    IMPLIB   EXE     28362  12-15-87  12:00a
    MKMSGF   EXE     27628  12-15-87  12:00a
    MSGBIND  EXE     28216  12-15-87  12:00a
            6 file(s)     121152 bytes

     Directory of A:\TOOLS\PBIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CVP      EXE    225661  12-15-87  12:00a
    CVP      HLP     18348  12-15-87  12:00a
    KBDP     EXE      6688  12-15-87  12:00a
    PINFO    EXE     33097  12-15-87  12:00a
    PS       EXE     40481  12-15-87  12:00a
    PSET     EXE      9100  12-15-87  12:00a
            8 file(s)     333375 bytes

    Total files listed:
           20 file(s)     454534 bytes
                          267264 bytes free

### Directory of MS OS/2 SDK 1.02 (CBIN1)

     Volume in drive A is OS2CBIN1
     Directory of A:\

    TOOLS        <DIR>      12-15-87  12:00a
    CBIN1    CTL*        7  12-11-87   3:29p
            2 file(s)          7 bytes

     Directory of A:\TOOLS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIN          <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\TOOLS\BIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    C1       EXE    124613  12-15-87  12:00a
    C1L      EXE    166009  12-15-87  12:00a
    C2       EXE    241466  12-15-87  12:00a
    CL       EXE     50039  12-15-87  12:00a
            6 file(s)     582127 bytes

    Total files listed:
           11 file(s)     582134 bytes
                          143360 bytes free

### Directory of MS OS/2 SDK 1.02 (CBIN2)

     Volume in drive A is OS2CBIN2
     Directory of A:\

    OS2DOC       <DIR>      12-15-87  12:00a
    STARTUP      <DIR>      12-15-87  12:00a
    TOOLS        <DIR>      12-15-87  12:00a
    CBIN2    CTL*        7  12-16-87  11:10a
            4 file(s)          7 bytes

     Directory of A:\OS2DOC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    C500     TXT     47528  12-15-87  12:00a
    DEVHLP   TXT      4926  12-15-87  12:00a
    ERRMSG   TXT     23627  12-15-87  12:00a
    FILELIST         16718  12-15-87  12:00a
    INPUT    EXE     13062  12-15-87  12:00a
    LIBWHERE TXT      1503  12-15-87  12:00a
    PROGSEL  TXT     12333  12-15-87  12:00a
    SHD      HLP      5748  12-15-87  12:00a
    UTILS    TXT      5503  12-15-87  12:00a
    WHERE    HLP      1378  12-15-87  12:00a
           12 file(s)     132326 bytes

     Directory of A:\STARTUP

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DOS          <DIR>      12-15-87  12:00a
    OS2          <DIR>      12-15-87  12:00a
    BRKCTL   INC       779  12-15-87  12:00a
    CHKSTK   ASM      2036  12-15-87  12:00a
    CHKSUM   ASM      3506  12-15-87  12:00a
    CMACROS  INC     12061  12-15-87  12:00a
    CRT0FP   ASM      2207  12-15-87  12:00a
    DOSSEG   EXE     19929  12-15-87  12:00a
    FMSGHDR  ASM      2417  12-15-87  12:00a
    MAKEFILE          3893  12-15-87  12:00a
    MSDOS    H        6845  12-15-87  12:00a
    MSDOS    INC      6087  12-15-87  12:00a
    NULBODY  C          13  12-15-87  12:00a
    README   DOC      3188  12-15-87  12:00a
    REGISTER H         922  12-15-87  12:00a
    SETARGV  ASM       959  12-15-87  12:00a
    STARTUP  BAT      1663  12-15-87  12:00a
    VERSION  INC       498  12-15-87  12:00a
    WILD     C        7182  12-15-87  12:00a
           21 file(s)      74185 bytes

     Directory of A:\STARTUP\DOS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CRT0     ASM     14465  12-15-87  12:00a
    CRT0DAT  ASM     21555  12-15-87  12:00a
    CRT0MSG  ASM      3131  12-15-87  12:00a
    EXECMSG  ASM      1332  12-15-87  12:00a
    NMSGHDR  ASM      5132  12-15-87  12:00a
    NULBODY  LNK       145  12-15-87  12:00a
    STDALLOC ASM      3336  12-15-87  12:00a
    STDARGV  ASM     14604  12-15-87  12:00a
    STDENVP  ASM      3692  12-15-87  12:00a
           11 file(s)      67392 bytes

     Directory of A:\STARTUP\OS2

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CRT0     ASM     10317  12-15-87  12:00a
    CRT0DAT  ASM      9910  12-15-87  12:00a
    CRT0MSG  ASM      2061  12-15-87  12:00a
    EXECMSG  ASM      2203  12-15-87  12:00a
    NMSGHDR  ASM      3475  12-15-87  12:00a
    NULBODY  LNK       164  12-15-87  12:00a
    STDALLOC ASM      3234  12-15-87  12:00a
    STDARGV  ASM     13612  12-15-87  12:00a
    STDENVP  ASM      5316  12-15-87  12:00a
           11 file(s)      50292 bytes

     Directory of A:\TOOLS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIN          <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\TOOLS\BIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    C1       ERR     14756  12-15-87  12:00a
    C23      ERR      3093  12-15-87  12:00a
    C3       EXE    144764  12-15-87  12:00a
    CL       ERR      2159  12-15-87  12:00a
    CL       HLP      1990  12-15-87  12:00a
    LIBBUILD EXE     33152  12-15-87  12:00a
            8 file(s)     199914 bytes

    Total files listed:
           70 file(s)     524116 bytes
                          166912 bytes free

### Directory of MS OS/2 SDK 1.02 (CLIB1)

     Volume in drive A is OS2CLIB1
     Directory of A:\

    INCLUDE      <DIR>      12-15-87  12:00a
    LIB          <DIR>      12-15-87  12:00a
    CLIB1    CTL*        7  12-11-87   3:30p
            3 file(s)          7 bytes

     Directory of A:\INCLUDE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SYS          <DIR>      12-15-87  12:00a
    ASSERT   H         670  12-15-87  12:00a
    BIOS     H        4857  12-15-87  12:00a
    CONIO    H         950  12-15-87  12:00a
    CTYPE    H        2469  12-15-87  12:00a
    DIRECT   H         690  12-15-87  12:00a
    DOS      H        5917  12-15-87  12:00a
    ERRNO    H        1283  12-15-87  12:00a
    FCNTL    H        1255  12-15-87  12:00a
    FLOAT    H        6011  12-15-87  12:00a
    GRAPH    H        7294  12-15-87  12:00a
    IO       H        1296  12-15-87  12:00a
    LIMITS   H        1553  12-15-87  12:00a
    MALLOC   H        3099  12-15-87  12:00a
    MATH     H        3308  12-15-87  12:00a
    MEMORY   H        1065  12-15-87  12:00a
    PROCESS  H        1976  12-15-87  12:00a
    SEARCH   H        1024  12-15-87  12:00a
    SETJMP   H         905  12-15-87  12:00a
    SHARE    H         554  12-15-87  12:00a
    SIGNAL   H        1913  12-15-87  12:00a
    STDARG   H         613  12-15-87  12:00a
    STDDEF   H        1098  12-15-87  12:00a
    STDIO    H        4470  12-15-87  12:00a
    STDLIB   H        4837  12-15-87  12:00a
    STRING   H        2209  12-15-87  12:00a
    TIME     H        2342  12-15-87  12:00a
    VARARGS  H         641  12-15-87  12:00a
           30 file(s)      64299 bytes

     Directory of A:\INCLUDE\SYS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    LOCKING  H         573  12-15-87  12:00a
    STAT     H        1497  12-15-87  12:00a
    TIMEB    H         846  12-15-87  12:00a
    TYPES    H         849  12-15-87  12:00a
    UTIME    H        1061  12-15-87  12:00a
            7 file(s)       4826 bytes

     Directory of A:\LIB

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    87       LIB      4121  12-15-87  12:00a
    BINMODE  OBJ       122  12-15-87  12:00a
    CLIBCP   LIB     34397  12-15-87  12:00a
    CLIBFA   LIB     47625  12-15-87  12:00a
    CLIBFP   LIB     38309  12-15-87  12:00a
    CVARSTCK OBJ       476  12-15-87  12:00a
    EM       LIB     16921  12-15-87  12:00a
    EM       MAP       429  12-15-87  12:00a
    EMOEM    ASM     12125  12-15-87  12:00a
    LIBH     LIB     13673  12-15-87  12:00a
    LLIBCP   LIB     34909  12-15-87  12:00a
    LLIBFA   LIB     48649  12-15-87  12:00a
    LLIBFP   LIB     39845  12-15-87  12:00a
    LVARSTCK OBJ       476  12-15-87  12:00a
    MLIBCP   LIB     33373  12-15-87  12:00a
    MLIBFA   LIB     47625  12-15-87  12:00a
    MLIBFP   LIB     38307  12-15-87  12:00a
    MVARSTCK OBJ       508  12-15-87  12:00a
    SETARGV  OBJ       132  12-15-87  12:00a
    SLIBCP   LIB     33373  12-15-87  12:00a
    SLIBFA   LIB     46601  12-15-87  12:00a
    SLIBFP   LIB     37795  12-15-87  12:00a
    SVARSTCK OBJ       508  12-15-87  12:00a
           25 file(s)     530299 bytes

    Total files listed:
           65 file(s)     599431 bytes
                           98304 bytes free

### Directory of MS OS/2 SDK 1.02 (CLIB2)

     Volume in drive A is OS2CLIB2
     Directory of A:\

    LIB          <DIR>      12-15-87  12:00a
    CLIB2    CTL*        7  12-11-87   3:30p
            2 file(s)          7 bytes

     Directory of A:\LIB

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CLIBC    LIB     94271  12-15-87  12:00a
    CLIBC3   LIB     46957  12-15-87  12:00a
    LLIBC    LIB     95295  12-15-87  12:00a
    LLIBC3   LIB     47469  12-15-87  12:00a
    MLIBC    LIB     87099  12-15-87  12:00a
    MLIBC3   LIB     45933  12-15-87  12:00a
    SLIBC    LIB     86075  12-15-87  12:00a
    SLIBC3   LIB     45421  12-15-87  12:00a
           10 file(s)     548520 bytes

    Total files listed:
           12 file(s)     548527 bytes
                          174080 bytes free

### Directory of MS OS/2 SDK 1.02 (MASM)

     Volume in drive A is OS2MASM
     Directory of A:\

    OS2DOC       <DIR>      12-15-87  12:00a
    TOOLS        <DIR>      12-15-87  12:00a
    MASM     CTL*        7  12-11-87   3:30p
            3 file(s)          7 bytes

     Directory of A:\OS2DOC

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    MASM     TXT     11977  12-15-87  12:00a
    MASM500  TXT     16004  12-15-87  12:00a
            4 file(s)      27981 bytes

     Directory of A:\TOOLS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIN          <DIR>      12-15-87  12:00a
    RBIN         <DIR>      12-15-87  12:00a
            4 file(s)          0 bytes

     Directory of A:\TOOLS\BIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CREF     EXE     28434  12-15-87  12:00a
    MASM     EXE    118777  12-15-87  12:00a
            4 file(s)     147211 bytes

     Directory of A:\TOOLS\RBIN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CV       EXE    220066  12-15-87  12:00a
    CV       HLP     18348  12-15-87  12:00a
            4 file(s)     238414 bytes

    Total files listed:
           19 file(s)     413613 bytes
                          310272 bytes free

### Directory of MS OS/2 SDK 1.02 (EXAMPLE1)

     Volume in drive A is OS2EXAMPLE1
     Directory of A:\

    DEMOS        <DIR>      12-15-87  12:00a
    EXAMPLE1 CTL*        7  12-11-87   3:30p
            2 file(s)          7 bytes

     Directory of A:\DEMOS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    APPS         <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\DEMOS\APPS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIGBEN       <DIR>      12-15-87  12:00a
    CHASER       <DIR>      12-15-87  12:00a
    CPGREP       <DIR>      12-15-87  12:00a
    DS           <DIR>      12-15-87  12:00a
    FILELIST     <DIR>      12-15-87  12:00a
    LIFE         <DIR>      12-15-87  12:00a
    SETEGA       <DIR>      12-15-87  12:00a
    TERMINAL     <DIR>      12-15-87  12:00a
    WAKEUP       <DIR>      12-15-87  12:00a
    MAKEALL  BAT       495  12-15-87  12:00a
    MAKEALL  CMD       495  12-15-87  12:00a
           13 file(s)        990 bytes

     Directory of A:\DEMOS\APPS\BIGBEN

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    BIGBEN             239  12-15-87  12:00a
    BIGBEN   C        2983  12-15-87  12:00a
    BIGBEN   DEF        81  12-15-87  12:00a
    BIGBEN   EXE     45598  12-15-87  12:00a
            6 file(s)      48901 bytes

     Directory of A:\DEMOS\APPS\CHASER

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CHASER             188  12-15-87  12:00a
    CHASER   C       14285  12-15-87  12:00a
    CHASER   EXE      9676  12-15-87  12:00a
            5 file(s)      24149 bytes

     Directory of A:\DEMOS\APPS\CPGREP

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CPGREP             542  12-15-87  12:00a
    CPGREP   C       30035  12-15-87  12:00a
    CPGREP   DEF        29  12-15-87  12:00a
    CPGREP   EXE     27330  12-15-87  12:00a
    CPGREP   HLP      1633  12-15-87  12:00a
    CPGREPSB ASM     15249  12-15-87  12:00a
    STUBS    ASM       386  12-15-87  12:00a
            9 file(s)      75204 bytes

     Directory of A:\DEMOS\APPS\DS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DISPLAY  C        7510  12-15-87  12:00a
    DS                 497  12-15-87  12:00a
    DS       C        2371  12-15-87  12:00a
    DS       EXE     22892  12-15-87  12:00a
    DS       H        3373  12-15-87  12:00a
    FILE     C        5847  12-15-87  12:00a
    HELP     C        1856  12-15-87  12:00a
    OPTION   C        8060  12-15-87  12:00a
    TREE     C        9384  12-15-87  12:00a
    VARS     C         767  12-15-87  12:00a
    VARS     H         868  12-15-87  12:00a
           13 file(s)      63425 bytes

     Directory of A:\DEMOS\APPS\FILELIST

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    FILELIST           401  12-15-87  12:00a
    FILELIST C        5031  12-15-87  12:00a
    FILELIST EXE     15884  12-15-87  12:00a
            5 file(s)      21316 bytes

     Directory of A:\DEMOS\APPS\LIFE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    ACORN    LIF       458  12-15-87  12:00a
    GUN      LIF       458  12-15-87  12:00a
    INT33H   ASM      1132  12-15-87  12:00a
    LIFE               525  12-15-87  12:00a
    LIFE     C       38321  12-15-87  12:00a
    LIFE     EXE     48964  12-15-87  12:00a
    LIFE2    ASM     10745  12-15-87  12:00a
    MOUAPI   C        4020  12-15-87  12:00a
    R        LIF       458  12-15-87  12:00a
    READ     ME       3181  12-15-87  12:00a
    SPIRAL   LIF       458  12-15-87  12:00a
           13 file(s)     108720 bytes

     Directory of A:\DEMOS\APPS\SETEGA

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    SETEGA             211  12-15-87  12:00a
    SETEGA   C        3764  12-15-87  12:00a
    SETEGA   EXE     36708  12-15-87  12:00a
            5 file(s)      40683 bytes

     Directory of A:\DEMOS\APPS\TERMINAL

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    MODEM    C       11841  12-15-87  12:00a
    OPTIONS  C       26724  12-15-87  12:00a
    README             299  12-15-87  12:00a
    TERM     H        6725  12-15-87  12:00a
    TERMINAL           460  12-15-87  12:00a
    TERMINAL C       15901  12-15-87  12:00a
    TERMINAL DEF        22  12-15-87  12:00a
    TERMINAL EXE     19896  12-15-87  12:00a
    TERMINAL INI        88  12-15-87  12:00a
           11 file(s)      81956 bytes

     Directory of A:\DEMOS\APPS\WAKEUP

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    WAKEUP             126  12-15-87  12:00a
    WAKEUP   C        2460  12-15-87  12:00a
    WAKEUP   DEF       256  12-15-87  12:00a
    WAKEUP   EXE      7108  12-15-87  12:00a
            6 file(s)       9950 bytes

    Total files listed:
           91 file(s)     475301 bytes
                          211968 bytes free

### Directory of MS OS/2 SDK 1.02 (EXAMPLE2)

     Volume in drive A is OS2EXAMPLE2
     Directory of A:\

    DEMOS        <DIR>      12-15-87  12:00a
    INCLUDE      <DIR>      12-15-87  12:00a
    EXAMPLE2 CTL*        7  12-11-87   3:30p
            3 file(s)          7 bytes

     Directory of A:\DEMOS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    APPS         <DIR>      12-15-87  12:00a
            3 file(s)          0 bytes

     Directory of A:\DEMOS\APPS

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    MANDEL       <DIR>      12-15-87  12:00a
    SSE          <DIR>      12-15-87  12:00a
            4 file(s)          0 bytes

     Directory of A:\DEMOS\APPS\MANDEL

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    CD14     CNT    188860  12-15-87  12:00a
    CMACROS  INC     12120  12-15-87  12:00a
    EGA      INC      4554  12-15-87  12:00a
    M        CMD       160  12-15-87  12:00a
    MANDEL             923  12-15-87  12:00a
    MANDEL   C       10254  12-15-87  12:00a
    MANDEL   EXE     34517  12-15-87  12:00a
    MANDITER ASM     15024  12-15-87  12:00a
    MDRAW    C       24749  12-15-87  12:00a
    MDRAW    DEF       302  12-15-87  12:00a
    MDRAW    EXE     26570  12-15-87  12:00a
    MDRAW    H        3251  12-15-87  12:00a
    MSTAT    C        4751  12-15-87  12:00a
    MSTAT    EXE     29717  12-15-87  12:00a
    README            4027  12-15-87  12:00a
    SETSCAN  ASM     15438  12-15-87  12:00a
           18 file(s)     375217 bytes

     Directory of A:\DEMOS\APPS\SSE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DISPATCH C       24057  12-15-87  12:00a
    KEYDEFS  H        1011  12-15-87  12:00a
    KEYFUNC1 C       12960  12-15-87  12:00a
    KEYFUNCS C       45651  12-15-87  12:00a
    README             390  12-15-87  12:00a
    SSE                734  12-15-87  12:00a
    SSE      C        4584  12-15-87  12:00a
    SSE      EXE     45340  12-15-87  12:00a
    SSEDEFS  H        2541  12-15-87  12:00a
    SSEFILE  C       11121  12-15-87  12:00a
    SSELINE  C        5981  12-15-87  12:00a
    SSEMEM   C        1227  12-15-87  12:00a
           14 file(s)     155597 bytes

     Directory of A:\INCLUDE

    .            <DIR>      12-15-87  12:00a
    ..           <DIR>      12-15-87  12:00a
    DOSCALLS H       16455  12-15-87  12:00a
    ERROR    H       16329  12-15-87  12:00a
    ERROR    INC     16942  12-15-87  12:00a
    ERROR2   H       20338  12-15-87  12:00a
    ERROR2   INC     18933  12-15-87  12:00a
    INFOSEG  H        2965  12-15-87  12:00a
    NEWEXE   H       16878  12-15-87  12:00a
    PTRACE   H        1098  12-15-87  12:00a
    SUBCALLS H       11896  12-15-87  12:00a
           11 file(s)     121834 bytes

    Total files listed:
           53 file(s)     652655 bytes
                           53248 bytes free

### Directory of MS OS/2 SDK 1.02 (NETWORK)

     Volume in drive A is MSOS2NET
     Directory of A:\

    NETWORK  CTL*        7  12-21-15   4:19p
            1 file(s)          7 bytes
                          361472 bytes free

### Using SDKED

**SDK Editor** (SDKED) was essentially an OS/2 port of Mark Zbikowski's Editor (Z) that was used internally
at Microsoft for many years.  It was renamed to the **Microsoft Editor** (M or MEP) with the release of Microsoft C
5.1, and it was later integrated into **Programmer's Workbench** (PWB), the text-mode Integrated Development
Environment (IDE) that came with Microsoft C 6.0.

While we don't have the SDK documentation, we *have* unearthed a copy of the
"[User's Guide to the Z Editor](/software/pcx86/util/microsoft/misc/Z.TXT)" by Mark Zbikowski, August 4, 1986,
included below.








                                          .

       

       

       

       

       

                             User's Guide to the Z Editor

                                    Mark Zbikowski

                                    4 August 1986


















































                                  Table of Contents

       
       Starting Z..................................................... 1
       Editing Functions.............................................. 4
       Editing Switches and Flags.................................... 15
       Keystroke Macros.............................................. 17
       Index......................................................... 21
       Revision History.............................................. 23

       


















































       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM




                                What is the Z editor?

       Z is an editor, a program for creating and altering files.

       The editor creates the file specified or copies an existing file from
       disk into memory.  Then when the file is "saved", the copy in Z
       overwrites the copy on disk. The copy that was overlayed may be
       retrieved with the UNDEL command (see UNDEL.HLP and also the "backup"
       switch below).

       Z makes your screen into a window on the file you are editing.  The
       window can move forwards or backwards to any point in the file.  The
       cursor identifies the focus of each edit operation.

       The simplest editing operation is to move the cursor to the place you
       want to change and start typing characters.  What you type is stored in
       the corresponding location in the copy of the file in Z.  If you are in
       INSERT mode, then the characters you type are inserted at the cursor
       location instead of overwriting what is already there.

       The editor interprets ASCII control characters and some ASCII character
       sequences as commands.  Each control character has an editing command
       associated with it. You can change the association between editor
       commands and control characters or character sequences with the <switch>
       command.


                                      Starting Z

       Z uses several environment variables during its start-up.  First, Z
       looks for a file called TOOLS.INI by searching all the directories
       contained in the USER environment variable.  Contained in this TOOLS.INI
       file are any customizations you wish to make to the editor function
       assignments and editor switch settings. This file is optional.  Starting
       Z with the /D switch prevents TOOLS.INI from being read.

       Z uses a scratch file during it execution.  Normally, this file (Z.VM)
       is created in the root directory on the default drive when Z is started.
       If you want this file to be created elsewhere, for example on a ram-
       drive, you may use the TMP environment variable to direct Z to place it
       elsewhere.  The TMP variable is also used to locate other temporary
       files that Z uses.

       The TOOLS.INI file is used to maintain configuration information.  The
       files are divided into sections by tags which are the name of a tool
       surrounded by square brackets.  In the case of the Z editor, the
       following tags are used:

         [z]     following this tag should be general Z initialization

         [z-x.y] following this tag should be Z initialization peculiar to a
                 particular version of MSDOS.









       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       For a sample of user initialization, see the TOOLS.INI file.

       The definitions in these files have one of several forms.  Below are the
       forms and a description of each.

         NAME=xx yy zz...

       This assignment directs Z to view the sequence of characters xx yy zz
       ... (in hexadecimal) as a single keystroke.  This is often used for
       naming function keys on your terminal.

         NAME="chars"

       Similar to the previous form except that the characters are named
       explicitly. Quotes may be preceded with the "\" character to allow you
       to enter them directly.

         function:=function1 function2...

       Defines a new function in terms of existing functions.  This is called a
       MACRO. When the new function is executed by Z, each function contained
       in the definition is executed in order.  Further information is
       contained in the Keyboard Macros section below.

         function:keys

       Causes Z to execute the named function when the specified keys are read
       from the keyboard.  The keys are either a key name as defined above or a
       sequence of characters to be used.  Note that ^X in such a sequence
       stands for CONTROL-X rather than up-arrow-X.  You may have several keys
       or key sequences assigned to a particular editing function, but you may
       have ONLY one function on a key or sequence.  A description of the
       available editing functions is below.

         switch:value

       Set a particular configuration switch in Z to a value.  See the
       "switches and flags" section below for more information.

       Anyway, when Z is through initializing, it attempts to read the file
       specified on the command line.  If Z was invoked without an argument, it
       will attempt to read in the most recently edited file.

       When the file has been read in, Z will display the file on the top 23
       lines of the screen.  The bottom two lines are used as follows:

            The 24th line is used as a dialog line.  Prompts and messages
            appear on this line.

            The 25th line is used as a status line.  The information that
            appears is (from left-to-right):

            filename of file being edited 
            type of file (a guess based on the extension)     



                                        - 2 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


            the word modified, if you have changed the file   
            the length in lines of the file    
            the position in (row, column) form of the upper-left corner of the
            screen relative to the first byte of the file.  (1,1) is the top of
            the file

       Now for the interesting part.  Normally, when a key sequence is
       recognized by Z as being attached to an editing function, Z will execute
       that function.

       Most functions have a 'default' action which is unchangeable.  You may
       change this action by preceding the editing function with an argument
       and/or a mode- function modifier.

       Arguments are introduced by the <arg> editor function.  When you enter
       the <arg> function, Z will reverse the video at the current cursor
       position. You may then enter the argument as follows:

         A sequence of cursor movements:

            If the cursor ends up on top of the <arg> then the argument is
                 called a nullarg and represents either the remainder of the
                 line up to (and possibly including the line break) or
                 represents the next space-terminated word on the line
                 depending on the editing function.

            If the cursor ends up on the same line but on a different column,
                 the argument is called a streamarg and represents all text
                 from the leftmost of the <arg> and cursor up to one character
                 position to the left of the rightmost of the <arg> and cursor.

            If the cursor ends up in the same column as the <arg> then the
                 argument is called a linearg and represents the range of lines
                 beginning with the line that contains the <arg> up to and
                 including the line that contains the cursor.

            If the cursor ends up on a different line and column from the
                 <arg>, the arg is known as a boxarg and may represent either a
                 rectangle of text whose diagonal is delimited by the <arg> and
                 cursor or the sequence of characters beginning at the
                 uppermost of <arg> and cursor through the bottommost of <arg>
                 and cursor including the line breaks.  This distinction is
                 made by the editing function itself.

         You may also type normal characters.  You are prompted, on the dialog
         line, to enter an argument.  The types of textual arguments are:

            ASCII text.  This is called a textarg.  The argument to the
                 function is merely the text you have typed.

            A number.  This is called a numarg and is the same as if you had
                 moved the cursor either upward or downward the specified
                 number of lines.




                                        - 3 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


            A bookmark.  This is called a markarg.  This is the same as if you
                 had moved the cursor to the bookmark position.  To define a
                 bookmark, see the <mark> command.

       The only mode-command modifier at the present is the <meta> command.
       Its effect on each function is described in that function's description.


                                  Editing Functions

       Here is the current set of Z functions with a description of the allowed
       arguments and a description of how they affect the command's operation.
       Also, in each function description is the default assignment.

       <arg> (^X) introduces an argument to modify a subsequent operation.  To
         cancel an  <arg>, enter the <cancel> command.  There are no modifiers
         or arguments allowed for this command.

       <assign> (^^) makes a Z configuration change.  An argument MUST be
         specified and be of the form described for TOOLS.INI above:

         <arg>linearg<assign> treats each line as a separate assignment or key
            definition.

         <arg>textarg<assign> treats textarg as an assignment or a key
            definition.

         <arg>nullarg<assign> treats the remainder of the line to the right of
            the cursor but not including the line break as an assignment or a
            key definition.

         <arg>streamarg<assign> treats the outlined text as an assignment or a
            key definition.

         The special case of <arg>?<assign> displays all the current keyboard
         assignments.

       <backtab> (SHIFT-TAB) is a cursor movement function.  It will move the
         cursor leftward to the next tabstop.  Tabstops are defined to be every
         nth character where n is settable by the tabstops editor switch.
         Being a cursor movement function, <backtab> takes no arguments nor
         mode-command modifiers.

       <begline> (END) is a cursor movement function that places the cursor on
         the first non-blank character on the line.

         <meta><begline> places the cursor on the first character position on
            the line regardless of the contents of the line.

       <cancel> (^C) will cancel the current operation in progress.  Depending
         on your operating system, some of these operations may be completed
         before the <cancel> is read.  <cancel> will always cancel an argument
         so it never takes an argument nor a mode-command modifier.




                                        - 4 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       <cdelete> (BACKSPACE or ^H) will attempt to delete the previous
         character. Note that this function will NOT delete line breaks.  For
         that function, see the <emacscdel> function below.  If the cursor is
         in column 1, <cdelete> will move the cursor to the previous line and
         place it just to the right of the last character on that line.  If
         issued while an argument was being issued, <cdelete> is treated as a
         cursor-left command.  If issued in insert mode, <cdelete> will delete
         the previous character from the line, reducing the length of the line
         by 1.  If there is nothing but whitespace on the line to the left of
         the cursor, the cursor is placed in column 1 of the line.  If the
         cursor is beyond the last non- whitespace character on the line, it is
         moved to the character immediately to the right of the end of line.
         Otherwise, the cursor is moved one position to the left and a space
         replaces the character under the cursor.

       <compile> (^U) is used to perform background compilations and to review
         error messages from them.

         <compile> will read the next error message and attempt to parse it
            into file, row, column and message.  If it is successful, Z will
            read in the file, place the cursor on the appropriate row and
            column, and display the message on the dialog line.  <compile>
            currently works with GREP, Lattice C, Microsoft C, and the C-based
            Microsoft Assembler.

         <meta><compile> will read error messages and advance to the first
            message that is NOT for the current file.

         <arg>nullarg<compile> will attempt to compile the current file,
            resulting in the current file being compiled and linked.  The
            command and arguments used to compile the file are determined by
            the extension of the file and can be changed by the extmake: switch
            .

         <arg>textarg<compile> uses a special command and arguments to compile
            the specified text.  This can be changed by using the extmake:
            switch with extension "text".

         <arg>streamarg<compile> as above but uses the text selected on the
            screen as the arguments for the command.

         <arg><arg>textarg<compile> will invoke the text as a program.  The
            program is assumed to display its errors in file row column message
            format. This is often useful to find text in a series of files by
            using GREP:
                 grep /l pat files   ; zibo grep
                 grep -n pat files   ; *NIX grep

       <curdate>  (ALT-D) is a predefined macro that will insert the current
         date at the current cursor position.

       <curday> is a predefined macro that will insert the current day at the
         current cursor position.




                                        - 5 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       <curfileext> is a predefined macro that is the extension of the most
         recently switched file.

       <curfilenam> is a predefined macro that is the file name of the most
         recently switched file.

       <curtime>  (ALT-T) is a predefined macro that will insert the current
         time at the current cursor position.

       <curuser> is a predefined macro that will insert the name of the current
         user at the current cursor position.  This uses the MAILNAME
         environment variable.

       <down> (DOWN arrow) is a cursor movement function that moves the cursor
         to the line below the current one.  If this results in the cursor
         moving off the bottom of the screen, the window is adjusted
         appropriately.  Being a cursor movement function, <down> takes no
         arguments.

         <meta><down> moves the cursor to the same column position but to the
            last displayed line on the current window.

       <emacscdel> (CTRL-BACKSPACE) behaves identically to <cdelete> except
         that at the beginning of a line while in insert mode, <emacscdel> will
         delete the line break between the current line and the previous line,
         joining the two lines together.

       <emacsnewl> (unassigned) behaves identically to <newline> except that
         when in insert mode, it will break the current line at the current
         cursor position.

       <endline> (PGDN) moves the cursor beyond the last character on a line.

         <meta><endline> moves the cursor to the column corresponding to the
            right- most edge of the screen.

       <exit> (F9) is used to terminating an editing session.  There are
         editing flags and switches that modify the behaviour of the <exit>
         command: askexit/noaskexit, backup, entab, tmpsav (see Editing
         Switches and Flags section).

         <exit> saves the current file if it has been modified.  Z saves its
            temporary file and scans the set of in-core files.  If any are
            modified, Z will ask you to confirm the exit.

         <meta><exit> is identical to <exit> except that it skips the save of
            the current file.  See <setfile> for details of the saving
            operation.

         <arg><exit> is identical to <exit> except that Z does not exit but
            advances to the next file on the command line.

         <arg><meta><exit> is identical to <arg><exit> except that Z does not
            save the current file.



                                        - 6 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       <home> (HOME) is a cursor movement function that places the cursor in
         the upper-left-hand corner of the current window.

       <information> (F1) saves the current file and <setfile>'s to the
         information file which contains a list of all files in core along with
         the current set of files that you have edited.  The size of this list
         is controlled by the tmpsav switch.

       <initialize> (F2) causes Z to reread the user configuration files. This
         is useful when initially configuring your editor and when attempting
         to use someone else's keyboard assignments.

         <initialize> rereads all the Z switches for the user configuration
            files.

         <arg>text<initialize> rereads all the Z switches for the system and
            reads the user switches from the section of the user's TOOLS.INI
            that is tagged [Z- text].

       <insertmode> (^N) toggles the state of the insert mode switch.  This
         switch is easily seen on the right hand side of the status line.  When
         insert mode is on, each graphic character is inserted at the current
         cursor position, the remainder of the line is shifted one character to
         the right and the cursor is advanced one position.  Note, however,
         that the <newline> function is NOT a graphic character and does NOT
         cause insertion of a line break.  For this, please see the <emacsnewl>
         function.  Z normally is started in overstrike mode.  You can use the
         editor flag enterinsmode to cause Z to begin execution in insert mode.

       <ldelete> (^F) deletes a range of lines or a box within a series of
         lines.

         <ldelete> deletes the current line and places it into the pick buffer.

         <arg><ldelete> deletes from the cursor up to the end of line and
            places that text into the pick buffer.  Note that it does not join
            the current line with the next line.

         <arg>linearg<ldelete> deletes all lines specified and places the block
            into the pick buffer.

         <arg>boxarg<ldelete> deletes the box specified from the file and
            places it into the pick buffer.

         <arg>streamarg<ldelete> deletes the specified characters (treated as a
            box one line high).

       <left> (LEFT arrow) moves the cursor one position to the left.  If this
         results in the cursor being off the screen, then the window is
         adjusted appropriately by scrolling a number of columns defined by the
         hscroll editor switch.

         <meta><left> moves the cursor to the leftmost position on the screen.




                                        - 7 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       <linsert> (^D) inserts blank lines.

         <linsert> inserts one blank line underneath the cursor.

         <arg><linsert> inserts or deletes blanks at the beginning of a line to
            make the first non-blank character appear under the cursor.

         <arg>linearg<linsert> inserts the indicated range of blank lines.

         <arg>boxarg<linsert> inserts an empty box in the indicated range.

         <arg>streamarg<linsert> inserts an empty region (treated as a box one
            line high).

       <mark> (^P) goes to a specified spot in a file.

         <mark> goes to beginning of file.

         <arg><mark> restores the screen to its previous location.  Z remembers
            only one previous location.  <arg><mark> is used to flip between
            two viewpoints in the file.

         <arg>numarg<mark> moves the cursor to the beginning of the specified
            line.

         <arg><arg>text<mark> defines a bookmark at the current cursor
            location. That bookmark can now be addressed with the specified
            textual name.

         <arg>text<mark> moves the cursor to the indicated bookmark.  If it was
            not previously defined, Z will use the editor switch markfile to
            find a file that contains bookmark definitions.  This file contains
            lines of the form: bookmark file row column

       <meta> (ESC) is a function modifier.  It is used to prefix functions to
         change their behaviour.  See the individual function description for
         more information.

       <mlines> (^W) adjusts the window on the file a few lines towards the
         beginning of the file.

         <mlines> adjusts the window backwards in the file.  The number of
            lines it is moved is determined by the editor switch vscroll.

         <arg><mlines> moves the window until the line that the cursor is on is
            at the bottom of the screen.

         <arg>numarg<mlines> moves the window backwards the specified number of
            lines.

       <mpage> (^Q) moves the window back by pages.

         <mpage> moves the window backwards in the file by one screen's worth
            of lines.



                                        - 8 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         <arg><mpage> moves the window all the way back to the beginning of the
            file.

         <arg>numarg<mpage> moves the window the specified number of pages
            backward in the file.

       <mpara> (CTRL-PGUP) moves the cursor backwards by paragraphs.
         Paragraphs are blocks of text separated by blank lines.

         <mpara> moves the cursor backwards one paragraph and places the cursor
            on the first line of the paragraph

         <meta><mpara> moves the cursor backwards one paragraph and places the
            cursor just beyond the last line of the paragraph.

       <msearch> (^E) searches backwards in a file for a string or a regular
         expression. If the editor switch case is set then case is significant
         in the search otherwise case is ignored.

         <msearch> searches backwards for the previously defined string or
            pattern. If the string/pattern is found, then the window is moved
            to display it and the matched string/pattern is highlighted.  If it
            was not found, no cursor movement takes place.

         <arg>streamarg<msearch> searches backwards for the selected text.  In
            this case, the text is treated as a simple string.

         <arg>text<msearch> searches backwards for the text.  In this case, the
            text is treated as a simple string.

         <arg><arg>streamarg<msearch>
         <arg><arg>text<msearch> searches backwards for a regular expression.

         The patterns that Z understands are called "regular expressions".
         These are true regular expressions (plus some optimizations) rather
         than the much-weakened form that is used on the *NIX xGREPs.

         The simplest form of regular expression is just a string, like
         "hello". This pattern will match occurrences of the word "hello", or
         substrings of words like "othello".  It will even match the string
         "Hello" if the nocase editor switch is given.  Most characters in a
         regular expression match themselves, but some characters (one of
         "{}()[]!~:?^$+*@#") have a special meaning to the pattern matcher.
         These special characters are used to specify more complex patterns:

         \  "escape"; ignore the special meaning of the next character and just
            match that character.  "\?" matches the question-mark and "\\"
            matches a single backslash.

         ?  "wildcard";  match any character.

         [class]  "character class";  this is used to match one of a set of
            characters. "[abc]" matches an "a", "b", or "c".  The character "-"




                                        - 9 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


            is used here to specify a range of characters; "[a-zA-z0-9]"
            matches a letter or a number.

         [~class]  "not character class"; this is used to match a character
            that is NOT in the specified set of characters.

         ^  "beginning of line";  this matches or "anchors" a pattern to the
            beginning of the line.

         $  "end of line";  matches the end of a line.

         In the following, X denotes some regular expression:

         X* "closure";  this matches zero or more occurrences of the pattern X.
            It will match as few X's as it can, e.g. if the pattern is "?*ab"
            then it will match the first "ab" in "abababab".  If the pattern is
            "?*ab$", then it will match the entire string "abababab", with the
            "?*" portion of the pattern matching "ababab".

         X+ "plus"; this is just a shorthand for XX+.  It will match one or
            more occurrences of the pattern X.

         X@  "greedy closure"; this matches zero or more occurrences of the
            pattern X, but it starts out by matching as many X's as it can. and
            backs off on this choice ONLY if the rest of the pattern doesn't
            match.  So, the pattern "?@ab" will match the whole string
            "abababab", unlike "?*ab" above.

         X# "greedy plus";  a shorthand for XX@.

         (X1!X2!...!Xn)  "alternation";  this will match either X1, or X2, ...
            or Xn. It tries them in that order and it will switch from Xi to
            Xi+1 only if the rest of the pattern fails to match.

         ~X "not" or "guard";  this pattern matches nothing, but it checks to
            see if the string matches X at this point, and fails if it does.
            For example, "^~(foo!bar)?*$" will match all lines that don't begin
            with "foo" or "bar".

         X^n  "power";  this pattern matches exactly n copies of X.

         The following commonly used patters are defined for your typing
         convenience. To use them, just put :<letter> in your pattern:

            :a   [a-zA-Z0-9]                   alphanumeric
            :b   ([ \t]#)                      whitespace
            :c   [a-zA-Z]                      alphabetic
            :d   [0-9]                         digit
            :f   ([~ "\[\]\:<|>+=;,.]#)        file part
            :h   ([0-9a-zA-Z]#)                hex number
            :i   ([a-zA-Z_$][a-zA-Z0-9_$]@)    identifier
            :n   ([0-9]#.[0-9]@![0-9]@.[0-9]#![0-9]#)    number
            :p   (([a-z]\:!)(\\!)(:f(.:f!)\\)@:f(.:f!))  path
            :q   ("[~"]@"!'[~']@')             quoted string



                                       - 10 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


            :w   ([a-zA-Z]#)                   word
            :z   ([0-9]#)                      integer

       <mword> (unassigned) moves the cursor backwards by words.

         <mword> moves the cursor backwards one word and places the cursor on
            the beginning of the word.

         <meta><mword> moves the cursor backwards one word and places the
            cursor just beyond the end of the word.

       <newline> (ENTER or ^M) moves the cursor to a new line.

         <newline> moves the cursor to the beginning of the next line.  If the
            editor switch softcr is set, then Z will attempt to place the
            cursor on a meaningfully tabbed-in position based on the type of
            file. If the file is a C program, then Z will attempt to correctly
            tab in based on continuation of lines and on open blocks.
            Otherwise, if the next line is blank, Z will place the cursor in
            the column corresponding to the first non-blank character in the
            previous line.  If all else fails, Z places the cursor on the first
            non-blank character of the line.

         <meta><newline> moves the cursor to the real beginning of the next
            line.

       <pbal> (^V) balances parenthesis and brackets.

         <pbal> scans backwards through the file balancing parenthesis and
            brackets. When the first unbalanced one is found, the matching
            character is placed into the file at the cursor position. If it is
            found in the visible window, Z will alter its color for a short
            interval.  If it is found and it is not visible, Z will display the
            matching line on the dialog line.

         <arg><pbal> scans forward for unbalanced characters.

       <pick> (^K) grabs text from the file and places it into the pick buffer.
         This allows simple copy-and-paste operations.

         <pick> places the current line into the pick buffer.

         <arg><pick> places the text from the current cursor position up to the
            end-of- line into the pick buffer.  Note that the line break is not
            picked up.

         <arg>linearg<pick> places the specified range of lines into the pick
            buffer.

         <arg>boxarg<pick> places the text of specified box into the pick
            buffer.

         <arg>text<pick> places the text into the pick buffer.




                                       - 11 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         <arg>numarg<pick> places the specified range of lines into the pick
            buffer.

         <arg>markarg<pick> places the range of text between the cursor and the
            location of the bookmark into the pick buffer.

       <plines> (^T) adjusts the window on the file a few lines towards the end
         of the file.

         <plines> adjusts the window forward in the file.  The number of lines
            it is moved is determined by the editor switch vscroll.

         <arg><plines> moves the window until the line that the cursor is on is
            at the top of the screen.

         <arg>numarg<plines> moves the window forward the specified number of
            lines.

       <ppage> (^L) moves the window forward by pages.

         <ppage> moves the window forwards in the file by one screen's worth of
            lines.

         <arg><ppage> moves the window all the way to the end of the file.

         <arg>numarg<ppage> moves the window the specified number of pages
            forward in the file.

       <ppara> (CTRL-PGDN) moves the cursor forwards by paragraphs.  Paragraphs
         are blocks of text separated by blank lines.

         <ppara> moves the cursor forwards one paragraph and places the cursor
            on the first line of the paragraph

         <meta><ppara> moves the cursor forwards one paragraph and places the
            cursor just beyond the last line of the paragraph.

       <psearch> (^R) searches forwards in a file for a string or a regular
         expression. See <msearch> for the definition of the regular expression
         patterns.

         <psearch> searches forwards for the previously defined string or
            pattern. If the string/pattern is found, then the window is moved
            to display it and the matched string/pattern is highlighted.  If it
            was not found, no cursor movement takes place.

         <arg>streamarg<psearch> searches forwards for the selected text.  In
            this case, the text is treated as a simple string.

         <arg>text<psearch> searches forwards for the text.  In this case, the
            text is treated as a simple string.

         <arg><arg>streamarg<psearch>
         <arg><arg>text<psearch> searched forwards for a regular expression.



                                       - 12 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       <push> (^Z) runs the command shell.  Depending on the OS, you either get
         COMMAND.COM or SH.

         <push> saves the current file and runs the shell.

         <meta><push> does not save the current file and runs the shell.  See
            <setfile> for a description of the save operation.

         <arg><push> uses the text on the screen from the cursor up to end-of-
            line as a command to the shell.

         <arg>text<push> uses the text as a command to the shell.

       <put> (^G) inserts the text of the pick buffer into the file beginning
         at the current cursor position.  The insertion depends on the type of
         text stored in the pick buffer:

         <arg>text<put>

       <arg>streamarg<put> places the specified text into the pick buffer and
       inserts the specified text at the current cursor position.

         <arg><arg>text<put> interprets text as a filename and will insert the
            contents of the specified file into the current file at the current
            cursor position.

         lines are inserted directly before the cursor and do not break the
         line. boxes are inserted in the current line and all succeeding lines.
         streams break the current line and are inserted at the cursor.

       <pword> (unassigned) moves the cursor forwards by words.

         <pword> moves the cursor forwards one word and places the cursor on
            the beginning of the word.

         <meta><pword> moves the cursor forwards one word and places the cursor
            just beyond the end of the word.

       <qreplace> (CTRL-ENTER or ^J) performs global search and replace but
         prompts for confirmation of each replacement.  See <replace>.

       <quote> (unassigned) reads one keystroke from the keyboard and treats it
         literally. This is useful for inserting text into a file that happens
         to be assigned to an editor function.

       <refresh> (F10) reloads or discards the current file.

         <refresh> prompts and rereads the file from disk, discarding all
            edits.

         <arg><refresh> prompts and discards the file from the editor memory.

       <replace> (^O) performs global search and replace.  The editor switch
         case indicates whether case is significant for comparison.



                                       - 13 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         <replace>
         <arg><replace>
            perform simple search and replace, prompting you for the search
            string and for the replacement string.  The search begins at the
            cursor position and continues through the end of file.

         <arg>linearg<replace> performs the search and replace on the specified
            line range.

         <arg>numarg<replace> performs the search and replace on the specified
            line range.

         <arg>boxarg<replace> performs the search and replace within the
            specified box.

         <arg>markarg<replace> performs the search and replace between the
            cursor and the specified bookmark.

         <arg><arg><replace>
         <arg><arg>linearg<replace>
         <arg><arg>numarg<replace>
         <arg><arg>boxarg<replace>
         <arg><arg>markarg<replace>
            all perform the same as above except that the search pattern is a
            regular expression and the replacement pattern can select special
            tagged sections of the search for selective replacement.  If the
            regular expression contains {...} these are not matched directly
            (except when preceded with a \).  They indicate the beginning and
            end of tagged sections.  You can select from these in the
            replacement string by $n where n is a digit from 0 to 9.  $0
            represents the entire matched string.  For example, if the pattern
            is

            "^{[a-zA-Z]@} #{[0-9]@}$"
         
            and the string is "Fahrenheit 451", the first pair of curly braces
            will mark off "Fahrenheit", and the second pair will delimit "451".
            You can refer to the first field as $1, the second as $2, and the
            whole matched string as $0.

       <restcur> is a predefined macro that restores the current cursor
         position saved with <savecur>.

       <right> (RIGHT arrow) moves the cursor one position to the right.  If
         this results in the cursor being off the screen, then the window is
         adjusted appropriately by scrolling the number of columns specified by
         the hscroll editor switch.

         <meta><right> moves the cursor to the rightmost position on the
            screen.

       <savecurs> is a predefined macro that saves the current cursor position
         to be restored with <restcur>.




                                       - 14 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       <sdelete> (^S) deletes a stream of text.  This includes line breaks and
         parallels what simpler editors (vi, emacs) do.

         <sdelete> delete one character under the cursor.  This does not delete
            line breaks.  It does not place that character into the pick
            buffer.

         <arg><sdelete> delete from the cursor through the end-of-line, joining
            the following line with the current line the cursor position.  The
            text deleted (including the line break) is placed into the pick
            buffer.

         <arg>streamarg<sdelete> delete the indicated stream of text.

         <arg>linearg<sdelete>
         <arg>boxarg<sdelete>
         <arg>markarg<sdelete> delete the text beginning at the bookmark and
            ending at the cursor including all line breaks.  All removed text
            is entered into the pick buffer.

       <setfile> (^B) switches the file currently being edited, optionally
         saving any changes to the current file. If the name of the file you
         indicate contains any meta-characters (? or *) Z will display a menu
         of all matching files.  If the file to be save is read-only, Z will
         prompt you for another name under which to save the file.  Z will also
         allow you to specify a environment variable as part of the name to be
         searched.  For example, if you have a batch file FOO.BAT somewhere in
         your execution path, you can use <setfile> to visit it by entering
         <arg>$PATH:FOO.BAT<setfile>.

         <setfile> switches to the most-recently edited file saving any
            changes. Toggling between two file is accomplished by repeated
            <setfile>'s.

         <arg><setfile> switches to the file name that begins at the cursor and
            ends on the first blank, saving any changes made to the current
            file.  If the text indicated is in actuality a directory, Z will
            change its working directory to that specified.

         <arg>text<setfile> switches to the specified text. If the text
            indicated is in actuality a directory, Z will change its working
            directory to that specified.

         <meta><setfile>
         <arg><meta><setfile>
         <arg>text<meta><setfile> as above but disables the saving of changes
            to the current file.

         <arg><arg>text<setfile> saves the current file under the specified
            name.

         <arg><arg><setfile> saves the current file.

       <setwindow> (^]) redisplays the screen and adjusts the window.



                                       - 15 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         <setwindow> redisplays the entire screen.

         <meta><setwindow> redisplays the line that the cursor is on.

         <arg><setwindow> adjusts the window so that the cursor position is in
            the upper left.

       <sinsert> (^A) inserts streams of blank space.

         <sinsert> inserts a single blank space.

         <arg><sinsert> inserts a line break at the current cursor position,
            splitting the line at the cursor.

         <arg>linearg<sinsert>
         <arg>boxarg<sinsert>
         <arg>markarg<sinsert> break the line at the bookmark and insert the
            appropriate number of blank lines and spaces.

       <tab> (TAB or ^I) is a cursor movement function.  It will move the
         cursor rightward to the next tabstop.  Tabstops are defined to be
         every nth character where n is settable by the tabstops editor switch.
         Being a cursor movement function, <tab> takes no arguments nor mode-
         command modifiers.

       <up> (UP arrow) is a cursor movement function that moves the cursor to
         the line above the current one.  If this results in the cursor moving
         off the top of the screen, the window is adjusted appropriately.
         Being a cursor movement function, <up> takes no arguments.

         <meta><up> moves the cursor to the same column position but to the top
            of the displayed window.

       <window> (^Y) creates, destroys and moves between editing windows.  Z
         allows the screen to be broken up into up to 8 non-overlapping editing
         windows that each can contain different files.

         <window> moves to the next window to the right of or below the current
            window.

         <arg><window> splits the current window horizontally at the cursor.

         <arg><arg><window> splits the current window vertically at the cursor.

         <meta><window> merges the current window with one to the right or
            below.


                              Editing Switches and Flags

       Editing switches that take numerical values and their default values.

         bgcolor (0) gives the background color for the editing screen.  This
            is available only on the IBM PC version.



                                       - 16 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         debug (0) controls display of macros while they are being executed.
            See the documentation on keystroke macros below.

         entab (1) controls the degree of tabification that Z performs when
            outputting a file.  entab:0 directs Z to output the file with no
            tabs.  entab:1 directs Z to attempt to entab all multiple spaces
            outside of quoted strings.  These strings are delimited either with
            quotes (") or apostrophes (').  entab:2 directs Z to maximally
            entab the line.

         errcolor (4) is the color used when displaying error messages on the
            screen.  This is available only on the IBM PC version.

         fgcolor (7) is the color used for foreground display of the editing
            windows.  This is available only on the IBM PC version.

         height (23) is the number of lines that Z uses in the editing window.
            This is useful when using a nonstandard display device:  EGA in 43-
            line mode on the IBM PC and Ambassador terminals are simple
            examples.

         hike (4) is the location on the screen of the cursor when the cursor
            is moved by editing functions.  Some of the cursor movement
            commands above move the cursor as opposed to scroll the cursor.
            Scrolling is controlled by the hscroll and vscroll parameters
            below.  For direct movement, hike is the position in the editing
            window where Z will place the cursor on the direct movement.

         hscroll (10) is the number of columns scrolled when the cursor is
            scrolled off of the editing window.

         infcolor (6) is the color used for information messages.  This is
            available only on the IBM PC version.

         rmargin (72) is the right margin column used in wordwrap mode.  Any
            space hit to the right of this margin causes a line break as does
            any character hit beyond the rmargin+4 position.  Wordwrap mode is
            set by the wordwrap switch below.

         stacolor (3) is the color used for the status line.  This is available
            only on the IBM PC version.

         tabstops (4) is the number of spaces between each logical tab stop on
            the editing screen.  Note that these tabstops are attached to the
            file and not to the window.

         tmpsav (20) is the number of files that Z remembers between editing
            sessions. When you exit Z, the specified number of files are saved
            in a temp file along with the position of the window and cursor
            within each.  Also saved is the layout of the windows you had
            created.






                                       - 17 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         vscroll (7) is the number of lines scrolled when the cursor is
            scrolled off the editing window.  It is also the number of lines
            scrolled by the <plines> and <mlines> editing functions.

       Editing switches that are boolean in nature.  To set switch put switch:
       in TOOLS.INI, to reset switch put noswitch: in tools.ini, e.g. askexit:
       or noaskexit.

         askexit (off) causes Z to prompt for confirmation when you exit.

         askrtn (on) causes Z to prompt for confirmation when you return to
            after <push>

         autosave (on) causes Z to save the current file whenever you switch
            away from it. Some users prefer to issue a command to save the file
            rather than have Z "know" when to do it for them.

         case (off) causes Z to consider case to be significant for search and
            replace operations.

         enterinsmode (off) causes Z to start up in insert mode as opposed to
            overstrike mode.

         softcr (on) lets Z guess at proper indentation when the <newline> or
            <emacsnewl> editing functions are hit.

         trailspace (off) causes Z to remember trailing spaces in text.
            Normally, Z discards trailing spaces.

         wordwrap (off) causes Z to break lines of text on word boundaries when
            you edit them beyond the margin specified by rmargin.

       Editing switches that are textual in nature:

         backup (undel)is the method used for creating backup versions of
            edited files. The text that follows is one of the following:

         none    perform no backup operation.
         undel   delete the file so that the UNDEL command can retrieve it.
         bak     place the previous version in a version with the extension
         .bak.

         extmake (none)is used to associate a compiler and command line with a
            particular extension for use by the <compile> command.  The text
            that follows the switch is of the form:

                 extension command arguments

            where extension is the extension of the file to match, command is a
            command to execute and arguments are the parameters to be passed to
            the command.  There may be a %s in the arguments section  that is
            replaced with the name of the current file or with the selected
            text (see <compile>).  The special extension "text" is used to set
            the compiler command for when the user enters <arg>text<compile>.



                                       - 18 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         markfile (none)is the name of the file Z searches when looking for a
            bookmark that is not in the in-memory set.

         readonly (none)is the command that will be invoked when z attempts to
            overwrite a readonly file.  The current file name will be appended
            to the command, e.g.

                 readonly: chmode -r


                                   Keystroke Macros

       The above set of editing functions are a fairly comprehensive set of
       functions that you can use in your day-to-day editing.  Often, however,
       you can come up with a set of operations that are commonly executed
       together.  Instead of entering each function separately, a tedious
       operation of the keyboard is not comfortably laid out, you can define
       new editing functions that are defined in terms of the previously
       defined set of functions.

       This is done in two steps.  First, a definition of the editing function
       in terms of the components needs to be done.  You would use the <assign>
       function or your TOOLS.INI file to create this definition.  Remember
       that editing the TOOLS.INI does not define the function, you must either
       exit Z or use the <initialize> function to process it.  Remember too,
       that if you use the <assign> function to define an editing function, you
       will lose this definition if you exit Z.  This operation defines the new
       editing function.

       The next step is to assign a keyboard sequence to this function, causing
       the function to be executed each time the specific keys are pressed.
       Again, this can be accomplished either by editing the TOOLS.INI or by
       using the <assign> editing function.

       Let's try two examples.  First, define and assign a function that will
       delete from the cursor through the end of the current or next word.
       Normally, this is accomplished by entering the following editing
       functions:

            <arg>          ; define the beginning of a sdelete argument
            <meta>
            <pword>        ; move to end of current/next word
            <sdelete>      ; delete from arg through the current cursor
            position
                           ; including all line breaks.

       Let's call this new function worddelete.  To define it in the TOOLS.INI
       file all we need to do is locate the [Z] tagged section and add the
       following line:

            worddelete:=arg meta pword sdelete

       Easy, eh?  To assign this to a keystroke sequence, say ALT-D on the IBM
       PC keyboard, we'd also enter the line:



                                       - 19 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


            worddelete:ALT-D

       Once we'd reinitialize the editor (either via the <initialize> command
       or by exiting Z and then starting it up again), each time we'd hit ALT-
       D, a word would disappear.

       To insert actual text into the file inside a macro all you need to do is
       enclose that text in quotes.  The second example below shows how.  Let's
       define a function that inserts a C-language "if" statement before the
       line with the cursor.  You'd do this normally by typing:

            <arg>
            2
            <linsert>      ; insert two blank lines
            <up>
            <newline>      ; let Z guess at the indentation
            "if () {"      ; place in the first part of the if <newline>
            "}"            ; close the consequent
            <up>
            <begline>      ; put the cursor back onto the if

       The TOOLS.INI entries for this are:

            insert-if:=arg "2" linsert up newline "if () {" newline "}" up
            begline
            insert-if:ALT-I

       All editing functions have return codes.  These values may be tested and
       acted upon by the following macro statements:

       :>label  defines a label that can be referenced in any of the below
         macro commands.

       =>label  is a direct transfer to the specified label.  If label  is
         omitted then the current macro is exited.

       ->label  directs transfer to the specified label  iff the previous
         editor function returned FALSE.  If label  is omitted then the current
         macro is exited.

       +>label  directs transfer to the specified label  iff the previous
         editor function returned TRUE.  If label  is omitted then the current
         macro is exited.














                                       - 20 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       Below is a list of all the editor functions and their return conditions.

       Function       Condition for            TRUE Condition for FALSE
       arg            Always                   Never
       assign         Assignment was successful     Invalid arg or assignment
       backtab        Cursor moved             Cursor was at left margin
       begline        Cursor moved             Cursor did not move
       cancel         Always                   Never
       cdelete        Cursor moved             Cursor did not move
       compile        Exec of compiler succeeded    Bad arg, compiler not found
       down           Cursor moved             Cursor did not move
       emacscdel      Cursor moved             Cursor did not move
       emacsnewl      Always                   Never
       endline        Cursor moved             Cursor did not move
       exit           No return                No return
       home           Cursor moved             Cursor did not move
       information    Always                   Never
       initialize     Successful initialization     Bad arg
       insertmode     If insert mode was on    If insert mode was off
       ldelete        Successful line delete   Bad arg
       left           Cursor moved             Cursor did not move
       linsert        Successful line insert   Bad arg
       mark           Succ. definition or move Bad arg or mark not found
       meta           If meta was on           If meta was off
       mlines         Successful movement      Bad arg
       mpage          Successful movement      Bad arg
       mpara          Successful movement      Bad arg
       msearch        Found string             Bad arg or not found
       mword          Cursor moved             Cursor did not move
       newline        Always                   Never
       pbal           Balance was successful   Bad arg or not balanced
       pick           Successful pick          Bad arg
       plines         Successful movement      Bad arg
       ppage          Successful movement      Bad arg
       ppara          Successful movement      Bad arg
       psearch        Found string             Bad arg or not found
       push           Successful push          Bad arg or prog not found
       put            Always                   Never
       pword          Cursor moved             Cursor did not move
       qreplace       >= 1 replacement         Not found, invalid pattern
       quote          Always                   Never
       refresh        File was read in/deleted Canceled, bad arg
       replace        >=1 replacement          Not found, invalid pattern
       right          Cursor over text of line Cursor beyond end of line
       sdelete        Successful delete        Bad arg
       setfile        Not canceled, changed    Bad arg, canceled
       setwindow      Successful window change Bad arg
       sinsert        Successful insert        Bad arg
       tab            Cursor moved             Cursor did not move
       up             Cursor moved             Cursor did not move
       window         Successful split/join/move    Any error






                                       - 21 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       
                                        Index

       
       commands
         <arg> (^X)................................................... 4
         <assign> (^^)................................................ 4
         <backtab> (SHIFT-TAB)........................................ 4
         <begline> (END).............................................. 4
         <cancel> (^C)................................................ 4
         <cdelete> (BACKSPACE or ^H).................................. 4
         <compile> (^U)............................................... 5
         <curdate>  (ALT-D)........................................... 5
         <curday>..................................................... 5
         <curfileext>................................................. 5
         <curfilenam>................................................. 5
         <curtime>  (ALT-T)........................................... 5
         <curuser>.................................................... 5
         <down> (DOWN arrow).......................................... 5
         <emacscdel> (CTRL-BACKSPACE)................................. 6
         <emacsnewl> (unassigned)..................................... 6
         <endline> (PGDN)............................................. 6
         <exit> (F9).................................................. 6
         <home> (HOME)................................................ 6
         <information> (F1)........................................... 6
         <initialize> (F2)............................................ 6
         <insertmode> (^N)............................................ 6
         <ldelete> (^F)............................................... 7
         <left> (LEFT arrow).......................................... 7
         <linsert> (^D)............................................... 7
         <mark> (^P).................................................. 7
         <meta> (ESC)................................................. 8
         <mlines> (^W)................................................ 8
         <mpage> (^Q)................................................. 8
         <mpara> (CTRL-PGUP).......................................... 8
         <msearch> (^E)............................................... 8
         <mword> (unassigned)........................................ 10
         <newline> (ENTER or ^M)..................................... 10
         <pbal> (^V)................................................. 10
         <pick> (^K)................................................. 10
         <plines> (^T)............................................... 11
         <ppage> (^L)................................................ 11
         <ppara> (CTRL-PGDN)......................................... 11
         <psearch> (^R).............................................. 11
         <push> (^Z)................................................. 12
         <put> (^G).................................................. 12
         <pword> (unassigned)........................................ 12
         <qreplace> (CTRL-ENTER or ^J)............................... 12
         <quote> (unassigned)........................................ 12
         <refresh> (F10)............................................. 12
         <replace> (^O).............................................. 13
         <restcur>................................................... 13
         <right> (RIGHT arrow)....................................... 13
         <savecurs>.................................................. 13



                                       - 22 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


         <sdelete> (^S).............................................. 14
         <setfile> (^B).............................................. 14
         <setwindow> (^])............................................ 14
         <sinsert> (^A).............................................. 15
         <tab> (TAB or ^I)........................................... 15
         <up> (UP arrow)............................................. 15
         <window> (^Y)............................................... 15
       switches
         boolean..................................................... 16
           askexit (off)............................................. 16
           askrtn (on)............................................... 16
           autosave (on)............................................. 16
           case (off)................................................ 17
           enterinsmode (off)........................................ 17
           softcr (on)............................................... 17
           trailspace (off).......................................... 17
           wordwrap (off)............................................ 17
         numerical................................................... 15
           bgcolor (0)............................................... 15
           debug (0)................................................. 15
           entab (1)................................................. 15
           errcolor (4).............................................. 16
           fgcolor (7)............................................... 16
           height (23)............................................... 16
           hike (4).................................................. 16
           hscroll (10).............................................. 16
           infcolor (6).............................................. 16
           rmargin (72).............................................. 16
           stacolor (3).............................................. 16
           tabstops (4).............................................. 16
           tmpsav (20)............................................... 16
           vscroll (7)............................................... 16
         textual..................................................... 17
           backup (undel)............................................ 17
           extmake (none)............................................ 17
           markfile (none)........................................... 17
           readonly (none)........................................... 17

       


















                                       - 23 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


                                   Revision History

       3 November 1986 version 7.43  Create unique file name for temp file.
       Code and data shrinkage by removing redundant routines.

       23 September 1986 version 7.42  Fix fScan from scanning one beyond EOF.
       Make pBal use setAllScan.  Add ability to enter arbitrary characters
       into <psearch>, <msearch>, <replace>, and <qreplace> pattern and
       replacement strings.  Preserve tabbing and spaces in non-edited lines.
       Fix shortname processing from the command line.  Fix problem with
       AdjustLines and deleting at top of file.

       19 August 1986 version 7.41  Fix undetected out-of-stack problem
       introduced in 7.35.

       19 August 1986 version 7.40  Fix bug in not highlighting search
       arguments when using default search from startup.

       18 August 1986 version 7.39  Fix bug introduced in 7.26 in
       <arg><arg><put>.  Optimize file loading code.

       8 August 1986 version 7.38  Fix bug introduced in 7.36 for reading
       TOOLS.INI.  Fix bug introduced in 7.37 for Z.$ temp file creation.

       4 August 1986 version 7.37  Fix problem in using TMP environment
       variable to locate <compile> temporary message file.

       1 August 1986 version 7.36  Allow path searching for temp files (Z.MSG,
       Z.$).  Allow path searching of <setfile> files.  Speed up
       initialization.

       7 July 1986 version 7.35  Shrink several VM routines.  Better out-of-
       space messages from VM.  Bug fix in textarg copying text from screen.
       Bug fix in macro redefinition while macros in progress.

       6 Jun 1986 version 7.34  Add macros savecur, restcur, curFileNam,
       curFileExt and editing switches readonly, askrtn, default ALT-T and ALT-
       D for curtime, curdate.

       13 May 1986 version 7.33  Recompiled using C 4.02.

       24 April 1986 version 7.32  Change <arg><arg><setfile> to remove dirty
       bit after successful save.

       10 April 1986 version 7.31  Fix bug that incorrectly updated the screen
       on line insert/delete at top of single window screen.  Add default
       assignments to <pword>, <mword>, and <curdate>.

       9 April 1986 version 7.30  When deleting/inserting lines, adjust other
       window instances to prevent rippling of displays in windows that are not
       affected by the deletion or insertion.

       8 April 1986 version 7.29  Fix problem in Z invocation with no arguments
       changing directory to the root.



                                       - 24 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       8 April 1986 version 7.28  Renumbered for first public release.

       7 April 1986 version 7.27  Add /D switch to prevent user TOOLS.INI
       processing.  Add environment variable searching capability to all
       filename processing.

       3 April 1986 version 7.26  Add file put capability to <put>.  Add
       default time, date, and user macros.

       2 April 1986 version 7.25  Add autosave switch.  Remove savemeta switch.
       Fix bug that caused all new files to be NL-terminated.

       24 March 1986 version 7.24  Create dir search temp file on device
       specified by TMP directory.  Fixes problem of leaving temp file around
       in root.

       22 March 1986 version 7.23  Preserve LF-ness of files.

       14 March 1986 version 7.22  Make successful <compile> read first
       message.

       12 March 1986 version 7.21  Replace bakfile switch with backup.

       11 March 1986 version 7.20  Clear dialog line after clearing screen
       after <push>.

       11 March 1986 version 7.19  Reset video mode after prompt in <push>.

       24 Feb 1986 version 7.18  Change internal page hashing for less
       clustering of swap pages.  Add register optimization in redraw.

       23 Feb 1986 version 7.17  Hook ^Break to quickly detect <cancel> during
       searches and other time-consumptive operations.  Use INT 16h to read
       from the keyboard.  Remove erroneous message if no user TOOLS.INI is
       present.  Saving file under  another name changes the internal name too.

       18 Feb 1986 version 7.16  Restore/save video mode during <push>.  Allow
       assignment to <unassigned>.

       14 Feb 1986 version 7.15  Remove necessity for system-wide TOOLS.INI.
       Fix problem with DOS MAKE returning pseudo-files in errors.

       12 Feb 1986 version 7.14  With bakfile set and saving to a new file, Z
       was incorrectly reporting that it could not rename the new file to
       newfile.bak.

       30 Jan 1986 version 7.13  Cooking ^@ resulted in a NUL string.

       28 Jan 1986 version 7.12  Problems on XENIX with filenames with no name
       (like .profile).

       24 Jan 1986 version 7.11  Fix incorrect scrolling at top of screen and
       at left of screen.  Off-by-1 error.  Add message and prompt after
       successful <push>.



                                       - 25 -





       Z User's Guide
                                              Printed: November 5, 1986 11:52 AM


       15 Jan 1986 version 7.10  Fix incorrect buffer usage in <compile> code
       that prevented use of <arg><arg>streamarg<compile>.

       13 Jan 1986 version 7.9  If on EGA and height:41 then set EGA into 43-
       line mode.

       10 Jan 1986 version 7.8  Fix bug when final putlflush encounters full
       disk it did not report the error.

       10 Jan 1986 version 7.7  Fix bug in <macro> that prevented graphic
       characters at the end of a macro.

       7 Jan 1986 version 7.6  Adjust  return code semantics of <right> to
       allow for generation of a <fill> keystroke macro.  Added conditional
       description to document.

       6 Jan 1986 version 7.5  PC version no longer requires VT52.SYS.  Extmake
       to control <compile> commands.

       Please send all comments in machine readable form to tools.





































                                       - 26 -
