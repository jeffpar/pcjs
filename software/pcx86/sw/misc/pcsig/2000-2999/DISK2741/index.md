---
layout: page
title: "PC-SIG Diskette Library (Disk #2741)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2741/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2741"
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
                          "UNUSUAL SOFTWARE" (TM)

MAILLIST: An easy-to-use mailing list manager handles up to 99 separate
lists. Prints labels (1- or 3-across), has automatic duplicate checking,
search by any field, "sound alike" search, extra fields for user coding,
quick find, pop-up notepad for each record, compare and combine lists,
optional password protection, restore deleted records, change program
defaults, and more. Simplicity and flexibility make MAILLIST perfect for
both small businesses and personal use. (archived) Version 5.11 requires:
DOS 2.0 or later, 460K RAM. Hard disk very strongly recommended.
Registration at $39.00 includes both MAILLIST and M-LABEL, MAILLIST's Clip-
per source code, and a printed manual.

M-LABEL: Works with mailing lists created by MAILLIST to customize labels,
index cards, continuous-feed envelopes, etc. Choose from 1 to 4 across, 1
to 100 lines, width up to 250 characters, top and left margin padding, dis-
tance between labels. Pick exactly which fields will go on which line.
"User-defined fields" let you insert any text into the printed output.
(archived) Version 3.11 requires: MAILLIST, DOS 2.0 or later, 360K RAM.
Hard disk recommended. This is part of MAILLIST (see description above).

CREATIVITY PACKAGE: 3-disk set. Disk #1 is Thomas A. Easton's complete
book, "Think Thunder! And Unleash Your Creativity", a straightforward ex-
planation of the nature of creativity and how to develop it. Disk #2 has
the program "Thunder Thought", a proven tool for computer-aided brainstor-
ming, developing and refining ideas, particularly in the fields of creative
writing, advertising and inventing. Disk #3 is "Versifier", Rosemary West's
fascinating poetry writing program that works with your vocabulary to
create free-verse or haiku poetry. This program was featured in Scientific
American, Analog, Pulpsmith and Factsheet Five. (May be archived) Version
3.0 requires: DOS 2.0 or later, 400K RAM. Registration at $34.00 includes
Clipper and BASIC source code for "Thunder Thought", and a printed manual.

FORTUNE TELLER: A potpourri of divination and fortune telling techniques
offers 3 playing-card methods, dice, short Numerology reading, and Runes.
Includes history and explanation of each method. Also includes an ESP test.
(archived) Version 2.7 requires: DOS 2.0 or later, 400K RAM, hard disk OR
dual-floppy system. $29

BY THE NUMBERS: A complete personality report uses the philosophy of
Numerology to analyze your name and birthdate for their symbolic meaning
and metaphysical vibrations. Pythagorean system takes name changes into ac-
count, analyzes 10 separate personality elements, provides forecast for co-
ming year. Professional-quality reports can be saved and edited for a truly
personalized reading. This program is used by many mail-order numer-
ologists. This has been our most popular program for nearly three years!
(archived) Version 4.4 requires: DOS 2.0 or later, 420K, hard disk OR dual-
floppy system. $29 ** Price will go up in 1991 - Register Now!

BOOK OF CHANGES: The I Ching, a classic of Chinese literature, is a book of
divinations originating in antiquity. Its poetic messages are used both for
fortune-telling and for insight into humanity's role in the world. By
tossing coins or sticks, you create a pattern of lines to form the hexagram
to be interpreted. The "yin and yang" philosophy of the I Ching is ideally
suited to the "0 and 1" mentality of the computer. This customizable pro-
gram lets you edit the text and add comments. Readings can be printed and
saved. (archived) Version 1.31 requires: DOS 2.0 or later, 420K RAM, hard
disk OR 2-floppy system. $24. (Price will go up in June 1991.) Registration
includes printed manual.

CLICHE FINDER: Helps you avoid trite and overused words and phrases. Checks
a document for the presence of any of several hundred cliches and produces
a report. Comes with a utility program so you can edit the cliche list. A
must for writers! "Cliche Finder meets a real need." -- Robert M. Monaghan,
North Texas PC News. (archived) Version 1.5 requires: DOS 2.0 or later,
360K. $10

CRYSTAL BALL: Welcome to the world of the psychic computer! This program
makes predictions and answers questions with a sometimes enigmatic style
reminiscent of the ancient Greek oracles. You can select subject matter for
predictions of personal interest. (archived) Version 2.5 requires: DOS 2.0
or newer, 360K RAM. $19

POETRY GENERATOR: Turn your computer into a poet! With a 20,000-word
vocabulary, create free-verse poems at the touch of a key. Using the
structure of actual poems as models, the program randomly combines words
and phrases into verses four to nine lines long, with fascinating results.
Some of these poems have actually been published in a national magazine!
Featured in the Los Angeles Times, Scientific American and Writer's Digest.
(archived) Version 2.1 requires: DOS 2.1 or later, 256K RAM, HARD DISK. $29

CURSES!: A humorous and creative "insult generator" with a different twist.
A single keystroke switches from insults to compliments! Phrases are
randomly generated based on your vivid vocabulary! You control the con-
tents, so the program can be used to generate descriptive phrases on any
subject. (Not archived) Version 1.5 requires: DOS 2.0 or later, 360K. $10

PERSONAL TAROT: The Tarot is a method of divination used and adapted around
the world throughout history. The symbolism displayed in the cards' designs
reveals the ancient wisdom and folklore of many cultures. Now you can enjoy
professional-quality Tarot card readings on your PC! Personal Tarot auto-
mates shuffling and dealing, builds a ten-card layout, displays card
descriptions and meanings. This customizable program lets you edit the text
and add comments for truly personalized readings. (archived) Version 2.1
requires: DOS 2.0 or later, 420K RAM, hard disk OR 2-floppy system. $24.
(Price will go up in June 1991.) Registration includes printed manual.

MAYAN CALENDAR: Use the astronomical knowledge of the ancient Mayans to
convert a modern calendar date to its Mayan equivalent and get the Mayan
astrological interpretation. Easy-to-understand documentation and history
of the Mayan calendar included on disk. Allows Julian period dates, and
will convert Mayan date to modern date. Chart of Mayan and Aztec day and
month names. (Not archived) Version 3.32 requires: DOS 2.0 or later, 360K
RAM. $29

RICHARD WEBSTER PROGRAMS: Based on the work and research of
internationally-known psychic entertainer Richard Webster, "Aura Reading"
helps you learn what to look for when attempting to see the human aura.
"Quick Numerology" uses a special method of Numerology, popular in
Australia and New Zealand, to give a quick but pointed personality profile.
(archived) Version 1.1 requires: DOS 2.0 or later, 360K RAM, hard disk OR
2-floppy system. $29

WORKBASE: Designed with the serious database developer in mind, WORKBASE
provides an interactive environment for "dBASE language" commands,
including some that may be new to you. Create a DBF; append, edit and
browse records; restore from and save to MEM files; display memory; display
structure, modify structure; and many other commands necessary for
development, troubleshooting and support. Current version includes a simple
PRG interpreter. If your applications use dBASE-compatible DBF files,
you'll love this handy utility. Unlike other "dot prompt" programs, this
one works! "Everything you need to create and manipulate dBASE III data,
memo and index files is here without the $700 price tag." -- Public Brand
Software. (archived) Version 3.2 requires: DOS 2.0 or later, 512K. Some
knowledge of Clipper or dBASE commands recommended. $49

GEOMANCY: An ancient system of divination, sometimes associated with black
magic, creates Astro-Geomantic chart based on your area of inquiry.
Readings can be printed or saved for study. Includes explanation of Geo-
mantic figures and chart, "boss" button. (Not archived)  Version 3.0
requires: DOS 2.0 or later, 360K RAM. $29

NEWSLETTER: First-time registration includes a three-issue subscription to
our newsletter. Unregistered users or renewing readers may subscribe for
$5/four issues in the USA; $6 US in Canada and Mexico; $8 international.
Published irregularly, shares information for home and business PC user,
emphasizing help for beginners.

                                BONUS DISKS

We are not the authors of these programs, nor are we associated with the
authors other than as a distributor of the programs in accordance with the
authors' terms of distribution. Some of these programs require a shareware
registration fee from satisfied users. Our $3.00 fee per disk is a payment
for copying and distributing the disks; it is not the registration fee.
Please direct registration payments and specific questions about these
programs to the authors whose names appear in the documentation.

Most of the files on these disks have been archived in order to fit more
files on a single disk. Archiving creates a file with the extension ARC or
ZIP. The archive file may contain several related files. To use these
files, you must un-archive them. An un-archiving utility is included on
each disk for your convenience. (Un-archived versions of Bonus Disks are
not available.)

These programs have been tested, but due to the many possible hardware and
software configurations, we cannot guarantee that any program will run on
your system. We do not warrant these programs in any way. If we provide you
with an unreadable disk, you may return it for a replacement copy of the
same disk. Read the file descriptions carefully; some of these programs
have special requirements.



BONUS DISK #1: METAPHYSICS AND CREATIVITY

Good biorhythm program; offbeat haiku writer; cute palm reading (needs
BASIC and graphics); Jewish calendar; learn to read runes; "performance
art" (needs CGA)

BONUS DISK #2: HUMOR, JOKES, AND
ENTERTAINMENT

