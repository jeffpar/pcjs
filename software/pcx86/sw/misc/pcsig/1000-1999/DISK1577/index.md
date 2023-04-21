---
layout: page
title: "PC-SIG Diskette Library (Disk #1577)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1577/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1577"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INSTANT ACCESS MENU SYSTEM"

    INSTANT ACCESS MENU SYSTEM allows you to organize your software from one
    central program.  Menu-driven and colorful, it can help you get the most
    out of your computer with the least amount of hassle.
    
    Access any program you have on your disk from a menu.  A one-letter
    selection will move you through the wilds of DOS paths, find your
    selection and start it.  When you are done, it returns you to the
    control menu.  A certain degree of experience with DOS will help you to
    configure the menus when you first set up the system, and provide you
    with the incentive to set up the system.
    
    Included on the main menu with the system is a notepad, a text editor, a
    DOS shell, a time log and a screen dimmer.  INSTANT ACCESS can be
    included in your AUTOEXEC file, and provision has been made to assign
    passwords to each program if you need to control access to specific
    software.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FEATURES.TXT

{% raw %}
```

    Prodigy Technologies is a proud member of the Association of
    Shareware Professionals.

                         ┌───────┐                  (tm)
                  ──┌────┴──┐    │───────────────────
                    │  ┌────┴──┐ │  Association of
                    │  │       │─┘  Shareware
                    └──│   o   │    Professionals
                  ─────│   │   │─────────────────────
                       └───┴───┘    MEMBER



   FEATURES.TXT FILE CONTENTS
   --------------------------
    1) What is IAMS ?
    2) Feature Summary
    3) New for version 2.65
    4) Versions prior to 2.65


   [1]

   WHAT IS THE INSTANT ACCESS MENU SYSTEM ?

     The  Instant Access Menu System (IAMS) is a program that allows
     you to organize  your software  in a centralized fashion.  From
     there,  you may  "order" which  program you  want to  run, much
     like you'd order what you wish to eat from a restaurants menu.

   WHO WAS IAMS DEVELOPED FOR ?

     IAMS  was designed for anyone who wants to get  the most out of
     their computer programs  with the least amount of work,  hassle
     and   wasted  time.   IAMS  is   both  an   organizational  and
     productivity  tool.  It's  interface  allows  for  easier,  and
     quicker, access to any program on your hard disk.

   JUST HOW WILL IT MAKE THINGS "EASIER AND QUICKER" ?

     Once  you have entered the information on the programs you wish
     to  run  through Instant  Access, you  no longer  have to  deal
     through  DOS. For example, if you want to run your spreadsheet,
     you  simply hit "A"  (or whatever you wish it  to be). The same
     is true for any type  of program. From here  on out, you  don't
     have to switch drives and  directories, or remember the command
     to begin the program.

     Simply  said, with Instant Access  you can run any program that
     would  normally   be  executed  through   DOS.  The   important
     difference is  that  with Instant  Access,  it  only takes  two
     keystrokes!

   WHO WROTE THIS PROGRAM ?

     This  program  is produced  by Tony  Gentile, a  member of  the
     Association  of Shareware Professionals (ASP). The ASP wants to
     make  sure that  the shareware principle works  for you. If you
     are  unable to resolve a  shareware related problem with an ASP
     member  by contacting  the member directly, ASP  may be able to
     help.   The ASP  Ombudsman can  help you  resolve a  dispute or
     problem  with an  ASP member, but  does not provide   technical
     support  for the  member's  products. Please  write to  the ASP
     Ombudsman  at  P.O. Box  5786,  Bellevue, WA  98006  or send  a
     Compuserve message via easyplex to ASP Ombudsman 70007,3536.


   [2]

   PROGRAMS :

     o Run any DOS program using less then 4K of memory.
     o Run any of 400 DOS programs with just two keystrokes.
     o Run programs on other [logical] drives.
     o Run internal DOS Commands.
     o Run programs on your PATH statement.
     o Run a program at  a specific time and date, or everyday
       unattended.
     o Pass parameters to any program.
     o Password protect any program.

   CONFIGURATION :

     o Completely menu driven configuration system.
     o Program entry is done interactively.
     o Complete drive, directory and file name validation.

   GENERAL UTILITIES :

     o User definable colors.
     o Automatic screen blanking utility.
     o Usage log for program (time) tracking.
     o Online Help
     o A PopUp Notepad.
     o A Full-functioned text editor.
     o A DOS Shell.
     o Running time display.

   [3]

   Release v2.65 is both a maintenance release and an upgrade. New
   features include :

   - AutoBoot : This is an  insurance policy  for  your  programs.
   When IAMS is run in AutoBoot mode, it monitors the programs you
   run. If a program does not return after exit for any reason, it
   can be AutoBooted.  For example, if you start a program, and it
   is terminated do to a power outage,  the  program will run when
   the power is restored.

   - Save Message : The  configuration  system has been updated to
   automatically  prompt  you  for  confirmation on exit from each
   area if updates were made and changes were not saved.

   - Banner Message : Users may now configure the banner message.

   Unfortunately, the complete rewrite of the configuration system
   lead to a few bugs sneaking in. They have been *properly* dealt
   with :

   Bugs : - The "Shadow" bug is fixed.
          - The "Prompt" bug is fixed.
          - The "Drive"  bug is fixed.
          - The "Blank"  bug is fixed.

   As always,  if you  have ANY  questions or comments  concerning
   IAMS,  PLEASE feel  free to contact  me. The best  ideas always
   come from users!

   [4]
			    Version 2.6

   o Colors : Users  may now define their own colors to be used in
     the menu system.

   o Pause  : Users  now have the  option to  have programs  pause
     after they execute.

   o Usage  Log  :  The  Mini  Log  has been  re-written.  It  now
     displays it's information in a much more useable fashion.

   o Screen Blanking : A  key toggle (along with automatic screen
     blanking) has been installed for immediate screen blanking.

   o Configuration Program  : Approximately  7000 lines  of the
     configuration  program has been re-written. It is now cleaner
     and faster.

   o Help Screens  : All of the  help screens have been re-written
     and re-formatted.

   o Documentation  :  This  documentation  file  has  been  re-
     formatted, as well as updated to reflect all program changes.



                            Version 2.5

     - Color  : The colors have been changed once again, and will
       now remain until full color configuration is made available.

     - Blanking : Screen blanking has been changed. Instead of the
       former manual toggle, the program will now automatically
       blank the screen after three minutes of keyboard inactivity.
       When it blanks the screen, it displays a message. This
       message is rotated between two locations, once every minute.
       In this manner there is no chance for screen burn in.

     - Log : A small, "Mini-Log" has been added to the program. It
       creates a small file named MINILOG.TXT, which can be
       displayed by entering TYPE MINILOG.TXT at the DOS prompt.

     - Passwords : Password entry from the menu program has been
       changed. In order to provide  maximum security, there will
       be absolutely NO keyboard echo when the password is
       entered.

    -  Toggles  : Most of the additions made modify the
       configuration file MENUS.CFG. However, they can also be
       turned on or off from inside the menu system.

     - Functions : The functions from the menu system have been
       changed from numeric (1, 2, 3...) to function keys (F1, F2,
       F3...).

     - Bugs : Somehow, <grin>, the last version was surprisingly
       clean. About three weeks after it's release I found a small
       bug in the configuration program. When defining a program,
       entering anything other than a path (ie. C:\) when asked for
       the path would give a system error (but the program wouldn't
       crash). This is now fixed.

                              Version 2.4 :

     o Color Configuration:  The user may now select a toggle for
       either color, or mono screens.

     o Users may  now define their  favorite Text Editor, or use
       the Turbo Editor as the default.

     o The configuration program has been added as an option from
       the function menu.

     o Each individual program may now  have it's own 5 character
       password.

     o When  attempting  to save  a  file  in the  configuration
       program, a screen is displayed containing the status  of the
       save (success / fail, etc).



     o Improved AutoExecution area. This area has been completely
       redone.  Additionally,   it  has   been  moved   into  the
       configuration program to allow proper editing functions. It
       now allows not only data import, but also customization.

     o Parameters have also been  completely restructured. Rather
       than just having  the previous options  of Yes or No, with
       Yes allowing you to enter parameters at run time,  you now
       have three options. No, Fly (like the Yes option before),
       and Set. The Set option allows you to predefine parameters
       to use with a specific program.

     o Help screens. The help screens have been updated, so as to
       be useful white  the new version. Additional  help screens
       have been added.

     o The  notepad  has  been  modified.  It now  has  an ESCape
       command that lets you exit without updating it's file,
       NOTE.PAD.

    o Bugs Department.
      1) You may now hit ESC to escape from any editing sequence.
      2) High Noon. The clock has been fixed to read 12:00 pm at
         noon, rather than 0:00 pm.
      3) Root directory.  Previously, if  you entered the  root
         directory as the path for a program, and than entered an
         invalid file name, the program would show you a blank list
         of files in the root directory. This has been corrected.
      4) Floppies. Previously, when you designated drive A or B as
         the path to the program,  IAMS  would search  the  floppy
         drives. This meant  that 1) IAMS crashed  if no floppy is
         in the drive,  or 2) It requires the user to insert  each
         and every floppy disk... This has likewise been corrected.

                             Version 2.31:

       o Applications - Instant Access will  now  auto-execute  any
         of your configured programs  at any time and date. There is
         also an option to execute a program every day.

       o File Validation -  The file validation featured added in
         version 2.1 and updated in 2.2 has been updated for the new
         data files. In addition, it now includes program and path
         verification.

       o Command Line  - You may now send  command line arguments
         (switches parameters) to any defined application.

       o  Configuration  -  The  configuration  program  has  been
          updated, to including better online help, and a more usable
          interface. It has  also been modified to work with the new
          data files.



       o  File  Conversion   -  A  utility  has  been  included to
          automatically convert data files from version 2.0, 2.1 and
          2.2 to 2.3.

       o DOS -  The configuration program  now checks to make  sure
         that DOS 2.0 or higher is installed, and refuses to run if
         it isn't.

                              Version 2.2:

       o  Applications  -  Instant  Access  has  increased  program
          capacity  by  400%.  The  program  will now run  any  400
          applications or commands that the user defines, while still
          maintaining a simple interface.

       o  File Validation  - The file  validation featured added  in
          version 2.1 has been updated for the new data files. It also
          now generates INSTANT.BAT automatically.

       o  Configuration  -  The  configuration  program   has  been
          updated,   including  better online help, and a  more usable
          interface. It has  also been modified  to work with the  new
          data files.

       o  File  Conversion   -  A  utility  has  been  included  to
          automatically convert data  files from  version 2.0, 2.1 to
          2.2.

                              Version 2.1 :

       o  File   Validation  -   This   newest  addition   to  the
          configuration program will  create all necessary data  files
          to run Instant Access, rather then  require the user to save
          each sub-menu, configured or not.

       o  Passwords -If a password was left blank during configuration
          configuration, the user  will no longer  be prompted to  hit
          return.

       o  Interface - The user interface for Instant Access has been
          "modernized". The new  look is  not only more  attractive,
          but is  actually faster.

       o  Real time clock  - In the  upper right hand corner,  users
          will find a real time clock updated by the second.

       o  Documentation -  This documentation  file was modified  to
          reflect the changes in the program.

```
{% endraw %}

