---
layout: page
title: "PC-SIG Diskette Library (Disk #933)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0933/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0933"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SORTED DIRECTORY AND FLIST / PC"

    SDR.COM provides more information than the resident DOS DIR command
    about the files on a disk, and lets you select, sort, format, and
    display the information in a variety of ways. You can specify a
    pattern name to select the desired files and by specifying any of a
    variety of command line switches. The default switch values have been
    carefully chosen to reflect their most common use, and for
    compatibility with the standard DIR command. Select files by
    attribute, age, or string match. Sort on any directory field. Global
    disk directories can be searched for files matching the specified
    criteria.
    
    Use in stand-alone mode or as memory-resident. It is possible to use SD
    in an almost infinite variety of ways by using the switches in different
    combinations. Designed to be as transparent as possible in normal
    operation, it does not impose itself between the user and the operating
    system. Novices or experienced users both can profit from this utility.
    
    FLIST/PC is a selection menu for manipulating your files in a more
    efficient manner.
    
    Copy, move, rename, delete, edit, and execute a file by simply
    indicating the desired action. Multiple actions can be executed with a
    function key. FLIST/PC can be used with your own word processor or
    text editor without exiting FLIST/PC. The disk file directory can be
    sorted by filename, extension, size, or date. You can easily scroll
    through a directory, display the tree structure of all subdirectories
    on the current disk drive, and select new paths and directories to be
    displayed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0933.TXT

{% raw %}
```
Disk No:  933
Program Title:  SORTED DIRECTORY version 6.0 and FLIST/PC version 3.2
PC-SIG version:  2

SORTED DIRECTORY lets you select, sort, format, and display information
in various ways.  You specify command line switches to modify the
behavior of the program.  Although the program is relatively small, it
is possible to use it in an almost infinite variety of ways by using the
switches in different combinations.  The program is designed to be as
transparent as possible in normal operation and does not impose itself
between the user and the operating system.  Therefore, novices or
experienced users can use it in a way that best meets their needs.

FLIST/PC acts as a selection menu to use your files more efficiently.
You can copy, move, rename, delete, edit, and execute a file by simply
indicating what you want on the display line with the file name.
Multiple actions can then be executed with the press of a function key.
FLIST/PC can run with your wordprocessor or text editor without exiting
FLIST/PC.  The directory can be sorted by filename, extension, size, or
date.  You can easily scroll through the directory, display the tree
structure of all subdirectories on the current disk device, and select
new paths and directories to be displayed on the screen.

Usage:  DOS Utilities

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00 for DIRECTORY SORTING UTILITIES and
$15.00 for FLIST.

File Descriptions:

-------- ---  FLIST
FLCONFIG EXE  Configuration program.
FLIST    EXE  Main program.
FLIST    PRN  Documentation.
PGMDESC  TXT  Program description.
README   TXT  How to print the documentation.
-------- ---  SORTED DIRECTORY
DEMO     BAT  Batch file demonstrating the SD program.
DEMO2    BAT  Batch file demonstrating related products.
DEMO?    COM  Executable files called by DEMO2.BAT (4 files).
SD       COM  Executable file for sorted directory utility.
SD       DOC  Documentation file for SD.COM
SD       PIF  Microsoft Windows Program Information File for SD.COM
SDB      BAT  Uses SD to process multiple drives.
SDR      COM  Memory resident version of SD.
SDR      DOC  Documentation file for SDR.COM
VSN      COM  Volume serial number utility.
VSN      DOC  Documentation file for VSN.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## PGMDESC.TXT

{% raw %}
```
PGMDESC  TXT  -  YOUR LOOKING AT IT.
README   TXT  -  HOW TO GET DOCUMENTATION AND START THE PROGRAM.
FLIST    EXE  -  DOS SHELL AND FILE LIST MANAGER
FLIST    PRN  -  DOCUMENTATION
FLCONFIG EXE  -  FLIST/PC CONFIGURATION PROGRAM
```
{% endraw %}

## README.DOC

{% raw %}
```
							January 8, 1989

PC-SIG UPDATES
1030D East Duane Avenue
Sunnyvale, Ca. 94086
Attn: Brian Tuck

Dear Brian,

     I have enclosed a disk containing the latest version of my Sorted
Directory Utility Program for IBM-PC and compatible computers (SD V6.0)
which is on PC-SIG disk number 0933.

This new version includes many enhancements, including a full screen
System Information Summary of installed hardware, system memory and disk
parameters, Multi-Drive processing, more user-customizable screen colors,
support for large (GT 32Mb) hard disk partitions, a utility to change
disk Volume Serial Numbers, and much more.  The SD60.ARC file is being
distributed as Shareware with a $20 contribution requested.  Thanks for
your continuing help with the distribution of this product.


					Yours Truly,

					John F. Stetson
					42 Tivoli Lake Court
					Silver Spring, Md. 20906

```
{% endraw %}

## README.TXT

{% raw %}
```

FLIST/PC is not copy-protected.  You may copy it to your hard
disk (if so equipped) if you desire.


To print a copy of the FLIST/PC documentation, ready your printer
using letter size paper (8 1/2 X 11) and enter the following
command:

	A:>PRINT A:FLIST.PRN


To start working with FLIST/PC, enter the following command:

	A:>FLIST


Thank you for trying FLIST/PC.
```
{% endraw %}

## SD.DOC

{% raw %}
```
------------------------------------------------------------------------

		SD: IBM-PC Sorted Directory Utility V6.0

		Copyright (C) 1986-89 By John F. Stetson

		     SHAREWARE - All Rights Reserved

------------------------------------------------------------------------

	Contents

------------------------------------------------------------------------

1.0	INTRODUCTION
1.1	Program Requirements
1.2	Design Philosophy
1.3	Distribution Files
1.4	Installation

2.0	OVERVIEW
2.1	Modes of Operation
2.2	Command Line Syntax
2.3	Controlling Program Output
2.4	Examples of Use

3.0	FILE SELECTION AND SORTING
3.1	File Selection By Attribute
3.2	File Selection By Date
3.3	ARC File Processing
3.4	Global Subdirectory Processing
3.5	Sort Field Selection Switches

4.0	OUTPUT FORMAT CONTROL
4.1	Output Mode Switches
4.2	Output Toggle Switches
4.3	Filename Column Switches
4.4	EGA and VGA Switches

5.0	SYSTEM INFORMATION SUMMARY
5.1	System Hardware
5.2	System Memory
5.3	Disk Parameters

6.0	CUSTOMIZATION
6.1	Configuring the Program
6.2	Patch Area Format
6.3	Multiple Drive Processing
6.4	Multitasking Environments

7.0	APPENDICES
7.1	Error Messages and Return Codes
7.2	Modification History
7.3	Product Support

------------------------------------------------------------------------

1.1	Program Requirements

------------------------------------------------------------------------

This is a user-supported  SHAREWARE  product.  Please  see  the  section
titled Product Support at the end of this document for details.

SD.COM is a Sorted Directory utility program which  operates  on  IBM-PC
compatible computer systems using the IBM  PC-DOS  or  Microsoft  MS-DOS
Operating System Version 2.0 or higher.

SDR.COM is the memory resident (TSR) version of the program.  Since some
users may not wish to use this version of the program, its documentation
has been placed in a separate file.

This version of the program  requires  about  14Kb  of	disk  space  and
about 32-64Kb of  memory  during  execution,  depending  on  the  number
of files and directories being processed.

Current  program  limitations  are  about  625	total  directories  when
processing global directories, about 1600 files per directory, and about
1400 files per ARC file, assuming that 64Kb of memory is available.

Support is provided for IBM-PC	compatible  MDA, CGA, MCGA, EGA, and VGA
video adaptors and monitors.

------------------------------------------------------------------------

1.2	Design Philosophy

------------------------------------------------------------------------

SD provides more information than the resident DOS DIR command about the
files on a disk, and allows  the  user	to  select,  sort,  format,  and
display the information in a variety of ways.  This is	accomplished  by
specifying  a pattern name to select the desired files and by specifying
any of a variety of command line "switches" which allow  you  to  modify
the  behavior of the program.  The switch names have been designed using
letters, as much as possible, so that it  is  easier  to  associate  the
function  of  a  switch  with its name.  In addition, the default switch
values have been carefully chosen to reflect their most common use.

Although the program is relatively small, it is possible to use it in an
almost	infinite  variety  of  ways  by  using the switches in different
combinations.  A significant amount of effort has gone	into  optimizing
the  performance  of  the  program,  due  to  the  number of times it is
typically used.  The  program  is  designed  to  be  as  transparent  as
possible  in  normal  operation,  and does not impose itself between the
user  and  the	operating  system.    This  allows  both   novice    and
experienced users to use it in the way that best meets their needs.

As a default, the program writes output directly to video display memory
which results in noticeably faster output than that possible  with  DOS.
Output can still be redirected to an output device or file by specifying
the standard DOS redirection symbol (>) on the DOS command line.

Maximum possible use is made of the horizontal dimension of  the  screen
to minimize the loss of previously displayed data by screen scrolling.

Support is provided for a variety of file selection attributes.

Support is provided for a variety of screen display formats with varying
amounts of detailed file information displayed.

A variety of user customizable command line switches  and  screen  field
display colors are also supported.

Every effort has been made to keep the size of the program to a minimum,
for  efficient use on systems having floppy disks.  However, many of the
capabilities of both DOS and this program are only fully  realized  when
using large hard (fixed) disks with  hierarchical  directory  structures
to organize files.

Two of the most valuable resources in a computer system are  memory  and
disk storage.  Many applications make little or no attempt to use  these
resources efficiently.	Not only does this program  attempt  to  provide
many useful (and hopefully frequently used) capabilities in an efficient
package, but it can be used to manage the system memory and  disk  space
so that they are used to best advantage.

------------------------------------------------------------------------

1.3	Distribution Files

------------------------------------------------------------------------

The SD program and the associated files are distributed in the	form  of
an ARC file called SD60.ARC.  This  is	done  to  save	disk  space  and
time when transferring files over Computer Bulletin  Board  systems  and
to insure the integrity of the files.  You will need a	utility  program
which is capable of extracting the files from the SD60.ARC  file.  These
types of programs are normally available on most Computer Bulletin Board
systems.

The SD60.ARC file contains the following files:

SD	.COM - Executable File for SD - Sorted Directory Utility
SD	.DOC - Documentation File for SD
SD	.PIF - Microsoft Windows PIF File for SD

SDB	.BAT - Batch File - Uses SD to Process Multiple Drives

SDR	.COM - Executable File for SDR - Memory Resident Version of SD
SDR	.DOC - Documentation File for SDR

VSN	.COM - Executable File for VSN - Volume Serial Number Utility
VSN	.DOC - Documentation File for VSN

DEMO	.BAT - Batch File Demonstrating the SD Program
DEMO2	.BAT - Batch File Demonstrating Related Products
DEMO3-6 .COM - Executable Files Called By DEMO2.BAT

The following files are also provided when you register your copy of SD:

SD	.ASM - Assembly Language Source File for SD
SDR	.ASM - Assembly Language Source File for SDR
VSN	.ASM - Assembly Language Source File for VSN
SDC	.BAS - BASIC Language Source File for SDC
SDC	.DOC - Documentation File for SDC
SDC	.EXE - Executable File for SDC - Configuration Program

------------------------------------------------------------------------

1.4	Installation

------------------------------------------------------------------------

Copy SD.COM, SDR.COM, VSN.COM and SDB.BAT to the root directory  of  the
system boot disk (normally C:\) or to another directory of  your  choice
which is specified in the DOS PATH command in the AUTOEXEC.BAT file.

The best way to quickly  familiarize  yourself	with  the  features  and
capabilities of SD is to run the DEMO.BAT file.  For best results,  copy
the DEMO.BAT file to the root directory of the system  boot  disk,  make
sure this is the default directory (type CD C:\), and type the	command:

DEMO

You can optionally specify a target drive and/or directory for the files
to be displayed.  For example:

DEMO D: or DEMO D:\BIGDIR

Only the files in the target directory and its	subdirectories	will  be
processed, so it is best to specify the root directory of the  drive  in
order to be able to access a large number of  files.  The  demonstration
is designed to be run with a copy of the distributed SD.COM file, before
any program defaults are changed by the user.  This demonstration simply
displays information about the computer system	and  the  files  on  the
selected disk; it does not write anything to the disk.

Once you are familiar with SD, you may wish to run  the  DEMO2.BAT  file
for  a	quick  demonstration  of  several   related  products.	See  the
section titled Product Support for additional information.

------------------------------------------------------------------------

2.1	Modes of Operation

------------------------------------------------------------------------

SD is a versatile program that can be used in a variety of ways:

The most common use is to simply display information  about  files  (and
subdirectories)  in  a	single (usually the current) directory.  Most of
the sort field switches are used in this mode.

The program can be  used  to  display  detailed  information  about  the
system hardware configuration,	the  availability  and	current  use  of
different kinds of system memory and fundamental  disk	characteristics.
The /i switch is used in this mode.

The program can be used to search or scan  all	(or  a	subset)  of  the
ARC files on a disk for one or	more  files  which  meet  the  specified
criteria (file name pattern or age).  This  processing	makes  effective
use of ARC file storage by allowing easy access to ARC file directories.
The /a switch is used in this mode.

The program can be used to search or scan  all	(or  a	subset)  of  the
directories  on  a  disk for one or more files or directories which meet
the  specified	criteria  (file name pattern,  file attributes, or age).
The /g switch is used in this mode.

The program can be used to create an output file by redirecting  console
output	which may be subsequently used as input to another program.  The
/r switch can be used in this mode, but is optional  since  the  program
will automatically detect the use of DOS command line redirection.

------------------------------------------------------------------------

2.2	Command Line Syntax

------------------------------------------------------------------------

The complete form of the DOS command line to run the program is:

D>sd [drive][path][filespec] [/switches] [>[>]device/file]

In most cases, only one or two parameters are specified, so the  command
syntax	isn't  as  formidable  as  it  may appear at first.  Each of the
command line parameters is optional (as the [] characters indicate)  and
may  be  used  together in any combination or order.  Spaces may also be
freely used at any point to improve readability.   The	various  command
line parameters are described below:

