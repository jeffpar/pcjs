---
layout: page
title: "PC-SIG Diskette Library (Disk #2759)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2759/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2759"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2759.TXT

{% raw %}
```
Disk No: 2759
Disk Title: Thinking Man's Solitaire 1 of 2 (2760)
PC-SIG Version: S1

Program Title: Thinking Man's Solitaire
Author Version: 1.00
Author Registration: $18.00
Special Requirements: 491K RAM and EGA.

Are you familiar with the standard Solitaire game that builds a stack of
cards from Ace to King?  It's not so hard, especially if you don't have
to stick to one suit.  THINKING MAN'S SOLITAIRE presents a new twist:
the order isn't as simple as Ace, 2, 3.  In fact, you build four
different stacks, each in a different order.  Have trouble remembering
what card comes next?  Ask THINKING MAN'S SOLITAIRE to keep the order
posted on your screen.

The documentation on the disk makes it easy to get started.  Watch the
colorful deck magically shuffle three times, cut, and stack.  Deal the
cards one by one, and see each one move to the stack you designate as
your score mounts.  If you have a mouse, you may use it.  Otherwise, the
keyboard does just fine.  The hardest part of this entertaining game is
stopping.

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
║   <<<<  PC-SIG Disk #2759 THINKING MAN'S SOLITAIRE disk 1 of 2 >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install the program, view or print documentation, type: TMSTART      ║
║                                                                         ║
║ To finish installing, insert disk 2 and type: INSTALL (press Enter)     ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TMS.DOC

{% raw %}
```






















                           THINKING MAN'S SOLITAIRE
                                 Version 1.OO


                                 EGA Required


                              (C) Copyright 1990

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


        TRADEMARKS  ................................................. 1

        PROGRAMS ON DISK ............................................ 1

        PROGRAM REQUIREMENTS ........................................ 1

        USING A MOUSE ............................................... 2

        THINKING MAN'S SOLITAIRE .................................... 2

        PLAYING RULES ............................................... 2

             Base Pile Sequence ..................................... 2

        STARTING THINKING MAN'S SOLITAIRE ........................... 3

        MAIN MENU ................................................... 3

        SELECTING OPTIONS ........................................... 3

        MAIN OPTIONS ................................................ 4

             F1 (Play TMS) .......................................... 4

             F3 (Setup Menu) ........................................ 4

             F8 (High Scores) ....................................... 4

             F10 (Quit to DOS) ...................................... 4

        PLAY MENU ................................................... 4

        PLAY OPTIONS ................................................ 4

          Keyboard .................................................. 4

             Arrows (Move Card Pointer) ............................. 4

             D (Deal Card to Waste) ................................. 5

             W (Place Waste Card at Pointer) ........................ 5

             S (Place Stock Card on Base) ........................... 5

             F10 (Quit/Return to Main Options) ...................... 5

          Mouse ..................................................... 5

        SETUP MENU .................................................. 6





                                    - i -








        SETUP OPTIONS ............................................... 6

             1  (Show Shuffling) .................................... 6

             2  (Show Card Movement) ................................ 6

             3  (Card Speed) ........................................ 6

             4  (Sound) ............................................. 6

             5  (Input Device) ...................................... 6

             6  (Display Help)  ..................................... 7

             7  (Save High Scores) .................................. 7

             8  (Select Card Colors) ................................ 7

             9  (Quit/Return to Main Options)  ...................... 7

        SCORING ..................................................... 7

        SHAREWARE VERSION ........................................... 7

        OTHER PROGRAMS .............................................. 8

             CASINO/GAMBLING GAMES .................................. 8

             SOLITAIRE GAMES ........................................ 8

             OTHER GAMES ............................................ 8

        UTILITIES ................................................... 8

        REGISTRATION FORM ........................................... 9






















                                    - ii -








                                  TRADEMARKS

       "Microsoft" is a trademark of Microsoft Corporation

       "Mouse Systems" is a trademark of Mouse Systems Corporation



                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Tms     .Exe - The main program for Thinking  Man's Solitaire.
         TmsDat1 .Inf - Graphics file required by Tms.Exe.
         TmsDat2 .Inf - Graphics file required by Tms.Exe.
         Tms     .Doc - The documentation for Thinking Man's Solitaire.
         TmStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Thinking Man's
                        Solitaire on a Hard Drive.
         TmRead  .Com - Used by TmStart.Bat
         TmReply .Com - Used by TmStart.Bat
         TmIntro      - Used by TmStart.Bat
         TmPrt        - Used by TmStart.Bat
         TmHd         - Used by TmStart.Bat
         TmReg        - Registration Form
         Tms1S  .Arc  - Shareware Version of Thinking Man's Solitaire.


                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       491K   of  free  Ram and  an  EGA   graphics  adapter  to   play 
       Thinking Man's Solitaire.  The files required  to play  Thinking 
       Man's Solitaire are TMS.EXE, TMSDAT1.INF and TMSDAT2.INF.  These 
       files  must be present  on  your play disk or  directory.    Use  
       the "Copy"  command found in your  DOS  manual for making copies 
       from  one disk to another.  A hard disk is recommended  but  not 
       required.
















                                    - 1 -








                                USING A MOUSE

       If you have a MicroSoft mouse or TRUE compatible with the LATEST 
       mouse driver, you should have no problems using your mouse  with 
       Thinking Man's Solitaire.

       If  you are using a Mouse Systems mouse, you obtain  the  latest 
       driver from:

                          Mouse Systems Corporation
                            47505 Seabridge Drive
                              Fremont, CA  94538
                                (415) 656-1117

       NOTE:    If  you  decide  to use a  mouse  with  Thinking  Man's 
       Solitaire and  the computer  locks up or you are unable to  make 
       the  mouse   function properly,  USE  THE   KEYBOARD  until  you 
       acquire the  latest  mouse driver for your mouse.


                           THINKING MAN'S SOLITAIRE

       The  game begins by removing four cards from the deck,  an  Ace, 
       Deuce,  Three  and Four, regardless of their suits.   These  are 
       your  starting  base cards.  The A, 2, 3 and 4 are placed  in  a 
       row, face up, on the top portion of your playing area. 

       The remaining 48 cards are then shuffled and placed face down on 
       the table, leaving enough room for an additional card below each 
       of the four base cards.  These will be your stock piles.

       The  player  then removes one card from the deck and  places  it 
       face  up on a waste pile to right side of the deck.  The  player 
       now examines the card and makes a decision on where to play  the 
       card.   Play continues in this manner until the game  is  either 
       won or there are no other legal plays left.


                                PLAYING RULES

       The object is to build upon each starting Base card in  sequence 
       to  the King.  Playing cards on the bases are done  in  sequence 
       regardless  of  suits.   The following are  the  guidelines  for 
       building on Bases:

                              Base Pile Sequence

             The Ace Pile plays   : A,2,3,4,5,6,7,8,9,10,J,Q,K
         
             The Deuce Pile plays : 2,4,6,8,10,Q,A,3,5,7,9,J,K

             The Three Pile plays : 3,6,9,Q,2,5,8,J,A,4,7,10,K

             The Four Pile plays  : 4,8,Q,3,7,J,2,6,10,A,5,9,K



                                    - 2 -








       A  card dealt from the deck is temporarily placed on  the  Waste 
       pile.   Top  card of the Waste pile may be placed on  any  Stock 
       pile  at any time.  The maximum cards that may be placed on  any 
       Stock  pile is 13.  

       The  top card of the Waste pile may also be played on  any  Base 
       pile so long as that card is in the proper sequence for the Base 
       pile it is being placed on (See Base Pile Sequence above).

       A  Stock card may only be placed on its corresponding  top  Base 
       pile (vertically).  IE: Stock pile #1 plays only to Base pile #1 
       (starting  card Ace).  Stock pile #2 plays only to Base pile  #2 
       (starting card Deuce), etc.

       If  a player rejects one of those first eight  playing  options, 
       the  card  remains on the Waste pile and another card  is  dealt 
       from the deck.

       Thinking Man's Solitaire will require some thinking man!


                      STARTING THINKING MAN'S SOLITAIRE

       From  your DOS prompt, type TMS and press the ENTER key.   In  a 
       few seconds you will see the copyright screen appear. The bottom 
       of  the screen will display a message letting you know that  the 
       required images are being loaded from disk.  Once the images are 
       loaded,  the message will change and ask you to press the  ENTER 
       key or a mouse button to continue with the game.

       The next screen you see will be the main playing area.  The left 
       side of your screen will be the playing area and the right  side 
       will display your current options and game statistics.


                                  MAIN MENU

              The Main Menu will display the following options:

                               F1   Play TMS
                               F3   Setup Menu
                               F8   High Scores
                               F10  Quit to DOS
       
                              SELECTING OPTIONS

       If you are using the keyboard, pressing the Function key to  the 
       left of the menu description will activate that function.

       If  you  are  using  a mouse, you will  see  a  rectangular  box 
       outlining  one of the options.  Moving the mouse will  move  the 
       box  to another option.  Pressing one of the mouse buttons  will 
       activate the function within the rectangular box.




                                    - 3 -








                                 MAIN OPTIONS

                                F1 (Play TMS)

       Function 1 or the ENTER key will start the game.  When  starting 
       a  game, this menu of options will change to Play  Options  (See 
       Play Options).

                               F3 (Setup Menu)

       Function  3 will display a new set of  options.  The Setup  Menu 
       is   where   you  can change  the current settings  of  Thinking 
       Man's Solitaire (See Setup Options).

                               F8 (High Scores)

       Function  8  will  display the top fifteen  high  scores.   High 
       scores  may be saved with the Registered version only (See  High 
       Scores).

  
                              F10 (Quit to DOS)

       Function 10 key will return you to your DOS prompt from the Main 
       Options only.


                                  PLAY MENU

       Selecting Play TMS from the Main Options will bring up the  Play 
       Options Menu.  The cards will be shuffled and the starting  Base 
       cards  will  be dealt out.  The following Play Options  will  be 
       shown for keyboard play:

                    Arrows  Move Card Pointer
                       D    Deal Card to Waste
                       W    Place Waste Card at Pointer
                       S    Place Stock Card on Base
                      F10   Quit/Return to Main Options


                                 PLAY OPTIONS

                                  (Keyboard)

                          Arrows (Move Card Pointer)

       Moving  your arrow keys will move a pointer from the eight  card 
       playing  positions; the four Base positions and the  four  Stock 
       positions.   This pointer should be moved to the position  where 
       you  want  to  place a card or move a  card  from  that  pointer 
       position.





                                    - 4 -








                            D (Deal Card to Waste)

       When pressing the letter D, the top card of the undealt  portion 
       of the deck will be dealt to the Waste pile, face up.

                       W (Place Waste Card at Pointer)

       When pressing the letter W, the top card of the Waste pile  will 
       be moved to the pointer location if it is a valid move.  If your 
       pointer  is pointing to a Stock card position and if  there  are 
       less  than 13 cards in that Stock pack, the Waste card  will  be 
       moved  that  Stock pile.  To move the Waste card to one  of  the 
       Base  piles, place your pointer on the Base pile you  wish  that 
       card to go to and press the letter W.  The Waste card will  move 
       to that Base pile.

                         S (Place Stock Card on Base)

       When  pressing  the  letter  S, whichever Stock  pile  is  in  a 
       vertical line with the pointer, the top Stock card will be moved 
       to  its appropriate Base pile.  The pointer may be on  the  Base 
       pile or Stock pile when moving a Stock card to a Base pile.  The 
       reason  for  this  is  because a Stock card  may  only  move  up 
       vertically to its corresponding Base pile.

                      F10 (Quit/Return to Main Options)

       When pressing the Function 10 key, the playing of the game  will 
       end  and  you will be returned to your Main Options.   You  will 
       also  be  returned to the Main Options if you  have  beaten  the 
       game.

                                   (Mouse)

       When  playing Thinking Man's Solitaire with a mouse,  just  move 
       your mouse cursor to the Deck and press the Left Button to  move 
       the Deck card to the Waste pile.  

       Place your mouse cursor on one of the Stock piles and press  the 
       Left  Button and your Stock card will be moved to the Base  pile 
       above  your  cursor.   

       To move the Waste card, move the mouse cursor to the Waste  pile 
       and  press the Left Button.  Now move your mouse cursor  to  the 
       Stock pile or Base pile where you want the Waste card placed and 
       again, press the Left Button.

       To  quit playing the game and return to the Main Options,  press 
       the Right Button.
       







                                    - 5 -








                                  SETUP MENU
       
       Pressing  Function  3 from the Main Options will  bring  up  the 
       Setup Menu.  Your screen will display the following:

                      1  Show Shuffling              On
                      2  Show Card Movement          On
                      3  Card Speed                   0
                      4  Sound                       On
                      5  Input Device          Keyboard
                      6  Display Help               Off
                      7  Save High Scores           Off
                      8  Select Card Colors    
                      9  Quit/Return to Main Options


                                SETUP OPTIONS
       
       To  change  any  of  the  default  settings,  press  the  number 
       corresponding  to  the option description.  If you are  using  a 
       mouse,  select  the  option  as  described  under  Play  Options 
       (Mouse).

                             1  (Show Shuffling)

       To view the shuffling of the deck, set this option to On.  When
       set to Off, the shuffling will not be seen.

                           2  (Show Card Movement)

       To view the movement of the cards from one location to  another, 
       set this option to On.  When set to Off, card movement will  not 
       be seen.

                               3  (Card Speed)

       You  may  set the speed of the card movement with  this  option.  
       The  smaller  the  number, the faster the  card  movement.   The 
       minimum  setting is 0 and the maximum setting is 20.   The  card 
       movement  speed  will  depend  largely  on  the  speed  of  your 
       computer.  You cannot set the card movement speed unless  option 
       2 above is set to On.

                                  4  (Sound)                   

       Selecting the Sound option will toggle the sound off and on.

                              5  (Input Device)            

       You Input Device will either be Keyboard or Mouse.  The  default 
       setting  is  Keyboard.  Selecting this option will  toggle  from 
       Keyboard to Mouse.





                                    - 6 -








                              6  (Display Help)

       If  you are not familiar with Thinking Man's Solitaire, you  may 
       wish to set this option to On.  When set to On, the next card to 
       be played on a Base pile will be shown above each Base pile.  To 
       also  help  you become more familiar with the sequence  of  each 
       Base  pile, the sequence for the Base pile will be  shown  above 
       the  playing area.  The Base pile sequence shown will depend  on 
       the position of your pointer or mouse cursor.

                            7  (Save High Scores)

       Your  scoring may be saved to disk if this option is set to  On. 
       If  this  option is set to On, you will be asked for  your  name 
       when  you  have finished playing, assuming your  score  is  high 
       enough for the top 15 scores.  Once you have entered your  name, 
       you  will not have to enter it again when asked, just press  the 
       ENTER key.

                           8  (Select Card Colors)    

       Choosing  this option will allow you to select a different  card 
       color.  The color of the cards will only effect the card backs.

                       9  (Quit/Return to Main Options)

       To  leave the Setup Menu, press the number 9 key.  You may  also 
       exit  this  menu  by pressing either the ESC or  F10  key.   Any 
       options  that  have been changed will be saved to  disk  in  the 
       Registered version of Thinking Man's Solitaire only.


                                   SCORING

       The scoring of Thinking Man's Solitaire will give you 10  points 
       for  each  card in the Base piles.  Seeing that the  first  four 
       Base  cards are dealt out for you, your score will start  at  40 
       points.  When you have beaten the game your final score will  be 
       52 cards multiplied by 10 for a total of 520 points.

       If  you are using the "Display Help" from the Setup  Menu,  your 
       score  will be deducted by 2 points for each move you  make.   A 
       card  dealt off the Deck to the Waste pile is not  considered  a 
       move.  A move will be counted only when a card is moved from the 
       Waste pile or from the Stock pile.


                              SHAREWARE VERSION

       The   ShareWare   version   of Thinking Man's Solitaire will not 
       save  high  scores  or game statistics.  These  have  been  left 
       available for Registered users only.
          




                                    - 7 -








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
        *Accordion             Baker (VGA Only)        *Golf
         Thinking Man's (EGA)

                                 OTHER GAMES

        *SuJu                 Jigsaw Mania (VGA Only)  *Pig
         Peg (VGA Only)       Fifteen

       

                                  UTILITIES

         DCS               EU               Kill               DX           
         CDate             JMSC (VGA Only)


























                                    - 8 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                           THINKING MAN'S SOLITAIRE
                          Version 1.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $18.OO  _______
       27 ShareWare Versions   ( ) 5 1/4"  ( ) 3 1/2"   $1O.OO  _______
            
                                 Foreign orders add     $ 5.00  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


        Where did you acquire this version of Thinking Man's Solitaire

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


        For our records, please indicate your systems display adapter.

                    ___MONO    ___CGA    ___EGA    ___VGA



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546



                                    - 9 -