Screen crumbler; person trapped in computer; words fall apart on screen;
splashy patterns (needs EGA); computer gets rude; computer falls in love;
duck smashes computer (needs CGA)

BONUS DISK #3: USEFUL PROGRAMS

Good printer controller and spooler; writers find character names; control
Citizen printers; send print-screen to disk; silencer for beeping programs;
capture screen in editable file

BONUS DISK #4: No longer available

BONUS DISK #5: ART AND MUSIC

Tuning and sheet music for lap dulcimer (needs CGA); learning guitar
fingering and scales; learn the art of origami (needs CGA)

BONUS DISK #6: THUNDER THOUGHT VOCABULARY

Over 30 different sets of vocabulary lists for the "Thunder Thought"
portion of "Creativity Package". Vocabularies classified by subject matter.
AVAILABLE ONLY TO REGISTERED USERS OF CREATIVITY PACKAGE.

BONUS DISK #7: ELECTRIC ALMANAC

Great fun! Almanac, astronomy tables, lunar calendar, hunting & fishing
tables, metric conversion, astrology, action graphs, predictions, assorted
oracles, lotto numbers.        

BONUS DISK #8: MORE FUN

Program keeps computer busy while you take a break; TXT displays any text
file in huge, moving letters; character analysis with handwriting; bugs
gobble screen; sweep screen clear to right or left; could there be water in
the A drive?

BONUS DISK #9: FILE COMPRESSION

Utilities to compress, un-compress, and create self-extracting archive
files.

BONUS DISK #10: POTPOURRI

Seventeen different programs in a surprise mix of games, disk utilities,
and entertainment.

BONUS DISK #11: MORE THUNDER THOUGHT

By popular request, more vocabulary files for "Thunder Thought". These are
organized to match various literary sources.

BONUS DISK #12: KIDPIX 

Twenty children's drawings and paintings converted to graphics files. Files
in BMP format (16-color bitmapped) are suitable for Windows 3.0 Wallpaper.
Files in PCX format can be used with Paintbrush or any application which
uses this format. This is not great art, but it could be fun. Best with
color. Requires: appropriate software and hardware for use of BMP or PCX
format.

BONUS #13: RECAP & PARTYDOT

If you've just spent the afternoon entering data, and then realize it's in
all uppercase when it should have been in lowercase -- or vice-versa --
then RECAP is for you. It simply changes the case on selected fields in 
any dBase-III compatible data file.
PARTYDOT is an art-generating program with lots of options. Requires color
graphics.


                           IMPORTANT INFORMATION

    All our "Unusual Software" (TM) products are sold as Shareware.
Shareware is a term used to describe a system for distribution of software.
Under this concept, software may be copied and passed along to others, or
distributed through bulletin board systems, disk copying services, etc. As
a recipient of a shareware program, you may use the software for a short
trial period to determine if it meets your needs. If it does, you pay the
registration fee. By paying the fee, you are granted the right to retain
the software for your use. Otherwise, if the software is not suitable, you
may discard it or pass it along for someone else to try. Shareware provides
substantial benefits to the computing community: * You get to try out the
software before you pay for it so you know exactly what you're buying. *
You get access to a much broader base of available programs. Thousands of
excellent programs are written by experts who would never consider
marketing through conventional commercial channels. Through shareware,
these people make their programs available to the community. Usually, all
they ask in return is a small fee to reward them for the time and effort
they've put into the program. * Shareware is substantially less expensive
than most commercial programs. You don't pay for expensive advertising
campaigns and fancy packages. * The shareware concept is based entirely on
the honor system, and generally works well. Most people are honest and
wouldn't violate the trust placed in them by the author of the software. 
    You may obtain the trial version of any of our products from
ASP-approved vendors who include them in their libraries, or by downloading
them from CompuServe. [One such vendor is Public (Software) Library, P.O.
Box 35705, Houston, TX 77235-5705; 800-242-4775, 713-524-6394. Another is
Public Brand Software, P.O. Box 51351, Indianapolis, IN 46251;
800-426-34475, 317-856-7571] Of course, you may register a program without
ordering the trial version first. Registered users receive technical
support, a newsletter, and upgrade notifications, as well as discounts on
registrations of other programs, and occasional bonus offers.
    We also distribute a small selection of programs from other authors.
The fee paid to us for these "Bonus Disks" is for our copying and
distribution service. It is not paid to the authors and is not part of the
registration fee. See the Bonus Disk section.
    Note that some programs are "archived". This means that in order to fit
several large files on a single disk, a special archiving (compressing)
process has been used. The files must be un-compressed before use. We
provide the un-compressing program.
    Before ordering software, read the description carefully, paying
special attention to system requirements. Some programs require a hard
disk, graphics capability, or additional memory. As far as we know, our
software will run on most "IBM compatible" personal computers. However,
since equipment configurations vary greatly, we cannot guarantee correct
results for everyone. If you have a problem, please let us know.

                               HOW TO ORDER:

REGISTRATION fees are listed with the description of each program.

If you are already a registered user of one or more products from our
"Unusual Software" (tm) catalog (not Bonus Disks), take $5 off your
registration of any new $29.00+ program. (Discount does not apply to
CREATIVITY PACKAGE, and may not be combined with any other discount offer.)

BONUS DISKS: $3 for each disk. Add a $3 shipping fee to your total order.
(Shipping fee applies only when Bonus Disks are ordered.) This is not
registration, just a copying fee. Registration should be paid to the
authors of the programs.

3 1/5" DISKS: We normally provide 5 1/4" disks. If you must have 3 1/5"
disks, please include an extra $1.00 per disk.

FOREIGN ORDERS: Please add $6.00 for special postage and handling. Unfortu-
nately, we are unable to handle foreign funds. The most convenient method
for overseas customers is to pay by credit card (instructions below), or
U.S. currency by registered mail. Checks must be in U.S. dollars, drawn on
a U.S. bank.  Canadian postal money orders in U.S. funds are also accept-
able. 

IN AUSTRALIA: You can pay your registration fee through Spearwood Shareware
Service, 22 Sitwell Close, Spearwood 6163, Western Australia. Phone 09 418
5721 (Perth Metro only), 008 999877 (Australia Wide - Free Call). 

CREDIT CARDS: For your convenience, you may register by credit card through
the Public (Software) Library. In the U.S. call toll free, 800-242-4775.
Others, call 713/524-6394. You can Fax your credit card order to PSL at
713-524-6398; or mail it to them at P.O. Box 35705, Houston, TX 77235; or
send it via CompuServe at 71355,470. American Express, Visa, MasterCard,
Discover. Please do not mail credit card orders to R.K. West Consulting
(and do not mail checks to PsL). Minimum credit card order is $15.00.

SPECIAL HANDLING: Please do not request special handling, such as Express
Mail, Federal Express delivery, UPS service, registered or insured mail,
etc. We get excellent results from First Class and regular Air Mail
delivery. The additional mileage and labor involved in providing special
services are prohibitive. (Exceptions may be made for certain foreign users
living under corrupt regimes who cannot receive mail unless it is
registered.)

NOTE: Some users have reported compatibility problems with the utility used
to un-arc large files (this is rare). If you prefer to receive un-arced
programs, please include an extra $3 per disk to cover special handling and
materials. Un-arced Bonus disks are not available.

All prices and discounts listed in this bulletin expire 12/31/91. Prices
will go up in 1991, so order now! We reserve the right to change product
descriptions, system requirements and other information without notice, and
to modify or rescind any discounts or special offers at any time.                                 ORDER FORM

To: R.K. West Consulting        Your Name:______________________________   

P.O. Box 8059
Mission Hills, CA 91346, USA    Address:  ______________________________   


Please include your phone                 ______________________________   

number in case we have a
question about your order.      Phone:    ______________________________   


ITEM ORDERED                      PRICE        HOW MANY    TOTAL

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

_______________________________   __________   _________   ___________

Please pay by check or money order. For your    SUBTOTAL:  ___________
convenience, you may pay be credit card
through the Public Software Library. Minimum    Foreign
credit card order is $15. In the USA, call      Shipping:  ___________
800-242-4775. Others call 714-524-6394. You     ($6.00)
can fax a credit card order to PsL at 713-524-  Bonus Disk
6398 or mail it to P.O. Box 35705, Houston, TX  Shipping:  ___________
77235, or send it via CompuServe at 71355,470.  ($3.00)
Visa, MasterCard, American Express, Discover.   3.5" disks
Do not mail credit card orders to R.K. West,    ($1 each)  ___________
and do not mail checks to PsL.
                                                TOTAL:     ___________


All prices are in U.S. dollars, and checks must be drawn on a U.S. bank.
Canadian postal money orders in U.S. dollars are also acceptable.
Unfortunately, we cannot accept payments drawn on foreign banks. The most
convenient way for overseas customers to order is by credit card, through
the Public Software Library, as described above. 

Corporate users and others who need to register more than 5 copies of the
same program, please contact us for site licensing information.                            REGISTRATION BONUS!

CompuServe is the world's largest on-line information service. With your
computer and modem, you can tap into hundreds of databases and services:
stock market quotes, mutual fund information, home banking, support groups
for popular hardware systems and software programs, hobby and special
interest groups, games, shopping, electronic mail, and more, available 24
hours a day. CompuServe charges a monthly support fee of only $1.50 plus
usage time.

