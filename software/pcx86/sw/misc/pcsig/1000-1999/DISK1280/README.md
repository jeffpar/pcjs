---
layout: page
title: "PC-SIG Diskette Library (Disk #1280)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1280/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1280"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CARD GAME COLLECTION"

    Bring your own deck and cut!  Here's a lively collection of card games
    for your betting pleasure!
    
    Going to Vegas or Atlantic City?  Get in shape with Holdem Poker, the
    most popular card game in big casinos and card rooms across America.
    You play eight other players and start betting when you get two cards.
    The dealer displays three more cards which anyone can use.  After
    betting, two more cards are displayed.  This is a tough game and only
    the smart and the rugged survive.
    
    Accordion Solitaire brings the battle-weary a game for rainy Sunday
    afternoons when time is as unimportant as winning.  A gentle game with
    lots of instant gratification, it deals cards one by one.  If cards next
    to each other are of identical rank or suit, pile one atop the other.
    Likewise for those spaced three cards apart.  As the surf beats upon the
    shoals of Nirvana, you'll find your row of cards shrinking.  Using
    serene strategies, you might in this, or some future lifetime, get down
    to a single stack and win.
    
    Red Dog will delight any betting man or woman.  A computerized version
    of the old Acey Duecy game, it pits you against the house.
    Professionally drawn and swiftly moving, it deals a spread of two cards.
    Your goal: draw a card numerically between the spread of the two dealt
    cards.  You view a payoff table which tells you how much you will win if
    your draw is successful.  You can raise your bet once.
    
    Poker whizzes hone their betting skills on Poker Solitaire.  On the
    surface, it looks like a simple game.  Responding to cards dealt one at
    a time, you fill out a five card by five card square, trying to make the
    most points possible.  Runs, flushes and other poker hands are scored
    vertically and horizontally.  You compute your best odds in two
    directions at once as you decide where to place the next card.  The game
    moves fast; vibrant colors and designs enhance the screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACCORD.DOC

