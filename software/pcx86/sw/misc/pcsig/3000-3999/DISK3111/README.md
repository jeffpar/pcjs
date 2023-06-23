---
layout: page
title: "PC-SIG Diskette Library (Disk #3111)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3111/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3111"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DB.DOC

{% raw %}
```
                            Drum Blaster Version 3.0
                              for the Sound Blaster
                        Copyright 1991-1992 Larry Tipton

                                                   _______
                                              ____|__     |               (R)
                                           --|       |    |-------------------
            Epic MegaGames                   |   ____|__  |  Association of
         10406 Holbrook Drive                |  |       |_|  Shareware
          Potomac, MD 20854                  |__|   o   |    Professionals
                                           -----|   |   |---------------------
                                                |___|___|    MEMBER


Drum Blaster turns your Sound Blaster-equipped PC into a professional-sounding
drum pad featuring digitized sound effects.  Drum Blaster also works with the
tiny built-in speaker on plain old PC's but the sounds won't shake your house
nearly as much.  If you don't have a Sound Blaster or compatible sound card,
we highly recommend buying one from your local computer store!

Drum Blaster put forty unique digitized sound effects at your fingertips.
Tap out rhythms by pressing the keys!  Drum Blaster also can play CMF music
files in the background while you pound the drum.

Drum Blaster also comes bundled with a built-in "Drum Traker" player to give
you a preview of the drum sequencer that will soon be available from
Epic MegaGames (stay tuned for more information!)


Member, ASP
===========

This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware principal
works for you.  If you are unable to resolve a shareware-related problem
with an ASP member by contacting the member directly,  ASP may be able to
help.  The ASP Ombudsman can help you resolve a dispute with an ASP member,
but does not provide technical support for members' products.  Please write
to the ASP Ombudsman at 545 Grover Road,  Muskogeon, MI 49442-9427 or send
a Compuserve message via CompuServe Mail to ASP Ombudsman 70007,3536.


Installation
============

Drum Blaster requires, at minimum, the following PC configuration:

- 512K RAM
- EGA or VGA with at least 256K video memory.
- Hard Drive or high density floppy drive.

A Sound Blaster Card is HIGHLY RECOMMENDED but not required.


Installation is a snap. Copy files to an appropriate sub directory on you
hard disk (if you have one) or simply copy the files to diskette (requires
a high density diskette).

Copy all files to a directory of your choice on you hard drive or just run
it from one high density floppy.

TYPE DB.  Press enter.

Drum Blaster makes every attempt to locate the address of your Sound Blaster.
If for some strange reason you get no sound from the Sound Blaster or it comes
up in PC Speaker mode try typing:

   DB  XXX Y  where XXX is the Port IO Address and Y is the interrupt number.


Modes of Operation
==================

Drum Blaster has several modes of operation:

- Drum Mode          (default)
- Synthesizer Toggle (lets you play notes in addition to sound effects)
- Drum Traker Mode   (requires a Sound Blaster)
- CMF Music Mode     (requires a Sound Blaster)


Drum Mode
=========

This is the default or standard mode of operation.  Press keys to produce
various sound effects.  Crank your stereo up to maximum volume in order to
annoy your parents and neighbors.


Synthesizer
===========

Activated by pressing F3.   A highlight box appears over the first digitized
sample.   Navigate by pressing the arrow keys.  Pressing the ENTER key selects
the sample within the highlight box as the active synthesizer instrument.
Pressing ESC cancels the request.

Now press the QWERTYUIOP[] keys to produce notes.  This is sort of like a
one-octave, 12-fret guitar.  To return to Drum Mode press F4.


Drum Traker
===========

Activated by pressing F2.   A file menu with a list of all available Drum
Traker sequences and modules appears.   Navigate by pressing the up and down
arrows.   Press ENTER to select.   Pressing ESC cancels the request. While
in this mode a TEMPO box appears.  Pressing the up and down arrows keys
changes the tempo of the sequence being played.  Pressing any other key takes
you out of Drum Traker Mode!

>   Look for Drum Traker coming soon from Epic MegaGames!  Drum Traker allows
>   you to create your own sequences.  Way cool.


CMF Music
=========

Activate by pressing F5.  A file menu with a list of all available CMF
Songs appears.   Navigate by pressing the up and down  arrows.   Press ENTER
to select.   Pressing ESC cancels the request. Pressing F6 stops the song
being played.

You can play along now by pressing the various drum pad keys!

By the way:  Three of the songs in the CMF menu were taken from the sound
track of Jill of the Jungle,  a VGA action-adventure game from Epic
MegaGames.  Two are original works of Dan Froelich: ACTION.CMF and
FUNKY.CMF;  AMAZING.CMF is Dan's transcription of Amazing Grace.


Library Menu
============

If you wish to change to a different Sound Blaster 3.0 Library select
this option.   Additional Libraries are available through Epic MegaGames!
You can also create your Library files using the DBLIB.EXE program that
comes with DRUM BLASTER 3.0.  See DBLIB.DOC for more information.

Drummer Menu
============

If you which to change the Drummer/Keyboard Animations select this
option.  Drum Blaster 3.0 comes complete with two animation sets!
Additional "Drummers" are available through Epic MegaGames!

Ordering
========

Type "PRINTME" to print the Epic MegaGames order form.  Also check out
our on-disk catalog (CATALOG.EXE) for information about our games!

______________________________________________________________________________

Legal Stuff

Drum Blaster may not be changed/modified in any way except by the author.

All warranties are disclaimed, including damage to hardware and/or software
from use of this program.  In no event will Larry Tipton or Epic MegaGames
be liable for any damages, including lost profits, lost savings or other
incidental or consequential damages arising out of use or inability to use
this program, or any other claim by any other party.

Have a nice day!
_______________________________________________________________________________

Sound Blaster is a registered trademark of Creative Labs, Inc
Drum Blaster (C) 1991-92 by Larry Tipton, all rights reserved.

```
{% endraw %}

