---
layout: page
title: "PC-SIG Diskette Library (Disk #2716)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2716/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2716"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ARCE.DOC

{% raw %}
```
ARCE Command                                          Version 3.1c
------------                                          Feb 06, 1988
Purpose:  Use ARCE to extract files from an ARC archive file.
Format:
      ARCE  [d:][path]filename.ext  [filespecs...] [d:outpath]
                                    [/R]
                                    [/Q]
                                    [/P]
                                    [/T]
                                    [/Gpassword]
Remarks:
      The drive and path names are optional. If omitted, the  current
      drive and path name is used.
      The filename must be  supplied. The extension defaults  to ARC.
      All files matching the supplied filename are processed. The ARC
      filename may contain the * and ? wildcard characters.
      If  no  filespecs  are   supplied,  all  files  are   extracted.
      Otherwise, only those ARC members  which match one of the  up to
      16 filespecs are extracted.
      The extracted files  may be placed  on another drive,  and/or in
      another subdirectory by following the optional filespecs with  a
      drive designator and/or path name.
      If  the  file  being  extracted  already  exists,  you are asked
      whether or not you want to over-write it. You may use the |  /R
      option to bypass this prompt. Use a Y followed by the |  return
      key to over-write the file.
      Use the /Q option to suppress alarm sounds, beeps, and bells.
      Use  the  /P  option  to  write  the  extracted files to the DOS
      standard output  file. With  /P, you  may pipe  or redirect the
      output. An initial line feed  is added to the beginning  of the
      output file.
      Use the /T option to test the archive's integrity. No files will
      be extracted.
      If the file was encrypted, use the /G option to supply the  same
      password as was used to create the file, e.g. /GSECRET.
      ARCE 3.1c, Copyright (c) 1986-88, Wayne Chin and Vernon D. Buerg.
      ALL RIGHTS RESERVED.
                      Examples
                      --------
      o  Extract all file from TEST.ARC onto the current drive:
            ARCE TEST
      o  Extract only file with  an extension of .ASM from the archive
         SOURCE.ARC on drive B and in subdirectory SAVE:
            ARCE B:\SAVE\SOURCE *.ASM
      o  Extract  all  files  from  all  ARC files in the subdirectory
         called TEST on drive C:
            ARCE C:\TEST\*
      o  Extract  all  files  from  PROGA.ARC  and  place the files in
         subdirectory OLD on drive B:
            ARCE PROGA.ARC B:\OLD
      o  Extract all files with an extension of .COM and .EXE from the
         archive PROGS.ARC in directory NEW\WORK on drive B, and place
         the  them  in  subdirectory  SAVE\TEST  on  drive  A; replace
         existing file:
            ARCE B:\NEW\WORK\PROGS *.COM *.EXE A:\SAVE\TEST /R
      o  Extract  the  file  READ.ME  from  the  archive GIZMO.ARC and
         display it on the console instead of writing it to a file:
            ARCE GIZMO READ.ME /P
      o  Same as above, except  pass the extracted READ.ME file to the
         LIST file viewer:
            ARCE GIZMO READ.ME /P | LIST /S
                      Error Messages
                      --------------
    'filename - premature EOF reading '
      Data  is  missing  from  the  archive  file.  The  program   is
      terminated.
    'filename - unable to set file datestamp'
      The file datestamp is set to the current date and time, and  the
      next archive member is processed.
    'filename - WARNING: file CRC does not match!'
      The extracted member  is left on  the output disk,  and the next
      archive member is processed.  The file is probably  invalid but
      is left on the disk for your examination.
    'Invalid filespec(s)'
      The filespec syntax is incorrect. The filename part may be from
      1  to  eight  characters,  and  may  include the ? or * wildcard
      characters. The extension may be none to three characters,  and
      may  include  wildcards.  There  is  a  maximum of 16 filespecs
      allowed. The program terminates.
    'filename - file already exists. Overwrite it? (y/N) '
      The member being extracted already  exists. If you are using  a
      data  path  utility,  the  file  may  not  actually  be  in  the
      subdirectory be used for output.  Respond with the letter Y  to
      over-write the existing  file, or respond  with the letter  N to
      skip this member and continue to the next.
    'Abort: Stack overflow'
      The member  being extracted  has invalid  data. The  program is
      terminated.
    'filename - invalid decode tree count'
      The member  being extracted  has invalid  data. The  program is
      terminated.
    'filename - new archive format 7 not yet supported'
      Format 7 is a special file compression method used internally by
      SEA,  the  authors  of  ARC. Processing continues with the next
      archive member.
    'Unable to open archive > arcname'
      The  specified  ARC   archive  file  was   not  found,  or   was
      inaccessible. The program terminates.
    'CREATE failed > filename'
      There was insufficient directory  space, or a failure  accessing
      the output disk. The program terminates.
      'Invalid archive format!'
      The archive file data is invalid. The program terminates.
    'Incorrect DOS version'
      Version  2.0  or  later  of  PC  DOS  must be used. The program
      terminates
    'Not enough memory.'
      A minimum  of 112k  bytes of  memory is  required. The  program
      terminates.
    'I/O error reading from arcname'
      An incorrectable error occurred attempting to read data from the
      archive file. The program terminates.
    'I/O error writing or disk full > filename'
      There was not  enough disk space  to write the  complete archive
      member.  The  partially  extracted  file  is  scratched and the
      program terminates.
    'No matching file(s) found'
      No archive files were  found that matched the  supplied filename
      specifications. The program terminates.
    'filename - ERROR: invalid file codes'
      An error was detected while attempting to decode a crunched
      file. Either some data bytes are invalid, there are extra
      bytes, or there are bytes missing. The archive is invalid.
                      Notices
                      -------
      ARCE (c) Copyright 1986-1988 by Wayne Chin and Vernon D. Buerg
      ALL RIGHTS RESERVED.
      ARCE is free, but it is a copyrighted work and may be distributed
      only pursuant to this license.
      Permission is hereby granted to reproduce and disseminate ARCE so
      long as:
         (1)  No remuneration of any kind is received in exchange; and
         (2)  Distribution is without ANY modification to the contents of
              ARCE.COM and all accompanying documentation and/or support
              files, including the copyright notice and this license.
      No copy of ARCE may be distributed without including a copy of this
      license.
      Any other use is prohibited without express, written permission in
      advance.
              Vernon D. Buerg
              139 White Oak Circle
              Petaluma, CA  94952
              CompuServe: 70007,1212
              Data/BBS:   707-778-8944
      For use by corporations, institutions, or for profit, contact
      System Enhancement Associates for licensing information.
                 System Enhancement Associates
                 21 New Street
                 Wayne, NJ 07470
```
{% endraw %}

