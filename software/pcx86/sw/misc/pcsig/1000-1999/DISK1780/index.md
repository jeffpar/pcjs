---
layout: page
title: "PC-SIG Diskette Library (Disk #1780)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1780/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1780"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## APPOINTS.DOC

{% raw %}
```


























                           APPOINTMENT CALENDAR
                                version 1.01
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
CALENDAR SCREEN.....................................................page 7
APPOINTMENTS SCREEN.................................................page 8


                                  page 3



                             LICENSE AGREEMENT

   APPOINTMENT CALENDAR is protected by the United States Copyright
Laws and International Treaties provisions. All rights are reserved.
Non-registered users of the APPOINTMENT CALENDAR are licensed only to
use the program on a trial basis for the sole purpose of determining
whether or not it meets their requirements.  All other uses require
registration.  Any other use  of non-registered copies of the APPOINTMENT
CALENDAR computer program by any person, business, government organization,
or any other entity is strictly forbidden and is a violation of this license
agreement.

   Registration permits use of this program on a single computer at a time.

   If after trying the APPOINTMENT CALENDAR you feel it meets your
needs, please register using the instructions and information in the file
REGISTER.FRM on your distribution diskette.  When you register, you will be put
on my mailing list for upgrades.


                                  page 4


                                 WARRANTY

   I, Alan Weinberg, the author of APPOINTMENT CALENDAR make no
warranty of any kind, expressed or implied, including without limitation,
any warranty of merchantability or fitness for a particular purpose.  Alan
Weinberg shall not be liable for any damages, whether direct, indirect,
special, or consequential arising from a failure of this program to operate
in the manner desired by the user.  Alan Weinberg shall not be liable for
any damages to data or property which may be caused directly or indirectly
by the use of APPOINTMENT CALENDAR.

   IN NO EVENT WILL ALAN WEINBERG BE LIABLE FOR ANY DAMAGES, INCLUDING ANY
LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE PROGRAM, OR FOR ANY
CLAIM BY ANY OTHER PARTY.

   The License Agreement and Warranty shall be construed, interpreted, and
governed by the laws of the state of Arizona.

                                  page 5

                               INTRODUCTION


   APPOINTMENT  CALENDAR  is  just  that,  an appointment calendar, for any
month, day, and year.  It features unlimited database techniques.  You must
have DOS 2.0 or higher, 512K RAM or more, any monitor, and a printer  and
hard  disk  are optional.
   Appointment Calendar will keep your appointments for you in its database
for any half hour increment from 12:00AM to 11:30PM (this is good for night
owls).   A  daily  REMARK  (comments) box allows additional remarks for the
days appointments.  Help is available by pressing <F1>.   A  copy  of  your
appointments for the day can be sent to the printer.
   Appointment Calendar uses state of the art database techniques that allow
unlimited  records  (days)  and  fast  Btree  access to you appointments no
matter how large the database.  This program was meant for the beginner  to
advanced  power  user  who uses the computer as a tool.  This program is an
excellent addition to software used in an office or home.
   You may try this program out and if you like it, please register.   With
registration  and  your comments for suggestions, I will regularly send you
upgrade notices and bug fixes (God forbid!).  Registration form is in file
REGISTER.FRM.  Other products that I market are in file PRODUCTS.DOC.

                                  page 6


                              GETTING STARTED

   Your program diskette should contain at least the following 3 files:

                                APPOINTS.EXE
                                APPOINTS.HLP
                                APPOINTS.DOC

If these files are not on your distribution diskette this program will not
operate correctly.  Contact your distributor from whom you purchased the
program.


INSTRUCTIONS

1.  install the distribution diskette in floppy drive a and close the door
2.  copy all files to the subdirectory you want or onto another floppy disk
    (eg. COPY A:*.* C:\APPOINTS)
3.  make a backup copy of the original distribution diskette
    (who ever does?)
4.  put in your CONFIG.SYS file (in your root directory) the following
      commands:
                  FILES=40
                  BUFFERS=40
5.  to run, type APPOINTS <enter>

That's all there is to it!  The rest of this manual is optional reference
material.  Most of your questions can be answered by the on-line help in
the program.  GOOD LUCK AND HAVE A NICE DAY!

                                  page 7


                              CALENDAR SCREEN

   When  you enter the calendar screen this month's calendar will be shown.
Today's date will be a  black  box.   The  number  of  appointments  in  AM
(morning)  and PM (afternoon and evening) will be shown for each day of the
month.  Press <enter> to see the appointments  for  the  day  (APPOINTMENTS
SCREEN).  Below are the allowed key input for the CALENDAR SCREEN:
----------------------------------------------------------------------------

 <ENTER>             go to APPOINTMENTS SCREEN to see your appointments
 <CTRL ESC>          quit and return to DOS
 <F1>                help.
 <cursor keys>       move around in the calendar
 <PgUp>              go to last month
 <PgDn>              go to next month
 <Ctrl PgUp>         go to last year, same month
 <Ctrl PgDn>         go to next year, same month
 <Ctrl Home>         go to today's date
----------------------------------------------------------------------------


                                  page 8

                            APPOINTMENTS SCREEN

   Shown  on  this screen will be the time starting from 12:00AM to 11:30PM
in  half  hour increments.  You may enter an appointment  reminder  in each
of these times.  A REMARK box can hold your important comments for the day.
Below are the allowed keys:
----------------------------------------------------------------------------

 <F1>             help
 <F3>             print this day's appointments
 <F5>             go to REMARK box to make a comment for the day
 <F10>            save REMARK and return to appointments
 <CTRL ENTER>     save appointments and go back to the CALENDAR SCREEN
 <CTRL ESC>       do not save changes and then return to CALENDAR SCREEN
----------------------------------------------------------------------------


   OVERALL, I HAVE TRIED TO MAKE A VERY COMPLICATED PROGRAM  AN  EASY  AND
USEFUL  TOOL  TO HAVE AROUND THE OFFICE OR HOME.   GETTING YOUR FEET WET BY
TRYING THE PROGRAM IS THE BEST WAY TO LEARN IT.

                             END OF APPOINTS.DOC




```
{% endraw %}

