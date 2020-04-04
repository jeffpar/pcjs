---
layout: page
title: COMPAQ MS-DOS 1.11
permalink: /software/pcx86/sys/dos/compaq/1.11/
redirect_from: /disks/pcx86/dos/compaq/1.11/
machines:
  - id: ibm5150-compaq111
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/mda/256kb/debugger/machine.xml
    autoMount:
      A:
        name: COMPAQ MS-DOS 1.11
      B:
        name: None
    autoType: $date\r$time\r
---

Released in 1983 by COMPAQ Computer Corp, this version of MS-DOS reports itself as:

	The COMPAQ Personal Computer DOS
	Version 1.11
	
	
	(C) Copyright COMPAQ Computer Corp. 1982
	(C) Copyright Microsoft 1981, 82

To learn more about this double-sided 320Kb diskette, see the
[Directory Listing](#directory-of-compaq-ms-dos-111) and [Boot Sector](#compaq-ms-dos-111-boot-sector) below.

{% include machine.html id="ibm5150-compaq111" %}

### Directory of COMPAQ MS-DOS 1.11

	 Volume in drive A has no label

	Directory of A:\

	IOSYS    COM      1998 05-13-83  12:00p
	MSDOS    COM      6136 05-13-83  12:00p
	COMMAND  COM      4959 05-13-83  12:00p
	LINK     EXE     41856 05-13-83  12:00p
	EDLIN    COM      2432 05-13-83  12:00p
	SYS      COM       645 05-13-83  12:00p
	DEBUG    COM      6619 05-13-83  12:00p
	BASIC    COM       549 05-13-83  12:00p
	BASICA   COM       547 05-13-83  12:00p
	FORMAT   COM      3296 05-13-83  12:00p
	EXE2BIN  EXE      1280 05-13-83  12:00p
	DISKCOPY COM      1812 05-13-83  12:00p
	DISKCOMP COM      1291 05-13-83  12:00p
	MODE     COM      1800 05-13-83  12:00p
	CHKDSK   COM      1720 05-13-83  12:00p
	COMP     COM      1484 05-13-83  12:00p
	WORDS             1242 05-13-83  12:00p
	BASICA   EXE     54272 05-13-83  12:00p
	TEST     EXE     18560 05-13-83  12:00p
	DEMO     BAT        14 05-13-83  12:00p
	DEMO     BAS      7808 05-13-83  12:00p
	DEMO1    BAS     17920 05-13-83  12:00p
	DEMO2    BAS     17792 05-13-83  12:00p
	DEMO3    BAS     21120 05-13-83  12:00p
	DEMO4    BAS      6528 05-13-83  12:00p
	JUGGLER  DAT     16128 05-13-83  12:00p
	USA      DAT     16128 05-13-83  12:00p
	INTEREST BAS       384 05-13-83  12:00p
	       28 file(s)     256320 bytes

	Total files listed:
	       28 file(s)     256320 bytes
	                       53248 bytes free

One curiosity regarding this disk are the BASIC files.  **BASIC.COM** and **BASICA.COM** are nothing more than
tiny programs to load **BASICA.EXE**, a stand-alone version of BASIC that doesn't require any BASIC ROMs.  And
**BASICA.EXE** reports a version number that differs from the DOS version: 

	The COMPAQ Personal Computer BASIC
	Version 1.13
	(C) Copyright COMPAQ Computer Corp. 1983

### COMPAQ MS-DOS 1.11 Boot Sector

The boot sector of the COMPAQ MS-DOS 1.11 disk image contains the following bytes:

	00000000  fa bc e7 01 b8 c0 07 8e  d0 fb 8e d8 8e c0 33 c0  |..............3.|
	00000010  cd 13 b8 01 02 bb 00 02  b9 04 00 33 d2 e8 8b 00  |...........3....|
	00000020  eb 1c bb da 00 8a 07 3c  24 74 0c 53 b4 0e bb 07  |.......<$t.S....|
	00000030  00 cd 10 5b 43 eb ee 33  c0 cd 16 eb c3 c3 fc 8b  |...[C..3........|
	00000040  f3 bf c4 00 b9 0b 00 f3  a6 75 d7 83 c6 15 b9 0b  |.........u......|
	00000050  00 f3 a6 75 cd b8 01 02  bb 00 02 b9 02 00 33 d2  |...u..........3.|
	00000060  e8 48 00 8a 27 80 fc fe  be 26 01 74 0a 80 fc ff  |.H..'....&.t....|
	00000070  74 02 eb ae be 3c 01 b8  60 00 50 07 8b 04 33 db  |t....<..`.P...3.|
	00000080  8b 4c 02 8b 54 04 e8 22  00 8b 44 06 03 5c 08 8b  |.L..T.."..D..\..|
	00000090  4c 0a 8b 54 0c e8 13 00  8b 44 0e 03 5c 10 8b 4c  |L..T.....D..\..L|
	000000a0  12 8b 54 14 e8 04 00 ff  2e 52 01 bf 05 00 57 50  |..T......R....WP|
	000000b0  cd 13 72 03 58 58 c3 33  c0 cd 13 58 5f 4f 75 ee  |..r.XX.3...X_Ou.|
	000000c0  58 e9 5e ff 49 4f 53 59  53 20 20 20 43 4f 4d 4d  |X.^.IOSYS   COMM|
	000000d0  53 44 4f 53 20 20 20 43  4f 4d 0a 0d 4e 6f 6e 2d  |SDOS   COM..Non-|
	000000e0  53 79 73 74 65 6d 20 64  69 73 6b 20 6f 72 20 64  |System disk or d|
	000000f0  69 73 6b 20 65 72 72 6f  72 0a 0d 52 65 70 6c 61  |isk error..Repla|
	00000100  63 65 20 61 6e 64 20 73  74 72 69 6b 65 20 61 6e  |ce and strike an|
	00000110  79 20 6b 65 79 20 77 68  65 6e 20 72 65 61 64 79  |y key when ready|
	00000120  0a 0d 24 47 41 53 01 02  08 00 00 00 08 02 00 02  |..$GAS..........|
	00000130  01 01 00 00 08 02 00 10  01 02 00 00 06 02 03 00  |................|
	00000140  00 01 08 02 00 0c 01 01  00 00 03 02 00 10 01 01  |................|
	00000150  00 01 00 00 60 00 28 43  29 43 6f 70 79 72 69 67  |....`.(C)Copyrig|
	00000160  68 74 20 43 4f 4d 50 41  51 20 43 6f 6d 70 75 74  |ht COMPAQ Comput|
	00000170  65 72 20 43 6f 72 70 6f  72 61 74 69 6f 6e 20 31  |er Corporation 1|
	00000180  39 38 32 00 00 00 00 00  00 00 00 00 00 00 00 00  |982.............|
	00000190  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001a0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001b0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001c0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001e0  00 00 00 00 00 00 00 e7  01 00 00 00 00 00 00 00  |................|
	000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|

It is identical to the [COMPAQ MS-DOS 1.10 Boot Sector](../1.10/#compaq-ms-dos-110-boot-sector),
so refer to that page for more information.