## DBLIB.DOC

{% raw %}
```
Drum Blaster Librarian
======================

You can use DBLIB.EXE to create your own libraries of sounds for Drum
Blaster.  These sound libraries appear as .LIB files;  DB.LIB is the
bundled with Drum Blaster.

The syntax is simple:

    DBLIB yourfile.lib

DBLIB will search the current directory for files with the file extension
"VOC".  These files must be uncompressed VOC samples.  Do not try to use
compressed files.  Make sure that you have at least 43 VOC files in the
directory where DBLIB resides.  Make sure that no single VOC file
is more than 65,554 bytes in length.  Also, please remember that the lib
you create should be kept to under 500,000 bytes total since the lib is
loaded into low dos memory.

You can select a new library from Drum Blaster by pressing F10.


Send us your Drum Blaster libraries
===================================

Have you created a cool sound library for Drum Blaster?  Send it in!
The creator of the best Drum Blaster library we see each month gets a
coupon for a 50% discount on any product from Epic MegaGames.

Send your Drum Blaster libraries to:
   Epic MegaGames
   Attn: Drum Blaster Library
   10406 Holbrook Drive
   Potomac, MD 20854

_______________________________________________________________________________
Drum Blaster (C) 1991 by Larry Tipton, all rights reserved.

```
{% endraw %}

## FOREIGN.DOC

