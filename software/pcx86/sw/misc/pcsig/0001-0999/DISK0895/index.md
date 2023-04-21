---
layout: page
title: "PC-SIG Diskette Library (Disk #895)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0895/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0895"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCOUT AND SIMS"

    SCOUT is a memory-resident disk file manager you can customize to your
    liking. Define paths and your favorite applications and change your
    options at any time.
    
    Any program can be executed from SCOUT by scrolling through the
    directory and pressing the appropriate key. Tag files or scroll
    through the directory to copy, move, alter, delete, or rename the
    files. SCOUT can search for a particular file, and can change the
    file's date and time. Create a directory, create a volume label,
    format, or display disk memory information. Read text files and even
    display a directory listing of an .ARC file.
    
    Special features include a displayable calendar and an ASCII character
    table. SCOUT also displays RAM memory usage, showing how much memory
    each memory-resident program is currently using. When exiting from
    SCOUT, you have the option of removing it from memory.
    
    SELECT I MENU SYSTEM (SIMS) is a memory-resident program to design,
    edit, and maintain menus for your computer system providing
    user-friendly access to programs.
    
    Menus are created from an ASCII text source file converted into menu
    format.  These menus greatly simplify computer operation and program
    access for new and unfamiliar users of your system.  Not only does this
    program help you save time in training other users, but it also eases
    personal use.
    
    A security feature can be selected that requires a password for certain
    options on the menu.  Total freedom is given to the menu creator
    regarding screen layout and options specified.  The number of menus
    that can be incorporated into the system is only limited by available
    disk space.  The screen design controls the colors, windows, menu
    options, placement of options, procedure for execution, user-defined
    fields, and security for the menus.
    
    In other words, you can be quite creative with this program and use it
    for any application you wish.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE895.TXT

{% raw %}
```
Disk No:  895                                                           
Disk Title: Scout and SIMS                                              
PC-SIG Version: S3                                                      
                                                                        
Program Title: Scout                                                    
Author Version: 4.4                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
SCOUT is a memory-resident disk file manager you can customize to your  
liking. Define paths and your favorite applications and change your     
options at any time.                                                    
                                                                        
Any program can be executed from SCOUT by scrolling through the         
directory and pressing the appropriate key. Tag files or scroll         
through the directory to copy, move, alter, delete, or rename the       
files. SCOUT can search for a particular file, and can change the       
file's date and time. Create a directory, create a volume label,        
format, or display disk memory information. Read text files and even    
display a directory listing of an .ARC file.                            
                                                                        
Special features include a displayable calendar and an ASCII character  
table. SCOUT also displays RAM memory usage, showing how much memory    
each memory-resident program is currently using. When exiting from      
SCOUT, you have the option of removing it from memory.                  
Program Title: SIMS                                                     
Author Version: 3.1                                                     
Author Registration: $15.00                                             
Special Requirements: Two floppy drives and an ASCII wordprocessor.     
                                                                        
SELECT I MENU SYSTEM (SIMS) is a memory-resident program to design,     
edit, and maintain menus for your computer system providing             
user-friendly access to programs.                                       
                                                                        
Menus are created from an ASCII text source file converted into menu    
format.  These menus greatly simplify computer operation and program    
access for new and unfamiliar users of your system.  Not only does this 
program help you save time in training other users, but it also eases   
personal use.                                                           
                                                                        
A security feature can be selected that requires a password for certain 
options on the menu.  Total freedom is given to the menu creator        
regarding screen layout and options specified.  The number of menus     
that can be incorporated into the system is only limited by available   
disk space.  The screen design controls the colors, windows, menu       
options, placement of options, procedure for execution, user-defined    
fields, and security for the menus.                                     
                                                                        
In other words, you can be quite creative with this program and use it  
for any application you wish.                                           
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SIMS.DOC

{% raw %}
```
                                - 1 -


                      SELECT I MENU SYSTEM (SIMS)

                       Version 1.00    Release A
                            April 7th, 1987

                  Copyright (c) 1984 David Thomas Stewart
                         All rights reserved

                                - 2 -

  DISCLAIMER:

SIMS has been placed in the public domain by the author, David Stewart,
and a $15 registration fee is requested if you use the program and find
it to be beneficial.  In any case, please feel free to copy and share
this program with others.  I will only support those who contribute
toward the development of this SHAREWARE product, but I will accept
useful suggestions from ANYBODY!

SIMS is provided on an "as is" basis.  Any damages arising from the
use of this program are entirely the responsibility of the user; i.e. the
author, David Stewart, cannot be held responsible for any damages.

  CREDITS:

The program system contained within was created between April and
July, 1984 by David Thomas Stewart and the following persons deserve
their respective credit:

Rick Hillier - Beta testing
Dave Knight  - Beta Testing

Personal thanks to all those involved, especially my family for their time
and understanding during the development of this system.

The address at which to send the registration fee is:

  David Thomas Stewart
  Synergy Development
  P.O. Box 3132
  Cambridge, Ontario
  Canada     N3H 4S6

                                - 3 -
  Contents

Introduction...........................................   4

PART I  / GETTING STARTED

 1 / Description of the SELECT I MENU SYSTEM...........   6
 2 / Initial Setup.....................................   6
 3 / Using SIMS........................................   7
 4 / The SAMPLE menus..................................   8

PART II  / MENU CONTROL LANGUAGE (MCL)

 5 / An Introduction to MCL............................  10
 6 / The VIDEO CONTROL Commands........................  11
 7 / The OPTION CONTROL Commands.......................  14
 8 / Procedures........................................  17
 9 / User Defined Fields...............................  18
10 / Special Commands..................................  19
11 / Effective MENU Creation...........................  20

PART III / MAKING A MENU

12 / Creating a SOURCE MENU............................  22
13 / The MAKEMENU Program..............................  23

PART IV  / MENU MANAGEMENT

14 / Using Subdirectories..............................  25
15 / Using BATCH Processing and DOS Commands...........  26
16 / Security and Passwords............................  28
17 / Arguments.........................................  29

PART V  / APPENDICES

Appendix A / Summary of MCL Reference Commands.........  31
Appendix B / Error Messages............................  33
Appendix C / Customer Support..........................  35

Index..................................................  36

                                - 4 -

  INTRODUCTION

Congratulations for downloading the SELECT I MENU SYSTEM. This system has
many special features and functions that makes it the perfect "environment"
for the office or home. Whether you're a computer professional or a novice,
you'll find the  SELECT I MENU SYSTEM (SIMS) simple to use.

SIMS is capable of converting text source files into menus. These menus can
provide the vital links between the machine and the user. Minimal training
is necessary to use SIMS. Best of all, you can eliminate all of the time
spent on training your users about subjects that have nothing to do with the
applications (DOS operations), and increase overall productivity.

To run the system you will need either a IBM PC or compatible. Two disk
drives or a hard disk, DOS V2.00 or greater, and at least 128k of memory
is all that is required. Either the color or monochrome display adapter
may be used with the system. The EGA is also supported.