[drive]

This parameter specifies the name of the disk  drive  to  be  processed.
Typical  drive	letters  are A: or B: for floppy disks and C: for a hard
disk.  RAM (memory) disks implemented via device  drivers  may	also  be
specified, as can other types of disks, such as CD-ROM drives or logical
Network drives. If no drive letter is specified, the currently logged-in
drive (shown in the DOS prompt) is used.

[path]

This parameter specifies the path  through  the  hierarchical  directory
structure  to  the  desired  directory	which  contains  the files to be
processed.  The general form of the path parameter is shown below:

[\][directory][\directory]...[\directory][\]

The path name may simply be the name of the root directory (\),  or  the
name of a subdirectory in the root directory.  The standard DOS . and ..
directory names  may  be  used	to  refer  to  the  current  and  parent
directories,  respectively.    If  a  path is not specified, the current
directory on the specified disk drive is used.	If the path name is  the
first parameter on the DOS command line after  the  program  name,  then
they must be separated by a space.

[filespec]

This parameter specifies  which  file  names  are  to  be  selected  for
processing from the previously specified directory (if any).  A complete
(unambiguous) file name may be specified, or  an  ambiguous  file  name,
containing  "wildcard"  characters  (? or *)  may be specified to select
several files.	Either the file name (first 8 characters)  or  the  file
extension  (last  3  characters)  or both may be completely omitted.  In
these cases, wildcard characters are automatically  used  to  match  all
possible  file names in the selected directory.  You may specify leading
characters of the file names you wish to match,  omitting  the	trailing
characters of the name, the period delimiter, and the file extension. In
this respect, SD processes  file  specifications  differently than  DIR.

For example: SD ABC is equivalent to DIR ABC*.*

If you specify a filespec which exactly  matches  a  subdirectory  name,
then only the files in the subdirectory will be selected.  If  you  wish
to select other files in the parent directory  with  leading  characters
the same as the subdirectory name, you must use the following  notation:

Instead of SD ABC, use SD ABC*, where ABC is a subdirectory name.

[/switches]

This parameter specifies one or more "switch"  or  option  values  which
modify	the operation of the command.  All switches are optional and may
be specified before the drive, path, and filespec, after them,	or  both
before	and  after.  Each switch has a default	value,	which  has  been
carefully selected to represent the most  frequently  used  option,  for
most users.  Specifying a switch overrides or "toggles" the  current  or
default value of that command  option.	The  SDC  program  can	be  used
to change the default values of the switches, or  they	can  be  patched
using the standard DOS DEBUG utility  program.	If  you  find  that  you
frequently wish to override a default switch value, you can  permanently
change the default switch  value  by  using  either  of  these	methods.
If a default switch value is overridden, specification	of  that  option
will toggle the option back  to  its  original	state,	if  appropriate.
Detailed descriptions of all switches are given below.

[>[>]device/file]

This parameter is actually a standard feature of DOS called  redirection
of  output  to	the  "standard output" (STDOUT) device.  This allows the
console output generated by the program  to  be  transmitted  to  either
another device (usually the printer device: PRN), or to a disk file.  By
redirecting the output of the command to a file, you can later	use  the
file  as  input  to a word processor, disk catalog system, etc.  If this
parameter is specified, the program will automatically detect  this  and
will use  standard  DOS console  output  services  rather  than  writing
directly to video display memory.

------------------------------------------------------------------------

2.3	Controlling Program Output

------------------------------------------------------------------------

Unlike most programs, you can't type ahead while the program is running.
This is due to the need to monitor the keyboard in order  to  pause  the
screen output.	If you wish to begin typing a new command, simply  press
ESCAPE (preferred), Control-C, or Control-Break to immediately terminate
the program, and then type the next command.

Console output may be paused by typing any other character  and  may  be
restarted in two different ways.  If RETURN is	pressed,  screen  output
resumes until the either the screen fills or  the  output  finishes.  If
any other character is typed, only a single line  of  additional  screen
output is displayed.  This allows you to easily  control  the  displayed
output so as to minimize the loss of existing screen data by  scrolling.
The recommended single line scroll keys are the Space Bar or Down Arrow.

As an experiment, try typing the command  SD,  immediately  followed  by
two carriage returns.  You will see only one line of output and can  use
the space bar to display additional lines.  When you have  seen  enough,
press the ESCAPE key to terminate the program.	By  carefully  selecting
the proper switch values and using this technique, you can minimize  the
loss of previously displayed information on the display screen.

If /q is specified, the console output	isn't  paused  when  the  screen
fills.	This is necessary when redirecting output to a file  or  device,
or when you wish to browse through large amounts of output.

Output lines which are longer than 80 characters are truncated at column
80 when writing to video display memory, but not when redirecting output
to a file or device.

Program output may be sent to a printer in several different ways:

You can use the technique of "echoing" console output  to the printer by
pressing either Control-P or Control-Print-Screen to start and stop.

You can use the technique of printing the entire contents of the  screen
by pressing Shift-Print-Screen.

You can use the technique of  redirecting  all	program  output  to  the
printer by using the DOS command line redirection symbol and the printer
device name: SD ... >PRN

Since the vertical bar used to separate the columns of displayed  output
is a graphics symbol (not a standard  printable  ASCII	character),  you
must be careful to specify the /r switch if you have a printer which  is
unable to print graphics characters.

------------------------------------------------------------------------

2.4	Examples of Use

------------------------------------------------------------------------

A>sd

Display the current directory of drive A.

C>sd /?

Display program help information.

A>sd c:/i/m

Measure CPU performance and display system information summary including
information for the disk in drive C.

B>sd/f/6

Display the current directory of drive B, sorted by file name, using the
six column format (file names only).

D>sd c:\/ss/1

Display only the system files in the root directory of	drive  C,  using
the one column output format.

C>sd /j

Display the currently configured screen colors.

A>sd c:\/sd

Display all of the subdirectories in the root directory of drive C.

A>sd /lp/sf c:\ >files.dat

Create a file called "a:files.dat" which contains a sorted list  of  all
files with path names (no directories) in the root directory of drive C.

A>sd .asm/b-

Display all files having an extension of "asm" in the current  directory
of drive A and sort the output by descending file size.

B>sd \/n/4/z

Select all files in the root directory of drive B, do not sort the file
entries, display the output using the four column  format  and	restore
the original console screen when done.

C>sd \/35

Display all of the files in the root directory of drive C using 35 lines
on the screen with an EGA or VGA.

C>sd \/u/50/w

Display all of the files in the root directory of drive C in upper  case
using 50 lines on the screen with an EGA or VGA and automatically  reset
to 25 lines when done.

B>sd temp.* >c:temp.dir

Select all files having a name of "temp" in  the  current  directory  of
drive B, and redirect the console output to file "c:temp.dir".

B>sd/1 c:\*.com >>c:temp.dir

Select all files with an extension of "com" in  the  root  directory  of
drive  C,  format  using  one  output  column,	and redirect the console
output, appending to the file "c:temp.dir".

D>sd a:/v/p/1

Display the disk volume label and all file information	for  the current
directory of drive A without a column title line.

B>sd e:/k/u

Display the current directory of drive E, rounding the space  values  to
Kilobytes and displaying the file names in upper case.

C>sd /h/2

Display all files and directories in the current directory  on	drive  C
sorted and displayed from left to right, using the two column format.

A>sd t/e/k/q

Select all files in the current directory of drive A whose  names  begin
with  "t",  erase the screen before displaying output, display file size
and disk space values in Kilobytes and do not pause the console output.

C>sd \

Display all files in the root  directory  of  drive  C	sorted	by  file
extension and by file name using the two column format.

B>sd temp

If temp is an existing subdirectory in the current directory of drive B,
then  select  all of the files in that directory.  Otherwise, select all
files in the current directory of drive B whose names begin with "temp".

B>sd temp*

Display all directories and files in the current directory  of	drive  B
whose names begin with "temp".

A>sd ../sar

Display all files in the parent directory of the  current  directory  of
drive A with either the archive or read/only attribute.

A>sd c:/d/@+30

Display all files in the current directory of drive C which were created
during the past month sorted by date and time, using two output columns.

C>sd \/v/g/1

Display the disk volume label and all information for all files  in  all
directories of drive C.

C>sd \/gt

Display grand totals information only for all directories on drive C.

C>sd \/g/t/s

Display totals information only for all directories on drive C.

C>sd d:\test/g

Display information for files and directories at and  below  the  "test"
directory level of drive D.

A>sd c:\*.exe/g

Display information for all .exe files in all directories on drive C.

A>sd c:\/g/sd

Display all directory names on drive C.

B>sd ..\*.a?m/d+/1

Display all files in the parent directory of the  current  directory  of
drive  B  whose  extensions begin with "a" and end with "m" and sort the
output by ascending date and time using the one column output format.

C>sd /a/1

Display all files in all ARC files in the current directory of	drive  C
using the one column format.

C>sd /a:*.com/4

Display all .com files in all ARC files  in  the  current  directory  of
drive C using the 4 column format.

C>sd abc/a/@+365

Display all files less than one year old in all ARC  files  whose  names
begin with "abc" in the current directory of drive C in 2 column format.

C>sd \/a+/gt

Display grand totals information only for all files in	all  directories
and all files in all ARC files in all directories of drive C.

C>sd/v/1 b:\dir1\dir2\dir3\*.doc/d >prn

Select	all  files  having  an	extension  of  "doc"  in  the  directory
"\dir1\dir2\dir3"  of  drive  B.  Sort the output by date and time.  Use
the one  column  output  format  and  include  the  disk  volume  label.
Redirect the console output to the printer.

A>sd/r/q b: (Type Control-P/RETURN)
(console output is duplicated on the printer)
A> (Type Control-P/RETURN)

Display the current directory of  drive  B  and  duplicate  the  console
output on the printer.

------------------------------------------------------------------------

3.1	File Selection By Attribute

------------------------------------------------------------------------

Syntax: /s[attr-switch]...[attr-switch]

/s  - Select all files and directories
/sd - Select Directories only (no files)
/sf - Select Files only (no directories)
/sa - Select files with the Archive attribute
/sr - Select files with the Read/Only attribute
/sh - Select files with the Hidden attribute
/ss - Select files with the System attribute

These switches are used to further restrict  which  files  are	selected
(in addition to any filespec) based on the attributes of the files.

As a default, the /s switch is configured ON.  This means that all files
(including Hidden and System files) are selected as a  default.  If  you
prefer to not see these files (like DIR) unless you type /s, set the  /s
switch OFF using the SDC program or DEBUG.

If /sd is specified, all and only the subdirectories  in  the  specified
directory are selected, including the current (.) and parent (..).

If /sf is specified, all and only the files (regardless of attribute) in
the specified directory are selected.

If an /sa, /sr, /sh, or /ss switch is specified by itself, all and  only
the files with the specified attribute are selected.  These switches may
also be combined in any order and the intervening /s switch(es) omitted.
For example: SD C:\DIR/SA/SR is equivalent to SD C:\DIR/SAR

When multiple /s switches are specified, the effect is "additive";  i.e.
for  the  example  above, all files with either the Archive or Read/Only
attribute will be selected from the specified directory.

Specification of any /s switch(es) other than /sd causes  an  additional
'totals' line to be displayed which summarizes the number of files which
have each of  the  requested  attributes.  If  files  with  the  Archive
attribute are selected, the percent of files with this attribute is also
displayed.  This provides an indication of the need to back up files  on
a hard disk.

Since separate colors are used to identify System and Hidden files  from
normal files, it is possible to permanently configure the /s  switch  ON
without losing the ability to distinguish the different file types.

One difference between SD and CHKDSK is that  CHKDSK  considers  a  disk
volume label to be a "hidden file", whereas SD does not.

------------------------------------------------------------------------

3.2	File Selection By Date

------------------------------------------------------------------------

Syntax: /@[+/-][days][+/-]

The /@ switch is used to select files based on their age (the  date  the
file was created or last updated). Since dates are specified relative to
the current system date (normally set by the DATE command or  real  time
clock  at  boot  time),  it  is  essential  that  the system date be set
correctly in order for this feature to work properly.

Files may be selected which are exactly the  specified	number	of  days
old, or either newer (+) or older (-) than the specified number of days.
The number of days specified may range from 0  to  9999,  syntactically,
but cannot be so large as to pre-date January 1, 1980, which is when the
universe was created (according to DOS!).

Think of the date specification  process  in  two  steps:  go  back  the
specified number of days and then find the files written before (-), on,
or after (+) that date.

For example:

/@	select files written today (days=0)
/@1+	select files written during last 2 days
/@7	select files written exactly one week ago
/@+30	select files written during the past month
/@-365	select files written more than a year ago

The +/- may be specified either before or after the number of days.

Regardless of the default sort type, specifying the /@ switch will cause
the /d switch to be  set  automatically.   If  you  wish  to  specify  a
different sort switch, you must specify it after the /@ switch.  If  the
number of filename columns is not already set to 1,  specifying  the  /@
switch will cause the /2 switch to be set automatically.  If you wish to
specify a different number of filename	columns,  you  must  specify  it
after the /@ switch.

------------------------------------------------------------------------

3.3	ARC File Processing

------------------------------------------------------------------------

Syntax: /a[+][:filespec]

The /a switch requests ARC file processing instead of or in addition  to
normal file processing.  All other switches operate as	usual  with  the
exception of those noted below.  In the simplest  case	(/a  specified),
all files in  the  specified  directory  with  extensions  of  .ARC  are
automatically processed.  Although the .ARC file type  is  assumed,  any
other file type (such as .PAK or .PKA) may also be specified.

Each file is opened, the ARC directory entries are read and  saved,  and
the file is closed.  Information for each of the files in the  ARC  file
is then displayed.  This process repeats until all of the  selected  ARC
files have been processed.  The ARC files are  processed  in  the  order
they are found in the directory and are not sorted.  Entries inside each
selected ARC file are sorted and displayed in the usual way except  that
some additional information is displayed if the /1 switch is specified.

