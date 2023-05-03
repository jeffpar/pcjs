---
layout: page
title: "PC-SIG Diskette Library (Disk #2745)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2745/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2745"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2745.TXT

{% raw %}
```
Disk No: 2745
Disk Title: M-Label
PC-SIG Version: S1.0

Program Title: M-Label
Author Version: 3.11
Author Registration: $39.00 (includes MAILLIST)
Special Requirements: PC-SIG #1506 and 360K RAM.  Hard drive recommended

M-LABEL customizes labels, index cards, continuous-feed envelopes, etc.,
when working with mailing lists created by MAILLIST (PC-SIG #1506).

Choose from 1 to 4 labels across, 1 to 100 lines long, widths up to 250
characters, top and left margin padding, and distance between labels.
Pick exactly which fields go on which line.  User-defined fields allow
you to insert any text into the printed output.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## FREE!.DOC

{% raw %}
```
                            REGISTRATION BONUS!

CompuServe is the world's largest on-line information service. With
your computer and modem, you can tap into hundreds of databases
and services: stock market quotes, mutual fund information, home
banking, support groups for popular hardware systems and software
programs, hobby and special interest groups, on-line games, electronic
mail, and more, available 24 hours a day. CompuServe charges a
monthly support fee of only $1.50 plus usage time.

Try CompuServe with our compliments. As a registered user of one or
more of our products, you are entitled to a free introductory
subscription, including: A $15 introductory usage credit, a
complimentary subscription to CompuServe Magazine, a private user
I.D. and password. 

When you register for this software, you'll receive information on how
to take advantage of this offer, along with the latest version of this
software, and a subscription to our newsletter.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #2745 M-LABEL  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To view/print the documentation, type: MAILDOC  (press Enter)           ║
║                                                                         ║
║ To run the program, type: MLABEL  (press Enter)                         ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.DOC

