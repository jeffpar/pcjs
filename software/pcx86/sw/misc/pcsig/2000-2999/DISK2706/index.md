---
layout: page
title: "PC-SIG Diskette Library (Disk #2706)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2706/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2706"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2706.TXT

{% raw %}
```
Disk No: 2706                                                           
Disk Title: PC-Wizard PowerMaster II                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Wizard PowerMaster II                                 
Author Version: 2.2                                                     
Author Registration: $34.95                                             
Special Requirements: Hard drive.                                       
                                                                        
                                                                        
PC-WIZARD POWERMASTER II is a menu program to run all of your           
application programs and automatically perform backups on your hard     
disk.                                                                   
                                                                        
Application programs and hard disk backups are executed by using the    
function keys in a series of custom menus.  Up to ten different menus   
may contain up to 90 different programs.  For application programs that 
may require additional input from the user, PC-WIZARD lets you specify  
whether or not each command allows user entry on the command line.      
After completing all activities, PC-WIZARD automatically takes you to   
the appropriate menu to backup each hard disk drive and information is  
given about the last backup.                                            
                                                                        
PC-WIZARD will educate the user on how to use DOS commands.  A menu of  
20 common DOS commands is provided, and PC-WIZARD provides a Help menu  
and examples of each command.  The user can become proficient in basic  
DOS commands and manage the computer system without becoming dependent  
on a specific menu program.                                             
                                                                        
PC-WIZARD also has an activity log to record all programs and DOS       
commands that are executed.  The activity log shows the date and time of
execution, the amount of time the program was in execution, and the name
of the command that was executed.                                       
                                                                        
A complete network version is available from the author, plus a         
multi-user version that allows a standalone computer to handle up to 45 
separate users.                                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

		 PC-Wizard II PowerMaster Quick Reference Manual




1.1. INTRODUCTION:   PC-Wizard PowerMaster is designed to fully automate all
of your computer processing requirements and to facilitate the learning of the
DOS commands that are the "heart and soul" of the computer's amazing power.

With PC-Wizard II PowerMaster you can run your favorite application program by
selecting it from the PC-Wizard Programs Menu and then immediately prepare a
backup of your changes by accessing the PC-Wizard Backups Menu. You can add,
change, or delete your programs and backup menu selections quickly and easily
by accessing the PC-Wizard Setup modules. These modules can be accessed direct-
ly from the menu screens by pressing <S> or by selecting the <Set-Ups> option
from the Main Menu.

These features alone make PC-Wizard PowerMaster one of the most powerful prod-
uctivity tools available today. However, with the addition of the PC-Wizard
Manager you have been taken to the next generation of computer usefulness,
efficiency and POWER!

The PC-Wizard Manager not only allows you to execute any, and ALL, commands
that can be entered from the normal DOS prompt, but actually TEACHES you how
to use each of these commands. Through this revolutionary new approach, even
first-time computer users will be capable of mastering the complexities of DOS
in a matter of hours by viewing all needed instructions for each command
on-screen and then immediately executing the command from the PC-Wizard Manager
Command Line.

PC-Wizard also records every command that you issue from the Manager Command
Line and places them in an ACTIVITY.LOG file. This log file contains the actual
command that you issued, the time and date that you issued it, and also tells
you how long it took your computer to execute the command. This gives you a
complete history of your computer activity that is invaluable for performing
trouble-shooting functions, measuring the computer's performance speed, and
also alerting you to items that you may have missed, such as backing-up files
that have been recently created or modified.

The ACTIVITY.LOG file is also updated each time that you run a program from the
PC-Wizard Programs Menu and when you perform backup operations from the PCW
Backups Menu.

One of the most unique, and POWERFUL, features of PCW-II PowerMaster is that it
automatically removes itself from memory prior to running of the selections
made from the Programs Menus. This allows you to run even your largest account-
ing or database programs from within PowerMaster without fear of running out of
precious RAM memory needed by those programs. PowerMaster is also completely
reliable for running of communications programs without interference or con-
flict of any kind. (As a point of illustration, the PCW-II PowerMaster programs
contained on your distribution disk were compiled without error directly from a
PowerMaster menu selection!) Note: Approximately 4K of memory is reserved by
DOS for executing PC-Wizard II program selections!


1.2  SYSTEM REQUIREMENTS:   To use the PC-Wizard II PowerMaster Software your
computer must meet a few basic hardware requirements:


    * An IBM PC/XT/AT computer (and most compatibles), a hard disk drive and 1
      double-sided, double-density floppy disk drive. (Memory requirements will
      depend on the type of application programs that you will be executing.)

    * PC-DOS or MS-DOS. (Version 3.3 is recommended.)

    * Monochrome or color monitor and keyboard.

Note:  PC-Wizard's screen colors can easily be adapted to your specific monitor
simply by adjusting the contrast and brightness controls. Screen colors will
change dramatically depending on the setting of these controls.


1.3  PC-WIZARD INSTALLATION:    To install PC-Wizard onto your hard disk, simp-
ly place the PC-Wizard diskette in the A: floppy disk drive and at C:\ prompt
type  A:INSTALL and press the <Enter> key.

When prompted to do so, provide the requested information concerning which
hard disk drive that you desire to have PC-Wizard installed on. The install
routine will automatically create a directory named QTMASTER on the selected
hard disk drive and transfer all of the PC-Wizard program and data files to
that directory. It will also create a batch file named PCW.BAT and place it in
the root directory on drive C: and then automatically display the PC-Wizard II
Master Menu.

At this point it is recommended that you complete the PC-Wizard Quick Reference
Card that contains all of the information that you will need in order to set-up
your programs and backups menus during the PC-Wizard Set-up step that follows.
(The PC-Wizard Reference Card can be printed now by issuing the command "PRINT
\QTMASTER\REFCARD.DOC" from the <WildCard> option of the PCW Manager screen.)

Each time that PC-Wizard II PowerMaster is accessed a NOTICE screen will be
displayed. The information on this screen is used to determine whether the
program version installed on your computer is a "SHAREWARE" or a "REGISTERED"
PCW-II PowerMaster program. (e.g., "Distributed By: " indicates an unregistered
"SHAREWARE" copy; while " * Registered To * " indicates a REGISTERED version.
The NOTICE screen can be re-accessed at any time from any of the Programs menus
by pressing the <ALT-N> combination keys.

A "SHAREWARE" copy is a fully-functional version of PCW-II PowerMaster and
allows the user to "TRY OUT" PCW-II PowerMaster for a limited time in order to
evaluate its suitability for continued use. The version received directly from
PC-SIG will continue to function beyond the allowed trial period. However, this
should NOT be construed as a license to continue using PC-Wizard II beyond the
allowed 30-day trial period without formally registering the program with
Systematic Concepts.


The NOTICE screen allows the user access to the following functions:

     <F1> Print Manual:   Prints this Manual to user's printer device.

     <F2> Print Registration:   Prints the PowerMaster  Order Form that must
	  be submitted to Systematic Concepts in order to obtain a REGISTERED
	  version of the PC-Wizard II PowerMaster programs.

     <F3> Make Disk:   Creates additional copies of PowerMaster that may be
	  freely distributed to users friends/associates without charge. (NOTE:
	  copies of PCW-II PowerMaster that are created via direct copying of
	  the files from the \QTMASTER directory onto diskettes will not fit
	  onto a 360K floppy diskette and will not contain the INSTALL program
	  that is needed in order for the person receiving the disk to properly
	  install PCW-II PowerMaster programs. The only SAFE and AUTHORIZED
	  method of making copies of the PC-Wizard II diskettes is through the
	  "<F3> Make Disk" function on the NOTICE screen!)


NOTE: The manual can also be displayed on-screen from the PC-Wizard Manager by
issuing the command "TYPE MANUAL.DOC |MORE" while in the \QTMASTER directory.


1.4 PCW MENUS SET-UP:   PowerMaster allows you access to 10 separate levels of
Program and Backup menus. Up to 9 selections can be entered on each screen
which provides you with the capability of setting-up PC-Wizard to automatically
perform up to 90 program executions and selective backups on 90 separate sub-
directories. If desired, a separate level can be dedicated to unique groupings
of activities. (e.g., Level I - Databases; Level II - Word Processing; Level
III - Communications; Level IV - Utilities; Level V - Games; etc.)

Prior to running and backing-up your programs from the PC-Wizard menus, you
will need to provide the system with basic information describing the programs
you desire to access and their location on your computer system.

To perform this task, simply highlite the "SET-UP" option on the PC-Wizard Main
Menu and press <ENTER>. At prompt, enter "1" for PROGRAMS or "2" for BACKUPS
and again press <ENTER>. (The "SET-UP" option can also be accessed by simply
pressing the letter <S> instead of highliting the selection.)

The system will immediately access the Level I Set-up Screen for the indicated
selection and will display the current configuration data. To screen through
the menu selections press the <F1> key. (During the initial set-up, default
values of "Reserved" will be displayed, which indicate that this menu select-
ion is available for use.)

To configure the current <F_> menu selection, simply press the <F2> function
key. The cursor will then appear in the first input field and allow you to
enter the PROGRAM NAME as you wish it to appear on the menu.

After the PROGRAM NAME has been entered PC-Wizard will display the "Format
Input? (Y/N): " prompt. If "Y" is entered then the PROGRAM NAME will automat-
ically be formatted to display the first character of each element in upper-
case and remaining characters in lower-case. This feature allows you to input
the data quickly and easily without concern as to capitalization. However, if
special capitalization is desired (i.e., ABC Accounting) then simply enter the
data exactly as you want it displayed on the menu and respond with an "N" to
the "Format Input? (Y/N): " prompt.

Next enter the DRIVE  where the program resides on the hard disk and press the
<ENTER> key. PC-Wizard will automatically capitalize your input and add the
required ":".

Next enter the directory which contains the program files and press the <ENTER>
key. The DIRECTORY NAME will automatically be converted to all upper-case char-
acters preceded by the required \ character. To default to the ROOT directory,
enter the directory name as a single \ character and press the <ENTER> key.
(PC-Wizard PowerMaster allows up to 27 characters for the directory name which
means that you can designate a longer directory path to include needed subdir-
ectories, if desired.)

Next enter the EXECUTABLE PROGRAM NAME which executes the program and press the
<ENTER> key once again.

After all data for the current menu selection has been entered a "Save Changes?
(Y/N)" prompt will appear. Pressing "Y" will save these changes and pressing
"N" will return them to their original settings.

NOTE: To remove/delete a selection from the menu, simply enter the PROGRAM NAME
as "Reserved" or enter the PROGRAM NAME as a single <D> and press the <ENTER>
key. PC-Wizard will automatically display all fields with the proper "Reserved"
entries and ask if it is O.K. to save. If a "Y" response is received, then the
selection will be permanently deleted. However, if you decide that you really
did not want to delete this selection it can automatically be restored by pro-
viding an "N" response to the <SAVE> prompt.

To change menu levels, simply press the <F10> function key and PC-Wizard will
immediately access the Set-Up Screen for the next, succeeding level and place
you at the <F1> selection for that level. PowerMaster also allows you to
<GOTO> any menu level simply by pressing <G> and entering the level that you
desire to access. You can also go BACKWARDS through the menu selections by
pressing the <-> key.

Repeat the above steps for each selection that you desire to run from PC-Wizard
and when all selections have been entered, press the <ESC> function to exit
SET-UP and return to either the PC-Wizard Main Menu or the Backups Menu.

1.5  RUNNING PROGRAMS:   To run any of the programs that you have configured
through the Programs Set-Up Screen, simply access the Programs Menu from the
PC-Wizard Main Menu by pressing <ENTER> while the PROGRAMS menu option is high-
lighted or press the letter <P>.

PC-Wizard will immediately display the Level I Programs Menu where any program
can be executed simply by pressing the function key that corresponds to the
desired program selection. To change the menu level, press the <F10> key.

Menu selection slots which you have not yet configured will be displayed as
"Reserved" and selecting these items will result in a BEEP indicating an
invalid choice.

When a valid selection has been made, PC-Wizard will immediately access the
appropriate drive and directory that you specified during set-up and execute
the program. (If the program fails to execute properly it indicates that
incorrect data was provided during the initial set-up and you will need to
reconfigure the function key for that selection.)

PC-Wizard automatically records the time and date that you accessed a program
selection from the Programs Menu and computes the amount of time that you spent
within that particular application. This data is placed in an ACTIVITY.LOG file
with a PATH identifier of {* PCW MENU *}.

The activity log can be accessed at any time from any of the Programs or the
Backups menus by pressing <Alt-L>.

When you quit/exit the current program, PC-Wizard will automatically return you
to the PC-Wizard Programs Menu and allow you to select any of the remaining
programs for running.

To access the Progams Set-up Module in order to add, change or delete a menu
selection, simply press the <S> key. To quit the Programs module and access
the Main Menu press the <ESC> key.

Special data validation routines have been incorporated into the Programs and
Backups Set-up routines to prevent entering of incorrect data for menu select-
ions. All information input by the user concerning drive, directory and program
files to be executed are checked against the information on your hard disk to
verify that drive and directory exist and that program file is executable!

This version of PCW-II PowerMaster has been enhanced to allow you to access the
Manager by pressing the letter <M> and the Backups module by pressing <B>.


1.6  BACKING-UP DIRECTORIES:    To back-up any of the directories that you have
configured through the Backups Set-Up Screen, simply access the Backups Menu
from the PC-Wizard Main Menu by pressing the <ENTER> key while the BACKUPS menu
option is highlighted.

PC-Wizard will immediately display the Level I Backups Menu where any directory
can be backed-up simply by pressing the function key that corresponds to the
desired backup selection. To change the menu level, simply press the <F10> key.

Menu selection slots which you have not yet configured will be displayed as
"Reserved" and selecting these items will result in a BEEP indicating an
invalid choice.

When a valid selection has been made, PC-Wizard will immediately access the
Backup Options Screen where you can indicate the type of backup that you want
performed.

The system will immediately access the appropriate drive and directory that you
specified during set-up and perform the backup using the selected option.

When the current backup is completed PC-Wizard will automatically return to the
Backup Menu and allow you to select any of the remaining directories for backup
operations.

PC-Wizard automatically records the time and date that you performed a backup
operation from the Backups Menu and computes the amount of time that it took to
complete the backup process. This information is placed in the ACTIVITY.LOG
file with a PATH identifier of {* B-U Menu *.}


1.7 PC-Wizard II Manager:    The PC-Wizard Manager can be accessed from the PCW
Main Menu by highlighting the <Manager> selection bar and pressing <ENTER>. The
Manager can also be accessed directly from within the Programs Menus simply by
pressing the letter <M>.

The menu on the left-hand side of the Manager screen lists all of the DOS
commands that can be executed directly from the menu. The first option is the
"WildCard". In the "WildCard" mode, ANY valid command can be issued without
restrictions. This includes executing programs, batch files, utility programs,
and DOS commands that are not included in your version of PC-Wizard PowerMaster
etc. This provides unlimited access to all commands that can be executed by the
computer without the need to first exit PC-Wizard and return to the DOS prompt.

When a menu selection is highlighted on the Manager screen, corresponding
instructional text for that option is displayed in the right-hand "window".
Complete instructions for each command, including uses, syntax, option switches
and comprehensive examples, can be viewed by simply pressing the <PgUp> and
<PgDn> arrow keys on the keypad portion of the computer keyboard. You can
browse through these instructions in order to gain a familiarity with the types
of commands that are available and their general uses (beginner/novice level);
or you can review the instructions in order to "refresh" your memory as to the
proper command structure/syntax (advanced/master level). Either way, the
"learning curve" obstacle has been overcome.

To execute a command from the Manager, simply highlight the desired option and
press the <Enter> key. The cursor on the Manager Command Line will change color
and shape, indicating that the Manager is now waiting for you to complete the
command by providing the required command parameters according to the displayed
instructions. (It is recommended that you scroll through the instructions for
the command until you have accessed the screen that displays the appropriate
example before you press <Enter> to access the Command Line. This will ensure
that the needed instructions remain on the screen while you are completing the
command at the Command Line.)

Note: A command can also be accessed by simply pressing the <ALT-Letter> corre-
sponding to the command desired instead of using the <UP-ARROW> and <DN-ARROW>
keys to scroll through the command menu. This is a much faster method of view-
ing instructions for each command!

After the appropriate command parameters have been entered, simply press the
<Enter> key to execute the command. PC-Wizard will automatically provide a
fresh screen for viewing the results of the executed command and will display
the command at the bottom of the screen. When you are ready to return to the
Manager simply press any key and the Manager menu will reappear and allow you
to enter your next command.

PC-Wizard allows you to automatically re-execute your most recently issued
command by simply pressing the <F3> function key. This feature allows you to
quickly and easily REPEAT a given command as often as desired without the need
to retype it each time from the computer keyboard!

The current ACTIVITY LOG can be viewed at any time by pressing the <F9> funct-
ion key. When the file becomes larger than you desire, you can "archive" it by
pressing the <F4> function key. During the "archive" process, all information
in the current activity log is transferred to a file named ACTIVITY.ARC and a
new ACTIVITY.LOG file is created.

NOTE: The ACTIVITY.LOG(s) can also be accessed from either the Programs Menus
or the Backups Menus simply by pressing the <ALT-L> key combination!

Through the use of the PC-Wizard <DISPLAY> command you can perform "searches"
for specific information contained in the ACTIVITY.ARC file and display this
information on your monitor screen. (Examples: The command "DISPLAY 07-04-91"
will cause only that activity that was performed on 4 July 1991 to be display-
ed. The command "DISPLAY B-U" will display information on all backups that were
performed from the PC-Wizard Backups Menu only. The command "DISPLAY MENU" will
display information on all program executions and backup operations that were
performed from the PC-Wizard menus.)

To exit the Manager and return to PC-Wizard Master Menu or the Programs Menus,
simply press the <ESC> key.

NOTE:   This version of PowerMaster only includes those DOS commands which are
most frequently needed by the average user. However, ALL DOS commands that are
included in your current version of DOS can be executed from the "WildCard"
option. An enhanced version of PowerMaster for the advanced user which will
include all DOS commands is currently under development and will be available
in the near future.


1.9  ACCESSING PC-WIZARD FROM DOS:   To start-up PC-Wizard from the DOS prompt
simply type the following command and press the <RETURN> key:

                                   C:\PCW

It is recommended that PC-Wizard II be set-up to automatically be executed upon
system start-up by placing the appropriate commands in your AUTOEXEC.BAT file.
Subsequent reaccesses of PC-Wizard from the DOS prompt can be accomplished by
simply holding down the <ALT> key and then pressing the <F10> function key.

Note:  Please ensure that any existing commands for automatic execution of
other programs are removed from your AUTOEXEC.BAT prior to adding the above
command statements. Also ensure that you have loaded the ANSI.SYS device driver
via the command in your CONFIG.SYS file. (example: DEVICE = C:\DOS\ANSI.SYS)
If the ANSI.SYS driver is not loaded the ANSI commands for restarting PC-Wizard
will be treated as ASCII text and the commands will not be interpreted properly
by DOS and will not be executed when the Alt-F10 combination keys are pressed.


1.10  TECHNICAL ASSISTANCE:   To obtain technical assistance call Systematic
Concepts at (714) 633-8438 between 10 A.M - 5 P.M (PST) Mondays thru Fridays.

Please ensure that you have your PowerMaster registration number and your user
I.D. handy, as Systematic Concepts' support staff must confirm your status as
authorized users of PC-Wizard II prior to providing technical assistance.



```
{% endraw %}