{% raw %}
```

               Information about foreign orders:

If we don't have a distributor in your area,  you can order by credit
card (Mastercard or Visa) by calling 314-256-3130 (orders only).

                          -or-

Go to your local post office and get an international postal money order
(made out in U.S. funds) and mail it with your order.  We can ship anywhere
in the world,  but you need to add $2 extra postage & handling.

                          -or-

Many of our products can be ordered online at Compuserve -- just GO SE.

                          -or-

FOR FASTEST RESULTS -- Contact one of our distributors:

=============================================================================

In the U.S.A.:
   Epic MegaGames
   10406 Holbrook Drive
   Potomac, MD 20854 U.S.A.

   Or call 1-800-972-7434 (Orders only)

=============================================================================

In Canada:
   Distant Markets
   Box 1149
   194 - 3803 Calgary Trail
   Edmonton, AB Canada T6J 5M8

   Phone: 1-800-661-7383 (We also speak French)  Fax: 1-403-435-0928

   Canadian Pricing:  (Prices include shipping and tax)
      Jill of the Jungle           $42 Canadian
      Drum Blaster                 $42
      Original ZZT (All 4 volumes) $35
      Super ZZT  (All three games) $35
      Both Original & Super ZZT    $50

=============================================================================

In the U.K.:

   Nildram Software
   26 Stanley Hill Avenue
   Amersham
   Bucks
   HP7 9BD

   Phone/Fax: 0494-432342    BBS: 0494-431861

   Cheques should be made payable to Nildram Software,  or use your MasterCard
   (Access) or VISA.  Registered users are entitled to lifetime support and
   will be kept informed of all new releases from Epic MegaGames.

   UK Prices:
      Drum Blaster  19.95 pounds + VAT
      Jill          19.95 pounds + VAT
      Castle        17.95 pounds + VAT
      ZZT           15.00 pounds + VAT
      Super ZZT     18.00 pounds + VAT
      ZZT & SZZT    25.00 pounds + VAT

=============================================================================

In Germany:

   CDV-Software
   Ettlingerstr. 5
   7500 Karlsuhe 1
   Germany

   Phone: 0721-22295  Fax: 0721-21314  Compuserve: 100022,274

   German pricing:

      Jill of the Jungle     DM 59,
      Drum Blaster           DM 59,
      Castle of the Winds    DM 49,

=============================================================================

In Australia:

   BUDGETWARE
   PO Box 496
   Newtown NSW 2042
   AUSTRALIA

   Phone (02) 519-4233  Fax (02) 516-4236

   Australian pricing: (Includes shipping)

      Jill of the Jungle    $49 (Australian)
      Drum Blaster          $49

   Payment can be made by Cheque, Money Order, Bankcard, Mastercard, or Visa.

=============================================================================

```
{% endraw %}

## NEWS.DOC

{% raw %}
```

Dear Customer,

     Welcome to the world of Epic MegaGames!  Drum Blaster is the first
release in our line of sound and music programs.  This product was
created by Larry Tipton and originally released back in 1990, when it
went on to win a national Sound Blaster programming contest on Rusty
and Edie's BBS.

     When I first saw Drum Blaster,  I was dazzled by all of the tremendous
rhythms and sound effects it put at my fingertips.  As an instant Drum
addict,  I talked to Larry and begged him to join forces with Epic MegaGames
to conquer the world of digitized sound and music.

     So,  in addition to our upcoming line of 256-color VGA games,  you can
experience the room-shaking sound and music of the Epic MegaGames team.  In
1992, we'll be releasing at least four new games, including Jill of the
Jungle,  KiloBlaster, Castle of the Winds;  and Drum Traker, a dazzling
sound sequencer.

      Here at Epic MegaGames, customer satisfaction is our top goal.  We work
hard to create the products you ask for, with the features you want, and
deliver them at a price that will make you very happy.  So please keep in
touch with us, and remember that the entire Epic MegaGames team is
standing behind our products!

     Thanks you for being an Epic MegaGames customer.

                                     Tim Sweeney,
                                     President of Epic MegaGames

P.S.  Remember, Drum Blaster is shareware -- so we encourage you to give out
      copies to all of your friends, and post it on your favorite BBS's.
      Please spread the word about Epic MegaGames!

```
{% endraw %}

## ORDER.DOC