Try CompuServe with our compliments. As a registered user of one
or more of our products, you will be entitled to a free introductory
membership, including: A $15 introductory usage credit, a
complimentary subscription to CompuServe Magazine, a private user
I.D. and password. (This is normally a $39.95 value.)

When you register for our software, you'll receive information on how
to take advantage of this offer, along with the latest version of the
software, and a three-issue subscription to our newsletter.


                      Increased postage costs in 1991
                      will force a price increase, so
                                ORDER NOW!


```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
                                    C U R S E S !
                              --------------------------


                        L I C E N S E    I N F O R M A T I O N
                       ----------------------------------------

                              Last updated:  April, 1991



          This file contains important license information regarding the
          use of CURSES!.  This information applies to
          individual users who wish to pass copies out to friends and
          associates.

          User Groups, Computer Clubs, Disk Vendors and Distributors,
          Subscription Services, Disk-of-the-Month Clubs, etc., should
          refer to the VENDOR.DOC file for complete information relating to
          them.

          BBS SYSOPs should refer to the SYSOP.DOC file for complete
          information relating to them.

          PLEASE!  Show your support for Shareware by registering the
          programs you actually use.  R.K. West Consulting depends upon and
          needs your support.  Thank you!


          Trial Use License:
          ~~~~~~~~~~~~~~~~~~
          CURSES! is NOT a public domain program.  It is Copyright
          (c) 1991 by R.K. West Consulting.  All rights reserved.

          This software and accompanying documentation are protected by
          United States Copyright law and also by International Treaty
          provisions.  Any use of this software in violation of Copyright
          law or the terms of this limited license will be prosecuted to
          the best of our ability.  The conditions under which you may copy
          this software and documentation are clearly outlined below under
          "Limited Distribution License".

          R.K. West Consulting hereby grants you a limited license to use
          this software for evaluation purposes for a period not to exceed
          sixty (60) days.  If you intend to continue using this software
          (and/or its documentation) after the sixty (60) day evaluation
          period, you MUST make a registration payment to R.K. West
          Consulting.





          License Information                                   Page 1 of 3                         - CURSES! - LICENSE.DOC -


          Using this software after the sixty (60) day evaluation period,
          without registering the software is a violation of the terms of
          this limited license.

          Licensee shall not use, copy, rent, lease, sell, modify,
          decompile, disassemble, otherwise reverse engineer, or transfer
          the licensed program except as provided in this agreement.  Any
          such unauthorized use shall result in immediate and automatic
          termination of this license.

          All rights not expressly granted here are reserved to R.K. West
          Consulting.

          Limited Distribution License:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          As the copyright holder for CURSES!, R.K. West Consulting
          authorizes distribution by individuals only in accordance with
          the following restrictions.

             (User Groups, Computer Clubs, Disk Vendors and Distributors,
             Subscription Services, Disk-of-the-Month Clubs, etc., should
             refer to the VENDOR.DOC file for complete information relating
             to them.)

             (BBS SYSOPs should refer to the SYSOP.DOC file for complete
             information relating to them.)

          Individuals are hereby granted permission by R.K. West Consulting
          to copy the CURSES! diskette for their own use (for
          evaluation purposes) or for other individuals to evaluate, ONLY
          when the following conditions are met.

          The CURSES! package is defined as containing all the
          material listed in the PACKING.LST text file.  If any files
          listed in the PACKING.LST text file, or the PACKING.LST file
          itself, are missing, then the package is not complete and
          distribution is forbidden.  Please contact us to obtain a
          complete package suitable for distribution.

              o  The CURSES! package - including all related program
                 files and documentation files - CANNOT be modified in any
                 way and must be distributed as a complete package, without
                 exception.  The PACKING.LST text file contains a list of
                 all files that are part of the CURSES! package.

              o  No price or other compensation may be charged for the
                 CURSES! package.  A distribution cost may be
                 charged for the cost of the diskette, shipping and
                 handling, as long as the total (per disk) does not exceed

          License Information                                   Page 2 of 3                         - CURSES! - LICENSE.DOC -


                 US$8.00 in the U.S. and Canada, or US$12.00
                 internationally.

              o  The CURSES! package CANNOT be sold as part of some
                 other inclusive package.  Nor can it be included in any
                 commercial software packaging offer, without a written
                 agreement from R.K. West Consulting.

              o  The PRINTED User's Guide may not be reproduced in whole or
                 in part, using any means, without the written permission
                 of R.K. West Consulting.  In other words, the disk-based
                 documentation may not be distributed in PRINTED (hardcopy)
                 form.

              o  The CURSES! package cannot be "rented" or "leased"
                 to others.

              o  Licensee shall not use, copy, rent, lease, sell, modify,
                 decompile, disassemble, otherwise reverse engineer, or
                 transfer the licensed program except as provided in this
                 agreement.  Any such unauthorized use shall result in
                 immediate and automatic termination of this license.

              o  U.S. Government Information:  Use, duplication, or
                 disclosure by the U.S. Government of the computer software
                 and documentation in this package shall be subject to the
                 restricted rights applicable to commercial computer
                 software as set forth in subdivision (b)(3)(ii) of the
                 Rights in Technical Data and Computer Software clause at
                 252.227-7013 (DFARS 52.227-7013).  The
                 Contractor/manufacturer is R.K. West Consulting, P.O.
                 Box 8059, Mission Hills, CA 91346-8059.

          All rights not expressly granted here are reserved to R.K. West
          Consulting.















          License Information                                   Page 3 of 3
```
{% endraw %}

## SHR-WARE.DOC