The information displayed for each file in a selected ARC file includes:
Filename, Original Length, Storage Method, Packing Percent, Packed Size,
Date, Time, and CRC code.  After  the  entries	in  each  ARC  file  are
displayed, a totals line is displayed which summarizes this  information
for the ARC file as a whole.  After all ARC files have	been  processed,
a grand totals line is displayed which summarizes  the	information  for
all of the selected ARC files.

If a primary file specification is used with /a (SD ABC/A), it	is  used
to select a subset of the available  ARC  files.  If  a  secondary  file
specification is used (SD /A:ABC), it is used  to  select  a  subset  of
the available files inside the selected ARC files.  The  /@  switch  may
also be used to select files inside ARC files by the age of the files.

If /a+ is specified, normal file processing occurs  first,  followed  by
ARC file processing for each of the selected  ARC  files.  This  process
can also be applied to all directories on a disk by using the /g switch.
Processing for /a may take considerable  time  if  many  ARC  files  are
present and the disk space is heavily fragmented.  In this case, you may
wish to specify the /q switch and control the console output manually.

The /s switches are not applicable to ARC file	entries  since	no  file
attribute information is maintained inside  ARC  files.  The  /c  switch
is not particularly useful either since it sorts by the file CRC  codes!
Nested ARC files (ARC files inside ARC files) cannot be processed  since
this would require the full extraction	code  for  the	ARC  compression
algorithms to be included in this program, which is not appropriate.

ARC files have become something  of  a	standard  for  the  transfer  of
DOS disk  files  across  Computer  Bulletin  Board  systems  since  they
can significantly reduce the transfer  time,  allow  multiple  files  to
be combined into a single file, insure the integrity  of  the  files  by
storing and checking CRC codes, and preserve the  original  file  dates,
times and sizes.  They are  also  useful  for  long  term  disk  storage
since they reduce the number of  floppy  disks	needed	to  store  data.
It is therefore highly desirable to be able to display	the  directories
of these files in an efficient	and  flexible  manner.	The  integration
of ARC file processing with normal directory processing in this  program
allows you to take full advantage of the benefits inherent in ARC files.

------------------------------------------------------------------------

3.4	Global Subdirectory Processing

------------------------------------------------------------------------

Syntax: /g or /gt

The  /g  switch  requests  global  subdirectory  processing.  All  other
switches  operate  as  usual.	 After	the  specified	target directory
(usually, but not necessarily,	a  root  directory)  is  processed,  all
subdirectories	below  that directory are processed in alphabetic order.

After all directories have been processed, a grand totals line	for  all
of  the  directories and files is displayed,  followed by a grand totals
line for file attributes (if a /s switch was specified).  Specifying the
/gt switch suppresses the totals lines for  individual	directories  and
only displays the grand totals.

If the current directory on the target drive is not the root  directory,
you must explicitly specify it (\), if you wish to process  all  of  the
directories on that drive: SD \/G ...

Processing for /g may take considerable time  if  many	directories  are
present and the disk space is heavily fragmented.  In this case, you may
wish to specify the /q switch and control the console output manually.

The /g switch has a variety of uses. It can be used to display a summary
of the total number of directories and files on a disk	similar  to  the
CHKDSK command if /gt is specified.  Somewhat more information for  each
individual directory is displayed if /g/t is specified.

It can be used to locate any and all occurrences of a file anywhere on a
disk with a complex directory structure by simply specifying a filename.
If no matching files are found, the displayed path name is that  of  the
last directory which was searched for the file.

Another interesting use is to specify the /sd switch, which will display
all of the directories on the disk below the specified directory.

------------------------------------------------------------------------

3.5	Sort Field Selection Switches

------------------------------------------------------------------------

Syntax: /sort-switch[+/-]

/b - Sort by file size in Bytes
/c - Sort by file Cluster number
/d - Sort by (1) file Date and (2) time
/f - Sort by (1) File Name and (2) extension
/x - Sort by (1) file Extension and (2) name
/n - No sort - display entries in directory order

These switches specify which fields are to be used as sort  "keys"  when
formatting  the  output  information.	 These switches are all mutually
exclusive; i.e. only one sort switch should be specified.   If	no  sort
switch is specified, the default is by file extension and name (/x).

Sort switches may be optionally followed by a + for an ascending sort or
a -  for a descending sort.  The default sort direction is ascending for
all sort switches except /d, which is descending  (so  the  newer  files
appear first). The + and - options are not meaningful for the /n switch.

The /b switch is used to find either the smallest or largest files on  a
disk,  or  to  discover  which	file(s)  have sizes which lie in a given
range.	This can be helpful when it is known that  a  file  of	a  given
size is missing from a disk, and it is desired to find its  identity  by
examining the contents of another disk which does contain the file.

The /c switch sorts the file entries by the first  or  starting  cluster
number allocated to the file.  This is simply the absolute  location  on
the disk where the file  begins.  Although  not  used  very  frequently,
this switch can be used to determine the actual order of the files on  a
disk, which is independent of  their  order  in  the  disk's  directory,
especially on a disk whose space has become "fragmented" by the creation
and deletion of many files  with  differing  sizes.  Regardless  of  the
default value for the number of  filename  columns,  specifying  the  /c
switch will cause the /1 switch to be set automatically.  If you wish to
specify a different number of filename	columns,  you  must  specify  it
after the /c switch.

The /d switch is a  frequently	used  sorting  option,	especially  when
combined  with	the  /2  or /1 switch.	This allows either the newest or
oldest files on a disk to be easily identified.  Of course, the validity
of  this  information  is once again dependent on the correct setting of
the system date at the time the files were written.  If  the  number  of
filename columns is not already set to 1, specifying the /d switch  will
cause the /2 switch to be set automatically.  If you wish to  specify  a
different number of filename columns, you must specify it after  the  /d
switch.

The /f switch simply sorts the selected directory entries by  file  name
and  extension,  which	is perhaps the most used sorting  sequence.  Any
"strange" file names containing unusual special characters will tend  to
collect at the beginning and end of the list, where they can  be  easily
identified.

The /x switch is helpful  in  identifying  which,  if  any,  files  have
"strange"  file  name extensions.  Since most standard files have one of
only a few possible types (extensions), such as .BAT, .COM,  .EXE,  etc.
using this switch will separate out any non-standard file names.

The /n switch bypasses the sort process with the result  that  the  file
entries  are  displayed  in  the order they occur in the disk directory.
This is helpful when examining a bootable disk to insure that the  order
of  files  is  optimal	(in  the  order  they are needed during the boot
sequence, and by frequency of use  after  boot-up).  This  is  the  same
order of file names as that displayed by the DIR command.

------------------------------------------------------------------------

4.1	Output Mode Switches

------------------------------------------------------------------------

Syntax: /output-switch ... /output-switch

/?  - Display program help information
/i  - Display system Information summary
/j  - Just display configured screen colors
/l  - List file names and (p)ath names only
/r  - Redirect output to a device or file (optional)
/t  - Display only the Totals output lines

The /? switch requests that a help screen be displayed which  summarizes
the command line syntax used to invoke the program and switch  meanings.
The /? switch output may be redirected to a file as follows: SD /? >FILE

The /i switch requests that a screen be displayed which  summarizes  the
system hardware configuration and memory and disk  characteristics.  See
the section titled System Information Summary for details.

The /j switch requests that a summary of the  configured  screen  colors
be displayed.  This switch is useful when you can't  remember  what  the
color values are for a specific type of file attribute or screen area.

The /l switch requests that a list of  file names (only)  be  generated.
All other output (file information  and  totals  lines)  is  suppressed.
This switch is normally used  with  the  /sf  switch  (to  suppress  any
directories),  and  the  /r  switch to redirect the output to a file for
processing by another program.	The filename column switches are ignored
(/1 is assumed) if they are specified with  the  /l  switch.  Since  any
embedded spaces are removed, the file names are ready to be operated  on
by  copy  commands  which  might  be  generated automatically by another
program.  Specifying the /lp (path name) option causes the file names to
be prefixed with their path names.  This  can  be  useful  when  another
program is to subsequently process  the  file  name  list  from  another
directory.  /l is mutually exclusive with the /t and /gt switches.

The /r	switch	requests  that	console  output  be  written  using  DOS
services, rather than directly to video display memory for higher speed.
Although this slows down the output and suppresses  the  screen  colors,
this is necessary when the need arises to redirect the output to a  file
or a device (printer) for subsequent processing.  /r is also used to run
the program in a window with a multitasking environment (see below).

If /r is specified, it should be the first parameter on the command line
after the command name, so that any error messages which  are  generated
for subsequent parameters can  be  redirected.	The  /r  switch  is  set
automatically when the program detects	that  console  output  is  being
redirected, so it does not normally need to be specified.

If output is not being redirected but is to be captured from the  screen
directly, it may be desirable to specify /r so the program will  convert
the graphics vertical bar symbols it uses to separate  adjacent  columns
of output information to the standard  ASCII  printable  character  (|).
You may wish to place the output file on a different drive or  directory
than the one being processed or the output file may be included  in  the
directory list as a zero byte file.  For example: SD A: >C:\TEMP.DIR

The /t	switch	suppresses  the  display  of  detailed	information  for
individual  files  and	directories  and only  displays  the  directory,
file attribute (see the /s switch) and disk space totals lines.

