---
layout: page
title: "PC-SIG Diskette Library (Disk #1126)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1126/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1126"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHECKBOOKS & BUDGETS PLUS"

    This disk has a full-featured checkbook database, check printing and
    budgeting program which lets you keep track of your personal checking
    and savings accounts with ease. CHECKBOOKS & BUDGETS PLUS helps you
    automatically set aside a portion of your income into each different
    category in your budget. The budgeting section of the program is
    completely flexible letting you move budgeted funds from account to
    account at will.
    
    Features include: an easy-to-use, windowed, menu-driven, checkbook and
    budgeting system; full multi-colored displays with pop-up windows for
    easy readability; optional printing of industry-standard checks,
    built-in help menu system; instant hot key listings at any time from
    anywhere in the program; data-input editing and error checking, up to
    180 accounts (120 for expenses; 60 for income); and up to 192,000
    check-register entries (limited by disk space available). It uses keyed
    index files for quick data storage and retrieval and provides multiple
    format listings to screen, printer, files or print spooler. It also
    makes financial reports, automatically balances your check register,
    quickly reconciles your check register with your monthly bank statement,
    and makes financial and loan calculations. The program can also exit to
    a DOS shell.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.DOC

{% raw %}
```

 ----------------------------------------------------------------------------
  Checkbooks and Budgets Plus                 (archived on one disk)   v3.4
 ----------------------------------------------------------------------------
 This disk contains a full featured checkbook database, check printing and
 budgeting program which will allow you to painlessly keep track of your
 personal checking and savings accounts.  Checkbooks & Budgets Plus lets you
 automatically set aside a portion of your income into each different
 category in your budget.  The budgeting section of the program is completely
 flexible as it allows you to move budgeted funds from account to account at
 will.  Do not let the low registration fee fool you, this is a professional
 software package.  See the partial list of features below.


 FEATURES:

    o Professional, easy-to-use, windowed, menu-driven, checkbook and
      budgeting system
    o Full multi-colored displays with pop-up windows for easy readability
    o Optional printing of industry-standard checks
    o Built-in help menu system
    o Instant hot key listings at any time from almost anywhere
    o Data-input editing and error checking
    o Up to 180 accounts (120 for expenses; 60 for income)
    o Up to 192,000 check-register entries (limited by disk space avail.)
    o Uses keyed index files for rapid data storage and retrieval
    o Multiple format listings to screen, printer, files or print spooler
    o Generates financial reports
    o Automatically balances check register
    o Quickly reconciles check register with monthly bank statement
    o Makes financial and loan calculations
    o Automated monthly check printing


 MINIMUM REQUIREMENTS:

    o IBM PC/AT or compatible
    o Two 360K or higher floppy disk drives or
      One 360K or higher floppy disk drive and a hard disk
    o 384K memory
    o Monochrome or color monitor
    o DOS 2.0 or higher


 USAGE:

    Financial and Business


 HOW TO START:

    First type: CBRUN <press enter>

    Next type:  CBINSTAL <press enter>


 SUGGESTED DONATION:

    $20.00 to receive full featured registered version


 Files prior to unarchiving:

 CB34REG  CBF  Main registered disk archive file
 CB34UNR  CBF  Main unregistered disk archive file
 CBSEARCH CBF  CONFIG.SYS and AUTOEXEC.BAT search and update program file
 CBINSTAL BAT  Installation batch file   Type: CBINSTAL [enter]
 CBRUN    BAT  Information file on how to install CB   Type: CBRUN [enter]
 FILES    DOC  This file
 README   DOC  Latest information about installing and using CB
 README   EXE  Program for easy reading of the DOC files


 Unarchived files:

 CB       EXE  Main program
 CB       OVR  Overlay file for main program
 CB       HLP  Built-in help files for registered version of CB
 CBUNREG  HLP  Built-in help files for unregistered version of CB
 CONFIG   SYS  Configuration file with FILES=20 requirement
 CBPATH   EXE  Utility for setting Data/Overlay/Help paths into CB.EXE
 CBCNVRT  EXE  Utility to update CHCKBDGT v2.xx data files to CB v3.4
 LPTFILE  EXE  TSR for redirecting any printer output to a file
 AUTOEXEC BAT  Batch file for automatic execution of CB from a bootable disk
 filename DAT  Demo data files
 filename IDX  Demo index files


 DIGITAL PROCESSES
 P.O. Box 260
 Tujunga, CA  91043-0260
 (818) 951-2859


```
{% endraw %}

## README.DOC