## FILE1577.TXT

{% raw %}
```
Disk No: 1577                                                           
Disk Title: Instant Access Menu System                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Instant Access Menu System                               
Author Version: 2.65                                                    
Author Registration: $10.00                                             
Special Requirements: Requires Epson compatible printer.                
                                                                        
INSTANT ACCESS MENU SYSTEM allows you to organize your software from one
central program.  Menu-driven and colorful, it can help you get the most
out of your computer with the least amount of hassle.                   
                                                                        
Access any program you have on your disk from a menu.  A one-letter     
selection will move you through the wilds of DOS paths, find your       
selection and start it.  When you are done, it returns you to the       
control menu.  A certain degree of experience with DOS will a.) help you
to configure the menus when you first set up the system and b.) provide 
you with the incentive to set up the system.                            
                                                                        
Included on the main menu with the system is a notepad, a text editor, a
DOS shell, a time log and a screen dimmer.  INSTANT ACCESS can be       
included in your autoexec file and provision has been made to assign    
passwords to each program if you need to control access to specific     
software.                                                               
                                                                        
File Descriptions:                                                      
                                                                        
MENUS    EXE  Menu system executable file.                              
CONVERT  EXE  Conversion utility for previous versions.                 
MENUHELP MEN  Menu file.                                                
CONFIG   EXE  Configuration utility.                                    
NOTE     EXE  Notepad executable file.                                  
NOTE     HLP  Help function for Notepad.                                
README   1ST  Message from the author.                                  
FEATURES TXT  A listing of all features and improvements in v2.6.       
TURBO    EXE  Text editor excutable file.                               
MANUAL   TXT  User documentation.                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## INFOFORM.TXT

{% raw %}
```
*PROGRAM TITLE:
> Instant Access Menu System


*DETAILED PROGRAM DESCRIPTION:

>   WHAT IS THE INSTANT ACCESS MENU SYSTEM ?
>
>     The  Instant Access Menu System (IAMS) is a program that allows
>     you to organize  your software  in a centralized fashion.  From
>     there,  you may  "order" which  program you  want to  run, much
>     like you'd order what you wish to eat from a restaurants menu.
>
>   WHO WAS IAMS DEVELOPED FOR ?
>
>     IAMS  was designed for anyone who wants to get  the most out of
>     their computer programs  with the least amount of work,  hassle
>     and   wasted  time.   IAMS  is   both  an   organizational  and
>     productivity  tool.  It's  interface  allows  for  easier,  and
>     quicker, access to any program on your hard disk.
>
>   JUST HOW WILL IT MAKE THINGS "EASIER AND QUICKER" ?
>
>     Once  you have entered the information on the programs you wish
>     to  run  through Instant  Access, you  no longer  have to  deal
>     through  DOS. For example, if you want to run your spreadsheet,
>     you  simply hit "A"  (or whatever you wish it  to be). The same
>     is true for any type  of program. From here  on out, you  don't
>     have to switch drives and  directories, or remember the command
>     to begin the program.
>
>     Simply  said, with Instant Access  you can run any program that
>     would  normally   be  executed  through   DOS.  The   important
>     difference is  that  with Instant  Access,  it  only takes  two
>     keystrokes!
>
>   WHO WROTE THIS PROGRAM ?
>
>     This  program  is produced  by Tony  Gentile, a  member of  the
>     Association  of Shareware Professionals (ASP). The ASP wants to
>     make  sure that  the shareware principle works  for you. If you
>     are  unable to resolve a  shareware related problem with an ASP
>     member  by contacting  the member directly, ASP  may be able to
>     help.   The ASP  Ombudsman can  help you  resolve a  dispute or
>     problem  with an  ASP member, but  does not provide   technical
>     support  for the  member's  products. Please  write to  the ASP
>     Ombudsman  at  P.O. Box  5786,  Bellevue, WA  98006  or send  a
>     Compuserve message via easyplex to ASP Ombudsman 70007,3536.
>
>   FEATURE SUMMARY:
>
>   PROGRAMS :
>
>     o Run any DOS program using less then 4K of memory.
>     o Run any of 400 DOS programs with just two keystrokes.
>     o Run programs on other [logical] drives.
>     o Run internal DOS Commands.
>     o Run programs on your PATH statement.
>     o Run a program at  a specific time and date, or everyday
>       unattended.
>     o Run IAMS in AutoBoot mode.
>     o Pass parameters to any program.
>     o Password protect any program.
>
>   CONFIGURATION :
>
>     o Completely menu driven configuration system.
>     o Program entry is done interactively.
>     o Complete drive, directory and file name validation.
>     o Area exit verification.
>     o Configure the Banner title
>
>   GENERAL UTILITIES :
>
>     o User definable colors.
>     o Automatic screen blanking utility.
>     o Usage log for program (time) tracking.
>     o Online Help
>     o A PopUp Notepad.
>     o A Full-functioned text editor.
>     o A DOS Shell.
>     o Running time display.
>
>

*WHO IS THE INTENDED USER?

>Instant Access was designed to work in any environment. This may range
>from the home user, to the corporate user.


*UNIQUE FEATURES (WHY IS YOUR PROGRAM BETTER?):

>Instant Access has features that range from simple to advanced. As an
>example of a simple feature:
>
>When CONFIG is run for the first time, it creates all of the necessary
>date files for the program. Included in this is the batch file, used to
>run Instant Access (MENU.BAT). It is configured for the current drive
>and directory. However, there's no need to use an editor to change
>this. If the user wants to edit this information, he/she can simply go
>to the General Configuration area, and change what's needed.
>
>As mentioned, IAMS also has more advanced features. One example is the
>AutoBoot feature. Instant Access is the FIRST and ONLY program to offer
>this feature.
>
>WHAT IS AUTOBOOT?
>
>    AutoBoot is a new feature, unique to IAMS. In the most basic sense,
>    AutoBoot is an insurance policy.  To better describe it, we'll need
>    an example.
>
>    Say for instance,  you used the  IAMS Auto-Execute  feature to have
>    you're Hard Disk backup program run at 2:00 am.  Two o'clock comes,
>    and the program begins.  At the same time, a power glitch or outage
>    occurs.  Ordinarily, you'd be out of luck.  However, with AutoBoot,
>    as soon as IAMS comes back up, it *senses* that the program did not
>    finish properly. It then begins a ten second count down. If no keys
>    are pressed, it "AutoBoot's" the program.
>
>    This isn't restricted to backup programs. It could be for anything,
>    from a communications script file to a database sort. And, it
>    doesn't have to be used with Auto-Execute!


*PROGRAMS CAPACITY:

>Instant Access can hold up to 400 user defined programs. It can hold an
>additional ten in it's Auto-Execution que.


*SPECIAL SYSTEM REQUIREMENTS :

>A Hard Disk is highly recommended.


*HOW TO START THE PROGRAM:

>To create all necessary files automatically, type CONFIG at the DOS
>prompt. Once this routine is complete, you may exit back to DOS and type
>MENU. This will begin the actual menu system.


*WHAT IS THE REGISTRATION FEE?

>Registration is 25.00 for the current version in possession. For 30.00,
>they can receive that latest available version. Upgrades to new versions 
>are 5.00.


*MATERIALS OR SERVICES THAT COME WITH REGISTRATION:

>Registration includes a notice for all future updates. It allows access to
>bug fixes that may not be released publicly.


*LIST OF PROGRAM FILES AND ONE-LINE DESCRIPTION OF EACH FILE:

>MENU.BAT     : Batch file used to start Instant Access
>MENUS.EXE    : The actual Menu Driver
>CONFIG.EXE   : The Configuration System
>CONVERT.EXE  : The Conversion/Creation System
>TURBO.EXE    : The Turbo Editor
>NOTE.EXE     : The Notepad
>NOTE.HLP     : The Notepad help file
>MENUHELP.MEN : The Help File for the Configuration System
>MAIN.MEN     : Main Menu definition file
>PASS.MEN     : Password definition file
>SUBMENU.MEN  : The Sub Menu definition file
>README.1ST   : Information for New/Old users
>FEATURES.TXT : File to be viewed while OnLine
>MANUAL.TXT   : Instant Access Documentation

