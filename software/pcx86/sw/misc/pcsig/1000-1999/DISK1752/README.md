---
layout: page
title: "PC-SIG Diskette Library (Disk #1752)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1752/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1752"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1752.TXT

{% raw %}
```
Disk No: 1752                                                           
Disk Title: SwitchBoard                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: SwitchBoard                                              
Author Version: 1.0                                                     
Author Registration: $30.00                                             
Special Requirements: 512K RAM, hard drive recommended.                 
                                                                        
Are you still keeping all of your important phone numbers on scraps of  
paper and dog-eared business cards in the bottom of the desk drawer or  
... somewhere?  Then it's time to gather them up and call SWITCHBOARD.  
                                                                        
SWITCHBOARD will organize your library of telephone numbers, addresses  
and comments about contacts.  Enter as many records as you need. The    
only limit is the capacity of your disk.  Find any phone number in      
virtually an instant with the Locator function and, if you have a modem,
the number can be dialed for you.                                       
                                                                        
Print reports using the menus provided and, if you need it, on-line Help
is a key-stroke away.  Beginners will find that SWITCHBOARD was written 
for them.                                                               
                                                                        
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
║                 <<<<  Disk #1752  SWITCHBOARD  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: PHONE1                                          ║
║                                                                         ║
║ To print documentation, type: COPY PHONE1.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PHONE1.DOC

{% raw %}
```


























                                SWITCHBOARD
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
MAIN MENU...........................................................page 7
PHONE LIST..........................................................page 8


                                  page 3



                             LICENSE AGREEMENT

   SWITCHBOARD is protected by the United States Copyright
Laws and International Treaties provisions. All rights are reserved.
Non-registered users of the SWITCHBOARD are licensed only to
use the program on a trial basis for the sole purpose of determining
whether or not it meets their requirements.  All other uses require
registration.  Any other use  of non-registered copies of the SWITCHBOARD
computer program by any person, business, government organization, or any
other entity is strictly forbidden and is a violation of this license
agreement.

   Registration permits use of this program on a single computer at a time.

   If after trying the SWITCHBOARD you feel it meets your
needs, please register using the instructions and information in the file
REGISTER.FRM on your distribution diskette.  When you register, you will be put
on my mailing list for upgrades.


                                  page 4


                                 WARRANTY

   I, Alan Weinberg, the author of SWITCHBOARD make no
warranty of any kind, expressed or implied, including without limitation,
any warranty of merchantability or fitness for a particular purpose.  Alan
Weinberg shall not be liable for any damages, whether direct, indirect,
special, or consequential arising from a failure of this program to operate
in the manner desired by the user.  Alan Weinberg shall not be liable for
any damages to data or property which may be caused directly or indirectly
by the use of SWITCHBOARD.

   IN NO EVENT WILL ALAN WEINBERG BE LIABLE FOR ANY DAMAGES, INCLUDING ANY
LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE PROGRAM, OR FOR ANY
CLAIM BY ANY OTHER PARTY.

   The License Agreement and Warranty shall be construed, interpreted, and
governed by the laws of the state of Arizona.

                                  page 5

                               INTRODUCTION


   SWITCHBOARD organizes your telephone numbers of contacts, addresses, and
comments in a easy to use electronic database.  With the locator, you can
instantly  find  the  telephone number of any party.  SWITCHBOARD will even
dial the number for you if you own a modem that is hooked to your computer.
Help is available by pressing  <F1>.   A  report  can  be  printed  of  all
parties.   You may enter up to 400 character  comments.   SWITCHBOARD  will
allow  unlimited  number  of  records.   You  may  enter thousands of phone
numbers and locate the one you want almost instantly.  Customized versions
of SWITCHBOARD can be programmed for you for a fee.
   SWITCHBOARD is a fast program  using sophisticated state of the art
database and information processing techniques.  One of my goals was to
include an easy to understand user-interface with menus and windows.  Help is
available throughout the program by pressing the <F1> key.  This program has
a short learning curve and is fun to use.  You will be up and running in no
time.
If you have a question first press F1 to activate the help facility.  If
you are still confused refer to this document.  For those that are really
stuck in the mud you may contact my by mail for technical assistance.
Note: you must be registered to receive technical assistance!
  SWITCHBOARD was written for the beginner to advanced computer user.
