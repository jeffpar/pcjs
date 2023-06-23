---
layout: page
title: "PC-SIG Diskette Library (Disk #2873)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2873/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2873"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2873.TXT

{% raw %}
```
Disk No: 2873
Disk Title: SNARF
PC-SIG Version: S1.0

Program Title: SNARF
Author Version: 2.02
Author Registration: $15.00
Special Requirements: EGA or VGA adaptors only.

This is an arcade style game for the IBM PC family of compatible
computers.

The general idea of the game is this:  you have to run around through
various mazes (levels) picking up treasure (rings and crowns) while
avoiding the Snarfs.  You can shoot the Snarfs, but you only get points
for the treasure, not for the Snarfs.  Each time you're touched by a
Snarf, you're "tagged".  You start with a "tag count" of 50.  Each time
you're tagged the count is decremented.  If you get tagged when the
count is 0, the game is over.  You can get "healed" at a first-aid
station (your tag count is pumped back up to 50).  First-aid is only
available every two to four mazes.  The color of the top and bottom
bars on the display change with each tag. Snarf 2.02 allows the user
to create new levels for the game.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
_______________________________________________________________________________

  SNARF rev 2.02   Copyright 1988, 1990  Everett Kaser. All rights reserved.
  Registration Form
_______________________________________________________________________________

Please check one:

     [  ]  $15.00 US     You will receive a shiny, new, official copy of the
                         latest revision of SNARF. Requires EGA or VGA.

                   [  ]  Check here if (should 2.02 be the most recent version)
                         you wish for me to wait (however long it takes) for
                         the next revision before sending you your update.

	Name to which you'd like Snarf registered:_____________________________

     [  ]  $15.00 US     For the latest version of SOLITILE.  Solitile is a
                         game of solitaire played with tiles.  It is an expan-
                         sion and westernization of the game known as Shanghai,
                         Gunshy, or Mahjongg. Requires EGA or VGA.

     [  ]  $22.50 US     You'll receive the latest of BOTH Snarf and Solitile.

  Diskette type? (circle one)  [ 360K 5.25" ]   [ 1.2M 5.25" ]   [ 3.5" ]

  Mail this form along with your check or money order (in US funds) to:

     Everett Kaser                Phone:  (503) 928-5259
     Snarf                        Please limit phone calls to these hours:
     35405 Spruce St                Weekdays:  5:30pm to 9:30pm  (Pacific
     Albany, OR  97321              Weekends:  8:30am to 9:30pm     Time Zone)
_______________________________________________________________________________

  The following is optional. If you would take the time to provide this inform-
  ation, it will help me in better adapting my programs to your equipment.

  Where did you get SNARF? (if BBS/software-house, name and phone, please)

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

## SNARF202.DOC

{% raw %}
```


                                 SNARF 2.02


                         A Shareware game for EGA


                        Copyright 1990 Everett Kaser
                            All rights reserved.


                              Novemeber 22, 1990





        This is an arcade style game for the IBM PC family of compatible
        computers.  It requires an EGA/VGA compatible display adapter (with a
        minimum of 128K of RAM on the display adapter; early IBM EGA cards
        will not work).  It will NOT work on CGA, MDA, or Hercules display
        adapters.

        This game was originally written in early 1988 and released in the
        spring of that year as freeware.  It was not finished at that time,
        due to lack of time, but was usable.  Snarf release 2.0 has been
        completely re-written from top to bottom, a welcome/demo screen
        added, and the game has been made easily extensible by non-programmers.
        Anyone can add new "levels" to the game.  The game is structured to
        accept up to a maximum of 999 levels.  Should be sufficient.

        Snarf 2.0 allows the user to create new levels for the game.  If you
        create new levels that you would like to share with other registered
        users, send them to the author (on 5 1/4 or 3 1/2 disk).  If they're
        sufficiently different and challenging, they'll be included on future
        distributions to registered users.  Acceptance of at least three new
        levels for inclusion on the registered distribution will win the
        submitter a free update.  (This offer is valid ONLY to registered
        users.)  Previously registered users may get an update at any time
        for $5.

        This program may NOT be distributed over the Internet computer network
        without the permission of the author.

                        ALSO AVAILABLE FROM EVERETT KASER

        Solitile is a game of solitaire, played with "tiles".  It derives
        from several similar games, such as "Shanghai", "Gunshy", and
        "Mahjongg", which are played with Mah-Jong tiles.  Solitile plays
        the same game, but adds new starting layouts and the ability for the
        player to create new layouts and/or modify the layouts provided.  It
        also uses new "westernized" pictures on the faces of the tiles.
        Best with mouse, but works well from keyboard, too. Print the file
        REGISTER.DOC for ordering information.



        SNARF 2.0 is being distributed as SHAREWARE.  You may use the program
        for a period of 3 days, after which you must either register the
        program with the author or stop using it.  To register the program,
        send $15 in U.S. funds to:

                        Everett Kaser
                        Snarf
                        35405 Spruce St
                        Albany, OR  97321

        Please specify the name to which you wish to have the program register-
        ed.  This name will appear on the welcome screen of your registered
        copy of the program.  The registered version may NOT be copied or
        distributed, except by the author.  A copy of the latest shareware
        version will be included that you may share with friends.

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

        The game package, which MUST include the files SNARF.EXE (the game),
        SNARF.DOC (this file), and REGISTER.DOC (the registration form) may be
        freely copied and distributed.  These three files may be re-archived
        to better suit a given distribution system, but the files may not be
        modified in any other way.  No distributor may charge more than $6 for
        the distribution of this program, and that fee in no way reduces the
        shareware registration fee owed to the author by the user.  This
        program may NOT be distributed over Internet without the permission
        of the author.

        The registered version of Snarf (which is NOT shareware and may NOT
        be distributed except by the author) contains at LEAST 20 levels and
        does NOT contain the "shareware reminder" screens at game end.

        Bug reports, suggestions, and comments are very welcome.

