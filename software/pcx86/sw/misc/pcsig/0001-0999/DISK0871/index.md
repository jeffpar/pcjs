---
layout: page
title: "PC-SIG Diskette Library (Disk #871)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0871/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0871"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILE FRIEND AND FANCY LABEL MAKER"

    FILEFRIEND is a memory-resident file manager which can display files
    from up to 10 disks and subdirectories; add or remove files from the
    listed directory; sort by name, extension, date, time, size, or path;
    scroll through the directory or tag files to copy, rename, delete,
    type, dump, or change file attributes.
    
    All commands are quickly executed by the ten function keys and the
    bottom line of the screen will display the options available to you.
    The top line of the screen shows the free disk space.  View the
    date/time or change them.
    
    Edit your DOS commands as you enter them, keeping your five previous
    commands in a buffer, allowing you to go back and execute a command
    without having to reenter it. A log of your 20 last commands are shown
    on the right side of the screen.
    
    Most computer users have a need for a simple utility which can print
    their labels for them.  And whether those labels are going to be used
    on disks, letters, or something else, FANCY LABEL is the program for
    you.
    
    Save and retrieve a specific label and print as many copies as you want.
    All the labels are saved into a data file on the drive of your choice.
    For each line you may choose either normal, double width, condensed,
    normal compressed, or double compressed.  Each print style can be
    either
    in italics or regular print mode.
    
    FANCY LABEL is designed to work with single-feed fanfold labels.  You
    can use either 3-1/2" x 15/16" labels, on which you can print up to
    five lines, or 4" x 7/16" labels, on which you can print up to eight
    lines per label.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISK.DOC

{% raw %}
```
--------------------------------------------------
DISK NO                  FANCY LABEL
--------------------------------------------------
FLABEL   EXE    Main Program -- Creates Labels
FLABEL   DOC    Documentation File
README   1ST    Starting Instructions
LABEL    CNF    Stores Configuration Details
```
{% endraw %}

## FF_EVAL.DOC

