---
layout: page
title: "PC-SIG Diskette Library (Disk #1165)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1165/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1165"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DASHBOARD"

    PC-DASHBOARD is a program menu system to make the operation of programs
    on a hard disk much easier and quicker.  The program consists of a main
    menu and a virtually unlimited number of submenus, and each menu can
    have up to 24 choices.  From the menus you can perform DOS commands,
    execute your favorite programs, go to other submenus, or shell to a
    specific directory.
    
    PC-DASHBOARD allows you to customize your own menu choices and easily
    design a system of submenus to suit your own needs.  You can type in
    your own personalized menu prompt for each entry used to execute a
    program.  Once you have also included a directory path, a command, and
    an optional password, your menu choice is created, and all you have to
    do is type in the letter of the entry to execute the program.
    
    You can design your menu entry to include up to 10 separate commands,
    giving you the capability to execute multiple programs or commands in
    succession from a single menu entry if you so desire.  You can also
    design a command so that it prompts the user for more information to
    complete the command.  Besides all this, PC-DASHBOARD lets you
    change the screen colors, turn the automatic screen blank (four min.),
    on or off, edit the menu titles and the on-screen notes, and choose the
    number of columns (1-4) for each menu.
    
    PC-DASHBOARD's effective password protection system extends to the
    option to change the settings of the menus, exit from the program to
    DOS, specific menu entries, or access to entire submenus.  In this way,
    several people can use the same computer yet have only restricted
    access
    to the system.
    
    PC-DASHBOARD simplifies the operation of programs on your hard disk and
    controls the access to them.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1165.TXT

{% raw %}
```
Disk No  1165
Program Title:  PC-DASHBOARD version 1.02
PC-SIG version 1

PC-DASHBOARD is a program menu system to make the operation of programs
on a hard disk much easier and quicker.  The program consists of a main
menu and a virtually unlimited number of submenus, and each menu can
have up to 24 choices.  From the menus you can perform DOS commands,
execute your favorite programs, go to other submenus, or shell to a
specific directory.

PC-DASHBOARD allows you to customize your own menu choices and easily
design a system of submenus to suit your own needs.  You can type in your
own personalized menu prompt for each entry used to execute a program.
Once you have also included a directory path, a command, and an optional
password, your menu choice is created, and all you have to do is type in
the letter of the entry to execute the program.

You may design your menu entry to include up to 10 separate commands,
giving you the capability to execute multiple programs or commands in
succession from a single menu entry if you so desire.  You may also
design a command so that it prompts the user for more information to
complete the command.  Besides all this, PC-DASHBOARD will let you
change the screen colors, turn the automatic screen blank (four min.),
on or off, edit the menu titles and the on-screen notes, and choose the
number of columns (1-4) for each menu.

PC-DASHBOARD also has an effective password protection system.  Most
importantly you can password protect the option to change the settings
of the menus or the option to exit from the program to DOS.  You can
also password protect individual menu entries, or even the access to
entire submenus.  In this way, several people can use the same computer
yet have only restricted access to the system.  Submenus can be created
for each individual person, which only they can access once given the
password.  PC-DASHBOARD not only simplifies the operation of programs on
your hard disk, but also controls the access to them.

Usage:  Menuing System.

Special Requirements:  A hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $39.95

File Descriptions:

MENU     BAT  Batch file for program initiation.
PCD      BAT  Batch file to set up the batch menu process.
PCDASH   DOC  Documentation.
PCDASH   EXE  Main program.
PCDSH1   ARC  Archive containing all program files.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1165 PC DASHBOARD  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type PCD (press enter)                            ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PCDASH.DOC

{% raw %}
```
--------------------------------------------------------------------------
PC Dashboard (tm)                       User's Manual - Evaluation Version
Custom Menus for Your PC                May 16, 1988
--------------------------------------------------------------------------

"PC Dashboard" by John Franck
Copyright (C) 1988 No Sweat Software, Inc.
All rights reserved

No Sweat Software, Inc.                 (703) 632-3982
10 E. Church Street                     CompuServe 70077,3453
Martinsville, VA  24112


"PC Dashboard" and "BigNotes" are trademarks of No Sweat Software, Inc.
"IBM-PC" is a registered trademark of International Business Machines Corp.
--------------------------------------------------------------------------

-- INTRODUCTION --

PC Dashboard is an easy-to-use menuing system for IBM PC's and compatibles
equipped with fixed disk drives.  It eliminates the need for you to remember
all those complicated DOS commands or directory paths when accessing programs
and routines from your hard disk.  You can enter the path and program
startup commands ONCE into PC Dashboard's Menu Item Settings window; after
that, simply pressing the appropriate letter key will launch your program or
specific task.  When your work is completed, PC Dashboard's Main Menu screen
will return, ready for another selection.

PC Dashboard is very easy to set up and modify.  You can customize the
program to suit almost any computer environment, and the menu display
options are virtually unlimited.  It offers speed and productivity to
experienced computer users, and insulates the novice or occasional PC user
from having to remember all those unfriendly commands necessary to run a
hard disk system.

Finally, you can forget about DOS and concentrate on getting your work done!


-- SOME FEATURES OF PC DASHBOARD --

 - Simple-to-learn format that is fast and easy to use
 - Menu settings are entered directly from the program - no text editor
   needed
 - Clear, colorfully attractive screen layouts
 - Menus with up to 24 items per menu - all defined by YOU
 - Menu prompts, passwords, directory paths, and command settings (with up
   to 10 lines) - all defined by you and entered ONCE
 - Virtually unlimited number of submenus created automatically and
   displayed instantly
 - Personalized menu titles
 - Colorful on-screen user notes customized in either regular text or
   extra-large "BigNotes"
 - Parameter Passing - menu selections can prompt you for input
 - Option to keep PC Dashboard memory-resident - increasing display speed
 - Gateway to DOS - can shell to any subdirectory that you designate
 - Optional Time and Date display
 - Optional Clock display with soft chimes on the hour
 - Optional Screen-Saver - blanks after 4 minutes of inactivity
 - System Password protection scheme with extensive flexibility


-- A NOTE ABOUT REGISTRATION --

It is our belief at No Sweat Software that people should have a chance to
fully evaluate a software package before handing over the dough.  We have
confidence that you will find PC Dashboard to be an indispensible utility
for your PC and that you will find it within your good conscience to
register.

Although the evaluation version is fully functional, annoying and
embarrassing messages will continue to appear, indicating that you have not
yet registered.  When you register, you will receive the latest licensed
version of PC Dashboard, which includes the official program disk, complete
printed user's manual, registration code, certain utility programs, product
support from No Sweat Software, and access to future upgrades of PC
Dashboard at nominal cost.  (A registration/order form can be found at the
end of this manual.)

You are granted a limited license to use this evaluation version of
PC Dashboard on a trial basis in order to decide if it is suitable for your
needs.  The use of an unregistered copy of PC Dashboard, beyond a reasonable
evaluation period, is prohibited.


-- PROGRAM FILES AND COPYING --

Your evaluation copy of PC Dashboard should consist of only 4 files:
PCDASH.EXE, PCDASH.DOC, MENU.BAT, and PCD.BAT.  You should ERASE any other
files that you may have received with your evaluation copy.

You may NOT modify PC Dashboard's files in any way, including but not
limited to decompiling, disassembling, or any other means of reverse
engineering.

