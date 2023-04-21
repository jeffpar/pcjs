---
layout: page
title: "PC-SIG Diskette Library (Disk #1188)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1188/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1188"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POINT & SHOOT BACKUP/RESTORE"

    Finally a program that makes backing up your hard disk so simple you'll
    wonder why you didn't buy POINT & SHOOT BACKUP/RESTORE sooner.
    
    POINT & SHOOT BACKUP/RESTORE is a companion program for the POINT &
    SHOOT HARD DISK MANAGER (PC-SIG disk #930) but can also be used as a
    stand-alone product.  It provides fast, easy backups of your hard disk
    data to floppy disks. Your involvement is minimized in the backup and/or
    restore process.  If you own a hard disk, POINT & SHOOT BACKUP/RESTORE
    is a necessity.
    
    POINT & SHOOT BACKUP/RESTORE currently supports the following functions:
    
    ~ Up to 10 user-defined backup configurations, each of which may contain
    a list of up to 10 subdirectory backup sources.  Each backup source
    directory may include trailing directories for complete flexibility in
    backup definitions
    
    ~ Each backup definition allows selection of matching file specs,
    modified files only, optional disk formatting and optional file
    compression during the backup process.  A graphic directory tree display
    assists in the selection of backup source directories
    
    ~ Files remain intact on backup disks (except when disk boundaries must
    be crossed, or compression is used)
    
    ~ Required number of backup disks are automatically calculated
    
    ~ Restoration options include source drive, restoration to other than
    the original path, prompts for duplicate or modified files, and
    selective file restoration.  Again, a graphic directory tree assists in
    selection of restoration paths and files to restore
    
    ~ Configuration options include colors, an hourly chime, and drive
    designations
    
    ~ Backup speeds approach 1 Megabyte per minute with 1.2 MB or 1.44 MB
    disks, 0.5 Megabyte per minute with 360K or 720K disks.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.TXT

{% raw %}
```

POINT & SHOOT BACKUP/RESTORE REVISION HISTORY


Version 1.0 - June 1988
-----------------------

Original version of the program released


Version 2.0 - May 1990
----------------------

Revised program SETUP to match drive specification of version 2.0 of the
Point & Shoot Hard Disk Manager.  Program now allows use of external
floppy disk drives with letters higher than B and can be executed from
any drive or directory.

Improved disk formatting routines

Increased directory tree capacity to 255 entries

Added file compression option (approx. 50% average compression ratio)

Enhanced backup speed with direct format/write loop.  Backup approaches
1 megabyte per minute on 1.2MB or 1.44MB disks.

Added file selection list on restoration for easy single file restorations.

Added ability to make subdirectories during restoration if files are
restored to other than the original path to allow user to have complete
control over the structure of the hard disk to which files are restored.

Enhanced error detection/recovery

Added single file compression/decompression routines to assist
in reconstruction of files outside of the restore process.

Added parameter option to immediately move into and execute any one
of the 10 backup configurations:  PASBR 1..10

Revised and enhanced program documentation
```
{% endraw %}

## FILE1188.TXT

{% raw %}
```
Disk No: 1188                                                           
Disk Title: Point & Shoot Backup/Restore                                
PC-SIG Version: S2                                                      
                                                                        
Program Title: Point & Shoot Backup/Restore                             
Author Version: 2.0                                                     
Author Registration: $35.00                                             
Special Requirements: 320 K RAM, hard drive, and one floppy drive.      
                                                                        
Finally a program that makes backing up your hard disk so simple you'll 
wonder why you didn't buy POINT & SHOOT BACKUP/RESTORE sooner.          
                                                                        
POINT & SHOOT BACKUP/RESTORE is a companion program for the POINT &     
SHOOT HARD DISK MANAGER (PC-SIG disk #930) but can also be used as a    
stand-alone product.  It provides fast, easy backups of your hard disk  
data to floppy disks. Your involvement is minimized in the backup and/or
restore process.  If you own a hard disk, POINT & SHOOT BACKUP/RESTORE  
is a necessity.                                                         
                                                                        
POINT & SHOOT BACKUP/RESTORE currently supports the following           
functions:                                                              
                                                                        
~ Up to 10 user-defined backup configurations, each of which may contain
a list of up to 10 subdirectory backup sources.  Each backup source     
directory may include trailing directories for complete flexibility in  
backup definitions                                                      
                                                                        
~ Each backup definition allows selection of matching file specs,       
modified files only, and optional disk formatting during the backup     
process.  A graphic directory tree display assists in the selection of  
backup source directories                                               
                                                                        
~ Files remain intact on backup disks (except when disk boundaries must 
be crossed)                                                             
                                                                        
~ Required number of backup disks are automatically calculated          
                                                                        
~ Restoration options include source drive, restoration to other than   
the original path, prompts for duplicate or modified files, and         
selective file restoration.  Again, a graphic directory tree assists in 
selection of restoration paths                                          
                                                                        
~ Configuration options include colors, an hourly chime, and last drive 
designation                                                             
                                                                        
~ Supports 360K and 1.2MB 5-1/4", 720K and 1.44MB 3-1/2" floppy disks   
                                                                        
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
--------------------------------------------------------------------------
      POINT & SHOOT BACKUP/RESTORE 2.0  --  BY AMST (MEMBER ASP)
--------------------------------------------------------------------------
POINT & SHOOT BACKUP/RESTORE IS A COMPANION PROGRAM FOR THE POINT & SHOOT
HARD DISK MANAGER BUT CAN ALSO BE USED AS A STAND-ALONE PRODUCT.  POINT
& SHOOT BACKUP/RESTORE IS DESIGNED TO PROVIDE FAST, EASY BACKUPS OF YOUR
HARD DISK DATA TO FLOPPY DISKS.  USER INVOLVEMENT IS MINIMIZED IN THE
BACKUP AND/OR RESTORE PROCESS.  IF YOU OWN A HARD DISK, POINT & SHOOT
BACKUP/RESTORE IS A NECESSITY.

POINT & SHOOT BACKUP/RESTORE CURRENTLY SUPPORTS THE FOLLOWING FUNCTIONS:

     o  UP TO 10 USER-DEFINED BACKUP CONFIGURATIONS, EACH OF WHICH MAY
        CONTAIN A LIST OF UP TO 10 SUBDIRECTORY BACKUP SOURCES.  EACH
        BACKUP SOURCE DIRECTORY MAY INCLUDE TRAILING DIRECTORIES FOR
        COMPLETE FLEXIBILITY IN BACKUP DEFINITIONS.

     o  EACH BACKUP DEFINITION ALLOWS SELECTION OF MATCHING FILE SPECS,
        MODIFIED FILES ONLY, OPTIONAL DISK FORMATTING DURING THE BACKUP
        PROCESS, AND OPTIONAL FILE COMPRESSION.  A GRAPHIC DIRECTORY TREE
        DISPLAY ASSISTS IN THE SELECTION OF BACKUP SOURCE DIRECTORIES.

     o  FILES REMAIN INTACT ON BACKUP DISKS (EXCEPT WHEN DISK BOUNDARIES
        MUST BE CROSSED, OR WHEN FILE COMPRESSION IS USED).

     o  REQUIRED NUMBER OF BACKUP DISKS AND TIME IS AUTOMATICALLY CALCULATED.

     o  RESTORATION OPTIONS INCLUDE SOURCE DRIVE, RESTORATION TO OTHER
        THAN THE ORIGINAL PATH, PROMPTS FOR DUPLICATE OR MODIFIED FILES,
        AND SELECTIVE FILE RESTORATION.  AGAIN, A GRAPHIC DIRECTORY TREE
        ASSISTS IN SELECTION OF RESTORATION PATHS AND A FILE LIST AND
        DIRECTORY TREE ALLOW QUICK SELECTION OF FILES TO RESTORE.

     o  COMPRESSION ROUTINES ALLOW COMPRESSION/DECOMPRESSION OF SINGLE
        FILES USING A FILE LIST AND DIRECTORY TREE.

     o  CONFIGURATION OPTIONS INCLUDE COLORS, AN HOURLY CHIME, AND DRIVE
        DESIGNATIONS.

     o  SUPPORTS 360K AND 1.2MB 5-1/4", 720K AND 1.4MB 3-1/2" FLOPPY DISKS.

     o  BACKUP SPEED APPROACHES 1 MB PER MINUTE WITH 1.2MB and 1.44MB DISKS.

     o  BACKUPS MAY BE AUTOMATICALLY EXECUTED FROM THE COMMAND LINE.


POINT & SHOOT BACKUP/RESTORE REQUIRES THE FOLLOWING HARDWARE AND SOFTWARE
TO OPERATE CORRECTLY:

     o  IBM OR 100% COMPATIBLE COMPUTER

     o  320K MINIMUM MEMORY

     o  A HARD DISK AND 1 FLOPPY DISK

     o  MS-DOS VERSION 2.0 OR GREATER

     o  COLOR/GRAPHICS, MONOCHROME, EGA OR VGA DISPLAY ADAPTOR


THE FILES CONTAINED ON THE DISTRIBUTION DISK ARE:

CHANGES   TXT   REVISION HISTORY
FILES     TXT   THIS FILE
INSTALL   BAT   HARD DISK INSTALLATION PROGRAM
PASBR     EXE   THE POINT & SHOOT BACKUP/RESTORE PROGRAM
PASBRDOC  TXT   PROGRAM DOCUMENTATION
READ      ME    LAST MINUTE CHANGES AND INSTALLATION INSTRUCTIONS

```
{% endraw %}

## PASBRDOC.TXT

{% raw %}
```





                          POINT & SHOOT BACKUP/RESTORE 2.0


                               Copyright (C) 1987-90
                                All Rights Reserved

                         Applied Micro Systems Technology
                                  Kurt H. Diesch
                   Member, Association of Shareware Professionals

                             Revised:   April 20, 1990



          Point & Shoot Backup/Restore is a hard disk backup and restoration
          program designed for IBM Personal Computers and  100% compatibles. 
          Applied  Micro Systems Technology reserves the  COPYRIGHT to  this 
          program  and  all   related  materials.  The  user  is  granted  a 
          non-exclusive   license to  use  the  program  and  is  encouraged
          to  pay for the program if it is found to be useful.   Payment  of
          the    $35  registration  fee  will  entitle  the  user  to   full 
          registration   including printed documentation and  user  support. 
          Government  and business entities may not use the program  without
          paying the full registration fee.     Please register your program
          with the form included at the end of the documentation or by using
          the  [Alt-P]  command within the program to print  a  registration
          form.  REMEMBER: Shareware is not free! Send payments to:


                          Applied Micro Systems Technology
                              P.O. Box 1596, Welch Ave. 
                                 Ames, Iowa  50010


          The  user is also granted permission to make unlimited  copies  of
          the  program and to distribute those copies as long as no  fee  is
          charged  for the program.   A duplication charge not to exceed  $5
          may be collected.

          Applied  Micro  Systems  Technology  specifically  disclaims   all
          warranties,  expressed or implied,  including but not limited  to,
          implied   warranties  of  merchantability  and  fitness  for   any
          particular  purpose.   In  no event shall  Applied  Micro  Systems
          Technology  be  liable  for  any  loss  of  profit  or  any  other
          commercial   damage,   including  but  not  limited  to   special,
          incidental, consequential or other damages.



                  MEMBER - ASSOCIATION OF SHAREWARE PROFESSIONALS


          The author of this program is a member of ASP and has agreed to
          comply with its standards:

          Programming standards-
            -  The program meets ASP's definition of Shareware.
            -  The program has been thoroughly tested by the author and
               should not be harmful to other files or hardware if used
               properly (although ASP cannot warrant this; therefore, the
               user should take normal precautions in trying new software).

          Documentation standards-
            -  Sufficient documentation is provided to allow the average
               user to try all major functions of the program.
            -  The program author has explained the Shareware concept in a 
               professional and positive manner.

          Support standards-
            -  The program author will respond as described in the
               documentation to people who send registration payments.  At a
               minimum, the author will send an acknowledgement of payment.
            -  The author will respond to written bug reports from
               registered users when the user provides a self-addressed,
               stamped envelope (some authors will respond by phone, but
               this is not an ASP requirement).
            -  Incompatibilities with other software or hardware, major or
               unusual program limitations, or known problems are noted in
               the documentation that comes with the shareware version of
               the program.

          General-
            -  The author keeps his/her membership in ASP current.
            -  The author recognizes that any user may appeal to ASP for any
               unresolved dispute that arises.


          If you feel that the author has not complied with these  standards
          in some manner or if you register the program with the author  and
          subsequently  have  any disputes with the author which  cannot  be
          resolved, please write the ASP at:


                         Association of Shareware Professionals
                                    PO Box 5786
                                Bellevue, WA  98006


          While ASP cannot warrant programs nor the actions of members,  ASP
          will  do  what  it  can  to assure  that  all  authors  who  claim
          membership  comply with ASP standards.   These standards  are  the
          assurance  of  quality  and support that you  will  get  when  you
          register Shareware produced by ASP members.



                                    SHAREWARE


          To promote better understanding of the shareware concept,  ASP has
          developed the following definition of Shareware:

               Shareware  distribution  gives  users a  chance  to  try
               software  before  buying it.   If you  try  a  Shareware
               program  and  continue using it,  you  are  expected  to
               register.  Individual programs differ on details -- some
               request  registration  while  others  require  it,  some
               specify a maximum trial period.  With registration,  you
               get anything from the simple right to continue using the
               software to an updated program with printed manual.

               Copyright  laws apply to both Shareware  and  commercial
               software,  and the copyright holder retains all  rights,
               with   a  few  specific  exceptions  as  stated   below.
               Shareware  authors  are accomplished  programmers,  just
               like  commercial  authors,   and  the  programs  are  of
               comparable  quality.  (In  both cases,  there  are  good
               programs  and bad ones!)  The main difference is in  the
               method of distribution.   The author specifically grants
               the right to copy and distribute the software, either to
               all  and  sundry or to a specific group.   For  example,
               some   authors  require  written  permission  before   a
               commercial disk vendor may copy their Shareware.

               SO,  Shareware is a distribution method,  not a type  of
               software. You should find software that suits your needs
               and  pocketbook,  whether it's commercial or  Shareware. 
               The  Shareware system makes fitting your  needs  easier,
               because  you  can try before you buy.  And  because  the
               overhead is low, prices are low also.  Shareware has the
               ultimate  money-back guarantee -- if you don't  use  the
               product, you don't pay for it.



                                TABLE OF CONTENTS
                                -----------------

          QUICK START GUIDE   ...............................    1

          INTRODUCTION   ....................................    2

          INSTALLATION   ....................................    4

          GENERAL OVERVIEW   ................................    5

          MAIN MENU COMMANDS   ..............................    7
             Backup   .......................................    7
             Compression   ..................................    7
             Restore   ......................................    7
             Setup   ........................................    7
             Quit   .........................................    7

          BACKUP COMMANDS   .................................    8
             Backup   ......................................     8
             Calculate   ....................................    9
             Delete   .......................................   10
             Format   .......................................   10
             Update   .......................................   11

          COMPRESSION COMMANDS   ............................   13

          RESTORE COMMANDS   ................................   14
             Restore   ......................................   14
             Update   .......................................   16

          SETUP   ...........................................   17

          EXAMPLES & BACKUP STRATEGY   ......................   18

          REGISTRATION FORM   ...............................   19




                                QUICK START GUIDE
                                -----------------


          IF YOU ARE NOT AN EXPERIENCED USER, YOU WILL DO WELL TO SKIP  THIS
          SECTION AND READ THE DOCUMENTATION BEFORE USING THE PROGRAM!


          If  you are an experienced computer user,  you may use this  quick
          start  guide to install and run the Point &  Shoot  Backup/Restore
          program.    Most  of  the  commands  found  in  the  program   are
          self-explanatory,  and  you can refer to the  documentation  later
          when you have questions.

          To install Point & Shoot Backup/Restore,  copy the PASBR.EXE  file
          to  a subdirectory of your choice on your hard disk.   Modify  the
          PATH  command in your AUTOEXEC file appropriately.   When you  run
          the  program for the first time, use the SETUP command  to  define
          your disk drives.

          The  only  tricky  part  of the program is  found  in  the  BACKUP
          section.   When  you modify the backup configurations,  place  the
          cursor on any one of the FILE SEARCH lines and use the [F7] key to
          select a subdirectory for backup.   If you set the INCLUDE  TRAILS
          option to "Y",  all child directories following the BACKUP  SOURCE
          PATH you selected will be included in the backup.  All 10 lines of
          each  backup configuration may define different directories,  file
          specifications  and  drives,  giving you a lot of  flexibility  in
          defining  your  backup.   You may run backups  directly  from  the
          command  line  by  entering  PASBR  x   where  x  is  the   backup
          configuration number you wish to execute.

          Please  note  that the fastest form of backup is  on  1.2MB  5.25"
          disks  or 1.44MB 3.5"  disks,  without formatting or  compression. 
          Speeds  for these backups will approach 1 MB of data  per  minute. 
          Other   disk  sizes  backup  approximately  1/2  MB  per   minute. 
          Formatting  is  automatically performed if the disk  used  is  not
          formatted,  so  you can potentially leave the  FORCE  DISK  FORMAT
          option off.   Compression adds significantly to the time  required
          for a backup, but will compress files by approximately 50%.

          An  index of all files backed up is kept on the last backup  disk. 
          If you elect to restore selected files,  a file list and directory
          tree  will  allow  you to quickly select the  files  you  wish  to
          restore.   Files  may  be optionally  restored  to  drives  and/or
          directories  other  than where they originally existed.   You  can
          also manually create directories during the restoration process.

          The  COMPRESSION  command  allows you to  compress  or  decompress
          individual files.  This is also aided by a file list and directory
          tree.   The  compressed  files are a  special  AMST  format  which
          defaults to an ".APK" extension.  Currently, a compressed file may
          only contain a single file.   Future versions of the program  will
          provide  more  options in this area,  similar to  other  available
          compression programs.

                                      - 1 -


                                   INTRODUCTION
                                   ------------


          Point & Shoot Backup/Restore is a companion program for the  Point
          &  Shoot Hard Disk Manager but can also be used as  a  stand-alone 
          product.   Point  & Shoot Backup/Restore is  designed  to  provide
          fast,  easy backup of your hard disk data to floppy  disks.   User
          involvement is minimized in the backup and/or restore process.  If
          you own a hard disk, Point & Shoot Backup/Restore is a necessity.

          Point  &  Shoot Backup/Restore currently  supports  the  following
          functions:

               o  Up to 10 user-defined backup configurations, each of which
                  may contain a list of up to 10 subdirectory backup 
                  sources.  Each backup source directory may include 
                  trailing directories for complete flexibility in backup 
                  definitions.  Backups may be run from the command line.

               o  Each backup definition allows selection of matching file 
                  specs, modified files only, optional file compression, and
                  optional disk formatting during the backup process.  A
                  graphic directory tree display assists in the selection of
                  backup source directories.

               o  Files remain intact (DOS readable) on backup disks (except
                  when disk boundaries must be crossed or when the files are
                  compressed). Required number of backup disks and estimated
                  backup time are automatically calculated.

               o  Restoration options include source drive, restoration to 
                  other than the original path, prompts for duplicate or 
                  modified files, and selective file restoration.  Again, a 
                  graphic directory tree assists in selection of restoration
                  paths and a combination file list/directory tree allow
                  easy selection of specific files for restoration.

               o  Self-contained compression/decompression utility uses a
                  file list and directory tree to select files to compress
                  and decompress.  This feature will be expanded in the
                  future to allow multi-file options and other features
                  found in similar programs.  NOTE:  We are not attempting
                  to provide yet another compression program to cloud the
                  compression war issue.  Rather, we are providing an option
                  in this software to work with compressed files created
                  during the backup process using the optional file
                  compression.  We fully support and encourage the use
                  of industry standard compression programs.

               o  Configuration options include colors, an hourly chime, and
                  drive designations.

               o  Supports 360K and 1.2M 5-1/4", 720K and 1.44M 3-1/2"
                  floppy disks.

                                      - 2 -


          Point  & Shoot Backup/Restore requires the following hardware  and
          software to operate correctly:

               o  IBM or 100% compatible computer with 320K minimum memory.

               o  A hard disk and 1 floppy disk

               o  MS-DOS version 2.0 or greater

               o  Color/graphics, monochrome, EGA or VGA display adaptor



          I am more than willing to enhance the program to meet the needs of
          you,  the user.   As you are well aware,  part of the  reward  for
          writing well-received software is monetary.  If you would like  to
          continue to use Point & Shoot Backup/Restore,  a $35 payment  will
          register your copy of the program.   The registration fee entitles
          you  to printed documentation and user support.   Please  use  the
          registration  form  found in this documentation file  to  register
          your copy of the program.




          Special  thanks  go  to  Mike  Davenport  for  his  assistance  in
          developing  the  compression routines utilized  in  this  program. 
          Thanks  also go to John Newlin for his help in improving the  disk
          formatting routines.



























                                      - 3 -


                                   INSTALLATION
                                   ------------

          Following  are  installation instructions.  If  any  problems  are
          encountered,  first  check  your  computer.   If  you  still  have
          problems,   enlist  the  aid  of  someone  who  is  perhaps   more
          knowledgeable with computers than yourself.   A third  alternative
          is to contact AMST.

               1)  Place the Point & Shoot Backup/Restore program disk in 
                   a floppy disk drive.

               2)  Log onto the floppy disk drive containing the backup
                   program and type the following command:

                              INSTALL source: target:

                   where:
                              source   is the floppy drive letter you are
                                       installing from
                              target   is the hard drive letter you are
                                       installing to

               3)  The Point & Shoot Backup/Restore program may now be run
                   from the Point & Shoot Hard Disk Manager (if you own it)
                   or directly from DOS.  If you are NOT running the backup
                   program from the Point & Shoot Hard Disk Manager, you
                   must add "\P&S" to the PATH command in your AUTOEXEC.BAT
                   file.  If you don't have a PATH command in your
                   AUTOEXEC.BAT file, then make the following the first
                   line in your AUTOEXEC.BAT file:

                               PATH \P&S

               4)  To run the program, change to the \P&S directory and type
                   PASBR.


          To print the documentation, change to the \P&S directory and type
          the following command from the DOS prompt:

                              COPY  PASBRDOC.TXT  PRN:

          Another option to print the documentation is to use the File Print
          command in the Point & Shoot Hard Disk Manager file commands.

          Following  is a complete list of the Point & Shoot  Backup/Restore
          program and data files contained on the distribution disk.

               CHANGES.TXT    Revisions of Point & Shoot Backup/Restore
               PASBR.EXE      The Point & Shoot Backup/Restore program
               PASBRDOC.TXT   Point & Shoot Backup/Restore documentation
               FILES.TXT      Description of the files on the disk
               INSTALL.BAT    Point & Shoot Backup/Restore installation file
               READ.ME        Last minute changes to the program

                                      - 4 -


                                 GENERAL OVERVIEW
                                 ----------------

          Point  & Shoot Backup/Restore may be executed in three  ways.   If
          you  own  the  Point  & Shoot Hard Disk  Manager,  Point  &  Shoot
          Backup/Restore may be executed with the BACKUP command from  Point
          & Shoot's main menu (PASBR.EXE must reside in the P&S directory or
          a  directory in the PATH command of your AUTOEXEC.BAT).   You  may
          also  install  the Backup/Restore program as a  user-defined  menu
          item  in the Point & Shoot Hard Disk Manager.   The Point &  Shoot
          Backup/Restore  program  may  also be executed  as  a  stand-alone
          program by entering PASBR from the DOS command line.

          To  automatically  run  a backup configuration,  enter  the  PASBR
          command followed by the desired backup configuration number:

               PASBR  x    (where x is the backup configuration number)

          If you do not provide the optional parameter, the program operates
          by user interaction.   If the parameter is specified,  the program
          will  immediately go into backup mode and will terminate when  the
          backup has finished.

          When Point & Shoot Backup/Restore is run,  the main program screen
          will  appear.   The top line of the screen displays the  name  and
          version  of the program,  a copyright notice and the current  date
          and  time.   The center portion of the screen displays a  detailed
          copyright notice and registration information.  The bottom section
          of the screen displays the program menus with an explanatory  line
          on  the bottom.   If your copy of the program is  unregistered,  a
          flashing  message  will  request that you  register  the  program. 
          Registered copies of the program do not have this message.

          Most  of  the program functions are executed through the  list  of
          commands   shown   in  the  bottom  area  of  the   screen.    The
          [left-arrow],  [right-arrow],  [Space] or  [BackSpace] keys may be
          used to highlight the desired command.   The one line  description
          of  the command shown on the last line of the screen  will  change
          appropriately.   To execute any of the functions,  press the first
          letter of the command.   The command corresponding to the selected
          letter will be immediately executed.   Alternately,  highlight the
          desired command and press the [Enter] key.

          Some commands will invoke another command list.   The name of  the
          current  command  list  is always shown on the left  side  of  the
          command list.  You may move to a previous command list by pressing
          the  [Esc] key.   Each command list also has a QUIT command  which
          will move to the previous command list. In general,  the [Esc] key
          serves to abort any operation or selection.

          To quit the program and return to the operating system (or back to
          the Point & Shoot Hard Disk Manager),  press [Esc] or select  QUIT
          from the Main Menu command list.



                                      - 5 -



          At  many points in the program, you will be entering  or  changing
          information  on the screen.   The procedure is generally the  same
          and  is outlined here.   Differences that occur in this  procedure
          are   covered   in  the  appropriate  detail  sections   of   this
          documentation.

          When entering or updating data screens a flashing "*"  will appear
          on  the  data screen to indicate where your information is  to  be
          entered.   A cursor will also show the current position  within  a
          data field.   (Data fields are the hilighted areas of the screen). 
          Some  or all of the following commands will be available for  data
          entry:

               [left/right arrow]:  Moves the cursor within the current
                                    field.  If the cursor is at the first
                                    position within a field, then the
                                    previous field will be selected.  If the
                                    cursor is at the last position within a
                                    field, then the next field will be 
                                    selected.

               [ctrl-left/right]:   Moves the cursor to the first position
                                    or last character of the field.

               [up/down arrow]:     Selects the previous or next data field
                                    for editing.

               [Enter/return]:      Same as right or down arrow for next 
                                    field.

               [F8]:                Blanks the current data field.

               [Esc]:               Aborts changes made to the data screen
                                    and completes enter/update action.

               [F10]:               Accepts changes made to the data screen
                                    and completes enter/update action.


















                                      - 6 -


                               MAIN MENU COMMANDS
                               ------------------

          The  Main  Menu  is the center of  Point  &  Shoot  Backup/Restore
          activity.   Some of the Main Menu commands move to another command
          list, while others will immediately execute a command.   Following
          is a description of the Main Menu commands.


          BACKUP

          Moves  to the BACKUP menu from which you may perform a  backup  of
          hard disk data to floppy disks.


          COMPRESSION

          Moves to the COMPRESSION screen from which you may compress or
          decompress files.


          RESTORE

          Moves to the RESTORE menu from which you may perform a restoration
          of previous backup disks to your hard disk.


          SETUP

          Moves to the program setup data screen described later.


          QUIT

          Returns to DOS.





















                                      - 7 -


                                 BACKUP COMMANDS
                                 ---------------

          The  Backup  Menu consists of a set of commands that  perform  the
          following functions:

               o  Backup your hard disk using up to 10 different 
                  user-defined backup configurations

               o  Calculate the number of disks required for a selected 
                  backup configuration

               o  Format floppy disks to be used for backup

          Point  & Shoot Backup/Restore performs backups on a file  by  file
          basis with some files crossing disk boundaries.   Extensive  error
          checking is included to provide a high level of backup  integrity. 
          Subdirectories  may be selectively backed up and previous  backups
          may be optionally restored to different subdirectories.   For your
          protection,  Point  & Shoot Backup/Restore will not  back  up  the
          hidden system files found in the root directory of your hard disk.


          BACKUP

          The  BACKUP  command starts the backup process  according  to  the
          displayed  current backup configuration.  See the  UPDATE  command
          for details concerning changes to the backup configuration.

          When the BACKUP command begins, a backup status screen will appear
          to show the progress of the backup including the following:

               Disk:         Current disk number

               Track:        Current track being written to

               Side:         Current side being written to

               File Name:    Path and name of the current backup file

               Comp Size:    Compressed size of file (in bytes)

               File Size:    Size of the current backup file (in bytes)

               # Copied:     Number of bytes of the current file that has
                             been copied

               Comp Total:   Total number of compressed bytes backed up

               Curr Total:   Total number of bytes that have been backed up

               Total Bytes:  Total bytes of files defined for backup

               Bad Sec:      Total bad sectors encountered during backup


                                      - 8 -



               # Files:      Total number of files that have been backup up

               Total:        Total number of files defined for backup

               Comp Ratio:   Average compression ratio

               Perc Done:    Percent of backup that has been completed

               Disk Space:   Remaining space on current backup target disk



          The  program will next instruct you to insert a disk in the  drive
          indicated  by the backup configuration.  Insert a disk  and  press
          [Enter]  to  proceed with the backup.  The backup process  may  be
          aborted at this point by pressing [Esc].   Once the backup process
          begins, it may only be stopped when the prompt for the next backup
          disk appears.

          If the FORCE DISK FORMAT option is selected,  each new backup disk
          will  be formatted before files are transferred.   See the  FORMAT
          command  for details regarding the built-in format program.   With
          or  without the format option, Point & Shoot  Backup/Restore  will
          delete  all files from the target disk before transferring  files. 
          The transfer of files to the backup disk will then begin.

          If  a  file  is to large to fit on a single disk,  Point  &  Shoot
          Backup/Restore  will split the file between two or more disks  and
          mark it as a split file for restoration purposes.  A situation may
          occur  where the target backup disk contains a duplicate  filename
          (when two or more hard disk subdirectories are placed on the  same
          backup  disk).   In this case, Point & Shoot  Backup/Restore  will
          automatically rename the file.   The original name is also  stored
          so  that  the  correct file name will  be  maintained  during  the
          restoration process.

          When  the  backup process is complete,  a message will  appear  to
          indicate  completion.    Make  sure  that  all  backup  disks  are
          correctly  numbered as the restoration process will  require  that
          the disks are restored in sequential order.



          CALCULATE

          CALCULATE calculates the number of disks required for the  current
          backup configuration.   The total number of files,  along with the
          total number of bytes contained in those files, will be displayed. 
          Note  that the correct disk type must be selected prior  to  using
          the CALCULATE command.





                                      - 9 -



          Several  factors  are considered when calculating  the  number  of
          disks required for a backup.  Point & Shoot Backup/Restore  stores
          one special file called PASBRID.DAT on each backup disk, leaving a
          total possible of 111 files for 360K and 720K disks, and 223 files
          for 1.2M and 1.4M disks (a DOS limit).   In addition,  the special
          file  will  reduce the available space (in bytes) of  each  backup
          disk to the following:

               360K   342,016 bytes available

               1.2M   1,193,472 bytes available

               720K   709,632 bytes available

               1.4M   1,437,184 bytes available


          It  should  be  noted  that every file copied  to  a  backup  disk
          requires  a minimum of 1024 bytes for 360K and 720K disks and  512
          bytes for 1.2MB and 1.44MB disks (this is a DOS requirement).  The
          result is that more bytes must be available on a backup disk  than
          the total of the individual file sizes.  CALCULATE takes this into
          account when determining the required number of backup disks.   It
          is  a  good  idea to have several extra disks  available  for  the
          backup session in case a bad disk is encountered.

          CALCULATE  also assumes an average of 50% compression of files  if
          the  compression option is selected in the  backup  configuration. 
          Compression ratios may vary substantially,  depending on the  type
          of file compressed.   EXE and COM files may only be compressed  by
          20% to 30%, while text files, word processing files,  and database
          files  may be compressed by 80% or more.   Just remember that  the
          CALCULATE results may not be accurate if compression is used.

          The Point & Shoot Backup program also stores an index of all files
          backed up on the last backup disk.  This file will be included in
          the disk space and file count of the CALCULATE results.


          DELETE

          DELETE clears the current backup configuration to default entries.


          FORMAT

          The  FORMAT command is used like the DOS FORMAT command to  format
          diskettes.   For  your protection,  the FORMAT command  will  only
          operate  on  floppy  disk  drives.  When  you  select  the  FORMAT
          command,  the  program  will  automatically  initiate  the  format
          process  based on the current backup configuration drive and  disk
          type.  If you have floppy disk drives with letters other than A or
          B, see the SETUP command for instructions on using these drives.


                                      - 10 -



          All  disks formatted with the FORMAT command will be  checked  for
          bad  sectors.   Progress of the format operation will be shown  on
          the screen.   When the format operation is complete, the total and
          available bytes on the formatted disk will be shown.   If any  bad
          sectors are found during the format operation, they will be marked
          bad and excluded from further use.


          UPDATE

          Update modifies the settings for the backup configurations.   Data
          entry  is accomplished according to the commands described in  the
          GENERAL OVERVIEW section of this documentation.

          In  addition to the standard editing commands,  the [F7]  function
          key is used to select backup source paths.   When the cursor is on
          any one of the FILE SEARCH or INCLUDE TRAILS lines,  the [F7]  key
          invokes  the graphic directory tree display from which a path  may
          be  selected  with the [up/down arrow],  [PgUp],  [PgDn],  [Home],
          [End],  and [Enter] keys.   The [Esc] key will abort from the path
          selection process without selecting a path.   Note that the cursor
          will not go to the BACKUP SOURCE PATHS fields.  All path selection
          is  done with the [F7] key.   If the directory tree does not  show
          all of your hard disk drives, see the SETUP command to define your
          drives.

          A  different backup configuration may be selected with the  [PgUp]
          and   [PgDn]   keys.    The  [F10]  key  saves  all   the   backup
          configurations, and [Esc] will cancel changes made.

          Following is a description of the data fields found on the backup
          configuration screen:

               BACKUP CONFIGURATION DESCRIPTION:  A short description of the
                    backup  configuration

               DESTINATION DRIVE:  The floppy disk drive to be used for the 
                    backup

               BACKUP DRIVE TYPE:  The type of the destination drive

               FORCE DISK FORMAT:  Option to format backup disks during 
                    the backup process.  If this option is set to "Y", all
                    disks will be formatted.  If this option is set to "N",
                    the program will detect and format unformatted disks.

               MODIFIED FILES ONLY:  Option to include only files modified 
                    since the last backup

               USE FILE COMPRESSION:  Option to compress disk files during
                    the backup process.  This option significantly slows the
                    backup but will use fewer disks.



                                      - 11 -



          Ten   backup   source  paths  are  available   for   each   backup
          configuration.   Each path line allows for entry of the  following
          data:

               BACKUP SOURCE PATHS:  The directory from which files will be 
                    backed up.  The cursor will not stop in this field, but
                    the [F7] key is used when the cursor is in the FILE 
                    SEARCH or INCLUDE TRAILS fields to invoke a directory
                    tree for path selection.

               FILE SEARCH:  The filename search string to match.   Any
                    string of characters may be entered including ? and *.
                    Only those files matching the FILE SEARCH will be 
                    selected for backup.  Refer to your DOS manual for
                    a discussion of file search strings.

               INCLUDE TRAILS:  Option to include the child subdirectories
                    following the BACKUP SOURCE PATH.  If enabled here and
                    a subdirectory is duplicated in another specification 
                    line, the duplicated subdirectory will be backed up 
                    twice. 


































                                      - 12 -


                               COMPRESSION COMMANDS
                               --------------------


          The  COMPRESSION command is used to compress or decompress  single
          files using the same file format as the compression in BACKUP  and
          the decompression in RESTORE.

          When  you select the COMPRESS command,  a file list and  directory
          tree  will appear on the screen.  If the directory tree  does  not
          show  all of your hard disks,  then refer to the SETUP command  to
          define your drives.

          The [left arrow] and [right arrow] move between the file list  and
          the directory tree.   A "*" will mark the current directory.   The
          file  list will show the files in the current directory sorted  by
          name.   Use the [up arrow], [down arrow], [Home] and [End] keys to
          move  around the file list and directory tree.   The  [Enter]  key
          selects the hilighted directory as the current directory.

          To  compress a file,  hilight the desired file and press  "C"  for
          compress.  A prompt will appear asking for the name to use for the
          compressed  file.   The default file name for compression  is  the
          same  as  the  original file except the extension  is  changed  to
          ".APK".   You may edit the target file name at this point.  If the
          target  file already exists,  you will be asked if it is  okay  to
          replace.   After the file is compressed, it will be shown  on  the
          file list.  The original file is left intact.

          To decompress a file,  hilight the desired file and press "D"  for
          decompress.  Only files that have been compressed with the Point &
          Shoot Backup/Restore program may be decompressed in this  fashion. 
          A  prompt  will  appear  asking  for  the  name  to  use  for  the
          decompressed file.   You may enter any valid DOS filename at  this
          point.  If the target file already exists, you will be asked if it
          is okay to replace.

          More  options will be added to the COMPRESSION command  in  future
          versions of the program.

















                                      - 13 -


                                RESTORE COMMANDS
                                ----------------


          The  Restore Menu consists of commands used to restore files to  a
          hard disk from backups made with the Point & Shoot  Backup/Restore
          BACKUP command.


          RESTORE

          The  RESTORE command starts the restore process according  to  the
          Point & Shoot Restoration Options.   Some of the files on a backup
          disk could be copied to a hard disk with a standard copy  command,
          but files that cross disk boundaries, files that have been renamed
          during  the backup process,  and files that have  been  compressed
          require  the  use  of  Point &  Shoot  Backup/Restore  for  proper
          restoration.   In  general,  it  is best  to  use  Point  &  Shoot
          Backup/Restore for all restoration activity.

          The  Restoration  Options should be checked  for  accuracy  before
          starting the restoration (see UPDATE).  The restore process begins
          by prompting for the first backup disk.  Disks must be restored in
          the  same  order that they were backed up.   If  an  error  occurs
          during  the  restoration  process,  the program  will  attempt  to
          recover from the error and continue with restoration.

          Restoration  may be cancelled when a prompt appears for  the  next
          disk  by  pressing [Esc],  but this action may result  in  partial
          files restored to the hard disk if a file crosses a disk boundary.

          If  restoring  to  a  new subdirectory  (see  UPDATE),  a  graphic
          directory  tree  will  appear for path  selection  each  time  the
          original path changes on the backup disks.   The commands used  to
          select  a  new   path are the same as  with  the  BACKUP  command. 
          Target  subdirectories  may  be  created  during  the  restoration
          process  when  the  directory  tree  appears.   To  create  a  new
          directory,  hilight the directory which will be the parent of  the
          new directory, then press "M" for make.  A prompt will ask for the
          new  directory  name.   Any valid DOS filename may be used  for  a
          subdirectory.   After  you enter the new directory name,  the  new
          directory will appear on the tree.

          If the restoration requires more than one disk,  the program  will
          prompt for additional disks.  During the restoration process,  the
          status  is  displayed  at the bottom of the  screen.   The  status
          display includes the following information:

               Current Disk: The current disk being restored

               File Name:    The original path and file currently in 
                             restoration

               Copy To:      The path and file to restore to


                                      - 14 -



               File Size:    The size (in bytes) of the file being restored

               Total Bytes:  Total number of bytes restored from all disks

               Files:        Total number of files restored from all disks

               Disk Space:   Number of bytes left on the target disk


          Point & Shoot Backup/Restore maintains a record of how many  disks
          were  used  for the backup and will automatically stop  after  the
          last  disk has been restored.  Point & Shoot  Backup/Restore  also
          tracks of the appropriate disk number during restoration and  will
          issue an error message if an incorrect disk is inserted.

          If  the  RESTORE SELECTIVELY option is enabled (see  UPDATE),  you
          will  be  prompted to insert the LAST backup disk  in  the  floppy
          drive.   The  program uses this disk to maintain an index  of  all
          files backed up.   After the program reads the index file,  a file
          list and directory tree will appear on the screen to allow you  to
          select specific files for restoration.

          The [left arrow] and [right arrow] move between the file list  and
          the directory tree.   A "*" will appear next to any files selected
          for  restoration and also next to any directories that contain  at
          least  one file marked for restoration.   All the files backed  up
          will  appear  in  the  file  list,  sorted  by  name  within  each
          subdirectory group.  Use the [up arrow], [down arrow],  [Home] and
          [End]  keys to move around the file list and directory  tree.   As
          you move through the file list, the subdirectory that contains the
          currently hilighted file will be hilighted.

          When  you  are  in  the file list,  the  [Enter]  key  selects  or
          deselects the currently hilighted file for restoration.   The  [+]
          and [-] keys select and deselect all files.   The [Ctrl-PgDn]  key
          selects the current file and moves the cursor to the next file.

          When  you are in the directory tree,  the [Enter] key  selects  or
          deselects all files in the current directory for restoration.  The
          file list will scroll to show files in the selected directory when
          [Enter]  is  used.   The [+] and [-] keys select or  deselect  all
          files for restoration.

          After you have selected the files you wish to restore,  the  [F10]
          key  will  continue  with the restoration process.   You  will  be
          prompted  for the appropriate disks to insert as  the  restoration
          proceeds.








                                      - 15 -



          UPDATE

          Update modifies the data fields in the Restoration Options screen. 
          Data entry is accomplished according to the commands described  in
          the GENERAL OVERVIEW section of this documentation.  The [F10] key
          saves  all the Restoration Options, and [Esc] will cancel  changes
          made.

          Following is a description of the data fields found on the
          restoration options screen:

               RESTORE SOURCE DRIVE:  The floppy disk drive to be used for 
                    the restoration.

               RESTORE TO ORIG. PATH?:  Option to restore backup files to 
                    the directory from which they came, otherwise the 
                    program will prompt for a target directory with a 
                    graphic directory tree.

               PROMPT ON DUPLICATES?:  Option to force prompting if the 
                    restoration encounters a duplicate file name

               PROMPT ON MOD FILES:  Option to force prompting if the
                    restoration encounters a file that has been modified 
                    since the last backup

               RESTORE SELECTIVELY?:  Option to bring a file list and
                    directory tree to the screen to allow selection of
                    specific files for restoration.


























                                      - 16 -


                                      SETUP
                                      -----


          The SETUP command is used to establish the configuration for Point
          & Shoot Backup/Restore.   In SETUP, you can select program  colors
          and other defaults.  Available fields for SETUP include:


               COLORS:        If your computer has a color monitor, you will
                              be allowed to edit the program colors.  Only
                              some of the colors can be set including the
                              background, low text, normal text, headline,
                              and help line.  A sample screen is shown to
                              assist in color selection.  Use the up and
                              down arrow keys to select a color to modify,
                              then use the left and right arrow keys to
                              choose a color.  The new colors will take
                              affect when you quit SETUP.

               BEEPER ON?:    If "Y", the computer's beeper will sound
                              on errors and other places within the
                              program.  Set this to "N" if the beep is
                              not desired.

               HOURLY CHIME?: If "Y", the computer's beeper will sound
                              when the time reaches the hour mark.

               DISK DRIVE USAGE:  Determines the disk drives used on your
                              system for directory tree scanning.  Set each
                              drive letter that your computer supports to
                              "Y".  If you do not set the correct drive
                              letters, the directory tree used in many
                              places in the program will not show all of
                              your disk drives.

               FLOPPY DISK #: Floppy disk drives on MS-DOS computers have
                              a number from 0 to 3 associated with them.
                              Standard numbering is 0=A and 1=B.  This is
                              the default for the program.  Some systems
                              have additional floppy disk drives that may
                              have other letters such as F or G.  If your
                              system has a non-standard configuration of
                              floppy disks, you may have to designate the
                              correct floppy disk number for your drives
                              by entering the appropriate drive letter next
                              to the number for your drive.  These fields
                              must be correctly set for the built-in format
                              feature to operate correctly.







                                      - 17 -


                             EXAMPLES & BACKUP STRATEGY
                             --------------------------


          Proper  backups  of  your valuable hard disk  data  are  extremely
          important.   Hard disks seem to fail at the worst  possible  time.
          Reconstruction  of data is often difficult and expensive,  and  is
          sometimes  impossible.   The Point & Shoot Backup/Restore  program
          will provide safety for your data, but only if you perform backups
          on a regular basis.   Different users will choose different backup
          strategies.    Following   are  some  suggestions  to   use   when
          formulating your backup strategy.

          Always use a rotating set of backup disks.   Alternate the set for
          each backup.  If anything happens to one set, you will always have
          another  (albeit  slightly older) set of backup disks.   A  common
          scheme is to mark one set for Monday,  Wednesday,  and Friday  and
          the other set for Tuesday, Thursday,  and Saturday.   Occasionally
          (perhaps  weekly or monthly) perform a complete hard  disk  backup
          using  another set of disks and store them in a safe  place  (your
          bank or a fireproof safe).

          Always use high quality diskettes when performing a backup.   Your
          data is worth the higher price of a few disks.


          Example 1:  Backup of entire hard disk.

                      MODIFIED FILES ONLY:  N
                      BACKUP SOURCE PATH:   C:\
                      FILE SEARCH:          *.*
                      INCLUDE TRAILS:       Y


          Example 2:  Full backup followed by incremental backups.

                      Use example #1 for first backup.  After that
                      set the MODIFIED FILES ONLY option to "Y" and
                      perform your backups.  ALWAYS USE NEW DISKS
                      when MODIFIED FILES ONLY is set to "Y" because
                      some of your files will only be backed up on
                      prior backup disks.  If you must restore your
                      disks, start at the very first disk and restore
                      them in order.  Newer files will eventually
                      replace older ones.  If the number of backup
                      disks gets too large, start over with a complete
                      backup as shown in Example #1.


          Example 3:  Selected file backup.

                      Set the BACKUP SOURCE PATH and FILE SEARCH fields
                      to restrict the backup to files you wish to back up.



                                      - 18 -


                               REGISTRATION FORM
                               -----------------


          PROGRAM:  Point & Shoot Backup/Restore     VERSION: 2.0

          SERIAL #:  ___________________________ (see program main screen)

                    Applied Micro Systems Technology (AMST)
                    P.O. Box 1596, Welch Ave.
                    Ames, Iowa  50010

          Name      __________________________________________________

          Company   __________________________________________________

          Address   __________________________________________________

                    __________________________________________________

                    __________________________________________________

          Phone     (    ) _______________________


          Write for information on volume discounts and site licenses.


          Payment   $_______   $35 for full registration, printed 
                                   documentation and user support.
                                   (no cash please).

          Payment Method:      ____Check    ____VISA    ____MC

          Credit Card #:  _________________________  Exp. Date _______

          Name on Card:   ____________________________________________

          Auth Signature: ____________________________________________


          Where did you hear about this program?  ____________________


          Comments  __________________________________________________

                    __________________________________________________

                    __________________________________________________

                    __________________________________________________

                    __________________________________________________

                    __________________________________________________

                                     - 19 -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1188

     Volume in drive A has no label
     Directory of A:\

    CHANGES  TXT      1354   4-20-90  10:10a
    PASBR    EXE    141712   5-22-90   1:47p
    PASBRDOC TXT     55555   4-23-90   1:34p
    FILES    TXT      2945   4-22-90   2:01p
    INSTALL  BAT       985   4-30-90   7:36p
    READ     ME       1746   4-17-90   2:13p
    GO       BAT        38  12-09-87   4:29p
    FILE1188 TXT      3849   9-13-90   3:33p
    GO       TXT       728   1-01-80   7:27a
            9 file(s)     208912 bytes
                          109568 bytes free
