---
layout: page
title: "PC-SIG Diskette Library (Disk #2649)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2649/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2649"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2649.TXT

{% raw %}
```
Disk No: 2649                                                           
Disk Title: Superfly                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: SuperFly                                                 
Author Version: 1.1                                                     
Author Registration: $22.00                                             
Special Requirements: EGA or VGA                                        
                                                                        
Who ever thought swatting flies could be so much fun? Chase flies and   
other crawling bugs through twenty different levels in this action game 
where strategy is almost as important as skill. On each level lurks     
different challenges.                                                   
                                                                        
This game has colorful high resolution graphics and fast action, even on
slower machines. Three difficulty levels, sound effects, and a hall of  
fame compliment this fast paced game.  Play SUPERFLY with the keyboard, 
a mouse, or a joystick.                                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLY.DOC

{% raw %}
```

                                  SuperFly
                        Release 1.1  October 29, 1990

                                Nels Anderson
                               92 Bishop Drive
                          Framingham, MA 01701-6540


       Oh, yuck!  The flies are swarming into the house.  Armed with
       only your trusty fly swatters (in limited supply unfortunately)
       and whatever else you can find around the house you are off to
       battle the insect infestation.  Yet for every fly you swat it
       seems like more just pour in.  There's only one solution...get
       the Super Fly!

       SuperFly is an action game with multiple rounds of play.  The
       object on each round is to swat the Super Fly itself, and each
       round presents different obstacles that make it increasingly
       difficult to end the insect menace.  In addition to the main
       fly swarm you'll run into a variety of other insects that will
       also get in your way.

       SuperFly shouldn't require much instruction to play, though
       there is strategy involved especially as you get further into
       the game and the bugs get smarter.  Your main object should
       always be to swat the Super Fly which will advance you to the
       next round.  The Super Fly looks distinctly different from the
       other flies so he's not hard to find.  If you're like most
       people you'll want to jump right into the game rather than
       wading through instructions.  There's no reason not to; play a
       few games and then come back here for some tips and full
       details on the game.

       SuperFly runs in 640x350, 16 color graphics mode so an EGA or
       VGA video card and monitor is required.  Play is done with the
       keyboard so no other special equipment is required.  You can
       play with a mouse or joystick also though the keyboard seems
       to work best.

       SuperFly is distributed as Shareware -- this allows you to try
       it before you buy it, but if you continue to use the game you
       are expected to register.  When you register, please let me
       know what version you have (it's right on the title screen) and
       I'd also be interested to know where you got it from.  Please,
       make sure you put your name and address on your letter!  Or you
       can use the registration form in the file "orderfrm.txt".  Just
       copy the file to your printer, fill it out, and mail it.  If
       you're not familiar with the Shareware concept, please read the
       file "sharewre.txt".  The registration is $15, for which I will
       send you a disk with the latest version along with a set of tips
       that will help you win the game.  Or for $22 you can get the
       "deluxe" version which includes a copy of the latest version of
       the game in a binder with printed instructions.

       If you have any suggestions or discover any problems with the
       program you can reach me via the Xevious BBS (PCBoard) system
       (300/1200/2400/9600-HST, 8N1) at 508-875-3618 or 617-449-7322.
       Leave a C)omment to the sysop to reach me.  Xevious is the
       official support BBS for all my software and the latest versions
       are always available for downloading there.  There is also a
       support conference for people to exchange game tips or ask
       questions.  J)oin conference #31 and check out the latest tips.
       Also check B)ulletin #1 for the list of latest versions of all
       my software.
       
       You can also reach Xevious through RelayNet.  If there's a
       RelayNet board in your area send a routed message to me at node
       XEVIOUS.  The Shareware conference would be the best choice,
       but if that's not available try TPascal, Games or even Common.

       I'm also available through CompuServe's email system.  Send
       email to me at 71020,2613.  Or join me and many other Shareware
       authors in the Shareware forum (GO SHAREWARE).  This forum is
       shared with the IBM PCjr forum, so don't let the name confuse
       you.


