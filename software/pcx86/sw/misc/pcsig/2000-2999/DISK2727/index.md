---
layout: page
title: "PC-SIG Diskette Library (Disk #2727)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2727/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2727"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2727.TXT

{% raw %}
```
Disk No: 2727
Disk Title: Programmer's Super-Maint 2 of 2
PC-SIG Version: S2.0

Program Title: Programmer's Super-Maint
Author Version: 2.0
Author Registration: $55.00
Special Requirements: Dos 3.1, hard drive, and 640K RAM recommended.

Programmer's SUPER-MAINT, for Mircosoft, Borland, Aztec, Clipper, and
Mix compiler users, is the make utility that simplified your program
building chores.  SUPER-MAINT builds your make files and response
files for you, and remembers all you command flags and even the name
of the make file, so all you need to remember is "sm <CR>."  Automatic
installation, user configurable, context sensitive help, mouse
support, online manual, and more!  Builds make, response, PC-lint
"indirect" and Clear + "list" files.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## NEW2MAKE.TXT

{% raw %}
```
****************************************************************************
****************************************************************************
                              NEW2MAKE.TXT
          For Programmers Who Are New To Using Make Programs
****************************************************************************
****************************************************************************


If you are new to make programs reading this file before reading the manual 
or using SUPER-MAINT should be helpful.  Program maintenance can seem 
complicated, but once you begin using a make utility it can be a real time 
saver.

****************************************************************************
WHAT IS A MAKE UTILITY?

Make utilities are normally used to build programs out of multiple source 
code files.  Let's use the SUPER-MAINT  sample program as an example.  It 
is written in three source code files:  SAMPLE.C, SAMPLE1.C, and SAMPLE2.C.
To compile and link these from the command line we need to do it in four 
steps:

                         compile SAMPLE.C
                         compile SAMPLE1.C
                         compile SAMPLE2.C
                         link the 3 modules together

A make utility turns this into a one step process.  All of the instructions 
for building your program are written into a text file called a `make file.'
When you call the maker with the make file it goes down the list of 
instructions, performing each as it goes along.

The above paragraph could just as easily describe batch files.  What 
distinguishes make utilities is that each instruction is only carried out if 
an IF:THEN condition is met.  This condition always has to do with the age of 
the files you use to build your program.  Consider the first command:

                         compile SAMPLE.C

In a make file this would look like this:

                         SAMPLE.OBJ: SAMPLE.C
                                 compile SAMPLE.C

The command is saying, "If SAMPLE.C is newer than SAMPLE.OBJ, then compile 
SAMPLE.C.  If the age of the files is the same do nothing."  If you are 
working on a big project this saves time, because the maker automatically 
knows only to compile the parts of your program that have changed since the 
last time you built it.  (Compiling and linking the SUPER-MAINT Editor took 
about 15 minutes on a 386 machine.  Most builds using SUPER-MAINT only took 
a minute or two, because ONLY THE NEW MODULES HAD TO BE COMPILED.)

The link command would look like this:

                         SAMPLE.EXE: SAMPLE.OBJ SAMPLE1.OBJ SAMPLE2.OBJ
                                 link SAMPLE.EXE

It is saying, "If SAMPLE.OBJ, SAMPLE1.OBJ, or SAMPLE2.OBJ is newer than 
SAMPLE.EXE, then link the program."  As you can see there can be multiple 
dependencies.  In make file jargon a "target" is the file you are building 
(SAMPLE.EXE), and a "dependent" is the file or files that must be newer 
than the target if the target is to be built (the .OBJ files listed after 
the colon).

Here is what the whole make file would look like:

                         SAMPLE.OBJ: SAMPLE.C
                                 compile SAMPLE.C

                         SAMPLE1.OBJ: SAMPLE1.C
                                 compile SAMPLE1.C

                         SAMPLE2.OBJ: SAMPLE2.C
                                 compile SAMPLE2.C

                         SAMPLE.EXE: SAMPLE.OBJ SAMPLE1.OBJ SAMPLE2.OBJ
                                 link SAMPLE.EXE




****************************************************************************
HOW ARE MACROS USED?

Like many programs, make utilities can use macros (a set of commands that 
have been assigned to one short command).  Let's say you want to include 
debugging information in your program.  Your compiler has special flags 
that you call it with to include this information for the debugger.  You 
could build a macro with these flags, and another that you would use for 
building your program after it has been debugged.

DEBUG = flags to build with debugging info
NODEBUG = flags to use for the final program build.

Now to include the debugging flags you could use this command in your make 
file:

                         SAMPLE.OBJ: SAMPLE.C
                                 compile $(DEBUG) SAMPLE.C

To use the flags for a finished program you would use:

                         SAMPLE.OBJ: SAMPLE.C
                                 compile $(NODEBUG) SAMPLE.C

****************************************************************************
WHY IS SUPER-MAINT EASIER?

Programmer's SUPER-MAINT is easier than most other makers because:

1.  It builds your make file for you, and other useful files like response 
    files for your linker.

2.  It makes use of macros.  Specific macros can be called with simple 
    command line flags so you don't have to remember macro names or 
    complicated commands.

3.  Once you have called the maker from the command line it remembers which 
    flags you called it with and which make file you called.  You don't have 
    to re-enter this information unless you are changing some of it.  Thus, 
    if you are building three programs with all the same parameters you would 
    type:

                               sm -3 -d prog 1
                               sm prog2
                               sm prog3

    (You don't have to re-enter the `-3 -d' flags).

