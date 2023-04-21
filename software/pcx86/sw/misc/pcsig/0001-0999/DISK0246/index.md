---
layout: page
title: "PC-SIG Diskette Library (Disk #246)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0246/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0246"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STOCK CHARTING SYSTEM 1 OF 2 (1354 ALSO)"

    The STOCK CHARTING SYSTEM draws or prints "volume/high/low/close"
    charts for any stock, bond, commodity, or security that has a
    high/low/close price.  Short- and long-term moving averages can be
    included on the chart and temporarily changed for "what-if"
    calculations.  The STOCK CHARTING SYSTEM is menu-driven and comes with a
    complete set of context-sensitive help screens.
    File Descriptions:
    
    AUTOEXEC BAT  Auto-start file for floppy disk only.
    SMSTART2 CTL  Introductory screen.
    SMSETUP2 CTL  System setup file.
    SM2      EXE  Startup program.
    SMMMENU2 EXE  Master Menu and configuration program.
    SMADDEL2 EXE  Stock Select screen and index file maint. prog.
    SMENTRY2 EXE  Data entry and graphics program.
    SMTRANS2 EXE  ASCII conversion program.
    BRUN30   EXE  QuickBASIC run-time routines.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0246.TXT

{% raw %}
```
Disk No:  246                                                           
Disk Title: Stock Charting System 1 of 2 (1354 also)  (Disk 1 of 2)     
PC-SIG Version: S3.9                                                    
                                                                        
Program Title: Stock Charting System                                    
Author Version: 2.55                                                    
Author Registration: $25.00.                                            
Special Requirements: CGA or equivalent, works with EGA  & most VGA, two
                                                                        
The STOCK CHARTING SYSTEM draws or prints ``volume/high/low/close''     
charts for any stock, bond, commodity, or security that has a           
high/low/close price.  Short- and long-term moving averages can be      
included on the chart and temporarily changed for ``what-if''           
calculations.  The STOCK CHARTING SYSTEM is menu-driven and comes with a
complete set of context-sensitive help screens.                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```
                      STOCK CHARTING SYSTEM - RELEASE 2.5

To obtain directions on how to get these programs running, first make sure you
are in DOS.  You should see the prompt A> (or C> if you are on a hard disk).
Remove your DOS diskette and insert the Stock Charting System diskette in drive
A.  (If you have more than one diskette, insert the STARTUP diskette).  Turn
on your printer and make sure it is ready to print.  Most printers have a ready
light, and it should be on. Then type the following command just as it appears:

                           COPY A:SMVERS25.DOC LPT1:

and press the ENTER key.  Fourteen pages of information will be printed, and
the output will be paginated with pages numbered.

To get a "snapshot" printout of this screen, first make sure your printer is
ready and then press a shift key and the PrtSc key simultaneously.  The PrtSc
key on the IBM-PC keyboard is on the second row of keys up from the bottom row,
near the right-hand side under the ENTER key.  On other keyboards it may be in
a different position.  This procedure can be used to obtain a screen printout
at almost any time, except when the screen contains graphics.
```
{% endraw %}

## SMVERS25.DOC

{% raw %}
```
STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 1 OF 14

      (C)  Copyright 1988-89 Charles L. Pack - All Rights Reserved
   QuickBASIC Compiler  (C)  Copyright 1982-87 Microsoft Corporation

                      WRITTEN BY: Charles L. Pack
            25303 La Loma Drive, Los Altos Hills, CA. 94022
            Phone: (415) 949-0887 (no collect calls please)

The purpose of this system is to draw and/or print volume-high-low-close
bar charts for stocks, commodities, mutual funds and other securities.
Short- and long-term moving average lines can optionally be included on
each chart.  Moving average periods can be changed at will, and moving
averages can be computed temporarily on a "what-if" basis, or stored
permanently on disk.  Price and volume scales can be either linear or
logarithmic.  The system does not make buy/hold/sell recommendations.

Whenever a new stock is added to the system, the user may specify daily
or weekly updating of price and volume data, and may also specify the
number (up to 319) of days or weeks of data to be retained for that
individual stock. A 360K diskette can hold 127 days or weeks of data for
each of 86 different stocks.

Volume and price data can be "imported" from an ASCII file, which may be
created by a communications or spreadsheet program external to (and not
a part of) the Stock Charting System.  Or volume and prices can be typed
in by the user from data published in Barron's (for weekly updating) or
the Wall Street Journal or other daily paper. Also, weekly-updated stock
charts can be updated directly from corresponding daily-updated charts.

Per-share annual earnings and dividends are maintained to permit compu-
tation of the price/earnings ratio and yield for each stock.  High and
low estimated 5-year prices can be entered, to permit computation of
total annual return.  This information may be obtained from the Value
Line Investment Survey or another advisory service.  Also, a stop (or
other) limit can be specified, and is indicated on the chart.

