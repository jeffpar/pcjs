---
layout: page
title: IBM PC DOS 3.00
permalink: /software/pcx86/sys/dos/ibm/3.00/
redirect_from: /disks/pcx86/dos/ibm/3.00/
machines:
  - id: ibm5170-pcdos300
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/ega/640kb/rev1/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 3.00 (Disk 1)
      B:
        name: PC DOS 3.00 (Disk 2)
    autoType: \r\r
---

PC DOS 3.00 was announced on August 14, 1984 and released in September 1984.

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-300-disk-1) of the two
360Kb distribution diskettes, are provided below.

{% include machine.html id="ibm5170-pcdos300" %}

### Feature Summary

New features:

- 1.2MB floppy disk support
- Hard disk support up to 32MB (original FAT16: partition type 04h)
- Redirector support
- File sharing and locking support
- Date and time set from CMOS real-time clock
- DOS swappable data area
- CDS and FCB-SFT structures
- Job file table may be relocated via new PSP fields allowing more than 20 handles
- Program loading and execution now implemented in the DOS kernel
- Fully qualified program name added to environment block
- Interrupt vectors 20h-3Fh initialized by the DOS kernel

New external commands:

- ATTRIB
- GRAFTABL
- KEYBFR, KEYBGR, KEYBIT, KEYBSP, KEYBUK
- LABEL
- SELECT
- SHARE

New CONFIG.SYS commands:

- FCBS
- LASTDRIVE
- STRING

Removed CONFIG.SYS commands:

- AVAILDEV
- SWITCHAR

New device drivers:

VDISK.SYS (PC DOS)

New functions:

- INT 21h functions 4408h-440Bh, 59h-63h
- INT 2Ah networking and critical section functions added
- INT 2Fh multiplex functions 01h (PRINT), 05h (REDIR error text), 10h (SHARE), 11h (REDIR), 12h (IBMDOS)
- Device driver command codes 0Dh-10h added

Removed functions:

- INT 21h functions 3702h-3703h

### Directory of PC DOS 3.00 (Disk 1)

	 Volume in drive A has no label
	 Directory of  A:\
	
	IBMBIO   COM     8964   7-05-84   3:00p
	IBMDOS   COM    27920   7-05-84   3:00p
	COMMAND  COM    22042   8-14-84   8:00a
	ANSI     SYS     1641   8-14-84   8:00a
	SORT     EXE     1632   8-14-84   8:00a
	SHARE    EXE     8544   8-14-84   8:00a
	FIND     EXE     6363   8-14-84   8:00a
	ATTRIB   EXE    15123   8-14-84   8:00a
	MORE     COM      320   8-14-84   8:00a
	ASSIGN   COM      988   8-14-84   8:00a
	PRINT    COM     7811   8-14-84   8:00a
	SYS      COM     3629   8-14-84   8:00a
	CHKDSK   COM     9275   8-14-84   8:00a
	FORMAT   COM     9015   8-14-84   8:00a
	VDISK    SYS     3080   8-14-84   8:00a
	BASIC    COM    17024   8-14-84   8:00a
	BASICA   COM    26880   8-14-84   8:00a
	FDISK    COM     8076   8-14-84   8:00a
	COMP     COM     3471   8-14-84   8:00a
	TREE     COM     2473   8-14-84   8:00a
	BACKUP   COM     5440   8-14-84   8:00a
	RESTORE  COM     5413   8-14-84   8:00a
	LABEL    COM     1260   8-14-84   8:00a
	DISKCOPY COM     4165   8-14-84   8:00a
	DISKCOMP COM     3752   8-14-84   8:00a
	KEYBSP   COM     2073   8-14-84   8:00a
	KEYBIT   COM     1854   8-14-84   8:00a
	KEYBGR   COM     2111   8-14-84   8:00a
	KEYBUK   COM     1760   8-14-84   8:00a
	KEYBFR   COM     2235   8-14-84   8:00a
	MODE     COM     5194   8-14-84   8:00a
	SELECT   COM     2079   8-14-84   8:00a
	GRAPHICS COM     3111   8-14-84   8:00a
	RECOVER  COM     4066   8-14-84   8:00a
	EDLIN    COM     7183   8-14-84   8:00a
	GRAFTABL COM     1169   8-14-84   8:00a
	       36 File(s)    103424 bytes free

### Directory of PC DOS 3.00 (Disk 2)

	 Volume in drive A has no label
	 Directory of  A:\
	
	LINK     EXE    45970   8-14-84   8:00a
	EXE2BIN  EXE     2752   8-14-84   8:00a
	DEBUG    COM    15237   8-14-84   8:00a
	VDISK    LST   128900   8-14-84   8:00a
	SAMPLES  BAS     3093   8-14-84   8:00a
	ART      BAS     1920   8-14-84   8:00a
	MUSIC    BAS    10291   8-14-84   8:00a
	MUSICA   BAS    15255   8-14-84   8:00a
	MORTGAGE BAS     6272   8-14-84   8:00a
	COLORBAR BAS     1536   8-14-84   8:00a
	DONKEY   BAS     3584   8-14-84   8:00a
	CIRCLE   BAS     1664   8-14-84   8:00a
	PIECHART BAS     2304   8-14-84   8:00a
	SPACE    BAS     1920   8-14-84   8:00a
	BALL     BAS     2048   8-14-84   8:00a
	COMM     BAS     4352   8-14-84   8:00a
	       16 File(s)    108544 bytes free
