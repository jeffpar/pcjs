---
layout: page
title: "PC-SIG Diskette Library (Disk #713)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0713/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0713"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER CONTRACT BRIDGE"

    COMPUTER CONTRACT BRIDGE is played by two teams, the we team and the
    they team.  The we team consists of the North and the South.  The
    computer is North and you're South.  The they team consists of the East
    and the West, both played by the computer.  All your interactions with
    your computer opponents are done through the keyboard, and you'll
    generally get a prompt on the screen to tell you what to do next.  If
    you pay attention to the prompts and follow their lead, you will have no
    trouble playing.  The computer plays a fairly good game, but in time you
    can learn how to win.  This particular version of the program is meant
    for the novice bridge player.  Though it is a game and not a tutorial,
    you will definitely learn a lot by playing it.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BRIDGE.TXT

{% raw %}
```





                         COMPUTER CONTRACT BRIDGE I 
                              (Novice Version) 
     
     
                          SOME HISTORY OF THE GAME
     
          Bridge is a relatively old card game with roots dating 
     back to the seventeenth century. It was originally called 
     Whist, but was preceeded by games with names like Triumph, 
     Trump, Ruff and Honors, Whisk and Swabbers, and Whisk. 
     
          Bridge, or Bridge Whist, was first played at the Portland 
     Club in London in 1894, introduced by Lord Brougham. It was 
     played for about ten years when it was replaced by a newer 
     version known as Auction Bridge. 
     
          Contract Bridge was a spin-off of the French game known 
     as Planfond. A group of American players who frequented the 
     Travelers' Club in Paris combined Whist and Planfond and 
     came up with the basics of the game played today. American 
     Yachtsman and card enthusiast Harold S. Vanderbilt, in the 
     mid-nineteen-twenties brought out his own set of rules for 
     play which were subsequently endorsed as the official rules 
     for Bridge wherever it was played.
     
          Ely Culbertson, a world-class Bridge player of the 
     thirties, wrote books on the subject and was a participant in 
     one of the longest-running Bridge games in history consisting of 
     one-hundred-fifty rubbers. The game concluded in 1932. 
     
          Eventually Bridge became so popular that teams of players 
     traveled the world to play. The greatest Bridge competition was 
     the World Bridge Olympic, involving thousands of contestants. 
     
          Ely Culbertson's rules on bidding held up for decades 
     but one man, Charles H. Goren, developed a bidding system 
     which incorporated more sophisticated theories. Goren since 
     has become the ruling authority on Bridge and his system 
     has become a standard by which the world plays. Modifications 
     to the Goren system have become accepted by Bridge players 
     and include the Blackwood and Gerber Conventions, usually 
     agreed upon as a means of special bidding signals between 
     partners. All of the rules of Bridge are quite difficult 
     to come by in one publication, but books on the subject abound. 
     A good bookstore may have as many as fifty different titles 
     on Bridge and more become available on a regular basis. Of all 
     of the forms of cards, Bridge ranks tops as a continuing 
     challenge to its players because most must agree, before 
     starting play, which rules and conventions they will invoke 
     during bidding. 

                                                                 page 2




     
                              BRIDGE RULES 
     
                       THE BASICS OF COMPUTER PLAY
     
     
     
          This version of Computer Contract Bridge is played by 
     two teams - the WE team and the THEY team. The WE team consists 
     of the North and the South. North is played by the computer, 
     South by the player. The THEY team consists of the East and the 
     West, both played by the computer. The computer assumes control 
     of each position in turn. It does not remember from one position 
     to another what it played last, but calculates much as a human 
     does in playing its hand. It even makes mistakes as humans do. 
     
          If the North wins the bidding, the player will be required 
     to sit out since his hand will be played by the computer as the 
     DUMMY hand - thus the computer will be playing all four of the 
     positions. Conversely, if the South wins the bidding, the player 
     will play the North's DUMMY hand. 
     
     
     
                                 BIDDING
     
          The excitement of Bridge is not so much the playing 
     of the tricks, but rather the BIDDING to start play. It is 
     expected that just about any team can take six of thirteen 
     tricks whether a trump suit is used or not, so in Bridge 
     play the first six tricks don't count for anything. In bidding, 
     the first six tricks are also ingnored.  
     
          A bid of ONE HEART means that the bidder expects that he 
     and his partner will be able to take at least the minimum six 
     tricks PLUS one extra trick for a total of seven tricks. By 
     bidding ONE HEART, the bidder is making Hearts the trump suit. A 
     trump card may be thrown any time a player cannot follow suit in 
     trick play. The highest trump card played always wins the trick, 
     no matter what suit leads the trick. Of course, a player must 
     always follow suit if possible.
     
          A bid of THREE NO TRUMP means that the bidder expects 
     that his team will be able to take a total of nine tricks 
     (six plus three) and that no suit will be used as trump. 
     
          A SMALL SLAM bid would be SIX of anything and a GRAND 
     SLAM bid would be SEVEN of anything. A grand slam is when 
     one team takes all thirteen tricks (six plus seven).

                                                                 page 3




          The SUIT bid is important because certain suits are 
     worth more points than others. Every trick taken by a team 
     (after the first six) when Spades or Hearts are trump, is worth 
     thirty points. When Diamonds or Clubs are called as trump, 
     tricks over six are only worth twenty points. If No Trump is 
     called, the seventh trick won by a team is worth fourty points 
     and subsequent tricks are worth thirty points. In any instance, 
     the first six tricks won by a team count for nothing. 
     
          When partners are bidding they cannot look at each other's 
     cards, but each can give the other a good idea of his hand's 
     contents by the way he bids.  And THIS is what makes Bridge 
     such an exciting game!  Each player is trying to figure out 
     what every other player has in his hand by the way the bidding 
     goes.  In the Computer Novice Version of Bridge, the first 
     bid by North, East or West is always the best suit with lowest 
     trick count expectation. The second bid is always the next 
     best suit and best trick count expectation. If your partner (the 
     North) bids TWO SPADES, you know that his best suit is Spades 
     and that he feels that between the two of you the team can 
     expect to take at least eight tricks. If he bids again, he'll be 
     telling you his second best suit - if he hasn't been forced out 
     of the bidding by someone else's bid too large to answer safely. 
     And THAT is where the fun comes in! If you open the bidding with 
     two Hearts and your partner bids three Diamonds, will it 
     be safe for you to bid three Spades (your second best suit) 
     hoping the other guys will be trapped into bidding too high... 
     or should you pass and see what your partner can do with the 
     bidding? Is somebody bluffing? Is everybody REALLY bidding their 
     hands or are there other signals being passed back and forth 
     that you are missing? Is the other team trying to push you into 
     bidding past your ability to take tricks? How far can you go 
     without ending up on the short end of the stick? 
     
     
     
               EVALUATING YOUR HAND FOR BIDDING PURPOSES 
     
          The deck contains a total of 40 high-card points and 
     the average hand will contain ten points. Use the following 
     table to determine your hand's point-count: 
     
                    Each Ace.............4 Points 
                    Each King............3 Points 
                    Each Queen...........2 Points 
                    Each Jack............1 Point 
     

                                                                 page 4




          If you have only two cards in a suit (a doubleton) add 
     1 point. One card in a suit (a singleton) is worth an additional 
     2 points. No cards in a suit (a void) is worth an additional 3 
     points. However, take one point away from your total for each 
     singleton Jack, Queen or King. 
     
          If your total is 14 points or better, you may not pass 
     on the first round of bidding; you must open.  If you have 13 
     points, you may elect to bid or pass on the first round. If you 
     have a 12 point hand, you may open but you must be able to bid 
     again in the second round and you must be able to take two quick 
     tricks with cards in your hand. 
     
          To determine the number of quick tricks in your hand 
     use the following table: 
     
               Ace-King in a suit.........2 tricks 
               Ace-Queen..............1 1/2 tricks 
               Ace only...................1 trick 
               King-Queen.................1 trick 
               King only................1/2 trick 
     
     
          To determine which suit to bid first remember that Spades 
     rank the highest, then Hearts, Diamonds and Clubs.  Open with 
     the suit with the greatest length. If two suits are of equal 
     length, bid the highest ranking suit.  
     
          As a general policy, it is wise to consider a suit biddable 
     if it consists of at least four cards, two of which are face 
     cards. Re-biddable suits consist of at least five cards, with 
     two adjacent face cards.  Strong rebiddable suits consist of at 
     least six cards, with three being face cards. 
     
          If your partner opens rather than passes on the first round 
     you can bid if you have at least six points in your hand. Use 
     the following table to determine how strongly you can bid: 
     
        6 to 10 points......minimum hand good for one round
       10 to 13 points......good hand worth two rounds of bids 
       14 to 16 points......great hand to bid 2 in a new suit 
       16 to 19 points......power hand to bid 3 No Trump or better 
       19 points and up.....SLAM hand jump bid to 5 in new suit 
     
          Remember that each bid must be better than the last. 
     The order of strength is Clubs, then Diamonds, then Hearts, 
     Spades and No Trump. The weakest is Clubs, the strongest is 
     No Trump. Two No Trump can only be bettered by three something, 
     but two Clubs can be bettered by two Hearts. If you fail to 
     better the bid the computer will let you know. 

                                                                 page 5




          DOUBLING and REDOUBLING are means of penalizing your 
     opponents for what you feel may be over-bidding. These may 
     also be a means of getting extra points if you are feeling 
     confident in your own bidding. You may not call a double in the 
     bidding until someone else has opened. And you may not redouble 
     until the bidding has been doubled. Doubling means that trick 
     points will be doubled - redoubling means that trick points will 
     be quadrupled. In addition, if a team fails to make their bid, 
     each trick less than their bid (undertrick) is worth at least a  
     50 point penalty - and the total penalty could go as high as 
     3400 points if redoubled! 
     
     
                    THE COMPUTER'S BIDDING CONVENTIONS
     
          The computer always evaluates its hands.  On its first 
     bid if a slam is possible the computer will open with THREE 
     CLUBS. If its hand contains between five and seven of a suit it 
     will open with TWO of that suit.  After these conventions 
     are exhausted the computer will bid based on length of a 
     suit and the total bidding points in its hand, bidding its best 
     suit first.  Before bidding, however, the computer will test for 
     NO TRUMP.  A balanced hand with a suit distribution of 5, 3, 3, 
     and 2 or of 4, 4, 3, and 2 spread  will result in a No Trump 
     bid.  Distribution of 4,3,3 and 3 will result in a THREE NO 
     TRUMP opening bid. 
     
          Once three players in a row PASS, the bidding is ended and 
     play can begin with the last player who bid playing the first 
     (or lead) card.  There is no further opportunity to call trump - 
     it is the last suit bid. 
     
     
     
                       VULNERABLE VS. NOT VULNERABLE  
     
          Bridge moves in steps and may continue for as long as 
     everyone wants to keep playing. A GAME is made when one team 
     scores a total 100 trick points or more in as many HANDS as it 
     takes to do so. A RUBBER is made when a team makes two GAMES. 
     Each time a GAME is made, the trick point-count is re-set 
     to zero; but the grandtotal of points is increased with the 
     end of each hand. A team is considered VULNERABLE when it 
     can make a RUBBER by winning the next GAME - a team with 
     one game to its credit is VULNERABLE. A team with no game 
     to its credit is NOT VULNERABLE. This is important in the 
     scoring of points and penalties. A vulnerable team may be 
     subject to as many as 2800 bonus points or as much as 3400 
     penalty points. 

                                                                 page 6




     
                              HONORS POINTS 
     
          Among the bonus points a team may claim are the Honors. 
     In this version of Bridge Honors are always asked for after 
     bidding is finished. Each player in turn has the opportunity 
     to claim Honors points. Honors points do not go towards game 
     points. They are added to the grandtotal of points instead. If 
     you fail to claim Honors due your team, the computer will 
     tell you about it but you will not get a second chance to 
     claim them. If you make a mistake in the total Honors you 
     claim, however, you will be prompted to try again. Although 
     the computer will display a table of points for Honors, you 
     may use the following to calculate Honors points: 
     
                             HONORS POINTS
     
               Any four in Trump Suit........100 points 
                      AKQJ  AKQ10  AKJ10  KQJ10 
     
               All five in Trump Suit........150 points 
                               AKQJ10
                
               All four Aces in No Trump.....150 points 
     
     
                 CALCULATIONS OF POINTS AND SCORES 
     
          In this version of Bridge the computer automatically 
     takes care of the calculations of points and keeps score. 
     Game points are reset whenever a Game is made. Bonuses, Honors 
     and Penalties are reset after each hand. Total score is updated 
     after each hand. For reasons relating to clarity and available 
     screen space, under- and over-the-line scoring is condensed. 
     (In regular Bridge two sets of figures are kept: one set for 
     tracking Game points and a second for total points, kept over 
     and under a line drawn on the score pad.) Part score, another 
     option used in regular bridge, is also omitted for similar 
     reasons as above. 
     
          The following tables are used to calculate points: 
     
     SUIT VALUES PER TRICK     Undoubled    Doubled   Redoubled 
     Clubs or Diamonds            20          40          80 
     Hearts or Spades             30          60         120 
     1st No Trump Trick           40          80         160 
     Subsequent No Trump Tricks   30          60         120 
     
     POINTS NEEDED FOR GAME                  100 

                                                                 page 7




     HONORS (Scored by side holding them) 
     Suit Bid - Four in one hand             100 
     Suit Bid - Five in one hand             150 
     Four No Trump Aces in one hand          150 
     
     RUBBER BONUS - First side winning two Games wins a Rubber 
     Two Game Rubber                         700 
     Three Game Rubber                       500 
     
     SLAM BONUS for Slams bid and won   Not Vulnerable  Vulnerable 
     Small Slam - Bid of SIX                 500            750 
     Grand Slam - Bid of SEVEN              1000           1500 
     
     PREMIUM BONUS - Making Doubled or Redoubled Contract    50 
     
     OVERTRICKS - Each trick over Bid   Not Vulnerable  Vulnerable 
     Not Doubled                             -0-            -0- 
     Doubled                                 100            200 
     Redoubled                               200            400 
     
     UNDERTRICK PENALTIES - Points awarded to opponents when side 
                            fails to make number of tricks bid. 
     NOT VULNERABLE        Undoubled       Doubled       Redoubled 
     One under                 50            100            200
     Two under                100            300            600 
     Three under              150            500           1000 
     Four under               200            700           1400 
     Five under               250            900           1800 
     Six under                300           1100           2200 
     
     VULNERABLE            Undoubled       Doubled       Redoubled  
     One under                100            200            400
     Two under                200            500           1000 
     Three under              300            800           1600 
     Four under               400           1100           2200 
     Five under               500           1400           2800 
     Six under                600           1700           3400  
     
     
                    COMMUNICATING WITH THE COMPUTER
     
          All communications with the computer are done through 
     the keyboard. Generally, a prompt will appear on the screen 
     to tell you what to do next. If you pay attention to the 
     prompts appearing on the screen and follow their lead, you 
     will have no trouble playing the game. If you make a serious 
     mistake, a message will appear - telling what it was. If you
     enter a wrong character, the computer will either beep or 
     ignore your entry. 

                                                                 page 8




          If, when entering a card code, you get the first char- 
     acter wrong, don't try to erase it...enter a second wrong 
     character...your error will be detected and the computer will 
     show a message and allow you to retry your entry. Most of the 
     time you will only need to press one or two characters to 
     communicate; but when entering Honors you must press the 
     carriage return key to complete your entry. When bidding, press 
     the number representing your bid followed by the character 
     representing the suit. (1H equals One Heart, 4N equals Four No 
     Trump, P equals Pass, D equals Double, and R equals Redouble.)  
     When playing trick cards, wait for the computer to beep; then 
     press the two keys representing the card you wish to play. (2C 
     equals the Two of Clubs, JH equals equals the Jack of Hearts, 1S 
     equals the Ten of Spades, AD equals the Ace of Diamonds and so 
     forth.  NOTE: the number TEN is represented by pressing the 1 
     only - a zero will be ignored.) 
     
          When play is ended and the scores displayed, you will 
     be given the option to continue playing or to quit. Press 
     P to continue play or press Q to quit. Any time it is your 
     turn to communicate with the computer you may press ESC to 
     terminate the game sequence...you will be given the choice 
     at that point to play a new game or to quit. 
     
          Remember that this is the NOVICE version of Bridge... 
     while this is an Expert System, the computer is programmed to 
     make errors just as you.  (Only it is not given the chance 
     to correct them!) 
     
          You may print this text on your computer's printer from 
     SYSTEM level by the command  COPY BRIDGE.TXT LPT1:  You start 
     the game by the command  BRIDGE  and the command  HELP  puts 
     this text on your monitor. 
     
          Do NOT use this disc to play the game!  Format a new 
     disc with the Operating System on it and COPY the contents 
     of this disc to your new one.  Keep this disc for use as a 
     MASTER.  Put it in a safe place just in case the copy goes 
     bad from overuse.
     
          Small Business Software, Inc. is always interested in 
     ways to improve our products.  Your comments and suggestions 
     are welcome.  Send them to Small Business Software, Product 
     Development, 5253 East Lee Street, Tucson, Arizona 85712. 
     


```
{% endraw %}