You are ENCOURAGED to copy PC Dashboard's 4 evaluation files and share them
with others for their own evaluation.  All four, including the file
containing this documentation, must be provided TOGETHER in their original
and unaltered form.  You may NOT sell the evaluation version of PC Dashboard
under ANY circumstances!

Operators of electronic bulletin boards may post these 4 files for
downloading by their users so long as these conditions are met and ONLY if
the 4 files are combined into one "libraried" or "archived" file.  (If you
received your evaluation copy directly from No Sweat Software, an archived
file, "PCDSH1.ARC", is included on your disk.)  You should contact No Sweat
Software if you need technical assistance in archiving the files.

Mail-order distributors of public domain or ShareWare software may
distribute evaluation copies subject to the above conditions only after
obtaining written permission from No Sweat Software, Inc.


-- DISCLAIMER --

EVEN THOUGH NO SWEAT SOFTWARE HAS TESTED THIS SOFTWARE AND REVIEWED THIS
DOCUMENTATION, NO SWEAT SOFTWARE MAKES NO WARRANTY OR REPRESENTATION, EITHER
EXPRESSED OR IMPLIED, WITH RESPECT TO THE SOFTWARE, ITS QUALITY,
PERFORMANCE, OR FITNESS FOR A PARTICULAR PURPOSE.

IN NO EVENT WILL NO SWEAT SOFTWARE, OR ANYONE ELSE WHO HAS BEEN INVOLVED IN
THE CREATION, PRODUCTION, OR DELIVERY OF THIS PROGRAM, BE LIABLE FOR DIRECT,
INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM ANY
DEFECT IN THE SOFTWARE OR ITS DOCUMENTATION, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.  IN PARTICULAR, NO SWEAT SOFTWARE SHALL HAVE NO
LIABILITY FOR ANY PROGRAMS OR DATA STORED OR USED WITH THIS SOFTWARE,
INCLUDING THE COSTS OF RECOVERING SUCH PROGRAMS OR DATA.


-- ABOUT THIS MANUAL --

This manual briefly covers ALL of PC Dashboard's many features.  It is not
"pretty", but is quite functional.  (We have tried to keep the PCDASH.DOC
file as small as possible for uploading and downloading to computer
bulletin board services across the country.)  As mentioned, when you
register your copy of PC Dashboard, you'll be supplied with the official
printed User's Manual, along with the other benefits of registration.


-- INSTALLATION --

PC Dashboard's files should be kept in their own subdirectory.  Our
instructions use the subdirectory name \PCDASH, which we strongly suggest
you use also.  If you MUST use a different subdirectory name, then the third
line of the MENU.BAT file will need to be modified in order for PC Dashboard
to work properly.  (See the section entitled "Program Files" for a listing
and description of MENU.BAT and other files.)

Here are detailed instructions for proper installation:

    1. Create a subdirectory called \PCDASH, where all of PC Dashboard's
       files will reside.  To do this, from the "root" directory (C:\) enter
       the following:

            MD PCDASH             <return>

    2. Make \PCDASH the current subdirectory by entering:

            CD C:\PCDASH          <return>

    3. Place the disk containing PC Dashboard's evaluation files into
       Drive A.  Now copy the 4 files into the \PCDASH subdirectory:

            COPY A:MENU.BAT       <return>
            COPY A:PCD.BAT        <return>
            COPY A:PCDASH.EXE     <return>
            COPY A:PCDASH.DOC     <return>

       Be sure the copies were successful by listing them with the command:

            DIR C:\PCDASH

       You should see the 4 files listed in the \PCDASH subdirectory.

    4. Modify your system's AUTOEXEC.BAT file to include a reference to the
       \PCDASH subdirectory in your PATH command and to add the command
       "MENU" at the end.  The following are instructions on how to do this:

       In order for your computer to know where to find PC Dashboard, you
       need to include the subdirectory \PCDASH in the PATH command of your
       system's AUTOEXEC.BAT file.  AUTOEXEC.BAT is located in the root
       directory and may be listed by entering:

            CD C:\                     <return>
            TYPE AUTOEXEC.BAT          <return>

       If a PATH command is listed in AUTOEXEC.BAT, it will look something
       like:    PATH=C:\;C:\DOS
       Additional subdirectories could be listed in the PATH command also.

       The PATH command needs to be added or rewritten to include a
       reference to the subdirectory \PCDASH.  When edited, the PATH should
       look something like:   PATH=C:\PCDASH;C:\xxxx;C:\xxxx , where "xxxx"
       stands for the names of other subdirectories that could be listed.

       You can add this PATH command to AUTOEXEC.BAT with a text editor or
       by re-creating the entire AUTOEXEC.BAT file as follows:

         -  At the DOS prompt C:>, type

                COPY CON: AUTOEXEC.BAT      <return>

         -  Re-type the commands exactly that were originally in
            AUTOEXEC.BAT, line by line until you reach the PATH command.

         -  Include the \PCDASH subdirectory in the PATH command when it is
            re-entered or create a new one as follows:

                PATH=C:\PCDASH;C:\xxxx;C:\xxxx

            "xxxx", as you already know, stands for any other subdirectories
            that may have been included in the original PATH command.
            Placing \PCDASH "early" in the command can improve performance
            on slower computers.

         -  At the end of AUTOEXEC.BAT, add the command:

               MENU          <return>

            This command will cause PC Dashboard to run automatically every
            time your computer is started.

         -  To complete the re-writing of AUTOEXEC.BAT, press <F6> and then
            press <return>.  You should see the message "1 File(s) copied".

    5. Press CTRL-ALT-DEL to "re-boot" your system.  This step is necessary
       this first time so that your computer will know where to find PC
       Dashboard's files.  This completes the installation process.


-- GETTING STARTED --