*****************************************************************************
*                             PLAYING THE GAME                              *
*****************************************************************************


       OBJECT:

         The final object of SuperFly is to eliminate the insect
         invasion in your house.  In shorter terms, though, the object
         is simply to make it from round to round with your swatter
         intact.  To do this you must seek out and swat the Super Fly
         before being surrounded by the bugs.

       STARTING THE GAME:

         You start SuperFly by running the file fly.exe, that is, you
         should type "fly" on the DOS command line.  SuperFly has
         several command line options.  The first allows you to
         disable sound (you can later turn sound back on using the F3
         key, Sound On/Off option).  Use the option " -s" for no
         sound.  Another other option lets you set the level of
         difficulty.  Use the option " -d#" where # is 1 for normal
         difficulty, 2 for advanced and 3 for expert.  You can also
         select difficulty levels within the game using the F5 key.

         You can also select your control device from the command
         line.  Use " -k" to select keyboard, " -m#" to use the mouse,
         and " -j" to use a joystick.  When selecting the mouse you
         can, optionally, also select the mouse sensitivity.  This is
         equivalent to setting the sensitivity with the F6 command
         during the game.  Use a number between 1 and 50 for the
         sensitivity; 24 is the default value if you don't include a
         number.  For example, using " -m50" would select the mouse
         with maximum sensitivity.

         If you don't select your control device from the command line
         you'll be prompted for your selection before the game starts.

         For example, to start the game normally you would type:

                                     fly

         at the DOS command prompt.  To start the game with sound
         disabled, you would type:

                                   fly -s

         You can use multiple command line options.  For example,
         to play the game with sound off and at expert level, you
         would type:

                                 fly -s -d3

         Command line option summary:

           -s   Sound off
           -d#  Difficulty level is #, where # is 1, 2 or 3
           -k   use Keyboard
           -j   use Joystick
           -m#  use Mouse; if # is included, set mouse sensitivity to
                #, where # is between 1 and 50

       SCORING:

         You score 10 points for each fly you swat.  Later rounds
         introduce additional types of bugs.  Roaches are worth 20
         points and spiders are worth 40 points.  A caterpillar
         appears twice during the game.  Swatting him earns no points
         but gives you an extra swatter.  When you swat the Super Fly
         you get a bonus and go on to the next round.  You can
         recognize the Super Fly because he is green whereas normal
         flies are light blue.

       HALL OF FAME:

         At the end of the game the high score hall of fame will be
         displayed along with your score.  If your score is in the
         top ten you'll be prompted to enter your name for inclusion
         in the list.  The hall of fame is in the file "flyofame.scr"
         and if you ever wish to clear the high score list all you
         have to do is delete this file.

       STRATEGY:

         At the start of the game you have a supply of three fly
         swatters.  You must use your swatter to swat the flies and
         other bugs that appear.  Use the arrow keys on your keyboard
         (or your mouse or joystick) to move your swatter around.
         You can only move in four directions (left, right, up, down)
         while the bugs can move in any direction.  This is important
         because in some rounds you'll find screens that the flies
         can go through but you can't.  To swat a bug you must get
         next to it and then hit the arrow key that would move you
         toward the bug.  The swatted bug remains on the screen as an
         obstacle which you must then avoid.

         When using a mouse you just slide the mouse in the direction
         you want to move or swat.  Using a joystick you just push the
         joystick handle in the direction you want to move.  Holding
         down either joystick button will make the swatter move at
         half speed for better control.

         It isn't necessary to swat every bug you see.  Remember, the
         goal is only to swat the Super Fly so that you can go on to the
         next round.  The Super Fly does not appear right at the
         beginning of the round, though, so you'll have to swat other
         bugs until he does finally show up.  Once the Super Fly appears
         it may actually be better not to swat other bugs, as that only
         increases the number of bugs on the screen and makes it harder
         for you to move around.

         A good strategy is to try to swat bugs so the bodies form a
         line; the idea is that the swatted bugs should limit your
         movements as little as possible.  Try to keep the center of the
         screen clear if possible.  Also make sure not to block all the
         entrances, because if the Super Fly can't get in you'll never
         be able to swat him and move on to the next round.

         Twice during the game a caterpillar will appear which you can
         swat to earn an extra swatter.  When your swatters run out the
         game is over.  You lose a swatter whenever you are completely
         surrounded, whether by bugs or by walls.  Thus it's important
         to keep from getting trapped in a corner.

         Some rounds will have additional objects that may help or
         hinder you.  Be sure to pick up any items you find.

         As soon as you swat the Super Fly you'll advance to the next
         round.  If you get yourself completely surrounded you will
         automatically restart the current round over again, assuming
         you still have swatters left.  If you get into what you
         consider an impossible position, you can abandon your swatter
         by hitting the "A" key.  This has the same effect as if the
         bugs had surrounded you.

       GENERAL:

         SuperFly has a number of options that you can use.  Most can be
         used at any time during the game.

         Help (F1):

         To get some basic information on playing the game, hit the F1
         key at any time.  A one screen help message will appear that
         explains the basics of the game.  Hit any key to clear the help
         message.

         Info (F2):

         Hitting F2 puts up a single screen that provides some
         information on the game, the author and how to register.  Hit
         any key to clear the info message.

         Sound On/Off (F3):

         Hitting F3 at any time during the game will toggle the sound on
         or off.  You can use the option whenever you wish.  You can
         also disable sound when starting up the game using a command
         line option; see the section on Starting The Game for details.

         Skip Rounds (F4):

         This option can only be used at the very start of the game,
         before you've moved your swatter.  Many experienced game
         players find that after a while the first few rounds of a game
         get tedious as they've played them so many times they are no
         longer a challenge.  Using this option you can skip up to nine
         rounds.  This will effect your final score to some extent,
         however as soon as you finish the first round you skipped to
         you will be awarded the bonus points for all the rounds you
         skipped.

         Select Difficulty Level (F5):

         The game defaults to "normal" difficulty level.  To play a
         more challenging game, use the Advanced or Expert settings.
         The higher levels will require you to swat more bugs before
         getting to the Super Fly but you will also get higher bonuses
         for finishing a level.  You can also select difficulty
         through a command line option; see the section on Starting
         The Game for details.  The level you set remains active from
         game to game until you change it and you can only change
         difficulty level at the start of a game.

         Set Mouse Sensitivity (F6):

         This command is only available if you're playing using a
         mouse.  Because each mouse is different, and each player is
         different, it's desirable to be able to control how quickly
         the mouse responds to your movements.  Setting the
         sensitivity lower will require you to move the mouse further
         in relation to how far the swatter moves on the screen.
         Raising the sensitivity will naturally do just the opposite.
         You may want to experiment with different sensitivities as
         it can greatly affect the difficulty of the game.  You can
         also set sensitivity through a command line option; see the
         section on Starting The Game for details.

         Select Keys (F7):

         This command is only available if you're playing using the
         keyboard.  Not everyone likes playing using the arrow keys.
         For example, if you're left-handed you may prefer using keys
         on the left side of the keyboard.  Whatever your reasons, if
         you don't like the default keys for swatter movement, pause,
         and abandon swatter you can change them with this option.

         Shell to DOS (F10):

         If you wish to temporarily break to DOS without quitting the
         game, just hit F10.  When you're done, type "exit" and you'll
         be back in the game right where you left off.  This command
         requires that you have sufficient extra memory.  If it doesn't
         seem to work there probably isn't enough memory available.

         Abandon Swatter (A):

         Sometimes during the game you will find yourself in a situation
         that is hopeless yet you are not quite completely surrounded by
         flies so the game will not automatically end the round.  If you
         ever get in a situation like this, hit the "A" key to abandon
         your swatter.  If you have any swatters left you will start the
         same round over again just as if you had been completely
         surrounded.

         Pause Game (Space):

         If you need to pause the game for any reason, just hit the
         space bar.  The game will remain paused until you hit a key.

         Quit Game (ESC):

         To end the game and exit to DOS at any time, hit the ESC
         (escape) key.


