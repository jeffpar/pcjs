---
layout: page
title: "PC-SIG Diskette Library (Disk #952)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0952/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0952"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SUPERNOVA - A TEXT ADVENTURE GAME"

    SUPERNOVA is an interactive text adventure set in the future.  As the
    dauntless adventurer, you will partake in an epic story that spans a
    galaxy and gives you the chance to save a civilization from an exploding
    star.
    
    You begin the game on a remote mining planet with little to look forward
    to except another back-breaking day in the mines.  From here on, you're
    on your own!
    
    A 16-color display keeps you abreast of your injuries, hunger and thirst
    levels, sickness, and weariness, and displays necessary diagrams and
    signs.  Sound effects are used throughout the game and over 1000 words
    are in the vocabulary.  Included is a nice touch -- a "clue" function
    when you are well and truly stuck.
    
    Now, if you're going to save a civilization, you'd better get started!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HELP1.TXT

{% raw %}
```
                         _____________________________
                        |                             |
                        |      S U P E R N O V A      |
                        |                             |
                        |   I N S T A L L A T I O N   |
                        |_____________________________|

These notes will help you get started as soon as possible:

* SUPERNOVA  cannot be  booted  from the  game  diskette  because  there is not
  enough memory  left on the  diskette  to put a  command.com  file.  Therefore
  it is  necessary  to power-on  your  computer  with a disk  that DOES  have a
  command.com  file on it (in the  directory.)  The diskette  you decide to use
  will become your "boot" (or power-on)  diskette--THIS DISK MUST BE INSTALLED.

There are two ways to install a SUPERNOVA "boot" disk:

 1) Copy the config.sys  file (included on your game diskette) to the  diskette
    you  plan  to use  when  you  power-on  your  computer  to play  SUPERNOVA.
                                      OR
 2) Use the  INSTALL program  (included  on your game  diskette) to  create  a
    config.sys  file.  The INSTALL  program is  explained on the  next  screen.

```
{% endraw %}

## HELP2.TXT

{% raw %}
```

                   ::::::::::::::::::::::::::::::::::::::::
                   ::INSTALLING A SUPERNOVA BOOT DISKETTE::
                   ::::::::::::::::::::::::::::::::::::::::


1) Either  make a  backup copy  of your  DOS diskette  (must be version 2.0  or
   higher) or use any diskette that has a copy of command.com on it.

2) Turn on  your computer with the  DOS diskette in drive A:  (Note:  Remember,
   your disk will now become the "boot" disk.)

3) After  the  A>  prompt  appears  remove  your DOS  diskette  and insert  the
   SUPERNOVA diskette into drive A:

4) Type INSTALL and press the <enter> key (or <return>, etc.)

5) The INSTALL program  will explain  itself.  At the  bottom,  in  highlighted
   letters it will ask you to remove the SUPERNOVA disk and insert your  "boot"
   diskette.  Do this, then press any key to continue.

6) A few  seconds  later  your  "boot"  diskette  will be  properly  installed.

```
{% endraw %}

## HELP3.TXT

{% raw %}
```

                   ::::::::::::::::::::::::::::::::::::::::
                   ::INSTALLING A SUPERNOVA BOOT DISKETTE::
                   ::::::::::::::::::::::::::::::::::::::::


7) Now that you have a  properly  installed  "boot" disk you are  ready to play
   SUPERNOVA.  But first,  due to the way  DOS  handles  files,  you must  turn
   your computer off and back on again.  This time make sure  your "boot"  disk
   is in drive A: when the computer is turned on.  DOS  needs to find the  file
   information  that is now  in the  config.sys  file,  and it only  reads this
   information when the computer is turned on.

*  REMEMBER:  From now on,  whenever you want  to play  SUPERNOVA,  you will be
   required to power-on  your  computer with your "boot"  diskette in  drive A:

*  And again,  an easier way  to make a  "boot"  diskette is  simply to use the
   DOS  'copy'  command  to  transfer  the  config.sys  file  provided  on  the
   SUPERNOVA disk to your chosen "boot" disk (i.e. copy config.sys b:).

*  Further  instructions  will be  offered  when you  run the  INSTALL  program
   that is provided on the SUPERNOVA diskette.
```
{% endraw %}

## INSTRUCT.TXT

