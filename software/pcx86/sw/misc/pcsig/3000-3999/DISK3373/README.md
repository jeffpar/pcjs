---
layout: page
title: "PC-SIG Diskette Library (Disk #3373)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3373/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3373"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## FILES.TXT

{% raw %}
```
You should have the following files:
------------------------------------

MJWIN    EXE  Game program 
MJWIN    DOC  User's amnual for MJ/Windows
*        TIS  Tile set files (10)
TILESETS DOC  Description of tile sets
PCX2TIS  EXE  PCX2TIS utility
PCX2TIS  DOC  PCX2TIS manual
BLANKSET PCX  Template for PCX2TIS
VIEWSET  EXE  VIEWSET utility
VIEWSET  DOC  Manual for VIEWSET utility
OFFER    TXT  Offers for registered MJ/Windows users
FILES    TXT  This file!

Please be sure to give ALL of these files when giving away copies of
MJVGA!  Thanks!!

```
{% endraw %}

## MJWIN.DOC

{% raw %}
```

















				    Mah Jongg
                               --- for Windows ---
                                   Version 1.0
                                 February,  1992


		              Program and Documentation
                         Copyright 1988 - 1992  Ron Balewski




Mah Jongg for Windows is a User-Supported (Shareware) prooduct.  It is
freely available through User's Groups, Bulletin Boards, etc.  You have
the opportunity to try the game and see if it suits your needs.  If you
find that you enjoy and use this game, please send the requested
contribution of $20.00 to:

     Ron Balewski
     412 E. Ridge St.
     Nanticoke, PA  18634-2915


User-supported shareware can exist only as long as you, the users, will
support it!




TABLE OF CONTENTS:
-------------------


        FORWARD: ............................... 4
        WHAT IS MAH JONG for Windows............ 5
        HARDWARE REQUIREMENTS .................. 5

        THE GAME OF MAH JONGG .................. 6
             The Tiles ......................... 6
             The Suits ......................... 6
             The Game Board .................... 7
             Playing Mah Jongg ................. 7
             Strategy .......................... 7

        PLAYING MAH JONGG for Windows .......... 8
             The Basics ........................ 8
             The Added Features ................ 9
                  File menu .................... 9
                  Help menu ................... 11
                  Preferences menu ............ 12
                  Backup menu ................. 14
                  Special menu ................ 14

             Stack Control Menu ............... 15
                  Peek ........................ 15
                  Rotate ...................... 16
                  Remove ...................... 16


        IN CASE OF DIFFICULTY ................. 17
        TECHNICAL SUPPORT ..................... 17
        WHAT'S NEXT ........................... 17
        SHARWEWARE ............................ 18
        WHAT DO YOU GET WHEN YOU REGISTER ,,,,, 18
        DISCLAIMER ............................ 19
        PERMISSION TO COPY .................... 20
        ATTENTION SHAREWARE VENDORS ........... 20













                                    -  Page 2 -
















     Mah Jongg for Windows is dedicated to my father, Ed, in 
appreciation for his support and help with my first shareware venture.  
If it weren't for his tireless efforts in the day-to-day operation of 
my shareware business (copying & labeling disks, assembling & shipping 
packages to registered users, etc.) I wouldn't have had the time to 
spend writing MJ/WIndows.


     I'd also like to thank Warren Storosko for his constant list of 
ideas & suggestions and for devoting countless hours to testing my 
products.






































                                    -  Page 3  -





                               FORWARD



     Well, it's finally finished -- Mah Jongg for Windows.  If you've
used my Mah Jongg -V-G-A-, you should have little trouble getting up to
speed with this new game.  It incorporates most of MJVGA 3.1's function
set.

     Please note that I consider this to be a new product rather than
an "upgrade" to MJVGA.  I seriously question whether a Windows
version is an "upgrade" or a "downgrade."  However, due to the
popularity of Windows, I've gotten a LOT of requests for this product.
So, here it is!

     As usual, I'd like to thank those who have registered the various
versions of MJVGA, my initial shareware product.  Your support &
suggestions are what prodded me into the programmer-unfriendly world of
Windows to produce what you now have.

     That 8514/a version of Mah Jongg is still in "public" Beta test.
No major problems have been reported (in fact virtually no minor ones
have come up either).  Unfortunately, I just haven't had time to put
the documentation & such together into a package.  (By the way,
MJ/Windows will probably earn me a lot more money than MJ8514 -- so
it's been getting priority treatment.)























                                  - Page 4 -





WHAT IS MAH JONG for Windows?

     Mah Jongg for Windows is a high-tech simulation of the ancient
Chinese game of Mah Jongg.  Some historians date Mah Jongg back to the
time of Confucius -- over 25 centuries ago!

     It's believed that sailors and fishermen played Mah Jongg as a
diversion from the monotony of their long voyages.  The game was
originally played with cards, but eventually bone and bamboo tiles were
substituted since these were less likely to be blown off the deck.

     Mah Jongg for Windows recreates the beauty and addictive pleasure
of Mah Jongg, but uses modern data processing techniques and
high-resolution graphics instead of bamboo tiles.

     In an attempt to make this game as elegant and as enjoyable as
possible, the author has used some of the most advanced features of
today's state-of-the-art MS-DOS computers.  Not all PC computers are
able to run Mah Jongg for Windows.  But if yours can, prepare yourself
for the meeting of the past and future!!!


WHAT DO I NEED?

     Mah Jongg for Windows should run on any properly-equipped PC
compatible which can run Windows in standard or enhanced mode.

     You will need at least a VGA-class graphics system (640x480
resolution in 16 colors).  However, for best results, I'd recommend
Windows running in 256-color mode with a higher resolution graphics
card (800x600 or 1024x768).  Screens smaller than 800x600 will require
the entire screen to display the Mah Jongg window.  Furthermore, with
only 16 colors, the tile colors will not be reproduced properly because
of the way Windows' palette manager operates.

     A mouse is also required, but this shouldn't be a problem.
Windows itself is virtually useless without one.












                                    -  Page 5 -





THE GAME OF MAH JONGG
---------------------

THE TILES

     There are 42 different tiles used in Mah Jongg as follows:  27 Suit
tiles (nine tiles in each of three suits), 3 Dragons, 4 Winds, 4
Seasons, and 4 Flowers.


THE SUITS

     The Suit Of Dots - This suit goes back to the original sailor's
version of Mah Jongg.  The dots probably represent money.

     The Suit Of Bam - Bam stands for Bamboo.  Because bamboo was used
to make deadly spears, this suit is thought to represent power or
victory.

     The Suit Of Crak - These are also called Characters or Actors.
Crak may represent actual people or may simply be characters from the
Chinese alphabet.

     The Dragons - In the Ancient Mah Jongg, each suit was associated
with a Dragon as follows:

		   White dragons - Suit Of Dots
		   Red Dragons   - Suit Of Bam
		   Green Dragons - Suit Of Crak

This association has no direct bearing on the current play of the game.

     The Winds - These tiles simply represent the four directions of the
winds -- North, South, East, and West.

     The Flowers - The four flowers - Orchid, Plum, Mum, and Bamboo -
were introduced by a medieval princess to add beauty and romance to the
game.

     The Seasons - This is another direct representation -- this time of
the seasons - Spring, Summer, Autumn, and Winter.  It is thought that
the seasons were added to Mah Jongg by river gamblers.







                                    - Page 6 -



THE GAME BOARD

     Each game board consists of 144 tiles made up of four of each type
of tile EXCEPT for the Seasons and Flowers of which there is one each.
The tiles are laid out in a formation called a Dragon.  The position of
each tile in the dragon is completely random, making each dragon unique.
Some are more formidable than others.  Some are actually impossible to
defeat.  But all are challenging and exciting.

     The tiles are placed in stacks ranging in height from one tile at
the edge to five tiles at the center.  The easiest way to understand the
dragon is to see one.  Run Mah Jongg for Windows.  The dragon you'll see
will be a far better explanation than I can give.


PLAYING MAH JONGG

     The object of Mah Jongg is simple -- remove all of the tiles by
matching pairs.  But there IS a catch.  Only tiles which are "free" can
be removed.

     A tile is considered "free" if there's nothing on top of it and if
it can slide out to the left OR right.  If tiles on both sides are
stacked to the same height the tile is not "free" to be removed.

     Two tiles MUST be free and MUST be an exact match (exceptions
later) before they can be removed from the dragon.  Removal of
mismatched tiles and removal of un-free tiles is not allowed.

     The exception:  Since there is one each of the Seasons and the
Flowers, these tiles cannot be matched identically.  So any flower can
match with any other flower.  Likewise, any season can match with any
other season.


STRATEGY:

     During my countless hours of testing Mah Jongg, I've found a few
pieces of strategy that seem to help:

--> Concentrate on removing the four tiles which are blocking the most
moves - the top tile, the single tile on the left, and the two tiles on
the right.

--> Look for quadruples.  If all four of a given tile are free, remove
them all immediately.  This will get them out of the way and won't cause
problems later.




                                    - Page 7 -




--> Keep an eye out for doubles (two tiles free) of tiles with only two
left (the monochrome screen helps here).  These should also be removed
immediately.

--> Before removing two tiles of four remaining, be sure that no OBVIOUS
harm (trapped tiles) will occur.

--> Always check for triples.  If you've found a pair with four
remaining, see if any more are free.  Then, take the two which will free
up the most tiles.





PLAYING MAH JONGG FOR WINDOWS
-----------------------------

THE BASICS

     To start Mah Jongg for Windows, just launch it like any other
Windows application.

     Tiles are removed by first selecting one, then selecting its mate.
To select a tile, just point to it with the mouse and press the left
mouse button.  The tile will change color to show that it has been
selected. You don't have to double-click to remove the tiles.  When two
tiles have been selected, they will (after validation) be removed.

     To de-select a tile, just click on it again.  The tile will return
to normal.

     If you try to select a tile that's not free, you'll get a warning
sound (if the sound is turned on) and the tile will NOT be selected.
Likewise, if you select two tiles which don't match, you'll hear the
warning beep and both tiles wil de-select.

     The counter at the top-left of the Mah Nongg window will show how
many tiles remain in the dragon.

     This is all you really need to know to play the game.  But, there
are some other features which make the play a lot more enjoyable.  Most
of them can be accessed thru the menu bar on top of the Mah Jongg
window.






                                    -  Page 8  -





THE ADDED FEATURES

     For convenience, I'll describe the features as they appear in the
menus from left to right, top to bottom.



FILE
====

Load TIle Set
=============
        With this option, you can load in an alternate tile set.  Just
        select the set from the list and click on OK.  You'll then see
        a "thermometer" box while MJ/Windows loads & formats the tile
        set.

        Choosing a new tile set will NOT affect the game.  It will
        continue from where it was, but with a new tile set.

        Your selection will also be saved for the next time you run
        MJ/Windows.  Whenever the game starts, it will load the last
        tile set tile set that you chose.


Load Game
=========
        This will load a game previously saved to disk.  A window
        will open and you'll be asked to select a file name.  If you hit
        this button accidentally, just click the Cancel button.

Save Game
=========
       This function will save the game in progress.  You'll be
       required to type in a file name or select one that's already on
       the disk.













                                    - Page 9 -



Done
====
        Done is similar to New Game, but has some added features as
        well.  When you select DONE, your score for the game will be
        calculated and, if you've made the Hall of Fame, you'll be
        asked to enter your name.  Either way, your score & the Hall of
        Fame will be displayed.  You'll then get a new game.

        Note that EXIT and NEW GAME don't evaluate the game for
        inclusion in the Hall of Fame.  You could use these if you're
        not interested in the Hall of Fame or if the game has gone so
        badly that you don't want the embarrassment of being told that
        your score was thousands of points higher than what's needed for
        HOF entry.


New Game
========
        Selecting New Game will start a new game of Mah Jongg.  the
        computer will shuffle the tiles and a new dragon will be
        drawn.


Restart Game
============
        Restart Game will take you back to the beginning of the current
        game.  The help counter, peek counter, and clock are all reset
        to zero.

Exit
====
        Selecting Exit will quit the MJ/Windows program.

About
=====
        This will bring up an About box containing my name, address,
        and copyright notice.


Serial Number
=============
        This brings up a box which displays the version & serial number
        of your MJ/Windows game.  It also indicates whether you're
        using a registered or un-registered copy (of course you
        registered, right???).






                                   - Page 10 -




HELP
====
Tiles Left
==========
        To see exactly what tiles are left in the dragon, just select
        this!  The dragon will be replaced by a graphic depiction of
	exactly how many of which tiles are left.  Very useful for
	determining tricky moves!  To return to the game board, just
        click the OK button.

Moves Left
==========
        To quickly find out how many moves are left without being told
        what they are, choose this function.  Your score isn't affected
        by using this type of help.

Show Moves
==========
        Show Moves is really it's own little sub-function.  When you
        click on Show Moves, the machine will pause for a moment (it's
        looking for moves) and will then do one of two things.  If no
        moves are left, you'll see a "No moves left" dialog box.
        You're now free to start a new game, enter the game into the
        Hall of Fame (via the Done selection), or back-up to try to
        get farther in this game (I often do this).

        If one or more moves is left, you'll be shown what they are.
        The tiles for the first move will be highlighted.  Then, a
        small control panel with five buttons will appear on the right
        section of the Mah Jongg window.  To leave Show Moves, click
        on Cancel.  To see the next move, just click on "Next".  Click
        on "Previous" to display the previous move.  When you've
        decided which move you'd like to take, you can execute it by
        first stepping to it with the Next / Previous buttons and then
        clicking on "Do It!" The Show Moves menu will disappear and
        your selected move will be executed.














                                   - Page 11 -



        An alternate form of Show Moves will show you the moves
        available only for one type of tile.  If you'd like to get rid
        of this one particular Four of Dots, lets say, but you can't
        find a match for it, you can select that one tile, then choose
        Show Moves.  Only the moves pertainiing to that one tile type
        will be shown.  If nothing's free to match the tile, you'll get
        the dreaded No Move Available message.

        ATTENTION THREE-BUTTON MOUSE USERS:
        There is a short-cut to entering the Show Moves menu available
        to you.  Just click the center button!

        This short-cut can also be turned off in case you find yourself
        accidentally hitting the center button & entering Help when you
        don't want to.  The Center Button switch in the Preferences
        menu will turn this feature on & off.


X-Ray
=====
        You can "X-ray" the board to find which stacks a given type
        of tile is in regardless of whether or not it's buried.  To
        start an X-ray, select  "X-Ray" in the help menu.  A tile will
        be shown in a dialog box.  Use the previous / next buttons to 
        step to the tile that you want to find.  Then, click on SHOOT 
        to turn on the X-ray machine.  The stacks which contain the 
        desired tile will be highlighted.  To turn off the X-ray 
        machine, just press the OK button.


PREFERENCES
===========
        All entries in this menu section are "switches."  THe first 
        time you click them, they'll turn on.  The next time, they'll 
        turn off.  A feature is turned on if it has a check mark in 
        front of it.

        Whenever you quit MJ/Windows, the current preference settings 
        are saved.  The next time you start MJ/WIN, all settings will 
        return to their last position.











                                   - Page 12 -



Sound
=====
       This switch controls whether MJ/Windows will create its usual 
       sounds for tile selection, removal, etc.

       Note that the new Windows 3.0 sound functions are used for sound 
       generation, so if some other program is running which takes 
       control of the sound system, MJ/Windows won't be allowd to 
       access the sound hardware.  In that case, you won't get sound 
       even if it's turned on.  Likewise, when MJ/Windows is run, it 
       requests control of the sound system.  Any other sound programs 
       that are run while MJ/Windows is still running (including 
       another instance of MJ/Windows) will not be given access to the 
       sound system.

Move Check
==========
       When Move Check is turned on, MJ/Windows will check for 
       available moves after each tile removal.  As soon as no 
       additional moves are available, you'll be notified by a dialog 
       box.

Box Cursor
==========
       When the box cursor is turned on, any tile that's being "pointed 
       to" by the mouse will have a box drawn around the tile face.


Center Button
=============
       When Center Button is turned on, you can get to the Show Moves 
       function by simply clicking the center mouse button.  You can 
       turn off this convenience if you find yourself hitting the wrong 
       mouse button and getting help (and the resulting score penalty) 
       when you don't really want it.  Of course, if you dnn't HAVE a 
       center button on your mouse, this switch is completely 
       irrelevant. 


Clock Display
=============
       This switch will control whether or not the elapsed time clock 
       will be displayed.  It continues to run, though, whether it's 
       displayed or not.







                                   - Page 13 -



Tiles Left Display
==================
       This switch controls whether or not the Tiles Left counter (on 
       the left side of the window) is displayed.  Note that when you 
       select this switch, the tile count will not appear or disappear 
       until the next time you do something to affect it -- make a move 
       or back up.



Backup
======
Backup
======
       Backup will back up one move per selection.  You can back up all 
       the way to the beginning of the game, if you'd like to.

Set Mark / Go To Mark
=====================
       You can set & reset up to four bookmarks as you play.  Whenever 
       you set a mark, the current game location is remembered.  Then, 
       later on, you can decide to back up to a mark (Go To Mark).  
       This effect will be the same as repeatedly selecting Backup 
       until you got to the marked location.  

       Bookmarks work only in a backward direction.  You can NOT go 
       through several moves, set a mark, back up several moves, then 
       go to the mark.  


Special
=======
Hall of Fame
============
       Selecting this option will display the MJ/Windows Hall of Fame.  
       Press the OK bar at the bottom to return to the game.

Background Color
================
       You can TEMPORARILY change the background color of the current 
       MJ tile set with this feature.  Note that the changes will NOT 
       be stored in the tile set.  I feel that the background color has 
       been artistically (I hope) decided on by the tile designer and 
       should not be permanently changed in such a trivial manner.







                                   - Page 14 -




Pause
======
       To pause a game, just select Pause.  THe dragon will disappear 
       (to discourage cheating!!!), th clock will stop, and an 
       interesting graphics thing will glide around the window.  Press 
       the OK button to resume the game.

Print Registration Form
=======================
       This is probably the most important selection of all the menus.  
       It will print out to your current printer (I hope -- Windows 
       printing is anything but trivial!) a fill-in-the-blanks 
       registration form which you can use to register MJ/Windows and 
       / or order tile set disks.





STACK CONTROL MENU

     To get the stack control menu, just point to a tile stack and press
the RIGHT mouse button.   Then, press the button for your desired 
operation (all are explained below).  To close the menu without making 
a selection, select Cancel.

   The stack control menu features three choices, as follows:

PEEK
====
     PEEK will allow you to see all the tiles in a stack, and what order
     they're in.  Because this only helps you plan your strategy, but
     doesn't give away any moves, there are no Hall of Fame penalty
     points added to your score for accessing PEEK.  The HOF will,
     however, keep track of how many times you used this feature.















                                   - Page 15 -




ROTATE
======
     This command will "rotate" the stack - ie, all tiles will move up
     one position, except for the top tile which will move to the
     bottom.  This is very much a desperation "cheat" maneuver and
     should be used sparingly.  In fact, if you use this or the next
     REMOVE feature, your game will no longer be eligible for the Hall
     of Fame.  You'll be so warned the first time you attempt either of
     these cheats within a game.

     One important problem with Rotate is that it can cause the Back-up
     feature to behave strangely.  Back-up builds up one tile on the
     affected piles without checking them for validity, so if you
     back-up a rotated pile, you may get un-matched pairs coming back.
     I have no intention of fixing this problem, so don't even ask.  If
     you're resorting to this to try to win, you don't deserve to back
     up!


REMOVE
======
     This feature is even more of a cheat than Rotate.  You can remove
     ANY top tile, without regard for matching or being free.  As I said
     above, using this feature will keep your game out of the Hall of
     Fame -- so use it only as a last resort!!

























                                    -  Page 16  -





IN CASE OF DIFFICULTY

     So far, I haven't run into any problems -- but then again, this is 
a new product running in a strange new environment.  With all the 
different Windows configurations ou there, I expect some odd things to 
happen somewhere.  If you should run into one, please let me know!


TECHNICAL SUPPORT

     If you have any problem with Mah Jongg for Windows, , please let 
me know.  I'll be glad to do what I can to help you get it running.  Of 
course, I can't guarantee that MJ/Windows will run on all systems!  No 
software company can do that!  But as long as your PC can run Windows 
relatively well, MJ/Windows should run too.

     My only request is that you enclose a SASE if you would like a
reply.  My policy has been (and always will be) that I will NOT reply
to letters from non-registered users unless they include a SASE.  I
really don't think it's fair to expect registered users to (literally)
pay the expenses of technical support for non-registered users.
However, I will definitely reply as long as you cover the costs by
sending a SASE.  Let me repeat this -- I WILL NOT EVEN THINK OF 
PROVIDING TECH SUPPORT TO A NON_REGISTERED USER UNLESS YOU INCLUDE A 
STAMPED, SELF-ADDRESSED ENVELOPE!   NO EXCEPTIONS!!!!

     I can now be reached on BIX, if you'd rather send E-Mail.  My
username is "rbalewski".  I'm usually on a couple times a week, so you
should get a prompt reply.




WHAT'S NEXT

     Since this is the first release of MJ/Windows, there are sure to 
be further enhancements.  The first one will be a simulated monochrome 
monitor in another window.  I've always liked that feature from MJVGA 
and think it'd translate nicely to Windows. 

     I also plan to add all of the features in MJVGA's Hall of Fame 
editor to MJ/Windows in the future.

     A Windows version of the MJVGA Viewset utility is also on the 
things-to-do list.




                                    -  Page 17  -





SHAREWARE

     Please remember that this game is NOT public domain.  It is
shareware!  If you play and enjoy this game regularly, you are urged to
send the registration fee of $20.00.  Remember, shareware will only be 
around as long as YOU support the concept!

     When registering, please include the version and serial number from
the copy of MJ/Windows that you have.  All registered users will 
receive a copy of the latest version free-of-charge.

     If you'd prefer to register with a simple fill-in-the-blanks form,
you can print a registration / order form by selecting Print 
Registration Form from the Special menu.

     The order form also includes check-boxes to order various tile set
library disks (all public domain) for $3 per disk.  Please note that I 
will send these disks ONLY to registered MJ/Windows users.  If you wish 
to order any of them but are not a registered user, you MUST include 
the $20 registration fee with your order.  All extra disk orders from 
unregistered users WILL BE DISCARDED!!!!

     Whether or not you choose to register, I'd like to hear your
comments and suggestions on Mah Jongg for Windows.  If you'd like a 
reply, please include a stamped, self-addressed envelope.

     All comments and contributions can be sent to:

	      Ron Balewski
	      412 E. Ridge St.
              Nanticoke, PA  18634-2915




WHAT DO YOU GET WHEN YOU REGISTER

     I currently provide one free "registered" copy of MJ/Windows on 
a 5.25" 1.2 M HD diskette for your registration fee.  I also provide 
tile set disks (360k 5.25") for a $3 copying charge each.  Upgrades to 
MJ/Windows will also be available for only a $4 copying charge 
(provided on 1.2 M 5.25" HD disk). 







                                   - Page 18 -




     I generally do NOT send out notices to all registered users 
whenever I upgrade a product.  This would be prohibitively expensive.  
I'd have to either not upgrade my products as often as I'd like, charge 
more for upgrades, or charge a higher registration fee to cover this 
expense.  I don't want to do any of these.  However, registered users 
sould feel free to inquire about the current version.  Generally, 
upgrades shouldn't be expected for at least 6 months from the last 
release, with one year being more likely.  You can order as many 
updates as you'd like for only my $4 per disk copying charge. 

     I do plan to send notices about new products to registered users.  
I'll also probably give current customers a substantial discount on new 
products.

     Registered users also get preferred technical support.  I also 
hope to start a tech support BBS in the near future, and will give 
registered users access to tile sets, etc. which will not be open to 
the general public.




DISCLAIMER

     In no event shall the Author be liable to you for any damages,
including any lost profits, lost savings, or other incidental or
consequential damages arising out of the use of or inability to use this
program, even if the Author has been advised of the possibility of such
damages, or for any claim by any other party.





















                                    -  Page 19  -





PERMISSION TO COPY

     Individuals, clubs, and other organizations are granted permission
by the author to freely copy and distribute this program and
documentation as long as:

1. There is no charge for the software or documentation.  However, you
    may charge a service fee for disk duplication and distribution, as
    long as such fee is not more than $5.00.
2. Club members are informed of the user-supported (shareware) concept
    and are encouraged to support it with their donations.
3. The program or its documentation are not modified in any way.
4. All files are distributed together on the same diskette (if
    possible).  No file may be deleted.



ATTENTION SHAREWARE VENDORS:
============================
   You have my permission to distribute this copy of MJ/Windows as long 
as you don't charge more than $5 for the disk.  However, please don't 
ask me to send you an updated copy at my expense, because I won't!  
After all, you're the guy making money on MJ/Windows (probably more 
than I am) by selling copies.  The least you can do is cover my expense 
of sending you a copy.  Unless your request is accompanied by a 
stamped, self-addressed return mailer & a blank formatted disk (or a $3 
check), your request for a freebie WILL GO DIRECTLY INTO THE CIRCULAR 
FILE!!!  THERE WILL BE NO EXCEPTIONS!!!  If you are considerate enough 
to cover my costs, though, I will definitely send you a fresh, new copy 
of MJ/Windows.  Be sure to send your request on your company 
letterhead, since I WILL NOT send copies to the general public!  Only 
registered users & shareware distributors will qualify to get disks 
directly from me.  Again, NO EXCEPTIONS!!!





















                                    -  Page 20  -




```
{% endraw %}

