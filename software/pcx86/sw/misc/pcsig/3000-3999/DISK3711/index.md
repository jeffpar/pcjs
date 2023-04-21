---
layout: page
title: "PC-SIG Diskette Library (Disk #3711)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3711/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3711"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## COURSES.TXT

{% raw %}
```
                   CURRENTLY AVAILABLE LBGOLF COURSES
                          as of February, 1993

ALAMO CITY COUNTRY CLUB

File Name: ALAMO.SCR

Heavily wooded with tricky greens.  Alamo City Country Club is a very
challenging LBGolf course that is best played by experienced LBGolf
players.  Written by James Robinson.


CEDAR CREEK

File Name: CEDAR.SCR

Based on an actual course in San Antonio, Texas.  Cedar Creek is set
in the hill country and is a beautiful course with plenty of trees,
sloped fairways, and challenging greens.  Written by James Robinson.


CLASSIC HOLES COUNTRY CLUB

File Name: CLASSIC.SCR

Made up of the best holes from actual courses around the world.  This
course plays fairly easily and it is very possible to shoot under par.
Written by George Balog, sysop of Lost Time BBS (216) 237-2116.


CLEVELAND PUBLIC GOLF COURSE

File Name: CLEVEPUB.SCR

This course was made for beginning LBGolf players and has wide
fairways, flat greens, and few trees.  Written by George Balog, sysop
of Lost Time BBS (216) 237-2116.


GOLDEN OAKS COUNTRY CLUB

File Name: GOLDOAKS.SCR

Course that is supplied with LBGolf.  A very challenging heavily
wooded course with difficult greens and narrow fairways.  Written by
James Robinson.


ST. GEORGE COUNTRY CLUB

File Name: STGEORGE.SCR

A very unique course that has a medieval concept.  Holes include King
Arthur, The Grail, Excalibur, The Round Table, The Castle, and The
Dragon.  A very challenging course that is difficult to shoot under
par on.  Written by George Balog, sysop of Lost Time BBS (216) 237-2116.


More courses are needed!  Be sure to make some original courses and
enter them in the LBGolf Course Architecture Contest!

```
{% endraw %}

## ENTRYFRM.TXT

{% raw %}
```
                        LBGOLF COURSE SUBMISSION FORM


Date Submitted     : ___________________


Author(s) of Course: ___________________________________________________

                     ___________________________________________________

                     ___________________________________________________


Name of Course     : ___________________________________________________


Phone Number       : ___________________ (person responsible for course)


Address            : ___________________________________________________

                     ___________________________________________________

                     ___________________________________________________


Description of Course:

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________


List BBS's course can be downloaded from (name, phone, baud rate):

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________
```
{% endraw %}

## FILES.TXT

{% raw %}
```
               LAN/BBS Tournament Golf v. 1.81 Archive Files

COURSES .TXT      1,768 -- Describes available LBGolf courses
ENTRYFRM.TXT      1,730 -- Course architecture contest entry form
FILES   .TXT      1,332 -- This file
GOLDOAKS.NDX        299 -- Index for Golden Oaks course
GOLDOAKS.SCR    106,368 -- Golden Oaks course
GOLDOAKS.STA        252 -- Golden Oaks statistics
LBGOLF  .CFG      2,293 -- Configuration
LBGOLF  .DOC     18,901 -- LBGolf documentation
LBGOLF  .EXE    525,868 -- LBGolf program
LBGOLF  .ICO        766 -- LBGolf Windows icon
LBQUEST .TXT      1,880 -- Questionnaire
LBUTILS .DOC      5,652 -- LBUtils documentation
LBUTILS .EXE    201,418 -- LBUtils program
LBUTILS .ICO        766 -- LBUtils Windows icon
ORDERFRM.TXT      2,809 -- Order form
PLAYERS .LBG     30,256 -- Players
README            9,886 -- General information
READONLY.BAT        336 -- Batch file that makes LBGOLF.EXE read only
SAMPLE  .ANS      2,738 -- Sample ANSI screen created by banner utility
TOURNEY .LBG        807 -- Tournament
TRNYSTAT.LBG        252 -- Tournament statistics
UNREAD  .BAT        414 -- Removes read only attribute from LBGOLF.EXE

Tampering with any of these files is prohibited.  Tampering with the
LBGolf archive file other than converting to another format is prohibited.

```
{% endraw %}

