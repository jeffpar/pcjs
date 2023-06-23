---
layout: page
title: "PC-SIG Diskette Library (Disk #3009)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3009/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3009"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3009.TXT

{% raw %}
```
Disk No: 3009
Disk Title: Electric POSI (Point-of-Sale/Inventory)
PC-SIG Version: S3.0

Program Title: Point-of-Sale/Inventory
Author Version: A.3
Author Registration: $95.00
Special Requirements: Two floppy drives and a printer.

The POINT-OF-SALE/INVENTORY program is very easy to use.  It functions
as either a stand-alone inventory program or as a front-counter ticket
system.  Standard functions include enter, update and delete inventory,
print tickets, edit the client list (updated automatically from POS),
customize company information.

Reports include WTD/MTD/YTD sales, Catalog Printout, Full Inventory
Listing, Client List, Company Information, Suggested Order.  All reports
are available in detailed and summary form.

An excellent program that is versatile enough to be used with your
business.

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
║  <<<<  PC-SIG Disk #2219 ELECTRIC POSI (POINT-OF-SALE/INVENTORY) >>>>   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  ELECTRIC POSI comes in archived format.  Due to this, you must first   ║
║  install this program.                                                  ║
║                                                                         ║
║  To install, type:  GO-POSI  (press Enter)                              ║
║                                                                         ║
║                                          (c) Copyright 1992 PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTRUCT.DOC

{% raw %}
```
                          ELECTRIC POSI vA.3
                    Copyright 1989-1991 Dennis Drew
                      Copyright Strictly Enforced

              INFORMATION MANUAL FOLLOWS THIS ORDER FORM
Documentation file.  Please read this.  Use PGUP/PGDN to move through 
the file.  When finished, press ESC to continue with the program.
To print out this file, press P and then use PGDN to move through the 
entire file.  It will be printed as you scroll.


                           REGISTRATION FORM
                        (please print clearly)

NAME: _______________________________Serial #:__________________

COMPANY NAME: __________________________________________________

ADDRESS: _______________________________________________________

CITY: ______________________ STATE: _______ ZIP: _______________

PHONE: (_____)_______-_______  PURCHASE DATE: _____/_____/______

I acquired this program from:___________________________________

              On a scale of 1-10, I rate this program a: 

                    1  2  3  4  5  6  7  8  9   10

I acknowledge that I have read and agree to the licensing agreement. I 
request to have my name added to your mailing list for future updates 
and information.  


___________________________________________ ___________________
signed                                      date

            Please send:  ___ 5.25" disks    ___ 3.5" disks

               Enclose your check for $95 and mail to:
              Dennis Drew  PO Box 101   Joplin, MO  64802
                       VISA/MASTERCARD ACCEPTED.

Outside U.S. please add $5 shipping U.S. funds, by international money 
order or a check drawn on a U.S. bank.  Due to difficulty in 
processing, no foreign checks, please. 

           
                          ALL USERS!!! IMPORTANT!!!
    The following two lines (with the minimum configurations shown) must 
be in your CONFIG.SYS file on your DOS BOOT disk.  

                            FILES=20
                            BUFFERS=20

    If you do not have a CONFIG.SYS file on your DOS BOOT disk, or if it 
does not contain at least the above specs, then you must update your 
CONFIG.SYS file so that it does.   To do this, switch to your main 
boot drive (usually either A: or C:) and then enter the following 
lines EXACTLY:

    COPY CONFIG.SYS + CON CONFIG.SYS (press enter)
    FILES=20 (press enter)
    BUFFERS=20 (press enter)
    (press F6 key)
    (press ENTER)
    (reboot your computer)

    If you are unsure about how to do this, contact your computer dealer.  
This computer file is a STANDARD requirement of most modern computer 
programs and should be present on every computer system.   If you don't 
have a computer dealer then send us a nice donation and we can help you 
with this.

POSI REQUIRES AN IBM COMPATIBLE PRINTER.  If you have a laser printer, you
will need to set it up in an IBM graphics compatible mode.

                        WHAT IS ELECTRIC POSI?
    POSI is the incredible program that helps you organize your 
inventory and sales counter.  POSI can function as a stand-alone 
inventory program, or as a combination real-time front counter ticket 
and inventory tracking system. 
    POSI helps you in several ways:  
  * Easiest to use sales/inventory program you'll ever find.   
  * Keeps track of inventory as it is sold.   
  * Allows sales of non-inventory and special inventory items (such as 
labor charges).   
  * Full departmentalization (up to 36 departments).   
  * Tracks customer sales totals and prints mailing labels.   
  * Registers customer names for easy sales to regular clients.   
  * Full report system, cost of goods sold tracking.   
  * Full tracking of sales figures on a daily, weekly, monthly and 
annual basis.   
  * Tracks sales for up to 100 salesmen.   
  * Separates taxable and non taxable sales on a line-by-line basis.   
  * Interfaces with our ELECTRIC LEDGER and ELECTRIC LAYAWAY programs 
for easy updating of company sales records (separate registration 
required for LEDGER and LAYAWAY packages). 
    POSI is low-cost, easy to use, and powerful.  It is ideal for the 