## OFFER.TXT

{% raw %}
```
************************   SPECIAL OFFER   **************************

I've assembled a nice collection of tile sets which have been 
contributed by MJVGA users throughout the country.  To date, I have 15 
disks full (5 sets per self-extracting file with 1-5 such files 
(depending on room) per disk).  All are compatible with MJ/Windows.  If 
you'd like to receive them directly from me, you have two options.

First, if you contribute an ORIGINAL, DECENT tile set to add to this 
collection, I'll send you any two disks of the library.  You do NOT 
have to be a registered MJVGA or MJ/Windows user to take advantage of 
this part of the offer.

Second, if you've registered your copy of MJVGA or MJ/WIndows, I'll 
send you any number of disks for $3 each (to cover my time, materials, 
and shipping).  Please note that you MUST be a REGISTERED MJVGA or 
MJ/WIndows user to qualify for this part of the offer.  If you'd like, 
you can order these disks when you register.  If you're already 
registered, please include your name and the serial number on your 
upgrade disk if you've received one.

If you'd prefer not to accept this offer, you may be able to get the 
tile sets from a local bulletin board or from a friend.  They're in the 
public domain, so they can be freely copied and distributed.  The 
reason that I'm limiting my offer to registered users is because I 
don't want to be so swamped with orders from everyone that my 
registered users would get lost in the chaos.  I think they deserve 
that courtesy.
```
{% endraw %}

