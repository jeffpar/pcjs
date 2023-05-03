---
layout: page
title: "PC-SIG Diskette Library (Disk #3158)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3158/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3158"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #3158  NOVA STRIKE >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the documentation, type:  COPY INSTRUCT.DOC PRN (press Enter) ║
║                                                                         ║
║  To start the game, type:  NS  (press Enter)                            ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTRUCT.DOC

{% raw %}
```
                                NOVA STRIKE 2.0

    Nova Strike is a flight simulation combat game which takes place in space.
The object of the game is to develop the strategies and tactics necessary to
destroy all the enemy ships.  You are given only one ship which has superior
performance and weapons to accomplish this.  This new version is easier to use
and faster paced than the previous version.  Among the changes are:  easier to
use and more versatile lasers, an afterburner, a combat mode, and easier dock-
ing.  This game requires a 12MHz 80286 or greater, VGA graphics, 230k available
memory, DOS 3.3 or greater and a mouse.


                               BEGINNING OF GAME

    When game begins all ships will be positioned near one of their bases.  Each
side has three bases.  The position of these bases are randomly chosen each
game.  Only one of the three bases will begin the game with its location known
to the opposing side.  The other two are secret until a ship from the opposing
side comes within radar range of them.


                               DIFFICULTY LEVELS

    There are 3 difficulty levels.  The levels correspond to the number of enemy
ships per base when the game begins.  The levels become geometrically harder to
win at.

Level 1 - 3 enemy ships, slightly difficult to win.
Level 2 - 6 enemy ships, difficult to win.
Level 3 - 9 enemy ships, extremely difficult to win.


                               PRACTICE GAME

    This game allows you practice.  For this the beginning of the game is
altered so that you begin directly behind three enemy ships and one of their
bases.  The purpose is to allow you to practice using the weapons before
playing a real game.  Remember that this game begins with you at a very
favorable advantage behind the enemy ships which are initially pointed away
from you and that fighting 3 ships at once will be much more difficult in a
real game.


                                  OUTCOME

    The object of the game is to destroy all the enemy ships.  When either your
ship or all enemy ships are destroyed the game will end, unless there are
missiles in flight.  If so, the game will continue only until they detonate.
If your ship was destroyed during this time, your keyboard and mouse will be
frozen.  The game can end in a win, lose or draw.


                             INSTRUMENT DISPLAY

    When game begins you will be positioned directly behind one of your bases
and your instrument display will be on.  On the right there are five horizontal
bars, they are:

VLCY - Your velocity.
ACCL - Your acceleration.
SHLD - Your shield strength.
LASR - Your laser strength.
FUEL - Your current fuel.

    There are two items displayed as text, they are:

MISSILES - Your current count of missiles.

AUTOFIRE - Whether autofire is on or off.  If on it will fire lasers anytime
           you have a laser lock on a target.

    There are three circles in the middle of the screen, they are:

2D       - Top down radar.  Objects above you are red and objects below you
           are green.

3D       - 3 dimensional radar.  You are given a three dimensional perspective
           of where an object is in relation to your viewpoint.  Objects in 
           front of you are green and objects behind you are red.

           On both radars bases and ships are displayed constantly while
           missiles blink.

Artificial Horizon - The small circle between the radars is the artificial
                     horizon.  Your roll and pitch are displayed as arcs.

LOCK     - If a missile has a lock on your ship the word "LOCK" will appear
           below the artificial horizon.

ALARM    - If the alarm is set, the word "ALARM" will appear below the
           the artificial horizon under where "LOCK" appears.
 

     Finally, on the right there are:

STAR REFUELING     - If you currently within the star system this will be on
                     and you are continuously gaining 25 units of fuel.

DIFFICULTY         - The difficulty level of this game.

REMAINING BASES    - The remaining enemy bases.

REMAINING SHIPS    - The remaining enemy ships.

COMBAT             - If the combat mode is being used, the word "COMBAT" will
                     appear.  This will appear directly below the preceeding
                     information.


                               FLIGHT OVERLAYS

    At all times your flight stick, the small square and the flight stick home,
the small cross are displayed.


                               WEAPONS OVERLAYS

    There are two types of crosshairs.  One has horizontal and vertical lines
and the other is a circle with a dot in the center.

    If you have a laser lock on a target a small box will appear around the
target.

    If you have a missile lock on a target a small circle will appear around
the target.  If you have no missiles this circle will not appear.

    If you have a lock on a ship or a base it will display that targets shield
strength below it.


                                TACTICAL OVERLAYS

    When tactical overlays are on, bases and ships are designated by triangles
and circles respectively in the following conditions:     

    Your bases are displayed as green triangles unless they are known to the
enemy, then they are blue.

    Once you have discovered an enemy base it will be displayed as a red
triangle.

    When a base is fairly close to you the triangle will not appear.

    Enemy ships will have a circle around them, this aids in acquiring the ship
quickly if it is very small.  If the circle is blinking it means that the ship
is out of your radar range and in the radar range of one of your bases.  When a
ship is fairly close to you the circle will not appear.


                              STRATEGIC OVERLAYS

    Strategic overlays will display a map of the entire system.  Bases will be
displayed the same as in tactical overlays.  The location and direction of 
ships are displayed as small vectors.  Your ship is yellow and enemy ships are
orange.  You can change the magnification of this map and also toggle the
shield strength of your bases and any enemy bases in your radar range.


                                 PERFORMANCE

    Enemy ships have the same maximum acceleration and velocity as your ship
under normal acceleration.  However, they do not have afterburners which allow
you to double your maximum acceleration and velocity.

You need to be familiar with these terms:

      "maximum normal acceleration" - The maximum acceleration you are capable
                                      of without the afterburner.

      "maximum normal velocity" -     The maximum velocity you are capable of
                                      without the afterburner.


      "maximum acceleration" -        The maximum acceleration you are capable
                                      of with the maximum normal acceleration
                                      set and with the afterburner on.

      "maximum velocity" -            The maximum velocity you are capable of
                                      with the maximum normal acceleration and
                                      the afterburner on.


                                  SHIELDS

    Both ships and bases have shields.  However, only ships have shields that
can regenerate.  Shields take damage from missiles, lasers and in the case of
ships, collisions.  Bases have stronger shields than ships .  Your bases take
only one fifth the damage that a ship would take to its shields from weapons
while enemy bases take one half.  Once either takes damage that takes the
shield strength below 0, they are destroyed.  Ship shields are regenerated by
consuming fuel.

Note:  Your shields will flare red in proportion to the damage caused to them.
       When your ship is destroyed they flare to their maximum brightness.


                           LASER AND MISSILE LOCKS

    Your laser and missile locks extend for a certain angle from your line of
sight.  Your lasers can even lock onto enemy missiles. The lasers of enemy
ships are line of sight only - they require their target to be directly in front
of them, and they cannot lock onto your missiles. You must have a lock to fire
a weapon.  Although you never lock on your bases or enemy bases in combat mode,
they can still interfere with you getting a lock on something behind them.
Also, there is a certain minimum distance that a ship or base needs to be in
front of you to get a lock while you can get a lock on a missile nearly point
blank.

Note:  Your weapons will not fire if you had a tenuous lock.  That is, you did
       not have a lock the next time around when the keyboard command was
       processed.


                                   LASERS

   All ships have lasers.  It takes eight units of energy to fire your lasers
and each shot causes ten units of shield damage.  Enemy lasers take four units
of energy to fire and cause five units of shield damage.  Also, enemy ships can
fire their lasers at only one fourth the rate your ship can. Lasers are
regenerated by consuming fuel.  If you have insufficient energy to fire your
lasers your laser strength will blink.


                                  MISSILES

    All ships can carry up to 3 missiles.  Once fired they will home in on their
target even if another ship passes in front of them.  Only if they lose a lock
on the target or if the target is destroyed before the missile reaches it will
a missile try to acquire a new target.  Missiles can fly only a certain amount
of time after which they detonate.  When missiles detonate they cause damage to
any ship or base near them regardless of what the target was.  All missiles have
5 times your ships maximum normal acceleration and 2 1/2 times your maximum
normal velocity.  Enemy missiles cause between 0 - 35 units of damage while your
missiles cause between 0 - 140 units of damage depending on how well they
intercept a ship.  Other than destroying them with your lasers, the best way to
limit the damage caused by a missile to have a high velocity and pull up or down
before they hit.  Also flying towards the missile creates a very high closing
speed and makes it harder for it to get a good intercept.  One other way is to
outrun a missile.  This can usually only be done at maximum acceleration.

Note:  Often when you fire missiles they appear to fly off the screen.  This is
       because they are out of your field of vision, they are still homing in
       on their targets.  Also the damage mentioned above from lasers and
       missiles is to the shields of ships. Bases will take less damage.


                               FUEL CONSUMPTION

    Fuel is used for acceleration and to regenerate shields and lasers.  Your
ship carries twice the fuel that enemy ships do and is able to consume fuel
twice as fast if necessary for normal acceleration and regeneration of shields
and lasers.  The amount of energy that goes towards regenerating your lasers and
shields is your maximum fuel consumption minus the fuel required for your normal
acceleration.  Using the afterburner does not affect this formula.  Also while
you are in the star system you will gain 25 units of fuel which is enough to
maintain 25 percent of your maximum normal acceleration.  Be careful not to run
out of fuel outside of the system or you will be stuck.  A maximum fuel load is
approximately enough to get you from one end of the star system to the other and
back twice without using the afterburner.


                                   RADAR
    
    All ships and bases have radar of the same range.  While bases cannot attack
an enemy ship, they do transmit the position of an enemy ship.  For example, if
enemy ships are within the radar range of your base but not your ship it will be
displayed on the strategic display and tactical overlays.


                                  COLLISIONS

    If ships collide with each other they cause 1 unit of damage to each others
shields.  If enemy ships collide with either themselves or you they will
maneuver to break off the collision.  You do not collide with bases.


                                    BASES

    Bases are represented by two horizontal triangles.  Both are gray on the
outside but yours are green on the inside and the enemies are red.  Bases are
passive, they cannot attack and you cannot collide with them.  They are used to
refuel and rearm.  They do have radar which allows any ship on its side to know
the exact location of a ship from the opposing side whenever one comes into its
radar range.  Since bases do not move once a ship from the opposing side comes
within radar range its position is known from then on.


                                   DOCKING

    To dock with a base you need to fly towards the center of it at about 1/2
your max normal acceleration.  When inside it your velocity will be slowed down
to 1/5 your max normal velocity and your shields will flare green. You will
replenish your missiles and fuel.  However, if you have any missiles in flight
when you are docking you can replenish your missiles only up to the number of
missiles that are not in flight.  You cannot fire weapons when you are docking
and you cannot dock at an enemy base.


                                  COMBAT MODE

    Toggling combat mode on will set your maximum normal acceleration and turn
the afterburner on, set the mouse speed to alternate speed for combat and remove
bases from the radar screens.  Also, your weapons will not lock on enemy bases.
When you toggle it off your mouse speed, radar screens and weapon locks will be
back to normal but it is left to you to decide what velocity you want to set.


                                  AFTERBURNER

    Your ship has an afterburner, enemy ships do not.  Using the afterburner
doubles your maximum acceleration and velocity from what normal acceleration can
provide.  However the additional acceleration it generates requires twice the
fuel that the engine consumes at its normal maximum acceleration.  To use the
afterburner you must have at least one unit of normal acceleration.  When the
afterburner is on your velocity and acceleration bars will be missing the middle
line.  This means that the scale has been doubled.  Also, whenever you toggle
off the afterburner the middle line will reappear for the acceleration but if
the velocity is too high to be displayed on the normal scale the velocity will
continue to be displayed on the higher scale until the velocity decreases to
the maximum normal velocity.


                                  STAR SYSTEM

    The game takes place in a system of stars.  The system is circular although
most of the stars are located in a narrow horizontal plane.  It is here that all
bases are located.  The stars are not active in any way except as a frame of 
reference when flying and continuously supplying 25 units of fuel to any ship
within the system.


                                    SOUND

    There are different sounds for firing missiles, firing lasers, exploding
missiles, exploding ships, collisions and the alarm.  Exploding ships sound only
slightly different than exploding missiles.  There is no distance limitation for
a sound except the sound of a collision.  You will only hear this sound if your
ship collides with an enemy ship.


                                    ALARM

    Using the alarm will alert you to the presence of enemy ships or bases that
suddenly come in radar range.  It enables you cruise without having to
constantly look at your radar screens or strategic displays for attack or newly
discovered enemy bases.  It also warns you if you have come within range of a
previously known base which you were trying to skirt around.  The alarm is a
high pitched whine.


                                   STRATEGY

    Your basic strategy should be to attack 1 or 2 ships at a time and then get
away as fast as possible before other ships arrive.

    Destroying bases will force enemy ships to refuel more often.  Destroying
all of them will severely weaken them since they cannot replenish missiles and
fuel.  Without being able to refuel at bases, enemy ships will gain fuel only
from the stars and be forced to spend most of their time cruising at very low
velocities.  Destroying bases is more helpful the higher the difficulty level.


                                    TACTICS

    If you are trying to escape a ship or get out far enough in front of him so
you can turn around and attack,  jink slightly up and down and left and right
in a random order.  This will make it difficult for him to get laser lock on
you.  This is more effective if you start jinking before the enemy ship starts
firing since by then it can match your movements fairly well.

    When enemy ships are attacking your bases the tactical and stategic overlays
will display their location and you can often attack and destroy them before
they can turn around and fire their weapons at you.  This assumes that you can
reach them before they leave the bases radar range or destroy the base.

    To outrun a missile you usually need to be flying at your maximum velocity
and directly away from the missile.


Note:  The above information on strategy and tactics are only suggestions.  It
       is up to you develop the strategy and tactics needed to win.


                           MISCELLANEOUS INFORMATION

    When enemy ships attack your bases they use their lasers only, they never
use their missiles.

    You should spend most of your time flying at your maximum velocity.  While
using the afterburner to achieve this will decrease your maximum range, it will
speed up the game and help you survive an unexpected encounter with an enemy
ship.

    Try to detonate a missile soon after it is fired.  This will cause damage to
the ship that fired it.

    Try to avoid running out of fuel.  If you do and you are in the star system
your will receive enough to maintain up to 25 percent of your maximum normal
acceleration but this would leave you extremely vulnerable to attack with little
fuel for velocity and/or regeneration of lasers and shields.

    When you're upside down, objects will rotate towards you from the opposite
direction on the 2D radar.

    Occasionally when you have a base lined up on the visual display and you
switch to the strategic display the vector repesenting your ship appears to be a
little off.  This is because the end points of the vector rotate in a very small
group of pixels.


                               FILE SAVING 

    You can save games and the configuration.  Filenames can be from 1 to 8
characters including the letters (a-z), numbers (0-9), and the underscore.
Letters are displayed as upper case even though caps lock is off. On the disk
the program will add the extension ".20" for the version of the software.  You
may save as many files as you wish but the directory list can only list the
first 100.  You can also save the configuration which are the defaults you are
allowed to change such as colors on the instrument display and the mouse speed.
From then on whenever you begin a new game you use the new defaults.


                                  MOUSE

    The mouse controls the roll and pitch changes.  Moving the mouse backward 
increases the pitch, moving it forward decreases the pitch.  Moving it to the
right rolls to the left, and moving it to the left rolls to the right.


                             KEYBOARD COMMANDS
                                                 
` - Set roll to 0.                    q - Transfer shield energy to laser.
1 - Set acceleration to 0.            w - Transfer laser energy to shield.
2 - Set acceleration to maximum.      e - Toggle autofire.
3 - Fire lasers.                      r - Fire missile.
4 - Toggle sound.                     t - Toggle strategic display.
5 - Toggle afterburner.