The Stock Charting System is menu-driven, allowing the user to easily
select all options without memorizing commands.  All menus have a "Help"
function; when invoked by pressing the "H" key, the directions which are
applicable to that part of the system will appear on the screen.

Hardware requirements are an IBM or other "fully compatible" personal
computer with one disk drive and 256K memory.  A color graphics adapter
(CGA) or equivalent is required for displaying or printing bar charts.
A Hercules or other "monographics" adapter may be used with the HGCIBM
simulator by Athena Digital (not included with Stock Charting System).
An Epson-compatible graphics printer is required for printing bar
charts.  IBM DOS or PC-DOS version 2.0 or later is required.  A second
floppy disk drive, or a hard disk, is recommended.  Program modules are
written in compiled BASIC with machine-language subroutines.

Permission is granted for personal use of this program, to make backup
copies, and to share this program with other individuals at no cost.
THE AUTHOR RESERVES THE SOLE and EXCLUSIVE RIGHT to distribute this pro-
gram to clubs, user groups, bulletin board systems and other institu-
tions - please write for further information.  Suggestions and comments
are welcome, and may be addressed directly to the author.  The author
makes no warranties, express or implied, and makes no recommendations to
buy or sell any security.






STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 2 OF 14

              SPECIAL INFORMATION ABOUT HERCULES GRAPHICS

If you have a Leading Edge Model D with a monochrome monitor, or if you
are using a Hercules or equivalent "monographics" card, you MUST have a
special software simulator to display the bar charts.  That software is
NOT a part of this version of the Stock Charting System.  The author re-
commends a product called HGCIBM.COM, which is available from:

Athena Digital, 2351 College Station Rd., Suite 567, Athens, GA 30605.

Phone (404) 354-4522 and ask for Gary Batson, or send $15.00 in check or
money order (includes registration).  The instructions for use with
HGCIBM.COM are not included in this document, but they will come with
that product, and you should follow those instructions for installation.

WARNING:  The HGCIBM.COM program must be installed - with the required
software switch settings - BEFORE starting the Stock Charting System.
It makes no difference whether it is installed before or after GRAPHICS
is loaded.  See Page 3 (floppy disk) or Page 6 (hard disk).  Also, it
probably should be un-installed after you are finished, if you are run-
ning other programs that use Hercules graphics directly.  Refer to the
documentation for HGCIBM.COM.


    HOW TO GET THE STOCK CHARTING SYSTEM RUNNING AS SOON AS POSSIBLE

In this document, abbreviations are used to denote certain actions.  The
< > symbols indicate a particular key to be pressed, for example <Enter>
means "press the Enter key".  The Enter key is used to indicate you are
finished entering a command or a data item.  <Enter> need not be pre-
ceeded by a space even though it is done in this document for clarity.

Some keys, such as the Esc and Ctrl keys, may be in different positions
on different keyboards.  You may have to look, or consult your computer
operations manual to find them.  The Esc key is usually in the top row,
and the Ctrl key is usually near the left side.  The Enter key has the
funny hooked arrow on it.

Commands typed into DOS may be in uppercase (CAPITAL letters) or lower-
case; for example COPY, Copy and copy are all interpreted in the same
way.  In this document, commands will be shown in uppercase.

The Stock Charting System uses the DOS system date to compute trading
periods when adding a new stock.  Therefore, it is important to enter
the correct date when the computer is started.  From the DOS prompt A>
or C>, type DATE <Enter>.  If the date is incorrect, type in a new date
in the format mm/dd/yy, for example 2/15/89.

If you have a hard disk, you must install your program on the hard disk
before running it. Instructions for hard disk installation begin on page
6.  Instructions for operation on floppy disks begin on the next page.













STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 3 OF 14

                    OPERATION FROM FLOPPY DISKETTES

The first and most important thing for you to do is to MAKE A WORKING
COPY.  The original copy of the Stock Charting System has (or, should
have!) write-protect tabs on it to prevent accidentally writing over it.
DO NOT try to use the original copy - keep that for backup!  Make at
least one working copy of the Stock Charting System and then put the
original in a safe place other than where your computer is.  This place
should be free of magnetic fields generated by vacuum cleaners, etc.

To make a working copy, insert your DOS diskette in drive A and make
sure the A> prompt is visible.  Insert a blank diskette in Drive B.
WARNING: Any data on the diskette in Drive B is about to be erased!
Type the following command:

                          FORMAT B: /S <Enter>

Follow the prompts on the screen. This will format the diskette and copy
your DOS system files (COMMAND.COM and the two hidden files) onto it, so
that it can be booted directly.  *** WARNING! *** NEVER use FORMAT by
itself.  That will format your DOS diskette, and wipe out your DOS!

