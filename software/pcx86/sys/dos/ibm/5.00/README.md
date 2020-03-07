---
layout: page
title: IBM PC DOS 5.00
permalink: /software/pcx86/sys/dos/ibm/5.00/
redirect_from: /disks/pcx86/dos/ibm/5.00/
machines:
  - id: ibm5170-pcdos500
    type: pcx86
    debugger: true
    config: /devices/pcx86/machine/5170/ega/2048kb/rev3/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 5.00 (Disk 1)
      B:
        name: None
---

IBM PC DOS 5.00
---------------

PC DOS 5.00 was released in June 1991.

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-500-disk-1) of the three
720Kb distribution diskettes, are provided below.

### Feature Summary

New internal commands:

- LOADHIGH (LH)

New external commands:

- DOSKEY
- EDIT
- EMM386
- HELP
- LOADFIX
- MIRROR
- QBASIC
- SETVER
- UNDELETE
- UNFORMAT

Removed external commands:

- FILESYS
- GWBASIC
- IFSFUNC
- LINK
- SELECT

New CONFIG.SYS commands:

- DEVICEHIGH
- DOS

Removed CONFIG.SYS commands:

- CPSW
- IFS

New device drivers:

- EMM386.EXE
- HIMEM.SYS
- SETVER.EXE

Removed device drivers:

- VDISK.SYS (PC DOS)
- XMA2EMS.SYS
- XMAEM.SYS

New functions:

- INT 21h functions 3306h, 4410h-4411h, 4B05h, 5802h-5803h
- INT 2Fh multiplex functions 43h (HIMEM.SYS), 48h (DOSKEY), 4Ah (IBMBIO), 55h (COMMAND), ACh (GRAPHICS)

Removed functions:

- INT 21h functions 3303h-3304h, 3701h, 5702h-5704h, 5D0Bh, 6Bh

### Directory of PC DOS 5.00 (Disk 1)

	 Volume in drive A is DISK      1
	 Volume Serial Number is 0E37-2211
	 Directory of A:\

	IBMBIO   COM     33430 05-09-91  12:00p
	IBMDOS   COM     37378 05-09-91  12:00p
	AUTOEXEC BAT        36 05-09-91  12:00p
	COMMAND  COM     47987 05-09-91  12:00p
	CONFIG   SYS        13 05-09-91  12:00p
	COUNTRY  SYS     17686 05-09-91  12:00p
	EGA      SY_      4108 05-09-91  12:00p
	KEYB     COM     15163 05-09-91  12:00p
	KEYBOARD SYS     38206 05-09-91  12:00p
	NLSFUNC  EXE      7020 05-09-91  12:00p
	SETUP    EXE     74126 05-09-91  12:00p
	SETUP    INI      2161 05-09-91  12:00p
	CV       COM       716 05-09-91  12:00p
	DISPLAY  SY_     11177 05-09-91  12:00p
	EGA      CP_     19694 05-09-91  12:00p
	HIMEM    SY_      7888 05-09-91  12:00p
	MODE     CO_     16867 05-09-91  12:00p
	SETVER   EX_      7445 05-09-91  12:00p
	ANSI     SY_      7177 05-09-91  12:00p
	DEBUG    CO_     16897 05-09-91  12:00p
	EDLIN    CO_     10430 05-09-91  12:00p
	EMM386   EX_     47563 05-09-91  12:00p
	FASTOPEN EX_      8914 05-09-91  12:00p
	FDISK    COM     57304 05-09-91  12:00p
	FORMAT   COM     32911 05-09-91  12:00p
	MIRROR   CO_     12781 05-09-91  12:00p
	RAMDRIVE SY_      3737 05-09-91  12:00p
	SHARE    EX_      9295 05-09-91  12:00p
	SMARTDRV SY_      6289 05-09-91  12:00p
	SYS      CO_      9665 05-09-91  12:00p
	UNDELETE EX_      9393 05-09-91  12:00p
	UNFORMAT COM     18576 05-09-91  12:00p
	XCOPY    EX_     11865 05-09-91  12:00p
	       33 file(s)     603898 bytes
	                      106496 bytes free