The directory totals line includes the target directory path  (if the /v
switch isn't specified), the number of  subdirectories,  the  number  of
files selected, the total number of bytes and clusters in  the	selected
files, and the percent of space used in the clusters  allocated  to  the
selected  files.  This	last  value   provides	 an  indication  of  how
efficiently disk space is being utilized  for  the  selected  files  and
depends on the number of files selected, the file  sizes  and  the  disk
cluster size.  The disk space  totals  line  includes  the  space  used,
percent used, space free, total space on the disk, and the current  date
and time.

The /t switch is used  when you wish to compare the total number or size
of  files  on  two  different  disks or directories.  If a difference is
detected, other switches (such as /b or /d) can  be  used  to  determine
which files are missing (or different).

Another difference between SD and DIR is that SD counts directories  and
files separately; DIR includes both in its "file" count.

------------------------------------------------------------------------

4.2	Output Toggle Switches

------------------------------------------------------------------------

Syntax: /output-switch ... /output-switch

/e  - Erase the screen before displaying output
/h  - Display output using Horizontal sequence
/k  - Display memory and disk space in Kilobytes
/m  - Measure CPU performance for /i switch
/o  - Switch between long and short date and time formats
/p  - Print column title lines for /1 switch
/q  - Quick output (no prompts when the screen fills)
/u  - Switch between Upper and Lower case filenames
/v  - Display disk Volume label and path at start
/w  - Reset the screen to 25 lines at exit
/z  - Restore the original screen at exit

These output switches are all "toggles".  This means that specifying the
switch on the command line toggles the	switch	value  to  the	opposite
state of the default value (either ON or OFF).	For example,  the  value
of the /k switch is normally OFF.  Specifying /k  on  the  command  line
will cause space values to be shown in	Kilobytes,  rather  than  Bytes.
However, if /k is configured to be ON as a default, specifying it on the
command line will cause space values to be shown in  Bytes  rather  than
Kilobytes.  These switches may be used together and with other	switches
in many different combinations.

The /e switch causes the display screen to be cleared before any  output
is displayed.  The screen is cleared using the current number of  screen
lines (rows), which may be different from the standard 25  lines  if  an
EGA or VGA adaptor and monitor are being used.

The /h switch causes the file  entries to  be  displayed  in  horizontal
rather than vertical sequence according to the	sort  option  specified.
This is handy when more than a screen's worth of output is generated, so
that the sequence of file entries is continuous when the screen scrolls.

The /k switch requests that system memory and disk space information  be
displayed  in  units  of Kilobytes (1024 bytes), rather than the default
units of bytes.  In addition, these values are	rounded  upward,  taking
into  account the allocation unit (cluster) size for the specified disk.
System memory values are simply rounded to the next higher Kilobyte. Use
of  the  /k  switch  will reveal the actual amount of disk space used by
each file, rather than the normal file size, which  may  be  much  less.
If an individual file has a size greater than 999,999  bytes,  the  file
size is displayed in Kilobytes, even if the /k switch  isn't  specified.
This is necessary since the width of the file size field is  limited  to
six digits.

The /m switch requests that the system CPU performance be  measured  and
displayed when the /i switch is also specified.  Since this process  can
take up to about 10 seconds on an 8088 system, the default  is	OFF.  If
you are using a fast system, you may prefer to configure the  value  ON.
See the section titled System Information Summary for details.

The /o switch requests that an alternate format be used when  displaying
system and file date and time values.  Two formats are	supported,  long
and short.  For example, for the long format values: 25-Nov-88 12:55:32,
the equivalent short format would be 11-25-88 12:55p.  The advantage  of
using the long format is that the month is more readable and  times  are
displayed in seconds for better accuracy.  The advantage  of  the  short
format is that dates are easier to compare when using the /d switch, and
the format is similar to the standard DOS date and time format.

The /p switch requests that a title line be displayed which  labels  the
individual output columns displayed for the /1	switch.  The  format  of
the displayed information is somewhat different when both the /a and  /1
switches are specified.  You may wish to turn off  the	/p  switch  when
redirecting the program output to a file to be used as input to  another
program.

The /q switch suppresses the console reads  which  normally  occur  when
output information is about to scroll off the screen.  You may	wish  to
specify this switch when a large amount of  output  is	being  generated
(/g or /a used without /t).

The /u switch requests that an alternate format be used when  displaying
individual filenames.  Two formats are supported, upper and lower  case.
The lower case format is usually more readable, but this depends on  the
video monitor and number of screen lines being used.

The /v switch causes the disk volume label  (if  any),	and  the  target
path name to be displayed before the information for  individual  files.
In this case, the path name is not displayed on the first  totals  line,
which is the normal default.  You may wish to use this switch  when  you
are working with long path names, to prevent truncation  of  information
on the first totals line.

The /w switch requests that the number of screen lines be  reset  to  25
when the program is about to exit in a video  mode  with  more	than  25
screen lines when an EGA or VGA adaptor is  in	use.  A  necessary  side
effect of this is that the program must wait for the user to press a key
just prior to exiting and the screen  is  cleared.  If	this  switch  is
configured ON, you will have to specify /w/z when you wish to use the /z
switch.  See the section titled EGA  and  VGA  Switches  for  additional
information.

The /z switch requests that the program save the contents of the  screen
(including the cursor location and size) on entry,  and  that  these  be
restored when the program terminates.  This requires  that  the  program
wait for the user to press a key just prior  to  exiting,  so  that  the
final screen output is not prematurely lost.  Screen sizes of up  to  80
columns by 50 lines for EGA and VGA adaptors are supported.  /z  may  be
ignored  if  used  together  with  either  the /w, /25, /35, /43, or /50
switch since the restored screen size could be incorrect after the video
mode change requested by these other switches.

It is also possible that /z will be ignored if used  together  with  the
/g switch when processing a large number of directories.  The  directory
buffer size is 2000 bytes  which  allows  up  to  about 125 16 character
directory names to be processed.  If  the  directory  buffer  fills,  it
automatically expands into the screen save buffer  (an	additional  8000
bytes), which allows up to a total of about 625 16  character  directory
names to be processed.

------------------------------------------------------------------------

4.3	Filename Column Switches

------------------------------------------------------------------------

The /1, /2, /4, and /6 switches specify the number  of	filename  output
columns and, inversely, the amount of file information displayed:

/1 - 1 column  - File name, size,  clusters allocated,	% of space used,
		 date, time, starting cluster and sector, and attributes

/2 - 2 columns - File name, size, date and time

/4 - 4 columns - File name and size

/6 - 6 columns - File name only

A larger number of columns allows more files  to  be  displayed  on  the
display  screen  at one time, at the cost of losing some of the detailed
file information.  A smaller number of columns allows more detailed file
information to be displayed, at the cost of only being able to display a
limited number of files.  All of these switches are mutually  exclusive;
only one should be specified.  The default switch is /2.

Subdirectory entries  (normally found in the root directory)  are  shown
with special screen colors, for emphasis.   This is  especially  helpful
when using the /6 switch, since there isn't room for the <Dir> indicator
(directory names may be up to 11 characters long, just like file names).
File name colors indicate the most significant attribute of the file  in
the order: System, Hidden, Read-Only, Archive, and Normal.

The file size is normally displayed in bytes, or  Kilobytes  if  the  /k
switch is specified.  If /1 is specified, the number of  clusters  which
are allocated to the file and the percent of  space  actually  used  are
also displayed.

The date and time the file was last modified  are  displayed  in  either
long or short format, depending on the /o switch value.  The time a file
was last written is only accurate to a resolution of  two  seconds;  all
values will have an even number of seconds.  Files  created  with  early
versions of DOS may not have either a date or time stamp.  In this case,
the date and time fields will appear as periods.

If /1 is specified, the starting cluster  number  and  starting  logical
sector number for the file are displayed, as are the file attributes:

A - Archive	R - Read/Only	H - Hidden	S - System

------------------------------------------------------------------------

4.4	EGA and VGA Switches

------------------------------------------------------------------------

/25 - Display 25 lines on EGA or VGA monitor
/35 - Display 35 lines on EGA or VGA monitor
/43 - Display 43 lines on EGA or VGA monitor
/50 - Display 50 lines on EGA or VGA monitor

These switches change to the specified number  of  screen  lines  (rows)
when an Enhanced Graphics Adaptor (EGA) or Video  Graphics  Array  (VGA)
video adaptor and monitor  are	in  use.  The  screen  is  automatically
cleared and the screen	remains  set  to  this	size  when  the  program
terminates (unless /w is specified  when  it  is  reset  to  25  lines).
If the number of screen lines has already been set to  a  value  greater
than 25, the program will  automatically  use  the  current  value.  The
use of a monochrome monitor connected to an EGA card  is  not  supported
by these switches.

For an EGA, the native modes are 25 and 43 lines.  The 35  and	50  line
modes are synthesized by dynamically creating  new  EGA  fonts.  The  35
line mode is more readable than the 43 line mode.  The 50 line	mode  is
rather difficult to read since it is formed by dropping  the  last  scan
line of each character which causes the partial loss of  the  descenders
of some lower case letters.

For a VGA, the native modes are 25, 43, and 50 lines.  The 35 line  mode
is synthesized as for the EGA.	The 50 line mode is readable, since  the
VGA can use 400 vertical scan lines, rather than the 350 of the EGA.

Since versions of DOS prior to 4.0 neither properly recognize nor  fully
support all of the operational modes  possible	with  the  EGA/VGA  BIOS
(43 line mode, for example), you may  experience  strange  results  when
using these modes at the DOS command  prompt.  In  particular,	ANSI.SYS
does not recognize 43 line mode and may cause the DOS command prompt  to
appear on screen line 25, overlaying data  previously  displayed  there.
If you normally use ANSI.SYS (or other equivalent  ANSI  console  device
drivers) with an EGA/VGA monitor, you  may  wish  to  configure  the  /w
switch ON which handles this problem.  Turning the option ON will  cause
SD to wait for a character to be typed when it is about to  exit  in  an
EGA/VGA video mode with more than 25 screen lines.  After a character is
typed, the standard 25 line video mode is reset, the screen  is  cleared
and the program terminates.

If you are using DOS 4.0 with ANSI.SYS, you MUST specify the new /L ANSI
command line switch if you plan to use more than 25  screen  lines.  You
may also change the number of screen lines using the MODE command:

DEVICE=ANSI.SYS /L		(In CONFIG.SYS)
MODE CON LINES=25 or 43 or 50	(In AUTOEXEC.BAT or at DOS prompt)

SD will decline to execute if the current video mode  is  other  than  2
(80x25 B/W) or 3 (80x25 Color) when a  color  monitor  is  in  use.  The
other 40 column text modes and graphics modes are not supported, but  it
is rare to encounter these modes other than in BASIC programs.

------------------------------------------------------------------------

5.0	System Information Summary

------------------------------------------------------------------------

The /i switch requests that a screen be displayed which  summarizes  the
system hardware configuration  and  memory  and  disk  information.  The
information is presented in six boxes.	The upper  left  box  summarizes
the system hardware configuration.  The upper  middle  and  right  boxes
summarize DOS and system  memory  information.	The  lower  three  boxes
summarize the  technical  information  for  the  specified  disk.  Other
switches which can be used with the /i switch include /e, /k, /m and /o.
For example, to compare two sets of drive parameters using an EGA/VGA:

D>SD C:/I/50 - display info for drive C: using 50 lines
D>SD D:/I/E  - display info for drive D: without clearing screen

Output generated by the /i switch may be redirected as follows:

D>SD C:/I >FILE

------------------------------------------------------------------------

5.1	System Hardware

------------------------------------------------------------------------

PC System Type - The PC System Type Code,  followed by the Submodel Type
and BIOS Level for PS/2 systems.  Typical system codes are as follows:

Code	System Types
----	------------
 FF	IBM PC
 FE	IBM PC-XT, IBM PC-PORTABLE
 FD	IBM PC-Jr
 FC	IBM PC-AT, IBM PC-XT/286, IBM PS/2-50,60
 FB	IBM PC-XT/2
 FA	IBM PS/2-30
 F9	IBM PC-CONVERTIBLE
 F8	IBM PS/2-70,80

ROM BIOS Date - The date contained in the ROM BIOS chip  which	provides
an indication of when the system was manufactured.

Processor Type - The type of CPU chip in the system.  Possible types are
8086/8, 80286, or 80386.

Performance - The computing performance of the system  CPU  relative  to
the original IBM PC and PC-XT.	The  /m  switch  must  be  specified  or
configured ON.	Memory Resident (TSR) programs that intercept the  timer
interrupt   may   make	 the   computed  CPU  performance  value  appear
artificially low.  You may wish to temporarily rename the CONFIG.SYS and
AUTOEXEC.BAT files, reboot the system and execute  the	command:  SD/I/M
to determine the true CPU performance.	Processing time ranges	from  10
seconds on 8088 systems to less than 1 second on 80386 systems.  You may
wish to run the test several  times,  since  the  value  may  fluctuate.
Typical system performance values are as follows:

System		CPU	MHz   Waits   Perf
------		---	---   -----   ----
INTEL	       80386	25	0    18.18
COMPAQ 386     80386	20	0    15.15
IBM PS/2-70    80386	20	1    14.08
IBM PS/2-80    80386	16	0    11.36
AT-CLONE       80286	12	1     8.69
IBM PS/2-60    80286	10	1     6.99
AT-CLONE       80286	8	0     5.88
IBM PC-AT      80286	8	1     5.52
AT-CLONE       80286	6	0     4.23
IBM PC-AT      80286	6	1     4.14
IBM PC-XT      8088	4.77	-     1.00

Video Adaptor - The type of  Video Display Adaptor currently being used.
Possible types are MDA, CGA, MCGA, EGA or VGA.

Drives (F/H/L) - The number of	(F)loppy and (H)ard drives in the system
and the DOS (L)ASTDRIVE value which may be specified in CONFIG.SYS.

Ports (S/P/G) - The number of  (S)erial, (P)arallel, and (G)ame ports in
the system.  Serial ports are often used for a modem or mouse,	parallel
ports are often used for printers and game ports are used for joysticks.

ANSI/CP/Mouse - ANSI indicates whether or not  an  ANSI  Console  Device
Driver	is  installed  in  the	system	(via CONFIG.SYS).  CP  indicates
whether or not an 80x87  math  Coprocessor  chip  is  installed  in  the
system.  Mouse	 Type	indicates  whether  or	not  a	Microsoft  Mouse
compatible software device driver is installed in the system.

------------------------------------------------------------------------

5.2	System Memory

------------------------------------------------------------------------

DOS Version - The version of PC-DOS or MS-DOS installed in the system.

Program Memory - The amount of memory used by the program, excluding the
buffer used to hold file entries, which is variable in size.

Environment - The amount of memory  currently  being  used  by	the  DOS
Environment allocated to the program.  The DOS SET command  is	used  to
add or delete Environment variables.

DOS Memory - The amount of memory  used  by  the  following  DOS  system
components: Interrupt Vectors in low memory, the Disk BIOS (IBMBIO.COM),
the  DOS kernel  (IBMDOS.COM),	FILES,	BUFFERS,  and any Device Drivers
specified in CONFIG.SYS, and any memory they allocate.

TSR Memory - The amount of  memory  used  by  the  resident  portion  of
COMMAND.COM (at a minimum) and	memory	allocated  to  any  subsequently
loaded	Terminate-and-Stay-Resident  type  programs  (such as  SDR.COM).
It also includes any currently free memory blocks which do not reside in
high memory (those previously released by TSR programs).

The DOS and TSR memory values can be very useful in  analyzing	how  the
memory currently being used is allocated and in finding overallocations.

Used Memory - The amount of system memory currently in use.

Free Memory - The amount of system memory currently not in use.

Total Memory - The total amount of system memory (below 640K).

EMS Version - The version of the Lotus-Intel-Microsoft	Expanded  Memory
Manager installed in the system, if any.  EMS allows any  PC  system  to
share paged memory on an EMS memory card between applications.	A device
driver must be installed in CONFIG.SYS to use this memory.

EMS Memory Used - The amount of EMS memory currently in use.

EMS Memory Free - The amount of EMS memory currently not in use.

EMS Memory Total - The total amount of EMS memory in the system.

EGA Memory - The amount of video memory installed (up to 256K) on an EGA
or VGA video display adaptor.

XMS Version - The version of the Lotus-Intel-Microsoft	Extended  Memory
Manager installed in the system, if any.  XMS allows a 286 or 386 system
to share Extended memory between applications.	A device driver must  be
installed in CONFIG.SYS to use this memory.

Free Memory - The amount of Extended memory (above 1Mb) managed  by  XMS
which is currently available for an 80286 or 80386 system.

Extended - The amount of Extended memory (above 1Mb) which is  currently
available for an 80286 or 80386 system.

------------------------------------------------------------------------

5.3	Disk Parameters

------------------------------------------------------------------------

Disk Drive - The name of the target disk drive from A: to Z:.  The drive
letter will be followed by one of  the	following  descriptors,  if  the
drive type can be determined:

NET	- Logical Network Drive
BIG	- Hard Disk Partition GT 32Mb
HARD	- Hard Disk Partition LE 32Mb
5.25"   - 5.25" Floppy Drive
3.5"    - 3.5"  Floppy Drive

OEM Boot Information - The name of the Original  Equipment  Manufacturer
(OEM) and the version of DOS used to format the disk.

Hidden Sectors - The number of sectors on a hard disk hidden from use by
DOS when processing the current disk partition.  This area on  the  disk
may either contain partition table information, or the data  in  another
partition, depending on the partitioning scheme used.

Reserved Sectors - The number of sectors reserved at  the  beginning  of
the disk for the boot sector, partition tables, etc.

FATs/EntrySize - The number of File  Allocation  Tables  (FATs) and  the
number of Bits Per File Allocation Table Entry for the disk.  This value
is 12 for disks formatted prior to DOS 3.0 and either 12 or 16 for disks
formatted with DOS 3.0 or later.  DOS uses 16 bit FAT entries if a  disk
has 4086 or more data clusters.

Sectors Per FAT - The number of Sectors Per File Allocation Table.

Directory Sector - The logical sector number of the Root  Directory  for
the disk (or hard disk partition).

Data Sector - The logical sector number of the Data (File) Area  on  the
disk (or hard disk partition).

Root Directory Size - The maximum number of entries in the  disk's  Root
Directory.

Total Sectors - The total number of sectors on the disk,  including  the
Boot sector(s), FAT sectors, Root Directory sectors, and Data sectors.

Sectors Per Track - The number of Sectors Per Track on the disk.

Heads (Sides) - The number of Heads (Sides or Surfaces) for  a	hard  or
floppy disk.  Some RAMDISKs may have too many heads for their own good!

Cylinders - The number of Tracks Per Side (Head or Surface) for a floppy
disk or a hard disk partition.	This value may be slightly smaller  than
the number of physical cylinders for a hard disk partition, due  to  the
use of some cylinders for partition information,  bad sector tables,  or
diagnostic purposes.  For a hard disk, the total number of  cylinders on
the drive is also displayed, but only for the first drive and partition.

Media Byte - The Media Descriptor Byte is used to describe the size  and
format of the disk media and is based on the following disk  parameters:
Sectors per Track,  Heads  (Sides),  and  Cylinders  (Tracks Per  Side).
Although the Media Byte is used  by  the  BIOS	to  determine  the  disk
characteristics  in  certain  cases, not all  DOS  BIOS  implementations
use exactly the same Media Bytes for the same disk types.  An example is
the 5.25" 1.2Mb and 3.5" 720Kb disk types which both use media byte F9.

Bytes Per Sector - The number of Bytes Per Sector on the disk.

Sectors Per Cluster - The number of Sectors Per Cluster on the disk.

Bytes Per Cluster - The number of Bytes Per Cluster on the disk.

Volume Serial Number - The Volume Serial Number for  the  disk.  DOS 4.0
places an 8 digit hexadecimal Volume Serial Number in the Boot Sector of
each disk when it is formatted.  This value  can  be  used  to	uniquely
identify a disk since it is different for each disk  (unlike disk Volume
Labels which may be the same).	The VSN.COM utility provided can be used
to create, change and delete Volume Serial Numbers on  disks  which  are
either formatted or used with any version of DOS.  See the  VSN.DOC file
for additional information.

Volume Label - The Volume Label for the disk.  Volume Labels are created
either when the disk is formatted or when the LABEL command is used.

Create Date - The date when the Volume Label was created.

Create Time - The time when the Volume Label was created.

Used Clusters - The number of Clusters in use on the disk.

Free Clusters - The number of Clusters not in use on the disk.

Total Clusters - The total number of Clusters  available  on  the  disk.
This does not include the space used by  the Boot Sector,  the FATs,  or
the Root Directory.

Used Space - The number of Bytes used and the Percent of space	used  on
the disk.

Free Space - The number of Bytes free and the Percent of space	free  on
the disk.

Total Space - The total number of Bytes  available  on	the  disk.  This
does not include the space used by  the Boot Sector,  the FATs,  or  the
Root Directory.

Some of the disk information is obtained by reading  the  Boot Sector of
the disk.  If either an error occurs when  reading  the  Boot Sector, or
invalid data is detected, this information will appear as NONE or zeros.
The values affected are the OEM Boot Information through  Cylinders  and
the Volume Serial Number value.

Standard DOS disk formats and their characteristics are shown below:

Disk Type	   Size   SPT	Heads	Cyls   Media	BPC   FAT
---------	   ----   ---	-----	----   -----	---   ---
5.25" SS  48 TPI   160K    8      1      40      FE     512   12
5.25" SS  48 TPI   180K    9      1      40      FC     512   12
5.25" DS  48 TPI   320K    8      2      40      FF    1024   12
5.25" DS  48 TPI   360K    9      2      40      FD    1024   12
5.25" DS  96 TPI   1.2M   15      2      80      F9     512   12

3.5"  DS 135 TPI   720K    9      2      80      F9    1024   12
3.5"  DS 135 TPI   1.4M   18      2      80      F0     512   12

PC-XT Hard Disk     10M   17	  4	305	 F8    4096   12
PC-AT Hard Disk     20M   17	  4	611	 F8    2048   16
PC-AT Hard Disk     30M   17	  5	731	 F8    2048   16

------------------------------------------------------------------------

6.1	Configuring the Program

------------------------------------------------------------------------

The SD program may be configured (using SDC) or patched (using DEBUG) to
change the various  program  defaults  to  those  you  prefer.	The  SDC
program is preferred over DEBUG since it is much easier and safer to use
and allows you to decide which combination of screen colors you  prefer.
It also allows you to judge the effect of your	changes  by  alternately
modifying the SD program and executing the modified program, all without
having to leave the configuration program.  Run the  DEMO2.BAT	file  to
see some examples of SDC program output.

If you are using DEBUG, you will need to refer	to  the  section  titled
Patch Area Format to obtain  the  necessary  offsets  and  data  values.
The following example shows how to use DEBUG to patch the SD program:

D>DEBUG SD.COM	  (Load SD.COM into memory using DEBUG)
-E107 '4'         (Change the default number of columns to 4)
-E118 01	  (Display the volume label as a default)
-E11B 1E	  (Change directory colors to Yellow on Blue)
-W		  (Write the modified file back to disk)
-Q		  (Exit to DOS from DEBUG)
D>SD		  (Execute the modified version of SD.COM)

Screen Color Configuration

Although it is possible to configure the SD program using either a color
or monochrome monitor, best results will be obtained if  you  are  using
the target monitor since you will be better able  to  judge  the  effect
of different screen color  combinations.  If  you  are	using  a  laptop
computer with a LCD display screen, you may wish to set  all  colors  to
White on Black for better readability.	You can do this as follows:

D>DEBUG SD.COM	  (Load SD.COM into memory using DEBUG)
-F11B L E 7	  (Change all screen colors to White on Black)
-W		  (Write the modified file back to disk)
-Q		  (Exit to DOS from DEBUG)
D>SD		  (Execute the modified version of SD.COM)

The foreground and background colors (screen attributes)  used	for  the
following screen fields may be configured:

Directory Colors apply to individual subdirectory entries.

System Colors apply to files with the System attribute.

Hidden Colors apply to files with the  Hidden  attribute,  but	not  the
System attribute.

Read/Only Colors apply	to  files  with  the  Read/Only  attribute,  but
neither the System nor Hidden attribute.

Archive Colors apply to files with the Archive	attribute,  but  neither
the System, Hidden, or Read/Only attribute.

File Colors apply to files with none of the above mentioned  attributes.

ARC File Colors apply to file entries inside ARC files.

File Size Colors apply to the file size, clusters, and percent of  space
used fields.

File Date Colors apply to the file date and time fields.

File Misc Colors apply to the file starting cluster and sector and  file
attribute fields for non-ARC files and file CRC codes for ARC files.

Graphics Colors apply to the  graphics	characters  which  are	used  to
vertically divide the filename columns and to form the lines of boxes.

Text Colors apply to the text strings which precede  numeric  or  string
values in the leading and trailing text lines and to  the  text  in  the
boxes displayed for the /? and /i switches.

Info Colors apply to the numeric or string values which follow the  text
strings in the leading and trailing text lines and to the values in  the
boxes displayed for the /i switch.

Normal Colors apply to the trailing characters on each output line,  the
new output lines created when the screen is  scrolled,	the  SDR  prompt
line, and the title fields for the various boxes  displayed  by  the  /?
and /i switches.  These colors should be set  to  the	standard  screen
colors used at the DOS command prompt.

The Graphics, Text, Info and Normal Colors should be  selected	so  that
they all use the same background color (the default is black), for  best
results.  The remaining colors should  be  selected  so  that  they  are
sufficiently different from one another to be individually  recognizable
and are easily readable on the video monitor being used.  Although there
are 1792 possible color combinations, only a few are tolerable for long.

------------------------------------------------------------------------

6.2	Patch Area Format

------------------------------------------------------------------------

The following information is only provided as a reference for those  who
need to use DEBUG to change the program defaults; it is  not  needed  to
run the SDC configuration program.

The following data area at the beginning  of  the  SD.COM  file  may  be
modified using the standard DOS  DEBUG	program.  Only the  data  values
beginning with the Sort Type field should be modified.	Only the  toggle
switches marked (SDC) should normally be turned ON as a default.

SDC	DEBUG	Field		       Default	 Possible
Offset	Offset	Description	       Value	 Values
------	------	-----------	       -------	 --------
  01	 0100	Jump Instruction	  -	 ?? ?? ??
  04	 0103	Program Type		  -	 1=SD.COM, 2=SDR.COM
  05	 0104	Program Version 	  -	 60H = Version 6.0

  06	 0105	Sort Type		 'X'     'B','C','D','F','X','N'
  07	 0106	Sort Direction		 '+'     '+','-'
  08	 0107	Filename Columns	 '2'     '1','2','4','6'

  09	 0108	Process ARC Files	  0	 /A = 0,1
  10	 0109	Erase Console Screen	  0	 /E = 0,1	  (SDC)
  11	 010A	Process Global Dirs	  0	 /G = 0,1
  12	 010B	Horizontal Sequence	  0	 /H = 0,1	  (SDC)
  13	 010C	System Information	  0	 /I = 0,1
  14	 010D	Just Display Colors	  0	 /J = 0,1
  15	 010E	Space in Kilobytes	  0	 /K = 0,1	  (SDC)
  16	 010F	List File Names 	  0	 /L = 0,1
  17	 0110	Measure CPU Performance   0	 /M = 0,1	  (SDC)
  18	 0111	Date/Time Format	  0	 /O = 0,1	  (SDC)
  19	 0112	Print Title Lines	  1	 /P = 0,1	  (SDC)
  20	 0113	Quick Output		  0	 /Q = 0,1	  (SDC)
  21	 0114	Redirected Output	  0	 /R = 0,1	  (SD)
  22	 0115	System & Hidden Files	  1	 /S = 0,1	  (SDC)
  23	 0116	Totals Lines Only	  0	 /T = 0,1
  24	 0117	Upper/Lower Case	  0	 /U = 0,1	  (SDC)
  25	 0118	Display Volume Label	  0	 /V = 0,1	  (SDC)
  26	 0119	Reset to 25 Screen Rows   0	 /W = 0,1	  (SDC)
  27	 011A	Restore Original Screen   0	 /Z = 0,1	  (SD)
		Suppress Activation Msg   0	 /Z = 0,1	  (SDR)

  28	 011B	Directory FG/BG Colors	7+16*1	 White	 on Blue
  29	 011C	System	  FG/BG Colors	4+16*3	 Red	 on Cyan
  30	 011D	Hidden	  FG/BG Colors	5+16*3	 Magenta on Cyan
  31	 011E	Read/Only FG/BG Colors	6+16*3	 Brown	 on Cyan
  32	 011F	Archive   FG/BG Colors	0+16*3	 Black	 on Cyan
  33	 0120	File	  FG/BG Colors	1+16*3	 Blue	 on Cyan
  34	 0121	ARC File  FG/BG Colors	3+16*1	 Cyan	 on Blue
  35	 0122	Size	  FG/BG Colors	1+16*7	 Blue	 on White
  36	 0123	Date	  FG/BG Colors	0+16*7	 Black	 on White
  37	 0124	Misc	  FG/BG Colors	4+16*7	 Red	 on White
  38	 0125	Graphics  FG/BG Colors	4+16*0	 Red	 on Black
  39	 0126	Text	  FG/BG Colors	2+16*0	 Green	 on Black
  40	 0127	Info	  FG/BG Colors	3+16*0	 Cyan	 on Black
  41	 0128	Normal	  FG/BG Colors	7+16*0	 White	 on Black

  42	 0129	Directory Mono Attrs	0+16*7	 Reverse Video
  43	 012A	System	  Mono Attrs	9+16*0	 Intensified Underlined
  44	 012B	Hidden	  Mono Attrs	1+16*0	 Normal Underlined
  45	 012C	Read/Only Mono Attrs	1+16*0	 Normal Underlined
  46	 012D	Archive   Mono Attrs   15+16*0	 Intensified
  47	 012E	File	  Mono Attrs	7+16*0	 Normal Video
  48	 012F	ARC File  Mono Attrs	7+16*0	 Normal Video
  49	 0130	Size	  Mono Attrs	7+16*0	 Normal Video
  50	 0131	Date	  Mono Attrs	7+16*0	 Normal Video
  51	 0132	Misc	  Mono Attrs	7+16*0	 Normal Video
  52	 0133	Graphics  Mono Attrs   15+16*0	 Intensified
  53	 0134	Text	  Mono Attrs	7+16*0	 Normal Video
  54	 0135	Info	  Mono Attrs   15+16*0	 Intensified
  55	 0136	Normal	  Mono Attrs	7+16*0	 Normal Video

  56	 0137	Hot Key Control Code	  4	 0-15		  (SDR)
  57	 0138	Hot Key Scan Code	  1	 0-255		  (SDR)
  58	 0139	Hot Key String	CTRL-ESCAPE Keys 16 chars,NULL	  (SDR)
  75	 014A	Prompt Character	  26	 0-255		  (SDR)
  76	 014B	Dir Buffer Length	 1024	 512-4096	  (SDR)
  78	 014D	File Buffer Length	10240	 2560-40960	  (SDR)
  80	 014F	Screen Buffer Type	  1	 1/2=4000/8000	  (SDR)

			  Color Codes

      0 = Black       1 = Blue	      2 = Green       3 = Cyan
      4 = Red	      5 = Magenta     6 = Brown       7 = White

SD  dynamically  selects  either  the  color  or  monochrome  attributes
specified  at  the  offsets  in  the  table  above, based on the type of
video display adaptor being used.

Once the desired foreground and background colors (attributes) have been
selected for a screen field, compute the field attribute byte using  the
formula: ATTRIBUTE = FCOLOR+16*BCOLOR, where FCOLOR and BCOLOR	are  the
foreground and background colors (attributes), respectively.

Intensified foreground colors corresponding to the 8 standard colors may
be  selected  by  adding 8 to the foreground color number.  For example,
specify foreground color (6+8)=14  to  get  a  foreground  Yellow  color
instead  of  the  unintensified  Brown.    The blinking  attribute  (for
foreground characters) may be selected by adding  8  to  the  background
color number.  However, use of this attribute  is not recommended, since
it may be distracting.	For a  monochrome  monitor,  selecting	Blue  on
Black (1+16*0) will cause the screen field to be underlined.

------------------------------------------------------------------------

6.3	Multiple Drive Processing

------------------------------------------------------------------------

The SDB.BAT batch file allows you to execute the SD program for multiple
disk drives automatically.  This is especially useful when searching for
files which may be on other drives and possibly in other directories  or
ARC files on other drives.  It is  also  handy	when  displaying  totals
information for one or more directories or ARC files on several drives.

Before using SDB, you must use a text editor to edit the file to  select
the disk drives you wish to process (the default is drives C, D, and E).
It is recommended that you only select partitions  on  hard  disks,  and
possibly other drives which are not floppy disk drives,  but  any  valid
drive letters may be selected, and in any desired order.  You may  abort
the output at any point by pressing ESC or CTRL-C, so you  should  order
the drive letters by  expected	frequency  of  use.  The  following  two
statements must appear in the batch file for each drive (d):

sd d:%1%2%3%4%5%6%7%8%9/$
if errorlevel 2 goto end

The last drive is an exception, where the /$ and following if  statement
must be omitted.  The /$ switch tells SD  to  provide  a  pause  between
successive drives in order to synchronize  screen  scrolling.  Once  you
are familiar with the use of SDB,  you	may  wish  to  remove  the  help
information at the beginning of the file to keep the file  as  small  as
possible.  If you are using DOS 3.3 or higher, you may wish to add an  @
character before the echo off statement to suppress it.

Although you can use almost any valid SD  command  line  with  SDB,  the
following restrictions exist:

1) You must type a space before any command line parameters.