{% raw %}
```
























                             ACCORDION SOLITAIRE
                                  Ver. 1.01

                              CGA or Monochrome

                              (C) Copyright 1988

                                      by

                               Raymond M. Buti

                             All Rights Reserved


                           United Innovations Plus
                            Post Office Box 21081
                          Castro Valley, Ca.  94546



























                               Table of Contents


       TERMS ........................................................ 1

       REGISTRATION AGREEMENT ....................................... 1

       PROGRAMS ON DISK ..............................................2

       REQUIRED PROGRAMS .............................................2

       ACCORDION RULES ...............................................2

       STARTING ACCORDION ............................................2

       MAIN PLAYING SCREEN ...........................................3

       MAIN OPTIONS ..................................................3

       PLAY OPTIONS ..................................................3

       PLAYING ACCORDION .............................................4

       SETUP MENU ....................................................5

       HIGH SCORES ...................................................6

       OTHER PROGRAMS ................................................6

           CASINO/GAMBLING GAMES .....................................6

           SOLITAIRE GAMES ...........................................6

           WORD GAMES ................................................6

           UTILITIES .................................................6

       SHAREWARE LIMITATIONS .........................................7

       REGISTRATION FORM .............................................8


























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

























                                    - 1 -




                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Accord  .Exe  -  The main program for Accordion Solitaire.
         Accord  .Doc  -  The documentation for Accordion Solitaire.
         AcStart .Bat  -  A batch file to read the documentation, print 
                          the   documentation  and  install   Accordion 
                          Solitaire on your Hard Disk.
         AcRead  .Com  -  Used by AcStart.Bat.
         AcReply .Com  -  Used by AcStart.Bat.
         AcIntro       -  Used by AcStart.Bat.
         AcPrt         -  Used by AcStart.Bat.
         AcHd          -  Used by AcStart.Bat.
         Acc11S  .Arc  -  Shareware Version of Accordion Solitaire


                              REQUIRED PROGRAMS

       The only program required to play Accordion Solitaire is  called 
       "ACCORD.EXE".  Be sure this program is on your game disk or game 
       directory.


                               ACCORDION RULES

       Accordion  Solitaire  uses a standard deck of  fifty-two  cards.  
       The  cards are shuffled and dealt from the deck, one at a  time, 
       face up,  and placed on the game table.  If the card just  dealt 
       off the deck is the same suit or same rank as the first card  to 
       its left or the third card to its left, it is placed face up  on 
       that pack.  The cards are dealt and played in this fashion until 
       all fifty-two cards have been placed on the game table.

       The  object is to end up with all fifty-two cards on  one  pile.  
       Some  players deal out the entire deck before making any  moves.  
       Some make their moves as they arrive.  You may want to deal  out 
       any  number of cards before looking for your moves.  Anyway  you 
       play is legal as long as the cards are dealt from left to  right 
       and follow the rules for Accordion.


                              STARTING ACCORDION

       Be  sure ACCORD.EXE is in Drive A or in your current  directory.  
       From  your  DOS prompt, type "ACCORD" and press the  ENTER  key.  
       Once  Accordion is loaded into memory, your screen will  display 
       the  boot screen.  This displays the copyright  notice,  version 
       number  and  a message of either Shareware or  Registered.   The 
       Shareware  versions may be distributed freely.   The  Registered 
       versions  are  sent  only to those that  have  registered  their 
       Shareware version and they are not to be distributed.

       It will take about fifteen seconds before the screen clears  and 
       you  are brought to the main playing table.  You may speed  this 
       process up by pressing any key once you've read the boot screen.


                                    - 2 -




                             MAIN PLAYING SCREEN

       The Main Playing screen displays the options you have  available 
       prior to playing a game and while playing game.  The lower  left 
       portion of the screen shows a box labeled "Main Options".   When 
       you  start playing Accordion, the options will change  to  "Play 
       Options".   The  right lower portion of the  screen  shows  your 
       current  score,  highest  score, current game  and  total  games 
       played.

     
                                 MAIN OPTIONS

       Your  options you have available before starting a new  game  of 
       Accordion Solitaire are:

                            F1/ENTER   Deal
                            F3         Setup Options
                            F8         High Scores
                            F10        Quit         

       
        Option                       Description

       F1/ENTER      Pressing either Function 1 or the ENTER  key  will 
                     start a new game by shuffling the cards.

          F3         Pressing Function 3 will bring you into the  Setup 
                     screen where you'll be allowed to make changes  to 
                     Accordion Solitaire.

          F8         Pressing Function 8 will bring up the  High  Score
                     Screen.    This  displays  the  top  15   players,
                     showing  the  players name, scoring  method  used, 
                     score achieved, game number and the date the score 
                     was entered on.

          F10        Pressing Function 10 will quit the game and  bring 
                     you back to your DOS prompt.


                                 PLAY OPTIONS

                                 D     Deal    
                             U ARROW   Mark
                           L/R ARROW   Move    
                           U/D ARROW   Drop
                             ALT-C     View card total
                              HOME     Display start   
                               END     Display end  
                               F10     Quit
       
        Option                       Description

       D             Pressing the letter "D" will deal  the  next  card 
                     off the deck and place it on the playing table.

       UP ARROW      Pressing  the Up Arrow  will  mark  the  card  the 
                     pointer is pointing at.


                                    - 3 -




       L/R ARROW     Pressing the Left or Right Arrow moves the pointer 
                     in   its  respective  direction.   If  there   are 
                     thirteen  or less cards on the table, the  pointer 
                     will wrap around to the opposite side when  you've 
                     reached  the end of the table.  If there are  more 
                     than thirteen cards that have been dealt out,  the 
                     Left/Right   Arrows  function  in  the   following 
                     manner:

                     Moving the right arrow continues until it  reaches 
                     the last card that has been dealt, then  continues 
                     to wrap in a clockwise manner.

                     Moving  the  left arrow continues  left  until  it 
                     reaches the first position, then continues to wrap 
                     in a counter-clockwise manner.

       U/D ARROW     Pressing the up or down arrow will drop the  first 
                     card  marked when you first pressed the up  arrow.  
                     The first card or stack of cards is dropped on the 
                     card  the  pointer is pointing  at.   Anytime  you 
                     press  the  up arrow for the first time,  it  will 
                     mark  the  card  you are going to  move.   If  its 
                     pressed again, it drops the card. 

       ALT-C         Pressing the key combination of ALT-C will display 
                     the  total  amount  of cards  in  each  packet  or 
                     position.   If there hasn't been any cards  dealt, 
                     nothing will appear on your screen until at  least 
                     one  card has been dealt off the  deck.   Pressing 
                     ALT-C again will remove this from the screen.

       HOME          Pressing the Home key will move you to  the  start 
                     of  the  cards on the table.  This only  works  if 
                     there are more than thirteen cards on the table.

       END           Pressing the End key will move you to the  end  of 
                     the cards on the table.  This only works if  there 
                     are more than thirteen cards on the table.

       F10           Pressing Function 10 will quit the game and return 
                     you to the Main Options.  When you have reached  a 
                     point  in  the game when you no  longer  have  any 
                     moves, you must press Function 10 to quit.


                              PLAYING ACCORDION

       From the Main Options, press F1/ENTER.  The Play Options are now 
       available.  Press the letter "D" to deal the first card off  the 
       deck.  Press "D" again to deal the next card.  The pointer  will 
       advance  to that card position.  If you think you have  a  valid 
       move,  move the pointer to the card you wish to move then  press 
       the  Up  Arrow.  That will mark the first card.   Now  move  the 
       pointer to the location you want to drop the first card or  pack 
       of  cards and press either the Up or Down Arrow.  If  you  press 
       the  Down  Arrow and the move is not valid, there  will  not  be 
       an  error message.  Pressing the Up Arrow will produce an  error 
       message  if  the move was illegal.  Play continues in  the  same 
       manner until you've either won or pressed Function 10 to quit.

                                    - 4 -




                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       A new screen will appear displaying the following options:

               1     Display Shuffling               On
               2     Sound                           On
               3     Save High Games                Off
               4     Save Game History              Off
               5     Show Card Movement              On
               6     Sliding Screens                 On
               7     Snow Removal                   Off
               8     Card Movement Speed             20
               9     Scoring Method            STANDARD
               0     Save Settings           ACCORD.DAT

       These  are  the  default  settings  that  come  with   Accordion 
       Solitaire.  Options 1 through 9 may be changed and saved to disk 
       by pressing option 0 (Save Settings).

        Option                       Description

          1        You have the option to display the shuffling of  the 
                   cards  or you may wish to play a faster game by  not 
                   viewing  the  shuffling.  This may be  changed  with 
                   this option.

          2        Use this key to turn your sound either On or Off.

          3        If  you want to save your high  scores to  disk,  be  
                   sure this option is On.

          4        If you want to keep track of the total games  played 
                   and  the  highest score achieved, be sure  you  have 
                   this option set to On.

          5        The cards are displayed while they are  being  dealt 
                   to their respective positions.  If you would  rather 
                   not see this, you may set this option to Off.

          6        While going from one screen to another,  the screens 
                   will  slide open.  If this causes snow or you  would 
                   rather  not see it happen, you may turn it off  with 
                   this option.

          7        This option will help in eliminating snow.

          8        If option 5 above is On, your cards  will  be  dealt 
                   and  moved  around the table at  the  default  speed 
                   setting  of  14.   This  means  nothing  until   you 
                   actually see the cards in motion.  If you press this 
                   option  7,  you  will be able to  change  the  speed 
                   setting for the card movement speed.  The bottom  of 
                   your screen will display the following options:
                          LEFT/RIGHT Arrows      ENTER      F10
                   Use  your  LEFT/RIGHT  Arrow  keys  to  decrease  or 
                   increase the speed setting.  Press the ENTER key  if 
                   you want to see the effect the speed setting has  on 
                   the card movement.  When you are satisfied with  the 
                   setting, press the Function 10 key to quit.
       
                                    - 5 -




          9        Your default scoring method is set at Standard.  The 
                   Standard  scoring is actually a value of  10  points 
                   for each card you have placed on the first position.  
                   The  maximum  score you can achieve is  520  points.  
                   Fifty-two  cards  multiplied by 10 points  for  each 
                   card.  

                   The Advanced method of scoring will also give you  a 
                   total  of  520  points for winning  the  game.   Ten 
                   points  for  each card in the first  position.   The 
                   difference  is, you are also awarded points for  the 
                   second,  third  and fouth positions  on  the  table.  
                   Cards in the first position receive 10 points  each, 
                   cards in the second position receive 5 points  each, 
                   cards  in the third position receive 3 points  each, 
                   and  cards  in the forth position  receive  1  point 
                   each.

          0        Once  you have altered the Setup Menu, you  may save 
                   your changes to disk using this option.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Options.  If Option 3 in the Setup Menu has been set to On, 
       scores  will be saved to disk and you will be able to  view  the 
       top fifteen players.  The screen will display the players  name, 
       score, game number and date the score was recorded.

       On  the right side of the players name will be either a "-S"  or 
       "-A".   These  symbols identify the score to the scoring method.


                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
           ALL REGISTERED VERSIONS run on either CGA or Monochrome

                            CASINO/GAMBLING GAMES

        *Lowball Poker         Draw Poker               Baccarat  
         Roulette             *Blackjack Connoisseur   *Chuck-a-Luck 
        *Holdem Poker         *Knock Poker             *Red Dog


                               SOLITAIRE GAMES

        *Pyramid Solitaire    *Poker Solitaire    *Osmosis Solitaire
        *Accordion Solitaire

                                  WORD GAMES

                                   *SuJu


                                  UTILITIES

         DCS           EU           Kill           DX           CDate


                                    - 6 -




                            SHAREWARE LIMITATIONS

       The Shareware Version of Accordion Solitaire will not allow  the 
       user  to  change any of the options in the Setup Menu  with  the 
       exception   of   option #9 (Scoring Method) and  option #7 (Snow 
       Removal).  These   options  have been  reserved  for  Registered 
       Users only.

       The Shareware Version will only allow the user to play two games 
       of  Accordion Solitaire.  At the end of the two games, you  will 
       be returned to DOS.

       As  a Shareware program, you are required to register your  copy 
       with  United  Innovations  Plus  if you  intend  on  using  this 
       program.  














































                                    - 7 -




                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.



                Accordion Solitaire Version 1.01 Registration


       Registration Fee 5 1/4" disk                     $15.00  _______   
       Registration Fee 3 1/2" disk                     $17.00  _______

       If you have previously registered any program
       with us in the past, please deduct $5.00                 _______

       All 19 Shareware versions, 3 - 5 1/4" disks      $ 8.00  _______
       All 19 Shareware versions, 2 - 3 1/2" disks      $10.00  _______

                                 Foreign orders add     $ 5.00  _______




       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________




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

## FILE1280.TXT

{% raw %}
```
Disk No: 1280
Program Title:  Card Game Collection.
PC-SIG version: 1

Bring your own deck and cut!  Here's a lively collection of card games
for your betting pleasure!

Going to Vegas or Atlantic City?  Get in shape with HOLDEM POLKER, the
most popular card game in big casinos and card rooms across America.
You play eight other players and start betting when you get two cards.
The dealer displays three more cards which anyone can use.  After
betting, two more cards are displayed.  This is a tough game and only
the smart and the rugged survive.

ACCORDION SOLITAIRE brings the battle-weary a game for rainy Sunday
afternoons when time is as unimportant as winning.  A gentle game with
lots of instant gratification, it deals cards one by one.  If cards next
to each other are of identical rank or suit, pile one atop the other.
Likewise for those spaced three cards apart.  As the surf beats upon the
shoals of Nirvana, you'll find your row of cards shrinking.  Using
serene strategies, you might in this, or some future lifetime, get down
to a single stack and win.

