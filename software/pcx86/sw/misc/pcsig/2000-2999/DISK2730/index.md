---
layout: page
title: "PC-SIG Diskette Library (Disk #2730)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2730/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2730"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2730.TXT

{% raw %}
```
Disk No: 2730
Disk Title: By the Numbers
PC-SIG Version: S1.0

Program Title: By the Numbers
Author Version: 4.2
Author Registration: $29.00
Special Requirements: 420K RAM and hard disk or dual-floppy system.

BY THE NUMBERS is a complete personality report that uses the philosophy
of Numerology to analyze your name and birthdate for their symbolic
meaning and metaphysical vibrations. The Pythagorean system takes name
changes into account, analyzes 10 separate personality elements, and
provides your forecast for the coming year. Professional-quality reports
can be saved and edited for a truly personalized reading. This program
is used by many mail-order numerologists. This has been a most popular
program for nearly three years!

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  PC-SIG Disk #2730 By The Numbers  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To view or print instructions, type: NUMDOC (press enter)               ║
║                                                                         ║
║ To run the program, type: NUMBERS (press enter)                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.DOC

{% raw %}
```
                  IMPORTANT INFORMATION ABOUT THESE DISKS

   BEFORE YOU START: Make backup copies of your disks. (See the DISKCOPY
command in your DOS manual.) Put the original disks in a safe place, and
use the copies for all work. If you are upgrading from an older version
of a program, make backup copies of all your old data files before you
install the new version. Files with the extensions DBF, DBT, and MEM
contain essential data. Files with the NTX extension are index files.
Some programs also create special text files which you may want to back
up.

   ARCHIVE FILES: Sometimes there are too many files to fit on a single
floppy disk. These programs are compressed and stored in special archive
files with the extension ARC or ZIP. Before you can use the program, you
must extract the files from the archive. We have provided the extraction
utility.
   If you are using a 2-floppy system, look for a file named FLOPPY.BAT
or DOTWO.BAT. Start from the A> prompt, with the master disk in the A
drive. Be prepared with 2 or 3 empty, formatted diskettes. Enter the
appropriate command, depending on the file you found. For example, if
you have FLOPPY.BAT, type FLOPPY and press <ENTER>. Follow the instruc-
tions on screen, which will tell you when to insert your floppy disks
into the B drive.
   If you are using a hard disk, be sure you have created the subdirec-
tory where you want the program to be kept. Look for a program named
ARCE.COM or UNZIP.EXE or PKUNZIP.EXE. Starting from the correct subdi-
rectory, at the C> prompt, with the diskette in the A drive, enter the
appropriate command. For example, if your archive file has the ARC
extension, you should have the program ARCE.COM. Your command will look
something like this: A:ARCE A:FORTUNE. (Instead of "fortune" use the
actual name of the archive file.) The program will automatically un-com-
press the files and place them in the current subdirectory.
   In some cases, you may have "self-extracting" archive files. These do
not require a separate utility, but will un-compress themselves. They
look like ordinary program files with the EXE extension, but can be
identified by the @ symbol in the filename. To use a self-extracting
archive, first log onto the drive and directory where you want to place
the uncompressed files. For example, if you have a two-floppy system,
you might want to place your master disk containing the archive into the
A drive, and then log onto the B drive with an empty, formatted disk. If
you are using a hard disk, create the subdirectory for the new files,
and then log into the subdirectory, with the archive disk in the A
drive. If the archive name is WAURA@.EXE, you will type A:WAURA@ and
press <ENTER>. Self-extraction will occur automatically. (Note to floppy
disk users: There may be more than one self-extracting archive on a
single disk. You must use a separate, empty, formatted diskette for each
such archive.)

   DOCUMENTATION AND INSTRUCTIONS: Most of our instruction manuals are
in special program files which allow you to view the manual on screen or
print it. These files may have the COM extension or the EXE extension, 
and usually have "DOC" somewhere in the filename. Simply enter the 
appropriate command. For example, if you have the program BY THE NUMBERS, 
the instruction manual is called NUMDOC.COM. To view the manual, type 
NUMDOC and press <ENTER>. You can page through the document on screen, 
or print it by pressing <ALT><H>. For a list of helpful commands, press 
<F1>. Note: If you use the ANSI.SYS driver, the screen colors of these
document may not always appear correctly.
   Files which have the DOC or TXT extension are ASCII format files
(also called DOS text files) which can be viewed or printed using DOS
commands. For example, if you have a typical setup, you can print a
document called CATALOG.DOC using this command: TYPE CATALOG.DOC > LPT1:
   To view this file on screen, you would enter: TYPE CATALOG.DOC | MORE
   You can also view and print this kind of file with most word proces-
sors, using the format for "ASCII", "DOS text" or "Non-document" files.

   PROGRAM FILES: Program files can be identified by the extension EXE
