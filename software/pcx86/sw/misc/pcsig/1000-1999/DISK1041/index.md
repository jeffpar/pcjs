---
layout: page
title: "PC-SIG Diskette Library (Disk #1041)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1041/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1041"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PUSHBUTTON"

    Access programs quickly and easily with PUSHBUTTON, a menuing system
    that runs programs at the press of a key.  The main menu has 26
    submenus, and each submenu has 26 choices for your programs and
    path information. This gives you the capability for 676 programs.
    PUSHBUTTON also provides password protection for your programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1041.TXT

{% raw %}
```
Disk No: 1041
Program Title: PUSHBUTTON
PC-SIG version: 1.2

Access programs quickly and easily with PUSHBUTTON, a menuing system
that runs programs at the press of a key.  The main menu has twenty-six
submenus, and each submenu has twenty-six choices for your programs and
path information thus giving you the capability for 676 programs.
PUSHBUTTON also provides password protection for your programs.

Usage:  Menuing System

Special Requirements:  A hard drive.

How to Start:  Type GO (press enter).

Suggested Registration: $20.00

File Descriptions:

INSTALL  EXE  Installation program.
LIMITED  PRB  Limited version of the program.
PRINTME  BAT  Copies documentation to your printer.
PUSHBUTN DOC  Documentation.
PUSHBUTN PRB  Full version of the program.
READDOC  COM  Program to list text files to screen.
README   BAT  Batch file to read PUSHBUTN.DOC.
SETUP    EXE  Set-up program.
STRIP    EXE  Removes all passwords from menu.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## PUSHBUTN.DOC

{% raw %}
```
             Copyright(C)1987,1988,1989   Phil Barnett  Acme Data

             This is the computer operated manual for Pushbutton.

Pushbutton and all of its' associated files are Shareware.
They are also Copyrighted. Please feel free to give this program to anyone
who uses a DOS based computer as long as it is distributed in unmodified
and complete form. It should work on any close clone. I developed it in 
DOS 3.3 . It is compiled in Quick Basic 4.5. It requires DOS version 3.0 
or later and a HARD disk. I use this menu exclusively on my NOVELL network. 

You may use PUSHBUTTON for 2 weeks at no charge.

Registration fee is $10.00. And for this fee, I promise to never document
these files as "U__R F______Y", which has come to mean that your computer
won't meltdown.

                 ****************************************
                 *   Phil Barnett      (305) 852-7229   *
                 *   Acme Data                          *
                 *   Box 1431                           *
                 *   Tavernier, Fl 33070                *
                 ****************************************


If you register your program, you will be notified of future updates by mail.
PC-SIG SOFTWARE LIBRARY will recieve the latest updates whenever they become
available.

I have made every effort to make Pushbutton effortless for you. I have also
tried to make it simple to install, and easy to teach it how to run your
programs. After you have taught Pushbutton how to run your programs,
you will be able to execute any program with one or two keystrokes.

(By the way, You can probably learn faster by playing with Pushbutton
than by reading this manual.)

*** Screen Blanking ***

Screen blanking will blank the monitor screen after a preselected
amount of time. This blanking only happens while a main menu or sub menu
is on your screen and only after keyboard inactivity. Pressing any key
will bring Pushbutton back on the screen.(not shift or alt or control)

*** Password Protection ***

Password protection, and an alternate limited version of the program,
will allow you to completely protect your computer from the untrained
or unauthorized user. The unlimited version allows you to teach Pushbutton
how to run your programs, and allows access to the SETUP program. The
limited version allows only menu selections to be made, and if they are
password protected, only enlightened individuals will be able to operate
those programs. Passwords can be assigned to each program, so you can
allow non-password access to some programs and password access to
others.

*** Time & Date feature ***

When you run Pushbutton it will check the system clock in the computer.
If the year (computer clock) is before 1987 you will be prompted for 
TIME & DATE before you can continue. This will assure that your system 
time & date is always current. The Day of the Week will be displayed in 
the menu. If you elect to bypass the time & date feature, and the system
year is before 1987 then the Time/Day/Date box in the menu will not appear.

*** Maximum Size ***

You are limited to running 676 (26*26) programs from Pushbutton. However
you can install more than one copy of Pushbutton as explained below.

*** Help Screen ***

If you are using the unlimited version, pressing <F1> will give you the
help screen. Hints will appear below the learn boxes whenever you are 
in learn mode.





           ***** BEGINNING OF INSTALLATION PROCEDURE *****



