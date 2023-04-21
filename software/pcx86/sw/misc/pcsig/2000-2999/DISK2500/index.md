---
layout: page
title: "PC-SIG Diskette Library (Disk #2500)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2500/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2500"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BCLASS.DOC

{% raw %}
```


















                                          Bass Class

                                          Version 1.1


                                  A Bass Fishing Tutorial & Game

                                          By Dick Olsen






                A Few Words About ShareWare....


        Bass Class is made available to the general public under the concept
        of ShareWare. As such, you are free to copy it and distribute it to
        others provided that all accompanying files are distributed intact and
        unmodified, and that no fee is charged. The author retains ALL rights
        to the program. You are encouraged to try the program for a reasonable
        period of time to see if you like it. If it proves to be enjoyable,
        please consider supporting the efforts of the author by registering
        your copy of the program. Once you have done so, you are entitled to
        telephone support and can expect a prompt reply to correspondence.
        Once registered, you will also receive the latest version of Bass
        Class if the version you have is not the newest. In any correspondence
        regarding Bass Class, please be SURE to specify the following
        information:

                   * What version of Bass Class you have
                   * What brand and model computer you have
                   * How much memory your machine has
                   * The disks your machine has (hard, 2 floppies etc.)
                   * What kind of video card your machine has
                   * Any other type of cards your machine has


        To register your copy of Bass Class, send $15.00 along with the
        registration form at the end of this document to the author:

                       Richard Olsen
                       68 Hartwell Ave.
                       Littleton, MA. 01460

        Thank you for supporting my efforts!






                                      Introduction

        Bass Class is a fishing game, but it's actually a tutorial as well.
        Even if you've never been fishing in your life, you will find Bass
        Class both educational and fun to play. The game has three skill
        levels from which to choose. In NOVICE mode, helpful suggestions will
        guide you, and a full range of help on many fishing topics is only a
        mouse click (or keystroke) away. There's even a glossary of fishing
        terms built in. If you choose the INTERMEDIATE skill level, the fish
        will be harder to find and catch, but you've still got help available.
        If you think you're good, give PRO level a try! If you're a PRO,
        you're on your own, and the fish can be very finicky.

        You've got a modern, fully rigged bass boat at your command. Aboard
        the boat you'll find six different fishing rods at your disposal, over
        2300 lure/color combinations, a nifty LCD depth finder, a trolling
        motor, and lots of other accessories. With the powerful outboard
        motor, you can zip to the far end of the lake, or scoot back to the
        weigh in area before the six hour time limit expires. Better wear your
        life jacket though! If you're good enough (or lucky) you might even
        catch a fish big enough to be engraved upon the BASS CLASS HONOR ROLL
        PLAQUE where the top ten fish are listed.

        Bass Class comes complete with six different fishing areas from which
        to choose. Other lakes are available that can expand your choice of
        lakes (see the file ORDERFRM.TXT on your disk). If you already own
        BASSTOUR, its lakes will also work with Bass Class and visa versa.







                         What You Need To Run Bass Class

        Bass Class requires an IBM PC or compatible computer with at least
        512k of memory and an EGA video system. Because of the complexity of
        the game, there are no plans to create a CGA version. If all you've
        got is a CGA system, then you can still enjoy simulated fishing on
        your computer. Another program, BASSTOUR, is available for CGA users.
        See the order form at the end of this document or print out the file
        called ORDERFRM.TXT on the Bass Class distribution diskette for
        information on how to obtain BASSTOUR.

        You can run Bass Class from a floppy disk or from a hard disk. If you
        are lucky enough to have a VGA card and monitor, Bass Class will run
        fine on it also. Bass Class will not run on machines equipped with
        MCGA (i.e. PS-2 model 25) which is actually a subset of VGA. BASSTOUR,
        mentioned above, will run on MCGA equipped machines. If you have a
        mouse on your computer, you can use it to play Bass Class, although it
        is not necessary. It is highly recommended that you make a backup copy
        of your Bass Class diskette. Use the backup copy, and store the
        original diskette in a safe place. Since Bass Class requires a large
        amount of FREE memory, be sure that you do not have memory resident
        programs loaded before running Bass Class. Ramdisks, printer buffers,
        menu programs and other TSR's occupy large amounts of memory in your
        system, making it unusable by Bass Class. Bass Class may appear to run
        normally, but if there is not enough available memory, the program
        will halt. If this happens, a message will inform you of the fact that
        there is insufficient memory available for Bass Class. In this
        situation, Bass Class will not run properly on your system until you
        remove the offending software from memory.

        It is suggested that this file, BCLASS.DOC, which is on the Bass Class
        distribution diskette, be printed and read completely before playing
        the game. In this way, you'll have a more thorough understanding of
        what's happening on the screen as well as become more familiar with
        the equipment at your disposal. To print this file, insert the Bass
        Class diskette into drive A: of your computer and type:

                            COPY A:BCLASS.DOC PRN:

        If you have trouble, read the file called Q&A.TXT. It lists common
        questions and problems and what to do about them.






                       How To Run Bass Class From A Floppy Disk

        If your computer does not have a hard disk, at the DOS prompt,insert
        the your COPY of the distribution diskette into drive A: and simply
        type BassClas <enter>. After a few seconds, the title screen will
        appear. You will be asked to answer a few questions before the game
        starts. If your computer does have a hard disk, but you still want to
        run Bass Class from your floppy disk, insert the distribution diskette
        into drive A: and type A:<enter> at the DOS prompt, then type BassClas
        <enter>. Be sure that you leave the diskette in the drive while you
        are playing, and that it is NOT write protected. If you get real
        lucky, and catch a record sized fish, Bass Class will try to save your
        record catch on the disk. If the disk isn't there, or if it's write
        protected, Bass Class may halt, waiting for the disk to be available.

        Bass Class will allow you to save a game so that you can finish
        playing it at a later time. If you are running Bass Class from your
        floppy disk, there may not be enough disk space to save a game. To
        avoid "insufficient disk space" errors, it is suggested that you
        delete this file (BCLASS.DOC) from the disk you are using. BE SURE
        THAT YOU HAVE MADE A COPY FIRST!!! If you attempt to save a game
        on a disk with insufficient space, a message will appear to notify you
        that the game was not saved due to lack of disk space.

                      How To Run Bass Class From A Hard Disk

        To run Bass Class from your hard disk, first it must be installed. The
        distribution diskette has a batch file on it called "BCINSTAL.BAT"
        that will do this for you. To run this installation file, first insert
        the distribution diskette into drive A:. Then type A:BCINSTAL. The
        installation file will create a directory on your hard disk called
        BCLASS. Then it will copy all of the files from the floppy disk to the
        hard disk. After all of the files have been copied, the message
        "installation completed..." will appear on your screen, and Bass Class
        will automatically run. Bass Class can be run at any time thereafter
        by just typing BC <enter>.






                                 The Files on Your Disk

        The following files should be on your Bass Class distribution
        diskette. If you have downloaded Bass Class from a BBS system, they
        will probably appear within a single large, compressed file. If you
        obtained Bass Class from a ShareWare distributor, there may be more
        files than are listed here.

        These are the files REQUIRED to run Bass Class properly:

        BASSCLAS.EXE      The executable Bass Class main program.
        MAP.TRN           A translate file used to create the lakes.
        PROF.PIC          The picture of 'Professor Bass' from title screen.
        BCMAP.PIC         The image file.
        BBOARD.PIC        The blackboard picture from title screen.
        LCD.PIC           The Bass Class LCD graph.
        BIGFISH.TXT       The file of the 10 biggest fish caught.
        BIGSTR.TXT        The file of the 10 heaviest stringers.
        JOLLY.MAP         The map of Jolly Creek
        FIVEFING.MAP      The map of Five Fingers Lake
        NINE.MAP          The map of Lake Nine Killer
        SPECTAC.MAP       The map of Spectacle Pond
        SABLE.MAP         The map of Sable River
        ROCKY.MAP         The map of Rocky Pond
        TIPS.RAN          The file containing Dicks Hot Tips
        BOATDOCK.RAN      One of the HELP files
        BRUSH.RAN         HELP file
        GRASAREA.RAN      HELP file
        LCD.RAN           HELP file
        LILYPADS.RAN      HELP file
        LIVEWELL.RAN      HELP file
        LUREHELP.RAN      HELP file
        OPENWAT.RAN       HELP file
        OUTBOARD.RAN      HELP file
        ROCKAREA.RAN      HELP file
        RODHELP.RAN       HELP file
        STUMPS.RAN        HELP file
        TMOTOR.RAN        HELP file
        TULES.RAN         HELP file
        WATER.RAN         HELP file
        WEATHER.RAN       HELP file
        GLOSS.RAN         The Glossary of fishing terms used in HELP
        BCINSTAL.BAT      Batch file to help install Bass Class
        BC.BAT            Batch file to start running Bass Class

        These files are not required to run Bass Class, but they should be on
        your distribution diskette, and you should read them:

        README.DOC        A text file containing last minute stuff
        BCLASS.DOC        This file you're reading
        Q&A.TXT           Questions and answers to common problems
        ORDERFRM.TXT      An order form listing other software available from
                          the author.






                                     The Program

        Bass Class has three levels of play: Novice, Intermediate, and Pro.
        In each of the skill levels, you must weigh in your fish at the
        designated weigh in area before the end of the day's fishing. If you
        fail to weigh in before the six hours have elapsed, all of the fish in
        your live well are released, and you receive no credit for them. The
        total weight of your fish is accumulated at the end of the day. In
        Novice level, the fish are very easy to catch, and it's easy to catch
        a sizeable stringer and to set new records. Intermediate level
        requires a bit more searching and lure experimenting to fill your live
        well with decent sized fish. Pro level is just plain tough! The fish
        are more selective and harder to locate. In Pro mode, just as in
        reality, it can be pretty hard to catch your limit. In fact, it's not
        unusual to fish an entire day  without catching a legal fish. You'll
        need to be more alert to your current situation. The weather is
        important. Your boat may drift if it's windy, and you may end up stuck
        somewhere preventing you from making the weigh in time.

        In all skill levels, if you catch a fish larger than one of the top
        ten fish, a short ceremony will ensue and you will be established as a
        record holder. The records are kept in a file called BIGFISH.TXT on
        your disk, and the 10 largest fish can be viewed at any time. In
        another file on your distribution diskette, BIGSTR.TXT, Bass Class
        keeps records of the 10 heaviest stringers caught while fishing at the
        INTERMEDIATE or PRO skill levels. NOVICE fishermen are not permitted
        to set heavy stringer records since the fish are very easy to catch at
        the NOVICE level. A stringer is considered to be the accumulated
        weight of the fish in your livewell.

        After the title screen has cleared, a command window will appear at
        the left side of your screen. This window lists most of the commonly
        used commands and functions. For many of them, one of the characters
        in the command will be highlighted in red. The red character
        represents the single character keystroke required to activate the
        command. Some of the commands require a function key, or a key press
        while holding down the ALT key. If you are fishing at either the
        NOVICE or INTERMEDIATE skill levels, help is available at any time by
        pressing the H key or the ? key. At the PRO level, most of the help
        topics are not available. One of the HELP selections is COMMAND
        REFERENCE. Selecting this help item will list all of the available
        commands on your screen. This help topic is available at all skill
        levels. If you are using a mouse, you can simply click on the command
        to invoke it.






        Some of the items in the command window will be highlighted in yellow
        to signify that they are active. Across the top of your screen are
        four groups of digits. These represent the time remaining, the
        gasoline remaining, the state of your battery charge, and your
        accumulation of points. Points are added when you do something right,
        and subtracted when you flub up. The points are just a way to judge
        your actions. The REAL measure of your skill (or is it luck?) is in
        the total weight of the fish you weigh in.

                                     The Boat

        Your boat is equipped with a trolling motor, an LCD chart recorder,
        20 gallons of gasoline, batteries, a rod box, a tackle box, various
        emergency and safety devices, a live well, an anchor and of course a
        powerful outboard motor. As with a real bass boat, you need to
        exercise care and good judgment in the use of this equipment. Time is
        your biggest enemy, with the constant threat of obstacles such as
        stumps and rocks, running out of gasoline or killing your batteries
        contributing to your problems.

                                    The Fishing Areas

        Included on your Bass Class disk are six different bodies of water
        that you can fish. When the title screen appears, the names of the six
        fishing areas will be listed. To pick an area, just enter the
        corresponding area number.  Each fishing area is unique in itself.
        Every time you start a new day of fishing, the location of the fish
        will be different, and their sizes will vary greatly. Additionally,
        every time the game is started, the depths on a particular lake will
        vary slightly. When fishing, it is wise to keep a check on the time
        remaining, the charge level of your batteries, and how much gasoline
        you have left.

        You must weigh in your fish before the time has expired. To weigh in
        your fish, you must be close to the weigh in area. The weigh in area
        on each lake or river is signified by a yellow flag, usually near
        where your boat is placed when the day begins. Your boat is the light
        blue (cyan) colored boat and starts each fishing day adjacent to the
        weigh in flag.






                                     The Fish

        After the lake has been drawn on the screen, the program decides where
        fish should be placed. As in real fishing, bass seem to like to be in
        or near some sort of cover. Stumps, rocks, lily pads etc. will usually
        hold the most fish. Fish also seem to congregate along humps or drop
        offs elsewhere on the lake. Boat docks, moored boats and weeds are
        also good places to look. Fish can also be caught in the middle of
        the lake. Each fish has its own unique personality, which determines
        how easy the fish is to catch.

        Some fish are more aggressive than others. They also have lure type
        and color preferences. If a fish is very aggressive, it will usually
        strike almost any type or color of bait. Mildly aggressive fish are
        more selective. Sometimes fish will cluster in an area, so it's a good
        idea to cover an area of the lake thoroughly because several fish can
        be caught in the same place at times. If you catch a decent fish in an
        area, it's wise to make several casts to the same general area since
        fish of similar size often stick together. In Intermediate and
        especially Pro modes, lure choice and color are important. You can
        cover an area completely without catching any fish, then change bait
        types or colors and catch fish after fish in the area you just
        covered. The program typically places about 2000 in a lake. If your
        computer is an XT type, it may take several seconds for the fish to be
        placed. The potential exists to catch an 18 lb. plus fish on each
        lake.






                                 The Equipment

        * Trolling Motor (F2 or T)

        The trolling motor is raised or lowered by pressing the F2 key or
        by pressing 'T'. If the trolling motor is down, pressing F2 (or T)
        will raise it. If the trolling motor is up, pressing F2 (or T) will
        lower it. Starting the outboard motor will automatically raise the
        trolling motor if it is down. Likewise, lowering the trolling motor
        automatically stops the outboard motor. If you are using a mouse, just
        point at the words TROLL MOTOR in the command window and click on it.
        The trolling motor uses more time than the outboard motor to move your
        boat, and it also consumes battery power. Once you have fished a few
        times with Bass Class, you will begin to remember what 'short cut'
        keys to press. Mouse users can always use the keys if they wish. If
        you are using the trolling motor, the command is highlighted in the
        command window.

        * The Outboard Motor (alt-F9 or O)

        Pressing ALT-F9 (hold down the ALT key while you press F9) will start
        the outboard motor. Pressing 'O' will do the same thing. The outboard
        will NOT run if you are out of gas. If you have the sound enabled, you
        will hear a buzz that indicates that the motor is running. Remember
        that any time the outboard is running, you are consuming gasoline. The
        outboard motor can also be started by clicking on the OUTBOARD command
        with your mouse. The outboard motor has five speeds. When it's
        running, you can increase the speed by pressing the INS key or
        decrease the speed with the DEL key. You can also click on the speed
        you want with the mouse. There are two other things to be aware of
        when using the outboard motor. First, tournament rules state that when
        moving your boat under power of the outboard motor, you must wear a
        life jacket. Failure to wear your life jacket may cost you a fine and
        a citation. The life jacket usage is discussed later in this document.

        The second thing to be aware of when using your outboard motor are
        zones designated "NO WAKE". These areas are found on most lakes, and
        are indicated by the presence of a floating sign. Sometimes, you will
        be given a citation if you pass through these areas with your outboard
        motor running at a faster than allowed speed. If you pass through a NO
        WAKE ZONE at idle speed, you will not get a citation, nor will you if
        you are using the trolling motor. Receiving a citation not only costs
        you money, it costs time as well. The faster you run the outboard, the
        more gas you consume. On the other hand, moving the boat at a fast
        speed uses less time to travel long distances. As you increase or
        decrease the speed of the outboard motor, the sound will vary in
        pitch. If you run your outboard motor at the highest speed, be
        careful. If you hit an obstacle, your outboard may be damaged and out
        of service.






        * LCD Chart Recorder (alt-F1 or G)

        Pressing ALT-F1 (hold down the ALT key while you press F1) will turn
        on the LCD recorder if it is off, or turn it off if it is on. Pressing
        'G' will do the same thing. The LCD works almost like a real one. Its
        screen will show fish directly under the boat in the center of its
        screen, fish to the port side of the boat are on the left of its
        screen, and fish to the starboard side of the boat appear on the right
        side of it's screen. To select the LCD when using a mouse, just point
        at the LCD ON button and click. Clicking on the OFF button will turn
        off then LCD. You can also point the mouse cursor at the LCD command
        then click the left mouse button to turn on or off. The LCD recorder
        is continuously updated as you move the boat around the screen. It
        uses battery power, so use it sparingly. As with other commands, mouse
        users can also use the keyboard to control the LCD.

        * Rod Box (F9 or R)

        Your bass boat has a rod box containing six different types of rods.
        Each of these rods has certain advantages or disadvantages. For
        example, a spinning rod with 6 pound test line will allow you to cast
        your lure farther than a flippin rod (saving excessive boat moving)
        but the light line may cause you to lose a few fish. Some of the
        differences are obvious, others are not. You start each day of fishing
        with no rod selected. Before you can begin casting, you must select a
        rod. You can change rod types at any time. The F9 (or 'R') key allows
        you to select a rod. Once you have the rod box window on the screen,
        the up and down arrow keys will cause the hilite bar to move up or
        down highlighting the rod selection. After you have the hilite bar
        positioned over the rod you'd like to use, press the ENTER key to
        reselect the highlighted rod. If you have a mouse, point at the SELECT
        ROD command and click. When the ROD BOX WINDOW appears, click on the
        rod you'd like to use. If you are satisfied with your selection, press
        the right mouse button to resume the game. If you change your mind
        after clicking on a rod type, just point to the rod you want and click
        again. You can "load up" all six rods with different baits, then
        change rods thus changing baits quickly, just like in real fishing.






        * Tackle Box (F10 or B)

        At your disposal is a six drawer tackle box containing a selection of
        lures we all wish we had. Many lure types and colors are there for
        your use. Pressing F10 (or 'B') will give you access to the tackle
        box. If you are using a mouse, select the tackle box from the command
        list by pointing to the TACKLE BOX command and pressing the left
        button on the mouse. The  Tackle Box consists of three windows. The
        first window allows you to choose which drawer to look in. Each drawer
        is neatly organized (I wish MY tackle box was this neat) into bait
        types. For example, crankbaits are in one drawer, spinnerbaits in
        another, plastic worms in another etc. Use the mouse to point at and
        click on which drawer you want, or use the UP or DOWN arrow keys to
        move the highlight bar to where you want it. After that, the drawer
        contents will appear in another window. In this window, you select the
        specific bait you want to use.

        Once you choose your bait, a third window will appear that lists the
        available colors for that particular lure. After you select the color,
        the tackle box windows will disappear. If you forget what bait you are
        fishing with, the STATUS command will tell you. Use of the LIST STATUS
        command is discussed later. Over 2300 lure type and color combinations
        are possible with Bass Class.

        * CHK LIVEWELL (F3 or L)

        Your boat contains an aerated live well that holds the five largest
        legal sized (12 inches or better) fish you have caught. You can
        examine the contents of your live well at any time by pressing F3 or
        L. If you have a mouse, just click on the CHK LIVEWELL command in the
        command window. The aerator will save your fish if you run it enough,
        but it does use battery power. Failure to use your aerator enough may
        cause some of your fish to die, costing you a one pound penalty for
        each dead fish weighed in. The live well will hold a maximum of five
        fish. Every legal fish you catch will be added to the live well until
        it contains five fish. After that, if you catch a fish larger than the
        smallest fish currently in the live well, the smallest fish will be
        released, and the fish you just caught will replace it in the live
        well. This way, the live well always contains the five largest fish
        you have caught.

        When you activate the CHK LIVEWELL command, a window will appear on
        your screen that shows how many fish are in the live well, what the
        total weight of those fish is, and reports the status of the aerator.
        To resume fishing, press the ESC key or the right mouse button.
        Examining the contents of your live well uses time, but no energy is
        consumed.






        * Life Jacket (alt-F2 or J)

        You must wear a life jacket any time you are moving the boat with
        the outboard motor. Failure to do so may cost you time and a citation
        with an associated fine. Wearing your life jacket is a bit of a
        nuisance since it restricts your casting distance a little. The life
        jacket is selected by pressing ALT-F2 or by selecting the appropriate
        item with the mouse.

        Taking off your life jacket uses a little time, as does putting it on.
        If you are wearing your life jacket when you make this selection, it
        will be removed. If you are not wearing it, it will be put on.
        Pressing 'J' will also execute this command. The status of your life
        jacket is indicated by a highlighted yellow block in the command
        window. If on, the yellow highlight will appear, if the words LIFE
        VEST are not highlighted, it is not being worn.

        * Anchor  (F8 or N)

        The anchor is of no use unless you are fishing in Pro mode. In Pro
        mode, the anchor will prevent your boat from drifting. Don't forget to
        raise the anchor before trying to move the boat. Pressing F8 (or N)
        lowers the anchor if it is up or raises it if it's down. If you are
        using a mouse, just click on the ANCHOR command. If the anchor is
        down, the command will be highlighted in yellow. As with most things
        in fishing, raising or lowering the anchor takes time.

        * Paddle (alt-F3 or P)

        Although the paddle can be used to move the boat at any time, most of
        us think of it as a last resort. The paddle uses quite a bit of time,
        but could be used to get you to the weigh in area before the allotted
        time has elapsed if both your battery was dead and you were out of
        gas. ALT-F3 or 'P' selects the paddle from the keyboard, and you can
        select it with the mouse also. As with the trolling motor or the
        outboard motor, selecting the paddle turns off any other form of
        propulsion that may be active. If you are using the paddle, the PADDLE
        command will be highlighted.






        The next section explains how to move the boat, scroll the screen
        and make casts:

        * Moving the boat

        Boat positioning is crucial to fishing success both in reality and
        while playing Bass Class. The Q, W, E, A, D, Z, X, and C keys will
        move the boat. The Q key will move the boat to the upper left, the W
        key moves the boat straight up, the E key moves toward the upper
        right, the A key moves to the left, the D key moves to the right, the
        Z key moves to the lower left, the X key moves straight down, and the
        C key moves the boat toward the lower right. Each time you move the
        boat, time is consumed. The chart below should help you to understand
        boat movement:


                                      ^
                              \       |        /
                               Q      W      E

                            <--A             D-->

                               Z      X      C
                              /       |       \



        There is one other key you should know about when it comes to moving
        the boat. The '-' key will cause the boat to back up. If you are using
        the trolling motor, battery power is also used. The outboard motor
        uses less time to move your boat, but also consumes gasoline. The
        paddle uses the most time of all, but obviously uses neither battery
        power or gasoline. The boat cannot be moved off the screen.

        * Rotating the boat

        The left and right arrow keys, if pressed while holding down the
        CTRL key will cause your boat to rotate either clockwise or counter-
        clockwise while maintaining it's current location on the screen.
        Rotating the boat allows for the best cast positioning and also uses
        less battery power, gas and time. Obviously, to rotate your boat you
        must have the outboard motor running, the trolling motor running, or
        be using the paddle.






        * Scrolling the screen

        When Bass Class first draws the lake on your screen, what you see
        is really only about one fourth of the lake. The initial screen
        represents the upper left corner of the lake. You can scroll the
        screen (the 'lake') to the right, left, up or down to give you access
        to the whole lake. Press SHIFT-LEFT ARROW to move the screen to the
        left, SHIFT-RIGHT ARROW to move the screen to the right, SHIFT-UP
        ARROW to move the screen up, and SHIFT-DOWN ARROW to move the screen
        down. Scrolling the screen does not uses any battery power, gas or
        time. The arrow keys on the NUMERIC KEYPAD are the ones you should use
        to scroll. Make sure too, that your NUM LOCK is not on. The boat
        cannot be scrolled off the screen.

        NOTE: Some computers may exhibit keyboard differences which prevent
        scrolling the screen using the method described above. To scroll the
        screen on one of these computers, try using the 2, 4, 6, and 8 keys at
        the top of your MAIN keyboard, but do not press SHFT with them.
        Pressing 2 will scroll the screen down, 4 will scroll it left, 6
        will scroll it right, and 8 will scroll it up.






        * Casting (F5 or C)

        Casting consists of two parts. The cast itself, and the retrieve. To
        make a cast, first you need to have a rod selected. Once a rod has
        been selected, each cast you make will assume the same rod is being
        used. Cast mode is entered by pressing ALT-C (F5 will also work), or
        by selecting the 'START CASTING' command with the mouse. You can
        easily determine if you are in cast mode because the bottom line of
        screen will contain some brief casting instructions, which will
        disappear when you exit cast mode. If you are using a mouse, move the
        mouse cursor (the white arrow on the screen) to the place you want the
        cast to go. Then, press the left button on the mouse. A line will
        appear on your screen between the boat and where the arrow is
        pointing. If the sound is turned on, a squirt noise will accompany the
        line on the screen. The distance that you can cast will vary depending
        on the type of rod you have selected, and whether or not you are
        wearing a life jacket. The skill level you are playing at also helps
        to determine the maximum cast distance. A novice cannot cast as far as
        a pro. You cannot cast toward the rear of the boat. If you are not
        using a mouse, a small + symbol will appear somewhere near your boat
        when you enter cast mode. Use the up, down left and right arrow keys
        to then position your cast. You can also move the cast marker
        diagonally by using the HOME, PgUp, END, and PgDn keys. Once you have
        positioned the cast marker (the + symbol) where you want it, press
        the space bar to make the cast.

        If a fish strikes, the message FISH ON! will pop onto your screen,
        followed by other information windows about the fish. These messages
        will stay on the screen for short time, then disappear. They will
        disappear immediately if you move the mouse or press a key while they
        are displayed. This is to speed up the game if you desire. Casting too
        close to land will sometimes cause your bait to snag. Casting at
        stumps, docks, other boats, lily pads, rocks, etc. will normally not
        cause you to snag if you are using an appropriate bait for the type of
        cover you are fishing.

        * Retrieving your bait

        If a fish does not strike immediately after your cast hits the water,
        you must RETRIEVE the bait. RETRIEVING is accomplished by holding the
        space bar down, or by repeatedly pressing the left mouse button. If
        you're using a mouse, you can hold down the mouse button after casting
        to quickly retrieve the bait. Fish may strike at any time while
        RETRIEVING. Stop RETRIEVING when the bait reaches the boat unless you
        want another cast to go to the same place.






        * Weighing In Your Fish (ALT-W)

        Weighing in your fish is almost as important as catching them in the
        first place. Each lake has a weigh in area signified by a bright
        yellow flag. To weigh in, you must proceed to the weigh in area and
        dock your boat as close to the flag as possible before the six hour
        time limit has expired. When you think your boat is close enough to
        the flag, press ALT- F8 (or ALT-W) to begin the weigh in procedure. If
        you are not close enough to the weigh in area, a message will appear
        to let you know. If you are within the weigh in area, the message "Are
        you sure you want to weigh in now?" will appear. A "Yes" reply will
        start the weigh in procedure, any other reply will abort the weigh in
        process. Fish can be weighed in at any time, but once you do, you are
        done fishing for that day. A message will appear on your screen that
        say's "Beginning weigh in...". After a few seconds, your statistics
        for the day will pop onto the screen. It is a good idea to allow
        yourself plenty of time to get to the weigh in area. You never know
        what might happen on your way back! If you have a printer connected,
        you can make a listing of the day's fishing results. Just press P when
        so instructed to get your print out.

                             Miscellaneous Commands

        * HELP ME!  (H or ?)

        Pressing H, the ? key or clicking on the HELP ME! command will display
        a list of topics for which help is available. Help on subjects such as
        fishing around boat docks, in rock piles, or bait selection (to name
        just a few) is available. The inexperienced angler will find the
        GLOSSARY of FISHING TERMS a great help. Additionally, there is a
        COMMAND REFERENCE to remind you of the keys to press for various
        things. As a bonus, there is an entry titled 'Dick's HOT Tips' which
        will display a randomly selected fishing or boating tip. Selecting the
        COMMAND REFERENCE, the GLOSSARY, or the HOT Tips will not cost you
        anything, but help on other topics will cost you a few points. You can
        click on the help topic with your mouse, or use the Up/Down arrow keys
        to move the highlight bar if you're not using a mouse.

        If you are fishing in the PRO skill level, only the COMMAND REFERENCE,
        the GLOSSARY of FISHING TERMS, and the HOT TIPS are available since it
        is assumed that as a PRO, you don't need much assistance. NOVICE skill
        level also has suggestions that will appear if Bass Class decides you
        need some guidance.

        * Contour Map (M)

        Pressing 'M' will display a small contour map of the lake you are
        fishing. You can also click on the command with your mouse. The map
        consists of shaded areas that represent the various depths in the
        lake. Shallow areas are indicated by the lighter colors while deeper
        areas are indicated by the darker colors. The weigh in area is shown
        as a bright yellow square and the current location of your boat is





        represented by a blinking black/green square. Consulting the contour
        map uses 15 seconds of your time each time you use it.






        * Sound ON/OFF (F4)

        This command is executed by pressing F4, or by clicking on it with
        your mouse. The status of the sound is indicated by a yellow
        highlighted box in the command window. If the sound is ON (the
        default), selecting this command will turn it off. If the sound has
        been turned off, this command will turn it back on. It can be changed
        at any time. When the sound is on, a 'squirt' noise will be heard as
        you make each cast, and a buzzing sound will be heard when the
        outboard motor is running. When you hook a fish, another distinct
        sound will be heard.

        * List Status (alt-F10 or S)

        This command is executed by pressing ALT-F10 (hold down the ALT key
        while you press F10), by pressing "S", or by clicking on it with the
        mouse. A window will pop up on your screen with lots of information
        about the rod you have selected, the lure type and color, time
        remaining etc. It costs you no time, battery power or gasoline to
        execute this command.

        * Add Fish Formula to Bait (F)

        You can add Fish Formula to your bait by pressing the F key. A short
        message will appear on the screen to notify you that Fish Formula
        was used. Each time you add a shot of Fish Formula, it costs you ten
        seconds in time. Sometimes, adding Fish Formula seems to have a great
        deal to do with your success. You'll have to be the judge! Each shot
        of Fish Formula lasts for about 6 or 7 casts. You must have a rod
        selected, and that rod must have a bait attached to benefit from this
        command.


        * Weather Report (ALT-F4)

        This command will display a weather report on your screen. It is
        executed by pressing ALT-F4 or by clicking on it with the mouse. The
        weather is of little interest unless you are fishing at the Pro level.
        Wind speed and direction are important in that your boat may drift if
        the wind is strong enough. The boat will drift in the direction that
        the wind is blowing. Be aware that it is possible to drift into rocks
        or other obstacles that can cost you some kind of penalty. It is also
        possible that your boat can become stuck as a result of drifting. If
        you get stuck, it is sometimes (but not always) possible to run your
        boat in the opposite direction from that which it was moving when it
        became stuck. If you become stuck, and cannot get out, keep trying.
        You can never tell when someone might come along to help! There is no
        alternate key to access this command.






        * Quitting the Game  (ALT-Q)

        Pressing ALT-Q will cause the message "Are you sure you want to QUIT?"
        to appear. Answering "Y" will terminate the game, any other key will
        allow you to continue playing. Any record sized fish that you have
        caught will be recorded if you quit without weighing in, but you must
        weigh in to be credited with a heavy stringer record.

        * View BASS CLASS Honor Roll (V)

        Pressing the V key will display the weights of the 10 largest fish
        caught, who caught them, where and when they were caught. After you
        have looked at the "BIG FISH HONOR ROLL", press any key to see the
        "HEAVY STRINGER HONOR ROLL". This represents the ten heaviest
        stringers on record. If you are fishing at the NOVICE level, you can
        still set BIG FISH records, but you are not permitted to set HEAVY
        STRINGER records. When you have finished viewing the heaviest
        stringers, press any key to continue what you were doing.

        In PRO or INTERMEDIATE skill levels your total weight may qualify you
        for a record stringer. If so, your name, total weight, date, and the
        name of the lake or river will be saved, and your record will become
        one of those to beat! The big fish records and the heavy stringer
        records can be printed when you see them displayed on the screen. To
        do this, first make sure your printer is ready, then press P when you
        see the honor roll plaque that you want to print.

        * The - (minus) Key

        Pressing the '-' key will cause the boat to go backwards.

        * Saving a Game (ALT-S)

        You can save a game and continue playing it at a later time. This
        can be done at any time by holding down the ALT key while you
        press the "S" key. The status of the game will be saved on your disk
        in a file called BCLASS.SAV. This file occupies about 60k of disk
        space so be sure that your disk has enough room for the file. If you
        have saved a game, it can be restored by selecting "R" when you are
        asked what area you would like to fish on the title screen at the
        start of a game. Clicking on the SAVE GAME command in the command
        window will also save the game for you. Only one game may be saved.

        * BOSS Mode (ALT-Z)

        This was not my idea! Many people requested it so here it is. You
        know what to use it for. When you press ALT-Z, the lake map disappears
        and is replaced with a dummy disk directory listing. The lake map will
        reappear and the game will continue when you press any key.

        * Changing Lakes (ALT-L)

        You can change what lake you want to fish on by pressing ALT-L.
        If you are in the CAST MODE, this command will not function, and
        a message will pop onto your screen asking you to exit cast mode
        first. Assuming you are not in cast mode, a list of available
        fishing areas will appear on your screen. Type the number
        corresponding to the new area you want, then press ENTER. If you
        change your mind and do not want to change lakes, just press ENTER
        without having typed in a number. When the new lake is drawn on the
        screen, all of your fish are released, and all equipment is set to
        its default state, just as if you had just started the game.











                          SUPPORT CATCH AND RELEASE!







                            A Few Choice Words....

        * Wear your life jacket at all times. Put it on at the start of
          each day of fishing. (Good advice in real fishing too!)

        * Start the live well aerator as soon as the first fish is added to
          it. This will usually save you a penalty at weigh in time.

        * Work a likely spot thoroughly. Make several casts to the same area.
          Applying Fish Formula sometimes helps.

        * If you're not catching fish, try another bait or change colors.
          Often, a totally different type of bait will produce results.

        * Allow plenty of time to return to the weigh in area.

        * Use the ROTATE keys. They use less time and energy than moving the
          boat.

        * If you run into rocks, stumps etc. back your boat out in the
          opposite direction, or use the '-' key.

        * Learn to recognize areas that might cause you to snag. Lost lures
          cost you time and money, so choose baits that are appropriate for
          the structure you are fishing.

        * Use the contour map. It will help you find the deep holes, and make
          it easier to find your way back to the weigh in area.

        Credits:

        * Nels Anderson for allowing me to use some of his marvelous
          programming tools. Without him, Bass Class could not have been
          written. Nels is the wizard that brought us MAHJONGG, EGATREK,
          SHOOTING GALLERY and SUPER FLY (among others). You haven't seen an
          EGA, VGA or MCGA program until you've seen one of his! Nels also has
          a program available called BassMap, which allows you to create your
          own lakes for use with Bass Class. These lakes can also be used if
          you have BassTour. His address is:

                             Nels Anderson
                             92 Bishop Drive
                             Framingham, MA 01701

          BassMap costs $10 plus $2 for postage. It can also be downloaded
          from the Xevious BBS mentioned below.

          Good Fishing!






          Dick Olsen







        Be sure to try the Xevious BBS system in Framingham, MA. The newest
        version of Bass Class is always available there first! You can also
        leave me messages there. Leave notes to Dick Olsen, then check again
        in a few days for a reply. The number for Xevious is (508)-875-3618.
        Xevious has 1 gigabyte of disk space (and growing), with HST modems on
        most of the lines.






        *********************************************************************
        *                       DISCLAIMER OF WARRANTY                      *
        *********************************************************************

        This software is sold "as is", without any warranty as to performance
        or any other warranties whether expressed or implied. Because of the
        many hardware and software environments into which this program may
        be used, no warranty of fitness for a particular purpose is offered.
        The user must assume the entire risk of using the program. Any
        liability of the seller will be limited exclusively to product
        replacement or the refund of the registration fee.


        *********************************************************************
        *               ASSOCIATION OF SHAREWARE PROFESSIONALS              *
        *********************************************************************

        This software is produced by Richard Olsen who is a member of the
        Association of Shareware Professionals (ASP). ASP wants to make sure
        that the shareware principle works for you. If you are unable to
        resolve a shareware-related problem with an ASP member by contacting
        the member directly, ASP may be able to help.

        The ASP Ombudsman can help you resolve a dispute or problem with an
        ASP member, but does not provide technical support for members'
        products. Please write to the ASP Ombudsman at P.O. Box 5786,
        Bellevue, WA 98006, USA or send a CompuServe message via easyplex to
        ASP Ombudsman 70007,3536.

                         _______
                    ____|__     |               (R)
                 --|       |    |-------------------
                   |   ____|__  |  Association of
                   |  |       |_|  Shareware
                   |__|   o   |    Professionals
                 -----|   |   |---------------------
                      |___|___|    MEMBER





                      BASS CLASS PROBLEM REPORT FORM

        If you encounter a problem with Bass Class, I'd like to know about
        it. Please take a few minutes to fill out the following form, then
        mail it to me. I will do my best to correct the problem. If a new
        version of Bass Class is created as a result of the problem you have
        reported, I will send you the new version with the problem
        corrected.

        Your Name_______________________________________________________

        Street Address__________________________________________________

        City, State, ZIP________________________________________________

        Day time Phone #________________________________________________

        Evening Phone #_________________________________________________

        Best time to call_______________________________________________

        What version of Bass Class do you have?_________________________

        Where did you get it?___________________________________________

        What brand of computer are you using?___________________________

        What Model of computer__________________________________________

        How much memory does your computer have?________________________

        What brand of video card does your computer have?_______________

        How much memory is on the EGA card?_____________________

        What other cards are in your computer?

        ___________________________________________________________________

        Are you using a mouse?___________________
        Does your computer have a hard disk?__________More than one?_______
        Describe the problem. What were you doing when it happened? What
        mode were you operating in? Were you out of gas or was the battery
        dead? Was the LCD recorder on? Was the sound on?
        ___________________________________________________________________

        ___________________________________________________________________

        ___________________________________________________________________

        ___________________________________________________________________





                          Bass Class Registration Form v1.1

        Dear Dick,

        Enclosed find my check or money order for $15.00 (U.S. funds). Please
        register me as a Bass Class user and send me the latest version if
        the version I have is not the latest.

        Thanks!

        YOUR NAME________________________________________________

        STREET ADDRESS___________________________________________

        CITY, STATE, ZIP_________________________________________

        COUNTRY__________________________________________________

        Bass Class Version you have______________________________

        COMMENTS_________________________________________________

        _________________________________________________________

        _________________________________________________________
                             Olsen Outdoors Software Order Form

        Enclosed please find cash, check or money order (U.S. funds) for
        $___________. Please rush me the software I have indicated.

        _____ Copies of BassTour @$15 for 5 1/4 inch disks, $17 for 3 1/2 inch
        disks. Similar to Bass Class, but you're fishing a 3 day tournament
        against 30 of the top names in bass fishing. Comes complete with six
        areas to fish, all different than the Bass Class lakes (they work with
        Bass Class too). Works on VGA, EGA, MCGA, CGA, and Hercules graphics
        systems. Requires 512k of memory. Mouse support is provided.

        _____ Copies of Lakes #1 @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch
        disks. This disk contains an additional seven fishing areas that you
        can add to your BassTour or Bass Class game.

        _____ Copies of Lakes #2 @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch
        disks. This disks contains another seven fishing areas for use with
        BassTour or Bass Class. Each is different.

        _____ Copies of Lakes #3 @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch
        disks. NEW! Just released 1/1/91. Seven more brand new (hardly ever
        fished) areas to fish. Compatible with both BassTour and Bass Class.
        Using Lakes #1, Lakes #2, and Lakes #3 will bring 21 more fishing
        areas to your BassTour or Bass Class game, giving you 27 places to
        choose from!

        _____ Copies of FishBase ][ @$15 for 5 1/4 inch disks, $17 for 3 1/2
        inch disks. FishBase ][ is a fishermans log book and data base program
        that also gives you lots of statistics about the fish you catch. For
        color or monochrome systems. Requires 256k of memory.

        _____ Copies of BassTips @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch
        disks. BassTips is a collection of over 100 fishing tips. Complete
        with a tip editor so you can add your own tips. You can configure the
        tips to 'POP' onto your screen. For color or monochrome systems.

        _____ Copies of TIKLER @$10 each for 5 1/4 inch disks, $12 for 3 1/2
        inch disks. TIKLER is an appointment/reminder program that is FAST as
        well as easy to use. Reminds you of upcoming events such as birthdays,
        meetings etc. You can set how many days in advance you want to be
        notified. Handles up to 600 events and has a built in perpetual
        calendar. For color or monochrome systems. Requires 256k of memory.

        Sub Total $_______________   Mail your order to:  Olsen Outdoors
                                                          68 Hartwell Avenue
        Shipping  $2.00 per order                         Littleton, MA  01460
                                                          U.S.A.
        TOTAL     $_______________

        Your Name_______________________________________________________

        Street Address__________________________________________________

        City____________________________________________________________

        State/Province_________________________ZIP Code_________________
```
{% endraw %}

