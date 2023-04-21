---
layout: page
title: "PC-SIG Diskette Library (Disk #1701)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1701/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1701"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PYRAMID SOLITAIRE"

    The old game of pyramid solitaire is even better when your computer
    deals and keeps score -- you just enjoy the game.  Twenty-eight cards
    are dealt in the form of a pyramid.  The pyramid has seven rows of
    cards.  This is composed of successive rows of one to seven cards.  Each
    card is overlapped by two cards of the row below. The last row, which
    contains seven cards, are turned face up.  The object is to remove all
    cards from the pyramid and from the remainder of the deck by simple
    addition using any two cards available for play.  The two cards must add
    up to 13 points.
    
    This top-notch software package comes with all the extras.  There is
    mouse support during the playing of the game.  It allows dealing of the
    cards either face up or face down.  There are two modes of play,
    multiple redeals or a single deal.  It allows you to replay the
    previously dealt hand.  You can even control the speed of dealing and
    elect to view the shuffling of the cards just to keep the computer
    honest.  Graphics are impressive, clear, and easy to follow.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1701.TXT

{% raw %}
```
Disk No: 1701                                                           
Disk Title: Pyramid Solitaire                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Pyramid Solitaire                                        
Author Version: 3.02                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
The old game of pyramid solitaire is even better when your computer     
deals and keeps score--you just enjoy the game.  Twenty-eight cards are 
dealt in the form of a pyramid.  The pyramid has seven rows of cards.   
This is composed of successive rows of one to seven cards.  Each card is
overlapped by two cards of the row below.  The last row which contains  
seven cards are turned face up.  The object is to remove all cards from 
the pyramid and from the remainder of the deck by simple addition using 
any two cards available for play.  The two cards must add up to 13      
points.                                                                 
                                                                        
This top-notch software package comes with all the extras.  When being  
played on a CGA system, you have the ability to change the colors of the
cards.  There is mouse support during the playing of the game.  It      
allows dealing of the cards either face up or face down.  There are two 
modes of play, multiple redeals or a single deal.  It allows you to     
replay the previously dealt hand.  You can even control the speed of    
dealing and elect to view the shuffling of the cards just to keep the   
computer honest. Graphics are impressive, clear and easy to follow.     
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PYRAMID.DOC

{% raw %}
```






























                       Pyramid Solitaire  Version 3.02
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


       PROGRAMS ON DISK ............................................. 1

       REQUIRED PROGRAMS ............................................ 1

       STARTING THE GAME ............................................ 2

       LAYOUT ....................................................... 2

       OBJECT ....................................................... 2

       VALUE OF CARDS ............................................... 2

       STARTING SCREEN .............................................. 3

       MAIN PLAYING SCREEN .......................................... 3

       MAIN SCREEN OPTIONS .......................................... 4

       SETUP SCREEN ................................................. 4

       SETUP OPTIONS ................................................ 5

       STATISTICS ................................................... 6

       HIGH SCORES .................................................. 6

       GAME SCORING ................................................. 7

       MOUSE SUPPORT ................................................ 7

       PLAYING OPTIONS .............................................. 7

       SPECIAL KEYS ................................................. 8

       CARD POINTER ................................................. 8

       AVERAGES AND TOTALS .......................................... 8

       SHAREWARE VERSION ............................................ 8

       REGISTRATION FORM ............................................ 9






















                               PROGRAMS ON DISK

           File Name            File Description
        
         Pyramid .Exe   -  Main program for Pyramid Solitaire.
         Pyramid .Doc   -  Documentation for Pyramid Solitaire.
         PyStart .Bat   -  A batch file to  read  the  documentation, 
                           print the documentation and install Pyramid  
                           Solitaire on a Hard Drive.
         PyRead  .Com   -  Used by PyStart.Bat.
         PyReply .Com   -  Used by PyStart.Bat.
         PyIntro        -  Used by PyStart.Bat.
         PyPrt          -  Used by PyStart.Bat.
         PyHd           -  Used by PyStart.Bat.
         PyReg          -  Registration Form
         Pyr302S .Arc   -  Shareware Version of Pyramid Solitaire



                              REQUIRED PROGRAMS

       The   only  program  required  to  run  Pyramid   Solitaire   is 
       Pyramid.Exe.   From  your  Dos prompt, type  PYRAMID  and  press 
       ENTER.

































                                    - 1 -








                              STARTING THE GAME

                This is one of the most popular members of the
                  simple addition family of solitaire games.

       Before  you  play this game, make a backup copy  of  Pyramid  by 
       using one the COPY commands found in your DOS manual.  Use  your 
       backup copy to play Pyramid and NOT your original source disk.

       After  you  have booted up your system, place your new  copy  of 
       Pyramid  in Drive A. Type "Pyramid", then press the  ENTER  key.  
       High scores are saved to disk and therefore require the disk  to 
       remain in your drive.

       Hard  Disk  users  are required to be  in  the  directory  where 
       Pyramid has been installed.



                                    LAYOUT

       Twenty-eight  cards  are dealt in the form of  a  pyramid.   The 
       pyramid has seven rows of cards.  This is composed of successive 
       rows  of  one to seven cards.  Each card is  overlapped  by  two 
       cards of the row below.  The last row which contains seven cards 
       are  turned  face up.  All the other cards of  the  pyramid  are 
       turned  face down.  The remainder of the deck is placed  off  to 
       the  right of the pyramid.  The top card of the deck  is  turned 
       face up and place in a stock pile.  This card is also  available 
       for play.

       A  card in the pyramid is available for play if not  covered  by 
       any other.  The play of two adjacent cards releases one card  in 
       the previous row.


                                    OBJECT

       Remove all cards from the pyramid and from the remainder of  the 
       deck by simple addition using any two cards available for  play.  
       The  two cards must add up to 13 points.  The only exception  to 
       this rule is when a King is exposed.  The King is worth thirteen 
       points  and  therefore  may be removed without the  need  for  a 
       second card.

      
                                VALUE OF CARDS

                  CARDS                           VALUE

                  Ace's                              1
                  2's through 10's              Face value
                  Jack's                            11
                  Queen's                           12
                  King's                            13


                                    - 2 -








                               STARTING SCREEN

       Once you have started Pyramid, a screen will come up showing the 
       name  of the game, version number and copyright  notice.   After 
       a few seconds, the main playing screen will appear and you'll be 
       ready to play Pyramid.  If you get tired of looking at the first 
       screen, press any key and you will bring up the playing screen.


                             MAIN PLAYING SCREEN

       The  main part of this screen will be blank at first.   This  is 
       the right portion which will eventually be filled with the cards 
       when  dealt.   Starting  with the upper  right  portion  of  the 
       screen,  you  will  see the words  "Standard  Game"  (See  Setup 
       Options  #5 for Standard and Relaxed Games).  This is  the  best 
       and hardest way to play the game of Pyramid.

       You will also see a current game counter, total game counter, an 
       average score for "Standard Games" and one for "Relaxed  Games".  
       The current game counter will keep track of the amount of  games 
       currently  played.  Each time you start the game from  DOS,  the 
       current game counter will start at zero.

       The  total game counter will show you how many total games  have 
       been  played.  This takes into account both the  Standard  Games 
       and Relaxed Games.

       The average scores will change with each game played.  In  order 
       for  Pyramid  to  keep track of this, you must be  in  the  same 
       directory or drive as the Pyramid.Exe file resides.

       Below  those statistics is part of the playing area.  The  right 
       portion  of your screen will display the card count and  scoring 
       area.   As  cards are picked, they are moved to the  card  count 
       area.   Once the card or cards total 13, they are moved  to  the 
       scoring area and your score is updated.

       The  lower right portion of the screen will display and area  to 
       hold the waste pile, stock pile and the remaining portion of the 
       deck.   When starting the game, the deck will be  shuffled,  the 
       cards  dealt to form the Pyramid, and the unused portion of  the 
       deck  will be moved to the deck area.  The waste and stock  pile 
       will be filled as play continues.













                                    - 3 -








                             MAIN SCREEN OPTIONS

       The next to last line on the screen will display the options you 
       currently have available.  You should see the following:

       F1/ENTER Deal  F2 Replay  F3 Setup  F5 Stats  F8 Score  F10 Quit

       F1/ENTER - Pressing Function 1 or the ENTER key will deal out  a 
                  new  hand.  When this is done, the available  options 
                  shown  on  the  lower portion  of  your  screen  will 
                  change.

       F2       - Pressing Function 2 will allow you to replay the last 
                  hand, allowing you to make different moves.  You must 
                  have previously dealt out one hand before using  this 
                  option.

       F3       - Pressing Function 3 will bring up the Setup Menu  and 
                  allow you to setup Pyramid Solitaire to your  liking.  
                  See Setup Screen.

       F5       - Pressing Function 5 will pop up a statistics  window.  

       F8       - Pressing Function 8 will bring up  the  Top  15  High 
                  Scores.
                
       F10      - Pressing Function 10 will quit the  game  and  return 
                  you to your DOS prompt.


                                 SETUP SCREEN

       The Setup Screen is reached by pressing Function 3 from the Main 
       Playing Screen.  Your screen will display the following  default 
       settings:

               1    Display Shuffling             On
               2    Sound                         On
               3    Save High Scores             Off
               4    Cards Dealt            Face Down 
               5    Allow Redeals                Off
               6    Sliding Screens               On
               7    Snow Removal                 Off
               8    Card Movement Speed           20
               9    Change Card Colors
               0    Delete High Score File
 










                                    - 4 -








                                SETUP OPTIONS

       1 - Pressing the number 1 key will toggle the shuffling  display 
           On/Off.   If you would prefer not to view the  shuffling  of 
           the cards, set this to Off.

       2 - Pressing the number 2 key will toggle the sound On/Off.

       3 - If you want your high scores saved to disk, press the number 
           3  key.   If  this is set to "On", a file  will  be  created 
           called  "Pyramid.His".  This file will hold the  information 
           required when viewing the High Scores from the Main Screen.

       4 - The cards dealt for the layout in Pyramid are  dealt  either 
           face  down  or face up.  The default setting is  face  down.  
           This is changed by pressing the number 4 key. 

       5 - The remaining deck in Pyramid should be  dealt  through  one 
           time.   If  the game is not won, then you must start  a  new 
           game.   This option will allow you to redeal  the  remaining 
           cards over again.  This may be done as often as you wish  so 
           long as there aren't any cards remaining in the unused  deck 
           area.   Doing this makes the game a heck of a lot easier  to 
           win.  NOTE:  When redeals is set to "ON", the scoring of the 
           game  will change (See Game Scoring).  Setting this to  "ON"     
           puts  you in the Relaxed Game, while "OFF" puts you  in  the     
           Standard Game.

       6 - While going from one screen  to  another, the  screens  will 
           slide open.  If this causes snow or you would rather not see  
           it happen, you may turn it off by pressing the number 6 key.

       7 - If you are experiencing snow, changing this to  "ON"  should 
           reduce most of the snow.

       8 - Your  cards are dealt and moved  around  the  table  at  the 
           default speed setting of 20.  This means nothing  until  you 
           actually see the cards in  motion.  By pressing the number 8 
           key,  you will be able  to  change  the  speed  setting  for     
           the  card movement speed.  The bottom of your   screen  will     
           display the following options:

                      LEFT/RIGHT Arrows      ENTER      F10

           Use  your LEFT/RIGHT Arrow keys to decrease or increase  the 
           speed  setting.  The lower the number, the faster the  cards 
           move.   Press  the ENTER key if you want to see  the  effect  
           the  speed setting has on the card movement.  When  you  are  
           satisfied  with  the setting, press the Function 10  key  to 
           indicate you are done.







                                    - 5 -








       9 - Pressing the number 9 key will bring you to  another  screen 
           which  will  allow you to change the card colors.   The  top 
           portion  or  your screen will display a row of  cards,  face 
           down.   Below  that row will be another row, face  up.   The 
           lower portion of your screen will display the following:

                    Card Back                       Card Face
       
           F1  Border Foreground Color     F4  Border Foreground Color
           F2  Border Background Color     F5  Border Background Color
           F3  Pattern Color               F6  Face Color

                         ALT-D  Restore Default Colors

           Pressing  the Function keys, F1 through F6 will  change  the 
           two  card  rows to the available colors  allowed  with  each 
           function key pressed.  Pressing ALT-D will restore the  card 
           colors to their default colors.  When you are satisfied with 
           the  color  changes,  press the ENTER key and  you  will  be 
           returned to the Setup Screen.

       0 - Pressing the number 0 key will erase your  Pyramid.His  file 
           from  disk.  All your high scores will be lost and you  will 
           be starting off with a clean slate.

       When you are satisfied with the changes you have made, press the 
       ENTER key and you will return to the Main Playing Screen.

       NOTE:  When you quit playing Pyramid Solitaire, any changes  you 
       have  made  will  be  saved.  The next  time  you  play  Pyramid 
       Solitaire, the last changes you have made will remain until  you 
       make  any future changes.  In order to do this, you must  be  in 
       the same drive or directory that Pyramid.Exe resides in.


                                  STATISTICS

       This  screen is viewed by pressing the Function 5 key  from  the 
       Main  Playing  Screen.   This screen contains  a  more  thorough 
       breakdown  of  the Standard and Relaxed games played.   To  exit 
       this window, press the ENTER key.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Playing Screen.  This screen will allow you to view the top 
       fifteen  players.   The  screen will  display the players  name, 
       score, game number and date  the score was recorded.

       On  the right side of the players name will be either a "-S"  or 
       "-R".   These  symbols stand for Standard Game and Relaxed  Game 
       Scoring.




                                    - 6 -








                                 GAME SCORING

       In  this  game of Pyramid, each card is worth 10 points  in  the 
       Standard  Game.   Your best possible score will be  520  points.  
       The  Relaxed  Game will be scored a  little  differently.   Your 
       cards are worth 10 points each for the first round.  If you have 
       not  won the game and wish to redeal the remaining  cards,  your 
       card  points  will be reduced by 2, making them worth  8  points 
       each.   Each  redeal reduces the point value by 2.   The  lowest 
       point value will not go below 2.



                                MOUSE SUPPORT

       Pyramid  Solitaire  supports  the use of a  Microsoft  (or  true 
       compatible) mouse.  Be sure you have your mouse driver installed 
       if  you plan on using one.  The mouse is supported  only  during 
       the actual playing of the game.  See Playing Options.


                               PLAYING OPTIONS

       Once  you  have pressed either F1 or F2 from  the  Main  Playing 
       Screen, the options available will change.  If you are playing a 
       Relaxed Game, your options will show:

             L/R Arrow     Up Arrow     Down Arrow     R     F10

       While playing the Standard Game, your options will show:

                L/R Arrow     Up Arrow     Down Arrow     F10

       L/R Arrows - Pressing either of these keys will move the pointer 
                    in the direction of the arrow you have pressed.  If 
                    you  are using a mouse, moving the mouse  left  and 
                    right  will act the same as if you were  using  the 
                    arrow keys.

       Up Arrow   - Pressing the up arrow will select the card that the 
                    pointer  is pointing to.  This will be  your  first 
                    card picked.  If the first card is not a King, move 
                    the L/R arrows again and select the second card  by 
                    pressing  the up arrow.  If you are using a  mouse, 
                    press the left mouse button to select the card.

       Down Arrow - Pressing the down arrow will replace the first card 
                    you have select.  If you have moved your pointer to 
                    another  location, you may still replace the  card.  
                    When  your  card  is  replaced,  your  pointer   is 
                    returned  to  the  first  card  position  you   had 
                    selected.   If  you are using a  mouse,  press  the 
                    right mouse button to replace the card.




                                    - 7 -








       R          - If you are playing the Relaxed Game, and  the  deck 
                    has  been depleted, pressing this key will  replace 
                    the cards from the waste and stock pile back to the 
                    deck  pile in the same order they were  originally.  
                    This  will  allow  you to  continue  playing  until 
                    you've either won or discovered that hand cannot be 
                    won.

       F10        - Press Function 10 when you want to quit playing the 
                    hand.  This may be done at any time.



                                 SPECIAL KEYS

       When  playing  Pyramid,  to move to top  card  off  the  undealt 
       portion of the deck, you may use the "D" key rather than  moving 
       the pointer to the deck.


                                 CARD POINTER

       When  the first card has been selected, further movement of  the 
       pointer will skip over the cards that are not playable.  If  the 
       player  has picked a card that was covering two others,  further 
       movement  of the pointer will skip past the  previously  covered 
       cards.  They are not playable.


                             AVERAGES AND TOTALS

       The  total  games played are shown on the Main  Playing  Screen.  
       This  is  a total of both the Standard and Relaxed  games.   The 
       average  score for both the Standard and Relaxed Games  are  not 
       taken  from  the total games played.  They are computed  by  the 
       actual games played from each mode of play.


                              SHAREWARE VERSION

       The ShareWare version of Pyramid Solitaire does not support  the 
       saving of high scores to disk, the saving of the setup  options, 
       or the game counters.  Those options are available to registered 
       users  only. These minor restrictions will not effect  the  game  
       in  anyway.   After  you have played Pyramid  Solitaire  for   a 
       reasonable  time,  we ask for your support by  sending  in  your 
       registration.    Registered  users  will  receive   the   latest 
       Registered  Version, with full saving features, and  the  latest 
       ShareWare Version.








                                    - 8 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                              Pyramid Solitaire
                          Version 3.02 Registration


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


           Where did you acquire this version of Pyramid Solitaire

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


                                    - 9 -





```
{% endraw %}

## PYRAMID.DOC

{% raw %}
```






























                       Pyramid Solitaire  Version 3.02
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


       PROGRAMS ON DISK ............................................. 1

       REQUIRED PROGRAMS ............................................ 1

       STARTING THE GAME ............................................ 2

       LAYOUT ....................................................... 2

       OBJECT ....................................................... 2

       VALUE OF CARDS ............................................... 2

       STARTING SCREEN .............................................. 3

       MAIN PLAYING SCREEN .......................................... 3

       MAIN SCREEN OPTIONS .......................................... 4

       SETUP SCREEN ................................................. 4

       SETUP OPTIONS ................................................ 5

       STATISTICS ................................................... 6

       HIGH SCORES .................................................. 6

       GAME SCORING ................................................. 7

       MOUSE SUPPORT ................................................ 7

       PLAYING OPTIONS .............................................. 7

       SPECIAL KEYS ................................................. 8

       CARD POINTER ................................................. 8

       AVERAGES AND TOTALS .......................................... 8

       SHAREWARE VERSION ............................................ 8

       REGISTRATION FORM ............................................ 9






















                               PROGRAMS ON DISK

           File Name            File Description
        
         Pyramid .Exe   -  Main program for Pyramid Solitaire.
         Pyramid .Doc   -  Documentation for Pyramid Solitaire.
         PyStart .Bat   -  A batch file to  read  the  documentation, 
                           print the documentation and install Pyramid  
                           Solitaire on a Hard Drive.
         PyRead  .Com   -  Used by PyStart.Bat.
         PyReply .Com   -  Used by PyStart.Bat.
         PyIntro        -  Used by PyStart.Bat.
         PyPrt          -  Used by PyStart.Bat.
         PyHd           -  Used by PyStart.Bat.
         PyReg          -  Registration Form
         Pyr302S .Arc   -  Shareware Version of Pyramid Solitaire



                              REQUIRED PROGRAMS

       The   only  program  required  to  run  Pyramid   Solitaire   is 
       Pyramid.Exe.   From  your  Dos prompt, type  PYRAMID  and  press 
       ENTER.

































                                    - 1 -








                              STARTING THE GAME

                This is one of the most popular members of the
                  simple addition family of solitaire games.

       Before  you  play this game, make a backup copy  of  Pyramid  by 
       using one the COPY commands found in your DOS manual.  Use  your 
       backup copy to play Pyramid and NOT your original source disk.

       After  you  have booted up your system, place your new  copy  of 
       Pyramid  in Drive A. Type "Pyramid", then press the  ENTER  key.  
       High scores are saved to disk and therefore require the disk  to 
       remain in your drive.

       Hard  Disk  users  are required to be  in  the  directory  where 
       Pyramid has been installed.



                                    LAYOUT

       Twenty-eight  cards  are dealt in the form of  a  pyramid.   The 
       pyramid has seven rows of cards.  This is composed of successive 
       rows  of  one to seven cards.  Each card is  overlapped  by  two 
       cards of the row below.  The last row which contains seven cards 
       are  turned  face up.  All the other cards of  the  pyramid  are 
       turned  face down.  The remainder of the deck is placed  off  to 
       the  right of the pyramid.  The top card of the deck  is  turned 
       face up and place in a stock pile.  This card is also  available 
       for play.

       A  card in the pyramid is available for play if not  covered  by 
       any other.  The play of two adjacent cards releases one card  in 
       the previous row.


                                    OBJECT

       Remove all cards from the pyramid and from the remainder of  the 
       deck by simple addition using any two cards available for  play.  
       The  two cards must add up to 13 points.  The only exception  to 
       this rule is when a King is exposed.  The King is worth thirteen 
       points  and  therefore  may be removed without the  need  for  a 
       second card.

      
                                VALUE OF CARDS

                  CARDS                           VALUE

                  Ace's                              1
                  2's through 10's              Face value
                  Jack's                            11
                  Queen's                           12
                  King's                            13


                                    - 2 -








                               STARTING SCREEN

       Once you have started Pyramid, a screen will come up showing the 
       name  of the game, version number and copyright  notice.   After 
       a few seconds, the main playing screen will appear and you'll be 
       ready to play Pyramid.  If you get tired of looking at the first 
       screen, press any key and you will bring up the playing screen.


                             MAIN PLAYING SCREEN

       The  main part of this screen will be blank at first.   This  is 
       the right portion which will eventually be filled with the cards 
       when  dealt.   Starting  with the upper  right  portion  of  the 
       screen,  you  will  see the words  "Standard  Game"  (See  Setup 
       Options  #5 for Standard and Relaxed Games).  This is  the  best 
       and hardest way to play the game of Pyramid.

       You will also see a current game counter, total game counter, an 
       average score for "Standard Games" and one for "Relaxed  Games".  
       The current game counter will keep track of the amount of  games 
       currently  played.  Each time you start the game from  DOS,  the 
       current game counter will start at zero.

       The  total game counter will show you how many total games  have 
       been  played.  This takes into account both the  Standard  Games 
       and Relaxed Games.

       The average scores will change with each game played.  In  order 
       for  Pyramid  to  keep track of this, you must be  in  the  same 
       directory or drive as the Pyramid.Exe file resides.

       Below  those statistics is part of the playing area.  The  right 
       portion  of your screen will display the card count and  scoring 
       area.   As  cards are picked, they are moved to the  card  count 
       area.   Once the card or cards total 13, they are moved  to  the 
       scoring area and your score is updated.

       The  lower right portion of the screen will display and area  to 
       hold the waste pile, stock pile and the remaining portion of the 
       deck.   When starting the game, the deck will be  shuffled,  the 
       cards  dealt to form the Pyramid, and the unused portion of  the 
       deck  will be moved to the deck area.  The waste and stock  pile 
       will be filled as play continues.













                                    - 3 -








                             MAIN SCREEN OPTIONS

       The next to last line on the screen will display the options you 
       currently have available.  You should see the following:

       F1/ENTER Deal  F2 Replay  F3 Setup  F5 Stats  F8 Score  F10 Quit

       F1/ENTER - Pressing Function 1 or the ENTER key will deal out  a 
                  new  hand.  When this is done, the available  options 
                  shown  on  the  lower portion  of  your  screen  will 
                  change.

       F2       - Pressing Function 2 will allow you to replay the last 
                  hand, allowing you to make different moves.  You must 
                  have previously dealt out one hand before using  this 
                  option.

       F3       - Pressing Function 3 will bring up the Setup Menu  and 
                  allow you to setup Pyramid Solitaire to your  liking.  
                  See Setup Screen.

       F5       - Pressing Function 5 will pop up a statistics  window.  

       F8       - Pressing Function 8 will bring up  the  Top  15  High 
                  Scores.
                
       F10      - Pressing Function 10 will quit the  game  and  return 
                  you to your DOS prompt.


                                 SETUP SCREEN

       The Setup Screen is reached by pressing Function 3 from the Main 
       Playing Screen.  Your screen will display the following  default 
       settings:

               1    Display Shuffling             On
               2    Sound                         On
               3    Save High Scores             Off
               4    Cards Dealt            Face Down 
               5    Allow Redeals                Off
               6    Sliding Screens               On
               7    Snow Removal                 Off
               8    Card Movement Speed           20
               9    Change Card Colors
               0    Delete High Score File
 










                                    - 4 -








                                SETUP OPTIONS

       1 - Pressing the number 1 key will toggle the shuffling  display 
           On/Off.   If you would prefer not to view the  shuffling  of 
           the cards, set this to Off.

       2 - Pressing the number 2 key will toggle the sound On/Off.

       3 - If you want your high scores saved to disk, press the number 
           3  key.   If  this is set to "On", a file  will  be  created 
           called  "Pyramid.His".  This file will hold the  information 
           required when viewing the High Scores from the Main Screen.

       4 - The cards dealt for the layout in Pyramid are  dealt  either 
           face  down  or face up.  The default setting is  face  down.  
           This is changed by pressing the number 4 key. 

       5 - The remaining deck in Pyramid should be  dealt  through  one 
           time.   If  the game is not won, then you must start  a  new 
           game.   This option will allow you to redeal  the  remaining 
           cards over again.  This may be done as often as you wish  so 
           long as there aren't any cards remaining in the unused  deck 
           area.   Doing this makes the game a heck of a lot easier  to 
           win.  NOTE:  When redeals is set to "ON", the scoring of the 
           game  will change (See Game Scoring).  Setting this to  "ON"     
           puts  you in the Relaxed Game, while "OFF" puts you  in  the     
           Standard Game.

       6 - While going from one screen  to  another, the  screens  will 
           slide open.  If this causes snow or you would rather not see  
           it happen, you may turn it off by pressing the number 6 key.

       7 - If you are experiencing snow, changing this to  "ON"  should 
           reduce most of the snow.

       8 - Your  cards are dealt and moved  around  the  table  at  the 
           default speed setting of 20.  This means nothing  until  you 
           actually see the cards in  motion.  By pressing the number 8 
           key,  you will be able  to  change  the  speed  setting  for     
           the  card movement speed.  The bottom of your   screen  will     
           display the following options:

                      LEFT/RIGHT Arrows      ENTER      F10

           Use  your LEFT/RIGHT Arrow keys to decrease or increase  the 
           speed  setting.  The lower the number, the faster the  cards 
           move.   Press  the ENTER key if you want to see  the  effect  
           the  speed setting has on the card movement.  When  you  are  
           satisfied  with  the setting, press the Function 10  key  to 
           indicate you are done.







                                    - 5 -








       9 - Pressing the number 9 key will bring you to  another  screen 
           which  will  allow you to change the card colors.   The  top 
           portion  or  your screen will display a row of  cards,  face 
           down.   Below  that row will be another row, face  up.   The 
           lower portion of your screen will display the following:

                    Card Back                       Card Face
       
           F1  Border Foreground Color     F4  Border Foreground Color
           F2  Border Background Color     F5  Border Background Color
           F3  Pattern Color               F6  Face Color

                         ALT-D  Restore Default Colors

           Pressing  the Function keys, F1 through F6 will  change  the 
           two  card  rows to the available colors  allowed  with  each 
           function key pressed.  Pressing ALT-D will restore the  card 
           colors to their default colors.  When you are satisfied with 
           the  color  changes,  press the ENTER key and  you  will  be 
           returned to the Setup Screen.

       0 - Pressing the number 0 key will erase your  Pyramid.His  file 
           from  disk.  All your high scores will be lost and you  will 
           be starting off with a clean slate.

       When you are satisfied with the changes you have made, press the 
       ENTER key and you will return to the Main Playing Screen.

       NOTE:  When you quit playing Pyramid Solitaire, any changes  you 
       have  made  will  be  saved.  The next  time  you  play  Pyramid 
       Solitaire, the last changes you have made will remain until  you 
       make  any future changes.  In order to do this, you must  be  in 
       the same drive or directory that Pyramid.Exe resides in.


                                  STATISTICS

       This  screen is viewed by pressing the Function 5 key  from  the 
       Main  Playing  Screen.   This screen contains  a  more  thorough 
       breakdown  of  the Standard and Relaxed games played.   To  exit 
       this window, press the ENTER key.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Playing Screen.  This screen will allow you to view the top 
       fifteen  players.   The  screen will  display the players  name, 
       score, game number and date  the score was recorded.

       On  the right side of the players name will be either a "-S"  or 
       "-R".   These  symbols stand for Standard Game and Relaxed  Game 
       Scoring.




                                    - 6 -








                                 GAME SCORING

       In  this  game of Pyramid, each card is worth 10 points  in  the 
       Standard  Game.   Your best possible score will be  520  points.  
       The  Relaxed  Game will be scored a  little  differently.   Your 
       cards are worth 10 points each for the first round.  If you have 
       not  won the game and wish to redeal the remaining  cards,  your 
       card  points  will be reduced by 2, making them worth  8  points 
       each.   Each  redeal reduces the point value by 2.   The  lowest 
       point value will not go below 2.



                                MOUSE SUPPORT

       Pyramid  Solitaire  supports  the use of a  Microsoft  (or  true 
       compatible) mouse.  Be sure you have your mouse driver installed 
       if  you plan on using one.  The mouse is supported  only  during 
       the actual playing of the game.  See Playing Options.


                               PLAYING OPTIONS

       Once  you  have pressed either F1 or F2 from  the  Main  Playing 
       Screen, the options available will change.  If you are playing a 
       Relaxed Game, your options will show:

             L/R Arrow     Up Arrow     Down Arrow     R     F10

       While playing the Standard Game, your options will show:

                L/R Arrow     Up Arrow     Down Arrow     F10

       L/R Arrows - Pressing either of these keys will move the pointer 
                    in the direction of the arrow you have pressed.  If 
                    you  are using a mouse, moving the mouse  left  and 
                    right  will act the same as if you were  using  the 
                    arrow keys.

       Up Arrow   - Pressing the up arrow will select the card that the 
                    pointer  is pointing to.  This will be  your  first 
                    card picked.  If the first card is not a King, move 
                    the L/R arrows again and select the second card  by 
                    pressing  the up arrow.  If you are using a  mouse, 
                    press the left mouse button to select the card.

       Down Arrow - Pressing the down arrow will replace the first card 
                    you have select.  If you have moved your pointer to 
                    another  location, you may still replace the  card.  
                    When  your  card  is  replaced,  your  pointer   is 
                    returned  to  the  first  card  position  you   had 
                    selected.   If  you are using a  mouse,  press  the 
                    right mouse button to replace the card.




                                    - 7 -








       R          - If you are playing the Relaxed Game, and  the  deck 
                    has  been depleted, pressing this key will  replace 
                    the cards from the waste and stock pile back to the 
                    deck  pile in the same order they were  originally.  
                    This  will  allow  you to  continue  playing  until 
                    you've either won or discovered that hand cannot be 
                    won.

       F10        - Press Function 10 when you want to quit playing the 
                    hand.  This may be done at any time.



                                 SPECIAL KEYS

       When  playing  Pyramid,  to move to top  card  off  the  undealt 
       portion of the deck, you may use the "D" key rather than  moving 
       the pointer to the deck.


                                 CARD POINTER

       When  the first card has been selected, further movement of  the 
       pointer will skip over the cards that are not playable.  If  the 
       player  has picked a card that was covering two others,  further 
       movement  of the pointer will skip past the  previously  covered 
       cards.  They are not playable.


                             AVERAGES AND TOTALS

       The  total  games played are shown on the Main  Playing  Screen.  
       This  is  a total of both the Standard and Relaxed  games.   The 
       average  score for both the Standard and Relaxed Games  are  not 
       taken  from  the total games played.  They are computed  by  the 
       actual games played from each mode of play.


                              SHAREWARE VERSION

       The ShareWare version of Pyramid Solitaire does not support  the 
       saving of high scores to disk, the saving of the setup  options, 
       or the game counters.  Those options are available to registered 
       users  only. These minor restrictions will not effect  the  game  
       in  anyway.   After  you have played Pyramid  Solitaire  for   a 
       reasonable  time,  we ask for your support by  sending  in  your 
       registration.    Registered  users  will  receive   the   latest 
       Registered  Version, with full saving features, and  the  latest 
       ShareWare Version.








                                    - 8 -








                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.


                              Pyramid Solitaire
                          Version 3.02 Registration


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


           Where did you acquire this version of Pyramid Solitaire

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


                                    - 9 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1701

     Volume in drive A has no label
     Directory of A:\

    FILE1701 TXT      2591  12-11-89   7:06p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694  12-12-89  10:52a
    PYHD               516   7-07-89   6:57a
    PYINTRO            805   7-07-89   6:57a
    PYPRT              221   7-07-89   6:57a
    PYR302S  ARC     56830   7-07-89   6:57a
    PYRAMID  DOC     25062   7-07-89   6:57a
    PYRAMID  EXE     57680  12-12-89  10:43a
    PYREAD   COM      4200   7-07-89   6:57a
    PYREG             2048   7-07-89   6:57a
    PYREPLY  COM        14   7-07-89   6:57a
    PYSTART  BAT       682   7-07-89   6:57a
           13 file(s)     151381 bytes
                            5120 bytes free
