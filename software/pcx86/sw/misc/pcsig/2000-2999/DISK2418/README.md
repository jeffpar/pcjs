---
layout: page
title: "PC-SIG Diskette Library (Disk #2418)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2418/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2418"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRAPS COMPLETE"

    Craps is one of the most popular gambling games found in casinos
    throughout the world. Now craps can be played from your computer! CRAPS
    COMPLETE offers the player the same action as you would expect to find
    at the crap table. All the various wagers are explained in the
    documentation. These include: pass line, pass line odds, don't pass,
    don't pass odds, place bets, don't place bets, big 6 & big 8, field
    bets, come bets & come odds, don't come & don't come odds,
    proposition bets, hardway bets, craps/eleven, any craps, and the horn
    bet.
    
    This is one way to become familiar with the game before going to the
    casinos and learning it the hard way.  Enjoy it in your home with
    others or by yourself!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRAPS.DOC

{% raw %}
```






















                                CRAPS COMPLETE
                                 Version 1.OO


                             EGA & Mouse Required
       

                              (C) Copyright 199O

                                      by

                               Raymond M. Buti

                             All Rights Reserved



                           United Innovations Plus
                            Post Office Box 21O81
                          Castro Valley, Ca.  94546

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


        TRADEMARKS .................................................. 1

        PROGRAMS ON DISK ............................................ 1

        PROGRAM REQUIREMENTS ........................................ 1

        SHAREWARE VS REGISTERED VERSION ............................. 1

        CRAPS ....................................................... 2

        LEARNING THE GAME ........................................... 2

          Pass Line ................................................. 2

          Pass Line Odds ............................................ 3

          Field ..................................................... 3

          Come ...................................................... 4

          Come Odds ................................................. 4

          Don't Come ................................................ 5

          Don't Come Odds ........................................... 5

          Place ..................................................... 6

          Don't Place ............................................... 7

          Big 6 and Big 8 ........................................... 7

          Proposition Bets .......................................... 7

          Horn ...................................................... 8

          Any Craps ................................................. 8

          Craps/Eleven .............................................. 8

          Hardway Bets .............................................. 9

        STARTING CRAPS .............................................. 9

        CRAPS TABLE OPTIONS ......................................... 9

        SELECTING OPTIONS .......................................... 10

        TABLE OPTION FUNCTIONS ..................................... 10

          Roll Dice ................................................ 10

          Setup Menu ............................................... 10

                                    - i -







          Statistics ............................................... 10

          High Scores .............................................. 10

          Quit ..................................................... 10

          Toggles for Don't Bets/Odds .............................. 10

          Toggles for Place Bets/Odds .............................. 11

        SELECTING CHIPS ............................................ 11

        PLACING YOUR BETS .......................................... 11

        CURRENT STATISTICS ......................................... 11

          Wager .................................................... 12

          Profit/Loss .............................................. 12

          Passes ................................................... 12

        SETUP MENU ................................................. 12

        SETUP OPTIONS .............................................. 12

          Sound .................................................... 12

          Save High Scores ......................................... 12

          Show Dice Movement ....................................... 13

          Field Payoff on 2 & 12 ................................... 13

          Maximum Odds ............................................. 13

          Take/Give Odds ........................................... 13

          Reset Craps Statistics ................................... 13

          Quit/Leave Setup Menu .................................... 13

        HIGH SCORES ................................................ 13

        CRAPS TERMINOLOGY .......................................... 14

        OTHER PROGRAMS ............................................. 16

          Casino/Gambling Games .................................... 16

          Solitaire Games .......................................... 16

          Other Games .............................................. 16

          Utilities ................................................ 16

        REGISTRATION FORM .......................................... 17

                                    - ii -








                                  TRADEMARKS

       "Microsoft" is a trademark of Microsoft Corporation

  
                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Craps   .Exe - The main program for Craps Complete.
         Craps01 .Inf - Graphics file required by Craps.Exe.
         Craps02 .Inf - Graphics file required by Craps.Exe.
         Craps03 .Inf - Graphics file required by Craps.Exe.
                        (Available on the Registered Version Only) 
         Craps   .Doc - The documentation for Craps Complete.
         CStart  .Bat - Batch file to read the  documentation,  print, 
                        read and install Craps.
         CRead  .Com  - Used by CStart.Bat
         CReply .Com  - Used by CStart.Bat
         CIntro       - Used by CStart.Bat
         CPrt         - Used by CStart.Bat
         CHd          - Used by CStart.Bat
         CInstall.Exe - Used by CStart.Bat or as a stand-only
                        installation program.                
         CReg         - Craps Complete Registration Form.
         Craps1S.Arc  - Shareware Version of Craps Complete.

                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       350K  of  free  Ram, an EGA graphics adapter,  and  a  MicroSoft 
       compatible mouse to play Craps. The files required to play Craps 
       are  CRAPS.EXE, CRAPS01.INF, CRAPS02.INF and CRAPS03.INF.  These 
       files  must be  present   on  your play disk or directory.   Use  
       the  "Copy" command  found  in your DOS manual for making copies  
       from   one disk to another.  A hard disk is recommended but  not 
       required.   NOTE:   CRAPS03.INF  available  on  the   Registered 
       version only.

                       SHAREWARE VS REGISTERED VERSION

       Craps  is written in two versions, a ShareWare version   and   a 
       Registered  version.  The ShareWare version is not  crippled  in 
       any  way.   This is a fully functional program of  Craps  .  The 
       Registered  version comes with added features which  allows  the 
       users  more  flexibility with Craps.  Users  of  the   ShareWare 
       version  will  have a message appear at the end  of  the   game.  
       The  message  will  state  that the program  is  NOT   free  and  
       continued   use  of the program   requires   registration   with 
       United Innovations Plus.

       To  register  Craps, fill in the registration form on  the  last 
       page and send in the required registration fee.

                                    - 1 -








       The following documentation for Craps explains all the  features 
       for the Registered version.  The words "Registered Version Only" 
       may  appear  throughout the documentation. These are  the  added 
       features which are available in the Registered version ONLY.


                                    CRAPS

       The  Casino  game of Craps is played in all the  major  gambling 
       establisments  throughout the world.  This is a fast paced  game 
       where  only  the knowledgeable gambler will stand  a  chance  of 
       coming  out a winner.   If you are already familiar with  Craps, 
       you  may  skip the section, "Learning The Game" and  proceed  to 
       "Starting Craps".

                              LEARNING THE GAME

       In  the  following section, you will find some terms  and  words 
       that  may be unfamiliar to you.  Most of these terms  and  words 
       are explained in the section, "Craps Terminology".

       If  you  are the only player at the table, you  must  throw  the 
       dice.   With more players at the table, you need not  throw  the 
       dice in order to play Craps.


                                  Pass Line

       Looking at the table, you will see a section marked, Pass  Line.  
       This will be the area closet to you.  If you are going to  throw 
       the  dice, you must place a bet on the Pass Line or  Don't  Come 
       Line.   Your  bet may be any amount as long as  your  bet  falls 
       within the house limits.

       When  you are throwing the dice, you are trying to  establish  a 
       Point number.  The Point numbers are 4, 5, 6, 8, 9, and 10.   On 
       the Come-Out roll of the dice the following can happen:

       1.   Rolling a 7 or 11 is a Natural, an automatic winner.   When 
       this happens, your Pass Line bet will be paid off at even money.  
       You are now ready for another Come-Out roll.

       2.   Rolling  a 2, 3 or 12 is Craps and all Pass Line  bets  are 
       lost.   You do not lose control of the dice.  You are now  ready 
       for another Come-Out roll.

       3.  Rolling a 4, 5, 6, 8 ,9, 10 will establish your Point.

       Once a Point number has been established, the numbers 2, 3,  11, 
       and 12 have no effect on the Pass Line.

       Having  rolled  a  Point, you are now concerned  with  only  two 
       numbers,  your Point number and a 7.  In order to win your  Pass 
       Line  bet,  you must again throw your Point number  before  a  7 
       appears.  If you do, you will be paid off at even money.  If you 


                                    - 2 -









       throw  a 7 before your Point number appears, you lose your  Pass 
       Line bet.

       The Pass Line bet is a Contract Bet and cannot be removed  after 
       a Point has been established.  You may only remove your bet from 
       the Pass Line after a Decision is made and before the next Come-
       Out Roll.


                                Pass Line Odds


       A Pass Line Odds bet is an additional bet that should be made by 
       all  players that have placed a bet on the Pass Line.  This  bet 
       is  placed  directly behind the Pass Line bet.  This  is  not  a 
       Contract  Bet  and may be removed at any time.  Any  player  may 
       take  the odds as long as the player has made a bet on the  Pass 
       Line.

       The  amount of money that may be bet on the Pass Line odds  will 
       depend what the house odds limits are.  The odds offered by  the 
       Casinos can be Single Odds, Double Odds or Triple Odds.

       Example:   The  Craps  table  allows  Double  Odds.   You   have 
       established  a  Point  with a $5 bet on  the  Pass  Line.   Your 
       Pass  Line  odds  bet should be $10.  You do not  have  to  take 
       Double  Odds.  A Single Odds bet will be allowed.  It is  always 
       better to bet the maximum allowable odds.

       The  following  is  a list of the Point  numbers  and  the  Odds 
       Casinos will pay:

                         Point            Payoff Odds
         
                        4 or 10              2 to 1
                        5 or 9               3 to 2
                        6 or 8               6 to 5

       Example:  Double Odds.  Pass Line bet of $5.  Point is 9 and you 
       take  the  odds for $10.  You make your  Point.   Your  winnings 
       would be $5 on the Pass Line (even money), and $15 on your  Odds 
       bet (3 to 2).  Your total amount wagered was $15 and your  total 
       profit  was  $20.   If you would have thrown a 7  and  not  your 
       point, you would have lost your Pass Line bet and your Odds  bet 
       for a loss of $15.


                                    Field

       If  you look at the Craps table layout, you will see  a  section 
       marked  "FIELD".  You will also notice the numbers 2, 3,  4,  9, 
       10, 11 and 12.  Normally the numbers 2 and 12 will have a circle 
       around them.  Some Casinos will substitute the number 4 with the 
       number 5.  This is a One Roll bet.  You will be betting that one 
       of the Field numbers will appear on the next roll of the dice.

                                    - 3 -








       Your payoff will be even money if the numbers 3, 4, 9, 10 or  11 
       come  up.  If either 2 or 12 (the circled numbers)  appear,  you 
       will be paid off at 2 to 1.  Some casinos will pay off 3 to 1 on 
       the numbers 2 and 12.


                                     Come

       The Come bet is almost identical to the Pass Line bet.   Betting 
       on  the Come bet allows you to have more than one Point  working 
       for you.  This is a Contract Bet as is the Pass Line bet.

       In  order to bet on the Come bet, the Shooter must have  a  Pass 
       Line  bet  or  a Don't Come bet.  In other words,  a  Point  has 
       already been established.

       Once  a Shooter has established a Point, you may place your  bet 
       on  the  Come bet.  From this point on, you are betting  on  the 
       Come-Out.   The next roll of the dice is identical to the  Come-
       Out roll of the Pass Line.  You win if a 7 or 11 is rolled.  You 
       lose if a 2, 3, or 12 is rolled.

       If  a  4, 5, 6, 8, 9 or 10 is rolled, that number  becomes  your 
       Point  number  for the Come bet.  The dealer will pick  up  your 
       Come  bet  and  move it to the Point number at the  top  of  the 
       table.   Looking  at  the craps table, you will  see  the  Point 
       numbers at the top of the layout.

       Once  your Come bet is transferred to the Point number, you  may 
       again  place another Come bet.  You may continue in  this manner 
       until you decide you no longer wish to make this bet.


                                  Come Odds

       Taking  the  odds on a Come bet require that  you  establish  at 
       least  1  or  more Come numbers.  The Come Odds  bet  is  not  a 
       Contract  Bet  and  may be removed at any time  by  telling  the 
       dealer, Odds Off or Odds On.

       Taking  the odds on a Come bet follow the same rules as do  when 
       taking the odds on a Pass Line bet.  Hand the dealer the correct 
       amount of money and tell him you wish to take the odds on one of 
       the Come bet numbers.  Remember, you must have established  that 
       Come bet number before you can take the odds.

       Your  odds  bet will be placed directly below your Come  bet  on 
       the  Come bet number.  Your payoff on the Come Odds bet are  the 
       same as they are for the Pass Line Odds bet.  Refer to Pass Line 
       Odds Bet.







                                    - 4 -








                                  Don't Come

       Looking  at your craps layout, you will see the Don't Come  line 
       directly  above  the Pass Line bet.  Some Casinos have  a  Don't 
       Pass line which is the same thing as the Don't Come line bet.

       The one thing you want to remember about the Don't Come line  is 
       that  it is the exact opposite of the Pass Line bet.   In  other 
       words,  when the Shooter wins on the Pass Line, the  Don't  Come 
       line loses.  When the Shooter loses on the Pass Line, the  Don't 
       Come line wins.

       You  will notice on the Don't Come line, the words Bar 2.   What 
       this means is that if the number 2 comes up, nobody wins.   It's 
       the same thing as a push or tie in Blackjack.  Some Casinos will 
       Bar the number 12 or even 3 instead of the number 2.

       Example  1:  The Shooter rolls a 7 or 11 on the  Come-Out  roll.  
       The Pass Line wins, the Don't Come loses.

       Example  2:  The Shooter rolls a 3 or 12 on the  Come-Out  roll.  
       The Pass Line loses, the Don't Come wins.

       Example  3:   The Shooter rolls a 2 on the Come-Out  roll.   The 
       Pass Line loses, the Don't Come is a stand-off or tie.

       Example  4:   The Shooter established the Point of  9.   If  the 
       Shooter  rolls  another 9 before a 7, the Pass  Line  wins,  the 
       Don't  Come  loses.  If the Shooter rolls a 7 before  the  Point 
       number 9, the Pass Line loses and the Don't Come wins.

       When  a  Point  is  established, your Don't  Come  bet  will  be 
       transered  from  the Don't Come bet to the  corresponding  Don't 
       Come numbers.  These are the empty boxes directly above the Come 
       numbers.  You may bet as many bets on the Don't Come line as you 
       wish.


                               Don't Come Odds

       This  bet  works the same way the Come Odds bet works,  only  in 
       reverse.   On  a Come bet, you take the odds.  On a  Don't  Come 
       bet, you give the odds.

       The  following  is  a list of the Point  numbers  and  the  Odds 
       Casinos will pay:

                         Point            Payoff Odds
         
                        4 or 10              1 to 2
                        5 or 9               2 to 3
                        6 or 8               5 to 6 

       As  you can see by the Payoff Odds, when betting the Don't  Come 
       Odds, you must lay the odds.


                                    - 5 -








       Example 1:  Don't Come odds bet on 4 or 10.  You must bet $2  to 
       win $1.

       Example 2:  Don't Come odds bet on 5 or 9.   You must bet $3  to 
       win $2. 

       Example 3:  Don't Come odds bet on 6 or 8.   You must bet $6  to 
       win $5. 

       You may remove your Don't Come odds at any time.


                                    Place

       Looking  at the Craps table layout, your Place Bets are  located 
       in the same place as the Come Bets.  Those are the boxes at  the 
       top of the layout containing the Point numbers.

       This  type  of bet is used in placing a bet on  a  Point  number 
       without  having the dice decide for you.  You may decide to  use 
       this bet in the event the Shooter rolls a Point that you are not 
       satisfied with.  You may place your bet on any one or all of the 
       Place  Bets.  These bets may be removed at any time.   You  only 
       need to tell the dealer, Place Bets Off or Place Bets On.

       To  place  this bet, give the dealer your bet and tell  him  you 
       wish  to  Place Bet whatever number you have  chosen.   He  will 
       place your bet on that number.

       The following are the payoffs for Place Bets:

                       Place Bet          Payoff Odds
         
                        4 or 10              9 to 5
                        5 or 9               7 to 5
                        6 or 8               7 to 6 

       Example 1:  A $5 Place Bet on a 4 or 10 will pay $9.

       Example 2:  A $5 Place Bet on a 5 or 9 will pay $7.

       Example 3:  A $6 Place Bet on a 6 or 8 will pay $7.

       In order to be paid the correct odds when betting the Place Bet, 
       your bets must be made in increments of $5 on the numbers 4,  5, 
       9,  10.  For the numbers of 6 and 8, your bets must be  made  in 
       increments of $6.

       Your Place Bets will win whenever that number is rolled.  If a 7 
       is rolled, you lose all your place bets.







                                    - 6 -








                                 Don't Place

       The  Don't  Place bet is the exact opposite of  the  Place  bet.  
       This  bet  is  located in the empty boxes above  the  Place  bet 
       numbers.  

       You  may  place your bet on any one or all of  the  Don't  Place 
       bets.  These bets may be removed at any time.  You only need  to 
       tell the dealer Don't Place Off or Don't Place Bets.

       To  place  this bet, give the dealer your bet and tell  him  you 
       wish  to place your bet on the Don't Place.  He will place  your 
       bet on the number you've told him.

       When making this type of bet, you must give the odds.

       The  following  is  a list of the Point  numbers  and  the  Odds 
       Casinos will pay:

                         Point            Payoff Odds
         
                        4 or 10              5 to 11
                        5 or 9               5 to 8
                        6 or 8               4 to 5 

       As  you can see by the Payoff Odds, when betting the Don't Place 
       bet, you must lay the odds.

       Example 1:  Don't Place bet on 4 or 10.  You must bet $11 to win 
       $5.

       Example 2:  Don't Place bet on 5 or 9.   You must bet $8 to  win 
       $5. 

       Example 3:  Don't Place bet on 6 or 8.   You must bet $5 to  win 
       $4. 
 
       To  win your bet, a 7 must appear on the dice before the  number 
       where your bet was placed appears.


                               Big 6 and Big 8

       The Big 6 and Big 8 bets are usually located at both ends of the 
       Craps  table.   These  are usually large and  can't  be  missed.  
       These  bets  may be removed at any time.  In order to  win  this 
       bet, a 6 or 8 must appear on the dice before a 7 is rolled.


                               Proposition Bets

       All  the Proposition Bets are a one roll dice bet.  This may  be 
       bet at any time regardless of the other bets at the table.   The 
       Proposition  numbers  are 2, 3, 7, 11, and 12.  Looking  at  the 
       Craps  table, you will normally find these numbers located in  a 


                                    - 7 -








       rectangular area in the center of the table.  You should  inform 
       the dealer when making these bets.
       
       To  place one of these bets, hand the dealer your bet  and  tell 
       him  you wish to bet one of those Proposition numbers.  If  that 
       number  comes up on the next roll, you win.  If you number  does 
       not appear on the next roll, you lose.

       The  following  is a chart showing the Proposition  numbers  and 
       their payoffs:

                   Proposition Number     Payoff Odds
         
                          2                 30 to 1
                          3                 15 to 1
                          7                  4 to 1 
                         11                 15 to 1
                         12                 30 to 1


                                     Horn

       The  Horn  Bet is a one roll dice bet.  This may be bet  at  any 
       time  regardless of the other bets at the table.  You will  find 
       the  Horn  Bet within the rectangular area  of  the  Proposition 
       bets.

       To  place one of these bets, hand the dealer your bet  and  tell 
       him you wish to bet on the Horn.  When playing the Horn, you are 
       playing 4 numbers at one time.  The numbers 2, 3, 11 and 12 make 
       up a Horn bet.  If any one of those 4 numbers appear on the next 
       roll of the dice, you win.  If not, you lose.

       Remember,  you are playing 4 numbers at the same time.   With  a 
       bet of $4 on the Horn, your have actually $1 bet on each of  the 
       four  numbers.  If one of the Horn bets come up, one  fourth  of 
       your  will  be paid off at the odds for that  number.   See  the 
       Proposition bet payoffs above.


                                  Any Craps

       The  Any Craps bet is a one roll of the dice bet.  When  betting 
       on  Any  Craps, you are betting that the next roll of  the  dice 
       will  be either a 2, 3, or 12.  This bet is paid off at 7 to  1.  
       You  will  find  this bet near the  bottom  of  the  Proposition 
       numbers.


                                 Craps/Eleven

       Craps/Eleven  is a one roll of the dice bet.  When betting  this 
       bet, you are betting two bets at once, the Eleven and Any Craps.  
       If  you were betting $2 on CE (Craps/Eleven) then $1 of the  bet 
       would  be on Eleven, the other $1 on CE.  This bet  is  normally 


                                    - 8 -








       found on the sides of the Proposition numbers.  In this computer 
       version of Craps, CE will be found next to the Horn bet.


                                 Hardway Bets

       The  Hardway  bets are also located within  the  Propostion  bet 
       layout.   There are 4 Hardway bets available.  The 4, 6,  8  and 
       10.    A  Hardway  bet  is  a  paired  number.    The   possible 
       combinations for Hardway bets are:

                       Dice Outcome         Dice Outcome
                      Hardway Winners      Softway Losers
          
                          2 - 2            3 - 1       
                          3 - 3            4 - 2    5 - 1
                          4 - 4            5 - 3    6 - 2
                          5 - 5            6 - 4

       This  bet may be removed at any time.  When placing the  Hardway 
       bet,  you are betting the Hardway number will appear before a  7 
       or  your number appears the Softway.  Just tell the  dealer  you 
       wish to bet on the Hardway of your choice.


                                STARTING CRAPS

       From  your  DOS prompt, type CRAPS and press the ENTER  key.  In 
       order  for Craps  to run, you must be logged onto the  directory 
       where   CRAPS.EXE,  CRAPS01.INF,  CRAPS02.INF  and   CRAPS03.INF 
       reside.

       The  first  screen you see will be the boot screen.   This  will 
       display   the copyright notice and version number of Craps.    A 
       message will be displayed on the bottom of the screen asking you 
       to press a mouse button.

       The  next  screen you see will be the Craps table  layout.   You 
       will  be playing Craps from this screen.


                             CRAPS TABLE OPTIONS

       The  lower portion of the Craps layout screen will display  some 
       of the options you have available.  Your available options  will 
       depend  on whether  you are using the ShareWare version  or  the 
       Registered version. All the options will be a rectangular yellow 
       button with the function written inside. 


                          ShareWare Version Options

                             Roll Dice  or  Quit
                          4 Toggles for odds & bets



                                    - 9 -








                          Registered Version Options

                                  Roll Dice
                                  Setup Menu
                                  Statistics
                                 High Scores
                                     Quit
                          4 Toggles for odds & bets


                              SELECTING OPTIONS

       To select one of the options, move the mouse cursor over to  the 
       selection of your choice and press one of the mouse buttons.  


                            TABLE OPTION FUNCTIONS

                                  Roll Dice

       When  you choose "Roll Dice", two dice will be tossed within   a 
       rectangular   area   located  at the lower  right   portion   of  
       your screen.


                    Setup Menu (Registered Version Only)

       Selecting this option will allow Registered users to change  the 
       current settings of Craps Complete (See Setup Options).

                     Statistics (Registered Version Only)

       Selecting  this  option will allow Registered users  to  view  a 
       statistics screen.  This screen will display a running count  of 
       how many times each number has appear.

                    High Scores (Registered Version Only)

       Selecting  this option will allow Registered users to  view  the 
       top fifteen high scores (See High Scores).

                                     Quit

       Selecting this option will return you to your DOS prompt.
       
                         Toggles for Don't Bets/Odds 

       These  toggles are placed to the right of the Don't Come,  Don't 
       Come  Odds and Don't Place boxes.  The left button or toggle  is 
       marked  "Odds" and the right toggle is marked  "Don't".   Beside 
       each  of  the toggles will either be the word ON  or  OFF.   The 
       toggles function in the following manner:

       Selecting the Odds toggle will allow your Don't Come odds to  be 
       Off  or On.  If you have a Don't Come bet established  and  have 


                                    - 10 -








       given  the  odds  on that number, you may  remove  the  odds  by 
       switching  the Odds toggle to Off.  To replace your  Don't  Come 
       odds bet, switch the Odds toggle to On.

       Selecting  the Don't toggle will allow your Don't Place bets  to 
       be switched Off or On.  


                         Toggles for Place Bets/Odds

       These  toggles  are placed to the right of the Come  bets,  Come 
       Odds  and the Place boxes.  The left button or toggle is  marked 
       "Odds"  and the right toggle is marked "Place".  Beside each  of 
       the  toggles  will either be the word ON or  OFF.   The  toggles 
       function in the following manner:

       Selecting the Odds toggle will allow your Come odds to be Off or 
       On.  If you have a Come bet established and have taken the  odds 
       on  that number, you may remove the odds by switching  the  Odds 
       toggle  to Off.  To replace your Come odds bet, switch the  Odds 
       toggle to On.

       Selecting  the  Place toggle will allow your Place  bets  to  be 
       switched Off or On.  
  

                               SELECTING CHIPS

       Below  your  Pass  Line, you will see  a  section  marked  "Chip 
       Selection" and "Current Chip".  Select the value of your bet  by 
       moving your mouse cursor over the value of the chip you wish  to 
       bet.   Press either mouse button to make that the  Current  chip 
       value.  Future bets will use the Current chip value.


                              PLACING YOUR BETS

       To place any wager on the Craps table, move your mouse cursor to 
       the  betting area where you wish to place your bet.   Press  the 
       Left  mouse  button  to  place the Current  chip  value  at  the 
       location.   You may increment your bet by  continually  pressing 
       the Left mouse button until the table limit is reached.  

       To remove your wager, move your mouse cursor to the betting area 
       where  you  currently  have a wager and press  the  Right  mouse 
       button.  This will remove your wager from that betting location.


                              CURRENT STATISTICS

       Below the Chip Selection area, you will notice the words, WAGER, 
       PROFIT/LOSS and PASSES.





                                    - 11 -








                                    Wager

       Whenever  you place or remove a bet, the amount bet is  changed.  
       This  is displayed in the Wager column.  After each roll of  the 
       dice, the result will also be shown in this column.  The  result 
       is your profit or loss from each roll of the dice.

                                 Profit/Loss

       In the Profit/Loss column, your current profit/loss is displayed 
       as you play Craps.  The current profit/loss is started each time 
       you start playing Craps.  Below the current profit/loss is  your 
       total  profit/loss.   Your  total profit/loss will  show  you  a 
       running total of all your Crap games.

                                    Passes

       The  Passes column will display the consecutive passes of  dice.  
       This  will  show your current passes and your  most  consecutive 
       passes.

       The  current passes will increment by one each time the  Shooter 
       makes  a pass of the dice.  The current passes will reset  to  0 
       when the Shooter sevens out.  If the Shooter rolls a 2, 3, or 12 
       on the Come-Out roll, it will not have any effect on the current 
       passes made.


                      SETUP MENU (Registered Users Only)
       
       Selecting the Setup Menu will bring up the following options:

                        Sound                       On
                        Save High Scores           Off
                        Show Dice Movement          On
                        Field Payoff on 2 & 12     2:1
                        Maximum Odds            Single
                        Take/Give Odds          Single
                        Reset Craps Statistics
                        Quit/Leave Setup Menu

                    SETUP OPTIONS (Registered Users Only )
       
       To  change  any of the default settings, select  the  option  by 
       moving the mouse cursor to the option and press either button.

                                    Sound

       This will allow you to turn the sound on or off.
       
                               Save High Scores

       Your  scoring may be saved to disk if this option is set to  ON.  
       If  this  option is set to ON, you will be asked for  your  name 
       when   you  have finished playing Craps, assuming  your    score 


                                    - 12 -








       is   high enough for the top 15 scores.  Once you  have  entered 
       your   name,  you  will not have to enter it again  when  asked, 
       just  press  the ENTER key.  The last name entered  becomes  the 
       default name.

                              Show Dice Movement

       Each time you roll the dice, they will be seen moving within the 
       dice  area.  If you would rather not see this or would  wish  to 
       speed the game up, turn the option to Off.

                            Field Payoff on 2 & 12

       Within  the Field bet, the numbers 2 and 12 will pay off at  the 
       odds  of  2  to 1.  By selecting this option,  you  will  toggle 
       between  2 to 1 odds and 3 to 1 odds on the Field numbers  of  2 
       and 12.
   
                                 Maximum Odds

       By  default,  the maximum odds that may be taken  or  given  are 
       Single  odds.   By  selecting this option,  you  toggle  between 
       Single odds, Double odds and Triple odds.

                                Take/Give Odds

       This  option  will set the minimum odds amount  when  taking  or 
       giving  odds.   This cannot exceed the  Maximum  Odds  explained 
       above.  The reason for this option is to allow the user to  take 
       or give odds less than the Maximum odds if it is set higher.

                            Reset Craps Statistics

       Selecting  this  option will reset all the  game  statistics  to 
       zero.  The only thing that is not reset is the High Scores  (See 
       High Scores).

                            Quit/Leave Setup Menu

       Selecting this option will clear the Setup Menu from your screen 
       and return you to your Craps table.


                    HIGH SCORES (Registered Version Only)

       The Registered version of Craps Complete will allow the user  to 
       save the high  scores  or winnings to disk.  By selecting  "High  
       Scores" from your Main Options, you will be able to view the top 
       fifteen players and their scores.

       The High Score screen will display a Clear Scores toggle in  the 
       upper  right  corner.  By selecting this, you will be  asked  to 
       verify if you really want to clear the High Scores.  

       To leave the High Score screen, move your cursor to area  marked 
       "Leave High Scores" and press either mouse button.

                                    - 13 -








                              CRAPS TERMINOLOGY

                                  Any Craps

       Numbers 2, 3, or 12.  Also known as Crap Numbers.

                                     Bar

       Found usually on the Don't Come or Don't Pass Line.  This  means 
       a tie or stand-off.

                                   Come Bet

       Betting that the Shooter will make Natural or his Point.

                                 Contract Bet

       This is a bet placed on the table that cannot be removed until a 
       decision is made the dice.

                                Come Out Roll

       When the Shooting is throwing the dice and trying to establish a 
       Point.  The first roll of the dice.

                       Don't Pass Line/Don't Come Line

       A  bet  that the Shooter loses.  This is  also  called  "betting 
       against the Shooter".

                                   Decision

       When the dice have decided whether you win or lose.

                                  Field Bet

       A bet covering the numbers 2, 3, 4, 9, 10, 11, and 12.

                                 Hardway Bet

       A  bet covering the numbers 4, 6, 8, or 10.  These numbers  must 
       be made with a pair.

                                   Horn Bet

       A bet covering the numbers 2, 3, 11, and 12.

                                   Natural

       This means the Shooter throws a 7 or 11 on the Come Out roll.

                                   Odds Bet

       This  is  an additional wager which should be  made  by  players 
       having  a  Pass Line or Come Line bet.  These bets are  paid  at 
       the true odds.

                                    - 14 -








                                 One Roll Bet

       A bet that will be decided on the nest roll of the dice.

                                     Pass

       Betting  that  the Shooter will roll a 7 or 11 on the  Come  Out 
       roll, or establish and make a Point number.

                                Pass Line Bet

       A bet that the Shooter wins.

                                    Point

       Any  4,  5, 6, 8, 9, or 10 the Shooter throws on  the  Come  Out 
       roll.

                                  Place Bet

       Placing a bet on a Point number of your own choice.

                               Proposition Bet

       A bet on 2, 3, 7, 11, or 12.

                                   Shooter

       The person throwing the dice.




























                                    - 15 -








                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
                 ALL REGISTERED VERSIONS run on either CGA or
                      Monochrome unless otherwise noted.
       

                            CASINO/GAMBLING GAMES

        *Lowball Poker      Draw Poker               Baccarat
         Roulette          *Blackjack Connoisseur   *Chuck-a-Luck 
        *Holdem Poker      *Knock Poker             *Red Dog
         Sic Bo (EGA)       Craps Complete (EGA)     Poker Slot (EGA)

                               SOLITAIRE GAMES

        *Pyramid              *Poker                   *Osmosis 
        *Accordion             Baker (VGA)             *Golf
         Thinking Man's (EGA)

                                 OTHER GAMES

        *SuJu                 Jigsaw Mania (VGA)       *Pig
         Peg (VGA)            Fifteen

       

                                  UTILITIES

         DCS               EU               Kill               DX           
         CDate             JMSC (VGA)


























                                    - 16 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                                CRAPS COMPLETE
                          Version 1.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______
       If you have previously registered any program
       with United Innovations Plus, deduct $5.OO               _______
       30 ShareWare Versions   ( ) 5 1/4"  ( ) 3 1/2"   $1O.OO  _______
            
                                   Foreign orders add   $ 5.OO  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


             Where did you acquire this version of Craps Complete

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


        For our records, please indicate your systems display adapter.

                    ___MONO    ___CGA    ___EGA    ___VGA



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21O81
                                        Castro Valley, CA 94546

                                    - 17 -





```
{% endraw %}

