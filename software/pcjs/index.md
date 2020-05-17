---
layout: page
title: PCjs Software Archive
permalink: /software/pcjs/
redirect_from: /disks/pcx86/personal/
machines:
  - id: ibm5170
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/ega/640kb/rev3/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: Jeff's MS-DOS 3.20 Tools
---

Much like the [PCjs Document Archive](/documents/pcjs/), this collection is an assortment of
software from the PCjs Archives that may or may not be of historical interest.

Some disks from this collection include:

  - [COMPAQ Diagnostics 5.08](/software/pcx86/diag/compaq/5.08/)
  - [COMPAQ DeskPro 386 (1986)](/software/pcx86/diag/compaq/1986/)
  - [COMPAQ MS-DOS 3.10 (12-17-85)](/software/pcx86/sys/dos/compaq/3.10/#compaq-ms-dos-310-12-17-85)
  - [COMPAQ MS-DOS 3.31 (1987)](/software/pcx86/sys/dos/compaq/3.31/#directory-of-compaq-ms-dos-331-1987)
  - [DoubleDOS 2.1F](/software/pcx86/sys/ext/softlogic/doubledos/2.1f/)
  - [Inside the IBM PC (1983)](/software/pcx86/sw/books/inside_the_ibm_pc/)
  - [Multitasking MS-DOS 4.00](/software/pcx86/sys/dos/microsoft/4.0M/)
  - [Microsoft C Compiler 1.03 (Beta)](/software/pcx86/lang/microsoft/c/1.03/)
  - [Microsoft C Compiler 1.04](/software/pcx86/lang/microsoft/c/1.04/)
  - [Microsoft Macro Assembler 5.10 (Feb 1988)](/software/pcx86/lang/microsoft/masm/5.10x/)
  - [Microsoft Word 1.10 (for DOS)](/software/pcx86/app/microsoft/word/1.10/)
  - [The Norton Utilities 2.00](/software/pcx86/util/norton/2.00/)
  - [The Norton Utilities 2.01 (1983-11-03)](/software/pcx86/util/norton/2.01/)
  - [The Norton Utilities 3.00 (1984-12-07)](/software/pcx86/util/norton/3.00/)
  - [The Norton Utilities 4.00 (Standard Edition)](/software/pcx86/util/norton/4.00/)
  - [The Norton Utilities 4.00 (Advanced Edition)](/software/pcx86/util/norton/4.00/advanced/)
  - [Early OS/2 Prototypes](/software/pcx86/sys/os2/misc/) (eg, CP-DOS and FOOTBALL)

You can probably find most or all of these disks on other software sites now, just as software from
many other sites has found its way here, thanks to the Brownian motion of bits on the Internet.

Any other disks you see [below](#directory-listings) are primarily ones that don't neatly fit into another PCjs category,
usually either because the disks contain a mixture of random/personal/unique content.

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
configured as the activation key sequence. *--[@jeffpar](https://jeffpar.com)*
