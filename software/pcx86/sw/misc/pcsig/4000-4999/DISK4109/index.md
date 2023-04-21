---
layout: page
title: "PC-SIG Diskette Library (Disk #4109)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4109/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4109"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## PYRAMID2.DOC

{% raw %}
```




























                             PYRAMID SOLITAIRE II
                                 Version 1.OO

                             EGA & Mouse Required

                              (C) Copyright 1991

                                      by

                               Raymond M. Buti

                             All Rights Reserved


                           United Innovations Plus
                            Post Office Box 21081
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

       PYRAMID SOLITAIRE ............................................ 2

       PLAYING PYRAMID SOLITAIRE .................................... 2

       STARTING PYRAMID SOLITAIRE ................................... 2

       TANDY 1OOO ................................................... 2

       PYRAMID LAYOUT ............................................... 3

       OBJECT ....................................................... 3

       VALUE OF CARDS ............................................... 3

       STARTING SCREEN .............................................. 3

       MAIN PLAYING SCREEN .......................................... 3

       MAIN OPTIONS ................................................. 4

          Play Pyramid .............................................. 4

          Replay Game ............................................... 4

          Setup ..................................................... 4

          Statistics ................................................ 4

          Score ..................................................... 4

          Quit ...................................................... 5

       SETUP MENU ................................................... 5

       SETUP OPTIONS ................................................ 5

          Change Card Back .......................................... 5

          Sound ..................................................... 5

          Card Movement ............................................. 5

          Cards Dealt ............................................... 5

          Allow Redeals ............................................. 5


                                    - i -  








          Playing Speed ............................................. 6

          Accept .................................................... 6

       STATISTICS ................................................... 6

          Clear Statistics .......................................... 6

          Accept .................................................... 6

       SCORES ....................................................... 6

          Clear Scores .............................................. 6

          Toggle Scores ............................................. 7

          Accept .................................................... 7

       GAME SCORING ................................................. 7

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
        
         Pyramid2.Exe - The main program for Pyramid Solitaire.
         PInstall.Exe - Installation file for Pyramid Solitaire.
         Pyr01   .Inf - Graphics file required by Pyramid2.Exe.
         Pyr02   .Inf - Graphics file required by Pyramid2.Exe.
         Pyr03   .Inf - Graphics file required by Pyramid2.Exe.
         Pyramid2.Doc - The documentation for Pyramid Solitaire.
         PyStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Pyramid on 
                        a Hard Drive.
         PyRead  .Com - Used by PyStart.Bat
         PyReply .Com - Used by PyStart.Bat
         PyIntro      - Used by PyStart.Bat
         PyPrt        - Used by PyStart.Bat
         PyHd         - Used by PyStart.Bat
         PyReg        - Pyramid Solitaire Registration Form
         T1KVGA  .Com - Memory resident file for Tandy 1OOO users.


                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       36OK  of free Ram, EGA graphics adapter, a Microsoft  compatible 
       mouse,  hard  disk   or   1 floppy  disk   drive.   The    files  
       required    to   play   Pyramid  Solitaire   are   PYRAMID2.EXE, 
       PYR01.INF,  PYR02.INF,   PYR03.INF.  Pyramid Solitaire  MUST  be 
       able  to   locate the  three .INF  files.   Typing  PINSTALL  or  
       PYSTART   will  allow  you   to install  Pyramid  Solitaire   on 
       your   hard  disk  or  to a second  floppy disk.  A  hard   disk  
       is recommended but not required.   














                                    - 1 -








                              PYRAMID SOLITAIRE

       This  is  the most widely played solitaire game for  adults  and 
       children.   Twenty-eight  cards  are  dealt in  the  form  of  a 
       pyramid.  The pyramid has 7 rows of cards.  This is composed  of 
       successive  rows of one to seven overlapping cards.  The  object 
       is to remove all the cards from the pyramid and the remainder of 
       the  deck by simple addition using any two cards  available  for 
       play.


                          PLAYING PYRAMID SOLITAIRE

       A  deck of fifty-two standard playing cards are used.  The  deck 
       is  thoroughly shuffled then cut.  Twenty-eight cards are  dealt 
       one  at  a  time, starting at the top, face  down  to  form  the 
       Pyramid layout.  The last row of cards in the Pyramid are turned 
       face up. The remainder of the deck is placed in a Stock pile.

       The  player  selects two cards which total 13  points.   As  the 
       cards are selected, they are placed into the Card Count area  of 
       the screen.  If the selected cards do not total 13 points,  they 
       are returned to previous locations on the Pyramid layout.   When 
       the  cards total 13 points, they are moved from the  Card  Count 
       area  and placed to the right in the Score area. Play  continues 
       in this manner until you can no longer find a play.

       When  you  no longer have any plays from the Pyramid,  you  then 
       turn  over  the top card of the Stock pile.  This card  will  be 
       placed in the Waste pile overlapping any existing top card.  The 
       player  may now use the top card of the Waste with any  playable 
       card in the Pyramid layout or the next exposed card in the Waste 
       pile.   Play continues in this manner until you have placed  the 
       entire deck into the Score area or quit.


                          STARTING PYRAMID SOLITAIRE

       From   your  DOS prompt, type PYRAMID2 and press the ENTER  key.    
       In order   for Pyramid to  run, you must be  logged  onto    the 
       directory where PYRAMID2.EXE, PYR01.INF, PYR02.INF and PYR03.INF 
       reside.


                                  TANDY 1OOO

       NOTE:   If your computer is a Tandy 1OOO, the file  "T1KVGA.COM" 
       may    be  required  to  be in  memory  before  playing  Pyramid 
       Solitaire.    If  you   cannot   play  this  game,  install  the 
       "T1KVGA.COM"   file   in memory  first.  From your  DOS  prompt, 
       type T1KVGA and press  the ENTER key.  You may then run  Pyramid 
       Solitaire as described above.

       After typing PYRAMID2 and pressing the ENTER key, a screen  will 
       appear  displaying the copyright notice.  While this  screen  is 
       being  displayed,  Pyramid Solitaire will load in  the  required 

                                    - 2 -








       files  it needs to continue running.  You will then hear a  beep 
       and  a  message  will appear asking you to  press  either  mouse 
       button.   Pressing  either the left or right mouse  button  will 
       continue with the game.


                                PYRAMID LAYOUT

       Twenty-eight  cards  are dealt in the form of  a  pyramid.   The 
       pyramid has seven rows of cards.  This is composed of successive 
       rows  of  one to seven cards.  Each card is  overlapped  by  two 
       cards of the row below.  The last row which contains seven cards 
       are  turned  face up.  All the other cards of  the  pyramid  are 
       turned  face down.  The remainder of the deck is placed  off  to 
       the  right of the pyramid in a stock pile.

       A   card  in  the pyramid is available for play  if  it  is  not 
       covered  by any other.  The play of two adjacent cards  releases 
       one card  in the row above.


                                    OBJECT

       The object is to remove all cards from the pyramid and from  the 
       remainder  of  the deck by simple addition using any  two  cards 
       available  for  play.  The  two cards must add up to 13  points.  
       The only exception  to this rule is when a King is exposed.  The 
       King  is worth thirteen points  and  therefore  may  be  removed 
       without the  need  for  a second card.


                                VALUE OF CARDS

                  CARDS                           VALUE

                  Ace's                              1
                  2's through 10's              Face value
                  Jack's                            11
                  Queen's                           12
                  King's                            13


                               STARTING SCREEN

       Once you type in Pyramid and press ENTER from your DOS prompt, a 
       screen  will display the version number and  copyright   notice. 
       Pyramid  will  now  load  in memory the  files  it  requires  to 
       continue.  You then will be asked to press either mouse button.


                             MAIN PLAYING SCREEN

       The  Main Playing Screen will display a layout area on the  left 
       side of the screen.  The upper right portion of the screen  will 
       display  game statistics.  The lower right portion will  display 


                                    - 3 -








       the  card  count, score, waste, and stock pile.  The  bottom  of 
       your  screen will display the options you have available  before 
       the start of each game.


                                 MAIN OPTIONS

       The  bottom  line  on the screen will display  the  options  you 
       currently have available.  They include the following:

       Play Pyramid   Replay Game   Setup   Statistics   Scores   Quit

       All  options  are selected by moving the mouse cursor  over  the 
       desired option, then pressing the left mouse button.

                                 Play Pyramid

       Selecting the Play Pyramid option will shuffle the deck of cards 
       and deal out a new game of Pyramid.  The Main Options will  then 
       be removed.  While playing Pyramid Solitaire, use the left mouse 
       button  to move and place cards.   Place the mouse  cursor  over 
       the  card  you wish to select and press the left  mouse  button.  
       Pressing  the right mouse button anytime during the  playing  of 
       the  game  will allow you to quit.  You will then  be  asked  to 
       verify if you really wish to quit.  Press the right mouse button 
       to verify quitting or the left mouse button to continue playing.

       If  a card was selected by mistake, move your mouse cursor  over 
       that  card  which is now in the Card Count area, and  press  the 
       left  mouse  button.   It  will  be  returned  to  its  previous 
       location.

                    Replay Game (Registered Version Only)

       Selecting  the Replay Game option will allow you to  replay  the 
       last hand, allowing you to make different moves.  You must  have 
       previously dealt out one hand before using this option.

                       Setup (Registered Version Only)

       Selecting  the  Setup option will bring up the  Setup  Menu  and 
       allow  you to change the default settings of  Pyramid  Solitaire 
       (See Setup Mneu).

                                  Statistics

       Selecting  the  Statistics  option will bring  up  a  statistics 
       screen (See Statistics Menu).

                                    Score

       Selecting  the Score option will bring up a high  scores  screen 
       (See High Scores).
                



                                    - 4 -








                                     Quit

       Selecting  the  Quit option will quit the game  of  Pyramid  and 
       return  you  to  your  DOS prompt.   When  you  quit,  all  game 
       statistics are saved.


                     SETUP MENU (Registered Version Only) 

       The  Setup  Menu  is reached by selecting Setup  from  the  Main 
       options.   Your  screen  will  display  the  following   default 
       settings:

                       Change Card Back
                       Sound                         On
                       Card Movement                 On
                       Cards Dealt            Face Down 
                       Allow Redeals                Off
                       Playing Speed         Medium - 5
                       Accept


                   SETUP OPTIONS (Registered Version Only)

                               Change Card Back

       Selecting  this  option will allow you to change the  color  and 
       design  of the card back.  The current card back will be  placed 
       in the Card Count area of your screen.  Pressing the left  mouse 
       button will cycle through the card backs.  Press the right mouse 
       button when you wish to use the card back being displayed.

                                    Sound

       Selecting  this option will allow you to toggle the sound On  or 
       Off.

                                Card Movement

       Selecting  this option will allow you to toggle the movement  of 
       the  cards On or Off.  To play a faster game of Pyramid,  toggle 
       this option to Off.

                                 Cards Dealt

       Selecting  this option will allow you to toggle the cards to  be 
       dealt  either  face down or face up.  When the cards  are  dealt 
       face up, it will give you an advantage in being able to see  all 
       the cards in the Pyramid layout.

                                Allow Redeals

       Selecting  this option will allow you to continue to redeal  the 
       unused  cards  in the Waste pile.  You may  continue  to  redeal 



                                    - 5 -








       until  you  either win or quit.  Pyramid  Solitaire  is  usually 
       played  without  redeals.   This is called  the  Standard  game.  
       Allowing redeals is called the Relaxed Game.

                                Playing Speed

       Selecting  this  option will allow you to adjust  the  speed  at 
       which Pyramid is played.  The fastest speed is a setting of zero 
       (0)  and the slowest speed setting is nine (9).  Each  time  you 
       select this option, the speed setting will increase to the  next 
       speed setting number.

                                    Accept

       Selecting this will remove the Setup Menu and return you to  the 
       Main Options.  All changes made in the Setup Menu will be  saved 
       each time you quit playing Pyramid Solitaire and return to  your 
       DOS prompt.


                                  STATISTICS

       The  Statistics screen is reached by selecting  Statistics  from 
       the Main Options.  You will be able to view the amount of  games 
       played, average score and total amount of games won for both the 
       Standard and Relaxed games.

       The  bottom  line  of the Statistics  window  will  display  the 
       following:

                         Clear Statistics      Accept

       Selecting Clear Statistics will reset all the Pyramid statistics 
       to  zero.  If this was selected by mistake, selecting  it  again 
       will restore the statistics.

       Selecting Accept will return you to your Main Options. 


                                    SCORES

       Selecting Score from the Main Options will allow you to view the 
       top 5 players.  The screen will display the players name, score, 
       game number and date the score was recorded (See Game Scoring).

       The  bottom  line  of the High Scores window  will  display  the 
       following:

                   Clear Scores    Toggle Scores    Accept

                                 Clear Scores

       Selecting  Clear  Scores will reset the scores to zero  for  the 




                                    - 6 -








       scores being viewed (Standard or Relaxed).  If this was selected 
       by mistake, selecting it again will restore the scores.

                                Toggle Scores

       Selecting  this  option  will allow you to  toggle  between  the 
       Standard and Relaxed high game scores.

                                    Accept

       Selecting  Accept  will return you to your  Main  Options.   You 
       cannot restore the scores once you accept them.


                                 GAME SCORING

       In  this  game of Pyramid, each card is worth 10 points  in  the 
       Standard  Game.   Your best possible score will be  520  points.  
       The  Relaxed  Game will be scored a  little  differently.   Your 
       cards are worth 10 points each for the first round.  If you have 
       not  won the game and wish to redeal the remaining  cards,  your 
       card  points  will be reduced by 2, making them worth  8  points 
       each.   Each  redeal reduces the point value by 2.   The  lowest 
       point value will not go below 2.

































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
                       Pyramid Solitaire (EGA & Mouse)






















                                    - 8 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                             PYRAMID SOLITAIRE II
                        EGA Version 1.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______

                                   Foreign orders add   $ 5.OO  _______
         (Foreign orders on International Money Orders)


                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


          Where did you acquire this version of Pyramid Solitaire II

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


        For our records, please indicate your systems display adapter.

       ___MONO  ___CGA  ___EGA  ___VGA  ___SVGA    Mouse ___Yes   ___No



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21O81
                                        Castro Valley, CA 94546


                                    - 9 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4109

     Volume in drive A has no label
     Directory of A:\

    PINSTALL EXE      9328  10-15-91   1:00a
    PYHD               205  10-15-91   1:00a
    PYINTRO            783  10-15-91   1:00a
    PYPRT              217  10-15-91   1:00a
    PYR01    INF     44482  10-15-91   1:00a
    PYR02    INF     99834  10-15-91   1:00a
    PYR03    INF     49344  10-15-91   1:00a
    PYRAMID2 DOC     25157  10-15-91   1:00a
    PYRAMID2 EXE    109632  10-15-91   1:00a
    PYREAD   COM      9853  10-15-91   1:00a
    PYREG             1849  10-15-91   1:00a
    PYREPLY  COM        14  10-15-91   1:00a
    PYSTART  BAT       672  10-15-91   1:00a
    T1KVGA   COM        16  10-15-91   1:00a
    GO       BAT        10  10-01-93   7:29a
           15 file(s)     351396 bytes
                            1024 bytes free