RED DOG will delight any betting man or woman.  A computerized version
of the old ACEY DUECY game, it pits you against the house.
Professionally drawn and swiftly moving, it deals a spread of two cards.
Your goal: draw a card numerically between the spread of the two dealt
cards.  You view a payoff table which tells you how much you will win if
your draw is successful.  You can raise your bet once.

Poker whizzes hone their betting skills on POKER SOLITAIRE.  On the
surface, it looks like a simple game.  Responding to cards dealt one at
a time, you fill out a five card by five card square, trying to make the
most points possible.  Runs, flushes and other poker hands are scored
vertically and horizontally.  You compute your best odds in two
directions at once as you decide where to place the next card.  The game
moves fast; vibrant colors and designs enhance the screen.

Usage:  Games/Entertainment.

Special Requirements:   None.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for each game.

File Descriptions:

ACCORD   DOC  User guide.
ACCORD   EXE  Main program.
ACHD          Used by ACSTART.BAT.
ACINTRO       Used by ACSTART.BAT.
ACPRT         Used by ACSTART.BAT.
ACREAD   COM  Used by ACSTART.BAT.
ACREPLY  COM  Used by ASSTART.BAT.
ACSTART  BAT  Displays/prints user guide, installs game on hard disk.
ACCORD   TXT  Introductory information.
RDHD          Used by RDSTART.BAT
RDINTRO       Used by RDSTART.BAT.
RDPRT         Used by RDSTART.BAT.
RDREAD   COM  Used by RDSTART.BAT.
RDREPLY  COM  Used by RDSTART.BAT.
RDSTART  BAT  Batch file to display or print user guide and installs
              it on your hard disk.
REDDOG   DOC  User guide.
REDDOG   EXE  Main program.
REDDOG   TXT  Introductory information.
PKHD          Used by PKSTART.BAT.
PKINTRO       Used by PKSTART.BAT.
PKPRT         Used by PKSTART.BAT.
PKREAD   COM  Used by PKSTART.BAT.
PKREPLY  COM  Used by PKSTART.BAT.
PKSTART  BAT  Displays, prints user guide, installs program on hard
              disk.
POKERS   DOC  User guide.
POKERS   EXE  Main program.
POKERS   TXT  Introductory information.
HHD           Used by HSTART.BAT.
HINTRO        Used by HSTART.BAT.
HOLDEM   DOC  User guide.
HOLDEM   EXE  Main program.
HPRT          Used by HSTART.BAT.
HREAD    COM  Used by HSTART.BAT.
HREPLY   COM  Used by HSTART.BAT.
HSTART   BAT  Displays or prints user guide, installs game on hard
              disk.
HOLDEM   TXT  Introductory information.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk No 1280 Card Game Collection >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run Accordian Solitare, type:                                      ║
║             ACCORD (press enter)                                        ║
║                                                                         ║
║   To run Red Dog, type:                                                 ║
║             REDDOG (press enter)                                        ║
║                                                                         ║
║   To run Poker Solitare, type:                                          ║
║             POKERS (press enter)                                        ║
║                                                                         ║
║   To run Holdem Poker, type:                                            ║
║             HOLDEM (press enter)                                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HOLDEM.DOC

