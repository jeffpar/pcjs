---
layout: page
title: Norton Utilities 2.00
permalink: /software/pcx86/util/norton/2.00/
redirect_from: /disks/pcx86/tools/other/norton/2.00/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/512kb/machine.xml
    drives: '[{name:"PC-DOS 2.00 w/Tools (10Mb)",type:3,path:"/harddisks/pcx86/sys/dos/ibm/2.00/PCDOS200-C400.json"},{name:"MS-DOS 1.x/2.x Source (10Mb)",type:3,path:"/harddisks/pcx86/sys/dos/microsoft/2.00/MSDOS-SRC.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: "Norton Utilities 2.00 (Side A)"
    autoStart: true
    autoType: $date\r$time\rB:\rDIR\r
---

Norton Utilities 2.00 was distributed as two single-sided 160K disks on a single "flippy" diskette, which we have preserved
as two separate (side "A" and side "B") disk images.  Presumably this was done to ensure that the diskette would work on every
IBM PC, including the earliest machines that shipped only with single-sided drives.

Directory listings of [Side A](#directory-of-norton-utilities-201-side-a) and [Side B](#directory-of-norton-utilities-201-side-b)
are provided below.

{% include machine.html id="ibm5160" %}

### Directory of Norton Utilities 2.00 (Side A)

	 Volume in drive A is NU-2.00, #1
	 Directory of A:\

	DISKLOOK BAT       384 06-01-83   2:00p
	BATHIDE  COM      7477 06-01-83   2:00p
	BEEP     COM       151 06-01-83   2:00p
	BLOAD    COM     17685 06-01-83   2:00p
	CLEAR    COM       140 06-01-83   2:00p
	CLS      COM       140 06-01-83   2:00p
	DISKOPT  COM      6245 06-01-83   2:00p
	DL       COM     32712 06-01-83   2:00p
	FH       COM     14036 06-01-83   2:00p
	FILEFIX  COM      7287 07-01-83   2:00p
	FILESORT COM      6924 06-01-83   2:00p
	HL       COM     35607 06-01-83   2:00p
	HM       COM     21590 06-01-83   2:00p
	       13 file(s)     150378 bytes
	                        6144 bytes free

![Norton Utilities 2.00 (Side A)]({{ site.software.diskettes.server }}/pcx86/util/norton/2.00/NU200-SIDEA.jpg)

### Directory of Norton Utilities 2.00 (Side B)

	 Volume in drive A is NU-2.00, #2
	 Directory of A:\

	DISKLOOK BAT       384 06-01-83   2:00p
	HU       COM     27490 06-02-83   2:00p
	LABEL    COM      8063 06-01-83   2:00p
	LPRINT   COM     24125 06-01-83   2:00p
	REVERSE  COM      1298 06-01-83   2:00p
	SCRATR   COM      3426 06-01-83   2:00p
	SM       COM     19168 06-01-83   2:00p
	SSAR     COM     23768 06-01-83   2:00p
	TIMEMARK COM      7045 06-01-83   2:00p
	UE       COM     26026 06-01-83   2:00p
	       10 file(s)     140793 bytes
	                       17408 bytes free

![Norton Utilities 2.00 (Side B)]({{ site.software.diskettes.server }}/pcx86/util/norton/2.00/NU200-SIDEB.jpg)
