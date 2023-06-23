---
layout: page
title: "PC-SIG Diskette Library (Disk #2684)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2684/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2684"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2684.TXT

{% raw %}
```
Disk No: 2684
Disk Title: Sherlock
PC-SIG Version: S1

Program Title: Sherlock
Author Version: 1.1
Author Registration: $15.00
Special Requirements: EGA or VGA, and a mouse.

SHERLOCK is a game of deduction.  Use the clues provided to logically
determine the locations of 36 images.

SHERLOCK may be played by a single person, or organize a tournament with
each person attempting to solve the same puzzle as quickly as possible.

Use the mouse to control this game.  A time limit can add excitement and
sharp graphics will help to keep you occupied for many sessions.

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
║                <<<<  PC-SIG Disk #2684 SHERLOCK  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start the program, type: SHERLOCK   (press Enter)                  ║
║                                                                         ║
║   To print the documentation, type: COPY SHERLOCK.DOC   (press Enter)   ║
║                                                                         ║
║   To print the registration form, type: COPY REGISTER.DOC  (press Enter)║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
_______________________________________________________________________________

 SHERLOCK rev 1.1 Copyright 1991 Everett Kaser. All rights reserved.
 Registration Form
_______________________________________________________________________________

Please check one:

     [  ]  $15.00 US     You will receive a shiny, new, official copy of the
                         latest revision of SHERLOCK. Requires EGA or VGA and
                         a Microsoft compatible mouse.  Registered users will
                         receive at least one extra set of 36 block images,
                         more as time allows.

     [  ]  $15.00 US     For the latest version of SOLITILE.  Solitile is a
                         game of solitaire played with tiles.  It is an expan-
                         sion and westernization of the game known as Shanghai,
                         Gunshy, or Mahjongg. Requires EGA or VGA.

     [  ]  $15.00 US     For the latest version of SNARF. Snarf is an arcade
                         style game of mazes, treasures, First-Aid stations,
                         locks and keys, teleports, and of course those nasty,
                         sneaky, sniveling Snarfs. Requires EGA or VGA.

     [  ]  $22.50 US     For any two games (check the appropriate boxes above).

     [  ]  $30.00 US     For all three games.

  Diskette type? (circle one)    [ 5.25" ]   [ 3.5" ]

_______________________________________________________________________________


  Your mailing address:


        Name   ___________________________________________________________

        Street ___________________________________________________________

        City   _______________________ State _____________ Zip ___________

        Country (if not US) ______________________________________________

_______________________________________________________________________________



  Mail this form along with your check or money order (in US funds) to:

     Everett Kaser                Phone:  (503) 928-5259
     Sherlock                     Please limit phone calls to these hours:
     35405 Spruce St                Weekdays:  6:00pm to 9:30pm  (Pacific
     Albany, OR  97321              Weekends:  8:30am to 9:30pm     Time Zone)


  The following is optional. If you would take the time to provide this inform-
  ation, it will help me in better adapting my programs to your equipment.

  Where did you get SHERLOCK? (if BBS/software-house, name and phone, please)

      _______________________________________________________________________

  Computer manufacturer/model and speed/CPU (ie, KompuKludge AT clone 8Mhz 286)

      _______________________________________________________________________

  Computer memory size (256K, 512K, 640K, etc) ______________________________

  Video card manufacturer, model, and memory size ___________________________

  Mouse manufacturer and model (if present) _________________________________

  Joystick? (circle one)  [ yes ]  [ no ]

  Please use the space below and/or on the back of this page for any comments
  or suggestions, and thank you for your registration.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```


                                 SHERLOCK 1.1

                            Distribution information


        This is a game for the IBM PC family of compatible computers.

        Sherlock is a game of deduction.  It is your task, based upon the
        information available in provided clues, to determine the locations
        of 36 blocks.  Every puzzle can be solved by using the clues to
        eliminate possibilities until the location of a specific block can
        be determined.  Sherlock may be played by a SINGLE person, or a
        TOURNAMENT may be set up, with each person in the TOURNAMENT
        attempting to solve the same puzzle as quickly as possible.  A
        TIME LIMIT may be set if desired.

        Program requirements:
                IBM PC/XT/AT compatible.
                EGA or VGA compatible display adapter (with a minimum of 128K
                        of RAM on the display adapter; early IBM EGA cards
                        will not work).  It will NOT work on CGA, MDA, or
                        Hercules display adapters.
                Microsoft compatible mouse.

        Sherlock 1.1 is being distributed as SHAREWARE. You may use the program
        for a period of 7 days, after which you must either register the
        program with the author or stop using it.  To register the program,
        send $15 in U.S. funds to:

                        Everett Kaser
                        Sherlock
                        35405 Spruce St
                        Albany, OR  97321

        A registration form is included to help with the registration process.
        To print the file REGISTER.DOC, ensure that your printer is turned on,
        that it's on-line, and then type:

                        PRINT REGISTER.DOC

        Registered users may receive an update at any time by sending $5 to
        the same address.  Registered users may write or call at any time to
        find out the latest revision date or to receive other support.

        I can be contacted via U.S. Mail at above address, via email on
        Internet at

                hplabs!hp-pcd!everett  or  everett%hpcvlx@hplabs.hp.com

        or by phone at (503) 928-5259 (not before 8:30am or after 9:30pm,
        Pacific Time, please).

        The distribution files are:
                SHERLOCK.EXE    the game program
                SHERLOCK.DOC    the game documentation/manual
                REGISTER.DOC    a registration form that can be printed
                VENDOR.DOC      this file of general information

        The game package, which MUST include the files SHERLOCK.EXE (the game),
        SHERLOCK.DOC, and REGISTER.DOC (the registration form) may be
        freely copied and distributed.  These three files may be re-archived
        to better suit a given distribution system, but the files may not be
        modified in any other way.  No distributor may charge more than $6 for
        the distribution of this program, and that fee in no way reduces the
        shareware registration fee owed to the author by the user.

        The entire contents of the four files SHERLOCK.EXE, SHERLOCK.DOC,
        REGISTER.DOC, and VENDOR.DOC are:

                Copyright 1991 Everett Kaser. All rights reserved.

        They may not be modified in any way without the written consent of
        the copyright holder, and they may only be copied and distributed
        in accordance with the above paragraphs.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2684

     Volume in drive A has no label
     Directory of A:\

    SHERLOCK EXE    139457   5-12-91  10:14p
    SHERLOCK DOC     40356   5-12-91  10:14p
    REGISTER DOC      3237   5-12-91  10:14p
    VENDOR   DOC      3554   5-07-91   8:44p
    GO       BAT        28  10-04-90   5:21a
    FILE2684 TXT       692   7-17-91  12:03a
    GO       TXT      1002   7-16-91  12:43p
            7 file(s)     188326 bytes
                          130048 bytes free