{% raw %}
```
             -- Thanks for ordering from Epic MegaGames --

  Run PRINTME to print this then mail it in,  or call our toll-free ordering
            line at 1-800-972-7434 (this number is for orders only!)

========================== Please Rush Me: ==============================

[ ]  The latest, Registered version of Drum Blaster ($15) .... _________

     EXTRA ADD-ON DRUM BLASTER DISKS (Each contains approx. 360K)

[ ]  Various Sound Effects: Cars, Space, Voices. Includes new Animations!
[ ]  Drums: Traditional, Rock, Rap.
[ ]  Musical Instruments: Guitars, Bass, Synthesizers.
[ ]  CMF Music File Disk (Requires Sound Blaster!)  ($10 each) __________

                          *** SPECIAL OFFER ***

[ ]  Order everything and save!  Get the latest version of
     Drum Blaster plus ALL FOUR ADD-ON DISKS and ALSO a disk
     full of BONUS GAMES from Epic MegaGames (just $30)....... __________

                     ** Games from Epic MegaGames **

[ ]  Jill of the Jungle -- 3 huge volumes of 256-color animated
     arcade action! (Requires CGA/EGA/VGA graphics, 80286 or
     faster, and hard disk) ($30)............................. __________

[ ]  Castle of the Winds -- Fantasy role-playing for Microsoft
     Windows 3.0 or later (Two immense game worlds) ($25)..... __________

[ ]  ZZT: Includes Town, Caves, Dungeons, City ($24).......... __________
[ ]  Super ZZT: Proving Grounds, Forest, Zoo ($24)............ __________
[ ]  Both ZZT and Super ZZT ($35)............................. __________
     (Note: ZZT is a terrifically fun game with so-so graphics)

               Shipping & Handling (Foreign add $2 extra)..... __$2.00___

                       Maryland residents MUST add 5% tax..... __________

                                                Total enclosed __________

IMPORTANT! Circle disk size:  5.25   AND   High Density
                               3.5         Low Density

CPU: 8088  286  386  486    Graphics:  CGA  EGA  VGA  Mono

Is this your first order from Epic MegaGames?   YES   NO

          Name: _______________________________________________

       Address: _______________________________________________

  City, ST Zip: ___________________________________ Phone: _________________

Payment by:  [ ] Check   [ ] Money order  [ ] Mastercard  [ ] Visa

Card # ________________  Exp. Date: ________  Signature: ___________________

As an Epic MegaGames customer, you get a 30-day complete satisfaction gurantee,
fast shipping,  and up-to-date news of all our new releases.  Thank you!

_________________________                                              /-----\
                                                                       |STAMP|
_________________________                                              \-----/

_________________________






                            Epic MegaGames
                            10406 Holbrook Drive
                            Potomac, MD 20854

```
{% endraw %}

## SYSOP.DOC

{% raw %}
```

To All Sysops,

    Here is Drum Blaster 3.0, the first release in Epic MegaGames' line of
Sound Blaster products.  Work is in progress to bring you a whole line of
256-color VGA games and entertainment & sound products -- we'll be releasing
at least six of these products in 1992,  so keep in touch!

     Also -- we're looking for a few great BBS's to become official Epic
MegaGames release points.  How would you like to have the popular Epic file
area on your board?  This is a great way to attract users to your system!

     If you are interested, please get in touch!  Be the first in your
area to get in on this opportunity and have your file area in place when
the big Epic rush starts -- with the release of Jill of the Jungle,
KiloBlaster, and Drum Traker.  (These are HOT products!)

PLEASE WRITE TO:         OR CALL The Runway BBS
Epic MegaGames           (Join conference # 33)         OR Compuserve:
ATTN: Release Points     215-623-6203 (2400 Baud)          70451,633
10406 Holbrook Drive     215-623-6103 (38.4K HST)
Potomac, MD 20854        215-622-7563 (38.4K V.32)

     Thank you for working with Epic MegaGames.

                                        Tim Sweeney
                                        Epic MegaGames


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #3111 DRUM BLASTER  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install this program to your hard disk, type:                       ║
║      [hard disk drive letter]:  (press Enter)                           ║
║      CD\  (press Enter)                                                 ║
║      MD DBLAST  (press Enter)                                           ║
║      CD DBLAST  (press Enter)                                           ║
║      COPY A:*.*  (press Enter)                                          ║
║      PKUNZIP DBLAST  (press Enter)                                      ║
║                                                                         ║
║  Then to print the documentation, type:  COPY DB.DOC PRN (press Enter)  ║
║                                                                         ║
║  To start the program, type:  DB  (press Enter)                         ║
║                                                                         ║
║  To print the order form, type:  COPY ORDER.DOC PRN  (press Enter)      ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3111

     Volume in drive A has no label
     Directory of A:\

    DBLAST   ZIP    333452   6-05-92   6:36p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1540   1-01-80   7:06a
            4 file(s)     358558 bytes
                            2048 bytes free
