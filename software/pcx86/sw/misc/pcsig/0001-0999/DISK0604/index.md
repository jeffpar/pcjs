---
layout: page
title: "PC-SIG Diskette Library (Disk #604)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0604/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0604"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LANDING PARTY"

    Captain!! The energy crystals that power our life-support systems are
    failing! We need to locate new ones before we all die!  You'll have to
    count on your crew, now. Let's hope you chose them well.
    
    Your favorite movie stars, historical figures, friends and relatives can
    become characters in this text adventure game if you choose them before
    you become captain.  You must then deal with an assortment of monsters
    from the planet's surface before you can get those energy crystals you
    need so desperately. LANDING PARTY is menu-driven for ease of play.
    Individual games are short and different each time.
    
    Hurry, Captain! The air... I... I can't breathe....
    
    On the same disk is a two player trivia tic-tac-toe game. Each player
    must answer a trivia question to mark a square.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES604.TXT

{% raw %}
```
-----------------------------------------------------------------------------
Disk No  604  LANDING PARTY                                           v1 DS2
-----------------------------------------------------------------------------
Landing Party is a different type of adventure game in that your favorite
movie stars, historical figures, friends and relatives can become characters
in this adventure.  Landing Party is menu driven and easy to play.  Individual
games are short and different each time.  This adventure is text based and has
no graphics.  As captain of a few crew members desperately seeking energy
crystals on a deserted plant, have fun!
 
------------- Landing Party (v1.0)
LP       EXE  Landing Party program, will from DOS directly
LPARTY   EXE  Menus & utilities for Landing Party
LPARTY   DAT  File of characters for Landing Party
LPARTY   DOC  Documentation for Landing Party game, about 6k
GO       BAT  Batch file for first instructions, type GO (enter)
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## LPARTY.DOC

{% raw %}
```
-----------------------------------------------------------------------------
----------------             LANDING PARTY                   ----------------
----------------  VERSION 1.1               BY RICK PITEL    ----------------

     LANDING PARTY is a different type of adventure game. Your favorite
     movie stars, historical figures, friends or relatives become
     characters in the adventure. It is non graphic and different each
     time. It is menu driven and easy to play.




     To begin playing, type in LPARTY and select "PLAY THE GAME" from the
     menu or type in LP to skip the initial menu.











     ----------------------------------------------------------------
                       GENERAL INSTRUCTIONS

     You are the captain of a research space ship with a crew of 30. The
     ship has run out of energy and you have used the last of it to
     transport yourself and 5 handpicked volunteers to the surface of a
     planet to obtain energy crystals to repower the ship.


     As you begin the game, a list of available crewmembers is printed on
     the screen, from which you are to pick 5.  Before you reach the
     crystal mines you will pass through a number of zones where you will
     encounter some sort of person or thing that you will have to deal with
     before moving on.

     If you reach the mines, you will be able to buy the crystals for 100
     interstellar credits. You start out with 300, so hopefully you'll have
     some left when you reach the mines.

     If you obtain the crystals you return to the ship a big hero --
     otherwise, the game ends when you die.




     --------------------------------------------------------------
     -------------- SOME OF THE FINE POINTS -----------------------

     Between encounters, the status of your landing party will be printed
     -each name along with their strength (full strength is 100%). If you
     have a doctor along, injuries are repaired 5% per turn and minor
     injuries don't even appear.  If one of the party has been affected by
     some type of insanity causing accident, they could behave
     unpredictably at any time.

     Just select from the menu during play (the function keys can be used).
     Usually there will be 4 choices:
                 1-OPEN FIRE
                 2-HAND TO HAND COMBAT
                 3-NEGOTIATE
                 4-RETREAT

     When trying to figure out what to do, consider the skills of the
     people on your landing party. It is always good to have people along
     who are good shots, good fighters, and good negotiators.




     ----------------------------------------------------------------
     ------------------- CHOICES OF THE CAPTAIN ---------------------
     1-OPEN FIRE: Blasting away at the enemy gives you first strike
     advantage but the enemy can generally be expected to shoot back. After
     the first volley you may have another oportunity to execute another
     command. It is not good practice to open fire if you've lost or traded
     away your guns.

     2-HAND TO HAND COMBAT: This is attempting to overpower the enemy with
     your physical strength. This results in the participants being wounded
     as opposed to "open fire" which leaves them dead.

     3-NEGOTIATE: Negotiation is generally the best first option because it
     might result in nobody getting killed. Often you will be requested to
     pick a negotiator, and who you pick may have an important bearing on
     the outcome.

     4-RETREAT: Sometimes the better part of valor may be to pick the
     chicken method. If you flee from an enemy that is armed, he might take
     a few shots at you and some creatures may pursue. In any event it is a
     step back instead of a step closer to the mines.





     ----------------------------------------------------------------
     --------------------- CHANGING CREW ----------------------------

     Running LPARTY presents a master menu that includes CREWMEMBER
     SELECTION.  Choose this to modify the file of crewmembers to enter
     anybody you want. It will ask you a few questions about this person to
     evaluate their abilities and then add them to the list.

     Selecting INSTRUCTIONS from the main menu prints LPARTY.DOC (these
     instructions) and selecting PLAY THE GAME loads and runs LP.















     ----------------------------------------------------------------
     --------------------- AND FINALLY ------------------------------
     If you enjoy playing this game, please consider contributing $10.
     If you include a disk, you will receive back the latest version of
     Landing Party plus the BASIC source code.

     send to:                                   Rick Pitel
                                                10416 N.E. 156th Street
                                                Brush Prairie, WA 98606



     NAME  _______________________________________________________

     ADDRESS _____________________________________________________

     CITY,STATE,ZIP ______________________________________________

     COMMENTS  ___________________________________________________

     ____________________________________________________________________







     .

```
{% endraw %}

## NOTES604.TXT

{% raw %}
```
Program name: Landing Party (v1.0)
 
Author name:  Rick Pitel
Address:      10416 NE 156th Street
              Brush Prairie, WA  98606
 
Tel number:   Not listed
 
Suggested donation: $10 - includes latest version and BASIC source code
 
Program description:
 
Landing Party is a fun, cute little adventure game in which the characters
played during the game can be user defined.  So any person, historical figure,
family member, or television star can become one of your party.  Your party
consists of 5 crew members of a possible 30 people to chose from.  Each person
has a physical and mental history which is created upon picking a particular
member to join your party.  To be specific, your party is deserted on a plant
searching for energy crystals to power your damaged ship.  You chose five
members of your crew to search on the plant.  Once the party is selected, you
are confronted with various enemies or friends upon which you must decide to
shoot them, fight them, talk to them or retreat from them.  Since this
adventure is text based and menu driven it is simple to understand and
hilarious play when friend's psychological profiles are placed into the
character history file.  If you and your party survive each encounter with the
people of the planet, then you get your crystals and retreat back to your ship
to safety.  If you don't....  Landing Party has color text, but will run on a
monochrome monitor and an IBM with at least one drive.  Landing Party comes
complete with documentation and menu files. Experiment with the default
characters, then make a few of your own.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0604

     Volume in drive A has no label
     Directory of A:\

    FILES604 TXT      1105   8-27-86   4:45p
    GO       BAT       586   8-22-86   3:14p
    LP       EXE    109168   7-29-86   6:50a
    LPARTY   DAT       768   7-12-86   8:06a
    LPARTY   DOC      5504   8-01-86   5:12a
    LPARTY   EXE     51156   7-30-86   6:41a
    NOTES604 TXT      1626   8-27-86   4:44p
            7 file(s)     169913 bytes
                          149504 bytes free
