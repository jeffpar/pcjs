---
layout: page
title: "PC-SIG Diskette Library (Disk #3580)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3580/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3580"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  PC-SIG Disk #3580 TOWERS  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print documentation, type:  COPY TOWERS.DOC PRN  (press Enter)      ║
║                                                                         ║
║  To start the game, type:  TOWERS  (press Enter)                        ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

                 C A S C O L Y   S H A R E W A R E

                 includes:
                    ATC        v1.0   29 Sep 1985
                    ANTIC      v1.11   2 Jan 1992 
                    BORDER     v1.1   23 Feb 1989
                    CAPBUF     v1.41  28 Dec 1990
                    CHRONOS    v2.04  21 Oct 1991 
                    ECOMASTER  v1.1   30 Apr 1990
                    GREEN      v1.02   2 Apr 1992 
                    FICTIONARY v1.32  30 Apr 1990
                    PEG        v1.03   4 Apr 1992 
                    UDECIDE    v1.05  20 Apr 1991
                    QUILT      v1.21  30 Mar 1992  
                    WEBS       v1.16  26 Feb 1992 


              L I C E N S E    I N F O R M A T I O N
              ----------------------------------------

              Copyright (c) 1990, 1992 by Cascoly Software 
                          All Rights Reserved.

                  Last updated:  5 Apr 1992 

We're trying to keep this as simple as possible. This file contains 
important license information regarding the use of Cascoly Shareware.  This 
information applies to individual users who wish to pass copies to friends 
and associates. 

User Groups, Computer Clubs, Disk Vendors and Distributors, Subscription 
Services, Disk-of-the-Month Clubs, etc., should refer to the VENDOR.DOC file 
for complete information relating to them. 
          
------------------
Trial Use License:
------------------
Cascoly Software hereby grants you a limited license to use this software 
for evaluation purposes for a period not to exceed thirty (30) days.  If you 
intend to continue using this software after the thirty (30) day evaluation 
period, you MUST make a registration payment to Cascoly Software. 

Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
disassemble, otherwise reverse engineer, or transfer the licensed program 
except as provided in this agreement.  Any such unauthorized use shall 
result in immediate and automatic termination of this license. 

All rights not expressly granted here are reserved to Cascoly Software. 

-----------------------------
Limited Distribution License:
-----------------------------

As the copyright holder Cascoly Software authorizes distribution by 
individuals only in accordance with the following restrictions. 

(User Groups, Computer Clubs, Disk Vendors and Distributors, Subscription 
Services, Disk-of-the-Month Clubs, etc., should refer to the VENDOR.DOC file 
for complete information relating to them.) 
            
Noncommercial copying of this software is ENCOURAGED. (If you distribute 
this software for more than the cost of your distribution, you're a 
commercial distributor -- see the accompanying VENDOR.DOC file for details). 

The Cascoly Shareware package is defined as containing all the material 
listed in the PACKING.LST text file.  If any files listed in the PACKING.LST 
text file, or the PACKING.LST file itself, are missing, then the package is 
not complete and distribution is forbidden.  Please contact us to obtain a 
complete package suitable for distribution. 

  o  The Cascoly Shareware package - including all related program files and 
     documentation files - CANNOT be modified in any way and must be 
     distributed as a complete package, without exception.  The PACKING.LST 
     text file contains a list of all files that are part of the Cascoly 
     Shareware package. 

  o  No price or other compensation may be charged for the Cascoly Shareware 
     package.  A distribution cost may be charged for the cost of the 
     diskette, shipping and handling, as long as the total (per disk) does 
     not exceed US$8.00 in the U.S. and Canada, or US$12.00 internationally. 

  o  The Cascoly Shareware package CANNOT be sold as part of some other 
     inclusive package.  Nor can it be included in any commercial software 
     packaging offer, without a written agreement from Cascoly Software. 
      
  o  The Cascoly Shareware package cannot be "rented" or "leased" to others. 

  o  The person receiving a copy of the Cascoly Shareware package MUST be 
     made aware that each disk or copy is ONLY for evaluation, and that 
     Cascoly Software has not received any royalties or payment for the 
     product.  This requirement can be met by including the complete Cascoly 
     Shareware package, which contains any appropriate registration 
     reminders. 

  o  The person receiving a copy of the Cascoly Shareware package MUST be 
     made aware that he or she does not become a registered user until 
     Cascoly Software has received payment for registration of the software.  
     This requirement can be met by including the complete Cascoly Shareware 
     package, which contains any appropriate registration reminders. 

  o  Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
     disassemble, otherwise reverse engineer, or transfer the licensed 
     program except as provided in this agreement.  Any such unauthorized 
     use shall result in immediate and automatic termination of this 
     license. 

