---
layout: page
title: "PC-SIG Diskette Library (Disk #1450)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1450/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1450"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE ADVENTURES OF CAPTAIN COMIC"

    THE ADVENTURES OF CAPTAIN COMIC is a fast-moving arcade game with high-
    quality color graphics.  The Captain's job, and you know he will accept
    it, is to recover three treasures of the planet Omsoc that were stolen
    and hidden on the remote world of Tambi.
    
    Along the way he must face many dangers, including: dive-bombing birds,
    bugs, fireballs, beachballs, spinners, glow globes, blind toads, killer
    bees, sparks, atoms, saucers, and the dreaded space pollen.
    
    But our hero is not one to go into battle unarmed.  He carries a blaster
    to blow away any meanies that attack, a shield to protect him from their
    touch (temporarily), and the uncanny ability to jump amazing distances.
    He also finds many items that can help in his mission: keys, lanterns,
    corkscrews, boots, and cans of Blastola Cola.
    
    If you decide to go adventuring with the Captain, all you need bring are
    quick reflexes, a good eye for detail and your ability to solve problems
    on the fly. Age level: 7-adult.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMIC.DOC

{% raw %}
```

 
                        The Adventures of Captain Comic
                                   Revision 3

 
     Introduction
     ------------

     This software is being distributed under the Shareware concept, where
     you as the user are allowed to use the program on a "trial" basis.
     If you enjoy playing Captain Comic, and continue to play, you are
     obligated to register yourself as a user with a $10 to $20 contribution.

     Registered users will be given access to the official Captain Comic
     question hotline (my home phone number), and will be the first in line
     to receive new Comic adventures.


        This product is copyrighted material, but may be re-distributed
                 by complying to these two simple restrictions:

        1. The program and graphics (including world maps) may not be
           distributed in any modified form.

        2. No form of compensation is be collected from the distribution
           of this program, including any disk handling costs or BBS
           file club fees.


    Questions and contributions can be sent to me at the following address:
                                Michael A. Denio
                              3106 Twinoaks Drive
                                Joliet, IL 60435


     For a more timely response to game hint type questions, please include
     a phone number and a schedule of times during which you may be reached.



     Revision History
     ----------------

     Revision 1  ( 5/01/88):
        - Original Software Release.

     Revision 2  (11/28/88):
        - Added definable keyboard option.
        - Keyboard definitions can be saved (KEYS.DEF) for future play.
        - High score file (COMIC.HGH) by can be deleted to "clear" high
          scores.
        - Several minor bug fixes.

     Revision 3  ( 2/20/89):
        - Revised player control.  Jumping in cramped areas is now more
          consistent with the "feel" of jumping in open areas.
        - Major bug fixes.  This version contains no known bugs.




 
                        The Adventures of Captain Comic
 
                                  Instructions
 
 
 
I.   Game Objective 
 
        You are Captain Comic, galactic hero.  Your mission is to 
        recover three treasures from the planet Omsoc, which have
        been stolen away and hidden on the remote planet of Tambi.
 
        Your task will not be easy, you will need to gather tools to 
        increase your fighting and defensive capability, navigate 
        dangerous terrain, and avoid or destroy a horde of deadly
        creatures.  It will take all of the Captain's skill and wit 
        to see the treasures returned to Omsoc. 
 
 
II.  Starting the Game 
 
        - This program requires an IBM PC, XT or AT and an EGA display 
          adapter with 256K of video memory.  The program will also
          function with the IBM PS2 line (not Model 30) using VGA.
 
        - Insert the Captain Comic Program Disk in your default disk 
          drive and type 'COMIC'. 
 
        - A text page will be displayed before the entire game loads.
          If you wish to define your own custom keyboard setup, press
          "K" here.  Pressing "Esc" will exit the game, and pressing any
          other key will continue game loading.

        - If you pressed "K" at the text page, you will now be in keyboard
          definition mode.  To define control, simply press the desired
          control keys as prompted.  When finished, you will be asked if you
          wish to save the setup to disk.  "Saved" setups are automatically
          loaded at the start of a new game.

        - When the game has finished loading, press any key to view the
          introduction screens.  After the introduction, the game will
          start.





 
III. Game Control 
 
    Left Arrow      - When pressed quickly, makes COMIC face from 
    (Move Left)       right to left.  When facing left, moves COMIC
                      to the left. 
 
    Right Arrow     - Operates the same as left arrow, but moves 
    (Move Right)      COMIC to the right.
 
    Space Bar       - Makes COMIC jump.  Jumping height is increased 
    (Jump)            by the length of time the space bar is depressed.
                      A certain amount of left/right directional 
                      control is available to COMIC while in the air 
                      by using the left/right movement keys. 
 
    Insert Key      - After COMIC has gathered at least 1 can of 
    (Fireball)        BLASTOLA COLA, this key will allow him to
                      fire.  Note that with the addition of every 
                      can of cola, COMIC can have one more fireball 
                      in the air simultaneously.  When he has all five
                      cans, COMIC's stream of bullets can reach across 
                      the entire playfield.  While the fire key is 
                      depressed, COMIC's weapon energy is decreased.
                      When the level of energy reaches zero, COMIC 
                      will no longer be able to fire. The weapon
                      energy level recharges when the fire button 
                      is released. 
 
    Alt             - When COMIC has possession of the DOOR KEY, this 
    (Open Door)       key is used to open doors.  To open a door and
                      pass through, position COMIC in front of the 
                      door and press Alt.  The door will slide open
                      and COMIC will disappear, finding himself 
                      elsewhere... 
 
    Caps Lock       - When COMIC has possession of the WAND, this 
    (Teleport)        key is used to teleport to another place on the
                      screen.  The teleportation is not random, and
                      when used properly, can allow COMIC to reach
                      places on the screen that are normally
                      inaccessible.
 
    Esc             - Used to Pause or Quit the game. 
 
    F1              - Turns sound ON 
 
    F2              - Turns sound OFF 



IV.  Game Rules 
 
        COMIC starts the game with 5 lives, and no objects in his 
        inventory.  COMIC uses two different types of energy during 
        battle, weapon energy and shield energy.  Weapon energy is 
        self-charging, and recharges when not in use.  Shield energy 
        can be recharged by picking up extra shields located on the 
        playfield. 
 
        When an enemy comes in contact with COMIC, the shield energy 
        is reduced.  After the shield energy reaches zero, any further 
        contact with an enemy creature will destroy COMIC.  COMIC can 
        also be killed by falling off the bottom of the playfield 
        area of the screen. 
 
        Points are earned by shooting enemy creatures, gathering 
        objects on the planet's surface, and for excess shield units 
        remaining after charging. 
 
        Extra lives are earned at every 50,000 points, by gathering 
        a shield while current shield energy is already at max, and 
        for every treasure collected. 
 
        The game will end after COMIC retrieves all three treasures 
        or when all spare lives are exhausted.  The treasures include 
        rare gems, a sack of rare coins and a jeweled crown. 
 
        The following tools can be found during COMIC's adventure on 
        Tambi: 
 
        SHIELD         - Restores COMIC's shield energy.  Points are 
                         scored for excess shield units. 
 
        BLASTOLA COLA  - Increased COMIC's firing ability.  Up to five 
                         cans of cola can be collected for a shot max 
                         of five fireballs in air simultaneously. 
 
        CORKSCREW      - Makes COMIC fire in a corkscrew type wave 
                         pattern.  This is very useful for destroying 
                         creatures which crawl on the ground below 
                         COMIC's normal line of fire. 
 
        DOOR KEY       - Allows COMIC to open doors found in various 
                         places on Tambi. 
 
        BOOTS          - Increases COMIC's maximum jumping distance. 
                         This is useful in reaching ledges which were 
                         previously too high to jump to. 



        LANTERN        - There are a few places on Tambi which will 
                         appear dark to COMIC without the aid of this 
                         device. 
 
        WAND           - This is certainly the most powerful tool to be 
                         found on Tambi.  Undoubtedly placed on Tambi 
                         by a powerful wizard, the wand gives its 
                         possessor to ability to teleport through walls 
                         and across voids. 
 
 


V. Setting Game Features

        When COMIC finishes his adventure on Tambi, he may record his
        score for posterity.  The file "COMIC.HGH" contains the game's
        ten top scores.  At some point, you may wish to clear these
        scores and start fresh.  This is accomplished by deleting the
        file "COMIC.HGH".

        Although saving your custom key setup is a very useful feature,
        you may wish to return to the default key setup as described in
        this document.  This is done by deleting the file "KEYS.DEF".




VI.  Hints
 
        - The Captain will have travel through 8 distinctly different 
          areas on Tambi.  The tools found and enemy difficulty varies 
          from place to place.  If one approach seems impossible, try 
          another.  Once you discover the best way to traverse on Tambi, 
          the Captain's job will be much easier. 
 
        - When the game starts, the Captain will have a very low offensive 
          capability, and thus firing should be restrained to short range. 
          As COMIC gains in offensive capability, the most effective way to 
          fire will be in short bursts by holding down the FIRE key.  COMIC 
          will not fire any faster by repeatedly pressing the FIRE key. 
 
        - As firing ability grows, try firing simultaneously while at the 
          start of the jump.  This will destroy most of the enemies that are 
          waiting in the wings. 
 
        - Learn where to jump.  Some of the gaps in the ground can be crossed 
          only by leaping, but there is a large number of places where COMIC 
          can cross by simply walking over the gap.  Unfortunately, this can 
          only be learned through trial and error.  As a general rule however, 
          for short gaps, COMIC can walk over a one step gap for every step 
          down his destination. 
 
        - Remember it possible to win.  More than that, its possible to win 
          without losing a single life. (It's just not easy.)



Solution to Level I : The Forest
--------------------------------

Objects to be found:  BLASTOLA COLA, SHIELD, KEY

Tactics:  First grab the cola, and start moving to the right.  You won't
          be able to shoot very well, so use firing for defense only.
          When you get to the right edge of the screen, the view will stop
          scrolling.  Keep walking and you'll move on to the next section.
          After getting the shield and the key, you want to exit on the
          SECOND door after the castle. Note that this is the door to the
          RIGHT of the door that is directly under the ledge where you
          found the key.  Press the ALT (Open Door) key when COMIC is
          positioned in front of the door.

```
{% endraw %}

