---
layout: page
title: "PC-SIG Diskette Library (Disk #1282)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1282/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1282"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TOMMY'S SAUCER"

    Climb into a flying saucer cockpit to battle enemy saucers.  Your
    mission is to destroy invading ships with the help of your ray beam.  A
    point is scored every time you destroy an enemy saucer but the score
    reduces by one for every 30 clock ticks.  The mission terminates when
    your shields are blasted and your ship is destroyed.
    
    TOMMY'S SAUCER has various exotic alien display panels to show the
    energy and shield level, range, target crosshairs lock-in status, and
    aiming coordinates.  You use a command panel at the bottom of the
    screen.  The program has a sound effect toggle, a demo mode, function
    key control, an optional expanded view screen, and nine levels of
    difficulty.  The sound and color show is nonstop and akin to a sci-fi
    movie.  Runs on mono or color.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1282.TXT

{% raw %}
```
Disk No: 1282
Disk Title: Tommy's Saucer
PC-SIG Version: 1.1

Program Title: Tommy's Saucer
Author Version: 1
Author Registration: $2.00 for more toys.
Special Requirements: None.

Climb into a spaceship cockpit to battle enemy saucers.  Your mission
is to destroy invading ships with the help of your shield and energy
stores.  A point is scored every time you destroy an enemy saucer but
the score reduces by one for every 30 clock ticks.  The mission
terminates when your shields are blasted and your ship is destroyed.

TOMMY'S SAUCER has various display panels to show the energy level,
range, target lock-in status, and aiming coordinates.  You use a command
panel at the bottom of the screen.  The program has a sound effect
toggle, a demo mode, function key control, and an optional expanded view
screen, and nine different levels of difficulty.  Runs on mono or color.

File Descriptions:

BUGS!    EXE  Bugs finding contest informattion.
FORM     EXE  Prints order form.
READ     EXE  Program to read other files.
SAUCER   DOC  Documentation for TOMMY'S SAUCER.
SAUCER   EXE  Main program.
SILLY    LST  Commonly asked user questions.
TOYPAKS  LST  List of electronic toys marketed by author.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## SAUCER.DOC

{% raw %}
```
TOMMY'S SAUCER (C) COPYRIGHT 1986 BY TOMMY'S TOYS
P. O. BOX 11261, DENVER, CO 80211 USA.  ALL RIGHTS RESERVED.
CATALOG #86-018-1A

INSTRUCTIONS:

ONE DAY AN ALIEN SAUCER CRASH-LANDED IN TOMMY'S BACKYARD.  WHILE HELPING THEM
REPAIR IT, TOMMY SECRETLY MADE A COPY OF THE COCKPIT OPERATOR'S MANUAL. AFTER
THEY LEFT, HE WAS PLAYING AROUND AND CONSTRUCTED THIS MOCKUP OF THE SHIP.

DISPLAYS:
THE COCKPIT DISPLAY HAS MANY FEATURES THAT TOMMY CAN'T TRANSLATE INTO EARTH
TONGUES, BUT IN THE UPPER RIGHT HAND CORNER HE HAS FOUND OUT HOW TO DISPLAY IN
ENGLISH SOME CRUCIAL SHIP PARAMETERS SUCH AS SHIELD AND ENERGY STORES. WHEN AN
ENEMY SAUCER COMES WITHIN DETECTION RANGE (1000 ALIEN RANGE UNITS), THE UPPER
LEFT HAND TARGET DISPLAY POPS UP GIVING RANGE AND TARGET LOCK-IN STATUS, ALONG
WITH COMPUTER AIMING COORDINATES, IF YOU SPEAK HAL 9000.

THE BOTTOM LEFT HAND DISPLAY IS THE SAUCER'S COMM PANEL.

THE LOWER RIGHT HAND DISPLAY IS A MULTI-PURPOSE GLINCHING SYSTEM THAT CANNOT
BE ADEQUATELY EXPLAINED IN EARTHLING TONGUES.

THE UPPER RIGHT HAND SKULL DISPLAY IS ONLY FOR THE USE OF THOSE WITH HYPER
INTELLIGENCE, SO IT WILL NOT BE DISCUSSED HERE.

THE LOWER DISPLAY PANEL IS A BATTLE MANAGEMENT UNIT FOR THOSE FLUENT IN ALIEN
AND WELL-TRAINED IN GLINCH PENTING; PERHAPS SOME EXPERIENCE CAN HELP YOU HERE.

OPERATION OF THE SAUCER:

SPEED CONTROL:
THE SHIP'S SPEED IS CONTROLLED VIA THE NUMERICAL KEYS 1 THRU 9 ON THE UPPER
ROW OF THE KEYBOARD.  1 IS THE SLOWEST AND 9 IS THE FASTEST.

CROSSHAIRS CONTROL:
THE 4 ARROW KEYS ON THE NUMERICAL KEYPAD MOVE THE CROSSHAIRS.

RAYBEAM CONTROL:
TO FIRE YOUR RAY BEAM, PRESS FUNCTION KEY F9 OR F10.  YOUR CROSSHAIRS MUST BE
LOCKED IN TO SCORE A HIT (TARGET LOCK IS INDICATED IN THE UPPER LEFT CORNER
DATA DISPLAY).  SUCCESSIVE FIRINGS ON THE SAME ENEMY SAUCER ACCUMULATE THE
ENERGY AND INCREASE THE LIKELIHOOD OF DESTRUCTION, BUT ONCE YOU BREAK LOCK YOU
MUST START OVER.

