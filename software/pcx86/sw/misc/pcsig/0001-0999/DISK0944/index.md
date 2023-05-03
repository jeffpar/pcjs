---
layout: page
title: "PC-SIG Diskette Library (Disk #944)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0944/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0944"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS CONTROLLER AND MR. MENU"

    A DOS shell for beginners and advanced computer users.
    
    DOS CONTROLLER can execute DOS commands and files from menus you
    create and acts as a shell to DOS. It helps beginning users become
    acquainted with the computer and helps advanced users shift between
    programs more easily.  DOS CONTROLLER lets you create your own program
    menu for your applications, and already has a menu of DOS commands for
    automatic execution.
    
    MR. MENU can help you easily create simple menus for quick access to
    programs, files, and DOS functions.
    
    You run programs by selecting a number from a menu or by highlighting a
    selection.  You can also execute batch files.  MR. MENU has multiple
    menus that let you easily move from menu to menu or return to the main
    menu.  A maintenance program constructs new menus or modifies existing
    ones.  You can either issue commands that are immediately executed or
    enter commands that require more input or parameters.
    
    MR. MENU is memory-resident and is automatically returned to after the
    program or command is done.  A configuration function lets you
    change the colors, default drive and directory, and opening screen
    titles.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOSCNTRL.DOC

{% raw %}
```


                                ----------------
                                | DOSCNTRL.DOC |
                                ----------------



   DOSCNTRL.DOC is the documentation file for DOS Controller, by Visionary
Software Designs. DOS Controller is a DOS Shell, a program to beginning user
acquainted with their computers and for advanced users to make shifting between
their many programs, easier. 



                               Table of Contents
                               -----------------


Overview of program ................................................... 1.

Program Installation .................................................. 1.

Running a Program ..................................................... 2.

Programming DOS Controller ............................................ 2.

DOS Commands .......................................................... 2.

Shell and Quitting DOS Controller ..................................... 2.

Registration of DOS Controller ........................................ 3.


                       ----   Overview of Program   ----

   DOS Controller is a program designed to insulate beginning users from the
cryptic DOS prompt "A>". 
   DOS Controller requires a hard disk The minimum amount of RAM recommended is
110 K above what your application needs (i.e. is your word processor need 196 K,
DOS needs 22 K to 38 K depending on version, and DOS Controller needs 110 K your
system needs at least 328 K for all applications to run without conflicting with
each other).
   DOS Controller was written in Microsoft's QuickBASIC 2.0 and has been reduced
to the smallest possible size, short of optimization, and when that is available
it will be used to decrease the size even further. 

                       ----   Program Installation   ----

   Installing DOS Controller on a hard disk.

   Boot from hard drive.

   Insert DOS Controller into A drive. From DOS type.

   The "C" means C drive(hard drive) is should be provided.
   ||
   \/
   C>CD\ [Enter]  <- means press the Enter key  

   C>COPY A:DOSCNTRL.* C: [Enter]

   C>DOSCNTRL [Enter]  (note: the program controls the rest of the installation
                        just answer the questions it asks)
                                      -1-


                        ----   Running a Program   ----

   Running a program from DOS Controller is relatively easy, after you have
programmed DOS Controller for your applications.

   After the program has started you will see a logo screen, press any key. The
screen will turn solid blue for a second, then the screen will turn black and a
menu of programs available to run will appear. Select "R" to run a program, the
program will ask you which number, enter a number between 1 and 36 then press
[Enter].

   Example of a session, let's say your word processor is number 3.

          press [R] to run a program

          press [3] to run your word processor.

          press [Enter] to start the program.

          (you work with your word processor and save your document)
          (you exit or quit your word processor)

          The program now asks you to press any key.
          (you press the "space bar")
          The program is now ready for another selection. 

                    ----   Programming DOS Controller   ----

   Programming DOS Controller is probably the most difficult part of DOS
Controller, but once you get the hang of it, it is uncomplicated.

   From the main menu (a.k.a. Programs Available to Run) press "P" to Program DC
(DC = DOS Controller), the program will then ask you which record to edit,
entering 0 or nothing by pressing [Enter] will return you to the main menu. From
our previous example we will use [3]. DOS Controller will tell you whether or
not it is occupied, in this case it is unoccupied, it will then repeat that it
is editing record 3. DC with then ask you for a new description for this file,
type in, with out the quotes, "Word Processor" [Enter]. DC will then ask you to
enter the drive, the filename of the program, and switches (if any), type in
"C:WORD /C" [Enter]. DC will then ask you which path "Word" is on, type
 /\ /\  /\           "\WP" [Enter].
 || ||  ||
 || ||  ||
hard||  Switch to tell Word to run in character mode.
disk||
    ||
Name of the word processor (in this case Microsoft(R) Word(R)).

                           ----   DOS Commands   ----

   This screen is invoked by pressing [D] from the main menu. 

   This area is pretty self explanatory for help in this area consult the DOS
manual.
                               ----   Shell  ----

   This area is invoked by pressing [S] from the main menu.

   This command lets you drop down to the DOS level without wiping DC from
memory. After using DOS type "EXIT" [Enter] to return to DC.

                       ---- Quitting DOS Controller   ----

   Press [Esc] to quit DC.
                                      -2-

                    ----   Registering DOS Controller   ----


   Registering DOS Controller has some advantages, first you will receive my
phone number to call me for help, second you will receive the latest update to
DOS Controller, and a more thorough printed manual explaining the programs
workings.

   To register DOS Controller send $35 to Visionary Software Designs
                                          631 Morro Drive
                                          Santa Maria, CA 93454

   Make checks payable to Kevin DeKorte.
   Sorry, but Credit Cards are not accepted at this time.
   Thank you for trying DOS Controller.

```
{% endraw %}

## FILES944.TXT

