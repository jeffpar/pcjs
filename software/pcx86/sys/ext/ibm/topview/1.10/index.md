---
layout: page
title: IBM TopView 1.10
permalink: /software/pcx86/sys/ext/ibm/topview/1.10/
redirect_from: /disks/pcx86/apps/ibm/topview/1.10/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/640kb/mouse/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: IBM TopView 1.10
    autoType: $date\r$time\rB:\rSETUP\r$70y \r$20.1\r
---

The machine below is configured to automatically start TopView 1.10 on top of PC DOS 2.00.  No mouse driver is loaded,
so you must use TopView's "Keyboard Mouse" support: arrow keys move the cursor and **Home**, **PgUp**, and **Alt**
act as mouse buttons.  The machine is also available with the [PCjs Debugger](debugger/).

While TopView 1.01 ran with Keyboard support enabled "out of the box," TopView 1.10 appears to require some configuration,
which is why the `SETUP` batch file is run first.

NOTE: This disk image is from the PCjs disk collection.  Presumably, as in [TopView 1.01](../1.01/), there was a
second (Tutorial) disk, but we don't have a copy of it.  The machine below is also available with the [PCjs Debugger](debugger/).

{% include machine.html id="ibm5160" %}

### Directory of IBM TopView 1.10

	 Volume in drive A is TVP022086  
	 Directory of  A:\
	
	TV       PIF     9909   2-20-86  12:00p
	TV       PII     1001   2-20-86  12:00p
	ADD      EXT    21248   2-20-86  12:00p
	ATRIBUTE DEF       32   2-20-86  12:00p
	AUTOPIF           369   2-20-86  12:00p
	AUTORUN  COM     1652   2-20-86  12:00p
	BATCHPGM COM     3420   2-20-86  12:00p
	CHANGE   EXT    13056   2-20-86  12:00p
	CRITERR  MSG     1171   2-20-86  12:00p
	DELETE   EXT     7936   2-20-86  12:00p
	DOS      EXT    37632   2-20-86  12:00p
	DOSCMDS  DEF      600   2-20-86  12:00p
	DOSHELP  PLB     6417   2-20-86  12:00p
	DW1      TBL       51   2-20-86  12:00p
	FD       BAT     9158   2-20-86  12:00p
	FDPGM    COM     1480   2-20-86  12:00p
	FDR      BAT       46   2-20-86  12:00p
	FDTUT    BAT    10011   2-20-86  12:00p
	FILTER   EXT     3930   2-20-86  12:00p
	G        BAT       28   6-29-87  11:31a
	GROUP    EXT    19456   2-20-86  12:00p
	GROUP    HLP     3019   2-20-86  12:00p
	GROUP    PNL     3992   2-20-86  12:00p
	PDIO     EXT     3410   6-29-87  11:31a
	PDIOKEYB EXT     3328   2-20-86  12:00p
	PDIOMICP EXT     3410   2-20-86  12:00p
	PDIOMICS EXT     3404   2-20-86  12:00p
	PDIOMSY1 EXT     3168   2-20-86  12:00p
	PDIOVIS1 EXT     3409   2-20-86  12:00p
	PE       TBL       44   2-20-86  12:00p
	PRINTFAC PLB     1211   2-20-86  12:00p
	PROFED   TBL       65   2-20-86  12:00p
	PROGRAMS COM    12800   2-20-86  12:00p
	PROGRAMS HLP     7041   2-20-86  12:00p
	SETSYS   EXT    18944   2-20-86  12:00p
	SETUP    BAT      139   6-29-87  11:31a
	SYSTEM             84   2-20-86  12:00p
	TUTORPIF          369   2-20-86  12:00p
	TV       COM    39168   2-20-86  12:00p
	TV       EXT    15648   2-20-86  12:00p
	TVDP     EXT    52263   2-20-86  12:00p
	TVPRINT  COM     1551   2-20-86  12:00p
	WA       TBL       56   2-20-86  12:00p
	WELCMPIF          369   2-20-86  12:00p
	WELCOME  EXT     2560   2-20-86  12:00p
	       45 File(s)      8192 bytes free
