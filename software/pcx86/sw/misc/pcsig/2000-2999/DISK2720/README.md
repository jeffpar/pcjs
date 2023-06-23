---
layout: page
title: "PC-SIG Diskette Library (Disk #2720)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2720/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2720"
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
services are prohibitive. (Exceptions may be made for foreign users living
under corrupt regimes who cannot receive mail unless it is registered.)

NOTE: Some users have reported compatibility problems with the utility used
to un-arc large files (this is rare). If you prefer to receive un-arced
programs, please include an extra $3 per disk to cover special handling and
materials. Un-arced Bonus disks are not available.

All prices and discounts listed in this bulletin expire 6/30/91. Prices
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

Corporate users and others who need to register more than 10 copies of the
same program, please contact us for site
licensing information.                            REGISTRATION BONUS!

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

## FILE2720.TXT

{% raw %}
```
Disk No: 2720                                                           
Disk Title: Book of Changes                                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Book of Changes                                          
Author Version: 1.31                                                    
Author Registration: $24.00                                             
Special Requirements: 420K RAM and two floppy drives.                   
                                                                        
Do you have a question you just can't answer?  Are you looking for      
advice?  Consult the I Ching, the BOOK OF CHANGES, one of the classics  
of Chinese literature.  Use its poetic messages for both fortune telling
and insight into humanity's role in the natural world.                  
                                                                        
Toss computerized versions of coins or sticks.  These coins or sticks   
create a pattern of six lines to form a hexagram.  The hexagram is then 
interpreted by using the I Ching.  The ``yin and yang'' philosophy of   
the I Ching is ideally suited to the ``yes and no'' or ``0 and 1''      
organization of the computer.                                           
                                                                        
Sit back and read its thought provoking messages.  Edit the messages,   
add your own comments, and then print or save them.                     
                                                                        
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
  ║              <<<<  PC-SIG Disk #2720 Book of Changes  >>>>              ║
  ╠═════════════════════════════════════════════════════════════════════════╣
  ║                                                                         ║
  ║     The Book of Changes program files are in compressed format.         ║
  ║                                                                         ║
  ║     To print all documentation files, type:  COPY *.DOC PRN (Enter)     ║
  ║                                                                         ║
  ║     To uncompress these files, type: FLOPPY  (press Enter)              ║
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
   If you are using a 2-floppy system, look for a file named FLOPPY.BAT
or DOTWO.BAT. Start from the A> prompt, with the master disk in the A
drive. Be prepared with 2 or 3 empty, formatted diskettes. Enter the
appropriate command, depending on the file you found. For example, if
you have FLOPPY.BAT, type FLOPPY and press <ENTER>. Follow the
instructions on screen, which will tell you when to insert your floppy
disks into the B drive.
   If you are using a hard disk, be sure you have already created the
subdirectory where you want the program to be kept. Look for a program
named ARCE.COM or UNZIP.EXE or PKUNZIP.EXE. Starting from the correct
subdirectory, at the C> prompt, with the diskette in the A drive, enter
the appropriate command. For example, if your archive file has the ARC
extension, you should have the program ARCE.COM. Your command will look
something like this: A:ARCE A:FORTUNE. (Instead of "fortune" use the
actual name of the archive file. For example, if the archive file is
named TAROT.ARC you will use the word "tarot".) The program will
automatically un-compress the files and place them in the current
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
   DOCUMENTATION AND INSTRUCTIONS: Most of our instruction manuals are
in special program files which allow you to view the manual on screen
or print it. These files have the COM or the EXE extension, and usually
have "DOC" somewhere in the filename. Simply enter the appropriate
command. For example, if you have the program BY THE NUMBERS, the
instruction manual is called NUMDOC.COM or NUMDOC.EXE. To view the
manual, type NUMDOC and press <ENTER>. You can page through the
document on screen, or print it by pressing <ALT><H>. For a list of
helpful commands, press <F1>.
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
9:00 AM to 6:00 PM Pacific Daylight Time, Monday through Friday, and
sometimes Noon to 3:00 PM Saturday. If you're in a different time zone,
please be careful about calling too early in the morning or late at
night!) Remember that we often do outside consulting work, so you may
reach the answering machine. If that happens, please leave phone
numbers for both day and evening, and let us know what days and hours
we may call you back.
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

    BOOK.ZIP   

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
    BOOK.EXE
    BOOKDOC.EXE
    BOOK.DBF
    BOOK.DBT

Please use the correct name for this program in all catalogs and
advertising: BOOK OF CHANGES
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2720

     Volume in drive A has no label
     Directory of A:\

    HELP     DOC     19746   9-01-90  10:08a
    GO       BAT        28   7-15-91   3:34p
    ASP      DOC      1583   8-05-90  12:00p
    BOOK     ARC    258416   3-02-91   5:09p
    FLOPPY   BAT       255   8-05-90  12:00p
    CATALOG  DOC     22204   3-15-91   3:26p
    ARCE     COM      7128   8-05-90  12:00p
    ARCE     DOC      7786   8-05-90  12:00p
    GO       TXT       953   7-24-91  12:33a
    FILE2720 TXT      2073   7-24-91   7:43p
    VENDOR   DOC      7994   1-25-91   8:23p
    SYSOP    DOC      5435  12-29-90   6:14p
    SHARE    DOC      2500   8-05-90  12:00p
    FREE!    DOC       985   9-25-90   9:51p
           14 file(s)     337086 bytes
                           18432 bytes free
