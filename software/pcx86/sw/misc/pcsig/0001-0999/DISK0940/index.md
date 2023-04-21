---
layout: page
title: "PC-SIG Diskette Library (Disk #940)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0940/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0940"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POINT & SHOOT HOME MANAGER"

    HOME MANAGER helps you manage the details of operating a home and its
    (sometimes complicated) day-to-day finances.
    
    Create a database of your assets and liabilities, budget and track your
    home finances, print addresses on envelopes (laser printers only) or
    labels, calculate various payments and interest earnings, schedule and
    track maintenance on your home, create a list of things to do, track
    your vehicle maintenance and make lists of general items, names,
    addresses and phone numbers, and your important data.  Print any or all
    of these records.  There is also a built-in calculator and calendar to
    view each month of any year.  Also includes a complete double-entry
    accounting system that is easy enough for beginners yet sophisticated
    enough for small businesses.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.TXT

{% raw %}
```

POINT & SHOOT HOME MANAGER REVISION HISTORY


Version 1.0 - November 1988
---------------------------

Original version of the program released


Version 2.0 - June 1988
-----------------------

Program completely rewritten in Turbo Pascal 4.0.  (Note: this change
makes all versions prior to 2.0 incompatible).  Screens and databases
were redesigned.  New features were added and some were deleted.  See
documentation for details of program features.

```
{% endraw %}

## FILES.TXT

{% raw %}
```
--------------------------------------------------------------------------
      POINT & SHOOT HOME MANAGER 2.0  --  BY AMST (MEMBER ASP)
--------------------------------------------------------------------------
THE POINT & SHOOT HOME MANAGER AROSE FROM DISSATISFACTION WITH AVAILABLE
PROGRAMS TO MANAGE THE DETAILS OF OPERATING A HOME.  THE POINT & SHOOT
HOME MANAGER ENCAPSULATES, WITHIN A SINGLE PROGRAM, THE PRIMARY DATA
MANAGEMENT TASKS NECESSARY IN THE HOME.  THE POINT & SHOOT HOME MANAGER
IS A COLLECTION OF DEDICATED DATABASES FOR COMPLETE HOME BUDGETING,
TRACKING OF HOME MAINTENANCE, HOME INVENTORY AND IMPORTANT RECORD TRACKING,
NAME AND ADDRESS TRACKING, AND VEHICLE MAINTENANCE RECORDKEEPING.  A FULL
FEATURED FINANCIAL CALCULATION SYSTEM IS INCLUDED.  THIS IS NOT SIMPLY A
HOME BUDGETING SYSTEM LIKE SO MANY OTHERS.  THIS IS A COMPREHENSIVE HOME
MANAGEMENT SYSTEM.

POINT & SHOOT HOME MANAGER REQUIRES THE FOLLOWING HARDWARE AND SOFTWARE
TO OPERATE CORRECTLY:

     o  IBM OR 100% COMPATIBLE COMPUTER

     o  320K MINIMUM MEMORY

     o  2 FLOPPY DISKS (BEST WITH HARD DISK)

     o  MS-DOS VERSION 2.0 OR GREATER

     o  COLOR/GRAPHICS, MONOCHROME, EGA OR VGA DISPLAY ADAPTOR


THE FILES CONTAINED ON THE DISTRIBUTION DISK ARE:

CHANGES   TXT   PROGRAM REVISION HISTORY
FILES     TXT   THIS FILE
PASH      EXE   THE POINT & SHOOT HOME MANAGER PROGRAM
PASHDOC   TXT   PROGRAM DOCUMENTATION
PASHACCT  DBD   ACCOUNT DATABASE DEFINITION FILE
PASHGL    DBD   GENERAL LEDGER DATABASE DEFINITION FILE
PASHHOME  DBD   HOME MAINTENANCE DATABASE DEFINITION FILE
PASHINS   DBD   INSURANCE DATABASE DEFINITION FILE
PASHPHON  DBD   PHONEBOOK DATABASE DEFINITION FILE
PASHRECS  DBD   IMPORTANT RECORDS DATABASE DEFINITION FILE
PASHVEH   DBD   VEHICLE MAINTENANCE DATABASE DEFINITION FILE
READ      ME    LAST MINUTE CHANGES AND INSTALLATION INSTRUCTIONS

```
{% endraw %}

## FILES940.TXT