{% raw %}
```
























                                HOLD'EM POKER
                                  Ver. 1.01a

                              CGA or Monochrome

                              (C) Copyright 1988

                                      by

                               Raymond M. Buti

                             All Rights Reserved


                           United Innovations Plus
                            Post Office Box 21081
                          Castro Valley, Ca.  94546



























                              TABLE OF CONTENTS

       TERMS ........................................................ 1

       REGISTRATION AGREEMENT ....................................... 1

       DISTRIBUTION DISK ............................................ 2

       INTRODUCTION ................................................. 2

       BASIC RULES OF HOLD'EM ....................................... 3

       STARTING HOLD'EM ............................................. 3

       HARD DISK INSTALLATION ....................................... 3

       BOOT SCREEN .................................................. 4

       MAIN SCREEN .................................................. 4

       MAIN SCREEN OPTIONS .......................................... 4

       DEAL - F1 .................................................... 4

       SETUP OPTIONS - F3 ........................................... 5

       STATISTICS SCREEN - F7 ....................................... 6

       HIGH GAMES - F8 .............................................. 7

       PLAYERS OPTIONS .............................................. 7

       BETTING ...................................................... 7

       WINNING THE POT .............................................. 8

       RANK OF HANDS ................................................ 8

       LATEST REVISIONS ............................................. 9

       SHAREWARE LIMITATIONS ........................................ 9

       SETUP LIMITATIONS ............................................ 9

       UPGRADE POLICY .............................................. 10

       REGISTRATION FORM ........................................... 10













          





                                    TERMS

       This software is distributed as ShareWare.  What this means  is, 
       you  a  granted free license to use, copy  and  distribute  this 
       software  as  often  as  you  wish  so  long  as  the  following 
       restrictions have been met:

       1 - When   distributing   this  software, it  must  be  in   its
       original   unmodified   form.    The ARCed  or  Compressed  .EXE      
       version   of  this  software   will   only   be  distributed  to     
       Bulletin  Board  Systems  and  computer  information  exchanges,     
       i.e.  The  Great American Dream Machine  (415)-581-3019,  GEnie,     
       Delphi, The Source, Compuserve etc.

       2 - Prior written consent from United Innovations Plus  must  be 
       obtained   before  a fee  or  charge is made for   copying    or 
       distribution,  with  the exception of the  computer  information 
       exchanges as mentioned above.

       3 - This  software shall not be included  with  other  programs, 
       goods,   services,   etc. without prior written   consent   from 
       United  Innovations  Plus  with the exception  of  the  computer     
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

























                                   Page - 1




                              DISTRIBUTION DISK

       The   following  files  should  be  contained  either   in   the 
       HLDMV11a.ARC file or on your HOLDEM POKER Shareware diskette:

          HOLDEM.EXE            Main program
          HOLDEM.DOC            Documentation
          HSTART.BAT            Used to read or print documentation
                                and install Hold'em to Hard Disk 
          HINTRO                Used by HStart.Bat 
          HPRT                  Used by HStart.Bat
          HHD                   Used by HStart.Bat
          HREPLY.COM            Used by HStart.Bat 


                                 INTRODUCTION

       Welcome  to Hold'em Poker,  one of the most popular poker  games 
       found  in Las Vegas, Nevada.  Hold'em is played in most  of  the 
       major  casinos as well as many card clubs in many states.   With 
       the  popularity of Hold'em, more and more card clubs  have  been 
       trying to legalize this form of poker in cities where card clubs 
       are legalized.  I hope they all succeed.

       This   computer   game  not  only  will  give   you   hours   of 
       entertainment  and  enjoyment,  but it will also  allow  you  to 
       sharpen  up  your  skills as a Hold'em  Poker  player.  For  the 
       novice,  you  can learn how to play the game in the  comfort  of 
       your own home or office ( assuming your boss is on vacation ).  

       Hold'em  was  written to follow the general rules set  forth  in 
       most of the card clubs.  Not all card clubs have the same  exact 
       rules  as others.  Although the rules may vary slightly  between 
       card clubs, you'll find that these apply to most games.

       The  documentation  has been written with the  novice  in  mind.  
       Those that require more information on Hold'em may either  write 
       me  or  purchase  one of the many books  describing  Hold'em  in 
       detail.






















                                   Page - 2




                            BASIC RULES OF HOLD'EM

       Hold'em  is  usually played as either a No Limit game  or  as  a 
       Fixed  Limit  game.  In this game, you will be playing  a  10-20 
       Fixed Limit game.  This is called a Fixed Limit because all bets 
       will  be in increments of either $10 or $20 depending  on  which 
       round  of betting the players happen to be in.  A standard  deck 
       of 52 playing cards is used.

       Hold'em will follow the same rules as those found in most of the 
       more  popular  gambling casinos.  There will be a  house  dealer 
       that  will  deal  for all the players, keep track  of  the  pot, 
       players bets, and to take a house cut out of each pot.

       This will be a nine-handed game.  Your computer will be  playing 
       eight of the players, leaving the ninth player for you.  At  the 
       beginning of each hand of Hold'em, the dealer will first be sure 
       that all players have placed an ante into the pot.  When the pot 
       is  correct,  the dealer will proceed to deal out two  cards  to 
       each  player.  The cards will be dealt starting with  the  first 
       person  to  the  dealers left until all nine  players  have  two 
       cards.   The eight computer players will have their cards  dealt 
       face  down, and your hand will be dealt face up.  There will  be 
       one  round of betting on these two cards.  The dealer will  then 
       deal  three  cards face up in the middle of  the  table.   These 
       cards are called the "Flop".  The Flop cards are community cards 
       and  used by all players.  There will be another betting  round.  
       The  dealer will deal another card face up in the middle of  the 
       table.  This is known as "Fourth Street".  Fourth Street is also 
       a  community  card.  There will be another betting  round.   The 
       dealer  will  deal the last card face up in the  middle  of  the 
       table.  This is known as "Fifth Street", also a community  card.  
       We  then  have  the last round of betting.  The  winner  is  the 
       player  with the best poker hand using five out of seven  cards, 
       two in the players hand and the five in the middle of the table.


                               STARTING HOLD'EM

       To  play Hold'em, be sure your backup copy is in Drive A.   Type 
       in  the name "HOLDEM" from your Dos prompt and press  the  ENTER 
       key.  

       Example:  A> Holdem [ENTER]

       Keep  your  disk in Drive A until you've quit  playing  Hold'em.  
       When you quit playing, Hold'em will write to your default drive, 
       in this case, Drive A.


                            HARD DISK INSTALLATION

       If  you have a Hard Disk and wish to have Hold'em  installed  on 
       it,  you  may copy HOLDEM.EXE to your selected  directory  using 
       your Dos COPY command or press F3 from the main menu shown  when 
       you ran START.BAT.





                                   Page - 3




       You  will create a directory on Drive C called \Games  and  copy 
       the  required files into that directory.  When the  installation 
       is complete, you may run Hold'em by typing HOLDEM from your  Dos 
       prompt and press the ENTER key.

       Example: C:\Games\Holdem [ENTER]


                                 BOOT SCREEN

       Once  loaded,  Holdem will display its Boot screen.   This  will 
       show  you  the version number, copyright notice, etc.   You  may 
       press any key once you've read this screen.


                                 MAIN SCREEN

       The  main  screen consists of a house dealer, a section  of  the 
       table for the Flop, Fourth Street, Fifth Street, and an area for 
       the pot.  The players hands will be dealt by the house dealer in 
       a half circle around the table.  Each player will have a  number 
       beside his cards representing his playing position at the table.  
       Surrounding one of the numbers will be a BUTTON which  indicates 
       who  will be dealing that hand.  The house dealer will deal  for 
       that player.  The lower portion of your screen will display your 
       options you currently have available.


                             MAIN SCREEN OPTIONS

                  Options available prior to each deal are:

       F1  - Deal            Deals next hand of Hold'em.
       F3  - Setup Menu      Allows you set up your own rules.
       F7  - Statistics      Displays house and players statistics.
       F8  - High Games      Displays the top 15 players.
       F10 - Quit            Ends Hold'em and returns you to Dos.

       First  time users should press F3 and go directly to  the  Setup 
       Menu.


                                  DEAL - F1

       When your ready to play another hand of Hold'em, just press  the 
       F1  key or ENTER.  The house dealer will verify that the  Button 
       is   placed  in  front of proper player, then  verify  that  all 
       players  have  put in  their ante.  The house dealer  will  then 
       deal out  two  cards face  down  to each player.  Your hand will 
       be   dealt  face  up.  Play begins with the first person to  the 
       dealers  left.  As  each  player acts, you will notice a  letter  
       appear   by   the players  hand.   Those letters  represent  the 
       action   the   player took.  Here are the list  of  letters  and 
       their meanings:

               "B"     player has made an opening bet.
               "C"     player has called a bet or raise.
               "R"     player has raised or re-raised.
               "P"     player has passed or checked the hand.
               "S"     player has surrendered (Your hand only).

                                   Page - 4




                If a player folds, the entire hand is erased.

       The pot will increment according to each players decisions.


                              SETUP OPTIONS - F3

       The  Setup  Menu  will  allow you  to  set  up  various  options 
       available in Hold'em.  Your screen will show the following:

               1 - Practice Mode                    Off
               2 - Teaching Mode                    Off
               3 - Show Shuffling                    On 
               4 - Sound                             On
               5 - Allow Check/Raise                Off
               6 - Display Player Bets               On
               7 - Erase Folded Hands Bets           On
               8 - Fast Play on a Fold              Off
               9 - Save High Scores                 Off
               0 - Save Statistics                  Off
               A - Playing Speed (0-9)                5
               B - Playing Position (1-9)             5   
               C - House Take (0-9%)                  5%
               D - Time (Every 15 hands)             $2
               E - Ante ($1-$8)                      $2 
               F - Save Current Settings     HOLDEM.DAT

       These are the default settings that come with Hold'em.  You  may 
       change the above options by pressing any one of the numbers from 
       1  to  0  or  A to E.  Pressing the  letter  B  will  save  your  
       settings   to  the default filename HOLDEM.DAT on  your  default 
       drive.

       1 - Practice  Mode  will  allow  you  to  play  Hold'em  without 
           altering any of the players standings.

       2 - The Teaching Mode instructs you during the course  of  play. 
           This  is  designed for the novice player  in  mind.   Player 
           standings are not altered during this mode of play.       

       3 - Turns your shuffling display On or Off.

       4 - Turns your sound On or Off.

       5 - Many clubs allow players to Check and  Raise.  You  may  set 
           this to either allow checking and raising or not.  This  may 
           be set either On or Off.

       6 - This will allow you to display the total amount  each player     
           has invested in the pot.  Set to either On or Off.
           NOTE:  Ante will not be included in this display.

       7 - Users may wish to have the Display Player Bets  (option  #6)  
           view the bets each player has in the pot even after a player 
           has folded.  When set to Off, folded bets are shown.
           NOTE:  This has no effect unless Option 6 is set to On.





                                   Page - 5




       8 - When this option is set to On, players actions  will  finish 
           at  the fastest playing speed.  This is for players that  do 
           not  wish  to watch the computer finish  playing  out  their 
           hands.
 
       9 - If you would prefer not to save high  scores  to  disk,  set 
           this option to Off.

       0 - If you do not wish to save the statistics to disk, set  this 
           option to Off.  The statistics contain the house commission, 
           total hands played that is shown on the Statistics Screen.

       A - This will allow you to change the speed in which the  dealer 
           deals  the  cards.  This will also change the speed  of  the 
           actual game.  0 being the fastest speed and 9 the slowest.

       B - You are allowed to switch  playing  positions  with  another 
           player  at any time prior to a new hand.  Once the hand  has
           been dealt, you obviously must remain in that position.

       C - The house makes its money in one of  two  ways.   By  either 
           taking a house cut from each pot or by collecting time  from 
           each player, usually every 30 minutes.  When this setting is 
           above 0, the house will collect that percentage out of  each 
           pot  as its commission.  There will be no  commission  taken 
           from  pots  that only contain the antes and one  bet.   This 
           eliminates  a player having to pay a commission when all  he    
           wins  are the antes.  When the House Take is set to  0,  the 
           commission will be taken every 15 hands by the means of Time 
           Collection (See option 0).

       D - This option has no effect until the House Take (Option 9) is 
           set  to 0.  You are able to change the amount of  commission 
           taken every 15 hands from $2 to $8.

       E - This will allow you to change your ante from $1 to $8.

       F - You may save and change these settings at anytime  prior  to 
           the start of a new hand.

       To leave the Setup Menu, press ENTER.  Pressing ENTER will  take 
       you  back  to the Main Screen.  Pressing F1 will also  take  you 
       back to the Main Screen, but will start dealing the next hand.


                            STATISTICS SCREEN - F7

       The  Statistics  Screen will show all the  players  profit/loss.  
       Your  playing  position will be highlighted  with  two  markers.  
       You'll also be able to view the current hands dealt during  this 
       session of play, the total Hold'em hands played, average size of 
       the  pot, the house take for this session, and the  total  house 
       take.

       To  leave  the Statistics Screen, press ENTER.   Pressing  ENTER 
       will  take you  back  to the Main Screen.  Pressing F1 will also  
       take   you back to the Main Screen, but will start  dealing  the 
       next hand.



                                   Page - 6




                               HIGH GAMES - F8

       When  pressing F8, you will be able to view the Hold'em Hall  of 
       Fame.  This screen shows the top fifteen money winners.

       Scores  are saved when you quit playing Hold'em so long  as  you 
       have the Save High Scores option set to On.  Your score will  be 
       added  to the Hall of Fame if your winnings exceed  the   lowest 
       score  on  the top fifteen.  In the event one  of  the  computer 
       players has a greater score than yours, the computer player will 
       be  added  to the Hall of Fame along with yours,  assuming  your 
       score still qualifies.

       If  your score qualifies, your are asked to type in  your  name.  
       You  are allowed up to twenty-one characters.  If you press  the 
       ENTER  key  without entering your name, your score will  not  be 
       saved.   When  you  have quit playing Hold'em,  the  High  Score 
       Screen will be displayed prior to returning to DOS.

       Scores  are  saved to your default drive under the  filename  of 
       HOLDEM.HIS.


                               PLAYERS OPTIONS

       When you press F1 from the Main Screen, the cards are dealt  out 
       for  a  new hand of Hold'em.  When it's your turn to  act,  your 
       options will be shown on the lower part of your screen.  If  the 
       pot has not been opened, it has either been checked up to you or 
       you   are  first to act.  Your options will be either  to   Bet, 
       Pass  (Check), or Surrender.  You may not fold unless there  has 
       been a bet.  You may however decide you would finish playing the 
       hand  no matter what happens.  If you feel this way  about  your 
       hand,  press  "S"  for surrender.  You will remain  in  the  pot 
       unless  a  bet has been made, at which time your  hand  will  be 
       folded.   Once the surrender has been used, you may  not  change 
       your  mind and re-enter the rest of the hand.  If  there  aren't 
       any bets made once you've surrender, then you will remain in the 
       pot for the showdown. If  there has been a bet and you have  not 
       surrendered, then your options will be either to Call,  Raise or 
       Fold.  This procedure works the same in all betting rounds.


                                   BETTING

       The  betting in Hold'em is restricted to the limit of the  game.  
       You  are playing a $10-$20 Limit game.  The betting  during  the 
       first round and during Flop will have bets in increments of $10.  
       During Fourth and Fifth Streets, the betting is set at $20.   In 
       Limit Hold'em, you have two rounds of $10 bets and two rounds of 
       $20 bets.










                                   Page - 7




                               WINNING THE POT


       After  the last round of betting, if more than one player  still 
       remains  in  the pot, the cards are all turned face up  and  the 
       house  dealer  will take his cut of the pot and  distribute  the 
       remainder  of the pot to the winner or winners of the hand.   In 
       the event of a tie hand, the pot will be split among the players 
       holding  the  best hand.  Any odd amount that  cannot  be  split 
       evenly  among the players will be left in the pot for  the  next 
       hand.  In Hold'em, a pot could be split among two or more of the 
       players.   As an extreme example, suppose all players remain  in 
       the  pot to the end.  The Flop, Fourth Street and  Fifth  Street 
       show  an Ace, King, Queen, Jack, 10 all in hearts.  Guess  what?  
       All the players have a Royal Flush.  The pot is split among  all 
       the players.  You would have broke even if the house didn't take 
       a commission out of each pot.


                                RANK OF HANDS

       Poker is played with a standard deck of 52 cards.   Occasionally 
       a  joker will be used in some games.  Lowball and Draw  tend  to 
       use the joker more often than other forms of Poker.  Any time  a 
       poker  game has more than five cards envolved, you must use  the 
       best five to determine your best poker hand.  Hold'em has  seven 
       cards, two for each player and a total of five exposed community 
       cards  used  by all players.  You must choose any  five  of  the 
       seven  cards  to make your hand.  The order of  hands,  best  to 
       worst are:


          Hand                    Best                     Worst

       Royal Flush               A K Q J 10                 -----
       Straight Flush            K high                    5 high
       Four-of-a-Kind            4 Aces                  4 Deuces
       Full House                Aces full            Deuces full  
       Flush                     Ace high                7-5 high
       Straight                  Ace high                  5 high
       Three-of-a-Kind           3 Aces                  3 Deuces
       Two Pair                  Aces & Kings        3's & Deuces
       One Pair                  Aces                      Deuces
       No Pair (High Card)       Ace high                  7 high 

















                                   Page - 8




                               LATEST REVISIONS

       1 - To re-deal another hand, you may now use  the  ENTER  or  F1 
           key.
       2 - The C)heck key has been replaced with the (P)ass  key.   The 
           "C" key was used for checking and calling which was not such 
           a good idea. 
       3 - In addition to either checking or betting,  the   S)urrender 
           option  has been added.  A player may decide by viewing  his 
           first  two cards, he wishes not to play the hand  no  matter 
           what.  When you press S)urrender you are resigning from  any     
           further action if a bet has been made.  If there hasn't been 
           any   bets, you stay in the pot until the end of that  hand.  
           Once  you've surrendered, the computer will  finish  playing 
           your hand by folding once a bet has been made or checking if 
           no  bets  have  been made.  Surrender is  not  used  by  the 
           computer players.
       4 - Added an option to have the rest of the hand speeded up when 
           the player has folded or surrender.  This may be set in  the 
           SetUp  Menu.  When set to ON, as soon as you fold, the  hand 
           is finished at the fastest speed.  You will not have to  sit 
           and  watch  the computer finish playing at  a  slower  speed 
           unless you wish to.
       5 - Winning hand numbers now blink as well as being highlighted.
       6 - The Statistics Screen has been replaced with a new one. This   
           one is easier to locate the players current standings.
       7 - Added the options to save high scores and statistics.
       8 - The high scores will now show the hands played.
       9 - Added the amount required to call or raise a pot.
       10- Added a lot of sound during hand action.


                            SHAREWARE LIMITATIONS

       This  Shareware  version  is  a full working  copy  with  a  few 
       options left available for Registered users.  None of these will 
       interfere with the playing of the game.

                              SETUP LIMITATIONS

                    3 - Show Shuffling is always On.
                    4 - Sound is always On.
                    5 - Check/Raise is not allowed.
                    6 - Display players bets is always On.
                    7 - Erase Folded Hand bets is always On.
                    8 - Fast Play on a Fold is always Off.
                    9 - Save High Scores always Off.
                    0 - Save Statistics always Off.
                    A - Playing speed is always set at 5.
                    B - Playing position will always be player #5.
                    E - Player Ante will remain at $2.
                    F - SetUp file is saved in Registered Version

       The total hands played is limited to 10 hands each time you play 
       Hold'em.   This  is a sufficient amount of hands to play  for  a 
       Shareware version.





                                   Page - 9




                                UPGRADE POLICY

       Registered  Users will be notified when upgrades have been  made 
       available.



                              REGISTRATION FORM

                               Holdem Ver 1.01a

       Registration Fee 5 1/4" diskette                 $15.00  _______
       Registration Fee 3 1/4" diskette                 $17.00  _______
       All 19 Shareware versions on 5 1/4" diskette     $ 8.00  _______
       All 19 Shareware versions on 3 1/2" diskette     $10.00  _______

                                 Foreign orders add     $ 5.00  _______


       Name     ______________________________________________________

       Address  ______________________________________________________

       City     ___________________________ St. ______ Zip ___________


       Computer System _______________________________________________


                           Comments & Suggestions

       _______________________________________________________________

       _______________________________________________________________

       _______________________________________________________________

       _______________________________________________________________



                                          United Innovations Plus
       Make checks payable to:             Post Office Box 21081
                                          Castro Valley, CA 94546



             Other software programs from United Innovations Plus

              * Shareware programs will run on CGA or Monochrome
           ALL REGISTERED VERSIONS run on either CGA or Monochrome 

         *Lowball Poker            Draw Poker            Baccarat
          Roulette                 DCS                   EU
         *Pyramid Solitaire        Kill                  DX
         *Blackjack Connoisseur    CDate                *Chuck-a-Luck
         *SuJu                    *Holdem Poker         *Knock Poker
         *Osmosis Solitaire       *Accordion Solitaire  *Red Dog
         *Poker Solitaire


                                  Page - 10



```
{% endraw %}