I.  PLAYING THE GAME

        The general idea of the game is this:  you have to run around through
        various mazes (levels) picking up treasure (rings and crowns) while
        avoiding the Snarfs.  You can shoot the Snarfs, but you only get points
        for the treasure, not for the Snarfs.  Each time you're touched by a
        Snarf, you're "tagged".  You start with a "tag count" of 50.  Each time
        you're tagged the count is decremented.  If you get tagged when the
        count is 0, the game is over.  You can get "healed" at a first-aid
        station (your tag count is pumped back up to 50).  First-aid is only
        available every two to four mazes.  The color of the top and bottom
        bars on the display change with each tag.

        Across the top of the display are these fields:

                TAGS            this is the number of tags left (max = 50)
                POINTS          value of treasure picked up on this level
                LEVEL SCORE     score for level at end-of-level (POINTS x TAGS)
                SCORE           total score
                LEVEL           current level (or maze) number
                HIGH SCORE      current high score

        As you start the game, TAGS=50, POINTS=0, LEVEL SCORE=0, SCORE=0,
        and LEVEL=1.  As you get tagged, TAGS get decremented.  As you pick
        up treasure, POINTS gets incremented, based on the value of the
        treasure.  When you exit a level, the TAGS you have left are multiplied
        by the POINTS you picked up on that level to generate the LEVEL SCORE.
        This is then added to SCORE.  Then, as you start the next level, POINTS
        are set back to 0, LEVEL is incremented, and off you go.  LEVEL SCORE
        will retain the score for the previous level until you complete the
        current level.  When you run out of TAGS and lose the game, whatever
        POINTS you've earned on that level will get added to your score.

        You end a level by exiting out the right-hand side.  This usually
        involves removing one or more locks through the use of keys.  You pick
        up keys by moving over them.  When you are carrying a key, the image
        of the hero has a key across it.  You can only carry one key at a time.

        The goal of the game is to maximize your score.  The best way to do
        this is to maintain a high tag count, since the score is based upon
        both the amount of treasure you pick up on a level AND the number of
        tags that you have left at the end of the level.  This is especially
        critical on those levels that have LOTS of treasure.

        The first screen shows the high scores (white for 2-shot scores, yellow
        for 1-shot scores) and a continuously running demo of the game.  It
        also includes a brief set of instructions which can be scrolled up/down
        using the UP and DOWN cursor keys, as well as the PageUp and PageDn
        keys.  Pressing the ESC key while at the welcome/demo screen will exit
        the game. (The un-registered version of the game will display a
        shareware notice at exit from the game, which will stay until another
        key is pressed.)

        While at the welcome/demo screen, you can press:

                ESC     to quit
                K       to change the default 'game' control keys.
                N       to toggle the noise on/off (default is on).
                +       to increase the starting level number.
                -       to decrease the starting level number.
		1	to select only 1 shot off at time (scoring doubled).
		2	to select 2 shots off at a time (normal scoring).
                Up/Down and PgUp/PgDn to read the abbreviated help.

        Using the + and - keys you can select levels that don't exist. The
        program doesn't check until you actually try to play the level.  If you
        select a level that doesn't exist, the game will refuse to start. The
        level number you select using the + and - keys will be stored in the
        SNARF.SCO file.  Thereafter, that is the level at which the game will
        start until you modify it again.

        From the welcome/demo screen, pressing the space bar (or ANY other key
        besides the ones listed above) will move you on to the main playing
        screen. Then, pressing any key will start the game.

        The default keys for playing the game are:

                cursor keys     control your movement

                A               fires a shot to the left
                D               fires a shot to the right
                W               fires a shot upwards
                S               fires a shot downwards

                N               toggles noise on/off
                esc             exits the game back to the demo screen
                space           pauses the game
                F1              enters EDIT LEVEL mode (see below)

        Any other key will stop the motion of your player, if it's in motion.
        And yes, this IS one of those two handed games that requires a small
        level of ambidexterousnousnosity.  You move with your right hand and
        shoot with your left (unless you redefine those function keys).

        By the way, you can only have two shots off at a time (to make the
        game half-way challenging).  The original game only allowed one shot
        at a time, but this was probably too restrictive.

        Occasionally, you'll find yourself in the midst of a cloud of Snarfs,
        and your TAGS will plummet like a falling star.  You will also find
        yourself in dire peril when a Snarf is running along on your heels
        in the same direction as you, taging you with every move.  The best
        thing to do in this situation is to reverse direction for a moment to
        get a little space between you, then shoot it.  You will notice
        that Snarfs can see the shot coming towards them and will try to avoid
        it.  With practice, you can use this to your advantage.

        The high scores, default movement/fire keys and the starting level
        number are stored in a file called SNARF.SCO.  By deleting this file
        you can erase the high scores and place the keys and start level back
        to their default values.