*****************************************************************************
*                      NOTE TO USERS OF SUPERFLY V1.0                       *
*****************************************************************************

         The only consistant complaint I got about the original version
         of SuperFly was that it was "too hard".  I don't know...I
         finished the game several times during testing and I know of
         others who have finished it as well, including one seven year
         old boy who did it completely by himself without the hints file
         or anything.

         Anyway, what I've done is make the default ("normal") level of
         play easier.  Level 2 ("advanced") is equivalent to the default
         level in v1.0.  Level 3 ("expert") is now equivalent to level 2
         in v1.0.


*****************************************************************************
*                                REGISTRATION                               *
*****************************************************************************

       Please remember that SuperFly is not free software.  As with
       all Shareware you are expected to purchase it after you've
       given it a reasonable trial.

       The registration price for SuperFly is $15, for which you'll
       receive by return mail a copy of the latest version, a set of
       game hints and possibly another Shareware game to try out.

       Several other games are available from the same author.  If you
       register more than one game at the same time, a discount is
       available.  Register the first game for $15 and then each
       additional game is only $10.  For example,

                 $15 to register SuperFly
                 $25 to register SuperFly plus one other game
                 $35 to register SuperFly and two other games
                     etc.

       Games currently available include Mah Jongg, EGATrek, CIPHER,
       Shooting Gallery and BassMap.

       A deluxe version of SuperFly is also available.  This includes
       a storage case, printed manual plus the registered version of
       the game.  This version is available for $22.  No discount is
       available on this version.

       Please include $2 shipping/handling with your order.  Please
       include $4 for the deluxe version or for shipping outside of
       North America.


