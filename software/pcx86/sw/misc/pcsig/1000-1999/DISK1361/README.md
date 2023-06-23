---
layout: page
title: "PC-SIG Diskette Library (Disk #1361)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1361/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1361"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-POSTCARD PLUS"

    PC-POSTCARD PLUS uses your standard dot matrix printer to produce and
    address postcards with your custom message, such as business
    announcements, reminders and social invitations.  Even does double
    postcards!
    
    With first-class mail costing 25 cents and bulk mail now almost
    17 cents a piece, postcard mailings have suddenly become the darling of
    thrift-minded businesses and organizations.  You get first-class
    delivery and immediate attention for just 15 cents.  Here's a program
    that lets you produce customized postcards -- both singles and doubles,
    with or without a mailing permit -- and even individually addresses
    them!
    
    Using standard-sized (4x6) pin-fed postcards, PC-POSTCARD PLUS prints a
    message 22 lines by 55 characters, an address, and an optional header
    for the return address, postal mailing permit stamp, etc.  It has
    formats for your messages for both sides of a single or double
    postcard.
    Double postcards are great as they allow for a tear-off response card
    for orders, RSVPs, and such. membership events, etc.
    
    Addresses are automatically inserted as each card prints.  Mailing lists
    can be built, added to and sorted by up to 10 different fields.  Since
    PC-POSTCARD PLUS was written by Carl Mieske, author of PC-MAIL
    (PC-SIG disks #868, #869), PC-MAIL mailing lists are compatible for use
    with this program, but not required.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1361.TXT

{% raw %}
```
Disk No: 1361
Program Title:  PC-POSTCARD PLUS 3.3S
PC-SIG version:  1.2

PC-POSTCARD PLUS uses your standard dot matrix printer to produce and
address postcards with your custom message, such as business
announcements, reminders and social invitations.  Even does double
postcards!

With first class mail costing 25 cents and bulk mail now costing almost
17 cents a piece, postcard mailings have suddenly become the darling of
thrift minded businesses and organizations.  You get first class
delivery and immediate attention for just 15 cents!  Here's a program
that lets you produce customized postcards, both single and doubles,
with or without a mailing permit, and even individually addresses them!

Using standard-sized (4x6) pin-fed postcards, PC-POSTCARD PLUS prints a
message 22 lines by 55 characters, an address, and an optional header
for the return address, postal mailing permit stamp, etc.  It has
formats for your messages for both sides of a single or double postcard.
Double postcards are a great as they allow for a tear-off response card
for replies or orders from customers, RSVP for social or membership
events, etc.

Addresses are automatically inserted as each card prints.  Mailing lists
can be built, added to and sorted by up to ten different fields.  Since
PC-POSTCARD PLUS was written by Carl Mieske, the author of PC-MAIL
(PC-SIG disks #868, #869), PC-MAIL mailing lists are compatible for use
with this program, but not required.

Note: Like other programs of Carl's, the typos and creative spelling in
the documentation are marvelous to behold, but don't be put off!  The
program is swift in operation and the menu-driven format is clear and
concise.

Synopsis:  Use your dot matrix printer to create customized postcard
mailings for business announcements, reminders and social invitations.

Usage:  Utility/ Mailing Lists/Postcard Printing.

Special Requirements:  Pin-fed postcards, dot matrix printer with
tractor feed.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

ADDRESS       Data file.
BRUN20   EXE  Microsoft base run support.
CARDPLUS PAK  Screen library.
COLOR    EXE  Color driver.
CONFIG   DRV  Configuration library.
CONFILE  EXE  Utility file.
CONFILE  PAK  Data file.
HELP     EXE  Help/Information routine.
HELP     PAK  Help screen library.
INSTALLR BAT  Program batch file.
INTAL         Data file.
MESSAGE2 EXE  Message entry routine.
PC       BAT  Start up - Color or B&W systems.
PC3      EXE  Control/menu routine.
PCD      BAT  Start up - Dual systems.
PCENTER  EXE  Data entry routine.
PCSEARCH EXE  Search, correct, delete routine.
PERMIT   PAK  Screen library.
PERMIT2  EXE  Return address/stamp entry routine.
POST     PAK  Screen library.
PRINT01  EXE  Print routine: card-side one.
PRINT02  EXE  Print routine: card-side two.
PRTREG   BAT  Prints registration form.
README   BAT  Batch file for viewing readme.doc
README   DOC  Introductory information.
REGFORM  DOC  Registration form.
SPEEDSCR COM  Screen library manager.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk No 1361 PC-POSTCARD PLUS  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program on a color system type, PCD (press enter)          ║
║                                                                         ║
║ To start the program on a regular system type, PC (press enter)         ║
║                                                                         ║
║ For information on the program, type README (press enter)               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
                               PC-POSTCARD   (C)

               PC-POSTCARD (C) COPYRIGHT JAN. 1988 FOTO 64, INC.
                              ALL RIGHTS RESERVED

       PC-POSTCARD PROGRAM is designed to operate on the IBM(R) PC/XT and 
       compatible machines. Program development was with Microsoft Quick 
       Basic 3.0 and was compiled with Quick Basic 2.0. It is supported 
       with the Microsoft BRUN20.EXE module... The program will operate 
       equally well on both monographic, color graphic, and compatible 
       adapters. If your system contains both monographic and CGA 
       adapters the postcard program will only operate on the monographic 
       adapter unless the system is transferred to the color adapter. A 
       software switch "color.exe"is included on the disk to accomplish 
       this change. The dual system  contains both black and white and 
       color monitors. 

       PC-POSTCARD is designed to create and print postcards on 4" X 6" 
       continuous roll - pin feed index card stock. See further 
       descriptions on program functions in the Help Program. PC-POSTCARD 
       is a support program for PC-MAIL (version 2.0 +). Therefore, 
       address data files must be developed using the PC-MAIL format. PC-
       POSTCARD files are developed in the PC-MAIL format, and may be 
       recalled by PC-MAIL routines. 
       
       PC-MAIL may be obtained from your shareware dealer or may be 
       purchased directly from Foto 64, Inc. for one time registration 
       fee of $25 when accompanied with your PC-POSTCARD registration 
       card. 
 
       Printing is supported by any IBM compatible text or graphic printer. 

       Screens supporting PC-POSTCARD operation were developed with the 
       SCREEN SCULPTURE program copyrighted by the SOFTWARE BOTTLING 
       COMPANY OF NEW YORK. Screen transfer operations are accomplished 
       through the use of the resident SPEEDSCR.COM module which is 
       loaded into memory before running PC-POSTCARD.  This is 
       accomplished by running  PC.BAT or PCD.BAT. 

       To start PC-POSTCARD enter PC at the DOS prompt (A>PC). The program 
       will only operate on the monitor in service at the start of the 
       program. If you have a dual adapter system  and wish to operate 
       the program on the color monitor, but start it from the 
       monographic adapter (black and white monitor), enter PCD at the 
       DOS prompt (A>PCD). This command  will switch the system and 
       program operation to the color adapter and monitor. The 
       SPEEDSCR.COM program must be loaded from the adapter on which the 
       program is operated. Should you wish to load other residential 
       programs they must be loaded after the Speedscr.COM module. 

       Licensing agreement permits the distribution of the SPEED SCREEN
       (SPEEDSCR.COM) module on the PC-POSTCARD diskette to support screens
       developed with programs of the SOFTWARE BOTTLING COMPANY OF NEW
       YORK. Any other use is prohibited. 

       First time users should review the help program by entering "H" 
       (Help) after reading the shareware screen up on entering the 
       program. 

       PC-POSTCARD is distributed under the shareware concept. If the 
       program proves of use to you and your computer operation, you are 
       expected to register your copy with Foto 64, Inc. This may be 
       accomplished by completing the registration form at the end of 
       this document and mailing it with your check for $25.00 to the 
       address indicated. As a registered owner you will receive a 
       personalized copy of PCPC containing your own registration 
       number, and will support further shareware development.. 

       YOUR SUPPORT OF SHAREWARE IS THE REASON SHAREWARE CONTINUES TO EXIST. 

       Run PRTREG.BAT for a copy of the registration form.

       You are encouraged to distribute disk copies of the original PCDL disk 
       to other computer users free of charge. This disk copy may not be 
       modified in any way.

       CHANGES IN PC-POSTCARD - VERSION 3.0

       PC-POSTCARD supports wild card searches in the SEARCH/CORRECT/DELETE
       routine. If you cannot remember a complete name or data field a search
       may be made for a fragment, a word, telephone area code, etc..

       PC-POSTCARD searches may be made on all fields, and will support 
       multiple entries in fields that are not used in card printing 
       routine.
       Entries may be separated by any character except a comma or 
       semicolon for ease of reading.

       PC-POSTCARD will print single informational postcards and dual 
       postcards containing a tear off/mail back response. 

       PC-POSTCARD permits the entry of field constants in the ENTER DATA 
       routine. If data entry has consistently a given field name such as the 
       state or city it may be entered as a constant. These names will appear 
       on the enter data screen and may be accepted without their re-entry. A 
       new entry may over write the constant if desired. 


       ********************************************************************
      

                                 FOTO 64 , INC

                        REGISTRATION FORM - PC POSTCARD  3.0 (c)

      P C POSTCARD 3.2 (C) Copyright 1989..Foto 64, Inc..All Rights Reserved..


      NAME___________________________________________  DATE_________________

      ADDRESS_______________________________________________________________

      CITY_________________________________ STATE ____ ZIP__________________

      TELEPHONE_______________________________  
      
      REGISTRATION NUMBER SHOWN ON THE INTRODUCTORY PCPC SCREEN ____________

                    PC-POSTCARD IS BEING USED ON THE FOLLOWING SYSTEM
     
      COMPUTER _______________________________________ RAM _________________

      SYSTEM USED: (MONOGRAPHIC)  (CGA)  (HERCULES)  (OTHER ________________

      DISK DRIVES (1)  (2)  (3)     HARD DISK ____________________ CAPACITY

      MONITORS;  NUMBER ___ : TYPE  (COLOR)   (MONO)   (BOTH)

      TYPE OF APPLICATION OF PC-POSTCARD  __________________________________

      PRINTER: MAKE_________________________________ MODEL _________________

      FROM WHOM DID YOU ACQUIRE PC-POSTCARD ?_________________________________

      COMMENTS WELCOMED:


      Please complete this form and mail with your check for $25.00 to the 
      following address:   
                      
      FOTO 64, INC.  SOFTWARE REGISTRATION   PO BOX 2130  SARATOGA, CA  95070
          
      THANK YOU FOR YOUR SUPPORT OF PC-POSTCARD. Your support will further 
      
      the development of user supported software....    

                                


```
{% endraw %}

## REGFORM.DOC

{% raw %}
```

                                 FOTO 64 , INC

                        REGISTRATION FORM - PC-POSTCARD   (C)

      P C-POSTCARD 3.0 (C) Copyright 1/1988..Foto 64, Inc..All Rights Reserved..


      NAME___________________________________________  DATE_________________

      ADDRESS_______________________________________________________________

      CITY_________________________________ STATE ____ ZIP__________________

      TELEPHONE_______________________________  
      
      REGISTRATION NUMBER SHOWN ON THE INTRODUCTORY PCM SCREEN _____________

                    PC-POSTCARD IS BEING USED ON THE FOLLOWING SYSTEM
     
      COMPUTER _______________________________________ RAM _________________

      SYSTEM USED: (MONOGRAPHIC)  (CGA)  (HERCULES)  (OTHER ________________

      DISK DRIVES (1)  (2)  (3)     HARD DISK ____________________ CAPACITY

      MONITORS;  NUMBER ___ : TYPE  (COLOR)   (MONO)   (BOTH)

      TYPE OF APPLICATION OF PC-POSTCAR  D__________________________________

      PRINTER: MAKE_________________________________ MODEL _________________

      FROM WHOM DID YOU AQUIRE PC-POSTCARD?_________________________________

      COMMENTS WELCOMED:




      Please complete this form and mail with your check for $20.00 to the 
      following address:   
                      
      FOTO 64, INC.  SOFTWARE REGISTRATON   PO BOX 2130  SARATOGA, CA  95070
          
      THANK YOU FOR YOUR SUPPORT OF PC-POSTCARD.   Your support will further 
      
      the development of user supported software....    

                                

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1361

     Volume in drive A has no label
     Directory of A:\

    ADDRESS           2717  10-11-87  12:01a
    BRUN20   EXE     69454   1-16-87  11:44a
    CARDPLUS PAK     36810   5-24-89   8:05a
    COLOR    EXE       640   1-01-80  12:31a
    CONFIG   DRV         7  12-01-88   9:35a
    CONFILE  EXE      5633   5-24-89   6:34a
    CONFILE  PAK      2801   5-23-89  11:47p
    FILE1361 TXT      3216   7-12-89   8:43a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   4-27-89  11:19a
    HELP     EXE      4497   3-20-89   1:40a
    HELP     PAK     15869   5-24-89   8:37a
    INSTALLR BAT        57   2-10-89  10:29a
    INTAL                1   3-20-89  12:00a
    MESSAGE2 EXE     26977   3-21-89  10:07p
    PAGE     COM       325   1-06-87   4:21p
    PC       BAT        63   5-23-89  11:36p
    PC3      EXE     17009   3-22-89  12:02a
    PCD      BAT        70   5-23-89  11:36p
    PCENTER  EXE     19553   6-01-89   9:23p
    PCSEARCH EXE     26241   6-01-89   9:17p
    PERMIT   PAK     13315   5-03-89   7:26a
    PERMIT2  EXE     24865   3-20-89   1:34a
    POST     PAK     13471   5-03-89   7:23a
    PRINT01  EXE     20929   6-01-89   3:39p
    PRINT02  EXE     15633   3-20-89  12:42a
    PRTREG   BAT       210  10-04-87   8:39a
    README   BAT        18   7-12-89   8:28a
    README   DOC      6968   5-02-89  10:51p
    REGFORM  DOC      1640  10-25-88  11:10a
    SPEEDSCR COM      5333  10-01-86  12:00p
           31 file(s)     335054 bytes
                            7168 bytes free