## REFCARD.DOC

{% raw %}
```
                       Quik-Time Quick Reference Card


                           * Program Selections *



F1:   Program Name:__________________   F6:  Program Name:________________
      Drive:________                         Drive:_______
      Directory:_____________________        Directory:___________________
      Program Command:_______________        Program Command:_____________

F2:   Program Name:__________________   F7:  Program Name:________________
      Drive:________                         Drive:_______
      Directory:_____________________        Directory:___________________
      Program Command:_______________        Program Command:_____________

F3:   Program Name:__________________   F8:  Program Name:________________
      Drive:________                         Drive:_______
      Directory:_____________________        Directory:___________________
      Program Command:_______________        Program Command:_____________

F4:   Program Name:__________________   F9:  Program Name:________________
      Drive:________                         Drive:_______
      Directory:_____________________        Directory:___________________
      Program Command:_______________        Program Command:_____________

F5:   Program Name:__________________
      Drive:________
      Directory:_____________________
      Program Command:_______________



                           * Back-up Selections *



F1:   Menu Title:____________________  F6:  Menu Title:___________________
      Drive:________                        Drive:_______
      Directory:_____________________       Directory:____________________

F2:   Menu Title:____________________  F7:  Menu Title:___________________
      Drive:________                        Drive:_______
      Directory:_____________________       Directory:____________________

F3:   Menu Title:____________________  F8:  Menu Title:___________________
      Drive:________                        Drive:_______
      Directory:_____________________       Directory:____________________

F4:   Menu Title:____________________  F9:  Menu Title:___________________
      Drive:________                        Drive:_______
      Directory:_____________________       Directory:____________________

F5:   Menu Title:____________________
      Drive:________
      Directory:_____________________


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2706

     Volume in drive A has no label
     Directory of A:\

    BACSETUP PBC     22162   7-04-91  12:00p
    INSTALL  EXE     47286   7-04-91  12:00p
    PGMSETUP PBC     23524   7-04-91  12:00p
    PWRMSTR  DAT       468   7-04-91  12:00p
    QTBAC    PBC     22572   7-04-91  12:00p
    QTCMDR   PBC     23315   7-04-91  12:00p
    QTMNGR   CMD       212   7-04-91  12:00p
    QTPOWER  EXE     95679   7-04-91  12:00p
    QTPRG    PBC     19123   7-04-91  12:00p
    REFCARD  DOC      2433   7-04-91  12:00p
    MANUAL   DOC     21629   7-04-91  12:00p
    ORDER    FRM      4588   7-04-91  12:00p
    ATTRIB   INS      2410   7-04-91  12:00p
    BACKUP   INS      2806   7-04-91  12:00p
    CHDIR    INS      1451   7-04-91  12:00p
    CHKDSK   INS      3050   7-04-91  12:00p
    COPY     INS      2696   7-04-91  12:00p
    DEL      INS      2260   7-04-91  12:00p
    DIR      INS      2578   7-04-91  12:00p
    FIND     INS      2510   7-04-91  12:00p
    FORMAT   INS      1969   7-04-91  12:00p
    MKDIR    INS      1008   7-04-91  12:00p
    PRINT    INS      3182   7-04-91  12:00p
    RENAME   INS      1230   7-04-91  12:00p
    REPLACE  INS      2462   7-04-91  12:00p
    RESTORE  INS      3722   7-04-91  12:00p
    RMDIR    INS      1276   7-04-91  12:00p
    SORT     INS      3136   7-04-91  12:00p
    SYS      INS      1409   7-04-91  12:00p
    TREE     INS      1130   7-04-91  12:00p
    TYPE     INS       988   7-04-91  12:00p
    WILDCARD INS      2826   7-04-91  12:00p
    XCOPY    INS      4024   7-04-91  12:00p
    GO       TXT      1079   7-23-91   5:16p
    GO       BAT        38   1-31-91  12:58a
    FILE2706 TXT      3183   7-22-91  11:14p
           36 file(s)     335414 bytes
                            7168 bytes free