## PCX2TIS.DOC

{% raw %}
```



                                  PCX2TIS

                       Copyright 1990  Ron Balewski


************************************************************************

Important note:  This is --NOT-- a Windows program, although it *might* 
be able to run in a DOS -FULL SCREEN- partition under windows!  The 
files generated by PCX2TIS, though, are compatible with MJ/Windows.

************************************************************************


WHAT IS IT
==========

     Basically, PCX2TIS takes a specially laid out PCX file drawn with
Deluxe Paint II Enhanced (or, hopefully, any PCX paint program) and
converts it into a TIS tile set file for use by Mah Jongg -V-G-A- or 
MJ/Windows.



HOW TO USE IT
=============

     First, start Deluxe Paint in 640x480 16-color mode and load the
BLANKSET.PCX file.  Then, draw the tile faces and save the file TO A
DIFFERENT NAME as a PCX file.  Finally, move the PCX file into the same
subdirectory as PCX2TIS and type "PCX2TIS filename" where filename is
the name of the PCX file WITHOUT the .PCX extension.  When asked, type
in the name of the tile set.  That's it.  The rest is automatic.



SPECIAL FEATURES
================

     If you'd like, you can customize the edges of the tiles too.
You're not limited to the faces as you are with The Draftsman (not 
included with MJ/Windows).

     You mustn't move or re-size the tiles, though.  They MUST remain
exactly where they are in the template, otherwise they won't be cut out
properly.

     The tile in the upper right corner of the template is special.
That's a "highlight" tile.  Whenever a tile's selected, this tile is
EXCLUSIVE-OR'd with the tile on the screen, thus changing its color.
If you understand what I'm talking about, fine.  If not, don't worry
about it.  The bottom line is, you can change the way tiles are
highlighted by changing this tile.



COMPATIBILITY NOTES
===================

     PCX2TIS has been written to work properly with PCX files which were
created by Deluxe Paint II Enhanced.  It should work with other PCX
paint programs, too, but I won't guarantee it.  Sure, PCX is supposed to
be some kind of standard, but I put little faith in standards.  I won't
say it'll work until I SEE it work.

     For example, I've tried PCX2TIS with the template file modified by
the Windows 2.1 version of PC Paintbrush.  The images themselves were 
fine, but the colors were completely incorrect.  Neither PCX2TIS nor 
Deluxe Paint were able to properly read the color information saved by 
PC Paintbrush for Windows.

     That's the only other paint program I've tried.  PC Paintbrush IV
or other software might work.  I have no way of knowing.  If this
doesn't work right with your paint program, well, I'm sorry but there's
nothing I can do about it except recommend Deluxe Paint.



DISTRIBUTION
============

     This program is released as SHAREWARE.  There is no registration
fee for it, though.  When you register your copy of Mah Jongg -V-G-A- 
or MJ/Windows, you can consider yourself a registered user of this 
utility too.  I originally planned to distribute this with the MJVGA 
package, but found out that there just wasn't enough room on the disk.  
So rather than turn MJVGA into a 3-disk set, I decided to distribute 
this separately to those who need it.  MJ/Windows, however, does have 
this utility included.
```
{% endraw %}