After you properly load the PC Dashboard program files into the \PCDASH
subdirectory and make sure that the AUTOEXEC.BAT file has been correctly
modified, restart the system (if you haven't already) by pressing
<CTRL-ALT-DEL>.  During startup, the computer will check the PATH command in
the AUTOEXEC.BAT file to learn where to find PC Dashboard.

If "MENU" was included as the last command in your AUTOEXEC.BAT file,
PC Dashboard will run automatically.  If not, simply enter the command
"MENU" at the DOS prompt.

IMPORTANT: Do NOT attempt to start PC Dashboard by entering the command
           "PCDASH" or "PCD". If you do, the program will run, but the menu
           may not re-display properly after you run a menu selection.
           Always use the command "MENU" to start the program.

When PC Dashboard starts, the MAIN menu screen will appear, overlaid by the
Program Title window.  This window will appear one time each day, reminding
you that this is an Evaluation Copy of PC Dashboard and that registration is
required. The Program Title window will disappear for the time being when
you press any key.  You'll see the MAIN menu screen displayed.

The MAIN menu screen will become very familiar to you.  It is from this
screen that you will run, at the touch of a single key, all of your
applications and computer tasks.  The letters (A-L) are referred to as
"Menu Items".  Each Menu Item has its own unique settings that you edit by
pressing <Alt-x>, where x is the letter of the item to be edited.


-- AN EXAMPLE --

To show you how easy it is to enter Menu Item settings, let's enter settings
into Menu Item A for the familiar DOS routine, Formatting a Floppy Disk.
(Since formatting floppies is not very exciting, you could substitute any of
your own routines or startup commands for a favorite application program in
place of this example.)

We'll assume the following about our example:
    - We want our Menu Prompt to read "Format a Floppy"
    - The DOS file FORMAT.COM resides in a subdirectory called C:\DOS
    - Just for fun, we'll Password Protect this example and the password
      we'll use is "ZEBRA".

Now, hold down the ALT key and press letter "A":  <Alt-A>

You should see the Menu Item Settings window appear, asking you to
"Enter Settings for Menu Item A".  This window is where you will enter
settings for any of the 24 available Menu Items within a PC Dashboard menu.
Enter the settings for our example as follows:

    Menu Prompt    : Format a Floppy      (try out the PgUp/PgDn keys here)
    Password       : ZEBRA
    Directory Path : C:\DOS
    Command Line 1 : FORMAT A:

Command Lines 2-10 will be left blank in our example.  Command Lines are
where you put your list of computer tasks to be performed in sequence when

the Menu Item is run.  (Tip: Use PC Dashboard's 10 Command Lines instead of
writing batch files!)

Next, press the <F10> key to save the settings and close the Item Settings
window.  You'll now see the prompt "Format a Floppy" displayed on the MAIN
menu as Menu Item A.  The prompt, its color, and its settings are
permanently saved in the menu settings file until they are changed or
erased.

Run the example now from the MAIN menu by pressing letter <A>.  Because the
example is protected by the password "ZEBRA", you will be asked to give the
password.  After correctly entering the word "ZEBRA", the example will run.
(If you're running the Format a Floppy example and don't actually want to
format one, just press <return> without putting a disk into Drive A.)  When
you've finished the task or application program, you will return to the MAIN
menu display!


-- HELP KEY --

You probably have already noticed the "F1 = Help" message in the lower
rectangle (On-Screen Note area) of the MAIN menu.  Press the <F1> key
from the MAIN menu and PC Dashboard's Help Window will pop up.  This window
lists shortcut keys that will be very important to you when setting up your
menus.  The keys listed may be used for your convenience while the MAIN menu
is being displayed or even when the Help Window is active.  To make the Help
Window disappear, press any key.


-- FUNCTION MENU --

One of the most important keys listed in PC Dashboard's Help Window is the
slash key "/".  This key brings up the Function Menu, which allows easy
access to most of PC Dashboard's customizing features.  (You've probably
already found it!)  After you press the slash key "/", you will see a
horizontal menu of functions with a description line underneath.  To
highlight the selection you want, just use the left or right arrow keys to
move to your selection and press <return>.  You can also make a selection by
pressing the first letter of the desired function.  (If you are a
spreadsheet user, this type of menu should be very familiar.)

You generally can understand most of PC Dashboard's features intuitively by
exploring the items on the Function Menu.  For reference, however,
descriptions of the functions follow:

ABOUT ( /A ) - Displays the PC Dashboard Title Window

MENU ( /M )  - Displays a submenu of functions pertaining to the current
               menu.  The following are descriptions of this submenu's
               functions:

  -ITEM ( /MI )  - Allows you to edit a Menu Item's settings.  A quicker way
                   of doing this function is to press <Alt-letter> at the
                   MAIN menu, where "letter" is the Item you wish to edit.
                   See the section entitled "Editing Menu Items" for more
                   information.

  -NOTES ( /MN ) - This selection allows you to edit the On-Screen Notes
                   area.  You can put your own notes or messages inside the
                   lower rectangle of the MAIN menu screen.  Pressing <F2>
                   while at the MAIN menu will also activate this function.
                   (The Licensed Version of PC Dashboard comes with a
                   utility program called "BigNotes".  "BigNotes" lets you
                   write colorful notes into this area in letters that are 3
                   lines high!)

  -TITLE ( /MT ) - This function is used to change the current menu's Title.
                   The default Title is "PC Dashboard".  You can change the
                   Title's color while editing by pressing PgUp or PgDn.

  -COLUMNS ( /MC ) - Allows you to set the number of columns of Menu Items
                   to be displayed on the current menu.  Each column
                   contains 6 items and up to 4 columns (24 items) may be
                   used.  All 24 items are saved in the menu's settings
                   file, but only the currently visible items will be
                   active.  Increasing the number of columns will decrease
                   the visible characters of the active Menu Prompts.

  -RE-ARRANGE ( /MR ) - Lets you Cut (delete), Copy, or Paste Menu Item
                   Settings.  Cut or copied items are kept in memory for
                   later "pasting" to another Item Letter on ANY menu.

  -DELETE ( /MD ) - Deletes the currently-displayed SUBmenu.  (available
                   only when the current menu is a submenu.)

SYSTEM ( /S ) - Displays a submenu of functions pertaining to the PC
               Dashboard system.  It is protected by the system password.
               We strongly recommend that you use a System Password.  The
               submenu includes the following commands:

  -COLORS ( /SC ) - Displays a window simulation of the computer's screen in
                   miniature, allowing you to view and change the System's
                   colors.  This window lists instructions on how to change
                   the colors.  You may also activate this function from the
                   MAIN menu by pressing <F7>.

  -OPTIONS ( /SO ) - Sets certain options relating to your computer.  You
                   will see a window with 4 Yes/No options.  The options
                   are: Auto Screen Blank, Sound, Date & Time Display, and
                   Snow Filter.  Disabling the Snow Filter can make your
                   screen displays faster.

  -PASSWORDS ( /SP ) - Displays another submenu of functions for setting the
                   system's passwords and protection features.  BE CAREFUL
                   THAT YOU WRITE THESE PASSWORDS DOWN AND HIDE THEM AWAY
                   SOMEWHERE IN CASE YOU FORGET THEM !

     -REGISTRATION ( /SPR ) - This is where you enter your Registration
                   Code.  This code is supplied only with registered
                   versions of PC Dashboard.

     -SYSTEM ( /SPS ) - Allows you to enter the System Password of your
                   choice, which always protects the System function
                   submenu, plus any other activities set for protection.

     -ENTRY ( /SPE ) - Password to protect against entry into PC Dashboard.
                   This feature can keep people COMPLETELY out of your
                   computer system if PC Dashboard is run (as recommended)
                   from AUTOEXEC.BAT.

     -PROTECTION ( /SPP ) - Sets the activities protected by the System
                   Password.  You'll see a window with 4 Yes/No options.
                   The activities include: Settings-This Menu, Settings-
                   All Menus, Gateway to DOS, and Quitting PC Dashboard.

GATEWAY ( /G ) - Provides a quick "shell" into DOS, while keeping PC
               Dashboard memory-resident.  Be sure to type "EXIT" to return
               to the menu. (Don't type "MENU" when "shelling" or you will
               eventually run out of memory!)  Pressing <F9> while at the
               MAIN menu will also activate the Gateway function.

QUIT ( /Q )  - Completely Quits PC Dashboard and returns to DOS.  This is
               the ONLY way to completely quit the program.


-- EDITING MENU ITEMS --

Here are more detailed instructions on editing Menu Items.  To activate the
Menu Item Settings window, press <ALT-letter> from the MAIN menu, where
"letter" is the letter of the Item you are editing.

Menu Prompt   - Enter the text describing the selection that should be
                displayed on the menu.  The small dots above this line are
                indicators to show how much of the Prompt will be visible
                with a given number of Menu Columns (see /MC above).  Press
                PgUp or PgDn when editing the Menu Prompt to change its
                color.

