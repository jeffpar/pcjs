---
layout: page
title: "PC-SIG Diskette Library (Disk #1439)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1439/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1439"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CDMASTER"

    CDMASTER catalogs all your compact discs, letting you quickly search for
    and find a specific title, tune, or artist.  Each entry in the catalog
    has compact disc number, title, artist, and up to 15 tunes per CD.  This
    same information can be printed as labels, disc case inserts, 3x5 index
    cards, and Rolodex-style cards.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1439.TXT

{% raw %}
```
Disk No: 1439
Disk Title: CD Master
PC-SIG Version: 2.1

Program Title: CDMASTER
Author Version: 5.00A
Author Registration: $20.00
Special Requirements: Printer, pin-fed labels (3 x 15/16"), and pin-fed

CDMASTER catalogs all your compact discs, letting you quickly search for
and find a specific title, tune, or artist.  Each entry in the catalog
has compact disc number, title, artist, and up to 15 tunes per CD.  This
same information can be printed as labels, disc case inserts, 3" x 5"
index cards, and Rolodex-style cards.

File Descriptions:

CDMSTR   EXE  Main program.
COLOUR   SET  Screen color defaults.
READ1ST  DOC  Documentation file.
TUNE     DAT  Data file.
UNICORN  DAT  Data file.
UNICORN  NTX  Index file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1439 CD MASTER  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type CDMSTR (press enter)                         ║
║                                                                         ║
║ To copy program information to your printer, type:                      ║
║             COPY READ1ST.DOC                                            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## READ1ST.DOC

{% raw %}
```
                          CDMASTER
                        Version 5.00
                'Mastering Your CD Library'

               From Unicorn Software Limited

                        Created By:
                    Charles P. Schell IV





       Copyright (C) 1987-89 Unicorn Software Limited
                    All Rights Reserved



                  Unicorn Software Limited
                  3011 Matthew Dr. Suite H
                      Kokomo, IN 46902



LICENSE AGREEMENT

The  CDMASTER  cataloging  program  is  protected  by United
States Copyright Law and  International  Treaty  provisions.
All  rights  are reserved.  Non-registered users of CDMASTER
are licensed only to use the program on a  trial  basis  for
the  sole  purpose  of  determining  whether or not it meets
their requirements.  All other use requires registration.

Any other use of non-registered copies of  CDMASTER  by  any
person,  business,  corporation, government organization, or
any other entity is strictly forbidden and is a violation of
this license agreement.

Registration permits a user a license to use CDMASTER  on  a
single computer.

All  users  are  granted  a limited license to copy CDMASTER
Version 5.00 for the trial use of others, with the following
additional conditions:

CDMASTER must be distributed in unmodified,  complete  form,
including this Reference Guide and License Agreement.

CDMASTER  may  not  be  distributed  in conjunction with any
other product, without written permission.

No fee, other than a bonafide disk duplicating  fee  not  to
exceed $6.00, may be charged for CDMASTER.





WARRANTY



Unicorn  Software  Limited  makes  no  warranty of any kind,
express  or  implied,  including  without  limitation,   any
warranties   of   merchantability   and/or   fitness  for  a
particular purpose. Unicorn Software Limited  shall  not  be
liable for any damages, whether direct, indirect, special or
consequential  arising  from  a  failure  of this program to
operate in the manner desired by the user.  Unicorn Software
Limited shall not be  liable  for  any  damage  to  data  or
property  which  may be caused directly or indirectly by use
of the program.

IN NO EVENT WILL UNICORN SOFTWARE LIMITED BE LIABLE FOR  ANY
DAMAGES,  INCLUDING  ANY LOST PROFITS, LOST SAVINGS OR OTHER
INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR  USE
OR  INABILITY  TO  USE  THE PROGRAM, OR FOR ANY CLAIM BY ANY
OTHER PARTY.

The License  Agreement  and  Warranty  shall  be  construed,
interpreted  and  governed  by  the  laws  of  the  state of
Indiana.

CDMASTER is being released under the User Supported  concept
of  distribution.   Simply  put:  You are allowed to use the
program to see if it is beneficial to you.  If you  continue
to  use  the  program you must register it by sending $20.00
to: Unicorn  Software  Limited  3011  Matthew  Dr.  Suite  H
Kokomo, IN 46902.

Concept:

