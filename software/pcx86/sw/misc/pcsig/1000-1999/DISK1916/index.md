---
layout: page
title: "PC-SIG Diskette Library (Disk #1916)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1916/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1916"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1916.TXT

{% raw %}
```
Disk No: 1916                                                           
Disk Title: Zulu Logbook                                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Zulu Logbook                                             
Author Version: 1.0                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
What dBase is to the businessman who wants to keep track of mailing     
addresses at the office, ZULU LOGBOOK is to the amateur radio oper-     
ator (Ham) who wants to keep track of his radio contacts. The size      
of this electronic database is only limited by the available space      
on your disk. On-line help is available.                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         

```
{% endraw %}

## HAMLOG.DOC

{% raw %}
```


























                               ZULU LOG BOOK
                                version 1.0
                              Reference Guide
                            Copyright (c) 1989
                             by Alan Weinberg
                            1742 Avenida Sirio
                             Tucson, Az, 85710


                             TABLE OF CONTENTS

license agreement...................................................page 3
warranty............................................................page 4
introduction........................................................page 5
getting started.....................................................page 6
HAMLOG TABLE........................................................page 7


                                  page 3



                             LICENSE AGREEMENT

   ZULU LOG BOOK is protected by the United States Copyright
Laws and International Treaties provisions. All rights are reserved.
Non-registered users of the ZULU LOG BOOK are licensed only to
use the program on a trial basis for the sole purpose of determining
whether or not it meets their requirements.  All other uses require
registration.  Any other use  of non-registered copies of the ZULU LOG BOOK
computer program by any person, business, government organization, or any
other entity is strictly forbidden and is a violation of this license
agreement.

   Registration permits use of this program on a single computer at a time.

   If after trying the ZULU LOG BOOK you feel it meets your
needs, please register using the instructions and information in the file
REGISTER.FRM on your distribution diskette.  When you register, you will be put
on  my  mailing  list  for upgrades. Technical support is available to only
those registered users.  With registration, the  latest  version  of  the
ZULU LOG BOOK will be mailed to you.  This registered version allows you to
print a report  on  one  country's  CONTACTS that you own in addition to
printing  all your contacts. Also, in the registered version you may choose
to print all contacts made with one call sign.
Other  software  products  I  have  authored are listed in PRODUCTS.DOC.


                                  page 4


                                 WARRANTY

   I, Alan Weinberg, the author of ZULU LOG BOOK make no
warranty of any kind, expressed or implied, including without limitation,
any warranty of merchantability or fitness for a particular purpose.  Alan
Weinberg shall not be liable for any damages, whether direct, indirect,
special, or consequential arising from a failure of this program to operate
in the manner desired by the user.  Alan Weinberg shall not be liable for
any damages to data or property which may be caused directly or indirectly
by the use of ZULU LOG BOOK.

   IN NO EVENT WILL ALAN WEINBERG BE LIABLE FOR ANY DAMAGES, INCLUDING ANY
LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE PROGRAM, OR FOR ANY
CLAIM BY ANY OTHER PARTY.

   The License Agreement and Warranty shall be construed, interpreted, and
governed by the laws of the state of Arizona.

                                  page 5

                               INTRODUCTION


   ZULU LOG BOOK organizes your logbook in a easy to use electronic
database.  With the locator, you can instantly  find  the contact
your looking for. Help is available by pressing  <F1>.   A  report  can
be  printed   of   all contacts  by  pressing  the  hot key <F5> or just one
country's contacts by pressing <F7> (F6+F7 are only available when you
register). You can print all contacts with one call sign with <F6>.
You may enter multiline comments for each contact.   ZULU LOG BOOK  will
allow  unlimited  number of contacts to be input.   You  may  enter thousands
of contacts and locate the one you want almost instantly.  Customized versions
of ZULU LOG BOOK can be programmed for you for a fee.
   ZULU LOG BOOK is a fast program  using sophisticated state of the art
database and information processing techniques.  One of my goals was to
include an easy to understand user-interface with menus and windows.  Help is
available throughout the program by pressing the <F1> key.  This program has
a short learning curve and is fun to use.  You will be up and running in no
time.
  If you have a question first press F1 to activate the help facility.  If
you are still confused refer to this document.  For those that are really
stuck in the mud you may contact my by mail for technical assistance.
  ZULU LOG BOOK was written for the beginner to advanced computer user.
It provides a low cost alternative to powerful logbook management
and organization.  You don't have to know any programming or be a computer
whiz with a PhD.  That is not who this program has been written for.  It is
meant for the computer user who uses the computer as a tool.
  ZULU LOG BOOK requires an IBM PC or compatible with at least 512k memory,
DOS 2.0 or higher, any monitor. A printer is optional.  Before using this
program, you should be familiar with your computer and DOS.


                                  page 6


                              GETTING STARTED

   Your program diskette should contain at least the following 3 files:

                                HAMLOG.EXE
                                HAMLOG.HLP
                                HAMLOG.DOC

If these files are not on your distribution diskette this program will not
operate correctly.  Contact your distributor from whom you purchased the
program.


INSTRUCTIONS

1.  install the distribution diskette in floppy drive a and close the door
2.  copy all files to the subdirectory you want or onto another floppy disk
    (eg. COPY A:*.* C:\HAMLOG)
3.  make a backup copy of the original distribution diskette
    (who ever does?)
4.  put in your CONFIG.SYS file (in the root directory) the following
      commands:
                  FILES=40
                  BUFFERS=40
5.  to run, type HAMLOG <enter>

That's all there is to it!  The rest of this manual is optional reference
material.  Most of your questions can be answered by the on-line help in
the program.  GOOD LUCK AND HAVE A NICE DAY!

                                  page 7

                             THE HAMLOG TABLE

    The HAMLOG TABLE is a "table" listing the HAMLOG's country and other info.
The entries will be in alphabetical order.  Use the cursor keys to
go to the CALLSIGN/CONTACT you are interested in.  To get to a CONTACT
quickly I have provided a "CALLSIGN Locator" just below the title
"HAMLOG TABLE".  Just type one or more letters of the CALLSIGN'S name
and the program will automatically place the highlight bar on that entry.
    To  add  a contact to the table press <Ins>.  The Update Form will
appear with the message "Record will  be  added"  appearing  below  it.
After you have entered all the fields press <Ctrl Enter> to accept that
record.  If you decide you have made a mistake and want to  cancel,  press
<Ctrl  Escape>. That record WILL NOT BE ADDED.  Also, <Escape> will move you
back one field as  will  the  up and down cursor keys.  If you press <Escape>
while at the 1st field you will return to the "table" without any records
being added.
    To  delete  a contact,  place  the  highlight bar  on  that contact in the
"table" and press the <Delete> key.  You will be asked to confirm the
deletion.
    To view a record press <Enter> while on the contact in the "table".
    To print a report of all your contacts to  your  printer  (device  LPT1),
press <F5>.
    To print a report of all contacts of one country, place the highlight bar
on that country and press <F7>.  Note: using <F6 and F7> are only available
when you register.
    To print a report of all contacts of one callsign, place the highlight bar
on that callsign and press <F6>.  Note: using <F6 and F7> are only available
when you register.

    OVERALL, I HAVE TRIED TO MAKE A VERY COMPLICATED PROGRAM  AN  EASY  AND
USEFUL  TOOL  TO HAVE AROUND THE OFFICE OR HOME.   GETTING YOUR FEET WET BY
TRYING THE PROGRAM IS THE BEST WAY TO LEARN IT.

                             END OF HAMLOG.DOC




```
{% endraw %}

