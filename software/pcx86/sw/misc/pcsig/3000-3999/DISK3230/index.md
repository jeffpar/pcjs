---
layout: page
title: "PC-SIG Diskette Library (Disk #3230)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3230/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3230"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MB.DOC

{% raw %}
```
Mile Bones (v. 2.0)
(C) 1990 by Andre Needham

General Notes:

     Mile Bones is an automobile card game running under Microsoft Windows
3.0.  It plays like a certain French card game with a similar name.

     An EGA or VGA monitor (preferably in color) is best suited to the game,
but the game is playable (just not very pretty) using a Hercules card.  The
arrow keys and the spacebar or Enter can be used instead of a mouse to select
the cards.

     MB2.DOC explains the rules of Mile Bones, but it is possible to learn the
rules by just playing the game.  (When all else fails, read the instructions.)
MB2.DOC also contains information on what changes were made from version
1.0.

     If you enjoy playing this game and play it more than a few times, you can
send any amount of money you wish ($10 is suggested) payable to Andre Needham.
Doing so will encourage me to write more shareware games.  Also, feel free to
give a copy of this program (along with both unmodified documentation files
please) to friends, coworkers, a local BBS, or whoever else might be
interested in this program.

Don't let me stop you; go ahead and play the game!

Andre Needham
P.O. Box 2516
Renton, WA  98056
```
{% endraw %}

## MB2.DOC

