---
layout: page
title: "PC-SIG Diskette Library (Disk #502)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0502/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0502"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SALESEYE 2 OF 2 (ALSO 501)"

    The SALESEYE package is ideal for individuals in sales, because it is
    designed to help users keep track of prospects, leads, and those all-
    important memos.  It has a highly developed system of ``tickler'' files
    designed to keep track of deadlines, calls to be returned, lunch
    appointments, etc.  There is even a simple word processor, along
    commonly used letter formats.  This is disk one of a two disk set. The
    tutorial is on disk 502.
    
    System Requirements:  256K, two floppies or a hard disk, monochrome
    display.
    
    How to Start:  Read the README.1st file and then begin the Tutorial on
    Disk #502 by consulting the BEGINNIN.TXT for documentation.  To run,
    enter SELL and pressing <ENTER>.
    
    Suggested Registration:  To register this copy of SALESEYE and obtain a
    printed 240 page manual (includes a full Tutorial Manual, Reference
    Manual, Appendices, glossary and index), technical support, and
    upgrade notices, send a check for $89 less the amount you paid
    PC-SIG for these disks.
    
    File Descriptions:
    The First Disk Contains:
    CONFIG   SYS  Configuration file
    ???????? MEM  Memory data files used by program
    MLETTER  MLE  Letter format
    MLEADS   HIS  Followup leads file
    SAMPLE   ???  Sample leads files
    QTS????  SCR  Help details file - 1 thru 5
    MREPORT  CDF  Leads report
    MQUAL?   CDF  Leads file - 1-8 & 44
    SELL     EXE  Main Program
    ???????? TIK  Tickler file LEADS    DBF  Leads file
    SELL     OV?  Overlay 1 & 2
    QTS      COM  Word processor
    MLEADS   DBF  Master lead data file
    README   1ST  Notes on program
    
    The Second Disk Contains:
    ???      NDX  dBase index files
    ???      DBF  dBase database files
    INSTALL  TXT  Start-up instructions
    ???      HIS  dBase history files
    ???      MEM  dBase memory variable files
    LEADS    HIS  Leads follow-up file
    LEADS    NDX  Leads instruction file
    LEADS    HDX  Leads follow-up instructions
    QUAL?    NDX  Qualified leads index - 1 thru 7 QTMEMFIL MEM  Memo file
    QUAL?    CDF  Qualified leads - 1 thru 7
    TICKLERS TIK  Tickler file
    TICKLERS NDX  Tickler instructions
    BEGINNIN TXT  Starting Instructions
    DEFAULTS MEM  Defaults file
    ADDEFS   MEM  Additional definitions
    PRINTDEF MEM  Definitions file
    THANKS   TXT  Draft Letter - 7
    SURVEY   TXT  Draft Letter - 6
    SE-LTR1  TXT  Draft Letter - 5
    PUR-LTR1 TXT  Draft Letter - 4
    PICS-?   TXT  Draft Letter - 1 thru 3
    LESSON?  TXT  Lessons 1 thru 8
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES502.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  502  SALESEYE TUTORIAL Vers 2.3   (DISK 2 of 2)           v1  DS2
---------------------------------------------------------------------------
This is the instruction diskette for Disk #501.  The SALESEYE tutorial is
designed to explain the various features of the package.  It contains a
series of lessons, documentation, and sample files.

LEADS    DBF  Stores names, addresses, phone number, etc.
LEADS    NDX  Index file.  Helps keep LEADS.DBF file sorted.
LEADS    HIS  History (ie notes, comments) for people stored in LEADS.DBF.
LEADS    HDX  Index file.  Helps keep LEADS.HIS file sorted.

SAMPLE   DBF  Sample data file used in tutorial.
SAMPLE   NDX  Index file.  Helps keep SAMPLE.DBF file sorted.
SAMPLE   HIS  Sample history file for SAMPLE.DBF.
SAMPLE   HDX  Index file.  Helps keep SAMPLE.HIS file sorted.

QUAL?    CDF  Stores codes/descriptors (look-up tables) for user-defined fields.
QUAL?    NDX  Index files.  Help keep QUAL?.CDF files sorted.
QTMEMFIL MEM  System file.  Stores user-defined field labels.
TICKLERS TIK  Stores appointments entered using ADD TICKLERS option.
TICKLERS NDX  Index file.  Helps keep TICKLERS.TIK file sorted.
PRINTDEF MEM  Stores printed report options (margins, etc.).
ADDEFS   MEM  Stores lead file input defaults.

[ All files listed above MUST be present on a Data Disk for SALESEYE to run.
  SALESEYE can re-create any of these files when it initializes a Data Disk. ]

INSTALL  TXT  Start-up Instructions
LESSON?  TXT  Tutorial Lessons 1 thru 8
PUR-LTR1 TXT  Sample Letter - 1
SE-LTR1  TXT  Sample Letter - 2
THANKS   TXT  Sample Letter - 3

[  The above .TXT files are not essential to program operation. ]