## BIGFISH.TXT

{% raw %}
```
CRYSTAL LAKE
4.00
DICK OLSEN
8/13/90
BOGUS POND
4.00
DOUG LEROY
8/17/90
TURKEY ROCK RESERV
4.00
PIERRE FORTIN
8/14/90
BILLIARD LAKE
4.00
CURT BOUSSIERRE
8/17/90
BILLIARD LAKE
4.00
GEORGE MEDDERS
12/13/90
BOGUS POND
4.00
CHUCK MEDINE
8/17/90
BOGUS POND
4.00
DICK OLSEN
8/17/90
BILLIARD LAKE
4.00
DICK OLSEN
8/17/90
BOGUS POND
4.00
DICK OLSEN
8/17/90
BOGUS POND
4.00
J.R. MEAD
8/17/90
```
{% endraw %}

## BIGSTR.TXT

{% raw %}
```
TURKEY ROCK RESERV
10.00
SHELDON ROCKWELL
8/13/90
CRYSTAL LAKE
10.00
BILL BOSTON
8/13/90
BOGUS POND
10.00
BRIAN GAFFNEY
8/17/90
BILLIARD LAKE
10.00
BOB LOVELACE
8/17/90
BILLIARD LAKE
10.00
DICK OLSEN
8/13/90
BILLIARD LAKE
10.00
STEVE WOLD
8/13/90
BILLIARD LAKE
10.00
DON LANGENHEIM
8/13/90
BILLIARD LAKE
10.00
DAN HOWARD
8/13/90
BILLIARD LAKE
10.00
DAVE LEROY
8/13/90
BILLIARD LAKE
10.00
JOHN MEAD
8/13/90
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
                        Olsen Outdoors Software Order Form

_____ Copies of Bass Class @$15 for 5 1/4 inch disks, $17 for 3 1/2 inch 
disks. NEW! A bass fishing game that also a great learning tool. All the
features of BassTour but not a tournament situation. Requires EGA and 512k
of memory. Lots of fun, highly educational. On screen help and glossary.

_____ Copies of BassTour @$15 for 5 1/4 inch disks, $17 for 3 1/2 inch disks.
BassTour is the ULTIMATE fishing game for your computer. You control a FULLY
rigged bass boat. Over 2300 lure/color combinations. Six different rods.
Trolling motor, LCD chart recorder and lots more. Comes complete with six
different areas to fish. Works on VGA, EGA, MCGA, CGA, and Hercules graphics
systems. Requires 512k of memory. Mouse support is provided, but not
necessary. Fish a 3 day tournament against 30 of the top names in bass
fishing!

_____ Copies of Lakes #1 @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch disks.
This disk contains an additional seven fishing areas that you can add to your
BassTour or Bass Class game.

_____ Copies of Lakes #2 @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch disks.
This disks contains another seven fishing areas for use with BassTour or
Bass Class.

_____ Copies of Lakes #3 @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch disks.
Each is BRAND NEW (released 1/1/91) and hardly been fished! Use of Lakes #1,
#2, and #3 will expand your BassTour or Bass Class game to 27 lakes! 

_____ Copies of FishBase ][ @$15 for 5 1/4 inch disks, $17 for 3 1/2 inch
disks. FishBase ][ is a fishermans log book and data base program that also
gives you lots of statistics about the fish you catch. For color or monochrome
systems. Requires 256k of memory.

_____ Copies of BassTips @$10 for 5 1/4 inch disks, $12 for 3 1/2 inch disks.
BassTips is a collection of over 100 fishing tips. Complete with a tip editor
so you can add your own tips. You can configure the tips to 'POP' onto your
screen. For color or monochrome systems.

_____ Copies of TIKLER @$15 each for 5 1/4 inch disks, $12 for 3 1/2 inch
disks. TIKLER is an appointment/reminder program that is FAST as well as easy
to use. Reminds you of upcoming events such as birthdays, meetings etc. You
can set how many days in advance you want to be notified. Handles up to 600
events and has a built in perpetual calendar. Passwords and encryption are
supported. For color or monochrome systems. Requires 256k of memory.

Sub Total $_______________   Mail your order to:  Olsen Outdoors
                                                  68 Hartwell Avenue
Shipping  $2.00 per order                         Littleton, MA  01460
                                                  U.S.A.
TOTAL     $_______________(cash, check or money order
                           U.S. Funds please)

Your Name_______________________________________________________ 

Street Address__________________________________________________              
 
City_____________________________State_______ZIP________________      





```
{% endraw %}

