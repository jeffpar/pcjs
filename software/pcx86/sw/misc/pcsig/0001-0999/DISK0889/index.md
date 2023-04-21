---
layout: page
title: "PC-SIG Diskette Library (Disk #889)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0889/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0889"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FAMTRAK AND DOS-PRO"

    FAMTRACK is an effective management tool designed to make the
    unpleasant task of family budgeting -- if not fun -- survivable and
    profitable. It will accommodate every type of financial transaction
    common to modern families.
    
    Produce screen or printed records of monthly and year-to-date
    performance in 40 different budget categories for both husband and wife.
    It can handle as many as 20 separate financial accounts -- checking,
    savings, bank cards or charge accounts -- and will reconcile each
    account at statement time. The payment activity for as many as 21
    payees or income sources can also be tracked.
    
    Menu-driven FAMTRACK can automatically reconcile your checkbook at any
    time during the month or whenever bank statements are issued. A
    database of all financial transactions is maintained and there is an
    automatic year-end closing procedure and data storage.
    
    One of the most useful features of FAMTRACK is its loans calculator. You
    can easily calculate mortgage amortization, future values, present
    values, interest rates, payoff times, effective annual rates, and
    doubling times for any compounding period. These tools are extremely
    valuable in comparing different credit options when purchasing homes,
    automobiles, furniture, or other major items.
    
    Take real financial control and plan your future.
    
    DOS-PRO is a menu-driven utility that lists the most commonly used DOS
    commands and is very helpful to novice users. Select the command you
    want to use with the cursor. If you are unfamiliar with the use of
    that specific DOS command, an on-line help function is ready to
    explain it to you. DOS-PRO's menu occupies only one screen, and is
    divided into directory commands, format commands, and other DOS
    commands.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0889.TXT

{% raw %}
```
Disk No:  889
Disk Title: FamTrak and DOS-Pro
PC-SIG Version: 3.2

Program Title: FamTRACK
Author Version: 1.5
Author Registration: $19.95
Special Requirements: None.

FAMTRACK is an effective management tool designed to make the unpleasant
task of family budgeting -- if not fun -- survivable and profitable.  It
will accommodate every type of financial transaction common to modern
families.

Produce screen or printed records of monthly and year-to-date
performance in 20 different budget categories for both husband and wife.
It can handle as many as 20 separate financial accounts -- checking,
savings, bank cards or charge accounts -- and will reconcile each
account at statement time.

Menu-driven FAMTRACK can automatically reconcile your checkbook at any
time during the month or whenever bank statements are issued.  A
database of all financial transactions is maintained and there is an
automatic year-end closing procedure and data storage.

Take real financial control and plan your future.

File Descriptions:

-------- ---  FamTRACK.
BUDGDTA  FT1  Data file.
FT       EXE  Main program.
FT_DOC   ASC  Documentation in ASCII format.
FT_DOC   WP   Documentation in WordPerfect format.
LOANCALC EXE  Loan calculator.
LOOK     EXE  Sub-program.
TRNSREC  FT1  Data file.
------------------------------------------------------------------------
Program Title: DOS-Pro
Author Version: 1.1
Author Registration: $15.00
Special Requirements: None.

DOS-PRO is a menu-driven utility that lists the most commonly used DOS
commands and is very helpful to novice users.  Using the cursor, you
select the command you want to use.  If you are unfamiliar with the use
of that specific DOS command, an on-line help function is ready to
explain it to you.  DOS-PRO's menu occupies only one screen, and is
divided into directory commands, format commands, and other DOS
commands.

File Descriptions:

-------- ---  DOS-PRO
DPRO     MEN  Menu data file.
DPRO     HLP  On-line help file.
MENUMGR  EXE  Main program.
M        BAT  Batch file for start-up.
PLIC     EXE  Prowess Inc. license statement.
README   DOC  Documentation.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```