*****************************************************************************
*                              INCLUDED FILES                               *
*****************************************************************************

       The following files are included in SuperFly:

         FLY.EXE        The runnable program
         FLY.DOC        This file
         FLY.PIC        Pictures used by the game
         FLYLOGO.PCC    More pictures
         HOUSE.PCC      Title screen picture
         ARGHFLY.PCC    More of title screen picture
         DOOR.PCC       More of title screen picture
         SELECT.PCC     Control device selection picture
         ORDERFRM.TXT   Ready to print registration form.
         SHAREWRE.TXT   Information on Shareware
         VENDOR.TXT     Information for disk vendors, etc., on distributing
                        SuperFly
         FLY.TXT        A brief description of the game and other software
                        available from the same author


       You are free to pass this program along to friends, give it to
       user groups, upload to BBS's, etc. with the understanding that
       anyone who continues to use the game is required to register it.
       All these files MUST be included when distributing this program.
       If you archive the program for distribution through BBS's, please
       use the name SFLY11.ZIP (or .LZH, .PAK, etc. as appropriate).


*****************************************************************************
*                                THANKS TO...                               *
*****************************************************************************

       Thanks to Dick Olsen for providing the inspiration for
       SuperFly.  Dick has now come up with the initial idea for
       several of my games.  Also thanks to Greg Lanoue for various
       additional ideas as well as for creating several of the
       levels and insects.  Thanks also to David Pabst for several
       suggestions that are included in the game.  Finally, thanks
       to all those people who helped with the testing of SuperFly.


*****************************************************************************
*                           DISCLAIMER OF WARRANTY                          *
*****************************************************************************

       This software is sold "as is", without any warranty as to
       performance or any other warranties whether expressed or
       implied.  Because of the many hardware and software
       environments into which this program may be used, no warranty
       of fitness for a particular purpose is offered.  The user
       must assume the entire risk of using the program.  Any
       liability of the seller will be limited exclusively to
       product replacement or the refund of the registration fee.


*****************************************************************************
*                   ASSOCIATION OF SHAREWARE PROFESSIONALS                  *
*****************************************************************************

       This software is produced by Nels Anderson who is a member of
       the Association of Shareware Professionals (ASP).  ASP wants
       to make sure that the shareware principle works for you.  If
       you are unable to resolve a shareware-related problem with an
       ASP member by contacting the member directly, ASP may be able
       to help.

       The ASP Ombudsman can help you resolve a dispute or problem
       with an ASP member, but does not provide technical support
       for members' products.  Please write to the ASP Ombudsman at
       P.O. Box 5786, Bellevue, WA 98006, USA or send a CompuServe
       message via easyplex to ASP Ombudsman 70007,3536.

                             _______
                        ____|__     |               (R)
                     --|       |    |-------------------
                       |   ____|__  |  Association of
                       |  |       |_|  Shareware
                       |__|   o   |    Professionals
                     -----|   |   |---------------------
                          |___|___|    MEMBER


