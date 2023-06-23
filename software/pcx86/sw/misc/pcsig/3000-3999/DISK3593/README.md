---
layout: page
title: "PC-SIG Diskette Library (Disk #3593)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3593/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3593"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  PC-SIG Disk #3593 ZONE 66  >>>>                 ║
║                      Disk 3 of 3 (also #3591, #3592)                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install the game to your hard disk, type:                           ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD ZONE66  (press Enter)                                            ║
║     CD ZONE66  (press Enter)                                            ║
║                                                                         ║
║  To extract the files from drive A, insert disk 3 (#3593) and type:     ║
║     A:PKUNZIP A:ZONE66  (press Enter)                                   ║
║     (use B: in place of A: if installing from drive B)                  ║
║                                                                         ║
║  For online help, type:  HELPME  (press Enter)                          ║
║  To start the game, type:  ZONE66  (press Enter)                        ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELPME.DOC

{% raw %}
```

                            How to start ZONE 66
                            ====================

ZONE 66 requires:
  * A 386, 486, or faster IBM-compatible computer
  * Hard disk
  * At least 2 Megabytes of RAM

To get the maximum possible performance out of your system,  ZONE 66 uses an
ultra fast mode on your 386 or 486 PC (called "flat protected mode").  The
advantage is a super-fast game packed with graphics.

The disadvantage is, ZONE 66 will not work if you have any TSR's or memory
managers loaded.  Most computers ARE set up to load these,  so you need to
go through a few extra steps to start ZONE 66.

(We appologize for the inconvenience,  but in creating ZONE 66 we faced a
tradeoff -- make a plain old everyday game that is easy to start,  or make
an incredibly fast action game...  We chose the later!)

Here's the easiest way to start ZONE 66:

1. Create a "boot disk"
2. Start your computer up from the boot disk
3. Go into your ZONE 66 directory and start ZONE 66

Now here is a complete walk-through of how to begin.

TO CREATE THE BOOT DISK
=======================

A.  Put a blank disk in your A: drive.
B.  From the DOS prompt,  type the following command:

       FORMAT A: /S

C.  Press ENTER.
D.  Wait while your computer formats the disk and turns it into a boot disk.
E.  Label the disk "Zone 66 Boot Disk" and keep it handy.  You'll need this
    disk whenever you want to start ZONE 66.

TO START YOUR COMPUTER FROM THE BOOT DISK
=========================================

A.  Put the boot disk in your A: drive.
B.  Restart your computer,  either by pressing CTRL-ALT-DELETE,  by
    hitting your reset button,  or by turning it on.
C.  Wait while your computer "boots" from the boot disk.
D.  After a little while, your computer will stop and give you the A> prompt.

TO START ZONE 66 AFTER DOING ALL OF THE ABOVE
=============================================

A.  Change onto your hard drive by typing:

         C:          <Now press ENTER>

    Note to "Stacker" owners:  If your C: drive is compressed, then you
    should have installed ZONE 66 on a different,  non-compressed drive.
    So type the letter of that drive instead of "C".

B.  Switch into your ZONE 66 directory by typing:

         CD \ZONE66

    Note:  If you have installed the game in a different directory,
    switch into that directory instead.

C.  Start the game by typing:

    ZONE66

    If you run into any problems,  skip ahead to the TROUBLESHOOTING section.


NOTE TO OWNERS OF "STACKER" AND OTHER DISK-COMPRESSION PROGRAMS
===============================================================

ZONE 66 will not work on a drive that is compressed with Stacker or another
disk-compression program.  This is due to an unresolvable memory management
conflict between the programs.

If you're using Stacker or something similar,  you can get ZONE 66 to work
on your computer by installing it on a non-compressed partition of your hard
disk,  and by following the "boot disk" procedures listed above.  Stacker
usually reserves the drive D: for your uncompressed partition.

Note:  If your D: drive is set up so that it doesn't have enough free space
       for ZONE 66 to fit,  consult your Stacker documentation for
       instructions on increasing the size of the D: drive.  (No other
       solution exists to the Stacker conflict)


TROUBLESHOOTING
===============

Here are a list of possible problems you may run into,  as well as some
suggested solutions.

Problem:  When I type "ZONE66" to start,  the computer locks up.

Solutions:

   1.  ZONE 66 may have a problem detecting whether your PC has a sound card
       installed.  Instead of typing just "ZONE66",  please type one of the
       following commands instead:

       ZONE66 /n   (If you do NOT have a sound card installed in your PC)
       ZONE66 /s   (If you have a true Sound Blaster card)
       ZONE66 /u   (If you have a Gravis Ultrasound card)
       ZONE66 /a   (If you have an Adlib card)

   2.  If this fails to solve the problem,  make sure that you're following
       the correct "boot disk" procedure described above.  If you go through
       all of the steps,  create a boot disk,  and start ZONE 66 from a boot
       disk and it still doesn't work,  then your computer unfortunately is
       not compatible with ZONE 66.  

Problem:  When I begin playing,  my plane flies around in circles!

Solutions:

   1. If you DO NOT have a joystick,  then you need to start ZONE 66 with the
      following command to remedy this problem:

      ZONE66 /k   (For keyboard operation -- no joystick)

   2. If you DO have a joystick,  go into the "OPTIONS" menu from the main
      menu and select "CALIBRATE JOYSTICK".  This should solve the
      problem.  If it doesn't,  then ZONE 66 is probably incompatible with
      your joystick -- so use the following command to disable the joystick
      (and then use the keyboard):

      ZONE66 /k   (For keyboard operation -- if your joystick steers wrong)

Problem:  Zone 66 does not work properly with my Sound Blaster card,  even
          when I use the ZONE66 /S option.

Solutions:  

   1.  ZONE 66 can only recognize your Sound Blaster card if it is set for
       IRQ 3, 5, or 7.  If your Sound Blaster is set to IRQ 2 or 10,  ZONE 66
       will not recognize it.  To remedy this,  see your Sound Blaster
       manual for instructions on changing the IRQ.  Or,  if you prefer, 
       start ZONE 66 by typing "ZONE66 /a" and you'll get the Adlib musical
       sound track, but no digital sound effects.

   2.  Note that ZONE 66 is only designed for use with true Sound Blaster
       cards,  and it may not function properly with sound cards from other
       manufacturers.

Note to Pro Audio Spectrum owners:  Zone 66 can often be made to work with the
PAS if you create a CONFIG.SYS file that loads that PAS driver (MVSOUND.SYS).
If this doesn't work,  try running Zone 66 with the following command:

                         ZONE66 /N

Problem:  Zone 66 detects my Gravis Ultrasound card,  but I don't get any
          music.

Solution: Please check your disk to make sure the file M03GMUZ.Z66 exists.
          If it doesn't,  then you have a copy of ZONE 66 which does not
          contain the Gravis soundtrack.  To get the Gravis soundtrack,
          look for the file $ZONE66G.ZIP on your local BBS,  or you can get
          the latest version of ZONE 66 Mission 1 along with the Gravis
          sound track direct from Epic MegaGames for $5.  (See ORDERING INFO
          within the game)


NOTES ABOUT WINDOWS AND OS/2
============================

ZONE 66 will not run under Windows or OS/2.  Only run ZONE 66 from DOS,
with no TSR's or memory managers loaded.


LATER VERSIONS OF DOS
=====================

We've tested ZONE 66 with DOS versions from 3 to 5,  but DOS 6 was not yet
released at press time.  So,  if ZONE 66 does not work from DOS 6,  you must
create a boot disk with an earlier version of DOS.




```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
                              Epic MegaGames

                           LICENSING AGREEMENT

This file, LICENSE.DOC, describes the only terms by which Epic MegaGames
permits the Commercial Distribution of this program throughout the world.

"Commercially distribute" means to distribute for money or other
consideration.  It includes copying onto magnetic disks, CD-Roms
or any other tangible medium now or subsequently known, and
distribution by retail rack, direct mail, catalog, advertisement,
or trade show.  It does *not* include distribution by any not-
for-profit organization, by any hobby, user or computer interest
group to its members, or electronically by any BBS.

"Program" means this Version and its related files (including this one)
distributed by us under the marks "ZONE 66" and "EPIC MEGAGAMES"
(collectively, the "Trademark"), as it may be upgraded or otherwise modified
from time to time.

A. OWNERSHIP:  Except to the extent expressly licensed by us, we
have and reserve the exclusive copyright and other right, title
and interest to distribute the Program and all earlier versions
of it, and the right to use the Trademark in connection with them.

B. CURRENT VERSION:  As from the March 12, 1993 all previous versions of
    this program have been withdrawn from shareware. This version is the only
    official release version,  and it replaces any previous versions.

C. YOUR RESPONSIBILITIES:  You may Commercially Distribute the Program under
   this License so long as you:

[1]  Market it as shareware using "try before you buy" or similar words,
     to assure that your customers clearly understand the shareware concept.

[2]  Sell only the most current version of it.

[3]  Distribute the complete Program including all of its related files.
     You may *not* modify or remove any files,  including all program and
     data files,  and all documentation,  including VENDOR.DOC, LICENSE.DOC,
     ORDER.DOC, and CATALOG.EXE.

[4]  Include the word "Epic MegaGames" in every description of the
     Program used in your catalog or other promotional material.

[5]  IF YOU DISTRIBUTE BY "RACK" or otherwise allow the Program
     to be sold in a retail establishment:

     [a]  The word SHAREWARE  and the full Shareware Concept must be
          prominently displayed on the exterior of each Racked Package.

     [b]  You  must  inform  the   Retailer   that  he   will  be
          distributing Shareware Products and *NOT* "Low Cost Software".
          You  must  also  inform the Retailer of the full Shareware
          Concept.

     [c]  Under  NO  circumstances  can  this program be added to
          another  to form part of a disk, or be used to form any
          Compendium  Pack or any other "Special Offer Package"
          without written permission  being  first  obtained from
          an authorized Epic MegaGames agent.

     [d]  We require that you pay us a royalty of 10 cents per
          copy sold after the first 100 (which may be sold
          royalty-free).  This royalty is payable quarterly.

     [e]  We reserve the right, in our discretion, to waive or
          reduce the royalty in the cases of rack vendors who
          voluntarily:

          [i]   Report customer comments regarding the Program,
                including compliments, reports of bugs, and feature
                requests; or

          [ii]  Promote the Program by advertisements or prominent
                displays; or

          [iii] Provide other proper services.

[6]  SPECIAL UNITED KINGDOM REQUIREMENTS:  To Commercially Distribute this
     software in the UNITED KINGDOM,  you must follow these additional terms:

     [a]  Obtain a Distribution Licence from the Epic MegaGames' United
          Kingdom agent,  PRECISION SOFTWARE PUBLISHING.

     [b]  Make  distribution  copies only from master copies received
          directly from  PRECISION  SOFTWARE  PUBLISHING  using  high
          quality disks and duplication technology.

     [c]  Distribute the complete Program including ALL of its related
          files,  each  in  compressed  or other format AS RELEASED BY
          PRECISION SOFTWARE PUBLISHING.

     [d]  IF YOU DISTRIBUTE BY "RACK" or otherwise allow the Program
          to be sold in a retail establishment,  we require that you pay
          PRECISION SOFTWARE PUBLISHING a royalty of 10 pence per copy
          sold.  This royalty takes the place of any royalties due directly
          to Epic MegaGames.  This will be done by pre-purchasing coded
          labels which are to be displayed on any Rack Packs at all times.
          This royalty is to help Police the  Rack  vending  sector
          of  the  Market, and ultimately protect the professional
          Companies from the less professional ones.

D. Your right to distribute under this license is personal, and
does not include any right to [1] sublicense or otherwise cause
any copying or distribution of the Program by anyone else without
our consent in writing, or [2] rent or lease the Program.

E. THE PROGRAM IS PROVIDED "AS-IS".  NO WARRANTIES OF ANY KIND,
EXPRESS OR IMPLIED, ARE MADE AS TO IT OR ANY MEDIUM IT MAY BE ON.
WE WILL PROVIDE NO REMEDY FOR INDIRECT, CONSEQUENTIAL, PUNITIVE
OR INCIDENTAL DAMAGES ARISING FROM IT, INCLUDING SUCH FROM
NEGLIGENCE, STRICT LIABILITY, OR BREACH OF WARRANTY OR CONTRACT,
EVEN AFTER NOTICE OF THE POSSIBILITY OF SUCH DAMAGES.

F. TERM:  This  License  terminates  upon  30  days  prior written
notice by either us to the  other.  If  terminated  by  us by such
notice, you may  distribute  the  Program  until the earlier of 30 days
after the termination  date in  the  notice, or completion of the
distribution of the  copies you  have in stock.  Sections A, D and F
will survive the termination of this License.

G. MISCELLANY

[1]  Since we would be irreparably damaged if Section A, B or
     C[1]-C[6] of this License were not specifically enforced, we
     will be entitled without bond, other security or proof of
     damages, to appropriate equitable remedies with respect to
     breaches of such sections, in addition to such other
     remedies as we may have.

[2]  You will hold us, our partners, contractors, employees and
     agents harmless from damage, loss and expense arising
     directly or indirectly from your acts and omissions in
     copying and distributing the Program.

[3]  With respect to every matter arising under this License, you
     consent to the exclusive jurisdiction and venue of the state
     and federal courts sitting in Potomac, Maryland, and to service
     by certified mail, return receipt requested, or as otherwise
     permitted by law.

Epic MegaGames can be contacted at:
   Epic MegaGames
   10406 Holbrook Drive
   Potomac, MD 20854
   Tel: (301) 983-9771
   Fax: (301) 299-3841

Authorized Epic MegaGames Agents are:

In the United Kingdom:
   Precision Software Publishing
   4 Valley Court Offices,
   Croyden, Near Royston,
   Tring,  Herts.  SG8 0HF  U.H.
   Tel: 0223-208288
   Fax: 0223-208089

```
{% endraw %}

## ORDER.DOC

{% raw %}
```
==============================[ ORDER FORM ]================================
Epic MegaGames             Orders: 800-972-7434 
10406 Holbrook Drive    Questions: 301-983-9771        Compuserve: 70451,633
Potomac, MD 20854 USA         Fax: 301-299-3841                     GO SWREG
============================================================================
   
   **  You always receive a bonus disk of games FREE with your order!  **
  Please place a check mark in the [ ] boxes below,  and add up the totals.

[ ] Special discount!  Order any TWO products below and
      SAVE $5.00 -- or buy THREE and save $10.................. SAVE ___________

    Zone 66:  Ultra fast 32-bit VGA fighter jet arcade game......... ___________
[ ] Missions 1-4:  Foreign Shores, Ice Wind, Heat, Plains ($30)
[ ] Add-on Missions 5-8: Fury, Plantation, Hell, Frontier ($25)
[ ] Zone 66 Mega Pack:  Game plus all eight missions ($45)
[ ] Solar Winds:  Both episodes of Jake Stone's adventure through 256
      color space,  with arcade, adventure,  and role playing ($30). __________
[ ] Dare to Dream:  A trilogy of graphical adventures through your
      dreams and nightmares!  For Microsoft Windows ($30)........... __________
[ ] Jill of the Jungle, Jill goes Underground, and Jill Saves
      the Prince!  The entire action-adventure trilogy ($30)........ __________
[ ] Ancients:  Deathwatch and Approaching Evil,  two 256-color
      graphical fantasy role-playing adventure games ($25).......... __________
[ ] OverKill:  Fast-action arcade conquest of six unique
      planets + hint sheet & cheat code ($30)....................... __________
[ ] Brix & Brix 2 Deluxe:  Thrilling 256-color puzzle action,
      224 levels of fun, with Sound Blaster support ($30)........... __________
[ ] Castle of the Winds -- Fantasy role-playing for Microsoft
      Windows 3.0 or later (Two immense game worlds) ($25).......... __________
[ ] Kiloblaster:  Death of a Starship,  No Way Out, and The
      Final Battle!  90 levels of fun!  ($30)....................... __________
[ ] Adventure Math Deluxe:  colorful and fun educational game.
      Add, subtract, multiply, divide and more! ($25)..............  __________
[ ] Gravis Gamepad: 4-button digital joystick makes games twice
      as fun!  Plugs into your computer's joystick port ($25)....... __________
          
          Shipping & Handling (International add $2 extra).......... __$4.00___

                        Maryland residents MUST add 5% tax.......... __________

                                                      Total enclosed __________
IMPORTANT!  Disk size:   5.25   AND   High Density
                          3.5         Low Density

Is this your first order from Epic MegaGames?   YES   NO

          Name: _______________________________________________

       Address: _______________________________________________

  City, ST Zip: _______________________________________________

       Country: ____________________  Phone: __________________

Payment by:  [ ] Check   [ ] Money order  [ ] Mastercard  [ ] Visa

Card # _______________________ Exp Date: _______ Signature: ________________

```
{% endraw %}

## SYSOP.DOC

{% raw %}
```

Hello Sysops,

   This is Zone 66,  the first joint production of Epic MegaGames and
Renaissance Development.  You probably already know Epic for Jill of the
Jungle,  Solar Winds,  and OverKill.  Renaissance is the well-known
force behind many demos,  including Amnesia.

 -= Zone 66 is a shareware arcade game for 386 and faster computers =-

Please post Zone 66,  share it,  play it,  and enjoy!

   Important note:  Zone 66 is a very large file.  If your BBS has a time
limit for callers,  we'd appreciate you in a big way if you could make some
provision so that callers are allowed enough time to download $ZONE66.

   Sysops:  Run an official Epic MegaGames release point on your BBS and
bring all the latest releases to your users!  You can sign up on Software
Creations, the home of Epic and the other hot names in shareware
entertainment.  Also telecast the interesting Software Creations conference
for your callers, and more!

   To grab all of Epic's latest,  call Software Creations:
           508-365-2359 (2400 Baud)
           508-365-9825 (9600 Baud)
           508-365-9668 (14.4K Dual HST)
   If you want to sign up as an official release point,  OPEN DOOR 4
   while online.

   Thank you for being part of Epic's megateam!

                                        Tim Sweeney
                                        Epic MegaGames
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
=============================================================================
          For Anyone Intending to Distribute this Game in Any Way
            Including Shareware Vendors and Retail Distributors

         *** Read the file LICENSE.DOC to understand your rights ***
=============================================================================

        EPIC MEGAGAMES presents a game from RENAISSANCE PRODUCTIONS

                               -= Zone 66 =-

THE STORY:

   You have landed in a clearing.  Frantically,  you rush through the woods
toward the lights of the city far off in the distance.  A vision of your
family dances in your head -- your wife and the newborn daughter you have not
yet seen.  You must save them.  As you finally scramble to a bluff
panoramically overlooking the city,  you see the lights in the sky and you
realize it is too late.  The flash nearly blinds you,  and when vision
returns,  you feel nothing but anger as the massive mushroom cloud looms
over the city.  You are too late to save your home,  but other cities remain,
and they are vulnerable.  It is up to you alone to unravel the plot and hold
back the enemy attackers.


LONG DESCRIPTION:

Zone 66 is an ultra high-tech 32-bit arcade game for 386 and faster computers.
You pilot your fighter jet through a huge 360-degree scrolling playfield that's
jam-packed with 256-color enemies and terrain.  Inflict massive damage on the
enemy bunkers,  artilery,  and industrial sites,  leaving craters and
devastated earth in your wake.  Featurning a state-of-the-art digital sound
track for the Sound Blaster and Gravis Ultrasound cards.


SHORT DESCRIPTION:

Zone 66 is an ultra high-tech cinematic 32-bit arcade game for 386 and faster
computers.  With a digital Sound Blaster & Gravis sound track and VGA graphics.


Requirements:
     *  VGA graphics
     *  2 Megabyte of memory and DOS 3.0 or later
     *  80386 or faster computer
     *  Nerves of steel

Also supports:
     *  Sound Blaster, Adlib, and Gravis Ultrasound music cards
     *  Joystick

Credits:
    Programming.........Tran
    Artwork.............Joe Hitchens
    Music...............C.C. Catch

NOTE ABOUT THE SIZE OF ZONE 66
==============================

Zone 66 will fit on a 3.5" HD disk.  If you need to make Zone 66 fit on a
5.25" high density disk,  you have our permission to remove the following
non-crucial files:  M03GMUZ.Z66, MA3GMUZ.Z66, and ZIM2.Z66.  Those files 
contain the optional sound track for the new Gravis Ultrasound card.  (Note:
If those files don't exist,  they've already been removed)


=============================================================================

ATTENTION VENDORS & MEDIA:

If you want color PCX screen snapshots for your catalogs or magazines, call us!
If you want all the latest Epic shareware releases, call us!
If you have any questions, comments, or suggestions, call us!
If you know anyone who could write cool games for us to publish, call us!
If you wish to get on our mailing list, call us!
If you are interested in marketing or distributing our products, call us!

Call Epic at 301-983-9771 and ask for Carolynn Smith, or write to:

     Epic MegaGames
     10406 Holbrook Drive
     Potomac, MD 20854  USA

     70451,633 (CompuServe) or fax 301-299-3841

============================================================================

Thank you for your help in distributing our shareware products! If you have
any questions or suggestions, please do not hesitate to call. Also, check
out the Software Creations BBS (the numbers are listed in our Catalog and
within the program) for the latest news and programs from Epic MegaGames.

Tim Sweeney,
Epic MegaGames
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3593

     Volume in drive A has no label
     Directory of A:\

    ZONE66   ZIP    288278   4-21-93   8:36a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1540   4-22-93  11:10a
            4 file(s)     319227 bytes
                            1024 bytes free
