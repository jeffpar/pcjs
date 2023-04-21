---
layout: page
title: "PC-SIG Diskette Library (Disk #1700)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1700/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1700"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GOLF SOLITAIRE"

    Here is yet another outstanding solitaire game from United Innovations
    Plus.  GOLF SOLITAIRE is played with a standard deck of fifty-two cards.
    The layout is made by dealing out five rows of seven cards each,
    overlapping face up.  A total of thirty-five cards form the layout.  One
    more card is dealt below the layout, face up to form your base.  The
    object is to clear away all the layout cards by building onto the base
    card.  Building is done in sequence, in either direction, regardless of
    suit, and if you make a wrong move your computer will certainly keep you
    honest.
    
    This top-notch software package comes with outstanding graphics plus all
    the features that make this a top-notch program.  You can control the
    speed of dealing and elect to view the shuffling of the cards.  You also
    choose the number of holes and which variation of the game you wish to
    play.  The graphics are impressive, clear and easy to follow.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1700.TXT

{% raw %}
```
Disk No: 1700                                                           
Disk Title: Golf Solitaire                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: Golf Solitaire                                           
Author Version: 2.00                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Here is yet another outstanding solitaire game from United Innovations  
Plus.  GOLF SOLITAIRE is played with a standard deck of fifty-two cards.
The layout is made by dealing out five rows of seven cards each,        
overlapping face up.  A total of thirty-five cards form the layout.  One
more card is dealt below the layout, face up to form your base.  The    
object is to clear away all the layout cards by building onto the base  
card.  Building is done in sequence, in either direction, regardless of 
suit, and if you make a wrong move your computer will certainly keep you
honest.                                                                 
                                                                        
This top-notch software package comes with the outstanding graphics plus
all the features that make this a top-notch program.  When being played 
on a CGA system, you have the ability to change the colors of the cards.
You can control the speed of dealing and elect to view the shuffling of 
the cards.  You also choose the number of holes and which variation of  
the game you wish to play.  The graphics are impressive, clear and easy 
to follow.                                                              
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GOLF.DOC

{% raw %}
```






















                                GOLF SOLITAIRE
                                 Version 2.00



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

       PROGRAMS REQUIRED TO RUN GOLF ................................ 1

       GOLF RULES ................................................... 2

       GOLF VARIANTS ................................................ 2

       SCORING ...................................................... 2

       SCORING VARIANTS ............................................. 2

       STARTING GOLF ................................................ 2

       MAIN PLAYING SCREEN .......................................... 3

       MAIN OPTIONS ................................................. 3

           F1/ENTER - Deal .......................................... 3
           F3 - Setup Menu .......................................... 3
           F8 - High Scores ......................................... 3
           F10 - Quit ................................................3

       PLAY OPTIONS ................................................. 3

           LEFT/RIGHT ARROW KEYS - Move Pointer ..................... 4
           UP ARROW KEY - Move Card ................................. 4
           D or DOWN ARROW KEY - Deal Deck Card ..................... 4
           F10 - Quit ............................................... 4

       SETUP MENU ................................................... 4

           Display Shuffling ........................................ 5      
           Sound .................................................... 5
           Save High Games .......................................... 5
           Scoring Method ........................................... 5
           Show Card Movement ....................................... 5
           Sliding Screens .......................................... 5
           Snow Removal ............................................. 5
           Allow Queen's on King's .................................. 5
           Card Movement Speed ...................................... 6
           Type of Game Play ........................................ 6
           Changing Card Colors ..................................... 6

       HIGH SCORES .................................................. 6

       SHAREWARE VERSION ............................................ 7

       OTHER PROGRAMS ............................................... 7

       REGISTRATION FORM ............................................ 8










       
                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Golf    .Exe  -  The main program for Golf Solitaire.
         Golf    .Doc  -  The documentation for Golf Solitaire.
         GStart  .Bat  -  A  batch  file  to  read  the  documentation, 
                          print  the  documentation  and  install  Golf 
                          Solitaire on a Hard Drive.
         GRead   .Com  -  Used by GStart.Bat
         GReply  .Com  -  Used by GStart.Bat
         GIntro        -  Used by GStart.Bat
         GPrt          -  Used by GStart.Bat
         GHd           -  Used by GStart.Bat
         GReg          -  Registration Form
         Golf2AS .Arc  -  Shareware Version of Golf Solitaire



                        PROGRAMS REQUIRED TO RUN GOLF

       The  only file required to play Golf Solitaire is GOLF.EXE.   Be 
       sure  you are logged onto the drive or directory where  GOLF.EXE 
       resides.  This is required if you want to save game statistics.






























                                    - 1 -








                                  GOLF RULES

       The  solitaire  game of Golf is played with a standard  deck  of 
       fifty-two cards.  The layout is made by dealing out five rows of 
       seven  cards each, overlapping face up.  A total of  thirty-five 
       cards form the layout.  One more card is dealt below the layout, 
       face up to form your base.

       The bottom cards of the layout columns are available for play on 
       your  base  card.  The object is to clear away  all  the  layout 
       cards by building onto the base card.

       Building is done in sequence, in either direction, regardless of 
       suit.  The sequence is not circular.  Only a two may be build on 
       an Ace (always treated as low), and only a Queen may be build on 
       a King.

       When  the player has run out of moves, a card is dealt from  the 
       deck and placed face up on the base stack.  Play continues until 
       all  the cards have been removed from the layout and  placed  on 
       the  base stack, or until the remaining cards in the  deck  have 
       been depleted and the player has run out of moves.


                                GOLF VARIANTS

       Some players do not allow a Queen to be played on a King.   When 
       the game is played in this fashion, once a King is placed on the 
       base stack, another card must be dealt from the deck.

       Golf  may be played one hole (game) at a time or any  amount  of 
       holes up to nine.


                                   SCORING

       The  player starts off with a score of thirty-five points.   One 
       point  is  deducted each time a card is placed from  the  layout 
       onto the base.  The best score is zero (a hole in one).  This is 
       known as the Standard scoring method.


                               SCORING VARIANTS

       In  the  Advanced  scoring  method, once  the  layout  has  been 
       depleted,  one point is deducted for each card remaining in  the 
       unused portion of the deck.  Therefore, the best score could  be 
       less than zero.  In addition to this, one point is added to your 
       score each time two cards have been dealt off the deck.


                                STARTING GOLF

       From   your  DOS  prompt, type GOLF  and  press   ENTER.    Your 
       monitor  will display the opening screen.  After a few  seconds, 
       or until you hit a key, the main playing screen will appear.  

                                    - 2 -








                             MAIN PLAYING SCREEN

       This screen is where the game of Golf is played.  The screen has 
       an area set aside for the layout and base card.  The upper right 
       portion  of  the  screen will display your  options  before  and 
       during the play of the game.

       The  lower right portion of the screen will display the  current 
       and past games and high scores.  


                                 MAIN OPTIONS

       Before starting a game of Golf, you have the following options:

                          F1/ENTER    F3   F8   F10


                               F1/ENTER - Deal

       By  pressing either Function 1 or the ENTER key, you will  start 
       dealing  out a hand of Golf.  There is a 10 game limit  for  the 
       Shareware version.

                               F3 - Setup Menu

       Pressing  Function 3 will take you to the setup  menu.   In  the 
       setup  menu, you will be able to change some of the features  of 
       Golf.   You  may  save these changes to disk  so  they  will  be 
       available to you each time you play the game.


                               F8 - High Scores

       Pressing  Function  8 will allow you to view  the   top  fifteen 
       Golf players.  


                                  F10 - Quit

       Pressing  Function 10 will end the game and return you  to  your 
       Dos prompt.


                                 PLAY OPTIONS

       When  you  have pressed F1 or ENTER from the Main  Options,  you 
       will  start a new game of Golf.  The options in the upper  right 
       portion of the screen will change.  The new set of options  will 
       show  you what keys to use during the play of Golf.  During  the 
       game, you will have the following options available:






                                    - 3 -








                     LEFT/RIGHT ARROW KEYS - Move Pointer

       Your  screen will show a double up arrow pointing to a  card  in 
       the  layout.  This pointer may be moved left or right using  the 
       LEFT/RIGHT Arrow keys.  The pointer must be pointing to the card 
       you are about to move to the base stack.


                           UP ARROW KEY - Move Card

       After  you have moved the pointer to the card you wish  to  move 
       to the base stack, press the UP Arrow and if the move is  valid, 
       the card will be place onto the base stack.


                     D or DOWN ARROW KEY - Deal Deck Card

       When you have run out of moves, press either the "D" key or  the 
       DOWN  Arrow  and  another card will be dealt off  the  deck  and 
       placed on the base stack.


                                  F10 - Quit

       Press the Function 10 key when you want to quit playing or  when 
       you  have run out of moves.  You may quit playing at  any  time.  
       After  you have pressed F10, your Main Options will replace  the 
       Play Options.


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

               1     Display Shuffling               On  
               2     Sound                           On  
               3     Save High Games                Off  
               4     Scoring Method            STANDARD
               5     Show Card Movement              On  
               6     Sliding Screens                 On  
               7     Snow Removal                   Off
               8     Allow Queen's on King's        Off  
               9     Card Movement Speed             20
               0     Type of Game Play           1 Hole
               A     Change Card Colors                  

       These  are the default settings that come with  Golf  Solitaire.  
       All   of   these  options  may be changed to suit  your  playing 
       style.  These are saved to disk when you quit playing Golf.   It 
       is  required  that  GOLF.EXE  reside on  the  current  drive  or 
       directory from where you started the game.





                                    - 4 -








                            1 - Display Shuffling      

       You have the option to display the shuffling of the cards or you 
       may  wish  to play a faster game by not viewing  the  shuffling.  
       This may be changed with this option.

                                  2 - Sound

       Use this key to turn your sound either On of Off.

                             3 - Save High Games

       If  you  want to save your high scores to disk,  be  sure   this 
       option is On.  When saving high scores to disk, there will be up 
       to nine files created with the extension .HIS.

                             4 - Scoring Method

       The  default scoring method is set at Standard.  The best  score 
       you  could  achieve  per hole would be a score  of  zero.   When 
       changing  this  to  Advanced, you will lose a  point  for  every 
       second card dealt off the deck and place onto the waste or  base 
       stack.   In addition to this, if you have removed all the  cards 
       from the layout, you will be given an extra point for each  card 
       remaining  in the unused portion of the deck.  In  the  Advanced 
       scoring method, you could have a final score of less than zero.

                            5 - Show Card Movement

       The  cards  are displaying while they are being dealt  to  their 
       respective positions.  If you would rather not see this, you may 
       set this option to Off.

                             6 - Sliding Screens

       While  going  from one screen  to  another, the   screens   will 
       slide open.  If this causes snow or you would rather not see  it 
       happen, you may turn it off with this option.

                               7 - Snow Removal

       Use this option if you are experiencing snow.

                         8 - Allow Queen's on King's

       Queen's  are  not allowed to be played on King's  as  a  default 
       setting.   If  you wish to allow this as a variant on  Golf,  be 
       sure this option is set to On.









                                    - 5 -








                           9 - Card Movement Speed

       If option 5 above is On, your cards will be dealt and  moved 
       around the table at the default speed setting of 20.  This means 
       nothing  until  you actually see the cards in  motion.   If  you 
       press  this  option  9, you will be able  to  change  the  speed 
       setting for the card movement speed.  The bottom of your  screen 
       will display the following options:

                    LEFT/RIGHT Arrows      ENTER      F10

       Use your LEFT/RIGHT Arrow keys to decrease or increase the speed 
       setting.  Press the ENTER key if you want to see the effect  the 
       speed setting has on the card movement.  When you are  satisfied 
       with the setting, press the Function 10 key to quit.

                            0 - Type of Game Play

       Each time you press the number 0, you will change the amount  of 
       holes you will be playing.  The default setting is set to a  one 
       hole game.  You may set this to any amount of holes up to nine.

                            A - Changing Card Colors

       Pressing  the letter "A" will bring you to a screen which   will  
       allow  you  to change the card colors.   The   top  portion   of 
       your  screen  will display a row of  cards, face  down.    Below  
       that  row will be another row, face  up.   The lower portion  of 
       your screen will display the following:

                    Card Back                       Card Face
       
           F1  Border Foreground Color     F4  Border Foreground Color
           F2  Border Background Color     F5  Border Background Color
           F3  Pattern Color               F6  Face Color

                         ALT-D  Restore Default Colors

           Pressing  the Function keys, F1 through F6 will  change  the 
           two  card  rows to the available colors  allowed  with  each 
           function key pressed.  Pressing ALT-D will restore the  card 
           colors to their default colors.  When you are satisfied with 
           the  color  changes,  press the ENTER key and  you will   be 
           returned to the Setup Screen.  These changes are saved  when     
           you  quit  playing Golf.  Be sure Golf.Exe  resides  in  the 
           drive  or  directory  from  where  you  first  started   the     
           game.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key from   the 
       Main Options.  If you have option 3 in the Setup Menu set to On, 
       you  will be able to view the top fifteen players.   The  screen 
       will  display the players name, par (score), hole or game number 
       and date  the score was recorded.

                                    - 6 -








       On  the right side of the players name will be either a "-S"  or 
       "-A".   These  symbols stand for Standard scoring  and  Advanced 
       scoring.

       When  you  view the high scores, you will be  viewing  the  high 
       scores  for  the type of game your are  currently  playing  (See 
       option  0 in the Setup Menu).  You may toggle between  all  high 
       score   screens  by pressing a number key from 1  to   9.   Each 
       screen  will will display the top 15 scores for each  game.   If 
       you press the letter "A", the high scores will display the  best 
       score  from  each game.  Pressing the  ENTER key will  exit  the 
       high scores and return you  to  the game.


                              SHAREWARE VERSION

       The  ShareWare  version  of Golf Solitaire will  not  allow  the 
       saving  of  game statistics, setup options or card  colors.   We 
       believe  in leaving some options available to  Registered  users 
       only.   We ask that you register your copy of Golf Solitaire  if 
       you plan on playing it.


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








                                    - 7 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                                Golf Solitaire
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


             Where did you acquire this version of Golf Solitaire

       ________________________________________________________________


       If you have a VGA card and would like to receive a FREE copy  of 
       our Latest ShareWare VGA Solitaire game, please check here ____.


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546


                                    - 8 -





