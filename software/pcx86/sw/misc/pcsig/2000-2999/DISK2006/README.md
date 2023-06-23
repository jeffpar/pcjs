---
layout: page
title: "PC-SIG Diskette Library (Disk #2006)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2006/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2006"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PERSONAL PORTFOLIO ANALYZER, DISK 1 OF 2"

    THE PERSONAL PORTFOLIO ANALYZER performs record-keeping, analysis and
    reporting on any number of portfolios containing mutual funds, stocks,
    bonds, time deposits and other securities.
    
    This program calculates market values, realized and unrealized gains and
    losses, holding periods, annual percentage returns, expected annual
    income and yield before and after taxes.  Reports, which can be
    displayed on screen or printer, include income and taxability
    analysis, realized (tax) gains and losses, and current market value
    analysis.  In addition, a list of expected income payments can be
    printed for the next 12 months.  Expected income can be broken down
    monthly for budgeting purposes, and by security type and taxability
    (non-taxable, taxable Federal and taxable State) for tax planning.
    Total market value can be broken down by security type, portfolio name
    or industry category.  Up to four portfolios may be combined in all
    reports.
    
    THE PERSONAL PORTFOLIO ANALYZER is designed to be easy to use for
    individuals and small fund managers.  Entry of the market price for one
    security, or application of a stock split or other distribution for one
    security, in any portfolio, automatically applies to that security in
    all portfolios.  Security sales may be applied on a first-in first-out
    or last-in first-out basis, or applied to a particular purchase lot.
    When necessary, a purchase lot is automatically split into two parts.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2006.TXT

{% raw %}
```
Disk No: 2006                                                           
Disk Title: Personal Portfolio Analyzer, disk 1 of 2                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: PERSONAL PORTFOLIO ANALYZER                              
Author Version: 2.1                                                     
Author Registration: $25.00                                             
Special Requirements: None, but 4-D recommended.                        
                                                                        
THE PERSONAL PORTFOLIO ANALYZER performs record-keeping, analysis and   
reporting on any number of portfolios containing mutual funds, stocks,  
bonds, time deposits and other security types.                          
                                                                        
This program calculates market values, realized and unrealized gains and
losses, holding periods, annual percentage returns, and expected annual 
income and yield before and after taxes.  Reports, which can be         
displayed on screen or printer, include income and taxability           
analysis, realized (tax) gains and losses, and current market value     
analysis.  In addition, a list of expected income payments can be       
printed for the next 12 months, for a checklist.  Expected income can be
broken down monthly for budgeting purposes, and by security type and    
taxability (non-taxable, taxable Federal and taxable State) for tax     
planning.  Total market value can be broken down by security type,      
portfolio name or industry category.  Up to four portfolios may be      
combined in all reports.                                                
                                                                        
THE PERSONAL PORTFOLIO ANALYZER is designed to be easy to use for       
individuals and small fund managers.  Entry of the market price for one 
security, or application of a stock split or other distribution for one 
security, in any portfolio, automatically applies to that security in   
all portfolios.  Security sales may be applied on a First-In First-Out  
or Last-In First Out basis, or applied to a particular purchase lot.    
When necessary, a purchase lot is automatically split into two parts.   
                                                                        
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
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #2006  PERSONAL PORTFOLIO ANALYZER  >>>>           ║
║                        (disk 1 of 2, 2007 also)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: PA2          (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY PAVER21.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PAVERS21.DOC

{% raw %}
```
THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 1 OF 14

                 (C) Copyright 1987-89 Charles L. Pack
    QuickBASIC Compiler (C) Copyright 1982-87 Microsoft Corporation

                      WRITTEN BY: Charles L. Pack
            25303 La Loma Drive, Los Altos Hills, CA. 94022
            Phone: (415) 949-0887 (no collect calls please)

Permission is granted for personal use of this software, to make backup
copies, and to share it with other individuals at no cost to them.  The
author reserves the SOLE and EXCLUSIVE RIGHT to distribute this software
to clubs, user groups, bulletin boards and other institutions - please
write for further information. Suggestions and comments are welcome, and
may be addressed directly to the author.  The author makes no warranties
or guarantees, express or implied, and makes no recommendations to buy
any security.  The author is not an expert at taxes and accounting.

The Personal Portfolio Analyzer performs record-keeping, numerical
analysis and reporting on existing portfolios of stocks, bonds, mutual
funds, cash and other types of securities.  To do this, it maintains a
Catalog file containing the name, ticker symbol or other identifier, ma-
turity date or industry category, expected income, taxability and other
information on up to 255 different securities. In addition, it maintains
any number of Portfolio files, each containing up to 255 transactions in
any securities which exist in the Catalog.  The Catalog and least 20
Portfolios will fit on a 5 1/4" double-sided (360K byte) diskette.  Most
of the information is typed in from a stock guide and broker or fund
advices, and current market prices are typed in from a newspaper.

