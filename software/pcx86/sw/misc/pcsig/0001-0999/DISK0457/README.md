---
layout: page
title: "PC-SIG Diskette Library (Disk #457)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0457/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0457"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "GREATEST ARCADE GAMES"

    An assortment of our finest arcade-type games, just like the quarter-
    gulpers. Play FLIGHTMARE for space jockies, JUMPING JOE for Mario types,
    STRIKER for fighter pilots, and SPACEWARS for battling star ships.
    When you need to take a break from the action and thrills, try
    SOLITAIRE, a game that isn't in the arcades but should be.
    File Descriptions:
    
    JUMPJOE  EXE  DONKEY-KONG-like game using Mario as a Janitor.
    FLIGHTM  EXE  Protect the Omegans from the desert warriors.
    SOLITARE EXE  Play SOLITAIRE against the computer.
    MISFAC   DAT  Stores an image of the missile factory in STRIKER.
    STRKHINS BAT  This file will install STRIKER on a hard disk drive.
    STRIKER  EXE  Public domain version of SCRAMBLE.
    STRIKER  DOC  Documentation for STRIKER.EXE.
    SPACEWAR DOC  Documentation for SWH.EXE and SWC.EXE.
    STRKLOGO DAT  Stores the image of inital helicopter logo.
    SWC      EXE  SPACEWARS program for use with a color graphics card.
    STRKPARM DAT  Stores screen position parameters and the key assignments.
    TUNNELS  DAT  Stores the tunnel terrain data.
    SWH      EXE  Hercules graphics version of SPACEWARS.
    HIGHSCOR DAT  High score data file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES457.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  457  Greatest Arcade Games                               v1.1 DS2
---------------------------------------------------------------------------
This disk contains an assortment of our finest "Arcade-type" games.  You can
play anything from Scramble to Donkey Kong in programs that are similar to the
arcade versions.  Also on this disk are games that aren't in the arcades but
should be.
 
FLIGHTM  EXE+ Protect the Omegan's from the Destert Warriors
JUMPJOE  EXE+ Climb the ladder and collect keys to pass to the next level
MISFAC   DAT  Stores an image of the missile factory in Striker
SOLITARE EXE+ Play solitare against the computer
SPACEWAR DOC  Documentation for SWH.EXE and SWC.EXE
STRIKER  DOC  Documentation for STRIKER.EXE
STRIKER  EXE+ Public Domain version of Scramble
STRKHINS BAT  This file will install striker on a hard disk drive.
STRKLOGO DAT  Stores the image of inital helicopter logo.
STRKPARM DAT  Stores screen position parameters and the key assignments.
SWC      EXE+ Spacewar program for use with a color grphics card
SWH      EXE  Hercules graphics version of Spacewar
TUNNELS  DAT  Stores the tunnel terrain data for Spacewar
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## SPACEWAR.DOC