{% raw %}
```
Disk No  940
Program Title: POINT & SHOOT HOME MANAGER version 2.0
PC-SIG version 1.2
 
HOME MANAGER helps you manage the details of operating a home and its
day-to-day finances.
 
HOME MANAGER manages the details of operating a home and its finances. It
can make a database for your assets and liabilities, budget and track your
home finances, print addresses on envelopes (laser printers only) or
labels, calculate various payments and interest for your finances,
schedule and track maintenance on your home, create a general database of
things to do, and track your vehicle maintenance and make databases of
lists of general items, names, addresses and phone numbers, and your
important records. You can print all of these records. There is also a
built-in calculator and calendar to view each month of any year.
 
Some of the chores performed by HOME MANAGER:
 
~ make a database to track your assets and liabilities
 
~ budget and track your home finances
 
~ print addresses on envelopes or labels (this feature works on laser printers
only)
 
~ calculate various payments and interest for your finances
 
~ schedule and track maintenance on your home
 
~ create a general database of things to do
 
~ and track your vehicle maintenance and make databases of lists of general
items, names, addresses and phone numbers, and your important records.
 
You can print all of these records.
 
There is also a built-in calculator and calendar to view each month of any
year.
 
Usage:  Financial and Home Maintenance.
 
System Requirements:  256K memory and two disk drives.
 
How to Start:  Type TYPE READ.ME (press enter).
 
Suggested Registration:  $35.00
 
File Descriptions:
 
CHANGES  TXT  Program revision history.
FILES    TXT  Text file outlining files on this disk.
PASH     EXE  The Point & Shoot home manager program.
PASHDOC  TXT  Program documentation..
PASHACCT DBD  Account database definition file.
PASHGL   DBD  General ledger database definition file.
PASHHOME DBD  Home maintenance database definition file.
PASHINS  DBD  Insurance database definition file.
PASHPHON DBD  Phonebook database definition file.
PASHRECS DBD  Important records database definition file.
PASHVEH  DBD  Vehicle maintenance database definition file.
READ     ME   Last minute changes and installation instructions.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PASHDOC.TXT

{% raw %}
```





                           POINT & SHOOT HOME MANAGER 2.0


                               Copyright (C) 1988
                                All Rights Reserved

                         Applied Micro Systems Technology
                                  Kurt H. Diesch
                   Member, Association of Shareware Professionals

                             Revised:   July 7, 1988



          Point & Shoot Home Manager is a dedicated home management database
          program designed for IBM Personal Computers and  100% compatibles. 
          Applied  Micro Systems Technology reserves the  COPYRIGHT to  this 
          program  and  all   related  materials.  The  user  is  granted  a 
          non-exclusive   license to  use  the  program  and  is  encouraged
          to  pay for the program if it is found to be useful.   Payment  of
          the    $35  registration  fee  will  entitle  the  user  to   full 
          registration   including printed documentation and  user  support. 
          Government  and business entities may not use the program  without
          paying the full registration fee.     Please register your program
          with the form included at the end of the documentation.  REMEMBER:
          Shareware is not free! Send payments to:


                          Applied Micro Systems Technology
                          P.O. Box 1596, Welch Ave. Station
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
               minimum, the author will send an acknowledgment of payment.
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
                             325 118th Ave SE, Suite 200
                                Bellevue, WA  98005


          While ASP cannot warrant programs nor the actions of members,  ASP
          will  do  what  it  can  to assure  that  all  authors  who  claim
          membership  comply with ASP standards.   These standards  are  the
          assurance  of  quality  and support that you  will  get  when  you
          register Shareware produced by ASP members.



                                    SHAREWARE


          To promote better understanding of the shareware concept,  ASP has
          developed the following official definition of shareware:

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

               So,  Shareware is a distribution method,  not a type  of
               software. You should find software that suits your needs
               and  pocketbook,  whether it's commercial or  Shareware. 
               The  Shareware system makes fitting your  needs  easier,
               because  you  can try before you buy.  And  because  the
               overhead is low, prices are low also.  Shareware has the
               ultimate  money-back guarantee -- if you don't  use  the
               product, you don't pay for it.



                                TABLE OF CONTENTS
                                -----------------

          INTRODUCTION   ....................................    1

          INSTALLATION   ....................................    2

          GENERAL OVERVIEW   ................................    5

          DATABASE COMMANDS   ...............................    6

          MAIN MENU COMMANDS   ..............................   10
             Account   ......................................   10
             Editor   .......................................   10
             Finance   ......................................   10
             Homework   .....................................   10
             Insurance   ....................................   10
             Labels   .......................................   10
             Phonebook   ....................................   10
             Records   ......................................   10
             Setup   ........................................   11
             Utility   ......................................   11
             Vehicle   ......................................   11

          ACCOUNTING SYSTEM   ...............................   12
             Accounting Fundamentals   ......................   12
             Accounting System Setup   ......................   16
             Account   ......................................   17
             Genledger   ....................................   18
             Posting   ......................................   19
             Standards   ....................................   20
             Yearend   ......................................   20

          EDITOR COMMANDS   .................................   22
            Overview & Command Summary   ....................   22
            The Editing Screen   ............................   23
            Options   .......................................   23
            Cursor Movement   ...............................   24
            Editing Commands   ..............................   25
            Search Commands   ...............................   26
            Block Commands   ................................   27
            Miscellaneous Commands   ........................   28

          FINANCE COMMANDS   ................................   29
             Report   .......................................   29
             Update   .......................................   29

          HOMEWORK DATABASE   ...............................   30

          INSURANCE DATABASE   ..............................   31

          LABELS COMMAND   ..................................   32

          PHONEBOOK DATABASE   ..............................   33

          RECORDS DATABASE   ................................   34


          SETUP   ...........................................   35

          UTILITY COMMANDS   ................................   36
             Fixup   ........................................   36

          VEHICLE DATABASE   ................................   37

          REGISTRATION FORM   ...............................   38



                                   INTRODUCTION
                                   ------------

          The  Point  & Shoot Home Manager arose from  dissatisfaction  with
          available programs to manage the details of operating a home.  The
          Point & Shoot Home Manager encapsulates,  within a single program,
          the  primary  data management tasks necessary in  the  home.   The
          Point & Shoot Home Manager is a collection of dedicated  databases
          for  complete home budgeting,  tracking of home maintenance,  home
          inventory  and  important  record  tracking,   name  and   address
          tracking,  and vehicle maintenance recordkeeping.  A full featured
          financial  calculation system is included.  This is not  simply  a
          home   budgeting  system  like  so  many  others.    This   is   a
          comprehensive home management system.

          Point  &  Shoot Home Manager requires the following  hardware  and
          software to operate correctly:

               o  IBM or 100% compatible computer with 320K minimum memory

               o  2 floppy disks or hard disk (recommended)

               o  MS-DOS version 2.0 or greater

               o  Color/graphics, monochrome, EGA or VGA display adaptor

               o  CONFIG.SYS file must set FILES=20


          As   you  are  well  aware,   part  of  the  reward  for   writing
          well-received software is monetary.  If you would like to continue
          to  use Point & Shoot Home Manager,  a $35 payment  will  register
          your  copy of the program.   The registration fee entitles you  to
          printed  documentation  and  user  support.   Another  benefit  of
          registration is that I will take your feedback into  consideration
          for future versions of the program.   Please use the  registration
          form found in this documentation file to register your copy of the
          program.


















                                      - 1 -


                                   INSTALLATION
                                   ------------


          Installation of this program is as simple as operating the program
          itself.  Follow these installation instructions carefully.  If any
          problems are encountered, first check your computer.  If you still
          have  problems,  enlist  the aid of someone who  is  perhaps  more
          knowledgeable with computers than yourself.   A third  alternative
          is  to  contact AMST.   Note: Only registered users  will  receive
          support,  but  if  you are testing the program,  you  may  receive
          limited support.

          The only files required to run the Point & Shoot Home Manager are:

               PASH.EXE   The Point & Shoot Home Manager Program.  This
               file must reside on a bootable disk for floppy systems,
               or it must be available in the current directory or in
               the PATH if used on a hard disk.

               *.DBD      These are the database definition files used
               with the databases in the Point & Shoot Home Manager. 
               These files must be available on the data disk for
               floppy systems, or in the current directory if used on a
               hard disk.


          Whether using a hard disk or dual floppy disk system, you must use
          a CONFIG.SYS file that contains the following line:

                              FILES = 20



          DUAL FLOPPY DISK SYSTEMS
          ------------------------

          1)  Copy PASH.EXE from the Point & Shoot Home Manager distribution
              disk to a bootable floppy disk.

          2)  Copy all of the "DBD" files from the Point & Shoot Home 
              Manager distribution disk to a blank data disk.

          3)  Place the new bootable disk in drive A: and the data disk in
              drive B:, switch to drive B: and invoke the Point & Shoot
              Home Manager from drive A:

                              A> B:
                              B> A:PASH

          4)  The Point & Shoot Home Manager should run.  The SETUP command
              should be used immediately to set the program parameters.




                                      - 2 -



          HARD DISK INSTALLATION
          ----------------------

          If running the Point & Shoot Hard Disk Manager:

          1)  Use the FILE COPY command to copy PASH.EXE to the \P&S
              directory.

          2)  Use the TREE MAKE command to create a directory to hold
              the Point & Shoot Home Manager data and use the FILE COPY
              command to copy all files with the ".DBD" extension to the
              new data directory.

          3)  Use the MENU ADD command to add the PASH command to the
              user-defined menus.  Remember to select the data directory
              as the directory path.

          4)  The SETUP command should be used immediately to set the
              program parameters.


          If not running the Point & Shoot Hard Disk Manager:

          1)  Create a new subdirectory on the hard disk for the Point &
              Shoot Home Manager program and data files.

          2)  Copy all the files on the distribution disk to the newly
              created directory.

          3)  The Point & Shoot Home Manager program may now be run
              from the new directory by changing to that directory and
              entering the following command:

                              PASH

          4)  To run the Point & Shoot Home Manager from one directory and 
              to store the data files in a different directory, first create 
              a separate directory to hold the Point & Shoot Home Manager 
              data files, and copy the files with the ".DBD" extension to 
              that directory.  Note: The PATH command in AUTOEXEC.BAT must 
              include the path containing PASH.EXE.  The Point & Shoot Home 
              Manager may then be executed from the data directory by making 
              that directory the default and entering the PASH command.

          5)  The SETUP command should be used immediately to set the
              program parameters.



          REMEMBER:  Set FILES = 20 in CONFIG.SYS file!





                                      - 3 -



          PRINTING THE DOCUMENTATION
          --------------------------

          To print the documentation, type the following from the DOS
          prompt:

                              COPY  PASHDOC.TXT  PRN:

          Another option to print the documentation is to use the File Print
          command found in the Point & Shoot Hard Disk Manager.



          Following  is  a complete list of the Point & Shoot  Home  Manager
          program and data files contained on the distribution disk.

               CHANGES   TXT   Program revision history
               FILES     TXT   A file containing this file list
               PASH      EXE   The Point & Shoot Home Manager program
               PASHDOC   TXT   Program documentation
               PASHACCT  DBD   Account database definition file
               PASHGL    DBD   General ledger database definition file
               PASHHOME  DBD   Home maintenance database definition file
               PASHINS   DBD   Insurance database definition file
               PASHPHON  DBD   Phonebook database definition file
               PASHRECS  DBD   Records database definition file
               PASHVEH   DBD   Vehicle maintenance database definition file
               READ      ME    Last minute changes and installation help

          In addition, the Point & Shoot Home Manager will create files with
          either  a  ".DB"  extension which are database files  (files  that
          contain  actual data),  or ".Kxx" extension which are index  files
          for a database (the xx denotes the field numbers described later). 
          Other files may be created with the EDITOR command.





















                                      - 4 -


                                 GENERAL OVERVIEW
                                 ----------------

          The  desired method of program operation is to place  PASH.EXE  in
          one  directory  (or  one  floppy disk) and  the  files  with  .DBD
          extensions (the database definition files) in a separate directory
          (or  disk).   The  second directory (or  disk)  becomes  the  data
          directory  (or disk).   The program is then invoked from the  data
          directory  (or  disk).   This method  requires  setting  the  PATH
          command appropriately for hard disks.

          The  advantage  of separating the program data  from  the  program
          itself is that more than one directory (or disk) could be used for
          data.  Thus, distinct data for different years or different people
          using the program can be maintained.  This method avoids having to
          place the PASH.EXE file in each data directory (or disk).

          When  Point & Shoot Home Manager is run,  the main program  screen
          will  appear.   The top line of the screen displays the  name  and
          version  of the program,  a copyright notice and the current  date
          and  time.   The center portion of the screen displays a  detailed
          copyright notice and registration information.  The bottom section
          of the screen displays the program menus with an explanatory  line
          on the bottom.

          Most  of  the program functions are executed through the  list  of
          commands  shown  in the bottom area of the screen.   The  [Space],
          [BackSpace]  or [left/right arrow] keys may be used  to  highlight
          the  desired  command.   The one-line description of  the  command
          shown  on the last line of the screen will  change  appropriately. 
          To  execute  any of the functions, press the first letter  of  the
          command or hilite the command and press [Return].

          Some commands will invoke another command list.   The name of  the
          current  command  list  is always shown on the left  side  of  the
          command list.  You may move to a previous command list by pressing
          the  [Esc] key.   Each command list also has a QUIT command  which
          will move to the previous command list. In general,  the [Esc] key
          serves to abort any operation or selection.

          Occasionally,  you  will  be presented with  a  vertical  list  of
          choices for some program options.  Select from these lists  either
          by  pressing the up or down arrow keys to move the  highlight  bar
          and pressing [Return] when the desired option is highlighted or by
          pressing  the  first letter of the options.   You  may  optionally
          press the [Esc] key to abort the selection process.

          At any time during the operation of the program, you may press the
          [Alt-C] key combination to activate an on-screen calculator.   The
          [Esc]  key will return you to the program at the point from  which
          you started the calculator.   A calendar screen is also  available
          at  any time with the [Alt-L] command.   To quit the  program  and
          return  to the operating system,  press [Esc] or select QUIT  from
          the Main Menu command list.


                                      - 5 -


                                DATABASE COMMANDS
                                -----------------

          The  Point  & Shoot Home Manager contains  several  databases.   A
          database is a collection of data in a format that is similar to  a
          collection  of  index  cards.    Each  record  in  a  database  is
          equivalent to a card in an index file.   Each piece of information
          in a record is called a field.  An entire group of similar records
          is  stored in a single file called a database.   In this  program,
          the database files end with the .DB extension.

          To assist in sorting and retrieving data in the Point & Shoot Home
          Manager  databases,  the  program maintains key  files  which  are
          separate  files  (ending with .Kxx) consisting of  data  from  one
          field from a database kept in sorted order.

          The  databases  included  in the Point & Shoot  Home  Manager  are
          Accounts, General Ledger, Home Maintenance, Insurance,  Phonebook,
          Records,  and Vehicle Maintenance.  The commands used to work with
          the  databases  are generally identical and  are  described  here. 
          Differences  that occur will be covered in the  associated  detail
          section of this documentation.

          IMPORTANT:  NEVER  turn  the computer off  while  the  program  is
          operating.   Always quit first.   Damage to databases could result
          from turning the computer off while the program is running!

          In  general,  the program databases operate in the  same  fashion. 
          After  selecting  the appropriate database from the  program  main
          menu,  a screen will appear that displays information relative  to
          the  database  in  use.   Line  24  of  the  screen  will  display
          information related to the current database.  This line will show,
          in order,  the name of the current database,  the current order of
          the  database,  the page and number of pages  total,  the  current
          record  number,  the  number of records currently  stored  in  the
          database,  the total number of records counting previously deleted
          records,  and the number of records that may still be added to the
          database (dependent on disk space remaining).

               Browse:   Shows the records in tabular format.  The
                         [PgUp/PgDn] and [up/down arrow] keys may be used to
                         move through the list.  The [left/right] arrow keys
                         scroll the screen horizontally.  [^Home] and [^End]
                         jump to the beginning and end of the database
                         respectively.  [Esc] returns to the original
                         database screen at the original record and [Return]
                         selects the record that the arrow is pointing to. 
                         Search options in the Browse command allow quick
                         location of records. The [F1] and [F2] keys are
                         used to set the primary and secondary search
                         strings for the field currently shown on the left
                         side of the browse screen. After setting the
                         desired search strings, [F5] and [F6] are used to
                         search forward or backward.  A match indicator is
                         shown on the lower right corner of the screen.

                                      - 6 -



               Delete:   Deletes the current record after user confirmation.

               Enter:    Enters a new record into the current database.  For
                         an explanation of data entry, see the section on
                         Data Entry Screens.

               Find:     Finds a record matching a selected field.  You will
                         be prompted to enter a string to match.  Find
                         options include equal to, greater than or equal,
                         less than, and partial match.

               Key:      Used to add or delete keys in the database.  A
                         prompt will ask if the desired action is to add or
                         delete a key.  After selecting the appropriate
                         option, a list of key field choices will appear
                         from which the desired field may be selected.  Key
                         fields are marked with a K or k to indicate unique
                         keys or duplicate keys respectively.  Unique key
                         fields that have been predefined for a database may
                         not be deleted, and a maximum of 10 key fields may
                         be defined for a database.

               Order:    Changes the record display order.  A list of key
                         field choices will appear from which you may select
                         the desired order.  Key fields are marked with a K
                         or k to indicate unique keys or duplicate keys
                         respectively.

               Report:   Allows the user to select a report to print for the
                         database.  All databases have at least two report
                         options: All records or current record summary. 
                         Other reports available are covered in detail in
                         the sections describing each database.  Reports
                         will print in the current database order.

               Transfer: Transfers the database records to an Ascii file for
                         use by other programs.  Each field in the database
                         will be placed on a separate line in the output
                         file.  Text fields will be enclosed in quotes,
                         numeric fields are left-justified without quotes. 
                         The field specifications are detailed in the
                         appropriate database section.  The Transfer command
                         creates a file with the same name as the current
                         database, but with a ".TFR" extension.  If the
                         transfer file already exists, you will be asked if
                         it is OK to replace it.

               Update:   Updates the current database record.  For an
                         explanation of data entry, see the section on Data
                         Entry Screens.





                                      - 7 -



          Several  additional  database commands are available but  are  not
          shown as menu items:

               [F5] [F6]:  Move to the previous/next record.

               [^Home] [^End]:  Jumps immediately to the first/last record
                         of the database.

               [PgUp] [PgDn]: If the current database contains more than one
                         screen of data, these commands are used to select
                         the other pages.


          At  many points in the program,  you will be using the  Enter  and
          Update commands to enter and/or change information on the  screen. 
          After  you have selected the Enter or Update command,  a  flashing
          "*"  will appear on the data screen to indicate where  information
          is  to be entered.   A cursor will also show the current  position
          within  a data field.   (Data fields are the hilited areas of  the
          screen).   Some or all of the following commands will be available
          for data entry:

               [left/right arrow]:  Moves the cursor within the current
                         field.  If the cursor is at the first position in a
                         field, then the previous field will be selected. 
                         If the cursor is at the last position in a field,
                         then the next field will be selected.

               [^left/^right arrow]:  Moves the cursor to the first/last
                         position in the current field.

               [up/down arrow]:  Selects the previous/next data field for
                         editing.

               [F1]:     Inserts the current date into the current field of
                         the database (only if the field is a date field).

               [F3]:     Performs a lookup into another database for quick
                         data entry.  This command is only available in some
                         databases and will only operate on some fields. 
                         When the lookup command is selected, the program
                         will attempt to find a record in another database
                         that matches the current field.  If the field is
                         blank or a match could not be found, the familiar
                         Browse screen will appear.  The Browse commands
                         described previously may be used to locate and/or
                         select a record.  Appropriate information will then
                         be returned to the current database with the fields
                         completed.






                                      - 8 -



               [F5]:     Accepts changes to the current record and moves to
                         the previous record of the database. (Not available
                         in Enter mode)

               [F6]:     Accepts changes to the current record and moves to
                         the next record of the database.  If in Enter mode,
                         a new blank record will appear for data entry.

               [F8]:     Blanks the current field.

               [Enter]:  Same as right or down arrow for next field.

               [Esc]:    Aborts changes made to the current record and
                         completes Enter/Update action.

               [F10]:    Accepts changes made to the current record and
                         completes Enter/Update actions.


          Power  outages  and surges as well as  computer  malfunctions  may
          cause  corruption to occur in the databases of the  program.   The
          only  security you have against such problems is to  make  regular
          backups  of  your data.   It is suggested that you use  a  rotated
          backup  routine where you keep two copies of  backups.   Alternate
          between these disks each time you perform a backup.

          When  making your backups,  you may either use the backup  program
          that  comes  with your DOS disks or any  other  commercial  backup
          program (like Point & Shoot Backup/Restore).  To backup your data,
          you  must specify all files that end with the ".DB"  extension  as
          well as files that end with a ".Kxx" extension, where then xx is a
          number that identifies the field number for the key.   Other files
          that may have been created with the built-in editor should also be
          specified for backups.

          If the need ever arises to restore your databases from your backup
          disks,  follow the procedure in your backup program  documentation
          to restore your data.

















                                      - 9 -


                               MAIN MENU COMMANDS
                               ------------------

          The  Main  Menu  is  the center of  Point  &  Shoot  Home  Manager
          activity.   Some of the Main Menu commands move to another command
          list, while others will immediately execute a command.   Following
          is a description of the Main Menu commands.


          ACCOUNT

          Moves to the accounting functions command list described later  in
          this  documentation.   The accounting functions are used to  track
          and maintain the financial records of your home.


          EDITOR

          Invokes  the built-in text file editor.  Text files of up  to  64K
          may be edited.


          FINANCE

          Invokes  the  financial  calculation  system.    Eight   different
          financial scenarios are presented to aid in the analysis of  loans
          and other investments.


          HOMEWORK

          Moves  to  the Home Maintenance database which is  used  to  track
          maintenance activity for the home.


          INSURANCE

          Moves to the Insurance database which is used to maintain a record
          of valuables for insurance purposes.


          PHONEBOOK

          Moves  to the Phonebook database which is used to maintain a  list
          of names and addresses and to print labels or envelopes.


          RECORDS

          Moves to the Records database which is used to track the important
          records in your home (insurance policies, wills, etc...).





                                      - 10 -



          SETUP

          Moves to the program setup data screen described later.   Setup is
          used to define the program parameters.


          UTILITY

          Miscellaneous program functions.


          VEHICLE

          Moves  to  the  Vehicle  Maintenance database  which  is  used  to
          maintain a record of maintenance performed on vehicles.








































                                      - 11 -


                                ACCOUNTING SYSTEM
                                -----------------


          The accounting system contained in the Point & Shoot Home  Manager
          provides a comprehensive system for management of financial  data. 
          The  system  allows accurate tracking of income and  expenses  and
          provides  the  user with an up-to-date view of  current  financial
          condition.

          The following section on accounting fundamentals will provide  the
          new user with an overview of accounting procedures and will assist
          the user in preparing the accounting system for use.   Even if you
          are  familiar with accounting practices,  you should  review  this
          section  to ensure that the Point & Shoot Home Manager  accounting
          system is properly prepared.


          ACCOUNTING FUNDAMENTALS

          Several  definitions  are  in  order  before  proceeding  with   a
          discussion of accounting concepts:

               Assets:  Assets are economic resources which are owned and
                    have some value.  Examples of tangible assets are land,
                    real estate and cash.  Some assets may be intangible,
                    but still have some value.  An example of an intangible
                    asset is money that someone owes you (called Accounts
                    Receivable in business accounting).

               Liabilities:  Liabilities are debts (called Accounts Payable
                    in business accounting).  Purchases made with credit
                    cards, loans from a bank, and a mortgage on a home are
                    all examples of liabilities.

               Owner Equity:  Owner Equity represents the resources invested
                    in (typically) a business by an owner.  In a simple
                    accounting system, Owner Equity may be thought of as Net
                    Worth.

               Revenue:  Revenue is the value (usually cash) received for
                    selling an asset or providing some service to someone
                    (e.g., income from employment).

               Expense:  Expenses are the costs incurred in the operation of
                    a home or business.  Typical expenses would be rent,
                    gasoline, and insurance.


          Each  of  these  accounting  categories  are  types  of  Accounts. 
          Accounts  in the Point & Shoot Home Manager are contained  in  the
          Account database.   The list of all the accounts in an  accounting
          system is known as the Chart of Accounts.



                                      - 12 -



          Owner  Equity  is determined by taking total  assets  minus  total
          liabilities.  This calculation is known as the accounting equation
          and is fundamental to accounting practices:

                    Owner Equity = Assets - Liabilities

          The  accounting  equation is represented in a  report  called  the
          Balance Sheet.  The Balance Sheet lists all Asset, Liability,  and
          Owner Equity accounts with their respective totals.   The  Balance
          Sheet  shows the reconciliation of the accounting  equation.   The
          numbers  on either side of the accounting equation are  always  in
          balance, but why?

          The numbers found in the accounting equation are simply two  views
          of  the  same thing.   An asset is either owned outright  or  some
          money  is  owed  on it.   The difference  between  what  is  owned
          (assets)  and what is owed (liabilities) represents the  value  of
          assets  after  all creditors are satisfied (Owner  Equity  or  Net
          Worth).  

          Any financial transaction that occurs can be expressed in terms of
          its   effect   on  the  accounting   equation.    When   financial
          transactions  occur,  it  is important to  remember  that  assets,
          liabilities,  and owner equity must remain in balance according to
          the accounting equation.   The recording of financial transactions
          with this balance in mind is known as double-entry accounting  and
          is  key  in  understanding  of the  Point  &  Shoot  Home  Manager
          accounting system.

          Financial  transactions are recorded in the General Ledger.   Each
          transaction  is  represented  in terms of  the  Accounts  that  it
          affects.   The requirement that the Balance Sheet must  remain  in
          balance  mandates  that  General  Ledger  transactions  must  have
          balancing entries.  Each General Ledger entry has two sides.   The
          left side is called a Debit entry and a the right side is called a
          Credit entry.

          The concept of Debits and Credits is often confusing to those  not
          familiar with accounting practices.  In accounting, the term Debit
          refers  to  an  entry on the left side of  a  transaction  in  the
          General  Ledger,  and the term Credit refers to an  entry  on  the
          right  side  of a transaction in the General  Ledger.   Therefore,
          Debit and Credit are simple equivalents of left and right, without
          any hidden or subtle meanings.

          Accounts  are  divided into categories  as  discussed  previously. 
          Each  account  category  is either a debit  account  or  a  credit
          account.  Recall  that  the  accounting  equation   dictates  that
          General  Ledger  transactions  must  maintain  a  balance  between
          accounts.  Correct assignment of debit or credit types to accounts
          ensures  that  this balance is maintained.   The  following  chart
          shows  the effect of debit entries (left side of  General  Ledger)
          and credit entries (right side of General Ledger) on the accounts:


                                      - 13 -



               Account Type     Effect of Debit     Effect of Credit
               ------------     ---------------     ----------------
               Asset            increase            decrease
               Liability        decrease            increase
               Owner Equity     decrease            increase
               Revenue          decrease            increase
               Expense          increase            decrease

          It is important to remember this chart when entering  transactions
          in  the General Ledger.   With this chart in mind,  refer  to  the
          following  example  Chart of Accounts.   The  thousands  range  of
          account types is a standard method of numbering the accounts in an
          accounting  system,  although the specific numbers within a  range
          may  vary.   Accounts  may  be added or  removed  from  this  list
          depending on specific accounting needs.


                              EXAMPLE CHART OF ACCOUNTS
                              -------------------------

               Account #  Account Name       Type          Debit/Credit
               ---------  -----------------  ----------    ------------
                 1100     Cash               Asset            Debit
                 1200     Checking           Asset            Debit
                 1300     Savings            Asset            Debit
                 1400     Real Estate        Asset            Debit
                 2100     Mortgage Payable   Liability        Credit
                 2200     VISA Payable       Liability        Credit
                 3100     Net Worth          Owner Equity     Credit
                 4100     Salary/Wages       Revenue          Credit
                 4200     Interest Income    Revenue          Credit
                 5100     Auto Gas           Expense          Debit
                 5200     Auto Maintenance   Expense          Debit
                 5300     Interest Expense   Expense          Debit
                 5400     Mortgage Payments  Expense          Debit
                 5500     Utilities          Expense          Debit


          With this chart of accounts in mind,  several examples of  general
          ledger  transactions  follow  which demonstrate  the  use  of  the
          accounting system,  specifically the General Ledger.  Note how the
          debit and credit totals of each transaction always balance.


               A home is purchased for $75,000 with a downpayment of $10,000
               and the balance in a mortgage:

                        Account              Debit   Credit
                        -----------------   ------   ------
                        Real Estate         75000
                        Cash                          10000
                        Mortgage Payable              65000



                                      - 14 -



               A monthly mortgage payment of $850 is made.  $725 of the 
               payment is interest and the remainder is principal:

                        Account              Debit   Credit
                        -----------------   ------   ------
                        Mortgage Payable      125
                        Interest Expense      725
                        Checking                        850


               Repairs are made to an automobile at a service station for 
               $200.  Before leaving, the car is filled with gas totalling 
               $25.  The entire bill is charged to a VISA credit card:

                        Account              Debit   Credit
                        -----------------   ------   ------
                        Auto Maintenance      200
                        Auto Gas               25
                        VISA Payable                    225


               A paycheck is received in the amount of $2100.  Automatic 
               payments of $140 and $225 are made by the bank for utilities 
               and previous VISA charges respectively.  The remainder is 
               deposited into checking:

                        Account              Debit   Credit
                        -----------------   ------   ------
                        Checking             1735
                        Utilities             140
                        VISA Payable          225
                        Salary/Wages                   2100


          Note  how all changes to accounts are made through entries in  the
          General  Ledger.   The process of transferring the  entries  in  a
          General Ledger to the Chart of Accounts balances is call  Posting. 
          If  the General Ledger is used properly,  all accounts  will  show
          current, up-to-date balances at all times.

          The  remainder  of the accounting section  of  this  documentation
          provides  operation  details.    If  the  accounting  fundamentals
          section is not understood,  then review this section again  and/or
          refer to an introductory accounting text.











                                      - 15 -


          ACCOUNTING SYSTEM SETUP

          There  are two steps in preparing the Point & Shoot  Home  Manager
          accounting system for initial use.  After this initial setup,  the
          accounting system should operate without further modification.

          The first step is to establish a Chart of Accounts in the  Account
          database.   Accounts should be created according to the guidelines
          discussed in the previous section on accounting fundamentals.   If
          the  Account  database is not understood,  review the  section  on
          accounting fundamentals and/or examine an introductory  accounting
          text.   The  budget  amounts  should be  entered  in  the  Account
          database during this step.

          The second step in accounting system setup is to establish initial
          balances  in  the  previously  created  accounts.   This  step  is
          accomplished  with the General Ledger database discussed later  in
          this documentation.  The key point in this procedure is that every
          entry in the General Ledger database must include offsetting debit
          and credit entries.

          In  general,  initial setup should include General Ledger  entries
          that  will  establish  initial balances  in  Asset  and  Liability
          accounts.   The  offsetting entry is usually some  type  of  Owner
          Equity account.   For example,  to create the initial balance in a
          checking account,  the General Ledger transaction might appear  as
          follows:

                        Account              Debit   Credit
                        -----------------   ------   ------
                        Checking               500
                        Equity                          500


          If  it  is desired to show beginning activity in the  Revenue  and
          Expense accounts,  then appropriate entries should be made in  the
          General  Ledger  database for those  account  BEFORE  establishing
          initial  balances  in  the  Asset,  Liability,  and  Owner  Equity
          accounts.   Then,  the Asset and Liability account balances can be
          created  with by examining their current balances and  making  the
          appropriate adjustments.

          After the initial entries have been made,  the YEAREND command may
          be used to transfer the initial balances into the forward  balance
          fields of the Account database.   Only use the  YEAREND command at
          this  point  if  you wish to remove  the  initial  General  Ledger
          entries from the General Ledger database and start the  accounting
          system from a fresh point.








                                      - 16 -


          ACCOUNT

          The  Account database is the foundation of the Point & Shoot  Home
          Manager accounting system.  In the Account database,  the user may
          establish  a  Chart of Accounts for use with  the  General  Ledger
          database.   If  the  operation  of the  Account  database  is  not
          understood,   the   Accounting  Fundamentals   section   of   this
          documentation should be reviewed.

          The  reports included with the Account database are  All  Accounts
          Summary, Balance Sheet, Current Account Summary, Income Statement,
          and  Trial Balance.   If the Income Statement report is  selected,
          the user will be given the options of Actuals Only,  Budget  Only,
          and Comparison of Budget - Actual.

          There  are no special database commands in the  Account  database. 
          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               Account    : string[20]
               AccountNum : string[4]
               AcctType   : string[1]
               DebCred    : string[1]
               BudgetMth  : numeric
               BudgetYr   : numeric
               LYrDebits  : numeric
               LYrCredits : numeric
               LYrBalance : numeric
               JanDebits  : numeric
               JanCredits : numeric
               JanBalance : numeric
               FebDebits  : numeric
               FebCredits : numeric
               FebBalance : numeric
               MarDebits  : numeric
               MarCredits : numeric
               MarBalance : numeric
               AprDebits  : numeric
               AprCredits : numeric
               AprBalance : numeric
               MayDebits  : numeric
               MayCredits : numeric
               MayBalance : numeric
               JunDebits  : numeric
               JunCredits : numeric
               JunBalance : numeric
               JulDebits  : numeric
               JulCredits : numeric
               JulBalance : numeric
               AugDebits  : numeric
               AugCredits : numeric
               AugBalance : numeric



                                      - 17 -


               SepDebits  : numeric
               SepCredits : numeric
               SepBalance : numeric
               OctDebits  : numeric
               OctCredits : numeric
               OctBalance : numeric
               NovDebits  : numeric
               NovCredits : numeric
               NovBalance : numeric
               DecDebits  : numeric
               DecCredits : numeric
               DecBalance : numeric
               YTDDebits  : numeric
               YTDCredits : numeric
               YTDBalance : numeric


          GENLEDGER

          The  General  Ledger  database is used  in  conjunction  with  the
          Account  database.   Any financial activity that  occurs  will  be
          entered  in  the  General Ledger database.   The  POSTING  command
          (described  later)  will  transfer that activity  to  the  Account
          database.   If the operation of the General Ledger database is not
          understood,   the   Accounting  Fundamentals   section   of   this
          documentation should be reviewed.

          The  reports  included with the General Ledger  database  are  All
          Transactions  Summary,  Current Transaction  Summary,  and  Single
          Account  Activity.   If  the Single  Account  Activity  report  is
          selected,  the Lookup screen will appear to allow selection  of  a
          single  account  from  the Account database.   After  the  desired
          account is selected,  prompts will ask for start and end dates  to
          confine  the search range of general ledger  transactions.   After
          all prompts have been answered, the report will print.

          There  are  two special database commands in  the  General  Ledger
          database.   The [F3]-Lookup command is used to find an account  in
          the  Account  database  for entry in the  General  Ledger  Account
          fields.   The  Lookup  command  is described  in  the  section  on
          database commands found earlier in this documentation.

          The  second special command in the General Ledger database is  the
          [F4]-Standard Entry command.  This command is used to make a quick
          automatic entry in the General Ledger database.   Standard general
          ledger  entries  must  be previously defined  with  the  STANDARDS
          command  described  later.   When the Standard  Entry  command  is
          invoked,  a  vertical list of standard entry choices  will  appear
          from which the user may select an entry.   The selected entry will
          be  automatically  entered in the current General  Ledger  record. 
          The fields may be edited before saving the record.





                                      - 18 -



          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               Entry      : string[6]
               Date       : string[10]
               Ref        : string[8]
               Desc       : string[30]
               Account1   : string[20]
               Amount1D   : numeric
               Amount1C   : numeric
               Account2   : string[20]
               Amount2D   : numeric
               Amount2C   : numeric
               Account3   : string[20]
               Amount3D   : numeric
               Amount3C   : numeric
               Account4   : string[20]
               Amount4D   : numeric
               Amount4C   : numeric
               Account5   : string[20]
               Amount5D   : numeric
               Amount5C   : numeric
               DTotal     : numeric
               CTotal     : numeric
               Posted     : string[1] (will be Y or N)


          POSTING

          The POSTING command takes the accounts and debit or credit amounts
          from  the  General Ledger database and updates  the  corresponding
          account records in the Account database.   Posting options include
          New Transactions or Reconstruction.

          If  the  New  Transactions option is selected,  only  the  general
          ledger records that have not been previously posted will be posted
          to the Accounts database.

          The  Reconstruction  option will force the program  to  clear  the
          Accounts  database (except for balances forward) and post  all  of
          the  general  ledger transactions to the  Account  database.   The
          Reconstruction  command may be necessary if any  Account  database
          records  are  deleted and the user wishes to recover  the  correct
          numbers  for  those  accounts.    The  deleted  accounts  must  be
          reentered  in  the  Accounts  database,  then  the  Reconstruction
          command must be used.








                                      - 19 -


          STANDARDS

          STANDARDS  allows up to 10 predefined general ledger  transactions
          to be entered for quick entry in the General Ledger database.  The
          STANDARDS  screen  is similar to the General Ledger  screen.   Any
          accounts entered in the STANDARDS area must be spelled exactly  as
          found  in  the  Account database or an  error  will  occur  during
          general ledger transaction entry.

          The  [PgUp] and [PgDn] commands are used to display the  different
          standard general ledger entries.   The normal field entry commands
          are used to update the standard general ledger entries.


          YEAREND

          The  YEAREND command is used to adjust the Accounts  database  and
          clear the General Ledger database to begin a new accounting  year. 
          The YEAREND command will alter the Account database and delete the
          current  General  Ledger  database!   Before  using  the   YEAREND
          command,  the Account and General Ledger databases and index files
          should be copied to a backup disk and marked for that year.  After
          the  YEAREND  command is used, the previous  Account  and  General
          Ledger databases will not be recoverable!


               1.  Print all desired reports from the Account and General 
                   Ledger databases.

               2.  Copy the Account and General Ledger databases and index 
                   files to a backup disk or separate directory and label 
                   the backup disk for the accounting year.  The files to 
                   copy include all files matching PASHACCT.* and PASHGL.*.

               3.  If the Account and General Ledger database files have 
                   been safely copied to a backup disk, the end-of-year net 
                   income (revenue - expenses) should be entered as a 
                   transaction in the General Ledger database to close the 
                   net income into an Owner Equity account.  Any expense 
                   account (preferably a miscellaneous account of some type) 
                   should be used as the offsetting account in this General 
                   Ledger transaction.  The net income may be obtained from 
                   the Balance Sheet report in the Account database.

               4.  Execute the YEAREND command to clear the Account records 
                   and post current year-to-date totals into the Balance 
                   Forward fields of the Account database.  The YEAREND 
                   command will also clear the General Ledger database to 
                   begin a new accounting year.

               5.  If anything goes wrong with this procedure, copy the 
                   backup accounting files made in step 2 back to the 
                   working disk or directory and start with step 1 again.



                                      - 20 -



          You  should now be ready to start a new accounting year.   If  you
          ever wish to reuse accounting data from a previous year,  copy the
          files from the backup disk to a separate disk or directory and use
          the Point & Shoot Home Manager on that disk or directory.

          DO NOT COPY THE BACKUP DISK TO YOUR NEW WORKING DISK OR DIRECTORY
          OR THE NEW ACCOUNTING DATA WILL BE LOST!
















































                                      - 21 -


                                 EDITOR COMMANDS
                                 ---------------


          OVERVIEW & COMMAND SUMMARY

          The  Editor  contained  in the Point & Shoot  Home  Manager  is  a
          full-screen  text editor.   It is similar to  MicroPro's  WordStar
          non-document  mode  and  the  program  editors  found  in  Borland
          products such as Turbo Pascal, Turbo C,  or SideKick.   If you are
          familiar with any of these editors, you should need little help in
          using the editor.

          Text  is  entered  in  the editor like  typing  on  a  typewriter. 
          However,  there are a few important differences.   The  cursor  (a
          flashing  underscore)  always  indicates where new  text  will  be
          entered,  and you can move the cursor throughout the current  file
          in  many  different  ways as described  later.   You  can  quickly
          correct mistakes using the delete commands.  You can copy and move
          text  with the block commands.   You can locate text strings  with
          the  Find command and optionally replace that text with  new  text
          using the Find and Replace command.   Each command for the  editor
          is  described  in detail in the following sections,  and  a  brief
          summary  of  commands  is  shown below.   Note:  the  ^  character
          indicates a Ctrl-key combination.  To execute a Ctrl-key function,
          hold the Ctrl key and press the letter shown.



          CURSOR MOVEMENT                       EDITING COMMANDS
          -------------------   --------------------------------------------
          Word left    ^F                                    Find Options
          Word right   ^G       Find         F5 or ^Q F   ------------------
          Line up      Up       Find/replace F6 or ^Q A   B=Backwards search
          Line down    Down     Find next    ^L           G=Global search
          Page up      PgUp                               L=Limit to block
          Page down    PgDn     Insert line  F7           N=Replace w/o ask
          Top screen   Home     Delete line  F8 or ^Y     U=Ignore case
          End screen   End      Delete word  ^T           W=Whole words only
          Top of file ^Home     
          End of file ^End                     BLOCK COMMANDS
          Left line   ^left     --------------------------------------------
          Right line  ^right    Begin ^K B     Copy   ^K C     Read   ^K R
          Top block   ^Q B      End   ^K K     Move   ^K V     Write  ^K W
          End block   ^Q K                     Delete ^K Y     Print  ^K P


                OPTIONS                    MISCELLANEOUS COMMANDS
          --------------------  --------------------------------------------
          Toggle indent  ^O I   Date insert F1    Print file  F9
          Toggle tabs    ^O T   Save/resume F2
                                Lookup name F3    Save/done   F10   or ^K D
                                New file    F4    Exit editor Alt-X or ^K Q



                                     - 22 -


          THE EDITING SCREEN

          When  you select the EDITOR command,  the main editor screen  will
          appear.   The  center portion of the screen is  the  text  editing
          area,  and  the bottom section of the screen  displays  the  quick
          function  key commands.   The top line of the text editing  window
          shows  the  editor  status line.  The  status  line  provides  the
          following information:


               o  Command Echo:  When the first key of a Ctrl-key command is
                  pressed, the keystroke is echoed at the left edge of the 
                  status line.

               o  Line n:  Shows the number of the line containing the 
                  cursor.

               o  Col n:  Shows the column number containing the cursor.

               o  Insert:  Indicates that Insert mode is in effect.

               o  Indent:  Indicates that Autoindent mode is in effect.  
                  ^Q I toggles the autoindent mode on and off.

               o  Tab:  Indicates that fixed tabs are in effect.  ^O T 
                  toggles fixed tabs on and off.

               o  X:FILENAME.EXT:  The drive, name, and extension of the 
                  file being edited.  If the current file has not been 
                  named, only the current drive letter will be shown.



          OPTIONS

            Toggle insert mode (Ins)
               Selects Insert or Overwrite mode.  In Insert mode, text
               to the right of the cursor is moved to the right as new
               text is entered.  In Overwrite mode, any text at the cursor
               position is overwritten when the new text is entered.

            Toggle autoindent (^O I)
               When Autoindent mode is in effect, pressing Enter will move
               the cursor to the next line and to the same column as the 
               first character of the previous line.

            Toggle fixed tabs (^O T)
               With fixed tabs, tab stops start at column 1 and occur every 
               8 columns thereafter.  With smart tabs, tab stops are set at 
               the first character of each word on the previous line.






                                     - 23 -


          CURSOR MOVEMENT

          The  simplest  commands  in the editor  are  the  cursor  movement
          commands.  Following is a description of these commands.


            Character left (Left arrow)
               Moves the cursor one character to the left.

            Character right (Right arrow)
               Moves the cursor one character to the right.

            Word left (^F)
               Moves the cursor to the beginning of the word to the left.

            Word right (^G)
               Moves the cursor to the beginning of the word to the right.

            Line up (Up arrow)
               Moves the cursor up one line.  If the cursor is at the top
               line of the screen, the window scrolls down one line.

            Line down (Down arrow)
               Moves the cursor down one line.  If the cursor is at the
               bottom line of the screen, the window scrolls up one line.

            Page up (PgUp)
               Moves the cursor up one screen.

            Page down (PgDn)
               Moves the cursor down one screen.

            Top of screen (Home)
               Moves the cursor to the top of the screen.

            End of screen (End)
               Moves the cursor to the bottom of the screen.

            Top of file (^Home)
               Moves the cursor to the beginning of the file.

            End of file (^End)
               Moves the cursor to the end of the file.

            Left on line (^Left arrow)
               Moves the cursor to column 1 of the current line.

            Right on line (^Right arrow)
               Moves the cursor to the end of the current line.

            Top of block (^Q B)
               Moves the cursor to the block-begin marker set with ^K B.

            End of block (^Q K)
               Moves the cursor to the block-end marker set with ^K K.

                                     - 24 -



          EDITING COMMANDS

          The  editing commands allow you to insert and  delete  characters,
          words,  and lines.   A related command (Delete block) is discussed
          later in the Block Commands section.


            New line (Enter)
               In Insert mode, this command inserts a line break at the
               current cursor position.  If Autoindent mode is on, the
               cursor moves to the new line and to the same column as
               the first character of the previous line, otherwise the
               cursor moves to column 1 of the new line.  In Overwrite 
               mode (Insert off), the cursor will move to column 1 of
               the next line without creating a new line.

            Insert Line (F7)
               Inserts a new line at the current cursor position.

            Tab (Tab)
               Moves the cursor to the next tab stop.  In Insert mode,
               any text to the right of the cursor is moved along with
               it.  If Insert mode is off, only the cursor will be moved.
               The location of the next tab stop depends on whether fixed
               tabs or smart tabs are in effect as discussed previously.

            Delete current character (Del)
               Deletes the character at the current cursor position and
               moves any characters to the right of the cursor one position
               to the left.

            Delete left character (Backspace)
               Deletes the character to the left of the cursor and moves
               the cursor to the left one position.  Any characters to the
               right of the cursor are moved to the left one position.  If
               the cursor is at column 1, the cursor is moved to the end of
               the previous line and the current and previous lines are
               joined together.

            Delete word (^T)
               Deletes the word to the right of the cursor.

            Delete line (F8 or ^Y)
               Deletes the current line and moves any lines below it up
               one line.  The cursor moves to column 1 of the next line.










                                     - 25 -



          SEARCH COMMANDS


          The search commands allow you to find and replace text strings.


            Find (F5 or ^Q F)
               Lets you search for a string of up to 30 characters.  When
               you select this command, you will be asked for a search
               string.  The last search string entered (if any) will be
               displayed.  You can select it again by pressing ENTER, edit
               it, or enter a new search string.  To edit the search 
               string, BACKSPACE deletes the previous character, ^R 
               restores the previous string, and ^U or ESC cancels the
               command.

               After the search string is entered, you will be prompted for 
               search options.  Any previously entered options will be
               shown.  Again, these may be edited or accepted.  The 
               following options are available for the Find command:

                    B    Searches backward from the current cursor
                         position toward the beginning of the file.

                    L    Limits the search to the current block.

                    n    Finds the nth occurrence of the search string.

                    U    Ignores the case of the target string.

                    W    Searches for whole words only


            Find and Replace (F6 or ^Q A)
               This command works the same as the Find command, except you
               can replace the "found" string with any other string up to
               30 characters in length.  After entering the search string,
               you will be asked for a replacement string.  The last used
               replacement string will be shown, and you can edit or accept
               it.

               Like the Find command, you can enter options for the Find
               and Replace command.  The options available are the same as
               the Find command except for the following additions:

                    G    Searches globally through the entire file for the
                         search string.

                    N    Replaces any matches without confirmation.


            Find next (^L)
               Repeats the last Find or Find and Replace command.


                                     - 26 -



          BLOCK COMMANDS

          A block of text is any contiguous unit of text that you define.  A
          block  can  be as small as a single character or as large  as  the
          entire file that you are editing.  A block is defined (marked)  by
          placing a block-begin marker at the first character in the desired
          block  and an block-end marker just beyond the last  character  in
          the desired block.   Once you have marked a block,  that block may
          be copied, moved, deleted, written to a file, or printed.

          When you mark a block,  the marked text will appear in a different
          color that the rest of the text.   A defined block will remain  in
          effect unless the Block Delete command is issued or a new block is
          defined.


            Begin block (^K B)
               Marks the beginning of a block.  The marker itself is not
               visible, and the block itself will not be marked until the
               End block command is given.

            End block (^K K)
               Marks the end of a block.  Like the begin-block marker, the
               end block marker is not visible and the block itself will
               not be displayed unless both markers are set.

            Copy block (^K C)
               Creates a copy of a marked block of text at the current
               cursor position.  The original block is left unchanged and
               the block-begin and block-end markers are placed around the
               new copy of the block.

            Move block (^K V)
               Moves a marked block of text from its current position to
               the current cursor position.  The block markers remain
               around the block at its new position.

            Delete block (^K Y)
               Deletes a marked block of text.  After using this command,
               there will be no marked block of text.

            Read block (^K R)
               Reads a file into the editor at the current cursor position 
               and marks it as a block.  When you use this command, you are 
               prompted for the name of the file to read.  If you have used 
               this command earlier, the last file name entered is
               displayed.  You may enter a new file name (even a different 
               disk or subdirectory), make changes to the file name 
               currently displayed using BACKSPACE, or accept it by pressing
               ENTER.  You may cancel the command by pressing ^U.





                                     - 27 -



            Write block (^K W)
               Writes the currently defined block to a file, and the block
               remains unchanged.  You are prompted for a file name, just
               like the Read block command.  If the file already exists,
               you will be asked whether you want to overwrite it.  If you
               press N (for No), you can enter a new file name, make
               changes to the current name using the BACKSPACE key, or
               cancel the command using the ^U command.  If no block has
               been defined, the Write block command is ignored.

            Print block (^K P)
               Prints the currently marked block on the printer.  If no
               block is marked, the entire file is printed.


          MISCELLANEOUS COMMANDS

            Help (Alt-H)
               A screen listing the editor commands is shown.  Pressing any
               key returns to editing mode.

            Date Insert (F1)
               The current date will be entered at the current cursor 
               position in the editor.

            Save/resume (F2)
               Saves the current file (if it is named) and resumes editing.

            Lookup name (F3)
               Opens the Phonebook database and allows selection of a name 
               and address for insertion into the editor at the current 
               cursor position.  The lookup command operates like the browse 
               command as described in the database commands section of this 
               documentation.

            New file (F4)
               Loads a new file into the editor.  If the current file has
               been modified, you will be asked whether you wish to save the
               file before a new one is loaded.  After confirmation of the
               save, a directory search string may be entered for the 
               current directory, after which a directory list will appear 
               for file selection.

            Print file (F9)

               Prints the entire text file to the printer.

            Save/done (F10)
               The file is saved and the control returns to the main menu.

            Exit editor (Alt-X)
               The current file is abandoned (after confirmation if changes
               have been made) and the program returns to the main menu.


                                    - 28 -


                                 FINANCE COMMANDS
                                 ----------------


          The  financial  calculator  is  a  set  of  data  screens   called
          "scenarios"  that  allow you to fill in the  blanks  to  calculate
          answers to some standard financial questions such as payments on a
          loan.

          To use the financial calculator,  you must first select a scenario
          that matches a situation you are investigating by using the [PgUp]
          and  [PgDn] keys.   Each scenario displays a different  screen  of
          information.  The screen will describe the scenario and there will
          be places for information to be entered that the program needs.  


          REPORT

          The REPORT command is used to print the results of the financial
          calculator.


          UPDATE

          The data fields in the financial calculator will vary depending on
          the  scenario you have selected.   These data entry areas will  be
          the inverse areas of the screen.  The UPDATE command allows you to
          change the scenario information.

          The  program will be asking for some of the following  information
          on each screen:

               Present Value:  The current value of the loan or account

               Future Value:   The value at some time in the future of the
                               loan or account

               APR:            The annual percentage rate of interest
                               charged or earned

               Payment:        The amount paid on a loan or withdrawn from
                               an account at periodic intervals

               # Payments:     The total number of periods in question.
                               Remember to enter the number of months if
                               that is what the program is asking for!  This
                               might be a good place to use the built-in
                               calculator [Alt-C].


          After numbers that fit your situation have been entered,  pressing
          the  [F10] key  will cause the program to calculate  the  results. 
          UPDATE  may  be used again to change the numbers and  display  new
          results.


                                      - 29 -


                                 HOMEWORK DATABASE
                                 -----------------


          The Homework database is used to maintain a record of  maintenance
          performed  on  your home.   Property Id is the major key  in  this
          database.

          The  reports  included with the Homework database  are  All  Items
          Summary and Current Item Summary.

          There  are no special database commands in the Homework  database. 
          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               PropId     : string[10]
               Date       : string[10]
               Desc       : string[40]
               MatSource  : string[30]
               MatCost    : numeric
               LabSource  : string[30]
               LabCost    : numeric
               TotalCost  : numeric
































                                      - 30 -


                                INSURANCE DATABASE
                                ------------------


          The  Insurance database is used to maintain a record of  valuables
          in your home for insurance purposes.  Description is the major key
          in this database.

          The  reports  included with the Insurance database are  All  Items
          Summary and Current Item Summary.

          There are no special database commands in the Insurance  database. 
          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               Desc       : string[40]
               Location   : string[30]
               PurDate    : string[10]
               PurPrice   : numeric
               CurrValue  : numeric
               RepCost    : numeric
               LastReview : string[10]

































                                      - 31 -


                                  LABELS COMMAND
                                  --------------


          The LABELS command is used to print labels or envelopes.  When the
          LABELS command is selected, a box will appear on the screen titled
          "GENERIC  LABEL PRINTER."   The field editing commands  (described
          earlier)  may be used to enter an address (or any other  text)  to
          print on a label or envelope.

          After the desired entry has been made,  the [F3] key will print  a
          standard  business  envelope (on HP Laser printers  only).   If  a
          return address has been established (see SETUP), then that address
          will print on the upper left corner of the envelope.

          The [F4] key prints the entered address on a label on the  printer
          specified as the label port in SETUP.  Labels and envelopes may be
          repeated by selecting the [F3] or [F4] key again.   The [Esc]  key
          terminates the LABELS command and returns to the main menu.

          To  print  envelopes  or labels from the addresses  found  in  the
          Phonebook database,  refer to the Phonebook Database  instructions
          found later in this documentation.

































                                      - 32 -


                                PHONEBOOK DATABASE
                                ------------------


          The  Phonebook  database is used to maintain a list of  names  and
          addresses.   The  NAME field is the major key  in  this  database. 
          Names will be sorted according to last name order.

          The  reports  included with the Phonebook database are  All  Names
          Summary, Current Name Summary, Envelope Address (standard business
          envelopes  on  HP Laser printers only),  and Label  Address.   The
          Label  Address report allows printing of all names or the  current
          name  only.   Label printing is designed for single column  labels
          measuring 3-1/2" x 1".

          There are no special database commands in the Phonebook  database. 
          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               Name       : string[30]
               Address1   : string[30]
               Address2   : string[30]
               City       : string[20]
               State      : string[2]
               Zip        : string[10]
               Phone1     : string[14]
               Phone2     : string[14]
               Birthday   : string[10]
               Comments1  : string[30]
               Comments2  : string[30]
               Comments3  : string[30]
               Comments4  : string[30]























                                      - 33 -


                                RECORDS DATABASE
                                -----------------


          The Records database is used to maintain a record of the  location
          of   important   records  like  insurance  policies   and   wills. 
          Description is the major key in this database.

          The  reports  included  with the Records  database  are  All  Item
          Summary and Current Item Summary.

          There  are no special database commands in the  Records  database. 
          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               Desc       : string[40]
               Location   : string[30]
               LastReview : string[10]





































                                      - 34 -


                                      SETUP
                                      -----


          The  SETUP command is used to establish the configuration for  the
          program.   In  SETUP,  you can select  program  colors  and  other
          defaults.  Available fields for SETUP include:


               COLORS:   If your computer has a color monitor, you will be
                         allowed to edit the program colors.  Only some of
                         the colors can be set including the background, low
                         text, normal text, headline, and help line.  A
                         sample screen is shown to assist in color
                         selection.  Use the up and down arrow keys to
                         select a color to modify, then use the left and
                         right arrow keys to choose a color.  The new colors
                         will take effect when you quit SETUP.

               BEEPER ON?:  If "Y", the computer's beeper will sound on
                         errors and other places within the program.  Set
                         this to "N" if the beep is not desired.

               HOUR CHIME?:  If "Y", the computer's beeper will sound when
                         the time reaches the hour mark.

               DEF PRINTER:   Identifies the type of printer used with your
                         computer for reports.

               LABEL PORT:    Identifies the printer port used for labels.
                         This is usually LPT1, but if you are using a second
                         printer for labels, then you would set the label
                         port to LPT2.

               DEFAULT RETURN ADDRESS:  This is the return address that will
                         print on envelopes.




















                                      - 35 -


                                 UTILITY COMMANDS
                                 ----------------

          UTILITY  commands are general purpose commands that do not fit  in
          other areas of the program.  After selecting UTILITY,  a  vertical
          list of utility options will appear for selection.   The available
          utility commands are described below.



          FIXUP

          Fixup  performs  two functions.   First,  it attempts  to  rebuild
          damaged databases by scanning the database and reconstructing  the
          index files.   Second, fixup attempts to free unused disk space by
          eliminating  old records (previously deleted) from  the  database. 
          The fixup command may be necessary in two situations.

               o  Damage has occurred in one of the databases for some
                  unknown reason.  A damaged database is indicated if the
                  program suddenly aborts while in the middle of an
                  activity.  A message may appear on the screen indicating
                  some type of fatal error.

               o  You have deleted many records from a given database. 
                  Fixup will free unused disk space and speed database
                  access.

          When  you  select  the Fixup command,  a list  of  databases  will
          appear.   After you select the desired database, you will be asked
          if your backups are current.  The fixup operation will then begin.

          It  is  important  that  you have a good  set  of  backups  before
          attempting fixup in case anything goes wrong.

          IMPORTANT:   MAKE SURE YOU DON'T COPY A CORRUPTED DATABASE ONTO AN
          OTHERWISE GOOD BACKUP DISK.



















                                      - 36 -


                                 VEHICLE DATABASE
                                 ----------------


          The  Vehicle database is used to maintain a record of  maintenance
          performed on your vehicles.   Vehicle Id is the major key in  this
          database.

          The  reports  included  with the Vehicle  database  are  All  Item
          Summary and Current Item Summary.

          There  are no special database commands in the  Vehicle  database. 
          Following  is  a  list  of the field  definitions  used  with  the
          TRANSFER command:


               VehId      : string[10]
               Date       : string[10]
               Mileage    : string[10]
               Desc       : string[40]
               MatSource  : string[30]
               MatCost    : numeric
               LabSource  : string[30]
               LabCost    : numeric
               TotalCost  : numeric































                                     - 37 -


                               REGISTRATION FORM
                               -----------------



          PROGRAM:  Point & Shoot Home Manager   VERSION:  2.0

          SERIAL NUMBER:  ____________________

                    Applied Micro Systems Technology
                    P.O. Box 1596, Welch Ave. Station
                    Ames, Iowa  50010


          Name      __________________________________________________


          Company   __________________________________________________


          Address   __________________________________________________

                    __________________________________________________

                    __________________________________________________



          Phone     (    ) _______________________



          Payment   $_______   $35 for full registration, printed 
                                   documentation and user support.
                                   (no cash please)  IA add 4% tax.


          Where did you hear about this program?  ____________________



          Comments  __________________________________________________

                    __________________________________________________

                    __________________________________________________

                    __________________________________________________

                    __________________________________________________

                    __________________________________________________




                                     - 38 -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0940

     Volume in drive A has no label
     Directory of A:\

    CHANGES  TXT       473   6-27-88   8:32p
    FILES    TXT      1904   6-27-88   8:33p
    FILES940 TXT      2481   9-16-88   3:16p
    GO       BAT        38   1-27-88   9:18a
    GO       TXT       463   1-27-88   9:18a
    PASH     EXE    206192   8-31-88   5:09p
    PASHACCT DBD     11084   6-01-88   5:32p
    PASHDOC  TXT     93627   7-30-88  10:03a
    PASHGL   DBD      6846   5-26-88  11:47a
    PASHHOME DBD      4564   5-25-88   7:56p
    PASHINS  DBD      4401   5-24-88   1:30p
    PASHPHON DBD      5379   5-24-88   1:32p
    PASHRECS DBD      3749   5-24-88   1:34p
    PASHVEH  DBD      4727   5-25-88   7:56p
    READ     ME       4073   6-28-88   1:09p
           15 file(s)     350001 bytes
                            5120 bytes free
