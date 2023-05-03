---
layout: page
title: "PC-SIG Diskette Library (Disk #1956)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1956/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1956"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOWBALL POKER PROFESSIONAL"

    The game of Lowball Poker is played with a fifty-three card deck,
    consisting of a standard deck of playing cards with one joker.  This
    form of lowball is also known as California Lowball.  The rank of cards
    are from the king (high) to an ace (low).  The joker is wild and used as
    the lowest card in your hand so long as it doesn't make a pair.
    
    In Lowball, your goal is to beat your opponents by trying to get the
    lowest hand.  A complete reverse of what is normally played in high
    poker.  The best hand is a 5-4-3-2-A known as a wheel or bicycle.
    Straights and flushes do not count.  You watch your hand and the
    computer plays all the others.  Good graphics and complete control over
    shuffling, dealing speed, and display of cards help make this program
    enjoyable.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1956.TXT

{% raw %}
```
Disk No: 1956                                                           
Disk Title: Lowball Poker Professional                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Lowball Poker Professional                               
Author Version: 3.00                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
The game of Lowball Poker is played with a fifty-three card deck,       
consisting of a standard deck of playing cards with one joker.  This    
form of Lowball is also known as California Lowball.  The rank of cards 
are from the King (High) to an Ace (Low).  The joker is wild and used as
the lowest card in your hand so long as it doesn't make a pair.         
                                                                        
In Lowball, your goal is to beat your opponents by trying to get the    
lowest hand.  A complete reverse of what is normally played in high     
poker.  The best hand is a 5-4-3-2-A known as a wheel or bicycle.       
Straights and flushes do not count.  You watch your hand and the        
computer plays all the others.  Good graphics and complete control over 
shuffling, dealing speed, and display of cards help make this program   
enjoyable.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk #1956  LOWBALL  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: LOWBALL      (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY LOWBALL.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LOWBALL.DOC

{% raw %}
```
























                                LOWBALL POKER 
                                 Version 3.OO

                               CGA or Monochrome

                         (C) Copyright 1986,87,88,89

                                      by

                                Raymond M. Buti

                              All Rights Reserved


                            United Innovations Plus
                             Post Office Box 21081
                           Castro Valley, Ca.  94546

                                (415) 886-0958























       



                                    TERMS

       This software is distributed as ShareWare.  What this means  is,
       you  a  granted free license to use, copy  and  distribute  this
       software  as  often  as  you  wish  so  long  as  the  following
       restrictions have been met:

       1 - When   distributing   this  software, it  must  be  in   its
           original   unmodified  form.   The ARCed or Compressed  .EXE  
           version   of this software   will  only  be  distributed  to 
           Bulletin  Board Systems and computer information  exchanges, 
           i.e. The Great American Dream Machine (415)-581-3019, GEnie, 
           Delphi, The Source, Compuserve etc.

       2 - Prior written consent from United Innovations Plus  must  be
           obtained  before a fee  or  charge is made for  copying   or
           distribution, with the exception of the computer information     
           exchanges as mentioned above.

       3 - This  software shall not be included  with  other  programs,
           goods,  services,  etc. without prior written  consent  from 
           United  Innovations Plus with the exception of the  computer 
           information exchanges as mentioned above.



                            REGISTRATION AGREEMENT

       United  Innovations Plus requires you to register this  software 
       if  you  plan  on using it.  Registered users will  receive  the 
       latest  version  with all  options available, full  support  and 
       notification  of  later releases.   Please  note  that not   all  
       options   and  functions  are  available  with  this   Shareware 
       release.  To register your copy of this software, please use the 
       Registration   Form   and  make  checks   payable   to    United 
       Innovations Plus.






























                              TABLE OF CONTENTS


       PROGRAMS ON DISK ............................................  1

       PROGRAMS REQUIRED TO RUN LOWBALL ............................  1

       LOWBALL RULES ...............................................  2

       LOWBALL GAMES ...............................................  3

            Pass & Out .............................................  3
            Blind ..................................................  3     
            Straddle ...............................................  4

       STARTING LOWBALL ............................................  4

       PLAYING SCREEN ..............................................  4

       MAIN OPTIONS ................................................  5

           F1 Deal .................................................  5
           F3 Setup Menu ...........................................  5
           F5 Stats ................................................  5
                Current Hands ......................................  6
                Total Hands ........................................  6
                House Take .........................................  6
                Total House Take ...................................  6
                Carryover To Next Pot ..............................  6
           F8 High Scores ..........................................  6
           ALT-N New Player ........................................  7
           F10 Quit ................................................  7

       PLAY OPTIONS ................................................  7

           Bet .....................................................  7
           Fold ....................................................  7
           Call ....................................................  7
           Raise ...................................................  8
           Pass/Check ..............................................  8

       DISCARDS ....................................................  8

                Alt-O Show Odds ....................................  8

       SETUP MENU ..................................................  9











                                    - i -








       SETUP OPTIONS ...............................................  9

           Display Shuffling .......................................  9
           Sliding Screens .........................................  9
           Show Card Movement ......................................  9
           Card Movement Speed .....................................  9
           Snow Removal ............................................ 10
           Sound ................................................... 10
           Fast Play When Folding .................................. 10
           Display Bets ............................................ 10
           Display Cards Drawn ..................................... 10
           Save High Games ......................................... 10
           Type Of Game ............................................ 10
           Change Playing Position ................................. 10
           Change Card Colors ...................................... 11
           Double Bet After Draw ................................... 11
           Pause For Player Action ................................. 11

       HIGH SCORES ................................................. 11

       SHAREWARE VERSION ........................................... 12

       OTHER PROGRAMS .............................................. 12

       REGISTRATION FORM ........................................... 13
































                                    - ii -








                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Lowball .Exe   -  The main program for Lowball Poker.
         Lowball .Doc   -  The documentation for Lowball Poker.
         LoStart .Bat   -  A batch file to  read  the  documentation, 
                           print the documentation and install  Lowball 
                           on a Hard Drive.
         LoRead  .Com   -  Used by LoStart.Bat
         LoReply .Com   -  Used by LoStart.Bat
         LoIntro        -  Used by LoStart.Bat
         LoPrt          -  Used by LoStart.Bat
         LoHd           -  Used by LoStart.Bat
         LoReg          -  Registration Form
         Low30S   .Arc  -  Shareware Version of Lowball Poker


                       PROGRAMS REQUIRED TO RUN LOWBALL

       The only file required to play Lowball is LOWBALL.EXE.  Be  sure 
       you  are  in  the  same directory  or  drive  where  LOWBALL.EXE 
       resides.































                                    - 1 -








                                LOWBALL RULES

       The  game  of Lowball Poker is played with  a  fifty-three  card 
       deck,  consisting of a standard deck of playing cards  with  one 
       joker.   This  form  of  Lowball is  also  known  as  California 
       Lowball.   The rank of cards are from the King (High) to an  Ace 
       (Low).   The joker is wild and used as the lowest card  in  your 
       hand so long as it doesn't make a pair.  If your lowest card was 
       a  2 and you had the joker in your hand, the jokers value  would 
       count as an Ace.  If you also had an Ace in your hand, the joker 
       would then become a 3, etc.  If you have the joker in your hand, 
       DO  NOT DISCARD THE JOKER.  This card will only help your hand.

       In most forms of poker, you are trying to get the highest  hand.  
       In Lowball, your goal is to beat your opponents by trying to get 
       the lowest hand.  A complete reverse of what is normally  played 
       in high poker.  The best hand is a 5-4-3-2-A known as a wheel or 
       bicycle.   Straights and flushes do not count.  Some  variations 
       of Lowball count straights and flushes against you.

       The dealer will shuffle the cards and the player to the  dealers 
       right will cut the cards.  The dealer deals out five cards,  one 
       at  a time starting with the first player to the  dealers  left.  
       There  are eight players in this game.  A betting  round  starts 
       with  the first player to the dealers left.  On the first  round 
       of  betting, you must either bet or you are forced to fold  your 
       hand.  If nobody bets (opens), then the last player to act  wins 
       the pot which will consists of the antes.

       Once the pot has been opened, the remaining players will have  a 
       choice of either to call (place in the pot the amount the opener 
       put  in), raise (place in the pot the amount the opener  put  in 
       plus the amount of your raise), or fold (toss your hand away and 
       resign from further action and forfeiting any money currently in 
       the  pot). You are playing at a $20 limit table.  All  bets  are 
       $20.  When raising, you must raise $20.  

       After the first round of betting, starting with the first player 
       to the dealers left, each player will discard from 1 to 5  cards 
       from  his hand or play his hand pat (stay with what  you  have).  
       The  dealer  will  then burn the top  card  from  the  remaining 
       portion  of  the deck.  This is done by dealing the  first  card 
       into  the center of the table.  The dealer will then  deal  each 
       player  replacement cards from the unused portion of  the  deck.  
       So  what  happens if all 8 players stay in the pot  and  draw  3 
       cards  each?   We have 8 players times 5 cards which  equals  40 
       cards.  We have 12 cards remaining in the unused portion of  the 
       deck  and 1 burned card.  Now we have 8 players drawing 3  cards 
       each  which  is another 24 cards to be dealt from  a  deck  only 
       containing  12 cards of which only 11 are playable  (the  bottom 
       card  is  never dealt).  How is this possible?  In  casinos  and 
       card  clubs, all players discard their cards first,  before  the 
       new  cards are dealt.  While dealing the replacement  cards  and 
       when the deck is down to one card (not a playable card), all the 
       discards  including the last card are reshuffled and the  dealer 


                                    - 2 -








       continues  to deal the players their remaining cards.   If  this 
       was  not done, you couldn't play with 8 players.   This  doesn't 
       happen too often unless your playing in a home game for pennies.

       Once  all the players have their new cards, the another  betting 
       round  takes place.  This time you may check (make no  bet,  but 
       stay  in  the  pot), bet, raise, re-raise.  A pot  may  only  be 
       raised  5  times  in each round of betting.   Once  the  betting 
       action is over, the remaining players in the pot will show their 
       hands and the player with the lowest hand will win the pot.   In 
       the  event of a tie between 2 or more players, the pot  will  be 
       split  among  the  winners.  If the pot  cannot  be  divided  up 
       equally in dollars amounts, the extra couple of dollars will  be 
       left in the pot for the winner of the next pot.

       Those interested in learning more about Lowball should  purchase 
       a  book on Lowball Poker.  The best way to learn the game is  to 
       dig  deep into your pocket and pull a few bills and charge  over 
       to  your  nearest card club and say, "Deal me  in  sucker".   It 
       won't take long before you find out who the sucker is.


                                LOWBALL GAMES

       Lowball  can be played in a few different variations.   Not  all 
       forms  of  Lowball are supported in this game.  This  game  will 
       support  3 of the most widely played forms.  The following is  a 
       description  of forms of Lowball currently available  with  this 
       version.

                                  Pass & Out

       All players ante $2 and must either bet or fold before the draw.  
       The first player to the dealers left is first to act.

                                    Blind     

       All players ante $2 and must either bet or fold before the draw.  
       The  first player to the dealers left places a bet ($20) in  the 
       pot before the cards are dealt.  This is considered a blind bet, 
       meaning  the  player is opening the pot without looking  at  his 
       cards.  A marker will be place by that player indicating he  has 
       the blind.  The first player to the blinds left is first to act.  
       This  makes the blind last to act before the draw but  first  to 
       act after the draw.

       The  blind  game is intended to create a little  action.   After 
       all,  wouldn't  you  want to call a  player  that  bets  without 
       looking at his cards?

       Before  the draw, starting with the first player to  the  blinds 
       left,  must either call the blind bet, raise or fold.  When  its 
       the blinds turn to play and the pot has only been called, he has 
       no  further  action because he is already in the  pot.   On  the 
       other  hand,  if the pot was raised, he may  call,  re-raise  or 


                                    - 3 -








       fold.  Not supported in the version is what as known as a  "live 
       blind".   A  live  blind means that if the pot  was  not  raised 
       before  the  draw,  then the blind has  the  option  of  raising 
       himself by placing an addition bet in the pot.  

                                   Straddle

       In  this form of Lowball, none of the players ante.  Instead,  3 
       players put in a straddle bet.  The first player to the  dealers 
       left puts in $5, the next player puts in $5, and the next player 
       puts  in  $10.  This amount adds up to the minimum  bet  of  the 
       limit  game  you are playing.  A $4 limit game  would  have  the 
       straddle at $1, $1 & $2; a $10 limit game would be $2, $3 &  $5; 
       a  $200 limit game would be $50, $50 & $100.  The  players  that 
       have placed the straddle bets will have markers placed in  front 
       of their playing positions.

       This game also creates action.  You have 3 players with  partial 
       bets in the pot already.  This makes it a little easier for them 
       to call.  If they don't call, they lose the straddle.

       The  first player to act before the draw is the first player  to 
       the  left  of  the big straddle and  play  continues  clockwise.  
       After  the  draw,  action starts with the first  player  to  the 
       dealers left.


                               STARTING LOWBALL

       From  your  DOS  prompt, type Lowball  and  press  ENTER.   Your 
       monitor  will display the opening screen.  After a few  seconds, 
       or  until you hit a key, you will be asked for your  name.   You 
       must  enter something when asked.  If you don't like your  name, 
       enter  anything  you  want.   Lowball  will  save  your  playing 
       statistics  to  a file associated with what you enter.   If  you 
       answered  "Cool  Joe",  then  a  file  will  be  created  called 
       COOLJOE.LOW.  Each time you play Lowball, that file will be read 
       and your past history will be available for you to cry over.

       Once  you have entered your name, the screen will clear and  you 
       will  be  placed in the playing screen, ready to show  the  dumb 
       computer players your stuff.  

       NOTE:  After you have enter your name, you will not be  required 
       to do so in the future.  If a player, other than yourself wishes 
       to play, you may change players names by pressing ALT-N from the 
       main playing screen.  You will be allowed to enter from 1 to  21 
       characters  for your name.  The first 8 characters will be  used 
       to create a file containing your playing statistics.


                                PLAYING SCREEN

       The  playing  screen will display the playing positions  of  the 
       players.  These are positioned in a circle to represent a  poker 
       table.   The top center of your screen will show a card  labeled 

                                    - 4 -








       P1,  representing player #1.  The player positions are  numbered 
       from P1 to P8 in a clockwise manner starting at the P1 position.

       The  center  of  the screen displays the  pot.   As  Lowball  is 
       played, the pot will naturally increase as bets are made.

       The  upper  left  part  of the screen  will  show  your  current 
       standings during the course of play.  The upper right side  will 
       show your total standings.  The total standings are saved  after 
       each game in the file created when you entered your name at  the 
       start of Lowball.

       The left side of the screen will show the limit of the game  you 
       are playing.  The right side will show the form of Lowball  your 
       are  currently playing.  The game limit may not be changed  with 
       this  version.  It is possible that a future version will  allow 
       various limits or a table stakes game.

       Near the bottom of the screen, the following will be displayed:

                 F1 Deal          F3 Setup           F5 Stats   
                 F8 High Scores   ALT-N New Player   F10 Quit

       These are the main options you currently have available.   These 
       options  are displayed when you first start Lowball and  at  the 
       end of each hand.


                                 MAIN OPTIONS

       F1 Deal

       To start playing Lowball, you may either press the F1 key or the 
       ENTER  key.   Before  the cards are dealt to  each  player,  all 
       players must either ante, place the blind or place the  straddle 
       bets  depending  on  what form of Lowball you  are  playing.   A 
       marker  will  be  placed by the dealer along with  the  deck  of 
       cards.   The  dealer  will deal out five cards  to  each  player 
       starting with the first player to his left.

       F3 Setup Menu

       Pressing  the F3 key will display the Lowball Setup Menu.   This 
       will allow you to change many of the options available with this 
       version  of  Lowball.  When you quit playing, any  changes  made 
       will  be  saved so they are available to you the next  time  you 
       play.

       F5 Stats

       Pressing the F5 key will display each players current standings.  
       This  screen  is  displayed in the same  order  as  the  playing 
       screen.  The profit, pots won, and pots each player was involved 
       in  will  be  shown below each players  number.   These  figures 
       represent the current game only.


                                    - 5 -








       The  center  of this screen will show the current  hands  dealt, 
       total  hands  dealt,  house  take, total  house  take,  and  any 
       carryover from the pot. 

           Current Hands

       The current hands are the amount of hands dealt during each game 
       you play.

           Total Hands

       The  total hands will show all the Lowball hands that have  been 
       played.

           House Take

       The  house take is the amount of money collected by  the  house.  
       The house will collect money from each player for the  privilege 
       of  playing at their club or casino.  This is usually done  each 
       half  hour  by a pit boss or club employee.  In this  $20  limit 
       game,  you  are charged $2 at the end of every 15  hands.   Some 
       clubs rake a percentage from each pot rather than collect  time.  
       This form of collection is not supported in this version.

           Total House Take

       This  will display the total amount of money taken in  from  all 
       the hands played.

           Carryover To Next Pot

       This  will always show a zero amount unless the hand  previously 
       played  could not be split amount the winners.  If that  is  the 
       case,  the  amount  is shown in order for  all  the  figures  to 
       balance out.

       The last line of this screen will display your complete  history 
       taken from your file on disk.

       To exit this screen and return to the playing screen, just press 
       the ENTER key.

       F8 High Scores

       Pressing  the F8 key will bring up a screen showing the  top  15 
       Lowball players.  The following will be shown on this screen:

              Rank    Players Name    Winnings    Hands    Date

       The first column will show the numbers 1 to 15 which  represents 
       the top players winnings to the 15th. highest players winnings.

       The players name will accept from 1 to 21 characters.

       The winnings is the amount of money you have won for one session 
       of Lowball.  This is not a total of all your winnings.

                                    - 6 -








       The  hands that are displayed will also be for the same  session 
       of  Lowball  played.   This is not a total  of  all  your  hands 
       played.

       The date displayed will be the date you achieved your  winnings.  
       Lowball  will not ask you for the date.  You must have  set  the 
       date from Dos when you first booted up your computer.

       When  you  are finished looking at this screen, press  ENTER  to 
       return to the main screen.

       ALT-N New Player

       Pressing  the  ALT and N key together will allow you  to  change 
       a  players  name.  This should be used when a  friend  wants  to 
       play.   Rather  than  having  your friend  screw  up  your  high 
       winnings  with  his  bad playing habits, press  ALT-N  and  your 
       statistics  will be saved, then your friend can enter his  name.  
       This would be the same thing as quitting the game then  starting 
       over again.

       F10 Quit

       When  you  press  the  F10 key, you will  quit  Lowball  and  be 
       returned   to  your  Dos  prompt.   All  high   scores,   player 
       statistics, and necessary files are then saved.


                                 PLAY OPTIONS

       Once you have pressed either F1 or the ENTER key to deal a hand, 
       your  playing options will appear below your  playing  position.  
       These  options  will  vary slightly depending on  the  round  of 
       betting you are currently in.  The options will be:

                  Bet    Fold    Call    Raise    Pass/Check

       Press  the first letter of one of the options that appear  below 
       your  playing position.  These options will only appear when  it 
       is your turn to act.

       Bet

       Pressing B will place the minimum bet in the pot for you.

       Fold

       Pressing F will fold your hand.  This will erase your hand  from 
       the screen and you will forfeit and further action in the pot.

       Call

       Pressing C will call any bets or raises previously made by other 
       players.  The correct amount of money will be placed in the pot.



                                    - 7 -








       Raise

       Pressing  R  will raise the pot the maximum limit of  the  game.  
       A  raise  simply  means  you are calling  all  bets  and  adding 
       another bet into the pot.

       Pass/Check

       Pressing the P key will pass or check your hand.  Passing a hand 
       means you do not want to bet at this time.  You still remain  in 
       the pot and have the option to later call if a bet or raise  has 
       been  made by any other players.  You will not be able to  raise 
       after you pass or check.

       NOTE:   Please  do  not write me telling  me  that  passing  and 
       checking  are different.  Normally, pass means you  are  tossing 
       your hand away.  To check would mean you plan an sticking around 
       a while to see what the other players are doing.  Who cares what 
       it means, as long you hold onto your cards, you can say anything 
       you  want.   You  can even say "I think I'll  fold".   When  the 
       player  to  your left throws his hand away, you  then  can  say, 
       "Nah...  I think I'll raise".  I am assuming the player to  your 
       left is smaller than you.


                                   DISCARDS

       When it's your turn to discard, a pointer (arrow) will point  to 
       the first card in your hand.  The last line on your screen  will 
       show the following options:

                L/R Arrows Move Cursor      U Arrow Mark Card    
                Alt-O Show Odds           END Discard

       Move the pointer using the Left and Right arrow keys until  it's 
       under the card you wish to discard, then press the Up arrow key.  
       The card will be marked with an "x".  Continue marking the cards 
       you wish to discard then press the END key.  When you press  the 
       END  key,  the marked cards will be discarded  from  your  hand. 
       Pressing the Up arrow on a previously marked card will erase the 
       "x"  and  the card will not be discarded.  If you wish  to  play 
       your hand pat, just press the END key without marking any cards.

           Alt-O Show Odds
 
       Pressing  Alt-O  will  clear your screen and  display  the  odds 
       against being dealt a pat hand, drawing one card and drawing two 
       cards.   The odds against making a hand drawing 3 or more  cards 
       will  not be shown.  In most cases, if you plan on drawing 3  or 
       more, I would suggest you play Keno instead of Lowball.  To exit 
       this screen, press any key and you will be returned to the  same 
       place you were prior to viewing the odds. 

       NOTE:  The odds being displayed assume that all one and two card 
       draws  have  discarded a face card.  The  odds  would  naturally 
       fluctuate dependending on what cards have been discarded.

                                    - 8 -








                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

               1   Display Shuffling            On
               2   Sliding Screens              On
               3   Show Card Movement           On
               4   Card Movement Speed          20
               5   Snow Removal                Off
               6   Sound                        On
               7   Fast Play When Folding      Off
               8   Display Bets                Off
               9   Display Cards Drawn         Off
               0   Save High Games             Off
               A   Type Of Game           Pass Out
               B   Change Playing Position       5
               C   Change Card Colors         
               D   Double Bet After Draw       Off
               E   Pause For Player Action     Off

       These  are  the default settings that come with  Lowball.  These 
       options   may only be changed while in the  Setup  Screen.   Any 
       changes made are always saved when you quit and return to   DOS.  
       In  order for this to happen, you must be logged onto the  drive 
       or directory where LOWBALL.EXE resides.


                                SETUP OPTIONS

       1 - Display Shuffling

       You have the option to display the shuffling of the cards or you 
       may  wish  to play a faster game by not viewing  the  shuffling.  
       This may be changed with this option.

       2 - Sliding Screens

       While  going  from one screen  to  another, the   screens   will 
       slide open.  If this causes snow or you would rather not see  it 
       happen, you may turn it off with this option.

       3 - Show Card Movement

       The  movement of the cards are displaying while they  are  being 
       dealt  to their respective positions.  If you would  rather  not 
       see this, you may set this option to Off.

       4 - Card Movement Speed

       If  option  4 above is On, your cards will be dealt  and   moved 
       around the table at the default speed setting of 20.  This means 
       nothing  until  you actually see the cards in  motion.   If  you 
       press  this  option  7, you will be able  to  change  the  speed 
       setting for the card movement speed.  The bottom of your  screen 
       will display the following options:

                                    - 9 -








                    LEFT/RIGHT Arrows      ENTER      F10

       Use your LEFT/RIGHT Arrow keys to decrease or increase the speed 
       setting.  Press the ENTER key if you want to see the effect  the 
       speed setting has on the card movement.  When you are  satisfied 
       with the setting, press the Function 10 key when your done.

       5 - Snow Removal
    
       Use this option if you are experiencing snow.

       6 - Sound

       If you wish to turn of the sound, change this to OFF.

       7 - Fast Play When Folding

       When this option has been changed to ON, whenever you fold  your 
       hand,  all remaining action will be played at the fastest speed.  
       This  is useful if you have the game playing at a slow pace  and 
       wish to get it over with as soon as possible when you've folded.

       8 - Display Bets

       When  this  is  set to ON, the lower part of  your  screen  will 
       display  the amount of money each player has in the  pot.   This 
       includes the ante each player has placed in the pot.

       9 - Display Cards Drawn

       When  this is set to ON, as each player discards from his  hand, 
       the number of cards drawn will be displayed next to the  players 
       hand.  This will only be visible if you are playing the game  at 
       a slower speed.  If the game is played too fast, everything will 
       be a quick flash and unreadable.

       0 - Save High Games

       If  you  want to save your high scores to disk,  be  sure   this 
       option is On.

       A - Type Of Game

       Each time you press the letter "A", you will toggle the type  of 
       game  you wish to play.  You have the option of playing  Pass  & 
       Out, Blind or Straddle.

       B - Change Playing Position

       If  you  think  you can play better  from  a  different  playing 
       position, press the letter "B" to toggle through the 8 different 
       playing  positions.  When you return to the game, you will  have 
       swapped playing positions with the other player.




                                    - 10 -








       C - Change Card Colors         

       Pressing the letter "C" will bring you to  a screen which   will  
       allow  you  to change the  card  colors.  The  top  portion   or  
       your screen will display a row of   cards, face  down.     Below  
       that row will be another  row,  face   up.  The lower portion of 
       your screen will display the following:

                    Card Back                       Card Face
       
           F1  Border Foreground Color     F4  Border Foreground Color
           F2  Border Background Color     F5  Border Background Color
           F3  Pattern Color               F6  Face Color

                         ALT-D  Restore Default Colors

       Pressing  the Function keys, F1 through F6 will  change  the two  
       card  rows to the available colors  allowed  with  each function 
       key  pressed.  Pressing ALT-D will restore the  card  colors  to 
       their  default colors.  When you are satisfied with  the   color  
       changes,  press the ENTER key and  you  will  be returned to the 
       Setup  Screen.  These changes are saved  when you  quit  playing 
       Lowball.   Be  sure  LOWBALL.EXE  resides   in  the   drive   or 
       directory from where you  first  started  the game.

       D - Double Bet After Draw

       Pressing  the letter "D" will allow double bets after the  draw.  
       Normally  in  this limit game, your bets are always  $20.   With 
       this options set to ON, your bets after the draw will be $40.

       E - Pause For Player Action

       When  this  options is set to ON, action will  pause  with  each 
       player until you press the spacebar.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Options.  If you have option 0 in the Setup Menu set to On, 
       you  will be able to view the top fifteen players.   The  screen 
       will  display the players name, winnings, hands played and  date  
       the winnings was recorded.

       The  bottom line on your screen will show your  total  standings 
       taken from you statistics file.










                                    - 11 -








                              SHAREWARE VERSION

       The  ShareWare  version of Lowball does not support all  of  the 
       options  that  are available in the Registered  version.   These 
       have  purposely  been left out and are available  to  Registered 
       users  only.   After you have played Lowball for   a  reasonable  
       time,    we  ask  for  your  support  by   sending    in    your 
       registration.    Registered  users  will  receive   the   latest 
       Registered  Version.


                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
                 ALL REGISTERED VERSIONS run on either CGA or
                      Monochrome unless otherwise noted.

                            CASINO/GAMBLING GAMES

        *Lowball Poker         Draw Poker               Baccarat  
         Roulette             *Blackjack Connoisseur   *Chuck-a-Luck 
        *Holdem Poker         *Knock Poker             *Red Dog


                               SOLITAIRE GAMES

        *Pyramid              *Poker                   *Osmosis 
        *Accordion             Baker (VGA Only)

                                 OTHER GAMES

        *SuJu                 *Pig


                                  UTILITIES

         DCS           EU           Kill           DX           CDate




















                                    - 12 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                                Lowball Poker
                          Version 3.00 Registration


       Registration Fee 5 1/4" disk                     $15.00  _______   
       Registration Fee 3 1/2" disk                     $17.00  _______

       All 22 Shareware versions on 5 1/4" disks        $ 8.00  _______
       All 22 Shareware versions on 3 1/2" disks        $10.00  _______

                                 Foreign orders add     $ 5.00  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


       Please check one:       MONO____    CGA____    EGA____   VGA____


             Where did you acquire this version of Lowball Poker

       ________________________________________________________________



                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546





                                    - 13 -





