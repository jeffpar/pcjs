---
layout: page
title: "PC-SIG Diskette Library (Disk #930)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0930/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0930"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POINT & SHOOT HARD DISK MANAGER"

    The POINT & SHOOT Hard Disk Manager addresses two of the most
    important needs of hard disk users -- program execution and file/
    directory management.
    
    POINT & SHOOT includes all of the standard menu, file, and directory
    commands with a split-screen file list and directory tree. The
    program includes DOS access, floppy disk formatting, multiple hard
    drive support, mouse support, file and subdirectory undelete,
    passwords and time logging, text search, and much more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0930.TXT

{% raw %}
```
Disk No:  930                                                           
Disk Title: Point & Shoot Hard Disk Manager                             
PC-SIG Version: S2.01                                                   
                                                                        
Program Title: Point & Shoot Hard Disk Manager                          
Author Version: 2.0                                                     
Author Registration: $35.00                                             
Special Requirements: Hard drive.                                       
                                                                        
The POINT & SHOOT Hard Disk Manager addresses two of the most important 
needs of hard disk users: Program execution and file/directory          
management.                                                             
                                                                        
POINT & SHOOT includes all the standard menu, file, and directory       
commands with a split-screen file list and directory tree.  The program 
includes DOS access, floppy disk formatting, multiple hard drive        
support, mouse support, file and subdirectory undelete, DOS 4.0 support,
passwords and time logging, text search, and much more.                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
-----------------------------------------------------------------------
             POINT & SHOOT 2.0  --  BY AMST (MEMBER ASP)
-----------------------------------------------------------------------
POINT & SHOOT ADDRESSES TWO OF THE MOST IMPORTANT NEEDS OF HARD DISK
COMPUTER USERS; PROGRAM EXECUTION AND FILE/DIRECTORY MANAGEMENT.  POINT
& SHOOT IS NOT THE ONLY PROGRAM OF ITS KIND, BUT ONE QUICK LOOK AT THE
PROGRAM WILL PROVE ITS APPEAL.  REQUIRED KEYSTROKES ARE MINIMIZED WHILE
THE PROGRAM REMAINS FEATURE RICH.  EVEN POWER USERS WILL FIND POINT &
SHOOT TO BE A USEFUL TOOL.

POINT & SHOOT CURRENTLY SUPPORTS THE FOLLOWING FUNCTIONS:

     o  UP TO 30 MENU ENTRIES, EACH OF WHICH MAY CONTAIN A SUBMENU
        OF UP TO 10 ADDITIONAL PROGRAMS EACH FOR A TOTAL OF 300
        USER-DEFINED MENU ENTRIES.

     o  POP-UP CALCULATOR, CALENDAR, DISK STATISTICS, HELP SCREENS, INSTANT
        ACCESS TO THE DOS COMMAND PROMPT, AND FLOPPY DISK FORMATTING.

     o  CONFIGURATION OPTIONS INCLUDE COLORS, AN HOURLY CHIME, AND MOUSE
        SUPPORT.

     o  FILE OPERATIONS INCLUDING:  ATTRIBUTE, BLOCK OPERATIONS ON
        GROUPS OF FILES, COPY, DELETE, EDIT (UP TO 64K), FILTER,
        GLOBAL SEARCH WITH OPTIONAL DELETE, HEX/ASCII EDITOR, LOCATE TEXT,
        MOVE, NEWER FILE, PRINT FILE LISTING & TEXT FILES (INCLUDING DOUBLE
        COLUMN HP LASERJET), RENAME, SORT, AND VIEW.

     o  SORTED DIRECTORY TREE DISPLAY WITH DIRECTORY OPERATIONS
        THAT INCLUDE:  HIDE/UNHIDE, MAKE/DELETE, GOTO, PRINT WITH
        OPTIONAL FILENAMES, AND RENAME.

     o  UNDELETE FILES AND DIRECTORIES

     o  PASSWORD PROTECTION AND USAGE LOGGING

     o  BONUS STAND-ALONE PROGRAMS INCLUDE SCREEN BLANKERS FOR CGA, MDA,
        AND EGA MONITORS.

POINT & SHOOT REQUIRES THE FOLLOWING HARDWARE AND SOFTWARE TO OPERATE
CORRECTLY:

     o  IBM OR 100% COMPATIBLE COMPUTER

     o  320K MINIMUM MEMORY

     o  A HARD DISK

     o  MS-DOS VERSION 2.0 OR GREATER

     o  COLOR/GRAPHICS, MONOCHROME, EGA OR VGA DISPLAY ADAPTOR


THE FILES CONTAINED ON THE DISTRIBUTION DISK ARE:

FILES     TXT   THIS FILE
INSTALL   BAT   HARD DISK INSTALLATION PROGRAM
PAS       EXE   THE POINT & SHOOT PROGRAM
PASAUX    ARC   ARCHIVED DOCUMENTATION & AUXILIARY PROGRAM FILES
READ      ME    LAST MINUTE CHANGES AND INSTALLATION INSTRUCTIONS
UNDO      EXE   PROGRAM TO UNARC THE AUXILIARY FILE DURING INSTALLATION
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║     <<<<  PC-SIG Disk #930  POINT & SHOOT HARD DISK MANAGER   >>>>      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print installation instructions, type:  COPY READ.ME PRN (Enter)    ║
║                                                                         ║
║  To view author's notes, type:  TYPE FILES.TXT (press Enter)            ║
║                                                                         ║
║  After installing program, type:  COPY PASDOC.TXT PRN (press Enter)     ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ASBDOC.TXT

{% raw %}
```
Documentation for ASMT Screen Blanker 1.0
Copyright 1987        All rights reserved
------------------------------------------------------------------

The AMST Screen Blanker blanks the screen of your computer after
5 minutes of no keyboard activity.  There are actually two
programs in the set; ASB.COM, which is used for CGA/MDA monitors,
and ASBE.COM, which is used for EGA type monitors.  Neither program
has been tested on VGA monitors or on all types of CGA, MDA, or
EGA monitors.

To use either program, type:

           ASB
       or  ASBE

from the DOS prompt, or include the command in a batch file like
AUTOEXEC.BAT.  The program will display an installation message.
After the screen blanks, any keypress will restore the screen.
However, the key you press will be passed on to the currently
running program, so it is suggested to use a non-action key, like
[alt] to restore the screen.

After the initial installation, you may temporarily disable the
program by entering:

           ASB -
        or ASBE -

Entering the original ASB or ASBE command again will re-enable the
screen blanker.

Neither program supports graphics modes, but you may disable the
programs before entering graphics mode programs.  Also, some word
processing programs rudely capture keyboard interrupts, and are
not compatible with these screen blankers, so you should disable
the blanker before entering these programs.


Applied Micro Systems Technology
Box 1596, Welch Avenue Station
Ames, IA  50010
```
{% endraw %}

## CHANGES.TXT

{% raw %}
```
Point & Shoot Revision History
------------------------------------------------------------------------

Version 1.1   (10/87)
----------------------

Completely rewrote program in Turbo Pascal 4.0 (made 1 .EXE)

Added Check Snow parameter in program Setup

Added ORIG: and TARG: display on graphic tree

Added [right-arrow] to File Block command to move directly to Tree

Added [ctrl-PgDn] command to quickly tag groups of files in File Block

Fixed bug in File Block Move when duplicates were encountered

Added } symbol to force prompting for parameters in menu entry definitions

Fixed Goto floppy drive bug (cannot allow but old versions tried anyway)

Added File Xecute command to run small programs

Changed Newdate command to Newfile.  Date changes are now in Attributes

Added standard and double column laser text file print to File commands

Included screen blanking programs with Point & Shoot package


Version 1.2    (12/87)
-----------------------

Added Alt-D command for DOS access

Fixed background color bug for some color monitors

Removed Check Snow parameter function in program setup (now automatic)

Added automatic drive scan for systems with more than one fixed disk drive

Fixed bug in menu setup (was incorrectly adding extra duplicate commands)

Added % completion status to File View command

Changed format of color selection in Setup to show colors

Changed Origin directory setting so that [Cr] always rereads files

Fixed Target Space available display in File commands to show new target
space before copy operations begin.  Previously, if you switched disks
in the target drive, the space available shown was incorrect.

Added a comprehensive text file editor called "PASE.EXE".  This editor uses
WordStar type commands and can handle files up to 64K.  The new text editor
will automatically run from Point & Shoot and can also be used as a stand-
alone text editor.  The documentation for this editor is contained in a
separate file called "PASEDOC.TXT" contained on the distribution disk.

