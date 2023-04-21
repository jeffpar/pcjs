---
layout: page
title: "PC-SIG Diskette Library (Disk #1459)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1459/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1459"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO APPRENTICE"

    With TURBO APPRENTICE, the built-in help for Turbo Pascal can be
    appended to include prototypes and descriptions of your own functions,
    procedures and units.  TAP puts references to any routine you've written
    one keystroke away.  It will build its index without any changes in
    source code.  TAP can store up to 46 lines of information for each entry
    and can even cross reference.
    
    TAP is an excellent tool for any programmer who has a sizeable number of
    routines to remember.
    File Descriptions:
    
    TAP      EXE  Main program.
    TAPINST  EXE  Installation tool.
    TAP      DOC  Documentation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1459.TXT

{% raw %}
```
Disk No: 1459
Program Title:  TURBO APPRENTICE version 1.0
PC-SIG version: 1

TURBO APPRENTICE (TAP) is a TSR add-in for the serious Turbo Pascal
programmer.

With TURBO APPRENTICE the built-in help for Turbo Pascal can be appended
to include prototypes and descriptions of your own functions,
procedures, and units.  TAP puts references to any routine you've
written one keystroke away.  TAP will build its index without any
changes in source code.  It will store upto 46 lines of information for
each entry and can even cross reference.

TAP is an excellant tool for any programmer who has a sizable number of
routines to remember.

Usage:  Turbo Pascal Utility.

Special Requirements:  Turbo Pascal 4.0 or greater.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

TAP      EXE  Main Program.
TAPINST  EXE  Installation tool.
TAP      DOC  Documentation.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG, Inc.

```
{% endraw %}

## TAP.DOC