or COM after the file name. To run the program, simply type its name.
For example, you have a program named WORKBASE.EXE, type WORKBASE and
press <ENTER>.
   SOURCE CODE: Registered versions of a few programs come with source
code. You do not need the source code just to run the program; you can
delete it from the disk to make more room. Source code files have the
extensions PRG, BAS, and OBJ.
   DATA FILES: Some programs create data files, with the extensions DBF,
DBT, NTX and MEM. These are important and should be backed up regularly.
Some programs also create special text files which you may also want to
back up.

   HARD DISK OR FLOPPY: Your programs will run much faster on a hard
disk than they do on a floppy. Also, some programs build large data
files which may grow as you use the program and eventually fill a floppy
disk. We recommend using a hard disk. POETRY GENERATOR requires a hard
disk, and MAILLIST and WORKBASE are much easier to use on a hard disk.
Any program which uses data files (those with the DBF and DBT exten-
sions) is best when used on a hard disk.

   NEW VERSIONS: Sometimes a new version of a program will ask your per-
mission to update your data files. Do not answer "yes" unless you have
already made a backup copy of your data. Don't copy the backed-up data
back into the directory after the files have been updated.
   CREATIVITY PACKAGE:  Disk #1 contains the complete text of Thomas A.
Easton's book, "Think Thunder! And Unleash Your Creativity". To read it,
use the command READIT, or you can read each chapter separately by
typing the chapter name (see the disk for file name). Disk #2 contains
the program THUNDER THOUGHT, and disk #3 contains VERSIFIER.
   POETRY GENERATOR: The registered version is distributed on two disks,
containing different archive files. All the files from both disks are
needed for the program to run correctly.
   BONUS DISKS: We are not the authors of these programs. Please direct
shareware payments and technical questions about a program to the author
whose name appears in the documentation. If you have trouble reaching an
author, we will do what we can to help you. All programs have been
tested. Because hardware and software configurations vary, we cannot
guarantee satisfactory results. We do not warrant these programs in any
way. To report a problem, please write a letter describing the problem
in detail, including information about your system. We cannot debug
these programs over the phone.

   Thank you for your interest in our UNUSUAL SOFTWARE. We support our
registered users. If you have questions, comments, complaints or
compliments, please write to us. Have fun!

                                 BAD DISK?

   It seems that in hot weather we are more likely to get complaints
about "bad" or unreadable disks. Floppy disks are susceptible to heat,
moisture and magnetism. A disk that sits all day in a hot mailbox or
truck where temperatures exceed 100 degrees is likely to be damaged.
Disks which have been exposed to magnetism in their travels may contain
unreadable files.
   Before assuming that a disk is bad, try reading it on a different
computer, if possible. It may be that your drive heads are dirty or
slightly misaligned. Suspect this if you frequently get disk error mes-
sages with many different disks. An inexpensive head cleaning kit may
help solve your problem.
   Sometimes the round disk gets trapped inside its square casing and
generates an error message because it can't rotate freely. Remove the
disk from the drive and tap each of the four sides sharply on the sur-
face of your desk. This may loosen the disk. Try reading the disk again.
   Norton Utilities and Mace Utilities both have features that can some-
times revive unreadable disks. We have had good results with Norton. Any
serious computer user should have one of these utility packages.
   In any case, if we have sent you an unreadable disk, we will be happy
to exchange it for a fresh copy of the same program.

                               ERROR MESSAGES

   It may happen that when you run a program, you will get an error mes-
sage something like this: Open File Error DESC.NTX (4)
   The "4" is DOS's cryptic way of telling you that the program has
tried to open more files than DOS can handle at once. To solve this
problem, you need to check the CONFIG.SYS file in your root directory.
This file should contain the following lines:

   files=20
   buffers=20

   If the numbers are smaller then 20, or if these lines are missing