Password      - Each Menu Item can have its own unique Password, restricting
                use to those who know the unique password or System Password.
                If you don't need the Item protected, just leave the
                Password line blank.

Directory Path - This line tells PC Dashboard where to find the commands
                that follow (specifically Command Line 1).  Enter the
                correct subdirectory, beginning with the drive specification
                (usually C:).  PC Dashboard will not allow you to enter an
                invalid Directory Path.

On Command Lines 1-10, enter the commands that run the Menu Item's
particular task.  With few exceptions, you use the same syntax rules as you
would with any command entered from DOS.  Command Line 1 has a few special
characteristics.  It may contain any one of 3 unique symbols in its first
character position which give PC Dashboard special information about the
commands that follow:

      @  -  SUBMENU indicator.  The "@" symbol in the 1st character position
            tells PC Dashboard that the Menu Item "calls" a submenu.  The 8
            characters (or less) following the @ represent the filename of
            the submenu's settings file. (Example: @GAMES would create a
            submenu file named "GAMES".)

            Submenus are automatically created. If PC Dashboard is unable to
            find the submenu file listed on Command Line 1, then it will
            create and display a new one.  The "calling" Menu Prompt becomes
            the new submenu's title.  The Directory Path is ignored when
            calling a submenu.  (See "More about Submenus" for additional
            information.)

      #  -  MEMORY-RESIDENT Indicator - The "#" symbol in the 1st character
            position of Command Line 1 tells PC Dashboard to remain memory-
            resident when you run the menu item.  This feature greatly
            increases the speed with which the menu is re-displayed after a
            task is completed.  Be careful here; if the Menu Item runs a
            large application, the potential exists for running out of
            memory.

      !  -  The exclamation mark "!", when used as the 1st character of
            Command Line 1 instructs PC Dashboard to "shell" to the
            subdirectory referenced in the "Directory Path" line.  Any
            commands after the "!" on any line will be ignored.  PC
            Dashboard remains in memory during this shell and is re-
            activated by typing the word "EXIT".  (Do NOT type "MENU" while
            shelling.)

PARAMETER PASSING Indicator - Another significant symbol that may be
inserted into any Command Line is the ampersand - "&".  Including the "&" in
a Command Line will cause PC Dashboard to pause and prompt you for input
when the Menu Item is selected.  This is sometimes referred to as "parameter
passing".  For example, if the command "EDITOR" runs a text editing program
called EDITOR, the command line " EDITOR & " would cause PC Dashboard to
prompt you for a filename to edit when the selection is run.

Help Screen - While editing Menu Item settings, you may at any time press
the <F1> key to display a handy Help Screen that reminds you of all these
special characters and keystrokes.

Saving your Changes - To save the changes made to Menu Item settings, press
the <F10> key at any time.  Use the <ESC> key to close the window without
saving your changes.


-- MORE ABOUT SUBMENUS --

Submenus are extremely useful for organizing your menu selections into
categories or if you need more than the 24 Menu Items available per menu.
By using the password protection routines, you can also isolate certain
menus for use only by individuals who know the password(s).

The MAIN menu (highest level) is automatically created the first time you
run PC Dashboard. While at the MAIN menu, you will notice in the lower left-
hand of the screen a message that says " [1] MAIN ".  This means that you
are at Menu Level 1 and that the current menu's filename is "MAIN"
(actually, it is MAIN.STG).

As you have learned, the "@" character creates or calls a submenu when
used as the 1st character on Command Line 1 (See previous section).  When
you create or call a submenu, you'll notice that the lower left-hand
message changes to read " [2] filename ".  This shows that you are now at
Menu Level 2 and the current menu's filename is ..whatever.  From this

submenu, you can call still other submenus!  Although only 20 Menu Levels
can be active at any one time (we doubt you will need that many), the number
of submenus that you can create is virtually unlimited.

From any menu level, press <ESC> or <PgUp> to "back up" to the previous
level.  Pressing <Home> will return you immediately to the MAIN menu
(Level 1).


-- USING BATCH FILES - A POTENTIAL PROBLEM --

PC Dashboard's 10 command lines per menu setting should free you from having
to write batch files for your various computer tasks.  However, there may be
some occasions when you need to run a batch file FROM PC Dashboard.  Also,
a few popular application programs initiate themselves via a batch file.

Important:  Batch files can cause PC Dashboard's batch processing to
            abort, preventing your return to the menu and leaving you
            stranded and lonely at the DOS "C:\" prompt.

Fortunately, you have the option of 2 very easy solutions to this situation:

(1) If the batch file's operation does NOT require much memory, you should
    run it from your menu by placing the pound sign "#" immediately before
    the batch file's command on Command Line 1.  This causes PC Dashboard to
    remain in memory while your batch file runs and the menu will re-display
    normally and quickly. (Note: Do NOT add the "PCD" command to the end if
    you use this option.  If you do, you could run out of memory.)

(2) If the batch file's operation requires lots of memory, your system's
    memory size may prevent you from using the # option (above).  In this
    case, you need to simply ADD THE COMMAND "PCD" TO THE END OF YOUR BATCH
    FILE.  This will insure that your menu is re-displayed after your batch
    file finishes its work.


-- PROGRAM FILES --

This section contains important information about PC Dashboard's files and
their related functions:

MENU.BAT -   The program initiation file.  PC Dashboard must ALWAYS be run
             using this batch file by entering the command "MENU".  Here is
             the complete listing of MENU.BAT:

                  ECHO OFF
                  CLS
                  CD C:\PCDASH
                  DEL PCDASH.TRL
                  PCD

             It is VERY IMPORTANT that PC Dashboard's files reside in the
             same subdirectory referenced by MENU.BAT or the program will
             not work properly.  If you MUST use an alternate drive letter
             or subdirectory name, you should modify line 3 of MENU.BAT to
             reflect the change.  Make sure that the subdirectory name is
             also included in the PATH command of your system's AUTOEXEC.BAT
             file.

PCD.BAT -    This short batch file is called from the last line of MENU.BAT
             and sets up PC Dashboard's batch menu process.  Do NOT attempt
             to run PC Dashboard directly from this file.  You should always
             use the command "MENU".  Here is the complete listing of
             PCD.BAT:

                  PCDASH
                  RUN

PCDASH.EXE - The actual PC Dashboard program.  Do NOT attempt to run
             PC Dashboard directly from this file.  You should always use
             the command "MENU".

PCDASH.DOC - This file contains the evaluation documentation you are now
             reading.  If you share your evaluation copy of PC Dashboard
             with others, PCDASH.DOC should be included, along with
             MENU.BAT, PCD.BAT, and PCDASH.EXE.

PCDSH1.ARC - If you received your evaluation copy directly from No Sweat
             Software, this file is included on your evaluation disk.  It is
             a properly "archived" library of the 4 required PC Dashboard
             files.  This file is in the generally accepted format for
             uploading to local and national computer bulletin board
             services.  As we've mentioned before, you are encouraged to
             share the evaluation version of PC Dashboard with others.


-- IN CONCLUSION --

Well, that's about it!  We trust this manual has given you the necessary
instructions to evaluate PC Dashboard.  Please remember that you are NOT
licensed to use this evaluation version on a continuing basis.

Thanks very much for your interest and support.  We look forward to hearing
from you.

                                           No Sweat Software, Inc.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

