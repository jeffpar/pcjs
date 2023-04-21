---
layout: page
title: "PC-SIG Diskette Library (Disk #4077)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4077/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4077"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DZONE.DOC

{% raw %}
```












                                Destruction Zone

                                  version 1.0




                       Copywrite (c) 1992 Julian Cochran











________________________________________________________________________________

            D-Zone may only be copied under the following conditions

               ONLY  THE  STATED  FILES  ARE TO  BE   DISTRIBUTED
               ANY OTHER FILES MUST BE ERASED BEFORE DISTRIBUTION
               NO PARTS OF ANY OF THE STATED FILES MAY BE ALTERED
               NO MONEY APART FROM DISK COSTS IS TO  BE  INVOLVED

STATED FILES: DZONE.EXE, DZONE.DOC, DZONE.GDA, DTITLE.GDA, EGAVGA.GDA, SETUP.EXE
________________________________________________________________________________








                                   CONTENTS:
                             


                     About the Game . . . . . . . . . . 2

                     The Real Game  . . . . . . . . . . 2,3

                     Keyboard

                          Option Screen . . . . . . . . 4

                          Controlling Tank  . . . . . . 4

                          Changing Tank Controls  . . . 5

                          Shopping keys . . . . . . . . 5

                     Scoring System . . . . . . . . . . 6

                     Information on items

                           Tanks  . . . . . . . . . . . 7

                           Weapons  . . . . . . . . . . 8..12

                           Tools  . . . . . . . . . . . 13

                     Robot tanks  . . . . . . . . . . . 13

                     Registration . . . . . . . . . . . 14







                                                                          page 2

                               ABOUT THE GAME

    Destruction Zone is a science fiction tank war game. It requires a VGA card

and will run on any PC/AT machine. Although written for a 486, D-Zone  runs  at

a similar speed on slower computers by lowering the detail of movement.



                       DESTRUCTION ZONE - THE REAL GAME

   Somewhere in our galaxy lies a quietly floating station, illuminated by  the

stars, but very dark inside. From time to time a group of challengers travel to

the station and turn on the lights,  transforming  the  'Dark  Zone'  into  the

'Destruction Zone'.

   The station is large in area, but the ceiling lies only a few  metres  above

the floor. It is the battle field for the most famous war game in the galaxy.

   A series of triangular tanks, made up entirely of three huge cylinders,  are

teleported into the zone and hover in their positions, repelled from the  floor

and ceiling by strong electric forces. The liquid fuel of each tank can be seen

splashing around inside each cylinder and by looking closely inside, many wires

and tubes are also visible. Due to the radioactive fuels used, each tank  glows

softly in a unique colour.

   As the Destruction Zone becomes even brighter, the tanks start to move. The

first round has begun. The tank controllers switch between a range of weapons,

blasting their foes in all directions.

                                                                          page 3

   As time passes, the tanks glow dimmer, for they are all low on weapon  fuel.

They wait in corners, absorbing the Zone light until they  glow  brighter,  and

then they launch another attack.

   When a tank has taken too much damage, it is teleported out of the Zone with

the unharmed controller, so everyone lives  to  play  another  game.  From  all

around the galaxy, the D-Zone enthusiasts await the next scoreboard update.

   Every three rounds, competitors are allowed to spend their hard-earned money

in a special D-Zone shop, where advanced weaponry  and  special  tools  can  be

bought for a suitable price.

   Sometimes there are not enough willing to play the game which is  why  robot

tanks are often required. Many different robots are available  for  play,  some

having special advantages that make them a challenge for even  the  best  known

players.


   This game is a simulation of the game described above, with each tank  being

represented by a three point vector image, and controlled using  a  combination

of six different keys:  Forwards, backwards,  turn  left,  turn  right,  change

weapon, and fire. The background is generated randomly at the beginning of each

round and the Destruction Zone is viewed from above.

   Most of the game is easy to work out without any instructions, so  the  rest

of this manual only contains information about what each key does, the  scoring

system, and a description of each shop item and robot tank.

                                                                          page 4

KEYS USED IN THE OPTION SCREEN:


   CURSOR KEYS             Change hi-lighted box.
   RETURN or SPACEBAR      Toggle information in box.

   To select a human player, move the hi-light to player 1 box and press RETURN
   until a cursor appears in the box. Now enter name and press RETURN once more.

   It is important to know which box corresponds to which player:

                  PLAYERS    x      PLAYER 1        PLAYER 4
                  ROUNDS    xx      PLAYER 2        PLAYER 5
                  HOSTILE MODE      PLAYER 3        PLAYER 6

   Only the first three players can be controlled from the keyboard. The keys
   for each player are shown below, but may be redefined by running SETUP.EXE




DEFAULT KEYS USED FOR CONTROLLING TANKS:


   PLYR 1   PLYR 2   PLYR 3      ACTION

   UP         W        P         Move forward
   DOWN       X        ?         Move backwards
   LEFT       A        L         Rotate towards the left
   RIGHT      D        "         Rotate towards the right
   PAGE UP    E        {         Change weapon
   HOME       Q        O         Fire current weapon


   If you want to end the round press ESC. This is used for those that can't be
   bothered waiting for the robot tanks to finish the round. By  pressing  ESC,
   the remaining players receive a predicted score and money bonus depending on
   how much weapon energy and shield energy each tank has. Refer to the scoring
   section on the next page for more further details about quitting with ESC.

                                                                          page 5

   SETUP.EXE - CHANGING KEYS FOR CONTROLLING TANKS:


   You may find the default tank controls to be rather awkward, in  which  case
   you should redefine them (for any of the players) using SETUP.

   Do not be afraid to change the settings in SETUP, after all, hitting  RETURN
   through any of the questions results in the default settings being used.

   Some keyboards will not register certain keys when certain  other  keys  are
   being pressed. This will cause problems when more than one person  is  using
   the keyboard. There is no solution to this  problem  except  to  experiement
   with different keys (redefined in SETUP), until no conflicts occur.

   SETUP.EXE is also used for:

      1) Choosing what kind of sound is to be used.
      2) Registering the game.
      3) Allowing game to double in speed when only robot tanks remain.



KEYS USED IN SHOPPING SCREEN:


   CURSOR KEYS            Change hi-lighted box.

   RETURN or SPACEBAR     Buy a weapon, end shopping, abort game, save  current
                          game, or load a different game.

   PAGE UP or HOME        View information on the current item. If  the  cursor
                          does not move for a few seconds, the item information
                          is automatically requested.

                                                                          page 6
SCORING:

   TANK POINTS - TEAMS MODE AND HOSTILE MODE

      KILLING A TANK:   3 points
      DAMAGING A TANK:  1 point for every unit of damage done
                        (up to 40 points)

      A tank takes 40 units of damage to be destroyed,  so  43  points  can  be
      earned for a complete kill. Hitting a tank with good  armour  means  that
      each hit does less damage, so each hit must also earn a lower  score. For
      this reason it is best to pick on the tanks with poor  armour  first,  to
      get the most out of your weapon energy.

      In team mode, additional tank points are earned for firing at  the  enemy
      jewel. This means that it is a good idea to fire at the jewel while it is
      slowing down, when all the enemy tanks have been destroyed.


   TEAM POINTS - TEAMS MODE ONLY

      A team receives 1 point for every unit of  damage  done  to  the  enemy's
      jewel - up to 50 points. A jewel continually receives  damage  after  all
      members of the team are out. No team points are earned for destroying  or
      damaging tanks, although tank points are still  obtained  this  way.  The
      team leader is the player who has the highest tank  score.  Tanks  points
      are lost for firing at members of the same team.


   GETTING MONEY

      Ten credits are received for every unit of damage done, either  to  tanks
      if jewels, in team mode. For standard tank, up to 400  credits  could  be
      received, but for a well armoured tank, a complete kill could  earn  over
      twice as many credits.
      No bonus credits are received for making the final hit to  a  tank,  even
      though three 'tank points' are earned.


   THE STATISTICS BOARD

      Every 15 rounds, and at the end of the game, a statistics  board  appears
      after the score board. The information shown has no  real importance  but
      may be to the player's interest.

                                                                          page 7
INFORMATION ON ITEMS:


   There are three different types of items: TANKS, WEAPONS,  and  TOOLS.  The
   prices of each item increases slightly as the tank's score increases.

   Sometimes some of the special weapons do not seem to be  worth  the  money,
   but they were all put into the game for a reason. It might require a bit of
   imagination to use some of them effectively.  The  descriptions  given  may
   contain some useful ideas.


   TANKS:


      Each tank has four attributes: Speed (forwards and backwards), rotational
      speed, armour and size. Upgrades for rotation, speed, and armour  can  be
      bought for the same price as the tank. If you have  bought  upgrades  for
      a tank and then buy a new tank, the upgrades are NOT  carried  across  to
      the new tank. This means that is a good idea to  buy  upgrades  only  for
      what you consider to by your final tank - depending on  how  many  rounds
      are to be played.

      STANDARD TANK        This is the tank that all players start with. It has
                           a moderate armour, but moves and turns  slower  than
                           all the other tanks. Price: 1000.

      ROTRA I              This 'Rotation Tank' was the first non-standard tank
                           used for D-Zone combat. It has a much better rate of
                           rotation and has improved armour. Price 2000.

      ROTRA II             The compact version of the ROTRA I was designed  for
                           even better manouvorbility. Although its poor armour
                           makes it a quick kill for  many, this  tank  can  be
                           considered as the best when used well. Price: 2000.

      OPEC I               The expensive OPEC series were designed  for  faster
                           traverse speed, while maintaining the ROTRA rotation
                           standards and having excellent armour. Price: 3200.

      OPEC II              A high price is required for the OPEC II - a smaller
                           version of  the  original  OPEC,  with  even  better
                           armour and a faster turning rate. OPEC  II  upgrades
                           take a while to save up for. Price: 4500.

                                                                          page 8
WEAPONS:


      Each tank has seven weapon ports, used for different purposes,  and  each
      weapon occupies a particular port. The first port is always used for  the
      front fire weapons, the second port for Blasters, and so on.

      When a new weapon is purchased, a '1' appears in the right of the  window
      This means that the weapon can be fired up to 100 times. The same  weapon
      can be bought up to 9 times, giving a maximum of 900 fires.

      Be careful when buying new weapons. New weapons replace any number of old
      weapons of the same port without warning. Use the PAGE UP key before  you
      buy any new weapon, or you may be replacing an even better weapon.




  DESCRIPTIONS:



  [Tank port used]

      [Weapon Name]  [Damage/Energy]   [Description]
          (abbreb)   [Minimum Price]

   PORT 1  (Front Fire)


      MISSILE        3/4   This is the weapon that all tanks start with. It  no
         (MISIL)     2     more powerful than the price suggests (10 credits).

      LIGHT TRACER   0/0   This weapon uses no energy, does no damage,  and  it
         (TRACE)     5     costs almost nothing. Tracers are  only  useful  for
                           working out where the next missile will go.

      DOUBLE MISSILE 6/5   Double the power of the standard missile for only  a
         (DOUBL)     80    little more energy usage. This weapon is a good  buy
                           for the first few rounds.

      BEAM LASER     6/6   The main advantage of all lasers is that no tank can
         (LASER)     150   avoid them once  fired.  Unfortunately  this  single
                           beam laser isn't very energy efficient.

                                                                          page 9


      TRIPLE MISSILE 9/6   The Triple Missile is the next step after the Double
         (TRIPL)     800   Missile. Due to its slow speed but high damage, this
                           weapon is best used for close range combat.

      POWER LASER    12/6  Power Lasers fire two Beam Lasers by only using  the
         (POWER)     1700  energy of only one. A very deadly weapon,  requiring
                           good aiming skills.

      TRI-STRIKER    18/6  The Tri Striker, used with RAPID FIRE, is  the  most
         (STRIK)     2800  dangerous weapon of all. It is important to be sure
                           that all three beams are hitting the target, or the
                           weapon's great power is not really being used.


   PORT 2  (Blasters)

      BLASTER        48/15 The blasters use the double fire system,  where  the
         (BLAST)     550   first fire sends out the warhead and the second fire
                           breaks the warhead up into a group of missiles.  The
                           warheads break up automatically when they hit a wall
                           or the tank. The best way to use blasters is to fire
                           at the side of the tank rather than the head.

      GUIDE BLASTER  48/20 A blaster with a guided warhead - suitable  for  the
         (G.BST)     1100  desperate situation when there's no time for careful
                           aiming.

      BLAST GUIDER   48/25 The opposite effect to the GUIDE BLASTER. The  BLAST
         (B.GUI)     1100  GUIDER is a normal warhead that breaks into a  group
                           of guided missiles. A common use for this weapon  is
                           to release the guiders in an open screen, some dist-
                           ance away from the enemies.

      NUKE BLASTER  144/40 This is the big version of the standard Blaster.  It
         (N.BST)     3050  only takes two or three, and sometimes only one good
                           hit to completely destroy a fully shielded tank.
                           Since the weapon is not fired many times, it ends up
                           being very good value, but must be aimed carefully.

                                                                         page 10

   PORT 3  (Surprise Attack)

      REAR DOUBLE    8/8   Two missiles are fired parallel out from the rear of
         (REAR1)     80    the tank. The weapon makes a good surprise attack.

      REAR GUIDED    8/8   The REAR GUIDED is a REAR DOUBLE which is guided. It
         (GREAR)     750   is so effective that many like to use  it  as  their
                           main weapon. Some even drive backwards and use it on
                           the front!

      TWIN SEEKERS   8/6   Twin Seekers are used for firing around a block,  or
         (TWIN)      1200  for surprising tanks at the side. They can  also  be
                           used for long distance attacking, since they have  a
                           good damage/energy ratio compared  to  other  guided
                           missiles.

      REAR TRIPLE    18/8  The REAR TRIPLE is the improved version of the  REAR
         (REAR2)     2200  DOUBLE, doing over twice the  damage  for  the  same
                           energy use. A high price is required for  this  high
                           powered and highly efficient weapon.


   PORT 4  (Special Front Fire)

      TRI BREAKER    15/12 A very damaging low priced weapon. On second firing,
         (T.BRK)     150   the missile breaks up into three missiles, each able
                           to do 5 units of damage. The most effect way to  use
                           Tri Breakers and Quint Breakers is to fire carefully
                           at the tank without breaking the  missile,  allowing
                           it to break up automatically inside the tank,  doing
                           the maximum damage.

      GUIDED-V1      4/5   This is the basic guided missile. It  only  requires
         (GUID1)     120   approximate aiming to hit the target. Since it has a
                           poor damage/energy ratio, guided missiles  are  only
                           valuable to players having bad aiming skills.

      GUIDED-V2      4/5   A very effective guided missile.  Blind  firings  of
         (GUID2)     450   this weapon usually results in a  series  of  direct
                           hits. Unfortunately the GUIDED-VERSION 2 is no more
                           damaging than the earlier version.

                                                                         page 11

      QUINT BREAKER  25/15 These work the same way as Tri Breakers but  instead
         (Q.BRK)     1400  releasing  five  missiles  instead  of  three.  This
                           weapon makes an excellent close range attack.

      QUINT GUIDER   25/20 The Quint Guider is identical to the  Quint  Breaker
         (Q.GUI)     1700  except that it produces guided missiles, and uses up
                           a only a little more power - a brilliant weapon.

      ELECTRON BOLT  14/8  This weapon is extremely dangerous when it  is  used
         (BOLT)      2500  properly. It was designed as a long distance weapon,
                           but should be aimed at the closest tank  only -  the
                           bolt has a slight attraction to the closest tank.

   PORT 5  (Defence)

      SWIRLER        8/4   A missile is released that swirls around  the  tank.
         (SWIRL)     120   Swirlers are usually fired in large numbers  to  get
                           rid of touching or chasing tanks.

      ELECTRO BUDS   12/5  Three slow moving guiders are released, each with  a
         (ELECT)     300   very effective guiding system. When fired  in  large
                           numbers they can act as a 'deadly mist'.

      BOMBS          ?/?   Bombs vary in power and price, but all use a  double
         (BOMB?)     ???   fire system for dropping and detonating.  Bombs  are
                           usually used against robot tanks since they have  no
                           skills for avoiding them.  Sometimes  bombs  can  be
                           dropped in an area where the enemy is forced to move
                           over, usually in teams mode.

      SELF DESTRUCT  250/0 The explosion produced during self  destruction  can
         (DESTR)       0   actually destroy another fully shielded tank if  the
                           two tanks are wedged facing each other.



   PORT 6  (Special Defence)


      DEATH TOUCH    8/4   Suddenly a high energy current is thrown around  the
         (TOUCH)     200   tank, damaging all tanks in contact.  It  should  be
                           fired repeatedly since uses only a small  amount  of
                           energy.

                                                                         page 12

      ECM HACKER     0/3   The Hacker destroys a portion of the close missiles.
         (HACK)      200   It is used for 'blocking' attacks from  slow  moving
                           but dangerous missiles.

      ECM WIPER      0/6   The Wiper destroys every missile in the zone. It  is
         (WIPE)      700   usually used to aid a friend in teams mode.

      ECM CONFUSOR   0/0   Without using up any energy, this device causes  all
         (ECM)       480   guided missiles to ignore the tank. It has many uses
                           but is particularly useful for players who are  fast
                           at selecting their weapons.


   PORT 7  (Harmless)

      HEALER         4/6   The Healers convert weapon energy to shield  energy.
         (HEAL)      350   This Healer is only used when the player has  excess
                           weapon energy but is critically down on shields.

      GLOW SHIELD    0/15  Glow shields give complete protection for just a few
         (GLOW)      800   seconds. They are used for getting away from a bunch
                           of close fighting tanks or for attacking in safetly.
                           The best use is to turn the shield on, move up  very
                           close to a tank, and fire a  highly  damaging  short
                           range weapon, such as QUINT BREAKER.

      FADE SHIELD    0/20  The FADE SHIELD is a cloaking device.  It  works  by
         (FADE)      1200  bending light around the tank, and then  letting  it
                           resume its original direction,  effectively  letting
                           light pass right through the tank. Not only does the
                           tank become invisible, the tank is also unharmed  by
                           missiles. There are hundreds of ways GLOW  and  FADE
                           shields can be used, requiring some imagination. The
                           GLOW shield lasts twice as long as a FADE shield.

      TELEPORTATION  0/10  This device is useful for  escaping  from  desperate
         (TELEP)     2000  situations or for freeing yourself  when  stuck.  It
                           uses a very small amount of energy when  considering
                           its fantastic power.

      FUSION HEALER  15/15 This is the 100% efficient version of  the  standard
         (FHEAL)     1800  healer. Intelligent players are always happy to buy
                           this item once enough money is saved.

                                                                         page 13
TOOL DESCRIPTIONS:


      RED DOT            - A red dot  appears  inside  the  tank  whenever  the
                           current weapon is not fireable. It's low price makes
                           it a standard add-on for most.
      TANK UPGRADES      - You can buy tank upgrades involving speed,  rate  of
                           rotation, and armour. Each upgrade  costs  the  same
                           price as the tank, and it is only  possible  to  buy
                           one of each upgrade per tank.
      SHOPPING CARD      - The  common  shoppers  can  buy  a  D-Zone  discount
                           membership and receive all items for  only  75%  the
                           original price - a definite requirement for the long
                           round games.
      SCORE BRIBE        - It takes no effort to make a simple  deal  with  the
                           guy who controls the score board.
      FUEL UPGRADE       - This upgrade to the weapon fuel increases the damage
                           of the weapons by 65%. Although the  chemicals  used
                           are highly expensive, this is the standard fuel  for
                           Hunters and Seekers, so they need not buy this item.
      RAPID FIRE         - This item enables rapid firing with port 1 weapons.


DESCRIPTION OF ROBOT TANKS:


      R1 PROTOTYPE       - The very first robot - a competent  competitor,  but
                           still the lowest ranking tank. It has poor  shopping
                           skills and is slow at making decisions.
      R2 SHOOTER         - The Shooters were a fairly big improvement over  the
                           PROTOTYPE due to a faster scanning rate. They like
                           to use long range firing, but make no checks to see
                           if they are firing through walls.
      R3 SEEKER          - This type of robot avoids the  long  range  fighting
                           style and saves all of its weapon energy  for  quick
                           kills at short range. They have a very  fast  firing
                           rate which makes them an extremely  dangerous  enemy
                           at close range. It wasn't until that Seekers arrived
                           that robots viewed as serious competators.
      R4 HUNTER          - The Hunters will usually defeat any other robot tank
                           and only the fairly skilled players can beat a group
                           of six Hunters. They use long distance  firing  when
                           appropriate, and can fire at a faster rate than  the
                           Seekers.

                                                                         page 14



                                 REGISTRATION


                   (How do I remove that annoying message?)


   This final page is the most important part of this documentation as  far  as
the author is concerned. If you enjoy this game, I encouraged you to show  your
respected appreciation by sending $10 to the author. For this you will  receive
a password, corresponding to your name, that removes the  annoying  message  at
the start of the game. Remember that further development to this game is  based
on how much support I get from the players, so please send me a letter.

   Payers may want to send an extra $5 to receive the latest version of  D-Zone
on disk. Each new version of D-Zone is available to payers for some time before
that version is released publicly as Shareware. The price is cheap, and if  you
enjoy this game, the new versions are definately worth having.

   If you like, include a note explaining any improvements you  would  wish  to
see in the game, your ideas may be found in the next version.


                       Send $10 (with comments) to:
   
                       Julian Cochran
                       43 Bellevue Drive
                       Bellevue Heights
                       South Australia, 5050


   Later versions of D-Zone may include various new weapons, tools and  tanks,
dynamic support for the Sound Blaster card,  more intelligent robot opponents,
and whatever else truly improves the game.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4077

     Volume in drive A has no label
     Directory of A:\

    DZONE    EXE     90958   1-06-93  12:57a
    SETUP    EXE     11484  12-26-92   9:17p
    DZONE    DOC     28477   1-06-93  12:56a
    DZONE    GDA     78339  11-19-92   2:19p
    DTITLE   GDA    128768  12-26-92   3:30p
    EGAVGA   GDA      5554  11-11-91   3:00a
    CALL-US  1ST       602   1-02-93   7:20p
    DZONE    KEY        26   4-28-93   9:49p
    BUY               1789   4-28-93   9:48p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847   9-24-93  10:29a
           11 file(s)     346875 bytes
                           10240 bytes free
