---
layout: page
title: "PC-SIG Diskette Library (Disk #714)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0714/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0714"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER DRAW POKER"

    Walk away from your next game a winner!  COMPUTER DRAW POKER is a fun
    and challenging program; an excellent way to increase your skill at
    poker.  It is played as five card draw poker with no requirements for
    opening bet and no limit.  Both the player and the computer start with
    1000 chips.  Each antes one chip before cards are dealt, and can raise
    the ante up to three chips per round.
    
    This program is both a player and a tutor.  It does not look at your
    hand to make its own playing descisions, and when it does check the
    cards you're holding, it doesn't remember them.  It checks your hand
    only to see that you are playing by the rules -- and tells you so when
    you're not.  It also tells you when to bet, see, raise, call, fold,
    discard, and draw.  The computer plays with a certain degree of
    sophistication and will bet high or low, as well as bluff, at random.
    When you can consistently beat the computer, you are playing with a
    good deal of skill.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES714.TXT

{% raw %}
```
Disk No  714
Program Title: COMPUTER DRAW POKER
PC-SIG version 2

    COMPUTER DRAW POKER is played with a 52 card deck, the jokers being
discarded. All players ante an amount which has been previously agreed
upon. The dealer shuffles, then five cards are dealt to each player, one at
a time, face down, in turn to the left of the dealer. After inspecting the
hand dealt him, the player to the left of the dealer can bet, raise, see,
or fold. A player sees a bet by matching it, in order to stay in the game.
After seeing a bet, a player can raise the bet, requiring all who want to
stay in the game to see the raise. Usually, seeing and raising are combined
as raising. Those not wanting to continue, fold and forfeit all amounts
bet. After all betting is complete and each remaining player has seen the
last bet, each player to the left of the dealer, can discard up to five
cards and draw new ones as replacements in order to better his odds of
winning. A player who discards none stands pat. When each player has drawn
or stood pat, the last starts a new round of betting. Play is finished when
all but one player have folded or when one player calls the bet. The player
with the highest hand wins the pot and becomes the dealer.

Usage: Entertainment/Novice Poker Players

System Requirements: 256K memory and one disk drive.

How to Start: Type POKER (press enter).

Suggested Registration: $4.95 and up for additional games.

File Descriptions:

POKER    EXE Main program.
POKER    TXT Documentation for POKER.
HELP     EXE Help for POKER.
MANUAL   BAT Prints documentation for you.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 714 COMPUTER DRAW POKER  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
║                                                                         ║
║ To start the program, type: POKER (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## POKER.TXT

{% raw %}
```
                               DRAW POKER 
     
     
          Poker,  known in some circles as "The Great American Game", 
     actually  originated  in the United States!  It  became  popular 
     among  the  Cajuns and French of New Orleans in the 1800's.   At 
     that  time  they called the card game "poque",  likely from  the 
     French  word  "pocher" meaning "to bluff".  As the  game  worked 
     its  way  north by way of Mississippi steamboats the  name  came 
     to  be known as "poker",  probably because of  mispronunciation. 
     Poker  is  loosely  based on card games which date back  as  far 
     as  the  fifteenth  century.  There are many  forms  of  today's 
     game including Spit-in-the-Ocean,  Criss-Cross,  Michigan, Base-
     ball,  High-Low,  Showdown  and  Stud.   But the most popular is 
     Draw Poker. 
     
     
                                THE GAME 
     
          Draw  Poker  is  played with a fifty-two  card  deck,   the 
     Jokers  being  discarded.   All players "ante" an  amount  which 
     has  been  previously  agreed upon.  The  dealer  shuffles  then 
     five  cards each are delt to the players,  one at a time,   face 
     down,   in turn to the left of the dealer.  After inspecting the 
     hand  delt him,  each player to the left of the dealer  receives 
     the opportunity to bet,  raise,  see, or fold. A player "sees" a 
     bet by matching it,  in order to stay in the game.  After seeing 
     a bet,  a player may "raise" the bet,  requiring all who wish to 
     continue  to  see the raise.  Usually,  seeing and  raising  are 
     combined as raising.  Those not wishing to continue,  "fold" and 
     forfeit all amounts bet.  After all betting is complete and each 
     remaining player has seen the last bet, each player to the left, 
     in  turn from the last to see,  may discard up to five cards and 
     draw  new  ones as replacements in order to better his  odds  of 
     winning.    A player who discards none "stands pat".  When  each 
     player  has  drawn or stood pat,  the last to see  starts a  new 
     round of betting.  Play is finished when all but one player have 
     folded  or when one player "calls" the bet.  The player with the 
     highest hand wins the pot and becomes the dealer. 
     
     
                                 SCORING 
     
          There  are  no  points  awarded in Poker.   It  is  usually 
     played  with  money or chips representing money instead.   Hands 
     are valued from least to highest in order as follows: 
     
     High  Card: 
     The  highest  valued  card  held wins the hand.   Deuce  is  low 
     and Ace is high.  (If all cards in all hands match,  the highest 
     suit  wins.  Ace of spades is high,  then Hearts,  Diamonds, and 
     Clubs.  Lowest card is the two of Clubs.) 
     
     A  Single  Pair: 
     The  highest  valued pair wins.  Again,  Deuce low -  Ace  high. 
     To break a tie,  the next highest single card wins. 
     
     Two  Pair: 
     The  highest  combination  wins.   In the case  of a  tie,   the 
     next highest single card wins. 
     
     Three-of-a-kind: 
     The highest threesome wins. 
     
     Straight: 
     The  highest  five cards in sequence,  but not all of  the  same 
     suit...Ace  may  be  high or low to make the sequence.   Tie  is 
     broken by the highest high-card's suit. 
     
     Flush: 
     The  highest five cards held in a single suit.  Ties are  broken 
     as with the Straight. 
     
     Full  House: 
     The  highest  combination of Three-of-a-kind and a  Pair.   Ties 
     are broken by highest three-of-a-kind. 
     
     Straight  Flush: 
     The  highest five cards of a single suit,  in sequence.  Tie  is 
     broken by the highest suit. 
     
     Royal  Flush: 
     Ace,    King,  Queen,  Jack and Ten of a single  suit.   Highest 
     suit wins in case of a tie. 
     
     
                            LAS VEGAS DRAW POKER 
     
          Draw  Poker  as played in Las Vegas allows a draw  of  only 
     three  cards  and  requires that a player have a pair  of  Jacks 
     or better in his hand. Players not meeting this requirement must 
     fold and forfeit their ante,  which is usually a quarter. 
     
          The  maximum  bet in Las Vegas Draw Poker is  usually  five 
     dollars.    Raises  may  be considered as bets  or  may  not  be 
     specified, depending on the house. Most casinos allow only three 
     raises. Some, however, allow five before the player in turn must 
     see,  call or fold. 
     
                            USING THE KEYBOARD 
     
          VALUES:  2,3,4,5,6,7,8,9,1,J,Q,K,A.   SUITS: S,H,D,C.   "1" 
     is equal to 10. Press <ESC>, "Q", or Ctrl Break to Quit midgame. 
     
     
                           COMPUTER DRAW POKER 
     
          The  computer  game  is  played as  Five  Card  Draw  Poker 
     with  no  requirements for opening bet and no limit.   Both  the 
     player  and  the computer start with 1000 "chips".   Each  antes 
     one chip  before  cards are dealt.  Three raises per  round  are 
     allowed in the computer version of the game. 
     
          This  game  is  designed to allow the computer  to  act  as 
     both  tutor  and player.  It does not look at your hand to  make 
     playing  descisions  and  doesn't  remember  any  of  the  cards 
     in  your  hand  when it does check them.  It  checks  your  hand 
     only  to  see  that  you are playing the  game  properly.   When 
     you are in a rule-breaking situation,  it will display a message 
     to  help  you  to get it right.  It also  displays  messages  to 
     direct you when to bet,  see,  raise,  call,  fold,  discard and 
     draw.    The computer plays with a certain degree  of  sophistry 
     and will bet high or low,  as well as bluff, at random. When you 
     can  consistently  beat  the  computer you are  playing  with  a 
     good deal of skill. 
     
          After pressing <Q> to quit...enter POKER to play! 
     
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0714

     Volume in drive A has no label
     Directory of A:\

    FILES714 TXT      1734   5-12-88   4:01p
    GO       BAT        38   5-06-88   1:08p
    GO       TXT       540   5-06-88   2:07p
    HELP     EXE     22784   2-14-88  12:53p
    MANUAL   BAT       151   5-06-88   2:06p
    POKER    EXE     61440   2-14-88  10:05a
    POKER    TXT      6272   1-08-85   3:13p
            7 file(s)      92959 bytes
                           65024 bytes free