****************************************************************************
WHAT IS A RESPONSE FILE?

Some programs ask you questions about what you want them to do as they go 
along.  Some examples are linkers, librarians and assemblers.  Each time one 
of these programs needs more information from you it stops to ask for it.

A response file automates the process.  You provide the answers to the 
questions in advance, and tell the program to look for the answers in the 
response file.  This way it can do its job without stopping to bother you.

A linker needs to know such things as what files to link, what to call the 
executable file (the finished program), what to call the map file, the names 
of the libraries you want to link into your program, and so on.  An example 
might look like this:

                         sample.obj+
                         sample1.obj+
                         sample2.obj
                         sample.exe
                         sample.map
                         mylib1+
                         mylib2

Notice the plus signs.  These tell the linker there are more object files 
or libraries to link.  Different linkers (and other programs) use various 
methods and symbols (& instead of +, for example), depending on what 
questions the program asks and the order it asks them in.  See your compiler 
manual for the appropriate response file format for your language.

****************************************************************************
SOME NOTES ABOUT HOW SUPER-MAINT DOES WHAT IT DOES

If you want to build your own make files you may do so.  You can use 
SUPER-MAINT macro sets (if so you must use a whole set), or not, as you 
choose.  You may also define your own macros for use with the macro sets, 
or by themselves.

**********
THE MACROS

SUPER-MAINT makes the business of building a program easier by keeping 
commands in sets of macros.  Depending on the flags you use at the command 
line, only certain macros are called by SM.EXE (the maker).  SUPER-MAINT 
macros, when put together, comprise the command line for your compiler (or 
linker, etc.).

Let's use the following macro set for an example:

L1C0 = -c
L1M1 = /AS
L1M2 = /AM
L1M3 = /AL
L1ND =
L1D = /Zi /Od
L1F1 = /W4
L1F2 = /Os /Zr

For each language you use (C, Assembler, etc) SUPER-MAINT needs a full set 
of macros.  Notice that one of the macros in the example is empty.  It must 
be part of the set, even if you don't assign any value to it.

Not all the macros are used each time you call SM.EXE.  However, the macros 
that ARE used are always called in the same order, from top to bottom.

These macros are ALWAYS called:

