---
layout: page
title: "PC-SIG Diskette Library (Disk #197)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0197/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0197"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TWO TREKS"

    There are two version of Treks on this disk.  MS-TREK is a user-
    supported version from MapleLeaf Software.  Galaxy Trek is a fast
    moving, interactive version of the game.  To read/print instructions
    and run the game type: TREKPIK.  It is amazing how many different
    versions of Star Trek exist, but it is also worthy of note that each
    different version has something different to offer.  These are two of
    the best, in our opinion.  See if you agree.
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  Type MS-TREK or TREKPIK and press <ENTER> to start either
    game.
    
    Suggested Registration: $10.00
    
    File Descriptions:
    
    -------- ---  MS-TREK
    MSTREK   DAT  Data file for MS-TREK
    MS-TREK  EXE  Excellent Trek with many advanced features
    MS-TREK  DOC  Documentation file for MS-TREK.EXE (32K)
    DATA     DAT  File used by Galaxy Trek
    TREK     DOC  Note that documentation is in TREKPIK
    TREKRUN  EXE  File used by Galaxy Trek
    TREKPIK  EXE  Galaxy Trek real time TREK game - start by typing TREKPIK
    -------- ---  Galaxy Trek
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES197.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No  197  Two Treks                                       v2.1  DS2
------------------------------------------------------------------------
 
There are two version of Treks on this disk.  MS-TREK is a user-supported
version from MapleLeaf Software.  Galaxy Trek is a fast moving, interactive
version of the game.  To read/print instructions and run the game type:
TREKPIK
 
------------  MS-TREK
MS-TREK  EXE  Excellent Trek with many advanced features
MSTREK   DAT  Data file for MS-TREK
MS-TREK  DOC  Documentation file for MS-TREK.EXE (32K)
------------  Galaxy Trek
TREKPIK  EXE  Galaxy Trek real time TREK game - start by typing TREKPIK
TREKRUN  EXE  File used by Galaxy Trek
TREK     DOC  Note that documentation is in TREKPIK
DATA     DAT  File used by Galaxy Trek
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## MS-TREK.DOC