The Personal Portfolio Analyzer calculates market values, realized and
unrealized gains and losses, holding periods, annual percentage returns,
and expected annual income and yield before and after taxes.  Reports,
which can be displayed on screen or printer, include income and taxabil-
ity analysis, realized (tax) gains and losses, and current market value
analysis. In addition, a list of expected income payments can be printed
for the next 12 months, for a checklist.  Expected income can be broken
down monthly for budgeting purposes, and by security type and taxability
(non-taxable, taxable Federal and taxable State) for tax planning. Total
market value can be broken down by security type, portfolio name or in-
dustry category.  Up to four portfolios may be combined in all reports.

The Personal Portfolio Analyzer is designed to be easy to use for indi-
viduals and small fund managers.  Entry of the market price for one se-
curity, or application of a stock split or other distribution for one
security, in any portfolio, automatically applies to that security in
all portfolios.  Security sales may be applied on a First-In First-Out
or Last-In First Out basis, or applied to a particular purchase lot.
When necessary, a purchase lot is automatically split into two parts.
The system is menu-driven, allowing the user to easily select all of the
options without memorizing commands.  All menus have a "Help" function;
when invoked by pressing the "H" key, directions applicable to that part
of the system will appear on the screen.

The minimum hardware requirements are an IBM-compatible personal com-
puter with 256K memory, one disk drive and DOS 2.0 or a later version.
A second floppy disk or hard disk drive and an 80-column printer are
recommended.  A graphics adapter is not required.  The programs are
written in compiled BASIC, and are NOT copy-protected.







THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 2 OF 14

                  I N S T A L L A T I O N   G U I D E

HOW TO GET THE PERSONAL PORTFOLIO ANALYZER RUNNING - AS SOON AS POSSIBLE

In this document, abbreviations are used to denote certain actions.  The
< > symbols indicate a particular key to be pressed, for example <Enter>
means "press the Enter key".  The Enter key is used to indicate you are
finished entering a command or a data item. <Enter> need not be preceded
by a space even though it is done in this document for clarity.

Some keys, such as the Esc and Ctrl keys, may be in different positions
on different keyboards.  You may have to look, or consult your computer
operations manual to find them.  The Esc key is usually in the top row,
and the Ctrl key is usually near the left side.  The Enter key has the
funny hooked arrow on it.

Commands typed into DOS may be in uppercase (CAPITAL letters) or lower-
case; for example COPY, Copy and copy are all interpreted in the same
way.  In this document, commands will be shown in uppercase.

The Personal Portfolio Analyzer may use the DOS system date to select
data for reports.  Therefore, it is important to enter the correct date
when the computer is started.  From the DOS prompt A> or C>, type DATE
<Enter>.  If the date is incorrect, type in a new date in the format
mm/dd/yy, for example 1/9/89.

If you have a hard disk, you must install your program on the hard disk
before running it. Instructions for hard disk installation begin on page
6.  Instructions for operation on floppy disks begin on the next page.



































THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 3 OF 14

                    OPERATION FROM FLOPPY DISKETTES

The first and most important thing for you to do is to MAKE A WORKING
COPY.  The original copy of the Personal Portfolio Analyzer has (or
should have!) write-protect tabs on it to prevent accidentally writing
over it.  DO NOT try to use the original copy - keep that for backup!
Make at least one working copy of the Personal Portfolio Analyzer and
then put the original in a safe place other than where your computer is.
This place should be free of magnetic fields generated by appliances
such as vacuum cleaners.

To make a working copy, insert your DOS diskette in drive A and make
sure the A> prompt is visible.  Insert a blank diskette in Drive B.
WARNING: Any data on the diskette in Drive B is about to be erased!
Type the following command:

                          FORMAT B: /S <Enter>

Follow the prompts on the screen. This will format the diskette and copy
your DOS system files (COMMAND.COM and the two hidden files) onto it, so
that it can be booted directly.  *** WARNING! *** NEVER use FORMAT by
itself.  That will format your DOS diskette, and wipe out your DOS!

At this point, you may optionally copy some useful DOS utility programs
onto your working diskette.  The following are suggested, and will allow
you to format diskettes and make backup copies without going back to
your original DOS diskette:

                        COPY CHKDSK.COM B: <Enter>
                        COPY DISKCOPY.COM B: <Enter>
                        COPY DISKCOMP.COM B: <Enter>
                        COPY FORMAT.COM B: <Enter>