{% raw %}
```











                   __________________________________________ 
                  |                                          |
                  |                          (TM)            |
                  |                FileFriend+               |
                  |                                          |
                  |   DOS Resident File Management Utility   |
                  |                                          |
                  |               User's Guide               |
                  |         Evaluation Documentation         |
                  |                                          |
                  |               Version 1.10a              |
                  |                                          |
                  |          User-supported software         |
                  |                                          |
                  |            by ColePro Software           |
                  |                                          |
                  |__________________________________________|


                                 P.O. Box 50762
                              Palo Alto, CA  94303








                         Copyright (C) 1985, 1986, 1987
                               All Rights Reserved



            This  document is copyrighted 1985,  1986,  and 1987  by 
            ColePro  Software of Palo Alto,  California.  All Rights
            Reserved.  No portion of this document may be reproduced 
            in  any  form  without the written  consent  of  ColePro 
            Software.











    FileFriend+ User's Guide - Acknowledgements


        FileFriend and FileFriend+ are trademarks of ColePro Software.

        MS,  MS-DOS,  and  Microsoft  are registered trademarks  of  Microsoft
        Corporation.

        IBM and PC-DOS are registered trademarks, and PC and XT are trademarks
        of International Business Machines Corporation.

        WordStar   is   a  registered  trademark  of  MicroPro   International 
        Corporation.


                                   DISCLAIMER

        ColePro Software reserves the right to change FileFriend+'s  specifica-
        tions at any time without notice. 

        This software is provided without warranty of any kind, either expres-
        sed or implied,  including, but not limited to any implied warranty of 
        merchantability and/or fitness for a particluar purpose.

        The  user  assumes  all  risk as to the use  and  performance  of  the 
        programs.

        In no event is ColePro Software liable to you for any damages  result-
        ing  from the use of this software,  even if ColePro has been notified 
        of the possibility of such damages.






























                                       i
   FileFriend+ User's Guide (Evaulation) - User-supported Software


   ===============================================================

   WHAT FileFriend+ CAN DO FOR YOU!

        Make  the time you spend at your PC more productive with a friend  who 

   is always available to help you find files fast, move them to where they're 

   needed, backup important information!

     o   FAST!  No need to leave the program you're in and run another  - just 

   press  two keys and FileFriend+ reappears,  on top of your current program. 

   When done, it returns control to that program!

     o   Manage your files efficiently,  even if they're on different disks or 

   in  different  subdirectories.   View  files  from  up  to  10  disks   and 

   subdirectories!

     o  Point & Execute.  That's all it takes to Copy,  Rename,  Delete, Type, 

   Dump,  ChDir,  MkDir,  RmDir,  and change file attributes.  No need to type 

   commands or filenames!

     o   Find Files fast by viewing them the way you want.  7 sorting methods: 

   Alphabetical,  by Extension,  by Date & Time (most recent files first),  by 

   Date, by Time, by Size, or by Path!

     o   Important  information always at your fingertips:  free  disk  space, 

   number of files, time & date (settable), day-of-week, current directory!

     o  Save time by operating on many files at once with wildcards (* and  ?) 

   or by marking a block of files!

     o   Save typing with FileFriend+'s superior shortcuts,  including  recall 

   and edit of your last 5 commands.

     o  Avoid confusion.  You won't lose track of what you've done,  because a 

   log of your last 20 commands is shown!

     o  Never lose important data again due to lack of disk space! FileFriend+ 

   is always there, ready in an emergency because it is memory resident.




                                       1
   FileFriend+ User's Guide (Evaulation) - User-supported Software


     o   Export feature means you don't have to remember filenames for use  in 

   other programs - FileFriend+ does it for you!

     o  Try before you buy! 

     o  FileFriend+  run  on Local Area Networks!  Access your LAN  files  any 
   time!


   ===============================================================

   USER-SUPPORTED SOFTWARE AND WHY YOU SHOULD SUPPORT IT

        FileFriend+  is sold as user-supported software.  FileFriendy  is  the 

   same  professional-quality  software  available in stored for  hundreds  of 

   dollars;  only its marketing technique is different from "normal" software. 

   This marketing technique is similar to the way public radio and TV stations 

   function.  This product, FileFriend+, is available free. We ask that if you 

   try it and find it useful,  you support our efforts to provide such quality 

   products.  The  price  of support is reasonable,  $34.95,  and you  receive 

   benefits,  too.  First, you get a registered copy of the latest FileFriend+ 

   version and are added to our customer list.  This enables us to notify  you 

   of any new versions of FileFriend+.  New versions are priced at only  $5.00 

   for registered customers,  and you'll receive notification of a new version 

   as  soon as it is ready.   This means you won't have to wait months for the 

   new version to appear on your local bulletin board.   And new versions mean 

   new features - perhaps a feature you've thought should be added.

        Second,  you  get a professionally printed and bound copy of the  com-

   plete User's Guide.  This thorough document explains each of  FileFriend+'s

   commands  and features in depth,  and includes examples of ways to use them 

   which make you more productive.

        Third, you get our thanks for supporting user-supported software. Your 

   support  tells us that you appreciate the thousands of hours of  work  that 

   went  into  making FileFriend+ a professional quality software  product.  


                                       2
   FileFriend+ User's Guide (Evaulation) - User-supported Software



        Fourth,  we listen to you,  our supporters.  You tell us what features 

   you  like,  what  you don't,  and what you would like the next  version  of 

   FileFriend+ to have.

        Last,  you will feel good.  Why?   Each time you use FileFriend+,  you 

   will know that you've contributed to its development and upgrading.


   ===============================================================

   DISTRIBUTING FileFriend+ TO OTHERS

        You  are  encouraged to distribute FileFriend+,  along with  its  disk 

   documentation,  to others so that they may try it. The following conditions 

   apply:

        1. The programs must be distributed unchanged.

        2. The programs may not be distributed as part of another package.

        3. The following files must be distributed together:
             FF.COM
             FF_EVAL.DOC
             FFINST.COM
             FFORDER.FRM
             READ.ME

        4.  You must tell the person you give FileFriend+ to that it is  User-
   supported software, and what that means.

        5.  The programs must be distributed at no charge, except for the cost 
   of the disk, which must not exceed $10.00.

        6.  You  may not copy the registered User's Guide.  Such copying is  a 
   violation of applicable copyright laws.  This documentation is an incentive 
   to people to register, and is available only to those who do register.















                                       3
   FileFriend+ Order Form - User-supported software



   ===============================================================

   BUYING A REGISTERED COPY OF FileFriend+

        To  buy  a registered copy of FileFriend+ and  support  user-supported 

   software,  simply  fill out this order form and send it,  along with $34.95 

   (U.S., California residents add $2.45 sales tax) to:

        ColePro Software
        P.O. Box 50762
        Palo Alto, CA  94303

        Please print legibly so we get your order to you right away.


   Name:               __________________________________

   Address:            __________________________________

   City, State:        __________________________________

   Zip code:           __________________________________

   Daytime phone:      (____)____________________________

   How did you get a trial copy of FileFriend+?

        _________________________________________________________________

   What made you decide to buy a registered copy?

        _________________________________________________________________

        _________________________________________________________________




















                                       4
    FileFriend+ User's Guide (Evaulation) - The FileFriend+ Screen



   ===============================================================

   THE FileFriend+ SCREEN

        FileFriend+  has been designed to provide a great deal of  information

   on one screen, which is shown below.

   File   1 of   3 (Maximum 200)  Saturday  6/21/86   By Default  Verify
   Free Space:  366592  Total Bytes Listed:     2048  Total Bytes Marked:    0
   Current_Path:_A:\________(This_is_the_Header_Window)____________Esc to Exit
   Aa: HOME             D  12:30:14   1-16-86         0 |
   Aa: WORK             D  12:30:45   1-16-86         0 |
   Aa: PHONE    LIS     A  12:10:01  12-04-85      2048 |
                                                        |
                       /\                               |        /\
          (This is the Filename Window)                 |  (This is the
                       \/                               |   Command Result
                                                        |   Window)
                                                        |        \/
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
                                                        |
   Aa= Aa:\*.*              (This is the Path Window)
   Command:                 (This is the Command Line)
   1Refrsh 2Drv A: 3Drv B: 4AnyDrv 5AddFil 6RmvFil 7 ChDir 8 MkDir 9 RmDir 10Verify
                  (The line above is the Function key display)


        After you load FileFriend+ (by running FF.COM),  simply press the Left 

   Shift  key  and  the Alt key to access it.  Press the Escape  key  to  exit 

   FileFriend+.  If  you  get  garbage on your screen instead  of  the  normal 

   FileFriend+  display,  then  your copy of FileFriend+ is probably  not  in-

   stalled for your monitor configuration. In this case, you can try the three 

   different monitor configurations with the command line parameters  /M,  /C, 

   and  /B (for Monochrome,  Color,  and Black & White).  These are  described 

   below  in section J.  Once you determine the proper setup,  you can  perma-

   nently  install your copy that way with FileFriend+'s installation program, 


                                       5
    FileFriend+ User's Guide (Evaulation) - The FileFriend+ Screen



   FFINST.COM.  If  you get flicker on a color or black &  white  screen,  run 

   FFINST,  select the proper monitor configuration,  and respond "Y"es to the 

   question 'Does your screen flicker?'.



















































                                       6
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary



   ___________________________________________________________________________

                           FileFriend+ Command Summary

        A. Explanation of FileFriend+ paths

        B. Shortcut summary

        C. Command Line Editing summary

        D. Wildcard summary

        E. Unshifted command summary

        F. Shifted command summary

        G. Control shift command summary

        H. Alt shift command summary

        I. Arrow key command chart

        J. Command Line parameter summary

        K. Function Key Map

   ___________________________________________________________________________

        This  disk copy of the User's Guide contains the information you  need 

   to  start  using FileFriend+ to increase the productivity of the  time  you 

   spend computing. The complete User's Guide, which is over 80 pages long, is 

   available only when you buy a registered copy of FileFriend+.


   ===============================================================

   A. EXPLANATION OF FileFriend+ PATHS

        On the FileFriend+ screen,  you have probably noticed an extra charac-

   ter  in the filenames listed in the Filename Window.  For instance,  in the 

   example screen on the previous page,  the filename Aa:PHONE.LIS.  The small 

   case  "a" character is the FileFriend+ path for that file.  Two lines  from 

   the bottom of the FileFriend+ screen is the FileFriend+ Path Window,  which 

   translates these single-character paths into full DOS paths.  In this exam-

   ple, Aa: stands for A:\*.* - drive A:, root directory (\), all files (*.*).


                                       7
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary



        You can have up to 10 paths open at once; all files in those paths are 

   displayed in the Filename Window. In addition, FileFriend+ paths can always 

   be used in place of DOS paths in FileFriend+ commands. This means that once 

   you open a path,  you no longer have to type the full path name of files in 

   that path.  Simply use the FileFriend+ path abbreviation.  The abbreviation 

   for A:\BACKUP\ in the example above would be simply Ad:.


   ===============================================================

   B. SHORTCUT SUMMARY

        FileFriend+ provides the following typing shortcuts:

        o    Specify  the current filename as an argument with  the  same 
             function  key used to execute the command,  or with  /.  For 
             instance,  if  you want to delete the current  file,  simply 
             press  Shift PF3 three times.  The first press of Shift  PF3 
             brings the Delete: prompt, the next press writes the current 
             filename as the argument. The filename may be edited at this 
             point with the editing keys, or erased with Escape. Pressing 
             Shift PF3 again executes the command;  this is equivalent to 
             pressing RETURN.
             All  FileFriend+ commands which require arguments write  the 
             current  filename  on the command line  when  the  command's 
             function key is pressed again.

        o    FileFriend+  path  names which can be used in place  of  DOS 
             path   names.   For  instance,   if  path  Aa:   stands  for 
             A:\WORK\MEMOS\ and path Bb:  for B:\BACKUP\MEMOS\,  you  can 
             copy a file from Aa: to Bb: with the command:
                  Copy: Aa:BUDGET.DOC Bb:

        o    Recognition  of DOS wildcard characters  in  filenames.  For 
             instance, to copy all the files from A: to B:,
                  Copy: A:*.* B:

        o    Typing commands is made easy, thanks to FileFriend+'s super-
             ior Command Line Editing functions.

        o    FileFriend+  remembers the last five command parameters  you 
             entered;  these can be recalled with one keystroke and edit-
             ed.  Great  when  you  need to enter the same or  a  similar 
             command often!







                                       8
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ===============================================================

   C. COMMAND LINE EDITING SUMMARY

        FileFriend+  provides  many advanced Command Line  Editing  functions, 

   which are described below.

   ___________________________________________________________________________

                       Command Line Editing Functions

        Key            Editing Function
        Escape         Erases the entire Command Line.  New arguments may 
                       be entered.
        Left Arrow     Moves the cursor one character to the left without 
                       erasing.
        Right Arrow    Moves  the cursor one character to the right with-
                       out erasing.
        Home           Moves  the cursor the the first character  entered 
                       after the Command Line prompt.
        End            Moves the cursor to one character beyond the  last 
                       one  entered  in  response  to  the  Command  Line 
                       prompt.
        Up Arrow       Writes  one  of the previous 5 Command Line  para-
                       meters you entered as the new parameter.  This can 
                       now be edited.
        Down Arrow     Writes  one of the previous 5 Command  Line  para-
                       meters you entered as the new parameter.  This can 
                       now be edited.
        Delete key     Deletes the character under the cursor.
        Insert  key    Toggles insert mode.  When insert mode is on,  new 
                       characters  you type are inserted into the  param-
                       eter. When it is off, the characters already there 
                       is overwritten.
        RETURN         Executes the command entered on the Command  Line, 
                       unless there are no arguments there, in which case 
                       no command is executed.
        BackSpace      Erases one character to the left of the cursor.
        Function key   Pressing  the function key that activated the com-
                       mand  erases  all arguments already typed  on  the 
                       Command  Line,  then writes the current  filename, 
                       complete with FileFriend+'s path abbreviation,  as 
                       the first argument.
                       Pressing  the  same  function  key  a  third  time 
                       executes the command.  Thus, if you want to execute 
                       a   command  with  the  current  filename  as  the 
                       argument, simply press that command's function key 
                       three times.
        /              Pressing  / erases all arguments already typed  on 
                       the  Command Line,  then writes the current  file-
                       name,  complete with FileFriend+'s path  abbrevia-
                       tion, as the first argument.

   ___________________________________________________________________________


                                       9
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ===============================================================

   D. WILDCARD SUMMARY

        FileFriend+  recognizes  DOS wildcards in filenames.  The table  below 

   explains the two wildcard characters, * and ?.

   ___________________________________________________________________________

                        FileFriend+ Wildcard Conventions

        Wildcard       Effect
           ?           Tells DOS to not match characters at the position.
           *           Tells  DOS to not match characters from the  posi-
                       tion  of  *  to either the end of the  filname  (8 
                       characters)  or the filename extension (3  charac-
                       ters).

   ___________________________________________________________________________





































                                       10
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ===============================================================

   E. UNSHIFTED COMMAND SUMMARY

        Filename Window Refresh,  Drive switching,  add and remove files, sub-

   directory  commands.  Note:  PF2 and PF3 can be installed to switch to  any 

   drives, not just A: and B:, using FFINST.COM. 

        Function Key        Command
        F1                  Refresh the Filename Window
        F2                  Switch to Drive A: (or any drive via FFINST)
        F3                  Switch to Drive B: (or any drive via FFINST)
        F4                  Switch to a drive you specify
        F5                  Add files to the Filename Window
        F6                  Remove files from the Filename Window
        F7                  Change Directory (ChDir)
        F8                  Create Directory (MkDir)
        F9                  Remove Directory (RmDir)
        F10                 Toggle Verification mode
        Escape              Exit FileFriend+


   ---------------------------------------------------------------

   REFRESH THE FILENAME WINDOW - F1

        When  you copy,  rename,  or delete files,  the Filename Window is not 

   automatically updated. Pressing F1 causes all open paths to be reread from 

   disk,  updating the list of files shown in the Filename Window. Information 

   in the Header Window,  such as the number of files and the free disk space, 

   is also updated.


   ---------------------------------------------------------------

   SWITCH DRIVES - F2, F3, F4

        These  three  keys allow you to change the default disk drive  to  any 

   drive.  FileFriend+ comes installed so that F2 and F3 switch to A:  and B:, 

   respectively, but you can change this with FFINST.COM. 









                                       11
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ---------------------------------------------------------------

   ADD FILES TO THE FILENAME WINDOW - F5

        At  the prompt Add files:,  you may press RETURN to abort the command, 

   or specify a file specification. The files corresponding to this specifica-

   tion are added to the list of files displayed in the Filename Window.


   ---------------------------------------------------------------

   REMOVE FILES FROM THE FILENAME WINDOW - F6

        At  the prompt Remove files:,  you may press RETURN to abort the  com-

   mand,  or  specify a file specification or FileFriend+ path name,  such  as 

   Ca:.  The  path corresponding to those files iis closed,  and the files  in 

   that path are removed from the Filename Window.


   ---------------------------------------------------------------

   CHANGE DIRECTORY - F7

        At  the  prompt  Change to Path:,  you may press RETURN to  abort  the 

   command,  or  enter the name of the subdirectory or drive you want to  make 

   the  current  subdirectory.  FileFriend+ makes it easy to change to  a  new 

   subdirectory by pressing F7 three times.  Simply make the subdirectory  you 

   want to change to the current file (the one in bold).


   ---------------------------------------------------------------

   MAKE DIRECTORY - F8

        At  the prompt Make Path:,  you may press RETURN to abort the command, 

   or enter the name of the subdirectory you wish to create.


   ---------------------------------------------------------------

   REMOVE DIRECTORY - F9

        At the prompt Remove Path:, you may press RETURN to abort the command, 

   or enter the name of the subdirectory you wish to remove.  You can remove a 


                                       12
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary



   subdirectory by pressing F9 three times if it is the current file.


   ---------------------------------------------------------------

   TOGGLE VERIFICATION MODE - F10

        F10 toggles FileFriend+'s verification mode. The current status of the 

   mode  is indicated in the upper right of the Header Window by "Verify"  for 

   Verification,  or  "No Verify" for No verification.  If verification is on, 

   you are prompted before every delete, rename, or copy (only if the destina-

   tion file already exists).  This provides an extra safeguard to insure that 

   you don't wipe out a bunch of files accidentally.


   ---------------------------------------------------------------

   EXIT FileFriend+ - ESCAPE

        Pressing the Escape key exits FileFriend+ and returns you to  whatever 

   program  you  were in when you brought FileFriend+ up.  That  application's 

   screen is restored; in fact, the original program does not even realize you 

   ever left!


   ===============================================================

   F. SHIFT KEY COMMAND SUMMARY

        File  operations,  time and date commands.  Remember,  to specify  the 

   current file (the one in bold) as an argument,  simply press the  command's 

   function key again or press /.  For instance, to type the current file, you 

   need  only  press Shift F4 three times.  The first press brings  the  Type: 

   prompt to the Command Line;  the second writes the current filename as  the 

   argument to the Type command; the third press executes the command (this is 

   the same as pressing RETURN). 






                                       13
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


        Function Key        Command
        Shift F1            Copy
        Shift F2            Rename
        Shift F3            Delete
        Shift F4            Type
        Shift F5            Dump (hexadecimal)
        Shift F6            Toggle 7 or 8 Bit TYPEing
        Shift F7            Get Time
        Shift F8            Set Time
        Shift F9            Get Date
        Shift F10           Set Date


   ---------------------------------------------------------------

   COPY - SHIFT PF1

        At  the prompt Copy:,  you must enter two filename  specifications:  a 

   source file and a destination file,  with a space in between. DOS wildcards 

   (*  and ?) and FileFriend+ path abbreviations can save you a great deal  of 

   typing, especially if a FileFriend+ path represents a long path name.


   ---------------------------------------------------------------

   RENAME - SHIFT F2

        At the prompt Rename:,  you must enter two filename specifications:  a 

   source file and a destination file,  with a space inbetween.  DOS wildcards 

   (*  and ?) and FileFriend+ path abbreviations can save you a great deal  of 

   typing, especially if a FileFriend+ path represents a long path name.


   ---------------------------------------------------------------

   DELETE - SHIFT F3

        At the prompt Delete:,  you must enter one filename specification: the 

   name  of  the  file  you  want to delete.  DOS  wildcards  (*  and  ?)  and 

   FileFriend+ path abbreviations can save you a great deal of  typing,  espe-

   cially if a FileFriend+ path represents a long path name.







                                       14
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ---------------------------------------------------------------

   TYPE - SHIFT F4

        This  types  a file to the screen.  Remember that to type the  current 

   file, you need only press Shift F4 three times.


   ---------------------------------------------------------------

   DUMP - SHIFT F5

        This dumps a file in hexidecimal and ASCII to the screen. You can dump 

   the current file by pressing Shift F5 three times.


   ---------------------------------------------------------------

   TOGGLE 7 OR 8 BIT TYPING SHIFT F6

        This toggles 7/8 bit TYPEing mode. When the mode is 7 bit, any charac-

   ter which has its 8th bit high (such as many characters in WordStar files), 

   is  changed to a 7 bit character.  This is also true for the output of  the 

   Dump command. 8 bit TYPEing displays characters as they appear in the file.


   ---------------------------------------------------------------

   GET TIME - SHIFT F7

        This  command  displays the current system time in the Command  Result 

   Window.


   ---------------------------------------------------------------

   SET TIME - SHIFT F8

        This command allows you to set a new system time.


   ---------------------------------------------------------------

   GET DATE - SHIFT F9

        This  command  displays the current system date in the Command  Result 

   Window.



                                       15
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary



   ---------------------------------------------------------------

   SET DATE - SHIFT F10

        This command allows you to set a new system date.



   ===============================================================

   G. CONTROL KEY COMMAND SUMMARY

        Sorting  commands,  block export, and file attribute toggle commands.

        Function Key        Command
        Control F1          Sort By Name (alphabetically)
        Control F2          Sort By Extension
        Control F3          Sort By Date
        Control F4          Sort By Time
        Control F5          Sort By Size
        Control F6          Sort By Path
        Control F7          Sort By Time within Date (most recent files first)
        Control F8          Toggle files' Hidden attribute
        Control F9          Toggle files' Read-Only attribute
        Control F10         Toggle files' System attribute
        Control Insert      Export filenames to the keyboard buffer


   ---------------------------------------------------------------

   SORT BY NAME - CONTROL F1

        This command sorts the files in the Filename Window alphabetically.


   ---------------------------------------------------------------

   SORT BY EXTENSION - CONTROL F2

        This command sorts the files in the Filename Window first by  filename 

   extension  (the three characters after the dot in a filename),  then alpha-

   betically within extension groups.


   ---------------------------------------------------------------

   SORT BY DATE - CONTROL F3

        This  command  sorts  the files in the Filename Window first  by  date 

   (newest files first), then alphabetically for files with the same date.



                                       16
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ---------------------------------------------------------------

   SORT BY TIME - CONTROL F4

        This  command  sorts the files in the Filename Window first  by  time, 

   then alphabetically for files with the same time.


   ---------------------------------------------------------------

   SORT BY SIZE - CONTROL F6

        This  command  sorts the files in the Filename Window  first  by  size 

   (smallest files first), then alphabetically for files with the same size.


   ---------------------------------------------------------------

   SORT BY PATH - CONTROL F6

        This  command separates files according to which FileFriend+ path they 

   belong to.  The files in the path "a" appear first,  then the files in "b", 

   and so on.  Within paths, the files are sorted alphabetically. This command 

   is useful if you have opened several paths (see Adding Files - F5).


   ---------------------------------------------------------------

   SORT BY TIME WITHIN DATE - CONTROL F7

        This  command sorts so that the most recent files appear at the top of 

   the Filename Window.  The last file in the Window is the oldest file. Files 

   with the same time and date are sorted alphabetically. This command is very 

   useful for backing up your work, because it puts the files you have changed 

   recently at the top of the Filename Window.


   ---------------------------------------------------------------

   TOGGLE FILES' HIDDEN ATTRIBUTE - CONTROL F8

        This command Hides and Unhides files.  Hidden files cannot be deleted. 

   If a file is now Hidden, it becomes Unhidden, and vice versa. DOS wildcards 

   and FileFriend+ path abbreviations are accepted, of course.


                                       17
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary




   ---------------------------------------------------------------

   TOGGLE FILES' READ-ONLY ATTRIBUTE - CONTROL F9

        This command sets and resets the Read-Only attribute for files. If the 

   file is currently Read-Only, it becomes Read/Write. If it is Read/Write, it 

   becomes Read-Only.  DOS wildcards and FileFriend+ path abbreviations can be 

   used.


   ---------------------------------------------------------------

   TOGGLE FILES' SYSTEM ATTRIBUTE - CONTROL F10

        Certain  DOS  files  are marked as system files with the  System  file 

   attribute.  This attribute can be toggle on and off with this command.  DOS 

   wildcards and FileFriend+ path abbreviations can be used.


   ---------------------------------------------------------------

   EXPORT A MARKED BLOCK - CONTROL INSERT

        This command exports filenames in the marked block. Marking blocks and 

   exporting them is explained under the Alt key commands.



   ===============================================================

   H. ALT KEY COMMAND SUMMARY

        Block Commands, Export options, and Cancel FileFriend+.

        Function Key        Command
        Alt F1              Copy Block
        Alt F2              Rename Block
        Alt F3              Delete Block
        Alt F4              Clear Marks
        Alt F5              Mark File
        Alt F6              UnMark File
                            Exporting Filenames to the keyboard buffer
        Alt F7                  ii. Toggle Full Pathname or Filename only
        Alt F8                 iii. Toggle Block mode or Line mode
        Alt F9                  iv. Set a delay between keystrokes
        Alt F10             Cancel FileFriend+ and remove from memory



                                       18
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ---------------------------------------------------------------

   MARK FILE - ALT F5

        This  command  marks the current file as being part of  the  block.  A 

   special character, <<, appears next to the filename. Several operations can 

   be performed on the block of files;  these are explained below. This facil-

   ity is provided so that you can work with groups of files which do not have 

   common filenames or extensions,  and thus cannot be operated on easily with 

   DOS wildcards. The total of the file sizes of all files marked is displayed 

   in the Header Window.


   ---------------------------------------------------------------

   UNMARK FILE - ALT F6

        This command removes the current file from the block. The << character 

   disappears next to the file.


   ---------------------------------------------------------------

   COPY BLOCK - ALT F1

        This  command prompts you for a destination for the marked  block.  If 

   there is more than one file in the block, you should include a DOS wildcard 

   in the destination filename. The files in the block are then copied.

        If FileFriend+'s verification is on,  you are asked,  for each file for 

   which the destination file already exists, whether you want to go ahead and 

   copy over it.


   ---------------------------------------------------------------

   RENAME BLOCK - ALT F2

        This command also prompts you for a destination for the marked  block. 

   Again,  if  there is more than one file in the block,  you should include a 

   DOS wildcard in the destination filename.  The files in the block are  then 



                                       19
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   renamed.

        If  FileFriend+'s verification is on,  you are asked,  for each  file, 

   whether you want to go ahead and rename it.


   ---------------------------------------------------------------

   DELETE BLOCK - ALT F3

        This command deletes all the marked files.  It prompts you whether you 

   really want to do this.  In addition,  if FileFriend+'s verification is on, 

   you are asked, for each file, whether to delete it.


   ---------------------------------------------------------------

   CLEAR MARKS - ALT F4

        This  command clears all the marks;  there no longer any files in  the 

   marked block. It prompts to make sure you really want to do this.


   ---------------------------------------------------------------

   EXPORTING FILENAMES FROM THE BLOCK

        Not  only can you copy,  rename,  and delete the files in  the  marked 

   block,  you  can export them to the keyboard buffer.  Whatever program  you 

   have  running  at the time reads these filenames just as if you  had  typed 

   them yourself. This is very useful for copying lists of filenames into word 

   processor documents and for backing up. To export a marked file, all you do 

   is press Control Insert. The Insert key is part of the numeric keypad.


   ---------------------------------------------------------------

   EXPORT FULL PATHNAME OR FILENAME ONLY - ALT F7

        This  command  toggles Full Pathname/Filename Only mode for  exporting 

   filenames.  Full Pathname mode exports not only the filename, but the drive 

   and subdirectory of the file. Filename Only mode exports only the filename.




                                       20
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ---------------------------------------------------------------

   EXPORT BLOCK MODE OR LINE MODE - ALT F8

        This  command toggles Block/Line mode for exporting  filenames.  Under 

   Line mode,  every time you press Control Insert,  one filename is exported. 

   Under  Block mode,  when you press Control Insert,  every filename  in  the 

   block is exported, with a RETURN character inbetween each.


   ---------------------------------------------------------------

   SET A DELAY BETWEEN KEYSTROKES FOR EXPORTING - ALT F9

        This command allows you to set a delay between export keystrokes. This 

   is  useful  if you find that the application program you are  exporting  to 

   cannot read the characters as fast as FileFriend+ is exporting them.


   ---------------------------------------------------------------

   CANCEL FileFriend+ - ALT F10

        This  command  removes FileFriend+ from memory.  It also  removes  any 

   program  loaded after FileFriend+,  so be careful.  It prompts you to  make 

   sure you really want to do this.


   ===============================================================

   I. ARROW KEY COMMAND CHART

        The  arrow  keys are used to move the current file pointer  among  the 

   list  of  files  displayed  in the Filename Window.  The  current  file  is 

   displayed  in bold characters,  and may be operated on with ease using  the 

   shortcuts described above.











                                       21
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   _______________________________________________________________________

                         Arrow key Cursor Movement

      Key         Function
      Home        Makes  the  top file currently in the Filename  Window  the 
                  current file.
      End         Makes the bottom file currently in the Filename Window  the 
                  current file.
      Up Arrow    Makes  the  file  directly above the current file  the  new 
                  current  file.  
      Down Arrow  Makes  the  file directly below the current  file  the  new 
                  current  file.  
      Page Up     Displays the previous window of files;  the file at the top 
                  of the Filename Window moves to the bottom of the window.
      Page Down   Displays the next window of files;  the file at the  bottom 
                  of the Filename Window moves to the top of the window.
      Left Arrow  Zooms  the  Command  Result Window so that  it  covers  the 
                  entire FileFriend+ screen.
      Right Arrow UnZooms  the Command Result Window so that it  covers  only 
                  the right side of the FileFriend+ screen.

   __________________________________________________________________________


































                                       22
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ===============================================================

   J. COMMAND LINE PARAMETER SUMMARY

        FileFriend+ accepts the following command line parameters (each must be 

   separated by a space character):

        /A        Autoload.  Loads  FileFriend+ without waiting  for  the 
                  user  to swap disks and press a key.  FileFriend+ loads 
                  itself and exits back to DOS.

        /F=nnn    nnn  is  the number of files to allow in  the  Filename 
                  window. This maximum number appears in the top right of 
                  the Header window;  the default is 200.  If you specify 
                  more files, FileFriend+ uses more memory.

        /M        Monochrome monitor driven by a monochrome card.

        /C        Color monitor drive by a color card.

        /B        Black  &  White (Monochrome monitor driven by  a  color 
                  card).

        A:*.*      Up to 10 filename specifications can be entered on the 
                  command line.  FileFriend+ opens a path for each speci-
                  fication and read those files into the Filename window.






























                                       23
    FileFriend+ User's Guide (Evaulation) - FileFriend+ Command Summary


   ===============================================================

   K. FUNCTION KEY MAP


             _______________________________________________________
             |          PF1             |           PF2            |
             |                          |                          |
             | Alone: Refresh Paths     | Alone: To Drive A:       |
             | Shift: Copy              | Shift: Rename            |
             | Ctrl : Sort by Name      | Ctrl : Sort by Exten.    |
             | Alt  : Block Copy        | Alt  : Block Rename      |
             |                          |                          |
             |__________________________|__________________________|
             |          PF3             |           PF4            |
             |                          |                          |
             | Alone: To Drive B:       | Alone: To any drive      |
             | Shift: Delete            | Shift: Type              |
             | Ctrl : Sort by Date      | Ctrl : Sort by Time      |
             | Alt  : Block Delete      | Alt  : Clear Marks       |
             |                          |                          |
             |__________________________|__________________________|
             |          PF5             |           PF6            |
             |                          |                          |
             | Alone: Add files         | Alone: Remove files      |
             | Shift: Dump              | Shift: 7/8 bit TYPEing   |
             | Ctrl : Sort by Size      | Ctrl : Sort by Path      |
             | Alt  : Mark a file       | Alt  : Unmark a file     |
             |                          |                          |
             |__________________________|__________________________|
             |          PF7             |           PF8            |
             |                          |                          |
             | Alone: ChDir             | Alone: MkDir             |
             | Shift: Get Time          | Shift: Set Time          |
             | Ctrl : Sort by Date/Time | Ctrl : Toggle Hidden     |
             | Alt  : Export Full Path  | Alt  : Export Block/Line |
             |                          |                          |
             |__________________________|__________________________|
             |          PF9             |           PF10           |
             |                          |                          |
             | Alone: RmDir             | Alone: Toggle Verify     |
             | Shift: Get Date          | Shift: Set Date          |
             | Ctrl : Toggle Read-Only  | Ctrl : Toggle System     |
             | Alt  : Set Export Delay  | Alt  : Cancel FileFriend+|
             |                          |                          |
             |__________________________|__________________________|











                                       24

```
{% endraw %}

