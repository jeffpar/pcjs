---
layout: page
title: "PC-SIG Diskette Library (Disk #254)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0254/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0254"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DOS HELP"

    Lost in the wilds of DOS again? Here's real direction for you -- an
    on-line help function for DOS commands in versions 2.0, 2.1 and PCjr.
    This is especially informative for the beginner.
    
    How do you get there from here? Just type HELP, followed by the DOS
    command you are unsure of, and PC-DOS HELP shows you its proper usage
    and leads you back into the light.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES254.TXT

{% raw %}
```
Disk No  254
Program Title:  PC-DOS HELP version 2.00
PC-SIG version 1.3

This program gives you an on-line help for DOS commands.  Just type
HELP, followed by the DOS command you are unsure about, and PC-DOS HELP
will show you its proper usage.  PC-DOS HELP includes information on DOS
2.1, 2.0 and the PC jr.

Usage:  DOS Education.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions

HELP     EXE  The HELP function program.
HCONFIG  EXE  HELP function configuration program.
HELP     DOC  Documentation for HELP.EXE (10K).
HELPREG  DOC  Registration form for HELP.
MAKEBKUP BAT  Makes a backup of this disk.
CNV2_00  BAT  Convert HELP for DOS 2.0.
CNVPCJR  BAT  Convert HELP for the PC jr.
CLEANUP  BAT  Cleans out the programs not needed after help is run.
PRIMARY  <DIR>Primary help files.
SECNDRY  <DIR>Secondary help files.
HELP2_00 <DIR>DOS 2.0 help files.
HELPPCJR <DIR>PC jrhelp files.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 254  PC-DOS HELP  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation on this disk, type:                        ║
║                                                                         ║
║             COPY HELP.DOC PRN (press enter)                             ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             HELP (press enter)                                          ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.DOC

{% raw %}
```
                  PC-DOS 2.00 & 2.10 HELP Function
                  --------------------------------

Copyright (C) 1984 by:  Chris Bailey
                        P.O. Box 332
                        Peterborough, Ontario
                        Canada, K9J 6Z3


                       Distribution Notice

The HELP function is made available as a User-Supported "public
domain" package consisting of the program, help and document
files listed below.  You are encouraged to give copies to your
friends for evaluation, however only complete "distribution
copies" should be made using the batch file MAKEBKUP.BAT provided
on the diskette.  Please do not distribute altered copies.  The
package MUST NOT be sold by retailers.  If after a short
evaluation period you find this HELP function is of value to you,
please register your copy with me using the HELPREG.DOC file on
this diskette and include a recommended contribution of $15.  (If
you obtained this diskette directly from me, the $10 charged is
used to cover the cost of materials, postage and handling)  This
$15 contribution helps me continue software development and
provide you with new and interesting software products at
reasonable prices.  You will also be informed of updates and new
software packages as they become available if you register. 
Additional copies of this package are available on request for
$25 ($10 for handling & $15 contribution).

Businesses, schools and other facilities that wish to make many
copies of this package or put the package on a network may obtain
site licence privileges by paying a fee based on the following
calculation:
         $15  - for the first copy of the package;
    plus $5   - for each additional copy made, or each computer
                or terminal accessing the package via a network
                (up to a maximum total of $200).

     or  $200 - to obtain unlimited copying and network access
                privileges at the site.

To continue developing software that is affordable I require a
certain monetary return on this product.  This package is better
than most computer aids available today, and has been distributed
through the public domain to keep the marketing, packaging and
distribution costs down.  These benefits have been passed on to
you the user by allowing you to "try before you buy" and
utimately asking for a modest $15 contribution (what other
software can you get for $15 ?).  In the true spirit of
User-Supported software, you the user must support the product in
a monetary manner if you use it (otherwise it's called software
piracy).  The alternative is to not pay and discourage software
authors from using the public domain as a distribution method. 
This will only help drive up the cost of software in general.