Now remove your DOS diskette from drive A and insert the Personal Port-
folio Analyzer STARTUP diskette.  The STARTUP diskette is the one with
the files BRUN30.EXE and PA2.EXE on it.  If you have only one diskette,
that should be the STARTUP/PROGRAM diskette; insert that one in drive A
instead.  Then type the following command:

                          COPY *.* B: <Enter>

This copies all of the individual files from the diskette in the default
drive (drive A) onto the working diskette in drive B.  You now have a
working copy of the STARTUP diskette.  The diskette can be "booted" di-
rectly without inserting DOS first.



















THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 4 OF 14

              OPERATION FROM FLOPPY DISKETTES (continued)

Insert your DOS diskette in drive A again and make sure you have the A>
prompt.  Insert another blank diskette in drive B.  Type the command

                           FORMAT B: <Enter>

to format another diskette.  This diskette will not have DOS on it, and
therefore will not be "bootable".  At this point, you may also want to
format additional diskettes for data files.  If your Personal Portfolio
Analyzer came on only a single STARTUP/PROGRAM diskette, skip this next
step.  The diskette you just formatted can be used as a DATA diskette.

Remove DOS and insert the original PROGRAM diskette in drive A.  With a
formatted diskette in drive B, copy all the files from A onto B with the
following command:

                          COPY *.* B: <Enter>

You now have a working copy of the PROGRAM diskette.

At this point, make sure all diskettes are correctly labelled.  Do not
put write-protect tabs on either the working copies of the STARTUP and
PROGRAM diskettes or on the data diskettes.

Now remove the diskette in Drive A and insert a WORKING COPY of the
Personal Portfolio Analyzer.  If you received the Personal Portfolio
Analyzer on two floppies, insert the STARTUP diskette.  DO NOT try to
start with the PROGRAM diskette.  If you received only one diskette,
insert that one (it should be a combined STARTUP/PROGRAM diskette).

Re-set your computer with the Ctrl-Alt-Del keys. When asked for the cur-
rent date and time, it is important to enter these items as the program
uses the DOS system date in some of its calculations.  In just a moment,
the introductory screen should appear!

If you have not used these programs before, press the H (for HELP) key
for further information on how to use the system in general.  Then press
the Enter key to continue.  If you began with the STARTUP diskette, the
program will automatically prompt you to insert the PROGRAM diskette
when it is needed.  (Once you are on the PROGRAM diskette, the STARTUP
diskette is no longer used).  After this process has taken place, you
will see the Master Menu screen.

Once the Personal Portfolio Analyzer is running, all instructions on how
to operate it are available from within the system itself. Note that you
can press the H (for HELP) key to get instructions from any screen that
has a menu.  Please read the HELP screens; they will answer most of your
questions.

Some demonstration data files are on the PROGRAM diskette.  To work with
these files, press S from the Master Menu.  When you are asked to enter
the disk drive and/or sub-directory for data files, press the Enter key
by itself (this selects the default directory which is the PROGRAM disk-
ette).  Then press C.  The program will ask for the name of the active
portfolio; type DEMOFILE and press the Enter key two times. Again, press
H (for HELP) to get on-screen explanation of the Master Menu selections.







THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 5 OF 14

              OPERATION FROM FLOPPY DISKETTES (continued)

IMPORTANT: It is highly recommended that you keep all of your own port-
folio data on a separate diskette, which will be in drive B.  This will
facilitate making backup copies of your data and installing new versions
of the program.

To start a new portfolio diskette, insert a newly formatted diskette in
drive B.  From the Master Menu press S (for Specify Path) and type B:
<Enter>.  (If you sepcify an invalid or non-existing drive, you will get
an error message so you can try again). Next, press C (for Change active
portfolio) and enter a name for the new portfolio.  Each portfolio is
identified by a unique name up to 8 characters long, such as PERSONAL or
TRUSTFUN. Type in the name and press the Enter key two times. This makes
that portfolio active for both updating and reporting.  The portfolio
will be initialized later, just before you enter your first purchase.

From the Master Menu, press A to Add a security. The program will recog-
nize the empty diskette in drive B and ask "Are you starting a new data
disk?".  Ignore the flashing message "Wrong disk in drive, or missing
file", and respond Y (for Yes).  Enter 255 for the maximum number of
entries, and a new Catalog file will be initialized.  You will then
automatically be prompted to start entering data for the first security.
It is recommended to read the Help screens first.  To do this, press Esc
and then H. After reading the Help screens, press Esc again, and then A.
Enter data for one or more securities, as you wish.

