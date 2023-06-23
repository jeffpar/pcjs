---
layout: page
title: "PC-SIG Diskette Library (Disk #1676)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1676/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1676"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DNDBBS 2 OF 2 (1131 ALSO)"

    DUNGEONS AND DRAGONS BULLETIN BOARD SYSTEM creates an entire new world
    on your computer and lets people call in through a modem and play DNDBBS
    via the telephone lines.
    
    DNDBBS can operate by itself on the modem, as a part of another
    bulletin board system, or as a single-user game on the computer.
    Instructions are included for making this program an on-line game in a
    door of an RBBS.  DNDBBS already has a world created for people to play
    in, but the system is expandable.  You, as dungeon master, can edit and
    create more scenarios, rooms, treasures, and monsters, just like the
    game itself.
    
    Players who call in enter their name and password, and if calling for
    the first time they can create their own character.  Character classes
    include fighter, magic user, cleric, thief, ranger, paladin, druid, and
    dungeon master (you, of course).  Assistant dungeon masters are allowed
    to help you manage the system.  Before players begin the adventure, some
    welcome and notice files are displayed on the screen to introduce the
    game.  Players can then explore, kill monsters, cast spells, find
    treasure, etc.  When a player character dies, he is resurrected by the
    high priests in the clerical sanctuary, and can then enter the adventure
    again, but with decreased character abilities.  As dungeon master, you
    are given some additional powers, such as the ability to teleport any
    player to any room while the user is on-line, edit or delete users, make
    a player invisible (thus invulnerable to all monster attacks), and
    configure log-on and general system parameters for the game.
    
    DNDBBS not only makes it much easier to manage and play a fantasy role-
    playing game, but also can be an extension of your own imagination.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DNDBBS.DOC

