---
layout: page
title: "PC-SIG Diskette Library (Disk #1037)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1037/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1037"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-KWICK AND OTHER UTILITIES"

    Speed up disk-intensive programs with memory cache.  Great for programs
    like WordStar that use overlay files.  Redundant disk accesses are
    eliminated by storing frequently-read data in RAM memory.  This RAM can
    be accessed instantaneously, unlike mechanical drives.  The concept is
    similar to a RAM disk; however, you can gain more performance with less
    RAM requirements because PC-KWICK is smart enough to store only
    repeatedly-accessed code in memory.
    
    PC-KWICK automatically allocates memory above 360K that is not used by
    DOS or other memory-resident programs.  The program is designed for DOS
    2.0 through 3.3.
    
    RECONFIG is a handy utility for quickly reconfiguring your AUTOEXEC.BAT
    and CONFIG.SYS files.  Multiple AUTOEXEC.BAT and CONFIG.SYS files can be
    stored by RECONFIG and accessed by a batch file that automatically
    switches files for alternative computer set-ups.  The utility can also
    reboot your computer.
    
    COMPRESS is a data compression routine for text files.  It compresses
    one file at a time, and works under a variety of operating systems
    including MS DOS, VMS and even various versions of UNIX.  C source code
    is provided.
    
    No more memorizing of DOS commands, syntax or keyboard codes.
    EDICOM-12 converts DOS to a menu driven system that's easy to use and
    more productive. Typing commands are replaced by moving the cursor and
    pressing Enter.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDC.DOC

