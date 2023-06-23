---
layout: page
title: "PC-SIG Diskette Library (Disk #3261)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3261/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3261"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #3261 HOSTILE TAKEOVER  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the documentation, type:  COPY MANUAL.DOC PRN  (press Enter)  ║
║                                                                         ║
║  To start the game, type:  HOSTILE  (press Enter)                       ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```


     Welcome to Hostile Takeover; the game of discovery and
conquest.  It is easy to learn, easy to play, and a lot of
fun.  This game is being distributed as a shareware product
so if you like the game, please be sure and register it.  I
am presently working on Hostile Takeover II and those that
register this game will get the second one at a reduced
price.  I will also need play testers for the new game and I
would like to use the people that have played and liked this
game.  The registration information is at the end of the
manual.  The outline for the manual is listed below.

     Starting the game

     Object of the game

     Elements of the game
         1.  The map
         2.  Castles and playing pieces
         3.  Gold
         4.  Visibility

     Screen layout
         1.  Realview window
         2.  Overview window
         3.  Text window

     Commands
         1.  (H)elp
         2.  (?) information
         3.  (P)roduce
         4.  (M)ove
         5.  (A)ttack
         6.  (D)efense
         7.  (S)ave
         8.  (L)oad
         9.  (C)enter
         10. (R)eport
         11. end (T)urn
         12. (G)ive up
         13. ESC

     Tips, Hints, and Comments

     Start up Demo

     Registration information




                      Starting the game:

     To start playing, put this disk into the A: drive and
type HOSTILE.  Once the introduction has finished, press
any key to continue.  You will then be asked if you want to
(1) start a new game or (2) load a saved game.  If you want
to load a game press '2' and then type in the name of the
previously saved game.  The game will be restored and you can
start playing were you left off.  If you wish to start a new
game then press '1'.  You will then be asked if you want to
(1) play against the computer or (2) play against a human
opponent.  If you want to play against a human opponent press
'2' and the game will start at the beginning of player one's
turn.  The game is designed so that only one player should be
able to see the screen at a time.  When a player has finished
his turn, the screen will blank.  A message will be displayed
telling the other player it is his turn.  When the second
player is ready he can press 'c' to continue and his map will
be displayed.  If you want to play against the computer press
'1' and the game will then ask you what difficulty level you
wish to play.  Once you have selected a difficulty level,
play will start at the beginning of your turn.  When you are
finished with your turn a message will be displayed telling
you the computer is taking it's turn.  When the computer is
finished your map will be redrawn and you can take your next
turn.




                     Object of the game:

     The object of the game is divided into two parts.  The
first objective is to explore the map and take over neutral
castles.  The second objective is to find your opponent and
take over all of his castles.  When one player has taken over
all of his opponent's castles then he has won the game.


                    Elements of the game:

1.  The Map

The map is composed of six basic types of terrain: grass,
brush, forest, swamp, low mountains, and high mountains.
Each type of terrain affects how easy it is for pieces to
move from one place to another.  Each piece starts out with a
certain number of movement points at the beginning of each
turn.  As the piece is moved across the map, the terrain
movement cost is subtracted from the number of movement
points the piece has left.  When the number of movement
points a piece has left is less than the movement cost it
takes to move across a terrain, then that piece can no longer
move.  For example, a soldier starts out with 12 movement
points.  If the soldier moves through a square with grass in
it, then the soldier will only have 12 -2 = 10 movement
points left.

Table of Terrain:

Type               Movement Cost

Grass                     2
Brush                     3
Forest                    4
Swamp                     4
Low Mountains             5
High Mountains        Impassable


     At the beginning of the game the map is randomly
created.  This means that the map will be different with each
game.  When the player starts out he can only see about one
percent of the map.  He has to produce pieces in his castle
and go out exploring in order to see more of the map.  Once a
player has discovered an area it will always be visible on
his map.  The map will always contain thirty castles that are
randomly placed.  Each player only starts with one castle and
he has to go out and find the rest.


2.  Castles and Playing Pieces

     The next element of the game is the castles and the
pieces they can produce.  Each castle has a selection of
three possible pieces to produce.  It can only produce one
piece at a time and it often takes multiple turns in order to
do so.  The three pieces that the castle can produce are
randomly selected at the beginning of each game.  The only
castle that has fixed pieces is the first castle each player
starts out with.  It can always produce a soldier, wolf and
pegasus.  There are nine different pieces in the game:
soldier, archer, knight, wolf, pegasus, assassin, war beast,
war wizard, and phoenix.  Each piece has it's own weaknesses
and strengths.  The main attributes that distinguish between
the pieces are movement, turns to produce, cost, range,
strength, and special abilities.  A chart of the pieces and
their attributes is shown below.  The first column lists the
movements points for each piece.  The movement points  have
already been explained above in the section titled The Map.
The next column shows how many turns a player will have to
wait before a piece is produced.  The Cost column shows how
many gold pieces it will cost a player to produce a piece.
This will be explained further in the next section.  The
Range column displays how many squares away a piece can
attack.  The last column shows the relative strength of each
of the pieces.  The special abilities of some of the pieces
will be explained here.  The pegasus and the phoenix can both
fly.  This means that it only costs them two movement points
to fly around the map regardless of what type of terrain they
are flying over.  The assassin has the ability to be
invisible.  The opponent can never see the assassin.  He can
only discover it by running into it.  The phoenix has the
unique ability to attack everything around it at the same
time.  The phoenix can not be killed while it is attacking.
This means that the only way to kill a phoenix is for the
other player to attack it during his turn.  The archer,
assassin, and war wizard are the only pieces that can attack
at a distance.

Table of Pieces:

Name    Movement  Turns to produce  Cost   Range  Strength

Soldier     14          1             4      1        3
Archer      12          2             4      4        3
Knight       8          2             4      1        6
Wolf        28          2             6      1        4
Pegasus     30          3             8      1        5
Assassin    18          7            20      2        5
War Beast   14          5            16      1        8
War Wizard  14          7            26      6        6
Phoenix     30          6            22      1        7



3.  Gold

     The third element of the game is the gold.  Each castle
gives a player a certain number of gold pieces in taxes each
turn.  The amount of the taxes for a castle depends upon what
that castle is capable of producing.  When a piece is
produced by a castle it costs the player a certain amount of
gold.  It also costs the player to maintain the pieces he
presently owns.  The amount of gold it takes to maintain a
piece is half of what it cost to produce it.  For example: If
it cost six gold pieces to produce a wolf then it will cost a
player three gold pieces each turn for upkeep.  Another way
that a player can use his gold is to increase the defenses of
the castles he owns.  The first castle a player owns has a
defense of seven.  The neutral castles in the game have a
defense rating ranging from two to four.  The better the
defense rating, the better the pieces the castle can produce.
Every time a castle is successfully attacked the defense
rating goes down.  To increase the defenses of a castle use
the (D)efense command.  The higher you want to increase a
castle's defense value the more it cost.  It costs 25 gold to
increase a castle's defense from one to two.  It costs 350
gold to increase a castle's defense from eight to nine.


4.  Visibility

     The last element of the game is visibility.  A player
can only see an opponent's piece if it is within attacking
range of one of his own pieces.  This means that an opponents
piece can be just a few squares away and you may never see
it.  It is essential that a good network of archers or other
ranged pieces be set up so that you know where the opponents
pieces are.




                        Screen layout
     The screen is divided up into three windows.  The
windows are realview, overview, and text.  Their functions
are listed below.
1.  Realview window
     The realview window is located in the upper right hand
part of the screen.  This window shows a close up of the
pieces and the landscape.  It can be scrolled around the map
by using the arrow keys.
2.  Overview window
     The overview window is located in the upper left hand
part of the screen.  This window contains the entire map,
although only the part of the map that you have explored is
shown.  The brown rectangle shows what part of the map the
realview is displaying.  The four brown dots show where the
pointer is located.  Every type of terrain on the map is
represented by square set of nine colored pixels.  If a
pointer is on a type of terrain and you don't know what it is
then use the information key (?).  It is very easy to
recognize the types of terrain on the overview window.  Both
players are assigned an active and passive color on the
overview window.  For player one the active color is a light
purple and the passive color is a dark purple.  For player
two the active color is a light orange and the passive color
is a dark orange.  Each of the pieces is also displayed on
the overview.  To display a piece, a pattern of the nine
pixels is highlighted in the players colors over the normal
terrain pattern.  The patterns for each of the pieces is
shown below.  If a piece is highlighted in your active color
then that piece has at least two movement points left.  If
the piece is highlighted in your passive color then that
piece has less than two movement points left and it can not
move.

       *               * *                  *
     * *    Soldier    *   *   Archer       * *    Knight
     * *               * *                  * *

                        * *               * * *
     * * *  Wolf      * * *    Pegasus      *      War Beast
     *   *            *   *                 *


     *   *            *   *                 * *
       *    Assassin  * * *    Phoenix    * * *    War Wizard
     *   *              *                 * *


The castles are also represented on the map.  The castles
take up the full 3 x 3 set of pixels.  Neutral castles are
gray and player castles are represented in the passive
colors.  If a castle is producing a piece, then the pattern
of that piece is highlighted in the active color over the top
of the castle.  This set up of the overview window allows a
player to determine at a glance where his pieces are,
whether or not they are capable of movement,  where his
castles are, and what each castle is producing.


3.  Text window
     The text window is located in the bottom half of the
screen.  It displays all of the written information for each
of the commands.  A command line will usually be displayed
along the bottom of the window.  The command line shows the
options that are available from the present command.  Any
letter that is capitalized and in parentheses can be used to
access a command.  For example, if the command line shows
"(E)xit" then a player can press E and exit out of whatever
command is active at the moment.


                           Commands


1.  (H)elp
     To access the help screen press H.  The help screen
displays the names of all the commands and the letter needed
to access it.

2.  (?) information
     To get information about any of squares, put the pointer
on that square and press '?'.  This will display information
about the name of the terrain as well as the movement cost
for that terrain.  If the pointer is on a castle, then the
information command will display the name of the owner of
that castle and it's defense rating.  If the pointer is on a
piece, then information about that piece will also be
displayed.  The information command is also useful in finding
assassins.  If an assassin is within range of one of your
pieces and the pointer is on the square containing the
assassin, then the information command will tell you that an
assassin is there.

3.  (P)roduce
     The produce command is used to display what a castle can
produce and to start the castle producing a piece.  To use
this command make sure that the pointer is on a castle you
own and press 'p'.  The production screen displays a lot of
information about the piece and the castle.  On the far left
hand part of the screen is a picture of what the piece looks
like.  Next to the picture is the name of the piece.  If
that piece is being produced then "NTL" and a number will
appear below the name.  "NTL" stands for Number of Turns Left
and the number shows how many more turns it will take to
produce that piece.  The middle and right hand part of the
text window shows information about the piece and the castle.
The abbreviations and what they stand for are listed below.

MO = Movement   This shows how many movement points the
pieces has.

RA = Range  This shows how many squares away a piece can
   attack.

ST = Strength   This is a measure of how strong the piece is.
   Strength values will range from 3 to 8.

TU = Turns  This is how many turns it will take to produce
   the piece.

CO = Cost  This shows how much it will cost to produce the
   piece.

TA = Taxes  This displays how much taxes the castle will give
   the player each turn.

PG = Player Gold  This shows how much gold the player
   presently has.

UP = Upkeep  This shows how much it costs the player each
   turn to support his armies

DF = Defense  This shows the present defense of the castle.

The command bar is displayed along the bottom of the screen.
This is what it shows:  (N)ext (P)roduce (E)xit (S)top prod.
Press N to look at the next piece.  A castle has a selection
of three pieces that it can produce.  When it reaches the
last piece then it will start over again with the first
piece.  Press P to start producing the piece that is
presently displayed.  NTL and a number will appear below the
name of the piece.  Press E to exit from the production
command.  You must exit from the production command before
you can move the pointer and continue with the game.  Press S
to stop all production at that castle.


4.  (M)ove
     The movement command allows a player to move his pieces
once they are produced.  To move a piece, place the pointer
on the piece you want to produce and press 'M'.  The text
window will display the number of movement points remaining
for that piece and the command bar will show "(E)xit".  To
move the piece use the numeric keypad.  If you attempt to
move a piece into a square containing a castle, another
piece, or high mountains, then an error message will be
displayed.  If an error message is displayed and it looks
like you should be able to move into a square, then you
should use the information key to check for an assassin.  If
you run out of movement then you will automatically exit from
the movement command.  If you wish to exit from the movement
command before you have used up all the movement of a piece
then press 'E'.  You must exit from the movement command
before you can attack another piece.  Any movement points
that are left can not be carried over to the next turn.

5.  (A)ttack
     The attack command allows one piece to attack another
piece.  To attack with a piece, put the pointer on the piece
you wish to attack with and press 'A'.  If you are attacking
with a range one piece then the screen will display:
     Direction
     Movement XX
     (E)xit
The XX stands for the number of movement points the piece has
left.  It takes two movement points to attack with a range
one piece.  Once you have pressed 'A', then use the numeric
keypad to show which direction you want the piece to attack.
If you are successful then the enemy piece will disappear.
If you loose, then your piece will disappear.  If you attack
a castle and win, then two flags in your color will be
displayed with your castle.  If your piece has a range
greater than one and you are attacking a piece that is
farther than one square away then only the enemy piece has a
chance of getting hit.  If your piece has a range greater
than one but it is only attacking one square away, then the
rules are the same as a range one piece.  If a ranged piece
is attacking a castle and it wins then the defense of that
castle is decreased by one.  This means that you can set up a
siege on the higher defense castles to bring their defenses
down.  A ranged piece can only take over a castle if it is
one square away.  To attack with a ranged piece, put the
pointer on the piece you want to attack with and press A.
The screen will display:
     Space bar to attack
     Movement XX   Range Y
     (E)xit
The XX stands for the amount of movement the piece has left
and the Y stands for the range of the piece.  It takes three
movement points instead of two to attack with a ranged piece.
Once you have pressed 'A', move the pointer to the piece you
wish to attack and press the space bar.  If you forget to
move the pointer and press the space bar right away, then
that is considered an attack on your own piece and your
ranged piece will disappear.  If you are successful with your
attack then the enemy piece will disappear.  If you are not
successful and if you have enough movement left then you will
be asked if you want to attack the enemy piece again.  This
will continue until the piece runs out of movement or you
indicate that you do not want to attack the piece again.  The
most unusual of all the pieces to attack with is the phoenix.
When the phoenix attacks, it attacks everything around it
regardless of whether or not it belongs to you or your
opponent.  The phoenix will not die while it is attacking.
The only way to kill a phoenix is for your opponent to attack
it during his turn.  To attack with a phoenix just press 'A'.
It takes three movement points to attack with a phoenix.
When two pieces with different strengths attack each other,
the piece with the higher strength does not always win.  Here
is how the winner is determined.  The first thing the
computer does is create two random numbers.  The first
random number is for the defender and the second random
number is for the attacker.  If the random number rolled is
less than or equal to the strength of the piece then it is
considered a win for that piece.  If the random number is
greater than the strength of the piece then it is considered
a loss for that piece.  If a random number is created for the
attacker and defender and both pieces have a lose then that
round is cancelled.  If both pieces have a win then the round
is also cancelled.  Only if one piece wins and one piece
looses is the round counted.  The piece that wins the best
two out of three rounds wins.  Suppose a pegasus of strength
5 is attacking a wolf of strength 4 and the computer
generates a 6 for the attacker and a 9 for the defender.  The
6 is compared with the 5 and pegasus has a loss.  The 9 is
compared with the 4 and the wolf also has a loss.  Since both
players lost the round is cancelled and the computer
generates another set of numbers.  The pegasus gets a 2 and
the wolf gets a 4.  The 2 is compared with the 5 and the
pegasus has a win.  The 4 is compared with the 4 and the wolf
also has a win.  Since both players won, the round is
cancelled and the computer again generates another set of
numbers.  The pegasus gets an 8 and the wolf gets a 1.  The
pegasus looses and the wolf wins.  Since there is a
difference between the two pieces this round counts.  The
computer then generates a 6 for the pegasus and a 7 for the
wolf.  The pegasus wins and the wolf looses.  Since this
round also counts the pegasus and the wolf both have one win
and one loss.  The computer now generates a 2 for the pegasus
and a 5 for the wolf.  The pegasus has now won two out of
three and is considered the winner.


6.  (D)efense
     The defense command allows a player to increase the
defenses of his castles.  To use the defense command, put the
pointer on a castle you own and press 'D'.  The screen will
look like this:

     Castle Defense  x     Cost  yy
     Player Gold  zzz
     Increase castle defense (y/n)?

The 'x' stands for the present castle defense value.  The
'yy' stands for how much it will cost to increase the defense
of the castle to the next higher value.  The 'zzz' stands for
how much gold the player has.  To increase the defense, press
'y'.  If you do not have enough gold, an error message will
be displayed.  The defense command will only raise the
defense of a city by one.  If you want to raise the defense
by more than one then you will have to use the defense
command multiple times.


7.  (S)ave
     The save command will save a game that is presently
being played.  To save the game press 's'.  You will be asked
if you are sure you wish to save the game.  To continue press
'y'.  You will then be asked to provide the name of the file
to save it under.  The name can only be eight characters long
with a three character extension.  It is not necessary that
you end the name with '.gam' but it is recommended.  Once you
have said that you wish to save the game you MUST enter a
name for it to be saved under.  Do not hit ESC or try to exit
from this screen.  If you hit ESC it will cause the entire
screen to scroll.


8.  (L)oad
     The load command is used to restore a game that was
previously saved.  To load a game press 'l'.  You will then
be asked if you are sure that you wish to load an old game.
If you want to continue, then press 'y'.  You will then be
asked to provide the name of the file with the saved game.
If the name can not be found in the present directory, then
an error message will be displayed and the present game will
continue.  Once you have said that you wish to load a game
you MUST enter the name of a game.  If you want to cancel the
command just enter a dummy name.  DO NOT hit ESC because it
will cause the screen to scroll.



9.  (C)enter
     The center command will center the realview window
around the pointer.  To center the window, press 'c'.  This
command is especially useful on slower computers.  It is a
lot faster to move the pointer and then center the realview
window than it is to move the realview window with the arrow
keys.


10. (R)eport
     The report command provides different information about
both players.  This allows you to see how well your opponent
is doing.  The abbreviations are explained below.

Pg = Player gold  This shows how much gold the player
   presently owns.

Tx = Taxes  This shows how much taxes the player receives
   each turn.

Up = Upkeep  This shows how much it costs a player to
   maintain his armies.

Ma = Map  This shows how much percent of the map a player has
   discovered.

#A = Number of Armies

#C = Number of Cities


11.  End (T)urn
     The end turn command will allow a player to end his
turn.  If a player is playing against the computer then the
message 'The computer is taking it's turn' will be displayed.
After the computer has finished, the player's map will be
redrawn and his next turn will begin.  In the beginning of a
game the computer's turn will be so short that the message
will barely blink on the screen.  If two players are playing
against each other then only one person should be able to see
the screen at a time.  When a player finishes his turn the
screen will blank.  When the next player is ready to play
then he can press 'c' and start his turn.


12. (G)ive up
     The give up command will allow a player to surrender the
game.  The player will be asked if he is sure he want to give
up.  If the player wishes to continue then he will be asked
again if he is sure he wants to give up.  If the player
really wants to give up then a message will be displayed
proclaiming the winner.  Player one's map will then be
displayed.  The realview screen can be scrolled using the
arrow keys but none of the other keys will work.  To continue
the end game sequence press 'c'.  Player two's map will then
be displayed.  After 'c' is pressed again then the full map
will be displayed.  When 'c' is pressed again then the ending
credits are shown.  Press any key from here to exit to DOS.


13.  ESC
     The ESC key will exit a player to DOS.  It should only
be used when no other commands are active.  DO NOT hit ESC
while saving or loading a game.  Once a player presses the
ESC key from the main menu, he will then be asked if he wants
to exit to DOS.  To exit to DOS press 'y'.



                    Tips, Hints, Comments


1.   The only thing you can do when the game first starts is
     to select a piece to produce and end your turn.  If the
     piece you select takes more than one turn to produce
     then you may need to end your turn one or two times
     before you have a piece to work with.

2.   The more castles you can get at the beginning of the
     game, the faster you win.  In order to do this you need
     to develop a search pattern that will let you discover a
     large area of the map very quickly.

3.   The only advantage that the computer has is that it
     knows where almost everything is.  This includes all the
     castles and all the pieces except the assassin.  Aside
     from this the computer does not cheat.  It has to move
     the same way you do and attack with the same chances
     that you have.

4.   A strength five pegasus will occasionally loose to a
     defense two city.  It is very rare that an archer will
     kill a war beast but it can happen.

5.   Novice level is very easy.  Good level has a more
     aggressive search pattern and the computer starts out
     with two cities.  Expert level has a very aggressive
     search pattern and the computer starts off with three
     cities.

6.   Use your archers to find out where the enemy pieces are
     and then use your heavy pieces to take them out.

7.   If you try to load a game and then you change your mind
     when it asks you for a file name, DO NOT hit the ESC
     key.  This will cause the screen to scroll.  The only
     time you need to use the ESC key is when you want to
     exit to DOS.

8.   Don't forget the NumLock key must be on to move the
     pointer.  If NumLock is off then all the keys will do is
     move the realview window.



                        START UP DEMO


     This is a demo of what a possible game would be like.  I
will tell you all the keys needed to start the game and
capture a castle.  First put the HOSTILE TAKEOVER disk in the
drive and type HOSTILE at the prompt.  When the screen
displays HOSTILE TAKEOVER in red, press any key to continue.
This demo assumes you are playing against the computer player
so press (1) when you are asked if you want to play against
the computer or another person.  Since you are just starting
out, this demo will select the novice level.  Press (1) when
you are asked what skill level you wish to play.  The
computer will then think for a little bit and then part of
the map will be displayed on the screen.  The first thing to
do is to start your first and only castle producing a piece.
The game starts out with the pointer on the castle.  To get
into the castle's production menu press (P).  You can look at
the pieces the castle can produce by pressing (N) for next.
For now, start out by producing the soldier.  Make sure the
soldier is being displayed on the production screen and press
(P) for produce.  Now that you have selected what you want
your castle to produce, press (E) to exit.  This is all you
can do on your first turn so press (T) to end your turn.  The
screen will blink and then your map will be displayed again.
At the start of a game the computer player's turn is so short
it almost looks like it hasn't taken it's turn at all.  Since
this is your second turn and it only takes one turn to
produce a soldier, there should be a soldier one square north
of your starting castle.  The pointer starts out on the
castle so use the numeric keypad to move it one square north.
Now that the pointer is on the soldier press (M) to move it.
Move the soldier around using the numeric keypad.  When it
runs out of movement press (E) to exit the movement menu.
Continue producing more soldiers and exploring the area until
you find another castle.  This demo assumes the second castle
is directly north of a soldier and the soldier has more than
two movement points left.  First press (E) to exit the
movement menu for the soldier and then press (A) to attack
the castle.  You will be asked which direction to attack so
press (8) to attack northward.  If you are successful the
castle will display your flag.  If not, then your soldier
dies.  If you are successful then move the pointer northward
and set the production for your new castle.  If the soldier
has any movement left then move him around to explore more
territory.  Now that you have two castles, continue to
explore the territory and find more castles and your
opponent.  Good luck.




                   REGISTRATION INFORMATION


     I have just graduated from the University of Evansville
as an Electrical Engineer.  About half way through college I
decided that I liked software a lot more than hardware.  All
of the graduating engineers have to do a senior project.
Since I liked software and I want to make a career of gaming
I decided to create a game for my senior project.  It has
taken me about a year to create and it is composed of over
14,000 lines of code.  I would like to spend the rest of my
life creating exciting, high quality games and I hope you
will help my dream come true by registering with me.  If you
liked this game please send $10 to

     Michael Taggart
     606 Roma Ave
     Jeffersonville, IN 47130

Please include your name, address, and telephone number.  I
would also appreciate any comments about Hostile Takeover and
any ideas you would like to see implemented in Hostile
Takeover II.  If you would like to play test HTII please tell
me that too.  In the future I would like to create a role
playing game but the amount of time needed to create good
graphics and a good plot line is tremendous.  If you would be
interested in helping create a game and you have skills in
art, writing, music, or programming please let me know.
Thank you for playing Hostile Takeover and I hope you enjoyed
it.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3261

     Volume in drive A has no label
     Directory of A:\

    MANUAL   DOC     32036   7-31-92  10:56p
    HOSTILE  EXE    248265   7-31-92  11:29p
    GO       BAT        31   6-04-92   2:25a
    LETTERS  VGA      8320   4-04-92   2:10a
    HIT      VGA       264   7-11-91  12:35p
    ICON     VGA     10920   4-03-92   4:10a
    GRASS1   VGA       264   8-02-91   1:51p
    GO       TXT       847  12-21-92   5:21a
            8 file(s)     300947 bytes
                           16384 bytes free