This software and accompanying documentation are protected by US Copyright 
law and also by International Treaty provisions.  Any use of this software 
in violation of Copyright law or the terms of this limited license will be 
prosecuted to the best of our ability.  The conditions under which you may 
copy this software and documentation are clearly outlined above under 
"Distribution Restrictions". 


```
{% endraw %}

## TOWERS.DOC

{% raw %}
```
TOWERS.DOC                       Rev: 23 May 1992

Contents: 
   SUMMARY 
   STARTING THE GAME
   BUILDING
   MAP CONTROLS
   SCORING
   DETAILS 


   SHAREWARE & THE ASP

---------

SUMMARY: 
---------
How high can you build?  TOWERS is similar to Tetris, since you need to 
place blocks of varying size.  That's where the similarity ends -- you need 
logic and planning, rather than quick reflexes in TOWERS.  You build one 
level of the tower at a time, trying to fit the blocks in the tightest 
pattern.  Each level becomes the base for the next level.  TOWERS uses 
Cascoly's unique 3-D perspective graphics to show fantastic detail.  As you 
scroll from side to side, the perspective changes.   

There are several different maps, of varying difficulty. 

TOWERS requires a MS compatible mouse and EGA or better graphics.

Credits:      Design & programming: Steve Estvanik
              Graphics programming: Ken Birdwell
              Betatesters:          Karim Nassar              
                                    Steve Blendermann 
                                    Dave Morse 

STARTING THE GAME:
------------------
To start the game, choose Play from the main menu.  This will use the 
default map.  (Later use the Map command to select alternate maps).  Start 
with Difficulty 1.  This will give you the easiest setup and let you become 
acquainted with the commands while playing the first game.  