REGISTRATION / ORDER FORM
-------------------------


To:       No Sweat Software, Inc.                     Date: ______________
          10 E. Church Street
          Martinsville, VA  24112                     (703) 632-3982


Please send me the latest licensed version of PC Dashboard in the quantities
indicated.  Each licensed copy ordered is to be used on only one computer at
any one time.

                                                   PRICE     EXTENDED
ITEM                                       QTY     EACH      PRICE
-----------------------------------       -----    ------    ---------
PC Dashboard (tm)
   - Custom Menu Software for             _____    $39.95    $________
     IBM-PC's and Compatibles

Sales Tax 4.5% (Virginia residents only)                     $________

Shipping and Handling                                        $   4.00
                                                              --------

                                                     TOTAL:  $________


Please Charge to:     [ ] Visa          [ ] Check (USA Bank) is enclosed
                      [ ] MasterCard

Card Number___________________________________

Expiration Date________  Signature_________________________

This software to be registered in name of (please print clearly):

     Name     __________________________________________________
     Company  __________________________________________________
     Shipping Address___________________________________________
              __________________________________________________
     City ____________________________ State ________ Zip ______
     Country _____________________ Phone (_____) ______-________

     What size Floppy Disk ?      [ ] 5-1/4"          [ ] 3-1/2"

     Type of computer: _________________________________________


Discounts available for large quantities / Dealer inquiries welcome / v1.0

No Sweat Software, Inc.                   Federal Employer ID # 54-1451209


```
{% endraw %}

## PCDASH.DOC

{% raw %}
```
--------------------------------------------------------------------------
PC Dashboard (tm)                       User's Manual - Evaluation Version
Custom Menus for Your PC                May 16, 1988
--------------------------------------------------------------------------

"PC Dashboard" by John Franck
Copyright (C) 1988 No Sweat Software, Inc.
All rights reserved

No Sweat Software, Inc.                 (703) 632-3982
10 E. Church Street                     CompuServe 70077,3453
Martinsville, VA  24112


"PC Dashboard" and "BigNotes" are trademarks of No Sweat Software, Inc.
"IBM-PC" is a registered trademark of International Business Machines Corp.
--------------------------------------------------------------------------

-- INTRODUCTION --

PC Dashboard is an easy-to-use menuing system for IBM PC's and compatibles
equipped with fixed disk drives.  It eliminates the need for you to remember
all those complicated DOS commands or directory paths when accessing programs
and routines from your hard disk.  You can enter the path and program
startup commands ONCE into PC Dashboard's Menu Item Settings window; after
that, simply pressing the appropriate letter key will launch your program or
specific task.  When your work is completed, PC Dashboard's Main Menu screen
will return, ready for another selection.

PC Dashboard is very easy to set up and modify.  You can customize the
program to suit almost any computer environment, and the menu display
options are virtually unlimited.  It offers speed and productivity to
experienced computer users, and insulates the novice or occasional PC user
from having to remember all those unfriendly commands necessary to run a
hard disk system.

Finally, you can forget about DOS and concentrate on getting your work done!


-- SOME FEATURES OF PC DASHBOARD --

 - Simple-to-learn format that is fast and easy to use
 - Menu settings are entered directly from the program - no text editor
   needed
 - Clear, colorfully attractive screen layouts
 - Menus with up to 24 items per menu - all defined by YOU
 - Menu prompts, passwords, directory paths, and command settings (with up
   to 10 lines) - all defined by you and entered ONCE
 - Virtually unlimited number of submenus created automatically and
   displayed instantly
 - Personalized menu titles
 - Colorful on-screen user notes customized in either regular text or
   extra-large "BigNotes"
 - Parameter Passing - menu selections can prompt you for input
 - Option to keep PC Dashboard memory-resident - increasing display speed
 - Gateway to DOS - can shell to any subdirectory that you designate
 - Optional Time and Date display
 - Optional Clock display with soft chimes on the hour
 - Optional Screen-Saver - blanks after 4 minutes of inactivity
 - System Password protection scheme with extensive flexibility


-- A NOTE ABOUT REGISTRATION --

It is our belief at No Sweat Software that people should have a chance to
fully evaluate a software package before handing over the dough.  We have
confidence that you will find PC Dashboard to be an indispensible utility
for your PC and that you will find it within your good conscience to
register.

Although the evaluation version is fully functional, annoying and
embarrassing messages will continue to appear, indicating that you have not
yet registered.  When you register, you will receive the latest licensed
version of PC Dashboard, which includes the official program disk, complete
printed user's manual, registration code, certain utility programs, product
support from No Sweat Software, and access to future upgrades of PC
Dashboard at nominal cost.  (A registration/order form can be found at the
end of this manual.)

You are granted a limited license to use this evaluation version of
PC Dashboard on a trial basis in order to decide if it is suitable for your
needs.  The use of an unregistered copy of PC Dashboard, beyond a reasonable
evaluation period, is prohibited.


-- PROGRAM FILES AND COPYING --

Your evaluation copy of PC Dashboard should consist of only 4 files:
PCDASH.EXE, PCDASH.DOC, MENU.BAT, and PCD.BAT.  You should ERASE any other
files that you may have received with your evaluation copy.

You may NOT modify PC Dashboard's files in any way, including but not
limited to decompiling, disassembling, or any other means of reverse
engineering.

You are ENCOURAGED to copy PC Dashboard's 4 evaluation files and share them
with others for their own evaluation.  All four, including the file
containing this documentation, must be provided TOGETHER in their original
and unaltered form.  You may NOT sell the evaluation version of PC Dashboard
under ANY circumstances!

Operators of electronic bulletin boards may post these 4 files for
downloading by their users so long as these conditions are met and ONLY if
the 4 files are combined into one "libraried" or "archived" file.  (If you
received your evaluation copy directly from No Sweat Software, an archived
file, "PCDSH1.ARC", is included on your disk.)  You should contact No Sweat
Software if you need technical assistance in archiving the files.

Mail-order distributors of public domain or ShareWare software may
distribute evaluation copies subject to the above conditions only after
obtaining written permission from No Sweat Software, Inc.


-- DISCLAIMER --

EVEN THOUGH NO SWEAT SOFTWARE HAS TESTED THIS SOFTWARE AND REVIEWED THIS
DOCUMENTATION, NO SWEAT SOFTWARE MAKES NO WARRANTY OR REPRESENTATION, EITHER
EXPRESSED OR IMPLIED, WITH RESPECT TO THE SOFTWARE, ITS QUALITY,
PERFORMANCE, OR FITNESS FOR A PARTICULAR PURPOSE.

IN NO EVENT WILL NO SWEAT SOFTWARE, OR ANYONE ELSE WHO HAS BEEN INVOLVED IN
THE CREATION, PRODUCTION, OR DELIVERY OF THIS PROGRAM, BE LIABLE FOR DIRECT,
INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM ANY
DEFECT IN THE SOFTWARE OR ITS DOCUMENTATION, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.  IN PARTICULAR, NO SWEAT SOFTWARE SHALL HAVE NO
LIABILITY FOR ANY PROGRAMS OR DATA STORED OR USED WITH THIS SOFTWARE,
INCLUDING THE COSTS OF RECOVERING SUCH PROGRAMS OR DATA.


-- ABOUT THIS MANUAL --