{% raw %}
```





                         EDICOM-12


                       User's Guide



                   (C) Copyright 1987 by
                       EDICOM SYSTEMS
                    19827 W. 12 Mile Rd.
                    Southfield, MI 48076
                       (313) 559-1691

 





                    TABLE OF CONTENTS

      i.  ABSTRACT
      ii. COPYRIGHT NOTICE  AND LICENSE AGREEMENT
      iii.LIMITED LIABILITIES
      iv. BENEFITS OF REGISTRATION AND REGISTRATION FORM
      1.  INTRODUCTION
      2.  BACKGROUND INFORMATION
      3.  SPECIAL FEATURES AND ADD-ON UTILITIES
      4.  SYSTEM FILES
      5.  SYSTEM INSTALLATION AND RUNNING THE PROGRAM
      6.  DESCRIPTION OF THE MAIN MENU
      7.  DESCRIPTION OF  THE RECORDED COMAMAND MENU
      8.  TUTORIAL SESSION
      9.  SOFTWARE MODIFICATION SERVICES


 





      i. ABSTRACT

         EDICOM-12:  DOS Command Processor/Manager.
         Features: recalls last 12 commands,includ-
         ing  parameters;  enables  you to edit and
         reissue previous  commands;  enhanced line
         editor; no  need to prepare menus; employs
         single keys to  invoke  commands; provides
         utilities to  find files, to page  through
         text  files,  and to   prevent  accidently
         overwriting  existing  files;  provides on
         line  help  and  tutorials;  maximum  res-
         ponse time: 0.3 second.  Two modes of ope-
         rations: one for new users and one for ex-
         perienced users.








      ii COPYRIGHT NOTICE  AND LICENSE AGREEMENT

         THIS SOFTWARE AND USER'S GUIDE ARE BOTH PROTECTED  BY
         U.S. COPYRIGHT LAW (TITLE 17 UNITED STATES CODE). CO-
         PYRIGHT  INFRINGERS MAY RESULT IN CRIMIANL  PENALTIES
         (17 USC 506) AND/OR SUBJECT TO CIVIL LIABILITIES ( 17
         USC 504).

         EDICOM-12 is released to the  shareware  distribution
         system under the following conditions:

         a. The EDICOM-12 shall be distributed as a  completed
            set  .All the  files that  come  with the  program
            shall not be modified or deleted.

         b. The users may get a  copy  of  EDICOM-12  directly
            from  EDICOM SYSTEMS by sending us a  check of $6,
            or from any of the shareware distributors.

         c. The distributors  shall not  mislead the  users by
            advertising this program as "free".

         d. The users may evluate this  program for a  reason-
            able time,say 30 days. The satisfied users are ob-
            liged to pay a  registration  fee  of $26  and be-
            come authorized users. ( An authorized  user  will
            get  a copy of EDICOM-36 instead of EDICOM-12 !!)


      iii. LIMITED LIABILITIES

         THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT
         ANY WARRANTY AS TO PERFORMANCE. BECAUSE OF THE DIVER-
         SITY OF ENVIRONMENTS UNDER WHICH THIS PROGRAM MAY  BE
         USED, NO  WARRANTY OF FITNESS FOR A PARTICULAR PURPO-
         SE IS OFFERED. THE USER IS ADVISED TO TEST THE SYSTEM
         THOROUGHLY BEFORE RELYING ON IT. THE USER MUST ASSUME
         THE ENTIRE RISK OF USING THE SYSTEM. ANY LIABILITY OF
         SELLER AND MANUFACTURE WILL BE LIMITED EXCLUSIVELY TO
         PRODUCT REPLCEMENT OR REFUND OF THE PURCHASE PRICE.

  




     iv. BENEFITS OF REGISTRATION AND REGISTRATION FORM

         If you are satisfied with this  program and  register
         with us, you will:

         a. receive a copy of  EDICOM-36, which  has a  memory
            for 36 last entered command and has an add-on uti-
            lity to move files from one diretory to another.

         b. receive infomation and tips on  advanced  applica-
            tions  of the system.

         c. be provided with technical support.

         d. be informed about future updates and new products.

         e. receive special discounts on updated versions.






        REGISTRATION  AND PAYMENT FORM

        To order EDICOM-36, please fill out the form below:

                                          Date: ____/__/1988
        Name: ___________________________ (Title:)  _______________
        (Company:)  _______________________________________________
        Address: ______________________________ City_______________
        State/Country: ________________________ Zip: ______________
        Phone  Work: (___) ___ - ____  Home: (___) ___ - ____

        Method of payment: Please complete the worksheet below  and
        choose one of the payment options indicated. Michigan State
        residents must add sales tax. ALL CHECKS  AND MONEY  ORDERS
        MUST BE DRAWN ON U.S. ACCOUNTS ONLY.
                                         Cost                  Total
                  Description           Per Unit   Quantity    Cost
        ==============================================================
          EDICOM-36 System  Package   |  $26.00  |           |       |
        --------------------------------------------------------------
          Michigan residents add sales tax:  4%      --      |       |
        --------------------------------------------------------------
          COD orders  only,           add $ 3.00     --      |       |
        --------------------------------------------------------------
          Shipping Cost if Overseas,  add $12.00     --      |       |
        --------------------------------------------------------------
                                                    TOTAL    |       |
                                                             =========
         [ ] Check with order  [ ] Money Order  [ ] COD
         Send all items to:
                            EDICOM SYSTEMS
                            19827 W. 12 Mile Rd.
                            Southfield, MI 48076
                            (313) 559-1691

        Volume users, please inquire about quantity discounts.

        Comments and Suggestions:
        ____________________________________________________________

        ____________________________________________________________

        ____________________________________________________________






      1. INTRODUCTION

         EDICOM-12 is  designed  to convert  the DOS of the PC
      to a 'Menu Driven' system, to increase the value of your
      PC to you, and to improve your  productivity. The system
      will work with IBM PC and compatibles, under DOS 2.0 and
      later, with 2  floppy  disk drives   or one  floppy disk
      and one hard disk drives.
          This guide will  demonstrate why  EDICOM-12 is  bene-
      ficial to you and shows you how to  install and  use  the
      system.



  




      2. BACKGROUND INFORMATION
         DOS (PC-DOS AND  MS-DOS) has  become a  very  popular
      and  useful   operating   system   for   microcomputers.
      However, it has several  evere deficiencies:

      (1)  The command line editor is not user-friendly, espe-
           cially  when you  have long command lines to  enter
           and/or typo errors to correct.

      (2)  The DOS does not have a mechanism to store the pre-
           viously entered  commands  (it stores only the last
           command). Our experiences indicate  that an average
           user uses only about 16 commands in a typical week.
           Because there is no  memory  system,  he/she has to
           retype these commands all the time.  With the deve-
           lopment of the hardware/software  technology in the
           past few years, it is  reasonable for a PC user  to
           expect a system that can store the  previously ent-
           ered commands the way a telephone dialer stores the
           telephone numbers,  so he/she can re-enter the com-
           mand to DOS at the touch of a single key!

      (3)  The DOS does not provide a menu system for the user
           to  conveniently select and enter a command. It re-
           qures the user to remember all the commands at  all
           times.  The new multi-user system is coming to  the
           market soon.  There will be more commands to be re-
           membered. Isn't it time for us to get a menu system
           and forget about remembering the commands?

      (4)  The DOS 'TYPE' is not easy to use. Some improvement
           shall be done in this area.

      (5)  The DOS 'COPY' command can erase your existing file
           without any warning,if the target file name happens
           to be one of your existing files.  Don't  you think
           something should be done about it?

           EDICOM-12 is designed to solve these problems in an
      integrated manner.  Furthermore, it demostrates how fast
      your PC can 'TYPE'; please also notice that the  average
      response time of EDCOM-12 is 0.3 second. It can increase
      your productivity because it facilitates the  process of
      command entry, a major part of your effort in using your
      computer.

 

      3. SPECIAL FEATURES AND ADD-ON UTILITIES

         A. EDICOM-12  FEATURES:

         1. MENU DRIVEN: The EDICOM-12 uses single keys to in-
            voke major functions.  Most  DOS  commands  can be
            initiated at the touch of a single key.

         2. ENHANCED LINE EDITOR:  The EDICOM-12 has an advan-
            ced command line editor. You can easily edit, can-
            cel, or reenter one of the 12 last commands,  inc-
            luding parameters.

         3. DYNAMIC COMMAND MANAGING  SYSTEM:   The  EDICOM-12
            has a memory for 12 last entered  commands,  which
            can be accessed randomly. It automatically adjusts
            the sequence so that the  commands will be  placed
            in a reversed chronical order -- the  last command
            entered will appear at the first place.

         4. EVENT TIMER: The EDICOM-12 provides an event timer
            that can measure the duration of a DOS command  or
            user's program in minutes, seconds, and hundredths
            of a second.  You don't need a stopwatch any more.

         5. ON LINE TUTORIAL ASSISTANCE: Once the user selects
            a DOS command, the EDICOM-12 will display a  brief
            description of the command and examples.  It  will
            prompt the user to enter the necessary parameters,
            then send the completed command to DOS for  execu-
            tion.  It always returns to the menu once DOS com-
            pletes the command/program.

         6. MEMORY REQUIREMENT:  The program size is 40 KB; it
            occupies 95 KB of RAM when loaded.









         B. EDICOM-12 HAS ADD-ON UTILITIES  FOR THE  FOLLOWING
            FUNCTIONS:

         1. PAGING TEXT FILES: The EDICOM-12  has an  enhanced
            'TYPE' utility that enables you to  page back  and
            forth through the text files. It is 20 times fast-
            er than the DOS TYPE command.

         2. PREVENTION OF  LOSING  DATA FILES:  The  EDICOM-12
            has built-in enhanced 'COPY' utility  that  checks
            for existing target file.  If it does  exist,  the
            EDICOM-12 will prompt you to correct the  problem.
            On the other hand, the DOS COPY command could over
            write your existing file without any warning.

         3. FINDING  FILES: The EDICOM-12 provides a  stand a-
            lone utility 'QFILE' to locate the  directory of a
            specified file.
                USAGE:  QFILE string   (e. g., QFILE tes     )
                        QFILE fl_name  (e. g., QFILE test.doc)
            You can provide either the  text  fragment of  the
            file name  or the  complete  file name  (wild card
            characters are supported.)

     4. SYSTEM FILES

           EDICOM-12 comes with the following files:

      edc.exe          (the program file)
      load_c.bat       (a batch file to load the
                        system files from a: to c: )
      demo             (text file for demonstration)
      qfile.exe        (the utility to find files)
      cmmds.dat        (data file for recorded  commands)
      edc.doc          (this user's guide )

      Notes: 1. cmmds.dat  must be in  \edicom or the  working
             directory when edc.exe is loaded.
             2. qfile.exe  shall be in the  same  directory as
             the DOS commands.  Please make sure this file can
             be accessed at all time.



  

      5. SYSTEM INSTALLATION AND RUNNING THE PROGRAM

      A. Floppy disk system
         0. Format a blank disk with /s option (FORMAT A: /s).
         1. Copy the above files to the disk that contains the
            DOS system files(command.com  must be on the  disk
            whenever you enter a command.)
         2. Enter the command: edc    (edc.exe is the program)
            (Please do not write-protect  your disk  that con-
            tains the EDICOM system files,   since it needs to
            update the data file while running the program.)

      B. Hard disk system
         0. Format a blank disk with /s option (FORMAT A: /s).
         1. Copy the above files to the disk that contains the
            DOS system files.
         2. To load the program from  a: to  c:
            Insert the original disk in drive a:
            Enter the command:   a:load_c
            [Notes: load_c.bat  is a batch file  that makes  a
             new directoy \edicom in c: and copys all  EDICOM-
             files from a: to this directory. It also  changes
             the dir. to c:\edicom. ]
         3. To run the program:
            Enter the command: edc    (edc.exe is the program)
            [ The program edc.exe is in the dir. c:\edicom ]



     6. DESCRIPTION OF THE MAIN MENU

            You run the program by entering the command: edc .
      The first screen is the program logo.  At the bottom,you
      can see the  intruction asking you to press  the 'Enter'
      key. Please do so and you will find the 'Main Menu' dis-
      played.
            EDICOM-12 provides menu sytem to minimize the typ-
      ing effort required in entering  commands.  As  shown in
      the Main Menu of the sytem,  each command is preceded by
      its associated key. Most keys are chosen to be the first
      letters of the DOS commands.  The  main menu prompts you
      to make a selection.  The valid  selection is one of the
      keys in the directory or Funtion Keys (F1 and F9) listed
      at the bottom of the menu.  The options are briefly des-
      cribed as the followings:

            Option 'x'  eXits to DOS. (to get back to  EDICOM-
      12, enter the command: edc )

            Option 'u'  (Universal command) allows you to  en-
      ter any command not listed in the directory of the menu.

            Option 'w'  (Write commands to memory)  allows you
      to record  a   command into the memory  without  sending
      the command to DOS for execution.

            Option 'b', 'e', 'g',  and 'o'  are  reserved  for
      user's programs. Renaming the programs are expected. The
      user can, then,  enter  one of the most  frequently used
      programs  at the touch of a single key.

            Option 'F1' provides help to the user.

            Option 'F9' leads you to the recorded command menu
      which  allows  you to  enter a  command at  the touch of
      a single key. It also allows you to delete or update the
      recorded commands and to add new commands to the list.
  

            The  rest of the options in the  directory are the
      DOS commands.  Once you enter one of the  keys, the sys-
      tem will pop up  another screen that   displays a  brief
      description about the command and examples. It will also
      print the  command and  prompt you to enter the required
      parameters, such as  path names or file  specifications.
      It expects  you to  depress the 'Enter' key to  complete
      the command, which will be sent to DOS for execution and
      be  recorded in the memory for future re-entry. When the
      DOS completes the  execution of the  command,  EDICOM-12
      will prompt   you to  press the  'Enter'  key and, then,
      returns to the main menu.  This compltes the whole  pro-
      cess.  Instead of 'DOS prompts',the user is dealing with
      the  menus. It eliminates all the frustrations associat-
      ed with 'DOS', since  EDICOM-12 serves as an interpreter
      between  'DOS' and the user.





  

      7. DESCRIPTION OF  THE RECORDED COMAMAND MENU

            When you select option 'F9' in the Main Menu,  the
      EDICOM-12 will  display the  first page of the  recorded
      command menu.  The valid option selections are 'A', 'B',
      'C',....'L' and function keys 'F10','F9', 'F5' and 'F2'.
      Each letter key  must be  associated  with a  valid  DOS
      command or user's program, including the  necessary par-
      ameters. 'F9' works as a toggle switch, it advances  one
      page at a time. At  page 3, it  switchs  back to  page 1.
      'F10' takes you  back to the  Main Menu, where  you  can
      eXit to  DOS by selecting option 'x'.  'F5' enables  you
      to delete the recorded commnds, one  at a time. 'F2' al-
      lows you to update the cmmmands, one  at a time. You can
      also  add a new  command in the  first blank line.   The
      'power users' will find this option very useful. One can
      stay in this menu and issue commands conveniently. Thus,
      the Main Menu is for new users, while the Recorded  Com-
      mand Menu is for power users!!!
      (Notes: This demo version has memory for 12 cmmds only.)

            The system has a memory for 12 last  entered  com-
      mands. It aotomatically adjusts the sequence so that the
      commands will be placed in the reversed chronicle order-
      - the last command entered will  appear at the first po-
      sition.  This technique greatly  simplifies the  command
      management procedure.   The system is a good debug  tool
      since the  menu keep the log of  what you did.  If  some
      thing went wrong, you can easily find out which  command
      was the source of the problem.

 

      8. TUTORIAL SESSION

         There are two methods to enter comamnds:  one is thro-
      ugh the main menu, the other is through the recorded com-
      mand menu. The best way to learn EDICOM-2 is to practice
      with some examples:

      Method 1: Entering commaands from the main menu.
      (Recommended for new PC users.)
      A. Example 1: DOS Command-- DIR
         Step 1: Select 'L' in the Main Menu.
         Step 2: Press  'Enter' key in the second screen.
             When you go back to the main menu, select 'F9' and
         you will find 'DIR' is recorded in the memory.
      B. Example 2: DOS Command-- TYPE demo
         Step 1: Select 't' in the Main Menu.
         Step 2: Enter 'demo' amd press 'Enter' key in the next
         screen.
            Now you can see how fast your PC can type. When you
         are back to the Main Menu, select 'F9', you  will find
         that 'TYPE demo' is registered in the memory.
      C. Example 3: DOS Command-- COPY demo test1
         Step 1: Select 'c' in the Main Menu.
         Step 2: Enter  'demo test2' in the second screen.
             When you go back to the main menu, select 'F9' and
         you will find a new command is recorded in the memory.
      D. Example 4: DOS Command-- COPY demo test1
             Repeat the whole  process of  example 3. Now test1
         is an existing file, EDCOM-12 will give you an warning
         and prompt you to enter a new target file name if  you
         decide not to overwrite it.
      E. Examples 1-3, using the Recorded Command Menu
         Select the valid keys, one at a time, from the  Record-
         ed  Command Menu and see what happens.

   

      Method 2:Entering commands from the recorded command menu.
      (Recommended for power  users.)
      A. Add a new command to the recorded command  menu by  se-
         lecting F2 in the Recored  Command Menu, then enter the
         letter key representing the first blank line, e.g.,'A'.
         Now  enter the desired command, e. g., DIR
         (Notes: To complete a command entry, you must press the
                 'Enter' key.)
         To invoke this command, you must select the letter  key
         representing this command.

      B. You can update any recorded command by the same  proce-
         dure; but instead of the first blank  line, you  select
         a key that has a recorded command.

      C. You can delete any recorded command by  selecting 'F5',
         then seleting the  key  representing the  command to be
         deleted.  You can only delete one command at a time.




      9. SOFTWARE MODIFICATION SERVICES

         EDICOM Systems will be glad to modify the sytem to suit
         your environment at a nominal charge ( some are free).
         Please call or write:
         Telephone Number: (313) 559-1691 or (313)541-8889
         Address:          EDICOM SYSTEMS
                           19827 W. 12 Mile Rd.
                           Southfield, MI 48076

      Thank you for considering EDICOM-12.
      ( Your suggestions and comments will be appreciated. )
 


```
{% endraw %}