## LBGOLF.DOC

{% raw %}
```
                  LAN/BBS Tournament Golf Documentation


I. REQUIREMENTS

   A. FILE SHARING

   If you run LBGolf and get a message that the Share program is needed,
   you need to change your autoexec.bat file to execute the Share
   program when your computer is booted.  For best results, use
   SHARE /F:4096 /L:255.  The defaults used by Share (/F:2048 /L:20) are
   often inadequate and lockups are possible with some programs when
   using the defaults.  Problems are also likely when your execute Share
   from DOS instead of your autoexec.bat or config.sys.

   The LBGOLF.EXE file should be set to READ ONLY if multiple copies of
   LBGolf will be running.  This is because overlays are built into the
   executable file and if the read only attribute is not set, you might
   get a message about the overlays and have to press a key twice after
   another copy of LBGolf is done loading the overlays.


   B. DROP FILE (BBS MODE ONLY)

   In BBS mode, LAN/BBS Tournament Golf supports the "DOOR.SYS",
   "CALLINFO.BBS", "DORINFOX.DEF", and "SFDOORS.DAT" drop files.  If
   your BBS does not support one of these files, you will need to use a
   utility program that converts your BBS's drop file to one of the
   supported drop files.



II. INSTALLATION

   A. COPYING THE FILES

   Simply create a directory where you want the LBGolf files to reside,
   then copy (or decompress) all of the files to the desired directory.

   Example process of copying files from DOS:
  
   md \lbgolf      (make a directory called "lbgolf")
   cd \lbgolf      (change to the "lbgolf" directory)
   copy a:*.*      (copy all files from floppy drive A)


   B. DESCRIPTION OF FILES

   The following files make up the LBGolf software:

   README       ... Text file describing what LBGolf is
   LBGOLF   EXE ... The golf game program itself
   LBUTILS  EXE ... Companion program (see LBUTILS.DOC file)
   BANNER   EXE ... ANSI banner utility
   LBGOLF   CFG ... Configuration file for LBGolf (pass on command line)
   GOLDOAKS SCR ... Provided LBGolf course script file (editable text file)
   GOLDOAKS NDX ... Index for Golden Oaks course
   GOLDOAKS STA ... Statistics for Golden Oaks course
   PLAYERS  LBG ... Players database (important -- keep a backup)
   TOURNEY  LBG ... Current tournament information (important)
   TRNYSTAT LBG ... Statistics for current tournament
   LBGOLF   DOC ... Documentation for LBGolf
   LBUTILS  DOC ... Documentation for LBUtils
   BANNER   DOC ... Documentation for banner utility
   ORDERFRM TXT ... Text file order form (please print and fill out)
   LBQUEST  TXT ... Text file questionnaire (please print and fill out)
   COURSES  TXT ... Text file describing available LBGolf courses
   ENTRYFRM TXT ... Text file (use when entering course(s) in contest)
   LBGOLF   ICO ... Windows icon for LBGOLF.EXE
   LBUTILS  ICO ... Windows icon for LBUTILS.EXE


   C. CONFIGURATION

   The default configuration for LBGolf is:

   Non-BBS mode
   Use timing when setting hook/slice and power
   Use blinking text
   Allow new players

   If the defaults above are what you prefer, then LBGolf is already
   configured and you do not need to use a configuration file.  Otherwise,
   you will need to edit the LBGOLF.CFG configuration file to suit your
   needs and pass it on the command line (LBGOLF LBGOLF.CFG).

      1. GENERAL CONFIGURATION

         a. USE TIMING: (YES or NO)
            Determines how the hook/slice and power are entered.  If set to
            YES, you press a key when the hook/slice and power meters are
            how you want them as they grow in size.  If set to NO, you move
            a marker to set the intended hook/slice and power by using the
            arrow keys, then press the enter key.  The actual hook/slice
            and power are indicated by the solid bars.  The computer
            randomly changes the intended hook/slice and power when this is
            set to NO.  You can back up to the aim prompt by hitting the
            escape key unless you are at the power meter and this is set to
            YES.

         b. BLINK: (YES or NO)
            Determines whether or not blinking text is used.  In some
            cases blinking text is not supported, in which case you should
            set this to NO.

         c. NEW PLAYERS: (YES or NO)
            Whether or not to allow new players into the game.  You can run
            a closed system by adding players yourself using the LBUtils
            program and setting this to NO.

      2. BBS MODE CONFIGURATION

         a. DROP FILE: (caller information file created by your BBS)
            This is required to be properly set for BBS mode play.  The
            supported drop files are: door.sys, dorinfox.def, sfdoors.dat,
            and callinfo.bbs.  When your BBS runs a door program it creates
            a caller information file which is read by the door program.
            If you are not sure which drop file your BBS creates, try using
            the door.sys drop file being read from your main BBS directory
            (EXAMPLE: DROP FILE: [drive]:\[bbs directory]\door.sys).  The
            normal setting for Wildcat! 3.x for a single node BBS is
            DROP FILE: C:\WC30\WCWORK\NODE1\DOOR.SYS.  If your BBS does not
            create one of the supported files, you will need to use a utility
            program that converts your BBS's drop file to door.sys or one of
            the other support formats.

         b. AUTO LOGIN: (YES or NO)
            Normally this setting is YES to automatically log players into
            the game.  If this is set to NO, then players will have to enter
            their player information when they play for the first time and
            enter their password each time they play.

         c. ADDRESS: (hex address)
            Normally this setting is left blank unless you are using non-
            standard comm ports.  If you are using COM1 or COM2 just leave
            this setting blank and the information will be retrieved from
            the drop file.  If you are using a non-standard address, you
            must enter it here.

         d. IRQ: (irq number)
            Normally this setting is left blank unless you are using non-
            standard comm ports.  If you are using COM1 or COM2 just leave
            this setting blank and the information will be retrieved from
            the drop file.  If you are using a non-standard IRQ, you must
            enter it here.



III. STARTING LBGOLF

You can start LBGolf by "LBGOLF" from DOS to use the default
configuration.  If you run a BBS, you will need to edit the LBGOLF.CFG
file to suit your system and use "LBGOLF LBGOLF.CFG" in your batch file.
390K of base memory should be enough to play LBGolf because disk based
overlays are used.



IV. PLAYING LBGOLF

   A. LOGGING IN

   If you are a new player, enter "NEW" to enter your password and name.
   If you have played LBGolf before, enter your password.  The LBUtils
   program can be used to view passwords in case a password is forgotten.
   If playing on a BBS and AUTO LOGIN: is set to YES in the configuration
   file, this step is skipped and players are automatically logged in with
   a random password.


   B. OPTIONS MENU

      1. PLAY IN THE CURRENT TOURNAMENT

      Compete against the other players in the current tournament.  Each
      shot you play will count.  When you quit playing LBGolf, you will
      be able to continue playing exactly where you left off the next
      time you play in the current tournament.


      2. PLAY A PRACTICE ROUND

      Play on any of the available courses without your scores counting
      in the current tournament.  Up to 99 different courses can be
      available to practice on.


      3. TOGGLE COLOR DISPLAY

      Switches between color and monochrome displays.


      4. EXIT LBGOLF

      Quit LBGolf.


   C. GOING THROUGH THE MOTIONS

   The game play in LBGolf is very simple.  First, select option(s) from
   the main menu such as "L" to view the leader board or press the Enter
   key or "X" key to exit the main menu.  Next, you enter the club you
   want to hit with, factoring in the distance to the pin (shown at the
   top right portion of the screen), the wind, and other conditions.
   Next, you enter the direction to aim (or just press Enter to accept
   the default aim which is straight for the flag).  Next, use your timing
   to hit the ball straight, with a hook or draw (curve left), or with
   a slice or fade (curve right).  Last, you use your timing again to
   indicate how hard to hit the golf ball.  These steps are repeated for
   each hole until the golf ball goes into the hole.  To complete a
   tournament and be eligable for any prizes being awarded, you must
   complete 18 holes for each round (1-4) in the tournament by the
   tournament's deadline (if any).  When you want to quit playing,
   enter "Q" at the main menu and you will exit the game and if you are
   playing in a tournament, you will be able to resume play later where
   you left off.


   D. MAIN MENU

      1. DESCRIPTION OF CURRENT HOLE      (D) Descr of Hole

      Displays a written description of the current hole as contained in
      the course script file.  Above the description is the sponsor of
      the current hole.  If there is no sponsor for the current hole,
      the tournament sponsor is used.  Below the description is some
      to-date and current tournament statistical information for the
      current hole.  Stats are kept track of in the files with an
      extension of ".STA".  Simply erase or rename a stats file to set
      all stats to zero.


      2. SCORE CARD                       (S) Score Card

      You can display score cards in three different ways.  You can
      display your current score card "(Y)our", another player's score
      card "(O)ther", or look at several score cards "(S)can".

      To display your current score card, simply press the Enter key
      or the "Y" key at the prompt.

      To display another player's score card, press the "O" key at the
      prompt.  Next, if you know the player's ID number, enter it.  If
      you do not know the player's ID number, enter "0" at the player
      number prompt to display a list of players and there ID numbers.
      After you find the ID number for the player, exit the player
      display by entering "0", then enter the ID number of the player.
      Next, enter the round number (1-4).

      To display several player's score cards, press the "S" key at the
      prompt.  You will be shown the score card of the first player.
      Press the Enter key or the "Y" key at the "next?" prompt to view
      the next score card.  When done viewing score cards, press the
      "N" key to exit back to the main menu.


      3. LEADER BOARD                     (L) Leader Board

      Displays the top player names, scores, and what place they are
      currently in.  The object of LAN/BBS Tournament Golf is for
      players to play their best and get their names at the top of the
      leader board so they can be eligable for prizes if any prize(s)
      will be awarded to the top player(s).


      4. TOURNAMENT INFORMATION           (T) Tourney Info

      Displays information about the tournament that is currently in
      progress.  If there are any changes made to the tournament,
      players are automatically notified of the changes.


      5. PLAYER NAMES AND ID NUMBERS      (N) Player Names

      Displays player names and their assigned ID numbers.  Players
      are indicated as being on-line (currently playing), playing in
      the current tournament, and finished playing in the current
      tournament.  You can check out the entire competition by using
      this feature, then check out their score cards.


      6. PLAYER STATISTICS                (P) Player Stats

      Displays statistical information about a player.  You can see
      your stats, another player's stats, or several player's stats
      by using the same methods as viewing score cards.


      7. INSTANT REPLAY                   (I) Instant Replay

      Use this feature when you just made a great shot and want to
      see it again or if you did not see what happened during the
      last shot.  When you start the replay, just sit back and
      watch exactly what happened during the previous shot.


      8. REDRAW SCREEN                    (R) Redraw Screen

      Use this feature whenever the screen has been corrupted.  When
      playing on a BBS, it is very possible to get line noise that
      will corrupt the screen.  On networks, unwanted information
      can be displayed on the screen which could corrupt the display.


      9. PRODUCT INFORMATION              (A) About LBGolf

      Displays a description of what LAN/BBS Tournament Golf is and
      registration information.


      10. PLAYING INSTRUCTIONS             (H) Instructions

      Displays the basic instructions of how to play golf and how
      to play LAN/BBS Tournament Golf.


      11. SAVE PLAYER AND EXIT             (Q) Quit For Now

      Players should always exit LAN/BBS Tournament Golf by using this
      feature.  This will save the player's current information and
      properly exit back to the operating system.  If not playing on
      a BBS and a player does not exit LBGolf this way, the player
      will still be considered to be on-line (currently playing) until
      the LAN/BBS Tournament Golf Utilities program is used to change
      the player's on-line status.  Players that are indicated as
      being on-line will not be able to continue playing.

      11. ZOOM OUT FOR A BETTER LOOK       (Z) Zoom Out

      Displays the entire hole or green.  Use this feature when you
      want to view more of the layout of the hole or want to see more
      of the green.  This feature comes in handy when the hole is out
      of view when putting.


      12. EXIT MENU AND PLAY NEXT SHOT     (X) Play Shot

      Exits the main menu and goes to the prompt that asks the player
      to enter the club to use for the next shot.


   E. CLUB SELECTION

   Enter the two letter code for the club you want to use for the
   next shot.  You pick the club you want to hit mainly based on the
   distance between your ball and the flag.  This distance is shown
   at the top right of the display.  For a list of about how far a
   ball will travel with a full power swing for each club and what
   the two letter code of each club stands for, type in "HE" for
   help.  In many cases, the default club selection is acceptable,
   in which case you can simply press the Enter key.


   F. DIRECTION OF AIM

   The computer automatically calculates the approximate direction
   to the hole, however, in some cases it is not a good idea to
   aim directly at the hole.  You can enter the exact direction
   (0-359 degrees) to aim the next shot.  You can get help on
   the direction by pressing the "H" key.


   G. SETTING BALL'S FLIGHT PATTERN

   You must use your timing when setting the flight pattern of the
   ball.  A bar will grow from left to right until it reaches the
   end or you press a key.  To make the ball travel straight, press
   a key when the bar is at the halfway point.  To play a hook or
   draw, press a key when the bar is before the halfway point.  For
   a slice or fade, press a key after the bar is past the halfway
   point.


   H. SETTING POWER OF SWING

   Setting the power of swing is similar to setting the ball's
   flight pattern.  A bar will grow from left to right until it
   reaches the end or you press a key.  The larger the bar is when
   it stops, the harder you will swing the club to hit the ball.
   For a full power swing, just let the bar reach its full size.
   For a weak swing, press a key when the bar is small.  The
   recommended power of swing is indicated by a flashing rectangle.


V. END OF TOURNAMENT

   Tournaments are ended using the LAN/BBS Tournament Golf
   Utilities program by starting a new tournament.  When a new
   tournament is started, players who were playing in the previous
   tournament will be notified that the tournament is over.  The
   1st-4th place winners will also be displayed along with any
   prizes that will be awarded.



VI. COURSES

   LBGolf courses are ASCII text files that can be easily modified
   and created using any standard text editor.  The course file that
   is supplied with LBGolf is GOLDOAKS.SCR.  Take a look at this
   file to see exactly what goes into making an LBGolf course.  It
   may seem like a lot at first, but it is really very easy to create
   LBGolf courses.

   An up-to-date index file (.NDX) is kept for each course.  If a
   course is modified or the index file for the course does not
   exist, the index is rebuilt automatically.

   The maximum distance (without any wind) the ball will travel with
   each club may be changed within LBGolf course files.  If you ever
   wanted to drive a ball 500 yards all you have to do is change the
   "DRIVER DISTANCE" variable to 500.  You can even hit a sand wedge
   farther than your drive if you want to...anything goes.  When
   playing LBGolf, the current club distances are shown by typing
   "HE" for help when entering the club to use.



VII. NOTES FOR BBS SYSOPS

   The alternate method of setting the hook/slice and power is
   recommended and is the default in the LBGOLF.CFG configuration file.
   There are many causes for the meters to move too slow, fast, or
   erratic when running on a BBS.  Using DESQview is a common cause of
   the meters moving too slowly.  Set USE TIMING: to NO.  If you run a
   single node BBS at 2400 baud and do not use any multitasking software,
   you can set USE TIMING: to suit the preference of your users.

   Use /L on the LBGolf command line (LBGOLF LBGOLF.CFG /L) to force
   LBGolf to play in local mode and ask for a password instead of
   attempting to read a drop file and establishing a connection.

   If you have problems with a drop file, there might be a
   compatibility problem and you should try the other supported drop
   files.  Unfortunately, there still is not a standard drop file being
   used by all the various BBS software and sysops will continue to have
   problems until a single standard drop file format is used.

```
{% endraw %}

