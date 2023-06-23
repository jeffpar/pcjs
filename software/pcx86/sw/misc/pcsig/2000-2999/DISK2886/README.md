---
layout: page
title: "PC-SIG Diskette Library (Disk #2886)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2886/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2886"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #2886 ZILCH  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To read the introductory documentation, type:  TYPE README.DOC  (Enter)║
║                                                                         ║
║  To print the manual, type:  MANUAL  (press Enter)                      ║
║                                                                         ║
║  To install ZILCH on a hard disk, type:  SETUP  (press Enter)           ║
║                                                                         ║
║  To print the floppy disk installation information, type:               ║
║                                                                         ║
║                                      COPY FLOPPY.DOC PRN  (press Enter) ║
║                                                                         ║
║  To start the program after installation, type:  ZILCH  (press Enter)   ║
║                                                                         ║
║  To print the registration form, type:  COPY ORDERFRM.DOC PRN  (Enter)  ║
║                                                                         ║
║                                         (c) Copyright 1992, PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```





    ORDER / REGISTRATION FORM                                    Zilch v1.13


    Michael J. Riley
    P.O. Box 1874 
    Lake Havasu City, AZ 86405 U.S.A.


       Name:  _____________________________________________________________
    
    Address:  _____________________________________________________________

              _____________________________________________________________

       City:  _____________________________________________________________

      State:  __________________________________ Zip Code: ________________

    Country:  __________________________________ Phone: ___________________ 


                  Please indicate diskette size:  5.25" ____  3.5" ____ 
  

           _____  Copy/Copies of Zilch at $29.95 each . . . .  $ __________

                  South Carolina residents add 5% Sales Tax..  $ __________

                  Shipping & Handling $3.00 (Overseas $7.00)   $ __________

                  TOTAL U.S. DOLLARS ENCLOSED . . . . . . . .  $ __________

    
    Registered owners receive the most recent version of this program, with 
    a printed manual.  Registered owners also receive 2 FREE upgrades of 
    this program and discounts on future products from the author.  Please 
    indicate below: 
    
    Automatically send upgrades:  ____     Send upgrade announcements: ____

    Where did you get your copy of Zilch?  ________________________________

    How do you rate the documentation?  (Please indicate below)

    Excellent ____   Good  ____   Fair ____   Poor  ____    No Comment ____

    Comments/Suggestions:  ________________________________________________

    _______________________________________________________________________

    _______________________________________________________________________

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```
UPDATE.DOC                                                 Zilch v1.13


Zilch v1.11
03/29/92  -  Fixed a bug that would not allow reverse video on 
             monochrome systems. 

Zilch v1.12
06/18/92  -  A problem in calculating the priorites was discovered when 
             large amounts of pledge money was entered.  This problem 
             has been corrected in version 1.12.

Zilch v1.13
07/24/92  -  Prior versions would not work on Tandy 1000SL, 1000TL and 
             machines with the same Hercules video card.  Removed the 
             code that allowed intense background colors.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2886

     Volume in drive A has no label
     Directory of A:\

    SETUP    BAT        66   7-25-92  12:10a
    FILE_ID  DIZ       402   7-25-92  12:11a
    FLOPPY   DOC      3137   7-25-92  12:11a
    ORDERFRM DOC      1860   7-25-92  12:12a
    PACKAGE  DOC      1647   7-25-92  12:12a
    README   DOC      3234   7-25-92  12:13a
    SYSOP    DOC      2097   7-25-92  12:14p
    UPDATE   DOC       621   7-25-92  12:23a
    VENDOR   DOC      2740   7-25-92  12:24a
    MANUAL   EXE     34429   7-25-92  12:28p
    ZILCH    EXE    109216   7-24-92  11:37p
    ZINSTALL EXE     74160   7-24-92  11:44p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1463  10-12-92   6:52p
           14 file(s)     235110 bytes
                           78848 bytes free