## FILES713.TXT

{% raw %}
```
Disk No  713
Program Title: COMPUTER CONTRACT BRIDGE version 2.0
PC-SIG version 2

    COMPUTER CONTRACT BRIDGE is played by two teams, the WE team and the
THEY team. The WE team consists of the north and the south. North is played
by the computer, and South, by you The THEY team consists of the East and
the West, both played by the computer. All communications with the computer
are done through the keyboard. Generally, a prompt will appear on the
screen to tell you what to do next. If you pay attention to the prompts
appearing on the screen and follow thier lead, you will have no trouble
playing the game. The game plays a fairly good game against you, in time
you can learn how to win. This particular version of the program is meant
for the novice bridge player

Usage: Entertainment/Novice Bridge Player

System Requirements: 256K memory and one disk drive

How to Start: Type BRIDGE (press enter).

Suggested Registration: $4.95 and up for additional games.

File Descriptions:

BRIDGE   EXE  Main program.
BRIDGE   TXT  Documentation for the game.
HELP     EXE  Help file for BRIDGE.
MANUAL   BAT  Prints documentation for you.

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
║             <<<<  Disk No 713 COMPUTER CONTRACT BRIDGE  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
║                                                                         ║
║ To start the program, type: BRIDGE (press enter)                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0713

     Volume in drive A has no label
     Directory of A:\

    BRIDGE   EXE     69120   2-14-88  12:46p
    BRIDGE   TXT     21248  10-18-86   4:49p
    FILES713 TXT      1279   5-17-88   1:51p
    GO       BAT        38   5-06-88   1:08p
    GO       TXT       540   5-06-88   1:10p
    HELP     EXE     22784   2-14-88  12:53p
    MANUAL   BAT       152   5-06-88   1:08p
            7 file(s)     115161 bytes
                           43008 bytes free