## TILESETS.DOC

{% raw %}
```
The following ren tilesets are included with MJ/Windows:

V01.TIS - The standard original MJVGA - MJ/Windows tileset.

V02.TIS - Christmas, 1989!  I got into the "Christmas spirits" a little
          early this year & came up with ....  this!!!  It's not all
          that good -- in fact, it PROVES that I'm no artist.  But at
          least it's something different to look at!

V03.TIS - Pirates!  by Scott W. Wochholz
          This is the *FIRST* user-drawn tileset that I've received.
          Mr. Wochholz was kind enough to upload it to The Party Line
          BBS (MJVGA tech. support BBS).  It's based on a Pirates! theme
          (ships, swords, anchors, etc.) and is AWESOME.  It puts my
          tiles to shame.  Thanks, Scott!  I appreciate the tremendous
          amount of time and effort that this tileset must've taken!


The above three sets have been included with MJVGA since 1989 and are
still included with that product.  The following sets are a random
sampling of some of my all-time favorite tile sets from the library of
user-contributed sets.


CLASSIC  - A set of "classic" Mah Jongg tiles much better than my
           "original" set.  It was contributed by Jacki Forbes.

CLASSIC2 - Another classic tile set.  Slightly different than the above
           one, but just as nice.  This one was done by Emilie Cross.

EASYSEE  - A (hopefully) easy-to-see set based on my original set.

FLOWERS  - A very beautiful collection of flowers by Vidar Hoffstuten
           of Norway.

STAINGLS - Margaret Thrasher's Stained Glass tiles are incredibly
           colorful and realistic-looking.

MEDIEVAL - Medieval England by Bob Chew consists of a variety of
           colorful shields & weapons.

ROADSIGN - Bob Conner has come up with a very unique and easy-to-play
           tile set consisting of road signs (stop signs, detour, speed
           limit signs, etc.)!!


If you'd like still more tile sets, please read the OFFER.TXT file for
an offer that you won't be able to refuse!!!


```
{% endraw %}

