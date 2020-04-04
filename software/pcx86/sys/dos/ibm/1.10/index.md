---
layout: page
title: IBM PC DOS 1.10
permalink: /software/pcx86/sys/dos/ibm/1.10/
redirect_from: /disks/pcx86/dos/ibm/1.10/
machines:
  - id: ibm5150-pcdos110
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/mda/64kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 1.10
      B:
        name: None
    autoType: $date\r$time\r
---

PC DOS 1.10 was released in May 1982 on one single-sided (160Kb) diskette.

[Directory Listing](#directory-of-pc-dos-110), [Documentation](#documents), and [Feature Summary](#feature-summary)
are provided below.  Also see IBM's "[Read This First](#read-this-first)" from the [PC DOS 1.10 Manual](#documents) for
important information about changes from [PC DOS 1.00](../1.00/).

You can also dig into the [PC DOS 1.10 Boot Sector](debugger/#pc-dos-110-boot-sector) using the [PCjs Debugger](debugger/).

{% include machine.html id="ibm5150-pcdos110" %}

### Directory of PC DOS 1.10

	IBMBIO    COM        1920  05-07-82
	IBMDOS    COM        6400  05-07-82
	COMMAND   COM        4959  05-07-82
	FORMAT    COM        3816  05-07-82
	CHKDSK    COM        1720  05-07-82
	SYS       COM         605  05-07-82
	DISKCOPY  COM        2008  05-07-82
	DISKCOMP  COM        1640  05-07-82
	COMP      COM        1649  05-07-82
	EXE2BIN   EXE        1280  05-07-82
	MODE      COM        2509  05-07-82
	EDLIN     COM        2392  05-07-82
	DEBUG     COM        5999  05-07-82
	LINK      EXE       41856  05-07-82
	BASIC     COM       11392  05-07-82
	BASICA    COM       16768  05-07-82
	ART       BAS        1920  05-07-82
	SAMPLES   BAS        2432  05-07-82
	MORTGAGE  BAS        6272  05-07-82
	COLORBAR  BAS        1536  05-07-82
	CALENDAR  BAS        3840  05-07-82
	MUSIC     BAS        8704  05-07-82
	DONKEY    BAS        3584  05-07-82
	CIRCLE    BAS        1664  05-07-82
	PIECHART  BAS        2304  05-07-82
	SPACE     BAS        1920  05-07-82
	BALL      BAS        2048  05-07-82
	COMM      BAS        4352  05-07-82
	        28 File(s)

CHKDSK reports:

	      160256 bytes total disk space
	        8704 bytes in 2 hidden files
	      144384 bytes in 26 user files 
	        7168 bytes available on disk

In case you're wondering why 1920 + 6400 does not equal the "8704 bytes in 2 hidden files" reported by CHKDSK,
that's because all CHKDSK byte totals are cluster-granular.  On a 160Kb diskette, 1 cluster equals 1 sector or 512
bytes.

CHKDSK considers the size of IBMBIO.COM to be 2048 bytes (1920 rounded up to the nearest 512 multiple), and the
size of IBMDOS.COM is 6656, so the total number of bytes consumed by those two files is 8704.

{% include gallery/documents.html width="200" height="280" %}

### Feature Summary

New features:

- Double-sided 320KB floppy disk support
- Directory entries include the time last written in addition to the date
- INT 24h vector saved in PSP
- COPY supports concatenation of multiple files

New internal commands:

- DATE
- DEL
- REN
- TIME

New external commands:

- EXE2BIN

New functions:

- INT 21h functions 1Ch, 1Fh, 2Eh

### Read This First

From the PC DOS 1.10 Manual:

> Welcome to DOS Version 1.10 for your IBM Personal
Computer. Whether you are using DOS for the first time
or upgrading to this enhanced version, this brief
discussion contains some information about Version 1.10
that may be of importance to you. For more specific
information about the topics in this document, refer to
the appropriate sections of the DOS manual.

> DOS Version 1.10 contains incremental functional
enhancements, performance improvements and support
for the IBM 320K 5 1/4" Diskette Drive. Although
Version 1.10 is functionally compatible with Version 1.00
there are some differences that you should be aware of
and, if necessary, take the appropriate course of action for
your particular situation.
    
> **Increased Memory Requirements**

> First, DOS Version 1.10 is about 250 bytes larger than
Version 1.00 and BASIC or BASICA Versions 1.10 are
about 200 bytes larger than their Version 1.00
counterparts. In general, this should not affect any of the
applications that you have written and already run with
Version 1.00. Should you encounter the rare case of
having one of your applications "not fit" with Version
1.10, it may be necessary to "trim" your program to run
with Version 1.10. Although we've made every effort to
keep things from growing, some growth was unavoidable.

> Our one application affected by the growth in Version
1.10 is the IBM Asynchronous Support
program. For those of you who will be using this program
under Version 1.10, it will be necessary to change line 2
of the AUTOEXEC.BAT file on the Communications
program diskette (that's the line that invokes BASIC and
subsequently the program TERMINAL) to the following:

> >    BASIC TERMINAL/C:0

> You can use either DOS EDLIN or COPY to make this
change.
    
> **DOS Packaging Changes**

> Another DOS Version 1.10 change is the packaging of
some DOS functions. For example, in Version 1.00,
TIME and DATE are external commands (individual
COM files). In Version 1.10 they are part of DOS itself
(internal). Thus, it is not necessary to copy these
functions to any of your DOS-based applications in
Version 1.10. If you have any batch programs that copy
these functions to your applications, they don't need to be
changed; but don't be alarmed if you get the message:
    
> >    0 File(s) Copied
    
> in response to a Version 1.10 DOS COPY command for
any such request. We mention this because some of our
applications (like Dow Jones Reporter) put these
commands on their program diskette.
    
> **Serially Attached Printer Support**

> One significant Version 1.10 change is to the DOS MODE
command for the dynamic reconfiguration of DOS to
support serially attached printers. This means it is no
longer necessary to change any applications to do this.
With the MODE command you can reassign the DOS
default printer (LPT1:) to the appropriate asynchronous
communications (RS232) adapter (either COM1: or
COM2:) for your printer. Also, with the MODE command
you can specify the characteristics of your serially
attached printer (parity, baud rate, etc.).
    
> **320K Drive Support**

> The last and most significant areas of change are for 320K
Diskette Drive support. Although it depends upon your
specific system configuration, there are several functional
changes to DOS Version 1.10 that can affect your
environment or applications if you have 320K drives on
your system. The system configuration that must be
considered is one where you have "mixed" diskette drives
on your system (ie. Drive A is 160K and Drive B is 320K or
the reverse). Under DOS Version 1.10 diskettes
formatted for dual-sided use on a 320K drive cannot be
processed on a 160K drive. However, those formatted on
a 160K drive can be processed on a 320K drive.

> On most systems with "mixed" drives this probably will
not be a problem as you can still backup your diskettes
and data by using DOS DISKCOPY and alternating the
source and target diskettes on the same drive.

> Where this can present a problem for systems with
"mixed" drives is with applications that can only make
one backup copy of the application program diskette.

> **WARNING**

> With DOS Version 1.10 and on a "mixed" drive system it
is possible to make a backup copy of an application that
will not run on the system that it was made on. This
potential usually exists on systems where Drive A is 160K,
Drive B is 320K and the process to create the backup
diskette uses the DOS FORMAT command first to format
the backup diskette and then the DOS COPY command
to copy the programs onto the backup diskette. Should
you have this situation and it can exist, then use the DOS
TYPE command to display any batch file that may be used
to create a backup copy. If the display shows a line like the
one that follows:

> >    FORMAT B:/S
    
> then use the DOS EDLIN command and change that line
to the following:

> >    FORMAT B:/S/1

> In the case of the IBM Dow Jones Reporter where you are
following the instructions in the book and you are told to
enter:

> >    FORMAT A:/S
    
> to avoid any potential problems type

> >    FORMAT A:/S/1
    
> This will insure your backup diskette is formatted the
same as the Reporter diskette.

> We bring this to your attention because the DOS
FORMAT command always formats the diskette to the
capacity (hardware specification -- 160K or 320K) of the
target drive, unless you override this default by specifying
/1 on the FORMAT command to format a diskette for
160K on a 320K drive.

> Another IBM application that is designed for 160K drives
is Time Manager. If you are formatting a Time Manager
Data Diskette you must use

> >    FORMAT /1
    
> or the data diskette will not be usable.

> Unlike FORMAT, the Version 1.10 DISKCOPY
command always formats the target diskette to the same
format as the source diskette. Be aware, however, you
cannot use DISKCOPY to copy a 320K-formatted
diskette onto a 160K diskette drive.

> **In Closing**

> A final word about DOS Version 1.10 -- we've just
brushed the surface of the many enhancements. If you are
a Version 1.00 user, take the time to read the DOS manual
to gain a more detailed understanding of the new and
enhanced functions. If you are not a former user, then
read the book anyway; it will help you get started more
quickly.