{% raw %}
```
	S P A C E W A R   D I S K


SWC.EXE		Version of spacewar for the standard PC Color Graphics
		Card in 640 X 200 resolution.

SWH.EXE		Version of spacewar for the Hercules Graphics Card in
		720 X 348 resolution.

SPACEWAR.DOC	SPACEWAR documentation file.



	S P A C E W A R   G A M E    I N S T R U C T I O N S


OBJECT:
	Destroy the other ship before it destroys you.  Use your
	PHOTON TORPEDOS or PHASERS to reduce its SHIELD energy.
	A hit with no shields will destroy the ship.

WEAPONS:
	PHOTON TORPEDOS	The best offsensive weapon.  The torpedo takes
			one unit of energy to fire and does four units
			of damage to your opponent's shields.

	PHASERS		A good defensive weapon if you are accurate.
			The phaser requires one unit of energy to fire
			and does two units of damage to your opponent's
			shields.

DEFENSE:
	IMPULSE ENGINES	Used to move your ship in the direction you are
			pointing.  Remember in space there is no friction,
			to slow down you must turn your ship around and thrust
			from the other direction.  The impulse engines use
			about one unit of energy every half second.

	CLOAK		Used to makes your ship invisible.  You can still move,
			fire, hyperspace, etc. but no one can see you, including
			yourself.  Cloaking will use about one unit of energy
			every half second.

	HYPER SPACE	Hyper space is a quick way to get out of a bad
			situation fast.  You pay an eight energy units to use
			hyper space and you don't know where you will end up.
COMMENTS:
	You must have energy to use your weapons or defences.  The 'E' bar on
	your side of the bottom of the screen must display energy.  Your 'E'
	bar energy is recharged from your Dilithium crystals at one unit every
	two seconds.

	Use your phasers to shoot incoming photon torpedos.  Those torpedos do
	alot of damage.

	If you hear the warning sound someone's	shield energy is below sixteen
	units, and they are about to be distroyed.  The 'S' bar  on your side
	of the bottom of the screen indicates you shield energy.  Use the
	energy balance keys to increase your shield energy and protect yourself.
	The energy balance keys for the left player are 'Z' and 'C' and for the
	right player '1' and '3'.

	Warning, touching the planet will drain your shields very fast so stay
	away.

	When using Gravity try to get in orbit.  Care must be use when firing
	torpedoes in orbit.  If they don't hit something they will come back
	and hit you.

	The Left Auto Robot is a good defensive player.  He is a crack shot and
	hard to destroy.

	The Right Auto Robot is an offensive player.  He will chase you around
	space firing often.



	S P A C E W A R    F U N C T I O N    K E Y S


	F1 = Exits to DOS in attract mode.
	     Switchs to attract mode in when playing the game.

	F2 = Starts the game.

	F3 = Enables the Left Auto Robot Player.

	F4 = Enables the Right Auto Robot Player.

	F5 = Places a Gravity hole at the center of the screen.

	F6 = Places a Planet at the center of the screen.

	F7 = Freezes the action for attract or play mode.

	F8 = Toggles the sound on or off.



	S P A C E W A R    G A M E    K E Y S


LEFT PLAYER KEYS
		Q = FIRE PHASERS
		W = CLOAK SHIP
		E = FIRE PHOTON TORPEDO
		A = ROTATE COUNTER-CLOCKWISE
		S = IMPULSE ENGINES
		D = ROTATE CLOCKWISE
		Z = MOVE SHIELD ENERGY TO WEAPON ENERGY
		X = HYPER SPACE
		C = MOVE WEAPON ENERGY TO SHIELD ENERGY

RIGHT PLAYER KEYS
		7 = FIRE PHASERS
		8 = CLOAK SHIP
		9 = FIRE PHOTON TORPEDO
		4 = ROTATE COUNTER-CLOCKWISE
		5 = IMPULSE ENGINES
		6 = ROTATE CLOCKWISE
		1 = MOVE SHIELD ENERGY TO WEAPON ENERGY
		2 = HYPER SPACE
		3 = MOVE WEAPON ENERGY TO SHIELD ENERGY



	S P A C E W A R   I S   U S E R   S U P P O R T E D


	     SPACEWAR is distributed under the USER-SUPPORTED concept.
	You are encouraged to copy and share this program with other users.
	Please do not remove the copyright or the user-supported notice.
	If you enjoy SPACEWAR, and want me to finish SPACE MINEZ your
	contribution ($20 suggested) will be appreciated.  For a $30
	contribution you will receive a floppy disk with the source code
	for latest version of SPACEWAR.

	USER-SUPPORTED software is based on these three beliefs:

		1.  The value of software is best assessed by the
		    user on his own system.

		2.  Creation of personal computer software can and
		    should be supported by computing community.

		3.  That copying of programs should be encourged,
		    rather than restricted.

	     If you have any comments, bugs, additions or improvements,
	please use the address below to contact me .

	Bill Seiler
	317 Lockewood Lane
	Scotts Valley, CA. 95066

	SPACEWAR  COPYRIGHT 1985  B SEILER.
```
{% endraw %}

## STRIKER.DOC

