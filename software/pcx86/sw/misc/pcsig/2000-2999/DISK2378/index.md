---
layout: page
title: "PC-SIG Diskette Library (Disk #2378)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2378/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2378"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TACTICAL COMBAT SIMULATOR"

    TCS (TACTICAL COMBAT SIMULATOR) is a wargame simulation.
    
    This interactive utility program allows two players to control
    company-size combat units.  Place mines, set spot zones, scout areas of
    a map, set obstructions (such as blown bridges), move units, call in
    artillery fire and direct ground support.
    
    Design your own game or play a pre-made game like "Panzer Leader." The
    versatility of TCS is limited only by your imagination. Use
    different scenarios in different times of history. A nice touch is the
    dimension that most games forget -- Hidden Moves. This program adds
    realism and versatility to wargaming. Each player has his own password
    and can only access his side of the game. You'll need to practice sound
    military tactics and intelligence to win. Use the Save feature and
    continue your game at a later time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADVANCE.DOC

{% raw %}
```



    TTTTTTTTTTTTTTT   CCCCCCCCCCCCCCC   SSSSSSSSSSSSSS 
          TTT         CCC               SSS
          TTT         CCC               SSS
          TTT         CCC               SSSSSSSSSSSSSS
          TTT         CCC                          SSS
          TTT         CCC                          SSS
          TTT         CCCCCCCCCCCCCCC   SSSSSSSSSSSSSS

            <<<< A TACTICAL COMBAT SIMULATOR >>>>
   
            <<<<********ADVANCE RULES********>>>>

                   >>>>Copyright 1989<<<<

                               By: Michael J. Feldhake


************************************************************
********      A Shareware program for wargamers     ********
********                                            ********
********  If you like this program. Send $15.00 to: ********
********                                            ********
********        Michael J. Feldhake                 ********
********        P.O. Box 47054                      ********
********        Indianapolis, IN 46247-0054         ********
************************************************************


   These advance rules were written so that you may get the
most out of TCS. There are several topics discussed here.
Some are tricks on using TCS and some are ideas. The ideas
are only one of many ways to handle things. With a little
time, you will soon begin to come up with your own.



      TOPICS COVERED:

     1>>...............Maps 
     2>>...............Hexagonal Maps
     3>>...............Unit Numbering
     4>>...............Safe Zone
     5>>...............Deployment And Rally Points
     6>>...............Airborne Ops.
     7>>...............Artillery
     8>>...............Transports
     9>>...............Spotting Locations
    10>>...............Zones
    11>>...............Scouts
    12>>...............Combat
    13>>...............Scale And Century



      1>> MAPS:
   
   There are two types of maps that can be used in TCS. The 
first one is a Square Grid map. Or you can use a Hexagonal Grid
map. Both of these could be premade or created by yourselves. 
The square grid map is the one I have been using to describe 
TCS's functions. I will also tell you how I made one of these 
below. To find out how to correctly work with a hexagonal map. 
See the section after this one titled Hexagonal Maps.

   Since a premade map does not come with TCS. You will have
to make your own. The way I have handled this was to draw a
fictitious map. I included all terrain, towns, rivers and
bridges on the map. I then overlaid some adhesive plastic so
I could write on it with china markers.

   I made two sets of these. One for my opponent and one for
me. Since you may have up to 4.3 billion ( 65535 X 65535 )
square grids. I also broke my map into four pieces. Each map
one corner of the large map. I started numbering each map on
the bottom left corner to correspond to the location it
would represent. For example. My large map went to 0 to 56
North and 0 to 76 West. My top right small map started at 29
North and 39 West (on the bottom left.)

   You can have any kind of terrain you want. You could have
from deserts to oceans. This way, you can design the map to
meat you scenario. With a little honesty -meaning you have
the ability to tell an armored unit to move out somewhere in
a lake- you can use this and have as many maps as you want.


      2>> HEXAGONAL MAPS:

   You might want to use TCS to play a game like Panzer Leader,
that already has a map. Panzer Leader like many others, uses a 
Hexagonal map. You can, following these directions, use TCS to
keep track of all your units on your game's hexagonal map.

   TCS was geared to play on a square grid map. And, if you 
decide to design your own map. I suggest using that method.
The only difference using a hexagonal grid map is the way you
number the map. If you noticed my examples of the zones 
discussed in the basic manual. You will find that the North
coordinates are along the Y axis and the West coordinates are
along the X axis. This no longer applies to a hexagonal map. 
Please study the display below before continuing on.
   
   Nc/
   19/                                                 \'Wc
   18/                       u1                        \'20
   17/                     /   \                       \'19
   16/                    /     \                      \'18
   15/                   /       \                     \'17
   14/  /   /   /   /   /   /   / \ /   /   /   /   /  \'16
   13  12  11  10  9   8   7   6   5   4   3   2   1   \'15
     \   \   \   \   \   \   \   \   \   \   \   \   \  '14
     '1  '2  '3  '4  '5  '6  '7  '8  '9 '10 '11 '12 '13

   Their are two sets of numbers here. The first set is 1-19 
and the second set is '1-'20 (NOTE THE "'"!) The two sets of 
numbers represent a coordinate. The 1-19 set MUST be the North 
coordinate and the '1-'20 set MUST be the West coordinate. For 
each number, you see a "\" or a "/" on top of it. These are the 
directions in which the coordinate is going. These IMAGINARY 
lines form the hexagonal grid system of you map.

   Notice how the sets of numbers bends when they get to the 
edge of the map. This is very important. The display is also
trying to show you a unit and its location. Although this is 
very vague, it will have to do. The unit (u1) has a location of
8 North 9 West (NOTE the slashes representing the imaginary grid 
lines.)

   The only real problem using hexagonal grids is that the unit's
control zones that are discussed later are somewhat smushed at 
the top and bottom. But besides that, TCS will handle this grid
system just like the other.


      3>> UNIT NUMBERING:

   The way you number your units could make the game a little 
more interesting. Say you had one armored brigade. This brigade 
has one infantry battalion and two armored battalions. It also
has three support companies. If you follow the numbering scam 
below. Your opponent could tell through intelligence, how you 
are organized. Now, as grazy as that sounds, most of the time,
real intelligence could tell what company belongs to what
battalion of what brigade anyway.


               23 Armored Brigade <HQ>
   
                  231 Infantry Bat.
                      2311 Inf Co.
                      2312 Inf Co.
                      2313 Inf Co.
                      2314 Inf Co.
                      2310 Transport Co.

                 232 Armored Bat.
                      2321 Mobile Inf Co.
                      2322 Arm Co.
                      2323 Arm Co.
                      2320 Mobile Fuel Co.

                 233 Armored Bat.
                      2331 Mobile Inf Co.
                      2332 Mobile Inf Co.
                      2333 Arm Co.
                      2334 Arm Co.
                      2330 Mobile Fuel Co.

                2301 Communications Co.
                2302 Light Artillery Co.
                2303 Light Transport Co.

   Notice the numbering scam. The companies are sequencialy
numbered to have the first two digits of the brigade, the third
digit is the battalion, and the last is the company number. 
Also, note that the brigade also has a brigade HQ. Since it is
common practice to have your battalion HQ with your first
company (meaning company one or company 'A' is usually named HQ
& ALPHA Co.) You will not need a HQ for the battalions.

  You can use a numbering system to your advantage. If you and
your partner agree. You can add in special units to your primary
units in advance. For example. Say you had a Ranger Co. attached
to a regular airborne brigade. You could give this Ranger Co. 
the number of 2391 and make unit type INFANTRY. The first two 
digits is again the brigade. The '9' is a 'special' number 
(meaning the unit is a special unit) and the '1' is the unit
number.  When and if your opponent comes in contact with this 
unit. He will know that it is a special unit.     
 

      4>> SAFE ZONE:

   The safe zone in the game is the coordinate 0 North 0 West.
This means that the program does nothing to those units that 
are in that zone. It happens to be only one grid. But you may 
have as many units as you want in there. 

   You will find a good use for this zone. Since both players 
have access to it. And after some experience with TCS. You will
find it a very useful spot.

   Remember though, as long as a of yours unit is in that zone. 
It cannot see or come in contact with any other unit on the board
or in the zone itself.
    

      5>> DEPLOYMENTS AND RALLY POINTS:

   The deployment of a unit is also a very useful tool. If one
of your units have to control more than one grid. You can deploy
the unit into a line or a semi circle. You will have to program
in all the points directly. From then on, until you assemble the
unit, the unit can not move.

   When you deploy the unit. You will notice that a RALLY => 
marker will be displayed beside the unit's LOCATION North and 
West coordinate. The rally point is where the unit will assemble 
when you tell it to. During a deployment of a unit. You can move 
the rally point where you wish. This will give you control of 
where you want the unit to assemble if and when there is trouble.  

   In actuality. You could move the rally point anywhere on the 
map you wish. It will assemble there so that same move, you 
could move the unit to another place. This seems easy to take 
advantage of. It is, but if your opponent found out. I am sure 
he'd get steamed and call your number.


      6>> AIRBORNE OPS:

   Airborne ops can be handle in this way. Start your airborne
units in 0 North 0 West. When you decide you need them. Use your 
air transports to transfer them from the safe zone to the LZ 
(Landing Zone.) You can only transport one unit at a time with 
transports. So have enough to complement your AB units.

   A smart tactic is this. Since your opponent can see all of 
your air activity. Send in your AB Scouts first to recon the LZ. 
Have them set up AREA type zones around the LZ. Then bring in the 
troops. You could also determine units of crack troops (like
Rangers and Green Berets) at the beginning of the game and bring 
them in and have them deploy around the LZ for security.    


      7>> ARTILLERY:

   Artillery units are good for support. Like real war. Some 
artillery units could be well off the theater of war. TCS can 
handle that too. If you place all your artillery units that are 
supposed to be off the map into the safe zone. You can call in 
artillery strikes from there.

   When and if you assign the artillery unit a fire-mission. 
The display will highlight the unit type and diplay a '!' 
beside it. It will also show the target info (i.e. 12N-5W)
in the column next to the unit type.

   If your scenario calls for naval artillery. Assign a unit 
number to it and place it in the safe zone. Make the unit type 
HEAVY ARTILLERY.

   One note to artillery. There are two types of artillery fire 
in this game. The first was discussed above. It is 'preplanned 
fire missions.' The other type of mission is 'on call.' If you 
do not wish to pre-plan a strike. Then you can give the program
a target at 0N 0W to delete any strike. This will give you the 
ability to call that unit's strength -in fire power- when and 
where you want it during your combat phase. Although it is 
possible to call in fire from an artillery unit almost 
immediately. This could not be said about large caliber weapons
like naval guns. Usually these have to be preplaned. 

   Also, the light artillery and mortar units can not move 
without the help of transports. The heavy artillery units may 
move by themselfs.
   

      8>> TRANSPORTS:

   Transports are important in this game. Since your infantry 
units can move only one grid at a time. And your light 
artillery and mortar units can not move at all by themselfs. 
You will have to supply enough transports to help your 
organization.

   The ENTER UNITS screen again, will display all your units. It 
will also display your transport units and status. If they are 
presently transporting a unit. The unit type will be display 
with a '^' beside it. It will also display the unit ID# of the
unit it is transporting in '<<xxx>>' in the next column. Also, 
the unit that is being transported, will be displayed with a '^' 
beside it.

   Each transport has its limits. Light transports would not be
able to carry tanks. So the list below gives what each 
transport type can carry.

             Light Transports;
                        Infantry
                        Airborne
                        Light Artillery
                        Mortar

             Heavy Transport;
                        Infantry
                        Airborne
                        Mobile Infantry
                        Airborne
                        Light Artillery
                        Mortar

             Air Transports;
                        **ALL UNITS**


   The thing to remember about transport units is, that to pick 
up a unit, the transport must occupy the same grid as the unit 
you wish to transport. When you drop off the unit, the transport 
will set the unit to the present location of the transport unit. 
You may now give commands to the transported unit.


      9>> SPOTTING LOCATIONS:

   During the move phase of your game, TCS will move all your 
units and alert the proper player when an if there is contact 
made. Each unit has its own zone of control. That is, if any 
opponent comes within the control zone, TCS will alert the 
player that contact has been made.

   TCS has two different control zones. The first one is for 
all units except the SCOUT and the SPOTTER PLANE. This control
zone is defined as the unit's present location and all 
surrounding grids. See zone for 'u1' at the display below.

   The second zone is and extension of the first one. It is 
again the present location of the unit and the next TWO grids 
outward of that location, except at the corners. See zone for 
u2 below.


                           WEST
             20   21   22   23   24   25   26   27        

        13                                 
   N                          
        12    *   *    *         *    *    *  
   O                      
        11    *   u1   *    *    *    *    *    *   
   R                                             
        10    *   *    *    *    *    u2   *    *
   T                     
         9                  *    *    *    *    *        
   H                     
         8                       *    *    *      
                                            
         7                                                 
                      

   This is a graphical representation of the two control zones 
of TCS. u1 is all the units except the SCOUT and the SPOTTER PLANE.
Note all of the surrounding '*'. These represent the grids that u1 
can see. u2 is for the SCOUT and the SPOTTER PLANE. Note that for
u2, it can not see the four far corners of its zone.   


      10>> ZONES:

   Zones can make or break you in this game. If you can keep up
with you zones and stay current (meaning to keep creating zones
when you push forward or get pushed back.) You can make life a
whole lot better for you and your troops.

   If you are still not comprehending the concept of zones, then 
try this. A zone is defined as: Predetermined points on a map, in 
which you have determined by defining the zone, that you can 
see all of the opponents units that come on those points. 

   There is no limit on overlaping these zones. It might be
beneficial to you to place overlaping zones someplaces on the map. 
Say you wanted to create two zones that are based differently 
but overlap. This way if one base is overrun. You could still 
see what is in that zone.

   Zones can not be based at points that you do not occupy at 
the time you create them. So when you see a "ILLEGAL ZONE BASE!"
message blink at you. Then you know you can not set that zone 
at that location. The program can not tell if you have created a 
zone to look into trees. Use good sound morals when using them. 
I have a policy for my own use about tree lines. You can see the 
first grid into trees. That way, you can see the edges of little 
or big forests. 

   
      11>> SCOUTS:

   Scouts can be very helpful in your game. They can serve you 
in many ways. The most prominent way is in the reporting of units 
and their locations. Another use for these is to scout out zone 
bases. If a scout finds an opponents zone base. The program will 
tell you that a scout reports a 'SPOTTER' at a location given. 
You may now move in units to occupy that grid so the program will 
delete that zone clearing that section of the map for your use.

   NOTE: A zone base refers to the base of a zone (Area or 
         Line type) of your opponents.


      12>> COMBAT:

   A combat result section was not provided with TCS because of
the unlikely event that all situations could not be provided for.
Since TCS is very versatile, the magnitude of a result section 
would be ridiculous.  

   However, there are many ways you can resolve your combat. The
best way is to use miniatures. That would make the war even more 
realistic. You can use your own method too. When one of your 
units gets crushed. Just use TCS to delete the unit. You can do 
this by entering the ENTER UNITS section, picking the unit and 
press <e> to delete. This will mark the unit with a '999' for 
its unit ID#.


      13>> SCALE AND CENTURY:

   Another use of TCS is using TCS for any scale of battle and 
time. Now, be careful, I do not recommend using TCS with unit 
sizes over brigades. Because when you get to that level. 
Intelligence starts to play a larger role. TCS was geared for 
company size units. But that is not a rule.

   Time wise, you can always use TCS for any time in history. 
With a little imagination. You can fight the war between 
Constantine and Maxentius (312 AD.) To the battle of Khe Sanh 
(Vietnam war 21 January 1968.)

   Use TCS as you like. It is a very useful tool. If I get 
enough feedback on this utility. I might come up with an updated 
version.


**************************THE END******************************

```
{% endraw %}

