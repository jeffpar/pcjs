---
layout: page
title: "PC-SIG Diskette Library (Disk #1813)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1813/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1813"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DIARY.DOC

{% raw %}
```


























                               Sarah's Diary
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
DATE TABLE..........................................................page 7
UPDATE FORM.........................................................page 8


                                  page 3



                             LICENSE AGREEMENT

   SARAH'S DIARY is protected by the United States Copyright
Laws and International Treaties provisions. All rights are reserved.
Non-registered users of the SARAH'S DIARY are licensed only to
use the program on a trial basis for the sole purpose of determining
whether or not it meets their requirements.  All other uses require
registration.  Any other use  of non-registered copies of the SARAH'S DIARY
computer program by any person, business, government organization, or any
other entity is strictly forbidden and is a violation of this license
agreement.

   Registration permits use of this program on a single computer at a time.

   If after trying the SARAH'S DIARY you feel it meets your
needs, please register using the instructions and information in the file
REGISTER.FRM on your distribution diskette.  When you register, you will be put
on my mailing list for upgrades.


                                  page 4


                                 WARRANTY

   I, Alan Weinberg, the author of SARAH'S DIARY make no
warranty of any kind, expressed or implied, including without limitation,
any warranty of merchantability or fitness for a particular purpose.  Alan
Weinberg shall not be liable for any damages, whether direct, indirect,
special, or consequential arising from a failure of this program to operate
in the manner desired by the user.  Alan Weinberg shall not be liable for
any damages to data or property which may be caused directly or indirectly
by the use of SARAH'S DIARY.

   IN NO EVENT WILL ALAN WEINBERG BE LIABLE FOR ANY DAMAGES, INCLUDING ANY
LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE PROGRAM, OR FOR ANY
CLAIM BY ANY OTHER PARTY.

   The License Agreement and Warranty shall be construed, interpreted, and
governed by the laws of the state of Arizona.

                                  page 5

                               INTRODUCTION


   SARAH'S DIARY organizes your diary entries in a easy to use electronic
database.   With the date locator, you can instantly  find  the diary entry
for that date. Help is available by pressing  <F1>.   Two report  functions
are  available.   One  just  prints the diary entry you have chosen and the
other prints all diary entries.  Diary entries may be up to 10  pages  long
(over  11,900  characters),  enough  for  even  the  most  ambitious  diary
enthusiast!   SARAH'S DIARY  will allow  unlimited  number  of  records.
You  may  enter thousands of entries and locate the one you want almost
instantly.
   SARAH'S DIARY is a fast program  using sophisticated state of the art
database and information processing techniques.  One of my goals was to
include an easy to understand user-interface.  This program has a short
learning curve and is fun to use.  You will be up and running in no
time.
If you have a question first press F1 to activate the help facility.  If
you are still confused refer to this document.  For those that are really
stuck in the mud you may contact my by mail for technical assistance.
Note: you must be registered to receive technical assistance!
  SARAH'S DIARY was written for the beginner to advanced computer user.
It provides a low cost alternative to powerful diary management
and organization.  You don't have to know any programming or be a computer
whiz with a PhD.  That is not who this program has been written for.  It is
meant for the computer user who uses the computer as a tool or aid.
  SARAH'S DIARY requires an IBM PC or compatible with at least 512k memory,
DOS 2.0 or higher, any monitor, a hard disk and graphics printer is
recommended.  Before using this program, you should be familiar with your
computer and DOS.


                                  page 6


                              GETTING STARTED

   Your program diskette should contain at least the following 3 files:

                                 DIARY.EXE
                                 DIARY.HLP
                                 DIARY.DOC

If these files are not on your distribution diskette this program will not
operate correctly.  Contact your distributor from whom you purchased the
program.


INSTRUCTIONS

1.  install the distribution diskette in floppy drive a and close the door
2.  copy all files to the subdirectory you want or onto another floppy disk
    (eg. COPY A:*.* C:\DIARY
3.  make a backup copy of the original distribution diskette
    (who ever does?)
4.  put in your AUTOEXEC.BAT file the following commands:
                  FILES=40
                  BUFFERS=40
5.  to run, type DIARY <enter>

That's all there is to it!  The rest of this manual is optional reference
material.  Most of your questions can be answered by the on-line help in
the program.  GOOD LUCK AND HAVE A NICE DAY!

                                  page 7

                                DATE TABLE

   You will be in the DATE TABLE when you start the program.   If  you  are
new  to the program the UPDATE FORM will automatically open so you can type
in  a  diary entry.  The first field on the DATE TABLE is the DATE LOCATOR.
Here you can enter in a date in the form JAN 22,1989 and when you  press
<Enter>  the  program  will position the highlite bar in the scrolling date
table on that date and retrieve that record.  Pressing <Enter>  again  will
allow  you  to  CHANGE  or  VIEW  that record in the UPDATE FORM.  To add a
record press <Ins>. To delete a record press <Del>.  To print  all  records
press <F7>.  <Esc> will take you back to the DATE LOCATOR if you are in the
scrolling  table.   <Ctrl  Esc>  will  exit  the program and return to DOS.
Press <F1> for help.





                                  page 8

                                UPDATE FORM

    You  will  be  in  the UPDATE FORM when you want to edit, view, add, or
delete  a diary entry or record.  The blinking message field just below the
title "UPDATE FORM" tells you which action you have  selected  (eg.  Record
will be added"). The cursor is first  placed  on  the  date field.  Today's
date  will  be in this field.  You may change it but it is required.  After
entering the date press <Enter>.  You are then in  the  diary  entry  field
where  you  may  type  in  your diary entry.  Diary entries may be up to 10
pages long.  When you have finished press <Ctrl Enter> which will take  you
back  to  the  DATE TABLE.  <Ctrl Esc> from the UPDATE FORM will cancel the
diary entry and return you to the DATE TABLE.  <F5> will  print  just  that
record or diary entry.  A graphics printer is recommended.  <Esc> will take
you  back  one  field.   For example, if you are in the diary entry and you
press <Esc> then you will be taken to the DATE field.

    OVERALL, I HAVE TRIED TO MAKE A VERY COMPLICATED PROGRAM  AN  EASY  AND
USEFUL  TOOL  TO HAVE AROUND THE OFFICE OR HOME.   GETTING YOUR FEET WET BY
TRYING THE PROGRAM IS THE BEST WAY TO LEARN IT.

                             END OF DIARY.DOC




```
{% endraw %}