{% raw %}
```

IMPORTANT !!!!!!


ALL OF THE FOLLOWING FILES MUST BE IN THE DEFAULT DIRECTORY OR
THE CURRENT DISK DRIVE IN ORDER FOR STRIKER TO WORK.

HIGHSCOR DAT - DATA FILE TO STORE THE HIGH SCORES.
STRKPARM DAT - STORES SCREEN POSITION PARAMETERS AND THE KEY ASSIGNMENTS.
TUNNELS  DAT - STORES THE TUNNEL TERRAIN DATA.
MISFAC	 DAT - STORES AN IMAGE OF THE MISSILE FACTORY IN THE 5th MISSION.
STRKLOGO DAT - STORES THE IMAGE OF INITAL HELICOPTER LOGO.
STRIKER  EXE - THE PROGRAM ITSELF.

THESE FILES ARE NOT NECCESARY FOR PROGRAM EXECUTION BUT
ARE NECESSARY FOR FIRST TIME SETUP AND DIRECTIONS.

STRIKER  DOC - THIS FILE WHICH CONTAINS IMPORTANT INFORMATION ON STRIKER
	       AND DIRECTIONS FOR PLAYING THE GAME.
STRKHINS BAT - THIS FILE WILL INSTALL STRIKER ON A HARD DISK DRIVE - THE
	       BATCH FILE GIVES STRIKER IT'S OWN DIRECTORY ONE LEVEL
	       BELOW THE CURRENT HARD DISK DIRECTORY.

I ENCOURAGE THE LOADING OF THIS PROGRAM AND DOCUMENTATION FILES ONTO
BULLETIN BOARDS AND SHARED SYSTEMS. PLEASE FEEL FREE TO LOAD THE
PROGRAM ONTO BULLETIN BOARDS.

Striker Documentation

(c) 1985 Derek Williams

--------------------------------------------------------------------------------
1.) Hardware Requirements.

    IBM PC,XT with 64k bytes of memory. (or compatible computer.)
    IBM PCjr with 256k bytes of memory in an external card.
    DOS 2.XX OR LATER.
    Color Grapichs Display Adapter and monitor.
    Joysticks optional.

--------------------------------------------------------------------------------
2.) Starting STRIKER.

    Place the floppy diskette in A: and turn the computer on or
    reset the computer by pressing Alt+Ctrl+Del.

--------------------------------------------------------------------------------
3.) About Striker.

    Striker is a  grapichs  oriented  game for	the IBM personal
    computer  series. In STRIKER the player is placed in control
    of a helicopter whose mission is to navigate various tunnels
    in	order to complete  five seperate missions  of skill. The
    game includes four sepearate skill levels which allows for a
    wide range of end user playing skill.Many other conveniences
    are  included in STRIKER. The user can center the screen and
    select color pallette. The user can also redefine the entire
    set of controlling	keys to his preference. High Scores, for
    the  four  different  skill  levels, may  be  displayed  and
    cleared. The  game	includes keys to  pause, toggle sound on
    and off, and  abort the game  at any  time. The program also
    allows a wide  variety of joysticks to be attached. By using
    the  Adjust  Joystick option  in the other	options menu the
    game  can handle joysticks of widely  varying resistance and
    a varying number of  buttons. STRIKER is designed to be easy
    to use. The program  on boot-up automatically determines the
    computer, PC,XT or Jr, that it is on and the number, if any,
    of joysticks attached to the computer. This makes setting up
    the software an option and not a requirement.

--------------------------------------------------------------------------------
4.) How to play STRIKER.

    The mission in STRIKER is to navigate the helicopter through
    various tunnels and  successfully complete the five separate
    missions. Various  obstacles, including 5 different kinds of
    aliens, gun turrets and missles, try to keep the player from
    completeing  his  mission. The  player is given two means of
    defense: bombs and	bulletts. By using the bombs and bullets
    the player	may shoot down the various  aliens and obstacles
    for points. There  are  various fuel canisters located along
    ground.  These  canisters  give  no  point values but the do
    resupply the helicopter with fuel. The player  must resupply
    his  fuel  in the  later levels  or he  will run out of fuel
    due to the	manuevering  required in  the later levels. Once
    the  player has  completed the tunnel  he then must complete
    one of five missions. These missions are described in detail
    in	the section  entitled "Mission  Information". After  the
    game  is completed	the computer  checks to see if the score
    achieved is good  enough to be saved  to a high score  table
    and if so the user is asked  to input his name and the score
    is saved to one of the four separate score boards. One board
    is maintained for each skill level.

--------------------------------------------------------------------------------
5.) Controlling Striker.


     This  section tells  how to control  the helicopter through
     the joystick and keyboard.

     Predefined Function Keys.
     -------------------------

     IBM PC and IBM PC XT and COMPATIBLES.

     CTRL-P	      - Pause game.
     CTRL-S	      - Toggle sound on and off.
     CTRL-NUM LOCK    - Pause game. (NOT ON PCjr.)
     CTRL-SCROLL LOCK - Abort Game. (NOT ON PCjr.)
     CTRL-B	      - Abort Game.

     IBM PCjr.

     CTRL-P	      - Pause game.
     CTRL-S	      - Toggle sound on and off.
     CTRL-B	      - Abort Game.

     Movement Contorl Keys.
     ----------------------

     There are four primary keys for movement. They are initally
     defined as the cursor control keys on the cursor pad.

			 ^
			 |
			 |  UP ARROW IS USED TO MOVE HELICOPTER UP
			 |
     LEFT KEY MOVES <---- ----> RIGHT KEY MOVES HELICOPTER RIGHT.
	      LEFT	 |
			 |
			 |
			 V  DOWN KEY MOVES HELICOPTER DOWN.


      These keys may be  pressed and released  at any  time. The
      helicopter will continue	to move in the	direction of the
      pressed key until  that key is released. More than one key
      can  be held  down to produce  diagonal  movement. If  two
      opposing	keys  are  held  down  moition	on  that axis is
      cancelled out.For example is the up and down keys are both
      held at the same	time the helicopter  will  level out and
      will  move  neither  up or down. The  ability  to hold and
      release  keys  makes  STRIKER easy  to  control  from  the
      keyboard.

      The SPACE BAR fires bullets from the helicopter.

      The "X" key drops bombs from the helicopter.

      The ESC key is defined as an alternative pause key.

      All of the above key  definitions can  be changed. See the
      section entitled "Other Options Menu".

    JOYSTICK CONTROL
    ----------------

     A	joystick  may be  used to control  the	helicopter.  The
     joystick may have up  to two buttons. If the  joystick  has
     only  one button that  button  will  fire	bullets. If  the
     joystick has 2 buttons  the first button will fire bulletts
     and the second  button will  drop bombs. When joysticks are
     activated the bomb  and fire keys and  well as the function
     keys are  still active  on the keyboard. This  allows users
     with one button to drop bombs from the keyboard.

--------------------------------------------------------------------------------
6.) Aliens and Point Values.

    There  are five types  of aliens. Of these	five types  four
    can  be destroyed  and give point  values between  20 and 80
    points. The  fifth alien is a Space  Mine. The Space Mine is
    impervious	to attack  and cannot  be destroyed. However the
    Space Mine	is incapable  of firing  shots.  The player must
    avoid  the	Mine  beacause any  contact  with  the mine will
    destroy the helicopter. The  Gun Turret on the ground scores
    120  points.  The  Missiles  score	80  points  and the FUEL
    canisters score a fuel bonus but no point value.

--------------------------------------------------------------------------------
7.) Mission Information.

    There are five Missions.
    They are:

   1.) PICK UP YOUR SPIES

       In  this  mission  you  must pick  up your spies. A small
       bunker will move  onto the screen with a landing pad. The
       player must land on the pad and wait for the spies to run
       out to the helicopter. If the player  takes off again and
       runs into a spy, the spy is  killed. If	all three  spies
       are  destoryed  the  player has	failed	his  mission and
       receives no bonus for the mission. The player may pick up
       only a  few of the  spies but this  will lower  the bonus
       points for the mission.

   2.) DROP OFF YOUR SPIES

       In this mission	you must drop off the spies picked up in
       mission one. If	all three  spies were  destroyed  in the
       first mission no building will scroll onto the screen and
       a message will be displayed informing the user that there
       is no mission to be completed beacause the spies were all
       killed. Otherwise a building  with 2 helipads will scroll
       onto the screen. The helipad on the left is for 2 men and
       the  helipad on the right  is for the last  spy. Once the
       spies are dropped off the mission is complete and a bonus
       will be awarded.

   3.) PICK UP CARGO

       In  this  mission  you must  pick up  three containers of
       cargo. In order	to pick up a  container you must land on
       it with	the helicopter level. The  landing  runner  must
       also be perfectly level with respect to the box. Once you
       land on the box it will be loaded into the helicopter. If
       you land improperly on a box the helicopter will explode.

   4.) RESCUE STRANDED PEOPLE

       In  this  mission  you must rescue people  from a burning
       building before the fire reaches the top of the building.
       If you  run into a  person on top  of the  building  that
       person  is  destroyed. If  a  person  is  on  top  of the
       the building when the fire reaches the top that person is
       destroyed. There  are three people  to rescue altogether.
       If  the helicopter  runs into the  building or  is on the
       building when the fire reaches the top it is destroyed.

   5.) DESTROY MISSILE FACTORY

       In  this  mission you must  destroy  the missile  factory
       before three missiles are  loaded onto the truck. You can
       bomb  the missile factory  to destroy it. There are three
       sections to the	missile  factory and  all three must  be
       bombed in order to destory the factory. However, the flow
       of missiles can be stopped by bombing either the truck or
       the converyor belt.

			       Scoring.

       The first time a mission is played it is worth a possible
       bonus of 1000 points. Each  mission  after that is  worth
       1000  points more. However, on  missions  1-4 points  are
       awarded on how successfully the mission was completed. In
       other words if the player resuces only 1 spy in mission 1
       he receives  25% of  the possible bonus or 250 points. If
       he rescues 2 he	recieves 50%  (or 500 points)  and if he
       rescues all 3 he receives 100% (or 1000 points). This  is
       the same for the  other three missions and is tied to the
       number of people, or in the case of mission the number of
       boxes, rescued or retreived.

--------------------------------------------------------------------------------
8.) Other Options Menu.

       These  menus  allow  you  to configure  STRIKER for  your
       praticular machine. The menus are as follows:


	Game Demonstration.

	 This is a prepetual running demonstration of STRIKER.

	Display High Scores.

	 This menu displayes the high score table for the current
	 skill level.

	Joystick Adjustment.

	 This menu  allows you to calibrate  STRIKER to  your own
	 set of  joysticks. The  computer will determine  whether
	 you have one or  two joysticks and if	you have only one
	 the computer will automatically select that joystick. If
	 you have two joysticks  the computer will  ask you which
	 one to use. The computer will	then ask how many buttons
	 are  on  the  joystick.  After  this  slowly rotate  the
	 joystick  around its  outer  edge. This  will	allow the
	 computer to determine	the resistance of your joysticks.
	 After this press return  and the  game will be set up to
	 use your joysticks.

	Adjust Keyboard

	 This option allows you  to choose the keys you will use
	 to play STRIKER. The  computer will ask for 6 different
	 keys: UP,  DOWN,  LEFT, RIGHT,  BOMB,	FIRE BULLET, and
	 PAUSE. The pause  key you define is in  addition to the
	 CTRL-P key which  is automatically defined. The default
	 key assignments are:

			UP : Up key on cursor key pad.
		      DOWN : Down key on cursor key pad.
		      LEFT : Left key on cursor key pad.
		     RIGHT : Right key on cursor key pad.
		      BOMB : "X" key.
	       FIRE BULLET : SPACE bar.
		     PAUSE : ESC key.

	Adjust Display.

	 This option allows  you to center the screen and choose
	 from  the  two avaliable color  pallettes.  Center  the
	 screen by   using the	cursor key  pad arrow  keys  and
	 change the pallette  by using the "P"  key. Press ENTER
	 when done to save the values to disk.

	Reset High Score List.

	 This option clears the high score table for the current
	 skill level. The write protect tab must be off the disk
	 in order for this to work.

--------------------------------------------------------------------------------
			   END OF DOCUMENT.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0457

     Volume in drive A has no label
     Directory of A:\

    FILES457 TXT      1368   9-29-86  11:31a
    FLIGHTM  EXE     42752   1-01-80  12:22a
    GO       BAT      1513  10-01-86  12:07p
    HIGHSCOR DAT       512   1-01-80  12:01a
    JUMPJOE  EXE     62720   4-23-85  11:29p
    MISFAC   DAT      1536   1-01-80  12:51a
    SOLITARE EXE     34816   4-23-85  10:06p
    SPACEWAR DOC      4808   1-31-85   4:26p
    STRIKER  DOC     13519   1-01-80   2:52a
    STRIKER  EXE     67285   1-01-80   2:16a
    STRKHINS BAT        93   1-01-80   2:52a
    STRKLOGO DAT      6144   1-01-80  12:40a
    STRKPARM DAT       512   1-01-80  12:00a
    SWC      EXE     22528   1-31-85   4:48p
    SWH      EXE     25088   1-31-85   4:36p
    TUNNELS  DAT     49152   1-01-80  12:36a
           16 file(s)     334346 bytes
                           21504 bytes free