The package is divided into four sections for user convenience:

MAKEMENU.EXE  - The text source file to menu conversion program.

MENU.COM      - The actual menu run-time module.

SAMPLE MENUS  - Several sample menus are included in the archive.

MANUAL        - All questions or problems encountered by the
                user should be diagnosed and solved here.

For your convenience, the manual has been divided into five
sections as described below:

Part I    Will describe the SIMS environment to get get you started using
          your new system right away.

Part II   Describes  MCL, the  language used by the system to control
          and format "customized" menus. This section explains the language
          in detail with several examples.

Part III  Explains all of the steps necessary to construct a menu. It gives
          diagnostic support in all of the relevant areas to get you out of
          any trouble that you may find yourself in.

Part IV   "Teaches" you how to use the supplied programs to maximum advantage
          and to create the best menu  system  to suit your expanding and
          changing needs.

Part V    The Appendices, contain valuable reference material about the
          system, summarizes MCL and the special commands used throughout
          the system. It also contains sections on Customer Support
          and the Update Policy.

It is suggested that you become familiar with this manual BEFORE you begin
using the system. After that the Appendices and other reference sections
should keep you up and running. So take a few minutes now and get to know
your new system - and remember that a little extra time spent now may save
you hours later on.

                                - 5 -

  PART I  / GETTING STARTED

 1 / Description of the SELECT I MENU SYSTEM...........   6
 2 / Initial Setup.....................................   6
 3 / Using SIMS........................................   7
 4 / The SAMPLE menus..................................   8

                                - 6 -

  1  / Description of the SELECT I MENU SYSTEM

SIMS can current only be used if a program allowing for the
editing of text files is already available. Since an editor
is a standard part of most systems, this should not present
a problem (EDLIN will suffice). The menu designer  uses the
editor to create a source file for SIMS. The file then goes
through the  conversion program MAKEMENU. Any errors in the
menus are then reported and can easily  be corrected. Menus
are then  ready for  execution  using  the  run-time module
incorporated in SIMS. The OPTIONS coded  into the  menu are
now accessible to the user.

  For example:

A company  may  regularly  use a word processor, accounting
programs, spreadsheets, and a data base program. With SIMS,
access  to  these  programs is much faster, convenient, and
user-friendly. Now, any OPTION can be called up by the user
who  uses  the  menu  and  who  knows the  password if this
security  feature  has  been  implemented. Total freedom is
given to the menu creator  regarding the screen layout, and
the OPTIONS specified. An infinite number  of  menus can be
incorporated  into  the  system,  although  the  only limit
imposed is the available disk space.


  2  / Initial Setup

The files COMMAND.COM and EDLIN.COM are required in the current
directory for the supplied demo menus to operate fully.

To verify if the system is operational, under the DOS
ready prompt type MENU DEMO and press ENTER.

This will load and execute a demonstration menu that allows you
to use DOS commands, call other demonstration menus as well as
use EDLIN and MAKEMENU to create, edit, and run customized menus.
Follow the instructions, and go to the help menu if you run
into difficulties.

                                - 7 -
  3  / Using SIMS

SIMS is an easy to use, productive, and rapid way to gain access
to the programs on your disks. To optimize the access procedure
the "point" theory was incorporated. The special keys on the
cursor pad that are used to point the highlight bar are shown below:

                Home 7     Up  8         9
           |
    Enter <-    Left 4         5   Right 6

                End  1    Down 2         3

  Home         - Selects (Highlights) first OPTION entry
  End          - Selects last OPTION entry
  Up / Left    - Selects previous OPTION entry
  Down / Right - Selects next OPTION entry
  Enter        - Executes current highlighted OPTION

To invoke an UNLOCKED menu, type under DOS, MENU DRIVE:\PATH\MENUNAME
where DRIVE: is the drive, PATH is the path of the menu, and MENUNAME is the
execute (if AUTOENTER is on) the selection. Lowercase is automatically
converted to upper case, therefore no lowercase OPTIONs are allowed.
Sound is used in SIMS to indicate an error condition. The only non-fatal
errors to date are if an invalid password is entered or if a program
specified in an OPTION command is not found. After the "Beep" SIMS will
return to the select mode of the current menu. The fatal errors always "Beep"
and return to DOS. They can be found in Appendix B / Error Messages,
under SIMS run-time module Errors.


  TECHNICAL INFORMATION

SIMS is a memory resident program which reserves 12288 (12k) bytes of memory
for its use, including program (run-time) area. The menu is loaded into
the area immediately after the run-time module and executed. All video updates
are handled through BIOS interrupt calls for compatibilty.

Memory resident programs such as PRINT.COM, MODE.COM, ramdisks, spoolers,
and the like should be installed before SIMS is activated. SIMS uses
the load area as temporary storage and any program trying to reside there
permanently may be overwritten by the next program loaded.

  SIMS MEMORY MAP:

      Size:   Contents:
        4k    SIMS run-time module
        7k    Menu load space (actual size reported in MAKEMENU)
      + 1k    Data area
       12k    Total memory used by SIMS
      ???k    Program load area, remaining available RAM memory


     This map will change in the future, through rewrites and requests...

                                - 8 -

  4  / The SAMPLE menus

There are eight supplied demo menus in the SIMS archive. They demonstrate
the various aspects of the system and it's abilities. They are:


Name of Menu:   Function:
---------------------------------------------------------------------
DEMO            Master Demo Menu - connects all menus together

DEMOHELP        Master Demo Help - gives help for DEMO

CREATE          Creation Menu    - automates EDLIN / MAKEMENU process

VIDEODEM        Video Demo       - demonstrates video features

PROCDEMO        Procedure Demo   - demonstrates procedure features

USER            Blank Sample     - a user "fill in the blanks" menu

SECURDEM        Security Demo    - demonstrates security features

SPECIAL         Locked Menu      - used with SECURDEM menu



  DEMO MENU STRUCTURE



                          DEMO
                            |
                        DEMOHELP
      ----------+-----------+-----------+--------+--------
     |          |           |           |        |        |
  CREATE    PROCDEMO    VIDEODEM    PROCDEMO    USER    SECURDEM
                                                          |
                                                        SPECIAL


For further information on these menus, examine the menu source code,
or execute the menu from DOS.

                                - 9 -

  PART II  / MENU CONTROL LANGUAGE (MCL)

 5 / An Introduction to MCL............................  10
 6 / The VIDEO CONTROL Commands........................  11
 7 / The OPTION CONTROL Commands.......................  14
 8 / Procedures........................................  17
 9 / User Defined Fields...............................  18
10 / Special Commands..................................  19
11 / Effective MENU Creation...........................  20

                                - 10 -

  5  / An Introduction to MCL

MCL (Menu Control Language) is a versatile tool for creating, and
maintaining  user  MENUs. MCL  can be divided  into five distinct
command areas known as VIDEO CONTROL, OPTION CONTROL, PROCEDURES,
USER DEFINED FIELDS, and SPECIAL COMMANDS.

