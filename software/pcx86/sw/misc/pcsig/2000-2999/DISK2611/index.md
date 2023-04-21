---
layout: page
title: "PC-SIG Diskette Library (Disk #2611)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2611/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2611"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## COMLIST.TXT

{% raw %}
```
                             FALLTHRU COMMAND LIST

DIRECTIONAL COMMANDS:
   NORTH(n)  NORTHEAST(ne)  EAST(e)  SOUTHEAST(se)  SOUTH(s) SOUTHWEST(sw)
   WEST(w) NORTHWEST(nw) UP(u) DOWN(d)
   BACK(b)     reverses current direction.
   FORWARD(f)  continues current direction.
   ENTER(ent)  used ONLY if direction to entrance is not specified.
   REPEAT(r)   toggle; on causes directional command to repeat 10 times.

MATERIAL HANDLING COMMANDS:
   TAKE(tk)(pick up)<all><quantifier><object(s)> {eg: take sword 5 lbs food}
   DROP(dp)(put down)<all><quantifier><object(s)>{eg: drop coat and diamond}
   MOVE(mv)FROM(fr)<container,hand,here>TO<container,hand,here><quantifier>
       <object(s)>  {eg: mv fr here to sack knife flint c01}
   FILL<container>with<substance> {eg: fill canteen with water}
   EMPTY<container>      {eg: empty pack}
   GATHER(collect)<number><item>: gather rocks or wood. {eg: gather 5 rocks}

Note: containers are identified by serial numbers - ie: c01 = canteen c01.
      quantifiers are pound(lb), ounce(oz), quart(qt), pint, and stick.

ATTACK COMMANDS:
   SHOOT(sh)<arrow>at<target> {eg: shoot arrow at devi}
   SLING<rock>at<target>  {eg: sling rock at renegade}
   THROW<object>at<target>: rocks, knives, maces, axes,spears, etc.
      {eg: throw knife at demon}
   FIGHT(attack)(kill): one word - used to fight warrior, renegade, demon, etc.
   STEAL: one word - takes most valuable object when successful.
   YIELD<surrender>: one word - allows surrender to an honorable warrior
   AGREE<yes>: one word - agrees to pay tribute to a victorious warrior
   RUN(retreat): one word - flees a hopeless battle

MARKET COMMANDS:
   BUY<number><quantifier><object>  {eg: buy 5 lbs food and canteen}
   SELL<number><quantifier><object>  {eg: sell 40 sticks of wood}
   TRADE<object>: used to barter where money is not the unit of exchange.

INFORMATION COMMANDS:
   INFO <subject>: {eg: info or'gn; info rabir; info sword; etc}
   INVENTORY(i): lists all items in a participant's immediate possession.
   READ(look at)<sign,notice,list,object>
   LOOK IN or ON<container>: burros must be specified by name and
    containers by serial number.
   LOOK HERE(hr): describes current location.
   HELLO(hi): talk to warriors, peasants, storekeepers, etc.

MISCELLANEOUS COMMANDS:
   EAT(t)<number>  {eg: eat 5 - causes consumption of 5 lbs of food}
   DRINK(k)<number> {eg: k 2 - causes consumption of 2 pints of water}
   REST(z)<number>: rest for a number of minutes, default is 60.
   DIG:  a hole in appropriate locations, requires shovel.
   HUNT(h): locates game animals if any are present.
   PREPARE(skin)<number><animal,melon>: convert dead animals and melons
     to food {eg prepare 3 melon}.
   LIGHT(l)<lamp,fire>
   EXTINGUISH(x)<lamp,fire>
   APPLY: salve to a wound(can be applied during a fight).
   ORDER<meal,number<food>>: at inn order food to eat on premises or to
     take with you.
   WHERE<is><place>: obtain location information from a weyring.
   LEVEL: displays current fight experience level of participant.
   UNLOCK(open)<door,gate,grating,etc.>
   TURN<valve>
   CUT<chains,ropes,bindings,etc.>
   RESET: resets odometer to zero.

OPERATING COMMANDS:
   HELP(p): calls this file while game is running.
   SAVE: saves current postion to disk in default drive.
   RESTORE: restores the last saved position; current postion is lost.
   REDO: repeats current player's turn.
   QUIT(q): leaves the game; call save first to retain current position.
   PQ: allows one person to quit game without affecting the others.
   PI: allows one player to become inactive; can later return to the game.
```
{% endraw %}

