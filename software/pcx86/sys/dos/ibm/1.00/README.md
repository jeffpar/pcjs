---
layout: page
title: IBM PC DOS 1.00
permalink: /software/pcx86/sys/dos/ibm/1.00/
redirect_from: /disks/pcx86/dos/ibm/1.00/
redirect_from:
  - /disks/pc/dos/ibm/1.00/
machines:
  - id: ibm5150-pcdos100
    type: pcx86
    config: /devices/pcx86/machine/5150/mda/64kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: None
    autoType: $date\r
---

IBM PC DOS 1.00
---------------

PC DOS 1.00 was completed in August 1981 and announced at an IBM press conference on August 12, 1981,
when IBM introduced the original IBM PC (Model 5150).  It was released on one single-sided (160Kb) diskette.
The disk's [Directory Listing](#directory-of-pc-dos-100) is provided below.
Also see IBM's original [PC DOS 1.00 Documentation](/pubs/pc/software/dos/ibm/1.00/).

You can also dig into the [PC DOS 1.00 Boot Sector](debugger/#pc-dos-100-boot-sector) using the [PCjs Debugger](debugger/).

### Directory of PC DOS 1.00

	IBMBIO    COM        1920  07-23-81
	IBMDOS    COM        6400  08-13-81
	COMMAND   COM        3231  08-04-81
	FORMAT    COM        2560  08-04-81
	CHKDSK    COM        1395  08-04-81
	SYS       COM         896  08-04-81
	DISKCOPY  COM        1216  08-04-81
	DISKCOMP  COM        1124  08-04-81
	COMP      COM        1620  08-04-81
	DATE      COM         252  08-04-81
	TIME      COM         250  08-04-81
	MODE      COM         860  08-04-81
	EDLIN     COM        2392  08-04-81
	DEBUG     COM        6049  08-04-81
	LINK      EXE       43264  08-04-81
	BASIC     COM       10880  08-04-81
	BASICA    COM       16256  08-04-81
	ART       BAS        1920  08-04-81
	SAMPLES   BAS        2432  08-04-81
	MORTGAGE  BAS        6272  08-04-81
	COLORBAR  BAS        1536  08-04-81
	BUG       BAS         640  08-04-81
	CALENDAR  BAS        3840  08-04-81
	MUSIC     BAS        4224  08-04-81
	DONKEY    BAS        3584  08-04-81
	BLUE      BAS        1152  08-04-81
	HUMOR     BAS         640  08-04-81
	POP       BAS         768  08-04-81
	FORTY     BAS         768  08-04-81
	DANDY     BAS         640  08-04-81
	MARCH     BAS         768  08-04-81
	STARS     BAS         768  08-04-81
	HAT       BAS         768  08-04-81
	SCALES    BAS         640  08-04-81
	SAKURA    BAS         512  08-04-81
	CIRCLE    BAS        1664  08-04-81
	PIECHART  BAS        2304  08-04-81
	SPACE     BAS        1920  08-04-81
	BALL      BAS        2048  08-04-81
	COMM      BAS        4352  08-04-81

CHKDSK reports:

	          40 disk files
	      160256 bytes total disk space
	        6144 bytes remain available

### Additional Information From [PC DOS Retro](https://sites.google.com/site/pcdosretro/doshist)

- distributed on 1 160KB floppy disk
- initial release (equivalent to 86-DOS 1.14)
- released with the IBM PC
- PC DOS system files are IBMBIO.COM and IBMDOS.COM, command shell is COMMAND.COM
- executable file formats are .COM and .EXE
- single-sided 160KB floppy disk support (FAT12)
- directory entries only include the date last written
- file attributes read-only (01h), hidden (02h) and system (04h) supported
- batch files (.BAT) and AUTOEXEC.BAT
- internal commands: COPY, DIR, ERASE, PAUSE, REM, RENAME, TYPE
- external commands: CHKDSK, COMP (PC DOS), DATE, DEBUG, DISKCOMP, DISKCOPY, EDLIN, FORMAT, LINK, MODE, SYS, TIME
- external commands: BASIC, BASICA (PC DOS only)
- special device names: AUX, COM1, CON, LPT1, NUL, PRN
- program loading and execution implemented in COMMAND.COM
- PSP created for each executed program
- files are opened with FCBs
- DPB structures are used for internal drive info
- INT 20h terminate program
- INT 21h DOS API functions 00h-2Dh (18h, 1Ch-20h unused)
- INT 22h termination address
- INT 23h control break handler address
- INT 24h critical error handler address
- INT 25h absolute disk read (implemented in IBMBIO.COM)
- INT 26h absolute disk write (implemented in IBMBIO.COM)
- INT 27h terminate and stay resident (implemented in COMMAND.COM)
- CP/M CALL 0 interface (executes INT 20h)
- CP/M CALL 5 interface supporting INT 21h functions 00h-24h
