---
layout: page
title: "PC-SIG Diskette Library (Disk #4186)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4186/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4186"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GUIDINFO.DOC

{% raw %}
```
             W Y N T E R   S T O N E ' S   Q U I C K   G U I D E
                T O   M Y S T I C A L   E X P E R I E N C E S

         THIS DOCUMENT CONTAINS THE FOLLOWING IMPORTANT INFORMATION:

                              Software License Information
                              Warranty Information
                              Getting Started
                              Support Information
                              Order Form

Updated: January 1993

REVIEWERS: If you plan to review this software for publication, *please*
contact us first to make sure you have the most recent update of the
software and that the ordering information supplied to your readers will be
accurate. We would appreciate receiving copies of anything you publish
about this software.

                             ~~~~~~~~~~~~~~~~~~~
         S O F T W A R E    L I C E N S E    I N F O R M A T I O N

This file contains important license information regarding the use of the
subject software. This information applies to individual users who wish to
evaluate or use the software, or to pass copies out to friends and
associates.

Disk Vendors and Distributors, BBS Sysops, User Groups, Computer Clubs,
Subscription Services, Disk-of-the-Month Clubs, etc., should refer to the
VENDOR.DOC file for complete information relating to them. If you charge a
fee or compensation of any kind in connection with providing copies of
software, you are a Disk Vendor.

User License:
~~~~~~~~~~~~~
This software is NOT a public domain program. It is Copyright by Wynter
Stone as indicated on the program and its documentation.

This software and accompanying documentation are protected by United States
Copyright law and also by International Treaty provisions. Any use of this
software in violation of Copyright law or the terms of this limited license
will be prosecuted to the best of our ability. The conditions under which
you may copy this software and documentation are clearly outlined below
under "Limited Distribution License".

Licensee shall not use, copy, rent, lease, sell, modify, decompile,
disassemble, otherwise reverse engineer, or transfer the licensed program
except as provided in this agreement. Any such unauthorized use shall
result in immediate and automatic termination of this license.

All rights not expressly granted here are reserved to R.K. West Consulting.

Limited Distribution License:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
As agent for the copyright holder of the software, Rosemary West dba R.K.
West Consulting authorizes distribution by individuals only in accordance
with the following restrictions.

(Disk Vendors and Distributors, BBS Sysops, User Groups, Computer Clubs, 
Subscription Services, Disk-of-the-Month Clubs, etc., should refer to the
VENDOR.DOC file for complete information relating to them.)

Individuals are hereby granted permission by R.K. West Consulting to copy
the software diskette for their own personal use or for the personal use of
other individuals, ONLY when the following conditions are met.  The
software package is defined as containing all the material listed in the
PACKING LIST section of the VENDOR.DOC text file. The software package,
including all related program files and documentation files, CANNOT be
modified in any way and must be distributed as a complete package, without
exception. If any files listed in the VENDOR.DOC text file, or the
VENDOR.DOC file itself, are missing or changed, then the package is not
complete and distribution is forbidden. Please contact us to obtain a
complete package suitable for distribution.

No price or other compensation may be charged for the software package. If
you charge ANY kind of fee for materials or services when you make or
distribute copies of the package, you are considered a disk vendor and must
comply with the terms outlined in VENDOR.DOC.

The software package CANNOT be sold as part of some other inclusive
package. Nor can it be included in any commercial software packaging offer,
without a written agreement from R.K. West Consulting.

The PRINTED User's Guide may not be reproduced in whole or in part, using
any means, without explicit written permission from R.K. West Consulting.
No part of the disk-based documentation may be distributed in PRINTED
(hardcopy) form.

The software package cannot be "rented" or "leased" to others.

You may not use, copy, rent, lease, sell, modify, decompile, disassemble,
otherwise reverse engineer, or transfer the licensed program except as
provided in this agreement. Any such unauthorized use shall result in
immediate and automatic termination of this license.

U.S. Government Information:  Use, duplication, or disclosure by the U.S.
Government of the computer software and documentation in this package shall
be subject to the restricted rights applicable to commercial computer
software as set forth in subdivision (b)(3)(ii) of the Rights in Technical
Data and Computer Software clause at 252.227-7013 (DFARS 52.227-7013). The
Contractor/manufacturer is R.K. West Consulting, P.O. Box 8059, Mission
Hills, CA 91346-8059.

All rights not expressly granted here are reserved to R.K. West Consulting.

                            ~~~~~~~~~~~~~~~~~~~
     ***************** IMPORTANT WARRANTY INFORMATION ****************
               *** PLEASE READ THIS INFORMATION CAREFULLY ***
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WARRANTY:
~~~~~~~~~
The software is provided AS IS. R.K. WEST CONSULTING MAKES NO WARRANTY OF
ANY KIND, EXPRESSED OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY
WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.

R.K. WEST CONSULTING SPECIFICALLY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO, ANY IMPLIED WARRANTY OF
MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.

                             ~~~~~~~~~~~~~~~~~~~
                               GETTING STARTED

ALWAYS MAKE A BACKUP COPY of the original disk before you do anything. (See
the DISKCOPY command in your DOS manual.) Put the original in a safe place,
and use the copy as the master disk when you install the program.

Note that in all of the following examples, if your drive letters or
directory names are different, you can simply use the same command, but
with your actual drive letter and directory name. For example, we refer to
the floppy drives as drive A and drive B. If yours are really called drive
D and drive E, then use D and E instead of A and B. In our hard disk
example, the subdirectory is called WEST. But you can name it something
else. For example, if you name it GAMES, just use GAMES in the command
instead of WEST.

INSTALLING TO A FLOPPY DISK WHEN YOU HAVE TWO FLOPPY DRIVES: Put the master
disk in drive A. Put a new, formatted disk in drive B. Enter this command:

   COPY A:*.* B:

You should see the file being copied to the disk in the B drive. When all
the files have been copied, the B disk is your working disk.

INSTALLING TO A FLOPPY DISK WHEN YOU HAVE ONE FLOPPY DRIVE: Put the master
disk in drive A. Have a new disk ready. Enter this command:

   DISKCOPY A: B:

The computer will display messages telling you when to put the "source
disk" or the "target disk" into the drive. The "source disk" is your master
disk. The "target disk" is your new disk.

INSTALLING TO A HARD DISK: The first thing you need to do is create a
subdirectory on the hard disk. (If the subdirectory has already been
created, you don't have to create it now.) For example, if you decide to
name the subdirectory WEST, you would start at your C> prompt, and use the
following sequence of commands:

   CD\
   MD WEST
   CD \WEST

Now put the master disk in the A drive and enter this command:

   COPY A:*.*

You should see all the files being copied. When the copying is finished,
you are ready to run the program.

NEED MORE SPACE? If you are running programs on floppy disks you may not
have enough disk space for the data files created by the program. You can
remove the documentation files, which the program does not need, from your
working disk. However, these files contain important information which you
will need for reference, so do not delete them from your master disk. To
delete the documentation files, put the working disk in the A drive and
enter this command:

   DEL A:*.DOC

PROGRAM FILES: Program files can be identified by the extension EXE or COM
after the file name. To run the program, simply type its name. For example,
if you have a program named ESP.EXE, type ESP and press <ENTER>.

DOCUMENTATION AND INSTRUCTIONS: Most of our instruction manuals are in
special program files which allow you to view the manual on screen or print
it. These files have the COM or the EXE extension, and have "DOC" somewhere
in the filename. Simply enter the appropriate command. For example, if you
have the program YOUR ESP TEST, the instruction manual would be called
ESPDOC.EXE. To view the manual, type ESPDOC and press <ENTER>. You can page
through the document on screen, or print it by pressing <ALT><P>. For a
list of helpful commands, press <F1>.

Files which have the DOC or TXT extension are ASCII format files (also
called DOS Text files) which can be viewed or printed using DOS commands.
For example, if you have a typical setup, you can print a document called
WQINFO.DOC using this command:  TYPE WQINFO.DOC > PRN

To view this file on screen, you would enter: TYPE ESPINFO.DOC | MORE
(Successful use of MORE assumes that the correct DOS files are in your
path. If this is not the case, you can simply use TYPE ESPINFO.DOC, but the
file may scroll up out of view.)

You can also view and print this kind of file with most word processors,
using "ASCII", "DOS Text" or "Non-document" format.

CHANGES AND UPDATES: Sometimes changes are made in a program after the
manual is completed. Information about such changes will appear on disk in
a text file called UPDATE.DOC. If this file appears on your disk, you
should read it to get the latest important information about the software.

NEW VERSIONS: Sometimes a new version of a program will ask permission to
update your data files. Do not answer "yes" unless you have already made a
backup copy of your data. Don't copy the backed-up data back into the
directory after the files have been updated. This backup is simply
insurance against data damage or loss. You should make backups regularly.

HELPFUL INFORMATION: Check your program disks for files named README.1ST or
UPDATE.DOC. You won't always find these files, but if you do they may
contain additional helpful information, including facts about
troubleshooting and software support.

BE SMART!  Before installing new versions of any software, make backups of
all the old files. This protects you in case of an error during the
installation/update process. Remember that power surges, hardware failure,
and user errors can all lead to data loss or damage. Make backups of your
data on a regular basis. If you wonder how often you need to back up your
word processing documents, mailing lists, spreadsheets, etc., ask yourself,
"How many days worth of work can I afford to lose?" We recommend that you
use a system of three or more sets of backup disks which you rotate on a
daily basis. That way, if something unfortunate happens to one set of
backups, you will have another set available. A few minutes spent making
daily backups can save you hours of heartbreaking work trying to recreate
lost data.

BAD DISK? It seems that in hot weather we are more likely to get complaints
about "bad" or unreadable disks. Floppy disks are susceptible to heat,
moisture and magnetism. A disk that sits all day in a hot mailbox or truck
where temperatures exceed 100 degrees is likely to be damaged. Disks which
have been exposed to magnetism may become unreadable. 

Before assuming a disk is bad, try it on another computer. It may be that
your computer's drive heads are dirty or slightly misaligned. Suspect this
if you often get disk error messages with different disks. An inexpensive
head cleaning kit may help solve the problem.

Sometimes the round disk gets trapped inside its square casing and
generates an error because it can't rotate freely. Remove the disk from the
drive and tap each of the four edges sharply on the surface of your desk.
This may loosen the disk. Try reading the disk again.

Norton Utilities and Mace Utilities both have features that can sometimes
revive unreadable disks. Any serious computer user should have one of these
or a similar utility package.

In any case, if we sent you an unreadable disk, we will be happy to replace
it with a fresh copy of the same program. If you received an unreadable
disk from a disk vendor, the vendor should replace it for you.

                            ~~~~~~~~~~~~~~~~~~~
                 S U P P O R T   I N F O R M A T I O N

This software has been thoroughly tested, and complete instructions are
contained in the user's manual. 

We do not charge any fee for this program, and therefore do not normally
offer free support. Nevertheless, we will respond to brief, mailed
inquiries, and will try to provide enough help to get you up and running,
or respond to error messages. (However, we reserve the right to terminate
contact with users who in our judgment are unreasonable or abusive, or who
have system problems which transcend the scope of this software.) We
appreciate receiving a self-addressed, stamped envelope with your inquiry.

                             ~~~~~~~~~~~~~~~~~~~
If you liked this program, you will love FORTUNE TELLER PLUS, which has
eleven different methods of divination: Three card methods, two numerology
methods, runes, auras, Astro-Mates, dice, geomancy, and "Instant Oracle" --
plus an ESP test!                          FORTUNE TELLER PLUS ORDER FORM

Mail To: R.K. West Consulting
         P.O. Box 8059
         Mission Hills, CA 91346-8059
         U.S.A.

Your Name: ________________________________________________

Address: __________________________________________________

         __________________________________________________

Phone:   __________________________________________________

_____ Registered versions @ $29.00 each:                ___________________

_____ Shipping outside the U.S.A.                       ___________________

                                       TOTAL ENCLOSED:  ___________________

                                        _____ 3.5" disk    _____ 5.25" disk

All prices are in U.S. dollars, checks drawn on and payable through a U.S.
bank. You may register by credit card through Public (Software) Library. In
the USA call 800-242-4775. Others, call 713-524-6394. These numbers are
for orders only.) You can Fax a credit card order to PsL at 713-524-6398;
or mail it to them at P.O. Box 35705, Houston TX 77235-5705; or send via
CompuServe at 71355,470. Please do not mail credit card orders to R.K. West
Consulting (and do not mail checks to PsL). Minimum credit card order is
$15.00.

If you need more than 5 copies of this software, or plan to use it on a
network, please contact us for site license discounts.

Additional registration details and information for international users and
credit card customers can be found in the user's manual.

DOS Version______  Do you have a hard disk?_____  If yes, what size?_______

Tell us where you found WYNTER STONE'S GUIDE! _____________________________

Important: If you purchased this disk from a rack, bin or shelf in a
           retail store, grocery, airport, bookshop, etc., or found it on
           CD-ROM, please tell us the company name or brand-name logo which
           appeared on the package or disk label. Thank you!

           ________________________________________________________________

What are your comments about WYNTER STONE'S GUIDE? (Use other side if
needed)

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
             W Y N T E R   S T O N E ' S   Q U I C K   G U I D E
                T O   M Y S T I C A L   E X P E R I E N C E S

               V E N D O R   &   B B S   I N F O R M A T I O N
               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       Last updated:  January 1993

This file provides information for Shareware Distributors, Disk Vendors,
Computer Clubs, Users Groups and BBS Sysops who wish to distribute the
subject software package.

THE "DISTRIBUTION REQUIREMENTS" IN THIS DOCUMENT EXPLAIN HOW THIS SOFTWARE
MAY BE DISTRIBUTED, AND WHO MAY DISTRIBUTE IT.

PROGRAM DESCRIPTION:
====================
PROGRAM: Wynter Stone's Quick Guide to Mystical Experiences
         Author: Wynter Stone    Registration: $0.00

REQUIRES: DOS 2.1, 512K

VERSION:  1.0

BBS FILENAME: WSQGME.???

DESCRIPTION: An on-disk mini-encyclopedia of subjects related to mystical
experiences of various kinds.

PACKING LIST:
The files which are included as part of this software package:

      VENDOR.DOC         Vital information for disk vendors,
                         distributors, BBSs, user groups, computer
                         clubs, etc.
      FILE_ID.DIZ        BBS description file
      GUIDINFO.DOC       Vital information for users including license,
                         warranty, support, getting started, etc.
      GUIDE.EXE          Executable program file
      GUIDE.DAT          Data file

DISTRIBUTION REQUIREMENTS:
==========================
Individuals who wish to distribute the software package to friends or
associates may do so in accordance with the requirements outlined in the
"License" section of ESPINFO.DOC.

Vendors, Distributors, Computer Clubs, User Groups, BBS Sysops, and persons
or organizations charging any kind of fee, wishing to add the software
package to their disk library may do so ONLY in accordance with the
"Limited Distribution License" below.

Limited Distribution License:
-----------------------------
As agent for the copyright holder for this software, Rosemary K. West dba
R.K. West Consulting authorizes distribution only in accordance with the
following restrictions.

* Association of Shareware Professionals (ASP) Approved Vendors in good
standing are hereby given permission to distribute the shareware
(unregistered) version of the software package via "traditional mail-order"
shareware distribution methods only. 

* ASP Approved BBSs in good standing are hereby given permission to
distribute the unregistered version of the software package, as are BBSs
which do not charge a fee for downloading files. 

* Non-ASP vendors MUST REQUEST AND RECEIVE PERMISSION prior to distributing
this package. (To facilitate receiving permission, include a copy of your
mail-order catalog with your request.)

* Non-ASP BBSs which charge a download fee MUST REQUEST AND RECEIVE
PERMISSION prior to distributing this package. 

* ANY OTHER METHOD OF DISTRIBUTION, INCLUDING BUT NOT LIMITED TO CD-ROMS,
PACKAGES, RACKS, BINS, OTHER FORMS OF "RETAIL SALES", HARDWARE OR SOFTWARE
BUNDLING, AND ANY OTHER MEANS OF SOFTWARE DISTRIBUTION NOW KNOWN OR
HEREAFTER DEVISED, REQUIRES THE EXPRESS WRITTEN PERMISSION OF THE COPYRIGHT
HOLDER.

The software package is defined as containing all the material listed in
the PACKING LIST section of the VENDOR.DOC text file. The software package,
including all related program files and documentation files, CANNOT be
modified in any way and must be distributed as a complete package, without
exception. If any files listed in the VENDOR.DOC text file, or the
VENDOR.DOC file itself, are missing or changed, then the package is not
complete and distribution is forbidden. Please contact us to obtain a
complete package suitable for distribution.

Small additions to the package, such as the introductory or installation
batch files used by many shareware disk vendors, are acceptable, PROVIDED
THEY DO NOT INTERFERE WITH ANY INSTALLATION ROUTINE WHICH MAY HAVE BEEN
INCLUDED BY THE AUTHOR.

No price or other compensation may be charged for the software package. A
distribution fee may be charged for the cost of the diskette, shipping and
handling, as long as the total (per disk) does not exceed US$8.00 in the
U.S. and Canada, or US$12.00 internationally.

Disk-of-the-Month (or Subscription) Distribution:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to distribute the software package as a "disk-of-the-
month", or as part of a subscription or monthly service, then the following
restrictions apply:

ASP Associate (Disk Vendor) Members in good standing are hereby given
permission to distribute the software package under the subscription style
of distribution.

Others (non-ASP Members) must REQUEST AND RECEIVE written permission prior
to distributing the software in this manner.

You cannot use a subscription distribution to use up your inventory
of outdated disks. Only current versions may be shipped as "disk-of-the-
month" or subscription disks.

Bundling, Disk Sets, CD-ROMs, "Rackware", Retail Distribution:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
THE SOFTWARE PACKAGE CANNOT BE SOLD AS PART OF SOME OTHER INCLUSIVE
PACKAGE; IT CANNOT BE INCLUDED WITH THE SALE OF COMPUTER HARDWARE OR
RELATED PRODUCTS, NOR CAN IT BE INCLUDED IN ANY COMMERCIAL SOFTWARE
PACKAGING OFFER; NOR CAN IT BE DISTRIBUTED IN PREPACKAGED OR OTHER FORM IN
RETAIL LOCATIONS OR AS PART OF A CD-ROM COLLECTION WITHOUT A WRITTEN
CONTRACT BETWEEN THE DISTRIBUTOR AND THE COPYRIGHT HOLDER.

Additional Terms:
~~~~~~~~~~~~~~~~~
The PRINTED User's Guide may not be reproduced in whole or in part, using
any means, without explicit written permission from R.K. West Consulting.
No part of the disk-based documentation may be distributed in PRINTED
(hardcopy) form.

The software package CANNOT be "rented" or "leased" to others.

You may not list any of our products in advertisements, catalogs, or other
literature which describes our products as "PUBLIC DOMAIN SOFTWARE". This
is copyrighted material. It is not, and never has been, in the public
domain.

You may not use, copy, rent, lease, sell, modify, decompile, disassemble,
otherwise reverse engineer, or transfer the licensed program except as
provided in this agreement. Any such unauthorized use shall result in
immediate and automatic termination of this license.

In no case may outdated or obsolete versions of the software package be
distributed. If the version you have received is or appears to be more than
six (6) months old, then contact the copyright holder to confirm that you
have the most recent version.

U.S. Government Information:  Use, duplication, or disclosure by the U.S.
Government of the computer software and documentation in this package shall
be subject to the restricted rights applicable to commercial computer
software as set forth in subdivision (b)(3)(ii) of the Rights in Technical
Data and Computer Software clause at 252.227-7013 (DFARS 52.227-7013). The
Contractor/manufacturer is R.K. West Consulting, P.O. Box 8059, Mission
Hills, CA 91346-8059.

All rights not expressly granted herein are reserved to Wynter Stone and
R.K. West Consulting.

Applying for ASP Associate Membership:
--------------------------------------
If you would like to apply for ASP Associate Membership (to become an ASP
Approved Vendor or BBS), simply write to the following address and request
a Vendor Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP Executive
   Director 72050,1433. You may also FAX a request to the ASP Executive
   Director at 616-788-2765.

Please Help Us Serve You Better:
--------------------------------
We would appreciate copies of anything you publish regarding this software.
Please send us a copy of any reviews, articles, catalog descriptions, or
other information you print or distribute regarding the software package.
Thank you for your time and assistance and for supporting the shareware
marketing concept.

    R.K. West Consulting
    P.O. Box 8059
    Mission Hills, CA 91346
    CIS: 72301,435

~~~ END OF VENDOR.DOC ~~~

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4186

     Volume in drive A has no label
     Directory of A:\

    FILE_ID  DIZ       157   1-01-03
    GUIDINFO DOC     16208   1-01-03
    VENDOR   DOC      8390   1-01-03
    README   1         801   1-22-93   5:20p
    GUIDE    EXE    100437   1-01-03
    GUIDE    DAT     31869   1-01-03
    README   2         786   1-22-93   4:57p
    GO       BAT        36  10-21-93   1:14p
    SHOW     EXE      2040   9-12-88  10:48a
            9 file(s)     160724 bytes
                          156672 bytes free
