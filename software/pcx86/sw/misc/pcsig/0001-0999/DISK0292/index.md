---
layout: page
title: "PC-SIG Diskette Library (Disk #292)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0292/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0292"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPACEWARS AND OTHER GAMES"

    The primary program on this disk, SPACEWAR, is an excellent asteroid
    type arcade game.  The three versions, SWC for color graphics, SWATT
    for the ATT 6300 using 640x400 graphics mode, and SWH for the Hercules
    graphics card, provide good detail in a fast paced game.  Other games
    include some Turbo Pascal offerings and a large number of BASIC games
    and demos.  The large number of small simple BASIC demos with a few
    Turbo programs to add spice make this an excellent package for the
    novice programmer.
    
    Special Requirements: Hercules or color graphics card, other
    programs require BASIC
    
    How to Start: To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.
    
    Suggested Registration: $20.00
    
    File Descriptions:
    
    -------- ---  Spacewars (user-supported).
    SPACEWAR DOC  Three pages of documentation for Spacewar.
    SWATT    EXE  AT&T 640X400 mode.
    SWC      EXE  For use with color graphics card.
    SWH      EXE  Hercules graphics version.
    -------- ---  Life game in Turbo Pascal.
    LIFEC    COM  Compiled for non graphics monitor.
    LIFEC    PAS  Source code for above.
    LIFECG   COM  Compiled for graphics with 99 x 99 grid.
    LIFECG   PAS  Source code for above.
    -------- ---  Turbo Pascal demo.
    NEWSPIRO COM  Compiled version of above.
    NEWSPIRO PAS  Random character display in a curvy pattern.
    -------- ---  Basic Demos.
    ADD      BAS  It all adds up.
    AMERICA  BAS  The beautiful.
    ANTHEM   BAS  As in Natonal.
    AVERAGE  BAS  Averages numbers.
    AVERAGE# BAS  Averages numbers.
    AVERAGE2 BAS  Averages numbers.
    BAD      BAS  Bad version of above.
    BALL     BAS  Toss a ball.
    BIRTHDAY BAS  Mini cake.
    CIVILWAR BAS  Second guess the Civil War generals.
    COUNTING BAS  Sums up.
    CREATURE BAS  Tell it which way to nibble.
    CSTLDFNS BAS  An adventure game to defend your castle.
    DIVIDE   BAS  Simple division.
    DOODLE   BAS  As in Yankee.
    EQUAT?   BAS  Simple algebra equations (4 files).
    FLOWER   BAS  With its own bee.
    GRAPHICS BAS  Simple graphic display.
    GUESSNUM BAS  Out guess the computer.
    HOTCROSS BAS  Plays music.
    JINGLEBE BAS  More music.
    LIFE     BAS  The game of LIFE in basic.
    LLIFE    BAS  More LIFE.
    LIGHTLYR BAS  Small BASIC demo.
    LMAZE    BAS  Makes larger mazes direct to printer.
    MACDONAL BAS  As in Old Mac Donald had a farm...EEE III OOO!
    MARINE`S BAS  A musical bit of artillary.
    MAZE(GR) BAS  Maze program.
    MORNING  BAS  Demo program.
    MOVINGAL BAS  More music.
    NAME     BAS  Mini demo prints your name.
    OATSPEAS BAS  Song.
    OLDFOLKS BAS  BASIC demo.
    PRINT    BAS  Prints a line.
    PRODUCT  BAS  Product of two numbers.
    ROCKET   BAS  Don't blink or you will miss this mini demo.
    SAILBOAT BAS  A mini demo.
    SAINTS   BAS  Song file.
    SONGS    BAS  Menu driven tune player.
    SORCERER BAS  A nice little adventure game.
    STARS    BAS  Graphics demo that works well on Hercules.
    STATION  BAS  Mini motion demo.
    SUBTRACT BAS  And subtracts.
    SWELLING BAS  Song.
    SWIMMER  BAS  A mini demo.
    TRACK    BAS  BASIC demo.
    TYPE     BAS  Mini typing test (may have bugs).
    VACATION BAS  Mini vacation demo.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES292.TXT

{% raw %}
```
Disk No:  292                                                           
Disk Title: SpaceWars and other games                                   
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: SpaceWar                                                 
Author Version: 1.72                                                    
Author Registration: $20                                                
                                                                        