{% raw %}
```
                        W H A T    I S    S H A R E W A R E ?
                       ---------------------------------------
                          W H A T    I S    T H E    A S P ?
                         ------------------------------------

                                 _______            
                            ____|__     |                (R)
                         --|       |    |-------------------
                           |   ____|__  |  Association of  
                           |  |       |_|  Shareware       
                           |__|   o   |    Professionals   
                         -----|   |   |---------------------
                              |___|___|    MEMBER       


                    Copyright (c) 1990, 1991 by R.K. West Consulting.
                                 All Rights Reserved.

          -----------------------------------------------------------------
                                  TABLE OF CONTENTS
          -----------------------------------------------------------------

          Some Definitions .............................................. 1
          The Shareware Concept ......................................... 2
          The Virus Problem ............................................. 3
          The Association of Shareware Professionals .................... 6
          Contacting ASP Members Via CompuServe ......................... 7
          Author Address Changes ........................................ 8
          ASP Ombudsman Statement ....................................... 8
          For More Information .......................................... 8

          Some Definitions:
          ~~~~~~~~~~~~~~~~~
          You've probably heard the terms "public domain", "freeware",
          "shareware", and others like them.  Your favorite BBS or disk
          vendor probably has many programs described by one or more of
          these words.  There's a lot of confusion about and between these
          terms, but they actually have specific meanings and implications.
          Once you understand them, you will have a much easier time
          navigating the maze of programs available to you, and
          understanding what your obligations are, or aren't, with each
          type of program.

          Let's start with some basic definitions.









          Shareware and the ASP                                Page 1 of 10          R.K. West Consulting                               SHR-WARE.DOC

          "Public domain" has a very specific legal meaning.  It means that
          the creator of a work (in this case, software), who had legal
          ownership of that work, has given up ownership and dedicated the
          work "to the public domain".  Once something is in the public
          domain, anyone can use it in any way they choose, and the author
          has no control over the use and cannot demand payment for it.

          If you find a program which the author has explicitly put into
          the public domain, you are free to use it however you see fit
          without paying for the right to use it.  But use care - due to
          the confusion over the meaning of the words, programs are often
          described by authors as being "public domain" when, in fact, they
          are shareware or free, copyrighted software.  To be sure a
          program is public domain, you should look for an explicit
          statement from the author to that effect.

          "Copyrighted" is the opposite of public domain.  A copyrighted
          program is one where the author has asserted his or her legal
          right to control the program's use and distribution by placing
          the legally required copyright notices in the program and
          documentation.  The law gives copyright owners broad rights to
          restrict how their work is distributed, and provides for
          penalties for those who violate these restrictions.  When you
          find a program which is copyrighted, you must use it in
          accordance with the copyright owner's restrictions regarding
          distribution and payment.  Usually, these are clearly stated in
          the program documentation.

          Maintaining a copyright does not necessarily imply charging a
          fee, so it is perfectly possible and legal to have copyrighted
          programs which are distributed free of charge.  The fact that a
          program is free, however, does not mean it is in the public
          domain - though this is a common confusion.

          "Shareware" is copyrighted software which is distributed by
          authors through bulletin boards, on-line services, disk vendors,
          and copies passed among friends.  It is commercial software which
          you are allowed to use and evaluate before paying for it.  This
          makes shareware the ultimate in money back guarantees.

          The Shareware Concept:
          ~~~~~~~~~~~~~~~~~~~~~~
          Most money back guarantees work like this:  You pay for the
          product and then have some period of time to try it out and see
          whether or not you like it.  If you don't like it or find that it
          doesn't do what you need, you return it (undamaged) and at some
          point - which might take months - you get your money back.  Some
          software companies won't even let you try their product!  In
          order to qualify for a refund, the diskette envelope must have an
          unbroken seal.  With these "licensing" agreements, you only

          Shareware and the ASP                                Page 2 of 10          R.K. West Consulting                               SHR-WARE.DOC

          qualify for your money back if you haven't tried the product.
          How absurd!

          Shareware is very different.  With shareware you get to use it
          for a limited time, without spending a penny.  You are able to
          use the software on your own system(s), in your own special work
          environment, with no sales people looking over your shoulder.  If
          you decide not to continue using it, you throw it away and forget
          all about it.  No paperwork, phone calls, or correspondence to
          waste your valuable time.  If you do continue using it, then -
          and only then - do you pay for it.

          Shareware is a distribution method, NOT a type of software.
          Shareware is produced by accomplished programmers, just like
          retail software.  There is good and bad shareware, just as there
          is good and bad retail software.  The primary difference between
          shareware and retail software is that with shareware you know if
          it's good or bad BEFORE you pay for it.

          As a software user, you benefit because you get to use the
          software to determine whether it meets your needs before you pay
          for it, and authors benefit because they are able to get their
          products into your hands without the hundreds of thousands of
          dollars in expenses it takes to launch a traditional retail
          software product.  There are many programs on the market today
          which would never have become available without the shareware
          marketing method.

          The shareware system and the continued availability of quality
          shareware products depend on your willingness to register and pay
          for the shareware you use.  It's the registration fees you pay
          which allow us to support and continue to develop our products.

          Please show your support for shareware by registering those
          programs you actually use and by passing them on to others.
          Shareware is kept alive by YOUR support!

          The Virus Problem:
          ~~~~~~~~~~~~~~~~~~
          We've all heard the horror stories about computer viruses.
          Unfortunately, we have also heard lots of conflicting statistics
          and opinions.  When it comes to the virus problem there is a lot
          of confusion among users and even developers.

          The sad truth is that some unscrupulous publishers of anti-virus
          products are using half-truths, overdramatizations, and outright
          fabrication to promote sales of their products.  They delight in
          manipulating statistics to support their marketing efforts.
          While not illegal, these snake-oil tactics are certainly not
          ethical.

          Shareware and the ASP                                Page 3 of 10          R.K. West Consulting                               SHR-WARE.DOC

          To make matters worse, the media has frequently promoted the
          misinformation promulgated by these unscrupulous individuals
          rather than the straight facts.  While the misinformation may be
          more interesting than the actual facts, the media is not doing
          the computer industry any favors by spreading inaccurate
          information.  To be fair, many newspapers, magazines, and news
          networks are beginning to realize which "virus experts" are
          reliable and which "experts" say whatever is in their own best
          interest.

          One of the most interesting myths that has been promulgated by
          these snake-oil salesmen is that BBSs (Bulletin Board Systems)
          and shareware programs are a major source of virus infections.
          Some corporations are now afraid of shareware and BBS activity
          because of this misinformation.

          In the October 11, 1988 issue of PC Magazine, publisher Bill
          Machrone's editorial was entitled "Shareware or Scareware?".  In
          his article, Bill Machrone points out "The truth is that all
          major viruses to date were transmitted by commercial [retail]
          packages and private mail systems."  That sounds a little
          different than the claims being made by less knowledgeable
          journalists.

          Let's consider for a moment, the distribution differences between
          retail software and shareware software.  Company XYZ releases a
          new version of its retail software product.  At the same time
          company XYZ ships tens of thousands of copies to its retail
          distribution channels, it also ships 30,000 updates to loyal
          users.  Most of those loyal users will receive the update within
          a few days of each other.  This can be a big problem if the
          update happened to be infected with a virus.

          "Not likely", you say?  It has already happened!  Several times!
          There have been seventeen (17) major incidents of virus and
          trojan horse problems in retail software.  Some of these
          incidents affected tens of thousands of users.

          What about shareware?  To date there has been one case of a
          shareware author shipping an infected product.  The virus was
          detected by the disk vendors and the problem was corrected
          immediately.  No users were infected.

          "But it makes sense that programs which are passed around have a
          greater chance of virus infections, doesn't it?"  Think about it.
          Who has the most to lose if viruses were spread by BBSs and
          shareware programs?  The BBS operators, shareware disk vendors
          and the shareware authors, of course.  Because of this, reputable
          BBS operators, disk vendors and shareware authors are very
          careful with the programs they handle.

          Shareware and the ASP                                Page 4 of 10          R.K. West Consulting                               SHR-WARE.DOC

          Think about it.  Hundreds (even thousands) of BBS operators and
          disk vendors are carefully examining the programs they receive
          and distribute.  Their business depends on it.  This means that
          any given shareware program can go through hundreds (even
          thousands) of checkpoints where the program is carefully
          examined.  If a problem is found, word spreads incredibly fast.
          News travels "on the wires" even faster than the proverbial small
          town gossip.  Programs have disappeared almost overnight as a
          result of this highly efficient communication network.

          If a shareware program has been around for a few months, it has
          been checked for virii and trojan horses many more times than any
          retail software could hope to be checked.  Retail distributors
          don't check the disks they sell.  Even if the publisher checks
          their masters for virii (few do), this is still far less than the
          scrutiny to which shareware programs are subjected.

          There's something else to consider.  Most retail distributors
          have a return policy.  What do they do with packages that are
          returned?  They shrink-wrap them and resell them, of course.  How
          can you be sure that you are the first person to purchase the
          package you just bought at your friendly neighborhood computer
          store?  You can't.  On the other hand, most shareware authors
          erase, reformat, and reduplicate the disks that are returned to
          them.  Which do you think is safer?

          Bill Machrone's article in PC Magazine goes on to say "It's time
          to recognize that there's nothing to fear in shareware.  As a
          distribution medium, it saves you money and helps you try out new
          genres of software with minimum risk."

          Does this mean that we should all start buying shareware instead
          of retail software?  Not at all (although few shareware authors
          would object).  Let's face it, more data has been lost to power
          failures and spilled cups of coffee than all virii, trojan
          horses, and worms combined!  An even bigger threat is plain old
          human error, a mistake, a wrong key press, turning off the power
          while files are open, and so forth.  Accurate information and
          common sense (regular backups) are the best defenses against lost
          data.

          Sure, the virus problem is real.  Virii exist.  But shunning
          shareware is not the answer.  Shareware and BBSs are, quite
          simply, NOT a major source of virus infections.  Some
          corporations have even banned shareware entirely because of fear
          of infections.  This is not only unreasonable, it is also
          expensive.  Think how much they could save in software costs if
          they would only try software before they buy it!



          Shareware and the ASP                                Page 5 of 10          R.K. West Consulting                               SHR-WARE.DOC

          Is there anything you can do to help protect yourself from virus
          infections?  Absolutely!  Fortunately, the best preventive
          measures are also the least expensive!

          If you need informative, accurate and practical information,
          please read the treatise on "Computer Virus Myths" written by Rob
          Rosenberger and Ross M. Greenberg.  This treatise is available as
          a text file on many BBSs and online services.  It not only gives
          you the facts, it also provides the best overall strategy for
          protecting your computer system.

          Don't let fear stop you from saving money on software.  Don't let
          fear prevent you from trying some of the best software available.
          Shareware is an important market for software.  Take advantage of
          it.  You'll be glad you did!

          The Association of Shareware Professionals (ASP):
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          In the early days of shareware there were no real standards.
          Independent authors had no efficient way to learn from each other
          or to work together to improve the overall image of shareware.
          There was no system in place to ensure that users were treated
          fairly and professionally.  There was no way for users to find an
          address for an author who had moved.  In short, the shareware
          community was disorganized and each author did things the way he
          or she thought was best.  It was clear that if shareware was ever
          to become a viable and respected marketing alternative, there had
          to be some standardization.  There had to be some guidelines to
          best serve the users.

          In 1987 a handful of shareware authors founded the Association of
          Shareware Professionals (ASP).  In forming this industry
          association, these shareware authors had several primary goals in
          mind, including:

              o  To inform users about shareware programs and about
                 shareware as a method of distributing and marketing
                 software.

              o  To foster a high degree of professionalism among shareware
                 authors by setting programming, marketing, and support
                 standards for ASP members to follow.

              o  To encourage broader distribution of shareware through
                 user groups and disk dealers who agree to identify and
                 explain the nature of shareware.

              o  To assist members in marketing their software.

          Shareware and the ASP                                Page 6 of 10          R.K. West Consulting                               SHR-WARE.DOC

              o  To provide a forum through which ASP members may
                 communicate, share ideas, and learn from each other.

          The newly formed Association of Shareware Professionals worked
          together to draft a code of ethics for all present and future
          members.  This code of ethics included several requirements that
          soon became very popular among users (customers), including:

              o  A member's program (evaluation version) could not be
                 limited (crippled) in any way.  In the true spirit of
                 Try-Before-You-Buy, users must be able to evaluate all the
                 features in a program before paying the registration fee.

              o  Members must respond to every registration.  At the very
                 least they must send a receipt for the payment.

              o  Members must provide technical support for their products
                 for at least 90 days from the date of registration.

          A new system was put in place to help ensure that users were
          treated fairly and professionally.  If a user was unable to
          resolve a problem with a member author then the user could
          contact the ASP Ombudsman with their complaint.  The Ombudsman
          would then try to help resolve the dispute.  For more complete
          details regarding the Ombudsman, please refer to the "ASP
          Ombudsman Statement" below (page 8).

          As of April, 1991, the ASP had over 300 author members and almost
          200 vendor members, with new members joining every week.

          Contacting ASP Members Via CompuServe:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          There is an easy and convenient way to speak directly to many ASP
          Members (both authors and vendors).  Visit the shareware forum on
          CompuServe.  Simply type "GO SHAREWARE", "GO SHARE", or "GO
          ASPFORUM" from any CompuServe ! prompt.

          Here you will be able to talk to the authors of your favorite
          shareware programs, learn about other programs, ask questions,
          make suggestions, and much more.  We'd love to meet you online,
          please come visit us today!










          Shareware and the ASP                                Page 7 of 10          R.K. West Consulting                               SHR-WARE.DOC

          Author Address Changes:
          ~~~~~~~~~~~~~~~~~~~~~~~
          People move.  Forwarding orders expire.  What can you do?

             "I got a copy of a shareware program written by an ASP Member.
             I sent in the registration fee and the post office returned my
             letter saying that it was undeliverable.  Now what do I do?"

          If the author has moved then chances are very good that you have
          an old version of the program.  This is another situation that
          the ASP can help you to resolve.  ASP Members are required to
          keep the ASP informed of address changes.  If you need to obtain
          the current address for a member, simply write to the following
          address:

             ASP Executive Director
             545 Grover Road
             Muskegon, MI  49442-9427
             U.S.A.

          or send a CompuServe message via CompuServe MAIL to ASP Executive
          Director 72050,1433.  You may also FAX your request to the ASP
          Executive Director at 616-788-2765.

          ASP Ombudsman Statement:
          ~~~~~~~~~~~~~~~~~~~~~~~~
          This program is produced by a member of the Association of
          Shareware Professionals (ASP).  ASP wants to make sure that the
          shareware principle works for you.  If you are unable to resolve
          a shareware-related problem with an ASP member by contacting the
          member directly, ASP may be able to help.  The ASP Ombudsman can
          help you resolve a dispute or problem with an ASP member, but
          does not provide technical support for members' products.

          Please write to the ASP Ombudsman at:

             ASP Ombudsman
             545 Grover Road
             Muskegon, MI  49442-9427
             U.S.A.

          or send a CompuServe message via CompuServe MAIL to ASP Ombudsman
          70007,3536.

          For More Information:
          ~~~~~~~~~~~~~~~~~~~~~
          If you would like to learn more about the shareware phenomenon,
          there are several excellent sources of additional information.
          Two of the best books ever written about shareware are described
          below.

          Shareware and the ASP                                Page 8 of 10          R.K. West Consulting                               SHR-WARE.DOC

          Dr. File Finder's Guide to Shareware:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          By Mike Callahan and Nick Anis.  Foreword by John C. Dvorak.

             "[Mike's] book distills thousands of hours of his online
             search for the crown jewels of Shareware into one usable
             guide.  As such, it may be the most valuable computer book
             you'll ever buy."
                --Jack Rickard, Publisher, Boardwatch Magazine

             "No one combines Dr. File Finder's comprehensive knowledge of
             the Shareware genre with his good taste in software. This is
             sure to be the definitive place to look for insight and
             program information."
                --Barry Simon, Former President of the Association of
                Shareware Professionals, PC Magazine Columnist, and
                Coauthor of Stackey, Batutil, and Ctrlalt

             "GREAT!  Every PC user will find something of value within
             these pages.  This book will save you a bundle."
                --Alfred Glossbrenner

             "If I were going to buy only one computer book, this would be
             it."
                --Tom Scott, Publisher, Telecomputing Magazine

          Nobody knows Shareware like the illustrious Dr. File Finder,
          known  off line as Mike Callahan.  Now, in Dr. File Finder's
          Guide to  Shareware, you can learn about dozens of leading
          Shareware programs,  including where and how to get them.  In the
          true spirit of Shareware, this book/disk package includes a disk
          full of top programs that you can try out yourself before
          registering.  Send in the card at the back of the book and you'll
          get two additional disks with more software.

          Mike Callahan, AKA Dr. File Finder, is the world's leading
          authority on Shareware.  He regularly accesses thousands of
          bulletin board systems and has been a major force in promoting
          many of the top Shareware packages.  Callahan has spent several
          years and thousands of hours helping people around the world
          learn more about Shareware.

          Nick Anis is the coauthor of several acclaimed best-sellers in
          the  Dvorak*Osborne imprint, including Dvorak's Guide to PC
          Telecommunications, Dvorak's Guide to Desktop Telecommunications,
          and Glossbrenner's Complete Hard Disk Handbook.

          $39.95, ISBN: 0-07-881646-7, 950 pp. 7 3/8 X 9 1/4.  AVAILABLE
          NOW AT YOUR LOCAL BOOK OR COMPUTER STORE OR CALL TOLL-FREE
          1-800-227-0900 (M-F, 8:30 - 4:30 PST)

          Shareware and the ASP                                Page 9 of 10          R.K. West Consulting                               SHR-WARE.DOC

          Shareware:  "Try Before You Buy" Software:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Perhaps you've read Rob Rosenberger's well known and highly
          acclaimed treatise on the computer virus problem.  If you liked
          that article then you'll love his excellent book on Shareware.
          This book is a must for anyone who is interested in Shareware,
          what to look for (and look out for), and where to find it.  In
          this book, shareware author and writer Rob Rosenberger delves
          into the very heart of Shareware, telling you who developed the
          concept and why.

          You'll know why these programs:  * undercut the price of retail
          software * helped bring down the use of copy protection schemes *
          receive numerous editorial and reader survey awards * generate
          more sales than retail software in some cases * make retail OS/2
          software developers so nervous * are falsely accused of spreading
          computer "viruses".

          Rob shows you where you can find good Shareware.  You'll learn to
          beware of companies that make money by abusing the "try before
          you buy" concept.  And you'll discover where Shareware is heading
          in the near future.

             "A lot of good books devote just one or two chapters to the
             concept and history of Shareware.  I'm pleased to say there is
             finally a reference book on the subject."
                --Jim Button, cofounder of the Shareware concept

             "It's filled with accurate information for anyone who wants to
             learn about one of the most significant sources of high-
             quality software."
                --Edward Mendelson, contributing editor, PC Magazine

          Here's all the information you need to obtain your copy of this
          outstanding book:

             Shareware:  "Try Before You Buy" Software.  By Rob
          Rosenberger.
             Third Edition.  Only $6.95!

             Paradise Publishing                 Phone:  (800) 233-2451
             3111 S. Valley View Blvd., Suite B-105
             Las Vegas, NV  89102   U.S.A.








          Shareware and the ASP                               Page 10 of 10
```
{% endraw %}

