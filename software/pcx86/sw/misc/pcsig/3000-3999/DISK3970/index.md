---
layout: page
title: "PC-SIG Diskette Library (Disk #3970)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3970/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3970"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FUTADD.DOC

{% raw %}
```
     
     Possible future additions to DOUBLES PINOCHLE include :
     
          - Make more of the rules changeable (Let me  
               know what rules you play by)
          
          - Animated players

          - Sound effects including background music 
               and digitized speech (sound cards)

          - Animation of card backs (ex. waterfall with 
               flowing water)

          - Multi-player game to be played via modems

          - Improved skill of computer players

     Let me know what you would like most and any other suggestions.
     For my address select 'shareware' under the 'help' menu in the 
     program or see the readme.doc file.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  PC-SIG Disk #3970 DOUBLES PINOCHLE  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Start the game, type: DPIN  (press Enter)                           ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.DOC

{% raw %}
```
          
          When using the keyboard, many of the selections are made  
     by hitting the key corresponding to the letter in yellow at 
     the beginning of a word such as hitting 'C' for CHANGE NAME.
          When using the mouse, most of the same selections can be
     made by moving the mouse pointer to the word and pressing the 
     left mouse button.
          
          The menu :  To get the menu to appear in keyboard mode, 
     press either Alt-H for Help or Alt-O for Options.  Then use 
     the up and down arrows to move the pointers, >   <, to  the 
     desired subtopic and press enter.
         To get the menu to appear in mouse mode move the mouse
     pointer to the top of the screen.  If you want Quit, press
     the left mouse button on Quit.  For Help or Options, move the
     mouse pointer to either Help or Options and then move the mouse
     pointer down to display the subtopics.  Press the left mouse 
     button on the desired subtopic.

          The 3 DELAY options (bid, play, and trick) are displayed 
     in 20 hundredths of a second.  A 5 for bid delay is a 1 second 
     delay between each player's bid.
          The LOAD STD RULES option will load in the rules that I
     provided with the program.
          The SAVE SETUP option will save your current opponents, 
     partner, background color, card back, delay settings, rules, 
     and the postion on the name's list of the name you are playing as.  
     This way you won't have to make a bunch of changes each time 
     you play.
          The BACKGROUND COLOR option allows you to choose one of
     49 colors for the background.

          If you change a name in the NAMES list, the records
     for the current game will be reset to zero.  The name and
     its records will not be saved overtop of the old name and 
     records until you play a complete game.  

          Hitting the F9 key will exit the program immediately 
     without asking if you really want to quit.

          If you need help getting DOUBLES PINOCHLE to run or have
     any other technical problems see the readme.doc file.
```
{% endraw %}

## README.DOC

{% raw %}
```
          
                     DOUBLES PINOCHLE, version 1.01

          DOUBLES PINOCHLE lets you play the card game known as 
     double-pack pinochle on your computer.  You choose your partner
     and opponents from 9 different computer players including 
     Morris, Alonzo, and Elcy.
          DOUBLES PINOCHLE requires approximately 510,000 bytes of 
     free RAM and a VGA or better video board.  To run it from a 
     hard drive copy all files to the same directory on your hard 
     drive, type DPIN and then enter.  You may run it from a floppy 
     drive if all files are on one disk. (On slow computers the game 
     may take a few minutes to load from a floppy drive.)

          Regardless of how you obtained DOUBLES PINOCHLE (from a 
     shareware vendor, a BBS, a friend, etc), you have not purchased 
     the program until you register the program with me, the author.  
     You must register for the program if you use it longer than a 
     trial period.  With your registration fee I will send you the 
     latest version of DOUBLES PINOCHLE.  Your registration fee will 
     enable me to survive as a Shareware programmer and continue 
     programming.   

          The registration fee is $12.  Send it to:

                           Sean Smith
                           RR 3  Box 208AA
                           Lewistown PA 17044-9230

          Specify what type of disk you want sent, 5 1/4 or 3 1/2.

          You can help me plan future versions of DOUBLES PINOCHLE
     by providing me with the following information : your computer 
     brand name, CPU (86, 186, 286, etc), coprocessor, amount of
     RAM, video card and its memory, where or how you got this program,
     and any comments and suggestions (see the futadd.doc for my ideas).  

          If you desire, I can send you a receipt but not send you a  
     version of DOUBLES PINOCHLE until I come out with a version 
     newer than your current version.  Don't forget to include your
     version number - 1.01.
          
          I in no way warranty the usability of Doubles Pinochle. 

          If you have any problems, I can be reached at the above 
     address or by phone :  (717) 543-5392

          Please distribute Doubles Pinochle to others even if you
     are not registered.  All files beginning with hum (such as hum0.dat
     and humnames.dat) can be deleted for distribution.