## FILE1037.TXT

{% raw %}
```
Disk No  1037
Program Title: PC-KWICK and OTHER UTILITIES
PC-SIG version 1

    PC-KWICK is a disk cache program that helps speed applications that
must repeatedly access data or overlays on disk drives. Cache utilities let
you reduce the number of redundant disk access by storing frequently-read
data in memory. With a copy of recently-used disk sectors in RAM, PC-KWICK
reduces the number of times the application program needs to read the
mechanical disk. Because of the way this program keeps track of disk
transfers, the longer you use it in any one session, the greater the
performance benefit. PC-KWICK automatically allocates memory for itself
leaving 360K bytes for your applications. It takes up the memory over 360K
that is not used by DOS or your other memory-resident programs. This disk
cache program is designed to support diskettes and hard disks on IBM PCs,
XTs, and ATs, as well as laptops, PS/2s, and 386 systems using DOS 2.0
through 3.3.

    EDICOM-12 is designed to convert the DOS of the PC to a 'Menu Driven'
system, to increase the value of your PC to you, and to improve your
productivity. This program is designed to solve these problems in an
integrated manner. Furthermore, it demonstrates how fast your PC can
'TYPE.' Please also notice that the average response time of EDICOM-12 is
0.3 second. It can increase your productivity because it facilitates the
process of command entry, a major part of your effort in using your
computer. The EDICOM-12 DOS Command Processor/Manager features recall of
the last 12 commands, including parameters/; the ability to edit and
reissue previous commands; an enhanced line editor/; single keys to invoke
commands; utilities to find files, page through text files, and prevent
accidently overwriting existing files; and on-line help and tutorials. It
has two modes of operation, one for new users and one for experienced
users.

    If you want a quick and organized way to reconfigure your AUTOEXEC.BAT
and CONFIG.SYS files, then RECONFIG is a utility you will find very useful.
RECONFIG is a batch file that automatically changes these files for
alternative computer set-ups, and then reboots your computer. No longer
will you have to constantly edit these files every time that you want to
change your computer configuration. RECONFIG obtains the alternative
computer configurations from a subdirectory containing files written by you
or another user. Thus the amount of separate configurations that RECONFIG
can handle is only limited by disk space. You can include as many
configurations as you need, either for yourself or for each person who uses
the computer.

    COMPRESS is a data compression routine for text files. It can only
handle one file at a time. This program also comes with its source code.
COMPRESS works not only under MS DOS, but also under VMS and various UNIX
machines as well.

Usage: DOS/System Utilities

System Requirements: 64K memory and one disk drive (PC-KWICK requires at
least 360K memory to function properly).

How to Start: Read the documentaton for each of the programs before
running them. Type the name of the file you want to run. For example, if
you wanted to run PC-KWICK you would type: SHAREPCK (press enter).

Suggested Registration: Various amounts ranging from $5.00 to $26.00.

File Descriptions:

------------  PC-KWICK
SHAREPCK COM  PC-KWICK main program.
------------  EDICOM-12
EDC      EXE  The program file.
LOAD_C   BAT  A batch file to load the system files from a: to c: )
DEMO          Text file for demonstration.
QFILE    EXE  The utility to find files.
CMMDS    DAT  Data file for recorded  commands.
EDC      DOC  The user's guide.
------------  RECONFIG
RECONFIG BAT  Batch file, main program.
REBOOT   COM  Program that reboots the computer.
RECONFIG DOC  Instructions.
RECONFIG ABS  Short program description.
------------  COMPRESS
COMPRESS EXE  Main program.
COMPRESS C    Source code.
READ     ME   Introduction.
COMPRESS MAN  Documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #1037 PC-KWICK and other Utilities  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Make sure to read the documentaton for each of the programs before      ║
║ running them. If you would like to run a program, type the name of the  ║
║ file that you wish to run. For example if you wanted to run PC-KWICK    ║
║ you would type: SHAREPCK (press enter). All files with the extension    ║
║ .EXE or .COM will run automatically when you type the filename. As in   ║
║ the case with PC-KWICK, the filename is SHAREPCK.COM.                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## RECONFIG.DOC

{% raw %}
```
      RECONFIG - reconfigure \autoexec.bat and \config.sys
                  Version 1.1, January 1988
  Copyright (c) 1986, 1988 by Karl Freburger and Dave Donegan
                    All rights reserved.