Added a backup parameter to the Setup screen to designate whether the text
editor should make backups (.BAK's).


Version 1.3    (5/88)
----------------------

Rewrote user interface and added comprehensive error checking procedures

Added mouse support to the program

Added external interface to Point & Shoot Backup/Restore program

Changed Newfile command to Newcopy which will copy newest files only

Added time display to file list (date sort now sorts on date and time)

Revised program setup to allow setting of background colors

Printed (complete) documentation is now available to all registered users

Program defaults are now stored directly in program .EXE file

Added Diskformat command to format floppy disks

Moved all menu management commands to a separate menu

Added sort order status display to file display screen

Added "/M" parameter to force correct display on some incompatible machines



Version 2.0    (1/89)
----------------------

Added TREE UNDELETE command to recover deleted files & directories

Moved FILE OPTIONS to SETUP and removed Duplicate file check (now always on)

Changed drive selection in SETUP to designate each drive used instead of
the last drive used and modified program so it may be run on any hard drive
(previously had to be lowest lettered hard drive)

Added USAGE command which incorporates a comprehensive set of Usage Log
and Protection features to the Point & Shoot Program.  The addition of the
password protection mechanism has changed the format of the user-defined
menu file.  Users of versions prior to version 2.0 MUST use the menu
function UPGRADE found in the Menu Commands.

Added memory statistics and other information to the Alt-S statistics screen

Included the text file editor directly into the program for quicker access.
Text editor now also automatically uses the memory that is available to
allow more flexibility on systems with limited memory (max still 64K).
Editor has additional command to examine the current amount of editing
memory available.  Added option in SETUP to allow user to specify the text
editor to use if they wish to use an editor other than the built-in P&S
editor.  F4 New File command in editor now prompts for a new file name.

Redesigned the Alt-D drop to DOS command to free as much memory as possible
before attempting to execute a DOS command to allow larger programs/commands
to be executed from this part of the program

Enhanced the printed documentation available to registered users.  Now
includes user guide and reference sections.

Changed FILE ATTRIBUTE command to FILE ATTR to allow more space for commands
on FILE menu

Enhanced the FILE VIEW command to read large files quicker and to support
correct on-screen spacing of tabs in text files

Added TREE A&B command to show directories on floppy disks

Added marker in file list to indicate other than standard file attribute

Added option to FILE GLOBAL command to gather all files on hard disk(s) in
one sorted/filtered list then copy or delete individual files

Added file delete confirmation to original FILE GLOBAL command

Improved the DISKFORMAT command to correct problems with some computers

Added FILE WINDOW command to show dual file list (origin and target files)

Added Alt-L pop-up calendar command to show on-screen perpetual calendar

Added [Esc] feature to FILE BLOCK commands to interrupt long activities

Added ******** mask to hidden subdirectories.  If protection is on, then
users cannot make a hidden subdirectory the Origin or Target.  Users can
also be restricted to a single subdirectory in Tree & File operations.

Added inverse date (newest first) sort order option in File commands.  Sort
may now be aborted with [Esc] if the file sorting process is too long.

Added FILE LOCATE command to find files with embedded text strings

Added INDEX database to keep track of files (or anything else)

Changed FILE NEWCOPY command to FILE NEWER

Added additional error checking to TREE COLLECT to ensure that the program
does not halt if too many diretories are found to display on the screen.
The limit is now 255 total directories on the tree.  If more, the
program will show as many as it can, where previously too many directories
would halt the program.
```
{% endraw %}

## PASDOC.TXT

{% raw %}
```




                          POINT & SHOOT HARD DISK MANAGER

                                    VERSION 2.0




                          Copyright (C) 1987, 1988, 1989
                                All Rights Reserved

                         Applied Micro Systems Technology
                                  Kurt H. Diesch
                  Member, Association of Shareware Professionals

                            Revised:   January 1, 1989



       Point  &  Shoot  Hard Disk Manager is a hard disk  file  and  program
       management  tool  designed  for  IBM  Personal  Computers  and   100%
       compatibles.    Applied   Micro  Systems  Technology   reserves   the 
       COPYRIGHT to this  program and all  related materials.   The user  is
       granted  a   non-exclusive  license to  use  the   program   and   is
       encouraged  to  pay  for the program if it is  found  to  be  useful. 
       Payment  of the  $45 registration fee will entitle the user  to  full 
       registration   including  printed  documentation  and  user  support. 
       Government  and  business entities may not use  the  program  without
       paying  the full registration fee. Please register your program  with
       the  form  included  at  the end of  the  documentation  or  use  the
       registration  form print function [alt-P] in the program.   REMEMBER:
       Shareware is not free!  Send payments to:


                         Applied Micro Systems Technology
                             P.O. Box 1596, Welch Ave.
                                 Ames, Iowa  50010


       The  user is also granted permission to make unlimited copies of  the
       program  and to distribute those copies as long as no fee is  charged
       for  the  program.   A duplication charge not to  exceed  $5  may  be
       collected.

       SHAREWARE DISK VENDORS ARE REQUIRED TO OBTAIN WRITTEN PERMISSION FROM
       AMST BEFORE DISTRIBUTING THIS PROGRAM.  REQUESTS MUST INCLUDE A  COPY
       OF THE VENDOR'S CURRENT CATALOG ALONG WITH THE VENDOR PERMISSION FORM
       FOUND AT THE END OF THIS DOCUMENTATION.

       Applied   Micro   Systems  Technology  specifically   disclaims   all
       warranties,  expressed  or implied,  including but  not  limited  to,
       implied warranties of merchantability and fitness for any  particular
       purpose.   In  no  event shall Applied Micro  Systems  Technology  be
       liable  for  any  loss  of profit or  any  other  commercial  damage,
       including but not limited to special,  incidental,  consequential  or
       other damages.


                  MEMBER - ASSOCIATION OF SHAREWARE PROFESSIONALS


       The  author  of  this program is a member of ASP and  has  agreed  to
       comply with its standards:

       Programming standards:
          -  The program meets ASP's definition of Shareware.
          -  The program has been thoroughly tested by the author and
             should not be harmful to other files or hardware if used
             properly (although ASP cannot warrant this; therefore, the
             user should take normal precautions in trying new
             software).

       Documentation standards:
          -  Sufficient documentation is provided to allow the average
             user to try all major functions of the program.
          -  The program author has explained the Shareware concept in
             a professional and positive manner.

       Support standards:
          -  The program author will respond as described in the
             documentation to people who send registration payments. 
             At a minimum, the author will send an acknowledgement of
             payment.
          -  The author will respond to written bug reports from
             registered users when the user provides a self-addressed,
             stamped envelope (some authors will respond by phone, but
             this is not an ASP requirement).
          -  Incompatibilities with other software or hardware, major
             or unusual program limitations, or known problems are
             noted in the documentation that comes with the shareware
             version of the program.

       General:
          -  The author keeps his/her membership in ASP current.
          -  The author recognizes that any user may appeal to ASP for
             any unresolved dispute that arises.


       If you feel that the author has not complied with these standards  in
       some  manner  or  if you register the program  with  the  author  and
       subsequently  have  any  disputes with the  author  which  cannot  be
       resolved, please write the ASP at:


                      Association of Shareware Professionals
                                   P.O. Box 5786
                                Bellevue, WA  98005


       While  ASP  cannot warrant programs nor the actions of  members,  ASP
       will  do what it can to assure that all authors who claim  membership
       comply  with  ASP standards.   These standards are the  assurance  of
       quality  and  support that you will get when you  register  Shareware
       produced by ASP members.


                                     SHAREWARE


       To  promote  better understanding of the shareware concept,  ASP  has
       developed the following official definition of shareware:

       Shareware  distribution gives users a chance to try  software  before
       buying it.  If you try a Shareware program and continue using it, you
       are  expected to register.  Individual programs differ on details  --
       some  request registration while others require it,  some  specify  a
       maximum trial period.   With registration, you get anything from  the
       simple  right  to continue using the software to an  updated  program
       with printed manual.

       Copyright  laws apply to both Shareware and commercial software,  and
       the  copyright  holder  retains  all  rights,  with  a  few  specific
       exceptions  as  stated  below.  Shareware  authors  are  accomplished
       programmers,  just like commercial authors, and the programs  are  of
       comparable quality.  (In both cases,  there are good programs and bad
       ones!)   The main difference is in the method of  distribution.   The
       author  specifically  grants  the right to copy  and  distribute  the
       software,  either  to  all and sundry or to a  specific  group.   For
       example,  some authors require written permission before a commercial
       disk vendor may copy their Shareware.

       Shareware  is  a distribution method,  not a type  of  software.  You
       should  find software that suits your needs and  pocketbook,  whether
       it's  commercial or Shareware.   The Shareware system  makes  fitting
       your needs easier,  because you can try before you buy.  And  because
       the overhead is low, prices are low also.  Shareware has the ultimate
       money-back guarantee -- if you don't use the product,  you don't  pay
       for it.


                             TABLE OF CONTENTS
                             -----------------

       QUICK START GUIDE   ....................................    1
          Installation   ......................................    1
          Program Startup   ...................................    1
          Program Setup   .....................................    2
          Multiple Hard Disk Drive Installation   .............    2
          Alternate Directory Installation   ..................    2
          Upgrading from a Previous Version   .................    2
          Printing the Documentation   ........................    3
          In Case of Difficulty   .............................    3

       USER GUIDE   ...........................................    4
          Program Description and Requirements   ..............    4
          General Program Operation   .........................    5
          Data Entry Screens   ................................    7
          User Defined Menus   ................................    8
          File & Directory Maintenance   ......................   11
          Hard Disk Organization Tips   .......................   14
          Database Commands   .................................   15
          Database Backups   ..................................   17
          Database Errors: The Fixup Command   ................   17
          Protection & Usage Logging System   .................   18
          Screen Blanker Operation   ..........................   20
          Text Editor Operation   .............................   21
          Using a Mouse   .....................................   29
          Network Installation   ..............................   31

       MAIN MENU COMMANDS   ...................................   32
          Backup   ............................................   32
          Diskformat   ........................................   32
          File   ..............................................   33
          Index   .............................................   33
          Menu   ..............................................   33
          Setup   .............................................   33
          Tree   ..............................................   33
          Usage   .............................................   33

       FILE COMMANDS   ........................................   34
          Attr   .............................................    34
          Block   .............................................   35
          Copy   ..............................................   35
          Delete   ............................................   35
          Edit    .............................................   35
          Filter   ............................................   35
          Global   ............................................   36
          Hex   ...............................................   36
          Locate   ............................................   37
          Move   ..............................................   37
          Newer   .............................................   37
          Print   .............................................   37
          Rename   ............................................   37
          Sort   ..............................................   37
          Tree   ..............................................   37
          View   ..............................................   38
          Window   ............................................   38
          Xecute   ............................................   38


       INDEX DATABASE   .......................................   39

       MENU COMMANDS   ........................................   40
          Add   ...............................................   40
          Change   ............................................   41
          Delete   ............................................   41
          Exchange   ..........................................   41
          Move   ..............................................   41
          Upgrade   ...........................................   41

       SETUP   ................................................   42

       TREE COMMANDS   ........................................   43
          A&b   ...............................................   43
          Collect   ...........................................   43
          Delete   ............................................   43
          File   ..............................................   43
          Goto   ..............................................   44
          Hide   ..............................................   44
          Make   ..............................................   44
          Origin   ............................................   44
          Print   .............................................   44
          Rename   ............................................   44
          Sort   ..............................................   44
          Target   ............................................   45
          Undelete   ..........................................   45

       USAGE COMMANDS   .......................................   46
          Change Password   ...................................   46
          Fixup Databases   ...................................   47
          Time Log Database   .................................   47
          User Database   .....................................   48

       VENDOR PERMISSION FORM & GUIDELINES   ..................   49

       REGISTRATION FORM   ....................................   51



                                 QUICK START GUIDE
                                 -----------------

       NOTE:   This quick start guide should not replace a complete  reading
       of  the documentation.   This program contains many  useful  features
       that are not discussed in the quick start guide.


       INSTALLATION


       To automatically install this program on a hard disk:

            o  Place the program disk in floppy drive A:

            o  From the ROOT DIRECTORY of the hard disk, type:

                      A:INSTALL

            o  At a minimum, the AUTOEXEC.BAT file must contain the
               following lines in the order shown:

                      PATH \P&S      (or desired directory)
                      PS             (this MUST be the last line)

            o  The CONFIG.SYS file must contain the following lines:

                      BUFFERS = 20
                      FILES = 20

            o  Reboot the computer using [Ctrl-Alt-Del].  The program
               should run.  If any problems occur, perform the
               installation again, consult the remainder of the
               documentation, or contact AMST for assistance.



       PROGRAM STARTUP


       This  program MUST be started with the supplied batch  file,  PS.BAT. 
       Correct  operation  of  the menu portion of the  program  depends  on
       running  the program from this batch file.   If this file  cannot  be
       found,  it should be created in the \P&S directory and should consist
       of the following lines:

                      ECHO OFF
                      C:
                      CD C:\P&S      (or desired disk and directory)
                      PAS
                      PASCPROG

       If you are at the DOS prompt, the program must be restarted from  DOS
       by typing PS (not PAS).  If the program has been correctly installed,
       the main program screen should appear.

                                       - 1 -


       PROGRAM SETUP


       The first time this program is executed,  the user should immediately
       use  the SETUP command to select program configuration options.   The
       most important option is to identify the disk drives used.  To select
       the drives,  press the [S] key from the main menu to select the SETUP
       command.   When the Setup Screen appears,  use the [Enter]  or  [down
       arrow]  key to move the flashing "*"  to the first DISK  DRIVE  USAGE
       field.   Type "Y" or "N" to identify all available drives (floppy and
       hard disk).   Finally,  press function key [F10] to save the  current
       setup configuration.



       MULTIPLE HARD DISK DRIVE INSTALLATION


       If this program is installed on a system with more than one hard disk
       drive,  the  PS.BAT  file  should  be  modified  to  include  a  line
       designating the drive letter that contains the program.  For example,
       if  the  computer  has  both drives C:  and D:  and  the  program  is
       installed on drive C:, then the PS.BAT file should appear as follows:


                    ECHO OFF
                    C:         (or desired disk)
                    CD C:\P&S  (or desired disk and directory)
                    PAS
                    PASCPROG



       ALTERNATE DIRECTORY INSTALLATION


       Automatic  installation places the program and associated files in  a
       predefined  subdirectory.   This program is capable of  running  from
       alternative  drives  and/or  directories,  but the  program  must  be
       installed manually.  To install the program in a directory other than
       the default, manually create the desired directory from DOS using the
       MD command,  copy all files from the program disk to that  directory,
       and  replace all references to \P&S in the INSTALLATION section  with
       the new directory name.



       UPGRADING FROM A PREVIOUS VERSION


       Users  upgrading  from a version of the program prior to  2.0  should
       immediately  use  the MENU UPGRADE command to  convert  pre-2.0  user
       menus  to  the  new  menu  data  file  format.   The  command  issues
       appropriate warnings and prompts.


                                       - 2 -


       PRINTING THE DOCUMENTATION


       The  simplest method to print this documentation file is to  use  the
       FILE PRINT command contained in this program.   To use this  command,
       press [T] to select the TREE command from the main menu.   Next,  use
       the [up/down arrow] keys to hilite the \P&S directory on the  graphic
       directory  tree and press [Enter] to select \P&S as the  origin.  Use
       the  [left arrow] key to move to the file list and use  the  [up/down
       arrow]  keys  to hilite PASDOC.TXT.   Press [P] to select  the  PRINT
       command and then press [P] to Print Text File or [H] for HP  Laserjet
       print, whichever is appropriate.



       IN CASE OF DIFFICULTY


       This  program  has been carefully tested to ensure  that  users  have
       minimum  difficulty.   The science of computer programming,  however,
       dictates  that no program is ever entirely bug free.    If a  problem
       occurs in the operation of the program, support may be necessary.

       In the event of a problem,  the first step is to carefully review the
       associated  section  of  the documentation.   Many  apparent  program
       problems  are  actually incorrect usage of the program.   The  second
       step is to ask a colleague or friend about the problem.   If  neither
       of  these steps proves sufficient, registered users may contact  AMST
       for support at:

                         Applied Micro Systems Technology
                           Box 1596, Welch Ave. Station
                                 Ames, Iowa  50010
                                  (515) 292-0426


       When writing or calling for support, you must be the registered owner
       of the program.   If phoning for support,  be prepared with a written
       list of details.  Whether writing or phoning, the following list will
       serve as a guideline for information to collect:

            o  Program name, version, and serial number

            o  Equipment used including make and model of computer,
               type of monitor and other peripherals, amount of memory,
               and other hardware details

            o  DOS version and manufacturer

            o  Other software used, especially Terminate and Stay
               Resident Programs (TSR's)

            o  Complete detail of the problem including error messages,
               specific procedure followed when the error occurs, and
               any other relevant information

                                       - 3 -


                                    USER GUIDE
                                    ----------



       PROGRAM DESCRIPTION AND REQUIREMENTS


       The following functions are currently supported by this program:

            o  Run up to 300 programs from user-defined menus.  Point &
               Shoot is not memory resident.  Programs will have ALL
               available memory.  Menu entries may consist of multiple
               commands with optional parameter entry.

            o  Pop-up calculator, calendar, system statistics, help
               screens, instant DOS access with 10 command recall, and
               floppy disk formatting (all sizes).

            o  User-defined program colors, mouse support, automatic
               screen blanking, support for multiple hard drives, and
               optional user-selected text editor.

            o  Built-in interfaces to Point & Shoot Backup/Restore for
               hard disk backups.

            o  Password protection and usage logging system.

            o  File manipulation commands including:
                 o  Change the attributes of any file
                 o  Copy, delete, move, and rename files
                 o  Update file lists with the Newer command
                 o  Edit files in text (up to 64K), Hex, and Ascii
                    modes with built-in editor or name your own editor
                 o  Find files with the Filter and Global search
                    commands or find text in files with Locate command
                 o  Print text files and file lists
                 o  Sort by date, extension, inverse date, name or size
                 o  Show two file lists with Window command
                 o  View any file with a scrollable screen

            o  Sorted directory tree for directory manipulation:
                 o  Hide and unhide directories
                 o  Make, delete, and rename directories
                 o  Jump directly to a directory with the Goto command
                 o  Print the directory tree, optionally with filenames
                 o  Show floppy subdirectories
                 o  Undelete files and directories, including DOS 4.0


       This program requires the following hardware and software to operate
       correctly:

            o  IBM or 100% compatible computer with 320K minimum memory
            o  A hard disk with MS-DOS version 2.0 or greater

                                       - 4 -


       To run this program, several files must be available in the directory
       in which the program was installed.  Following is a list of the
       necessary program and data files.  Files marked with a "*" are
       created by the program as required.


            PAS.EXE        The Point & Shoot Hard Disk Manager program
            PAS.OVR        Program overlay file
            PASCPROG.BAT*  Batch file for menu-defined program execution
            PAS.HLP        On-line help file text
            PASMENU2.DAT*  User-defined menu configuration data
            PASTREE2.DAT*  File to store directory tree structure
            PASINDEX.???   Database files used with Index Database
            PASTLOG.???    Database files used with Timelog Database
            PASUSERS.???   Database files used with User Database
            PS.BAT         Batch file to start Point & Shoot


       In  addition,  several other files are included on the program  disk. 
       These  files are installed by the automatic installation program  but
       may be deleted if they are not used.


            ASB.COM       Screen blanker for CGA and MDA monitors
            ASBE.COM      Screen blanker for EGA monitors
            ASBDOC.TXT    Screen blanker documentation
            CHANGES.TXT   Revision history of the program
            FILES.TXT     A description of the diskette files
            INSTALL.BAT   Automatic installation program
            PASDOC.TXT    Documentation text file
            READ.ME       Last minute changes and important information



       GENERAL PROGRAM OPERATION


       Point  & Shoot is executed automatically when the computer is  booted
       through  the AUTOEXEC.BAT file or by typing PS from the  DOS  prompt. 
       The  main program screen appears first.  The top line of  the  screen
       displays the name and version of the program,  a copyright notice and
       the current date and time.  The center portion of the screen displays
       the  user-defined  menu  title and user-defined  menu  entries.   The
       bottom  section  of  the screen displays the program  menus  with  an
       explanatory  line  of text describing the currently  hilited  program
       command.


       The [Esc] Key

       An  important key to remember is the [Esc] key.   At virtually  every
       location  in  the program,  the [Esc] key serves to "back out"  of  a
       command.   At no time will the [Esc] key cause any damage to files or
       the  program.   Consider the [Esc] key to be a safety net to be  used
       freely.

                                       - 5 -



       [Alt] Commands

       There are several commands available at any time during the operation
       of the program using the [Alt] key.  To execute these commands,  hold
       the  [Alt]  key  and  press the associated  letter  of  the  commands
       described  below.   The command will then run.    To  return  to  the
       program at the previous state,  press the [Esc] key.   The  following
       [Alt] commands are available:

            [Alt-C]  Activates an on-screen calculator which operates
                     like a simple pocket calculator.

            [Alt-D]  Provides quick access to the DOS command line. 
                     The current directory will be whichever directory
                     was last in use by the FILE commands.  Any DOS
                     command may be entered from the DOS prompt if
                     sufficient memory is available.  The [F1-F10]
                     function keys recall the last 10 commands entered.

            [Alt-H]  Displays program help screens.  The first screen
                     to appear is a quick index.  A specific help topic
                     may be selected from the index by pressing the
                     associated letter.  The [up/down arrow] keys,
                     [PgUp], [PgDn], and [End] keys allow scrolling
                     within the help file.  The help index may be
                     recalled at any time by pressing the [Home] key.

            [Alt-L]  Displays a perpetual calendar.  The [left/right
                     arrow] keys change the month and the [up/down
                     arrow] keys change the year.

            [Alt-P]  Displays a detailed copyright notice for the
                     program including the serial number and prints a
                     registration form if desired.

            [Alt-S]  Displays the current space statistics of disk
                     drives, memory statistics, and other program
                     option settings.  To examine the disk space
                     statistics for alternate drives, press the letter
                     of the desired drive.



       Program Menus

       Most  of  the  program functions are executed  through  the  list  of
       commands  shown  in the bottom area of the screen.   The  [Space]  or 
       [BackSpace]  keys  may be used to hilite the  desired  command.   The
       one-line  description of the command shown on the bottom line of  the
       screen will change appropriately.  To execute any of the program menu
       functions,  press  the  first letter of  the  command.   The  command
       corresponding  to the selected letter will be  immediately  executed. 
       Alternately, hilite the desired command and press [Enter].


                                       - 6 -


       Some  of the menus shown on the bottom of the screen will  not  allow
       movement of a hilite.   These command lists are distinguished by  the
       absence  of a hilite on any one command.   To select a  command  from
       these types of menus, press the associated letter or function key.

       The selection of some commands will display another command list.   A
       previous command list may be selected by pressing the [Esc] key.

       Occasionally,  you will be presented with a pop-up vertical  list  of
       choices for some program options.   Select from these lists with  the
       [up/down  arrow] keys and then [Enter] key.  If the first letters  of
       the  options are shown in bold characters,  the corresponding  letter
       may be pressed to make a selection.  The [Esc] key to will abort  the
       selection process.  


       Quitting the Program

       To quit the program and return to the operating system,  press  [Esc]
       or  select  QUIT  from the Main Menu command list.   To  restart  the
       program from DOS,  type PS.  NOTE: if the protection or usage logging
       features  are  enabled,  the user may be denied  access  to  the  DOS
       prompt.  See PROTECTION & USAGE LOGGING SYSTEM for details.



       DATA ENTRY SCREENS


       At  many  points in the program information will be  entered  on  the
       screen.  A cursor (and on multiple field screens a flashing "*") will
       indicate where information is to be entered.  The following  commands
       are available for data entry:

             [left/right arrow]:  Moves the cursor within the current
                     field.  If the cursor is at the first position
                     within a field, [left arrow] selects the previous
                     field.  If the cursor is at the last position,
                     [right arrow] selects the next field.

             [^left/^right]:  Moves the cursor to the first position or
                     to the last character of the field.

             [up/down arrow]:  Selects the previous or next data field.

             [Enter]:  Same as right or down arrow for next field.

             [F1/F2]:  Enters date or time if appropriate.

             [F8]:   Blanks the current data field.

             [Esc]:  Aborts changes made to the data screen.

             [F10]:  Accepts changes made to the data screen and
                     completes enter/update action.

                                       - 7 -


       USER-DEFINED MENUS


       The  MENU  command  on  the  main menu  is  used  to  manipulate  the
       user-defined  program  menus.   User menus consist  of  menu  titles,
       commands  to execute,  the directory path from which to  execute  the
       command,  and  an optional password.  The protection system  must  be
       enabled  for passwords to function.  See PROTECTION &  USAGE  LOGGING
       SYSTEM.   The menu entries are created and modified with the ADD  and
       CHANGE  commands.   Up to 30 menu entries may be  defined.   Each  of
       these  menu entries may contain up to 10 submenu entries for a  total
       of 300 programs controlled through user-defined menus.

       To demonstrate the use of the user-defined menu system, the following
       procedure  will  install the DOS DIR command in a  user-defined  menu
       entry:


            o  Press [M] to select the MENU commands from the main
               menu.  The MENU command list will appear.

            o  Select ADD to add a new menu entry.  A hilite bar will
               appear in the center portion of the screen.

            o  Use the [up/down/left/right arrow] keys to select a
               position on the screen for the new menu entry.  When the
               desired position is hilited, press [Enter].  The MENU
               DETAIL screen will appear.

            o  Type "Directory Test" in the MENU ENTRY TITLE field and
               press [Enter].

            o  Type "DIR | PAUSE" in the COMMAND TO EXECUTE field and
               press [F10] to accept the menu entry.  The | character
               is used to combine commands.  The main screen containing
               the new menu entry should appear.

            o  Press [Esc] once to return to the main program menu. 
               The new menu entry is now installed and is ready to
               test.  Use the arrow keys to select the new menu entry
               and press [Enter].  The DIR command should run (the
               PAUSE command was included to stop the listing before
               returning).  If the command did not work correctly, make
               sure that the program was installed correctly.  Refer to
               INSTALLATION in the QUICK START GUIDE.


       Note that the directory shown was for the root directory of the  hard
       disk  because that is where the DIR command was  executed.   Commands
       are normally executed from many places on a hard disk and there is an
       easy  method  to  accommodate  this  requirement.    The  test   menu
       previously  entered will now be modified to execute the  DIR  command
       from another directory:



                                       - 8 -



            o  Press [M] to select the MENU commands and then press [C]
               to select the CHANGE command.

            o  Use the arrow keys to hilite the "Directory Test" entry
               if it is not already hilited and then press [Enter]. 
               The MENU DETAIL screen should appear.

            o  Note that the APPLICATION PATH field at the bottom of
               the screen is blank.  If no path (directory) is given
               for a menu entry, the program will assume that the root
               directory of the hard disk is the intended path.  Press
               [F7] to use the graphic directory tree to select a path
               for the DIR command.  For this example, select the \P&S
               directory when the graphic tree appears by using the
               arrow keys and [Enter].  Note that the APPLICATION PATH
               now shows C:\P&S.

            o  Press [F10] to accept the changes, quit back to the main
               menu, and test the new DIR command.  This time, the
               directory listing should be from the \P&S directory.  If
               this does not work, reread this section.


       As a final example,  the test menu entry will be changed to include a
       submenu of two commands under one menu entry:


            o  Press [M] to select the MENU commands and then press [C]
               to select the CHANGE command.

            o  Use the arrow keys to hilite the "Directory Test" entry
               if it is not already hilited and then press [Enter]. 
               The MENU DETAIL screen should appear.

            o  Change the MENU ENTRY TITLE field to "DOS Commands" and
               press [Enter] to move to the COMMAND TO EXECUTE field. 
               Press [F8] to clear the COMMAND TO EXECUTE field.

            o  Press [Enter] once more to move to the first SUBMENU
               ENTRY TITLE field.  In this field, type "Directory Test"
               followed by [Enter].  Type "DIR | PAUSE" in the COMMAND
               TO EXECUTE field followed by [Enter].

            o  In the second SUBMENU ENTRY TITLE field type "Wide
               Directory" followed by [Enter].  Type "DIR /W | PAUSE"
               in the COMMAND TO EXECUTE field followed by [F10] to
               accept the changes.

            o  Finally, return to the main menu and test the menu
               entry.  Notice the appearance of the submenu!  Again, if
               the new menu entry does not work as expected, review
               this section again.



                                       - 9 -



       The  user-defined menus do not do anything that cannot be  done  from
       the DOS prompt.  On the other hand, ANY programs that can be executed
       from the DOS prompt can be executed from the user-defined menus using
       the procedure shown in the examples above.   Even batch files can  be
       executed if the last line is PS.

       The  important point to remember is that the COMMAND TO  EXECUTE  and
       the  APPLICATION  PATH fields in the user-defined menus  are  telling
       Point  & Shoot the same information that is normally entered  on  the
       DOS  command  line.   With Point & Shoot,  this information  is  only
       entered once and is used repeatedly, but Point & Shoot needs the same
       information that DOS needs when running a program.

       If  problems  are encountered when attempting to  run  programs  from
       user-defined menus,  consider how the program would be run from  DOS. 
       The  PATH command normally found in the AUTOEXEC.BAT file will  still
       be  required along with other special commands that may be  necessary
       for programs to operate correctly.

       Programs that run on MS-DOS computers are usually one of four  types:
       .COM,  .EXE, .BAT or BASIC files.  Any of these types of programs can
       be executed from the Point & Shoot user-defined menus.   If the  file
       ends  with  ".COM"  or ".EXE",  select this file as  the  command  to
       execute in MENU commands.   ".BAT" files may also be executed as long
       as the last line is "PS" in these files.

       To  execute  BASIC programs from the user-defined  menus,  the  BASIC
       command  interpreter  (usually  BASIC.EXE) must be  copied  into  the
       appropriate subdirectory.  When selecting the command to execute, use
       the following format:


                              BASIC <filename>


       As  a final exercise,  try installing your favorite  word  processor,
       spreadsheet, and/or database program in user-defined menu entries.

       In general,  treat the user-defined menus as an extension of the  DOS
       command line, with the same power and limitations.  Refer to the MENU
       COMMANDS section of the documentation for further details on the  use
       of user-defined menus.













                                      - 10 -


       FILE & DIRECTORY MAINTENANCE


       This  section  of the documentation will provide file  and  directory
       manipulation  practice.   For a complete description of the FILE  and
       TREE commands, refer to the appropriate section in the documentation.

       Subdirectories are separate areas on hard disks and floppy disks that
       are used to store files.   The directory structure of a hard disk  is
       often referred to as a "tree" because the total structure resembles a
       tree,  with the "root" directory forming the base for the rest of the
       directories.  Following is a graphic example of a hard disk directory
       tree:

                       C:\
                         |__P&S
                         |__DOS
                         |__WORDPROC
                         |    |_DOCS
                         |__GAMES


       The  file and tree commands in this program provide  a  comprehensive
       set  of functions for file and subdirectory manipulation.   Selection
       of  the  FILE  or TREE command from the main  menu  produces  a  dual
       display with a file list and a graphic directory tree.

       The FILE and TREE commands work in concert.   The file list shown  is
       always  for  the  directory (or floppy disk) marked  on  the  graphic
       directory tree with an "O" denoting Origin.  In addition, the current
       Origin and Target paths will be shown (abbreviated) above the graphic
       directory tree display.

       File commands generally operate on the currently hilited file.   Some
       commands  like  COPY  will also use the directory  (or  floppy  disk)
       marked  with a "T"  for Target.  Switching between the FILE and  TREE
       sides of the screen is accomplished with the [right/left arrow] keys. 
       Additional  commands available with FILE and TREE that are not  shown
       on the menu are:

             [Enter]:  Tags/untags the currently hilited file for use
                     with the BLOCK command, or if on the tree side of
                     the screen, selects the currently hilited
                     subdirectory as the Origin.

             [+ or -]:  Tags/untags all files for BLOCK commands.

             [^PgDn]:  Tags the current file and moves hilite bar down.

             [up/down arrow], [PgUp], [PgDn], [Home], [End]:  Moves the
                     hilite bar through the file list or tree.

             [Tab]:  Moves between Origin and Target file lists (see
                     FILE WINDOW)


                                      - 11 -



       Point & Shoot is capable of reading up to 255 directory names, and as
       many  files  within  a directory as memory  permits.   Files  may  be 
       sorted  by  name,  extension  (the  letters  after  the  "."  in  the
       filename),  date or inverse date,  or size.   The directory  tree  is
       automatically sorted by name.

       Point & Shoot can copy, move, rename, edit,  and perform a variety of
       other functions on files.  Point & Shoot can create, delete,  rename,
       and  otherwise  manipulate  directories.   Point  &  Shoot  can  also
       undelete  files and directories that may accidently be deleted.   The
       following examples illustrate the basic FILE and TREE commands.

       First, create a new directory to serve as a work directory:

            o  From the main menu, press [T] to select TREE commands. 
               If the directory structure has not been previously read,
               a short delay will occur while the subdirectories are
               scanned.  A graphic picture of the directory will then
               appear on the right side of the screen with a list of
               files on the left side.

            o  Use the [up/down arrow] keys to hilite the \P&S
               directory, then press [Enter] to select \P&S as the
               ORIGIN.  An "O" will appear to the left of the \P&S
               directory and the file list will show some of the files
               from that directory.

            o  Press [M] to select the MAKE command.  A prompt box will
               appear on the left side of the screen asking for a name
               for the new directory.  Type "TEMP" in the space
               provided and then press [Enter].  The new "TEMP"
               directory will appear immediately below the \P&S
               directory on the tree.

       The  \TEMP directory will be used during the following examples as  a
       work  space.   The  next step is to copy some files  into  the  \TEMP
       directory.

            o  Use the arrow keys to move the hilite bar to the \TEMP
               directory and the press [T] to select \TEMP as the
               Target directory.  The Target is where files will be
               moved or copied to during file operations.

            o  Press the [left arrow] key to move to the file list side
               of the screen.  Alternately, the FILE command from the
               TREE menu could have been selected.  A hilite bar should
               appear over the first file in the \P&S directory,
               assuming that the \P&S directory is still the Origin. 
               If it is not, then go back to the TREE commands and
               select \P&S as the Origin.

       Note at this point that the current Origin and Target are shown above
       the  graphic  tree.   Use the indicators to double check  Origin  and
       Target settings during file operations!

                                      - 12 -


            o  Use the arrow keys to hilite the file called "PS.BAT." 
               When this file is hilited, and after double-checking
               that the Target directory is \TEMP, press [C] to COPY
               the file.

            o  Press the [right arrow] key to move to the tree, then
               select the \TEMP directory as the Origin by hiliting it
               and pressing [Enter].  The "PS.BAT" file should appear
               on the file list.

       The next example shows how a group of files can be quickly copied.

            o  Use the commands discussed previously to select the
               \TEMP directory as the Target and the \P&S directory as
               the Origin.

            o  Move to the file list and press [B] to select BLOCK
               commands.  A new menu will appear at the bottom of the
               screen.  In the BLOCK menu, files may be individually
               tagged and untagged.  Tagged files are marked with an
               asterisk "*" to the left of the filename.

            o  Press [T] to tag all the files in the list, then use the
               arrow keys and the [Enter] key to untag "PAS.EXE" and
               "PAS.OVR."  The file list should now have all files
               tagged except the two mentioned above.

            o  Press [C] to select the copy command.  Point & Shoot
               will then proceed to copy all the tagged files to the
               target directory.  A count of tagged files is shown as
               the copy process takes place.  When the program starts
               to copy "PS.BAT", it will find that file already exists
               in the target directory.  Answer "N" when the program
               asks whether it is Ok to replace "PS.BAT".  This safety
               feature prevents accidental copying over of files.

            o  When the copying is complete, move back to the tree and
               select \TEMP as the origin.  All the copied files should
               appear.

       In  the final example,  the \TEMP directory will be cleared of  files
       and then removed.  MAKE SURE YOU SELECT THE PROPER ORIGIN DIRECTORY.

            o  Select the \TEMP directory as the Origin.

            o  Use the FILE BLOCK command discussed previously to tag
               all the files in the \TEMP directory.

            o  After making sure that \TEMP is the Origin, press the
               [D] key to delete the tagged files.  When prompted "Are
               you sure", answer "Y" to begin the deletion process.

            o  Move back to the tree side and use the DELETE command to
               remove the \TEMP directory.


                                      - 13 -


       HARD DISK ORGANIZATION TIPS


       Hard disk systems can be complex because of the large number of files
       they can contain.   Point & Shoot relieves much of the complexity  of
       these systems,  but some tips and suggestions are in order concerning
       additional disk organization.

       The DOS files (from your DOS system disk) should be transferred to  a
       separate  subdirectory  and not stored in the  root  directory.   For
       example,  the  TREE  commands could be used to  make  a  subdirectory
       called  "SYSTEM"  and  then all all DOS  files  except  AUTOEXEC.BAT,
       COMMAND.COM,  and CONFIG.SYS could be transferred (FILE MOVE) to this
       subdirectory.   Next,  use the FILE EDIT command to modify  the  PATH
       command in the AUTOEXEC.BAT file to appear as follows:


                              PATH \SYSTEM;\P&S


       The PATH command tells the computer where to search for program files
       (.EXE,  .COM,  and  .BAT)  if they cannot be  found  in  the  current
       directory.   If  the path command shown above is installed,  all  DOS
       commands can now be executed from anywhere on the disk.   Many  other
       programs   can  be  executed  from  any  location  on  the  disk   by
       transferring  the  associated files to a  separate  subdirectory  and
       adding  that  path to the PATH command in the  AUTOEXEC  file.   Each
       additional path is separated by a semicolon.   DO NOT issue  separate
       path commands.

       Utilize  the TREE commands to create a logical,  organized  directory
       tree  on  the  hard  disk.   Many users  prefer  to  create  separate
       subdirectories for each major computer function,  and then to  create
       child directories below the major functions for each category of work
       of  project.   The following tree is an example of typical hard  disk
       organization.


                       C:\
                         |__DATABASE
                         |    |_SALES
                         |    |_VENDORS
                         |__P&S
                         |__SPRDSHET
                         |    |_BUDGETS
                         |    |_EXPENSES
                         |__SYSTEM
                         |__WORDPROC
                              |_DOCS
                              |_PERSONAL






                                      - 14 -


       DATABASE COMMANDS


       A  database is a collection of data in a format that is similar to  a
       collection of index cards.   Each record in a database is  equivalent
       to a card in an index file.  Each piece of information in a record is
       called  a field.   An entire group of similar records is stored in  a
       single file called a database.   In this program,  the database files
       end with the ".DB" extension.

       To assist in sorting and retrieving data in the databases the program
       maintains  key  files  which are separate files  (ending  with  .Kxx)
       consisting of data from one field of a database kept in sorted order.

       The  databases  included in this program are the Index,  Timelog  and
       User  databases.   The commands used to work with the  databases  are
       generally identical and are described here.   Differences that  occur
       will   be   covered  in  the  associated  detail  section   of   this
       documentation.

       In general, the program databases operate in the same fashion.  After
       selecting  the  appropriate database from the program  main  menu,  a
       screen will appear that displays information relative to the database
       in  use.   Line 24 of the screen will display information related  to
       the current database.  This line will show, in order, the name of the
       current  database,  the current order of the database,  the page  and
       number  of  pages total,  the current record number,  the  number  of
       records currently stored in the database, the total number of records
       counting previously deleted records,  and the number of records  that
       may  still  be  added  to  the  database  (dependent  on  disk  space
       remaining).   The  following  commands  are  available  for  database
       manipulation:

             Browse: Shows the records in tabular format.  The
                     [PgUp/PgDn] and [up/down arrow] keys may be used
                     to move through the list.  The [left/right arrow]
                     keys scroll the screen horizontally.  [^Home] and
                     [^End] jump to the beginning and end of the
                     database respectively.  [Esc] returns to the
                     original database screen at the original record
                     and [Enter] selects the record that the arrow is
                     pointing to.  Search options in the Browse command
                     allow quick location of records. The [F1] and [F2]
                     keys are used to set the primary and secondary
                     search strings for the field currently shown on
                     the left side of the Browse screen. After setting
                     the desired search strings, [F5] and [F6] are used
                     to search forward or backward.  A match indicator
                     is shown on the lower right corner of the screen.

             Delete: Deletes the current database record. 

             Enter:  Enters a new record into the current database. 
                     For an explanation of data entry, see the section
                     on DATA ENTRY SCREENS.

                                      - 15 -


             Find:   Finds a record matching a selected field.  You
                     will be prompted to enter a string to match.  Find
                     options include equal to, greater than or equal
                     to, less than, and partial match.

             Key:    Used to add or delete keys in the database.  A
                     prompt will ask if the desired action is to add or
                     delete a key.  After selecting the appropriate
                     option, a list of key field choices will appear
                     from which the desired field may be selected.  Key
                     fields are marked with a "K" or "k" to indicate
                     unique keys or duplicate keys respectively. 
                     Unique key fields that have been predefined for a
                     database may not be deleted, and a maximum of 10
                     key fields may be defined for a database.

             Misc:   Miscellaneous functions appear here.  The Export
                     command exports the database records to an Ascii
                     file for use by other programs.  Each field in the
                     database will be placed on a separate line in the
                     output file.  Text fields will be enclosed in
                     quotes, numeric fields are left-justified without
                     quotes.  The Export command creates a file with
                     the same name as the current database, but with a
                     ".XPT" extension.  If the export file already
                     exists, you will be asked if it is Ok to replace
                     it.  The field specifications may be printed using
                     the Print Database Layout command.

             Order:  Changes the record display order.  A list of key
                     field choices will appear for selection of the
                     desired order.  Key fields are marked with a "K"
                     or "k" to indicate unique keys or duplicate keys
                     respectively.  If a field is selected that is not
                     a key, the program will make it a key.

             Report: Allows the user to select a report to print for
                     the database.  All databases have at least two
                     report options: All records or current record
                     summary.  Other reports available are covered in
                     detail in the sections describing each database. 
                     Reports will print in the current database order.

             Update: Updates the current database record.  For an
                     explanation of data entry, see the section on DATA
                     ENTRY SCREENS.


       Several additional database commands are available but not shown:

             [^Home] [^End]:  Jumps immediately to the first/last
                     record of the database.

             [F1/F2]:  Enters the current date/time if appropriate.


                                      - 16 -


             [F5]:   Accepts changes to the current record and moves to
                     the previous record of the database. (Not
                     available in Enter mode)

             [F6]:   Accepts changes to the current record and moves to
                     the next record of the database.  If in Enter
                     mode, a new blank record will appear for data
                     entry.

             [F8]:   Blanks the current field.

             [Enter]: Same as right or down arrow for next field.

             [Esc]:  Aborts changes made to the current record and
                     completes Enter/Update action.

             [F10]:  Accepts changes made to the current record and
                     completes Enter/Update actions.



       DATABASE BACKUPS


       Power  outages and surges as well as computer malfunctions may  cause
       corruption  to  occur  in the databases of  the  program.   The  only
       security you have against such problems is to make regular backups of
       your  data.   It is suggested that you use a rotated  backup  routine
       where you keep two copies of backups.   Alternate between these disks
       each time you perform a backup.

       When making your backups,  you may either use the backup program that
       comes  with  your DOS disks or any other  commercial  backup  program
       (like Point & Shoot Backup/Restore available from AMST).   To  backup
       your  data,  you  must  specify all files that  end  with  the  ".DB"
       extension  as well as files that end with a ".Kxx"  extension,  where
       the "xx" is a number that identifies the field number for the key.

       If  the need ever arises to restore your databases from  your  backup
       disks,  follow the procedure in your backup program documentation  to
       restore your data.



       DATABASE ERRORS: THE FIXUP COMMAND


       On  rare  occasions  a database may become corrupted.   If  a  "FATAL
       DATABASE  ERROR"  occurs when attempting to access  a  database,  the
       database may still be recoverable with the FIXUP command.   FIXUP  is
       found  in the INDEX and USAGE commands.   Fixup attempts  to  rebuild
       damaged  databases  by scanning the database and  reconstructing  the
       index  files.   Fixup  also attempts to free  unused  disk  space  by
       eliminating previously deleted records from the database.


                                      - 17 -


       PROTECTION & USAGE LOGGING SYSTEM


       It is often desirable to restrict access to a computer system.  It is
       also  advantageous  to  track  the usage of  a  system  to  determine
       utilization,  bill for time on projects,  assist in justification  of
       new  equipment,  and validate tax deductable use of  computers.   The
       protection  and usage logging system provide these  capabilities  and
       more:


            o  Unlimited number of users may be defined and tracked.

            o  Access to each command found in the Point & Shoot Hard
               Disk Manager may be selectively enabled or disabled for
               each user.

            o  Time log entries are made automatically each time a
               program is run from the user-defined menus.

            o  Full-featured database commands with advanced B-tree
               design are available to manipulate the databases:

                 o  Browse records in tabular format and search using
                    two-key pattern matching
                 o  Delete selected records
                 o  Enter new records and update existing records
                 o  Find records based on less than, greater than,
                    equal to, or partial key field matches
                 o  Add or remove keys to the databases
                 o  Order the databases in sequential or key field
                    order
                 o  Print reports in a variety of formats
                 o  Transfer database records to text files for use
                    with other programs


       Before the protection or usage logging systems are enabled, the USAGE
       command  should be used to make entries for each person that will  be
       using the system.  Access privileges should be set at this time.  See
       the section on the USAGE command for complete details.

       Protection and Usage Logging are enabled and disabled using the SETUP
       command.   If Usage Logging has been enabled in SETUP,  users will be
       required to enter a User Id when they run the Hard Disk Manager  (the
       User Id is located in the User database).  After the User Id has been
       verified,  the  access  privileges from the  User  database  will  be
       recorded in the Hard Disk Manager for that user.

       From  that  point,  until the user quits the program  with  the  QUIT
       command,  all  system  activity  will  be  recorded  in  the  Timelog
       database.   In addition, whenever the user attempts to use one of the
       commands found in the Hard Disk Manager, their access privileges will
       be checked before access is allowed.


                                      - 18 -



       Invalid attempts to access the Hard Disk Manager and the user-defined
       menus will also be recorded in the Timelog database if Usage  Logging
       has been enabled.

       If  the Protection system has been enabled in SETUP,  users  will  be
       required  to enter their password when first logging on to  the  Hard
       Disk Manager.   The password is located in the User database.   Users
       may change their own password with the USAGE command.

       The Protection system in the Hard Disk Manager also provides password
       protection for the user-defined menu entries.  (See the MENU COMMANDS
       section of the documentation).


              NOTE: IF THE USAGE LOG IS ENABLED, USERS WILL NOTICE A
                    LONGER DELAY WHEN RUNNING PROGRAMS FROM THE
                    USER-DEFINED MENUS.  THIS DELAY IS CAUSED BY THE
                    RECORDING OF USAGE LOG ENTRIES IN THE TIMELOG
                    DATABASE.


       A  variety  of  reports  are available from the  User  and  Time  Log
       databases.  Time Log entries may be printed for one user or all users
       and  restricted to particular dates.  The User database provides  key
       summary reports of user access privileges.

       If  the system administrator forgets his/her password,  the  Point  &
       Shoot  Program  may  be  reinstalled  using  the  distribution  disk. 
       Protection will be disabled (the default), and the administrator will
       be  able to access the User database to make appropriate  changes  to
       his/her password and privileges.


              NOTE: THE SYSTEM ADMINISTRATOR SHOULD MAKE SURE THAT ALL
                    OF THEIR PRIVILEGES ARE ENABLED IN THE USER
                    DATABASE.  IF A USER IS RESTRICTED TO A SINGLE PATH
                    FOR TREE COMMANDS IN THE USER DATABASE, ALL TREE
                    COMMANDS EXCEPT ORIGIN AND TARGET SHOULD BE
                    DISABLED FOR THAT USER TO AVOID ERROR CONDITIONS
                    THAT MIGHT ALLOW ACCESS TO THE ROOT DIRECTORY.















                                      - 19 -



       SCREEN BLANKER OPERATION


       There  are two programs provided on the distribution disk  that  will
       blank the computer screen to prevent "burn-in"  that occurs with some
       monitors.   These programs are ASB.COM for CGA and MDA  monitors  and
       ASBE.COM  for EGA monitors.   The screen blankers blank the  computer
       screen after 5 minutes of no keyboard activity.

       NOTE:  These programs have NOT been tested on all brands  of  display
       adaptor  cards  or  monitors but should  operate  correctly  on  most
       systems.  These programs ARE Terminate and Stay Resident programs and
       will  occupy  approximately  256  bytes of  available  RAM.   If  any
       problems are encountered when using these programs, discontinue use.

       To use either screen blanker program,  type ASB or ASBE from the  DOS
       prompt,  or  include the command in a batch file  like  AUTOEXEC.BAT. 
       Upon  execution,  the program will display an  installation  message. 
       Normal use of the computer may then continue.

       NOTE:   DO  NOT  INSTALL  BOTH  SCREEN  BLANKERS,  ONLY  INSTALL  THE
       APPROPRIATE  PROGRAM  FOR YOUR COMPUTER.  ALSO,  DO NOT  INSTALL  THE
       SCREEN BLANKER FROM THE DOS MODE OF POINT & SHOOT.

       After  the  screen  blanks,  any keypress will  restore  the  screen. 
       However, the key pressed will be passed on to the currently executing
       program; use a non-action key like [Alt] to restore the screen.

       After the initial installation, the screen blanker may be temporarily
       disabled by entering the one of the following commands from the DOS
       prompt.   These may be entered from the DOS mode of Point & Shoot  or
       from the COMMAND TO EXECUTE in user-defined menus:


                     ASB -

                     or

                     ASBE -


       Entering  the original ASB or ASBE command again will  re-enable  the
       screen blanker.  This secondary enabling of the screen blanker may be
       entered  from  the DOS mode of Point & Shoot or from the  COMMAND  TO
       EXECUTE in user-defined menus.

       Neither  program  supports graphics modes but they  may  be  disabled
       prior to entering graphics mode programs.  Also, some word processing
       programs  rudely capture keyboard interrupts and are  not  compatible
       with  these screen blankers so the screen blanker should be  disabled
       before entering these programs.




                                      - 20 -


       TEXT EDITOR OPERATION


       The built-in text editor invoked with the FILE EDIT command  supports
       the following functions:


            o  Full-screen editing of text files up to 64K

            o  Autoindentation

            o  Fixed or smart tabs (tab to previous line words)

            o  Block operations

            o  Find and replace operations

            o  On-line help

            o  Pop up available editing memory display


       NOTE:   If  another  text  editor has been  selected  in  setup,  the
       built-in editor will not be invoked when FILE EDIT is selected.


       Overview

       The  text  editor  is  a  full-screen  text  editor  very  much  like
       MicroPro's  WordStar non-document mode and the program editors  found
       in Borland products such as Turbo Pascal, Turbo C,  or SideKick.   If
       you  are familiar with any of these editors,  you should need  little
       help in using this editor.

       Text is entered similarly to a typewriter.  However,  there are a few
       important  differences.   The cursor (a flashing  underscore)  always
       indicates where new text will be entered, and the cursor can be moved
       throughout  the  current  file in many different  ways  as  described
       later.   Mistakes can be quickly corrected with the delete  commands. 
       Text can be copied and moved with the block commands.   Text  strings
       can be located with the Find command and optionally replaced with new
       text using the Find and Replace command.

       The editor can edit text files of up to 64K bytes.   If  insufficient
       memory  is  available,  the  editor capacity  will  be  reduced.   In
       addition  to  common  editing commands, the editor  also  features  a
       built-in command help screen and a pop-up memory statistics screen.

       Each command for the editor is described in detail in the following 
       sections, and a brief summary of commands is given on the next page.

       NOTE: the ^ character indicates a Ctrl-key combination.  To execute a
       Ctrl-key function, hold the [Ctrl] key and press the letter shown.



                                      - 21 -



       BASIC EDITING COMMANDS                SEARCH COMMANDS

       Word left         [^F]                Find           [F5] or [^Q F]
       Word right        [^G]                Find/replace   [F6] or [^Q A]
       Line up           [up arrow]          Find next      [^L]
       Line down         [down arrow]
       Page up           [PgUp]              FIND OPTIONS
       Page down         [PgDn]              [B]=Backward search
       Top of screen     [Home]              [G]=Global search
       End of screen     [End]               [L]=Limit to block
       Top of file       [^Home]             [N]=Replace without asking
       End of file       [^End]              [U]=Ignore case
       Left on line      [^left arrow]       [W]=Whole words only
       Right on line     [^right arrow]
       Top of block      [^Q B]
       End of block      [^Q K]
       Insert line       [F7]
       Delete line       [F8] or [^Y]
       Delete word       [^T]



       BLOCK COMMANDS                        MISCELLANEOUS COMMANDS

       Begin             [^K B]              Help Screen    [F1]
       Copy              [^K C]              Save/resume    [F2]
       Delete            [^K Y]              Editor Stats   [F3]
       End               [^K K]              New File       [F4]
       Move              [^K V]              Abandon        [F9] or [^K Q]
       Print             [^K P]              Save/quit      [F10] or [^K D]
       Read              [^K R]
       Write             [^K W]



       OPTIONS

       Toggle indent     [^O I]
       Toggle tabs       [^O T]
















                                      - 22 -



       The Editing Screen


       When  the editor is invoked through the FILE EDIT command,  the  main
       editor screen will appear.   The center portion of the screen is  the
       text editing area,  and the bottom section of the screen displays the
       quick function key commands.  The top line of the text editing window
       shows the editor status line.  The status line provides the following
       information:


             Command Echo:  When the first key of a Ctrl-key command is
                     pressed, the keystroke is echoed at the left edge
                     of the status line.

             Line n:  Shows the line number containing the cursor.

             Col n:  Shows the column number containing the cursor.

             Insert: Indicates that Insert mode is in effect.

             Indent: Indicates Autoindent mode is in effect.  [^O I]
                     toggles the Autoindent mode on and off.

             Tab:    Indicates fixed tabs are in effect.  [^O T]
                     toggles fixed tabs on and off.

             X:FILENAME.EXT:  The drive, name, and extension of the
                     file being edited.  If the current file has not
                     been named, only the current drive letter will be
                     shown.  Also, even though a complete directory
                     path for file editing may be specified, the entire
                     path will not be shown on the status line.



       Options


             Toggle insert mode [Ins]:  Selects Insert or Overwrite
                     mode.  In Insert mode, text to the right of the
                     cursor is moved to the right as new text is
                     entered.  In Overwrite mode, text at the cursor
                     position is overwritten when new text is entered.

             Toggle autoindent [^O I]:  When Autoindent mode is in
                     effect, pressing [Enter] will move the cursor to
                     the next line and to the same column as the first
                     character of the previous line.

             Toggle fixed tabs [^O T]:  With fixed tabs, tab stops
                     start at column 1 and occur at every 8 columns. 
                     With smart tabs, tab stops are set at the first
                     character of each word on the previous line.

                                      - 23 -



       Cursor Movement


       The simplest commands in the editor are the cursor movement commands. 
       Following is a description of these commands.


             Character left [left arrow]: Moves the cursor one
                     character to the left.

             Character right [right arrow]: Moves the cursor one
                     character to the right.

             Word left [^F]:  Moves the cursor to the beginning of the
                     word to the left.

             Word right [^G]:  Moves the cursor to the beginning of the
                     word to the right.

             Line up [up arrow]:  Moves the cursor up one line.  If the
                     cursor is at the top line of the screen, the text
                     scrolls down one line.

             Line down [down arrow]:  Moves the cursor down one line. 
                     If the cursor is at the bottom line of the screen,
                     the text scrolls up one line.

             Page up [PgUp]:  Moves the cursor up one screen.

             Page down [PgDn]:  Moves the cursor down one screen.

             Top of screen [Home]:  Moves the cursor to the top of the
                     screen.

             End of screen [End]:  Moves the cursor to the bottom of
                     the screen.

             Top of file [^Home]:  Moves the cursor to the beginning of
                     the file.

             End of file [^End]:  Moves the cursor to the end of the
                     file.

             Left on line [^left arrow]: Moves the cursor to column 1
                     of the current line.

             Right on line [^right arrow]: Moves the cursor to the end
                     of the current line.

             Top of block [^Q B]:  Moves the cursor to the block-begin
                     marker set with [^K B].

             End of block [^Q K]:  Moves the cursor to the block-end
                     marker set with [^K K].

                                      - 24 -



       Editing Commands


             New line [Enter]:  In Insert mode, this command inserts a
                     line break at the current cursor position.  If
                     Autoindent mode is on, the cursor moves to the new
                     line and to the same column as the first character
                     of the previous line; otherwise the cursor moves
                     to column 1 of the new line.  In Overwrite mode
                     (Insert off), the cursor will move to column 1 of
                     the next line without creating a new line.

             Insert Line [F7]:  Inserts a new line at the current
                     cursor position.

             Tab [Tab]:  Moves the cursor to the next tab stop.  In
                     Insert mode, any text to the right of the cursor
                     is moved along with it.  If Insert mode is off,
                     only the cursor will be moved.  The location of
                     the next tab stop depends on whether fixed tabs or
                     smart tabs are in effect as discussed previously.

             Delete current character [Del]: Deletes the character at
                     the current cursor position and moves any
                     characters to the right of the cursor one position
                     to the left.

             Delete left character [Backspace]:  Deletes the character
                     to the left of the cursor and moves the cursor to
                     the left one position.  Any characters to the
                     right of the cursor are moved to the left one
                     position.  If the cursor is at column 1, the
                     cursor is moved to the end of the previous line
                     and the current and previous lines are joined
                     together.

             Delete word [^T]:  Deletes the word to the right of the
                     cursor.

             Delete line [F8] or [^Y]:  Deletes the current line and
                     moves any lines below it up one line.  The cursor
                     moves to column 1 of the next line.













                                      - 25 -



       Search Commands


             Find [F5] or [^Q F]:  Searches for a string of up to 30
                     characters.  This command will prompt for a search
                     string.  The last search string used (if any) will
                     be displayed and can be selected again by pressing
                     [Enter] or can be edited.  A new search string may
                     also be entered.  To edit the search string,
                     [Backspace] deletes the previous character, [^R]
                     restores the previous string, and [^U] or [Esc]
                     cancels the command.  After the search string is
                     entered the program will prompt for search
                     options.  Any previously entered options will be
                     shown.  Again, these may be revised or accepted. 
                     The following options are available for the Find
                     command:

                      B: Searches backward from the current cursor
                         position toward the beginning of the file.

                      L: Limits the search to the current block.

                      n: Find the nth occurrence of the search string.

                      U: Ignore the case of the target string.

                      W: Searches for whole words only.


             Find and Replace [F6] or [^Q A]:  This command works the
                     same as the Find command, except that the "found"
                     string may be replaced with any other string up to
                     30 characters in length.  After entering the
                     search string, the program will prompt for a
                     replacement string.  The last replacement string
                     used will be shown and can be revised or accepted. 
                     The options for the Find and Replace command are
                     the same as the Find command except for the
                     following additions:


                      G: Searches globally through the entire file for
                         the search string.

                      N: Replaces any matches without confirmation.


             Find next [^L]:  Repeats the last Find or Find and Replace
                     command.





                                      - 26 -



       Block Commands


       A block of text is any contiguous unit of text.   A block is  defined
       (marked)  by placing a begin-block marker at the first  character  in
       the  desired  block  and an end-block marker  just  beyond  the  last
       character in the desired block.   Once a block has been marked,  that
       block may be copied,  moved, deleted, written to a file,  or printed. 
       When  a block is marked,  the marked text will appear in a  different
       color  than  the rest of the text.   A defined block will  remain  in
       effect  unless the Block Delete command is issued or a new  block  is
       defined.  The following block commands are available:


             Begin block [^K B]:  Marks the beginning of a block.  The
                     marker itself is not visible, and the block itself
                     will not be marked until the end-block command is
                     given.

             End block [^K K]:  Marks the end of a block.  Like the
                     begin-block marker, the end block marker is not
                     visible and the block itself will not be displayed
                     unless both markers are set.

             Copy block [^K C]:  Creates a copy of a marked block of
                     text at the current cursor position.  The original
                     block is left unchanged and the block-begin and
                     block-end markers are placed around the new copy
                     of the block.

             Move block [^K V]:  Moves a marked block of text from its
                     current position to the current cursor position. 
                     The block markers remain around the block at its
                     new position.

             Delete block [^K Y]:  Deletes a marked block of text and
                     erases the old block markers.

             Read block [^K R]:  Reads a file into the editor at the
                     current cursor position.  The file is read in
                     marked as a block.  The program prompts for the
                     name of the file to read.  If used earlier, the
                     last file name entered is displayed and may be
                     modified or accepted.

             Write block [^K W]:  Writes the current block to a file. 
                     The program prompts for a filename; if the file
                     already exists, the program prompts for
                     replacement.

             Print block [^K P]:  Prints the currently marked block to
                     the printer.  If no block is marked, the entire
                     file is printed.


                                      - 27 -



       Miscellaneous Commands


             Help [F1]:  A screen with the editor commands is shown. 
                     Pressing any key returns to editing mode.

             Save/Resume [F2]:  Saves the current file (if it is named)
                     and resumes editing.

             Editor Stats [F3]:  Displays the amount of memory
                     available for editing and the memory occupied by
                     the current text file.

             New file [F4]:  Clears the editor of all text.  If the
                     current file has been modified, the program
                     prompts for saving.  A new file name may be
                     selected.

             Abandon [F9]:  The current file is abandoned (after
                     confirmation if changes have been made) and
                     control is returned to the FILE commands.

             Save/done [F10]:  The current file is saved, and control
                     is returned to FILE commands.































                                      - 28 -


       USING A MOUSE


       A  mouse  may be used instead of the keyboard for  most   operations. 
       The  mouse  interface  has  been designed to be  as  similar  to  the
       keyboard commands as possible.

       To  enable  the  mouse,  the MOUSETRAP option in  the  program  SETUP
       command  must be set to "Y".  In addition,  the MOUSE driver  program
       must  be executed once before running Point & Shoot.   Refer  to  the
       documentation provided with your mouse for instructions on installing
       and executing the mouse driver program.

       If the  mouse has been installed correctly and enabled in the program
       SETUP,  upon initial startup of Point & Shoot,  the mouse  cursor  (a
       solid  rectangle) will appear on the right side of the screen on  the
       same line as the [Alt] commands.  To check the mouse operation,  move
       the mouse around the screen.

       NOTE:  Mouse use will not prohibit screen blanking!!

       ALMOST  all of the Point & Shoot commands may be controlled with  the
       mouse.   Noted exceptions are the hex and text file editors, the file
       view command, any text entry, and the [Alt-D] drop to DOS.  All menus
       and file/tree manipulation commands may be operated with the mouse.

       The  right  mouse button is ALWAYS equal to the [Esc] key.   In  MOST
       cases,  the left mouse button is equal to [Enter].  Mouse movement is
       generally  equal  to  the up and down arrow  keys.   Following  is  a
       summary  of the different types of mouse use encountered in  Point  &
       Shoot.


             Command Menus:  These are the menus found on the lower
                     area of the screen.  To select a menu command,
                     place the mouse cursor anywhere within the command
                     and click the left mouse button.

             User Menus:  These are the menu items created to run
                     programs.  To select a user menu, place the mouse
                     cursor on the menu entry and click the left mouse
                     button.  If the selected menu contains a submenu,
                     select a submenu entry as discussed in Vertical
                     Lists.  Use the same procedure to select a user
                     menu when using the Menu commands.

             Vertical Lists:  These are the vertical lists of items
                     used to select user-defined submenus and options
                     such as FILE SORT or FILE ATTRIBUTES.  The mouse
                     cursor will be tied to the horizontal cursor bar
                     in the vertical lists.  Move the mouse up or down
                     to move the cursor bar and click the left mouse
                     button to select the hilited entry.



                                      - 29 -



             Switch Menu Lines:  This command is [F6] in the MENU ADD
                     or MENU CHANGE commands.  When using this command,
                     the mouse cursor will be tied to the flashing star
                     used to select a menu entry line to switch.  Move
                     the mouse up or down to move the star and click
                     the left mouse button to accept the selection.

             Path Selection:  This command is [F7] in the MENU ADD,
                     MENU CHANGE, or USAGE User database commands. 
                     When the directory tree appears on the screen, the
                     mouse cursor will be tied to the hilited
                     directory.  Move the mouse up or down to move the
                     hilite.  To scroll the tree, move the mouse cursor
                     past the upper or lower tree box boundary.  To
                     select a directory path, click the left mouse
                     button.

             File and Tree:  The file and tree commands operate as
                     discussed previously.  The mouse must be used in a
                     different manner to manipulate the file list and
                     directory tree.  Move from file to tree commands
                     by clicking on the associated menu command or by
                     clicking once anywhere within the side (File or
                     Tree) not currently in use.  To move the cursor to
                     a particular file or directory, place the mouse
                     cursor on the item and click.  The cursor will
                     move to that file or directory.  If the cursor is
                     already on that file of directory, the file will
                     become tagged/untagged or the directory will
                     become the ORIGIN.  The outer vertical boundary
                     lines around the file list and directory tree are
                     used as scroll lines.  To scroll the file list or
                     directory tree, place the mouse cursor on the
                     associated scoll line and then, while holding the
                     left mouse button down, move the mouse in the
                     desired direction.  A click on the top corner of
                     the scroll line simulates a [Home] keypress, and a
                     click on the lower corner of the scroll line
                     simulates an [End] keypress.  Similarly, a click
                     on the second position from the top or bottom of
                     either scroll line simulates a [PgUp] or [PgDn]
                     keypress.  Finally, the FILE FILTER and FILE SORT
                     commands may be executed by clicking on the
                     appropriate areas above the file list. 


       A  certain  amount  of practice will  be  necessary  before  becoming
       comfortable  with the mouse operation of Point & Shoot.   Many  users
       find keyboard use to be more efficient,  especially with the FILE and
       TREE commands.





                                      - 30 -


       NETWORK INSTALLATION


       Point & Shoot will operate on a network provided certain restrictions
       are followed.   To use Point & Shoot on a network, separate copies of
       the program must be made available to each user on the system.   This
       means  that each user on the network must have their own  hard  disk. 
       Each user would then use Point & Shoot to control their own computer. 
       Appropriate  error messages will be returned to users who attempt  to
       access locked files or directories.

       The  system administrator could install Point & Shoot on the  central
       file  server,  but  NETWORK USERS CANNOT RUN A  SINGLE  COPY  OF  THE
       PROGRAM FROM THE NETWORK SERVER DISK.

       Point & Shoot maintains special files and program settings during the
       execution  of  programs  from  user-defined  menus  and  during   the
       operation  of the protection and usage logging system.   These  files
       and  program  settings  are specific to the current  process.   If  a
       single  copy  of the program is operated from a  network  server  for
       multiple  users,  files and program settings will be changed by  more
       than one user at a time.  The end result is potential damage to Point
       & Shoot files and databases.

       NOTE:  Using  a  single  copy of Point & Shoot  on  a  network  is  a
       violation of the license agreement.   Network installations must have
       a  licensed  copy  of Point & Shoot for each  user  on  the  network. 
       Network license agreements are available from AMST.




























                                      - 31 -

                                MAIN MENU COMMANDS
                                ------------------


       The Main Menu is the center of Point & Shoot activity.   Some of  the
       Main  Menu commands move to another command list,  while others  will
       immediately  execute a command.   Following is a description  of  the
       Main Menu commands.


       BACKUP

       Attempts  to  locate  and execute the Point  &  Shoot  Backup/Restore
       program to perform a hard disk backup or restoration.   Point & Shoot
       Backup/Restore is a separate program available from AMST that is used
       to  backup your hard disk to floppy disks or restore previous  backup
       disks to your hard disk.   If the Backup/Restore program has not been
       purchased  and installed,  a message will indicate that  the  program
       could not be found.


       DISKFORMAT

       The DISKFORMAT command is used like the DOS FORMAT command to  format
       diskettes.   For user protection,  the DISKFORMAT command  will  only
       operate on drives A and B.  When the DISKFORMAT command is  selected,
       a screen will appear for entry of the format specifications:

             FORMAT DRIVE:  This is the letter designating the drive to
                     format.  The only acceptable entries are A and B.

             TYPE:   This is the type of drive used in the format
                     process where:

                              1 = 360K    3 = 720K
                              2 = 1.2M    4 = 1.4M

             VOLUME LABEL:  Up to 11 characters may be entered as a
                     volume label to be placed on the disk during the
                     format process.  The volume label is optional.

       After  the appropriate disk format specifications have been  entered,
       [F10]  will begin the format process.   All disks formatted with  the
       DISKFORMAT command will be checked for bad sectors (unusable areas on
       the  disk).   Progress of the format operation will be shown  on  the
       screen.   When  the  format  operation is  complete,  the  total  and
       available bytes on the formatted disk will be shown,  as well as  the
       number of bytes in bad sectors found and marked (if any).

       The  [F10]  key  will restart the format  operation  using  the  same
       specifications.  Press [Esc] to end the formatting session.






                                      - 32 -


       FILE

       Moves  to the FILE command list described later.   The  FILE  command
       list contains operations to manipulate files on hard or floppy disks.


       INDEX

       Moves to the INDEX database described later.   The INDEX database  is
       used  to  maintain  a list of files or anything  else  that  must  be
       tracked.


       MENU

       Moves  to the MENU command list described later.   The  MENU  command
       list contains operations to create and manipulate user-defined  menus
       for program execution.


       SETUP

       Moves  to the program SETUP data screen described later.   The  SETUP
       data screen allows changes to the program colors, the computer beeper
       and  hourly chime,  available disk drives,  optional  mouse  support,
       optional  protection system and time logging,  and  the  user-defined
       menu title.


       TREE

       Moves  to the TREE command list described later.   The  TREE  command
       list contains operations to allow manipulation of subdirectories.


       USAGE

       Provides  access to the Time Log and User Databases that are  key  to
       the Protection and Usage Logging system of the program.   Also allows
       users to change their passwords.
















                                      - 33 -


                                   FILE COMMANDS
                                   -------------


       IMPORTANT:   ORIGIN AND TARGET DIRECTORIES SHOULD ALWAYS BE  SELECTED
       BEFORE  USING FILE COMMANDS!!!   IF THE FLOPPY DISK IS  CHANGED,  THE
       ORIGIN OR TARGET COMMAND IN THE TREE COMMANDS MUST BE USED TO  RE-LOG
       THE DISK, OTHERWISE THE FILE DISPLAY WILL BE INCORRECT.

       The  FILE commands provide a comprehensive set of functions for  file
       manipulation.   Select  FILE  from the main menu to  produce  a  dual
       display with a file list and a graphic directory tree.   If no  files
       are  found  in the currently selected directory (the  ORIGIN),  a  NO
       FILES FOUND message will be displayed in the file side of the screen.

       The FILE and TREE commands work in concert.   The file list shown  is
       always  for  the  directory (or floppy disk) marked  on  the  graphic
       directory tree with an "O" denoting Origin.  In addition, the current
       Origin and Target paths will be shown (abbreviated) above the graphic
       directory tree display.

       File commands generally operate on the currently hilited file.   Some
       commands like COPY will also use the directory marked with a "T"  for
       Target.   Switching between the FILE and TREE sides of the screen  is
       accomplished with the [left/right] arrow keys.   Additional  commands
       available with FILE that are not shown on the menu are:

             [Enter]:  Tags/untags the currently hilited file for use
                     with the BLOCK command.

             [+ or -]:  Tags/untags all files for use with BLOCK
                     command.

             [^PgDn]:  Tags the current file and moves hilite bar down.

             [up/down arrow], [PgUp], [PgDn], [Home], [End]:  Moves the
                     hilite bar through the file list.

             [Tab]:  Moves between the origin and target file lists
                     (See FILE WINDOW)



       ATTR

       Used  to change the attributes,  date,  and/or time of the  currently
       hilited file.  Attribute choices include Read-only,  Hidden,  System,
       and  Archive.   A  pop-up list will appear  from  which  the  current
       attribute settings may be examined or modified.  [Esc] will leave the
       attributes  unchanged.   Select [D] to change the file's date  and/or
       time stamp.

          CAUTION:  DO NOT CHANGE A FILE'S ATTRIBUTES UNLESS ATTRIBUTES
                    ARE FULLY UNDERSTOOD.


                                      - 34 -



       BLOCK

       Used to perform a COPY, DELETE, MOVE, NEWER, or RENAME operation on a
       group of tagged files.   The BLOCK command produces a new menu on the
       bottom  of the screen.   The command options will be displayed  along
       with  the number of tagged files and the total size in bytes  of  the
       tagged files.  When all desired files have been tagged (using the tag
       commands discussed previously) the appropriate command letter may  be
       pressed to initiate a block operation.   Files will be untagged after
       each  operation is completed.   If all files are deleted or moved  in
       the  ORIGIN  directory with the BLOCK command,  then  execution  will
       automatically  return  to  the FILE menu,  otherwise  [Esc]  must  be
       selected  to return to the FILE menu or [right arrow] to move to  the
       TREE menu.


       COPY

       Used to copy the currently hilited file from the ORIGIN directory  to
       the TARGET directory.   If the ORIGIN and TARGET directories are  the
       same,  the program will prompt for a new file name.   The result is a
       file  duplication  in the ORIGIN directory.   If  the  selected  file
       exists in the TARGET directory,  the program will ask if it is Ok  to
       replace the existing file.


       DELETE

       Used  to delete the currently hilited file.    The program  asks  for
       verification  before deletion takes place.  If a file  is  accidently
       deleted, it may be recovered with the TREE UNDELETE command.


       EDIT

       When EDIT is selected,  the built-in text file editor is invoked  and
       the  currently hilited file is automatically loaded.   The text  file
       editor   is  limited  to  text  files  of  64K  or  less.    Complete
       instructions  for  the editor can be found in a separate  section  of
       this  documentation.   Alternately,  a text  editor  other  than  the
       built-in editor may be used (see SETUP).


       FILTER

       Used to filter (select a subgroup of files) in the ORIGIN  directory. 
       The default search filter is  "*.*"  which will find all files.  File
       filter strings are the same as used in DOS (consult a DOS manual  for
       details on file filters).   When FILTER is selected,  the cursor will
       move  to the top of the screen where the FILTER status appears.   The
       filter string may then be edited to select the files of interest.  If
       the  resulting  file  list does not  look  appropriate,  remember  to
       examine the current FILTER setting to ensure that desired files  have
       not been inadvertantly excluded from the list.

                                      - 35 -



       GLOBAL

       Used to search the entire hard disk(s) for files matching the current
       file  FILTER.   After the FILTER command has been used  to  select  a
       desired subset of files, GLOBAL is used to search the entire disk(s).
       Two  options for GLOBAL are All Files or Quick Scan.   The All  Files
       option gathers all  matching files into one file list.    These files 
       may   then  be  deleted or  moved to the  current  target  directory.  
       The quick scan option pauses in each directory to allow the following
       options: 

             D)elete:  Deletes the currently hilited file.  If the
                     deleted file was the only file left in the current
                     file list, the global search will automatically
                     continue with the next directory. 

             N)ext Dir:  Skips the current directory and continues with
                     the global search.

             [Esc]:  Stops the global search and stays in the current
                     directory.

       All of the file list viewing commands (arrows, [PgUp], [PgDn], [Home]
       and [End]) will operate when global search has paused in a directory. 
       A  current count of files found and deleted will be displayed in  the
       bottom  portion of the screen when using the Quick Scan option.   The
       ORIGIN directory will be hilited on the directory tree as the  global
       search proceeds.


       HEX

       Used to edit any file in Hex/Ascii mode.   The first 256 bytes of the
       currently  hilited file will be read into memory and the  HEX  screen
       will  appear.   The left side of the screen displays the file in  Hex
       code  (base  16) and the right side displays  the  Ascii  equivalent. 
       Commands included in HEX are:

             [F1]:   Rereads the current 256 bytes from disk

             [F2]:   Saves the current 256 bytes to disk

             [F3/F4]: Moves the edit cursor to the Hex/Ascii sides of
                     the screen respectively

             [F10]:  Ends the Hex/Ascii editing session.  If any
                     changes have been made to the current 256 bytes of
                     the file since the last save, the program will ask
                     if the changes should be saved.

             [Esc]:  Ends the Hex/Ascii editing session and aborts any
                     changes made to the current 256 bytes.

             [PgUp], [PgDn], [Home] and [End]:  Move the edit cursor.

                                      - 36 -



       LOCATE

       Used  to  locate  text strings in files anywhere on  the  hard  disk.  
       When LOCATE is selected, the program will prompt for a text string to
       find.  Options for LOCATE include all directories,  current directory
       only,   and forward from the current directory.   If the desired text
       is found, a portion of the file which contains the text will be shown
       with the  search text hilited.    The search can then be continued or
       stopped.  [Esc] aborts the search at any time.


       MOVE

       Used to move the currently hilited file from the ORIGIN directory  to
       the  TARGET  directory.   If the selected file exists in  the  TARGET
       directory,  the program will ask if it is Ok to replace the  existing
       file.   If  a file appears to be lost after using MOVE,  check  which
       directory is set as the TARGET then look there for the file.


       NEWER

       NEWER  is  similar  to the COPY command except  that  if  the  TARGET
       directory  contains a file with the same name,  the date and time  of
       the ORIGIN and TARGET files will be compared and the TARGET file will
       only be replaced if the ORIGIN file is newer.   If no matching TARGET
       file exists, the copy will proceed as with the COPY command.


       PRINT

       Used to print text files or the file list.   File list print  options
       include an expanded list with filename, size,  date,  and time,  or a
       list of filenames only.   Text file print options include "as is"  or
       HP LaserJet 2-column (HP LaserJets only).  The LaserJet format prints
       the  file  in two 80 character columns and 60 lines per page.  Use  a
       word processor to format text files to improve appearance.


       RENAME

       Used to change the name of the currently hilited file.   When  RENAME
       is selected, the program prompts for a new name for the file.


       SORT

       Used to sort the file list by date, extension, inverse date, name, or
       size.


       TREE

       Jumps to the TREE commands (same as right arrow).

                                      - 37 - 



       VIEW

       Used to view the currently hilited file.  VIEW commands include:

             [F1]:   Toggles filtering of characters of Ascii 128 or
                     higher.

             [F2]:   Toggles the display of printable characters only.


       WINDOW

       Splits  the file list into two windows,   one for  Origin  files  and
       one  for Target files.   The  [Tab]  key is used to move between  the
       windows.  File commands will only operate on the Origin file list.


       XECUTE

       Executes  the currently hilited file in memory (.COM or  .EXE  only). 
       DO NOT EXECUTE MEMORY RESIDENT PROGRAMS!!!   The  ability  to execute
       programs  is limited to the amount of memory available when  Point  &
       Shoot  is operating.  See [alt-S] command to determine the amount  of
       memory available when running Point & Shoot.   Point & Shoot requires
       approximately 320K of memory,  DOS requires another 50-60K,  and  any
       other  resident programs will also consume some memory.   On  a  640K
       computer,  only about 256K will normally be available to  the  XECUTE
       command.   NOTE:   THE  XECUTE  COMMAND  SHOULD  NOT  BE  USED  AS  A
       REPLACEMENT FOR THE USER-DEFINED MENUS!


























                                      - 38 -


                                  INDEX DATABASE
                                  --------------


       The  Index  database is used to store information from a  variety  of
       sources.   The database contains fields for an item name,   category, 
       date, keywords, and several comment fields.

       The Index database is primarily designed for use with file names  and
       descriptions  to  facilitate locating files,  but the  database   may
       potentially  be  used for lists of any types of items.  The  category
       field  is useful to separate items in the database  if more than  one
       type of item is stored.

       The  Index database uses the standard database commands as  described
       in the documentation in the DATABASE COMMANDS section.

       Reports  included  in the Index database include  All  Entry  Detail, 
       Current Entry Detail, Keyword Match, and Single Category.   Note that
       all reports will print in the current database order.




































                                      - 39 -


                                   MENU COMMANDS
                                   -------------

       The  MENU  commands are used to manipulate the  user-defined  program
       menus.   User menus consist of menu titles, commands to execute,  the
       directory  paths  from  which  to  execute  commands,   and  optional
       passwords.   The menu entries are created and modified with  the  ADD
       and  CHANGE commands described below.   Up to 30 menu entries may  be
       defined for programs.   Each of these menu entries may contain up  to
       10 submenu entries for a total of 300 programs controlled through the
       user-defined menus.  Following is a description of each MENU command.


       ADD

       Used to add new menu entries to the user-defined menus.   When ADD is
       selected,  a  hilite  bar will appear in the center  portion  of  the
       screen.   Use  the arrow keys to select a position for the  new  menu
       entry. When the desired position is hilited, press [Enter].  The menu
       entry can be moved later.   The MENU DETAIL data screen will  appear. 
       The following data fields are available:


             MENU ENTRY TITLE:    This is the name (up to 20
                     characters) that will appear on the main screen. 
                     The first menu title line defines the main entry. 
                     The remaining 10 lines are for submenu entry
                     definition.  A title MUST be entered in the first
                     line, but the rest may be blank.  If submenu
                     titles are entered, it is best to use a different
                     starting letter for each title so they may be
                     selected by using the starting letter only.

             COMMAND TO EXECUTE:  The command entered will be executed
                     when this menu entry is selected on the main
                     program screen.  If the first command is left
                     blank and one or more of the submenu commands are
                     entered, the submenu will be invoked when the
                     corresponding main entry is selected.  Several
                     commands (up to 50 characters) may be entered on
                     one line by separating each command with the
                     vertical bar |.  A } symbol forces prompting for
                     parameters.  If the carat symbol ^ is placed in
                     the command string, Point & Shoot will not resume
                     after the command is executed.


                                   !!!!  IMPORTANT  !!!!

                     If  a  batch file is specified as the  command  to
                     execute,  the last line of that batch file must be 
                     "PS"  so that Point & Shoot will resume after  the
                     command is complete.



                                      - 40 -


             APPLICATION PATH:   When moving through each of the menu
                     title or command fields, the directory path for
                     the current menu line will appear in this field. 
                     Different directory paths for each menu and
                     submenu entry may be defined.  If no directory
                     paths are specified, the root directory will be
                     used.  If a directory path is not specified for a
                     submenu entry, the path specified for the main
                     entry is used.  [F7] displays the directory tree.

             APPLICATION PASSWORD:  The [F3] key sets or changes
                     passwords.  Different passwords may be specified
                     for each menu and submenu entry.  If a password is
                     specified and PROTECTION is enabled (see SETUP),
                     users will be required to enter the password for
                     access.  See PROTECTION & USAGE for details.

       In  addition,  [F5]  allows deletion of a menu entry  line  and  [F6]
       allows  two  lines to be switched.  When the menu has  been  defined,
       [F10] will save the entry.  [Esc] aborts changes.


       CHANGE

       Used  to change the specifications for an existing menu entry.   When
       CHANGE is selected, a hilite appears on the first defined menu entry. 
       The  arrow  keys  and [Enter] are used to select the  menu  entry  to
       change.  Editing of this screen is the same as for the ADD command.


       DELETE

       Used  to  delete  a menu entry.  When DELETE is  selected,  a  hilite
       appears on the first defined menu entry.   The arrow keys and [Enter]
       are used to select the menu entry to delete.


       EXCHANGE

       Used  to  exchange the position of menu entries.   When  EXCHANGE  is
       selected,  the first defined menu entry is hilited.   The arrow  keys
       and [Enter] are used to select two menu entries to exchange.


       MOVE

       Used to move an existing menu entry to a new location.   When MOVE is
       selected,  the first defined menu entry is hilited.   The arrow  keys
       and [Enter] are used to select the menu entry to move and the desired
       new location.


       UPGRADE

       Updates previous versions of the menu file to the current version.

                                      - 41 -


                                       SETUP
                                       -----


       The  SETUP  command is used to establish the  configuration  for  the
       program.  Available options in SETUP include:


             COLORS: If operating with a color monitor, the program
                     colors may be selected.  Only the background, low
                     text, normal text, headline, and help line colors
                     may be changed.  A sample screen is shown to
                     assist in color selection.  The [up/down arrow]
                     keys select a color to modify, and the [left/right
                     arrow] keys choose a color.  The new colors will
                     take effect when [F10] is pressed to leave SETUP.

             BEEPER ON?:  If "Y", the computer's beeper will sound on
                     errors and other places within the program.

             HOURLY CHIME?:  If "Y", the computer's beeper will sound
                     when the time reaches the hour mark.

             EDITOR BACKUPS?:  If "Y", when files are edited with the
                     FILE EDIT command, the editor will make backups
                     (.BAK files) if a file is saved while editing.  If
                     "N", no backups will be made.  This works with the
                     built-in editor only.

             MOUSETRAP?:  Setting MOUSETRAP to "Y" allows use of a
                     mouse if one is available.  If a mouse is not
                     available, this setting has no effect.  (See the
                     section on USING A MOUSE in this documentation).

             TEXT EDITOR NAME:  If a text editor name is entered here,
                     that editor will be used in place of the built-in
                     text editor when using the FILE EDIT command.

             DISK DRIVE USAGE:  Determines the disk drives available on
                     your computer for directory tree scanning.

             PROTECTION ENABLED?:  This option will enable menu
                     passwords, user logons, and user access privilege
                     checks.

             USAGE LOG ENABLED?:  This option will force user logons. 
                     Whenever a user runs a menu item, logs on or off,
                     or uses the TREE GOTO command, their activity will
                     be logged.

             MAIN MENU TITLE:   This name will appear on the main
                     program screen and is strictly for aesthetic
                     purposes.


                                      - 42 -


                                   TREE COMMANDS
                                   -------------


       IMPORTANT:   ORIGIN AND TARGET DIRECTORIES SHOULD ALWAYS BE  SELECTED
       BEFORE  USING FILE COMMANDS!!!   IF THE FLOPPY DISK IS  CHANGED,  THE
       ORIGIN OR TARGET COMMAND IN THE TREE COMMANDS MUST BE USED TO  RE-LOG
       THE DISK, OTHERWISE THE FILE DISPLAY WILL BE INCORRECT.


       The  TREE  commands  provide a comprehensive  set  of  functions  for
       subdirectory manipulation.  When TREE is selected from the main menu,
       a  dual  display  screen will appear.  The left half  of  the  screen
       displays a list of files and the right half of the screen displays  a
       graphic directory tree of the hard disk.

       The FILE and TREE commands work in concert.   The file list shown  is
       always  for  the directory (or floppy disk) marked on  the  directory
       tree  with an "O"  denoting Origin.   The FILE and TREE sides of  the
       screen  may  be selected with TREE or FILE commands,  or  [right/left
       arrow]  keys.   The  [Enter] key will select  the  currently  hilited
       directory as the ORIGIN.


       A&B

       Adds floppy disk subdirectories (if any) to the graphic tree display.


       COLLECT

       Rereads  the directory tree from the hard disk.   Usually it  is  not
       necessary to use this command.  However,  directories are created  or
       removed while outside of Point & Shoot if in DOS or another  program,
       Point & Shoot will not know that the directory structure has  changed
       unless COLLECT is used.  If the tree does not show all drives,  check
       the DISK DRIVE USAGE option in SETUP for proper drive indication.


       DELETE

       Deletes  the  currently hilited directory.   Directories  with  child
       directories  or  those with files may not be removed.   No  prompting
       occurs before the directory is deleted.  If a directory is accidently
       deleted, it may be recovered using the TREE UNDELETE command.


       FILE

       Moves to the FILE commands (same as left arrow).






                                      - 43 -


       GOTO

       Immediately  exits Point & Shoot and moves to the directory that  was
       hilited.   A message will remain on the screen reminding the user  to
       type PS to return to Point & Shoot.   If the drive is other than  the
       drive  in which Point & Shoot resides,  the message will  remind  the
       user to change drives before returning to Point & Shoot.   NOTE:  the
       neccessity  to  change drives on a multiple hard disk system  may  be
       avoided by modifying the PS.BAT file to always change to the Point  &
       Shoot drive.  For instructions, refer to the QUICK START GUIDE.


       HIDE

       Hides  the currently hilited directory.   The directory name will  be
       masked with asterisks to show that it is hidden.    Point & Shoot can
       find these hidden directories,  but they will be hidden from the  DOS
       DIR  command.    If the directory is already hidden,  then  the  HIDE
       command will unhide it.  If protection is enabled, a hidden directory
       cannot be selected as the Origin or Target.


       MAKE

       Used  to  make  a  new  directory  following  the  currently  hilited
       directory.   When MAKE is selected, the program will prompt for a new
       directory name.  Directory names are the same format as file names.


       ORIGIN

       Selects  the  currently  hilited directory as  the  ORIGIN  for  FILE
       commands.  [Enter] serves the same purpose as ORIGIN.


       PRINT

       Used  to  print the directory tree, optionally with a list  of  files
       after each directory.   A summary of file sizes and numbers of  files
       will be given for each directory and for the entire tree.


       RENAME

       Used  to  change the name of the currently  hilited  directory.   The
       program  will  prompt  for  a new directory  name.   As  with  files,
       duplicate directory names are not allowed.


       SORT

       Forces  a  resorting of the directory tree.   This  command  is  only
       necessary after renaming a directory or making a new directory.   The
       program  will  automatically sort the directory tree  when  the  user
       leaves the TREE commands to return to the main menu.

                                      - 44 -

       TARGET

       Selects the currently hilited directory as the TARGET.


       UNDELETE

       The UNDELETE command is used to recover previously deleted files  and
       subdirectories.


            NOTE:  IT IS IMPORTANT TO ATTEMPT RECOVERY AS SOON AS
            POSSIBLE AFTER A FILE OR DIRECTORY IS DELETED.


       When a file or directory is deleted, the disk space used by that file
       or  directory  is  not actually overwritten  until  another  file  or
       directory is created or expanded.   Until one of these events occurs,
       MOST files and directories may be recovered.

       When  UNDELETE  is selected,   the Origin directory is  examined  for
       files and subdirectories that have been deleted.   If any are  found,
       they  will  appear in file list with the first character shown  as  a
       question mark.  DOS changes the first letter when a file or directory
       is deleted.

       Files  marked with an asterisk MAY be fully recoverable but there  is
       no  guarantee.    Files without the asterisk have been  partially  or
       completely  overwritten.   Pressing  "U"   will cause the program  to
       attempt to undelete the currently hilited file.

       The Verify option causes the program to show each cluster of data and
       ask for verification.  This option is useful on partially overwritten
       files  to determine whether the selected cluster is the correct  data
       for the file.  The Verify option has no effect on subdirectories.

       As  with  any file recovery program,   this program must  make   some
       assumptions during file recovery.  Therefore:

            ANY FILE OR SUBDIRECTORY THAT IS  UNDELETED  SHOULD BE
            CHECKED AFTER  RECOVERY USING FILE VIEW OR ANOTHER
            METHOD!!!

       UNDELETE  has  not been checked on all brands of computers  and  hard
       disks,  so  careful  testing  should be done  when  first  using  the
       UNDELETE command.  Above all else, backups of valuable hard disk data
       should  be  current before the first uses of  the  UNDELETE  command. 
       After  the user is satisfied that UNDELETE is  functioning  correctly
       for the host computer, there should be no unexpected problems.

       UNDELETE  is  compatible with all DOS versions from 2.0  to  the  4.0
       series.   Disks  formatted with DOS 4.0 with partitions  larger  than
       32MB are also supported.   Note that because of the structure of  DOS
       directories,  only  the  first  62 files  can  be  recovered  from  a
       deleted/recovered  subdirectory.   If  the  directory  has  not  been
       previously deleted, then all files MAY be recoverable.

                                      - 45 -


                                  USAGE COMMANDS
                                  --------------


       The USAGE commands add password protection,  user access  privileges,
       and  time  logging functions to the Point & Shoot Hard  Disk  Manager
       program.   If the Usage Log has been enabled in SETUP,  users will be
       required to enter a User Id when they run the Point & Shoot Hard Disk
       Manager.   The  User Id is located in the User database.   After  the
       User Id has been verified,  access privileges from the User  database
       will be saved for that user.

       From  that point,  until the user quits from the Point &  Shoot  Hard
       Disk Manager program with the QUIT command,  all system activity will
       be recorded in the Timelog database.  In addition,  whenever the user
       attempts  to use one of the commands found in the Point & Shoot  Hard
       Disk Manager,  their access privileges will be checked before  access
       is allowed.

       Invalid  attempts to access the Point & Shoot Hard Disk  Manager  and
       the user-defined menus will also be recorded in the Timelog  database
       if Usage Logging has been enabled.  (See SETUP.)

       If  the  Protection system is enabled with the SETUP  command,  users
       will be required to enter their password when first logging on.   The
       password is located in the User database.  Users may change their own
       password with the USAGE CHANGE PASSWORD command.

       The Protection system in the Hard Disk Manager also provides password
       protection for the user-defined menu entries.   See the MENU COMMANDS
       section of the documentation.

       If  neither  the Protection nor Usage Log systems  are  enabled,  the
       facilities available through the USAGE command will have no effect.


              NOTE: IF THE USAGE LOG IS ENABLED, USERS WILL NOTICE A
                    LONGER DELAY WHEN RUNNING PROGRAMS FROM THE
                    USER-DEFINED MENUS.  THIS DELAY IS CAUSED BY THE
                    RECORDING OF USAGE LOG ENTRIES IN THE TIMELOG
                    DATABASE.


       Refer  to  the  DATABASE COMMANDS section of  the  documentation  for
       guidelines  on database manipulation commands.   The  USAGE  commands
       include Change Password, Fixup Databases, Time Log Database, and User
       Database.  Each of these commands are covered in detail below.


       CHANGE PASSWORD

       Users  are  allowed  to change their own passwords  with  the  CHANGE
       PASSWORD command.   The user will be prompted for their old password,
       their new password, and verification of the new password.


                                      - 46 -



       FIXUP DATABASES

       Fixup performs two functions.   First, it attempts to rebuild damaged
       databases  by  scanning  the database and  reconstructing  the  index
       files.    Second,  FIXUP  attempts  to  free  unused  disk  space  by
       eliminating  old records previously deleted from the  database.   The
       FIXUP command may be necessary in two situations.

            o  Damage has occurred in one of the databases.  A damaged
               database is indicated if the program aborts while in the
               middle of a database activity.  A message may appear on
               the screen indicating some type of fatal error.

            o  You have deleted many records from a given database. 
               FIXUP will free unused disk space and speed database
               access.

       When FIXUP DATABASES is selected,  a list of databases including  the
       Timelog and User databases will appear.   After the desired  database
       is  selected,  the program will ask if backups of  the  database  are
       current.  The FIXUP operation will then begin.  Three passes are made
       through the database to correct a variety of problems and to condense
       the database.

       It is important that you have a good set of backups before attempting
       FIXUP in case anything goes wrong.

             IMPORTANT:  MAKE SURE YOU DO NoT COPY A CORRUPTED DATABASE
                         ONTO AN OTHERWISE GOOD BACKUP DISK.


       TIMELOG DATABASE

       Moves   to   the  Timelog  database  menu  for   examination   and/or
       modification of the Timelog database.   The Timelog database contains
       entries  that describe the usage activity for the Point & Shoot  Hard
       Disk Manager if user logging has been enabled with the SETUP command.

       The Timelog Database uses all of the standard database commands. (See
       DATABASE  COMMANDS.)   A noted exception is the DELETE  command.  The
       DELETE command in the Timelog Database contains several options:

            Current Record:  Deletes the current Timelog record after
               confirmation.

            Delete Entire Timelog:  Clears the entire Timelog database
               after confirmation.

            Inclusive Dates:  Prompts for start and end dates, then
               deletes all Timelog records within the defined range.

            Selected User Id:  Prompts for a User Id, then deletes all
               Timelog entries containing the selected User Id.


                                      - 47 -



       The Timelog Database contains three reports.   Note that all  reports
       will print in the current database order.

            All Entries Detail:  Prints entire Timelog Database record
               for every user.

            Current Entry Detail:  Prints the entire Timelog Database
               record for a selected user.

            Usage Summary Report:  This report may be printed in
               chronological order, or sorted by user then date.  The
               user will be prompted for User Id, Start date, and End
               date for selective printing.


       USERS

       Moves  to the User Database menu for examination and/or  modification
       of  the  User  database.   The  User  database  contains  user  id's,
       passwords,  user names,  and access privileges to define  which  Hard
       Disk  Manager commands the user may execute.   The access  privileges
       will  only take effect if Protection has been enabled with the  SETUP
       command.

       The  Allowed  Path field of the User database restricts a user  to  a
       single  directory  on the hard disk.  If this field is  completed  by
       using  the [F7] Select Path command, the user defined in that  record
       will  only be able to access the specified directory during TREE  and
       FILE commands.  (Note: access privileges to most of the TREE commands
       should  also  be  restricted to avoid indirect  access  to  the  root
       directory of the hard disk.)

       All  of  the standard database commands (see DATABASE  COMMANDS)  are
       used in the User Database.  The User Database contains three reports. 
       Note that all reports will print in the current database order.


            All Users Detail:  Prints entire User Database record for
               every user.

            Current User Detail:  Prints the entire User Database
               record for a selected user.

            Summary of Users:  Prints a shortened report showing only
               User Id, Name, and Password.


           CAUTION:  DO NOT RANDOMLY CHANGE USER IDS.  REMEMBER, THESE
                     IDS ARE USED IN THE TIMELOG DATABASE, SO IF THEY
                     ARE CHANGED, YOU MAY FIND THAT TIMELOG ENTRIES
                     WILL CONTAIN REFERENCES TO MORE THAN ONE USER ID
                     FOR A SINGLE USER.



                                      - 48 -

                            VENDOR DISTRIBUTION REQUEST



       Complete this form and return,  with a current copy of your  catalog,
       to:

                         Applied Micro Systems Technology
                                   P.O. Box 1596
                                    Welch Ave.
                                Ames, Iowa  50010.


       We  request  permission  to distribute the Point &  Shoot  Hard  Disk
       Manager and agree to abide by the ASP VENDOR GUIDELINES given below.


       Name      __________________________________________________

       Company   __________________________________________________

       Address   __________________________________________________

                 __________________________________________________

                 __________________________________________________

       Phone     (       ) _______________________


       Signature & Date:  _________________________________________


       ---------------------------------------------------------------------


             ASSOCIATION OF SHAREWARE PROFESSIONALS VENDOR GUIDELINES



       VENDOR ADVERTISING
       ------------------

       All  vendor advertisements that offer Shareware for sale and  list  a
       price, offer Shareware as a promotion for any commercial venture,  or
       use Shareware as an enticement for the user to pay for any product or
       service  must  state that "Shareware programs  are  copyrighted,  and
       require  additional payment to the authors if used regularly".   This
       explanation  must immediately follow the price (including  "free"  if
       used) or be tied to the price with an asterisk.







                                      - 49 -


                             VENDOR GUIDELINES (cont.)


       VENDOR CATALOGS
       ---------------

       Approved vendors will identify an ASP member's programs with an "ASP"
       notation  and an explanation such as:  "ASP indicates the program  is
       being  actively  supported by a programmer who has agreed  to  comply
       with  the standards of programming and support of the Association  of
       Shareware Professionals."

       Approved vendors will make an attempt to educate users on the  nature
       of Shareware.  A suggested wording to be placed in the catalog is:

            "Charges  made by us are a distribution fee paid to us  and
            do not include the cost of the program itself.  None of the
            fees paid to us go to the programs'  authors.   Some of the
            programs are Shareware.   The principle behind Shareware is
            that users should have the opportunity to try out  software
            before  paying  for  it and that those  that  use  software
            should support it with payments.   Some Shareware  programs
            allow  a fixed length trial period,  others  an  indefinite
            trial  period.   Some  programs request  a  payment,  while
            others  make it a requirement.   This payment provides  you
            with various rights and benefits, depending on the program. 
            Some programs only give you the legal right to continue  to
            use the software while others provide printed documentation
            and/or higher levels of service."


       VENDOR DISTRIBUTION
       -------------------

       Approved  vendors  will respect the copyright  and  all  distribution
       restrictions made by individual authors,  even if those  restrictions
       are not specifically covered in this document.  Approved vendors will
       not  claim to be selling the programs and will explain that  the  fee
       charged  is a copying/handling fee (none of which goes to the  author
       of  the program).   A written notice to this effect will be  provided
       with  all  Shareware programs shipped.   If  the  vendor  distributes
       Shareware  in  pre-packaged  wrappers,  this notice must  be  on  the
       OUTSIDE (visible) part of the package.

       Approved vendors will not change the contents of or delete ANY  files
       supplied  with the program.   Vendors may make small additions  which
       are  designed to assist or provide a service to the user,  but  these
       additions  must be easily identifiable and end-users must be  allowed
       to delete the additions if they want to.

       Approved  vendors agree to distribute the most recent versions of  an
       ASP  member's programs which have been made available to them by  the
       author.   Approved vendors also agree to remove a program from  their
       library when requested by the author to do so.


                                      - 50 -


                                 REGISTRATION FORM
                                 -----------------


       PROGRAM:   Point & Shoot Hard Disk Manager 2.0

       SERIAL #:  _______________________


                         Applied Micro Systems Technology
                             P.O. Box 1596, Welch Ave.
                                 Ames, Iowa  50010


       Name      __________________________________________________

       Company   __________________________________________________

       Address   __________________________________________________

                 __________________________________________________

                 __________________________________________________

       Phone     (       ) _______________________



       Payment   $_______   $45 for full registration, printed
                                documentation and user support.
                                (No cash please.) IA add 4% tax.


       Payment Method:  ___Check   ___Money Order   ___VISA   ___MC

       VISA/MC #:  ____________________________  Exp. Date: _______

       Name on card (print):  _____________________________________

       Authorized Signature:  _____________________________________


       Where did you hear about Point & Shoot? ____________________


       Comments  __________________________________________________

                 __________________________________________________

                 __________________________________________________

                 __________________________________________________

                 __________________________________________________


                                      - 51 -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0930

     Volume in drive A has no label
     Directory of A:\

    FILES    TXT      2450  12-27-88   3:25p
    INSTALL  BAT       636   1-09-89  11:05a
    PAS      EXE    154736   1-30-89   8:58p
    READ     ME       2562  12-20-88   1:16a
    UNDO     EXE     12688  12-27-88   2:41p
    PASAUX   ARC    151368   1-27-89   2:59p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       925   1-01-80   7:36a
    FILE0930 TXT      1777   9-13-90   3:53p
            9 file(s)     327182 bytes
                           30720 bytes free