The primary program on this disk, SPACEWAR, is an excellent asteroid    
type arcade game.  The three versions, SWC for color graphics, SWATT    
for the ATT 6300 using 640x400 graphics mode, and SWH for the Hercules  
graphics card, provide good detail in a fast paced game.  Other games   
include some Turbo Pascal offerings and a large number of BASIC games   
and demos.  The large number of small simple BASIC demos with a few     
Turbo programs to add spice make this an excellent package for the      
novice programmer.                                                      
                                                                        
Special Requirements: Hercules or color graphics card, other            
programs require BASIC                                                  
                                                                        
How to Start: To read DOC or TXT files, enter TYPE filename.ext and     
press <ENTER>.  To run an EXE or COM program, just type its name and    
press <ENTER>.  For instructions on running BASIC programs, please      
refer to the GETTING STARTED section in this catalog.                   
                                                                        
Suggested Registration: $20.00                                          
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SPACEWAR.DOC

{% raw %}
```
	S P A C E W A R   D I S K    V E R S I O N    1 . 7 2


SWC.EXE		Version of spacewar for the standard PC Color Graphics
		Card in 640 X 200 resolution.

SWH.EXE		Version of spacewar for the Hercules Graphics Card in
		720 X 348 resolution.

SWATT.EXE	Version of spacewar for the AT&T Computer in 640 X 400
		resolution.

SPACEWAR.DOC	SPACEWAR documentation file. ( This file. )



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
			fire, hyper space, etc. but no one can see you.
			Cloaking will use about one unit of energy every half
			second.

	HYPER SPACE	Hyper space is a quick way to get out of a bad
			situation fast.  You pay eight energy units to use
			hyper space, and you don't know where you will end up.
COMMENTS:
	You must have energy to use your weapons or defenses.  The 'E' bar on
	your side of the bottom of the screen must display energy.  Your 'E'
	bar energy is recharged from your Dilithium crystals at one unit every
	two seconds.

	Use your phasers to shoot incoming photon torpedos.  Those torpedos do
	alot of damage.

	If you hear the warning sound, someone's shield energy is below sixteen
	units, and they are about to be distroyed.  The 'S' bar  on your side
	of the bottom of the screen indicates you shield energy.  Use the
	energy balance keys to increase your shield energy and protect yourself.
	The energy balance keys for the left player are 'Z' and 'C' and for the
	right player '1' and '3'.

	Warning, touching the planet will drain your shields very fast so stay
	away.

	When using Gravity try to get in orbit.  Care must be used when firing
	torpedoes in orbit.  If they don't hit something, they will come back
	and hit you.

	The Left Auto Robot is a good defensive player.  He is a crack shot and
	hard to destroy.

	The Right Auto Robot is an offensive player.  He will chase you around
	space firing often.



	S P A C E W A R    I B M  P C    F U N C T I O N    K E Y S


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
	of the latest version of SPACEWAR.

	USER-SUPPORTED software is based on these three beliefs:

		1.  The value of software is best assessed by the
		    user on his own system.

		2.  Creation of personal computer software can and
		    should be supported by computing community.

		3.  That copying of programs should be encouraged,
		    rather than restricted.

	     If you have any comments, bugs, additions or improvements,
	please use the address below to contact me .

	Bill Seiler
	317 Lockewood Lane
	Scotts Valley, CA. 95066
	(408) 438-4172

	SPACEWAR  COPYRIGHT 1985,1986,1987  B SEILER.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0292

     Volume in drive A has no label
     Directory of A:\

    FILES292 TXT      2443   3-21-90   6:15p
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       771   1-01-80   2:58a
    SPACEWAR DOC      4958   1-18-87   7:34p
    SWATT    EXE     25088  11-23-86   8:25p
    SWC      EXE     22528  11-23-86   8:08p
    SWH      EXE     25088  11-23-86   7:52p
            7 file(s)      80914 bytes
                           78336 bytes free