Now, move the selector block to a security you wish to buy, and press B.
If the portfolio doesn't exist yet, you will be asked "Are you starting
a new portfolio?".  Again, ignore the flashing message "Wrong disk in
drive, or missing file", and respond Y. Enter 255 for the maximum number
of entries and a new Portfolio will be initialized.  You will then auto-
matically be prompted to start entering data for your first purchase.
To read the Help screens first, press Esc and then H.

If you have only one disk drive (such as on the PC Jr.) you MUST use the
program diskette for data files.  Programs and data can be on the same
diskette, but space will be limited.  There are two ways to get around
the space problem.  Use smaller data files and erase files that aren't
needed; you can erase the sample data files if you wish, and start new
files using the same procedures as in the above paragraphs.  Also, you
can erase Help screens (.HLP files) to get more space on a diskette.

When new catalog or portfolio files are started, the program asks for
the maximum number of entries, which in each case is 255.  You can enter
smaller numbers.  The catalog file requires 128 bytes for each security,
plus one extra. A portfolio file requires 64 bytes for each transaction,
plus one extra.  The program will round the numbers you type in upwards
so that a multiple of 2,048 bytes will be used.  Enough space should be
allowed in each file so that records can be added later.

Maximum # of data records     255     191     127     63     31     15
No. of bytes in Catalog     32,768  24,576  16,384  8,192  4,096  2,048
No. of bytes in Portfolio   16,384  12,288   8,192  4,096  2,048    --

You can have as many portfolios on a diskette as will fit.  Selling a
security does not generate another transaction record, as there is space
on each record for both the purchase and the sale.






THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 6 OF 14

                      INSTALLATION ON A HARD DISK

Installation is the process of transferring the original of a program
onto a hard disk, and setting it up to operate with your particular
computer.  Installation on a hard disk usually consists of three steps:
First, making a sub-directory; Second, copying the required files; and
Third, creating a batch file.  The last step is optional but still very
desirable.  *** NOTE *** If you are UPGRADING from an earlier release of
the Personal Portfolio Analyzer, skip now to page 9.

The Portfolio Analyzer should reside in its own dedicated sub-directory.
This sub-directory may be called \PA or \STOCKS or whatever you want, up
to 8 characters, but for explanatory purposes here it will be called
\PAPROG (for Portfolio Analyzer Programs).  (See page 8 for information
on sub-directories and how to make one).  Now make this the current sub-
directory by typing CD \PAPROG <Enter>.  This completes the first step.

Insert the Personal Portfolio Analyzer STARTUP diskette in Drive A.
(If you have only one diskette, insert the STARTUP/PROGRAM diskette).
Copy the files to the hard disk with the command COPY A:*.* /V <Enter>.
If you have a separate PROGRAM diskette, repeat this step with that one,
also.  Now, make the ROOT directory active by typing CD \ <Enter>.
This completes the second step.

The commands to start the Portfolio Analyzer can optionally be stored in
a batch file which should be located in the root directory. A batch file
has the extension .BAT. When the name of that file is typed as a command
from the DOS prompt, all commands in that file are executed as if they
had been typed individually.  To create this batch file, make sure the
root directory is active (use the DIR command to check), and enter the
following commands:
                        COPY CON: PA.BAT <Enter>
                        CD \PAPROG <Enter>
                        PA2 <Enter>
                        CD \ <Enter>
                        <F6> <Enter>

Leave out CD \ if you don't wish to return to the root directory upon
termination of the Portfolio Analyzer.  <F6> means press the F6 key
(this is a function key on the left side of your keyboard).  You should
see the message "1 file(s) copied" and the DOS prompt C>. The Portfolio
Analyzer can now be started from the root directory with the single
command PA <Enter>.

When you first start the Portfolio Analyzer, you will see the introduc-
tory screen.  If you have not used these programs before, press the H
(for HELP) key for general information on how to use the system.  Press
Enter to continue from the introductory screen to the Master Menu.  Once
the program is running, all instructions on how to operate it are avail-
able from within the program itself.  Note that you can press the H (for
HELP) key to get instructions from any screen that has a menu.  Please
read the HELP screens; they will answer most of your questions.












THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 7 OF 14

                        OPERATION ON A HARD DISK

Some demonstration data files are in the PROGRAM sub-directory.  To work
with these files, press S from the Master Menu.  When you are asked to
enter the path for data files, press the Enter key by itself (this will
select the default, which is the PROGRAM directory).  Then press C.  The
program will ask for the name of the active portfolio; type DEMOFILE and
press the Enter key two times.  Again, press H (for HELP) to get an on-
screen explanation of the Master Menu selections.

IMPORTANT:  It is highly recommended that you keep all of your own port-
folio data in a separate sub-directory.  This will facilitate making
backup copies of your data and installing new versions of the program.