This manual briefly covers ALL of PC Dashboard's many features.  It is not
"pretty", but is quite functional.  (We have tried to keep the PCDASH.DOC
file as small as possible for uploading and downloading to computer
bulletin board services across the country.)  As mentioned, when you
register your copy of PC Dashboard, you'll be supplied with the official
printed User's Manual, along with the other benefits of registration.


-- INSTALLATION --

PC Dashboard's files should be kept in their own subdirectory.  Our
instructions use the subdirectory name \PCDASH, which we strongly suggest
you use also.  If you MUST use a different subdirectory name, then the third
line of the MENU.BAT file will need to be modified in order for PC Dashboard
to work properly.  (See the section entitled "Program Files" for a listing
and description of MENU.BAT and other files.)

Here are detailed instructions for proper installation:

    1. Create a subdirectory called \PCDASH, where all of PC Dashboard's
       files will reside.  To do this, from the "root" directory (C:\) enter
       the following:

            MD PCDASH             <return>

    2. Make \PCDASH the current subdirectory by entering:

            CD C:\PCDASH          <return>

    3. Place the disk containing PC Dashboard's evaluation files into
       Drive A.  Now copy the 4 files into the \PCDASH subdirectory:

            COPY A:MENU.BAT       <return>
            COPY A:PCD.BAT        <return>
            COPY A:PCDASH.EXE     <return>
            COPY A:PCDASH.DOC     <return>

       Be sure the copies were successful by listing them with the command:

            DIR C:\PCDASH

       You should see the 4 files listed in the \PCDASH subdirectory.

    4. Modify your system's AUTOEXEC.BAT file to include a reference to the
       \PCDASH subdirectory in your PATH command and to add the command
       "MENU" at the end.  The following are instructions on how to do this:

       In order for your computer to know where to find PC Dashboard, you
       need to include the subdirectory \PCDASH in the PATH command of your
       system's AUTOEXEC.BAT file.  AUTOEXEC.BAT is located in the root
       directory and may be listed by entering:

            CD C:\                     <return>
            TYPE AUTOEXEC.BAT          <return>

       If a PATH command is listed in AUTOEXEC.BAT, it will look something
       like:    PATH=C:\;C:\DOS
       Additional subdirectories could be listed in the PATH command also.

       The PATH command needs to be added or rewritten to include a
       reference to the subdirectory \PCDASH.  When edited, the PATH should
       look something like:   PATH=C:\PCDASH;C:\xxxx;C:\xxxx , where "xxxx"
       stands for the names of other subdirectories that could be listed.

       You can add this PATH command to AUTOEXEC.BAT with a text editor or
       by re-creating the entire AUTOEXEC.BAT file as follows:

         -  At the DOS prompt C:>, type

                COPY CON: AUTOEXEC.BAT      <return>

         -  Re-type the commands exactly that were originally in
            AUTOEXEC.BAT, line by line until you reach the PATH command.

         -  Include the \PCDASH subdirectory in the PATH command when it is
            re-entered or create a new one as follows:

                PATH=C:\PCDASH;C:\xxxx;C:\xxxx

            "xxxx", as you already know, stands for any other subdirectories
            that may have been included in the original PATH command.
            Placing \PCDASH "early" in the command can improve performance
            on slower computers.

         -  At the end of AUTOEXEC.BAT, add the command:

               MENU          <return>

            This command will cause PC Dashboard to run automatically every
            time your computer is started.

         -  To complete the re-writing of AUTOEXEC.BAT, press <F6> and then
            press <return>.  You should see the message "1 File(s) copied".

    5. Press CTRL-ALT-DEL to "re-boot" your system.  This step is necessary
       this first time so that your computer will know where to find PC
       Dashboard's files.  This completes the installation process.


-- GETTING STARTED --

After you properly load the PC Dashboard program files into the \PCDASH
subdirectory and make sure that the AUTOEXEC.BAT file has been correctly
modified, restart the system (if you haven't already) by pressing
<CTRL-ALT-DEL>.  During startup, the computer will check the PATH command in
the AUTOEXEC.BAT file to learn where to find PC Dashboard.

If "MENU" was included as the last command in your AUTOEXEC.BAT file,
PC Dashboard will run automatically.  If not, simply enter the command
"MENU" at the DOS prompt.

IMPORTANT: Do NOT attempt to start PC Dashboard by entering the command
           "PCDASH" or "PCD". If you do, the program will run, but the menu
           may not re-display properly after you run a menu selection.
           Always use the command "MENU" to start the program.

When PC Dashboard starts, the MAIN menu screen will appear, overlaid by the
Program Title window.  This window will appear one time each day, reminding
you that this is an Evaluation Copy of PC Dashboard and that registration is
required. The Program Title window will disappear for the time being when
you press any key.  You'll see the MAIN menu screen displayed.

The MAIN menu screen will become very familiar to you.  It is from this
screen that you will run, at the touch of a single key, all of your
applications and computer tasks.  The letters (A-L) are referred to as
"Menu Items".  Each Menu Item has its own unique settings that you edit by
pressing <Alt-x>, where x is the letter of the item to be edited.


-- AN EXAMPLE --

To show you how easy it is to enter Menu Item settings, let's enter settings
into Menu Item A for the familiar DOS routine, Formatting a Floppy Disk.
(Since formatting floppies is not very exciting, you could substitute any of
your own routines or startup commands for a favorite application program in
place of this example.)

We'll assume the following about our example:
    - We want our Menu Prompt to read "Format a Floppy"
    - The DOS file FORMAT.COM resides in a subdirectory called C:\DOS
    - Just for fun, we'll Password Protect this example and the password
      we'll use is "ZEBRA".

Now, hold down the ALT key and press letter "A":  <Alt-A>

You should see the Menu Item Settings window appear, asking you to
"Enter Settings for Menu Item A".  This window is where you will enter
settings for any of the 24 available Menu Items within a PC Dashboard menu.
Enter the settings for our example as follows:

    Menu Prompt    : Format a Floppy      (try out the PgUp/PgDn keys here)
    Password       : ZEBRA
    Directory Path : C:\DOS
    Command Line 1 : FORMAT A:

Command Lines 2-10 will be left blank in our example.  Command Lines are
where you put your list of computer tasks to be performed in sequence when

the Menu Item is run.  (Tip: Use PC Dashboard's 10 Command Lines instead of
writing batch files!)

Next, press the <F10> key to save the settings and close the Item Settings
window.  You'll now see the prompt "Format a Floppy" displayed on the MAIN
menu as Menu Item A.  The prompt, its color, and its settings are
permanently saved in the menu settings file until they are changed or
erased.

Run the example now from the MAIN menu by pressing letter <A>.  Because the
example is protected by the password "ZEBRA", you will be asked to give the
password.  After correctly entering the word "ZEBRA", the example will run.
(If you're running the Format a Floppy example and don't actually want to
format one, just press <return> without putting a disk into Drive A.)  When
you've finished the task or application program, you will return to the MAIN
menu display!


-- HELP KEY --

You probably have already noticed the "F1 = Help" message in the lower
rectangle (On-Screen Note area) of the MAIN menu.  Press the <F1> key
from the MAIN menu and PC Dashboard's Help Window will pop up.  This window
lists shortcut keys that will be very important to you when setting up your
menus.  The keys listed may be used for your convenience while the MAIN menu
is being displayed or even when the Help Window is active.  To make the Help
Window disappear, press any key.


-- FUNCTION MENU --

One of the most important keys listed in PC Dashboard's Help Window is the
slash key "/".  This key brings up the Function Menu, which allows easy
access to most of PC Dashboard's customizing features.  (You've probably
already found it!)  After you press the slash key "/", you will see a
horizontal menu of functions with a description line underneath.  To
highlight the selection you want, just use the left or right arrow keys to
move to your selection and press <return>.  You can also make a selection by
pressing the first letter of the desired function.  (If you are a
spreadsheet user, this type of menu should be very familiar.)