## CATALOG.DOC

{% raw %}
```
                            UNUSUAL SOFTWARE

BY THE NUMBERS: Uses the philosophy of Numerology to analyze your name and
birthdate for their symbolic meaning and metaphysical vibrations. Pythagorean
system takes name changes into account, analyzes 10 separate personality
elements, provides forecast for coming year, saves readings for future
reference. Advanced version includes screen color options, file saving
option, separate "Quicknum" program for short interpretations using Chaldean
system. Documentation included. This has been our most popular program for
over two years! (ARCed) Version 3.2 requires: DOS 2.0 or later, 360K RAM,
hard disk OR dual-floppy system.

CLICHE FINDER: Helps avoid the use of trite and overused words and phrases.
Checks a document for the presence of any of several hundred cliches and
produces a report. Comes with a utility program so you can edit the cliche
list. A must for writers! Instructions included. (ARCed) Version 1.0
requires: DOS 2.0 or later, 360K.

CREATIVITY PACKAGE: 3-disk set. Disk #1 contains Thomas A. Easton's complete
book, "Think Thunder! And Unleash Your Creativity", a straightforward
explanation of the nature of creativity and how to develop it. Disk #2 holds
the program "Thunder Thought", a proven tool for computer-aided brain-
storming, developing and refining ideas, particularly in the fields of crea-
tive writing and inventing. (Registration includes Clipper and BASIC source
code for this program.) Disk #3 is "Versifier", Rosemary West's amazing
poetry writing program that works with your vocabulary to create fascinating
free-verse or haiku poetry. Complete documentation is included. This program
was featured in Scientific American, Analog, Pulpsmith and Factsheet Five.
(Not ARCed) Version 2.3 requires: DOS 2.0 or later, 400K RAM.

CRYSTAL BALL: Based on Thomas A. Easton's article, "Psychics, Computers, and
Psychic Computers" in The Skeptical Inquirer, this program makes predictions
and answers questions with a sometimes enigmatic style reminiscent of the
ancient Greek oracles. You can select subject matter for predictions of per-
sonal interest. Complete documentation included. (ARCed) Version 2.1
requires: DOS 2.0 or newer, 360K RAM.

CURSES!: A humorous and creative "insult generator" with a different twist. A
single keystroke switches from insults to compliments! Phrases are randomly
generated based on your vivid vocabulary! You control the contents, so the
program can be used to generate descriptive phrases on any subject. (Not
ARCed) Version 1.0 requires: DOS 2.0 or later, 360K. NEW!

FORTUNE TELLER: A potpourri of divination and fortune telling techniques.
Offers 3 separate playing-card methods, dice method, short Numerology
reading, and Runes. Includes history and explanation of each method. Advanced
version includes ESP test, color options. Complete documentation included.
(ARCed) Version 2.7 requires: DOS 2.0 or later, 400K RAM, hard disk OR dual-
floppy system.

GEOMANCY: An ancient system of divination, sometimes associated with black
magic, creates Astro-Geomantic chart based on your area of inquiry. Readings
can be printed or saved for study. Includes explanation of Geomantic figures
and chart. Advanced version has "boss" button. Documentation included. (Not
ARCed)  Version 2.2 requires: DOS 2.0 or later, 360K

MAILLIST: Easy-to-use mailing list manager for business or personal use.
Creates merge files for WordPerfect, prints labels (1-across or 3-across),
automatic duplicate checking, search by any field, soundalike search, restore
deleted records, manages up to 99 separate lists. You can change default
drive for data, control screen colors, compare or combine two lists. Five
fields for user coding, Quick Find feature, pop-up notepad for each record,
and more. Simplicity and flexibility make MAILLIST great for small
businesses. Documentation included. Registration also includes Clipper source
code. (Not ARCed) Version 4.2 requires: DOS 2.0 or later, 400K RAM. Hard disk
strongly recommended.

M-LABEL: Works with the mailing lists created by MAILLIST, to allow complete
customization of your mailing labels. You can choose one, two, or three
across, from 1 to 100 lines per label, label width from 5 to 250 characters,
left margin padding, distance between labels horizontally and vertically. You
can pick exactly which information will be placed on which line of the label.
Can be used to generate envelopes, cards, and simple reports, as well as la-
bels. (Not ARCed) Version 2.0 requires: MAILLIST, DOS 2.0 or later, 360K RAM.
Hard disk very strongly recommended. NEW!

MAYAN CALENDAR: Uses the astronomical knowledge of the ancient Mayans to
convert a modern calendar date to its Mayan equivalent and give the Mayan
astrological interpretation. Easy-to-understand documentation and history of
the Mayan calendar are included on the disk. Also allows use of Julian period
dates, and will calculate from Mayan date to modern date. Has chart of Mayan
and Aztec day and month names. Advanced version includes color options. (Not
ARCed) Version 3.3 requires: DOS 2.0 or later, 360K RAM.

POETRY GENERATOR: Turn your computer into a poet! Using a 20,000-word
vocabulary, this program creates free-verse poems at the touch of a button.
Using the structure of actual poems as models, the program randomly combines
words and short phrases into verses four to nine lines long. The results are
fascinating. Some of these poems have actually been published in a national
magazine! Advanced version has larger vocabulary, creates poems up to 12
lines, includes haikus, and has options for personalized poems and printouts.
Instructions included. This program has been featured in the Los Angeles
Times, Scientific American and Writer's Digest. (ARCed) Version 2.1 requires:
DOS 2.1 or later, 256K RAM, HARD DISK.

SIMPLE MONTHLY BILLING: ** COMING SOON **  This is a billing program
specifically designed for the small business with customers who are billed
for the same amount every month, such as gardeners, piano teachers, pool
services, membership organizations, etc. The program keeps track of the
monthly charge for each client, for up to three separate services, and also
allows insertion of "extra" charges outside the normal monthly fees. Designed
for the non-accountant, this simple, single-entry system posts the charges
each month, keeps track of each client's balance, prints statements and
simple reports. We plan to release this program in late 1990. Registration
fee and system requirements not yet determined.

SOOTHSAYER: (formerly "Oracle") Gives both Tarot card and I Ching readings. I
Ching uses coin-toss or yarrow-stick method, draws hexagrams on screen. Tarot
uses 10-card layout, provides brief description and interpretation of each
card. You may edit Tarot card descriptions and interpretations to match your
favorite deck. I Ching includes second hexagram for "moving" lines. (ARCed)
Version 4.3 requires: DOS 2.1 or later, 340K, hard disk OR 2-floppy system.

RICHARD WEBSTER'S AURA READING and RICHARD WEBSTER'S QUICK NUMEROLOGY: Based
on the work and research of internationally-known psychic entertainer Richard
Webster, WAURA helps you learn what to look for when attempting to see the
human aura. WQUICK uses a special method of Numerology, popular in Australia
and New Zealand, to give a quick but pointed personality profile. (ARCed)
Version 1.0 requires: DOS 2.0 or later, 360K, hard disk OR 2-floppy system.
NEW!

WORKBASE: Designed with the serious Clipper developer in mind, WORKBASE
provides an interactive environment for "dBASE language" commands, including
some that may be new to you. Allows you to create a DBF; append, edit and
browse records; restore from and save to MEM files; display memory; display
structure, modify structure; and many other commands necessary for
development and troubleshooting and support. Unlike other "dot prompt"
programs, this one works! (Not ARCed) Version 2.0 requires: DOS 2.0 or later,
440K. NEW!

NEWSLETTER: First-time registration includes a four-issue subscription to our
newsletter. Unregistered users or renewing readers may subscribe for $5/four
issues. Published at irregular intervals, includes information of interest to
the home computer user, with an emphasis on assistance for beginners.

                             IMPORTANT INFORMATION

   All our "Unusual Software" products are sold as shareware. This is a "try
before you buy" system; you may use the trial version of a program for a
limited period (usually 2 to 3 weeks) to evaluate it. If you like the pro-
gram, you are expected to register your use by paying the registration fee.
As a registered user, you receive the most advanced version of the program.
Trial versions of our programs are distributed by most shareware disk
vendors, who generally charge between $1 and $8 per disk. (This fee is for
the distribution service only; it is not paid to us, and is not part of the
registration fee.) You may also obtain the trial version of any of our pro-
ducts by sending a double-sided, double-density 5 1/4" diskette in a sturdy,
reusable mailer with sufficient return postage (enough postage for a 4-ounce,
first-class letter for the first 1 or 2 disks; an additional first class
stamp for each subsequent disk. Send 3 disks for Creativity Package). If you
don't want to bother with disks and postage, send $5 for the trial version of
1 disk, $7 for 2, $8 for 3, and $1 for each additional disk. The trial
version is a fully-functioning program, but in some cases may lack some of
the extra features of the registered version. If you don't like the program,
you are free to erase it, or pass it on to someone else to try. Otherwise,
you can send in the fee and get the registered version. Of course, you may
register a program without going through the trial version first. In a few
cases, there are no additional features in the registered version, but you
still must register if you like and use the program. Registered users receive
support by mail, a newsletter with upgrade notifications, as well as special
discount and bonus offers.
   We distribute a limited selection of shareware and public domain programs
from other authors. The fee paid to us for these "Bonus Disks" is for our
copying and distribution service. It is not paid to the authors and is not
part of the registration fee. See the Bonus Disk section for details.
   Note that some programs are "ARCed". This means that in order to fit
several large files on a single disk, a special archiving (compressing)
process has been used. The files must be un-arced before use. We provide the
un-arcing program.
   Before ordering software, read the description carefully, and pay special
attention to the system requirements. Some programs require a hard disk,
graphics capability, or additional memory. As far as we know, our software
will run on most "IBM compatible" personal computers. However, since equip-
ment configurations vary greatly, we cannot guarantee correct results for
everyone. If you have a problem, please let us know.

                                   HOW TO ORDER:

REGISTRATION is $6 for Penname, $10 for Cliche Finder or Curses, $19 for
Crystal Ball. Registration for M-LABEL is $10 if you are a registered user of
MAILLIST, $39 if you are not. WORKBASE registration is $49. All other
programs are $29 each. MAILLIST and THUNDER THOUGHT (part of Creativity
Package) registrations include source code. Source code is NOT provided for
other programs. CURSES! registration includes a free bonus disk.

Take $5 off your registration if you send a double-sided, double-density
5 1/4" diskette in a sturdy, reusable mailer with sufficient return postage.
(For POETRY GENERATOR, send 2 disks.) Postage should be the same amount
needed for a 4-ounce, first-class letter for the first 1 or 2 disks, and an
additional first-class stamp for each subsequent disk. This discount does NOT
apply to CREATIVITY PACKAGE, MAILLIST, or programs with registration fees
less than $20, and is not to be combined with other discounts. If you want
the discount, don't skimp on the stamps! The disk mailer you send is the one
we will return to you.

If you are already a registered user of one or more products from our
"Unusual Software" catalog (not Bonus Disks), take $5 off your registration
of any new program. (Discount does not apply TO MAILLIST, CREATIVITY PACKAGE,
or programs with registration under $18, and may not be combined with any
other discount offer.)

BONUS DISKS: $3 for each disk. Add a $3 shipping fee to your total order.
(Shipping fee applies only when Bonus Disks are ordered.) This is not
registration, just a copying fee. Registration should be paid to the authors
of the programs.

FOREIGN ORDERS: Countries other than Canada, please add $4 for special
postage and handling. Unfortunately, we are unable to handle foreign funds.
Payment must be in U.S. dollars, payable through a U.S. bank. Canadian postal
money orders in U.S. funds are also acceptable.

RUSH ORDERS: We usually fill orders within 2 working days of receipt. How
long it takes the mail to travel between you and us is out of our hands. If
you feel that you MUST have your order right away, you can add $10 for
overnight mail (U.S.A. only).

3 1/5" DISKS: We normally provide 5 1/4" disks. If you must have 3 1/5"
disks, please include an extra $1.00 per disk. Under no circumstances will we
ship unregistered versions on 3 1/5" disks.

NOTE: Some users have reported compatibility problems with the utility used
to un-arc large files (this is rare). If you prefer to receive un-arced
programs, please include an extra $3 per disk to cover special handling and
materials.

All prices and discounts listed in this bulletin expire 6/30/90. We reserve
the right to change product descriptions, system requirements and other
information without notice, and to modify or rescind any discounts or special
offers at any time.                               BONUS DISKS

We are not the authors of these programs, nor are we associated with the
authors in any way other than as a distributor of the programs in accordance
with the authors' terms of distribution. Some of these programs require a
shareware registration fee from satisfied users. Our $3.00 fee per disk is a
payment for copying and distributing the disks; it is not the registration
fee. Please direct shareware registration payments and specific questions
about these programs to the authors whose names appear in the documentation.

Most of the files on these disks have been archived in order to fit more
files on a single disk. Archiving (also known as compressing) creates a file
with the extension ARC (or ZIP). The compressed file may contain several
related files. To use these files, you must un-compress them. An un-
compressing utility is included on each disk for your convenience.

These programs have been tested, but due to the many possible hardware and
software configurations, we cannot guarantee that any program will run on any
particular system. We do not warrant these programs in any way. If we provide
you with an unreadable disk, you may return it for a replacement copy of the
same disk. Read the file descriptions carefully; some of these programs have
special requirements.

BONUS DISK #1: METAPHYSICS AND CREATIVITY

BIORYTHM  Excellent biorhythm program
HAIKU     Offbeat "haiku" creation
JCAL7     Calculate Jewish calendar dates
PALMREAD  Cute palm reading program, requires BASIC and graphics
STONES    Teach yourself to read runes   
TVSHOW6   Very offbeat "performance art" program, requires CGA 

BONUS DISK #2: HUMOR, JOKES, AND ENTERTAINMENT

CRUMBLE   When you try to clear screen with CLS, it crumbles to bottom
CRYHELP   Someone is trapped inside
DAZZLER   Colorful patterns, requires EGA
DRIP      Harmless, frightening, causes words to fall apart on screen
SPLAT     Creates splash patterns, requires EGA
HIT       Duck with hammer smashes computer, requires CGA
LOVEDOS   Lovestruck computer is very uncooperative
RUDEDOS   Computer gets mean and rude
SLOD      When you press Ctrl-Alt-Del, computer goes though a "slow death"
          before reboot

BONUS DISK #3: MISCELLANEOUS UTILITIES

CITIZEN   Set pitch and print envelopes from DOS with Citizen MSP-10/15 or
          MSP-40/45
DMP140    A printer controller and spooler with many excellent features
PENNAME   Assists authors in creating character names or nom de plume
QUICK     Send Print-Screen to a file instead of the printer
SILENCER  Gets rid of those annoying beeps and toots in many applications
TELEPORT  Capture whatever appears on screen in an editable file

BONUS DISK #4: HARD DISK UTILITIES

PCMAG    36 great hard disk utilities from PC Magazine
BAKERS   "Bakers Dozen", more than 13 excellent utilities from Buttonware

BONUS DISK #5: ART AND MUSIC

DULCIMER Electronic tuning for lap dulcimer with sheet music for several
         songs, Requires CGA
GUITAR   Learn fingering and scales on the guitar
ORIGAMI  Excellent program teaches the art of paper folding, requires CGA

BONUS DISK #6: THUNDER THOUGHT VOCABULARY

Contains over 30 different sets of vocabulary lists for use with the "Thunder
Thought" portion of our "Creativity Package". Vocabularies are classified by
subject matter. AVAILABLE ONLY TO REGISTERED USERS OF CREATIVITY PACKAGE

BONUS DISK #7: ELECTRIC ALMANAC

Great fun! Includes almanac, astronomy tables, lunar calendar, hunting &
fishing tables, metric conversion, astrology, action graphs, predictions,
assorted oracles, lotto numbers.

BONUS DISK #8: MORE FUN

HARD AT WORK   Keeps your computer busy while you take a break
TXT            Displays the contents of any text file in huge, moving letters
HANDWRITING    Character analysis with handwriting
EATERS         Bugs gobble up your screen
DRAIN          Could there be water in the A drive?
RIGHT & LEFT   Sweep the screen clear to the right or to the left

BONUS DISK #9: PKZIP

One of the most popular file compression programs, has utilities for
compressing, un-compressing, and creating self-extracting archive files.

All prices and discounts listed in this bulletin expire 12/31/90. Titles,
descriptions, terms and conditions, and prices may be changed without
notice.


                                  ORDER FORM

To: R.K. West Consulting        Your Name: ______________________________
    P.O. Box 8059
    Mission Hills, CA 91346     Address: ________________________________

    Please include your phone            ________________________________
    number in case we have a
    question about your order.  Phone:   ________________________________

ITEM ORDERED                    REGULAR PRICE   -DISCOUNT       TOTAL PRICE

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

______________________________  _____________   __________   _____________

Please pay by check or money order. We            SUBTOTAL:  _____________
do not recommend sending cash in the
mail. For your convenience, you may    Bonus Disk Shipping:  _____________
register by credit card through the                  $3.00
Public (Software) Library. Call 1-800-
242-4775. (This may involve an extra      Foreign Shipping:  _____________
shipping fee.) You can Fax credit card               $4.00  
orders to PsL at 713-524-6398, or mail
it to them at P.O. Box 35705, Houston,        3 1/2" Disks:  _____________
TX 77235. Remember to include your          $1.00 per disk
credit card number and expiration date.
                                                     Other:  _____________
Where did you get this disk?         
                                            TOTAL ENCLOSED:  _____________
______________________________________


```
{% endraw %}