## FILES871.TXT

{% raw %}
```
Disk No  871
Program Title: FANCY LABEL and FILEFRIEND version 1.10A
PC-SIG version 1
 
    FANCY LABEL can save and retrieve a label and print as many copies as
you require. All the labels are saved into a data file on the drive of your
choice. For each line you may choose either normal, double width,
condensed, normal compressed, or double compressed. Each print style can
either be in italics or regular print mode. FANCY LABEL is designed to work
with single-feed fanfold labels. You can use either 3 1/2" X 15/16" labels,
on which you can print up to five lines, or 4" X 1 7/16" labels, on which
you can print up to 8 lines per label.
 
    FILEFRIEND is a memory-resident program that manages your program
files. It can be popped up over any other program, and when exiting you
have the option of removing the program from memory. The FILEFRIEND
directory is capable of displaying files from up to 10 disks and
subdirectories. Files can be added or removed from the listed directory
according to your specifications. The directory can be sorted by name,
extension, date, time, size, or path. You can scroll through the directory
or tag files to copy, rename, delete, type, dump, or change file
attributes. All commands are quickly executed by the 10 function keys, and
the bottom line of the screen will show the options available to you. The
top line of the screen shows the free disk space, and you can view the
date/time and optionally change it. FILEFRIEND has command-line editing,
and can execute your five previous commands. A log of your 20 last commands
are shown on the right part of the screen.
 
Usage: File Management / Label Maker
 
System Requirements: 128K memeory, one disk drive and an EPSON or EPSON
compatible printer.
 
How to Start: Type: FFINST (press enter) for FILEFRIEND. Type FF (press
enter) for FANCY LABEL.
 
Suggested Registration: $10.00 for FANCY LABEL, $34.95 for FILEFRIEND.
 
File Descriptions:
 
-------- ---  FANCY LABEL
FLABEL   EXE  Main program.
FLABEL   DOC  Documentation.
README   1ST  How to get started.
LABEL    CNF  Data file.
DISK     DOC  File descriptions.
-------- ---  FILE FRIEND
FFORDER  FRM  Order form.
FF_EVAL  DOC  Documentation.
READ     ME   How to get started.
FF       COM  Main program.
FFINST   COM  Installation program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## FLABEL.DOC

{% raw %}
```