## FILE2611.TXT

{% raw %}
```
Disk No: 2611                                                           
Disk Title: FallThru  2 of 2 (#1389 also)                               
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: FallThru                                                 
Author Version: 2.0                                                     
Author Registration: $10.00.                                            
Special Requirements: 300K RAM and two floppy drives.                   
                                                                        
You and up to two other players stand only half a chance of making it   
home alive in this text adventure, called FALLTHRU!                     
                                                                        
You don't know how you got to this strange place, but you quickly       
discover that Faland is very large, comprising millions of square miles 
(all visitable) of farms, rangeland, forests, deserts, mountains, etc.  
Much of it is inhabited by dangerous wild animals, renegades,           
warriors, and demons.                                                   
                                                                        
You and your fellow players must find your way through the trackless    
wilderness, while quickly learning to recognize friend and foe, earning 
a living, and defending yourself by fist and weapon.  And along the way 
you must gather information and solve various riddles and puzzles by    
talking to shop keepers, strangers, warriors, inn keepers, etc., and by 
exploring the many settlements, dark and treacherous caverns,           
catacombs, mines, castles and ruins scattered throughout this vast      
territory.                                                              
                                                                        
FALLTHRU recognizes several hundred words by which you can set your     
course, pick up objects, buy and sell things, fight, hunt, shoot, and   
speak to the odd characters you and your companions will meet as you try
to go home!  Age level: 12 to adult.                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INTRO.TXT

{% raw %}
```
                                 INTRODUCTION

                   FALLTHRU: A COMPUTER SIMULATED ADVENTURE
                                 Version 2.00
                  -------------------------------------------
                   This is user supported software.  If you
                   enjoy the game please register by sending
                   $10.00 (along with version number) to:
                               Paul H. Deal
                               P.O.B. 1398
                               Moriarty, N.M. 87035
                   Registered owners are entitled to a
                   strategy document (described below)
                  -------------------------------------------

                            GENERAL INFORMATION

    Fallthru includes the following files:
                                    Group I
        FALLTHRU.EXE - Main program file.
        VPET.EXE     - Menu program from which program files may be run.
        GO.BAT       - Batch file permitting GO command to call VPET.EXE.
        SSS.SSS      - SSS files are used to save the current game posi-
        SSS.SSL        tion for continuation at a later playing session
                       or for the RESTORE function during game operation.
                                   Group II
        FALLTHRU.OVR - Overlay file required by the main program.
        INTRO.TXT    - Introductory instructions(ASCII format).
        COMLIST.TXT  - Brief list of commands(ASCII format).
        INFO1.FT2    - Information file used by main program.
        INFO2.FT2    - Information file used by main program.
        PAMPHLET.TXT - Information file used by main program(ASCII format).
        VIEWDOC.EXE  - Browse program for viewing ASCII files.
        PRNDOC.EXE   - Print program to print ASCII files.

    Fallthru is programmed to run on an IBM-PC or compatible running MS-DOS
    2.1 or higher. If your system uses two 360K floppy diskettes, the Group
    I files should be placed together on the diskette in drive A, the Group
    II files together on a diskette in drive B.  If a hard drive or high
    capacity floppy drive is available, all the files in both groups should
    be placed together in a common directory. Approximately 300K of RAM
    should be available to play the game.  If enough RAM is available for a
    virtual disk, placing the group II files on the virtual disk will
    significantly improve performance and reduce disk accesses.  The
    virtual disk should carry drive designation B, C, or D.

                               STRATEGY DOCUMENT

    For registered owners a strategy document is available.  In this
    document a more detailed description of Faland can be found along with
    hints for solving many of the riddles, puzzles, and challenges in the
    game.  There are an almost unlimited number of possible solutions and
    it should prove most interesting to attempt the game first, without
    resort to the hints.  This game is intended for the serious player, but
    no previous experience is necessary.  Playing time can be MANY hours.
    Note, also, that each time a new game is started many of its elements
    will differ from any previous games!

    Whether or not you are a registered owner, your comments would be
    appreciated.  They may be sent to the address at the beginning of this
    document.  Thank you for trying this software and best wishes for a
    successful journey through Faland.

                                 INSTRUCTIONS

    The goal of Fallthru is to find your way 'home'.  A competition may be
    agreed upon by players in advance, with possible objectives being to
    see who gets home first or who acquires the most wealth or the greatest
    'strength'.  But the game is principally intended to be cooperative.
    Each player may seek different sub goals which can assist all in
    getting home.  There is no formal scoring because the accumulation of
    'points' would be largely meaningless in the context of the simulation.
    However, if a player is 'killed' and elects to continue with a new
    life, the number of 'lives' used is recorded and displayed at the end
    of the game.  This number can serve as an informal score with the
    object being to keep this number as low as possible.  The use of the
    'REDO' or 'RESTORE' commands during play will also have the effect of
    using a 'life'.  It should be noted that if more than one player is
    involved, the use of 'RESTORE' will cause all players to return to the
    last saved position.  As a consequence, the circumstances under which
    the command 'RESTORE' is permitted must be agreed upon by all players.
    The total cumulative playing time for each player is also recorded and
    displayed at the end of the game.

    In Fallthru, information is presented in the form of text messages. The
    player reads the message and responds by typing an appropriate command.
    Commands are in English and, for the most part, are intuitive. A
    complete list of all commands and how they are used is available by
    typing 'help' or 'p' at any time.  Items which are carried 'in hand'
    during play are considered to be on the player's immediate person as
    opposed to being in a pack, sack or other container.  When an item is
    'in hand' it is either in use or immediately useable.  For example,
    armor in hand is being worn and the strongest weapon in hand will
    automatically be used in a fight.

    Note the following special commands:
    SAVE:  saves the current game position to disk (the game can be
       restarted from the saved position at any time).
    QUIT or Q: quits the game (call SAVE first if you wish to continue
       the game at a later time).
    PQ: when there is more than one player this command allows a player
       to quit the game without affecting the other players (the player
       will not be able to return to the game at a later time).
    PI: where there is more than one player this command allows a player
       to become inactive (the player can return to the game at a later
       time).
    RESTORE:  allows restarting the game from the most recently saved
      position without first quitting (affects position of all players).
    REDO:  allows redoing the current turn (affects only the current
      player).

    During game operation this display appears at the top of the screen:

    ----------------------------------------------------------------------
    Someone:          OD 4.2s       DAYLIGHT    3:00   DAY 12:MORNING

    STATUS
    hunger:  7
    thirst:  6
    fatique: 5
    injury:  8   wild
    ----------------------------------------------------------------------

    The upper left corner shows the current player.  OD is an odometer
    showing the direction and distance moved since the last reset or change
    of direction. The rest of line one gives the ambient light conditions,
    time, and number of Faland days since the game started. Commands are
    entered on the second line. Below the command line, on the left, is the
    status display. Values of eight are nominal; values above four are
    safe; below four the player needs to take appropriate action. To the
    right of the status display certain flags appear when appropriate.
    These are, for the most part, self explanatory.  For example, 'wild'
    indicates that the player is in a wilderness area. Below the display
    the rest of the screen is used for general messages.

    To play successfully, you will need to gather much information.  Make a
    map and keep track of your location at all times.  Use the 'info'
    command liberally, especially early in the game.  It provides details
    on many aspects of Faland. Use the 'hello' command (a single word
    command) to speak to peasants, storekeepers, warriors, etc.  as often
    as possible.  Always read signs and notices.

    And now, let the game begin!

                                  GOOD LUCK!