A special program, from your DOS diskette, is required for printing bar
charts.  Issue the following command from the keyboard:

                       COPY GRAPHICS.* B: <Enter>

Note: in some versions of DOS - especially those from Tandy and Zenith -
the graphics print program may be called by another name.  Refer to your
DOS manual or see your dealer service department.

At this point, you may optionally copy some useful DOS utility programs
onto your working diskette.  The following are suggested, and will allow
you to format diskettes and make backup copies without going back to
your original DOS diskette:

                      COPY CHKDSK.COM B: <Enter>
                      COPY DISKCOPY.COM B: <Enter>
                      COPY DISKCOMP.COM B: <Enter>
                      COPY FORMAT.COM B: <Enter>

Now remove your DOS diskette from drive A and insert your Stock Charting
System STARTUP diskette.  The STARTUP diskette is the one with the files
BRUN30.EXE and SM2.EXE on it. If you have only one diskette, that should
be the STARTUP/PROGRAM diskette; insert that one in drive A instead.
Then type the following command:

                          COPY *.* B: <Enter>

This copies all of the individual files from the diskette in the default
drive (drive A) onto the working diskette in drive B.  You now have a
working copy of the STARTUP diskette.












STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 4 OF 14

              OPERATION FROM FLOPPY DISKETTES (continued)

Insert your DOS diskette in drive A again and make sure you have the A>
prompt.  Insert another blank diskette in drive B.  Type the command

                           FORMAT B: <Enter>

to format another diskette.  This diskette won't have DOS on it, and
therefore will not be "bootable".  At this point, you may want to format
additional diskettes for data files.  If your Stock Charting System came
on only a single STARTUP/PROGRAM diskette, skip this next step.

Remove DOS and insert the original PROGRAM diskette in drive A.  With a
formatted diskette in drive B, copy all the files from A onto B with the
following command:

                          COPY *.* B: <Enter>

You now have a working copy of the PROGRAM diskette.

At this point, make sure all diskettes are correctly labelled.  Do not
put write-protect tabs on either the working copies of the STARTUP and
PROGRAM diskettes or the on data diskettes.

Now remove the diskette in Drive A and insert a WORKING COPY of the
Stock Charting System.  If you received the Stock Charting System on two
floppies, insert the STARTUP diskette.  Do NOT try to start with the
PROGRAM diskette.  If you received only one diskette, insert that one
(it is a combined STARTUP/PROGRAM diskette).

Re-set your computer with the Ctrl-Alt-Del keys. When asked for the cur-
rent date and time, it is important to enter these items as the program
uses the DOS system date in some of its calculations.  In just a moment
the introductory screen should appear!

If you have not used these programs before, press the H (for HELP) key
for further information on how to use the system in general.  Then press
the Enter key to continue.  If you began with the STARTUP diskette, the
program will automatically prompt you to insert the PROGRAM diskette
when it is needed.  (Once you are on the PROGRAM diskette, the STARTUP
diskette is no longer used).  After this process has taken place, you
will see the Master Menu screen.

Once the Stock Charting System is running, all instructions on how to
operate it are available from within the system itself.  Note that you
can press the H (for HELP) key to get instructions from any screen that
has a menu.  Please read the HELP screens; they will answer most of your
questions.

Some demonstration data files are on the PROGRAM diskette.  To work with
these files, press S from the Master Menu.  When you are asked to enter
the disk drive and/or sub-directory for data files, press the Enter key
by itself.  Then press A from the Master Menu to go to the Stock Select
screen, and try out the various menu options in the program.










STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 5 OF 14

              OPERATION FROM FLOPPY DISKETTES (continued)

You should keep your data files (INDEXFIL.SMX and all files with names
ending in .SMP) on a separate DATA diskette, so you have plenty of space
to work with.  This will also facilitate the implementation of new pro-
gram updates.  The program diskette has only limited space, so you will
be able to add only a few stocks to the system if you try to keep both
programs and data on the same diskette (see also pages 11 and 14).

To start a new data diskette, insert a newly formatted diskette in drive
B.  From the Master Menu screen type S.  When you are asked to enter the
path (disk drive and/or sub-directory) for data files, type B: <Enter>.
(If you specify an invalid or non-existing drive, you will get an error
message so you can try again).  After a moment, the prompt "Are you
starting a new data disk (Y=Yes, N=No)?" will appear; reply Y.  The
program has recognized the empty diskette in Drive B and will automatic-
ally start asking you for information about the first stock (or other
type of security).  For more information at that time, press Esc and
then press H for HELP.

The program always remembers the previous path for data files, so that
in the future, just insert your data diskette in Drive B.  Right after
the introductory screen, the program will go directly to the Master
Menu and show you what the current path is.  You can change it any time.

