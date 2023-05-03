---
layout: page
title: "PC-SIG Diskette Library (Disk #1733)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1733/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1733"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PIG"

    All those who thought "Pig Out" only meant eating too much
    during the Holidays will be in for a surprise with Raymond Buti's
    simple, but delightful game called PIG.  You take on the computer by
    rolling a single die, trying to reach the score of 100 or 200.
    You can accumulate a score as long as you don't roll a "1"--but if you
    do, you are awarded the title of PIG and loose all points
    scored up until that point!  First to reach 100 or 200 is the winner
    and receives 10X the points ahead of the other player minus 5
    points for each "Pig" received during play.  Points accumulate
    after each round.
    
    PIG is an exciting game for all ages.  Anyone with an interest in dice
    games should enjoy it.  Fun for the whole family, PIG will keep you
    occupied for hours as you try to match your wits with those of the
    computer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1733.TXT

{% raw %}
```
Disk No: 1733                                                           
Disk Title: Pig                                                         
PC-SIG Version: S1.1                                                      
                                                                        
Program Title: Pig                                                      
Author Version: 1.00A                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
For all those who thought "Pig Out" only meant eating too much          
during the Holidays, will be in for a surprise by Raymond Buti's        
simple but delightful game called PIG.  You take on the computer        
by rolling a single die trying to reach the score of 100 or 200.        
You can accumulate a score as long as you don't roll a "1" - but        
if you do, you are awarded the title of PIG and lose all points        
scored up till that point!  First to reach 100 or 200 is the winner     
and receives 10X the points ahead of the other player minus 5           
points for each "Pig" received during play.  Points accumulate          
after each round.                                                       
                                                                        
PIG is an exciting game for all ages.  Anyone with an interest in       
dice games should enjoy.  The pleasant graphics and easy to use         
menus, mostly supported by the function keys, make this a must for      
any game player's library.                                              
                                                                        
Played on an IBM or compatible, PIG tests your best casino              
strategies.  The ease of play is quite remarkable - only 3 commands     
are used while in play.  To toss the die press ENTER, to pass the       
die press END and to quit out of the game press F10.  The set up        
menu will allow you to choose color choices, speed of play, game        
score, sound toggle and more.                                           
                                                                        
Fun for the whole family, PIG will keep you occupied for hours as       
you try to match your wits with those of the computer.                  
                                                                        
                                                                        
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
║                     <<<<  Disk #1733  PIG  >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: PSTART  (press enter)                           ║
║                                                                         ║
║ To print documentation, type: COPY PIG.DOC PRN  (press enter)           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PIG.DOC

{% raw %}
```
























                                     PIG
                                Version 1.OOA

                               CGA or Monochrome

                              (C) Copyright 1989

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


       PROGRAMS ON DISK ............................................. 1

       PROGRAMS REQUIRED TO RUN PIG ................................. 1

       PIG RULES .................................................... 1

       STARTING PIG ................................................. 1

       MAIN PLAYING SCREEN .......................................... 2

       MAIN OPTIONS ................................................. 2

       PLAY OPTIONS ................................................. 3

       SETUP MENU ................................................... 3

       SETUP OPTIONS ................................................ 4

       SCORING ...................................................... 4

       HIGH SCORES .................................................. 5

       SHAREWARE VERSION ............................................ 5

       OTHER PROGRAMS ............................................... 5

           CASINO/GAMBLING GAMES .................................... 5

           SOLITAIRE GAMES .......................................... 5

           OTHER GAMES .............................................. 5

           UTILITIES ................................................ 5

       REGISTRATION FORM ............................................ 6




























                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Pig .Exe       -  The main program for Pig.
         Pig .Doc       -  The documentation for Pig.
         PStart .Bat    -  A batch file to  read  the  documentation, 
                           print the documentation and install  Pig 
                           on a Hard Drive.
         PRead  .Com    -  Used by PStart.Bat
         PReply .Com    -  Used by PStart.Bat
         PIntro         -  Used by PStart.Bat
         PPrt           -  Used by PStart.Bat
         PHd            -  Used by PStart.Bat
         PigReg         -  Registration Form
         Pig1AS  .Arc   -  Shareware Version of Pig

   
                         PROGRAMS REQUIRED TO RUN PIG

       The only file required to play PIG is PIG.EXE.  In order for Pig 
       to keep tract of the game history, you must be in the  directory 
       where this file resides while playing the game.


                                  PIG RULES

       The game of Pig is played with one die and any number of players 
       may  play.   In this computer game, you play  against  Mr.  Pig.  
       When you first start playing, the computer will decide who  goes 
       first, you or Mr. Pig.  Once the game is won, the winner  starts 
       the next game.

       The  first  player to act, tosses the die as many  times  as  he 
       desires,  adding  the numbers shown on the die.  If  the  player 
       throws  and  ace, it cancels out whatever score he has  made  on 
       that turn.  The player may stop throwing and pass the die to the 
       next  player  at any time, but he must throw the  die  at  least 
       once.   If the die is passed before throwing an ace, the  player 
       is  credited with the sum of the numbers he has thrown  on  that 
       turn.   The  first  player  to reach a total  count  of  100  is 
       declared the winner. 


                                 STARTING PIG

       From  your  DOS prompt, type PIG and press ENTER.  Your  monitor  
       will display the opening screen.  After a few  seconds, or until 
       you hit a key, the main playing screen will appear.  





                                    - 1 -








                             MAIN PLAYING SCREEN

       The  upper  right portion of the Main Screen  will  display  the 
       options  available to you prior to starting the game  (See  Main 
       Options).   Below  the main options you will see, "Game  at  100 
       Points".  This is letting you know the total points required  to 
       win the game.  This may be changed to 200 (See Setup Menu).

       The  lower  right  portion  of  the  screen  will  display   the 
       following:

                                 Mr. Pig Won  
                                 Player Won  
                                 Total Games 
                                 Best Score  

       The  computer will keep tract of the amount of games won by  Mr. 
       Pig  and  you the Player, the total games played  and  the  best 
       score achieved.


                                 MAIN OPTIONS

       The  upper  right  portion  of  your  screen  will  display  the 
       following options available to you prior to starting a game:
                                        
                                F1  Start Game       
                                F3  Setup Options    
                                F5  Pig Scoring      
                                F8  High Scores      
                                F10 Quit             
       
       F1  - Pressing Function 1 will start a game  of  Pig.   You  may 
             also  press  the ENTER key in place of the F1 key  if  you 
             prefer.   When  this  is done, the Main  Options  will  be 
             replaced with the Play Options.

             A  Pig  button will be placed to the side of  the  players 
             scoring  box, letting you know whose turn it is.   If  the 
             Pig  button moves to Mr. Pig, he will proceed to play  the 
             game.   When  the button moves to the  players  area,  the 
             computer will wait for your response (See Play Options ).

       F3  - Pressing Function 3  will  bring  up a  screen  displaying 
             some options you may want to change.  When these       are 
             changed,  they  are  made permanent  until  changed  again      
             (See Setup Menu).

       F5  - Pressing Function 5 will bring up a screen describing  the 
             scoring method used by Pig (See Scoring).

       F8  - Pressing Function 8 will bring up the  high  scores   (See 
             High Scores).

       F10 - Pressing Function 10 will quit the game of Pig and  return 
             you to your Dos prompt.

                                    - 2 -








                                 PLAY OPTIONS

       After you have pressed either F1 or ENTER from the Main Options, 
       the  upper  right portion of the screen will display  your  play 
       options.  You should see the following:

                             ENTER  Toss the die
                             END    Pass the die
                             F10    Quit        

       If it's your turn to toss the die, you must respond by  pressing 
       one of the three keys before the computer will know what to do.

       ENTER - Pressing the ENTER key will toss the die.  The die  will 
               move around and finally stop to the right of your  score 
               box.   The number shown on the die will be added to  the 
               points you have showing, indicated by the large numbers.  
               Below  the large point numbers will be your score.   The 
               score will change if you are currently ahead of Mr.  Pig 
               (See  Scoring).  Keep pressing the ENTER key  until  you 
               decide  you  wish to stop and retain the  points  you've 
               accumulated.

       END   - Pressing  the  END key  will indicate  you  are  through 
               tossing  the die.  The points you have accumulated  will 
               not  be lost. The Pig button will move to Mr. Pigs  area 
               and he will continue playing until he decides to pass or 
               he tosses an ace. If you had tossed an ace (Pigged Out), 
               you  would  have lost the points  you  have  accumulated 
               during that round only.  When you Pig Out, you will  not 
               have to press the END key.

       F10   - When you press the Function 10  key, you  are  quitting.  
               When  you  quit before the game has been  won,  you  are 
               surrendering  and Mr. Pig will be credited with the  win 
               but his score will not be entered into the high  scores.  
               He doesn't like quitters and feels he most likely  would         
               have won anyway.  

       Play  will  continue  in this manner until the game  is  won  by 
       either you or Mr. Pig, or until you press the F10 key.


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A  new screen will appear displaying the following  options  and 
       default settings:

                    1   Sound                        On
                    2   Save High Games             Off  
                    3   Sliding Screens              On  
                    4   Snow Removal                Off  
                    5   Dice Speed                   20  
                    6   Winning Game Score          100  
                                                    

                                    - 3 -








                                SETUP OPTIONS

       1 - Use this key to turn your sound either On of Off.

       2 - If you want to save your high scores to disk, be  sure  this 
           option is On.

       3 - While going from one screen  to  another, the  screens  will 
           slide open.  If this causes snow or you would rather not see  
           it happen, you may turn it off with this option.

       4 - Use this option if you are experiencing snow.

       5 - You may wish to change the speed of the movement of the  die 
           when being tossed.  This will change the speed of the  game.  
           The  bottom  of  your  screen  will  display  the  following 
           options:

                    LEFT/RIGHT Arrows      ENTER      F10

           Use  your LEFT/RIGHT Arrow keys to decrease or increase  the 
           speed setting.  The lower the number, the faster the  speed.  
           Press the ENTER key if you want to see the effect the  speed 
           setting  has on the die movement.  When you  are   satisfied 
           with the setting, press the Function 10 key when your done.

       6 - By default, the game is won as soon as either player reaches 
           100  points.  This may be changed to 200 points by  pressing 
           the number 6 option.  Press the number 6 key again to change 
           it back to 100 points.


                                   SCORING

       The  winners  score is determined by the  difference  in  points 
       between  each player. The point difference is multiplied by  10.  
       This figure is your score which is shown below the points you've 
       accumulated towards a game win.

       EXAMPLE:   Mr. Pig wins with 102 points.  Player has 72  points.  
       The difference in points is 30.  Multiplying 30 x 10 would  give 
       Mr. Pig a score of 300.

       The final score would depend on how many times the winner pigged 
       out.   5  points  will be deducted for each ace  that  has  been 
       tossed.   In the example above, if Mr. Pig tossed a total  of  5 
       aces  before winning the game, his final score of 300  would  be 
       deducted by 25 points.  This would give Mr. Pig a final score of 
       275. Your final score will never get below 1 point.

       A  BONUS  of  100 points is awarded if you  have  won  the  game 
       without  pigging  out.  In the example above, if Mr.  Pig  never 
       tossed an ace, he would have a final score of 400.

       During the game, if you are ahead your score will always been  a 
       number greater than 0, otherwise your score will show a 0.

                                    - 4 -








                                 HIGH SCORES

       When  you press the Function 8 key from the Main  Options,  your 
       screen  will display the score of the top 15 Pig players.   This 
       will  show  the  players name, a number of  either  100  or  200 
       indicating  the  game points, the players final score,  and  the 
       date  the  score was achieved.  The bottom line of  your  screen 
       will  display  the amount of times you have beaten Mr.  Pig.  To 
       leave this screen, press the ENTER key.


                              SHAREWARE VERSION

       The  ShareWare  version of Pig does not support  the  saving  of 
       high  scores to disk, the saving of the setup  options,  or  the 
       game  counters.   We  have left a  few  options  available   for 
       registered users.  These minor restrictions will not effect  the 
       game   in anyway.  After you have played Pig for   a  reasonable  
       time,    we  ask  for  your  support  by   sending    in    your 
       registration.    Registered  users  will  receive   the   latest        
       Registered  Version, with full saving features, and  the  latest        
       ShareWare Version.


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







                                    - 5 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                                     Pig
                          Version 1.00A Registration


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


                  Where did you acquire this version of Pig

       ________________________________________________________________




                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546




                                    - 6 -