## VIEWSET.DOC

{% raw %}
```


                               VIEWSET.EXE

            A tile set viewer for MJVGA & MJ/Windows tile sets

                  (C) Copyright 1989-1991  Ron Balewski


************************************************************************

Important note:  This is --NOT-- a Windows program, although it *might* 
be able to run in a DOS -FULL SCREEN- partition under windows!  However 
it IS compatible with the MJ/Windows tile sets.  A true Windows-based 
version of this utility -MAY- be included in a future release of 
MJ/Windows.  Until then, you may find this version useful.

Also note that this utility was originally written for use with 
DOS-base MJVGA, so you may see references to MJVGA scattered throughout 
this manual.

************************************************************************



WHAT IS IT
----------

     VIEWSET II is simply a utility to look at MJVGA tile sets.  You can
also "zoom in" on individual tiles.



HOW TO USE IT
-------------

     To use VIEWSET II, first be sure that your current directory
contains your tile set .TIS files.  Also be sure that VIEWSET.EXE is
available either directly or thru a path.  Then just type VIEWSET.

     You'll be given a list of all .TIS files in the current directory.
Just select one by left-clicking on it.  If you have more than one
"windowful" of tile sets, a scrollbar will appear.  The scrollbar will
work as you'd expect it to.

     You can magnify any of the tiles by left-clicking on it.  Then
left-click to return to the tiles screen.

     To exit the tiles screen, just right-click (or left-click anywhere
there's not a tile).  You'll be returned to the file selection menu
where you'll be able to select another tile set for viewing.

     To exit VIEWSET II completely, just return to the file selection
menu and choose ESC or press the ESC key on the keyboard.



DISTRIBUTION
------------

     VIEWSET II is shareware, but there's no registration fee associated
with it.  If you register MJVGA, you're also considered a registered
user of this utility.

     The first VIEWSET utility was originally distributed on the same
disk as MJVGA.  Unfortunately, MJVGA and its associated files have
grown.  So, there's no longer enough room on the disk for VIEWSET.  I
could have made the new MJVGA into a two-disk set, but I --HATE-- the
idea of forcing people buy -TWO- disks from those PD vendor sharks.
The sharks'd be making TWICE as much on MY work!  NO WAY!!!  If you
want VIEWSET II and PCX2TIS, you can buy the disk -- but you don't have
to!



IMPROVEMENTS
------------

     The only improvement between VIEWSET and VIEWSET II is in the file
selection screen.  The file select box is now much nicer, thanks to an
improved graphics library.  I've also added the titles to the selection
box, so you don't have to guess about which tile set you want to look
at.  The rest of the program is the same.  After all, it's so basic that
what else could change!?!?



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
shareware contains over 2700 titles divided into 120 logical categories.

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

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3373

     Volume in drive A has no label
     Directory of A:\

    MJWIN    ZIP    257696  11-19-92   2:44p
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       541   2-04-94   6:42a
            9 file(s)     322372 bytes
                           35840 bytes free