```
{% endraw %}

## LOWBALL.DOC

{% raw %}
```
























                                LOWBALL POKER 
                                 Version 3.OO

                               CGA or Monochrome

                         (C) Copyright 1986,87,88,89

                                      by

                                Raymond M. Buti

                              All Rights Reserved


                            United Innovations Plus
                             Post Office Box 21081
                           Castro Valley, Ca.  94546

                                (415) 886-0958























       



                                    TERMS

       This software is distributed as ShareWare.  What this means  is,
       you  a  granted free license to use, copy  and  distribute  this
       software  as  often  as  you  wish  so  long  as  the  following
       restrictions have been met:

       1 - When   distributing   this  software, it  must  be  in   its
           original   unmodified  form.   The ARCed or Compressed  .EXE  
           version   of this software   will  only  be  distributed  to 
           Bulletin  Board Systems and computer information  exchanges, 
           i.e. The Great American Dream Machine (415)-581-3019, GEnie, 
           Delphi, The Source, Compuserve etc.

       2 - Prior written consent from United Innovations Plus  must  be
           obtained  before a fee  or  charge is made for  copying   or
           distribution, with the exception of the computer information     
           exchanges as mentioned above.

       3 - This  software shall not be included  with  other  programs,
           goods,  services,  etc. without prior written  consent  from 
           United  Innovations Plus with the exception of the  computer 
           information exchanges as mentioned above.



                            REGISTRATION AGREEMENT

       United  Innovations Plus requires you to register this  software 
       if  you  plan  on using it.  Registered users will  receive  the 
       latest  version  with all  options available, full  support  and 
       notification  of  later releases.   Please  note  that not   all  
       options   and  functions  are  available  with  this   Shareware 
       release.  To register your copy of this software, please use the 
       Registration   Form   and  make  checks   payable   to    United 
       Innovations Plus.






























                              TABLE OF CONTENTS


       PROGRAMS ON DISK ............................................  1

       PROGRAMS REQUIRED TO RUN LOWBALL ............................  1

       LOWBALL RULES ...............................................  2

       LOWBALL GAMES ...............................................  3

            Pass & Out .............................................  3
            Blind ..................................................  3     
            Straddle ...............................................  4

       STARTING LOWBALL ............................................  4

       PLAYING SCREEN ..............................................  4

       MAIN OPTIONS ................................................  5

           F1 Deal .................................................  5
           F3 Setup Menu ...........................................  5
           F5 Stats ................................................  5
                Current Hands ......................................  6
                Total Hands ........................................  6
                House Take .........................................  6
                Total House Take ...................................  6
                Carryover To Next Pot ..............................  6
           F8 High Scores ..........................................  6
           ALT-N New Player ........................................  7
           F10 Quit ................................................  7

       PLAY OPTIONS ................................................  7

           Bet .....................................................  7
           Fold ....................................................  7
           Call ....................................................  7
           Raise ...................................................  8
           Pass/Check ..............................................  8

       DISCARDS ....................................................  8

                Alt-O Show Odds ....................................  8

       SETUP MENU ..................................................  9











                                    - i -








       SETUP OPTIONS ...............................................  9

           Display Shuffling .......................................  9
           Sliding Screens .........................................  9
           Show Card Movement ......................................  9
           Card Movement Speed .....................................  9
           Snow Removal ............................................ 10
           Sound ................................................... 10
           Fast Play When Folding .................................. 10
           Display Bets ............................................ 10
           Display Cards Drawn ..................................... 10
           Save High Games ......................................... 10
           Type Of Game ............................................ 10
           Change Playing Position ................................. 10
           Change Card Colors ...................................... 11
           Double Bet After Draw ................................... 11
           Pause For Player Action ................................. 11

       HIGH SCORES ................................................. 11

       SHAREWARE VERSION ........................................... 12

       OTHER PROGRAMS .............................................. 12

       REGISTRATION FORM ........................................... 13
































                                    - ii -








                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Lowball .Exe   -  The main program for Lowball Poker.
         Lowball .Doc   -  The documentation for Lowball Poker.
         LoStart .Bat   -  A batch file to  read  the  documentation, 
                           print the documentation and install  Lowball 
                           on a Hard Drive.
         LoRead  .Com   -  Used by LoStart.Bat
         LoReply .Com   -  Used by LoStart.Bat
         LoIntro        -  Used by LoStart.Bat
         LoPrt          -  Used by LoStart.Bat
         LoHd           -  Used by LoStart.Bat
         LoReg          -  Registration Form
         Low30S   .Arc  -  Shareware Version of Lowball Poker


                       PROGRAMS REQUIRED TO RUN LOWBALL

       The only file required to play Lowball is LOWBALL.EXE.  Be  sure 
       you  are  in  the  same directory  or  drive  where  LOWBALL.EXE 
       resides.































                                    - 1 -








                                LOWBALL RULES

       The  game  of Lowball Poker is played with  a  fifty-three  card 
       deck,  consisting of a standard deck of playing cards  with  one 
       joker.   This  form  of  Lowball is  also  known  as  California 
       Lowball.   The rank of cards are from the King (High) to an  Ace 
       (Low).   The joker is wild and used as the lowest card  in  your 
       hand so long as it doesn't make a pair.  If your lowest card was 
       a  2 and you had the joker in your hand, the jokers value  would 
       count as an Ace.  If you also had an Ace in your hand, the joker 
       would then become a 3, etc.  If you have the joker in your hand, 
       DO  NOT DISCARD THE JOKER.  This card will only help your hand.

       In most forms of poker, you are trying to get the highest  hand.  
       In Lowball, your goal is to beat your opponents by trying to get 
       the lowest hand.  A complete reverse of what is normally  played 
       in high poker.  The best hand is a 5-4-3-2-A known as a wheel or 
       bicycle.   Straights and flushes do not count.  Some  variations 
       of Lowball count straights and flushes against you.

       The dealer will shuffle the cards and the player to the  dealers 
       right will cut the cards.  The dealer deals out five cards,  one 
       at  a time starting with the first player to the  dealers  left.  
       There  are eight players in this game.  A betting  round  starts 
       with  the first player to the dealers left.  On the first  round 
       of  betting, you must either bet or you are forced to fold  your 
       hand.  If nobody bets (opens), then the last player to act  wins 
       the pot which will consists of the antes.

       Once the pot has been opened, the remaining players will have  a 
       choice of either to call (place in the pot the amount the opener 
       put  in), raise (place in the pot the amount the opener  put  in 
       plus the amount of your raise), or fold (toss your hand away and 
       resign from further action and forfeiting any money currently in 
       the  pot). You are playing at a $20 limit table.  All  bets  are 
       $20.  When raising, you must raise $20.  

       After the first round of betting, starting with the first player 
       to the dealers left, each player will discard from 1 to 5  cards 
       from  his hand or play his hand pat (stay with what  you  have).  
       The  dealer  will  then burn the top  card  from  the  remaining 
       portion  of  the deck.  This is done by dealing the  first  card 
       into  the center of the table.  The dealer will then  deal  each 
       player  replacement cards from the unused portion of  the  deck.  
       So  what  happens if all 8 players stay in the pot  and  draw  3 
       cards  each?   We have 8 players times 5 cards which  equals  40 
       cards.  We have 12 cards remaining in the unused portion of  the 
       deck  and 1 burned card.  Now we have 8 players drawing 3  cards 
       each  which  is another 24 cards to be dealt from  a  deck  only 
       containing  12 cards of which only 11 are playable  (the  bottom 
       card  is  never dealt).  How is this possible?  In  casinos  and 
       card  clubs, all players discard their cards first,  before  the 
       new  cards are dealt.  While dealing the replacement  cards  and 
       when the deck is down to one card (not a playable card), all the 
       discards  including the last card are reshuffled and the  dealer 


                                    - 2 -








       continues  to deal the players their remaining cards.   If  this 
       was  not done, you couldn't play with 8 players.   This  doesn't 
       happen too often unless your playing in a home game for pennies.

       Once  all the players have their new cards, the another  betting 
       round  takes place.  This time you may check (make no  bet,  but 
       stay  in  the  pot), bet, raise, re-raise.  A pot  may  only  be 
       raised  5  times  in each round of betting.   Once  the  betting 
       action is over, the remaining players in the pot will show their 
       hands and the player with the lowest hand will win the pot.   In 
       the  event of a tie between 2 or more players, the pot  will  be 
       split  among  the  winners.  If the pot  cannot  be  divided  up 
       equally in dollars amounts, the extra couple of dollars will  be 
       left in the pot for the winner of the next pot.

       Those interested in learning more about Lowball should  purchase 
       a  book on Lowball Poker.  The best way to learn the game is  to 
       dig  deep into your pocket and pull a few bills and charge  over 
       to  your  nearest card club and say, "Deal me  in  sucker".   It 
       won't take long before you find out who the sucker is.


                                LOWBALL GAMES

       Lowball  can be played in a few different variations.   Not  all 
       forms  of  Lowball are supported in this game.  This  game  will 
       support  3 of the most widely played forms.  The following is  a 
       description  of forms of Lowball currently available  with  this 
       version.

                                  Pass & Out

       All players ante $2 and must either bet or fold before the draw.  
       The first player to the dealers left is first to act.

                                    Blind     

       All players ante $2 and must either bet or fold before the draw.  
       The  first player to the dealers left places a bet ($20) in  the 
       pot before the cards are dealt.  This is considered a blind bet, 
       meaning  the  player is opening the pot without looking  at  his 
       cards.  A marker will be place by that player indicating he  has 
       the blind.  The first player to the blinds left is first to act.  
       This  makes the blind last to act before the draw but  first  to 
       act after the draw.

       The  blind  game is intended to create a little  action.   After 
       all,  wouldn't  you  want to call a  player  that  bets  without 
       looking at his cards?

       Before  the draw, starting with the first player to  the  blinds 
       left,  must either call the blind bet, raise or fold.  When  its 
       the blinds turn to play and the pot has only been called, he has 
       no  further  action because he is already in the  pot.   On  the 
       other  hand,  if the pot was raised, he may  call,  re-raise  or 


                                    - 3 -








       fold.  Not supported in the version is what as known as a  "live 
       blind".   A  live  blind means that if the pot  was  not  raised 
       before  the  draw,  then the blind has  the  option  of  raising 
       himself by placing an addition bet in the pot.  

                                   Straddle

       In  this form of Lowball, none of the players ante.  Instead,  3 
       players put in a straddle bet.  The first player to the  dealers 
       left puts in $5, the next player puts in $5, and the next player 
       puts  in  $10.  This amount adds up to the minimum  bet  of  the 
       limit  game  you are playing.  A $4 limit game  would  have  the 
       straddle at $1, $1 & $2; a $10 limit game would be $2, $3 &  $5; 
       a  $200 limit game would be $50, $50 & $100.  The  players  that 
       have placed the straddle bets will have markers placed in  front 
       of their playing positions.

       This game also creates action.  You have 3 players with  partial 
       bets in the pot already.  This makes it a little easier for them 
       to call.  If they don't call, they lose the straddle.

       The  first player to act before the draw is the first player  to 
       the  left  of  the big straddle and  play  continues  clockwise.  
       After  the  draw,  action starts with the first  player  to  the 
       dealers left.


                               STARTING LOWBALL

       From  your  DOS  prompt, type Lowball  and  press  ENTER.   Your 
       monitor  will display the opening screen.  After a few  seconds, 
       or  until you hit a key, you will be asked for your  name.   You 
       must  enter something when asked.  If you don't like your  name, 
       enter  anything  you  want.   Lowball  will  save  your  playing 
       statistics  to  a file associated with what you enter.   If  you 
       answered  "Cool  Joe",  then  a  file  will  be  created  called 
       COOLJOE.LOW.  Each time you play Lowball, that file will be read 
       and your past history will be available for you to cry over.

       Once  you have entered your name, the screen will clear and  you 
       will  be  placed in the playing screen, ready to show  the  dumb 
       computer players your stuff.  

       NOTE:  After you have enter your name, you will not be  required 
       to do so in the future.  If a player, other than yourself wishes 
       to play, you may change players names by pressing ALT-N from the 
       main playing screen.  You will be allowed to enter from 1 to  21 
       characters  for your name.  The first 8 characters will be  used 
       to create a file containing your playing statistics.


                                PLAYING SCREEN

       The  playing  screen will display the playing positions  of  the 
       players.  These are positioned in a circle to represent a  poker 
       table.   The top center of your screen will show a card  labeled 

                                    - 4 -








       P1,  representing player #1.  The player positions are  numbered 
       from P1 to P8 in a clockwise manner starting at the P1 position.

       The  center  of  the screen displays the  pot.   As  Lowball  is 
       played, the pot will naturally increase as bets are made.

       The  upper  left  part  of the screen  will  show  your  current 
       standings during the course of play.  The upper right side  will 
       show your total standings.  The total standings are saved  after 
       each game in the file created when you entered your name at  the 
       start of Lowball.

       The left side of the screen will show the limit of the game  you 
       are playing.  The right side will show the form of Lowball  your 
       are  currently playing.  The game limit may not be changed  with 
       this  version.  It is possible that a future version will  allow 
       various limits or a table stakes game.

       Near the bottom of the screen, the following will be displayed:

                 F1 Deal          F3 Setup           F5 Stats   
                 F8 High Scores   ALT-N New Player   F10 Quit

       These are the main options you currently have available.   These 
       options  are displayed when you first start Lowball and  at  the 
       end of each hand.


                                 MAIN OPTIONS

       F1 Deal

       To start playing Lowball, you may either press the F1 key or the 
       ENTER  key.   Before  the cards are dealt to  each  player,  all 
       players must either ante, place the blind or place the  straddle 
       bets  depending  on  what form of Lowball you  are  playing.   A 
       marker  will  be  placed by the dealer along with  the  deck  of 
       cards.   The  dealer  will deal out five cards  to  each  player 
       starting with the first player to his left.

       F3 Setup Menu

       Pressing  the F3 key will display the Lowball Setup Menu.   This 
       will allow you to change many of the options available with this 
       version  of  Lowball.  When you quit playing, any  changes  made 
       will  be  saved so they are available to you the next  time  you 
       play.

       F5 Stats

       Pressing the F5 key will display each players current standings.  
       This  screen  is  displayed in the same  order  as  the  playing 
       screen.  The profit, pots won, and pots each player was involved 
       in  will  be  shown below each players  number.   These  figures 
       represent the current game only.


                                    - 5 -








       The  center  of this screen will show the current  hands  dealt, 
       total  hands  dealt,  house  take, total  house  take,  and  any 
       carryover from the pot. 

           Current Hands

       The current hands are the amount of hands dealt during each game 
       you play.

           Total Hands

       The  total hands will show all the Lowball hands that have  been 
       played.

           House Take

       The  house take is the amount of money collected by  the  house.  
       The house will collect money from each player for the  privilege 
       of  playing at their club or casino.  This is usually done  each 
       half  hour  by a pit boss or club employee.  In this  $20  limit 
       game,  you  are charged $2 at the end of every 15  hands.   Some 
       clubs rake a percentage from each pot rather than collect  time.  
       This form of collection is not supported in this version.

           Total House Take

       This  will display the total amount of money taken in  from  all 
       the hands played.

           Carryover To Next Pot

       This  will always show a zero amount unless the hand  previously 
       played  could not be split amount the winners.  If that  is  the 
       case,  the  amount  is shown in order for  all  the  figures  to 
       balance out.

       The last line of this screen will display your complete  history 
       taken from your file on disk.

       To exit this screen and return to the playing screen, just press 
       the ENTER key.

       F8 High Scores

       Pressing  the F8 key will bring up a screen showing the  top  15 
       Lowball players.  The following will be shown on this screen:

              Rank    Players Name    Winnings    Hands    Date

       The first column will show the numbers 1 to 15 which  represents 
       the top players winnings to the 15th. highest players winnings.

       The players name will accept from 1 to 21 characters.

       The winnings is the amount of money you have won for one session 
       of Lowball.  This is not a total of all your winnings.

                                    - 6 -








       The  hands that are displayed will also be for the same  session 
       of  Lowball  played.   This is not a total  of  all  your  hands 
       played.

       The date displayed will be the date you achieved your  winnings.  
       Lowball  will not ask you for the date.  You must have  set  the 
       date from Dos when you first booted up your computer.

       When  you  are finished looking at this screen, press  ENTER  to 
       return to the main screen.

       ALT-N New Player

       Pressing  the  ALT and N key together will allow you  to  change 
       a  players  name.  This should be used when a  friend  wants  to 
       play.   Rather  than  having  your friend  screw  up  your  high 
       winnings  with  his  bad playing habits, press  ALT-N  and  your 
       statistics  will be saved, then your friend can enter his  name.  
       This would be the same thing as quitting the game then  starting 
       over again.

       F10 Quit

       When  you  press  the  F10 key, you will  quit  Lowball  and  be 
       returned   to  your  Dos  prompt.   All  high   scores,   player 
       statistics, and necessary files are then saved.


                                 PLAY OPTIONS

       Once you have pressed either F1 or the ENTER key to deal a hand, 
       your  playing options will appear below your  playing  position.  
       These  options  will  vary slightly depending on  the  round  of 
       betting you are currently in.  The options will be:

                  Bet    Fold    Call    Raise    Pass/Check

       Press  the first letter of one of the options that appear  below 
       your  playing position.  These options will only appear when  it 
       is your turn to act.

       Bet

       Pressing B will place the minimum bet in the pot for you.

       Fold

       Pressing F will fold your hand.  This will erase your hand  from 
       the screen and you will forfeit and further action in the pot.

       Call

       Pressing C will call any bets or raises previously made by other 
       players.  The correct amount of money will be placed in the pot.



                                    - 7 -








       Raise

       Pressing  R  will raise the pot the maximum limit of  the  game.  
       A  raise  simply  means  you are calling  all  bets  and  adding 
       another bet into the pot.

       Pass/Check

       Pressing the P key will pass or check your hand.  Passing a hand 
       means you do not want to bet at this time.  You still remain  in 
       the pot and have the option to later call if a bet or raise  has 
       been  made by any other players.  You will not be able to  raise 
       after you pass or check.

       NOTE:   Please  do  not write me telling  me  that  passing  and 
       checking  are different.  Normally, pass means you  are  tossing 
       your hand away.  To check would mean you plan an sticking around 
       a while to see what the other players are doing.  Who cares what 
       it means, as long you hold onto your cards, you can say anything 
       you  want.   You  can even say "I think I'll  fold".   When  the 
       player  to  your left throws his hand away, you  then  can  say, 
       "Nah...  I think I'll raise".  I am assuming the player to  your 
       left is smaller than you.


                                   DISCARDS

       When it's your turn to discard, a pointer (arrow) will point  to 
       the first card in your hand.  The last line on your screen  will 
       show the following options:

                L/R Arrows Move Cursor      U Arrow Mark Card    
                Alt-O Show Odds           END Discard

       Move the pointer using the Left and Right arrow keys until  it's 
       under the card you wish to discard, then press the Up arrow key.  
       The card will be marked with an "x".  Continue marking the cards 
       you wish to discard then press the END key.  When you press  the 
       END  key,  the marked cards will be discarded  from  your  hand. 
       Pressing the Up arrow on a previously marked card will erase the 
       "x"  and  the card will not be discarded.  If you wish  to  play 
       your hand pat, just press the END key without marking any cards.

           Alt-O Show Odds
 
       Pressing  Alt-O  will  clear your screen and  display  the  odds 
       against being dealt a pat hand, drawing one card and drawing two 
       cards.   The odds against making a hand drawing 3 or more  cards 
       will  not be shown.  In most cases, if you plan on drawing 3  or 
       more, I would suggest you play Keno instead of Lowball.  To exit 
       this screen, press any key and you will be returned to the  same 
       place you were prior to viewing the odds. 

       NOTE:  The odds being displayed assume that all one and two card 
       draws  have  discarded a face card.  The  odds  would  naturally 
       fluctuate dependending on what cards have been discarded.

                                    - 8 -








                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

               1   Display Shuffling            On
               2   Sliding Screens              On
               3   Show Card Movement           On
               4   Card Movement Speed          20
               5   Snow Removal                Off
               6   Sound                        On
               7   Fast Play When Folding      Off
               8   Display Bets                Off
               9   Display Cards Drawn         Off
               0   Save High Games             Off
               A   Type Of Game           Pass Out
               B   Change Playing Position       5
               C   Change Card Colors         
               D   Double Bet After Draw       Off
               E   Pause For Player Action     Off

       These  are  the default settings that come with  Lowball.  These 
       options   may only be changed while in the  Setup  Screen.   Any 
       changes made are always saved when you quit and return to   DOS.  
       In  order for this to happen, you must be logged onto the  drive 
       or directory where LOWBALL.EXE resides.


                                SETUP OPTIONS

       1 - Display Shuffling

       You have the option to display the shuffling of the cards or you 
       may  wish  to play a faster game by not viewing  the  shuffling.  
       This may be changed with this option.

       2 - Sliding Screens

       While  going  from one screen  to  another, the   screens   will 
       slide open.  If this causes snow or you would rather not see  it 
       happen, you may turn it off with this option.

       3 - Show Card Movement

       The  movement of the cards are displaying while they  are  being 
       dealt  to their respective positions.  If you would  rather  not 
       see this, you may set this option to Off.

       4 - Card Movement Speed

       If  option  4 above is On, your cards will be dealt  and   moved 
       around the table at the default speed setting of 20.  This means 
       nothing  until  you actually see the cards in  motion.   If  you 
       press  this  option  7, you will be able  to  change  the  speed 
       setting for the card movement speed.  The bottom of your  screen 
       will display the following options:

                                    - 9 -








                    LEFT/RIGHT Arrows      ENTER      F10

       Use your LEFT/RIGHT Arrow keys to decrease or increase the speed 
       setting.  Press the ENTER key if you want to see the effect  the 
       speed setting has on the card movement.  When you are  satisfied 
       with the setting, press the Function 10 key when your done.

       5 - Snow Removal
    
       Use this option if you are experiencing snow.

       6 - Sound

       If you wish to turn of the sound, change this to OFF.

       7 - Fast Play When Folding

       When this option has been changed to ON, whenever you fold  your 
       hand,  all remaining action will be played at the fastest speed.  
       This  is useful if you have the game playing at a slow pace  and 
       wish to get it over with as soon as possible when you've folded.

       8 - Display Bets

       When  this  is  set to ON, the lower part of  your  screen  will 
       display  the amount of money each player has in the  pot.   This 
       includes the ante each player has placed in the pot.

       9 - Display Cards Drawn

       When  this is set to ON, as each player discards from his  hand, 
       the number of cards drawn will be displayed next to the  players 
       hand.  This will only be visible if you are playing the game  at 
       a slower speed.  If the game is played too fast, everything will 
       be a quick flash and unreadable.

       0 - Save High Games

       If  you  want to save your high scores to disk,  be  sure   this 
       option is On.

       A - Type Of Game

       Each time you press the letter "A", you will toggle the type  of 
       game  you wish to play.  You have the option of playing  Pass  & 
       Out, Blind or Straddle.

       B - Change Playing Position

       If  you  think  you can play better  from  a  different  playing 
       position, press the letter "B" to toggle through the 8 different 
       playing  positions.  When you return to the game, you will  have 
       swapped playing positions with the other player.




                                    - 10 -








       C - Change Card Colors         

       Pressing the letter "C" will bring you to  a screen which   will  
       allow  you  to change the  card  colors.  The  top  portion   or  
       your screen will display a row of   cards, face  down.     Below  
       that row will be another  row,  face   up.  The lower portion of 
       your screen will display the following:

                    Card Back                       Card Face
       
           F1  Border Foreground Color     F4  Border Foreground Color
           F2  Border Background Color     F5  Border Background Color
           F3  Pattern Color               F6  Face Color

                         ALT-D  Restore Default Colors

       Pressing  the Function keys, F1 through F6 will  change  the two  
       card  rows to the available colors  allowed  with  each function 
       key  pressed.  Pressing ALT-D will restore the  card  colors  to 
       their  default colors.  When you are satisfied with  the   color  
       changes,  press the ENTER key and  you  will  be returned to the 
       Setup  Screen.  These changes are saved  when you  quit  playing 
       Lowball.   Be  sure  LOWBALL.EXE  resides   in  the   drive   or 
       directory from where you  first  started  the game.

       D - Double Bet After Draw

       Pressing  the letter "D" will allow double bets after the  draw.  
       Normally  in  this limit game, your bets are always  $20.   With 
       this options set to ON, your bets after the draw will be $40.

       E - Pause For Player Action

       When  this  options is set to ON, action will  pause  with  each 
       player until you press the spacebar.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Options.  If you have option 0 in the Setup Menu set to On, 
       you  will be able to view the top fifteen players.   The  screen 
       will  display the players name, winnings, hands played and  date  
       the winnings was recorded.

       The  bottom line on your screen will show your  total  standings 
       taken from you statistics file.










                                    - 11 -








                              SHAREWARE VERSION

       The  ShareWare  version of Lowball does not support all  of  the 
       options  that  are available in the Registered  version.   These 
       have  purposely  been left out and are available  to  Registered 
       users  only.   After you have played Lowball for   a  reasonable  
       time,    we  ask  for  your  support  by   sending    in    your 
       registration.    Registered  users  will  receive   the   latest 
       Registered  Version.


                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
                 ALL REGISTERED VERSIONS run on either CGA or
                      Monochrome unless otherwise noted.

                            CASINO/GAMBLING GAMES

        *Lowball Poker         Draw Poker               Baccarat  
         Roulette             *Blackjack Connoisseur   *Chuck-a-Luck 
        *Holdem Poker         *Knock Poker             *Red Dog


                               SOLITAIRE GAMES

        *Pyramid              *Poker                   *Osmosis 
        *Accordion             Baker (VGA Only)

                                 OTHER GAMES

        *SuJu                 *Pig


                                  UTILITIES

         DCS           EU           Kill           DX           CDate




















                                    - 12 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                                Lowball Poker
                          Version 3.00 Registration


       Registration Fee 5 1/4" disk                     $15.00  _______   
       Registration Fee 3 1/2" disk                     $17.00  _______

       All 22 Shareware versions on 5 1/4" disks        $ 8.00  _______
       All 22 Shareware versions on 3 1/2" disks        $10.00  _______

                                 Foreign orders add     $ 5.00  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


       Please check one:       MONO____    CGA____    EGA____   VGA____


             Where did you acquire this version of Lowball Poker

       ________________________________________________________________



                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546





                                    - 13 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1956

     Volume in drive A has no label
     Directory of A:\

    FILE1956 TXT      2073  12-29-89  11:44a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:45a
    LOHD               473  11-06-89  11:33a
    LOINTRO            795  11-06-89  11:33a
    LOPRT              221  11-06-89  11:33a
    LOREAD   COM      4200  11-06-89  11:33a
    LOREG             1787  11-06-89  11:33a
    LOREPLY  COM        14  11-06-89  11:33a
    LOSTART  BAT       704  11-06-89  11:33a
    LOW30AS  ARC     80798  11-06-89  11:33a
    LOWBALL  DOC     38121  11-06-89  11:33a
    LOWBALL  EXE     91856  11-06-89  11:33a
           13 file(s)     221620 bytes
                           93184 bytes free