a - Decrease acceleration.            z - Toggle instrument display.
s - Increase acceleration.            x - Save configuration.
d - Decrease magnification.           c - Restore default configuration.
f - Increase magnification.           v - Toggle shield strength.
g - Toggle combat mode.               b - Toggle tactical overlays.

\ - Toggle alarm.

              Esc - to quit, save game and quit or resume game.

          Pause key will halt the game, hit the spacebar to continue.


                The following keys change the configuration:

6 - Cycle instrument display color.   y - Cycle radar center color.
7 - Cycle text color.                 u - Cycle velocity color.
8 - Cycle increment color.            i - Cycle acceleration color.
9 - Cycle top of horizon color.       o - Cycle shield color.
0 - Cycle bottom of horizon color.    p - Cycle laser color.
- - Decrease delays.                  [ - Decrease mouse speed.
= - Increase delays.                  ] - Increase mouse speed.

h - Cycle fuel color.                 n - Cycle missile lock color.
j - Cycle crosshair type.             m - Cycle ship overlay color.
k - Cycle crosshair color.            , - Toggle speed moderation.
l - Cycle flight stick color.         . - Decrease mouse combat speed.
; - Cycle flight stick home color.    / - Increase mouse combat speed.
' - Cycle laser lock color.

More detail:
 
                     6  CYCLE INSTRUMENT DISPLAY COLOR

    This changes the color of the instrument display.  You are prevented from
