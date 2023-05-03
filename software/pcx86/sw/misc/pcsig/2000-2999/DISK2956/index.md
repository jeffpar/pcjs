---
layout: page
title: "PC-SIG Diskette Library (Disk #2956)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2956/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2956"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #2956 CONQUEST  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation, type:  COPY READ.ME PRN    (press Enter)   ║
║                                     COPY GUIDE.DOC PRN  (press Enter)   ║
║                                                                         ║
║  To print the order form, type:  COPY ORDER.DOC PRN  (press Enter)      ║
║                                                                         ║
║  To start the game, type:  CONQUEST  (press Enter)                      ║
║                                                                         ║
║                                         (c) Copyright 1992, PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GUIDE.DOC

{% raw %}
```





                            Player's Guide for

                                CONQUEST

                               Version 1.8












                            September 7, 1992


















                           by David Burns





















OVERVIEW

     Conquest has much in common with other 'Conquer the World' games.
Up to 8 players can play, any or all of whom can be computer controlled.
The goal is to defeat all of the opposing armies, and occupy every
territory on the Map.  The game objective can be different depending on
selections made in the game set-up menu.  Conquest is different from other
games in this genre because of its point & click user interface and the
strength of the rule-based algorithm used by the computer opponents.

     Winning a game of Conquest requires good placement of armies, the
ability to outnumber your opponent armies in critical battles, and luck.
Each player's turn is divided into 3 phases:  Placement, Attack, and
Free move.

     The Placement phase consists of selecting a territory owned by you and
putting some or all of your new armies for that turn on it.  The number of
new armies is determined by the number of territories owned by the player
and the number of bonus armies received from the occupation of whole
continents.  This phase continues until all of armies have been placed.

     During the Attack phase, you can attack a bordering territory owned by
another player as long as you have 2 or more armies on your territory (NOTE:
If you are using the Even Chances attack scoring, then your armies must be
greater than or equal to your opponent's).  If you defeat all of the armies
on the Defending territory, you can then move some of your armies on to your
new territory (NOTE:  Each territory must have at least one army at the end
of your move). To end this phase, select the 'EXIT' box.

     After the Attack phase, a player is allowed to move armies from a
territory to an adjacent territory, provided he owns both of them.  The
purpose of this Freemove is to reinforce your current position until your
next turn.

     Conquest has a variety of options and settings.  When the game is first
loaded, the player characteristics are shown in a box (for more information
on these - read the 'player menu' help section), and the following buttons
are shown on the right side of the screen:


Using the Opening Menu

     The current game set-up is the options as they are listed in the
Opening Menu (the menu screen which you start the game from).

      Start Game -  starts a new game of Conquest

      Resume Game - brings up a directory of saved games.  Point and
                    click on the name of the game you wish to start,
                    and it will load and start automatically.

      Modem Game -  starts a game of Conquest with remote players.

      Demo       - if you select Demo or wait 3 minutes without moving
                   the mouse or hitting a key, Conquest will select a
                   random map, and generate five computer opponents to
                   play on it.  This will continue indefinitely until
                   you press a key.  If the game ends, or you hold
                   down a mouse button, a new map will be loaded, and
                   a new game will start.  This can be used as a
                   'screen saver' feature if you desire.  On my 386, it
                   plays about 15 games/hour (a brief summary is shown
                   at the end of each game) at high speed.

      Help - brings up a menu of help topics.  Highlight the topic
             of the desired help subject.

      Options Menu - brings up a menu of options that control how a
                     game of Conquest is played.  These options are
                     discussed in the 'Options Menu' section.


      Select Map - brings up a directory of maps to play Conquest with.
                   Only registered users can use a map other than the
                   default maps ('Conquest.map' or 'Conqmap.map').
                   Point and click on the name of the map you want to
                   use.

      Save Set-up - Saves all game and player settings as the default
                    settings.  This information is stored in the file
                    'Conquest.dft', so to return the game to its inital
                    settings, just delete the file 'Conquest.dft'  Drive
                    and directory information is stored in this file,
                    so if your machine is always looking for maps in an
                    old directory or drive, just enter the new directory,
                    and select 'Save Set-up'

      Exit - quits Conquest, and returns you to DOS

    In the middle of the screen is the title of the current map.  If
you press the Start Game button, this map will be used.
    Below the Map title is a grid containing player information.  If
a name is shown, then that player will play in the next game.  To get
more players, or edit the characteristics of a player, just click on
one of the buttons labled 'Player 1' through 'Player 8.'  This will
bring up a separate menu for the player selected.
     The popup menus can be controlled by either the mouse or the arrow
keys and the Enter or Return key.  The Escape key functions the same as
clicking on the Exit box.  Each game requires at least 3 players, so if
you have less than 3, the game will prompt you to add additional players.
It is O.K. to have the first, third, and last players in a game for
example.


Player Options

     In the upper left hand corner of the player screen are three buttons.
If the 'Status' button has the word 'ON' next to it, this player will play
in the next game.  To change this status, click on the button next to
it.  The 'Exit' button brings you back to the opening menu, and saves
the current player setup.  'Help' displays a help screen relavent to
the player options menu.
     The 'Name' and 'Color' buttons will change these player attributes.
     Conquest can support any combination of computer and human opponents.
There are three type of players:

              Human - the role you will play.  The game does not require one
                      of these, but it makes it more interesting.

           Computer - an independent (meaning they do not gang up on you,
                      unless you want them to) computer-controlled oppoent.

              Modem - a human player that is linked by modem or cable to
                      your machine.  Only the Host player needs to select
                      this.

      Strategy determines how the computer opponents attack.

              -- Standard plays the opponent as in previous
                 versions of Conquest (recommended setting)

              -- Blitzkrieg encourages the computer player
                 to go around strongholds, and attack at the
                 weakest points

              -- Maginot Line encourages the player to
                 attack the enemy at his strongest points
                 (to wear them down), and to concentrate
                 his efforts on defending his continents

      Philosophy sets the basic principle the computer opponent will use.

Computer Aggressive - This type of player attacks more frequently than the
                      other types, so as a result, it has fewer armies to
                      defend its position.

 Computer Defensive - This player collects armies, and does not attack as
                      often as the other computer opponents.

  Computer Balanced - This player is a mixture of the preceding two types.
                      It is not necessarily better than they are, but it
                      plays a more consistent game.

    Computer Random - This type of player takes on the characteristics of
                      one of the other computer opponent types.  It changes
                      these characteristics each turn.

     I recommend using a combination of opponents in each game.  Conquest
gets more challenging when you increase the number of computer opponents,
because it decreases the probability of the human opponent(s) starting
with a good position, and it increases the probability that someone else
(or something else) will be luckier than you.
      The 'Attack Priority' setting determines who the computer opponent
is most likely to attack if all other conditions are equal.  In other
words, if a player can attack two different territories owned by two
different players, and the advantage gained from conquering each territory
is the same, the computer player will 'prefer' attacking the one
corresponding to the selection here.  The recommended setting (for longer
games) is 'Strong Players.'
     Intellegence goes from one to ten, and it determines how a computer
player plays.  'Dumb' players (Intellegence less than three) can
still win (Mike Tyson does not need a Ph.D. to take your head off), but
they do not make as much of a challenge as the smart players.
   I think the most challenging setting is: one human, 3 or more smart
computer opponents (favoring attacking the strongest player) on a
large map (more than 75 territories).
   If the attack scoring is set to 'Weighted by number of armies,' the
weak computer players will do better because they tend to put all of
their armies in one or two territories.
    If you are having too much trouble beating the computer opponents,
set the 'Favors Attacking' selection to 'Computer Opponents' so
they will give you more breathing room.  Also, set the intelligence
level above 7 so they do a better job of beating up each other.
    Player names can be changed, and it is important to change them
to give a more accurate description of their playing ability.  For
example, you could name an aggressive computer opponent "Ghengis" or
"Napolean," and name a defensive computer opponent "Wimp."

    Options Menu

    In the upper left hand corner are three buttons.  'Help' displays
a relevent help screen.  'Save Set up' save the current game and
player settings to disk.  'Exit' takes you back to the opening menu.
Game Objectives

     The default game objective is to conquer all of the territories
on the map.  However, after a player has beaten most of the other
opponents, and occupied most of the map, or has the most armies,
the outcome of the game is set.  Therefore, Conquest has a variety
of methods available to determine the winner.  There are ten
objectives in three categories:

   First player to occupy a set % of the Map.

   Player with most armies after # rounds.

   Player with most territories after # rounds.

The objective can not be changed after the game starts.


Attack Scoring

     This is used to determine how the computer will toss the dice
to determine which territory will lose armies in attack.

           Even Chances - even odds for the attacker and defender.
                          To attack, an attacker must have the same or more
                          armies than the defender.

Weighted by # of Armies - odds for each battle favor the player with the
                          most armies on his territory (but independent
                          of armies he owns elsewhere).

          Wildly Random - unpredictable.

         Cyclic (Short) - Your luck goes up and down, similar to
                          a biorhythm cycle.  The cycle is 12
                          attacks long, and the probability of
                          winning an attack is based on where
                          you are in your cycle, and where your
                          opponent is in his cycle (i.e., if you
                          are both at a low point, then you have
                          equal chances, but if you are low, and
                          he is high, then you are likely to lose
                          that attack).  The cycles are not visible,
                          so this mode appears on the surface to be
                          just like any other attack scoring method.

          Cyclic (Long) - same as above, except the cycle is 20
                               attacks long.

    Simulated Dice Toss - The attacker rolls up to 3 dice, and
                          the defender rolls up to 2 dice (six sided).
                          The defender wins all ties.  Automated, so
                          you don't see the dice.  Each player rolls
                          the maximum number of dice possible.  The
                          number of dice rolled is:
                          Attacker Armies  Dice  Defender Armies  Dice
                                 2          1            1         1
                                 3          2            2         2
                                 4+         3            3+        2
                          The Attacker's and Defender's dice are
                          compared, and if a Defender's die is greater
                          than or equal to the Attacker's die, the
                          Attacker loses one army.  If the Attacker's
                          die is higher, the Defender loses one.  Upto
                          two armies can be lost in each attack,
                          depending on the number of dice tossed.

                Unknown - randomly chooses one of the above
                          during each player's turn.


Territory selection

     This option determines the method used for picking each player's
territories:

          Random - Territories are automatically picked for each player
                   on a random basis.

       Partioned - Similar to the first method, however territories are
                   clustered for each player, so the starting position
                   is better.

         Manual - All territories and number of armies are determined by the
                  Human players.

Player's choice - Each player (including the computer opponent players)
                  selects their territories at the start of the game.
                  The number of starting armies is random.  This is a
                  new feature for version 1.3, and as a result, it doesn't
                  give the computer opponents the 'best' possible opening
                  position.  I recommend against using this option as
                  your only method of playing solo against the computer
                  opponents, until it matures.


Bonus armies for each opponent eliminated

     This option awards players that eliminate other opponents from the
game with new armies.  This armies are available immediately, and can be
placed anywhere.

     Fixed at 5 - The number of new armies is always 5.

    Fixed at 10 - The number of new armies is always 10.

     Escalating - The number of new armies starts at 5, and grows by
                  5 with each opponent eliminated.

           None - No armies.

Hide non-adjacent opponent's territories

     If this is 'ON,' then all of the territories not next to a human
will be covered.  This gives a 'Stratego' like feel to the game, since
you will not be able to determine how good your opponent's position is.
This option does not prevent the computer opponents from determining
how good their positions are (or yours for that matter), but it does
add a little realism.  It is often difficult to get reliable intelligence
information on areas behind the battle lines.  If all of the human players
are eliminated from the game, the territory owners and the number of
armies they have will be shown.

Free move

     This option determines when (and if) a player can redistribute his
armies at the end of his turn.  A player's freemove can be dependent on
if he conquered a territory during his turn.

Penalty for attacking a new continent

     This option makes it more difficult to win a battle if the
defender is in a different continent than the attacker.  The rationale
for this is that indigenous troops have an advantage over troops
that have just arrived after a long boat ride.  This option causes
the attacker to lose 33% more attacks (no matter what the attack
setting is) than if it had not been selected.

Team Play

     This option lets you combine several players in to a team.  The
game is then determined by how well each team does.  Each player can
only use his own armies and territories to play the game.  The new
armies that each player gets at the beginning of the game are
determined by the territorial standings of the team (not individual
players).  These new armies are then divided by the number of players
in the team, and distributed evenly to all players in that team.
     Computer opponents will never attack another teammate, however
human players can if they desire.  The only advantage of attacking
a teammate is to make a path for your troops to move to a battle
area.  During the freemove phase, you can only move troops to and
from your own territories (not a teammate's).
     Teams do not have to have the same number of players.

Rebellions

     This settings enables territories to change owners during the game
without combat.  In other words, territories can revolt against their
current owner, and change to another owner (keeping all of their armies).
This option has three types of settings:

   Type:

     None - disables this option

     Strong to weak - the player with the best position (either most
                      armies or most territories) will lose territories
                      to the player with the worst position

     Weak to strong - opposite of Strong to weak

     Random - either Strong to weak or Weak to strong (different each
              time

   Frequency:

     Rare - a rebellion occurs approximately once each 7 turns

     Often - a rebellion occurs approximately once each 3 turns

   Territories affected:

     Single - only one territory will change owners during a rebellion

     Few - 2 to 3 territories will rebell.

     Cluster - one territory, and all of the territories next to it
               will rebell.

Modem Play

     This is the first version of Conquest to allow modem to modem
games.  Two computers can be connected either through a phone line
or a direct physical link with a 'null modem' cable.  Before you start
a modem game, decide with your opponent who the 'Host' and 'Guest'
will be.  The Host dials (or establishes the connection), and sets up
the game options and map.  Computer opponents can also play, if the
Host has included them in the game.
     To start a modem game, the Host configures the game (including
atleast one modem player), and selects 'Modem Game.'  The Guest
selects 'Modem Game' and waits for the Host to call.  To cancel,
press F10 several times.
     If you want, you can connect before you start Conquest by using
your favorite terminal program.  This will enable you to talk to
your opponent ahead of time, and decide what type of game to play.
Then when you start Conquest, make sure the 'Connected' button is
on to prevent initializing the modem.
     Currently, modem games can not be saved.  Conquest will store
the information in a file, however you will not be able to start
a new modem game with the file.
    During modem play, the screen of the remote players (the ones
who are not at your computer) is updated after each phase (placement,
attack, and freemove) of your turn.  This was done to improve
performance - if each move was sent to the other computer, then
there would be a noticible delay each time you selected a territory.
    To play a modem game, you only need to know where your modem
is located (the serial port number).  Conquest will automatically
set up your modem, and select the highest speed that you and
your opponent can play at.
    To quit a modem game, press the F10 key rapidly (or hold it down
for a while).
    Conquest uses an error correcting data transfer format.  If you
see a "Transmission Error" message, wait for a while, and it may
clear up by itself.


Maximum # of starting armies

     This setting determines how many armies will be placed on each
territory at the start of the game.


Game Phases

     There are three phases to each turn in the game:

     Placement

     At the start of each turn, a player is given new armies to place on
     any of his territories.  To place the armies, just point to the
     territory, and click the LEFT mouse button.  Then select the number
     of armies to place on that state.  The computer will not let you
     select a territory that does not belong to you.  The number of new
     armies is derived from the total number of territories owned by you
     divided by three, plus additional armies for each continent you own
     (the armies gained by owning a continent is displayed by selecting
     'Show Values').  At least two new armies will be awarded each turn.

     Attack

     To attack, just click on your territory (the Attacker), and then on
     the territory you wish to attack (the Defender).  If you can attack
     it, the attack will automatically take place.  If one of your
     territories does not border any of your opponents, or the attacker
     does not border the defender, you will not be able to select it.
     Attacks can only occur between bordering territories.  Territories
     that border each other are sometimes indicated by a white line
     representing a sea lane.  To exit this mode, select 'Exit.'

     Freemove

     At the end of each turn, a player may move armies from one territory
     to another, provided he owns both of them, and they border each
     other.  This allows each player to reinforce his position.  After the
     freemove, at least one army must remain on each territory.  Only one
     freemove is allowed per turn.  To make a freemove, just select the
     territory to move the armies from (the Donor), and then select the
     territory you wish to move to (the Receiver).  You will then be
     prompted for the number of armies to move.  If only one army can
     be moved, the move will be automatic.  If you wish to abort the
     freemove after you are prompted for the number of armies, select zero.


In Game Options

     After the game starts, additional options may be selected by pointing
and clicking on the box marked 'Options' or by pressing the 'Escape' key
when the Options box is visible (Note: if you press the 'Escape' key
during a computer player's move, there may be a slight delay before the
menu is displayed).

Statistics - Shows the current standings of all players.  This is useful
             for determining which players you should watch out for.

Settings - Shows the current game settings.  The settings can't be changed
           during the game (because the computer opponents use them to
           determine their strategies).

HELP! - Displays the help menu.

Show/Hide Values - Shows or hides the new army continent values awarded
                   to the owner of the entire continent.

Speed - Changes the game's playing speed from 0 (very slow) to 10
        (very fast).

Sound - Toggles the sound on and off.

Mouse - Changes the mouse's tracking sensitivity from LOW to HIGH.

New Game - Abandons the current game, and returns you to the Game Setup
           Menu.

Save Game - Saves the current game under a name you select (with the
            extension '.sav' automatically added).  This does not end
            the current game.

Quit Game - Exits Conquest.


Hints

1.  Most placement and attack decisions are a trade off between conquering
a continent (to obtain the new armies awarded for owning that continent),
and defending your position.

2.  The algorithm for the computer opponents balances a desire to occupy
entire continents with a paranoia of attacks from other players (be they
human or computer).  If a computer opponent feels that another player is
getting too strong, he will shift his focus slightly to weaken the
adversary.

3.  To decide which continent is best for placing armies in (and attacking
in), consider how many territories you own in it, and how difficult it is
to obtain and defend.  Usually the higher value continents are more
difficult to get and keep.

4.  Try to place your armies in an area that the other opponents are not
trying to conquer.  Sometimes it is possible to win by collecting
armies and letting your opponents weaken each other.

5.  Try not to attack each turn to the point you can not attack anymore.
This keeps enemies from taking your territories too easily.

6.  Sometimes you may need to sacrifice part of your forces to keep your
opponent(s) from controlling a complete continent.  Consider placing a few
armies on one or two remote territories even if you do not want to
acquire that continent in the near future.  This makes the other opponents
work harder to improve their positions.

7.  Check the Statistics from the Options menu to gauge how your opponents
are doing.  If one opponent is getting too strong, try to concentrate your
attacks on him.  Even though he may help you in the short run by weakening
the other opponents, sooner or later he will come after you.

8.  Use a variety of computer opponents, including the 'Aggressive' type.
The computer opponents do not recognize if the defender is human (unless
you set 'Favors Attacking' to human), instead they try to concentrate
their attacks on territories they want to occupy and opponents
they perceive are 'threatening' their position.

9.  If you use the 'Weighted by # of Armies' attack scoring option, then
attack any time you have more armies than an opponent, even if you don't
want that territory.  This allows you to reduce your opponents armies
when the odds favor you.

10.  Use more than one type of Territory placement to make a map more
interesting.

11.  If you want to reset the game to its original configuration, just
delete the file 'CONQUEST.DFT' from your disk.  This file is created by
the game when you save the current game setup.

12.  Menus can also be controlled by the cursor and 'Enter' keys if
desired.

13.  If you are playing with the higher intellegence computer opponents,
be sure you can defend a continent before you conquer all of it (or
other players may try to take it from you).

14.  If you are winning too easily, try fighting computer teams with
more members than your team.  For example, you could be in a team
with two members fighting two other teams that each have three
members.

Registration Information

     You will need to register this game with the
   author before you can use maps other than the
   default map ('Conqmap') provided with the game.
   There are 3 different ways to register Conquest:

      $8 - will get you a password, enabling you
   to use any map created for Conquest.  If you
   register at this level, you will receive a
   postcard with the password (it is assumed you
   have a working copy of Conquest).

     $14 - will get you a password and a disk
   containing 35 maps for Conquest.  The disk
   also includes the latest version of Conquest.

     $20 - will get you all of the above plus a Map
   Editor that will allow you to create your own
   maps for Conquest.

     To register, send $8, $14, or $20 (add $.75")
   for 3.5 inch disk if you select the $14 or $20)
   Check or Money Order in U.S. currency to:

                   David Burns
                   P.O. Box 46065
                   Washington, DC  20050

      If you do not live in North America, please
   add $1.00 to cover the extra shipping cost.
      I'm in the military, so I move from time to
   time.  The above address will remain valid until
   atleast DEC 96. After that, I will release a new
   version with an updated address.  All registered
   users will be notified of the new address.
      Free distribution of this program is allowed-
   provided the program is not modified.  The
   password for registered users may not be
   distributed by anyone other than the author.
   Your comments are welcome!


Foreign Registration:

Australian & New Zealand Customers - please order for Conquest's
official dealer:

            Price:  $35 + $5 Shipping (complete version)

            Vision Shareware
            PO Box 356
            DAW PARK, SA.  5041

            Phone: (08) 374-2949
            Fax:   (08)  277-0069

            Use Mastercard, Visa, Bankcard, Cheques or money orders.

```
{% endraw %}

