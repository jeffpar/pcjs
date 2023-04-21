---
layout: page
title: "PC-SIG Diskette Library (Disk #3538)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3538/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3538"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
900 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'INSTALL' at
the DOS prompt.  We've included all the tools you need for fast easy
access to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.  All the programs are logically divided into thirteen
major categories with subcategories, making it easier to find just the
right software.

All of the programs have been scanned for viruses.  There are also three
online virus utilities that can be run from the CD-ROM which will scan,
screen and clean viruses.  Not only does this save hard disk space, but
also gives every user added security from viruses.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

Additional BBS file descriptions are available from PC-SIG so that the
CD-ROM can be set up quickly on a bulletin board.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 530K memory DOS 3.1 or higher and
a graphics monitor (Hercules/EGA/VGA/SVGA).  A mouse is optional.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed by title, filename, PC-SIG disk
number, and every word in the program description.  A new utility, Narc,
is implemented so you can look at the program files and the author's
on-line documentation without having to first copy the program to your
hard disk.  By using WordCruncher and Narc, you can quickly find the
program you want and review it to be sure, without ever having to run it
from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.


                      The PC-SIG Games CD-ROM
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you can play a game a day fo over a year.  This CD-ROM is jammed
with over 380 shareware games of all types, designed to appeal to the
new generation of CD-ROM users out for fun.  The CD incorporates a
hypermedia interface and allows 250 of the games to be played directly
from the CD-ROM.

The hottest games in shareware are on this disk, including the
action/arcade games "Jill of the Jungle" and "Wolfenstein 3D," which
rival or surpass commercial PC and Nintendo for use of animation,
SoundBlaster audio, and VGA graphics.  There are also games designed to
teach children mathematics, spelling and even ecology.  All these games
for less than a dime each!

Over 250 of the games can be played directly from the CD without copying
them to a floppy or a hard drive.  Being able to run from the CD means
that users can explore games without using up valuable hard disk space
or spending time downloading and deleting files.  The hypermedia
interface makes it easy to browse the titles, read a one line
description or full review, and copy or start a game by clicking the
mouse or using the keyboard.


To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## CSHEARTS.DOC