changing the color to either top or bottom horizon color.

                         9 0  CYCLE HORIZON COLORS

    When cycling these colors you are prevented from changing them to the color
of the instrument display.

                         d f  CHANGE MAGNIFICATION

    This changes the magnification of the strategic display.  The three lowest
settings magnify in respect to the center of the star system, the rest in
respect to your ship.

                             `  SET ROLL TO 0

    This will enable your ship to fly perfecty straight.  Without this, even if
your artificial horizon shows you as straight you still may have some roll.
This will only work if the roll is within certain range of 0 to begin with.

                         v  TOGGLE SHIELD STRENGTH

    With this on you will see the shield strength of your bases and any enemy
bases in your ships radar range.

                               - =  DELAYS

    Setting delays will slow down the game.  This may be necessary if program
runs to fast on your computer.  Also, if the top of the screen or the flight
stick flickers excessively you will need to increase this.  The default is 0.

                           m  CYCLE SHIP OVERLAY

    This is the color of the circle that surrounds and enemy ship when tactical
overlays are on.

                        [ ] . /  CHANGING MOUSE SPEED

    Changes the rate the roll, pitch and yaw change in regard to your flight
stick. The minimum value is 5 and the maximum is 25. The default is 20 for the
mouse combat speed and 10 for the normal mouse speed.

                          , TOGGLE SPEED MODERATION

    When this is on the computer attempts to keep the speed of the game constant
for the difficulty level.  With it off the game will run faster as you destroy
ships and when they are out of your radar range.  The default is on.


                                SCREEN FLICKER

    Because of the speeds of different CPU's and VGA cards, the top of the
screen or the whole screen or just the flight stick might flicker.  To stop this
increase the number of delays "=".  This is caused by an interrupt service
routine switching the video page to increase the performance for slow computers.


                                 FILE ERRORS

    If you get an error reading or writing a file the program will abort.  Most
likely cause is that there is not sufficient room on the disk.  Also the file
could be corrupted or had the permission changed.


                                 FLASHING TEXT

    When toggling the instrument panel from "OFF" to "ON", or when changing the
configuration too quickly, or when the flight stick is positioned over text you
may end up with flashing text on the instrument display.  This is caused by a
variable changing its value at that time.  To get rid of this simply toggle it
"OFF" then "ON" again.  This problem occures because new values are written to
both video pages at the same time to increase performance rather than constantly
updating the instrument panel.

Note:  If the problem was caused by the mouse it may not be recognizable as
       text but as a small group of flashing pixels.


                              TECHNICAL SUPPORT

    If you are a registered user of this software and have a problem or a
question, send a stamped self-addressed envelope to:

                            Nova Strike Software
                            240 Tiki Drive
                            Merritt Island, FL 32953

    Give as complete a description as possible along with a description of the
system you are running on.  Also include your serial number.


                          DISCLAIMER OF WARRANTIES

    This software is licensed solely on an "as is" basis.  No warranties, either
express or implied, are made by the developer with respect to the software,
its merchantability, or its fitness for a particular purpose.  The entire risk
as to the quality and performance is with the licensed user of the software.


                         Copyright (c) 1992 Michael Kline
                         All Rights Reserved
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3158

     Volume in drive A has no label
     Directory of A:\

    NS       EXE    204928   8-02-92  12:26p
    CNF                 44   7-31-92   6:05p
    SCREEN           10000   7-07-92  11:34a
    INSTRUCT DOC     26184   7-31-92  12:49p
    ORDER    FRM      1995   7-31-92  12:06p
    GO       TXT       847  11-30-92   2:49p
    GO       BAT        31   6-04-92   2:25a
            7 file(s)     244029 bytes
                           74752 bytes free
