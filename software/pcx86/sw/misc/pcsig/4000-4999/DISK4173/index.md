---
layout: page
title: "PC-SIG Diskette Library (Disk #4173)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4173/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4173"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DESCRIBE.DOC

{% raw %}
```
                            DC CIRCUIT ANALYSIS
                          Version 1.1, March 1992
                      Copyright 1991, Arthur Tanzella
                            All Rights Reserved

Full Description
----------------

The "DC Circuit Analysis" program is intended as an educational tool for
introducing the user to the concepts of Direct Current (DC) circuits in
general, and digital computer circuits in particular.  Circuits can be
created and evaluated on the computer screen.  The documentation can function
as a tutorial to learn about semiconductors, logic, and digital computer
circuits.  Numerous sample circuits are used throughout the documentation and
can be displayed and evaluated using this program.

Brief Description
-----------------

The "DC Circuit Analysis" program can create and evaluate computer circuits.
The documentation functions as a tutorial on computer circuits.

Requirements
------------

The DC Circuit Analysis program requires an EGA or VGA graphics adapter and
a color monitor.  It can run in 300 Kb of RAM.  A mouse is recommended and a
math coprocessor will speed up complex circuits.  Neither a mouse or a math
coprocessor is required.

```
{% endraw %}

## README.DOC

