---
layout: page
title: "PC-SIG Diskette Library (Disk #1093)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1093/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1093"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "JOB ORGANIZATION AND BACKUP SYSTEM"

    Power users take note!  JOB ORGANIZATION AND BACKUP SYSTEM (JOBS) is a
    powerful broad-based utility package for organizing and operating your
    system.  Simple enough for beginners, JOBS is menu-driven and best
    described as a computer ``housekeeper'', maintaining and organizing
    your system with an economy of keystrokes.
    
    Housekeeping tasks handled by JOBS include execution of application
    programs, backup or archiving of data from applications programs,
    installation and removal of programs and utilities, ability to
    customize frequently-performed operations, DOS shell functions, and a
    host of miscellaneous functions such as searching, sorting, comparing,
    backup/restore, etc.  An automatic installation sequence guides the
    user to proper program set-up procedures, and there are more than 50
    pages of thorough documentation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARCE31B.DOC

{% raw %}
```


  ARCE Command                                          Version 3.1b
  ------------                                          Sep 16, 1987


  Purpose:  Use ARCE to extract files from an ARC archive file.

  Format:

        ARCE  [d:][path]filename.ext  [filespecs...] [d:outpath]
                                      [/R]
                                      [/Q]
                                      [/P]
                                      [/T]
                                      [/Gpassword]

  Remarks:

        The drive and path names are optional.  If omitted, the  current
        drive and path name is used.

        The filename must be  supplied.  The extension defaults  to ARC.
        All files matching the supplied filename are processed.  The ARC
        filename may contain the * and ? wildcard characters.

        If  no  filespecs  are   supplied,  all  files  are   extracted.
        Otherwise, only those ARC members  which match one of the  up to
        16 filespecs are extracted.

        The extracted files  may be placed  on another drive,  and/or in
        another subdirectory by following the optional filespecs with  a
        drive designator and/or path name.

        If  the  file  being  extracted  already  exists,  you are asked
        whether or not you want to over-write it.  You may use the |  /R
        option to bypass this prompt.  Use a Y followed by the |  return
        key to over-write the file.

        Use the /Q option to suppress alarm sounds, beeps, and bells.

        Use  the  /P  option  to  write  the  extracted files to the DOS
        standard output  file.  With  /P, you  may pipe  or redirect the
        output.  An initial line feed  is added to the beginning  of the
        output file.

        Use the /T option to test the archive's integrity. No files will
        be extracted.

        If the file was encrypted, use the /G option to supply the  same
        password as was used to create the file, e.g. /GSECRET.





        ARCE 3.1b, Copyright (c) 1986-87, Wayne Chin and Vernon D. Buerg.
        ALL RIGHTS RESERVED.



ARCE Command                                            Version 3.1b
------------                                            Sep 16, 1987



                        Examples
                        --------

        o  Extract all file from TEST.ARC onto the current drive:

              ARCE TEST

        o  Extract only file with  an extension of .ASM from the archive
           SOURCE.ARC on drive B and in subdirectory SAVE:

              ARCE B:\SAVE\SOURCE *.ASM

        o  Extract  all  files  from  all  ARC files in the subdirectory
           called TEST on drive C:

              ARCE C:\TEST\*

        o  Extract  all  files  from  PROGA.ARC  and  place the files in
           subdirectory OLD on drive B:

              ARCE PROGA.ARC B:\OLD

        o  Extract all files with an extension of .COM and .EXE from the
           archive PROGS.ARC in directory NEW\WORK on drive B, and place
           the  them  in  subdirectory  SAVE\TEST  on  drive  A; replace
           existing file:

              ARCE B:\NEW\WORK\PROGS *.COM *.EXE A:\SAVE\TEST /R

        o  Extract  the  file  READ.ME  from  the  archive GIZMO.ARC and
           display it on the console instead of writing it to a file:

              ARCE GIZMO READ.ME /P

        o  Same as above, except  pass the extracted READ.ME file to the
           LIST file viewer:

              ARCE GIZMO READ.ME /P | LIST /S

















ARCE Command                                            Version 3.1b
------------                                            Sep 16, 1987

                        Error Messages
                        --------------

      'filename - premature EOF reading '

        Data  is  missing  from  the  archive  file.   The  program   is
        terminated.


      'filename - unable to set file datestamp'

        The file datestamp is set to the current date and time, and  the
        next archive member is processed.


      'filename - WARNING: file CRC does not match!'

        The extracted member  is left on  the output disk,  and the next
        archive member is processed.   The file is probably  invalid but
        is left on the disk for your examination.


      'Invalid filespec(s)'

        The filespec syntax is incorrect.  The filename part may be from
        1  to  eight  characters,  and  may  include the ? or * wildcard
        characters.  The extension may be none to three characters,  and
        may  include  wildcards.   There  is  a  maximum of 16 filespecs
        allowed.  The program terminates.


      'filename - file already exists. Overwrite it? (y/N) '

        The member being extracted already  exists.  If you are using  a
        data  path  utility,  the  file  may  not  actually  be  in  the
        subdirectory be used for output.   Respond with the letter Y  to
        over-write the existing  file, or respond  with the letter  N to
        skip this member and continue to the next.


      'Abort: Stack overflow'

        The member  being extracted  has invalid  data.  The  program is
        terminated.


      'filename - invalid decode tree count'

        The member  being extracted  has invalid  data.  The  program is
        terminated.







ARCE Command                                            Version 3.1b
------------                                            Sep 16, 1987

                        Error Messages (cont'd)
                        --------------


      'filename - new archive format 7 not yet supported'

        Format 7 is a special file compression method used internally by
        SEA,  the  authors  of  ARC.  Processing continues with the next
        archive member.


      'Unable to open archive > arcname'

        The  specified  ARC   archive  file  was   not  found,  or   was
        inaccessible.  The program terminates.


      'CREATE failed > filename'

        There was insufficient directory  space, or a failure  accessing
        the output disk.  The program terminates.


        'Invalid archive format!'

        The archive file data is invalid.  The program terminates.


      'Incorrect DOS version'

        Version  2.0  or  later  of  PC  DOS  must be used.  The program
        terminates


      'Not enough memory.'

        A minimum  of 112k  bytes of  memory is  required.  The  program
        terminates.


      'I/O error reading from arcname'

        An incorrectable error occurred attempting to read data from the
        archive file.  The program terminates.


      'I/O error writing or disk full > filename'

        There was not  enough disk space  to write the  complete archive
        member.   The  partially  extracted  file  is  scratched and the
        program terminates.






ARCE Command                                            Version 3.1b
------------                                            Sep 16, 1987

                        Error Messages (cont'd)
                        --------------


      'No matching file(s) found'

        No archive files were  found that matched the  supplied filename
        specifications.  The program terminates.



      'filename - ERROR: invalid file codes'

        An error was detected while attempting to decode a crunched
        file. Either some data bytes are invalid, there are extra
        bytes, or there are bytes missing. The archive is invalid.









































ARCE Command                                            Version 3.1b
------------                                            Sep 16, 1987

                        Version history
                        ---------------

        1.1 - 1/13/86   -initial release

        2.00, 04/08/86  - fine tuning of I/O buffering

        2.01-2.05, 4-20 thru 9/9/86
                        - improve unsq, correct disk full message
        2.06, 9/17/86   - release from testing
        2.07, from 9/19 - not released
        2.08, 12/31/86 - added /P, /Q; fixed /R with redirection
        2.09, 1/5/87   - correct closing of output if /P used; require return
                         (enter key) for over-write prompt
                       - add more validity checking of member headers
        2.10, 1/6/87   - correct use out output file specification
        2.11, 1/24/87  - some cosmetics, wrong banner version and date

        3.0a, 3/16/87  - added /G for password encryption
                       - added /T for integrity checking only
                       - correct loop in command line parsing
                       - internal optimization
                       - make intergity checking more robust

        3.0c, 3/23/87  - improve extracting with file selection
                       - minor fixes and cosmetic changes

        3.0d, 3/29/87  - correction to unsqueeze

        3.0e, 4/02/87  - correct loop with invalid archives
                       - insure errorlevel non-zero if any errors
                       - correct loop in command line processing

        3.0f, 5/31/87  - correct false 'disk full' error message when
                         using /p (piping) option
                       - correct failure to extract all files from a
                         garbled (/g) archive

        3.1a, 9/10/87  - cosmetic changes

|       3.1b, 9/16/87  - unsquashing version released
















ARCE Command                                            Version 3.1b
------------                                            Sep 16, 1987



                        Notices
                        -------

        ARCE (c) Copyright 1986-1987 by Wayne Chin and Vernon D. Buerg
        ALL RIGHTS RESERVED.

        ARCE is free, but it is a copyrighted work and may be distributed only
        pursuant to this license.

        Permission is hereby granted to reproduce and disseminate ARCE so long
        as:

           (1)  No remuneration of any kind is received in exchange; and

           (2)  Distribution is without ANY modification to the contents of
                ARCE.COM and all accompanying documentation and/or support
                files, including the copyright notice and this license.

        No copy of ARCE may be distributed without including a copy of this
        license.

        Any other use is prohibited without express, written permission in
        advance.



                Vernon D. Buerg
                456 Lakeshire Drive
                Daly City, CA  94015

                CompuServe: 70007,1212
                Data/BBS:   415-994-2944




        For use by corporations, institutions, or for profit, contact
        System Enhancement Associates for licensing information.

                   System Enhancement Associates
                   21 New Street
                   Wayne, NJ 07470













```
{% endraw %}

## FILE1093.TXT

{% raw %}
```
Disk No  1093
Program Title: JOBS version 3.10s
PC-SIG Version: 1

    Power users take note! Job Organization and Backup System (JOBS) is a
powerful broad-based utility package for organizing and operating your
system, yet one that is simple enough for beginners to use. JOBS is
menu-driven and best described as a computer "housekeeper," maintaining and
organizing your system with an economy of keystrokes.

    Housekeeping tasks handled by JOBS include: DOS-shell related
operations, execution of application programs, backup or archiving of data
from applications programs, installation and removal of programs and
utilities, an ability to customize frequently-performed operations, and a
host of miscellaneous functions such as searching, sorting, comparing,
backup/restore, etc. An automatic installation sequence guides the user to
proper program setup procedures. Over 50 pages of thorough documentation
are provided.

Usage: Hard Disk Utility

System Requirements: 128K memory, one floppy disk drive, and a hard disk.

How to Start: Type INSTALL (press enter) to install on your hard disk.

Suggested Registration:  $29.00

File Descriptions:

???       ARC  Archived program files (3 files).
ARCE31B   DOC  Documentation for the archive program.
ARCE31B   COM  Archive program file.
INSTALL   BAT  Automatically installs program to your hard drive.

PC-SIG
1030-D East Duane Avenue
Sunnyvale, CA   94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<<  Disk No 1093 JOBS  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║  The program files on this disk are archived. You must first unarchive  ║
║ the files before you will be able to use them. For instructions on how  ║
║ to use the unarchiving utility program, type: INSTALL (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## JOBS31B0.TXT

{% raw %}
```
                JOBS - Job Organization and Backup System

                             Version  3.10sb
                            Shareware Version

                      Copyright (C) 1985, 1986, 1987
                                RCT Design

              JOBS shareware distribution files as of 1/18/87:
                        JOBS31B1.ARC and JOBS31B2.ARC


    ========================  WHAT IS JOBS?  ========================

JOBS is an acronym for JOB Organization and Backup System.  It is a
hard disk manager, DOS shell, utility set, menu manager, and more.  It
runs on IBM PC/XT/AT and compatible computers.

Perhaps our most difficult task has been to explain what JOBS is.  It
doesn't fall neatly into a single category.  Maybe it is best described
as a housekeeper.

As a housekeeper, JOBS performs those tasks that are performed outside of
application programs.  We consider PCs to be machines specifically
designed to run applications, ie., word processing, accounting, planning,
drafting, design, etc.  Housekeeping tasks are those that are necessary
but incidental.  Housekeeping tasks include:

  1. DOS related operations, such as directory creation/removal,
     file copy, erase, rename, etc.

  2. Execution of application programs.

  3. Installation and removal of programs and utilities.

  4. Backup or archiving of data created by applications.

  5. Miscellaneous functions to display, organize, and manage
     application data; ie., tools used to print, search, sort,
     compare, etc.

  6. The ability to automate or customize frequently performed
     operations.

  ========================  FEATURE HIGHLIGHTS  ========================

The shareware version of JOBS (JOBS-SW) is a subset of JOBS+, which adds
support for hard disk backup and restore, a menu manager, EASY menus to
simplify access to JOBS' extensive command set, and a set of macros that
make short work of many of the most common housekeeping tasks.

Here is a list highlighting what the Shareware version of JOBS can do.
Following that is a list of some of the additional features supported
by JOBS+.

DIRECTORY LEVEL FEATURES

Graphic representation of directory trees
  o  Not just one, but two directory tree screens
  o  Quick and easy movement among directories and disks
  o  Current directory follows the directory pointer
  o  Automatic scrolling for large directory trees
  o  Supports all 32 directory levels allowed by DOS

Versatile find file command
  o  Wild card search string
  o  Find only files that have been changed
  o  Find files by date and time
  o  Limit search to any branch of a directory tree
  o  Sorted results written to disk

Create, Erase, and Rename directories

Rename or add disk volume labels

FILE LEVEL FEATURES

Extensive directory display features
  o  Not one, but two directory display screens
  o  Quick sort on file name, type, size, or date/time
  o  Limit the displayed files
     o  By name, date/time, changed, or selected
     o  With wild cards
     o  Using AND, OR, and NOT logic
  o  Complete file statistics, including attributes
  o  Disk and memory statistics
     o  Disk capacity and percent of disk used
     o  Space required to copy to destination

Powerful file selection methods
  o  Select by pointing
  o  Select with multiple wildcards including a NOT operator
  o  Select by time and date
  o  Select by comparing two directory's contents
  o  AND, OR, and NOT logic may be applied to the above methods
  o  Save list of selected files for later recall

Batch commands - multiple file operations
  o  Copy, erase, move, rename, or print
  o  Change attributes, date or time
  o  Copy with directory structure to destination

Immediate single file commands, 'point and do'
  o  Run programs or batch files.
  o  Rename or erase a file
  o  Change the attribute of a file

Configurable print utility
  o  Pagination with optional page header
  o  Variable tab expansion, page size and margin
  o  Easily send control codes to printer

Miscellaneous commands
  o  List directory contents to disk or printer
  o  Type or hex dump file

DOS SHELL FEATURES

Runs other programs
  o  Point and run
  o  Run another program or batch file and return using less than
     2k of memory (1/2 of what DOS uses).
  o  Recall of last DOS command
  o  JOBS is an excellent base of operations

Edit the command line
  o  All prompted input can be edited
  o  WordStar key equivalents supported
  o  Default choices may be inserted and edited
  o  Filenames and paths may be 'captured' from the screen to be
     inserted at prompts.

Control the environment
  o  Set Verify, Break, Date and Time
  o  Enhanced access to and control of the DOS 'Set' environment

SPECIAL FEATURES

Programmable with a 'Learn' mode
  o  Create your own commands (macros)
  o  Easy to use macro learn mode
  o  Special macro commands
  o  Create your own menus and help screens
  o  Window editor for interactively creating pop-up windows for
     use with your custom macros.

Links to your editor
  o  Use your editor as an integral part of JOBS

Time clock functions
  o  Job timing - punch in, punch out, and total
  o  Unlimited number of jobs

OTHER FEATURES

Easy installation
  o  Smart install with thorough context sensitive help.
  o  Support for mono or color card (color selection)
  o  Control memory requirements (90k to 130k)

Not memory resident
  o  There when you what it, gone when you don't
  o  100% well behaved
  o  Compatible with other programs, including concurrent/multi-
     tasking utilities.

Slim and quick
  o  Will run in as little as 90k of available memory
  o  Loads and runs quickly
  o  Quick enough to use just to change directories
  o  Single key selection of commands
  o  Support for expert, rapid entry of commands

Extensive on-line help
  o  Over 200 context sensitive help screens just a key away

Thorough error trapping
  o  Full screen explanations and suggestions.
  o  Graceful recovery wherever possible


   ============  ADDITIONAL FEATURES PROVIDED WITH JOBS+  ============

Task Manager - user defined menus
  o  Ready to use function key menus.
  o  Interactively create, edit, and delete menu tasks as needed.
  o  No programming required.
  o  Automatically generates macros to execute tasks, quicker and
     more reliable than batch file based menus.
  o  Each menu has a note area to provide help text, keep reminders, etc.
  o  Pop-up mini directory tree and directory list.
     o  handy for those quick peaks or to change a disk.
     o  point and run a program
     o  point and edit a file

EASY menu system
  o  An alternate Lotus style menu set that simplifies access to JOBS'
     commands.
  o  Easier for the occasional user, with shortcuts for the serious user.
  o  Shorter more concise context sensitive help, with index.
  o  Single keystroke access, toggle between EASY menus and JOBS' menus.
  o  Provides ease of use without compromising on power and versatility.