This package is distributed on an "as is" basis without warranty.
Every attempt has been made to ensure the accuracy of the text
and examples included in the help files, however the package is
intended as a supplement to your copy of the DOS manual, not a
replacement.  If contradictions arise between the DOS manual and
the HELP files, the DOS manual must prevail.



              HELP Function Files on this Diskette

The following files and directories should be present on your
copy of the distribution diskette:
  HELP.EXE     - The HELP Function program.
  HCONFIG.EXE  - HELP Function configuration program.
  HELP.DOC     - This file.
  HELPREG.DOC  - HELP Function registration form.
  MAKEBKUP.BAT - Make a backup of this disk.
  CNV2_00.BAT  - Convert the HELP files for DOS version 2.00.
  CNVPCJR.BAT  - Convert the HELP files for use with PCjr.
  CLEANUP.BAT  - Delete extra files to free up disk space after
                  the HELP Function is configured for your system.
  \PRIMARY     - All primary help files (50 files).
  \SECNDRY     - All secondary help files (58 files).
  \HELP2_00\PRIMARY - DOS 2.00 primary help file changes (2 files).
           \SECNDRY - DOS 2.00 secondary help file changes (7 files).
  \HELPPCJR\PRIMARY - PCjr primary help file changes (9 files).
           \SECNDRY - PCjr secondary help file changes (12 files).


                  Computer Required to Use HELP

To successfully use the HELP function, you will require the
following computer system:

        IBM Personal Computer, PCjr, or a compatible machine
        One or more diskette drives
        80 column color/graphics or monochrome display
        PC-DOS 2.00 or 2.10


                   HELP Function Capabilities

The HELP function provides an on-screen help capability that
should helpful for anyone using PC-DOS 2.00 or 2.10.  As
distributed this package contains two levels of help for all DOS
commands, an abbreviated version and a detailed explanation
including examples.  In addition, many topics not normally
discussed are explained at length in the secondary help files.
Solutions to common computer problems and clarifications of some
DOS concepts are also addressed.

To invoke the HELP function, enter the command "HELP" followed by
the Enter key.  This will show you the topics available at the
primary help level.  To view the help file, enter the command
"HELP" followed by a space followed by the topic of interest
followed by the Enter key.  The secondary help level is accessed
in a similar manner by entering "HELP /S" to see the topics
available, and "HELP topic/S" to view the secondary help file on
this topic (note there is no space between the topic and the
"/S" in the command).


              Backing Up Your Distribution Diskette

Before using or altering this HELP function distribution diskette
a backup copy should be made.  You may do this using your
favorite method or by invoking the batch file MAKEBKUP.BAT
included on the distribution diskette.  If your computer has only
one disk drive, the files DISKCOPY and DISKCOMP must be copied
from your DOS diskette to this diskette before running the batch
file.  Place a write protect tab over the notch on the side of
your diskette before backing up.  Invoke the batch file by
entering the command "MAKEBKUP p: s: d:" followed by the Enter
key. In the command you should replace "p:" with the drive
containing the DOS programs DISKCOPY and DISKCOMP in the default
directory, "s:" with the diskette drive containing the
distribution diskette, and "d:" with the destination disk drive
to write the copy.  The destination diskette must be formatted
before starting this batch file.

Examples:
* To backup using a single drive system, the command would be
entered as "MAKEBKUP A: A: A:".  DOS will prompt for the source
and destination diskettes at the appropriate times and may
require the insertion of a system diskette a couple of times. 

* To backup in a dual drive system, the command is entered as
"MAKEBKUP A: B: B:" to do a single drive copy in drive B: while
leaving the DOS diskette in drive A:


         Configuring the HELP Function for Your Computer

There are several things that must be done to prepare the HELP
function for your computer.  As supplied, the HELP function
describes the commands for PC-DOS version 2.10.  If you are using
DOS 2.00, submit the batch file CNV2_00.BAT to convert the help
files to explain DOS 2.00 (make sure you have a backup copy of
the HELP distribution diskette before doing this).  To submit the
file, put your diskette copy in the default diskette drive and
enter the command "CNV2_00" followed by the Enter key.