## BASIC.DOC

{% raw %}
```



     TTTTTTTTTTTTTTT   CCCCCCCCCCCCCCC   SSSSSSSSSSSSSS 
           TTT         CCC               SSS
           TTT         CCC               SSS
           TTT         CCC               SSSSSSSSSSSSSS
           TTT         CCC                          SSS
           TTT         CCC                          SSS
           TTT         CCCCCCCCCCCCCCC   SSSSSSSSSSSSSS

            <<<< A TACTICAL COMBAT SIMULATOR >>>>    

                   >>>>Copyright 1989<<<<

                                By: Michael J. Feldhake


************************************************************
********      A Shareware program for wargamers     ********
********                                            ********
********  If you like this program. Send $15.00 to: ********
********                                            ********
********        Michael J. Feldhake                 ********
********        P.O. Box 47054                      ********
********        Indianapolis, IN 46247-0054         ********
************************************************************



   INTRODUCTION:

   TCS is a utility program that allows two players to
control movement of company size combat units. It also
allows you to place mines, set spot zones, scout areas of a
map, set obstructions (such as blown bridges), transport
units, and call in artillery fire and ground support. You 
can use TCS to play your own designed game. Or you can use 
TCS to play a premade game like "Panzer Leader."

   The best two parts about this program is its realism
and versatility. Since each player has his daily password.
You can only see what the computer tells you. You will have
to use good sound tactics and intelligence practices to win
over your opponent. The versatility of TCS is limited by your
imagination. TCS can also be used for many different scenarios 
in different times of history. 


   TCS CONFIGURATION:

  *To run TCS, you need 256K memory, any monitor,
   and one floppy drive.

  *The maximum number of combat units is 200 per player.

  *The maximum number of obstructions is 20.

  *The maximum number of mines is 40 per player.

  *The maximum number of zones is 100 per player.
  

   MAPS:

   A nice feature of TCS is the map. TCS uses grids to move
units to and from. Don't understand!? When you define a
point on a map to TCS, it is in the form Ncoord Wcoord where
Ncood and Wcoord are integer numbers from 0 to 65535 each
representing a map location. The position 0 North 0 West
starts at the LOWER LEFT HAND SIDE of the map! So this means
north is straight up. The north numbers go higher as you go
more to the north. And the farther you go east, the higher 
the west numbers go! This is the Square Grid system. See the 
ADVANCE.DOC for more information.

                           WEST
      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 
    9 ---------------------------------------------- 9
 N  8 |     |     |     |     |     |     |     |  | 8
    7 |  -  -  -  -  -  -  -  -  -  -  -  -  -  -  | 7
 O  6 |     |     |     |     |     |     |     |  | 6
    5 |  -  -  -  -  -  -  -  -  -  -  -  -  -  -  | 5
 R  4 |     |     |     |     |     |     |     |  | 4
    3 |  -  -  -  -  -  -  -  -  -  -  -  -  -  -  | 3
 T  2 |     |     |     |     |     |     |     |  | 2
    1 |     |     |     |     |     |     |     |  | 1
 H  0 ---------------------------------------------- 0
      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 

  
   This map shows what I mean about the square grid system.
This map shows about half of the grid lines (represented by
'-' or '|'). Notice that the map is numbered on all four 
sides for ease of reading.

   There is no actual map that TCS uses to play on. You
design the map and keep it with you. This way is a Lot more
beneficial to the realistic player. Because you can make
several battle fields and overlay the grid lines to play on
TCS. All TCS really does anyway is keep track of what is on
and who is moving to what grid.


   HOW TO PLAY:

      PASSWORDS:

   Each day as you begin a new game or continue an old one.
The program will ask for your password for the day. This
password may be up to 10 characters in length. Enter as you
wish. The program uses this to let you get into and see your
units and other information while protecting it from your 
opponent.


      THE <ESC> KEY:

   The <ESC> (escape) key allows you to get out of the ENTER
MINE, SET UP ZONES, ENTER UNITS, and the OBSTRUCTIONS routines,
while you are at their top menus. All other routines are 
special.


      A SPECIAL NOTE:

   If you ever get in trouble and hit a wrong key and you are
being asked to enter something. Hit <CR> or enter a zero until
you are back to the menu you want. A zero in this game 
represents nothing. So you are safe.


      MENU ITEM ONE 1> Game:
                
   Before you can start playing, you will need to enter your
units. If you have recalled an old game, then you will not 
do this part again. The screen will display twenty unit
types with movement factors beside them. It will ask you for
a unit ID# on the top right. Enter the ID# (must be
integer/numeric only and no more than five in length) for
your first unit (i.e. 345.) The number of units will show
and it will prompt you to enter a unit type of the unit you 
have just created. Enter the LETTER of the type of unit you wish.

   It will now prompt you for the units North coordinate.
Enter the numeric coordinate. If your not sure what to enter
or you do not want to place the unit yet. Press <CR> and
continue. Then it will prompt you for the West coordinate. Do
the same as you did for the North coordinate. If you make a
mistake on one of previous inputs. Enter a -1 for your next
Unit ID# to delete the last unit. 

   Continue until you have entered all your units. Press
<CR> at the ENTER UNIT ID# prompt when complete. The program
will continue to the next player or take you back to the
main menu. Once back at the main menu. You may not enter the
GAME selection again! However, you may now use ENTER UNITS to 
move your units.


      MENU ITEM TWO 2> Enter units:

   This routine will allow you to do many things. It will 
allow you to view your units and positions. Select a unit 
and either assign it a new location, call in artillery fire,
transport a unit, assemble, or deploy the unit.

   First, there are three different classes of units. These
classes determine what you can do with that unit. The first
class, CLASS 1, is the class in which all regular units fall
into. These are all units except the artillery and transport
units. CLASS 2 units are the artillery units. And CLASS 3 
units are the transport units.


         THE DISPLAY;

   The display of the units shows the unit's ID#, type,
movement factor, present location and location heading to.
It will list nine units at a time. This display will show some 
things that are not discussed here. See the Deployment And 
Rally Points, Transports, and Artillery sections in the 
ADVANCE.DOC for more information. But for now, continue on. 
Use may use the view keys (UP/DOWN ARROWS, PageUP, PageDOWN, 
And HOME) to see and scan through your units. Press <P> to 
choose a unit. Then, enter the number (1-9) that IDs the Unit 
you wish.


         CLASSES OF UNITS;

   After you have entered the units ID# of the unit you
want. If the unit is a CLASS 1 unit type, then you will see
the unit's ID# and type show below. The program will then
prompt you to enter the New North Coordinate. Enter a number
between 0 and 65535 and press <CR>. The program will then
prompt you to enter the New West Coordinate. Again enter a
number and press <CR>. You have just given the unit a new
location to move to. This is how we move our units. If you
liked what you have entered, then press <SPACE BAR> to ok it.
Press <-> to nullify the order. If you did not place the unit
when you created it. The program will first ask you for a 
starting North and West location.

   If the unit is a CLASS 2 unit, class 2 again being the
artillery units, the program will prompt you to enter <M> to
move the unit or <F> to assign the unit a fire-mission. If
you want to move the unit, Again, assign it a new location.
If you are wanting to assign a fire-mission to the unit, the
program will prompt you for a north coordinate and a west 
coordinate. This is the target information. Again <SPACE BAR> 
to ok it and <-> to nullify it. See the section on Artillery 
in the ADVANCE.DOC.

   If the unit is a CLASS 3 unit, class 3 being the
transportation units. The program will prompt you to enter a
<M> to move, <P> to pick up a unit or a <D> to drop off a
unit. If you want to use the transport unit to transport
another unit, Press <P>. Then enter the unit's ID# you want
to transport. If your transport unit has already transported
a unit. And you are at that location you want. Press <D> to
drop off the carried unit. That will now release the unit
being transported. 

   At the "ARROW UP/DOWN, PGUP, PGDN, HOME <P for pick unit>" 
prompt. Press <ESC> to return to the main menu.   


      MENU ITEM THREE 3> Place Mines:

   This selection will ask for your password and then
display your mines if there are any. It will ask you for a
map location (two entries) for your next mine. If you only
wanted to view your mines press <CR> twice (to tell the
program not to create a new location) and then follow the 
prompts as you wish. 

   Setting a mine at a location will alert the player who is
moving a unit onto that location, that his unit has ran onto
mines. You can now take that unit and take off damage if so
desire. Just like in the real world, when you run onto a
minefield. You have up to twenty mines in this game. After
one is set. You may not reset or change its location.


      MENU ITEM FOUR 4> See Obstructions:

   This selection will allow you to do two things. First,
you will be able to view the obstructions. Second, you will be
able to create a new obstruction. 

   An obstruction in TCS represents a point on a map which
one can not move on. A good example of a obstruction is a blown
bridge. If at location 12N 5W (that is north coordinate # 12
and west coordinate # 5) there is a bridge that extends over 
a small river. You want to blow the bridge so your opponent
will not be able to cross over the river with one of his
armored units. You will then set an obstruction at 12N 5W.
This will now make that armored unit stop before it gets to
the bridge and therefore prevents it from crossing it. 


      MENU ITEM FIVE 5> Set up zones:

   This is the most complex part of TCS. And it is also the
most fun. This area will allow you to create two types of
zones. An AREA type and a LINE type. A zone is an area on
the map that you are observing. A good example of a zone is:
You occupy a small village. North of this village is a large
flat plain. This plain could be defined as a rectangle 5
points to the north and 7 points to the east. See display
below.


                           WEST
             20   21   22   23   24   25   26   27        

        13   o------------------------------ p2                              
   N         |                .              |                 
        12   |                .              |             
   O         |                .              |             
        11   |                .              |               
   R         |       ....grass plain....     |         
        10   |                .              |           
   T         |                .              |             
         9   |                .              | 
   H         |                .              |            
         8   p1(town)----------------------- o               
                                            
         7                                                 
         
   P1 represents the town. And p2 represents the rectangular
point which defines the length and depth of the area you are
observing. The o's represent the corners of the zone.

   This rectangle (a six by seven area) is an AREA type of
zone. If any of your oppenent's units (except air units)
goes into this predefined area. The game will alert the
observing player during the MOVE UNITS selection. 

   The other type of zone is the LINE type. This will allow
you to observe a narrow gap or one selected point. See
display.


                            WEST
             20   21   22   23   24   25   26   27   
        13                      p2(town)             
   N              |           /      
        12    --trees--     /  
   O              |       /   
        11              /   
   R                  /      |                    
        10          /     --hill--
   T              /          |
         9      /   
   H          /          
         8  p1(trees)              
                                            
         7                                                 

                 
   This time p1 is located in some trees. And p2 is a point
which represents a town. Since you cannot see though the
hill and look through the thick trees. The line is all that
you can observed. And for each location on the line. The
surrounding points are viewed also. This is the LINE zone
type.

   The menu in this selection will allow you to observe,
delete, and create your zones. If you are creating a new
zone. TCS will ask you for five things.


     BASE NORTH:    ;this is the north coordinate of the 
                     base of your new zone. (p1)
     BASE WEST:     ;this is the west coordinate of the 
                     base of your new zone. (p1)
     SPOT NORTH:    ;this is the north coordinate which 
                     defines either the area or 
                     line. (p2)
     SPOT WEST:     ;this is the west coordinate which 
                     defines either the area or 
                     line. (p2)
     TYPE:          ;this is the type of zone. 1 for 
                     AREA type and 2 for LINE type.

   NOTE: Zones use X, Y coordinates on a Cartesian Coordinate
system. This will allow you to use any point weather the
area or the line is going North, South, East, or West.        

   As you can see, these two types of zones could come in
very good use. During the move phase of the game. If one of 
your zones becomes occupied by the opponent. The program will 
erase that zone. See the Zones and Scouts sections in the
ADVANCE.DOC for more information.


      MENU ITEM SIX 6> Move Mode

   This is the heart and sole of TCS. And this selection
will do a great many things. It would be useless to list
them, but I will provide a shortened version. This algorithm
shows what happens and what is checked.

  
       player = 1
 play  x = 1
 loop  Unit x is moved one position.
           All obstructions are checked for same position.

           All opponents units are checked.
                Positions are checked around unit x.
           If unit is a scout or spotter type.
                Positions "plus" are checked.

           All mines (both player and opponent) are checked
           for same positions.

           All opponent's artillery strikes are checked for 
           same location.

      x = x + 1
           IF x not = to 0
                GOTO loop
           ELSE
               Check all zones for any units spotted.
               
               List all air activity of opponents (except 
               for those located in safe area.)  
          
           player = player + 1
           IF player = 2
               GOTO play
           ELSE
               Done.   
           
   Again this is the shortened version of the algorithm. 
But it shows you how TCS's Move Mode works. This process
can get slow depending on the amount of your units and 
zones. But it does a thorough job. A few points now about
the operation of this mode.

   *If a unit makes contact with the enemy. That unit will 
automatically stop. You will have to give it a new point to
get it going again. This is done so you won't run over the 
enemy. Although thats possible in real life. Your combat 
results will have to determine the outcome. The SCOUT, 
SPOTTER PLANE, and Air Units are exceptions to this rule.

   *Besides just giving contacts. TCS will also alert players
about artillery fire, zone activity, air activity, and report 
zone base's found by your scouts.

   *Every time the program needs to alert a player of a 
contact. The program will ask for a password and then give 
the information.


      MENU ITEM SEVEN AND EIGHT:

   Both of these are obvious in their functions. One note
about these. They both save the game. The program will 
write to five .BIN files that contains the information 
pertaining to your game. The five .BIN files are:

   UNIT.BIN   16000 Bytes   ;contains all unit data
   ZONE.BIN    2000 Bytes   ;contains all zone data
   MINES.BIN    160 Bytes   ;contains all mine data
   OBS.BIN       80 Bytes   ;contains all obstruction
                             data

  *If these files do not exist on the disk. The program 
will create them for you.


      CONCLUSION:

   If you have not noticed. TCS does not provide a combat
results section. Since TCS can be played during any era.
TCS could not provide all of the situations that become
available. See the ADVANCE.DOC for more info. 

   This should be enough to get you started. Use TCS awhile 
before going to the ADVANCE.DOC. That covers a lot of 
small but useful tricks.

   I have written this program to be as close to realism as one 
could get it. There are some flaws (not bugs) in TCS that can 
not be avoided. If you have any suggestions, PLEASE write, and 
I will try to accommodate it! 



************************THE END**************************
         

```
{% endraw %}