{% raw %}
```

            C H E C K B O O K S  &  B U D G E T S  P L U S



 Enclosed is the checkbook and budgeting software program Checkbooks & Budgets
 Plus v3.4 (CB.EXE) for IBM personal computers or compatibles.  It requires a
 minimum of 384K of memory.  Checkbooks & Budgets Plus includes a conversion
 utility (CBCNVRT.EXE) for upgrading Checkbooks and Budgets v2.01 through v2.20
 (CHCKBDGT.COM) data files to Checkbooks & Budgets Plus v3.4 data files.  All
 data files created by the unregistered version are directly readable by the
 registered version.  The CB files are archived into a single file named
 CB34REG.CBF or CB34UNR.CBF on the enclosed disk.  To unarchive and install
 Checkbooks & Budgets Plus place the distribution disk in drive A and
 type: CBINSTAL [enter].   You will see the following:

   To install on three DSDD (360K/720K) or DSHD (1.2M/1.44M) floppies type:
       CBINSTAL  B:  3F        [enter]  {to install your own data}   or
       CBINSTAL  B:  3F  DEMO  [enter]  {installs demo data files}   or
       CBINSTAL  B:  3F  DFLT  [enter]  {installs default accounts}

   To install on two DSDD (720K) or DSHD (1.2M/1.44M) floppies type:
       CBINSTAL  B:  2F        [enter]  {to install your own data}   or
       CBINSTAL  B:  2F  DEMO  [enter]  {installs demo data files}   or
       CBINSTAL  B:  2F  DFLT  [enter]  {installs default accounts}

   To install to your hard disk type:
       CBINSTAL  [disk drive]  [path name]  [opt DEMO or DFLT]  [enter]
       example: CBINSTAL  C:  \CB        [enter]  {your data}        or
                CBINSTAL  D:  \CHECKING  [enter]  {your data}        or
                CBINSTAL  C:  \CB  DEMO  [enter]  {demo data}        or
                CBINSTAL  C:  \CB  DFLT  [enter]  {default accounts}

   NOTE: "A:" is NOT allowed as the first option - only "B:" and higher

 You MUST have FILES=20 in the file CONFIG.SYS on your boot disk!  CBINSTAL
 will check and update the CONFIG.SYS file for you.  If you are installing to
 floppies make sure you have your DOS boot disk ready with any write protection
 stickers removed.   See the instructions below for further information.

 To delete any demo files installed by this installation program
 go to the disk or directory with the data files and type: DEL *.DAT [enter]
                                                             DEL *.IDX [enter]

 CAUTION!!!   Choosing DEMO or DFLT  will overwrite any current data files!!!


 SPECIAL NOTE: To disable the ALT D TSR (Terminate and Stay Resident) portion
 of the software type: CB NOALTD <enter> on the DOS command line.


 The minimum system requirements are as follows:
    o IBM PC/AT or compatible
    o Two 360K or higher floppy disk drive
      or One 360K or higher floppy disk drive and a hard disk drive
    o 384K of system memory
    o Monochrome or color monitor
    o DOS 2.0 or higher
      (3.0 or above to use the print spooling feature)
                                                                       Page 1

 In addition, we have included a bonus Terminate and Stay Resident (TSR)
 utility program for redirecting printer output to a file.  The program is
 LPTFILE.EXE.  Unlike many TSRs it can usually be removed from memory without
 rebooting if it was the last TSR loaded.  This may be useful with CHCKBDGT.COM
 but will not be necessary with CB.EXE since this feature is built into the
 Plus version.  LPTFILE.EXE can be used with most programs which output ASCII
 text to a printer.



 FILES=20 REQUIREMENT:

 CBINSTAL will check for and update the FILES= line automatically. The
 following procedure is provided for your reference if you would like to check
 or change the CONFIG.SYS file yourself or if you did not install CB with
 CBINSTAL.

 Whether you are running CB from floppies or a hard disk you will need to make
 sure that the file CONFIG.SYS is in the root i.e. A:\ or C:\ directory.  If
 you are not sure you can find out by following these steps.

     FLOPPY BOOT DISK - place the disk which you use to boot up your computer
     in drive A and type the following:

                        A: [enter]
                        CD\ [enter]
                        TYPE CONFIG.SYS [enter]

     HARD DISK - type the following:

                        C: [enter]
                        CD\ [enter]
                        TYPE CONFIG.SYS [enter]

 For either type of disk, if the "File Not Found" message appears or if a
 listing appears that does not include a FILES=20 (or more) command then you
 should type the following:

                        COPY CONFIG.SYS+CON CONFIG.SYS [enter]
                           Make sure the spaces are in the right place.
                           At this point the word CON should appear on the
                           screen.
                        Press: [enter]
                        Type: FILES=20 [enter]
                        While holding down the CTRL key type Z
                        Press: [enter]

 If the CONFIG.SYS file does not exist, then the commands listed above will
 create the file and add the command.  If the CONFIG.SYS file does exist, the
 FILES=20 command will be appended to the file.  If more than one FILES=
 command exists in the CONFIG.SYS file then the one nearest the end of the file
 is used. If you have created or modified the CONFIG.SYS file you must turn off
 the computer and then turn it on again to cause the changes to take effect.

                                                                       Page 2

 UPDATING CB.EXE SEARCH PATH (OPTIONAL):

 CBINSTAL will automatically check and update this requirement if you are
 installing to a hard disk.  The following procedure is provided for your
 reference if you would like to check or change it yourself.

 On a hard disk if you would like to keep track of more than one check register
 from a single set of CB.EXE, CB.OVR and CB.HLP files then run CBPATH.EXE.  If,
 for example, C:\CB is your main directory and you want to have registers in
 C:\CHECKING and C:\SAVINGS then place your CB.EXE, CB.OVR, CB.HLP and
 CBPATH.EXE files in C:\CB then add C:\CB to your AUTOEXEC.BAT file's PATH line
 (see PATH in DOS manual or below i.e. PATH C:\CB;[otherpaths;]).  Run
 CBPATH.EXE while in the C:\CB directory by typing: CBPATH [enter].  Set the
 OVERLAY and HELP FILE paths to C:\CB and the DATA path to blank.  Or type:
 CBPATH C:\CB _ C:\CB [enter] at the DOS prompt (the "_" or underscore
 character is usually the shift "-" key).  Then to start CB from the
 C:\CHECKING directory or anywhere else for that matter just type CB.  If you
 plan on using multiple data floppies install CB using either of the two floppy
 installation methods given above.  Then each time you place a blank formatted
 disk in the B drive and run CB.EXE from the A drive CB will create a new set
 of check register files on the B drive disk.  Each floppy can then be setup
 for a different checking/savings account - remember to label them accordingly.
 Always back up your data files regularly!   CB has a menu driven backup
 routine for this very purpose.



 ADDING A NEW PATH (OPTIONAL):

 CBINSTAL will automatically check and update this requirement if you are
 installing to a hard disk.  The following procedure is provided for your
 reference if you would like to check or change the AUTOEXEC.BAT file yourself.

 To permanently set your computer to find and run the CB program from any
 directory or disk drive you will need to add a special line to your
 AUTOEXEC.BAT file.  This file, like the CONFIG.SYS file, must be located on
 the boot disk of your computer.  For floppy systems the AUTOEXEC.BAT file will
 be located in the A:\ directory of your boot up (DOS System) disk.  On the
 hard disk it will be located in the C:\ directory.  To see if you have an
 AUTOEXEC.BAT file do the following:

     FLOPPY BOOT DISK - place the disk which you use to boot up your computer
                        in drive A and type the following:

                        A: [enter]
                        CD\ [enter]
                        TYPE AUTOEXEC.BAT [enter]

     HARD DISK - type the following:

                        C: [enter]
                        CD\ [enter]
                        TYPE AUTOEXEC.BAT [enter]

                                                                       Page 3

 For either disk type if the "File Not Found" message appears then you will
 need to create one which includes a PATH command line.  Most hard disk systems
 will already have an AUTOEXEC.BAT file and most of them will have a PATH
 command line within them.  To modify an existing AUTOEXEC.BAT file you will
 need to use a word processor which can save the modified file as ASCII or
 unformatted text. Edlin, the DOS line editor can do this.  Read your DOS or
 word processor manual for further instructions.  The following is an example
 of a PATH command before and after adding a PATH for the CB software.

     BEFORE:   PATH C:\;C:\WORD;D:\;
     AFTER:    PATH C:\;C:\WORD;D:\;C:\CB;

 C:\CB was added as the directory with all the Checkbooks & Budgets Plus
 software.  The PATH command has the following format:

     PATH [drive:[path][;[drive:][path]...]

 To add a new PATH command to an existing or non existing AUTOEXEC.BAT file
 type the following: ( Be careful - if the AUTOEXEC.BAT file already exists
 and if it already has a PATH command line in it the following procedure will
 override the original PATH command as the new PATH command will be appended
 to the end of the file.  The last PATH command in the file takes precedence.)

                        COPY AUTOEXEC.BAT+CON AUTOEXEC.BAT [enter]
                           Make sure the spaces are in the right place.
                           At this point the word CON should appear on the
                           screen.
                        Press: [enter]
                        Type: PATH C:\CB [enter]  (or the directory(s) of your
                           choice)
                        While holding down the CTRL key type Z
                        Press: [enter]
                        Turn your computer off then back on to make the
                           AUTOEXEC.BAT file take effect.


 DIGITAL PROCESSES
 P.O. Box 260
 Tujunga, CA  91043-0260
 (818) 951-2859
                                                                       Page 4


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1126

     Volume in drive A has no label
     Directory of A:\

    CB34UNR  CBF    309616   8-12-89   1:00p
    CBINSTAL BAT      8491   8-12-89   1:00p
    CBRUN    BAT        62   8-12-89   1:00p
    CBSEARCH CBF     18288   8-12-89   1:00p
    FILES    DOC      3439   8-12-89   1:00p
    README   DOC     10622   8-12-89   1:00p
    README   EXE      8032   8-12-89   1:00p
            7 file(s)     358550 bytes
                               0 bytes free
