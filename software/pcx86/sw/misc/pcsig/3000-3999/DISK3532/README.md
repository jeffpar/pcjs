---
layout: page
title: "PC-SIG Diskette Library (Disk #3532)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3532/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3532"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3532 ALMANAC  >>>>                  ║
║                         Disk 2 of 2 (#2457 also)                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Install this program to your hard disk, create a temporary          ║
║  subdirectory and copy all files from disks 1 and 2. To do this, type:  ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD TEMP  (press Enter)                                              ║
║     CD TEMP  (press Enter)                                              ║
║                                                                         ║
║  Insert disk 1 (#2457) in drive A (or B) and type:                      ║
║     COPY A:*.*  (press Enter)  (use B: for the B drive)                 ║
║                                                                         ║
║  Insert disk 2 (#3532) in drive A (or B) and type:                      ║
║     COPY A:*.*  (press Enter)  (use B: for the B drive)                 ║
║                                                                         ║
║  To Install the program type:  WIN SETUP  (press Enter)                 ║
║                                                                         ║
║                                        (C) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
June 24, 1992

This is the README.TXT file distributed with Almanac for
Windows 3.0.  Topics discussed in this file are:

     - Registration
     - Legal matters
     - Compatibility
     - Updating a previous Almanac installation
     - INSTALLING ALMANAC 3.0
     - Software license & Limited warranty



REGISTRATION
------------
Almanac is not free software.  It is released as
shareware, which provides the opportunity for the
program to be evaluated before it is purchased.

We hope that after you try Almanac you will like
it so much that you will want to register.  By
doing so you are voting with your pocketbook for
us to continue developing high-quality, Windows
shareware.

Complete information on how to register Almanac
is included in the REGISTER.TXT file.


LEGAL MATTERS
-------------
We are not responsible for anything at all.  Nothing.
Even if we are held responsible, the limit of our
liability is the licensing fees you paid.  The full text
of our license agreement is found near the bottom of
this file. 


COMPATIBILITY
-------------
If you are running a version of Almanac earlier than
3.0, please be advised that the format of the desktop
data files has been changed.  Notes and appointments
entered in Almanac 1.0 through 1.04 (*.ALD files)
will require translation to the new data base format.
Refer to the XLATEALD.TXT file for instructions on
how to convert these data files using XLATEALD.EXE.

Overlays created with earlier versions of Almanac
(*.ALO files) are 100% compatible with Almanac 3.0.
The wedding anniversary gifts are now optional.
You may edit any wedding anniversary definitions
created with pre-3.0 versions and and check the
Wedding check box to display this information.



UPDATING A PREVIOUS ALMANAC INSTALLATION
----------------------------------------
If you are updating a 3.0 Almanac installation, you may
want to de-select one or more of the installation
options.  The following table explains what files will
be copied to your hard disk for each option:

    Program Files:  Copies the executable program file
                    and supporting modules.  This option
                    should be selected when installing
                    or upgrading your Almanac program.

 Default Calendar:  Copies the DEFAULT.ALC calendar file
                    used by Almanac on start-up.  Also
                    copies the ALMLOCN.DAT file that
                    contains location and time zone
                    information for various cities.

  Sample Overlays:  Copies the sample overlays files
                    included with the Almanac release.

Online Help Files:  Copies online help files that can be
                    accessed from Almanac's Help menu.



INSTALLING ALMANAC 3.0
----------------------
The Almanac package includes a graphical Windows
installation program using the standard name of SETUP.EXE.
You should place all of the files included in the release
package on a floppy disk or in a temporary directory of
your hard drive.

SETUP requires about 600K bytes to complete the
installation of Almanac.  Once installed, the Almanac
files will occupy approximately 400K.

Run SETUP by selecting the 'Run...' command from the
File menu of Program Manager or File Manager.

Enter "d:\SETUP" as the Command Line, where "d" is the
drive/directory that you are installing Almanac FROM
(for example, A:\SETUP).

1. The first action performed by SETUP is to display the
   date your computer is set to.  Almanac's calendar
   will not operate correctly if your computer is not set
   to the correct date.

2. SETUP will prompt for the target directory you would like
   to install Almanac to on your hard disk.  Accept the
   default or enter a directory of your choice.

3. SETUP will then display a dialog of the components that
   can be installed.  You should leave all of the boxes
   checked if this is a first time installation.

4. If you are using Program Manager as your Windows shell,
   SETUP will allow a Program Manager group to be selected
   to receive the startup icon for Almanac.

SETUP will inform you when installation is complete, and
direct you to the WHATSNEW.TXT and REGISTER.TXT files.

IF SETUP REPORTS PROBLEMS UPDATING COMMDLG:

  1) Exit Windows and restart Windows to insure a clean
     system.

  2) Hold down the SHIFT key while Windows is initial-
     izing.  This will prevent Windows from launching
     any other applications after Program Manager.

  3) Do NOT use the Browse function to start SETUP.
     Doing so will invoke the COMMDLG module and
     prevent SETUP from completing the installation.