{% raw %}
```
Mile Bones (v. 2.0)
(C) 1990 by Andre Needham

New Features for version 2.0:
     The main reason for a new version of Mile Bones is so the game would run
under Windows 3.0.  Of course, that means it won't run under Windows 2.x since
the bitmap formats are different.  Oh well.  Another new feature is keyboard
cursor control.  No more mouse requirement.  The last new feature in version
2.0 is the Help option on the menu bar.  You can choose no help, which is just
like version 1.0; beeps, which reprimands you with a beep if you try an
illegal move; or messages, which will beep and display a help message to tell
you what you are doing wrong.  I also improved the computer's play ability a
bit so experienced players won't beat the computer quite as often.

How to play Mile Bones:
    Mile Bones is a Windows card game which simulates a driving trip.  The
object of the game is to be the first to reach 700 miles (or 1000 miles under
an extension).  There are four types of cards that make up the 101 card
deck:

Mileage Cards:
     These come in five distances:  25, 50, 75, 100, and 200 miles.  Playing
these (when you can go) will increase your total mileage.

Hazard Cards (also called "dirt"):
     The five hazard cards are Out of Gas, Flat Tire, Accident, Speed Limit,
and Stop.  You can play these on the computer (if you have them) to hinder the
computer's progress towards the 700 or 1000 mile goal.  Of course, the
computer can do the same to you!

Remedy Cards:
    These are used to counteract the Hazard cards the computer plays on you
(or vice versa).  The five cards are:  Gasoline, Spare Tire, Repairs, End of
Limit, and Go.  These cards are only temporary; if you use a Go to remove a
Stop, the computer can play another Stop on you.

Safeties:
     In contrast to the above, Safeties counteract Hazards permanently (well,
at least until the current game ends).  Unlike Remedies, Safeties can be
played at any time, whether or not a hazard has been played on you.  If you
are lucky enough to get and play all four Safeties (Extra Tank, Puncture
Proof, Driving Ace, and Right of Way) you will be unstoppable!

How many of each card are there?
     Safeties:   1 Extra Tank       1 Puncture Proof
                 1 Driving Ace      1 Right of Way

     Remedies:   6 Gasoline         6 Spare Tire
                 6 Repairs          6 End of Limit
                14 Go

     Hazards:    2 Out of Gas       2 Flat Tire
                 2 Accident         3 Speed Limit
                 4 Stop

     Mileage:   10 25mile          10 50mile
                10 75mile          12 100mile
                 4 200mile

Playing the Game:
     When you first start the game up under Windows, you will see three rows
of rectangles.  These are places where cards will either be placed, picked up,
or displayed.  

    The first two rows of rectangles deal with the human player (that's you!).
The leftmost rectangle in the top row is your Battle pile.  This is where you
will play a Go to start the game, where the computer will play Hazards, and
where you will play Remedies or Safeties.  To the right of that is the Speed
Limit rectangle.  The computer plays a Speed Limit here, and you play the End
of Limit card (if you have one) to remove the Speed Limit.  The four
rectangles to the right of this are where your Safeties, if any, will be
shown.  (However, you play all Safeties onto the Battle pile, not here.)  The
next rectangle to the right will contain the number of miles you have played.
This is where you play mileage cards.  Finally, the last rectangle in the top
row is the Draw deck.  At the start of your turn, you can move the mouse
cursor over this and click the left mouse button to add a card to your hand
(assuming the deck isn't empty).  Those without a mouse can use the arrow keys
to move the cursor, and the spacebar or the Enter key to select with.

    The first seven rectangles in the second row represent your hand.  At the
start of a turn, you will have six cards.  Once you draw a card, you must
either play or discard a card to end your turn.  To play a card, first move
the cursor over the card and click the left mouse button.  This will select
the card.  Now you can either click on another card in your hand (to select it
instead), or on one of five other places (described either above or below) to
play the card, or on the Discard Deck to the right of your hand to throw the
card away.

    The last row of rectangles is identical to the first, except that it shows
the computer's Battle, Speed Limit, Safeties, and Miles played.

Where can a card be played?
    It depends on what card you have selected.  If you want to play a Speed
Limit on the computer, click on the computer's Speed Limit rectangle (the
second card from the left on the bottom row).  You cannot do this if the
computer has a Right of Way displayed, or already has a Speed Limit.  All
other "dirt" can be played on the computer's Battle pile to the left of the
Speed Limit pile.  Again, you will not be able to do this if the computer is
already stopped or has a Safety that protects against the Hazard you are
trying to play on it.  You play Safeties and Remedies on your Battle pile, End
of Limit cards on your Speed Limit pile, and Mileage on the Mileage pile.
(Pretty simple, eh?)

When can a card be played?
    This is a bit more complex.  At the start of the game, you must either
play a Go or Right of Way on your Battle pile before you can play any mileage.
(This is true throughout the game; you can only play mileage if you have a Go
or Right of Way.) Also, only two 200 mile cards can be played in a single
game, and if you are under a Speed Limit, you must play mileage of 25 or 50
only.

     Remedy cards can only be played when the computer has played a Hazard on
you.  Once this is done, you can then play a Go on top of the Remedy to
continue playing mileage.  If you have previously played a Right of Way,
however, you can play mileage right away (Right a Way?).  Note that a Right of
Way can also remove a Speed Limit or protect you from one, but still should be
played on the Battle pile (not the Speed Limit pile) to do this.

    You can play a Safety card whenever you want.  If you play one during your
turn, you get another turn before the computer does.  In a special case, you
can also play a Safety before you have even drawn a card.  This is called a
Coup Fourre (or counterattack in English).  If the computer plays "dirt" (a
Hazard) on you during its turn, you should not draw a card at the start of
your turn, but instead select the correct Safety (an Extra Tank to counter an
Out of Gas, for example) and play it on your Battle pile.  This will net you
400 points (instead of the standard 100 for playing a normal Safety).  You
will automatically be given two cards off the Draw Deck (if it isn't empty)
and it will still be your turn.  You will see a red outline around the Safety
when it is displayed on the screen.  The computer can also do a Coup Fourre,
so be careful.

What is an Extension?
    When you have played exactly 700 miles (you cannot go over) the computer
will ask if you wish to extend the game to 1000 miles.  If you answer No, you
will win the game. If you answer Yes, you must play to exactly 1000 miles
before you win the game (and the computer might just beat you to it).  Winning
the game on an Extension will add 200 points to your score.  

End of Game:
    The game will end if either you or the computer reaches 700 or 1000 miles.
However, if neither player can finish, the Draw Deck will run out.  You must
then play whatever cards you can and discard the rest.  When your hand is
empty, the game will be over.  (If you manage to reach 700 or 1000 miles after
the deck runs out, you earn 300 points for Delayed Action.)
    
     Once the game is over, you will see the scoring dialog box. Most of the
items in this list are easy to understand or have already been explained, but
here are are some extra details. Trip Completed means that you reached the 700
or 1000 mile goal first (you won the game).  Shutout means the computer (or
maybe even you) played no Mileage cards during the game.  The other player
earns 500 points for this.  If you win and did not play any 200 mile cards,
you get 300 points for a Safe Trip.

    The Grand Total shows the total score from previous games, until either
you or the computer (yes, this does happen) reaches 5000 or more points.  Then
the Grand Total resets to 0.

    If you have any questions, suggestions, or comments about this game, feel
free to write me at the address below.  Also, if you really enjoy the game and
play it more than a few times, feel free (better yet, feel obligated) to send
money.  $10 is the minimum suggested amount.  This will register you as an
owner of the program, and you will receive news of any new versions of the
software, any bugs, etc.

Thank you for supporting shareware!

Andre Needham
P.O. Box 2516
Renton, WA  98056
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3230

     Volume in drive A has no label
     Directory of A:\

    MB       EXE    125952  10-16-90  10:34p
    MB       DOC      1225  10-20-90   9:01p
    MB2      DOC      9158  10-20-90   9:01p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       847  12-19-92  12:10a
            5 file(s)     137220 bytes
                           22016 bytes free
