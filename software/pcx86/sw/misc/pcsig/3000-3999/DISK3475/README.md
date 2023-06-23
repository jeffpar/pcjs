---
layout: page
title: "PC-SIG Diskette Library (Disk #3475)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3475/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3475"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
                           SEASON FOOTBALL
                             Version 8.0


                 Copyright (c) 1990 by MICRO DESIGNS
                         All Rights Reserved


                   LICENSE & REGISTRATION INFORMATION

  o   A $25 registration fee is requested.  The fee will allow the
       author to improve and support this game. Along with registration,
       the fee will entitle a user to play cards showing the defenses
       and offenses and F keys use. Registered owners will receive
       information on game improvements, and when new stats will be
       available. New stats on all 28 teams will be made available at
       the end of the season. There is a $10 charge for these updated
       stats.

  o    WARNING. The shareware version of the game does not allow
       you to play the seasonal play or contain the Super Bowl teams.
       Send $25. for v 8.0 for the SUPER SEASON FOOTBALL program.

  o    The author retains exclusive rights to register and sell
       copies of SEASON FOOTBALL and SUPER SEASON FOOTBALL.

  o    This program is intended for personal enjoyment only.
       Unlicensed commercial use is prohibited.

  o    Copies of SEASON FOOTBALL may be distributed under the following
       conditions :

    >    All files associated with the program, including user's
         manuals and other documentation, must be distributed
         packaged together.
    >    No altered versions of SEASON FOOTBALL files may be used or
         distributed.
    >    No person or agency (other than the author) may sell or
         profit from SEASON FOOTBALL program or any associated files
         or any modified versions of it.
    >    The program will not be bundled for sale with any other
         software or hardware without prior licensing.
    >    Recognized users' groups or clubs are authorized to charge a
         duplication fee not to exceed $5.








   **************** IMPORTANT!!  WARRANTY & DISCLAIMER *************

        The author makes NO warranties, expressed or implied, as to the
        quality or performance of this program.  The author will NOT be
        held liable for any direct, indirect, incidental, or
        consequential damage resulting from the use of this program.
        Your use of this program constitutes your agreement to this
        disclaimer and your release of the author from any form of
        liability or litigation.

   =================================================================










                         ** SEASON FOOTBALL **
                              Version 6.3

        The Shareware version of SEASON FOOTBALL contains the full
        game with all 28 NFL teams. The registered game of SUPER
        SEASON FOOTBALL contains:

                     1.  28 Professional Football Teams
                     2.  Quick Football - Plays complete game in
                         10 seconds on a 12 MHertz computer.
                     3.  Program to play each week of the NFL or
                         RBL (fictional) leagues. Complete statistics
                         are retained and recorded for printout.
                         League/Division standings can be printed out
                         each week of the season.
                     4.  Players Aid Cards with the 24 offensive and
                         10 defensive formations for ease of use.
                     5.  All past Super Bowl teams.





        Over the past 5 years this game has correctly predicted the
        outcome of all but 3 playoff games and all the superbowl
        games. The math models for the games have been tested and
        immproved for over ten years. The CGA version of this game
        won second place in a National Computing contest sponsored by
        Compute PC! That version under the name Pro Football is still
        available from that source.


        You can let the computer play the game, or you can play
        against either team or you can have two players play against
        each other. A full game takes about 40 minutes. Everything
        that can happen in a real game can happen in SEASON FOOTBALL.
        Nothing has been left out. It is even possible for the ball to
        strike the uprights or crossbar during a field goal try.







        This game is easy to play but is very complex program with
        over 4000 lines of code. It is compiled Turbo Basic. We feel
        that all the bugs have been removed. If you experience an error
        or problem, please call or write to the author.

        All comments are appreciated.  However, if you wish to comment
        about specific events during the game, please try to include as
        much information about the state of the game (i.e. Down, Quarter,
        Time Left, Offensive & Defensive Plays, etc.) at the time of the
        event as possible.  Your comments are very important. Thank You.

        A complete instruction file is included. From DOS prompt or
        from your subdirectory, type HELP and follow instructions.








                    - Registration/Comment Information Form -

        Please supply all of the requested information. Please do not
        phone. To register please fill out the form and send a check
        or money order for $25 to

                            MICRO  DESIGNS
                           8587 Richmond Ave
                         Manassas,  VA. 22110
     ================================================================

        _________________________________   _____________________________
        Last Name         First   Initial   Computer Type / Memory Size

        _________________________________   _____________________________
        Street                     Apt.     Drive Types (Hard,3.5",etc.)

        _________________________________   _____________________________
        City               State   Zip      Computer Speed in MHertz

        _________________________________   _____________________________
        Phone             Date    Amount    Game obtained how?
     ================================================================

```
{% endraw %}

## INSTALL.DOC

{% raw %}
```


  SEASON FOOTBALL  (v6.3)
  by Micro Designs (c) 1990


  Hard drive installation:

  This program was condensed using PKZIP. You must first uncondense
  the files before the program will run. Follow the steps outlined
  below to UNZIP.

  1. Go to the A:\ drive: <type>  xcopy *.* c:\MDFBALL

  2. After the program has been copied to the hard drive, go to the C
     drive <type> c: At the C:\ prompt, <type>   PKUNZIP FBSEAS.ZIP

  3. The program will then 'unzip' all the files. When that has finished
     and you want to play the game, <type>  FBALL

  4. <Type> HELP to get the instructions / print out.  <Type> README.DOC
     to receive Shareware Registration Information.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3475

     Volume in drive A has no label
     Directory of A:\

    FBSEAS   ZIP    299850   8-08-92   3:07p
    PKUNZIP  EXE     19025   3-15-90   1:10a
    INSTALL  DOC       705   8-27-92   4:53p
    GO       BAT        39   4-13-93   9:17a
    SHOW     EXE      2040   9-12-88  10:48a
            5 file(s)     321659 bytes
                           38912 bytes free