Readme.doc


                            DOS-PRO -- DOCUMENTATION


                           DOS-PRO - LICENSE AGREEMENT
		     Copyright 1986,1987,1988 Prowess, Inc.


     This is a user supported software product.  It is not public domain
     software, nor is it free software. You are granted a limited license
     to use this product on a trial basis.   If you continue to use this
     product after a trial period, you are expected to register by sending:
     $15 for full registration. In return, we will provide:

                             * Telephone support

                             * Update notification


		 Texas residents, please add 8% sales tax

         Contact us for information concerning low cost site licenses.

     If you like the shareware concept - try before you buy - please support the
     companies that provide useful, professional quality products.

       Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas  75238

                               (214) 349-4718


     You are encouraged to distribute copies of this software providing
     that you make no modifications to any of the files and that the copy
     that you distribute, regardless of the means of distribution, contains
     all files that came on your product diskette.

                                   DISCLAIMER
                                   ----------

     This software product and associated instructional material are sold
     "as is" without warranty as to their performance, accuracy, freedom
     from error, merchantability or fitness for any particular purpose.
     The entire risk as to the performance of the software is assumed by
     the user.

     Under no circumstances, whether in contract or tort, shall Prowess,
     Inc. be liable for indirect, consequential, special, or exemplary
     damages such as, but not limited to, loss of revenue or anticipated
     profits, lost business or other economic loss, arising out of, or
     in connection with this agreement, or your use, or inability to use
     any program or sub-program associated with this software product.

          ------------------------------------------------------------












                                    CONTENTS

                        * File descriptions

                        * Minimum system requirements

                        * Introduction

                        * Transferring files

                        * Loading/running the DOS-PRO

                        * Other Prowess, Inc. shareware products

          ----------------------------------------------------------------

                               FILE DESCRIPTIONS

          The following files are contained on your product diskette:

 README.DOC                     This file. Documentation for DOS-PRO

 MENUMGR.EXE                    The DOS-PRO menu manager program.

 DPRO.MEN                       The DOS-PRO menu data file

 DPRO.HLP                       Help file that can be called from the
                                DOS-PRO menu. Provides basic DOS information.

 PLIC.EXE                       Prowess, Inc. license statement

 M.BAT                          Automatically loads all necessary files.

             --------------------------------------------------------


                          MINIMUM SYSTEM REQUIREMENTS

      * IBM-PC or 100% compatible                    * COLOR or MONOCHROME

      * Works with DOS 2.1 (and                      * 64K RAM
        above)

      * Works best with DOS 3.1 (and
        above) on a hard disk system.

                   -------------------------------------------

                                  INTRODUCTION

DOS-PRO is a menu system that lets you easily and quickly execute DOS commands
without having to be a DOS expert. Although DOS can do many more things than are
covered on your menu screen, these are the capabilities that are most used.













All DOS-PRO files will reside on your system disk (or system directory if your
system uses a hard disk). From your system disk (or system directory), pressing

                                  M  <return>

will load your DOS-PRO menu. Pressing ESC will let you exit the menu.

An extensive help file is available that provides information about each of the
menu items. Pressing F1 will display the help file associated with the
highlighted menu item.

                  -----------------------------------------------

                              DOS-PRO INSTALLATION

Make sure that your system disk (or system directory) does not contain a file
named 'M.BAT' (not very likely). If it does not, then skip the next paragraph.

If it does, then you will first need to change the name of 'M.BAT' on the
DOS-PRO diskette to something else, say 'MU.BAT'. The following commands can be
use to accomplish the name change:

                        A:COPY M.BAT MU.BAT <return>

                        A: DEL M.BAT <return>

FOR FLOPPY SYSTEMS

                1. Copy all files from your product diskette to your system
                   diskette. (Assumes DOS-PRO disk in A and the system disk
                   in B)

                   Example: COPY *.* B:


                2. Put your DOS-PRO product diskette in a safe place.

SPECIAL NOTE:

The four necessary files for DOS-PRO menu to function (MENUMGR.EXE, DPRO.MEN,
PLIC.EXE and M.BAT) will occupy 28672 bytes on your system disk. The help file
DPRO.HLP contains extensive documentation and requires 18432 bytes of disk
space. If you are pressed for space on your system disk, and are experienced
enough not to need the help files, you can delete PDOS.HLP from your system disk
without impacting the operation of the DOS-PRO menu. (Of course, pressing F1
would result in a 'file not found' error!)

FOR HARD DISK SYSTEMS

      If you are using a hard disk, simply copy all DOS-PRO files to your root
      (system) directory. To accomplish this, put your product diskette in
      drive A. From your root directory, enter: A: <return>. At the A: prompt,

                               Enter: COPY *.* C:

            ------------------------------------------------------------










                      LOADING AND RUNNING DOS-PRO PROGRAMS


The following assumes that all of the DOS-PRO files have been transferred to
your system disk if your systems has only floppy drives, or to your root
(system) directory if your system has a hard disk.

                               Enter: M <return>
                                  or  MU <return> if you renamed the file.

This will automatically load and run the necessary files. The 'MENU OF DOS
COMMANDS' should appear. It is ready to use!

To exit the DOS-PRO program (from the menu screen) you may press ESC at any
time.

Use the arrow keys to move around the menu. Notice that each time the highlight
is moved, a one line description appears near the bottom of the screen.

Pressing F1 will call a special help file and display additional information
about the highlighted item on the menu screen.

If you press RETURN, the highlighted menu option will be executed. BE CAREFUL
when selecting any of the 'PREPARE DISKETTE' options. These will cause
formatting of the indicated disk and permanent erasure of any files that are
present on it.

                 -------------------------------------------------


      If you like this program set, try our other Prowess , Inc. shareware
      tools:
                                                                     
                                                                     
	    * $PRO - financial programs (ammortization, etc.)
	    * PLOT - function plotting (polar, rect., vectors)
	    * UNITS - units conversions (incl. systems of units)
	    * PROMENU - elegant, small, full-featured menu system
	    * AUTOMATED PLANNING FORM - excellent planning programs
                                                                     
      Prowess, Inc. shareware program sets are carried by PC-SIG and other
      major shareware distributors and many bulletin boards.
                                                                     
      Our non-shareware products include FRONT LINE MANAGER, a complete
      cost forecasting system that includes material tracking. $245
                                                                     
      DESIGNER SERIES -A large (1.2BM) technical resource that includes:
                                                                     
               * Project planning                                    
	       * Circuit design (both DC and AC) - extensive!
               * Magnetics design                                    
               * Complete function plotting (polar, rect., vectors)  
	       * Math utilities (complex numbers, line equations, etc.)
               * Units conversions                                   
               * Geometry calculations                               
	       ..over 65 menu selectable programs - on-screen help files
                                                                     
	       A productivity tool for senior engineers, yet simple enough
	       for technicians and technical students.

               CGA graphics required for many programs               
			   ..... Call for price .....



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0889

     Volume in drive A has no label
     Directory of A:\

    BUDGDTA  FT1      1005   7-18-89   7:59p
    DPRO     HLP     17914   1-12-88  11:44a
    DPRO     MEN      2711   1-12-88  10:50a
    FILE0889 TXT      2296   9-18-89   9:51a
    FT       EXE    128309   7-07-89  12:48a
    FT_DOC   ASC     25368   7-08-89   4:49p
    FT_DOC   WP      24557   7-08-89   4:47p
    GO       BAT        38   2-11-88   3:59p
    GO       TXT      1002   6-20-89   9:43a
    LOANCALC EXE     63761   7-14-89   9:59a
    LOOK     EXE     40127   5-18-89  10:39a
    M        BAT        43   5-13-87   9:53a
    MENUMGR  EXE     18608   3-29-87   2:31p
    PLIC     EXE      4377   1-12-88  10:25a
    README   DOC      9634   1-12-88  11:52a
    TRNSREC  FT1       912   7-18-89   7:58p
           16 file(s)     340662 bytes
                           13312 bytes free