{% raw %}
```
                       Welcome to Turbo Apprentice

                          (Documentation v1.0)


Turbo Apprentice is distributed as shareware by Cypress Systems, Inc.  If
you use Turbo Apprentice, please send a $15 registration fee to:

                    Cypress Systems, Inc.
                    11693 San Vicente Blvd., Suite 175
                    Los Angeles, CA  90049

Please include your serial number with your registration fee.  If you have
any questions, comments or suggestions, please feel free to include them
with your registration fee or call us at (213) 207-3938 between 9:00 am and
5:00 pm (Pacific Standard Time) Monday through Friday.  We can also be
reached on BIX (as cypress) or on CompuServe (as 71631,735).

You are free to distribute Turbo Apprentice as long as you do not charge
a fee for doing so.  Please include the following files:

            TAP.DOC                            TAP.ARC
            TAPINST.EXE           or
            TAP.EXE



Introduction
------------

Turbo Apprentice is a Terminate and Stay Resident utility which enables
you to extend Turbo Pascal's context sensitive help system to include
reference information for your own units, procedures and functions.
Apprentice works by creating an index file for each unit used by your
program.  Once the index files are completed, pop-up help for any
procedure or function used by your program is a key-stroke away.

Turbo Apprentice requires an IBM PC/XT/AT, PS/2 or 100% compatible, MS-DOS
2.0 or higher, a hard disk drive, and Turbo Pascal 4.0 or higher.



Installation
------------

To install Turbo Apprentice:

  - Copy the files TAPINST.EXE and        Example:
    TAP.EXE to the same subdirectory
    on your hard disk.                    C>COPY A:TAP*.EXE C:\TURBO5\TAP

  - Change to that directory and run      C>CD \TURBO5\TAP
    TAPINST.EXE.                          C>TAPINST

  - TAPINST enables you to install a Primary File, a Help Directory, a
    list of Unit Directories, a list of Include Directories, and a Color
    Set into the TAP.EXE file.  Of these, it is ESSENTIAL that you
    provide the Help Directory and Unit/Include Directory lists.

    Here is an explanation of what each item means:

    Primary File        - The full path name you provide here will be used
                          as the default primary program file each time
                          TAP.EXE is run.
    Help Directory      - The directory path you provide here tells
                          Apprentice where to keep the index files it
                          will create.
    Unit Directories    - The list of directories you provide here tells
                          Apprentice where to look for your unit source
                          files.  This list should be identical to the
                          "Unit Directories" you must provide for Turbo
                          Pascal.
    Include Directories - The list of directories you provide here tells
                          Apprentice where to look for your include files.
                          This list should be identical to the "Include
                          Directories" you must provide for Turbo Pascal.
    Colors              - The color set you choose will be the one used
                          by TAP.EXE.  The various sets correspond to those
                          used by Turbo Pascal 4.0 and 5.0.

  - Once you have set the various TAPINST options, choose "Quit/save" and
    you will be prompted to verify saving the changes to TAP.EXE.  Once
    you have installed any options into TAP.EXE, you can change them again
    by running TAPINST.EXE at any time.



Using Turbo Apprentice
----------------------

  To load Apprentice into memory, simply enter "TAP" at the DOS prompt.
  Apprentice will display a message telling you if it loaded successfully,
  and take you back to the DOS prompt.  You may now invoke Turbo Pascal,
  and Apprentice will be waiting in the background for you.  Since
  Apprentice is virtually useless alone, you will want to remove it from
  memory after you leave Turbo Pascal.  To do this, enter "TAP /r" at
  the DOS prompt.


  Preparing your source files:

  The quickest way to get Apprentice up and running is to make no changes
  to your source files.  Using this approach means that when you call upon
  Apprentice to provide pop-up reference information on a procedure or
  function, it will display only the procedure or function header (the name
  and parameter information for that procedure or function) and the name
  of the unit it is in.  This may be enough for most of your purposes.

  However, Apprentice does provide a way for you to view any comments you
  may wish to include along with the procedure or function header.  By
  including your comments in your source file directly following the
  procedure or function header declaration, and surrounding the comments
  by {* and *} or (** and **), you will be telling Apprentice to include
  those comments in the help window.  For example, the following piece of
  code:

    procedure GetAddress(var theAddress : string);

    {*
    This procedure prompts the user for the employee's address and returns
    the address in the parameter "theAddress".
    *}

  will cause the following information to be popped-up:

  +------------------------------ Apprentice ------------------------------+
  | Unit: Entry                                                            |
  |                                                                        |
  | procedure GetAddress(var theAddress : string);                         |
  |                                                                        |
  |                                                                        |
  | This procedure prompts the user for the employee's address and returns |
  | the address in the parameter "theAddress".                             |
  |                                                                        |
  |                                                                        |
  |                                                                        |
  +------------------------------------------------------------------------+

  NOTE:  For procedure and function declarations that appear in the
         INTERFACE section of a unit, you must include your comments with
         the interface declaration if you want them to be recognized by
         Apprentice.

  An additional feature of Apprentice is its "hot keywords".  In the above
  help window, the unit name "Entry" would be highlighted as a hot keyword.
  Pressing <Enter> while "Entry" is highlighted would bring up the help
  information for the Entry unit.  (Unit help information is provided auto-
  matically by Apprentice).

  You can include hot keyword references to other units, procedures and
  functions in your own comments by surrounding each keyword with the
  vertical bar character (|).  Here's an example:

    procedure GetAddress(var theAddress : string);

    {*
    This procedure prompts the user for the employee's address and returns
    the address in the parameter "theAddress".

    See also:  |GetCity|   |GetState|   |GetZip|
    *}

  would cause the following information to be popped-up:

  +------------------------------ Apprentice ------------------------------+
  | Unit: Entry                                                            |
  |                                                                        |
  | procedure GetAddress(var theAddress : string);                         |
  |                                                                        |
  |                                                                        |
  | This procedure prompts the user for the employee's address and returns |
  | the address in the parameter "theAddress".                             |
  |                                                                        |
  | See also:  GetCity   GetState   GetZip                                 |
  |                                                                        |
  +------------------------------------------------------------------------+

  where "Entry", "GetCity", "GetState" and "GetZip" would all be displayed
  as hot keywords.


  The Turbo Apprentice menu:

  To bring up the Apprentice menu while in the Turbo Pascal editor, press
  <Alt><A>.  The Apprentice menu contains four options:  Primary file,
  Directories, Make index file(s), and Build index file(s).

  Here is an explanation of what each item will do:

  Primary file        - The full path name you provide here will be used as
                        the primary file when generating index files.  When
                        Apprentice attempts to provide pop-up help, this
                        file's corresponding index file will be used as
                        the primary index file.
  Directories         - Choosing this option will display the Help
                        Directory, Unit Directories and Include Directories
                        that were installed into the currently running copy
                        of TAP.EXE.
  Make index file(s), - Choosing these options will tell Apprentice to begin
  Build index file(s)   generating the index files, in which are kept your
                        procedure and function names and their positions in
                        your source files.  One index file (with the file
                        extension ".TAP") is created for each unit that your
                        program uses (directly or indirectly), and it is
                        kept in the Help Directory you have specified.  If
                        an error occurs during index file generation, the
                        process will be aborted.  The best way to avoid this
                        is to make sure all of your source code compiles
                        with Turbo Pascal before trying to make or build
                        with Apprentice.  NOTE:  You must save the file
                        currently being edited for Apprentice to recognize
                        your latest changes to that file.
                        Analogous to Turbo Pascal's Make and Build compile
                        options, "Make index file(s)" will scan only those
                        units that have been changed since the last index
                        generation, while "Build index file(s)" will scan
                        all units used by your program.


  Getting Pop-Up Help:

  Apprentice's pop-up help is very similiar to the built-in context
  sensitive help feature of Turbo Pascal's integrated environment. While you
  are in the editor, place the cursor on the procedure or function name for
  which you need help and press <Shift><F1>.  Apprentice will search the
  index files for that name and, upon finding it, will pop up a help window.
  The window will display the name of the unit containing the procedure or
  function and the reference information for that procedure or function.
  If the information does not all fit within the bounds of the help window,
  you can scroll around using the four cursor movement keys.  Use <Tab> and
  <Shift><Tab> to highlight the next and previous hot keywords, respectively.
  While a hot keyword is highlighted, pressing <Enter> will cause Apprentice
  to search its indexes for that keyword and display the new information
  if it is found.  Pressing <Esc> will take you back to the Turbo Pascal
  editor.



Tips, notes, etc.
-----------------

  - Because Apprentice is meant to be used with Turbo Pascal's integrated
    environment and is not very useful otherwise, you may wish make up a
    batch file that installs Apprentice in memory, runs Turbo Pascal, and
    then removes Apprentice from memory.  For example, the file "TP5.BAT"
    might contain the following:

      TAP
      TURBO
      TAP /R

    Assuming DOS could find TAP.EXE and TURBO.EXE on the path, this batch
    file would load and remove Apprentice automatically, and Apprentice
    won't be sitting around in memory wasting RAM when you don't need it.

  - The Apprentice help window uses a "virtual window" to let you scroll
    around in case your code/comments do not fit within the boundary of
    the physical window.  Because the dimensions of this virtual window
    are 126 characters by 48 lines, this limits the amount of comments
    you can include.  If you exceed these limits in your source file, you
    will not encounter any Apprentice errors -- you just won't be able
    to view the extra information.



Trademarks
----------

IBM PC/XT/AT and PS/2 are registered trademarks of the International
Business Machines Corporation.

MS-DOS is a registered trademark of Microsoft Corporation.

Borland and Turbo Pascal are registered trademarks of Borland International.



Copyright information
---------------------

Copyright (c) 1988 Cypress Systems, Inc.  All Rights Reserved.

This program is provided AS IS without any warranty, expressed or implied,
including but not limited to fitness for a particular purpose.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1459

     Volume in drive A has no label
     Directory of A:\

    FILE1459 TXT      1038   6-13-89  12:47p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-13-89   1:30p
    MANUAL   BAT       149   6-13-89   1:43p
    PAGE     COM       325   1-06-87   4:21p
    TAP      DOC     13517   2-22-89   1:00a
    TAP      EXE     57248   3-07-89   1:00a
    TAPINST  EXE     48656   2-22-89   1:00a
    VIEW     BAT        39   6-13-89   1:40p
            9 file(s)     121704 bytes
                           35328 bytes free