If you are using a PCjr, you will be running DOS 2.10.  The keys
on the PCjr keyboard are different, so there is a batch file
CNVPCJR.BAT to convert the help files to reference those keys.
Submit the batch file by putting your distribution diskette in
the default diskette drive and entering the command "CNVPCJR"
followed by the Enter key.  If you only have one disk drive, that
drive is the default.  Make sure you have a backup copy of the
HELP distribution diskette before doing this.

You must decide which disk is to contain the help function.  It
might be easiest to keep your HELP distribution diskette as a
dedicated help diskette.  Another alternative is to copy the file
HELP.EXE to your DOS system diskette and leave the help files on
the distribution diskette in drive B:.  For those of you with a
fixed disk, you might be able to put all the primary and
secondary help files on your fixed disk.  The choice is up to
you, however you should perform the next step before actually
copying any files to other disks (aside from your backup).



A program named HCONFIG.EXE is supplied on the distribution
diskette to allow you to configure the HELP function for your
system.  This allows you to specify the directories, disk drives
and filename extensions that HELP.EXE should use when responding
to primary and secondary help requests.  To run the program,
enter "HCONFIG" followed by the Enter key.  Both HELP.EXE and
HCONFIG.EXE must be in the default diskette drive and directory.

When HELP.EXE is configured, copy the help files and HELP.EXE to
the directories you have decided upon and try obtaining some
help.  If help is not displayed as expected, you have probably
done something wrong while using HCONFIG, so rerun that program
and check for errors.  After fixing the specifications, copy
HELP.EXE to your selected disk again and retest it.

If you have decided to use this copy of your distribution
diskette as a dedicated HELP diskette, you can free up some space
by running the batch file CLEANUP.BAT.  This will delete all the
help files you will not need after configuring for your system.
You should only run this after converting to DOS 2.00 or PCjr (if
desired).  The file is submitted by entering "CLEANUP" followed
by the Enter key.


                     Adding New Help Topics

If you view the subdirectories \PRIMARY and \SECNDRY on the
distribution diskette with the DIR command, you will see that
each topic available for help is a file with the same name and
the extension ".HLP".  This makes it easy for you to add new help
topics to the diskette.  One of the best uses I have found is to
keep track of programs I have written.  Once a program is written
and tested, a short help file of the same name is created so that
in six month's time I can figure out what that program is
supposed to do.  Each help file should be entered as an ASCII
file (non-document mode for those of you with Wordstar) so it
will display correctly on the screen, and must be under 64 Kbytes
in length.  In addition, the help filenames should not contain
the characters =+[];: or " .