## PRODUCTS.DOC

{% raw %}
```
                      OTHER PRODUCTS BY ALAN WEINBERG
                            1742 AVENIDA SIRIO
                             TUCSON, AZ, 85710

----------------------------------------------------------------------------


1)   SWITCHBOARD  is  a telephone directory program that allows the user to
      store and recall telephone numbers, addresses, etc. and by pressing a
      hot key the program will dial the number (modem required)......$30

2)   HARD DISK TOOLS is a collection of handy programs for the  power  hard
      disk   user   (hard   disk  required).   CCD  allows  you  to  change
      subdirectories by typing 1 or more letters of the directory name.
      Instead of    CD C:\DATABASE\CLIPPERR\LETTERS\WEEK59\PAYROLL
      use          CCD P
      which will take you to the PAYROLL subdirectory
      COPI is another program which allows you  to  type  only  1  or  more
      letters of the path for a copy command.
      Instead of COPY C:\DATABASE\CLIPPER\CLIP.DOC C:\MDD\JULIET\OMAHA
      use        COPI CL\CLIP.DOC  OM\
      which  will  copy  CLIP.DOC  in  subdirectory CLIPPER to subdirectory
      OMAHA
      NUMLOCK is another program that turns the NUMLOCK key off on  bootup.
      Stick it in your AUTOEXEC.BAT file.
      registration.......$20


3)    SARAH'S  DIARY  is  an electronic diary for anyone wanting to keep a
      diligent diary.....$30

4)     APPOINTMENT  CALENDAR  is  a  calendar/appointment  book for keeping
       appointments for any hour of the day.....$30

5)     STAMP ALBUM is a stamp collector's electronic database  for  keeping
       track of your stamps.....$30

6)      WORLD  COIN  ALBUM  is  a  coin collector's electronic database for
        keeping track of your coins.....$30

7)      ZULU LOG BOOK is a radio operator's electronic logbook for keeping
        track of your contacts around the world.....$30
----------------------------------------------------------------------------

If you are interested in any of these programs send check or money order in
US funds to                Alan Weinberg
                           1742 Avenida Sirio
                           Tucson, Az, 85710

You will be registered and receive the latest version.
Foreign customers add $10 (US) for postage and handling.
----------------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1916

     Volume in drive A is DISK1916
     Directory of A:\

    FILE1916 TXT      1481  12-28-89   7:45p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80  12:12a
    HAMLOG   DOC      8439  11-09-89   2:52p
    HAMLOG   EXE    193695  11-09-89   4:11p
    HAMLOG   HLP     10798  11-09-89  10:37a
    PRODUCTS DOC      2422  11-09-89   4:18p
    REGISTER FRM      1285  11-09-89   4:00p
            8 file(s)     218698 bytes
                           98304 bytes free
