---
layout: page
title: "PC-SIG Diskette Library (Disk #686)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0686/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0686"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HELPDOS"

    A "help system" for learning and using the commands and functions of
    DOS version 2.0. HELPDOS has menus, reference information, a
    technical dictionary and a cross-reference feature which work together
    to show you what DOS can do and how to use it.
    
    From the main menu, select brief or in-depth information on basic and
    advanced DOS commands, special keyboard keys, batch subcommands, and an
    overview of the DOS facilities.
    
    The technical dictionary explains frequently-used terms with overviews
    of DOS facilities and personal computers. The dictionary also has
    additional reference information and usage notes.
    
    When you select a category from the hint menu, HelpDOS will show you a
    menu of the DOS features relating to that category. The hints
    function is a unique and powerful aspect of HELPDOS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES686.TXT

{% raw %}
```
Disk No:  686                                                           
Disk Title: HelpDOS                                                     
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: HelpDOS                                                  
Author Version: 2.01                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
A ``help system'' for learning and using the commands and functions of  
DOS version 2.0.  HELPDOS has menus, reference information, a           
technical dictionary and a cross-reference feature which work together  
to show you what DOS can do and how to use it.                          
                                                                        
From the main menu, you can select brief or in-depth information on     
basic and advanced DOS commands, special keyboard keys, batch           
subcommands, and an overview of the DOS facilities.                     
                                                                        
The technical dictionary explains frequently-used terms with overviews  
of DOS facilities and personal computers.  The dictionary also has      
additional reference information and usage notes.                       
                                                                        
When you select a category from the hint menu, HelpDOS will show you a  
menu of the DOS features relating to that category.  The hints function 
is a unique and powerful aspect of HELPDOS.                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 
 
 
==========================================================================
 To print the documentation for HELPDOS type the command that follows:
                COPY HELPDOS.DOC LPT1   (press enter)
 To run HELPDOS Type the command:
                HELP  (press enter)
=========================================================================
 
 
 
 
 PC-SIG
 1030D E Duane Avenue
 Sunnyvale Ca. 94086
 (408) 730-9291
 (c) Copyright 1987 PC-SIG
```
{% endraw %}

## HELPDOS.DOC