VIDEO CONTROL commands allow the user to create any screen design
or format required by the application. Because of this the format
can be adapted to suit a  variety  of business or personal needs.

Macro  commands  such as BOX, FIELD and FILL  simplify the screen
design process, while the color commands allow full exploitation
of the colors and video attributes that both the  Monochrome and
the Color Graphics adapter offer.

OPTION CONTROL commands tell the menu what  selections there are.
These options allow the user to create a list of options that can
be placed anywhere within the required format. This is done quite
simply by  adjusting the  coordinates of  the  OPTION command. It
should be  noted that it is necessary to use only OPTION commands
in this area.

The PROCEDURES allow additional MCL commands to be executed before
selection and before / after the execution of an OPTION.

The  USER DEFINED FIELDS  tell the menu  where to place important
control information. The five fields supported to date are:

TIME / DATE / KEYBOARD STATUS / PASSWORD / ARGUMENT

The SPECIAL COMMANDS tell  the  menu about the  configuration the
menu should take on, if it  should have integral security, and so
forth. There are only a few commands that apply in this category.


  GENERAL MENU STRUCTURE


                 Title Comments (optional)
                 Security LOCK  (optional)
                      Screen Setup
                      OPTION  list
               Extra Screen Setup (optional)
                   Procedures (optional)
                         END


Lowercase may be used for ALL commands. As an illustrative example both
of the  following  statements are legal  and perform the same function:

        UNDERLINE BRIGHT        underline bright

Regardless of the choice of case, in the OPTION statement, please use it
throughout the command. OPTION is case sensitive. "MENU" and "menu" will
work, but "Menu" will not, as it is not recognized as a reserved command.

                                - 11 -

  6  / The VIDEO CONTROL Commands

The colors available are:

DIM    - BLACK   BLUE   GREEN   CYAN   RED   MAGENTA   BROWN   WHITE
BRIGHT - GREY    BLUE+  GREEN+  CYAN+  RED+  MAGENTA+  YELLOW  WHITE+

There are several commands which are specific to this system. Among
these are the following:

.(x,y)"TEXT"         - Using this command, the creator can place text
                       at any coordinates on the screen.

                       Eg.  .(50,9)"Title for menu"
                            ."delimited text"

                       A color change statement - FOREGROUND, BACKGROUND,
                       INVERSE, NORMAL, INVISIBLE, and SETATTR may be placed
                       in between the above two types of text commands.

                       Eg.  NORMAL
                            SETATTR
                            .(10,10)"NORMAL "
                            INVERSE
                            SETATTR
                            ."INVERSE TEXT"
                            NORMAL
                            SETATTR
                            ." NORMAL AGAIN"

BACKGROUND(c)       - Will immediately change the internal background
                      color to c. To set the color, use a SETxxxx
                      command (see below). Only the 8 DIM colors may be
                      used for background in the current version.

                      Eg.  BACKGROUND(GREEN)

BLINK c             - Blink is a command which sets or resets the
                      current blink status, c can be ON or OFF.

                      Eg.  BLINK ON

BOX(a,b)-(x,y),"z"  - Will place a box along the edges defined by the
                      top left hand coordinates (a,b) to the bottom
                      right coordinates (x,y), using ASCII character
                      z for the operation.

                      Eg.  BOX(3,8)-(30,15),"*"

                                - 12 -

BORDER(c)           - Will immediately change the screen border color
                      (Color/Graphics adapter only) to c. It is best
                      to leave this as the last statement before the
                      END (and before the procedures if they are being used)
                      so that the screen updates are invisible to the viewer.
                      This command does NOT affect the Monochrome or EGA
                      adapter cards.

                      Eg.  BORDER(MAGENTA)

FIELD(a,b)-(x,y)    - Will fill the area defined by (a,b)-(x,y) with
                      spaces, using the current write attribute, SETATTR.
                      This command is used to clear a box of text.

                      Eg.  FIELD(0,0)-(79,24)

FILL(x,y),"z",s     - This will fill the area starting at (x,y) with
                      ASCII character "z", for s characters. If the
                      length specified exceeds the right side of the
                      screen (x = 79), then it will continue on the
                      next line at the left margin (x = 0).

                      Eg.  FILL(0,6),"=",80

FOREGROUND(c)       - Will immediately set the internal foreground
                      color to c. To perform a screen action using
                      the new color, a SETxxxx operation must be
                      performed where xxxx is the requested attribute.

                      Eg.  FOREGROUND(BLUE+)

INVERSE             - Immediately sets internal foreground to BLACK,
                      background to WHITE, and blink status to OFF.

                      Eg.  INVERSE

INVISIBLE           - Immediately sets internal foreground to BLACK,
                      background to BLACK, and blink status to OFF.

                      Eg.  INVISIBLE

NORMAL              - Immediately sets internal foreground to WHITE,
                      background to BLACK, and blink status to OFF.

                      Eg.  NORMAL

SCREEN(m)           - Clears the screen and tells the video adapter
                      if it should use color burst or not. The valid
                      options for m (mode) are B (burst) and N (noburst).
                      Depending on the type of monitor used, N may improve
                      overall screen clarity.

                      Eg.  SCREEN(N)

                      NOTE: If SCREEN has been set OFF by the SCREEN OFF
                      command, then the above command will perform a null
                      operation until a SCREEN ON command is issued.

                                - 13 -

SETARGUE            - Using the internal color settings, the current
                      argument field color is set. Default color is NORMAL.

                      Eg.  SETARGUE

SETATTR             - Using the internal color settings, the current
                      write attribute color is set. Default color is NORMAL.

                      Eg.  SETATTR

SETDATE             - Using the internal color settings, the current
                      date field color is set. Default color is NORMAL.

                      Eg.  SETDATE

SETHIGH             - Using the internal color settings, the current
                      highlight bar color is set. Default color is INVERSE.

                      Eg.  SETHIGH

SETOPTION           - Using the internal color settings, the current
                      option text color is set. Default color is NORMAL.

                      Eg.  SETOPTION

SETPASS             - Using the internal color settings, the current
                      password field color is set. Default color is
                      INVISIBLE.

                      Eg.  SETPASS

SETSTAT             - Using the internal color settings, the current
                      status field color is set. Default color is NORMAL.

                      Eg.  SETSTAT

SETTIME             - Using the internal color settings, the current
                      time field color is set. Default color is NORMAL.

                      Eg.  SETTIME

UNDERLINE c         - Immediately changes the internal foreground to
                      underline on the Monochrome Adapter. The valid values
                      for c are DIM or BRIGHT, for the desired underline
                      intensity. (It appears as BLUE or BLUE+ on the
                      Color Graphics Adapter).

                      Eg.  UNDERLINE BRIGHT

                                - 14 -

  7  / The OPTION CONTROL Commands

For any MENU to be effective, there must be options to select from.
In this system, there are three statements that control these selections:

OPTION START             - denotes the start of the option block.

OPTION END               - denotes the end of the option block.


OPTION(k,x,y),"t","c",o  - places an OPTION in the OPTION table.
                           Details on the parameters below.

k   - Key. Number (0-9), punctuation (!@#$%^&*()-_=+[]{};:'"`~,.<>/?\|).
      Function keys are defined by (F1-F10). Alternate, Control, and
      Shift Function Key may be specified by applying a prefix of A,C, or
      S respectively. Eg. AF5 is Alt-F5. Escape may be specified by ESC,
      Insert by INS, and Delete by DEL. No lowercase is allowed here, as
      it will automatically converted to uppercase during conversion.

x,y - Coordinates to place option text "t". This is in the standard range
      (0-79,0-24) and is written to the screen using the OPTION attribute
      To set this color use SETOPTION, to set the highlight bar use SETHIGH.

"t" - Option text. Can be up to 80 characters in length. The text is
      highlighted when it is the current selected OPTION.

"c" - Command to be executed upon invocation of the option. It can be
      no more than 80 characters in length.

      There are four types of commands that may be executed:

      1) Program. This includes batch files and internal DOS commands.

        Format:  "DRIVE:\PATH\FILENAME.EXT PARAMETERS"

        For batch files and internal commands use the following:

        "DRIVE:\PATH\COMMAND.COM/C XXXXX PARAMETERS"

        Where DRIVE is the drive where the program is located on;
        PATH is the path related to the current directory;
        FILENAME.EXT is the FULL filename (It will NOT assume
        an extension of .EXE or .COM), and PARAMETERS are any parameters
        that may be required by the program. For the special case of
        DOS batch / internal commands, XXXXX represents the command.
        and DRIVE:\PATH is where the system can find a copy
        of COMMAND.COM, the command processor.

        Eg.1 "\CHKDSK.COM/F/V" will load and run CHKDSK from the root
             directory, with the options /F/V.

        Eg.2 "A:\COMMAND.COM/C DIR B:/W" will give a wide directory
             of the B: drive, assuming COMMAND.COM is on drive A:, in the
             root directory.

                                - 15 -

      2) MENU. Another menu may be called in and control given to it.

        Format: "MENU DRIVE:\PATH\MENUNAME"

        Where DRIVE is the drive in which the menu is located;
        PATH is the path, and MENUNAME is the .MEN menu to load.

        Eg.1 "MENU \DAVE" will load DAVE.MEN from the root directory
             and transfer control to it.


        Eg.2 "MENU LEVEL2" will load LEVEL2.MEN from the current
             directory and transfer control to it.


      3) EXIT to DOS. This returns the user to DOS (optional).

        Format: "EXIT"

        This will release the memory taken by SIMS and return to
        the DOS prompt. This is the ONLY way to return to DOS, barring
        a fatal error condition, see Appendix B / Error Messages.
        CNTL-ALT-DEL will reboot the computer; CNTL-BREAK has no effect on
        the SIMS environment and will NOT return the user to DOS.


      4) NULL operation. This is primarily used to debug screen layouts
        before the OPTIONs are created. It is also used in cases where
        text may be displayed in an procedure, and no operation is to take
        place, as in help and demonstration menus, hence a NULL operation.

        Format: "NULL"

        This will do absolutely nothing when selected.


A change directory (CD) prefix may be included in your command string.

      Eg.1 "CD \,EXIT" will bring the user to the root directory and exit
           to DOS.

      Eg.2 "CD \GAMES,MENU FUN" will bring the user into the GAMES directory
           and execute the menu FUN.

      Eg.3 "CD \MANAGER\ACCT,SERIOUS.EXE/P/D" will bring the user into the
           \MANAGER\ACCT directory and execute the program SERIOUS.EXE,
           passing it the parameters /P/D.

All of the special commands - MENU, EXIT, NULL, and CD - must be either
in all upper case or all lower case. "MENU MASTER and "menu MASTER" are
both valid, but "Menu MASTER" is not. Likewise "EXIT" and "exit" are legal
but not "Exit". The same applies to NULL and CD.

                                - 16 -

o   - Options. There are eight options available with each OPTION
      statement. There are (in the 12 phases of execution):

      1.  <<< SELECT PROCEDURE >>>  (optional)

      2.  ,pass="ABC"  - Activate password of "ABC" before execution.
                         Passwords may be up to eight characters long.

      3.  <<< EXECUTE PROCEDURE >>>  (optional)

      4.  ,argue      - Passes an external argument to the program.
      5.  ,clear      - Clears the screen.
      6.  ,novideo    - Turns off the video. Restore with DOS CLS command.
                        (The Monochrome display will not restore the screen.)
      7.  ,noclock    - Disable displaying of time.,

      8.  <<< EXECUTE PROGRAM / MENU / NULL OPERATION >>>

      9.  ,return     - Returns to directory the system was in before execution
                        otherwise stay in the current directory.
      10. ,beep       - Chirp the speaker after program is complete.
      11. ,wait       - Prompts the user to "Press a key to continue..."

      12. <<< DONE PROCEDURE >>>    (optional)

The MENU and EXIT commands allow only the password option (,pass="ABC")
to be used as an option in the OPTION command.

Various OPTION examples:

option(F1,10,10)" This is F1 ","MENU MASTER",pass="DAVE"

This option will load and transfer control to the menu MASTER if the
correct password of DAVE is entered on the password input field.

option(AF2,10,11)" This is Alt-F2 ","\COMMAND.COM/C DIR/P",clear,wait

This option will load COMMAND.COM from the root directory on the current drive
and then will execute a DIR/P. The screen is cleared before execution and a
message is displayed to "Press a key to continue" after execution.

option(Q,10,12)" This is Q ","CD \SYSTEM,UTIL.COM",return

This option will move to the \SYSTEM directory and execute the program
UTIL.COM. After execution it will return to the directory the system was
in prior to execution.

option(ESC,10,13)" ESC to DOS ","CD \,EXIT"

This option will move to the root directory and exit to DOS.

option(F9,15,20)" Move to Root Directory ","CD \,NULL"

This option will bring the user to the root directory and return to the
select mode of the current menu.

                                - 17 -

  8  / Procedures

Procedures are sets of actions associated with a specific OPTION that
will be executed upon a certain condition. SIMS supports three classes
of procedures - SELECT , EXEC, and DONE.

SELECT  procedures occur when the option is highlighted (selected).

EXECUTE procedures occur just prior to the program/menu loading,
        or the execution of a NULL operation.

DONE    procedures occur when program execution is complete.
        A DONE procedure is not applicable to a loaded menu.

Procedures must follow the OPTION section and have nothing after them,
except for the END statement (See Introduction of MCL Commands).
They start with the PROC(key,type) statement where key is
the same key used in the OPTION command the procedures is to be linked
to, and type is either SELECT, EXEC, or DONE dependent on the class
of the procedure. The procedure MUST be terminated by PROC END.