## LBQUEST.TXT

{% raw %}
```

                    LAN/BBS Tournament Golf Questionnaire



DATE   : _________________________       ADDRESS: _________________________

NAME   : _________________________                _________________________

COMPANY: _________________________                _________________________

TITLE  : _________________________                _________________________

                                         PHONE  : _________________________


1) What is your opinion of the LAN/BBS Tournament Golf software?

   ________________________________________________________________________

2) If you use a network with IBM compatible computers:

   A) Are you going to play LBGolf on the network?         ___ YES   ___ NO
   B) Do you play other network games?                     ___ YES   ___ NO
   C) Would you like more network games to be developed?   ___ YES   ___ NO


3) If you run a bulletin board system:

   A) What is the name and phone number of your BBS? name: ________________

                                                    phone: ________________

   B) What BBS software are you using?                     ________________

   C) Is LBGolf going to be played on your BBS?            ___ YES   ___ NO
      If so, will prizes be provided to the winners?       ___ YES   ___ NO

   D) How many calls do you receive per day?               ________________

   E) Do you run a multiple phone line BBS?                ___ YES   ___ NO

      If so:
      a) How many lines?                                   ________________

      b) How many IBM compatible computers?                ________________

      c) What multitasking software do you use?            ________________


4) What brand and model of computers do you own?

   ________________________________________________________________________
```
{% endraw %}

