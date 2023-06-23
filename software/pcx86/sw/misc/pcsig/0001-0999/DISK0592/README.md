---
layout: page
title: "PC-SIG Diskette Library (Disk #592)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0592/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0592"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TSHELL"

    TSHELL is a powerful visual shell for the PC which provides an
    efficient environment for the user to manage DOS. This version is a
    working demonstration of a larger, more powerful version (2.0).
    Complete with callable help screens, installation and customization
    files, and a manual, this could be a solid enhancement for your system.
    
    System Requirements:  DOS 2.0 or greater, 256K, hard disk
    recommended, monochrome monitor.
    
    How to Start: Read the README.1ST and then TSH.DOC for instructions and
    documentation.  To run TSHELL, just type TSH.
    
    Suggested Registration:  Version 2.0 available for $37.50.
    
    File Descriptions:
    
    TSH      HLP  This file contains help screens
    SETUP    TSH  The customizing routine for Tshell
    TSH      DOC  Documentation manual
    USQ      EXE  Expands (unsqueezes) compressed Tshell files
    TSH      EXE  The main Tshell program file.
    INSTALL  BAT  Batch file to install Tshell on a designated disk
    README   1ST  Contains comments on installation and operation of Tshell
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES592.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  592  TSHELL                                              v1 DS2
---------------------------------------------------------------------------
Tshell is a powerful visual shell for the PC which provides an efficient envi-
ronment for the user to manage DOS.  Version 1.1 is a working demonstration of
a larger, more powerful version (2.0).
 
TSH      HLP  This file contains help screens
TSH      DOC  Documentation manual
SETUP    TSH  The customizing routine for Tshell
README   1ST  Contains comments on installation and operation of Tshell
INSTALL  BAT  Batch file to install Tshell on a designated disk
TSH      EXE  The main Tshell program file.
USQ      EXE  Expands (unsqueezes) compressed Tshell files
 
PC-SIG (Software Interest Group)
1030 D East Duane Ave.
Sunnyvale Ca. 94086
PH# 408-730-9291
```
{% endraw %}

## NOTES592.TXT

{% raw %}
```
Program name: TSHELL                  Version 1.1
 
Author name:  Josiah C. Hoskins
Address:      BTM Software, Inc.
              P.O. Box 49356
              Austin, Texas 78765

Telephone Number: (512) 459-6026
 
Suggested Donation: $37.50.  This gets you TSHELL 2.0, complete laser printed
manual, and notice of updates.
 
Program Description:

Tshell is a powerful visual shell for the PC which provides an efficient envi-
ronment for the user to manage DOS.  Version 1.1 is a working demonstration of
a larger, more powerful version (2.0).  It acts as an interface between the 
user and Operating System, interpreting and executing commands entered by the 
user, thus providing a much friendlier environment in which to work. It helps
issue commands by providing a menu of command options and aids the user in the
construction of those commands.  Tshell also makes extended use of the screen
to graphically display important information and provide on-line help.  It pro-
vides a visual means to travel through the hierarchical directories of DOS.  
The user actually sees the tree structure represented on the screen, and can 
walk through the tree with the cursor, which is manipulated with the arrow keys.

Tshell is written in "C" and 8086 assembly.  It is most effective on systems
that have a fixed disk and requires at least 256KB of memory and DOS 2.0 or 
higher.  Tshell displays the amount of free RAM memory available, allowing the 
user to compare this to an application before running it.  It also supports a
color monitor and allows the redefinition of the default color scheme.

