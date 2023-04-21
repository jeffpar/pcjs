---
layout: page
title: "PC-SIG Diskette Library (Disk #2159)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2159/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2159"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE LAND 2 OF 2 (ALSO 2158)"

    A fantasy role-playing game based on the book "The Chronicles of Thomas
    Covenant."  Choose from six character classes, and explore towns,
    villages, and dungeons in search of treasure and magic.
    
    Buy and trade armor, weapons, food, or magic items from the townspeople,
    who sometimes have helpful hints about the game.  Mapping is simple in
    THE LAND since the program does it for you. As you search a town, a
    dungeon, or the outside world, an overhead view shows where you are,
    and how much is left to explore of that region.
    
    You can save your game at any time -- handy if you are about to do
    battle with a dragon, or Hydra.  Like Ultima and Questron this game will
    take you many hours to complete as your character gains experience and
    knowledge in the place called THE LAND.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2159.TXT

{% raw %}
```
Disk No: 2159                                                           
Disk Title: The Land 2 of 2 (also 2158)                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Land                                                 
Author Version: 2.2                                                     
Author Registration: $25.00                                             
Special Requirements: CGA, or EGA.                                      
                                                                        
THE LAND is a fantasy role-playing game based on the book "The          
Chronicles of Thomas Covenant". Choose from six character classes, and  
explore towns, villages, and dungeons in search of treasure and magic.  
                                                                        
Buy and trade armor, weapons, food, or magic items from the townspeople,
who sometimes have helpful hints about the game. Mapping is simple in  
THE LAND since the program does it for you. As you search a town, a     
dungeon, or the outside world, an overhead view shows where you are,    
and how much is left to explore of that region.                         
                                                                        
Playing THE LAND you can save your game at any time, or place, which    
comes in handy if your about to do battle with a dragon, or Hydra.      
Like Ultima, and Questron this game will take you many hours to complete
as your character gains experience and knowledge in a place called      
THE LAND.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.DOC

{% raw %}
```
THELAND.COM  - Main program file
THELAND.000   \
THELAND.001    \
THELAND.002     \
THELAND.003      - Overlay files
THELAND.004     /
THELAND.005    /
THELAND.006   /
THELAND.007  /
LAND.MAP     - Data file for upland map
REVELSTN.MAP - Data file for Revelstone map
STONDOWN.MAP - Data file for Stonedown map
WOODHELV.MAP - Data file for Woodhelvin map
THELAND.EGA  - EGA sprite file
THELAND.CGA  - CGA sprite file
GENERAL.DAT  - File containing general messages
LORE.DAT     - File containing lore scrolls
MONSTER.DAT  - File containing monster data
OBJECTS.DAT  - File containing objects data
SPELLS.DAT   - Data file containing spell information
SCORES.DAT   - File containing high scores
PDLAND.DOC   - Brief documentation file
MAKESCOR.COM - Program to reset/recreate SCORES.DAT file
```
{% endraw %}

## PDLAND.DOC

{% raw %}
```
                                    THE LAND
     
                                     V1.9
     
                                 By Mike Riley
     
     License:  The user of this program has a limited distribution license,
     This  allows  you  to  freely  copy  and  share this program with your
     friends as long as no  charge  or  fee  is  placed  on  this  program.
     Although  this  program  is  released  as  shareware  the  program and
     documentation are are copywrited by the author.
     
     Notice to software distribution houses:    This  program  may  NOT  be
     distributed  without  first  entering  a  licensing agreement with the
     author.
     
     You are encouraged to regester your copy of THE LAND with the  author,
     the  regestration  fee is $25.  For this regestration you will receive
     the latest version of THE LAND, The complete printed documentation, as
     well as future update notices.  For a $35 regestration you  will  also
     recieve the  books  "The chronicles of Thomas Covenant the Unbeliever"
     upon which this game is bases.
     
     If you have any questions concerning this  or  other  R.C.S.  programs
     write to:
     
        Riley Computer Services
        Mike Riley
        14062 Peardale road
        Grass Valley, CA  95945
     
     
     System Requirements:
       384k Ram minimum
       720k or 1.2m floppy drive or Hard Disk.
         A hard disk is recommended  for  play  since  this  program  makes     
         extensive use of overlays that operate slowly on floppy drives.

     And now to the game.
     This game is based on the trilogy  "The Chronicles of Thomas Covenant"
     written by Stephen R. Donaldson.  If you like fantasy type  reading  I
     strongly recomend you read this series of books.
     
     OBJECT: This game belongs to the Rouge Genre of games.  You  create  a
     character,  travel  the  lands  and dungeons in search of treasure and
     magic.  There is a main goal to this game that you will discover while
     you play.
     
     CHARACTER CLASSES:
     
     LORESRAAT
       This is about the  most  powerfull  in  the  game  but  the  hardest
     advancement.    This player can cast the most powerfull of spells, and
     use the most powerfull of artifacts.  This  character  also  has  good
     fighting ability.
     
     RHADHAMAERL
       This character is dedicated to the lore of stone and  therefore  can
     cast only the stone lore spells.  This class is mostly magic using and
     little fighting ability.  This class may at any time join  either  the
     LORESRAAT  or  the  WARWARD,  If  the player does this then he will no
     longer advance in Rhadhamaerl skill.
     
     LILIANRILL
       This character is dedicated to the lore of wood  and  therefore  can
     cast only the wood lore spells.  This class also is mostly magic using
     and therefore has little fighting ability.  This class also  may  join
     the  LORESRAAT or the WARWARD, If the player does this then he will no
     longer advance in Lilianrill skill.
     
     BLOODGUARD
       This class is of the Haruchai race.  This class is  immune  to  both
     sleep  and fear.  This class cannot use any weapon or armour.  Defense
     and attack are both very strong with this character class.  This class
     is  strictly  of  fighting  ability  and cannot use any magical items.

     Bloodguard automaticaly acquire a Ranyhyn  at  the  beginning  of  the
     game.
     
     RAMEN
       The Ramen are the tenders of the Ranyhyn (the great horses).   Ramen
     are strictly fighting characters and cannot use any armour or weapons.
     Ramen are immune to fear.  Ramen may not at any time ride any type  of
     mount.
     
     WARWARD
       The warward is your basic average fighter  class.    Any  weapon  or
     armour can be used, as well as lesser magical items, But no artifacts.
     
     GIANTS
       Giants are basically very strong characters and can hit  very  hard.
     Giants  cannot use any weapons or armour since they would be too small
     for them.  Magical items  may  also  not  be  used  by  giants  except
     potions.  Giants are immune to fire attacks and fear.
     
     
     SERVICE
       All characters have some vow or oath to follow,  This is followed by
     giving  a certain amount of time to their cause.  This service must be
     rendered, for if it is not  then  the  characters  abilities  will  be
     reduced.   The amount of service changes from class to class and level
     to level.  Basicly start with 6 months of service per year and  add  1
     month  every  five  levels.   The actual schedule of service is in the
     full documentation for the program.  The only class that does not have
     to  perform any service are the giants.  This service must be given at
     the players starting point.
     
     ITEMS:
     HURTLOAM - If this items is possesed by anyone who has any Rhadhamaerl
     skill, Hurtloam acts like a potion of healing.
     
     RILLINLURE - If this item is posses by anyone who has  any  Lilianrill
     skill then Rillinlure and be used like a potion of healing.
     
     GRAVELING - This item in the hands of Rhadhamaerl is used  to  produce
     light.
     
     LILIANRILL - This item in the hands  of  the  Lilianrill  is  used  to
     produce light.
     
     GILDENLODE - This item in the possesion of either giants or Lilianrill
     will allow water travel.
     
     ORCREST - This item allows Rhadhamaerl characters to cast their spells
     at half the mana cost.
     
     LOMILLIALOR - This item allows Lillianrill characters  to  cast  theri
     spells at half the normal mana cost.
     
     RANYHYN - If this is Y then the player has a Ranyhyn as his mount.
     
     
     Commands:
     
     > - Go down stairs
     < - Go up stairs
     i - Inventory
     I - Identify freindly characters
     r - Read scroll
     R - Show character record
     z - Zap a wand
     q - Quaff a potion
     e - Eat food
     u - Use an item
     a - Activate an artifact
     x - Quit and save
     Q - Quit no save
     s - Search
     o - Open door
     c - Close door
     g - Get an item
     f - Fire a bow
     m - Cast a spell
     t - Talk
     p - Show party
     j - Join another character to your party
     8 - move up
     2 - move down
     4 - move left
     6 - move right
     7 - move up and left
     9 - move up and right
     1 - move down and left
     3 - move down and right
     w - Say words of power
     l - Light a torch
     h - Healing using either Rillinlure or Hurtloam
     S - Land Service
     L - Show log of all messages seen
     ? - Shows command list
     H - Shows all icons
          
     A note about scrolls:
       Do not be alarmed if some scrolls that you try to read  show  up  as
     strange  characters.  These scrolls are beyond your characters ability
     to read them.  As your character increases  in  skill,  so  will  your
     ability to read scrolls.
     
     
     Restoring Saved games.
       To play a game that has been saved specify the  name  of  the  saved
     game on the command line. for instance:
      
        THELAND JUDY
        
        
     
     Two new command line options have been added:
       /C - This option converts save files from versions earlier than 1.6
            to work under the newer versions.  This option should be  used
            the first time you load your save file into the new version.
       /E - This option enables EGA graphics.
       
       Any command line options used should be placed after the saved game
     name.
     
     Note from the author:
       This brief documentation file leaves out  an  incredible  amount  of
     information  available  in  the  full  documentation.   It is strongly
     recommended that you register your copy of "The Land" so that you will
     recieve  the full documentation, as well as getting a free copy of the
     next release of the program.
                                                                                   
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2159

     Volume in drive A has no label
     Directory of A:\

    FILES    DOC       813   5-27-89   5:17a
    GENERAL  DAT      3888   2-14-89   9:18p
    LAND     MAP     10000   4-17-89   2:53a
    LORE     DAT      9963   5-31-89   7:29a
    MAKESCOR COM     11941   6-06-89  11:37p
    MONSTER  DAT      8022   5-31-89  11:51p
    OBJECTS  DAT      9271   5-31-89   7:24p
    PDLAND   DOC      8351   6-01-89   4:11a
    REVELSTN MAP     10000   1-01-80   1:17a
    SCORES   DAT       777   7-22-89   2:17a
    SPELLS   DAT      3724   5-31-89  12:51a
    THELAND  CGA      9676   6-12-89  12:11p
    THELAND  COM     23596   7-21-89   3:49a
    THELAND  EGA      9676   6-12-89  12:16p
    WOODHELV MAP     10000   1-01-80   1:51a
    STONDOWN MAP     10000   1-01-80  12:49a
    FILE2159 TXT      2220   4-25-90   1:43p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   4-25-90   1:57p
           19 file(s)     142727 bytes
                           12288 bytes free