To    help   you   catalog   your   CDs  and  assist  you in
printing catalogs, listings and  labels  for  the  case  and
front  of the CD.  There are entries for CD Number, Title,
Artist, Artist, and up to 10 Tunes on each side as  well  as
Category.

Getting Started:

DO  NOT  INSTALL THE PROGRAM IF YOU ARE ALREADY USING IT SEE
THE INSTRUCTIONS ON HOW TO UPGRADE THE PROGRAM

First you must install the data files on your data disk.  To
do this copy all files with the extension .DAT and .NTX onto
the drive you wish to use for data.  ie COPY *.DAT A:

Once  you  have completed this copy all files from this disk
onto your floppy or hard disk. Type in CDMSTR to start.

The System:

Is designed using KISS (Keep It Simple Stupid) so  not  much
information  is  needed to get started. Here are a few notes
to help you use the system:

The Data Entry Screens:

Any  of the data entry  screens  shown  in  Add,  Update, or
Delete can be 'zipped' through. When deleting just hit  page
down to confirm that you want to delete that Title or CD.

Close 'Nuf:

By  entering  55 on the Update or Delete screens you will be
prompted to enter the title of the Feature you wish to  deal
with.   You  do  not  have to enter the full title, only the
first few words, or even letters.  In Update this will allow
you to view all the records that are Close 'Nuf to what  you
entered.   EXAMPLE: Entering "Meet" will bring up "Meet John
Doe", "Meet The Beatles" and "Meet Me In St. Louis"

The Labels:

Are  printed for 3" X 15/16" pinfed labels.  Experiment with
your  printer  for  alignment  before  printing  your  whole
collection.   When  asked  for  a  from  and  to CD Number
remember that these numbers are inclusive ie if you enter  1
to 4 it will print 1,2,3, and 4. Run Speed Up Sort first.

The Case Labels:

Are   printed  on  standard paper and have cut out lines for
cutting them to the correct size. Run Speed Up Sort first.

Tune List:

Will list all Tunes, CD Number and Artist.  Unless you  have
very few CDs you will need a Hard Drive to use this feature.

Find Me!:

Can  help you find all of the CDs in the data file that have
a particular Artist as well as Title or even a single  Tune.
Using  "Close  'Nuff"  you  can Find!  any record easily, ie
enter as much information as you remember and it will search
based on your input, even if it is only  one  letter.  NOTE:
Page  Up on these data display screens will take you back to
the previous record, page down to the next record  and  Home
to the Find Me! menu.

Speed Up Sort:

Should  be  run occasionally to keep the files in sequential
order as well as random order.  Always run prior to printing
Case Inserts, Labels, 3X5 and Roladex Cards.

Purge Ghosts:

This feature should be run if you get blank records in  your
data file, by accident.

File Name:

Any  eight  character  filename  allowed.   Reserved name is
TEMP.

Data Drive:

You can choose a default data drive on the Colour menu.

Exit To DOS:

You can exit temporarily to DOS by using that option on  the
Utilities  Menu.   The  file COMMAND.COM must be on the same
directory or disk as the other program files to do this. You
must return to the subdirectory/drive of CDMASTER  prior  to
entering EXIT to return to the program.

Colours:

Are as follows:



         Color    Letter
      ------------------
         Black      N
         Blue       B
         Green      G
         Cyan       BG
         Red        R
         Magenta    RB
         Brown      GR
         White      W
       ------------------

Error Messages:

Error Messages will appear at the top of the screen when  an
error occurs.  The most common errors are "Open" which means
the  program  can't  find  the  data  files and "Printer not
ready". You will be  given  the  choice  of  correcting  the
problem or aborting.

Upgrading From Previous Versions  (Available  to  Registered
Users Only):

Because the data structure is different  from  version  2.00
version  5.00   it  will  be necessary to utilize the UPGRADE
program that is included on a separate disk to keep any data
that you already have entered.

Insert the UPGRADE disk in drive A and enter  UPGRADE,  then
hit the return key.

When  instructed,  remove  the  UPGRADE  disk and insert the
CDMASTER program disk.

The program menu will then appear, after  entering  1  or  2
the computer will request you enter the location of the data
or program files that you wish to upgrade.  If you are using
a  floppy  system,  just  enter the drive letter and hit the
return key.  If you are using a hard drive, enter the  drive
letter   AND  the sub directory. ie C:\CDMSTR (Leave off the
final backslash).

