---
layout: page
title: PCjs Personal Disk Collection
permalink: /software/pcx86/sw/personal/
redirect_from: /disks/pcx86/personal/
redirect_from:
  - /disks/pcx86/personal/random/
machines:
  - id: ibm5170
    type: pcx86
    config: /devices/pcx86/machine/5170/ega/640kb/rev3/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/disks-demo/pcx86/drives/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: JEFFPAR DISK001
---

PCjs Personal Disk Collection
-----------------------------

Much like the [PCjs Personal Document Collection](/docs/personal/), this is an assortment of disk images
archived by [@jeffpar](https://jeffpar.com) that may or may not be of historical interest.

Some disks from this collection *have* been archived elsewhere, including:

* [COMPAQ Diagnostics 5.08](/disks/pcx86/diags/compaq/5.08/)
* [COMPAQ DeskPro 386 (1986)](/disks/pcx86/diags/compaq/utilities/1986/)
* [COMPAQ MS-DOS 3.10 (12-17-85)](/disks/pcx86/dos/compaq/3.10/#compaq-ms-dos-310-12-17-85)
* [COMPAQ MS-DOS 3.31 (1987)](/disks/pcx86/dos/compaq/3.31/#directory-of-compaq-ms-dos-331-1987)
* [DoubleDOS 2.0F](/disks/pcx86/tools/softlogic/doubledos/2.0f/)
* [Multitasking MS-DOS 4.00](/disks/pcx86/dos/microsoft/4.0M/)
* [The Norton Utilities 3.00 (1984-12-07)](/disks/pcx86/tools/other/norton/3.00/)
* [The Norton Utilities 4.00 (Standard Edition)](/disks/pcx86/tools/other/norton/4.00/)
* [The Norton Utilities 4.00 (Advanced Edition)](/disks/pcx86/tools/other/norton/4.00/advanced/)
* [Early OS/2 Prototypes](/disks/pcx86/os2/misc/) (eg, [CP-DOS](/disks/pcx86/os2/misc/cpdos/) and [FOOTBALL](/disks/pcx86/os2/misc/football/))

Any other disks you see [below](#directory-listings) are primarily ones that don't neatly fit into another PCjs category,
usually either because the disks contain a variety of unrelated files and/or unique content.

## Directory Listings

### Directory of JEFFPAR DISK001

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