## HOLDEM.TXT

{% raw %}
```
       Hold'em Poker is played with a dealer and nine players.  You are 
       one of those players.  Each player is first dealt two cards with 
       a  betting round.  Three more cards are turn face up and  become 
       community cards with another betting round.  A fourth and  fifth 
       card  are  turned  up with betting rounds for  each  card.   The 
       winner is the player with the best five-card high poker hand.
```
{% endraw %}

## POKERS.DOC

{% raw %}
```
























                               POKER SOLITAIRE
                                  Ver. 1.02

                              CGA or Monochrome

                              (C) Copyright 1988

                                      by

                               Raymond M. Buti

                             All Rights Reserved


                           United Innovations Plus
                            Post Office Box 21081
                          Castro Valley, Ca.  94546



























                              Table of Contents


       TERMS ........................................................ 1

       REGISTRATION AGREEMENT ....................................... 1

       PROGRAMS ON DISK ............................................. 2

       REQUIRED PROGRAMS ............................................ 2

       LAYOUT ....................................................... 3

       OBJECT ....................................................... 3

       SCORING ...................................................... 3

       POINT VALUE OF HANDS ......................................... 3

       PLAYING POKER SOLITAIRE ...................................... 3

       MAIN OPTIONS ................................................. 3

       F1/ENTER ..................................................... 3

       PLAYING OPTIONS .............................................. 4

       F3 ........................................................... 4

       SETUP OPTIONS ................................................ 4

       F5 ........................................................... 5

       F8 ........................................................... 5

       F10 .......................................................... 5

       SHAREWARE LIMITATIONS ........................................ 6

       REGISTRATION FORM ............................................ 7

       OTHER PROGRAMS ............................................... 7
























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

























                                   Page - 1




                               PROGRAMS ON DISK


               PokerS  .Exe   - Main Program
               PokerS  .Doc   - Documentation
               PkStart .Bat   - Batch file for reading/printing     
                                documentation and Hard Disk 
                                installation.
               PkReply .Com   - Used by PkStart.Bat
               PkRead  .Com   - Used by PkStart.Bat
               PkIntro        - Used by PkStart.Bat
               PkHd           - Used by PkStart.Bat
               PSol12S.Arc    - Compressed Shareware Version


                              REQUIRED PROGRAMS

       The only program required to run Poker Solitaire is PokerS.Exe.  











































                                   Page - 2




                                    LAYOUT

       Deal twenty-five cards into a layout of five rows of five  cards 
       each.  Cards are dealt one at a time and placed anywhere in  the 
       layout.


                                    OBJECT

       The object of the game is to form the best possible poker  hands 
       within the table layout.


                                   SCORING

       Hands are scored both horizontally and vertically.

                             POINT VALUE OF HANDS

                     HAND                         VALUE

                  Royal Flush                      100
                  Straight Flush                    75    
                  Four of a Kind                    50
                  Full House                        25
                  Flush                             20
                  Straight                          15
                  Three of a Kind                   10
                  Two Pairs                          5
                  One Pair                           2


                           PLAYING POKER SOLITAIRE

       From  your  DOS prompt, type "POKERS" and press the  ENTER  key.  
       The  entry screen will appear, displaying the  copyright  notice 
       and  version  number.  After a few seconds, the  playing  screen 
       will  appear.   The  left side of the screen  shows  your  table 
       layout  of  a five by five grid.  The right side of  the  screen 
       will show you the options you now have available.


                                   OPTIONS 
                                                       
                         F1 or ENTER   Starts New Game 
                         F3            SetUp Menu      
                         F5            Scoring Chart   
                         F8            High Scores     
                         F10           Quit            


                                   F1/ENTER

       To  start  dealing and playing the game, you have  a  choice  of 
       pressing  the  F1  key  or the ENTER key.   The  cards  will  be 
       shuffled  and  placed to the bottom right of the  table  layout.  
       The top card of the deck will be turned face up.  Once this  has 
       been done, you will have the following options:



                                   Page - 3




                               PLAYING OPTIONS

                        Arrow Keys   Move the pointer
                                     in the table
                        SBar/ENTER   Place exposed card
                        ALT-X        Abort & Quit game

       You  are now ready to fill in the table layout with the  exposed 
       top card from the deck.  You will notice a block inside the  top 
       left  card  on  the layout.  Using your  Arrow  Keys,  move  the 
       block  pointer around the layout to determine where you want  to 
       place the exposed card.  Now press the SpaceBar or ENTER Key and 
       the exposed card will move to that location.  Once this has been 
       done,  that  card  may not be moved from  that  position.   Play 
       continues  in the same manner until twenty-five cards have  been 
       placed  in  the layout.  After you've placed  the  twenty-fourth 
       card,  your last card is placed in the last  remaining  location 
       automatically.   Your final score will then be totaled from  the 
       ten poker hands, five horizontally and five vertically.

       As you place cards in the layout, your score is added and  shown 
       on the lower right hand side of your screen.

       You may abort the game by pressing ALT-X.  Doing so will end the 
       game and bring you back to DOS.


                                      F3

       When pressing F3 for the Setup Menu, Registered users will  have 
       the following options:

                      1   Display Shuffling        On 
                      2   Display Card Motion      On 
                      3   Sliding Screens          On
                      4   Snow Removal            Off
                      5   Card Movement Speed      20
                      6   Sound                    On 
                      7   Save High Games         Off 
                      8   Save Statistics         Off 
                      9   Save Settings    POKERS.DAT 


                                SETUP OPTIONS

       Pressing one of the numbers from 1 to 9 will have the  following 
       effect:

       1 - This will allow you to toggle the shuffling ON or OFF.  When 
       set  to ON, you will be able to watch the cards being  shuffled.  
       When set to OFF, the cards are still shuffled but not viewed.

       2 - When this is set to ON, you will see the card move from  the 
       deck  to  its location in the table.  Setting this to  OFF  will 
       speed up the play of the game by just making a fast jump to  its 
       correct location.

       3 - When going from one screen to another, the screen will split 
       apart.  You may turn this off with this option.


                                   Page - 4



       4 - If you have a lot of snow while the screens are splitting or 
       while the cards are moving, set this option to On.

       5 - This option allows you to adjust the speed of the  cards  as
       they are being dealt.

       6 - This will toggle the sound ON or OFF.

       7 - When set to ON, your high game scores will be saved to disk.  
       When  you  quit playing Poker Solitaire, the High  Score  screen 
       will appear and prompt you to press any key to end the game.  If 
       this  is set to OFF, the High Score screen will not appear  when 
       quitting.

       8 - The game statistics are saved to disk when  this  is set  to 
       ON.  Statistics are not save to disk when this option shows OFF.  
       The statistics hold the total games played, highest game, etc.

       9 - After you have configured  Poker Solitaire  to your  liking, 
       you may save these settings to disk by pressing the 9 key.

       To leave the Setup Menu, press the ENTER key and you will return 
       to the game.
       
                                      F5

       Pressing Function 5 from the Main Menu will show you the scoring 
       table and explain how the hands are scored.

                                      F8

       Pressing Function 8 from the Main Menu will show you the top  15 
       high scores.  High scores will not be saved unless you have Save 
       High Scores toggled to the ON position in the Setup Menu.   This 
       will  display the players name, score, game number and date  the 
       score was achieved on.


                                     F10

       Pressing  Function 10 from the Main Menu will exit the game  and 
       return you to your DOS prompt.




















                                   Page - 5




                            SHAREWARE LIMITATIONS

       The ShareWare Version of Poker Solitaire will not allow the user 
       to   change   any  of the options in the  Setup  Menu  with  the 
       exception  of  option  4 (Snow Removal).  You   are   also  only 
       allowed to play a maximum of 4 hands.  This will not effect  the  
       playing   of   the game.  If you intend on  playing  this   game 
       after  you've   tried it out a few times, you are  required   to 
       register  Poker  Solitaire and you will be sent  the  Registered 
       Version.



















































                                   Page - 6




                              REGISTRATION FORM

                           Poker Solitaire Ver 1.02


       Registration Fee 5 1/4" disk                     $15.00  _______
       Registration Fee 3 1/2" diskette                 $17.00  _______

       All 19 Shareware versions on 5 1/4" diskette     $ 8.00  _______
       All 19 Shareware versions on 3 1/2" diskette     $10.00  _______
        
                                 Foreign orders add     $ 5.00  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     ___________________________ St. ______ Zip ____________


       Computer System ________________________________________________


                           Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________



                                          United Innovations Plus
       Make checks payable to:             Post Office Box 21081
                                          Castro Valley, CA 94546

             Other software programs from United Innovations Plus

              * Shareware programs will run on CGA or Monochrome
           ALL REGISTERED VERSIONS run on either CGA or Monochrome 

         *Lowball Poker            Draw Poker            Baccarat
          Roulette                 DCS                   EU
         *Pyramid Solitaire        Kill                  DX
         *Blackjack Connoisseur    CDate                *Chuck-a-Luck
         *SuJu                    *Holdem Poker         *Knock Poker
         *Poker Solitaire         *Accordion Solitaire  *Red Dog
         *Osmosis Solitaire











                                   Page - 7



```
{% endraw %}