II. CREATING NEW LEVELS

        You may modify old levels or create entirely new ones.  At any time
        during normal game play, pressing softkey F1 will take you into EDIT
        mode.  At this point, you can modify the current level and store it
        to disk, and the modified version will over-ride the built-in version
        in the future (the game always looks for a disk file before using the
        internal levels.)

        Levels are stored individually in files with filenames of the form:
                                SNARFLEV.xxx
        where 'xxx' is a right justified level number (filled with 0's on the
        left).  As an example, the first level would be called SNARFLEV.001
        and level 15 would be called SNARFLEV.015.  The game ONLY looks in the
        current directory for these files, so if you plan to create very many
        levels, or if you're installing the distribution disk with many levels,
        you probably will want to use the MKDIR command to create a special
        sub-directory for SNARF to keep your other directories from getting
        overly cluttered.

        The level number is NOT stored inside the file, it is ONLY in the
        filename.  This means that you can re-arrange the levels as you wish
        simply by copying and/or renaming the files.

        Upon entering the EDIT mode, the screen is re-drawn and a blinking
        box will appear.  This is the edit cursor.  It can be moved around
        using the cursor keys.  To place (or erase) objects, you must first
        move the cursor to the desired location.  Once there, you can use
        these keys to add/delete objects:

                W       toggles a WALL on/off
                P       places a snarf PIT
                K       places a KEY
                L       places a LOCK
                T       places a TELEPORT
                C       places a CROWN worth 100 points
                1       places a RING worth 10 points
                2       places a RING worth 5 points
                3       places a RING worth 1 point
                F       places a FIRST-aid station
                H       moves the HERO to the new location
                space   erases the object the cursor is on (except for HERO)
                N       allows you to NAME the level and enter you name as the
                                creator of the level.

        Additionally, while in EDIT mode, these keys are also available:

                ESC     aborts the edit, without saving the changes.
                F1      ends the edit, saving the changes in a specified level.
                F2      allows you to specify the colors for the "WALL".
                F8      clears entire level (except for outer wall and HERO).


        When pressing ESC to abort, you're first prompted to verify if you
        wish to throw away the changes.

        When pressing F1 to end the edit, the program scans the disk to find
        the next unused level number and presents that as the default choice.
        Accepting this choice ensures that you won't accidentally overwrite
        another level.  However, you may use backspace to modify the level
        number to whatever you wish before pressing ENTER.  You would do this
        if you're modifying a previously existing level rather than creating
        an entirely new one. The ESC key can also be used at this point to
        abort the END-EDIT action and remain in EDIT mode without writing
        anything to disk.

        F2 brings up another "menu" that allows you to choose the PRIMARY and
        SECONDARY colors that are used to draw the WALLS for this level.  There
        are 15 colors available, giving a possible 225 different color combin-
        ations for the WALLS.  Use the cursor keys to select PRIMARY or SECOND-
        ARY and to select a color for each.  A sample wall with those colors
        is kept updated.  Any key other than the four cursor keys will cause
        you to exit back to the normal EDIT mode, and the walls will be redrawn
        with the new colors.

        When placing snarf-pits, you must additionally specify the direction
        the snarf-pit should be facing.  You use one of the four cursor keys
        to do this.  Move the cursor to the location where you wish to place
        the snarf-pit.  Press the 'P' key.  There will be a prompt at the
        bottom of the display to "Select direction...".  At this point you
        should press the arrow key for the direction in which you wish the
        snarf-pit opening to point.

        When placing teleports, you not only have to specify a direction (only
        up or down is allowed for teleports), but also a destination location
        for the teleport.  First, move the cursor to the location at which you
        wish to place the teleport and press the 'T' key.  There will be a
        prompt at the bottom of the display to "Select direction...".  At this
        point you should press the up or down arrow key for the direction in
        which you wish the teleport opening to face.  (The hero will move into
        the teleport opening in the opposite direction.)  After selecting the
        direction, you will be prompted to "Select destination...".  At this
        point, move the cursor to the location to which you wish the Hero to
        be teleported upon entering the teleport.  This location should
        normally be at the place where a matching opposite teleport will be
        (or has been) placed, and usually directly above or below the one that
        you're currently placing.  However, the destination of a teleport CAN
        be anywhere on the level.  The destination should NOT be on top of a
        wall, although the program does not prohibit this.  (It is unsupported,
        however, and any bugs caused by this are considered to be a bug in
        the level design).  Pressing any key besides the cursor keys signifies
        that the cursor is at the desired destination.

        When creating a new level, the amount of treasure on a level is limited
        to 9903 points worth, since the "POINTS" display only allows four
        digits.  Also, if the player finishes a level with 9803 points and has
        50 tags while playing 1-shot, that gives him almost 1,000,000 points
	for the level.  That's probably sufficient (and all that will fit in
	the "Level Score" field).

        Here's some suggestions to help you create challenging, interesting
        levels:

                1) Avoid long, single-width passageways.  These are easy to
                   defend, since the snarfs have nowhere to go, and they're
                   boring to run through.  Passageways and areas that are three
                   or more wall-blocks wide are more challenging because the
                   snarfs have room to manuever to avoid your shots.

                2) Don't create a lot of levels with LOTS of treasure.  Most
                   levels shouldn't have more than about 2500 points at the
                   most.  The big-point levels should only come along once
                   out of every ten or so levels, as a big bonus for getting
                   that far.

                3) Also, first-aid stations shouldn't exist more often
                   than every three or four levels, unless the levels are
                   extremely difficult.

                4) Don't just draw random walls.  Try to think of a unique
                   design, or problem, to center your level around.  Then,
                   build from there.

                5) Don't just sprinkle a bunch of snarf-pits and teleports
                   around the level.  They should be an integral part of the
                   basic design of the level, and carefully placed to aid or
                   hinder in the completion of the level.

                6) Make sure there's a reasonable balance between the number
                   of locks on the level and the number of keys (and make sure
                   it can be completed!).

                7) The Hero should usually start on the left and MUST always
                   exit on the right.  A level is considered "over" when the
                   hero reaches the far right column.

        There MUST be at least one snarf-pit per level, or the game will refuse
        to play the level.

        To create an entirely new level, don't select it's level number at the
        welcome screen, since the game will refuse to start if the level
        doesn't exist. Rather, with any valid level number selected at the
        welcome screen, start the game (as if you were going to play that
        level).  Then, press F1 to enter EDIT mode.  Now, press F8 to clear
        the screen (this is only being done in memory at this point, so you're
        not affecting the real level).  Now, create your new level.  When done,
        press F1 to end the EDIT mode.  At this point the game will prompt you
        with the next NEW level number.  Simply pressing return at this point
        will store your new level as that level number, leaving the old level
        (that you started out with) unchanged.

        Good luck, and have fun playing the game and creating new, challenging
        levels!


III. REVISION HISTORY

	Rev 2.00 October 21, 1990
		Initial release of the completed Snarf game.

	Rev 2.01 November 10, 1990
		Minor fix to BEEP code that caused keyboard lock-up on some
		computers.

	Rev 2.02 November 22, 1990
		Still trying to fix BEEP on some computers.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2873

     Volume in drive A has no label
     Directory of A:\

    SNARF202 EXE     69031  11-22-90   8:21a
    SNARF202 DOC     21346  11-22-90   8:23a
    REGISTER DOC      2571  11-22-90   8:25a
    GO       BAT       117   2-05-92   6:50a
    PREVIEW  EXE      7347   4-18-91   1:15p
    FILE2873 TXT      1106  11-06-91   5:11a
    SNARF    SCO       110  11-06-91   5:10a
            7 file(s)     101628 bytes
                           56320 bytes free