## SITELICE.DOC

{% raw %}
```
                                     C U R S E S !
                              --------------------------




                  S I T E    L I C E N S E    I N F O R M A T I O N
                 ---------------------------------------------------






          What is a site license?  A site license is an inexpensive way for
          more than one person to legally use one copy of a program on more
          than one computer at a time.  Site licenses are designed for
          companies, offices or workgroups where more than one person in
          the organization needs to use a product, but does not need
          additional manuals or disks.  Site licensing enables companies,
          departments, government agencies, etc., to equip their personnel
          with the tools they need at a minimal cost.

          Here's the gist of how it works:  The company purchasing a site
          license (the licensee) provides a single point of contact for
          shipping, technical support, upgrades, etc., and we (the
          licensor) provide a "golden master" of the diskettes, manual, and
          any other parts of the package.

          The following chart gives a breakdown of the cost of site
          licensing and how much you save per site licensed.  For instance,
          if you purchased a site license for 11 users (sites) your cost
          would be $77.00, which saves you $33.00 of the cost of 11
          separate purchases.  The more sites you license, the more you
          save.


















          Site License Information                              Page 1 of 8          R.K. West Consulting                        CURSES!


                               Discount      Price Per      Savings
               Quantity       Percentage       Unit         Per Unit


                5 -  10          25%          $ 7.50         $ 2.50
               11 -  15          30%          $ 7.00         $ 3.00
               16 -  20          33%          $ 6.70         $ 3.30
               21 -  25          36%          $ 6.40         $ 3.60
               26 -  30          39%          $ 6.10         $ 3.90
               31 -  40          42%          $ 5.80         $ 4.20
               41 -  50          45%          $ 5.50         $ 4.50
               51 -  60          48%          $ 5.20         $ 4.80
               61 -  70          51%          $ 4.90         $ 5.10
               71 -  80          54%          $ 4.60         $ 5.40
               81 -  90          57%          $ 4.30         $ 5.70
               91 - 100          60%          $ 4.00         $ 6.00

               101+           Please contact R.K. West Consulting

          These days the world seems to be run by attorneys, so of course
          they want to get involved in everything.  The following legalese
          document is the complete license agreement.  Simply print it,
          fill it out, sign under LICENSEE, enclose a check or money order
          for the correct amount, and mail it to:

               R.K. West Consulting                 Voice:  (828) 368-5534
               P.O. Box 8059      
               Mission Hills, CA 91346-8059      CompuServe:  72301,435
               U.S.A.

          Upon receipt of the completed, signed form, and a check or money
          order for the correct amount, we will send you the required
          "golden masters" and a copy of the license agreement with an
          authorized signature under LICENSOR.

          If you have any questions, or if you need site license
          information for more than 100 sites, please call our offices at
          (818) 368-5534.  Thank you!

          NOTE:  This software is also marketed as Shareware, but this
          license has no relation to the Shareware version.

          All of the following pages are part of the actual site license
          agreement:






          Site License Information                              Page 2 of 8                                        CURSES!

                            END USER SITE LICENSE AGREEMENT
                            -------------------------------

          R.K. West Consulting (Licensor) grants to _____________________

          _____________________________________________________(Licensee),
          and Licensee accepts, a license to use the licensed program in
          accordance with the terms and conditions contained in this
          agreement.


          1.0 DEFINITIONS

               1.1 "Licensed program" means the object code version of the
          program listed in Exhibit 1 and related program user
          documentation.  No rights to the source code versions of the
          licensed program are granted by this license.

               1.2 "Object code" means any instruction or set of
          instructions in machine executable form.

               1.3 "User documentation" means any standard manuals or other
          related materials used for user instruction or reference in use
          of the licensed program.

               1.4 "Use" means copying of any portion of the licensed
          program from a storage unit or media into the designated
          equipment and execution of the licensed program on the equipment.


          2.0 LICENSE GRANT

               2.1 Licensee is granted a nontransferable, nonexclusive
          right to use the number of copies of the licensed program
          indicated on Exhibit 1 for Licensee's internal use.  Licensor
          (R.K. West Consulting) will deliver one copy of the licensed
          program to Licensee.  Licensee may make additional copies of the
          licensed program, up to the number of copies licensed herein,
          provided that each copy of the program contains R.K. West
          Consulting's copyright notice and any other proprietary legends,
          including legends under the Federal Acquisition Regulations
          (FAR), if any, contained on the delivered copy.

               2.2 Each copy of the licensed program provided under this
          license may be used on only one computer at any one time.  If
          used on a network system, each terminal user is automatically
          considered to be using a distinct copy of the licensed program
          whether or not he is actually using it.



          Site License Agreement     R.K. West Consulting       Page 1 of 6          R.K. West Consulting                        CURSES!

               2.3 Licensee shall not use, copy, rent, lease, sell, modify,
          decompile, disassemble, otherwise reverse engineer, or transfer
          the licensed program except as provided in this agreement.  Any
          such unauthorized use shall result in immediate and automatic
          termination of this license.

          3.0 TERMS

               3.1 This license is effective until terminated.  Licensee
          may terminate it at any time by destroying the licensed program
          and all copies of it and notifying R.K. West Consulting in
          writing.  This license will also terminate as otherwise provided
          in this agreement.  On termination, Licensee shall return all
          materials not destroyed to R.K. West Consulting together with a
          written verification that the remaining materials have been
          destroyed.

          4.0 PAYMENT

               4.1 The fee for this license is set forth in Exhibit 1,
          payable as set forth.

          5.0 CONFIDENTIALITY AND PROPRIETARY RIGHTS

               5.1 The licensed program is licensed, not sold.  Nothing in
          this agreement shall be construed as conveying title in the
          licensed program to Licensee.

               5.2 Licensee understands and agrees that the source code for
          the licensed program and all documentation related thereto
          constitute the valuable properties and trade secrets of R.K. West
          Consulting, owner of the copyright to the licensed program,
          embodying substantial creative efforts which are secret,
          confidential, and not generally known by the public, and which
          secure to R.K. West Consulting a competitive advantage.

               5.3 Licensee agrees during the term of this license, and
          thereafter, to hold the licensed program, including any copies
          thereof and any documentation related thereto, in strict
          confidence and to not permit any person or entity to obtain
          access to it except as required for Licensee's own internal use
          hereunder.

               5.4 Licensee shall inform R.K. West Consulting promptly and
          in writing of any actual or suspected unauthorized use or
          disclosure of the licensed programs or documentation related
          thereto.

               5.5 The obligations under this paragraph shall survive the
          termination or rescission of this agreement.

          Site License Agreement     R.K. West Consulting       Page 2 of 6          R.K. West Consulting                        CURSES!


          6.0 LIMITED WARRANTY

               6.1 R.K. West Consulting warrants that for a period of
          ninety days from the date of delivery of the licensed program,
          the program, if unmodified by the Licensee, will perform in
          substantial conformity with the user documentation.  R.K. West
          Consulting does not warrant that the licensed program is free
          from coding errors.  Any program problems reported to R.K. West
          Consulting during the warranty period and determined by R.K. 
          West Consulting to be actual coding errors will be corrected by
          R.K. West Consulting within a reasonable time.  Any modifications
          to the licensed program shall thereafter be licensed AS IS.

               6.2 The above warranty does not apply to the extent that any
          failure of the licensed program to perform as warranted is caused
          by the licensed program being (1) not used in accordance with the
          user documentation, or (2) modified by any person other than
          authorized R.K. West Consulting personnel.

               6.3 LICENSOR MAKES AND LICENSEE RECEIVES NO OTHER WARRANTY
          OF ANY KIND, EXPRESSED OR IMPLIED, INCLUDING WITHOUT LIMITATION,
          ANY WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR
          PURPOSE.

          7.0 LIMITATION OF LIABILITY

               7.1 The total liability of R.K. West Consulting or its
          suppliers for any claim or damage arising out of the use of the
          licensed program or otherwise related to this license shall be
          limited to direct damages which shall not exceed the license
          fee(s) which have been paid by Licensee to R.K. West Consulting
          for the specific client project which is the subject of such
          claim or damage.

               7.2 IN NO EVENT SHALL LICENSOR BE LIABLE TO LICENSEE FOR
          ADDITIONAL DAMAGES, INCLUDING ANY LOST PROFITS, LOST SAVINGS OR
          OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE
          OF OR INABILITY TO USE THE LICENSED PROGRAM, EVEN IF LICENSOR HAS
          BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

          8.0 TERMINATION.  THIS LICENSE MAY BE TERMINATED BY R.K. WEST
          CONSULTING IF:

               8.1 Licensee fails to comply with any material term or
          condition of this agreement and Licensee fails to cure such
          failure within fifteen days after notices of such failure by
          R.K. West Consulting; and



          Site License Agreement     R.K. West Consulting       Page 3 of 6          R.K. West Consulting                        CURSES!


               8.2 Licensee's normal business operations are disrupted or
          discontinued for more than thirty days by reason of insolvency,
          bankruptcy, receivership, or business termination.


          9.0 GENERAL TERMS

               9.1 Neither this agreement nor any rights or obligations
          hereunder shall be assigned or otherwise transferred by Licensee
          without prior written consent of R.K. West Consulting, which
          consent will not be unreasonably withheld.  R.K. West Consulting
          may assign this agreement entirely in its discretion upon the
          express written assumption of the obligations hereunder by the
          assignee.

               9.2 This agreement shall be interpreted and enforced in
          accordance with and shall be governed by the laws of the State of
          California applicable to contracts between residents.  No suit
          for enforcement of or for a declaration of rights between the
          parties to this agreement shall be commenced in any court other
          than the Municipal or County Court in and for Los Angeles County,
          State of California, or in the United States District Court for
          the the State of California.

               9.3 Any controversy or claim arising out of or relating to
          this agreement or the breach thereof shall be settled by
          arbitration in accordance with the commercial rules of the
          American Arbitration Association, using an arbitrator with
          knowledge of computers and software, and judgment upon the award
          rendered by the arbitrator(s) may be entered in any court having
          jurisdiction thereof.  No arbitration or other action arising out
          of any claimed breach of this agreement or transactions under
          this agreement may be demanded by either party more than one year
          after the cause of action accrued.  The prevailing party in any
          such action related to or arising under this agreement shall be
          entitled to reasonable attorneys' fees.  This provision shall not
          apply to any action or proceeding for injunctive relief.

               9.4 This agreement and its exhibits contain the entire
          agreement between the parties hereto, superseding all previous
          agreements, representations, understandings and negotiations.
          This agreement may not be amended other than by writing signed by
          an authorized representative of the parties.

               9.5 If any terms or provisions of this agreement shall be
          found to be illegal or unenforceable then, notwithstanding, this
          agreement shall remain in full force and effect and such term or
          provision shall be deemed stricken.


          Site License Agreement     R.K. West Consulting       Page 4 of 6          R.K. West Consulting                        CURSES!


               9.6 No amendment of this agreement shall be effective unless
          it is in writing and signed by duly authorized representatives or
          both parties.  No term or provision hereof shall be deemed waived
          and no breach excused unless such waiver or consent shall be in
          writing and signed by the party claimed to have waived or
          consented.  Any consent by any party to or waiver of a breach by
          the other, whether express or implied, shall not constitute a
          consent to, waiver of or excuse for any other, different or
          subsequent breach.

               9.7 This agreement shall be binding on and shall inure to
          the benefit of the heirs, executors, administrators, successors
          and assigns of the parties hereto, but nothing in this paragraph
          shall be construed as a consent to any assignment of this
          agreement by either party except as provided hereinabove.

               9.8 Timely payment is of the essence of this agreement.

               9.9 This agreement may be signed in counterparts.































          Site License Agreement     R.K. West Consulting       Page 5 of 6          R.K. West Consulting                        CURSES!


          Effective this _________ day of ________________________,
          19_____.

                  LICENSEE                          LICENSOR            

          _______________________________  ______________________________
          Authorized Representative        Authorized Representative

          Typed name_____________________  Typed name_____________________

          Title__________________________ Title__________________________

          Address________________________ Address: R.K. West Consulting

          _______________________________ P.O. Box 8059

          _______________________________ Mission Hills, CA 91346-8059


                                       EXHIBIT 1

                                   Licensed Program

                                    CURSES!

                       NUMBER OF USERS    LICENSE FEE PER USER

                          5 -  10               $ 7.50
                         11 -  15               $ 7.00
                         16 -  20               $ 6.70
                         21 -  25               $ 6.40
                         26 -  30               $ 6.10
                         31 -  40               $ 5.80
                         41 -  50               $ 5.50
                         51 -  60               $ 5.20
                         61 -  70               $ 4.90
                         71 -  80               $ 4.60
                         81 -  90               $ 4.30
                         91 - 100               $ 4.00

                         101+          Please contact R.K. West Consulting

          The above prices include one copy of the Retail Version of the
          CURSES!.  Licensee may make additional copies, up to the
          number of copies licensed.  R.K. West Consulting can supply
          multiple copies of the distribution diskettes at an additional
          cost of $5.00 per copy plus shipping and handling costs.  R.K.
          West Consulting can supply multiple copies of the printed User's
          Guide at an additional cost of $12.00 per copy plus shipping and
          handling costs.

          Site License Agreement     R.K. West Consulting       Page 6 of 6
```
{% endraw %}

