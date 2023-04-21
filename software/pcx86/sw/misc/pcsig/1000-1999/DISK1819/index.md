---
layout: page
title: "PC-SIG Diskette Library (Disk #1819)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1819/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1819"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRIBBAGE PARTNER"

    Cribbage Partner is a complete and realistic simulation of the game of
    Cribbage.  In all cases except the demonstration, the player opposes the
    computer.  Shuffling, dealing and bookkeeping are done automatically so
    the player can concentrate on the strategy and scoring aspects of the
    game.  A wide selection of options is provided so that players can gear
    the level and pace of play to their experience.  Full documention and
    rules of cribbage are included.
    
    Unique features of CRIBBAGE PARTNER:
    
    ~  Cards, pegs, and Cribbage board are clearly represented
    
    ~  Prompts and status messages explain the game situation and scoring
    
    ~  Player can do scoring or have scoring done automatically
    
    ~  Call for computer help on any play
    
    ~  Any hand can be replayed
    
    ~  "Muggins" option is available
    
    ~  Full demonstration mode is included
    
    ~  Function keys toggle among options during play
    
    ~  Full color and monochrome options are included
    
    ~  Will run on IBM PCjr.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CP.DOC

{% raw %}
```






                                  CRIBBAGE PARTNER
   
           Cribbage Partner is a realistic representation of the popular and
       entertaining game of cribbage.  The program requires only 128 K and
       runs on the IBM PC/ PCjr/ XT/ AT and compatibles.  Color and
       monochrome options are provided.  No color/graphics adapter is
       needed, and BASIC is not required.  Following is an explanation of
       the features and playing options of Cribbage Partner plus a summary
       of the Rules of Cribbage.
  

                  "CRIBBAGE PARTNER" FEATURES AND PLAYING OPTIONS

           Cribbage Partner substitutes computer simulation for the cards,
       pegs, and board of an actual cribbage game.  Shuffling, dealing, and
       bookkeeping are done automatically, so you can concentrate on the
       strategy and (if you like) the scoring aspects of the game.  A number
       of features are explained below which can make the game more
       enjoyable and easier to follow if understood.

           The number of options might seem a little overwhelming at first,
       but don't worry - Cribbage Partner will select default options for
       anything you don't want to bother with, and you can always change
       options during the game.  Nevertheless, you might want to print out
       this file to have for reference the first few times you play.

           Starting the Simulation:  Type "CP" at the DOS prompt.

           Scoring Messages:  Whenever points are scored by either player, a
       short message is shown which explains the scoring.  There is never
       any doubt about where the points come from on any play.

           Color Codes:  If you have a color system, messages and data which
       pertain to your plays are shown in light green; messages which
       pertain to the computer's plays are shown in light blue.  Your track
       on the cribbage board has light green holes while the computer's
       track has light blue holes.  Your pegs are black and the computer's
       are red.  In a monochrome system, reverse video is used to show the
       holes that have pegs in them.

           Replaying a hand:  When each hand is finished, you have the
       chance to replay the same hand again and try out different playing
       strategies.  When you replay a hand, all points and pegs are reset to
       their places at the beginning of the hand, and the same cards are
       re-dealt to both hands.

           Recommendation:  Whenever Cribbage Partner asks you to select a
       card to play (including discards to the crib), you may ask for a
       recommendation by typing "R".  Cribbage Partner will indicate the
       card which it recommends by an arrow on the screen.  You are then
       free to consider Cribbage Partner's recommendation and play that card
       or play any other card as you desire.
 













          Playing Options:  Several options are available.  In all cases
       except the Demonstration, you play against the computer.  When the
       simulation begins, Cribbage Partner will ask you to pick one of the
       options outlined below.  However, you are free to change back and
       forth between options as desired during play by pressing one of the
       Function Key "toggle switches".  Options currently in effect are
       always shown on the screen.  At the start of each new game and at the
       end of each hand, Function Keys which can be used to toggle alternate
       options are displayed along with a message informing you that changes
       can be entered.

                Demonstration:  Under this option, the computer plays both
       hands and does all the scoring, with no input from you during the
       game.  All cards are shown face up so you can follow the playing
       strategy.  If you are new to cribbage, or have been away for a while
       - or just to see how Cribbage Partner works - you may want to run the
       Demonstration a few times.  (No two runs are quite the same.)  The
       only options which you can choose during the Demonstration are the
       "Prompt/Pause" option and the "Game" option, which are explained
       below.

                Automatic Scoring:  In this option, you decide which cards
       to play during the game.  However, the computer takes care of all the
       scoring (as in the Demonstration) so you can concentrate on making
       the plays.

                Manual Scoring:  You do all of your own playing and 
       scoring.  Each time you play a card, Cribbage Partner will ask you
       for the number of points you scored on that play.  Simply type the
       appropriate number and hit "Enter", or just hit "Enter" if no points
       were scored.  If you make a scoring mistake, you will see a message
       with the correct figures.  If you don't claim all the points you
       earned, you won't get credit for them.  Also, you won't get credit
       for more points than you earn, regardless of what you claim.

                Muggins:  Everything works the same as in the Manual Scoring
       option except the computer will add to its total any points you
       scored but failed to claim.  Most experienced players use Muggins all
       the time - it's a good way to "keep on your toes".

                Prompt/Pause:  In the "Prompt" mode, Cribbage Partner will
       prompt you to press a key before continuing play after each score.
       This way, you will be sure not to miss any scoring explanations.
       Another mode is available which precludes the need for you to press a
       key after each score.  In the "Pause" mode, Cribbage Partner will
       pause one second after each pegging score and two seconds after
       scoring each hand, then will automatically continue on its own.  (You
       can "freeze" the action for as long as you like at any time by using
       your computer's "pause" button, e.g., the Ctrl-NumLock combination.)
       At the end of each hand, Cribbage Partner will always ask you if you
       want to replay the hand or continue play normally.















                Game:  At your choice, the total number of points required
       to win a game can be changed between 121 (traditional) and 61 (short
       game).
  
                Quit:  To quit a game altogether, press the F6 key.  You
       will be returned to the DOS prompt.  To begin a new game, type "CP".

           Finally, you should know that Cribbage Partner "peeks" at your
       hand only to insure that no improper plays are made during the game.
       Rest assured that the computer doesn't "remember" what cards you hold
       when making its plays.

           Enjoy the game!












                          SUMMARY OF FUNCTION KEY TOGGLES


                F1:  Demonstration or Regular Play

                F2:  Automatic Scoring or Manual Scoring

                F3:  "Muggins" or No "Muggins"

                F4:  Program will Prompt for a response from you after each
                     score or will Pause for 1 - 2 seconds before continuing
                     play automatically

                F5:  Game is set at 121 points or 61 points

                F6:  Quit game and return to DOS


























                                 RULES OF CRIBBAGE

           Cards:  In cribbage, a standard pack of 52 cards is used.  The
       King is the highest and Ace is the lowest ranking card of each suit.
       For scoring purposes, all face cards count as 10 points, Ace counts
       as 1 point, and all other cards count as their numerical value.
       There is no rank distinction among the 4 suits.

           Cribbage Board:  The cribbage board is a unique feature of the
       game and is the means of keeping score as play progresses.  The board
       used in Cribbage Partner consists of a track of 120 holes for each
       player.  The computer's track is the "outside" track and yours is the
       "inside" track.  (Both are labelled on the screen.)  Pegs are used to
       show each player's score throughout the game.

                Pegging:  At the beginning of a game, each player has two
       pegs located in the "starter holes" next to his track on the board.
       As points are scored during the first hand, they are "pegged" with
       one peg in each player's track.  (Each player's other peg stays in
       the starter hole.)

                     After all scoring for the first hand is finished, the
       first peg for each player then stays in place, and the second peg is
       used to show points scored during the second hand.  Then the peg used
       during the first hand is used again during the third, and so forth
       alternately throughout the game.

                     Note that at any time during play, each player's front
       peg will show his total score, and his rear peg will show his score
       at the end of the previous hand.  The difference between the front
       and rear pegs shows the number of points scored during the hand in
       progress.

                Deal:  The first game is started by each player drawing a
       card from the deck.  The player who draws the lower-ranking card is
       the first dealer.  After each hand is played, the deal alternates
       back and forth between players regardless of who won the previous
       hand.  The game continues until one player scores "Game" (a total of
       61 or 121 points).  The first deal of a new game goes to the loser of
       the preceding game.

                Play:  The dealer deals 6 cards to each player.  Each player
       must discard 2 of his 6 cards into the "crib".  The crib belongs to
       the dealer of that hand and adds to his score as will be explained
       later.  Consequently, the dealer tries to discard helpful cards to
       the crib while the non-dealer tries to discard worthless cards.  (The
       crib remains face-down until all other cards have been played and
       scored for the hand.)

                Next, the dealer turns up the "Starter" card from the deck.
       If this card is a Jack, the dealer scores 2 points for "His Heels".
       The Starter is not used during play, but will be used for scoring by
       both players at the end of the hand.













                The non-dealer leads each hand by playing a card.  Players
       alternate playing cards, trying to score points as will be described
       later.  The running total of cards played for each round (counting 10
       for face cards, 1 for Ace, and the numerical value for all others)
       is important to know and is always displayed at the bottom of the
       screen in Cribbage Partner.

                "Go":  The first round continues until neither player can
       play another card without exceeding a running total of 31.  The first
       player who can't play without exceeding 31 enters "GO" instead of
       playing another card.  His opponent then tries to continue play by
       himself, pegging any further points that he scores, until he can no
       longer play without exceeding 31.  At that time, he pegs 1 point for
       "GO".  If the final running total for the round was exactly 31, the
       player of the final card pegs 2 points instead.

                The running total is then reset to zero and a new round is
       started.

                The player who entered "GO" during the first round starts
       the new round by playing a card from those still in his hand.  The
       cards played during the first round are disregarded during further
       play (Cribbage Partner erases them from the screen to avoid any
       distraction).  Again, play alternates back and forth until another
       "GO" is reached or until all cards in both hands are played.  Note
       that the player of the final card of the hand always scores a "GO".

           Scoring During Play:  As mentioned above, players score 1 point
       for a "GO" or 2 points for reaching a running total of 31.  Other
       ways of scoring points during play include the following:

                Fifteen:  Playing a card which makes a running total of 15
       scores 2 points.

                Pair:  Playing the second consecutive card of the same rank
       scores 2 points.

                Triple (3 pairs):  Playing the third consecutive card of
       the same rank scores 6 points.

                Double Pair:  Playing the fourth consecutive card of the
       same rank scores 12 points.

                Run:  Playing the third or higher consecutive card of a
       sequence scores 1 point for each card in the sequence, regardless of
       the order in which the sequence was played, and regardless of the
       suits of the cards played.  For example, a sequence of Q-10-J-K
       scores 4 points.  However, the series 2-3-3-4 is not a run at all and
       scores nothing.

                Note that in making pairs, runs, and fifteens during play as
       just described, both players' cards are counted and not just each
       player's own cards.













                "Muggins":  Players may choose to play "Muggins" during the
       game.  When Muggins is in effect, either player adds to his total any
       points which the other earned but failed to claim.

           Order of Scoring:  After all cards of a hand are played, the 4
       cards in each hand and the 4 cards in the crib are scored as
       described below.  The non-dealer scores first, using the 4 cards from
       his hand plus the "Starter".  Then the dealer scores his 4 cards plus
       the Starter.  Finally, the dealer scores the crib, again adding the
       Starter to those 4 cards.  The above order of scoring is important,
       as it can affect the winner of a game; Cribbage Partner will always
       insure the correct order of scoring is followed.

           Scoring Hands:  Points are scored for each hand as follows:

                His Nobs:  The Jack of the same suit as the Starter counts
       1 point.

                Fifteen:  Every combination of cards with a total value of
       15 scores 2 points.

                Pair, triple, and double pair:  Every combination of two
       cards of the same rank scores 2 points.

                Run:  Three or more consecutive cards in a sequence scores
       1 point for each card in the run.  Suits are immaterial.

                Flush:  Four cards of the same suit in the dealer's hand or
       non-dealer's hand, not counting the Starter, score 4 points.  If the
       4 cards in the dealer's hand, non-dealer's hand, or the crib are the
       same suit as the Starter, then 5 points are scored.  (Four cards of
       the same suit in the crib which are not the same suit as the Starter
       score no points at all.)

                Note that the same card(s) may be used as part of several
       scoring combinations in the same hand.  For example, a Jack may be
       "His Nobs", one of a pair, one of a run, and one of a combination
       totalling 15 all in the same hand.  All valid scoring combinations
       are counted.  (Muggins applies when scoring hands too.)

           End of Game:  After all scoring is finished, the cards are
       collected and another hand is dealt by the new dealer.  Play
       continues until "Game" is reached.  If "Game" is 121 points and the
       loser scored less than 91 points, the winner is credited with 2
       games.  If the loser scored less than 61 points, the winner scores
       4 games.

```
{% endraw %}