```
{% endraw %}

## RULES.DOC

{% raw %}
```
          
          Doubles pinochle is a computer version of double-pack 
     pinochle.  Two teams with two persons each play against each 
     other.  Your partner sits across the table from you.  
          The deck has 80 cards not 52.  There are 4 suits - clubs, 
     diamonds, spades, and hearts.  In each suit are 4 aces, 4 
     tens, 4 kings, 4 queens, and 4 jacks.
          The game is usally won by the first team to score 500 
     points, although there are 3 other ways to win that I'll talk 
     about later.  
          The game has two basic parts - bidding and trick play.  
     Bidding determines who will pick trump and thereby have a 
     better chance of getting points during trick play.  To 'take 
     the bid' and be allowed to name trump you must bid higher than 
     everyone else.  Say you take the bid with a bid of 60.  You 
     can now pick trump - either clubs, diamonds, spades or hearts -
     whichever is your best suit.  With the luxury of naming your 
     best suit trump comes a risk - if your team fails to get 60 
     points from meld (explained later) and trick play or fails to 
     get 20 points or more during trick play or has less than 20 
     meld points, 60 points will be subtracted from your score.
          To begin bidding one person deals everyone 20 cards.  This 
     person, the dealer, automatically bids 50.  The player to the 
     dealer's left has the first chance to bid over the dealer.  The 
     player may pass or bid at least one higher.  Bidding continues 
     clockwise around the table.  The first trip around the table is 
     the meld bidding round.  A meld bid usually indicates how much 
     meld a player has.  Say the highest bid so far is 52 and your 
     partner bids 53.  Then your partner will probably have at least  
     10 to 19 meld points.  If your partner bids two higher than the 
     highest bid expect 20 to 29, 3 higher 30 to 39, etc.  Bids 
     higher than 60 must be a multiple of 5 (65, 70, 75, etc). Bids 
     of 60 and above are not considered meld bids.
          After someone takes the bid and names trump, everyone 
     shows their meld (explained later) and each team's points are 
     added up for their meld.  If a team doesn't have at least 20 
     meld they get 0 meld points and don't have to show their meld 
     cards.  
          Now its time for trick play.  The player who took the bid 
     is the first to play a card.  If the high bid is 50 (no one bid 
     over the dealer), the player may play any card.  Otherwise, the 
     player must play a card from the trump suit.  The other players 
     play a card going clockwise around the table.  The suit of the 
     first card played is the lead suit.  If a player has at least 
     one card in the lead suit, the player must follow suit.  If the 
     player doesn't have a card in the lead suit, the player must 
     play a trump card.  If the player has no card in the trump suit, 
     the player can play any card.  Once 4 cards are played, the 
     highest card takes the trick.  An ace is the highest card 
     followed by ten, king, queen, and jack.  If one or more trump 
     cards was played, the highest trump card will take the trick.  
     Otherwise, the highest card in the lead suit takes the trick.  
     The first player to play the highest card takes the trick.  The 
     team that takes the trick receives one point for each ace, ten 
     and king in the trick.  The team that takes the last trick in the 
     hand gets two extra points.  
          After trick play, the scores are totalled.  The team that 
     didn't take the bid will have its meld points and trick points 
     added to its score, if the team got at least 20 trick points.  
     The bidding team will have its meld points and trick points added 
     to its score, if the team got at least 20 trick points, 20 meld 
     points and a total equal to or above the high bid.  Otherwise, 
     the bidding team will have the high bid subtracted from its
     score.
      
          Meld - Some combinations of cards are worth points (called 
     meld points).  For each of these combinations in your hand, you 
     will get a certain amount of meld points.  For example, if you 
     have a jack of diamonds and a queen of spades, you will get 4 
     meld points.  (The following values for melds may be changed in 
     the program to conform to some of the variations of double-pack 
     pinochle.)
                                  
        Marriages - king and queen in a suit
                4 points for each marriage in trump
                2 points for each marriage in a suit other than trump               
                
        Runs - ace, ten, king, queen, and jack in trump
               15 points for each run

        Arounds -  
          Jacks around - a jack in clubs, diamonds, spades, and hearts
                4 points for single jacks around
               40 points for double jacks around
               60 points for triple    "    "
               80 points for quadruple  "   "
          Queens around - a queen in clubs, diamonds, spades, and hearts
                6 points for single
               60 points for double
               90 points for triple
              120 points for quadruple
          Kings around - a king in clubs, diamonds, spades, and hearts
                8 points for single
               80 points for double
              120 points for triple
              160 points for quadruple
          Aces around - an ace in clubs, diamonds, spades, and hearts
               10 points for single
              100 points for double
              150 points for triple
              200 points for quadruple
         
        Pinochle - jack of diamonds and queen of spades
                4 points for single
               30 points for double
               45 points for triple
               60 points for quadruple


     4 ways to win the game :
          (1) First team to score 500 or more points.  If both teams 
                 reach 500 at the same time, the bidding team wins.
          (2) Take all 20 tricks in a hand.
          (3) Score 250 or more points before the other team has 
                 made any forward progress.  If a team is at -54 
                 points and scores 20 points to move to -34, then 
                 forward progress has been made.
          (4) Have quadruple pinochle and get at least 20 trick points.
     
          A few more rules - The player who names trump, the bid taker, 
     must have a marriage in trump, unless the high bid was 50.  If 
     the high bid was above 50 and the bid taker has no marriages, the 
     bid taker's team has the high bid subtracted from their score 
     and the hand is redealt.  
          The bid taker always has the option of folding.  When folding
     the bid taker's team has the high bid subtracted from their score 
     and the other team gets their meld points added to their score and
     the hand is redealt.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3970

     Volume in drive A has no label
     Directory of A:\

    PINHELP  DAT      5422   1-22-93   7:16a
    CHNGRULS DAT      1756   1-15-93   7:46a
    PLYRD0   DAT      1752   1-16-93   3:56p
    PLYRD1   DAT      1752   1-19-93   8:02a
    PLYRD2   DAT      1752   1-19-93   8:03a
    PLYRD3   DAT      1752   1-16-93   3:57p
    PLYRD4   DAT      1752   1-19-93   8:03a
    PLYRD5   DAT      1752   1-19-93   8:03a
    PLYRD6   DAT      1752   1-05-93   7:43a
    PLYRD7   DAT      1752   1-21-93   7:27a
    PLYRD8   DAT      1752   1-21-93   7:27a
    PROBS1   DAT     27783  11-15-92   4:27p
    PROBS2   DAT     27783  11-15-92   6:24p
    PROBS3   DAT     27783  11-15-92   6:27p
    PROBS4   DAT      4106   1-28-93  12:46p
    BITMASK1 DAT       486  11-19-92   9:23a
    CARDS1A  DAT     38880  11-19-92   9:22a
    CARDS1B  DAT     38880  11-19-92   9:23a
    PLYRF    DAT     36000   1-27-93  10:44a
    CRDBCK   DAT     23328  12-27-92   1:24p
    FILE_ID  DIZ       298   2-10-93   7:41p
    DESC     SDI       298   2-10-93   7:41p
    RULES    DOC      7200   2-04-93   8:38p
    HELP     DOC      2172   1-27-93  11:32a
    FUTADD   DOC       710   1-27-93  11:36a
    README   DOC      2466   2-10-93   7:46p
    DPIN     EXE     79095   2-10-93   7:36p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       693   9-09-93   9:14a
           29 file(s)     340938 bytes
                            6144 bytes free