{% raw %}
```

DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  1


















                      DNDBBS (TM) Version 2.6b Documentation







             Dungeons And Dragons Bulletin Board System Version 2.6b




                  Documentation Written, Edited And Updated By

                                Erik J. Oredson

     BASIC Program Source Code Written, Edited, Compiled, And Maintained By

                                Erik J. Oredson



                             ZIPPIT RBBS CPC 17-2B
                              (612)944-0208 (DATA)
                                 1.2 GB. CD-ROM


                     "That's not a bug.. It's a feature.."

















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  2


                               TABLE OF CONTENTS

                                                                     PAGE
     1.0  INTRODUCTION
          1.1  The Game . . . . . . . . . . . . . . . . . . . . . . .  5
          1.2  Non Player Characters  . . . . . . . . . . . . . . . .  6
          1.3  Player Characters  . . . . . . . . . . . . . . . . . .  7

     2.0  CREATING THE PLAYER CHARACTER
          2.1  Rolling a new Character  . . . . . . . . . . . . . . .  8
          2.2  Restarting and Suicide . . . . . . . . . . . . . . . .  8
          2.3  Logging on the System  . . . . . . . . . . . . . . . .  8

     3.0  THE CAMPAIGN
          3.1  Combat . . . . . . . . . . . . . . . . . . . . . . . .  9
               3.1.1  Encounters  . . . . . . . . . . . . . . . . . .  9
               3.1.2  Attacking . . . . . . . . . . . . . . . . . . .  9
               3.1.3  Dying . . . . . . . . . . . . . . . . . . . . . 10
          3.2  Spells . . . . . . . . . . . . . . . . . . . . . . . . 11
               3.2.1  Casting . . . . . . . . . . . . . . . . . . . . 11
               3.2.2  Scrolls . . . . . . . . . . . . . . . . . . . . 13
               3.2.3  Magic Items . . . . . . . . . . . . . . . . . . 14
          3.3  Treasure . . . . . . . . . . . . . . . . . . . . . . . 15
               3.3.1  Weapons, Shields, And Armor . . . . . . . . . . 15
               3.3.2  Potions, Coins, And Containers  . . . . . . . . 16
               3.3.3  Special Objects . . . . . . . . . . . . . . . . 17

     4.0  SUMMARY OF COMMANDS
          4.1  Alignment  . . . . . . . . . . . . . . . . . . . . . . 18
          4.2  Appeal . . . . . . . . . . . . . . . . . . . . . . . . 18
          4.3  Attack . . . . . . . . . . . . . . . . . . . . . . . . 18
          4.4  Backstab . . . . . . . . . . . . . . . . . . . . . . . 18
          4.5  Bank . . . . . . . . . . . . . . . . . . . . . . . . . 19
          4.6  Beguile  . . . . . . . . . . . . . . . . . . . . . . . 20
          4.7  Break  . . . . . . . . . . . . . . . . . . . . . . . . 20
          4.8  Bribe  . . . . . . . . . . . . . . . . . . . . . . . . 21
          4.9  Brief  . . . . . . . . . . . . . . . . . . . . . . . . 21
          4.10  Buy . . . . . . . . . . . . . . . . . . . . . . . . . 21
          4.11  Bye . . . . . . . . . . . . . . . . . . . . . . . . . 21
          4.12  Casino  . . . . . . . . . . . . . . . . . . . . . . . 22
          4.13  Cast  . . . . . . . . . . . . . . . . . . . . . . . . 23
          4.14  Catalog . . . . . . . . . . . . . . . . . . . . . . . 23
          4.15  Charge  . . . . . . . . . . . . . . . . . . . . . . . 23
          4.16  Charm . . . . . . . . . . . . . . . . . . . . . . . . 23
          4.17  Chat  . . . . . . . . . . . . . . . . . . . . . . . . 23
          4.18  Circle  . . . . . . . . . . . . . . . . . . . . . . . 24
          4.19  Climb . . . . . . . . . . . . . . . . . . . . . . . . 24
          4.20  Clock . . . . . . . . . . . . . . . . . . . . . . . . 24
          4.21  Close . . . . . . . . . . . . . . . . . . . . . . . . 24
          4.22  Counter . . . . . . . . . . . . . . . . . . . . . . . 24
          4.23  Date  . . . . . . . . . . . . . . . . . . . . . . . . 25
          4.24  Dayfile . . . . . . . . . . . . . . . . . . . . . . . 25
          4.25  Dismount  . . . . . . . . . . . . . . . . . . . . . . 25
          4.26  Down  . . . . . . . . . . . . . . . . . . . . . . . . 25
          4.27  Draw  . . . . . . . . . . . . . . . . . . . . . . . . 25








DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  3


                               TABLE OF CONTENTS (cont.)

                                                                     PAGE
     4.0  SUMMARY OF COMMANDS (cont.)
          4.28  Drink . . . . . . . . . . . . . . . . . . . . . . . . 26
          4.29  Drop  . . . . . . . . . . . . . . . . . . . . . . . . 26
          4.30  East  . . . . . . . . . . . . . . . . . . . . . . . . 26
          4.31  Eat . . . . . . . . . . . . . . . . . . . . . . . . . 26
          4.32  End . . . . . . . . . . . . . . . . . . . . . . . . . 26
          4.33  Enter . . . . . . . . . . . . . . . . . . . . . . . . 27
          4.34  Examine . . . . . . . . . . . . . . . . . . . . . . . 27
          4.35  Exit  . . . . . . . . . . . . . . . . . . . . . . . . 27
          4.36  Experience  . . . . . . . . . . . . . . . . . . . . . 27
          4.37  Feint . . . . . . . . . . . . . . . . . . . . . . . . 28
          4.38  Fire  . . . . . . . . . . . . . . . . . . . . . . . . 28
          4.39  Fix . . . . . . . . . . . . . . . . . . . . . . . . . 28
          4.40  Get . . . . . . . . . . . . . . . . . . . . . . . . . 28
          4.41  Go  . . . . . . . . . . . . . . . . . . . . . . . . . 29
          4.42  Guard . . . . . . . . . . . . . . . . . . . . . . . . 29
          4.43  Health  . . . . . . . . . . . . . . . . . . . . . . . 29
          4.44  Help  . . . . . . . . . . . . . . . . . . . . . . . . 29
          4.45  Hide  . . . . . . . . . . . . . . . . . . . . . . . . 29
          4.46  Hit . . . . . . . . . . . . . . . . . . . . . . . . . 30 
          4.47  Hold  . . . . . . . . . . . . . . . . . . . . . . . . 30
          4.48  Identify  . . . . . . . . . . . . . . . . . . . . . . 30
          4.49  Information . . . . . . . . . . . . . . . . . . . . . 30
          4.50  Inventory . . . . . . . . . . . . . . . . . . . . . . 31
          4.51  Kill  . . . . . . . . . . . . . . . . . . . . . . . . 31
          4.52  Leave . . . . . . . . . . . . . . . . . . . . . . . . 31
          4.53  Linefeed  . . . . . . . . . . . . . . . . . . . . . . 31
          4.54  List  . . . . . . . . . . . . . . . . . . . . . . . . 32
          4.55  Load  . . . . . . . . . . . . . . . . . . . . . . . . 32
          4.56  Lock  . . . . . . . . . . . . . . . . . . . . . . . . 32
          4.57  Login . . . . . . . . . . . . . . . . . . . . . . . . 32
          4.58  Look  . . . . . . . . . . . . . . . . . . . . . . . . 33
          4.59  Mail  . . . . . . . . . . . . . . . . . . . . . . . . 33
          4.60  Mount . . . . . . . . . . . . . . . . . . . . . . . . 34
          4.61  Move  . . . . . . . . . . . . . . . . . . . . . . . . 34
          4.62  North . . . . . . . . . . . . . . . . . . . . . . . . 34
          4.63  Northeast . . . . . . . . . . . . . . . . . . . . . . 34
          4.64  Northwest . . . . . . . . . . . . . . . . . . . . . . 34
          4.65  Offer . . . . . . . . . . . . . . . . . . . . . . . . 34
          4.66  Open  . . . . . . . . . . . . . . . . . . . . . . . . 34
          4.67  Out . . . . . . . . . . . . . . . . . . . . . . . . . 35
          4.68  Panic . . . . . . . . . . . . . . . . . . . . . . . . 35
          4.69  Parley  . . . . . . . . . . . . . . . . . . . . . . . 35
          4.70  Parry . . . . . . . . . . . . . . . . . . . . . . . . 35
          4.71  Password  . . . . . . . . . . . . . . . . . . . . . . 36
          4.72  Pawn  . . . . . . . . . . . . . . . . . . . . . . . . 36
          4.73  Picklock  . . . . . . . . . . . . . . . . . . . . . . 36
          4.74  Pray  . . . . . . . . . . . . . . . . . . . . . . . . 37
          4.75  Psionic . . . . . . . . . . . . . . . . . . . . . . . 37
          4.76  Put . . . . . . . . . . . . . . . . . . . . . . . . . 37
          4.77  Quit  . . . . . . . . . . . . . . . . . . . . . . . . 37
          4.78  Read  . . . . . . . . . . . . . . . . . . . . . . . . 38








DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  4


                               TABLE OF CONTENTS (cont.)

                                                                     PAGE
     4.0  SUMMARY OF COMMANDS (cont.)
          4.79  Recharge  . . . . . . . . . . . . . . . . . . . . . . 38
          4.80  Relogin . . . . . . . . . . . . . . . . . . . . . . . 38
          4.81  Repair  . . . . . . . . . . . . . . . . . . . . . . . 38
          4.82  Return  . . . . . . . . . . . . . . . . . . . . . . . 38
          4.83  Ride  . . . . . . . . . . . . . . . . . . . . . . . . 39
          4.84  Run . . . . . . . . . . . . . . . . . . . . . . . . . 39
          4.85  Save  . . . . . . . . . . . . . . . . . . . . . . . . 39
          4.86  Search  . . . . . . . . . . . . . . . . . . . . . . . 39
          4.87  Sell  . . . . . . . . . . . . . . . . . . . . . . . . 39
          4.88  Shield  . . . . . . . . . . . . . . . . . . . . . . . 39
          4.89  Smash . . . . . . . . . . . . . . . . . . . . . . . . 40
          4.90  South . . . . . . . . . . . . . . . . . . . . . . . . 40
          4.91  Southeast . . . . . . . . . . . . . . . . . . . . . . 40
          4.92  Southwest . . . . . . . . . . . . . . . . . . . . . . 40
          4.93  Stop  . . . . . . . . . . . . . . . . . . . . . . . . 40
          4.94  Store . . . . . . . . . . . . . . . . . . . . . . . . 40
          4.95  Strike  . . . . . . . . . . . . . . . . . . . . . . . 40
          4.96  Suicide . . . . . . . . . . . . . . . . . . . . . . . 41
          4.97  Take  . . . . . . . . . . . . . . . . . . . . . . . . 41
          4.98  Talk  . . . . . . . . . . . . . . . . . . . . . . . . 41
          4.99  Thrust  . . . . . . . . . . . . . . . . . . . . . . . 41
          4.100  Time . . . . . . . . . . . . . . . . . . . . . . . . 41
          4.101  Top  . . . . . . . . . . . . . . . . . . . . . . . . 42
          4.102  Train  . . . . . . . . . . . . . . . . . . . . . . . 42
          4.103  Turn . . . . . . . . . . . . . . . . . . . . . . . . 42
          4.104  Unlock . . . . . . . . . . . . . . . . . . . . . . . 42
          4.105  Up . . . . . . . . . . . . . . . . . . . . . . . . . 42
          4.106  Use  . . . . . . . . . . . . . . . . . . . . . . . . 43
          4.107  Users  . . . . . . . . . . . . . . . . . . . . . . . 43
          4.108  Wear . . . . . . . . . . . . . . . . . . . . . . . . 43
          4.109  West . . . . . . . . . . . . . . . . . . . . . . . . 43
          4.110  Wield  . . . . . . . . . . . . . . . . . . . . . . . 43

     5.0  DUNGEON MASTER COMMANDS
          5.1  *EDIT  . . . . . . . . . . . . . . . . . . . . . . . . 45
          5.2  *STATUS  . . . . . . . . . . . . . . . . . . . . . . . 45
          5.3  *DISCARD . . . . . . . . . . . . . . . . . . . . . . . 45
          5.4  *NM  . . . . . . . . . . . . . . . . . . . . . . . . . 46
          5.5  *CALL  . . . . . . . . . . . . . . . . . . . . . . . . 46
          5.6  *KILL  . . . . . . . . . . . . . . . . . . . . . . . . 46
          5.7  *TELEPORT  . . . . . . . . . . . . . . . . . . . . . . 46
          5.8  *INVISIBLE . . . . . . . . . . . . . . . . . . . . . . 46
          5.9  *DROP  . . . . . . . . . . . . . . . . . . . . . . . . 47
          5.10  *LINK . . . . . . . . . . . . . . . . . . . . . . . . 47
          5.11  *ABORT  . . . . . . . . . . . . . . . . . . . . . . . 47
          5.12  *DEBUG  . . . . . . . . . . . . . . . . . . . . . . . 47
          5.13  *CONFIG . . . . . . . . . . . . . . . . . . . . . . . 48
          5.14  Custom Equations  . . . . . . . . . . . . . . . . . . 49











DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  5

     1.0  INTRODUCTION
     =================

     1.1  The Game
     -------------
     A few brief words are necessary to insure that the reader has actually
     obtained a game form which he or she desires. Of the two approaches to
     hobby  games  today,  one is  best defined as  the  realism-simulation
     school and the other as the game school.  D&D is assuredly an adherent
     of the  latter school.  It  does  not stress realism  (in the author's
     opinion on  absurd effort at  best  considering the topic!).  It  does
     little to attempt to simulate anything either.  D&D is first and fore-
     most a game  for the  fun  and  enjoyment of those  who  seek  to  use
     imagination and creativity.  This is not to say that where it does not
     interfere with the flow of the game that the highest degree of realism
     hasn't been attempted, but neither is a  serious approach to play dis-
     couraged. In all cases, however, the reader should understand that D&D
     is designed to be an amusing  and diverting pastime,  something  which
     can fill a few  hours or  consume endless  days,  as  the participants
     desire, but in no case to be taken too seriously. For fun, excitement,
     and captivating fantasy, D&D is unsurpassed. As a realistic simulation
     of things from the realm of  make-believe,  or even as a reflection of
     medieval  or ancient  warfare or culture or society,  it can be deemed
     only a dismal failure.  Readers who seek the latter  must search else-
     where.  Those who desire to create  and populate imaginary worlds with
     larger-than-life  heroes and  villians,   who  seek relaxation  with a
     fascinating game,  and who generally believe games should be fun,  not
     work, will hopefully find this system to their taste.

     "Of  course the  ultimate reason and  justification  is a playable and
     interesting game,  and how much rationalization can actually go into a
     fantasy game?"  (quote from an unknown DM)

     The term  "monster"  is used throughout this work in two manners.  Its
     first,  and  most important,  meaning  is to  designate  any  creature
     encountered -- hostile or otherwise, human, humanoid, or beast.  Until
     the encountering  party determines  what they have come upon,  it is a
     monster.  The secondary  usage of the  term is  in the  usual sense: a
     horrible or  wicked  creature of  some  sort.   Thus,  a  "monster" is
     encountered during  the  course of  a dungeon  expedition,   and it is
     discovered to be an evil high priest,  who just might turn out to be a
     monster in the other sense as well.  Note,  however, that despite this
     terminology,  humans (and such kin as dwarves,  elves,  gnomes,  half-
     elves, and haflings)  always use the matrix for humans when attacking,
     even if such humans were  encountered as "monsters" in  the  course of
     an adventure.


















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  6

     1.0  INTRODUCTION (cont.)
     =================

     1.2  Non Player Characters
     --------------------------
     The Non Player Characters are categorized into three major types,  the
     role type, the permanent type, and the non-permanent (normal monster).
     The role characters include the Pawn Fence, the Master Wizard, and the
     Weapons Master.  Their activities in  playing their roles  are usually
     recognized as shoppe owners. The Pawn Fence owns the Pawn Shoppe,  the
     Master Wizard  owns or  runs the Mages Guild,  and the  Weapons Master
     owns the  Weapons Shoppe.  Treasure is sold to the Fence,  and he pays
     his evaluation  of the  price of  the goods.  He may  decide  to  give
     nothing  if the  item is  broken or discharged.  The Fence  also keeps
     track of the user bank accounts in his ledgers.  Bank commands include
     deposit,  withdrawal,  transfer,  and account balance. Magic items are
     recharged by the Master Wizard. He will decide the price of recharging
     and if he will  even recharge it at all  (such  as a  Wand of Wishing,
     which should not be recharged). The Master Wizard is also in charge of
     training  Magic Users (MUs)  and  the production of all magic items of
     all sorts.  Weapons and  other low level items are  purchased from the
     Weapons Master who  also decides the  cost of the  order.  The Weapons
     Master also repairs treasure  such as swords and shields  for a price.
     Another type of NPC is the permanent monster.  This type of monster is
     found  to inhabit the  same room every  time you enter.  The permanent
     monster can follow  a player and will  then become  permanent to  that
     room.  The capabilities of permanent monsters over normal monsters are
     teleportation, talk responses, and other features. Normal monsters are
     the type you will encounter most of the time.

     1.3  Player Characters
     ----------------------
     The Player Character (or user)  is categorized into class,  and level.
     Classes of players are Fighter,  Thief,  Cleric,  MU, Ranger, Paladin,
     Druid, Lady, and Dungeon Master (DM). Each class has special abilities
     and statistics.  The DM is a special class which  can be  created from
     the console during logon or by another DM in user edit.  Suffice it to
     say that the Player  is the driving  force in the game  and the DM the
     driver.   How successful a  campaign becomes is fully dependent on the
     Player as well as the DM, because the Player has control of the actual
     play of the game  (DMs may notice this in their mail area if they have
     been running this DND system for any length of time).  Much creativity
     is input from the Player in the form of suggesions and questions.  The
     DM must  take hold of  this input and  redirect it in  the form of new
     monsters,  additional rooms,  and positive game playing.  Roles of the
     Player character can range anywhere from  Evil Player and  Guildmaster
     to Mayor of a city and Citizens.  Become aware that the user's role in
     the  game can be  quite interactive once he  is given the chance.  DMs
     should  allow  the campaign  to  be widely  varied  and as flexible as
     possible.














DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  7

     2.0  CREATING THE PLAYER CHARACTER
     ==================================

     2.1  Rolling a new Character
     ----------------------------
     When a new user logs on to the dndbbs he/she will provided with infor-
     mation  contained in the PRELOG file  immediately  after the time/date
     then prompted for Codename and Password. First he will be asked to hit
     [ENTER] to roll his character, then to select his character class. The
     classes are Fighter, Thief, Magic User, Cleric, Paladin, Ranger, Lady,
     and Druid.  Additionally, if the user is the Sysop logging on from the
     console, he will see another class: Dungeon Master. Each class has its
     own special statistic  and abilities.  The Fighter  has higher Fatigue
     than the other classes.  The Thief can pick locks.  The Magic User can
     cast spells. The Cleric can turn undead. The Paladin, Ranger and Druid
     have  different statistics  in Fatigue  similiar to the Fighter.  Each
     class  trains in a different  area or room with  the exception of  the
     Paladin and Druid, they train in the Fighter's area.  Second, the user
     will be  asked to enter numbers  for the statistics of  his character.
     Each number should  range from 8 to 18 and the  average of all numbers
     must be 12 or less. If one number is not within range,  or the average
     above 12, the user will be forced to start  from the beginning  of the
     statistic entering routine. The statistics are Strength, Intelligence,
     Wisdom, Dexterity, Constitution,  Piety,  and Charisma.  Each of these
     stats are used in one way or  another somewhere  in the game to affect
     some command. Of course, a Fighter would pick the highest Strength and
     Dexterity and MUs would score high on Intelligence. Third, the user is
     prompted for weapon proficiency from Blunt, Sharp, Pole, or Thrusting.
     This is weapon type in  which the player  will gain  10%  plus to hit.
     When  a monster  is killed  using  that weapon  type  his  proficiency
     increases by 10% of the  difference between the monster level  and the 
     user level  (or 5% if  he was  not using a weapon in his proficiency.)
     Fourth, you are prompted for two  alignment types from  Good, Neutral,
     Evil  and Lawful, Neutral, Chaotic.  The  alignment of your  character
     determines your  attack mode in  the  user fights.  If you are aligned
     overall  good to neutral  then your player  will  not attack an online
     player when  you are encountered.  However if you are aligned good and
     you kill another good player then your alignment will change to worst!
     You  can change your alignment back again  if you accidentally kill an
     player.  Last, the user  is displayed  extra statistics including room
     number, gold, experience, etc.  You are finally  prompted to begin the
     adventure and displayed the WELCOME and NOTICE files.  The player then
     appears  in the  resurrection room  (normally the Clerical Sanctuary),
     and the game begins.

     2.2  Restarting and Suicide
     ---------------------------
     The user  may decide to  quit the game  and return to the BBS from the
     door,  or to his computer by logging  off. Use the QUIT command. Some-
     times you may want to also continue with another character in the same
     session.  Then  use RELOGIN.   Alternatively, maybe your character has
     suffered greatly  and his  piety is  sub-normal,  then you can have it
     deleted.  Type SUICIDE then your player is erased from the users file.











DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  8

     2.0  CREATING THE PLAYER CHARACTER (cont.)
     ==================================

     2.3  Logging on the System
     --------------------------
     In order to get a  modem connection you  must  be familiar with  modem
     communications in general.  This  will not  tutor you on this subject.
     Connections can be made from 300 baud to 9600 baud.   If the Sysop has
     set configure for MNP Class 5 you can get better than 9600 baud.  Once
     you  have gotten a carrier then login begins as normal.  Your terminal
     should be set for No Parity, 8 Data Bits, and 1 Stop Bit.

     3.0  THE CAMPAIGN
     =================

     3.1  Combat
     -----------
     Encounters

     When a player enters a  room one of many things may happen.  First the
     action file is checked for weapon breakage, shield or armor crumbling,
     fumble,  and hits for Fatigue or Vitality.  Second,  once a player has
     entered the room successfully, he may be teleported or hit for Fatigue
     or Vitality when he casts a certain spell, talks to a certain monster,
     or encounters or attacks a certain monster number.  Normally a monster
     is  encountered  every 5 rounds  (Action prompts),  so a player  would
     hit [ENTER] until monsters appear and attack. Hitting [RETURN] is also
     used for increasing statistics Fatigue,  Vitality,  and  Magic Points.
     Vitality is  decreased instead if the player is poisoned.  If the room
     has a permanent  monster  class  then the  player will  encounter that
     particular monster immediately  and  will  not have to wait.  Monsters
     such  as   the  Pawn Fence,  Master Wizard,  and  Weapons  Master  are
     permanent in the sense that they occupy the first three records of the
     monster file. They cannot be attacked by normal means,  although magic
     items will cause them damage. They regenerate hits.


     Attacking

     One of the  objects to the  DND adventure  is the killing of monsters.
     (The other goals, adventuring, exploring rooms, and discovering hidden
     treasure,  include combat itself,  so  that is the  topic of concern).
     Combat is  normally  attained by  the actions  of attacking by  sword,
     spells, and turning undead.  Attacking by weapon and hand involve many
     commands, including:  attack  (kill, hit, attack, and strike),  parry,
     feint,  thrust, turn, circle, and charge.   These commands are used in
     conjunction with one another.   For example, a player  might hide when
     entering a room,  encounter various monsters,  and circle  each one to
     cause them to be confused.  Then he would attack one until the monster
     is near death,  then thrust the  final damage to slay it.  Or  he  may
     fight  two or three monsters simultaneously  (if his level and fatigue
     are high enough  to absorb  the damage  to his character)  using feint
     and parry for  less return damage.  During this  period of  attack and
     return  attack,   the  monster(s)  can  inflict  damage  on  a  player
     character's  Fatigue and Vitality,  the former  being decreased  until
     it reaches zero,  then the Vitality decreased until zero (and player's
     death).







DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page  9

     3.0  THE CAMPAIGN (cont.)
     =================

     3.1  Combat (cont.)
     -----------
     Attacking (cont.)

     The player may  decide to leave  the room if his position is not  good
     health-wise  and cast cures or use cure devices or he might cast these
     spells during combat because the monster's hits will remain lower  for
     further combat.  Also during combat a  player will be taking  treasure
     found on the monsters,  dropping broken weapons  and discharged  magic
     items, loading and firing  missile weapons,  and examining weapons and
     and monsters for remaining charges and hits. During combat monster may
     drain levels from a player  (very dangerous), poison or cast spells on
     the player character.

     Dying

     Death is not a pretty sight anyone will tell you.   Will my soul go to
     heaven daddy?  Well, in DND you can die a hundred times and not suffer
     a single scratch!   Monster are slain at your hands and your player is
     instantly resurrected  when you die.   Think of it as a sense of being
     immortal and you will understand  the excitement of role-playing games
     in the age of axe-murders,  mass genocide,  and world wars.  When your
     player character dies,  he  will  always be resurrected  by  the  high
     priests  in the  clerical sanctuary.  Whether or not you remain in the
     game  for this  to happen  depends  on  your  constitution  and  piety
     statistics.  Normally your player will only suffer the decrease of one
     level of expertise.   Conversely, if your player has low piety or con-
     stitution,  then you will  be reduced  in levels by half.  In any case
     your constitution and  one random statistic are  lowered by one  point
     point and your Fatigue,  Vitality,  and Magic Points zeroed.  You also
     lose all gold and inventory.  The high priest will mercifully give you
     some gold, and if you are lucky enough, your treasure will still be in
     the room you died in.   When a  monster dies,  it  is removed from the
     combat room,  it's treasure falls  to  the  ground,   and you gain the
     experience it had.  Note that if the room is full of treasure then the
     monster's  treasure rolls away,  this is also  true for your  player's
     treasure when it dies. Once you have  killed enough monsters to train,
     your experience will become zero,  and you  can increase one level  at
     your designated  training area.   Monsters which  flee at the hands of
     hits more than 75% of the monster's points give only half experience.

     3.2  Spells
     -----------
     Casting

     All magic and cleric spells are similiar in that the word sounds, when
     combined  into  whatever  patterns  are applicable,  are  charged with
     energy from  the Positive  or Negative Material Plane.  When  uttered,
     these sounds cause the release of this energy,  which in turn triggers
     a set reaction.  The release of the energy contained in these words is
     what  causes the  spell to be forgotten  or the  writing to dissappear
     from the surface upon which it is written.









DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 10

     3.0  THE CAMPAIGN (cont.)
     =================

     3.2  Spells (cont.)
     -----------
     Casting (cont.)

     The triggering action draws power  from some  plane of the multiverse.
     Whether  the  spell  is  an  abjuration,    conjuration,   alteration,
     enchantment, or whatever,  there is a flow of energy -- first from the
     spell caster,  then from some plane to the area  magicked or enspelled
     by the caster.  The energy flow is not from the caster  per se,  it is
     from the utterance of the sounds, each of which is charged with energy
     which is loosed when  the proper  formula and/or  ritual is  completed
     with their utterance.  This power then taps the desired plane (whether
     or not  the  caster  has any idea of what or where it is) to cause the
     spell to function. It's much like plugging in a heater; the electrical
     outlet does not hold all  of the electrical energy to cause the heater
     to function,  but the wires leading from it,  ultimately to  the power
     station, bring the electricity to the desired location.

     The most powerful player in the DND game,  aside from the Fighter,  is
     the  Magic User.  Although all  the other character classes  can  cast
     cure spells (Vigor,  Heal,  Enchant, and  Curepoison), the MU has many
     more spell types at his disposal. First, the basic spells for cure are
     Vigor  to  increase Fatigue,   Heal to increase Vitality,   Enchant to
     restore  Magic Points,   and Curepoison for poisoning.  Each  of these
     spells  restores partial  points to statistics.  The additional spells
     available  to the  MU  are  Bless, Befuddle, Teleport, Wish, Passdoor,
     Turn, Conjure, Poison, and Drain. The other character classes can also
     cast the offense spell as discharged from a magic item.

     When a Magic User casts a spell it must have a target. There are three
     types of targets -- monsters, the player, and a magic item. The player
     is  assumed to  be  the target  if  none is  specified after  the cast
     command. The three types of commands then are: "CAST", "CAST MONSTER",
     and "CAST ITEM".  The MU is immediately prompted  for the  spell chant
     after the  cast  command is  issued and the spell file is searched for
     the matching spell chant, and if not found,  the MU sees displayed the
     message  "You mispronounced the spell chant!".   The only spells which
     can be cast on  the  player itself  are  cures and bless  (to increase
     piety).  Any offense spell can be cast onto a monster and only enchant
     can  be cast  on a  magic item.   Casting onto magic items can only be
     accomplished by MUs,  level 10 players,  and DMs.  This special method
     of spell  casting is  used to recharge a magic item.  Maybe you have a
     fireball wand that is discharged so  you cast an enchant spell onto it
     and it then becomes usable once again.

















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 11

     3.0  THE CAMPAIGN (cont.)
     =================

     3.2  Spells (cont.)
     -----------
     Casting (cont.)

     The other spells are special purpose, some being classified as combat,
     and the others are useful only in certain circumstances.  Teleport is,
     of course,  used to move the player to another room.  Conjure can be a
     dangerous spell.  It calls up a monster from the class of the level of
     the player.  Passdoor is  extremely handy,  it unlocks any door in the
     room of the MU (he hears a 'click' afer it is cast).  Wish is the most
     interesting of all,  it allows the player to call upon the Ghods them-
     selves for a request of some treasure.  If there are more  than one of
     that particular treasure name  (i.e. a sword) place the pound sign (#)
     and the number of the treasure after the name,  for example A SWORD#3.
     The rest are combat spells.  Turn, Befuddle, Poison and Drain all have
     special purposes. The Turn spell destroys undead like zombies.  Undead
     are those monsters who can drain levels.   When you cast the  Befuddle
     spell and it works, the monster it is cast upon becomes inactive as if
     you had  circled it.   The Poison spell drains  monster hits for up to
     five rounds according to the player's level. The Drain spell decreases
     the monster one level, it then attacks at that lower level, or dies if
     it becomes level zero.

     Scrolls

     Scrolls store energy in the form of a spell chant inscribed with magic
     hieroglyphics  on the  parchment.   In order for a player to read this
     writing he must read the scroll with the examine command. When scrolls
     are  examined their  spell  chant is dislayed  and they  disintegrate.
     The process  of adventuring for scrolls to  discover the spells chants
     encourages  the game play and  is suggested instead  of giving out the
     spell chants.  Once a player  knows  what a  certain scroll  does, for
     example a black scroll,  he also knows the spell chant and can use the
     scroll instead of examine it.   Scrolls can be used in three different
     forms: "USE SCROLL", "USE SCROLL MONSTER", and "USE SCROLL ITEM". Each
     time a scroll is used your  player's magic points are decreased by the
     level of the spell. If the target is not  specified then it is assumed
     the player is  the target and the  spell is cure,  bless, or teleport.
     If the target is  a  monster then the scroll must be an offense spell.
     The  spell level  is then  used as a bonus  multiplier  in  the combat
     equations.  In all of the above cases the scroll always disintegrates.
     Scrolls can be used to recharge other  magic items if the scroll is an
     enchant scroll,  for example,  "USE SCROLL WAND" where  the wand  is a
     discharged fireball device.

















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 12

     3.0  THE CAMPAIGN (cont.)
     =================

     3.2  Spells (cont.)
     -----------
     Magic Items

     Storage  of many spells  of one type  is done through the  creation of
     magic  items  such  as  A Staff of Disintegration,  A Wand of Wishing,
     Some Black Gems, etc.  The number of times a magic item can be used is
     the number of charges it contains.   When you examine a magic item you
     will see displayed its number of charges,  spell level (or plus),  and
     its spell name  (also included are weight,  value,  and others).  Your
     player can use magic items  in three forms  (like scrolls),  they are:
     "USE ITEM", "USE ITEM MONSTER",  and  "USE ITEM ITEM".  The player  is
     assumed to be the target if none is specified. The spells which can be
     discharged onto a player are Cures, Bless, and Teleport. Using a magic
     item on a monster  discharges that  spell in combat.   Each time it is
     used  it  decreases one charge until there  are zero charges.  Then an
     enchant spell  must be cast  onto the item or the  Master Wizard  must
     recharge it. Some monsters can only be attacked with magic and if your
     player is not a Magic User he must then use a magic item.  You can use
     a magic item to  recharge  a magic item.  The first  must have enchant
     charges and the second one must be discharged.

     A few notes on the examine command.  In case your player has more than
     one of the same  item and he needs to specify  the second or third one
     he would place the pound sign #  with the number of the item after it,
     for example  "USE ITEM#2 MONSTER".   He can also specify which monster
     (if more  than one of  the same name  are in the  room),  for  example
     "USE ITEM#3 MONSTER#4".   Counting of items in this manner starts with
     the ground then  your  inventory.  There  could be  two swords  on the
     ground which you  have dropped  because they were  broken and you have
     three  more swords  in your inventory  you are carrying.  If you  type
     "EXAMINE SWORD"  you will see displayed the statistics of the sword on
     the ground.  So to display your first sword you are carrying you would
     type   "EXAMINE SWORD#3"  (one more than the number on the ground). If
     If you are holding some  object which has first letters  similiar to a
     monster name  (a battle-axe and a bat, you specify "EXAMINE BAT") note
     that the monster array  is checked  first before the ground, then your
     inventory.   So there  could  be  two bats in the room,  three  broken
     battle-axes,   and you want to examine your  fifth battle-axe  you are
     holding. You would type "EXAMINE BA#10".





















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 13

     3.0  THE CAMPAIGN (cont.)
     =================

     3.3  Treasure
     -------------
     Weapons, Shields, And Armor

     The majority of the  monster's attack  will be absorbed by  your armor
     and shield.  Your weapon will do the most  damage on the monster  with
     the  exception  of using magic.  Beginning  players  can  buy starting
     weapons and armor at the Weapons Shoppe. The Weapons Master forges and
     sells these and other  starting items such as  vigor potions and cure-
     poison scrolls.  Most treasure is found on  dead monsters and increase
     in power and level as  the monster's level increase.  Your weapon must
     have  positive  strikes  (you  can  find  out  the  number  of strikes
     remaining in a weapon  with  the identify command)  and  be  in   your
     inventory for you to use it. The command for using a weapon is HOLD or
     WIELD.   Each time your  weapon successfully  hits a  monster  it will
     decrease its strikes  by one  until they are  zero,   then the  weapon
     breaks in half and falls to the ground.  Weapon plus is directly added
     to your Strength  (seen as a  "(+xx)"  in the  information and  health
     commands) and figures into the combat equation.  Armor and shields are
     used with the WEAR and HOLD commands. They also have strikes which are
     decreased with each monster attack on your character. If your player's
     dexterity is low the  more chance  you  will fumble  your  weapon  and
     shield leading to lost game play momentum and extra monster hits. When
     a weapon, armor, or shield breaks or crumbles, they can be restored to
     full  power with the  FIX  command if they are +10 or below, otherwise
     the Weapons Master must repair them.



































DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 14

     3.0  THE CAMPAIGN (cont.)
     =================

     3.3  Treasure (cont.)
     -------------
     Potions, Coins, And Containers

     More treasure worth noting,  and more frequently found,  are coins and
     potions. Potions being by far the more important of the two. The Drink
     command enables your player character to quaff a potion. This normally
     results in vigor,  heal,  enchant,  or curepoison.  The potion is then
     discharged and may be recharged or discarded. Dropping treasure in the
     room  which is  used  up  allows you  to  pick  up  more  (because the
     inventory limit is 20 objects)  and changes  your weight  (your player
     can only carry  10 times your  Strength in pounds).  When your  player
     leaves the room by any means  (teleportation,  death,  or  moving in a
     direction)  all treasure is erased! The only exceptions are containers
     and riding devices. Most monsters carry some booty of coins  for their
     own  expenses.  They are usually plundered from the  Dungeon or Castle
     other wasteland  and not worth much.  Your player can carry any amount
     of  gold but taking coins  checks your weight and   encumbrance  first
     before adding to your  gold.  Coins successfully picked up then become
     part of your gold not your inventory.

     If your player is lucky enough to find a container such as A Magic Bag
     of Holding or  A Treasure Chest  you  will  be  able  to  carry  more.
     Containers  themselves weigh something in pounds but the treasure they
     contain does not increase your weight or number of inventory. The only
     limit to the number of objects you can carry when you have a container
     is the container limit itself (usually about 10 - 50). Containers have
     the additional features of  being able to be locked with  or without a
     key.   If a container is locked with  a key you must have the matching
     key  number.   Then when you unlock it the  system  will  search  your
     inventory for  you to find  the matching key.   You can  find the  key
     number of a  container by  examining it.  Containers cannot be smashed
     open.   You cannot sell the actual container  to the Fence but you can
     sell the contents.  The  Fence will  add  up the value  of the  entire
     contents and  offer you a price.  If the  container is locked then the
     Fence will fumble and  swear a bit before informing you that he  can't
     open the thing.

     The command form for taking objects out of container and dropping them
     in are the  same form as the GET and TAKE command  with the additional
     parameter of the container name.   For example, GET SWORD#5 BARREL, or
     DROP GEM BARREL.  Dropping a container into  itself results with   the
     container completely disappearring!  (DROP BAG BAG)   Not recommended.
     Containers can  contain other containers,  for example,  DROP BAG BOX,
     then DROP BOX BARREL, etc.
















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 15

     3.0  THE CAMPAIGN (cont.)
     =================

     3.3  Treasure (cont.)
     -------------
     Special Objects

     Among the many features of  dndbbs  are included the following special
     purpose treasure items: Loadable Devices, Vehicles, and Rings. Devices
     which  can be loaded and  fired come under the  category of missile or
     projectiles. For example,  a cross bow and bolts,  a sling and stones,
     a shotgun and shells, or anything practical to the adventure. Once you
     have a device (take shotguns for example)  you can examine it and find
     that  the  description includes  "It is loaded."  or not loaded as the
     case may be. You must locate the correct ammunition  (described in the
     examine command as being such)  and  load  the device  with  the  LOAD
     command.  Once the device is loaded it can be discharged with the FIRE
     command. For example, LOAD SHOTGUN, then FIRE SHOTGUN ELF. Devices can
     be loaded any number of times with no upper limit.   The device can do
     three things:   hit the monster,  discharge harmlessly,  or blow up in
     your face and you take damage. Your inventory is checked by the system
     for the proper ammunition.

     Vehicles could  encompass any thing  used for travel:  Horses, Wagons,
     Carts, Bulls, etc.  Vehicles (take a Horse for example) have hits like
     any NPC and can absorb that number of hits until they reach zero. Then
     the Horse is 'damaged' and cannot be mounted. Casting a vigor spell on
     the Horse cures it  and restores the hits.   The  Mount command causes
     your player character to be able to  ride the Horse.  Then he can Ride
     in any direction with the Ride command. For example, MOUNT HORSE, then
     RIDE WEST.   Your Horse also enter portals with you such as stairs and
     ladders.  Dismounting  happens when  you go in a direction without the
     Ride command. Horses become permanent to the room they rode into.

     There are three ring types to protect you from certain monster attack:
     antipoison, antidrain, and antispell.  The ring will absorb the number
     of hits equal to the monster level. The antidrain  ring being the most
     useful for attacks  by the undead who  can drain your  character  by a
     complete  level  each random round.  The antispell ring  only protects
     against generic offense  spells such as fireball  or lightning and the
     antipoison ring  only protects  against the  poison spell.























DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 18

     4.0  COMMANDS
     =============

     4.1  Alignment
     --------------
     Your character's alignment is made up of two  types combining into the
     overall classfication  of your player.  Alignment is currently used in
     determine your reaction in the online user fights (when your player is
     encountered  by another  user).  The first type is  Good, Neutral, and
     Evil and the second type Lawful, Neutral, and Chaotic.  When you first
     logon and roll your character you can choose these types of alignment.
     In the user fights, when you encounter another user, he may or may not
     attack you depending on similiarity of both  your alignments.  You can
     find out his alignment by looking at him with the identify command. It
     will display if he is helpful  or dangerous.  If you kill a player who
     had  similiar alignment then your own  alignment will change to worst.
     With the Alignment command you can re-enter your alignment preferences
     again! You will be prompted for the two alignment types.

     4.2  Appeal
     -----------
     Appealing to the  Ghods  themselves to take action on  your  behalf is
     known as divine intervention, assuming the Ghods respond.  The percent
     chance that the  Ghods  recognize your plight is slim indeed. Normally
     your player character must be in  dire straits to cause  any attention
     at  all to come to  your aid.  One  instance in which the  Ghods  will
     intervene is a  near  death state of your player, i.e. your statistics
     while fighting in combat have fallen to 15% or less of full power.  In
     this case the  Ghods  may step in and  teleport  you  to the  Clerical
     Sanctuary resurrection room where you can start adventuring more. Note
     however  that the  Ghods  will not  under any  circumstances change or
     increase your statistics, they will only transport you. The only other
     instance when the  Ghods  will  intervene is when the room description
     allows no exits (directions or portals).  Then they see your plight as
     befallen like a bug  in the system which needs clearing up.  Of course
     the system can't have stranded characters now, can we?

     4.3  Attack
     -----------
     The Attack command causes your player character to begin combat. If he
     was previously hiding in  the shadows he  will no longer be hidden and
     all monsters with first strike capabilities will attack him.  Monsters
     normally attack on sight,  however, some do not have first strike set.
     If your player's piety is subnormal all monsters will attack on sight.
     When first entering a room it is good practice to hide then circle all
     monsters as you encounter them.  This way you won't have a mass attack
     when you begin your first strike.
     (See also HIT, STRIKE, KILL)

     4.4  Backstab
     -------------
     One way of causing double damage every time on a monster is during the
     time you are hidden after entering a room. The Backstab command allows
     you to  catch a monster unawares  and Attack  from your hiding  place.
     This does  more damage  than  Attack or  Thrust  but about the same as
     Charge. It is the equivalent of CIRCLE MONSTER, CHARGE MONSTER.








DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 19

     4.0  COMMANDS (cont.)
     =============

     4.5  Bank
     ---------
     In his  spare  time  The Fence  is responsible for the  keeping of the
     town's ledgers and the Banking facilities.  Access to the Bank command
     is done through the Fence.  You must be in  the Pawn Shoppe to use the
     Bank.  The Bank commands are: Deposit,  Withdraw,  Balance,  Transfer,
     and  Quit. When you first enter the Bank,  the Fence prompts you: "Now
     what do ya want?". Type "?" for help or "Q" to quit.

     Type "B" to show your account balance.  The Fence will fumble with his
     ledgers and  display the amount you have on hand and the amount in the
     Bank. Deposits gain 6% interest compunded daily.

     Type "D" to deposit gold into your account.  The Fence will prompt you
     for the amount:  "How much(0-xxx)?".  You can then enter the amount to
     deposit.  If you have no gold to deposit  the Fence will  respond with
     "You have no Gold to deposit!".  If you enter an amount  that is  more
     than you are carrying the Fence will respond with "You don't have that
     much Gold!". After a successful transaction the message  "You hand him
     the Gold.." is displayed.

     Type "W" to  withdraw  Gold  from your account.  The Fence will state:
     "You have nothing to withdraw!" if your account is zero. Otherwise the
     Fence will prompt you for the amount "How much(0-xxx)?". Attempting to
     withdraw  more Gold than  you have in the  account causes the Fence to
     to say "You don't have that much Gold!".  A successful withdrawal dis-
     plays the message "The Fence hands you the Gold.."

     Type "T" to transfer Gold to another user. If you try to transfer from
     a zero account the Fence will say "You have nothing in your account to
     transfer!".   If you have  Gold in your account the Fence will prompt:
     "Transfer to what person?" and  you  would enter the  user's codename.
     The codename must be on file or else the Fence will tell you  "There's
     none in  my  ledgers  with  that  name!".   A successful  transfer  is
     indicated  when  the  Fence fumbles  with  his  ledgers and  says "xxx
     transfered to his acount.."






DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 20

     4.0  COMMANDS (cont.)
     =============

     4.6  Beguile
     ------------
     This  command is designed  for the Lady character class. When the user
     types  beguille the  monster last attacked  will be diverted  from its
     path of destruction  causing it to flee from the  room.  The Lady then
     gets half the experience  from the monster.  The  Lady must first have
     already attacked the monster  by other means  in order to beguile it.
     (See also CHARM)

     4.7  Break
     ----------
     There is more than one way to  open up a door, gate, portal,  or what-
     ever.   The Break command uses brute  force to get  through  a portal.
     (Portal is a generic term for an object to enter).  You will find that
     in order to enter some  portals they must be unlocked first.  Some may
     even have to be broken into.  Break through a  locked portal  with the
     command BREAK PORTAL.  Following is a chart of what of commands can be
     used to open, unlock, and break what portals.  'Y' in the chart stands
     for Yes and 'N' for No.  Note:  if a portal is already unlocked it can
     be opened and closed so the chart would indicate Y for all open/close.
     Notice  also that a portal  with a key  is indicated Y for lock/unlock
     assuming the user has the matching key.
     (See also SMASH)

                                       C O M M A N D

                            | Open/ | Lock/  | Break/ | Picklock/ |
                            | Close | Unlock | Smash  | Passdoor  |
                  -------------------------------------------------
             P    Normal    |   Y   |    N   |    N   |     N     |
                  -------------------------------------------------
             O    Locked    |   Y   |    Y   |    Y   |     Y     |
                  -------------------------------------------------
             R    Invisible |   Y   |    N   |    N   |     N     |
                  -------------------------------------------------
             T    Hidden    |   Y   |    N   |    N   |     N     |
                  -------------------------------------------------
             A    Invisible+|       |        |        |           |
                  Locked    |   Y   |    Y   |    Y   |     Y     |
             L    -------------------------------------------------
                  Hidden+   |       |        |        |           |
                  Locked    |   Y   |    Y   |    N   |     Y     |
             T    -------------------------------------------------
                  Normal+   |       |        |        |           |
             Y    Key#      |   Y   |    Y   |    Y   |     Y     |
                  -------------------------------------------------
             P    Invisible+|       |        |        |           |
                  Key#      |   Y   |    Y   |    N   |     Y     |
             E    -------------------------------------------------
                  Hidden+   |       |        |        | Picklock N|
                  Key#      |   Y   |    Y   |    N   | Passdoor Y|
                  -------------------------------------------------









DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 21

     4.0  COMMANDS (cont.)
     =============

     4.8  Bribe
     ----------
     Often you may  encounter so many monsters  at one time  that you would
     like  some to  leave.  Mass monster  attacks can be  hazardous to your
     player's health.   Or maybe  you have encountered some  monsters which
     has been configured to jail attacker. In either case the Bribe command
     will do just fine.  Offer the monster some gold or some armor.  If the
     offer is good enough for the  level of the monster he will take it and
     leave.  For example, you encounter a maiden and you know if you attack
     her you will be thrown in jail  so instead you type  BRIBE MAIDEN 1000
     and she takes your offer and leaves the room!
     (See also OFFER)

     4.9  Brief
     ----------
     The dndbbs is verbose in most prompts and displays. Advanced users may
     want to  shorten the output.  Typing BRIEF will  display one line room
     description and change the Action? prompt to Do?.  With the brief mode
     toggled ON your  player will spend  more time typing than watching the
     screen. Be warned however that the long room description may sometimes
     contain information about a room which is not in the short description
     which means you may pass through a room with hidden objects.

     4.10  Buy
     ---------
     Beginning players will need to purchase basic equipment such as swords
     and shields.  Other players might  need a quick  curepoison potion for
     their character.  The Weapons Master stocks these items in his Shoppe.
     You must be in the Weapons Shoppe to use the Buy command.  The form of
     the Buy command is BUY # (the word BUY followed with the number of the
     item in the list).  If you have  enough Gold  to afford  the item then
     your inventory will automatically be adjusted with the new item,  your
     Gold decreased,  and  the message  "Ok"  will be displayed.  Type LIST
     while in the Weapons Shoppe to get a list of items for sale.

     4.11  Bye
     ---------
     When you are finished with your  Adventure  session it is  best to use
     the logoff commands instead of hanging up suddenly. Strange things can
     happen to characters who hang up without warning.   For example,  your
     player is in  combat and  you  are about to die,   you see the message
     "You have just died!" and you quickly  hang up thinking you can escape
     the death sentence and the system won't be quick enough to  update the
     file. Instead the file is updated and your inventory isn't in the room
     you died in! You lost all your treasure.
     (See also QUIT, STOP, END)















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 22

     4.0  COMMANDS (cont.)
     =============

     4.12  Casino
     ------------
     There  is another  role NPC called the Game Master.  He resides in the
     Cathouse  (also known as Whorehouse)  and is in charge of the  Casino.
     The  Casino  Games are  Craps,  Slots,  Poison  Bottles,  and  Russian
     Roulette.   Enter the  Cathouse and  type Casino  to play these games.
     The Game Master will  inform you of  your Gold on hand  and the prompt
     "Casino>"  will be displayed.   If you  have no Gold on  hand the Game
     Master will  tell you that you have no  account with him. Type "?" for
     help or "Q" to quit.

     Type "S" to play  the slots.  You will be  prompted to place  your bet
     from  1 to 10,000 Gold.  If you enter  more  than you have on hand the
     Game Master will  tell you that you do not have that kind of Gold. The
     slot machine has three  wheels with  seven types of monster per wheel.
     They are Ghost, Ghoul, Ghast, Devil, Demon, Satan, and Death. If Death
     appears on any wheel the bet is lost instantly. The payoff is:

        Two of a Kind / Payoff        Three of a Kind / Payoff
        Ghost            2 - 1        Ghost             10 - 1
        Ghast            3 - 1        Ghast             15 - 1
        Ghoul            5 - 1        Ghoul             20 - 1
        Devil            7 - 1        Devil             50 - 1
        Demon            9 - 1        Demon             75 - 1
        Satan           10 - 1        Satan            100 - 1

     Type "C" to shoot craps.  You can bet 1 to 5000 Gold.  Craps is played
     as follows. You shoot two dice.  If the first roll is 2, 3, or 12 then
     you  lose instantly.  If the first roll is 7 or 11 you win your wager.
     Otherwise the first roll is  your 'point' and  you must re-roll  until
     you  get your point again, then you win your wager times the number of
     rolls. If, during these rolls, you roll a 7 then you lose.

     Type "P" to bet against the poison bottles.  You will bet which bottle
     is not poison and drink it.  If you drink a poison bottle then you die
     and lose all your Gold!   The farther from the  poison bottle from the
     one you drink which is not poison increases your win. For example, you
     pick  bottle 2 and  number 4 was poison,  that's 2 bottles difference.
     However  if you has picked  bottle 7 that would be three  bottles away
     and you would win more.

     Type "R" to play russian roulette. This game is the toughest of all. A
     six  chamber pistol  is  placed against your head and the chamber spun
     each time before pulling the trigger.   If  you  manage to survive ten
     blanks you will  win a large amount of Gold.   You will  see  either a
     '-click-' or '*bang*' meaning you survived or died that round.   After
     each round you will be prompted to continue or not.














DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 23

     4.0  COMMANDS (cont.)
     =============

     4.13  Cast
     ----------
     Only Magic Users  can use this command.   The general forms are  CAST,
     CAST MONSTER, and CAST ITEM. Each spell has its own level, chant,  and
     type.  There are offense spells,  special  purpose  spells,   and cure
     spells.   When you type Cast you are prompted "Chant?"  for the  spell
     chant.  It may be  entered in upper or  lower  case and  should  match
     the actual chant exactly or it will not work.  See  section 3.2.1  for
     more details about the Cast command.

     4.14  Catalog
     -------------
     This command displays the entire list of over 100 comands available to
     the user.  This list is displayed in column format,  alphabetized from
     the actual data statements used by the system.  This way the user will
     always see the  most recent commands  added.

     4.15  Charge
     ------------
     This is a combat command.  Charging your opponent consists of a bodily
     lunge forward with your  weapon thrusting  ahead of you.   This action
     does maximum  damage to the monster.  Charging  leaves your  character
     prone  to more hits from the return  attack of the monster because you
     become  vulnerable from moving  ahead instead of just  standing  while
     thrusting and blocking.  This form of combat is normally used to apply
     the finishing  touchs to the death of a monster.  Sometimes high level
     users can do this to first level monsters in their way  (kills them in
     one blow).

     4.16  Charm
     -----------
     This command  is for Ladies.   It allows  them to use  their powers of
     charisma to charm the current monster being  attacked into inactivity.
     You must first attack a  monster to charm it. If your  charisma is low
     or  the charm  formula fails  you then the  monster  will  continue to
     attack.   Charmed monsters become inactive until  attacked again.
     (See also BEGUILE)

     4.17  Chat
     ----------
     The Sysop can initiate Chat Mode at any time during the game. The user
     can also request to chat.  Typing Chat beeps the console once a second
     until either the user hits [SPACE] to quit  or the Sysop hits [ESC] to
     chat.   The  Chat Mode is used  for speaking to the Sysop  should some
     emergency arise or if  you just want to say HI.  Always  think of what
     you plan to say in Chat Mode before starting. Don't just type Chat and
     say "I dunno" or something foolish.














DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 24

     4.0  COMMANDS (cont.)
     =============

     4.18  Circle
     ------------
     This is a passive combat command.  The most common use of this command
     is while your  character is in hiding and  encountering monsters.  You
     should circle a few nastier monsters so they won't attack all at once.
     On the  other hand circling is also  used while in  combat with one or
     more monsters. For example, you are fighting a bat and an ankhheg. You
     then encounter a bandit but  you dont want to have to handle all three
     so you take the time to Circle the bandit.  The chances are  high that
     circling  will be successful,  however the  message 'Didn't work!' can
     appear on occasion.

     4.19  Climb
     -----------
     Climb is the  equivalent  of the Up command.  Climbing is  more like a
     direction than it is  entering a portal since there is no parameter to
     the  Climb  command.   The  Climb command  was  installed to  preserve
     compatibility wih users who insist on using  Zork-like sentences.  For
     example,  some users will  type MOVE ROCK when they  see the word rock
     in a room  description.  Remember that the  objects in the room do not
     always coincide with the words in the room description.

     4.20  Clock
     -----------
     Date and time is displayed  when you first log on to the system before
     the prelog file and codename/password enter routine. This command will
     display the current  date/time and  your  time  remaining.   Your time
     remaining is  constantly monitored by the system.  When you reach your
     time limit the  system  saves your  character to  disk,  displays  the
     logoff file, and disconnects the modem  carrier.  Then it recycles for
     the next user.
     (See also DATE, TIME)

     4.21  Close
     -----------
     Both objects and treasure can be closed.  There are certain conditions
     to an object or treasure before it has the capability to be closed (or
     opened). First it must be lockable and unlocked. For example a dungeon
     door which,  when you examine it,  shows the word '[locked]' after its
     description. It has the ability to be open or closed, but it is locked
     at the time. Once it has been unlocked it can be closed like any other
     object  or treasure.   Normally only portals  can be opened or closed.
     Containers can also be closed if they were created with a key.  Beware
     of locking  a container if you  do not have the key -- you will not be
     able to unlock it! Some portals lock behind you after you have entered
     them. This means other users will have to picklock it or smash it open
     all over again.

     4.22  Counter
     -------------
     Counter is  short for Counterattack. To counterattack your opponent is
     to sweep your weapon in a wide semi-circle in a thrusting action. This
     increases your bonus to  hit by one  and additional  hits according to
     your dexterity. To use the counter command, type the monster name with
     it. For example: COUNTER PEDIPALP






DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 25

     4.0  COMMANDS (cont.)
     =============

     4.23  Date
     ----------
     Date/time can be displayed with this command.   You will also see your
     time  remaining on the  system displayed.  When you first logon to the
     BBS your time limit in minutes is calculated. DMs have 60 minutes time
     limit.  First level users  are granted 15 minutes  and  all  others 30
     minutes.  There is  also a daily  call limit  of 3 calls to allow more
     users on the system.
     (See also CLOCK, TIME)

     4.24  Dayfile
     -------------
     The Dayfile command reads and displays the file DNDBBS.DAY.  This file
     contains the daily activity of users logging on and off of the system.
     Lines  of  text recorded are  "logged on",  "logged off",  "time limit
     exceeded",  and "dropped carrier".  The date of the dayfile is checked
     when the next user logs on, and deleted if older than on day.

     4.25  Dismount
     --------------
     Once  you are  riding a  vehicle there are  two ways to dismount.  The
     standard way is to go in a  direction without using the  Ride command.
     If you don't want to leave the room to dismount then type DISMOUNT and
     you will no longer be riding the vehicle.  Since your vehicle can take
     hit  points of  damage you  would  automatically be  dismounted if the
     vehicle took enouch hits to disable it.  Then the vehicle is 'damaged'
     (displayed by the examine command) and  cannot be mounted  until it is
     repaired with vigor.

     4.26  Down
     ----------
     One of the seven directions is  Down.  The directions  from a room are
     displayed  with  the room description.   You will see the  phrase "The
     exits are down up"   unless  you are  in brief  mode  then  only   the
     directions are displayed.  Rooms are usually linked from one direction
     to each other.   For example,  you go  north then  south and you would
     return to the first room. If you type a direction which does not exist
     in the room you will see the message "You can't go in that direction!"

     4.27  Draw
     ----------
     In  order to  attack monsters with a weapon  you must  be  holding  it
     first.  Type  DRAW WEAPON  with the  proper  name of your  weapon. The
     weapon plus is added directly to your Strength.  Taking an Information
     will display '(+xx)' after  your Strength indicating  the plus to your
     ability.  Your weapon plus is then  added in to the attack formula and
     increases hits on monsters.
     (See also WIELD, HOLD)













DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 26

     4.0  COMMANDS (cont.)
     =============

     4.28  Drink
     -----------
     The only way to quaff a potion is with the Drink command.  Potions can
     contain cures  like Vigor,  Heal,  Enchant, and Curepoison.  Once  you
     drink  a potion it becomes  discharged (empty)  and  should  either be
     thrown away or recharged by  the Master Wizard.  MUs can also recharge
     potions with an enchant device or spell.

     4.29  Drop
     ----------
     The Drop  command removes some  item or  treasure from  your player's
     inventory to the ground.  You would type DROP ITEM, for example, DROP
     SWORD.   This is usually done either  to get rid of broken/discharged
     treasure, or to make room for greater treaure to be picked up. If the
     ground is full of  objects then the  item rolls away  and disappears.
     You can  optionally drop  an item into  a container with the  command
     form DROP ITEM CONTAINER, for example, DROP SWORD BAG.  The container
     may either be in your inventory or on the ground.
     (See also PUT)

     4.30  East
     ----------
     Travel commands allow your player character to enter new rooms (beside
     the Go, Enter, and Exit commands).   Typing EAST causes your player to
     move to the room linked by the direction east. Sometimes monsters will
     follow  you into the new room.  This is a fifty  percent chance.  They
     will follow  with their  old hits  remaining  and complete  statistics
     unchanged.  If the monster which is following is categorized permanent
     then it will become permanent to the new room.

     4.31  Eat
     ---------
     Your player may get  hungry from time to time.  Although your player's
     statistics are not  effected by hunger,  this command was placed in to
     serve purpose to players who insist on  typing Zork-like commands. The
     command itself  does nothing unlike the Drink command.  Typing EAT and
     no parameters  displays the message 'You eat for a while'.  Relatively
     speaking the one prompt which is used for this command does add to the
     health rate  cycle for  increasing your  statistics so  you could  say
     Eating does something (arguable).

     4.32  End
     ---------
     Finishing  the game play  with the  end  command  (standard is command
     Quit) ends the session and logs you off the system. Before you log off
     the logoff file is displayed with whatever may have been placed in it.
     Normally it  is practical to put in  advertisements about  other BBSes
     and a message 'Thanks for calling...' Your call limit is updated also.
     The user has a limit of three calls per day per character.
     (See also BYE, QUIT, STOP)











DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 27

     4.0  COMMANDS (cont.)
     =============

     4.33  Enter
     -----------
     Some objects  created by the DM serve as portals  to other rooms as an
     alternative to  directions. For example, a door, a hidden door, a hut,
     a black portal, etc.  Portals can be locked, keyed, hidden, invisible,
     or any number of attributes specified  for a portal.  Portals can lead
     to a room right next  to the beginning one,  or a room across the land
     or continent, however you have your adventure set up.
     (See also GO)

     4.34  Examine
     -------------
     Examining things  in the  BBS is one  of  the most  important  actions
     besides  adventuring and attacking monsters.  The examine command will
     display information about monsters,  treasure,  and objects.  Monsters
     should always be examined after encountering them in a new room so you
     will not be  killed by a  mega-monster. Brief information is displayed
     for monsters, objects, containers, or treasure. Complete information
     is available with the identify command.
     (See also LOOK)

     4.35  Exit
     ----------
     Exit is a direction equivalent to Out. If the room description has the
     direction Out  linked to another room you could type  EXIT instead. If
     the  room you  exit to  has not  been edited  you will see the message
     'Non-descrip room#xxx' and no directions.  In this case  you must pray
     to the Ghods with the Appeal  command to be teleported to the Clerical
     Sanctuary resurrection room. You will then see the message 'Your right
     there doesn't seem to be any way out!'.
     (See also LEAVE, OUT)

     4.36  Experience
     ----------------
     Listing  your  experience is an  information command (See also Health,
     and Information).   When you type this command your  amount of Gold is
     shown and the experience remaining to train for  the next level.  This
     is an  important  figure because  it indicates the  amount  of  points
     needed  to subtract  to zero before  you can become  the next level of
     expertise   (and a more powerful player!)   Once it is zero  you  must
     find your training area and type TRAIN.




















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 28

     4.0  COMMANDS (cont.)
     =============

     4.37  Feint
     -----------
     No it doesn't  mean "faint"  like in  fall  to the  ground.  The Feint
     command is a combat command. To feint is to thrust and then deflect at
     the last moment  putting  the  monster  off  guard.   If the  feint is
     successful  then  the monster becomes inactive for a few rounds buying
     you time to attack other  monsters or cast a spell, or drink a potion,
     etc.  Of course,  feinting allows the other  monsters more hits during
     the next round  because you are  not as well  defended by the  weapon.
     Type FEINT MONSTER, for example, FEINT RAT.

     4.38  Fire
     ----------
     Devices like shotguns and crossbows  must be loaded before they can be
     fired. The level of the ammunition determines the bonus multiplier for
     for hits on the monster.  The command form is FIRE DEVICE MONSTER, for
     example FIRE SHOTGUN GHOUL. First level monsters are  usually no match
     for  these devices.   Ammunition is  sometimes scarce and  can only be
     found on other monsters,  although the  Weapons Master does sell these
     items if your DM has him set up this way.

     4.39  Fix
     ---------
     If your weapon has  been broken from heavy combat you  can fix it with
     this command. The form is FIX WEAPON. Only weapons plus 10 or less can
     be fixed otherwise they must be repaired by the Weapons Master.  There
     is a chance that the weapon won't be fixed the first try.  You may see
     the message 'You didn't fix it!'  if your statistics are too low. Then
     try fixing it several times until it works.   During this time you may
     want to move to another room to avoid unnecessary attacks.

     4.40  Get
     ---------
     All  treasure can  be  picked up  from the  ground with the  following
     restrictions and conditions:   You have enough room in your inventory,
     you are strong enough to carry the treasure,  and nothing prevents you
     from  getting the  treasure (like a monster).   Objects,  on the other
     hand,  are normally 'permanent'  meaning only the DM can get them.  Of
     course,  any object could be  made  non-permanent  (imagine  taking  a
     dungeon door then  entering it while you held it!)  Most non-permanent
     objects  are trivial  things  like books,  or altar candles,  etc. The
     command form  and specifications are:  GET OBJECT,  GET OBJECT#XX, and
     GET OBJECT CONTAINER. Where XX is the number of the object or treasure
     if there are more than one of the same in a room.
     (See also TAKE)
















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 29

     4.0  COMMANDS (cont.)
     =============

     4.41  Go
     --------
     Entering  objects and portals  are  another way of moving from room to
     room besides directions  and teleportation.  You actually have no real
     way to  know if an  object can be a  portal or not.  Examining it will
     show its  description and attributes.   For example, a ladder could be
     just an object or it could be a portal. Some portals are trapped, some
     are invisible  and can be  found with the  Search  command,  some  are
     hidden  and  cannot be  displayed  with  the  Search command, some are
     locked,  some require keys,  and on and on.   The Out command normally
     leads back to the original room the portal went to, for example, a hut
     with one room inside, or a dungeon cell, etc.
     (See also ENTER)

     4.42  Guard
     -----------
     The guard command is  a defensive attack command. To guard yourself is
     to place  your weapon in  front of your body  with your shield  in the
     other hand.  You must be holding a shield  for this to work. The guard
     command  has no  monster  name  to it  because guarding  works for the
     currently attacked monster -- you must have  attacked a monster first.
     Your guard will remain effective against all attack until you activate
     another attack command.

     4.43  Health
     ------------
     The Health command is an information command  (See also Experience and
     Information).  This is intended to be a  short display of info that is
     used while in combat to determine statistics.  For example, you are in
     combat and you type Health to find your remaining Fatigue and Vitality
     in case they are low. The display shows the following:

        You are a level two Human Fighter
        Fat 15/15 Vit 5/7 Mag 6/6 Psi 4/4
        Str 17 Int 14 Wis 10 Dex 10 Con 8 Pie 9 Cha 10
        Weapons: Blunt 0% Pole 0% Sharp 10% Thrusting 0%

     Fat is abreviated for Fatigue, Vit is Vitality, Mag is Magic,  and Psi
     is Psionics. Then weapons proficiencies (percent plus to hit with that
     weapon.  Then Strength, Intelligence, Wisdom, Dexterity, Constitution,
     Piety, and Charisma.

     4.44  Help
     ----------
     Information can be obtained for every command in the dndbbs.  The file
     containing these  help files  is DNDBBS.DOC.   If a user  types   some
     incorrect command or a  command not in the system or forgets the para-
     meter on a command, he will see the following message displayed:

     I don't understand! Type HELP for help or CATALOG for a list of commands.

     Typing  HELP displays the menu from DNDBBS.DOC, and help can be listed
     for each command.  Help on a  single  command can  be listed  with the
     command HELP <COMMAND> replaced by the command needed.







DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 30

     4.0  COMMANDS (cont.)
     =============

     4.45  Hide
     ----------
     Monsters you encounter can  and do attack on sight.   The Hide command
     should be used after first entering a room. You cannot hide once there
     are monsters in the room.  If you do try to hide then you will get the
     message "You can't hide in front of something!"  and the monsters will
     attack you for that round. You can also hide an object in a room which
     will become visible after searching. Use the form HIDE OBJECT  or hide
     an object in a container HIDE OBJECT CONTAINER.

     4.46  Hit
     ---------
     This is the equivalent of Attack.  The attack formula used for hits on
     monsters when you attack involves many factors including,  your level,
     your strength,  your dexterity,  your weapon plus,  etc.  Every attack
     command, and spell casting also includes a bonus multiplier into which
     some of the above are incremented by.  If you are not holding a weapon
     you will see the message "Punch!" before the hits are shown. Otherwise
     three  message  could  appear,  "Double damage",  "Triple damage",  or
     "Deathly damage". These are multipliers of 2, 3 or 4, respectively.
     (See also ATTACK, STRIKE, KILL)

     4.47  Hold
     ----------
     This is the equivalent to the Draw command.  Many things can happen to
     the weapon you are holding.  First, and  most of all, you can and will
     fumble it occasionally. The chance of fumbling your weapon is directly
     proportional to your Dexterity.  During the round that you fumble your
     weapon (and/or shield) the monsters will attack.  Second,  your weapon
     could break in half. Your weapon has a certain number of strikes which
     are  decremented for  each successful hit.  When they  reach zero  the
     weapon is broken. In both cases above the weapon falls to the ground.
     (See also DRAW, WIELD)

     4.48  Identify
     --------------
     The  command form for  identify is  IDENTIFY <OBJECT> where  object is
     treasure, monster, container, or object. This command can only be used
     by level 10 players  or above.  It gives detailed information on  most
     items like monster hits and experience,  weight and  value of treasure
     and full status of any item.




















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 31

     4.0  COMMANDS (cont.)
     =============

     4.49  Information
     -----------------
     Like the Health and Experience commands, this command displays info on
     your character.  This command  displays your level,  gold,  inventory,
     health,  class and classname, and  experience needed.  One such output
     might look like this:

        Information: GANDALF
        You are a level four Magic User
        Str 16(+4) Int 18 Wis 17 Dex 13 Con 10 Pie 9 Cha 10
        Fat 24/24(+6) Vit 20/20 Mag 35/35 Psi 9/9
        Weapons: Blunt 5% Pole 0% Sharp 20% Thrusting 5%
        You have 200 Gold.
        You are carrying 6 lbs. of treasure:
        A shortsword, some plate armor, and a purple potion.
        You need 180 experience points to reach the next level.

     4.50  Inventory
     ---------------
     Everything your  player is carrying  can be listed with  the Inventory
     command.  The total weight of the treasure is displayed along with the
     name  of each  treasure.  Inventory  is changed  by taking and getting
     objects,  disintegrating scrolls,  fumbling, and weapon breakage.  You
     can  examine any object in  your inventory.  When there  are more than
     one of the same named  object the second one can be examined by adding
     #2 to the name.  Add the number  of the item to be examined.  Remember
     the  monsters are matched for the name,  then the ground,  then lastly
     your inventory.

     4.51  Kill
     ----------
     The main attack command is  Kill  because the single letter 'K' can be
     typed without causing a 'unique command' error.  For example, 'K B' is
     the  most abbreviated form  for KILL BAT.  When a monster attacks your
     player then its own attack formula is calculated for each monster that
     is active.  Some monsters are configured to cast offense  spells, some
     drain levels, poison, and regenerate hits.  Monsters can be permanent,
     normal  groups  (or in a class),  or  role-type (Fence, Wizard).  More
     options  include hit for fat or vit  upon encounter,  weapon breakage,
     jail attacker, and immune to attacks unless magic.
     (See also ATTACK, HIT, STRIKE)




















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 32

     4.0  COMMANDS (cont.)
     =============

     4.52  Leave
     -----------
     Leave is  the equivalent to the direction Out.  It was implemented  to
     preserve compatibility with conditions arising from entering an object
     like, for example, a straw hut.  The commands Exit, Leave, and Out are
     all linked to the same room direction but some are more appropriate in
     certain circumstances.
     (See also EXIT, OUT)

     4.53  Linefeed
     --------------
     Some users' terminals cannot support  insertion of their own linefeeds
     into the  display  from their  communications package.   This  command
     toggles the  linefeed character at the end of the line  ON or OFF. The
     character is ASCII 10 and most terminals  will see no effect when this
     command is used.

     4.54  List
     ----------
     The Weapons Master sells items (weapons, shield, potions, etc.) in his
     Shoppe. You  are able  to get a full  listing of these items  with the
     List command. At the header of the list the message "Type BUY # to buy
     for example 'BUY 12'" or somthing similiar.  This means  each item for
     sale has its  own accompanying number which you  must type to buy. You
     must  also have sufficient  Gold to afford it.  The item will be auto-
     matically added to your inventory if there  is room. The List displays
     output similiar to the following:

        ## Item                          wgt.  gold  +
        -- ------------                  ----  ----  -
        #1 a sword                        2     20   2
           .
           .
           .


     4.55  Lock
     ----------
     All  portals have the  attribute for locking.  For each combination of
     lock, invisible, keys, etc. there is some  action which will work with
     the combined attributes (See the table in command Break).  DMs and the
     Sysop can actually lock a portal which had no lock to begin with. This
     can be done without entering *EDIT.  Otherwise normal users can lock a
     portal  or  container  and  it  will  then  show "It is locked."  when
     examined or "[locked]" in the room description.
















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 33

     4.0  COMMANDS (cont.)
     =============

     4.56  Load
     ----------
     Ammunition is needed for Devices such as shotguns, crossbows, etc. The
     Load  command increases the number  of charges  on the weapon and  the
     ammunition  dissappears  (supposedly into the weapon).  The ammunition
     you are  trying to load must have  been made for the weapon.  If it is
     not you will see the message "That's not ammunition". The command form
     is LOAD WEAPON,  for example,  LOAD SHOTGUN. Of course, the weapon you
     are trying to load must itself be a loadable weapon.  These weapons do
     approximately  the same  damage as a  spell,  i.e. they  have a  bonus
     multiplier  which is  constant.   Unlike a sword  which  could hit for
     double damage at one time or triple damage at another.

     4.57  Login
     -----------
     The logon command brings the player through the logon procedure which
     allows him to start the game  over with a new codename.  The player's
     time limit stays in effect for each character he may use.
     (See also RELOGIN)

     4.58  Look
     ----------
     Room descriptions are always output when your character first enters a
     room. You can also output the room description by typing LOOK. Placing
     a  parameter  to Look  causes it to act as if you had used the examine
     command,  for example,  LOOK MONSTER is  the same as  EXAMINE MONSTER.
     The room description includes all  directions, monsters, treasure, and
     objects.  The DM or Sysop will see the additional information in brief
     mode after the one  line  description in the  form RM|xxx MC|xxx where
     RM is the room number and MC the monster class.
     (See also EXAMINE)






























DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 34

     4.0  COMMANDS (cont.)
     =============

     4.59  Mail
     ----------
     Sending and receiving  messages about the campaign,  posting questions
     and suggestions,  and private mail is one important feature of dndbbs.
     Typing MAIL  will bring the user to the Mail  area where he or she can
     read and post mail. The user is then presented with a short menu which
     can be  re-displayed by typing ? at any time.  The Sysop  will see the
     status line change to the user's name, and status of mailbox.

     Type "R" to  read the  public  messages.  You will be prompted for the
     message  number '#/y/n/?' or  something  similiar  depending  on  your
     version.  You can  then enter  the message number,  type "N" or "Y" to
     continue or not or  "K" to kill the message (if you entered it).  Each
     message is output with the date/time stamp, user who posted,  and sub-
     ject. During the output you can hit [SPACE] to stop listing.

     Type "P" to read your private messages.  You will know if you have any
     from the message when you  enter mail either "You have  mail waiting!"
     or "Sorry, no mail.."   Private mail is output like  public  mail with
     the exception that the private mail uses different files.

     Type "E" to enter  some mail. The message file is incremented with the
     new message  when you are finished.  You will be prompted for the sub-
     ject and then displayed the message "/X to edit, /S to save.". You can
     then start to enter your message of up to 19 lines.

     Type  "/X"  while  entering a message  brings you to the  message edit
     routine.  There you can delete single lines,  edit out words,  insert,
     list, etc.  Typing "S" to save your message or "C" to coninue entering
     the message once you are done editing.

     Type "S" to send private mail.  This is similiar to entering a  public
     message, however you will be asked for the username to send to. If the
     username is not found in the files you cannot enter that message.

     Type "U" or "L" to unlock and lock your mailbox.  When your mailbox is
     locked  several things  happen.   First, no one  can send  you mail or
     transfer Gold to your  account (the system will act as if the username
     is not found in the files). Second, you are not displayed in the Users
     or Top command. The purpose of this is to allow users to be anonymous.

     4.60 Mount
     -----------
     This special purpose command allows your player to ride a vehicle. You
     are  then 'mounted' or  you are  riding it.  The vehicle can take hits
     from monsters. Once they reach zero the vehicle becomes damaged.  (See
     section 3.3.3 for more  details).  Your DM may opt to  create a stable
     and horses, or wagons in the town square.













DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 35

     4.0  COMMANDS (cont.)
     =============

     4.61 Move
     ----------
     Sometimes an  object might get in your  way. For example, you type "N"
     to travel north and the message  "You can't, there's something in your
     way" is shown. You will have to type  MOVE  ROCK  or whatever the name
     of the object is. Then you'll see the message "You move it around.."

     4.62  North
     -----------
     Traveling in the adventure is done  with directions and very few other
     methods.  North is one of the seven directions along with South, East,
     West, Up,  Down, and  Out (or Exit and Leave).  Unless there  are many
     teleportation  scrolls and devices,  and you know which  room each one
     sends you to, you are stuck with moving one room at a time.  One loop-
     hole is in the Appeal command.  For example,  you purposefully get hit
     by monsters  while constantly monitoring  your Fat and Vit,  then once
     they are low enough you type Appeal and get teleported to the Clerical
     Sanctuary.

     4.63  Northeast
     ---------------
     Type "NE" or Northeast and you move northeast.  When you move to a new
     room the status line on the sysop's display screen is updated with the
     current statistics. The console DM can constantly monitor your health.

     4.64  Northwest
     ---------------
     Type "NW" or Northwest to move northwest. The room directions are also
     searched for when you use the Panic command. Panicing moves you to the
     first available direction that is not blocked by a level restrition.

     4.65  Offer
     -----------
     Monsters can be offered small amount of  Gold or low level treasure to
     get them  to leave  the room.  It would  be foolish  to try to offer a
     level 10 monster  (you probably couldn't afford them anyhow!)  because
     what  would be the  use of level 10  monsters if you won't fight them?
     The purpose of the Offer command is  to allow the player the option of
     getting rid of unwanted monsters such as maidens  who jail attacker so
     the users won't accidentally attack the wrong monster.

     4.66  Open
     ----------
     Many portals you adventure across will be either locked or closed. The
     Open command simply opens the door  once it is unlocked.  This command
     always  works in  this case.  Of course if the  portal is still locked
     then you will unable to open it.  And if it is already  open or cannot
     be locked then you will  not be able to open it.  Containers and other
     treasure  can  also be  opened and closed.  Normally portals are real-
     world things like windows, gates, doors, etc.











DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 36

     4.0  COMMANDS (cont.)
     =============

     4.67  Out
     ---------
     The basic exit  from most rooms is linked  with the Out direction. For
     example,  you enter the Weapons Shoppe, buy some item, and go Out. You
     are then back to the first room before entering. Every time you exit a
     room or enter a new one,  the treasure on the  ground is removed. This
     does not include containers, vehicles (the only permanent treasure) or
     objects (treasure and objects are two different things).
     (See also EXIT, LEAVE)

     4.68  Panic
     -----------
     Pushing the  panic button is  halfway  between  combat  and non-combat
     activity. The last resort is, of course, to Appeal before you die. The
     next to last is Panicing. You're caught up in an onslaught of monsters
     and can just visualize your Fat and Vit going,  at the last minute you
     type Panic and the message appears "You run away like a madman!". Your
     direction  is picked at random,  your weapon and  shield falls  to the
     ground, and you run screaming into the night.
     (See also RUN)

     4.60  Parley
     ------------
     Parley with  monsters usually gets no response.  However some monsters
     are equipped with text messages.   Mostly though,  you will either get
     attacked  or teleported  elsewhere if  there is any  response at  all.
     Remember these  monsters  are  dangerous,  hostile  beings  whose only
     purpose in dndbbs is to attack  and ultimately  kill you!  Any monster
     that would not do so would not be part of the game.
     (See also TALK)

     4.70  Parry
     -----------
     Variety of  combat commands make  up  a good  adventure. To  Parry  is
     placing your  weapon across your chest in  a defensive maneuver.  Even
     though it is a combat command,  no damage is accomplished by Parrying.
     This command causes less hits on your player's  character for the next
     round of monster attacks. Monsters themselves use combinations of  the
     combat  commands  but they don't  display the actual  equations  going
     through the program.

     4.71  Password
     --------------
     Each user has his own unique  password to identify his account.  Under
     most circumstances you will not need to change this password  if it is
     complex enough.  Someone could, however, obtain your password and post
     unrespectful messages  on the board  or suicide your  character.  Take
     steps  to insure  your password is long enough so it can't be cracked.
     You will be prompted "Change password(y/n)?"  then "New password?" and
     either "Password changed"  if you type  in something  or "Password not
     changed" if you hit [ENTER]










DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 37

     4.0  COMMANDS (cont.)
     =============

     4.72  Pawn
     ----------
     The Fence (a medieval term for the owner  of a Shoppe for the sale and
     re-sale  of belongings)  is  a role-player.  He  always exists in  his
     permanent Shoppe and takes care of the  Bank and Pawn Shoppe (See also
     the BANK command). Type PAWN ITEM, for example, PAWN SWORD.  The Fence
     will then make his  evaluation  of the goods and offer you some amount
     of Gold.

        "Well, I'll give ya xxx for the sword.."
        "Ok(y/n)?"

     You  can then  enter "Y or "N" at the prompt.  If you  select "NO" the
     Fence will respond "Tough luck.." or something similiar. If you select
     "YES"  he will  respond "Ok, fine with me.."  or  something  similiar.
     Conatiners offered to the Fence have to be open or he will not be able
     to total the contents. Once he has the contents totaled he will prompt
     you "Well, I'll give ya xxxxx for the contents of the container."
     (See also SELL)

     4.73  Picklock
     --------------
     One of the major  features of being a Thief is the ability to picklock
     doors. Thieves can picklock almost any portal invisible or keyed. (See
     the table in the Break command).  The adventure  would not be complete
     without Thieves. They complete their part by being the only class able
     to use this  special ability.  The DM should work their class into the
     adventure by placing locked and/or keyed doors in certain areas of the
     room file in such a  way that Thieves will be  required to operate the
     campaign. The command form is PICKLOCK DOOR with the portal name.

     4.74  Pray
     ----------
     High evil priests and altars of worship  in the  lowest levels of  the
     Dungeon  are a  must for  any campaign!   Devices such as racks,  iron
     maidens, and torture chambers are all part of the excitement. The Pray
     command, like  Move and Eat,  merely exist for the Zork-like user. The
     issue being compatibility. Typing  PRAY  at any time responds with the
     message "Nothing happens.."

     4.75  Psionic
     -------------
     The psionic  command has  dual purpose.  With the Attack  parameter it
     allows  the user to  cast a  psi spell  on the  current  monster being
     attacked (i.e. you must attack a monster befoer using psionics on it).
     The  Defense  parameter allows  the user to  select a psi defense from
     monsters using psionics. For example:

     PSIONIC ATTACK or PSIONIC DEFENSE

     You will then  be prompted for the  psi spell.  The attack  spells are
     spell  chants specified as  psionic spells.  Your  psi points  will be
     decremented by the level of the  psi spell. Psi points increase by one
     point during health rate updates.







DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 38

     4.0  COMMANDS (cont.)
     =============

     4.76  Put
     ---------
     The  PUT  command removes  an  item of the  player's inventory  to the
     ground.  You may  have some object  like a  broken sword  which  is no
     longer useful.  Type  PUT SWORD  and the offending item will be placed
     on the ground.  Or a discharged magic item.  You  can also put objects
     into  containers with  the put command.  To put some armor into  a box
     you would type  PUT ARMOR BOX.  If you have two armor you can  put the
     second  one with  the # (pound sign)  and the  next  item number.  For
     example: PUT ARMOR#2 BOX.

     4.77  Quit
     ----------
     Typing "Q" is  the standard  method of exiting the  dndbbs  system and
     returning to your terminal package. The modem carrier is disconnected.
     This also happens when your player  dies and is not resurrected.  Then
     you will  see the  following messages output:   "You have just died!",
     "You were just killed by a monster-name", "You were not resurrected.."
     There is no way out of this  predicament once it has begun.  Your file
     is updated before the messages appear.
     (See also BYE, END, STOP)

     4.78  Read
     ----------
     The following items can be read (examined):  treasure,  objects,  room
     description,  container contents,  and monsters.  Each have particular
     statistics and attributes.  Type READ ITEM,  for example, READ SCROLL.
     Typing READ with no parameters  displays the current room description.
     Any item can be examined including hidden objects which do not show up
     in the room description. There may be a hidden door that will not even
     be displayed with the Search command but when you type  READ DOOR  you
     see the door description.
     (See also EXAMINE)

     4.79  Recharge
     --------------
     The Master Wizard resides in the Mages Guild.  He trains MUs to higher
     levels of expertise.   He also recharges  magic items for a fee.  Take
     your  discharged item to the Mages Guild and type  RECHARGE ITEM  with
     the name of the item.  The Wizard will  estimate the  price and prompt
     you  "Well, it'll cost you xxx Gold."  and "Ok(y/n)?",  you then reply
     "Y" for yes  or "N" for no.  If you  decide if it is  worth recharging
     the item and select YES then the Wizard will cast an enchant spell and
     the item will have full charges.  These are certain  magic items which
     you  cannot recharge.  One is a  magic item with wish charges.  Others
     include items not made by the Wizard and weapons that are not magical.

     4.80  Relogin
     -------------
     This command allows the player to restart a new character. It brings
     him back to the login sequence. He may then decide to roll another
     character or continue with another. The player's old character is
     stored to disk, and his time limit remains intact.
     (See also LOGIN)







DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 39

     4.0  COMMANDS (cont.)
     =============

     4.81  Repair
     ------------
     The Weapons Master is  responsible for the  sale of weapons and  other
     items.  He also repairs broken weapons.   Enter the Weapons Shoppe and
     type REPAIR WEAPON,  for example,  REPAIR BATTLEAXE.  He will estimate
     the  cost for  repair and  prompt you Yes/No  to fix the item.  If you
     decide to pay the charge  your Gold will be automatically deducted and
     your weapon fixed to full strikes.  Remember the only weapons that can
     be repaired are those forged in the Weapons Shoppe.  Other strange and
     exotic items can only be fixed by the original creator.

     4.82  Return
     ------------
     The Return command causes your character to place his weapon back into
     its sheath or  holding recepticle.   If you are not holding any weapon
     you will see the  message "You are not holding that!".  Returning your
     weapon  should be done  when  entering the  Masters Shoppes  to  avoid
     confrontation or during combat  (this doesn't  seem logical,  however,
     there are some times when it is useful).

     4.83  Ride
     ----------
     This special purpose commmand  is for  vehicle control.  Once you have
     mounted  a vehicle  you must  have  some way to  direct it.  The  Ride
     command allows  you to enter  portals  and  travel directions on  your
     vehicle.  Type RIDE DIRECTION, for example, RIDE NORTH. Traveling in a
     direction  without the  Ride  command  automatically  dismounts   your
     vehicle,  moves you  in that direction,  and leaves the vehicle in the
     previous room.

     4.84  Run
     ---------
     Most times during a monster onslaught your character can travel north
     or some direction to avoid death. However you may see the message "The
     monster blocks your way!" and you take more hits. Then you might
     consider the Run command. Type RUN and your player drops his weapon
     and shield, runs to a random direction, and escapes certain death.
     (See also PANIC)

     4.85  Save
     ----------
     "Store  your  player's  statistics to  disk  frequently!"  is the most
     important thing a DM could say to users with call-waiting.  You should
     also use this  command  immediately after  training.   All attributes,
     statistics,  and conditions  of your  player  character are written to
     disk and  the message  "Player File Updated"  displayed  (or something
     similiar according to your  dndbbs  version). If you have call-waiting
     and your carrier is lost from another call  then your player character
     will reflect the last time your file was updated.
     (See also STORE)











DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 40

     4.0  COMMANDS (cont.)
     =============

     4.86  Search
     ------------
     There will  occasionally be hidden or  invisible objects in the rooms.
     Typing SEARCH will  display the invisible objects.  This will not show
     any hidden objects.  That is the difference between the two types. One
     can be  Searched for,  the other cannot.  Normally hidden  objects are
     hinted at by the room description or some clue  is given to its where-
     abouts in  Mail or in  another room  description.  Type  SEARCH and if
     there are  any invisible  objects then  the  message "You find object-
     name [invisible]" or else your will see "You find nothing.." or search
     a container by typing SEARCH CONTAINER (with the container name).

     4.87  Sell
     ----------
     The Pawn Shoppe is  where you  can sell your  treasure for  Gold.  The
     Pawn Fence  is a  level  15  monster  with  20,000  hits  and   32,767
     experience.  This may  seem too much but  the role-monsters have to be
     powerful so the average user won't kill them.  They are also protected
     from non-magic. Of course the DM can Edit these monsters.
     (See also PAWN)

     4.88  Shield
     ------------
     The  shield command  is a defensive attack mode. To shield yourself is
     to place your weapon in front of  your shield with your shield  in the
     other hand.  The shielding effect  decreases hits from  the  currently
     attacked monster --  you must  have attacked a monster first. You must
     also be holding a shield for this to work.

     4.89  Smash
     -----------
     Your player  will encounter locked portals  which he cannot open.  Try
     the Smash command, for example, SMASH DOOR. Your Strength is the major
     factor  involved when determining if  the portal breaks open. Complete
     information  about  which portals  can be  smashed and  picklocked  is
     listed in the Break command.  When you smash a portal you will see one
     of two messages: "You smash it open!" or "You didn't smash it open!"
     (See also BREAK)

     4.90  South
     -----------
     Typing "S"  moves your character south to another room.  Each new room
     you enter contains its  own  encounter rate  (normally 5)  and its own
     health refresh rate (normally 3)  although  these values can be edited
     to the action file. The default rates are configurable. The rate means
     it  updates some values  every number of  rounds  (or action prompts).
     The health rate updates Fatigue, Vitality, and Magic Points.  Vitality
     is decreased if your  player is poisoned.   The encounter rate  checks
     for monsters from the room's monsters class every number of rounds.

     4.91  Southeast
     ---------------
     Type "SE" or Southeast and you move southeast.  The direction commands
     can  all be shortened to  one or two letters.  You can also use the GO
     command with the direction after it to move. For example: GO SE






DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 41

     4.0  COMMANDS (cont.)
     =============

     4.92  Southwest
     ---------------
     Type "SW" or  Southwest to move southwest.  The direction commands can
     be used while operating a vehicle with the Ride command.  For example:
     RIDE SW.  When you attempt to mvoe in a  particular direction the room
     actions are  checked for level restrictions.  This way your player can
     be prevented from entering areas until you reach a certain level.

     4.93  Stop
     ----------
     This is yet  another Quit  command. Type STOP and  the game session is
     discontinued until your next call.  Your player's file is  updated. At
     this time the  Fence  checks your bank balance  for accrued  interest.
     If you  stayed on  past midnight  then it is  compounded by 6 percent.
     The interest is also checked during a Save command and logon.
     (See also BYE, END, QUIT)

     4.94  Store
     -----------
     The store command interrupts the game to save the player's character
     to disk. The USERS file is updated with the player status. Anybody
     who has call-waiting should use this command frequently so that his
     character data is not lost if the connection is broken.
     (See also SAVE)

     4.95  Strike
     ------------
     The Strike command is another compatible command equal to Kill.  Enter
     STRIKE followed by the monster name to attack. Parameters like monster
     name, treasure name, and  object name, added to a command instruct the
     system what to act on.  For example,  Take and Drop use parameters. So
     do Kill  and Examine.  Most of the names used for parameters are known
     to the  system  as 'identifiers' meaning  they  are one  word names to
     describe the actual  displayable name.  There may be A Shortsword, and
     A Two-Handed Sword.  Do not type in "GET TWO-HANDED SWORD" because the
     identifier in both cases is "SWORD".
     (See also ATTACK, HIT, KILL)

     4.96  Suicide
     -------------
     Player death is something each character tries to avoid.  So why would
     we want to suicicde our character?  One good reason is low statistics.
     Maybe your Piety or Constitution is below 8 and every time you die you
     never  get  resurrected.  Maybe your  Charisma is  so  low that  every
     monster you  encounter attacks you on sight.  Whatever the reason, bad
     statistics or you are tired of  your player,  the Suicide command will
     delete your user record and log you off the system.  When you  suicide
     your player the following messages will be displayed:

     Your character falls into a deep sleep..
     The Ghods take your player to another world..










DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 42

     4.0  COMMANDS (cont.)
     =============

     4.97  Take
     ----------
     Most objects  you find in the  adventure will be  either permanent  or
     be some treasure you find from killing a monster. There may, at times,
     according  to  how your DM  has the  system set up,  be  miscellaneous
     treasure placed  in some rooms to be discovered.  These items might or
     might not be found on monsters.  Or they may  be unique  items such as
     A Staff of Disintegration or A Wand of Seven Wishes. Whatever the case
     may be you will have a need to take  treasure so you can sell it later
     to the Fence or use it in combat.
     (See also GET)

     4.98  Talk
     ----------
     This command  allows you  to talk to monsters.  Type TALK MONSTER, for
     example, TALK FIREBAT.  If the monster number matchs  the action  file
     monster number, and it is activated, there could be several responses.
     Besides attacking or text  messages the monster could  teleport you or
     worse! You might meet some permanent monster like a Monster Zombie and
     you try to talk to the monster. Suddenly you see the message "You have
     been teleported elsewhere!" you are now in a new room.
     (See also PARLEY)

     4.99  Thrust
     ------------
     This is a  combat  command.  To  thrust is to  lunge forward with your
     weapon in front of you.  Doing this is similiar to Charge  but without
     stepping forward.  Type THRUST MONSTER with the monster name after the
     command. Thrusting does more damage than Kill (the bonus multiplier is
     set to triple damage). Beware that the  monster's  return  attack will
     hit you for more damage after a Thrust.

     4.100  Time
     -----------
     The time is displayed in the format: 88 Jan 1, 12:00 am
     Year first, month next, day and time of day. The next line displayed:
     You have been on for xx minutes and xx seconds.
     This is the amount of time you have been online since carrier connect.
     You have xx minutes remaining.
     The amount of time before your call is terminated.

     4.101  Top
     ----------
     The top ten  users according to Level are displayed with this command.
     First the user file is scanned  for users above level 1 and written to
     a sort work file. The file is sorted and the top ten output.  Then the
     sort file deleted. Each name is shown with Level and Classname.  Users
     who have their mailboxes locked are not output in the Top command. The
     top ten also includes a point ranking based on his total kills, level,
     gold and experience, and other factors.  The highest point ranking you
     can attain is *infinity* (double precision overflow beyond 10*10^308).










DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 43

     4.0  COMMANDS (cont.)
     =============

     4.102  Train
     ------------
     Training is one  important part  of the dndbbs. For your player to get
     to the next level of expertise he  must reduce his experience  to zero
     by  killing monsters and  train at his assigned training area.  Mostly
     the Fighters,  Paladins,  and Druids train in the Fighter's Arena. The
     Magic  Users  train in the  Mages Guild.  The  Clerics in the Clerical
     Sanctuary. The Thieves in the Thieves Guild.  Rangers have some hidden
     spot to  train somewhere in a park or  the woods.  All these  training
     areas should be  near the start room  or in the Castle.  Once you have
     found your  area,  type  TRAIN  and the  message  "After many weeks of
     training and meditation.." and information is displayed. Your player's
     statistics are incremented for Fat, Vit, and Mag and the Level by one.

     4.103  Turn
     -----------
     Only Clerics  can use the  Turn  command.   Its  purpose is to destroy
     undead monsters such as Zombies and Ghouls. Type TURN MONSTER with the
     monster name. Either the message "That's not undead!", "Didn't work!",
     or  "You damned the monster!"  will be shown  (similiar messages could
     appear according to your version number).  If the Turn  was successful
     then the monster will die and you will gain the experience.

     4.104  Unlock
     -------------
     Some doors must  be unlocked (and opened)  before you  can enter them.
     Sometimes you may run across a door which requires a key number.  Your
     inventory is searched for the matching key number. If one is not found
     you  will be unable  to unlock it.  You should then  consider Smash or
     Picklock. The key you are holding will have five digits in the number.
     Any one of these digits being zero (0) will match ALL lock numbers for
     the digit.  For example,  the lock is keyed number 38881  and your key
     number is 30881 then your key would open lock numbers 31881, 32881, to
     to 39881.

     4.105  Up
     ---------
     The  Up  direction should  be  used in  conditions  such as mountains,
     hills, or walls.  Normally objects travel up such as ladders or stair-
     cases.  The  DM could also  configure  the room  description with text
     indicating that  you see a  staircase. The direction Up  could then be
     used instead of creating an object (staircase).

     4.106  Use
     ----------
     Magic  items will  only discharge a  spell with the Use  command.  The
     command forms are:  "USE ITEM",  "USE ITEM MONSTER",  "USE ITEM ITEM".
     A magic  item can  contain  cure,  offense,  teleport,  wish or  other
     spells.  Every time you use a magic item its  charges are  decremented
     until zero.  Then it  becomes discharged and  must be recharged by the
     Wizard or a Magic User. The first command form discharged a magic item
     spell on  the player.  The second  form  discharges on a monster.  The
     third  discharges on another item.  In the  third  case the first item
     must be an enchant  device  and the  second item  must be an  empty or
     discharged magic item.






DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 44

     4.0  COMMANDS (cont.)
     =============

     4.107  Users
     ------------
     Listing of all players in the  dndbbs  can be obtained with the  Users
     command. Each user file record is output if the user has not suicided,
     or locked  his  mailbox.  Type USERS and the message   "Hit [SPACE] to
     stop.." will be displayed followed by the user codenames, levels,  and
     classname.

     4.108  Wear
     -----------
     Your player character can hold a weapon,  hold a shield, and wear some
     armor all at once. Type WEAR ARMOR and the message "Ok" will output if
     you have  that treasure  in your inventory.  The armor and shield plus
     combine  to your Fatigue (shown in the information command).  They are
     subtracted from  the monster hits  during combat.  Armor  has  strikes
     which are decremented  for  each successful  hit until  zero then they
     crumble. After that the armor must be repaired by the Weapons Master.

     4.109  West
     -----------
     Travel occurs in one  of the four compass  directions (N, E, S, W) and
     Up (or Climb),  Down,  and Out (or Exit, Leave).  You  will use  these
     directions  and the  Enter  command to  get  to any  room in the game.
     If the room does not have  any links  then  teleportation is required.
     One of the  main system features  is the rooms where you can adventure
     into and find unknown realms.

     4.110  Wield
     ------------
     In order to  cause more damage to  monsters in  combat you must find a
     weapon such as  A Sword,  or A Battle-Axe.   Use the  Wield command to
     ready  your weapon for battle.  For example,  WIELD SWORD.  The weapon
     plus is  directly added  to your  Strength  (seen in  the  information
     command) and  used in the attack formulas. Each  time your weapon hits
     the monster its strikes are decreased by one.
     (See also DRAW, HOLD)

























DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 45

     5.0  DM COMMANDS
     ================

     The Dungeon Master (DM) orchestrates the entire campaign.  His purpose
     is to  insure a well-balanced game,  to promote the adventure,  and to
     guide the players through  their sessions.  He will find that the most
     useful tool is the Mail area.  His other tools are the  Assistant DMs.
     They  help develope the  rooms and assist in the Mail area.  No DM can
     handle the entire  system alone unless that DM is  very skilled in all
     the forms of  communication, supervision, and responsibility.  Besides
     the  Mail area DMs have  their own set of commands.  Each one of these
     commands is preceded  by an  asterick "*" (or splat).  These  commands
     include file  editing and various utilities.  It is a good idea to get
     familiar  with these commands.  Experiment  with them  until you  have
     complete control of the adventure.

                             Console Function Keys
                                +-------------+
                                |  F1  |  F2  |
                                |*EDIT |*CONF |
                                +-------------+
                                |  F3  |  F4  |
                                |*DIS  |*NM   |
                                +-------------+
                                |  F5  |  F6  |
                                |*CALL |*KILL |
                                +-------------+
                                |  F7  |  F8  |
                                |*TELE |*INV  |
                                +-------------+
                                |  F9  |  F0  |
                                |*DROP |*LINK |
                                +-------------+

     The Sysop  will see  these keys  listed on the 25th  status line.  The
     status  line can  be  toggled to  User Information with the [ESC] key.
     The User information will look similiar to the following:

     GANDALF THE WIZARD            MU  Fat 25 Vit 30 Mag 45 Psi 5 lvl:5 255

     From left to right the status is:  Codename, Classname, statistics for
     fatigue, vitality, magic,  and psionics.  The character's  level might
     not be displayed depending on the length of  the other stats.  And the
     room number. 

     When the user status line is not displayed the sysop function keys are
     displayed for F1 to F0. The  Home key initiates  chat mode.  Press the
     escape  key to exit chat  mode when  you are  done.  And the  End  key
     terminates the user session. It effectively saves the user record file
     and hangs up the phone for the next user.














DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 46

     5.0  DM COMMANDS
     ================

     5.1  *EDIT
     ----------
     The Editor combines addition,  change,  listing,  and printing  of all
     dndbbs files.  Editing includes  objects, treasure,  spells, monsters,
     users, actions, and events. Editing can be done in remote, console, or
     interactive mode (while a user is on-line).  The Sysop can press F1 at
     the console to initiate Edit Mode.  Typing "*EDIT <room number>"  will
     allow you to edit  the room description  of that room number.  You can
     edit  short and  long  descriptions.

     You  can enter  the editor remotely  if you  are a  DM  with the *edit
     command.  At the console the sysop can  enter from the  opening screen
     by pressing F4,  or from the game if he is a DM  by pressing F1  or by
     typing *edit. The entire editor is menu driven.  It is basically self-
     explanatory.  Future revisions of this documentation will include more
     information for *edit.

     5.2  *STATUS
     ------------
     The DM Status command prints a memory usage chart. Four lines are
     displayed:

     Free Dynamic Data and Array Space(Heap in Bytes): xxxxxx
     Free Data Segment and String Space(Bytes): xxxxx
     Free Stack Space: xxxx
     Total Free Memory(K): xxx

     The dynamic space is all existing memory left  by DOS after the dndbbs
     boots up.  It is  used for numeric  arrays reallocated  by the program
     when playing  (for monsters, inventory, and room treasure). This gives
     literally  hundreds of kilobytes  for  dndbbs  to use  when the player
     encounters more monsters than the program can handle. The data segment
     and string space is the fixed  amount of variables and strings used by
     dndbbs. This amount gets smaller as the program is modified and grows.
     The stack is primarily for storing referneces to subroutine  calls and
     recursive routines.  The equation parser is a  recursive routine.

     5.3  *DISCARD
     -------------
     This DM command is used to remove an unwanted  object from the room of
     from the user's inventory.   For example,  you are editing  an object,
     then  you exit *EDIT and see that the object has a mistake.  You could
     pick it up and  type *DISCARD OBJECT  (with the  correct object name).
     You will see the  message "Ok" and  "It was discarded.."   Or  maybe a
     player has a weapon which would throw off the game balance.  Something
     like a +99 Sword.  You could press F3 and enter  the treasure name. It
     will  be discarded from  his inventory  without informing the user.














DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 47

     5.0  DM COMMANDS (cont.)
     ================

     5.4  *NM
     --------
     NM stands for  Number of Monsters.  This DM command reduces the number
     of monsters in the room.  It can be used in  local mode or interactive
     mode.  Typing *NM 0 will remove  all monsters from the  room.  This DM
     command was  installed for  DMs who did  not want a  bunch of monsters
     attacking them while they moved  from *EDIT to game and  room to room.
     The number of monsters can only  be reduced,  not incremented.  If you
     type a number greater than  the number of monsters in the room it will
     be ignored.

     5.5  *CALL
     ----------
     This  DM command  calls up  any  particular  monster  or one  from the
     current monster class. Type *CALL without parameters calls up a random
     monster  from  the current  room.  Typing  *CALL xxx  with the monster
     number calls up  that monster.  If the  room does not enough space for
     the additional monster then the arrays will be  expanded into the heap
     and you will see the message "You encounter a ...".

     5.6  *KILL
     ----------
     *KILL was also installed for DMs who did not want unnecessary monsters
     in  the room.  Additionaly it was installed to  allow a DM to kill any
     monster instantly to check for proper treasure and  to generally debug
     the system.  Typing *KILL and the monster name, for example, *KILL RAT
     will  loose  forth a thunderbolt from  the sky and  destroy the  named
     monster. This can be used interactively also.

     5.7  *TELEPORT
     --------------
     Users can be  teleported to any room with  this DM command while  they
     are on-line. It  can also be  used by  remote DMs and  local Sysops to
     get them  to any  room instantly.   Type  *TELEPORT xxx  with the room
     number, or hit the F7 key.  Any monster  that was in the room you left
     may teleport with you.

     5.8  *INVISIBLE
     ---------------
     Another DM utility command  which  developed into a game command. Most
     DM commands were installed for  *EDIT reasons but  became useful later
     on in the campaign.  Type  *INVISIBLE  or  hit F8 and  your player  or
     the user on-line will become  invisible (as stated in the  information
     command) and  completely  invulnerable to  all  monster  attacks.  For
     normal players invisibility only lasts until the end of the call. Then
     it is set back to regular.















DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 48

     5.0  DM COMMANDS (cont.)
     ================

     5.9  *DROP
     ----------
     The *DROP command causes one item from the  object or treasure file to
     fall from the sky (as if a Ghod had thrown it down).  This can be used
     by DMs  to  drop doors  and such  for the  room file or  to give users
     treasure.  Type *DROP ITEM  with the  correct item name.  If found the
     following messages are displayed.

     A Bolt Of Lightning Strikes...
        An Object Falls From The Sky...

     This routine is also used by the Wish spell. The restrictions are that
     the player cannot wish for another Wish item or a container.

     5.10  *LINK
     -----------
     This  DM  command allows  you to  change or  add room  links.  You are
     prompted if  you want  to "R" remove or "A" add a room link.  Next you
     are asked  for the room number  from and to.  Then if you want to link
     back.  For example, you need to link north and south  between rooms 23
     and 24.  You would  type "A" to add a link,  enter 23,  enter 24,  the
     direction (one letter) "N" for north, then enter "Y" to link back.

     5.11  *ABORT
     ------------
     The abort  command stops all processing,  closes all files,  and quits
     the program.  To restart you must type  DNDBBS at the DOS prompt.  The
     command was installed as an option to rebooting.

     5.12  *DEBUG
     ------------
     This command toggles the  error messaging  off and on.  Runtime errors
     are normally printed to the DNDBBS.ERR file for later inspection.  The
     DEBUG toggle will allow these to be printed to the console during game
     play so the author can determine exactly when the error occurs.  DEBUG
     can also be specified on the command line. For example:
     DNDBBS 1 LOCAL DEBUG
























DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 49

     5.0  DM COMMANDS (cont.)
     ================

     5.13  *CONFIG
     -------------
     The Configuration  command is  a  useful  tool  for  customizing  your
     adventure.  Enter "*CONFIG" and  you will be  brought  to the  Dndcnfg
     program screen:

          Logon Variables                       Command Variables
          Processing Variables                  Modem Variables
          File Variables                        Custom Equations
          Rooms Variables                       Quit Configure

     Type  Control-D to  load the config default values.  The defaults  are
     stored in the dndcnfg program.  Rooms default to proper values for the
     data files,  weapons shoppe  list is set to 25 items  (the first 25 in
     the treasure list), custom equations set to default, etc. When dndcnfg
     first loads, all values are zero/null. You must load load the defaults
     or a config file (explained next).

     Type Control-R  to read an  already-existing config file.  You will be
     prompted to enter a node number or press enter for no node number. The
     node number  is used to name  the actual config file, i.e.  DNDBBS.CFG
     for no node (for running local, or a standalone BBS),  or DNDBBS1.CFG,
     DNDBBS2.CFG, etc. (for multipartition systems, or DOORs to RBBS, etc.)

     Type Control-W to write the config file.  Again,  you will be prompted
     for the node number or to press enter.  Remember, the file will not be
     written to  disk if you just  exit dndcnfg!  Dndcnfg writes the config
     file in  the  default directory,  or  the directory pointed to by  the
     environment string DNDBBS (see SYSOP.DOC for further details).

     From the main dndcnfg screen choose  the config option with the cursor
     keypad and  select it with the  enter screen.  The parameters for that
     selection will be  displayed on a new screen  and a prompt on the last
     line asking for your selection.  Type in the option number,  then fill
     in the  next prompt for the data for  that option.  The screen will be
     updated to  the new values.  When you are done with that screen, press
     an empty return to exit to the main screen.
























DNDBBS(TM) V2.6b DOCUMENTATION (C) COPYRIGHT 1988,1989 ERIK J. OREDSON Page 50

     5.0  DM COMMANDS (cont.)
     ================

     5.14  Custom Equations
     ----------------------
     Configuration allows  you the maximum flexibility  by allowing  you to
     enter custom equations to modify  and  balance your game play.  Page 7
     of config has  almost a dozen  of the program's internal equations and
     formulas.  Some of these configure  options are formulas.  An equation
     is interpreted as having a resulting value of true or false. To return
     this value,   the equation parser  must see an equality  symbol in the
     equation  (an <, >, or =).  This  separates  formulas  from equations.
     Formulas  evaluate to a  resulting  positive value  above zero.   Both
     equations and  formulas can contain the  following additional  symbols
     (-, +, *, /, ^). They may also contain any number value, real, integer
     or unary operator (for example: 350 or 1.244 or -23).   Further,  they
     can  also contain variables which  are replaced by the  program values
     for such things  as vitality, monster's hits, etc.  The variables are:

     STR  -  Strength                   WP1  -  Blunt Proficiency
     INT  -  Intelligence               WP2  -  Pole Proficienecy
     WIS  -  Wisdom                     WP3  -  Sharp Proficiency
     DEX  -  Dexterity                  WP4  -  Thrusting Proficiency
     CON  -  Constitution               MHP  -  Monster Hit Points
     PIE  -  Piety                      MLVL -  Monster Level
     CHA  -  Charisma                   MEXP -  Monster Experience
     FAT  -  Fatigue                    XX   -  Bonus Multiplier
     VIT  -  Vitality                   RND  -  Random Number from 0 to 1
     MAG  -  Magic Points               LF   -  User Level
     EXP  -  Experience                 XP   -  User Experience
     LVL  -  Level                      FT   -  User Fatigue
     WE   -  Weapon Plus                VT   -  User Vitality
     AR   -  Armor Plus                 MG   -  User Magic Points
     SH   -  Shield Plus                ST   -  User Strength
     RG   -  Ring Plus                  IN   -  User Intelligence
     BR   -  Brief Flag                 WI   -  User Wisdom
     WT   -  Weight of Inventory        DX   -  User Dexterity
     GD   -  Gold Amount                CO   -  User Constitution
     PSIA -  Psionic attack level       PI   -  User Piety
     PSID -  Psionic defense level      CH   -  User Charisma
     MPSI -  Monster psi attack level                                    

     The  statistics in the right column  labeled as "User..." are used for
     user  fights  only.   Their values are  active for determining the hit
     points for  an offline  user encountered in user fights.  These values
     cannot be used with  any certainty in any  other case except  the user
     fight hit points formula.  The two variables labeled as "flags" return
     a value of either 0 or -1.  The usefulness of these values in formulas
     or equations could be  used in a multiplier,  such as:
     20*(INV<0)
     this would  return a  value of 0 if the user is not invisible or 20 if
     the user is invisible. Do not use this flag any other way in a formula
     for attack routines  because the resulting value  would be negative or
     zero  and the  user would never hit  the monster.


                   ========== END OF DOCUMENTATION =========

```
{% endraw %}