Right click near a map edge (cursor keys work, too) scrolls the map in any 
direction (including diagonally.  

The box in the lower left shows the shape of the current wall.  You have to 
find a place where they will fit, much like a puzzle or the game Tetris.  
Place it by clicking on a place on the map.  A piece cannot be placed if 
there is any blocking terrain.  
 
If a piece is placed near an existing wall, the space is filled in. This 
results in a piece being placed that does not resemble the piece that was 
displayed. 

You can also rotate or discard the current segment.  Rotate the piece by 
pressing F7.  Press F8 to discard the current piece (this adds a slight 
penalty to your score and time, depending on difficulty.) 

Function keys:

      F1: Help
      F2: Grid pattern 
      F4: Global map
      F5: Turn entire map 90 deg clockwise
      F6: Turn entire map 90 deg counterclockwise
      F7: Rotate current wall segment
      F8: Discard current wall segment
      F10: Quit the game

      Alt-S toggle sound

Buttons:
      Global  -- Same as F4
      View    -- Shows a 3D view of current tower
      Stat    -- Statistics for current game

Goals
-----
Your goal is to build the tallest tower you can.  The best way to do this is 
to make each stage as compact as possible, with as few gaps.  

BUILDING
========

The box in the lower left shows the shape of the current wall or hedge 
segment. You have to find a place where they will fit, much like a puzzle or 
the game Tetris.  Place it by clicking on a place on the map.  A piece 
cannot be placed if there is any blocking terrain.  
 
You can also rotate or discard the current segment.  Rotate the piece by 
pressing F7.  Press F8 to discard the current piece (this adds a 
slight penalty to your score.)

Restrictions:
-------------
The time alloted for building decreases with each level, according to 
difficulty.  If you discard a piece, time is also lost.  

The size of the groups required to save increases with level, too.

MAP CONTROLS
============
Scrolling
---------
Use the right mouse button to scroll the map in any direction.  Use the 
global map function to quickly jump to any area on the map, or just to see 
the overall view.
 
Rotate map
----------
You can turn the entire map by 90 degrees in either direction, using the F5 
and F6 keys.  This sometimes is helpful to see behind taller terrain types.  
The global map is always shown with a northern orientation, though.

Show grid
--------
The F2 key or Grid button displays a grid on the map.  This helps in 
placement of terrain, since it shows the base of a wall or hedge segment.  
The grid remains in place until you scroll off, or call the global map.


SCORING:
========
Your goal is to build the tallest tower you can.  Each level or stage 
becomes the base for the next level.  A compact base, with no spaces is 
easier to build on.  

You score points for each wall segment placed, based on the difficulty and 
the level.  To proceed to the next stage each wall segment must include a 
minimum number of segments. This value changes with difficulty.  At 
difficulty 1, the minimum is 5, at 20, it's 24.  Any smaller group will be 
discarded before proceeding to the next level ( you do get points for these 
discarded groups, though. )

Hall of Fame
------------
In the hall of fame (HOF), scores are kept by difficulty, map, and date. You 
can also enter your name.  

If you want to clear the HOF, enter the DOS command:
      DELETE *.HOF

If you want to edit the HOF, you can remove individual lines, using any text 
editor.  However, you should be sure that the first line of the file shows 
the current number of entries.

DETAILS
=======
Stats Button
------------
Click on this button to see details on the current tower.  The clock 
continues to run while you use this feature.
 
View Button
------------
Click on this button to see a 3D image of the entire tower.  You can choose 
a viewing distance of 1 to 9, where 1 is the closest and 9 the farthest from 
the tower.  Usually 4 will be a reasonable view, but you might want to 
experiment with other values, depending on where on the map your tower is 
located.   The clock stops while you use this feature, so it's also a way to 
pause the action if you want.


***************************************************************************
*                    REGISTERING SHAREWARE                                *
***************************************************************************

Shareware is a means of distributing software.  Under the shareware concept, 
software may be freely copied and passed along to others, or distributed 
through bulletin board systems or national networks. 
 
As a recipient of a shareware program, you may use the software for a short 
trial period to determine if it meets your needs.  If the software is not 
suitable, then you can discard it. If you decide to use it, you must pay by 
registering.  When you register a Cascoly shareware program, you receive: 

      * A copy of the latest version of the program
      * A bonus of any other Cascoly program of equal or lesser value
            (see REGISTER.FRM for details)
      * A free introductory account on CompuServe including a private User 
        ID number and password, $15 introductory usage credit, and a 
        complimentary subscription to CompuServe Magazine, - a $30 value! 
      * A minimum of 90 days online support via CompuServe or by
        telephone.  Support by mail is also available, if accompanied
        by a SASE.
      * You will also receive bonus maps for new starting positions

To register a program, enter the following command:
 
      COPY REGISTER.FRM LPT1:
 
and the order form will be copied to your printer.  Check off the program 
you wish to register, and check the program you wish to receive as a bonus.

Cascoly Software is a member of the Association of Shareware Professionals 
(ASP).  ASP wants to make sure that the shareware principle works for you. 
If you are unable to resolve a shareware-related problem with an ASP member 
by contacting the member directly, ASP may be able to help. The ASP 
Ombudsman can help you resolve a dispute or problem with an ASP member, but 
does not provide technical support for members' products. You can contact 
the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve 
message via easyplex to ASP Ombudsman 70007,3536 


```
{% endraw %}

## TOWHELP.TXT

{% raw %}
```
F2: Overlay grid                                                      F4: Global Map                                                        F5: Turn entire map 90 deg clockwise                                  F6: Turn entire map 90 deg counterclockwise                           F7: Rotate wall segment                                               F8: Discard wall segment                                                                                                                    Left click on map to change terrain.                                  Wall segment is centered on mouse cursor.                                                                                                   Right click near an edge, or press an arrow key                       to scroll one line in that direction.                                                                                                                                                                              Buttons:                                                                DONE  -- Click on this when you're finished with                               a layer (usually if you can't place                                      any more walls)                                           VIEW  -- Show a 3-D perspective view of your                                      current tower                                             STATS -- Get statistics on current tower                                                                                                 TOWERS is similar to Tetris, since you need to place                  blocks of varying size.  That's where the similarity                  ends -- you need logic and planning, rather than quick                reflexes in TOWERS.  You build one level of the tower at              a time, trying to fit the blocks in the tightest                      pattern.  Each level becomes the base for the next                    level.  How high can you build?                                                                                                             Under the shareware concept, software may be freely copied and        passed to others, or distributed through bbs's or national networks.  As a recipient of a shareware program, you may use the software       for a short trial period. If you decide to continue to use it,        you must register. When you register you receive:                           * A copy of the latest version of the program                         * Additional bonus maps                                               * A bonus of any other Cascoly program of equal or lesser               value (see REGISTER.FRM for details)                                * A free introductory account on CompuServe (a $30 value!)            * A minimum of 90 days online support via CompuServe or phone                                                                         To register, print the form included in file REGISTER.FRM             and send it with a check for $20 to:                                     Cascoly Software                                                      4528 36th NE                                                          Seattle WA 98105                                                                             ┌─────────┐                                                     ┌─────┴───┐     │               (R)                                 ──│         │o    │──────────────────                                   │   ┌─────┴╨──┐ │  Association of                                     │   │         │─┘  Shareware                                          └───│    o    │    Professionals                                    ──────│    ║    │────────────────────                                       └────╨────┘    MEMBER                                                                                               
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                                            _______
                                       ____|__     |                (R)
          CASCOLY SOFTWARE          --|       |    |-------------------
          4528 36th NE                |   ____|__  |  Association of
          Seattle WA 98105            |  |       |_|  Shareware
                                      |__|   o   |    Professionals
                                    -----|   |   |---------------------
                                         |___|___|    MEMBER