## FILE1819.TXT

{% raw %}
```
Disk No: 1819                                                           
Disk Title: Cribbage Partner                                            
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: CRIBBAGE PARTNER                                         
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Cribbage Partner is a complete and realistic simulation of the game of  
Cribbage.  In all cases except the demonstration, the player opposes the
computer.  Shuffling, dealing and bookkeeping are done automatically so 
the player can concentrate on the strategy and scoring aspects of the   
game.  A wide selection of options is provided so that players can gear 
the level and pace of play to their experience.  Full documention and   
rules of Cribbage are included.                                         
                                                                        
Unique features of CRIBBAGE PARTNER:                                    
                                                                        
~  Cards, pegs, and Cribbage board are clearly represented              
                                                                        
~  Prompts and status messages explain the game situation and scoring   
                                                                        
~  Player can do scoring or have scoring done automatically             
                                                                        
~  Call for computer help on any play                                   
                                                                        
~  Any hand can be replayed                                             
                                                                        
~  "Muggins" option is available                                        
                                                                        
~  Full demonstration mode is included                                  
                                                                        
~  Function keys toggle among options during play                       
                                                                        
~  Full color and monochrome options are included                       
                                                                        
~  Will run on IBM PCjr.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1819

     Volume in drive A has no label
     Directory of A:\

    CP       EXE     68224   1-01-80  12:33a
    CP       DOC     16044   4-28-89  10:59a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       574   1-01-80  12:03a
    FILE1819 TXT      3257   7-12-90   3:47p
            5 file(s)      88137 bytes
                           70144 bytes free