FANCY LABEL -- Version 1.0 (c) 1987 David C. Simpson




FANCY LABEL is distributed through an innovative marketing
approach called "ShareWare".  FANCY LABEL is not copy protected
and may be freely copy and shared in accordance with the license
printed below.

If you find FANCY LABEL to be convenient and useful to you a
donation of $10 would be very appreciated.  Registration allows
us to keep you informed of updates and other changes.

License:
--------
Copyright (c) 1987 David Simpson, All Rights Reserved.

You are free to use, copy and distribute FANCY LABEL providing that:

      NO FEE IS CHARGED FOR USE, COPYING OR DISTRIBUTION.

      IT IS NOT MODIFIED IN ANY WAY.

      Clubs  and  user  groups  may charge a nominal fee for
expenses and handling while distributing FANCY LABEL.

      This program is provided AS IS without any warranty,
expressed  or implied,  including  but  not  limited  to fitness for
a particular purpose.



FANCY LABEL was developed for those folks that require special
labels for just about any reason.  For example: labels for
diskettes, book reports, advertising labels on catalogues or even
freezer labels.  Once set up you can save and retrieve a label and
print as many copies as you require. For each line you may choose
either normal(10 characters per inch), double width , condensed,
normal compressed (12 characters per inch) or double compressed in
italics or in regular print style.





















                            PAGE -1-