from the file, you will need to edit it. If you don't have a CONFIG.SYS
file, you will need to create one. (Note that some systems and networks
may require numbers larger then 20. Check your system user's manual.)
   CONFIG.SYS must be a pure ASCII file. You can edit or create this
file using Edlin or any pure ASCII text editor. Most word processors
allow you to save files in ASCII format. (This may be referred to as a
DOS Text File. WordStar may call it "non-document".) Remember, the file
must be in ASCII format and must be in the root directory on your C
drive. If you boot with a DOS diskette in the A drive, the CONFIG.SYS
file must be in the root directory of the disk you use to boot.
   When you have corrected the CONFIG.SYS file, reboot your system and
try running the program again.
   In case you are confused and can't create a CONFIG.SYS file for your-
self, we distribute a free program called DOCONFIG which will edit or
create your CONFIG.SYS file as needed. If you would like a copy of this
program, please send a double-sided, double-density, 5 1/4" diskette in
a sturdy, reusable mailer with three first-class stamps. If you don't
want to bother with the disk and mailer, send $5.00 instead. (Sorry,
DOCONFIG is not available on 3 1/4" disks.)

                               "0" ERROR

   On rare occasions, you may see an error message similar to this one:
Open File Error NUMBERS.NTX (0)
   The number 0 and the NTX extension in the file name indicate that the
problem is a corrupted or damaged index file. Most of our programs will
automatically recreate missing index files. So, simply delete the file
in question (make sure you delete only files with the NTX extension) and
try running the program again. Some programs also have a reindexing
choice on the menu which allows you to re-create the indexes whenever
you like.

                               OTHER ERRORS

   There are many possible reasons why a program might occasionally pro-
duce an error message. In most cases, errors are not serious, and they
usually have a simple solution. If you don't understand what the error
message means, or if you don't know how to solve the problem, we can
help you.
   Make an exact, complete copy of the error message (a print-screen is
best). As soon as the error happens, write down what you were doing (or
trying to do) at the time. Have you been able to do the same thing in
the past without getting an error? Have you seen a similar error before?
Make a note of any keys you may have pressed just before the error oc-
curred. Do you think you know what may have caused the error? Could it
be related to changes in your system, a new version of the program, or
something unusual you did? Send us the information, and we will let you
know what needs to be done to correct or avoid the error.
   REGISTERED USERS: We support our registered users, and are happy to 
answer your questions and help solve any difficulties you may have. The 
best way to get help is to write to us, including full details of the 
problem or question, and copies of error messages or screens, if available.
If your problem is urgent, and you are a registered user, you are welcome to
call us during business hours. (We work from 9:00 AM to 7:00 PM Pacific
Daylight Time, Monday through Friday, and Noon to 4:00 PM Saturday. If you're
in a different time zone, please be careful about calling too early in the
morning!) Remember that we often do outside consulting work, so you may reach
the answering machine. If that happens, please leave phone numbers for both
day and evening, and let us know what days and hours we may call you back.

                          R.K. West Consulting
                              P.O. Box 8059
                     Mission Hills, CA 91346, U.S.A.


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Dear Shareware Vendor:

The software distributed on this disk is copyrighted material and is subject
to certain restrictions on copying and distribution.

For puposes of this document, any person or organization distributing
software on disk or through any other medium is considered a disk vendor,
whether or not fees are charged, and whether or not the organization is
non-profit.

Vendors who distribute software without charging any fee of any kind may 
distribute this software, provided they comply with all the terms and 
conditions listed in this document and/or in the accompanying software 
documentation.

Vendors who charge a fee of any kind, whether it is a "membership" fee,
"shipping and handling" charge, "copying" fee, or other type of fee, must
obtain the author's permission in order to distribute this software. If
you are a vendor approved by the Association of Shareware Professionals
(ASP), you have permission to distribute the software under the terms
and conditions listed in this document and/or the accompanying software
documentation. ASP-approved vendors must notify the author of their
intention to distribute the software, and must indicate which version of
the software they have. Under no circumstances may outdated version of
this software be distributed. Vendors who are not ASP-approved must write
to the author to obtain permission before distributing the software.

The author reserves the right to withhold or withdraw permission to distribute 
from anyone at any time for any reason.

You may copy and distribute the UNREGISTERED version of this software,
provided: (a) You do not rename, change or omit any of the files unless you
receive express permission to do so in writing from the author, (b) You
understand that you may not "sell" this software, but you may charge a
reasonable copying fee for providing copies on disk, (c) You do not "rent" or
"lease" copies of this software, (d) You do not advertise this software as
"free", "cheap" or "public domain". Vendors must comply with the standards
set by the Association of Shareware Professionals (ASP).

The following files MUST be included on all distribution copies of this
program:

    NUMBERS.EXE
    NUMDOC.COM
    VENDOR.DOC
    ASP.DOC

You may use "file compression" techniques in order to fit more programs on a
single disk. Because this is a self-modifying file, do not use LZEXE to
compress it.

This program may NOT be distributed on the same disk with any so-called 
"adults only" or "X-rated" materials.

If you indicate ASP membership in your catalog, please do so for your
listing of this program.


For further information about this and other software products:

   Rosemary West
   R.K. West Consulting
   P.O. Box 8059
   Mission Hills, CA 91346, USA

For information on becoming an ASP-approved vendor:

   Association of Shareware Professionals
   Vendor Certification Committee
   P.O. Box 5786
   Bellevue, WA 98006, USA
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2730

     Volume in drive A has no label
     Directory of A:\

    NUMDOC   EXE     16045   6-10-90   1:29p
    HELP     DOC     12725   6-01-90  10:20a
    NUMBERS  EXE    306369   4-28-90  10:49p
    VENDOR   DOC      3014   5-31-90  10:36a
    ASP      DOC      1275   5-15-90  11:15a
    FILE2730 TXT       861   7-21-91   1:23p
    GO       BAT        38   6-21-91   2:37a
    GO       TXT       771   7-22-91   3:48a
            8 file(s)     341098 bytes
                           17408 bytes free