## FILE2418.TXT

{% raw %}
```
Disk No: 2418                                                           
Disk Title: Craps Complete                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: Craps Complete                                           
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: 350K RAM, EGA, and MicroSoft compatible mouse.  Ha
                                                                        
Craps is one of the most popular gambling games found in casinos        
throughout the world.  Now Craps can be played from your computer!      
CRAPS COMPLETE offers the player the same action as you would expect to 
find at the Crap table.  All the various wagers are explained in the    
documentation, which include:  Pass Line, Pass Line Odds, Don't Pass,   
Don't Pass Odds, Place Bets, Don't Place Bets, Big 6 & Big 8, Field     
Bets, Come Bets & Come Odds, Don't Come & Don't Come Odds, Proposition  
Bets, Hardway Bets, Craps/Eleven, Any Craps, and the Horn Bet.          
                                                                        
This is one way to become familiar with the game BEFORE going to the    
casinos, or to enjoy it in your home with others or just yourself!      
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2418

     Volume in drive A has no label
     Directory of A:\

    CHD                212   8-10-90   1:00a
    CINSTALL EXE      8448   8-10-90   1:00a
    CINTRO             737   8-10-90   1:00a
    CPRT               221   8-10-90   1:00a
    CRAPS    EXE     94896   8-10-90   1:00a
    CRAPS    DOC     45330   8-10-90   1:00a
    CRAPS01  INF     75906   8-10-90   1:00a
    CRAPS02  INF      5926   8-10-90   1:00a
    CREAD    COM      4200   8-10-90   1:00a
    CREG              1978   8-10-90   1:00a
    CREPLY   COM        14   8-10-90   1:00a
    CSTART   BAT       652   8-10-90   1:00a
    FILE2418 TXT      2147  10-17-90  10:10a
           13 file(s)     240667 bytes
                           73728 bytes free