## FILE2378.TXT

{% raw %}
```
Disk No: 2378                                                           
Disk Title: Tactical Combat Simulator                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Tactical Combat Simulator                                
Author Version: 2.1                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
TCS (Tactical Combat Simulator) is a wargame simulation. TCS is a       
interactive utility program that allows two players to control movement 
of company size combat units. It also allows you to place mines, set    
spot zones, scout areas of a map, set obstructions (such as blown       
bridges), transport units, and call in artillery fire and ground        
support. You can use TCS to play your own designed game. Or you can use 
TCS to play a premade game like "Panzer Leader." TCS's best ability is  
to add in the dimension that most games forget, "HIDDEN MOVES!"         
                                                                        
The best two parts about this program is its realism it adds to         
wargamming and its versatility. Since each player has his daily         
password. You can only see what the computer tells you. You will have   
to use good sound tactics and intelligence practices to win over your   
opponent. The versatility of TCS is limited by your imagination. TCS can
also be used for many different scenarios in different times of history.
The game also has a save feature, so you can continue to play your game 
at a later time.                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2378

     Volume in drive A has no label
     Directory of A:\

    ADVANCE  DOC     18757  10-18-89  12:08p
    BASIC    DOC     18293  10-18-89  12:04p
    MINES    BIN       160   8-14-90  10:40p
    OBS      BIN        80   8-14-90  10:40p
    TCS      EXE    143334   8-16-90   1:43p
    UNIT     BIN     16000   8-14-90  10:40p
    ZONE     BIN      2000   8-14-90  10:40p
    GO       BAT        24   8-14-90  10:40p
    GO       TXT      1039   8-14-90  10:40p
    FILE2378 TXT      2517   8-14-90  10:40p
           10 file(s)     202204 bytes
                          114688 bytes free