## NOTICE.DOC

{% raw %}
```
DNDBBS(TM)2.6b COPYRIGHT NOTICES (C)Copyright 1988, 1989 Erik J. Oredson

FREEWARE COPYRIGHT NOTICE
-------------------------
This is public domain software. It IS supported by the author and is NOT
charged a fee for use. All rights to distribute the software are hereby
granted to all users with these three conditions:
1)You do not remove the copyrights, copyright screens, or notices.
2)You do not charge money for dndbbs.
3)You do not distribute modified versions of dndbbs.

DISCLAIMER OF RESPONSIBILITY
----------------------------
In the following text "dndbbs" and "dndbbs system" refers to the dungeons and
dragons bulletin board system, its data files, its utilities, and "author"
refers to Erik Jon Oredson.

For the protection of the dndbbs and its author this notice is effective
immediately.

Dndbbs and its author shall not be responsible for any harmful effects or
misuse of the dndbbs system. All software is offerred "AS IS" without
warranty of merchantability or fitness for any specific purpose.

All users who operate the dndbbs system do hereby consent to be bound by
the terms contained herein and assume all risks of whatever nature or kind
that may arise through the use or misuse of the dndbbs system.

If you have previously registered for the dndbbs, but feel that you do not
wish to be bound by these conditions, please let the author know through a
comment to the author and you may voluntarily have your name removed from
the dndbbs list of registered users.

You are under no obligation to use the dndbbs system. If you are at any time
dissatisfied with the dndbbs system or its author, you may discontinue using
the dndbbs system.

All registration monies sent to the author of the dndbbs system are subject
to return without registering your name into the list of registered users or
sending you any software of any kind. Any registration may be revoked at any
time without sending you any software of any kind. No registration monies
will be returned once they are cashed for any reason.

                  ========== END OF DOCUMENTATION ==========

```
{% endraw %}