### Directory of PC DOS 5.00 (Disk 2)

	 Volume in drive A is DISK      2
	 Volume Serial Number is 6319-0212
	 Directory of A:\

	DOSKEY   CO_      4729 05-09-91  12:00p
	CGA      GR_      1768 05-09-91  12:00p
	CGA      IN_      3335 05-09-91  12:00p
	CGA      VI_      6920 05-09-91  12:00p
	DOSSHELL CO_      2218 05-09-91  12:00p
	DOSSHELL EX_    155861 05-09-91  12:00p
	DOSSWAP  EX_     15487 05-09-91  12:00p
	EGA      GR_      2729 05-09-91  12:00p
	EGA      IN_      3336 05-09-91  12:00p
	EGA      VI_      7012 05-09-91  12:00p
	EGAMONO  GR_      2564 05-09-91  12:00p
	HERC     GR_      1809 05-09-91  12:00p
	HERC     VI_      6998 05-09-91  12:00p
	MONO     GR_       301 05-09-91  12:00p
	MONO     IN_      2992 05-09-91  12:00p
	PACKING  LST      2548 05-09-91  12:00p
	PRINT    CO_     11032 05-09-91  12:00p
	VGA      GR_      3593 05-09-91  12:00p
	VGA      VI_      7238 05-09-91  12:00p
	VGAMONO  GR_      3605 05-09-91  12:00p
	APPNOTES TXT      8494 05-09-91  12:00p
	DOSHELP  HL_      2837 05-09-91  12:00p
	DOSSHELL HL_     54369 05-09-91  12:00p
	EDIT     HL_     17322 05-09-91  12:00p
	HELP     EX_      8537 05-09-91  12:00p
	RECOVER  CO_      7526 05-09-91  12:00p
	QBASIC   HL_    122321 05-09-91  12:00p
	EDIT     COM       413 05-09-91  12:00p
	MONEY    BA_     14912 05-09-91  12:00p
	MSHERC   CO_      4444 05-09-91  12:00p
	QBASIC   EX_    212408 05-09-91  12:00p
	       31 file(s)     699658 bytes
	                       14336 bytes free

### Directory of PC DOS 5.00 (Disk 3)

	 Volume in drive A is DISK      3
	 Volume Serial Number is 0F02-2411
	 Directory of A:\

	GORILLA  BA_     11957 05-09-91  12:00p
	4201     CP_      7938 05-09-91  12:00p
	4208     CP_       375 05-09-91  12:00p
	5202     CP_       352 05-09-91  12:00p
	PPDS     CP_       316 05-09-91  12:00p
	APPEND   EX_      8466 05-09-91  12:00p
	ASSIGN   CO_      5213 05-09-91  12:00p
	ATTRIB   EX_     11802 05-09-91  12:00p
	BACKUP   CO_     25729 05-09-91  12:00p
	CHKDSK   CO_     12699 05-09-91  12:00p
	COMP     CO_     10513 05-09-91  12:00p
	DISKCOMP CO_      7650 05-09-91  12:00p
	DISKCOPY CO_      8389 05-09-91  12:00p
	DRIVER   SY_      4571 05-09-91  12:00p
	FC       EX_     13505 05-09-91  12:00p
	FIND     EX_      5547 05-09-91  12:00p
	GRAFTABL CO_      8120 05-09-91  12:00p
	GRAPHICS CO_     12896 05-09-91  12:00p
	LABEL    CO_      6929 05-09-91  12:00p
	MORE     CO_      2311 05-09-91  12:00p
	NIBBLES  BA_      8242 05-09-91  12:00p
	REMLINE  BA_      4999 05-09-91  12:00p
	RESTORE  CO_     26090 05-09-91  12:00p
	SORT     EX_      4982 05-09-91  12:00p
	WINA20   38_      3214 05-09-91  12:00p
	EXE2BIN  EX_      6882 05-09-91  12:00p
	EXPAND   EXE     14563 05-09-91  12:00p
	GRAPHICS PR_      5186 05-09-91  12:00p
	JOIN     EX_     13908 05-09-91  12:00p
	LOADFIX  CO_       704 05-09-91  12:00p
	PRINTER  SY_     12449 05-09-91  12:00p
	README   TXT     12856 05-09-91  12:00p
	REPLACE  EX_     14419 05-09-91  12:00p
	SUBST    EX_     14503 05-09-91  12:00p
	TREE     CO_      5437 05-09-91  12:00p
	MEM      EX_     29716 05-09-91  12:00p
	MOUSE    CO_     19218 05-09-91  12:00p
	CMOSCLK  SY_       925 05-09-91  12:00p
	BASIC    CO_       545 05-09-91  12:00p
	BASICA   CO_     59013 05-09-91  12:00p
	MEUTOINI EX_     25693 05-09-91  12:00p
	AUTOCONF EX_     17246 05-09-91  12:00p
	KEYBGK   COM     15880 05-09-91  12:00p
	KEYBOARD SYS     38206 05-09-91  12:00p
	EGAX     CP_     14101 05-09-91  12:00p
	       45 file(s)     534255 bytes
	                      169984 bytes free
