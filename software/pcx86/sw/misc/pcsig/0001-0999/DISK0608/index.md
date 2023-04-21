---
layout: page
title: "PC-SIG Diskette Library (Disk #608)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0608/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0608"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AUTOMENU"

    AUTOMENU helps you control your computer in ways you only dreamed of
    before. Use the Menu Definition Language to create menus for accessing
    frequently-used programs.  Forget obscure parameters while you perform
    DOS commands -- execute application programs, batch files, and DOS
    commands with single keystrokes.  Personalize your own menus.
    
    AUTOMENU can prompt you for needed input for application programs.
    Chain from menu to menu with no limits on the number of menus.
    Demand different and unique passwords for different menu
    selections and use optional encryption of menu files.  Take a nap while
    your computer executes menu selections according to the time of day.
    Short of memory?  You can remove AUTOMENU from memory prior to starting
    an application program.  Confused?  Press``H'' anywhere in the program
    for on-line help.
    
    CGA, MDA, EGA, VGA, Hercules graphics displays and their compatibles are
    all supported.  Try real-time switching between color and monochrome
    monitors.  Use your mouse's sensitivity to navigate among menus.
    Prevent image-burning of your screen with automatic screen blanking and
    a periodically-displayed user message.
    
    Highlight and select menu options: function keys, number and arrow keys,
    numeric keypad, spacebar, mouse or voice controller, date and time
    display.  AUTOMENU features redirection capability and support for the
    ANSI.SYS driver.  Five sections of the 114-page user guide are
    tutorials
    for inexperienced computer users.  The option to network is available to
    advanced users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTOMENU.DOC