## SYSOP.DOC

{% raw %}
```
DNDBBS(TM)2.6b   SYSOP DOCUMENTATION -- INSTALLATION AND SETUP  (08/01/89)

HARDWARE REQUIREMENTS
---------------------
The Adventure system requires you to have an IBM (or compatible) PC, XT, AT
with DOS 3.0 or higher, Serial port and Hayes Smartmodem. A minimum of 384K
is needed and an 80 column monitor. A fixed disk drive is highly recommended.

FILE DISTRIBUTION
-----------------
The Adventure System (version 2.1) is distributed by PC-SIG on disk 1131.
If you are installing dndbbs onto a dual drive floppy system place the
distribution diskette number one in drive A: and type INSTALL F. If you are
installing dndbbs onto a hard disk drive system place the two distribution
disks into drives A: and B: and type INSTALL H.

The Adventure System is also distributed to Bulletin Board Systems in three
files called DND26B-1.ZIP, DND26B-2.ZIP, and DND26B-3.ZIP. You must use
PKUNZIP.EXE to unzip these files.

MODEM SWITCH SETTINGS
---------------------
The Hayes modem switch settings must be set similiar to the following:

                       Switch           12345678
                       Setting          UUDDDUUD

Switch setting number 5 being the most important. It must be set to the
down position so the modem does not automatically answer the phone. Instead, 
dndbbs will tell the modem to answer the phone on the first ring with the
Hayes modem command ATA. Dndbbs configures serial ports for 300, 1200, 2400 or
9600 baud at no parity, 8 data bits, 1 stop bit by reading in the Hayes
connect string which is CONNECT and the baud rate (i.e. CONNECT 300).

FOSSIL DEVICE DRIVER NOT REQUIRED!!
--------------------
Fossil is a generic driver which contains code for screen functions, keyboard
functions, and most important, communications routines. Dndbbs can access
these comm routines for its modem input and output, initializing, and xon/xoff
and rts/cts flow control. Normally all you need to do is put the statement
DEVICE=X00.SYS in your CONFIG.SYS file and boot up to install the driver.
This will operate comm port number 1. If you are running port 2, or even 8
ports, fossil will take care of them. X00.SYS does not need to be installed
if you are running dndbbs in the local mode. The default configuration is
NOT to load fossil support. This option in config modem variables can be
toggled on for fido and opus systems.

The fossil driver is available for downloading on most BBSes as X00_109C.ZIP
or X00V111B.ZIP or whatever they have named it.

RECORD LOCKING WITH SHARE
-------------------------
A requirement of operating dndbbs in multiple partitions is to use SHARE.EXE
This program is located on your DOS disk. Install it by placing the program
in your boot root directory and adding the statement SHARE to your AUTOEXEC
batch file. Dndbbs will not run properly without share installed. If you
operate several partitions (i.e. doubledos) without share, then you run the
risk of having FAT or disk sectors scrambled. Share intercepts the DOS calls
to file accesses and compares them to an internal table of locked records.
This allows dndbbs to be fully compatible with multiple partitions.

CONSOLE ANSI SUPPORT
--------------------
Dndbbs sends color code changes directly to the ANSI.SYS device driver. This
is done by calling an assembly program distributed with the source called
SCRN.ASM (compiled with MASM as SCRN.OBJ). The ANSI driver is found on your
DOS disk. Install it by placing the program on your boot root directory and
add the statement DEVICE=ANSI.SYS in the file CONFIG.SYS and reboot.
Desqview users type DVANSI.COM in the dndbbs partition before running dnd.

COMPILING AND LINKING WITH QUICKBASIC 4.5
-----------------------------------------
The MICROSOFT QUICKBASIC Version 4.5 allows the separate compilation of
program modules so the 64K restriction is broken. Each source code module
occupies its own 64K segment in memory. This way programs can grow to the
maximum of 640K. The data segment is 64K and shared by all source code
modules. The dndbbs opening screen will display the number of bytes free
in the BASIC data segment. QB 4.5 DOES require a DTR compiler patch!
QuickBASIC also allows memory to be allocated to the heap which is an area
of RAM beyond the program data segment and code segment. When fixed strings
and numeric arrays are redimensioned they are allocated to extra hundreds
of K of RAM in the heap. This allows full use of all memory by dndbbs.

To compile the source programs type the following: (or use the batch programs)

BC DNDBBS/O/S/X;
BC DNDSUB1/O/S/X;
BC DNDSUB2/O/S/X;

/X to error trap and resume to next or same statement.
/O so the program will run without the runtime files.
/S to write strings to the disk without overflowing the compiler memory.

To link the object modules type:

LINK LOVR+DNDBBS+(DNDSUB1)+(DNDSUB2)+SCRN+IO,DNDBBS,,QB.LIB/E;

/E to reduce executable filesize and make it load faster

LOVR.OBJ is an overlay manager which reduces memory requirements by loading
object files linked into the .exe program when they are needed. The
parentheis around the object files informs link to overlay those files.

QB.LIB is a Quick BASIC 4.5 library which contains precompiled code supporting
the CALL INTERRUPT statement. This is used to support the FOSSIL driver and
the DOS function calls. BCOM45.LIB is the default library also used to link
into dndbbs for the /O switch on the compiler command line.

The assembly program SCRN.ASM provided with the source can be compiled with
the Macro Assembler 5.0. This file is a generic screen driver which provides
special cases of scrolling before line 25 used by BASIC for the status line,
and has routines to save and restore the cursor when displaying the status
line.

The IO.OBJ object file contains precompiled input/output routines for modem
communications. LOVR won't overlay the io routines when they are in separate
object modules.

Compile Batch programs are distributed with the source in DND26A-4.ZIP. If you
have the following files in your dndbbs directory you can compile the source
with a batch program:

*.BAS, *.INC,
LOVR.OBJ, IO.OBJ, SCRN.OBJ, MASM.EXE, QB.EXE, LINK.EXE, BCOM45.LIB, QB.LIB

COMMAND LINE OPTIONS
--------------------
The command line options are parameters you type type after the command
DNDBBS at the DOS prompt. If there are any parameters at all, the first must
be the node number. All command line options must be separated by a space.
The other two optional parameters are LOCAL and DEBUG. For example:

DNDBBS 1
DNDBBS 1 LOCAL
DNDBBS LOCAL DEBUG
DNDBBS 1 DEBUG
DNDBBS 1 LOCAL DEBUG

There are two extra command line options to the dndbbs command. They toggle
printer and disk session logging. For disk logging the session is logged to
the file DNDBBSx.LOG (where x is the node number). The command switch for
disk logging is /L and the command switch for printer logging is /P. They
must be the last options on the dndbbs command. For example:

DNDBBS LOCAL /L /P

The disk and printer toggles are displayed on the opening screen in yellow
just below the dndbbs header and date. These options can also be toggled
from within the opening menu by pressing ALT-L for disk logging and ALT-P
for printer logging. They can also be toggled at any time during the program
when a remote user is online. The status line will be updated with the word
PRT and LOG in the last half of the user name in the status line when toggled
on. The statusline can be toggled from user statistics to the interactive
sysop function keys with the escape key.

RUNNING DNDBBS AS A SINGLE USER PROGRAM
---------------------------------------
To run the adventure at your computer without a modem or serial port type
DNDBBS LOCAL and you will be able to enter the program from your keyboard.
This way you do not require to run as a bulletin board service, or need to
have a modem, or have the fossil driver installed.

PROBLEMS
--------
The modem does not answer the phone. This is probably because the modem is
not initializing correctly. Try rebooting and then running the program. Or
go into basica and type OPEN "I",1,"COM1:300,N,8,1":PRINT #1,"ATZ"+CHR$(13)
Also try initializing the modem with another communications program. If none
of these work then your modem does not support the Hayes command set. When
you boot dndbbs the copyright screen is displayed for five seconds, fossil
is initialized, then the opening screen appears. The status indicator will
show the message "Waiting for Calls" if the modem has initialized correctly.

If the status indicator shows "Reset Timeout" or "Init Timeout" this means
the modem has not sent the string "OK" back to dndbbs and the modem may not
have initialized properly. In this case dndbbs continues normally.

The modem must send the string RING so the dndbbs knows when to tell the
modem to answer the phone. Dndbbs will send the modem command ATA to pick
the phone off hook and initiate carrier.

CONFIGURATION PROBLEMS
----------------------
1) The program does not read the configuration file.
   Delete all .CFG files and start over with DNDCNFG. Dndcnfg loads
   zero into all config values. Load your .CFG file with control-r or
   load default values with control-d in dndcnfg.
2) The configuration is always default.
   You have not written a new one out to disk. Make sure you use the
   control-w command before exiting config. Or the .cfg is file is from an
   old version (see step 3).
3) When installing a new version of dndbbs, the config structure may have
   changed. Delete all old .cfg files and rebuild from scratch in dndcnfg.

DNDBBS(TM)2.6b   SYSOP DOCUMENTATION -- CONFIGURING AND SETUP  (08/01/89)

SETUP INSTRUCTIONS
------------------
This text file assumes you are installing dndbbs into a fixed disk system, and
that your computer is an MS-DOS compatible, or 100% IBM compatible clone. This
software does not support other machines which claim to run IBM programs (such
as an atari or amiga with IBM emulators) because the source code is written for
MS-DOS bios and function calls, and uses ANSI escape sequences for IBM.

Create a subdirectory on your fixed disk unit and copy the dndbbs .ZIPs or
files (if you have already unzipped them). Dndbbs looks for files in various
DOS directories depending on your configuration. 

CONFIGURING INSTRUCTIONS
------------------------
This section is primarily text on creating and maintaining the configure file
for dndbbs. The program will look for this file in the default directory it is
booted from. If the configure file is not found then the program uses its own
internal default values.

Start the configure program by changing to its DOS directory and typing:

DNDCNFG  (optionally, dndcnfg can be loaded while in dndbbs by typing
          *config, or function key 3 from the opening screen.)

You will be presented with a color screen containing eight options:

        Logon Variables                         Command Variables
        Processing Variables                    Modem Variables
        File Variables                          Custom Equations
        Rooms Variables                         Quit Configure

And a selection on the bottom line:

Cursor Select  -|> Enter Choice
^d Load Config Defaults  ^w Write Config  ^r Read Config

At this point you can select one of eight options with the cursor keypad,
and the enter key. The screen will clear with the parameters which can be
configured for that option.

To select the option for loading configuration files or defaults, and to
write the configure file, type control-r or control-d and control-w. The ^
symbol is short for the control key, then the letter at the same time.

The critical operating parameters are the datapath to the .DAT, the datapath
to the .DOC files, the datapath to the temporary work directory (or a RAM
disk), and datapath to the DOOR information file. These are in the file
variables screen. The modem variables contains the door path and type.

When you have entered the critical options, write the configuration out to the
DNDBBS.CFG file. Note: if you are running dndbbs as a door you must use a Node
Number. The node number is used for the configuration filename. For node 1 the
file created is DNDBBS1.CFG for node 2 it is DNDBBS2.CFG, etc. You will be
prompted for the node number, or to press enter for no node number. The plain
configuration file DNDBBS.CFG is read by LOCAL mode (i.e. when the sysop runs
the program from DOS or boots as a standalone BBS.)

Once you have written a configuration file to disk, you can run dndbbs as a
local program with the command DNDBBS LOCAL, or run it in BBS mode with the
command dndbbs. In this mode the program takes control of the modem and
answers it for incoming calls. The status indicator in the opening screen
shows the activity of the modem before the caller gets connected. Dndbbs will
answer at speeds up to 9600 baud. Your modem must be 100% Hayes compatible and
support the entire Hayes command set. Here is a sample of the dndbbs to modem
conversation while in BBS mode:

From dndbbs to modem:
ATZ
From modem to dndbbs
OK     (status indicator will display "Reset OK")
From dndbbs to modem:
ATQ1E0S0=0S2=255     (or some similiar modem intialization code)
From modem to dndbbs:
OK     (status indicator will display "Init OK")
(Now dndbbs should show the status "Waiting for Call")
From modem to dndbbs:
RING   (text string sent by the modem when the phone rings)
From dndbbs to modem:
ATA
From modem to dndbbs:
CONNECT 1200  (or connect 2400 or 9600)
(at this point if dndbbs has not detected a carrier signal within 30
seconds then it hangs up the modem DTR signal and recycles)

FURTHER CONFIGURING FOR COMMUNICATIONS PORTS
--------------------------------------------
For sysops using multinode systems, networks, or multitasking applications,
you may need to configure dndbbs for a specific communication port number
besides the default of COM1. Config modem variables screen allows you to
set the port to any other number from 1 to 8 (The fossil device driver
can access up to 8 ports on an AT). In order to do this you must modify
the command line on the device=x00.sys in config.sys. Read x00.doc for
further information. If you do not have fossil loaded then you have to
specify the serial port address for ports above 2. The default for port 1
is 3f8 and for port 2 is 2f8. They must be entered in hexidecimal.

DOOR INFORMATION AND NODES
--------------------------
To run dndbbs as a DOOR place the node number after the dndbbs command
(example: DNDBBS 1). To specify the node parameter from a Batch file use
DNDBBS %1 for the first replacement parameter. Select the option in dndcnfg
for the DOOR type. There are three options, RBBS, OPUS and PCBOARD. They read
DORINFOx.DEF, LASTUSEx.BBS and PCBOARD.SYS respectively. The RBBS door
information contains the communications port. OPUS may be running as a
multiple node setup or as a single partition with no node numbers. In the last
case, dndbbs will first look for LASTUSEx.BBS then look for LASTUSER.BBS
regardless of which node is specified. Select the dndcnfg option for the
pathname where the DOOR information file is to be found. dndcnfg will add the
trailing \ if you forget it, for example: C:\OPUS\ Select the dndcnfg option
for the communications port. COM1 through COM8 are the available ports.

Here is a sample batch file to call dndbbs from rbbs:
CD\DND26
DNDBBS %1
CD\RBBS

For futher rbbs batch file programming read the rbbs docuemnation. There are
many involved batch routines for files RBBS.BAT, RCTTY.BAT, and RBBSTM.BAT.
Rbbs uses the file MENU5 to look for the keyword to boot the batch file.
I.E. In MENU5 you must have the batch file name in uppercase surrounded by
spaces so rbbs can find it. Then rbbs attaches .BAT to this string and
checks the disk for the filename. For example, MENU5 could look like this:

                             RBBS DOORS MENU SYSTEM
 
Type in one of the following door options to run:
 
DND - The Adventure System
DND500 - DnD 500 Sectors

SYSTEM ENVIRONMENT
------------------
An environment string is a system variable locally known to DOS and the
program DOS executes. Basically you place an environment string into the DOS
system variable space with the SET command. Dndbbs will recognize these strings
and use them for disk access. There are five environment strings for dndbbs:
Place the strings into the DOS environment with SET command. For example:

SET DNDBBS=C:\DND26\
SET DNDDAT=C:\DND26\DAT\
SET DNDDOC=C:\DND26\DOC\
SET DNDTEMP=C:\DND26\TEMP\
SET DNDDOOR=C:\RBBS172B\

The PATH command can also be included to point to your dndbbs executable
directory. Say the path C:\RBBS\DND\ is the actual directory you have the
files on your disk. With this feature you could also place the path to look
for DNDBBS.EXE to boot up from any drive at any time by combining the
environment strings with the PATH command. For example:

PATH=C:\RBBS\DND\

Now, with the path command, and all set commands, dndbbs will boot up from
anywhere in your computer. Note: The environment strings set for DOS will
over-ride all configuration pathname options. Make sure to place a trailing
"\" after the SET statements. Dndbbs will put them there if you forget.

FILES USED
----------
A well organized dndbbs system would make full use of the datapath options.
The disk drive structure could look something like this:

C:\            C:\DND26                    C:\DND26\DAT
CONFIG.SYS     DND*.EXE        ROOMS.DAT     WELCOME.DAT  BANK.HLP
AUTOEXEC.BAT   DNDBBSx.CFG     OBJECTS.DAT   NOTICE.DAT   CASINO.HLP
X00.SYS        PLAYER.LOG      TREASURE.DAT  PRELOG.DAT   MAIL.HLP
SHARE.EXE      DNDBBS.ERR      MONSTERS.DAT  LOGOFF.DAT   MAILEDIT.HLP
ANSI.SYS       DNDBBS.DAY      MONCLASS.DAT  PRIMESS.DAT  *.CTN
               DNDBBSx.LOG     MONTALK.DAT   PRITABLE.DAT
               DNDRANK.DAT     SPELL.DAT     PUBMESS.DAT
                                             PUBTABLE.DAT

C:\DND26\DOC   C:\DND26\TEMP               C:\DND26\SOURCE
DNDBBS.DOC     DNDEXITx.DAT    *.BAS *.INC *.BAT *.OBJ *.MAP *.BAK
README.1ST     NODEWRKx.DA?    QB.LIB MASM.EXE BC.EXE BCOM45.LIB LINK.EXE
README.NOW     (or RAM disk)
X00.DOC
DND-MODS.DOC
SYSOP.DOC

DOOR INFORMATION FILE STRUCTURES
--------------------------------
The following DOOR files have all been verified to work:

Door option 1-RBBS(17.1-2) 13 lines ascii text

ZIPPIT RBBS                  (bbs name)
ERIK                         (bbs sysop first name)
OREDSON                      (bbs sysop last name)
COM1                         (comm port used, COM0 for RBBS local sysop)
9600 BAUD,N,8,1              (baud rate and parameters string)
 0                           (not documented)
SYSOP                        ("SYSOP" for local access, otherwise the user's
                              first name, and this line last name)
MPLS, MN.                    (users city state)
 2                           (not documented)
 100                         (the user level)
 359                         (user time left)
 0                           (not documented)

Door option 2-OPUS(1.03b) random record, binary stuff. Dndbbs reads bytes
165 and 166 as a packed integer with cvi (basic convert two byte string to
integer) which is the baud rate. This door has been verified to work on
1.03b and it most likely works on other OPUS versions.

Door option 3-PCBOARD(12.0) random file 128 bytes. DND reads byte 11, 12, 13,
14 as one 4 byte ascii text string containing the baud rate or "loca".
Converted to uppercase.

Door option 4-pcboard(14.0) random file 128 bytes. DND reads byte 14, 15, 16,
17, and 18 as one 5 byte ascii text string containing the baud rate for the
comm port. Bytes 19, 20, 21, 22 and 23 contain the word "Local" converted to
uppercase for local sysop logon.

BCOM45.LIB DTR Patch
--------------------
Much to my dismay I discovered the QB4.5 DOES require a DTR patch. Here is
the text to apply the patch.

Before beginning, make sure you have backup copies of BCOM45.LIB.

With Debug in a DOS path, type:

 debug

Type:

 n=bcom45.lib
 l

Type:

 s cs:0 ffff b0 00 e3 01

Debug should show:

 xxxx:1529

where xxxx can be any number depending upon where Debug loaded the program
into memory.  In any case, the number is not important.

Type:

 u 1529

Debug should show:

 MOV   AL,00
 JCXZ  152E
 INC   AX
 ADD   DX,+04
 OUT   DX,AL

This is where QB graciously resets the comm port to parameters it thinks the
comm port should have.

To fix the problem, Type:

 a 1529

 mov   al,01
 [Enter]
 (then hit control-c to exit entry)

 a 152d

 nop
 [Enter]
 (then hit control-c to exit entry)
 where [Enter] is the Enter key (do not type the characters)!

To verify that you typed everything correctly, Type:

 u 1529

Debug should show:

 MOV   AL,01
 JCXZ  152E
 NOP
 ADD   DX,+04
 OUT   DX,AL

To save the corrections Type:

 w

Debug should show:

Writing 35EF7 bytes

Now type Q and you are finished patching BCOM45.LIB

                  ========== END OF DOCUMENTATION ==========

```
{% endraw %}