*****************************************************************************
*                            AVAILABLE SOFTWARE                             *
*****************************************************************************

       Other software which I've either written or contributed to:
       
       MAHJONGG:  Solitaire game played with Chinese tiles.  Supports
                  EGA and Hercules graphics; mouse optional.  See reviews
                  in December 1988 "PCWorld" and April 1989 "Compute!".
       
       EGATREK:   Space strategy battle game, using full EGA graphics,
                  based on the classic minicomputer game.  Winner of
                  Public Brand Software's 1988 software contest.  Chosen
                  best star trek game by "Shareware" magazine, July 1990.
       
       SHOOT:     "Shooting Gallery" tests your aim and reflexes in a
                  number of different rounds of shooting.  Uses MCGA
                  graphics mode for 256 colors and and also requires
                  a mouse.

       CIPHER:    A word puzzle game involving solving quotations that
                  have been encrypted.  Runs in EGA or VGA graphics mode
                  with or without a mouse, or in text mode.

       MOUSTOOL:  A collection of utilities for Turbo Pascal programmers
                  wishing to incorporate mouse input in their programs.
                  Sample programs included for both EGA and CGA graphics.
                  Used extensively within CIPHER.
       
       SOUNDPAS:  A collection of utilities for Turbo Pascal programmers
                  to add music and sound effects to their programs.
                  Includes units for interrupt and real time sounds.
                  Used extensively within SuperFly.
        
       BASSTOUR:  (Written by Dick Olsen).  Game that simulates a fishing
                  tournament, including rod and lure selection.  Runs in
                  EGA/CGA/Hercules graphics modes.  Uses many of the
                  utilities from MOUSTOOL.
       
       BASSMAP:   Companion program for BassTour which allows lakes to be
                  created or modified.
       
       CALLDOOR:  A PCBoard 14.x door that lets users view the system caller
                  log.  Logs for any node can be viewed in reverse order
                  (i.e., most recent caller back) or the logs can be searched
                  for any string.

       WAITDV:    A sysop's utility that allows synchronizing of nightly
                  house keeping events on a multinode system.  WAITDV was
                  written especially for systems running under DESQview: it's
                  DV-aware so the active task runs much faster than it would
                  if a non-aware wait utility was used.

       TOPPERS:   A PCBoard 14.x sysop utility that generates a formatted
                  list of the board's top users (by number of calls,
                  downloads and uploads).  The output file has three columns,
                  one for each category.  Graphics and non-graphics output
                  is available.
       
       TOPTALK:   A PCBoard 14.x sysop utility that tracks user activity in
                  conferences based on number of messages posted.  Included
                  is a complete record of all user activity plus a bulletin
                  file of the top ten most active message posters.
       
       GROUPERS:  A PCBoard 14.x game door.  Players gamble on the outcome
                  of the next card drawn from the deck.  The game is set up
                  to run as a monthly contest and keeps track of current
                  scores, generates a current scores bulletin and an end of
                  month final scores bulletin.

                                  - - - - -

     SuperFly is copyright (c) 1990 by Nels Anderson.  All rights reserved.
```
{% endraw %}

## FLY.TXT

{% raw %}
```

                                  SuperFly
                        Release 1.1  October 29, 1990

                                Nels Anderson
                               92 Bishop Drive
                          Framingham, MA 01701-6540

DESCRIPTION: SuperFly is an action game in which your home has been
invaded by a swarm of flies and other nasty bugs.  It includes 20
different rounds with a variety of obstacles.  There are three levels
of difficulty and a number of game options.  To get started, either
read the .doc file or just start up the game and view the help
screen.

REQUIREMENTS: SuperFly runs in 640x350, 16 color graphics mode so an
EGA or VGA card is required.  SuperFly requires 256k of memory.

SHAREWARE: SuperFly is distributed as Shareware.  You are free to try
the game and make copies for others.  If you continue to use the
game, however, you must pay the author a registration fee of $15; in
return you'll receive a copy of the latest version of the program, a
set of game hints, and possibly another game to try out.  A deluxe
version with binder and printed manual is available for $22.  Disk
vendors please see the file VENDOR.TXT for distribution details.

FILES:  The files included in SuperFly v1.1 are as follows:

  FLY.EXE        SuperFly program
  FLY.DOC        Documentation (instructions)
  FLY.TXT        This file
  FLY.PIC        Pictures used by the game
  FLYLOGO.PCC    More pictures
  HOUSE.PCC      Title screen picture
  ARGHFLY.PCC    More of title screen picture
  DOOR.PCC       More of title screen picture
  SELECT.PCC     Control device selection picture
  ORDERFRM.TXT   Ready to print registration form.
  SHAREWRE.TXT   Information on Shareware
  VENDOR.TXT     Information for disk vendors, etc.

