---
layout: page
title: "PC-SIG Diskette Library (Disk #2666)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2666/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2666"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2666.TXT

{% raw %}
```
Disk No: 2666
Disk Title: Extend-A-Name  2 of 2 (#2665 also)
PC-SIG Version: S1

Program Title: Extend-A-Name
Author Version: 2.12
Author Registration: $79.95
Special Requirements: None.

Whatever programs you use, DOS filenames are a common problem.  There
comes a time, sooner or later, when eight characters is just not enough
to properly identify your files.  Wouldn't it be nice to be able to
describe a file with a longer word, maybe a phrase, or even a whole
sentence?  Now you can, if you use EXTEND-A-NAME, the 60-character
filename utility.

EXTEND-A-NAME is a memory-resident utility giving you the freedom to
describe, organize, find, manage, and retrieve files in ways you never
thought possible.  The DOS filenames don't get changed.  The descriptive
filenames are stored in a hidden file linked to the real DOS filenames.
When your application requests a file, the   EXTEND-A-NAME window
pops-up.  Choose an appropriate 60-character file with a scroll bar
menu.

Select one of six configurations based on the number of files in your
largest subdirectory.  The five conventional memory configurations range
in size from 40K to 65K.  The sixth configuration uses Expanded Memory
(LIM 4.0) and requires only 3K of lower memory.

The program has automatic installation for the following programs:

~ Agenda          ~ Microsoft Word       ~ PFS Write

~ AutoCAD         ~ Microsoft Works      ~ Q & A

~ DisplayWrite    ~ Multimate Adv        ~ Quattro

~ Enable          ~ PC Write             ~ Samma

~ Lotus 1-2-3     ~ PeachText            ~ SmartWare

~ Sprint          ~ Symphony             ~ Volkswriter

~ WordPerfect     ~ WordStar             ~ XyWrite

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  PC-SIG Disk #2666 EXTEND-A-NAME disk 2 of 2  >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program, insert disk 1 and type: INSTALL  (press Enter)  ║
║                                                                         ║
║ To run the program after installation, type: XNAME  (press Enter)       ║
║                                                                         ║
║ To read the documentation, disk 2, type: README (press Enter)           ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
              Extend-A-Name - Feburary 20, 1988 (Version 2.10)

     This file contains additional information not found in the manual.

     ----------  PLEASE TAKE A MOMENT AND READ THROUGH IT  ------------

      README Topics
      -------------
      1.  Notes and Comments
      2.  Customer Support
      3.  Expanded Memory
      4.  Other Memory Resident Programs (SIDEKICK, et al)
      5.  New Features (not in manual)
      6.  Tips on 123v2, Symphony, and Quattro
      7.  Tips on Multimate
      8.  Tips on WordPerfect
      9.  Tips on Linking Extend-A-Name to Your Application  
     10.  Screen Flicker
     11.  Running on a Network
     12.  HP Laser Jet
     13.  Exceeding the 13 Trigger Limitation
-

     1. Notes and Comments
     ---------------------

       We realize that you probably won't read the whole manual,  but PLEASE
       take  a  look at the chapter on "Creating and saving new  files  with
       extended names".   It's important to see how the procedure for saving
       new files differs from what you're used to doing. 

       With   some  programs  (e.g.,  MS-Word,   Smart,   Volkswriter,   and
       WordPerfect),  Extend-A-Name  will now automatically pop  up  to  the
       Create/Save  Window  when  you  go to save a  NEW  file.   For  those
       programs that support this new feature, you need to follow the  steps
       outlined  in  the manual only if you want to save  an  existing  file
       under a new name.
-
       Please  fill out and return your warranty card as soon  as  possible. 
       The  SERIAL NUMBER of your copy is always displayed in the top  right
       hand  corner of all Extend-A-Name screens.  Be sure to include it  on
       the warranty card!

                      IF YOU DON'T RETURN YOUR WARRANTY CARD
            WE WON'T BE ABLE TO NOTIFY YOU OF ENHANCEMENTS AND UPGRADES!

       Although there is no dedicated space provided,  please include on the
       warranty  card  the  names of the programs you intend  to   use  with
       Extend-A-Name.   This  will  help  us to know  where  to  devote  our
       resources to provide further enhancements.


-    2. Customer Support
     -------------------

       The customer support number is (800)962-6360 and is  open from 9:30am
       to  4:30pm  Eastern time,  Monday thru Friday.  When you call we will
       ask you for the serial number,   the type of machine you  are  using,
       and the application(s) involved.


-    3. Expanded Memory
     ------------------

       Extend-A-Name  version  X will run in expanded  memory  (the   memory
       above  one  megabyte) ONLY if you have  Expanded  Memory   Management
       (EMM)  version  4.0  drivers.  If you have an INTEL  Above  Board  or
       InBoard  286/386 and need the EMM 4.0 drivers,  call INTEL  or  World
       Software  to order your free copy (there will be a  nominal  shipping
       and  handling charge).  If you have memory from other than INTEL  and
       Extend-A-Name does not work, call us for assistance.


-    4. Other Memory Resident Programs (SIDEKICK, et al)
     ---------------------------------------------------

       If  after installing Extend-A-Name your PC locks up,  it is  probably
       because   of  a  conflict  with  another  memory  resident   program. 
       SIDEKICK,  for example, must loaded AFTER Extend-A-Name.   Generally,
       keyboard  macro  programs  should  be  loaded  BEFORE   Extend-A-Name
       (however,  PROKEY version 4 is a known exception;  it must be  loaded
       AFTER Extend-A-Name).   If problems persist,  call World Software for
       assistance.

          
-    5. New Features since Version 2.00
     -----------------------------------

       A. Extend-A-Name can now be installed in any subdirectory.

          The  default  subdirectory is "C:\XNAME".  You are free  to  enter
          another  drive  and/or  subdirectory.    The  PATH  line  of   the
          AUTOEXEC.BAT found in the root directory of the destination  drive
          will be updated accordingly.

          If you install Extend-A-Name on a drive other than the boot drive,
          you  will need to update the AUTOEXEC.BAT manually.   Add  to  the
          PATH  line  the  drive and subdirectory  where  Extend-A-Name  was
          installed.   Insert "XNAME"  anywhere after the path statement but
          before SIDEKICK (if you have it).


-      B. The TAG and UNTAG commands have been simplified:

          Please  disregard pages 56 & 57 of the manual which described  how
          to TAG and UNTAG files the old way.  The new way is much simpler:

          TAG:  First highlight the file to be tagged and then press [T].  A
                diamond  will appear to the left of the tagged file and  the
                highlight bar will move down to the next file.  Repeat until
                you've tagged all the files you want.

          UNTAG: Works just like tag, except it removes the tag.

          TAG or UNTAG All Files: Hold down [CTRL] and press [T] or [U].


-      C. A new Prompt-Type load option has been added: Command.

          This  Prompt-Type should be selected for applications where  there
          is  no  apllication prompt (i.e.  dBase III where  you  type   "do
          [filename] or similar).

          NOTE:  When  you  capture  a trigger  for  this  type  of  program
          Extend-A-Name  will be looking for that trigger only in the  exact
          place on your screen where the trigger was captured.


-      D. A FIND command has been added in the File Window:

          This command will find a file by either its extended name or   DOS
          name when you type any character or characters which  appear as  a
          series  anywhere  in  the extended name  or  filename.   The  list
          narrows  for  each  letter typed.  FIND will  search  the  current
          library; however, you can switch to the MASTER LIBRARY by pressing
          the [F3] key.  Press [RETURN] to exit FIND.


-      E. Pop up directly to the File Window:

          If  you  have  only  one library  (besides  the  MASTER  LIBRARY),
          Extend-A-Name will go directly to the File Window.  To get back to
          the Library Window (for the Path or Setup commands) press [ESC] or
          [Q] for Quit.


-      F. The PATH Command:

          The PATH command now changes the default subdirectory when you use
          it  while  in 123,  Symphony, Word,  and Wordperfect.   For  other
          applications,  the  PATH command will let you see and  load  files
          from another subdirectory while not actually changing default path
          (those  programs  keep track of the where to save your  files  and
          that cannot be changed by Extend-A-Name).

          If you create your own triggers,  remember to set the Load-Options
          for  each one.   The "Alt-Path" parameter determines how the  PATH
          command  will  function.   The "None" option lets you  change  the
          default  subdirectory  with PATH.  The "Drive:\Path"  or  "Drive:"
          options let you only look at another subdirectory with PATH.


-      G. Triggers to suppress Auto-Popup ("Anti-Triggers"):

          An   "anti-trigger"   negates  the  effect  of  another   trigger,
          preventing Extend-A-Name from popping up.  This is desirable if  a
          macro  executes a command that causes Extend-A-Name to pop  up  at
          the wrong time.

          To create an "anti-trigger", find or place something on the screen
          that appears ONLY while the macro executes (e.g.  in Lotus goto  a
          cell  address  that  is  never used).   Get  to  the  point  where
          Extend-A-Name  pops up and go to the Utilities.   Select  Triggers
          and then Create.   For the "program name" enter the same prefix as
          the  trigger(s)  that cause Extend-A-Name to pop up and  add  "<>"
          (e.g.  "123V2"  is  the  prefix program name  for  all  Lotus  123
          triggers,   thus  "123V2 <>"   would  be  the  name  for  the  its
          "anti-trigger").  Capture the part of the screen that appears only
          during  macro execution.   No Load-Options are  necessary.   Don't
          forget to Update the triggers when you're done.


-      H. Triggers for Auto-Popup to the Create/Save Window:

          You  can  now  direct  Extend-A-Name  to  pop  up  to  either  the
          Library/File  Window  or  the  Create/Save  Window  based  on  the
          trigger's name.  Trigger Names that begin with an "*"  will direct
          Extend-A-Name to pop up to the Create/Save Window when  activated. 
          For  example,  a trigger name of "WP5" will result in a pop up  to
          the Library/File Window,  while "*WP5" sends it to the Create/Save
          Window.   Use  a Create/Save trigger only at prompts  that  accept
          nothing but a new filename.


-      I. Sorting the Files in Ascending and Descending Sequence.

          In the File Window you can sort your files 3 basic ways:  The [F3]
          key sorts by description (extended name) and the [F4] key sorts by
          either DOS filename or Date/Time, depending on which is showing in
          the right hand column.   A pair of arrows in place of the function
          key  tells  you  how the files are  sorted.   Arrows  pointing  up
          indicate that the sort is in ASCENDING order.  Arrows are pointing
          down indicate that the sort is in DESCENDING order.  To change the
          direction of a sort,  press the function key for the current  sort
          again  (i.e.,  to sort the files by description  you  would  press
          [F3];  pressing [F3] again would change the direction of the  sort
          by description).


-    H. Tips on 123v2, Symphony, and Quattro
     ---------------------------------------

       PREVENTING EXTEND-A-NAME FROM POPPING UP DURING MACROS...

          If  a  macro  uses  File  Retrieve,  Combine,   or  Xtract,   then
          Extend-A-Name will pop up unless you do one of the following:

          MANUAL   METHOD:    Before   you   execute   the   macro,    press
          [SHIFT]+[ALT]+[X]  to  turn Extend-A-Name off.   After  the  macro
          completes, press [SHIFT]+[ALT]+[X] again to switch on again.

          AUTOMATIC  METHOD:  Modify the macro to goto cell A8192 before  it
          does a File Retrieve, Combine, or Xtract.   Extend-A-Name will not
          pop up while row 8192 is the top row displayed.
-

     7. Tips on Multimate
     --------------------

       If  have  only  one  subdirectory for your  documents,  you  can  set
       Extend-A-Name  to pop up automatically when creating a  new  document
       instead  of having to press [X] three times to call  the  Create/Save
       Window.  Get to the Multimate "Create a new document" screen and then
       pop up Extend-A-Name manually with [ALT]+[X].   Press [F7] to get  to
       the Utilities,  select Triggers,  and then Create.   Name the trigger
       "*MM"  (the leading "*"  denotes a Create/Save trigger) and [RETURN]. 
       Move  the highlight bar over "Create a New Document"  at the top  and
       then capture it by pressing [F2].  Back in Extend-A-Name,  Update the
       triggers.  Press  [ESC]  until you're back  to  the  Multimate  menu. 
       Reselect  [2]  to  do Create again.   The  Extend-A-Name  Create/Save
       Window  should  now pop up automatically.  Call us if  you  have  any
       trouble.


-    8. Tips on WordPerfect
     ----------------------

       You  must now use the WordPerfect command [SHIFT]+[F10] to  select  a
       document.  See the Tip Sheets on WordPerfect for more details.

       When  you give the command to save a file with either [F7]  or  [F10]
       and  that  file  has  yet  to  be  named,   Extend-A-Name  will   now
       automatically pop up to the Create/Save Window.  It is only necessary
       to press [X] three times to save an existing file under a new name.


-    9. More Tips on Linking Extend-A-Name to Your Application
     ---------------------------------------------------------

       When  Extend-A-Name pops up for the first time it assumes  that  your
       data is in the current subdirectory (referred to as the ACTIVE PATH). 
       For programs like 1-2-3, Symphony, and Wordperfect, this is generally
       the  right place.   Other programs, however,  can look elsewhere  for
       data  without  actually  changing  the  current  subdirectory  (e.g.,
       Quattro, SmartWare, Volkswriter, Wordstar, etc.).  In that case,  use
       the  Extend-A-Name  PATH  command (found on the  Library  Window)  to
       change  to  the desired subdirectory (referred to  as  the  ALTERNATE
       PATH).

       Additional tips on the entering a subdirectory in the PATH command:

       1. Pressing [F2] will give you the ACTIVE PATH.

       2. To change drives, you need only enter the drive letter.

       3. To change subdirectories on the same drive, you may omit the drive
          and just type the subdirectory name (e.g.  instead of  "C:\subdir"
          you could enter just "subdir").


-    10. Screen Flicker
     ------------------

       On  some  monitors  a  slight  flicker  may  occur  after  installing
       Extend-A-Name.   If  this  happens,  add  the  "/F"  option  (inhibit
       flicker)  when  running  XNAME  (as  in  "XNAME/F").    Modify   your
       AUTOEXEC.BAT file accordingly.

       On  newer  CGA  monitors  that  don't  have  a  problem  with   snow,
       Extend-A-Name will run faster if you load it with the "/F" option.


-    11. Running on a Network
     ------------------------

       Extend-A-Name was designed to run on a stand-alone PC.
       It will work on a network under the following guidelines:

       a. You  need  to  purchase  a  license  for  each  copy  of
          Extend-A-Name in use on the network.

       b. The INSTALL program asks you for the starting drive letter of
          your  network.   Extend-A-Name performs network  control  for
          that drive and up.   Drives below the first network drive are
          treated as single-user resources.

       c. The following files MUST reside in a personal subdirectory:

          XNAME.CNF, XNAME.EXT, XNAME.NAM, XNAME.TRG, and XNAME.USR

          In  other words,  each person using Extend-A-Name  must  have
          there own set of these XNAME data files.  DO NOT SHARE THEM!

          The  program and help file (XNAME.COM and XNAME.HLP)  may  be
          moved to a shared directory.

       d. Only  one  user  at  a time may pop  up  Extend-A-Name  in  a
          particular subdirectory.   If another user attempts to pop up
          in  a  busy  subdirectory,  they will  be  advised  that  the
          XNAME.LIB file is in use.

       e. If you have questions, please call!


-    12. HP Laser Jet with XNPRINT
     -----------------------------

       For an HP Laser Jet that prints 60 lines per page, use:

       C:\> XNPRINT/LJ


-    13. Exceeding the 13 Trigger Limitation
     ---------------------------------------

       The triggers are stored in a file called "XNAME.TRG" which is located
       in the subdirectory where you installed Extend-A-Name.   This file is
       read  when Extend-A-Name is loaded into memory.   If you want to  use
       Extend-A-Name  with several programs and need more than 13  triggers,
       here's what you can do:
-
       1. Run "A:UPGRADE" and select TRIGGERS for a program you need.  After
          that's done,  copy the "XNAME.TRG" file to the subdirectory  where
          you keep the program whose triggers you just selected. Repeat this
          until you have an "XNAME.TRG" file of all the desired programs.

       2. Remove "XNAME"  from your AUTOEXEC.BAT so that Extend-A-Name  will
          not be loaded when you boot your PC.

       3. Create  or  modify  batch  files  to:   A)  Copy  the  appropriate
          "XNAME.TRG" file to the XNAME subdirectory, B) Run "XNAME" to load
          it  into memory,  C) Run your application,  D) After you exit  the
          appliction,  copy  the  trigger file back,  E)  And  finally,  run
          "XNAME/U" to unload it from memory.
-
       For example,  if you had an application called "WP" that was found in
       a  subdirectory  called  "C:\WPDIR"   and  Extend-A-Name  was  in   a
       subdirectory  called "C:\XNAME",  the batch file might look like  the
       following:

       A.       COPY C:\WPDIR\XNAME.TRG,C:\XNAME
       B.       XNAME
       C.       WP
       D.       COPY C:\XNAME\XNAME.TRG,C:\WPDIR
       E.       XNAME/U

       Please call us if you have any questions.
-

                              =================
                              End of README.TXT
                              =================
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2666

     Volume in drive A has no label
     Directory of A:\

    123      TIP     12149   3-06-89  10:30a
    ACAD     TIP     10211   3-28-89   2:55p
    DW4      TIP     13318   3-06-89  10:30a
    ENABLE   TIP     13512   4-06-89   9:08a
    README   COM       716   9-01-88   5:22p
    README   TXT     17376   4-13-89   8:42a
    SYMPH    TIP     12185   3-06-89  10:30a
    WP       TIP     13053   3-06-89  10:30a
    XYW3     TIP     10862   3-06-89  10:30a
    GO       BAT        38   7-23-91   2:37a
    FILE2666 TXT      1827   7-26-91   2:43a
    GO       TXT       848   7-26-91   3:36a
           12 file(s)     106095 bytes
                           51200 bytes free