2) You must not specify a specific drive letter on the command line.

3) Output redirection to a device or file isn't supported.

4) If you don't specify any command line parameters, help information
   is displayed.  To select the current directory, specify * or ? or
   edit the file to remove the help information as described above.

Some typical examples of using SDB are provided below:

D>sdb \abc/g

Display information for  all files  whose names  begin with  abc in  all
directories on all selected drives.

D>sdb /v/t

Display volume label and totals information for  the  current  directory
on all selected drives.

D>sdb \/gt

Display volume label and  grand totals	information for  all directories
on all selected drives.

D>sdb \/gt/a

Display volume label and grand totals information for all  ARC files  on
all selected drives.

------------------------------------------------------------------------

6.4	Multitasking Environments

------------------------------------------------------------------------

There are two  different  ways	to  use  SD  with  various  multitasking
environments such as  Microsoft Windows or DESQview.  The  first  method
is to use SD in its normal mode  where	it  writes  output  directly  to
Video Memory for fast color output.  This method will not  allow  it  to
run in a window.  The supplied SD.PIF file tells Microsoft Windows  that
SD is to be used in this mode.	The second method is to make a	copy  of
SD (SDW) which will have the /r switch turned  on  as  a  default.  This
will allow it to run inside a window, but more slowly and without color.