This file provides information for Shareware Distributors, Disk Vendors and 
Computer Clubs  and User Groups who wish to distribute any or all of the 
programs ANTIC, ATC, FICTIONARY, GREEN, BORDER, QUILT, CAPBUF, ECOMASTER, 
PEG, UDECIDE, WEBS and CHRONOS.  These programs will be referred to below as 
Cascoly Shareware. Program names may not be changed without special 
permission, except for the following special cases if your system supports 
only 6 character names: 

      UDECID  for UDECIDE
      CHRNOS  for CHRONOS
      FICT    for FICTIONARY
      ECO     for ECOMASTER

Contents:
Part 1:  Program Information:
   Author/Publisher Information
Part 2:  Distribution Requirements
   Limited Distribution License
   ASP Associate (Disk Vendor) Member Information 
   ASP Vendor Members - Disk Sets
   Other (Non-ASP) Disk Vendor Information
   Other (Non-ASP) Vendors - Disk Sets
   Computer Clubs and User Groups 
   Disk-of-the-Month (or Subscription) Distribution
   CD-ROM and Other Collections

-----------------------------------------------------------------
Part 1:  Program Information:
-----------------------------------------------------------------

Each archived program contains a short description of the program in the 
file named DESCRIBE.  

For complete user registration information please refer to the REGISTER.FRM 
text file. 

Author/Publisher Information:
-----------------------------

Cascoly Software is a small software company owned and operated by Steve 
Estvanik. We have been producing top quality computer software at reasonable 
prices, continuously, since 1983. 

Please feel free to contact me at any time if you have any questions, 
comments or suggestions.  I can be reached by mail at the following address: 

      Steve Estvanik
      4528 36th Ave NE
      Seattle, WA 98105
      U.S.A.

I can also be reached by voice or electronically as follows:

   Phone:        (206) 523-6135    (10 am to 6 pm Pacific time)
   CompuServe:   76703,3046
   Internet:     76703,3046@COMPUSERVE.COM

-----------------------------------------------------------------
Part 2:  Distribution Requirements
-----------------------------------------------------------------