GLINCH PENTING:
FUNCTION KEYS F7 AND F8 CONTROL THE GLINCH PENTING SUBSYSTEM.  GOOD LUCK
FIGURING OUT HOW TO USE IT!

ENERGY STORES:
THE SHIP'S ENERGY SOURCE IS UNFATHOMABLE, HENCE ITS VALUE IS NOT DISPLAYED
NUMERICALLY.  INSTEAD, THE ENERGY STORES IN THE SHIELDS AND RAY BEAM UNITS
ARE DISPLAYED.  NOTE THAT THESE STORES HAVE A MAXIMUM VALUE OF 1000 ALIEN
ENERGY UNITS, AND THAT THEY AUTOMATICALLY BUILD UP FROM THE SHIP'S PRIMARY
ENERGY SOURCE AT AN EXPONENTIAL RATE.  THUS, IF YOU PERMIT THEM TO FALL TO
A LOW VALUE, SAY, LESS THAN 100, IT WILL BE A VERY LONG TIME BEFORE THEY
BUILD BACK UP TO MAXIMUM.

SPLIT COMMAND:
HITTING FUNCTION KEY F6 WILL CAUSE THE ENERGY STORES IN THE SHIELDS AND RAY
BEAM UNITS TO BE SHORTED TOGETHER, WITH A RESULTING UNPREDICTABLE SHARING OF
ENERGY AND POTENTIAL FOR CIRCUIT LOSS.

ENEMY SAUCERS:
ENEMY SAUCER FORMATIONS ALWAYS PLAY 'CHICKEN' WITH YOUR SAUCER.  THAT IS, THEY
COME AT YOU HEAD ON AND TRY TO GET YOU IN THEIR RAY BEAMS.  BECAUSE OF TIME
WARP FACTORS, ONCE THEY PASS YOU THEY ZIP INTO THE FUTURE AND OFTEN REAPPEAR
BACK IN FRONT OF YOU, READY TO CHARGE AGAIN!  THIS IS THESE ALIENS' SENSE OF
SPORT AND FAIRPLAY.

SCORE:
YOUR SCORE IS THE NUMBER OF ENEMY SAUCERS YOU DESTROY, REDUCED BY ONE FOR
EVERY 30 CLOCK TICKS.

MISSION TERMINATION:
THE MISSION TERMINATES WHEN YOUR SHIELDS ARE BLASTED AWAY AND YOU ARE
DESTROYED.

OTHER CONTROLS:

AUTOPILOT: FUNCTION KEY F1 TOGGLES THE AUTOPILOT, WHICH ALSO SERVES AS A
DEMO MODE.  *WARNING* PRESSING F1 RESETS THE SCORE TO 0!

TO QUIT: HIT FUNCTION KEY F2, THE ESC KEY, OR THE "Q" KEY; THEN HIT THE "Y"
KEY.

TO DISPLAY THESE INSTRUCTIONS FROM THE PROGRAM: HIT FUNCTION KEY F3.

GLINT ORGAN: FOR APARTMENT HUNTING, USE FUNCTION KEY F4.

SOUND EFFECTS: FUNCTION KEY F5 TOGGLES THE SOUND EFFECTS.

EXPANDED VIEWSCREEN: THE "DEL" KEY ON THE BOTTOM OF THE NUMERIC KEY PAD
TOGGLES THE EXPANDED VIEWSCREEN MODE.

STARTUP SHOW: TO BYPASS THE STARTUP SHOW, HIT THE <ENTER> KEY TWICE INSTEAD
OF ONCE WHEN CALLING THE PROGRAM FROM DOS.

COMMAND LINE PARAMETERS:
   S    START UP WITH SOUND OFF
   M    FORCE MONO DISPLAY MODE
   C    FORCE COLOR DISPLAY MODE

EXAMPLE: >SAUCER MS

DID YOU LIKE THIS TOY?
DON'T FORGET TO TRY OUR GOBS OF OTHER NEAT LOW-PRICED TOYS AND GAMES FOR THE
IBM PC AND COMPATIBLES.  WE ARE WAITING TO SEND YOU OUR 5.25 INCH (360KB) OR
3.5 INCH (720KB) DEMO DISK, CONTAINING AN ELECTRONIC TOY CATALOG AND OTHER
GOODIES, FOR ONLY $2 TO ANY U.S. ADDRESS, $3 OUTSIDE U.S. (U.S. FUNDS ONLY OR
CHECK DRAWN ON U.S. BANK).  IF YOUR PC BORES YOU WRITE US NOW.

GOOD LUCK!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1282

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38  10-19-87   3:56p
    MANUAL   BAT       147  12-15-88  12:39p
    READ     EXE      6746  10-06-88   7:06a
    SAUCER   DOC      4583   2-02-89   7:06a
    SAUCER   EXE    134634   2-02-89   7:06a
    TOYPAKS  LST     62885   3-14-89   7:06a
    SILLY    LST     12311   3-06-89   7:06a
    FORM     EXE     79654  12-30-88   7:06a
    BUGS!    EXE      2048   9-23-88   7:06a
    GO       TXT      1002  12-15-88   4:09p
    FILE1282 TXT      1346   9-19-89   1:15p
           11 file(s)     305394 bytes
                           11264 bytes free
