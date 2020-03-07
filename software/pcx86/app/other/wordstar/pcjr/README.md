---
layout: page
title: MicroPro WordStar for PCjr
permalink: /software/pcx86/app/other/wordstar/pcjr/
redirect_from: /disks/pcx86/apps/other/wordstar/pcjr/
machines:
  - id: ibm5150
    type: pcx86
    config: /devices/pcx86/machine/5150/cga/256kb/machine.xml
    autoMount:
      A:
        name: PC DOS 2.10 (Disk 1)
      B:
        name: WordStar for PCjr (Disk 1)
    autoStart: true
    autoType: $date\r$time\rB:\rWS\r
---

MicroPro WordStar for PCjr
--------------------------

[Directory Listings](#directory-of-wordstar-for-pcjr-disk-1) of the double-sided (360Kb) WordStar for PCjr diskettes
are provided below.  The disk images were obtained from [WinWorld](https://winworldpc.com/product/wordstar/for-pcjr).

It's worth noting that, despite being called "WordStar for PCjr", this version of WordStar appears to work fine on non-PCjr
configurations, including the one below, which also has twice the memory (256Kb) that the PCjr supported (128Kb).  We've
taken care to boot [PC DOS 2.10](/disks/pcx86/dos/ibm/2.10/) for this demo, because it's possible that WordStar for PCjr has
some dependencies on that version of DOS (since the PCjr required PC DOS 2.10 or later).

We have also included another variation of the WordStar for PCjr binary (`WS.EXE`) on
[Disk 1](#directory-of-wordstar-for-pcjr-disk-1), exactly as it was provided to us by a former MicroPro employee.  It
is slightly smaller than the "official" PCjr binary (`WSU.EXE`), but given WordStar's propensity for "patching", and the
fact that both files have dates well past the apparent release date of August 17, 1984, it's not clear to what extent
*either* of the programs on Disk 1 can be considered "official".

### Directory of WordStar for PCjr (Disk 1)

	 Volume in drive A has no label
	 Directory of A:\

	WSU      EXE     87792 07-30-87   7:50p
	MATRIX2  TST      3840 08-17-84   8:41a
	MATRIX1  TST      3840 08-17-84   8:41a
	DAISY    TST      3840 08-17-84   8:41a
	WS       PIC     16392 08-17-84   8:41a
	WS       INS     57216 08-17-84   8:41a
	WINSTALL EXE     40960 08-17-84   8:41a
	WS       EXE     87680 12-26-17   2:07p
	        8 file(s)     301560 bytes
	                       58368 bytes free

### Directory of WordStar for PCjr (Disk 2)

	 Volume in drive A has no label
	 Directory of A:\

	FEARNOT  COM     11008 08-17-84   5:06p
	FEARNOT  OVR     38400 08-17-84   5:06p
	WSTUTOR  COM     11008 08-17-84   5:06p
	WSTUTOR  OVR     44032 08-17-84   5:06p
	WSTUTOR1 COM     11008 08-17-84   5:06p
	WST1     OVR     48896 08-17-84   5:06p
	WSTUTOR2 COM     11008 08-17-84   5:06p
	WST2     OVR     40064 08-17-84   5:06p
	TUTOR    INS       512 08-17-84   5:06p
	        9 file(s)     215936 bytes
	                      143360 bytes free

### Directory of WordStar for PCjr (Disk 3)

	 Volume in drive A has no label
	 Directory of A:\

	WSTUTOR3 COM     11008 08-17-84   5:10p
	WST3     OVR     55168 08-17-84   5:10p
	WSTUTOR4 COM     11008 08-17-84   5:10p
	WST4     OVR     34688 08-17-84   5:10p
	WSTUTOR5 COM     11008 08-17-84   5:10p
	WST5     OVR     42752 08-17-84   5:10p
	WSTUTOR6 COM     11008 08-17-84   5:10p
	WST6     OVR     44672 08-17-84   5:10p
	TUTOR    INS       512 08-17-84   5:10p
	        9 file(s)     221824 bytes
	                      138240 bytes free
