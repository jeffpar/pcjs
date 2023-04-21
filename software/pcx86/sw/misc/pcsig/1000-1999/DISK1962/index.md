---
layout: page
title: "PC-SIG Diskette Library (Disk #1962)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1962/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1962"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DRAW POKER PROFESSIONAL"

    Keep your card skills polished and your poker face in training.  Play
    DRAW POKER PROFESSIONAL in an eight-handed game of your favorite version
    of poker.
    
    Whether you are a card game enthusiast, a neighborhood player or a
    professional, you can play poker just as it is played in a card club or
    casino.  Seven of the eight hands are played by the computer.  Play
    Straight Ante, Blind, Straddle, Anything Opens or a Jacks or Better
    game.  Choose from the many configuration options to suit your playing
    preferences, mood or skill level.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DRAW.DOC

{% raw %}
```






















                           DRAW POKER PROFESSIONAL
                                 Version 2.OO

                               CGA or Monochrome

                           (C) Copyright 1987,88,89

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


       INTRODUCTION ................................................  1

       PROGRAMS ON DISK ............................................  1

       PROGRAMS REQUIRED TO RUN DRAW POKER .........................  1

       DRAW POKER RULES ............................................  2

       RANK OF HANDS ...............................................  2

       DRAW GAMES ..................................................  2


          Straight Ante ............................................  2

          Blind ....................................................  2    

          Straddle .................................................  3

       STARTING DRAW ...............................................  3

       PLAYING SCREEN ..............................................  4

       MAIN OPTIONS ................................................  4

          F1 Deal ..................................................  4

          F3 Setup Menu ............................................  5

          F5 Stats .................................................  5

          F8 High Scores ...........................................  6

          ALT-N New Player .........................................  6

          F10 Quit .................................................  6

       PLAY OPTIONS ................................................  6

          Bet ......................................................  7

          Fold .....................................................  7

          Call .....................................................  7

          Raise ....................................................  7

          Pass/Check ...............................................  7

       DISCARDS ....................................................  7

           Alt-O Show Odds .........................................  8


                                    - i -








       SETUP MENU ..................................................  8

       SETUP OPTIONS ...............................................  8

          Display Shuffling ........................................  8

          Sliding Screens ..........................................  8

          Show Card Movement .......................................  9

          Card Movement Speed ......................................  9

          Snow Removal .............................................  9

          Sound ....................................................  9

          Allow Check/Raise ........................................  9

          Display Bets .............................................  9

          Fast Play When Folding ...................................  9

          Save High Games ..........................................  9

          Type Of Game ............................................. 10

          Openers .................................................. 10

          Change Playing Position .................................. 10

          Change Card Colors ....................................... 10

          Double Bet After Draw .................................... 10

          Pause For Player Action .................................. 11

          Display Cards Drawn ...................................... 11

       HIGH SCORES ................................................. 11

       SHAREWARE VERSION ........................................... 11

       OTHER PROGRAMS .............................................. 12

          Casino/Gambling Games .................................... 12

          Solitaire Games .......................................... 12

          Other Games .............................................. 12

          Utilities ................................................ 12

       REGISTRATION FORM ........................................... 13




                                    - ii -

      






                                 INTRODUCTION

       The  documentation for Draw Poker is intended to show  the  user 
       how  this computer version is played.  It has not  been  written 
       for  the complete novice at Draw Poker.  Those that  have  never 
       played Draw Poker should purchase one of the many books  written 
       on  the subject for a better understanding of the game.  If  you 
       are  a beginner at Draw Poker, hopefully this game will  improve 
       your playing.

       This game was written to be played as a $20 limit game.   Future 
       versions  may  have  a table stakes option.   This  will  depend 
       largely on registrations and user comments.


                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       Draw Poker distribution disk.

           File Name            File Description
        
         Draw   .Exe     -  The main program for Draw Poker.
         Draw   .Doc     -  The documentation for Draw Poker.
         DStart .Bat     -  A batch file  to  read  the  documentation, 
                            print the documentation and install Draw on 
                            a Hard Drive.
         DRead  .Com     -  Used by DStart.Bat
         DReply .Com     -  Used by DStart.Bat
         DIntro          -  Used by DStart.Bat
         DPrt            -  Used by DStart.Bat
         DHd             -  Used by DStart.Bat
         DReg            -  Registration Form
         Draw2S .Arc     -  Shareware Version of Draw Poker


                     PROGRAMS REQUIRED TO RUN DRAW POKER

       The only file required to play Draw Poker is DRAW.EXE.  Be  sure 
       you   are  in  the  same directory  or  drive   where   DRAW.EXE 
       resides.   You  must have a minimum of 384K of Ram to  run  Draw 
       Poker Professional.















                                    - 1 -








                               DRAW POKER RULES

       Each  player is dealt five cards, face down.  Each  player  will 
       take  a turn dealing the cards.  Cards are dealt in a  clockwise 
       manner  starting with the player to the dealers immediate  left.  
       The cards are dealt one at a time until each player has a  total 
       of  five cards.  The undealt cards are set aside for later  use.  
       These are usually placed in front of the dealer.

       A betting interval then takes place. Then each active player, in 
       turn,  may discard from one to five cards or stay with  what  he 
       has.   The dealer will then give each active player  replacement 
       cards  from the top of the unused portion of the deck.   Another 
       betting interval takes place followed by a showdown in which the 
       highest hand among the active players wins the pot.


                                RANK OF HANDS
                               (Best to Worst)
       
              Hand                    Example (x denotes any card)

          Royal Flush                    A-K-Q-J-10 suited
          Straight Flush                 9-8-7-6-5  suited
          Four of a Kind                 3-3-3-3-x
          Full House                     8-8-8-6-6
          Flush                          Q-8-7-5-2  suited
          Straight                       7-6-5-4-3  mixed suits
          Three of a Kind                4-4-4-x-x
          Two Pair                       A-A-8-8-x
          One Pair                       2-2-x-x-x
          No Pair                        Q-7-4-3-2  mixed suits


                                  DRAW GAMES

       Draw can be played in a few different variations.  Not all forms  
       of   Draw  are  supported in this game.   The  following  is   a 
       description  of the types of Draw Poker games allowed with  this 
       version.

                                Straight Ante

       All  players  ante  $2 and may either bet or  check  their  hand 
       before the draw.  The first player to the dealers left is  first 
       to act.

                                    Blind     

       All  players ante $2 and must either bet, raise or  fold  before 
       the  draw.  The  first player to the dealers left places  a  bet 
       ($20)  in   the  pot  before  the  cards  are  dealt.   This  is 
       considered a blind bet, meaning  the  player is opening the  pot 
       without looking  at  his cards.  A marker will be place by  that 
       player  indicating he  has the blind.  The first player  to  the 


                                    - 2 -








       blinds  left is first to act. This  makes the blind last to  act 
       before the draw but first to act after the draw.

       The  blind  game is intended to create a little  action.   After 
       all,  wouldn't  you  want to call a  player  that  bets  without 
       looking at his cards?

       Before  the draw, starting with the first player to  the  blinds 
       left,  the player must either call the blind bet, raise or fold.  
       When   its  the blinds turn to play and the pot  has  only  been 
       called, he has no  further  action because he is already in  the  
       pot. On the other hand, if the pot was raised, he may call,  re-
       raise  or fold.  Not supported in this version is what as  known 
       as a  "live blind".   A  live  blind means that if the pot   was  
       not  raised before  the  draw,  then the blind has  the   option  
       of  raising himself by placing an addition bet in the pot.  

                                   Straddle

       In   this form of Draw, none of the players ante.   Instead,   3 
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


                                STARTING DRAW

       From   your  DOS  prompt, type Draw  and  press   ENTER.    Your 
       monitor  will display the opening screen.  After a few  seconds, 
       or  until you hit a key, you will be asked for your  name.   You 
       must  enter something when asked.  If you don't like your  name, 
       enter   anything  you  want.   Draw  will  save   your   playing 
       statistics  to  a file associated with what you enter.   If  you 
       answered  "Cool  Joe",  then  a  file  will  be  created  called 
       COOLJOE.DPH.   Each time you play Draw, that file will  be  read 
       and your past history will be available for you to cry over.

       Once  you have entered your name, the screen will clear and  you 
       will  be  placed in the playing screen, ready to show  the  dumb 
       computer players your stuff.  

       NOTE:  After you have enter your name, you will not be  required 

                                    - 3 -








       to do so in the future.  If a player, other than yourself wishes 
       to play, you may change players names by pressing ALT-N from the 
       main playing screen.  You will be allowed to enter from 1 to  21 
       characters  for your name.  The first 8 characters will be  used 
       to create a file containing your playing statistics.


                                PLAYING SCREEN

       The  playing  screen will display the playing positions  of  the 
       players.  These are positioned in a circle to represent a  poker 
       table.   The top center of your screen will show a card  labeled 
       P1,  representing player #1.  The player positions are  numbered 
       from P1 to P8 in a clockwise manner starting at the P1 position.

       The   center  of  the screen displays the  pot.   As   Draw   is 
       played, the pot will naturally increase as bets are made.

       The  upper  left  part  of the screen  will  show  your  current 
       standings during the course of play.  The upper right side  will 
       show your total standings.  The total standings are saved  after 
       each game in the file created when you entered your name at  the 
       start of Draw.

       The  left  side  of the screen will show  the  requirements  for 
       opening the pot.  This will be either "Anything Opens" or "Jacks 
       or Better".  The right side will show the form of Draw  your are  
       currently playing.  The game limit may not be changed  with this  
       version.   It  is  possible that a future  version  will   allow 
       various limits or a table stakes game.

       Near the bottom of the screen, the following will be displayed:

                 F1 Deal          F3 Setup           F5 Stats   
                 F8 High Scores   ALT-N New Player   F10 Quit

       These are the main options you currently have available.   These 
       options   are displayed when you first start Draw and   at   the 
       end of each hand.


                                 MAIN OPTIONS

       F1 Deal

       To  start playing Draw, you may either press the F1 key  or  the 
       ENTER  key.   Before  the cards are dealt to  each  player,  all 
       players must either ante, place the blind or place the  straddle 
       bets   depending  on  what form of Draw you  are   playing.    A 
       marker  will  be  placed by the dealer along with  the  deck  of 
       cards.   The  dealer  will deal out five cards  to  each  player 
       starting with the first player to his left.





                                    - 4 -








       F3 Setup Menu

       Pressing the F3 key will display the Draw Setup Menu.  This will 
       allow  you  to change many of the options  available  with  this 
       version  of Draw.  When you quit playing, any changes made  will  
       be  saved so they are available to you the next  time  you play.

       F5 Stats

       Pressing the F5 key will display each players current standings.  
       This  screen  is  displayed in the same  order  as  the  playing 
       screen.  The profit, pots won, and pots each player was involved 
       in  will  be  shown below each players  number.   These  figures 
       represent the current game only.

       The  center  of this screen will show the current  hands  dealt, 
       total  hands  dealt,  house  take, total  house  take,  and  any 
       carryover from the pot. 

           Current Hands

       The current hands are the amount of hands dealt during each game 
       you play.

           Total Hands

       The  total  hands will show all the Draw hands that  have   been 
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
       played  could not be split amount the winners.  This could  also 
       show  the size of the pot if you are playing "Jacks  or  Better" 
       and the pot was not opened.

       The last line of this screen will display your complete  history 
       taken from your file on disk.

       To exit this screen and return to the playing screen, just press 
       the ENTER key.

                                    - 5 -








       F8 High Scores

       Pressing  the F8 key will bring up a screen showing the  top  15 
       Draw players.  The following will be shown on this screen:

              Rank    Players Name    Winnings    Hands    Date

       The first column will show the numbers 1 to 15 which  represents 
       the top players winnings to the 15th. highest players winnings.

       The players name will accept from 1 to 21 characters.

       The winnings is the amount of money you have won for one session 
       of Draw.  This is not a total of all your winnings.

       The  hands that are displayed will also be for the same  session 
       of Draw played.  This is not a total of all your hands played.

       The date displayed will be the date you achieved your  winnings.  
       Draw will not ask you for the date.  You must have set the  date 
       from DOS when you first booted up your computer.

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

       When you press  the  F10 key, you will  quit  Draw Poker and  be 
       returned   to  your  DOS  prompt.   All  high   scores,   player 
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



                                    - 6 -








       Bet

       Pressing B will place the minimum bet in the pot for you.

       Fold

       Pressing F will fold your hand.  This will erase your hand  from 
       the screen and you will forfeit and further action in the pot.

       Call

       Pressing C will call any bets or raises previously made by other 
       players.  The correct amount of money will be placed in the pot.

       Raise

       Pressing  R  will raise the pot the maximum limit of  the  game.  
       A  raise  simply  means  you are calling  all  bets  and  adding 
       another bet into the pot.

       Pass/Check

       Pressing the P key will pass or check your hand.  Passing a hand 
       means you do not want to bet at this time.  You still remain  in 
       the pot and have the option to later call if a bet or raise  has 
       been  made by any other players.  You will not be able to  raise 
       after  you pass or check unless this option has been set in  the 
       SetUp Menu.

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


                                    - 7 -








       "x"  and  the card will not be discarded.  If you wish  to  play 
       your hand pat, just press the END key without marking any cards.

           Alt-O Show Odds
 
       Pressing   Alt-O   will   clear your screen  and   display  your 
       chances of being dealt, and drawing to various hands.   To  exit 
       this screen, press any key and you will be returned to the  same 
       place you were prior to viewing the odds. 


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

                    1   Display Shuffling            On
                    2   Sliding Screens              On
                    3   Show Card Movement           On
                    4   Card Movement Speed          20
                    5   Snow Removal                Off
                    6   Sound                        On
                    7   Allow Check/Raise           Off
                    8   Display Bets                Off
                    9   Fast Play When Folding      Off
                    0   Save High Games             Off
                    A   Type Of Game               Ante
                    B   Openers          Anything Opens
                    C   Change Playing Position       5
                    D   Change Card Colors             
                    E   Double Bet After Draw       Off
                    F   Pause For Player Action     Off
                    G   Display Cards Drawn         Off

       These are the default settings that come with Draw Poker.  These 
       options   may only be changed while in the  Setup  Screen.   Any 
       changes made are always saved when you quit and return to   DOS.  
       In  order for this to happen, you must be logged onto the  drive 
       or directory where DRAW.EXE resides.


                                SETUP OPTIONS

       1 - Display Shuffling

       You have the option to display the shuffling of the cards or you 
       may  wish  to play a faster game by not viewing  the  shuffling.  
       This may be changed with this option.

       2 - Sliding Screens

       While  going  from one screen  to  another, the   screens   will 
       slide open.  If this causes snow or you would rather not see  it 
       happen, you may turn it off with this option.



                                    - 8 -








       3 - Show Card Movement

       The  movement of the cards are displaying while they  are  being 
       dealt  to their respective positions.  If you would  rather  not 
       see this, you may set this option to Off.

       4 - Card Movement Speed

       If  option  3 above is On, your cards will be dealt  and   moved 
       around the table at the default speed setting of 20.  This means 
       nothing  until  you actually see the cards in  motion.   If  you 
       press  this  option  4, you will be able  to  change  the  speed 
       setting  for the card movement speed.  The smaller  the  number, 
       the  faster the speed. The bottom of your  screen  will  display 
       the following options:

                    LEFT/RIGHT Arrows      ENTER      F10

       Use your LEFT/RIGHT Arrow keys to decrease or increase the speed 
       setting.  Press the ENTER key if you want to see the effect  the 
       speed setting has on the card movement.  When you are  satisfied 
       with the setting, press the Function 10 key when your done.

       5 - Snow Removal
    
       Use this option if you are experiencing snow.

       6 - Sound

       If you wish to turn of the sound, change this to OFF.

       7 - Allow Check/Raise

       When this option is set to ON, you will be allowed to check your 
       hand, then later raise if a bet has been made.  If this is  OFF, 
       then  once  a  hand has been checked, you may  not  later  raise 
       during that betting interval.

       8 - Display Bets

       When  this  is  set to ON, the lower part of  your  screen  will 
       display  the amount of money each player has in the  pot.   This 
       includes the ante each player has placed in the pot.

       9 - Fast Play When Folding

       When this option has been changed to ON, whenever you fold  your 
       hand,  all remaining action will be played at the fastest speed.  
       This  is useful if you have the game playing at a slow pace  and 
       wish to get it over with as soon as possible when you've folded.

       0 - Save High Games

       If  you  want to save your high scores to disk,  be  sure   this 
       option  is  On.  The name you entered when starting  Draw  Poker 
       will be used for the high scores.

                                    - 9 -








       A - Type Of Game

       Each time you press the letter "A", you will toggle the type  of 
       game  you wish to play.  You have the option of playing an Ante,
       Blind or Straddle.

       B - Openers

       Each time you press the letter "B", you will toggle the required 
       opening  hand from "Anything Opens" to "Jacks or Better".   When 
       playing Jacks or Better, the Type of Game will always be an Ante 
       game.  If you have the Type of Game set at something other  than 
       Ante, when you toggle to Jacks or Better, the Type of Game  will 
       be reset to Ante.

       C - Change Playing Position

       If  you  think  you can play better  from  a  different  playing 
       position, press the letter "C" to toggle through the 8 different 
       playing  positions.  When you return to the game, you will  have 
       swapped playing positions with the other player.

       D - Change Card Colors         

       Pressing the letter "D" will bring you to  a screen which   will  
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
       Draw.   Be sure DRAW.EXE resides in the drive or directory  from 
       where you  first  started  the game.

       E - Double Bet After Draw

       Pressing  the letter "E" will allow double bets after the  draw.  
       Normally  in  this limit game, your bets are always  $20.   With 
       this options set to ON, your bets after the draw will be $40.





                                    - 10 -








       F - Pause For Player Action

       When  this  options is set to ON, action will  pause  with  each 
       player until you press the SpaceBar.

       G - Display Cards Drawn

       When  this is set to ON, as each player discards from his  hand, 
       the number of cards drawn will be displayed next to the  players 
       hand.  If your are playing this game using a fast speed, you may 
       not  have  time to view the number of cards  drawn.   When  this 
       option toggles to ON, you will be asked the following question:

                Do you want to pause to view discards (Y/N)?

       This is useful if you are playing at a fast speed without  using 
       Pause  For Player Action (Option F) above.  When answering  Yes, 
       before  the  dealer deals your replacement  cards,  action  will 
       pause until you press the SpaceBar.  If you have answered Yes to 
       this question, a final following question will be displayed

                   Pause when your not in the pot (Y/N)?

       If  you  have  folded  and do not care  to  pause  to  view  the 
       discards,  answer No.  Answering Yes will pause even though  you 
       have folded.

                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Options.  If you have option 0 in the Setup Menu set to On, 
       you  will be able to view the top fifteen players.   The  screen 
       will  display the players name, winnings, hands played and  date  
       the winnings was recorded.

       The  bottom line on your screen will show your  total  standings 
       taken from you statistics file.


                              SHAREWARE VERSION

       The ShareWare version of Draw Poker does not support all of the 
       options  that  are available in the Registered  version.   These 
       have  purposely  been left out and are available  to  Registered 
       users  only.   After you have played Draw Poker for a reasonable  
       time,    we  ask  for  your  support  by   sending    in    your 
       registration.    Registered  users  will  receive   the   latest 
       Registered  Version.









                                    - 11 -







       
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


                           Draw Poker Professional
                          Version 2.00 Registration


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


               Where did you acquire this version of Draw Poker

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

## DRAW.DOC

{% raw %}
```






















                           DRAW POKER PROFESSIONAL
                                 Version 2.OO

                               CGA or Monochrome

                           (C) Copyright 1987,88,89

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


       INTRODUCTION ................................................  1

       PROGRAMS ON DISK ............................................  1

       PROGRAMS REQUIRED TO RUN DRAW POKER .........................  1

       DRAW POKER RULES ............................................  2

       RANK OF HANDS ...............................................  2

       DRAW GAMES ..................................................  2


          Straight Ante ............................................  2

          Blind ....................................................  2    

          Straddle .................................................  3

       STARTING DRAW ...............................................  3

       PLAYING SCREEN ..............................................  4

       MAIN OPTIONS ................................................  4

          F1 Deal ..................................................  4

          F3 Setup Menu ............................................  5

          F5 Stats .................................................  5

          F8 High Scores ...........................................  6

          ALT-N New Player .........................................  6

          F10 Quit .................................................  6

       PLAY OPTIONS ................................................  6

          Bet ......................................................  7

          Fold .....................................................  7

          Call .....................................................  7

          Raise ....................................................  7

          Pass/Check ...............................................  7

       DISCARDS ....................................................  7

           Alt-O Show Odds .........................................  8


                                    - i -








       SETUP MENU ..................................................  8

       SETUP OPTIONS ...............................................  8

          Display Shuffling ........................................  8

          Sliding Screens ..........................................  8

          Show Card Movement .......................................  9

          Card Movement Speed ......................................  9

          Snow Removal .............................................  9

          Sound ....................................................  9

          Allow Check/Raise ........................................  9

          Display Bets .............................................  9

          Fast Play When Folding ...................................  9

          Save High Games ..........................................  9

          Type Of Game ............................................. 10

          Openers .................................................. 10

          Change Playing Position .................................. 10

          Change Card Colors ....................................... 10

          Double Bet After Draw .................................... 10

          Pause For Player Action .................................. 11

          Display Cards Drawn ...................................... 11

       HIGH SCORES ................................................. 11

       SHAREWARE VERSION ........................................... 11

       OTHER PROGRAMS .............................................. 12

          Casino/Gambling Games .................................... 12

          Solitaire Games .......................................... 12

          Other Games .............................................. 12

          Utilities ................................................ 12

       REGISTRATION FORM ........................................... 13




                                    - ii -

      






                                 INTRODUCTION

       The  documentation for Draw Poker is intended to show  the  user 
       how  this computer version is played.  It has not  been  written 
       for  the complete novice at Draw Poker.  Those that  have  never 
       played Draw Poker should purchase one of the many books  written 
       on  the subject for a better understanding of the game.  If  you 
       are  a beginner at Draw Poker, hopefully this game will  improve 
       your playing.

       This game was written to be played as a $20 limit game.   Future 
       versions  may  have  a table stakes option.   This  will  depend 
       largely on registrations and user comments.


                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       Draw Poker distribution disk.

           File Name            File Description
        
         Draw   .Exe     -  The main program for Draw Poker.
         Draw   .Doc     -  The documentation for Draw Poker.
         DStart .Bat     -  A batch file  to  read  the  documentation, 
                            print the documentation and install Draw on 
                            a Hard Drive.
         DRead  .Com     -  Used by DStart.Bat
         DReply .Com     -  Used by DStart.Bat
         DIntro          -  Used by DStart.Bat
         DPrt            -  Used by DStart.Bat
         DHd             -  Used by DStart.Bat
         DReg            -  Registration Form
         Draw2S .Arc     -  Shareware Version of Draw Poker


                     PROGRAMS REQUIRED TO RUN DRAW POKER

       The only file required to play Draw Poker is DRAW.EXE.  Be  sure 
       you   are  in  the  same directory  or  drive   where   DRAW.EXE 
       resides.   You  must have a minimum of 384K of Ram to  run  Draw 
       Poker Professional.















                                    - 1 -








                               DRAW POKER RULES

       Each  player is dealt five cards, face down.  Each  player  will 
       take  a turn dealing the cards.  Cards are dealt in a  clockwise 
       manner  starting with the player to the dealers immediate  left.  
       The cards are dealt one at a time until each player has a  total 
       of  five cards.  The undealt cards are set aside for later  use.  
       These are usually placed in front of the dealer.

       A betting interval then takes place. Then each active player, in 
       turn,  may discard from one to five cards or stay with  what  he 
       has.   The dealer will then give each active player  replacement 
       cards  from the top of the unused portion of the deck.   Another 
       betting interval takes place followed by a showdown in which the 
       highest hand among the active players wins the pot.


                                RANK OF HANDS
                               (Best to Worst)
       
              Hand                    Example (x denotes any card)

          Royal Flush                    A-K-Q-J-10 suited
          Straight Flush                 9-8-7-6-5  suited
          Four of a Kind                 3-3-3-3-x
          Full House                     8-8-8-6-6
          Flush                          Q-8-7-5-2  suited
          Straight                       7-6-5-4-3  mixed suits
          Three of a Kind                4-4-4-x-x
          Two Pair                       A-A-8-8-x
          One Pair                       2-2-x-x-x
          No Pair                        Q-7-4-3-2  mixed suits


                                  DRAW GAMES

       Draw can be played in a few different variations.  Not all forms  
       of   Draw  are  supported in this game.   The  following  is   a 
       description  of the types of Draw Poker games allowed with  this 
       version.

                                Straight Ante

       All  players  ante  $2 and may either bet or  check  their  hand 
       before the draw.  The first player to the dealers left is  first 
       to act.

                                    Blind     

       All  players ante $2 and must either bet, raise or  fold  before 
       the  draw.  The  first player to the dealers left places  a  bet 
       ($20)  in   the  pot  before  the  cards  are  dealt.   This  is 
       considered a blind bet, meaning  the  player is opening the  pot 
       without looking  at  his cards.  A marker will be place by  that 
       player  indicating he  has the blind.  The first player  to  the 


                                    - 2 -








       blinds  left is first to act. This  makes the blind last to  act 
       before the draw but first to act after the draw.

       The  blind  game is intended to create a little  action.   After 
       all,  wouldn't  you  want to call a  player  that  bets  without 
       looking at his cards?

       Before  the draw, starting with the first player to  the  blinds 
       left,  the player must either call the blind bet, raise or fold.  
       When   its  the blinds turn to play and the pot  has  only  been 
       called, he has no  further  action because he is already in  the  
       pot. On the other hand, if the pot was raised, he may call,  re-
       raise  or fold.  Not supported in this version is what as  known 
       as a  "live blind".   A  live  blind means that if the pot   was  
       not  raised before  the  draw,  then the blind has  the   option  
       of  raising himself by placing an addition bet in the pot.  

                                   Straddle

       In   this form of Draw, none of the players ante.   Instead,   3 
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


                                STARTING DRAW

       From   your  DOS  prompt, type Draw  and  press   ENTER.    Your 
       monitor  will display the opening screen.  After a few  seconds, 
       or  until you hit a key, you will be asked for your  name.   You 
       must  enter something when asked.  If you don't like your  name, 
       enter   anything  you  want.   Draw  will  save   your   playing 
       statistics  to  a file associated with what you enter.   If  you 
       answered  "Cool  Joe",  then  a  file  will  be  created  called 
       COOLJOE.DPH.   Each time you play Draw, that file will  be  read 
       and your past history will be available for you to cry over.

       Once  you have entered your name, the screen will clear and  you 
       will  be  placed in the playing screen, ready to show  the  dumb 
       computer players your stuff.  

       NOTE:  After you have enter your name, you will not be  required 

                                    - 3 -








       to do so in the future.  If a player, other than yourself wishes 
       to play, you may change players names by pressing ALT-N from the 
       main playing screen.  You will be allowed to enter from 1 to  21 
       characters  for your name.  The first 8 characters will be  used 
       to create a file containing your playing statistics.


                                PLAYING SCREEN

       The  playing  screen will display the playing positions  of  the 
       players.  These are positioned in a circle to represent a  poker 
       table.   The top center of your screen will show a card  labeled 
       P1,  representing player #1.  The player positions are  numbered 
       from P1 to P8 in a clockwise manner starting at the P1 position.

       The   center  of  the screen displays the  pot.   As   Draw   is 
       played, the pot will naturally increase as bets are made.

       The  upper  left  part  of the screen  will  show  your  current 
       standings during the course of play.  The upper right side  will 
       show your total standings.  The total standings are saved  after 
       each game in the file created when you entered your name at  the 
       start of Draw.

       The  left  side  of the screen will show  the  requirements  for 
       opening the pot.  This will be either "Anything Opens" or "Jacks 
       or Better".  The right side will show the form of Draw  your are  
       currently playing.  The game limit may not be changed  with this  
       version.   It  is  possible that a future  version  will   allow 
       various limits or a table stakes game.

       Near the bottom of the screen, the following will be displayed:

                 F1 Deal          F3 Setup           F5 Stats   
                 F8 High Scores   ALT-N New Player   F10 Quit

       These are the main options you currently have available.   These 
       options   are displayed when you first start Draw and   at   the 
       end of each hand.


                                 MAIN OPTIONS

       F1 Deal

       To  start playing Draw, you may either press the F1 key  or  the 
       ENTER  key.   Before  the cards are dealt to  each  player,  all 
       players must either ante, place the blind or place the  straddle 
       bets   depending  on  what form of Draw you  are   playing.    A 
       marker  will  be  placed by the dealer along with  the  deck  of 
       cards.   The  dealer  will deal out five cards  to  each  player 
       starting with the first player to his left.





                                    - 4 -








       F3 Setup Menu

       Pressing the F3 key will display the Draw Setup Menu.  This will 
       allow  you  to change many of the options  available  with  this 
       version  of Draw.  When you quit playing, any changes made  will  
       be  saved so they are available to you the next  time  you play.

       F5 Stats

       Pressing the F5 key will display each players current standings.  
       This  screen  is  displayed in the same  order  as  the  playing 
       screen.  The profit, pots won, and pots each player was involved 
       in  will  be  shown below each players  number.   These  figures 
       represent the current game only.

       The  center  of this screen will show the current  hands  dealt, 
       total  hands  dealt,  house  take, total  house  take,  and  any 
       carryover from the pot. 

           Current Hands

       The current hands are the amount of hands dealt during each game 
       you play.

           Total Hands

       The  total  hands will show all the Draw hands that  have   been 
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
       played  could not be split amount the winners.  This could  also 
       show  the size of the pot if you are playing "Jacks  or  Better" 
       and the pot was not opened.

       The last line of this screen will display your complete  history 
       taken from your file on disk.

       To exit this screen and return to the playing screen, just press 
       the ENTER key.

                                    - 5 -








       F8 High Scores

       Pressing  the F8 key will bring up a screen showing the  top  15 
       Draw players.  The following will be shown on this screen:

              Rank    Players Name    Winnings    Hands    Date

       The first column will show the numbers 1 to 15 which  represents 
       the top players winnings to the 15th. highest players winnings.

       The players name will accept from 1 to 21 characters.

       The winnings is the amount of money you have won for one session 
       of Draw.  This is not a total of all your winnings.

       The  hands that are displayed will also be for the same  session 
       of Draw played.  This is not a total of all your hands played.

       The date displayed will be the date you achieved your  winnings.  
       Draw will not ask you for the date.  You must have set the  date 
       from DOS when you first booted up your computer.

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

       When you press  the  F10 key, you will  quit  Draw Poker and  be 
       returned   to  your  DOS  prompt.   All  high   scores,   player 
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



                                    - 6 -








       Bet

       Pressing B will place the minimum bet in the pot for you.

       Fold

       Pressing F will fold your hand.  This will erase your hand  from 
       the screen and you will forfeit and further action in the pot.

       Call

       Pressing C will call any bets or raises previously made by other 
       players.  The correct amount of money will be placed in the pot.

       Raise

       Pressing  R  will raise the pot the maximum limit of  the  game.  
       A  raise  simply  means  you are calling  all  bets  and  adding 
       another bet into the pot.

       Pass/Check

       Pressing the P key will pass or check your hand.  Passing a hand 
       means you do not want to bet at this time.  You still remain  in 
       the pot and have the option to later call if a bet or raise  has 
       been  made by any other players.  You will not be able to  raise 
       after  you pass or check unless this option has been set in  the 
       SetUp Menu.

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


                                    - 7 -








       "x"  and  the card will not be discarded.  If you wish  to  play 
       your hand pat, just press the END key without marking any cards.

           Alt-O Show Odds
 
       Pressing   Alt-O   will   clear your screen  and   display  your 
       chances of being dealt, and drawing to various hands.   To  exit 
       this screen, press any key and you will be returned to the  same 
       place you were prior to viewing the odds. 


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

                    1   Display Shuffling            On
                    2   Sliding Screens              On
                    3   Show Card Movement           On
                    4   Card Movement Speed          20
                    5   Snow Removal                Off
                    6   Sound                        On
                    7   Allow Check/Raise           Off
                    8   Display Bets                Off
                    9   Fast Play When Folding      Off
                    0   Save High Games             Off
                    A   Type Of Game               Ante
                    B   Openers          Anything Opens
                    C   Change Playing Position       5
                    D   Change Card Colors             
                    E   Double Bet After Draw       Off
                    F   Pause For Player Action     Off
                    G   Display Cards Drawn         Off

       These are the default settings that come with Draw Poker.  These 
       options   may only be changed while in the  Setup  Screen.   Any 
       changes made are always saved when you quit and return to   DOS.  
       In  order for this to happen, you must be logged onto the  drive 
       or directory where DRAW.EXE resides.


                                SETUP OPTIONS

       1 - Display Shuffling

       You have the option to display the shuffling of the cards or you 
       may  wish  to play a faster game by not viewing  the  shuffling.  
       This may be changed with this option.

       2 - Sliding Screens

       While  going  from one screen  to  another, the   screens   will 
       slide open.  If this causes snow or you would rather not see  it 
       happen, you may turn it off with this option.



                                    - 8 -








       3 - Show Card Movement

       The  movement of the cards are displaying while they  are  being 
       dealt  to their respective positions.  If you would  rather  not 
       see this, you may set this option to Off.

       4 - Card Movement Speed

       If  option  3 above is On, your cards will be dealt  and   moved 
       around the table at the default speed setting of 20.  This means 
       nothing  until  you actually see the cards in  motion.   If  you 
       press  this  option  4, you will be able  to  change  the  speed 
       setting  for the card movement speed.  The smaller  the  number, 
       the  faster the speed. The bottom of your  screen  will  display 
       the following options:

                    LEFT/RIGHT Arrows      ENTER      F10

       Use your LEFT/RIGHT Arrow keys to decrease or increase the speed 
       setting.  Press the ENTER key if you want to see the effect  the 
       speed setting has on the card movement.  When you are  satisfied 
       with the setting, press the Function 10 key when your done.

       5 - Snow Removal
    
       Use this option if you are experiencing snow.

       6 - Sound

       If you wish to turn of the sound, change this to OFF.

       7 - Allow Check/Raise

       When this option is set to ON, you will be allowed to check your 
       hand, then later raise if a bet has been made.  If this is  OFF, 
       then  once  a  hand has been checked, you may  not  later  raise 
       during that betting interval.

       8 - Display Bets

       When  this  is  set to ON, the lower part of  your  screen  will 
       display  the amount of money each player has in the  pot.   This 
       includes the ante each player has placed in the pot.

       9 - Fast Play When Folding

       When this option has been changed to ON, whenever you fold  your 
       hand,  all remaining action will be played at the fastest speed.  
       This  is useful if you have the game playing at a slow pace  and 
       wish to get it over with as soon as possible when you've folded.

       0 - Save High Games

       If  you  want to save your high scores to disk,  be  sure   this 
       option  is  On.  The name you entered when starting  Draw  Poker 
       will be used for the high scores.

                                    - 9 -








       A - Type Of Game

       Each time you press the letter "A", you will toggle the type  of 
       game  you wish to play.  You have the option of playing an Ante,
       Blind or Straddle.

       B - Openers

       Each time you press the letter "B", you will toggle the required 
       opening  hand from "Anything Opens" to "Jacks or Better".   When 
       playing Jacks or Better, the Type of Game will always be an Ante 
       game.  If you have the Type of Game set at something other  than 
       Ante, when you toggle to Jacks or Better, the Type of Game  will 
       be reset to Ante.

       C - Change Playing Position

       If  you  think  you can play better  from  a  different  playing 
       position, press the letter "C" to toggle through the 8 different 
       playing  positions.  When you return to the game, you will  have 
       swapped playing positions with the other player.

       D - Change Card Colors         

       Pressing the letter "D" will bring you to  a screen which   will  
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
       Draw.   Be sure DRAW.EXE resides in the drive or directory  from 
       where you  first  started  the game.

       E - Double Bet After Draw

       Pressing  the letter "E" will allow double bets after the  draw.  
       Normally  in  this limit game, your bets are always  $20.   With 
       this options set to ON, your bets after the draw will be $40.





                                    - 10 -








       F - Pause For Player Action

       When  this  options is set to ON, action will  pause  with  each 
       player until you press the SpaceBar.

       G - Display Cards Drawn

       When  this is set to ON, as each player discards from his  hand, 
       the number of cards drawn will be displayed next to the  players 
       hand.  If your are playing this game using a fast speed, you may 
       not  have  time to view the number of cards  drawn.   When  this 
       option toggles to ON, you will be asked the following question:

                Do you want to pause to view discards (Y/N)?

       This is useful if you are playing at a fast speed without  using 
       Pause  For Player Action (Option F) above.  When answering  Yes, 
       before  the  dealer deals your replacement  cards,  action  will 
       pause until you press the SpaceBar.  If you have answered Yes to 
       this question, a final following question will be displayed

                   Pause when your not in the pot (Y/N)?

       If  you  have  folded  and do not care  to  pause  to  view  the 
       discards,  answer No.  Answering Yes will pause even though  you 
       have folded.

                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Options.  If you have option 0 in the Setup Menu set to On, 
       you  will be able to view the top fifteen players.   The  screen 
       will  display the players name, winnings, hands played and  date  
       the winnings was recorded.

       The  bottom line on your screen will show your  total  standings 
       taken from you statistics file.


                              SHAREWARE VERSION

       The ShareWare version of Draw Poker does not support all of the 
       options  that  are available in the Registered  version.   These 
       have  purposely  been left out and are available  to  Registered 
       users  only.   After you have played Draw Poker for a reasonable  
       time,    we  ask  for  your  support  by   sending    in    your 
       registration.    Registered  users  will  receive   the   latest 
       Registered  Version.









                                    - 11 -







       
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


                           Draw Poker Professional
                          Version 2.00 Registration


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


               Where did you acquire this version of Draw Poker

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