{% raw %}
```
                IMPORTANT INFORMATION ABOUT THESE DISKS

    PLEASE DO NOT ASK FOR HELP UNLESS YOU HAVE READ THIS COMPLETELY

   BEFORE YOU START: Make backup copies of your disks. (See the
DISKCOPY command in your DOS manual.) Put the original disks in a safe
place, and use the copies for all work. If you are upgrading from an
older version of a program, make backup copies of all your old data
files before you install the new version. Files with the extensions
DBF, DBT, and MEM contain essential data. Files with the NTX extension
are index files. Some programs also create special text files which you
may want to back up.
   ARCHIVE FILES: Sometimes there are too many files to fit on a single
floppy disk. These programs are compressed and stored in special
archive files with the extension ARC or ZIP. Before you can use the
program, you must extract the files from the archive. We have provided
the extraction utility.
     If you are using a 2-floppy system, look for a file named INSTALL.BAT
or FLOPPY.BAT. Start from the A> prompt, with the master disk in the A
drive. Be prepared with 2 or 3 new, formatted diskettes. Enter the ap-
propriate command, depending on the file you found. For example, if you
have INSTALL.BAT, type INSTALL A B and press <ENTER>. Follow the instruc-
tions on screen, which will tell you when to insert your floppy disks into
the B drive. (Note that we are assuming you will have the master disk in
the A drive and the new floppy in the B drive. If your drive letters are
different, you should enter the correct letters for your computer.
     If you are using a hard disk, be sure you have already created the
subdirectory where you want the program to be kept. (If you do not know how
to create a subdirectory, see the MKDIR command in your DOS manual.) Look
for a file named INSTALLH.BAT. Starting from the correct subdirectory, at
the C> prompt, with the diskette in the A drive, enter the appropriate com-
mand. For example, if your hard disk is called C and your subdirectory is
called MAILLIST, enter this command: INSTALLH A C:\MAILLIST
     If you prefer, you can use ARCE (if the archive file has the ARC
extension) or PKUNZIP (if the archive file has the ZIP extension) and enter
the un-archiving commands at the DOS prompt yourself.  For example, if your
archive file has the ARC extension, you should have the program ARCE.COM.
Your command will look something like this: A:ARCE A:FORTUNE. (Instead of
"fortune" use the actual name of the archive file. For example, if the
archive file is named TAROT.ARC you will use the word "tarot".) The program
will automatically un-compress the files and place them in the current
subdirectory.
   In some cases, you may have "self-extracting" archive files. These
do not require a separate utility, but will un-compress themselves.
They look like ordinary program files with the EXE extension, but can
be identified by the @ symbol in the filename. To use a self-extracting
archive, first log onto the drive and directory where you want to place
the uncompressed files. For example, if you have a two-floppy system,
you might want to place your master disk containing the archive into
the A drive, and then log onto the B drive with an empty, formatted
disk. If you are using a hard disk, create the subdirectory for the new
files, and then log into the subdirectory, with the archive disk in the
A drive. If the archive name is WAURA@.EXE, you will type A:WAURA@ and
press <ENTER>. Self-extraction will occur automatically. (Note to
floppy disk users: There may be more than one self-extracting archive
on a single disk. You should use a separate, empty, formatted diskette
to receive files from each archive.)
     IF THE FILES ARE NOT ARCHIVED, YOU CAN SIMPLY COPY THEM DIRECTLY TO
YOUR HARD DISK: COPY A:*.* C:
     IF THE FILES ARE NOT ARCHIVED, YOU CAN USE THE DISKCOPY COMMAND TO
MAKE A FLOPPY DISK FOR YOUR USE: DISKCOPY A: A:
   DOCUMENTATION AND INSTRUCTIONS: Most of our instruction manuals are
in special program files which allow you to view the manual on screen
or print it. These files have the COM or the EXE extension, and usually
have "DOC" somewhere in the filename. Simply enter the appropriate
command. For example, if you have the program BY THE NUMBERS, the
instruction manual is called NUMDOC.EXE. To view the manual, type NUMDOC
and press <ENTER>. You can page through the document on screen, or print it
by pressing <ALT><H>. For a list of  helpful commands, press <F1>.
   Files which have the DOC or TXT extension are ASCII format files
(also called DOS text files) which can be viewed or printed using DOS
commands. For example, if you have a typical setup, you can print a
document called CATALOG.DOC using this command: TYPE CATALOG.DOC > LPT1
   To view this file on screen, you could enter: 
TYPE CATALOG.DOC | MORE
   You can also view and print this kind of file with most word
processors, using the format for "ASCII", "DOS text" or "Non-document"
format.
   PROGRAM FILES: Program files can be identified by the extension EXE
or COM after the file name. To run the program, simply type its name.
For example, if you have a program named TAROT.EXE, type TAROT and
press <ENTER>. If you have a program name WHATISIT.COM, type WHATISIT
and ppress <ENTER>.
   SOURCE CODE: Registered versions of a few programs come with source
code. You do not need the source code just to run the program; you can
delete it from the disk to make more room. Our source code files have
the extensions PRG, BAS, and OBJ.
   DATA FILES: Some programs create data files, with the extensions
DBF, DBT, NTX and MEM. These are important and should be backed up
regularly. Some programs also create special text files which you may
also want to back up.
   HARD DISK OR FLOPPY: Your programs will run much faster on a hard
disk than they do on a floppy. Also, some programs build large data
files which may grow as you use the program and eventually fill a
floppy disk. We recommend using a hard disk. POETRY GENERATOR requires
a hard disk, and MAILLIST and WORKBASE are much easier to use on a hard
disk. Any program which uses data files (those with the DBF and DBT
extensions) is best when used on a hard disk.
   NEW VERSIONS: Sometimes a new version of a program will ask your
permission to update your data files. Do not answer "yes" unless you
have already made a backup copy of your data. Don't copy the backed-up
data back into the directory after the files have been updated. This
backup is simply insurance against data damage or loss.
   CREATIVITY PACKAGE:  Disk #1 contains the complete text of Thomas A.
Easton's book, "Think Thunder! And Unleash Your Creativity". To read
it, use the command READIT, or you can read each chapter separately by
typing the chapter name (see the disk for file name). Disk #2 contains
the program THUNDER THOUGHT, and disk #3 contains VERSIFIER. If you
like, all these materials can be placed in the same subdirectory on
your hard disk.
   POETRY GENERATOR: This may be distributed on two disks, containing
different archive files. All the files from both disks are needed for
the program to run correctly. This program must be run on a hard disk
or other storage device with sufficient capacity for all the necessary
files. Note that you have a file named POETRY.EXE, and other files with
names like POEM1.EXE, POEM2.EXE, etc. The only program you need to
execute is POETRY. The others are controlled by POETRY.
   MAILLIST: The registered version is distributed on two disks. Many
of the files contained on disk #2 are source code files, which are not
needed just to run the program. You need files with the extensions EXE,
DBF, DBT, LBL and MEM.
   M-LABEL: M-Label is designed to work with your MAILLIST files, and
should be placed in the same hard disk directory as MAILLIST. If you
use a dual-floppy system, put M-LABEL in the drive where you would
normally put MAILLIST, and use the data disk as you usually would.
   BONUS DISKS: We are not the authors of these programs. Please direct
payments and questions about a program to the author listed in the
documentation. If you have trouble reaching an author, we will do what
we can to help. All programs have been tested. Because equipment
configurations vary, we cannot guarantee satisfactory results. We do
not warrant these programs in any way. To report a problem, write a
letter describing the problem in detail, including information about
your system. We cannot debug these programs over the phone.
   3.5" DISKS: In some cases, programs which are distributed on 2 separate
5.25" disks may be put on a single 3.5" disk. If this is the case, the disk
will be labeled with the names of both programs, and all files will be
present.
   SAFE COMPUTING: Smart users make regular backups. Your important
database files and word processing documents deserve protection. Don't
forget to keep the backup disks in a safe place, away from the
computer.
   Thank you for your interest in our UNUSUAL SOFTWARE. We support our
users. If you have questions, comments, complaints or compliments,
please write to us. Have fun!

                      ARE YOU CONFUSED?

   If you are having trouble with basic operations such as copying
files from one disk to another, please study your DOS manual. Just as
you would not expect to drive a car without knowing how to use the
steering wheel and the brakes, you should not expect to use your
computer unless you know a few basic operating procedures. If your
dealer failed to provide you with a DOS manual, there are dozens of
fine books available at libraries, computer stores, and book shops. You
will never regret the small investment of time needed to approach your
computer with confidence.

                       BAD DISK?

   It seems that in hot weather we are more likely to get complaints
about "bad" or unreadable disks. Floppy disks are suscepti- ble to
heat, moisture and magnetism. A disk that sits all day in a hot mailbox
or truck where temperatures exceed 100 degrees is likely to be damaged.
Disks which have been exposed to magnetism in their travels may become
unreadable.
   Before assuming a disk is bad, try it on another computer. It may be
that your computer's drive heads are dirty or slightly mis- aligned.
Suspect this if you often get disk error messages with different disks.
An inexpensive head cleaning kit may help solve the problem.
   Sometimes the round disk gets trapped inside its square casing and
generates an error message because it can't rotate freely. Remove the
disk from the drive and tap each of the four edges sharply on the
surface of your desk. This may loosen the disk. Try reading the disk
again.
   Norton Utilities and Mace Utilities both have features that can
sometimes revive unreadable disks. Any serious computer user should
have one of these or a similar utility package.
   In any case, if we sent you an unreadable disk, we will be happy to
exchange it for a fresh copy of the same program.

                         ERROR MESSAGES

   It may happen that when you run a program, you will see an error
message something like this: 

                 Open File Error DESC.NTX (4)

   The "4" after the filename is DOS's cryptic way of telling you that
the program has tried to open more files than DOS can handle at once.
To solve this problem, you need to check the CONFIG.SYS file in your
root directory. This file should contain the following lines:

                             files=20  
                             buffers=8

   If the numbers you see are the same or larger than these, they are
okay. If the numbers are smaller than these, or if these lines are
missing from the file, you will need to edit it. If you don't have a
CONFIG.SYS file, you will need to create one. (Some systems or
applications may require numbers larger then 20. Check your user's
manual.)
   CONFIG.SYS must be a pure ASCII file. You can edit or create this
file using Edlin or any pure ASCII text editor. Most word processors
allow you to save files in ASCII format. (This may be referred to as a
DOS Text File; WordStar may call it "non-document".) Remember, the file
must be in ASCII format and must be in the root directory on your C
drive. If you boot with a DOS diskette in the A drive, the CONFIG.SYS
file must be in the root directory of the disk you use to boot. When
you have corrected the CONFIG.SYS file, reboot your system and try
running the program again.
   In case you are confused and can't create a CONFIG.SYS, we
distribute a free program called DOCONFIG which will edit or create
your CONFIG.SYS file as needed. If you would like a copy of this
program, please send a double-sided, double-density, 5 1/4" diskette in
a sturdy, reusable mailer with three first-class stamps. If you don't
want to bother with the disk and mailer, send $5.00 instead. (Sorry,
DOCONFIG is not available on 3 1/2" disks.)

                              "0" ERROR

   On rare occasions, you may see an error message similar to this:
Open File Error NUMBERS.NTX (0). The number 0 and the NTX extension in
the file name indicate that the problem is a corrupted or damaged index
file. Most of our programs will automatically recreate missing index
files. So, simply delete the file in question (make sure you delete
only files with the NTX extension -- if this error occurs with a file
other than an index file, contact us) and try running the program
again. Some programs also have a reindexing choice on the menu which
allows you to re-create the indexes whenever you like.

                         DOS ERROR MESSAGES

   Sometimes you will see error messages at your C> prompt which are
generated, not by the program you with to run, but by DOS itself. "File
not found", "Bad command or filename" and "Data error reading drive A"
are common examples of DOS error messages. These messages rarely have
anything to do with the program you are trying to use, but are
generally triggered by user errors (such as spelling mistakes when
typing commands). Your DOS manual should contain a listing of these
error messages and what they mean.

                            OTHER ERRORS

   There are many possible reasons why a program might occasionally
produce an error message. In most cases, errors are not serious, and
they usually have a simple solution. If you don't understand what the
error message means, or if you don't know how to solve the problem, we
can help you. Make an exact, complete copy of the error message (a
print-screen is best). As soon as the error happens, write down what
you were doing (or trying to do) at the time. Have you been able to do
the same thing in the past without getting an error? Have you seen a
similar error before? Make a note of any keys you may have pressed just
before the er- ror occurred. Do you think you know what may have caused
the error? Could it be related to changes in your system, a new ver-
sion of the program, or something unusual you did? Send us the
information, and we will let you know what you should do to correct or
avoid the error. If you are a REGISTERED user with an urgent problem,
you may call during normal business hours (9 AM to 6 PM Pacific
Standard Time, Monday through Friday): 818/368-5534.


                        R.K. West Consulting
                           P.O. Box 8059
                   Mission Hills, CA 91346, U.S.A.

   PLEASE NOTE: Sometimes very old copies of programs are still in
circulation years after an author has moved. If, for any reason, you
are unable to find us at the address or phone number listed on this
disk, please contact us through the Association of Shareware
Professionals (ASP).

                           TROUBLESHOOTING


   "It doesn't work" may sum up your feelings about a problem, but
these words are of no use if you need help from your consultant or
programmer. You can minimize frustration and save time by learning to
be specific and provide the details that will lead to a solution.
   Remember that nearly 80 percent of computer problems are caused by
user errors. Before running any software, READ THE INSTRUCTIONS.
Admittedly, this may seem intimidating if you have a program like
Microsoft's WORD, which comes with at least three separate, thick
manuals. But you don't have to read every word just to get started. You
can find the sections of the manual that tell you how to begin, and
those that apply to the specific task you are trying to perform. With
large manuals, there is usually a table of contents and an in- dex.
Skim these to familiarize yourself with the topics that are discussed.
Then you'll know where to look when you have a question. With shorter
manuals, such as those that come with most shareware products, you
should take the time to read the whole thing. It's embarrassing to mail
a long letter or make a long distance phone call, only to find that
everything you needed to know was on page 2.
   If your software package comes with a tutorial, use it. Even
experienced users can pick up quite a few new tricks by spending a
little time learning the right steps.
   Before you assume that a program "doesn't work", check a few simple
items. Is the computer plugged in and turned on? Are all necessary
devices (such as the monitor and printer) connected properly and turned
on? Did you spell the command correctly when you typed it? Are you
logged onto the right disk drive and directory? Is it possible that the
program has system requirements that you don't meet, such as a hard
disk, or a certain amount of memory? If memory seems to be the problem,
do you have "memory resident" programs (also called TSRs) which  can
temporarily be removed from memory? Try running the program on a
different computer.
   If the program worked in the past, but doesn't now, can you think of
anything that has changed since the last time you used it? Have you
moved the computer or made changes in any of the connecting cables? Is
it possible there has been damage of some kind, or that files have been
erased? Have you added any new memory-resident programs or device
drivers which might be causing a conflict?
   If you see an error message on screen, copy it completely and
exactly. Don't try to remember it! (Sen- tences that begin with "I
think it said something like...." drive a programmer to despair.) If
possible, make a print-screen of the message. On most computers, you
can do this by holding down the SHIFT key while you press the PRINT
SCREEN key (sometimes abbreviated to PRT SC). The purpose of the error
message is to convey specific information to the programmer so that the
problem can be solved. Your consultant will need the exact wording of
the full message in order to interpret it correctly.
   When reporting a problem, be as specific as possible. What were you
trying to do at the time? How did you proceed? What do you expect would
happen? What actually happened? Exactly what did you do just before the
problem occurred? What did you do after the problem occurred? What did
you see on the screen? Have you had different or similar results in the
past? Can you reproduce the problem and describe the circumstances
under which it occurs? Is there a consistent pattern of some sort?
   We support our users, and are happy to answer your questions and
help solve any difficulties you may have. Please understand that there
is a limit to the amount of help we can give you with software which we
did not write. If you are having continuing difficulty with DOS
commands, for example, you probably need to study your DOS manual or
contact MicroSoft for help. If you are stymied by your menu system,
your best bet is to talk to the consultant who installed it, or to the
author of the menuing software.
   The best way to get our help is to write to us, including full
details of the problem or question, and copies of error messages or
screens, if available. If you are a registered user and your problem is
urgent, you are welcome to call us during business hours. (We work from
9:00 AM to 6:00 PM Pacific Daylight Time, Monday through Friday. If you're
in a different time zone, please be careful about calling too early in the
morning or late at night!) Remember that we often do outside consulting
work, so you may reach the answering machine. If that happens, please leave
phone numbers for both day and evening, and let us know what days and hours
we may call you back.

                             TECHNICAL SUPPORT

   Under ASP guidelines, technical support may be limited to mail support
only, and free support may be terminated three months after registration.
If free telephone support is offered, it may be limited to 30 minutes total
contact time.
   Our technical support exceeds ASP requirements. We do not use the three-
month limit; you may continue to receive technical support by mail for as
long as you remain a registered user of our software. Our mail support is
unlimited. (However, we do reserve the right to limit or terminate support
if, in our judgment, a user has been abusive or unreasonable. We further
reserve the right to refund the registration fee and declare a user to be
unregistered if, in our judgment, we cannot meet the user's support re-
quirements.) We will strictly enforce the 30-minute total limit on phone
support, so please be judicious about your use of this option. (Additional
telephone support time may be purchased; however, we do not believe such a
high level of support is ever necessary for our products.)
   We have found that less than five percent of our users request technical
support. Unfortunately, for those who do use support, over eighty-five
percent of the questions are already answered in the documentation provided
with the software! Please, before you call or write, read all the
instructions. You will save your time as well as ours, and you will help
keep registration fees low by keeping our support costs down.
   We have also discovered that a large number of "support" questions
actually do not relate directly to our products, but are questions about
basic computer operation, DOS commands, and retail software applications.
Although we cheerfully answer these questions when we can, we hope our
users will understand that we cannot provide training for products we did
not produce. Your best sources of information for basic operations are your
DOS manual and computer user's manual. You will get much more satisfaction
from your computer if you become an informed user.

```
{% endraw %}

