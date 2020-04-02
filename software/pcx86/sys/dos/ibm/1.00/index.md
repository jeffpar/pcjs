---
layout: page
title: IBM PC DOS 1.00
permalink: /software/pcx86/sys/dos/ibm/1.00/
redirect_from:
  - /disks/pcx86/dos/ibm/1.00/
  - /disks/pcx86/dos/ibm/
machines:
  - id: ibm5150-pcdos100
    type: pcx86
    config: /configs/pcx86/xml/machine/5150/mda/64kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: None
    autoType: $date\r
---

PC DOS 1.00 was completed in August 1981 and announced at an IBM press conference on August 12, 1981,
when IBM introduced the original IBM PC (Model 5150).  It was released on one single-sided (160Kb) diskette,
and included 23 [BASIC Programs](basic/).

[Directory Listing](#directory-of-pc-dos-100), [Documentation](#documents), and [Feature Summary](#feature-summary)
are provided below.

You can also dig into the [PC DOS 1.00 Boot Sector](debugger/#pc-dos-100-boot-sector) using the [PCjs Debugger](debugger/).

{% include machine.html id="ibm5150-pcdos100" %}

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

{% include gallery/documents.html %}

### Feature Summary

Courtesy of [PC DOS Retro](https://sites.google.com/site/pcdosretro/doshist):

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

### Summary of Internal Commands

  - COPY
      - Copies one or more files to another diskette and optionally, gives the copy a different name if you specify it in the COPY command.
  - DIR
      - Either lists all the directory entries, or only lists those for specified files. The information provided in the display for each file includes its size in decimal bytes and the date the file was last written to.
  - ERASE
      - Deletes the file with the specified filename from the designated drive, or deletes the file from the default drive if no drive was specified.
  - PAUSE
      - Suspends system processing and issues the message **Strike·a key when ready...**.
  - REM
      - Displays remarks from within a batch file.
  - RENAME
      - Changes the name of the file specified in the first parameter to the name and extension given in the second parameter. If a valid drive is specified in the second parameter, the drive is ignored.
  - TYPE
      - Displays the contents of the specified file on the screen.

### Summary of External Commands

  - BASIC
      - Also known as Disk BASIC, this program requires an IBM PC with Cassette BASIC and at least 32Kb of RAM.
  - BASICA
      - Also known as Advanced BASIC, this program requires an IBM PC with Cassette BASIC and at least 48Kb of RAM.  It includes all Disk BASIC features, along with event trapping, advanced graphics, and advanced music support.
  - CHKDSK
      - Analyzes the directory and the File Allocation Table on the designated or default drive and produces a diskette and memory status report.
  - COMP
      - Compares the contents of one file to the contents of another file.
  - DATE
      - Permits you to enter a date or change the date known to the system. The date is recorded in the directory entry for any files you create or alter.
  - DISKCOMP
      - Compares the contents of the diskette in the first drive to the contents of the diskette in the second drive. Usually, you would run DISKCOMP after a DISKCOPY operation to ensure that the two diskettes are identical.
  - DISKCOPY
      - Copies the contents of the diskette in the source drive to the diskette in the target drive.
  - FORMAT
      - Initializes the diskette in the designated or default drive to a recording format acceptable to DOS; analyzes the entire diskette for any defective tracks; and prepares the diskette to accept DOS files by initializing the directory, File Allocation Table, and system loader.
  - MODE
      - Sets the mode of operation on a printer or on a display connected to the Color/Graphics Monitor Adapter.
  - SYS
      - Transfers the operating system files from the default drive to the specified drive, in the following order: IBMBIO.COM, IBMDOS.COM.
  - TIME
      - Permits you to enter or change the time known to the system. You can change the time from the console or from a batch file.

### Additional Utilities

  - EDLIN is a line text editor which can be used to:
      - Create new source files and save them.
      - Update existing files and save both the updated and original files.
      - Delete, edit, insert, and display lines.
      - Search for, delete, or replace text within one or more lines.
  - LINK is a program that:
      - Combines separately produced object modules.
      - Searches library files for definitions of unresolved external references.
      - Resolves external cross-references.
      - Produces a printable listing that shows the resolution of external references and error messages.
      - Produces a relocatable load module.
  - DEBUG is a program that can be used to:
      - Provide a controlled test environment so you can monitor and control the execution of a program to be debugged. You can fix problems in your program directly and then execute the program immediately to determine if the problems have been resolved, You do not need to reassemble a program to find out if your changes worked.
      - Load, alter, or display any file.
      - Execute *object files*. Object files are executable programs in machine language format.

Notes:

  - Directory entries for system files IBMBIO.COM, IBMDOS.COM, and BADTRACK are not listed, even if present.