Give a copy of HELP to your friends, and encourage them to make a
$15 contribution as well (that's the whole idea behind
User-Supported software; it's supported by the users)!  PLEASE
make all copies from your original distribution diskette.  I
really don't want to get many different versions of the help
files circulating.  If you have new examples for the DOS help
files or disagree with my interpretations please let me know so
the problems can be corrected in future releases.  There is one
exception though; a special file named ADDENDUM.HLP in the
secondary help files where you are invited to make additions that
might aid others in their understanding and interpretation of
PC-DOS.




IBM PC, XT, PCjr & PC-DOS are registered trademarks of International
Business Machines.

```
{% endraw %}

## HELPREG.DOC

{% raw %}
```
     HELP Function Registration Form       Source diskette: HV1_0240

     Please send to:  Chris Bailey
                      P.O. Box 332
                      Peterborough, Ontario
                      Canada, K9J 6Z3

     If you have found the HELP function to be worth-while, please
     send a contribution of $15 (for individuals) to the address
     above.  This helps defray the cost of development and makes it
     possible to write new high quality, low cost software products   
     for you.  Registering your copy guarantees that you will be
     informed of updates to this HELP function, and receive
     announcements about my newest products as soon as they are
     available.  Additional copies of this HELP function are available
     on request for $25 ($10 for handling & $15 contribution).
     Businesses and institutions may obtain site licences by sending
     a fee calculated as shown in the HELP.DOC file.

     Please fill in the following information:

     Name     _______________________________________________________
     Company  _______________________________________________________
     Address  __________________________________  Apt/Unit __________
     City     ________________ Prov/State _________  Code/Zip _______

     If possible, could you please answer the following questions?
     This information helps me determine what software products are
     likely to be of interest to you, and how to distribute them.

       Type of Computer (Brand name & model)  _____________
       Number of floppy disk drives:   1  2  ____
       Fixed disk:  No / Yes       Capacity in Megabytes:  5  10  ___
       RAM space in Kbytes  ________
       Display Adaptor:  Color/Graphics   Monochrome
       Adaptor Brand (c/g only): IBM  Quadcolor  Unknown  Other_______
       Printer Brand ________________   Model _____________
       Printer Communication Protocol:  Parallel   Serial
       Paper used:  Fan fold    Single sheet   Roll
       Which version of PC-DOS do you use ?  __.___
       What software packages do you use ? ___________________________
                                           ___________________________
       Where did your copy of this diskette come from ?
        Friend [ ]    Original from CB [ ]   User Group_______________
        Other (please specify)_________________

     Please use the space below to report any problems or make any
     suggestions about the HELP function.  Are there any utilities you
     would like to see written to help make your PC more useful or
     easier to use ?

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0254

     Volume in drive A has no label
     Directory of A:\

    CLEANUP  BAT      1134   9-05-84   1:00p
    CNV2_00  BAT       609   9-05-84   1:00p
    CNVPCJR  BAT       640   9-05-84   1:00p
    FILES254 TXT      1106  10-27-88   4:30p
    GO       BAT        30  10-17-88   3:46p
    GO       TXT      1002  10-20-88   4:36p
    HCONFIG  EXE      4724   9-05-84   1:00p
    HELP     DOC     11560   9-05-84   1:00p
    HELP     EXE      4772  10-17-88   2:58p
    HELPREG  DOC      2629   7-15-85   8:21p
    MAKEBKUP BAT      2042   9-05-84   1:00p
    HELP2_00     <DIR>    
    HELPPCJR     <DIR>    
    PRIMARY      <DIR>    
    SECNDRY      <DIR>    
           15 file(s)      30248 bytes

     Directory of A:\HELP2_00

    .            <DIR>    
    ..           <DIR>    
    PRIMARY      <DIR>    
    SECNDRY      <DIR>    
            4 file(s)          0 bytes

     Directory of A:\HELP2_00\PRIMARY

    .            <DIR>    
    ..           <DIR>    
    FDISK    HLP       293   9-05-84   1:03p
    SET      HLP       369   9-05-84   1:03p
            4 file(s)        662 bytes

     Directory of A:\HELP2_00\SECNDRY

    .            <DIR>    
    ..           <DIR>    
    BATCH    HLP      4100   9-05-84   1:03p
    CHKDSK   HLP      2530   9-05-84   1:03p
    DATE     HLP      1483   9-05-84   1:03p
    EXE2BIN  HLP       852   9-05-84   1:03p
    FDISK    HLP       570   9-05-84   1:03p
    SET      HLP       415   9-05-84   1:03p
    TIME     HLP      1521   9-05-84   1:03p
            9 file(s)      11471 bytes

     Directory of A:\HELPPCJR

    .            <DIR>    
    ..           <DIR>    
    PRIMARY      <DIR>    
    SECNDRY      <DIR>    
            4 file(s)          0 bytes

     Directory of A:\HELPPCJR\PRIMARY

    .            <DIR>    
    ..           <DIR>    
    BREAK    HLP       136   9-05-84   1:03p
    DEVICES  HLP      1242   9-05-84   1:03p
    GRAPHICS HLP       633   9-05-84   1:03p
    HELP     HLP      1274   9-05-84   1:03p
    JRKEYS   HLP      1318   9-05-84   1:03p
    KEYS     HLP      2136   9-05-84   1:03p
    MODE     HLP      2012   9-05-84   1:03p
    PRINT    HLP      1127   9-05-84   1:03p
    REDIRECT HLP      1454   9-05-84   1:03p
           11 file(s)      11332 bytes

     Directory of A:\HELPPCJR\SECNDRY

    .            <DIR>    
    ..           <DIR>    
    BACKUP   HLP      2387   9-05-84   1:03p
    BADDISK  HLP      5260   9-05-84   1:03p
    BREAK    HLP       958   9-05-84   1:03p
    CHKDSK   HLP      2529   9-05-84   1:03p
    DEVICES  HLP      1242   9-05-84   1:03p
    GRAPHICS HLP      1158   9-05-84   1:03p
    HELP     HLP      1863   9-05-84   1:03p
    JRKEYS   HLP      1172   9-05-84   1:03p
    KEYS     HLP      4341   9-05-84   1:03p
    MODE     HLP      3979   9-05-84   1:03p
    PRINT    HLP      2509   9-05-84   1:03p
    REDIRECT HLP      2570   9-05-84   1:03p
           14 file(s)      29968 bytes

     Directory of A:\PRIMARY

    .            <DIR>    
    ..           <DIR>    
    ASSIGN   HLP       175   9-05-84   1:00p
    BACKUP   HLP       481   9-05-84   1:00p
    BREAK    HLP       129   9-05-84   1:00p
    CD       HLP        90   9-05-84   1:00p
    CHDIR    HLP        93   9-05-84   1:00p
    CHKDSK   HLP       273   9-05-84   1:00p
    CLS      HLP        37   9-05-84   1:00p
    COMP     HLP       261   9-05-84   1:00p
    COPY     HLP      1381   9-05-84   1:00p
    CTTY     HLP       248   9-05-84   1:00p
    DATE     HLP       328   9-05-84   1:00p
    DEL      HLP       294   9-05-84   1:00p
    DEVICES  HLP      1096   9-05-84   1:00p
    DIR      HLP       332   9-05-84   1:00p
    DISKCOMP HLP       531   9-05-84   1:00p
    DISKCOPY HLP       458   9-05-84   1:00p
    ERASE    HLP       302   9-05-84   1:00p
    EXE2BIN  HLP       181   9-05-84   1:00p
    FDISK    HLP       293   9-05-84   1:00p
    FIND     HLP       804   9-05-84   1:00p
    FORMAT   HLP      1078   9-05-84   1:00p
    GLOBALS  HLP       746   9-05-84   1:00p
    GRAPHICS HLP       629   9-05-84   1:00p
    HELP     HLP      1201   9-05-84   1:00p
    KEYS     HLP      1986   9-05-84   1:00p
    MD       HLP        78   9-05-84   1:00p
    MKDIR    HLP        84   9-05-84   1:00p
    MODE     HLP      1996   9-05-84   1:00p
    MORE     HLP       294   9-05-84   1:01p
    PATH     HLP       576   9-05-84   1:01p
    PIPING   HLP       840   9-05-84   1:01p
    PRINT    HLP      1001   9-05-84   1:01p
    PROMPT   HLP       767   9-05-84   1:01p
    RD       HLP       323   9-05-84   1:01p
    RECOVER  HLP       386   9-05-84   1:01p
    REDIRECT HLP      1456   9-05-84   1:01p
    REN      HLP       321   9-05-84   1:01p
    RENAME   HLP       327   9-05-84   1:01p
    RESTORE  HLP       438   9-05-84   1:01p
    RMDIR    HLP       329   9-05-84   1:01p
    SET      HLP       377   9-05-84   1:01p
    SORT     HLP       465   9-05-84   1:01p
    SYNTAX   HLP      2334   9-05-84   1:01p
    SYS      HLP       427   9-05-84   1:01p
    TIME     HLP       492   9-05-84   1:01p
    TREE     HLP       177   9-05-84   1:01p
    TYPE     HLP       164   9-05-84   1:01p
    VER      HLP        89   9-05-84   1:01p
    VERIFY   HLP       486   9-05-84   1:01p
    VOL      HLP        87   9-05-84   1:01p
           52 file(s)      27741 bytes

     Directory of A:\SECNDRY

    .            <DIR>    
    ..           <DIR>    
    ADDENDUM HLP      1821   9-05-84   1:01p
    ASSIGN   HLP      1062   9-05-84   1:01p
    BACKUP   HLP      2381   9-05-84   1:01p
    BACKUPS  HLP      5629   9-05-84   1:01p
    BADDISK  HLP      5254   9-05-84   1:01p
    BATCH    HLP      4100   9-05-84   1:01p
    BREAK    HLP       956   9-05-84   1:01p
    CD       HLP       208   9-05-84   1:01p
    CHDIR    HLP      2447   9-05-84   1:01p
    CHKDSK   HLP      2531   9-05-84   1:01p
    CLS      HLP       322   9-05-84   1:01p
    COMP     HLP      2508   9-05-84   1:01p
    COPY     HLP      6288   9-05-84   1:01p
    CTTY     HLP      1184   9-05-84   1:01p
    DATE     HLP      1483   9-05-84   1:01p
    DEL      HLP       212   9-05-84   1:01p
    DEVICES  HLP      1096   9-05-84   1:01p
    DIR      HLP      2333   9-05-84   1:01p
    DISKCOMP HLP      2283   9-05-84   1:02p
    DISKCOPY HLP      1766   9-05-84   1:02p
    DISKS    HLP      4214   9-05-84   1:02p
    ERASE    HLP      1289   9-05-84   1:02p
    EXE2BIN  HLP       851   9-05-84   1:02p
    FDISK    HLP       570   9-05-84   1:02p
    FIND     HLP      2290   9-05-84   1:02p
    FORMAT   HLP      2982   9-05-84   1:02p
    FRAGMENT HLP      3774   9-05-84   1:02p
    GLOBALS  HLP      1630   9-05-84   1:02p
    GRAPHICS HLP      1146   9-05-84   1:02p
    HELP     HLP      1788   9-05-84   1:02p
    KEYS     HLP      4245   9-05-84   1:02p
    MAINT    HLP      1374   9-05-84   1:02p
    MD       HLP       201   9-05-84   1:02p
    MKDIR    HLP      1527   9-05-84   1:02p
    MODE     HLP      4149   9-05-84   1:02p
    MORE     HLP       975   9-05-84   1:02p
    PATH     HLP      1419   9-05-84   1:02p
    PIPING   HLP      1282   9-05-84   1:02p
    POWER    HLP      1500   9-05-84   1:02p
    PRINT    HLP      2419   9-05-84   1:02p
    PROMPT   HLP      1473   9-05-84   1:02p
    RD       HLP       181   9-05-84   1:02p
    RECOVER  HLP      2459   9-05-84   1:02p
    REDIRECT HLP      2574   9-05-84   1:02p
    REN      HLP       182   9-05-84   1:02p
    RENAME   HLP      1160   9-05-84   1:02p
    RESTORE  HLP      2117   9-05-84   1:02p
    RMDIR    HLP      1006   9-05-84   1:02p
    SET      HLP       423   9-05-84   1:02p
    SORT     HLP      1842   9-05-84   1:02p
    SYNTAX   HLP      2334   9-05-84   1:02p
    SYS      HLP       732   9-05-84   1:02p
    TIME     HLP      1521   9-05-84   1:02p
    TREE     HLP       926   9-05-84   1:02p
    TYPE     HLP      1125   9-05-84   1:02p
    VER      HLP       307   9-05-84   1:03p
    VERIFY   HLP       824   9-05-84   1:03p
    VOL      HLP       297   9-05-84   1:03p
           60 file(s)     106972 bytes

    Total files listed:
          173 file(s)     218394 bytes
                            2048 bytes free