## SHARE.DOC

{% raw %}
```
Understanding the Shareware Concept:

    Shareware is not free software. Copyright laws apply to both
shareware and "commercial" software, and the copyright holder retains
all rights in the program. The term "shareware" refers to a try-before-
you-buy method for distributing software. The author specifically
grants the right to copy and distribute the evaluation version of the
software, as long as no fee is charged. Where a copying fee is charged,
certain restrictions may apply.
    Shareware distribution gives you the chance to try software before
buying it. If you try a shareware program and continue using it, you
are expected to register your use with the author. With registration,
you receive a license to continue using the software. This may include
a copy of the latest version of the program, technical support, and, if
applicable, future upgrade notification and other services.
    Shareware authors are expert programmers, just like commercial
authors, and the products are of comparable quality. (In both cases,
you will find both good and bad programs!) The price of shareware is
significantly lower than that of commercial software because of the
method of distribution. When you pay for shareware, you pay for the
software only, not for expensive advertising and fancy packages. With
commercial software, you pay for the program before you try it, and you
may get stuck with a product that does not suit your needs. With
shareware, you pay for the software after you have found it to be
useful.
    Shareware authors are paid for their work only when you register
your use of their products. Your support keeps this system working and
makes it possible for the authors to keep producing new and better
products.
    The shareware concept is based entirely on the honor system, and
generally works quite well. Most people are honest and will not violate
the trust placed in them by the author of the software. The author
counts on your integrity.

About the ASP:

    The Association of Shareware Professionals (ASP) is an industry
organization formed to strengthen the future of shareware. All ASP
members subscribe to a code of ethics designed to ensure that users
receive superior products and services. These policies work to the
mutual benefit of authors, users, and vendors.
    For more information on the ASP, write to P.O. Box 5786, Bellevue,
WA 98006, or visit the ASP forum on CompuServe (GO SHAREWARE at any CIS
prompt).
```
{% endraw %}