You generally can understand most of PC Dashboard's features intuitively by
exploring the items on the Function Menu.  For reference, however,
descriptions of the functions follow:

ABOUT ( /A ) - Displays the PC Dashboard Title Window

MENU ( /M )  - Displays a submenu of functions pertaining to the current
               menu.  The following are descriptions of this submenu's
               functions:

  -ITEM ( /MI )  - Allows you to edit a Menu Item's settings.  A quicker way
                   of doing this function is to press <Alt-letter> at the
                   MAIN menu, where "letter" is the Item you wish to edit.
                   See the section entitled "Editing Menu Items" for more
                   information.

  -NOTES ( /MN ) - This selection allows you to edit the On-Screen Notes
                   area.  You can put your own notes or messages inside the
                   lower rectangle of the MAIN menu screen.  Pressing <F2>
                   while at the MAIN menu will also activate this function.
                   (The Licensed Version of PC Dashboard comes with a
                   utility program called "BigNotes".  "BigNotes" lets you
                   write colorful notes into this area in letters that are 3
                   lines high!)

  -TITLE ( /MT ) - This function is used to change the current menu's Title.
                   The default Title is "PC Dashboard".  You can change the
                   Title's color while editing by pressing PgUp or PgDn.

  -COLUMNS ( /MC ) - Allows you to set the number of columns of Menu Items
                   to be displayed on the current menu.  Each column
                   contains 6 items and up to 4 columns (24 items) may be
                   used.  All 24 items are saved in the menu's settings
                   file, but only the currently visible items will be
                   active.  Increasing the number of columns will decrease
                   the visible characters of the active Menu Prompts.

  -RE-ARRANGE ( /MR ) - Lets you Cut (delete), Copy, or Paste Menu Item
                   Settings.  Cut or copied items are kept in memory for
                   later "pasting" to another Item Letter on ANY menu.

  -DELETE ( /MD ) - Deletes the currently-displayed SUBmenu.  (available
                   only when the current menu is a submenu.)

SYSTEM ( /S ) - Displays a submenu of functions pertaining to the PC
               Dashboard system.  It is protected by the system password.
               We strongly recommend that you use a System Password.  The
               submenu includes the following commands:

  -COLORS ( /SC ) - Displays a window simulation of the computer's screen in
                   miniature, allowing you to view and change the System's
                   colors.  This window lists instructions on how to change
                   the colors.  You may also activate this function from the
                   MAIN menu by pressing <F7>.

  -OPTIONS ( /SO ) - Sets certain options relating to your computer.  You
                   will see a window with 4 Yes/No options.  The options
                   are: Auto Screen Blank, Sound, Date & Time Display, and
                   Snow Filter.  Disabling the Snow Filter can make your
                   screen displays faster.

  -PASSWORDS ( /SP ) - Displays another submenu of functions for setting the
                   system's passwords and protection features.  BE CAREFUL
                   THAT YOU WRITE THESE PASSWORDS DOWN AND HIDE THEM AWAY
                   SOMEWHERE IN CASE YOU FORGET THEM !

     -REGISTRATION ( /SPR ) - This is where you enter your Registration
                   Code.  This code is supplied only with registered
                   versions of PC Dashboard.

     -SYSTEM ( /SPS ) - Allows you to enter the System Password of your
                   choice, which always protects the System function
                   submenu, plus any other activities set for protection.

     -ENTRY ( /SPE ) - Password to protect against entry into PC Dashboard.
                   This feature can keep people COMPLETELY out of your
                   computer system if PC Dashboard is run (as recommended)
                   from AUTOEXEC.BAT.

     -PROTECTION ( /SPP ) - Sets the activities protected by the System
                   Password.  You'll see a window with 4 Yes/No options.
                   The activities include: Settings-This Menu, Settings-
                   All Menus, Gateway to DOS, and Quitting PC Dashboard.

GATEWAY ( /G ) - Provides a quick "shell" into DOS, while keeping PC
               Dashboard memory-resident.  Be sure to type "EXIT" to return
               to the menu. (Don't type "MENU" when "shelling" or you will
               eventually run out of memory!)  Pressing <F9> while at the
               MAIN menu will also activate the Gateway function.

QUIT ( /Q )  - Completely Quits PC Dashboard and returns to DOS.  This is
               the ONLY way to completely quit the program.


-- EDITING MENU ITEMS --

Here are more detailed instructions on editing Menu Items.  To activate the
Menu Item Settings window, press <ALT-letter> from the MAIN menu, where
"letter" is the letter of the Item you are editing.

Menu Prompt   - Enter the text describing the selection that should be
                displayed on the menu.  The small dots above this line are
                indicators to show how much of the Prompt will be visible
                with a given number of Menu Columns (see /MC above).  Press
                PgUp or PgDn when editing the Menu Prompt to change its
                color.

Password      - Each Menu Item can have its own unique Password, restricting
                use to those who know the unique password or System Password.
                If you don't need the Item protected, just leave the
                Password line blank.

Directory Path - This line tells PC Dashboard where to find the commands
                that follow (specifically Command Line 1).  Enter the
                correct subdirectory, beginning with the drive specification
                (usually C:).  PC Dashboard will not allow you to enter an
                invalid Directory Path.

On Command Lines 1-10, enter the commands that run the Menu Item's
particular task.  With few exceptions, you use the same syntax rules as you
would with any command entered from DOS.  Command Line 1 has a few special
characteristics.  It may contain any one of 3 unique symbols in its first
character position which give PC Dashboard special information about the
commands that follow:

      @  -  SUBMENU indicator.  The "@" symbol in the 1st character position
            tells PC Dashboard that the Menu Item "calls" a submenu.  The 8
            characters (or less) following the @ represent the filename of
            the submenu's settings file. (Example: @GAMES would create a
            submenu file named "GAMES".)

            Submenus are automatically created. If PC Dashboard is unable to
            find the submenu file listed on Command Line 1, then it will
            create and display a new one.  The "calling" Menu Prompt becomes
            the new submenu's title.  The Directory Path is ignored when
            calling a submenu.  (See "More about Submenus" for additional
            information.)

      #  -  MEMORY-RESIDENT Indicator - The "#" symbol in the 1st character
            position of Command Line 1 tells PC Dashboard to remain memory-
            resident when you run the menu item.  This feature greatly
            increases the speed with which the menu is re-displayed after a
            task is completed.  Be careful here; if the Menu Item runs a
            large application, the potential exists for running out of
            memory.

      !  -  The exclamation mark "!", when used as the 1st character of
            Command Line 1 instructs PC Dashboard to "shell" to the
            subdirectory referenced in the "Directory Path" line.  Any
            commands after the "!" on any line will be ignored.  PC
            Dashboard remains in memory during this shell and is re-
            activated by typing the word "EXIT".  (Do NOT type "MENU" while
            shelling.)

