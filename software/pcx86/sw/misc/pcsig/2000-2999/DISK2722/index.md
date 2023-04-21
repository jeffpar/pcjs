---
layout: page
title: "PC-SIG Diskette Library (Disk #2722)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2722/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2722"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BACCARAT.DOC

{% raw %}
```






















                                   BACCARAT
                                 Version 3.OO



       

                              (C) Copyright 199O

                                      by

                               Raymond M. Buti

                             All Rights Reserved



                           United Innovations Plus
                            Post Office Box 21O81
                          Castro Valley, CA   94546

                                (415) 886-O958






















       



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

        PROGRAMS ON DISK ............................................ 1

        PROGRAM REQUIREMENTS ........................................ 1

        SHAREWARE VS REGISTERED VERSION ............................. 1

        BACCARAT .................................................... 2

        NUMBER OF CARDS ............................................. 2

        BETS AVAILABLE .............................................. 2

        CARD VALUES ................................................. 2

        OBJECT OF BACCARAT .......................................... 3

        RULES ....................................................... 3

        THIRD CARD RULES ............................................ 3

          Rule 1 .................................................... 3

          Rule 2 .................................................... 3

          Rule 3 .................................................... 3

          Rule 4 .................................................... 3

        PAYOFFS ..................................................... 4

        MINIMUM AND MAXIMUM BETS .................................... 4

        STARTING BACCARAT ........................................... 4

        PLAYING SCREEN .............................................. 4

        PLAYING SCREEN OPTIONS ...................................... 5

          F1/ENTER (Deal Hand) ...................................... 5

          ALT-D (Auto Play) ......................................... 5

          F3 (SetUp Menu) ........................................... 5

          F5 (System Menu) .......................................... 5

          F8 (High Scores) .......................................... 5

          (B) Change Banker Bet ..................................... 5

          (P) Change Player Bet ..................................... 6

          (T) Change Tie Bet ........................................ 6


                                    - i -








          F10 (Quit) ................................................ 6

        SETUP MENU .................................................. 6

        SETUP OPTIONS ............................................... 7

          1  Sound .................................................. 7

          2  Show Card Movement ..................................... 7

          3  Sliding Screens ........................................ 7

          4  Save High Games ........................................ 7

          5  Snow Removal ........................................... 7

          6  Card Movement Speed .................................... 7

          7  Change Card Colors ..................................... 7

          8  Auto Play Mode ......................................... 7

          9  Auto Play Hands ........................................ 8

          0  Clear Bets ............................................. 8

          A  Use Score Card ......................................... 8

          B  Mark Score Card Using .................................. 8

          C  Display Hands .......................................... 8

          D  Display Card Count ..................................... 8

        BETTING SYSTEMS ............................................. 9

        SYSTEMS MENU ............................................... 10

        SYSTEMS EXPLAINED .......................................... 10

          Cancellation ............................................. 10

          Card Count ............................................... 10

          D'Alembert ............................................... 11

          Follow The Shoe .......................................... 11

          Martingale ............................................... 11

          Opposite The Shoe ........................................ 12

        Progressive Win ............................................ 12

          Thirty-One ............................................... 12


                                    - ii -








          Triple Cancellation ...................................... 13

        HIGH SCORES ................................................ 13

        OTHER PROGRAMS ............................................. 13

          Casino/Gambling Games .................................... 13

          Solitaire Games .......................................... 13

          Other Games .............................................. 13

          Utilities ................................................ 13

        REGISTRATION FORM .......................................... 14










































                                   - iii -



       




                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Baccarat.Exe - The main program for Baccarat.
         Baccarat.Doc - The documentation for Baccarat.
         BaStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Baccarat on a
                        Hard Drive.
         BaRead  .Com - Used by BaStart.Bat
         BaReply .Com - Used by BaStart.Bat
         BaIntro      - Used by BaStart.Bat
         BaPrt        - Used by BaStart.Bat
         BaHd         - Used by BaStart.Bat
         BInstall.Exe - Used by BaStart.Bat or as a stand-only
                        installation program.
         BaReg        - Baccarat Registration Form
         Bac3S.Arc    - Shareware Version of Baccarat.


                             PROGRAM REQUIREMENTS

       You   must  have an IBM PC/XT/AT/PS2 or  TRUE  compatible.   The   
       only file required to play Baccarat is BACCARAT.EXE.


                       SHAREWARE VS REGISTERED VERSION

       Baccarat is written in two versions, a ShareWare version   and a  
       Registered   version.  The ShareWare version is not  a  crippled 
       version  of the Registered version.  This is a fully  functional 
       ShareWare program of Baccarat.  Users  of the  ShareWare version 
       will  occasionally  have  a message   appear  stating  that  the  
       program  is  NOT   free  and  continued  use  of   the   program   
       requires  registration  with United Innovations Plus.

       The Registered version of Baccarat has added  features for users 
       that  register their copy by filling out the  Registration  Form 
       and sending in the required registration fee.

       The   following  documentation for Baccarat explains   all   the 
       features  for  the Registered version.   The  words  "Registered 
       Version  Only" may  appear  throughout the documentation.  These  
       are   the  added features which are available in the  Registered 
       version ONLY.









                                    - 1 -








                                   BACCARAT

       The Casino game of Baccarat is played widely throughout  Europe, 
       Reno,  Las Vegas, and Atlantic City.  A Baccarat  table  usually 
       accommodates  from  12  to  14  players.   Mini-Baccarat  tables 
       accommodate fewer players.


                               NUMBER OF CARDS

       Baccarat  is  normally played with eight decks of  cards.   Each 
       deck consists of a standard 52 card deck, making a total of  416 
       cards.  The cards are dealt from a shoe.


                                BETS AVAILABLE

       There  are only three bets available on the Baccarat layout.   A 
       player  can wager on the Banker hand, the Player Hand or on  the 
       Tie bet.

                                 CARD VALUES

       All tens and picture cards have a value of 0.  The ace counts as 
       1  and the remaining cards are counted at face value.  The  four 
       suits have no meaning in Baccarat.

       Example hand totals:

                     Cards     Total          Cards     Total
                    3  +  4  =   7           6  + Ace =   7
                    K  +  Q  =   0          10  + Ace =   1
                    2  + Ace =   3           J  +  5  =   5

       In  Baccarat,  the highest possible hand is a 9.  Any  time  the 
       cards total a count greater than 9, then the total count must be 
       subtracted by 10.

       Example hand totals over 9:
                                            Adjusted
                         Cards     Total      Count
                        7  +  8  =   15         5
                        4  +  9  =   13         3
                        6  +  5  =   11         1

       The easiest way to adjust the total of the cards when the  count 
       exceeds 9 is to drop the first digit.  In the examples above,  a 
       hand of 15 equals 5; 13 equals 3; 11 equals 1.

       The  only  possible hand totals in the game  of  Baccarat  range 
       from a count of 0 to 9.

       A two card total of either 8 or 9 is called a natural.




                                    - 2 -








                              OBJECT OF BACCARAT

       There  are only two hands dealt in Baccarat, regardless  of  how 
       many  players are seated at the game.  Before the  dealer  deals 
       the  cards,  each player places their bet on either  the  Banker 
       hand,  the Player Hand or on the Tie bet.  Whichever of the  two 
       hands  is closest to 9 is the winner.  In the event  both  hands 
       total  the same, it's a tie.  Nobody wins unless a bet was  made 
       on the Tie bet.


                                    RULES

       Four cards are dealt face up, two for the Player and two for the 
       Banker.   If  an  8 or 9 (natural) is dealt to  either  or  both 
       hands, the round is over and the hand with the highest total  is 
       declared  the  winner.   If  neither hand totals  8  or  9,  the 
       possibility for drawing a third card comes into effect.


                               THIRD CARD RULES

       The decision to draw a third card to either hand are subject  to 
       preset  rules.   These rules are rigid and cannot  be  modified.  
       The  following rules determine whether either or both hands  may 
       draw a third card:

                                    Rule 1

       If  either hand totals an 8 or 9, the round is over, both  hands 
       must stand.  If neither hand has a natural, the Player hand must 
       act first.

                                    Rule 2

       If the first two cards of the Player hand totals 0, 1, 2, 3,  4, 
       or  5,  the Player hand must draw a third card.  If  the  Player 
       hand totals 6 or 7, the Player hand must stand.

                                    Rule 3

       If  the  Player hand doesn't draw a third card, then  the  third 
       card  rules for the Banker hand are the same as the Player  hand 
       (See Rule 2).

                                    Rule 4

       If  the  Player hand draws a third card, the  Banker  hand  must 
       either stand or draw by following these strict rules:
        







                                    - 3 -








        If the Banker     Banker hand draws     Banker hand stands
        2 card total      when Player           when the Player
        is:               third card is:        third card is:

           0,1,2          Always draws          
             3            0,1,2,3,4,5,6,7,9     8
             4            2,3,4,5,6,7           0,1,8,9
             5            4,5,6,7               0,1,2,3,8,9
             6            6,7                   0,1,2,3,4,5,8,9
             7            Always stands


                                   PAYOFFS

       All  winning bets that are made on the Player hand are paid  off 
       at  even  money.  All winning bets made on the Banker  hand  are 
       also  paid  off at even money except the player must  pay  a  5% 
       commission on the amount wagered.  The minimum commission charge 
       is 25 cents.  All winning bets made on a Tie bet are paid off at 
       8 to 1.


                           MINIMUM AND MAXIMUM BETS

       The minimum bet is $5 and the maximum bet is $5OO.


                              STARTING BACCARAT

       From  your  DOS prompt, type BACCARAT and press the  ENTER  key.  
       Baccarat  will  save  high scores and game  statistics  to  disk 
       (Registered  Version Only).  In order for Baccarat to  do  this, 
       you  must  be  logged  onto  the  directory  where  BACCARAT.EXE 
       resides.

       Your monitor will first display a log-on screen.  This will show 
       the version number and copyright notice.  You may then press the 
       ENTER key to clear this screen.  


                                PLAYING SCREEN

       The  next screen you see will be the main screen where  Baccarat 
       will be played.  From this screen, you will have many options to 
       choose  from.   Your current options will be  displayed  in  the 
       upper  right  hand  corner of the screen.  You  should  see  the 
       following:

                           Options (ALT-H for Help)           
                  F1/ENTER, ALT-D, F3, F5, F8, F10, B, P, T 

       By  pressing  the  ALT-H  keys for help,  the  options  will  be 
       displayed in more detail.  You will see the following:   




                                    - 4 -








                  F1/ENTER Deal Hand     B Change Banker Bet
                  ALT-D    Auto Play     P Change Player Bet
                  F3       SetUp Menu    T Change Tie Bet      
                  F5       System Menu                      
                  F8       High Scores   F10      Quit     


                            PLAYING SCREEN OPTIONS

                             F1/ENTER (Deal Hand)

       Pressing  the Function 1 or the ENTER key will deal a  hand.  If 
       this  is  the  first hand you are dealing,  the  cards  will  be 
       thoroughly shuffled and placed in the shoe located at the  lower 
       right portion on your screen before the hand is dealt.

       The  cards will be dealt each time you press one of these  keys.  
       The  deck will be reshuffled when there are approximately 16  to 
       30 cards remaining. 

                              ALT-D (Auto Play)
       
       Pressing  the  ALT-D  keys will deal the cards  for  a  specific 
       amount of hands.  The amount of hands that are dealt must be set 
       in  the  Setup Menu (See Setup Menu).  When  starting  the  Auto 
       Play, the bottom of your screen will display the amount of hands 
       yet to be dealt.  Pressing the ESC key will pause the dealing of 
       hands.  You may then continue or quit the Auto Play feature.


                               F3 (SetUp Menu)

       Pressing  the Function 3 key will bring up the Setup Menu.   The 
       Setup  Menu  will  allow you to alter some of  the  features  in 
       Baccarat.

                               F5 (System Menu)

       Pressing  the  Function 5 key will bring up  a  betting  systems 
       menu.   You  will  be able to select and modify  any  of  the  9 
       playing systems displayed.

                               F8 (High Scores)

       Pressing  Function  8 will display a screen showing the  top  15 
       high scores.

                            (B) Change Banker Bet

       Pressing  the letter B will allow you to change the  amount  you 
       wish  to  bet on the Banker hand.   After pressing  B,  use  the 
       arrow keys to change the bet.  You may also use the number 0  to 
       quickly  clear your bet.  The following arrow keys  function  in 
       this manner when making a bet change:



                                    - 5 -








                    UP    Arrow     Increase your bet by 1
                    DOWN  Arrow     Decrease your bet by 1
                    LEFT  Arrow     Decrease your bet by 5
                    RIGHT Arrow     Increase your bet by 5 
                         0          Clear the bet to zero


       You  will not be able to bet less than the minimum or more  than 
       the maximum allowable table limits.

       When you are satisfied with the bet, press the ENTER key to lock 
       in your bet.

                            (P) Change Player Bet

       Pressing  the  letter  P will function in  the  same  manner  as 
       described  above,  except  that it will change the  bet  on  the 
       Player hand.

                              (T) Change Tie Bet   

       Pressing  the  letter  T will function in  the  same  manner  as 
       described  above, except that it will change the bet on the  Tie 
       hand.  The minimum bet on a Tie hand is $5.  The maximum bet  on 
       a Tie hand is $25.

                                  F10 (Quit)

       Pressing  the Function 10 key will end the game of Baccarat  and 
       bring  you back to your DOS prompt.  If you have the  Registered 
       version  of  Baccarat, your game statistics and scores  will  be 
       saved.


                                  SETUP MENU
                                     (F3)       

       1  Sound                 On        8  Auto Play Mode         Off
       2  Show Card Movement    On        9  Auto Play Hands          0
       3  Sliding Screens       On        0  Clear Bets              On
       4  Save High Games      Off        A  Use Score Card          On
       5  Snow Removal         Off        B  Mark Score Card Using  X's
       6  Card Movement Speed   20        C  Display Hands           On
       7  Change Card Colors              D  Display Card Count      On

                            ENTER Returns to game                          

       These are the default settings for Baccarat.  In the  Registered 
       version  of Baccarat, all of these options may be  selected  and 
       changed to suit the user.







                                    - 6 -








                                SETUP OPTIONS

                                   1  Sound 
                          (Registered Version Only)
  
       Pressing  the number 1 will allow you to turn the sound  Off  or 
       On.

                            2  Show Card Movement 

       Pressing  the number 2 will toggle the card movement Off or  On.  
       This will speed the game up especially when using the Auto  Play 
       mode.

                              3  Sliding Screens    

       Pressing the number 3 will toggle the fancy screen splitting Off 
       or On.  This occurs when going from one screen to another.

                              4  Save High Games    
                           (Registered Users Only)

       Pressing  the  number 4 will allow you to save  high  scores  to 
       disk.   When  this is set to ON, your high score will  be  saved 
       when  you quit playing Baccarat.  If your score is  high  enough 
       for the top 15 scores, you will be asked for your name.

                               5  Snow Removal       

       If  you are experiencing any snow or interference while  playing 
       Baccarat,  change this to ON by pressing number 5.  This  should 
       help with the snow effect.

                            6  Card Movement Speed
                           (Registered Users Only)

       The  card  movement speed can be set by pressing the  number  6.  
       To  adjust the speed, use your arrow keys.  Using the  left  and 
       right  arrows keys will adjust the speed setting.   The  smaller 
       the number, the faster the cards will move.

                            7  Change Card Colors 

       To  change  the card colors and borders, select this  option  by 
       pressing the number 7.  Another menu will appear allowing you to 
       select and view the changes.

                              8  Auto Play Mode       

       Pressing  the number 8 key will enable you to use the Auto  Play 
       Mode.   This option must be set to ON in order to use the  ALT-D 
       keys  from  the  Main Playing screen.  You must  also  have  the 
       amount of hands that are to be dealt set in option 9 below.




                                    - 7 -








                              9  Auto Play Hands      

       Pressing the number 9 will allow you to set the amount of  hands 
       that  will be dealt out automatically when selecting ALT-D  from 
       the  Main Playing screen.  The maximum allowable hands that  may 
       be  dealt are 200,000 for the Registered version, and  20  hands 
       for the ShareWare version.

                                0  Clear Bets           

       When this option is set to ON, changing a betting position  from 
       the  Banker, Player or Tie will clear all the bets except  where 
       you  have  placed  your bet.  If this option is set  to  OFF,  a 
       change  of  betting  positions will leave  your  other  bets  in 
       effect.   This would be useful if you want to bet on a Tie  hand 
       and the Banker or Player hand.

                              A  Use Score Card       

       Pressing the letter A will allow you to use the score card  that 
       is shown on the left side of your Main Playing screen.   Casinos 
       supply  players  with  a  score  card  while  they  are  playing 
       Baccarat.  The score card is used to track the winning hands  of 
       the Banker, Player and Tie.

                           B  Mark Score Card Using

       When pressing the letter B, you will toggle between X's and #'s.  
       The X's are telling Baccarat to mark the side that wins with  an 
       X.  This is the way most players would use the card. When  using 
       the  #'s  marker,  the side that wins will be  marked  with  the 
       number of times that side has won the hand.

       In the event the hand is a Tie, a line is usually drawn  through 
       both  the  Banker hand and the Player hand.  This will  be  done 
       regardless of the way the card is marked.

                               C  Display Hands        

       Pressing the letter C will allow you to display the actual cards 
       in the Banker hand and Player hand or not to display them.  When 
       this option is set to ON, you will view the actual cards.   When 
       set to OFF, you will only see the final total of each hand.  The 
       game will play faster with this option set to OFF.

                            D  Display Card Count   

       Pressing  the  letter D will toggle the displaying of  the  card 
       count ON and OFF.  When this is set to ON, the card count of the 
       deck  will  be displayed near the bottom center of  the  screen.  
       An explanation of the card counting technique will be  explained 
       later (See Betting Systems).





                                    - 8 -








                               BETTING SYSTEMS
                                     (F5)

       Among  the  many  published betting systems  for  Baccarat,  the 
       following are 9 of the most popular.  None of these systems  are 
       guaranteed  to  make  the user a profit nor  are  they  used  to 
       encourage  the  user to use them in  a  gambling  establishment.  
       United   Innovations  Plus  or  Raymond  M.  Buti   assumes   no 
       responsibility for any losses incurred should the user decide to 
       use  any of these systems.  Any comments made by the  author  of 
       this software is only his personal point of view.

       A  betting  system is designed to try to make a profit  for  the 
       user.   Most all betting systems work and do make a  profit  for 
       the  player.  The problem with them is that they only work  part 
       of the time.  With some systems, you could win for hours,  days, 
       weeks etc. until you run into a bad losing streak.  What usually 
       happens  then is that you lose back any money you may  have  won 
       plus whatever money you brought with you to the Casino.

       The  following  betting  systems  are  for  your  enjoyment  and 
       instructional purposes.

       When you press Function 5 from the Main Playing screen, you will 
       see the following menu:

       Select  Edit                       Min.   Max.  Restart   Bets 
       System System                      Bet    Bet    On Max  Bet On  

         1      F1   Cancellation          5     500     Yes    Player
         2      F2   Card Count            5       5     Yes    Player
         3      F3   D'Alembert            5     500     Yes    Player
         4      F4   Follow The Shoe       5       5     Yes     N/A 
         5      F5   Martingale            5     500     Yes    Player
         6      F6   Opposite The Shoe     5       5     Yes     N/A 
         7      F7   Progressive Win       5     500     Yes    Player
         8      F8   Thirty-One            5     500     Yes    Player
         9      F9   Triple Cancellation   5     500     Yes    Player

          1 to 9 Select, F1 to F9 Edit, ALT-C Clear or ENTER to Quit

       To choose one of the systems, press the appropriate number  from 
       1 to 9 that represents the system that you wish to use. 

       To choose and edit one of the systems, use the Function key that 
       represents  the  system that you wish to edit.  When  editing  a 
       betting system, you will be asked a series of questions you must 
       answer.

       If you are currently using a system and wish to play Baccarat by 
       betting  manually,  you must select ALT-C to  clear  any  system 
       currently being used.  When you have either cleared a system  or 
       selected one, press ENTER to return to the Main Playing  screen.  
       Once  a system has been selected, you may either deal a hand  by 
       using the F1 or ENTER key or by using the ALT-D keys.


                                    - 9 -








                                 SYSTEMS MENU

       The  systems menu will display the 9 betting systems.   Each  of 
       these  systems  will have a minimum and maximum  allowable  bet.  
       This  will be entered when you use one of the Function  keys  to 
       edit a system.  You also will have a restart if the maximum  bet 
       was reached while playing the system.  This will be entered with 
       a  Yes  or No reply.  The final part of the systems  betting  is 
       determining where the bets will be placed, either on the  Banker 
       hand or the Player hand.  

       Some  of these systems do not require all the same  information.  
       Therefore,  you  will not be asked the same  questions  for  all 
       systems.

                              SYSTEMS EXPLAINED

                                 Cancellation

       The  Cancellation system requires you to write down a series  of 
       numbers.  Here are three examples:

             1 2 3 4        5 10 15 20 25       2 5 8 11 14 17 20

       Always  bet  the  total of the first and  last  numbers  of  the 
       series.   When  you  win a bet, cross off  the  first  and  last 
       number.  If you lose a bet, add the amount bet to the end of the 
       series.  Continue betting in this manner until you have  crossed 
       off  all  the numbers.  In the event you only  have  one  number 
       remaining in the series, bet that amount.

                                  Card Count

       The Card Count system is based on giving each card a value.   As 
       a card is dealt, that value is either added or subtracted from a 
       running count.  Your bet is placed on either the Banker hand  or 
       the Player hand depending on the running count of the cards.

       The following is a list of the cards and their card values:

                      Card             Card Count Value

                     Ace,6,7                  0
                       2,5                    1      
                        3                     2
                        4                     3
                    8,10,J,Q,K               -1
                        9                    -2

       When  selecting  this  betting system, the card  count  will  be 
       totaled as each card is dealt.  You will need to set the  amount 
       of  each bet.  Your bets will then be placed on the Banker  hand 
       when  the  card count is 1 or greater.  When the count  is  less 
       than  1  (0 or a minus count), your bet will be  placed  on  the 
       Player hand.


                                    - 10 -








       On  a  new shoe, the starting count begins at 14.  This  may  be 
       changed by the user while editing this system.

                                  D'Alembert       

       This is a progressive type of betting system.  You start off  by 
       betting  one  unit.  The unit is your  minimum  betting  amount.  
       When  you lose a bet, you increase your bet by one  unit.   When 
       you win a bet, you decrease your bet by one unit.  You  continue 
       in  this  manner until you bet and win your initial  first  unit 
       bet.

       Example:   Your  minimum bet is $5.  You played a  total  of  12 
       hands betting on the Player hand.  The results of each hand were 
       W,L,L,L,W,W,L,L,W,W,W,W.   L=Lost bet    W=Won bet

               Bet    Outcome    Result    Profit/Loss
        
        Start    5       W         + 5         + 5       End of series     
        Start    5       L         - 5           0    
                10       L         -10         -10
                15       L         -15         -25
                20       W         +20         - 5
                15       W         +15         +10
                10       L         -10           0
                15       L         -15         -15
                20       W         +20         + 5
                15       W         +15         +20
                10       W         +10         +30
                 5       W         + 5         +35       End of series
        Start    5       etc.  

                               Follow The Shoe

       Following  the shoe is simply making a bet on the  last  winning 
       side.   When  the  Banker hand wins, your next  bet  is  on  the 
       Banker.   When the Player hand wins, your next bet goes  on  the 
       Player hand.

       When  you  play in this fashion, you are hoping that  each  side 
       that wins, will win 3 or more times in a row.  If that were  the 
       case, you couldn't lose.

                                  Martingale       

       This  is one of the most popular forms of betting  systems.   It 
       is also a progressive betting method.  If you win one hand, then 
       you've successfully completed the Martingale system.  You  start 
       with  a  one unit bet.  When you lose a bet, your  next  bet  is 
       double the last bet you made.  You keep doubling your bet  until 
       you  win one hand.  Doing this, you will win one unit each  time 
       you win a hand.

       Playing the Martingale system could result in a player losing  a 
       rather  larger sum of money.  It's possible you play  for  hours 
       and  consistently win.  It's also true that you could play 9  or 

                                    - 11 -








       10  hands and lose each one in a matter of minutes.  This  would 
       cost you dearly.

       Gambling  establishments really don't care to lose their  money.  
       For this reason, they place betting limits on  their games.  You 
       can play all the betting systems you wish to, however, you  will 
       eventually  reach  the limit of the game.   When  that  happens, 
       you'll  never  be able to retrieve the money already  lost  with 
       this system.

                              Opposite The Shoe

       This  is  the exact opposite of following the  shoe.   Here  you 
       place  your  next bet on the opposite side of the  last  winning 
       hand.   If the Banker won the last hand, you bet on  the  Player 
       hand.  If the Player won, you bet on the Banker hand.

       When  you play in this fashion, you are hoping that the shoe  is 
       choppy.  Player hand wins, then Banker hand wins, etc.

                               Progressive Win  

       The  Progressive Win follows a betting sequence of 1 2 3 5 5  8.  
       Each  of  these  numbers represent one betting  unit.   In  this 
       system,  you start with your first 1 unit bet.  After each  win, 
       your  next bet is the next unit bet in the number sequence.   If 
       you keep  winning,  you  keep progressing up  until  you   reach  
       the maximum  unit bet of 8.  Keep betting the 8 unit bet   until  
       you  lose  a hand, then start over.  

       The  object in this system is to bet more when you are  winning.  
       When  you're winning, you increase your  bets,  and when  you're 
       losing, you are betting the minimum.

                                  Thirty-One

       The   31-System  is quite simple.  You start  with  31   betting  
       units.  Let's  assume these  units  are equal to $1.   You  have  
       a  betting progression you must follow.  Your bets are  governed 
       on when and how many hands you've won or lost.  The  progression 
       is 1 1 1 2 2 4 4 8 8, which totals 31.

       Your  first bet is 1 unit.  If you win the first bet, you  start 
       the progression from the beginning.  As soon as you lose a  bet, 
       you bet the next amount in the progression, which would also  be 
       a  1 unit bet.  As soon as you win a bet, you let the bet  ride. 
       In essence, you double your bet.  If you win the double up  bet, 
       you  start the progression from the beginning.  If you lose  the 
       double  up bet, your next bet would be the next unit bet in  the 
       progression.   Once  you lose  the first bet, you must  win  two 
       hands  in  a  row before you start  the  progression   over   or  
       until   you  lose  the  last  bet  in  the progression.  In  the 
       progression above, you're highest bet would  be 16  units.




                                    - 12 -








                             Triple Cancellation

       The  Triple  Cancellation system is identical  to  the  previous 
       Cancellation  system  (F1)  with  one  exception.   Instead   of 
       crossing out the first and last numbers in the series, the first 
       three numbers are crossed out.  


                    HIGH SCORES (Registered Version Only)

       The  Registered version of Baccarat will allow the user to  save 
       the  high  scores  or winnings to disk.  By selecting  F8  (High 
       Scores)  from   your Main Screen, you will be able to  view  the  
       top fifteen players and their scores.

       To leave the high score screen, press the ENTER key.


                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
                 ALL REGISTERED VERSIONS run on either CGA or
                      Monochrome unless otherwise noted.
       

                            Casino/Gambling Games

        *Lowball Poker       Draw Poker             *Baccarat
         Roulette           *Blackjack Connoisseur  *Chuck-a-Luck 
        *Holdem Poker       *Knock Poker            *Red Dog
         Sic Bo (EGA/Mouse)  Craps (EGA/Mouse)       Poker Slot (EGA)

                               Solitaire Games

        *Pyramid              *Poker                   *Osmosis 
        *Accordion             Baker (VGA)             *Golf
         Thinking Man's (EGA)

                                 Other Games

        *SuJu                 Jigsaw Mania (VGA)       *Pig
         Peg (VGA)            Fifteen

       

                                  Utilities

         DCS               EU               Kill               DX           
         CDate             JMSC (VGA)








                                    - 13 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                                   BACCARAT
                          Version 3.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______
       If you have previously registered any program
       with United Innovations Plus, deduct $5.OO               _______  
       29 ShareWare Versions   ( ) 5 1/4"  ( ) 3 1/2"   $1O.OO  _______
            
                                   Foreign orders add   $ 5.OO  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


               Where did you acquire this version of Baccarat?

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


        For our records, please indicate your systems display adapter.

        ___MONO   ___CGA   ___EGA   ___VGA         Mouse ___Yes  ___No



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21O81
                                        Castro Valley, CA 94546

                                    - 14 -





```
{% endraw %}