For instructive purposes here, the DATA sub-directory will be called
\PADATA (but you can use any name you want).  Get into the ROOT direc-
tory by typing CD \ <Enter>, and verify that you are in the correct one
(use the DOS command DIR).  To make the data directory, type MD \PADATA
<Enter>.  Now start the Portfolio Analyzer by typing PA <Enter>, and get
into the Master Menu.

From the Master Menu press S (for Specify Path) and then type \PADATA\
<Enter>.  (If you specify an invalid or non-existing path, you will get
an error message so you can try again). Next, press C (for Change active
portfolio) and enter a name for the new portfolio.  Each portfolio is
identified by a unique name up to 8 characters long, such as PERSONAL or
TRUSTFUN. Type in the name and press the Enter key two times. This makes
that portfolio active for both updating and reporting.  The portfolio
will be initialized later, just before you enter your first purchase.

From the Master Menu, press A to Add a security. The program will recog-
nize the empty directory and ask "Are you starting a new data disk?".
Ignore the flashing message "Wrong disk in drive, or missing file", and
respond Y (for Yes).  Enter 255 for the maximum number of entries, and a
new Catalog file will be initialized.  You will then automatically be
prompted to start entering data for the first security.  It is recommen-
ded to read the HELP screens first.  To do this, press Esc and then H.
After reading the HELP screens, press Esc again, and then A.  Enter data
for one or more securities, as you wish.

Now, move the selector block to a security you wish to buy, and press B.
If the portfolio doesn't exist yet, you will be asked "Are you starting
a new portfolio?".  Again, ignore the flashing message "Wrong disk in
drive, or missing file", and respond Y. Enter 255 for the maximum number
of entries and a new Portfolio will be initialized.  You will then auto-
matically be prompted to start entering data for your first purchase.
To read the HELP screens first, press Esc and then H.

You can have as many different portfolios as you want, as long as there
is space on your disk. The security entries in the Catalog file apply to
ALL Portfolio files which are in the same sub-directory.  Within a port-
folio, selling a security does not generate another transaction record,
as there is space on each record for both the purchase and the sale.











THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 8 OF 14

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
with their much greater capacity, usually do.

Usually, sub-directories contain individual categories of programs or
other files.  For example word processing programs can be in one sub-
directory, documents in another, spreadsheets in another, etc.  Ideally,
the root directory should contain only sub-directories, batch files and
certain other system files; DOS should have its own sub-directory.

The Portfolio Analyzer should reside in its own dedicated sub-directory.
To make a sub-directory, first make the root directory active by typing
the DOS command CD \ <Enter>.  CD stands for "change directories".  Note
the back-slash (\) is different from the regular forward slash (/). Sub-
directory names are just like any other file names except they always
start with the back-slash (\).  The root directory has no name and is
just called \.

Sub-directory names must be unique within the directory that contains
them.  To look at sub-directory names, use DIR /W <Enter>.  Sub-direc-
tories are identified by the caption <DIR>.  It is permissible for a
sub-directory name to be the same as a file name, for example PA can
exist as a directory and again as a batch file such as PA.BAT.

Now enter the DOS command to "make a directory". Type in MD \xxx <Enter>
where xxx denotes a name 1 to 8 characters in length - for example type
MD \PAPROG <Enter>.  For best results, use only letters of the alphabet.
If no error message appears and the DOS prompt C> re-appears, the sub-
directory now exists.  While you're at it, you can make another sub-dir-
ectory for your portfolio data files.  For example type MD \PADATA
<Enter>.  To make the PROGRAM directory active, type CD \PAPROG <Enter>.

WARNING: If you are not in the ROOT directory when you make a sub-direc-
tory, that sub-directory will be under the CURRENT directory that is
active at that time.  For example, if the current directory is \PAPROG
and you make a sub-directory called \PADATA, you will have to enter the
path name \PAPROG\PADATA\ in order to get to it.  It's usually better to
keep things more simple.

If you can't find your data sub-directory, it may have been placed acci-
dentally under a different sub-directory.









THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1               PAGE 9 OF 14

                 UPGRADING FROM AN OLDER VERSION (2.xx)

You can still use your existing data files (files with names ending in
.POR).  Data files used with Release 2.1 can also be used with Release
2.04, except the industry category will not be shown.  WARNING: The .CTL
files are NOT interchangeable among different versions of the program.
NOTE:  The Release 2.1 Portfolio Analyzer starts with the command PA2,
not PASTART2 as in Release 2.04.

If you are using floppy disks, follow the directions on pages 3-5.  If
you are using a hard disk, follow the directions in the next paragraphs.

