---
layout: page
title: "PC-SIG Diskette Library (Disk #2503)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2503/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2503"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2503.TXT

{% raw %}
```
Disk No: 2503                                                           
Disk Title: PC System Manager 2 of 2 (also #2502)                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC System Manager                                        
Author Version: 2.0                                                     
Author Registration: $19.95                                             
Special Requirements: Hard drive.                                       
                                                                        
PC SYSTEM MANAGER is a hard drive menu system which can make life easier
for any hard drive user.  No more typing of long DOS and program        
commands.  Just enter the command once in PC SYSTEM MANAGER and you now 
have access to that command with just the touch of a key!  Let PC SYSTEM
MANAGER remember when it's time to run your routine applications.  You  
can start up to 30 programs automatically based on time, date, day of   
week and day of month.  Use password protection at the menu and/or      
program level to help keep confidential files in the right hands.  The  
user id feature keeps track of who, when and what was done on your PC.  
Produces four tracking reports.  Features window screens, pop-up        
messages, and a screen blanking option to help keep your monitor free   
from screen burn.  Allows "reminder" notes regarding printer setup, disk
insertion, etc. to be displayed before a program starts.  Customized    
prompts for command line replaceable parameters may be created.  To get 
you started, a DOS menu is included with 16 useful commands.  PC SYSTEM 
MANAGER is loaded with options but is surprisingly easy to learn.       
There's no need to learn a sophisticated menu language.  The PC System  
Maintenance Manager walks you through adding, editing or deleting menu  
entries.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  PC-SIG Disk #2503  PC SYSTEM MANAGER  >>>>              ║
║                      Disk 2 of 2  (also #2502)                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation and installation instructions, type:        ║
║  COPY MANUAL.DOC PRN  (press Enter)                                     ║
║                                                                         ║
║                                                                         ║
║                                      Copyright 1990-1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
 
 
 
 
            P C     S Y S T E M     M A N A G E R
 
 
                    R E L E A S E    2.0
 
   S H A R E W A R E    E V A L U A T I O N    M A N U A L
 
 
 
                 (c) Copyright 1987, 1989
 
 
 
 
                         MORSOFT
                 9859 IH-10 West, 107/811
                 San Antonio, Texas 78230
                      (512) 692-9572

                   (C)  Copyright, 1989 MORSOFT
 
     S H A R E W A R E    L I C E N S E    S T A T E M E N T
 
This software is protected by United States Copyright Law and this
fully functional copy has been provided for your use to evaluate its
capabilities in regards to your needs. It may be freely copied,
distributed to others and posted on computer bulletin board systems as
desired  provided the program, documentation and the MORSOFT copyright
remain intact and accompany each copy distributed.  Distribution is
encouraged so that others may have the opportunity to evaluate the
system for their requirements.
 
This program is not "FREE" however and if you decide to continue the
use of it you are required to register with the MORSOFT company by
completing the SHAREWARE REGISTRATION AND ORDER FORM contained in this
manual and return to MORSOFT along with applicable payment.
 
When you do register the use of the program with MORSOFT you will
receive the following:
 
   -  The regular distribution copy of the program which will always
      be the latest version and  does not display the shareware notice
      screen.
 
   -  The complete printed user's guide.
 
   -  You will be entitled to no cost telephone support from MORSOFT
      in regards to the use and any problems encountered when running
      the program, and will be notified when new releases of the
      program become available.
 
   -  You will receive 1 free upgrade to the system as it becomes
      available.
 
Before completing the registration form however see the end of this
manual for information on the other programs available from MORSOFT.
 
             S H A R E W A R E     L I M I T E D    W A R R A N T Y
 
         THE PROGRAM(S) IS/ARE PROVIDED  "AS  IS"  WITHOUT WARRANTY OF
         ANY  KIND,  EITHER  EXPRESSED  OR IMPLIED, INCLUDING, BUT NOT
         LIMITED  TO  THE  IMPLIED  WARRANTIES OF MERCHANTABILITY  AND
         FITNESS  FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE
         QUALITY AND PERFORMANCE OF THE PROGRAM(S) IS WITH YOU. SHOULD
         THE PROGRAM(S) PROVE DEFECTIVE, YOU (AND NOT  MORSOFT  OR  AN
         AUTHORIZED  DEALER)  ASSUME  THE ENTIRE COST OF ALL NECESSARY
         SERVICING, REPAIR, OR CORRECTION.
 
                           M O R S O F T
                     9859 IH-10 WEST, 107/811
                     SAN ANTONIO, TEXAS  78230
                           (512) 692-9572

 MORSOFT - 9859 IH-10 West, 107/811 - San Antonio, TX 78230 - (512) 692-9572
-------------------------------------------------------------------------------
  S H A R E W A R E    R E G I S T R A T I O N   A N D   O R D E R   F O R M
 
NAME __________________________________________________________
 
ADDRESS _______________________________________________________
 
        _______________________________________________________
 
CITY _____________________   STATE ________________  ZIP CODE ________
 
MACHINE PROGRAM(S) WILL BE USED ON:  MAKE ___________  MODEL _________
 
  # DISKETTE DRIVES _______  # HARD DISKS ________  COLOR or MONOCHROME
 
HOW DID YOU OBTAIN THIS SHAREWARE COPY? __________________________________(PCSM)
--------------------------------------------------------------------------------
          P R O G R A M S    F O R    R E G I S T R A T I O N
 
Program Name             Quantity   *   Fee Each Copy    =    Total
------------------       --------       -------------        -------
 
PC SYSTEM MANAGER        ________           $19.95           ________
 
FILE PATCH               ________           $14.95           ________
 
MORSOFT CALCULATOR       ________           $14.95           ________
 
DIRECT MAINT             ________           $29.95           ________
 
                                 TOTAL REGISTRATION FEES   $__________
--------------------------------------------------------------------------------
     P R O G R A M S    F O R    S H A R E W A R E    C O P I E S
 
Program Name             Quantity   *   Fee Each Copy    =    Total
------------------       --------       -------------        -------
 
MORSOFT CALCULATOR       ________           $4.00            ________
 
DIRECT MAINT             ________           $4.00            ________
 
PC SYSTEM MANAGER        ________           $4.00            ________
 
FILE PATCH               ________           $4.00            ________
 
                             TOTAL FOR SHAREWARE COPIES    $___________
 
        TOTAL THIS ORDER (REGISTRATION & SHAREWARE FEES)   $___________
 
DISKETTE SIZE: ____ 5 1/4"  ___ 3 1/2"     PAYMENT OF $_____________ ENCLOSED
-----------------------------------------------------------------------------
 
VISA, MasterCard, COD register by calling toll free 1-800-662-0028.

             T A B L E    O F    C O N T E N T S
_____________________________________________________________
 
S E C T I O N                                         P A G E
 
 
INTRODUCTION .......................................     1
 
INSTALLATION PROCEDURES ............................     6
 
SHARING PC SYSTEM MANAGER ..........................    12
 
OPERATIONS:
 
      SYSTEM STARTUP ...............................    13
 
      SELECTING A MENU ENTRY .......................    13
 
      ERROR MESSAGES ...............................    15
 
PC SYSTEM MANAGER MAINTENANCE:
 
      GENERAL CONSIDERATIONS .......................    17
 
      PROGRAM DOS COMMAND FILES ....................    20
 
      PASSWORD PROTECTION ..........................    20
 
      USERID ENTRY .................................    22
 
      SYSTEM MODIFICATIONS:
 
          MAIN FUNCTION SELECTION ..................    23
 
          MENU SELECTION ...........................    23
 
          UPDATING PROGRAM ENTRIES:
 
              ADDITIONS ............................    24
 
              DELETIONS ............................    28
 
              CHANGES ..............................    29
 
          UPDATING MENU ENTRIES:
 
              ADDITIONS ............................    30
 
              DELETIONS ............................    31
 
              CHANGES ..............................    31
 
           UTILITIES:
 
               DISPLAY MENU ENTRIES ................    32
 

               CHANGE SYSTEM OPTIONS:
 
                   ALL SCREEN HEADING LINE .........    33
 
                   SCREEN SAVER TIME ...............    33
 
                   SYSTEM MASTER PASSWORD ..........    34
 
                   USERID ENTRY ON/OFF ............     34
 
                   SYSTEM MANAGER MENU COLORS ......    34
 
               PRINT ALL MENUS AND ENTRIES .........    35
 
TIME TRACKING:
 
      INTRODUCTION .................................    37
 
      USERID FILE MAINTENANCE:
 
           ADDING USERID'S .........................    39
 
           SCANNING THE FILE .......................    39
 
           CHANGING ENTRIES ........................    40
 
           DELETING ENTRIES ........................    40
 
           PRINTING ALL ENTRIES ....................    40
 
           USERID ENTRY AT THE SYSTEM MANAGER MENU .    40
 
      LOG FILE EDITING:
 
           DISPLAYING RECORDS ......................    41
 
           PRINTING RECORDS ........................    42
 
           EDITING RECORDS .........................    42
 
      LOG FILE REPORT PROCESSING ...................    43
 
      LOG FILE ARCHIVING ...........................    47
 
AUTOMATIC PROGRAM STARTING:
 
      INTRODUCTION .................................    48
 
      FILE MAINTENANCE:
 
           MAINTENANCE SCREEN ......................    49
 
           ADDING RECORDS ..........................    52
 
           SCANNING RECORDS ........................    52
 

           CHANGING RECORDS ........................    52
 
           DELETING RECORDS ........................    53
 
           PRINTING RECORDS ........................    53
 
TIPS AND TECHNIQUES ................................    54
 
DOS COMMANDS MENU ..................................    55
 
SPECIAL CONSIDERATIONS:
 
      BACKUPS ......................................    58
 
      SYSTEM FAILURE ...............................    58
 
      PC SYSTEM MANAGER FILES ......................    58
 
      FINDING THE SYSTEM MASTER PASSWORD ...........    60
 
MORE PROGRAMS FROM MORSOFT:
 
      DIRECT MAINT .................................    61
 
      MORSOFT CALCULATOR ...........................    65
 
      FILE PATCH ...................................    66

I N T R O D U C T I O N
____________________________________________________________
 
Organization and ease of use are the two most important
aspects of successful computer operation. No matter how
technologically advanced a machine may be or how
sophisticated the software used on it is if the person
trying to run the computer cannot operate it easily and
without necessarily having to be technically oriented, a
microcomputer can soon become a very expensive paper
weight. The current operating systems of PC's were
designed by technicians for technicians and for most
people just having to learn all of the DOS commands and the
internal structures of how to get a program or job running
becomes sometimes overwhelming and in many instances
extremely frustrating. In all cases having to repeatedly
enter the same commands or batch file names, none of
which have any type of meaning to the human mind except
as interpreted by technical expertise, causes one to
continually have user guides, manuals and scribbled notes
always beside the machine. PC SYSTEM MANAGER was designed
to overcome many of these problems and aid in the
productivity and enjoyment of using personal computers.
 
PC SYSTEM MANAGER is a full function, overall computing
system menu facility providing its users with ease of
access to all of the programs and jobs on his or her
machine. No longer does an individual have to remember or
continually look up and reenter DOS commands or batch file
names. They are entered once and one time only into PC
SYSTEM MANAGER and from then on the user simply selects a
corresponding entry from a menu. The name given to the
entry is decided on by the user and he or she may use the
terms and context meaningful to them, not DOS or even the
programs themselves. As an example for a word processing
program the entry name could be "WORD PROCESSER". This is
simple and easy to understand and is much more meaningful
"people wise" than a program acronym name such as WWPS.
 
The menu entry names may be up to 35 characters in length
and may contain any characters the user desires. Once the
entry is selected, PC SYSTEM MANAGER takes care of feeding
the required system commands to DOS to start the program
running. This is especially helpful for novice users and
saves even the experienced technician time and effort in
having to remember or look up what to enter.
 
For the computers that have many different programs or
jobs, and those that are used by more than one
individual, PC SYSTEM MANAGER's sub-menuing ability
provides a means to have several smaller menus with a few
related entries in each as opposed to one large one
requiring possibly several screen pages to view all of
its contents. Also each sub-menu may contain other
sub-menus as well as programs. There are no system
restrictions as to how deep a user wishes to make  a

                                        1 

sub-menuing structure other than that the total sum of
all programs and menus may not exceed 32,000. It is
not recommended however to go more than three levels
deep.
 
PLEASE NOTE: For sake of understanding and avoidance of
             repetition the terms "menu" and "sub-menu"
             will henceforth be used in this manual
             synonymously and refer to a group of
             selections each of which may be either
             another menu or a "job" or "program".  A
             "job" or "program" will refer to a menu
             selection that when chosen will cause
             one or more DOS commands or programs to
             be executed or run. A "menu entry" will
             refer to a menu selection which may be
             a menu, a job or a program.
 
PC SYSTEM MANAGER is started automatically whenever the
computer is powered on or rebooted and when a selected
program or job completes and returns to DOS. The menu
displayed will always be the one from which the last
selection was made. This avoids having to continually
traverse a sub-menuing structure when you wish to stay on a
particular menu for several selections.
 
You may at anytime however go out of PC SYSTEM MANAGER
and into straight DOS to operate the machine in a standard
manner. When finished by merely typing "EXIT" at the DOS
prompt PC SYSTEM MANAGER is reinvoked again. PC SYSTEM
MANAGER is not a "terminate and stay resident" type of
program and therefore does not "hang around" tying up
memory and possibly damaging system registers.
 
In those cases where a machine is used by multiple
individuals and it is desired to restrict each person's
access to certain jobs or programs PC SYSTEM MANAGER
provides passwording capability at both the menu and
program levels. Passwording may be invoked at both, one, or
none of these two levels. Once a password is entered it
stays in effect until the selection of a program or menu
requiring a different password is chosen or the user returns
to the main SYSTEM MANAGER menu.
 
For some programs or jobs it is helpful to have startup
instructions displayed before the job or program starts.
These instructions may include inserting a particular
diskette, loading the printer with a specific form, or
reminders on how to run the selected program. PC SYSTEM
MANAGER provides the ability to display up to 255 lines of
user written text whenever a program is selected from a menu.
This helps to eliminate having to refer to a manual or user's
guide whenever these types of jobs are run.
 
For those jobs or programs that require parameters to be
entered along with the DOS commands for startup, PC SYSTEM

                                        2 

MANAGER will automatically prompt you for up to 10
different values. The prompt names are determined by you
and may be up to 25 characters in length. For example if a
job requires a reporting month, year and percentage factor to
be entered when it is run you may enter into PC SYSTEM
MANAGER when the program is first set up for the prompts to
be:
              REPORTING MONTH:
               REPORTING YEAR:
            PERCENTAGE FACTOR:
 
When the corresponding entry from the menu is selected these
names will be displayed and you will be asked to enter the
required information. The data will then be passed to DOS
along with the startup commands in the same manner as
if they had been entered in the standard way on the DOS
command line. Each parameter may be up to 40 characters
in length and when the prompt names are entered into PC
SYSTEM MANAGER you may also state the maximum length of
the parameter data if less than 40. Also it may be stated
that the information entered may be alpha/numeric (any
characters) or numeric only (0 through 9, plus sign,
minus sign, decimal point, or a comma). When the data is
entered at run time it will be edited so as to meet this
criteria.
 
When selecting a job or program to be run from a menu you may
optionally elect to modify the DOS commands for the selection
for that run only. The DOS commands maintained in the master
file are not altered. This is helpful for one time runs and
ad hoc requirements.
 
When the computer is on but not in use a menu will normally
be displayed. This could cause problems of "screen burning"
if left in this state for an extended period of time. To
overcome this PC SYSTEM MANAGER provides a "screen saver"
option. You may set a number of minutes for PC SYSTEM MANAGER
to automatically blank the screen if there is no activity on
the machine. However rather than a completely blank screen
being displayed (this could cause one to be panic stricken
by walking in and think they are seeing a "dead" system) the
caption below is displayed:
 
    PRESS ANY KEY TO REDISPLAY THE CURRENT MENU
 
It will first appear on line 1 then after 5 seconds move to
line 2. After another 5 seconds to line 3, etc. When
line 23 is reached it will start back again at line 1.
 
All maintenance to the PC SYSTEM MANAGER is performed
through its own maintenance program, no other type of
programs or editors are required. As stated above program
and menu names may be up to 35 characters in length and as
descriptive as the user wishes. The maintenance program
editor allows up to 255 DOS commands to be entered for a
single entry and up to 255 lines of free form text for

                                        3 

startup instructions. The editor provides for both line
and character insertion and deletion, line scrolling and
paging, and copying existing ASCII batch or text files
thereby eliminating having to rekey commands and text when
first installing the system. If a color monitor is used
the colors for each menu or sub-menu may be selected and
each may be different or the same. The menu and
program naming and structuring as well as all of the DOS
commands, startup instruction text, and parameter prompt
information is controlled and maintanined by PC SYSTEM
MANAGER and stored in its own sub-directory. The user has
no requirement to know the names of or in any way other than
through the maintenace program, work with the files used
by the system. The maintenance program also provides the
ability to have hardcopy print out showing the names and
structures of all menus and program entries.
 
To maintain a history of computer usage PC SYSTEM MANAGER
records in its log file the amount of time spent running a
specific program or job. When a selection is made from a
menu an entry is recorded in the log as to the date and time
and the program chosen. When the program ends and the
machine returns to PC SYSTEM MANAGER the entry is updated
with the ending date and time. Also a user identification
("USERID") option is available for machines that are used by
multiple individuals and it is desired to identify who ran
the program or job. From the log file both detail and
summary reports may be run showing the usage times by day
and/or by user. This function is very useful in monitoring
the computer and provides the information necessary for tax
or multi-user billing purposes.
 
In addition PC SYSTEM MANAGER provides the ability to
automatically start programs based on a specific time and:
 
   - a specific date
   - a specific day of the month
   - a specific day of the week
   - the first, second, third or last occurence of a
     day of the week in a month (eg. the first Tuesday,
     the second Friday, the third Monday, the last
     Wednesday, etc.)
   - the first and third, or second and last occurence of
     a day of the week in a month (eg. the first and
     third Monday, second and last Friday, etc.)
   - every other occurence of a day of the week starting
     from either the first or second occurence within the
     year (eg. every other Tuesday starting with the first
     Tuesday in the year, every other Friday starting with
     the second Friday in the year, etc.)
 
The PC SYSTEM MANAGER is easily installed using its own
installation program. This program will ask you for all
variable information so as to customize the system to meet
your environment and then will create all necessary disk
directories and initial system files.

                                        4 

 
The minimum machine requirements for the use of PC SYSTEM
MANAGER are as follows:
 
   - A hard disk
   - 256k of memory
   - DOS 2.0 or above
   - Color or Monochrome monitor
   - 1 360k or compatible diskette drive for installation
   - A printer is optional
 
PC SYSTEM MANAGER has been tested and run successfully on
many different brands and types of microcomputers. The
system is fully IBM PC compatible and uses standard
programming languages and techniques. Unfortunately
some machines state they are PC compatible but may not be
completely. If you experience any problems in the
installation or usage of PC SYSTEM MANAGER call or write to
us right away. We will do everything reasonably possible
to insure the system will function correctly on your
machine.
 
                           MORSOFT
                   9859 IH-10 West, 107/811
                   San Antonio, Texas 78230
                       (512) 692-9572































                                        5 

I N S T A L L A T I O N     P R O C E D U R E S
_____________________________________________________________
 
If you have received PC SYSTEM MANAGER on two diskettes
be sure to make at least one copy of them before starting
the installation.  Regardless of how the system was
received the following information will need to be known
by the install program:
 
   - The drive assignment letter (C, D, etc.) of the hard
     disk you wish to use for the PC SYSTEM MANAGER files.
 
   - Whether or not you have an AUTOEXEC.BAT file and the
     disk drive it is on. During the install this file
     will be modified to contain the commands to start
     PC SYSTEM MANAGER when you power-on or reboot. If
     your machine does not have one it will be created
     for you. If you are not familiar with this file
     see your DOS manual for more information.
 
When you are ready for the install perform the following:
 
    1. If you have the system on two diskettes:
 
          o  Insert the distribution diskette number 1 in
             drive A: and type at the DOS prompt pressing enter
             after each line:
 
                 A:
                 CD \
                 INSTALL
 
             NOTE: THE PROGRAM WILL WRITE TO THIS DISKETTE SO
                   PLEASE DO NOT PUT A WRITE PROTECT TAB ON IT.
 
       If the system was downloaded from another computer:
 
          o You should have received two files: "PCSMINS1.xxx",
            and "PCSMINS2.xxx" (where "xxx" is the type of
            compression used, eg. "ARC", "PAK", etc.).
 
          o Unpack the files using the appropriate utility.
 
          o Create the directory "MSTMNUDR" on the hard disk
            you wish to use for PC SYSTEM MANAGER.  Eg. If you
            choose drive C: type at the DOS prompt:
 
               MD C:\MSTMNUDR
 
          o Copy all of the unpacked files to the MSTMNUDR
            directory.  For example if the files are on drive
            C: under directory "MYDIR" and the PC SYSTEM MANAGER
            is to be on drive C: then type at the DOS prompt:
 
               COPY  C:\MYDIR\*.*  C:\MSTMNUDR
 

                                        6 

          o Change the default disk and directory to that of
            MSTMNUDR and start the install program "MASTMN04.EXE".
            If for example MSTMNUDR is on drive C: then type at
            the DOS prompt:
 
               C:
               CD \MSTMNUDR
               MASTMN04
 
    2. The first screen displayed by the install program
       will reiterate what was discussed above about your
       understanding the system and knowing the required
       information. If you wish to cancel the install at
       this point, or at any time when the program is
       waiting for a response, press the "Esc" key.
 
    3. The next screen will ask for the drive assignment
       letter of the hard disk you wish to place the PC
       SYSTEM MANAGER files on. Press the appropriate
       key "C" through "Z" then press enter.
 
    4. Next you will be asked for the customized heading
       you wish to appear at the top of all the PC SYSTEM
       MANAGER screens. This may be your company name,
       your personal name or anything you wish up to 70
       characters in length. Type in what is desired and
       press enter. It will be centered automatically.
 
       What was entered will then appear at the top of the
       screen and you will be given the option to change it
       if desired. When complete press enter. Note that
       this heading may be changed at any time through the
       PC SYSTEM MANAGER maintenance program, you are not
       "locked in" to your decision here.
 
    5. Next if you have a color monitor you will be asked
       for the colors of the "SYSTEM MANAGER" menu which
       is the main menu for the system.
 
       On the screen will be displayed the standard 16
       colors along with an alpha character "A" through
       "P" above each and you will be asked to press the
       key of the letter for the color of the screen
       foreground. Press the appropriate key in either
       upper or lower case.
 
       Next you will be asked for the color of the menu
       background. Select the desired color and press the
       appropriate key. Note however the two colors may not
       be the same.
 
       After your choices have been entered the screen will
       clear and redisplay showing the colors selected. If
       you like what is shown press the enter key otherwise
       press "F1" to go back through the selection process.
       Note that if the colors chosen are very similiar the

                                        7 

       foreground and background may not be distinguishable.
 
       After the installation, you may change the colors at
       any time through the maintenance program.
 
    6. Next you will be asked for the number of minutes for
       the screen saver option (how many minutes the machine
       is to be at idle and displaying a menu before it is
       to be blanked out to avoid screen burning). Enter
       any number between 1 and 99 or if you do not wish to
       have this option functional press "F1".
 
       After the installation, you may change this number
       through the maintenance program at any time.
 
    7. Next the program will initialize the master file
       with the information you have provided (hard disk
       to use, screen colors, etc.).
 
       If you are installing with diskettes the file will
       be on the disk in drive A: so be sure it does not
       have a write protect tab on it.  Otherwise the
       file will be on the hard disk.
 
    8. The screen will clear and the following will be
       displayed:
 
 
        I HAVE THE STATEMENTS READY THAT WILL NEED TO BE
        ADDED AT THE END OF YOUR AUTOEXEC.BAT BATCH FILE
        TO INITIATE THE PC SYSTEM MANAGER WHEN YOU POWER
        UP OR REBOOT. IF YOU WANT ME TO ADD THEM TO THE
        FILE FOR YOU ENTER A 'Y' FOR YES OTHERWISE ENTER
        'N' FOR NO:  Y
 
        (IF YOU RESPOND WITH A 'Y' AND THE FILE EXISTS
        I'LL FIRST BACK IT UP TO AUTOEXEC.PSM. IF ONE
        DOES NOT EXIST I'LL CREATE IT.)
 
 
        PC SYSTEM MANAGER is started at power up or reboot
        time through the statements in your AUTOEXEC.BAT
        file. The program, based on the information you
        have provided it, has generated those statements
        for you. If you wish for the program to update the
        file for you enter a "Y". If you want to enter the
        statements yourself enter an "N".
 
        If you respond with a "Y" and you already have an
        AUTOEXEC.BAT file it will first be backed up to a
        file named AUTOEXEC.PSM before changing. If the
        AUTOEXEC.BAT file does not exist the program will
        create one.
 
        Regardless of the "Y" or "N" response given to the
        above prompt the program will next ask:

                                        8 

 
      DO YOU WANT ME TO PRINT THE STATEMENTS ON YOUR PRINTER?
      ENTER 'Y' FOR YES OR 'N' FOR NO: Y
 
        If you respond "Y" for yes the statements will be
        printed for your convenience. If you plan on
        updating the AUTOEXEC.BAT file yourself be sure to
        respond yes.
 
        If you responded yes to having the program update the
        AUTOEXEC.BAT file the program will next ask for the
        hard disk drive containing the file:
 
          ENTER THE LETTER OF THE DISK DRIVE THAT CONTAINS
          YOUR AUTOEXEC.BAT FILE:
 
        Enter the letter of the drive (C thru Z) as required.
 
        If you responded yes to having the statements printed
        the following message will be displayed:
 
           PLEASE READY YOUR PRINTER AND PRESS <enter>
 
        When all of the applicable prompts have been
        responded to the following will occur:
 
            - If the program is to update the AUTOEXEC.BAT
              file it will either backup the existing file
              to AUTOEXEC.PSM, if one exists, otherwise it
              it will create one with the first three
              statements being;
 
                    ECHO OFF
                    DATE
                    TIME
 
              And then the necessary statements for starting
              the PC SYSTEM MANAGER at power on reboot will
              will be written to the end of the file.
 
            - The AUTOEXEC.BAT statements will be printed on
              the printer if requested.
 
            - The statements will be displayed on the
              screen.
 
    9. After the above steps are completed press any key and
       the screen will clear then display the following:
 
       I AM NOW GOING TO COPY ALL OF THE PC SYSTEM MANAGER FILES
       TO YOUR HARD DISK AND COMPLETE THE INSTALLATION PROCESS
 
       PRESS ANY KEY WHEN READY
 
       At this point the install program itself is finished
       and if you are installing with files downloaded from

                                        9 

       another computer the installation process is complete.
       Press any key to exit the program and return to the
       DOS prompt.
 
       If you are installing using diskettes press any key
       and control will return to the INSTALL batch file to
       complete the process.  All of the files on installation
       disk #1 in drive A: will be copied to the hard disk.
       When complete the following message will be displayed:
 
            ----- REMOVE INSTALL DISK #1 AND INSERT -----
            ----- INSTALL DISK #2 AND PRESS ANY KEY -----
 
        Remove disk #1, insert disk #2 in drive A: and press
        any key. All of the files on disk #2 will then be
        copied to the hard disk.
 
        When all files on installation disk #2 have been
        copied the following message will be displayed:
 
          --------- PC SYSTEM MANAGER NOW INSTALLED ----------
          ----- REBOOT YOUR COMPUTER TO START THE SYSTEM -----
 
         At this point the installation process is complete.
 
   10. To start PC SYSTEM MANAGER reboot the computer by
       pressing and holding the "Alt" then the "Ctrl" then
       "Del" keys then release all three.
 
        Note: If you chose to manually update the
              AUTOEXEC.BAT file this will have to be
              performed before rebooting.
 
 
INSTALLATION VERIFICATION
_________________________
 
After the install and the machine is restarted the PC SYSTEM
MANAGER shareware notice screen should appear.  After reading
press any key and the "SYSTEM MANAGER" menu will be displayed
as shown below:
 
(THE SCREEN IS SHOWN IN THE REGISTERED COPY USER GUIDE)
 
The "DOS COMMANDS" selection is a pre-established menu for
your use in executing common DOS commands from a menu. It
was constructed using PC SYSTEM MANAGER and therefore may
be modified, or deleted, by you at your discretion. It was
designed to be a helpful addon and for more information
see the "DOS COMMANDS MENU" section later in this manual.
 
The "EXIT TO DOS" selection is for use in exiting from PC
SYSTEM MANAGER and operating the machine in the standard
DOS command prompt mode. If selected and when ready to
return to PC SYSTEM MANAGER simply type "EXIT" (upper or
lower case) at the DOS prompt.  This selection is "hard

                                        10 

coded" in the system and may not be changed or deleted.
 
The "PC SYSTEM MANAGER MAINTENANCE" selection is a menu
used for invoking the various programs for maintaining the
PC SYSTEM MANAGER. This entry is also hard coded in the
system and the menu colors may be changed but it may not
be deleted nor may the program entries on it be changed
or deleted.
 
To test the system perform the following:
 
   - Press the "A" key (upper or lower case). The DOS
     COMMANDS selection should highlight (reverse colors).
     Press enter and the DOS COMMANDS MENU should open and
     a full screen of entries displayed. Press the "Esc"
     key and the SYSTEM MANAGER menu should be redisplayed.
 
   - Press the "B" key (upper or lower case). The "EXIT TO
     DOS" entry should highlight then press enter. The
     screen should clear and the following displayed:
 
 
-- TO RETURN TO THE MASTER MENU TYPE 'EXIT' AT THE DOS PROMPT --
 
    (2 or 3 lines showing the version of DOS you are on)
 
 C>
     (the normal DOS prompt where "C" is the drive of your
      hard disk)
 
 
     At this point type "EXIT" (upper or lower case) and
     press enter. PC SYSTEM MANAGER should reload and the
     SYSTEM MANAGER menu displayed.
 
   - Press the "C" key (upper or lower case). The PC SYSTEM
     MANAGER MAINTENANCE selection should highlight. Press
     enter and the maintenance menu should open displaying
     the following selections:
 
        A. EDIT TIME TRACKING LOG FILE
 
        B. RUN TIME TRACKING LOG FILE REPORTS
 
        C. UPDATE AUTOMATICALLY STARTED JOBS
 
        D. UPDATE PC SYSTEM MANAGER
 
        E. UPDATE USERID FILE
 
 
If the above steps did not perform successfully go back
through the install procedure again taking careful note of
your responses. If the system still does not perform
correctly contact the MORSOFT company.


                                        11 

S H A R I N G   P C   S Y S T E M   M A N A G E R
_____________________________________________________________
 
 
As noted in the SHAREWARE LICENSE STATEMENT you are free
to distribute shareware copies of PC SYSTEM MANAGER with
your friends and associates and we ask that you do this
so that others may have the opportunity to evaluate the
system for their needs.
 
If you have the system on two diskettes and wish to upload
it to another computer perform the following:
 
   o Pack (archive) the files on disk number 1 to a file
     named "PCSMINS1.xxx" where "xxx" is the type of
     compression program used (eg. PCSMINS1.ARC).
 
   o Pack the files on disk number 2 to a file named
     named "PCSMINS2.xxx" where "xxx" is the type of
     compression program used.
 
   o Upload the two files and note for the desciption on the
     other computer that both files are required to install the
     system.
 
If you have downloaded the system from another computer
and wish to convert it to diskettes perform the following:
 
   o Copy all of the unpacked files from the downloaded
     file "PCSMINS1.xxx" (where "xxx" is the compression
     type used) to a diskette and label as install disk
     number 1.
 
   o Copy all of the unpacked files from the downloaded
     file "PCSMINS2.xxx" to a diskette and label as
     install disk number 2.
 
   o Distribute the diskettes as desired.
 
Once again thank you for your support and remember;
 
  "Shareware, Its A Good Idea, Pass It Around"















                                        12 

O P E R A T I O N S
_____________________________________________________________
 
SYSTEM STARTUP
______________
 
PC SYSTEM MANAGER is initiated automatically when the
computer is powered on or rebooted through the statements in
the AUTOEXEC.BAT file. It is restarted automatically when
a job or program selected from a menu ends. If an "EXIT TO
DOS" selection is performed from a menu type "EXIT" at the
DOS prompt to automatically return to PC SYSTEM MANAGER.
Other than noted above no action is required on your part to
activate the system.
 
 
SELECTING A MENU ENTRY
______________________
 
The following is a sample menu screen. The selections on it
are examples only, yours will vary according to what is
available on your machine.
 
(THE SCREEN IS SHOWN IN THE REGISTERED COPY USER GUIDE)
 
To select a job, program or sub-menu perform the following:
 
  o Press the key of the letter ("A" thru "N") of the
    selection desired. The selection will highlight
    (reverse colors). If an error is made simply press
    the letter of the correct choice and the error
    selection will return to normal color and the second
    choice will highlight.
 
  o Press enter.
 
  o If password protection is turned on and the selection
    requires a password you will be prompted for it. Enter
    as required (what is typed will not display on the
    screen) then press enter. If what was entered is
    incorrect you will be prompted again, reenter as
    required. The program will only allow three tries at
    the correct code. To cancel the selection press the
    "Esc" key. Note that the system master password may
    be used for any selection.
 
  o If the choice was a menu it will open and its entries
    will be displayed for selection in the same manner. To
    return to the previous menu press the "Esc" key.
 
  o If the choice was a job or program:
 
     - If there are startup instructions for the selection
       (see the PC SYSTEM MANAGER MAINTENANCE section later
       in the manual) they will be displayed. Press enter
       until all pages have been shown, or if there is more

                                        13 

       than one and you wish to skip the remaining press the
       "F1" key. If you wish to cancel running the program
       press the "Esc" key and the menu will redisplay.
 
     - If there are parameters for the selection (see the
       PC SYSTEM MANAGER MAINTENANCE section later in the
       manual) the prompts will display. Enter the
       information as required and press the "F1" key
       when complete. Use the left and right cursor
       movement arrow keys to move the cursor within a
       prompt line, the cursor down arrow or the enter
       key for the next prompt down (if more than one)
       or the up arrow to move to the previous prompt.
       Note that the length of the data for each prompt
       and its type, alpha-numeric (any characters) or
       numeric (0 thru 9, comma, decimal, minus sign), was
       determined when the menu selection was created in the
       PC SYSTEM MANAGER maintenance program. The
       information entered therefore will be edited to meet
       that criteria. To cancel running the program press
       the "Esc" key at any time.
 
     - The commands to run the job or program along with any
       parameters entered will then be passed to DOS to
       execute the job or program.
 
     - When the job or program ends PC SYSTEM MANAGER will
       restart automatically and display the same menu from
       which the selection was made.
 
  o If you are in a menu that has more than 14 selections
    use the "PgDn" and "PgUp" keys to page the choices.
 
  o If you choose a job or program that has startup
    instructions and you wish to bypass them press the "F3"
    key instead of enter after highlighting the selection.
 
  o In the event you wish to change the commands for a job
    or program before running it press the "F4" key instead
    of the enter key after highlighting the selection. The
    display of startup instructions and parameter prompts
    (if any) will perform the same as noted above however
    before running the program the commands will be
    displayed on the screen and they may be edited as
    required. Use the cursor arrows for up, down, left,
    and right cursor movement and line scrolling. Press the
    enter key to move the cursor to the next line down,
    "PgDn" and "PgUp" keys for line paging and "F1" to
    insert a line ahead of the one the cursor is on and
    "F2" to delete the line the cursor is on. The backspace
    key may also be used to backspace the cursor one
    position and blank the character at that location.
    When the commands have been modified press the "F10"
    key. If you wish to cancel running the job or program
    press the "Esc" key at any time. Note that the commands
    are changed for this run of the job or program only,

                                        14 

    those in the master file are not modified. Also if
    password protection is on the system master password
    must be entered when the selection is made and "F4"
    pressed.
 
  o If USERID entry is turned on (see the TIME TRACKING
    section for details) a valid USERID will be requested
    whenever an entry (menu or program) is selected from the
    SYSTEM MANAGER menu. Type the USERID as required and
    press enter. Press "Esc" to cancel the selection.
 
 
ERROR MESSAGES
______________
 
The following is a list of error messages that may be
displayed when selecting an entry from a menu.
 
    o CANNOT OPEN SYSTEM STARTUP INSTRUCTION FILE - IT HAS
      BEEN ERASED OR THERE IS A DISK MALFUNCTION.
 
      SEE THE PC SYSTEM MANAGER USER'S GUIDE FOR MORE
      INFORMATION. PRESS 'F1' TO TRY AGAIN, 'F2' TO CONTINUE
      WITH THE JOB OR 'F3' TO RETURN TO THE MENU.
 
      The file containing the startup instructions cannot be
      found. Either it has been erased through some means
      such as the DOS DEL command or there is a disk
      malfunction. If you press "F1" to try again and it
      works this is an indication of disk problems.
      Otherwise you will have to run the PC SYSTEM MANAGER
      maintenance program to readd the instructions. You
      will receive a similiar error here also but can
      ignore it and elect to recreate the file.
 
    o CANNOT OPEN THE PARAMETER PROMPT FILE - IT HAS BEEN
      ERASED OR THERE IS A DISK MALFUNCTION.
 
      SEE THE PC SYSTEM MANAGER USER'S GUIDE FOR MORE
      INFORMATION. PRESS 'F1' TO TRY AGAIN, 'F2' TO CONTINUE
      WITH THE JOB OR 'F3' TO RETURN TO THE MENU.
 
      The file containing the parameter prompts cannot be
      found. Either it has been erased through some means
      such as the DOS DEL command or there is a disk
      malfunction. If you press "F1" to try again and it
      works this is an indication of disk problems.
      Otherwise you will have to run the PC SYSTEM MANAGER
      maintenance program to readd the prompts. You
      will receive a similiar error here also but can
      ignore it and elect to recreate the file.
 
    o CANNOT OPEN DOS COMMANDS FILE FOR THIS SYSTEM - IT
      HAS BEEN ERASED OR THERE IS A DISK MALFUNCTION.
 
      SEE THE PC SYSTEM MANAGER USER'S GUIDE FOR MORE

                                        15 

      INFORMATION. PRESS 'F1' TO TRY AGAIN, 'F2' TO CONTINUE
      WITH THE JOB OR 'F3' TO RETURN TO THE MENU.
 
      The file containing the DOS commands cannot be
      found. Either it has been erased through some means
      such as the DOS DEL command or there is a disk
      malfunction. If you press "F1" to try again and it
      works this is an indication of disk problems.
      Otherwise you will have to run the PC SYSTEM MANAGER
      maintenance program to readd the commands. You
      will receive a similiar error here also but can
      ignore it and elect to recreate the file.













































                                        16 

P C   S Y S T E M   M A N A G E R   M A I N T E N A N C E
_____________________________________________________________
 
GENERAL CONSIDERATIONS
______________________
 
PC SYSTEM MANAGER is based on a structure of a main menu,
SYSTEM MANAGER, which may contain entries for the
execution of programs or jobs and/or menus each of which
may contain programs or jobs and/or menus. This provides
the ability to segregate similiar or related selections
into smaller, more easily used menus as opposed to
having one large multi-page one. This also facilitates
system security by being able to have one password for a
menu related to its several entries as opposed to having up
to as many passwords as the number of entries within the
system.
 
           PC SYSTEM MANAGER STRUCTURE
 
 
                 SYSTEM MANAGER
                     MENU
                      |
                      |
   ------------------------------------------
   |            |              |            |
 PROGRAM       MENU         PROGRAM        MENU
                |                           |
                |                           |
    --------------------                 ---------
    |       |          |                 |       |
 PROGRAM   MENU     PROGRAM           PROGRAM   MENU
            |                                    |
            |                                    |
    ---------------------                  -------------
    |         |         |                  |           |
 PROGRAM   PROGRAM   PROGRAM            PROGRAM     PROGRAM
 
 
The basic building blocks of the system therefore are the
SYSTEM MANAGER menu, menus, and programs (or jobs). For each
of these blocks there are certain attributes assigned to
provide uniqueness and functionality.
 
The SYSTEM MANAGER menu is hard-coded as part of the system
and cannot be deleted. As part of it are the two entries
"EXIT TO DOS" and "PC SYSTEM MANAGER MAINTENANCE" and neither
of these may be deleted. The SYSTEM MANAGER menu may be
modified however in the following ways:
 
    o Programs may be assigned to or deleted from it.
 
    o Menus may be assigned to or deleted from it.
 
    o For machines that have a color monitor the menu's

                                        17 

      colors may be changed.
 
    o The password for the menu, if password protection
      is turned on, is the system master password.
 
The PC SYSTEM MANAGER MAINTENANCE menu may be modified as
follows:
 
    o The program entries EDIT TIME TRACKING LOG FILE,
      RUN TIME TRACKING LOG FILE REPORTS, UPDATE
      AUTOMATICALLY STARTED JOBS, UPDATE PC SYSTEM
      MANAGER, and UPDATE USERID FILE may not be
      changed or deleted.
 
    o Programs may be assigned to or deleted from it.
 
    o Menus may be assigned to or deleted from it.
 
    o For machines that have a color monitor the menu's
      colors may be changed.
 
    o The password for the menu, if password protection
      is turned on, is the system master password.
 
Other than noted above for the two system menus, menus are
created, modified and deleted by you as desired and may be
assigned the following attributes:
 
    o Each menu is assigned a name up to 35 positions
      in length and may contain any characters (above
      ASCII value 31). The name however must be unique
      within the menu it is an entry of but the same
      name may be used in other menus within the system.
      The name should be as descriptive as possible and
      though not required by the system, using the word
      "MENU" within the text is advisable (eg. WORD
      PROCESSING MENU).
 
      Note also that the selections on a menu are displayed
      in ascending order and in the ASCII collating sequence
      lower case letters come after upper case. It is
      therefore advised that for readability at least the
      first character of the name should be in upper case.
 
    o If password protection is turned on a password may be
      assigned to the menu.
 
    o If a color monitor is used the colors for the menu
      may be selected.
 
Programs represent programs or jobs that may be run on the
computer and they may be created, modified or deleted by you
as desired. The attributes that may be assigned to a program
entry are as follows:
 
    o Each program entry is assigned a name up to 35

                                        18 

      positions in length and any characters (above ASCII
      31) may be used. The name should be as descriptive
      as possible but must be unique within the menu it is
      part of. The same name however may be used on other
      menus in the system. Also as with menu names at least
      the first character should be upper case for
      readability when the menu is displayed.
 
    o If password protection is turned on a password may be
      assigned.
 
    o Up to 255 lines of DOS commands, each up to 75
      characters in length, may be associated with  a
      program. Each program entry must have at least one
      command.
 
    o Up to 255 lines of free form text, each up to 75
      characters in length, may be assigned to a program
      for startup instructions. This is an option however
      and is not required.
 
    o Up to 10 parameter prompts may be assigned to a
      program. Each prompt has associated with it a name
      which may be up to 25 positions in length and may
      contain any characters. A designation for data type,
      alpha/numeric (any characters) or numeric (0 thru
      9, plus sign, minus sign, comma, or decimal point).
      The length for each parameter may be set up to a
      maximum of 40. And a default value may be assigned
      for the parameter.
 
The PC SYSTEM MANAGER maintenance program has four basic
functions:
 
    o Adding, changing and deleting menus.
    o Adding, changing and deleting programs.
    o Changing the system options of turning on password
      protection by assigning a master password, changing
      the screen saver time, modifying the customized line
      1 for all screens, changing the colors for the SYSTEM
      MANAGER menu and turning USERID entry on and off.
    o Displaying the contents of a menu on the screen or
      printing a list of all menus and programs.
 
When performing maintenance on a menu or program the
appropriate menu/sub-menu structure must be traversed to
point to the menu the entry is to be added to or, for changes
or deletions, the one it already exists on. Once this has
been performed, then for adds the required attributes for the
new menu or program may be established.
 
For changes and deletions a second process is performed to
select the menu or program to be modified or erased. When
this has been done the changes or deletions may then occur.
 
When modifying the system options selections are made as to

                                        19 

which option is to be changed and then the new values are
entered.
 
When displaying on the screen the entries and sub-menus
for a menu the menu/sub-menu structure is traversed in much
the same manner as above.
 
When printing a list of all menus and entries only a
selection from the main function screen is required.
 
Complete detailed instructions on these processes are
presented in the appropriate sections below. The above
information is presented here as an aid in better
understanding the functions of the system.
 
 
PROGRAM DOS COMMAND FILES
_________________________
 
Each program will have associated with it one or more DOS
commands and optionally startup instructions and/or
parameter prompts. The data on these are retained in
individual files maintained by PC SYSTEM MANAGER. Each file
will be assigned a name in the format "MMFxxxxx.BCH" for the
DOS commands, "MMFxxxxx.INS" for startup instructions and
"MMFxxxxx.PRM" for parameter prompts where the "xxxxx" will
be a number from 4 to 32000 and will be the same in each file
for a particular program (eg. MMF00032.BCH, MMF00032.INS, and
MMF00032.PRM). At the end of the process when a new program
is added, the "MMFxxxxx" name will be displayed for future
reference and wil be termed the "DOS COMMAND FILE".
 
Also this name will be shown for each program when the
contents of a menu is displayed in the maintenance program
and when all of the menu and program names are listed on the
printer. This name is significant in that as a function of
the maintenance program DOS commands, startup instructions
and parameter prompts may be copied from existing programs to
new ones or to ones being modified. This can save time and is
especially helpful when first setting up the system. Full
details on this are provided in the appropriate sections below.
 
 
PASSWORD PROTECTION
___________________
 
For systems that are used by multiple individuals the
problem of program and data security may sometimes become
an issue. The password protection feature of PC SYSTEM
MANAGER was designed to help overcome these problems and the
following rules apply:
 
    o One password entered within system maintenance is
      designated as the system master password. This
      password may be used at any time for any menu
      selection and should be known by the "system

                                        20 

      administrator" only.
 
    o A password may be assigned to any menu or program.
 
    o If a password has been assigned to a menu selection
      that password (or the system master) must be entered
      to execute that selection (menu, job or program).
 
    o If a password has not been assigned to a menu
      selection then none is required to execute the
      selection regardless of whether or not password
      protection has been turned on for the system or not.
 
    o If a password has been assigned to a menu it is not
      required to assign passwords to the entries on that
      menu unless desired to do so. Since the menu is
      protected the entries are therefore automatically
      protected also. If a password is assigned to an entry
      on a protected menu the password must be different
      than that of the menu to be effective.
 
    o When a password has been entered it will remain in
      effect for all subsequent menu selections, one does
      not have to be entered until a selection has been made
      requiring a different password. This applies even
      after a program or job has finished execution and the
      menu is redisplayed. To reset the password the system
      must be returned to the SYSTEM MANAGER menu or the
      computer rebooted.
 
      For security purposes therefore a protected menu
      should not be left displayed on the screen, always
      return to the SYSTEM MANAGER before leaving the
      computer.
 
    o The following will ALWAYS require entering the
      system master password:
 
       - The "EXIT TO DOS" and "PC SYSTEM MANAGER
         MAINTENANCE" selections on the SYSTEM MANAGER menu.
 
       - If the "F4" key (change DOS commands) is pressed
         when selecting a program from any menu.
 
    o Security considerations.
 
         - If an "EXIT TO DOS" entry is created for a menu
           and the user is able to select this entry all
           security has been bypassed as they now have
           complete access to anything and everything on the
           computer. This type of entry should not normally
           be placed on a menu therefore except for
           individuals that are designated to have these
           permissions. If it is used password both the menu
           and the "EXIT TO DOS" entry with two different
           passwords.

                                        21 

 
         - If a user has access to a program that may
           create, modify or delete files (word processors,
           text editors, the DOS EDLIN program, etc.) and
           they are able to specify the complete path of the
           file to be edited they will have the ability to
           modify the AUTOEXEC.BAT file and remove the
           statements used to start PC SYSTEM MANAGER. The
           user then merely has to reboot the computer and
           they will now have access to all files and
           programs through DOS. The security in these
           instances will then lie in the hands of the user
           and it will be up to them not to perform these
           types of actions.
 
         - If the user has access to a DOS system diskette
           they can reboot the machine using this diskette,
           bypass the startup of PC SYSTEM MANAGER and
           bypass all security. Do not leave DOS diskettes
           lying around where the users have access to them.
 
         - On microcomputers as well as large mainframes
           ultimately the question of security lies with
           the user. Inform them of the possible
           consequences of security breeches (lost or
           corrupted data or programs, loss of time and
           money, etc.) and encourage a sense of protecting
           both their computer resources and that of others.
 
 
USERID ENTRY
____________
 
A powerful feature of PC SYSTEM MANAGER is the retention
of computer usage data in the time tracking log file.
 
This information is valuable in keeping records that may be
used for tax purposes or multi-user computer billing. As
part of the data that is retained a 7 character "USERID" is
associated with each log file record to distinquish which
individual ran a particular program. The PC SYSTEM MANAGER
MAINTENANCE program is used to turn USERID entry on or off.
For full details on the USERID option see the TIME TRACKING
section later in this manual.













                                        22 

S Y S T E M    M O D I F I C A T I O N S
_____________________________________________________________
 
MAIN FUNCTION SELECTION
_______________________
 
To start the maintenance program select the "PC SYSTEM
MANAGER MAINTENANCE" menu from the SYSTEM MANAGER menu then
select the "UPDATE PC SYSTEM MANAGER" program entry.
 
(THE MAIN FUNCTION SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
When the PC SYSTEM MANAGER maintenance program starts the
main function selection screen shown above will be displayed.
From this designate what type of processing is to be
performed:
 
      o Press the "F1" key to add a new program.
 
      o Press the "F2" key to delete an existing program.
 
      o Press the "F3" key to change an existing program.
 
      o Press the "F4" key to add a new menu.
 
      o Press the "F5" key to delete an existing menu.
 
      o Press the "F6" key to change an existing menu.
 
         NOTE: On systems with a monochrome monitor and if
               password protection is not turned on the "F6"
               option will not be available and will not
               appear on the screen.
 
      o Press the "F7" key to display the entries for a
        menu on the screen.
 
      o Press the "F8" key to change the system options.
 
      o Press the "F9" key to print a listing of all menus.
 
      o Press the "Esc" key to exit the maintenance program.
 
 
MENU SELECTION
______________
 
For those types of processing that require traversing
the PC SYSTEM MANAGER menu/sub-menu structure (adding,
changing, deleting programs or menus, or displaying menu
contents) the next screen displayed after the main function
will be for menu selection.
 
(THE MENU SELECTION SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
Using the cursor movement up and down arrow keys highlight

                                        23 

the menu desired and press the enter key to select the
highlighted menu for processing (eg. add a program to the
one highlighted) or press the "F1" key to "open" the
highlighted menu and display the menus on it. If the list
of menus to be displayed exceeds 9 use the "PgDn" and "PgUp
keys to page the names.
 
If you have gone down through a menu structure and wish to
move back up press the "Esc" key or if the "SYSTEM MANAGER"
menu is shown as the "CURRENT MENU" pressing "Esc" will
move the program back to the main function selection screen.
 
 
UPDATING PROGRAM ENTRIES
________________________
 
ADDITIONS
 
To add a program entry to a menu press the "F1" key at the
main function selection screen then go through the
selection process to point to the desired menu.
 
NOTE: At any time during the following process press the
      "Esc" key to cancel the add and return to the menu
      selection screen.
 
The first screen within the process will ask for the entry
name. It may be up to 35 characters in length and
contain any characters. It is recommended that at least
the first character be capitalized and the name be as
descriptive as possible of the job or program the entry will
represent. The name must be unique within the list of
entries within the menu being added to otherwise an error
message will be displayed and the name must be reentered.
After the name has been typed in press the enter key.  A
prompt will be displayed asking if the name is correct
and if not to reenter it otherwise to press enter.
 
If an "EXIT TO DOS" entry is to be added enter "DOS" or "dos"
for the name. The system will generate all required
information for this type of entry with the exception of
a password. The prompts for DOS commands, startup
instructions and parameter prompts will not appear.
 
If password protection is turned on the next prompt will be
for a password. Enter any characters desired but remember
EXACTLY what is entered here will have to be entered when
the entry is selected to be run from a menu. Type in the
data (or leave blank if a passsword is not desired) and
press enter. You will be prompted to press enter again if the
password is correct otherwise to reenter it. If password
protection is not on this prompt will not be displayed.
 
(THE DOS COMMANDS EDIT SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The next screen, as shown above, will be for entering the

                                        24 

DOS commands for starting and running this job or program.
You may enter up to 255 commands each up to 75 characters
in length. Type in here what you would normally enter at
the DOS prompt with one command per line. You will be
creating a "BATCH" file and therefore may enter and make use
of any of the standard DOS BATCH commands (see you DOS
manual for further information on BATCH files).
 
The line numbers will appear on the left side of the
screen and the active editing keys are as follows:
 
   o Move the cursor from left to right on a line using
     the left and right cursor movement arrow keys.
 
   o Move the cursor up one line by using the up arrow key.
     If the cursor is located on the top line of the
     screen it will scroll one line down. If however
     the top line is also line one of the commands the
     screen will page displaying lines 246 thru 255.
 
   o Move the cursor down one line by using the down arrow
     key or pressing enter. If the cursor is on the last
     line the screen will scroll one line up. If however
     the bottom line is 255 the screen will page and
     display lines 1 thru 10.
 
   o Page the lines (10 at a time) using the "PgDn" and
     "PgUp" keys.
 
   o To insert characters on a line press the "Ins" key,
     the characters "INS" will appear in the bottom right
     hand corner of the screen. To turn character insertion
     off press "Ins" again. If an insertion would cause the
     last character on the line to exceed position 75 or the
     line is blank the machine will beep and the insertion
     will not be performed.
 
   o To delete a character press the "Del" key.
 
   o To insert a line ahead of the line the cursor is on
     press the "F1" key.
 
   o To delete the line the cursor is on press "F2".
 
   o To move the cursor left one position and delete the
     character at that location press the backspace key.
 
If an ASCII or SYSTEM MANAGER file already exists that
contains all or most of the data for this entry you may copy
this file by pressing "F6". A prompt will be displayed to
enter either the full path of the ASCII file and press "F2"
or the name of the SYSTEM MANAGER file (see the PROGRAM
DOS COMMAND FILES section above) and press "F1". For an
ASCII file be sure to include the disk assignment
and all directories (eg. C:\DIRECT1\MYFILE). If you
decide not to copy the file press "Esc" to cancel and return

                                        25 

to the normal edit screen. If the named file cannot be
found an error message will be displayed with the option
to; press "F1" to try again, "F2" to reenter the name, or
"F3" to cancel the copy. If the copy is successful the
contents of the named file will be loaded into the editor
and may be changed as required. If you would prefer to use
already existing BATCH files, or the 255 line 75 characters
per line editor limitation would hinder entering the com-
mands, simply enter the required data to set a default
disk drive and/or path and then the name of the file. When
this entry is run PC SYSTEM MANAGER will then pass this name
to DOS in the same manner as you would enter it at a DOS
prompt. It is recommended however that you let the SYSTEM
MANAGER take care of the commands as it will in the long
run be easier for you to manage and organize them.
 
If parameters will be used when this entry is run be sure
to enter the replaceable parameters as you would in a normal
batch job. For example if two parameters are to appear on
the line with the name of the program you might code the
commands as follows:
 
       C:
       CD \MYDIR
       MYPROG %1 %2
 
       where "C:" sets the default drive, "CD \MYDIR" sets
       the default directory, "MYPROG" being the name of
       the program and "%1 %2" would be replaced by the
       two parameters entered at run time. See the DOS
       manual for information on BATCH files and replaceable
       parameters.
 
When all of the information is complete press "F10" to
save the data.
 
The screen will then clear and the editor displayed again
for entering any startup instructions. These will be free
form text, up to 255 lines and up to 75 characters per line.
Enter anything here you wish to be displayed when this
entry is selected; inserting diskettes, printer setup,
reminders about running a program, etc. The editing keys
and the ability to copy an existing text file are the
same as described above for entering DOS commands. When
complete press "F10" to save the data, or if you do
not wish to enter any press "F5" to bypass this option.
 
(THE PARAMETER PROMPT SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The next screen displayed (see above) will be for up to
10 optional parameter prompts. If any data is entered
here, when the program is selected to be run, the operator
will be asked to enter the parameter data. If you wish to
skip this option press "F5".
 
For each parameter the following information is to be

                                        26 

entered:
 
    o Prompt name. This may be up to 25 positions in
      length and any characters may be used. What is
      entered here is what will be displayed when the
      program is selected to be run from a menu. For
      example if a report month is to be entered the name
      could be "REPORTING MONTH". Be as descriptive as
      possible. Note that when the name is displayed
      when the program is run it will automatically be
      right justified so all of the names will be aligned.
      Eg. if "REPORTING MONTH " and
      "REPORTING YEAR " are entered here they will
      appear on the parameter prompt screen at run time as;
 
                 REPORTING MONTH:
                  REPORTING YEAR:
 
    o Under the heading "A/N" the type of data for
      the parameter. Enter an "A" if the type is alpha/
      numeric (any characters) or an "N" if numeric only
      (0 thru 9, plus sign, minus sign, comma, or
      decimal point).
 
      When the information is entered at run time it will
      be edited by what is stated here and non-numeric
      data will be rejected and have to be reenterd for
      numerically defined parameters. The default for this
      as shown on the screen is alpha/numeric.
 
    o Under the heading "LG" enter the maximum length of the
      parameter data, up to 40 characters. When the data is
      is entered at run time it will be limited to this
      number.
 
    o Under the heading "DEFAULT VALUE" you may enter a
      value that will be used for the parameter if nothing
      is entered at run time. If an entry is made here it
      will be displayed next to the prompt name at the
      parameter screen when the program is selected to be
      run from a menu. This field is optional and any
      information entered here WILL NOT be edited for
      data type (alpha/numeric or numeric only) or for
      length.
 
    o The active edit keys for cursor movement are as
       follows:
 
       - The left and right arrow keys for moving within a
         field and from field to field.
       - The up and down arrow keys for line to line.
       - The tab key, upper or lower case, for skipping
         fields.
       - The enter key to skip to the next field.
 
    o Do not skip lines between parameter names, they must

                                        27 

      be contiguous.
 
An already existing PC SYSTEM MANAGER parameter prompt file
may be copied by pressing "F6". A prompt will appear
asking for the file name (see the PROGRAM DOS COMMAND FILES
section above). Type in the name and press enter or "Esc"
to cancel the copy. If enter is pressed the data from the
file will be copied into the editor and displayed on the
screen. Any changes may then be made. If the file name is
incorrect an error message will be displayed with the
option of; pressing "F1" to try again, "F2" to reenter the
name or "Esc" to cancel the copy. When all of the information
is complete press "F10" and the data will be saved.
 
After all of the information for the entry has been
entered a message screen will be displayed stating that the
entry has been added, the name of the SYSTEM MANAGER DOS
commands file, whether or not startup instructions and
parameter prompts were added and the following options
for exiting:
 
   o Press the "F1" key to add another program to this menu.
 
   o Press the "F2" key to return to the menu selection.
 
   o Press the "F3" key to return to the main function
     selection screen.
 
   o Press the "F4" key to exit the maintenance program.
 
 
DELETIONS
 
To delete a program entry press the "F2" key at the main
function selection screen then go through the menu selection
process to point to the appropriate menu.
 
(THE PROGRAM SELECTION SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The next screen displayed (see above) will be for
selecting the entry to be deleted. Using the up and down
arrow keys highlight the entry name and then press the enter
key. A verify prompt will be displayed at the top of the
screen asking if you are sure you wish to delete the
entry. If yes press the "Y" key (upper or lower case). If
not press the "N" key (upper or lower case) or press enter
as "N" is the default. If a yes response was given the
entry and all associated DOS commands, startup instructions
and parameter prompt data will be deleted. A prompt
that the entry has been deleted and to press any key to
continue will be then be displayed. Press any key and the
now remaining entries will be redisplayed and the deletion
process may be repeated. To exit from this procedure and
return to the menu selection press the "Esc" key. If
the menu contains more than 9 entries the "PgUp" and "PgDn"
key may be used to page the names.

                                        28 

 
 
CHANGES
 
To change a program press the "F3" key at the main function
selection screen then go through the menu selection process.
The next screen displayed will be for selecting the program
to be changed. Using the up and down arrow keys highlight
the program name and then press enter.
 
(THE PROGRAM CHANGE SELECTION SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The program modification process selection screen (see above)
will be displayed and press the "Fx" key of the process
desired.
 
Change DOS Commands.
 
  To change the DOS commands for the program press the "F1"
  key. The commands will be loaded into the editor and any
  modifications may be performed. See UPDATING PROGRAM
  ENTRIES, ADDITIONS above for details on the active keys for
  the editor. When complete press "F10" to save the changes.
  If no changes are to be made, or to cancel any that have
  been entered, press the "Esc" key.
 
Change (Add) Startup Instructions.
 
  To change (or add) the startup instructions press "F2".
  The instructions will be loaded into the editor and the
  modifications may be performed. If there are no
  instructions for the program they may be created here. See
  UPDATING PROGRAM ENTRIES, ADDITIONS above for details on
  the active keys for the editor. When complete press "F10"
  to save the changes (or additions). If no changes are to
  be made, or those entered are to be cancelled press "Esc".
 
Change (Add) Parameter Prompts.
 
  To change (or add) the parameter prompts press "F3". The
  prompts will be loaded into the editor and the
  modifications may be performed. If there are no prompts
  for the program they may be created here. See UPDATING
  PROGRAM ENTRIES, ADDITIONS above for details on the active
  keys for the editor. Press "F10" to save the changes (or
  additions). If no changes are to be made, or those entered
  are to be cancelled, press the "Esc" key.
 
Delete Startup Instructions.
 
  To delete the startup instructions for the program press
  the "F4" key. A prompt will appear asking if you are sure
  you wish to delete them. If yes press the "Y" key (upper
  lower case) otherwise press the "N" (or enter). If a yes
  response was given the instructions will be deleted and a
  message returned to this affect. Press any key to

                                        29 

  continue processing.
 
Delete Parameter Prompts.
 
  To delete the parameter prompts for the entry press the
  "F5" key. A prompt will appear asking if you are sure
  you wish to delete them. If yes press the "Y" key
  (upper or lower case) otherwise press the "N" key (or
  enter). If a yes response was given the prompts will be
  deleted and a message returned to this affect. Press
  any key to continue processing.
 
Change Password.
 
  NOTE: If password protection is not turned on this option
        will not appear on the process selection screen.
 
  To change the password for the program press the "F6" key.
  The current password (if any) will be displayed and a
  new one may be typed in. When complete press enter. You
  will be prompted to press enter again if it is correct
  otherwise to reenter it. If the password is to be deleted
  press "F2" or if no change is to be made press "Esc".
 
 
When all of the desired changes have been performed press the
"Esc" key to return to the program selection screen.
 
 
UPDATING MENU ENTRIES
_____________________
 
ADDITIONS
 
To create a new menu press the "F4" key at the main function
selection screen then go through the menu selection process
to point to the menu to add the new menu to.
 
NOTE: At any time during the following process press the
      "Esc" key to cancel the add.
 
The next screen will ask for the name of this menu. Enter
any characters up to a limit of 35 and be as descriptive as
possible as to what this menu will represent. Also it is
advised to capitalize at least the first character in the
name for display purposes. When typed in press the enter key.
You will be asked to press enter again if the name is correct
otherwise to reenter it.
 
If password protection is turned on for the system a prompt
will be displayed to enter a password. If one is to be
assigned type in what is desired and press enter. If no
password is to be used just press enter. You will then be
asked to press enter again if it is correct otherwise to
reenter it.
 

                                        30 

If you have a color monitor the color selection screen will
be displayed. Press the appropriate letter keys (A thru
P, upper or lower case) for the menu's foreground and
background colors. The two colors may not be the same. When
complete the screen will clear, a partial screen displayed
showing the new colors and a prompt to press enter if they
are OK or to press "F1" to go back through the selection
process. Respond accordingly. When the above process is
complete the menu will be added to the system and text
displayed confirming this. You will then be prompted to
press one of the following keys to exit:
 
    o F1 to add another menu to the current menu.
    o F2 to add a program to the new menu.
    o F3 to return to the menu selection screen
    o F4 to return to the menu maintenance selection.
    o F5 to exit the maintenance program.
 
 
DELETIONS
 
To delete a menu press the "F5" key at the main function
selection screen then go through the menu selection process
to point to the menu to be deleted. A verify prompt will be
displayed asking if you are sure you wish to delete the menu.
If yes press the "Y" key (upper or lower case) otherwise
press "N" (or just press enter). If a yes response was given
the menu will be deleted AND ALL program entries related to
it. When the deletion process has completed a message to
this affect will be displayed. Press any key to continue and
the new list of menus for the current menu will be displayed.
The menu selection process may now be repeated.
 
Note however a menu may not be deleted if it contains other
menus. If a multi-level structure is to be deleted work
from the bottom up deleting the lowest level menus first,
then those at the next higher level, etc.
 
 
CHANGES
 
NOTE: If password protection is not turned on for the
      system and you have a monochrome monitor this process
      will not be available and this selection will not
      appear on the main function selection screen.
 
To change a menu press the "F6" key at the main function
selection screen then go through the menu selection process
to point to the menu to be modified.
 
If you have a color monitor the color selection screen will
be displayed. If the colors are to remain the same press
the "Esc" key otherwise press the appropriate letter keys
(A thru P, upper or lower case) for the menu's foreground and
background colors. The two colors may not be the same. When
complete the screen will clear, a partial screen displayed

                                        31 

showing the new colors and a prompt to press enter if
they are OK otherwise to press "F1" to go back through the
selection process. Respond accordingly.
 
If password protection is turned on for the system a prompt
asking if the password is to be changed (or one added) will
be displayed. If yes press the "Y" key (upper or lower
case) otherwise press "N" (or just press enter). If a yes
response was given the current password for the menu
will be displayed. If it is not to be changed press "Esc",
if it is to be deleted press "F2" otherwise enter the
new password and press enter. If an entry was made a
prompt will be displayed to press enter if the password is
correct otherwise to reenter it. Respond accordingly.
 
When all of the changes have been made a message will be
displayed that the menu has been modified and to press
any key to continue.
 
If no changes were made to the menu the modification
message will not be displayed and the program will
automatically return to the menu selection screen.
 
 
UTILITIES
_________
 
DISPLAY MENU ENTRIES
 
To display on the screen the entries (menus and programs) for
a menu press the "F7" key at the main function selection
screen and perform the menu selection process to point to the
desired menu.
 
If password protection is turned on you will be asked if the
passwords for the menu entries are to be displayed. If yes
press the "Y" key (upper or lower case), if not press "N" or
simply press enter.
 
(THE MENU DISPLAY SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The screen shown above is a sample display of a menu and the
following is a description of the information shown:
 
    o PROGRAM OR MENU - the menu or program name.
 
    o TYPE - the type of entry, "Menu" for menus or "Progr"
      for programs.
 
    o COMMAND FILE - the PC SYSTEM MANAGER file name of
      the DOS commands for programs. This field will be
      blank for "EXIT TO DOS" entries.
 
    o START INSTU - For programs if there are startup
      instructions "Yes" will be displayed otherwise "No".
 

                                        32 

    o PARAM PRMPT - For programs if there are parameter
      prompts "Yes" will be displayed otherwise "No".
 
    o PASSWORD - If password protection is turned on and a
      yes response was given for showing passwords this area
      will display the password for the entry.
 
The entries may be paged using the "PgUp" and "PgDn" keys.
 
When complete press the "Esc" key to return to the menu
selection screen.
 
 
CHANGE SYSTEM OPTIONS
_____________________
 
To change the following system options press the "F8" key
at the main function selection and the screen shown below
will be displayed.
 
(THE SYSTEM OPTIONS SELECTION SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
ALL SCREEN HEADING LINE
 
The top line of all screens within PC SYSTEM MANAGER is
reserved for your use and you may enter anything desired
up to 70 characters in length. This may be your Company
name, your personal name or anything else you wish to use to
customize the system.
 
To change this line press the "F1" key and the heading will
be displayed along with a prompt to modify it as required.
Type in the changes then press enter. The line will then
be displayed at the top of the screen and a prompt will
appear asking you to press enter again if the line is
correct otherwise to reenter it. If it is decided not to
change the line press "Esc".
 
When complete the system option selection screen will be
redisplayed. Another option may be chosen or press "Esc" to
return to the main function selection.
 
 
SCREEN SAVER TIME
 
An option of the system is to blank the screen if the
machine is left idle at the display of a menu. This is
helpful in avoiding "screen burning" if the same
characters are left displayed for too long a period.
 
To change this option press the "F2" key and the current
minutes before the screen is to be blanked will be shown.
Change as required by typing any numeric value from 1 to 99,
although 10 minutes is usually recommended, and press
enter. If this option is to be turned off enter a time of
0. A prompt will then be displayed asking to press enter

                                        33 

again if the time is correct otherwise to reenter it.
 
If the time is not to be changed press "Esc".
 
When complete the system option selection screen will be
redisplayed.
 
 
SYSTEM MASTER PASSWORD
 
This option may be used to turn on password protection by
adding a system master password, turn it off by deleting
the existing one, or to change the existing one.
 
To modify this feature press "F3" and the password, if one
exists, will be displayed. Enter the new password as
required and press enter. A prompt will be displayed asking
that you press enter again if the information is correct
otherwise to reenter it.
 
If the password is not to be changed press "Esc". If the
password is to be deleted and protection turned off press "F2".
 
When complete the system option selection screen will be
redisplayed.
 
 
USERID ENTRY ON/OFF
 
This function is used to turn on or off the requirement of
entering a USERID for time tracking purposes when selecting
an entry on the SYSTEM MANAGER menu (see the TIME TRACKING
section later in this manual for details).
 
When "F4" is pressed and userid entry is off it will be
turned on. If it is on it will be turned off. The resulting
state of this function (on or off) will be displayed at the
bottom of the screen. Press any key to erase the display
and return to process selection.
 
 
SYSTEM MANAGER MENU COLORS
 
NOTE: This option is not available and will not appear on
      the process selection screen for systems with
      monochrome monitors.
 
To change the colors of the SYSTEM MANAGER menu press the
"F5" key and the color selection screen will be displayed.
If there is to be no changes press "Esc" otherwise press
the appropriate letter keys (A thru P, upper or lower case)
for the foreground and background colors. The two colors may
not be the same. When complete the screen will clear, a
partial one displayed showing the new colors and a prompt
to press enter if they are OK otherwise to press "F1" to go
back through the selection process.

                                        34 

 
When complete the system option selection screen will be
redisplayed.
 
 
PRINT ALL MENUS AND ENTRIES
___________________________
 
To produce a printout of all the menus and their
contents press the "F9" key at the main function selection.
 
This process will produce a complete listing of all menus
and their contents, programs and menus. Also to help in
determining the system structure the menu each menu is
in will be printed. The following is a sample listing
and below is a description of the fields shown. Note
passwords for the menus and programs are not printed.
 
           SAMPLE LISTING OF ALL MENUS AND PROGRAMS
_______________________________________________________________________
 
 
MENU:  SYSTEM MANAGER
 
                                          COMMAND   STARTUP   PARAMETER
PROGRAM OR MENU                     TYPE   FILE     INSTRUCT   PROMPTS
----------------------------------  ----  --------  --------  ---------
AREA STATISTICS                     Progr MMF00005     Yes        No
CHANGE SYSTEM                       Menu
EXIT TO DOS                         Progr
FILE TRANSFER                       Progr MMF00008      No        Yes
PC SYSTEM MANAGER MAINTENANCE       Menu
 
 
MENU:  CHANGE SYSTEM
WITHIN MENU: SYSTEM MANAGER
 
                                          COMMAND   STARTUP   PARAMETER
PROGRAM OR MENU                     TYPE   FILE     INSTRUCT   PROMPTS
----------------------------------  ----  --------  --------  ---------
SYSTEM 1                            Progr MMF00009     Yes        Yes
SYSTEM CONFIG                       Progr MMF00010     No         No
EXIT TO DOS                         Progr
 
 
 
TOTAL NUMBER OF MENUS =  3
TOTAL NUMBER OF PROGRAMS =  6
_______________________________________________________________________
 
   o PROGRAM OR MENU - the program or menu name.
 
   o TYPE - the type of selection, "Menu" for menus or
     "Progr" for programs or jobs.
 
   o COMMAND FILE - the PC SYSTEM MANAGER file name of the

                                        35 

     DOS commands for programs or jobs. This field will be
     blank for "EXIT TO DOS" entries.
 
   o STARTUP INSTRUCT - For programs if there are startup
     instructions "Yes" will be shown otherwise "No".
 
   o PARAMETER PROMPTS - For programs if there are parameter
     prompts "Yes" will be shown otherwise "No".
 
To stop the listing temporarily when it is running press the
"F1" key. To restart press "F1" again.
 
To stop the listing before it finishes press "Esc".
 
Totals will be printed at the end of the toal number of
menus within the system and the total number of programs.









































                                        36 

T I M E   T R A C K I N G
_____________________________________________________________
 
INTRODUCTION
____________
 
The time tracking function of PC SYSTEM MANGER provides the
ability to record the amount of time a PC was used for a
specific program or job and optionally for machines that are
used by multiple individuals, which users the machine time
should be credited to.
 
The time entries are maintained in the "MASTMENU.LOG" file
contained under the "MSTMNUDR" directory. Each entry is 66
characters in length and contains the following information.
 
  - ID of individual. If the USERID entry option is on
    (the user must enter a 7 character ID when selecting
    an entry from the SYSTEM MANAGER menu) this field will
    contain the ID entered. If the option is off it will
    contain all dashes ( - ).
 
  - Date and time the user selected a program or job from a
    PC SYSTEM MANAGER menu.
 
  - Date and time the program or job ended and the machine
    returned to PC SYSTEM MANAGER.
 
  - The name of the menu entry selected.
 
When a job or program is selected from a menu PC SYSTEM
MANAGER automatically records the date, time, menu entry name
and USERID entered (if ID entry is turned on). When the
selected program ends and the system returns to the current
menu PC SYSTEM MANGER will record the return date and time
and enter the appropriate record in the log file. Note that
the date and time in the computer's clock should be kept
current so that the dates and times in the log records will
be correct.
 
The log file is sequential and each new entry is appended to
the end of the file. It will therefore expand as required
and there is no limit to the number of entries it may contain
up to the maximum size of the disk. When TIME TRACKING is
first implemented or if the log file has been archived and
deleted (see the LOG FILE ARCHIVING section later in this
manual) the log file is created dynamically by PC SYSTEM
MANAGER when the first entry is recorded. No special action
is required to allocate or initalize the file.
 
Provided with time tracking is a program that will permit the
editing of log records and each of the fields in a record
may be changed. Records may not be added or deleted however.
 
From the log file the following reports may be generated
using the time tracking report program.

                                        37 

 
  - Detail report of all time entries or those within a
    selected date range, in sequence by begin date/time.
    Totals are displayed on the number of hours by day and
    overall for the dates selected.
 
  - Summary by day of all time entries or those within a
    selected date range, in sequence by begin date. Totals
    are displayed on the number of hours by day and overall
    for the dates selected.
 
  - Detail report of all time entries or those within a
    selected date range, in sequence by USERID and begin
    date/time. Totals are displayed on the number of hours
    by USERID and overall for the dates selected.
 
  - Summary by user by day for all time entries or those
    within a selected date range, in sequence by USERID and
    begin date. Totals are displayed on the number of hours
    per day for each USERID and overall for the dates
    selected.
 
If the user identification option is in use file "MSTMNUSR"
is maintained with the following information on each
individual that is authorized to use the computer.
 
  - USERID. A 7 character ID for an individual.
 
  - User name. A 20 character field used to contain the
    name of the individual. Any characters may be used but
    an entry must be made.
 
  - Cost center. A 4 character field to identify the cost
    center of the individual. Any characters may be used
    and an entry in the field is optional.
 
 
The USERID file is created dynamcially the first time an
entry is entered through the maintenance program and it will
expand and shrink as required as entries are added and
deleted. The file allows for a maximum of 500 USERID's.
















                                        38 

USERID FILE MAINTENANCE
_______________________
 
The USERID maintenance program provides the ability to add,
change or delete users to or from the USERID file "MSTMNUSR"
which is retained under the "MSTMNUDR" directory on the disk
used for PC SYSTEM MANAGER. Also the program allows scanning
the file for entries and printing all USERID's.
 
To execute the program select the program entry "UPDATE
USERID FILE" on the PC SYSTEM MANAGER MAINTENANCE menu. When
the program starts the screen shown below will be displayed.
 
(THE SCREEN IS SHOWN IN THE REGISTERED COPY USER GUIDE)
 
To exit the program at any time press the "Esc" key.
 
 
ADDING USERID'S
 
To add a USERID to the file enter the folowing information:
 
  - Next to the caption "USER ID:" type in the USERID. Any
    numeric or alpha characters may be used. This field
    is required and an entry must be made.
 
  - Next to the caption "NAME:" type in the name of the
    individual that will be using this USERID. Any
    characters in either upper or lower case may be used
    up to a limit of 20.
 
  - Next to the caption "COST CENTER:" enter up to 4
    characters for the individual's cost center. Any values
    may be entered and the field is optional.
 
To move to the next field down either press enter or use the
down arrow key. To move back up to a field use the up arrow
key. The left and right arrow keys may be used to move the
cursor within a field. When all of the information has been
entered press the "F1" key. The file will be checked to
insure this USERID has not been entered previously and if so
an error message to this effect will display. Reenter a new
ID and press "F1" again. If the USERID is not already on the
file it will be added.
 
 
SCANNING THE FILE
 
The entries in the file are maintained in USERID sequence and
to display the next entry within the file (or the first on
program initialization) press the "F4" key. Note that any
activity on the file (add, change, delete) will position it
at that point and pressing "F4" will display the next entry
after the last update or display.
 
To display the prior entry in the file press "F5". Note that

                                        39 

the prior entry will be based on the last entry displayed or
updated.
 
To find a specific entry enter the USERID and press "F6".
 
 
CHANGING ENTRIES
 
The name and cost center for a user may be changed by either
scanning the file for the entry (see SCANNING above) and
when displayed entering the new data, or by entering the
USERID and new name and cost center at any point within
processing. In either case press "F2" when the information
has been typed in. Note that the USERID may not be changed,
first delete the old record then reenter the new data.
 
 
DELETING ENTRIES
 
A USERID may be deleted by either scanning the file to the
desired entry or by simply entering the USERID and in either
case pressing "F3". Note that the name and cost center being
displayed, if any, has no effect on the deleteion.
 
 
PRINTING ALL ENTRIES
 
To print all of the USERID'S and corresponding names and cost
centers press the "F7" key. All of the information in the
file will be shown and at the end will be a total on the
number of entries in the file.
 
 
USERID ENTRY AT THE SYSTEM MANAGER MENU
 
If USERID entry is turned on for the system (see the PC
SYSTEM MANAGER MAINTENANCE, UTILITIES, USERID ENTRY ON/OFF
section earlier in this manual) and one or more entries have
been added to the USERID file the following window will open
for typing in the USERID when any selection is made from the
"SYSTEM MANAGER" menu. Enter the appropriate USERID and
press enter. What is entered here will be recorded in the
time tracking entry. Use the cursor left and right arrows
and the "backspace" key for cursor movement.
 
        PLEASE ENTER YOUR USERID
 
          -
 
         PRESS 'Esc' TO CANCEL
 
Note that this entry must be made to permit any processing
on the machine. In the event that none of the USERID's on
the file can be remembered an override function has been
provided by pressing and holding the "Alt" key then pressing
and releasing the "O" (alpha) key then releasing the "Alt"

                                        40 

key. This will allow going into the USERID file to list or
scan the entries. If the override function is performed
the value "OVERRID" will appear in the USERID field of the
related time entry on the log.
 
 
LOG FILE EDITING
________________
 
The log file edit program provides the ability to display the
log file records on the screen, modify them, and print all or
those selected by a date range.
 
To execute the program select the "EDIT TIME TRACKING LOG
FILE" entry on the PC SYSTEM MANAGER MAINTENANCE menu. When
the program starts the screen shown below will be displayed.
 
(THE SCREEN IS SHOWN IN THE REGISTERED COPY USER GUIDE)
 
Under the heading "USERID" will be the USERID entered by the
operator when a selection was made from the SYSTEM MANAGER
menu, or if USERID entry is off all dashes ( - ).
 
Under "START DATE TIME" will be the date and time (in 24
hour clock) the menu entry was selected.
 
Under "END DATE TIME" will be the date and time (in 24 hour
clock) the program or job ended and the system returned to PC
SYSTEM MANAGER.
 
Under "MENU SELECTION" will be the program or job entry that
was selected.
 
To exit the program at any time press the "Esc" key.
 
 
DISPLAYING RECORDS
 
When the program starts the first records shown will be those
that are first in the file. To reposition the display at the
records with a particular start date press the "F1" key and a
prompt will display for the month and day in format "MMDD"
(month, day). Enter the date and press enter. The file will
reposition at the first record with the same or greater date
and the screen will be redisplayed at that point.
 
To scroll the screen one record at a time up use the up arrow
key to move the cursor to the top of the screen and press the
arrow key again. To scroll down use the down arrow key,
moving the cursor to the last record and press again. To
page a screen at a time use the "PgUp" key to go backward in
the file or "PgDn" to move forward.





                                        41 

PRINTING RECORDS
 
To print the records in the file press the "F2" key.  A
prompt will display to enter the beginning start date for the
report in format "MMDD" (month, day) or to leave blank for
the entire file and press enter. If a date was entered a
second prompt will display to enter the ending start date
or to leave blank for all records in the file after the
beginning date and press enter. To cancel the print press
the "Esc" key at either prompt.
 
After the dates have been entered the report will be printed
with the same information and in the same format as what is
displayed on the screen.
 
At any time while the report is running press the "Esc" key
to cancel it. Note however the printer's buffer must first
clear before the print will actually stop.
 
 
EDITING RECORDS
 
Any of the fields in a record may be modified. First move
the cursor to the desired line then press "F3". The
underline blinking cursor will change to block, non-blinking
indicating that edit is on. Using the left and right cursor
movement keys move the cursor to the character(s) to be
changed and enter the new data. Note that for the dates and
times only valid numeric information may be entered however
no check is performed to insure the days for a month are
correct. The hours in the times are in 24 hour clock and in
the range "00" through "23". The minutes and seconds are in
the range "00" through "59". Also the start date and time
must be less than or equal to the end date and time. When
all of the information has been typed in press the enter key.
 
Note that the log entries are maintained in the file by PC
SYSTEM MANAGER in a "LILO" (last in last out) sequence and
provided the computer's date and time are always correct the
file will be in date, time sequence. However the dates and
times in any entry may be changed and thus possibly causing
a loss of correct sequencing. This does not effect report
processing and does not cause problems with the system except
when repositioning within the file while viewing.
 
Records cannot be added to the file however a "dummy" entry
may be appended to the file's end by selecting any menu entry
from PC SYSTEM MANAGER, immediately exiting the program that
was started, then starting the log file program and editing
the time entry just created.
 
Also log entries may not be deleted however a record's end
date and time may be set to the same as the start thus
setting the time used to 0.



                                        42 

LOG FILE REPORT PROCESSING
__________________________
 
The log file report program is used to generate four log file
listings. To execute the program select the "RUN TIME
TRACKING LOG FILE REPORTS" from the PC SYSTEM MANAGER
MAINTENANCE MENU.
 
When the program starts the following window will be
displayed requesting the month and day of the beginning
records for the report. Note that these dates will be based
on the begin dates in the log records.
 
     ENTER REPORT BEGINNING MONTH AND DAY (MMDD):
 
 
     LEAVE BLANK FOR ALL, PRESS 'ESC' TO EXIT
 
If the report will be for all of the records on the log file
leave the entry blank otherwise type in the month and day as
required and in either case press enter.
 
If a begin date is entered the prompt "ENTER REPORT ENDING
MONTH AND DAY (MMDD):" will display in the window. If the
report will be for all of the records in the file that match
the begin date or later leave the entry blank otherwise enter
the month and day for the last records and in either case
press enter. To cancel running the reports and exit the
program press the "Esc" key at either prompt.
 
When the dates have been entered the following window will
open requesting which of the four reports is to be run.
 
 
     PRESS Fx KEY OF REPORT DESIRED
 
     F1 = BEGIN DATE-TIME SEQUENCE, DETAIL
 
     F2 = BEGIN DATE-TIME SEQUENCE, SUMMARY
 
     F3 = USERID/BEGIN DATE-TIME SEQUENCE, DETAIL
 
     F4 = USERID/BEGIN DATE-TIME SEQUENCE, SUMMARY
 
              (PRESS 'Esc' TO EXIT)
 
 
To print the detail report in beginning date and time
sequence press the "F1" key or to print the summary report
press "F2". To print the detail report in USERID, beginning
date and time sequence press "F3" or to print the summary
report press "F4". To exit the report selection and return
to entering the dates press the "Esc" key.
 
When the specific report has been selected the file will be
searched for the records that meet the date criteria and then

                                        43 

they will be sorted in the appropriate sequence. During this
phase various displays as shown below will appear on the
screen to keep you informed of what the program is doing.
 
 
17:45:56 SORT EXTRACT PHASE STARTED
17:46:06 EXTRACT COMPLETE - RECORDS READ = 200,
                             RECORDS SELECTED = 195
17:46:16 PASS 1 COMPLETE - FILE 1 STRINGS = 10 FILE2 = 9
17:46:25 PASS 2 COMPLETE - FILE 1 STRINGS = 5 FILE2 = 4
17:46:37 PASS 3 COMPLETE - FILE 1 STRINGS = 3 FILE2 = 2
17:46:46 PASS 4 COMPLETE - FILE 1 STRINGS = 2 FILE2 = 1
17:46:59 FINAL PASS COMPLETE - OUTPUT RECORDS = 195
 
 
The first line above, "SORT EXTRACT PHASE STARTED", shows
the time when the search of the file for the records that
meet the date criteria began, 17:45:56. The next line shows
when the search ended and the first pass of the sort started
and the total number of records in the file, 200, and the
total number extracted for the report, 195. The next four
lines indicate the sort/merge passes. This number will vary
based on the amount of records selected. The last line
indicates when the sort ended and the total number of records
sorted. This number should always match that on the second
line, "RECORDS SELECTED =".
 
When the sort has finished a prompt will be displayed to
ready the printer and press enter. The reports are 80
characters wide with approximately 55 lines per page. Paper
that is 9 1/2" X 11" (8 1/2" X 11" after the side strips have
been removed) is normally used. To run the report press
enter otherwise to cancel it at this point, or at any time
while it is running, press the "Esc" key.
 
Below are samples of the four reports and each will have a
heading on line 1 that will be the same as the customized
heading that appears at the top of all the PC SYSTEM MANGER
screens. Note also that the total times shown are in hours
and hundredths of an hour and overall totals between reports
may not be exactly the same due to rounding.
















                                        44 

        Detail report in start date and time sequence
_______________________________________________________________
 
                      YOUR COMPANY NAME
 
Date: 10-08-88   PC SYSTEM MANAGER TIME TRACKING HOURS  Page: 1
 
        REPORT TYPE: START DATE-TIME SEQUENCE, DETAIL
                     FOR DATES 01/01 THRU 12/31
 
            S T A R T           E N D
Userid    Date     Time     Date     Time   Menu Selection
_______ ________ ________ ________ ________ __________________
 
T01RR51 01-30-88 16:45:30 01-31-88 16:46:30 WORD PROCESSING
T01RR62 01-30-88 17:30:30 01-31-88 18:30:30 DATABASE SYSTEM
T01RR51 01-30-88 19:25:00 01-31-88 19:30:00 EXIT TO DOS
 
          Total Hours: 1.10
 
T01RR51 02-01-88 14:35:30 01-31-88 14:46:30 SPREAD SHEETS
T01RR62 02-01-88 16:00:05 01-31-88 16:30:05 DATABASE SYSTEM
T01RR62 02-01-88 20:15:00 01-31-88 20:30:00 WORD PROCESSING
 
          Total Hours: .93
 
   Total Report Hours: 2.03
_______________________________________________________________
 
 
      Detail report in USERID, start date and time sequence
_______________________________________________________________
 
                      YOUR COMPANY NAME
 
Date: 10-08-88  PC SYSTEM MANAGER TIME TRACKING HOURS   Page: 1
 
        REPORT TYPE: USERID/START DATE-TIME SEQUENCE, DETAIL
                     FOR DATES 01/01 THRU 12/31
 
            S T A R T           E N D
Userid    Date     Time     Date     Time   Menu Selection
_______ ________ ________ ________ ________ __________________
 
T01RR51 01-30-88 19:25:00 01-31-88 19:30:00 EXIT TO DOS
T01RR51 02-01-88 14:35:30 01-31-88 14:46:30 SPREAD SHEETS
 
          Total Hours: .28
 
T01RR62 01-30-88 17:30:30 01-31-88 18:30:30 DATABASE SYSTEM
T01RR62 02-01-88 16:00:05 01-31-88 16:30:05 DATABASE SYSTEM
T01RR62 02-01-88 20:15:00 01-31-88 20:30:00 WORD PROCESSING
 
          Total Hours: 1.75
   Total Report Hours: 2.03


                                        45 

        Summary report in start date and time sequence
_______________________________________________________________
 
                      YOUR COMPANY NAME
 
Date: 10-08-88  PC SYSTEM MANAGER TIME TRACKING HOURS   Page: 1
 
        REPORT TYPE: START DATE-TIME SEQUENCE, SUMMARY
                     FOR DATES 01/01 THRU 12/31
 
                        Date    Total Hours
                      ________  ___________
 
                      01-30-88      1.10
 
                      02-01-88      .93
 
 
                    Report Total - 2.03
_______________________________________________________________
 
 
     Summary report in USERID, start date and time sequence
_______________________________________________________________
 
                      YOUR COMPANY NAME
 
Date: 10-08-88  PC SYSTEM MANAGER TIME TRACKING HOURS   Page: 1
 
        REPORT TYPE: USERID/START DATE-TIME SEQUENCE, SUMMARY
                      FOR DATES 01/01 THRU 12/31
 
         Userid      Date     Total Hours
         _______   ________   ___________
 
         T01RR51   01-30-88       .10
                   02-01-88       .17
 
                    Userid Total: .27
 
         T01RR62   01-30-88      1.00
                   02-01-88       .75
 
                   Userid Total: 1.75
 
 
                  Report Total - 2.02
_______________________________________________________________









                                        46 

LOG FILE ARCHIVING
__________________
 
The time tracking log file "MASTMENU.LOG" under the
"MSTMNUDR" directory is designed to hold entries for one
year. At the end of the calendar year, or at any time
desired, the file should be archived by copying to a
different directory, or offloading to a diskette, using the
same file name then deleted. When the PC SYSTEM MANAGER menu
program writes the next time entry a new log file will
automatically be created.
 
The archive file may be edited and used for report processing
by following the procedure below.
 
  Copy the PC SYSTEM MANAGER master file "PCMNMAST.MST" from
  the "MSTMNUDR" directory to the directory or diskette
  containing the archived log file (this master file is used
  by both the edit and report programs).
 
  Set the default drive and directory to that of the archived
  log file.
 
  Start the edit program "MASTMN11.EXE" or the report
  generator, "MASTMN12.EXE".
 
  The following are sample DOS commands to run the edit
  program assuming the program is under the PC SYSTEM
  MANAGER directory "MSTMNUDR" on drive "C:" and the
  archive log is also on drive "C:" under sub-directory
  "ARCHIVE" directly beneath the root directory.
 
     C:
     CD \ARCHIVE
     \MSTMNUDR\MASTMN11
 
  To run the report program the commands would be the same
  except that the last statement to start the program would
  be "\MSTMNUDR\MASTMN12".


















                                        47 

A U T O M A T I C    P R O G R A M    S T A R T I N G
_____________________________________________________________
 
INTRODUCTION
____________
 
The automatic program starting feature of PC SYSTEM MANAGER
provides the ability to start up to 30 programs
automatically based on the time of day and:
 
    o A specific date.
 
    o A specific day of the month (eg. the 2nd of every
      month).
 
    o A specific day of the week (eg. every Tuesday).
 
    o The first, second, third or last occurence of a day
      of the week for each month (eg. the first Monday,
      the second Tuesday, the third Friday, the last
      Wednesday, etc.)
 
    o The first and third, or second and last occurence of a
      day of the week for each month (eg. the first and
      third Monday of every month, the second and last
      Friday of each monh, etc.).
 
    o Every other occurence of a day of the week starting
      with the first occcurence within the year (eg. every
      other Wednesday starting with the first Wednesday of
      the year).
 
    o Every other occurence of a day of the week starting
      with the second occcurence within the year (eg. every
      other Friday starting with the second Friday of the
      year).
 
This function is very helpful for routinely run jobs such as
hard disk backups and does not require the intervention of
an operator (provided the job run does not require operator
action).
 
Also the option is provided to have a prompt displayed before
the job is run so that the operator can confirm the execution
of the selected program. And in addition the prompt can
cause the machine to beep to catch the operator's attention if
they are not sitting at the machine.
 
For a job to be started automatically a corresponding record
must be in the automatic start job file, the machine must be
on and the PC SYSTEM MANAGER menu program must be running.
What menu is being displayed, or if its in the screen saver
mode, does not matter.
 
Also a job that was not run on a scheduled date due to the
machine being powered off, or the PC SYSTEM MANAGER program

                                        48 

not in execution at the scheduled time and not restarted
before the CURRENT DATE changed, will not be considered for
automatic run until its next scheduled date and time.
 
When a program or job is run through this facility a time
tracking log file record will be created in the same manner
as if the job was selected manually however the USERID
will be shown as "AUTORUN".
 
 
FILE MAINTENANCE
________________
 
MAINTENANCE SCREEN
 
The information retained for automatic job startup is
retained in the "MSTMNUAJ.SCH" file under the "MSTMNUDR"
directory on the hard disk containing the PC SYSTEM MANAGER
files. To update the file select the "UPDATE AUTOMATICALLY
STARTED JOBS" program entry on the PC SYSTEM MANAGER
MAINTENANCE menu. When the maintenance program starts the
screen shown below will be displayed.
 
(THE SCREEN IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The records in the file are maintained in a "FIFO" (first in
first out) sequence and the information displayed when the
program begins will be for the first record of the file. If
no entries have ever been made the data will be all 0's.
There will be one record for each job or program to be run.
The following is a description of the fields shown on the
screen:
 
   o Specific Date: - this field is used if the job is to
     run on a specific date and is in the format MM/DD/YY
     (month/day/year). If this field is not used it will
     contain all 0's (00/00/00).
 
   o Day Of Month (99 = Last): - This field is used for jobs
     that are to be run on a specific day of each month.
     Eg. 01 for the first day, 15 for the 15th of the month,
     etc. For the last day of the month use 99. If this
     field is no used it will contain 00.
 
   o Day Of Week - Mon:
                   Tue:
                   Wed:
                   Thr:
                   Fri:
                   Sat:
                   Sun:
 
     These 7 fields are used for specifying the day(s) of
     the week a job is to be run and multiple days may be
     specified for a single job. The values of the data
     that may be entered in each field is as follows:

                                        49 

 
         0 = Not run on this day
         1 = Run on first of the month (eg. first Tuesday)
         2 = Run on second of the month (eg. second Friday)
         3 = Run on third of the month (eg. third Wednesday)
         4 = Run on last of the month (eg. last Monday)
         5 = Run on the first and third of the month (eg.
             the first and third Wednesday)
         6 = Run on the second and last of the month (eg.
             the second and last Tuesday)
         7 = Run on every other from the first of the year
             (eg. every other Monday starting with the first
             Monday of the year)
         8 = Run on every other from the second of the year
             (eg. every other Monday starting with the second
             Monday of the year)
         9 = Run on every occurence (eg. every Thursday)
 
      The following are some examples:
 
          Day Of Week - Mon: 0
                        Tue: 1
                        Wed: 0
                        Thr: 0
                        Fri: 0
                        Sat: 0
                        Sun: 0
          The job would run on the first Tuesday of every
          month.
 
          Day Of Week - Mon: 0
                        Tue: 0
                        Wed: 5
                        Thr: 0
                        Fri: 0
                        Sat: 0
                        Sun: 0
          The job would run on the first and third Wednesday
          of each month.
 
          Day Of Week - Mon: 0
                        Tue: 0
                        Wed: 0
                        Thr: 0
                        Fri: 7
                        Sat: 0
                        Sun: 0
          The job would run on every other Friday starting
          with the first Friday of the year.
 
          Day Of Week - Mon: 9
                        Tue: 0
                        Wed: 9
                        Thr: 0
                        Fri: 9
                        Sat: 0

                                        50 

                        Sun: 0
          The job would run on every Monday, Wednesday and
          Friday.
 
          Day Of Week - Mon: 0
                        Tue: 3
                        Wed: 0
                        Thr: 8
                        Fri: 0
                        Sat: 0
                        Sun: 9
          The job would run on the third Tuesday of every
          month, every other Thursday starting from the
          second Thursday of the year, and it would also be
          run on every Sunday.
 
          Day Of Week - Mon: 9
                        Tue: 9
                        Wed: 9
                        Thr: 9
                        Fri: 9
                        Sat: 0
                        Sun: 0
          The job would run on every day of the week except
          Saturday and Sunday.
 
   o Run Time (24 Hr Clock): - This field is used to specify
     the time of day, in 24 hour clock time, the job is to
     start. The format is HH:MM:SS (hours:minutes:seconds).
     The range for this field is 00:00:00 (midnight) to
     23:59:59 (one second before midnight). Note that when
     the PC SYSTEM MANAGER program is checking to run a
     job it will compare the times in the auto start records
     to the current time and if the current time is equal to
     or GREATER THAN that in a start record the job or
     program will be run. In this way if the machine is
     being used at the time specified in the auto start
     record the job will still be run when the machine
     returns to the menu program.
 
   o Command File: - This field is used to specify the job
     by indicating the PC SYSTEM MANAGER DOS command file
     name (see the PROGRAM DOS COMMAND FILES section
     earlier in this manual for details).
 
   o Confirm Before Running (Y/N): - This field designates
     whether a confirmation prompt is to be displayed before
     the job is started. Use "Y" for yes or "N" for no.
     If yes the PC SYSTEM MANAGER menuing program will
     display a window stating that it is time to run the job
     and providing the person operating the computer with
     the option to go ahead and let it start or to cancel it.
 
   o Beep For Confirm: - This field is used to cause the
     machine to beep if a run confirmation prompt is
     displayed. Use "Y" for yes or "N" for no. If yes

                                        51 

     the computer will beep in approximately two second
     intervals when the confirm window is being displayed.
     It is used to catch the operator's attention if the
     machine is unattended when it is time to run the job.
 
On the right side of the screen four lines up from the bottom
is shown the number (1 thru 30) of the current record being
displayed and the number of the last record in the file.
This is informative data only and no entries can be made in
this area.
 
On the last line of the screen are the keys used for updating
records in the file, scanning and printing the records and
to exit the program and return to the menu press the "Esc"
key.
 
Note that one record on the file will cause one run of a job
or program for any given day. However there may be multiple
records for the same job for the same day causing multiple
runs.
 
 
ADDING RECORDS
 
To add a record to the file enter the information as required
overtyping what is displayed on the screen. For the date or
day fields only a specific date, a day of the month, or one
or more of the day of week fields may be completed. The
other two date/day options must be all 0's (eg. if a specific
date is used then the day of month and day of week fields
must all contain 0's).
 
When complete press the "F1" key and the record will be added
to the end of the file. The "CURRENT RECORD NUMBER" and
"NUMBER OF LAST RECORD" to the right of the screen will
change to reflect the addition.
 
If a record already exists on the file with the same
information a yes/no (Y/N) prompt will display stating the
duplication and whether or not the record is to be added. If
yes press the "Y" key otherwise press "N". If yes is
responded the job will be executed twice on the same day.
 
 
SCANNING RECORDS
 
To scan through the records press the "F4" key to advance
forward or "F5" to go backward. The records will be
displayed and the record numbers on the right hand side of
the screen will be updated accordingly.
 
 
CHANGING RECORDS
 
To change a record scan the file using the "F4" and "F5" keys
until the desired record is displayed. Make the

                                        52 

modifications as required then press the "F2" key. Note that
when a job is run the corresponding auto start record is
marked with the day of the run (not shown on the screen but
may be seen from a print of the file, see below). If the
auto start record is changed the run date is reset and could
cause the job to be run twice on the same day.
 
 
DELETING RECORDS
 
To delete a record scan the file using the "F4" and "F5"
keys until the desired record is displayed and press the "F3"
key. A yes/no (Y/N) prompt will be displayed to confirm the
deleteion. If a yes response is given (the "Y" key pressed)
the record will be deleted and the record numbers to the
right of the screen will be updated.
 
 
PRINTING RECORDS
 
To print the records in the file press the "F6" key. Below
is a sample listing.
 
(THE LISTING IS SHOWN IN THE REGISTERED COPY MANUAL)
 
The fields shown on the report correspond to what is
displayed on the screen with the exception of the "Last Run
Date". This is the date the job was last run (or cancelled
at a confirm prompt) through the auto start function of the
system (00/00/00 indicates the job has not been run). This
date is part of the auto job start records but may not be
modified directly. It is however reset to 00/00/00 if a
record is changed (see above).
























                                        53 

T I P S    A N D    T E C H N I Q U E S
_____________________________________________________________
 
PC SYSTEM MANAGER is designed to be an aid in the use of
your computer but it must be implemented properly to be of
value. The following are tips and techniques which will
help in the use of this product.
 
Before you start adding your menus and programs to the
system first take some time to layout the menu/sub-menu
structure you wish to have. Decide on the names to be used,
which will be menus and which will be programs and how
they will relate to each other. Group like entries into
sub-menus and develop a logical path of sub-menuing.
 
If you have a multi-user system it is recommended that each
be provided with his or her own sub-menu and place them on
the SYSTEM MANAGER menu. The only programs on the SYSTEM
MANAGER would be those that are truly common to everyone.
 
Before adding a program to a menu have available the name to
be used, the DOS commands, startup instructions and
parameter prompts (or the names of files to copy from). Do
not wait until the add process has started to determine
these.
 
Be liberal with startup instructions. Its easier to have
them displayed for you than having to go to a manual
everytime a job is run.
 
Menu entries do not have to be for starting programs. It is
very convenient to have entries whose DOS commands perform
preestablished routines such as making backup copies of
files, printing spooled listings, etc.
 
Use parameter prompts whenever possible. They make the
computing system more flexible.
 
Get used to using a menuing system for your computing as
opposed to continually entering the DOS commands yourself.

















                                        54 

D O S    C O M M A N D S    M E N U
_____________________________________________________________
 
The DOS Commands Menu comes as part of the PC SYSTEM
MANAGER for your convenience in executing common DOS
commands from a menu. Also it provides a model of how
menus and programs appear within the system. It was
built using the SYSTEM MANAGER maintenance program and
therefore may be modified, or deleted, by you at your
discretion. The following is a list of the entries within
the menu and a description of each. Note that the
equivalent DOS command appears in parenthesis as part of
the entry name. See your DOS manual for more information
on these commands.
 
    o ASSIGN DRIVES (ASSIGN)
 
      This entry is used to assign references from one
      disk drive to another (eg. A: to C:). The parameter
      prompt will be for up to four reassignments. Leave
      all assignments blank to reset all drives to their
      normal status.
 
    o CHECK DISK (CHKDSK)
 
      Check disk is used to analyze the directories,
      files, and the File Allocation Table on a disk. The
      parameter prompt will be for a device or file name.
 
    o COMPARE DISKETTES (DISKCOMP)
 
      This entry will compare the contents of two
      diskettes. The parameter prompt will be for the
      drives of the diskettes.
 
    o COMPARE FILES (COMP)
 
      This entry will compare the contents of two files.
      The parameter prompt will be for the paths and names
      of the files.
 
    o COPY A FILE (COPY)
 
      This entry is used to copy the contents of one disk
      file to another. The parameter prompt will be for
      the paths and names of the source (input) file and
      the target (output) file.
 
    o COPY DISKETTES (DISKCOPY)
 
      Diskcopy will copy the contents of one diskette to
      another. The parameter prompt will be for the
      drives of the source (input) diskette and the target
      (ouput) disk.
 
    o DATE CHANGE (DATE)

                                        55 

 
      Date change is used for changing the current date
      on the computer. The parameter prompt will be for the
      new date in the format MM-DD-YY (month, day, year).
 
    o DELETE A FILE (DEL or ERASE)
 
      This entry is used to delete (erase) a disk file.
      The parameter prompt will be for the path and name of
      the file.
 
    o DIRECTORY DISPLAY (DIR)
 
      Directory display will display the contents (file
      and directory names) of a disk or directory. The
      parameter prompt will be for the disk drive or the
      directory path.
 
    o DISPLAY DISK VOLUME (VOL)
 
      This entry will display the volume label for  a
      disk. The parameter prompt will be for the disk drive
      assignment.
 
    o FORMAT A DISKETTE (FORMAT)
 
      This entry is used to format diskettes. As a
      reminder startup instructions will be displayed
      showing the more common options available with this
      command. The parameter prompt will be for the disk
      drive and the options, if any.
 
    o MAKE DIRECTORY (MD or MKDIR)
 
      The make directory command is used for creating
      a new sub-directory on a disk. The parameter
      prompt will be for the path and name of the new
      directory.
 
    o REMOVE A DIRECTORY (RMDIR)
 
      The remove directory command is used for deleting a
      sub-directory from a disk. The parameter prompt
      will be for the path and name of the directory to
      be erased.
 
    o RENAME A FILE (RENAME or REN)
 
      This entry will change the name of an existing disk
      file. The parameter prompt will be for the path
      and name of the file and the new file name.
 
    o SET NEW TIME (TIME)
 
      The TIME command is used to reset the computer's
      internal clock. The parameter prompt will be for

                                        56 

      the new time in the format HH:MM:SS.XX (hours in 24
      hour clock time, minutes, seconds and hundreds of
      seconds). The seconds and hundreds of a second are
      optional.
 
    o TYPE THE CONTENTS OF A FILE (TYPE)
 
      This entry is used to display on the screen the
      data in a disk file. The parameter prompt will be
      for the path and name of the file.















































                                        57 

S P E C I A L     C O N S I D E R A T I O N S
_____________________________________________________________
 
BACKUPS
________
 
It is important with the PC SYSTEM MANAGER, as with all
systems, to perform adequate disk backups. Backup your
hard disk OFTEN. A few minutes of backup are worth hours
of reinstalls and recreations. Use of the auto start job
feature is handy for reminding you to do this.
 
SYSTEM FAILURE
______________
 
There is the remote possibility that while running the
maintenance program and due to a power failure, system
crash, etc., the PC SYSTEM MANAGER master file could be
damaged. In this event the menu program could go into a
loop trying to read the file and an attempt to abort it
would only cause it to recall itself thereby setting your
computer into an endless loop. Always have available  a
DOS system diskette with an AUTOEXEC.BAT file that does
not reference the PC SYSTEM MANAGER. Reboot the computer
using this diskette and restore the SYSTEM MANAGER
directory, MSTMNUDR, with the latest backup. Be sure to
reapply any updates since the last backup of the hard disk
or the last copy made of the SYSTEM MANAGER backup diskette.
 
 
PC SYSTEM MANAGER FILES
_______________________
 
All of the programs and files used within the PC SYSTEM
MANAGER, with the one exception as noted below, are under the
directory MSTMNUDR. The following is a descrption of
those files.
 
    o Programs;
 
         - MASTMN01.EXE, displays the menus and performs
           the startup of the jobs and programs selected.
 
         - MASTMN02.EXE, displays the copyright screen and
           resets the PC SYSTEM MANAGER at power on or
           reboot. DO NOT REMOVE THE REFERNECE TO THIS
           PROGRAM IN THE AUTOEXEC.BAT FILE, RESULTS COULD
           BE UNPREDICTABLE.
 
         - MASTMN03.EXE, performs the system maintenance.
 
         - MASTMN10.EXE, performs the USERID file
           maintenance.
 
         - MASTMN11.EXE, used to display, print and edit
           the time tracking log file records.

                                        58 

 
         - MASTMN12.EXE, generates the time tracking log
           file reports.
 
         - MASTMN13.EXE, performs the automatic job start
           file maintenance.
 
    o PCMNMAST.MST is the system master file.
 
    o MASTMENU.LOG is the time tracking log file.
 
    o MSTMNUAJ.SCH contains the auto job start records.
 
    o MSTMNUSR contains the USERID records.
 
    o LOG.SRT is a work file used for sorting the log
      records when running reports.
 
    o All files with the extension of ".BCH" contain the
      DOS commands for running the jobs and programs on the
      menus.
 
    o All files with the extension of ".INS" contain
      startup instructions.
 
    o All files with the extension of ".PRM" contain
      parameter prompts.
 
    o MASTERMN.BAT contains the commands for running the
      menu program.
 
    o MASTMNBT.BAT is a work file.
 
The one file as noted above that is not under the MSTMNUDR
directory is MSMNZZZZ.BAT. It will appear under the root
directory of the hard disk. It does not have to be backed up.





















                                        59 

FINDING THE SYSTEM MASTER PASSWORD
_____________________________________________________________
 
If password protection is turned on and the master password
forgotten the system becomes inoperable. In this event the
following procedure may be performed to regain it.
 
  o Reboot the system using a DOS system diskette with an
    AUTOEXEC.BAT file that does not reference the PC SYSTEM
    MANAGER.
 
  o At the DOS prompt enter;
 
       TYPE c:\MSTMNUDR\PCMNMAST.MST
 
       where "c:" is the hard disk drive containing the
       PC SYSTEM MANAGER files.
 
  o Press the Ctrl-Break keys simultaneously after
    four lines have been displayed on the screen.
 
  o The above statement will display the contents of the
    master file for the system and on line 2 or 3 the
    bracket characters "[" and "]" will appear. Between
    these will be the password.
 
 
For security purposes if this manual is available to users
of the computer this page should be removed and kept in  a
secure place.



























                                        60 

           M O R E     P R O G R A M S     F R O M     M O R S O F T
       _________________________________________________________________
 
                   - - - -  D I R E C T M A I N T - - - -
 
         TAME YOUR HARD DISK and forget DOS with DIRECTMAINT  the full
         function disk directory and file maintenance system comprised
         of  three  programs:    DIRECTMAINT  I,  DIRECTMAINT  II, and
         FILE PATCH.
 
         DIRECTMAINT  I  provides  a  directory/file  view of  a  disk
         showing  with a formatted display all the sub-directories and
         files   for  a  specific directory.  Using the display    and
         "point    and    shoot"   highlighted  bounce  bar  menus the
         directories  and  files  may  be  selected  for the following
         various processing functions.
 
         For directories:
 
             -  Copy  all  or  selected  files  from  one directory to
                another  on  the  same or to a different disk.    When
                copying  from  a  hard  disk  to  floppies a prompt is
                displayed  for  switching  diskettes  when  the target
                disk    fills.      File   contents  are  not  spanned
                between  diskettes  however,  each  disk  will contain
                files in their entirety.
 
             -  Move  all  or  selected  files  from one directory  to
                another on the same or to a different disk.    If  the
                source   and  target  disks  are  the  same  only  the
                directory entries  will  be  modified,  the files will
                will  not be affected.  If the disks are different the
                files  will  be physically copied to the target  drive
                and then erased from the source disk.
 
             -  Compare  all or selected files on one disk or  in  one
                directory to those  on or in another.  If two files do
                not  compare  equal the machine will stop and a window
                will  open showing a block of 30 characters from  each
                file where the mismatch occurred and the byte location
                of the characters in error.  Optionally the files  may
                be modified on a character by character basis.
 
             -  Erase all or selected files in a directory.
 
             -  Create a new directory.
 
             -  Erase a directory.
 
             -  Print  the names  of  the  sub-directories  and  files
                in  a  single  directory  or optionally all the  names
                within a complete  directory  tree  structure.    This
                also  provides  the  ability  to  print  the  names of
                all the directories and all the files on a disk.
 
             -  Find  the  path  for  any  file  anywhere  on  a disk.

                                        61 

                Optionally  when  a file is found its directory may be
                "opened" and displayed  on  the  screen.   Also if the
                file is a program (.COM or .EXE) or batch (.BAT)  file
                it may be passed to DOS for execution.
 
         For individual files:
 
             -  Copy  or  move  a  file  to  a  different  disk, to  a
                different  directory  on  the  same  disk,  or  to the
                same    directory    on  the  same  disk  but  with  a
                different name.
 
             -  Compare  the  contents    of   one  file  to  that  of
                another  displaying  where  the files are in error and
                providing the option to modify them.
 
             -  Erase a file.
 
             -  Display the contents of a file on the screen.
 
             -  Print the contents of a file.
 
             -  Change  the  name,  date,  time  or  attribute  of   a
                file.
 
             -  One or more files may be "marked" for subsequent group
                copy, move, compare or erase.
 
             -  Load  and  run  a  program  or batch file.  Optionally
                DIRECTMAINT I  may  be  restarted  automatically  when
                the    program    or  batch  file  ends.
 
             -  Load  and  run  FILE  PATCH  using the file for input.
 
             -  Two   seperate  selections  for  loading  and  running
                programs  of  your  choice  using a file that has been
                selected  through  DIRECTMAINT.
 
         Also    while  viewing  the  directories and files on a  disk
         DIRECTMAINT I provides:
 
             -  Ease  of  movement  within  disk  and  directory  tree
                structures.
 
             -  The  ability  to view  two disks or two directories on
                the same disk on the same screen at the same time.
 
             -  Directory names on the display screen may be sorted in
                ascending, descending or disk sequence.
 
             -  Files on the display screen may be sorted in ascending
                or descending sequence on name, extension, size, date,
                time,    date  and  time,  or  attribute  and  may  be
                resequenced  back  to  the order as they appear in the
                disk directory.
 

                                        62 

             -  An exit to DOS may be performed for executing commands
                or running other programs and  DIRECTMAINT I  returned
                to  at  the  same  point  where the exit was initiated
 
 
         DIRECTMAINT  II   is   similiar  to  DIRECTMAINT I except  it
         provides  a  full  view of ALL the files on one or more disks
         at one time.  The information  (name,  path, size, date, time
         and  attribute) for each of the files is read into memory and
         displayed using a formatted screen.  The information may then
         be    sorted  in  either  ascending  or  descending  sequence
         providing:
 
             -  If  in  name  sequence  which  files are duplicated in
                multiple  directories  or  on more than one disk.  The
                duplicates  will  automatically  be  flagged  on   the
                screen for you.
 
             -  If  in  name extension sequence what are all the files
                with  the  same  extension,  what  are all the program
                files (.COM or  .EXE),  what  are all the batch (.BAT)
                files, etc.
 
             -  If  in  path  sequence a complete view of the disk  by
                directory and sub-directory.
 
             -  If  in  size sequence which are the largest files (the
                ones using up the most disk space).
 
             -  If in date/time  sequence  which files were created or
                modified on a specific day.
 
             -  If  in attribute sequence which are the read  only  or
                hidden files and  which  files have been changed since
                the last disk backup.
 
         DIRECTMAINT II also provides the following functions:
 
             -  Print  the  information  on all of the files in memory
                or only those with duplicate names.
 
             -  Display  disk  statistics  on  total  space available,
                total  space  used,  total  number  of files and total
                number of directories.
 
             -  Exit to  DOS  and return to DIRECTMAINT II.
 
             -  All  of  the   file    processing    capabilities   of
                DIRECTMAINT I  (copy,  move,  compare,  erase,  etc.).
                With these functions  DIRECTMAINT II is invaluable  in
                helping  to  keep  your  disks  clean  of obsolete and
                duplicated  files,  saving  valuable  disk  space  and
                in  many  cases  may  help  avoid  having  to purchase
                additional hard disks.
 
         Both  DIRECTMAINT  I  and  DIRECTMAINT  II are designed to be

                                        63 

         "user  friendly" with all instructions for operator responses
         displayed  on the screen and all processes are selected using
         either  single  key  strokes  or  through  "point  and shoot"
         highlighted bounce bar menus.  Only when specific information
         such  as  a  file selection mask or a new  file date or  time
         are required does the  user  have to enter data.  No commands
         or  keywords are required to be memorized.
 
         Also  DIRECTMAINT I and DIRECTMAINT II are "linked"  together
         in   that  when  running DIRECTMAINT I by simply pressing the
         "F10"  key  it  will  terminate    and    automatically  call
         DIRECTMAINT  II.  When in DIRECTMAINT II press "F10"  and  it
         will  end  and start DIRECTMAINT  I.
 
 
         FILE PATCH  comes  as a part of DIRECT MAINT at no additional
         cost.
 
         The minimum machine requirements  for  using DIRECTMAINT  are
         as follows:
 
             -  A hard disk
             -  380k of usable memory.
             -  DOS 2.0 or later.
             -  A color or monochrome monitor.  If color is used
                screen colors may be selected.
             -  A printer is optional.
 
         Prices:  Registered copy $29.95
 
                  Shareware evaluation copy $4.00
 
                  Specify 5 1/4"  or 3 1/2" diskettes
 
                                    MORSOFT
                            9859 IH-10 West, 107/811
                            San Antonio, Texas 78230
                                 (512) 692-9572
 
                  VISA, MasterCard, COD call toll free
                             1-800-662-0028
















                                        64 

           M O R E     P R O G R A M S     F R O M     M O R S O F T
       _________________________________________________________________
 
            - - - -  M O R S O F T    C A L C U L A T O R  - - - -
 
         The  MORSOFT CALCULATOR is a full function calculator program
         designed  to  run on IBM PC and compatible computers.  It may
         be used as an "adding  machine"  providing the ability to sum
         up  to  1,000  values,  each  stored in the computer's memory
         "tape"  which may be scrolled forward or back, changed and/or
         printed.    Both sub and overall totals are retained and dis-
         played on the computer screen.
 
         Also calculations such as multiply, divide and  trigonometric
         functions  are  provided and the results may be added or sub-
         tracted    to  the  memory  tape.    In  addition  a "memory"
         constant feature  is  built  in  and  values  may  be  added,
         subtracted,  multiplied or divided to or from the constant as
         they are entered.
 
         And  all  functions  may  be  performed  in either decimal or
         hexadecimal mode.
                            F U N C T I O N S
 
         - Add                           - Trigonometric Sine, Cosine,
         - Subtract                        Tangnet, and Arctangent
         - Multiply                      - Memory constant add to,
         - Divide                          subtract, subtract from,
         - Square root                     multiply by, divide into,
         - Exponentiation                  divide by
         - Hexadecimal to decimal        - Sub-total
           conversion                    - Overall total
         - Decimal to hexadecimal        - 1,000 entry tape retention,
           conversion                      view, change and print
         - Maximum integer positions 13, maximum decimal positions 12,
           combined 12
 
         The  basic  machine  and  software  requirements  to  use the
         MORSOFT CALCULATOR are as follows:
 
           -  An IBM PC/XT/AT or compatible with DOS 2.0 or later
           -  Monochrome or color monitor
           -  256k usable memory
           -  A hard disk or 1 floppy
 
         Prices:  Registered copy $14.95
                  Shareware evaluation copy $4.00.
 
                                M O R S O F T
                           9859 IH-10 West, 107/811
                           San Antonio, Texas 78230
                                (512) 692-9572
 
                  VISA, MasterCard, COD call toll free
                             1-800-662-0028


                                        65 

           M O R E     P R O G R A M S     F R O M     M O R S O F T
       _________________________________________________________________
 
               - - - -  F  I  L  E      P  A  T  C  H  - - - -
 
         FILE PATCH is a utility program designed for use by  computer
         consultants,    technicians,  Information  Centers,  software
         developers and those  individuals that are responsible for or
         just wish to "tinker" with PC files. It provides the ability,
         at  the  byte  level,  for  on screen viewing, dumping to the
         printer,  modifying, extracting or creating any DOS  data  or
         program file up to 10 megabytes in length.
 
         When  displayed on the screen each character within a file is
         shown along with its corresponding ASCII or HEX value.    The
         screen  may  be  scrolled one line at a  time up or down, may
         be paged a screen at a time or repositioning may be performed
         at  any  point within the file.  Also the file may be scanned
         for a specific occurence of a string of values and  the  file
         will  be  automatically  repositioned  at the point where the
         values are found.
 
         If  a  file is dumped to the printer all or only portions  of
         the file contents may be printed and the values will be shown
         in either ASCII  or  HEX  and  optionally  the  corresponding
         characters may be displayed.
 
         The values in any file may be modified or new values appended
         to the end of the file in either character, ASCII or HEX. Any
         of  the  256 ASCII or HEX values may be used.
 
         A new file may be created  and  any  of  the 256 ASCII or HEX
         values may be entered in an append mode.
 
         In  addition  all or portions of a file may be extracted to a
         new file or appended to the end of an existing file.
 
         The basic machine and software requirements to use FILE PATCH
         are as follows:
           -  DOS 2.0 or later
           -  256k usable memory
           -  Monochrome or color monitor.
           -  Any disk or diskette configuration
 
         Prices:  FILE PATCH comes with the DIRECTMAINT hard disk
                  directory and file maintenance system at no
                  additional cost.  However it may be registered
                  individually for $14.95 per copy or a sharware
                  evaluation copy may be ordered for $4.00.
 
                                M O R S O F T
                           9859 IH-10 West, 107/811
                           San Antonio, Texas 78230
                                (512) 692-9572
                   VISA, MasterCard, COD call toll free
                              1-800-662-0028

                                        66 


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2503

     Volume in drive A has no label
     Directory of A:\

    MASTMN10 EXE     47759  12-29-89   2:30p
    MASTMN03 EXE    114506  12-29-89   2:28p
    MASTMN02 EXE     36391  10-29-90   8:05p
    MANUAL   DOC    151708  10-30-90   7:20p
    README            1002  12-11-89   9:42a
    GO       BAT        43   1-01-80   3:08a
    FILE2503 TXT      2521  10-10-90   2:26p
    GO       TXT       770  10-10-90   2:25p
            8 file(s)     354700 bytes
                            4096 bytes free
