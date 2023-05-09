---
layout: page
title: PCjs Software Archive
permalink: /software/pcjs/
redirect_from: /disks/pcx86/personal/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/ega/640kb/rev3/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A: "None"
      B: "Jeff's MS-DOS 3.20 Tools"
---

Much like the [PCjs Document Archive](/documents/pcjs/), this collection is an assortment of software from the PCjs Archives that may or may not be of historical interest.

Some disks from this collection include:

  - [COMPAQ Diagnostics 5.08](/software/pcx86/diag/compaq/5.08/)
  - [COMPAQ DeskPro 386 (1986)](/software/pcx86/diag/compaq/1986/)
  - [COMPAQ MS-DOS 3.10 (12-17-85)](/software/pcx86/sys/dos/compaq/3.10/#compaq-ms-dos-310-12-17-85)
  - [COMPAQ MS-DOS 3.31 (1987)](/software/pcx86/sys/dos/compaq/3.31/#directory-of-compaq-ms-dos-331-1987)
  - [dBASE III 1.0](/software/pcx86/app/other/dbase3/1.0/)
  - [DoubleDOS 2.1F](/software/pcx86/sys/ext/softlogic/doubledos/2.1f/)
  - [Inside the IBM PC (1983)](/software/pcx86/sw/books/inside_the_ibm_pc/)
  - [Multitasking MS-DOS 4.00](/software/pcx86/sys/dos/microsoft/4.0M/)
  - [Microsoft C Compiler 1.03 (Beta)](/software/pcx86/lang/microsoft/c/1.03/)
  - [Microsoft C Compiler 1.04](/software/pcx86/lang/microsoft/c/1.04/)
  - [Microsoft Macro Assembler 5.10 (Feb 1988)](/software/pcx86/lang/microsoft/masm/5.10x/)
  - [Microsoft Windows 95 (Build 121)](/software/pcx86/sys/windows/win95/4.00.121/)
  - [Microsoft Windows 95 (Build 499)](/software/pcx86/sys/windows/win95/4.00.499/)
  - [Microsoft Word 1.10 (for DOS)](/software/pcx86/app/microsoft/word/1.10/)
  - [The Norton Utilities 2.00](/software/pcx86/util/norton/2.00/)
  - [The Norton Utilities 2.01 (1983-11-03)](/software/pcx86/util/norton/2.01/)
  - [The Norton Utilities 3.00 (1984-12-07)](/software/pcx86/util/norton/3.00/)
  - [The Norton Utilities 4.00 (Standard Edition)](/software/pcx86/util/norton/4.00/)
  - [The Norton Utilities 4.00 (Advanced Edition)](/software/pcx86/util/norton/4.00/advanced/)
  - [Early OS/2 Prototypes](/software/pcx86/sys/os2/misc/) (eg, CP-DOS and FOOTBALL)

You can probably find most or all of these disks on other software sites now, just as software from many other sites has found its way here, thanks to the continuous motion of bits on the Internet.

Any other disks you see [below](#directory-listings) are primarily ones that don't neatly fit into another PCjs category, usually either because the disks contain a mixture of random/personal/unique content.

{% include machine.html id="ibm5170" %}

## Directory Listings

### Directory of Jeff's MS-DOS 3.20 Tools

	 Volume in drive A is MSDOS 32   
	 Directory of  A:\

	LINK     EXE    43988   7-07-86  12:00p
	DEBUG    EXE    15647  11-26-86  10:24p
	GWBASIC  EXE    78864   7-07-86  12:00p
	PCPAL    EXE    63088   8-23-86  11:33a
	HDISK    ASM     5238   3-27-87  12:01a
	MASM     EXE    83165  10-05-86   5:22p
	HDISK    OBJ      643   2-09-87  11:52p
	HDISK    EXE      857   2-09-87  11:53p
	EXE2BIN  EXE     3050   7-07-86  12:00p
	PF       COM      290   1-03-80  11:46p
	TF       COM       40   1-03-80  11:57p
	COMMAND  COM    23612   7-07-86  12:00p
	HDISK    SYS      345   3-27-87  12:03a
	       13 File(s)     35840 bytes free

> NOTES: This was originally an MS-DOS 3.20 Distribution Disk (Disk 2 of 2) which I had subsequently modified for
personal use.  Presumably to make more room on the disk, I had moved off a few MS-DOS 3.20 files (BACKUP.EXE,
RESTORE.EXE, SHARE.EXE, TREE.EXE, and XCOPY.EXE), updated DEBUG.EXE, added MASM.EXE (v4.00), and then included
a few files of my own (eg, PCPAL.EXE and HDISK.ASM).  FYI, this particular copy of PCPAL.EXE was saved with **Alt-Esc**
configured as the activation key sequence. *--[Jeff]({{ site.author_url }})*

### Directory of Jeff's Misc Disk #2

     Volume in drive A is JEFF 2
     Directory of A:\
    
    CMD      PAS       640   8-09-84   6:41p
    DCROSS   PAS     50688   8-09-84   9:10p
    DFORM    PAS      2944   8-09-84   6:44p
    STARTREK PAS     27776   8-09-84   6:46p
    SYSLIB   PAS     18432   8-09-84   6:47p
    8088     ASM      7552   8-09-84   6:48p
    JPCON1   A86      3584   8-09-84   6:48p
    JPDSK1   A86      2304   8-09-84   6:49p
    JPINTC   A86      4608   8-09-84   6:50p
    JPUTIL   A86     12416   8-09-84   6:51p
    ROMFIX   ASM      4337   5-22-86  12:33p
    SAMPLE   PRG      6528   8-10-84  12:22p
    DCROSS30 PAS     52736   8-19-84   7:56p
    BLACKJK  PAS      3363   9-08-84  11:10p
    DLOK     PAS      5632  11-05-84  11:41p
    DLOK     COM     12450  10-12-84  11:37p
    DLOK     TXT      1280  10-12-84  11:49p
    DBASE    TXT      1024  10-13-84  12:02a
    BYTE     LTR      5504  10-14-84  10:29p
    DUU      ASM     51712   2-04-85   9:59a
    DUU      DOC     13952   2-04-85  10:00a
    8080     ASM       768   2-05-85   9:49p
    KEQ      DOC     14720  11-26-84  12:05a
    DMAC     ASM      6612   5-13-86   7:38p
    DSKTST   ASM      2027   5-22-86  12:54p
    KEQ      MAC     27925   9-14-86   1:35a
           26 file(s)     341514 bytes
                            7168 bytes free

### Directory of Jeff's Misc Disk #3

     Volume in drive A is JEFF 3
     Directory of A:\
    
    RESUME            7435   5-07-86   2:53p
    ROMBIOS  DAT     65536   6-03-86   6:42p
    CALL     ASM      1001   7-22-86   2:10p
    VTP      ASM      7884   9-04-86  12:40p
    VT52     ASM     39252   8-26-86   3:50p
    VTP      COM       473   9-03-86   9:16a
    VT52     SYS      3146   9-05-86  11:36a
    VT52               122   8-26-86   2:47p
    ANSI     ASM     14756   7-11-85   9:04a
    MULT     INC      3586   7-01-85   9:34a
    VECTOR   INC      2966   7-01-85   9:36a
    ANSI               127   9-05-86   9:33a
    ATBIOS   DAT     65536  10-19-85   8:07p
    ATVECS   DAT      1024  10-19-85   8:07p
    CQBIOS   DAT     40472  10-19-85  11:29p
    CQHROM   DAT      3840  10-19-85   8:49p
    SAMPLE1  ASM       896  10-18-84   9:47p
    SAMPLE2  ASM       896  10-18-84   9:51p
    FLIB     ASM      5376   1-17-85  10:47p
    FMAIN    ASM       768   1-17-85   9:11p
    DEBBIE   ASM      2432  12-24-84   4:13p
    NEC      ASM      3968   1-01-80  12:07a
    RAMDRIVE ASM      4352   2-26-85  11:46p
    TABEX    ASM      2842   7-24-85  11:27p
    TABIN    ASM      2607   2-19-86   5:50p
    HDISK    SYS       345  10-20-86  11:46a
    HDISK    ASM      5238   2-01-87  10:39p
    IBMBIO   COM     16369  12-30-85  12:00p
           28 file(s)     303245 bytes
                           47104 bytes free