Now, lets install Pushbutton on your computer!

First you will want to run the PRINTME.BAT on the distribution disk. This
will give you a printed copy of the following tutorial. Just follow the 
printed instructions from this point on.

By the way INSTALL is not copy protection! It just generates and transfers
the files necessary to allow Pushbutton to operate. However, you DO have to
use it, because some of the files are dynamic in nature. It is also the only
reason you need DOS 3.X . If you install the program on a computer running 
DOS 3.X , and then copy that subdirectory exactly to your DOS 2.X machine, 
it will work fine. Remember to copy the MENU.BAT file from the root directory.

When you see <return> it means press the return or enter key.

When you see 'default directory' it means the directory that Pushbutton
actually resides in. If you accept the defaults it means a directory
named PUSH.

Put the Pushbutton distribution disk or a copy of it in drive A.
Close the door and type:

A:<return>
INSTALL<return>

You now have to answer two questions. What letter is your hard disk
assigned to, and what directory will be created. I have assumed that your
hard disk is C drive, and that we will create a directory named PUSH.
If you have two hard drives, you can install on C drive and run programs
on both drives, or vice-versa. You can also name the directory any name,
but for simplicity just accept the defaults and let INSTALL do its stuff.

*** SETUP ***

After INSTALL has run, you will be in the SETUP program, here you can
change colors, and the amount of time before screen blanking begins.
You can also change the default drive and directory so if you move
the program to a different directory you can tell Pushbutton where
its new default directory is. When you are done changing the colors and
other parameters press the escape key. This will run Pushbutton.

The following files will be generated in your root directory.

MENU.BAT              The batch file that runs the menu system.
OLDMENU.BAT           Created only if MENU.BAT already exists.

The following files will be generated in your default directory.

README.BAT            The batch file that runs the computer operated manual.
DONE.BAT              The batch file that gets you back to DOS
PUSH.BAT              The batch file that does all the work.
LIMIT.BAT             The batch file that installs the limited menu.
UNLIMIT.BAT           The batch file that installs the unlimited menu.
TEMP.BAT              This file appears only after using the .BAT option.
CONFIG.MNU            The file that keeps track of colors, blanking time,
                       drive and directory.
Z.MNU                 The menu selection that lets you get to DOS.
                       (runs DONE.BAT)
MAIN.MNU              The file that holds the main menu program names
                       and the title line.
PUSHBUTN.PRB          This is the real copy of PUSHBUTN.EXE.
LIMITED.PRB           This is the real copy of LIMITED.EXE.
PUSHBUTN.EXE          This could be either PUSHBUTN.PRB or LIMITED.PRB.
SETUP.EXE             This program sets colors, blanking time,
                       default drive, and default directory.
READDOC.COM           The file that README.BAT uses to display this manual.


*** PUSHBUTTON ***

*****************************************************************************
* If Pushbutton was just installed with INSTALL.EXE, you must leave it now, *
* and reenter with the commands:                                            *
*                                                                           *
*          CD\<return>                                                      *
*          MENU<return>                                                     *
*                                                                           *
* This is because Pushbutton must be run from a batch file to operate.      *
* This is only necessary when you run INSTALL.                              *
*****************************************************************************

Now you are in Pushbutton. You can begin teaching Pushbutton all of your
commonly used programs. You will start with the unlimited version of the
program installed. After you have taught Pushbutton all of your programs
you can install the limited version of the program or you can use the
unlimited version indefinitely.

*** LEARN MODE ***

Press <F5> to enter the learn mode. You will see an expanded menu box.
If this is the first time you have run the menu, the only item that
will be in that menu box will be

Z  Exit to DOS

As an example of how to teach the menu how to do your bidding, we will
teach it how to format a disk on A Drive. First you must decide which
letter you will assign this function to. I suggest D for DOS Functions.
Mnemonics are easy to remember, ie. W for Wordprocessors, S for Spreadsheets,
G for Games, ...

Press the D key now.

You will see a box in the middle of the screen.

Type:

DOS Functions<return>

You have now named the D entry in the front or MAIN menu.
Now that you have assigned the D key for a MAIN menu item, you may assign
up to 26 sub-menu items. The first item we will assign will be FORMAT A:. We
will assign it to the A key.

Press the A key now.

You will see a box in the middle of the screen.

Type:

FORMAT A:<return>