--------------------------------------------------------

 The legalese section...

 ALMANAC for Windows
 Copyright ⌐ 1988-1992 by Leonard A. Gray.
 All rights reserved.


 SOFTWARE LICENSE

 Non-licensed users are granted a limited license to use Almanac
 on a 30-day trial basis for the purpose of determining 
 whether Almanac is suitable for their needs.  The use 
 of Almanac, except for the initial 30-day trial, 
 requires registration.  The use of unlicensed copies of Almanac,
 outside of the initial 30-day trial, by any person, 
 business, corporation, government agency or any other entity is 
 strictly prohibited. 

 A single user license permits a user to use Almanac
 only on a single computer.  Licensed users may use the
 program on different computers, but may not use the program
 on more than one computer at the same time.

 No one may modify or patch the Almanac executable files 
 in any way, including but not limited to decompiling, 
 disassembling, or otherwise reverse engineering the program. 

 A limited license is granted to copy and distribute Almanac 
 only for the trial use of others, subject to the above 
 limitations, and also the following: 

  1)    Almanac and all of its release files must be copied
        in unmodified form, complete with the file containing
        this license information.

  2)    Almanac may not be distributed in conjunction with
        any other product without a specific license to do so
        from Impact Software.

  3)    No fee, charge, or other compensation may be requested or
        accepted, except as authorized below:

        A) Operators of electronic bulletin board systems (sysops)
           may make Almanac available for downloading only as
           long as the above conditions are met.  An overall or
           time-dependent charge for the use of the bulletin board
           system is permitted as long as there is not a specific
           charge for the download of Almanac.

        B) Vendors of user-supported or shareware software approved by
           the ASP may distribute Almanac, subject to the
           above conditions, without specific permission.  Non-
           approved vendors may distribute Almanac only after
           obtaining written permission from Impact Software.
           Such permission is usually granted.  Please write for
           details (enclose your catalog).

        C) Non-profit user groups may distribute copies of the 
           Almanac diskette to their members, subject to 
           the above conditions, without specific permission.  
           Non-profit groups may collect a disk duplication fee 
           not to exceed five dollars. 

  LIMITED WARRANTY

  Impact Software warrants that all disks provided are
  free from defects in material and workmanship, assuming
  normal use, for a period of 90 days from the date of
  purchase.

  Impact Software warrants that the program will perform
  in substantial compliance with the documentation supplied
  with the software product.  If a significant defect in
  the product is found, the Purchaser may return the
  product for a refund.  In no event will such a refund
  exceed the purchase price of the product.

  EXCEPT AS PROVIDED ABOVE, IMPACT SOFTWARE DISCLAIMS ALL
  WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
  LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE
  PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE
  PURCHASER ASSUMES THE RISK OF PAYING THE ENTIRE COST OF
  ALL NECESSARY SERVICING, REPAIR, OR CORRECTION AND ANY
  INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT WILL
  IMPACT SOFTWARE BE LIABLE FOR ANY DAMAGES WHATSOEVER
  (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
  BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS
  INFORMATION AND THE LIKE) ARISING OUT OF THE USE OR THE
  INABILITY TO USE THIS PRODUCT EVEN IF IMPACT SOFTWARE
  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

  Use of this product for any period of time constitutes
  your acceptance of this agreement and subjects you to its
  contents.

  U.S. GOVERNMENT RESTRICTED RIGHTS

  Use, duplication, or disclosure by the Government is subject
  to restrictions as set forth in subdivision (b)(3)(ii) of
  the Rights in Technical Data and Computer Software clause at
  252.227-7013.  Contractor/manufacturer is Impact Software
  12140 Central Avenue /suite 133/ Chino, CA 91710
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3532

     Volume in drive A has no label
     Directory of A:\

    CAN_HDAY AL_       575   7-22-92   3:00a
    CHRSTIAN AL_       238   7-22-92   3:00a
    COMMDLG  DL_     50924   3-10-92   3:10a
    DEFAULT  AL_       331   7-22-92   3:00a
    FRA_HDAY AL_       181   7-22-92   3:00a
    GBR_HDAY AL_       287   7-22-92   3:00a
    JEWISH   AL_       304   7-22-92   3:00a
    JPN_HDAY AL_       562   7-22-92   3:00a
    README   TXT      9346   7-22-92   3:00a
    REGISTER TX_      2110  12-30-92   3:00a
    SETUP    EXE     40800   8-25-92   3:00a
    SETUP    INF      1113  12-30-92   3:00a
    SMALLB   FO_     10928   3-10-92   3:10a
    SMALLE   FO_     12501   3-10-92   3:10a
    SMALLF   FO_     10489   3-10-92   3:10a
    USA_HDAY AL_       685   8-25-92   3:00a
    VER      DL_      6307   3-10-92   3:10a
    WHATSNEW TX_      2441   7-22-92   3:00a
    XLATEALD EX_      7282   7-22-92   3:00a
    XLATEALD TX_      1184   7-22-92   3:00a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1617   3-25-93  12:29p
           22 file(s)     160236 bytes
                          147456 bytes free