## FILE1780.TXT

{% raw %}
```
Disk No: 1780                                                           
Disk Title: Appointment Calendar                                        
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Appointment Calendar                                     
Author Version: 1.01                                                    
Author Registration: $20.00                                             
Special Requirements: 512K RAM                                          
                                                                        
Easy to read screens and reports will make APPOINTMENT CALENDAR an asset
to your busy day.  You enter your appointments as you make them from the
schedule menu.  You set the time and a quick comment.  Then you can look
at a summary of your appointments for an entire month, or a detailed    
breakdown for the day.  The monthly calendar quickly tells you how many 
appointments you have in the morning, and how many in the afternoon and 
evening.  Great for seeing how your week or month is shaping up at a    
glance.  The daily report can be printed out for handy daily schedule.  
                                                                        
APPOINTMENT CALENDAR will keep your appointments for you on half hour   
increments from 12:00 a.m. to 11:30 p.m. (good for night owls).  A daily
REMARK (comments) box allows additional remarks for the days            
appointments and on-line help is always available.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #1780  APPOINTMENT CALENDAR  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  APPOINTS (press enter)                         ║
║                                                                         ║
║ To print documentation, type:  COPY APPOINTS.DOC PRN                    ║
╚═════════════════════════════════════════════════════════════════════════╝
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
      MOVE.COM is another program that lets you move files  to  other  hard
      disk subdirectories by typing only one letter of the directory name.
      registration.......$10


3)    SARAH'S  DIARY  is  an electronic diary for anyone wanting to keep a
      diligent diary.....$30

4)     APPOINTMENT  CALENDAR  is  a  calendar/appointment  book for keeping
       appointments for any hour of the day.....$20

5)     STAMP ALBUM is a stamp collector's electronic database  for  keeping
       track of your stamps.....$30

6)      WORLD  COIN  ALBUM  is  a  coin collector's electronic database for
        keeping track of your coins.....$30

7)      ZULU LOG BOOK is a radio operator's electronic logbook for keeping
        track of your contacts around the world.....$30

8)      DISK TREE lets you see your disk drive in an organized disk tree
        and you can see files in your subdirectories......$8

9)      WORLD BANK NOTES is a bank note collector's electronic database for
        keeping track of your bank note collection.....$30        
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

### Directory of PC-SIG Library Disk #1780

     Volume in drive A has no label
     Directory of A:\

    APPOINTS DOC      7656   1-19-89   2:28p
    APPOINTS EXE    231104   1-19-89   2:16p
    APPOINTS HLP      3415   1-19-89   1:59p
    FILE1780 TXT      2073   3-10-90   4:41p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-20-89   1:01p
    PRODUCTS DOC      2860   1-19-89   2:36p
    REGISTER FRM      1293   1-19-89   2:30p
            8 file(s)     248979 bytes
                           68608 bytes free
