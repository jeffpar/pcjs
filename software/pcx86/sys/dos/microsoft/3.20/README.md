---
layout: page
title: Microsoft MS-DOS 3.20
permalink: /software/pcx86/sys/dos/microsoft/3.20/
redirect_from: /disks/pcx86/dos/microsoft/3.20/
redirect_from:
  - /disks/pc/dos/microsoft/3.20/
machines:
  - id: ibm5170-msdos320
    type: pcx86
    config: /configs/pcx86/xml/machine/5170/ega/640kb/rev1/machine.xml
    autoMount:
      A:
        name: MS-DOS 3.20 (Disk 1)
---

Microsoft MS-DOS 3.20
---------------------

The MS-DOS 3.20 disks in the PCjs collection are the only known non-OEM copies of that release
available online.  All other known MS-DOS 3.20 disk images are OEM releases (eg, HP, Zenith, Data General,
Seiko Epson, etc.) and can be found on sites like [WinWorld](https://winworldpc.com/product/ms-dos/320).

See the [PC DOS 3.20 Feature Summary](/disks/pcx86/dos/ibm/3.20/#feature-summary) for more details.

[Directory Listings](#directory-listings) of the four 360Kb distribution diskettes are provided below.

{% include machine.html id="ibm5170-msdos320" %}

### Directory Listings

Disks 3 and 4 contained a printed date of `March 21, 1986` (see the photo below), which is consistent with
the file timestamps (`2-14-86` and `3-14-86`) on those disks.  However, all the files on Disks 1 and 2 are
timestamped `7-07-86`.  Apparently, the Programmer's Reference files were finalized several months in advance
of the final MS-DOS 3.20 binaries.

Based on the dates of the binaries, **July 7, 1986** is considered the release date of MS-DOS 3.20.

NOTE: Disks 1 and 2 are restored versions of the original disks, since the original disks had been slightly
modified for personal use.  The disks should be complete, and all files should be genuine and in the original
order.  As proof, the following data from Disk 1:

	00013db0  0d 0a 0d 0a 4d 69 63 72  6f 73 6f 66 74 28 52 29  |....Microsoft(R)|
	00013dc0  20 4d 53 2d 44 4f 53 28  52 29 20 20 56 65 72 73  | MS-DOS(R)  Vers|
	00013dd0  69 6f 6e 20 33 2e 32 30  0d 0a 20 20 20 20 20 20  |ion 3.20..      |
	00013de0  20 20 20 20 20 20 20 28  43 29 43 6f 70 79 72 69  |       (C)Copyri|
	00013df0  67 68 74 20 4d 69 63 72  6f 73 6f 66 74 20 43 6f  |ght Microsoft Co|
	00013e00  72 70 20 31 39 38 31 2d  31 39 38 36 0d 0a 0d 0a  |rp 1981-1986....|

matches the data listed at [16bitos.com](http://16bitos.com/320ms.htm), as do the MD5 checksums of IO.SYS,
MSDOS.SYS and COMMAND.COM.

### Directory of MS-DOS 3.20 (Disk 1)

	 Volume in drive A has no label
	 Directory of  A:\
	
	IO       SYS    16138   7-07-86  12:00p
	MSDOS    SYS    28480   7-07-86  12:00p
	ANSI     SYS     1651   7-07-86  12:00p
	APPEND   COM     1725   7-07-86  12:00p
	ASSIGN   COM     1523   7-07-86  12:00p
	ATTRIB   EXE     8234   7-07-86  12:00p
	CHKDSK   EXE     9680   7-07-86  12:00p
	COMMAND  COM    23612   7-07-86  12:00p
	DISKCOMP EXE     3808   7-07-86  12:00p
	DISKCOPY EXE     4096   7-07-86  12:00p
	DRIVER   SYS     1102   7-07-86  12:00p
	EDLIN    EXE     7356   7-07-86  12:00p
	EXE2BIN  EXE     3050   7-07-86  12:00p
	FC       EXE    14558   7-07-86  12:00p
	FDISK    EXE    16830   7-07-86  12:00p
	FIND     EXE     6403   7-07-86  12:00p
	FORMAT   EXE    11005   7-07-86  12:00p
	GRAFTABL EXE     8210   7-07-86  12:00p
	GRAPHICS EXE    13170   7-07-86  12:00p
	JOIN     EXE     9012   7-07-86  12:00p
	KEYBDV   EXE     2886   7-07-86  12:00p
	KEYBFR   EXE     2948   7-07-86  12:00p
	KEYBGR   EXE     2940   7-07-86  12:00p
	KEYBIT   EXE     2892   7-07-86  12:00p
	KEYBSP   EXE     2983   7-07-86  12:00p
	KEYBUK   EXE     2886   7-07-86  12:00p
	LABEL    EXE     2750   7-07-86  12:00p
	MODE     EXE    13928   7-07-86  12:00p
	MORE     COM      282   7-07-86  12:00p
	PRINT    EXE     8824   7-07-86  12:00p
	RAMDRIVE SYS     6462   7-07-86  12:00p
	RECOVER  EXE     4145   7-07-86  12:00p
	REPLACE  EXE     4852   7-07-86  12:00p
	SORT     EXE     1898   7-07-86  12:00p
	SUBST    EXE     9898   7-07-86  12:00p
	SYS      COM     4607   7-07-86  12:00p
	       36 File(s)     81920 bytes free

### Directory of MS-DOS 3.20 (Disk 2)

	 Volume in drive A has no label
	 Directory of  A:\
	
	BACKUP   EXE    23404   7-07-86  12:00p
	DEBUG    EXE    15647   7-07-86  12:00p
	GWBASIC  EXE    78864   7-07-86  12:00p
	LINK     EXE    43988   7-07-86  12:00p
	RESTORE  EXE    21750   7-07-86  12:00p
	SHARE    EXE     8544   7-07-86  12:00p
	TREE     EXE     8588   7-07-86  12:00p
	XCOPY    EXE     5396   7-07-86  12:00p
	        8 File(s)    151552 bytes free

### Directory of MS-DOS 3.20 (ProgRef 1)

	 Volume in drive A is MS320DOC03 
	 Directory of  A:\
	
	PROGREF1 DOC   357451   2-14-86  12:00a
	        1 File(s)         0 bytes free

### Directory of MS-DOS 3.20 (ProgRef 2)

	 Volume in drive A is MS320DOC04 
	 Directory of  A:\
	
	PROGREF2 DOC   305536   3-14-86   9:44a
	        1 File(s)     56320 bytes free

Surprisingly Bad Bug in MS-DOS 3.20
-----------------------------------

If you attempt to boot MS-DOS 3.20 on an [IBM PC Model 5150](/devices/pcx86/machine/5150/cga/384kb/debugger/)
(with either an MDA or CGA video card), the machine will appear to crash after printing the first character.

When MS-DOS 3.20 prints characters to the screen, it uses this code:

	0287:1FA8 CD29            INT      29                   ;history=7
	0070:017A 50              PUSH     AX                   ;history=6
	0070:017B 56              PUSH     SI                   ;history=5
	0070:017C 57              PUSH     DI                   ;history=4
	0070:017D 55              PUSH     BP                   ;history=3
	0070:017E B40E            MOV      AH,0E                ;history=2
	0070:0180 B307            MOV      BL,07                ;history=1
	0070:0182 CD10            INT      10
	AX=0E43 BX=0B07 CX=0010 DX=0000 SP=0862 BP=36FE SI=00D3 DI=000B 
	SS=0287 DS=0287 ES=0287 PS=F012 V0 D0 I0 T0 S0 Z0 A1 P0 C0 

whereas MS-DOS 3.30 uses this code:

	022F:222E CD29            INT      29                   ;history=10
	0070:069E 50              PUSH     AX                   ;history=9
	0070:069F 56              PUSH     SI                   ;history=8
	0070:06A0 57              PUSH     DI                   ;history=7
	0070:06A1 55              PUSH     BP                   ;history=6
	0070:06A2 53              PUSH     BX                   ;history=5
	0070:06A3 B40E            MOV      AH,0E                ;history=4
	0070:06A5 B700            MOV      BH,00                ;history=3
	0070:06A7 B307            MOV      BL,07                ;history=2
	0070:06A9 CD10            INT      10                   ;history=1

MS-DOS 3.20 doesn't clear the BH register before calling INT 0x10 Video BIOS function 0x0E, and the Model 5150 Video
BIOS uses the BH register to select the video page, so when BH contains garbage (0x0B in the above example), it prints
characters off-screen, where they can’t be seen.

As a result, the machine hasn't technically "crashed", but it's printing characters where they can't be seen, making
the machine more or less unusable.

Starting with the IBM PC Model 5160, Video BIOS function 0x0E ignores BH and always use the current page.

Microsoft must not have tested MS-DOS 3.20 on any 5150 machines, or if they did, those machines must have contained
upgraded video cards, such as an EGA, which provided their own Video BIOS.  This bug was fixed in MS-DOS 3.21,
but that release apparently wasn't made available until almost a year later (MS-DOS 3.21 files are timestamped
`5-01-87`).

MS-DOS 3.20 Photos
------------------

Here's what one of the MS-DOS 3.20 diskettes looked like.

> [![MS-DOS 3.20 Programmer's Reference](MSDOS320-DISK3-PROGREF1-thumb.jpg)]({{ site.software.diskettes.server }}/pcx86/sys/dos/microsoft/3.20/MSDOS320-DISK3-PROGREF1.jpg)

And the box, courtesy of [www.oldcomputermuseum.com](http://www.oldcomputermuseum.com/os/msdos_3.2.html).

> ![MS-DOS 3.20 Box](MSDOS320-BOX.jpg)