An OPTION command may have any combination of procedures linked to it.
This could allow very complicated job streams to be run. For an illustration
of this complexity try executing the PROCDEMO menu by typing MENU PROCDEMO
and pressing Enter (under the DOS ready prompt).

OPTION commands and nested procedures are NOT allowed. This is a very
simple MCL command re-routing which should not be abused or undesired
results may result.

Example Procedures:

    PROC(F3,SELECT)       PROC(F3,EXEC)              PROC(F3,DONE)
    FILL(0,5)," ",80      SCREEN(B)                  SCREEN(B)
    NORMAL                NORMAL                     .(0,0)"BACKUP DONE"
    SETATTR               SETTIME                    .(0,2)"Remove diskette"
    .(0,5)"BACKUP FILES"  TIME(65,0)                 .(0,3)"and press Enter"
    PROC END              .(0,0)"*** OPTION F3 ***"  WAIT(ENTER)
                          .(0,2)"Insert diskette"    PROC END
                          .(0,3)"and press Enter"
                          WAIT(ENTER)
                          PROC END

The first procedure, a SELECT procedure, will display it's information text
after erasing the line that was there previously. This can be an effective
way of providing additional information on the current highlighted OPTION
for the user, without necessarily executing the current selection.

The second procedure, an EXEC procedure, will clear the screen, make the time
the NORMAL color, place it in the upper right-hand corner, and displays a title
with further instructions. SIMS then waits for the user to press Enter
before execution commences (He could press ESC to return to the SELECT
mode of the menu).

The third procedure, a DONE procedure, will, after execution of the program,
clear the screen, display a title and instructions, and will wait for the
user to press Enter before returning to the menu.

                                - 18 -

  9  / User Defined Fields

ARGUE(x,y,l)        - Defines where the current argument field is
                      located and its length l. The default argument
                      field is 40 characters long, located at (15,24).

                      For example,
                      If l=7 then the attribute field is
                      "_______"


DATE(x,y)           - Defines where the current date is located. The
                      default field is 17 characters long, positioned
                      at (30,0) (default).

                      Format: " Tue 19-Jun-1984 "

                      If SETDATE is INVISIBLE (black on black), then
                      the displaying of the date is disabled.

PASS(x,y)           - Defines where the current password field is
                      located. The field is eight characters long,
                      positioned at (30,22) (default).

                      Format: "________"

STAT(x,y)           - Defines where the current keyboard status field
                      is located. The field is 11 characters long, positioned
                      at (65,24) (default).

                      Format: "CAP NUM SCR"

                      If SETSTAT is INVISIBLE (black on black), then
                      the displaying of the status is disabled.

TIME(x,y)           - Defines where the current time field is located.
                      The field is 13 characters in length, positioned
                      at (65,0) (default).

                      Format: " 07:45:00 PM "

                      If SETTIME is INVISIBLE (black on black), then
                      the displaying of the time is disabled.

                                - 19 -

  10 / Special Commands

' remark            - Places a remark in the source text file.
                      A comment has no effect on the menu whatsoever,
                      but is used for internal documentation.

                      Eg.  ' SUPER-MENU Version 1.00
                           ' Written by David Stewart 31st July, 1984

AUTOENTER c         - Will set the AUTOENTER status to c. Valid modes
                      are ON and OFF. The default is ON. This command
                      specifies whether Enter must be pressed after the
                      selection of an OPTION.

                      Eg.  AUTOENTER OFF

LOCK                - Prevents execution of the menu directly from DOS.
                      This disallows entry to the menu except by passing
                      through prior menus (That might have security
                      or the like active in them). The LOCK command is
                      usually placed near the front of the menu for
                      easy identification, although it need not be.

                      Eg.  LOCK

END                 - Indicates the end of the menu. It ends the
                      menu conversion at this point.

                      Eg.  END

KEYCLEAR            - Clears the keyboard buffer upon execution of the
                      command. This is used to prevent "type ahead" in
                      important menus, such as those which have OPTIONS
                      that delete information.

                      Eg.  KEYCLEAR

SCREEN c            - Allows or disallows consequent SCREEN(m)
                      statements to be executed, c can be either
                      ON or OFF. Default is ON.

                      Eg.  SCREEN OFF

WAIT(key)           - Suspends menu execution until specified key is
                      pressed. It uses the same key format as the OPTION
                      command except that two new keys, ENTER and ANY are
                      included. The ESC key is always active and will, if
                      the WAIT(key) statement is inside an EXEC procedure,
                      reinvoke the menu where it left off before the
                      selection was executed.

                      Eg.  WAIT(ENTER) will wait for Enter to be pressed.
                           WAIT(F1)    will wait for F1 to be pressed.
                           WAIT(ANY)   will wait for any key to be pressed.

                                - 20 -

  11 / Effective MENU Creation

To create an effective MENU, you first must have a well planned layout.
There are several steps required in this layout.

First, separate and list all of the applications that are desired to be
placed under the MENU. If your application involves subdirectories then
refer to Section 16 / Using Subdirectories for more information.

For example on your hard disk you may have the following layout:

                        ROOT DIRECTORY
                             |
                        COMMAND.COM
                        CHKDSK.COM
                        FORMAT.COM
                        (DOS COMMANDS)
                             |
            -----------------+-----------------
           |                 |                 |
     WORD PROCESSING     ACCOUNTING         RECREATION

     \WORDPRO            \ACCT              \FUN

     WP.BAT              START.EXE          CRIBBAGE.BAS
                                            POKER.EXE
                                            INVADE.COM

Above is a list of the directories and the programs and commands that
we wish to place into menus. Two approaches may be used, a single
menu or multiple menus.

If a single menu is used then all of the OPTIONS for the system would
appear on the same screen, but if multiple menus are used then each
separate application would have it's own menu screen.

OPTION coding would come next. An example from each application is
given below (assuming that the system is under one menu).

OPTION(1,10,10)" WORD PROCESSING ","CD \WORDPRO,\COMMAND.COM/C WP",clear,return
OPTION(2,10,11)" ACCOUNTING ","CD \ACCT,START.EXE",return
OPTION(3,10,12)" CRIBBAGE ","CD \FUN,\BASICA.COM CRIBBAGE",return

Screen Design is the next step in menu design. The actual layout is
entirely up to you and your imagination. The SAMPLE menu, USER, has been
provided to give you a starting point in your screen layout design.
This is the most artistic part of the design process, but try to remember
that ultimately the menu will be the users tool, not a work of art.

Create, debug, modify, and implement the menu using the steps described in
next section, PART III / MAKING A MENU.

Effective MENU creation is a difficult process. Study the demonstration
menus in the archive and experiment with them. The road to more productive
transfer from program to program is open, but it is up to YOU.

                                - 21 -

  PART III / MAKING A MENU

12 / Creating a SOURCE MENU............................  22
13 / The MAKEMENU Program..............................  23

                                - 22 -

  12 / Creating a SOURCE MENU