{% raw %}
```
                            CardShark-Hearts(tm)
                                Version 3.9

                       Copyright 1992 Nelson Ford, PsL


New with version 3:
  Selectable playing styles for your opponents. (See 6d.)
  Sounds!  (See 7f.)
  Deduct-Shoot option. (See 7e.)

New with version 2.0:
  "Duplicate" play and scoring. (See 7d.)



   Contents:

1. Copyright, Trademark, Use & Distribution License
2. Installation
3. Overview of the Game
4. Mechanics of Play
5. Rules of Play
   5a. Passing
   5b. Playing
       - automatic "cash-in"
6. Strategy
   6a. Ganging Up on the Low Hand
   6b. Stopping the Shoot
   6c. The Worst Way to Stop a Shoot
   6d. The Computer Hands
   6e. "Panic" Mode
7. Options
   7a. AutoPlay
   7b. Deal # Prompt
   7c. Pause
   7d. Duplicate Play
   7e. Deduct Shoot
   7f. Sounds
   7g. Card Backs
   7h. Game Goal
   7i. Hide Scores
   7j. Change Scores
   7k. Zero Game Score
8. View
   8a. Documentation
   8a. All Hands
   8b. Game Record
   8c. Last Game
   8d. Edit INI File
9. Quit
   9a. Deal
   9b. Game
10. Zip
11. Hint
12. Pass <Direction>
13. How The Computer Plays
     - No Cheating
14. Reporting Problems
15. Association of Shareware Professionals
16. Benefits of Registering
17. Order Form



1. Copyright Use & Distribution License:

You should have received this program free from a friend or BBS or for a
low fee through a shareware disk vendor for evaluation purposes only. You
may use the program for a reasonable evaluation period. Payment to the
author of the program is required for use beyond simple evaluation. See the
order form at the end of this file.

This program may be copied for others to try, so long as no changes are
made to the program nor any of the accompanying files, including this one,
and ONLY if you write to the author for permission. Vendors who are current
members in good standing of the Association of Shareware Professionals must
still notify the author that you are distributing the program, but you do
not have to wait for permission to begin distribution.

VENDORS and BBS's must agree to stop distributing this program when requested
or automatically if your membership in A.S.P. is dropped for any reason.

CS-Hearts is written in Visual Basic. The Visual Basic runtime module,
VBRUN100.DLL, is Copyright by Microsoft Corp.

VBCARDS.DLL, which contains the card faces and backs, was written by
Richard R. Sands and is public domain. Programmers wanting to use this DLL
in their own card games may contact Sands on CompuServe: 70274,103.

CARDSHARK HEARTS and the CARDSHARK card game name prefix are trademarks
of Nelson Ford, PsL.



2. Installation

CS-Hearts requires Windows (3.1 for sounds) and is written for VGA color,
although it may be possible to use it on EGA. (If you still have EGA, you may
want to consider getting a SuperVGA card, which is less than $100.)

You can put the CS-Hearts files in any directory; HOWEVER, the VBCARDS.DLL and
CTLHWND.DLL files should be copied to some directory in your PATH, such as
your Windows directory. If you already have a VBCARDS.DLL in your Windows
directory, compare the size, date and time of that file to the one in this
package. If they do not match, you may have to remove or temporarily rename
the other file to use this one. You might try running CS-Hearts before doing
so to see if it works with the files already in place.

CS-Hearts also requires VBRUN100.DLL. VBRUN is used by dozens (maybe hundreds)
of pd/shareware programs and is widely available. If you already have VBRUN,
you do not have to do anything else. If you do not have it, you can get it
from the address at the end of this file by sending $4 to cover shipping and
handling to the address on the order form at the end of this file. You can
also download it from CompuServe. GO MSBASIC, enter DL-5 at the Forum prompt,
and BRO VBRUN*.* to find it. VBRUN100.DLL must also be in your Window's
directory or other directory in your PATH.

After copying the CS-Hearts files to the directory of your choice, use Program
Manager File-New menu options to add CS-Hearts' EXE file to one of your
Program Groups, if you wish to have it readily available. Otherwise, you can
run it with the File-Run option of Program Manager.

Sounds:

The Sounds will play through your PC's speaker if you have the Windows 3.1
sound driver installed. The quality will vary from poor to zilch. To enjoy the
sounds, you really need a sound card with DAC support. These cards range from
Thunderboard for Windows (about $110) to Media Vision's Pro-16 (about $229).

Colors:

If you have selected one of the alternative system color setups from the
Windows Control Panel, CardShark Hearts may not display properly. There is
nothing I can do about this. Try changing the colors back to "Windows
Default".


3. Overview

Hearts is an addictive and interesting four-handed game (no partners). You
play one hand and the computer plays the other three hands individually.
"Individually" means that the computer does not "cheat" -- it does not look
into other hands or play any differently against the human opponent than it
does against the other computer hands.

While there are MANY variations of the game of Hearts, the variation and rules
used in this program are the most popular ones.

The goal in Hearts is to have the low score. You get one point for each Heart
that you take and 13 points for the Queen of Spades ("QS"). Since you want to
have the low score, the goal is to avoid taking Hearts and, at almost all
costs, avoid taking the QS.

One exception is that if you take the QS and all 13 of the Hearts, each of
your opponents gets 26 points. This is called Shoot the Moon ("Shoot"), but it
is difficult to do if playing good opponents. (It is very easy to end up with
25 points against you rather than giving everyone else 26 points, and a 51
point swing is difficult to overcome in a game to 100.)

Alternatively, if you Shoot, you can elect to have 26 points deducted from
your score rather than added to everyone else's. Be sure to select this option
from the "Options" menu before the final trick of your Shoot.

If another player's score is more than 26 points below yours, the program will
automatically deduct the 26 points from your score whether you have selected
that option or not. This reduces the chance that someone else will go over 100
while another opponent is still below your score.

Unlike Bridge, Spades, and other games, there is no "trump" in Hearts. The
high card played in the suit led always takes the trick.

You can elect to play to any number of points, but the default is 100. When
one player goes over 100, the person with the lowest number of points at that
time is the winner.

I wrote CardShark Hearts out of frustration with the weak play of existing
Hearts games. In writing it, I gained a deeper respect for the problems faced
by the authors of the other games. Although tests have shown that CardShark
Hearts can beat the other games, it is a long, long way from the
sophistication that I had hoped to attain when I started this program.

On the other hand, does anyone really want a game they can't possibly beat?

Well, as improvements to the program are made, the Shark gets stronger, so I
have added some other players whose style and abilities differ from the
CardShark's. You can read about them under "6d. The Computer Hands."


4. Mechanics of Play:

A mouse is required to play CS-Hearts. In normal play mode (ie: not AutoPlay),
cards are selected to pass or play by clicking on the card, then clicking the
Ok button. At the end of each trick, also click the Ok button when prompted.

When you click on the card, it will rise up above the rest. If you change your
mind before clicking on Ok, simply click on the card again to lower it.

While it is a very minor (in my opinion) nuisance to have to click on the Ok
button in addition to clicking on the card, I think it is worthwhile, based on
my experience with other card games that give you no way of correcting an
accidental selection or that make the confirming action so easy that you
automatically blow by it.

I have several times been in the middle of a good game in other Hearts games
and ruined it by accidentally clicking on the the wrong card.

To make it easier to click the Ok button, the program will move the mouse
cursor to the button each time you are supposed to click it. The cursor
will return to the cards after clicking Ok.



5. Rules of Play:

There are two parts to the game of Hearts: Passing and Playing.


5a. Passing

After each of the four hands is dealt 13 cards, you must select three cards to
pass to an opponent. The passing direction rotates on each deal: to the right,
across, left, and no-pass ("hold"). Some people play other passing patterns,
but this is the most widely used one.

Cards are passed face-down, so the other players do not see what you are
passing.

Selecting the three cards to pass is at least as important as the actual play
of the hand, if not more so. For example, if you are dealt the lone Queen of
Spades ("QS") and do not pass it, then the first time spades are led (and the
other players WILL attack spades right away), you will be forced to play it.
The other players will play low (if they can) and force you to win the trick,
thus taking 13 points.

Novices are often afraid to ever hold onto the QS, but you normally will want
to hold it when you can adequately protect from having it led out of you.

Holding the QS gives you two advantages: nobody can drop it on you, and you
can choose whom to drop it on -- normally the person with the lowest score.

How many spades is considered "adequate protection"?  You will find that out
through experience. (I don't want to spoil all your fun!)

Other considerations include passing low cards so that you can Shoot, passing
low Hearts to keep other players from Shooting, and so on. Again, experience
is the best teacher, but when you register CS-Hearts, the manual you get has a
section that tells you how to get the most out of your passing game.

In addition, you can use the Hint and Duplicate Play options to see how the
computer would pass and play the cards you are dealt. This is also a good way
to learn.



5b. Playing

The person with the Two of Clubs starts play by leading it. Play goes
clockwise and each player must follow suit, if possible.

You can play the QS or a Heart at any time that you cannot follow suit, except
that you cannot LEAD a Heart until they have been "broken". Hearts are broken
when someone discards a Heart or the QS. Other than that, you can lead any suit.
You CAN lead the QS before Hearts are broken, if you want to.

Some people play that if you only have Hearts and the QS left, you must lead
the QS. In this game, you can lead a Heart if you wish. Also, some people play
that you cannot play the QS on the first trick; in this game, you can.

There are numerous other variations on the rules of the game, but the rules
followed in CS-Hearts are the ones normally used. My inclination is not to
muck up the game with such variations, especially since it is so difficult
to perfect the play of the computer with standard rules.


Automatic Cash-In:

At the end of each Trick, the program checks to see if all the points have
been played or if the person with the lead has all winning cards left. If
either of these is true, the program stops play, displays the remaining cards,
and in the latter case, gives the remaining points to the person with the
lead.

After all, if all the points are in, there is no reason to continue play.
And if the person with the lead doesn't have a card left that is lower than
those held by the other hands, there is likewise no point in playing it out.
(Yet CS-Hearts is presently the only Hearts game that offers this feature.)

One exception is that if only one trick is left, the program will not cash in,
since it is usually faster just to play the last trick.


6. Strategy

The manual you get when you register contains many tips on playing. You do
NOT need these tips to play and enjoy the game, but they can help you win
more, both against the computer and against human opponents. Here are a few of
the more important ones:


6a. Ganging Up on the Low Hand:

One basic strategy is that if you are holding the QS with sufficient protection
for it, then you should not just throw it at the first opportunity. Instead, try
to give it to the low hand (assuming one player's score is at least 13 points
lower than the others).

If you are low scorer, then

- If someone else is within 13 points or so of your score, try to give QS to
  them. If more than one player is within 13 points of your score, give it
  to the first one of the two hands that you can.

- If you can give the QS to a hand that will then go over the Goal, do it.
  (Remember to do this only if YOU have the low score, obviously.)

- If everyone's score is well above yours, dump the QS on the first person you
  can. There is no point in taking risks in that situation.

Even if you do not hold the QS, you may be able to control who gets it. If you
are leading Spades, for example, and have enough Spades to force the QS out of
the hand holding it, but that hand is not the one you want to get the points,
then try leading a suit in which you have a lot of cards with good low ones to
give the other player a chance to dump the QS on someone else. You may not want
to risk this unless you have a very safe hand (ie: low cards in every suit).



6b. Stopping the Shoot:

Although taking the QS is costly, it is TWICE as costly to let someone shoot, so
stopping the shoot is an important part of your strategy.

One way is to try to discard Hearts when you cannot follow the suit that has
been led, trying to give a Heart to two different players ("splitting" Hearts).
Until Hearts have been split, you should not discard your highest Heart, since
you may need it to stop a Shoot. Once Hearts are split, discard your highest
Hearts.

Another way is to try to take a trick that someone has discarded a Heart on,
if Hearts haven't already been split. Novices are often afraid to take even a
single point, but taking one point is a cheap way to insure that nobody else
can Shoot and give you 26 points.

Once someone takes the QS, you should not rest easy until someone else has taken
a Heart; otherwise, there is a risk that the person could Shoot. Because the
penalty for allowing someone to shoot is so large, it is worth taking a few
Hearts to prevent it, if necessary.

If the computer detects that you are always playing low on Hearts when you could
play high and stop a Shoot, then the next time, it may play low too, and the
other hand could get away with Shooting and you will lose, so don't just rely on
the computer hands to stop other computer hands from Shooting.

However, if the hand on your right leads, say, the Four of Hearts and you have
the Two and the Three in addition to some higher ones, it is usually all right
to play low, since there is a strong probability that one of the other hands
will be forced to win the trick.

If the hand on the right leads, say, a Ten of Hearts and you have a higher one
and don't play it and the other hands cannot beat it, that may have been the
leader's only losing Heart and he may Shoot.

As you can see, stopping the Shoot is a major part of the game.


Change in Strategy:

CS-Hearts was originally written to ALWAYS take the first Heart led when the
hand leading the Heart is the only one with points so far. This gave maximum
protection against a Shoot and at worst, cost only 4 points.

However, many people have suggested that this makes it too easy for someone
who has taken a point to get rid of a high Heart by leading it and, in fact,
the computer hands use this strategy to get rid of high Hearts.

So by popular demand, the computer hands will duck a Heart lead a certain
percentage of the time. However, there are many times when taking the Heart is
good strategy apart from stopping the Shoot. So don't count on the computer
hands ducking!


6c. The Worst Way to Stop the Shoot:

...is to take the QS. Say that someone has taken all the hearts and the only
points left are the 13 assigned to the QS. Whether or not you should take 13
yourself to avoid having to take 26 (along with everyone else) has to be decided
by the score situation.


6d. The Computer Hands:

Poorly written Hearts games are frustrating, because one computer hand may
make bad plays that let another computer hand win. It doesn't matter how good
a player you are if the program is so poorly written that one computer hand
gives the game away to one of the other computer hands.

A common flaw is for one hand to Shoot when Shooting lets another hand win the
game. PsL Hearts' computer hands are designed not to try to Shoot if doing so
will let another computer hand win. For example, say the scores for the hands
are:

#1 - 80  (you)
#2 - 90
#3 - 50
#4 - 70

Some computer Hearts games would let player #2 Shoot the Moon. This would cause
you to lose, but player #3 would be the winner since adding 26 to his 50 points
would still leave him low hand. So in this case, player #2 would not try to
Shoot in "real life", since the object is to be the low scorer when someone else
goes over 100.

However, if player #4 Shoots, he would win the game, since his 70 points would
be low after adding 26 to everyone else's score. And of course, player #3 would
be happy to Shoot.

In fact, player #3 would make no attempt to stop players #1 and #2 from
Shooting, since he wins if they Shoot!

[Note: Now that Deduct Shoot is available, the computer WILL try to Shoot
       in the above situation, since the Shooter can deduct the points.]


For Variety:

There may be times when you would like a little variety or just don't want to
play the strongest possible play of the computer. For example, a beginner or a
child may get discouraged at losing to the computer all the time and would
prefer someone of their own skill level.

Or you may just want to see how well other playing strategies work. Using the
drop-down list boxes, you can select a different playing style for each hand
or the same style for each hand. (Try playing against three Vicious Vickys and
see how you make out.) You *can* change the playing style at any time during
play, but the effects may be bizarre. I recommend NOT changing during play.

In the Duplicate or Auto-Play modes, you can even choose a different style for
Hand #1.

The playing styles at the start of the game are recorded in the Game Record
as are any changes to the playing styles during the game.

If you really like surprises, let the computer pick opponents for you by
selecting "Mystery Guest" from the list. Just like in real life, it will be up
to you to figure out each opponent's style and adjust your play accordingly.

Here are the available players (sorry for the goofy names):

Novice Nellie - she has trouble keeping track of the cards that have been
  played. She sometimes passes low Spades. She should be pretty easy to beat,
  but sometimes it doesn't work out that way. Try playing a few games against
  three Novice Nellie's.

Fraidy Frank - is afraid of holding high Spades or Hearts and afraid to take
  a trick if it can be avoided, even if it looks like someone is Shooting,
  and he's afraid to try to Shoot, himself. Fraidy Frank *is* easy to beat.

Cautious Cal - like everyone except Novice Nellie, Cal remembers everything
  that's been played. He won't try to Shoot if it looks at all risky, and
  he will always take a trick (even the QS) to stop a possible Shoot.

The CardShark - The Shark and Cal are about equal, but The Shark is more
  willing to take reasonable chances when he thinks they're called for.

Crazy Charlie - tries to Shoot whenever he can. He won't try if he is holding
  a lot of low Hearts, of course. (He's crazy, not stupid!)

Vicious Vicky - is out to get YOU! She'll try to stick you with the Queen
  and Hearts every time, even if it lets someone else win. She just wants
  to see lose! She won't stop anyone else from Shooting, but you. (Now what
  could you have done to make her so mad at you?)

Cheatin' Chuck - peeks at everyone's cards! He can't always remember who
  had what, but he usually knows who has the Queen of Spades. If you are so
  good that no computerized card game can give you a challenge, invite
  Chucky to play.



6e. "Panic" Mode:

The computer players are designed with a Panic Mode. Given the scores shown
above, if faced with either having to take the QS or having to let player #2
take it, player #4 would take it. Otherwise, #2 will "go out" (get over 100
points) and player #3 would win with the low score.

If #3's score were only a few points below #4's, and there are plenty of Hearts
left, #4 may let #2 take the QS in the above situation, hoping to stick #4 with
enough Hearts to make up the difference.



7. Options:

7a. AutoPlay:

The Computer plays your hand too. This is a good way to study the strategy.
AutoPlay should be selected at the start of the deal. It may not always
work otherwise.

When Duplicate Play is chosen (see below), AutoPlay is automatically toggled on
for the computer's turn.


7b. Deal # Prompt:

If you select this option, you will be prompted before each deal for a deal
number. This allows you to replay a particular deal, but please keep in
mind that to get the computer to play the same way again, both the
passing direction and the starting game scores must be the same as in
the original deal. To set the scores back, select Change Game Scores.

Whether you select this option or not, the deal number is at the start of
the game record, which you can view at any time. (See section 9.) It is
also displayed at the right of the menu bar.

Note that if you replay a deal, the score will still be added to the totals.
(The exception is if you replay the last deal, totals don't change.)
If you want the scores restored, look at the game record to see what
the scores should be, then use the Change Scores option, below.


7c. Pause:

Causes you to have to click the Ok button after each hand has played before the
computer goes on to the next hand. This is mainly of use when "View All Hands"
is on and you want to study the hands to see if you can figure out which card
the computer will play before it plays it.

It is interesting to turn on AutoPlay, Show All Hands, and Pause and see how
the computer plays each hand. (See Duplicate Play, below.)


7d. Duplicate Play:

Duplicate Play lets you compare your score to the score the computer gets when
it plays the same cards. When you select Duplicate Play, after you play each
hand, the hand will be dealt again, all hands will be displayed, AutoPlay will
be turned on, and the computer will play all positions.

After the computer is through playing the same hand you just played, your "Dup
Game" score will be increased or decreased by the difference in your score and
the computer's score on the same hand.

If either you or the Shark Shoots the Moon during their turn and the other
of you doesn't, the one who made it gets a 26-point bonus.

At the end of the regular game, the "Dup Total" score is increased by one if
you have outscored the computer in duplicate play (ie: "you done good") or
decreased by one if the computer outscored you for the game.

Note: I recommend using The CardShark as your opponent for each player in the
Duplicate mode. Some of the other playing styles have more randomness built
into their play and may not play the same against both you and the Shark.


Background:

In card games, luck can greatly influence the outcome of the game, particularly
when the skill of the players is very close. Bridge players have gotten around
this problem by devising a method of playing called "Duplicate".

In Duplicate Bridge, every pair of players plays the same cards that every other
pair does (basically). Your score for the tournament is not the sum of the
scores you get against the opponents at your table; instead, your score is
based on how the score you got against your opponents compares to the scores
that every other pair got when they played the same cards.

In Hearts, you may lose or win games because of bad luck in the lay of the cards.
By playing in the Duplicate mode, even if you get bad cards, you can still have
fun by seeing how your score compares to the computer's when it has to play the
same bad cards.


7e. Deduct Shoot

If you Shoot the Moon, you can elect to have the 26 points deducted from your
score instead of added to everyone else's. You must select this option before
the last trick is taken to be able to use it on the current deal.

If another player's score is more than 26 points lower than yours, this option
will automatically be selected.


7f. Sounds

If you have Sounds checked, you'll get various comments and sound effects
during the game. (Windows 3.1 required.)

Due to space limitations, we have only been able to add one sound file for
each sound category. Unfortunately, this gets old quickly and doesn't give
you a true feeling for the fun that a large variety of sound files can add.

If you register, you can get dozens (over 1.5 megabytes) of additional sound
files as part of the registration package. (These WAV files can also be used
as Windows 3.1 system sound files.)

If you are not ready to register but would like the complete set of sound
files to try, you you can get this multi-disk set of WAV files with the order
form at the end of this file.

You can also add wave files of your own. Many BBS's and shareware vendors
have WAV files for Windows 3.1. You can add them to your CS-Hearts directory
with the appropriate name and sequence number.

The category names are self-descriptive: CardUp, Hello, Hrt2Me, Hrt2U,
IWon, UWon, OK (response to menu selections), QS2Me, QS2U, QSPlayd and
Quit. Do a directory listing of the *.WAV files in your CS-Hearts directory
and you will see each of the names above with an ascending number at the
end of the file names for each groups, such as Quit1.Wav through Quit9.Wav.

To add another "Quit" sound, rename you WAV file to "Quit10.Wav". This is an
example. Do not rename a file to Quit10.Wav unless that is the next number in
sequence in your CS-Hearts directory.

Another example: If Ok1.Wav and Ok2.Wav are in the CS-Hearts directory, and
you want to add another "Ok" response, you would rename your WAV file to
"Ok3.Wav".

Preferred Sounds?

If there are some sounds you prefer to hear less often than others, you can
make more copies of the preferred sounds. For example, if you have sound files
Hrt2Me1.Wav through Hrt2Me6.Wav and you get tired of hearing Hrt2Me3.Wav, make
extra copies of some or all of the other files. Eg: COPY HRT2ME1.WAV
HRT2ME7.WAV, being sure to keep the ending filename numbers in sequence.

If you want to delete Hrt2Me3.Wav completely, you can do so, but remember to
rename the LAST file in the series (Hrt2Me6.Wav, in this example) to the
missing number. Eg: REN HRT2ME6.WAV HRT2ME3.WAV. If there is a gap in the
numbering sequence, the program will not see the files past the gap.

If for any reason you want to remove one category of sound entirely, such as
the CardUp sounds, just delete the category's WAV files: DEL CARDUP*.WAV or
you could rename them if you just want to quiet them temporarily:
REN CARDUP*.WAV CARDUP*.TMP and rename them back if you change your mind.

Some other sound files you may have received include: CLOSE (when a card is
deselected and lowered), NO-GOOD (when you don't follow suit), JAWS (the
intro music), LOG1 & LOG2 (when you open the game records), and TIED1 (when
you and the Shark tie in Duplicate mode).


7g. Card Backs:

Lets you toggle through the available decorative card backs.


7h. Game Goal:

Lets you change the score to which the game is played. Default is 100.


7i. Hide Scores

Some people prefer to play by rules that do not allow you to see the
scores (mainly who has already taken Hearts) during play. This menu item
will toggle the score display off and on.

Scores will be displayed at the end of each hand, even if the score box
is toggled off during play.


7j. Change Scores:

Lets you change all the scores. When replaying a deal, to get the computer
to play the same, the scores must be changed to be the same, as well as
setting the passing direction to be the same.


7k. Zero Out Scores:

This will zero out the current game scores, allowing you to start a new game.



8. View:

8a. All Hands:

This is a good way to learn the game or to study the computer's strategy.
Like the other options, it can be toggled on or off at any time, so you could
turn it on if you feel a need to see the other hands for some reason, then
turn it back off.


8b. Documentation:

Notepad is brought up to display the documentation file. If you do not have
Windows Notepad in your Windows directory, this option will not work. You can
use any word processor to view these files.


8c. Game Record:

At any time during the game, you can use this menu option to view a record
of the current game. (The Window's NOTEPAD.EXE program is required, or
a substitute editor of the same name.)

The current game record, is stored in CSHEARTS.TMP and the prior game
is in CSHEARTS.BAK.

In the Duplicate Play mode (see 7e, above), the Computer's deal record is
appended to the end of yours.

You can use Notepad to view, add comments to, and print the game.
You can also save it permanently by using the File-Save As menu in
Notepad.

You can view a game record with "View - Game Record" up until the passing
has been done for the next game. Then it is copied into CSHEARTS.BAK (which
you can view with the "View - Last Game" option) and the new game is
written to CSHEARTS.TMP.


8d. View the Last Game:

Lets you view the prior game's record. See comments above.


8e. Edit the INI File:

Program parameters are stored in the file CSHEARTS.INI, which should be in
your Windows subdirectory. By selecting this option, the INI file will be
brought up in Notepad so that you can change any parameters you wish. You
should rarely need to do this, but the option is there.



9. Quit:

9a. Quit Deal:

This allows you to abort play and get a new deal. If you have the
Deal # Prompt turned on, you could enter the same deal number again
to start the same deal over. If you replay the last deal, the resulting
score is not added to the game score. If you replay some other deal,
the score WILL be added to the game score. If you do not want it added,
you will have to use the Change Scores option to change it back.

If you are trying to replay another hand, keep in mind that the scores
and passing direction influence the play of the computer, so you should
use Change Scores to set the scores to their starting values of the hand
to be replayed before beginning play.



9b. Quit Game:

This quits the game of Hearts completely. The game-record files remain on your
disk in the files CSHEARTS.TMP and .BAK and you can view those with Notepad.




10. Zip


This option will cause the program to zip straight through a deal without any
pauses until the end. It plays all four hands. This can be used to generate a
game record for a particular deal number.

Zip can also be used during the Computer's turn at Duplicate Play if you are
not interested in studying the play of the computer and just want to generate
its scores.

This option is turned off at the end of each deal to prevent unintentional
playing into the next deal. If you turn on Zip during Duplicate mode, it
will cut off at the end of the computer's turn and turn itself back on for
the computer's next turn.

When on, "Zip" appear as "ZIP" on the menu bar. Click again to turn Zip off.




11. Hint

If you would just like to see what the computer would play or pass in a
particular situation, click on Hint on the menu bar.

The card that the computer selects will pop up. You can put it back in
your hand by clicking on the card, then click on the card you want. To accept
the computer's suggestion, click the Ok button.

You cannot ask for a hint if you have already clicked on a card to raise it
up.



12.  Pass [direction]

This menu option indicates the direction of passing for the current deal,
and clicking on it cycles through the passing directions. If you are
playing over a particular deal number, you may need to use this option to
set the passing to the proper direction.

In particular, if you replay a deal that you just finished (say, to see how
the computer does in comparison to how you did), you must make sure that
the direction of passing is the same.



13. How The Computer Plays

While chess games on the computer have attained Master strength, card
games such as Bridge and Hearts have remained relatively weak.

CS-Hearts is stronger than other shareware Hearts games, but it still
has a lot of room for improvement in playing strategy.

CS-Hearts' main strength is that it never forgets what has been played.
It usually knows (statistically) the best time to play a high card or a
low card.

However, what makes card games both interesting and difficult to program is
that what's statistically correct can backfire at times, which can make the
game look really stupid, when it really has chosen the correct line of play.

The game's main weaknesses are that it is not programmed for every possible
situation that can arise, nor does it attempt to make inferences about
card holdings based on how other hands play.

For example, with scores about even, if a hand doesn't follow suit on the
first trick, nor does it play the QS, it is probably safe to assume that
the hand does not have the QS, but the program does not try to make such
assumptions. (As a matter of fact, other shareware card games, against
which CD Hearts was tested, seem to withhold playing the QS at times for
no apparent reason, so the assumption would be wrong in that case.)

This means that a human player with a good understanding of strategy and an
excellent memory for what has been played should be able to beat the game,
since you are better able to adapt to different situations as they arise.

It also means that like a human player, the computer may make a blunder
some times (not very often, hopefully). If you would like to help with the
improvement of this game, you can report blunders to me at the address on
the order form or via CompuServe.

To report gross playing errors, load the file CSHEARTS.TMP into NOTEPAD and
print it out, or send a copy of it to me on disk, or email it to me on
CompuServe. (See: "Getting a Record of a Hand.")

If you cannot do that, make a note of the Deal Number, the Passing Direction,
and the Starting Scores, as well as the version of the program you have.

If you are a registered user with the current version and report a gross
blunder or program error, you will be sent a corrected version for free.


No Cheating:

The computer plays each hand individually (except for Cheatin Chuck,
obviously). For each hand, a list is kept of the cards every other hand may
have and the play of each hand is based on its own list.

Since each hand removes the cards in its own hand from the list of cards
that other hands may have, and since it knows what cards it passed to
some other hand, each hand's lists of what the other hands may hold are
different from every other hand's lists.

When deciding what to pass or play for one hand, the computer never
"peeks" into the other hands.

In fact, when you register CS-Hearts, you will get as a bonus a special
one-hand version of the game that plays only one hand. You tell it what
cards have been dealt to it and what cards the other hands have played by
clicking on lists of cards.

I have used this special version of the game to test CS-Hearts against
other Hearts computer games. (Naturally, CS-Hearts beats them all!!)
When you register, you will also get a shareware disk with at least two
other (DOS-based) Hearts games and one other Hearts game for Windows by
other shareware authors. Under Windows, you can load another game and
the one-handed game at the same time and let the two games play.

You can also use the one-hand version of CS-Hearts to play against human
opponents.



14. Reporting Problems

CardShark Hearts is a very complex program that must allow for even the
most unlikely distribution of cards and plays. All known bugs have been
fixed and traps have been put in to try to capture and fix unknown bugs
on the fly.

However, if you do run into a problem of any kind, the most important
thing to do is View the Game Record as soon as possible. You can print
the record and mail it to me or email the file to me on CompuServe. This
will allow me to reproduce and fix the problem.



15. ASSOCIATION OF SHAREWARE PROFESSIONALS

The Association of Shareware Professionals (ASP) is an organization of
software authors committed to developing shareware as an acceptable
alternative way of marketing software.

The author, Nelson Ford, is a member (and one of the founders) of the ASP.
ASP wants to make sure that the shareware principle works for you. If you are
unable to resolve a shareware-related problem with an ASP member by contacting
the member directly, ASP may be able to help. The ASP Ombudsman can help you
resolve a dispute or problem with an ASP member, but does not provide
technical support for members' products. Please write to the ASP Ombudsman at
545 Grover Road, Muskegon, MI 49442 or send a CompuServe message via
CompuServe Mail to ASP Ombudsman 70007,3536.


15. Benefits of Registering

As with all shareware, if you use this program beyond a reasonable evaluation
period, you must pay for it by registering with the author to be legally
licensed to use it.

In addition, registration brings with it other benefits:

   - the latest version
   - printed manual with passing and playing tips
   - bonus disk with more Hearts games & One-Handed Hearts
   - option to get sounds disks at reduced rate
   - discounts on other materials

I play this game almost every day. If I find a weakness during play, I correct
it. So the game is constantly being improved. Except for major bug fixes, I
will release new versions only on a quarterly basis, since any more often than
that tends to cause problems for most shareware vendors and BBS's.

But when you register, you will, of course, be sent the latest version. If
you would like a shareware copy of the latest version, you can get it by
using the order form at the end of this file.

When you register, you will also receive a printed manual with a section
on how to win at Hearts. There is a lot of strategy involved in passing
and playing Hearts, and this booklet explains it in a clear and concise way.

Bonus Disk:

In addition, registration gets you One-Handed Hearts, designed for playing
one hand against unknown opponents.

Sometimes if the cards aren't going your way, you may start thinking that the
program is "cheating". Since you only tell One-Handed Hearts (which uses the
same algorithms as CardShark Hearts) which cards it has been dealt and which
have been played by other hands, there is no way for it to cheat.

We use this one-handed game to test the passing and playing algorithms
against other card games. We will also give you a shareware disk with other
Hearts games on it that you can play it against. (These other shareware
games should be registered with their authors if you use them beyond
evaluation.)

Also on the Bonus Disk is a utility for changing Wallpaper in Windows 3.1. In
addition to being easier to use than the Control Panel, it lets you set a
timer for automatic changing of Wallpaper to add variety to your desktop!

Sounds Discounts:

If you do not have a large variety of WAV files, the sounds can get old
quickly. But if you DO have a lot of different sounds, they add a lot of
enjoyment to the game.

As explained in the documentation, you can easily add your own WAV files
to CardShark Hearts. However, for just $.50 a disk (when you register),
you can get disks full of WAV files especially selected for use with
CardShark Hearts. Of course, you can also use these sounds in Windows or
anywhere else you would use WAV files. They make great system response
sounds.

There are two four-disk sets available. For just $2 per set when you
register, you don't want to pass these up.

Other Discounted Offers:

When you register, we will also send you a free sample copy of the monthly
shareware magazine, PsL News. (Or you can call or write for a free copy
without registering.) If you register, you can subscribe to PsL News for
just $12 for a year; that's one-third off the regular subscription price.
John Dvorak said in PC Magazine: "PsL News pays for itself in software
discoveries...".

Registered users can also get one-third off the price of the PsL Source Book
and Reviews Disks. This 960-page book contains write-ups of over 7000 public
domain and shareware files. PC Magazine called it "by far the most thorough
and reliable guide to shareware and freeware anywhere." The five-disk Reviews
Disk set contains the same write-ups, but our masters are updated monthly.
(Free updates are available.) The price for the book and 5 disks is normally a
bargain at just $19.95, but registered CardShark users can get the set for
just $13.40 plus $4 shipping.



16. Order Form:

                       CardShark Hearts(tm)  Order Form
                       ================================

        Date: ____/____/____                              Version 3.9

        (PLEASE PRINT:)

        Name: _______________________________________________________

        Address: ____________________________________________________
        _____________________________________________________________
        _____________________________________________________________
        _____________________________________________________________

        To Register:
        ===========
          License Fee for 1 copy of CS-Hearts @ $25.00 ......  ______
            (Includes manual, latest CS-Hearts, Bonus Disk)

          Special Discount Offers For Registering Users Only:
            Sounds Set #1 (four 360k disks or a 1.44MB) @ $2.  ______
            Sounds Set #2 (four 360k disks or a 1.44MB) @ $2.  ______
            1 year subscription to the monthly PsL News  $12.  ______
            Source Book and Reviews Disks $13.40 ............  ______

        To Get Shareware Disks Only:
        ===========================
          Shareware copy of latest CS-Hearts @ $5.00 ........  ______
          Sounds Set #1 (four 360k disks or a 1.44MB) @ $6.99  ______
          Sounds Set #2 (four 360k disks or a 1.44MB) @ $6.99  ______

        Shipping & Handling on all orders....................    4.00

        Sales tax @ 8.25%, if shipped in Texas ..............  ______

                Total .......................................  ______

        Disk size preferred: __ 5.25"   __ 3.5" (1.44MB)

        Method of Payment: __Check/M.O. __Amex __MC __Visa __Discover

        Credit Card Information:  (PLEASE PRINT)    Expir.: ____/____

        Name on Card: __________________________  #: ________________

        Cardholder's Signature: _____________________________________

        Where did you get CS-Hearts? ________________________________

        Mail To:                        Or Call:

        Nelson Ford                             Orders:  800-2424-PsL
        PsL                                 FAX Orders:  713-524-6398
        P.O.Box 35705                     Tech Support:  713-524-6394
        Houston, TX 77235-5705          CompuServe Orders:  71355,470

```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 3500 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $14.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $7.00  ______

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

GAMES CD Amazing Disk - Amazing Price!                 $25.00  ______

*** PC-SIG Library on CD-ROM 12th Edition  ***         $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other shareware CD-ROM just           $59.00  ______

                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2351
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3538

     Volume in drive A has no label
     Directory of A:\

    CS-HRT39 ZIP    255275   3-19-93  11:00a
    SIGORDER TXT      3090   3-10-93   3:22p
    GO-FORM  DAT      3090   3-10-93   3:22p
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    PCSIG    TXT      2335   2-10-93   8:50a
    SHAREMAG TXT      1837   1-21-92   6:11a
    CDROM    TXT      4874   3-18-93   1:28p
    GO-STRT  DAT       551   3-31-93  11:09a
            9 file(s)     326452 bytes
                           30720 bytes free
