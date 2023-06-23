---
layout: page
title: "PC-SIG Diskette Library (Disk #3586)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3586/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3586"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3586 GREEN  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print documentation, type:  COPY GREEN.DOC PRN  (press Enter)       ║
║                                                                         ║
║  To start the game, type:  GREEN  (press Enter)                         ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GREEN.DOC

{% raw %}
```
GREEN.DOC                       Rev: 17 May 1992

Contents: 
   SUMMARY 
   STARTING THE GAME
   PLANTERS 
   PAVERS
   SETTING MODES
   SCORING
   MAP CONTROLS
   STRATEGY HINTS
   DETAILS 
   CUSTOM MAPS
   SHAREWARE & THE ASP

---------

SUMMARY: 
---------
GREEN is a strategy game in which you support your planters as they work to 
prevent the pavers from turning farms into parking lots.  You don't control 
anyone directly -- rather, you change the map itself by building walls and 
hedges, or turning pavement to rubble.  You can also raise a flag and have 
planters gather there. Your goal is to cause all the pavers to retire.  You 
do this by building walls around them, making their job too difficult to 
continue.  

There are several different maps, of varying difficulty. You have the 
ability to plant hedges, add walls, and to destroy pavement.  

GREEN requires a MS compatible mouse and EGA or better graphics.

Credits:      Design & programming: Steve Estvanik
              Graphics programming: Ken Birdwell
              Additional graphics:  Bea Sodero
              Betatesters:      Tom & Chris Vozella
                                Lauren & Nicole Estvanik
                                Gus Smestad
                                Herb Rowder
                                Matthew Stibbe
                                Mark Betz

STARTING THE GAME:
------------------
To start the game, choose Play from the main menu.   (Later use the Map 
command to select alternate maps).  When prompted, select Difficulty 1 and 
startup in clumps.  This will give you the simplest setup and let you become 
acquainted with the commands while playing the first game.                 

The map initially shows the pavers, who start all in one place because you 
chose 'clump'.  Press F4 to get the global map, and you'll see the pavers 
position on the overall map.  You'll also see the clump of planters (A-D).  
Move the mouse to the planters, and left click. The new map will show you 
the planters.  This is the fastest way of jumping from one area to another.  
You can also scroll the map. 

Left click on any clear area and the current terrain will be placed there.  
Each type of terrain has a cost, and some restrictions on where it can be 
placed (details below).  

Right click near a map edge (cursor keys work, too) scrolls the map in any 
direction (including diagonally.  

Centered under the map are icons showing the types of terrain you can 
select: 
      * Hedge 
      * Window 
      * Wall 
      * Rubble 
      * Flag 

Left click on the terrain you want to use.  Then move the mouse to the map 
and left click on the area to place it.  There are some restrictions to 
where terrain can be placed.  See details below, or experiment. 

Function keys:

      F1: Help
      F3: Unit map
      F4: Global map
      F5: Set individual modes 
      F6: Set all planter modes 
      F10: Quit the game

      Alt-S toggle sound 
      Alt-K Turn entire map 90 deg clockwise
      Alt-L Turn entire map 90 deg counterclockwise

You get income from all greens, more for trees and hedgerows than for 
hedges, bushes or clear.  You pay maintenance for walls and windows. You 
also lose income for land taken out of production to form paved areas, and 
for rubble left behind by the pavers.  Income is calculated about every 10 
seconds.  The numbers are updated at that time and the new results are 
shown as colored bars in the corners of the screen. 

Costs:
    75 to plant a hedge 
   100 to move the marker
   150 to build a wall
   200 to turn a wall into a window
   400 to turn an area into rubble

Building & Planting restrictions: 

      Nothing can be built on water.
      Window can be placed only on existing walls. 
      Hedges cannot be planted on walls or floors. 
      Walls can't be built on pavement. 

      Pavement, walls, windows can be turned to rubble.

      The flag can be placed in any green area.  Any planter with 'Move' 
orders will make their way to that marker.  You can move the marker whenever 
you like, at a cost of 100 per move. 

Winning:
There are several ways to win:
      * Achieve your savings goal.  You need to accumulate 48000 in funds, 
        plus 2000 for each degree of difficulty. (Press F7 to see goal)

      * Force all pavers to retire.

There are several ways to lose, too:
      * Let total funds go negative.  

      * Lose all planters and let maintenance & development costs
        exceed income.

Your score can increase or decrease tremendously at the end. Various bonuses 
are calculated, depending on the difficulty and ending conditions.  
Difficulty determines both number & activity of pavers, and relative payoff 
for a win.  That is, you will score much higher if you win a more difficult 
game. 

PLANTERS: 
---------
Planters represent farmers, foresters, environmentalists and others whose 
primary goals are the preservation of the earth and the renewable resources 
they can extract from it.  Planters clear rubble, plant bushes in clear 
terrain, and raise bushes to trees.  They also raise the low hedges you 
plant into taller, stronger, hedgerows. 

You can plant hedges in any green area except green rubble (grubble).  You 
can put walls in any non-pavement, non-rubble, non-water area.  You can also 
put windows in walls, to ease movement.  You may even want to provide 
occasional windows for pavers, in order to guide them into some unprofitable 
areas or devious traps.  Finally, you can change walls and pavement into 
rubble.  This hurts your income, and is costly to do, but is sometimes 
useful, since your planters may be able to return paved areas to more 
beneficial uses. See Table 2 for planting costs.

Planters need energy to plant, and lose energy when they traverse pavement 
or get blocked by walls.  They are re-invigorated when they move thru their 
lush plantings, especially hedgerows and trees.  The energy display (upper 
right hand part of screen) shows planter and paver status by color:  green 
or blue planters are vigorous and energetic.   Magenta and brown show a loss 
of interest.  Finally, red planters are in danger of being co-opted by the 
pavers.  (Rest is the best mode to try to rescue these overworked people.)  
If a planter becomes a paver, they'll show up in the opposing column and 
will begin to act like a paver. 

PAVERS:
---------
Pavers include mall developers, real estate agents, clear-cut loggers and 
others whose primary view of the environment is as a source of resources to 
exploit. (Obviously, this is just a game.  There may indeed be a non-
exploitative developer somewhere.)  Pavers turn your well tended farms and 
greenswards into parking lots.  When water is present, they also delight in 
flooding the area to make deep water playgrounds.  Walls slow them down, as 
do hedgerows.  A paver who retires disappears and has no further influence 
on the game.

Pavers are frustrated (lose energy) when they move to green areas and fail 
to destroy them.  They also lose if they get blocked by injunctions (legal 
walls) and other impediments placed there by you or your planter allies. 
Pavers gain energy when they visit their wide expanses of parking lot, or go 
through water.  Paver colors are shown in the reverse order from planters:  
Red pavers are the most energetic.  Next come brown, then magenta and blue.  
When a paver turns green, it means s/he is about to retire. 

SETTING MODES:
------------------
Setting modes is an advanced feature that you can invoke when you are 
comfortable with the rest of the game functions.  It lets you assign a 
specific function to each of your planters.  You may set them to Plant, 
Grow, Clear, Rest or Move.  The advantages of each mode are outlined below.  
While the change mode selection screen is displayed, the game is suspended.  
The selection screen also shows the current status of the pavers, but you 
can't affect them.  The default mode for all planters is Plant. 

Plant -- seek out clear areas and plant bushes

Grow  -- seek out bushes and hedges and help them grow

Clear -- seek out rubble and clear it

Rest  -- avoid expending energy 

Move  -- move to the waypoint.


SCORING:
---------
Each planter and paver has an energy rating.  This changes during the game, 
as they move and terraform.  In general, when they move on friendly terrain, 
they gain points, when they plant or destroy, they burn points.  You can't 
control any of the workers directly, but you can give them general 
directions (See 'Setting Modes').  

If paver energy goes to zero, that worker retires.  If it goes over 100, 
half that energy is given to a new worker who appears to assist that side.  
Maximum number of both factions of workers is 26.  

MAP CONTROLS
============
Scrolling
---------
Use the right mouse button to scroll the map in any direction.  Use the 
global map function to quickly jump to any area on the map, or just to see 
the overall view.
 
Rotate map
----------
You can turn the entire map by 90 degrees in either direction, using the 
Alt-K and Alt-L keys.  This sometimes is helpful to see behind taller 
terrain types.  The global map is always shown with a northern orientation, 
though. 

Show grid
--------
The F2 key or Grid button displays a grid on the map.  This helps in 
placement of terrain, since it shows the base of a wall or hedge segment.  
The grid remains in place until you scroll off, or call the global map.

STRATEGY HINTS
================
There are many ways to win the game, and you can set various goals for 
yourself (high score, lowest amount of pavement, etc.)  The following are 
some general hints to get you started.  If you send me your suggestions and 
I add them, I'll also add your name in the next edition.
 
* At first, it's important to stop the pavers from spreading too widely.  
So, concentrate on building walls that keep them in a small area.

* After you've isolated or concentrated the pavers, start to attack any 
pavers who become blue or green.  Put rubble under them and in front of 
them.  Eventually they will retire.

* If your planters go from purple to red, it's time to rest.  Often in the 
early stages, it's handy to rest all planters -- they'll recruit more 
planters quicker.  
 
* If you eliminate pavers from an area, open it up with rubble and move in 
planters to clear it up.  This will reduce debits for maintenance.


DETAILS: 
========
These sections are furnished for players who wish to know a little more 
about the innards of the program.  You don't need to read any of this to 
play the game.  

Starting positions: (in order of relative difficulty and increasing bonus).  

      Clumps     -- both sides start in tight clusters
      Edges      -- both sides start along the border areas
      Random     -- both sides distributed randomly

The starting position determines the bonus factor applied at the end of the 
game.  This varies from 25% for clumps to 75% for random.  

You also get a bonus based on the time it takes you to rid the world of 
pavers.  This bonus is added to your base score, and then the starting 
position bonus is applied:

      final score =   ( basic score + time bonus) * starting bonus

Income, Maintenance & developed area costs:
Most funds are calculated as a function of the difficulty level chosen.  Once 
built, it costs income to maintain both your walls and floors, and the 
structures built by the pavers.  

Income is produced in the following relative order:
      hedgerows > trees > floors > hedges > bushes > clear > deep water

Walls require maintenance, and windows about twice that of walls.

Pavement and rubble account for development costs.  Rubble is approximately 
10 times as expensive as pavement.  Thus, while you can use rubble to attack 
the pavers, it will cost you if you do not have planters nearby to turn it 
into flooring.

The bars in the lower left corner of the screen show the relative 
proportions of the various kinds of terrain.  Use this as a general guide to 
what types of terrain are being created or destroyed.


Terrain and movement:
------------------
Planters and pavers are controlled by probability, modified based on their 
current mode.  They are most likely to move straight ahead, slightly less 
likely to move to either side.  There is also a slight chance they will turn 
around.   When they move to new terrain, the chances that they can modify it 
are based on their energy and the difficulty level.  Thus a paver is quite 
likely to change a clear area to rubble, but less likely to change a hedge 
or tree.  They have a reasonable chance to destroy walls, but only a small 
chance of reducing hedgerows. 

The movement algorithm looks at 5 squares -- forward & 2 on each side.  Each 
is given an evaluation number.  This number then has a random number added 
to it, based on direction.  Thus if you're going forward it will be a random 
number between 1 and 20, if 2 to the left, a random number between 1 & 5.  
If all the evaluations are equal, then you will usually go straight, but 
there's still a chance to turn.  The actual evaluations are variable too -- 
Eg, a paver at 30 or less, will try not to attack walls, looking 
preferentially for pavement.  A paver at 60 and above will ignore pavement 
and attack walls and forests.  The modes let you influence some of these 
evaluations for your planters. 

CUSTOM MAPS:
You can modify any of the maps, using an ascii editor.  Each map must 
consist of 40 rows of 60 characters each.  Each map must have a border of 
o's.  Other symbols used are:
      - = window
      # = wall
      n = hedge
      h = large hedgerow
      @ = bush
      & = tree
      ~ = water
      = = deep water
      % = rubble
      b = pavement
      ' = planter floor

You can also make new maps from scratch, and substitute them for existing 
maps by copying the old map to a temp file and renaming your new map.  

***************************************************************************
*                    REGISTERING SHAREWARE                                *
***************************************************************************

Shareware is a means of distributing software.  Under the shareware concept, 
software may be freely copied and passed along to others, or distributed 
through bulletin board systems or national networks. 
 
As a recipient of a shareware program, you may use the software for a short 
trial period to determine if it meets your needs.  If the software is not 
suitable, then you can discard it. If you decide to use it, you must pay by 
registering.  When you register a Cascoly shareware program, you receive: 

      * A copy of the latest version of the program
      * A bonus of any other Cascoly program of equal or lesser value
            (see REGISTER.FRM for details)
      * A free introductory account on CompuServe including a private User 
        ID number and password, $15 introductory usage credit, and a 
        complimentary subscription to CompuServe Magazine, - a $30 value! 
      * A minimum of 90 days online support via CompuServe or by
        telephone.  Support by mail is also available, if accompanied
        by a SASE.
      * You will also receive bonus maps

To register a program, enter the following command:
 
      COPY REGISTER.FRM LPT1:
 
and the order form will be copied to your printer.  Check off the program 
you wish to register, and check the program you wish to receive as a bonus.

Cascoly Software is a member of the Association of Shareware Professionals 
(ASP).  ASP wants to make sure that the shareware principle works for you. 
If you are unable to resolve a shareware-related problem with an ASP member 
by contacting the member directly, ASP may be able to help. The ASP 
Ombudsman can help you resolve a dispute or problem with an ASP member, but 
does not provide technical support for members' products. You can contact 
the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve 
message via easyplex to ASP Ombudsman 70007,3536 


```
{% endraw %}