## FILE2722.TXT

{% raw %}
```
Disk No: 2722                                                           
Disk Title: Baccarat Professional                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Baccarat Professional                                    
Author Version: 3.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Almost every self-respecting gambler knows how to play poker but how    
many know how to play Baccarat?  Baccarat, while popular in European    
casinos, is unknown to many card players.  Now BACCARAT PROFESSIONAL is 
available and anyone can learn it.                                      
                                                                        
If you need to sharpen your skills, BACCARAT PROFESSIONAL will challenge
you at a fast pace with clever graphics.  If you need to learn how to   
play, you'll appreciate the detailed instructions, explaining all you   
need to know to become a ``player.''   After just minutes, you'll be    
ready to take on your computer -- for high stakes.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```

  ╔═════════════════════════════════════════════════════════════════════════╗
  ║           <<<<  PC-SIG DISK #2722 BACCARAT PROFESSIONAL  >>>>           ║
  ╠═════════════════════════════════════════════════════════════════════════╣
  ║                                                                         ║
  ║     To print the documentation, type:   COPY BACCARAT.DOC PRN  (Enter)  ║
  ║                                                                         ║
  ║     To install BACCARAT on you hard drive, type:  BINSTALL  (Enter)     ║
  ║                                                                         ║
  ║     To start the program, type:  BASTART  (press Enter)                 ║
  ║                                                                         ║
  ║                                                                         ║
  ║                                           Copyright 1991, PC-SIG, Inc.  ║
  ╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2722

     Volume in drive A has no label
     Directory of A:\

    FILE2722 TXT      1851   7-24-91   7:51p
    BACCARAT DOC     42061   8-03-90   3:00p
    BACCARAT EXE     62496   8-03-90   3:00p
    BAHD               212   8-03-90   3:00p
    BAINTRO            757   8-03-90   3:00p
    BAPRT              221   8-03-90   3:00p
    BAREAD   COM      4200   8-03-90   3:00p
    BAREG             1987   8-03-90   3:00p
    BAREPLY  COM        14   8-03-90   3:00p
    BASTART  BAT       684   8-03-90   3:00p
    BINSTALL EXE      7920   8-03-90   3:00p
    GO       BAT        28   7-15-91   3:34p
    GO       TXT      1030   7-24-91   7:55p
           13 file(s)     123461 bytes
                           32256 bytes free