```
{% endraw %}

## TSH.DOC

{% raw %}
```













                                    Tshell

        "A powerful visual shell for the IBM Personal Computer Series"


                                  Version 1.1













                              Notice of Copyright

                  Software (c) Copyright 1985 Josiah C. Hoskins
                  Manual (c) Copyright 1985 BTM Software, Inc.
                  Licensed Material distributed by BTM Software, Inc.
                  This manual was written by Michael R. Duncan.
                              All rights reserved.


                             Notice of Disclaimer

         Neither Josiah C.  Hoskins nor BTM Software, Inc.  make any
         representations, claims or warranties with respect to the
         contents of this manual or the software which it describes,
         and specifically disclaims any implied warranties, including
         but not limited to those of merchantability or fitness for a
         particular purpose.  BTM Software, Inc.  reserves the right
         to change the contents of the manual and/or the software at
         any time without notice to anyone.  However, BTM Software,
         Inc.  will attempt to inform registered owners when updates
         become available.



         BTM Software, Inc.
         P.O. Box 49365
         Austin, Texas  78765
         (512) 459-6026


             Tshell                                             Page i


                                      PREFACE


                  Tshell is a powerful visual shell for the IBM
             Personal Computer Series.  It provides you with a user
             friendly shell environment in which you can manage DOS
             2.0+ (for the purpose of this manual, PC-DOS will be
             referred to as DOS.  PC-DOS is a registered trademark of
             International Business Machines) and your disk directory
             structure more effectively.  The diskette from which this
             manual came also includes Version 1.1 of Tshell.  Please
             help by copying and sharing this diskette with your
             friends.

                  Tshell 1.1 is a working demonstration version of a
             larger, more powerful version 2.0.  In addition to the
             features of 1.1, version 2.0 offers utilities not
             provided by DOS.  The user can reNAME a directory, ERASE
             an entire directory (with verification), PROTECT files
             against unauthorized access (file encryption), MOVE
             files, SORT files by filename, extension, size, or
             date/time, EDIT files with your favorite editor or
             wordprocessor with one keystroke, find a misplaced file
             with the WHERE command, and execute the RUN command with
             parameters.

                  We anticipate future versions to include an
             applications MENU utility which will allow you to execute
             application programs with only two keystrokes.  We are
             also working on a memory management scheme to reduce the
             amount of memory Tshell uses at any one time.

                  After you or your friends try Tshell 1.1, each of
             you may contact BTM Software directly to purchase Version
             2.0 which comes with a printed manual and the right to
             purchase updates at a minimal cost. The purchase price
             for Version 2.0 is only $37.50.  We accept checks, money
             orders, Master Card, and Visa.

                  Tshell is most effective on systems that have a
             fixed disk and requires at least 256KB of memory and DOS
             2.0 or higher.  If you are not sure if you have enough
             memory, you may check the amount of free RAM memory as
             shown by Tshell.  Be sure to check this total against the
             amount of memory required by your largest application
             program.  Tshell supports a color monitor and allows you
             to redefine the default color scheme.

                  You will notice that we have included discussions
             about features in version 2.0 in this manual.  We did
             this to show you what is available if you register for
             the full implementation (version 2.0).  We have made
             every attempt to make a note of this situation in the
             manual, wherever it occurs.



             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page ii


                  We have made a special effort to make Tshell
             function properly with two other popular public domain
             software programs SCRNSAVE.COM and SCROLLK.COM.  If you
             experience any difficulties with Tshell or any other
             programs you use within Tshell, please let us know.  Our
             goal is to make Tshell "the" visual shell for the IBM PC
             family of computers.

                  Again, feel free to copy and share Tshell with your
             friends.  However, do not modify any of the associated
             files.  It is possible to render Tshell unusable if
             anyone tampers with the files.  We hope you enjoy Tshell
             as much as we do!












































             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                           Page iii


                                 ACKNOWLEDGEMENTS


                  We would like to acknowledge the developers of the
             compiler, assembler, and libraries used to write Tshell.
             Tshell is written in the "C" programming language and
             8086 assembly language.  The breakdown is roughly 85% "C"
             and 15% assembly code.  Most of the assembly code was
             used to control the video aspects of Tshell and was
             assembled with IBM's Macro Assembler version 2.0. Our "C"
             compiler is Computer Innovation's CI-C86 version 2.01G.
             In addition, we used Creative Solution's "Windows for C"
             version 2.2 to create and maintain our different
             windows.  During the course of developing a major product
             such as Tshell, programmers test the limits of the tools
             available to them.  We found only a few problems in both
             the compiler and the windows package.  We found that both
             Computer Innovations and Creative Solutions were more
             than willing to help us resolve the problems we
             encountered and would like to thank them for their
             support.  We strongly recommend these products to anyone
             considering programming in "C".  We would also like to
             thank all of those who spent countless hours testing and
             trying out the earlier versions of Tshell.  Without their
             help and constructive criticisms, Tshell would not have
             been possible.

                  Lastly, we would like to thank John Otken of Soft
             Advances for his collaboration. He convinced us that a
             little assembly can go a long way in providing almost
             unbelievable speed (as demonstrated by the fileinfo
             formatting routine which he coded). John is also the
             author of DSD86 an excellent debugger for the IBM PC
             which was most helpful in ferreting out some of those
             elusive bugs.






















             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page iv


                               LIST OF Tshell FILES


                  The following files must be on your distribution
             diskette in order for you to install Tshell properly.

            TSH.EXE or    This is the main Tshell program file.
            TSH.EQE       TSH.EQE is the squeezed version of TSH.EXE.

            TSH.HLP or    This file contains the help screens.  If
            TSH.HQP       this file is not in the root directory with
                          TSH.EXE when you press F1 for help, Tshell
                          will crash.  TSH.HQP is the squeezed version.

            TSH.DOC or    Contains this manual.  It DOES NOT have to
            TSH.DQC       be on your working diskette in order for
                          Tshell to function properly.  TSH.DQC is the
                          squeezed version.

            SETUP.TSH or  SETUP.TSH is the customizing routine for
            SETUP.TQH     Tshell.  It is separate from TSH.EXE to
                          prevent the unnecessary use of memory while
                          running Tshell.  To execute this routine,
                          you must be running Tshell and press the F8
                          function key.  This file must be in the root
                          directory with TSH.EXE in order for it to
                          function properly.  SETUP.TQH is the
                          squeezed version.

            README.1ST    This is the initial "read me" file.  It
                          contains the latest comments concerning the
                          installation and operation of Tshell.  If you
                          have not read this file, do so at this time.

            INSTALL.BAT   This is a batch file which installs Tshell
                          on a designated disk.  To execute this batch
                          file, issue the following command form:

                                       A> install <d:>

                          Where <d:> is the desired drive.  For example,

                                       A> install c:

                          will install Tshell on the disk in drive C.

            USQ.EXE       Your need for this file depends on the state
                          of TSH.EXE, TSH.HLP and TSH.DOC.  If the
                          second letter of the extension is the letter
                          "Q" (for example TSH.EQE), the files are
                          in a squeezed format and must be unsqueezed
                          before they can be used.  INSTALL.BAT will
                          execute this program and unsqueeze any files
                          which have been squeezed.  See the file
                          README.1ST on how to install Tshell.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page v


                                  TABLE OF CONTENTS

             PREFACE..............................................   i
             ACKNOWLEDGEMENTS..................................... iii
             LIST OF Tshell FILES.................................  iv

             CHAPTER 1  INTRODUCTION

                1.1  What is a Hierarchical Directory? ............  1
                1.2  What is a Shell Program?......................  3

             CHAPTER 2  GETTING STARTED

                2.1  Introduction..................................  4
                2.2  Function Key F1Help...........................  4
                2.3  Function Key F10Exit..........................  4
                2.4  Setting Up....................................  5
                2.5  A first look at Tshell........................ 10

             CHAPTER 3  DIRECTORY TASKS

                3.1  Cursor Movements.............................. 12
                3.2  Function Key F2Directory...................... 13
                   3.2.1  Make..................................... 13
                   3.2.2  Remove................................... 14
                   3.2.3  Name..................................... 14
                   3.2.4  Copy..................................... 14
                   3.2.5  Erase.................................... 15
                   3.2.6  Tree..................................... 15
                3.3  Function Key F5Date........................... 16
                3.4  Function Key F6Time........................... 16

             CHAPTER 4  FILE TASKS

                4.1  Cursor Movements.............................. 17
                4.2  Function Key F2Filetasks...................... 17
                   4.2.1  Marking Files............................ 18
                   4.2.2  Copy..................................... 18
                   4.2.3  Erase.................................... 18
                   4.2.4  Move..................................... 19
                   4.2.5  Protect.................................. 19
                   4.2.6  Rename................................... 20
                   4.2.7  Type..................................... 20
                   4.2.8  Sort..................................... 20
                   4.2.9  Where.................................... 21
                4.3  Function Key F5Run............................ 21
                4.4  Function Key F6Edit........................... 21

             CHAPTER 5  SOME THINGS NEVER CHANGE

                5.1  Function Key F3Drive.......................... 22
                5.2  Function Key F4Path........................... 22
                5.3  Function Key F7Compose........................ 23
                5.4  Function Key F9Menu........................... 23

             APPENDIX 1  SHORTCUTS AND HINTS....................... 24

             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 1




                              CHAPTER 1  INTRODUCTION


                  If you feel comfortable with the concepts of
             hierarchical directories and shell programs, you may wish
             to skip to CHAPTER 2 GETTING STARTED. For those of you
             who have stayed with us, we hope this chapter provides
             some insight to these concepts.

             1.1  What is a Hierarchical Directory?

                  Hierarchical structured directories are also
             referred to as tree structured directories.  "Tree" is a
             descriptive word that may be somewhat misleading.  When
             you think of a tree, you think of certain attributes
             being in specific places, such as, the root of the tree
             being at the bottom and limbs growing sideways from the
             trunk. However, when speaking in terms of a directory
             tree, the root directory is conceptually at the top or on
             the left and the limbs, or subdirectories, grow down or
             to the right.  "Climbing the directory tree" means
             climbing to the root directory and "descending the
             directory tree" means moving down to another subdirectory
             level away from the root.

                  A tree structured directory can be thought of as an
             imaginary filing cabinet.  Our imaginary filing cabinet
             can have drawers which contain files or drawers within
             drawers.  Each directory in a tree structured directory
             can be considered a label to a drawer in our imaginary
             filing cabinet.  Think about how you would tell a friend
             where to find a certain file in your filing cabinet.
             Let's use FIGURE 1 on page 2 as an example of a tree
             structured directory.

                  Suppose you wanted to tell your friend to retrieve
             the SETUP.EXE file. Remember that we can use the terms
             directory and drawer interchangeably.  First, you would
             tell your friend to open the USR directory.  When he or
             she opens this directory, he or she would find that there
             are four more directories inside the USR directory:  BAS,
             GAMES, UTIL and EDITORS.  You would instruct your friend
             to open the UTIL directory.  Inside the UTIL directory,
             he or she would find the SETUP.EXE file.  What you have
             described to your friend is a path to the file
             SETUP.EXE.  The path written out would be
             \USR\UTIL\SETUP.EXE.  You will notice that each file has
             a unique path that describes where to find it.







             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 2


                \ -|-AUTOEXEC.BAT
                   |-BIN    <dir>---|-DEBUG   .COM
                   |                |-CHKDSK  .EXE
                   |                |-PRINT   .COM
                   |
                   |-COMMAND .COM
                   |-SPRDSHT<dir>---|-BLOSSOM .EXE
                   |                |-FILE01  .WKS
                   |                |-CALC    .EXE
                   |
                   |-USR    <dir>---|-BAS    <dir>---|-MUSIC   .BAS
                                    |
                                    |-GAMES  <dir>---|-PLANETS .EXE
                                    |                |-ATTACK  .EXE
                                    |
                                    |-UTIL   <dir>---|-FIND    .EXE
                                    |                |-SETUP   .EXE
                                    |                |-TOOLS  <dir>
                                    |
                                    |-EDITORS<dir>---|-EDLIN   .EXE
                                                     |-MYED    .EXE
                                                     |-MYED    .HLP

                                   FIGURE 1

                  Now that you have a conceptual idea of how a tree
             structured directory is organized, let's discuss some
             terminology.  The root directory can be identified by the
             "\" character in the upper left-hand corner of FIGURE 1;
             it exists on every disk.  In our example, the USR
             directory is a subdirectory of the root and the root is
             the parent directory of USR.  When you put a diskette in
             a drive and issue the DOS command "DIR" you will be given
             the contents of the root directory because the root is
             the current directory.  If your disk contains the
             directory structure outlined in FIGURE 1 and you issued
             the DOS command "CD USR", then the USR directory would
             become the current directory and BAS, GAMES, UTIL and
             EDITORS would be the subdirectories.  If you issued the
             DOS command "CD UTIL", then UTIL would become the current
             directory, USR the parent directory, and TOOLS the
             subdirectory.  As you can see, current, parent, and
             subdirectory are relative terms which depend on where you
             are in your directory structure.

                  The key concepts are the current directory and the
             path to a file. The term current directory will be used
             many times throughout this manual and it describes a
             window through which you can see only those files and
             subdirectories that are in the current directory.  To
             gain access to a file deep within your directory
             structure, you can describe the path that uniquely
             defines the location of that file. With these two
             concepts under your belt, you should have no trouble
             using Tshell.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 3


             1.2  What is a Shell Program?

                  The simplest definition of a shell program is a
             program which acts as an interface between you, the user,
             and the Operating System.  It interprets and executes
             commands entered by the user.  DOS has a limited shell
             that performs these activities however, it can be very
             cryptic and provides little or no on-line help.

                  A visual shell, such as Tshell, provides the user
             with a much friendlier environment in which to work.  Not
             only does it interpret your commands, but it helps you
             issue them by providing a menu of command options and
             aids you in constructing the command.  A visual shell
             also makes extended use of the screen to graphically
             display important information and provide on-line help.
             DOS is a collection of system utilities that control your
             computer system.  Tshell is a program that helps you
             control DOS.






































             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 4




                            CHAPTER 2  GETTING STARTED

             2.1  Introduction

                  We will assume at this point that you have figured
             out how to install Tshell and print out this manual.  If
             not, we refer you to the files README.1ST and INSTALL.BAT
             which should have been included on your distribution
             diskette.

                  Having installed Tshell, you should now find the
             following files: TSH.EXE, TSH.HLP, SETUP.EXE, and
             TSH.DOC.  TSH.EXE is the main Tshell program.  TSH.HLP
             contains the online help screens. SETUP.EXE is the
             customizing program which sets up Tshell for your
             particular environment and TSH.DOC contains this manual.

                  To start Tshell, change the current drive to the
             bootup drive (on a floppy based system, Drive A,
             otherwise change the current drive to your Fixed Disk
             drive).  Now, issue the following command (NOTE:  the
             "C>" is the DOS prompt for a Fixed Disk and is provided
             by the computer, you do not type this in):

                                      C> tsh

                  The rest of this chapter is dedicated to telling you
             how to get help from within Tshell, how to exit Tshell,
             and how to customize Tshell for you specific
             environment.  The last section (2.5) is a "first look"
             guide through Tshells' screens, modes, and information.
             If you only read part of this manual, BE SURE TO READ
             SECTION 2.5.

             2.2  Function Key F1Help

                  If you should need help using Tshell, all you need
             to do is press the F1 function key and a help window will
             appear on the right half of the screen.  There will be
             one or more screens which you can control with the PgUp,
             PgDn, Home, and End keys.  Once you have the information
             you need, press the ESC key and you will return to
             Tshell.

             2.3  Function Key F10Exit

                  If you wish to exit Tshell, make sure that the
             function key definitions are displayed across the bottom
             of the screen.  All you have to do is press the F10
             function key and then confirm that you wish to exit
             Tshell.  You can respond by moving the cursor to the
             desired choice and press ENTER, or you may respond with
             "Y", "y", "N", or "n".


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 5


             2.4  Setting Up

                  Many characteristics of Tshell may be defined to
             suit your particular needs.  In this section, we will
             show you how to personalize Tshell.  To begin customizing
             Tshell, insert your backup copy of Tshell into Drive A:
             and start up Tshell.

                  An introductory screen will appear on your monitor
             and you will be prompted to press the space bar.  In
             Section 2.5, we will discuss more about this introductory
             screen and the main screen that follows.  For now, bear
             with us and press the space bar.  You will see the main
             screen with a list of function key definitions across the
             bottom of the screen.  You will notice the F8 function
             key is defined as F8Setup.  Press the F8 function key at
             this time.  The main screen will be replaced by the Setup
             Menu.  The menu selections are:

                        1. Set user definable options
                        2. Set display colors
                        3. Setup application programs menu
                        4. Save Setup file (TSH.DEF) & Exit
                        5. Return to "Tshell" (no save)

                  In the case of menu items 1 and 2, Tshell has been
             given a set of internal default values.  In Setup, you
             may change any of these values and save them in a file
             called TSH.DEF by pressing the 4 key at the top of your
             keyboard.  If you press the 5 key, you will be prompted
             to confirm that you wish to exit Setup without saving
             your changes. If you answer no, you will return to the
             Setup Menu and be given the chance to save the changes.
             Once you have saved your changes, you must exit Tshell
             and restart it in order for the changes to take effect.
             Menu item 3 (not implemented in version 1.1) enables you
             to define a personal application programs menu which
             allows you to execute an application program with only
             two keystrokes.  There are no initial default values for
             this since it depends entirely on your own library of
             application programs.  You may execute the Setup portion
             of Tshell as many times as you wish.  Now we will look at
             each item in more detail.














             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 6


             1. Set user definable options

                  To set the user definable options, press the 1 key
             at the upper left corner of your keyboard (just to the
             right of the ESC key).  Another screen will appear with a
             list of options you can define.  The lower portion of the
             screen contains instructions on how move the cursor and
             how to make changes to this screen.  Below the box is the
             definition of the function keys.  As we stated in Section
             2.2, press the F1 function key if you need help.  Since
             Setup is a separate program from Tshell, when you press
             the F10 function key you will leave Setup and return to
             Tshell.

                  The values listed on the right side of the window
             are the default values stored internally or in the file
             TSH.DEF.  There are two ways to change these values.  If
             there are only a few distinct choices to be made, Tshell
             allows you to simply toggle through the choices using the
             space bar.  The value of the option is changed as you
             press the space bar.  If a specific value is required
             such as a path to a file, the function key menu will be
             replaced with two lines.  The upper line will contain the
             current value for the option highlighted by the cursor.
             The lower line is the where you will enter the new
             information.  If you enter new data on the lower line, it
             will not actually be changed until you press the ENTER
             key.  If you move the cursor, press the ESC key, or exit
             Tshell before you press the ENTER key, the new
             information will be cancelled.

                  The options

                1. Set number of available drives
                2. Set hidden file display option
                3. Set file sort option
                4. Set for pause after program is run
                5. Set default directory on exit from Tshell
                6. Does your editor accept a filename argument

             have distinct responses and therefore you need only to
             toggle through the choices.  You will notice that the
             numbers to the left of the options listed above do not
             appear on the screen and are used here only for
             convenience.  Item 1 requires that you tell Tshell how
             many drives your system is configured for.  If you are
             not sure how many drives you have, check your system
             switch settings and refer to the Guide to Operations
             Manual that came with you system.  The range of values
             for this option is 1 through 9.  If you have more than
             nine drives, call us and we will provide you with a means
             to increase this number.  The possible values for item 2
             are displayed/not displayed.  If you select the displayed
             option, all hidden files will be shown.  An example of
             some hidden files are IBMBIO.COM and IBMDOS.COM.  Item 3


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 7


             allows you to select one of several attributes with which
             to sort the files.  The attributes are: Name, Extension,
             Size, and Date/Time.  All sorting is done in ascending
             order (smallest to largest, A - Z).  If you select the
             Date/Time attribute, the files will first be sorted by
             the date and then by the time (this item is not
             implemented in version 1.1).  Item 4 is a simple yes/no
             option.  If you want Tshell to pause after it has
             completed the execution of a program, select the yes
             option.  You might like to experiment with this one to
             find what is most comfortable for you.  When you exit
             from Tshell, you have a choice of which directory you
             will be in when you return to DOS.  Item 5 allows you to
             select either the root directory of the current drive or
             the current directory of the current drive.  Item 6 is a
             simple yes/no option (not implemented in version 1.1).
             If you call your editor with the name of the file you
             wish to edit, the correct value for this option is yes.

                  The options

              7.  Give the name of your editor to be used for F6
              8.  Set drive and path for your editor
              9.  Set drive and path for helpfile (tsh.hlp)

             must have specific responses and therefore you must
             supply this information.  Item 7 must be the command you
             issue to start your editor (not implemented in version
             1.1).  The default is EDLIN but we suspect that you have
             your own editor.  For item 8, you must supply the
             complete path to your editor and must include the drive
             (not implemented in version 1.1).  For example, if EDLIN
             is always in the root directory of the diskette in drive
             A, the path would be A:\. Item 9 is the path to the
             Tshell help file TSH.HLP and must be specified in the
             same manner as the path to your editor.  The initial
             default value is Drive A:.  The only reason you should
             have to change these is if you have moved these files to
             a different location on your disk or if you run Tshell
             from a different drive.

                  When you have completed entering the new values for
             this portion of Setup, press the ESC key and you will
             return to the main Setup Menu.

             2. Set display colors

                  If you have a monochrome monitor, Tshell will
             recognize this and ignore any color changes.

                  If your system has a color monitor, you can set the
             display colors to suit your taste.  To set the display
             colors, press the 2 key.  The main Setup Menu will be
             replaced with a Color Options Screen.  The lower portion
             of the screen contains instructions on how to move the


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 8


             cursor and how to change the values of each display
             attribute.  The color value for each attribute can be
             changed by simply toggling (pressing the space bar)
             through the range of choices.  You are free to change the
             colors to any combination you wish, however, you should
             not make any attribute the same color as the background
             color, for obvious reasons.  If you accidentally make
             this mistake, you can do one of two things.  If you can
             remember the attributes involved, you can simply run
             setup again and make the necessary changes.  If you
             cannot remember what you did, then you can erase TSH.DEF
             and do Setup again.  This will give you a fresh start
             with the initial default color values.  If you must erase
             TSH.DEF, remember you must run Setup again to restore the
             rest of the attributes of your environment.

                  When you have made your changes, press the ESC key
             and you will return to the main Setup Menu.

             3. Setup application program menu

                  This item is described here to let you know what
             this option will do, but it is not implemented in version
             1.1.  To define your application menu, press the 3 key.
             The main Setup Menu will be replace with a copy of the
             applications menu.  Initially this screen will not
             contain any information.  To start, type the letter of
             the application line you wish to define, edit or remove.
             An information form will appear. If it is does not
             contain any information about one of your applications,
             then it is a blank form and may be used to enter
             information about a new application program.  Across the
             bottom of the form you will notice some function key
             definitions.  As always, F1 is for help.  The F2 function
             key allows you to edit the form or to define a new form.
             The F3 function key allows you to remove a form. If you
             press F3 key when the form is blank, there is no action.
             If you press the F3 key when the form is not blank, you
             will be asked to confirm the action before the form is
             remove.  The F10 function key is used to exit Setup.

                  If you wish to define or edit an application program
             form, press the F2 function key.  The function key menu
             will be replaced by a list of items that can be edited or
             defined.  You may select an item by placing the cursor on
             the item (using the cursor keys) or you may press the
             letter that corresponds to the first letter of the item.
             Once you have made your selection, the list of items will
             be replaced by two lines.  The upper line will contain
             the previous information and the lower line will be where
             you will enter the new information. When you have
             finished typing in the new information, press the ENTER
             key and the information will be saved.  If you do not
             wish to save the new information, press the ESC key and



             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                             Page 9


             the request will be cancelled. Let's take each item and
             discuss it in more detail.

             Name

             To enter the name of the application program, select the
             Name item. Type in the name of the application program as
             you want it to appear in the Application Menu.  This is
             just an information string and can be any descriptive
             statement.  For example, if you had an application
             program called WonderCalc, you would type in the string
             WonderCalc.

             Path

             To enter the path to the application program, select the
             Path item. Type in the full path to the application
             program including the drive but not the actual program
             name.  On a floppy disk system, you must put the
             application diskette in the proper drive.  If you use our
             hypothetical tree structured directory in FIGURE 1 and
             the WonderCalc program is CALC.EXE and you place the
             WonderCalc diskette into drive B, the path to CALC.EXE
             would be B:\SPRDSHT.

             Filename

             To enter the filename for the application program, select
             the Filename item.  This item is the character string you
             use to execute the application program.  In the our
             example, CALC is the file name.

             Argument

             Whether or not you use this item depends on your
             application program. If your application program will
             accept an argument when you execute it, you may specify
             it here.  You may specify a literal or a macro argument.
             A literal argument is a constant string and will cause
             the application program to be executed with the same
             argument every time you run the program.  For example, if
             you typed in the string file01.wks, the application
             program would always be called with this argument.  A
             macro argument allows you to specify a general file
             argument format and select the actual argument at the
             time you execute the application program.  If the
             application programs' argument must include the complete
             file specification, you may type in the following macro
             argument

                                      @D@P@N@E

             where the @D specifies the drive, @P the path, @N the
             filename, and @E the extension.  Or you may type in a
             short hand macro @C that is equivalent to the above.  In


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 10


             order to use a macro argument, you must first highlight
             the desired file argument and then press the F9 function
             key which is the way to execute an application program
             (see Section 5.4 for more information about the F9
             function key).

             2.5  A first look at Tshell

                  In this section we want to familiarize you with
             Tshell and introduce some terms which will be used
             throughout this manual.  To begin, follow the same
             procedure as outlined in Section 2.1 and issue the
             following commands (NOTE:  the current drive is Drive C:
             and the C> is provided by the computer):

                                     C> cd \

                                     C> tsh

                  The first screen you see is the title screen.  It
             explains how to purchase version 2.0 and receive your
             laser printed copy of this manual.

                  Press the space bar to continue.  The next screen
             you see is the main Tshell screen.  There is a lot of
             information on this screen, so let's take a few minutes
             and look at each attribute individually.  Let's start
             with the two smaller boxes in the lower left and right
             hand corners.  The box on the left contains three pieces
             of information: the Date, the Time, and the RAM Memory
             installed.  Do not be alarmed if the date and time are
             incorrect; we will tell you how to change this in
             Sections 3.3 and 3.4.  At first glance, it may appear
             that the memory information is incorrect.  However, you
             must remember that one K is equal to 1024 bytes.  So, if
             you have 384K memory, it will be displayed here as 393216
             (384 x 1024).  The box on the right contains two pieces
             of information, the Drive Status and the Current Dir
             Status.  The Drive Status tells you what the current
             drive is and the total capacity of the disk in the
             current drive.  For example, if you have installed Tshell
             on a floppy diskette, then the total number of bytes is
             362496.  In addition, Tshell tells you how much memory
             you have used and the amount left on the diskette in the
             current drive. The Current Dir Status tells you how much
             memory you are using, how many files there are, and how
             many subdirectories there are in the current directory.










             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 11


                  The large box in the center of the screen is called
             the file box. Inside this box is a list of all of the
             files in the current directory, the number of bytes for
             each file, and the date and the time of the last update.
             Tshell has a limit of 200 files in any one current
             directory.  Notice that there are the same number of
             files listed here as indicated by the number of files in
             the Current Dir Status box.

                  Above the center box is a branch of the tree with
             six limbs.  If you have any subdirectories in the current
             directory, they will be listed here.  Just above the
             branch and to the right, you will notice a message.  If
             there are no subdirectories in the current directory it
             will read "no subdirectories".  However, if there are
             some, then it will read "branch x of y", where x and y
             are numbers and x is the current branch and y is the
             total number of branches.  Tshell allows up to 30
             subdirectories in any one current directory.

                  Just above the lower left-hand box is a message that
             reads Level 1. This message tells you how many
             subdirectories you are down from the root.  Level 1 is
             the root directory.

                  And finally, across the bottom is a list of function
             key definitions. This is called the function key menu.

                  Now you know all about the Tshell screen, but we
             still need to talk about two important concepts, the
             directory mode and the file mode. First, let us show you
             how you can recognize the current mode. You will notice
             that the "\", or root symbol, is highlighted. Whenever
             this or any other subdirectory is highlighted, you are in
             the directory mode.  Another clue is the F2 function key
             description is "F2Directory".  Now, press the cursor
             arrow down key on the cursor control pad of your
             keyboard.  What happened?  The cursor moved into the file
             box.  This is your first clue that you are now in the
             file mode.  Notice the message "File x of y" over the
             lower right-hand box.  This tells you the relative
             position of the cursor in the list of files.  Press the
             cursor arrow down key and the cursor arrow up key and
             watch the message change.  The second clue that you are
             now in the file box is the F2 function key description.
             It now reads F2Filetasks.  Also notice that the F5 and F6
             key definitions changed.  Now, press the ESC key, the key
             just to the right of the F2 function key on your
             keyboard, and see how these key definitions change.
             These keys were redefined in an effort to reduce the
             number of keystrokes necessary to issue a command.

                  At this point, you should be able to read the rest
             of this manual and understand the terms and concepts used
             to instruct you how to use Tshell.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 12




                            CHAPTER 3  DIRECTORY TASKS

                  In this chapter, we will discuss the cursor
             movements in the directory mode and the function keys
             F2Directory, F5Date, and F6Time.  For a review of the
             directory mode, current directory, branches,
             subdirectories, and parent directory, see Section 1.1
             "What is a Hierarchical Directory?" and Section 2.5 "A
             First Look at Tshell".  Remember, you may press the F1
             function key for help with the directory task commands.

             3.1  Cursor Movements

                  When you are in the directory mode, indicated by the
             F2Directory in the function key menu and a highlighted
             directory, the keystrokes described below are active.
             The results of any given keystroke is dependent on
             whether or not it is logical for the action to take
             place.  For example, if there are not any subdirectories,
             then it is not logical to allow any cursor movements
             among the subdirectories.


             Cur Lt  If the cursor is at the current directory, the
                     cursor left key moves the cursor to the left most
                     subdirectory.  If the cursor is already on a
                     subdirectory, this keystroke will move the cursor
                     one subdirectory to the left.

             Cur Rt  If the cursor is at the current directory, the
                     cursor right key moves the cursor to the right
                     most subdirectory.  If the cursor is already on a
                     subdirectory, this keystroke will move the cursor
                     one subdirectory to the right.

             Cur Up  If the cursor is at the current directory, then
                     the cursor up key opens and displays the parent
                     directory information.  If the cursor is not at
                     the current directory, the then cursor up key
                     returns the cursor to the current directory.

             Cur Dn  The cursor down key can be pressed from anywhere
                     in the directory mode.  The cursor will be moved
                     to the file box, highlighting the first filename
                     and the program will be in the file mode.  See
                     Chapter 4 for more information about the
                     activities associated with the file mode.

             Home    If there is more than one branch, then the Home
                     key will return you to the first branch.

             End     If there is more than one branch, then the End
                     key will send you to the last branch.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 13


             PgUp    If there is more than one branch and you are not
                     at the first branch, the PgUp key will send you
                     to the previous branch.  For example, if you are
                     on Branch 3 of 4, then the PgUp key will send you
                     to Branch 2 of 4.

             PgDn    If there is more than one branch and you are not
                     at the last branch, the PgDn key will send you to
                     the next branch.  For example, if you are on
                     Branch 2 of 4, then the PgDn key will send you to
                     Branch 3 of 4.

             ESC     The ESC key can be pressed from anywhere within
                     the directory mode and returns you to the root
                     directory.

             ENTER   If the cursor is on a subdirectory, pressing the
                     ENTER key will open and display the information
                     for the selected subdirectory.

             3.2  The Function Key F2Directory

                  When you press the F2 key the function key menu is
             replaced by a list of directory commands.  You can select
             a command by cursoring left or right or you can simply
             enter the first letter of the command in upper or lower
             case.  Under the list of commands is a brief description
             of the command pointed to by the cursor.  If at any time
             prior to pressing the ENTER key, you decide that you do
             not wish to execute a selected command, press the ESC key
             and you will return to the function key menu.

                  The following is a description of how to use each of
             the commands:

             3.2.1  Make

                  This command is the same as the DOS command mkdir
                  and creates a new subdirectory in the current
                  directory.  To execute this command, first you must
                  be in the desired current directory.  Next, press
                  the function key F2 and select the Make command.
                  The program will respond by asking you to enter the
                  new subdirectory name.  Enter the name of the new
                  directory and press ENTER.  If DOS can create the
                  new directory, it will.  Otherwise, an error message
                  will be issued.  Check to see if another file exist
                  with that name.  If not, check to make sure that you
                  used valid characters.  DOS will not accept names
                  with special characters in it (i.e.  <, >, ?, and
                  *). Remember that the directories are listed in
                  alphabetic order, so you may not see the new
                  directory in the current branch on the screen.




             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 14


             3.2.2  Remove

                  This command is the same as the DOS command rmdir
                  and removes a subdirectory from the current
                  directory.  To execute this command, first the
                  cursor must be on the desired subdirectory and the
                  subdirectory must be empty (must not contain
                  subdirectories or files).  Next, press the function
                  key F2 and select the Remove command.  The selected
                  subdirectory will be removed, the remaining
                  subdirectories will be resorted and the screen will
                  be redisplayed with the new information.  The
                  important thing to remember here is that you must
                  select the desired subdirectory before pressing the
                  F2 function key.  The program will not allow you to
                  remove the current directory or a subdirectory that
                  is not empty.

             3.2.3  Name (Not implemented in Version 1.1)

                  This command is not implemented under DOS, but it is
                  equivalent to the rename file command, however it
                  renames a directory.  To execute this command, first
                  place the cursor on the desired subdirectory.  Next,
                  press the function key F2 and select the Name
                  command.  You will be prompted to enter the new
                  directory name.  After you have entered the new
                  name, press the ENTER key and the subdirectory name
                  will be changed and the directories will be resorted
                  and redisplayed.

             3.2.4  Copy

                  This command is not directly implemented in DOS but
                  it is equivalent to copy *.* <destination>.  This
                  command copies all of the files of the selected
                  subdirectory to a specified destination.  To execute
                  this command, first place the cursor on the desired
                  subdirectory, then press the F2 function key and
                  select the Copy command.  The program will prompt
                  you for a destination as a Drive or a Path.  If you
                  select the Drive option, all of the files will be
                  copied to the root directory of the desired drive.
                  If the destination is a subdirectory, you have two
                  choices.  You may choose the Path option and type in
                  the path to the destination.  If the destination is
                  a subdirectory on a drive other than the current
                  drive, you MUST use the Path option.  If the path to
                  a subdirectory in the current drive is too long to
                  type in (or remember), you may select the Tree
                  option and use the cursor keys to select the
                  destination directory.  Once you have chosen the
                  desired subdirectory, press the ENTER key.  Tshell
                  will determine the path and copy all of the files to
                  that subdirectory.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 15


             3.2.5  Erase (Not implemented in Version 1.1)

                  This command is not directly implemented in DOS but
                  it is equivalent to erase *.*.  This command erases
                  all of the files of the selected subdirectory.  To
                  execute this command, first place the cursor on the
                  desired subdirectory, then press the F2 function key
                  and select the Erase command.  The program will ask
                  you to verify that you wish to erase all of the
                  files in the selected subdirectory.  If you respond
                  with y , then the files will be erased.  If you
                  respond with n, then you will return to the function
                  key menu.

             3.2.6  Tree

                  This command is a variation of the DOS tree
                  command.  The major difference between our command
                  and the one in DOS is that ours provides you with a
                  graphic display of your complete directory structure
                  and allows you to place the cursor on any
                  subdirectory and open it.  To execute this command
                  press the F2 function key and select the Tree
                  command.  If the file TSHTREE.DAT exists on the
                  diskette in the current drive, then Tshell will read
                  it and display the information.  Otherwise, Tshell
                  will create and display the tree information and
                  save it in the file TSHTREE.DAT.  If you
                  accidentally erase TSHTREE.DAT, it will only cause a
                  slight delay while Tshell recreates the file.  If
                  you make any changes to your tree structure, such as
                  making or removing one or more directories, you MUST
                  erase TSHTREE.DAT in order to force Tshell to
                  recreate the most current tree structure.

                  It is possible to display up to 5 levels (columns)
                  of subdirectories with up to 5 screens of 20 lines
                  per screen.  If the structure is longer than the
                  screen, you may cursor up and down within the window
                  as necessary.  You may move the cursor among the
                  directories with the cursor arrow keys. The cursor
                  up and down keys move the cursor up and down in a
                  column.  The cursor left and right keys move the
                  cursor between columns, however, you may only change
                  columns when the cursor is highlighting a directory
                  which has a subdirectory or a parent directory.  The
                  Home key returns the cursor to the root directory
                  and the End key sends the cursor to the bottom of
                  the current column.  The PgUp displays the previous
                  window and the PgDn key displays the next window.
                  When you have highlighted the desired subdirectory,
                  press the ENTER key and you will return to the main
                  Tshell screen with the selected subdirectory as the
                  current directory.  If you do not wish to change the
                  current directory, press the ESC key.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 16


             3.3  The Function Key F5Date

                  This keystroke allows you to reset the system date
             and is analogous to the DOS Date command.  To execute
             this command, simply press the F5 function key, enter the
             new date and press the ENTER key.  Notice that Tshell
             does the formatting for you and only valid dates will be
             accepted.  We have defined valid dates to be 1-12 for the
             month, 1-31 for the day and 80-99 for the year.  Also
             note that the program watches for valid days in any given
             month.  For example you will not be allowed to set the
             date to 2-31-85, since February does not have 31 days.

             3.4  The Function Key F6Time

                  This keystroke allows you to reset the system clock
             and is analogous to the DOS Time command.  To execute
             this command, simply press the F6 function key, enter the
             new time, and press the ENTER key.  Notice that Tshell
             does the formatting for you and only valid times will be
             accepted.  We have defined valid times to be 0-23 for the
             hour, 0-59 for the minutes and 0-59 for the seconds. Also
             note that the time display will indicate am or pm
             depending on whether or not the time was set to 0-11
             hours or 12-23 hours.
































             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 17




                               CHAPTER 4  FILE TASKS

                  In this chapter, we will discuss the cursor
             movements in the file mode and the function keys
             F2Filetasks, F5Run, and F6Edit.  For a review of the term
             file mode, see Section 2.5 "A first look at Tshell".
             Remember, you may press the F1 function key for help with
             the file task commands.

             4.1  Cursor Movements

                  When you are in the file mode, indicated by the
             F2Filetasks in the function key menu, the keystrokes
             described below are active.  The results of any given
             keystroke is dependent on whether or not it is logical
             for the action to take place. For example, if there is
             only one file in the file box, it is not logical to allow
             any cursor movements among the files.


             Cur Up  If the cursor is not at the first file in the
                     list, the cursor up key will move the cursor up
                     one file.

             Cur Dn  If the cursor is not at the last file in the
                     list, the cursor down key will move the cursor
                     down one file.

             Home    The Home key moves the cursor to the first file
                     in the current directory list.

             End     The End key moves the cursor to the last file in
                     the current directory list.

             PgUp    The PgUp key displays the previous 13 files. When
                     there are less than 13 files above those seen,
                     the first file in the list is at the top of the
                     window.

             PgDn    The PgDn key displays the next 13 files.  When
                     there are less than 13 files left in the list the
                     last file is at the bottom of the window.

             ESC     The ESC key returns you to the directory mode and
                     places the cursor on the current directory.

             4.2  The Function Key F2Filetasks

                  When you press the F2 function key, the function key
             menu is replaced by a list of commands.  You can select a
             command by cursoring left or right or you can simply
             enter the first letter of the command in upper or lower
             case.  Under the list of commands is a brief description


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 18


             of the command pointed to by the cursor.  If at any time
             prior to pressing the ENTER key, you decide that you do
             not wish to execute a selected command, press the ESC key
             and you will return to the function key menu.

             4.2.1  Marking Files

                  To use some of these commands, you will be
             instructed to mark a file(s).  Marking files informs
             Tshell which files you wish to operate on.  This allows
             you to operate on unrelated files, unlike the DOS wild
             card character "?" and "*" which require that the
             filenames match a specific pattern. To mark a file, place
             the cursor on the desired file and press the space bar.
             A solid triangle will appear between the index letter and
             the first character of the file name to identify which
             files have been marked.  The space bar is a toggle and
             the mark can be removed in the same manner as it was
             created.

                  The following is a description of how to use each of
             the commands:

             4.2.2  Copy

                  This command is analogous to the DOS copy command
                  and copies a file, or files, to a new location.  To
                  execute this command first press the F2 function key
                  and select the Copy command.  Then mark the desired
                  files (see the paragraph above on marking files).
                  After marking the files, press the ENTER key and the
                  program will prompt you for a destination as a Drive
                  or a Path.  If you select the Drive option, the
                  file(s) will be copied to the root directory of the
                  desired drive.  If the destination is a
                  subdirectory, you have two choices.  You may choose
                  the Path option and type in the path to the
                  destination.  If the destination is a subdirectory
                  on a drive other than the current drive, you MUST
                  use the Path option.  If the path to a subdirectory
                  in the current drive is too long to type in (or
                  remember), you may select the Tree option and use
                  the cursor keys to select the destination
                  directory.  Once you have chosen the desired
                  subdirectory, press the ENTER key.  Tshell will
                  determine the path and copy the file(s) to that
                  subdirectory.

             4.2.3  Erase

                  This command is analogous to the DOS erase command
                  and removes a file, or files, from the directory.
                  To execute this command, first press the F2 function
                  key and select the Erase command.  Then mark the
                  desired files (see the paragraph above on marking


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 19


                  files).  Then press the ENTER key and the program
                  will ask you to verify the Erase action.  If you
                  answer Yes to the prompt, the files will be erased.
                  If you answer No, the request will be cancelled.

             4.2.4  Move (Not implemented in Version 1.1)

                  This command is not implemented by DOS and moves a
                  file or collection of files to a new subdirectory.
                  To do this under DOS you would first have to copy
                  the files to the new directory and then erase them
                  from the old directory.  If the disk is almost full,
                  this process can be tedious.  Tshell executes this
                  function directly and does not require any addition
                  disk space.  To execute this command, first press
                  the F2 function key and select the Move command.
                  Then mark the desired files (see the paragraph above
                  on marking files).  After marking the file(s), press
                  the ENTER key and the program will prompt you for a
                  destination as a Drive or a Path.  If you select the
                  Drive option, the file(s) will be moved to the root
                  directory of the desired drive.  If the destination
                  is a subdirectory, you have two choices.  You may
                  choose the Path option and type in the path to the
                  destination.  If the destination is a subdirectory
                  on a drive other than the current drive, you MUST
                  use the Path option.  If the path to a subdirectory
                  in the current drive is too long to type in (or
                  remember), you may select the Tree option and use
                  the cursor keys to select the destination
                  directory.  Once you have chosen the desired
                  subdirectory, press the ENTER key.  Tshell will
                  determine the path and move the file(s) to that
                  subdirectory.

             4.2.5  Protect (Not implemented in Version 1.1)

                  This command is not implemented in DOS and allows
                  you to protect sensitive files by encrypting them
                  with a password known only to you.  To execute this
                  command, first place the cursor on the desired file
                  and press the F2 function key and select the Protect
                  command.  The program will ask you if you want to
                  encrypt or decrypt the file.  Make your selection
                  and the program will prompt you to enter the
                  password.  The password may be up to eight
                  characters in length.  Valid password characters
                  include any character you can create from the
                  keyboard and they are case sensitive.  In other
                  words, a "B" is different from a "b".  The same
                  password that was used to encrypt the file must be
                  used to decrypt the file.  Remember those
                  passwords!  If you forget the password(s) for an
                  encrypted file, the file is lost.  For added
                  protection, you may encrypt a file more than once


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 20


                  with different passwords.  To decrypt a file that
                  has been encrypted more than once, simply decrypt
                  with each password in order, and the file will be
                  returned to its original state.

                  Notice to the user:  Neither Josiah C. Hoskins nor
                  BTM Software, Inc. will accept any liability for
                  lost or misused information due to, but not limited
                  to: 1) the user forgetting the password(s) used to
                  encrypt the file or, 2) a third party breaking the
                  encryption scheme and misusing the protected
                  information.  The user accepts all responsibility
                  for his, or her own information and any methods used
                  to protect such information.  Using this command
                  signifies that you have agreed to these terms.

             4.2.6  Rename

                  This command is analogous to the DOS rename command
                  and changes a file name to a new file name.  To
                  execute this command, first place the cursor on the
                  desired file.  Then press the F2 function key and
                  select the Rename command. You will be prompted to
                  enter the new file name.  Press the ENTER key to
                  execute or if you should change your mind, you may
                  press the ESC key and cancel the request.

             4.2.7  Type

                  This command is analogous to the DOS type command
                  and types a file to the standard output (generally
                  the screen). To execute this command, first place
                  the cursor on the desired file.  Then press the F2
                  function key and select the Type command.  Press the
                  ENTER key to have the file typed out or press ESC to
                  cancel the request.

             4.2.8  Sort (Not implemented in Version 1.1)

                  This command is not implemented in DOS and allows
                  you to define how to sort and display your file box
                  information. When you issue this command you are
                  only defining the type of file sort for the current
                  session in Tshell.  See Section 2.4 "Setting Up" on
                  how to make this change permanent. To execute this
                  command, press the F2 function key and select the
                  Sort command.  You will be given a menu of file
                  attributes on which to base the sort.  You may chose
                  to sort by the file Name (the initial default),
                  Extension, Size, or Date.  The Date option will be
                  sorted first by the date and then by the time.
                  Select the Sort attribute by placing the cursor on
                  your choice and pressing ENTER or type in the first
                  letter of the attribute.  The current file box
                  information will be resorted and redisplayed.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 21


             4.2.9  Where (Not implemented in Version 1.1)

                  This command is not implemented in DOS and allows
                  you to find a misplaced file in the current drive.
                  If you know a certain file exists but cannot
                  remember which directory it is in, this command will
                  display the path to it.  To execute this command,
                  press the F2 function key and select the Where
                  command.  You will be prompted to type in the
                  desired filename and extension.  After pressing
                  ENTER, Tshell will search the entire directory
                  structure for the first occurrence of the file in
                  the structure.  If the file exists, Tshell will
                  display the path to the file.  You will then be
                  asked if you want to continue searching for other
                  occurrences of the same file.  If you respond with
                  Yes, the search will continue, otherwise you will
                  return to the file mode.

             4.3  The Function Key F5Run

                  This keystroke allows you to run or execute a
             program (file) from within Tshell.  To execute this
             command, first place the cursor on the desired program
             (file).  Then press the F5 function key and the program
             will be run.  When the program is finished, you will
             return to Tshell. There are several important points that
             you must take into consideration when using this
             keystroke:

                    1) The program (file) must have a .BAT, .COM or
                       .EXE extension.

                    2) In version 1.1, the program will not function
                       properly if it requires an argument, such as a
                       file name. Use the Function Key F7Compose or
                       F9Menu to execute any programs that require an
                       argument (see Chapter 5 for a description on
                       how to use the F7 and F9 function keys).
                       Version 2.0 will allow you to provide arguments
                       to executable files.

             4.4  The Function Key F6Edit (not in Ver. 1.1)

                  This keystroke allows you to edit a file with only
             one keystroke.  When you initially setup and customized
             Tshell for your environment you told Tshell where to find
             your favorite editor and whether or not it takes a file
             name for an argument.  Unless you have changed the
             location of your editor, Tshell remembers and does all of
             the work for you.  To execute this command simply place
             the cursor on the desired file you wish to edit and press
             the F6 function key.  Tshell will place you in your
             editor. When you end your editing session you will return
             to Tshell.


             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 22




                        CHAPTER 5  SOME THINGS NEVER CHANGE

                  You have noticed by now that we have reused a few of
             the function keys.  At times this may confuse you, but we
             feel that the changes are logical and make effective use
             of the function keys.  If you are ever confused about
             what mode you are in, look at the function key F2
             description.  If the F2 has Directory beside it, you are
             in the directory mode. If the F2 has Filetasks beside it,
             you are in the file mode.  You can also press the F1
             function key for help in determining which commands are
             available to you.

                  As the title of this chapter indicates, there are a
             few function key definitions that never change and they
             are the F1Help, F3Drive, F4Path, F7Compose, F8Setup,
             F9Menu, and F10Exit function keys.  We have already
             talked about the F1Help, F8Setup and F10Exit function
             keys in Chapter 2.  If you need help with these keys
             refer to Chapter 2.  We will discuss the remaining
             function keys here.

             5.1  The Function Key F3Drive

                  The function key F3 allows you to change the current
             drive and is analogous to the DOS "X:" command, where X
             is the new current drive.  To execute this command,
             simply press the F3 function key.  You will be prompted
             for the desired drive from a list of drives labeled A
             through some letter of the alphabet.  The highest letter
             will depend on how many drives you told Tshell you have
             in your system during the setup of your environment.  For
             example, if you have three drives then your selections
             for F3 would be "A B C".  You can move the cursor to the
             desired drive by using the left and right cursor keys, or
             you can enter the letter of the desired drive.  Tshell
             examines the disk in the selected drive and if there are
             no errors, Tshell will display the root directory
             information for the selected drive.

             5.2  The Function Key F4Path

                  This function key allows you to examine your current
             path and is analogous to the DOS cd command without any
             arguments.  To execute this command, simply press the F4
             function key and the current path will be displayed where
             the function key menu was.  Press the space bar to return
             to Tshell.







             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 23


             5.3  The Function Key F7Compose

                  This function key allows you to compose your own DOS
             command or execute a program that requires arguments.
             Once the command has been executed you will return to
             Tshell and the current file information is read from the
             disk to make sure that you have the most current
             information on the screen.

             5.4  The Function Key F9Menu (not in Ver. 1.1)

                  This function key allows you to execute one of your
             own application programs.  To execute this command,
             simply press the function key F9Menu.  The program will
             respond with a menu of application programs that you
             defined during Setup.  To execute an application program,
             simply press the key corresponding to the index of the
             desired program. See Setup for an explanation on how to
             define this key to your satisfaction.  If you have
             defined an application program to take a macro argument,
             highlight the desired file argument before you press the
             F9 function key.  During the time you have used Tshell,
             you may have noticed a file called TSHMENU.DAT.  This
             file contains your application menu definitions and must
             not be erased.
































             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


             Tshell                                            Page 24




                          APPENDIX 1  SHORTCUTS AND HINTS

                  One of the most important concepts of user-friendly
             software is that it must have features that are friendly
             to a wide range of users.  In the beginning, a user is
             not familiar with a program and needs some guidance, but
             the user who has mastered a program becomes annoyed with
             the tutorial type commands.  So we have included several
             shortcuts to increase the speed at which you can enter a
             command.

                  We have discussed how you can move the cursor among
             the subdirectories with the cursor keys. You probably
             have noticed the vertical lines numbered one through
             six.  Believe it or not there is a reason for these
             numbers.  By combining the keystrokes of ALT-1...6, you
             can go directly to the desired subdirectory without
             having to watch the cursor move around the screen.  The
             important thing here is to hold down the ALT key while
             pressing the numbered key across the top of your
             keyboard.

                  This same concept will work inside the file box.
             You will notice that to the left of each filename there
             is a letter from a to n.  If you combine the ALT key with
             one of these letters, the cursor will move directly to
             the desired file.  These indexes are fixed so the desired
             file must be in the current file window where you can see
             it.  You can also make this combination keystroke from
             the directory mode and the cursor will be placed in the
             file box, on the desired file, and you will be in the
             file mode.

                  And finally, whenever you press a function key and
             you are presented a list of options, instead of cursoring
             over to the desired option, you can simply press the
             first letter of the option.


















             BTM Software, Inc., P.O. Box  49365, Austin, Texas  78765


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0592

     Volume in drive A has no label
     Directory of A:\

    FILES592 TXT       908   8-25-86   5:39p
    GO       BAT       524   1-03-80   3:04a
    INSTALL  BAT      2756  10-31-85  11:33a
    NOTES592 TXT      1633   1-03-80   2:38a
    README   1ST      4981   1-03-86  12:52p
    SETUP    TSH     30387  11-30-85  11:20a
    TSH      DOC     84570  11-12-85  10:20p
    TSH      EXE     60363   1-03-86  12:47p
    TSH      HLP     41079  11-13-85   8:22p
    USQ      EXE     16512   9-26-85   9:34p
           10 file(s)     243713 bytes
                           74752 bytes free