## Q&A.TXT

{% raw %}
```

                  Common Questions and Problems With Bass Class

       The following represents the most common questions and problems
       encountered with Bass Class. Before calling or writing  us, please
       read the instruction manual thoroughly. The instructions are
       contained in a file on your disk called BCLASS.DOC.We have found that
       many questions can be answered right there.

       [1]
       PROBLEM: "I cannot make the program scroll to another section  of
                 the lake".

       SOLUTION:  First,  make  sure  the  NUM  LOCK  is not set on your
                  keyboard. Then, be sure  you  are  using  the  NUMERIC
                  KEYPAD  ARROWS, not the separate cursor control arrows
                  on  101  key enhanced keyboards. Remember to press the
                  SHIFT key while you press the arrow keys.

                  On  many  computers,  in  particular  the  early Tandy
                  machines,  there  was  an  incompatibility  with   the
                  keyboard.  These  machines  would   not   generate   a
                  different  keycode  when the NUMERIC KEYPAD arrow keys
                  were shifted. This  problem  occurs  on  some  'clone'
                  machines  too.  This  can usually be remedied by using
                  the 2,4,6 and 8 keys in  the  top  row  of  your  MAIN
                  KEYBOARD. Do not use the SHIFT  key  when  using  this
                  method.

       [2]
       PROBLEM:  "Sometimes  'garbage'  appears when I try to scroll the
                  screen or select a rod or bait".

       SOLUTION: Bass Class needs lots of FREE memory. Just  because  your
                 computer  has 640k or more of memory does not mean it's
                 all free for Bass Class to use. We have found that memory
                 resident programs (TSR'S) are one of the main causes of
                 this problem. Programs like RAM DISKS, PRINTER BUFFERS,
                 KEYBOARD  ENHANCERS  and  MENU  programs  should not be
                 loaded before running Bass Class. These  programs  occupy
                 memory  space  even  when  not  running, thus making it
                 unavailable to Bass Class.

                 Another occasional cause of this  problem  is  lack  of
                 sufficient  memory  on  your EGA card.
                 Many of the older EGA cards only had 64k or  128k
                 of  video memory. They should have 256k to properly run
                 Bass Class.


       [3]
       PROBLEM: "The program tries to start, but then stops."

       SOLUTION: One of the main causes of this problem is too many open
                 files. DOS only allows 15 open files per process. Check
                 your  CONFIG.SYS  file  to  be  sure  it  contains  the
                 following two lines:

                                  FILES=20
                                  BUFFERS=20

                 Bass Class tries to open several files when it starts. It
                 then  assumes  they  were  open for its use. If in fact
                 they were NOT opened, the program may hang waiting  for
                 them  to  be  available.  The two lines described above
                 will help prevent this from happening.

       [4]
       PROBLEM: "I cannot save a game to the disk."

       SOLUTION: Many people try to save games (to be played  later)  on
                 the  original  distribution diskette. A saved game uses
                 about 60k of disk space, and the distribution  diskette
                 must have at least that much free if you expect to save
                 a  game.  Also,  make sure you're not in CAST MODE when
                 trying to save a game with the ALT-S key combination.

                 Sometimes, people have a clock or some other  interrupt
                 driven program running at the same time they're running
                 Bass Class. Since these programs use interrupts, they can
                 'steal'  time  from Bass Class. If one of these prrograms
                 decides to 'steal' its time while Bass Class  is  writing
                 to the disk, the resultant file may be damaged. This is
                 because  DOS  itself  is  inherently non-reentrant, and
                 Bass Class uses DOS facilities to write to the disk.  See
                 #3 above as well.

       [5]
       PROBLEM: "I cannot restore a saved game."

       SOLUTION: See #3 and #4 above. Also, make sure ALL files that are
                 supplied  on your Bass Class distribution disk are in the
                 same directory as  BASSCLASS.EXE.

       [6]
       PROBLEM:  "Bass Class  does  not  always  save  my  record  catches
                  properly!"

       SOLUTION:  See  #3  above.  Also,  some  people thought they were
                  clever, and tried to edit the BIGFISH.TXT and/or the
                  BIGSTR.TXT  files.   Don't  try  it!  One  misplaced
                  space or deleted/added line can mess the files up beyond
                  repair.


       [7]
       PROBLEM: "I get a RUNTIME ERROR 002 then the program stops!"

       SOLUTION: This means  that  Bass Class  cannot  open  a  file  it
                 needs. This can happen if you do not have all the files
                 that are supplied on the original distribution diskette
                 in   the   same   directory   as   the   main  program,
                 BASSCLASS.EXE. It can also happen if you are  missing  a
                 file altogether. Also, refer to item 3, above.

       [8]
       PROBLEM: "I get a runtime ERROR 004 then the program stops!"

       SOLUTION: This means that access to a file needed by Bass Class has
                 been denied by DOS. Make sure there is no write-protect
                 tab on your diskette, and see item 3 above.

       [9]
       PROBLEM: "I have an IBM  PS-2.  The  program  reports  that  it
                 detects a VGA card then stops, hanging up my machine".

       SOLUTION: Some models of PS-2 computers have the MCGA video mode.
                 This  mode  (320 x 200 x 256 colors) is a subset of the
                 VGA specification. These  computers  reports  VGA  when
                 queried by Bass Class. Bass Class then assumes that since a
                 VGA  card  was detected, that it should use the maximum
                 screen resolution it  can,  which  is  640  x  350,  16
                 colors. Bass Class requires a true VGA or EGA video system
                 to run.


       [10]
       QUESTION: "I have a VGA card in my machine, yet the program seems
                  to run in 16 color EGA mode. Why, and how do I make it
                  utilize the 256 colors of my VGA?"

       ANSWER: See item 9, above. Bass Class runs in the EGA mode of  your
               VGA  card.  It  does not support true VGA (640 x 480 x 16
               colors) at this time.

       [11]
       QUESTION:  "I  have  a  Tandy  machine that supports 16 color CGA
                   mode. Is there a way I can run Bass Class in this mode?


       ANSWER:  No, at least not at this time. Bass Class requires EGA or
                VGA to run.



```
{% endraw %}