## SYSOP.DOC

{% raw %}
```
                          C U R S E  S !
                    --------------------------

                  B B S    I N F O R M A T I O N
                 --------------------------------

                    Last updated:  April, 1991

This file contains information regarding the posting of the
CURSES! package on Bulletin Board Systems.




NOTE:  Disk Vendors and Distributors please refer to the
VENDOR.DOC text file.


-----------------------------------------------------------------
                    Distribution Requirements:
-----------------------------------------------------------------

Limited Distribution License:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
As the exclusive copyright holder for CURSES!, R.K. West
Consulting authorizes on-line distribution only in accordance with
the following restrictions.  Disk Vendors and Distributors should
refer to the VENDOR.DOC text file for complete license
information.

The CURSES! package is defined as containing all the
material listed in the PACKING.LST text file.  If any files
listed in the PACKING.LST text file, or the PACKING.LST file
itself, are missing, then the package is not complete and
distribution is forbidden.  Please contact us to obtain a
complete package suitable for distribution.

    o  The CURSES! package - including all related program
       files and documentation files - CANNOT be modified in any
       way (other than that mentioned in the following paragraph)
       and must be distributed as a complete package, without
       exception.  The PACKING.LST text file contains a list of
       all files that are part of the CURSES! package.

    o  Many BBSs customarily add a small text file
       (advertisement) to each archived file.  This text file
       describes the BBS and tells people that the file was
       downloaded from that particular BBS.  Other BBSs add a





BBS SYSOP Information                                 Page 1 of 3                  - CURSES! - SYSOP.DOC -


       small one-line message with their BBS name and phone
       number into the compressed file, which will display when
       the file is uncompressed.  Either of these methods of
       mentioning your BBS are acceptable and may be used,
       provided the program and documentation is otherwise
       unmodified and complete.

    o  R.K. West Consulting prohibits the distribution of outdated
       versions of the CURSES! package, without written
       permission from R.K. West Consulting.  If the version you
       have obtained is over six (6) months old, please
       contact us to ensure that you have the most current
       version.

    o  Licensee shall not use, copy, rent, lease, sell, modify,
       decompile, disassemble, otherwise reverse engineer, or
       transfer the licensed program except as provided in this
       agreement.  Any such unauthorized use shall result in
       immediate and automatic termination of this license.

    o  U.S. Government Information:  Use, duplication, or
       disclosure by the U.S. Government of the computer software
       and documentation in this package shall be subject to the
       restricted rights applicable to commercial computer
       software as set forth in subdivision (b)(3)(ii) of the
       Rights in Technical Data and Computer Software clause at
       252.227-7013 (DFARS 52.227-7013).  The
       Contractor/manufacturer is R.K. West Consulting, P.O. Box
       8059, Mission Hills, CA 91346-8059.

All rights not expressly granted here are reserved to R.K. West
Consulting.


Applying for ASP Associate Membership:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to apply for ASP Associate Membership (to
become an ASP BBS member), simply write to the following address
and request a BBS Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP
   Executive Director 72050,1433.  You may also FAX a request to
   the ASP Executive Director at 616-788-2765.


BBS SYSOP Information                                 Page 2 of 3BBS Update Program:
~~~~~~~~~~~~~~~~~~~
Most BBSs have standard procedures for acquiring new files.  They
get them from other boards, new programs are uploaded by users,
etc.  This is good because most authors cannot afford to mail
disks or upload files to thousands of BBSs.  However, some BBSs
prefer to obtain programs directly from the authors.  If you
would like to obtain programs directly from us, automatically,
then please help us to cover the cost.

If your BBS would like to receive automatic upgrades to any of
our products, directly from us, then please refer to the
information below.  Due to the time and expense we are generally
unable to upload directly to a large number of Bulletin Board
Systems.  However, we are able to mail updates on disk (in a
sealed envelope) to many BBS's.

If your BBS would like to receive automatic updates then please
take advantage of our BBS Update Program.  Under this program you
can receive updates for an entire year for only $10 per program
(this helps to offset our costs).

To receive updates, simply send us a letter with the name and
address of your BBS, your mailing address, the name of the person
we may contact (preferably the SYSOP or CO-SYSOP), the program
(or programs) for which you would like to receive updates, and a
check or money order for $10 for each program (for countries
outside of North America please add an additional $10 per
program).  Payment in U.S. funds drawn on a U.S. bank only,
please. The BBS Update Program is available for the following 
products (as of April, 1991):

     MAILLIST (Mailing list management system)
     BY THE NUMBERS (Numerology)
     WORKBASE (dBase-like dot prompt utility)
     BOOK OF CHANGES (I Ching)
     PERSONAL TAROT (Tarot Cards)
     MAYAN CALENDAR (Calendar & astrology of the ancient Mayan culture)
     CREATIVITY PACKAGE (counts as 2 programs - 3 disk set includes
         2 programs and one full book for enhancing personal creativity)
     GEOMANCY (Astrologically-oriented fortune-telling)
     POETRY GENERATOR (turns your computer into a poet)
     CRYSTAL BALL (tongue-in-cheek computerized psychic)
     FORTUNE TELLER (6 ways to tell fortunes, plus ESP test)
     CURSES! (humorous and creative insult generator)
     RECAP (corrects capitalization in database files)
     SMALL PROGRAM GROUP - Includes LOVEDOS and HARD AT WORK, two
         humorous utilities; and CITIZEN, a printer control program

NOTE: All BBS's participating in our BBS Update Program will
      automatically receive any NEW programs which we may release
      while their BBS Update Program is in effect.

The BBS Update Program is only intended to help us cover our
expenses in those cases where a BBS desires to obtain the program
directly from us.  If you have other standard ways to obtain
programs, then you may prefer not to use our BBS Update Program.

BBS SYSOP Information                                 Page 3 of 3
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                               C U R S E S !
                        ---------------------------

                    V E N D O R    I N F O R M A T I O N
                   --------------------------------------

                         Last updated:  April, 1991


This file provides information for Shareware Distributors, Disk Vendors and
Computer Clubs who wish to distribute the CURSES! package.

BBS SYSOPs:  Please refer to the SYSOP.DOC text file for information.

Individual and Company Users:  Please refer to LICENSE.DOC and REGISTER.DOC
for information.



---------------------------------------------------------------------------
                         Distribution Requirements
---------------------------------------------------------------------------

Individuals who wish to distribute the CURSES! package to friends 
or associates may do so in accordance with the restrictions outlined in
LICENSE.DOC.

Computer Clubs and User Groups wishing to add the CURSES! package 
to their disk library may do so in accordance with the Distribution
Restrictions listed below.

   If you would like your Computer Club or User Group to be placed on our
   mailing list, please contact us for complete details.

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for CURSES!, Rosemary West dba
R.K. West Consulting authorizes distribution only in accordance with the
following restrictions.

ASP Approved Vendors in good standing are hereby given permission to
distribute CURSES! package.  Non-ASP member vendors must request
and receive permission prior to distributing this package.






Vendor/Distributor Information                                  Page 1 of 5                       - CURSES! - Vendor.DOC -


The CURSES! package is defined as containing all the material listed
in the PACKING.LST text file.  If any files listed in the PACKING.LST text
file, or the PACKING.LST file itself, are missing, then the package is not
complete and distribution is forbidden.  Please contact us to obtain a
complete package suitable for distribution.

The CURSES! package - including all related program files and
documentation files - CANNOT be modified in any way and must be distributed
as a complete package, without exception.  The PACKING.LST text file
contains a list of all files that are part of the CURSES! package.

   Small additions to the package, such as the introductory or installation
   batch files used by many shareware disk vendors, are acceptable.

No price or other compensation may be charged for the CURSES!
package.  A distribution fee may be charged for the cost of the diskette,
shipping and handling, as long as the total (per disk) does not exceed
US$8.00 in the U.S. and Canada, or US$12.00 internationally.

Disk Sets & CD-ROMs:
~~~~~~~~~~~~~~~~~~~~
The CURSES! package CANNOT be sold as part of some other inclusive
package.  Nor can it be included in any commercial software packaging
offer, without a written agreement from R.K. West Consulting.

   ASP Approved Vendors who wish to distribute the CURSES! package
   as part of a collection (such as PsL's MegaDisk set, or a CD-ROM
   package) may do so provided that all the other restrictions are met.

   Vendors (non-ASP Vendor Members) who wish to distribute the
   CURSES! package as part of a collection (such as PsL's MegaDisk
   set, or a CD-ROM package) must obtain permission from R.K. West
   Consulting prior to beginning such a distribution.

   If you wish to add any of our programs to a CD-ROM or other collection,
   please check the release date of the version you have.  If the version
   is over six (6) months old then please contact us to ensure that you
   have the most current version.  This version was released in April,
   1991.

Disk-of-the-Month (or Subscription) Distribution:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to distribute the CURSES! package as a Disk-of-
the-Month, or as part of a subscription or monthly service, then the
following restrictions apply:

   ASP Associate (Disk Vendor) Members in good standing are hereby given
   permission to distribute the CURSES! package under the Disk-of-
   the-Month style of distribution.

Vendor/Distributor Information                                  Page 2 of 5                      - CURSES! - Vendor.DOC -


   Others (non-ASP Members) must contact us in advance to ensure that you
   have the most current version of the software.

   You cannot use a Disk-of-the-Month distribution to use up your inventory
   of old (out of date) disks.  Only current versions may be shipped as
   Disk-of-the-Month disks.

The PRINTED User's Guide may not be reproduced in whole or in part, using
any means, without the written permission of R.K. West Consulting. In other
words, the disk-based documentation may not be distributed in PRINTED
(hardcopy) form.

The CURSES! package cannot be "rented" or "leased" to others.

You may not list any of our products in advertisements, catalogs, or other
literature which describes our products as "FREE SOFTWARE".  Shareware is
"Try-Before-You-Buy" software, it is not free.

R.K. West Consulting prohibits the distribution of outdated versions of the
CURSES! package, without written permission from R.K. West
Consulting. If the version you have is over six (6) months old, please
contact us to ensure that you have the most current version.  This version
was released in April, 1991.

Licensee shall not use, copy, rent, lease, sell, modify, decompile,
disassemble, otherwise reverse engineer, or transfer the licensed program
except as provided in this agreement.  Any such unauthorized use shall
result in immediate and automatic termination of this license.

U.S. Government Information:  Use, duplication, or disclosure by the U.S.
Government of the computer software and documentation in this package shall
be subject to the restricted rights applicable to commercial computer
software as set forth in subdivision (b)(3)(ii) of the Rights in Technical
Data and Computer Software clause at 252.227-7013 (DFARS 52.227-7013).  The
Contractor/manufacturer is R.K. West Consulting, P.O. Box 8059, Mission
Hills, CA 91346-8059.

All rights not expressly granted here are reserved to R.K. West Consulting.












Vendor/Distributor Information                                  Page 3 of 5                      - CURSES! - Vendor.DOC -


Applying for ASP Associate Membership:
--------------------------------------

If you would like to apply for ASP Associate Membership (to become an ASP
Approved Vendor), simply write to the following address and request a
Vendor Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP Executive
   Director 72050,1433.  You may also FAX a request to the ASP Executive
   Director at 616-788-2765.


Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding CURSES!.
Please send us a copy of any reviews, articles, catalog descriptions, or
other information you print or distribute regarding the CURSES!
package.  Thank you for your time and assistance and for supporting the
shareware marketing concept.

Thank you for your support!





















Vendor/Distributor Information                                  Page 4 of 5Vendor Update Program:
----------------------
Most non-ASP vendors have standard procedures for acquiring new files.
They get them from other vendors, BBSs, etc.  Most authors cannot afford to
mail disks to hundreds (perhaps thousands) of vendors.  However, some
vendors prefer to obtain programs directly from the authors.  If you would
like to obtain programs directly from us, automatically, then please help
us to cover the cost.

If you are NOT an ASP Approved Vendor (in good standing), but you would
still like to receive automatic updates directly from us, then please take
advantage of our Vendor Update Program.  Under this program you can receive
updates for an entire year for only $10 per two programs (this helps to
offset our costs).

To receive updates, simply send us a letter with your name, company name,
mailing address, the name of the person we should contact (such as your
disk librarian), the program (or programs) for which you would like to
receive updates, and a check or money order for $10 for two programs
(Countries outside of North America please add an additional $10 per
two programs).  Payment in U.S. funds drawn on a U.S. bank only please.

The Vendor Update Program is available for the following products (as of
April, 1991):

     MAILLIST (Mailing list management system)
     BY THE NUMBERS (Numerology)
     WORKBASE (dBase-like dot prompt utility)
     BOOK OF CHANGES (I Ching)
     PERSONAL TAROT (Tarot Cards)
     MAYAN CALENDAR (Calendar & astrology of the ancient Mayan culture)
     CREATIVITY PACKAGE (counts as 2 programs - 3 disk set includes
         2 programs and one full book for enhancing personal creativity)
     GEOMANCY (Astrologically-oriented fortune-telling)
     POETRY GENERATOR (turns your computer into a poet)
     CRYSTAL BALL (tongue-in-cheek computerized psychic)
     FORTUNE TELLER (6 ways to tell fortunes, plus ESP test)
     CURSES! (humorous and creative insult generator)
     RECAP (corrects capitalization in database files)
     SMALL PROGRAM GROUP - Includes LOVEDOS and HARD AT WORK, two
         humorous utilities; and CITIZEN, a printer control program --
         this counts as one program

All vendors participating in our Vendor Update Program will automatically
receive any NEW programs which we may release while their Vendor Update
Program is in effect.

NOTE: ASP Associate Members automatically receive free updates and do not
      need to apply for the Vendor Update Program.  This is yet another
      advantage to being an ASP Associate Member.

The Vendor Update Program is only intended to help us cover our expenses in
those cases where a vendor desires to obtain the program directly from us.
If you have other standard ways to obtain current versions of programs, you
may prefer not to use our Vendor Update Program.

Vendor/Distributor Information                                  Page 5 of 5
```
{% endraw %}