```
{% endraw %}

## PAMPHLET.TXT

{% raw %}
```
                       WHAT YOU SHOULD KNOW ABOUT FALAND

               This document is addressed to newcomers to Faland.  Please
    be assured, foreigners are welcome here.  However, if you are here
    involuntarily, we will understand your desire to try to find your way
    back home. Whether you are seeking a way home or would like to stay and
    make a new home here, it is hoped that the following information will
    be of value to you.

               The territory of Faland is comprised of several million
    square legons, one legon being the distance King Mordat of the Ancients
    was able to walk in 1000 paces while traveling on a good road over level
    ground.  Most of the territory is sparsely inhabited with the bulk of
    the population living in and around five farm settlements. It is in the
    most northeasterly of these, Or'gn, where most foreigners gain entry
    into Faland and where this pamphlet is available.

               The farmland is a relatively safe region except on starlit
    nights (the moon lights the night sky in cycles of 15 nights followed
    by 15 nights when stars alone light the way). Outside the farmlands
    dangerous animals abound and place at serious risk the weak and ill
    prepared. The climate of Faland is mild, with 24 hour days divided into
    three 8 hour periods in the local time-keeping tradition. Most people
    dress lightly, the typical attire consisting of sirkeln and mokads,
    which are supplied to all foreigners. The male sirkeln is little more
    than a loin cloth and belt with pockets and attachments where a few
    essentials can be carried. The female sirkeln includes a light blouse.
    Mokads are light weight, calf-length boots.  Sirkeln and mokads are of
    such durability that they never need to be replaced.

               The roads and pathways of Faland are well traveled,
    particularly in the farmlands.  The peasants are largely benign.
    However, in all areas of Faland you may be challenged by warriors, most
    of whom are members of a warrior's guild and obey strict rules of
    honor.  You may speak with, fight, yield to, or run from these
    individuals.  In some cases, outside the settled farm areas, you may be
    attacked by renegade warriors. You will need to defend yourself
    against these or will be forced to run from them. In the dark regions
    of Faland (i.e. in caves, dungeons, mines, etc) there are a number of
    'demons'. These are semi-intelligent creatures that are always
    dangerous and will usually attack without warning.  If you enter such
    regions BE PREPARED!

               Supplies, including food, water, tools, weapons, etc. are
    available at most settlements. Or'gn has the most complete selection
    but certain specialty items can only be obtained in other places. The
    rall is the basic unit of exchange and is minted as a one ounce gold
    coin.  The em, worth 0.01 ralls, is a one ounce silver coin used in
    making change.  These coins can be exchanged for goods at the markets
    and in a few other places.  You can also sell goods at the markets.

               As a foreigner, you are given the status of warrior and are
    treated accordingly.  You cannot own property or run a fixed business.
    You are, neverthless, expected to make a living through your own
    efforts. You can buy and sell goods and can, if you choose, do quite
    well as a hunter. Some merchandise (i.e. wood, sand, and oil) are
    available as natural resources and can be claimed by anyone finding
    them.  It is also possible to find and salvage various items of
    treasure (principally religious ikons of stone, bronze, silver, or gold
    and various items of jewelry).  Treasure becomes the property of the
    finder and can be disposed of as the owner sees fit.  You may also gain
    wealth as a fighter, winning tribute in battle with honorable warriors
    or taking money from renegades.

               If you want to find your way back home, you cannot do so
    from a position of weakness.  Strength is gained only through accepting
    the challenge of warriors and prevailing in the resulting combat.  The
    wise fighter knows when to refuse a challenge, when to accept, and when
    to yield if the fight goes badly.  Be advised, before accepting a
    challenge, you should always have money to pay tribute if you lose.

               You can survive and prosper here if you keep your eyes and
    ears open.  Examine interesting items, read notices, talk to peasants,
    shopkeepers, and warriors, work diligently and fight effectively; do
    these things and you will find life here pleasant and your stay
    productive.  Good luck and may your life be long and successful!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2611

     Volume in drive A has no label
     Directory of A:\

    FALLTHRU OVR     96845   6-26-90   7:50a
    VIEWDOC  EXE     10528  11-03-89   1:53p
    PRNDOC   EXE      7840   5-10-89   8:10a
    INTRO    TXT      8167   6-28-90   8:18a
    PAMPHLET TXT      4859   5-09-90   2:25p
    COMLIST  TXT      3716   6-25-90   8:38a
    INFO1    FT2     19116   5-03-90   9:46a
    INFO2    FT2     19764   5-10-90   7:37p
    FILE2611 TXT      2739   4-17-91   1:10p
            9 file(s)     173574 bytes
                          145408 bytes free