It provides a low cost alternative to powerful telephone number management
and organization.  You don't have to know any programming or be a computer
whiz with a PhD.  That is not who this program has been written for.  It is
meant for the computer user who uses the computer as a tool.
  SWITCHBOARD requires an IBM PC or compatible with at least 512k memory,
DOS 2.0 or higher, any monitor, and a hard disk is
recommended.  A printer is optional.  Before using this program, you should be
familiar with your computer and DOS.


                                  page 6


                              GETTING STARTED

   Your program diskette should contain at least the following 4 files:

                                PHONE1.EXE
                                PHONE1.HLP
                                PHONE1.DOC
                                DIAL123.EXE

If these files are not on your distribution diskette this program will not
operate correctly.  Contact your distributor from whom you purchased the
program.


INSTRUCTIONS

1.  install the distribution diskette in floppy drive a and close the door
2.  copy all files to the subdirectory you want or onto another floppy disk
    (eg. COPY A:*.* C:\PHONE)
3.  make a backup copy of the original distribution diskette
    (who ever does?)
4.  put in your AUTOEXEC.BAT file the following commands:
                  FILES=40
                  BUFFERS=40
5.  to run, type PHONE1 <enter>

That's all there is to it!  The rest of this manual is optional reference
material.  Most of your questions can be answered by the on-line help in
the program.  GOOD LUCK AND HAVE A NICE DAY!

                                  page 7



                                 MAIN MENU

        PHONE............the main part of the program.  Come here to  enter
                         new numbers, change numbers, dial a number, etc.

PRINT  REPORT.............to  print  a  report listing all data you entered
                          listed alphabetically by COMPANY or party's name.

        QUIT..............exit to DOS

                   SELECT YOUR CHOICE AND PRESS <ENTER>
-------------------------------------------------------------------------------

      <F1>           help.

      <CTRL-ESCAPE>       return to menu or exit the program.



                                  page 8

                              THE PHONE LIST
         (where you will be if you press PHONE from the main menu)

    The phone list is a "table" listing COMPANY/PERSON'S NAME and TELEPHONE
NUMBER.  The entries will be in alphabetical order.  Use the cursor keys to
go to the name and number you are interested in.  To get to a party's  name
and  number quickly I have provided a "Name Locator" just below the title
"PHONE LIST".  Just type one or more letters of the  company/person's  name
and the program will automatically place the highlight bar on that entry.
    To  add  a  phone number to the list press <Ins>.  The Update Form will
appear with the message "Record will  be  added"  appearing  below  it.
    Note:  if, for example, you want to enter a person
not affiliated with a  company  enter  his/her  name  in  the  first  field
"COMPANYNAME".  That way it will be listed in the "table".  Only the fields
COMPANYNAME  and  TELEPHONE  NUMBER   are listed in the "table".  After you
have entered all the fields press <Ctrl Enter> to accept that record.  If you
decide you have made a mistake and want to  cancel,  press  <Ctrl  Escape>.
That record WILL NOT BE ADDED.  Also, <Escape> will move you back one field
as  will  the  up and down cursor keys.  If you press <Escape> while at the
1st field you will return to the "table" without any records being added.
    To delete a phone number, place the highlight bar  on  the  number  and
press the <Delete> key.  You will be asked to confirm the deletion.
    To view a record press <Enter> while on the number in the "table".
    To  dial  a  number  move  the highlight bar to the number you want and
press  <F5>.   Before  you can dial a number you must specify which comport
your modem is on by pressing <F7>.


    OVERALL, I HAVE TRIED TO MAKE A VERY COMPLICATED PROGRAM  AN  EASY  AND
USEFUL  TOOL  TO HAVE AROUND THE OFFICE OR HOME.   GETTING YOUR FEET WET BY
TRYING THE PROGRAM IS THE BEST WAY TO LEARN IT.

                             END OF PHONE1.DOC




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1752

     Volume in drive A has no label
     Directory of A:\

    DIAL123  EXE     43489   8-08-89   4:00p
    FILE1752 TXT      2073  12-19-89  11:12a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   2:20a
    PHONE1   DOC      8885   8-10-89  10:47a
    PHONE1   EXE    249600   8-10-89   5:09p
    PHONE1   HLP      4080   8-10-89   7:00a
    REGISTER FRM      1219   8-10-89  10:57a
            8 file(s)     309924 bytes
                            8192 bytes free