{% raw %}
```

                       SUPERNOVA INSTRUCTIONS
                       ----------------------

Supernova is an adventure set in the future.  You begin on a remote
mining planet, with little to look forward to except another back-
breaking day in the mines.

To play Supernova, type sentences such as: OPEN THE HATCH THEN ENTER
THE SHIP, or SHOOT THE CREATURE WITH THE RAY GUN THEN GET EVERYTHING.
Supernova recognizes over 1000 words.

Read each room description carefully, examine anything that looks
important, and try to explore all possible passages and rooms.  Draw
a map on a piece of paper as you move through Supernova's "world."


The author asks that you pay him $10 if you like Supernova.  This fee
will help make up for the two years of programming work that went into
the creation of this game.  It will also register your name so that you
can call the author for technical help and clues if you get stuck.

Please send a check to:  Scott Miller
                         4206 Mayflower Dr.
                         Garland, TX 75043

Call for help (registered only):
                         Scott Miller   (214) 240-0614
                         Terry Nagy     (214) 271-3065


For $100 you can receive the complete source code to Supernova, which
was written in Turbo Pascal version 3.  The code will be sent on two
disks.  Use the code to learn how to write a sentence parser, or your
own adventure game.


LOADING
------------------------------------------------------------------------

Supernova, due to its large size, cannot be booted (or loaded) from the
main disk.  You must first prepare a "boot" disk.  This procedure is
explained in greater detail on the HELP menus (type HELP while at the DOS
prompt, with the Supernova disk in drive A.)

1. Format a disk with DOS 2.0 or higher.
2. Put this DOS disk into drive A and restart your computer.
3. When the A> appears, remove the DOS disk and insert the Supernova disk.
4. Type INSTALL, then [enter] to run the installation program.
5. Follow the instructions given by the INSTALL program.
6. Your newly created DOS disk is now your Supernova "boot" disk.  You
   will need this disk everytime you want to play Supernova.  It can also
   double as your save/restore disk, for saving games in progress.

The above routine need only be done once.  However, the following LOAD
steps below must be done everytime you want to play Supernova.

1. The computer must be "booted" (turned on) with the special "boot"
   disk in drive A.
2. When you see the A>, remove the "boot" disk and insert the Supernova
   game disk.
3. Type NOVA /C for color or NOVA /M for monochrome, then [enter] to
   start your adventure.


COMMANDS
------------------------------------------------------------------------

CLUE - gives a hint associated with your current location.
COMMANDS or VERBS - shows a two screen list of possible commands.
FIND [object] - tells if an object is within sight.
INVENTORY, INV or I - displays your current list of possessions.
LOOK or L - examines your current location.
REPEAT or R - repeats last sentence or command.
RESTART - ends current game and starts a new one.
RESTORE - resumes a previously SAVED game and lets you continue playing.
SAVE - lets you save you present game to be RESTORED for later playing.
ROOM DESCRIPTION or RD - toggles game between full room descriptions
    each time you enter a new location, or brief descriptions.
SCORE - gives your current score and rank.
QUIT or Q - lets you quit your current game.  (Note: you usually will
    SAVE the game first.)
WAIT or Z - lets one unit of time to pass without any action.


COMMON VERBS
------------------------------------------------------------------------

EXAMINE or EX [object] - lets you study a specific object.
GET [object] - adds object to your inventory.
DROP [object] - removes an object from you inventory.
    also GET ALL, GET ALL BUT [object], GET [object], [object] AND [object]
Directions: NORTH, EAST, SOUTHWEST, or N, E, SW, etc.
EAT [object] and DRINK [object] - used to consume foods and drinks.
PUSH [object], PULL [object], MOVE [object], and TURN [object]
LOOK (AT, INSIDE, BEHIND, UNDER, ON TOP OF) [object]
WEAR [object] and REMOVE [object] - used for clothing.
THROW [object] (AT, TO, ACROSS, IN DIRECTION OF) [object]
PUT [object] (WITHIN, UNDER, ON TOP OF, BESIDE, BEHIND, etc.) [object]
GIVE or SHOW [object] to [object or creature]
OPEN or UNLOCK [object] with [object]
TURN [dial] TO [position] - e.g. TURN RED DIAL TO 56.
TYPE [something] - used to enter data on keyboards, etc.
HIT [object] WITH [object]
BUY [object] WITH [object] or BUY [object] FROM [person]
[character name], [what you want to say to character] - use this format
    when you want to say something to someone else in the game.
    i.e.  ALIENS, CAN YOU TELL ME ABOUT THE CRYSTAL.


ENTERING COMMANDS, PHRASES, FULL SENTENCES
------------------------------------------------------------------------

All commands, etc. are entered at the blinking ">>".

A simple phrase might be DRINK, WALK EAST or EX CONTROLS.  Every phrase
may contain only one verb.

Multiple verb phrases and commands may be combined on a single input line
by separating with a period or the word THEN.  For example, EAST. NORTH.
OPEN HATCH THEN CLIMB DOWN LADDER.  The word IT refers to the last noun.

The game only understands the first seven letters of any word used.


SAVE AND RESTORE COMMANDS
------------------------------------------------------------------------

SAVE and RESTORE are necessary because completing a game may require many
hours of play.

Before you finish a game session, type SAVE.  The game will clear the
screen and respond: "Which disk drive?" (default is A)  If you have a
two-drive system, insert a formatted disk in drive B and type B [enter].
With a single-drive system, remove the game disk and insert a formatted
disk, press [enter].  The game will respond: "SAVE under what file name?"
(Note: '/' aborts the SAVE.)  Type in a file name that the game can use to
save you current game location and status.  It is best to use a name that
refers to your current room, i.e. KITCHEN.  Also at this point you can
type DIR or FILES to get a current list of save names already in use on
that disk.

RESTORE your file in the same way, but with the RESTORE command

========================================================================
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0952

     Volume in drive A has no label
     Directory of A:\

    B1               11713   5-22-85  10:07p
    C1                8580   5-22-85  10:35p
    CONFIG   SYS        11  10-26-85   5:52p
    HELP     BAT        86   5-17-85  11:27p
    HELP1    TXT      1238   5-22-85   1:07a
    HELP2    TXT       962   5-18-85   6:37p
    HELP3    TXT      1175   5-18-85   6:40p
    INSTALL  COM     13946   5-29-85  11:18p
    INSTRUCT TXT      6541   5-27-87  12:13a
    L1               47716  10-21-85   3:25p
    NOVA     000      7424   1-01-80  12:42a
    NOVA     001     16384   1-01-80  12:43a
    NOVA     002     54272   1-01-80  12:45a
    NOVA     003     28672   1-01-80  12:46a
    NOVA     COM     33674   1-01-80  12:46a
    R1               25850  10-21-85   3:17p
    R2               25850  10-21-85   3:17p
    S1               58515  10-09-85   1:17p
    SM                9581   5-10-85   1:25p
           19 file(s)     352190 bytes
                               0 bytes free
