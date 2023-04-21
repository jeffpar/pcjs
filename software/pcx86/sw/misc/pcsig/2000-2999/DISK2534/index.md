---
layout: page
title: "PC-SIG Diskette Library (Disk #2534)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2534/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2534"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2534.TXT

{% raw %}
```
Disk No: 2534                                                           
Disk Title: Sic Bo                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Sic Bo                                                   
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: EGA, and a mouse.                                 
                                                                        
If you love to play dice and were in the Far East, you wouldn't be      
playing "craps," you would be playing SIC BO.  Now this fast-paced game 
(usually played with three dice) can be played anywhere you can put a   
computer!  With SIC BO, the craps type board is displayed on your       
computer in stunning graphics.  Bet on dice combinations you think are  
winners -- and roll 'em.  With 50 different winning combinations and    
payoffs up to 150 to 1, this is big time gambling fun.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## SICBO.DOC

{% raw %}
```






















                                    SIC BO
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


       TRADEMARKS ................................................... 1
 
       PROGRAMS ON DISK ............................................. 1

       PROGRAM REQUIREMENTS ......................................... 1

       SHAREWARE VS REGISTERED VERSION .............................. 1

       SIC BO ....................................................... 2

       STARTING SIC BO .............................................. 2

       MAIN MENU .................................................... 2

         ShareWare Version Options .................................. 2

         Registered Version Options ................................. 2

       SELECTING OPTIONS ............................................ 3

       MAIN OPTIONS ................................................. 3

         Roll Dice .................................................. 3

         Setup Menu ................................................. 3

         High Scores ................................................ 3

         Quit ....................................................... 3

       SETUP MENU ................................................... 3

       SETUP OPTIONS .................................................3

         Sound ...................................................... 4

         Save High Scores ........................................... 4

         Replay Last Wagers ......................................... 4

         Delay Between Game ......................................... 4

       HIGH SCORES .................................................. 4

       OTHER PROGRAMS ............................................... 5

       REGISTRATION FORM ............................................ 6







                                    - i -








                                  TRADEMARKS

       "Microsoft" is a trademark of Microsoft Corporation
       "Mouse Systems" is a trademark of Mouse Systems Corporation


                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         SicBo   .Exe - The main program for Sic Bo.
         SbLib01 .Inf - Graphics file required by SicBo.Exe.
         SbLib02 .Inf - Graphics file required by SicBo.Exe.
         SicBo   .Doc - The documentation for Sic Bo.
         SbStart .Bat - Batch file to read the documentation,  print
                        the documentation and install Sic Bo on a
                        Hard Drive.
         SbRead  .Com - Used by SbStart.Bat
         SbReply .Com - Used by SbStart.Bat
         SbIntro      - Used by SbStart.Bat
         SbPrt        - Used by SbStart.Bat
         SbHd         - Used by SbStart.Bat
         SbReg        - Sic Bo Registration Form
         SicBo1S.Arc  - Shareware Version of Sic Bo.


                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       256K  of  free  Ram, an EGA graphics adapter,  and  a  MicroSoft 
       compatible mouse to play Sic Bo. The files required to play  Sic 
       Bo are SICBO.EXE, SBLIB01.INF and SBLIB02.INF. These files  must 
       be  present   on  your play disk or directory.  Use  the  "Copy"  
       command  found  in your DOS manual for making copies  from   one 
       disk to another.  A hard disk is recommended but not required.


                       SHAREWARE VS REGISTERED VERSION

       Sic  Bo  is written in two versions, a ShareWare version  and  a 
       Registered  version.  The ShareWare version is not  crippled  in 
       anyway.  This is a fully functional program of Sic Bo.  Users of 
       the  ShareWare version will have a message appear at the end  of 
       the  game.  The message will state that the program is NOT  free 
       and  continued  use of the program  requires  registration  with 
       United Innovations Plus.

       The  Registered version of Sic Bo has added features  for  users 
       that  register their copy by filling out the  Registration  Form 
       and sending in the required registration fee.




                                    - 1 -








       The following documentation for Sic Bo explains all the features 
       for the Registered version.  The words "Registered Version Only" 
       may  appear  throughout the documentation. These are  the  added 
       features in the Registered version.  


                                    SIC BO

       Sic  Bo is one of the predominating Oriental casino games  found 
       in  many  of your major gambling establishments.   The  game  is 
       played with three dice.  

       The  object of the game is to select the individual  numbers  or 
       combinations  of  numbers  that will appear on  the  dice  after 
       they're shaken and exposed.  The betting layout of Sic Bo has  a 
       variety of 5O different possible wagers and the payoff for each.  
       The payoffs vary from even money to 15O to 1.  A player may  bet 
       on  a single die outcome, on two of a kind, on three of a  kind, 
       or on different combinations of two or three of the dice.


                               STARTING SIC BO

       From  your  DOS prompt, type SICBO and press the ENTER  key.  In 
       order  for Sic Bo to run, you must be logged onto the  directory 
       where SICBO.EXE, SBLIB01.INF, and SBLIB02.INF reside.

       The  first  screen you see will be the boot screen.   This  will 
       display  the copyright notice and version number of Sic  Bo.   A 
       message will be displayed on the bottom of the screen asking you 
       to press a mouse button.

       The next screen you see will be the Sic Bo layout.  You will  be 
       playing Sic Bo from this screen.


                                  MAIN MENU

       The  Main  Menu will be displayed on the lower left  portion  of 
       your screen.  Your available options will depend on whether  you 
       are using the ShareWare version or the Registered version.

                          ShareWare Version Options

                                  Roll Dice
                                     Quit


                          Registered Version Options

                                  Roll Dice
                                  Setup Menu
                                 High Scores
                                     Quit

       

                                    - 2 -








                              SELECTING OPTIONS

       To select one of the options, move the mouse cursor over to  the 
       selection of your choice and press one of the mouse buttons.  


                                 MAIN OPTIONS

                                  Roll Dice

       When you choose "Roll Dice", three dice will be tossed within  a 
       rectangular  area  located  at the top  right  portion  of  your 
       screen.   When they come to a stop, the winning combinations  on 
       the  Sic Bo layout will light up.  If you have placed a  bet  on 
       the portion of the layout that is lit up, you are a winner.  You 
       will be paid according to the posted odds on the layout.

       NOTE:   When  pressing  the  Left  Mouse  Button,  the   winning 
       combinations  will  remain  lit until you press  either  of  the 
       buttons again.  When pressing the Right Mouse Button to roll the 
       dice,  you  are not required to re-press a button.   The  layout 
       will  remain  lit according to the delay amount entered  in  the 
       Setup Option "Delay Between Game" (See Setup Options).

                    Setup Menu (Registered Version Only)

       Selecting this option will allow Registered users to change  the 
       current settings of Sic Bo (See Setup Options).


                    High Scores (Registered Version Only)

       Selecting  this option will allow Registered users to  view  the 
       top fifteen high scores (See High Scores).
  

                                     Quit

       Selecting this option will return you to your DOS prompt.

 
                      SETUP MENU (Registered Users Only)
       
       The Setup Menu will bring up the following options:

                          Sound                   On
                          Save High Scores       Off
                          Replay Last Wagers     Off
                          Delay Between Game       0


                    SETUP OPTIONS (Registered Users Only )
       
       To  change  any of the default settings, select  the  option  by 
       moving the mouse cursor to the option and press either button.


                                    - 3 -








                                    Sound

       This will allow you to turn the sound on or off.

                               Save High Scores

       Your  scoring may be saved to disk if this option is set to  ON. 
       If  this  option is set to ON, you will be asked for  your  name 
       when   you  have finished playing Sic Bo, assuming  your   score  
       is   high enough for the top 15 scores.  Once you  have  entered 
       your   name,  you  will not have to enter it again  when  asked, 
       just press  the ENTER key.

                              Replay Last Wagers

       After  each outcome of the dice, the layout is cleared  and  you 
       must  place your bets again.  If you want to keep the same  bets 
       as you previously had, be sure you set this option to "ON".

                              Delay Between Game

       This  is  where  you set the delay for the amount  of  time  the 
       layout will remain lit.  This will only function when you  press 
       the Right Mouse Button when rolling the dice (See Main  Options, 
       Roll Dice).

       Your  default setting is O.  This is the least amount of  delay.  
       You maximum setting is 2O.  The bottom of your screen will  show 
       the words:

                    Increase       Decrease       Done

       Move  the mouse cursor over the word "Increase" to increase  the 
       delay  time, "Decrease" to decrease the delay time,  and  "Done" 
       when you are satisfied with the delay factor.

       To  leave  the  Setup  Menu, move  your  Mouse  Cursor  off  the 
       rectangular  area of the Setup Menu and press one of  the  mouse 
       buttons.

                    HIGH SCORES (Registered Version Only)

       The Registered version of Sic Bo will allow the user to save the 
       high  scores  or winnings to disk.  By selecting  "High  Scores" 
       from your Main Options, you will be able to view the top fifteen 
       players and their scores.

       To leave the high score screen, press either mouse button.









                                    - 4 -








                                OTHER PROGRAMS

              * Shareware programs will run on CGA or Monochrome
                 ALL REGISTERED VERSIONS run on either CGA or
                      Monochrome unless otherwise noted.
       

                            CASINO/GAMBLING GAMES

        *Lowball Poker         Draw Poker               Baccarat
         Roulette             *Blackjack Connoisseur   *Chuck-a-Luck 
        *Holdem Poker         *Knock Poker             *Red Dog
         Sic Bo (EGA)

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


























                                    - 5 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                                    SIC BO            
                          Version 1.OO Registration 

                              Please specify disk size

       Registration Fee        ( ) 5 1/4"  ( ) 3 1/2"   $15.OO  _______
       If you have previously registered any program
       with United Innovations Plus, deduct $6.OO               _______  
       28 ShareWare Versions   ( ) 5 1/4"  ( ) 3 1/2"   $1O.OO  _______
            
                                   Foreign orders add   $ 5.OO  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


                 Where did you acquire this version of Sic Bo

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

                                    - 6 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2534

     Volume in drive A has no label
     Directory of A:\

    SBHD               469   6-22-90  10:00a
    SBINTRO            747   6-22-90  10:00a
    SBLIB01  INF     96326   6-22-90  10:00a
    SBLIB02  INF     53434   6-22-90  10:00a
    SBPRT              221   6-22-90  10:00a
    SBREAD   COM      4200   6-22-90  10:00a
    SBREG             1984   6-22-90  10:00a
    SBREPLY  COM        14   6-22-90  10:00a
    SBSTART  BAT       723   6-22-90  10:00a
    SICBO    DOC     17089   6-22-90  10:00a
    SICBO    EXE     80816   6-22-90  10:00a
    GO       BAT         7  10-05-90   8:28a
    FILE2534 TXT      1633  10-05-90   8:28a
           13 file(s)     257663 bytes
                           57344 bytes free