## WARRANTY.DOC

{% raw %}
```
          ***************** IMPORTANT WARRANTY INFORMATION ****************



                                       CURSES!

                    *** PLEASE READ THIS INFORMATION CAREFULLY ***
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

          TRIAL USE (SHAREWARE EVALUATION VERSION) WARRANTY:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          The shareware evaluation (trial use) version is provided AS IS.
          R.K. WEST CONSULTING MAKES NO WARRANTY OF ANY KIND, EXPRESSED OR
          IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF
          MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.



          REGISTERED VERSION ONLY WARRANTY:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          R.K. West Consulting warrants the physical diskette(s) and
          physical documentation provided with registered versions to be
          free of defects in materials and workmanship for a period of
          ninety days from the date of registration.  If R.K. West
          Consulting receives notification within the warranty period of
          defects in materials or workmanship, and such notification is
          determined by R.K. West Consulting to be correct, R.K. West
          Consulting will replace the defective diskette(s) or
          documentation.

          The entire and exclusive liability and remedy for breach of this
          Limited Warranty shall be limited to replacement of defective
          diskette(s) or documentation and shall not include or extend to
          any claim for or right to recover any other damages, including
          but not limited to, loss of profit, data, or use of the software,
          or special, incidental, or consequential damages or other similar
          claims, even if R.K. West Consulting has been specifically
          advised of the possibility of such damages.  In no event will
          R.K. West Consulting's liability for any damages to you or any
          other person ever exceed the lower of suggested list price or
          actual price paid for the license to use the software, regardless
          of any form of the claim.

          R.K. WEST CONSULTING SPECIFICALLY DISCLAIMS ALL OTHER WARRANTIES,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, ANY IMPLIED
          WARRANTY OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR
          PURPOSE.




          ***************** IMPORTANT WARRANTY INFORMATION ****************

```
{% endraw %}