xxCO      the flag for the compiler to compile without calling the linker
xxF1      any miscellaneous flags you want
xxF2      same as xxF1 (when set for Borland languages this is called AFTER
          the name of the file to compile

Only one of these macros is called:

xxM1      the flag for the first memory model
xxM2      the flag for the second memory model
xxM3      the flag for the third memory model

You define up to three memory models.  The compiler flags for those models 
are stored in the above macros.

Only one of these macros is called:

xxND      the flags used for a final program build
xxD       the flags needed to include debugging information in your program

SO!  If you called SUPER-MAINT at the command line:

                 sm -1 -n sample

it would call your compiler like so:

              cl /c /AS /W4 /Os /Zr sample.c

OR if your called SUPER-MAINT:

                 sm -3 -d sample
it would compile:

              cl /c /AL /Zi /Od /W4 /Os /Zr sample.c

Notice that for each example, the macros that are used are called in the same 
order.

******************************
USING SME.EXE TO AUTOMATE THIS

SME has two areas to keep your macro set information: a permanent area 
(language definition files), and a temporary area (LASTMACS.SM).

Language Definition Files:

There are five language definition files.  Three are for programming 
languages, one is for the linker and one for the librarian.  if you don't 
use all of these you may have blank "lang def" files.  You keep permanent 
information, including compiler flags you ALWAYS use, in the lang def files.  
You can edit these files using the "Toolbox" "Lang Def Files" choices in 
SME.EXE.

LASTMACS.SM:

Information that is used for your current project is kept in a file called 
LASTMACS.SM.  You get to this file using the "Make" "Macros" choices in 
SME.EXE.  Usually you will start with the permanent settings in your lang def 
files.  You use alt-r to get these settings.  Then you can press alt-e to edit 
each macro, adding special flags as needed.  For example, if you are editing 
the linker macros you may want to add a stack size command.

****************************
RESPONSE FILES AND LIBRARIES

If you are building your make files with SME.EXE SUPER-MAINT requires that 
your linker (or librarian) use a response file.  

SME.EXE will build the response file automatically from the information you 
set up in SMSET.EXE (the setup facility.  This can be accessed from the 
"Setup" menu in SME.EXE).  It is particularly important to set up your 
library names prior to building a response file.  

The libraries are called in the order you list them.  So if your language 
requires libraries to be linked in a certain order you should list them in 
that order.

Also, some brands require you to list the full path of the library.  Refer to 
your compiler manual to see if you have to do this.
```
{% endraw %}

## SMUPDATE.TXT

{% raw %}
```
This is a list of improvements, fixes, etc. since the original
release of Programmer's SUPER-MAINT version 1.0 (August 1990).

Version 2.00:		

05/27/91  SME		Fix "Edit New File" problem

05/24/91  SME		Clipper support added.

05/21/91  SME SMSET     New feature: If "LIBS Unique Name?" is set
			to "Y" in SMSET, SME will ALWAYS ask for
			a unique library name when you are building
			libraries.  All names are set to this unique
			name so you don't have to type it for each
			type of file that needs a name (response files,
			PC-lint, Clear+, etc.)

05/18/91  SME           Minor bug fix:  In `Make' `Macros' resetting
                        library macro screen in local mode was taking
                        default info from the global lang def file.

05/16/91  SME		Aztec Manx C compiler support added.

05/16/91  SME		Language Definition Files are Local or Global.
			If local files don't exist they can be copied
			from the global ones.  Macro functions won't
			work unless all 5 Lang Def Files plus the
			LASTMACS file are present.  (You can also
			copy a separate set from `distribution disk 2'
			to a local directory before running SME in
			that directory.  Always remember to
			<r>eset each macro screen in <m>ake menu
			<m>acros after new lang def files are
			installed.

05/15/91  SM		Minor fix: shareware message doesn't appear
			on registered versions when .SMF file can't
			be found.

05/15/91  SME		SME saves list of installed directories to save 
			the time it takes read them.  If you want SME
			to re-confirm what directoriess you have you press 
			Ctrl-r while in the `Directories' window. The 
			files are named after the drive, ie. A, B, C, etc.

05/15/91  SME		Minor bug fix: Dir Window Page Numbering

05/14/91  INSTALL	Revise Default B&W Colors to just black and
			white (no bold)

05/14/91  SMSET 	Improve color change example screens

05/14/91  SME		Maximum Directories SME can read raised from
			100 to 248.  Trap added to prevent overflow.

05/14/91  SME		Minor bug fixed: SME now detects 3 1/2" HD floppies.

05/13/91  SME		SME saves list of installed drives to save the time
			it takes to see if they are there.  If you want SME
			to re-confirm what drives you have you press Ctrl-r
			while in the `Drives' window.  The file is
			named FILES.

05/11/91  SME           SME now detects floppies beyond drive B.  Also knows
                        if A is installed, but B isn't.  (`Pick').  Floppy
			drives with no disk in them are NOT used.

05/10/91  SME           Added `Reading Directories' in `Pick'

05/08/91  SME           If SME is set to view 1 directory only when
                        picking files, and no directory is specified,
                        SME will view the current directory.

05/06/91  SME, SMSET,   Added support for 43 and 50 line mode
          SMH

************************************************************************
******NOTE: Features Above This Line Were Added After The Version 2*****
******                   Manual Went To The Printer                *****
************************************************************************

GENERAL   ALL		Some general changes have been made over the course
                        of three months:  A much improved user interface and
                        a completely rewritten user manual.

04/29/91  INSTALL       New section converts from version 1 to version 2

04/28/91  SME, SMH      Rewrite manual show and print functions

04/28/91  SME           Alphabetize directories while finding them

04/25/91  INSTALL       Install now knows whether it is being run from a
                        two disk set (5 1/4") or a one disk set (3 1/2")

04/24/91  SMAK,SMUTIL   The self-extracting file containing program and doc
                        files (SMAK.EXE) has been split into two files.  SMAK
                        now contains program files only and remains on disk 1.
                        SMUTIL now contains docs, help files, and the sample
                        program.

04/24/91  SME           Change the way marking occurs.  Now SME remembers
                        what has been marked and shows plusses even if you
                        leave and return to a directory.  SME no longer allows
                        you to mark a source code file twice for one make file.
                        SME DOES allow two identically named source code files
                        if they are in separate directories.

04/23/91  SME,SMSET     Backup option added for make files, response files,
                        PClint and Clear+ files, etc.

04/22/91  SME           Number of action blocks allowed raised form 75 to 95.
                        Size of make file buffer enlarged to accomodate more
                        lines in a make file.

04/21/91  SME,SMH,      Mouse liberated to go anywhere on the screen.  Exit
          SMSET         boxes added at the top left corner of each menu to
                        use the mouse to back out of menus.  Epsilon symbol
                        (old mouse exit) deleted.

04/21/91  SM            -er command line flag added to allow total rebuild
                        in one step (other flags are recognized at the same 
                        time).

04/20/91  SM,SME,       SUPER-MAINT can now be set to use local setups or the
          SMH,SMSET     global setup.  Using local setups allows different 
                        setups (including libraries) by setting a flag in
                        SMSET, then building a local super.ini file in the
                        default directory.  SME changed so a 'G' appears in
                        the upper left when set for Global setups, and an 'L'
                        appears for Local ones.

04/16/91  SM            SM remembers which memory model you last compiled
                        a program in.  This way if you are compiling several
                        programs in different models you do not have to 
                        explicitly tell SM which model to use for each one
                        unless you want to change the model

04/15/91  SM            -q changed and -qb flags added.  -q calls SMSET in 
                        Advanced mode, -qb calls it in beginner (novice)
                        mode.  'q' still stands for 'quick setup.'

04/13/91  SM            SM is considerably smaller (about 1/3 the size of 
                        version 1)

03/26/91  SMSET         New setup program written.  Setup functions taken
                        out of SM and SME

03/22/91  SME           When SME shells to DOS, or calls your text editor or
                        SMSET it now swaps itself to EMS if available, or a 
                        temporary file if EMS isn't available.  This allows
                        you to use bigger text editors (such as Brief) with
                        SUPER-MAINT.

03/18/91  ALL           The way SUPER-MAINT deals with unregistered and 
                        registered versions has been changed.  The shareware
                        reminder screen in SME can print an order form, or be 
                        exited with no time delay.  A daily countdown has been
                        added (informational- does not affect use of the 
                        program).  Time delays removed from all reminder
                        screens.

Version 1.20:

11/07/90		Add support for Demonstration with Bogus
			Compiler, Assembler, Linker, Librarian,
			and Debugger

11/08/90		Add support for Mix Power C (assembler,
			PCL and MERGE).

Version 1.10:

11/01/90  INST		Adjust INSTALL.EXE for registered version to
			use two disks instead of one
11/01/90  INST		Add EmmaSoft Viewer to installation program.
10/12/90		Complete name change from "SUPER MAKE" to
			"Programmer's SUPER-MAINT"
10/10/90  SM,SME,INST	Enlarge size of library names in
			initialization structure.
10/10/90  SM		Added -m flag to explicitly disable the 
			copy/delete .EXE files function (reported
			to be kicking in unwanted on some systems
			when no directory is explicitly set for 
			keeping executable files in.
07/21/90  SM		Bug fix: L2CO was taking the value of the
			L1CO macro

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2727

     Volume in drive A has no label
     Directory of A:\

    ADDENDUM MAN      5458   5-28-91   9:09a
    BOR      EXE     14724  11-07-90   9:50a
    CLIP     EXE     13906   6-03-91   9:42a
    DEMO     EXE     76768  11-06-90   1:39p
    MANX     EXE     14367   5-30-91   8:41a
    MIX      EXE     14533  11-07-90  11:41a
    MS       EXE     14779  10-14-90   1:10p
    NEW2MAKE TXT     11303   5-27-91   6:10p
    S        COM     12769   9-13-90   4:35p
    SMUPDATE TXT      8438   5-27-91   6:14p
    SMUTIL   EXE    105418   5-29-91  10:57a
    GO       BAT        38   6-21-91   2:37a
    GO       TXT       771   7-22-91   2:37a
    FILE2727 TXT       873   7-11-91   1:35a
           14 file(s)     294145 bytes
                           20480 bytes free