Extension Set
  o  A collection of macros to extend JOBS' basic capabilities.
  o  Over 30 high level commands, accessed through pop-up menus.
  o  Commands to simplify those most frequently performed chores.
     o  Hard disk backup and restore
        o  Directory structure as well as files are backed up.
        o  Backup may be limited to selected directory branches.
        o  Backup all files, or just those that changed.
        o  Backup files specified in a selection list.
           o  Unlimited number of selection lists supported.
           o  Includes an interactive list builder.
           o  Accepts lists created by the Find file command.
           o  Lists may specify files to exclude.
        o  Backup based on file dates and/or times.
        o  Two Update commands
           o  Quickly update previously created backup disks.
           o  Update a single directory or multiple directories
              with a single command.
        o  Restore
           o  Automatically recreates original directory structure.
           o  Not order dependent, only restores the latest versions.
        o  Optional log of backup/restore transactions.
     o  File search
        o  may be limited to selected directory branch.
        o  5 variations
           o  Fast find, single wildcard search.
           o  Wildcard search for files that have been changed.
           o  Wildcard search for today's files.
           o  Find a single file and display its directory with pointer
              located at matching file.
           o  Multiple wildcard search.
        o  Search results written to disk.
        o  Redisplay last search results.
     o  Utilities
        o  Create a batch file and execute it.
        o  Move a directory branch within the directory tree.
        o  Search for text within selected files.
           o  Search selected files in current directory.
           o  Use selection list to search files in multiple
              directories on one or more disks, creates result list.
        o  Format a disk.
        o  Climb (visit each directory) a directory branch and clean out
           unwanted files specified with multiple wildcards.
        o  Climb a branch and run a macro at each directory.
        o  Batch erase all files in current directory.
        o  Batch erase selected files in current directory.
        o  Batch clear archive bits on selected files.
     o  Select files by comparing two directories.
        o  select the newer files.
        o  select those with same dates and times.
        o  select the older files.
        o  select those that are not in the other directory.

RCT  Design
PO Box 1726                  UUCP:  tellefson@cup.portal.com
Novato, CA 94948                    jack_gallivan@cup.portal.com
(415) 892-2713         Compuserve:  73417,545    
(408) 749-9826              Genie:  R.TELLEFSON
```
{% endraw %}

## CHANGES.TXT

{% raw %}
```
              Changes made in JOBS Shareware version 3.10b

Enhanced directory tree display.  JOBS now supports full 12 character
directory names.  Pressing any number key at the tree display causes
JOBS to adjust the number of characters displayed for each directory
name.  The display can now be adjusted to display anywhere from 3
characters to 12 characters for each directory name.

TREEPRNT macro upgraded to support dynamic tree display.  Tree will
print exactly as displayed on screen.

Created new Timeclock total report (TIMECLK LIST DISK) that provides a
better break down of time spent on each segment of a job.  Uses and
includes your comments to provide a more detailed break down of each
work session.
 
Enhanced .LST file selection macros.

Made install macro more intelligent in handling ambiguous path
specifications found in the DOS environment.  Also improved its method
of amending the autoexec file.  It will now find and remove any
previous path spec's and insert the new one in the same place the
original was found.

Improved help.  When at any one of JOBS' prompts, regardless of what
command is being performed, the help will explain prompt line edit
commands as well as the help related to the current command.


Thanks for your feedback.  Keep those requests comming in!  We'll
implement them ASAP.  With your support JOBS will continue to be the
most powerful tool of its kind.
```
{% endraw %}

## CONTACT1.DOC

{% raw %}
```

                  JOBS - Job Organization and Backup System
                   copyright (c) RCT Design  1985,86,87,88

       Hard disk manager and DOS shell for IBM PC/XT/AT and compatibles.

To order or for further information regarding this product, contact:

      USPS:  RCT Design
             PO Box 1726
             Novato, CA 94948

     Voice:  (415) 892-2713  Jack Gallivan
             (408) 749-9826  Robert Tellefson

      UUCP:  jack_gallivan@cup.portal.com
             tellefson@cup.portal.com

Compuserve:  73417,545  Robert Tellefson

     Genie:  R.TELLEFSON


Orders may be placed by Email and should include the following information:

Exact package(s) desired, ie., 2 copies of JOBS+ version with manual on disk

Full Name

Shipping address - UPS address if ordering printed manual, USPS otherwise

Phone number and best time to contact you if necessary.

Credit card information:    Visa or Mastercard, Number and expiration date
```
{% endraw %}

## CONTACT2.DOC

{% raw %}
```

                  JOBS - Job Organization and Backup System
                   copyright (c) RCT Design  1985,86,87,88

       Hard disk manager and DOS shell for IBM PC/XT/AT and compatibles.

To order or for further information regarding this product, contact:

      USPS:  RCT Design
             PO Box 1726
             Novato, CA 94948

     Voice:  (415) 892-2713  Jack Gallivan
             (408) 749-9826  Robert Tellefson

      UUCP:  jack_gallivan@cup.portal.com
             tellefson@cup.portal.com

Compuserve:  73417,545  Robert Tellefson

     Genie:  R.TELLEFSON


Orders may be placed by Email and should include the following information:

Exact package(s) desired, ie., 2 copies of JOBS+ version with manual on disk

Full Name

Shipping address - UPS address if ordering printed manual, USPS otherwise

Phone number and best time to contact you if necessary.