Get into DOS, as indicated by the C> prompt.  Make the sub-directory
which contains the Personal Portfolio Analyzer PROGRAMS the currently
active directory.  For example, type CD \PAPROG <Enter>.  Verify that
you are in the correct directory!  Enter the following commands, which
will delete the old program files:

                         ERASE PA*.CTL <Enter>
                         ERASE PA*.EXE <Enter>
                         ERASE PA*.HLP <Enter>
                         ERASE RELEASE*.* <Enter>

You should also erase the README and .DOC files if they are present.
Do not erase any of your personal data files, as they can still be used.

Insert the original copy of the Personal Portfolio Analyzer (Release
2.1) in Drive A.  You will need to copy some, but not all, of the files
onto your hard disk.  Now type the following commands:

                       COPY A:PA*.CTL /V <Enter>
                       COPY A:PA*.EXE /V <Enter>
                       COPY A:PA*.HLP /V <Enter>
                       COPY A:RELEASE*.* <Enter>

If you received the Personal Portfolio Analyzer on more than one
diskette, repeat the above procedure for EACH diskette; it doesn't
matter which one is copied first.

WARNING: the old .CTL files will not work with the new version of the
program.  If you try to use the old .CTL files, you will get an error
message and the program won't run.  If you copy the new sample data
files, they will over-write and destroy the old data files.

You may also have to modify your existing batch (.BAT) file which is
used to start the program.  It should be located in the ROOT directory.
Release 2.1 of the Personal Portfolio Analyzer starts with the command
PA2; Release 2.04 started with PASTART2.
















THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1              PAGE 10 OF 14

         DIFFERENCES BETWEEN THIS RELEASE AND PREVIOUS RELEASES

Release 2.11 of the Personal Portfolio Analyzer contains the following
improvements over Release 2.04:

1.  File PASTART2.EXE has been replaced with the separate files PA2.EXE,
    PAMMENU2.EXE and PADDELS2.EXE.  The Portfolio Analyzer now requires
    two 360K diskettes.  See pages 12-13 for more information.