## REDDOG.DOC

{% raw %}
```
























                                   RED DOG
                                  Ver. 1.01

                              CGA or Monochrome

                              (C) Copyright 1988

                                      by

                               Raymond M. Buti

                             All Rights Reserved


                           United Innovations Plus
                            Post Office Box 21081
                          Castro Valley, Ca.  94546



























                               Table of Contents


       TERMS ........................................................ 1

       REGISTRATION AGREEMENT ....................................... 1

       PROGRAMS ON DISK ............................................. 2

       REQUIRED PROGRAMS ............................................ 2

       RED DOG RULES ................................................ 2

       STARTING RED DOG ............................................. 2

       MAIN PLAYING SCREEN .......................................... 3

       MAIN OPTIONS ................................................. 3

         Descriptions ............................................... 3      

       PLAY OPTIONS ................................................. 3

         Descriptions ............................................... 3     

       PLAYING RED DOG .............................................. 4

       SETUP MENU ................................................... 4

         Descriptions ............................................... 5

       HIGH SCORES .................................................. 5

       OTHER PROGRAMS ............................................... 6

         Casino/Gambling Games ...................................... 6

         Solitaire Games ............................................ 6

         Word Games ................................................. 6

         Utilities .................................................. 6

       SHAREWARE LIMITATIONS ........................................ 6

       REGISTRATION FORM ............................................ 7




















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

























                                    - 1 -




                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         RedDog  .Exe  -  The main program for Red Dog.
         RedDog  .Doc  -  The documentation for Red Dog.
         RdStart .Bat  -  A batch file to read the documentation, print 
                          the documentation and install Red Dog on your 
                          Hard Disk.
         RdRead  .Com  -  Used by RdStart.Bat.
         RdReply .Com  -  Used by RdStart.Bat.
         RdIntro       -  Used by RdStart.Bat.
         RdPrt         -  Used by RdStart.Bat.
         RdHd          -  Used by RdStart.Bat.
         RDog11S .Arc  -  Shareware Version of Red Dog
 

                              REQUIRED PROGRAMS

       The   only  program  required  to  play  Red  Dog   is    called 
       "REDDOG.EXE".  Be sure this program is on your game disk or game 
       directory.


                               RED DOG RULES

       Red  Dog  is  an exciting and easy-to-play game  that  is  often 
       called Acey Deucey or In-Between.  Six standard decks of  fifty-
       two  cards are used.  An Ace is always considered high  and  the 
       deuce  is  the lowest card.  You begin by placing  a  bet.   The 
       dealer  will  then turn two cards face up on  in  the  outermost 
       spaces on the table.  The dealer will then turn up a third  card 
       in  the middle of the two outermost cards.  You win your bet  if 
       the middle card is in between the outer cards.


                              STARTING RED DOG

       Be  sure REDDOG.EXE is in Drive A or in your current  directory.  
       From  your  DOS prompt, type "REDDOG" and press the  ENTER  key.  
       Once   Red Dog is loaded into memory, your screen will   display 
       the  boot screen.  This displays the copyright  notice,  version 
       number  and  a message of either Shareware or  Registered.   The 
       Shareware  versions may be distributed freely.   The  Registered 
       versions  are  sent  only to those that  have  registered  their 
       Shareware version and they are not to be distributed.

       It will take about fifteen seconds before the screen clears  and 
       you  are brought to the main playing table.  You may speed  this 
       process up by pressing any key once you've read the boot screen.








                                    - 2 -




                             MAIN PLAYING SCREEN

       The Main Playing screen displays the options you have  available 
       prior  to  and  during the play of Red  Dog.   The  lower   left 
       portion  of  the screen shows your available options.  When  you  
       start  playing  Red Dog, the options will change and  display  a 
       different  set  of  options.  The  right lower  portion  of  the  
       screen    shows  the  result  from  each  hand,   your   current 
       profit/loss,  hands played, total hands played and  the  highest 
       amount won.

    
                                 MAIN OPTIONS

       The  options you have available before starting a new  game  of 
       Red Dog are:

                 D, L/R Arrows, CTRL L/R Arrows, F3, F8, F10   

        Option                       Description

          D          Pressing the letter "D" will start a new hand. The 
                     cards   are   shuffled  only  when  the  deck  has 
                     approximately sixteen or fewer cards remaining. 

       L/R Arrows    Pressing the Left/Right arrow keys will allow  you 
                     to  adjust your bet size.  The minimum bet  is  $2 
                     and  the  maximum  bet is $200.   Your  bets  will 
                     increment or decrement by one dollar.

       CTRL L/R
        Arrows       Pressing  the Control Key along  with  either  the 
                     Left  or  Right  arrow  key   will  increment   or 
                     decrement your bet by ten dollars.

          F3         Pressing Function 3 will bring you into the  Setup 
                     screen where you'll be allowed to make changes  to 
                     Red Dog.

          F8         Pressing Function 8 will bring up the  High  Score
                     Screen.    This  displays  the  top  15   players,
                     showing  the  players name, winnings, games played 
                     and the date the winnings were entered on.

          F10        Pressing Function 10 will quit the game and  bring 
                     you back to your DOS prompt.


                                 PLAY OPTIONS

                      D, L/R Arrows, CTRL L/R Arrows, R

        Option                       Description

          D          Pressing the letter "D" will deal  the  third card 
                     off  the  deck and place it in the middle  of  the 
                     other two cards.




                                    - 3 -




       L/R Arrows    Pressing the Left/Right arrow keys will allow  you 
                     to adjust your raise bet size.  The minimum bet is 
                     $2 and the maximum raise bet must not exceed  your 
                     bet.  Your bets will increment or decrement by one 
                     dollar.

       CTRL L/R
        Arrows       Pressing  the Control Key along  with  either  the 
                     Left  or  Right  arrow  key   will  increment   or 
                     decrement your raise bet by ten dollars.

          R          Pressing the letter "R" places a raise  bet  equal 
                     to  your original bet.  This bet may be raised  or 
                     lowered by using the arrow keys.

                              PLAYING RED DOG

       From  the  Main  Options, press the letter  "D"  to  deal.   The 
       playing options will replace the main options.  If need be,  the 
       cards  will  be shuffled then two cards will be dealt  face  up.  
       The  dealer will decide what the spread is and move the  pointer 
       to  a spot on the table that represents the spread  and  payoff.  
       The spread is the total amount of cards that will fit in between 
       the first two cards dealt.  ie: 5 and 9 were dealt.  The  spread 
       is  3.   Looking at the table, a 3 spread will pay 2:1  on  your 
       bet.   This  is called a "non-consecutive".  At  this  time  you 
       would  raise your bet if you so desired.  A third card  will  be 
       dealt when you are satisfied with your bet and you have  pressed 
       the  "D" key again.  If the third card is in between  the  first 
       two, you win.

       If the dealer was to deal a 5 and 6 as the first two cards,  the 
       pointer would move to the letter "C" on the table layout.   This 
       is  known  as a "consecutive" and its a tie.  There  aren't  any 
       cards  that will fit in between those first two cards.  A  third 
       card  is not drawn.  You may leave your bet for the  next  hand, 
       increase it or decrease it. 

       If the dealer was to deal a pair as the first two cards, you may 
       not  raise  your bet.  A third card is drawn and placed  in  the 
       middle of the first two cards dealt.  If that card makes  three-
       of-a-kind,  you automatically win.  The payoff is 11:1.  If  the 
       card does not make three-of-a-kind, the hand is a tie.  You  may 
       leave your bet for the next hand, increase it or decrease it.

                                  SETUP MENU

       The Setup Menu is reached by pressing F3 prior to dealing a  new 
       hand.   A  new  screen  will  appear  displaying  the  following 
       options:

               1     Display Shuffling               On
               2     Sound                           On
               3     Save High Games                Off
               4     Save Game History              Off
               5     Show Card Movement              On
               6     Sliding Screens                 On
               7     Snow Removal                   Off
               8     Card Movement Speed             20
               9     Save Settings           REDDOG.DAT

                                    - 4 -




       These  are  the  default  settings  that  come  with   Red  Dog.  
       Options 1 through 8 may be changed and saved to disk by pressing 
       option 9 (Save Settings).

        Option                       Description

          1        You have the option to display the shuffling of  the 
                   cards  or you may wish to play a faster game by  not 
                   viewing  the  shuffling.  This may be  changed  with 
                   this option.

          2        Use this key to turn your sound either On or Off.

          3        If  you want to save your high  scores to  disk,  be  
                   sure this option is On.

          4        If you want to keep track of the total games  played 
                   and  the top 15 money winners, this option  must  be 
                   set to On.

          5        The cards are displayed while they are  being  dealt 
                   to their respective positions.  If you would  rather 
                   not see this, you may set this option to Off.

          6        While going from one screen to another,  the screens 
                   will  slide open.  If this causes snow or you  would 
                   rather  not see it happen, you may turn it off  with 
                   this option.

          7        Use this option if you are experiencing snow.

          8        If option 5 above is On, your cards  will  be  dealt 
                   and  moved  around the table at  the  default  speed 
                   setting  of  20.   This  means  nothing  until   you 
                   actually see the cards in motion.  If you press this 
                   option,   you  will be able to  change   the   speed 
                   setting for the card movement speed.  The bottom  of 
                   your screen will display the following options:

                   LEFT/RIGHT Arrows      ENTER      F10

                   Use  your  LEFT/RIGHT  Arrow  keys  to  decrease  or 
                   increase the speed setting.  Press the ENTER key  if 
                   you want to see the effect the speed setting has  on 
                   the card movement.  When you are satisfied with  the 
                   setting, press the Function 10 key to quit.

          9        Once  you have altered the Setup Menu, you  may save 
                   your changes to disk using this option.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key  from  the 
       Main Options.  If Option 3 in the Setup Menu has been set to On, 
       scores  will be saved to disk and you will be able to  view  the 
       top fifteen players.  The screen will display the players  name, 
       winnings, games played and date the score was recorded.



                                    - 5 -




                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
           ALL REGISTERED VERSIONS run on either CGA or Monochrome

                            CASINO/GAMBLING GAMES

        *Lowball Poker         Draw Poker               Baccarat  
         Roulette             *Blackjack Connoisseur   *Chuck-a-Luck 
        *Holdem Poker         *Knock Poker             *Red Dog


                               SOLITAIRE GAMES

        *Pyramid Solitaire    *Poker Solitaire    *Osmosis Solitaire
        *Accordion Solitaire

                                  WORD GAMES

                                   *SuJu


                                  UTILITIES

         DCS           EU           Kill           DX           CDate



                            SHAREWARE LIMITATIONS

       The  Shareware Version of Red Dog will not allow  the  user   to  
       change  any  of the options in the Setup Menu with the exception 
       of  option #7 (Snow Removal). These options have  been  reserved 
       for Registered Users only.

       The Shareware Version will only allow the user to play 20  hands 
       of  Red Dog.  At the end of the 20 hands, you  will be  returned 
       to DOS.

       As  a Shareware program, you are required to register your  copy 
       with  United  Innovations  Plus  if you  intend  on  using  this 
       program.  



















                                    - 6 -




                               REGISTRATION FORM

       Registration   entitles  the  user  to  full  support,   upgrade 
       notifications, discounts on all programs and future programs.



                      Red Dog Version 1.01 Registration


       Registration Fee 5 1/4" disk                     $15.00  _______   
       Registration Fee 3 1/2" disk                     $17.00  _______

       If you have previously registered any program
       with us in the past, please deduct $5.00                 _______

       All 19 Shareware versions, 3 - 5 1/4" disks      $ 8.00  _______
       All 19 Shareware versions, 2 - 3 1/2" disks      $10.00  _______

                                 Foreign orders add     $ 5.00  _______




       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________




                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       ________________________________________________________________




                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546











                                    - 7 -



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1280

     Volume in drive A has no label
     Directory of A:\

    ACCORD   DOC     21621  11-29-88  12:01p
    ACCORD   EXE     35040  11-29-88  12:01p
    ACHD               475  11-29-88  12:01p
    ACINTRO            586  11-29-88  12:01p
    ACPRT              221  11-29-88  12:01p
    ACREAD   COM      4200  11-29-88  12:01p
    ACREPLY  COM        14  11-29-88  12:01p
    ACSTART  BAT       490  11-29-88  12:01p
    FILE1280 TXT      3738   1-17-89   3:35p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1387   1-18-89   9:28a
    HHD                462   8-30-88   8:42p
    HINTRO             550   8-30-88   8:42p
    HOLDEM   DOC     29003   8-30-88   8:42p
    HOLDEM   EXE     74928   8-30-88   8:42p
    HOLDEM   TXT       441  11-25-88  12:50p
    HPRT               217   8-30-88   8:42p
    HREAD    COM      4200   8-30-88   8:42p
    HREPLY   COM        14   8-30-88   8:42p
    HSTART   BAT       490   8-30-88   8:42p
    MANUAL   BAT       163  12-15-88  12:58p
    PKHD               467  12-01-88   2:22p
    PKINTRO            574  12-01-88   2:22p
    PKPRT              221  12-01-88   2:22p
    PKREAD   COM      4200  12-01-88   2:22p
    PKREPLY  COM        14  12-01-88   2:22p
    PKSTART  BAT       490  12-01-88   2:22p
    POKERS   DOC     14932  12-01-88   2:22p
    POKERS   EXE     45760  12-01-88   2:22p
    RDHD               470  11-30-88   2:40p
    RDINTRO            550  11-30-88   2:40p
    RDPRT              221  11-30-88   2:40p
    RDREAD   COM      4200  11-30-88   2:40p
    RDREPLY  COM        14  11-30-88   2:40p
    RDSTART  BAT       490  11-30-88   2:40p
    REDDOG   DOC     18990  11-30-88   2:40p
    REDDOG   EXE     29584  11-30-88   2:40p
           37 file(s)     299455 bytes
                           37888 bytes free