The next entry will tell Pushbutton which drive this program(FORMAT.COM)
exists. For this example we will assume that FORMAT.COM is in the
DOS directory on C drive. Otherwise just input the correct information where
these assumptions exist.

Type:

C<return>

Next you must answer which directory FORMAT.COM exists in.

Type:

DOS<return>

Now you must tell Pushbutton the name of the program you wish to run.

Type:

FORMAT A: /V<return>

You will now have an option to enter a password. If you think it is necessary
then type in a password<return> or just <return> if you don't want a
password. Passwords are limited to eight letters and are not case
sensitive. You can always assign or change the password later.

Now you are back at the LEARN sub-menu. If you want, you can continue to
teach Pushbutton other DOS functions now. If not, just press the <esc>
key to return to the main menu.

From now on Pushbutton can format a disk in A drive by typing:

D           (If it is the only program being run from this subdirectory
             which it is right now since you have just begun. or)

DA          (These are the two keys Pushbutton just learned.)

If you make a mistake while entering information in the learn mode, you
can back up (so to speak) with the <esc> key. If you wish to edit
existing information in the menu system, begin as if you are assigning
the same item again, however the second time through, the blank boxes
will contain the information you entered the first time. You can use the
backspace key to wipe out incorrect or changed information, or you can
accept the default information. The <esc> key will move you backwards
any time you are in learn mode. If you press the <esc> key enough times
you will end up in the MAIN menu.

If any learning box is left blank (except the password) the menu selection
will not operate. So to make a menu item work, Pushbutton must know:

Sub-menu name. \
Drive.          \              ALL 
Directory.      /           MANDITORY
Program name.  /

password -------------------Optional

NOTE:
If you wish to run a program from the root directory, the directory name
you should enter is \ .

*** PAUSE ***

There are some programs (such as CHKDSK) that execute and return to DOS
immediately. These programs will flash by so fast that useful information
cannot be read. To prevent this from happening, I allowed you to follow
any program with the pause statement. I will use chkdsk as an example
because you are likely to use it. When you get to the learn box where
you are entering the program name, precede the program name with the 
filter bar (|). This is not the colon (:). On most computers it is a
shifted \. So instead of entering  CHKDSK /F  enter  |CHKDSK /F .
Another likely place you could use this is on Peter Norton's program
SYSINFO.COM (for SI you would use |SI).

*** LIMITING ACCESS ***

After you have created your main menu and all of your sub-menu's you can
prevent further change by going to the default directory and running
LIMIT.BAT. This will replace the unlimited version of the program with
the limited version of the program. If you password protect the exit to
DOS then only you can get back to the default directory to enter the
UNLIMIT.BAT command which would return you to the unlimited version.

*** RUNNING BATCH FILES FROM PUSHBUTTON ***

If you want to run a batch file from Pushbutton, then tell Pushbutton that
you are running a batch file by using the complete dos extension .BAT .
So if DOTHIS is a batch file, and you want to run it, just make sure
to call it DOTHIS.BAT in the program learn box. Pushbutton will read your
batch file and incorporate it into TEMP.BAT and then execute TEMP.BAT
instead of your batch file. Pushbutton appends TEMP.BAT with a command
that returns to the menu system automatically. If you do not identify
your batch files with the .BAT extension then the menu system will not
automatically run after completion of your .BAT file.(and you will be
dropped at the DOS prompt)

*** PATH ***

I have assumed that you have a path to your root directory. If you do not
have any paths, then I suggest you make one now. Modify your AUTOEXEC.BAT
file to include the following statement.

For drive C:

PATH=C:\

Or for drive D:

PATH=D:\

If you DO already have a path and you do not wish to include the root
directory, then move MENU.BAT from the root directory to a directory
where a valid path exists. This will allow the menu to run from the
DOS prompt from any directory.

NOTE: It is not manditory to use a path. It is only a convenience to allow
you to run the menu from the DOS prompt in any directory by typing
MENU<return> .

*** AUTOEXEC.BAT ***

While you are in your AUTOEXEC.BAT file you should make(ADD) the last line

MENU

This will run the menu automatically upon power up. This is especially
important if you have installed the limited version of the menu system.
Your computer will start with the menu running and unless you provide a
way out, the computer user is stuck in the menu you provided. You can
either password protect the exit to DOS, or you can remove the option
entirely. Remember, if you remove the exit to DOS entirely, you will need
to boot the computer on some other disk than the hard disk to get to
DOS.

*** PASSWORDS ***

