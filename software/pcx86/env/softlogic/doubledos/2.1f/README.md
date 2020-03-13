---
layout: page
title: DoubleDOS 2.1F
permalink: /software/pcx86/env/softlogic/doubledos/2.1f/
redirect_from: /disks/pcx86/tools/softlogic/doubledos/2.1f/
machines:
  - id: ibm5160-doubledos
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/256kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 2.10 (Disk 1)
      B:
        name: DoubleDOS 2.1F
    autoType: $date\r$time\r\B:\rDOUBLEDOS\r
---

This version of DoubleDOS was archived by [@jeffpar](/disks/pcx86/personal/random/) and likely patched as well (e.g.,
to disable copy protection), since the date for `DOUBLEDO.EXE` is almost a year newer than the rest of the files.

It also seems to be very DOS version-sensitive.  It crashes on PC DOS 2.00 but appears to work OK on PC DOS 2.10, so
that's what we boot with here.  A directory listing of the 160Kb diskette is provided [below](#directory-of-doubledos-21f).

{% include machine.html id="ibm5160-doubledos" %}

### Directory of DoubleDOS 2.1F

	 Volume in drive A has no label

	Directory of A:\

	IBMBIO   COM      1920
	IBMDOS   COM      6400
	COMMAND  COM     17792 10-20-83  12:00p
	READ_ME  1ST      4992 04-16-84   3:14p
	DOUBLEDO EXE     38912 02-28-85   9:13p
	DOUBLED2 PGM     23552 04-16-84   3:36p
	SWITCH   EXE      1408 04-16-84   3:22p
	SWITCH   ASM      1534 04-16-84   3:40p
	123DRIVE BAT       675 04-16-84   2:43p
	DBLDMONO DRV       798 04-05-84   2:58p
	DBLDCOLO DRV      5363 04-05-84   2:58p
	DBLDHERC DRV      5330 03-31-84   2:20p
	DBLDB&W  DRV      5363 03-31-84   2:56p
	DBLDCPQ  DRV       798 03-31-84   4:47p
	DBLDANSI SYS      1698 04-05-84   2:59p
	PRNAME8  VER        36 04-16-84   3:37p
	DOUBLED1 EXE     11264 01-01-80  12:14a
	       17 file(s)     127835 bytes

	Total files listed:
	       17 file(s)     127835 bytes
	                       25088 bytes free
