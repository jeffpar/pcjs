---
layout: page
title: COMPAQ MS-DOS 3.31
permalink: /software/pcx86/sys/dos/compaq/3.31/
redirect_from: /disks/pcx86/dos/compaq/3.31/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/compaq/deskpro386/ega/2048kb/machine.xml
    autoMount:
      A:
        name: COMPAQ MS-DOS 3.31 (Disk 1)
      B:
        name: COMPAQ MS-DOS 3.31 (Disk 2)
    autoStart: true
---

First released in 1987 by COMPAQ Computer Corp, this version of MS-DOS displays the following messages on boot:

	The COMPAQ Personal Computer MS-DOS
	Version 3.31
	
	(C) Copyright Compaq Computer Corp. 1982, 1988
	(C) Copyright Microsoft Corp. 1981, 1987

This was the first version of DOS to support 32-bit logical sector numbers, enabling partitions larger than 32Mb
and partitions that extended beyond the first 32Mb of disk space.  These features were soon added to DOS 4.0 and
OS/2 1.1 as well.

An older version of COMPAQ MS-DOS 3.31 can be found on the
[COMPAQ Diagnostics 5.08](/disks/pcx86/diags/compaq/5.08/) diskette, a 360Kb disk image from the PCjs Archives that
contains hidden MS-DOS 3.31 files dated September 1987.  The disk displays a different boot message:

    The COMPAQ Personal Computer MS-DOS 
    Version 3.31
                              
    (C) Copyright Compaq Computer Corp. 1982, 1987                             
    (C) Copyright Microsoft Corp. 1981, 1987   

making it clear that the diskette *is* a COMPAQ MS-DOS 3.31 diskette from 1987; all the other sources we've
checked only have disks from 1988 or later.