The   program  will automatically upgrade  the  program  and
data  files,  when  it  is complete a message will appear on
screen  telling  you  that  part  one  of  the  upgrade  was
successful.

You  can  also  change  the  defaults  while  in the upgrade
program.  See the above instructions on setting defaults.

*NOTE*   Because   of   the addition of Category, it will be
necessary to Update all of your  features  to  include  this
data.   Also because the program now tracks the total number
of  features in your file, it will be necessary to enter the
Utility   Menu  and use the Purge Ghosts option to force the
program to count the  number of title you have.  The program
will display 0 until you do.


Enjoy!

Charles P. Schell IV
Author

Version 2.20 Upgrades

                 Improved  updating  feature, that also lets
                 you thumb through the entire database.

                 Improved delete features.

                 Fixed  a  bug  in  custom sorting routines,
                 that prevented sorting by CD number.

Version 2.30 Upgrades

                 Fixed a minor bug  in  the  Speed  Up  Sort
                 routine  that  could cause difficulties for
                 collections over 350 title.

                 Speed improvements in Find Me! feature.

                 Program  now  lets  you  know  when  it  is
                 working,  rather than the screen just going
                 dead.

                 After printing listings or labels  you  are
                 now  returned  to  the  Labels And Listings
                 Menu instead of the Main Menu,  this  saves
                 time if you are doing  multiple print outs.

                 Improvements  you  can't  see  in  the code
                 structure.

Version 3.00 Upgrades

                  Added Category to feature data entry.

                  Displays  total  number of titles  in the
                  upper right hand corner of the Main Menu.

                  Code   structure   totally   reworked   to
                  decrease  size  of  program  and  increase
                  efficiency.

Version 4.00a Upgrades

                 The ability to exit to DOS temporarily from
                 the Utility Menu.

                 Error  messages included.  No longer risks
                 losing data if error is improperly handled
                 by the User.

                 Update  and  Delete  functions  now work by
                 number instead of Title, making  it  faster
                 and easier.

                 Purge Ghosts feature added to Utility Menu,
                 this was automatic with the Add function in
                 previous  versions but made the program run
                 slow.

                 Speed  added  to  all  of  the   Find   Me!
                 routines.

                 Category  added  to the CD  Listings  print
                 out.

                 Point and shoot menus.

                 Checks  for  sufficient disk space prior to
                 allowing Custom Indexes and Speed  Up  Sort
                 to prevent errors.

                 "Close  'Nuff" added to all search routines
                 allowing minimum input for Find Me!.

                 User sets the data and index file names  to
                 avoid filename conflicts.

                 Tune List added.

Version 5.00 Upgrades

                 "Close 'Nuf" added  to  Update  and  Delete
                 Features.

                 CD   Numbers  on  Case Inserts are now in
                 Double Wide/Double Height size, to make  it
                 easier to read.

                 Find  Highest  Number! added to Find! menu.
                 This will let you know the  highest  number
                 you have used.

                 Find  Missing Numbers! added to Find! menu.
                 This will find numbers that you have missed
                 in  sequence.   Handy  for   when   someone
                 pilfers a CD, or if you have one eaten by
                 the CD player and have to delete it.

                 Index  features  in  the  Utility  menu now
                 leave the file indexed as you want it.  The
                 file used to automatically revert  back  to
                 indexing on Title.

                 Custom  indexing  removed vice the Indexing
                 feature listed above.

                 When making labels, if you do  not  already
                 have  the  file  indexed by CD number the
                 program will do it  for  you,  temporarily.
                 This  adds  speed  to the printing routine.
                 After  print  is  complete  the   file   is
                 returned to the index you have selected.

                 Address of Unicorn Software Ltd. changed.

                 Find CD Number! added to Find! menu. This
                 will   help   you   locate  what  is  on  a
                 particular  CD  Number   you   might   be
                 missing.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1439

     Volume in drive A has no label
     Directory of A:\

    CDMSTR   EXE    194848   7-11-89   9:08a
    COLOUR   SET       354   6-13-89  12:49p
    READ1ST  DOC     13041   6-13-89   1:17p
    TUNE     DAT      5265   6-13-89  10:44a
    UNICORN  DAT       803   6-13-89  12:49p
    UNICORN  NTX      2048   6-13-89  12:49p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       617   9-19-89   1:20p
    FILE1439 TXT       861   9-19-89   1:20p
            9 file(s)     217875 bytes
                          100352 bytes free