The editor is used here to create, modify, and perfect source menu files.
DOS's EDLIN will work adequately, although if another editor is used it
must follow the following quidelines:

    - Standard ASCII (extended characters >127 are allowed)

    - Tabs and spaces may be placed before the command if it is not
      left-justified on the line.

    - ASCII character 026 may NOT be included in the source file, except
      to provide its normal function of end of file indicator.

  EDITOR USE:

    - If the editor is EDLIN then refer to the DOS manual for proper
      editing and file loading / saving instructions.

    - If the editor is not EDLIN, refer to the editor's instruction
      manual for more information on how to use it.

    - Backup files are preferred, as they provide limited security for
      the source code in the system, i.e. keep menu source code off of
      the system if it involves passwords and sensitive data. See section
      16 / Passwords and Security for more information.

                                - 23 -

  13 / The MAKEMENU Program

MAKEMENU.EXE is the menu conversion program. The SIMS run-time module
requires that menus be encoded in a special format before execution
can take place. This conversion takes the source file and creates a
.MEN file with the same filename. The resultant .MEN file will almost
always be smaller, the result of the conversion. Passwords will be
further encoded so that prying eyes cannot corrupt the system's
integrity.

The MAKEMENU program may be called in one of two ways:

    1) Place parameters directly on the DOS command line.

       Eg. MAKEMENU sourcefile,listfile

    2) Answer the programs prompts.

       Eg.  MAKEMENU

       (The screen clears and it displays the following:)

       MAKEMENU File Converter V1.00   PUBLIC DOMAIN
       (c) 1984 David Thomas Stewart   SHAREWARE
       $15 fee suggested. CompuServe ID# 73220,1365

       Source Filename [.SRC]:

       (Respond to the prompt with the name of the source file).

       List File [NUL]:

       (Respond to the prompt with the name of the list file).

NOTE: All of the files must reside in the current directory.
      No paths are allowed, as they are not supported in this version.

The Source Filename is the name of the file you wish to convert.
It assumes an extension of .SRC if no other is specified.

The List File is where the report on how the menu is doing should go.
It assumes the NUL device (no output) if no file is specified.

The supported devices for input/output are: CON, PRN, AUX, COM1, and COM2.

The MENU will now be converted, any errors reported immediately after the
offending line and the space left in the menu returned. If there were indeed
errors, refer to the next section for information on debugging your menu.

The screen will now show:

Any more files to convert (Y/N)?

(Answer Y for another conversion, N to exit to DOS).

                                - 24 -

  PART IV  / MENU MANAGEMENT

14 / Using Subdirectories..............................  25
15 / Using BATCH Processing and DOS Commands...........  26
16 / Security and Passwords............................  28
17 / Arguments.........................................  29

                                - 25 -

  14 / Using Subdirectories

Subdirectories may be used in the SIMS environment if some simple
guidelines are followed. First, each subdirectory must be proceeded
by a backslash (\).

Secondly, the OPTION that calls this subdirectory must include the
full pathname, dependent on the directory the system is currently in
at the time the OPTION is invoked.

Thirdly, if a return to the original directory is desired, then specify
,return as an option in the OPTION command. This option applies only
to programs being loaded, not loading menus. To do a directory change to
a menu and then to return to the original menu place the following logic
in your menu source code:

SOURCE MENU (starting point):

    option(k,x,y)"LOAD MENU DEST","CD \DESTDIR,MENU DEST"

DESTINATION MENU (called from Source Menu):

    option(k,x,y)"RETURN to Source Menu","CD \SOURDIR,MENU SOUR"

Where SOUR and SOURDIR are the Source Menu's path and name,
and DEST and DESTDIR are the Destination Menu's path and name.

Lastly, a rigourous test of all possible actions must be taken to verify
the proper operation of the MENU.

                                - 26 -

  15 / Using BATCH Processing and DOS Commands

To use BATCH Processing on the system, all that is required is that the
names of the files be known. SIMS allows a special option to be specified
called ,novideo. This option can only be used for the Color/Graphics
Adapter. To use this special option the first two lines of your BATCH
file must be:

       ECHO OFF
       CLS

If you use the monochrome display then you can use the above format as
well, just specify ,clear instead of ,novideo in every instance.

In all of the following options COMMAND.COM is assumed to be found on the
default drive, in the root directory. Redirection may be specified in the
format described in section 7 / The OPTION CONTROL Commands.

To execute a BATCH file a secondary copy of the command interpreter must
be loaded. This is done in the OPTION command by:

OPTION(k,x,y)"TEXT","\COMMAND.COM/C drive:\path\batchname",novideo,wait,beep

Where drive is the drive, path is the path, and batchname is
the name of the BATCH file. The options at the end ,wait and ,beep
allow the MENU to alert you upon completion of the BATCH file.

For example, the OPTION command:

OPTION(F1,10,10)"Directory Info","\COMMAND.COM/C INFO",novideo,wait

will give a wide/paused directory and run CHKDSK if used with this
batch file INFO.BAT:

    ECHO OFF
    CLS
    DIR/P/W
    CHKDSK


                                - 27 -

DOS Commands may be included as a replacement for drive:\path\batchname.

Example:

To take a directory...

OPTION(F1,10,10)"DIRECTORY","\COMMAND.COM/C DIR",clear,wait

To run a specified DOS Command:

OPTION(F2,10,11)"DOS COMMAND","\COMMAND.COM/C ",clear,argue,wait

(This will prompt the user to fill in the data after \COMMAND.COM/C).

The options ,clear and ,wait should be used to clear the
screen before and wait for the user to read the information on the
screen after execution of the DOS command. Do not use ,novideo,
unless you wish the screen to be entirely blank during execution.

An entirely new copy of the command interpreter may be invoked by:

OPTION(F3,10,12)"Another DOS","\COMMAND.COM",clear

(To return to the current SIMS menu, use the DOS command EXIT).

This will appear to the user as he were in DOS, although it is actually
only an overlay on SIMS. The DOS command EXIT will return the user
back to SIMS after all operations are complete.

                                - 28 -

  16 / Passwords and Security

Security of the system may be performed in three ways:

  LOCKED MENUS:

Menus may be locked, that is, preventing direct execution from DOS, by
specifying a LOCK statement in the menu. It should be placed near the
front of the menu for easy location, although it may reside anywhere in
the menu code. This form of protection prevents an unauthorized user to
bypass previous security menus (involving passwords).

  PASSWORDS:

Passwords may be implemented by specifying the ,pass="xxxxxxxx" option
in the OPTION you wish to protect. The password may be up to eight characters
in length (xxxxxxxx). The location and color of the password field (default
color is INVISIBLE) may be specified by the PASS(x,y) and SETPASS commands.
This form of protection prevents an unauthorized user to execute a particular
OPTION whether it call a program, transfer to another menu, exit to DOS, or
perform a NULL operation. An incorrectly entered password will sound a beep
and will clear the field to the SETATTR color. Future versions of SIMS may
utilize this space to warn users or provide further information through
special procedures.

  SEPARATE SOURCE CODE:

This is a method of security that is NOT provided by SIMS, but instead must
be maintained by the menu creator. It involves separating the source code
from the converted menus, off of the machine on a separate diskette, kept
in a safe place. This prevents users from examining and perhaps modifying
existing menus in order to gain access to them. This security feature also
provides limited data backup.

                                - 29 -

  17 / Arguments

Arguments are additions to existing programs, to specify data or
parameters. The field ARGUE(x,y,l) and SETARGUE are used to define where
the data window is to be placed, its length, and its color. The following
is an illustration of an ARGUMENT:

  SAMPLE MENU:

       SCREEN(N)
       INVERSE
       SETARGUE
       ARGUE(10,18,40)
       OPTION START
       OPTION(F1,10,10)"An example of arguments","\CHKDSK.COM ",argue,clear
       OPTION(F2,10,11)"Exit to DOS","EXIT"
       OPTION END
       END

The first OPTION will prompt you for the data to be placed after the space in
"\CHKDSK.COM ". For example if you responded to the prompt with a /F/V and then
pressed Enter, then the actual OPTION would look to SIMS as "\CHKDSK.COM /F/V".

To exit from an undesired argument back into the current menu's select mode,
press the ESC key. This will re-invoke the current menu and return control to
you once again.

                                - 30 -

  PART V  / APPENDICES

Appendix A / Summary of MCL Reference Commands.........  31
Appendix B / Error Messages............................  33
Appendix C / Customer Support..........................  35

Index..................................................  36

                                - 31 -

  Appendix A / Summary of Reference MCL Commands

Type Command:                 Argument(s):                 Function:
----------------------------------------------------------------------------------------------------------
SP   ' text                   text (optional)              Denotes remark
VI   .(x,y)"text"             coords,text                  Prints text at specified coords
VI   ."text"                  text                         Prints text at last cursor position
UF   ARGUE(x,y,s)             coords,length                Places argument field at specified coords
SP   AUTOENTER                ON / OFF                     Changes AUTOENTER status
VI   BACKGROUND(c)            color                       Changes background color
VI   BLINK                    ON / OFF                     Changes blink status
VI   BOX(a,b)-(x,y),"z"       tl coords,br coords,char     Draws a rectangular box
VI   BORDER(c)                color                       Changes & Sets border color
UF   DATE(x,y)                coords                       Places date at specified coords
SP   END                      none                         Denotes the end of the MENU
VI   FIELD(a,b)-(x,y)         tl coords,br coords          Fills rectangular area with attribute
VI   FILL(x,y),"z",s          coords,char,length           Fills area with character
VI   FOREGROUND(c)            color                       Change foreground color
VI   INVERSE                  none                         Change to INVERSE color
VI   INVISIBLE                none                         Change to INVISIBLE color
SP   KEYCLEAR                 none                         Clears keyboard buffer
SP   LOCK                     none                         Prevents execution of menu from DOS
VI   NORMAL                   none                         Change to Normal color
OP   OPTION(k,x,y),"t","c",o  key,coords,text,command,opt  Places specified OPTION into table
OP   OPTION                   START / END                  Denotes START and END of OPTION block
UF   PASS(x,y)                coords                       Places password field at specified coords
OP   PROC(k,m)                key,SELECT/EXEC/DONE         Denotes the start of a procedure
OP   PROC END                 none                         Denotes the end of a procedure
VI   SCREEN(m)                B/N                          Sets current screen mode
SP   SCREEN                   ON / OFF                     Allows / Disallows SCREEN(m) command
VI   SETARGUE                 none                         Sets current argue attribute
VI   SETATTR                  none                         Sets current write attribute
VI   SETDATE                  none                         Sets current date attribute
VI   SETHIGH                  none                         Sets current highlight attribute
VI   SETOPTION                none                         Sets current option attribute
VI   SETPASS                  none                         Sets current password attribute
VI   SETSTAT                  none                         Sets current status attribute
VI   SETTIME                  none                         Sets current time attribute
UF   STAT(x,y)                coords                       Places status field at specified coords
UF   TIME(x,y)                coords                       Places time at specified coords
VI   UNDERLINE                DIM / BRIGHT                 Changes underline status
SP   WAIT(k)                  key                          Suspends execution of menu until key is pressed

Legend:

VI - Video Command
SP - Special Command
UF - User Defined Field Command
OP - Option or Procedure Command

                                - 32 -

color  - A valid color. One of the following:

         BLACK BLUE  GREEN  CYAN  RED  MAGENTA  BROWN  WHITE
         GREY  BLUE+ GREEN+ CYAN+ RED+ MAGENTA+ YELLOW WHITE+

coords  - Screen coordinates (a,b),(x,y)
          a,x - Representative of columns across screen (Range 0-79)
          b,y - Representative of rows along screen (Range 0-24)

         (tl - Top left corner, br - Bottom right corner)

key     - Key. Can be any keyboard key (A-Z, 0-9, Punctuation)
          a function key (F1,F2...F9,F10), ESC, INS, or DEL to
          activate the OPTION selection. A,C,S are the function key
          prefixed for Alt, Control, and Shift function keys.

char    - ASCII character to use for an operation. Any ASCII character
          may be used, except 026d (Used for End of File Indicator).

text    - Text to be displayed at specified cursor coordinates. May also
          be OPTION selection text.

length  - Number of characters to place on screen. (FILL)

command - Command for option. May specify a filename, E.G. "A:\JUMP.EXE",
          or a menu command as specified below:

          MENU xxxxxxxx - Transfer control to menu xxxxxxxx  Eg. "MENU SECOND"
          EXIT          - Exit to DOS                        Eg. "EXIT"
          CD \path,     - Used to change directory.          Eg. "CD \DAVE,xxxxx"

options - Optional tasks to be performed for a desired program execution.
          The eight options available (in order of execution) are:

          <<< SELECT PROCEDURE >>>

          ,pass="password"  - Allows entry only with password.

          <<< EXEC PROCEDURE >>>

          ,argue            - Prompts for arguments before loading.
          ,clear            - Clear the screen before loading (border too).
          ,novideo          - Resets video OFF (Assumes ,clear).
          ,noclock          - Disables displaying of clock.

          <<< EXECUTE PROGRAM / MENU / NULL OPERATION >>>

          ,return           - Returns to the directory system was in
                              before execution.

          ,beep             - Chirps speaker for attention after execution.
          ,wait             - Waits for a key after execution.

          <<< DONE PROCEDURE >>>

none    - There are no options (implicit).

                                - 33 -

  Appendix B / Error Messages

MAKEMENU Conversion Errors

Error:                           Reason:
------------------------------------------------------------------------------
Syntax Error                     The converter did not understand the line.

Missing Bracket                  There is a missing bracket in the line.

Missing Comma                    There is a missing comma in the line.