All these files MUST be included when distributing this program.  If
you archive the program for distribution through BBS's, please use
the name SFLY11.ZIP (or .LZH, .PAK, etc. as appropriate).

SUPPORT: Support for this software is provided through the )(evious
BBS.  Call 508-875-3618 or 617-449-7322 (300/1200/2400/9600HST, 8N1)
and leave a C)omment for the sysop.  The latest version will always
be available there first.  Mail support is also available; please
include an SASE with your request.  Finally, you can contact the
author through CompuServe's mail system.  Address to Nels Anderson
[71020,2613].

AVAILABLE SOFTWARE:  Other software which I've either written or
contributed to:

EGATREK:   Space strategy battle game, using full EGA graphics.
           Based on the classic star trek type games, including
           maps, graphics, communications and even a view outside
           the ship.  Winner of Public Brand Software's 1988
           software contest.

           "...simply an amazing program, full of surprises and
           strategic challenges."
             -- ProGamer Magazine, Series 2, Volume 8

           "EGATrek is such a well-designed game, if you don't have
           EGA hardware, it's a good reason to upgrade."
             -- Shareware Magazine, July-August 1990

MAHJONGG:  Addictive solitaire game played with Chinese tiles.  Very
           easy to learn but always a challenge to win.  Many game
           options including timed games, tournaments, etc.  Also
           allows loading optional tile sets (tile editor included).
           Supports EGA and Hercules graphics; mouse optional.

           "Gorgeous board and tiles, challenging and addictive play."
             -- PCWorld Magazine, December 1988

           "...a visual feast and a mental workout."
             -- Compute! Magazine, April 1989

TILESETS:  Several collections of tile sets created by various
           Mah Jongg fans are available.  Each collection includes
           at least ten tile sets.  Requires Mah Jongg v3.3 or later.

CIPHER:    A word puzzle game, yet it uses hi-res VGA or EGA graphics
           to run (mouse optional).  Also will run in text mode.
           Includes over 30 puzzles to solve; registered version comes
           with over 200 additional puzzles.  You can also enter your
           own already encrypted puzzles.

SHOOT:     "Shooting Gallery" is a colorful arcade game with several
           different rounds to test your aim and reflexes, including
           skeet, quick draw, carnival type shooting range and a wild 
           west shootout.  Uses 320x200, 256 color mode and a mouse to
           play.  Requires VGA or MCGA.

           Selected as one of the top ten EGA/VGA shareware games
           of all time.
             -- PsL News, Public (software) Library, October 1990

           "Shooting Gallery is seven rounds of pure fun!"
             -- Patrick Grote

           "...one of the most entertaining, colorful, action-packed
           and challenging games I have seen."
             -- Vulcan's Compute Monthly, August 1990

SUPERFLY:  An action game using hi-res EGA/VGA graphics.  Chase the
           flies and other insects through twenty different rounds.
           Includes three levels of difficulty, hall of fame, shell
           to DOS, etc.  Supports keyboard, mouse, joystick.

           "RATING: 10.0" (highest rating)
             -- Patrick Grote

MOUSTOOL:  A collection of utilities for Turbo Pascal programmers
           wishing to incorporate mouse input in their programs.
           Sample programs included for both EGA and CGA graphics.

SOUNDPAS:  A collection of utilities for Turbo Pascal programmers
           to add music and sound effects to their programs.  Includes
           units for interrupt and real time sounds.
 
BASSTOUR:  (Written by Dick Olsen).  Game that simulates a fishing
           tournament, including rod and lure selection.  Runs in
           EGA/CGA/Hercules graphics modes.  Uses many of the
           utilities from MOUSTOOL.

BASSMAP:   Companion program for BassTour which allows lakes to be
           created or modified.  EGA and CGA versions provided.