## FILE1962.TXT

{% raw %}
```
Disk No: 1962                                                           
Disk Title: Draw Poker Professional                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Draw Poker Professional                                  
Author Version: 2.00                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Keep your card skills polished and your poker face in training.  Play   
DRAW POKER PROFESSIONAL in an eight-handed game of your favorite version
of poker.                                                               
                                                                        
Whether you are a card game enthusiast, a neighborhood player or a      
professional, you can play poker just as it is played in a card club or 
casino.  Seven of the eight hands are played by the computer.  Play     
straight Ante, Blind, Straddle, Anything Opens or a Jacks or Better     
game.  Choose from the many configuration options to suit your playing  
preferences, mood or skill level.                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1962

     Volume in drive A has no label
     Directory of A:\

    DHD                471  11-15-89   6:40a
    DINTRO             780  11-15-89   6:40a
    DPRT               221  11-15-89   6:40a
    DRAW     DOC     37287  11-15-89   6:40a
    DRAW     EXE    111040  11-15-89   6:40a
    DRAW2S   ARC     90267  11-15-89   6:40a
    DREAD    COM      4200  11-15-89   6:40a
    DREG              1791  11-15-89   6:40a
    DREPLY   COM        14  11-15-89   6:40a
    DSTART   BAT       682  11-15-89   6:40a
    FILE1962 TXT      1851  12-29-89   3:39p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:57a
           13 file(s)     249182 bytes
                           65536 bytes free