**UPDATE**: PCjs has since unearthed another diskette, [COMPAQ MS-DOS 3.31 (1987)](#directory-of-compaq-ms-dos-331-1987),
containing more 1987 binaries.

Later revisions of COMPAQ MS-DOS 3.31 were released as well.  We have archived three
"[Rev. G](#compaq-ms-dos-331-rev-g)" disks obtained from [WinWorld](https://winworldpc.com/product/ms-dos/331)
(see "Microsoft MS-DOS 3.31 [Compaq OEM Rev G] (3.5-720k)").  All the files on those disks are dated May 1990.

The `FASTART` program on Disk 1 expects a "USER PROGRAMS" disk, which we have filed under
[COMPAQ Diagnostics and Utilities](/disks/pcx86/diags/compaq/).  You could, for example, use the
"[COMPAQ User Programs (1989)](/disks/pcx86/diags/compaq/utilities/1989/)" diskette, which was part of a later
COMPAQ MS-DOS 4.01 release, since COMPAQ states that the disk "supersedes earlier versions".

[Directory Listings](#directory-of-compaq-ms-dos-331-disk-1) of the distribution diskettes are provided below.

{% include machine.html id="deskpro386" %}

### Directory of COMPAQ MS-DOS 3.31 (1987)

This disk from the [PCjs Personal Disk Collection](/disks/pcx86/personal/) is, unfortunately, not an original
distribution disk, but it's included here because it's the only available copy of other COMPAQ MS-DOS 3.31 binaries
released in 1987.

It's safe to say the following binaries were not part of the original distribution:

- EXMM.SYS (ZSoft Extended Memory Manager)
- HIMEM.SYS (DOS XMS Driver, Version 2.04 - 8/17/88)
- SMARTDRV.SYS (Microsoft SMARTDrive Disk Cache v2.10)

but, in the interest of preserving all manner of historical curiosities, we have decided to leave the disk as-is.

	 Volume in drive A has no label

	Directory of A:\

	IBMBIO   COM     23591 09-16-87  12:00p
	IBMDOS   COM     30632 09-16-87  12:00p
	COMMAND  COM     25332 09-16-87  12:00p
	EXMM     SYS      4574 11-05-86  12:07p
	ANSI     SYS      1709 09-16-87  12:00p
	CLOCK    SYS      1787 09-16-87  12:00p
	COUNTRY  SYS     11254 09-16-87  12:00p
	DISKCOPY COM      6264 09-16-87  12:00p
	DISKINIT EXE     49971 09-16-87  12:00p
	DISPLAY  SYS     11259 09-16-87  12:00p
	DRIVER   SYS      1385 09-16-87  12:00p
	ENHDISK  SYS      3321 09-16-87  12:00p
	FASTOPEN EXE      3888 09-16-87  12:00p
	FDISK    COM     54051 09-16-87  12:00p
	FORMAT   COM     13643 09-16-87  12:00p
	KEYB     COM     10868 09-16-87  12:00p
	KEYBOARD SYS     41144 09-16-87  12:00p
	MODE     COM     15159 09-16-87  12:00p
	PRINTER  SYS     13559 09-16-87  12:00p
	SYS      COM      6193 09-16-87  12:00p
	VDISK    SYS      3634 09-16-87  12:00p
	XCOPY    EXE     11216 09-16-87  12:00p
	APPEND   EXE      5794 09-16-87  12:00p
	ASSIGN   COM      1530 09-16-87  12:00p
	ATTRIB   EXE     10656 09-16-87  12:00p
	BACKUP   COM     30048 09-16-87  12:00p
	CHKDSK   COM     11923 09-16-87  12:00p
	COMP     COM      4183 09-16-87  12:00p
	DEBUG    COM     16000 09-16-87  12:00p
	DISKCOMP COM      5848 09-16-87  12:00p
	EDLIN    COM      7495 09-16-87  12:00p
	EXE2BIN  EXE      3050 09-16-87  12:00p
	FIND     EXE      6403 09-16-87  12:00p
	GRAFTABL COM      6208 09-16-87  12:00p
	GRAPHICS COM      7576 09-16-87  12:00p
	JOIN     EXE      9612 09-16-87  12:00p
	LABEL    COM      2346 09-16-87  12:00p
	LINK     EXE     39076 09-16-87  12:00p
	MORE     COM       282 09-16-87  12:00p
	PRINT    COM      8995 09-16-87  12:00p
	RECOVER  COM      5369 09-16-87  12:00p
	RESTORE  COM     35720 09-16-87  12:00p
	SHARE    EXE      8664 09-16-87  12:00p
	SORT     EXE      1946 09-16-87  12:00p
	SUBST    EXE     10552 09-16-87  12:00p
	TREE     COM      3540 09-16-87  12:00p
	WORDS              660 09-16-87  12:00p
	BASIC    COM      3532 09-16-87  12:00p
	BASICA   COM      3532 09-16-87  12:00p
	BASICA   EXE     79272 09-16-87  12:00p
	NLSFUNC  EXE      3029 09-16-87  12:00p
	REPLACE  EXE     13886 09-16-87  12:00p
	SELECT   COM      4188 09-16-87  12:00p
	SETCLOCK COM      3715 09-16-87  12:00p
	INTEREST BAS       384 09-16-87  12:00p
	4201     CPI     17089 09-16-87  12:00p
	5202     CPI       459 09-16-87  12:00p
	EGA      CPI     49065 09-16-87  12:00p
	HIMEM    SYS      6261 08-19-88  10:54a
	SMARTDRV SYS     10224 12-29-88  11:37p
	       60 file(s)     782546 bytes

	Total files listed:
	       60 file(s)     782546 bytes
	                      418304 bytes free

### Directory of COMPAQ MS-DOS 3.31 (Disk 1)

	 Volume in drive A is FASTART    

	Directory of A:\

	IBMBIO   COM     23591 10-03-88  12:00p
	IBMDOS   COM     30648 10-03-88  12:00p
	COMMAND  COM     25332 10-03-88  12:00p
	AUTOEXEC BAT        11 10-14-88  12:00p
	CONFIG   SYS        46 10-14-88  12:00p
	EXTDISK  SYS     11721 10-14-88  12:00p
	FORMAT   COM     13675 10-14-88  12:00p
	FASTART  EXE    232841 10-14-88  12:00p
	        8 file(s)     337865 bytes

	Total files listed:
	        8 file(s)     337865 bytes
	                      387072 bytes free

### Directory of COMPAQ MS-DOS 3.31 (Disk 2)

	 Volume in drive A is STARTUP    

	Directory of A:\

	IBMBIO   COM     23591 10-03-88  12:00p
	IBMDOS   COM     30648 10-03-88  12:00p
	COMMAND  COM     25332 10-03-88  12:00p
	ANSI     SYS      1709 10-03-88  12:00p
	CLOCK    SYS      1787 10-03-88  12:00p
	COUNTRY  SYS     11254 10-03-88  12:00p
	DISKCOPY COM      6264 10-03-88  12:00p
	DISKINIT EXE     55795 10-03-88  12:00p
	DISPLAY  SYS     11651 10-03-88  12:00p
	DRIVER   SYS      1385 10-03-88  12:00p
	ENHDISK  SYS      3441 10-03-88  12:00p
	FASTOPEN EXE      3888 10-03-88  12:00p
	FDISK    COM     45052 10-03-88  12:00p
	FORMAT   COM     13675 10-03-88  12:00p
	KEYB     COM     10974 10-03-88  12:00p
	KEYBOARD SYS     41144 10-03-88  12:00p
	MODE     COM     15188 10-03-88  12:00p
	PRINTER  SYS     13559 10-03-88  12:00p
	SYS      COM      6193 10-03-88  12:00p
	VDISK    SYS      3759 10-03-88  12:00p
	XCOPY    EXE     11216 10-03-88  12:00p
	       21 file(s)     337505 bytes

	Total files listed:
	       21 file(s)     337505 bytes
	                      382976 bytes free

### Directory of COMPAQ MS-DOS 3.31 (Disk 3)

	 Volume in drive A is OPERATING  

	Directory of A:\

	APPEND   EXE      5794 10-03-88  12:00p
	ASSIGN   COM      1530 10-03-88  12:00p
	ATTRIB   EXE     10656 10-03-88  12:00p
	BACKUP   COM     30048 10-03-88  12:00p
	BASIC    COM      3532 10-03-88  12:00p
	BASICA   COM      3532 10-03-88  12:00p
	BASICA   EXE     79304 10-03-88  12:00p
	CHKDSK   COM     11939 10-03-88  12:00p
	COMMAND  COM     25332 10-03-88  12:00p
	COMP     COM      4183 10-03-88  12:00p
	DEBUG    COM     16000 10-03-88  12:00p
	DISKCOMP COM      5848 10-03-88  12:00p
	DISKCOPY COM      6264 10-03-88  12:00p
	EDLIN    COM      7495 10-03-88  12:00p
	EXE2BIN  EXE      3050 10-03-88  12:00p
	FIND     EXE      6403 10-03-88  12:00p
	FORMAT   COM     13675 10-03-88  12:00p
	GRAFTABL COM      6272 10-03-88  12:00p
	GRAPHICS COM      7576 10-03-88  12:00p
	JOIN     EXE      9612 10-03-88  12:00p
	LABEL    COM      2346 10-03-88  12:00p
	LINK     EXE     39076 10-03-88  12:00p
	MORE     COM       282 10-03-88  12:00p
	NLSFUNC  EXE      3029 10-03-88  12:00p
	PRINT    COM      8995 10-03-88  12:00p
	RECOVER  COM      5385 10-03-88  12:00p
	REPLACE  EXE     13886 10-03-88  12:00p
	RESTORE  COM     35720 10-03-88  12:00p
	SELECT   COM      4188 10-03-88  12:00p
	SETCLOCK COM      3715 10-03-88  12:00p
	SHARE    EXE      8664 10-03-88  12:00p
	SORT     EXE      1946 10-03-88  12:00p
	SUBST    EXE     10552 10-03-88  12:00p
	TREE     COM      3540 10-03-88  12:00p
	XCOPY    EXE     11216 10-03-88  12:00p
	4201     CPI     17089 10-03-88  12:00p
	5202     CPI       459 10-03-88  12:00p
	EGA      CPI     49065 10-03-88  12:00p
	INTEREST BAS       384 10-03-88  12:00p
	WORDS              660 10-03-88  12:00p
	       40 file(s)     478242 bytes

	Total files listed:
	       40 file(s)     478242 bytes
	                      231424 bytes free

COMPAQ MS-DOS 3.31 (Rev. G)
---------------------------

### Directory of COMPAQ MS-DOS 3.31G (Disk 1)

     Volume in drive A is FASTART    
     Directory of A:\
    
    IBMBIO   COM     23740 05-08-90  12:00p
    IBMDOS   COM     30650 05-08-90  12:00p
    COMMAND  COM     25398 05-08-90  12:00p
    AUTOEXEC BAT        11 05-08-90  12:00p
    CONFIG   SYS        45 05-08-90  12:00p
    FASTART  EXE    227233 05-08-90  12:00p
    EXTDISK  SYS     10406 05-08-90  12:00p
            7 file(s)     317483 bytes
                          408576 bytes free

### Directory of COMPAQ MS-DOS 3.31G (Disk 2)

     Volume in drive A is STARTUP    
     Directory of A:\
    
    IBMBIO   COM     23740 05-08-90  12:00p
    IBMDOS   COM     30650 05-08-90  12:00p
    COMMAND  COM     25398 05-08-90  12:00p
    DISKCOPY COM      6850 05-08-90  12:00p
    FDISK    COM     51136 05-08-90  12:00p
    FORMAT   COM     14733 05-08-90  12:00p
    KEYB     COM     11076 05-08-90  12:00p
    MODE     COM     16618 05-08-90  12:00p
    SYS      COM      6227 05-08-90  12:00p
    FASTOPEN EXE      3888 05-08-90  12:00p
    XCOPY    EXE     11776 05-08-90  12:00p
    ANSI     SYS      2023 05-08-90  12:00p
    CLOCK    SYS      1789 05-08-90  12:00p
    COUNTRY  SYS     11254 05-08-90  12:00p
    DISPLAY  SYS     11971 05-08-90  12:00p
    DRIVER   SYS      1520 05-08-90  12:00p
    ENHDISK  SYS     10406 05-08-90  12:00p
    KEYBOARD SYS     41164 05-08-90  12:00p
    PRINTER  SYS     13751 05-08-90  12:00p
    VDISK    SYS      3768 05-08-90  12:00p
           20 file(s)     299738 bytes
                          421888 bytes free

### Directory of COMPAQ MS-DOS 3.31G (Disk 3)

     Volume in drive A is OPERATING  
     Directory of A:\
    
    APPEND   EXE      5810 05-08-90  12:00p
    ASSIGN   COM      1530 05-08-90  12:00p
    ATTRIB   EXE     10656 05-08-90  12:00p
    BACKUP   COM     30738 05-08-90  12:00p
    BASIC    COM      3534 05-08-90  12:00p
    BASICA   COM      3534 05-08-90  12:00p
    BASICA   EXE     79434 05-08-90  12:00p
    CHKDSK   COM     11941 05-08-90  12:00p
    COMMAND  COM     25398 05-08-90  12:00p
    COMP     COM      4183 05-08-90  12:00p
    DEBUG    COM     16002 05-08-90  12:00p
    DISKCOMP COM      5848 05-08-90  12:00p
    DISKCOPY COM      6850 05-08-90  12:00p
    EDLIN    COM      7495 05-08-90  12:00p
    EXE2BIN  EXE      3050 05-08-90  12:00p
    FIND     EXE      6403 05-08-90  12:00p
    FORMAT   COM     14733 05-08-90  12:00p
    GRAFTABL COM      6274 05-08-90  12:00p
    GRAPHICS COM      7578 05-08-90  12:00p
    JOIN     EXE      9612 05-08-90  12:00p
    LABEL    COM      2363 05-08-90  12:00p
    LINK     EXE     43988 05-08-90  12:00p
    MORE     COM       314 05-08-90  12:00p
    NLSFUNC  EXE      3029 05-08-90  12:00p
    PRINT    COM      9309 05-08-90  12:00p
    RECOVER  COM      5387 05-08-90  12:00p
    REPLACE  EXE     14304 05-08-90  12:00p
    RESTORE  COM     35868 05-08-90  12:00p
    SELECT   COM      4190 05-08-90  12:00p
    SETCLOCK COM      3717 05-08-90  12:00p
    SHARE    EXE      8666 05-08-90  12:00p
    SORT     EXE      1946 05-08-90  12:00p
    SUBST    EXE     10552 05-08-90  12:00p
    TREE     COM      3540 05-08-90  12:00p
    XCOPY    EXE     11776 05-08-90  12:00p
    4201     CPI     17089 05-08-90  12:00p
    5202     CPI       459 05-08-90  12:00p
    EGA      CPI     49065 05-08-90  12:00p
    INTEREST BAS       384 05-08-90  12:00p
    WORDS              660 05-08-90  12:00p
    EGA_THIN CPI     49030 05-08-90  12:00p
    LCD_THIN CPI     10618 05-08-90  12:00p
    LCD      CPI     10752 05-08-90  12:00p
           43 file(s)     557609 bytes
                          150528 bytes free

[Return to [COMPAQ MS-DOS Disks](/disks/pcx86/dos/compaq/)]