{% raw %}
```










                                 Automenu(R)



                     The Software Management System(TM)







                                 Version 4.7






                                USERS' MANUAL








                           Designed and Written by


                              Marshall W. Magee







                           Magee Enterprises, Inc.

                            Post Office Box 1587

                        Norcross, Georgia  30091  USA

                                404-446-6611

                              404-446-6650 BBS











ISBN 0-938167-00-6

(C) Copyright 1983, 1985, 1986, 1987, 1988, 1989, 1990 Magee Enterprises, Inc.
All rights reserved worldwide.
Printed in the United States of America


Automenu is a registered trademark and Software Management System(TM), Menu
Definition Language(TM), and MDL(TM) are trademarks of Magee Enterprises,
Inc. All trademarks and registered trademarks referenced within this document
are the property of their respective owners.


MAGEE ENTERPRISES, INC.
POST OFFICE BOX 1587
NORCROSS, GEORGIA 30091  USA



Sales 

      404-446-6611              (9 AM - 5 PM Eastern Time)
      800-662-4330              Orders Only
      404-368-0719              FAX (24 Hours)


Technical Support Group 

      404-662-5387              Voice Line (9 AM - 5 PM Eastern Time)
      404-446-6650              Big Peach BBS (24 Hours)
      76004,1541 or 70167,2200  CompuServe 
      






Shareware documentation by Marshall Magee, Randal DePriest, Swati Fuller, 
Dana Jordan, and Dana Montroy. 


This manual was developed using WordPerfect 5.0.


October 1990 Release



  Automenu 4.7                                                    Page 2
                              TABLE OF CONTENTS
Section  Title                                                  Page

License Agreement ............................................. 6

1   This Is Automenu .......................................... 8

1-1      Getting Acquainted With Automenu ..................... 8
1-2      Using This Documentation ............................. 9
1-2.1    Usage Conventions .................................... 10
1-2.2    Format and Presentation .............................. 10
1-3      System Requirements .................................. 10
1-4      Getting Started ...................................... 10
1-5      A Fast Start For Power Users ......................... 11
1-5.1    Installing on a Fixed Disk ........................... 11
1-5.2    Installing on a Floppy Disk .......................... 11
1-6      Special Keys Within Automenu ......................... 12
1-7      Close-Up and Personal ................................ 12
1-8      Technical Notes & Power Tips ......................... 13

2   Installing AUTOMENU ....................................... 15

2-1      Installing Automenu For the First Time ............... 15
2-2      Installing Automenu on a Diskette System ............. 16
2-3      Upgrading From a Previous Version .................... 17

3   DOS and AUTOMENU .......................................... 18

3-1      Types of Commands .................................... 18
3-2      Directories .......................................... 18
3-3      Extensions ........................................... 19
3-4      Batch Files .......................................... 19
3-5      The Automenu Files ................................... 20
3-6      Getting Up to Speed with Automenu .................... 21
3-7      Menu Definition Files (MDF) .......................... 21
3-7.1    Organization and Purpose of Menu Definition Files .... 22
3-7.2    Editing Menu Definition Files ........................ 22
3-8      AUTOMAKE - Features of The Menu Building Facility .... 22
3-8.1    Activating AUTOMAKE after Installation ............... 23
3-8.2    Editing a Menu Definition File ....................... 23
3-8.3    Printing a Menu Definition File ...................... 24
3-8.4    Configuring AUTOMAKE ................................. 25
3-8.5    Exiting AUTOMAKE ..................................... 25
3-9      Control Keys ......................................... 25
3-10     Summary:Planning and Creating Working Menus .......... 28

4   Making a MENU ............................................. 29

4-1      Developing an MDF .................................... 29
4-1.1    Creating Menus Using the Novice Mode ................. 29
4-1.2    Creating Menus Using the Intermediate Mode ........... 30
4-1.3    Creating Menus Using the Advanced Mode ............... 30
4-1.4    More on Creating Menus ............................... 31
4-2      Completing the Menu .................................. 31
4-2.1    The End of File Mark ................................. 31
4-3      An Aid in Diagnosing Menu Development Problems ....... 32
4-4      Developing an MDF From Scratch ....................... 32
4-5      Moving Between Menus ................................. 32
  Automenu 4.7                                                    Page 3
                              TABLE OF CONTENTS
Section  Title                                                  Page

5   Using Your Own Menus ...................................... 36

5-1      The Menu ............................................. 36
5-2      Programmed Menu Keys ................................. 37
5-3      Suggestions for Menu Development ..................... 38

6   Using AUTOMENU's Other Capabilities ....................... 39

6-1      Menu Design Functions ................................ 39
6-2      DOS Commands ......................................... 40
6-2.1    Batch Commands ....................................... 40
6-2.1.1  RAM Utilization and RAM Cram ......................... 41
6-2.1.2  Non-Resident Commands ................................ 42
6-2.1.3  Resident Commands .................................... 43
6-2.2    Direct Commands ...................................... 44
6-2.2.1  Direct Command without Pause ......................... 44
6-2.2.2  Direct Command with Pause ............................ 44
6-3      Special Functions .................................... 45
6-3.1    Password ............................................. 46
6-3.2    Alternate MDF ........................................ 46
6-3.3    Output Messages ...................................... 47
6-3.4    Input ................................................ 48
6-3.5    Time Execution ....................................... 49
6-4      MDF Command Symbol Summary ........................... 50

7   Customizing Your Menu ..................................... 52

7-1      Accessing the Customization Utility .................. 52
7-2      Color Customization .................................. 52
7-3      Custom Switches ...................................... 52
7-4      Change Default MDF Filename .......................... 54
7-5      Change Default Filename for Temporary
                Batch File .................................... 54
7-6      Reset All Values and Save ............................ 54
7-7      Creating Your Own Menus .............................. 54

8   Technical Considerations .................................. 55

8-1      Automenu Configuration ............................... 55
8-1.1    Program Interfaces ................................... 55
8-2      Program Operation .................................... 55
8-3      Avoiding Inadvertent Memory Misallocation ............ 56
8-4      Running a BASIC Program .............................. 56
8-5      Using Automenu on Networks ........................... 57
8-6      Mouse Support ........................................ 57
8-7      Uses and Performance of Floppy 
              Diskette Systems ................................ 57
8-8      Contents of an Example AUTOMENU.MDF .................. 58
8-9      Examples of Batch Files .............................. 59
8-9.1    Floppy Diskette version of AUTOEXEC.BAT .............. 59
8-9.2    Fixed Disk version of AUTOEXEC.BAT ................... 59
8-9.3    Example of AUTO.BAT .................................. 59



  Automenu 4.7                                                    Page 4
                              TABLE OF CONTENTS
Section  Title                                                  Page

8-10     Menu Definition File (MDF) Description ............... 60
8-11     User Support ......................................... 60
8-11.1   Problems and Technical Support ....................... 60
8-12     Source Code .......................................... 60
8-13     Shareware ............................................ 61
8-14     Future ............................................... 61

9   Automenu and Networks ..................................... 62

9-1      Environmental Variables .............................. 62
9-2      The DOS Environment .................................. 63
9-3      Changing Default Temporary Batch Filename ............ 66
9-4      Changing Default Menu Definition Filename ............ 66
9-5      Network Installation ................................. 66
9-6      Automenu Control Points .............................. 67


         Appendix A Error Messages ............................ 70


         Appendix B Recommended Reading for DOS Users ......... 73


         Appendix C Automenu Command Reference ................ 75


         Appendix D Automenu - A Thumbnail Sketch ............. 79


         Appendix E About the Author .......................... 80

























  Automenu 4.7                                                    Page 5

IMPORTANT:   USE OF THIS PRODUCT BINDS YOU TO THE TERMS OF THIS LICENSE 
             AGREEMENT. PLEASE READ THE AGREEMENT CAREFULLY AND DO NOT USE 
             THIS PRODUCT IF YOU DO NOT AGREE TO THE TERMS OF THE AGREEMENT.  

                                 LICENSE AGREEMENT  

The AUTOMENU(R) Software product ("Product") is NOT "Public Domain" and it is 
NOT "Freeware".  AUTOMENU(R) is a copyrighted software Product developed and 
owned by Magee Enterprises, Inc. located in Norcross, Georgia,U.S.A.  
Copyright 1983, 1985, 1986, 1987, 1988, 1990 Magee Enterprises, Inc. All rights
reserved worldwide.  
  
1.     LICENSE.  You may:  (i) use this Shareware version of the AUTOMENU(R) 
software Product on a single computer or on a computer network for an 
evaluation period not to exceed 30 days.  After 30 days you are required by 
law to either register your copy by sending the payment as listed in the 
documentation of this product (You can also purchase a registered version of 
AUTOMENU(R) from a software dealer) or cease using the product.  Registered 
users benefit from ehanced technical support, notice of new products, and 
bulletin board access.  Also, please feel free to contribute your ideas 
regarding desired additional product features and functionality. (Note: 
Registering AUTOMENU(R) for use on either a local area network or wide area 
network requires a Network License. The Network License fees are based on the 
number of nodes/stations in use and you must periodically notify Magee 
Enterprises, Inc of the number of nodes/stations added to the network); (ii) 
without charge reproduce and distribute copies of the Shareware version of 
the Automenu(R) software Product, subject to the limitations specified below, 
and on the express condition that you do not receive any payment (even a 
nominal disk charge), commercial benefit, or other consideration for such 
reproduction or distribution, or change this license agreement or the following
copyright notice which appears in the software, documentation, user interface,
menus and magnetic media.  The person(s) to whom you distribute this Product 
must agree to the terms of this License. If you wish to distribute, and charge
a disk fee, any Magee Enterprises, Inc. Shareware Product, you must sign a 
Magee Shareware Distribution Agreement and receive your master disks directly 
from us. 
 
2.     RESTRICTIONS.  AUTOMENU(R) must NOT be sold or otherwise provided as 
part of a larger system, or as a part of a more inclusive product or service, 
without express written consent and licensing from Magee Enterprises, Inc.  
The rights to receive any such financial or other benefit, and to modify the 
product or employ its components in any kind of derivative work, are reserved 
exclusively by Magee Enterprises, Inc.  You may not reverse-engineer, 
disassemble, modify, decompile or create derivative works of the Product.  
   
3.     LIMITED WARRANTY.  THIS PRODUCT IS LICENSED "AS IS" WITHOUT ANY 
WARRANTY OF ANY KIND, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, ALL OF WHICH ARE 
EXPRESSLY DISCLAIMED.  Some states do not allow the exclusion of implied 
warranties, so the above limitation may not apply to you.  
  
4.     LIMITATION OF LIABILITY. IN NO EVENT WILL MAGEE ENTERPRISES, INC., OR 
ANY OF ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, OR OTHER 
RELATED PARTIES BE LIABLE TO YOU OR ANY THIRD PARTY FOR CONSEQUENTIAL OR 
INCIDENTAL DAMAGES, INCLUDING BUT NOT LIMITED TO ANY LOST PROFITS, OR LOSS OF 
GOODWILL, ARISING IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE 
PRODUCT, OR ANY PART THERE OF, EVEN IF MAGEE ENTERPRISES, INC. HAS BEEN 
APPRISED OF THE LIKELIHOOD OF SUCH DAMAGES OCCURRING.  Some states do not 
allow the limitation or exclusion of liability for incidental or consequential 
damages, so this exclusion may not apply to you. 

  Automenu 4.7                                                    Page 6
  
5.      PROPRIETARY RIGHTS.  This License is not a sale of the original 
Product or any copies thereof.  Magee Enterprises retains ownership of the 
Product and all subsequent copies of the Product, regardless of the form in 
which the copies may exist.  AUTOMENU(R) is a registered trademark of Magee 
Enterprises, Inc.  SOFTWARE MANAGEMENT SYSTEM, MDL, MDF and the Magee 
Enterprises Logo are trademarks of Magee Enterprises, Inc. 
 
6.      U.S. GOVERNMENT RESTRICTED RIGHTS.  Use, duplication or disclosure 
by the Government is subject to restrictions as set forth in subparagraph 
(c) (1) (ii) of the Rights in Technical Data and Computer Software clause at 
252.227-7013 (if DOD) or 52.227-19 (a) through (d) and restrictions in this 
License Agreement (if civilian agency).  Contractor/manufacturer is Magee 
Enterprises, Inc., Post Office Box 1587, Norcross, Georgia 30091  U.S.A. 


7.      ENTIRE AGREEMENT.  You acknowledge that you have read this License 
Agreement, understand it, and that it is the complete and exclusive statement
of your agreement with Magee Enterprises, Inc.  which supersedes any prior 
agreement, oral or written, and any other communications between Magee 
Enterprises, Inc. and you relating to the subject matter of this License 
Agreement.  
 
8.      GOVERNING LAW.  This License Agreement will be governed and interpreted
in accordance with the substantive laws of the State of Georgia.  

  Automenu 4.7                                                    Page 7
SECTION 1 

THIS IS AUTOMENU (R)

Welcome to Automenu, the Software Management System(TM) for IBM PCs,
including XT, AT and PS/2 models and other 100% compatible systems. Automenu
was designed to enable you to organize and control the use of your computer
in a way that you never could before!

1-1 Getting Acquainted with Automenu

With Automenu, you can create menus that access all of your frequently used
programs, and perform DOS commands with a single keystroke. You no longer
have to remember complex DOS commands, program and file parameters, or batch
file and subdirectory names, because Automenu will do it ALL for you. You can
even customize Automenu to perform very complicated batch file procedures.

With Automenu, you create your own menu. This is made possible by Magee
Enterprises' proprietary Menu Definition Language (MDL)TM. Using the MDL, you
can create a Menu Definition File (MDF)TM, and write your own individualized
menus.

Automenu implements the essential features of a menu utility with a number of
useful PC software management features in one efficient package. Automenu
will reduce the time you spend navigating in DOS, changing directories,
calling up programs, and managing your system; and Automenu will do it in
ways that are easy to learn and easy to customize for your own needs. Some of
Automenu's key features are:

     Easy installation and operation on single user and local area network
     systems

     FAST, single-keystroke execution of DOS commands, batch files and
     programs

     Allows new or occasional users unfamiliar with DOS to concentrate
     on their application

     Ability to prompt the user for input and act accordingly 

     Programmed operator input with structured (static) and free-form
     (dynamic) modes add flexibility to menu selections

     Chaining from menu to menu to allow an UNLIMITED number of menu
     selections

     Password-controlled access to specific menu selections, each having
     a unique password

     Optional encryption of menu files

     Unattended execution of menu selections by time-of-day

     Ability to remove Automenu from memory prior to execution of
     programs which require the maximum available memory

     On-line help available (press "H" at any menu screen)

  Automenu 4.7               THIS IS AUTOMENU                     Page 8
     Support for CGA (color), MDA (monochrome), EGA (Enhanced Graphics
     Adapter), VGA (Video Graphics Array) and Hercules graphics adapter
     displays 

     Real-time switching between color and monochrome monitors

     Control of mouse sensitivity to ease navigation among menus

     Easy-to-use command language (MDL) which allows users to
     personalize their menu system

     Easy modification of menu features, e.g., screen colors, default
     file names, screen display features, and mouse sensitivity

     Screen blackout to prevent image-burn; replaces an inactive screen
     with optional periodically shifted user message with blackout
     delay selectable in increments from 1 to 45 minutes

     Menu file editor AUTOMAKE eases creating and editing of Menu Definition
     Files and provides on-line help

     Use your choice of function keys, number and arrow keys, spacebar,
     mouse or voice controller to highlight and select menu options easily
     and quickly

     Numeric keypad can be toggled for numeric or cursor control

     On-screen display of date and time, keyboard status and available DOS
     system memory (RAM)

     Written totally in assembler, not copy protected 

     Features redirection capability and support for the ANSI.SYS driver.
 
     Increased functionality on local area network systems

Automenu is completely user oriented. On-Line help screens and prompts walk
you through every aspect of the package. A single keystroke ("H") will call
up a "mini-Help" window and a second "H" will display HELP messages from any
menu screen. You can even define a complete, user-based Help system with
Automenu to display text files to the screen with the touch of a single key!

1-2 Using This Documentation

This document describes the features and functions of Automenu. You do not
need a great deal of technical knowledge to understand and operate Automenu,
however an understanding of DOS will allow you to take special advantage of
Automenu's feature set. The tutorial sections of this document take you
through every aspect of the program, from installing it on your fixed disk,
to creating your own individual menus.

All users are recommended to take a spin through Section 4 - "Making an
Automenu" - it will provide you with the rudiments of Automenu. Afterwards,
you will be able to develop effective menus. Studying this manual and the
sample MDFs that are included will enable you to use the full power of
Automenu more quickly!


  Automenu 4.7               THIS IS AUTOMENU                     Page 9
If you are a new or inexperienced computer user, it is recommended that you
pay special attention to Section 3, which discusses DOS. You will need to
know a few aspects of using DOS in order to utilize ALL of Automenu's
capabilities, so you may want to refer to your DOS manual, as well. If you
are a novice, don't worry. Just read this manual and follow the instructions
in Sections 3 and 4, and if you still have problems, perform the tutorial
exercises.

Experienced DOS users will find the more technical discussion in Section 8 of
particular interest, as well as Appendix B which lists some recommended books
that relate to the fundamentals and operations of DOS.

1-2.1 Usage Conventions

Certain conventions are used herein to aid in documenting of instructions.
These are listed here:

MDF command symbols used in creating your menu are shown in brackets { };
example, {%}. When you use these commands, you do not type the brackets, only
the symbol itself.

DOS commands and prompts are shown as they appear on your monitor.

When you must enter data you have typed, you will be instructed, Press ENTER;
the ENTER key is the large key with the hooked arrow pointing left. This key
is sometimes called RETURN. Use of either term will be mean the same - RETURN
or ENTER will function the same way.

1-2.2 Format and Presentation

Sections 3 through 7 are tutorial in nature. It is recommended that
inexperienced computer users follow them as they are presented. All examples
should be completed before calling our Technical Support Group. Your
questions should be answered in the tutorials. Experienced users may find
that the "Fast Start" area (Sections 1-5 through 1-7), together with a brief
reading of the tutorial sections, will suffice. The tabular summaries of each
section are designed to be used as a user guide once you are familiar with
Automenu's basic operation. 

1-3 System Requirements

Automenu can be used on all 100% IBM compatibles, including the IBM PC, XT,
AT, JR., Portable, Convertible, 3270-PC, and all Personal System /2 models.

Automenu requires DOS version 2.0 or higher. It requires only 32 KB of free
memory, due to the fact that it is written entirely in assembler. It is fully
functional with either fixed or diskette drives. It uses only standard,
documented DOS and BIOS calls. It is compatible with Microsoft Windows 2.X,
Windows/286 and /386, and Novell, 3COM, Alloy, and other network operating
systems.

1-4 Getting Started

Before you begin the tutorial, make a backup/working copy of the program
diskette, as you would with any diskette that contains important information.
Store the original in a safe place.


  Automenu 4.7               THIS IS AUTOMENU                     Page 10
Please read the READ.ME file that came with this version for some additional
instructions. You may find information which was published after the manuals
went to press, or other important data you might find useful in your setup
and operation of Automenu. To read this file, from the DOS prompt enter "TYPE
READ.ME".

We welcome user comments and suggestions concerning the software and the
documentation. Please feel free to call, write, or use the comment form
provided with this documentation to give us your reactions to this product.
All user comments are carefully considered in our continuing effort to
improve the program and its documentation. Thank you for purchasing Automenu.
We hope you find it easy to use and powerful in its abilities.

1-5 Automenu - A Fast Start

For those that hate to read manuals, and may already be DOS-literate, the
following section will allow you to get Automenu up and running quickly and
easily. If you are an intermediate to advanced DOS user, this section is for
you. If you are unfamiliar with concepts such as subdirectories and batch
files, and how they operate, please skip the following Sections (1-5 through
1-8) and proceed directly to Section 2.

1-5.1 Installing Automenu on a Fixed Disk System

Boot your computer as usual. At the DOS C: prompt, type the following
commands:

C:             (Log to the C: Drive)

MD \AUTOMENU   (Make a subdirectory called "\AUTOMENU")

CD \AUTOMENU   (Changes to the \AUTOMENU subdirectory just created)

Place your Automenu distribution disk in Drive A:, then type:

COPY A:*.*    (Copy all files from the A: drive to the \AUTOMENU directory)
Then copy the file AUTO.BAT to a directory on the Path, and modify it to
change directories to wherever you are storing your other Automenu files.
While still logged onto the C: drive in the \AUTOMENU subdirectory, type
"AUTO" (no quotes) and press Return to start Automenu.

This will load the default Primary Menu called AUTOMENU.MDF. There will be an
option on this menu called the MENU-BUILDING FACILITY - use it to edit and
create new Menu Definition Files. You will notice that pressing the page-down
key will access successive menu screens.

1-5.2 Installing Automenu on a Floppy Diskette System

Automenu's main benefit is to those users who are using fixed disk systems.
If you wish to use it on a floppy based system, here's what to do:








  Automenu 4.7               THIS IS AUTOMENU                     Page 11
After booting the computer, copy the following Automenu files to the root
directory of the floppy disk you wish to use: AUTOMENU.COM, AUTOMAKE.EXE,
AUTOCUST.COM, AUTO.BAT and AUTOMENU.MDF. Keep in mind that Automenu's
strengths lie in its ability to change directories and run a wide variety of
programs. Since floppy systems do not usually require subdirectory support,
and their storage capacity is inherently limited, Automenu may be of less
utility on those systems than on hard disk systems. If space is a problem,
the AUTOMAKE.EXE and AUTOCUST.COM can be moved to a separate diskette as they
are not needed except to modify the menu system.

Again, you can access AUTOMAKE from one of the menu selections and customize
your own options. See Section 3 for details on using the Automenu commands,
or print out some of the sample MDFs (Menu Definition Files) to see how they
are structured. They are plain ASCII text files.

1-6 Special Keys Within Automenu

While Automenu is running and a menu is displayed on-screen, there are
several keys that will perform important functions. They are outlined later
in Section 5.2 and include on-line help, program information, forced screen
blackout, message input, and much more.

1-7 Automenu, Up Close and Personal

Automenu is a menu driven, user defined software and system resource manager
that allows users to easily define screens of menu choices and a series of
DOS commands to be associated with each selection. For instance, if you make
an item selection and then associate several DOS commands (program names,
batch files or regular DOS commands like TYPE, ECHO, DIR, etc.) with that
selection, whenever you select that option, those DOS commands will be built
into a temporary batch file called AUTOTEMP.BAT and executed.

When Automenu runs, it looks for a Menu Definition File to know what options
to show on-screen and which DOS commands the user wants to be run with those
options. The Menu Definition File, or MDF, is a regular ASCII text file that
contains a special Automenu text character in the first position of each line
that will determine what Automenu will do with the remaining text. For
example, a title line is created with the line "%THIS IS A TITLE LINE". The
syntax for the typical MDF line of text is as follows:


               Syntax 1. xDOS_Command Parameter [Parameter...]  

               Syntax 2. xUser_Defined_Data [%1...%9] 


In both Syntax 1 and 2, "x" is one of the special Automenu Menu Definition
Language characters, outlined in Section 6 (and Appendix C). Notice that
there are no spaces between the "x" and the DOS_Command.









  Automenu 4.7               THIS IS AUTOMENU                     Page 12
"DOS_Command" is any executable DOS command, including any filename with an
extension of .COM, .EXE or .BAT, though there is a slightly different
treatment for batch files. Because Automenu will build a temporary batch file
from the DOS_Commands associated with the chosen selection and execute it,
there is a small problem which stems from DOS's failure to return to a
calling batch file from the batch file which has called it. DOS Versions 3.3
and later address this problem with the CALL command, and prior versions can
use COMMAND /C. You can also place the individual batch file commands in-line
within the Menu Definition File, because Automenu will include these commands
when it builds AUTOTEMP.BAT.

In Syntax 1, "Parameter" is any optional parameter that can be passed to the
DOS command being used, and can be either a static parameter such as a drive
letter or filename, or a dynamic variable as represented by the DOS
replaceable parameters %1 through %9. As an example, here is a typical MDF
text line as it might appear in your own personalized menu system:

+CHKDSK C:       <<<-- This is an example of a STATIC variable (C:)

+CHKDSK %1       <<<-- This is an example of a DYNAMIC variable (%1)

In Syntax 2, "User_Defined_Data" is any data you wish to be displayed
on-screen or as a prompt to the user to aid in selecting from a variety of
choices that have been defined. The best way to see these examples is to
print out the sample MDFs that are included on the distribution diskette and
study their layout and structure. More detailed explanations of the Automenu
command set are in Section 6, and in Appendix C.

Included with this package is a program called AUTOMAKE, the Menu-Building
Facility. AUTOMAKE is a text editor that allows you to create or edit
existing Menu Definition Files, and get on-line help with the Automenu
commands and functions. AUTOMAKE will speed the creation of new MDFs by
actually providing a "skeleton" menu file that you can edit and modify to
your own requirements. From DOS, you can access the Menu-Building Facility by
being in the Automenu subdirectory and typing "AUTOMAKE" (no quotes) and
pressing "Enter".

When you have finished editing your file, place the cursor in column 2 (the
narrow column) and press ESCAPE, then press "Y" twice, input a password (if
encryption is desired) or leave the password field blank, and press "Enter".
At the AUTOMAKE menu, Option 3 will Exit to DOS. More details on using
AUTOMAKE can be found in Section 3-8.

1-8 Technical Notes and Power Tips

Automenu is (in the most simple sense) a program that writes batch files and
controls their execution. When you associate one or more DOS commands with a
menu selection, Automenu will write those commands to a temporary batch file
(AUTOTEMP.BAT) and, under the control of AUTO.BAT, execute it. If you use the
"resident" feature of Automenu (the {!}, {=}, or {-} commands), it will
regain control automatically after completion of the DOS function(s). If you
use the "non-resident" feature ({+}), then you must use a "+AUTO" command to
restart Automenu. If you find that Automenu just dumps you out to the DOS
prompt after making a menu selection, chances are good that you did not start
Automenu with the AUTO.BAT batch file. (Look at the contents of AUTO.BAT to
see what happens there.) Check your procedures again and see if that is the
case.

  Automenu 4.7               THIS IS AUTOMENU                     Page 13
When writing your own Menu Definition Files, keep these POWER TIPS in mind:

1. Do not mix "resident" and "non-resident" batch commands within the same
menu selection. These are the {!} and {+} commands.

2. Do all your input {<} and output {>} messaging before using any other
commands ({+}, {!}, {=}, or {-}). This allows you to prompt for input, then
pass that input to DOS as a replaceable parameter (%1, %2, %3)

3. Make certain to end your MDF with the "#" symbol - this tells Automenu
that the file has ended. An error will occur if you do not include this.

4. Use a {%} symbol within your MDF to signify a new page, and do not use
more than eight {%} symbols in any one MDF.

5. Do not forget to include a "Return to DOS" option on your main menu.
Alternate menus should contain an option to return (or go) to another menu
level, and may or may not include an option to return to DOS.

6. You can specify a filename to be edited by Automake by typing "AUTOMAKE
FILENAME.MDF" at the DOS prompt.

7. Do not leave any blank lines in your MDF.

8. Make reference to Appendixes A, B, C and D.

9. To start Automenu, just type "AUTO".

10. Call our Bulletin Board Service (BBS) 24 hours a day for technical
assistance.




























  Automenu 4.7               THIS IS AUTOMENU                     Page 14
SECTION 2

INSTALLING AUTOMENU

Automenu is most useful for systems with a fixed disk which contain most of
the programs, software and utilities, that you use regularly. These files
usually include programs for word processing, spreadsheets,
telecommunications, graphics, utilities and data base management. Since
procedures for fixed and diskette drives are similar, we will concentrate on
fixed disk systems. 

For installing Automenu on a local area network, please refer to Section 9.

2-1 Installing Automenu For the First Time

There is an accelerated installation routine in Section 1. The following
procedure should be used by those less familiar with DOS, or who wish to
customize their installation. This INSTALL will ask you to specify which
subdirectory you want the Automenu programs copied to, and where your DOS
programs are located. Experienced users can use either system to install
Automenu.

When you first install Automenu, you will set up the conditions required to
permit Automenu to interact with and make use of your files and programs. The
Automenu installation program will ask you for specific information. Typing
in this information sets up the program to your individual specifications.

The first action you must take to use Automenu is to INSTALL it, or "load"
the program onto your fixed disk so it can be linked, or connected, to the
programs it will control for you. To install Automenu on the hard disk for
the FIRST TIME, perform the following steps:

1. Start up your system. Be at the DOS prompt and logged to the Fixed Disk.

2. Insert the Automenu diskette into your diskette drive A:.

3. Type "A:INSTALL" and press ENTER.

You will now see the first of a series of help and prompt screens that will
walk you through the installation procedure. You will be told of some of the
decisions you will be asked to make as you proceed with installation. Study
them closely, so you will be ready to respond to the prompts as they occur.
If you don't understand a question right now, continue on with this tutorial.
We will explain each prompt as it is displayed. It is also explained by
Automenu, on screen. Press the ENTER key. The next display tells you more
about what will be happening as you proceed with installation. As this prompt
notes, the act of installing the program will teach you a great deal about
Automenu. Press ENTER again.

What you see now is the Automenu Installation menu. This is actually Automenu
running with a file called INSTALL.MDF, and as you will see, we will use it
to do the installation! Press the "1" key to select Option "1" and proceed
with the installation. The next display tells you how to choose the drive on
which you wish to load Automenu. The default drive is C:, the common booting
drive in a fixed disk system.



  Automenu 4.7            INSTALLING AUTOMENU                     Page 15
The next screen asks for the name of the subdirectory in which Automenu will
reside. We recommend using a subdirectory name of "\AUTOMENU", but you can
use your keyboard cursor control keys to select whichever name you desire.

When you press ENTER, the next displays ask for the name of the drive and
sub-directory in which your DOS commands are located. This is vital for the
operation of Automenu. Select the drive letter from the list of choices,
press ENTER, and then type in the name of the directory containing your DOS
commands and press ENTER again. The common drive that DOS commands are on is
the "C:" drive, but select whichever applies. A common name for the
subdirectory used to hold the set of DOS command files is \DOS, but sometimes
people use the ROOT directory (\). When inputting this subdirectory name, be
sure to type the entire name, i.e., "\DOS" or "\DOSPROGS" (no quotes),
including the backslash character.

When you press ENTER, the next display asks if your AUTOEXEC.BAT file sets
the path of your system to the DOS commands. As the prompt tells you, if you
aren't sure, respond with a "NO" by pressing the right cursor key, and the
install program will automatically set the path for you.

NOTE: If your DOS commands are in the root directory of your hard disk, you
might consider setting up a \DOS subdirectory and adding that subdirectory to
your PATH command in AUTOEXEC.BAT so that the DOS command files will not
clutter your root directory.

Next, you are asked if you want Automenu to come up each time you boot up.
Since a major purpose of Automenu is to save time and keystrokes, calling
Automenu at boot time is the most common way of invoking it. We recommend you
select the default "YES."

Now, you will be given the opportunity to review the decisions you have made.
Review these carefully. If they are okay, press ENTER. If they are NOT
correct, select "NO" with the right cursor key, and then press ENTER.
Automenu will now complete the installation process, and when the program is
installed on your fixed disk, a screen indicating a successful completion
that will appear. This can take a few minutes depending on the speed of your
system. Press any key to return to the Automenu Installation Menu Screen.
Exit to DOS, restart your system, and away you go! 

2-2 Installing Automenu On a Diskette System

To use Automenu on a personal computer with no fixed disk requires an
Automenu diskette which contains the essential working files. The minimum
configuration for developing and using Automenu MDFs requires the files:
AUTOMENU.COM, AUTOMAKE.EXE, AUTO.BAT, and ANY files ending with a .MDF
extension. The file AUTOMAKE.EXE is only needed during the menu building
process and can be erased if space on the diskette is needed. Also, the
AUTOCUST.COM program only needs to be included if there will be changes made
to the system configuration (colors, custom switches, mouse support, time and
date format, etc.). See Section 8 for examples of the file AUTOEXEC.BAT
required to bring up Automenu directly when the floppy diskette is the boot
disk.






  Automenu 4.7            INSTALLING AUTOMENU                     Page 16
2-3 Updating From a Previous Version of Automenu

If you are upgrading from a prior version of Automenu, you do NOT need to
perform the Install procedure as outlined above. Depending on the version you
are now using, follow the guidelines as listed below to load the newest files
onto your system, and purge (delete) the old ones.

For Version 4.5, 4.01, and 4.0 users, delete your old copies of the following files and replace
them with the same ones from your distribution diskette:

AUTOMENU.COM, AUTOMAKE.EXE, READ.ME AND AUTOCUST.COM

Also, copy the AUTOMAKE.CSH file to your AUTOMENU directory.


Then copy all *.DOC files from the diskette to your computer system. This 
will copy the document files and other important new reference files to your
computer system, overwriting older versions.  

For Version 3 or 3.01 users, delete the following files and replace with the
one in parentheses:

AUTOMENU.COM (AUTOMENU.COM), AUTOINST.COM (AUTOCUST.COM), and READ.ME
(READ.ME)

Then copy AUTOMAKE.EXE, AUTOMAKE.CSH, and all *.DOC files from the diskette to
your computer system. This will copy the document files and other important
new reference files to your computer system, including the new menu editor.

For Versions 2 and PRIOR, delete the following files and replace with the
ones in parentheses:

AUTOMENU.COM (AUTOMENU.COM) and AUTOMENU.DOC (AUTOMENU.DOC)

Then copy AUTOMAKE.EXE and AUTOMAKE.CSH to your hard disk and RENAME all *.DAT
files to *.MDF.  This will change all the Menu Definition filenames to be in 
accordance with extension names used by versions 3 and later. The format of 
these menu files is the same, but the extension (.MDF) has been changed. (To 
start Automenu, we now use a batch file called "AUTO.BAT" instead of the old 
"Start", "Restart", "Auto1" or "Auto2" batch files. Please make a note of this
- it applies ONLY to Automenu versions 2.0 and prior.) Make certain to edit 
the AUTO.BAT file to contain a CD\ command to change directories into the
Automenu area.

Care should be taken that in renaming Menu Definition Files, any references
to those filenames will need to be changed, also. That is, if any of your
menu files call another, and the names have been changed, Automenu is likely
to issue a "Cannot Open MDF" error message. If this happens, just edit the
menu files to reflect the new filenames you are using. For example, instead
of using an "@AUTOMENU.DAT" command, you may have to use an "@AUTOMENU.MDF"
to load an alternate menu file.









  Automenu 4.7            INSTALLING AUTOMENU                     Page 17
SECTION 3

DOS AND AUTOMENU
 
We referred to "DOS" commands in Section 1 of this manual. You probably have
seen the letters "DOS" in other reference books for your computer, and the
applications for it. The letters stand for Disk Operating System. This is 
simply a program that runs your computer. It handles tasks such as input and
output functions - reading, writing, and printing to the screen.
 
You see one aspect of DOS each time you turn on your computer. That is the
"DOS prompt" that always greets you: A:>, if you have floppy drives, and C:> 
if you have a fixed disk. You will see this prompt referred to often in these
instructions. It will always be shown just the way we have used it here: C:>.  
You will see this reference when you are required to enter a command string that 
you want DOS to execute directly from the prompt.
 

3-1 Types of Commands
 
DOS uses two types of commands: INTERNAL and EXTERNAL. 
 
INTERNAL commands are loaded into the computer's memory from a file called
COMMAND.COM. These commands remain in memory until the machine is turned
off. They are referred to as resident or internal commands.
 
EXTERNAL commands are performed by executable files (".COM", ".EXE" or ".BAT"
files) with the same name as the command. These "COMmand", "EXEcutable" or
"BATch" files are stored on your disk. They are loaded into memory and executed
only when you invoke them. They are referred to as external or non-resident
commands.
 
All files with an extension of .COM, .EXE, or .BAT can be executed by invoking
their name from the DOS prompt.
 

3-2 Directories
 
DOS 2.0 and subsequent versions have the capability of organizing your fixed 
disk into directories and subdirectories. This means you can store your files 
in smaller logical groupings according to their type or function. Use of the 
directory facility makes it easier to locate and manage your files. It also 
prevents any one directory from becoming so large that the process of locating 
and executing commands is slowed due to the sheer number of files in it.
 
A common practice with users who have a fixed disk drive is to store all of 
their DOS files in a directory, usually named "\DOS". The concept of directories 
is important to your use of Automenu. You will have many occasions to work with
directories when you create your menus. 
 
A directory is a table of contents of the files on a specific part of the disk. 
You might think of it as a file drawer. The main directory is called the "root"
directory.  DOS identifies the root directory with a backslash (\).  You will 
often use this symbol when you create menus.

  Automenu 4.7            DOS AND AUTOMENU                     Page 18
 
The file drawer - the root directory - may contain many file folders. These 
are the directories that are linked to the root like branches on a tree. A 
typical group of file folders might be linked to the root like this: 
 
                                 C:\ (ROOT DIRECTORY) 
                                 | 
         +-----------------------+-----------------------------------+ 
         |                                                           | 
         |                                                           | 
         |                                                       C:\AUTOMENU 
     C:\SALES 
         | 
+--------+------------------------------------+ 
\SALES\ATLANTA                            \SALES\DENVER
 
 
Notice that there is a specific PATH from the root to, say, your Atlanta sales 
data.  If you wanted to access that data, you would have to tell your system 
what PATH to take to get to that data. See your DOS manual for more discussion
on the "PATH" command.
 
When specifying a PATH or DIRECTORY name, "C:\SALES" tells the computer to
go to that directory, or area of the disk. Then the subdirectory "C:\ATLANTA"
directs the computer to the next lower directory, thus allowing more detail 
in organizing and categorizing your files. 
 

3-3 Extensions
 
When you create an MDF, you will give it a file name.  All files on your system
have a name similar in structure to FILENAME.EXT.  Common extensions of files
that can be executed (like DOS commands and programs) have extensions such as
".COM" (command), ".EXE" (executable), and  ".BAT" (batch).  Automenu uses the
extension ".MDF" to indicate that these files are Menu Definition Files.


3-4 Batch Files
 
A batch file is a series of DOS commands that can be entered through the
keyboard which are incorporated into a text file; one that can be executed any
time either from the keyboard or, as in Automenu, from a program.  One of the 
ways that Automenu executes menu selections is by creating a batch file named
AUTOTEMP.BAT and executing that file.
 
One batch file in the DOS root directory is AUTOEXEC.BAT. This is a batch file
that is called upon by DOS during the booting process. Automenu will be most
useful if it is activated when your system is first turned on. We can make this
happen by putting commands in the AUTOEXEC.BAT file that automatically
activate Automenu. You may do that when you install Automenu on your fixed
disk (see Section 2).

  Automenu 4.7            DOS AND AUTOMENU                     Page 19

THE ELEMENTS OF AUTOMENU
 
The heart of Automenu is AUTOMENU.COM, an executable file that displays
menus on the screen and causes menu selections to be executed. The menu
contents are stored in Menu Definition Files with ".MDF" filename extensions
("MDFs"). An ensemble of several MDFs are delivered with Automenu, one
primary MDF and many other alternate MDFs. The primary MDF
(AUTOMENU.MDF) is loaded by default whenever Automenu is activated.

AUTOMENU.COM is ALWAYS invoked by a batch file called AUTO.BAT, whose
primary function is to run Automenu and then run any temporary files created 
by Automenu.
 
NOTE: IF YOU ARE RUNNING AUTOMENU, ALWAYS TYPE "AUTO" TO
BEGIN. 
 
Automenu also contains programming tools to create and edit menus, to 
customize menu displays, and to explain how the program AUTOMENU.COM operates.
AUTOMAKE.COM is the editor you can use to create, modify or print out your
menu definition files. AUTOCUST.COM is the customization utility you can use
to change screen colors, blackout time delay, and other performance features 
of Automenu. 
 
Documentation files and installation files complete the Automenu package. 
 

3-5 The Automenu Files
 
The files listed below comprise the Automenu package. They are categorized and
their functions are listed below. You may place your disk in Drive A: and give 
the "DIR A:" command to see the listing of these files.
 
The Automenu Programs 
 
AUTO.BAT                                Batch file that starts Automenu 
 
AUTOMENU.COM                            The operating program  

 
Menu Definition Files

AUTOMENU.MDF                            Primary Menu Definition File

NETEXAMP.MDF                            Examples of network menus

DOS.MDF                                 Examples of DOS commands

BATCH.MDF                               Examples using batch files

ENTER.MDF                               Example of menu password protection




  Automenu 4.7            DOS AND AUTOMENU                     Page 20
 
Programming Tools
 
AUTOCUST.COM                            Menu Customization Utility 
 
AUTOMAKE.EXE                            Menu-Building Facility 
 
AUTOMAKE.CSH                            Context-sensitive help for AUTOMAKE

AUTOMAKE.CFG                            Configuration file for AUTOMAKE


Documentation Files
 
AUTOMENU.DOC                            This document 
 
READ.ME                                 Special information - READ THIS!! 

MOREHELP.DOC                            Automenu Questions and Answers 

CIS_HELP.DOC                            Information on using CompuServe

 
Installation Files
 
INSTALL.BAT                             Fixed disk installation routine 
 
INSTALL.MDF                             Installation menu definition file 
 
INSTALL.DAT                             Installation data file


3-6 Getting Up to Speed with Automenu

After performing the installation as described in Section 2, remove the Automenu
diskette from Drive A: and reboot your computer by pressing the [DEL] key while
holding the [CTRL] and [ALT] keys down.  (If you installed Automenu so as to
activate Automenu when the system is booted, you will now see the first page of
the sample menu.)  Enter the command "AUTO" at the DOS prompt to start
Automenu and to bring up the sample menu.

3-7 Menu Definition Files
 
A Menu Definition File (MDF) is a data file in which an Automenu menu is 
stored. There may be up to eight menu pages and up to eight menu selections 
on each page in any MDF. 


  Automenu 4.7            DOS AND AUTOMENU                     Page 21

Following the Automenu tutorial, one should either make a primary MDF as
described in Section 4 entitled "Making a Menu", or modify an existing file and
begin to use that menu as a primary MDF.  The example primary MDF is called
AUTOMENU.MDF and is a working menu with descriptive material and user
exercises.
 

3-7.1 Organization and Purpose of Menu Definition Files
 
Initially, a single, primary MDF, supplemented by the MDFs delivered with
Automenu, may be sufficient for many users. Over time, though, as you learn 
the power of Automenu, you will develop an ensemble of Automenu MDFs.

A user's ensemble will have only one primary MDF, which is displayed whenever
the Automenu system is activated. Any number of subsidiary MDFs can be called
from the primary MDF by execution of a menu selection. Any MDF (subsidiary or
primary) can be called from another MDF. The MDFs you create, therefore, can
move between related menus and be set up to provide maximum utility for
everyday use.  The user must develop primary and alternate MDFs that address
his or her own needs and priorities.

The MDFs included with Automenu are intended to demonstrate how the menu
system works and to provide some rudimentary general purpose functions.  You
can also modify them to your own system requirements, should you desire.

 
3-7.2 Editing Menu Definition Files
 
An MDF is a regular ASCII text file. It consists solely of standard ASCII 
characters (letters and numbers, usually), and can be edited with any text 
editor that can read and write ASCII files without transforming the characters 
or inserting special characters. Wordstar, in non-document mode, is such an 
editor, as is the DOS line editor, EDLIN.
 
 
3-8 AUTOMAKE - Features of The Menu Building Facility 

AUTOMAKE 4.7 is a Menu Definition File (MDF) generator designed to work
specifically with Automenu.  Automake enables you to create menus in an easier,
quicker, and more intuitive manner than ever before.  With Automake you can 
edit multiple Menu Definition Files concurrently.  Other features include 
multiple file text search, automatic program location, complete color 
configuration, descriptive warning messages, menu file error checking, and a 
full context-sensitive help.



  Automenu 4.7            DOS AND AUTOMENU                     Page 22

AUTOMAKE has three levels of user operation:

   -   An advanced user level which allows you to edit an entire MDF file using
       the full screen editor;
   -   An intermediate level which allows you to edit the menu on a by-choice   
       basis;
   -   A novice level which permits interactive menu building with minimal 
       effort.
 

3-8.1 Activating AUTOMAKE after Installation
 
Enter the Menu Building Facility by selecting menu option 1.  Press the [ENTER]
key (to select the currently highlighted menu selection), the 1 key or the [F1]
Function Key to enter AUTOMAKE.  AUTOMAKE can also be executed from the
DOS prompt by typing "AUTOMAKE" and pressing [ENTER].

You will be prompted by AUTOMAKE's initial screen to make one of four menu
selections.  Any selection may be executed by using the cursor keys and pressing
the [ENTER] key, or by pressing the highlighted letter.  Help is available at all
times by simply pressing the [F1] key.
 
You will now see the selections offered by the Menu Building Facility displayed
on your screen.


3-8.2 Editing a Menu Definition File

Selecting Option 1 will place you within a file selection window.  Type either the
name of a pre-existing MDF or create a new one.  Typing in a wildcard (i.e.,
*.MDF or C:\AUTOMENU\*.MDF) will pull up a file selection box allowing you
to move between subdirectories to select a file for editing.  After selecting an MDF
for editing, you will be in the AUTOMAKE editor.

There are three levels of editing available with Automake: Novice, Intermediate,
and Advanced.  The novice level is intended for those who wish to create a menu
with minimal effort.  For those wanting to experiment with other features of
Automenu, the intermediate mode is suggested.  To create complex batch files and
to use some of the more advanced features of Automenu, the Advanced mode of
editing is recommended.  (Please note that a menu created in the advanced or
intermediate modes cannot be modified in the novice mode.)
 
Novice User Level:

If the user level is configured for Novice mode, a list box containing all defined
menu pages will be displayed.  From within this list box a menu page may be
selected for editing, or new pages may be added.  Menu pages may be added or
deleted from the menu by pressing the [INS] and [DEL] keys, respectively. 
Position the highlight bar and press the [ENTER] key to select a menu page for
editing.  After selecting the menu page, you will be placed in an editor similar in
appearance to Automenu.  Select the menu item you wish to edit by pressing the
item number, or position the highlight bar on the desired choice and press
[ENTER].


  Automenu 4.7            DOS AND AUTOMENU                     Page 23

If you choose to insert a menu selection, a dialog box will appear.  To add a menu
selection, press the [INS] key and specify whether to insert the new item before or
after the current menu selection.  Items may be deleted from the menu by pressing
the [DEL] key on the menu selection to be removed.  Fill in the menu selection
name and the startup command.  If you do not know the path or location of the
program on your hard disk, press the [ENTER] key in the Path area of the screen
and AUTOMAKE will attempt to find it for you.

Optional information, such as a short one-line description for the menu selection
or a password may be added.  If you wish to password protect your menu
selection, enter your password on the appropriate line.  Press the [F10] key to
accept your input.  The [ESC] key aborts the operation and the [F1] key gives you
help at any time.

Intermediate User Level:

If the user level is configured for Intermediate mode, a list box containing all
defined menu pages will be displayed (just as in the novice mode).  From within
this list box, select the menu item you wish to edit by pressing the item number,
or by positioning the highlight bar on the desired choice and pressing the [ENTER]
key.  After selecting a menu item, you will be placed in an editor similar in
function to the advanced editor.  The intermediate editor contains commands for
editing single menu items.  Items may be added or deleted from the menu by
pressing the [INS] and [DEL] keys, respectively.  Striking the letter [E] key on a
menu page will allow you to edit a title line in your menu definition file.

When adding a new menu choice, a command box will be displayed on the screen
after you have entered a selection name and a description for your menu choice. 
Choose from the list of available commands by highlighting the command you
wish to use and pressing the [ENTER] key, or by pressing the appropriate symbol. 
After entering all of your AUTOMENU commands, press the [F10] function key to
quit editing the menu choice.  Please refer to the various examples throughout this
user's manual and Appendix C for specific information on each AUTOMENU
command.

Advanced User Level:

If the user level is configured for Advanced mode, you will be placed directly into
the full screen editor.  While in the full screen editor, press the [F1] key for further
help or keystroke information.

Refer to section 4 of the user's manual for additional information on creating
menus while in the advanced mode of editing.


3-8.3 Printing a Menu Definition File

Selecting 2 on the main AUTOMAKE menu will allow you to send a specified
MDF to your printer.  Typing in a wildcard (C:\AUTOMENU\*.MDF) will pull up
a file selection box allowing you to move between subdirectories to select a file for
printing.  You can also type in the name of the MDF you wish to print.  (Make
sure you include the .MDF file extension when typing the filename, for example:
MYMENU.MDF.)


  Automenu 4.7            DOS AND AUTOMENU                     Page 24

3-8.4 Configuring AUTOMAKE

Selecting 3 on the main menu gives you the ability to alter some of AUTOMAKE's
functionality.  You may set the user level (novice, intermediate, or advanced), set
default screen colors, and set the default MDF.  The default MDF is used as a base
or skeleton when creating new menu definition files.


3-8.5 Exiting the AUTOMAKE Facility

When you are finished editing your menus, choose selection 4 to exit AUTOMAKE. 
Automake will ask if you want to save the edited MDFs.  If you wish to save your
MDF, select OK.  If you wish to encrypt your MDF (to protect or scramble), select
the Password choice, type in your password (up to 8 characters long), and press
[ENTER].  If you do not input a password, the file will not be encrypted.  NOTE:
Password encryption will encrypt your MDF so that it cannot be modified without
entering the proper password.
 
                                 >>>WARNING<<< 

If you password protect your menu files, you MUST make certain to document
what that password is - DO NOT forget it.

You are then returned to the Menu Building Facility menu.  Option 4 will exit the
facility and return you to your menu screen.


3-9 Control Keys 
 
While AUTOMAKE is still on the screen, examine the more definitive descriptions
of the Menu Building Facility and Control Keys on the following pages.  The figure
below displays the Menu Building Facility screen.  A description of the numbered
areas follows. 



================================================================
  MDF Functions      |              MDF Information
-----------------+---+------------------------------------------
                 |   |
                 |   |
      -1-        |   |                   -3-
                 |-2-|
                 |   |
                 |   |
-----------------+---+------------------------------------------
  Figure 3-2. Areas of MDF Display (see Table 3-9.1 following)


  Automenu 4.7            DOS AND AUTOMENU                     Page 25

Table 3-9.1 Areas of MDF Display

In Advanced/Intermediate mode, this is the screen you will subsequently use to
build your own menu.  You can see the type of entries you will be making.  Each
area of the MDF screen is defined in the table below.
 
Area              Function                    Description
 
1            Protected--AUTOMAKE        The entries in this column 
             identifies symbol          describe the function of the 
             entered in Area 2.         command in column (or area) 2. 


2            Command symbols are        The function codes you enter here 
             entered here.              will execute the required menu
                                        building functions. 
 
3            Text to appear on          The text you type in this column 
             your menu or used          is the text you want in the menu 
             by Automenu.               section specified in column 1, 
                                        or commands you want Automenu 
                                        to execute. 
 
Area 2 is also referred to as "Column 0." When viewed by a text editor, Column
0 will be the LEFTMOST character position.  Area 3 will comprise the remainder
of the text area. Area 1 is an AUTOMAKE interpretation of the symbol in area/
column 0 and WILL NOT appear on general purpose text editors like Wordstar or
DOS's EDLIN line editor.


Table 3-9.2 Programmed Key Functions 
 
The following keys enable you to edit a MDF while in Novice Mode:

       Keystroke           Description

       F1                  Help
       ESC                 Menu page selection 
       INS                 Insert a menu selection 
       DEL                 Delete a menu selection 
       Enter               Edit a menu selection 





  Automenu 4.7            DOS AND AUTOMENU                     Page 26

In Novice mode, editing a menu selection is very simple - all you need to do is
type the selection name, which appears on the menu, and the path or location of
your application.  If you do not know the location, simply press [ENTER] and
Automake will do the work for you.


The following keystrokes are active in the Intermediate Editor: 

       Keystroke           Description

       Spacebar            When in column 2, displays a command menu
       F1                  Help
       F3                  Insert a blank line above the current line 
       F4                  Delete the current line 
       Alt-D               Delete the current line 
       Alt-I               Insert a blank line above the current line 
       Alt-P               Find a file's location (path) 

In Intermediate mode, editing is done in a scaled-down version of the Advanced
Editor on an individual menu selection.  Only those items pertaining to a particular
selection will be displayed.


The following keys are active while in the Advanced Editor: 
 
       Keystroke           Description 

       Spacebar            When in column 0, displays a command menu 
       F1                  Help
       F3                  Insert a blank line above the current line 
       F4                  Delete the current line 
       F10                 Quit editing 
       Alt-B               Show other MDFs in the edit buffer 
       Alt-D               Delete the current line 
       Alt-F               Find a string in the current file 
       Alt-G               Go to a particular menu page and item 
       Alt-I               Insert a blank line above the current line 
       Alt-L               Load another MDF 
       Alt-N               Switch to the next MDF in the edit buffer 
       Alt-O               Change the filename of the current MDF 
       Alt-P               Find the location of a file (Path) 
       Alt-W               Write the current file to disk 

In Advanced mode, editing is done in a full-screen editor where you have total
control of Automenu's Menu Definition Language.




  Automenu 4.7            DOS AND AUTOMENU                     Page 27

3-10 Summary: Planning and Creating Working Menus 
 
First, write down a list of DOS commands and application programs you perform
that take more than a few keystrokes.  The following are examples:
 
-      Starting an application in a directory, e.g. Spreadsheet, Database, etc. 
-      Backing up your hard disk
-      Parking the hard disk before shutdown

Now, organize them into the order you wish to have them displayed on your
menu.  Remember to include a menu selection to exit to DOS.  Compose your
menu options using the following steps as a guideline: 

1.     Change to the desired directory (+CD \ Desired Directory Name) 
2.     Execute the application program (+Startup Command [Parameter]
       [Parameter...]) 
3.     Return to the Automenu directory (+CD \AUTOMENU)
4.     Execute the AUTO batch file to return to the menu (+AUTO filename.mdf)

       (Automenu Commands are in parentheses, and [  ] represents optional
       commands.
 
Add as many Menu Description lines for each Menu page as you feel are
necessary.  Using these worksheets, you can enter the AUTOMAKE Menu Building
Facility and modify the MDF file that came with Automenu to include your own
customized menu selections.  As with all development activities in new areas, it
is best to take a small bite first and confirm that your scheme works before
composing an elaborate set of menus.  Then add one or a few items at a time,
successively confirming that your enhanced menu works as planned. 









  Automenu 4.7            DOS AND AUTOMENU                     Page 28
SECTION 4  
 
MAKING A MENU 
 
Now that you're acquainted with Automake, you are ready to construct your
own customized menu.  We will walk through the construction of a primary
MDF to give you a base to build on.  
 
You will now create a test menu called TEST.MDF.  This TEST.MDF will
familiarize you with the menu editor so you will be able to create your own
customized menus in the future.

 
4-1 Developing an MDF 
 
Remember, a Menu Definition File (MDF) is the Automenu file in which your 
menu is stored.  You can store as many as eight menu pages with up to eight 
selections per page in each MDF.  Menu selections can load alternate MDF files
in a multi-level tree structure or even in peer-to-peer structure.  With
Automenu, you have the flexibility to create your own menu hierarchy
structure.
 
To get started, follow these steps: 
 
1.  Access the Menu Building Facility menu as explained in section 3-8.1 of 
    this manual.
 
2.  On the AUTOMAKE screen, select item 1 by pressing the "1" key.
 
3.  Within this file selection window, you can type the name of the MDF to
    edit, or press ENTER to see a file selection box that contains defined 
    MDFs.  For this exercise, type "TEST.MDF" and press ENTER.
 
If you are a novice DOS user, please read section 4-1.1.  For intermediate 
users, please read section 4-1.2, and for advanced users, read section 4-1.3.  
You will create a sample menu that includes a menu option to display the 
contents of the root directory.


4-1.1 Creating Menus Using the Novice Mode

1.   A list box containing all defined menu pages will be displayed.  Press 
     the "E" key to edit the title of the first menu page.

2.   You will be prompted to enter a menu page title.  Type "Primary MDF
     Building Exercise" and press ENTER.

3.   Now press ENTER again on the menu page title that reads "Primary MDF
     Building Exercise".

4.   You are now in a screen similar in appearance to Automenu.  Press the 
     Ins [Insert] key.  A dialog box will appear allowing you to choose 
     whether to insert a menu option before or after the current menu 
     selection.  Press ENTER on "Before the Current Choice".

5.   Type "Root Directory" for the Selection Name prompt and press ENTER. 
     Items typed on the Selection Name line will appear on your menu display.


  Automenu 4.7            MAKING A MENU                     Page 29
6.   For the Description prompt, type "Contents of the Root Directory" and 
     press ENTER.

7.   Next, type in "DIR" for the Startup Command, and press ENTER.

8.   For the Path or location, type "C:\" and press ENTER.

9.   Since this exercise is just a test, simply press ENTER on the prompt for
     a Password, so that TEST.MDF will not be password protected.

10.  Press F10 to accept your input.  Now you should see a menu display
     which includes the item we have just added.

11.  Press ESC twice.

12.  Now select 4 to "Leave The AUTOMAKE Facility".

13.  Press ENTER on "OK" to quit editing MDF files.

14.  Now press ENTER on "OK" again to save changes to our TEST.MDF.


4-1.2  Creating Menus Using the Intermediate Mode

1.   Follow steps 1 through 3 of section 4-1.1.

2.   You are now in a screen similar in appearance to Automenu.  Press ENTER
     on "Menu Option One".

3.   Follow steps 5 and 6 of section 4-1.1.

4.   After entering a description, press F10 to accept the data entered.

5.   Move the cursor to the line that reads "+CD [Program Directory]".

The period {.} tells Automenu that any entry made in column 2, following that
symbol, is a comment only and should be ignored.  This gives you the ability
to enter explanatory data in the MDF, such as the date the menu was last
updated, or for your own use.

6.   Your cursor should be in the narrow column of this line.  Type a "+"
     command in the narrow column (column 0).

7.   Type "CD\" in column 1 and press ENTER.  Make sure you have deleted
     any previous text on this line.

8.   Cursor down to the line that reads "+ [start command]".

9.   Type a "+" in column 0 of this line.

10.  Type "DIR/P" in column 1 and press ENTER.  Again, delete any previous
     text that remains on this line.

11.  Cursor to the "+CD [Automenu Directory]" line.

12.  Type a "+" in column 0 of this line.

  Automenu 4.7            MAKING A MENU                     Page 30
13.  Type "CD\AUTOMENU" in column 1 and press ENTER.  Any previous
     text should be removed.  When we have finished looking at the root 
     directory, we must return to Automenu.  To do that, the system must be 
     given the return path so the menu will be displayed again.

14.  Cursor to the "+AUTO file.mdf" line.  This last command returns control 
     to Automenu and displays the TEST.MDF menu.  It is important that you 
     end each {+} command series - those preceded by the plus {+} symbol -  
     with "AUTO" so your menu returns to the screen when you complete your 
     work with the menu selection.  If you do not make "AUTO" the last command, 
     the user will be returned to DOS.

15.  In column 0, type a "+" on this line.

16.  Type "AUTO TEST.MDF" in column 1 and press ENTER.

17.  Follow steps 10 through 14 of section 4-1.1 to complete your TEST.MDF.

What you have now on this portion of the menu is this: 
 
.Primary MDF-Building Exercise	<<<- Comment Line Only 
%Main Menu				<<<- Menu Title Line 
*Root Directory				<<<- Name of Menu Selection 
+CD \					<<<- "Batch" of DOS Commands to Change
+DIR/P					<<<- Directory, List It, then 
+CD \AUTOMENU		         	<<<- Then Change Directory Back to 
+AUTO TEST.MDF		        	<<<- Automenu and restart the Test Menu
 
What you have done is to create a "DOS Batch routine," similar to batch files
discussed in Section 3.  These commands will be formed into a temporary batch
file (AUTOTEMP.BAT) and executed by Automenu when this menu option is
selected by the operator. 
 
This starter menu is designed to function as a "template" for your own menu. 
This gives you the chance to see how a selection or item was entered, so you 
will have a better idea of how to enter your own menu choices. 
 
Do not forget that you must always have an "Exit to DOS" selection on your
menu so you can return to the system if necessary. 

4-1.3	Creating Menus Using the Advanced Mode

1. Follow steps 1 through 3 of section 4-1.1.

Each menu needs a descriptive title that will be displayed on the top line of 
the screen when it is used. The {%} function provides this capability. 
 
2. Cursor to the line where the word "Title" appears to the left of a "%" 
   symbol.  The percent "%" symbol tells Automenu that an entry in column 
   1 following the "%" symbol is a menu title.  The title will be displayed 
   on your menu, centered at the top line. 
 
3. Type "Main Menu" (NO QUOTES) in column 1.
 
4. Delete the remainder of the line with the DEL key.
 
5. Return the cursor to column 0 by pressing ENTER. 

6. Move your cursor down to the line that reads "Menu Option One".
  Automenu 4.7            MAKING A MENU                     Page 30

7. Type "Root Directory" in column 1 of this line.  Make sure to delete any
   previous text that remains on the line.

8. Press ENTER.  Your cursor should now be on a "?" description symbol.

9. Move your cursor to column 1 of the line that reads "Description for Option
   One Here".

10. Type "Contents of the Root Directory" in column 1 of this line and press
    ENTER.

11.  Follow steps 5 through 16 of section 4-1.2.

12.  Press F10 to accept your input.

13.  Follow steps 12 through 14 of section 4-1.1 to save your MDF.

You have successfully created your own MDF and added one menu selection to
it.  Continue reading to find out how to invoke your newly created menu.


4-1.4 More on Creating Menus

The command routine to display a different MDF would look like this:

*Automenu Sample Menu	<<<-	Menu Selection Name 
@DIFFERENT.MDF		<<<-	Loads Another MDF and Displays It. 
    				Specify a Drive Letter and Path if
    				File is not in Current Subdirectory
    				(i.e., @D:\AUTO\DIFFERENT.MDF) 

4-2 Completing the Menu 
 
An End-of-File mark {#} MUST follow the menu selections that comprise the
menu to indicate the end of the MDF to AUTOMENU.COM.  This end-of-file
mark is automatically entered for each new MDF created.  Be sure you do not
delete it.

4-2.1 The End-Of-File Mark 
 
If you are in the advanced mode of editing, PAGE DOWN to the end of the file
and note the {#} symbol in column 0 of the last line in the file.  If this is
absent, the {#} End-of-File symbol can be placed at the end of the file just 
like any other column 0 symbol if you are in the advanced or intermediate 
modes of editing.
 
When called by the AUTO.BAT program, Automenu must find a {#} symbol in
order to complete the process of reading in the MDF before it can proceed to 
display a menu on the monitor.  Absence of the {#} symbol will cause an error 
message to appear on the monitor.
 
An occurrence of the {#} symbol before the intended end of the MDF will cause
all menu lines after the {#} sign to be ignored.  The menu will appear to 
consist only of those lines before the {#} symbol. 

The functions and symbols you have just used are summarized, along with 
others, in Section 6.

  Automenu 4.7            MAKING A MENU                     Page 31

4-3 An Aid In Diagnosing Menu Development Problems 
 
Inexperienced users may write Automenu command sets that give unexpected 
results.  If such a result occurs, it may be of interest to look at the batch 
file that was just executed.  This will be impossible if the EXIT TO DOS 
selection is used before reading the batch file because a new AUTOTEMP batch 
file will have been written.  A debugging feature that can be handy is a menu 
selection that types the previous AUTOTEMP.BAT file (and does not create a new
batch file to do it).  Using the DOS TYPE command and the {=} Automenu command,
develop such a command and place it on a second menu page with a Title {%}
such as "Diagnostic Aid".


4-4 Developing an MDF from Scratch 
 
You may also build a menu from scratch using AUTOMAKE.EXE.  Advanced
users may also modify and build menus from scratch using their own text
editor.  To begin creating a new menu, perform the following steps: 
 
1.  Move to the \AUTOMENU subdirectory.   
 
2.  Execute the AUTOMAKE program with the command: 
 
                        C:>AUTOMAKE 
 
3.  When the first AUTOMAKE screen appears, select option 1. 
 
4.  Enter a unique MDF name of your own choosing, such as "MYAUTO.MDF"
    in the highlighted space and press ENTER. 
 
AUTOMAKE will search for an MDF file by that name.  If it is not found,
Automenu will assume this is a new MDF.  Now, you can proceed and develop
your own MDF as we have previously described.

This starter menu shows you a small example of some of the types of entries
you will be making when you create a menu.  Study them before continuing. 
It may be useful to "dump" the screen to your printer, so you will have a
permanent record for reference.  Use the Shift-PrtSc keys to print the current
screen to printer.
 
This starter menu is designed to function as a "template" for your own menu. 
You are going to create your menu by adding to this template.  This gives you 
the chance to see how a selection or item was entered, so you will have a 
better idea of how to enter your own. 
 

4-5 Moving Between Menus
 
One of the nice capabilities of Automenu is being able to move between menus 
files quickly and easily.  As shown in the following diagram, one MDF can 
easily reference another, and that MDF can reference any other, much like a 
tree structure.  This tree structure can be created only if you are in the 
intermediate or the advanced modes of editing.

  Automenu 4.7            MAKING A MENU                     Page 32
 
By creating logically separate menu files, we can group similar functions of 
the computer system together.  When we wish to add or modify the selections
on any menu, we will be able to easily locate those files and make the changes 
more quickly. 
 
The diagram shows a typical main menu, AUTOMENU.MDF, which contains
the instructions needed to call three other MDFs, and an exit to DOS option.
The first selection is labeled "Word Processing", and when that selection is 
chosen from the menu, Automenu will execute the command to load another
MDF, in this case one called WP.MDF.  This new screen will appear on the
user's monitor and present three choices: run WordPerfect, run Word, or return
to the main menu. If the user selects the first two options, they will execute 
a program and return to the menu. If the last option is chosen, Automenu will 
load the main menu file (AUTOMENU.MDF) and again display that screen. 

If the second selection from the main menu is chosen, Automenu will load the 
DB.MDF file and display those choices.  Again (in this example), the user will 
have three choices on this screen, including an option to return to the main 
menu. 

The third selection on the main menu works just like these others - if the 
user chooses it, Automenu will execute the {@} command that tells it to load 
another MDF, in this case PIX.MDF. As in the previous examples, PIX.MDF 
offers several selections including a return to main menu option. 
 
The menus you create can move to any other MDFs you wish to, and only the 
main menu needs to have an "Exit to DOS" option.  You can place an exit
option on any menu, but the preferred method is to have subordinate menus
return to a main menu where the user can exit to DOS. 
 
Remember this is only an example, and that the "menu screens" you see contain
the actual Automenu commands and do not appear as they would when displayed by
Automenu on a user's monitor.  We have drawn the diagram this way to try and 
show you the easiest and best way to move between menu files.





  Automenu 4.7            MAKING A MENU                     Page 33
%AUTOMENU Main System Menu <-----------------------------+ 
*Word Processing                                         ^ 
@WP.MDF  ---------------------------->+                  | 
*Database                             |                  | 
@DB.MDF  -------------------------------->+              | 
*Graphics                             |   |              | 
@PIX.MDF ------------------------------------->+         | 
*Return to DOS                        |   |    |         | 
+echo              D O S              |   |    |         | 
+echo          Type      "AUTO"       |   |    |         | 
+echo             to  Return          |   |    |         | 
+echo            to  Automenu         |   |    |         | 
#End of AUTOMENU.MDF                  |   |    |         | 
                                      |   |    |         | 
%Word Processing Menu <---------------+   |    |         | 
*WordPerfect                              |    |         | 
+CD \WP                                   |    |         | 
+WP                                       |    |         | 
+CD \AUTOMENU                             |    |         | 
+AUTO WP.MDF                              |    |         | 
*Word                                     |    |         | 
+CD \WORD                                 |    |         | 
+WORD                                     |    |         | 
+CD \AUTOMENU                             |    |         | 
+AUTO WP.MDF                              |    |         | 
*Return to Main Menu                      |    |         | 
@AUTOMENU.MDF  ----------------------------------------->+ 
#End of WP.MDF File                       |    |         | 
                                          |    |         | 
%Database Main Menu <---------------------+    |         | 
*PC-File Plus                                  |         | 
+CD \PCFILE                                    |         | 
+PCF                                           |         | 
+CD \AUTOMENU                                  |         | 
+AUTO DB.MDF                                   |         | 
*RapidFile                                     |         | 
+CD \RF                                        |         | 
+FILE                                          |         | 
+CD \AUTOMENU                                  |         | 
+AUTO DB.MDF                                   |         | 
*Return to Main Menu                           |         | 
@AUTOMENU.MDF ------------------------------------------>+ 
#End of DB.MDF File                            |         | 
                                               |         | 
%Graphics Main Menu <--------------------------+         | 
*Draw-It                                                 | 
+CD \DRAW                                                | 
+DRAWIT                                                  | 
+CD \AUTOMENU                                            | 
+AUTO PIX.MDF                                            | 
*Show Partner                                            | 
+CD \SHOW                                                | 
+GED                                                     | 
+CD \AUTOMENU                                            | 
+AUTO PIX.MDF                                            | 
*Return to Main Menu                                     | 
@AUTOMENU.MDF ------------------------------------------>+ 
#End of PIX.MDF 


Automenu 4.7                 MAKING A MENU                      Page 34
SECTION 5 

USING YOUR OWN MENUS

Let's take a look at the menu we've built. Select the menu selection "Leave
this Facility". To display the test menu will require that you enter the
command "AUTO TEST.MDF" (no quotes) from the DOS prompt and press ENTER. This
command will cause Automenu to display the menu file called TEST.MDF.

5-1 The Menu

If you just type "AUTO", you will see the main menu, AUTOMENU.MDF. It should
look similar to the following "generic" representation, with the important
featured areas detailed by the numbers:

                     ---------------------------------
        > 1 <        AUTOMENU  APPLICATION  MAIN  MENU
                     ---------------------------------
                                                    Menu 1 of 8     > 2 <
                         ==========================
        > 3 <            1 - Word Processing System
                         ==========================

        > 4 <            2 - Automenu Sample Menus




        > 5 <              Run the Word Processor


---------------------------------------------------------------------
November 12, 1988 04:50:01am         CAPS     > 6 <     Memory: 505 K
---------------------------------------------------------------------
        > 7 <                 Press H for HELP




Table 5.1, below explains the various parts of the menu, and how to use the
functions built into Automenu.

















  Automenu 4.7               USING YOUR OWN MENUS                 Page 35
Table 5.1. Menu Description

Item     Function           Description and Use
----     --------           ----------------------------

1        Title              The menu title you specified with {%}

2        Menu Page          You can have up to eight menu
         Number and         pages in each MDF by using more {%}
         Total Pages        symbols. If only one page is defined,
         in this MDF        you WILL NOT see this item.

3        Menu selector      The arrow pointer can be moved,
                            using the space bar, to make a
                            menu selection.                        

4        Selections         These are the options you specified for
                            your menu with the {*}. Option may
                            be selected by typing the number.

5        Explanation        Text you can put on your MDF to 
                            clarify a menu selection.

6        Status line        Gives you the following data:     
                            date--three formats you choose

                            time--two formats you choose

                            special keys in use--such as Caps
                            Lock, Shift, Alt, etc.

                            memory available--in Kilobytes.

7        Help               Press "H" once to obtain a menu
                            help screen. Press "H" again for more
                            Automenu help information.






















  Automenu 4.7               USING YOUR OWN MENUS                 Page 36
5-2 Programmed Menu Keys

Several keys are given specific functions whenever a menu is on screen. These
are described in Table 5.2, below.

Table 5.2. Programmed Menu Keys

Key      Function                Description and Use
---      --------                ----------------------------
F10      Next menu page          Displays the next menu page 

PgDn     Next menu page          Displays the next menu page 

-->      Next menu page          Displays the next menu page 

F9       Previous                Displays the previous menu
         page                    menu page

PgUp     Previous                Displays the previous menu page 
         menu page

<--      Previous                Displays the previous menu page
         menu page

HOME     First menu              Displays the first menu page 

END      Last menu               Displays the last menu page 

B        Screen                  Activates the screen blackout
         blackout                feature         

H        Help                    Displays help messages

                                 Press once to display the "Mini-Help".
                                 Press twice for extended help.

M        Message                 Prompts user for a message
                                 that will be displayed when screen is
                                 blacked out. This message will remain
                                 until Automenu is removed from RAM,
                                 (by a batch-nonresident command (+))  

S        Monitor                 Switches from color to monochrome
         switch                  monitor, and back. Switches active 
                                 monitor.

P        Program info            Displays info about this program. 


Work with your test menu to get acquainted with all of these functions. Then
you will be ready to build your own customized menu.

You can return to the test menu and edit it, or build a brand new MDF. The
file AUTOMENU.MDF is designed to be your main menu and we recommend that you
use it as a template. The menu selections AUTOMENU.MDF contains are for
example only and can be removed and modified to meet your needs.


  Automenu 4.7               USING YOUR OWN MENUS                 Page 37
Before designing your own customized menus, the experienced PC user may wish
to review the next section where additional Automenu functions are described.
Less experienced users may wish to build a simple menu and become more
comfortable with the commands covered thus far before exploring the more
powerful features of Automenu. 

5-3 Suggestions for Menu Development

Now that you have learned how to key in a menu from scratch and studied the
basic features of Automenu, it is time to think about the working menus to
make your own PC more efficient. 


Using these examples, you can enter the AUTOMAKE Menu-Building Facility and
modify one of the MDF files that came with Automenu to include your own
customized menu selections. As with all development activities in new areas,
it is best to take a small bite first and confirm that your scheme works
before composing an elaborate set of menus; then add one or a few items at a
time, successively confirming that your enhanced menu works as planned.


You have enough knowledge at this point to write simple but effective menus
that will allow you to use your PC in a much more efficient manner than in
the "bad old days" (yesterday), when you had to key in every DOS command one
character at a time or memorize mnemonics for a subdirectory full of batch
files.
































  Automenu 4.7               USING YOUR OWN MENUS                 Page 38
SECTION 6 

USING AUTOMENU'S OTHER CAPABILITIES

Automenu's capabilities can be grouped into three types of functions. These
are:
                                Menu Design
                                DOS Commands
                                Special Functions

You have used some of the menu design functions in the previous section.
These were the {.}, {%}, and {*} symbol functions. You've also used one of
the DOS Command functions, the {+} symbol. The other functions in each group
also use special symbols that are entered in column 2 of the MDF. We will
describe these in this section. All symbols are summarized in Table 6-1, at
the end of the section.  These commands should be used with the intermediate 
or advanced levels of editing in Automake.

6-1 Menu Design Functions

As noted, you are already acquainted with most of the menu design features.
There is one other function we can include in this group. It may sometimes be
useful and necessary to provide a user with additional information about a
menu selection. For example, when he is selecting a copy protected program
for which a disk must be inserted. It could be useful to warn the user he
will have to do this before he actually makes the selection.

The Selection Help function, a question mark {?} symbol, does this. With the
Selection Help functions, an explanatory message of your choice is displayed
in a reverse video block just above the Menu Status Line on the menu.

Why don't you edit your TEST.MDF and include this function?

Using Automenu, select the Menu-Building Facility and edit TEST.MDF the same
way we did in Section 4.

With the cursor in column 2, move to the line containing

             |  Selection   | * |   LOTUS 123  | 

Press the F3 key to add a blank line below the "LOTUS 123" line.
                 
Move the cursor to the new blank line.

Type {?}.

The word "Descript" is displayed in column 1.

In column 3, type "Insert the 123 diskette in Drive A:" (NO QUOTES)
Save the edited MDF, and call up the test menu from DOS by typing "AUTO
TEST.MDF" to see the message displayed when the arrow pointer or highlight
block is moved to the Lotus 123 selection. To summarize the four Menu Design
functions:

                   %     Menu Title
                   .     MDF Comment
                   *     Menu Selection
                   ?     Selection Help Message

  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 39
Here is an example of how these might be used in an MDF.

.Menu-Building Test
%TEST MENU
*Word Processing
+CD \WS                <<<---- The {+} commands will be built into a
+WS                            batch file and executed after Automenu
+CD \AUTOMENU                  terminates and leaves memory. That's why
+AUTO                  <<<---- the last command is "AUTO", to restart it.
*LOTUS 123
?Need Lotus Disk in Drive A:
+CD \LOTUS
+123
+CD \AUTOMENU
+AUTO
*Return to Disk Operating System
+CD \                  <<<---- This option will change directories and exit 
+ECHO ON                       to DOS, because there is nothing else to do
.
. Below is an example how to add a second and third page
. to your MDF. These pages would be available by pressing
. Page Down while the menu is displayed.
. Remember, these lines beginning with a period are comments
. and are disregarded by Automenu!
.
%SECOND PAGE       <<<--- This is how you add a second page to your menu.
*Erase files on Drive A:  Just add another percent symbol, and carry on!
+ERASE A:*.*       <<<--- Be CAREFUL with commands like this one!
+AUTO
%THIRD PAGE        <<<--- Here is the Third Page of your menu!
*Copy diskette in Drive A: to Drive B:
+DISKCOPY A: B:
+AUTO
#End of MDF
Automenu selections can cause either a single command or a group of commands
to be executed. Each command (single or part of a group) can be up to 127
characters in length. When several commands are combined to execute a single
menu selection, the group of commands is called a batch routine because all
the commands are batched together in a single procedure.

6-2 DOS Commands

In Section 3, you used the plus {+} symbol command to write routines needed
to permit the user to proceed with his menu selection. These were DOS
commands executed by the operating system. Automenu has the capability of
executing DOS commands in a variety of ways, depending on your needs and what
you want the system to do. There are two general categories of commands:
batch and direct.

6-2.1 Batch Commands

When you used the {+} symbol in building TEST.MDF, the test menu, you
combined several DOS commands into a routine that performed one specific
function. When several commands are combined like this, it is known as a
batch routine--all the commands are "batched" together in a single procedure.
For complex routines, these are the most advantageous. Automenu utilizes two
types of batch routines: non-resident and resident.

  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 40
In general, non-resident Automenu commands offer larger Random Access Memory
(RAM) availability for executing the commands contained in the batch file.
Resident commands do not require that Automenu be reloaded at the end of the
batch file, and are, therefore, faster to redisplay the menu after execution.
You can, therefore, make the tradeoff between execution speed and memory
availability depending on your own individual requirements.

6-2.1.1 RAM Utilization and RAM Cram

When a program is loaded into RAM, it marks the highest memory location that
it needs. A program loaded later while the first remains in RAM can use that
mark to locate unclaimed memory in which to locate itself. When a program is
not needed, it may relinquish its claim to memory or it may "Terminate and
Stay Resident" (TSR), retaining its claim on part of RAM. In this way, more
than one program can reside in RAM simultaneously. This ability is used by
DOS (in its MODE, PRINT and GRAPHICS commands), and by a variety of programs
that "pop-up" in response to a "hot-key." Desktop organizers, spelling
checkers, on-line dictionaries and some communications packages are among
this group.

Technical Notes

If a TSR program is loaded while Automenu remains resident, later programs
will find the highest claimed memory to be that used by the TSR program.
Thus, if a TSR program is loaded while Automenu is resident, the RAM-freeing
effect of executing Automenu Non-Resident Batch files will be lost until the
TSR program is unloaded (or more commonly, until the system is rebooted).
Simply, you will lock out certain areas of memory by "piling up" Automenu on
top of another TSR program that will NOT release itself from memory. We
definitely recommend AGAINST executing TSRs from within Automenu's Resident
Mode ({!}, {-}, or {=} commands), however using the {+} Non-Resident Automenu
command to call these types of programs should present no unusual problems.

This aspect of RAM utilization has been called "RAM CRAM". You should keep
this in mind when writing commands to load TSR programs, e.g., SideKick,
MODE.COM, etc. By using the {+} command to perform this type of program
loading, Automenu will exit memory prior to executing your series of
commands, and no "RAM CRAM" will occur. If you notice the available memory
DECREASING after calling a menu selection and returning, you may have a case
of running a TSR program on your hands, or you may have issued the dreaded
"!AUTO" command, which loads another copy of Automenu on top of one already
resident.

The routine you wrote in TEST.MDF for selecting Wordstar would cause Automenu
to build an external batch file, AUTOTEMP.BAT, and return to the operating
system. The commands contained in the batch file would then be executed on a
line-by-line basis.

Automenu would become "non-resident" or relinquish its claim on memory before
the batch file was executed. The memory formerly claimed by Automenu would
become available for use by Wordstar instead. Typically, any application that
needs the maximum memory available in your PC will REQUIRE using the {+}
command to free up any and all workspace in RAM.





  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 41
6-2.1.2 Non-Resident Commands

There is no limit to the number of {+} commands that can be combined into a
batch routine for any single menu selection, however EACH COMMAND LINE CAN
ONLY BE UP TO 127 CHARACTERS IN LENGTH.

One major advantage of the {+} symbol is its ability to load programs that
terminate and stay resident--known as TSR programs--such as SIDEKICK, PROKEY,
PRINT.COM, MODE.COM and others.

But, there are disadvantages in some instances: this type of batch routine is
slower because Automenu must terminate and turn control over to the temporary
batch file AUTOTEMP.BAT; a CONTROL-BREAK also will return you to DOS, which
undermines any security measures you may have installed; and Automenu and the
Menu Definition File must be reloaded when you want to return to the menu.

Use of the {+} commands REQUIRES the use of the batch file AUTO.BAT, which
contains two essential commands: one to run the Automenu program
(AUTOMENU.COM) and the other to run AUTOTEMP.BAT, the temporary batch file
built by Automenu. 

The {+} commands are also used in situations where the user wants to return
to DOS when finished with a series of commands. The examples below return to
DOS or copy a file and then return to DOS; the reason they do not return to
the menu is because the AUTO command is not included.

%Example Menu
*Copy text files to C: from A: and return to MENU
+COPY A:*.TXT C:
+AUTO                       <<<--- Return to the Menu by running AUTO.BAT
*Copy Text Files And Goto DOS
+COPY A:*.TXT C:            <<<--- DO NOT return to Menu - No AUTO command
*Return to DOS
+CLS                        <<<--- Only Clear Screen, then go to DOS
#End of example menu

Even though using the {+} commands is a slightly slower method, WE RECOMMEND
THAT THEY BE USED BY NEW USERS because they are less prone to mistakes. Once
you become familiar with Automenu, other forms of the commands may be used.
When using the {+} commands in an alternate menu, it might be desired for the
alternate menu to be redisplayed when the routine is finished instead of
AUTOMENU.MDF or the main menu. To do this requires the user to specify the
name of the alternate menu on the same line with AUTO. For example, lets say
you have a communications menu called COMM.MDF and you want to return to the
COMM.MDF when Mercury is finished.

.Filename COMM.MDF
%Communications Menu
*Aquarius System
+CD \MERCURY
+MERCURY
+CD \AUTOMENU
+AUTO COMM.MDF   <<<-- By specifying a filename, we will return there
*Return to Main Menu
@AUTOMENU.MDF    <<<-- This command LOADS a different MDF
#End of COMM.MDF 


  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 42
6-2.1.3 Resident Commands

The disadvantages mentioned in the paragraph above can be overcome to a great
extent by keeping Automenu in memory. This can be done with the {!} symbol
command. This symbol is used in exactly the same manner as the {+} symbol.
There is no limit to the number of commands that can be included in each
routine, and each line of the routine may contain as many as 127 characters. 

Like the {+} command, the {!} symbol creates a batch file called
AUTOTEMP.BAT. This file contains each command in the routine. When it is
initiated, the routine is executed directly from Automenu, which remains
dormant, i.e., stays resident in memory. This type of batch file is faster
than the {+} command file, and is useful for actions that do not require
exiting to DOS.

Here is an example with a routine for calling Wordstar using this symbol:

%Example Menu
*Word Processing
!ECHO OFF             <<<--- While Automenu remains in memory,
!CLS                         all "!" commands will be executed.
!CD \WS                      Automenu will reappear faster when
!WS                          this method is used because it does
!CD \AUTOMENU                NOT have to re-load or re-read the
*Return to DOS               Menu Definition File.
+CLS                  <<<--- Automenu is NOT Resident in this command
#End of example menu 

                                >>>WARNING<<<

                        Never use the Command "!AUTO"

This will not only perform the command to restart Automenu, but will do so
while a previous copy of Automenu and COMMAND.COM are still in memory!
Needless to say, this will result in an unnecessary loss of available memory
reflected in the Automenu screen. Also, do not attempt to execute TSR
programs with the {!} symbol, as DOS will leave a similar pair of files
trapped in memory while the newly loaded TSR program sits on top of all of
them locked in place, unable to be recovered until after a system reboot.

Note that you still need to enter the "CD" (change directory) commands before
AND AFTER executing the program, if the program is in another directory. This
is ALWAYS necessary.

In the example above, the DOS commands ECHO OFF and CLS were added to the
beginning of the routine. This is because this method uses a SECONDARY
COMMAND PROCESSOR (COMMAND.COM) to run AUTOTEMP.BAT and ECHO would be ON by
default. In other words, without those two lines you would see the individual
commands displayed on the screen while they are being executed.

When the routine is finished, the last menu displayed will be the menu that
reappears. Note that it returns without the use of "!AUTO", which is NOT
needed and would cause problems. NEVER USE THE "!AUTO" COMMAND!





  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 43
6-2.2 Direct Commands

Batch commands are most useful for lengthy routines in which a number of
actions must be executed. Many times, a single command is all that is
necessary. In this case, the command can be interpreted by the operating
system as a command entered directly from the system prompt "C>". It is a
"direct" command.

Automenu uses two types of DIRECT COMMANDS--WITH and WITHOUT a pause
following program or command completion.

6-2.2.1 Direct Command without Pause

The dash {-} symbol creates a direct command. The command can be UP TO 127
CHARACTERS IN LENGTH, but there can be ONLY ONE {-} COMMAND per menu
selection.

This symbol does NOT create a batch file. When the command is completed, the
menu from which it was initiated is redisplayed.

                                >>>WARNING<<<

Resident and non-resident commands CANNOT be used together on the same menu
selection!

This command is useful for functions such as formatting a diskette or viewing
a directory. Here is how you might do that:

%TEST MENU
*Format Drive A:
-Format A:   <<<--- This command is executed IMMEDIATELY, with NO PAUSE
#END

OR:

%TEST MENU
*Directory
-DIR A:/P    <<<--- This command is executed IMMEDIATELY, with NO PAUSE
#END 

NOTE: You CANNOT use this function on any menu selection in which you have
used {+} or {!} symbols. These symbols are unique in their function and do
not operate together within the same selection.

6-2.2.2 Direct Command with Pause

The equal {=} symbol operates in the same manner as the {-}, with one
exception. When the {=} command has been completed, the user must press the
spacebar (or any mouse button) to redisplay the menu. This is useful when it
is vital that the user observe the results of the command.

For instance, in the directory example in paragraph 6-2.2.1, the directory
disappears after it is displayed. The {=} symbol can prevent that.





  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 44
Here is one way in which this symbol might be used:

%TEST MENU
*Directory
=DIR A:/P     <<<--- This command says PAUSE after completion!
#END

As you see, the command entered at the {=} symbol is the "DIR" command you
normally use from the DOS prompt to view a directory (C:> DIR A:/P). Direct
commands execute more quickly than others. They do however use more memory,
and only ONE command per selection is permitted.

Here is a summary of the Commands available within Automenu:

Table 6.1.   AUTOMENU DOS Commands

Symbol          Function              Description and Use
------          ---------             ----------------------------

  +             Batch Command         Use for lengthy routines;
                non-resident          when necessary to exit to DOS;
                                      when user must take exterior
                                      action. Preferred method.

  !             Batch command         Use when it is necessary to keep user
                resident              from returning to DOS with ctrl-break.

                                >>>WARNING<<<

Only one of these symbols can be used in a single menu selection. You cannot
use both symbols in one menu selection.


  -             Direct                Use when fast execution is needed.
                                      Useful for starting batch files.

  =             Direct                Use for fast execution, when it is
                with pause            appropriate to have operator press
                                      the space bar to redisplay the
                                      menu.


If you would like to learn more about how these command symbols work, their
technical aspects are analyzed in Section 8, and further described in
APPENDIX C.

6-3 Special Functions

The largest group of symbols are reserved to execute the functions that make
Automenu unique. These functions give you sophisticated capabilities that
provide that total control you desire.

There are seven other Special Function symbols in the MDL (Menu Definition
Language):




  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 45
#--End of MDF

.--Comment

^--Password

@--Alternate MDF

>--Output Message

<--Input (Dynamic/Static)

[--Timed Execution

You have already used the first two--{#} and {.}--in Section 3. 

If you recall, the {#} End of MDF symbol MUST be used to end every MDF.

6-3.1 Password

A password enables you to prevent unauthorized individuals from accessing
individual selections on the menu. You can even specify multiple passwords
for each menu selection. This enables you to set up different levels of
security for different individuals. While you would be able to access all
menus, your accounting clerk could be limited only to those with accounting
functions, and only to those selections on the menu. Your word processing
operator can be limited to those functions only, so they cannot inadvertently
erase a file or access unauthorized functions within the system.

The password symbol is {^}, and appears above the number 6 on the top row of
keys on your keyboard.

A password can contain up to 30 characters. And there is no limit to the
number of passwords that can be defined for each menu selection.

Here is how a password might be added to a previous example, please note that
both passwords "OK" and "BOSS" would execute this menu selection:

%TEST MENU
*Format Drive A:
^OK           <<<--- Makes a selection PASSWORD PROTECTED, in this
^BOSS                case, either "OK" or "BOSS" would allow access
-Format A:
#END 

6-3.2 Alternate MDF

One of the strengths of Automenu is its ability to connect menus and MDF's to
create a menu controlled system for separate pieces of software. The
Alternate MDF function gives you the ability to access an MDF from any other
MDF. Thereby providing unlimited numbers of menus and menu selections

The Alternate MDF symbol is {@}.





  Automenu 4.7
        USING AUTOMENU'S OTHER CAPABILITIES         Page 46
To use this in an MDF, enter the {@} in column 2, and the filename of the
menu you wish to call in column 3. Automenu supports full pathnames for
alternate MDF's.
                                >>>WARNING<<<

THIS FUNCTION CANNOT BE USED TOGETHER WITH THE {+}, {!}, {-} or {=} SYMBOLS!

The following Example shows how the main menu, AUTOMENU.MDF, might lead to
Alternate menus:

%Main System Menu
*Communications Menu
?Display Communications Menu
@COMM.MDF                 <<<--- Load another Menu File named "COMM.MDF"
*Accounting Menu
?Display Accounting Menu
@ACCOUNT.MDF              <<<--- Load the menu file named "ACCOUNT.MDF"
*Utility Menu
?DOS Utility Menu, ask supervisor for password
^BOSS                     <<<--- This option is PASSWORD protected
@UTILITY.MDF              <<<--- Remember to use the ".MDF" extensions!! 
#End of AUTOMENU.MDF

The UTILITY.MDF menu example above also shows a good way to protect all of
the menu selections in an alternate menu. In other words, the user must know
the password to get to the utility menu to execute any of the utility menu
selections.

The example below shows what one of the alternate menus might look like. Note
that the second menu selection is setup to return the user to the main menu:

.Filename COMM.MDF         <<<--- Comment Line
%Communications Menu
*Aquarius
+CD \MERCURY
+MERCURY
+CD \AUTOMENU
+AUTO COMM.MDF
*Return to Main Menu
@AUTOMENU.MDF              <<<--- Load and return to Main Menu Screen
#End of COMM.MDF                 (In this case, the main menu is called 
                                  AUTOMENU.MDF.)
6-3.3 Output Message

It is often necessary to give a user information or data about some action he
must take, or observation he should make, after a menu selection. This
function does that.

%Example Menu
*Directory 
>The directory displayed below is of the diskette in Drive A:
>The only files listed are Work Sheet files, or those files
>whose filename extension is WKS.
=DIR A:*.WKS                 <<<--- AFTER message is displayed,
#End of Example                         perform DOS command



  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 47
EACH OUTPUT MESSAGE IS LIMITED TO 80 CHARACTERS, but you can enter as many
message lines as you wish. However, if the message is more than 23 lines, the
additional lines will scroll off the screen.

NOTE: ALL OUTPUT MESSAGES WILL BE DISPLAYED BEFORE ANY DOS COMMANDS DEFINED
ARE EXECUTED. Do not intermix ">" and "<" with any other commands. See the
example below.

%Example Menu
*Check Disk
>Enter the Drive Letter You Wish to Check
>
<A:,B:,C:,D:
=CHKDSK %1      <<<--- This %1 will be the value of the Drive letter input
*Directory             on the line above (A, B, C, or D). This is OK!
>Enter Drive to List
+PAUSE          <<<--- NO NO NO! - Do Not Intermix ">" with ANY 
>Then Press ENTER        other symbol!
<A:,B:,C:,D:
=DIR %1         <<<--- Except the line noted above, this example will 
*Next Option           work. DON'T intermix the commands. Use
.                      ">" symbols FIRST, then {=}, {+}, {-} or {!}.
.                      Check the Appendix on Command Reference for details.

6-3.4 Input

Some programs require additional information to be passed to them. For
example, many programs will require that a filename be entered at the time of
execution. The Input function, used with the Output Message function, makes
it possible to prompt the user for this information.

The Input symbol is {<}.

Let's suppose you want to go directly to a file to edit when you select the
word processing option. Here is how you would set up your MDF to accomplish
that. 

%Mark's Example Menu
*Word Processing
?Run Wordstar
>This option requires the filename you wish to edit.
>Enter the filename on the DOTTED line below and press ENTER.
<             <<<---    This will show as a blank, dotted line onscreen.
+CD \WS                 After inputting data, Automenu
+WS %1                  will pass that data as "%1" to
+CD \AUTOMENU           tell Wordstar which file to edit.
+AUTO
#End of Mark's Example Menu

When the output messages appear on the screen, a row of dots will appear
below it. The user then simply types in the filename, and Automenu will go
directly to that file. The information entered will be used to replace the %1
before the DOS commands are executed. This is called "Dynamic Input." 

It is also possible to give the user the choices he has available from which
to select. This function is known as "Static Input."


  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 48
Automenu accepts any entry following the {<} command as input to be passed to
DOS (as a parameter). You can give the user as many choices as will fit on
one line. Each must be separated by a comma. The user then need only move the
cursor to the desired choice and press ENTER.

Using either Dynamic and Static Input, you can define up to nine prompts per
menu selection, mixing Dynamic and Static requests.

The results of each input request will be used to replace variables defined
within a particular menu selection. Each variable is given a number, 1-9,
preceded by a percent {%} sign. For example, %1, %2, etc. For a further
explanation of REPLACEABLE PARAMETERS (%1, %2, etc.), see your DOS manual or
the recommended reading list as outlined in Appendix B.

Here is how you might use both these capabilities in an MDF.

*Copy a file to TEMP directory on Drive C.
>Please select the diskette drive from which you wish to copy.
>Use the arrow keys to highlight the desired drive letter,
>then press ENTER.
<A:,B:        <<<--- This line will display "A:" and "B:" as choices
>                    to be highlighted with cursor keys and selected
>Now enter the name of the file you wish to copy.
>The filename can be up to eight characters, followed by a 
>three character extension. Example: TEST.DAT.
>Press ENTER when you have entered the filename.   
>Or you may quit now by pressing the ESC key.
<             <<<--- This line will be a blank dotted line for the user to
>                    "fill-in-the-blanks".
>The file will be copied from Drive %1
>The filename is %2
-Copy %1%2 C:\TEMP

NOTE: Another important feature of the input function that gives added
flexibility is the use of the ESCape key. The user can return to the menu at
ANY time during an input request by pressing <ESC>.

For an even better example of the use of the INPUT and OUTPUT functions, list
out the contents of the INSTALL.MDF file that is on your Automenu
distribution diskette. It details the sort of use you can make of these
powerful features, and will make it easier to understand how the {<} command
works with the DOS replaceable parameter (%1, %2, etc.).

Also check your DOS manual on the definition of replaceable parameters.

6-3.5 Timed Execution

There may be times when you want a menu selection to be selected at some
future time. This function does that.

The symbol for timed execution is {[}.

As many as 128 different times can be specified in an MDF. And since a menu
selection using the {@} symbol could load a second MDF with 128 more times,
the number of times is all but limitless.



  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 49
The times must be entered in international 24-hour format. For example, 10:30
AM MUST be entered as 10:30, whereas 10:30 PM MUST be entered as 22:30.

Special Note

The MDF from which the execution will take place MUST BE IN MEMORY at the
specified time for the function to operate. This function WILL NOT EXECUTE
automatically if the user is inside an application. If you are working in
your word processing application at 10:00 AM, and you have selected a timed
execution for 10:00 AM, the menu selection WILL NOT BE EXECUTED!

This capability is especially useful for automatic backups or reading
equipment connected to the computer like in this example:

%Example Menu
*Backup System Data
[10:00        <<<--- At 10 AM, perform this DOS command
[16:00        <<<--- At 4 PM, also perform this DOS command
-Backup C:    <<<--- This is the DOS command to be carried out
*Check Rain Gauge automatically
. These are comment lines and are ignored by Automenu
. This example reads a rain gauge connected to COM1:
. every two hours and then appends the results to a file
[01:00        <<<--- At these times, perform the DOS commands
[03:00               automatically!
[05:00
[07:00
[09:00
[11:00
[13:00        <<<--- Notice we use 24 HOUR time format!
[15:00
[17:00
[19:00
[21:00
[23:00
+CD \WEATHER  <<<--- Again, these are the commands to be carried
+RAINREAD            out at the preset time.
+COPY RESULTS.OLD+RESULTS RESULTS.NEW
+CD \AUTOMENU <<<--- These DOS commands will be carried out
+AUTO                at EACH of the times listed above ONLY IF
#End of Example      this Menu File is in memory at the time!

6-4 MDF Command Symbol Summary - Menu Definition Language (TM)

All Menu Definition Language commands are summarized in Table 6.2, below, and
in greater detail in Appendix C.












  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 50
Table 6.2. MDF Command Symbols

Symbol        Function           Description and Use
------        --------           ---------------------------

   %          Menu Title         Display title of menu

   *          Menu Selection     The selections available to user

   ?          Selection          Explain a menu selection in further
              Description        detail

   ^          Password           Limit access to selections

   @          Alternate          Link menus and MDF's to create menu
              MDF                driven systems. Load another MDF.

   -          Direct             Executed as if command were entered
              DOS                at DOS prompt (C:\>);
              Command            ONE COMMAND PER SELECTION LIMIT;
                                 127 character line limit;
                                 Automenu remains dormant in memory.

   =          Direct             Same as previous command, but user
              Command            must press spacebar to return to
                                 w/Pause menu (PAUSE).

   !          Resident           Creates batch file for series of
              Batch              DOS commands;
              Command            Automenu remains resident;
                                 127 character line limit;
                                 number of lines unlimited per 
                                 selection.

   +          Non-Resident       Creates batch file for series of
              Batch              DOS commands;
              Command            returns user to DOS if desired;
                                 127 character line limit;
                                 number of lines per selection
                                 unlimited.

   .          Comment            Places comment in MDF that is not
                                 displayed on menu.

   >          Output             Displays a message on user screen.

   <          Input              Permits user to enter variable
                                 parameters or data defining files,
                                 etc., to be called up when menu
                                 selection is made.

   [          Timed              Allows user to specify a future time
              Execution          for execution of menu selection.

   #          End of             MUST be entered as FINAL command in
              MDF                EVERY Menu Definition File.


  Automenu 4.7        USING AUTOMENU'S OTHER CAPABILITIES         Page 51
SECTION 7 

CUSTOMIZING YOUR MENU

As individual and unique as your menus can be made with the functions
discussed up to now, there may still be additional features you want to
include. You may even want to switch off certain features such as the
selection bar or arrow. Only one may be needed. You almost certainly will
want to customize the menu screen colors. Automenu provides a customization
utility that allows you to do this.

7-1 Accessing the Customization Utility

The customizing program is in the file AUTOCUST.COM. You can call this up
directly from the DOS prompt. It can be more useful, however, if you make
AUTOCUST.COM a selection on one of your menus, perhaps the main menu. This
will enable you to change features of your menu as often as you desire,
without exiting to DOS.

You can access the customizing function from DOS by typing "AUTOCUST" at the
prompt:

                                 C:>AUTOCUST

NOTE: If you have changed the name of the AUTOMENU.COM for any reason, you
must specify the new file name to AUTOCUST. To do this, enter:

                          C>AUTOCUST "FILENAME.COM"

Be sure to include drive and pathname if "FILENAME.COM" is not in the current
subdirectory. AUTOCUST is a menu driven program, containing three menus. When
you call AUTOCUST you will first see this screen:

These functions will be discussed in the order in which they appear on the
menu. The changes made to the individual characteristics of the menu are
stored as part of AUTOMENU.COM and NOT in a separate configuration file, as
with some other menuing product systems.

7-2 Color Customization

Select this function by typing "1" at the menu prompt. The Automenu Color
Customization Section menu will be displayed. This menu lists all sections of
the menu for which the color can be customized. Select the area you wish to
change color on by moving the double bracket pointers ( --> ITEM  <-- ) with
the up and down arrow keys.

The keys that make the color changes are indicated at the lower third of this
menu. If you want to black out a section of your menu, simply set the
foreground color to match the background color, for example black on black.

When you have made all your desired color changes, press "W" to make the
changes permanent (Write them to disk). 

7-3 Custom Switches

This menu operates in the same manner as the color menu. The switches are
described in Table 7.1. 

  Automenu 4.7             CUSTOMIZING YOUR MENU                  Page 52
Table 7.1. Custom Switches

Switch        Options                     Description & Use
------        -------                     ----------------------

Country       USA    --  mm/dd/yy         Sets form in which date
format for    Europe --  dd/mm/yy         is displayed.
date          Japan  --  yy/mm/dd

Time          (12) or 24 hour              12 hour shows AM, PM

Date/Time     (enabled)/disabled           Determines if date/time is
display                                    displayed

Key display   (enabled)/disabled           displays or blanks CAPS, 
                                           NUM LOCK, etc. display

Blackout      OFF, or 1-45 min.            Default delay is (3) min.
delay

Blackout      (enabled)/disabled           Displays blackout message
message                                    when enabled.

Cursor type   (IBM)/Tandy                  Prevents the cursor from
                                           being seen on the menu

Screen mode   (color)/b&w                  Used if computer requires
                                           specific mode

Display       (color)/b&w                  Used for amber/monochrome screens

Selection
 < bar >      (enabled)/disabled           Generally, only one of these
<pointer>     (enabled)/disabled           is utilized
<numbers>     (displayed)
               /not displayed

Control       (enabled)/disabled            When disabled, user cannot
Break                                       use CTRL-BREAK to exit to DOS
                                            while menu screens are active

Screen swap   (enabled)/disabled            Enabled, allows switching
                                            between monitors

Automatic     enabled/(disabled)            Enabled, prevents user from
clearing                                    making entries before a menu
of keyboard                                 is displayed, or before a
buffer                                      command is completed.

Mouse          enabled/(disabled)           Are you using a mouse?
support

Mouse          5 to 60                      Set in increments of 5;
sensitivity                                 default is (20); Lower 
                                            numbers = more sensitive

Default values are in parentheses ( ).

  Automenu 4.7             CUSTOMIZING YOUR MENU                  Page 53
7-4 Change Default Filename for MDF

If you want to change the default MDF to your something other than
AUTOMENU.MDF, you must tell that to Automenu. This switch permits you to
specify your own MDF as the default. The name you specify here remains in
effect until you change it. However, we recommend that you use AUTOMENU.MDF
as your default main menu filename.

7-5 Change Default Filename for Temporary Batch File

Changing the temporary batch filename (default is AUTOTEMP.BAT) enables you
to write the temporary file to a virtual disk, specific drive, or specific
subdirectory. The filespec you enter here remains in effect until it is
changed, for example you can either change the name of the file to be created
(i.e., MYTEMP.BAT), or just change the directory or drive where the temporary
file is written (i.e., \YOURDIR\AUTOTEMP.BAT or E:AUTOTEMP.BAT). This
capability gives you needed flexibility in working with Automenu because you
can specify different names and locations for the temporary batch file.

The AUTOCUST utility allows you to specify an environmental variable in the
path/filename to permit Automenu to write a unique AUTOTEMP.BAT so that users
on a network will not overwrite each other's batch files. Please refer to
Section 9, "AUTOMENU and Networks", for more details on using environmental
variables and Automenu.

7-6 Reset All Values and Save

This function permits the user to return all switches, colors and filenames
to the original program values. You can do this anytime the program is
running.

You now have all the information you need to build any kind of menu or menu
system, and make it as individual as yourself.

7-7 Creating Your Own Menus

After you have installed Automenu on your system, it will be time to add
items to the menu system. Using AUTOMAKE, you should modify AUTOMENU.MDF and
enter in menu selection for your own programs and delete all the examples in
this MDF that you do not need. We recommend that you basically use only the
{%},{*},{+}, and {#} to get started at first. Once you have the system up and
running, you can go back and improve it. 

If you have any problems or questions at this point, you may want to take the
time to contact our Technical Support Group and see if we can get you back on
track. Please have your serial number handy when you call. 

For those who would like a deeper understanding of Automenu, the next section
provides a more technical discussion of the more complex functions. There are
also some examples to look at in addition to the MDF's that are on the disk.








  Automenu 4.7             CUSTOMIZING YOUR MENU                  Page 54
SECTION 8 

TECHNICAL CONSIDERATIONS

Users familiar with DOS and who have some programming experience can use
Automenu's capabilities to an even greater extent. This section discusses the
more technical aspects of the program, so those who desire to use it can
enjoy even more flexibility with Automenu.

8-1 Automenu Configuration

Automenu provides a direct interface with the DOS operating system. Menus are
created with Magee Enterprises' proprietary and copyrighted Menu Definition
Language (MDL). The MDL is used to create a Menu Definition File (MDF) in
which the menus and the commands that create them are stored.

The Automenu program reads the Menu Definition File (MDF) and effectively
routes commands entered there to the operating system for execution.

8-1.1 Program Interfaces

A batch file, AUTO.BAT, is the program root. When you follow the installation
procedure in Section 3, the batch file AUTO.BAT is created and placed in the
Automenu directory, and optionally within the AUTOEXEC.BAT file. To start
Automenu, always type "AUTO".

AUTO.BAT is built around two commands: AUTOMENU %1, which executes the main
program and your choice of menu files, and AUTOTEMP, which executes commands
written to AUTOTEMP.BAT by Automenu.

8-2 Program Operation

Automenu executes a menu selection either directly, or through the batch
file, AUTOTEMP.BAT. The method of execution is set by symbol commands entered
in the MDF (see Section 5).

In the direct mode (using the {-} or {=}), Automenu routes the MDF command
directly to DOS. This method is fast, and since the Automenu program remains
dormant in memory, the MDF does not have to be reread. The direct mode does,
however, use more memory than the batch mode.

In the batch mode, Automenu creates a batch file, AUTOTEMP.BAT, and if the
resident batch command {!} is present, Automenu executes it while remaining
dormant in memory.

If the non-resident batch command {+} is present, Automenu is terminated, and
the batch file AUTOTEMP.BAT is executed by a continuation of AUTO.BAT. This
requires that the final command in the MDF be "+AUTO" so that Automenu is
restarted.

We assume you are running Automenu from the hard drive C. ALWAYS START
AUTOMENU WITH THE "AUTO" COMMAND. Do NOT start Automenu by typing "AUTOMENU"
or you may find that when you make a menu selection, you are dumped out to
the DOS prompt with no action taken.




  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 55
8-3 Avoiding Inadvertent Memory Misallocation

All programs require a minimum amount of RAM to be loaded and to operate.
Some programs exhibit limitations in their speed or in their capacity to
store variables when they find only the minimum required memory available for
use. Automenu's {+} command format provides the ability to maximize the
RAM available for use by a program. It does this by removing Automenu from
RAM before a selected program is loaded.

The most obvious example of how to better utilize memory is in the use of a
spreadsheet. If the spreadsheet is loaded from a {!} command sequence,
Automenu will continue to lay claim on approximately 32K of RAM that might
otherwise be used for spreadsheet cell locations. A better practice would be
to load the spreadsheet program using a {+} command.

A less obvious example of inadvertent misallocation of memory is in the
improper loading of the class of programs that "Terminate and Stay Resident."
This class of programs remain in memory when they are not in use; they are
sometimes referred to as "TSR" programs. Because they remain resident in
memory, they may be called upon without being loaded. Some, such as SIDEKICK
are called upon by use of a "hot key". Others, such as MODE.COM are
transparent to the user, but nevertheless all such programs remain in memory
after they are loaded until the computer is rebooted or until they are
explicitly removed from memory.

Examples of such programs are SIDEKICK, PROKEY, TURBO LIGHTNING, and certain
communications and terminal emulation programs. Also DOS commands GRAPHICS,
PRINT, and MODE are TSR programs, and in order to do their work they must
attach to an area of memory and not release it.

If such a program were to be loaded ABOVE Automenu using the {!} command
form, all programs loaded subsequently will load into memory above that
occupied by the TSR program; in this way a spreadsheet program loaded later
would be unable to use any of the memory that could be vacated by removing
Automenu from memory. An example of this could be an innocuous command to
change the MODE. This command would load MODE.COM into memory above that
occupied by Automenu and preclude the ability to vacate the memory used by
Automenu for use by programs executed later.

8-4 Running Basic Programs

If you have programs written in BASIC language on your fixed disk, you can
access them using the {+} symbol in the MDF. When you do so, you must always
call up BASIC. Here is how you might set up a BASIC program selection:

%Example Menu
*Space Wars
+CD \GAMES
+BASICA SPACEWARS  <<<--- This command runs BASICA. You may be using
+CD \AUTOMENU             GWBASIC or some other derivative. In any case
+AUTO                     place the Basic start-up command here
#End of Example           followed by the filename to be used. 

When the program has finished running, the BASIC prompt, "OK," will be
displayed. Type "SYSTEM" at this prompt, and you will return to Automenu. If
you create your own BASIC programs use the command "SYSTEM" as the last
command in order to return to DOS (or Automenu) after completion.

  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 56
8-5 Using Automenu On Networks

Automenu is fully compatible with networks. The main problem with older
versions of Automenu was the creation of the temporary batch file
AUTOTEMP.BAT. If more than one user ran the same copy of Automenu from the
same drive and subdirectory at the same time, then more than one person would
write the AUTOTEMP.BAT file and a conflict occurred. That is why Automenu
provides a customization utility that allows the user to change the filename
of the temporary batch file to include both a drive and path name.
There are many other ways to configure Automenu to be used in the LAN
environment. Please refer to Section 9, "AUTOMENU and Networks", for a more
detailed explanation of how to set up your own customized menu files.

The variety of network operating systems preclude a single method of
configuring Automenu for all systems. We have helped users set up Automenu to
work on networks with as many as 400 nodes. We use it in-house on a Novell
system with absolutely no problems. Please contact our sales department on
pricing for using Automenu on Networks.

8-6 Mouse Support

Automenu supports the use of a mouse to allow the user to move the pointer
and to select an option. Moving the mouse up and down simulates the use of
the up and down arrow keys which moves the option pointer up and down on the
menu. Moving the mouse from side to side will simulate the use of the left
and right arrow keys which will then display other menus if they were
defined. Pressing any of the mouse buttons will simulate the pressing of the
ENTER key which selects the option indicated on the screen. The mouse
interface which Automenu uses to control the mouse is provided by the mouse
manufacturer through a device driver or DOS resident program. Automenu looks
for this support through interrupt 33H. If this interface is installed,
Automenu will detect its presence and communicate with the interface. NOTE:
Automenu is distributed with the menu support disabled. Please refer to
Section 7, "Customizing Your Menu", for details to enable mouse support.

8-7 Uses and Performance for Floppy Diskette Systems

For a floppy based system, placing the Automenu files on a newly formatted
diskette will enhance Automenu's performance. The use of a RAM drive and the
copying of the COMMAND.COM file into this RAM Drive will also help. The
Customization section can also help to change the location of where the
temporary batch file is to be written for example on the RAM drive D.
















  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 57
8-8 Contents of an Example AUTOMENU.MDF

.AUTOMENU Menu Definition File
.
.By Marshall W. Magee                          <<<- Comment only
.................................................
%AUTOMENU(R) Application Menu       Version 4.5<<<- Menu Title
.................................................
*Automenu Menu Building Facility               <<<- Menu Option
?Select to Use the AUTOMAKE Menu Editor        <<<- Option Help
+AUTOMAKE                                      <<<- Run Automake
+AUTO                                          <<<- Restart
.................................................   Automenu
*Automenu Customization Utility
?Select to Use the AUTOCUST Utility
+AUTOCUST
+AUTO
...............................................<<<- Comment only
*What Is Shareware - A Brief Explanation
?Select to Find Out More About Shareware
+ECHO OFF                                      <<<- Turn echo off
+CLS                                           <<<- Clear screen
+TYPE SHARE1.TXT                               <<<- Display three
+PAUSE                                              screens to
+CLS                                                explain
+TYPE SHARE2.TXT                                    Shareware
+PAUSE
+CLS
+TYPE SHARE3.TXT
+PAUSE                                         <<<- Wait, then
+AUTO                                               Restart AUTOMENU
*Basic                                         <<<- Menu option
?Run BASIC directly
-basica                                        <<<- Run without pausing
*DOS Command Menu
?This menu contains commonly used DOS commands
@DOS.MDF                                       <<<- Load another
...............................................     menu file
*Batch Command Menu
?This menu contains some special commands
@BATCH.MDF                                     <<<- Load another
...............................................     menu file
*Exit  to  DOS                                 <<<- Typical exit to
?Return to Disk Operating System                    DOS option
+ECHO .
+ECHO                 Exiting  to  DOS
+ECHO .
+ECHO .
+ECHO              Please  Enter    AUTO 
+ECHO         To  Return  to   Automenu  4.5 
+ECHO .
+ECHO .
+ECHO .
+ECHO       Thank You For Supporting Shareware!
.------------------------------
.Define another sub-menu
.------------------------------

  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 58
.The following line is the start of Page 2
%AUTOMENU(R)    ***** Example Second Menu *****<<<- Second page
.These are examples ONLY - Programs NOT Included    marker
*Chess                                         <<<- No games are
?Play the game of Chess                             included!
=ECHO No GAMES are included. Example only.     <<<- Run with pause
.................................................
*Backgammon
=ECHO No GAMES are included. Example only.
#End of AUTOMENU.MDF Menu Definition File      <<<- End of file mark
                                                    (required)
8-9 Examples of Batch Files

9-9.1 Floppy Diskette Version

Contents of AUTOEXEC.BAT             

ECHO OFF                     <<<- Don't display commands onscreen
CLS                          <<<- Clear Screen
DATE                         <<<- Used for systems WITHOUT clock/calendar
TIME                         <<<- with battery backup 
PROMPT $P$G                  <<<- Make prompt show current path
AUTO                         <<<- Command to Start Automenu

8-9.2 Fixed Disk Version

Example contents of AUTOEXEC.BAT  for fixed disk systems

ECHO OFF                     <<<- Don't display commands that follow
CLS                          <<<- Clear Screen
VER                          <<<- Display current DOS version.
DATE                         <<<- Request present date (OPTIONAL)
TIME                         <<<- Request present time (OPTIONAL)
PROMPT $P$G                  <<<- Prompt to show current path
PATH C:\PUBLIC               <<<- Set Path to subdirectory PUBLIC on C:
VERIFY ON                    <<<- Disk read after write Verify
AUTO                         <<<- Execute Automenu batch file (AUTO.BAT)
REM AUTOEXEC.BAT             <<<- Remark statement in batch file and is
REM by Marshall  Magee       <<<- Ignored by Automenu.
REM on 11/15/83

8-9.3 Example of AUTO.BAT

Example of AUTO.BAT          <<<- START Automenu BY TYPING "AUTO"

ECHO OFF                     <<<- Don't Display commands that follow
C:                           <<<- Change to C: drive
CD \AUTOMENU                 <<<- Change to Automenu subdirectory 
AUTOMENU %1                  <<<- Start Automenu program with menuname
IF ERRORLEVEL 1 GOTO QUIT    <<<- Check for ERROR during Automenu run
AUTOTEMP                     <<<- No Error, Execute AUTOTEMP.BAT 
:QUIT                        <<<- Label for error goto statement
ECHO ERROR DETECTED . . .    <<<- Display error message





  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 59
8-10 Menu Definition File (MDF) Description

The MDF is a standard text file that is read by Automenu to obtain the
information needed to display the menu. The file consists of lines of text
ending with a carriage return and line feed characters. THE FIRST CHARACTER
OF EACH LINE IS USED TO DEFINE THE FUNCTION OF THAT LINE TO AUTOMENU.

8-11 User Support

8-11.1 Problems and Technical Support

If you have problems with Automenu, please read this manual first to make
sure you do understand everything. We have tried to provide a problem-free
product but sometimes we make mistakes. If you think you have found a problem
please take the time to contact us and explain your problem to us. All
registered users will be informed of any problems and their solution. Make
sure that you include the following information to help us evaluate the
problem:

1.    Version of DOS you are using
2.    Machine type, memory, monitor type, hardware description
3.    Any application executed before Automenu
4.    Your address and telephone number (when corresponding)
5.    Where, when and how you obtained Automenu
6.    Which version of Automenu you are using
7.    Copies (printouts) of your current MDF's
8.    Printouts of your AUTOEXEC.BAT and CONFIG.SYS files
9.    Your product SERIAL NUMBER

We also provide an electronic Bulletin Board System (BBS) for anyone
interested in Automenu or Shareware in general. This board currently supports
1200, 2400, 4800, 9600 baud and 19.2 KB (Hayes) speeds and is available 24
hours a day, seven days a week. Multiple lines are now available, however in
the future we will offer some lines that are limited to registered users
only.

We maintain the most current releases of our products and many other helpful
files concerning Automenu, as well as a large selection of other SHAREWARE
products provided to us DIRECTLY from the authors. The BBS can be reached by
calling 404-446-6650. We also can be reached through a CompuServe ID:
76004,1541. Our Technical Support Group is open between the hours of 9am to
4pm ET Monday through Friday, and their direct line is 404-662-5387. We also
a have FAX line available at 404-368-0719.

8-12 Source Code

The source code for AUTOMENU.COM and AUTOCUST.COM is written entirely in
assembly language. The Menu-Building Facility (AUTOMAKE) is compiled with the
Microsoft Basic Compiler (BASCOM) Version 6.0.

For those interested, the source code was composed with IBM's Personal Editor
II and assembled with Microsoft's Macro Assembler Version 5.1 under DOS 3.3.
Automenu source code is no longer available. The current product is
substantially larger and more sophisticated than those before and the author
cannot (and does not wish to) be responsible for changes and enhancements
made by others as is the case when source code is released.


  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 60
8-13 Shareware

Shareware distribution gives users a chance to try software before buying it.
If you try a shareware program and continue using it, you are expected to
register. Individual programs differ on details -- some request registration
while others require it, some specify a maximum trial period (30 days). With
registration, you get anything from the simple right to continue using the
software to an updated program with printed manual.

Copyright laws apply to both shareware and commercial software, and the
copyright holder retains all rights, with a few specific exceptions as stated
below. Shareware authors are accomplished programmers, just like commercial
authors, and the programs are of comparable quality. (In both cases, there
are good programs and bad ones!) The main difference is in the method of
distribution. The author specifically grants the right to copy and distribute
the software, either to all and sundry or to a specific group. For example,
some authors require written permission before a commercial disk vendor may
copy their programs.

So, shareware is a distribution method, not a type of software. You should
find software that suits your needs and pocketbook, whether it's commercial
or shareware. The shareware system makes fitting your needs easier, because
you can try before you buy. And because the overhead is low, prices are low
also. Shareware has the ultimate money-back guarantee -- if you don't use the
product, you don't pay for it!

There is an Association of Shareware Professionals (ASP) made up of companies
and individuals concerned about quality software. If you are interested in
shareware or the Association, please feel free to contact us and we will
provide you with current information.

A common question is asked of us, "How do I find out about other shareware
products that are available?" There are many companies that provide the
service of finding and cataloging shareware products; and for a small fee,
will send you a diskette with shareware products on it. The first company to
provide this service was "The Public (Software) Library." To reach them,
write to Nelson Ford, P.O. Box 35707, Houston, Texas 77235-5705 or call
713-721-5205. For the names for other companies that provide this service,
look for ads in your favorite computing magazines. Our BBS contains the
latest versions of quality shareware provided to us DIRECTLY ON DISK from the
authors, so check for that phone number elsewhere in this manual.

8-14 Future

There will always be improvements in this software as the need warrants. Any
comments or suggestions concerning Automenu would be greatly appreciated.
Updates and other exciting programs will be available in the future. Thank
you, and tell your friends about us!










  Automenu 4.7             TECHNICAL CONSIDERATIONS               Page 61
SECTION 9 

AUTOMENU AND NETWORKS

Automenu has been enhanced to operate more smoothly with local area networks,
and has been tested in-house under Novell Netware. 

The benefit in using Automenu (or any program) on a network is the fact that
a SINGLE COPY of the program and associated data files can be SHARED by all
users. Up until now, most programs required you to place several copies on
the system in separate subdirectories in order that no two users could access
the same files at the same time. Network-specific software is designed to
allow multiple users to utilize the program concurrently.

This version of Automenu employs some new user-defined controls that permit
you to establish some very important criteria:

1. The file name and path where the temporary batch file is written
2. The file name and path to use for the default Menu Definition File

9-1 Environmental Variables

While previous versions could perform the above mentioned tasks, now you can
also substitute an ENVIRONMENTAL VARIABLE within those specifications. To
create ONE menu file that can be shared with all users on a network, we must
signify several things to the system, either at boot time or at network LOGIN
time.

For this feature of Automenu to work properly, we must be able to somehow
differentiate between users on a network system. This is typically done by
specifying something called an Environmental Variable. You will need to
specify the value for it by placing a "SET variablename = value" statement
within the network login or AUTOEXEC.BAT procedure. For example, if user
Betty logs onto the network, part of her login script should be SET USER_NAME
= BETTY, so that the variable "USER_NAME" will be placed in the DOS
environment and set to a value of "BETTY". Later, Automenu will be able to
reference this variable with the %USER_NAME% convention, and substitute
Betty's name in it's place.

Let's look at the sample network menu file below. You will note several uses
of environment variables as represented by names surrounded with the percent
symbols (%), i.e., "%USER_NAME%".

%AUTOMENU Sample Network Menu For %USER_NAME%
*Word Processing System
?Run WordPerfect For %USER_NAME%      <<<-- Automenu will substitute user's 
+CD \ %USER_NAME%                           name for each occurrence of the 
+WP                                         variable %USER_NAME%.
+CD \AUTOMENU
+AUTO
*DataBase Management System
?Run PC File+ Latest Version
+CD \PCF
+PCF /PATH,\PCF\%USER_NAME%           <<<-- Call a program and pass to it a
+CD \AUTOMENU                               parameter based on user's name
+AUTO 
#End of Sample MDF

  Automenu 4.7               AUTOMENU AND NETWORKS                Page 62
9-2 The DOS Environment

In the above example, each time we use the "%USER_NAME%" variable, Automenu
will look in the DOS environment for a variable of the same name and use its
value instead. The "environment" is really just a common area of memory that
programs can write to and read from - kind of a "general store" of program
information. Some programs are geared to look specifically at the environment
to find particular data important to their operation. If we were to look at
the DOS environment (by typing the SET command), we might see a listing
similar to the one below:

                         COMSPEC=C:\COMMAND.COM
                         PATH=C:\;C:\DOS;C:\UTIL

Other values might be present, like PROMPT=$P$G, and more depending on the
types and kinds of software you are running. Some programs ask you to place a
variable into the environment equal to a certain value so that they can find
support files which could not be found otherwise.

If you use a "SET USER_NAME=username" command, either within AUTOEXEC.BAT or
your network login script, Automenu will be able to refer to that variable
later on during the course of operation. This way you can write a single Menu
Definition File, with variables throughout, and depending on how the user
logs into the system, each will see a slightly different menu, with what can
be dramatically different functionality.

In the preceding example of an MDF, if it were Betty who logged onto the
system, her screen would show a title that read "Automenu Sample Network Menu
For Betty", and if she selected menu option number one (Word Processing
System), she would be logged into the "\BETTY" subdirectory before executing
her word processing program. When she was done, Automenu would return her to
the main menu. Note that all this is done based on how the user logged into
the system. If the user were Mark, his name would have appeared in all those
places, and "\MARK" would have been the subdirectory changed to.

The DOS environment is initialized by the user with the SET command
(available under DOS 2.0 and later) and can be read and/or modified by
application programs and batch files by specifying the name of a variable
enclosed within percent symbols (%USER_NAME%). SET is an internal DOS command
to modify, create, delete or display string variables, and is an easy way to
provide configuration data to programs and batch files. 

Think of the environment as a kind of "message board" that your programs can
write to and read from whenever they want. Your AUTOEXEC.BAT file can contain
statements like SET MV=C:\UTIL, which will set the value of variable MV equal
to C:\UTIL. If you type the command SET at any time, you will see two things:
the variable names as they were written to the environment, and their values,
similar to the example earlier. That system had variables COMSPEC and PATH
defined as variables, and "C:\COMMAND.COM" and "C:\;C:\DOS;C:\AUTOMENU" as
the values associated with them, respectively.








  Automenu 4.7               AUTOMENU AND NETWORKS                Page 63
NOTE: When specifying environment variables for a FILENAME, make certain that
the resulting filename is a VALID DOS Filename! Errors will result if you
don't take this precaution. You may want to limit the length of the variables
you create to be sure they will operate correctly.

With the power to use a single menu file system-wide, this version of
Automenu eliminates the redundancy of files that you may have experienced
before. By creating only ONE Menu Definition File (MDF) and only placing ONE
copy of the AUTOMENU.COM program on your network server, far more efficient 
use of your system's storage facilities are maintained, and far less work is
required to make modifications to user menus. Here is an example of a typical
user-oriented, network based menu file:














































  Automenu 4.7               AUTOMENU AND NETWORKS                Page 64
%%USER_NAME%'s NETWORK MAIN MENU <<<-- User's Name in Title
*%USER_NAME%'s Own Menu
?Access User's own System        
@%USER_NAME%.MDF                 <<<-- Load User's Menu File
*Inventory Control System
?Select to Use User's Dept. Database
>Please Input the Drive Letter   <<<-- Display Output Message
>             You Wish to Access, or Press
>             ESCAPE to Return to Automenu.
>
<A:,B:,C:,D:,F:,G:               <<<-- Drive Selections
>
>And the Name of the SUBDIRECTORY Your File is In.
>
<\%USER_NAME%,\,\DATA            <<<-- Show Generic 
>                                      Choices For Selection
>And Now Please Select the Name
>             Of the File You Wish to Access.
>
<%USER_NAME%,%FIRST_FILE%,INVENTRY,BASICS,LOCAL
+ECHO OFF
+CLS
+%1                              <<<-- Log to Drive as Specified
+CD \%2                                and Subdirectory
+PCF /FILE,%3                    <<<-- Use Variable Filename
+CD \AUTOMENU                    <<<-- Change Directory
+AUTO NETEXAMP.MDF               <<<-- Re-run Automenu with NETEXAMP.MDF
*Exit To DOS
?Select to Return to Network Main Directory
+CD \PUBLIC
+ECHO NOW EXITING TO DOS IN NETWORK SUBDIRECTORY
+ECHO JUST TYPE "AUTO" TO RETURN TO AUTOMENU
#End of Network Menu Example "NETEXAMP.MDF"

You can find this file on your distribution disk as NETEXAMP.MDF. Feel free
to modify it as needed for your particular situation, and be sure to check
your DOS manual for further explanation of the Environmental Variable. Also
refer to the new Appendix B, "Recommended Reading", for more places you can
get technical background information about all aspects of the Disk Operating
System. 

The following is an example of a user-specific menu file called from the
previous sample:

%Betty's Own Menu
*Word Processing
+CD \WP\BETTY
+WP
+CD \AUTOMENU
+AUTO BETTY.MDF
*Return to Network Main Menu
@AUTOMENU.MDF
#End of Betty's Menu System  





  Automenu 4.7               AUTOMENU AND NETWORKS                Page 65
9-3 Changing Default Temporary Batch Filename

To create uniquely named and located AUTOTEMP.BAT files, run the AUTOCUST
utility and choose option number four. When prompted for a new filename,
input something like this: C:\%USER_NAME%\AUTOTEMP.BAT. This will instruct
Automenu to use a particular user's subdirectory into which to write the
temporary batch file. Note that in this case the file will still be named
AUTOTEMP.BAT, it will just be located in a unique spot. Conversely you could
tell AUTOCUST to write the temporary batch file as: %USER_NAME%.BAT. This
will still write the batch file to the default drive and subdirectory, but
with a unique name. After inputting the new data, press ENTER, then option
six to exit AUTOCUST.

9-4 Changing Default Menu Definition Filename

Similarly, to change the name of the default Menu Definition File, call
AUTOCUST and select option three. Input a new filename (if desired) something
like this: %USER_NAME%.MDF, then press ENTER. This will result in Automenu
using a different default menu file for each user on the network. To exit
AUTOCUST, select option six.

9-5 Network Installation

To install Automenu on a network system, first make certain that you have
access rights to the drive and directory on which you wish to copy the
Automenu program files. Check with the network administrator or other
supervisor to make sure you have this access. You will not be able to install
Automenu properly without write access.

Because of the differing topologies involved with network system
architectures, this procedure may vary, but usually there is a network
(server) drive and subdirectory that users can access even when they are not
logged onto the system. We suggest that Automenu be installed on this drive
and in this subdirectory so that if user logging is to be performed from
Automenu, no errors will occur. If a user logs off the network from a drive
and/or subdirectory that only the network gives them access to, DOS will
report a "Batch File Missing" error upon system logout. By placing Automenu
in an area like this, all users will be able to access the files, whether or
not they are logged onto the network.

After determining that your system will permit you to copy the Automenu files
to the network server, make a subdirectory that all users will be able to
access, and copy all files from the distribution diskette into it. Edit the
AUTO.BAT file to contain an instruction to change drives and directories to
the one where Automenu files are located:

              F:
              CD \LOGIN\AUTOMENU
              AUTOMENU %1
              IF ERRORLEVEL 1 GOTO QUIT
              AUTOTEMP
              :QUIT
              ECHO ERROR DETECTED. . .





  Automenu 4.7               AUTOMENU AND NETWORKS                Page 66
Also change the line that says "AUTOTEMP" to one that uses an environmental
variable established in the user's login procedure. For example, if the
typical user login performs a "SET USER_NAME=" (where USER_NAME is a unique
name assigned to each user), then perhaps you could rename the AUTOTEMP
instruction to %USER_NAME%. This would keep different users from overwriting
each other's temporary batch file every time Automenu is executed.

Then make certain to call the Automenu Customization Utility AUTOCUST and
select option number four, "Change Default Filename for Temporary Batch
File". Enter %USER_NAME%.BAT and press Enter. This will tell Automenu to use
an environmental variable when writing the batch file, and if all users have
a unique value assigned, this will prevent accidental overwrites on the
system as different users perform different tasks.

You may also change the name of the default Menu Definition File in the same
manner by running AUTOCUST, selecting option three, "Change Default Filename
for Menu Definition File", and inputting a path and filename that includes an
environmental variable (i.e., F:\AUTOMENU\%USER_NAME%.MDF or
%USER_NAME%.MDF). In all these cases, Automenu will substitute the values for
the variables before reading the menu, so that Automenu will load
%USER_NAME%.MDF (where Betty is the user) as BETTY.MDF.

We recommend using AUTOMENU.MDF as your "anchor" menu, and calling or
branching out to other menus and then back to AUTOMENU.MDF again.

The use of variables in menu files has been supported in previous versions of
Automenu, however they have not been supported within the AUTOCUST program.
By using this capability sparingly and wisely, a network administrator can
set up a menu system that employs only a single copy of the Automenu program
and a single menu file that all users can access. These environmental
variables are now supported in the following areas:


                   Menu Definition Files (MDFs)
                   Name and location of the temporary batch file
                   Name of the default MDF


By using the example in this section as a guide, you should be able to adapt
Automenu to the requirements of your particular networking system. If you
require additional assistance, make certain to have your serial number handy
and call our Technical Support Group at the telephone number listed in the
very front of this manual.

9-6 Automenu Control Points

There are several user definable features of Automenu that allow for
increased flexibility and control in everyday computer system operations.

The Automenu "system components" are as follows.

AUTOEXEC.BAT - This is one of the files your PC looks for at boot up, and if
it exists, the commands there are carried out. This is usually where
environmental variables are assigned, configurations loaded, time and date
set, terminate and stay resident programs executed and a startup program is
run (like Automenu). A typical AUTOEXEC.BAT file might look like this:


  Automenu 4.7               AUTOMENU AND NETWORKS                Page 67
SET USER_NAME=MARK
SET HOME_SPOT=C:
SET AUTO_DIR=\AUTOMENU
DATE
TIME
CD \AUTOMENU
AUTO

The SET commands are important because they can establish the unique identity
of the user for later processing and control. For instance, if we wish to
move to a drive and subdirectory that is unique to all users, we can specify
commands like

              %HOME_SPOT%
              CD \%USER_NAME%

This would execute as C: and CD \BETTY if those values were SET earlier in
the AUTOEXEC.BAT file. This would allow a single set of commands to perform a
wider variety of functionality based on values set into the environment. The
AUTOEXEC.BAT file is just one of the places that will recognize and utilize
these variables.

LOGIN SCRIPT (Optional, for Network Users) - Similar to the AUTOEXEC file,
the network login script is executed whenever the user logs onto a network
operating system. This is another place where environmental variables can
(and should) be set for later processing and control.

AUTO.BAT - This is the "root" program of Automenu; that is, for Automenu to
function properly, the user must issue an AUTO command from DOS. Typically
what happens in AUTO.BAT is as follows:

Log to a disk drive (C:)
Change to the Automenu directory (CD \AUTOMENU)
Run Automenu with a parameter (AUTOMENU %1)
Check for the successful execution of Automenu (IF ERRORLEVEL 1...)
Run the temporary batch file (AUTOTEMP)

The first two commands can be substituted with variables as in the
AUTOEXEC.BAT example, above. Instead of using an explicit drive designation
(C:), we could specify a variable (%HOME_SPOT%) to perform the same function.
This would allow different users to log to different drives as they required.
Similarly, instead of specifically calling a particular subdirectory by name
(\AUTOMENU), we could reference a variable (%AUTO_DIR%). You can see how this
provides much more flexibility for systems that need it, and keeps users from
trying to run each other's programs or using each other's data files.

While the name of the Automenu program should not be changed, under DOS 3.0
or above you could specify a particular drive or directory to run it from, as
in C:AUTOMENU %1, F:\AUTO\AUTOMENU %1, or even %HOME_SPOT%\AUTOMENU %1. In
this way you do not need to place the Automenu programs on the DOS PATH,
because you are specifying where to find the program on the command line,
either explicitly or through another environmental variable. Note that this
is only supported by DOS 3.X and above.





  Automenu 4.7               AUTOMENU AND NETWORKS                Page 68
As far as the temporary batch filename goes, again a variable can be
specified to designate which batch file to run based on a unique user
identifier as set within the environment. For example, instead of calling the
batch file AUTOTEMP, we might specify the same filename but in a unique
location (%USER_NAME%\AUTOTEMP), or a different filename in the same location
(%USER_NAME%). Calling a name other than the default of AUTOTEMP requires
that Automenu be told that new name and/or location through the use of the
AUTOCUST utility.

By running AUTOCUST.COM and selecting option four (Change Default Filename
for Temporary Batch File), we can tell Automenu not only where to write the 
temporary batch file (user's directory, root directory, local disk drive, RAM
disk, or as specified by a variable), but what to call it
(%USER_NAME%.BAT, TEMP.BAT, UNO.BAT, or WHATEVER.BAT). This powerful feature
means that there is virtually no network system or other user configuration
that cannot run Automenu properly and efficiently, and that it can be done
without overwriting each other's files or causing other hardware or software
related conflicts.

AUTOCUST.COM can also specify the name and location of the default menu file
to be used by Automenu when it runs. By calling AUTOCUST and selecting option
three (Change Default Filename for Menu Definition File), you can tell
Automenu where to read the menu file from (C:AUTOMENU.MDF,
%HOME_SPOT%AUTOMENU.MDF, or even %HOME_SPOT%%AUTO_DIR%\AUTOMENU.MDF), as well
as which file to read (C:MAINMENU.MDF, A:%USER_NAME%.MDF, or
%HOME_SPOT%%AUTO_DIR%\WHATEVER.MDF).

By using environmental variables, we can achieve a higher level of
functionality along with a lower requirement for maintenance. It is far
easier to change one menu file than dozens, and it is far more efficient to
store a single copy of a program and data files on a network server than
copies in different user subdirectories. By thinking through the requirements
of the network, you can configure Automenu in the best possible fashion, to
do the most work with the least effort.

Remember that Automenu can be told where to read and write files, and what to
call them through the use of DOS environmental variables. If you need further
discussion on the subject of the DOS environment, please check the listings
of recommended reading in Appendix B or your DOS technical reference manual.



















  Automenu 4.7               AUTOMENU AND NETWORKS                Page 69
APPENDIX A 

ERROR MESSAGES

Message: ERROR READING MENU DEFINITION FILE

Reason: AUTOMENU cannot find or read the menu definition file, or the file is
in an improper format.

Action: Ensure that the file is in the proper format and properly named. Be
certain that your text editor saves pure ASCII files, without imbedded
control characters. Also, check for any possible disk-related hardware
problems. Make sure you are logged to the drive and subdirectory where your
Menu Definition Files are stored before calling AUTOMENU.

Remember that ALL MDFs SHOULD BE NAMED WITH AN EXTENSION OF ".MDF" (i.e.,
MYMENU.MDF).

Message: INVALID FILENAME

Reason: The filename given contains too many characters or is not a valid DOS
filename. You may not include spaces in any Filename.

Action: Rename your MDF filename. It can have up to eight characters,
followed by the extension ".MDF".

Message: NOT ENOUGH MEMORY AVAILABLE TO LOAD MDF

Possible Reason: Your MDF is too large for your computer's memory.

Action: Use {@} to place a portion of your menu into an alternate MDF. Call
the alternate MDF from the original menu. 

Possible Reason: You have attempted to run a TSR program such as Sidekick or
Turbo Lightning, or DOS commands like MODE, PRINT and GRAPHICS, using the
{!}, {-}, or {=} resident symbols. The system cannot get to the open portion
of memory.

Action: Rewrite the menu selection with the TSR program using {+}
non-resident symbols.

Message: AUTOMENU REQUIRES DOS 2.0 OR HIGHER

Reason: This software will not operate under any version of DOS 1.X.

Action: You must update your version of DOS to version 2.X, 3.X or 4.X.

Message: ERROR ON OR AFTER LINE nnn IN MDF

You have written an instruction within the Menu Definition File that is
incorrect, in an improper format, or have left a blank line within the MDF.
Look at the file again with AUTOMAKE or your own text editor, paying
particular attention to line number "nnn" or somewhere thereafter. For
example, a line with a "?" (or any AUTOMENU command) in position 1 followed
by blank spaces will give this error message.



  Automenu 4.7                    APPENDIX A                      Page 70
Message: NOT ENOUGH MEMORY TO LOAD COMMAND.COM

Reason: To execute any direct DOS commands, at least 17KB of memory is
required so COMMAND.COM can be loaded. Different versions of DOS will require
somewhat more memory.

Action: You can utilize only the non-resident features of AUTOMENU - use the
{+} command instead of {!}, {-}, or {=}.

Message: COMSPEC= NOT FOUND IN ENVIRONMENT

Reason: This information must be in the environment space for AUTOMENU to be
able to locate COMMAND.COM.

Action: Use the "SET" command in AUTOEXEC.BAT to place COMSPEC= in the system
environment space.

Example: SET COMSPEC=C:\COMMAND.COM.

This example would help AUTOMENU find COMMAND.COM on DRIVE C:. You should set
COMSPEC equal to the root directory of the boot drive, either A: or C:.

Message: CAN'T WRITE TEMPORARY BATCH FILE

Reason:  You do not have sufficient space left on your disk, or the disk is
write-protected.

Action: Delete unnecessary files on disk. Remove any write-protect tabs.
Replace disk with non-write-protected disk. Check for disk related hardware
problems. On NETWORK SYSTEMS, make sure you have read/write access privileges
set up by the System Administrator.

Message: CANNOT OPEN MDF

Reason:  Automenu cannot find the Menu Definition File, or an incorrect menu
name was specified.

Possible Cause: The user has failed to return to the subdirectory where MDFs
are stored after execution of a DOS command. 

Action:  Rewrite the menu selection to include a "+CD \AUTOMENU" command (NO
QUOTES). Check the spelling of the menu file you have specified.

%Example Menu
*Wordstar
+CD \WS            <<<--- Execute while AUTOMENU remains in
+WS                       memory.
+CD \AUTOMENU
+AUTO              <<<--- Automenu will regain control after completion.
#End of Example

Possible Cause: MDF does not contain a "#" (End-of-File mark) in column 2, or
the left-most position when using an editor other than AUTOMAKE, of the last
line of the file.

Action: Verify that MDF has a "#" symbol at the beginning of its last line.


  Automenu 4.7                    APPENDIX A                      Page 71
Error - AUTOMENU starts Okay, but when a menu selection is made, user is
"dumped" to the DOS prompt.

Solution: You did not start by typing "AUTO". AUTOMENU will create a
temporary batch file from your DOS commands, but it requires AUTO.BAT to
execute that file. Start again by typing "AUTO", optionally followed by the
name of a menu file: "AUTO MAIN.MDF".


Error: Cannot Install AUTOMENU - "Error in executing command"

Solution 1: Make sure you are logged to the drive you wish to install
AUTOMENU on, and type "A:INSTALL". To install on fixed disk drive C, log to
the "C:" drive and place the AUTOMENU distribution disk in the "A:" drive and
type "A:INSTALL".

Solution 2: Sometimes AUTOMENU needs access to COMMAND.COM, and if it is not
in the current subdirectory it will be looked for in the "COMSPEC=" string
within the DOS environment. If this error persists, try placing a copy of
your version of COMMAND.COM within the same subdirectory that your AUTOMENU
programs are located. Also make sure that you do not have different versions
of COMMAND.COM on your fixed disk.


Error: Unexpected SW Interrupt nn at XXXX:YYYY

Sometimes, your system may return an error similar to the one above. While
the "nn", "XXXX" and "YYYY" are numbers whose values may differ, they
basically indicate a condition that is related to AUTOMENU looking for a
system resource (such as a mouse device driver) that it cannot find. If you
are NOT using a mouse, make sure to configure AUTOMENU to disable mouse
support by calling the Customization Utility AUTOCUST. Selecting Option 2
(Custom Switches) will present a list of items that can be modified, the last
two of which deal with the mouse feature.


Some errors are noticed by AUTOMAKE, the Menu Building Facility:

Error: Error In Reading This File

You may have attempted to use a text editor that places characters other than
"straight ASCII" codes in your MDF, or the End Of File (^Z) marker is not
present within the file. AUTOMAKE requires a text file where each line begins
with a valid AUTOMENU command character and with an EOF mark placed after the
last line. Re-edit your file with DOS' Edlin program, or use a text editor
that you are sure places the file in the proper format. Also be sure NOT to
have any blank lines in the file.











  Automenu 4.7                    APPENDIX A                      Page 72
APPENDIX B 

RECOMMENDED  READING  FOR  DOS  USERS

There are many good books on using the hidden powers of the Disk Operating
System, and if you want additional background on using and learning DOS, try
one or more of these fine volumes:

RUNNING MS-DOS (3rd Ed.), Van Wolverton, Microsoft Press

This is probably the very best of the "aftermarket" DOS books, not just
because it's published by Microsoft, but because Van has taken an easy going,
almost casual approach to teaching the fundamentals of DOS. He begins by
explaining what DOS is, how it gets the computer started, and how it
organizes files and disks (hence it's name: Disk Operating System). He then
goes into a very understandable explanation of managing files and devices,
hard disk organization, system controls and tailoring, local area networks
and more. Several appendices are included, one that tells how to prepare a
hard disk and another that details the syntax of every DOS command. This is
the best book for the first time DOS user. Highly Recommended!

SUPERCHARGING MS-DOS, Van Wolverton, Microsoft Press

As a follow-up to the title above, Van takes the DOS user deeper into the
system functionality with chapters on things like printer "languages", using
the DOS DEBUG utility, controlling the environment with CONFIG.SYS, system
customizations, care and feeding of the computer, and much more. A Quick
Reference section is set up to answer questions about ANSI.SYS drivers and
hexadecimal codes. Definitely NOT for the beginner, SUPERCHARGING is still
one of the "must-have" books in any DOS user's library. Also Highly
Recommended!

MS-DOS BIBLE, Steven Simrin, The Waite Group

Also geared for the beginners, this volume stretches the technical side a bit
more than RUNNING MS-DOS, and even includes a tutorial on booting DOS,
formatting diskettes, installing and changing drives, filenames and
extensions, copying files, batch files, redirection and piping, EDLIN (the
DOS line or text editor), and much, much more! This one is definitely for
those who have a foundation of knowledge in DOS, and will take you even
further than the SUPERCHARGING MS-DOS mentioned above. A fine reference work
for daily use, this book will provide many hours of ready information on all
aspects of DOS. Recommended.

TRICKS OF THE MS-DOS MASTERS, The Waite Group

For users with a previous knowledge of DOS, TRICKS will show you insight and
techniques not published anywhere else. According to the authors (four of
them!), this volume is for serious business and personal users, software
developers and consultants, and "power users". If this means you, then this
book will open your eyes to some of the more arcane tips and practices for
stretching DOS to the max. Check this one out!






  Automenu 4.7                    APPENDIX B                      Page 73
MS-DOS BATCH FILE PROGRAMMING, Ronny Richardson, Tab Books

This is a definitive reference to those who wish additional insight into the
mysteries of programming directly within the operating system (DOS).
Everything from simple batch files to replaceable parameters, looping and
control flow, and the AUTOEXEC.BAT and CONFIG.SYS files are covered. A
reference to DOS commands is included, and many examples are used 

throughout. If you are DOS-literate, this volume will certainly assist in
creating more imaginative and powerful batch procedures that will be easily
controlled from within AUTOMENU. Recommended.




This is definitely NOT intended as any kind of complete resource listing of
available DOS publications. You should refer to a local PC Users Group for
the best advice. And keep checking the Magee Enterprises BBS for updated
information and tips and tricks on using DOS and AUTOMENU.

MS-DOS is a registered trademark of Microsoft Corporation.

The above listing is only provided as a public service, and Magee Enterprises
Inc. is in no way connected or involved with any of the above companies,
authors or publications. We do, however, feel that in the interests of
furthering knowledge about computers and DOS in general, it is necessary to
provide some kind of reference listing for our user's further investigation
and comprehension.






























  Automenu 4.7                    APPENDIX B                      Page 74
APPENDIX C

AUTOMENU  COMMAND  REFERENCE
Menu Definition File (MDF) Functions

%  - Menu Title 

A title must be defined for each individual menu page. This title will be
displayed as the first line of text on the menu. The Title will be also be
centered automatically. In each MDF the user can define up to eight
individual menus.

*  - Menu Selection 

This is the actual menu item displayed for the user to choose from. There is
a limit of eight different options to each of the eight individual menu
screens in any single file.

?  - Selection Description (Menu Prompt)

Will cause the text that follows to be displayed as a description for the
selection that the arrow is pointing to, or is highlighted. The text is
centered automatically and printed on a line above the status block at the
bottom of the menu.

EXAMPLE:       *AUTOMENU Documentation
               ?This option prints document to printer   <<<-Selection
                                                             Description

^  - Selection Password 

The text that follows this function will be used as the password required by
the user to gain access to that option selected. A maximum of 30 characters
is allowed for each password. The example below would require the user to
enter the password "DOS". The password checking routine does not try to
determine any difference between UPPER and lower case letters. (If you use
this feature, consider ENCRYPTING the MDF from within the AUTOMAKE menu
editing utility. See Section 4 on AUTOMAKE for more details.)
EXAMPLE:     *Return to Disk Operating System
             ^DOS                            <<<- Password = "DOS"

@  - Load an Alternate MDF 

This specific option will cause the text that follows to be treated as the
name of another Menu Definition File (MDF). When the user selects an
selection with this listed under it, Automenu will read the new MDF and
change the menu display accordingly to show the options in the new MDF. The
MDF filename can be any valid DOS filename and can include drive name and
path. If for example, the MDF called "DOS.MDF" was on drive D: in
subdirectory \PUBLIC, the following example shows an example on how to get
Automenu to read that file as a MDF.

EXAMPLE:       *Load DOS Command Sub Menu
               @D:\PUBLIC\DOS.MDF         <<<- Load MDF from Drive D:
or
               *Load DOS Command Sub Menu
               @DOS.MDF                   <<<- Load from current drive
                                               and subdirectory
  Automenu 4.7                    APPENDIX C                      Page 75
-  - Direct DOS Command (No Pause)

This specific option will cause the text that follows to be interpreted as a
valid DOS command. A limit of one Direct DOS command per menu selection. When
the user selects the menu option, Automenu loads a second COMMAND.COM and
requests this Direct DOS Command to be executed while Automenu remains
resident in memory in a dormant state. But as a result, the memory available
is reduced by minimum of 17K (version dependent), memory which was allocated
to Automenu and the second COMMAND.COM. When the DOS command is finished,
Automenu will regain control and will display the menu without re-reading the
MDF. This function acts as if the command were entered at the DOS level. As
DOS normally does, it will search both the present directory and any other
directories specified by the DOS PATH command. And with this function,
Automenu does not pause before displaying the menu when it regains control.

EXAMPLE:     *Format diskette in drive B:
             -FORMAT B:/S/V               <<<- No pause after formatting
                                               B:

=  - Direct DOS Command (Pause)

This function works the same as the function above, but when Automenu regains
control the user is required to press the space bar or any button on the
mouse to return to the menu.

!  - Batch DOS Commands (Resident)

This function defines a DOS command to be executed in a DOS batch file. There
is no limit to the number of commands that can be defined under each menu
selection. Automenu will create a batch file containing the lines marked with
this function. After the batch file is written, Automenu will execute this
batch file in the same manner as the function Direct DOS command ( - ) above.
In other words, Automenu remains resident during the execution of this batch
file, and will regain control upon completion. In any event, we NEVER want to
use a "!AUTO" command, because that would load a second copy of AUTOMENU.COM
on top of the one already resident in memory!

EXAMPLE:       *Execute 123 in its Subdirectory
               !CD \LOTUS
               !123
               !CD \

+  - Batch DOS Commands (Non-Resident)

This function defines a DOS command to be executed in a DOS batch file. There
is no limit to the number of commands that can defined under each menu 
selection. Automenu will create a batch file containing the lines marked with
this function. PLEASE NOTE: If the DOS Command that is executed from a {+}
command is itself a BATCH file, the result will usually be an abrupt dump to
DOS after termination of that command. This is because DOS does not support
calling one batch file from another and then returning to the calling batch
file.

Under DOS 3.3 and later, you can use the CALL command to call one batch file
from another and then return to complete the rest of the MDF. Under versions
prior to 3.3, use the following syntax: COMMAND /C batchfilename. Automenu
will execute batchfilename, and then continue with any other commands you
have entered within the MDF.
  Automenu 4.7                    APPENDIX C                      Page 76
To make use of this function REQUIRES the use of the batch file called
AUTO.BAT to start Automenu.

AUTO.BAT contains two commands: the first is AUTOMENU %1, which executes the
menu program and your choice of menu files, and the second is
AUTOTEMP, which is the name of the batch file containing commands written to
it by Automenu. After selection of the desired option from the menu, Automenu
creates AUTOTEMP.BAT which in turn is executed under control of AUTO.BAT. The
AUTOTEMP.BAT batch file will contain the DOS commands required to execute the
menu option selected. In any event, it is important that the last command be
"AUTO", so that Automenu regains control. If this is not done, the user will
be returned to DOS.

EXAMPLE:      *Directory of Diskette in Drive A:
              +DIR/P
              +PAUSE
              +AUTO Filename.MDF          <<<- Return and use this MDF

This method has an advantage and a disadvantage - the advantage is that
Automenu does not remain resident in memory, reducing the memory requirements
of the user. The disadvantage is that batch files execute (relatively)
slowly, and in addition, require the reloading of the Automenu program when
the batch file is finished.

[  - Timed Execution

Use of this command makes it easy to invoke any menu option (that does not
require interaction by the user) you have set up with Automenu. After
defining the menu option and prompt ({*} and {?} commands), you use the {[}
command followed by a time in military (24 hour) format. This item will be
displayed on the menu, and as long as Automenu is running and the particular
Menu Definition File is loaded into memory.

>  - Output Message

This command will display a message to the user on the monitor screen using
the colors as set up by the AUTOCUST customization utility. This feature is
typically used to prompt for additional parameters, or to tell the user what
is to happen next. Use as many of these commands as you need, followed by the
input {<} symbol to accept a response.

Be sure to specify ALL the {<} and {>} symbols before any other commands!

<  - Input Message

This is the complement of the Output Message, and permits the input of
user-supplied data to be passed to a program or batch file. Any input
accepted is assigned to a DOS replaceable parameter (%1 - %9) and can be
processed as such. The first {<} symbol that appears in an MDF will be the
value assigned to %1, the second symbol will be assigned to %2, and so on. No
other Automenu commands may be prior to, or intermixed with, the {<} or {>}
commands. See examples throughout this manual.






  Automenu 4.7                    APPENDIX C                      Page 77
.  - Comment 

This function is used to place a comment inside the MDF. Automenu simply
ignores this line all together. Anything can be placed on this line, and is
usually used to document the actions taken within the MDF, or credits for
those who wrote it.

#   - End  of MDF 

This function is used to inform Automenu that it has reached the end of the
MDF. Automenu will stop reading there, and information that follows will be
ignored. This symbol MUST be the first character on the very LAST LINE of the
Menu Definition File or an error message may result.













































  Automenu 4.7                    APPENDIX C                      Page 78
APPENDIX D

AUTOMENU - A THUMBNAIL SKETCH

Here is a summary of the structure of a typical MDF (Menu Definition File).
You will see that usually we will create a line for a title of the working
menu, one or more menu options on that screen, and a series of DOS commands
to be carried out whenever one of those menu selections is pressed.

Each menu option is usually constructed as in the following example. Since
Automenu will most often be used to run a variety of application programs
from a single screen, this will give you a "thumbnail sketch" of how to
quickly set up your first Menu Definition File. Please be sure to read the
earlier chapters if you are unsure about how to work with Automenu. To build
an application menu and run your programs from it, you will need to ask
yourself the following questions:

A. What is the NAME of the program you want to run?
B. What SUBDIRECTORY does the application program reside in?
C. What is the COMMAND you type at the DOS prompt to start the program?
D. Is that command a BATCH FILE?

When building your Menu Definition File, do it in this fashion:

%Title Line        (name you want to appear on top line of menu screen)
*Menu Option       (from A, above)
+CD\subdirectory   (from B, above)
+DOScommand        (from C, above)        <<<- If a BATCH FILE, see below
+CD\AUTOMENU       (change back to Automenu subdirectory)
+AUTO              (to re-run Automenu)
*Next Menu Option  (A)                    <<<- Second Menu Selection
+CD\subdirectory   (B)
+DOScommand        (C)                    <<<- If a BATCH FILE, see below
+CD\AUTOMENU
+AUTO                                     <<<- Used to Restart Automenu 
.                                              after Program Terminates
.(Other Menu Selections Here....)

Due to a limitation within DOS prior to version 3.3, one BATCH FILE may call
another, but the called file never returns to the calling file to continue.
The preferred method of dealing with BATCH FILES within Automenu is to
actually list out the contents of the BATCH FILE and place them line-for-line
into your Menu Definition File, preceded by the {+} symbol. These
instructions will then be built into a BATCH FILE by Automenu, and executed
normally.

There is a quick way to perform a similar function, however we do not
recommend it because of the possibility of the BATCH FILE containing some
kind of TSR (Terminate and Stay Resident) command, like the DOS commands
PRINT, MODE or GRAPHICS. If you are certain that your BATCH FILE contains NO
TSR COMMANDS, you can substitute one of the following lines:

+COMMAND /C BatchFileName             (DOS versions 2.0 thru 3.2)
+CALL BatchFileName                   (DOS versions 3.3 and higher)

for the "+DOScommand" instruction in the above example. You can find out more
about this feature of DOS by checking your DOS manual on COMMAND.

  Automenu 4.7                    APPENDIX D                      Page 79
APPENDIX E

ABOUT THE AUTHOR

Marshall W. Magee has spent more than fourteen years in the computer industry,
as both a software designer and systems consultant. His extensive background
in PCs has enabled him to produce this version of Automenu.

Originally introduced in 1983, Automenu is distributed through computer user
groups, electronic bulletin board systems and retail computer stores
worldwide. It has been so successful that Magee Enterprises, Inc. is now
actively developing additional products to be distributed in the same
fashion. Automenu alone has in excess of two hundred fifty thousand registered
users, with more names being added every day.

Mr. Magee is a native of Atlanta, Georgia, and is President of Magee
Enterprises, Inc. He is the past President and current Vice President of the 
Association of Shareware Professionals, a group dedicated to improving the 
awareness and standards of quality among Shareware authors and distributors. 
He sits on the Southeastern Software Association Group and is the former Vice
President of the Atlanta PC Users Group. He has contributed his expertise by 
providing instruction to members and helping to organize and direct group 
activities.  He is active with many professional PC Associations worldwide.

Mr. Magee is leading a large development effort to bring new and exciting
products to the marketplace.

Magee Enterprises, Inc., is located in Norcross, Georgia, a suburb of
Atlanta.


























  Automenu 4.7                                                    Page 80
                        ------------------------------------
                         Automenu Registration Payment Form
                        ------------------------------------

        To order Automenu, please fill out the form below. Use your street
        address only, please.  WE CANNOT SHIP TO A POST OFFICE BOX.
        Or call 1-800-662-4330 USA or 404-446-6611.
                                   
                                                      Date: _____________

        Name: _____________________________  Title:  ____________________
                                                      
        Company: ________________________________________________________

        Address: ________________________________________________________

        _________________________________________________________________

        City: ___________________________________________________________

        State/Country: ________________________ Zip: ____________________

        Phone  Work: (_____) _____ - ______  Home: (_____) _____ - ______

        Method of payment: Please complete the worksheet below and choose
        one of the payment options indicated. Georgia State residents
        must add sales tax. ALL CHECKS AND MONEY ORDERS MUST BE U.S. FUNDS
        DRAWN ON U.S. ACCOUNTS ONLY.  Call 1-800-662-4330 for domestic and 
        international shipping charges for quantities greater than one.

        +----------+------------------------------+----------+----------+
        | Quantity |          Description         |   Cost   |   Total  |
        |          |                              | per unit |   Cost   |
        +==========+==============================+==========+==========+
        |          |Automenu 4.7 Software Package |  $69.95  |          |
        +==========+==============================+==========+==========+
                   |Georgia residents must add sales tax     |          |
                   +-----------------------------------------+==========+
                   |Shipping & Handling:  $5.00 inside USA;  |          |
                   |  $10.00 for CANADA by Mail; $20.00 for  |          |
                   |  OVERSEAS.                              |          |
                   +-----------------------------------------+==========+
                                                       TOTAL |          |
                                                             +==========+
                                          
        [ ] Check/Money Order  [ ] MasterCard  [ ] VISA  [ ] American Express
         

        Credit card #:______________________________ Exp. Date: ____/____

        Signature: ______________________________________________________

        Cardholder's name: ______________________________________________

        Cardholder's address: ___________________________________________
        (If different from above)
        *****************************************************************
        Send all items to:     Magee Enterprises, Inc.
                               Order Processing Department
                               Post Office Box 1587
                               Norcross, Georgia 30091 USA
                             ---------------------
                             AUTOMENU COMMENT FORM
                             ---------------------

        Your comments about this software and documentation are welcome.
        Please take the time to fill out this form or write or call us
        with your comments.

        Name: _____________________________  Title:   __________________

        Company: _______________________________________________________

        Address: _______________________________________________________

        ________________________________________________________________

        City: __________________________________________________________

        State/Country: ________________________ Zip: ___________________

        Phone Work: (_____) _____ - ______  Home: (_____) _____ - ______

        Automenu Version Number: __4.7_______  Date: ___________________


        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________
                                                              71447.8811

        *****************************************************************
        Send this form to:     Magee Enterprises, Inc.
                               Automenu Comments
                               Post Office Box 1587
                               Norcross, Georgia 30091  USA
        *****************************************************************
```
{% endraw %}