FANCY LABEL is designed to work with single feed fanfold labels.
You can use either 3 1/2" X 15/16" labels on which you can print up
to five lines or 4" X 1 7/16" labels on which you can print up to 8
lines per label. FANCY LABEL was tested on an Epson FX100+ as well
as a Star 10X printer and should work with any Epson compatible.

The first time you run FANCY LABEL you will be asked which drive you
keep your data disk in and which drive your program disk is kept.
If you have a hard drive you will be asked for a path.  You will not
be asked to do this again unless you remove the file "LABEL.CNF"
which is created at this time.

FANCY LABEL --- The Menu
   The operation of FANCY LABEL is almost self-explanatory as you
   start to work with the program. The menu lines consists of two
   lines.  The top line consists of the commands: GET; CLEAR; EDIT;
   SAVE; PRINT; BIG; LITTLE; and QUIT. The top line also has the status
   indicators for ITALICS and COMPRESSED (either ON or OFF).
   The second command line will indicate 1st Line through either
   5th or 8th line depending on the size of the label you are using.

   You will be prompted at the bottom of the screen to choose an option
   to do this press the 1st letter of your option choice:

   GET : Retrieve a previously saved label. Either type in the name or
         press 'D' and return which will give you the label directory
         from which you can choose your label.

   CLEAR : Erases the label you are currently working on.  Be sure to
           save before using this command.

   EDIT : You will be asked to input the line you wish to edit. Make
          your changes and save.

   PRINT : You will be asked how many labels to print. Input quantity
           and press return.  Press return again when prompted if you
           are ready.

   SAVE : You will be asked to supply a label name (up to 8 characters)
          All label files have a .LBL extension.  Saved label files
          can be retrieved with the GET command.

   BIG : Choose this option if you want the 4" X 1 7/16" label.

   LITTLE : Choose this option if you want the 3 1/2" X 15/16" label.

   QUIT : Exit program.















                            PAGE -2-




