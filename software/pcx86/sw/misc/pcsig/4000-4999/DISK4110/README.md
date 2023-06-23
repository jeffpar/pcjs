---
layout: page
title: "PC-SIG Diskette Library (Disk #4110)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4110/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4110"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CQ.DOC

{% raw %}
```
       




















                                 COLOR QUEST
                                 Version 1.OO


                             VGA & Mouse Required
                                 (64Ox48Ox16)       

                              (C) Copyright 1991

                                      by

                               Raymond M. Buti

                             All Rights Reserved



                           United Innovations Plus
                            Post Office Box 21O81
                          Castro Valley, Ca.  94546


                                (51O) 886-9O36






















       



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


       TRADEMARKS & CREDITS ......................................... 1

       PROGRAMS ON DISK ............................................. 1

       PROGRAM REQUIREMENTS ......................................... 1

       COLOR QUEST .................................................. 2

       STARTING COLOR QUEST ......................................... 2

       TANDY 1OOO ................................................... 2

       MAIN PLAYING SCREEN .......................................... 2

       LAYOUT ....................................................... 2

       HINT DISPLAY ................................................. 3

       HINTS ........................................................ 3

       COLOR SELECTION .............................................. 3

       SCORE ........................................................ 3

       MENU AREA .................................................... 3

       MAIN MENU .................................................... 4

       MAIN OPTIONS ................................................. 4

          Play Color Quest .......................................... 4

          Clue ...................................................... 4

          Solve ..................................................... 5

          Setup Menu ................................................ 5

          High Scores ............................................... 5

          Quit ...................................................... 5

       SETUP MENU/OPTIONS ........................................... 5

          Sound ..................................................... 6

          Speed ..................................................... 6

          Colors Used ............................................... 6

          Balls Used ................................................ 6

          Accept .................................................... 6

                                    - i -








       HIGH SCORES/SCORING .......................................... 6

          Clear Scores .............................................. 7

          Main Menu ................................................. 7

       SCORING ...................................................... 7

          Score ..................................................... 7

          Bonus Points .............................................. 7

       OTHER GAMES .................................................. 8

       REGISTRATION FORM ............................................ 9


       







































                                    - ii -








                             TRADEMARKS & CREDITS

       "Microsoft" is a trademark of Microsoft Corporation

       Portions (C) Copyright Genus Microprogramming, Inc. 1988-91


                               PROGRAMS ON DISK

       The  following  list  of  file  names  should  appear  on   your 
       distribution disk.

           File Name            File Description
        
         CQ      .Exe - The main program for Color Quest.
         CInstall.Exe - Installation file for Color Quest.
         CQ01    .Inf - Graphics file required by CQ.Exe.
         CQ02    .Inf - Graphics file required by CQ.Exe.
         CQ03    .Inf - Graphics file required by CQ.Exe.
         CQ      .Doc - The documentation for Color Quest.
         CQStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Color Quest on 
                        a Hard Drive.
         CQRead  .Com - Used by CQStart.Bat
         CQReply .Com - Used by CQStart.Bat
         CQIntro      - Used by CQStart.Bat
         CQPrt        - Used by CQStart.Bat
         CQHd         - Used by CQStart.Bat
         CQReg        - Color Quest Registration Form
         T1KVGA  .Com - Memory resident file for Tandy 1OOO users.


                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       35OK    of  free  Ram,   VGA  graphics  adapter,    a  Microsoft 
       compatible  mouse,  hard  disk  or  1 floppy  disk   drive.  The    
       files    required    to    play    Color   Quest   are   CQ.EXE, 
       CQ01.INF,  CQ02.INF,   CQ03.INF.  Color Quest MUST  be  able  to 
       locate  the   three .INF  files.  Typing  CINSTALL  or   CQSTART 
       will  allow  you   to install  Color Quest  on your  hard   disk 
       or  to a second  floppy disk.  A  hard  disk  is recommended but 
       not required.   














                                    - 1 -








                                 COLOR QUEST

       Color Quest is a mind game which uses colored balls.  The object 
       is to correctly guess a hidden sequence of colors in 15 or fewer 
       guesses.   The player selects the amount of balls and colors  to 
       be used.  This entails using from 4 to 9 colors and from 3 to  7 
       balls.  Each time a guess is made at the sequence, you are shown 
       a  hint that displays your progress in solving the  Color  Quest 
       sequence.   Hints  are  given when a correct  color  is  in  the 
       correct  position, and when a correct color is selected  but  in 
       the  wrong position.  The hints do not tell you which  color  or 
       position is correct.  Clues can be given but they will cost  you 
       valuable  points.   NOTE: The ShareWare Version of  Color  Quest 
       does not support all the Registered Version options.


                             STARTING COLOR QUEST

       From   your  DOS prompt, type CQ and press the ENTER  key.    In 
       order   for Color Quest to  run, you must be  logged  onto   the 
       directory where CQ.EXE, CQ01.INF, Cq02.INF and CQ03.INF reside.


                                  TANDY 1OOO

       NOTE:   If your computer is a Tandy 1OOO, the file  "T1KVGA.COM" 
       may    be required to be in memory before playing  Color  Quest.   
       If  you  cannot  play this game, install the "T1KVGA.COM"   file   
       in  memory  first.  From your DOS prompt, type T1KVGA and  press  
       the ENTER key.  You may then run Color Quest as described above.

       After  typing  CQ and pressing the ENTER key,  a   screen   will 
       appear  displaying the copyright notice.  While this  screen  is 
       being displayed, Color Quest will load in the required files  it 
       needs  to  continue running.  You will then hear a  beep  and  a 
       message  will  appear asking you to press either  mouse  button.  
       Pressing  either  the left or right mouse button  will  continue 
       with the game.


                             MAIN PLAYING SCREEN

       The  next  screen you see will be the Main Playing  Screen.   It 
       consists of a Layout, Hint Display, Color Selection, Score,  and 
       Menu area.


                                    LAYOUT

       The  Layout is located on the left side of your screen. This  is 
       where the colored balls are placed each time a guess is made  at 
       the  hidden color sequence.  Each guess is placed on the  Layout 
       starting on the bottom of the screen (line 1), and continuing up 
       the screen until you reach the top (line 15), or until you  quit 
       or correctly guess the hidden color sequence.


                                    - 2 -








                                 HINT DISPLAY

       The  Hint  Display is located on the right side of  the  Layout.  
       Hints  are  shown  each  time a guess  is  made  at  the  hidden 
       sequence.  As each guess is placed on the Layout, a hint will be 
       displayed  on  the  same  line as the  Layout.   Hints  will  be 
       displayed by small red and white diamonds.


                                    HINTS

       A  red  diamond indicates you have a correct color placed  in  a 
       correct position.  It will not tell you which color or  position 
       is correct.

       A white diamond indicates you have a correct color in the  wrong 
       position.   It  will not tell you which color is  in  the  wrong 
       position.


                               COLOR SELECTION

       The Color Selection area is located on the right bottom  portion 
       of your screen.  This is a rectangular box containing three rows 
       of  boxes.   The  bottom row has nine boxes  which  contain  the 
       colored balls.  This is where you will select a ball when trying 
       to guess the hidden color sequence.

       The next two rows above the selection boxes contain seven  empty 
       boxes.   The  middle row of boxes has the word Ok  on  the  left 
       side.   As  you select colors, you place them in  this  Ok  area 
       until all the empty boxes are filled with one or more colors.

       The  top row of boxes also contain seven empty boxes.  The  left 
       side of the row displays the word Clue, the right side  displays 
       the  word  Solve.  This is the area that will  show  the  hidden 
       color sequence when the game is won, lost or you quit.

       Between  the two top rows of boxes are the words  Bonus  Points.  
       This will display the amount of Bonus Points you will get if you 
       solve the hidden color sequence.


                                    SCORE

       The Score area is located above the Color Selection area.   This 
       will show you the points you will receive if you correctly guess 
       the  hidden  color sequence.  This does not  include  any  Bonus 
       Points.   Bonus Points are added to your score if you solve  the 
       hidden color sequence.

                                  MENU AREA

       The  Menu Area is located on the top right side of your  screen.  
       This  area  will  display the Main Menu, Setup  Menu,  and  High 
       Scores.

                                    - 3 -








                                  MAIN MENU

       Before starting each new game of Color Quest, the Main Menu will  
       display  the following options:

                               Play Color Quest
                     Setup Menu (Registered Version Only)
                                 High Scores
                                     Quit


                                 MAIN OPTIONS

       To select one of the options, move your mouse cursor over one of 
       the choices and press either the left or right mouse button.

                               Play Color Quest

       Selecting  the Play Color Quest option will start a new game  of 
       Color  Quest.   You must now attempt to solve the  hidden  color 
       sequence.  Move your mouse cursor over one of the colored  balls 
       in the Color Selection area and press the left mouse button.   A 
       marker  will be placed above the ball you just  selected.   Move 
       your mouse cursor in the middle row of the Color Selection  area 
       and press the left mouse button to place the marked ball in  any 
       of the boxes.

       You may place the marked ball in any box which will replace  any 
       previously  placed ball.  Any combination or amount  of  colored 
       balls  may  be placed in that area.  When  you  have  completely 
       filled  that row with colored balls, and you are satisfied  with 
       your  selection,  you may move your guess to the  Layout.   Move 
       your  mouse  cursor  to the word Ok and  press  the  left  mouse 
       button.   Your guess will be moved to the Layout.  You  continue 
       in this manner until you solve the hidden color sequence,  reach 
       the maximum allowable tries of 15, or quit.

       To quit playing Color Quest, press the right mouse button.   You 
       will  be asked to verify if you really wish to  quit.   Pressing 
       the  left mouse button will abort quitting; pressing  the  right 
       mouse  button will quit the current game and bring you  back  to 
       the  Main  Menu.  Quitting in this manner will  not  reveal  the 
       hidden color sequence.


                                     Clue

       If  you have trouble trying to solve the hidden color  sequence, 
       move  your mouse cursor to the word Clue in the Color  Selection 
       area and press the left mouse button.  When a Clue is  selected, 
       you  will  be  shown  the correct  position  and  color  in  the 
       Clue/Solve area.  Doing this will cost you precious points  (see 
       Scoring).




                                    - 4 -








                                    Solve

       If  you wish to see the hidden color sequence before  you  solve 
       it,  move  your mouse cursor to the Solve option  in  the  Color 
       Selection  area  and  press the left mouse  button.   This  will 
       display  the entire hidden color sequence.  This is the same  as 
       pressing  the right mouse button to quit during a  game,  except 
       you will be shown the hidden color sequence.


                     Setup Menu (Registered Version Only)

       Selecting  the Setup option will remove the Main Menu and  bring 
       up  the  Setup Menu.  This will allow you to toggle  the  sound, 
       select either a faster or slower game, and select the amount  of 
       colors and balls (See Setup Menu/Options).


                                 High Scores

       Selecting  the High Scores option will remove the Main Menu  and  
       bring  up   the  High Score Menu.  This will allow you  to  view  
       the    top   scores   achieved  in   Color   Quest   (See   High 
       Scores/Scoring).

                                     Quit

       Selecting  the Quit option will return you to your  DOS  prompt.  
       You   will  be  asked to verify if you  really  want  to   quit.  
       Pressing  the left mouse button will resume the  game;  pressing 
       the right button will quit and return you to your DOS prompt.


                 SETUP MENU/OPTIONS (Registered Version Only)

       The Setup Menu is reached by selecting Setup Menu from the  Main 
       Menu.  The Setup Menu will display the following:

                              Sound          On
                              Speed        Slow
                              Colors Used     9
                              Balls Used      7
                              Accept

       You   will  have four options available to  you:  Sound,  Speed, 
       Color Used, and Balls Used.  The default settings are  displayed 
       to the right of each of the options shown above.


                                   Options

       Move your mouse cursor over one of the options, and press either 
       mouse button.




                                    - 5 -








                                    Sound

       Selecting the Sound option will allow you to toggle the sound On 
       or Off.

                                    Speed

       Selecting  the Speed option will allow you to toggle  the  speed 
       from Slow to Fast.

                                 Colors Used

       Selecting  this  option  will allow you to select from  4  to  9 
       colored balls.  Continue pressing either mouse button,  stopping 
       on the amount of colors you wish to use.

                                  Balls Used

       Selecting  this  option  will allow you to select from  3  to  7 
       balls.   Continue pressing either mouse button, stopping on  the 
       amount of balls you wish to use.

                                    Accept

       Selecting Accept will retain all the option settings for  future 
       games  and return you to the Main Menu.  When you  quit  playing 
       Color Quest, these settings will be saved for the next  time you 
       play (Registered Version Only).


                             HIGH SCORES/SCORING

       The  High Scores  Menu is reached by selecting High Scores  from  
       the Main Menu.  The High Scores Menu will display the following: 

                       #        Name       Game   Score

                       1  ...............  ....  .......
                       2  ...............  ....  .......
                       3  ...............  ....  .......
                       4  ...............  ....  .......
                       5  ...............  ....  .......
                       6  ...............  ....  .......

                            Clear Scores     Main Menu

       You  will have the option to clear the high scores or return  to 
       the Main Menu.

       The  High  Scores screen displays the top 6 scores  achieved  at 
       Color  Quest.  The player's name is entered at the end  of  each 
       game  so long as it qualifies for the High Scores list.  If  you 
       are asked for your name, enter up to 15 characters and press the 
       ENTER  key.  Regardless of whether you enter your name  or  not, 
       you  must press the ENTER key.  If you press the  ENTER  without 
       entering anything, your score will not be saved.

                                    - 6 -








                                     Game

       The  Game column will display the type of game you  played  when 
       your score was entered.  The examples below explain how to  read 
       the Game column:

                      Game             Explanation
            
                      4C3B         4 Color, 3 Ball Game    
                      8C6B         8 Color, 6 Ball Game   


                                 Clear Scores

       You  can reset the scores to zero by selecting the Clear  Scores 
       option.  If  you select the Clear option by mistake, select   it    
       again   and   it  will  restore  the  previous  scores.    NOTE:  
       Restoring   the  previous scores can only be  done  following  a 
       reset to zero.

                                  Main Menu

       Selecting  Main Menu will remove the High Score Menu and  return 
       you to  the Main Menu.  
  
      
                                   SCORING

       The  bonus  points and score for Color Quest are  based  on  the 
       amount of colors, balls, clues, and guesses.

                                    Score

       The  Score area of the screen will display the amount of  points 
       you will receive if a correct guess is made at the hidden  color 
       sequence.  The score is determined in the following manner:

         (Colors Used x 2 + BallsUsed) x 1OOO - Clues Given - Guesses

       Each Clue will cost you 2OOO points.
       Each incorrect guess will cost you 3OO points.


                                 Bonus Points

       The  Bonus  Points will display the bonus amount of  points  you 
       will  receive  if a correct guess is made at  the  hidden  color 
       sequence.   The  Bonus Points are determined  in  the  following 
       manner:

         (Colors Used x 2 + BallsUsed) x 4OO - (Layout Line # x 3OO)






                                    - 7 -








                                 OTHER GAMES

                          Lowball Poker Professional
                           Draw Poker Professional
                            Baccarat Professional
                                Roulette (CGA)
                            Blackjack Connoisseur
                                 Chuck-a-Luck 
                                 Holdem Poker
                                 Knock Poker
                                   Red Dog
                             Sic Bo (EGA & Mouse)
                         Craps Complete (EGA & Mouse)     
                               Poker Slot (EGA)
                           Video Keno (EGA & Mouse)
                            Roulette (EGA & Mouse)
                              Pyramid Solitaire
                               Poker Solitaire
                              Osmosis Solitaire 
                             Accordion Solitaire
                            Baker  Solitaire (VGA)
                             Peg Solitaire (VGA)  
                                Golf Solitaire
                        Thinking Man's Solitaire (EGA)
                             SuJu (Super Jumbles)
                              Jigsaw Mania (VGA)
                JMSC Jigsaw Mania Screen Capture Utility (VGA) 
                                     Pig
                                   Fifteen
                       Klondike Solitaire (EGA & Mouse)         
                        Clock Solitaire (EGA & Mouse)
                           Ultra Slot (VGA & Mouse)
                           Mind Warp (VGA & Mouse)
                          Color Quest(SVGA & Mouse)
                       Pyramid Solitaire II (EGA & Mouse)






















                                    - 8 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                                 COLOR QUEST
                          Version 1.OO Registration 

                              Please specify disk size

       Registration Fee  VGA   ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______
       Registration Fee SVGA   ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______  

                                   Foreign orders add   $ 5.OO  _______
         (Foreign orders on International Money Orders)


                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


              Where did you acquire this version of Color Quest

       ________________________________________________________________


       The Super Vga version of Color Quest in 256 colors will work  on 
       the following graphics adapters:

                      Paradise, Orchid, Video 7, ATI and
                     graphics adapters using Tseng chips.


        For our records, please indicate your systems display adapter.

       ___MONO  ___CGA  ___EGA  ___VGA  ___SVGA    Mouse ___Yes   ___No



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21O81
                                        Castro Valley, CA 94546





                                    - 9 -





```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
       Program Title:  Color Quest (16 Color Version)

       Intended User:  Game players.

       ShareWare Limitations: No limitations on the ShareWare  version.  
       The Registered version offers more functions and options. 

       Starting the program:  From DOS type CQ and press ENTER

       Registration Fee :  $15.00

       Services  with  Registration:  Full support,  latest  registered
       disk, notification of major upgrades.

                               PROGRAMS ON DISK

       The  following  list  of  file  names  should  appear  on   your 
       distribution disk.

           File Name            File Description
        
         CQ      .Exe - The main program for Color Quest.
         CInstall.Exe - Installation file for Color Quest.
         CQ01    .Inf - Graphics file required by CQ.Exe.
         CQ02    .Inf - Graphics file required by CQ.Exe.
         CQ03    .Inf - Graphics file required by CQ.Exe.
         CQ      .Doc - The documentation for Color Quest.
         CQStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Color Quest on 
                        a Hard Drive.
         CQRead  .Com - Used by CQStart.Bat
         CQReply .Com - Used by CQStart.Bat
         CQIntro      - Used by CQStart.Bat
         CQPrt        - Used by CQStart.Bat
         CQHd         - Used by CQStart.Bat
         CQReg        - Color Quest Registration Form
         T1KVGA  .Com - Memory resident file for Tandy 1OOO users.

                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       35OK   of free Ram, VGA graphics adapter, a Microsoft compatible 
       mouse,  hard  disk   or   1 floppy  disk   drive.  The     files   
       required    to    play   Color  Quest   are   CQ.EXE,  CQ01.INF,  
       CQ02.INF,    CQ03.INF.   Color Quest MUST  be  able   to  locate  
       the    three .INF  files.  Typing  CINSTALL  or    CQSTART  will  
       allow   you   to install  Color Quest  on your  hard    disk  or  
       to a second  floppy disk.  A  hard  disk  is recommended but not 
       required.   

                                 COLOR QUEST

       Color Quest is a mind game which uses colored balls.  The object 
       is to correctly guess a hidden sequence of colors in 15 or fewer 
       guesses.   The player selects the amount of balls and colors  to 
       be used.  This entails using from 4 to 9 colors and from 3 to  7 
       balls.  Each time a guess is made at the sequence, you are shown 
       a  hint that displays your progress in solving the  Color  Quest 
       sequence.   Hints  are  given when a correct  color  is  in  the 
       correct  position, and when a correct color is selected  but  in 
       the  wrong position.  The hints do not tell you which  color  or 
       position is correct.  Clues can be given but they will cost  you 
       valuable  points.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4110

     Volume in drive A has no label
     Directory of A:\

    CINSTALL EXE      9312  11-05-91   5:37p
    CQ       DOC     26146  11-05-91   5:37p
    CQ       EXE     97488  11-05-91   5:37p
    CQ01     INF     80192  11-05-91   5:37p
    CQ02     INF     62951  11-05-91   5:37p
    CQ03     INF     22527  11-05-91   5:37p
    CQHD               205  11-05-91   5:37p
    CQINTRO            776  11-05-91   5:37p
    CQPRT              217  11-05-91   5:37p
    CQREAD   COM      9853  11-05-91   5:37p
    CQREG             1800  11-05-91   5:37p
    CQREPLY  COM        14  11-05-91   5:37p
    CQSTART  BAT       654  11-05-91   5:37p
    T1KVGA   COM        16  11-05-91   5:37p
    PCSIG    TXT      3058  11-11-91   9:44a
    GO       BAT        10  10-01-93   9:06a
           16 file(s)     315219 bytes
                           37888 bytes free