## FILE1676.TXT

{% raw %}
```
Disk No: 1676                                                           
Disk Title: DNDBBS 2 of 2 (1131 also)                                   
PC-SIG Version: S2                                                      
                                                                        
Program Title: DNDBBS                                                   
Author Version: 2.6B                                                    
Author Registration: $15.00                                             
Special Requirements: 384K RAM and a modem.                             
                                                                        
DUNGEONS AND DRAGONS BULLETIN BOARD SYSTEM creates an entire new world  
on your computer and lets people call in through a modem and play DNDBBS
via the telephone lines.                                                
                                                                        
DNDBBS can operate by itself on the modem, as a part of another         
bulletin board system, or as a single-user game on the computer.        
Instructions are included for making this program an on-line game in a  
door of an RBBS.  DNDBBS already has a world created for people to      
play in, but the system is expandable.  You, as dungeon master, can edit
and create more scenarios, rooms, treasures, and monsters, just like the
game itself.                                                            
                                                                        
Players who call in enter their name and password, and if calling for   
the first time they can create their own character.  Character classes  
include fighter, magic user, cleric, thief, ranger, paladin, druid, and 
dungeon master (you, of course).  Assistant dungeon masters are allowed 
to help you manage the system.  Before players begin the adventure, some
welcome and notice files are displayed on the screen to introduce the   
game.  Players can then explore, kill monsters, cast spells, find       
treasure, etc.  When a player character dies, he is resurrected by the  
high priests in the clerical sanctuary, and can then enter the adventure
again, but with decreased character abilities.  As dungeon master, you  
are given some additional powers, such as the ability to teleport any   
player to any room while the user is on-line, edit or delete users, make
a player invisible (thus invulnerable to all monster attacks), and      
configure log-on and general system parameters for the game.            
                                                                        
DNDBBS not only makes it much easier to manage and play a fantasy role- 
playing game, but also can be an extension of your own imagination.     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
DNDBBS V2.6B DISKETTE NUMBER TWO CONTAINS THE FOLLOWING FILES:
DNDDAT.ZIP   THE DNDBBS DATA FILES
DNDDOC.ZIP   THE DNDBBS DOCUMENTATION
```
{% endraw %}

## GO.TXT

{% raw %}
```


╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk No 1676 DNDBBS disk 2 of 2 (1131 also)  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install DNDBBS type INSTALL (press enter)                            ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1676

     Volume in drive A has no label
     Directory of A:\

    DNDDAT   ZIP     43054   9-01-89   4:53p
    DNDDOC   ZIP     60758   9-01-89   4:51p
    FILE1676 TXT      3257   2-13-90   4:20p
    FILES    TXT       140   9-01-89   4:55p
    GO       BAT        38   9-01-88   3:28p
    GO       TXT       544   1-01-80   7:40a
            6 file(s)     107791 bytes
                           50176 bytes free