{% raw %}
```
                                       tm
                                HelpDOS
                              USER'S GUIDE
 
                     Copyright 86, 87, 88, 89, 90
                                  by
                           Help Technologies
                           17955 Plaza Oriente
                           Sonora, CA 95370
                            (209) 532-1062
 
 
This document repeats and covers much of the information in the printed
HelpDOS USER'S GUIDE included with the registered version.  The Software
and Help Files are the same as in the registered version for DOS Version
2.X.  HelpDOS for DOS Versions 2.X, 3.0, 3.1, 3.2, 3.3 and 4.0 is
available from Help Technologies.  Support for future versions of DOS is
planned.
 
                           COPYRIGHT NOTICE
 
The HelpDOS Software, Help Files and accompanying Documentation are
copyrighted. Copies of this Software, Help Files and this accompanying
Documentation may be made for distribution under the User Supported Concept
where free distribution of software may be made with the understanding that
satisfied users are obliged to pay a registration fee as described
below. The Help Files and this accompanying Documentation may not be
altered in any way.  This software may not be sold for more than a
nominal disk fee except by Help Technologies or their direct assignees.
Electronic distribution of copies of this Software, Help Files and this
accompanying Documentation may be made via Bulletin Boards, Communication
Services Networks, etc. The complete set of Software, Help Files and this
accompanying Documentation must be distributed together without any
alterations.  No other use is allowed unless expressly permitted under
law or by Help Technologies.
 
 
                           TABLE OF CONTENTS
 
        i........Warranty, Liability, Trademark statements
 
       ii........Registration Information
 
      iii........Registration Form
 
        1........Introduction
 
        2........Installing HelpDOS
 
        5........Using HelpDOS
 
        8........Problem Determination

 
 
                                   i
 
 
                           LIMITED WARRANTY
 
HELP TECHNOLOGIES MAKES NO WARRANTY OF FITNESS FOR ANY PARTICULAR
PURPOSE AND MAKES NO WARRANTIES, EXPRESS OR IMPLIED.
 
A limited Warranty of the media on which the Software is recorded is
supplied with the registered version of HelpDOS. This warranty is
supplied, in writing, with that version.
 
Some states do not allow limitations on how long the implied warranty
lasts, so that the above limitations may not apply to you. This warranty
gives you specific legal rights and you may also have other rights which
vary from state to state.
 
 
 
                               LIABILITY
 
Help Technologies, its software suppliers, distributors and dealers,
make no warranties or representations, either expressed or implied, as
to the Software, Help Files and Documentation, including without
limitation, the condition of the Software and Help Files and the implied
warranties of its merchantability or fitness for a particular purpose.
THE SOFTWARE, HELP FILES AND DOCUMENTATION ARE SOLD ON AN "AS IS" BASIS
AND SHOULD THERE ARISE A DEFECT IN THESE GOODS FOLLOWING PURCHASE, THE
PURCHASER SHALL ASSUME THE RISK AND BE FULLY RESPONSIBLE FOR REPAIR OR
REPLACEMENT.
 
Help Technologies' liability in all respects is expressly limited to the
remedy set forth herein, and Help Technologies shall not be liable for
any lost profits or for any direct, indirect, incidental or
consequential or other damages suffered by the purchaser or others
resulting from the use of the Software or Help Files.
 
Some states do not allow the exclusion or limitation of incidental or
consequential damages, so the above limitation or exclusion may not
apply to you.
 
 
                              TRADEMARKS
 
HelpDOS is a trademark of Help Technologies.  Where the term DOS is used
in this documentation, reference is implied to PC-DOS (a registered
trademark of International Business Machines Corporation) or MS-DOS (a
registered trademark of Microsoft, Inc.) Where the term DOS is used we
do not intend to use these trademarks in a generic sense.

 
 
                                  ii
 
 
                           REGISTRATION FEES
 
 
Satisfied users are expected to pay a registration fee as follows:
 
Private or Company use by individuals.
 
     Fee: $ 20.00
 
     For this you get:
 
        -->  Acknowledgement of payment.
 
        -->  The next major update on disk upon its release.
 
        -->  The commercial HelpDOS User's Guide and diskette.  The
             diskette will contain help for the version of DOS you request.
             Currently HelpDOS is available for DOS Versions 2.0
             through 4.0.  The printed User's Guide contains complete
             instructions on HelpDOS, including detailed information on
             adding your own Help files and menus.
 
        -->  Telephone support from Help Technologies.
 
        -->  Notification of new releases.
 
        -->  Reduced fees for new releases (the fee for the most recent
             update was $5).
 
 
Note:  Company or Institution Site Licenses are available.  Fees are
       very reasonable.  Contact Help Technologies for details.

 
 
                                 iii
 
 
                               HELPDOS
 
                          REGISTRATION FORM
 
 
 
 
___________________________________________________________________
Name
 
___________________________________________________________________
Address
 
___________________________________________________________________
Address
 
___________________________________________________________________
Address
 
___________________________________________________________________
Address
 
___________________________________________________________________
Telephone
 
 
Send HelpDOS on:  ___ 5 1/4" disk   ___ 3 1/2" disk
 
  for DOS:  ___ 2.X   ___ 3.0   ___ 3.1   ___ 3.2   ___ 3.3   ___ 4.0
 
 
Quantity:   _______ Single User Registrations ($20)
 
            _______ Sales Tax (California Residents Only)
 
            _______ Outside US, add $5 Shipping
 
            _______ Order Total
 
 
Send Check or Money Order payable to Help Technologies.  Company purchase
orders accepted; net 30.  Outside US: payment must be in US funds against
US banks.
 
                           Help Technologies
                          17955 Plaza Oriente
                           Sonora, CA 95370
 
                             209-532-1062
 
 

 
 
                                   1
 
 
                             INTRODUCTION
 
HelpDOS is a "Help System" for DOS. HelpDOS consists of menus,
detail reference information, a technical dictionary and a
cross-reference feature called "Hints." These components work together
to show you, quickly and easily, what DOS can do and how to use it.
 
Menus give an "at a glance" view of DOS Commands, Special Keyboard
Keys and Batch Subcommands. The menus show you what DOS can do. You can
get detail reference information for each DOS command by selecting it
from a menu. The detail information explains what the command does and
how to use it.
 
A Technical Dictionary explains the terms that are frequently used with
DOS and personal computers. In addition to defining the terms, the
dictionary contains additional reference information and usage notes.
 
The Hints Menu shows categories of actions you can take with DOS. When
you select a Hint category from the menu, HelpDOS will show you a menu
of the DOS commands that pertain to that category.  For example, when
you select the Hint category "Print," HelpDOS will give you a menu of
the ways you can print information with DOS. The Hints feature is a
unique and powerful aspect of HelpDOS.  It helps you find the right DOS
command for your task and exposes you to related commands you may not
have known about.
 
You may add your own help files and menus to HelpDOS. This provides a
convenient way to view reference information for your special programs,
batch files, procedures, or whatever you wish to have on-line. Adding
help information to HelpDOS is easy. You simply create and modify these
files with your word processor or editor, and update the appropriate
HelpDOS menu. Detailed information about the process is provided to
registered users in the printed HelpDOS User's Guide.

 
 
                                   2
 
 
                          INSTALLING HelpDOS
 
This diskette contains help information for DOS Version 2.X. (Note: Help
for DOS Versions 2.X through 4.0 is available from Help Technologies).
 
You may run HelpDOS from diskette or install the system on a fixed disk.
 
There are three steps to the installation process:
 
1. Make a copy of your HelpDOS diskette. (below)
2. Perform the installation. (below to page 3)
3. Run the HelpSET program to set configuration options. (page 4)
 
 
 
                 Make a copy of your HelpDOS diskette
                 *----------------------------------*
 
You should make a copy of your HelpDOS diskette as follows.  This
provides a backup in case your original diskette becomes lost or
unusable.  If your are installing HelpDOS on a fixed disk you may skip
this step.
 
1. Boot up your machine as per normal.
2. With your DOS diskette in drive A or the DISKCOPY command
   available via a path on your fixed disk enter:
 
        DISKCOPY           (if you have one diskette drive)
        DISKCOPY A: B:     (if you have two diskette drives)
 
   Follow the prompts to copy the "Source Diskette" (this disk) to the
   "Target Diskette" (the copy to be made).
 
 
                      Performing the Installation
                      *-------------------------*
 
HelpDOS can be installed on a diskette or a fixed disk.  If you are
going to use HelpDOS on a diskette, all you need to do is run the
HelpSET program to establish configuration settings.  See the section
"HelpSET Configuration Settings" on page 4 for details.
 
NOTE: If your computer has just 128k of memory you should copy the
COMMAND.COM file from your DOS diskette to the diskette where HelpDOS is
installed. If this is not done, DOS will prompt you to insert a diskette
with COMMAND.COM each time you quit the HelpDOS program.
 
To install HelpDOS on a fixed disk, follow the instructions below.

 
 
                                   3
 
 
                  Installing HelpDOS on a Fixed Disk
                  *--------------------------------*
 
On a fixed disk, HelpDOS must be installed in a subdirectory named HelpDOS.
Use the instructions below:
 
1. Put the HelpDOS diskette in drive A.
2. Set the default drive to the fixed disk.  For example, if your fixed
   disk is drive C, enter:  C:
3. Use the DOS command, MKDIR ("make directory") to create the HELPDOS
   subdirectory.  Enter:   MKDIR \HELPDOS
4. Copy all files from the HelpDOS diskette to the \HELPDOS directory
   on the fixed drive by entering:
        COPY A:*.* C:\HELPDOS
 
   Note:  you can also install from diskette drive B.  In this case the
   COPY command would be:    COPY B:*.* C:\HELPDOS
 
 
Next, you need to add a path setting to an AUTOEXEC.BAT file on your
fixed disk. By having a PATH command in an AUTOEXEC.BAT file, you can
access the HelpDOS system without having to change the current directory
to HELPDOS and without having to set the default drive to the fixed
disk.
 
   Note: The AUTOEXEC.BAT file is run every time you start-up or re-boot
         the computer. Putting the PATH command in the AUTOEXEC.BAT file
         ensures that the path setting will be in effect each time you
         use the computer.
 
 
If you DO NOT have an AUTOEXEC.BAT file on your fixed disk, you should
create one (in the root directory) by entering the following lines:
 
        CD\
        COPY CON: AUTOEXEC.BAT
        DATE
        TIME
        PATH x:\HELPDOS;x:\
 
where "x" is the drive letter of your fixed disk.
 
Next press F6 (which denotes the end-of-file). Then press RETURN, and
the file will be created.
 
If you already have an AUTOEXEC.BAT file, edit the file and add the PATH
command given above or append       ;x:\HELPDOS        to the end of it.
 
      where "x" is the drive letter of your fixed disk.
 
Re-boot your machine and the path will be set.  Be sure to run the
HelpSET program before using HelpDOS (see next page).

 
 
                                   4
 
 
                    HelpSET Configuration Settings
                    *----------------------------*
 
HelpSET is a menu-driven program which establishes configuration
settings for HelpDOS.
 
HelpSET performs three functions:
 
1. Sets the display screen type to monochrome or color. (default is
   monochrome)
 
2. Sets the colors to be used for a color display. You may choose the
   colors to be used for the Status Line, the Function Key line and menu
   selection letters, and the Help text. As you select colors, HelpSET
   shows you how they will appear in HelpDOS. Experiment with different
   color combinations until you find the one you like best.
 
3. Sets Beeps to ON or OFF. If Beeps are ON, HelpDOS will beep when an
   inactive key is pressed and when an error message is displayed.
   HelpDOS will function properly with Beeps OFF but you will not be
   informed when an inactive key is pressed. (default is Beeps OFF)
 
 
 
                            Running HelpSET
                            *-------------*
 
1. Set the default drive and directory to the installed HelpDOS program.
   If you installed HelpDOS in a \HelpDOS directory on a fixed disk you
   will need to use the command:   CD \HELPDOS    to set the current
   directory on the fixed disk to the HELPDOS directory.
 
2. Start HelpSET by entering:        HELPSET
 
   HelpSET will give you easy to follow menus for establishing your
   configuration settings.
 
   This program reads and writes the HELPSET.UP file in the current
   directory.  The disk containing the installed HelpDOS program
   must not be write-protected.

 
 
                                   5
 
 
                             USING HelpDOS
 
 
After installing HelpDOS as shown on pages 2 thru 4, start HelpDOS by
entering:
                             HELP
 
 
For help with a specific DOS command, you may enter the name of the
command when HelpDOS is started.  For example, to get help on the RENAME
command you would enter:     HELP RENAME
 
You can also select a HelpDOS menu at startup by specifying "menu"
followed by the menu name.  For example, to select the COMMANDS menu upon
startup you would enter:     HELP MENU COMMANDS
 
 
If you do not make a selection at startup (that is, you entered just
HELP) you will see a display that looks like this:
 
 
+----------------------------------------------------------------------+
| Help Menus                                                   6 lines |
|                                                                      |
|                                                                      |
| A  ADVANCED    - Advanced DOS Commands                               |
| B  BATCH       - Batch Subcommands                                   |
| C  COMMANDS    - DOS Commands                                        |
| D  KEYBOARD    - Special Keyboard Keys                               |
| E  OVERVIEW    - Overviews of DOS Facilities                         |
|                                                                      |
|                                                                      |
| F1 Help   F2 Print   F3 Menus   F4 Hints   F5 Terms         F9 Quit  |
+----------------------------------------------------------------------+
 
 
 
 
                        Status Line (top line)
 
The left side of the status line identifies the help information you are
viewing. The right side of the status line gives the number of lines in
the help information.
 
When you make a selection from a menu, the name of the selected
information is appended to the previous identifier on the status line.
This identifies the current information and tells you which menu it was
selected from.

 
 
                                   6
 
 
                             Function Keys
 
The Function Key line displays the function keys used by HelpDOS.
Pressing one of these function keys triggers a HelpDOS feature.
 
 
 
F1 Help
 
F1 displays a help screen containing a brief summary of HelpDOS'
features. It also contains a summary of the Format Notation which
HelpDOS uses to explain the parameters of DOS Commands. F1 is a "toggle
key." Press F1 to display the help screen. Press F1 again to remove it.
 
 
 
F2 Print
 
F2 prints all lines of the current help information. Once printing has
begun, you may cancel it by pressing F10.
 
 
 
F3 Menus
 
F3 shows the Help Menus and presents them for your selection.  HelpDOS
comes with the menus shown on page 5.  Menus you may add to HelpDOS
will also appear when you press F3. HelpDOS automatically presents this
menu of menus unless you select a menu or a help item when you start the
program.
 
 
 
F4 Hints
 
F4 activates the Hints feature and presents you with a menu of Hint
categories. When you select a hint, HelpDOS gives you a menu of one or
more DOS commands that pertain to the hint category.  You may then
select items from this new menu to see the detail information.
 
 
 
F5 Terms
 
F5 presents you with a menu of the terms in the technical dictionary.
You may then select a term from the menu. The information will include a
definition of the term and, when applicable, examples and references to
related information.

 
 
                                   7
 
 
F6 Return
 
F6 returns you to the prior menu. This appears on the function key line
ONLY after a selection has been made from a menu. Pressing F6 will
return you to the menu where your previous selection was made.
 
 
 
F9 Quit
 
F9 ends HelpDOS and returns you to DOS. On most computers, the screen
will not be cleared when you are returned to DOS. This allows you to
position the HelpDOS display to the appropriate information and then
press F9 to return to DOS leaving the help information you were viewing
on the screen for your reference.
 
 
 
 
 
Display Scrolling Keys
 
Help information that has more than 21 lines may be scrolled forward and
backward for viewing.
 
        Home       - Positions the display to the top.
        End        - Positions the display to the end.
        Up Arrow   - Moves the display one line toward the top.
        Down Arrow - Moves the display one line toward the end.
        PgDn       - Moves the display forward one screen.
        PgUp       - Moves the display backward one screen.
 
 
 
 
 
Selecting a Menu Item
 
Menu items are prefaced with the letters A through U. To select a menu
item, press the letter representing your choice. You do not press the
Return key.
 
Some menus have more choices than the screen can display. Use the
Display Scrolling Keys as above to scroll the menu to the item of your
choice. The letters associated with the menu items are reassigned when
the display is scrolled.

 
 
                                   8
 
 
                         Problem Determination
 
 
 
 
Problem: the scrolling keys do not work.
 
Reason:  With 21 or fewer lines, the display will not scroll.
 
            -- or --
 
         The keypad is set to "numeric mode." Press the NumLock
         key to change it to "cursor mode."
 
 
 
 
Problem: HelpDOS is not using the settings I specified in HelpSET.
 
Reason:  The current directory was not set to the directory containing
         HelpDOS when HelpSET was run. HelpSET always writes the setup
         file, HELPSET.UP, to the current directory. Be sure the current
         directory is set to the directory (root or \HELPDOS) where
         HelpDOS is installed before running HelpSET.
 
 
 
 
Problem: When I enter HELP to start HelpDOS, I get the message "Bad
         command or file name" even though the HelpDOS disk is in the
         drive.
 
Reason:  The default drive is not set to the disk containing HelpDOS
         and/or the current directory is not set to the root directory.
 
            -- or --
 
         The DOS "path setting" may be incorrect if HelpDOS is installed
         in a \HELPDOS subdirectory on a fixed disk.  Review the HelpDOS
         installation instructions on page 3 for details on the DOS path.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0686

     Volume in drive A has no label
     Directory of A:\

    HELP     COM     36255   4-05-87   1:28p
    HELPSET  UP         14   1-19-90   5:24p
    MENUS    MEN       164   9-03-85  12:00p
    COMMANDS MEN      1580   9-03-85  12:00p
    HINTS    MEN      1701   9-03-85  12:00p
    BATCH    MEN       601   9-03-85  12:00p
    ADVANCED MEN       692   9-03-85  12:00p
    OVERVIEW MEN       127   9-03-85  12:00p
    TERMS    MEN      1022   9-03-85  12:00p
    KEYBOARD MEN      1016   9-03-85  12:00p
    HINTS    XRF      2025   2-02-88   5:14p
    BACKUP   HLP      3989   9-10-85  12:00p
    CHKDSK   HLP      5016   9-10-85  12:00p
    DIR      HLP      4808   5-18-87   4:10p
    DISKCOMP HLP      1918   9-10-85  12:00p
    AUTOEXEC HLP       530   4-05-87  10:57a
    COPY     HLP      6868   9-10-85  12:00p
    DISKCOPY HLP      2348   9-10-85  12:00p
    FDISK    HLP       925   9-10-85  12:00p
    FORMAT   HLP      2900   9-10-85  12:00p
    MODE     HLP      4565   9-10-85  12:00p
    PRINT    HLP      3317   9-10-85  12:00p
    D-COLON  HLP       698   9-10-85  12:00p
    PATH     HLP      1806   9-10-85  12:00p
    RECOVER  HLP      3139  10-08-87   8:36p
    CTRL-BRK HLP      1191   9-03-85  12:00p
    BACKSPAC HLP       184   9-03-85  12:00p
    DEL      HLP       209   9-03-85  12:00p
    RENAME   HLP      1527   4-05-87  10:29a
    ESC      HLP       275   9-03-85  12:00p
    F1       HLP       651   9-03-85  12:00p
    F2       HLP       347   9-03-85  12:00p
    ECHO     HLP       894   9-03-85  12:00p
    F3       HLP       677   9-03-85  12:00p
    F4       HLP       327   9-03-85  12:00p
    F5       HLP       330   9-03-85  12:00p
    INS      HLP       574   9-03-85  12:00p
    MKDIR    HLP      1641   9-10-85  12:00p
    RETURN   HLP       359   9-03-85  12:00p
    CONFIG   HLP      2124   9-03-85  12:00p
    CTRL-RET HLP       211   9-03-85  12:00p
    CTRL-NUM HLP       331   9-03-85  12:00p
    CTRL-PRT HLP       434   9-03-85  12:00p
    SHFT-PRT HLP       451   9-03-85  12:00p
    SYSRESET HLP       666   9-03-85  12:00p
    BAT-OVER HLP      1801   4-05-87  10:38a
    CMD-OVER HLP      5402   4-05-87  10:50a
    REM      HLP       512   9-03-85  12:00p
    PAUSE    HLP       679   4-05-87  11:39a
    GOTO     HLP      1196   9-03-85  12:00p
    IF       HLP      1928   9-03-85  12:00p
    FOR      HLP       908   9-03-85  12:00p
    SHIFT    HLP      1269   9-03-85  12:00p
    %0-%9    HLP      1030   9-03-85  12:00p
    ASSIGN   HLP      1582   9-10-85  12:00p
    BREAK    HLP       812   9-03-85  12:00p
    COMMAND  HLP       690   9-03-85  12:00p
    CTTY     HLP       478   9-03-85  12:00p
    EXE2BIN  HLP       694   9-03-85  12:00p
    FIND     HLP      2326   9-10-85  12:00p
    MORE     HLP       790   9-10-85  12:00p
    PIPING   HLP      1344   4-05-87  10:36a
    PROMPT   HLP      1207   9-10-85  12:00p
    REDIRECT HLP      1181   9-10-85  12:00p
    SET      HLP       619   9-10-85  12:00p
    SORT     HLP      1042   9-10-85  12:00p
    KEY-OVER HLP      2315   9-03-85  12:00p
    CLS      HLP       473   9-03-85  12:00p
    VOL      HLP      1065   9-10-85  12:00p
    VERIFY   HLP       904   9-10-85  12:00p
    VER      HLP       743   9-10-85  12:00p
    TYPE     HLP      1353   9-10-85  12:00p
    TREE     HLP      1188   9-10-85  12:00p
    TIME     HLP      1305   9-10-85  12:00p
    SYS      HLP       967   9-10-85  12:00p
    RMDIR    HLP      1094   9-10-85  12:00p
    CHDIR    HLP      1408   4-05-87  11:04a
    DATE     HLP      1223   9-10-85  12:00p
    ERASE    HLP      3194   9-10-85  12:00p
    DELETE   HLP       197   9-03-85  12:00p
    GRAPHICS HLP       962   9-10-85  12:00p
    COMP     HLP      4010   3-03-88   8:48a
    RESTORE  HLP      3135   9-10-85  12:00p
    TERMSA-C HLP      4829   9-03-85  12:00p
    TERMSD-E HLP      4066   9-03-85  12:00p
    TERMSF-I HLP      5684   4-05-87  10:42a
    TERMSJ-R HLP      6002   9-03-85  12:00p
    TERMSS-Z HLP      5074   9-03-85  12:00p
    READ     ME        606   1-19-90   6:09p
    HELPDOS  DOC     21123   1-19-90   6:07p
    HELPSET  COM      6066   9-03-85  12:00p
    FILES686 TXT      2295   3-09-90  10:35p
    GO       BAT        14   3-02-87   8:45a
    GO       TXT       504   3-02-87   8:47a
           94 file(s)     210716 bytes
                           63488 bytes free
