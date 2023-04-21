---
layout: page
title: "PC-SIG Diskette Library (Disk #2737)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2737/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2737"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2737.TXT

{% raw %}
```
Disk No: 2737                                                           
Disk Title: Poker Slot 1 of 2 (2738 also)                               
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Poker Slot                                               
Author Version: 2.00                                                    
Author Registration: $15.00                                             
Special Requirements: 360K RAM, EGA. Hard drive recommended; supports mo
                                                                        
POKER SLOT is a gambling game found in casinos in Nevada and New        
Jersey.  Before playing POKER SLOT, choose one of four variations of the
game -- Second Chance Poker, Joker Wild, Deuces Wild, and Double Down.  
                                                                        
The object of the game is to get a poker hand of Jacks or better.  You  
will be paid off according to your poker hand.   For each round, insert 
one to five coins worth $1.00 each.  (POKER SLOT will keep track of the 
total coins bet.)  You will be dealt five cards in each round and you   
may choose which ones to hold or discard.                               
                                                                        
POKER SLOT can be played with a mouse or keyboard, and has a detailed   
screen layout using EGA graphics.                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PSLOT.DOC

{% raw %}
```






















                                  POKER SLOT
                                 Version 2.OO


                                 EGA Required
       

                           (C) Copyright 199O,1991

                                      by

                               Raymond M. Buti

                             All Rights Reserved



                           United Innovations Plus
                            Post Office Box 21O81
                          Castro Valley, Ca.  94546


                                (415) 886-9O36





















       



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

       TRADEMARKS  .................................................. 1

       PROGRAMS ON DISK ............................................. 1

       PROGRAM REQUIREMENTS ......................................... 1

       SHAREWARE VS REGISTERED VERSION .............................. 2

       POKER SLOT ................................................... 2

       STARTING POKER SLOT .......................................... 2

       LOCATING THE .INF FILES ...................................... 2

       PLAYING POKER SLOT ........................................... 3

       USING THE KEYBOARD ........................................... 3

       USING A MOUSE ................................................ 4

       BUTTON DESCRIPTIONS .......................................... 4

         Hold Buttons ............................................... 4

         Insert Coin Button ......................................... 4

         Max. Coins Button .......................................... 4

         Deal Button ................................................ 4

         Reset Button ............................................... 4

         Pat Button ................................................. 5

         Quit Button ................................................ 5

         Setup Button ............................................... 5

         Scores Button .............................................. 5

       PROGRESSIVE POT .............................................. 5

       CREDITS ...................................................... 5

       COUNTER ...................................................... 5

       HANDS PLAYED ................................................. 6

       HANDS HITS ................................................... 6

       SETUP ........................................................ 6




                                    - i -








       SETUP OPTIONS ................................................ 6

         Sound ...................................................... 6

         Save High Scores ........................................... 6

         Second Chance Poker ........................................ 6

         Joker Wild Poker ........................................... 7

         Deuces Wild Poker .......................................... 7

         Double Down Poker .......................................... 7

         Quit ....................................................... 8

       HIGH SCORES .................................................. 8

       OTHER GAMES .................................................. 9

       REGISTRATION FORM ........................................... 10




































                                    - ii -








                                  TRADEMARKS

       "Microsoft" is a trademark of Microsoft Corporation


                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         PSlot   .Exe - The main program for Poker Slot.
         PInstall.Exe - Installation file for Poker Slot. 
         PsLib01 .Inf - Graphics file required by PSlot.Exe.
         PsLib02 .Inf - Graphics file required by PSlot.Exe.
         PsLib03 .Inf - Graphics file required by PSlot.Exe.
         PsLib04 .Inf - Graphics file required by PSlot.Exe.
         PSlot   .Doc - The documentation for Poker Slot.
         PsStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Poker Slot on a
                        Hard Drive.
         PsRead  .Com - Used by PsStart.Bat
         PsReply .Com - Used by PsStart.Bat
         PsIntro      - Used by PsStart.Bat
         PsPrt        - Used by PsStart.Bat
         PsHd         - Used by PsStart.Bat
         PsReg        - Poker Slot Registration Form
         PSlot2S.Arc  - Shareware Version of Poker Slot.


                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       360K   of   free  Ram, an EGA graphics adapter, hard disk  or  1 
       high  density  disk drive or 2-360K disk  drives.   The    files  
       required  to  play   Poker  Slot   are   PSLOT.EXE, PSLIB01.INF,  
       PSLIB02.INF,  PSLIB03.INF and PSLIB04.INF.  Poker Slot  must  be 
       able to locate the four .INF files.  Typing PINSTALL or  PSSTART 
       will  all you to install Poker Slot on either your hard disk  or 
       floppy  drives.  A hard disk is recommended but   not  required.   
       Poker  Slot may be played with  either  a  MicroSoft  compatible 
       mouse or the keyboard.














                                    - 1 -








                       SHAREWARE VS REGISTERED VERSION

       Poker Slot is written in two versions, a ShareWare version and a  
       Registered   version.   This is a fully  functional  program  of  
       Poker  Slot.  This ShareWare version will allow the user to play 
       up  to 2O hands before the game ends. Users  of  the   ShareWare 
       version  will have a message  appear  at the end  of the   game.  
       The  message  will state that the  program is  NOT    free   and  
       continued   use  of  the  program   requires registration   with 
       United Innovations Plus.

       The   Registered version of Poker Slot has added  features   for  
       users that  register their copy by filling out the  Registration  
       Form and sending in the required registration fee.
       
       The  following  documentation for Poker Slot  explains  all  the 
       features  for  the Registered version.   The  words  "Registered 
       Version  Only" may  appear  throughout the documentation.  These 
       are  the  added features in the Registered version.  


                                  POKER SLOT

       Video  Poker  Slot  is widely  played  throughout  the  gambling 
       casinos  found in Nevada and New Jersey.  Playing one  of  these 
       slot  machines  is easy.  You should have a knowledge  of  poker 
       before playing.

       The  object  of  the game is to get a poker hand  of  Jack's  or 
       better  before  you  can win any money.  You will  be  paid  off 
       depending  on  your hand.  The better the hand, the  more  money 
       you'll win.  

       Just  like  the real Poker Slot machine, you must  first  insert 
       some money.  You'll be playing a dollar Poker Slot, so each coin 
       will be worth one dollar.  You may insert any amount from $1  to 
       $5  into the Poker Slot machine.  Once you've placed your  coins 
       into the machine, you will be ready to deal a hand.


                             STARTING POKER SLOT

       From  your  DOS prompt, type PSLOT and press the ENTER  key.  In 
       order   for  Poker  Slot to run, you must  be  logged  onto  the   
       directory where  PSLOT.EXE resides.  Poker Slot must be able  to 
       locate  the  files PSLIB01.INF,  PSLIB02.INF,   PSLIB03.INF  and 
       PSLIB04.INF.


                           LOCATING THE .INF FILES

       If  you are using two disks to play Poker Slot, you  must  start 
       the  game  by typing PSLOT A or PSLOT B.  This will  tell  Poker 
       Slot where to look for the 4 required .INF files.  The following 
       are examples for starting Poker Slot:


                                    - 2 -








          Typing from your                  Explanation
             DOS prompt

               PSLOT               Use mouse, INF files on current
                                   drive or directory

               PSLOT K             Use keyboard, INF files on current
                                   drive or directory

               PSLOT A             Use mouse, INF files on drive A

        PSLOT KB or PSLOT BK       Use keyboard, INF files on drive B


       You  may either play Poker Slot with a mouse or  your  keyboard.  
       When  starting  Poker Slot by typing  PSLOT,  you  automatically 
       default  to  mouse usage.  If Poker Slot has  trouble  detecting 
       your  mouse or your mouse driver is not installed, you  will  be 
       dropped  into  the keyboard mode.

       The  first  screen you see will be the boot screen.   This  will 
       display  the copyright notice and version number  of  PSlot.   A 
       message will be displayed on the bottom of the screen asking you 
       to either press a mouse button or the ENTER key.

       The next screen you see will be the Poker Slot layout.  You will  
       be playing Poker Slot from this screen.


                              PLAYING POKER SLOT

       The Poker Slot layout will resemble a Video Poker Slot  machine.  
       Before playing, you must insert from $1 to $5 into the  machine.  
       Once this is done, you must deal the cards by pressing the  Deal 
       button.   Once the hand has been dealt, you select which of  the 
       five  cards you wish to hold.  Press the Deal button  again  and 
       the cards not being held are discarded.  They are then  replaced 
       with new cards from the deck.

       NOTE:  Always be sure to press the Hold button on the cards  you 
       wish to hold before pressing the Deal button again.  If this  is 
       not done, you could lose on a good hand that was dealt pat.

       On  the Poker Slot layout, you will see either 10 or  12  yellow 
       buttons.   The game is played by selecting one of  the  buttons.  


                              USING THE KEYBOARD

       To press one of the buttons when using the keyboard, you will be 
       pressing on the key that represents the button you select.  If a 
       button  does  not  display a number or function  key,  you  must 
       select  that button by pressing the first letter that  describes 
       the button you wish to push.



                                    - 3 -








                                USING A MOUSE

       When using a mouse to play Poker Slot, move the mouse cursor  to 
       the yellow button of your choice, and press either mouse button.  
       While  in  the  mouse  mode, you will not be  able  to  use  the 
       keyboard.


                             BUTTON DESCRIPTIONS

       The following will explain the buttons and their function:

                                 Hold Buttons
                            (Numbers 1 through 5)

       The  Hold  buttons  will  only work once  you  deal  the  cards.  
       Selecting  a Hold button will mark the card as being  held.   If 
       you change your mind, select the same button and the marker will 
       be turned off.  If you are dealt a pat hand, you must press each 
       Hold button before dealing the next round of cards.  

                              Insert Coin Button
                                     (I)

       Before dealing a hand of poker, you must first insert from 1  to 
       5 coins into the machine.  Pressing the Insert Coin button  will 
       insert one coin each time the button is pressed.  If you  insert 
       the  maximum  allowable  coins of 5, the  cards  will  be  dealt 
       automatically.

                              Max. Coins Button
                                     (M)

       Pressing the Max. Coins button will insert the maximum amount of 
       coins   into  the  machine.   The  cards  will  be  then   dealt 
       automatically.  If you have already used the Insert Coin button, 
       you  may  still  use the Max. Coins  button.   Doing  this  will 
       continue  inserting coins until the maximum amount of coins  are 
       placed  into  the machine.  Four coin maximum on  the  ShareWare 
       version.

                                 Deal Button
                                     (F1) 

       Pressing  the Deal button will deal the cards.  Remember,  coins 
       must  first  be  inserted into the machine before  you  will  be 
       allowed  to  use  the Deal button.  Once the  cards  are  dealt, 
       select the cards you wish to hold (see Hold Buttons), then press 
       the Deal button again.

                    Reset Button (Registered Version Only)
                                     (R)

       Pressing  the Reset button will reset the Counter, Hands  Played 
       and  Hits back to zero.  The Counter, Hands Played and Hits  are 
       explained  later.  You will be asked to verify this  before  the 
       reset takes place.
                                    - 4 -








                                  Pat Button
                                     (P)

       This  button  will  only appear if you are  dealt  a  pat  hand.  
       Pressing  this button will act like the Hold buttons, except  it 
       will mark or un-mark all the cards at one time.  You may wish to 
       use this instead of pressing all 5 hold buttons.

                                 Quit Button
                                    (F10)

       When  you  press the Quit button, you will return  to  your  DOS 
       prompt.  You cannot quit playing until you have finished playing 
       the  hand.  IE:  You've pressed the Deal button once and  decide 
       to  quit before holding any cards.  You haven't  completed  that 
       hand.  You must press the Deal button again.

                                 Setup Button
                                     (F3)

       Selecting this option will allow Registered users to change  the 
       current settings of Poker Slot (See Setup Options).

                   Scores Button (Registered Version Only)
                                     (F8)

       Selecting  this option will allow Registered users to  view  the 
       top fifteen high scores or the top fifteen low scores (See  High 
       Scores).


                  PROGRESSIVE POT (Registered Version Only)

       Each  time the Insert Coin button is pressed, .10 cents will  be 
       added to the Progressive Pot.  This will be displayed at the top 
       of the Poker Slot machine.  In order to win the Progressive Pot, 
       you  must  have the best possible poker hand  with  the  maximum 
       coins inserted into the machine.  If you happen to be one of the 
       lucky  ones that gets a Royal Flush, your payoff will  be  $4000 
       plus  the Progressive Pot if you have inserted 5  coins.   NOTE:  
       You cannot win the Progressive Pot when play Double Down Poker.

                                   CREDITS

       Each  time you place a coin into the machine, your credits  will 
       decrease by one.  When you win with one of the 9 possible  types 
       of  poker hands, your credits will increase.  Your credits  will 
       be shown above the Deal and Quit buttons.   Each time you  start 
       Poker Slot from your DOS prompt, your credits will be zero.


                                   COUNTER

       The counter will display the total amount of coins inserted into 
       the  machine.  The Registered Version will keep a running  total 
       of  the coins.  The ShareWare version will always start zero.

                                    - 5 -









                                 HANDS PLAYED

       The  total  amount of hands played will be displayed  below  the 
       Counter.   If you were to always insert one coin per hand,  both 
       the  Counter  and Hands Played figures would be the  same.   The 
       Registered  Version  will  keep a running  total  of  the  hands 
       played.  The ShareWare version will always start at zero.


                                  HANDS HIT

       The right side of your screen will show a tally of the types  of 
       poker hands you have made.  Each time you make a poker hand that 
       is  payable, the corresponding hand will increase by  one.   The 
       Registered Version will keep a running count of these hits.  The 
       ShareWare Version will always start at zero.


                                    SETUP
                                     (F3)       

             Selecting Setup will bring up the following options:

                        1  Sound                   On
                        2  Save High Scores       Off
                        3  Second Chance Poker    Off
                        4  Joker Wild Poker       Off 
                        5  Deuces Wild Poker      Off
                        6  Double Down Poker      Off
                        7  Quit

           NOTE: Options 1 & 2 are omitted on the ShareWare version

                    SETUP OPTIONS (Registered Users Only )
            
                                    Sound
                                     (1)

       This will allow you to turn the sound on or off.

                               Save High Scores
                                     (2)

       Your  credits may be saved to disk if this option is set to  ON. 
       If  this  option is set to ON, you will be asked for  your  name 
       when you have finished playing Poker Slot , assuming your  score 
       qualifies  for the top high 15 or top low 15 scores.   Once  you   
       have  entered your   name,  you  will not have to enter it again  
       when asked, just press  the ENTER key.


                             Second Chance Poker
                                     (3)

       Selecting this option will allow you to change from the standard 
       Jack's  or Better Poker to Second Chance Poker.  This is  played 

                                    - 6 -








       the  same  as Jack's or Better.  The difference is,  you  get  a 
       second  chance to improve your hand as long as you  are  drawing 
       one  card to a pat hand.  An example would be that you drew  two 
       cards for a straight and missed but now have a one card draw  to 
       the  same  straight.   You will be asked if you  want  a  second 
       chance.   If you do, you may press the Deal button or press  the 
       Quit button if you do not wish to have a second chance.


                               Joker Wild Poker
                                     (4)

       Selecting  this option will allow you to play Joker Wild  Poker.  
       The Joker will be wild for Aces, Straights & Flushes ONLY.   You 
       cannot use the Joker for anything other than that.  When playing 
       Joker  Wild, you will be able to get 5 of a kind in  Aces.   The 
       payoff will be the same as is a Royal Flush.


                              Deuces Wild Poker
                                     (5)

       Selecting  this option will allow you to change to  Deuces  Wild 
       Poker.   All  Deuces are wild and may be used  for  anything  to 
       improve  your  hand.   The payoff rate for this  game  will  not 
       include a pair.  You must have at least two pair before you  are 
       paid off.


                              Double Down Poker
                                     (6)

       Selecting this option will change the game to Double Down Poker.  
       This is played identical to the standard Jack's or Better  game.  
       Whenever  you  have  a  winning hand,  you  will  be  given  the 
       opportuninty  to  double your winnings.

       After  the draw and assuming you are to paid on a winning  hand, 
       you  will be asked if you wish to Double Down.  A "NO"  response 
       will  credit  you with whatever amount you have coming  for  the 
       previously  played  hand.  A "YES" response will  reshuffle  the 
       cards  and deal out 5 cards face down.  The first card  will  be 
       turned face up.  This card is the computers card.  You must  now 
       select  one of the four remaining cards and beat  the  computers 
       card   in   order  for  you to win.   A  card  less   than   the 
       computers  card  counts as a loss and nothing is added  to  your 
       credits.   If  you  beat the computers  card,  you  double  your 
       payoff.  If a tie occurs, the process is repeated until a win or 
       loss occurs.

       After winning a Double Down, you again will be asked if you wish 
       to  Double  Down.  Play continues in this manner  until  you  no 
       longer  wish to double down, or your winning Double Down  payoff 
       reaches the maximum of $1O,OOO.

       If  you do not have a winning hand, the Double Down  feature  is 

                                    - 7 -








       ignored and play continues.

       NOTE:  The ShareWare version will only allow you to Double  Down 
       one time.

                                     Quit
                                     (7)

       Selecting  this  option  will remove the Setup  Menu  from  your 
       screen and return you to the Poker Slot game.


                    HIGH SCORES (Registered Version Only)
                                     (F8)

       The Registered version of Poker Slot will allow the user to save 
       the  high  and low scores to disk.  By selecting   "Scores" from  
       your  Poker  Slot  layout , you will be able to  view  the   top 
       fifteen players and their scores.

       The first column of the top scores will display two letters that 
       describe  the  game  you were last playing when  the  score  was 
       recorded.  The following is a list of the letters that  describe 
       the game:

                          2s - Deuces Wild Poker
                          DD - Double Down Poker
                          JK - Joker Wild Poker
                          SC - Second Chance Poker
                          Js - Jacks or Better Poker

       The  top  portion  of the High Score  screen  will  display  two 
       additional buttons or options.  On the right side you will see a 
       button marked "Clear Score".   Selecting this button will  clear 
       the high scores only and allow you to start over.

       The top left portion of the screen will display the button  "See 
       Low".   Selecting this button will allow you to view the top  15 
       lowest scores.  Selecting the Clear Score button will clear  the 
       top lowest 15 scores.

       To leave the high score screen, press either mouse button if you 
       are  using  a mouse.  Press the ENTER key if you are  using  the 
       keyboard.  To select one of the buttons move the mouse cursor to 
       the button of your choice and press either mouse button.   Using 
       a keyboard, press the letter H to change to high scores.   Press 
       the  letter  L to change to low scores.  Press the letter  C  to 
       clear the scores.









                                    - 8 -








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
         



























                                    - 9 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                                  POKER SLOT            
                          Version 2.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______
       If you have previously registered any program
       with United Innovations Plus, deduct $5.OO               _______  
       ShareWare Versions      ( ) 5 1/4"  ( ) 3 1/2"   $1O.OO  _______
         (Other Games)   
                                   Foreign orders add   $ 5.OO  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


               Where did you acquire this version of Poker Slot

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


        For our records, please indicate your systems display adapter.

       ___MONO    ___CGA    ___EGA    ___VGA       Mouse ___Yes   ___No



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21O81
                                        Castro Valley, CA 94546

                                    - 10 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2737

     Volume in drive A has no label
     Directory of A:\

    PINSTALL EXE      9344   2-15-91   2:00a
    PSHD               471   2-15-91   2:00a
    PSINTRO            777   2-15-91   2:00a
    PSLOT    DOC     29813   2-15-91   2:00a
    PSLOT    EXE    111008   2-15-91   2:00a
    PSPRT              221   2-15-91   2:00a
    PSREAD   COM      4200   2-15-91   2:00a
    PSREG             2015   2-15-91   2:00a
    PSREPLY  COM        14   2-15-91   2:00a
    PSSTART  BAT       723   2-15-91   2:00a
    GO       BAT        29   8-07-91   1:19a
    FILE2737 TXT      1999   8-07-91   4:01p
    GO       TXT       848   8-07-91   1:22a
           13 file(s)     161462 bytes
                          153600 bytes free