{% raw %}
```
                             MS-TREK 1.0

                             Introduction

This is, by far, the best STARTREK adventure game available today.  
It should run on all MS-DOS computers (including, of course, the IBM-
PC).  Have fun!!



                             Registration

If you find this program useful, please send $10.00 to:
           Paul Alderdice
           122 Eastman St.
           Cranford, N.J. 07016


                   
                             Instructions

                          GOALS OF THE GAME
                          ----- -- --- ----

     The object of this STAR TREK game is the same as in many  others: 
try to do unto them before they do unto you!   However, "winning" this 
game  is a little different from some of the others.   Disabling enemy 
ships  builds points towards a win,  with the number of points awarded 
in  each case dependent on the ah..."hardiness" of the  opponent.   If 
one  spends all one's time destroying  the  weaker  enemy  ships,   it 
could  take  several such to win,   and  at   the  higher   difficulty  
levels   (oh yes,  we have those),  it may not suffice.   As an  extra 
added  attraction,   the  point  goal  and  current  score   is  never 
displayed,   so  winning can come somewhat unexpectedly.   For   those  
who   can't stand the suspense,   there  is  an  alternative  (whew!): 
find  the  * SECRET ENEMY BASE * and destroy it,  at which  point  all 
remaining  enemy  ships will wander away sheepishly and  concede   the 
game.   However, it may prove difficult to find or recognize the enemy 
base, not to mention destroy it!

            FURTHER DIFFERENCES FROM OTHER TREK GAMES
            ------- ----------- ---- ----- ---- -----

     In  most  of  the  early Star Trek games there  is  a  "universe" 
divided  neatly into "quadrants" with a randomly generated  number  of 
ememy  ships in each one which stays constant once the game is  begun.  
One  simply looks at a galaxy map of the "quadrants" (or whatever) and 
chooses which one to enter next.   (Empty quadrants are,  for the most 
part, fairly boring.)  Once inside, the good ship Enterprise confronts 
the dastardly Klingons and either emerges victorious or has to  return 
for  a second round after obtaining sustenance from a nearby starbase. 
Surprise!!  In this version,  we have no quadrants,  just empty  space 
without nice boundaries.   Furthermore,  there is no galaxy map.   One 
has  no  notion  of where the enemy are in the  beginning,  and  after 
finding  them,  there is no guarantee that they will stay politely  in 
one place (or one scan area) for very long.  (Afterall, star ships can 
move along at a pretty good pace when they want to...)  As a result of 
this  philosophy,  the  scan  maps in this game will always  show  the 
Enterprise in the center of the grid (just like radar).   To make life 
interesting,  the  scans  may not always provide accurate  or  helpful 
information about certain enemy ships.
     A  major difference between this game and several others  is  the 
manner   in  which  commands are entered to move the ship from   place  
to  place.   Suffice   it  to  say that the author  in  playing   many  
other versions  of  TREK  became somewhat frustrated in  spending  the  
time  necessary  to compute correct angles of trajectory (or  even  to 
have the ship's  onboard computers do so).    In this TREK,  there are 
no  angles to compute.   Instead, there are vectors,  which means that 
Captains   simply  have   to  enter   a  vertical  and  a   horizontal 
displacement.   The  lengths  of the vectors are   easily  determined,  
even  for the most brain weary of commanders trying  to play the  game 
at three in the morning (like myself).   The same method spills   over
into  calculating  the destinations for those nice  torpedoes,   which  
is  comforting  if  one  is somewhat  clumsy  in  using   them  around 
starbases.  (Starfleet command can only lose a  few bases due to their 
Captains' problems with aim before they get notably upset.)
     Oh,  I  almost  forgot to mention that the enemy  ships  in  this 
particular  version  are  not  satisfied with  pounding  on  the  poor 
Enterprise  for their entertainment.   In fact,  since we are  dealing 
with rather large distances in space,   a majority of the enemy at any  
one  point  in time are nowhere near  the  Enterprise.   Consequently,  
they   need something else to do.  Captains should not be suprised  if 
they are called upon to help a starbase in trouble.

                            COMMAND ENTRY
                            ------- -----

     There are 12 commands,  each of which is expected to be a  single 
character input at the number sign (#) prompt.   This means that there 
is  no need for,  and there never should be,  a RETURN keypress at the 
end of the input.  A list of the commands follow, with the parentheses 
indicating that the first letter, only, is to be typed:

                    (S)can
                    (D)eflectors
                    (C)omputers
                    (I)mpulse
                    (W)arp
                    (P)hasers
                    (T)orps
                    (F)ix
                    (B)eam down
                    (L)aunch/(L)and shuttle
                    (H)elp with commands
                    (E)nd the game (with save option)

     After  entering  the initial command,  one of several options  is 
usually expected.  In all cases the choice of option is to be followed 
by  a RETURN.   If one of the 12 main commands is entered by  mistake, 
one  can usually cancel it and get back to the # prompt by hitting the 
RETURN key by itself on the line.   The exceptions are the Impulse and 
Warp commands which can both be cancelled by entering:  0,0.  Upper or 
lower  case  is accepted in most instances,  except  for  the  options 
within  the  Fix command.   Hitting  the RETURN  key  at  the # prompt 
will yield a short list of  the  12  one letter  commands.    For  all 
commands expecting a subsequent  character option,   hitting  a  wrong  
key will simply result in a list of the available choices.    Entering  
weird   numbers  for  those   commands expecting a numeric input could 
result in serious consequences for the Enterprise and her crew.  So be 
careful!!
     Of  the 12 commands listed above,  three never result in a  "turn 
being  taken",  so  one need not worry about getting  plastered  while 
gathering  simple  statistics  or  whatever.    These  are  the  Scan, 
Deflectors, and Computer commands.  One other, the Fix command, can be 
used  with  impunity  only while docked at a starbase and  in  certain 
other  locations.    See the Fix command for more  details.  All other 
commands give the enemy at least one stardate to get even.

                   INDIVIDUAL COMMAND EXPLANATIONS
                   ---------- ------- ------------


--> (S)can

Options: (S)hort
         (I)ntermediate
         (L)ong
         (R)omulans

     The  SCAN command is used a great deal for obvious  reasons.   It 
provides  information  about  surrounding areas of space  (or  rather, 
objects  therein) so that commanders can decide whether  to  approach, 
stay  put,  or to run away!!   The SHORT and INTERMEDIATE scan options 
will result in the typical square grid of dots hereafter designated as 
"sectors".   As already mentioned above,  the Enterprise is always  in 
the center of the grid.   Movement in space by the ship, followed by a 
subsequent SHORT or INTERMEDIATE range scan will result in a different 
orientation  for  surrounding  objects,  if any are  in  range.   Some 
objects may consequently move into or out of range.
     The  Enterprise,  enemy  ships,  bases,  and  other  objects  are 
depicted  by  letters  that will become obvious to  the  player.   The 
difference between the SHORT and INTERMEDIATE scans is simply the size 
of the grid.  There is no difference in scale.  The important thing to 
note is that the effective range of weapons is within the INTERMEDIATE 
scan  area.   The  short range scan was included as a  convenience  to 
minimize the time for displaying the grid when objects are known to be 
at a short distance (a major factor for slow terminals).
     The LONG range scan option provides information about the area of 
space roughly within a 30 sector radius of the ship.   However, a LONG 
range  scan will NOT be able to identify WHAT is out there,  only  the 
object's position vis-a-vis the Enterprise and its approximate 
distance.  The results of a LONG range scan is expressed in terms of 
sectors relative to the Enterprise.  Therefore, a LONG range scan can 
be very useful for determining:
          -Torpedo firing vectors.
          -Impulse commands to direct ship to bases, planets, etc.
          -Shuttle ship maneuvering.
     The  LONG  range scan reports all objects,  not just enemy  ships 
that  are  in the area.   (There are numerous  Starfleet  tales  about 
novice  Captains very carefully stalking an "unknown" only to discover 
that  they  had been sneaking up on one of their  own  bases.)   HINT: 
Taking  successive LONG range scans after moving very short  distances 
can  often  indicate  whether  or  not the object  of  interest  is  a 
stationary body.  An enemy ship will often be moving or disappear from 
the scan display altogether.   (The latter is not a bug.  The ship has 
probably engaged its warp drive... probably....)
     The last scan option,  the scan for ROMULANS is a special request
that Mr. Spock try to "sense" if there are any nearby.  The reason for 
this  is that the devious Romulans have a cloaking device that renders 
all  of  the  Enterprise scanners useless.   (That is  why  the  extra 
"probably" in the paragraph above.)  Romulans do not necessarily  have 
to stay cloaked.   In fact they tend to become "uncloaked" at the most 
inopportune  times.   The SCAN for Romulans command ignores those that 
are  clearly visible by standard scanning means and is  only  designed 
for those that are currently in a CLOAKED condition.   Spock, however, 
cannot  provide  their exact position.   (This does not mean that  one 
cannot  discover where a cloaked Romulan is by other  methods.  It  is 
necessary to be very close.)

--> (D)eflectors

Options: an integer value up to 2000 or
         hitting the RETURN key for a report

     The DEFLECTORS command is used for two purposes:  first,  to  put 
energy in the shields and second,  to obtain a report on energy levels 
both  in the shields and in the general energy  reserves.   HINT:  The 
shields  at the start of the game have ZERO energy!!  Do not forget to 
put them up before blindly wandering into unknown territory.   (It  is 
possible in the higher difficulty games to lose in one move...  I have 
done  it!!)  To continue,  the ship's energy is used for  moving,  for 
firing the phasers,  and for the deflectors.  Putting a certain amount 
of  energy  in the deflectors at the beginning of the  game  subtracts 
that  amount from the general energy pool.   To return some energy  to 
the  general  pool,  simply  hit the D key and enter a value  that  is 
smaller  than  the existing shield level.   The  amount  entered  will 
become  the new shield level and the difference will automatically  be 
added back into the general supply. To get a report of existing energy 
levels, hit the D key followed by a RETURN.  The display will show the 
deflector energy followed by the general "quarks available" value.
     There  is  no shield leakage,  so it is usually wise to keep  the 
deflectors at their  maximum 2000 level.   When the Enterprise is  hit 
by  enemy weapons,  a certain amount of energy,  depending on  several 
factors,  is lost from the deflectors.   The main factors are distance 
from  the  enemy  ships and the game difficulty level.   There  is  no 
damage  to the ship until the cumulative hits exceed the energy  value 
in the deflectors.   At that point, damage can occur to one or more of 
the  ship's  devices.   It  is possible  under  battle  conditions  to 
repeatedly add more energy to the deflectors, but this will eventually 
result in there not being enough "gasoline" to engage the warp engines 
in  order to get back to a starbase.   Time and experience is required 
to  gage how long it is expedient to remain in  a  battle.   Sometimes 
just one more good strike might suffice to destroy an enemy ship,  and 
the risk in staying for one more move is worth it.  On the other hand, 
that  one  more  move  can  have equally  disastrous  effects  on  the 
Enterprise  or  her energy levels.   The worst situation is  when  the 
deflectors,  themselves,  become one of the items damaged.  Then there 
is really no choice but to limp away to some safe place for repairs.
     In  addition,  the energy reserves of the starbases are also used 
in  their  defense.   If the Enterprise does not respond in  a  timely 
fashion to a cry for help, it is possible to return to a starbase that 
is in little better condition than the Enterprise, herself.

--> (C)omputers

Options:  (W)here
          (D)amage
          (B)ases
          (T)orps left

     The  COMPUTERS command provides further information that  can  be 
usesful during play.  This is the last of the commands which under all 
circumstances does not utilize a turn.   Most of the options are self-
explanatory.
     The  WHERE  option  yeilds the coordinates of the  Enterprise  in 
space.   Although these are also provided as part of the SCAN command, 
the  WHERE option can be used to get a quick check on  one's  position 
for  the  purpose of calculating the next movement or  whatever.   The 
WHERE  option  takes  significantly  less  time  than  a  full   SCAN.  
Sometimes  the  WHERE option of the COMPUTERS command is ALL  one  has 
available  if the SCANNERS have been knocked out!   It is possible  to 
get  back to a base or even hit an enemy ship with the  COMPUTERS, but 
not  the  SCANNERS,  operational.   (For  more information  about  the 
coordinate system, see the IMPULSE command, below.)
     The  DAMAGE  option gives a report of all damaged devices on  the 
ship  and  the extent of the damage in terms of a UNIT count for  each 
device. The number of units of damage translates into a certain amount 
of  time  required  to fix the  device  (usually).   This  is  further 
explained in the FIX command.
     The  BASES  option of the COMPUTERS command simply  displays  the 
coordinates of all friendly Starfleet bases using the same notation as 
in  the  WHERE  option.   The only difference is  that  starbases  are 
stationary.   The  game will always begin with three bases,  but  each 
will have a randomly generated amount of energy and torpedoes.  As was 
mentioned  earlier,  bases  can come under enemy attack just like  the 
Enterprise.   However, bases, having no maneuverability, are very poor 
at  the  offensive and rely primarily on strong  shields.   Using  the 
shields  depletes  energy that could otherwise go  to  the  Enterprise 
later in the game.  Therefore, ignoring pleas for help from a base can 
be  damaging unless there is good  reason.   Sometimes,  however,  the 
enemy will attack a base as a diversion.  The Enterprise can arrive to 
find that all enemy ships have quickly left the area.   (HINT: It is a 
good  idea to write down the BASE coordinates.   If it is vital to get 
back to a base and the computers are down, it could prove difficult.)
     The  TORPS option yeilds a report of the number of torpedoes  the 
Enterpise has left. The maximum number the ship can carry is 15.

-->(I)mpulse

Options: vertical displacement,horizontal displacement
         (integer values)

     The  IMPULSE  command  is for moving the  ship  relatively  short 
distances in space.   To be more precise,  this usually means a change 
in position to one of the other "sectors" or dots seen within a  short 
or  intermediate range scan.   The total game area consists of  18,225 
such  sectors arranged in a 135 X 135 matrix.   The matrix  should  be
conceptualized as   a  two  dimensional  integer  array like in   many 
programming  languages.   The  elements  of the  matrix  are  numbered 
starting  at (1,1) in the upper left-hand corner.  The first value "I" 
in any (I,J)'th location represents the vertical postion in the matrix 
and  the  second value "J" represents the  horizontal  position.   The 
WHERE  and BASES options display the Enterprise or starbase  locations 
as absolute positions within the matrix, such as postion 10,125. (This 
would  be  in the upper right-hand area of the matrix.)   To  use  the 
IMPULSE command, however, one enters two integer values separated by a 
comma   which   when  added  to  the  Enterprise's  current   position 
coordinates would yield the correct new ones.
     To reiterate,  one does not use absolute sector coordinates  with 
the IMPULSE command, but rather, the appropriate displacement vectors.  
It  will  take a while to get used to this system,  but it  will  soon 
become very easy.  All one has to do is to count the number of dots in 
the  short or intermediate scans,  from the Enterprise to the location 
one  wants to move,  first in the vertical and then in the  horizontal 
directions, keeping track of the correct sign.  Below is an example of 
a  short  range scan with some arbitrarily chosen  locations  for  the 
Enterprise  to  move,  depicted by the numbers 1 to 4.   The number  4 
position shows the minimum movement necessary to dock at the  starbase 
in this particular situation.  On the right are the appropriate values 
to enter after initiating the IMPULSE command.

. . . . . . . . .
. . . 1 . . . . .   To move to location 1 enter:  -3,-1
. . . . . . . . 2
. . . . . . . . .   To move to location 2 enter:  -2,4
. . . . E . . . .
. . . . . . . . .   To move to location 3 enter:  2,-3
. 3 . . . 4 . . .
. . . . . . B . .   To move to location 4 enter:  2,1
. . . . . . . . .

     Notice  that this system is NOT the same as in standard Cartesian 
coordinate  geometry  due to the fact that the "true"  origin  of  the 
much larger "galaxy",  if you will,  is always in the direction of the 
upper left-hand corner of the scan.  Just remember that moving upwards 
and  to the left will result in a set of absolute  galaxy  coordinates 
that are smaller, and consequently the sign of the IMPULSE vectors are 
always negative.  Conversely, moving down and to the right will result 
in  coordinates that are closer to the bottom of the array  (135,135), 
and so the IMPULSE command entries must always be positive.
     The  IMPULSE  command takes 10 UNITS of energy for  every  sector 
moved.   In addition, the enemy gets a turn for every 5 sectors moved. 
If one is moving horizontally to the right, for example, it is easy to 
see that in order to keep the enemy to one turn, the maximum value the 
IMPULSE command could be is:  0,5.   When moving diagonally,  however, 
keep  in mind that the square root law is utilized so that the maximum 
distance allowable for one turn would be for example:  3,4 or perhaps: 
4,3.  (The square root of (4x4)+(3x3) = 5.)
     When  IMPULSING to a starbase it is not necessary to move to  the 
same sector, only to one adjacent to it.  Nevertheless, it is possible 
to  IMPULSE to the same sector as another object.   A subsequent  scan 
will always show the other object and not the Enterprise.

--> (W)arp

Options:  absolute vertical coordinate,absolute horizontal coordinate
          (two integers from 1 to 135 separated by a comma)

     The WARP command is used to travel large distances very  quickly. 
Unlike the IMPULSE command, the values entered are NOT relative to the 
current position of the Enterprise,  but rather represent the absolute
coordinate  position in the matrix.   To move to the bottom  left-hand 
corner of the "galaxy",  for example,  one would hit the W key for the 
WARP command and then enter:  135,1.   WARPING always gives the  enemy 
one  turn and requires 100 units of energy regardless of the distance. 
There  is  only  one  small catch to  using  the  WARP  engines.   The 
calculations involved in figuring out just where and when to enter and 
leave "hyperspace" yield only approximate results.  Therefore, one can 
expect there to be some error in where the Enterprise actually emerges 
in real space.   The error can be as much as 7 sectors in the vertical 
and/or horizontal planes, but will usually be less.
     (HINT:  Enemy  ships  tend to react somewhat differently  to  the 
Enterprise depending on whether she has just IMPULSED or just  WARPED, 
and also depending on whether she was in or out of scan range.)

--> (P)hasers

Options:  energy output
          (integer value up to the amount in the general energy pool)

     The PHASERS in this version of TREK are almost identical to those 
in  other  versions  of the game.   Hit the P key and then  enter  the 
amount of energy desired.   For large blasts, energy may first have to 
be taken out of the deflectors.   NOTE:  the lowest the deflectors can 
be taken once they have been put up, is 1 unit of energy. (This can be 
very dangerous.)  The magnitude of the damage on enemy ships decreases 
with distance,  but the unit hit value can actually be larger than the 
amount  entered  for very close enemy ships.  The PHASER  weapons  are 
recommended  when  one  is surrounded by several ships  at  one  time. 
(However,  it may prove wiser to leave!)  They are also useful against 
one ship if it is very close.   For one ship that is far away, see the 
TORPS  command below.   One does not have to worry about using PHASERS 
around starbases.  The onboard computers are smart enough to know that 
they  are friendly.   (HINT:   If a "BALLISTICS  CONTROL- UNSUCCESSFUL 
LOCK ON TARGET" message ever appears,  it is a good idea to ask  Spock 
if there are any cloaked Romulans lurking about the area.)

--> (T)orps

Options: (first prompt line): number to fire
         (second prompt line): number of targets   (if > 1 above)
         (third prompt line): coordinates   1st ship
         (fourth prompt line): coordinates 2nd ship (if > 1 above)

     The  TORPS  command  is the other weapon  available  to  starship 
Captains.   Torpedoes,  unlike  phasers,  do not decrease in  striking 
power  with  distance.   They will render a 1000 unit hit on an  enemy 
ship per torp absorbed.   Before anyone gets too excited,  however, it 
must  be stated that the Enterprise can only fire two torps in any one 
turn.   The  first prompt after entering T for the TORPS command  will 
ask how many torpedoes should be fired. After entering 0, 1, or 2, hit 
RETURN.   If  more  than  two are  specified,  Scotty  will  issue  an 
appropriate snide comment.  If one torp was specified, the next prompt 
line will ask for the relative coordinates of the enemy ship.   If two 
torps  was the response,  the next prompt line will ask for the number 
of enemy ships to be attacked.  It can be seen that the player has the 
option  of sending both torps after one ship or dividing them  between 
two.
     After entering 1 or 2 ships,  hit RETURN.  (If anyone enters 3, I 
suggest  that they save the game and go to bed!)  The final one or two 
prompt  lines,  depending on how many enemy ships are  involved,  will 
request  the  enemy ship coordinates.   These are  entered  really  as 
vectors exactly as in the IMPULSE command.  Simply count the number of 
sectors to the enemy ship in the vertical direction making sure to use 
the correct sign.   Then count the number of sectors in the horizontal 
direction  and enter them separated by a comma.   If there is a second 
enemy  ship  involved,  put only one set of coordinates on  the  first 
input line as there will be  another.   Below, is  a  SHORT range scan 
display showing the Enterprise and two enemy ships.   Try to calculate 
the appropriate firing vectors, then check the answers on the right.

. . . . . . . . .
. . . . . . . K .   To get the Klingon here the TORP command
. . . . . . . . .   coordinates would be: -3,3.
. . . . . . . . .
. . . . E . . . .
. . . . . . . . . 
. . . . . . . . .   To get the Romulan here the TORP command
. . . . . . . . .   coordinates would be: 4,-2.
. . R . . . . . .

     The best way to calculate the co-ordinates to fire torpedos is 
to use the LONG range scan option (see above).

--> (F)ix

Options:  SR SENSORS
          IR SENSORS
          LR SENSORS
          IMPULSE ENGINES
          WARP ENGINES
          PHASER BANKS
          TORPEDO TUBES
          DEFLECTORS
          COMPUTERS
          ALL
          DONE

     The FIX command is necessary,  unfortunately, after some... ah... 
not  so  successful engagements with the enemy.   It  is  possible  to 
selectively fix just certain crucial devices or,  to fix everything at 
once with the "ALL" option.  Actually, in typing the individual device 
names,  it  is  only necessary to enter the first letter of the  name. 
Exceptions are the IR SENSORS and the IMPULSE ENGINES which begin with 
the same first letter and so require two. 
     Since the design of a starship is very, very complex, it is not a 
trivial matter to repair damage.   It requires the concentrated effort 
of  a large number of the crew to accomplish the task.   As a  result, 
the  Enterprise is somewhat "dead in the water" until the repair  work 
is finished.   In point of fact,  it takes one stardate or turn to fix 
every 100 units of damage.  A list of the amount of damage is given by 
the  D option within the COMPUTERS commmand.   It should  be  apparent 
that  it would not be a good idea to fix a significant number of units 
worth of damage while surrounded.  After the enemy took their allotted 
number  of turns, the Enterprise could easily be in worse  shape  than 
before the repairs began.   The best idea is to try to make it back to 
a  starbase where there are much better facilities.   Using the  "ALL" 
option while docked is heartily recommended in most instances,  as the 
base  technicians will finish in less than a stardate.   (HINT:  There 
may be other areas where this is possible.)  Of course, if the WARP or 
IMPULSE engines are one of the devices damaged, then getting back to a 
base or wherever can be rather difficult.   At this juncture there are 
four  options:  knock out the remaning nearby enemy ships and fix  the
engines in peace,  fix the engines and survive subsequent attacks, fix 
the engines and then lose the game,  or, do no fixing at all and still 
go on to possibly win the game.  (Good luck on figuring out this  last 
one, but it is indeed possible.)

--> (B)eam down

Options: none really, accept to abort the attempt

     The  BEAM DOWN command is for Captains who wish to leave the ship 
for  some  reason.   The Enterprise has a  very  reliable  transporter 
mechanism for this purpose.  I am not going to say too much about this 
command  for fear of spoiling all the fun.  (HINT:  it is possible  to 
BEAM  onto  just  about anything as long as the  Enterprise  is  close 
enough to it.)

--> (L)aunch shuttle craft

Options: similar to BEAM DOWN

     The  Enterprise  has a neat excursion ship known as  the  SHUTTLE 
CRAFT.   This  little  gem  is for Captains that are fobic  about  the 
transporter device (like certain medical personnel), or it can be used 
if one is bored with the Enterprise and simply wants to be by  oneself 
for  a while.   It has its own set of instruments and capabilities (or 
lack of them, depending on how one looks at it).
     I  suggest that all Captains take the shuttle out for a  spin  to 
become  more  familiar with how it handles,  in case the  need  should 
suddenly arise.  Once one is out in space,  alone, the way to get back 
aboard  the dear old Enterprise is to IMPULSE to the same sector  that 
the Enterprise is occupying.  The shuttle craft docking procedure will 
be  automatic.   I  should also mention that while one is off on  some 
sojourn  in the shuttle,  that reports concerning what is happening to 
the  mother  ship  will  be sent to  its  anxiously  awaited  Captain.  
However,  the latter has to be onboard the Enterprise (in this version 
of  the program) for any commmands to be effective.   In other  words, 
while the Captain is out fooling around in the shuttle, the Enterprise 
is a sitting DUCK!

--> (L)and the shuttle

Options: nill - GOOD LUCK!!!!

     Observant  readers will notice that this command begins with  the 
same  letter  as  the last one,  which is interesting given  that  the 
program is expecting single character input.  Not to worry... the LAND 
command only works if one is inside the shuttle.   I will not say  too 
much about the landing routine except that many have done it before.

--> (H)elp

Options: a command summary and then this document, if it is desired.

--> (E)nd

Options: hit RETURN to go back to the game if E command was a mistake
         save the game, yes or no
         start a new game, yes or no

     There  are two points that should be mentioned about the SAVE the 
game  option.   First,  it is sometimes a good idea to save  the  game 
before  trying  a  really risky move.   In this way,  if the  game  is 
immediately lost as a consequence, it is possible to go back and try a 
different tact without having to start a whole new game.   Second, the 
player can use any valid filename for saving the game,  so be  careful 
of control characters.  At least, be sure to remember them.  To play a 
saved  game,  simply  run the beginning program and enter "O" for  old 
game  when the choice between new and old is given.  A  second  prompt 
will appear for the OLD game filename.  Be sure to enter it exactly as 
it was saved, including upper or lower case.



                                Hints

1)  Be sure to use the LONG range scan for torpedo control.  It is far 
    EASIER than counting the sectors.

2)  The key to winning is to find and explore each Planet.  There are 
    goodies on several of them and trouble on others.

3)  The tracking device must be planted on an Enemy ship.  Good luck!!

4)  On one of the Planets, you will find a mini-adventure game.  Some
    of the commands that should be used are:
    SIT   NORTH     SOUTH     EAST      WEST      NORTHEAST
    SOUTHEAST  NORTHWEST SOUTHWEST    F    B    S

5)  Finally, if the program has not come out blatantly with 
    the message that "YOU HAVE LOST", there may STILL be a way to win even 
    if things look quite bleak... given the right set of circumstances and 
    courses of action,.  Look for clues.  They are there.  Good luck!


```
{% endraw %}

## TREK.DOC

{% raw %}
```
The Galaxy Trek real time STAR TREK game is run by calling TREKPIK
not TREKRUN (surprise). The instructions will be given to you if
you chose from the initial menu (either displayed or printed).
 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0197

     Volume in drive A has no label
     Directory of A:\

    DATA     DAT       128   6-15-84   9:27a
    MS-TREK  DOC     31357   9-18-86   7:16p
    MS-TREK  EXE     80498   9-30-86   2:32p
    MSTREK   DAT     12800   1-01-80  12:42a
    TREK     DOC       202   9-30-86  11:52a
    TREKPIK  EXE     50048   1-27-84   8:03a
    TREKRUN  EXE     71168   6-19-84   7:34p
    GO       BAT      1079   9-30-86  12:14p
    FILES197 TXT       977  10-07-49  11:50a
            9 file(s)     248257 bytes
                           69632 bytes free
