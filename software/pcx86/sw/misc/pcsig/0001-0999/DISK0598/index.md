---
layout: page
title: "PC-SIG Diskette Library (Disk #598)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0598/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0598"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROFESSIONAL MASTER KEY"

    MASTER KEY is a powerful disk and file manipulation utility, comparable
    to programs like Norton Utilities.
    
    Edit any part of any disk or file using a handy windowed hex and ASCII
    screen dump. Editing can be from the ASCII text or the hex dump. Menus
    and organization help you learn the package quickly. Many other
    utilities are included, such as duplicate file search, file renaming
    and erasing abilities, and unerasing of files mistakenly erased.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES598.TXT

{% raw %}
```
Disk No   598
Program Title: The PROFESSIONAL MASTER KEY UTILITIES version 2.0
PC-SIG version 1.9

The PROFESSIONAL MASTER KEY UTILITIES is an incredibly powerful and easy
to use disk and file manipulation utility.  It is comparable with, if
not better than, some commercial programs like the Norton Utilities.
You can edit any part of any disk or file using a handy windowed hex and
ASCII dump of the file on the screen.  Editing can be from the ASCII
text, or from the hex dump.  Menus and excellent organization let you
quickly learn the package.  Many other utilities are included, such as a
duplicate file search, file renaming and erasing abilities, DOS directly
updating and UNERASING.

Usage:  File Patching Utility.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

UF       COM  UnFormat utility.
FD       COM  File disk utility.
INSTALL  EXE  Installation program.
PMK      EXE  Professional MASTER KEY.
PMK-MENU EXE  PMK Master Menu.
PMK-UTIL DOC  Documentation file.
PMK-UTIL INF  Introduction text file.
README   BAT  Batch file to view PMK-UTIL.INF.
ZERODISK EXE  Removes all traces of all data from a disk.
ZEROFILE EXE  Removes all traces of a file's current data from your disk.
MANUAL   BAT  Prints manual.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PMK-UTIL.DOC

{% raw %}
```



             YES!  The Professional Master Key Utilities are useful to me 
        and I want to register my copy.

             I  understand that by registering,  I will be sent a program 
        disk containing the latest release of The Professional Master Key 
        Utilities,  complete documentation (on disk, ready for printing), 
        and announcements,  as they are published,  of future releases of 
        The Professional Master Key Utilities.

             As  a registered user of The Professional Master Key  Utili-
        ties,  I will ALWAYS be able to upgrade to the latest version  of 
        The Professional Master Key Utilities FREE OF CHARGE!  To receive 
        the  most  recent version free,  I agree to return  the  original 
        master  disk along with a self addressed,  postage paid  diskette 
        mailer,  and  I  will be returned the latest of The  Professional 
        Master Key Utilities!


        -----------------------------------------------------------------
        The registration fee for each copy of The Professional Master Key 
        Utilities is $25.   

               Send me __ copy/copies at $25 each.  Total _______________


                    Name:___________________________________

                    Address:________________________________

                    City:____________________ State:________

                    Zip Code:________________

                    Telephone:_______________


        Send cash, money order, or check (payable to R. P. Gage) to...

        RPG Software Farm     P.O. Box 9221      Columbus, MS  39705-9221
        ++---------------------------------------------------------------


        Comments:________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________















                      
                      The Professional Master Key Utilities
               Programs that open the doors into your MS-DOS disks

                            User's Guide To Operation
                                   Version 2.0



















                                RPG Software Farm
                                  P.O. Box 9221
                            Columbus, MS  39705-9221

                     Copyright (C) 1986, 1987 by R. P. Gage
                               All rights reserved

                      Document revision:  November 2, 1987













              The Professional Master Key Utilities -- Version 2.0
          Copyright (c) 1986, 1987 by R. P. Gage, all rights reserved.



             Disclaimer of Warranties and Limitation of Liabilities


             The  words,  "The Professional Master Key  Utilities,"  "the 
        utilities," and "the programs," refer to the following executable 
        files:
             
             PMK.EXE ........... Professional Master Key, version 2.1
             FD.EXE ............ Fill Disk, version 2.0
             INSTALL.EXE ....... Installation for all PMK programs
             PMK-MENU.EXE ...... PMK Master Menu
             UF.EXE ............ Un Format, version 2.0
             ZERODISK.EXE ...... Zero Disk, version 2.0
             ZEROFILE.EXE ...... Zero File, version 2.0
             

             The Professional Master Key Utilities and this documentation 
        are distributed with no express or implied warranty.     

             There  is  no warranty of fitness for a  particular  purpose 
        offered.   You, as the user, are advised to experiment and become 
        familiar  with all of the programs before relying on  them.   You 
        assume all risk for the use and operation of these programs.  

             You  alone are responsible for any loss of profits, loss  of 
        savings, or other incidental or consequential damages arising out 
        of  the correct or incorrect use of these programs, even  if  RPG 
        Software Farm is advised of the possibility of any damages due to 
        a defect in any program. 

             RPG  Software Farm does not warrant that this  documentation 
        is accurate, or that any of The Professional Master Key Utilities 
        programs will operate as they were claimed or designed. 

             By  using  any  of the programs composing  The  Professional 
        Master Key Utilities programs you agree to the above limitations.

        -----------------------------------------------------------------
             DESQview is a trademark of Quarterdeck Office Systems.

             IBM,  TopView,  and  PC-DOS are trademarks of  International 
        Business Machines Corporation.

             MS-DOS  and  Microsoft Windows are trademarks  of  Microsoft 
        Corporation.
        -----------------------------------------------------------------
             The Professional Master Key Utilities are not related to and 
        should  not be confused with the commercial program,  MASTER*KEY, 
        sold by Sharpe Systems Corporation.



              The Professional Master Key Utilities -- Version 2.0
          Copyright (c) 1986, 1987 by R. P. Gage, all rights reserved.



                 User Supported Software Registration Agreement


             The Professional Master Key Utilities are not public  domain 
        or  free  software.  The Professional Master  Key  Utilities  are 
        copyrighted programs supported by you, the users that find  these 
        programs productive!  

             If  you benefited in some way from The  Professional  Master 
        Key Utilities or make regular use of any of the programs,  please 
        register your copy for $25.  Registered users are sent a  program 
        disk containing the latest release of the programs, documentation 
        (on  disk,  ready for printing), and published  announcements  of 
        future releases of The Professional Master Key Utilities.

             If  the user of The Professional Master Key Utilities  is  a 
        commercial  or  governmental organization,  the registration  fee 
        must be paid for each computer The Professional Master Key Utili-
        ties is used on.



                 User Supported Software Distribution Agreement


             Anyone not charging a "duplication" fee, individual or  non-
        profit  user  group, may freely copy and share  The  Professional 
        Master  Key Utilities.  All program and documentation files  must 
        be distributed together and must not be modified in any way.

             User Supported Software or Shareware distributors or  anyone 
        charging  a fee to duplicate or distribute a disk containing  The 
        Professional  Master Key Utilities must receive written  approval 
        from  RPG Software Farm before collecting any money  in  exchange 
        for a disk containing The Professional Master Key Utilities.   In 
        no case should any fee exceed $7.50.  

             The Professional Master Key Utilities may not be distributed 
        by any "for-profit" user group, commercially, or with any commer-
        cial product without prior written approval.



                                Table Of Contents

                                                                    Page

             Introduction to the Utilities ..........................  1
                  System Requirements ...............................  4
                  User Requirements .................................  5
                  Conventions Used ..................................  6

             Installing The Professional Master Key Utilities .......  7

             Professional Master Key ................................ 10
                  Selecting a File .................................. 12
                  Alter Files ....................................... 14
                  Change Disk ....................................... 15
                  Disk Edit ......................................... 16
                  Erase Files ....................................... 20
                  File Edit ......................................... 21
                  Information ....................................... 22
                  Locate Files ...................................... 23
                  Map Disk/Files .................................... 24
                  Quit .............................................. 25
                  Rename Files ...................................... 26
                  Undelete Files .................................... 27

             Fill Disk .............................................. 30

             PMK Master Menu ........................................ 32

             Un Format .............................................. 34

             Zero Disk .............................................. 38

             Zero File .............................................. 40

             Appendix A:  Error Messages ............................ 42
                  Professional Master Key ........................... 44
                  Fill Disk ......................................... 47
                  Install ........................................... 48
                  PMK Master Menu ................................... 49
                  Un Format ......................................... 50
                  Zero Disk ......................................... 52
                  Zero File ......................................... 53

             Appendix B:  Future Directions ......................... 54
        Introduction to the Utilities


                          Introduction to the Utilities

             The Professional Master Key Utilities are an evolving  group 
        of  programs designed to open the doors into your  MS-DOS  disks.  
        They give you the flexibility, ease of use, and power to  manipu-
        late and change your disks in many ways that you weren't able  to 
        previously. 

             The  present  version of these programs,  version  2.0,  has 
        considerably  improved since the last released version.  All  the 
        programs  were  rewritten in the C programming language  to  take 
        advantage  of that language's features.  Because of the  complete 
        revision,  the programs are much faster, more powerful,  and  use 
        less memory.

             The number of programs in the utilities has also grown  from 
        four to seven.  This growth makes the programs easier to use  and 
        increases their value to you.  You can now run all of the  utili-
        ties  from  one menu, so you won't have to remember  all  of  the 
        commands.   There is also an installation program that  lets  you 
        configure  the options and colors of the programs in any way  you 
        want.


             Professional Master Key (PMK).  PMK is much more than a mere 
        sector editor.  It also edits, manipulates, renames, erases,  and 
        most importantly undeleted files.  The features packed into  ver-
        sion 2.1 of PMK include:

             -- Access any MS-DOS disk available.  Any sized floppy disk, 
                  any sized hard disk,  any sized RAM disk, and any other 
                  physical  or  virtual  disk accessed through  a  device 
                  driver can be used.   The only limitation on a disk  is 
                  that its sector size cannot exceed 2048 bytes.

             -- Access  any file or sub-directory in any sub-directory on 
                  these disks.   The status of a file or sub-directory is 
                  not important.  PMK can easily access all Hidden, Read-
                  Only, and System files.

             -- Edit  all  sectors on a disk.  The disk is  edited  on  a 
                  sector  by  sector basis, giving  full  access,  either 
                  sequentially  or randomly, to any available  sector  on 
                  the  disk.  The editing display now includes  both  the 
                  sector number and cursor offset within the sector.

             -- Edit  all sectors within any file or sub-directory on the 
                  disk.   Files  are also edited by sector,  giving  full 
                  access to any sector in the file or sub-directory in  a 
                  sequential or random manner.

             -- Search  sequentially for and go immediately to any  ASCII 
                  text up to 70 characters long or any hex data up to  35 
                  words long while editing a disk or file.



        The Professional Master Key Utilities, version 2.0        Page 1
        Introduction to the Utilities


             -- Quickly  display a graphical map of total disk usage  and 
                  free  space,  as well as a map of the location  of  any 
                  file on the disk. 

             -- Change  any  of the file attributes for any file or  sub-
                  directory on a disk.   This includes Read-Only, Hidden, 
                  System and Archive status as well as the date and  time 
                  of creation.

             -- Find  any  file or sub-directory on a  disk  matching  an 
                  ambiguous  (like  *.BAT) or unambiguous (PMK.EXE)  file 
                  specification, including Hidden and System files.  

             -- Rename any file or sub-directory on a disk.

             -- Erase any file on a disk, including Read-Only files.

             -- Undelete any file or sub-directory on a disk that is able 
                  to be undeleted.


             Fill Disk.  Fill Disk writes any message you wish on all  of 
        the free sectors on a disk leaving existing files untouched.   It 
        can also zero out all of the unused sectors, removing all  traces 
        of  any old file data.  The uses of Fill Disk are  many,  ranging 
        from stamping a hard disk with your name and address (to  provide 
        you  with  a positive means of identifying it in the event  of  a 
        theft) to merely leaving yourself a message on the disk.


             Install.   Finally,  there  is an easy way to configure  The 
        Professional  Master  Key Utilities to look and run the  way  you 
        want them to.   The installation program lets you reconfigure the 
        colors  displayed.   You can also change the default settings for 
        the  /Mono and /Slow options to make the utilities run better  on 
        your computer.


             PMK Master Menu.  PMK Master Menu makes running the programs 
        easier and helps new users learn how the utilities work.  As each 
        program in The Professional Master Key Utilities is  highlighted, 
        a brief narration on it is shown describing what its function  is 
        and  options it has.  Then, the program can run just as it  would 
        from the MS-DOS command line, with or without options.  


             Un  Format.   Protecting against accidentally  formatting  a 
        hard disk is what Un Format is all about.  When used regularly it 
        protects hard disk users from losing many of their files and data 
        after an accidental hard disk format.  After a surprising  format 
        of  your  hard disk, Un Format, when used properly,  quickly  and 
        easily  restores the hard disk to the state it was in  before  it 
        was formatted.




        The Professional Master Key Utilities, version 2.0        Page 2
        Introduction to the Utilities


             Zero Disk.  Zero Disk removes all traces of all data from  a 
        disk.  Unlike Fill Disk, which can optionally zero unused sectors 
        of  a file while leaving all existing files untouched, Zero  Disk 
        completely  eliminates all existing files along  with  everything 
        else.   If you want to make sure an old disk can't  be  dissected 
        for confidential data, zero that disk.


             Zero File.  Zero File removes all traces of a file's current 
        data  from  your disk.  A file deleted by MS-DOS could  later  be 
        recovered  on  the disk using PMK.  However, a file  zeroed  with 
        Zero  File  cannot be recovered, in any way, from that  disk.   A 
        file's current data is completely eliminated from your disk.   By 
        using  Zero File along with Fill Disk, you can make sure that  no 
        trace of a sensitive file's data, new or old, remains anywhere on 
        your disk.









































        The Professional Master Key Utilities, version 2.0        Page 3
        Introduction to the Utilities                 System Requirements


                               System Requirements

             To  run,  The Professional Master Key Utilities require  the 
        following "standard" equipment:

             a computer ............. IBM PC/XT/AT or somewhat compatible
             an operating system .... MS-DOS or PC-DOS 2.0 or later
             a monitor .............. Monochrome, Color, Enhanced 
             memory ................. 128k free (above operating system)
             disk drives ............ virtually anything


             Computer.   Any  computer that uses MS-DOS as  an  operating 
        system  and  is at least compatible on a BIOS level with  IBM  PC 
        computers  should run The Professional Master Key Utilities with-
        out any problem.   Computers that are 100% IBM PC compatible will 
        operate  considerably  faster due to direct  screen  writing  for 
        video output.  

             Operating  system.   The Professional Master  Key  Utilities 
        will  work correctly when using MS-DOS or PC-DOS version  2.0  or 
        later.  Additionally, The Professional Master Key Utilities  have 
        successfully run under the TopView, DESQview, and Microsoft  Win-
        dows  operating  environments.  In all  cases,  The  Professional 
        Master  Key  Utility programs run in a separate  window  allowing 
        simultaneous use with other programs.  

             Monitor.   If  your  computer has a monitor  and  a  display 
        adapter,  chances are that they work fine with  The  Professional 
        Master  Key  Utilities.  If you have a color  monitor  and  color 
        display adapter, the screen displays are in color.  If you have a 
        monochrome monitor/adapter or a color monitor/adapter in a  black 
        and white mode, the screen displays are in monochrome.

             Memory.   This shouldn't be much of a consideration  due  to 
        the  relatively inexpensive cost of RAM.  However, as a  minimum, 
        The Professional Master Key Utilities require 128k of free memory 
        above that required by the operating system.  More free memory is 
        desired, but is usually only necessary when you are using a  hard 
        disk that contains many files and sub-directories.  

             Disk  drives.   Again,  if your computer has and  uses  disk 
        drives, chances are that they will work without any problems with 
        The Professional Master Key Utilities.   Each of the programs can 
        work  with  and  use virtually any MS-DOS disk your  system  has.  
        This includes 160k,  180k,  320k,  360k, and 1.2MB floppy drives; 
        hard disks drives; RAM disks; and physical or virtual disk drives 
        accessed by a device driver.  
             
             What these requirements end up meaning to is there is a very 
        good probability that The Professional Master Key Utilities  will 
        run on any MS-DOS computer, yours included, with at least 128k of 
        RAM available.




        The Professional Master Key Utilities, version 2.0        Page 4
        Introduction to the Utilities                   User Requirements


                                User Requirements

             To use The Professional Master Key Utilities,  you are  also 
        required to have at least some of the following:

             experience ............... an intermediate to advanced level
             a desire to learn ........ and a will to discover what's new
             respect .................. for the power you now have
             

             Experience.  The Professional Master Key Utilities  programs 
        are  designed to be as easy and straightforward to use as  possi-
        ble.  Because of that, anyone can use the utilities, a "first day 
        beginner"  or a "seasoned master."  However, due to the  concepts 
        and difficulty involved with explaining the operation and  physi-
        cal layout of disks, some experience is desired.

             A  desire to learn.   Experience isn't always required.   If 
        you  don't have a lot of experience but have a big will to  learn 
        more about what's on a disk and how it works, you have definitely 
        come  to the right place.  The Professional Master Key  Utilities 
        will help you to learn more about disks every day you use any  of 
        the programs.  
             
             If you have absolutely no knowledge about disks, please read 
        a book or two that discusses them before making a plunge into the 
        depths  of  your disks.   Nearly any book discussing MS-DOS  will 
        help.   Not only will this help you understand what is going  on, 
        but it will make you more aware of what shouldn't be altered.

             Respect.  A healthy respect for the power you have with  The 
        Professional  Master Key Utilities is likely the  most  important 
        user  requirement.  You can be a little short on  experience  and 
        low  on a big desire to learn, but you must be aware that  making 
        blind  modifications, especially with PMK, may render your  disks 
        useless.  To give you the most flexibility, the utilities usually 
        assume that any changes you are make are the correct ones.

             Experimenting with these utilities to learn more about  them 
        and  your disks is fine, but please also take  some  precautions.    
        Make a copy of your floppy disk or back up your hard disk  before 
        making  any changes.  This is important if you aren't  sure  that 
        what you may be doing is what you want to do.  Be cautious  about 
        modifying the boot sector, FAT sectors, and any directory, unless 
        you are certain of your changes and their results.

             These  user requirements aren't as stringent as  the  system 
        requirements,  but they are just as important.  What you may lack 
        in  one  requirement,  you should make up for  in  another.   The 
        bottom  line is to be careful and make sure you want what you ask 
        for.






        The Professional Master Key Utilities, version 2.0        Page 5
        Introduction to the Utilities                    Conventions Used


                                Conventions Used

             To make using The Professional Master Key Utilities and this 
        documentation  clearer,  here are descriptions of the  notational 
        conventions used:

             [ ]  Square brackets.  When a program option appears  within 
                  square brackets that option may be omitted.  An  option 
                  not enclosed in square brackets may not be omitted.  Do 
                  not type the brackets when specifying an option.

             < >  Angled  brackets.  Words shown inside  angled  brackets 
                  are descriptions of an option, such as a file name or a 
                  message.   An option inside angled brackets  is  needed 
                  unless  it is also within square brackets.   Again,  do 
                  not type the brackets when specifying an option.

                  When a program is running, key names are also  enclosed 
                  within angled brackets to describe a key to press.   An 
                  example  of this exists in the main menu of PMK  where, 
                  in part, the text states, "... then pressing  <ENTER>."  
                  This wording, in this example, means to press the Enter 
                  key  and not the letters <, E, N, T, E, R, and >.   The 
                  F10 and End keys are also referred to in this way (ie., 
                  as <F10> and <END>). 

             |    Vertical  bar.  A vertical bar represents an  either/or 
                  situation.  One of the words surrounding a vertical bar 
                  should be typed as an option.  If "ON | OFF" is  shown, 
                  it  means that either ON or OFF should be entered,  but 
                  not both.  Do not type the vertical bar when specifying 
                  an option.

             ^    Caret.   A  caret represents the control  key.   It  is 
                  always shown preceding a key and means to hold down the 
                  control  key  and press the key specified.  Thus,  when 
                  "^Home" is shown, it means to hold down the control key 
                  and press the Home key.    

             Within this document, the words <LEFT>, <RIGHT>, <DOWN>, and 
        <UP>  refer  to the left arrow, right arrow, up arrow,  and  down 
        arrow.   The words or lettering that appears on a  key  describes 
        every other key.














        The Professional Master Key Utilities, version 2.0        Page 6
        Installing The Professional Master Key Utilities


                Installing The Professional Master Key Utilities

             The  installation  program for The Professional  Master  Key 
        Utilities  is able to change the colors and default  options  for 
        any  of the programs in the utilities.  

             For most people, installing the utilities won't be necessary 
        if  each  program runs without problems.   However,  install  the 
        utilities  to better meet your liking if you don't agree with  my 
        selection  of  colors or need to use the /Mono or  /Slow  options 
        whenever you run a program.

             The complete command to run the installation program is:

                  INSTALL [/Mono ON | OFF | AUTO] [/Slow ON | OFF]


             Examples:
                  INSTALL                      
                       accept the current defaults for /Mono and /Slow as 
                       they  exist in INSTALL.EXE and use those  defaults 
                       when installing the other programs

                  INSTALL /Mono ON
                       display all screens in monochrome and install  the 
                       other  programs to display in monochrome;  install 
                       using the default for /Slow 

                  INSTALL /Mono OFF /Slow ON
                       display in colors using BIOS screen writing funct-
                       ions and install these settings in the other  pro-
                       grams

                  INSTALL /Mono AUTO /Slow OFF
                       display all screens in color if a color display is 
                       found, writing text directly to the screen



                                Changing Options

             To change one of the options in a program, type the  desired 
        option on the command line when running Install.  


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With  the /Mono option ON, text is displayed  in  monochrome 
        regardless  of  whether your display can show colors.   When  the 
        /Mono option is OFF, displays are always in vibrant living color.  
        When  the /Mono option is AUTO, displays will be in color when  a 
        color  display  is detected or monochrome when  a  color  display 
        isn't  found.   The default setting for the /Mono option  in  the 
        distribution files is AUTO.


        The Professional Master Key Utilities, version 2.0        Page 7
        Installing The Professional Master Key Utilities




             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  

             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-
        bution files is OFF; to write directly to the screen.

             If your computer is not 100% IBM compatible, you may need to 
        configure the programs to use the BIOS screen writing method.  If 
        the utilities don't seem to run on your computer,  try running or 
        installing them with the /Slow option ON.  



                                 Changing Colors

             Modifying  default  color settings is  fairly  easy.   After 
        starting  Install, highlight the menu selection, "Change  default 
        program colors," and press Enter.

             The utilities have six color categories,  listed below.  The 
        colors for each of the categories can be changed to any available 
        foreground and background color.

             The six color categories are:

                       Window Border Color
                       Border Text Color
                       Informational Text Color 
                       General Text Color 
                       Cursor Color   
                       Changed Data Color 


             Only  one color category at a time can be  changed.   Select 
        which category to change by pressing Enter until that category is 
        available  for modification.  If you wanted to change the  Cursor 
        Color, press Enter until you see:


                        Currently changing:  Cursor Color


             Once the desired color category is selected, you can  change 
        its  colors.   Modify foreground colors using  <UP>  and  <DOWN>.  
        Change  background colors using <LEFT> and <RIGHT>.   The  sample 


        The Professional Master Key Utilities, version 2.0        Page 8
        Installing The Professional Master Key Utilities


        display  of  the current color category is updated  to  show  its 
        current colors, as they are changed.  

             Press F10 when you have changed all the colors you can stand 
        and want to return to the menu.



                             Installing the Programs

             When  the options and colors are set, install each  program, 
        one at a time, by highlighting the appropriate menu selection and 
        pressing Enter.  

             As  each program is installed, gears will grind, steam  will 
        blow,  and  your disk drive  will spin.  In a  few  moments,  the 
        program selected is installed.  The next time that program  runs, 
        the default options and colors are set just as you wanted.

             INSTALL.EXE can also be installed.  After selecting Quit, if 
        you  have changed any options or colors, Install will ask you  if 
        you want to save all of the changes made.  Press 'Y' and  Install 
        will be installed, like the rest of the programs.


































        The Professional Master Key Utilities, version 2.0        Page 9
        Professional Master Key                                    


                             Professional Master Key

             Professional  Master Key, obviously the flagship program  in 
        The Professional Master Key Utilities, is a collection of  useful 
        disk tools bundled into one easy to use program.  It's a powerful 
        program that has many useful features.

             The complete command to run Professional  Master Key from your 
        MS-DOS  prompt is:

             PMK [/Mono ON | OFF | AUTO] [/Slow ON | OFF] [d:]


             Examples:
                  PMK
                       accept  current defaults for /Mono and /Slow;  set 
                       the working drive to the currently logged drive

                  PMK /Slow ON A:
                       display  using BIOS screen writing functions;  set 
                       the working drive to A:

                  PMK B:
                       accept current defaults; set the working drive  to 
                       B:


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With  the /Mono option ON, text is displayed  in  monochrome 
        regardless  of  whether your display can show colors.   When  the 
        /Mono option is OFF, displays are always in vibrant living color.  
        When  the /Mono option is AUTO, displays will be in color when  a 
        color  display  is detected or monochrome when  a  color  display 
        isn't  found.   The default setting for the /Mono option  in  the 
        distribution files is AUTO.


             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  

             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-
        bution files is OFF; to write directly to the screen.





        The Professional Master Key Utilities, version 2.0        Page 10
        Professional Master Key                                    


             d:  (Set current drive).  Entering a drive letter  from  the 
        MS-DOS  prompt sets the current working drive to d:.   The  drive 
        letter must be a valid drive letter for your system. If d: is not 
        a  valid drive letter or if it is omitted, PMK sets  the  current 
        working drive to the currently logged drive.



                                  The Main Menu

             Once running, the main menu appears.  The information in the 
        main  menu  should include the name of this program  and  version 
        number  (2.0), all function descriptions, current working  drive, 
        and RPG Software Farm's address and copyright.
             
             Currently,  there  are eleven functions available  from  the 
        main menu.  They are:

                            Alter Files 
                            Change Disk 
                            Disk Edit 
                            Erase Files 
                            File Edit 
                            Information 
                            Locate Files
                            Map Disk/Files
                            Quit
                            Rename Files
                            Undelete Files

             Select one of these functions by moving the highlighted  bar 
        with  <UP> and <DOWN>.  Press Enter when the bar  highlights  the 
        function  you want to execute.  An alternative, easier method  of 
        selecting a function is to type the first letter of the  function 
        name (a, c, d, e, f, i, l, m, q, r, or u) and press Enter.






















        The Professional Master Key Utilities, version 2.0        Page 11
        Professional Master Key                         Selecting a file


                                Selecting a file

             Since a file must be selected for six of the ten  functions, 
        choosing  what file to work with is vital for using  Professional 
        Master  Key well.  Luckily, choosing a file is very easy and  al-
        most doesn't need description.



                       What is a file and a sub-directory?

             Before beginning, the definition of the word "file" in  this 
        document needs a little clarification to avoid confusion.  

             A file, as defined and viewed by Professional Master Key and 
        MS-DOS,  is a name and all data associated with that name.   This 
        is just as you would expect and have been expecting it to be  all 
        along.  

             A  sub-directory is essentially just a file.  This may  seem 
        confusing since we typically view and treat a sub-directory  very 
        differently  from  a file.  However, because of  the  way  MS-DOS 
        creates, accesses, and uses them, sub-directories should also  be 
        viewed  logically as special files.  To give you more  power   to 
        manipulate your disks, PMK processes sub-directories as it  would 
        files.

             Functions using files treat files and sub-directories equal-
        ly.   All functions working with files can be used to  manipulate 
        sub-directories  within Professional Master Key with equal  ease, 
        with a few exceptions, discussed later.  

             Whenever  the word "file" appears within this  document,  it 
        refers  equally  to a sub-directory.   The opposite is  not  true 
        however.   The word "sub-directory" does not likewise refer to  a 
        file.  



                              Selecting a directory

             Once a function requiring  a file is selected (Alter  Files, 
        Erase Files, File Edit, Map Disk/Files, Rename Files, or Undelete 
        Files),  PMK checks to see if the current working drive's  direc-
        tory  is  in memory.  If the directory isn't in memory,  PMK  now 
        reads the working drive's complete directory.  As it is  working, 
        the following message is displayed:


                        Reading directory information...


             Reading  a  drive's directory may take a  little  time,  all 
        depending on how many files and sub-directories are on the  drive 
        and how quickly the drive operates.  In any case, be patient  and 


        The Professional Master Key Utilities, version 2.0        Page 12
        Professional Master Key                         Selecting a file


        after a moment, PMK will finish.

             After  the entire directory is in memory, it  is  displayed.  
        Use  <UP>,  <DOWN>, PgUp, PgDn, Home, and End to move  the  high-
        lighted  cursor to select a sub-directory.  <UP> and <DOWN>  move 
        the highlighted bar to the previous and next sub-directory.  PgUp 
        and  PgDn  move the bar up  and down to the previous  screen  and 
        next  screen  of sub-directories.  Home and End  move  the  high-
        lighted bar to the first and last sub-directory available.

             Press Enter to accept the highlighted sub-directory or press 
        F10 to return to the main menu.  

             If  your disk doesn't have any sub-directories, selecting  a 
        sub-directory is skipped.



                                Selecting a file

             After selecting a sub-directory, PMK again checks to see  if 
        files  in  that sub-directory are currently in memory.   If  they 
        aren't, PMK will again access the disk, showing the message:


                           Reading file information...


              Select  the  file to work with in a similar  manner,  using 
        <UP>, <DOWN>, PgUp, PgDn, Home, and End.



























        The Professional Master Key Utilities, version 2.0        Page 13
        Professional Master Key                              Alter Files


                                   Alter Files

             The  Alter Files function changes the attributes, date,  and 
        time  for any file on the current working drive.  You can give  a 
        file hidden, read-only, or system attributes with equal ease.   A 
        file's date and time of creation can be changed as well with very 
        little effort.

             Select  the initial file to work with once within the  Alter 
        Files function.



                              Changing an attribute

             To  change one of the file's attributes (Read Only,  Hidden, 
        System,  or  Archive), move the highlighted bar with  <DOWN>  and 
        <UP>.  Press Enter to toggle the highlighted attribute on or off.  
        When an attribute is on, it is set or in an active state.



                            Changing the date or time

             Changing  the time or date differs from changing  an  attri-
        bute.  Once the date or time field is highlighted, press any  key 
        to tell PMK you want to change the contents of that field.

             Upon pressing any key (when the date or time field is  high-
        lighted),  a cursor appears within the highlighted bar.  Type  in 
        the new date or time (only valid numbers are accepted).  Move the 
        cursor  to a different location using <LEFT> and <RIGHT>.   <UP>, 
        <DOWN>, or Enter ends your changes to the date or time.
             


                               Saving any changes

             Press End to save changes made to a file's attributes, date, 
        or  time.  If the attributes aren't saved, the columns,  "Current 
        File  Attributes" and "Altered File Attributes,"  show  different 
        information.  After pressing End, they are identical.

             When finished changing attributes, pressing F10 returns  you 
        to the main menu.



                              Selecting a new file

             When not actually editing the date or time fields,  pressing 
        <LEFT>  or <RIGHT> changes the file you are working with  to  the 
        previous or next file in the directory.  If a new file is  selec-
        ted in this manner (using <LEFT> or <RIGHT>), any changes made to 
        the previous file are NOT automatically saved.  


        The Professional Master Key Utilities, version 2.0        Page 14
        Professional Master Key                              Change Disk


                                   Change Disk

             The  Change Disk function has two major designs.  The  first 
        and most obvious is it switches the current working drive to  any 
        other available drive.  The second less obvious function is  that 
        it  also clears recorded file and directory information  PMK  has 
        about  the current drive, making it start over from  scratch  the 
        next time a file is accessed.



                           Changing to another drive

             Whenever you need to work with a disk other than the current 
        working drive, select Change Disk and switch the current  working 
        drive.  

             Pressing  Enter with Change Disk highlighted opens a  window 
        showing:


            There are 7 logical drives available, A: to G:.  Enter a
            letter from A to G to change the current working drive
            to any of the available drives.

             Press <F10> to keep the current drive and information.


             To change the current working drive, do as it says and  type 
        a letter in the range shown.  In this example, you could type any 
        of the letters in the range A to G.

             If you selected Change Disk by mistake, exit the function by 
        pressing F10.  Doing so keeps PMK from clearing all recorded file 
        and directory information about the current drive. 



                              Changing floppy disks 

             Whenever you change floppy disks in a floppy disk drive, use 
        Change Disk to tell PMK to clear all recorded file and  directory 
        information  on the old disk.  Change the current  working  drive 
        back to the same floppy disk drive once the new disk is in place.  
        If you forget to select Change Disk after switching floppy disks, 
        PMK  will still think the old floppy disk is present.  When  this 
        happens, PMK won't act properly in any of the file functions.  










        The Professional Master Key Utilities, version 2.0        Page 15
        Professional Master Key                                 Disk Edit


                                    Disk Edit

             The Disk Edit function lets you see and change what actually 
        is  actually stored on your disks, on a sector by  sector  basis.  
        Sectors  can  be accessed either sequentially or  randomly.   The 
        disk can also be searched for text. 

             After selecting Disk Edit, PMK reads and displays the  first 
        sector  on the working drive.  The sector is shown in both  ASCII 
        and hex codes in the 24 character wide format.

             Once  editing  the disk, a variety of function  keys,  arrow 
        keys, movement keys, and other keys become effective.  These keys 
        and their functions are described in a section below.  



                                  Getting help          

             F1 (display help).  Whenever editing the disk, Function  key 
        F1  opens  a window showing a summary for each  of  the  function 
        keys.  This summary won't take the place of the descriptions that 
        follow.   Instead,  it will merely state what each  function  key 
        does.  



                                 Display formats

             Del  (Toggle 16/24 wide display format).  Since version  2.0 
        of Professional Master Key, two display formats are available for 
        editing  your  disks,  each better suited  for  different  tasks.  
        Pressing the Del key switches between these two display  formats.  
        The  current display format, 24 wide or 16 wide, is shown at  the 
        bottom of the screen.

             The default display format is 24 bytes wide.  Each row shown 
        contains  24 bytes.  Most sector editing is best done using  this 
        format  because  it displays a complete 512 byte  sector  on  the 
        screen.  

             An alternate display format, better suited for raw directory 
        editing is selected by pressing Del.  This format, 16 bytes wide, 
        makes  directory editing much easier since each  directory  entry 
        (32  bytes) is seen in exactly two rows.  A disadvantage to  this 
        format is that it only displays 256 bytes on the screen.


             Ins  (Toggle ASCII format).  In addition to the two  display 
        formats, there are also two ASCII formats.  The Ins key  switches 
        between them.  The current ASCII format, Standard or Extended, is 
        shown at the bottom of the screen.

             The  default  ASCII format is to show  only  standard  ASCII 
        characters.   In  this format, all bytes in the sector  having  a 


        The Professional Master Key Utilities, version 2.0        Page 16
        Professional Master Key                                 Disk Edit


        value less than 20 hex or greater than 7E hex are represented  on 
        the ASCII side of the display by a period (".").

             In  the other mode, toggled with Ins, all ASCII  characters, 
        both standard and extended are displayed.  



                             Moving around the disk

             PgUp  (Advance a sector).  The PgUp key changes the  current 
        sector  to the next available sector on the disk.  If already  at 
        the  last  sector, PgUp wraps around to the first sector  on  the 
        disk.  

             When  the  sector being edited is too large to  fit  on  one 
        screen in the current display format, PgUp responds in a slightly 
        different manner.  In this situation, PgUp displays the next part 
        of  the  sector for editing.  When editing the last part  of  the 
        sector, PgUp changes the sector as stated above.


             PgDn  (Back up a sector).  The PgDn key changes the  current 
        sector  to the previous sector.  When at the first  sector,  PgDn 
        wraps around to the last sector on the disk.  

             If the sector being edited is too large to fit on one screen 
        in the current display format, PgDn displays the previous part of 
        that sector for editing.  If editing the first part of a  sector, 
        the PgDn key changes the sector as stated above.


             F3  (Go to any sector randomly).  Function key F3  lets  you 
        go to any available sector randomly.  After pressing F3, a window 
        opens showing the valid range for sector numbers.  Enter a number 
        in the range shown, or press F10 to exit that function and remain 
        at the current sector.


             F4  (Go  to a previous sector).  Function key  F4  gets  and 
        displays the previous sector edited.  PMK keeps track of the last 
        five  sectors that were displayed.  After moving to another  sec-
        tor, pressing F4 repeatedly will bring back to one of those  five 
        sectors.  


             F7  (Go  to  start of disk).  Function key  F7  changes  the 
        current  sector  being edited to the first sector  on  the  disk, 
        always sector 0.


             F8 (Go to end of disk).  Function key F8 changes the current 
        sector being edited to the last available sector on the disk.




        The Professional Master Key Utilities, version 2.0        Page 17
        Professional Master Key                                 Disk Edit


                                Editing a sector 

             Making  a  change within a sector is easy.  Just go  to  the 
        desired  sector, place the cursor on the desired byte,  and  type 
        away.   The  cursor advances automatically as changes  are  made.  
        Any changes are highlighted on the screen.

             All  ASCII characters can be entered while the cursor is  on 
        the ASCII half of the display.  Only valid hex characters (0 to 9 
        and  A through F) can be entered while the cursor is on  the  hex 
        side of the display.  


             F2  (Toggle  Hex/ASCII cursor).  Function key F2  moves  the 
        blinking cursor from the hex or ASCII half of the display, to the 
        other  side.   The  cursor stays at the same  offset  within  the 
        sector that it was at previously, it just goes over to the  other 
        side for different editing.


             <UP> (Move cursor up).  The up arrow moves the cursor up one 
        row  within the display.  When at the first row, <UP>  wraps  the 
        cursor around to the last row in the display.


             <DOWN> (Move cursor down).  The down arrow moves the  cursor 
        down  one  row within the display.  If at the last   row,  <DOWN> 
        wraps the cursor around to the first row.


             <RIGHT> (Move cursor right).  The right arrow key moves  the 
        cursor  to  the right.  When at the last byte in a  row,  <RIGHT> 
        moves the cursor to the first byte in the next row.


             <LEFT> (Move cursor left).  The left arrow moves the  cursor 
        to the left.  When the cursor is at the first byte, <LEFT>  moves 
        the cursor to the last byte in the previous row.



                          Saving or discarding changes

             Any changes made to a sector in the display must be saved to 
        be  made permanent on the disk.  If a sector hasn't been  written 
        to the disk, it still shows highlighted bytes.  

             PMK  won't  let  you accidentally lose  changes  made  to  a 
        sector.   If you accidentally press a function key or  forget  to 
        save a sector's changes before moving to another sector, PMK will 
        ask if you'd like to save your work first.
          
             
             ^Home and Home (Reread current sector).  The Home key forces 
        PMK to reread the current sector from disk.  ^Home does the  same 


        The Professional Master Key Utilities, version 2.0        Page 18
        Professional Master Key                                 Disk Edit


        thing, but discards any changes without asking to save them.  

             This  function key is used mainly to get a fresh copy  of  a 
        sector  into memory after making too many unwanted changes  to  a 
        sector.   After pressing Home, PMK discards any changes made  and 
        displays a new copy of the current sector.


             ^End and End (Write current sector).  The End key saves  the 
        changes made to the sector being displayed.  ^End does the  same, 
        but saves your changes without asking.  



                               Searching for text

             F5 (Search for ASCII text).  Function key F5 lets you  search 
        for ASCII text anywhere on the disk.  After pressing F5, a window 
        opens on the screen.  Enter any text up to 70 characters long  to 
        search for.  The case of the string entered doesn't matter.   PMK 
        looks for both upper and lower case text at the same time.  Press 
        F10 to skip searching for any text.

             All searching starts from the current cursor position within 
        the displayed sector and goes forward until the text is found  or 
        the end of the disk.  The text search can be stopped at any  time 
        by pressing F10.


             F6  (Search for Hex data).  Function key F6 lets you  search 
        for  hex data anywhere on the disk.  After pressing F6, a  window 
        opens  so you can enter any hex data up to 35 words (byte  pairs) 
        long.   All hex data searches are exact.  No case  conversion  is 
        done on those bytes which may be ASCII characters.

             Hex data should be always entered in words and not by single 
        bytes.   Should the second byte in the last word entered be  left 
        out,  it is assumed to be 0 (zero).  For example, to  search  for 
        the  bytes  "CD 21," enter "CD21."  When  "CD2"  is  accidentally 
        entered, the bytes, "CD 20" are searched for. 



                                  Miscellaneous

             F9  (Display  disk information).  Function key  F9  opens  a 
        window screen showing technical information on the current drive.  
        This display is the same as that shown by the Information  funct-
        ion.

             F10 (Return to the main menu).  Function key F10 stops edit-
        ing and returns you to the main menu.





        The Professional Master Key Utilities, version 2.0        Page 19
        Professional Master Key                               Erase Files


                                   Erase Files

             The  Erase Files function is used to erase any file  on  the 
        working  drive.  Any file can be erased by this function,  inclu-
        ding  Read-Only, Hidden, and System files.  A  file's  attributes 
        don't  matter, however, Professional Master Key  currently  won't 
        allow sub-directories to be erased.

             Upon selecting Erase Files, choose the sub-directory to  get 
        files from then the initial file to erase.  Press F10 if you want 
        to exit to the main menu.

             Then, after choosing a file, a window opens displaying:


                    The file, "OLD-FILE.NAM" will be deleted.
                      Press "Y" to delete the file.
                      Press "S" to skip deleting this file.
                      Press <F10> to exit to the main menu.


             If  "Y"  is now pressed, the file,  "OLD-FILE.NAM"  will  be 
        erased  from the disk.  If "S" is pressed, the file will  not  be 
        erased.  Pressing F10, as always, returns you to the main menu. 

             After  Professional Master Key finishes erasing a  file,  it 
        returns  you to the file selection screen to select another  file 
        to erase.  This repeats until there are no files left in the sub-
        directory or you eventually press F10.




























        The Professional Master Key Utilities, version 2.0        Page 20
        Professional Master Key                                 File Edit


                                    File Edit

             The File Edit function is related to the Disk Edit function.  
        The  main  difference is that File Edit lets you see  and  change 
        only what is in a file and not the entire disk.

             After  selecting File Edit, choose the sub-directory to  get 
        files  from and then get the initial file to edit.  Press F10  to 
        return to the main menu. 

             Then, once a file is selected, the first sector in the  file 
        is shown and is displayed in the 24 character wide format.  

             All function keys, arrow keys, movement keys, and other keys 
        act similarly as they did in the Disk Edit function.  

             The  only  keys that function slightly differently  are  the 
        keys in the sections, "Moving around the disk" and "Searching for 
        text."   Each of the keys in these sections work as described  in 
        the  Disk Edit function with the exception that they  change  the 
        current sector displayed to another sector within the file, not a 
        sector anywhere on the disk.   Specifically, these keys are:

             F3 (Go to any sector randomly). 
             F7 (Go to start of file). 
             F8 (Go to end of file). 
             PgUp (Advance a sector).  
             PgDn (Back up a sector).  
             F5 (Search for ASCII text).
             F6 (Search for Hex data).


             Also, the relative sector number being edited is  displayed, 
        not  the  actual sector number on the disk.  The  first  relative 
        sector  number for a file is always 1, no matter where the  start 
        of the file physically is.

             Like Disk Edit, pressing F10 returns you to the main menu.



















        The Professional Master Key Utilities, version 2.0        Page 21
        Professional Master Key                               Information


                                   Information

             MS-DOS hides most information it has available on its disks.  
        Pressing  Enter  while Information is highlighted shows  much  of 
        what MS-DOS is hiding along with some other details that are both 
        useful and good to know.

             Upon  selecting Information, a window opens  displaying  the 
        following data.  The numbers shown differ depending on the format 
        and size of the disk being used.  This example shows a  standard, 
        newly formatted 360K floppy disk.


                             Information On Drive A:

             Disk capacity information...
                  360  Kilobytes total disk capacity possible
                  354  Kilobytes disk capacity available (100% free).

             Disk logical dimensions...
                  512  Bytes in each sector.
                  719  Sectors existing on the entire disk.
                  708  Data Sectors possible for file usage on the disk.
                    2  Data Sectors exist in each Data Cluster.
                  354  Data Clusters possible for file usage on the disk.
                    1  Reserved Sector(s) at the beginning of the disk.
                    2  FAT copies available, each using 2 sectors.
                  112  Files allowed in the Root Directory.

                      Start of all FAT sectors:     sector     1  
                      Start of the Root Directory:  sector     5
                      Start of all Data Sectors:    sector    12  


             Press any key to return to the main menu.






















        The Professional Master Key Utilities, version 2.0        Page 22
        Professional Master Key                              Locate Files


                                  Locate Files

             Locate  Files  finds and displays all files on  the  working 
        drive matching any file specification.  Locate Files helps  users 
        of  hard  and floppy disks to find several copies of  a  file  in 
        different  places on one disk, to find the location of  an  indi-
        vidual file, or just to see all files on a disk easily.

             When Locate Files is chosen, a window opens displaying a few 
        lines of help and the following prompt:

             
                              Filename:  *       .*


             Enter the file(s) to search for.  The wildcards ? and *  can 
        be used as they would be with MS-DOS, as wildcards in the name to 
        match.  Press F10 to return to the main menu without locating any 
        files. 

             <LEFT> and <RIGHT> move the cursor to a specific location in 
        the name to make changes.  Tab moves the cursor from the filename 
        to  the extension part of the name and vice versa.   Press  Enter 
        when the file specification has been entered.

             After pressing Enter, PMK lists all files matching the  file 
        specification given (reading sub-directories as it searches).  At 
        the  end of every screen full of files it pauses waiting for  any 
        key to be pressed.  

             When paused, press F10 to stop the display and return to the 
        main menu or any other key to continue listing matching files.

























        The Professional Master Key Utilities, version 2.0        Page 23
        Professional Master Key                            Map Disk/Files


                                 Map Disk/Files

             The Map Disk/Files function quickly shows a graphical map of 
        the total disk usage and free space for the working disk.  It can 
        later  display,  in the same graphical format, where  a  file  is 
        located  on the working disk and can give a visual indication  of 
        the file's fragmentation.



                             Mapping an entire disk

             After  selecting  Map Disk/Files,  Professional  Master  Key 
        works  at creating the graphical map of total disk usage for  the 
        working disk.  On hard and floppy disks, this happens  relatively 
        quickly.

             Along with the graphical map, the amount of free disk  space 
        (in  percent of total disk capacity), and the number of  clusters 
        represented by each symbol is displayed.

             When mapping lower capacity disks, such as floppy disks  and 
        RAM  disks, each symbol in the map represents one cluster.   How-
        ever, due to the limited space on the screen each cluster  cannot 
        be shown for disks with very many clusters, such as hard disks.  

             For  disks  that have more than 500  clusters,  each  symbol 
        stands for several clusters.  On my hard disk, each symbol repre-
        sents twenty clusters.  

             Hard  disk  users should not be alarmed if  this  map  shows 
        several  areas containing bad clusters.  This is normal  on  hard 
        disks.



                            Mapping individual files

             After the disk map is shown, press Enter to map file  usage.  
        Any other key returns you to the main menu. 

             Select  a directory and initial file as  described  earlier.  
        Once the initial file is selected, <LEFT> and <RIGHT> changes the 
        file  being mapped to the previous and next file in  the  current 
        directory.   Pressing  Ins while mapping files  lets  you  select 
        another directory.

             Along with the graphical map, the amount of free disk  space 
        (in  percent  of total disk capacity), information  on  the  file 
        mapped,  and the number of cluster represented by each symbol  is 
        displayed.   While mapping files, you normally shouldn't see  any 
        bad clusters displayed.

             Press F10 to return to the main menu.



        The Professional Master Key Utilities, version 2.0        Page 24
        Professional Master Key                                      Quit


                                      Quit

             Selecting  Quit  from the main menu ends  the  execution  of 
        Professional Master Key and returns you to MS-DOS (or other oper-
        ating environment, if applicable).  It returns to the same  drive 
        and directory that you started in, unless of course you  switched 
        the disk that you started from.

             Upon  ending PMK, a window opens on the screen  showing  the 
        following message:


        Professional Master Key is a copyrighted, user supported product!
        Registered users are entitled to support, FREE upgrades, and a
        program disk with the latest version of The Professional Master
        Key Utilities!  All for just $25.

                       === Thank you for your support! ===


             Press any key to close the window and return to MS-DOS.




































        The Professional Master Key Utilities, version 2.0        Page 25
        Professional Master Key                              Rename Files


                                  Rename Files

             The Rename Files function is used to rename any file on  the 
        working  drive.   Any  file  can be  renamed  by  this  function, 
        including  Hidden  and System files.  A file's  attributes  don't 
        matter.

             After  selecting Rename Files, choose the  sub-directory  to 
        get  files from and a file to rename.  Press F10 if you  want  to 
        exit to the main menu.

             After  choosing a file a window opens asking you to enter  a 
        new  name  for the file.  If you are trying to rename  the  file, 
        "OLD-FILE.NAM," the window would show, along with a few lines  of 
        information, the prompt:


                             Filename:  OLD-FILE.NAM


             Type  in  the new name for the file.  Type the new  name  in 
        exactly as you want to see it appear in the directory.  

             If  leading or embedded spaces are left in the  filename  or 
        extension  part of the name (as an example, "Letter 1.txt"),  MS-
        DOS will have a difficult time accessing the file.  The file  can 
        still  be used and accessed in a few instances from  MS-DOS  (and 
        always from PMK), but a little imagination is involved to do so.  

        [Leaving embedded spaces in the name is permitted in Professional 
        Master  Key only because you might want to make a file harder  to 
        access.  Embedding spaces in a name is definitely one way to make 
        a file harder to access from MS-DOS.] 

             The <LEFT> and <RIGHT> keys move the cursor to any  position 
        in  the  old  name.  Tab moves the cursor from the  name  to  the 
        extension  part  of the name and vice versa.  When  the  name  is 
        changed to what you want, press Enter and you will see:


           The file, "OLD-FILE.NAM" will be renamed to "NEW-FILE.NAM"
                      Press "Y" to rename the file.
                      Press "R" to re-enter the new file name.
                      Press "S" to skip renaming this file.
                      Press <F10> to exit to the main menu.


             Press  "Y" now to change the old file name to the  new  name 
        you typed in.  If "S" was pressed, the file won't be renamed  and 
        you  will be allowed to select another file.  Pressing  "R"  will 
        show  you the "Filename:" prompt shown above, letting you try  to 
        change the name once more.

             Pressing F10, as usual, returns you to the main menu. 



        The Professional Master Key Utilities, version 2.0        Page 26
        Professional Master Key                            Undelete Files


                                 Undelete Files

             Well, you've slipped and erased a file by mistake.  It's  an 
        important file.  Before using Professional Master Key, you  would 
        have to try to re-create the file if that was possible.  Now, you 
        have the ability to recover the file with a minimum of effort and 
        continue on as normal by using the Undelete Files function.



                     What happens to a file as it is erased?

             A file that gets erased or deleted actually isn't wiped from 
        the  face  of the disk.  All of its data is left  intact  on  the 
        disk.  All that gets changed is the FAT and the file's  directory 
        entry.  
             
             The FAT is updated to mark all clusters that used to  belong 
        to  the  file as free clusters.  MS-DOS keeps track of  the  free 
        clusters in the FAT to determine how much free space remains on a 
        disk.   Until another file is actually written over the  clusters 
        that  used  to be allocated to the deleted file, all of  its  old 
        data remains on the disk.

             The  file's directory entry is also altered, but in a  minor 
        way.  The first character in a file's name is changed to the  hex 
        character  E5, the Greek character sigma.  This  identifies  that 
        directory entry as deleted from that point onward.  



                           How can a file be Undeleted?

             Because a file's data is still intact, all that needs to  be 
        done  to Undelete it is to rebuild its FAT chain and correct  its 
        file  entry.  Fixing the file name is trivial, but restoring  the 
        FAT is not.  

             The  FAT  isn't designed to be complex.  It  works  on  very 
        simple  concepts, but simple to computers.  It would become  very 
        tedious  very quickly to you or I if we had to rebuild  a  file's 
        FAT chain.  

             Although  the file's FAT chain cannot be rebuilt  with  100% 
        certainty, PMK simplifies the process by automatically taking its 
        best guess about where everything should go.  This may not  fully 
        recover  a  file all of the time, but it is most often  the  best 
        method for Undeleting a file.



                           What about sub-directories?

             Professional Master Key, unlike several other programs  that 
        claim  to Undelete files, can Undelete sub-directories  as  well.  


        The Professional Master Key Utilities, version 2.0        Page 27
        Professional Master Key                            Undelete Files


        There is a limitation to doing this however.  

             Because sub-directories do not have a size stored as part of 
        its  information, PMK has no way of knowing how many clusters  it 
        used to occupy.  Whenever a sub-directory is undeleted, only  its 
        first  cluster  is Undeleted.  Any subsequent clusters,  if  they 
        existed, will be forever lost.  



                         What affects Undeleting a file?

             Successfully  Undeleting a file depends on a lot of  factors 
        and  a lot of things working right.  It is not guaranteed  to  be 
        always  successful.   Two factors, described below, can  help  or 
        hinder Undeleting a file.


             Time.  Normally, trying to Undelete a file immediately after 
        deleting  it will work without a problem.  All of its  data  will 
        still  be  intact on the disk and nothing may have  been  written 
        over parts of that data.

             The chances of being successful in Undeleting a file go down 
        dramatically  with  the passage of time since its  deletion.   If 
        nothing is written to the disk since the file was deleted,  there 
        is  still a very good chance that it can be Undeleted.   However, 
        if  some time has passed and several files were saved, it may  be 
        highly unlikely that an deleted file can be fully recovered.


             Fragmentation.  The chances for a successful Undeletion  are 
        also increased if both the file and disk weren't in a  fragmented 
        state  before  the file was deleted.  Fragmented files  are  much 
        more difficult to Undelete successfully.

             A  file's clusters are normally written consecutively  on  a 
        disk when possible.  If that isn't possible, its clusters are put 
        elsewhere  on  the disk.  When a file's  clusters  aren't  stored 
        consecutively, it is fragmented.  Fragmentation typically happens 
        in large files that get updated often, like databases.  

             Prevent  excessive fragmentation on your disks when this  is 
        possible.   Unfragment your entire disk (especially hard  disks!) 
        on  a  regular basis with any of the many  commercial  or  public 
        domain programs that claim to unfragment or optimize disks.   



                                Undeleting a file

             After selecting Undelete Files, choose the sub-directory  to 
        get deleted files from then the initial file to undelete.   Press 
        F10 if you want to return to the main menu.



        The Professional Master Key Utilities, version 2.0        Page 28
        Professional Master Key                            Undelete Files



             Then, after selecting a deleted file, the screen clears  and 
        you will see something similar to what is shown below:


        Enter the first letter for "eLD-FILE.NAM" to begin undeleting it.


            Once  the  first  letter in the file name  is  entered,  the 
        following messages appear:


                    The file, "OLD-FILE.NAM" will be undeleted.
                      Press "Y" to undelete the file.
                      Press "S" to skip undeleting this file.
                      Press <F10> to exit to the main menu.


             If  "Y"  was now pressed, PMK will attempt to  Undelete  the 
        file  OLD-FILE.NAM.   If "S" was pressed, the file won't  be  Un-
        deleted.  

             After Professional Master Key finishes Undeleting a file, it 
        returns you to the file selection screen for the chance to select 
        another  file to Undelete.  This repeats until no  deleted  files 
        are left in the sub-directory or you eventually press F10.  

             Pressing  F10 always returns you to the main menu.

             

                        The file is Undeleted, is it ok?

             If  Professional  Master Key is successful in  Undeleting  a 
        file,  all still may not be well.  The data it has saved may  not 
        be what was originally in your file.  Please check your file (use 
        the File Edit function) to make sure that it contains the correct 
        data.  Be especially careful if the file you Undeleted is a  .COM 
        or .EXE file. 


















        The Professional Master Key Utilities, version 2.0        Page 29
        Fill Disk


                                    Fill Disk

             Fill  Disk  writes any message of your choice on all of  the 
        free  sectors on any disk leaving any existing  files  untouched.  
        It  can also zero all unused sectors, removing all traces of  old 
        file data, still leaving existing files alone.

             The complete invocation for Fill Disk is:

             FD [/Mono ON | OFF | AUTO] [/Slow ON | OFF] [/Zero] [d:] 
                  [<message>]


             Examples:
                  FD
                       fills  all free sectors on the default disk  drive 
                       after letting you type in your message

                  FD D: This is my computer
                       fills  drive D:'s free sectors with  the  message, 
                       "This is my computer"

                  FD /Zero A:
                       zeroes out all free sectors on drive A:

                  FD /Zero A: This is my computer
                       does  the same thing, any message is ignored  with 
                       the /Zero option


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With  the /Mono option ON, text is displayed  in  monochrome 
        regardless  of  whether your display can show colors.   When  the 
        /Mono option is OFF, displays are always in vibrant living color.  
        When  the /Mono option is AUTO, displays will be in color when  a 
        color  display  is detected or monochrome when  a  color  display 
        isn't  found.   The default setting for the /Mono option  in  the 
        distribution files is AUTO.


             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  

             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-
        bution files is OFF; to write directly to the screen.


        The Professional Master Key Utilities, version 2.0        Page 30
        Fill Disk




             /Zero (zero out free sectors).  If you want to zero all free 
        sectors instead of writing a message, use the /Zero option.  When 
        specified,  Fill Disk clears out any old file data with  the  hex 
        character  00 while leaving existing files intact.   Any  message 
        entered before or after the /Zero option is ignored.


             d: (drive to fill).  This is the drive you want to fill.  If 
        omitted, the default drive is filled with the specified  message.  
        The drive letter, when given, must be valid on your system.


             <message>.  Any message to write on all free sectors can  be 
        entered  from the command line.  If omitted, Fill Disk  asks  you 
        for the message prior to running.


             As  Fill Disk runs, it shows an approximate percent  of  the 
        free  sectors filled.  It can be stopped at any time by  pressing 
        F10, which will return you to the MS-DOS prompt.



































        The Professional Master Key Utilities, version 2.0        Page 31
        PMK Master Menu


                                 PMK Master Menu

             The  PMK Master Menu simplifies the use of The  Professional 
        Master  Key Utilities and helps new users quickly learn  how  the 
        utilities  work.   As  each  program  is  highlighted,  a   brief 
        narration  on  it  is shown detailing what its  function  is  and 
        options it has.  Then, each program can run just as it would from 
        the MS-DOS command line, with or without options. 

             The  complete  invocation for PMK Master Menu is:

             PMK-MENU [/Mono ON | OFF | AUTO] [/Slow ON | OFF]


             Examples:
                  PMK-MENU
                       run  the  menu program and all  selected  programs 
                       using  their defaults for /Mono and  /Slow  unless 
                       otherwise specified in a command line

                  PMK-MENU /Slow ON
                       use  BIOS screen writing for the menu program  and 
                       all selected programs


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With  the /Mono option ON, text is displayed  in  monochrome 
        regardless  of  whether your display can show colors.   When  the 
        /Mono option is OFF, displays are always in vibrant living color.  
        When  the /Mono option is AUTO, displays will be in color when  a 
        color  display  is detected or monochrome when  a  color  display 
        isn't  found.   The default setting for the /Mono option  in  the 
        distribution files is AUTO.


             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  

             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-
        bution files is OFF; to write directly to the screen.


             Once running, PMK-MENU opens several windows on the  screen.  
        The upper left window gives some help on running a program.   The 
        upper right window displays the programs that can be run from the 


        The Professional Master Key Utilities, version 2.0        Page 32
        PMK Master Menu


        menu  and  highlights the selected program.   The  middle  window 
        shows the complete command line used to run the selected program.  
        The  lower window briefly describes the options and operation  of 
        the selected program. 

             Select  a program to run by moving the highlighted  bar  (in 
        the upper right window) with <UP> and <DOWN>.  

             As each program is selected, it is briefly described in  the 
        lower window.  A program's description includes a summary of  its 
        functions,  the complete command to run the program,  and  sample 
        commands with comments.  These descriptions are intended to serve 
        mainly  as memory aids on how to run the programs.  They are  not 
        intended to replace reading this User's Guide.

             Once  the desired program has been selected, press Space  to 
        add  arguments and options to the command, or press Enter to  run 
        the program without any additional arguments.

             After  pressing Enter, the selected program is  loaded  into 
        memory and run normally.  Upon its completion, the menu is redis-
        played for you to select another program to run.



































        The Professional Master Key Utilities, version 2.0        Page 33
        Un Format


                                    Un Format

             Un  Format  does what may seem impossible, it  protects  you 
        against  accidental  hard disk formats.  When used on  a  regular 
        basis, it can actually restore a hard disk to its previous  state 
        after accidentally formatting it.

             The  complete  invocation for Un Format is:

             UF [/Mono ON | OFF | AUTO] [/Slow ON | OFF] [/Save] d:


             Examples:
                  UF
                       nothing  happens,  a drive specification  must  be 
                       provided

                  UF /Save C:
                       save drive C: in the file, "B:\UNFORMAT.PMK"

                  UF C:
                       restore  drive C: from the file, "B:\UNFORMAT.PMK" 
                       after an accidental format


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With  the /Mono option ON, text is displayed  in  monochrome 
        regardless  of  whether your display can show colors.   When  the 
        /Mono option is OFF, displays are always in vibrant living color.  
        When  the /Mono option is AUTO, displays will be in color when  a 
        color  display  is detected or monochrome when  a  color  display 
        isn't  found.   The default setting for the /Mono option  in  the 
        distribution files is AUTO.


             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  

             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-
        bution files is OFF; to write directly to the screen.


             /Save  (save the disk).  The /Save option is used  when  you 
        want  to protect a hard disk against an accidental  format.   All 
        necessary information is written in the file, "B:\UNFORMAT.PMK."


        The Professional Master Key Utilities, version 2.0        Page 34
        Un Format




             d:  (drive to save/recover).  This is the drive you want  to 
        protect  or recover.  It must be specified on the  command  line.  
        The drive letter must be a valid drive on your system.



                   What happens to a disk as it is formatted?

             Floppy disks.  A floppy disk, when formatted, loses all data 
        that  was on it.  When MS-DOS's format program formats  a  floppy 
        disk,  every  track on the disk is initialized  and  checked  for 
        errors.   The  initialization process basically  recreates  every 
        track on the disk, eliminating what was there before.

             Hard  disks.  When a hard disk is formatted with  most  ver-
        sions  of  MS-DOS's format program, its data are  not  destroyed.  
        The  only areas that are modified are the boot sector,  FAT,  and 
        root directory.  

             The  MS-DOS format program mainly does two things on a  hard 
        disk:   it  checks for bad sectors and it  initializes  the  boot 
        sector,  FAT and root directory.  It does not  physically  format 
        the disk, but checks the state of the disk's format.  



                      How can a hard disk be Un Formatted?
                       
             Since no file data is actually modified when a hard disk  is 
        formatted by MS-DOS, all that needs to be done to recover a  hard 
        disk from a format is to rewrite the  boot sector, FAT, and  root 
        directory.  This is possible only if those areas of the disk have 
        been previously saved somewhere. 

             That is really all Un Format does.  One part of it saves the 
        boot sector, FAT, and root directory.  Another part writes all of 
        those sectors back to the disk.

             Un  Format  can only recover from formatting  programs  that 
        don't  overwrite all of a hard disk's sectors.  Most versions  of 
        MS-DOS's  format  program don't do this.

             The exception to this exists with all versions up to 3.2  of 
        AT&T and Compaq DOS.  The format program supplied with these ver-
        sions  of MS-DOS do overwrite a hard disk's sectors.   Un  Format 
        cannot  recover a hard disk formatted with these versions of  MS-
        DOS.

             There  also are many other specialized  formatting  programs 
        that do overwrite a hard disk's sectors.  These programs actually 
        modify  the structure of a hard disk in efforts to change or  im-
        prove  its performance.  Un Format isn't able to recover  a  hard 
        disk  after  it is formatted by one of  these  programs.   Fortu-


        The Professional Master Key Utilities, version 2.0        Page 35
        Un Format


        nately,  these  programs that Un Format  cannot  protect  against 
        typically  do  not automatically format your hard  disk.   It  is 
        unlikely that you could accidentally format your disk with one of 
        these programs.



                  So, why can't a floppy disk be Un Formatted?

             Un  Format can be used to save and restore a  floppy  disk's 
        boot sector, FAT, and root directory.  However, it cannot recover 
        the rest of the floppy disk which has been physically eliminated.

             Although Un Format cannot recover a floppy disk after it  is 
        formatted,  it has another equally important purpose.  Un  Format 
        can  be used to save a floppy disk's boot sector, FAT,  and  root 
        directory prior to changing something in one of these areas  with 
        PMK.   Then, if a mistake is made, that area of the  floppy  disk 
        can be restored to try again.



                                 Using Un Format

             Prior  to  using Un Format, copy the file,  "UF.EXE,"  to  a 
        blank formatted disk and label that disk as your Un Format disk.  

             Because  Un Format is a preventative program, it has  to  be 
        used  regularly  to be effective.  I recommend  two  methods  for 
        using Un Format on a regular basis.  Either of these two  methods 
        should  protect  from  an accidental format of  your  hard  disk.  
        Using both methods together provides additional protection.

             The first method is to run Un Format from your  AUTOEXEC.BAT 
        file.   By  doing this, your hard disk will be saved  every  time 
        your computer is rebooted.  To run Un Format in the  AUTOEXEC.BAT 
        file, make sure that your Un Format disk is available in drive B: 
        when your computer starts up.  Insert the following line in  your 
        AUTOEXEC.BAT file:
             
             UF /SAVE c:


             The  next method is to create a .BAT file that will  run  Un 
        Format  before formatting your hard disk. This lets  you  restore 
        the  hard  disk even when you did intend to format  it.    Rename 
        FORMAT.COM to NFORMAT.COM and create the file FORMAT.BAT as shown 
        below.

             echo off
             if "%1" == ""   goto UnFormat
             if "%1" == "C:" goto UnFormat
             if "%1" == "c:" goto UnFormat
             goto formatt
             :UnFormat


        The Professional Master Key Utilities, version 2.0        Page 36
        Un Format


             echo Insert the Un Format diskette in drive B:
             Pause
             UF /SAVE c:
             :formatt
             nformat %1 %2 %3 %4



                      Recovering from an accidental format

             If an accidental format does happen, put your Un Format disk 
        in drive B: and restore the hard disk by typing:

             B:UF /RESTORE c:


             Prior  to  restoring a hard disk, Un Format checks  to  make 
        sure this is really what you want to do.  It shows the  following 
        and asks if it is ok to continue.


                 Restoring drive C:'s boot sector, FAT, and root
                 directory from the saved file.  This could ruin
                 drive C:'s contents if files are present.  

                                Is this ok? (Y/N)     


             Un Format should be used to recover only the same disk  that 
        was  previously saved.  Restoring a different disk  would  render 
        all of the data on that disk unusable.  Any files that existed on 
        the different disk will not be accessible.

             Un  Format won't let you accidentally restore a  disk  whose 
        format differs from the saved disk.  It will, however, restore  a 
        different,  although identically formatted hard disk if you  tell 
        it to.  Make sure the disk being restored is the same as the disk 
        saved.

             When Un Format completes, your hard disk should be  restored 
        to  look  like it when Un Format "saved" the  disk.   All  files, 
        except  those moved or changed since the disk was  saved,  should 
        contain their original data.

             If  Un Format didn't save the disk immediately prior to  its 
        being formatted, there may be some errors in the File  Allocation 
        Table  due  to new or old files being moved and  changed.   These 
        errors  should  be expected and are no reason  for  concern.   To 
        check and correct for these errors, type:

             CHKDSK /f c:






        The Professional Master Key Utilities, version 2.0        Page 37
        Zero Disk


                                    Zero Disk

             Zero Disk permanently removes all traces of all data from  a 
        disk.   It  completely eliminates all existing files  along  with 
        everything  else.  It can remove all traces of  any  confidential 
        data anywhere on a disk.

             When  a disk is zeroed, all of its sectors  are  overwritten 
        with the hex character 00.  Once Zero Disk has finished zeroing a 
        disk, there is no way to recover any data that was on it.


             The complete command to run Zero Disk is:

             ZERODISK [/Mono ON | OFF | AUTO] [/Slow ON | OFF] d:


             Examples:
                  ZERODISK
                       nothing  happens;  a drive specification  must  be 
                       provided.

                  ZERODISK A:
                       zero drive A: after confirming that you want to do 
                       that 

                  ZERODISK C:
                       zero  drive  C:; if Zero Disk thinks you  want  to 
                       zero  a  hard disk, it asks you  to  confirm  that 
                       twice


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With the /Mono option ON, two colors are shown regardless of 
        whether  your display can show colors.  When the /Mono option  is 
        OFF, displays are always in vibrant living color.  When the /Mono 
        option is AUTO, displays will be in color when a color display is 
        detected  or  monochrome when a color display isn't  found.   The 
        default for the /Mono option in the distribution files is AUTO.


             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  

             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-


        The Professional Master Key Utilities, version 2.0        Page 38
        Zero Disk


        bution files is OFF; to write directly to the screen.


             d: (drive to zero).  This is the drive you want to zero.  It 
        must be specified on the command line.  The drive letter must  be 
        a valid drive on your system.



                               How Zero Disk works

             Zero Disk works by systematically filling every sector on  a 
        disk with the hex character 00.  This completely removes any data 
        anywhere on a disk without reformatting the disk.

             Unlike formatting programs, Zero Disk starts zeroing sectors 
        at  the last sector on the disk and works to the front.  It  does 
        this as a safety feature to minimize the damage if the wrong disk 
        was selected.  This means that if you stop Zero Disk after it has 
        been running a short time, some data could still be intact on the 
        disk.   If there weren't many files on the disk, it may  possibly 
        mean that all data is still intact.

             To keep the zeroed disk usable by MS-DOS, Zero Disk does not 
        completely  zero  several sectors.  The first  sector  (the  boot 
        sector) is not touched at all, and the first few bytes in the FAT 
        sectors (used to identify a disk) are also left alone.  All other 
        sectors do not have any data preserved.



                                Running Zero Disk

             Once  running,  Zero Disk opens a window  and  displays  the 
        following  messages (assume drive C: was entered on  the  command 
        line):


                All data on drive C: will be completely destroyed  
                   Drive C: will be zeroed.  Is this ok? (Y/N)


             And, if Zero Disk thinks there is a chance that the disk you 
        want to zero is a hard disk, it displays another message:


              Drive C: may be a hard disk.  Is this still ok? (Y/N) 


             Press  "Y" and Zero Disk will zero the disk.  Press "N"  and 
        you are returned to MS-DOS.

             Once  Zero Disk has started to zero a disk, you may stop  it 
        by pressing F10.  



        The Professional Master Key Utilities, version 2.0        Page 39
        Zero File


                                    Zero File

             Zero  File permanently removes all traces of a  file's  data 
        from  your disk.  It can eliminate all traces of  a  confidential 
        file's current data from a disk.

             Unlike a file deleted by MS-DOS, a file zeroed by Zero  File 
        cannot  be  later recovered from the disk.  There is  no  way  to 
        restore a file's data once it has been zeroed by Zero File.


             The complete command to run Zero File is:

             ZEROFILE [/Mono ON | OFF | AUTO] [/Slow ON | OFF] 
                       [/Keep] [/Yes] <filespec>


             Examples:
                  ZEROFILE
                       nothing  happens;  a file  specification  must  be 
                       provided.

                  ZEROFILE *.BAK
                       zero files in the current directory after  getting 
                       a confirmation

                  ZEROFILE \word\letters\XMAS.86 \tmp\*.$$$
                       zero files in multiple directories

                  ZEROFILE *.LTR /Keep
                       zero files in the current directory after  getting 
                       a confirmation; don't delete the files after  they 
                       are zeroed

                  ZEROFILE A:\work*.* /Yes /Slow ON
                       zero files on another drive; no confirmation ques-
                       tion  will  be asked; display  using  BIOS  screen 
                       writing functions


             /Mono  (Toggle monochrome).  Whenever you want  all  screens  
        displayed  in monochrome set the /Mono option ON.   

             With the /Mono option ON, two colors are shown regardless of 
        whether  your display can show colors.  When the /Mono option  is 
        OFF, displays are always in vibrant living color.  When the /Mono 
        option is AUTO, displays will be in color when a color display is 
        detected  or  monochrome when a color display isn't  found.   The 
        default for the /Mono option in the distribution files is AUTO.


             /Slow (Toggle direct screen writing).  Whenever you want all 
        screen  writing  done using BIOS function calls,  set  the  /Slow 
        option ON.  



        The Professional Master Key Utilities, version 2.0        Page 40
        Zero File


             With  the /Slow option ON, all screen writing is done  using 
        BIOS function calls.  This method of display is slower, but  will 
        let computers that aren't 100% IBM compatible run the  utilities.  
        The /Slow option also may need to be ON to run the programs  from 
        within a windowing operating environment.

             When  the  /Slow option is OFF, all screen writing  is  done 
        directly  to the screen. The default /Slow option in the  distri-
        bution files is OFF; to write directly to the screen.


             /Keep (keep zeroed files).  Normally after a file is  zeroed 
        by Zero File, its filename is erased.  If you would like to  keep 
        the  name visible on the disk, use the /Keep option.  Using  this 
        option still removes all traces of the file(s) selected, but  the 
        file names are left intact in the directory.


             /Yes (answer yes).  Before Zero File actually zeroes a file, 
        it  asks you if you really want to zero the file and waits for  a 
        "Y"  or "N" response before doing anything.  The /Yes  option  is 
        equivalent to replying Yes to this question.  

             Use  /Yes with a lot of caution, especially when  specifying 
        ambiguous   file  names  like  *.COM  or  *.*  since  you   could 
        accidentally, permanently wipe out entire directories.


             <filespec> This is the name of the file(s) you want to zero.  
        Zero File requires that some file specification be provided  when 
        it is invoked. 

             The file specification can be unambiguous like LETTER.TXT or 
        ambiguous like LETTER.0?? or LETTER.*.  The filename can  include 
        an entire or partial directory as well as the drive letter  where 
        the file(s) are located.  


             Any file zeroed by Zero File will lose all of its data.  The 
        file's data cannot be restored later from the disk.  The file can 
        be undeleted with Professional Master Key, but the undeleted file 
        will be completely filled with the hex character 00.  Be  careful 
        before zeroing any file and make sure it is the file you want  to 
        zero. 













        The Professional Master Key Utilities, version 2.0        Page 41
        Appendix A:  Error Messages


                           Appendix A:  Error Messages

             This appendix contains a list of the error messages you  may 
        encounter  while running one of the programs in The  Professional 
        Master Key Utilities.  

             Errors common to all of the programs are listed and  explai-
        ned in this section.  Other errors, specific to each program, are 
        described in separate sections.

             If  you  find an error that isn't covered in  any  of  these 
        sections or find a program operating differently from the way you 
        think it should, please write what happened or what your  problem 
        is and tell us about it.  In your problem report, please  provide 
        at least the following information.

             -- name and version number of the program having a problem.

             -- type of computer you are using.

             -- version of MS-DOS or PC-DOS you are using (use the MS-DOS 
                  VER command to find out).

             -- free  memory  your computer has (use  the  MS-DOS  CHKDSK 
                  command to find out).

             -- the names of any memory resident programs running.

             -- type  of disk(s) the problem happened with.  Please  pro-
                  vide  a copy of the Information screen (using PMK)  for 
                  each disk, if possible.

             -- what  you were doing when you first noticed the  problem.  
                  Please  be as specific as possible.  Does  the  problem 
                  happen consistently?  Can you duplicate the problem  on 
                  different disks? 



                                  Common Errors

             The  only  error common to all of the  programs  deals  with 
        running out of memory.  When one of the programs needs more  mem-
        ory  than is available, it clears the screen and shows a  message 
        similar to:

             Professional Master Key has run out of available memory.
             See your manual for help and suggestions.

             
             Running out of available normally is not a problem.   Having 
        128k of free memory is usually sufficient to run all of the  pro-
        grams  without errors.  PMK is the most memory hungry if  a  hard 
        disk contains a large number of files and sub-directories.   Even 
        then, you should not need to have more than 128k of free memory. 


        The Professional Master Key Utilities, version 2.0        Page 42
        Appendix A:  Error Messages



             There  are several solutions available if you do run out  of 
        available memory.

             If  you don't have a full 640k of standard memory  installed 
        in  your computer, the easiest remedy is to purchase and  install 
        more memory.  

             If  you already have 640k of standard memory installed,  try 
        to  remove  a few memory resident programs from  memory.   Reboot 
        your  computer and run the problematic program again.    Removing 
        memory  resident  programs  leaves more free memory  to  run  The 
        Professional Master Key Utilities.

             Finally,  when running the programs within  a  multi-tasking 
        environment, change the .PIF or similar program description  file 
        for the program.  Allocating more minimum memory for the  program 
        should help it run better.







































        The Professional Master Key Utilities, version 2.0        Page 43
        Appendix A:  Error Messages               Professional Master Key


                             Professional Master Key

                                 > Disk Error <

                           MS-DOS Reported Disk Errors

             The messages describing disk errors MS-DOS finds are:

                          The disk is write protected.
                              Invalid drive number.
                 Disk drive not ready (door open, no disk, etc).
                         CRC error -- bad parity check.
                            Error during a disk seek.
                      Unable to determine the disk format.
                      Bad sector -- not found on the disk.
                      Error during a disk write operation.
                       Error during a disk read operation.
                         A general disk error happened.
                        The working drive doesn't exist.


             Since these messages are fairly self-explanatory, I'll avoid 
        a lengthy discussion about the different types of disk errors MS-
        DOS  identifies.  Instead, I'll briefly explain the  more  common 
        errors you may find find with your disks.

             Many  common errors are found on hard disks and  many  "copy 
        protected" floppy disks since it is normal for them to have a few 
        bad  or unusable sectors.  These sectors may be located  anywhere 
        on the disk, but shouldn't be found within an existing file.  

             While using the Disk Edit function on a hard disk, if one of 
        the  above  error messages displays, expect it and  don't  worry.   
        However, if you find a bad sector on a floppy disk or while using 
        the  File  Edit function, you should be  alarmed.   There  should 
        never  be  any bad sectors on a typical floppy disk or  within  a 
        file.

             A  common user error occurs by trying to use PMK on non  MS-
        DOS disks.  Professional Master Key is intended only for use with 
        MS-DOS disks and may report a variety of errors when used on  non 
        MS-DOS  disks.  PMK should not be used to edit disks  from  other 
        operating systems or disks that don't conform to the exact MS-DOS 
        format.



                            PMK Reported Disk Errors

             The disk errors Professional Master Key reports are due to a 
        disk  appearing  differently from what was expected or due  to  a 
        disk  being larger than it can handle.  These error  messages  do 
        not  necessarily  indicate anything wrong with  your  disks,  but 
        should be considered mainly informational.
         


        The Professional Master Key Utilities, version 2.0        Page 44
        Appendix A:  Error Messages               Professional Master Key



                  The disk ID byte isn't valid for a DOS disk.

             PMK  checks every disk it uses to make sure it is  a  MS-DOS 
        disk.   One of the things it checks is the  FAT's  identification 
        byte.  If this byte doesn't appear to be valid, the above message 
        is  shown.  Normally, this error only appears when accessing  non 
        MS-DOS disks or MS-DOS disks that have been damaged.


                The selected directory wasn't found on the disk.

             Before  reading file names from a directory, PMK  checks  to 
        see if the directory still exists on the disk.  If it can't  find 
        the  directory,  you will see the above  message.   This  usually 
        means that you switched disks without Changing the current disk.


                   The selected file wasn't found on the disk.

             This  error message is similar to the previous message.   It 
        normally indicates a disk was changed without telling PMK.
             

                  The disk has more than 2048 bytes per sector.
             
             Professional  Master  Key, as it  is  distributed,  supports 
        disks  with  any sector size up to 2048 bytes.  Hard  disks  with 
        sector  sizes greater than this won't work with  the  distributed 
        PMK.  If you see this error, contact RPG Software Farm to arrange 
        a custom version of PMK to work with your hard disk.



                                 > File Error <

                  The selected file cannot be renamed to a file
                  name that already exists.

             A  file's name cannot be changed to a name that  is  already 
        present  in  the current directory.  Enter another name  for  the 
        file.

             
                  You cannot erase a sub-directory from within
                  Professional Master Key.

             Professional Master key won't let you erase a  sub-directory 
        name  or  a remove an empty sub-directory.  You need to  use  the 
        RMDIR command from the MS-DOS prompt to remove a directory.


                  The selected file cannot be Undeleted.  It's
                  first cluster is being used by another file.



        The Professional Master Key Utilities, version 2.0        Page 45
        Appendix A:  Error Messages               Professional Master Key


             The first part of the file selected to be Undeleted has been 
        overwritten  by another file.  In this case, it is almost  impos-
        sible  to easily recover all of the file's remaining data, so  it 
        isn't attempted.


                  The selected file cannot be Undeleted.  It's
                  allocation chain cannot be restored.

             There  wasn't  enough free space on the disk  to  completely 
        Undelete the selected file.  This usually means that although the 
        first part of the file may still be intact, it is likely that the 
        file  has  been overwritten.  None of the restored  clusters  are 
        saved.



                Errors While Searching For Text in a Disk or File 

                         > Disk Error at sector xxxxx <

             The  error messages shown during a text search of a disk  or 
        file are identical to the MS-DOS reported disk errors.  For  most 
        disk  errors, the text search continues, showing the  appropriate 
        error message and the additional message:

                                  Continuing... 
             

             However, for the following two errors, the search is ended:

                              Invalid drive number.
                 Disk drive not ready (door open, no disk, etc).
























        The Professional Master Key Utilities, version 2.0        Page 46
        Appendix A:  Error Messages                             Fill Disk


                                    Fill Disk

                                 > File Error <

                     FILLDISK.$$$ wasn't found on the disk.

             Somehow,  the disk being filled has changed or was  switched 
        before  Fill  Disk  could delete its  temporary  file.   


                           FILLDISK.$$$ is read only.

             The  file,  FILLDISK.$$$  already  exists  in  the   current 
        directory  and  has a read only attribute.  Toggle its read  only 
        attribute off with PMK and run Fill Disk again.


                         There are too many open files.

             Fill  Disk  cannot open its temporary file.   All  available 
        file handles are being used by another program.  Run Fill Disk by 
        itself  or  increase the FILES=xx statement  in  your  CONFIG.SYS 
        file.


































        The Professional Master Key Utilities, version 2.0        Page 47
        Appendix A:  Error Messages                               Install


                                     Install

                                 > File Error <

                     The filename wasn't found on the disk.

             The program to be installed couldn't be found in the current 
        directory.   All programs to be installed must be located in  the 
        current, default directory.


                           The filename is read only.

             The  program to be installed has a read only  attribute  and 
        cannot be modified.  Toggle its read only attribute off with  PMK 
        and try to install it again.


                         There are too many open files.

             Install cannot open the program file to install.  All avail-
        able file handles are being used by another program.  Run Install 
        by  itself or increase the FILES=xx statement in your  CONFIG.SYS 
        file.



                             > Installation Error <

                   The color configuration area wasn't found.

                  The options configuration area wasn't found.

             For either of these two errors, the respective configuration 
        areas  could  not be found in the program file  being  installed.  
        These messages imply that the program being installed might  have 
        had  an unauthorized modification and may no longer work  correc-
        tly.   Do  not use any of The Professional Master  Key  Utilities 
        programs if you suspect that they have been modified. 


















        The Professional Master Key Utilities, version 2.0        Page 48
        Appendix A:  Error Messages                       PMK Master Menu


                                 PMK Master Menu

                               > Execution error <

                      The program wasn't found on the disk.

             The  program to run couldn't be found in the current  direc-
        tory.   All programs to run from PMK Master Menu must be  located 
        in the current, default directory.


                         The program is not executable.

             The  selected program has an invalid file format  and  isn't 
        able  to  be run.  This message implies that the program  to  run 
        might  have  had an unauthorized modification and may  no  longer 
        work  correctly.  Do not use any of The Professional  Master  Key 
        Utilities programs if you suspect that they have been modified. 


                  There isn't enough memory to run the program.

             PMK  Master Menu didn't have enough free memory to load  and 
        run  the selected program.  Make sure there is at least  128k  of 
        free memory and run PMK Master Menu again.
































        The Professional Master Key Utilities, version 2.0        Page 49
        Appendix A:  Error Messages                             Un Format


                                    Un Format

                                 > Disk Error <

             The  MS-DOS error messages Un Format shows when it  reads  a 
        hard disk are the same as the MS-DOS reported disk errors descri-
        bed  in  the PMK error section entitled,  "MS-DOS  Reported  Disk 
        Errors."   

             Since  Un Format only reads the boot sector, FAT,  and  root 
        directory  areas of a hard disk, any MS-DOS error  message  shown 
        probably  means  that the hard disk is badly damaged and  may  be 
        unusable  to MS-DOS.  MS-DOS does not permit bad sectors  in  the 
        boot sector, FAT, or root directory areas.


                  The disk ID byte isn't valid for a DOS disk.

             Un  Format  checks the hard disk to  save/restore  prior  to 
        saving/restoring it to make sure it is a valid MS-DOS disk.   One 
        of  the  things it checks is the FAT's identification  byte.   If 
        this byte doesn't appear to be valid, the above message is shown.  


                  The disk has more than 2048 bytes per sector.

             Un  Format,  as it is distributed, supports disks  with  any 
        sector  size  up to 2048 bytes.  Hard disks with  a  sector  size 
        greater  than this won't work with the distributed Un Format.  If 
        you see this error, contact RPG Software Farm to arrange a custom 
        version of Un Format to work with your hard disk.



                                 > File Error <

                     The save file wasn't found on the disk.

             The  file, "B:\UNFORMAT.PMK," couldn't be found.  Make  sure 
        the disk with that file is in drive B: and run Un Format again.


                           The save file is read only.

             The  file, "B:\UNFORMAT.PMK," has a read only attribute  and 
        cannot be modified.  Toggle its read only attribute off with  PMK 
        and run Un Format again.


                         There are too many open files.

             Un  Format  cannot open the  file,  "B:\UNFORMAT.PMK."   All 
        available  file  handles are in use by another program.   Run  Un 
        Format  by  itself  or increase the FILES=xx  statement  in  your 
        CONFIG.SYS file.


        The Professional Master Key Utilities, version 2.0        Page 50
        Appendix A:  Error Messages                             Un Format




                       There is no space on the save disk.

             Drive  B: doesn't have enough free space on it to write  all 
        of  the  file, "B:\UNFORMAT.PMK."  Delete a few files  from  that 
        disk or use a newly formatted disk in its place.


















































        The Professional Master Key Utilities, version 2.0        Page 51
        Appendix A:  Error Messages                             Zero Disk


                                    Zero Disk

                                 > Disk Error <

             The  MS-DOS error messages Zero Disk shows when it  zeros  a 
        disk are the same as the MS-DOS reported disk errors described in 
        the PMK error section entitled, "MS-DOS Reported Disk Errors."  

             Some errors should be expected when zeroing a hard disk.  It 
        is  normal  for a hard disk to have a few  areas  containing  bad 
        sectors.  No errors should exist on a floppy disk however.  If  a 
        disk error happens on a floppy disk, that disk should not be used 
        and should be discarded.

             Zero  Disk continues zeroing a disk after all errors  except 
        the following two errors:

                              Invalid drive number.
                 Disk drive not ready (door open, no disk, etc).


                  The disk ID byte isn't valid for a DOS disk.

             Zero  Disk  checks the disk to zero prior to zeroing  it  to 
        make sure it is a valid MS-DOS disk.  One of the things it checks 
        is the FAT's identification byte.  If this byte doesn't appear to 
        be  valid,  the above message is shown.    Normally,  this  error 
        appears only when accessing non MS-DOS disks or MS-DOS disks that 
        have been damaged.


                  The disk has more than 2048 bytes per sector.

             Zero  Disk,  as it is distributed, supports disks  with  any 
        sector  size  up to 2048 bytes.  Hard disks with  a  sector  size 
        greater  than this won't work with the distributed Zero Disk.  If 
        you see this error, contact RPG Software Farm to arrange a custom 
        version of Zero Disk to work with your hard disk.



















        The Professional Master Key Utilities, version 2.0        Page 52
        Appendix A:  Error Messages                             Zero File


                                    Zero File

                                 > File Error <

                       The file wasn't found on the disk.

                     File: \PATH\FILENAME.NAM wasn't found.
             
             Both of these messages indicate that the file you wanted  to 
        zero wasn't found on the disk.  Recheck the correct name for  the 
        file and run Zero File again.  


                             The file is read only.

             The file to be zeroed has a read only attribute.  Toggle its 
        read only attribute off with PMK and run Zero File again.


                         There are too many open files.

             Zero File cannot open the file to zero.  All available  file 
        handles  are  being used by another program.  Run  Zero  File  by 
        itself  or  increase the FILES=xx statement  in  your  CONFIG.SYS 
        file.
































        The Professional Master Key Utilities, version 2.0        Page 53
        Appendix B:  Future Directions


                         Appendix B:  Future Directions

             "Yes, Virginia.  There is a Santa Claus."

             What  does the future hold for The Professional  Master  Key 
        Utilities?  What new programs will spring up?  What new  features 
        will be added?

             No one is completely sure about the direction the  utilities 
        will  take.  One thing that is certain is the programs will  con-
        tinue  to expand in number and features as long as someone  keeps 
        feeding new ideas and suggestions into my head.  

             This  last page in the documentation describes what  version 
        3.0  of  The  Professional  Master  Key  Utilities  looks   like.  
        However,  my  writing  stops here.  

             It is your turn to write.  If you think of a new feature  or 
        program  to  add to the utilities, please complete this  page  by 
        writing down what you want to see.  Mail the page back to me  and 
        tell me what you think version 3.0 looks like.  

        -----------------------------------------------------------------

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        Note:   The only thing I will guarantee about the future is  that 
        the utilities won't be changed to become memory resident.  Sorry.



        The Professional Master Key Utilities, version 2.0        Page 54

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0598

     Volume in drive A has no label
     Directory of A:\

    FD       EXE     20986  11-02-87  11:02p
    INSTALL  EXE     23386  11-02-87  11:03p
    PMK-MENU EXE     25202  11-02-87  11:05p
    PMK-UTIL DOC    129920  11-02-87  11:06p
    PMK-UTIL INF      1280  11-02-87  11:01p
    PMK      EXE     69434  11-02-87  11:04p
    README   BAT        17  11-02-87  11:00p
    UF       EXE     27296  11-02-87  11:07p
    ZERODISK EXE     21218  11-02-87  11:08p
    ZEROFILE EXE     20018  11-02-87  11:09p
    FILES598 TXT      1443  11-07-88   4:46p
    GO       BAT        38   8-14-87   9:29a
    GO       TXT       617   9-16-88  11:02a
    MANUAL   BAT       147   6-08-88   3:02p
           14 file(s)     341002 bytes
                           14336 bytes free