2.  A new Video function was added to the Master Menu.  It allows you to
    specify any one of ten different color schemes (including monochrome
    if you don't have a color monitor).  Also the (S)pecify Path and
    (C)hange Active Portfolio functions have been improved.

3.  A "precious metals" security type has been added, for things like
    silver and gold bars and coins.  (Futures contracts are still "puts"
    or "calls").

4.  Current prices are now displayed and entered in the Add/Delete
    Securities screen.  They are no longer entered in the Market Value
    Analysis screen.  This makes it easier to update prices for all
    portfolios at the same time.

5.  "Yank out" has been replaced by "Wipe out", for deleting a security
    or a transaction.  The screen action that occurs when deleting or
    adding a security or a transaction has been improved.  When adding
    an item, the new data is now displayed in correct sequence instead
    of temporarily near the bottom of the screen.

6.  The "Change" function has been improved.  You can now move the
    selector bar horizontally to select a data item to be changed.

7.  In all screens, negative (loss) amounts are shown in red (if you
    have a color monitor).  If you use a monochrome monitor, losses and
    some other items are shown in bright, emphasized characters.

8.  Up to four portfolios can be combined in all the report functions.
    Their names are specified under the (C)hange Active Portfolio
    function in the Master Menu.

9.  You can now list individual income payments, as a checklist for the
    next 12 months.  Also in the Income/Tax analysis report, you can
    select records by security type; for example you can select all
    bonds and cash accounts.

10. In the Realized Gain/Loss report, you can have the entries sorted by
    holding period.  A "bug" that caused the program to fail when the
    holding period was zero has been fixed.

11. In the Market Value Analysis report, you can select records by
    security type, for example you can select all cash accounts and
    common stocks.  Also, the totals can be broken down by portfolio
    name or by industry category.  An individual portfolio could repre-
    sent a particular broker or advisor.

12. Other less noticeable improvements have been made in error recovery,
    better menu formats and better prompts.







THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1              PAGE 11 OF 14

                       ABOUT DATA FILE MANAGEMENT

For greatest speed and efficiency - especially with floppy disks - all
file maintenance is performed in memory.  Whenever a Catalog or a Port-
folio is created, it is initialized on disk with the maximum number of
records, up to 255, which is specified by the user. Initialization on
disk at the maximum size insures that during file maintenance operations
the user will not run out of disk space and lose data.  The maximum file
size of 255 records should not be a problem for most individuals and
small fund managers.

Data files created by the Personal Portfolio Analyzer are stored on disk
in a binary format and are not compatible with any other files.  Techni-
cally speaking, they are random-access files in BASIC for greatest speed
and efficiency.  They cannot be read with the popular spreadsheet or
database programs.

Each time a data file is updated or changed, it is over-written on disk.
The actual writing on disk takes place automatically (if any changes
have been made) when you use the EXIT or QUIT functions, or when you
switch between the Add/Delete Securities screen and the Add/Delete
Portfolio Transactions screen.  Therefore, it is very important to KEEP
BACKUP COPIES on a regular schedule such as weekly or monthly.

I suggest the following diskette backup scheme:  Use three diskettes and
label the three envelopes C (for current, or child), F (for Father), and
G (for Grandfather).  The envelope labelled C is of course the current,
or working, diskette.  When a copy of the current diskette is made, copy
onto the Grandfather diskette, which then becomes the new Current disk-
ette.  The old Current diskette becomes the new Father; the old Father
becomes the new Grandfather.  The diskettes are simply switched in their
envelopes.  The advantages to this scheme are that each diskette is
always used in rotation so one diskette does not tend to wear out faster
than the others; and there are always three generations of data.

If you are using a hard disk, it is just as important to back up your
data files!  To do this, insert a newly formatted diskette in Drive A.
Make drive C the active drive and make the sub-directory which contains
the portfolio DATA files the active sub-directory.  Type the following
command: COPY *.POR A: /V <Enter>.  This copies both the catalog file
and all the portfolio files.  It is still recommended to keep two or
more backup copies, as described above.






















THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1              PAGE 12 OF 14

                          DESCRIPTION OF FILES

If you are using 5.25" 360K diskettes, the Personal Portfolio Analyzer
MUST be distributed between two diskettes, because there is not enough
room on a single diskette for the entire system.  The following files
should be on the STARTUP diskette:

RELEASEv.rr  is the version/release number of the master diskette.  This
             file itself has no purpose except to identify the diskette.
             If you have a startup and a program diskette, this file
             should exist on both diskettes.

AUTOEXEC.BAT is a batch file to start the Portfolio Analyzer funning on
             floppy diskettes.

     PA2.BAT is a batch file to start the Portfolio Analyzer running on
             a hard disk.

PASTART2.CTL is the file which contains the introductory screen.  The
             version of this file MUST match the current program version
             and not that of an earlier version.

     PA2.EXE is the program which displays the introductory screen.  The
             Portfolio Analyzer must ALWAYS be started with this pro-
             gram.  This program automatically loads BRUN30.EXE, which
             remains in memory until you return to DOS.

  BRUN30.EXE is the run-time module which is required for any of the
             Portfolio Analyzer programs to run.  It contains routines
             which are common to all programs.  BRUN30.EXE is a part of
             the QuickBASIC compiler which is (C) Copyrighted by Micro-
             soft Corporation.

PASTART2.HLP contains the initial HELP screens with general information
             about using the Personal Portfolio Analyzer.

PAVERS21.DOC is the text file which contains the information you are
             reading now.

  README
    READ.ME  is a short text file which explains how to print the infor-
  README.DOC mation you are reading now.

If you are using a high-density floppy disk (720K or more) or a hard
disk, the above files should be on the PROGRAM diskette or in the PRO-
GRAM sub-directory.  The files PASTART2.CTL, PA2.EXE, and BRUN30.EXE
MUST be present for the Portfolio Analyzer to run.  PASTART2.HLP must
also be present if you want to have the initial HELP screen available.

All files with the extension .EXE are executable program files in native
machine language.  However, the Personal Portfolio Analyzer must ALWAYS
be started with the command PA2 (which may be in a batch file).












THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1              PAGE 13 OF 14

                    DESCRIPTION OF FILES (continued)

The following files must reside on the PROGRAM diskette, or in the PRO-
GRAM sub-directory:

PASETUP2.CTL is a control file which has several functions.  If data and
             programs are on separate diskettes PASETUP2.CTL must be on
             the PROGRAM diskette, not the data diskette.  Likewise, on
             a hard disk PASETUP2.CTL must be in the PROGRAM sub-direc-
             tory, not the data sub-directory.

PAMMENU2.EXE is the Master Menu program.  It also allows the user to
             specify the path for data files, to select the active port-
             folios for updating and reports, and to select the colors
             for video display.

PAMMENU2.HLP is the HELP screen which explains the Master Menu.

PADDELS2.EXE displays the Add/Delete Securities screen and performs all
             file maintenance on the Catalog file.  This is also where
             you enter the current market values for all securities.

PADDELS2.HLP is the HELP screen for Add/Delete Securities.

PASTYPE2.HLP is the HELP screen which explains all of the different
             security types.

PATRANS2.EXE is the Add/Delete Portfolio Transactions program.  It cre-
             ates and/or modifies the currently active portfolio file.
             (A portfolio file is made active for updates in the Master
             Menu with the C function).  PATRANS2 will initialize a
             portfolio file if it doesn't yet exist.

PATRANS2.HLP is the HELP screen for Add/Delete Portfolio Transactions.

PASALES2.HLP is the HELP screen that can be activated when selling a
             security in PATRANS2.  It explains the ways in which shares
             sold can be allocated to shares on hand.

PAINTAX2.EXE is the income and taxability analysis report program.
PAINTAX2.HLP is the Help screen for PAINTAX2.EXE.
PAREGAL2.EXE is the realized gain/loss report program.
PAREGAL2.HLP is the Help screen for PAREGAL2.EXE.
PAMVALU2.EXE is the market value analysis program.
PAMVALU2.HLP is the Help screen for PAMVALU2.EXE.

Note: PAINTAX2, PAREGAL2 AND PAMVALU2 all work on the active portfolios
for reports.  Up to four portfolios may be combined in all reports;
these portfolios are specified with the C function in the Master Menu.















THE PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1              PAGE 14 OF 14

                    DESCRIPTION OF FILES (continued)

The following files should reside on the DATA diskette, or in the DATA
sub-directory (unless data and programs are in the same directory):

CATALOG.POR  is the Catalog file, which contains one record for each
             security which is to exist in any portfolio.  Each record
             requires 128 bytes, and there is also a 128-byte header.
             The maximum capacity is 255 data records; therefore the
             maximum size catalog requires 256 x 128, or 32,768 bytes.

XXXXXXXX.POR (where XXXXXXXX is a name made up by the user) is a Port-
             folio transaction file. Each portfolio transaction requires
             64 bytes, and there is also a 64-byte header.  A transac-
             tion record has space for both purchase and sale data.  The
             maximum capacity is 255 records; therefore the maximum size
             portfolio requires 256 x 64, or 16,384 bytes.  (See the
             table near the bottom of page 5).

All files with the extension .HLP are standard text files which do not
contain any control characters.  Whenever the H (for HELP) function is
invoked, the program looks for the appropriate file (see the list of
files on the preceding two pages). If that file is not found in the
program directory, the message "Help screen not available" will flash on
the bottom line of the screen (press any other valid key to get rid of a
flashing error message).

You may delete any or all of the .HLP files if necessary to make more
space on a diskette (you should first print them out using Shift-PrtSc).
To delete an individual file, make the diskette or sub-directory which
contains that file the active one.  Then type the following command:
ERASE xxxxxxxx.HLP <Enter>.  For example to erase the file that contains
the initial HELP screen, type ERASE PASTART2.HLP <Enter>.  To get rid of
all HELP screens, type ERASE *.HLP <Enter>.  Use DIR or DIR /W to check
the directory before and after you delete a file.  DIR shows the names
of all files in one column along with their corresponding dates, times
and other information; DIR /W shows several file names on each line,
without the other information (/W means "wide").

You can also delete the README, .DOC and RELEASEv.rr files, but do NOT
delete any of the .CTL files.

```
{% endraw %}

## README.DOC

{% raw %}
```
                   PERSONAL PORTFOLIO ANALYZER - RELEASE 2.1

To obtain directions on how to get these programs running, first make sure you
are in DOS.  You should see the prompt A> (or C> if you are on a hard disk).
Remove your DOS diskette, and insert the STARTUP diskette (or the STARTUP/PRO-
GRAM diskette if you have only a single diskette) in drive A.  Turn on your
printer and make sure it is ready to print.  Most printers have a ready light,
and it should be on.  Then type the following command just as it appears:

                           COPY A:PAVERS21.DOC LPT1:

and press the ENTER key.  Fourteen pages of information will be printed, and
the output will be paginated with pages numbered.

To get a "snapshot" printout of this screen, first make sure your printer is
ready and then press a shift key and the PrtSc key simultaneously.  The PrtSc
key on the IBM-PC keyboard is on the second row of keys up from the bottom row,
near the right-hand side under the ENTER key.  On other computers it may be in
a different position.  This procedure can be used to obtain a screen printout
at almost any time, except when the screen contains graphics.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2006

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        17   1-23-89  10:23a
    BRUN30   EXE     70680   4-07-87  10:48a
    FILE2006 TXT      2887   1-03-90  12:57p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-01-80   3:27a
    PA2      EXE     14065   3-01-89   6:16p
    PASTART2 CTL      2048   6-21-89   8:08p
    PASTART2 HLP      7808   3-01-89   6:35p
    PAVERS21 DOC     39808   6-18-89   9:44p
    READ     ME       1183   2-09-89   9:34a
    README            1183   2-09-89   9:34a
    README   DOC      1183   2-09-89   9:34a
    RELEASE2 11        163   3-01-89   6:38p
           13 file(s)     141680 bytes
                           14336 bytes free