Credit card information:    Visa or Mastercard, Number and expiration date
```
{% endraw %}

## JOBS-SW.DOC

{% raw %}
```





                                           


                                         JOBS
                                           
                                           


                          ==================================
                          Job Organization and Backup System
                                           
                                 HARD DISK MANAGEMENT
                          ==================================


                       for the IBM PC, XT, AT, and compatibles


                                    Version 3.10s
                                  Shareware Version

       

       


                            Copyright (C) 1985, 1986, 1987
                                      RCT Design
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           

                                      RCT Design
                                     PO Box 1726
                                   Novato, CA 94948
                                           
                           (415) 892-2713 or (408) 749-9826
















                                           
            

            

            

            

            Copyright (C) 1985, 1986, 1987 by RCT Design.  All rights
            reserved.  No part of this publication may be reproduced,
            transmitted, transcribed, stored in a retrieval system, or
            translated into any language in any form by any means, except
            as permitted in the following agreement.

            

            The software described in this document is furnished under a
            license agreement.  The software may be used or copied only in
            accordance with the terms of the agreement.

            

            The JOBS software and manual are furnished "AS IS" and without
            warranty as to performance.  Because of the many uses to which
            this software may be put and the variety of hardware used in
            conjunction with it, no warranty of fitness for a particular
            purpose is offered.

            

            RCT Design reserves the right to make improvements in the
            product described in this manual at any time without notice.

       

            That said, we hope that JOBS is well suited to your needs.  If
            not, let us know about it.  If it is, let us know about that
            too.

       

       

       Program developed and documented by

       ROBERT C. TELLEFSON  and  JOHN E. GALLIVAN












       (C) Copyright RCT Design, 1987



       JOBS-SW 3.10                                           Table of Contents



                                  TABLE OF CONTENTS


            INTRODUCTION.......................................1
                Copyright......................................1
                License........................................1
                The Shareware Concept..........................1
                Registration...................................2

            GETTING STARTED....................................3
                Recommended Strategy...........................3
                Requirements...................................3
                Installation...................................3
                    The Easy Way - JOBS Installs Itself........4
                    Easy Installation Complete.................4
                    Doing It Your Way..........................4

            USING JOBS.........................................5
                Where To Begin.................................5
                Getting Familiar with the Basics...............5
                    <Esc> = QUIT, BACK UP, CANCEL..............5
                    <F1> = HELP................................6
                    <Ctrl><Home> = RESET.......................6
                Menus..........................................6
                Prompts........................................7
                Macros.........................................8
                The TREE Screens...............................8
                Flip - A Brief Tour............................8

            COMMAND SUMMARY...................................12
                Key Usage at the TREE Screens.................12
                Key Usage at the DIRECTORY Screens............12
                The Menu Structure............................13
                    TREE SCREEN MENUS.........................13
                    SYSTEM SCREEN MENUS.......................13
                    INSTALL SCREEN MENUS......................13
                    MACRO SCREEN MENUS........................14
                    TIMECLOCK SCREEN MENUS....................15
                    DIRECTORY SCREEN MENUS....................15
                    PRINT SCREEN MENUS........................17

            CHANGING INSTALLATION SETTINGS....................18
                Jobs Install..................................18
                    DRIVE.....................................18
                    LOAD......................................18
                    MACRO.....................................18
                    OPTIONS...................................19
                    RESTORE...................................20
                    SAVE......................................20
                    VIDEO.....................................21








       (C) Copyright RCT Design, 1987                                  Page - i



       JOBS-SW 3.10                                           Table of Contents


            MACROS - CUSTOM COMMANDS..........................22
                What are Macros?..............................22
                What can they do for me?......................22
                Macro Files...................................22
                The MACRO Screen..............................23
                Creating a macro?.............................23
                    Creating Macros with Learn................24
                    Correcting Mistakes While Learning........24
                Macro Text Files..............................25
                    Characters Used in Macro Text Files.......25
                    Text File Commands........................26
                Macro Command Reference.......................26
                    Macro Escape Commands.....................27
                    The Bracketed Commands....................32

            READY TO RUN MACROS...............................39
                JMAC-SW.JM....................................39
                    DOS-CMD...................................39
                    DO........................................40
                    LEARN.....................................40
                    ARC-SEL...................................40
                    CHG-MAC...................................40
                    EDMAC.....................................41
                    FRESHEN...................................41
                    GOTOTREE..................................41
                    DATE-HI...................................41
                    GO-SMENU..................................42
                    MAKEPATH..................................42
                    CONTINUE..................................42
                    README....................................42
                    TREEPRNT..................................42
                    TREEINIT..................................42
                    WRITER....................................43
                    DISP2DAY..................................43
                    PICK-LST..................................43

            APPENDIX A - JOBS FILES...........................44

            APPENDIX B - KEY WORDS............................46

            APPENDIX C - FINE TUNING..........................48
                CONFIG.SYS....................................48
                DOS Path......................................49
                NON-REMOVABLE VS. REMOVABLE...................49

            APPENDIX D - MANUAL INSTALLATION..................51

            APPENDIX E - AT THE DOS COMMAND LINE..............53

            APPENDIX F - ERROR MESSAGES.......................54

            REGISTRATION FORM................................END







       (C) Copyright RCT Design, 1987                                 Page - ii



       JOBS-SW 3.10s                                               INTRODUCTION
       ------------------------------------------------------------------------


                                     INTRODUCTION
       ========================================================================


       COPYRIGHT

       The program, JOBS-SW.EXE, all of its associated files, and this document
       are copyrighted materials.  It is your responsibility to honor these
       copyrights.


       LICENSE

       This version of JOBS (version 3.10s) has been placed in circulation
       under the shareware concept.  This means that you may try it out without
       paying for it.  It does not mean that you may continue to use it without
       paying for it.

       RCT Design grants you license to:

       1.  Give this program and its support files (listed in appendix A) to
           others for evaluation, so long as you provide them with the complete
           and unaltered file set.  Emphasis is on the word 'give'.  This
           product may not be distributed for profit under this license.  (Non-
           profit groups may charge a fee to cover the cost of materials, so
           long as that fee does not exceed $6.00 per copy.)
           
       2.  Use the program a reasonable number of times to determine its
           usefulness.
           
       End of license.  No other rights are granted or should be inferred.


       THE SHAREWARE CONCEPT

       The shareware concept is a software distribution method that benefits
       both you and the product's developer.  You gain the opportunity to try
       the software before buying.  The developer is provided a cost effective
       means of marketing and distribution, allowing high quality software to
       be attractively priced.  Sounds good, but to make it work you must
       purchase the product if it meets a need and you continue using it.

















       (C) Copyright RCT Design, 1987                                  Page - 1



       JOBS-SW 3.10s                                               INTRODUCTION
       ------------------------------------------------------------------------

       REGISTRATION

       Under the shareware concept, you are given a complete, working  product
       at no charge.  If you find the program useful and continue using this
       program, you are asked to pay a $29 registration fee.

       Payment of the registration fee entitles you to a registered version of
       JOBS (2 disk set), additional utility macros, a copy of the complete
       user's manual (with index) on disk.

       You can purchase JOBS+ for $69 (see the accompanying 'read.me' file for
       details about JOBS+).  The full program and JOBS+ manual are provided on
       disk (3 disk set) or add $10 for the printed manual.

       Whether you register JOBS or purchase JOBS+, you will be credited with
       15 minutes of telephone support and informed of updates and enhancements
       as they become available.

       Additional telephone support may be purchased in half hour blocks for
       $25 or by the minute for $1 per minute.  Support includes help with DOS
       as well as JOBS.  Our aim is to help you get the most from your
       computer.

       A registration form is provided at the end of this document.



































       (C) Copyright RCT Design, 1987                                  Page - 2



       JOBS-SW 3.10s                                            GETTING STARTED
       ------------------------------------------------------------------------

                                   GETTING STARTED
       ========================================================================


       RECOMMENDED STRATEGY

       1.  Read this section and install JOBS.
       2.  Read the next section entitled 'Using JOBS'.  This section explains
           the basic workings of JOBS and takes you on a brief tour.
       3.  Scan the section entitled 'Command Summary'.  This will give you an
           overview of the many things that JOBS can do.
       4.  Check out appendix C entitled 'Fine tuning'.  Make sure you are
           getting the most out of your system.
       5.  Experiment with JOBS.  Use the HELP key frequently (there is more
           information in the HELP than in this manual).
       6.  Learn as you go.  Learn what you need, as you need it.  Although
           JOBS has an extensive range of capabilities, it's not necessary to
           know how to use them all to derive benefit from this program.

       REQUIREMENTS

       JOBS requires DOS 2.0 or higher, a minimum of 128K of free memory, and a
       video system that has either Monochrome Display Adapter (MDA) or Color
       Graphics Adapter (CGA) capabilities.  You should also have a hard disk.
       JOBS will run from a floppy but it rarely makes sense to do so, except
       during installation.


       INSTALLATION

       The shareware version of JOBS is distributed as archived files.  The
       files included in these archived files are described in Appendix-A.

       These files may be un-archived with either of the two common archive
       programs, namely:

            PKXARC.COM     from PKWARE Inc.
            ARC.EXE        from System Enhancement Associates
            
       Be sure to make a backup copy of the distribution files.

       By the way, keystrokes are shown here between brackets, ie., <Enter> is
       the Enter key, <Tab> is the Tab key, etc.  On most machines these names
       should match the labels on your keyboard.















       (C) Copyright RCT Design, 1987                                  Page - 3



       JOBS-SW 3.10s                                            GETTING STARTED
       ------------------------------------------------------------------------

                         THE EASY WAY - JOBS INSTALLS ITSELF

       JOBS is designed to install itself, guaranteeing a proper installation
       every time.

       With this shareware version we will have to assume that you have already
       unpacked the archived files onto your hard disk and the following files
       are in the current directory:

          JOBS-SW.EXE  JOBS-SW.OV   JMAC-SW.JM   JINST-SW.JM   SAMPMENU.JM
          JOBS-SW.HLP  JERR-SW.HLP  JOBS-SW.DOC  JREAD-SW.ME   SMENU.JMT

       At the DOS prompt, type:

            JOBS-SW /N<Enter>

       JOBS will automatically execute its easy installation routine and guide
       you through to a completed installation.

       Note:  The key to JOBS' easy installation is the file JINST-SW.JM and
              the command line switch "/N".  If JOBS is run with the /N command
              line switch it will look in the current directory for the macro
              file JINST-SW.JM and, if found, will automatically run the easy
              installation macros.


                              EASY INSTALLATION COMPLETE

       Upon completion of the easy install routine, JOBS will be fully
       operational and you will be looking at JOBS' entry screen (TREE screen)
       and first menu.

       From here, skip over the next paragraph to the section entitled USING
       JOBS.


                                  DOING IT YOUR WAY

       If you are one of those people who is leery of automatic installations,
       or for whatever reason prefer to install JOBS manually, see appendix D.



















       (C) Copyright RCT Design, 1987                                  Page - 4



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

                                      USING JOBS
       ========================================================================

       This section covers the main features of JOBS.  It will not cover all
       the commands and those that it does mention will not necessarily be
       covered in detail.  But, it will get you started and shorten your
       learning experience considerably.

       A more detailed manual is provided upon registration of JOBS. It covers
       all of JOBS' features and commands in detail.

       For immediate information on each command, use the on-line HELP. It is
       quite extensive and is context sensitive.


       WHERE TO BEGIN

       If you used the easy installation process, you should now be looking at
       the TREE screen.  This is the first screen displayed when you enter JOBS
       (the shareware version displays its advertising message first, the
       registered version and JOBS+ do not).

       If you are not in JOBS, run it now.  At the DOS command line enter:

            JOBS-SW<Enter>

       This is the basic JOBS command line.  For information on JOBS' command
       line options see appendix E.

       Read the advertising, of course, then press any key to display the tree
       screen.

       If you are running JOBS on the current disk for the first time and there
       are lots of directories on the disk, JOBS will take a few seconds to
       gather the information needed to display the directory tree.  JOBS will
       retain this information for future use, allowing this tree to be
       displayed almost instantly the next time JOBS accesses this disk.


       GETTING FAMILIAR WITH THE BASICS


                            <ESC> = QUIT, BACK UP, CANCEL

       The <Esc> key is just that.  It will get you out of whatever you are
       doing.  At any point in the program that will accept keyboard input, the
       Escape key will either back up to the previous menu, terminate the
       current command or suspend the current file operations.











       (C) Copyright RCT Design, 1987                                  Page - 5



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

                                     <F1> = HELP

       Function key <F1> is the HELP key.  HELP is available anywhere in the
       program, is context sensitive and is available in three forms.  From
       general information to specific, the commands are:

       1.  <F1> then <?> for overall program information.
       2.  <F1> then <Space> for general information relating to the current
           menu.
       3.  <F1> then the first character of the menu command that you are
           interested in.
           
       At those program locations where only one choice is possible, the HELP
       key will automatically display the HELP screen pertaining to the current
       operation.

       Some simple HELP screen conventions are:

       Command names are displayed using high intensity characters with the
       first character capitalized.  Use the <Esc> key to exit HELP and return
       to the program.  Use <PgUp> and <PgDn> to view multiple page HELP
       screens.


                 <CTRL><HOME> = RESET, START JOBS FROM THE BEGINNING

       There may be times when you would like to just reset JOBS and start
       over.  At any prompt in the program that will accept keyboard input,
       pressing <Ctrl> and <Home> at the same time will reset JOBS to the first
       run state.  Using the reset will not adversely affect any file
       operations, because JOBS will close any open files before it completes
       the reset.


       MENUS

       JOBS menus are displayed on the 2nd line from the bottom of the screen
       and are displayed in alphabetical order.

       Commands are selected by typing the first character of the command name
       and will execute immediately unless the command chosen requires a
       confirmation.  Command sequences can be strung together and generally
       they can be entered without waiting for the program to catch up.
















       (C) Copyright RCT Design, 1987                                  Page - 6



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

       PROMPTS

       There are three types of JOBS prompts: Text, Numeric, or Yes/No (Y/N).

       Press <Esc> AT ANY PROMPT to exit the prompt and abandon the current
       operation.

       When prompting for text, JOBS highlights the input area to show the
       maximum length of the text to be entered.

       Numeric prompts expect only numbers to be input and display the
       permissible range of values between parentheses, ie., (1-50) means that
       any number from 1 to 50 will be accepted, all others will be ignored.

       Yes or No prompts will accept only <Y> or <N> and identify themselves by
       displaying (Y/N).

       All three prompt types display the default response between "<" and ">".
       Pressing the <Enter> key in response to a prompt, selects the default.
       Some examples:

            <Y>            Press <Enter> to answer Yes.
            <FILE>         Press <Enter> to select the default text 'FILE'.
            <20>           Press <Enter> to select the default value 20.
                           
       The default text may be inserted into the highlighted entry area using
       the <Ins> key.  Once inserted it may be edited or used "as is".  Default
       insertion may be used at any time and as many times as desired, limited
       only by the available entry space.  JOBS will ring the bell if there is
       not enough space remaining to insert the default text.

       The following prompt line editing operations are supported:

       Operation                        Key            Alternate key
       ------------------------------   ------------   -------------
       Move left one character          (Left arrow)     <Ctrl><S>
       Move right one character         (Right arrow)    <Ctrl><D>
       Move to beginning of line        <Home>
       Move to end of line              <End>
       Delete character left of cursor  <BackSpace>      <Ctrl><H>
       Delete character at cursor       <Del>            <Ctrl><G>
       Delete entire line               <Ctrl><Y>
       Insert captured filename         <Ctrl><N>
       Insert captured file             <Ctrl><F>
       Insert captured path             <Ctrl><P>
       Insert default                   <Ins>
       Execute                          <Enter>          <Ctrl><M>
       
       The prompt line editor is always in the insert mode.  To replace a
       character, delete the old character ( with <BackSpace> or <Del> ) and
       insert the new one.  Once the entered text is satisfactory, press
       <Enter>.  All text displayed within the highlighted area will be
       accepted; the cursor need not be at the end of the entered text.






       (C) Copyright RCT Design, 1987                                  Page - 7



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

       MACROS

       Macros are user created commands that may perform a series of program
       commands with one key stroke.

       The MACRO menu is displayed in the upper right-hand corner of the screen
       by pressing the <Tab> key. It lists only those macros, in the current
       macro file, that are meant to execute at the current program location.

       Only 10 macros are displayed at a time.  If more than 10 macros are
       available at the current location, the word TAB will be displayed at the
       bottom right corner of the macro menu window.  Press the <Tab> key to
       view the next 10.  Press tab, at the end, to clear the macro menu from
       the screen.  If any other key is pressed, it will be treated as a
       command and the macro menu window will be cleared from the screen.

       The name of the current macro file is shown at the top of the window.

       Macros may be executed without displaying the macro menu.

       Each macro is assigned to a key or combination of keys called macro
       keys.  The keys which may have macros assigned to them are the function
       keys <F1> through <F10> and the Alternate alphabetic keys <Alt><A>
       through <Alt><Z>.  The Alt keys are entered by holding down the <Alt>
       key while entering the desired alphabetic key.  No distinction is made
       between lower and upper case letters.


       THE TREE SCREENS

       The first screen that you see when you start JOBS is a graphic
       representation of the current drive's directory structure which is
       commonly known as a 'tree'.  This screen is called the TREE screen.  The
       directory pointer, a highlighted bar, indicates the current directory.

       If you move the pointer, with the cursor keys, and then exit the
       program, you will find that you are in that directory.  This is also
       true when running other programs or batch files from JOBS.


       FLIP - WHERE THE POWER COMES FROM  (A BRIEF TOUR)

       A unique and significant feature of JOBS is its dual screen mode of
       operation.  JOBS can alternately display two directory trees and two
       directory lists.  In either case, the two displays or screens are
       referred to as the 'current' screen and the 'alternate' screen.













       (C) Copyright RCT Design, 1987                                  Page - 8



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

       To try this out:

       At a TREE screen, press <F> (for Flip) to display the 'alternate' TREE
       screen.  You may not notice much difference, but move the directory
       pointer to a different directory and then <F>lip back to the original
       tree screen.  Notice that this tree display is as you left it when you
       Flipped the first time.

       Taking it a step further, select the Drive command and change to another
       drive (a floppy in drive A for example).  JOBS will display the selected
       drive's directory tree, placing the directory pointer on that drive's
       current directory.

       Now <F>lip to the alternate TREE screen.  Notice that it is as you left
       it.  The two TREE screens may be used to display two copies of the same
       directory tree or two different directory trees.

       JOBS is designed around this capability and its commands take full
       advantage of it, wherever possible.  Speaking of commands, notice that
       both screens have the same menus.  In fact, both screens are exactly the
       same except for the tree structure that is displayed.

       To see what files are in a directory, point to the directory of interest
       and press <V> (<Enter> or <+> may also be used to select the View
       command).  The View command takes you to one of the two DIRECTORY
       screens.

       The TREE screens are used to perform directory related operations and
       the DIRECTORY screens are used to perform file related operations.

       Notice that the DIRECTORY screen menu also has the Flip command.  Press
       <F> now.

       JOBS returned you to what was the alternate TREE screen (for the moment
       it is the current screen).  Select another directory and <V>iew it.  Now
       you have activated both DIRECTORY screens, one with each TREE screen.

       Press <F> again to return to the first DIRECTORY screen that you
       activated.  With both DIRECTORY screens active, Flip switches you back
       and forth between them.  With only one DIRECTORY screen active, Flip
       returns you to the alternate TREE screen to select a directory.

       Now that you have the swing (or flip?) of things, lets look at a few of
       the powerful things we can do with this organization.  To keep this as
       brief as possible, we'll look directly at a couple of commands and leave
       the rest for you to learn as you go.  By the way, if you'd like to see a
       visual of the 4 screens and how they fit together, select the HELP for
       the Flip command.











       (C) Copyright RCT Design, 1987                                  Page - 9



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

       Before we go any further, we need an empty directory to use temporarily.
       If you are not already at one of the TREE screens, press <Esc> until you
       are.  Move the directory pointer to the directory that you want this
       temporary sub-directory appended to.  Select <U>tilities <M>ake-new.
       Enter the new directory's name (perhaps TEMP).  With the TEMP directory
       in place, we're ready to proceed.

       Several of the most frequently used commands involve two directories,
       ie., copying files requires a source directory and a destination
       directory.

       Let's see how this is accomplished in JOBS.  For the purpose of this
       demonstration, let's copy a couple of JOBS' files to that temporary
       directory.

       At a TREE screen point to the JOBS data directory (the one you selected
       when installing JOBS).  If you need to change drives, press <D> to
       select the Drive command.  <V>iew JOBS' data directory.

       Ok, we've selected the source directory and need to select the files to
       be copied.  JOBS provides numerous ways to select files, the simplest of
       which is 'point and pick'.  With the up and down arrow keys, move the
       highlighted file pointer to the file you what to select and press
       <Enter> or <+>.  You may de-select in the same fashion by pressing
       <Space> or <->.  Select a couple of JOBS' files.  Selected files are
       displayed in high intensity and are preceded by a diamond.

       Now for the destination directory.  Press <Esc> to return to the current
       (or in this case the source) TREE screen.  Press <F> to Flip to the
       alternate (or destination) TREE screen.  Use the cursor keys to place
       the directory pointer on that temporary directory you created earlier.
       <V>iew it.  Since this is a new directory JOBS displays the message "No
       files present".  Select <F>lip to return to the source DIRECTORY screen
       and the previously selected files.

       Press <B> to select the Batch command.  All copy operations and commands
       that operate on groups of files are selected from the Batch menu that is
       now displayed.  The Batch menu lists all of the things you can do to a
       group of files.  Three of these commands (B-copy, Copy, and Dup) have to
       do with making copies.  The one we want in this case is B-copy (stands
       for batch copy).  This is the most frequently used copy command; the
       other two serve particular needs that will not be covered here (see
       their respective HELP screens).

       Press <B> to select B-copy.  B-copy automatically assumes that the
       alternate DIRECTORY screen is the destination and begins copying
       immediately.  When complete, JOBS reports the number of files copied.
       Press any key to return to the DIRECTORY screen.











       (C) Copyright RCT Design, 1987                                 Page - 10



       JOBS-SW 3.10s                                                 USING JOBS
       ------------------------------------------------------------------------

       Notice that the diamond markers have changed to 'x', denoting that the
       associated files have been copied.  If you select another file now and
       B-copy again, only the diamond marked files copy.  The 'x' marked files
       will be skipped.

       If you <F>lip now, you will see the new copies in the destination
       directory.

       Before you take off on your own, let's look at one more feature that
       dual screens make possible.

       Frequently it is useful to compare the contents of one directory with
       those of another.  While still at the destination directory that we
       copied those files to, press <S> to bring up the Select menu.  This menu
       displays the various selection methods available.

       One of the commands is called Match.  Press <M> and JOBS will select the
       files that match with the files in the alternate directory (files match
       if their names are the same).  Now, back at the DIRECTORY screen menu,
       press <C> to compare the selected files with the files in the alternate
       directory.  Notice that the select markers changed to '=', denoting that
       the matching files have equal dates and times.  Had they been different,
       the marks would be changed to '<' (this file's date is greater or later)
       or '>' (this file is earlier).

       Having completed this brief tour, you should have a reasonably good
       understanding of how to navigate, how to select commands, and most
       importantly how to get HELP.  This knowledge will serve you well in the
       learn-as-you-go process.

       Keep one finger on the HELP key and forge ahead; JOBS is pretty
       forgiving.  Press <Esc> at any time to cancel or back up.  If you just
       want to start over completely, press <Ctrl><Home>.


























       (C) Copyright RCT Design, 1987                                 Page - 11



       JOBS-SW 3.10s                                            COMMAND SUMMARY
       ------------------------------------------------------------------------

                                   COMMAND SUMMARY
       ========================================================================

       This section contains a brief listing and description of every command
       in JOBS.  Commands are listed in groups by screen.  Indenting indicates
       sub-menus and their respective levels.


       KEY USAGE AT THE TREE SCREENS

       The highlighted directory is the 'selected' directory for commands which
       require a directory specification, and is also the DOS 'current'
       directory if you exit JOBS or run other programs from within JOBS.

       The cursor movement keys may be used to move the highlighted pointer
       from directory to directory.  Their actions:

            <PgUp>         Move to the root directory.
            <PgDn>         Move to the bottom-most sub-directory of the root.
            <Up-arrow>     Move to the next directory above the current one.
            <Dn-arrow>     Move to the next directory below the current one.
            <Left-arrow>   Move to the directory left of the current one.
            <Right-arrow>  Move to the directory right of the current one.
            <Home>         Move to the base of the current branch.
            <End>          Move to the right-most directory in the current
                           branch.
                           
       If the tree is too large to fit on the screen all at once, the view will
       automatically scroll as needed.


       KEY USAGE AT THE DIRECTORY SCREENS

            </>            Redraw the screen.
            <\>            Toggle between display selected and display all.
            <!>            Toggle selected files.
            <Del>          Erase file under pointer.
            <Enter> or <+> Select file under pointer.
            <Space> or <-> De-select file under pointer
            <PgUp>         Display previous page in listing.
            <PgDn>         Display next page in listing.
            <Up-arrow>     Move pointer up one file.
            <Dn-arrow>     Move pointer down one file.
            <Home>         Move pointer to top of file list.
            <End>          Move pointer to end of file list.
            <5>            Center file pointer on screen.
                           












       (C) Copyright RCT Design, 1987                                 Page - 12



       JOBS-SW 3.10s                                            COMMAND SUMMARY
       ------------------------------------------------------------------------

       THE MENU STRUCTURE


       ------------------------- TREE SCREEN MENUS ----------------------------
       
       ESC            Quit JOBS.
       <.>            DOS system call
            ESC            Return to the TREE screen menu.
            Goto           Goto DOS and do not return.
            Large-call     Goto DOS and return to same location.
            Small-call     Goto DOS and return to beginning of JOBS.
       Drive          Change drive for the current display.
       Flip           Switch between current and alternate directory screen.
       Jobs           Select the menu for JOBS specific operations.
            ESC            Return to the TREE screen menu.
            Install        Goto the INSTALL Screen for JOBS setup.
            Macro          Goto the MACRO screen.
            Reset          Clears directory screen lists from memory.
            Timeclock      Goto TIMECLOCK screen.
       New            Force JOBS to read the disk and update tree display
                      information.
       Path           Capture path at directory pointer.
       Quit           Quit JOBS.
       System         Goto the SYSTEM Screen for DOS system information
       Utilities      Select menu for basic disk and directory functions.
            ESC            Return to the TREE screen menu.
            Branch         Create a directory branch in one operation.
            Erase          Erase an empty directory.
            Find           Locate file(s) in the current directory branch.
            Make-new       Create a new directory.
            Rename         Edit the name of a directory.
            Volume         Create or revise the disk volume label.
       View           Goto the DIRECTORY Screen for file listing and menu.

       ------------------------ SYSTEM SCREEN MENUS ---------------------------
       
       ESC            Return to the TREE screen menu.
       Break          Set DOS Break ON or OFF.
       Date/time      Set DOS system Date and Time.
       Environment    Enter or change DOS environment variable.
       Verify         Set DOS Verify ON or OFF.

       ----------------------- INSTALL SCREEN MENUS ---------------------------
       
       ESC            Return to TREE screen and menu.
       Drive          Add or remove a drive from the installation list.
                 ESC            Return to main install menu.
                 Add            Add a drive.
                 Remove         Remove a drive.
       Load           Load install settings from JOBS' file on disk.
       Macro          Set maximum size of macro definitions, macro escape key,
                      and default macro file.
       Options        Access Options menu.
            ESC            Return to the main install menu.





       (C) Copyright RCT Design, 1987                                 Page - 13



       JOBS-SW 3.10s                                            COMMAND SUMMARY
       ------------------------------------------------------------------------

            Bell           Turn error bell ON or OFF and select pitch.
                 ESC            Return to main install menu.
                 Dos            Turn bell ON and use DOS bell sound.
                 0 = OFF        Turn bell OFF.
                 1 - 9 = ON     Turn bell ON and select pitch.
            Call           Select Edit and <.> call default method.
                 ESC            Return to main install menu.
                 Echo           Have JOBS display intermediate command line.
                 Goto           Select GOTO as default.
                 Large-call     Select Large-call as default.
                 Small-call     Select Small-call as default.
            Data-dir       Declare the JOBS data directory.
            Editor         Provide JOBS with the name of your editor.
            Graphics       Allow graphic characters in text files.
            Memory         Use how many K of memory for data.
            Tabs           Set default tab expansion for View and Print.
            Update         Have Dup leave how many K for updates.
       Restore        Cancel changes made since entering install screen.
       Save           Save the current installation values.
       Video          Video setup menu.
            ESC            Return to the main Install menu.
            Colors         Select the colors for the 6 windows.  (CGA only).
            No-colors      Set to the monochrome mode.  (CGA only).
            Reset-colors   Switch to color with default colors.  (CGA only).
            Speed          Select Fast or Slow screen save/restore method.

       ------------------------ MACRO SCREEN MENUS ----------------------------
       
       ESC            Return to the TREE screen menu.
       Compile        Re-compile the macros in the current macro file from
                      their .JMTs.
       Erase          Erase a macro.
       File           Access menu for macro file related commands.
            ESC            Return to the MACRO screen.
            Change         Select a new Macro file.
            Make-new       Create a new Macro file.
            Organize       Pack the current Macro file.
       Get            Get a macro command from either the screen or a .JMT file
                      for future Put operation.
            ESC            Return to the MACRO screen menu.
            File           Get the macro command from a .JMT file.
            Screen         Get macro command from the current macro file.
       Learn          Enter the macro learning mode.
       Mark           Mark a macro to indicate starting point and status.
            ESC            Return to MACRO screen menu.
            Reset          Reset the macro mark to the unmarked state.
            Auto           Execute automatically at marked location.
            Boot           Execute automatically every time you start JOBS.
            Global         Execute anywhere in the program.
            Hidden         Prevents display of macro in macro menu.
            Local          Execute from a specific location.
            Once           Execute automatically only once each time the macro
                           file is loaded.
            *              Indicates the active marks





       (C) Copyright RCT Design, 1987                                 Page - 14



       JOBS-SW 3.10s                                            COMMAND SUMMARY
       ------------------------------------------------------------------------

       Put            Put the macro command from the previous Get to either a
                      disk file as a .JMT or a key.
            ESC            Return to the MACRO screen menu.
            File           Put the macro command to a .JMT disk file.
            Screen         Put the macro command to the current .JM file.
       Rename         Give a macro a new name.
       Step           Set the single step mode ON/OFF.
       Trade          Trade the macro command at one key with the command at
                      another key.
       View           Look at the contents of a compiled macro command.

       ---------------------- TIMECLOCK SCREEN MENUS --------------------------
       
       ESC            Return to the TREE screen menu.
       In             Timecard time In.
       Out            Timecard time Out.
       Total          Total timecard to screen.
       List           Send totals to disk or printer.
            ESC            Return to the TIMECLOCK Screen.
            Disk           Save Total to disk.
            Printer        Send Total the printer (DOS LST device).

       ---------------------- DIRECTORY SCREEN MENUS --------------------------
       
       ESC            Return to the TREE screen menu.
       <.>            Access to DOS command line.
            ESC            Return to the DIRECTORY screen.
            Goto           Exit to DOS with no return.
            Large-call     Goto DOS and return to exact departure location.
            Small-call     Goto DOS and return to beginning of JOBS.
       Attribute      Set the highlighted file's attribute.
            ESC            Return to the DIRECTORY screen.
            Archive-on/off Set the archive flag ON/OFF.
            Hidden         Set the file attribute to Hidden.
            Normal         Set the file attribute to Normal.
            Read-only      Set the file attribute to Read-only.
            System         Set the file attribute to System.
       Batch          Do a batch operation on the selected files.
            ESC            Return to DIRECTORY screen.
            Attribute      Select the menu to change file attributes.
            B-copy         Copy the selected files to the alternate directory.
            Copy           Copy the selected files to any destination.
            Dup            Copy the selected files to another drive and
                           duplicate the directory structure.
            Erase          Erase the selected files.
            Log()          Set the logging ON or OFF for B-copy and Dup.
            Move           Move the selected files to a different directory on
                           the same disk.
            Print          Goto the PRINT Screen with the selected files.
            Rename         Rename the selected files.
            Time           Reset the date/time stamps on selected files.
       Comp           Compare current screen with alternate screen.
       Display        Change the display parameters for this directory.
            ESC            Return to the DIRECTORY screen.
            Arch           Display the files with their archive bit set ON.




       (C) Copyright RCT Design, 1987                                 Page - 15



       JOBS-SW 3.10s                                            COMMAND SUMMARY
       ------------------------------------------------------------------------

            Date           Set the date/time range.
                 ESC            Return to the DIRECTORY screen.
                 Between        Display files with a date/time between two
                                given dates and times.
                 Equal          Display files with an equal date/time
                 Newer-than     Display files with a newer date/time
                 Older-than     Display files with an older date/time.
                 Today          Display files with today's date.
            Logic()        Select next logic display operator (OR, AND, NOT).
            Name           Pick a subset by name or wildcards.
            Order          Set the order of the sort.
                 ESC            Return to the DIRECTORY screen.
                 Date           Sort by date and time.
                 High-low       Sort in a descending order.
                 Low-high       Sort in an ascending order.
                 Name           Sort on filename and filetype.
                 Size           Sort on file size.
                 Type           Sort on filetype and filename.
                 *              Current selected sort method and order.
            Path           Specify path and files to display.
            Reset          Set the display back to the program defaults.
            Selected       Display only those files that have been selected.
       Erase          Erase the highlighted file.
       Flip           Flip to the alternate screen.
       Rename         Rename the highlighted file.
       Select         Select a group of files based on some conditions.
            ESC            Return to the DIRECTORY screen menu.
            Arch           Select files with their archive bit set.
            Date           Select by date menu.
                 ESC            Exit to the DIRECTORY screen menu.
                 Equal          Select files with an equal date/time.
                 Newer-than     Select files with a newer date/time.
                 Older-than     Select files with an older date/time.
                 Today          Select files with today's date.
            From(ALL)      Select from ALL, DISPLAYED, or SELECTED files.
            Logic(OR)      Logic for next Select operation (OR, AND, NOT).
            Match          Select files that match filenames in the alternate
                           directory.
            Name           Select by name or wildcards.
            Reset          Return the select parameters to their default state
                           and de-select all selections.
            Sel-file       Use a .LST file as the criteria for selection.
            Token          Select files using tokens as criteria.
                 ESC            Return to the DIRECTORY screen  menu
                 Copied         Select files with the token set to 'x'.
                 Diamond        Select files with the token set to a diamond.
                 Equal          Select files with the token set to '='.
                 Greater-than   Select files with the token set to '<'.
                 Less-than      Select files with the token set to '>'.
       View           Brings up Dump, Edit, Type, List menu.
            ESC            Return to DIRECTORY screen menu.
            Dump           Show a file in hexidecimal format.
                 ESC            Return to the DIRECTORY screen.
                 Graphic()      Switch the graphic character display ON or OFF.





       (C) Copyright RCT Design, 1987                                 Page - 16



       JOBS-SW 3.10s                                            COMMAND SUMMARY
       ------------------------------------------------------------------------

                 Offset         Move to a specific offset address from the
                                beginning of the file.
                 Search         Search for decimal or hex values in file.
                 Type           Switch to the Type mode.
                 <PgDn>         Move forward in the file 336 characters.
                 <PgUp>         Move backward in the file 336 characters.
                 ** EOF **      End of the file is on the screen.
            Edit           Using your editor, edit the highlighted file.
            List           Copy directory list to a file or the printer.
                 ESC            Return to the DIRECTORY screen menu.
                 Disk           List the displayed files to a .LST file.
                 Printer        List the displayed files to the printer.
            Type           Show a file in ASCII format (text).
                 ESC            Return to the DIRECTORY screen and menu.
                 <1>-<9>        Change tab expansion, 1 to 9 characters.
                 Dump           Switch to the dump mode.
                 Graphic()      Switch the graphic character display ON or OFF.
                 Offset         Jump to a specific location offset from the
                                beginning of the file.
                 Search         Search for a text string in the file.
                 ** EOF **      End of File is on the screen.
            View           Select a file to Type or Dump using a filespec.

       ------------------------ PRINT SCREEN MENUS ----------------------------
       
       ESC            Return to the DIRECTORY screen.
       Bell           Set the Wait bell ON/OFF.
       Control        Allows sending control characters to the printer.
       Go             Begin printing.
       Header         Define or turn the header ON or OFF.
            ESC            Return to the PRINT screen menu.
            Define         Define or edit the page header.
            On/off         Turn the page header ON or OFF.
       Line           Set the line related settings.
            ESC            Return to the PRINT screen menu.
            Cut            Truncate lines at the specified column.
            Tab            Set the tab columns.
       Output         Declare the output destination (File or Printer).
            ESC            Return to PRINT screen menu
            Disk           Print the file to a disk file.
            Print          Print to the DOS LST: device
       Page           Set the page related settings.
            ESC            Return to the PRINT screen menu.
            Begin          Begin the print process at page number.
            End            End printing after page number.
            Lines-used     Number of printed lines per page.
            Margin         Number of columns for the left-hand margin.
            Size           Set length in lines and the width in columns.
       Wait           Set the Wait conditions.
            ESC            Return to the Print menu.
            File           Return to Print screen menu at the end of each file.
            Page           Pause at the end of each page.







       (C) Copyright RCT Design, 1987                                 Page - 17



       JOBS-SW 3.10s                                      INSTALLATION SETTINGS
       ------------------------------------------------------------------------

                            CHANGING INSTALLATION SETTINGS
       ========================================================================


       JOBS INSTALL

       From either TREE Screen, press <J><I> (Jobs Install) to access the
       Install screen.  Individual options may be changed, at any time, without
       affecting other existing settings.  The changes can be Saved permanently
       or used for the duration of the current session without affecting the
       permanent settings.


       DRIVE ------------------------------------------- Add or remove a drive.
       
       JOBS needs to know how many disk drives your computer has and of what
       types.  This command allows you to modify the list of drives that JOBS
       is installed for.

       When Adding a drive, Drives A and B default to removable media.  Drive C
       and above default to non-removable media.  Adding a drive that is
       already on the drive list will replace the existing one.  For a
       discussion on removable vs. non-removable see Appendix C.

       You may access drives not included in the install list.  You will get a
       message that the drive has not been installed and JOBS will ask if you
       wish to continue.  If you answer yes and the drive is physically
       present, JOBS will temporarily install the drive.  If the drive doesn't
       exist, you will be told and the operation terminated.


       LOAD ----------------------------- Load installation settings from disk.
       
       When the installation settings are Saved, they are written to JOBS' .EXE
       file.  Load performs the opposite task, ie., it reads the .EXE file and
       replaces the settings currently in memory with those from the disk.


       MACRO ----------------------------------------------------- Macro setup.
       
       Macro sets the amount of memory JOBS will set aside for learning a macro
       or reading macro text files (filetype '.JMT').  It also allows you to
       change the keyboard macro escape key.

       The distribution default macro memory size is 5000 bytes, but you may
       select any size between 100 and 30,000.  This macro memory is the space
       necessary to Learn and/or Compile a macro.  When a macro is running, the
       entire definition is loaded into memory and JOBS allocates sufficient
       space (if available) regardless of the maximum macro size set by this
       command.









       (C) Copyright RCT Design, 1987                                 Page - 18



       JOBS-SW 3.10s                                      INSTALLATION SETTINGS
       ------------------------------------------------------------------------

       The macro escape key is used to to signal the start and end of a macro
       learn session, to abort running macros, and as a prefix to special macro
       commands.  The default macro escape character is the grave accent mark
       (`) (ascii 96) which is usually on the same key as the tilde.  It may be
       changed to any printable character (ascii 32 thru 126) or control
       character (ascii 1 thru 31), except <Esc> and <Enter>.  You cannot enter
       the current macro escape key as a response.  Press <Enter> if the
       current key is the one that you want.  The macro escape key selected
       should be convenient to use without conflicting with keys used for other
       purposes.

       Note:  This command only changes the macro escape key.  Macro text files
              always refer to the macro escape code as '~' (ascii 126).


       OPTIONS -------------------------------------------------- Options menu.
       
       This command brings up the Options menu.

       Menu line:
           ESC  Bell Call Data-dir Editor Graphics Memory Tabs Update

       JOBS will ring an error bell on improper input or on errors during
       operation.  This bell can be turned off or the pitch can be set to
       either the DOS sound or one of 9 other preset pitches.

       For full DOS compatibility, the bell should be set to DOS.

       The default type of DOS access (using just <Enter> after the <.>) can be
       set to Large-call, Small-call or Goto.  The View Edit command uses the
       installed Call Edit setting directly, and goes to the editor with no
       further interruptions if an editor has been installed.  This command
       selects the call methods for both conditions.  The Echo option
       determines whether or not the command line is echoed on the screen as it
       is executed.

       It's recommended that you use the Large-call method for the editor if
       you can afford the extra memory required.  This will return you to the
       same screen that you left to use the editor.

       Failing to find a "J-SWDIR=" in the DOS environment, the installed JOBS
       data directory is the directory that JOBS will expect to find its files
       in.

       JOBS can use your editor as if it were one of JOBS' built-in commands.
       The Options Editor command allows you to tell JOBS the name of your
       editor or word-processor.  If you don't have one or want to disable the
       capability, enter 'NONE'.  For this feature to be fully useful, your
       editor should reside in a directory that is specified by your system
       PATH command.

       The editor you use must be able to accept a file specified on the DOS
       command line.  As an example:

            C>EDLIN TESTFILE.TXT




       (C) Copyright RCT Design, 1987                                 Page - 19



       JOBS-SW 3.10s                                      INSTALLATION SETTINGS
       ------------------------------------------------------------------------

       This command line would run EDLIN and EDLIN would automatically load the
       file TESTFILE.TXT.

       The Graphic or 8th bit, used by some programs for control purposes
       instead of graphics, can be turned On or Off.  If it is used for
       control, you will want the Graphic switch OFF.  The JOBS commands Dump,
       Type and Print are the only commands affected by this option, and you
       can change it as required while viewing or printing files.

       You can control how much memory JOBS will use for data with the Options
       Memory command.  The limits in K bytes (between parenthesis) provide the
       minimum and maximum settings allowed.  You may specify any integer value
       within the limits.  When you set the maximum value, JOBS will ask the
       operating system for the maximum and automatically adjust to what it
       gets.  If you specify less that the maximum, JOBS will request the
       specified amount and complain if it doesn't get it.  For most purposes,
       the maximum setting is the one of choice; allowing JOBS to make the most
       of what is available.  Although JOBS will run if given only the minimum
       of scratch pad memory, 20k is probably a more practical lower limit.

       The Options Tab command will set the default tab expansion.  When a file
       is displayed on the screen using the View command or printed with the
       Print command, JOBS converts tabs (ASCII 9) into the necessary spaces to
       reach the next tab column.  Tab columns commonly default to every 8
       spaces.  Keep in mind that this is only the default value; you may
       interactively change the tab columns while typing or printing a file.

       The Batch Dup command will leave a set amount of space free on the
       destination disk.  The Option Update command sets the default value for
       the amount of space that will be left.  The amount of space can be
       anywhere between 0 K bytes and 1,000 K bytes and is specified in integer
       values as K bytes.  This is only a default value and can be changed on
       an individual basis when you use the Dup command.


       RESTORE ----------------------------------------- Reset to prior values.
       
       Use this command if you decide, while in the middle of making changes,
       that you want to start over.  This will restore the installation setting
       that was in place just before the Install command was given.


       SAVE --------------------------------- Save current installation values.
       
       This saves the current installation settings to that file whose name
       appears on the 3rd line from the bottom of the screen.  Save will blink,
       in the menu line, if the current settings have been changed without
       saving.

       Unless Saved, installation changes are only temporary.









       (C) Copyright RCT Design, 1987                                 Page - 20



       JOBS-SW 3.10s                                      INSTALLATION SETTINGS
       ------------------------------------------------------------------------

       VIDEO ------------------------------------------------ Video setup menu.
       
       This brings up a menu of commands related to video display options.

       If you have a video card that has Color Graphics Adapter (CGA)
       capabilities, you will be able to turn the colors on with Reset-colors,
       turn them off with No-colors, and select the colors with Color.  The
       color selection is done from a table of colors for each of the standard
       windows used in JOBS, and is made for both the normal and inverse modes.
       Reset-colors also returns the display to the distribution default
       colors.

       The speed and quality of the screen save and restore depends on the type
       of display controller in use.  To accommodate a variety of systems and
       maximize performance, JOBS can perform the save and restore operation
       two different ways.

       Using Speed Slow, all screen draw and redraw processes will go through
       BIOS.  This provides the most compatibility and is almost guaranteed to
       provide good quality.  Set to Slow, JOBS conforms strictly to the BIOS
       and DOS requirements.

       Fast uses a common method of producing faster screen images that by-
       passes the BIOS, causing JOBS to access video memory directly. Under
       most conditions this will work just fine, but in some controlled
       environments even this amount of deviation from recommended practices
       will cause problems.  Try both methods and pick the one that suits you
       and your operating environment.































       (C) Copyright RCT Design, 1987                                 Page - 21



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

                               MACROS - CUSTOM COMMANDS
       ========================================================================


       WHAT ARE MACROS?

       Macros are commands created by combining JOBS' built in commands.
       Besides combining the built in commands, you may also add some commands
       that are unique to macros.  This combination provides you the ability to
       create your own customized solutions.  Macros may control the display,
       define pop-up windows, wait for keyboard input, execute other macros,
       and more.


       WHAT CAN THEY DO FOR ME?

       Often there are command sequences that you perform repeatedly with
       little or no variation.  With JOBS' macro capability, you may teach JOBS
       the desired command sequence and thereafter execute the command sequence
       with a single keystroke.  Macros make repetitive operations not only
       easier but more accurate.

       The ability to link the basic commands together and create your own
       unique commands goes a long way toward customizing the program to your
       particular needs.  The benefit is that you get what you want.  The
       disadvantage is that you have to teach JOBS what you want.

       The Shareware version of JOBS is distributed with a limited set of ready
       to run macro commands (JOBS+ comes with approximately 150 macros, and
       the list continues to grow).  To this you can add commands by 'teaching'
       JOBS new commands or creating text file commands that you can then load
       into the macro file.

       Each macro is assigned to a key or combination of keys called macro
       keys.  The keys which may have macros assigned to them are the function
       keys <F1> through <F10> and the Alternate alphabetic keys <Alt><A>
       through <Alt><Z>.  The Alt keys are entered by holding down the Alt key
       while entering the desired alphabetic key.  There is no distinction made
       between lower and upper case letters.


       MACRO FILES

       A macro file may contain up to 36 macros.  Only one macro file can be
       used at a time, but you can have as many macro files as you want.

       The JMAC-SW.JM file is the default macro file for JOBS (as distributed).
       On the install screen, you may specify any macro file you wish to be the
       default macro file.  If no file is specified at the DOS command line
       when JOBS is first executed, JOBS will try to load the default macro
       file.  If the file is not in the Data Directory, JOBS will complain,
       disable macros, and then continue.

       A new macro file can be created using the File Make-new command or by
       copying an existing one.




       (C) Copyright RCT Design, 1987                                 Page - 22



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       The first method, using File Make-new (<F><M>), is done at the MACRO
       screen menu.  This will create a new and empty file.

       For the second method, select the file you want to use as a model and
       then use the Batch Copy command.  Give the copy a new name.  Don't
       forget that the filetype must be '.JM'.  Go to the MACRO screen and File
       Change to the new macro file.  Erase the individual macros that you
       don't want.

       Either method will work.  Which you choose will depend on what you want
       to accomplish.  Using the copy routine ensures that the keys (macros)
       used to call standard macros are in the same place.

       Changing macro files when you are not running a macro can be done with
       the File Change command or using the supplied macro CHG-MAC.  Within a
       macro, you may use the File Change command or you can use the [$MACFILE]
       command.


       THE MACRO SCREEN

       Except for the actual execution of a macro, all macro activity starts at
       the MACRO screen.  The MACRO screen has three boxes that list the
       macros.  Each box consists of three columns.

       The first column lists the macro Mark.  Macros can be marked Auto, Boot,
       Global, Hidden, Local, and Once.  The second column is the key for the
       macro starting with the Function keys in the first box and the
       Alternate-Alpha key in the next two boxes.  The third column is the name
       of the macro and is limited to 8 characters.  Any legal file name
       character can be used.

       Macros that are highlighted are a special class of macro called
       extension macros.  They were created using JOBS Extension Language
       (JXL), a high level language that we use to customize and add to JOBS'
       basic capabilities.  These cannot be viewed or converted to text files
       (JMT's).  They are intended to be used as is and are documented in the
       next section of this manual, entitled Ready to Run Macros.


       CREATING A MACRO

       JOBS will allow you to create macros using the Learn mode or create them
       using your personal editor.

       In the beginning it will be much easier to use the Learn mode, since
       this will guarantee the proper syntax and generally take much less time
       for the simple macros.

       At some point you will want to modify your existing macros.  You now
       have the choice of going through the Learn process and creating a new
       macro to replace the old one or extracting the individual macro from the
       macro file, editing it and then placing the modified macro back into the
       macro file.





       (C) Copyright RCT Design, 1987                                 Page - 23



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       Most macro commands may be accessed in the Learn mode, but a few are
       available only to macros which have been created as text files.  All
       macro commands may be used when creating macro text files.

       Note:  The macro escape character is always defined as '~' (ascii 126)
              by macros when they are in text form, although the actual macro
              escape key defaults to '`' (ascii 96) and may be changed by the
              macro command ~E, or at the INSTALL screen.


                              CREATING MACROS WITH LEARN

       For an explanation of how to put JOBS into the Learn mode, goto JOBS'
       macro screen (press <J><M> at a TREE screen) and select HELP for the
       Learn command.

       Note:  The supplied macro, LEARN, automates the start Learn process.
              See the section 'READY TO RUN MACROS'.

       In the Learn mode, special macro escape commands are accessed by
       pressing the macro escape key, followed by the first character of the
       command's name.

       You may also wish to call other macros while in Learn mode.  Press the
       macro key for the macro you wish to [CALL].  On the macro information
       line, JOBS will confirm that you wish to [CALL] another macro.  Answer
       <Y>es and JOBS will insert the [CALL] instruction inoto the current
       macro.  The referenced macro will be run, and when that macro is
       complete, JOBS will return to recording your keystrokes.

       In Learn mode, macros may not [CALL] themselves; either directly or
       indirectly.  A macro that calls itself is said to be recursive.
       Recursive macros may be created as text files.

       In Learn, all references to other macros are automatically performed as
       [CALL]s by name instead of [CALL] by key or as [GOTO]s (see [GOTO], this
       section).


                         CORRECTING MISTAKES WHILE LEARNING.

       If you enter an illegal keystroke (one that rings the bell), JOBS will
       automatically 'un-record' it on the next keystroke.

       If you enter a legal keystroke, but not the one you wanted, there are a
       couple of ways to correct what JOBS has learned,depending on the
       situation.  You must first enter the commands needed to return JOBS to
       where it was before the unwanted key was entered.  JOBS will record
       these keystrokes, not knowing that you are merely trying to correct an
       error.  Having backed up to the point where the error occurred, the only
       thing that remains to be done is getting JOBS to forget the unwanted
       keystrokes.  There are two ways to do this.







       (C) Copyright RCT Design, 1987                                 Page - 24



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       1.  If you are at a place in the program where <BackSpace> hasn't any
           meaning you may merely <BackSpace> over the unwanted keystrokes.
           The bell will ring (for the illegal keystrokes), but you needn't be
           concerned because the learning part of JOBS will dutifully un-record
           the unwanted keystrokes and ignore the illegal keystroke errors.
       2.  If you are at a place in the program where <BackSpace> is a legal
           keystroke, (ie., at a text input prompt), for each recorded
           keystroke you wish to un-record, press the macro escape key followed
           by <BackSpace>.  JOBS will un-record keystrokes without passing the
           <BackSpace> on to the operation being learned.
           

       MACRO TEXT FILES

       A .JMT file is a standard ascii file containing an individual macro in
       text form.  This file can be created either from scratch with a text
       editor or by using the Learn mode and then using the Get Screen/Put File
       commands to create the text file.

       The Get Screen command will extract an individual macro from the current
       macro file and place the macro in an intermediate buffer.  From this
       buffer, you can then Put it to a disk file (filetype '.JMT') using the
       File option.

       To place this .JMT file back into the macro file (.JM), you must Get
       File the .JMT from the disk and then Put Screen, which assigns it to a
       key of your choice in the current macro file.

       Note:  The supplied macros, EDMAC and FRESHEN, automate the macro text
              editing process.  See the section 'READY TO RUN MACROS'.


                         CHARACTERS USED IN MACRO TEXT FILES

       All alpha, numeric and normal character keys are usable.

       The following non-alphanumeric key combinations are translated to
       control characters and are specified by their control character names.

                 Key           In .JMT file         Alternate
                 -----------   ------------         ---------
                 <Esc>              ^[                [ESC]
                 <Enter>            ^M                [RET]
                 <Ins>              ^]
                 <Del>              ^G
                 <Home>             ^^
                 <End>              ^_
                 <PgUp>             ^R
                 <PgDn>             ^C
                 (Up arrow)         ^E
                 (Down arrow)       ^X
                 (Right arrow)      ^D
                 (Left arrow)       ^S
       





       (C) Copyright RCT Design, 1987                                 Page - 25



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       The macro escape symbol in text files is always the tilde (~).

       In text macros, spaces, tabs, carriage returns, and line-feeds are not
       significant except in window text.  Use these characters freely to
       enhance the readability of the macro text file.

       Preceding any character with the macro escape symbol will cause that
       character to be included, ie., ~~will include ~, ~<Space> includes the
       space character.

       <Enter> and <Esc> may also be included as [RET] and [ESC], respectively.


                                  TEXT FILE COMMANDS

       Macros created using your editor may also use the 'bracketed' commands.
       These are only available to macros created as text files, and are
       delimited with square brackets.

       In the macro text file, any significant character that is not part of an
       escape command or a bracketed command will be passed to JOBS as a
       recorded keystroke.


       MACRO COMMAND REFERENCE

       The macro commands are split into three categories based on their
       application within JOBS.

       1.  Menu Commands are the commands that the macro selects from JOBS'
           regular menus, ie., the recorded keystrokes.
       2.  Macro Escape Commands can be used while Learning or creating a text
           file.
       3.  Bracketed Commands are only available to macros created with an
           editor.  They are not available while using the Learn mode.
























       (C) Copyright RCT Design, 1987                                 Page - 26



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

                                MACRO ESCAPE COMMANDS


       ~Bell ------------------------------------------------------------------
       
       Enable/disable the JOBS error bell.

          Text format:   ~B[ON] or ~B[OFF]
                                       

       ~Delay -----------------------------------------------------------------
       
       Delay specified number of seconds before continuing with macro.

          Text format:   ~D[nnn]       nnn may be any value between 0 and 240.
                                       
       Example:
          ~D[5]    [* Suspend operations for 5 seconds and then continue. *]
                                       
       Comments:  This is a fixed delay, see the Pause command (in this
       section) for a delay that can be interrupted by the keyboard.


       ~Escape ----------------------------------------------------------------
       
       Change current macro escape key.  The default macro escape key is <`> .
       This is the grave accent key.  The new macro escape key remains in
       effect until changed by another ~E command or until JOBS is exited.

          Text format:   ~Ex           the macro escape key would become 'x'
                                       
       Example:
          ~E@      [* Change the macro escape key to '@'. *]
                                       
       Comments:  When changing the macro escape key the user should avoid
       choosing a key that conflicts with one of JOBS' command keys.


       ~Help ------------------------------------------------------------------
       
       Turn JOBS' context sensitive HELP processor ON/OFF.  When HELP is turned
       OFF, the <F1> key will be treated the same as the other macro keys; ie.,
       if it is defined the macro will be run.  Once turned OFF, HELP remains
       OFF until turned ON again by an ~H[ON] or until macro processing is
       completed.

          Text format:   ~H[ON]  or  ~H[OFF]
                                       
       Comments:  With HELP on, the [F-1] macro may only be accessed from
       another macro; using either [CALL] or [GOTO].









       (C) Copyright RCT Design, 1987                                 Page - 27



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       ~Keyboard --------------------------------------------------------------
       
       Take input from keyboard up to and including a specified character, then
       continue with remainder of macro.  All keys input up to the specified
       character are passed through to JOBS.

          Text format:   ~Kx           'x' is the key to wait for.
                                       
       Example:
          ~K[RET]  [* Wait for the <Enter> or <Return> key. *]
                                       
       Comments:  This command allows macros to be suspended, accept keyboard
       input, and then continue.

       If 'x' is the current macro escape character, JOBS will accept only one
       character from the keyboard, regardless of what that character is.


       ~Mark ------------------------------------------------------------------
       
       Mark macro start location.  This provides the ability to Mark and change
       the starting location and status of a macro from within a running macro.
       This command, when used inside a macro, has the same effect as pressing
       the macro escape key while outside a macro.

          Text format:   ~M
                                       
       Comments:  This command is useful for dynamically changing Auto macro
       locations or assignments for error trapping or menu windows.


       ~Pause -----------------------------------------------------------------
       
       Pause and wait for a keystroke or for a specified length of time (in
       seconds), whichever comes first.  If the time value is set to 0, JOBS
       will wait indefinitely for a keystroke before continuing with the
       remainder of the macro.

          Text format:   ~P[nnn]       nnn is any value from 0 to 240
                                       
       Example:
          ~P[5]    [* Wait for any key and give up after 5 seconds. *]
                                       

       ~Reset -----------------------------------------------------------------
       
       Do a complete reset of JOBS program.  JOBS will immediately stop macro
       processing and jump to the installed drive's TREE screen, resetting
       itself to the state it was in when first loaded into memory.

          Text format:   ~R
                                       
       Comments:  With ~T[ON],(see ~Trap following), any error that occurs
       while a macro is running will automatically cause a Reset.  If a macro
       is Marked to automatically run at the TREE screen, it will be run after
       the Reset operation; thus providing a means to recover from errors.



       (C) Copyright RCT Design, 1987                                 Page - 28



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------
       
       ~Screen ----------------------------------------------------------------
       
       Screen output may be turned ON/OFF with this command.  This will quiet
       warning messages but leave fatal messages and HELP style error messages
       active.  (see also [WIND][PROT]).  The screen is always ON outside
       macros.

          Text format:  ~S[ON]  or  ~S[OFF]
                                       
       Comments:  Screen OFF commands follow the command that screen OFF should
       begin with and screen ON commands precede them.  JOBS looks one command
       ahead for screen OFFs but only actuates screen ONs when it comes to
       them.  For example, the following short macro does a jump from the macro
       screen to the DIRECTORY screen without displaying the TREE screen.
       ~S[OFF] is processed before [ESC], while ~S[ON] is only processed before
       the View command if it placed before it.

       Example:
          [ESC]    [* Exit macro screen. *]
          ~S[OFF]  [* Turn off screen I/O. *]
          p\[RET]  [* Move tree pointer to root directory. *]
          ~S[ON]v  [* Turn screen back on and View directory. *]
                                       

       ~Trap ------------------------------------------------------------------
       
       Macro error trap.  When ON, errors cause JOBS to Reset (See ~Reset).

          Text format:   ~T[ON]  or  ~T[OFF]
                                       
       Comments:  Any error that rings the bell will cause JOBS to Reset if
       Trap is on.  (except for the out of space bell at text prompts)


       ~Verify ----------------------------------------------------------------
       
       Verify ON/OFF.  Operations such as erasing or copying files, changing
       file attributes, etc., will be performed without confirming the erasure
       or overwrite if Verify is OFF.  Verify is always ON outside macros.

          Text format:   ~V[ON]  or  ~V[OFF]
                                       
          Range:  ON or OFF
                                       















       (C) Copyright RCT Design, 1987                                 Page - 29



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       ~Window ----------------------------------------------------------------
       
       Activate window editor.

       Prompts: Window number? (1-6)

          Text format:  Not applicable.
                                       
       Comments:  After picking the window number you wish to use,  JOBS will
       display the description menu from which you can describe the window.
       Once the window's descriptors have been selected,  JOBS will display an
       empty window in the middle of the screen.  With the cursor keys you may
       move this window, and also change its size.  With <NumLock> off, the
       cursor keys change the window's size.  With <NumLock> on, the cursor
       keys move the window around the screen.  Press <Esc> when the window's
       size and location are satisfactory.

       When the window has been described and located, JOBS will display the
       menu:
            ESC  Describe  Edit  Locate

            ESC            Exit the window editor, return to Learn mode.
            Describe       Brings up window description menu.
            Edit           Edit window's contents.
            Locate         Set window's size and location.
                           
       At this menu you can return to the description menu, relocate the
       window, quit this window definition and continue teaching, or add text
       to the window using the built-in editor.  Select Edit and JOBS will
       display the window and place the cursor in the upper left corner ready
       to accept text.

       The editor is always in the insert mode (as opposed to overwrite) and
       will not allow you to enter characters if it will cause a line to exceed
       the width or height of the window.  However, you may read files from
       disk whose lines exceed the width or height of the window; the excess
       will be truncated for display but will be retained within the macro
       text.

       Blink, high intensity, or inverse on allows you to move the cursor to
       the right causing each character passed over to take on the selected
       attribute.  You may undo/backspace with (Left arrow) or <Ctrl><S>.  When
       finished, exit with <Esc>.

       Insert graphic character brings up an ASCII table from which you may
       pick a character by number.  You are then prompted for the quantity of
       the selected character you wish to insert at the current cursor
       position.

       Once you exit the description menu, you cannot go back and re-edit the
       window.  There is no return once you exit.  JOBS will confirm your
       desire to exit the window editor.  To re-edit a window, turn the macro
       into a JMT file and edit the text.






       (C) Copyright RCT Design, 1987                                 Page - 30



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       The window editor utilizes the same keystroke conventions as Wordstar
       and supports the following commands:

            COMMAND        DESCRIPTION
            -------------  ----------------------------------
            <Esc>          exit editor
            <Home>         move to start of line
            <End>          move to end of line
            <BackSpace>    delete character to left of cursor
            <Del>          delete character under cursor
            <PgUp>         move to top of window
            <PgDn>         move to bottom of window
            (Right arrow)  move cursor right
            (Left arrow)   move cursor left
            (Up arrow)     move cursor up one line
            (Down arrow)   move cursor down one line
            <Ctrl><A>      move cursor back one word
            <Ctrl><C>      same as <PgDn>
            <Ctrl><D>      same as (Right arrow)
            <Ctrl><E>      same as (Up arrow)
            <Ctrl><F>      move cursor forward one word
            <Ctrl><G>      same as <Del>
            <Ctrl><K>      ^K command prefix
                 <Ctrl><B> or <B>    mark start of block
                 <Ctrl><C> or <C>    copy marked block to cursor location
                 <Ctrl><K> or <K>    mark end of block
                 <Ctrl><R> or <R>    read file from disk, insert at cursor
                 <Ctrl><W> or <W>    write marked block to disk
                 <Ctrl><Y> or <Y>    delete marked block
                 any other key cancels operation
            <Ctrl><O>      ^O command prefix
                 <Ctrl><B> or <B>    start blink on
                 <Ctrl><C> or <C>    center text in current line
                 <Ctrl><G> or <G>    insert graphic character(s)
                 <Ctrl><H> or <H>    start high intensity on
                 <Ctrl><I> or <I>    start inverse on
                 any other key cancels operation
            <Ctrl><N>      insert linefeed at cursor
            <Ctrl><Q>      ^Q command prefix
                 <Ctrl><B> or <B>    move cursor to beginning of marked block
                 <Ctrl><D> or <D>    same and <End>
                 <Ctrl><K> or <K>    move cursor to end of marked block
                 <Ctrl><S> or <S>    same as <Home>
                 <Ctrl><Y> or <Y>    erase from cursor to end of line
                 any other key cancels operation
            <Ctrl><R>      same as <PgUp>
            <Ctrl><S>      same as (Left arrow)
            <Ctrl><X>      same as (Down arrow)
            <Ctrl><Y>      delete line
            









       (C) Copyright RCT Design, 1987                                 Page - 31



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

                                THE BRACKETED COMMANDS

       These commands represent an additional macro capability.  They are used
       when creating or enhancing macros with an editor, and cannot be used in
       the Learn mode.


       [$MACFILE] -------------------------------------------------------------
       
       This variable holds the name of the current macro file.  Assigning it a
       valid macro file name (without the extension) causes JOBS to load the
       specified file.  If the file is not found the current macro file remains
       unchanged.  Assigning the variable the name of the current macro file
       has no effect.

          Format:  [$MACFILE = "mac"]  "mac" is the name of a valid macro file.

       [* ... *] --------------------------------------------------------------
       
       Macro .JMT files may be freely commented by placing comments between [*
       and *].  Comments may be as long you wish, covering as many lines as you
       wish.  When JOBS compiles the JMT, commented text is discarded; so no
       penalty is paid for extensive commenting of source code.

       Comments may be nested within one another.  Comments may not be included
       between [WIND] and [ENDWIND].


       [ASK][SELECT] ----------------------------------------------------------
       
       This will check the keyboard for a keystroke.  It will only accept legal
       keys.  For macro keys, it will attempt to [GOTO] the macro assigned to
       the entered key.  Non-macro keys will fall through and the macro will
       continue.  A failed [GOTO] will result in an error message.

          Format:  [ASK][SELECT]
                                       

       [BELL] -----------------------------------------------------------------
       
       This will ring the bell once if either ~B[ON] or JOBS is installed to
       ring the bell on an error.

          Format:  [BELL]
                                       

       [CALL] -----------------------------------------------------------------
       
       Call another macro in the current macro file and return.  When the
       called macro is completed, macro processing resumes with the next
       command following the [CALL].  Nesting of macros with the [CALL] command
       is limited to 6 calls deep.  [CALL] has several formats:

          Format:  [CALL][F-10]        Call the macro assigned to <F10>.
                   [CALL][A-C]         Call the macro assigned to <Alt><C>.
                   [CALL]["MACNAME"]   Call the macro named "MACNAME".



       (C) Copyright RCT Design, 1987                                 Page - 32



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       [EXIT] -----------------------------------------------------------------
       
       [EXIT] causes JOBS to immediately exit the current macro.  If the
       current macro was called by another, control is returned to the caller.
       Exiting an un-nested macro causes macro processing to end with the
       message "macro completed".  Running off the end of a macro has the same
       effect.

          Format:   [EXIT]
                                       

       [GOTO] -----------------------------------------------------------------
       
       Goto another macro in the current macro file and do not return.  The
       format of the [GOTO] command is the same as that of the [CALL] command.

          Format:  [GOTO][F-10]        Goto the macro assigned to <F10>.
                   [GOTO][A-C]         Goto the macro assigned to <Alt><C>.
                   [GOTO]["MACNAME"]   Goto the macro named "MACNAME".
                                       
       [GOTO] is more memory efficient than the [CALL].  With the [CALL]
       command, the calling macro remains in memory.  With the [GOTO] command,
       the macro containing the [GOTO] is discarded and its memory becomes
       available for other uses.


       [KEY] ------------------------------------------------------------------
       
       The next macro key is to be taken literally and passed to program.

          Format:  [KEY][F-1]          Passes the F-1 key to the program.
                                       

       [LEGAL]..[ENDLEGAL] or [ILLEGAL]..[ENDLEGAL] ---------------------------
       
       Individual keystrokes may be declared legal or illegal.  Illegal
       keystrokes will be ignored by JOBS.  To declare any key legal or
       illegal, place its name between the appropriate delimiters.  Keys
       specified may include ^A (ascii 1) through ~ (ascii 126) and the macro
       keys.

          Format:  [LEGAL] (list of keys) [ENDLEGAL]
                   [ILLEGAL] (list of keys) [ENDLEGAL]
                                       
       Examples:
          [LEGAL]A^C.[A-B][ENDLEGAL]   [* declares that 'A', CTRL-C, '.' and
                                       ALT-B are legal keystrokes and all
                                       others are not. *]
          [ILLEGAL]J[F-2]7^^[ENDLEGAL] [* declares that 'J', F-2, '7', and Home
                                       are illegal and all other keys are
                                       legal. *]
                                       
       Multiple declaration are not cumulative, that is, each declaration
       completely redefines legal/illegal keystrokes.





       (C) Copyright RCT Design, 1987                                 Page - 33



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       Keystroke status remains in effect until redefined and only inside of
       macros.

       Note that the non-alphanumeric keys are represented and translated as
       described earlier in the section (see Characters Used in Macro Text
       Files).

       The <F1> key (HELP) is not affected by these declarations unless HELP is
       turned off with ~H command.

       ALT-F?,   SHIFT-F?,   ALT-#  are always illegal and unused by JOBS.


       [MACRO] ----------------------------------------------------------------
       
       This may be used to supply the macro's name.  No actual commands are
       generated by this statement.  If JOBS finds this statement anywhere in
       the .JMT file, it will supply the given name as the default when
       prompted for the macros name at completion of the Macro Get File
       operation.

          Format:  [MACRO][MACSNAME]   supplies the name 'MACSNAME'.
                                       
       This statement is optional. In any case, it supplies only the default
       name.  You may supply a different name at the prompt if you wish.


       [START] ----------------------------------------------------------------
       
       This may be used, in a .JMT file, to supply the macro's starting
       location.  It is the same task performed by marking.  No macro commands
       are generated by the statement.  Each location in the program has a
       unique identifier. This is a character string of from one to four
       characters long.

          Format:
                   [START][loc]        Where loc is the location string.  This
                                       macro may only begin at loc.
                   [START][BOOT]       To start the macro from the TREE screen
                                       once each time JOBS is started.
                   [START][GLOBAL]     The macro may be run at any location.
                                       
       In addition, the following modifiers may be appended to the [START]
       command:

                   [AUTO]              Run this macro automatically each time
                                       JOBS comes to loc.
                   [HIDDEN]            This macro is not to be run from the
                                       keyboard.  It may be called by other
                                       macros.
                   [ONCE]              Limit this [AUTO] macro to running
                                       automatically only once.
                                       






       (C) Copyright RCT Design, 1987                                 Page - 34



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       Examples:
          [START][T]                   [* Start this one at the TREE screen. *]
          [START][DD][AUTO]            [* Run this macro automatically at the
                                       DIRECTORY screen's Display menu. *]
          [START][GLOBAL][HIDDEN]      [* Call by another macro at any
                                       location.  Can't be run from keyboard.*]
                                       
       To determine the location identifier for a particular program location,
       Mark it's location with the macro escape key (see the Macro screen's
       Mark command HELP text).  JOBS will display the message:

          Marked at: "LOC"             where LOC is the location identifier.
                                       
       When JOBS looks through the macro list for BOOT or AUTO macros, only one
       will be finally selected, regardless of how many are found.  The one
       selected will be the one closest to the top of the macro menu.


       [STOP] -----------------------------------------------------------------
       
       The [STOP] command causes JOBS to immediately terminate macro processing
       with the message "macro discontinued."

          Format:   [STOP]
                                       

       [WIND]..[ENDWIND] ------------------------------------------------------
       
       [WIND] is the keyword declaring that a window definition follows.  Each
       bracketed keyword between [WIND] and W# are descriptors which describe
       the window.  All descriptors are optional, and may appear in any order.
       The W# through LLIN are mandatory parameters for the first use of that
       window and they MUST appear in this exact order.  All [WIND] commands
       must terminate with a matching [ENDWIND].

       Subsequent use of the same window only needs the [WIND] command,
       optional descriptors, and W#.  Window attributes and coordinates will
       default to those provided by the last definition of this W#.

       [WIND] and its parameters must reside on a line by themselves.  Any
       lines between that line and the line containing [ENDWIND] will be
       displayed as text.  Text may be highlighted with blinking, high
       intensity, or inverse video by delimiting the desired area with ~B, ~H,
       or ~I; respectively.

       Once a window is defined, its definition will not be altered until it is
       redefined by a macro command.  Window definitions remain active even
       outside macros.

       Format:

       [WIND].. descriptors ..W#,FG,BG,LCOL,ULIN,RCOL,LLIN
       desired text
       [ENDWIND]





       (C) Copyright RCT Design, 1987                                 Page - 35



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       DESCRIPTORS
       ------------
       The 'descriptors' may include:

       [BORDER][CLEAR][FREE][INVERSE][PROT][RESTORE][SAVE]

       [BORDER]  Display window with double line border around it.

       [CLEAR]  Clear window area.  If the defined window contains text,
       [CLEAR] is implied.

       [FREE]  This keyword is used to free storage used previously to [SAVE]
       this window.  Saved screen areas remain stored until released with the
       [FREE] descriptor, macro processing is completed, or a ~R (reset)
       occurs.

       [INVERSE]  Cause the entire window to be displayed in inverse video, a
       swap of FG and BG

       [PROT]  will prevent this window from being overwritten by subsequent
       screen output.  This protection will remain in affect until this W# is
       used again.  Protected status is also lost if another program is run
       from JOBS.  Protection remains in affect even after macro processing is
       completed.

       [RESTORE]  restore an area on the screen that was previously saved,
       using this window number.

       [SAVE]  saves that portion of the screen which will be overwritten by
       the new window.  Once a screen area is saved, it may be restored, any
       number of times, using the [RESTORE] descriptor.


       PARAMETERS
       -----------
       W#  Specifies the window number.  There are 6 window structures which
       may be used to define and maintain macro windows.  They are numbered
       from 1 through 6.

       FG  Specifies foreground color/attribute.  The range is a number from 1
       to 127.  Setting this value to 0 will cause this window to use the
       installed color settings for the corresponding JOBS window number (See
       the install color setting screen for corresponding window number
       assignments).

       BG  Specifies background color/attribute.  This value is ignored if
       FG=0.  The range is 1 to 127.

       LCOL  Specifies the window's left hand column.  The range is 1 to 80,
       the left most column on the screen being column 1.

       ULIN  Specifies the window's upper line.  The range is  1 to 25, the top
       line on the screen being line 1.

       RCOL  Specifies the window's right hand column.  The range is 1 to 80.




       (C) Copyright RCT Design, 1987                                 Page - 36



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       LLIN  Specifies the window's lower line.  The range is 1 to 25.

       [SAVE], [RESTORE] and [PROT] are tied to the window number and
       subsequent use of a window number cancels previous settings for these
       descriptors.  However, windows may be used to clear or display text and
       immediately re-used to display other another window of text without
       affecting the original display.

       Window coordinates are also tied to the window number.  If a window with
       a particular size and location is defined, and that same window number
       is later used without specifying size and location, the initial
       specifications will be used.  Using a previously uninitialized window
       number without specifying its coordinates will cause that window's
       coordinates to default to those of the corresponding JOBS window number.

       Window definition commands may be in upper or lower case.  Window text
       may include any ascii value.  To include the ~ character in text,
       precede it with a ~ (~~).

       Macro comments (text between [* and *]) should not be placed between
       [WIND] and [ENDWIND].

       ... WINDOW example 1 ...

       [WIND][BORDER][INVERSE]1,0,0,1,1,80,25
       first line in window - 2nd line on screen

       3rd line in window - 4th line on screen
       [ENDWIND]

       This defines a full screen window with a border.  The window is cleared
       and the two lines of text are displayed; one on the top line of the
       window (1st one below the border) and another on the third line.  The
       default screen attributes for window number 1 are used.  The entire
       window is cleared using the inverse attribute.

       ... WINDOW example 2 ...

       [WIND][SAVE][INVERSE]4,0,0,1,24,80,25
                              Press <~hY~h> to erase, <~hN~h> to skip.
                         Press <~hEsc~h> to abandon file erase process.
       [ENDWIND]

       This definition clears the 2 lines at the bottom of the screen using
       inverse video.  It uses the default colors for window 4 (JOBS' menu
       window).  Two lines of text are displayed in this window and no border
       is used.  This two line area of the screen was saved, in window 4's
       storage, before displaying the new window.

       Notice the ~h preceding and following the characters inside of the <>.
       ~h is the escape sequence that turns the high intensity video on or off.
       ~i and ~b are the escape codes for inverse video and blinking.







       (C) Copyright RCT Design, 1987                                 Page - 37



       JOBS-SW 3.10s                                                     MACROS
       ------------------------------------------------------------------------

       ... WINDOW example 3 ...

       [WIND][RESTORE]4
       [ENDWIND]

       This window command will restore the screen area saved in example 2.
       Without a [FREE] descriptor, the saved area remains in storage and may
       be restored any number of times.

       ... WINDOW example 4 ...

       [WIND][PROT]W#
       [ENDWIND]

       Turns on protection for previously defined window.

       ... WINDOW example 5 ...

       [WIND][SAVE][BORDER][CLEAR]W#,0,0,5,10,15,20
       [ENDWIND]

       Clears window (10 lines x 10 columns) and encloses clear area with a
       double line border.  The area cleared by this window is saved for later
       restore.  Any previous protection of this W# is turned off.

       ... WINDOW example 6 ...

       [WIND][RESTORE][FREE]W#
       [ENDWIND]

       Restore the contents of previously saved window and free the storage.
       The memory used for storing the screen information is released to be
       used elsewhere.  Any protection associated with this window is removed.

       ... WINDOW example 7 ...

       [WIND][BORDER]W#,0,0,1,1,80,25
       [ENDWIND]

       Puts a border around the entire screen without clearing the screen
       inside the border.  Windows are only cleared if the descriptor [CLEAR]
       is used or they contain text to display.

       Note:  Use the window editor in Learn mode to create syntactically
              correct windows every time, it's fun to do.














       (C) Copyright RCT Design, 1987                                 Page - 38



       JOBS-SW 3.10s                                        READY TO RUN MACROS
       ------------------------------------------------------------------------

                                 READY TO RUN MACROS
       ========================================================================


                                      JMAC-SW.JM

       JMAC-SW.JM is the default macro file for the shareware distribution
       version of JOBS.  The following is a description of each of the macros
       provided in the file.  Each of these macros' access method or limits are
       noted by the following key words preceding their description.

            EXT            Referred to as Extension macros, these are macros
                           that have special capabilities not available to the
                           distributed version of the JOBS macro language.
                           These macros also have the additional restriction
                           that they cannot be Viewed, Stepped, or Put to a
                           text file.  They are displayed on the MACRO screen
                           in reverse video.
                           
            CALL           Some of them may be [CALL]ed by macros that you
                           create.  The callable macros are distinguished  by
                           CALL following their names.  These macros may also
                           be accessed using the [GOTO] command.
                           
            GLOBAL         Many of these macro commands are insensitive to
                           where they begin running, ie., they may be run at
                           any time, from any menu.
       

       To execute these commands:

       1.  Change to the macro file called JMAC-SW.  As this is the default
           macro file, this step will usually be unnecessary unless you have
           previously changed the current macro file.  Press <Tab>, any time,
           to see the currently defined macros and the name of the current
           file.
       2.  For macros which are not Marked GLOBAL, go to the appropriate JOBS
           menu.

       3.Press the macro key that the command is assigned to.  Remember, <A-x>
       refers to pressing the <Alt> key at the same time as you press key <x>;
       <F-2> refers to function key number 2.
       

       DOS-CMDS ---------------------- <F-3> ---------------- EXT, CALL, GLOBAL
       
       DOS-CMDS opens a DOS command line at the bottom of screen and may be
       selected at any time, anywhere in JOBS.  HELP <F1> is available.  The
       command line can be edited using the cursor and edit keys and the last
       executed command line is available by pressing the <Ins> key.  This is a
       short cut with help for the <.> DOS access command.  It will use the
       default Call/Goto method, selected on the Install screen.







       (C) Copyright RCT Design, 1987                                 Page - 39



       JOBS-SW 3.10s                                        READY TO RUN MACROS
       ------------------------------------------------------------------------

       DO ---------------------------- <F-4> ------ EXT, CALL, DIRECTORY Screen
       
       DO is similar to DOS-CMDS except that it will place the name of the
       file, pointed to by the file pointer, on the command line.  The command
       line may be edited or executed 'as is'.  DO will only accept files
       having the file type of .EXE, .COM, or .BAT.

       Remember that if you have captured a path or filename, these can be
       added to the command line with a <^P> for the path, a <^F> for the file
       name and extension, or a <^N> for just the file name.


       LEARN ------------------------- <F-5> ---------------------- EXT, GLOBAL
       
       LEARN is a quick way to put JOBS in Learn mode.  This macro may be run
       from anywhere in JOBS.  It will automatically place you at the MACRO
       screen and prompt you for the macro key to be defined.  Once you have
       selected the key and named the new macro, JOBS will return to the TREE
       screen; ready to begin learning.


       ARC-SEL ----------------------- <A-A> ------ EXT, CALL, DIRECTORY Screen
       
       If you use either of the popular archive programs, you will find this
       macro to be very handy.  It provides a menu to access the 5 most common
       archive operations.

       With ARC-SEL you may select the files to be archived using JOBS
       selection commands and ARC-SEL will automatically compose the necessary
       command line(s) for the archive programs.

       ARC-SEL defaults to using PKWARE's archive programs.  To use the the
       archiver from System Enhancement Associates, place the following
       variable in the DOS environment:

            ARCHIVER=ARC

       where ARC is the name of their program that both adds and extracts
       to/from archive files.  PKWARE uses separate programs for adding and
       extracting; PKARC and PKXARC, respectively.


       CHG-MAC ----------------------- <A-C> ---------------- EXT, CALL, GLOBAL
       
       This macro provides a convenient way to change macro files from anywhere
       in JOBS.  It opens a window and displays a list of the macro files
       currently in the Data Directory.  Using the cursor keys, point to the
       desired macro file.  Press <Enter> to change to the selected file or
       <Esc> to remain in the current file.










       (C) Copyright RCT Design, 1987                                 Page - 40



       JOBS-SW 3.10s                                        READY TO RUN MACROS
       ------------------------------------------------------------------------

       EDMAC ------------------------- <A-E> ---------------- EXT, CALL, GLOBAL
       
       This macro integrates your editor into the macro screen.  Using EDMAC,
       you may edit an existing macro or create a new one.  Upon return from
       editing, the macro is automatically compiled (Get File) and saved (Put
       Screen).

       To run EDMAC, press <A-E> anywhere in the program.  EDMAC will
       automatically moves you to the Macro screen and prompts you for the
       macro key of the macro you wish to edit.  If you select the key of an
       already defined macro, EDMAC will check to see if that macro's .JMT file
       already exists.  If so, EDMAC will ask if you wish to use the existing
       .JMT file or create a new one (overwriting the old one).

       If you select the key of an undefined macro, EDMAC will prompt you for
       the new macro's name.  Enter the new macro name, and EDMAC will create
       the empty .JMT file; ready to edit.  If the name that you select already
       exists as a .JMT file, EDMAC will ask if you want to replace it.

       When editing is complete and you exit your editor, EDMAC will compile
       the newly edited .JMT file and save it to the current macro file using
       the key that you originally selected.

       To use EDMAC, you must tell JOBS the name of your editor.  This is done
       on the Install screen.  If you have not installed your editor, EDMAC
       will ask for the name of your editor each time you use it.


       FRESHEN ----------------------- <A-F> ---------- EXT, CALL, MACRO Screen
       
       This macro compiles a single macro from its .JMT file, given a key in
       the current macro file.  It automatically does the Get and Put required
       to update an existing macro.  At the macro screen, press <Alt><F> and
       the the macro key of the macro you wish to update.  An error will be
       reported if the appropriate .JMT can not be found.  Updating an
       undefined key has no effect.

       EDMAC and FRESHEN make macro text file development quick and easy.  For
       convenience, place copies of them in each of your macro files.


       GOTOTREE ---------------------- <A-G> ---------------- EXT, CALL, GLOBAL
       
       GOTOTREE does just that, it provides the necessary keystrokes to return
       to a TREE screen.  It can be run from anywhere in JOBS.  When creating
       your own macros, calling this macro as the first instruction in your
       macro guarantees that your macro will begin at a tree screen.  Your
       macro may then be Marked as Global.  Run from the keyboard, this macro
       is a handy way to return to a TREE screen without pressing <Esc>
       repeatedly or performing a reset.


       DATE-HI ----------------------- <A-H> ----------------- DIRECTORY Screen
       
       This will change the sort order of the DIRECTORY Screen to Date High-low
       and place the file pointer at the top of the list.



       (C) Copyright RCT Design, 1987                                 Page - 41



       JOBS-SW 3.10s                                        READY TO RUN MACROS
       ------------------------------------------------------------------------

       GO-SMENU ---------------------- <A-M> --------------------- CALL, GLOBAL
       
       This macro changes the current macro file to SAMPMENU.JM and causes the
       sample menu to be displayed.  SAMPMENU.JM is provided as an example of
       how to create your own menus using JOBS macros.  Try it out.  The source
       .JMT for the menu is named SMENU.JMT and contains an explanation of how
       to customize the menu to suit your needs.


       MAKEPATH ---------------------- <A-P> ---------------- EXT, CALL, GLOBAL
       
       MAKEPATH provides a quick and painless way to create and enter a new
       PATH= list (equivalent to the DOS path command).  Try it, it has its own
       HELP windows.  It can be run from anywhere in JOBS.


       CONTINUE ---------------------- <A-Q> ---------------- EXT, CALL, GLOBAL
       
       Continue is a subroutine to be called by other macros.  It is used by
       other macros to ask the question "Continue?  (Y/N) <N>."  Answering <N>o
       or <Esc> will will terminate macro processing.  With a <Y>es answer,
       control is returned to the calling macro.


       README ------------------------ <A-R> ---------------------- EXT, GLOBAL
       
       This allows you to recall either the JOBS READ.ME file or this .DOC
       file.  Use it to view these files on screen or to print them.  This
       macro expects these two files to be in JOBS' data directory.


       TREEPRNT ---------------------- <A-T> ----------------- EXT, TREE Screen
       
       TREEPRNT will print a copy of your tree to your printer.  It produces a
       file called "TREE.IMG" in JOBS' data directory and then prints the image
       using JOBS' Print Utility.

       As distributed, TREEPRNT is set to use standard ascii characters.  It
       has its own setup routine to change the codes it uses for the 5 graphic
       characters needed to print the tree.  To change these codes for use with
       a your printer, run TREEPRNT and when prompted for a comment line enter
       the word 'setup'.  It will prompt you for the ascii codes for the
       5 characters it uses to print the tree.  Setup saves these codes for
       future use, so you need only perform this setup if you are changing
       printers.

       This setup will also help you build the printer initialization macro.
       See TREEINIT below.

       Note: As distributed, the TREEPRNT routine uses standard ascii
             characters for the tree graphics.  In this configuration
             the tree may be printed on any standard printer.







       (C) Copyright RCT Design, 1987                                 Page - 42



       JOBS-SW 3.10s                                        READY TO RUN MACROS
       ------------------------------------------------------------------------

       TREEINIT ---------------------- <A-U> ---------------------- TREE Screen
       
       TREEPRNT calls this macro, at the PRINT Screen, just before it prints
       the directory tree.  It is a non-EXT macro that you can replace, edit,
       or delete to suit your needs.  As distributed, it uses the Print Utility
       Control command to advance the paper two lines and the Line Cut command
       to limit the printout to 80 columns or less.  You may edit this macro to
       do anything you wish done before printing the tree, so long as this
       macro exits at the PRINT Screen.

       If TREEINIT is not defined, no printer initialization will be performed.


       LSTFILES ---------------------- <A-V> --------------------------- GLOBAL
       A subroutine used by PICK-LST.  See below.


       WRITER ------------------------ <A-W> ---------------- EXT, CALL, GLOBAL
       
       Turn your system into an expensive typewriter with this command.  It's
       handy for addressing envelopes, making labels and quick notes.  Used in
       combination with the Print Utility Control command, you can change
       fonts, line spacing, etc., as needed.  The typewriter's output may be
       re-directed using MODE.COM.


       DISP2DAY ---------------------- <A-X> ----------------- DIRECTORY Screen
       
       This macro limits the file list to display only those files having dates
       equal to the most recent two days in the current directory.


       PICK-LST ----------------- <A-Y> and <A-Z> ------------ DIRECTORY Screen
       
       The PICK-LST macros make creating .LST files and selecting files using a
       .LST file quicker and easier.  They automatically execute each time you
       select the View List Disk or Select Sel-file commands.  Each opens a
       window and displays a list of the .LST files found in the data
       directory.  If there are more than 10 .LST files, you may use the cursor
       keys to page through them.  Selecting a file from the window with the
       <Enter> key will put that file's name on the prompt line.  You can now
       edit the name or use it as-is by pressing <Enter>.  To enter a new name,
       just type in its name and the .LST window will be cleared.  Once cleared
       the .LST window may be re-displayed by pressing the up-arrow key.

       Each PICK-LST is marked Auto to run at either the Select Sel-list or
       View List Disk command automatically.  To disable either macro, remove
       the Auto Mark.











       (C) Copyright RCT Design, 1987                                 Page - 43



       JOBS-SW 3.10s                                    Appendix A - JOBS Files
       ------------------------------------------------------------------------

                                      JOBS FILES
       ========================================================================


             THE SHAREWARE DISTRIBUTION SET CONTAINS THE FOLLOWING FILES.

          FILE          FUNCTION                        DIRECTORY LOCATION
          ------------  ------------------------------  ------------------
          JOBS-SW.EXE   Main Program                       Any Dir in PATH
          JOBS-SW.OV    Overlay for JOBS                    Data Directory
          JOBS-SW.HLP   Basic JOBS HELP                     Data Directory
          JERR-SW.HLP   Basic JOBS error messages           Data Directory
          JMAC-SW.JM    Default macro file                  Data Directory
          JINST-SW.JM   Install macro file                  Data Directory
          JOBS-SW.DOC   Manual for shareware version        Data Directory
          JREAD-SW.ME   Read first text                     Data Directory
          SAMPMENU.JM   Macro file with sample menu         Data Directory
          SMENU.JMT     Macro source code for sample menu   Data Directory
          
       The directory location is where the file must be for JOBS to use it.

       The DATA DIRECTORY is the directory that was selected by you during
       installation or the one pointed to by the J-SWDIR= variable in the DOS
       environment.  JOBS will always look there for its files.


                         JOBS MAY CREATE THE FOLLOWING FILES

          FILE          FUNCTION                        DIRECTORY LOCATION
          ------------  ------------------------------  ------------------
          BACKUP.LST    Output from Log command             Data Directory
          DIR.LST       Default output from View List       Data Directory
          JFIND.LST     Results of last Find                Data Directory
          JTREE.        JOBS image of the tree structure    Root Directory
          TIMECLK.TIM   Default Timeclock file              Data Directory
          TIMECLK.TOT   Default Timeclock totals file       Data Directory
          (*.*          Files for JOBS' own use             Data Directory
          *.JMT         Macro text file                     Data Directory
          *.LST         Selection list files                Data Directory
          *.TIM         Timeclock file(s)                   Data Directory
          *.TOT         Timeclock totals file(s)            Data Directory
          *.!??         Backup for *.??? file(s)            Data Directory
          *.$??         File *.??? printed to disk       Current Directory
          















       (C) Copyright RCT Design, 1987                                 Page - 44



       JOBS-SW 3.10s                                    Appendix A - JOBS Files
       ------------------------------------------------------------------------

       NOTES ON SOME OF THE FILES.

       JOBS-SW.EXE and JOBS-SW.OV - These two files are the absolute minimum
       required to run JOBS.

       JOBS-SW.HLP and JERR-SW.HLP - JOBS HELP and error message files.  JOBS
       will execute without these files, but there will be NO basic HELP or
       error messages.  The error messages contain useful information
       concerning JOBS and system failures.  If you don't need HELP and really
       need to save disk space remove JOBS-SW.HLP but retain JERR-SW.HLP.

       BACKUP.LST - This file is the result of the Log(ON) command.  This file
       is a continuing file.  If the file does not exist, JOBS will start the
       file.  If the file exists, JOBS will append the information for each
       operation to the end of the existing file.  This is the default backup
       log, you may use any filename you wish.

       DIR.LST  -  The results of the View List Disk operation are placed in a
       file.  DIR.LST is the default file name, but you may use any legal
       filename.  If the file exists, you will be given the option of appending
       the new list or replacing the file.  .LST file may be use to select
       files using the Select Sel-file command.

       JFIND.LST  -  The results of the Find operation are placed in this file.
       This file is replaced each time a Find is done.  If you want to keep the
       results, you must rename the file or move it out of the JOBS Data
       Directory.

       JTREE.  -  JOBS uses this file to store information about a disk's
       directory structure.  JOBS only writes this file to drives that have
       been installed as using non-removable media.  This file is kept in the
       root (\) directory and is given a system attribute to prevent it from
       being copied to another disk.


























       (C) Copyright RCT Design, 1987                                 Page - 45



       JOBS-SW 3.10s                                     Appendix B - Key Words
       ------------------------------------------------------------------------

                                      KEY WORDS
       ========================================================================

       Alternate screen - This is the screen that you are not currently
       viewing.  The screen may be either a DIRECTORY screen or a TREE screen.

       BATCH screen - This screen is used to display batch operations, such as
       copying or renaming a group of files. It is used by the DIRECTORY screen
       Batch commands.

       Branch - A branch is a portion of the directory TREE that grows from a
       single parent.  That parent can be any directory, including the root.
       The branch is then the parent directory and all directories connected to
       it on the right (as displayed on the TREE screen).  If the parent is the
       root then the branch is the entire directory tree.

       Current directory - This is the directory that the operating system
       recognizes as the logged drive and directory.  In JOBS the current
       directory is always the directory under the pointer at the TREE screen
       or the directory being viewed at the DIRECTORY screen.

       Current screen - This is the screen that you are actually using at the
       moment.  Although JOBS has two TREE screens and two DIRECTORY screens,
       there are no screen numbers.  The one that is currently displayed is the
       current screen and the other is the alternate screen.  Flipping between
       screens exchanges the current with the alternate.  For many operations
       which have a source and a destination, the current screen is the source
       and the alternate screen is the destination.

       Data Directory - This is the directory where JOBS' keeps it files.  This
       directory can be the root or any sub-directory.  It should be on a drive
       which uses non-removable media.

       Destination - This is the same as the alternate screen except it is used
       in reference to operations that take place between two directories.
       This is the directory that is not showing.

       DIRECTORY screen - Executing the View command from one of the TREE
       screens will result in a screen that provides a listing of the files in
       the directory that was highlighted at the TREE screen.  This screen is a
       window on the total list.  This screen is also used to display file and
       disk statistics.

       File or file name - generally refers to the filename plus filetype
       combination.

       Filename - refers to the characters before the period in the DOS file
       naming convention.  The maximum number of characters is 8.

       Filespec - refers to the drive specification, the path, the filename and
       filetype (if used).  The following is an example of a filespec:
            C:\DIR1\DIR2\FILENAME.TYP

       Filetype - refers to the characters following the period in the DOS file
       naming convention.  The filetype is not a required part of the file
       name.  The filetype is often referred to as the file extension or type.



       (C) Copyright RCT Design, 1987                                 Page - 46



       JOBS-SW 3.10s                                     Appendix B - Key Words
       ------------------------------------------------------------------------

       INSTALL screen - Installation, re-installation, and change of defaults
       are done from this screen.  The Jobs command from the TREE screen gets
       you to the INSTALL screen.

       Levels - refers to the columns of directory entries on the JOBS TREE
       screen.  The root is in the first level, sub-directories to the root
       directory are in level two, etc.

       MACRO screen - JOBS macro management is done from this screen.  This
       screen lists the 36 keys that macros can be assigned to and the macros
       defined in the current macro file.

       Non-removable media - JOBS considers any drive declared as using non-
       removable media as always having the media installed.  JOBS will access
       this type of drive more readily, knowing that it is safe to access that
       device without considering the consequences of open doors, missing or
       unformatted media.

       Parent - refers to the directory that precedes the current directory in
       a path and is one level to the left (as displayed on the TREE screen) of
       the current directory.

       PRINT screen - refers to the display screen for the print utility.  This
       screen may be accessed from either of the DIRECTORY screens using the
       Batch Print commands.

       Removable media - JOBS considers any drive declared as using removable
       media  as one whose media may be removed at any time.  JOBS will treat
       data taken from this type of drive as more transient, requiring more
       frequent updating than non-removable media.

       Source - As opposed to the destination screen, this is the current
       screen.  This is used in reference to operations that occur between two
       directories.

       SYSTEM screen - This screen is viewed when you use the System command.
       The screen displays the DOS environment.  Shown on the screen are the
       Break and Verify statuses, the DOS system clock Date and Time.  Any of
       these can be changed while at this screen.

       TIMECLOCK screen - The Jobs Timeclock command displays this screen.  It
       will show the current date and time and is used for the various timecard
       functions.

       TREE screen - One of the two available screens used to display a graphic
       representation of a disk's directory structure or 'Tree'.













       (C) Copyright RCT Design, 1987                                 Page - 47



       JOBS-SW 3.10s                                   Appendix C - Fine Tuning
       ------------------------------------------------------------------------

                                     FINE TUNING
       ========================================================================

       This is for those who want better performance; better performance not
       just for JOBS but for many other programs that you will be using.  Fine
       tuning means that several things can to be done with the DOS and JOBS
       environment to optimize efficiency.  The increase in performance may
       well be worth the investment in time and effort.


       CONFIG.SYS

       At each boot, DOS looks for an optional file called CONFIG.SYS in the
       boot disk root directory .  This file is used to specify such things as
       what device drivers to use, the maximum number of files that may be open
       at one time, and how much memory to set aside for buffers.  If it is not
       found, DOS will use pre-set values for the number of files and buffers.
       These default values seldom provide optimum performance.

       Look at your root directory.  If there is a CONFIG.SYS file, type it
       with JOBS' View Type command.  Look for the one line entry

            BUFFERS=n

       The decimal number following BUFFERS= represents the number of 528 byte
       pieces of RAM that the operating system will reserve to hold information
       that is coming from or going to the disk.  If BUFFERS= is not specified,
       DOS will default to 8.  Any program, including JOBS, that goes out to a
       disk regularly for information will benefit significantly if more than 8
       buffers are available.

       We recommend setting BUFFERS=20 for the XT and BUFFERS=30 for the AT.
       From experience, these seem to be good settings for JOBS, and many other
       applications also benefit from this increase over the default.  Beyond
       these recommended values, the law of diminishing returns begins to take
       effect.  The computer will spend more time searching memory than it
       would take to go directly to the disk.  The number is a function of the
       speed of your processor, the speed of your RAM and the speed of your
       drive.  The faster the processor and memory, the more BUFFERS.  The
       faster your drive, the fewer the BUFFERS.

       CONFIG.SYS is a standard ascii text file.  Use your editor to adjust the
       buffer count.  The new setting will take effect only after re-booting
       your system.















       (C) Copyright RCT Design, 1987                                 Page - 48



       JOBS-SW 3.10s                                   Appendix C - Fine Tuning
       ------------------------------------------------------------------------

       PATH

       The DOS PATH command  provides DOS with a list of directories to search
       for a given program or batch file.  When asked to run a program, DOS (or
       JOBS) will look for it in the current directory first.  If not found, it
       will then proceed from left to right through the PATH list until it
       either finds the file or reaches the end of the list.

       The power of this command lies in fact that you can run programs from
       any sub-directory.  You can also move unique applications into their own
       directory and still have access to them from other directories, if their
       directory is in the PATH.

       With a PATH command that specifies multiple directories, some
       improvement in performance will be realized if the directories are
       ordered according to frequency of use, ie.,  the most frequently
       accessed directory first.

       The PATH command is essential to the operation of JOBS.  If you do not
       have a PATH specified, during the easy installation, JOBS will ask you
       if you want to add a PATH specification to your AUTOEXEC.BAT file.  If
       you answer no, JOBS will put a path in the environment, but this will
       only be available until you exit JOBS the first time.  Minimally, the
       following PATH command should be included in your AUTOEXEC.BAT file.

            PATH=C:\

       Where C is the drive with JOBS-SW.EXE in the root directory.

       If you don't understand the path concept or what the AUTOEXEC.BAT file
       is, please review your DOS manual.  They will vastly improve the
       usefulness of your system.


       NON-REMOVABLE VS. REMOVABLE

       The current disk/directory (CD/D) in DOS is the default drive and
       directory.  DOS first looks here for programs or batch files in the
       absence of a path specification, drive specification or both.

       The notion of CD/D becomes somewhat less apparent when using JOBS.  You
       may move freely from directory to directory and from disk to disk; the
       CD/D is assumed from your actions and the type of media declared at
       installation.

       For drives which are installed as using non-removable media you may
       consider the directory you are pointing to or viewing to be the current
       directory; and the disk whose tree you are working with to be the
       current disk.

       With JOBS it's more accurate to consider the media as a mode of
       operation or state of mind, rather than the actual fact.







       (C) Copyright RCT Design, 1987                                 Page - 49



       JOBS-SW 3.10s                                   Appendix C - Fine Tuning
       ------------------------------------------------------------------------

       As an example, let's assume a two drive system (drives A & C). Drive A
       is installed as removable and Drive C as non-removable.  If, while
       viewing the directory tree for drive A, you choose to exit JOBS the CD/D
       will remain set to the C drive.  If you are viewing a directory from
       drive C on one screen and one from drive A on the other, JOBS will not
       change the CD/D when flipping between them.  This prevents inadvertent
       access to media that may have been removed and eliminates the overhead
       of logging on to the slower media each time you wish to view its
       contents.

       Note:  If you Call or Goto a program on drive A, JOBS will change the
              CD/D to drive A before running the program.

       This scenario is best suited for a system where floppy drives or tape
       units are treated mostly as backup or single access media. Single access
       media refers to media which is accessed to download data to the hard
       disk where it will actually be used.

       Whenever JOBS reads a non-removable media device to create a directory
       tree and it finds more than one directory, it will save the tree
       information to a file named JTREE.  If JOBS accesses a disk and finds
       that JTREE already exists, it will take the tree information from this
       file.  JOBS will only create the JTREE file on non-removable media.

       The JTREE file is automatically updated whenever the directory tree is
       altered using JOBS.  Use the New command (@ TREE screen menu) to force
       JOBS to update JTREE if the directory tree has been changed while
       outside JOBS.































       (C) Copyright RCT Design, 1987                                 Page - 50



       JOBS-SW 3.10s                           Appendix D - Manual Installation
       ------------------------------------------------------------------------

                                  MANUAL INSTALLATION
       ========================================================================

       Here we assume you are fully conversant with DOS and its commands.  It
       is also assumed that you have read through the rest of this manual an
       have become somewhat familiar with JOBS.

       An installation is considered successful if:

       1.  The environment variable PATH= has been SET and JOBS-SW.EXE is in
           the PATH.
           
       2.  JOBS has been assigned a data directory and, at a minimum, the
           following files are in that directory:
           
                 JOBS-SW.OV  JOBS-SW.HLP  JERR-SW.HLP  JMAC-SW.JM
                 
           optionally copy:
           
                 JREAD-SW.ME   JOBS-SW.DOC  SAMPMENU.JM  SMENU.JMT
                 
       3.  JOBS runs.
           

       SOME SUGGESTIONS ON HOW TO ACCOMPLISH THIS

       Comply with requirement #1.

       Pick a directory where you wish to have JOBS keep its files (the data
       directory).  Copy at least the files specified in requirement #2 to this
       directory.

       Log into the data directory, making it the current directory.

       At the DOS command line enter:

            JOBS-SW /N<Enter>

       JOBS should come up with a screen displaying the directory tree of the
       current drive (may take a moment if its a big tree).  Near the bottom
       right-hand side of the screen will be the blinking words:

            <J>obs <I>nstall

       This signifies that JOBS is in the install mode and that you should
       press <J> then <I> to access the Install screen.













       (C) Copyright RCT Design, 1987                                 Page - 51



       JOBS-SW 3.10s                           Appendix D - Manual Installation
       ------------------------------------------------------------------------

       Important things to do at the install screen:

       A.  Enter the Drive and Path of the selected data directory.
       B.  Install the drives used by your system.
       C.  Select the proper screen save/restore method.
       
       Suggested things to do:

       D.  Select colors if using a color display.
       E.  Install your editor.
       
       Any other settings may be dealt with later, as needed.  Remember, you
       may return to the install screen at any time to make either permanent or
       temporary changes.

       Save the install settings and exit the install screen.  The blinking
       install reminder will still be displayed.  Press <Ctrl><Home> to reset
       JOBS.

       JOBS installation is complete and requirement #3 has been satisfied..







































       (C) Copyright RCT Design, 1987                                 Page - 52



       JOBS-SW 3.10s                          Appendix E - Command Line Options
       ------------------------------------------------------------------------

                                AT THE DOS COMMAND LINE
       ========================================================================

       When running JOBS from the DOS command line, you may specify the drive
       to be displayed first, the macro file you wish to begin with, a macro to
       begin executing, and/or the amount of environment space you want JOBS to
       set aside.  For example:

            C>JOBS-SW D: MYFILE MACRO /E:300<Enter>

       With the command line shown above, JOBS would begin on drive D:, using
       the macro file 'MFILE.JM'.  300 extra bytes of environment space would
       be set aside and JOBS would immediately begin executing the macro named
       'MACRO'.  All of these are optional and may be supplied in any order,
       with one exception.  If a macro name is specified, it must be preceded
       by the name of the macro file.

       /N on the command line forces JOBS into installation mode.  In this
       mode, JOBS resets it's installation settings to the distribution
       defaults and widens it's search for needed files.

       /P will permanently load this copy of JOBS.  JOBS functions very well as
       a shell.  If it is installed to execute other programs using Small
       calls, it will actually use less memory than COMMAND.COM to load and run
       other programs.  If you use this option, load all of your RAM resident
       programs first.  /P is also very handy when setting up an environment
       for others to use; preventing them from inadvertently exiting JOBS.

       Examples:

          C>JOBS-SW E:<Enter>          Run JOBS and come up displaying the
                                       directory tree on drive E:
                                       
          C>JOBS-SW MYFILE<Enter>      Run JOBS, display the tree for the
                                       current drive and load the macro file
                                       named MYFILE.JM.
                                       
          C>JOBS-SW C: /E:500<Enter>   Come up displaying the tree on drive C:
                                       and set aside 500 extra bytes for
                                       environment storage.
                                       
          C>JOBS-SW /P /E:300<Enter>   Load JOBS as a permanent shell and allot
                                       300 extra bytes of environment storage.
















       (C) Copyright RCT Design, 1987                                 Page - 53



       JOBS-SW 3.10s                                Appendix F - Error messages
       ------------------------------------------------------------------------

                                    ERROR MESSAGES
       ========================================================================

       JOBS has four types of error messages. In order of severity they are:

       1.  One or two line pop-up warning messages.  Warning messages are
           informative messages that usually let the user try again after
           reading the message.
           
       2.  One or two line pop-up fatal error messages.  Fatal error messages
           cause the current process to be abandoned after the user has read
           the error message.
           
       3.  Full screen, HELP style error messages.  HELP style error messages
           deal mostly with DOS errors and are more informative.  After the
           user exits the HELP screen, JOBS resets itself or in extreme cases
           exits to DOS.
           
       4.  Critical DOS errors are a special type of DOS error, usually
           indicating that something completely failed to work as it was
           supposed to.  Some errors of this type are automatically processed
           by JOBS, ie., Disk not ready or Printer not ready.
           
       Others are not so easy to recognize, and are often of a more serious
       nature.  The critical error codes provided by DOS are occasionally
       accurate, often cryptic or ambiguous, and sometimes meaningless.  When
       it is unclear what the problem is, JOBS will display the message:

            CRITICAL DOS ERROR #n on Drive A: ..Re-start JOBS? (Y/N) <N>

       where n is the error code provided by DOS.  The DOS literature provides
       the following information about these codes.

            Code           Meaning
            ----           ----------------------------------
            3              Unknown command
            4              CRC error in data
            5              Bad drive request structure length
            6              Seek error
            7              Unknown media type
            8              Sector not found
            10             Write fault
            11             Read fault
            12             General failure
            
       In addition to these, we have received reports of other error codes that
       are not documented in the DOS literature.

       Notice that, for  the most part, these messages are reporting serious
       disk errors.  For this reason, JOBS will not access your disks any
       further.  Instead, you are asked to decide what to do next; continue
       with JOBS or exit to DOS.  If you answer <Y>es at the critical error
       prompt, JOBS will reset itself and continue on as if it was being run
       for the first time.  Answer <N>o to exit JOBS and return to DOS.





       (C) Copyright RCT Design, 1987                                 Page - 54



       JOBS-SW 3.10s                                Appendix F - Error messages
       ------------------------------------------------------------------------

       The most common error of this type is General failure (#12) and most
       often occurs when you access a disk that has not been formatted.  In
       fact this is a quick and painless way to find out if a disk has been
       formatted.

       If the error occurred while accessing the drive that JOBS is installed
       on, answer <N>o to this prompt (exit to DOS).  Further use of this
       drive, without determining what the problem is, may be risky.

       Warning messages are suppressed if the screen is turned off by a macro.
       Fatal, HELP style and critical error messages may not be suppressed.
       Error messages cause running macros to be discontinued; warning messages
       do not.














































       (C) Copyright RCT Design, 1987                                 Page - 55



       Order Form                                                    Order Form


                                     RCT  Design
                                     PO Box 1726
                                  Novato, CA  94948
                           (415) 892-2713 or (408) 749-9826
                                           
                                           
              Your name: _________________________________________

           Company name: _________________________________________

                Address: _________________________________________

            City, State: _________________________________________

            ZIP/Country: ______________ Phone: (____) ____________

       MasterCard/VISA # ________________________ Expiration __/__

       
       NOTE:     Printed manuals are normally shipped by UPS Ground, disks only
       by US Mail.  If you are ordering a printed manual, PLEASE use a street
       address, NOT a PO Box.

       
         Quantity Description                       Unit Price  Total Price
        +--------+---------------------------------+----------+-------------+
        |        | JOBS Version SW3.1 Registration |  $29.00  |             |
        |        |   and Disk manual               |          |             |
        +--------+---------------------------------+----------+-------------+
        |        | JOBS SW3.1 Registration and     |  $37.00  |             |
        |        |   Printed manual                |          |             |
        +--------+---------------------------------+----------+-------------+
        |        | JOBS+ Version 3.1 w/ disk manual|  $69.00  |             |
        +--------+---------------------------------+----------+-------------+
        |        | JOBS+ 3.1 with Printed manual   |  $79.00  |             |
        +--------+---------------------------------+----------+-------------+
        |        | JOBS SW3.1 Unregistered         |  $10.00  |             |
        +--------+---------------------------------+----------+-------------+
        |        | Half hour telephone support     |  $25.00  |             |
        +--------+---------------------------------+----------+-------------+
       
                                                   Subtotal:   _____________

                California Residents add 6% State Sales Tax:   _____________

                 Shipping, $2.50 per printed manual ordered:   _____________

                                                  Total Due:   _____________
                                               in US Dollars


                              THANK YOU FOR YOUR ORDER.
       

       Quantity discounts and site licenses are available, call for quote.
       Government and corporate purchase orders accepted.



       Order Form                                                    Order Form



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1093

     Volume in drive A has no label
     Directory of A:\

    ARCE31B  COM      7136   9-16-87   3:12a
    ARCE31B  DOC     11373   9-16-87   3:12a
    FILE1093 TXT      1506   6-20-88  11:12a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   6-07-88   3:36p
    INSTALL  BAT       969   4-04-88  10:00a
    JOBS31B0 ARC      4992   2-03-88   8:52a
    JOBS31B1 ARC    149504   2-02-88   8:19p
    JOBS31B2 ARC    160768   2-02-88   8:43p
            9 file(s)     336826 bytes
                           22528 bytes free