Create the SDW file as follows:

D>COPY SD.COM SDW.COM
D>DEBUG SDW.COM
-E114 1
-W
-Q

For Microsoft Windows, copy  SD.PIF  to  SDW.PIF  and  use  the  PIFEDIT
utility to edit the SDW.PIF file to indicate that the program  does  not
directly modify the screen.  For DESQview, SDW may be used without being
specially defined. However, you must add SD as a program which will tell
DESQview that it writes directly to the screen.

------------------------------------------------------------------------

7.1	Error Messages and Return Codes

------------------------------------------------------------------------

The following error messages are displayed and system return  codes  set
for various conditions which may arise.  An audible tone is generated to
alert the user of the error (for code 2 and above) in case the output is
being redirected.  The return codes may be tested using the standard DOS
IF ERRORLEVEL statement in a .BAT file.

0 - One or more matching files were found.
1 - No matching files were found.
2 - Bad switch or ESC or CTRL-C pressed.
3 - Bad drive (doesn't exist or syntax error).
4 - Bad path (doesn't exist or syntax error).
5 - Bad file specification (syntax error).
6 - Bad date (too large or syntax error).
7 - Too many directories (when /g is specified).
8 - Bad video mode (unsupported video mode).

Other errors which are detected relate to the processing of  ARC  files.
The first type are standard DOS file I/O error	codes  which  can  occur
when opening, reading, or closing ARC files.  The error message is:

Error <n> on <drive><path><filename>, where <n> is as follows:

1 - Invalid function code	5 - Access denied
2 - File not found		6 - Invalid handle
3 - Path not found	       12 - Invalid access value
4 - Too many open files

The only one of these errors which is likely to occur  is  4,  in  which
case you need to increase the FILES specification in CONFIG.SYS.

The second type of error is caused by bad data in the header field for a
file in an ARC file, or  attempting  to  process  a  file  with  the  /a
switch which is not an ARC file.  The error message is:

Bad header in <drive><path><filename>

------------------------------------------------------------------------

7.2	Modification History

------------------------------------------------------------------------

01-Jan-89 ... V6.0

Added /gt switch for Grand Totals information only.
Created SDB.BAT file for processing multiple drives.
Added new /$ switch to display "More" message and read
keyboard before exiting for use in batch file mode.
Set exit code 2 if user types ESC/CTRL-C for batch files.
Display "More" message when exiting with /w or /z.
Added target path name to No Matching Files message.

Reorganized System Information Summary display screen.
Added Title Line with Current Date and Time.  Added CPU
Processor Type, Environment Size, and Extended Memory
Specification (XMS) Version and Free Memory Size.

Improved /r processing for multitasking environments.
Added separately configurable colors for File Size,
Date and Time, and Miscellaneous File Information.
Changed System, Hidden, Read/Only, and File Colors
to use Cyan background color rather than White.
Changed ARC colors from Blue on Cyan to Cyan on Blue.

Use new-style INT 25H system call to read the Disk
Boot Sector for Hard Disk Partition Sizes GT 32Mb.
Identify Floppy Drives, Hard Disks and Big Partitions.
Only display Total Cylinders for Hard Disk Drive C:.
Improved tests for Network Drives when errors occur.
Improved detection of Submodel Type and BIOS Level.
Identify "Crushed" Storage Method for .ARC Files.

Determine Hidden Sectors, Sectors Per Track, Heads,
and Cylinders for RAMDISKs with valid Boot Sectors.
Handle Boot Sector Jump Offset GT 128 bytes correctly.

Improved SDR installation and activation messages.
Added SDR /q (suppress installation message) and /z
(suppress activation message) DOS command line switches.

------------------------------------------------------------------------

7.3	Product Support

------------------------------------------------------------------------

This product represents more than a thousand hours of work over  several
years.	I believe it is a good example of  the	SHAREWARE  concept;  you
get to try the product	without  prior	commitment  and  only  chose  to
support it if you find it useful.  Many of the	continuing  improvements
have been implemented in response  to  user  suggestions  and  requests.
If you find that you continue to use this product once you  have  become
familiar with it, it is obviously of some value to you;  please  support
the SHAREWARE concept by registering your copy and sharing the	SD60.ARC
file with others.

The SD60.ARC file may be freely copied and distributed as  long  as  the
only  charge  is  for  media  and  reproduction  costs,  etc.  Under  no
conditions should the program either be sold for a profit or distributed
in modified form without the permission of the author.	Commercial  site
licenses or special versions are available on request.

As supplied, the programs in this product are fully functional	with  no
missing or crippled features.  However, the SHAREWARE concept is  a  two
way process.  In order	to  keep  the  size  of  the  distribution  file
reasonable, and to encourage  users  to  register  their  copy	of  this
product, the SDC configuration utility program is only available through
the mail when you register your copy of SD.

This easy-to-use program provides full screen color  menus  which  allow
you to change any of the default sort options,	screen	colors,  command
line switch values, or other  program  options	in  SD	or  SDR  to  the
defaults you prefer.  Although you can also use the DOS DEBUG program to
make these changes by patching the SD  or  SDR	files,	SDC  makes  this
process much quicker and safer.

To register your copy of SD, please complete the order and  registration
form below and return it together with a contribution of $20. In return,
you will receive a disk containing the latest version of all of  the  SD
utility programs (including the SDC program), together with the complete
source code!  This will allow you to see how the  programs  work,  learn
more about assembly language programming, or make your own enhancements.
If you do improve the program, please let me know so  that  the  results
can be shared with other users.  I prefer to coordinate all  changes  so
that they are released in an orderly fashion.

A comprehensive DOS HELP utility is available separately which	provides
quick, friendly access to complete DOS command reference information for
DOS 2.0-4.0.  The DEMO2.BAT file provides a demonstration of some of the
capabilities of this product.  The DOS HELP utility  is  also  available
for a contribution of $20, or you can receive BOTH the SD  Utility  Disk
and the DOS HELP Disk for a contribution of $30.  Please specify whether
you want the IBM PC-DOS or ZENITH MS-DOS Version of the HELP Utility.

Even if you don't register or  formally  support  this  product,  please
share copies of the SD60.ARC file with other users and/or upload  copies
to Computer Bulletin Boards you use.

Users  who  have  supported   this  product  in  the  past  are  largely
responsible  for  the  existence  of  the  current  version.  Previously
registered users can receive the latest version of either SD or HELP for
a $10 contribution, at any time.  Normally  I only  supply  5.25"  360Kb
floppy disks.  If you can only use 3.5" 720Kb disks,  either  add  $2.50
per disk, or include the appropriate number  of  3.5"  disks  with  your
order.	I can accept checks, money orders and purchase orders.

If  you  wish  to  contact  me	with  problem reports,	suggestions  for
improvements,  and/or  especially  large  financial  donations, I can be
reached using the information provided below:

John F. Stetson 		(Home) (301) 946-5615 (8PM-11PM EST)
42 Tivoli Lake Court		(Work) (301) 340-4544 (10AM-6PM EST)
Silver Spring, Md. 20906

------------------------------------------------------------------------

IBM and PC-DOS are trademarks of IBM Corporation.
MICROSOFT and MS-DOS are trademarks of Microsoft Corporation.
DESQview is a trademark of Quarterdeck Office Systems.
ARC is a trademark of SEA Corporation.

------------------------------------------------------------------------

		SD V6.0 Order and Registration Form

------------------------------------------------------------------------
Quantity	Item					Price	Total
------------------------------------------------------------------------

  ___		Sorted Directory Utility Disk		$20.00	$_______

  ___		IBM PC-DOS HELP Utility Disk		$20.00	$_______

  ___		ZENITH MS-DOS HELP Utility Disk 	$20.00	$_______

  ___		SD Utility Disk AND DOS HELP Disk	$30.00	$_______
		Specify IBM (_) or ZENITH (_)
						      Subtotal	$_______
		Update For Previously Registered User
		Subtract 50% of Subtotal			$_______

						      Subtotal	$_______

		Add $2.50 Per Disk For 3.5" Diskettes           $_______

						      Subtotal	$_______

		MD Residents Please Add 5% Sales Tax	   Tax	$_______

		Thanks For Your Support!		 Total	$_______

------------------------------------------------------------------------

    Name _______________________________________________________________

 Company _______________________________________________________________

 Address _______________________________________________________________

	 _______________________________________________________________

Phone(W) ___________________________ Phone(H) __________________________


Where did you obtain SD (Bulletin Board, Software Library, Friend)?

	 _______________________________________________________________

Comments _______________________________________________________________

	 _______________________________________________________________

	 _______________________________________________________________


------------------------------------------------------------------------

```
{% endraw %}

## SDR.DOC

{% raw %}
```
------------------------------------------------------------------------

	   SDR: IBM-PC Resident Sorted Directory Utility V6.0

		Copyright (C) 1986-89 By John F. Stetson

			  All Rights Reserved

------------------------------------------------------------------------

	Contents

------------------------------------------------------------------------

1.0	INTRODUCTION
1.1	Program Requirements
1.2	Design Philosophy

2.0	PROGRAM USAGE
2.1	Installation
2.2	Activation
2.3	Execution
2.4	Termination
2.5	Removal

3.0	APPENDICES
3.1	Switch Differences
3.2	Configuration
3.3	Error Messages

------------------------------------------------------------------------

1.1	Program Requirements

------------------------------------------------------------------------

SDR.COM is a memory resident  sorted  directory  utility  program  which
operates on IBM-PC compatible computer systems using the IBM  PC-DOS  or
Microsoft MS-DOS Operating System Version 2.0 or higher.

SD.COM is the non-memory resident version of the  program.    Since  the
capabilities  and  command  syntax  of	the  two  programs are virtually
identical, only the differences and additional capabilities  of  SDR.COM
are  covered  in  this	document.  It is recommended that the user first
become familiar with the use of SD.COM before using SDR.COM.   The  bulk
of  the  command syntax for SDR.COM is therefore covered in the document
for SD.COM.

This version of the program  requires  about  16Kb  of	disk  space  and
about 24-68Kb of memory during	execution,  depending  on  the	size  of
the directory, file and screen buffers configured by the user.	With the
default buffer sizes, the program uses about 32Kb of system memory.

Support is provided for IBM-PC	compatible  MDA, CGA, MCGA, EGA, and VGA
video adaptors and monitors.

------------------------------------------------------------------------

1.2	Design Philosophy

------------------------------------------------------------------------

As is the case for SD.COM, SDR.COM provides more  information  than  the
resident  DOS DIR command about the files on a disk, and allows the user
to select, sort, format, and display the information  in  a  variety  of
ways.	 This is accomplished by specifying a pattern name to select the
desired files and by  specifying  any  of  a  variety  of  command  line
"switches"  which  allow you to modify the behavior of the program.  The
switch names have been designed using letters, as much as  possible,  so
that  it  is easier to associate the function of a switch with its name.
In addition, the default switch values have  been  carefully  chosen  to
reflect their most common use.

The advantage of a memory resident program is that it is  almost  always
available for use, regardless of the other program(s) currently running.
Otherwise, it would be necessary to either exit the current program  and
return to the  DOS system command prompt in order to run the program, or
use the "shell" facility that some programs  provide  to  execute  other
programs  and  then regain control.  Since not all programs provide this
capability, having your frequently used  utilities  in	memory	resident
form  greatly increases their availability.  In addition, execution of a
memory resident program is virtually instantaneous, since the program is
only loaded from disk once.

The primary disadvantage  of  a  memory  resident  program  is	that  it
consumes  system  memory  which  would otherwise be available to execute
other programs.  Most memory resident programs are loaded once at system
boot time  and	remain	in  memory  permanently.  Well	designed  memory
resident programs are carefully written to minimize the amount of memory
they use, and allow the user to configure the program to achieve a  good
balance between functionality and  memory  consumption.    Another  more
subtle disadvantage is that most  non-trivial  memory resident	programs
must employ a variety of techniques to work around  the  limitations  in
the DOS operating system and the IBM-PC BIOS.  Since there is not yet  a
universally accepted standard for what these techniques should be, there
is  no guarantee that any one memory resident program will be compatible
with another, or even with other non-memory resident programs.

However, enough of  a  standard  has  emerged  to  write  useful  memory
resident  programs, and the benefits of frequently used programs greatly
outweigh the occasional incompatibilities for most users.  This  program
has been designed in such a way as to try and maximize its compatibility
with   other   programs.    However,  there  is   no   guarantee    that
incompatibilities  will  not  arise  with a specific program.  When this
occurs, a good strategy to follow is to try to simplify the  environment
as  much  as  possible;  remove  other memory resident programs one at a
time, or try changing the order in which they are loaded.

------------------------------------------------------------------------

2.1	Installation

------------------------------------------------------------------------

Unlike non-memory resident programs, SDR is normally only executed once,
immediately  after the operating system is booted.  This is best done by
placing  the  command  "SDR"  in  the  AUTOEXEC.BAT  file    which    is
automatically executed by DOS after boot-up.  As mentioned above, it may
be necessary to experiment with different  loading  orders  of	multiple
Terminate-and-Stay-Resident  programs.	In general, the more complex TSR
type programs (such  as  BORLAND's  SideKick)  should  be  loaded  after
simpler TSR  programs.	Like  most  TSR  programs, SDR	should	only  be
installed at the top DOS command level, not from inside another program.

There are two SDR DOS command line switches  (/q and /z)  which  may  be
specified at installation time.  A third switch (/r) is used  to  remove
the program from memory and is described below.  These	switches  should
not be confused with those used once you have activated the program  and
are operating inside it.  The help screen displayed in response  to  the
/? switch (inside SDR) flags these switches with an (*) character  as  a
reminder that they are to be used on the DOS (not the SDR) command line.

The /q switch requests	"quiet"  installation  mode.  Normally,  if  the
installation is successful, SDR will display a message in a box  showing
the total amount of memory it is using and the activation key  sequence.
This message cannot be suppressed by redirecting it  to  the  DOS  "NUL"
device, since it is not displayed using  standard  DOS	video  services.
Specifying the /q switch will prevent the message from being  displayed.

Similarly, the /z switch causes suppression of the message box which  is
normally displayed when the program is activated by pressing the hot key
sequence.  See the sections below  for	additional  information.  As  an
example, you can install SDR and suppress both message boxes as follows:

D>SDR /Q/Z

Although it is rather unlikely, installation of SDR can  be  denied  for
the following reasons:

1) DOS 2.0 or later is required.

2) The program has already been loaded into memory.

3) The directory or file buffer sizes requested are out of bounds.   The
   program was incorrectly  patched - this can't happen if the available
   configuration program (SDC) is used.