{% raw %}
```
                            DC CIRCUIT ANALYSIS
                          Version 1.1, March 1992
                      Copyright 1991, Arthur Tanzella
                            All Rights Reserved

The DC Circuit Analysis program contains over 100 files occupying
approximately 750 Kb of disk space, and is compressed into a single self-
extracting file called "DCINSTAL.EXE."  This file was created using the LHarc
version 2.11 program, which is a copyright reserved freeware program written
by Haruyasu Yoshizaki.

To run the program, requires an EGA or VGA graphics adapter with 256 Kb of
RAM installed, and a color monitor.  It also requires between 275 Kb and
325 Kb of available RAM after DOS, drivers and Terminate and Stay Resident
(TSR) programs are loaded.  The actual amount of RAM required depends on the
complexity of the circuit, and whether on not EMS memory is available.

To install the program you must specify the drive and sub-directory on the
command line as follows:

                              DCINSTAL C:\DC

You can install to any drive or sub-directory specified on the DCINSTAL
command line, except a 360 Kb diskette.

To use the program I recommend you first print all the documentation files. 
The DC.DOC documentation file includes a tutorial on semiconductors, logic,
and digital computer circuits.  The documentation uses the IBM extended
character set.  If you have an HP LaserJet (II, IIP, III, or IIIP) printer,
you should either set the default symbol set to "PC8," or copy the following
file to the printer before printing the documentation files:

                COPY /B LASERJET.BIN PRN

This file can be found in the same directory as the document files.  To print
all three documentation files, I suggest using the following command:

                COPY *.DOC PRN

To start the program, change the default directory to the directory
containing the DC.EXE program, and type "DC" as follows:

                CD \DC
                DC

You can now choose a sample circuit and analyze it.  To exit a screen use the
"ESC" key.  At the opening menu choose "Exit without Saving."

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                            DC CIRCUIT ANALYSIS
                            -------------------

                                Version 1.1
                                -----------

                    V E N D O R    I N F O R M A T I O N
                   --------------------------------------

                         Last updated:  March, 1992


This file provides information for Shareware Distributors, Disk Vendors and
Computer Clubs who wish to distribute the DC Circuit Analysis 1.1 package.

Individual and Company Users:  Please refer to DC.DOC and REGISTER.DOC for
information.

For sample descriptions which you may use to describe the product please
refer to the DESCRUBE.DOC text file.


--------------------------------------------------------------------------- 
                       Distribution Requirements
---------------------------------------------------------------------------

Individuals who wish to distribute the DC Circuit Analysis package to friends
or associates may do so in accordance with the restrictions outlined in
DC.DOC.

Computer Clubs and User Groups wishing to add the DC Circuit Analysis package
to their disk library may do so in accordance with the Distribution
Restrictions listed below.

If you would like your Computer Club or User Group to be placed on our
mailing list for future upgrades to any of my products, please contact me for
complete details.  My address, and phone number is listed in DC.DOC.

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for DC Circuit Analysis, Arthur Tanzella
authorizes distribution only in accordance with the following restrictions.

ASP Approved Vendors in good standing are hereby given permission to
distribute DC Circuit Analysis package.  Non-ASP member vendors must request
permission prior to distributing this package.

The DC Circuit Analysis package is contained in a single self extracting file
called DCINSTAL.EXE.  This file CANNOT be modified in any way and must be
distributed as is.

The DC Circuit Analysis package - including all related program files and
documentation files - CANNOT be modified in any way and must be distributed
as a complete package, without exception.  The DCINSTAL.EXE file is a self-
extracting file containing all the files that are part of the DC Circuit
Analysis package.

Small additions to the package, such as the introductory or installation
batch files used by many shareware disk vendors, are acceptable.

No price or other compensation may be charged for the DC Circuit Analysis
package.  A distribution fee may be charged for the cost of the diskette,
shipping and handling, as long as the total (per disk) does not exceed
US$8.00 in the U.S. and Canada, or US$12.00 internationally.

Disk Sets & CD-ROMs:
-------------------
The DC Circuit Analysis package CANNOT be sold as part of some other
inclusive package.  Nor can it be included in any commercial software
packaging offer, without a written agreement from Arthur Tanzella.

ASP Approved Vendors who wish to distribute the DC Circuit Analysis package
as part of a collection (such as PsL's MegaDisk set, or a CD-ROM package) may
do so provided that all the other restrictions are met.

Vendors (non-ASP Vendor Members) who wish to distribute the DC Circuit
Analysis package as part of a collection (such as PsL's MegaDisk set, or a
CD-ROM package) must obtain permission from Arthur Tanzella prior to
beginning such a distribution.

If you wish to add any of my programs to a CD-ROM or other collection, please
check the release date of the version you have.  If the version is over
twelve (12) months old then please contact me to ensure that you have the
most current version.  This version was released in March, 1992.

Disk-of-the-Month (or Subscription) Distribution:
------------------------------------------------
If you would like to distribute the DC Circuit Analysis package as a Disk-of-
the-Month, or as part of a subscription or monthly service, then the
following restrictions apply:

ASP Associate (Disk Vendor) Members in good standing are hereby given
permission to distribute the DC Circuit Analysis package under the Disk-of-
the-Month style of distribution.

Others (non-ASP Members) must contact me in advance to ensure that you have
the most current version of the software.

You cannot use a Disk-of-the-Month distribution to use up your inventory of
old (out of date) disks.  Only current versions may be shipped as    Disk-of-
the-Month disks.

The PRINTED User's Guide may not be reproduced in whole or in part, using any
means, without the written permission of Arthur Tanzella.  In other words,
the disk-based documentation may not be distributed in PRINTED (hardcopy)
form.

The DC Circuit Analysis package cannot be "rented" or "leased" to others.

You may not list any of my products in advertisements, catalogs, or other
literature which describes my products as "FREE SOFTWARE".  Shareware is
"Try-Before-You-Buy" software, it is not free.

Arthur Tanzella prohibits the distribution of outdated versions of the DC
Circuit Analysis package, without written permission from Arthur Tanzella. If
the version you have is over twelve (12) months old, please contact me to
ensure that you have the most current version.  This version was released in
March, 1992.

Licensee shall not use, copy, rent, lease, sell, modify, decompile,
disassemble, otherwise reverse engineer, or transfer the licensed program
except as provided in this agreement.  Any such unauthorized use shall result
in immediate and automatic termination of this license.

U.S. Government Information:  Use, duplication, or disclosure by the U.S.
Government of the computer software and documentation in this package shall
be subject to the restricted rights applicable to commercial computer
software as set forth in subdivision (b)(3)(ii) of the Rights in Technical
Data and Computer Software clause at 252.227-7013 (DFARS 52.227-7013).  The
Contractor/manufacturer is Arthur Tanzella, 4613 Clubvue Drive, Pittsburgh,
PA 15236-4803.

All rights not expressly granted here are reserved to Arthur Tanzella.

Applying for ASP Associate Membership:
--------------------------------------
If you would like to apply for ASP Associate Membership (to become an ASP
Approved Vendor), simply write to the following address and request a Vendor
Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

or send a CompuServe message via CompuServe MAIL to ASP Executive    Director
72050,1433.  You may also FAX a request to the ASP Executive Director at
616-788-2765.


Please Help Me Serve You Better:
--------------------------------
We would appreciate copies of anything you print regarding DC Circuit
Analysis. Please send me a copy of any reviews, articles, catalog
descriptions, or other information you print or distribute regarding the DC
Circuit Analysis package.  Thank you for your time and assistance and for
supporting the shareware marketing concept.

Please refer to DC.DOC for my mailing address and phone number.

Thank you for your support!

Vendor Update Program:
----------------------
Most non-ASP vendors have standard procedures for acquiring new files. They
get them from other vendors, BBSs, etc.  Most authors cannot afford to mail
disks to hundreds (perhaps thousands) of vendors.  

ASP Associate Members automatically receive free updates.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4173

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        22  10-21-93   2:24p
    PRINTDOC BAT       593   7-07-92   4:59p
    README   BAT        56   7-07-92   5:01p
    BROWSE   COM      1088   7-09-87   5:58p
    DC       DOC     81463   4-01-92   9:06p
    README   DOC      2173   3-31-92   8:05p
    REGISTER DOC      2568   3-28-92   1:40p
    TSLHELP  EXE      4411   7-07-92   6:06p
    DESCRIBE DOC      1223   5-30-92   9:33a
    VENDOR   DOC      7642   5-30-92   9:08a
    DCINSTAL EXE    176266   4-01-92   9:13p
    TOF      COM       256   3-08-90   7:30a
           12 file(s)     277761 bytes
                           35840 bytes free