Individuals who wish to distribute Cascoly Shareware to friends or 
associates may do so in accordance with the restrictions outlined in 
LICENSE.DOC. 

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for ANTIC, ATC, GREEN, FENCE, TOWERS, 
WEBS, FICTIONARY, BORDER, CAPBUF, ECOMASTER, PEG, QUILT, UDECIDE, and 
CHRONOS, Cascoly Software authorizes distribution only in accordance with 
the following restrictions.  Please refer to the additional information 
listed below which is specific to ASP and non-ASP Disk Vendors, Computer 
Clubs, and Disk-of-the-Month style distribution. 

Individual Cascoly Shareware programs are defined as containing all the 
material listed in the PACKING.LST text file.  If any files listed in the 
PACKING.LST text file, or the PACKING.LST file itself, are missing, then the 
package is not complete and distribution is forbidden.  

    o  A Cascoly Shareware package - including all related program files and 
       documentation files - CANNOT be modified in any way and must be 
       distributed as a complete package, without exception.  (Either the 
       ZIP or self extracting EXE file must be used.)  The PACKING.LST text 
       file contains a list of all files that are part of the Cascoly 
       Shareware package.  

    o  No price or other compensation may be charged for a Cascoly Shareware 
       package.  A distribution cost may be charged for the cost of the 
       diskette, shipping and handling, as long as the total (per disk) does 
       not exceed US$8.00 in the U.S. and Canada, or US$12.00 
       internationally. 

    o  The Cascoly Shareware package CANNOT be sold as part of some other 
       inclusive package.  Nor can it be included in any commercial software 
       packaging offer, without a written agreement from Cascoly Software.  
       For information on combining the Cascoly Shareware package with 
       related programs to form a "disk-set", please refer to the 
       information below for ASP or non-ASP Disk Vendors. 

    o  Cascoly Shareware cannot be "rented" or "leased" to others. 

    o  The person receiving a copy of a Cascoly Shareware package MUST be 
       made aware that each disk or copy is ONLY for evaluation, and that 
       Cascoly Software has not received any royalties or payment for the 
       product.  This requirement can be met by including the complete 
       Cascoly Shareware package, which contains appropriate registration 
       reminders. 

    o  The person receiving a copy of Cascoly Shareware MUST be made aware 
       that he or she does not become a registered user until Cascoly 
       Software has received payment for registration of the software.  This 
       requirement can be met by including the complete Cascoly Shareware 
       package, which contains any appropriate registration reminders. 

    o  Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
       disassemble, otherwise reverse engineer, or transfer the licensed 
       program except as provided in this agreement.  Any such unauthorized 
       use shall result in immediate and automatic termination of this 
       license. 

    o  U.S. Government Information:  Use, duplication, or disclosure by the 
       U.S. Government of the computer software and documentation in this 
       package shall be subject to the restricted rights applicable to 
       commercial computer software as set forth in subdivision (b)(3)(ii) 
       of the Rights in Technical Data and Computer Software clause at 
       252.227-7013 (DFARS 52.227-7013).  The Contractor/manufacturer is 
       Cascoly Software, 4528 36th NE, Seattle, WA 98105.
      
All rights not expressly granted here are reserved to Cascoly Software.

The following additional information and restrictions are intended for 
Shareware Distributors, Disk Vendors, and Computer Clubs who wish to 
distribute Cascoly Shareware. 
                  
ASP Associate (Disk Vendor) Member Information: 
-----------------------------------------------

Vendors who are ASP Associate Members in good standing are hereby given 
permission to distribute Cascoly Shareware in accordance with the 
Distribution Restrictions listed above.  ASP Associate Members (often called 
"ASP Approved Vendors") in good standing do not need to request permission 
to distribute this package. 

This permission is in effect until or unless we notify you otherwise, in 
writing. 