## FILE2716.TXT

{% raw %}
```
Disk No: 2716
Disk Title: Richard Webster Programs
PC-SIG Version: S1

Program Title: Richard Webster Programs
Author Version: 1.1
Author Registration: $29.00
Special Requirements: Hard disk or dual-floppy system.

RICHARD WEBSTER'S AURA READING and RICHARD WEBSTER'S QUICK NUMEROLOGY:
Based on the work and research of internationally-known psychic
entertainer Richard Webster, WAURA helps you learn what to look for when
attempting to see the human aura. WQUICK uses a special method of
Numerology, popular in Australia and New Zealand, to give a quick but
pointed personality profile. Great fun! Complete documentation included.

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
║  <<<<  PC-SIG Disk #2715 The Electronic Catalog Construction Kit  >>>>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install the program on a floppy disk, type: FLOPPY  (press enter)    ║
║                                                                         ║
║ To install to the hard drive. Copy all files to a subdirectory, and     ║
║ (from the subdirectory) type: ARCE WEBSTER.ARC   (press Enter)          ║
║ Once the files have been uncompressed;                                  ║
║                                                                         ║
║ To view the documentation, type: WAURADOC   (press Enter)               ║
║                                                                         ║
║ To start WAURA, type: WAURA   (press Enter)                             ║
║                                                                         ║
║ To start WQUICK, type: WQUICK   (press Enter)                           ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Dear Shareware Vendor:

The software distributed on this disk is copyrighted material and is subject
to certain restrictions on copying and distribution.

You may copy and distribute the UNREGISTERED version of this software,
provided: (a) You do not rename, change or omit any of the files unless you
receive express permission to do so in writing from the author, (b) You
understand that you may not "sell" this software, but you may charge a
reasonable copying fee for providing copies on disk, (c) You do not "rent" or
"loan" copies of this software, (d) You do not advertise this software as
"free", "cheap" or "public domain". Vendors must comply with the standards
set by the Association of Shareware Professionals (ASP).

The following files MUST be included on all distribution copies of this
program:

    WAURA.EXE
    WQUICK.EXE
    WAURADOC.COM
    VENDOR.DOC

You may use "file compression" techniques in order to fit more programs on a
single disk.

This program may NOT be distributed on the same disk with any so-called
"adult" or "X-rated" materials.

If you indicate ASP membership in your catalog, please do so for your
listing of this program.

If you are an ASP-approved vendor who received this material prior to December
31, 1990, you may distribute this software, provided you comply with the above
conditions. If you are not an ASP-approved vendor, or if you received this
material after December 31, 1990, you must get written permission from the
author before distributing this software. The author reserves the right to 
deny or withdraw permission to distribute this software at any time, for any
(or no) reason.

For further information:

Rosemary West
R.K. West Consulting
P.O. Box 8059
Mission Hills, CA 91346

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2716

     Volume in drive A has no label
     Directory of A:\

    WEBSTER  ARC    305687   3-27-90   5:01p
    FLOPPY   BAT       273  11-27-89  12:59p
    ARCE     COM      7128   2-06-88   1:06p
    ARCE     DOC      7786   1-12-89   7:51p
    CATALOG  DOC     20909   2-18-90   2:22p
    VENDOR   DOC      1789   3-27-90   9:38a
    GO       BAT        56   7-22-91  12:55a
    GO       TXT      1464   7-21-91   1:19p
    FILE2716 TXT       754   7-22-91  12:59a
            9 file(s)     345846 bytes
                           12288 bytes free