Cursor Values out of range       Cursor values are invalid.
                                 The valid ranges are (0-79,0-24).

Illegal SCREEN Mode              Illegal SCREEN Mode. Modes are B/W and COLOR.

Illegal Color                    Illegal color. See Appendix A for colors.

Illegal BLINK Mode               Illegal BLINK Mode. Valid modes are ON & OFF.

No End statement                 Menu was not terminated with an END.

No OPTION START statement        No OPTION START statement exists in the menu.

No OPTIONS specified             No OPTIONS were specified in OPTION block.

MENU Too Large                   Menu is too large to manage.
                                 Split into two or more menus (overlays).

Illegal key specified            Key specified in option statement is bad.
                                 See OPTION command for keys.

Illegal OPTION field specified   Option in OPTION statement is invalid.
                                 See OPTION command for options.

Illegal UNDERLINE Mode           Illegal UNDERLINE Mode.
                                 Valid Modes are DIM and BRIGHT.

Bad Procedure Link               Procedure has attempted to link
                                 to a non-existent OPTION.

Bad Procedure Mode               Bad Procedure Mode.
                                 Valid Modes are SELECT, EXEC, and DONE.

Bad Procedure Data               There is an illegal statement
                                 in the procedure.

Bad Text Delimiter               There is a missing or invalid
                                 delimiter in the text line.

                                - 34 -

MAKEMENU Hardware Errors

Error:                           Reason:
------------------------------------------------------------------------------
xxxxxxx.xxx not found            The source file was not found.
Device I/O Error.                The LIST device is experiencing difficulties.
Diskette Full.                   The diskette is full.
Bad File Name.                   A bad filename was entered.
Device Unavailable.              Attempt to LIST to a non-existent device.
Diskette Write Protected.        Attempt to MAKEMENU on a writeprotected disk.
Disk Drive Not Ready.            Diskette missing or drive door not closed.
Disk Media Error.                There is a media problem on the disk.


SIMS run-time module Errors

Error:                           Reason:
------------------------------------------------------------------------------
Incorrect DOS Version.           SIMS does not support this DOS version.
Specified Menu Not Found.        SIMS could not find the desired menu.
Errors found in Menu.            SIMS could not execute this menu.
Invalid MENU Specified           The menu file is of a foreign format.
Attempted Security Violation     SIMS was told to load a LOCKED menu from DOS.

                                - 35 -

  Appendix C / Customer Support and Updates

As I said in the introduction, I will only offer advice and technical
support to those who contribute via the SHAREWARE concept.  Users who do
contribute will be notified when updates and new products are available.
Anyone wishing to offer advice and suggestions are most welcome to do so.

I may be reached on CompuServe at ID# 73220,1365, or on The PEARL BBS in
Waterloo, Ontario, Canada, under my name, David Stewart.

Telephone support (or any support for that matter) is available to
registered users only. My voice line is (519)-740-2878.

The most up to date version of SIMS is always available on The PEARL, which
may be reached at (519)-576-6754, 24 hrs. a day.  Please note that the
PEARL is a pay board (normally $25/year), but I have made arrangements
with the Sysop to obtain memberships for SIMS subscribers who include
an extra five dollars with their subscription, along  with their first
name, last name, and a password to use on the board. One restriction must
be made on this offer... you must live at least 125 miles outside the
Kitchener-Waterloo, Ontario, Canada area in order to qualify. You will be
validated immediately upon my receiving your cheque or money order.

Even if you do not wish to have a PEARL membership, you can still see what
changes and revisions have been made to date by going to the bulletins
section of the board. You do not have to be a registered PEARL user to use
this feature.

Those of you who register your copy of SIMS and wish to receive an update to
the latest version (from me and not The PEARL), please include an extra $10.00
with your registration to cover materials and shipping costs. I will send you
the latest version of SIMS upon receipt of your registration. Please specify
the version of SIMS that you currently have.  If there have not been any
updates made since your version, I will wait until the next release of SIMS
to send your update.

Optionally, you may include a diskette and diskette mailer with your
registration plus $2.50 to cover shipping costs, and I will send you the
latest version of SIMS.

If you do have a question, or a bug report, or whatever, in your
correspondence, please indicate the following:

1)  The version of SIMS that you are using.
2)  Your hardware configuration (Model, memory size, printer, etc.)
3)  Any resident software that you have loaded in memory at the time.
    (i.e. Sidekick, SuperKey, Disk Caches, Print Spoolers, Ramdisks,
    etc.)

This information will help me to track any problems and to suggest
reasonable solutions to your problems.

    David Thomas Stewart
    Synergy Development
    P.O.BOX 3132
    Cambridge, Ontario
    Canada N3H 4S6
    Voice: (519) 740-2878

                                - 36 -

  Index

Arguments, 29
Batch Processing, 26
Colors, 14,37
Compatibility, 4
Cursor Keys, 7
Customer Support, 35
Editors
    Compatibility, 22
    EDLIN, 22
Effective Menu Creation, 20
Error Messages, 33,34
Keys, 7,14
Layout, 10
MAKEMENU
    Description of, 4,23
    Usage, 23
MCL (Menu Control Language)
    OPTION CONTROL Commands, 14
    Procedures, 17
    Reference, 31
    Special Commands, 19
    Structure, 10
    User-Defined Fields, 18
    Video Commands, 11
Passwords, 28
Procedures, 17
Sample Menus, 8





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0895

     Volume in drive A has no label
     Directory of A:\

    SCOUT44  EXE    145202   8-04-90   7:56a
    -------- ---         5  12-04-87  12:47p
    CREATE   MEN       768   4-07-87   1:11p
    CREATE   SRC      1798   4-07-87   1:11p
    DEMO     MEN      1152   4-07-87   1:11p
    DEMO     SRC      3176   4-07-87   1:11p
    DEMOHELP MEN      3072   4-07-87   1:11p
    DEMOHELP SRC      6045   4-07-87   1:11p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1387  11-15-90   3:47p
    MAKEMENU EXE     42220   4-07-87   1:11p
    MENU     COM      4296   4-07-87   1:11p
    PROCDEM  MEN      1664   4-07-87   1:11p
    PROCDEM  SRC      3145   4-07-87   1:11p
    READ     ME       1684   4-06-87   1:17p
    SECURDEM MEN       768   4-07-87   1:11p
    SECURDEM SRC      1522   4-07-87   1:11p
    SIMS     DOC     61224   6-01-87   1:02a
    SPECIAL  MEN       512   4-07-87   1:11p
    SPECIAL  SRC      1046   4-07-87   1:11p
    USER     MEN      1280   4-07-87   1:11p
    USER     SRC      2413   4-07-87   1:11p
    VIDEODEM MEN      2048   4-07-87   1:11p
    VIDEODEM SRC      4620   4-07-87   1:11p
    FILE895  TXT      4219  11-15-90   3:57p
           25 file(s)     295304 bytes
                           13312 bytes free