## LBUTILS.DOC

{% raw %}
```
              LAN/BBS Tournament Golf Utilities Documentation


I. INTRODUCTION

      LAN/BBS Tournament Golf Utilities (LBUtils) is a multi-user
      companion program for LAN/BBS Tournament Golf.  LBUtils should
      only be used by the person(s) in charge of the current tournament
      because various important information can be changed or erased by
      using this program.


II. PLAYER MAINTENANCE

   A. VIEW A PLAYER

      After selecting the player to view, the player's scoring and
      statistical information will be shown.  If the player is
      currently playing, the information will be updated every few
      seconds.


   B. ADD A NEW PLAYER

      Enter the new player's name (or handle), password, time limit
      per session, and maximum sessions per day information.  The
      player's name and password must not be used by any other
      player.  To limit the amount of time a player can play each
      game of LBGolf, enter the number of minutes the player will
      be allowed to play.  To limit the number of games the player
      can play LBGolf per day, enter the maximum number of sessions.
      If playing on a BBS, the remaining time left on the BBS will
      be taken into account.  Adding new players using LBUtils is
      optional because players can add theirselves by entering "NEW"
      at the LBGolf login screen or by getting logged in automatically
      if playing on a BBS.


   C. EDIT A PLAYER

      You can change a player's name, password, and time limit
      information any time the player is not currently playing.  If
      playing on a BBS, the player's name needs to be exactly the same
      as the name on the BBS for the automatic login to work properly.


   D. DELETE A PLAYER

      You can delete any player not currently playing by selecting
      the player to delete, then confirming the deletion.  After
      deletion, that player's spot will be made available to a new
      player.  This is an important feature when the 99 player spots
      begin to get filled up.


   E. START A NEW PLAYER FILE

      Use this feature when you want to delete all current players
      and start from scratch.  After confirming the deletion, all
      players will be erased and all player spots will be available
      to new players.


   F. CHANGE ON-LINE STATUS

      Unless playing on a BBS, if a player does not properly exit LBGolf
      via Quit For Now, such as resetting or turning off the computer,
      the player will still be considered to be on-line (currently
      playing).  You can correct this situation by toggling the player's
      on-line status by using this feature.  When playing on a BBS, even
      if the player does not exit LBGolf properly such as disconnecting,
      LBGolf will automatically exit and save all of the player's
      information as if the player had exited properly.


   G. GLOBAL LIMIT CHANGES

      Use this feature when you want to change the amount of time and
      number of games per day limits for all players.  After changing the
      limits for all players, you can edit the players that you want to
      have different limits.  Any new players will use the new limits.


III. TOURNAMENT MAINTENANCE

   A. VIEW TOURNAMENT INFORMATION

      This will display the tournament information as it would appear
      in LBGolf via Display Tournament Information.


   B. EDIT TOURNAMENT INFORMATION

      You can change all of the current tournament information except
      the number of rounds and the course being played on.  When
      any change is made, the changes go into effect immediately.
      Players that are on-line will be notified about the changes
      after they finish their current hole.  Players that are not
      on-line will be notified of the changes the next time they
      play.


   C. EDIT HOLE SPONSORS

      There can be a sponsor assigned to each hole during the
      current tournament.  The sponsor will be displayed when the
      player chooses Description of Hole in LBGolf.  The sponsor
      of the current tournament will be used if there is no
      sponsor for the hole.


   D. START A NEW TOURNAMENT

      This is the most important feature of LBUtils.  Whenever
      you want to end the current tournament and start a new one,
      you must use this feature.  After confirming you want to
      start a new tournament, you will enter the name of the
      new tournament, tournament sponsor (optional), first-fourth prizes
      (optional), number of rounds (1-4), ending date and time
      (optional), course script file name, comments, and hole
      sponsors.

      After a new tournament has been started, players that were
      playing in the previous tournament will be notified of the
      end of the tournament and the players that came in 1st-4th
      place.  In the event of a tie, the winners will be picked
      partially randomly.

      The winners of the previous tournament and prizes awarded
      are stored in the WINNERS.TXT ASCII file for later
      reference.  A history of tournament winners are stored
      in the WINHIST.TXT ASCII file.

      New tournaments may not be started if any players are
      currently on-line.


   E. VIEW TOURNAMENT WINNERS

      Use this feature to view the winners of the previous
      tournament and what prizes were/will be awarded to
      each winner.  The name of the tournament and the date
      and time the tournament ended are also shown.

```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
                   VALLEY PROGRAMMING PRODUCTS ORDER FORM

   Date: __________________________   Phone #: ____________________________

   Name: __________________________  BBS Name: ____________________________