```
{% endraw %}

## GOLF.DOC

{% raw %}
```






















                                GOLF SOLITAIRE
                                 Version 2.00



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

       PROGRAMS REQUIRED TO RUN GOLF ................................ 1

       GOLF RULES ................................................... 2

       GOLF VARIANTS ................................................ 2

       SCORING ...................................................... 2

       SCORING VARIANTS ............................................. 2

       STARTING GOLF ................................................ 2

       MAIN PLAYING SCREEN .......................................... 3

       MAIN OPTIONS ................................................. 3

           F1/ENTER - Deal .......................................... 3
           F3 - Setup Menu .......................................... 3
           F8 - High Scores ......................................... 3
           F10 - Quit ................................................3

       PLAY OPTIONS ................................................. 3

           LEFT/RIGHT ARROW KEYS - Move Pointer ..................... 4
           UP ARROW KEY - Move Card ................................. 4
           D or DOWN ARROW KEY - Deal Deck Card ..................... 4
           F10 - Quit ............................................... 4

       SETUP MENU ................................................... 4

           Display Shuffling ........................................ 5      
           Sound .................................................... 5
           Save High Games .......................................... 5
           Scoring Method ........................................... 5
           Show Card Movement ....................................... 5
           Sliding Screens .......................................... 5
           Snow Removal ............................................. 5
           Allow Queen's on King's .................................. 5
           Card Movement Speed ...................................... 6
           Type of Game Play ........................................ 6
           Changing Card Colors ..................................... 6

       HIGH SCORES .................................................. 6

       SHAREWARE VERSION ............................................ 7

       OTHER PROGRAMS ............................................... 7

       REGISTRATION FORM ............................................ 8










       
                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Golf    .Exe  -  The main program for Golf Solitaire.
         Golf    .Doc  -  The documentation for Golf Solitaire.
         GStart  .Bat  -  A  batch  file  to  read  the  documentation, 
                          print  the  documentation  and  install  Golf 
                          Solitaire on a Hard Drive.
         GRead   .Com  -  Used by GStart.Bat
         GReply  .Com  -  Used by GStart.Bat
         GIntro        -  Used by GStart.Bat
         GPrt          -  Used by GStart.Bat
         GHd           -  Used by GStart.Bat
         GReg          -  Registration Form
         Golf2AS .Arc  -  Shareware Version of Golf Solitaire



                        PROGRAMS REQUIRED TO RUN GOLF

       The  only file required to play Golf Solitaire is GOLF.EXE.   Be 
       sure  you are logged onto the drive or directory where  GOLF.EXE 
       resides.  This is required if you want to save game statistics.






























                                    - 1 -








                                  GOLF RULES

       The  solitaire  game of Golf is played with a standard  deck  of 
       fifty-two cards.  The layout is made by dealing out five rows of 
       seven  cards each, overlapping face up.  A total of  thirty-five 
       cards form the layout.  One more card is dealt below the layout, 
       face up to form your base.

       The bottom cards of the layout columns are available for play on 
       your  base  card.  The object is to clear away  all  the  layout 
       cards by building onto the base card.

       Building is done in sequence, in either direction, regardless of 
       suit.  The sequence is not circular.  Only a two may be build on 
       an Ace (always treated as low), and only a Queen may be build on 
       a King.

       When  the player has run out of moves, a card is dealt from  the 
       deck and placed face up on the base stack.  Play continues until 
       all  the cards have been removed from the layout and  placed  on 
       the  base stack, or until the remaining cards in the  deck  have 
       been depleted and the player has run out of moves.


                                GOLF VARIANTS

       Some players do not allow a Queen to be played on a King.   When 
       the game is played in this fashion, once a King is placed on the 
       base stack, another card must be dealt from the deck.

       Golf  may be played one hole (game) at a time or any  amount  of 
       holes up to nine.


                                   SCORING

       The  player starts off with a score of thirty-five points.   One 
       point  is  deducted each time a card is placed from  the  layout 
       onto the base.  The best score is zero (a hole in one).  This is 
       known as the Standard scoring method.


                               SCORING VARIANTS

       In  the  Advanced  scoring  method, once  the  layout  has  been 
       depleted,  one point is deducted for each card remaining in  the 
       unused portion of the deck.  Therefore, the best score could  be 
       less than zero.  In addition to this, one point is added to your 
       score each time two cards have been dealt off the deck.


                                STARTING GOLF

       From   your  DOS  prompt, type GOLF  and  press   ENTER.    Your 
       monitor  will display the opening screen.  After a few  seconds, 
       or until you hit a key, the main playing screen will appear.  

                                    - 2 -








                             MAIN PLAYING SCREEN

       This screen is where the game of Golf is played.  The screen has 
       an area set aside for the layout and base card.  The upper right 
       portion  of  the  screen will display your  options  before  and 
       during the play of the game.

       The  lower right portion of the screen will display the  current 
       and past games and high scores.  


                                 MAIN OPTIONS

       Before starting a game of Golf, you have the following options:

                          F1/ENTER    F3   F8   F10


                               F1/ENTER - Deal

       By  pressing either Function 1 or the ENTER key, you will  start 
       dealing  out a hand of Golf.  There is a 10 game limit  for  the 
       Shareware version.

                               F3 - Setup Menu

       Pressing  Function 3 will take you to the setup  menu.   In  the 
       setup  menu, you will be able to change some of the features  of 
       Golf.   You  may  save these changes to disk  so  they  will  be 
       available to you each time you play the game.


                               F8 - High Scores

       Pressing  Function  8 will allow you to view  the   top  fifteen 
       Golf players.  


                                  F10 - Quit

       Pressing  Function 10 will end the game and return you  to  your 
       Dos prompt.


                                 PLAY OPTIONS

       When  you  have pressed F1 or ENTER from the Main  Options,  you 
       will  start a new game of Golf.  The options in the upper  right 
       portion of the screen will change.  The new set of options  will 
       show  you what keys to use during the play of Golf.  During  the 
       game, you will have the following options available:






                                    - 3 -








                     LEFT/RIGHT ARROW KEYS - Move Pointer

       Your  screen will show a double up arrow pointing to a  card  in 
       the  layout.  This pointer may be moved left or right using  the 
       LEFT/RIGHT Arrow keys.  The pointer must be pointing to the card 
       you are about to move to the base stack.


                           UP ARROW KEY - Move Card

       After  you have moved the pointer to the card you wish  to  move 
       to the base stack, press the UP Arrow and if the move is  valid, 
       the card will be place onto the base stack.


                     D or DOWN ARROW KEY - Deal Deck Card

       When you have run out of moves, press either the "D" key or  the 
       DOWN  Arrow  and  another card will be dealt off  the  deck  and 
       placed on the base stack.


                                  F10 - Quit

       Press the Function 10 key when you want to quit playing or  when 
       you  have run out of moves.  You may quit playing at  any  time.  
       After  you have pressed F10, your Main Options will replace  the 
       Play Options.


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

               1     Display Shuffling               On  
               2     Sound                           On  
               3     Save High Games                Off  
               4     Scoring Method            STANDARD
               5     Show Card Movement              On  
               6     Sliding Screens                 On  
               7     Snow Removal                   Off
               8     Allow Queen's on King's        Off  
               9     Card Movement Speed             20
               0     Type of Game Play           1 Hole
               A     Change Card Colors                  

       These  are the default settings that come with  Golf  Solitaire.  
       All   of   these  options  may be changed to suit  your  playing 
       style.  These are saved to disk when you quit playing Golf.   It 
       is  required  that  GOLF.EXE  reside on  the  current  drive  or 
       directory from where you started the game.





                                    - 4 -








                            1 - Display Shuffling      

       You have the option to display the shuffling of the cards or you 
       may  wish  to play a faster game by not viewing  the  shuffling.  
       This may be changed with this option.

                                  2 - Sound

       Use this key to turn your sound either On of Off.

                             3 - Save High Games

       If  you  want to save your high scores to disk,  be  sure   this 
       option is On.  When saving high scores to disk, there will be up 
       to nine files created with the extension .HIS.

                             4 - Scoring Method

       The  default scoring method is set at Standard.  The best  score 
       you  could  achieve  per hole would be a score  of  zero.   When 
       changing  this  to  Advanced, you will lose a  point  for  every 
       second card dealt off the deck and place onto the waste or  base 
       stack.   In addition to this, if you have removed all the  cards 
       from the layout, you will be given an extra point for each  card 
       remaining  in the unused portion of the deck.  In  the  Advanced 
       scoring method, you could have a final score of less than zero.

                            5 - Show Card Movement

       The  cards  are displaying while they are being dealt  to  their 
       respective positions.  If you would rather not see this, you may 
       set this option to Off.

                             6 - Sliding Screens

       While  going  from one screen  to  another, the   screens   will 
       slide open.  If this causes snow or you would rather not see  it 
       happen, you may turn it off with this option.

                               7 - Snow Removal

       Use this option if you are experiencing snow.

                         8 - Allow Queen's on King's

       Queen's  are  not allowed to be played on King's  as  a  default 
       setting.   If  you wish to allow this as a variant on  Golf,  be 
       sure this option is set to On.









                                    - 5 -








                           9 - Card Movement Speed

       If option 5 above is On, your cards will be dealt and  moved 
       around the table at the default speed setting of 20.  This means 
       nothing  until  you actually see the cards in  motion.   If  you 
       press  this  option  9, you will be able  to  change  the  speed 
       setting for the card movement speed.  The bottom of your  screen 
       will display the following options:

                    LEFT/RIGHT Arrows      ENTER      F10

       Use your LEFT/RIGHT Arrow keys to decrease or increase the speed 
       setting.  Press the ENTER key if you want to see the effect  the 
       speed setting has on the card movement.  When you are  satisfied 
       with the setting, press the Function 10 key to quit.

                            0 - Type of Game Play

       Each time you press the number 0, you will change the amount  of 
       holes you will be playing.  The default setting is set to a  one 
       hole game.  You may set this to any amount of holes up to nine.

                            A - Changing Card Colors

       Pressing  the letter "A" will bring you to a screen which   will  
       allow  you  to change the card colors.   The   top  portion   of 
       your  screen  will display a row of  cards, face  down.    Below  
       that  row will be another row, face  up.   The lower portion  of 
       your screen will display the following:

                    Card Back                       Card Face
       
           F1  Border Foreground Color     F4  Border Foreground Color
           F2  Border Background Color     F5  Border Background Color
           F3  Pattern Color               F6  Face Color

                         ALT-D  Restore Default Colors

           Pressing  the Function keys, F1 through F6 will  change  the 
           two  card  rows to the available colors  allowed  with  each 
           function key pressed.  Pressing ALT-D will restore the  card 
           colors to their default colors.  When you are satisfied with 
           the  color  changes,  press the ENTER key and  you will   be 
           returned to the Setup Screen.  These changes are saved  when     
           you  quit  playing Golf.  Be sure Golf.Exe  resides  in  the 
           drive  or  directory  from  where  you  first  started   the     
           game.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key from   the 
       Main Options.  If you have option 3 in the Setup Menu set to On, 
       you  will be able to view the top fifteen players.   The  screen 
       will  display the players name, par (score), hole or game number 
       and date  the score was recorded.

                                    - 6 -








       On  the right side of the players name will be either a "-S"  or 
       "-A".   These  symbols stand for Standard scoring  and  Advanced 
       scoring.

       When  you  view the high scores, you will be  viewing  the  high 
       scores  for  the type of game your are  currently  playing  (See 
       option  0 in the Setup Menu).  You may toggle between  all  high 
       score   screens  by pressing a number key from 1  to   9.   Each 
       screen  will will display the top 15 scores for each  game.   If 
       you press the letter "A", the high scores will display the  best 
       score  from  each game.  Pressing the  ENTER key will  exit  the 
       high scores and return you  to  the game.


                              SHAREWARE VERSION

       The  ShareWare  version  of Golf Solitaire will  not  allow  the 
       saving  of  game statistics, setup options or card  colors.   We 
       believe  in leaving some options available to  Registered  users 
       only.   We ask that you register your copy of Golf Solitaire  if 
       you plan on playing it.


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








                                    - 7 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                                Golf Solitaire
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


             Where did you acquire this version of Golf Solitaire

       ________________________________________________________________


       If you have a VGA card and would like to receive a FREE copy  of 
       our Latest ShareWare VGA Solitaire game, please check here ____.


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546


                                    - 8 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1700

     Volume in drive A has no label
     Directory of A:\

    FILE1700 TXT      2517  12-11-89   5:37p
    GHD                473   7-08-89   8:54a
    GINTRO             800   7-08-89   8:54a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80  12:51a
    GOLF     DOC     22528   7-08-89   8:54a
    GOLF     EXE     41904   7-08-89   8:54a
    GOLF2AS  ARC     46124   7-08-89   8:54a
    GPRT               221   7-08-89   8:54a
    GREAD    COM      4200   7-08-89   8:54a
    GREG              1932   7-08-89   8:54a
    GREPLY   COM        14   7-08-89   8:54a
    GSTART   BAT       653   7-08-89   8:54a
           13 file(s)     121944 bytes
                           34816 bytes free