businessman who has wanted a sales ticket / inventory system, but has 
been put off by the complexity and high prices of other packages.  

    
           IMPORTANT:   HOW TO OBTAIN THE INSTRUCTION MANUAL 
    This program is USER SUPPORTED.  You are encouraged to copy the 
SHAREWARE diskette and give it to your friends and acquaintences.  You 
may use this program freely and distribute it as you wish.  However, 
the following restrictions do apply: 

    1. You may not charge a fee for this program, other than for the 
cost of duplication.  Shareware companies must obtain a distribution 
license from the author. 
    2. You may not alter the program or supporting items in any 
manner, may not add to or delete from the disk.  
    3. You may not copy or reproduce in any way the instruction manual 
that is available for this program.  
    4. Shareware companies must obtain a distribution license from the 
author prior to distribution.  Failure to do so constitutes breach of 
copyright.

    Our programs are very easy to use.  You do not need an instruction 
manual to operate them.  However, the manual allows you to gain 
greater benefit from this program.  To get the manual, you must 
REGISTER with us.  We depend on your registration fee to continue 
operation.  Registration brings you: 
    1. Instruction manual.
    2. Call-in telephone support.
    3. Places you on our mailing list for notification of future 
updates.  
    4. Usually brings you a more advanced version of the program.

    We will support you if you register; absolutely no support will be 
given to non-registered users.  To register, use the enclosed form, or 
send your check to: 

                              DENNIS DREW  
                              PO Box 101   
                           Joplin, MO  64802   
                             (417)781-4248 

                USER REGISTRATION AND LICENSE AGREEMENT
                            

ARTICLE 1. ACCEPTANCE.
    In registering for our programs, the user agrees to abide by all 
articles and restrictions of this license. It is the responsibility of 
the purchaser to note the items of this license, and decide upon 
agreeability of its terms prior to the registration of the program.  

ARTICLE 2. LICENSING.  
    This program is licensed, not sold. As such, the user/ 
purchaser has the right to use the program on a day-to-day basis, 
but recognizes the ownership of the program and all materials as 
belonging to Dennis Drew.

ARTICLE 3. COPYING AND MULTI-USER.
    This program is USER SUPPORTED.  You are encouraged to copy 
the SHAREWARE diskette and give it to your friends and acquaintences.  
You may use this program freely and distribute it as you wish.  
However, the following restrictions do apply: 
    1. You may not charge a fee for this program, other than for 
the cost of duplication.  
    2. You may not alter the program or supporting items in any 
manner, may not add to or remove items from the disk.  
    3. You may not copy or reproduce in any way the instruction 
manual that is available for this program. The instruction manual 
is provided to REGISTERED USERS ONLY.  Copying of this manual in 
any form is strictly forbidden.  This program may be used within 
a network/multi-user system, so long as no copies of the 
instruction manual are made.  If several copies of the manual are 
required, then a discount is provided on request.  
    4. Shareware companies must obtain a distribution license from the 
author.

ARTICLE 4. WARRANTY AND LIABILITY.
     It is the responsibility of the purchaser to decide upon 
usability and application of this program to his/her particular 
needs. Every effort has been made to insure the accuracy and 
reliability of this program. However, since the success of this 
program relies a great deal upon individual use and dedication to 
the use thereof, and the fact that this program is user copiable 
(thus limiting our control over what the end-user receives), 
We will not be held responsible for any results obtained from the 
direct or indirect use of this program nor does this program 
comply to the laws of merchantability of any state.  

ARTICLE 5. TERMINATION.
     If the user/purchaser breaks any article of this agreement, 
all items pertaining to the program shall be returned to the 
publisher. This will not exclude any additional punitive damages 
incurred according to national and civil laws.  

ARTICLE 6. CUSTOMER SUPPORT.
     We are eager to support our customers. Technical 
assistance is available to REGISTERED USERS ONLY by calling 
(417)781-4248 Monday through Friday during the hours of 9am to 
5pm.  


                           USER REGISTRATION
     If your diskette is damaged in any way, return it to us along 
with $10.00 to cover cost of replacement. We will rush you a new 
diskette.  
     It is recognized that the purchaser is already bound by the terms 
of the LICENSING AGREEMENT enclosed with this package. This 
registration form serves two purposes: 
     1. To emphasize agreement with the terms of the license.
     2. To allow us to provide you with timely updates and information.  
     

                     WHY SHOULD YOU REGISTER?
     There are several good reasons for registering:
      
     1. You will receive a copy of the users manual (it is illegal to 
copy this manual for any reason).  
     2. You will receive full telephone support.  
     3. You will be automatically notified of significant updates, so 
that you may keep your system current.  

                    Thank you for registering!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3009

     Volume in drive A has no label
     Directory of A:\

    GO-POSI  COM      3385  12-20-91   5:43p
    UNARC    COM     12242   4-27-87
    POSI     ARC    213570  12-20-91   1:08p
    GO       BAT        38   4-02-92  12:26p
    GO       TXT       847   4-14-92  11:05a
    FILE3009 TXT       937   4-14-92  10:55a
            6 file(s)     231019 bytes
                           89088 bytes free