1st - 8th LINE : Indicates to the program that you wish to develop a
                 line of text on the indicated line.

   When you press 1 through 8 you see the following prompt:

          NORMAL, DOUBLE, CONDENSED TYPE, OTHER OR MENU <N/D/C/O/M>

   Choose 'N' for Normal; 'D' for Double; 'C' for Condensed type.
   Choosing 'O' allows you to toggle between the italic and compressed
   on and off.

   Once you have made your choice you will be asked to type in your
   line of text.  You will be prompted by a row of dots.  These dots
   indicate how long you can make your line.  If you exceed the dots,
   your line will be truncated so that it will fit on the label.
   (The compressed mode allows for more characters per line if you run
   into a space problem).  You are also NOT allowed to use quotation
   marks (") or commas(,) in your labels. I suggest using ' ' and ;.
   This problem will be fixed in the next revision.


FUTURE REVISIONS:
     Depending on how this version is received will depend on whether
     or not future revisions are written.  Many hours went into the
     development of this program and your suggestions are welcome even
     if you decide not to register.  To those of you who find this a
     useful and productive program and send a $10 contribution; will
     receive a registration number which will entitle them to technical
     support and notification of future upgrades.

THE FILES:
    README.1ST -- Info File
    FLABEL.EXE -- The main Program
    FLABEL.DOC -- Your reading it.
    LABEL.CNF -- Created when FLABEL.EXE is run the first time.
                 (May or may not appear on distribution disk.)



---------------------------------------------------------------------
| PLEASE RESISTER ME AS AN OWNER OF FANCY LABEL version 1.0         |
| ENCLOSED FIND MY CONTRIBUTION OF $10                              |
|                                                                   |
|  NAME ........................................................... |
|                                                                   |
|  ADDRESS ........................................................ |
|                                                                   |
|  CITY ........................... STATE ......... ZIP ........... |
|                                                                   |
|  MAIL TO : DAVE SIMPSON                                           |
|            PO BOX 527                                             |
|            CARPENTERSVILLE, IL 60110                              |
|                                                                   |
---------------------------------------------------------------------







                            PAGE -3-



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0871

     Volume in drive A has no label
     Directory of A:\

    FFORDER  FRM      2992   3-03-87   8:42a
    FF_EVAL  DOC     47782   3-02-87   8:24p
    READ     ME       2203   3-02-87   8:34p
    FF       COM     59766   3-03-87  10:57p
    FFINST   COM     18713   3-01-87   5:44p
    -------- ---         5  12-01-87   3:26p
    FLABEL   EXE    101950   1-03-86  11:45a
    FLABEL   DOC      6699   1-04-86   1:33a
    README   1ST       217   1-03-86   6:22a
    LABEL    CNF         4   1-03-86   6:24a
    DISK     DOC       311   1-03-86  10:04a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-01-87   3:40p
    FILES871 TXT      2453  12-03-87   8:34a
           14 file(s)     244135 bytes
                           69632 bytes free
