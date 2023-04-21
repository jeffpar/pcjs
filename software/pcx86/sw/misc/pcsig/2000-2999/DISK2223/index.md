---
layout: page
title: "PC-SIG Diskette Library (Disk #2223)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2223/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2223"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PEG SOLITAIRE"

    PEG SOLITAIRE is played on a playing board shaped in the form of a plus
    sign. The board has 33 holes with 32 pegs.  (The center hole of the
    board is left empty.)  The object is to remove all but one of the pegs
    from the board jumping one peg at a time.
    
    COLOR PEG is a second game.  This board has 24 pegs divided into
    different colored groups of 6 pegs each.  The object of this game is to
    jump pegs until all peg groups have exchanged positions.  You win when
    the top and bottom peg groups have swapped places and the right and left
    peg groups have done the same.
    
    Both of these games are simple to operate, but difficult to master. Use
    the keyboard or mouse to move around.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2223.TXT

{% raw %}
```
Disk No: 2223                                                           
Disk Title: Peg Solitaire                                               
PC-SIG Version: S1                                                      
                                                                        
Program Title: PEG SOLITAIRE                                            
Author Version: 1.00                                                    
Author Registration: $15.00                                             
Special Requirements: 512K RAM, and VGA.                                
                                                                        
PEG SOLITAIRE is played on a playing board shaped in the form of a plus 
sign, consisting of 33 holes of which 32 are filled with pegs.  The     
center hole of the board is left empty.  The object is to remove all the
pegs from the board except one by jumping one peg at a time.            
                                                                        
Color Peg is the second game of this program.  On this game the board   
contains only 24 pegs divided into different colored groups of 6 pegs   
each.  The object in this game is to jump pegs until you have swapped   
peg groups.  You have won the game when the top and bottom peg groups   
have exchanged positions, and the right and left peg groups have        
exchanged positions.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PC-SIG.TXT

{% raw %}
```
       Program Title:  Peg Solitaire

       Intended User:  Puzzle game players, children & adults.

       ShareWare  Limitations: Does not save game  history, or  changes 
       made to game configuration.  Limited to 500 moves each the  time 
       puzzle is played.

       Starting the program:  From DOS type PESTART and press ENTER

       Registration Fee :  $15.00

       Services  with  Registration:  Full support,  latest  registered 
       disk.

                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Peg     .Exe   -  The main program for Peg Solitaire.
         Peg1    .Dat   -  Graphics file required to play Peg.
         Peg2    .Dat   -  Graphics file required to play Peg.
         Peg3    .Dat   -  Graphics file required to play Peg.
         Peg     .Doc   -  The documentation for Peg Solitaire.
         PeStart .Bat   -  A batch file to  read  the  documentation, 
                           print the documentation and install Peg on
                           on a Hard Drive.
         PeRead  .Com   -  Used by PeStart.Bat
         PeReply .Com   -  Used by PeStart.Bat
         PeIntro        -  Used by PeStart.Bat
         PePrt          -  Used by PeStart.Bat
         PeHd           -  Used by PeStart.Bat
         PeReg          -  Registration Form
         Peg1S  .Arc    -  Shareware Version of Peg Solitaire


                             PROGRAM REQUIREMENTS

       Because  of the graphic screens, you must have at least 512K  of 
       free Ram and a VGA graphics adapter to play Peg Solitaire.  This 
       program  uses the 640x480 16 color mode.  The files required  to 
       play Peg Solitaire are PEG.EXE, PEG1.DAT, PEG2.DAT and PEG3.DAT.  
       These  files  must be present on your play disk  or   directory.  


                             PEG RULES (Game #1)

       Peg Solitaire is played on a playing board shaped in the form of 
       a plus sign, consisting of 33 holes of which 32 are filled  with 
       pegs.   The center hole of the board is left empty.  The  object 
       is  to remove all the pegs from the board except one by  jumping 
       one peg at a time.

                          COLOR PEG RULES (Game #2)

       This  game  contains only  24 pegs but has the  9  center  holes 
       empty.   These   24  pegs are  divided into 4 groups of  6  pegs 
       each.   Each  group   of  pegs are   colored  differently.   The  
       object  in  this game is to jump pegs until  you   have  swapped  
       peg   groups.  You have won the game when  the  top  and  bottom  
       peg  groups have exchanged positions, and the  right   and  left 
       peg groups have exchanged positions.
```
{% endraw %}

## PEG.DOC

{% raw %}
```
























                                PEG SOLITAIRE
                                 Version 1.OO

                             VGA 640x480x16 Mode

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


        PROGRAMS ON DISK ............................................ 1

        PROGRAM REQUIREMENTS ........................................ 1

        PEG RULES (Game #1) ......................................... 2

             VALID JUMPS FOR PEG .................................... 2

        COLOR PEG RULES (Game #2) ................................... 2

             VALID JUMPS FOR COLOR PEG (Hard Mode) .................. 2

             VALID JUMPS FOR COLOR PEG (Easy Mode) .................. 2

        STARTING PEG ................................................ 3

        PLAYING SCREEN .............................................. 3

        MAIN OPTIONS ................................................ 3

        PLAY OPTIONS ................................................ 4

        SETUP MENU .................................................. 4

        SETUP OPTIONS ............................................... 5

        HIGH SCORES ................................................. 5

        SHAREWARE VERSION ........................................... 5

        OTHER PROGRAMS .............................................. 6

        REGISTRATION FORM ........................................... 7





















                                    - i -








                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Peg     .Exe   -  The main program for Peg Solitaire.
         Peg1    .Dat   -  Graphics file required to play Peg.
         Peg2    .Dat   -  Graphics file required to play Peg.
         Peg3    .Dat   -  Graphics file required to play Peg.
         Peg     .Doc   -  The documentation for Peg Solitaire.
         PeStart .Bat   -  A batch file to  read  the  documentation, 
                           print the documentation and install Peg on
                           on a Hard Drive.
         PeRead  .Com   -  Used by PeStart.Bat
         PeReply .Com   -  Used by PeStart.Bat
         PeIntro        -  Used by PeStart.Bat
         PePrt          -  Used by PeStart.Bat
         PeHd           -  Used by PeStart.Bat
         PeReg          -  Registration Form
         Peg1S  .Arc    -  Shareware Version of Peg Solitaire


                             PROGRAM REQUIREMENTS

       Because  of the graphic screens, you must have at least 512K  of 
       free Ram and a VGA graphics adapter to play Peg Solitaire.  This 
       program  uses the 640x480 16 color mode.  The files required  to 
       play Peg Solitaire are PEG.EXE, PEG1.DAT, PEG2.DAT and PEG3.DAT.  
       These  files  must be present on your play disk  or   directory.  
       Use   the "Copy"  command found in your DOS manual for making  a 
       copies from one disk to another.
























                                    - 1 -








                                  PEG RULES
                                  (Game #1)

       Peg Solitaire is played on a playing board shaped in the form of 
       a plus sign, consisting of 33 holes of which 32 are filled  with 
       pegs.   The center hole of the board is left empty.  The  object 
       is  to remove all the pegs from the board except one.   This  is 
       done  by jumping one peg at a time.  Once you've jumped  a  peg, 
       you must remove the peg you have just jumped.  Play continues in 
       this manner until you are left with one peg or you can no longer 
       make any valid jumps.

                             VALID JUMPS FOR PEG

       You  may  only  jump pegs in either  a  horizontal  or  vertical 
       direction being sure to only jump over one peg at a time.
       

                               COLOR PEG RULES
                                  (Game #2)

       The  Color Peg board is similar to the Peg Board.   It  contains 
       only  24 pegs but has the 9 center holes empty.  These  24  pegs 
       are  divided into 4 groups of 6 pegs each.  Each group  of  pegs 
       are  colored differently.  The top group of pegs are  blue,  the 
       right  side is green, the bottom is purple and the left side  is 
       red.   The  object in this game is to jump pegs until  you  have 
       swapped  peg  groups.  You have won the game when  the  top  and 
       bottom  peg groups have exchanged positions, and the  right  and 
       left peg groups have exchanged positions.


                          VALID JUMPS FOR COLOR PEG
                                 (Hard Mode)
       
       When pegs are jumped, they are left on the board.  They are  not 
       removed  as  in game #1.  You may jump in either  a  horizontal, 
       vertical or diagonal direction so long as only one peg is jumped 
       at  a  time.  Jumps are valid so long as they  stay  within  the 
       confines of the playing board.  IE:  You may not jump across  an 
       inside  corner that would take your line of travel  outside  the 
       game board.


                          VALID JUMPS FOR COLOR PEG
                                 (Easy Mode)

       Valid  jumps for the Easy Mode of play is identical to the  Hard 
       Mode except you will be allow to jump outside the bounds of  the 
       playing  board.   This applies to the immediate  inside  corners 
       only.
 





                                    - 2 -








                                 STARTING PEG

       From  your DOS prompt, type PEG and press ENTER.   Your  monitor  
       will display the opening screen.  This will remain in view until 
       all the Peg loads in all the graphic information located in  the 
       3  Peg.Dat  files.   When all the  information  is  loaded  into 
       memory,  you will hear a beep and see the message to  press  the 
       ENTER key.  


                                PLAYING SCREEN

       The  Playing Screen is divided into 3 main sections.   The  left 
       portion  of  the screen will be your playing  area.   The  right 
       upper  portion will display your playing options.   The  playing 
       options have two parts, a Main Options and Playing Options.  The 
       lower right portion will display the Game Statistics.


                                 MAIN OPTIONS

       These  will appear before you play each game.  During the  game, 
       these  will  change to Playing Options  (See  Playing  Options).  
       Your Main Options will display the following:
        
                    F1/ENTER       Play Peg Solitaire
                    F3             Setup Menu 
                    F8             High Scores 
                    F10/ALT-X      Quit/DOS


                                   F1/ENTER

       Pressing  Function 1 or the ENTER key will start a game  of  Peg 
       Solitaire.

                                      F3

       Pressing Function 3 will bring up a Setup Menu.  This will allow 
       you  to  change the configuration of Peg  Solitaire  (See  Setup 
       Menu).

                                      F8

       Pressing  Function 8 will bring up a screen displaying  the  top 
       15  high  scores at Peg Solitaire.  Seeing that  there  are  two 
       games that can be played, you will have two high score  screens.  
       You will only be able to view the high score screen of the  game 
       you are playing (See High Scores).

                                  F10/ALT-X

       Pressing  Function 10 will quit the game and return you to  your 
       DOS  prompt.  Prior to quitting, you will be asked to verify  if 
       you  really want to quit.  A Y)es or N)o response must be  made.  
       Pressing  ALT-X  will not bring up this verify message.

                                    - 3 -








       If  you are using a mouse, an arrow will be pointing to  one  of 
       the  options.  Moving the mouse up and down will move the  arrow 
       to  another  option.  Pressing either button will  activate  the 
       option the arrow is pointing at.


                                 PLAY OPTIONS

       When  you've selected F1/ENTER from the Main Options, your  Play 
       Options will appear.  The following will be displayed:

                         ARROWS       Move Pointer
                         ENTER/SPACE  Mark Peg
                         F10          Quit

       The Play Options will be different if you are using a mouse.

                                    ARROWS                

       The Arrow keys will move your pointer around the playing  board.  
       Continue to move your pointer until you are on a peg you wish to 
       move.

                                 ENTER/SPACE

       When  pressing  either the ENTER key or SpaceBar, the  peg  that 
       your pointer is on will be circled.  Move your pointer using the 
       Arrow  keys  to the location you wish to move your  peg  to  and 
       again press the ENTER key or SpaceBar.  This will make your jump 
       or move if it is a valid one.

                                     F10

       Pressing  Function 10 will quit the game and return you to  your 
       Main Options.


                                  SETUP MENU

       The Setup Menu is reached by pressing F3 from the Main  Options.  
       The following options will be displayed:

                             1 Keyboard Required
                             2 Adjust Mouse Sensitivity
                             3 Sound On
                             4 Save High Scores Off
                             5 Change Game

       These  are  the default settings that come with  Peg  Solitaire.  
       Options 1 through 5 may be changed while in the  Setup   Screen.  
       These options are always saved when you quit and return to  DOS. 
       In  order for this to happen, you must be logged onto the  drive 
       or directory where Peg.Exe resides.




                                    - 4 -








                                SETUP OPTIONS

                             1 Keyboard Required

       Pressing the number 1 key will toggle from Keyboard to Mouse  if 
       a Mouse Driver has been detected.

                          2 Adjust Mouse Sensitivity

       Pressing  the  number  2  key  will  allow  you  to  adjust  the 
       sensitivity of your mouse.  The function will not work if you do 
       not  have  option  number 1 set to Mouse Required  and  a  Mouse 
       Driver has not been detected.

                                  3 Sound On

       Pressing  the  number 3 key will toggle the sound either  On  or 
       Off. 

                            4 Save High Scores Off

       Pressing  the  number  4 key will toggle the  Save  High  Scores 
       feature On or Off.

                                5 Change Game

       Pressing the number 5 key will let you change from Peg Solitaire 
       (Game  #1),  to Color Peg Solitaire (Game #2).   Each  time  you 
       change to Game #2, you will be ask if you want to play an  E)asy 
       game or a H)ard game.


                                 HIGH SCORES

       This  screen is viewed by pressing the Function 8 key from   the 
       Main Options.  The screen will display the players name,  score, 
       game number and date the score was recorded.

       The scoring for Game #1 is score by the amount of pegs remaining 
       on the board.  The best game is to have one peg remaining.

       The  scoreing for Game #2 starts you off with 1000 points.  Five 
       points will be deducted for each move you make.  The less  moves 
       taken  to beat the game, the better your score will be.  If  you 
       do not complete Game #2, your score will be zero.


                              SHAREWARE VERSION

       The  ShareWare  version  of Peg Solitaire  will  not  save  game 
       scores.   Registered  users will receive the  latest  Registered 
       version will full saving features.





                                    - 5 -








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
         Peg (VGA Only)
 
                                 OTHER GAMES

        *SuJu                 Jigsaw Mania (VGA Only)  *Pig


                                  UTILITIES

         DCS           EU           Kill           DX           CDate






























                                    - 6 -







       
                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major 
       upgrade  notifications,  discounts on all  programs  and  future 
       programs.


                                Peg Solitaire
                          Version 1.OO Registration


       Registration Fee 5 1/4" disk                     $15.00  _______   
       Registration Fee 3 1/2" disk                     $17.00  _______

       All 24 Shareware versions on 5 1/4" disks        $ 8.00  _______
       All 24 Shareware versions on 3 1/2" disks        $10.00  _______

                                 Foreign orders add     $ 5.00  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


       Please check one:       MONO____    CGA____    EGA____   VGA____


             Where did you acquire this version of Peg Solitaire

       ________________________________________________________________



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

### Directory of PC-SIG Library Disk #2223

     Volume in drive A has no label
     Directory of A:\

    PEG      DOC     18056   1-05-90   6:36a
    PEG      EXE     96256   1-05-90   6:36a
    PEG1     DAT     37943   1-05-90   6:36a
    PEG2     DAT     25943   1-05-90   6:36a
    PEG3     DAT     41659   1-05-90   6:36a
    PEHD               471   1-05-90   6:36a
    PEINTRO            785   1-05-90   6:36a
    PEPRT              217   1-05-90   6:36a
    PEREAD   COM      4200   1-05-90   6:36a
    PEREG             1808   1-05-90   6:36a
    PEREPLY  COM        14   1-05-90   6:36a
    PESTART  BAT       683   1-05-90   6:36a
    PC-SIG   TXT      2910   1-10-90   4:36p
    FILE2223 TXT      1925   6-19-90   3:41p
    GO       BAK       617   1-01-80   4:02a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-01-80   4:03a
           17 file(s)     234142 bytes
                           79872 bytes free