4) There is insufficient system memory available for the resident  code,
   data, directory and file buffers.

5) The program is unable to release memory it no longer needs.

6) The program is unable to allocate memory for the screen buffer.

------------------------------------------------------------------------

2.2	Activation

------------------------------------------------------------------------

Since the program is "memory resident", it is  available  for  use  even
though another program is currently running. The program is activated by
pressing the activation or "hot" key combination. The default activation
key combination is CTRL-ESC (while holding down the CTRL key, press  the
ESC key at the same time).  These key combinations can be changed  using
the configuration program so as not to conflict with their possible  use
by other programs.

Although the program will usually be able to  "go active"  or  "pop up",
there are a few situations where this is not possible (or desirable!):

1) If the program is already active.  Pressing the activation key  while
   inside the  program is sometimes used to exit a TSR program.  Since a
   different key (ESC) is used for this purpose  in  SDR,  this  is  not
   allowed.

2) If Disk I/O is in progress.	Although not recommended,  you may  find
   that you can safely pop up SDR in the middle of reading or writing to
   a disk.  At other times, the request may be denied.	This is  due  to
   the need to serialize access to non-reentrant code in the PC BIOS.

3) If the current video mode is  either  40  column  text  or  graphics.
   Since SDR  requires	the  full  width of the screen in 80 column text
   mode, it will decline to  activate  if  the	current  video	mode  is
   incompatible with these requirements.  The primary programs which use
   these video modes are BASIC programs.

4) If a multitasking environment such as Microsoft Windows  or	DESQview
   is currently being used.  Since these  environments	involve  complex
   memory management functions, you should use SD rather than  SDR.  You
   CAN use SDR with Windows/386 if you install it while inside Windows.

In the situations above, the activation request will be acknowledged  by
an  audible  tone  or "beep", so that there is no doubt that the request
was declined.  However, there is another situation where the program may
not  appear  to activate.  Some programs or commands may perform certain
long-running functions which do  not  provide  an  opportunity	for  TSR
programs  to  activate.    A simple example is the TYPE command.  If you
type a large file and press the activation key during  the  output,  the
program  will  probably  not  go active and the audible tone will not be
generated.  However, when the command ends,  either  normally  or  by  a
CTRL-BREAK  interrupt,	SDR  will  activate.	Some TSR programs simply
refuse to activate in this situation.

Another similar situation can occur when  one  TSR  program  is  already
active	and refuses to allow a second TSR program to even "see" its hot-
key sequence.  This is a characteristic of  "ill-behaved"  TSR  programs
which  are  all too common.  Yet another scenario occurs when SDR "pops-
up" over another TSR program but appears to be "dead".  Sometimes simply
pressing  a  few  keys	will cause the "deadly embrace" to end, although
these keys may be passed back to the previously invoked program.

Since SDR dynamically determines  the  video  configuration, this  means
that  you can install it using one kind of video monitor and activate it
from another kind.  You can switch between MDA,  CGA,  and  EGA  or  VGA
monitors at will and SDR will adapt its operation to the monitor in use.

------------------------------------------------------------------------

2.3	Execution

------------------------------------------------------------------------

After the activation key is accepted, the program "goes active" or "pops
up".    At this point, the top few lines of the screen are cleared and a
box with several lines of information is displayed.  A prompt appears on
the screen line below the box.	Once you are familiar with the operation
of the program, you may wish to use the SDR DOS command line  /z  switch
to eliminate the box in  order	to  save  screen  space.  The  following
options are now available:

1) Enter a valid command line.	See below for details.

2) Press the RETURN key to display the current directory.

3) Enter /? to display command help information.

4) Press ESC or CTRL-C to return to the suspended program.

The complete form of the command line is:

D:\path> [/switches] [drive][path][filespec] [/switches]

The prompt string consists of the current drive letter, followed by  the
current  directory  path for the drive, followed by the prompt character
(which may be configured).  The SDR prompt may appear alarmingly similar
to  your  DOS  system prompt; the DOS command: PROMPT $P$G generates the
same type of prompt string.  To avoid confusion, SDR allows  the  prompt
character  to  be  changed,  and  the  default	is  a graphics character
different from the usual (>) character.

The rest of the command line  parameters  (drive,  path,  filespec,  and
switches)  are	just  like those accepted by the SD.COM program.  Please
refer to the documentation for SD for details.

The command line must be terminated by the  RETURN  or	ENTER  key.  The
Backspace key may be  used  to remove previously typed characters on the
command line.  Since SDR must avoid the use of DOS console  services  in
resident code, utilities like PCED, CED, and DOSEDIT which allow editing
the DOS command line will unfortunately not function inside SDR.

After the output of the current command is displayed, the prompt  string
is  redisplayed.   This allows you to enter as many commands as  desired
before returning to the  suspended  program.   Keep  in  mind  that  the
program which was in control when the activation key was pressed is in a
suspended state; this implies that you will not  wish  to  activate  SDR
(even  though  it is allowed) when executing a time-critical program.  A
good example of this is a modem communication program which  is  in  the
middle of a file transfer with a remote system.

To see SDR in operation, try the following example:

1) Execute the BASIC language interpreter with the command: BASICA

2) Enter the following BASIC command: FOR I=1 TO 999 : ? I,SQR(I) : NEXT

3) Press RETURN and wait until the screen fills

4) Press the SDR activation keys: CTRL-ESC

5) Press RETURN several times to display the directory

6) Press ESC to return to the BASIC program

7) Notice that the program picks up where it left off

8) Press CTRL-BREAK to terminate the BASIC program

Unlike most programs, you can't type ahead while the program is running.
This is due to the need to monitor the keyboard in order  to  pause  the
screen output.	If you wish to begin typing a new command, simply  press
ESCAPE (preferred) or Control-C to  immediately  terminate  the  output,
and then type the next command.

Console output may be paused by typing any other character  and  may  be
restarted in two different ways.  If RETURN is	pressed,  screen  output
resumes until the either the screen fills or  the  output  finishes.  If
any other character is typed, only a single line  of  additional  screen
output is displayed.  This allows you to easily  control  the  displayed
output so as to minimize the loss of existing screen data by  scrolling.
The recommended single line scroll keys are the Space Bar or Down Arrow.

------------------------------------------------------------------------

2.4	Termination

------------------------------------------------------------------------

The only way to exit from SDR to the suspended program	is  by	pressing
the  ESC or CTRL-C key from the SDR command prompt.  Pressing CTRL-BREAK
will not exit from SDR and will appear to be ignored, but the  interrupt
may be seen by the suspended program when SDR is exited normally.

If the ESC key is used to exit from SDR, the console screen is	restored
to  its original state, and the cursor position and size are restored to
their original state when the original program was suspended.

If the CTRL-C key is used to exit from SDR and the original screen  line
containing  the  cursor  before  SDR was activated is still visible, the
cursor is restored  to	its  original  state,  but  the  screen  is  NOT
restored.   A divider line is displayed over the last SDR prompt line to
clearly separate the original and subsequent screen output.  The  reason
for  this  behavior is to allow you to retain output generated by SDR in
order to be able to refer  to  it  when  you  return  to  the  suspended
program.  Once the original cursor line is overwritten, either by screen
output, scrolling, or clearing the screen, CTRL-C will cause the  entire
screen	to  be	restored,  just like ESC.  Therefore, if you plan to use
this feature, you will want to position  the  cursor  as  close  to  the
bottom	of  the screen as possible before activating SDR.  Once you have
referred to the SDR output, you may wish to perform  an  action  in  the
suspended  program  which  will  cause	the  screen  to be rewritten, in
order to avoid confusion and to resynchronize the display.

------------------------------------------------------------------------

2.5	Removal

------------------------------------------------------------------------

SDR prevents the user from loading multiple copies of itself in order to
avoid wasting memory.  It can be removed from memory by running it again
with the /r command line switch specified.  This  is  helpful  when  the
program is being configured for different screen colors, etc.  in  order
to avoid a system reboot to load a new copy of the program.  It can also
be useful if the need arises to release as much memory as  possible  for
some other purpose.

Although it is rather unlikely, removal of SDR can  be	denied	for  the
following reasons:

1) The program is not already loaded in memory.

2) Interrupt vectors previously saved and changed by  the  program  have
   been subsequently altered by another program.

3) The program is unable to release memory it no longer needs.

SDR will decline to remove itself from	memory	if  it	determines  that
another TSR program has stolen	one  of  the  interrupt vectors which it
saves and then changes.  In this case, you must remove the other program
from memory before you can remove SDR.	A good example is when BORLAND's
SideKick utility is used with SDR.  In this case, install SDR first  and
SideKick second.  You must remove SideKick first, and SDR  second.  This
is necessary since SideKick constantly monitors the interrupt vectors it
steals and if it detects that another program has stolen them, it steals
them back again!

Although a few TSR programs provide a means of	deinstalling  themselves
from  memory  (such  as  SDR),	most do not.  However, there are several
utilities available which provide this capability.  MARK and RELEASE  by
TurboPower  Software  and  INSTALL and REMOVE by PC Magazine are readily
available on many bulletin boards.   These  programs  require  that  you
execute  a  special program before installing a TSR program, and another
program when you wish to remove the TSR program.  They	work  by  saving
information about the state of the Interrupt Vector Table and DOS Memory
Control Blocks so that this information can  be  subsequently  restored,
thus effectively removing the TSR program.

There are also several utility programs available which display  all  of
the currently loaded TSR programs, along with  information  on	how much
memory they use, which interrupts they "steal", etc.  By observing which
interrupts are stolen by each TSR program, it is possible  to  determine
which programs are likely to conflict with each other.

If you use one of these programs to display  the  currently  loaded  TSR
programs, you may notice that  some  are  identified  by  their  program
names and some are not.  Starting with	DOS  V3, the  path  and  program
name used to execute a program are stored  in  the  program  environment
memory block.  It is  generally  considered  good  practice  for  a  TSR
program to release this environment block  (usually less than 100 bytes)
at the time it is installed, and SDR does this.  A side effect	of  this
action is that	programs  which  scan  the  memory  control  blocks  and
display information about TSR programs cannot obtain the program name.

When any TSR program is removed from memory  and  it  is  not  the  last
loaded TSR program, a gap in memory will result  from  the  creation  of
the resulting free memory block.  DOS  will  not  normally  be	able  to
use this memory unless all TSR programs  above	it  are  first	removed.
This implies that TSR programs should always be removed in the	opposite
order in which they were installed, in order  to  maximize  the  use  of
available memory for other programs.

------------------------------------------------------------------------

3.1	Switch Differences

------------------------------------------------------------------------

Although most of the command line switches function the same in  SDR  as
they do in SD, there are differences due to the operating environment.

Although the /e switch may still be used to clear the screen before  the
execution  of an individual command, using the SDC program to turn  this
switch ON as a default will cause the entire screen to be  cleared  each
time  SDR  "pops-up", but not automatically for each subsequent command.

The Environment Size, TSR Memory, and System Memory Used and Free values
displayed by the /i switch reflect the system memory at  the  time  just
after SDR was installed and may be incorrect if other TSR programs  have
been subsequently loaded.  SDR will not be able to read the Boot  Sector
for drives above C: when it is activated from  the  DOS  command  prompt
(rather than when inside most other programs).	In this  case,	some  of
the disk parameter values will appear as NONE or zeros.