<###>
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```







                              TABLE OF CONTENTS

          Area               Description                           Page
          ______________________________________________________________

          1.0   Introductions.                                       1
          1.1   Instant Access program capabilities.                 2
          1.2   Hardware and Software Requirements.                  2
          1.3   New improvements for v2.65!                          3
          1.4   Instant Access Warranty.                             3
          1.5   License and Copyright Notice.                        4
          1.6   Order Form for registering your copy!                5
          1.7   Corporate and Quantity Purchases.                    6

          2.0   Using CONFIG.EXE - The IAMS Configuration System.    6
          2.1   A Little Note                                        7
          2.11  A Word on Help                                       7
          2.12  Valid Keys                                           7
          2.13  Running it                                           7
          2.14  The File Validation Screen                           8
          2.2   The Opening Screen                                   8
          2.3   Main Menu Configuration                            8-9
          2.4   The Sub Menu Selector                             9-10
          2.5   Configuring a Program                            10-11
          2.6   Program Entry Validation                         12-13
          2.7   Password Configuration                              13
          2.8   General Configuration                            13-15
          2.9   Configuring AutoExecution                        16-17
          2.99  Quitting                                            17

          3.0   Using MENU.EXE - Instant Access itself!             18
          3.01  Running it                                          18
          3.02  Self Checking                                       18
          3.1   The Main Menu                                       18
          3.2   Passwords                                           18
          3.3   The Sub Menus                                       19
          3.4   The Function Menu                                   19
          3.41  Online Help                                         20
          3.42  Registration Info                                   20
          3.43  Notepad                                          20-21
          3.44  The Turbo Editor                                 21-23
          3.45  DOS Shell                                           23
          3.46  Screen Blank                                        23
          3.47  Autoexecution toggle                                24
          3.48  AutoBoot toggle                                     24
          3.5   ESCaping                                            24
          3.6   Final Note                                          24






















                        TABLE OF CONTENTS (Continued)

          Area               Description                           Page
          ______________________________________________________________

          4.1   The User Supported Software Concept.                25
          4.2   AutoBoot Information.                               26
          4.3   Trouble running programs or the DOS shell.          27
          4.4   Instant Access and Autoexec.Bat.                    27
          4.5   Programs known to work with Instant Access.         28
          4.6   The Programmer's machines.                          28
          4.7   Thanks to those that helped.                        29























































          Instant Access Menu System   Version 2.65   07/15/89   Page 1

                            * 1.0 - INTRODUCTION *

          WHAT IS THE INSTANT ACCESS MENU SYSTEM ?

          The  Instant Access Menu System (IAMS) is a program that allows
          you to organize  your software  in a centralized fashion.  From
          there,  you may  "order" which  program you  want to  run, much
          like you'd order what you wish to eat from a restaurants menu.

          WHO WAS IAMS DEVELOPED FOR ?

          IAMS  was designed for anyway who wants to get  the most out of
          their computer programs  with the least amount of work,  hassle
          and   wasted  time.   IAMS  is   both  an   organizational  and
          productivity  tool.  It's  interface  allows  for  easier,  and
          quicker, access to any program on your hard disk.

          JUST HOW WILL IT MAKE THINGS "EASIER AND QUICKER" ?

          Once  you have entered the information on the programs you wish
          to  run  through Instant  Access, you  no longer  have to  deal
          through  DOS. For example, if you want to run your spreadsheet,
          you  simply hit "A"  (or whatever you wish it  to be). The same
          is true for any type  of program. From here  on out, you  don't
          have to switch drives and  directories, or remember the command
          to begin the program.

          Simply  said, with Instant Access  you can run any program that
          would  normally   be  executed  through   DOS.  The   important
          difference is  that  with Instant  Access,  it  only takes  two
          keystrokes!

          WHO WROTE THIS PROGRAM ?

          This  program  is produced  by Tony  Gentile, a  member of  the
          Association  of Shareware Professionals (ASP). The ASP wants to
          make  sure that  the shareware principle works  for you. If you
          are  unable to resolve a  shareware related problem with an ASP
          member  by contacting  the member directly, ASP  may be able to
          help.   The ASP  Ombudsman can  help you  resolve a  dispute or
          problem  with an  ASP member, but  does not provide   technical
          support  for the  member's  products. Please  write to  the ASP
          Ombudsman  at  P.O. Box  5786,  Bellevue, WA  98006  or send  a
          Compuserve message via easyplex to ASP Ombudsman 70007,3536.

          HOW ABOUT SOME SPECIFICS ON IAMS ?

          For more information  on IAMS,  including features,  functions,
          setup and use, just continue reading!

















          Instant Access Menu System   Version 2.65   07/15/89   Page 2

                            * 1.1 - CAPABILITIES *

          PROGRAMS :

               o Run any DOS program using less than 4K of memory.
               o Run any of 400 DOS programs with just two keystrokes.
               o Run programs on other [logical] drives.
               o Run internal DOS Commands.
               o Run programs on your PATH statement.
               o Run programs in AutoBoot mode.
               o  Run a program at a specific time and date, or everyday
                 unattended.
               o Pass parameters to any program.
               o Password protect any program.

          CONFIGURATION :

               o Completely menu driven configuration system.
               o Program entry is done interactively.
               o Complete drive, directory and file name validation.
               o Prompting to confirm exit if changes were not saved.
               o Edit the Banner message.

          GENERAL UTILITIES :

               o User definable colors.
               o Automatic screen blanking utility.
               o Usage log for program (time) tracking.
               o Online Help
               o A PopUp Notepad.
               o A Full-functioned text editor.
               o A DOS Shell.
               o Running time display.


                  * 1.2 - HARDWARE AND SOFTWARE REQUIREMENTS *

          IAMS was  designed for  use on any  IBM PC/XT/AT, PS/2,  or any
          fully compatible  machine. It  requires 172K  worth  of RAM  to
          load, but less than 4K to run programs.

          Although  Instant Access  could be run off  a floppy drive, you
          would  not realize the true  benefits it provides. Thus, a Hard
          Disk is  also recommended. The  only required  software is  DOS
          version 2.0 or greater.





















          Instant Access Menu System   Version 2.65   07/15/89   Page 3

                   * 1.3 - NEW IMPROVEMENTS FOR VERSION 2.65 *

          Many enhancements have been made in  this latest version. These
          include:

          o AutoBoot : Instant Access can now be run  in either Normal or
          AutoBoot  mode. Normal mode is how you've always used IAMS. The
          new  AutoBoot feature  will automatically  restart any  program
          that  did not return  to the menu.  For example  : If  you were
          running  a program,  and it was interrupted  by a power outage,
          it  would be automatically  restarted (within 10 seconds) after
          the power is restored.

          o Save Message : If  you've made a change in  any area with the
          configuration  system, did  not save  it, and  attempt to exit,
          you will now be prompted for confirmation.

          o Banner Message : Users may  now enter their own  43 character
          message to insert in the Banner.

          o Bugs :
               - The "Shadow" bug has been fixed.
               - The "DOS prompt" bug has been fixed.
               - The "Drive" bug has been fixed.
               - The "Screen Blank" bug has been fixed.

          As always,  if you  have ANY questions  or comments  concerning
          IAMS,  PLEASE feel  free to contact  me. The best  ideas always
          come from people like you!


                              * 1.4 - WARRANTY *

          PRODIGY  Technologies makes no  warranty of any kind, expressed
          or implied,  including, without  limitation, and warranties  of
          merchantability  and/or  fitness   for  a  particular  purpose.
          PRODIGY  Technologies  shall not  be  liable for  any  damages,
          whether  direct, indirect,  special or   consequential  arising
          from  a  failure  of this  program  to  operate in  the  manner
          desired by the user.

          PRODIGY  Technologies shall  not  be liable  for any  damage to
          data  or property which may be caused directly or indirectly by
          the  use of this program. IN NO EVENT will PRODIGY Technologies
          be liable to you for  any damages, including  any lost profits,
          lost  savings  or  other  incidental  or  consequential damages
          arising  out of your  use or inability  to  use the program, or
          from any claim by any other party.


















          Instant Access Menu System   Version 2.65   07/15/89   Page 4

                    * 1.5 - LICENSE AND COPYRIGHT NOTICE *

          Instant  Access  is   distributed  under  the  User   Supported
          software concept.  Non-registered users  of Instant  Access are
          granted a  limited license to  use Instant Access for  a 30 day
          trial period, in  order to determine  its suitability for their
          purposes.   ANY   OTHER   USE   of  Instant   Access   requires
          registration.  Any  use of  non-registered  copies  of  Instant
          Access   by  an   organization,  business,   or  any   kind  of
          institution is PROHIBITED.

          Registration  allows you to use the product on a regular basis.
          Registration includes mailed  notification of  the next  update
          to the program.

          If you  purchased this program for  a disk vendor or user group
          library,  you have NOT registered  the program. The ONLY way to
          register is to select item  one (1) or two  (2) from the  below
          descriptions,   and  mail  the  registration  form  to  PRODIGY
          Technologies.

          Instant Access comes in several forms:

          1] Registration only.  This costs  $25.00 and assumes that  you
          have  already  received a  copy  of  the program  from whatever
          source.  We do not provide diskettes or manuals. The fee covers
          the use of the program.

          2]  Registration/Diskette. This costs $30.00. If you order this
          package,  we will send you  the latest available version of the
          program, along with the corresponding documentation (on disk).

          3] Registered User  Upgrade. This costs $5.00, which covers all
          shipping and handling charges.
































          Instant Access Menu System   Version 2.65   07/15/89   Page 5

                             * 1.6 - ORDER FORM *

          Make cash, check or money order out to either  Tony Gentile, or
          PRODIGY Technologies, and mail it to:

                             PRODIGY Technologies
                            14611 Carmel Ridge RD
                             San Diego, California 92128

          Please send: (5 1/4, 360K DISKS ONLY)

          Instant Access Registration ............ @ $ 25.00 ea #_____
          Instant Access Registration/Diskette ... @ $ 30.00 ea #_____
          Instant Access Registered User Upgrade . @ $  5.00 ea #_____

          [ PLEASE PRINT ]

          NAME    :____________________________________________________

          ADDRESS :____________________________________________________

                   ____________________________________________________

                   ____________________________________________________

          Day Phone:(____)______-_______    Evening:(____)______-_______

          Current version in my possession _2.65_

          COMMENTS:_____________________________________________________

                   _____________________________________________________

                   _____________________________________________________

          [The items below are optional]

          Computer:_____________________________________________

          DOS version:________

          Do you have a color display [Y/N]:__
          Do you have a modem [Y/N]:__

          Where did you hear about (and/or receive a copy of) IAMS ?

          [ ] BBS   Name_____________________   Ph #________________
          [ ] SIG   Name____________________________________________
          [ ] CompuServe
          [ ] Friend
          [ ] Other ________________________________________________















          Instant Access Menu System   Version 2.65   07/15/89   Page 6


                  * 1.7 - CORPORATE AND QUANTITY PURCHASES *

          All corporate, business,  government or other commercial  users
          of  Instant  Access  must  be  registered.  We  offer  quantity
          discounts  starting  at the  eleventh copy.  Corporate or  site
          licensing is available.

          Purchases  of  over  75  units  may  be   handled  as  quantity
          purchases  or  as  corporate  licensing  agreements.  Licensing
          agreements  allow  duplication  and  distribution  of  specific
          numbers of copies within  the licensed institution. Duplication
          of multiple copies is not allowed  except through execution  of
          a licensing agreement. Please write for further details.

          Note: Educational Institutions such as schools or  universities
          who  wish to  purchase a  limited number  of copies  of Instant
          Access may do so at $15.00 per copy.


          The quantity purchase discounts are as follows:

                    0 - 10 copies:      no discount
                   11 - 25 copies:     10% discount
                   26 - 50 copies:     20% discount
                  51 - 100 copies:     25% discount
                 101 - 200 copies:     30% discount
                 201 - 300 copies:     35% discount
                 301+      copies:     40% discount


          All prices and discounts are subject to change without  notice.
          Discounts  are NOT  cumulative; they apply to  single orders of
          like  products only. Unit prices are the same as for individual
          users.

          NOTE: You may  NOT use Instant Access within your  organization
                without a prior purchase or license arrangement.


                          * 2.0 - USING CONFIG.EXE *

          CONFIG.EXE  is the menu  driven configuration program for IAMS.
          It  let's you define virtually every aspect of the program in a
          very simple and straight-forward manner. Enjoy!






















          Instant Access Menu System   Version 2.65   07/15/89   Page 7

                           * 2.1 - A LITTLE NOTE *

          Just as  a note, I wanted to remind you that this manual is not
          to teach you the niceties  of DOS. A basic  knowledge of DOS is
          required  to setup this program.  If you need an explanation of
          some  aspect  of  DOS,  or if  there  is  something  you  don't
          understand  about hard disks or subdirectories, please refer to
          your DOS  manual, or ask  a friend. Other  good places  to look
          for  help are  your local  Bulletin Board  Systems (BBS's),  or
          local user group.

                          * 2.11 - A WORD ON HELP *

          Help  is available to you throughout the configuration program.
          This  manual is  more detailed,  but the  instructions provided
          within the program will point you in the right direction.

                            * 2.12 - VALID KEYS *

          Throughout  the configuration program,  you will be prompted to
          enter  descriptions, and names  of different items. During this
          time,  several keys are available to help you with entering (or
          editing) the items.

          [Right/Left  Arrow]:  Hitting the  right or left arrow key will
          move the cursor one space in the appropriate direction.

          [Up/Down  Arrow]:   Within the program  configuration area, you
          will have a list of four  items to configure for  each program.
          You may use  the up and  down arrow keys  to move  through that
          list.

          [INS]: The INSert key can  be hit to toggle  insert mode on  or
          off.

          [Backspace]:   The backspace key will  delete the character  to
          the left of the current cursor position.

          [DEL]:    The  DELete key  will  delete  the character  at  the
          current cursor location.



                            * 2.13 - RUNNING IT *

          To  start  the configuration  program, type  CONFIG (and  press
          return) at the DOS prompt.



















          Instant Access Menu System   Version 2.65   07/15/89   Page 8

                      * 2.14 - FILE VALIDATION SCREEN *

          The  first thing you will  see when you start the configuration
          program is the file validation screen. It searches the  current
          directory  for all  of the necessary data  files to run Instant
          Access. If they are  not found, they  will be created. If  they
          are  found,  they will  appear on  the check  list. After  file
          validation, the program will prompt you to hit  a key, and will
          then proceed to the Opening Screen.


                         * 2.2 - THE OPENING SCREEN *

          The opening screen gives you the following options:

                       F1)  View the Opening Screen Help
                       F2)  Configure the Main Menu
                       F3)  Configure the Sub Menus
                       F4)  Configure Passwords
                       F5)  General Configuration
                       F6)  Configure AutoExecution
                      Esc)  Exit to DOS

                      * 2.21 - OPENING SCREEN CHOICES *

          Essentially,  the opening screen presents you with five choices
          (F2 through  F6). This documentation is  written to assist  you
          in this order. However,  you may of  course choose to edit  any
          section at any time you wish.


                      * 2.3 - MAIN MENU CONFIGURATION *

          Upon selecting Function Key Two  (F2) from the  Opening Screen,
          you  will be  placed in  the Main  Menu Configuration  area. In
          this  area, you will define  the descriptions of the Sub Menus.
          Each  description  can  be  up  to 25  characters  long.  These
          descriptions are  what you  will  initially see  when the  menu
          program starts.

                         * 2.31 - MAIN MENU CHOICES *

          [A to T] : When you enter a letter,  from A to T,  you  will be
          presented  with a  prompt. You may enter  any description up to
          25  characters. When you are done, hit return. The program will
          then update the screen.

          Common definitions for Sub Menus  are: Utilities, Spreadsheets,
          and  so  on, but  of  course,  it all  depends  on the  type of
          programs you use.
















          Instant Access Menu System   Version 2.65   07/15/89   Page 9

                   * 2.31 - MAIN MENU CHOICE (continued) *

          [F1] : When you select this choice, you will  see a help screen
          which will list all available commands.

          [F2]  :Choice 2 allows  you to  save the changes  to disk. This
          choice create a file named  MAIN.MEN in the  current directory.
          If the file already exists, it will be over written.

          [Esc]  : The last choice  is the ESC  key on your keyboard (the
          ESCape key).  Hitting  this  will  return you  to  the  Opening
          Screen. Please  note  that if  you  select  this option  before
          saving your changes, the changes you made will be lost.


                       * 2.4 - THE SUB MENU SELECTOR *

          When  you select  Function  Key  Three (F3)  from  the  Opening
          Screen,  you will see the Sub Menu Selector.  This area is your
          path to each of the twenty different Sub Menus.

                     * 2.41 - SUB MENU SELECTOR CHOICES *

          At  this point, you should  see the descriptions you entered in
          the  Main Menu  area listed  in this  menu. From  the  Sub Menu
          Selector, you have several choices:

          [A to T] :Select the  Sub Menu that you  wish to configure. You
          don't   have to configure all four hundred applications at this
          time.  After  entering a letter from A to T,  you will be moved
          to  the Sub Menu Configuration area.

          [F1] : View a help screen on the Sub Menu Selector options.

          [Esc] : This choice will return you to the Opening Screen.


                       * 2.5 - SUB MENU CONFIGURATION *

          After  selecting a  Sub Menu  from the  Sub Menu  Selector, you
          will be presented with the following choices:

                         * 2.51 - SUB MENU CHOICES *

          [A to  T] :  Choosing a  letter from   A  to T   allows you  to
          configure  the corresponding program.  You will have to provide
          a  description,  a  path,  and  the  executionary  name of  the
          program. More details follow.


















          Instant Access Menu System   Version 2.65   07/15/89   Page 10

          [F1]  :   This  choice  will  display  two  pages  of  complete
          instructions  on what  you need to  do to configure  a program.
          The   help  is  very   detailed,  and   should  be   more  than
          satisfactory if you happen to need on the spot help.

          [F2] : This choice saves  the changes you have  made to a  file
          named SUBMENU.MEN. The changes are saved VERY quickly.

          [F3] : This choice will allow you to clear  (ie delete) a range
          of  entries. You  may delete from  one, to twenty.  If you exit
          from  the  Sub  Menu   without  saving,  the  entries  will  be
          restored.

          [Esc]  : This choice will  return you to the  Sub Menu Selector
          area.


                       * 2.6 - CONFIGURING A PROGRAM *

          When you choose a letter  from  A  to T  you will be  presented
          with  a  prompt  for  several  different  items.  You  will  be
          prompted  for all of them  at one time.  You may use the cursor
          keys to  move between them.  When you  are done with  each one,
          hit return.  After  answering  all of  them, the  program  will
          start to validate them.

          [Prompt 1: Description]
          A  good description might  be the  name of the  program and its
          version number. These descriptions  are what you  will see from
          within  the actual menu  program, after  you have  selected the
          Sub  Menu, and  entered the correct  password. Descriptions may
          be  up  to 25  characters long.  If you  leave the  description
          blank, the program will not run.

          [Prompt 2: The path]
          The  path must  have the  drive, followed  by a  colon,  then a
          slash, and then the subdirectory.

          For  example,  lets say  that you  want to  define the  Instant
          Access  configuration  program. We'll  say  the program  is  on
          drive C  (your hard disk),   and is  in subdirectory  MENU. The
          path would look like this:

          C:\MENU

          That's all there is to it. Just  remember that it is  important
          that you follow the following syntax: drive[:][\]subdirectory.

          You  may of  course,  have  more then  one  subdirectory.  Just
          remember that there must  be a slash [\]  between each of them.
          Also, the maximum path length is 25 characters.















          Instant Access Menu System   Version 2.65   07/15/89   Page 11

          [Prompt 3: Program name]
          The  third prompt asks  for the name  of the  program, and its'
          extension. It is important that you  provide the correct  name,
          and  extension. Extensions must be  .EXE, .COM or .BAT.  Please
          note that  you may enter internal  DOS commands  (like DIR), or
          external ones (like CHKDSK.COM).

          So, lets  have an example.  If we still  wanted to  include the
          Instant  Access  configuration  program,  we  would  enter  the
          following  when  the  configuration  program  prompts  for  the
          program name:

          CONFIG.EXE

          [Prompt 4: Parameters]
          If  you  wish to  pass parameters  (also known  as arguments  /
          switches)  to the program at run time, you should answer either
          R or S  here. If  you do not wish to  pass parameters, enter  N
          (no).  When the menu  program goes to run your program, it will
          check to see the answer to this question.

          Entering  (R) signals the program  that you wish to be prompted
          for parameters before the program executes.

          Entering   (S)  signals  the  program  that  you  have  default
          parameters that  you always want  passed to  this program.  You
          may enter these parameters following the S. For example:

          DIR *.* /P
              ^^^^^^---------- Parameters

          In  the above  example,   *.* /P   are  parameters. So,  if you
          always  wished to  pass these to your  program, you would enter
          S*.* /P at the prompt.

          Entering  (N) signals  that you do not  want to pass parameters
          to this program.

          [Prompt 5: Password]
          This  prompt allows  you to  enter a  5 character  password for
          this  specific program. If you  do not wish to password protect
          the  program, simply leave the  entry blank (Hit enter when you
          come to it).

          [Prompt 6: Pause]
          If  you want  the Instant  Access to  pause  after it  runs the
          program,  you may enter a Y  or y here. If not, you may enter a
          N or n.


















          Instant Access Menu System   Version 2.65   07/15/89   Page 12

                  * 2.61 - PATH/NAME/PARAMETER VALIDATION *

          When  you  hit  enter  after  the   prompt  for  pausing,   the
          configuration program  will attempt  to validate  your entries.
          Here is a listing of possible messages for each prompt:

          [Path]:
          o  Path not found - The  path you entered does not exist on the
            drive. You will be prompted to re-enter the path.
          o Illegal Path - The  path  you entered did not have  a drive,
          colon, and slash. You will be prompted to re-enter the path.
          o Path found - The  configuration program found the  path that
          you entered.

          [Program]:
          1. File  found: The  file you entered  was found either  in the
          directory you specified, or on your PATH (DOS Environment).
          2. Internal:  You entered  an internal DOS  command, which,  of
          course was found.
          3.  File not found: The  file you entered could not be found in
          either the directory you entered or in your PATH statement.
          4.  Illegal '.':  You used  more or  less then  one (.)  in the
          filename.
          5.  Illegal  '*'  or  '?':  Wildcards  are  not  allowed  in  a
          filename.
          6. Illegal prefix: You  entered more then  8 characters  before
          the extension (.).
          7. Illegal  extension: Either  the extension was too  short, or
          too long.
          8. No definition was entered.

          As you can tell,  a lot of checking is  being done here. If you
          get either message  one or two, you  will know that the program
          you  entered was  located. If  you get  a message  from four to
          eight,  you entered  an illegal file  name. If you  get message
          three,  you will  see  a list  of files  in  the  directory you
          selected pop up.  You may have used  an extension of .EXE  when
          the  actual name is .COM.  By showing you the list, you will be
          able to check.


          [Parameters]
          1. You will see a message indicating which type you selected.
          2. You will  get a message  saying that you entered  an invalid
          selection, and will be prompted to re-enter.

          [Pausing]
          1. You  will  get  a  message  indicating  whether  you  wanted
          pausing or not.
          2. You will get  a message indicating  that you did not  answer
          with a Y or N, and will be prompted to re-enter.















          Instant Access Menu System   Version 2.65   07/15/89   Page 13

          After everything  is validated, you  will be prompted to strike
          a  key. Following  that, the program will  update the menu, and
          allow you to make your next selection.

                       * 2.7 - PASSWORD CONFIGURATION *

          After  selecting  Function  Key  Four  (F4)  from  the  opening
          screen,  you  will be  brought  to the  Password  Configuration
          Area. Here,  you will  define the passwords  for the  different
          items within Instant Access.

                         * 2.71 - PASSWORD CHOICES *

          The  password configuration area lets you define a password for
          every   aspect  of  Instant  Access.  Here  are  the  available
          choices:

          [A to T]  : Upon selecting  a letter  from  A  to T,  you  will
          define the password for the corresponding Sub Menu.

          [U] Configure the password for the DOS Shell.
          [V] Configure the password for the Text Editor.
          [W] Configure the password for the Auto-execution area.
          [X] Configure the password for Exiting to DOS.
          [Y] Configure the password for Configuration.

          [F1] Displays the Password Area help screen.
          [F2] This choice saves  the changes you have  made to disk. The
          file that the changes are saved to is named PASS.MEN.
          [Esc] This choice returns you to the Opening Screen.

                        * 2.72 - DEFINING A PASSWORD *

          Regardless  of which one you  select you will be presented with
          a prompt for the password. Just type  in any numbers or letters
          (for  a total  of 8),  and hit  return. The  program  will then
          update the screen.

                * 2.8 - MODIFYING THE GENERAL CONFIGURATION *

          After  selecting  Function  Key  Five  (F5)  from  the  Opening
          Screen, you will  be brought to the  area where you can  modify
          the  two files,  MENU.BAT and  MENUS.CFG.  From this  area, you
          have five choices.

          Please  note  that  the  configuration  program   automatically
          creates   this  file  when  you  first  run  the  configuration
          program.  It  uses the  current  drive  and  directory for  the
          definition.  If you plan on moving the program to another area,
          or  just  want  to do  it  yourself,  then the  following  will
          explain how to do just that.















          Instant Access Menu System   Version 2.65   07/15/89   Page 14

                   * 2.81 - GENERAL CONFIGURATION CHOICES *

          [F1] : This selection displays the online help screen.

          [F2] :  This options  allows you  to save all  changes to  both
          MENU.BAT and MENUS.CFG.

          [F3]   :  This  selection  allows  you  to   edit  the  general
          configuration.  When you  select it, you  will be able  to edit
          the seven prompts seen on the screen.

          [Prompt 1: Drive]
          This  prompt  asks you  to enter  the drive  where the  Instant
          Access files  are located, followed by a colon. If  you were on
          drive C, you would enter C: at this prompt.

          [Prompt 2: Path]
          This  prompt  asks you  to  enter the  path  where the  Instant
          Access files are located.  It must have a  slash, \ ,  prefixed
          to  it. So,  if you  were in  a subdirectory  called MENU,  you
          would enter \MENU at this prompt.

          [Prompt 3: Exit Location]
          This prompt asks you to enter a drive and  directory to exit to
          when  you leave the menu  program. If you  were on drive C, and
          wanted to exit to  your root directory, you would enter C:\  at
          this prompt.  Even if  you wish to  stay on the  present drive,
          and  only  change directories  when  you exit,  it  is best  to
          specify a drive.

          [Prompt 4: Editor Name]
          This  prompt asks you to enter the name for the Text editor you
          wish to use.  The default is  TURBO.EXE, which is the  DOS name
          of the  Turbo Editor. If  you wish  to use a  different editor,
          you may enter it's name here.

          [Prompt 5: Editor Location]
          This  prompt  asks  you to  enter  the  location of  the  above
          editor. The format is drive[:]/[Subdir]. So,  if the editor was
          located  on drive  C,  in  directory EDITOR,  you  would  enter
          C:\EDITOR at the prompt.

          [Prompt 6: Banner Message]
          This prompt allows  you to enter your own message which will be
          displayed in the Banner. It  may be up 43 characters long. IAMS
          will automatically center it from within the program.

          [Prompt 7: Blank]
          This choice  asks if  you'd like the  program to  automatically
          blank  the screen after three minutes. This option, when turned
          on, allows you to protect your monitor from screen burn in.















          Instant Access Menu System   Version 2.65   07/15/89   Page 15

          [Prompt 8: MiniLog]
          This  choice asks if you'd  like the Mini Log turned on. If so,
          it  will write  to a program  named MINILOG.TXT every  time you
          execute a program.

          [Prompt 9: AutoBoot]
          This  toggle determines  whether IAMS will be  run in Normal or
          AutoBoot   mode.  AutoBoot  is  discussed  in  full  detail  in
          Appendix B.

          NOTE : Prompts  seven and eight may  be toggled from within the
          menu program as well.

          [F4]  This options lets you configure the colors for MENUS.EXE,
          the actual menu program.  There are a lot of prompts here,  but
          they are  all very straight  forward. First, here is  a list of
          the keys that you can use :

          Right and  Left Arrow  Keys :  By hitting  the  right and  left
          arrow  keys, you can toggle  the colors used for the foreground
          characters.

          Up  and Down  Arrow Keys  : By  hitting the  up and  down arrow
          keys, you can toggle the colors used for the background.

          Return or  Enter : The  Enter key allows  you to "confirm"  the
          color you selected, and move on to the next prompt.

          ESCape : The ESC key will  allow you to abort  entering changes
          at any prompt.

          Now, for the prompts :

          Banner         [Words]: Type 1
          Banner        [Border]: Type 2
          Main Menu      [Words]: Type 1
          Main Menu     [Border]: Type 2
          Sub Menu       [Words]: Type 1
          Sub Menu      [Border]: Type 2
          Function Menu  [Words]: Type 1
          Function Menu [Border]: Type 2
          Status Line    [Words]: Type 1
          * All Menu Titles *   : Type 1
          Background color      : Type 1
          Background character  : Type 3

          Type 1 :  For these prompts,  you may use  both the  right/left
          and up  down  arrow keys.  For  these  prompts, the  right/left
          arrows change  the color  of the words  in the menu.  Also, the
          up/down arrows change the background color.
















          Instant Access Menu System   Version 2.65   07/15/89   Page 16

          Type 2  : For these  prompts, you  may only use  the right/left
          arrow keys.  These colors  change the  foreground color  of the
          lines  that make up the  menu. The background will  be the same
          color as you entered for the words of the same menu.

          Type  3 : For  this prompt, you  will need  to enter  a number.
          Your  choices are 176, 177,  178 or 32.  To see which each will
          look  like, you  can look at  the numbers below  the Background
          Color prompt.

          [ESC] Allows you to return to the Opening Screen.


                     * 2.9 - CONFIGURING AUTOEXECUTION *

          Selecting Function Key Six (F6)  from the opening screen allows
          you  to  configure the  AutoExecution function  of the  Instant
          Access Menu System.  This function is used to execute  programs
          unattended. You have several choices in this area:

          [A to J]
          Selecting  a letter  from A  to J  allows you to  configure the
          corresponding  program. When  you select one  of these options,
          you will be presented with six (6)  prompts  (you are  familiar
          with 4 of them already).

          [Prompt 1:Time]
          This prompt asks you to  enter the time you wish the program to
          execute.   The  time  should  be  entered  in  military  (24hr)
          fashion,  down to  the second.  For example,  8:00 am  would be
          entered  as  08:00:00.  Likewise,  8:34  pm  would  be  entered
          20:34:00.

          [Prompt 2:Date]
          The  second prompt asks you  to enter the data that you wish to
          execute  the  program.  Enter  the  data  in  the  fashion  of:
          zz/xx/yy.  July 1st, 1989 would  be entered as 07/15/89. If you
          wish  to have  the  program  execute everyday,  enter the  word
          "Everyday" (without the quotes) for the date.

          [Prompt 3:Description]
          This prompt asks you to enter a description for the selection.

          [Prompt 4:Path]
          This  prompt  asks you  to  enter the  path  (location) of  the
          program.  This  path  is  entered  in  the  same  was  as  when
          configuring a program: [Drive][:][/][Subdir].

          [Prompt 5:Name]
          This  prompt asks you  to enter  the name of  the program. This
          name is entered in the same  was as when configuring a program:
          FILENAME.EXT














          Instant Access Menu System   Version 2.65   07/15/89   Page 17

          [Prompt 6:Parameters]
          This  prompt asks you to  enter parameters for the program. For
          obvious  reasons, the menu program will ignore a selection of R
          (run time parameters) when executing the program.

          That's all there is to defining a program. It  looks like a lot
          of information,  but  it's really  pretty straightforward.  For
          obvious reasons, there is  NO validation (except  for time  and
          date) for these selections.

          [F1] Displays the Auto Execution Area help screen.

          [F2] Saves your changes to AUTORUN.MEN.

          [F3] This option allows you to import data from the Sub  Menu's
          you have previously  defined, and  then export  that data  into
          one  of the  choices A to J.  When you select  this option, you
          will be asked four questions.

          [Prompt 1: Submenu]
          This  prompt asks you to  enter the submenu from which you wish
          to import the data from. It must be in the range of A to T.

          [Prompt 2: Program]
          This prompt asks you to enter the program in  the above submenu
          from  which you  wish to import data  from. It also  must be in
          the  range  of  a  to  T.  After  answering  this  prompt,  the
          configuration program  will  show you  the data  that you  just
          imported.

          [Prompt 3: Export]
          This  prompt asks you to enter the selection you wish to export
          this data to. It must be in the range of A to J.

          [Prompt 4: Confirm]
          This prompt asks  you to confirm  that you wish  to export  the
          data  to the chosen selection.  Any data in that selection will
          be written over with the new information.

          [Esc] This command will return you to the opening screen.

                             * 2.99 - QUITTING *

          That's  all  there  is to  configuring  the  program.  From the
          Opening  Screen,  hit Esc,  and  you will  return  to DOS.  You
          should now check  the current  directory.   You   should   have
          the following programs there:

          MENUS   .EXE   <--- The actual menu program
          CONFIG  .EXE   <--- The configuration program
          CONVERT .EXE   <--- The file validation/conversion program
          TURBO   .EXE   <--- The Turbo Editor














          Instant Access Menu System   Version 2.65   07/15/89   Page 18

                       * 2.99 - QUITTING (continued) *

          NOTE    .EXE   <--- The NotePad
          NOTE    .HLP   <--- The help file for the note pad
          MANUAL  .TXT   <--- This file
          MENU    .BAT   <--- The batch file
          MENUS   .CFG   <--- The configuration data
          MAIN    .MEN   <--- The Main Menu descriptions
          PASS    .MEN   <--- The Password file
          SUBMENU .MEN   <--- The Sub Menu file
          MENUHELP.MEN   <---  The help file for the configuration/menu
                               program

                           * 3.0 - USING MENU.EXE *

          MENU.EXE  is the  actual  driver  for  the menu  program.  From
          within it you will select the programs you wish to run.

                            * 3.01 - RUNNING IT *

          To run the menu program, you need to type  MENU (the batch file
          created  with the  configuration program). This  file will take
          care of the rest.

                           * 3.02 - SELF CHECKING *

          When  you start  the program, Instant  Access will do  a search
          for all of the data  files that you have  just created. If they
          do not  exist, a listing of  the missing one(s)  will be shown,
          and the program will exit. If this happens, all  you have to do
          is  run  the  configuration  program,  which  will  create  the
          missing one(s).

                           * 3.1 - THE MAIN MENU *

          If  there are  no missing  files, the  program will  proceed as
          normal, and the main menu will be displayed.

          Now   the  description.   The  Main   Menu  will   contain  the
          descriptions that you  entered earlier. At this time, you  have
          many  different options.  However, we  will only  discuss those
          concerning  the Main  Menu, and Sub Menus.  The commands in the
          Functions Menu will be discussed later.

          [A to T]
          Choose the Sub Menu to be active.  After entering a letter from
          A  to T,   you will be presented with  a prompt for a password,
          if you defined one for that particular Sub Menu.


















          Instant Access Menu System   Version 2.65   07/15/89   Page 19

          [PgUp]
          Selecting  Page  Up (a  key  on your  keyboard)  will show  the
          titles  for Sub Menus A  to J. If those  are already displayed,
          nothing will happen.

          [PgDn]
          Selecting  Page Down  will display the  titles for Sub  Menus K
          through  T.  If  those  are  already  displayed,  nothing  will
          happen.

          Note: You do  not have to have the  Sub Menu in order to select
          it.  In  other  words,  if  the  titles  for  K through  T  are
          currently being displayed, you can still select  any of A to J.
          The  same is true  if A through J was  displayed. This was done
          so  that  a  user would  not  be  bombarded with  20  different
          selections (which may or may not be configured yet).

                             * 3.2 - PASSWORDS *

          A  small  box will  appear, and  will prompt  you with  "Please
          enter  password".   At that  time, you will  need to  enter the
          password  that you specified  in the configuration program. The
          cursor  will not move and  the characters will  no be echoed to
          the screen as you type them.  If you  enter the wrong password,
          you will  hear a loud  beep, and  then be returned to  the main
          menu. If you enter  the correct password, you will see the  Sub
          Menu overlay the Main Menu.

          If  you  did  not  define  a  password,  you  will  be  brought
          immediately to the sub menu.

                           * 3.3 - THE SUB MENUS *

          Now, you will  see the  descriptions of  the applications  that
          you entered in the configuration program. You  now have choices
          A through T. (You may  use PgUp and PgDn  to display the  other
          ten just like in the Main Menu).

          After selecting from A to T one of the following will happen:

          1. If you left the program name blank, nothing will happen.
          2. If  the path no  longer exists, "Bad  Command or File  Name"
          will be displayed on the screen.
          3.  If  you defined  the  wrong program  name,  it couldn't  be
          found,  or didn't  exist, "Bad  Command or  File Name"  will be
          displayed.
          4. The  program (or  any  program, even  if defined  correctly,
          will  not  run).   Consult appendix  B immediately  (it CAN  be
          corrected).

















          Instant Access Menu System   Version 2.65   07/15/89   Page 20

          Errors  occur very rarely, and most of the time everything will
          work  fine. Now,  when the program  finishes (or you  exit from
          it), you will return to the Main Menu.

          If you decide not to run any of the programs in that Sub  Menu,
          just  hit ESCape,  and you'll  find yourself  back at  the Main
          Menu.

                         * 3.4 - THE FUNCTION MENU *

          The commands in  the Function Menu are  only valid when you are
          in the Main Menu area. In other words,  if you have a Sub  Menu
          listed, you will not be able to execute any of the Functions.

               The Function Menu provides you with 10 options:

                         F1. Online Help
                         F2. Registration Information
                         F3. Note Pad
                         F4. Text Editor
                         F5. DOS Shell
                         F6. Configuration
                         F7. Toggle : AutoExecute
                         F8. Toggle : Screen Saver
                         F9. Toggle : Mini-Log
                        F10. Blank Screen Now

                         * 3.41 - FUNCTION CHOICES *

          [Choice  1  : Online  Help]  : The  Online  Help Function  will
          display  a  concise listing of the various commands  available,
          and what they do.

          [Choice  2  :  Registration  Information]  :  The  Registration
          Information is  kept online for  several reasons.  One of  them
          being,  that  some people  never  read the  documentation,  but
          prefer  to skip  right to the program.  Please remember that to
          continue  using this  program past the  30 day trial,  you must
          register  it. The cost for this program is around  a  fourth of
          what you would pay for a  commercial program that does the same
          thing!

          [Choice 3 : Note Pad] : The Note Pad provides a way for you  to
          leave reminders for yourself  or others, store  a phone  number
          list,  or whatever else you  could imagine. It contains a total
          of 30  lines (displayed  15  at  a time),  with a  width of  60
          characters.   And since it only modifies a file named Note.Pad,
          it is safe for anyone  to use.  Here is  a complete list of the
          available commands:

















          Instant Access Menu System   Version 2.65   07/15/89   Page 21

          Cursor Movement:
          <Ctrl>-T:  Move cursor to the top of the screen
          <Ctrl>-B:  Move cursor to the bottom of the screen
          <Ctrl>-Right Arrow:  Moves the cursor to  the beginning of  the
          next word.
          <Ctrl>-Left Arrow:  Moves the cursor to the previous word.
          Home: Moves the cursor to the beginning of the current line.
          End : Moves the cursor to the end of the current line.
          Tab : Moves cursor to the next tab stop.
          Shift Tab: Moves cursor to the previous tab stop.

          Page Movement:
          PgUp: move the text forward
          PgDn: move the text backward
          <Ctrl>-Home:  Moves the  cursor to the first  page of text, and
          places the cursor at the beginning of that line.
          <Ctrl>-End:   Moves the  cursor to  the last page  of text, and
          places the cursor at the beginning of that line.

          Block Commands:
          F4: Forms a paragraph from the lines marked as a block.
          F5: Marks the first line in the block.
          F6: Marks the last line in the block.
          F7: Moves the marked block to  the line where the cursor is
          positioned. Blocks can not be copied onto themselves.
          F8:  Copies the marked block to the line where the cursor is
          positioned. This command differs from F7 because the original
          block remains in place.
          F9: Deletes the block.
          F10:Unmarks a block.

          Editing Commands:
          F1: List Help. Hitting F1 again returns you to the note pad.
          F2: Returns you to the Main Menu.
          F3:  Erases all the text in the notepad. Requests confirmation
          first.
          Ins:  Toggle Insert/Overwrite  mode, and  changes the  shape of
          the cursor to indicate the mode.
          Del: Deletes the character under the cursor.
          Backspace: Deletes the character to the left of the cursor.
          Ctrl  D:  Deletes the  word on  which the  cursor is  presently
          located.
          Alt  D:    Deletes  the line  where  the  cursor  is  presently
          positioned.

          [Choice 4: The Text (Turbo) Editor]

          This  function  has been  modified  to allow  you  to run  your
          favorite  text editor.  Should it  happen to  be the  our Turbo
          Editor, please read on.
















          Instant Access Menu System   Version 2.65   07/15/89   Page 22

          As  we  developed the  notepad,  we realized  that  it had  one
          function. This function was  to leave notes, which all revolved
          around  the file  it creates  [note.pad]. There  was no  way to
          call  up  another  file.  We  also  noted  while  writing   the
          appendices  that we were  referring people to a commercial word
          processor.  To  eliminate that  need,  and to  further  enhance
          Instant Access functions, we added a text editor.

          Those  of you who are  familiar with WordStar, Sidekick, or any
          of  the Borland  programming environments will  be instantly at
          home in this  editor. For those of  you who aren't, we've tried
          to make it as painless as possible.

          With  all that in  mind, here is a listing  of the Turbo Editor
          commands.

          Basic Cursor Movement:
          . Ctrl-S/Left Arrow        Moves one character left
          . Ctrl-D/Right Arrow       Moves one character right
          . Ctrl-A/Ctrl-Left Arrow   Moves one word left
          . Ctrl-F/Ctrl-Right Arrow  Moves one word right
          . Ctrl-E/Up Arrow          Moves cursor up one line
          . Ctrl-X/Down Arrow        Moves cursor down one line
          . Ctrl-W                Scrolls screen up one line
          . Ctrl-Z                Scrolls screen down one line
          . Ctrl-R/PgUp        Scrolls screen and cursor up one page
          . Ctrl-C/PgDn        Scrolls screen and cursor down one page

          Quick Cursor Movement:
          . Ctrl-Q S/Home       Moves cursor to beginning of the line
          . Ctrl-Q D/End        Moves cursor to the end of the line
          . Ctrl-Q E            Moves cursor to the top of the screen
          . Ctrl-Q X            Moves cursor to the bottom of the screen
          . Ctrl-Q R/Ctrl-PgUp  Moves to the beginning of the file
          . Ctrl-Q C/Ctrl-PgDn  Moves to the end of the file
          . Ctrl-Q B            Moves cursor to the top of a block
          . Ctrl-Q K            Moves cursor to the bottom of a block
          . Ctrl-Q P            Moves cursor to its previous location

          Insert and Delete Commands:
          . Ctrl-V/Ins  Toggle between insert and overwrite mode
          . Ctrl-N      Inserts a line at the current cursor position
          . Ctrl-Y      Delete the line containing the cursor
          . Ctrl-Q Y    Delete from current position to end of line
          . Ctrl-H/Backspace  Delete to the left of the cursor
          . Ctrl-G/Del  Deletes character currently under the cursor
          . Ctrl-T      Deletes the word to the right of the cursor



















          Instant Access Menu System   Version 2.65   07/15/89   Page 23

          Block Commands:
          . Ctrl-K B/F7  Marks the starting location of a block
          . Ctrl-K K/F8  Marks the end of a block
          . Ctrl-K T     Marks a single word as a block
          .  Ctrl-K C     Copies a previously marked block to the current
                         cursor position
          . Ctrl-K Y     Deletes a previously marked block
          .  Ctrl-K  V       Moves  a  previously marked  block from  its
                         original   position   to  the   current   cursor
                         position
          .  Ctrl-K R        Reads a file  from disk,  inserts it  at the
                         present  cursor  position,  and marks  it  as  a
                         block
          . Ctrl-K W     Writes a previously marked block to a file
          . Ctrl-K P     Prints currently  marked block. If no block is
                         marked, it prints the entire file

          Miscellaneous Commands:
          . Ctrl-U     Aborts current operation [except loading a file]
          .  Ctrl-O I   Toggle autoindent on/off. This feature provides
                       automatic indenting of successive lines
          . Ctrl-Q F   Lets you search for a string of up to 30
                       characters
          . Ctrl-Q A   Searches and then replaces a string
          . Ctrl-L     Repeats the last search
          . Ctrl-Q N   Finds a set place marker
          . F1         Saves current file to disk
          . F2         Loads a new file
          . F3         Quits Editor, returns you to Instant Access
          . Ctrl-Q L   Restores line cursor is currently
          . Ctrl-K 0..Ctrl-K 3  Set marker #0 to #3
          . Ctrl-Q 0..Ctrl-Q 3  Jump to marker #0 to #3
          . Ctrl-I/Tab          Tabs over 8 spaces


          Search Options :
          B  -  Searches  backwards, from  the  current  cursor  position
          toward the beginning of the file.
          G - Search Globally search the entire file starting at the
          beginning,or backward if used with the B option.
          #[a  number] -  Searches for the  nth occurrence of  the search
          string.
          U - Ignore case and treat all characters as uppercase.
          W  - Search for whole words only; skip patterns embedded within
          other text.

          Replace Options:
          N  - Replace without asking. Otherwise, each replace will seek
          validation.

















          Instant Access Menu System   Version 2.65   07/15/89   Page 24

          To enter text, type as  though you were using  a typewriter. To
          end a line,  press the ENTER [or  RETURN] key. Turbo  Edit will
          let   you  type  over  200  characters  in  a  line,  but  only
          recognizes the first 149.

          [Choice 5  : DOS  Shell] :  This shell  provides you with  full
          access to  all of the DOS  commands. It is  just as  if you had
          no program  running at all.  However, if you  do a  CHKDSK, you
          may note that 4K of memory is missing.

          This memory is  being used by Instant  Access. You may use this
          shell  just as if it were the DOS prompt.  To return to Instant
          Access type EXIT and hit  return.  When you type EXIT, you will
          be returned to the Main Menu.

          [Choice  6  :  Configuration]  :  This  choice  allows  you  to
          configure  the   menu  program.  To   do  this   it  runs   the
          configuration program, CONFIG.EXE.

          [Choice  7: The Auto-Execution  Toggle] : This selection allows
          you to toggle whether Auto-Execution is turned on or off.

          [Choice 8 : Blank Toggle]  : This selection allows  you to turn
          the automatic screen blanking function on or off.

          [Choice 9 : Mini-Log]  : This selection allows you to turn  the
          Mini-Log function on or off.

          [Choice  10  :  Blank  Screen Now]  :  The  screen  will  blank
          approximately one  second after  you hit  this  key. It's  just
          like  the Auto  Blanking  feature,  except that  you  wait  one
          second instead of three minutes.


                         * 3.5 - ESCAPING (ESC key) *

          This  is  the exit  command. After  password verification,  you
          will be returned to DOS.


                            * 3.6 - A FINAL NOTE *

          Well,  that's all there  is to it. You  will probably find that
          it  takes a  little while  to get used  to a different  type of
          interface, but we believe it  to be a much more  understandable
          and productive  one.  If you  have any  questions or  comments,
          please feel free to drop us a line. Following  this are several
          appendices that cover a variety of topics.


















          Instant Access Menu System   Version 2.65   07/15/89   Page 25

            * 4.1 - APPENDIX A: USER SUPPORTED SOFTWARE CONCEPT *

          User   Supported  software  is  a  way  of  delivering  quality
          software  to a  user at a very  reasonable cost, while allowing
          the  user to  make sure the software  meets his/her needs. This
          concept is based on several ideals:

          The value and utility of software is best  assessed by the user
          on  his/her  own system.  Only after  using a  program can  one
          really  determine  whether  it  serves  personal  applications,
          needs and tastes.

          There  should  be a  way of  delivering low-cost,  high-quality
          software to the consumer.

          Copying of  programs  should  be encouraged,  not  discouraged.
          This  is the strength of User Supported software, and allows it
          to  spread  far  more  readily  then  software  distributed  by
          regular means.

          The  program carries  a notice suggesting  registration for the
          program.  You  should register  if  you are  going  to use  the
          program on a regular basis.

          Regardless of whether  you register  and use  the program,  you
          are  encouraged to  copy  and distribute  the  program  for the
          private, non-commercial trial use of others.

          User  Supported  software   is  generally  not  public   domain
          material;  most  programs  of this  nature  carry  a  copyright
          notice.  Rather, the  author has licensed  you to copy  and use
          the program under certain conditions.

          Likewise, User  Supported software is  not intended  to be free
          software;  The  user is  simply granted  a license  to try  the
          program for a period of time. The author hopes  that by cutting
          out the  overhead which makes  a commercial software package so
          expensive,  the  same program  can  be sold  for  a much  lower
          price.

          As  an experiment, User Supported software seems to be failing.
          The sad  truth is that  less then 1% of the  users of a product
          of  this  type  are registering.  Only  through  the  financial
          support  of  users  will  this  kind  of  inexpensive  software
          continue to be available.





















          Instant Access Menu System   Version 2.65   07/15/89   Page 26

                           * APPENDIX B: AutoBoot *

          Included with Instant Access Menu System  v2.65 is the AutoBoot
          feature.

          WHAT IS AUTOBOOT?

          In  the simplest  words, AutoBoot  is an  insurance  policy for
          your programs!

          HOW DO I USE IT?

          In the General Configuration area, there's a prompt that  asks:
          "Run IAMS  in AutoBoot Mode (Y/N)". If you enter  "Y", you will
          be in  AutoBoot mode.  If you enter  "N", you'll  be in  normal
          mode.

          WHAT EXACTLY DOES IT DO?

          AutoBoot  does one simple  thing. It automatically restarts any
          program  which  did  not  successfully  return  to  IAMS  after
          execution.

          HOW ABOUT AN EXAMPLE!

          Let's  say you you're using the Auto-Execution feature to set a
          backup program  at 1:00 am. You go off to sleep, expecting your
          files to  be backed  up when  you awake.  Half way through  the
          backup,  the power goes off.  Normally, the end result would be
          a disgruntled user with half a backup!

          As  soon as the  power is restored, IAMS  senses that a program
          was  not completed.  It  displays a  message, stating  that the
          program will  be automatically restarted  in ten  seconds. If a
          key  isn't hit,  the  program runs.  The  result?  A successful
          backup!


          NOTE: In order for  AutoBoot to work, you  must start IAMS from
          your  Autoexec.Bat file.  Also, you must be  sure not to answer
          YES  to  the  "pause after  execution"  prompt  during  program
          execution.  Aside from  those small prerequisites,  the rest is
          automatic!

          HOW CAN I TEST IT?

          First,  enter "Y"  for  running  IAMS in  AutoBoot mode.  Then,
          select a program  to execute. When  the program  starts, reboot
          your  computer. When IAMS comes  up, you'll have ten seconds to
          abort the AutoBoot. If you don't abort, the program will run!

	  IMPORTANT:  AutoBoot  will  not  function  properly  with BATCH 
	  files.  This is a DOS limitation.  Please use it ONLY for .EXE,
	  .COM and internal DOS commands.














          Instant Access Menu System   Version 2.65   07/15/89   Page 27

          * 4.2 - APPENDIX C: Trouble running programs or DOS Shell *

          During  testing, we attempted to  create every possible  error,
          and provide a solution for  it. If you have  been unable to run
          programs  (and you  know the drive, subdirectory,  and name are
          correct) or if you have been unable to use  the DOS shell, read
          on.

          To  run other  programs (and  create  the DOS  Shell),  Instant
          Access  makes a  call to DOS  for another copy  of COMMAND.COM.
          COMMAND.COM  is your  command interpreter.   For instance, when
          you  type DIR at the DOS prompt, COMMAND.COM intercepts it, and
          then lists the directory.

          The  reason  why  the  programs won't  run  is  because Instant
          Access  can't find  COMMAND.COM in your  PATH statement. Here's
          what to do:

          First,  go to your root  directory. To do  this, type "CD \" at
          the DOS  prompt. Now,  type "SET". You  will see  at least  two
          lines  appear. One of them  will be COMSPEC, and the other will
          be PATH.

          On most computers,  your COMSPEC will  look like the following:
          "COMSPEC=C:\COMMAND.COM".  If you  look  at  it carefully,  you
          will  see the  C:\ part of the  COMSPEC. That is  the part that
          must   be   in    your   path.   If   it   would   have    been
          "COMSPEC=C:\DOS\COMMAND.COM", the  C:\DOS would  have been  the
          important part. You must add that  part of the COMSPEC  to your
          path command.

          To  do  this,  type  "SET PATH=C:\",  or  which  ever  was  the
          important part of  the COMSPEC. Doing this  will fix it so that
          you can run all your programs.

          If your  path was already followed by a few   directories, just
          add  the important  part onto the end.  PLEASE consult your DOS
          manual or a friend on how the PATH command functions.

            * 4.3 - APPENDIX D: Instant Access and Autoexec.Bat *

          If you would  like Instant  Access to automatically start  when
          you  turn  your  computer  on,   add  the  following   to  your
          AUTOEXEC.BAT file after the PATH command:

          CD \SUBDIR
          MENU

          Where SUBDIR  is the subdirectory where  the files for  Instant
          Access   exists.  This  will   force  DOS  to  change  to  that
          directory, and then execute the MENU.BAT batch file.















          Instant Access Menu System   Version 2.65   07/15/89   Page 28

          * 4.4 - APPENDIX E: Programs that work with Instant Access *

          Through  all our testing, I  have yet to find  one program that
          won't  run directly  through Instant Access. Here  is a list of
          the  programs that  definitely will work. Remember,  this is by
          no  means a  complete  listing... after  all, nobody  could own
          every program!

          Turbo C 1.0/1.5/2.0           Lotus 1-2-3 2.01
          Turbo Pascal 3.0/4.0          Turbo Tax 5.01
          Microsoft Assembler 4.0/5.0   dBase III Plus 1.1
          WordPerfect 4.2/5.0           Timeline 1.1
          Vopt 2.12/2.2                 Desqview 1.03
          PCTools Deluxe 4.3/5.0        Harvard Business Graphics 2.1
          CatDisk 3.56                  Paradox 1.11/2.0/3.0
          Windows 1.03                  Dac Easy - Accounting 2.0
          Fastback 5.1                  The Word Processor 4.1
          Foxbase 1.0                   PFS First Publisher 1.01
          Transcopy 4.3                 Locksmith/PC 1.2
          Cruise Control 3.02           Typing Tutor 4.0
          Gramatika II 1.00a            Enable 1.5
          QDOS II 2.00                  Double DOS 4.0
          Telix 2.12/3.11               Procomm 2.4.2/Procomm Plus
          DirMagic                      Dynadiag 2.05
          Eureka 1.0                    Express
          SuperCalc                     WordStar 4.0/5.0
          Clipper                       PCPaint Brush
          PCPublisher                   Quicken



                * APPENDIX F: 4.5 - THE PROGRAMER'S MACHINES *

          Instant  Access was  written on a Compaq  Deskpro 286, with the
          following statistics:

          . 6 / 8 switchable speed [Instant Access was tested at both]
          . 512K extended cache memory [turned off and on for testing]
          . 30 meg hard drive
          . 1 1.2 meg floppy drive
          . Amdek 132 video graphics adapter
          . Amdek 732 monitor

          Programming was also done on a Compaq Portable III:

          . 8 / 12 switchable speed
          . 40 meg hard drive
          . 1 1.2 meg floppy drive
          . CGA card
          . Gas Plasma monitor
















          Instant Access Menu System   Version 2.65   07/15/89   Page 29

              * APPENDIX G: 4.6 - THANKS TO THOSE THAT HELPED *

          Although there  are  far  too  many  people  that  have  helped
          PRODIGY  Technologies develop  Instant Access, I  would like to
          take some time to point out a few:

          Bruce Bequette :  Not only for  his great  ideas, but also  for
          unselfishly providing his resources.

          Ivars  Bezdechi :  Love that green  man! A great  friend with a
          tremendous amount of talent.

          Mike  Daniels :  I've never met  Mike personally, but  he seems
          like  a top  notch person. I'd  LOVE to personally  take credit
          for the AutoBoot idea, but in reality, it was his brain child.

          Ben Debban  : A user I met  on a local  BBS. He has provided me
          with some of the most open  and valuable criticism. He's  now a
          shareware author himself!

          John  Dwulet  : For  being a  great friend,  providing tons  of
          encouragement, an excellent BBS, and, monetary incentive!

          Rick Fry   : Sharing his ideas on user interface, and setup
          procedures, as well as providing an excellent BBS.

          Dan Horn   :  A great BETA  tester and friend; and, he's now  a
          shareware author too!

          John Newlin : A great shareware author who has  gone out of his
          way for me several times.

          Bill P : Bill is  the SysOp of dBored,  an IAMS support  board.
          Aside  from running  a professional level board,  he has been a
          very supportive friend.

          Bob Rapp   : SysOp of the Anonymous BBS. I've spent many a late
          night  chatting with  him about IAMS. His  help has been beyond
          priceless!




















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1577

     Volume in drive A has no label
     Directory of A:\

    CONFIG   EXE     83570   7-18-89
    CONVERT  EXE     15668   7-18-89
    FEATURES TXT     12840   7-18-89
    FILE1577 TXT      3257  10-16-89   9:33p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       548  10-18-89  11:16a
    INFOFORM TXT      6666   7-18-89
    MANUAL   TXT     74367   7-18-89
    MENUHELP MEN      8668   7-18-89
    MENUS    EXE     46256   7-18-89
    NOTE     EXE     21418   7-18-89
    NOTE     HLP       866   7-18-89
    README   1ST      2311   7-18-89
    TURBO    EXE     22480   7-18-89
           14 file(s)     298953 bytes
                           16384 bytes free