## ORDER.DOC

{% raw %}
```
                     Conquest Version 1.8 Registration

             (Australian & New Zealand orders - please see ordering
             information in 'GUIDE.DOC' for faster service - Thanks!)


Select a registration level & amount:


  1.  Password only                                 $  8.00    _________

  2.  Password and a disk containing a
        35 maps for Conquest                        $ 14.00    _________

  3.  Password, 35 maps, and a
        map editor for Conquest                     $ 20.00    _________

  4.  Disk size (if you selected level 2 or 3):

        a.  3.5  inch disk                         + $ 0.75    _________

        b.  5.25 inch disk                         No charge   _________


  5.  Extra postage (if not mailing from
             North America)                        + $ 1.00    _________


                                                      Total    _________


Your name & address:    _______________________

                        _______________________

                        _______________________

                        _______________________


Please help me with some research on shareware marketing for my own
personal use:

  1. Where did you get this copy of Conquest?


  2. Suggestions for improvement?




Please mail your registration to:


                  David Burns
                  P.O. Box 46065
                  Washington, DC  20050     USA


                                          THANKS!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2956

     Volume in drive A has no label
     Directory of A:\

    CONQUEST EXE    182664   9-06-92  11:37p
    CONQMAP  MAP     17209   9-08-91  12:08a
    CONQUEST MAP      8320   3-24-91   5:17p
    AUSTRALI MAP     10669   2-22-92   3:42p
    CONQUEST HLP     16239   9-06-92   7:29p
    CORNERS  MAP      5008   7-04-92   1:02p
    GUIDE    DOC     29228   9-06-92  10:58p
    ORDER    DOC      1542   9-06-92  11:00p
    READ     ME       1831   9-06-92  10:49p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       924   9-21-92  11:35a
           11 file(s)     273665 bytes
                           44032 bytes free