## FILE1813.TXT

{% raw %}
```
Disk No: 1813                                                           
Disk Title: Sarah's Diary                                               
PC-SIG Version: S1                                                      
                                                                        
Program Title: Sarah's Diary                                            
Author Version: 1.0                                                     
Author Registration: $30.00                                             
Special Requirements: 512K RAM, Hard Drive Recommended.                 
                                                                        
Whether you keep a journal, diary, or daily report of any type, SARAH'S 
DIARY can organize your entries in a easy to use electronic database.   
With the date locator, you can instantly find the entry for any date.   
On-line help and a simple design make this program very easy to use.    
                                                                        
Two report functions are available.  One just prints the diary entry you
have chosen and the other prints all diary entries.  Diary entries may  
be up to 10 pages long (over 11,900 characters), enough for even the    
most ambitious diary enthusiast, and SARAH'S DIARY will allow an        
unlimited number of records.  You may enter thousands of entries and    
locate the one you want almost instantly.                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
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

----------------------------------------------------------------------------

If you are interested in any of these programs send check or money order in
US funds to                Alan Weinberg
                           1742 Avenida Sirio
                           Tucson, Az, 85710

You will be registered and receive the latest version.
Foreign customers add $5 (US) for postage and handling.
----------------------------------------------------------------------------


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1813

     Volume in drive A is DISK1813
     Directory of A:\

    DIARY    DOC      8131   8-18-89   5:46p
    DIARY    EXE    259970   9-05-89   9:12a
    DIARY    HLP      3073   9-01-89   4:15a
    FILE1813 TXT      1925  12-20-89   4:27p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   8:27a
    PRODUCTS DOC      1917   9-18-89   6:08p
    REGISTER FRM      1284   8-18-89   5:56p
            8 file(s)     276878 bytes
                           41984 bytes free