After you have installed a password, you will have to enter it every time
you wish to execute whichever menu item you installed it on. When you enter
the password in the learn mode, you will see the correct letters entered
on the screen as you type them in. However, at execution time, false symbols
are typed on the screen to protect your password when you have to enter it
while someone is looking over your shoulder. Also, after you assign a
password, you must know what it is to change it. This will prevent
unauthorized users from "Unlearning" a password. Looking at the disk file
will do prying eyes no good, as the password is encoded at the file level.

*** SOME OTHER THINGS TO TRY ***

* You can have HIDDEN sub-menu's by not entering a main menu name when you are
in learn mode. The sub-menu will appear when you press the appropriate key,
but it will have no name in the MAIN menu.

* You do NOT have to use the Main menu letters or the sub-menu letters in
any order. You can assign any unused letter at any time.

* STRIP is on the distribution disk, but is not transferred to the hard disk.
By copying STRIP.EXE to the default directory and running it, all of your
passwords will be removed. Especially handy if you forgot what they were.
Especially dangerous to everyone else. DELETE it from the hard disk when
you are done with it and keep the distribution disk put away in a safe place.
Then use the learn mode to reinstall your passwords.

* If there is only one item in a sub-menu then that item will execute without
a second keystroke. Check the operation of the Z key for an example of this.
Only when two or more items exist in a sub-menu will you recieve the second
keystroke option(and the sub-menu screen). Remember, all programs are
executed from sub-menu's but you can make it appear that an item executes
from the main menu by entering only one item in the corresponding sub-menu.
This means that if you have 25 or less functions to assign to menu items,
then each item can execute directly from the main menu.(and you will see
no sub-menu's) Some flexibility is built in here. Some of the main menu
items can have sub-menu's while others execute directly.

*** ADVANCED ***

* You can install TWO or more versions of the menu system by selecting a
different default directory when you run INSTALL a second time. By
changing the MENU.BAT file you can operate different menu's. This means
YOU can have a full blown menu for yourself, with a command that installs
another batch file to replace MENU.BAT to point to the secondary menu system.
The secondary menu system could be for NOVICE users or some other person
you may wish to allow limited access to your computer. To change the
primary menu you would go to the root directory and type

DEL MENU.BAT

COPY MYMENU.BAT MENU.BAT
or
COPY YOURMENU.BAT MENU.BAT

This will replace the secondary MENU.BAT with the primary MENU.BAT .
(Remember to have a copy of each MENU.BAT saved under a different name
before you do each INSTALL. ie MYMENU.BAT,YOURMENU.BAT,etc.)


*** NOVELL ***

If you wish to use this menu system on NOVELL network, I will make the 
following suggestions.

1. LOGIN as the SUPERVISOR or with SUPERVISOR status.

2. Use FILER to make a directory for the menu system.

3. Use SYSCON to give yourself access rights to that directory (MAP & Rights)

4. Run INSTALL while you are logged in with SUPERVISOR status. Use the
    MAP drive as the drive letter, and the directory name as the directory 
    name.

5. After you have taught Pushbutton all of the menu information, run the
    LIMIT.BAT file to limit other users from modifying the menus. Use the
    MAP drive as the disk drive letter, and use the entire path name as
    the path, even though the drive letter has put you in the directory.

6. Use SYSCON to give access rights to the users of the menu in the
    directory you have just made. Everybody must have the directory MAPped
    as the same drive letter.

7. You must be logged in with supervisor status to run SETUP.EXE .

8. If you have a problem, feel free to call me evenings between 6 and 10 pm.

*** DOCUMENT ENDS ***

Acme Data Motto ------ Easier is Better!

Thank You, and God Bless YOU!


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1041

     Volume in drive A has no label
     Directory of A:\

    FILE1041 TXT      1085   2-27-89   4:24p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   2-24-89  12:52p
    INSTALL  EXE     52167   2-15-89   9:43a
    LIMITED  PRB     51799   2-15-89   9:43a
    PRINTME  BAT       399   2-15-89   9:43a
    PUSHBUTN DOC     18780   2-15-89   9:43a
    PUSHBUTN PRB     64857   2-15-89   9:43a
    READDOC  COM       958   2-15-89   9:43a
    README   BAT       346   2-15-89   9:43a
    SETUP    EXE     53933   2-15-89   9:43a
    STRIP    EXE     42765   2-15-89   9:43a
           12 file(s)     287821 bytes
                           28672 bytes free