PARAMETER PASSING Indicator - Another significant symbol that may be
inserted into any Command Line is the ampersand - "&".  Including the "&" in
a Command Line will cause PC Dashboard to pause and prompt you for input
when the Menu Item is selected.  This is sometimes referred to as "parameter
passing".  For example, if the command "EDITOR" runs a text editing program
called EDITOR, the command line " EDITOR & " would cause PC Dashboard to
prompt you for a filename to edit when the selection is run.

Help Screen - While editing Menu Item settings, you may at any time press
the <F1> key to display a handy Help Screen that reminds you of all these
special characters and keystrokes.

Saving your Changes - To save the changes made to Menu Item settings, press
the <F10> key at any time.  Use the <ESC> key to close the window without
saving your changes.


-- MORE ABOUT SUBMENUS --

Submenus are extremely useful for organizing your menu selections into
categories or if you need more than the 24 Menu Items available per menu.
By using the password protection routines, you can also isolate certain
menus for use only by individuals who know the password(s).

The MAIN menu (highest level) is automatically created the first time you
run PC Dashboard. While at the MAIN menu, you will notice in the lower left-
hand of the screen a message that says " [1] MAIN ".  This means that you
are at Menu Level 1 and that the current menu's filename is "MAIN"
(actually, it is MAIN.STG).

As you have learned, the "@" character creates or calls a submenu when
used as the 1st character on Command Line 1 (See previous section).  When
you create or call a submenu, you'll notice that the lower left-hand
message changes to read " [2] filename ".  This shows that you are now at
Menu Level 2 and the current menu's filename is ..whatever.  From this

submenu, you can call still other submenus!  Although only 20 Menu Levels
can be active at any one time (we doubt you will need that many), the number
of submenus that you can create is virtually unlimited.

From any menu level, press <ESC> or <PgUp> to "back up" to the previous
level.  Pressing <Home> will return you immediately to the MAIN menu
(Level 1).


-- USING BATCH FILES - A POTENTIAL PROBLEM --

PC Dashboard's 10 command lines per menu setting should free you from having
to write batch files for your various computer tasks.  However, there may be
some occasions when you need to run a batch file FROM PC Dashboard.  Also,
a few popular application programs initiate themselves via a batch file.

Important:  Batch files can cause PC Dashboard's batch processing to
            abort, preventing your return to the menu and leaving you
            stranded and lonely at the DOS "C:\" prompt.

Fortunately, you have the option of 2 very easy solutions to this situation:

(1) If the batch file's operation does NOT require much memory, you should
    run it from your menu by placing the pound sign "#" immediately before
    the batch file's command on Command Line 1.  This causes PC Dashboard to
    remain in memory while your batch file runs and the menu will re-display
    normally and quickly. (Note: Do NOT add the "PCD" command to the end if
    you use this option.  If you do, you could run out of memory.)

(2) If the batch file's operation requires lots of memory, your system's
    memory size may prevent you from using the # option (above).  In this
    case, you need to simply ADD THE COMMAND "PCD" TO THE END OF YOUR BATCH
    FILE.  This will insure that your menu is re-displayed after your batch
    file finishes its work.


-- PROGRAM FILES --

This section contains important information about PC Dashboard's files and
their related functions:

MENU.BAT -   The program initiation file.  PC Dashboard must ALWAYS be run
             using this batch file by entering the command "MENU".  Here is
             the complete listing of MENU.BAT:

                  ECHO OFF
                  CLS
                  CD C:\PCDASH
                  DEL PCDASH.TRL
                  PCD

             It is VERY IMPORTANT that PC Dashboard's files reside in the
             same subdirectory referenced by MENU.BAT or the program will
             not work properly.  If you MUST use an alternate drive letter
             or subdirectory name, you should modify line 3 of MENU.BAT to
             reflect the change.  Make sure that the subdirectory name is
             also included in the PATH command of your system's AUTOEXEC.BAT
             file.

PCD.BAT -    This short batch file is called from the last line of MENU.BAT
             and sets up PC Dashboard's batch menu process.  Do NOT attempt
             to run PC Dashboard directly from this file.  You should always
             use the command "MENU".  Here is the complete listing of
             PCD.BAT:

                  PCDASH
                  RUN

PCDASH.EXE - The actual PC Dashboard program.  Do NOT attempt to run
             PC Dashboard directly from this file.  You should always use
             the command "MENU".

PCDASH.DOC - This file contains the evaluation documentation you are now
             reading.  If you share your evaluation copy of PC Dashboard
             with others, PCDASH.DOC should be included, along with
             MENU.BAT, PCD.BAT, and PCDASH.EXE.

PCDSH1.ARC - If you received your evaluation copy directly from No Sweat
             Software, this file is included on your evaluation disk.  It is
             a properly "archived" library of the 4 required PC Dashboard
             files.  This file is in the generally accepted format for
             uploading to local and national computer bulletin board
             services.  As we've mentioned before, you are encouraged to
             share the evaluation version of PC Dashboard with others.


-- IN CONCLUSION --

Well, that's about it!  We trust this manual has given you the necessary
instructions to evaluate PC Dashboard.  Please remember that you are NOT
licensed to use this evaluation version on a continuing basis.

Thanks very much for your interest and support.  We look forward to hearing
from you.

                                           No Sweat Software, Inc.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

REGISTRATION / ORDER FORM
-------------------------


To:       No Sweat Software, Inc.                     Date: ______________
          10 E. Church Street
          Martinsville, VA  24112                     (703) 632-3982


Please send me the latest licensed version of PC Dashboard in the quantities
indicated.  Each licensed copy ordered is to be used on only one computer at
any one time.

                                                   PRICE     EXTENDED
ITEM                                       QTY     EACH      PRICE
-----------------------------------       -----    ------    ---------
PC Dashboard (tm)
   - Custom Menu Software for             _____    $39.95    $________
     IBM-PC's and Compatibles

Sales Tax 4.5% (Virginia residents only)                     $________

Shipping and Handling                                        $   4.00
                                                              --------

                                                     TOTAL:  $________


Please Charge to:     [ ] Visa          [ ] Check (USA Bank) is enclosed
                      [ ] MasterCard

Card Number___________________________________

Expiration Date________  Signature_________________________

This software to be registered in name of (please print clearly):

     Name     __________________________________________________
     Company  __________________________________________________
     Shipping Address___________________________________________
              __________________________________________________
     City ____________________________ State ________ Zip ______
     Country _____________________ Phone (_____) ______-________

     What size Floppy Disk ?      [ ] 5-1/4"          [ ] 3-1/2"

     Type of computer: _________________________________________


Discounts available for large quantities / Dealer inquiries welcome / v1.0

No Sweat Software, Inc.                   Federal Employer ID # 54-1451209


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1165

     Volume in drive A has no label
     Directory of A:\

    FILE1165 BAK      2532   1-01-80   1:27a
    FILE1165 TXT      2531   1-01-80   2:32a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  10-12-88  10:14a
    MANUAL   BAT       147  10-12-88  10:14a
    MENU     BAT        50   4-11-88   8:01a
    PCD      BAT        13   4-10-88   9:18p
    PCDASH   DOC     32473   5-17-88   9:57p
    PCDASH   EXE     81786   5-20-88   9:06p
    PCDSH1   ARC     82115   6-01-88   7:06a
           10 file(s)     202225 bytes
                          113664 bytes free