## CIS_HELP.DOC

{% raw %}
```
COMPUSERVE INFORMATION SERVICE

Users of the Compuserve Information Service (CIS) can obtain support and
provide direct feedback on all products from Magee Enterprises, Inc.  From the
CIS Top Menu type GO PCVENA, then select Message Section 6.  Our Technical
Support Group retrieves and posts messages in this area every day.  Additional
product information can be found in Library 6.	The Technical Support Group
user ID's on CompuServe are 76004,1541 or 70167,2200.

In most cities you can make a local telephone call to access CompuServe.  For
more information on joining CompuServe, call them directly at 800-848-8199.
From Ohio or Canada call 614-457-0802.	
```
{% endraw %}

## FILE608.TXT

{% raw %}
```
Disk No:  608                                                           
Disk Title: AutoMenu                                                    
PC-SIG Version: S4.7                                                    
                                                                        
Program Title: Automenu                                                 
Author Version: 4.7                                                     
Author Registration: $69.95                                             
Special Requirements: Hard drive recommended.                           
                                                                        
AUTOMENU helps you control your computer in ways you only dreamed of    
before. Use the Menu Definition Language to create menus for accessing  
frequently-used programs.  Forget obscure parameters while you perform  
DOS commands -- execute application programs, batch files, and DOS      
commands with single keystrokes.  Personalize your own menus.           
                                                                        
AUTOMENU can prompt you for needed input for application programs.      
Chain from menu to menu with no limits on the number of menus.          
Demand different and unique passwords for different menu                
selections and use optional encryption of menu files.  Take a nap while 
your computer executes menu selections according to the time of day.    
Short of memory?  You can remove AUTOMENU from memory prior to starting 
an application program.  Confused?  Press``H'' anywhere in the program  
for on-line help.                                                       
                                                                        
CGA, MDA, EGA, VGA, Hercules graphics displays and their compatibles are
all supported.  Try real-time switching between color and monochrome    
monitors.  Use your mouse's sensitivity to navigate among menus.        
Prevent image-burning of your screen with automatic screen blanking and 
a periodically-displayed user message.                                  
                                                                        
Highlight and select menu options: function keys, number and arrow keys,
numeric keypad, spacebar, mouse or voice controller, date and time      
display.  AUTOMENU features redirection capability and support for the  
ANSI.SYS driver.  Five sections of the 114-page user guide are          
tutorials                                                               
for inexperienced computer users.  The option to network is available to
advanced users.                                                         
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MOREHELP.DOC

{% raw %}
```


     Magee Enterprises, Inc.
     Post Office Box 1587
     Norcross, Georgia  30091
     USA


                           
                                                              
                              MOREHELP -- AUTOMENU Q & A   
                                                              
                           

          The following is a list of our Technical Support Group's most asked
          questions and the appropriate answers.  We hope this will help you
          answer any questions you may have concerning the use of our 
          AUTOMENU(R) product, our Software Management System.


     Q1:  How do I edit a Menu Definition File(tm) (MDF)?

     A1:  By using AUTOMAKE, the Menu Building Facility, (or any other       
          ASCII editor) you can edit and create MDFs.  To run the program      
          select the menu option that reads "Menu Building Facility".  If 
          this option is not available, then type AUTOMAKE from the DOS 
          prompt in the Automenu directory.  This will bring you into the 
          menu editor.  Select option #1 to Edit a Menu Definition File.  
          Then either type in the name of the MDF you wish to edit or press
          ENTER and a list box containing your MDF filenames will be 
          displayed.  Select the MDF to edit by pressing ENTER on the 
          appropriate filename.

          If the user level has been configured to the Novice or Intermediate     
          modes of editing, a window containing the titles of all defined 
          menu pages will appear.  Select the menu page to edit by pressing 
          Enter on a menu page title.  You will then get a display similar 
          to AUTOMENU.

          If the user level has been configured to the Advanced mode of 
          editing, you will get a full screen display of your Menu Definition 
          File.









     Q2:  How do I add a menu option?

     A2:  Using AUTOMAKE, bring up the MDF that you wish to modify.  If 
          you are in the Novice mode of editing press the Ins (Insert) 
          key on in the area of the menu where you want to add a new menu 
          option.  You will be given a choice of adding a menu option either 
          before or after the current menu choice.  You will then be prompted
          to enter the selection name, description, start-up command, and 
          path or location of your application program.  A password for this 
          menu option is optional.

          If you are in the Intermediate mode of editing press the Ins 
          (Insert) key on the menu display in the area you wish to add a new
          menu option.  You will then be prompted to enter the selection name
          and the description.  After you have done this, press the F10 
          function key.  Then this point enter in your commands to execute 
          your application.   For example:

            +CD\WP51
            +WP
            +CD\AUTOMENU
            +AUTO

          If you are in the Advanced mode of editing you can add menu        
          options by locating the area of the MDF you wish to insert a new     
          menu option and pressing the F3 function key or the Alt-I keys to      
          insert empty lines.  Use the AUTOMENU commands to build your    
          menu option.  A list of the commands can be shown by pressing the  
          space bar.  Setup your menu option as follows:

           *Menu Option                          *WordPerfect
           ?Description for menu option          ?Word Processor
           +Change to program's directory        +CD\WP51
           +Start-up command                     +WP
           +Change to AUTOMENU's directory       +CD\AUTOMENU
           +Restart AUTOMENU                     +AUTO
          

          If you need further explanation of the AUTOMENU commands, type   
          the symbol in question and press the F1 key to get online help on     
          that command.  Also, refer to the guide on AUTOMENU's commands  
          in the users manual for more help concerning adding a menu option.







     Q3:  How do I load a different MDF?

     A3:  If you have created a new MDF and want to be able to access this
          menu from another menu, then we can use the "@" command to load
          another Menu Definition File.  Get into the menu building
          facility, AUTOMAKE, and bring up the menu you wish to edit
          (Refer to Q1).  You must be in the Intermediate or Advanced mode 
          of editing to do load a different MDF.  Using the "@" command allows    
          Automenu to load any MDF, for example:

          *Bring Up Games Menu    <<--Define a menu option
          @GAMES.MDF              <<--Specify MDF to load


     Q4:  Why does AUTOMENU come up in black and white after I run my
          program?

     A4:  Some programs reset the video mode and do not restore it properly
          when they terminate.  So, Automenu reads the mode and attempts to   
          adjust to it.  If you notice the screen return back in black and 
          white after executing a particular program, then we can modify 
          the MDF to include a MODE CO80 command.  This will reset the video 
          mode to color.  The MODE command should be placed just before we 
          return to the menu.  Please note that you should be using the "+" 
          commands in this menu option.  For example:

          *MultiMate
          +CD\MM
          +MM
          +CD\AUTOMENU
          +MODE CO80            <<--Place MODE command here
          +AUTO


          If you find that the menu screen returns in black and white after
          running one or more programs then you should use a global
          solution.  We can do this by editing the AUTO.BAT file and
          inserting a MODE CO80 command just before the line that reads
          AUTOMENU %1. Also, make sure that you are using the "+"            
          commands in your MDF to execute these particular programs as in the 
          example above.





     Q5:  How do I create another menu page?

     A5:  Using AUTOMAKE (or some other ASCII editor) bring up the MDF    
          you wish to edit.  If you are in the Novice or Intermediate modes 
          of editing simply press the Ins (Insert) key on the menu page 
          in the list box that contains the titles for menu pages.  If you 
          are in the Advanced mode of editing locate the position in the MDF 
          where you wish to insert the new page and insert an empty line by 
          using the F3 function key or the ALt-I keys.  Type a "%"  and the 
          title of the new page on this empty line.  You can have up to 8 
          menu options per menu page and a total of 8 menu pages in one MDF.


     Q6:  Once I've created my menu how do I get my menu to come up when
          I boot the machine?

     A6:  Using AUTOCUST, the customization utility, select option #3 "Change
          Default for Menu Definition File".  You will be asked to "Enter 
          filename or default Menu Definition File".  Enter in the name of 
          your MDF, make sure to include the MDF extension.  (For example: 
          MYMENU.MDF).  Or you can edit the AUTOEXEC.BAT file to include the 
          name of the MDF file which you wish to have as a default.  Also, the
          AUTOEXEC.BAT should contain the commands similar to the following:
 
          CD\AUTOMENU
          AUTO FILENAME.MDF    <<<--Substitute MDF filename for
                                        FILENAME.MDF


     Q7:  I get the menu on the screen but when I make a selection I get 
          dumped to the DOS prompt. Why?

     A7:  Make sure that you are invoking AUTOMENU with the AUTO.BAT file.  
          This is the file that executes AUTOMENU and runs the AUTOTEMP.BAT 
          file.  Make sure that you are typing "AUTO FILENAME.MDF" to bring 
          up the menu.  For example, if you had a file called GAMES.MDF you 
          would type AUTO GAMES.MDF.












     Q8:  How do I upgrade from an older version of AUTOMENU?

     A8:  Depending on which version of AUTOMENU you have and which version 
          you are replacing it with, the files to replace will vary.  Check 
          the documentation for a detailed explanation.  For instance, if 
          you are upgrading from version 4.5 to version 4.7 then you should 
          replace the following files:

          AUTOMENU.COM   AUTOMAKE.EXE   AUTOCUST.COM   AUTOMENU.DOC
 
          And add the AUTOMAKE.CSH file to your AUTOMENU directory as well.


     Q9:  I forgot to put an exit to DOS option on my menu.  How can I get to
          DOS?

     A9:  You will need to get a diskette with DOS on it and put it in your 
          floppy disk drive and reboot the machine.  This should get you a
          DOS prompt.  Now you can locate the MDF that we need to alter on 
          your hard drive and add an exit to DOS menu option by using 
          AUTOMAKE, the Menu Building Facility.


     Q10: How can I display messages to the user or get some input from the
          user?

     A10: By using the "<" and ">" symbols within AUTOMENU you can display 
          messages to the user and get responses to your messages. You must 
          be in the Advanced or Intermediate modes to use these prompt 
          commands.  The ">" command is an output message symbol and the "<"
          command is an input symbol.  They can be used as follows:

          *Copy files
          >Enter filename to copy 
          >(Include path if necessary)
          >
          <                        <<<--get input from user
          >Select destination drive
          <A:,B:,C:                <<<--allow user to select answer
          +COPY %1 %2
          +AUTO




          This example prompts the user to input the name of a file to copy 
          and using your response it executes the copy command.  This answer 
          will be assigned to the DOS parameter %1.  Then the user will be 
          asked to select the destination drive.  This is done by highlighting
          the appropriate answer using the cursor keys and hitting Enter.  
          This answer will be assigned to the parameter %2.  You may use up 
          to 9 of these parameters in a menu selection, i.e., from %1 up to 
          %9 may be used in one menu selection.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0608

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT      2836  10-23-90   4:47p
    INSTALL  DAT       205  10-23-90   4:47p
    INSTALL  MDF     15235  10-23-90   4:47p
    AUTO     BAT       202  10-23-90   4:47p
    AUTOMENU COM     21598  10-23-90   4:47p
    AUTOMENU DOC    202888  10-23-90   4:47p
    AUTOMENU MDF      2852  10-23-90   4:47p
    AUTOCUST COM      9600  10-23-90   4:47p
    AUTOMAKE EXE     50463  10-23-90   4:47p
    AUTOMAKE CSH     17087  10-23-90   4:47p
    BATCH    MDF      2286  10-23-90   4:47p
    DOS      MDF      4780  10-23-90   4:47p
    ENTER    MDF       720  10-23-90   4:47p
    NETEXAMP MDF      1016  10-23-90   4:47p
    CRLF     INP         2  10-23-90   4:47p
    CIS_HELP DOC       674  10-23-90   4:47p
    MOREHELP DOC     10726  10-23-90   4:47p
    PRINTDOC BAT       864  10-23-90   4:47p
    READ     ME       2129  10-23-90   4:47p
    FILE608  TXT      3257  11-26-90  10:14a
           20 file(s)     349420 bytes
                            2048 bytes free
