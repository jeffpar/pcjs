---
layout: page
title: IBM PC DOS 2.00
permalink: /software/pcx86/sys/dos/ibm/2.00/
redirect_from: /disks/pcx86/dos/ibm/2.00/
machines:
  - id: ibm5160-pcdos200
    type: pcx86
    config: /devices/pcx86/machine/5160/cga/256kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: PC DOS 2.00 (Disk 2)
    autoType: $date\r$time\r
---

IBM PC DOS 2.00
---------------

PC DOS 2.00 was released in March 1983.

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-200-disk-1) of the two
360Kb distribution diskettes, are provided below.

### Feature Summary

New features:

- Subdirectory support
- Volume label support
- Device driver support (device driver command codes 00h-0Ch)
- File handle support
- I/O redirection support
- Simple memory management and MCBs
- Environment variables (COMMAND.COM uses COMSPEC, PATH and PROMPT)
- BIOS parameter block (BPB) support
- 180KB single-sided and 360KB double-sided floppy disk support
- Hard disk support up to 10MB (FAT12: partition type 01h)
- File attributes: volume label (08h), subdirectory (10h) and archive (20h)
- Zero byte indicates end of directory to speed up searches
- Print spooler
- Internal block device driver for disks
- Parent PSP segment, job file table and environment segment added to PSP
- Current directories are appended to each DPB
- SYSVARS and SFT structures
- Disk buffering

New CONFIG.SYS commands:

- AVAILDEV
- BREAK
- BUFFERS
- DEVICE
- FILES
- SHELL
- SWITCHAR

New internal commands:

- BREAK
- CHDIR (CD)
- CLS
- CTTY
- ECHO
- EXIT
- FOR
- GOTO
- IF
- MKDIR (MD)
- PATH
- PROMPT
- RMDIR (RD)
- SET
- SHIFT
- VER
- VERIFY
- VOL

New external commands:

- ASSIGN
- BACKUP
- FDISK
- FIND
- GRAPHICS
- MORE
- PRINT
- RECOVER
- RESTORE
- SORT
- TREE

New internal character devices:

- AUX
- CLOCK$
- COM1
- COM2
- CON
- LPT1
- LPT2
- LPT3
- NUL
- PRN

New device drivers:

- ANSI.SYS

New functions:

- INT 21h functions 2Fh-57h
- INT 21h function 4Bh (execute or load program) implemented in COMMAND.COM
- INT 25h, INT 26h, INT 27h now implemented in the DOS kernel
- INT 28h idle call
- INT 29h fast console output
- INT 2Eh reload transient (COMMAND.COM)
- INT 2Fh PRINT support

### Directory of PC DOS 2.00 (Disk 1)

	 Volume in drive A has no label
	 Directory of  A:\
	
	IBMBIO   COM     4608   3-08-83  12:00p
	IBMDOS   COM    17152   3-08-83  12:00p
	COMMAND  COM    17664   3-08-83  12:00p
	ANSI     SYS     1664   3-08-83  12:00p
	FORMAT   COM     6016   3-08-83  12:00p
	CHKDSK   COM     6400   3-08-83  12:00p
	SYS      COM     1408   3-08-83  12:00p
	DISKCOPY COM     2444   3-08-83  12:00p
	DISKCOMP COM     2074   3-08-83  12:00p
	COMP     COM     2523   3-08-83  12:00p
	EDLIN    COM     4608   3-08-83  12:00p
	MODE     COM     3139   3-08-83  12:00p
	FDISK    COM     6177   3-08-83  12:00p
	BACKUP   COM     3687   3-08-83  12:00p
	RESTORE  COM     4003   3-08-83  12:00p
	PRINT    COM     4608   3-08-83  12:00p
	RECOVER  COM     2304   3-08-83  12:00p
	ASSIGN   COM      896   3-08-83  12:00p
	TREE     COM     1513   3-08-83  12:00p
	GRAPHICS COM      789   3-08-83  12:00p
	SORT     EXE     1280   3-08-83  12:00p
	FIND     EXE     5888   3-08-83  12:00p
	MORE     COM      384   3-08-83  12:00p
	BASIC    COM    16256   3-08-83  12:00p
	BASICA   COM    25984   3-08-83  12:00p
	       25 File(s)     31232 bytes free

### Directory of PC DOS 2.00 (Disk 2)

	 Volume in drive A has no label
	 Directory of  A:\
	
	EXE2BIN  EXE     1664   3-08-83  12:00p
	LINK     EXE    39936   3-08-83  12:00p
	DEBUG    COM    11904   3-08-83  12:00p
	ART      BAS     1920   3-08-83  12:00p
	SAMPLES  BAS     2304   3-08-83  12:00p
	MORTGAGE BAS     6272   3-08-83  12:00p
	COLORBAR BAS     1536   3-08-83  12:00p
	MUSIC    BAS     8704   3-08-83  12:00p
	DONKEY   BAS     3584   3-08-83  12:00p
	CIRCLE   BAS     1664   3-08-83  12:00p
	PIECHART BAS     2304   3-08-83  12:00p
	SPACE    BAS     1920   3-08-83  12:00p
	BALL     BAS     2048   3-08-83  12:00p
	COMM     BAS     4352   3-08-83  12:00p
	       14 File(s)     87040 bytes free