If you are UPGRADING from an earlier version, you can still use all of
your old data files.  These include INDEXFIL.SMX and all other files
with names ending in .SMP. Data files created by Release 1.7 and earlier
releases will be converted automatically, so they can no longer be used
by the earlier programs.  Therefore BACK THEM UP FIRST.


              SPECIAL REQUIREMENT FOR PRINTING BAR GRAPHS

If you want to print bar graphs, you must run the GRAPHICS program -
which is a part of DOS - BEFORE starting the Stock Charting System.
From the DOS prompt A>, with your DOS diskette in Drive A, type GRAPHICS
<Enter>.  This loads into memory the program that is used by the Stock
Charting System to print graphics.  You can enter the command DIR /W
<Enter> to see if GRAPHICS is on your DOS diskette.

NOTE: In some versions of DOS - such as Tandy and Heath/Zenith - the
graphics print program may have another name which depends on the type
of printer you are using.  Refer to your DOS manual, or consult your
dealer.



















STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 6 OF 14

                      INSTALLATION ON A HARD DISK

Installation is the process of transferring the original of a program
onto a hard disk, and setting it up to operate with your particular
computer.  Installation on a hard disk drive usually consists of three
steps:  First, making a sub-directory; Second, copying the required
files; and Third, creating a batch file.  The last step is optional but
still very desirable.  *** NOTE *** If you are UPGRADING from an earlier
release of the Stock Charting System, skip now to page 9.

The Stock Charting System programs should reside in their own dedicated
sub-directory. This sub-directory may be called \SM or \STOCKS or \CHART
or whatever you want, up to 8 characters, but for explanatory purposes
here it will be called \SMPROG (for Stock Market Programs).  (See page 8
for information on sub-directories and how to make one).  Now make this
the current sub-directory by typing CD \SMPROG <Enter>.  This completes
the first step.

Insert the original Stock Charting System diskette in Drive A.  Copy all
the files to the hard disk by typing  COPY  A:*.*  /V <Enter>.  If your
version of the Stock Charting System was received on more than one disk-
ette, copy all files on EACH of them to the hard disk.  This completes
the second step.

Getting the Stock Charting System to run will require several commands.
The next thing to do is to create a batch file to start the Stock Chart-
ing system.  A batch file contains one or more DOS commands and has the
extension .BAT. When you type the name of a batch file, all the commands
in that batch file are executed, just as if you had typed them individu-
ally from the keyboard.

A batch file should reside in the root directory; so switch back there
by entering the command CD \ <Enter>.  A file can be created by copying
directly from the keyboard (CON:) to that file on disk.  Type the fol-
lowing commands:
                       COPY CON: SM.BAT <Enter>
                       CD \SMPROG <Enter>
                       GRAPHICS <Enter>
                       SM2 <Enter>
                       CD \ <Enter>
                       <F6> <Enter>

Leave out CD \ if you don't wish to return to the root directory upon
termination of the Stock Charting System.  <F6> means press the F6 key
(this is a function key on the left side of your keyboard).  You should
see the message "1 file(s) copied" and the DOS prompt C>.  The Stock
Charting System can now be started from the root directory with the
single command SM <Enter>.

If GRAPHICS.COM is not found, you will get a "command not found" message
when trying to load it.  It should be in the same directory as your DOS.
Your AUTOEXEC.BAT file should contain a PATH statement such as the fol-
lowing:  PATH  C:\DOS; C:\. If not, you will have to either add the PATH
statement to the AUTOEXEC.BAT file, or copy the GRAPHICS.COM file to the
\SMPROG directory.  If GRAPHICS.COM is not loaded BEFORE you run the
Stock Charting System, the bar graphs will not be printed correctly; you
will get letters and numbers but no lines.







STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 7 OF 14

                       OPERATION FROM A HARD DISK

NOTE:  In some Heath, Zenith and Tandy versions of DOS, the graphics
print program may have a different name, depending on the type of
printer you are using.  Check your DOS manual, or see your dealer.

From your root directory, begin operation of the Stock Charting System
with the command SM <Enter>.  In just a moment, the introductory screen
should appear!  If you have not used these programs before, press the H
(for HELP) key for further instructions on how to use the system in gen-
eral.  Then, press the Enter key to continue on to the Master Menu.

Some demonstration data files are in the program sub-directory.  To work
with these files, press S from the Master Menu.  When you are asked to
enter the disk drive and/or sub-directory for data files, press the
Enter key by itself.  Then press A from the Master Menu to go to the
Stock Select screen and try out the various menu options in the program.

Once the Stock Charting System is running, all instructions on how to
operate it are available from within the system itself.  Note that you
can press the H (for HELP) key to get instructions from any screen that
has a menu.  Please read the HELP screens, they will answer most of your
questions.