RECONFIG allows you to easily reconfigure your system for
different purposes (e.g., to run a program that cannot coexist
with SideKick).

To set up RECONFIG, create the directory \configs.  This is where
the configuration files will live.  For each configuration, there
is a file name.aut (the autoexec.bat file), and a file name.con
(the config.sys file).  To reconfigure your system, you say:

    reconfig name

The name.aut file is copied to \autoexec.bat, the name.con file
is copied to \config.sys, and the system is rebooted.  If you
include a second parameter, the system is not rebooted.  RECONFIG
without any parameters prints a list of the configurations
available.

Be sure that when you want to edit your configuration, you edit
the files in \configs, NOT the \autoexec.bat or \config.sys
files, because they'll get overwritten the next time you do a
RECONFIG. Also, be sure to copy your existing \autoexec.bat to
\configs\normal.aut (or some other name), and your existing
\config.sys to \configs\normal.con.

reboot.com is a program that reboots your computer, just as if
you had pressed CTL-ALT-DEL.

RECONFIG was written by Karl Freburger and Dave Donegan.


RECONFIG is not public domain; it is SHAREWARE.  If you find it
useful, please register by sending $5 to the author.  Business,
commercial, or government use is prohibited unless the
registration fee is paid. Quantity discounts and site licenses
are available.  I'm always happy to receive suggestions from any
user.