Address: __________________________     BBS #: ____________________________

         __________________________     Fax #: ____________________________

         __________________________     Other: ____________________________

Where did you obtain this product from? ___________________________________

Qty   Description                                        Price     Extended
---   ------------------------------------------------   -------   --------
      Latest version of the REGISTERED LAN/BBS
___   Tournament Golf software.                          $ 24.95   ________

      You will receive a disk containing the latest version of LBGolf
      registered in your name along with several courses, the ANSI
      banner utility, and eligability to enter the LBGolf Course
      Architecture Contest.
---------------------------------------------------------------------------

___   LBGolf VIP Treatment                               $ 59.95   ________

      Everything mentioned above plus each month you will be sent LBGolf
      upgrades, new LBGolf utilities, and new courses as available for a
      period of one year.  You will also be sent our VB Icon Browser and
      VB Icon Extractor Windows 3.x icon utilities complete with Visual
      Basic source code and lots of categorized icons.

---------------------------------------------------------------------------

___   LAN/BBS Tournament Golf Utilities SOURCE CODE      $ 24.95   ________

      Complete source code to LBUtils for the QuickBasic/PDS programmer
      wanting to write utilities for LBGolf or add to/modify LBUtils.
      Requires Crescent Software's QuickPak library to execute.
---------------------------------------------------------------------------
                                                  
       PLEASE SPECIFY THE DISK FORMAT!                  SUBTOTAL $ ________
                                                  
___ 5 1/4" DD (360K)     ___ 5 1/4" HD (1.2M)            * S & H $ ________
                                                  
___ 3 1/2" DD (720K)     ___ 3 1/2" HD (1.44M)            ** TAX $ ________
                                                  
                                                           TOTAL $ ________
Mail payment and order form to: VALLEY PROGRAMMING
                                P.O. BOX 34085
                                SAN ANTONIO, TX 78265-4085

 * Add $2.00 for normal shipping and handling.  Overseas shipping is $4.00.
** Texas residents, please add 8.25% sales tax.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 3500 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3711

     Volume in drive A has no label
     Directory of A:\

    GO-FORM  DAT      3090   3-10-93   3:22p
    GO-STRT  DAT       548   5-20-93   8:02a
    GO       EXE     27162   4-28-93
    PCSIG    TXT      2329   6-01-93   2:31p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GOLF181  ZIP    293054   5-20-93   7:04a
            6 file(s)     355561 bytes
                            3072 bytes free
