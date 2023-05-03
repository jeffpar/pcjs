---
layout: page
title: "PC-SIG Diskette Library (Disk #481)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0481/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0481"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STILL RIVER SHELL"

    The STILL RIVER SHELL provides an intuitive interface with your system
    that MS/PC-DOS has never provided the user.
    
    Typical DOS functions of execute, find, copy, move, delete, or list are
    completed with significantly fewer keystrokes while still providing
    access to all DOS commands. It gives you a more comfortable and
    informative operating environment than DOS alone, and the friendly,
    visible nature of the display can actually help the new user to better
    understand the operating system.
    
    Get things done with greater speed and precision. After all, isn't that
    the point of computing?
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES481.TXT

{% raw %}
```
Disk No:  481
Program Title:  STILL RIVER SHELL version 2.58
PC-SIG version: 2.4

The STILL RIVER SHELL provides a better working environment than DOS.
It saves time by allowing the use of one-key commands and at the same
time lets you do anything that DOS would normally do.  It provides a
more comfortable, informative operating environment than DOS alone, and
the friendly, visible nature of the display can actually help the new
user better understand the operating system.

Usage:  DOS Shell/Utility.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $59.00 to register the disk and receive a copy
of the manual and an update.  $39.00 for disk registration and the
manual.  $25.00 to register the disk only.

File Descriptions:

CONFIG   SYS  Pre-defined system configuration file.
GOODIES <DIR> Subdirectory holding extra program files.
READ     ME   Author's introduction to program.
REGISTER BAT  Batch file to print registration form.
REGISTER FRM  Registration form.
SR       DOC  Documentation for STILL RIVER SHELL.
SR       EXE  Main STILL RIVER SHELL program.
SR       TXT  Text file.
SRF1     BAT  Batch file called from main program.
SRUPDATE HIS  Update history of program.
SRVER258 DOC  Text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #481 STILL RIVER SHELL  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for STILL RIVER SHELL type the command:      ║
║               MANUAL (press enter)                                      ║
║                                                                         ║
║ To start the program, Type: SR (press enter)                            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GOODIES.DOC

{% raw %}
```
Here are some programs to make your batch files better.

XDOS  calls another batch file from within a batch file, executes
the called batch file and returns to the next line after the XDOS
statement.  XDOS invoked batch files may themselves contain  XDOS
statements.

	SAMPLE prog1		(sample command)
	

	SAMPLE.BAT:

	(other dos commands)
	XDOS DOASM %1		(calls DOASM batch file and returns)
	(other dos commands)


	DOASM.BAT:		(edit, assemble and display output)

	COPY %1.asm %1.bak	(backup file)
	XDOS EDIT %1.asm	(call procedure to edit file)
	XDOS ASM %1		(call procedure to assemble file)
	XDOS LINKIT %1.obj	(call procedure to link file)


PUSHD pushes the current directory onto a stack and establishes a
new current directory.

POPD  pops  a  directory  off  the stack and makes it the current
directory.

Posit: you want to execute an editor from any directory; but, the
editor  only  edits files in its own directory.  In addition, you
want to have only one copy of the editor and the batch file  that
calls it.

	EDIT.BAT:	     (called in above procedure)

	COPY %1 \editdir     (copy file from current dir to edit dir)
	PUSHD \editdir       (save current dir; est \EDITDIR as new cur dir)
	XEDIT %1             (edit file within \EDITDIR)
	POPD		     (restore original dir)
	COPY \editdir\%1     (copy edited file back to original dir)
	DEL \editdir\%1      (remove working copy from \EDITDIR)


```
{% endraw %}

## GOODIES.DOC

{% raw %}
```
Here are some programs to make your batch files better.

