---
layout: page
title: Norton Utilities 2.01
permalink: /software/pcx86/util/norton/2.01/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/machine/ibm/5160/cga/512kb/machine.xml
    drives: '[{name:"PC-DOS 2.00 w/Tools (10Mb)",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-C400.json"},{name:"MS-DOS 1.x/2.x Source (10Mb)",type:3,path:"/harddisks/pcx86/10mb/MSDOS-SRC.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: "Norton Utilities 2.01 (1983-07-04-A)"
    autoStart: true
    autoType: $date\r$time\rB:\rDIR\r
---

Like [Norton Utilities 2.00](../2.00/), version 2.01 was distributed as two single-sided 160K disks on a single "flippy"
diskette, which we have preserved as two separate (side "A" and side "B") disk images.

Our original diskette contained files dated November 3, 1983.  Unfortunately, that diskette contained two unreadable
sectors (sectors 3 and 7 on track 4 of side B).  Those sectors affect the contents of `HU.COM` at offsets 0x3600 and 0x3e00,
and as a result, attempting to run that program will crash the machine.

Thanks to a contribution from a PCjs user, we also have the contents of an older 2.01 diskette with files dated July 4, 1983.
All files on both sides of that diskette appear to be OK.  Directory listings of both sides of both diskettes are provided
[below](#directory-of-norton-utilities-201-1983-07-04-a).

{% include machine.html id="ibm5160" %}

### Directory of Norton Utilities 2.01 (1983-07-04-A)

	 Volume in drive A is NU-2.01, #1
	 Directory of A:\

	DISKLOOK BAT       384 07-04-83   2:01p
	BATHIDE  COM      7632 07-04-83   2:01p
	BEEP     COM       154 07-04-83   2:01p
	BLOAD    COM     17859 07-04-83   2:01p
	CLEAR    COM       139 07-04-83   2:01p
	CLS      COM       139 07-04-83   2:01p
	DISKOPT  COM      6560 07-04-83   2:01p
	DL       COM     32950 07-04-83   2:01p
	FH       COM     14281 07-04-83   2:01p
	FILEFIX  COM      7438 07-04-83   2:01p
	FILESORT COM      7131 07-04-83   2:01p
	HL       COM     35769 07-04-83   2:01p
	HM       COM     21742 07-04-83   2:01p
	       13 file(s)     152178 bytes
	                        5632 bytes free

### Directory of Norton Utilities 2.01 (1983-07-04-B)

	 Volume in drive A is NU-2.01, #2
	 Directory of A:\

	HU       COM     27628 07-04-83   2:01p
	LABEL    COM      8340 07-04-83   2:01p
	LPRINT   COM     24405 07-04-83   2:01p
	REVERSE  COM      1441 07-04-83   2:01p
	SCRATR   COM      3570 07-04-83   2:01p
	SM       COM     19374 07-04-83   2:01p
	SSAR     COM     24331 07-04-83   2:01p
	TIMEMARK COM      7234 07-04-83   2:01p
	UE       COM     26231 07-04-83   2:01p
	        9 file(s)     142554 bytes
	                       15872 bytes free

### Directory of Norton Utilities 2.01 (1983-11-03-A)

	 Volume in drive A is NU-2.01, #1
	 Directory of A:\

	DISKLOOK BAT       384 11-03-83   2:01p
	BATHIDE  COM      7752 11-03-83   2:01p
	BEEP     COM       154 11-03-83   2:01p
	BLOAD    COM     17859 11-03-83   2:01p
	CLEAR    COM       139 11-03-83   2:01p
	CLS      COM       139 11-03-83   2:01p
	DISKOPT  COM      6615 11-03-83   2:01p
	DL       COM     33344 11-03-83   2:01p
	FH       COM     14612 11-03-83   2:01p
	FILEFIX  COM      7581 11-03-83   2:01p
	FILESORT COM      7207 11-03-83   2:01p
	HL       COM     36212 11-03-83   2:01p
	HM       COM     22138 11-03-83   2:01p
	       13 file(s)     154136 bytes
	                        2560 bytes free

### Directory of Norton Utilities 2.01 (1983-11-03-B)

	 Volume in drive A is NU-2.01, #2
	 Directory of A:\

	HU       COM     28030 11-03-83   2:01p
	LABEL    COM      8307 11-03-83   2:01p
	LPRINT   COM     24405 11-03-83   2:01p
	REVERSE  COM      1441 11-03-83   2:01p
	SCRATR   COM      3570 11-03-83   2:01p
	SM       COM     19792 11-03-83   2:01p
	SSAR     COM     24542 11-03-83   2:01p
	TIMEMARK COM      3819 11-03-83   2:01p
	UE       COM     26749 11-04-83   2:01p
	        9 file(s)     140655 bytes
	                       17920 bytes free

### Diskette Photos

![Norton Utilities 2.01 (1983-11-03-A)]({{ site.software.diskettes.server }}/pcx86/util/norton/2.01/NU201-1983-11-03-SIDEA.jpg)

![Norton Utilities 2.01 (1983-11-03-B)]({{ site.software.diskettes.server }}/pcx86/util/norton/2.01/NU201-1983-11-03-SIDEA.jpg)