## FILE2741.TXT

{% raw %}
```
Disk No: 2741                                                           
Disk Title: Curses!                                                     
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Curses!                                                  
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: 360K RAM.                                         
                                                                        
A humorous and creative ``insult generator'' with a twist.  A single    
keystroke switches from insults to compliments!  You control the        
contents so the program can be used to generate descriptive phrases on  
any subject.  Phrases are randomly generated, based on your vivid       
vocabulary!                                                             
                                                                        
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
  ║                 <<<<  PC-SIG DISK #2741  CURSES!  >>>>                  ║
  ╠═════════════════════════════════════════════════════════════════════════╣
  ║   To print all program documentation, type: COPY *.DOC PRN (press Enter)║
  ║                                                                         ║
  ║   To install CURSES! onto a dual floppy system, type: INSTALL (Enter)   ║
  ║                                                                         ║
  ║   To install CURSES! onto your hard drive, type:  INSTALLH  (Enter)     ║
  ║                                                                         ║
  ║                                                                         ║
  ║                                           Copyright 1991, PC-SIG, Inc.  ║
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2741

     Volume in drive A has no label
     Directory of A:\

    HELP     DOC     22878   4-09-91   9:15a
    CURSES   ARC    234305   4-18-91   6:45a
    INSTALLH BAT      1119   4-18-91   6:33a
    INSTALL  BAT      1275   4-18-91   6:36a
    GO       BAT        28   7-15-91   3:34p
    GO       TXT       951   7-24-91   9:28p
    ARCE     DOC      7786   8-05-90  12:00p
    ARCE     EXE      5565   8-27-90  11:40a
    CATALOG  DOC     22435   4-09-91   9:13a
    FILE2741 TXT      1481   7-24-91   9:30p
           10 file(s)     297823 bytes
                           19456 bytes free