## GRHELP.TXT

{% raw %}
```
F1: Help                                                              F2: Overlay grid                                                      F3: Unit map                                                          F4: Global Map                                                        F5: Set individual modes                                              F6: Set modes for all                                                 F10 Quit                                                                                                                                    Left click to select terrain type in lower middle                     area.  Then left click on map to change terrain.                                                                                            Right click near an edge, or press an arrow key                       to scroll one line in that direction.                                 'They paved Paradise and put up a parking lot!'                                                                                             GREEN is a strategy game in which you try to prevent the              pavers from taking over your lands.                                                                                                         There are several different maps, of varying difficulty.              You have the ability to plant hedges, add walls, and to               destroy pavement, but each of these actions has its costs.            Under the shareware concept, software may be freely copied and        passed to others, or distributed through bbs's or national networks.  As a recipient of a shareware program, you may use the software       for a short trial period. If you decide to continue to use it,        you must register. When you register you receive:                           * A copy of the latest version of the program                         * Additional bonus maps                                               * A bonus of any other Cascoly program of equal or lesser               value (see REGISTER.FRM for details)                                * A free introductory account on CompuServe (a $30 value!)            * A minimum of 90 days online support via CompuServe or phone                                                                         To register, print the form included in file REGISTER.FRM             and send it with a check for $25 to:                                     Cascoly Software                                                      4528 36th NE                                                          Seattle WA 98105                                                                             ┌─────────┐                                                     ┌─────┴───┐     │               (R)                                 ──│         │o    │──────────────────                                   │   ┌─────┴╨──┐ │  Association of                                     │   │         │─┘  Shareware                                          └───│    o    │    Professionals                                    ──────│    ║    │────────────────────                                       └────╨────┘    MEMBER                                                                                                                                                                     Function Keys:                                                        ─────────────                                                         F1:  Help                                                             F3: Unit map                                                          F4: Global Map                                                        F5: Set individual modes                                              F6: Set modes for all                                                 F7: Show savings goal                                                 F10: Quit                                                             
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

                 C A S C O L Y   S H A R E W A R E

                 includes:
                    ATC        v1.0   29 Sep 1985
                    ANTIC      v1.11   2 Jan 1992 
                    BORDER     v1.1   23 Feb 1989
                    CAPBUF     v1.41  28 Dec 1990
                    CHRONOS    v2.04  21 Oct 1991 
                    ECOMASTER  v1.1   30 Apr 1990
                    GREEN      v1.02   2 Apr 1992 
                    FICTIONARY v1.32  30 Apr 1990
                    PEG        v1.03   4 Apr 1992 
                    UDECIDE    v1.05  20 Apr 1991
                    QUILT      v1.21  30 Mar 1992  
                    WEBS       v1.16  26 Feb 1992 


              L I C E N S E    I N F O R M A T I O N
              ----------------------------------------

              Copyright (c) 1990, 1992 by Cascoly Software 
                          All Rights Reserved.

                  Last updated:  5 Apr 1992 

We're trying to keep this as simple as possible. This file contains 
important license information regarding the use of Cascoly Shareware.  This 
information applies to individual users who wish to pass copies to friends 
and associates. 

User Groups, Computer Clubs, Disk Vendors and Distributors, Subscription 
Services, Disk-of-the-Month Clubs, etc., should refer to the VENDOR.DOC file 
for complete information relating to them. 
          
------------------
Trial Use License:
------------------
Cascoly Software hereby grants you a limited license to use this software 
for evaluation purposes for a period not to exceed thirty (30) days.  If you 
intend to continue using this software after the thirty (30) day evaluation 
period, you MUST make a registration payment to Cascoly Software. 

Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
disassemble, otherwise reverse engineer, or transfer the licensed program 
except as provided in this agreement.  Any such unauthorized use shall 
result in immediate and automatic termination of this license. 

All rights not expressly granted here are reserved to Cascoly Software. 

-----------------------------
Limited Distribution License:
-----------------------------

As the copyright holder Cascoly Software authorizes distribution by 
individuals only in accordance with the following restrictions. 

(User Groups, Computer Clubs, Disk Vendors and Distributors, Subscription 
Services, Disk-of-the-Month Clubs, etc., should refer to the VENDOR.DOC file 
for complete information relating to them.) 
            
Noncommercial copying of this software is ENCOURAGED. (If you distribute 
this software for more than the cost of your distribution, you're a 
commercial distributor -- see the accompanying VENDOR.DOC file for details). 

The Cascoly Shareware package is defined as containing all the material 
listed in the PACKING.LST text file.  If any files listed in the PACKING.LST 
text file, or the PACKING.LST file itself, are missing, then the package is 
not complete and distribution is forbidden.  Please contact us to obtain a 
complete package suitable for distribution. 

  o  The Cascoly Shareware package - including all related program files and 
     documentation files - CANNOT be modified in any way and must be 
     distributed as a complete package, without exception.  The PACKING.LST 
     text file contains a list of all files that are part of the Cascoly 
     Shareware package. 

  o  No price or other compensation may be charged for the Cascoly Shareware 
     package.  A distribution cost may be charged for the cost of the 
     diskette, shipping and handling, as long as the total (per disk) does 
     not exceed US$8.00 in the U.S. and Canada, or US$12.00 internationally. 

  o  The Cascoly Shareware package CANNOT be sold as part of some other 
     inclusive package.  Nor can it be included in any commercial software 
     packaging offer, without a written agreement from Cascoly Software. 
      
  o  The Cascoly Shareware package cannot be "rented" or "leased" to others. 

  o  The person receiving a copy of the Cascoly Shareware package MUST be 
     made aware that each disk or copy is ONLY for evaluation, and that 
     Cascoly Software has not received any royalties or payment for the 
     product.  This requirement can be met by including the complete Cascoly 
     Shareware package, which contains any appropriate registration 
     reminders. 

  o  The person receiving a copy of the Cascoly Shareware package MUST be 
     made aware that he or she does not become a registered user until 
     Cascoly Software has received payment for registration of the software.  
     This requirement can be met by including the complete Cascoly Shareware 
     package, which contains any appropriate registration reminders. 

  o  Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
     disassemble, otherwise reverse engineer, or transfer the licensed 
     program except as provided in this agreement.  Any such unauthorized 
     use shall result in immediate and automatic termination of this 
     license. 

This software and accompanying documentation are protected by US Copyright 
law and also by International Treaty provisions.  Any use of this software 
in violation of Copyright law or the terms of this limited license will be 
prosecuted to the best of our ability.  The conditions under which you may 
copy this software and documentation are clearly outlined above under 
"Distribution Restrictions". 


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                                            _______
                                       ____|__     |                (R)
          CASCOLY SOFTWARE          --|       |    |-------------------
          4528 36th NE                |   ____|__  |  Association of
          Seattle WA 98105            |  |       |_|  Shareware
                                      |__|   o   |    Professionals
                                    -----|   |   |---------------------
                                         |___|___|    MEMBER

This file provides information for Shareware Distributors, Disk Vendors and 
Computer Clubs  and User Groups who wish to distribute any or all of the 
programs ANTIC, ATC, FICTIONARY, GREEN, BORDER, QUILT, CAPBUF, ECOMASTER, 
PEG, UDECIDE, WEBS and CHRONOS.  These programs will be referred to below as 
Cascoly Shareware. Program names may not be changed without special 
permission, except for the following special cases if your system supports 
only 6 character names: 

      UDECID  for UDECIDE
      CHRNOS  for CHRONOS
      FICT    for FICTIONARY
      ECO     for ECOMASTER

Contents:
Part 1:  Program Information:
   Author/Publisher Information
Part 2:  Distribution Requirements
   Limited Distribution License
   ASP Associate (Disk Vendor) Member Information 
   ASP Vendor Members - Disk Sets
   Other (Non-ASP) Disk Vendor Information
   Other (Non-ASP) Vendors - Disk Sets
   Computer Clubs and User Groups 
   Disk-of-the-Month (or Subscription) Distribution
   CD-ROM and Other Collections

-----------------------------------------------------------------
Part 1:  Program Information:
-----------------------------------------------------------------

Each archived program contains a short description of the program in the 
file named DESCRIBE.  

For complete user registration information please refer to the REGISTER.FRM 
text file. 

Author/Publisher Information:
-----------------------------

Cascoly Software is a small software company owned and operated by Steve 
Estvanik. We have been producing top quality computer software at reasonable 
prices, continuously, since 1983. 

Please feel free to contact me at any time if you have any questions, 
comments or suggestions.  I can be reached by mail at the following address: 

      Steve Estvanik
      4528 36th Ave NE
      Seattle, WA 98105
      U.S.A.

I can also be reached by voice or electronically as follows:

   Phone:        (206) 523-6135    (10 am to 6 pm Pacific time)
   CompuServe:   76703,3046
   Internet:     76703,3046@COMPUSERVE.COM

-----------------------------------------------------------------
Part 2:  Distribution Requirements
-----------------------------------------------------------------

Individuals who wish to distribute Cascoly Shareware to friends or 
associates may do so in accordance with the restrictions outlined in 
LICENSE.DOC. 

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for ANTIC, ATC, GREEN, FENCE, TOWERS, 
WEBS, FICTIONARY, BORDER, CAPBUF, ECOMASTER, PEG, QUILT, UDECIDE, and 
CHRONOS, Cascoly Software authorizes distribution only in accordance with 
the following restrictions.  Please refer to the additional information 
listed below which is specific to ASP and non-ASP Disk Vendors, Computer 
Clubs, and Disk-of-the-Month style distribution. 

Individual Cascoly Shareware programs are defined as containing all the 
material listed in the PACKING.LST text file.  If any files listed in the 
PACKING.LST text file, or the PACKING.LST file itself, are missing, then the 
package is not complete and distribution is forbidden.  

    o  A Cascoly Shareware package - including all related program files and 
       documentation files - CANNOT be modified in any way and must be 
       distributed as a complete package, without exception.  (Either the 
       ZIP or self extracting EXE file must be used.)  The PACKING.LST text 
       file contains a list of all files that are part of the Cascoly 
       Shareware package.  

    o  No price or other compensation may be charged for a Cascoly Shareware 
       package.  A distribution cost may be charged for the cost of the 
       diskette, shipping and handling, as long as the total (per disk) does 
       not exceed US$8.00 in the U.S. and Canada, or US$12.00 
       internationally. 

    o  The Cascoly Shareware package CANNOT be sold as part of some other 
       inclusive package.  Nor can it be included in any commercial software 
       packaging offer, without a written agreement from Cascoly Software.  
       For information on combining the Cascoly Shareware package with 
       related programs to form a "disk-set", please refer to the 
       information below for ASP or non-ASP Disk Vendors. 

    o  Cascoly Shareware cannot be "rented" or "leased" to others. 

    o  The person receiving a copy of a Cascoly Shareware package MUST be 
       made aware that each disk or copy is ONLY for evaluation, and that 
       Cascoly Software has not received any royalties or payment for the 
       product.  This requirement can be met by including the complete 
       Cascoly Shareware package, which contains appropriate registration 
       reminders. 

    o  The person receiving a copy of Cascoly Shareware MUST be made aware 
       that he or she does not become a registered user until Cascoly 
       Software has received payment for registration of the software.  This 
       requirement can be met by including the complete Cascoly Shareware 
       package, which contains any appropriate registration reminders. 

    o  Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
       disassemble, otherwise reverse engineer, or transfer the licensed 
       program except as provided in this agreement.  Any such unauthorized 
       use shall result in immediate and automatic termination of this 
       license. 

    o  U.S. Government Information:  Use, duplication, or disclosure by the 
       U.S. Government of the computer software and documentation in this 
       package shall be subject to the restricted rights applicable to 
       commercial computer software as set forth in subdivision (b)(3)(ii) 
       of the Rights in Technical Data and Computer Software clause at 
       252.227-7013 (DFARS 52.227-7013).  The Contractor/manufacturer is 
       Cascoly Software, 4528 36th NE, Seattle, WA 98105.
      
All rights not expressly granted here are reserved to Cascoly Software.

The following additional information and restrictions are intended for 
Shareware Distributors, Disk Vendors, and Computer Clubs who wish to 
distribute Cascoly Shareware. 
                  
ASP Associate (Disk Vendor) Member Information: 
-----------------------------------------------

Vendors who are ASP Associate Members in good standing are hereby given 
permission to distribute Cascoly Shareware in accordance with the 
Distribution Restrictions listed above.  ASP Associate Members (often called 
"ASP Approved Vendors") in good standing do not need to request permission 
to distribute this package. 

This permission is in effect until or unless we notify you otherwise, in 
writing. 

ASP Vendor Members - Disk Sets:
-------------------------------
ASP Vendor Members who wish to distribute Cascoly Shareware as part of a 
collection (such as PsL's MegaDisk set, or a CD-ROM package) may do so 
provided that all the other restrictions listed above are met.  

Other (Non-ASP) Disk Vendor Information:
----------------------------------------
Shareware Distributors and Disk Vendors who are not ASP Associate Members, 
but who wish to distribute Cascoly Shareware need to comply with the 
following additional restrictions. 

In order for us to ensure that only current versions are distributed, we 
require that you send us a letter requesting permission to distribute any of 
our products. 

You may not list any of our products in advertisements, catalogs, or other 
literature which describes our products as "FREE SOFTWARE".  Shareware is 
"Try-Before-You-Buy" software, it is not free. Please include in your 
letter, a copy of your catalog.  If you are a new vendor, and no catalog is 
available, we need your written assurance that the ASP guidelines for 
vendors are being met -- ie, your catalog must emphasize that users must 
register and pay for shareware they receive from you. 

When making your request please ensure that we have your correct address and 
phone number, as well as the name of the person we may contact if necessary. 
Please include a SASE.  

Other (Non-ASP) Vendors - Disk Sets: 
------------------------------------
Vendors (non-ASP Vendor Members) who wish to distribute any Cascoly 
Shareware as part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
package) must obtain permission from Cascoly Software prior to beginning 
such a distribution. 

Computer Clubs and User Groups :
------------------------------
Computer Clubs and User Groups wishing to add Cascoly Shareware packages to 
their disk library may do so in accordance with the Distribution 
Restrictions listed above. 

Disk-of-the-Month (or Subscription) Distribution:
-------------------------------------------------
If you would like to distribute Cascoly Shareware as a Disk-of-the-Month, or 
as part of a subscription or monthly service, then the following 
restrictions apply: 

ASP Associate (Disk Vendor) Members in good standing are hereby given 
permission to distribute Cascoly Shareware under the Disk-of-the-Month style 
of distribution. 

Others (non-ASP Members) must contact us in advance to ensure that you have 
the most current version of the software. 

You cannot use a Disk-of-the-Month distribution to use up your inventory of 
old (out of date) disks.  Only current versions may be shipped as Disk-of-
the-Month disks.  


CD-ROM and Other Collections:
-----------------------------
If you wish to add any of our programs to a CD-ROM or other collection, 
please check the release date of the version you have.  If the version is 
over six (6) months old then please contact us to ensure that you have the 
most current version. 

ASP Vendor Members who wish to distribute Cascoly Shareware as part of a 
collection (such as PsL's MegaDisk set, or a CD-ROM package) may do so 
provided that all the other restrictions listed above are met. 

Vendors (non-ASP Vendor Members) who wish to distribute Cascoly Shareware 
package as part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
package) must obtain permission from Cascoly Software prior to beginning 
such a distribution. 

Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding Cascoly 
Shareware.  Please send us a copy of any reviews, articles, catalog 
descriptions, or other information you print or distribute regarding Cascoly 
Shareware.  Thank you for your time and assistance and for supporting the 
shareware marketing concept. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3586

     Volume in drive A has no label
     Directory of A:\

    EGAVGA   BGI      5363   8-29-88   2:00a
    TRIP     CHR      7241   8-29-88   2:00a
    GOTH     CHR      8560   8-29-88   2:00a
    SANS     CHR      5438   8-29-88   2:00a
    LITT     CHR      2138   8-29-88   2:00a
    GRIMAGES DAT    108832   5-15-92  12:40p
    GREEN    DOC     16499   5-27-92   2:32p
    DESCRIBE           654   4-23-92   4:11p
    VERNOTES GR        499   5-24-92  10:50p
    GREEN    EXE    135252   5-29-92   2:00p
    GREENMAP DAT       226   4-29-92   3:50p
    GRHELP   TXT      3990   5-17-92   4:23p
    GRHELP   IDX        72   5-17-92   4:23p
    ISLANDS  ASC      2483   5-13-92  11:01p
    MAZE     ASC      2516  10-27-91   1:17p
    VILLAGE  ASC      2483   7-30-91   3:44p
    RIVER    ASC      2483  11-18-91   2:03p
    README   LST      9904   6-01-92  11:56a
    VENDOR   DOC     11302   5-19-92   3:01p
    LICENSE  DOC      5645   4-05-92   1:15p
    REGISTER FRM      3455   5-23-92  11:45a
    PACKING  LST      2227   6-01-92  11:59a
    PASTURE  ASC      2483   4-01-92   4:12p
    GREEN    VNT       499   5-24-92  10:50p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847   4-22-93  12:20p
           26 file(s)     341122 bytes
                            4096 bytes free