It is advisable to keep your data files (INDEXFIL.SMX and all files with
names ending in .SMP) in their own sub-directory, to facilitate direc-
tory management - especially if there could be many files.  It will be
assumed here that data files are to reside in the sub-directory called
\SMDATA\.  You can have up to 110 stocks in each sub-directory, and you
can have as many sub-directories as your disk drive has the space for!

From the Master Menu screen, press S (for Specify disk drive).  When
asked to enter the path for data files, type \SMDATA\ <Enter>.  (If you
specify an invalid or non-existing path, you will get an error message
so you can try again.  A "path" is a disk drive letter and/or sub-dir-
ectory name, for example B: or \SMDATA\ or C:\SM\FUNDS\.)  Then use the
A option from the Master Menu to go to the Stock Select screen.

Since the new sub-directory doesn't have the index file (INDEXFIL.SMX),
you will be asked, "Are you starting a new data disk (Y=Yes, N=No)?".
Reply Y and the program will create the index file and automatically
start asking you for information about the first stock (or other type of
security).  For more information at that time, press Esc and then press
H for HELP.

The program always remembers the previously entered path for data files.
So, right after the introductory screen the program will continue dir-
ectly to the Master Menu.  You can change the path for data files at any
time by using the S function.















STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 8 OF 14

             WHAT IS A "SUB-DIRECTORY", AND HOW TO MAKE ONE

A hard disk can contain hundreds of files, which could make management
of its directory very difficult.  Therefore a hard disk usually contains
a "root" directory and a number of "sub-directories", organized in a
"tree" structure. The root directory is the main directory and is always
present.  It is like the trunk of a tree, and can contain any number of
sub-directories, which are like branches of a tree.  Also, sub-direc-
tories can contain other sub-directories, up to many different levels
just like the many branches of a tree.

Another way to look at it is, the root directory of a disk(ette) is like
the master index to a big book, and the sub-directory is like the index
to an individual chapter.  I recommend keeping the directory structure
simple, with only one level of sub-directories.  Floppy diskettes can
also have sub-directories but usually they don't - while hard disks,
with their large capacity, usually do.

Usually, sub-directories contain individual categories of programs or
other files.  For example word processing programs can be in one sub-
directory, documents in another, spreadsheets in another, etc.  Ideally,
the root directory should contain only sub-directories, batch files and
certain other system files; DOS should have its own sub-directory.

The Stock Charting System programs should reside in their own dedicated
sub-directory.  To make a sub-directory, first make the root directory
active by typing CD \ <Enter>. Note the back-slash (\) is different from
the regular forward slash (/).  Sub-directory names are just like any
other file names except they always start with the back-slash (\).  The
root directory has no name and is just called \.

Sub-directory names must be unique within the directory that contains
them.  To look at sub-directory names, use DIR /W <Enter>.  Sub-direc-
tories are identified by the caption <DIR>.  It is permissible for a
sub-directory name to be the same as a file name, for example SM can
exist as a directory and again as a batch file such as SM.BAT.

Now enter the DOS command to "Make a Directory". Type in MD \xxx <Enter>
where xxx denotes a name 1 to 8 characters in length - for example type
MD \SMPROG <Enter>.  For best results, use only letters of the alphabet.
If no error message appears and the DOS prompt C> re-appears, the sub-
directory now exists.  While you are at it, you can make another sub-
directory for data files, for example type MD \SMDATA <Enter>.  To make
the program sub-directory active, type CD \SMPROG <Enter>.

WARNING: If you are not in the ROOT directory when you make a sub-direc-
tory, that sub-directory will be under the CURRENT directory that is
active at that time.  For example, if the current directory is \SMPROG
and you make a sub-directory called \SMDATA, you will have to enter the
path name \SMPROG\SMDATA\ in order to get to it.  It's usually better to
keep things more simple.

If you can't find your data sub-directory, it may have been placed acci-
dentally under a different sub-directory.










STOCK CHARTING SYSTEM - RELEASE 2.5                         PAGE 9 OF 14

UPGRADING FROM AN OLDER VERSION (1.4-1.7; 2.1-2.4) ON A HARD DISK SYSTEM

Get into DOS, as indicated by the prompt C>.  Make the sub-directory
which contains the Stock Charting System the currently active directory.
For example, use the command CD \SM <Enter>.  Use the DIR command to
make sure you are in the correct directory.  Now type in the following
commands, which will delete the old program files:

                         ERASE SM*.CTL <Enter>
                         ERASE SM*.BAS <Enter>  (2.3 & earlier)
                         ERASE SM*.EXE <Enter>  (2.40 & later)
                         ERASE SM*.H*  <Enter>