{% raw %}
```
Disk No  944
Program Title: DOS CONTROLLER and MR. MENU version 1.2
PC-SIG version 1
 
    DOS CONTROLLER can execute a DOS command, a file from a menu, and a
shell to DOS. It helps beginning users become acquainted with the computer,
and helps advanced users make shifting between programs easier. DOS
CONTROLLER lets you create your own program menu for your applications, and
already has a menu of DOS commands for automatic execution.
 
    MR. MENU simple menus to quickly execute programs and DOS commands.
Batch command files can also be executed. MR. MENU has multiple menus that
let you easily move from menu to menu or return to the main menu with a
function key. A maintenance program is used to construct new menus or
modify existing ones. You can either issue commands that are immediately
executed, or enter commands that require more input or parameters. MR. MENU
is memory-resident (uses 22-27K of memory), and is automatically returned
to after the program or command is executed. A configuration lets you
change the colors, default drive and directory, and opening screen titles.
 
Usage: DOS Utility
 
System Requirements: 128K memory and a hard disk.
 
How to Start: Read DOSCNTRL.DOC for installation instructions for DOS
CONTROLLER, Type: MRMENU (press enter) to start MR. MENU.
 
Suggested Registration: $35.00 for DOS CONTROLLER and $20.00 for MR.
MENU
 
File Descriptions:
 
-------- ---  DOS CONTROLLER
DOSCNTRL EXE  Main program.
DOSCNTRL DOC  Documentation.
VSD      BAS  Support program.
-------- ---  MR. MENU
DOS1     M1   Menu containing various DOS commands.
MRCONFIG CHN  Overlay file to modify MRMENU.CFG file.
MRINSTAL CIN  Hard disk installation information.
MRMAINT  CHN  Menu maintenance overlay.
MRMENU   ARC  MRMENU program in archive form.
MRMENU   CFG  Configuration file.
MRMENU   COM  Main program.
MRMENU   DOC  Documentation.
MRMENU   M1   Main menu.
MRMENU1  CHN  Menu overlay file.
MRWORK   M1   Menu containing installation help.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No 944 DOS CONTROLLER, MR MENU  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for DOS CONTROLLER, Type:                    ║
║             COPY DOSCNTRL.DOC LPT1: (press enter)                       ║
║                                                                         ║
║ To run the program DOS CONTROLLER, Type: DOSCNTRL (press enter)         ║
║                                                                         ║
║ To print the documentation for MR MENU, Type:                           ║
║             COPY MRMENU.DOC LPT1: (press enter)                         ║
║                                                                         ║
║ To run the program MR MENU, Type: MRMENU (press enter)                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MRMENU.DOC

{% raw %}
```

     .....................................................................
     .                           M.S.J Software                          .
     .                              Ver. 1.2                             .
     .                         ******************                        .
     ..........................*  = MR. MENU =  *.........................
                               ******************


                                 MICHAEL DUNNE
                               7064 Chestnut St.
                            Hanover Park, Il.  60103
                                 (312)-830-8546


           A fast, flexible menu system for MS-DOS* micro-computers.



     ---------------------------------------------------------------------
     - PARTS OF THIS SOFTWARE WERE CREATED USING THE ZBASIC(tm) COMPILER -
     - PORTIONS OF THIS CODE ARE COPYRIGHTED,1985 BY ZEDCOR INCORPORATED -
     ---------------------------------------------------------------------






           *MS-DOS is a registered trademark of MICROSOFT Corp.


    MR. MENU is designed for ease of creation of simple menus for quick
    access to programs, files, and DOS functions.  Programs can then be
    executed by selecting a number from a menu or by moving a highlight bar
    (using cursor keys) to a selection and pressing the [enter] key.

    MR. MENU consists of 3 primary components.  There is the opening screen.
    There is the menu program which displays menus, prompts for selections
    and requests additional information as required.  There is a maintenance
    program used to construct new menus or modify existing menus.

    In addition there are ancillary components, such as the configuration
    file, menu files and installation programs.


    MR. MENU is a shareware, user supported program.  Users of MR. MENU are
    expected to register their copy.  The shareware concept is intended to
    keep the cost of software low while making the software available to
    you on a no-risk, trial basis.  Please feel free to copy MR. MENU to
    share with associates, friends, etc.  The only requirements are that
    the original unaltered copy of MR. MENU be copied and shared and that
    no fee be charged or compensation collected.

    Registering your copy of MR. MENU entitles you to receive:

                   - a printed copy of the manual
                   - a password protected version (1.2p)
                   - a menu print utility
                   - free update to version with password protection
                     on individual selections (upon availability)
                   - low cost updates to future versions
                   - low cost custom menus for you system(s)

    To register, send $20 (+ $5 shipping and handling), along with name and
    address to:

                                  Michael Dunne
                              7064 Chestnut Street
                            Hanover Park, Il.  60103


    With your registration, please include comments, requests for
    additional features, description of any problems, questions on design
    of specific items/commands/menus for your applications.

    
     For assistance, please call (312)-830-8546 after 7:00 pm C.S.T. 




    -----------------------------------------------------------------------

            S U B J E C T                                SECTION

         System Requirements .............................  1

         MR. MENU's files ................................. 2

         Getting Started .................................  3
                 Backups .................................  3.1
                 Test run ................................  3.2
                 Features ................................  3.3
                 Installation ............................  3.4

         Menu Creation/Modification ......................  4
                 MAINTENANCE .............................  4.1
                    FUNCTIONs ............................  4.2
                    TASKs ................................  4.3
                        EDITs ............................  4.3.1
                        SWAPs ............................  4.3.2
                        DELETEs ..........................  4.3.3
                        QUIT (and save) ..................  4.3.4
                    STRING commands.......................  4.4

         Opening Screen ..................................  5

         Menu System .....................................  6

         Trouble Shooting ................................  7

         Configuration Options ...........................  8

         Some Samples ....................................  9

                                    [1]

                            SYSTEM REQUIREMENTS

                 MS-DOS/PC-DOS 2.11 or higher, 128K memory


                                    [2]

                             MR. MENU's FILES

              MRMENU.COM       Primary command/program
              MRMENU1.CHN      Menu overlay
              MRMAINT.CHN      Menu maintenance overlay
              MRCONFIG.CHN     Overlay to modify MRMENU.CFG file
              MRMENU.CFG       Configuration file
              MRMENU.M1        Main Menu (required)
              MRWORK.M1        Menu containing installation help
              DOS1.M1          Menu containing various DOS commands
              MRINSTAL.CIN     Hard disk installation information
              MRMENU.DOC       This documentation

    Note:  MRMENU.M1, MRWORK.M1 and DOS1.M1 are provided as examples.
    Please feel free to modify them and to add more menus to the system.
    While the existence of the menu 'MRMENU.M1' is required, there are no
    requirements as to its contents.  However, do not delete MRMENU.M1 from
    the disk or directory where MR. MENU resides.

                                    [3]

                              GETTING STARTED

                                   [3.1]

    The first step upon acquiring MR. MENU is to make at least one backup
    copy of MR. MENU.

    To make a backup copy:

              [Systems with 2 diskette drives]

                  1. prepare formatted diskette to receive MR. MENU
                  2. put diskette containing MR. MENU in drive A:
                  3. put formatted diskette in drive B:
                  4. enter "COPY A:*.* B:"
                  5. remove diskette from drive A: and store in
                     a safe place
                  6. remove diskette from drive B: and use as your
                     work diskette


              [Systems with 1 diskette drive]

                  1. prepare formatted diskette to receive MR. MENU
                  2. put diskette containing MR. MENU in drive A:
                  3. enter "COPY A:*.* B:"
                  4. follow instructions to swap diskettes until
                     copy complete
                  5. store original MR. MENU diskette in a safe place
                  6. use new MR. MENU diskette as your work diskette

                                   [3.2]

                                 TEST RUN

    Copy your system's COMMAND.COM & CHKDSK.COM onto your MR. MENU work
    diskette.

    The original MR. MENU comes with 2 sample menus and a default
    configuration.  To test your copy and to get a feel for MR. MENU, do
    the following:

              a. put your MR. MENU work diskette in drive A:
              b. enter "MRMENU"
              c. MR. MENU should load and display the opening screen.
                 (note: MR. MENU runs slowest in its default configuration.)
              d. from the following options:

                               1. SET DATE & TIME

                               2. MENU SYSTEM

                               3. ENTER DOS

                 select [2] MENU SYSTEM and MR. MENU's Main Menu should
                 display

           ***[MRMENU  ]********************************************
           * ===================== MAIN MENU ===================== *
           *********************************************************
           *     <F1>  Main Menu      |   <F2>  Exit menu system   *
           *********************************************************
           *>1< DOS1 Menu                                          *
           *>2< MR. MENU work/installation menu                    *
           *>3< Print MR. MENU documentation                       *
           *>4<                                                    *
           *>5<                                                    *
           *>6<                                                    *
           *>7<                                                    *
           *>8<                                                    *
           *>9<                                                    *
           *********************************************************





                                <+> v  <-> ^
                             SELECTION NUMBER?
                           or <Enter> to Execute

             e. select >1< DOS1 Menu by either pressing the <1> key
                 or by moving the highlight bar (using arrow keys or + -
                 keys) to selection 1 and pressing the <enter> key - the
                 DOS1 Menu should display

           ***[DOS1    ]********************************************
           * ==================== MS-DOS MENU ==================== *
           *********************************************************
           *     <F1>  Main Menu      |   <F2>  Exit menu system   *
           *********************************************************
           *>1< Directory                                          *
           *>2< Rename file(s)                                     *
           *>3< Copy file(s)                                       *
           *>4< Check disk (CHKDSK)                                *
           *>5< Delete file(s)                                     *
           *>6<                                                    *
           *>7<                                                    *
           *>8<                                                    *
           *>9< Any DOS command                                    *
           *********************************************************

             f. using the up-arrow/down-arrow or + (plus)/- (minus) keys,
                move the highlight bar up and down through the various
                selections

             g. move the highlight bar to Check disk (CHKDSK) and press the
                <enter> key - CHKDSK should execute (if you copied it to
                this diskette)

             h. after returning to the menu, press the <1> key (top row or
                10-key pad) - a directory of your diskette should display

             i. after returning to the menu, press the <F1> key, the Main
                Menu should display
             j. from the MAIN MENU, select MR. MENU maintenance by either
                pressing the <2> key or by moving the highlight bar to
                selection 2 and pressing the <enter> key - the maintenance
                screen should display

                   -----[ MR. MENU ]----- M-A-I-N-T-E-N-A-N-C-E
          *********************************************************
          *  0                                                    *
          *  1                                                    *
          *  2                                                    *
          *  3                                                    *
          *  4                                                    *
          *  5                 CREATE A NEW MENU                  *
          *  6                       -or-                         *
          *  7              MODIFY AN EXISTING MENU               *
          *  8                                                    *
          *  9                                                    *
          *********************************************************



                *********************************************
                * FUNCTION: CReate a menu                   *
                *           GEt a menu                      *
                *           VIew a directory                *
                *           EXit    __                      *
                *********************************************

              k. enter "EX" and the main menu should display

              l. press the <F2> key and the opening screen should display

              m. select 3 "Enter Dos" and you should be returned to the
                 A> prompt.


    If all went well, you are ready to install MR. MENU and begin taking
    advantage of its features.

    The primary purpose of this test was to determine if you have all of
    MR. MENU's files, if all the files are in good condition and are
    located on the root directory of your diskette in drive A:, if your
    system's COMMAND.COM is available to MR. MENU and generally whether you
    are ready to continue with MR. MENU.

    Additionally, this test exposed you to some of the features of your new
    menu system.  See the next section - features.
                                   [3.3]

                                 FEATURES


                - Menu\command selection by number entry or 'point & shoot'

                - Multiple menus
                  move from menu to menu, recall your main menu with a
                  function key, return to your opening screen with a
                  function key

                - Issue commands that are instantly executed, or commands
                  which require input from the user.  Display information
                  to remind the user what information is required.

                - Memory resident
                  The menu system waits in the background while your
                  program or command is being executed.  As soon as your
                  program or command ends, MR. MENU is there on the screen
                  waiting for your next selection.  Uses 22-27K of memory.

                - A maintenance function for creation/modification of
                  menus.

                - A configuration function for modification of colors,
                  default drive\directory, and opening screen titles.

                - Allows use of .BAT (batch command files).  After user
                  termination, abnormal completion or normal completion of
                  batch commands, control is always returned to MR. MENU.

                - Environment - MR. MENU does not interfere with the normal
                  DOS environment, does not create any odd or temporary
                  batch files and is 'well behaved'.

                - Screen saver - after a period of inactivity (in the
                  opening screen), MR. MENU blanks the screen.  Pressing
                  any key will reactivate the screen.

                - Optional password protection - registered users will
                  receive a version of MR. MENU that requires a password
                  for entry into the menu system and a password for exit
                  from the menu system to DOS.
                                   [3.4]

                               INSTALLATION

    Hard disk systems:

    To install MR. MENU on drive C: you should prepare a subdirectory on C:
    to hold MR. MENU's programs and menus.  The recommended subdirectory
    name is MENU, however, any name up to 8 characters may be used.

    Using MENU as the subdirectory name, installation would involve the
    following steps:

          1. Put MR. MENU work diskette in drive A: and at A:> enter
             MRMENU (start up your menu system)

          2. From the opening screen select 2 (Menu System)

          3. From the main menu select 2 (MR. MENU work\installation).
             The WORK MENU should display.

           ***[MRWORK  ]********************************************
           *                  MR. MENU WORK MENU                   *
           *********************************************************
           *     <F1>  Main Menu      *   <F2>  Exit menu system   *
           *********************************************************
           *>1< Hard Disk (Drive C:) Installation notes            *
           *>2< MR. MENU Configuration (MRMENU C)                  *
           *>3< MR. MENU Menu Maintenance (MRMENU M)               *
           *>4< Make directory on drive C: (C:\MENU)               *
           *>5< Copy programs/overlays/config file to C:\MENU      *
           *>6< Copy menu (*.M1) files to C:\MENU                  *
           *>7< Copy MR. MENU system from drive A: to Drive B:     *
           *>8<                                                    *
           *>9< Print documentation                                *
           *********************************************************

          4. Select 1 to view the Hard Disk Installation notes.
          5. Follow the instructions given in the notes.
          6. Remove your work diskette and begin to create your menus
                using MR. MENU maintenance

    Systems without hard disk:

    To install MR. MENU on another diskette you should use the same steps
    as used in making backups (see 3.2).  Then put your new working
    diskette in drive A: and enter the command - MRMENU. (MR. MENU SHOULD
    COME UP AT THIS POINT AS IN THE TEST RUN)

    All systems:

    MR. MENU may be called from the AUTOEXEC.BAT and should be the last
    program loaded after all other memory resident programs (such as
    Borland International's SIDEKICK [tm]).


                                    [4]

                        MENU CREATION/MODIFICATION

    Each menu consists of a name (.M1 will be added to your menu names by
    MR. MENU), a title and nine selections.

    Each selection consists of:

              a description of the menu item
              a type (command, command with parameters, menu)
              a name (menu name or command)
              a drive letter
              a subdirectory location (optional)
              an information (parameter) request display (optional).

         Before creating or modifying menus prepare the information
         listed above.  New menus will require a unique name.

         Prepare a description of each function or menu that will be
         called from the menu you are editing.

         Know the names/filenames of the commands/files that will be
         called from the menu.

         Know the drive\subdirectory location of commands/filenames (DOS
         internal commands excluded).

         Prepare the questions you will ask the user for commands
         requiring input from the user.  Remember that Menu screens only
         show the description and any information requests, therefore the
         user will not be exposed to the filenames, commands, drive
         letters or subdirectories used by MR. MENU unless you put that
         information in the description or parameter information request
         areas.
                                   [4.1]

                             MENU MAINTENANCE


    To create a new menu and edit selections or to edit selections of an
    existing menu, use the command "MRMENU M".  MR. MENU will load the
    overlay MRMAINT.CHN.

    Four options will be offered:

              - create a menu (make a new menu)
              - get a menu (to modify an existing menu)
              - view a directory (to find a menu name)
              - exit (to leave the maintenance)

    Typing EX will end the maintenance program.  Typing VI will cause a
    list of menu names to be displayed.

    Typing CR or GE will take you to a request for the menu name.

    Here you have three options:

              - Enter the menu name to get or create
              - Enter a ? to review menu names
              - Press the <enter> key without entering anything to return
                to the previous set of options

         Enter the menu name, if you are creating a menu a new blank
         menu will be made for you.  If you are getting a menu, the menu
         will be displayed.  There are two exceptions.  If you try to
         create a menu that already exists, or if you try to get a menu
         that does not exist, you will receive an error message and
         instructions on how to proceed.

         Problems during get?  Ver. 1.1 of MRMAINT does not provide for
         finding menus on other than the logged drive\subdirectory.  One
         approach in a multi-drive, multi-directory situation is to copy
         menus to a common diskette for maintenance.  After maintenance,
         copy the menus to their proper location.
                                   [4.2]

                                 FUNCTIONs

    A successful get or create will place the menu in memory and bring you
    to the next step, maintenance FUNCTIONs.  You now have three options:

              - modify the menu
              - print the menu (not available in Ver. 1.1)
              - quit the FUNCTIONs and return to the beginning

                                   [4.3]

                                   TASKs

    Enter MO to continue maintenance.  You will be offered four TASK
    options:

              - edit an item
              - swap two items (change positions of items in the menu)
              - delete an item (remove a selection from the menu)
              - quit TASKs (return to the FUNCTION step)

                                  [4.3.1]

                                == EDITs ==

         Enter ED to make changes to an item.  You will be asked for the
         item number.  Press the <Esc> key if you change your mind,
         otherwise enter a number from 0 to 9. Item 0 is the information
         that will be displayed at the top of a menu (title).

         Information about the item selected will be displayed.  Review
         this information and decide whether to edit (enter Y) or not
         edit (enter N to return to TASK options).

         If you opted to edit, two lines will be displayed, one
         containing the 'OLD DESCRIPTION:' and one with space for the
         'NEW DESCRIPTION:'. (If you do not want to change the OLD
         DESCRIPTION, just press the <enter> key and no change will be
         made.)
    Next comes the 'OLD ITEM TYPE:', 'NEW ITEM TYPE:'.  There are three
    item types:

            C = Command (ex: 123, WS, DIR, etc.)
            P = Command with Parameter (ex: DIR A:, COPY A:*.* B:, etc.)
                (note: Do not enter the parameters, MR. MENU will ask the
                 user to enter the parameters.  If you want MR. MENU to
                 control the parameters, see the section on STRING
                 commands.)
            M = Menu (switch to another menu)

         Enter the type C, P or M (If you do not want to change the OLD
         ITEM TYPE, press the <enter> key and no change will be made.)

         Next comes the 'OLD DRIVE:' 'NEW DRIVE:'.  MR. MENU needs to know
         where the PROGRAM or MENU is located.  Enter A,B,C,D, E or *. If
         you are using a DOS internal command, then enter the drive you
         want to be logged onto when the command is executed.  Again, just
         pressing the <enter> key will leave the 'OLD DRIVE' unchanged.
         (note: * will set the drive to the default home drive.)

         Next comes the 'OLD SUBDIRECTORY:' 'NEW SUBDIRECTORY:'.  If you
         are unfamiliar with sub-directories then you are probably not
         using them.  However, if you need information on sub-directories,
         refer to any good MS-DOS or PC-DOS manual.  To bypass this part,
         hit the <enter> key and the subdirectory will remain unchanged.
         To remove an unwanted subdirectory, enter \ and press the
         <enter> key.

         MR. MENU needs to know where the program or menu is located.
         Enter the subdirectory containing the program or menu.  If you
         are using a DOS internal command, then enter the subdirectory
         you want to be logged onto when the command is executed.  Again,
         just pressing the <enter> key will leave the 'OLD SUBDIRECTORY'
         unchanged.
         Next comes the 'OLD COMMAND/MENU:', 'NEW COMMAND/MENU:'.  Enter
         the command/program to be executed or the name of the menu to
         change to (note: when entering a menu name do not include the
         .M1 portion!).  The command/program may be a program (ex: 123,
         WS), a DOS internal command (ex: DIR, COPY, ERASE), or a DOS
         external command (ex: FORMAT, DISKCOPY, CHKDSK).  The command
         may also be the name of a .BAT batch command file.


         Finally comes the 'OLD DISPLAY/CMND:', 'NEW DISPLAY/CMND:'
         edit.  The 'Display for Parameter Request' is used with P type
         (command with parameters) menu items.  If, for example, your
         command was CHKDSK (check disk), you might want to ask the user
         to which drive to check.  To do so you would enter as your
         display 'Which drive? A:, B: or C:?'.  The user would be shown
         this information and asked to enter a 'parameter'.  The
         'Alternate Command Line' (CMND) is used in STRING commands. See
         the section on STRING commands.  As usual, just pressing the
         <enter> key without entering anything else leaves the 'OLD
         DISPLAY/CMND' unchanged.

    After completing edits, you will be asked if you want to accept the
    item.  Enter Y to accept the edits, N to ignore the edits.
                                  [4.3.2]

                                == SWAPs ==

         SWAP is used to switch the positions of two menu items.  You
         will be asked for two item numbers.  (note: Item 0 cannot be
         swapped.)

                                  [4.3.3]

                               == DELETEs ==

         DELETE is used to remove an item from a menu.  You will be
         asked for an item number.  (note: Item 0 cannot be deleted.)


                                  [4.3.4]

                                == QUIT ==

         Enter QU to end your editing session.  If you have made any
         changes, you will be asked if you want to save the changes.
         Since changes are made in a temporary memory area, you should
         save your changes to disk.  Answer Y to save, N to ignore
         changes.  The changes will not be seen until the next time this
         menu is called by MR. MENU.


                                   [4.4]

                                  STRINGs

         For those occasions when an eight character command is
         inadequate, an extended string command function has been
         provided.  To use the string feature, during the EDIT task, enter
         'C' for 'NEW ITEM TYPE:', enter an exclamation point (!) for
         'NEW COMMAND/MENU:' and enter the extended command string for
         'NEW DISPLAY/CMND:' area.  This allows a command up to 58
         characters long.

         EXAMPLE:         ITEM = Send MR. MENU documentation to printer
                     ITEM TYPE = C
                        SUBDIR = \
                         DRIVE = A:
                       COMMAND = !   (this is the key)
           DISPLAY/ALT COMMAND = TYPE MRMENU.DOC > PRN

                                  [5]

                            OPENING SCREEN

    The opening screen blanks out the screen after a period of no use to
    prevent screen burn.  If the opening screen has cleared, pressing any
    key will bring the screen back.

    Displays date & time as well as three option selections:

                     1. SET DATE & TIME

                     2. MENU SYSTEM

                     3. ENTER DOS

    Selection 1 allows you to set the system date & time. The format for
    date entry is mm-dd-yy (please include the '-' character).  The format
    for time entry is hh:mm (please include the ':' character).  To leave
    the date or time unchanged after selecting 1, just press the <enter>
    key.

    Selection 2 opens the menu system for use.

    Selection 3 removes MR. MENU from menu and returns you to DOS or to
    where-ever MR. MENU was invoked.
                                    [6]

                                MENU SYSTEM

    The current menu name is displayed in the upper left hand corner of
    the menu box. The menu description is displayed at the top of the menu
    box.  Below the menu description the <F1>, <F2> options are displayed.
    Below that, the selection numbers and descriptions are displayed.  At
    the bottom of the screen there is a prompt for a selection number.

    <F1> will return to the Main Menu from any menu.  If called from the
    Main Menu, it will read MRMENU.M1 from disk and refresh the display.

    <F2> will return you to the Opening Screen and should always be used
    before leaving your computer (for screen burn protection).

   Selecting an item -

    Method 1: enter the item number (1 to 9).

    Method 2: Move the highlight bar to the item and press the <enter> key.

    The highlight bar may be moved with the up-arrow and the down-arrow
    keys.  For those users who keep the numeric key pad in number lock, the
    numeric + key will act as a down-arrow key and the numeric - key will
    act as an up-arrow key.

    Some selections will require user input of parameters (drive letter:,
    filename, filepath, etc.).  Those selections requiring parameters will
    display a box at the bottom of the screen requesting that you ENTER
    PARAMETERS:.  Above the box will be instructions.  Basically you should
    either:

         - enter the parameters and press the <enter> key

         - or, press the <enter> key without entering parameters
               (sometimes a valid action)

         - or, press the <Esc> key and then press the <enter> key to
           abort (not execute) the selection.

    If a menu was selected, the selected menu will replace the current
    menu.

    If a program/command was selected and a parameter requested and
    entered, the program will execute and on completion will request that
    the user press 'Any key to continue'.  Pressing a key will bring back
    the menu.

    If a program/command was selected and no parameters requested, the
    program will execute and on completion will return directly to the
    menu.
                                       [7]

                                TROUBLE SHOOTING

    If MR. MENU attempts to execute a program or command and no error
    messages appear (even temporarily), then MR. MENU may not be able to
    find and load COMMAND.COM.  To resolve this problem, make sure that
    COMMAND.COM is available to MR. MENU.  Either put COMMAND.COM on the
    diskette location of MR. MENU or use the SHELL parameter in your
    CONFIG.SYS file to point to the location of COMMAND.COM.  Optionally,
    set COMSPEC to the location of COMMAND.COM.  For information on
    CONFIG.SYS, SHELL and COMSPEC, refer to a good MS-DOS or PC-DOS manual.


    If MR. MENU attempts to execute a program and an error message
    indicating a 'bad command or filename' flashes by on the screen, then
    either:
                the program name is incorrect,
                or, the drive:\subdirectory of the program is incorrect,
                or, the program does not exist.

    To correct, use MRMAINT menu maintenance to review and change the
    program name, drive:\subdirectory as required, or install the program
    being called.



    If MR. MENU responses to a request to change to another menu and you
    receive an error message indicating a file error on a xxxxx.M1 file,
    then either:
                    the filename in the menu is incorrect,
                    or, the drive:\subdirectory of the menu is incorrect,
                    or, the menu xxxxx.M1 file does not exist.

    To correct, use MRMAINT menu maintenance to review and change menu
    filename, drive:subdirectory as required, or create the menu being
    called.

                                       [8]

                              CONFIGURATION OPTIONS

    Version 1.1 offers five options, opening screen title lines 1 & 2,
    IBM screen compatibility, monochrome or CGA mode with color
    selections, IBM screen compatibility, and menu system home location.

    To access the options and modify options, the command is "MRMENU C".


                              IBM SCREEN COMPATIBLE?

    IBM compatibility refers to the ability to handle direct writes to
    screen memory.  This is a fast method for displaying information.
    To select this mode, modify IBM SCREEN to "Y".

    Some MS-DOS computers handle their display memory differently and
    unpredictable results may occur using the IBM compatible screen update
    approach.  A slower screen update method is available which will send
    screen updates through standard MS-DOS routines.  To select this mode,
    modify IBM SCREEN to "N".  If the screen stops responding, reboot and
    do not use IBM SCREEN "Y" in future configurations.

                                  HOME LOCATION

    Some programs/commands reset the current drive:\directory.  MR. MENU
    will always restore the current drive:\directory to the location loaded
    by MRMENU from his configuration file (MRMENU.CFG) during initial
    start-up.  The home location should be set to the drive:\directory
    where MR. MENU's files are located.  If the configuration program is
    called from within a menu, remember that the new configuration will
    have no effect on MRMENU and will not be loaded until after the
    computer is rebooted or until the next time MRMENU is started.

                            MONOCHROME/COLOR MODES

    If you have a monochrome display adapter, select M, otherwise, for
    any type monitor attached to a color display adapter, select C.  Test
    each of the 4 "color" options to find the optimum settings for your
    monitor.  Menu color and highlighting options are different for
    monochome and color adapters.  MR. MENU's configuration screen will
    show you what your screen will look like every time you exit the
    "color" settings section.  Continue to select option 4 and cycle
    through the settings until you are satisfied with the display.
                                      [9]

                                    SAMPLES

    LOTUS 123 USERS:

         EXAMPLE:         ITEM = Go to LOTUS 123 system
                     ITEM TYPE = C
                        SUBDIR = \123
                         DRIVE = C:
                       COMMAND = LOTUS
           DISPLAY/ALT COMMAND =

    WORDSTAR USERS:

         EXAMPLE:         ITEM = Wordstar - Edit a document
                     ITEM TYPE = P
                        SUBDIR = \WP
                         DRIVE = C:
                       COMMAND = WS
           DISPLAY/ALT COMMAND = Enter name of file to edit

    WORDSTAR USERS:


         EXAMPLE:         ITEM = Copy WORDSTAR document to A:
                     ITEM TYPE = P
                        SUBDIR = \WP
                         DRIVE = C:
                       COMMAND = WSCOPY
           DISPLAY/ALT COMMAND = Enter filename to copy

                      (WSCOPY is a batch file in \WP directory)
                       WSCOPY.BAT
                          ECHO OFF
                          CLS
                          COPY %1 A:

    MULTIMATE USERS:

         EXAMPLE:
                  (assumes DOS commands in directory named \DOS
                   and Multimate documents in directory named \MM)

                          ITEM = Backup Multimate Documents
                     ITEM TYPE = C
                        SUBDIR = \DOS
                         DRIVE = C:
                       COMMAND = !
           DISPLAY/ALT COMMAND = BACKUP C:\MM *.DOC A:*.*

```
{% endraw %}

## MRMENU.DOC

{% raw %}
```

     .....................................................................
     .                           M.S.J Software                          .
     .                              Ver. 1.2                             .
     .                         ******************                        .
     ..........................*  = MR. MENU =  *.........................
                               ******************


                                 MICHAEL DUNNE
                               7064 Chestnut St.
                            Hanover Park, Il.  60103
                                 (312)-830-8546


           A fast, flexible menu system for MS-DOS* micro-computers.



     ---------------------------------------------------------------------
     - PARTS OF THIS SOFTWARE WERE CREATED USING THE ZBASIC(tm) COMPILER -
     - PORTIONS OF THIS CODE ARE COPYRIGHTED,1985 BY ZEDCOR INCORPORATED -
     ---------------------------------------------------------------------






           *MS-DOS is a registered trademark of MICROSOFT Corp.


    MR. MENU is designed for ease of creation of simple menus for quick
    access to programs, files, and DOS functions.  Programs can then be
    executed by selecting a number from a menu or by moving a highlight bar
    (using cursor keys) to a selection and pressing the [enter] key.

    MR. MENU consists of 3 primary components.  There is the opening screen.
    There is the menu program which displays menus, prompts for selections
    and requests additional information as required.  There is a maintenance
    program used to construct new menus or modify existing menus.

    In addition there are ancillary components, such as the configuration
    file, menu files and installation programs.


    MR. MENU is a shareware, user supported program.  Users of MR. MENU are
    expected to register their copy.  The shareware concept is intended to
    keep the cost of software low while making the software available to
    you on a no-risk, trial basis.  Please feel free to copy MR. MENU to
    share with associates, friends, etc.  The only requirements are that
    the original unaltered copy of MR. MENU be copied and shared and that
    no fee be charged or compensation collected.

    Registering your copy of MR. MENU entitles you to receive:

                   - a printed copy of the manual
                   - a password protected version (1.2p)
                   - a menu print utility
                   - free update to version with password protection
                     on individual selections (upon availability)
                   - low cost updates to future versions
                   - low cost custom menus for you system(s)

    To register, send $20 (+ $5 shipping and handling), along with name and
    address to:

                                  Michael Dunne
                              7064 Chestnut Street
                            Hanover Park, Il.  60103


    With your registration, please include comments, requests for
    additional features, description of any problems, questions on design
    of specific items/commands/menus for your applications.

    
     For assistance, please call (312)-830-8546 after 7:00 pm C.S.T. 




    -----------------------------------------------------------------------

            S U B J E C T                                SECTION

         System Requirements .............................  1

         MR. MENU's files ................................. 2

         Getting Started .................................  3
                 Backups .................................  3.1
                 Test run ................................  3.2
                 Features ................................  3.3
                 Installation ............................  3.4

         Menu Creation/Modification ......................  4
                 MAINTENANCE .............................  4.1
                    FUNCTIONs ............................  4.2
                    TASKs ................................  4.3
                        EDITs ............................  4.3.1
                        SWAPs ............................  4.3.2
                        DELETEs ..........................  4.3.3
                        QUIT (and save) ..................  4.3.4
                    STRING commands.......................  4.4

         Opening Screen ..................................  5

         Menu System .....................................  6

         Trouble Shooting ................................  7

         Configuration Options ...........................  8

         Some Samples ....................................  9

                                    [1]

                            SYSTEM REQUIREMENTS

                 MS-DOS/PC-DOS 2.11 or higher, 128K memory


                                    [2]

                             MR. MENU's FILES

              MRMENU.COM       Primary command/program
              MRMENU1.CHN      Menu overlay
              MRMAINT.CHN      Menu maintenance overlay
              MRCONFIG.CHN     Overlay to modify MRMENU.CFG file
              MRMENU.CFG       Configuration file
              MRMENU.M1        Main Menu (required)
              MRWORK.M1        Menu containing installation help
              DOS1.M1          Menu containing various DOS commands
              MRINSTAL.CIN     Hard disk installation information
              MRMENU.DOC       This documentation

    Note:  MRMENU.M1, MRWORK.M1 and DOS1.M1 are provided as examples.
    Please feel free to modify them and to add more menus to the system.
    While the existence of the menu 'MRMENU.M1' is required, there are no
    requirements as to its contents.  However, do not delete MRMENU.M1 from
    the disk or directory where MR. MENU resides.

                                    [3]

                              GETTING STARTED

                                   [3.1]

    The first step upon acquiring MR. MENU is to make at least one backup
    copy of MR. MENU.

    To make a backup copy:

              [Systems with 2 diskette drives]

                  1. prepare formatted diskette to receive MR. MENU
                  2. put diskette containing MR. MENU in drive A:
                  3. put formatted diskette in drive B:
                  4. enter "COPY A:*.* B:"
                  5. remove diskette from drive A: and store in
                     a safe place
                  6. remove diskette from drive B: and use as your
                     work diskette


              [Systems with 1 diskette drive]

                  1. prepare formatted diskette to receive MR. MENU
                  2. put diskette containing MR. MENU in drive A:
                  3. enter "COPY A:*.* B:"
                  4. follow instructions to swap diskettes until
                     copy complete
                  5. store original MR. MENU diskette in a safe place
                  6. use new MR. MENU diskette as your work diskette

                                   [3.2]

                                 TEST RUN

    Copy your system's COMMAND.COM & CHKDSK.COM onto your MR. MENU work
    diskette.

    The original MR. MENU comes with 2 sample menus and a default
    configuration.  To test your copy and to get a feel for MR. MENU, do
    the following:

              a. put your MR. MENU work diskette in drive A:
              b. enter "MRMENU"
              c. MR. MENU should load and display the opening screen.
                 (note: MR. MENU runs slowest in its default configuration.)
              d. from the following options:

                               1. SET DATE & TIME

                               2. MENU SYSTEM

                               3. ENTER DOS

                 select [2] MENU SYSTEM and MR. MENU's Main Menu should
                 display

           ***[MRMENU  ]********************************************
           * ===================== MAIN MENU ===================== *
           *********************************************************
           *     <F1>  Main Menu      |   <F2>  Exit menu system   *
           *********************************************************
           *>1< DOS1 Menu                                          *
           *>2< MR. MENU work/installation menu                    *
           *>3< Print MR. MENU documentation                       *
           *>4<                                                    *
           *>5<                                                    *
           *>6<                                                    *
           *>7<                                                    *
           *>8<                                                    *
           *>9<                                                    *
           *********************************************************





                                <+> v  <-> ^
                             SELECTION NUMBER?
                           or <Enter> to Execute

             e. select >1< DOS1 Menu by either pressing the <1> key
                 or by moving the highlight bar (using arrow keys or + -
                 keys) to selection 1 and pressing the <enter> key - the
                 DOS1 Menu should display

           ***[DOS1    ]********************************************
           * ==================== MS-DOS MENU ==================== *
           *********************************************************
           *     <F1>  Main Menu      |   <F2>  Exit menu system   *
           *********************************************************
           *>1< Directory                                          *
           *>2< Rename file(s)                                     *
           *>3< Copy file(s)                                       *
           *>4< Check disk (CHKDSK)                                *
           *>5< Delete file(s)                                     *
           *>6<                                                    *
           *>7<                                                    *
           *>8<                                                    *
           *>9< Any DOS command                                    *
           *********************************************************

             f. using the up-arrow/down-arrow or + (plus)/- (minus) keys,
                move the highlight bar up and down through the various
                selections

             g. move the highlight bar to Check disk (CHKDSK) and press the
                <enter> key - CHKDSK should execute (if you copied it to
                this diskette)

             h. after returning to the menu, press the <1> key (top row or
                10-key pad) - a directory of your diskette should display

             i. after returning to the menu, press the <F1> key, the Main
                Menu should display
             j. from the MAIN MENU, select MR. MENU maintenance by either
                pressing the <2> key or by moving the highlight bar to
                selection 2 and pressing the <enter> key - the maintenance
                screen should display

                   -----[ MR. MENU ]----- M-A-I-N-T-E-N-A-N-C-E
          *********************************************************
          *  0                                                    *
          *  1                                                    *
          *  2                                                    *
          *  3                                                    *
          *  4                                                    *
          *  5                 CREATE A NEW MENU                  *
          *  6                       -or-                         *
          *  7              MODIFY AN EXISTING MENU               *
          *  8                                                    *
          *  9                                                    *
          *********************************************************



                *********************************************
                * FUNCTION: CReate a menu                   *
                *           GEt a menu                      *
                *           VIew a directory                *
                *           EXit    __                      *
                *********************************************

              k. enter "EX" and the main menu should display

              l. press the <F2> key and the opening screen should display

              m. select 3 "Enter Dos" and you should be returned to the
                 A> prompt.


    If all went well, you are ready to install MR. MENU and begin taking
    advantage of its features.

    The primary purpose of this test was to determine if you have all of
    MR. MENU's files, if all the files are in good condition and are
    located on the root directory of your diskette in drive A:, if your
    system's COMMAND.COM is available to MR. MENU and generally whether you
    are ready to continue with MR. MENU.

    Additionally, this test exposed you to some of the features of your new
    menu system.  See the next section - features.
                                   [3.3]

                                 FEATURES


                - Menu\command selection by number entry or 'point & shoot'

                - Multiple menus
                  move from menu to menu, recall your main menu with a
                  function key, return to your opening screen with a
                  function key

                - Issue commands that are instantly executed, or commands
                  which require input from the user.  Display information
                  to remind the user what information is required.

                - Memory resident
                  The menu system waits in the background while your
                  program or command is being executed.  As soon as your
                  program or command ends, MR. MENU is there on the screen
                  waiting for your next selection.  Uses 22-27K of memory.

                - A maintenance function for creation/modification of
                  menus.

                - A configuration function for modification of colors,
                  default drive\directory, and opening screen titles.

                - Allows use of .BAT (batch command files).  After user
                  termination, abnormal completion or normal completion of
                  batch commands, control is always returned to MR. MENU.

                - Environment - MR. MENU does not interfere with the normal
                  DOS environment, does not create any odd or temporary
                  batch files and is 'well behaved'.

                - Screen saver - after a period of inactivity (in the
                  opening screen), MR. MENU blanks the screen.  Pressing
                  any key will reactivate the screen.

                - Optional password protection - registered users will
                  receive a version of MR. MENU that requires a password
                  for entry into the menu system and a password for exit
                  from the menu system to DOS.
                                   [3.4]

                               INSTALLATION

    Hard disk systems:

    To install MR. MENU on drive C: you should prepare a subdirectory on C:
    to hold MR. MENU's programs and menus.  The recommended subdirectory
    name is MENU, however, any name up to 8 characters may be used.

    Using MENU as the subdirectory name, installation would involve the
    following steps:

          1. Put MR. MENU work diskette in drive A: and at A:> enter
             MRMENU (start up your menu system)

          2. From the opening screen select 2 (Menu System)

          3. From the main menu select 2 (MR. MENU work\installation).
             The WORK MENU should display.

           ***[MRWORK  ]********************************************
           *                  MR. MENU WORK MENU                   *
           *********************************************************
           *     <F1>  Main Menu      *   <F2>  Exit menu system   *
           *********************************************************
           *>1< Hard Disk (Drive C:) Installation notes            *
           *>2< MR. MENU Configuration (MRMENU C)                  *
           *>3< MR. MENU Menu Maintenance (MRMENU M)               *
           *>4< Make directory on drive C: (C:\MENU)               *
           *>5< Copy programs/overlays/config file to C:\MENU      *
           *>6< Copy menu (*.M1) files to C:\MENU                  *
           *>7< Copy MR. MENU system from drive A: to Drive B:     *
           *>8<                                                    *
           *>9< Print documentation                                *
           *********************************************************

          4. Select 1 to view the Hard Disk Installation notes.
          5. Follow the instructions given in the notes.
          6. Remove your work diskette and begin to create your menus
                using MR. MENU maintenance

    Systems without hard disk:

    To install MR. MENU on another diskette you should use the same steps
    as used in making backups (see 3.2).  Then put your new working
    diskette in drive A: and enter the command - MRMENU. (MR. MENU SHOULD
    COME UP AT THIS POINT AS IN THE TEST RUN)

    All systems:

    MR. MENU may be called from the AUTOEXEC.BAT and should be the last
    program loaded after all other memory resident programs (such as
    Borland International's SIDEKICK [tm]).


                                    [4]

                        MENU CREATION/MODIFICATION

    Each menu consists of a name (.M1 will be added to your menu names by
    MR. MENU), a title and nine selections.

    Each selection consists of:

              a description of the menu item
              a type (command, command with parameters, menu)
              a name (menu name or command)
              a drive letter
              a subdirectory location (optional)
              an information (parameter) request display (optional).

         Before creating or modifying menus prepare the information
         listed above.  New menus will require a unique name.

         Prepare a description of each function or menu that will be
         called from the menu you are editing.

         Know the names/filenames of the commands/files that will be
         called from the menu.

         Know the drive\subdirectory location of commands/filenames (DOS
         internal commands excluded).

         Prepare the questions you will ask the user for commands
         requiring input from the user.  Remember that Menu screens only
         show the description and any information requests, therefore the
         user will not be exposed to the filenames, commands, drive
         letters or subdirectories used by MR. MENU unless you put that
         information in the description or parameter information request
         areas.
                                   [4.1]

                             MENU MAINTENANCE


    To create a new menu and edit selections or to edit selections of an
    existing menu, use the command "MRMENU M".  MR. MENU will load the
    overlay MRMAINT.CHN.

    Four options will be offered:

              - create a menu (make a new menu)
              - get a menu (to modify an existing menu)
              - view a directory (to find a menu name)
              - exit (to leave the maintenance)

    Typing EX will end the maintenance program.  Typing VI will cause a
    list of menu names to be displayed.

    Typing CR or GE will take you to a request for the menu name.

    Here you have three options:

              - Enter the menu name to get or create
              - Enter a ? to review menu names
              - Press the <enter> key without entering anything to return
                to the previous set of options

         Enter the menu name, if you are creating a menu a new blank
         menu will be made for you.  If you are getting a menu, the menu
         will be displayed.  There are two exceptions.  If you try to
         create a menu that already exists, or if you try to get a menu
         that does not exist, you will receive an error message and
         instructions on how to proceed.

         Problems during get?  Ver. 1.1 of MRMAINT does not provide for
         finding menus on other than the logged drive\subdirectory.  One
         approach in a multi-drive, multi-directory situation is to copy
         menus to a common diskette for maintenance.  After maintenance,
         copy the menus to their proper location.
                                   [4.2]

                                 FUNCTIONs

    A successful get or create will place the menu in memory and bring you
    to the next step, maintenance FUNCTIONs.  You now have three options:

              - modify the menu
              - print the menu (not available in Ver. 1.1)
              - quit the FUNCTIONs and return to the beginning

                                   [4.3]

                                   TASKs

    Enter MO to continue maintenance.  You will be offered four TASK
    options:

              - edit an item
              - swap two items (change positions of items in the menu)
              - delete an item (remove a selection from the menu)
              - quit TASKs (return to the FUNCTION step)

                                  [4.3.1]

                                == EDITs ==

         Enter ED to make changes to an item.  You will be asked for the
         item number.  Press the <Esc> key if you change your mind,
         otherwise enter a number from 0 to 9. Item 0 is the information
         that will be displayed at the top of a menu (title).

         Information about the item selected will be displayed.  Review
         this information and decide whether to edit (enter Y) or not
         edit (enter N to return to TASK options).

         If you opted to edit, two lines will be displayed, one
         containing the 'OLD DESCRIPTION:' and one with space for the
         'NEW DESCRIPTION:'. (If you do not want to change the OLD
         DESCRIPTION, just press the <enter> key and no change will be
         made.)
    Next comes the 'OLD ITEM TYPE:', 'NEW ITEM TYPE:'.  There are three
    item types:

            C = Command (ex: 123, WS, DIR, etc.)
            P = Command with Parameter (ex: DIR A:, COPY A:*.* B:, etc.)
                (note: Do not enter the parameters, MR. MENU will ask the
                 user to enter the parameters.  If you want MR. MENU to
                 control the parameters, see the section on STRING
                 commands.)
            M = Menu (switch to another menu)

         Enter the type C, P or M (If you do not want to change the OLD
         ITEM TYPE, press the <enter> key and no change will be made.)

         Next comes the 'OLD DRIVE:' 'NEW DRIVE:'.  MR. MENU needs to know
         where the PROGRAM or MENU is located.  Enter A,B,C,D, E or *. If
         you are using a DOS internal command, then enter the drive you
         want to be logged onto when the command is executed.  Again, just
         pressing the <enter> key will leave the 'OLD DRIVE' unchanged.
         (note: * will set the drive to the default home drive.)

         Next comes the 'OLD SUBDIRECTORY:' 'NEW SUBDIRECTORY:'.  If you
         are unfamiliar with sub-directories then you are probably not
         using them.  However, if you need information on sub-directories,
         refer to any good MS-DOS or PC-DOS manual.  To bypass this part,
         hit the <enter> key and the subdirectory will remain unchanged.
         To remove an unwanted subdirectory, enter \ and press the
         <enter> key.

         MR. MENU needs to know where the program or menu is located.
         Enter the subdirectory containing the program or menu.  If you
         are using a DOS internal command, then enter the subdirectory
         you want to be logged onto when the command is executed.  Again,
         just pressing the <enter> key will leave the 'OLD SUBDIRECTORY'
         unchanged.
         Next comes the 'OLD COMMAND/MENU:', 'NEW COMMAND/MENU:'.  Enter
         the command/program to be executed or the name of the menu to
         change to (note: when entering a menu name do not include the
         .M1 portion!).  The command/program may be a program (ex: 123,
         WS), a DOS internal command (ex: DIR, COPY, ERASE), or a DOS
         external command (ex: FORMAT, DISKCOPY, CHKDSK).  The command
         may also be the name of a .BAT batch command file.


         Finally comes the 'OLD DISPLAY/CMND:', 'NEW DISPLAY/CMND:'
         edit.  The 'Display for Parameter Request' is used with P type
         (command with parameters) menu items.  If, for example, your
         command was CHKDSK (check disk), you might want to ask the user
         to which drive to check.  To do so you would enter as your
         display 'Which drive? A:, B: or C:?'.  The user would be shown
         this information and asked to enter a 'parameter'.  The
         'Alternate Command Line' (CMND) is used in STRING commands. See
         the section on STRING commands.  As usual, just pressing the
         <enter> key without entering anything else leaves the 'OLD
         DISPLAY/CMND' unchanged.

    After completing edits, you will be asked if you want to accept the
    item.  Enter Y to accept the edits, N to ignore the edits.
                                  [4.3.2]

                                == SWAPs ==

         SWAP is used to switch the positions of two menu items.  You
         will be asked for two item numbers.  (note: Item 0 cannot be
         swapped.)

                                  [4.3.3]

                               == DELETEs ==

         DELETE is used to remove an item from a menu.  You will be
         asked for an item number.  (note: Item 0 cannot be deleted.)


                                  [4.3.4]

                                == QUIT ==

         Enter QU to end your editing session.  If you have made any
         changes, you will be asked if you want to save the changes.
         Since changes are made in a temporary memory area, you should
         save your changes to disk.  Answer Y to save, N to ignore
         changes.  The changes will not be seen until the next time this
         menu is called by MR. MENU.


                                   [4.4]

                                  STRINGs

         For those occasions when an eight character command is
         inadequate, an extended string command function has been
         provided.  To use the string feature, during the EDIT task, enter
         'C' for 'NEW ITEM TYPE:', enter an exclamation point (!) for
         'NEW COMMAND/MENU:' and enter the extended command string for
         'NEW DISPLAY/CMND:' area.  This allows a command up to 58
         characters long.

         EXAMPLE:         ITEM = Send MR. MENU documentation to printer
                     ITEM TYPE = C
                        SUBDIR = \
                         DRIVE = A:
                       COMMAND = !   (this is the key)
           DISPLAY/ALT COMMAND = TYPE MRMENU.DOC > PRN

                                  [5]

                            OPENING SCREEN

    The opening screen blanks out the screen after a period of no use to
    prevent screen burn.  If the opening screen has cleared, pressing any
    key will bring the screen back.

    Displays date & time as well as three option selections:

                     1. SET DATE & TIME

                     2. MENU SYSTEM

                     3. ENTER DOS

    Selection 1 allows you to set the system date & time. The format for
    date entry is mm-dd-yy (please include the '-' character).  The format
    for time entry is hh:mm (please include the ':' character).  To leave
    the date or time unchanged after selecting 1, just press the <enter>
    key.

    Selection 2 opens the menu system for use.

    Selection 3 removes MR. MENU from menu and returns you to DOS or to
    where-ever MR. MENU was invoked.
                                    [6]

                                MENU SYSTEM

    The current menu name is displayed in the upper left hand corner of
    the menu box. The menu description is displayed at the top of the menu
    box.  Below the menu description the <F1>, <F2> options are displayed.
    Below that, the selection numbers and descriptions are displayed.  At
    the bottom of the screen there is a prompt for a selection number.

    <F1> will return to the Main Menu from any menu.  If called from the
    Main Menu, it will read MRMENU.M1 from disk and refresh the display.

    <F2> will return you to the Opening Screen and should always be used
    before leaving your computer (for screen burn protection).

   Selecting an item -

    Method 1: enter the item number (1 to 9).

    Method 2: Move the highlight bar to the item and press the <enter> key.

    The highlight bar may be moved with the up-arrow and the down-arrow
    keys.  For those users who keep the numeric key pad in number lock, the
    numeric + key will act as a down-arrow key and the numeric - key will
    act as an up-arrow key.

    Some selections will require user input of parameters (drive letter:,
    filename, filepath, etc.).  Those selections requiring parameters will
    display a box at the bottom of the screen requesting that you ENTER
    PARAMETERS:.  Above the box will be instructions.  Basically you should
    either:

         - enter the parameters and press the <enter> key

         - or, press the <enter> key without entering parameters
               (sometimes a valid action)

         - or, press the <Esc> key and then press the <enter> key to
           abort (not execute) the selection.

    If a menu was selected, the selected menu will replace the current
    menu.

    If a program/command was selected and a parameter requested and
    entered, the program will execute and on completion will request that
    the user press 'Any key to continue'.  Pressing a key will bring back
    the menu.

    If a program/command was selected and no parameters requested, the
    program will execute and on completion will return directly to the
    menu.
                                       [7]

                                TROUBLE SHOOTING

    If MR. MENU attempts to execute a program or command and no error
    messages appear (even temporarily), then MR. MENU may not be able to
    find and load COMMAND.COM.  To resolve this problem, make sure that
    COMMAND.COM is available to MR. MENU.  Either put COMMAND.COM on the
    diskette location of MR. MENU or use the SHELL parameter in your
    CONFIG.SYS file to point to the location of COMMAND.COM.  Optionally,
    set COMSPEC to the location of COMMAND.COM.  For information on
    CONFIG.SYS, SHELL and COMSPEC, refer to a good MS-DOS or PC-DOS manual.


    If MR. MENU attempts to execute a program and an error message
    indicating a 'bad command or filename' flashes by on the screen, then
    either:
                the program name is incorrect,
                or, the drive:\subdirectory of the program is incorrect,
                or, the program does not exist.

    To correct, use MRMAINT menu maintenance to review and change the
    program name, drive:\subdirectory as required, or install the program
    being called.



    If MR. MENU responses to a request to change to another menu and you
    receive an error message indicating a file error on a xxxxx.M1 file,
    then either:
                    the filename in the menu is incorrect,
                    or, the drive:\subdirectory of the menu is incorrect,
                    or, the menu xxxxx.M1 file does not exist.

    To correct, use MRMAINT menu maintenance to review and change menu
    filename, drive:subdirectory as required, or create the menu being
    called.

                                       [8]

                              CONFIGURATION OPTIONS

    Version 1.1 offers five options, opening screen title lines 1 & 2,
    IBM screen compatibility, monochrome or CGA mode with color
    selections, IBM screen compatibility, and menu system home location.

    To access the options and modify options, the command is "MRMENU C".


                              IBM SCREEN COMPATIBLE?

    IBM compatibility refers to the ability to handle direct writes to
    screen memory.  This is a fast method for displaying information.
    To select this mode, modify IBM SCREEN to "Y".

    Some MS-DOS computers handle their display memory differently and
    unpredictable results may occur using the IBM compatible screen update
    approach.  A slower screen update method is available which will send
    screen updates through standard MS-DOS routines.  To select this mode,
    modify IBM SCREEN to "N".  If the screen stops responding, reboot and
    do not use IBM SCREEN "Y" in future configurations.

                                  HOME LOCATION

    Some programs/commands reset the current drive:\directory.  MR. MENU
    will always restore the current drive:\directory to the location loaded
    by MRMENU from his configuration file (MRMENU.CFG) during initial
    start-up.  The home location should be set to the drive:\directory
    where MR. MENU's files are located.  If the configuration program is
    called from within a menu, remember that the new configuration will
    have no effect on MRMENU and will not be loaded until after the
    computer is rebooted or until the next time MRMENU is started.

                            MONOCHROME/COLOR MODES

    If you have a monochrome display adapter, select M, otherwise, for
    any type monitor attached to a color display adapter, select C.  Test
    each of the 4 "color" options to find the optimum settings for your
    monitor.  Menu color and highlighting options are different for
    monochome and color adapters.  MR. MENU's configuration screen will
    show you what your screen will look like every time you exit the
    "color" settings section.  Continue to select option 4 and cycle
    through the settings until you are satisfied with the display.
                                      [9]

                                    SAMPLES

    LOTUS 123 USERS:

         EXAMPLE:         ITEM = Go to LOTUS 123 system
                     ITEM TYPE = C
                        SUBDIR = \123
                         DRIVE = C:
                       COMMAND = LOTUS
           DISPLAY/ALT COMMAND =

    WORDSTAR USERS:

         EXAMPLE:         ITEM = Wordstar - Edit a document
                     ITEM TYPE = P
                        SUBDIR = \WP
                         DRIVE = C:
                       COMMAND = WS
           DISPLAY/ALT COMMAND = Enter name of file to edit

    WORDSTAR USERS:


         EXAMPLE:         ITEM = Copy WORDSTAR document to A:
                     ITEM TYPE = P
                        SUBDIR = \WP
                         DRIVE = C:
                       COMMAND = WSCOPY
           DISPLAY/ALT COMMAND = Enter filename to copy

                      (WSCOPY is a batch file in \WP directory)
                       WSCOPY.BAT
                          ECHO OFF
                          CLS
                          COPY %1 A:

    MULTIMATE USERS:

         EXAMPLE:
                  (assumes DOS commands in directory named \DOS
                   and Multimate documents in directory named \MM)

                          ITEM = Backup Multimate Documents
                     ITEM TYPE = C
                        SUBDIR = \DOS
                         DRIVE = C:
                       COMMAND = !
           DISPLAY/ALT COMMAND = BACKUP C:\MM *.DOC A:*.*

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0944

     Volume in drive A has no label
     Directory of A:\

    DOS1     M1       1280   1-31-87   8:25p
    MRCONFIG CHN      7296   5-04-87  10:03p
    MRINSTAL CIN       864   2-07-87   1:23p
    MRMAINT  CHN      9472   2-07-87  11:00a
    MRMENU   ARC     45548   5-17-87   7:46p
    MRMENU   CFG       128   1-01-80  12:41a
    MRMENU   COM     13952   2-11-87  11:07a
    MRMENU   DOC     37248   5-17-87   7:46p
    MRMENU   M1       1281   4-26-87  11:01p
    MRMENU1  CHN      4096   4-26-87  10:56p
    MRWORK   M1       1281   4-26-87  11:00p
    -------- ---         6  12-10-87   4:38p
    DOSCNTRL EXE     89594   7-28-87   3:37p
    DOSCNTRL DOC      5888   7-28-87   2:39p
    VSD      BAS      4517   7-22-87   1:54p
    FILES944 TXT      2134  12-16-87   8:37a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-10-87   4:37p
           18 file(s)     225625 bytes
                           86016 bytes free