ASP Vendor Members - Disk Sets:
-------------------------------
ASP Vendor Members who wish to distribute Cascoly Shareware as part of a 
collection (such as PsL's MegaDisk set, or a CD-ROM package) may do so 
provided that all the other restrictions listed above are met.  

Other (Non-ASP) Disk Vendor Information:
----------------------------------------
Shareware Distributors and Disk Vendors who are not ASP Associate Members, 
but who wish to distribute Cascoly Shareware need to comply with the 
following additional restrictions. 

In order for us to ensure that only current versions are distributed, we 
require that you send us a letter requesting permission to distribute any of 
our products. 

You may not list any of our products in advertisements, catalogs, or other 
literature which describes our products as "FREE SOFTWARE".  Shareware is 
"Try-Before-You-Buy" software, it is not free. Please include in your 
letter, a copy of your catalog.  If you are a new vendor, and no catalog is 
available, we need your written assurance that the ASP guidelines for 
vendors are being met -- ie, your catalog must emphasize that users must 
register and pay for shareware they receive from you. 

When making your request please ensure that we have your correct address and 
phone number, as well as the name of the person we may contact if necessary. 
Please include a SASE.  

Other (Non-ASP) Vendors - Disk Sets: 
------------------------------------
Vendors (non-ASP Vendor Members) who wish to distribute any Cascoly 
Shareware as part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
package) must obtain permission from Cascoly Software prior to beginning 
such a distribution. 

Computer Clubs and User Groups :
------------------------------
Computer Clubs and User Groups wishing to add Cascoly Shareware packages to 
their disk library may do so in accordance with the Distribution 
Restrictions listed above. 

Disk-of-the-Month (or Subscription) Distribution:
-------------------------------------------------
If you would like to distribute Cascoly Shareware as a Disk-of-the-Month, or 
as part of a subscription or monthly service, then the following 
restrictions apply: 

ASP Associate (Disk Vendor) Members in good standing are hereby given 
permission to distribute Cascoly Shareware under the Disk-of-the-Month style 
of distribution. 

Others (non-ASP Members) must contact us in advance to ensure that you have 
the most current version of the software. 

You cannot use a Disk-of-the-Month distribution to use up your inventory of 
old (out of date) disks.  Only current versions may be shipped as Disk-of-
the-Month disks.  


CD-ROM and Other Collections:
-----------------------------
If you wish to add any of our programs to a CD-ROM or other collection, 
please check the release date of the version you have.  If the version is 
over six (6) months old then please contact us to ensure that you have the 
most current version. 

ASP Vendor Members who wish to distribute Cascoly Shareware as part of a 
collection (such as PsL's MegaDisk set, or a CD-ROM package) may do so 
provided that all the other restrictions listed above are met. 

Vendors (non-ASP Vendor Members) who wish to distribute Cascoly Shareware 
package as part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
package) must obtain permission from Cascoly Software prior to beginning 
such a distribution. 

Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding Cascoly 
Shareware.  Please send us a copy of any reviews, articles, catalog 
descriptions, or other information you print or distribute regarding Cascoly 
Shareware.  Thank you for your time and assistance and for supporting the 
shareware marketing concept. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3580

     Volume in drive A has no label
     Directory of A:\

    EGAVGA   BGI      5363   8-29-88   2:00a
    TRIP     CHR      7241   8-29-88   2:00a
    GOTH     CHR      8560   8-29-88   2:00a
    SANS     CHR      5438   8-29-88   2:00a
    LITT     CHR      2138   8-29-88   2:00a
    DESCRIBE           509   5-23-92  11:43a
    TOWERS   EXE    125126   5-29-92   2:00p
    TOWHELP  TXT      3920   5-17-92   4:23p
    TOWHELP  IDX        46   5-17-92   4:23p
    GRIMAGES DAT    108832   5-15-92  12:40p
    TOWERS   DOC      8087   5-26-92  10:42p
    TOWER1   TWR      2421   5-29-92  12:53p
    BASIC    TWR      2481   5-29-92   1:44p
    DOTS     TWR      2481   5-29-92   1:25p
    DIAMOND  TWR      2649   5-29-92   1:22p
    README   LST      9444   5-23-92  11:44a
    VENDOR   DOC     11302   5-19-92   3:01p
    LICENSE  DOC      5645   4-05-92   1:15p
    REGISTER FRM      3455   5-23-92  11:45a
    PACKING  LST      2010   5-29-92   2:02p
    TOWERMAP DAT       225   5-23-92  11:41a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847   4-22-93  12:14p
           23 file(s)     318251 bytes
                           29696 bytes free