Note: the .CTL file may be absent if you were using a version earlier
than 1.7.  Re-check with the DIR command to make sure you deleted the
correct files.  Do NOT delete any of the data files, but MAKE SURE THEY
ARE BACKED UP.  (Data files are INDEXFIL.SMX, and all files with the
extension .SMP).

Insert the original copy of the Stock Charting System (Release 2.5x) in
Drive A.  You will need to copy some, but not all, of the files onto
your hard disk.  Now, type in the following commands:

                       COPY A:SM*.CTL /V <Enter>
                       COPY A:SM*.EXE /V <Enter>
                       COPY A:SM*.HLP /V <Enter>

If you received the Stock Charting System on more than one diskette,
repeat the above procedure for EACH diskette; it doesn't matter which
one is copied first.

Note: the old copy of SMSETUP2.CTL will not work with the new version of
the program.  If you try to use the old SMSETUP2.CTL, you will get an
error message saying the file is defective, and the program won't run.

Do NOT copy any of the sample data files (INDEXFIL.SMX and files with
the extension .SMP).  This will wipe out your existing index file.

You may have to modify the batch (.BAT) file which starts the program.
It should be located in the root directory and should be similar to this
after it has been changed:

                            CD \SM
                            GRAPHICS
                            SM2
                            CD \

NOTE: The command to start the program was changed to SM2 in Release
2.53, from SMSTART2 in earlier compiled versions.

Release 2.5 of the Stock Charting System will read data files created by
all earlier releases.  However, data files created by Release 1.7 and
earlier releases will be over-written with a new format, which can no
longer be used by the earlier release. Note also the new program is com-
piled, and no longer requires BASICA or GWBASIC.  However, the GRAPHICS
program is still required for printing the bar charts.  See the next
page to find out the differences among various releases.







STOCK CHARTING SYSTEM - RELEASE 2.5                        PAGE 10 OF 14

         DIFFERENCES BETWEEN THIS RELEASE AND PREVIOUS RELEASES

Release 2.5 contains the following improvements over Release 2.4:

1.  The maximum number of days/weeks of data is increased from 90 to 319
    and for older existing charts, that number can be changed at will.

2.  A Master Menu screen has been added. In addition, full color support
    with user choice of several different color schemes is available.

3.  Ability to "import" current or historical data from ASCII files.
    Also, weekly files can be updated from corresponding daily files.

4.  Improved chart formats with "zoom" feature and other enhancements.

Release 2.4 contains the following improvements over Release 2.2/2.3:

1.  The program has been compiled and runs much faster.  The program is
    now started with the command SMSTART2 instead of SMADDEL2.

2.  Data files may now be kept in their own sub-directory, separate from
    the programs.  You can have any number of data sub-directories.

3.  Improvements were made to the menu structure.  The Stock Select
    screen and the Add/Delete Stocks screen are now one in the same.

Release 2.2 contains the following improvements over Release 2.1:

1.  Tick marks have been added to the bar chart to indicate the first
    trading period date of each month.  The stop (or other) limit will
    show on the bar chart as a reduced-intensity horizontal line.

2.  If a color monitor is used, error messages show in red, and on the
    bar chart, moving average and stop limit lines are shown in color.
    (The background remains black, for maximum contrast with both color
    and monochrome monitors).  Better error trapping & documentation.

Release 2.1 contains the following improvements over Release 1.7:

1.  The original 4 program modules have been combined into two for more
    efficient operation, simpler menu structure and less disk storage.
    Programs run a little faster, and graph printing is much faster.

2.  Price history can now be printed in columnar format, in addition
    to graphic format.  A stop limit was added to the database.

3.  A Setup screen was added in Release 1.7, and improved in Release 2,
    to select system parameters such as the disk drive to be used for
    data files.  Esc key now active during data entry.  Better error
    trapping and Help screens.

Many improvements have been made as a result of user feedback.  The
author always welcomes user input, whether positive or negative.











STOCK CHARTING SYSTEM - RELEASE 2.5                        PAGE 11 OF 14

                       ABOUT DATA FILE MANAGEMENT

A data diskette or sub-directory for the Stock Charting System contains
its own index file plus one file for each stock (or other security) for
which volume and prices are maintained. The maximum number of stocks for
which data can be kept on one diskette or in one sub-directory is limit-
ed to 110. This number will be less if there are programs or other files
on a 360K diskette.

If you are using two floppy disk drives, you can have data and programs
on the same diskette, or on different diskettes.  Note that the programs
(with extension .EXE), the control files (with extension .CTL), and the
HELP screens (with extension .HLP) must always reside on the active
system drive.  This is usually drive A.  If both data and programs are
on the same 5.25" 360K diskette, space for data will be limited.  On a
higher-density diskette (3.5" or 5.25") there will be more space for
data; you could even use separate sub-directories for programs and data.