The /q switch requests "quiet" installation of SDR when specified on the
DOS command line as described above.  When used inside SDR, it functions
just as it does in SD to generate "quick" output without user prompts.

The /r switch is normally used in SD to allow the program output  to  be
redirected to a file or to the printer. Since this function is performed
by the DOS command interpreter, it is  not  available  inside  a  memory
resident program.  The /r switch is used to remove SDR from memory (when
specified on the DOS command line to execute SDR), and is ignored  if it
is specified on the command line inside SDR.

The /w switch resets the screen to 25 lines after the execution  of  the
current command in SDR, NOT when SDR returns to the suspended program.

The /z switch is normally used in SD to cause the screen to be saved and
restored.  When specified on the SDR DOS command line, it suppresses the
activation message box.  If you often use the CTRL-C key  to  exit  from
SDR, you may wish to specify /z when installing SDR  so  that  you  have
more room to use on the screen.  The /z  switch  is  ignored  if  it  is
specified on the command line inside SDR.

The SD /$ switch, which is designed to facilitate the  operation  of  SD
when it is executed inside a DOS Batch file, is not implemented in SDR.

The EGA and VGA switches (/25, /35, /43, /50) should be used cautiously.
If you use an EGA or VGA video adaptor and wish  to  use  more	than  25
screen lines, make sure you select screen buffer type 2 (8000 bytes)  in
the configuration program.  Otherwise, only the first 25  lines  of  the
original screen will be restored.  Even so, it is recommended  that  you
reset the screen to its original size before returning to  the suspended
program, unless it is known to be able to tolerate this kind of  dynamic
video mode switching.

It should be kept in mind that SDR has several restrictions placed on it
which do not apply to the simpler  operating  environment  of  SD.  Even
though SDR can be activated from the DOS command prompt, you may  prefer
to use SD in this situation for the following reasons:

1) Previous screen output is more readily visible.

2) More directories and files can be processed.

3) Output may be redirected to a file or device.

4) Full disk parameter information for drives above
   C: is available when requested by the /i switch.

SDR should therefore not be viewed as a total replacement for SD, but as
a supplementary program which is available in more environments.

------------------------------------------------------------------------

3.2	Configuration

------------------------------------------------------------------------

The SDR program may be configured (using SDC) or  patched  (using DEBUG)
to change the various program defaults to  those  you  prefer.	The  SDC
program is preferred over DEBUG since it is much easier and safer to use
and allows you to decide which combination of screen colors you  prefer.
It also allows you to first configure the SD  program  for  the  default
switches and screen colors you prefer and to then transfer these  values
to the SDR program, without having to leave the  configuration	program.
You will then only have to configure the options  which  are  unique  to
SDR.  Run the DEMO2.BAT file to see some examples of the SDC program.

If you are using DEBUG, you will need to refer	to  the  section  titled
Patch Area Format in the SD.DOC file to obtain the necessary offsets and
data values.

Activation Key Specification

Great care should be taken  in	selecting  the	activation  or	hot  key
sequence.  It must be unique enough that it will never be needed for any
other purpose by any program you normally use.	This usually means  that
an ALT or CTRL key combination is the best choice.

For PC-AT style keyboards, the SysReq key cannot be used as  a	hot  key
since it is processed differently from	the  other  standard  keys.  The
new keys on enhanced 101 key keyboards such as F11 and F12  also  cannot
be used since they are processed differently by the ROM BIOS.

Hot Key Control Codes (select any combination from 0-15)

1 = Right Shift Key   4 = Ctrl Key
2 = Left Shift Key    8 = Alt Key

The default hot key control code is 4 (CTRL).

Hot Key Scan Codes (select any value from 0-255)

Escape	     = 01     Home	   = 71  Shift F1-F10	  =  84- 93
1234567890-= = 02-13  Up Arrow	   = 72  Ctrl  F1-F10	  =  94-103
Back Space   = 14     Page Up	   = 73  Alt   F1-F10	  = 104-113
Tab	     = 15     Left Arrow   = 75  Ctrl PrtSc	  = 114
QWERTYUIOP[] = 16-27  Right Arrow  = 77  Ctrl Left Arrow  = 115
Enter	     = 28     Keypad +	   = 78  Ctrl Right Arrow = 116
ASDFGHJKL;'` = 30-41  End          = 79  Ctrl End         = 117
\ZXCVBNM,./  = 43-53  Down Arrow   = 80  Ctrl PgDn	  = 118
*	     = 55     Page Down    = 81  Ctrl Home	  = 119
Space	     = 57     Insert	   = 82  Alt 1234567890-= = 120-131
F1-F10	     = 59-68  Delete	   = 83  Ctrl Pgup	  = 132

The default hot key scan code is 1 (ESC).

Hot Key String

You may enter a character string of from 1 to 16 characters  which  will
be displayed as part of the program's installation message as a reminder
of the hot key sequence. The default hot key string is CTRL-ESCAPE Keys.
If you use DEBUG, make sure that the  string  is  padded  with	trailing
spaces through the 16th character,  if	necessary,  and  that  the  next
character is a NULL (hexadecimal 00).

Prompt Character Specification

The default prompt character (code 26, a graphics  right  arrow  symbol)
was chosen to be different from, but similar to the standard DOS command
line prompt character.	You may change it to any  standard  or	extended
ASCII character from 0-255.

SDR Memory Usage

Dir Buffer	Minimum 	Default 	Maximum
----------	------- 	------- 	-------
Bytes		    512 	   1024 	   4096
Dirs		     32 	     64 	    256

File Buffer	Minimum 	Default 	Maximum
-----------	------- 	------- 	-------
Bytes		   2560 	  10240 	  40960
Files		    102 	    409 	   1638
ARC Files	     88 	    353 	   1412

Memory Usage	Minimum 	Default 	Maximum
------------	------- 	------- 	-------
Code & Data	  16928 	  16928 	  16928
Dir Buffer	    512 	   1024 	   4096
File Buffer	   2560 	  10240 	  40960
Screen Buffer	   4000 	   4000 	   8000
Total		  24000 	  32192 	  69984

Buffer Size Specifications

The choice of the directory and file buffer size values is  based  on  a
trade-off  between minimizing the amount of memory used and allowing for
a reasonable number of directories  and  files.  Each  directory  buffer
entry uses a variable number of bytes from 4 to  70,  depending  on  the
length of the directory  name.	For  the  purposes  of	performing  some
calculations, we will assume an average  directory  name  length  of  13
characters, or 16 bytes per directory buffer  entry.  Each  file  buffer
entry uses 25 bytes per file or 29 bytes for files inside ARC files.

The default buffer sizes are 1024 bytes for about 64  directory  entries
and 10240 bytes for about 409 files/directory  or  353	files/ARC  file.
The directory buffer is only  used  when  processing  global directories
with the /g switch.  Its size may range from  512  to  4096  bytes.  The
file buffer is always used and contains all of the file and subdirectory
names for an individual directory or ARC file.	Its size may range  from
2560 to 40960 bytes.  The size of the resident code and  data  excluding
these two buffers is currently about 16928 bytes.  The	buffer	used  to
save the screen may be configured for either 4000  or  8000  bytes.  You
can therefore configure the program to use as little as  about	24Kb  of
memory or as much as about 68Kb.

The total memory used not including the screen buffer must be less  than
64Kb.  This limit is strictly enforced; you  will  receive  the  "Memory
error" message when installing SDR if the total configured  memory  size
exceeds this.  If you attempt  to  exceed  the	configured  buffer  size
limits when running the program, you will receive the "Too many dirs" or
"Too many files" message, and the resulting output will be incomplete.

The default screen buffer size is 4000 bytes.  This  is  sufficient  for
either a Monochrome or CGA equipped PC.  However, if you use an  EGA  or
VGA monitor and sometimes use more than 25 lines on the screen, you  may
wish to configure an 8000 byte screen buffer to allow for up to 50 lines
of 80 characters.  Failure to do this will result in only the  first  25
screen lines being restored.

------------------------------------------------------------------------

3.3	Error Messages

------------------------------------------------------------------------

The following error messages are displayed and system return  codes  set
for various conditions which may arise.  An audible tone is generated to
alert the user of severe errors.  The return codes may be  tested  using
the standard DOS IF ERRORLEVEL statement in a .BAT file.

No matching files (directory may be empty)
Bad switch (use /? for help information)
Bad drive (doesn't exist or syntax error)
Bad path (doesn't exist or syntax error)
Bad filespec (syntax error)
Bad date (too large or syntax error)
Too many dirs (buffer limit exceeded for /g)
Too many files (buffer limit exceeded)
Disk error (floppy disk may not be in drive)

0 - Removed (in response to /r switch)
1 - Already loaded (can't reload unless removed)
2 - Not loaded (can't remove unless loaded)
3 - Can't remove (interrupt vectors changed)
4 - Memory error (insufficient or (de)allocation problem)

------------------------------------------------------------------------

IBM and PC-DOS are trademarks of IBM Corporation.
MICROSOFT and MS-DOS are trademarks of Microsoft Corporation.
DESQview is a trademark of Quarterdeck Office Systems.
SideKick is a trademark of BORLAND International Corporation.
ARC is a trademark of SEA Corporation.

------------------------------------------------------------------------

```
{% endraw %}

## VSN.DOC

{% raw %}
```
------------------------------------------------------------------------

		VSN: Volume Serial Number Utility V1.0

		 Copyright (C) 1989 By John F. Stetson

			  All Rights Reserved

------------------------------------------------------------------------

VSN.COM is utility program which is  used  to  manage  DOS  Disk  Volume
Serial Numbers.  It operates on IBM-PC compatible computer systems using
the IBM PC-DOS or Microsoft  MS-DOS  Operating	System	Version  2.0  or
higher.

Disk Volume Serial Numbers were introduced with DOS 4.0.  When a disk is
formatted by FORMAT or copied with  DISKCOPY,  an  8  digit  hexadecimal
Volume Serial Number is automatically placed in the Boot Sector  of  the
disk.  Subsequent execution of the  DOS  CHKDSK, DIR, LABEL, TREE or VOL
command will cause the Volume Serial Number to	be  displayed.	However,
no mechanism is provided for the user to create a specified VSN,  change
an existing VSN, or to delete  an  existing  VSN.  The	VSN.COM  utility
provides these functions.

Perhaps even more useful is its ability to perform these  functions  for
disks formatted under ANY version of DOS from 2.0 through  4.0,  and  it
can be executed under ANY version of DOS  from	2.0  through  4.0.  This
greatly enhances the possible benefits of using Volume Serial Numbers.

The main reason for using Volume Serial Numbers is to establish a unique
means of identifying a disk.  Disks may have identical Volume Labels  or
even identical Directories, but may still contain different data.  Since
DOS 4.0 forces the user to accept the VSN it selects for a disk, and the
method used is based on the current  time,  each  VSN  will  be  unique.
However, this means that the assigned VSN's follow  no  logical  pattern
and are difficult to relate to one another.  The VSN utility retains the
benefits of the concept, but allows the user to  establish  a  numbering
scheme which can be used to form a disk cataloging sequence which  makes
sense, and is compatible with the format used by DOS 4.0.

The DOS command line syntax is as follows:

VSN [drive:] [xxxx-xxxx] [/d]

where all parameters are optional.  If no parameters are specified, help
information is displayed.  If a drive letter is specified,  the  current
Volume Serial Number is displayed, or the user	is  informed  that  none
exists.  If an 8 hexadecimal digit value is specified, the VSN	for  the
specified drive is changed to  the  specified  value.  If  no  drive  is
specified, the current drive is used.  VSN's are  always  specified  and
displayed as 4 hex digits (0-9 or A-F), followed by a dash (-), followed
by 4 hex digits.  The /d switch causes the current VSN for the specified
drive to be deleted.

Error Messages

Unable to Read Disk Boot Sector - an error occurred when trying to  read
the boot sector for the specified drive.

Unable to Locate System Boot Code - there was no jump instruction at the
start of the boot sector for the specified drive.

Insufficient Room for Volume Serial Number - the  data	area  after  the
jump instruction in the boot sector was too small to contain the VSN.

Unable to Write Disk Boot Sector - an  error  occurred	when  trying  to
write the boot sector for the specified drive.

Status Messages

Drive D: Has No Disk Volume Serial Number
Drive D: Old Disk Volume Serial Number is: XXXX-XXXX
Drive D: New Disk Volume Serial Number is: XXXX-XXXX
Drive D: Volume Serial Number Deleted

Examples of Use

VSN C: - display the VSN (if any) for drive C:

VSN C: 0001-0002 - create or change the VSN for drive C:

VSN A: 1989-0001 - create or change the VSN for drive A:

VSN C: /D - delete the VSN for drive C:

------------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0933

     Volume in drive A has no label
     Directory of A:\

    DEMO     BAT      2342   1-06-89  12:00p
    DEMO2    BAT      1769   1-06-89  12:00p
    DEMO3    COM      4256   1-06-89  12:00p
    DEMO4    COM      4256   1-06-89  12:00p
    DEMO5    COM      4256   1-06-89  12:00p
    DEMO6    COM      4256   1-06-89  12:00p
    FILE0933 TXT      2442   6-28-89   1:45p
    FLCONFIG EXE      3779   9-27-87   2:26p
    FLIST    EXE     53992   9-27-87   3:08p
    FLIST    PRN     26285   9-27-87   3:44p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   2-25-88  12:53p
    PGMDESC  TXT       236   9-27-87   5:44p
    README   DOC       911   1-08-89   1:16p
    README   TXT       512   9-27-87   2:54p
    SD       COM     14678   1-06-89  12:00p
    SD       DOC     89160   1-06-89  12:00p
    SD       PIF       369   1-06-89  12:00p
    SDB      BAT      1173   1-06-89  12:00p
    SDR      COM     16797   1-06-89  12:00p
    SDR      DOC     32124   1-06-89  12:00p
    VSN      COM      1080   1-06-89  12:00p
    VSN      DOC      3808   1-06-89  12:00p
           23 file(s)     269521 bytes
                           38912 bytes free