XDOS  calls another batch file from within a batch file, executes
the called batch file and returns to the next line after the XDOS
statement.  XDOS invoked batch files may themselves contain  XDOS
statements.

	SAMPLE prog1		(sample command)
	

	SAMPLE.BAT:

	(other dos commands)
	XDOS DOASM %1		(calls DOASM batch file and returns)
	(other dos commands)


	DOASM.BAT:		(edit, assemble and display output)

	COPY %1.asm %1.bak	(backup file)
	XDOS EDIT %1.asm	(call procedure to edit file)
	XDOS ASM %1		(call procedure to assemble file)
	XDOS LINKIT %1.obj	(call procedure to link file)


PUSHD pushes the current directory onto a stack and establishes a
new current directory.

POPD  pops  a  directory  off  the stack and makes it the current
directory.

Posit: you want to execute an editor from any directory; but, the
editor  only  edits files in its own directory.  In addition, you
want to have only one copy of the editor and the batch file  that
calls it.

	EDIT.BAT:	     (called in above procedure)

	COPY %1 \editdir     (copy file from current dir to edit dir)
	PUSHD \editdir       (save current dir; est \EDITDIR as new cur dir)
	XEDIT %1             (edit file within \EDITDIR)
	POPD		     (restore original dir)
	COPY \editdir\%1     (copy edited file back to original dir)
	DEL \editdir\%1      (remove working copy from \EDITDIR)


```
{% endraw %}

## SR.TXT

{% raw %}
```
The  STILL  RIVER  SHELL  is  a  full  screen,  "point and shoot"
PC/MS-DOS enhancement utility for file and  directory  management
as  well  as  a smart command interface to DOS.  Listed: 1987 and
1988 PC SIG's TOP 100 Shareware Programs.  The shell  allows  you
to: turn your directory into a menu you scroll through, selecting
items  for use in command execution; eliminate almost all command
and filename typing; keep  a  stack  of  20  of  your  prior  DOS
commands  for  instant  recall,  WP  type  command  line edit and
execution; copy, move, delete and list files and directories with
single  keystroke  command  selection  as   well   as   automatic
generation  of  command, file and directory names on your command
line; delete 'fail-safe';  tag,  untag,  reverse  tag  individual
files,  ranges  of  files or all files either directory or system
wide; pass a DOS command line for a each file in a set of  tagged
files;  find files, or text within files, easily anywhere on your
system with one  command  and  operate  (view,  edit,  copy  etc)
directly  against  the  found  file  lists;  display  graphically
directory tree structures and use tree display to make, remove or
list directories; view the contents of a  file  in  character  or
hex; sort files by name, extension, size or date; protect against
accidentally   copying   onto   existing   files;   backup  large
directories onto multiple diskettes; define your  own  extensions
to the Shell's command set.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0481

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        12   1-03-89   1:09a
    FILES481 TXT      1407   2-01-89  10:47a
    GO       BAT        38  11-13-87  10:09a
    GO       TXT       617   1-30-89   1:54p
    MANUAL   BAT       147   1-30-89   1:54p
    READ     ME       4171   1-03-89   2:14a
    REGISTER BAT        26   1-03-89   2:13a
    REGISTER FRM      3691   1-14-89   2:49p
    SR       DOC     92830   1-14-89   4:32p
    SR       EXE     95237   1-14-89   2:58p
    SR       TXT      1502   1-14-89   3:05p
    SRF1     BAT      1220   1-03-89   2:13a
    SRUPDATE HIS      7552   1-14-89   2:14p
    SRVER258 DOC      7808   1-14-89   4:42p
    GOODIES      <DIR>    
           15 file(s)     216258 bytes

     Directory of A:\GOODIES

    .            <DIR>    
    ..           <DIR>    
    GOODIES  DOC      1455   2-14-86   1:58p
    POPD     EXE      6592  10-19-84   4:07p
    PUSHD    EXE      6923  10-19-84   4:06p
    XDOS     EXE     10547   4-22-85   1:18p
            6 file(s)      25517 bytes

    Total files listed:
           21 file(s)     241775 bytes
                           67584 bytes free