```
{% endraw %}

## TMS.DOC

{% raw %}
```






















                           THINKING MAN'S SOLITAIRE
                                 Version 1.OO


                                 EGA Required


                              (C) Copyright 1990

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


        TRADEMARKS  ................................................. 1

        PROGRAMS ON DISK ............................................ 1

        PROGRAM REQUIREMENTS ........................................ 1

        USING A MOUSE ............................................... 2

        THINKING MAN'S SOLITAIRE .................................... 2

        PLAYING RULES ............................................... 2

             Base Pile Sequence ..................................... 2

        STARTING THINKING MAN'S SOLITAIRE ........................... 3

        MAIN MENU ................................................... 3

        SELECTING OPTIONS ........................................... 3

        MAIN OPTIONS ................................................ 4

             F1 (Play TMS) .......................................... 4

             F3 (Setup Menu) ........................................ 4

             F8 (High Scores) ....................................... 4

             F10 (Quit to DOS) ...................................... 4

        PLAY MENU ................................................... 4

        PLAY OPTIONS ................................................ 4

          Keyboard .................................................. 4

             Arrows (Move Card Pointer) ............................. 4

             D (Deal Card to Waste) ................................. 5

             W (Place Waste Card at Pointer) ........................ 5

             S (Place Stock Card on Base) ........................... 5

             F10 (Quit/Return to Main Options) ...................... 5

          Mouse ..................................................... 5

        SETUP MENU .................................................. 6





                                    - i -








        SETUP OPTIONS ............................................... 6

             1  (Show Shuffling) .................................... 6

             2  (Show Card Movement) ................................ 6

             3  (Card Speed) ........................................ 6

             4  (Sound) ............................................. 6

             5  (Input Device) ...................................... 6

             6  (Display Help)  ..................................... 7

             7  (Save High Scores) .................................. 7

             8  (Select Card Colors) ................................ 7

             9  (Quit/Return to Main Options)  ...................... 7

        SCORING ..................................................... 7

        SHAREWARE VERSION ........................................... 7

        OTHER PROGRAMS .............................................. 8

             CASINO/GAMBLING GAMES .................................. 8

             SOLITAIRE GAMES ........................................ 8

             OTHER GAMES ............................................ 8

        UTILITIES ................................................... 8

        REGISTRATION FORM ........................................... 9






















                                    - ii -








                                  TRADEMARKS

       "Microsoft" is a trademark of Microsoft Corporation

       "Mouse Systems" is a trademark of Mouse Systems Corporation



                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Tms     .Exe - The main program for Thinking  Man's Solitaire.
         TmsDat1 .Inf - Graphics file required by Tms.Exe.
         TmsDat2 .Inf - Graphics file required by Tms.Exe.
         Tms     .Doc - The documentation for Thinking Man's Solitaire.
         TmStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Thinking Man's
                        Solitaire on a Hard Drive.
         TmRead  .Com - Used by TmStart.Bat
         TmReply .Com - Used by TmStart.Bat
         TmIntro      - Used by TmStart.Bat
         TmPrt        - Used by TmStart.Bat
         TmHd         - Used by TmStart.Bat
         TmReg        - Registration Form
         Tms1S  .Arc  - Shareware Version of Thinking Man's Solitaire.


                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       491K   of  free  Ram and  an  EGA   graphics  adapter  to   play 
       Thinking Man's Solitaire.  The files required  to play  Thinking 
       Man's Solitaire are TMS.EXE, TMSDAT1.INF and TMSDAT2.INF.  These 
       files  must be present  on  your play disk or  directory.    Use  
       the "Copy"  command found in your  DOS  manual for making copies 
       from  one disk to another.  A hard disk is recommended  but  not 
       required.
















                                    - 1 -








                                USING A MOUSE

       If you have a MicroSoft mouse or TRUE compatible with the LATEST 
       mouse driver, you should have no problems using your mouse  with 
       Thinking Man's Solitaire.

       If  you are using a Mouse Systems mouse, you obtain  the  latest 
       driver from:

                          Mouse Systems Corporation
                            47505 Seabridge Drive
                              Fremont, CA  94538
                                (415) 656-1117

       NOTE:    If  you  decide  to use a  mouse  with  Thinking  Man's 
       Solitaire and  the computer  locks up or you are unable to  make 
       the  mouse   function properly,  USE  THE   KEYBOARD  until  you 
       acquire the  latest  mouse driver for your mouse.


                           THINKING MAN'S SOLITAIRE

       The  game begins by removing four cards from the deck,  an  Ace, 
       Deuce,  Three  and Four, regardless of their suits.   These  are 
       your  starting  base cards.  The A, 2, 3 and 4 are placed  in  a 
       row, face up, on the top portion of your playing area. 

       The remaining 48 cards are then shuffled and placed face down on 
       the table, leaving enough room for an additional card below each 
       of the four base cards.  These will be your stock piles.

       The  player  then removes one card from the deck and  places  it 
       face  up on a waste pile to right side of the deck.  The  player 
       now examines the card and makes a decision on where to play  the 
       card.   Play continues in this manner until the game  is  either 
       won or there are no other legal plays left.


                                PLAYING RULES

       The object is to build upon each starting Base card in  sequence 
       to  the King.  Playing cards on the bases are done  in  sequence 
       regardless  of  suits.   The following are  the  guidelines  for 
       building on Bases:

                              Base Pile Sequence

             The Ace Pile plays   : A,2,3,4,5,6,7,8,9,10,J,Q,K
         
             The Deuce Pile plays : 2,4,6,8,10,Q,A,3,5,7,9,J,K

             The Three Pile plays : 3,6,9,Q,2,5,8,J,A,4,7,10,K

             The Four Pile plays  : 4,8,Q,3,7,J,2,6,10,A,5,9,K



                                    - 2 -








       A  card dealt from the deck is temporarily placed on  the  Waste 
       pile.   Top  card of the Waste pile may be placed on  any  Stock 
       pile  at any time.  The maximum cards that may be placed on  any 
       Stock  pile is 13.  

       The  top card of the Waste pile may also be played on  any  Base 
       pile so long as that card is in the proper sequence for the Base 
       pile it is being placed on (See Base Pile Sequence above).

       A  Stock card may only be placed on its corresponding  top  Base 
       pile (vertically).  IE: Stock pile #1 plays only to Base pile #1 
       (starting  card Ace).  Stock pile #2 plays only to Base pile  #2 
       (starting card Deuce), etc.

       If  a player rejects one of those first eight  playing  options, 
       the  card  remains on the Waste pile and another card  is  dealt 
       from the deck.

       Thinking Man's Solitaire will require some thinking man!


                      STARTING THINKING MAN'S SOLITAIRE

       From  your DOS prompt, type TMS and press the ENTER key.   In  a 
       few seconds you will see the copyright screen appear. The bottom 
       of  the screen will display a message letting you know that  the 
       required images are being loaded from disk.  Once the images are 
       loaded,  the message will change and ask you to press the  ENTER 
       key or a mouse button to continue with the game.

       The next screen you see will be the main playing area.  The left 
       side of your screen will be the playing area and the right  side 
       will display your current options and game statistics.


                                  MAIN MENU

              The Main Menu will display the following options:

                               F1   Play TMS
                               F3   Setup Menu
                               F8   High Scores
                               F10  Quit to DOS
       
                              SELECTING OPTIONS

       If you are using the keyboard, pressing the Function key to  the 
       left of the menu description will activate that function.

       If  you  are  using  a mouse, you will  see  a  rectangular  box 
       outlining  one of the options.  Moving the mouse will  move  the 
       box  to another option.  Pressing one of the mouse buttons  will 
       activate the function within the rectangular box.




                                    - 3 -








                                 MAIN OPTIONS

                                F1 (Play TMS)

       Function 1 or the ENTER key will start the game.  When  starting 
       a  game, this menu of options will change to Play  Options  (See 
       Play Options).

                               F3 (Setup Menu)

       Function  3 will display a new set of  options.  The Setup  Menu 
       is   where   you  can change  the current settings  of  Thinking 
       Man's Solitaire (See Setup Options).

                               F8 (High Scores)

       Function  8  will  display the top fifteen  high  scores.   High 
       scores  may be saved with the Registered version only (See  High 
       Scores).

  
                              F10 (Quit to DOS)

       Function 10 key will return you to your DOS prompt from the Main 
       Options only.


                                  PLAY MENU

       Selecting Play TMS from the Main Options will bring up the  Play 
       Options Menu.  The cards will be shuffled and the starting  Base 
       cards  will  be dealt out.  The following Play Options  will  be 
       shown for keyboard play:

                    Arrows  Move Card Pointer
                       D    Deal Card to Waste
                       W    Place Waste Card at Pointer
                       S    Place Stock Card on Base
                      F10   Quit/Return to Main Options


                                 PLAY OPTIONS

                                  (Keyboard)

                          Arrows (Move Card Pointer)

       Moving  your arrow keys will move a pointer from the eight  card 
       playing  positions; the four Base positions and the  four  Stock 
       positions.   This pointer should be moved to the position  where 
       you  want  to  place a card or move a  card  from  that  pointer 
       position.





                                    - 4 -








                            D (Deal Card to Waste)

       When pressing the letter D, the top card of the undealt  portion 
       of the deck will be dealt to the Waste pile, face up.

                       W (Place Waste Card at Pointer)

       When pressing the letter W, the top card of the Waste pile  will 
       be moved to the pointer location if it is a valid move.  If your 
       pointer  is pointing to a Stock card position and if  there  are 
       less  than 13 cards in that Stock pack, the Waste card  will  be 
       moved  that  Stock pile.  To move the Waste card to one  of  the 
       Base  piles, place your pointer on the Base pile you  wish  that 
       card to go to and press the letter W.  The Waste card will  move 
       to that Base pile.

                         S (Place Stock Card on Base)

       When  pressing  the  letter  S, whichever Stock  pile  is  in  a 
       vertical line with the pointer, the top Stock card will be moved 
       to  its appropriate Base pile.  The pointer may be on  the  Base 
       pile or Stock pile when moving a Stock card to a Base pile.  The 
       reason  for  this  is  because a Stock card  may  only  move  up 
       vertically to its corresponding Base pile.

                      F10 (Quit/Return to Main Options)

       When pressing the Function 10 key, the playing of the game  will 
       end  and  you will be returned to your Main Options.   You  will 
       also  be  returned to the Main Options if you  have  beaten  the 
       game.

                                   (Mouse)

       When  playing Thinking Man's Solitaire with a mouse,  just  move 
       your mouse cursor to the Deck and press the Left Button to  move 
       the Deck card to the Waste pile.  

       Place your mouse cursor on one of the Stock piles and press  the 
       Left  Button and your Stock card will be moved to the Base  pile 
       above  your  cursor.   

       To move the Waste card, move the mouse cursor to the Waste  pile 
       and  press the Left Button.  Now move your mouse cursor  to  the 
       Stock pile or Base pile where you want the Waste card placed and 
       again, press the Left Button.

       To  quit playing the game and return to the Main Options,  press 
       the Right Button.
       







                                    - 5 -








                                  SETUP MENU
       
       Pressing  Function  3 from the Main Options will  bring  up  the 
       Setup Menu.  Your screen will display the following:

                      1  Show Shuffling              On
                      2  Show Card Movement          On
                      3  Card Speed                   0
                      4  Sound                       On
                      5  Input Device          Keyboard
                      6  Display Help               Off
                      7  Save High Scores           Off
                      8  Select Card Colors    
                      9  Quit/Return to Main Options


                                SETUP OPTIONS
       
       To  change  any  of  the  default  settings,  press  the  number 
       corresponding  to  the option description.  If you are  using  a 
       mouse,  select  the  option  as  described  under  Play  Options 
       (Mouse).

                             1  (Show Shuffling)

       To view the shuffling of the deck, set this option to On.  When
       set to Off, the shuffling will not be seen.

                           2  (Show Card Movement)

       To view the movement of the cards from one location to  another, 
       set this option to On.  When set to Off, card movement will  not 
       be seen.

                               3  (Card Speed)

       You  may  set the speed of the card movement with  this  option.  
       The  smaller  the  number, the faster the  card  movement.   The 
       minimum  setting is 0 and the maximum setting is 20.   The  card 
       movement  speed  will  depend  largely  on  the  speed  of  your 
       computer.  You cannot set the card movement speed unless  option 
       2 above is set to On.

                                  4  (Sound)                   

       Selecting the Sound option will toggle the sound off and on.

                              5  (Input Device)            

       You Input Device will either be Keyboard or Mouse.  The  default 
       setting  is  Keyboard.  Selecting this option will  toggle  from 
       Keyboard to Mouse.





                                    - 6 -








                              6  (Display Help)

       If  you are not familiar with Thinking Man's Solitaire, you  may 
       wish to set this option to On.  When set to On, the next card to 
       be played on a Base pile will be shown above each Base pile.  To 
       also  help  you become more familiar with the sequence  of  each 
       Base  pile, the sequence for the Base pile will be  shown  above 
       the  playing area.  The Base pile sequence shown will depend  on 
       the position of your pointer or mouse cursor.

                            7  (Save High Scores)

       Your  scoring may be saved to disk if this option is set to  On. 
       If  this  option is set to On, you will be asked for  your  name 
       when  you  have finished playing, assuming your  score  is  high 
       enough for the top 15 scores.  Once you have entered your  name, 
       you  will not have to enter it again when asked, just press  the 
       ENTER key.

                           8  (Select Card Colors)    

       Choosing  this option will allow you to select a different  card 
       color.  The color of the cards will only effect the card backs.

                       9  (Quit/Return to Main Options)

       To  leave the Setup Menu, press the number 9 key.  You may  also 
       exit  this  menu  by pressing either the ESC or  F10  key.   Any 
       options  that  have been changed will be saved to  disk  in  the 
       Registered version of Thinking Man's Solitaire only.


                                   SCORING

       The scoring of Thinking Man's Solitaire will give you 10  points 
       for  each  card in the Base piles.  Seeing that the  first  four 
       Base  cards are dealt out for you, your score will start  at  40 
       points.  When you have beaten the game your final score will  be 
       52 cards multiplied by 10 for a total of 520 points.

       If  you are using the "Display Help" from the Setup  Menu,  your 
       score  will be deducted by 2 points for each move you  make.   A 
       card  dealt off the Deck to the Waste pile is not  considered  a 
       move.  A move will be counted only when a card is moved from the 
       Waste pile or from the Stock pile.


                              SHAREWARE VERSION

       The   ShareWare   version   of Thinking Man's Solitaire will not 
       save  high  scores  or game statistics.  These  have  been  left 
       available for Registered users only.
          




                                    - 7 -








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
        *Accordion             Baker (VGA Only)        *Golf
         Thinking Man's (EGA)

                                 OTHER GAMES

        *SuJu                 Jigsaw Mania (VGA Only)  *Pig
         Peg (VGA Only)       Fifteen

       

                                  UTILITIES

         DCS               EU               Kill               DX           
         CDate             JMSC (VGA Only)


























                                    - 8 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                           THINKING MAN'S SOLITAIRE
                          Version 1.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $18.OO  _______
       27 ShareWare Versions   ( ) 5 1/4"  ( ) 3 1/2"   $1O.OO  _______
            
                                 Foreign orders add     $ 5.00  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


        Where did you acquire this version of Thinking Man's Solitaire

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________


        For our records, please indicate your systems display adapter.

                    ___MONO    ___CGA    ___EGA    ___VGA



                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546



                                    - 9 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2759

     Volume in drive A has no label
     Directory of A:\

    TMHD               475   4-25-90   5:42p
    TMINTRO            659   4-25-90   5:42p
    TMPRT              221   4-25-90   5:42p
    TMREAD   COM      4200   4-25-90   5:42p
    TMREG             1865   4-25-90   5:42p
    TMREPLY  COM        14   4-25-90   5:42p
    TMS      DOC     25272   4-25-90   5:42p
    TMS      EXE     85824   4-25-90   5:42p
    TMSTART  BAT       781   4-25-90   5:42p
    TMS1S    ARC    194217   4-25-90   5:42p
    FILE2759 TXT      1157   8-07-91  12:33a
    GO       BAT        29   8-07-91  12:17a
    GO       TXT       848   8-07-91  12:25a
           13 file(s)     315562 bytes
                               0 bytes free