```
{% endraw %}

## PIG.DOC

{% raw %}
```
























                                     PIG
                                 Version 1.OO

                               CGA or Monochrome

                              (C) Copyright 1989

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


       PROGRAMS ON DISK ............................................. 1

       PROGRAMS REQUIRED TO RUN PIG ................................. 1

       PIG RULES .................................................... 1

       STARTING PIG ................................................. 1

       MAIN PLAYING SCREEN .......................................... 2

       MAIN OPTIONS ................................................. 2

       PLAY OPTIONS ................................................. 3

       SETUP MENU ................................................... 3

       SETUP OPTIONS ................................................ 4

       SCORING ...................................................... 4

       HIGH SCORES .................................................. 5

       SHAREWARE VERSION ............................................ 5

       OTHER PROGRAMS ............................................... 5

           CASINO/GAMBLING GAMES .................................... 5

           SOLITAIRE GAMES .......................................... 5

           OTHER GAMES .............................................. 5

           UTILITIES ................................................ 5

       REGISTRATION FORM ............................................ 6




























                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Pig .Exe       -  The main program for Pig.
         Pig .Doc       -  The documentation for Pig.
         PStart .Bat    -  A batch file to  read  the  documentation, 
                           print the documentation and install  Pig 
                           on a Hard Drive.
         PRead  .Com    -  Used by PStart.Bat
         PReply .Com    -  Used by PStart.Bat
         PIntro         -  Used by PStart.Bat
         PPrt           -  Used by PStart.Bat
         PHd            -  Used by PStart.Bat
         PigReg         -  Registration Form
         Pig1AS  .Arc   -  Shareware Version of Pig

   
                         PROGRAMS REQUIRED TO RUN PIG

       The only file required to play PIG is PIG.EXE.  In order for Pig 
       to keep tract of the game history, you must be in the  directory 
       where this file resides while playing the game.


                                  PIG RULES

       The game of Pig is played with one die and any number of players 
       may  play.   In this computer game, you play  against  Mr.  Pig.  
       When you first start playing, the computer will decide who  goes 
       first, you or Mr. Pig.  Once the game is won, the winner  starts 
       the next game.

       The  first  player to act, tosses the die as many  times  as  he 
       desires,  adding  the numbers shown on the die.  If  the  player 
       throws  and  ace, it cancels out whatever score he has  made  on 
       that turn.  The player may stop throwing and pass the die to the 
       next  player  at any time, but he must throw the  die  at  least 
       once.   If the die is passed before throwing an ace, the  player 
       is  credited with the sum of the numbers he has thrown  on  that 
       turn.   The  first  player  to reach a total  count  of  100  is 
       declared the winner. 


                                 STARTING PIG

       From  your  DOS prompt, type PIG and press ENTER.  Your  monitor  
       will display the opening screen.  After a few  seconds, or until 
       you hit a key, the main playing screen will appear.  





                                    - 1 -








                             MAIN PLAYING SCREEN

       The  upper  right portion of the Main Screen  will  display  the 
       options  available to you prior to starting the game  (See  Main 
       Options).   Below  the main options you will see, "Game  at  100 
       Points".  This is letting you know the total points required  to 
       win the game.  This may be changed to 200 (See Setup Menu).

       The  lower  right  portion  of  the  screen  will  display   the 
       following:

                                 Mr. Pig Won  
                                 Player Won  
                                 Total Games 
                                 Best Score  

       The  computer will keep tract of the amount of games won by  Mr. 
       Pig  and  you the Player, the total games played  and  the  best 
       score achieved.


                                 MAIN OPTIONS

       The  upper  right  portion  of  your  screen  will  display  the 
       following options available to you prior to starting a game:
                                        
                                F1  Start Game       
                                F3  Setup Options    
                                F5  Pig Scoring      
                                F8  High Scores      
                                F10 Quit             
       
       F1  - Pressing Function 1 will start a game  of  Pig.   You  may 
             also  press  the ENTER key in place of the F1 key  if  you 
             prefer.   When  this  is done, the Main  Options  will  be 
             replaced with the Play Options.

             A  Pig  button will be placed to the side of  the  players 
             scoring  box, letting you know whose turn it is.   If  the 
             Pig  button moves to Mr. Pig, he will proceed to play  the 
             game.   When  the button moves to the  players  area,  the 
             computer will wait for your response (See Play Options ).

       F3  - Pressing Function 3  will  bring  up a  screen  displaying 
             some options you may want to change.  When these       are 
             changed,  they  are  made permanent  until  changed  again      
             (See Setup Menu).

       F5  - Pressing Function 5 will bring up a screen describing  the 
             scoring method used by Pig (See Scoring).

       F8  - Pressing Function 8 will bring up the  high  scores   (See 
             High Scores).

       F10 - Pressing Function 10 will quit the game of Pig and  return 
             you to your Dos prompt.

                                    - 2 -








                                 PLAY OPTIONS

       After you have pressed either F1 or ENTER from the Main Options, 
       the  upper  right portion of the screen will display  your  play 
       options.  You should see the following:

                             ENTER  Toss the die
                             END    Pass the die
                             F10    Quit        

       If it's your turn to toss the die, you must respond by  pressing 
       one of the three keys before the computer will know what to do.

       ENTER - Pressing the ENTER key will toss the die.  The die  will 
               move around and finally stop to the right of your  score 
               box.   The number shown on the die will be added to  the 
               points you have showing, indicated by the large numbers.  
               Below  the large point numbers will be your score.   The 
               score will change if you are currently ahead of Mr.  Pig 
               (See  Scoring).  Keep pressing the ENTER key  until  you 
               decide  you  wish to stop and retain the  points  you've 
               accumulated.

       END   - Pressing  the  END key  will indicate  you  are  through 
               tossing  the die.  The points you have accumulated  will 
               not  be lost. The Pig button will move to Mr. Pigs  area 
               and he will continue playing until he decides to pass or 
               he tosses an ace. If you had tossed an ace (Pigged Out), 
               you  would  have lost the points  you  have  accumulated 
               during that round only.  When you Pig Out, you will  not 
               have to press the END key.

       F10   - When you press the Function 10  key, you  are  quitting.  
               When  you  quit before the game has been  won,  you  are 
               surrendering  and Mr. Pig will be credited with the  win 
               but his score will not be entered into the high  scores.  
               He doesn't like quitters and feels he most likely  would         
               have won anyway.  

       Play  will  continue  in this manner until the game  is  won  by 
       either you or Mr. Pig, or until you press the F10 key.


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A  new screen will appear displaying the following  options  and 
       default settings:

                    1   Sound                        On
                    2   Save High Games             Off  
                    3   Sliding Screens              On  
                    4   Snow Removal                Off  
                    5   Dice Speed                   20  
                    6   Winning Game Score          100  
                                                    

                                    - 3 -








                                SETUP OPTIONS

       1 - Use this key to turn your sound either On of Off.

       2 - If you want to save your high scores to disk, be  sure  this 
           option is On.

       3 - While going from one screen  to  another, the  screens  will 
           slide open.  If this causes snow or you would rather not see  
           it happen, you may turn it off with this option.

       4 - Use this option if you are experiencing snow.

       5 - You may wish to change the speed of the movement of the  die 
           when being tossed.  This will change the speed of the  game.  
           The  bottom  of  your  screen  will  display  the  following 
           options:

                    LEFT/RIGHT Arrows      ENTER      F10

           Use  your LEFT/RIGHT Arrow keys to decrease or increase  the 
           speed setting.  The lower the number, the faster the  speed.  
           Press the ENTER key if you want to see the effect the  speed 
           setting  has on the die movement.  When you  are   satisfied 
           with the setting, press the Function 10 key when your done.

       6 - By default, the game is won as soon as either player reaches 
           100  points.  This may be changed to 200 points by  pressing 
           the number 6 option.  Press the number 6 key again to change 
           it back to 100 points.


                                   SCORING

       The  winners  score is determined by the  difference  in  points 
       between  each player. The point difference is multiplied by  10.  
       This figure is your score which is shown below the points you've 
       accumulated towards a game win.

       EXAMPLE:   Mr. Pig wins with 102 points.  Player has 72  points.  
       The difference in points is 30.  Multiplying 30 x 10 would  give 
       Mr. Pig a score of 300.

       The final score would depend on how many times the winner pigged 
       out.   5  points  will be deducted for each ace  that  has  been 
       tossed.   In the example above, if Mr. Pig tossed a total  of  5 
       aces  before winning the game, his final score of 300  would  be 
       deducted by 25 points.  This would give Mr. Pig a final score of 
       275. Your final score will never get below 1 point.

       A  BONUS  of  100 points is awarded if you  have  won  the  game 
       without  pigging  out.  In the example above, if Mr.  Pig  never 
       tossed an ace, he would have a final score of 400.

       During the game, if you are ahead your score will always been  a 
       number greater than 0, otherwise your score will show a 0.

                                    - 4 -








                                 HIGH SCORES

       When  you press the Function 8 key from the Main  Options,  your 
       screen  will display the score of the top 15 Pig players.   This 
       will  show  the  players name, a number of  either  100  or  200 
       indicating  the  game points, the players final score,  and  the 
       date  the  score was achieved.  The bottom line of  your  screen 
       will  display  the amount of times you have beaten Mr.  Pig.  To 
       leave this screen, press the ENTER key.


                              SHAREWARE VERSION

       The  ShareWare  version of Pig does not support  the  saving  of 
       high  scores to disk, the saving of the setup  options,  or  the 
       game  counters.   We  have left a  few  options  available   for 
       registered users.  These minor restrictions will not effect  the 
       game   in anyway.  After you have played Pig for   a  reasonable  
       time,    we  ask  for  your  support  by   sending    in    your 
       registration.    Registered  users  will  receive   the   latest        
       Registered  Version, with full saving features, and  the  latest        
       ShareWare Version.


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







                                    - 5 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                                     Pig
                          Version 1.00 Registration


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


                  Where did you acquire this version of Pig

       ________________________________________________________________




                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546




                                    - 6 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1733

     Volume in drive A has no label
     Directory of A:\

    FILE1733 TXT      3037   3-30-90  10:56a
    GO       BAT        38   1-19-90   9:59p
    GO       TXT       540   3-12-90   8:55p
    PHD                467   1-19-90   9:59p
    PIG      DOC     18935   1-19-90   9:59p
    PIG      EXE     36560   1-19-90   9:59p
    PIG1AS   ARC     39883   1-19-90   9:59p
    PIGREG            1775   1-19-90   9:59p
    PINTRO             745   1-19-90   9:59p
    PPRT               221   1-19-90   9:59p
    PREAD    COM      4200   1-19-90   9:59p
    PREPLY   COM        14   1-19-90   9:59p
    PSTART   BAT       656   1-19-90   9:59p
           13 file(s)     107071 bytes
                           49664 bytes free