These programs are probably available on your favorite BBS or from
your favorite disk vendors.  To register them or to order direct, use
the form in the file "orderfrm.txt" which is all ready to print.  The
"deluxe" version includes the registered software on diskette, plus a
binder and printed manual (some programs also include quick reference
cards).  The standard version includes just the diskette with the
registered software.  You can also use your VISA or MasterCard to
order on-line thru the support BBS, Xevious, at 508-875-3618.  Use
"DOOR 15" to order.

                                  - - - - -

  SuperFly is copyright (c) 1990 by Nels Anderson.  All rights reserved.

                         _______
                    ____|__     |               (R)
                 --|       |    |-------------------
                   |   ____|__  |  Association of
                   |  |       |_|  Shareware
                   |__|   o   |    Professionals
                 -----|   |   |---------------------
                      |___|___|    MEMBER
     
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
  INSTANT REGISTRATION FORM
  Just copy this file to your printer, fold, tape, and mail.
  See FLY.TXT for program descriptions.

   Quantity  Description                   Price Total
  +--------+------------------------------+-----+-----+
  |        | "Deluxe" Mah Jongg           | $22 |     |
  +--------+------------------------------+-----+-----+   SUPERFLY v1.1 was
  |        | Mah Jongg                    | $15 |     |   acquired from:
  +--------+------------------------------+-----+-----+
  |        | Mah Jongg tile collection #1 | $5  |     |
  +--------+------------------------------+-----+-----+    [ ] friend
  |        | Mah Jongg tile collection #2 | $5  |     |    [ ] free BBS
  +--------+------------------------------+-----+-----+    [ ] pay BBS
  |        | "Deluxe" EGATrek             | $22 |     |    [ ] disk vendor
  +--------+------------------------------+-----+-----+    [ ] user group
  |        | EGATrek                      | $15 |     |    [ ] other
  +--------+------------------------------+-----+-----+
  |        | "Deluxe" CIPHER              | $22 |     |   Name of vendor,
  +--------+------------------------------+-----+-----+   BBS, etc.:
  |        | CIPHER                       | $15 |     |
  +--------+------------------------------+-----+-----+   __________________
  |        | Additional CIPHER puzzles    | $5  |     |
  +--------+------------------------------+-----+-----+   
  |        | "Deluxe" Shooting Gallery    | $22 |     |   SEND TO:
  +--------+------------------------------+-----+-----+    Nels Anderson
  |        | Shooting Gallery             | $15 |     |    92 Bishop Drive
  +--------+------------------------------+-----+-----+    Framingham, MA
  |        | "Deluxe" SuperFly            | $22 |     |    01701-6540
  +--------+------------------------------+-----+-----+
  |        | SuperFly                     | $15 |     |
  +--------+------------------------------+-----+-----+   SHIPPING:  $2 for
  |        | BassMap                      | $10 |     |   any number of non-
  +--------+------------------------------+-----+-----+   deluxe programs.
  |        | Extra charge for 3.5" disks  | $2  |     |   $4 for deluxe ver-
  +--------+------------------------------+-----+-----+   sions and shipping
                        SHIPPING/HANDLING |$2/$4|     |   outside of North
                                          +-----+-----+   America.
  Minimum credit card order: $15          TOTAL |     |
  Make checks payable to: Nels Anderson         +-----+
  
  Disk Size:  ___ 5.25"  ___ 3.5" (add $2 extra for each 3.5" disk ordered)
  
  Payment:  _____ Check (U.S. funds only)   ______ VISA   ______ MasterCard
  
  Card Number:  _______ _______ _______ _______  Expiration Date:  ________
  
  Signature:  _________________________ (credit card orders must be signed)
  
  Name:  __________________________________________________________________
  
  Address:  _______________________________________________________________
  
  City/State/Zip:  ________________________________________________________

  Comments, suggestions:


  SUPERFLY v1.1
                                                                  +-----+
                                                                  |Place|
                                                                  |Stamp|
                                                                  |Here!|
                                                                  +-----+


                              Nels Anderson
                              92 Bishop Drive
                              Framingham, MA 01701-6540


```
{% endraw %}

## SHAREWRE.TXT

{% raw %}
```
   
   ABOUT SHAREWARE...
   
   Shareware (also known as user supported software and other names) is a
   concept not understood by everyone.  The authors of Shareware retain all
   rights to the software under the copyright laws while still allowing
   free distribution.  This gives the user the chance to freely obtain and
   try out software to see if it fits his needs.  Shareware should not be
   confused with Public Domain software even though they are often obtained
   from the same sources.
   
   If you continue to use Shareware after trying it out, you are expected
   to register your use with the author and pay a registration fee.  What
   you get in return depends on the author, but may include a printed
   manual, free updates, telephone support, etc.  Only by paying for the
   Shareware you use do you enable the Shareware author to continue to
   support his software and create new programs.  Considering that the
   Shareware registration fees are almost always far less than the purchase
   price of comparable commercial software it's obvious that Shareware is a
   good deal for everyone.
   
   There are real advantages to you in the Shareware system.  You get to
   try out software to make sure it is compatible with your hardware and
   that it fits your needs before you "buy" it with your registration.
   The author saves the expense of advertising, packaging and distribution
   and passes the savings on to you.  Plus, most Shareware authors are
   much more accessible than commercial software sources so that your
   questions and suggestions are much more likely to be responded to.
   

                         Thank you for your support.
```
{% endraw %}

## VENDOR.TXT

{% raw %}
```

                                  SuperFly
                        Release 1.1  October 29, 1990
                       Copyright 1990 by Nels Anderson
                             All Rights Reserved

                                Nels Anderson
                               92 Bishop Drive
                          Framingham, MA 01701-6540

                          Xevious BBS: 508-875-3618
                           CompuServe: 71020, 2613


This file contains information for disk vendors, BBS sysops, user groups,
etc. who wish to distribute this program.  For the purposes of this
document, all of the above will be referred to as disk vendors.

This software is copyrighted material and is subject to certain restrictions
on copying and distribution.

Vendors of any type, whether program distribution is free or whether a fee
of any type is charged, may distribute this program under the following
conditions:

    - The vendor is an associate member of the Association of Shareware 
      Professionals and follows the requirements of such membership. Or if
      not an ASP member, the vendor properly represents the software as
      shareware and provides customers with a complete definition of the
      shareware concept.  You must not advertise this software as "free",
      "cheap" or "public domain".

    - The vendor must in no way imply that they are "selling" the program
      but rather are only providing a duplication service where the program
      is provided for evaluation.  You may not "rent" or "lease" copies of
      this program.

    - You do not rename, change or omit any of the provided files.

    - The vendor should provide the author with a copy of their catalog.

    - You may distribute this program in a compressed form.  You may also
      include your own text files, "go.bat" startup files, etc. along with
      the program.

If you indicate ASP membership in your catalog, please do so for your
listing of this program.

The author reserves the right to withhold or withdraw permission to
distribute from anyone at any time for any reason.

Software reviewers: If you plan to review this software for publication,
please contact me first to make sure you have the most recent version of
the product and that the ordering information supplied to your readers
will be accurate.


Program:	SuperFly
Version:	1.1
Size:		12 files, 137k
BBS Name:       SFLY11.ZIP
To run, type:	fly
Registration:	$15 ($22 for printed manual/binder)
Program Type:	Action game
Monitor Type:	EGA/VGA
Mouse:		yes (also supports joystick and keyboard play)

One line description:  Chase the flies and other bugs around the house

Short description:

Chase and swat flies and others bugs through twenty different levels.
Each level includes a different challenge.  Colorful and fast hi-res
graphics.  Requires strategy as well as quick fingers.

Detailed description:

SuperFly is an action game that also requires strategy to win.  Chase
and swat flies and other bugs through twenty different levels.  Each
level is a different challenge and you'll find items along the way
that will help or hurt your chances.

The game has colorful hi-res graphics and fast action even on slower
machines.  Includes three levels of difficulty, sound effects, hall
of fame, boss mode.  Upon registration, users receive the latest
version along with a handy set of hints for all twenty rounds.
Supports, keyboard, mouse and joystick play.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2649

     Volume in drive A has no label
     Directory of A:\

    ARGHFLY  PCC      2235  10-29-90  12:44p
    FILE2649 TXT      1777   6-25-91   1:57p
    DOOR     PCC      3999  10-29-90  12:44p
    FLY      DOC     26219  10-29-90  12:44p
    FLY      EXE     50398  10-29-90  12:44p
    FLY      PIC     10050  10-29-90  12:44p
    FLY      TXT      7212  10-29-90  12:44p
    FLYLOGO  PCC      1057  10-29-90  12:44p
    HOUSE    PCC     13673  10-29-90  12:44p
    ORDERFRM TXT      3733  10-29-90  12:44p
    SELECT   PCC      2702  10-29-90  12:44p
    SHAREWRE TXT      1715  10-29-90  12:44p
    VENDOR   TXT      3543  10-29-90  12:44p
    GO       TXT      1156   6-25-91   2:11p
    GO       BAT        38   1-31-91  12:58a
           15 file(s)     129507 bytes
                           26112 bytes free