PC-SIG (Software Interest Group)
1030 East Duane Ave, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```



Program name:        SALESEYE     Version 2.3

Author name:         High Caliber Systems, Inc.
Address:             165 Madison Avenue
                     New York, NY  10016

Telephone Number:    212-684-5553


Registration Fee:    $ 89 less the money you paid for these disks
                     (If PC-SIG disks cost $6 each, fee = $77)


General Description: Do you often forget to get back in touch with people at
                     the right time?  Do you sometimes forget key details or
                     facts about the people you are supposed to be staying
                     in contact with?  If so, SALESEYE should come in handy.

                     Although SALESEYE is primarily intended to be used by
                     salespeople to keep track of clients and prospects, it can
                     also be used to keep track of friends, business contacts,
                     and anyone else you call or write to over and over again.

                     If you are the kind of person who doesn't want to be
                     bothered designing file structures, screens, menus, etc.
                     you will find SALESEYE a pleasure.  Installation is
                     simple and no programming knowledge is required.
                     SALESEYE's beauty lies in the fact that it does NOT try
                     to do everything a programmer's database like dBASE
                     can do.  What you get in return for giving up this
                     flexibility is a nice, easy-to-use program that you can
                     start using productively almost immediately.


Key Features:        SALESEYE is an integrated database manager, word processor
                     and mail-merge program designed specifically for people who
                     need to follow-up with other people on a regular basis.

                     Detailed information, including an almost unlimited amount
                     of notes and comments, may be searched, displayed, and/or
                     printed in a variety of ways.  Built-in word processing
                     and "mail-merge" capabilities make generating personalized
                     letters, envelopes and/or mailing labels a snap.

                     Nine of the 35 fields in the database can be customized
                     by you so you can store the information that is
                     important in your application.

                     The word processor has all "standard" features like word
                     wrap, tabs, margin control, block copy/move/delete, search
                     and search/replace, text centering, read/write external
                     files, etc.  It is very easy to use and ideal for
                     creating form letters.










--


SYSTEM REQUIREMENTS

OPERATING SYSTEM -  MS DOS or PC DOS, version 2.0 or higher

        HARDWARE -  Two floppy disk drives of at least 360K capacity each or
                    one high-capacity floppy with at least 700K capacity
                    A hard disk (optional)
                    256K of RAM
                    A monitor (monochrome or color)
                    An 80 column printer


INSTALLING SALESEYE


                             FLOPPY DISK SYSTEMS

These instructions assume that your floppy drives are called Drives A: and B:

1.   Boot your computer and leave your DOS (system) disk in Drive A:

2.   Insert the SALESEYE Program Disk (ie Disk #501) in Drive B: and copy a
     file named CONFIG.SYS from it to your DOS disk by entering...

     Enter...  COPY  B:CONFIG.SYS  A:

3.   Re-boot your computer.  This step is very important!

4.   Remove your DOS disk from Drive A: and replace it with the Program Disk
     (ie the disk in Drive B:)

5.   Insert the SALESEYE Tutor Disk (ie Disk #502) in Drive B:

6.   Enter...   A:        [ to log on to Drive A: and get an A> prompt ]
                SELL      [ to start the program ]

7.   The SALESEYE logo will appear and you will be asked to enter today's date.
     Do NOT enter a date.  Just press the 'Return' (ie <cr>) key.  A screen
     will appear that looks like this...


                    **  CHANGE DATA DISK DRIVE DEFAULT  **

                    Specify default Drive for Data Disk  ?:

                         C)ancel   H)elp   D)one  :?:

11.  You should now tell SALESEYE the drive you want to have your Data Disk in.
     Type in the letter 'B' (type over the question mark that appears after
     '... Data Disk').  Then enter a 'D' for Done on the horizontal menu line.

12.  A new screen will appear that gives you some information about
     initializing Data Disks.  You should enter 'I' for Initialize.

13.  SALESEYE will now copy and/or create certain files that must be present
     for the program to run onto your Tutor Disk.







--



14.  SALESEYE will tell you when it is finished initializing.  After striking
     any key, the MAIN MENU should appear on your screen.

This start-up process only has to be done when you use SALESEYE for the first
time.  To run SALESEYE from now on, simply boot your computer with the DOS disk
that has the CONFIG.SYS file on it, insert the Program Disk in Drive A: and the
Data Disk in Drive B:, and type SELL.  It's that simple!


                               HARD DISK SYSTEMS


These instructions assume that your hard drive is Drive C: and your floppy
drive is Drive A:

1.  Put the SALESEYE Program Disk (ie Disk #501) in Drive A:

2.  Make sure you are at the root directory of your hard disk:

    Enter...   C:           [ to log on to Drive C:, your hard disk ]
               CD \

3.  Check to see if a file named CONFIG.SYS is stored on the root directory:

    Enter...   TYPE  CONFIG.SYS

    If a message like 'FILE NOT FOUND' appears (ie the CONFIG.SYS file does not
    exist on the root), enter the following command...

    Enter...   COPY  A:CONFIG.SYS  C:

    If something appeared on your screen when you TYPEd the CONFIG.SYS file,
    study what was displayed.  If one of the lines displayed was 'FILES=n'
    where n is greater than or equal to 20, go to Step 4.

    If 'FILES=20' or greater does not appear, you must add a new line
    containing the command 'FILES=20' to the CONFIG.SYS file.  You can do
    this using EDLIN or your favorite word processor.

4.  Re-boot your computer by pressing the 'Ctrl', 'Alt', and 'Del' keys
    simultaneously.  Don't forget to open the door on your floppy drive before
    re-booting and to close it again after the computer is booted.

5.  Make a new subdirectory named SE (or anything you want) for the program:

    Enter...   MD  \SE

6.  Move to this new subdirectory:

    Enter...   CD  \SE

7.  Copy the contents of the SALESEYE Program Disk to this new subdirectory:

    Enter...   COPY  A:*.*  C:








--



8.  Copy the contents of the SALESEYE Tutor Disk (ie Disk #502) to this new
    subdirectory:

    Enter...   COPY  A:*.*  C:

    You may now put your SALESEYE Disk away in a safe place.

9.  Start up the program:

    Enter...   SELL


10. The SALESEYE logo will appear and you will be asked to enter today's date.
    Do NOT enter a date.  Just press the 'Return' (ie <cr>) key.  A screen will
    appear that looks like this...


                    **  CHANGE DATA DISK DRIVE DEFAULT  **

                    Specify default Drive for Data Disk  ?:

                         C)ancel   H)elp   D)one  :?:


11.  You should now tell SALESEYE the drive you want to have your Data Disk in.
     Type in the letter 'C' (type over the question mark that appears after
     '... Data Disk').  Then enter a 'D' for Done on the horizontal menu line.

12.  A new screen will appear that gives you some information about
     initializing Data Disks.  You should enter 'I' for Initialize.

13.  SALESEYE will now copy and/or create certain files that must be present
     for the program to run onto your hard disk.

14.  SALESEYE will tell you when it is finished initializing.  After striking
     any key, the MAIN MENU should appear on your screen.

The start-up process outlined on this page only has to be done once.  The next
time you want to run the program, simply boot your computer, move to the sub-
directory that contains the program (ie type 'CD \SE'), and then type 'SELL',
its that simple!



ADDITIONAL DOCUMENTATION

Use the Word Processor in SALESEYE to view and print the tutorial lessons and
other files on the Tutor Disk or \SE subdirectory.




                         ----   End of INSTALL.TXT  ----
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0502

     Volume in drive A has no label
     Directory of A:\

    LEADS    DBF      2048  12-30-86   9:06a
    LEADS    NDX      1024  12-30-86   9:06a
    LEADS    HIS      1024  12-30-86   9:06a
    LEADS    HDX      1024  12-30-86   9:06a
    SAMPLE   DBF      2048  12-25-86   8:07a
    SAMPLE   NDX      1024  12-25-86   8:07a
    SAMPLE   HIS      1024   3-14-86   1:05p
    SAMPLE   HDX      1024  12-25-86   8:06a
    QUAL1    CDF      2560   4-05-86  10:14p
    QUAL2    CDF      1536   4-05-86  10:14p
    QUAL3    CDF      3072   4-05-86  10:15p
    QUAL4    CDF      3072   4-05-86  10:15p
    QUAL44   CDF      3072   4-05-86  10:15p
    QUAL5    CDF      1536   4-05-86  10:16p
    QUAL7    CDF      1536  12-22-86   5:50p
    QUAL1    NDX      2048   4-05-86  10:14p
    QUAL2    NDX      1024   4-05-86  10:14p
    QUAL3    NDX      2560   4-05-86  10:15p
    QUAL4    NDX      3072   4-05-86  10:15p
    QUAL44   NDX      3072   4-05-86  10:15p
    QUAL5    NDX      1024   4-05-86  10:16p
    QUAL7    NDX      1024  12-25-86   8:05a
    QTMEMFIL MEM       512   4-05-86  10:16p
    TICKLERS TIK      1024   8-30-84  11:15a
    TICKLERS NDX      1024  12-25-86   8:06a
    PRINTDEF MEM      1536  12-25-86   8:07a
    ADDEFS   MEM       512   4-05-86  10:17p
    INSTALL  TXT      8842  12-31-86  12:22p
    LESSON1  TXT     37469  12-31-86  12:36p
    LESSON2  TXT     32374  12-31-86  12:42p
    LESSON3  TXT     23471  12-31-86  12:44p
    LESSON4  TXT     14004  12-31-86  12:46p
    LESSON5  TXT     15382  12-31-86  12:50p
    LESSON6  TXT     21614  12-31-86  12:53p
    LESSON7  TXT     17094  12-31-86   1:10p
    LESSON8  TXT     11189  12-31-86   1:13p
    PUR-LTR1 TXT      1433  12-26-86  12:00p
    SE-LTR1  TXT      1755  12-26-86  11:54a
    THANKS   TXT       712  12-26-86  11:46a
    FILES502 TXT      1889  12-25-86   8:13a
    GO       BAT       598  12-30-86   8:02a
           41 file(s)     232882 bytes
                           79872 bytes free