If you have two floppy disk drives and no hard disk, it is recommended
to have the programs on drive A and data on drive B.  This will make it
easier and faster to back up your data, and facilitate the installation
of subsequent and improved versions of the Stock Charting System pro-
grams.  Upgraded versions will either be able to use existing data files
directly, or will have the ability to convert older data files to a new
format.  Your data files will not be allowed to become orphans!

Each time the data for a stock is updated or changed, the associated
files are over-written on the data diskette or in the data sub-direc-
tory.  Therefore it is very important to KEEP BACKUP COPIES!

I suggest the following diskette backup scheme:  Use three diskettes and
label the three envelopes C (for current, or child), F (for Father), and
G (for Grandfather).  The envelope labelled C is of course the current,
or working, diskette.  When a copy of the current diskette is made, copy
onto the Grandfather diskette, which then becomes the new Current disk-
ette.  The old Current diskette becomes the new Father; the old Father
becomes the new Grandfather.  The diskettes are simply switched in their
envelopes.  The advantage to this scheme is that each diskette is always
used in rotation so one diskette does not tend to wear out faster than
the others.  Also, there are always three generations of data.

If you are using a hard disk, you should still back up your data files.
To do this, insert a newly formatted diskette in Drive A.  Make drive C
the active drive, and make the sub-directory which contains the stock
charting system DATA the active sub-directory.  Type the following
command: COPY INDEXFIL.SMX A: /V <Enter>.  This copies the index file.
Now type a second command as follows:  COPY *.SMP A: /V <Enter>.  This
copies all of your price history files.

It is still recommended to keep two or more backup copies!  Although
computers are usually very reliable, disk drives and disks DO wear out
over time.  A head crash or an electrical "transient" could wipe out
months of work!











STOCK CHARTING SYSTEM - RELEASE 2.5                        PAGE 12 OF 14

             DESCRIPTION OF THE STOCK CHARTING SYSTEM FILES

If you are using 5 1/4" 360KB diskettes, the Stock Charting System MUST
be distributed between two diskettes, because there is not enough room
on a single diskette for the entire system.  The following files should
be on the STARTUP diskette:

RELEASE2.5x  is the version/release number of the master diskette.  The
             file itself has no purpose except to identify what release
             it is. "x" could (if it is present) be any letter or digit.

SMSTART2.CTL is the file which contains the introductory screen.  The
             version of this file MUST match the current program version
             and not that of an earlier version.

SM2.EXE      is the program which displays the introductory screen.  The
             Stock Charting System must ALWAYS be started with this pro-
             gram.  This program automatically loads BRUN30.EXE, which
             remains in memory until you return to DOS.

BRUN30.EXE   is the run-time library which is required for any of the
             Stock Charting System programs to run. It contains routines
             which are common to all programs.  BRUN30.EXE is a part of
             the QuickBASIC compiler which is (C) Copyrighted by Micro-
             soft Corporation.

SMSTART2.HLP contains the initial HELP screens with general information
             about using the Stock Charting System.

SMVERS25.DOC is the text file which contains the information you are
             reading now.
README
READ.ME      is a short text file which explains how to print the infor-
README.DOC   mation you are reading now.

If you are using a high-density floppy diskette or a hard disk, the
above files may be on the PROGRAM diskette or in the PROGRAM sub-direc-
tory.  The files SMSTART2.CTL, SM2.EXE, BRUN30.EXE and SMSTART2.HLP all
MUST be present for the Stock Charting System to run.

All files with the extension .EXE are executable program files in native
machine language.  However, the Stock Charting System must ALWAYS be
started with the command SM2 (which may be in a batch file).





















STOCK CHARTING SYSTEM - RELEASE 2.5                        PAGE 13 OF 14

       DESCRIPTION OF THE STOCK CHARTING SYSTEM FILES (continued)

The following files must reside on the PROGRAM diskette, or in the PRO-
GRAM sub-directory:

SMSETUP2.CTL is a control file which has several functions.  If data and
             programs are on separate diskettes SMSETUP2.CTL must be on
             the PROGRAM diskette, not the data diskette.  Likewise, on
             a hard disk SMSETUP2.CTL must be in the PROGRAM sub-direc-
             tory, not the data sub-directory.

SMMMENU2.EXE is the Master Menu program.  It also allows the user to
             specify a path for data files and to select other options.

SMMMENU2.HLP contains Help screens which explain the Master Menu.

SMADDEL2.EXE displays the Stock Select screen and allows the user to
             add, delete or change stocks.  It creates and/or modifies
             the index file INDEXFIL.SMX and initializes price history
             files whenever new stocks are added to the system. A separ-
             ate price history file is created for each stock for which
             data is to be maintained.  The name of a price history file
             is the ticker symbol preceeded by D or W (daily or weekly).
             The extension is always .SMP, for example B:WIBM.SMP.