RECONFIG is available on disk for $10 from the author.

All users are granted a limited license to copy RECONFIG provided
that:

        It is copied in unmodified form, complete with the
        documentation files.

        No fee, or other compensation, may be accepted or
        requested, except for charges to cover the actual cost of
        copying.


RECONFIG is distributed as is, with no other warranty expressed
or implied. In other words, you're on your own.

Send your $5 registration fee and suggestions to:

        Karl Freburger
        17 Hazelwood Drive
        Hudson, NH 03051

RECONFIG is copyright (c) 1986, 1988 by Karl Freburger and Dave
Donegan.  All rights reserved.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1037

     Volume in drive A has no label
     Directory of A:\

    CMMDS    DAT      4398   1-01-80  12:40a
    COMPRESS C       54754  11-11-87  11:44p
    COMPRESS EXE     19945  11-11-87  11:50p
    COMPRESS MAN      8074   7-21-87   8:24p
    DEMO              7065  11-26-87  12:39p
    EDC      DOC     21918   1-14-88  12:25a
    EDC      EXE     39710   1-06-88  10:08a
    FILE1037 TXT      4171   5-04-88   9:13a
    GO       BAT        38   4-21-88  12:55p
    GO       TXT       771   4-21-88   1:03p
    LOAD_C   BAT        46   1-01-80   1:44a
    QFILE    EXE      8274  11-24-87  12:57p
    READ     ME       1147  11-12-87  12:09a
    REBOOT   COM        16   1-19-88   7:40p
    RECONFIG ABS        55   1-19-88   7:46p
    RECONFIG BAT       817   1-19-88   7:40p
    RECONFIG DOC      2463   1-19-88   7:40p
    SHAREPCK COM     15310   3-30-88   9:59a
    _______  ___         5   4-21-88  12:12p
    ________ __          5   4-21-88  12:16p
    ________ ___         5   4-21-88  12:10p
           21 file(s)     188987 bytes
                          119808 bytes free
