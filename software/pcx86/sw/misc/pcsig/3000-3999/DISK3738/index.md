---
layout: page
title: "PC-SIG Diskette Library (Disk #3738)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3738/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3738"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTALL.TXT

{% raw %}
```

ProShape is a drawing program for the IBM PC running Microsoft Windows V3.0.
ProShape is Shareware.  Copyright (c) 1991 Hazard Software.
-------------------------------------------------

To install ProShape, simply follow these step-by-step directions.
These sections assume that you are installing ProShape on a hard
disk.  The first section describes the steps for installing ProShape
from Windows 3.0; the second section describes the steps for
installing ProShape  from MS-DOS.  The last section explains the
final setup of ProShape which must be performed from Windows 3.0.


---> Installing ProShape from Windows 3.0

     - Decide on and make a ProShape directory.

          1) enter the File Manager
          2) select CREATE DIRECTORY... from the FILE menu
          3) enter C:\WINDOWS\PROSHAPE

     - Copy all of the ProShape files into the ProShape directory.

          1) highlight all of the ProShape files (A:)
          2) select COPY... from the FILE menu.
          3) enter to C:\WINDOWS\PROSHAPE

     - Also copy the file WIN87EM.EXE into the main WINDOWS directory.

          1) highlight WIN87EM.EXE in A:
          2) select COPY... from the FILE menu.
          3) enter to C:\WINDOWS


---> Installing ProShape from MS-DOS

     - Decide on and make a ProShape directory.

          md C:\WINDOWS\PROSHAPE

     - Copy all of the ProShape files into the ProShape directory.

          copy A: C:\WINDOWS\PROSHAPE

     - Also copy the file WIN87EM.EXE into the main WINDOWS directory.

          copy A:WIN87EM.EXE C:\WINDOWS


---> Final setup from Windows 3.0

     - Add a new program item to the Program Manager

          1) enter the Program Manager
          2) select NEW from the FILE menu.
          3) select PROGRAM ITEM.
          4) enter PROSHAPE for the description
          5) enter C:\WINDOWS\PROSHAPE\PSHAPE21.EXE for the command line.
          6) select OK.


     You may now run the program by double-clicking on the ProShape icon.
     Note that you may also select RUN from the FILE menu of the
     Program Manager.  From the resulting dialog box, type in the name
     and location of ProShape:

          (i.e. C:\WINDOWS\PROSHAPE\PSHAPE21.EXE)


Shareware Information:
-------------------------------------------------
     ProShape is shareware; therefore, you may use the program for
     a month.  After that time, you must register your copy or stop
     using it.


Further information:
-------------------------------------------------
     Any questions can be directed to the built in HELP facility
     or write to:

          Hazard Software
          c/o John K. Hazard
          19 Leary Drive
          Waterford, CT. 06385
          USA
```
{% endraw %}

## INVOICE.TXT

{% raw %}
```
                               INVOICE

Remit to:                      From:

Hazard Software                ______________________________________
c/o John K. Hazard             ______________________________________
19 Leary Drive                 ______________________________________
Waterford, CT. 06385,          ______________________________________
USA                            __________
---------------------------------------------------------------------

Password information:                      Name: ____________________
(required, your preference)      Address line 1: ____________________
                                 Address line 2: ____________________

Upgrade information:            Registered name: ____________________
(required for upgrades)      Registered address: ____________________
                                                 ____________________
                                                 ____________________
                                Registered code: ____________________
                             Registered version: ProShape V _________

Registration information:         Computer type: ____________________
(voluntary)                          Video type: ____________________
                        Source of this software: ____________________
                        Are you interested in an improved version?
                                   (circle one)  YES / NO

Include suggestions and/or problems on the back of this page.
---------------------------------------------------------------------
ProShape is Shareware.  Copyright (c) 1991 Hazard Software.

Qty                                       Unit Price    Total

 1   ProShape V2.1 basic registration      $ 39        $ ____
 or  ProShape V2.1 upgrade registration    $  9        $ ____
___  5.25" DS/DD Program disk (UC)         $  6        $ ____ + ____*
___  5.25" DS/HD Program disk (UC & C)     $  6        $ ____ + ____*
___  3.5"  DS/DD Program disk (UC & C)     $  6        $ ____ + ____*
___  Manual                                $ 14        $ ____ + ____*
___  Additional site registrations         $  9        $ ____

                                           Total       $ ___________

KEY:      (UC) ..... uncompressed files.
      (UC & C) ..... uncompressed and compressed files.

  SPECIAL SHIPPING CHARGES:
* Residents of Canada and Mexico must add $1 to each disk and manual.
* Other non U.S. residents must add $3 to each disk and manual

NOTE: Upgrades are only valid for previously registered users.
      Make checks payable (in US funds) to: John K. Hazard.
      Shipping and handling is included with all prices.

Note that ProShape V2.1 has been delivered and accepted by the customer.
Upon receipt of this paid invoice, a registration card (and any other
ordered items) will be sent.  Please allow 3-4 weeks for delivery.
```
{% endraw %}

## README.TXT

{% raw %}
```

ProShape is a drawing program for the IBM PC running Microsoft Windows V3.0.
ProShape is Shareware.  Copyright (c) 1991 Hazard Software.

Installation:  (see INSTALL.TXT)
-------------------------------------------------
     To install ProShape, simply copy all of the files into one directory,
     Also copy the file WIN87EM.EXE into the main WINDOWS directory.
     Then, from the Program Manager, use the location and name of PSHAPE21.EXE
     to:
               1) create a NEW program item.    (under the FILE menu)
            or 2) simply select RUN.            (under the FILE menu)

Shareware Information:
-------------------------------------------------
     ProShape is shareware; therefore, you may use the program for a month.
     After that time, you must register your copy or stop using it.

Further information:
-------------------------------------------------
     Any questions can be directed to the built in HELP facility or write to:
          Hazard Software, c/o John K. Hazard
          19 Leary Drive, Waterford, CT. 06385, USA
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3738

     Volume in drive A has no label
     Directory of A:\

    PSHAPE21 EXE    130016   8-30-91  12:17a
    PHELP21  HLP    109591   8-29-91  10:47p
    README   TXT      1084   8-29-91  11:05p
    GO       BAT        34   6-04-93   1:23p
    INSTALL  TXT      2801   8-29-91  11:05p
    INVOICE  TXT      2942   8-29-91  11:06p
    WIN87EM  EXE     11440   1-29-88  12:00a
    SIDEMENU PSP     26501   6-19-91  10:33p
    LOOPS    PSP      4466   7-05-91   6:50p
    PAGES    PSP      3330   7-05-91   8:27p
    FLYER    PSP      1424   7-05-91  10:10p
    TAPE     PSP      4049   7-05-91  10:15p
    SHOW     EXE      2040   9-12-88  10:48a
           13 file(s)     299718 bytes
                           16384 bytes free