SMADDEL2.HLP contains the Help screens for SMADDEL2.EXE.

SMTRANS2.EXE is the program which "imports" current or historical data
             from an external ASCII file.  Current prices can also be
             entered manually for all stocks.  Weekly files can be up-
             dated from corresponding daily files in this program.
             Note: Manual entry of historical prices for many dates, but
             for just a selected stock, is performed in SMENTRY2.EXE.

SMTRANS2.HLP contains the Help screens which explain the updating of
             current prices for all daily files or all weekly files.

SMPRUPD2.HLP contains the Help screens which explain the import of cur-
             rent volume and prices from an ASCII file.

SMDTOWK2.HLP contains the Help screens which explain how to transfer
             data to weekly-updated files from corresponding daily-
             updated files.

SMPRHIS2.HLP contains the Help screens which explain the import of his-
             torical volume and prices from an ASCII file.

SMENTRY2.EXE is the data entry and bar graph program.  In this program,
             volume and prices for all dates for the selected stock can
             be entered manually.  In addition, moving averages are com-
             puted, bar graphs are displayed and data is stored on disk.
             It also does the printing of bar charts and tabular data.

SMENTRY2.HLP contains the Help screens for SMENTRY2.EXE when in the man-
             ual data entry mode.

SMGRAPH2.HLP contains the Help screens for SMENTRY2.EXE when in graphic
             display/print mode.






STOCK CHARTING SYSTEM - RELEASE 2.5                        PAGE 14 OF 14

         DESCRIPTION OF STOCK CHARTING SYSTEM FILES (continued)

The following files should reside on the DATA diskette, or in the DATA
sub-directory (unless data and programs are on the same diskette):

INDEXFIL.SMX is the system index file.  It contains - for each stock for
             which volume and price data are maintained - the name,
             ticker symbol, exchange, number of days/weeks of informa-
             tion, annual earnings, dividends and price goals.  If this
             file is missing, the system can automatically create it and
             ask for data on the first stock.

     xxx.SMP (where xxx is a stock symbol preceeded by D or W) - these
             are the files which contain historical volume, prices and
             moving averages.  One of these files exists for each stock,
             in addition to a corresponding entry in the index file.

A price history file requires 32 bytes of disk space for each trading
period date, plus an extra 32 bytes.  Thus, a 127-day file or a 127-week
file will require (127+1) x 32, or 4,096 bytes.  For the most efficient
use of floppy disk space, choose a number of days or weeks that's evenly
divisible by 32, minus 1.  For example 31, 63, 95, 127, ..., 319.  The
index file requires 7,168 bytes and its size will not change.

All files with the entension .HLP are standard text files which do not
contain any control characters.  Whenever the H (for Help) function is
invoked from a menu, the program looks for the appropriate file (see the
list of files on the preceding 2 pages).  If that file is not found in
the program directory, the message "Help screen not available" will
flash on the bottom line of the screen (press any other valid key to get
rid of a flashing error message).

You may delete the .HLP files if necessary to make more space on a disk-
ette.  To delete an individual file, make the diskette or sub-directory
which contains that file the active one.  Then enter the following
command: ERASE filename <Enter>.  For example, to erase the file that
contains the initial Help screen (you should have a printout or backup
copy of it first), type ERASE SMSTART2.HLP <Enter>.  To get rid of all
HELP screens, type ERASE *.HLP <Enter>.  Use DIR or DIR /W to check the
directory before and after you delete a file.  DIR shows the names of
all files in one column along with their corresponding dates and times
of last changes; DIR /W shows several file names on each line, without
the other information (/W means "Wide").

It is recommended to run the Stock Charting System with 2 disk drives,
one of which can be a hard disk. A hard disk is strongly recommended if:
a)  you have more stock charts than will fit on one diskette, or
b)  you are "importing" data from any external files.
A hard disk drive will alleviate the need for swapping diskettes, and
may speed up your programs quite a bit.

If you have any problems with the documentation in this program, please
notify the author (address & phone number on the first page).  This will
help the author to make improvements and correct errors.  Thank you!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0246

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        27   1-04-89   6:05p
    BRUN30   EXE     70680   4-07-87  10:48a
    FILE0246 TXT      1555   3-19-90   6:22p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       839   3-19-90   1:02p
    READ     ME       1189   2-19-89  11:55a
    README            1189   2-19-89  11:55a
    README   DOC      1189   2-19-89  11:55a
    RELEASE2 55        161   1-31-90   5:38p
    SM2      EXE     14577   2-05-90  10:16p
    SMSTART2 CTL      2048   2-22-90   9:34a
    SMSTART2 HLP      7936  10-29-89  10:25p
    SMVERS25 DOC     41216   2-16-89   9:56a
           13 file(s)     142644 bytes
                           13312 bytes free