## SYSOP.DOC

{% raw %}
```
                            SYSOP.DOC file
                         R.K. West Consulting

This is NOT a public domain program. All program and data files are
Copyright 1990, Rosemary West, all rights reserved. Distribution
restriction rights are claimed under that copyright and are outlined
below and in the file VENDOR.DOC.

Limited Distribution License:
-----------------------------

As the exclusive copyright holders for this software, Rosemary West
and R.K. West Consulting authorize on-line distribution only in
accordance with the following restrictions. Disk Vendors and
Distributors should refer to the VENDOR.DOC text file for complete
license information.

The software package is defined as containing all the material listed
in the VENDOR.DOC text file. If any file listed in the VENDOR.DOC text
file, or the VENDOR.DOC file itself, is missing, then the package is
not complete and distribution is forbidden. Please contact us to
obtain a complete package suitable for distribution.

     *    The software package - including all related program files
          and documentation files - CANNOT be modified in any way
          (other than that mentioned in the following paragraph) and
          must be distributed as a complete package, without
          exception. The VENDOR.DOC text file contains a list of all
          files that are part of the software package.

     *    Many BBSs customarily add to each archived file a small text
          file which describes the BBS and tells people that the file
          was downloaded from that particular BBS. Other BBSs add a
          small one-line message with their BBS name and phone number
          into the compressed file, which will display when the file
          is uncompressed. Either of these methods of mentioning your
          BBS are acceptable and may be used, provided the program and
          documentation is otherwise unmodified and complete.

     *    We prohibit the distribution of outdated versions of the
          software package. If the version you have obtained is over
          six (6) months old, please contact us to ensure that you
          have the most current version.

     *    Licensee shall not use, copy, rent, lease, sell, modify,
          decompile, disassemble, otherwise reverse engineer, or
          transfer the licensed program except as provided in this
          agreement. Any such unauthorized use shall result in
          immediate and automatic termination of this license.

     *    U.S. Government Information: Use, duplication, or disclosure
          by the U.S. Government of the computer software and
          documentation in this package shall be subject to the
          restricted rights applicable to commercial computer software
          as set forth in subdivision (b)(3)(ii) of the Rights in
          Technical Data and Computer Software clause at 252.227-7013
          (DFARS 52.227-7013). The Contractor/ manufacturer is R.K.
          West Consulting, P.O. Box 8059, Mission Hills, CA 91346.

     *    All rights not expressly granted here are reserved to R.K.
          West Consulting.

Update Service:
-------------------

Some BBSs prefer to obtain programs directly from the authors. If you
would like to obtain programs directly from us, automatically, then
please help us to cover the cost.

If your BBS would like to receive automatic upgrades to any of our
products, directly from us, then please refer to the information
below. Due to the time and expense we are generally unable to upload
directly to a large number of Bulletin Board Systems. However, we are
able to mail updates on disk to many BBSs.

If your BBS would like to receive automatic updates then please take
advantage of our Update Service. Under this program you can receive
updates of all our programs (as of this writing we have over 17
shareware programs in distribution) for an entire year for only $35
(this helps to offset our costs).

To receive updates, simply send us a letter with the name and mailing
address of your BBS, BBS phone number, voice phone number, the name of
the person we may contact (preferably the SYSOP or CO-SYSOP), and a
check or money order for $35 (for countries outside of North America
please add an additional $20). Payment in U.S. funds drawn on a U.S.
bank only, please.

NOTE: All BBSs participating in our Update Service will automatically
receive any NEW programs which we may release while their Update
Service is in effect.

The Update Service is only intended to help us cover our expenses in
those cases where a BBS desires to obtain the program directly from
us. If you have other standard ways to obtain current versions of
these programs, then you may not want to use our Update Service.

------------------------------------------------------------------

For consistency and to help users locate the files, please use the
following file name(s):

If the program and documentation are contained within an archive file,
please use the following name:

    MLABEL.ZIP   

If the program is compressed using some other file compression method,
then please use the name listed above, but with the appropriate
extension (PAK, ARC, LZH, ZOO, ZIP, etc.).

If you have an earlier version of this software on your BBS, please
delete it. Thank you!

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                             VENDOR.DOC file
                          R.K. West Consulting

This is NOT a public domain program. All program and data files are
Copyright 1991, Rosemary West, all rights reserved. Distribution
restriction rights are claimed under that copyright and are outlined
below.

The copying restrictions in this file apply to any individual,
organization, user group, or business that charges ANY fee of any kind
for the distribution of this Shareware program produced by R.K. West
Consulting.

Minimum standards expected of distributors and vendors are summarized
below in this file. Under no condition will permission to distribute
be given to any organization which does not agree to follow the
standards. 

Limited Distribution License:
-----------------------------

     *    The software package is defined as containing all the
          material listed in the VENDOR.DOC text file. If any files
          listed in the VENDOR.DOC text file, or the VENDOR.DOC file
          itself, are missing, then the package is not complete and
          distribution is forbidden. Please contact us to obtain a
          complete package suitable for distribution.

     *    Vendors who are ASP Associate Members in good standing are
          hereby given permission to distribute the software package
          in accordance with the terms and conditions listed below.
          ASP Associate Members ("ASP Approved Vendors") in good
          standing do not need to request permission to distribute
          this package. This permission is in effect until or unless
          we notify you otherwise, in writing. We reserve the right to
          revoke this permission from any vendor at any time for any
          reason, whether or not the vendor is an ASP approved vendor.

     *    Vendors who are not ASP Approved Vendors may not distribute
          this software package under any circumstances, unless they
          have received explicit written permission to do so from R.K.
          West Consulting. To apply for written permission, vendors
          should send a copy of their most recent catalog and a sample
          disk labeled and packaged as it would be sent to customers.
          We reserve the right to revoke permission from any vendor at
          any time, whether or not we have given written permission to
          distribute in the past.

     *    Bona fide non-profit organizations, recognized as such by
          the Internal Revenue Service, may distribute this software
          package only in accordance with the terms and conditions
          listed below, and only if they apply for and receive written
          permission from R.K. West Consulting. As always, we reserve
          the right to revoke permission.

     *    Any distribution of this software package over bulletin
          boards and/or national telecommunication services will be
          limited to distributing a single archived file containing
          the contents of the entire distribution disk and NO charge
          specifically for this software package above the standard
          charge for connect time will be allowed. For details, please
          see the file SYSOP.DOC.

     *    The software package may not be sold as part of some other
          more inclusive package (including computer hardware sales)
          without written permission from R.K. West Consulting. ASP
          Vendor Members who wish to distribute this software package
          as part of a collection (such as a CD-ROM package) may do so
          provided that all the other restrictions are met. 

     *    Distributors may NOT add to or delete from any program or
          documentation file (the EXE, the VENDOR.DOC, or any related
          file). Any advertising material or other information must be
          placed in a separate file and identified so the user may
          delete it.

     *    R.K. West Consulting prohibits the distribution of outdated
          versions of this software package. If the version you have
          is more than six (6) months old, please contact us to ensure
          that you have the most current version.

     *    Under no condition may the software package be rented or
          leased to others.

     *    The documentation files may not be reproduced in whole or in
          part without the written permission of R.K. West Consulting.
          Printed (hardcopy) copies of the screens or documentation
          files may not be distributed in any form without a license
          from R.K. West Consulting.

     *    Licensee shall not use, copy, rent, lease, sell, modify, 
          decompile, disassemble, otherwise reverse engineer, or
          transfer the licensed program except as provided in this
          agreement. Any such unauthorized use shall result in
          immediate and automatic termination of this license.

     *    U.S. Government Information:  Use, duplication, or
          disclosure by the U.S. Government of the computer software
          and documentation in this package shall be subject to the
          restricted rights applicable to commercial computer software
          as set forth in subdivision (b)(3)(ii) of the Rights in
          Technical Data and Computer Software clause at 252.227-7013
          (DFARS 52.227-7013). The Contractor/manufacturer is R.K.
          West Consulting, P.O. Box 8059, Mission Hills, CA 91346.

     *    All rights not expressly granted here are reserved to R.K.
          West Consulting.

If you are interested in becoming an ASP-approved vendor, please
contact:

          Vendor Membership Coordinator
          Association of Shareware Professionals
          545 Grover Rd.
          Muskegon, MI 49442-9427

Software reviewers:  If you plan to review this software for
publication, please contact us first to make sure you have the most
recent upgrade version of the product and that the ordering
information supplied to your readers will be accurate. We would
appreciate receiving a tearsheet or copy of any published reviews of
this product.

Update Service:
-------------------

Most vendors prefer to obtain programs directly from the authors. If
you would like to obtain programs directly from us, automatically,
then please help us to cover the cost.

If you are an ASP Approved Vendor who would like to receive automatic
updates then please take advantage of our Update Service. Under this
program you can receive updates of all our programs (as of this
writing we have over 17 shareware programs in distribution) for an
entire year for only $35 (this helps to offset our costs).


To receive updates, simply send us a letter with your company name and
mailing address, phone number, the name of the person we may contact
(preferably the disk librarian or company owner), and a check or money
order for $35 (for countries outside of North America please add an
additional $20). Payment in U.S. funds drawn on a U.S. bank only,
please.

NOTE: All vendors participating in our Update Service will
automatically receive any NEW programs which we may release while
their Update Service is in effect.

The Update Service is only intended to help us cover our expenses in
those cases where a vendor desires to obtain the program directly from
us. If you have other standard ways to obtain current versions of
these programs, then you may not want to use our Update Service.

---------------------------------------------------------------------

The following files MUST be included on all copies of this software
package:

    VENDOR.DOC
    SYSOP.DOC
    ASP.DOC
    FREE!.DOC
    MLABEL.EXE
    MAILDOC.EXE

Please make sure the correct title for this program is used in all
catalogs and advertisements: M-LABEL

IMPORTANT: This program is a companion to our mailing list program,
MAILLIST. It will not work without MAILLIST. Please make it clear
to your customers that MAILLIST is a requirement for operation of
M-LABEL.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2745

     Volume in drive A has no label
     Directory of A:\

    HELP     DOC     22878   4-09-91   9:15a
    VENDOR   DOC      8193   1-25-91   8:38p
    SYSOP    DOC      5437  12-30-90  12:21p
    ASP      DOC      1339   6-18-90   6:03p
    FREE!    DOC       985   9-25-90   9:51p
    SHARE    DOC      2500   8-05-90  12:00p
    MLABEL   EXE    256395   3-12-91   6:38p
    MAILDOC  EXE     30253  11-10-90   3:55p
    GO       BAT        38   7-23-91   2:37a
    GO       TXT       771   8-01-91   2:01a
    FILE2745 TXT       748   8-01-91   1:51a
           11 file(s)     329537 bytes
                           26624 bytes free