## FILE1450.TXT

{% raw %}
```
Disk No: 1450
Program Title: THE ADVENTURES OF CAPT. COMIC: THE PLANET OF DEATH
PC-SIG version: 1

THE ADVENTURES OF CAPT.  COMIC is a fast-moving arcade game with
high-quality color graphics.  The Captain's job, and you know he will
accept it, is to recover three treasures from the planet Omsoc that were
stolen and hidden on the remote world of Tambi.

Along the way he must face many dangers, including: dive-bombing birds,
bugs, fireballs, beachballs, spinners, glow globes, blind toads, killer
bees, sparks, atoms, saucers and the dreaded space pollen.

But our hero is not one to go into battle unarmed.  He carries a blaster
to blow away any meanies that attack, a shield to protect him from their
touch (temporarily), and the uncanny ability to jump amazing distances.
He also finds many items which can help in his mission: keys, lanterns,
corkscrews, boots and cans of Blastola Cola.

If you decide to go adventuring with the Captain, all you need bring are
quick reflexes, a good eye for detail and your ability to solve problems
on the fly.  Age level: 7 to adult.

Synopsis: Fast moving arcade game with high-quality color graphics.
Many dangers challenge the Captain on his quest to recover three
treasures from a remote planet.

Usage:  Game/Arcade.

Special Requirements:  EGA card with 256K of video RAM.

How to Start:  Type GO (press enter)

Suggested Registration:  $10.00 to $20.00

File Descriptions:

???????  SHP  Picture data files (14 files).
COMIC    DOC  Program documentation.
COMIC    EXE  Main program.
???????  TT2  Picture data files (8 files).
???????  PT   Picture data files (24 files).
SYS???   EGA  EGA data files (6 files).

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1450

     Volume in drive A has no label
     Directory of A:\

    BALL     SHP       640   2-20-89
    BASE     TT2      8196   2-20-89
    BASE0    PT       1284   2-20-89
    BASE1    PT       1284   2-20-89
    BASE2    PT       1284   2-20-89
    BEE      SHP       960   2-20-89
    BIRD     SHP       960   2-20-89
    BIRD2    SHP       960   2-20-89
    BUG      SHP       480   2-20-89
    CASTLE   TT2     10244   2-20-89
    CASTLE0  PT       1284   2-20-89
    CASTLE1  PT       1284   2-20-89
    CASTLE2  PT       1284   2-20-89
    CAVE     TT2      4228   2-20-89
    CAVE0    PT       1284   2-20-89
    CAVE1    PT       1284   2-20-89
    CAVE2    PT       1284   2-20-89
    COMIC    DOC     11993   2-20-89
    COMIC    EXE     31815   2-20-89
    COMP     TT2      7172   2-20-89
    COMP0    PT       1284   2-20-89
    COMP1    PT       1284   2-20-89
    COMP2    PT       1284   2-20-89
    CUBE     SHP       640   2-20-89
    FB       SHP       480   2-20-89
    FILE1450 TXT      1812   6-02-89   1:02p
    FOREST   TT2     11140   2-20-89
    FOREST0  PT       1284   2-20-89
    FOREST1  PT       1284   2-20-89
    FOREST2  PT       1284   2-20-89
    FROG     SHP       480   2-20-89
    GLOBE    SHP       640   2-20-89
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-02-89  12:13p
    LAKE     TT2     10116   2-20-89
    LAKE0    PT       1284   2-20-89
    LAKE1    PT       1284   2-20-89
    LAKE2    PT       1284   2-20-89
    MANUAL   BAT       151   6-02-89  12:14p
    PAGE     COM       325   1-06-87   4:21p
    ROCK     SHP       640   2-20-89
    SAUCER   SHP       640   2-20-89
    SHED     TT2      4100   2-20-89
    SHED0    PT       1284   2-20-89
    SHED1    PT       1284   2-20-89
    SHED2    PT       1284   2-20-89
    SPACE    TT2     10372   2-20-89
    SPACE0   PT       1284   2-20-89
    SPACE1   PT       1284   2-20-89
    SPACE2   PT       1284   2-20-89
    STAR1    SHP       640   2-20-89
    STAR2    SHP       640   2-20-89
    STAR3    SHP       480   2-20-89
    SYS000   EGA     14530   2-20-89
    SYS001   EGA     14595   2-20-89
    SYS002   EGA     14010   2-20-89
    SYS003   EGA     16735   2-20-89
    SYS004   EGA     14936   2-20-89
    SYS005   EGA     11618   2-20-89
    VIEW     BAT        41   6-02-89  12:13p
           60 file(s)     238957 bytes
                           45056 bytes free