## README.DOC

{% raw %}
```
Welcome to Bass Class!

This Bass Class distribution diskette contains a document file that is the
complete operating instructions for the game. The file is called BCLASS.DOC.
you can display this file on your screen by typing TYPE A:BCLASS.DOC, or you
can send it to your printer by typing COPY A:BCLASS.DOC PRN:. This assumes of 
course, that you have the Bass Class distribution diskette inserted in your 
A: disk drive.

There is also a question and answer file on the disk. It's called Q&A.TXT.
This file lists some of the more common questions and problems that people
have expressed regarding Bass Class. If you have trouble, please consult both
the BCLASS.DOC file and the Q&A.TXT file before calling or writing. I've
found that almost all problems can be answered within those documents. This
file can be viewed or printed by using the method described above. If you do
have trouble, and can't find an answer in the files mentioned above, please
write and let me know. I'll do my best to answer all correspondence, but bear
in mind that my first obligation lies with registered users. If you must
write, please include a SASE (self addressed stamped envelope) to help defray
my growing expenses.

On the disk you'll also find a file called ORDERFRM.TXT. It's an order form
that lists all of my other ShareWare programs. You can also print this form
and use it to order additional software.

People who register Bass Class will receive the newest version of the game if
the version they register is not the latest. If the version they have is the
latest, I'll add their name to my list of people to whom I owe an update.
When a new version is released, these people will automatically receive it.
As with all of my software, registered users of Bass Class can always order
the newest version for only $5.00.

Hopefully, you'll enjoy Bass Class enough to support my efforts by 
registering your copy!

Good fishin'!

Dick Olsen
68 Hartwell Ave.
Littleton, MA  01460

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Bass Class v1.0 is fishing game/tutorial. It's loaded with on-screen help
and even has a built in glossary of fishing terms. Makes full use of a mouse.
Requires EGA and at least 512k of memory. From the author of BASSTOUR!

Bass Class v1.0 is fishing game/tutorial. It's loaded with on-screen help
and even has a built in glossary of fishing terms. Makes full use of a mouse.
Requires EGA and at least 512k of memory. Totally realistic. Has three skill
levels and a GREAT user interface. If you're a novice, you'll appreciate the
helpful suggestions. You PROS are on your own! Excellent graphics and
animation. From the author of BASSTOUR!

               SYSTEM REQUIREMENTS:

               * EGA video capability
               * At least 512k of memory
               * Supports a mouse
               * Supports both hard & floppy disks

               REGISTRATION REQUIREMENTS:

* $15.00 registration fee, cash, check or money order (U.S. funds)
* Registered users will receive the latest version of the game.

               REGISTRATION BENEFITS:

* Timely response to correspondence and telephone support.
* Periodic mailings announcing new products.
* The newest version of the game. Updates at any time for $5.00.

               MISCELLANEOUS:

* Additional lakes are available from the author.
* Compatible with Nels Anderson's BassMap lake creation program.
* Compatible with BASSTOUR lakes & rivers.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2500

     Volume in drive A has no label
     Directory of A:\

    BOATDOCK RAN      1944   1-03-91   6:00a
    BRUSH    RAN      2592   1-03-91   6:00a
    GRASAREA RAN      1296   1-03-91   6:00a
    LCD      RAN      3888   1-03-91   6:00a
    LILYPADS RAN      4536   1-03-91   6:00a
    LIVEWELL RAN      1944   1-03-91   6:00a
    LUREHELP RAN      4536   1-03-91   6:00a
    OPENWAT  RAN      3240   1-03-91   6:00a
    OUTBOARD RAN      3888   1-03-91   6:00a
    ROCKAREA RAN      1296   1-03-91   6:00a
    RODHELP  RAN      3240   1-03-91   6:00a
    STUMPS   RAN      1944   1-03-91   6:00a
    TIPS     RAN     67392   1-03-91   6:00a
    TMOTOR   RAN      3888   1-03-91   6:00a
    TULES    RAN      1944   1-03-91   6:00a
    WATER    RAN       648   1-03-91   6:00a
    WEATHER  RAN       648   1-03-91   6:00a
    GLOSS    RAN     27864   1-03-91   6:00a
    JOLLY    MAP      2331   1-03-91   6:00a
    NINE     MAP      2336   1-03-91   6:00a
    SPECTAC  MAP      2334   1-03-91   6:00a
    FIVEFING MAP      2337   1-03-91   6:00a
    SABLE    MAP      2331   1-03-91   6:00a
    ROCKY    MAP      2330   1-03-91   6:00a
    BBOARD   PIC      5574   1-03-91   6:00a
    GO       TXT      1002   4-09-91   4:53a
    BCINSTAL BAT       161   1-03-91   6:00a
    BCMAP    PIC     15812   1-03-91   6:00a
    BIGFISH  TXT       423   1-03-91   6:00a
    BIGSTR   TXT       446   1-03-91   6:00a
    LCD      PIC      5382   1-03-91   6:00a
    MAP      TRN       375   1-03-91   6:00a
    ORDERFRM TXT      3098   1-21-91  11:07a
    PROF     PIC      8014   1-03-91   6:00a
    Q&A      TXT      7478   1-03-91   6:00a
    README   DOC      2016   1-03-91   6:00a
    VENDOR   DOC      1448   1-03-91   6:00a
    BCLASS   DOC     56897   1-03-91   6:00a
    BASSCLAS EXE     82194   1-03-91   6:00a
    GO       BAT        28   4-04-91  12:48p
           40 file(s)     341075 bytes
                               0 bytes free
