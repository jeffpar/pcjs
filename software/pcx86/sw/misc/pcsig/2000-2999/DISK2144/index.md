---
layout: page
title: "PC-SIG Diskette Library (Disk #2144)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2144/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2144"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "JIGSAW MANIA"

    Jigsaw puzzle fans rejoice!  JIGSAW MANIA provides colorful fun for all
    who enjoy the challenge of a good jigsaw puzzle by scrambling an image
    on your screen and asking you to piece it back together.
    
    You set the difficulty level by dividing the puzzle into a few big
    pieces or lots of little square pieces.  The program mixes the pieces
    up and you put them back together.  That may sound easy, but you know
    better.
    
    JIGSAW MANIA counts the number of moves it takes to complete the
    puzzle.  The shareware version contains two different puzzles, while
    athe registered version contains twelve.  The puzzles are great for
    either childrem or adults, simply just adjust the level of difficulty.
    
    Don't worry about not having time to finish the puzzle.  JIGSAW MANIA
    has a feature that lets you save the puzzle at any point and come back
    to it later.  Not only is it fun, but it sure saves a lot of space on
    the dining room table.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2144.TXT

{% raw %}
```
Disk No: 2144                                                           
Disk Title: Jigsaw Mania                                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: JIGSAW MANIA                                             
Author Version: 2.00                                                    
Author Registration: $18.00                                             
Special Requirements: 384K RAM, VGA.                                    
                                                                        
Deciphering jigsaw puzzles is a challenge for some, frustrating for     
others.  JIGSAW MANIA creates both fun and difficulty in providing      
puzzle solvers a chance to use their skills.  You set the               
difficulty level by dividing the puzzle into several or many            
rectangular or square pieces.  The program mixes the pieces up and      
you put them back together - sounds easy, but think again.              
                                                                        
JIGSAW MANIA will count the number of moves it takes for you to complete
the puzzle.  The shareware version contains two different puzzles,      
while the registerd version contains twelve.  The puzzles can be set    
at level for children or adults.                                        
                                                                        
JIGSAW MANIA is playable at your own leisure due to the save            
feature in the program.  Play solo or with a group.  Great              
enjoyment for all ages, JIGSAW MANIA is a welcome addition for all      
jigsaw puzzle lovers.                                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## JM.DOC

{% raw %}
```



















                              JIGSAW MANIA (tm)
                                  Ver. 2.OO


                            VGA 320x200 256 Color


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

       TRADEMARKS ................................................... 1

       PROGRAMS ON DISK ............................................. 1

       PROGRAM REQUIREMENTS ......................................... 2

       USING A MOUSE ................................................ 2

       PROGRAMMING IN TURBO PASCAL .................................. 2

            OMouse .................................................. 2

            TheDraw ................................................. 3

       JIGSAW MANIA ................................................. 3

       STARTING JIGSAW MANIA ........................................ 3

       ACCESS CODE .................................................. 3

       MAIN MENU SCREEN ............................................. 4

       SELECTING MAIN OPTIONS ....................................... 4

            Keyboard ................................................ 4

            Mouse ................................................... 4

       MAIN OPTIONS ................................................. 4

            F1 Play Jigsaw Mania .................................... 4

            F3 Setup Menu  .......................................... 4

            F8 High Scores .......................................... 4

            ALT-S Save Puzzle ....................................... 5

            ALT-L Load Saved Puzzle ................................. 5

            F10 Quit ................................................ 5

       PLAY OPTIONS  ................................................ 5

            Keyboard Options ........................................ 6

            Alt-H (Help) ............................................ 6

            Arrow Keys (Pointer movement) ........................... 6






                                    - i -








            Alt Arrows (Puzzle shifting) ............................ 6

            Alt-V (Puzzle Viewing) .................................. 6

            F10 (Quit) .............................................. 6

            Mouse Options ........................................... 7

       SETUP MENU ................................................... 7

       SETUP OPTIONS ................................................ 8

            1  Shapes & Sizes ....................................... 8

            2  Sound ................................................ 8

            3  Set Path ............................................. 8

            4  Input Device ......................................... 9

            5  Access Code Required ..................................9    

            6  Save High Scores ..................................... 9        

            7  User Created Pictures ................................ 9  

            8  Library Pictures ..................................... 9

            9  Select Pictures ..................................... 10

            A  Return to Main Menu ................................. 10

       HIGH SCORES ................................................. 10

       SCORING JIGSAW MANIA ........................................ 10

            Example 101 ............................................ 10

            Example 102  ........................................... 10

       PICTURE  LIBRARIES  ......................................... 11

       SCREEN CAPTURE .............................................. 11

       IMAGE CAPTURING ............................................. 11

            Image Capturing Prices ................................. 11

       JOVIAN FRAME GRABBERS ....................................... 12

       SHAREWARE VERSION ........................................... 12
       
       REVISIONS ................................................... 12
       



                                    - ii -








       OTHER PROGRAMS .............................................. 13
       
            CASINO/GAMBLING GAMES  ................................. 13

            SOLITAIRE GAMES ........................................ 13

            OTHER GAMES ............................................ 13

            UTILITIES ...............................................13

       REGISTRATION FORM  .......................................... 14














































                                   - iii -








                                  TRADEMARKS

       "JIGSAW  MANIA" is a trademark (tm) of United  Innovations  Plus 
       and Raymond M. Buti.

       "SYLVIA",  "VIA",  and  "Jovian Logic" are  trademarks  (tm)  of 
       Jovian Logic Corporation.

       "GIF"  and "Graphics Interchange Format" are trademarks (tm)  of 
       CompuServe Incorporated, an H&R Block Company.

       "PC Paintbrush", "Paintbrush+", and "Publisher's Paintbrush" are 
       trademarks (tm) of ZSoft Corporation.

       "Microsoft" is a trademark of Microsoft Corporation

       "Mouse Systems" is a trademark of Mouse Systems Corporation

       "Turbo Pascal" is a trademark of Borland International, Inc.

       "TheDraw" is a trademark of TheSoft Programming Services and Ian 
       Davis


                               PROGRAMS ON DISK

       The following is list of file names that you should have on your 
       distribution disk.

           File Name            File Description
        
         Jm      .Exe   -  The main program for Jigsaw Mania.
         JmScrn  .Dat   -  Graphics file required to play Jigsaw Mania.
         JmpHelp .Dat   -  Graphics file required to play Jigsaw Mania.
         JmLib01 .Lib   -  Graphics file required to play Jigsaw Mania.
         Jm      .Doc   -  The documentation for Jigsaw Mania.
         JmStart .Bat   -  Batch file to read the documentation,  print
                           the documentation and install  Jigsaw  Mania
                           on a Hard Drive.
         JmRead  .Com   -  Used by JmStart.Bat
         JmReply .Com   -  Used by JmStart.Bat
         JmIntro        -  Used by JmStart.Bat
         JmPrt          -  Used by JmStart.Bat
         JmHd           -  Used by JmStart.Bat
         JmReg          -  Registration Form
         Jm2S   .Arc    -  Shareware Version of JigSaw Mania.











                                    - 1 -








                             PROGRAM REQUIREMENTS

       You  must have an IBM PC/XT/AT/PS2 or TRUE compatible, at  least 
       491K  of free Ram and  a  VGA  graphics adapter to  play  Jigsaw 
       Mania.  This program uses the 320x200x256 color mode.  The files 
       required  to play Jigsaw Mania are JM.EXE, JMSCRN.DAT,  JMPHELP, 
       JMLIB01.LIB.  These files must be present  on  your play disk or  
       directory.   Use  the "Copy"  command found in your  DOS  manual 
       for making copies from one disk to another.

       NOTE:  The JMLIB01.LIB file is not required with the  Registered 
       version  of Jigsaw Mania so long as you have your own 256  color 
       PCX files.  

       Although  Jigsaw Mania will run on a computer equipped with  2-5 
       1/4" disks or 1-3 1/2" disk, a hard disk is recommended.


                                USING A MOUSE

       If you have a MicroSoft mouse or TRUE compatible with the LATEST 
       mouse driver, you should have no problems using your mouse  with 
       Jigsaw  Mania.   As of this writing, the  latest  Mouse  Systems 
       driver  is  Version  6.22 which is  fully  compatible  with  the 
       Microsoft mouse.

       NOTE:   If you elect to use the mouse with Jigsaw Mania and  the 
       computer  locks up or you are unable to make the mouse  function 
       properly,  USE  THE  KEYBOARD until you  get  the  latest  mouse 
       driver.

       The latest Mouse Systems mouse driver may be obtained from:

                          Mouse Systems Corporation
                            47505 Seabridge Drive
                              Fremont, CA  94538
                                (415) 656-1117


                         PROGRAMMING IN TURBO PASCAL

                                    OMouse

       Turbo Pascal Programmers interested in an excellent mouse  unit, 
       with  source  code can be obtained from:

                                  John Small
                              PSW/Power Software
                                P.O. Box 10072
                         McLean, Virginia  22102-8072
                                (703) 759-3838

       If  memory  serves  me  correctly, he  is  asking  $7.50  for  a 
       registration.  He has made life a little easier for me and saved 
       me many hours of programming.


                                    - 2 -








                                   TheDraw

       Another  excellent utility used in creating most of the  screens 
       by United Innovations Plus was done with and always will be done 
       with TheDraw.  I still owe Ian Davis for the registered version.  
       Fortunately,  Ian and I are good friends and I'd rather owe  him 
       than  beat him out of it (Just kiddin' Ian...).  If you want  to 
       create  text screens the easy way, use TheDraw.  You can  get  a 
       registered copy from:

                         TheSoft Programming Services
                           c/o Ian Davis - TheDraw     
                            1929 Whitecliff Court       
                           Walnut Creek, CA. 94596     


                                 JIGSAW MANIA

       Jigsaw  Mania  is played by moving pieces of a puzzle  around  a
       playing  area until you've completed a picture.  The game  comes 
       with a set of 5 pictures to choose from.   The ShareWare version 
       only contains 2 pictures.

       The   user  selects the size of the pieces used in  the  puzzle.   
       You may select from a total of 19 shapes & sizes, ranging from a 
       16 piece puzzle to a 640 piece puzzle. 


                            STARTING JIGSAW MANIA

       From  your  DOS  prompt,  type JM and  press  ENTER.   The  file 
       JMSCRN.DAT and JMPHELP.DAT  must  reside  on the same drive   or  
       directory   that contains  the JM.EXE file.  You must also  have  
       the   JMLIB01.LIB file  available either on Drive A, B or  C  if 
       you  are using the ShareWare Version.  If these  files  are  not 
       available, Jigsaw Mania will not run. 

       Assuming  everything has gone well, your screen will  clear  and 
       require  you to enter an access code (Registered  Version  only,  
       See Access Code).  After you enter your access code, you  should 
       see  the startup screen.  Once this screen is  displayed,  press 
       any key to continue with the game. 


                                 ACCESS CODE
                          (Registered Version Only)

       When you first install Jigsaw Mania, you will be asked to supply 
       a code for future access.  This is not a copy-protection scheme.  
       This  is  intended  to keep others from  playing  your  favorite 
       puzzles.  Your favorite puzzles may be pictures of you and  your 
       girl friend.  Can you imagine what your wife would say once  she 
       solved  the puzzle.  You may want to avoid having your  children 
       solving what they think might be a picture of the Grand  Canyon, 
       when in fact it turns out to be a XXX-Rated picture.


                                    - 3 -








       You  may never have to use this, but if you do, you'll  be  glad 
       the  option  to deny access is there.  You may enter  up  to  12 
       characters  for your access code.  I would  suggest  remembering 
       it,  so pick a code or number that you will  always  remember... 
       possibly your lovers phone number, your neighbors  measurements.  
       Your spouse would never guess that!


                               MAIN MENU SCREEN

       This  screen  will  display  your Main  Options  and  your  Game 
       Statistics.  Your screen will display the following:

           F1     Play Jigsaw Mania
           F3     Setup Menu                     Current Score
           F8     High Scores                    Moves Made
           ALT-S  Save Puzzle                    High Score
           ALT-L  Load Puzzle                    Puzzles Played
           F10    Quit/Return to DOS             Puzzles Solved


                            SELECTING MAIN OPTIONS

                                   Keyboard

       Keyboard users may select one of the options by pressing one  of 
       the  Function  keys or Alt letter combinations.   You  may  also 
       select  one of the options by moving the highlighted  menu  bar. 
       Use the Up/Down Arrow keys, stopping on one of the choices, then 
       press either the Enter key or SpaceBar.

                                    Mouse

       Move  the  highlighted bar by moving your mouse.   Press  either 
       button to select the option. 


                                 MAIN OPTIONS

                             F1 Play Jigsaw Mania

       Function 1 will start the game.  If this is the first game after 
       installing  Jigsaw  Mania, you must select  a picture  from  the 
       Setup Menu (See Setup Options).

                                F3 Setup Menu

       Function  3 will display a new set of  options.  The Setup  Menu 
       is  where  you  can select pictures, libraries  and  change  the 
       current settings of Jigsaw Mania (See Setup Options).

                                F8 High Scores

       Function  8  will  display the top fifteen  high  scores.   High 
       scores  may be saved with the Registered version only (See  High 
       Scores).

                                    - 4 -







  
                              ALT-S Save Puzzle

       Before  quitting the game, you can press ALT-S and Jigsaw  Mania 
       will save your unfinished puzzle to disk.  When saving a puzzle, 
       two  files will be created, JM.RES and JM.PIC.  The JM.RES  file 
       will  take  about  10,312 bytes and holds  all  the  information 
       required  to restore all settings to where they were just  prior 
       to  the puzzle save.  The JM.PIC file is the  unfinished  puzzle 
       which  will  take approximately 67,000 bytes, depending  on  the 
       actual  picture that was saved.  These files will be written  to 
       the path you have set in the Setup Menu (Option 3).  Be sure you 
       have enough space on the disk that your path is set to.

       NOTE:   You may only save one puzzle at a time.  Each  time  you 
       save  an unfinished puzzle, the two file will be  replaced  with 
       the  new  information and puzzle picture.  If you want  to  save 
       more  than  one unfinished puzzle, you will have to  reset  your 
       path or change disks.

       If  you are playing a puzzle with a lot of pieces, you may  wish 
       to resave the unfinished puzzle quite a few times until you have 
       finally completed it.  You last saved game will be  over-written 
       by the new saved game.

                           ALT-L Load Saved Puzzle

       You  may,  at any time, recall a saved puzzle.  When  you  press 
       ALT-L to load an unfinished puzzle, you will not be required  to 
       press the Function 1 key to play.  Pressing ALT-L will load  the 
       puzzle  and  start the game for you.  All you have to do  is  to 
       complete  the puzzle.  When you have finish playing  a  recalled 
       puzzle, you may resave it in its current state.  If you wish  to 
       continue to play a recalled puzzle, you must select this  option 
       again  and  reload  the puzzle.  Once a recalled  puzzle  is  in 
       memory,  you must select another picture from the Setup Menu  to 
       use the Function 1 key.

                                   F10 Quit

       Function 10 key will return you to your DOS prompt from the Main 
       Options only.


                                 PLAY OPTIONS

       When you select F1 (Play Jigsaw Mania) from the Main Menu,  your 
       screen  will display the picture you have selected  and  quickly 
       start  to  scramble the pieces.  When all the pieces  have  been 
       scramble, you will see a rectangle (pointer) drawn around one of 
       the  pieces.  Now you are ready to put the puzzle back  together 
       again.






                                    - 5 -








                               Keyboard Options

       The  following keys or key combinations are used  while  playing 
       Jigsaw Mania in the keyboard mode:

             Up, Down, Left, & Right Arrows     Pointer movement 
             Alt Arrows                         Puzzle shifting
             Alt-V                              Puzzle viewing
             F10                                Quit

                                 Alt-H (Help)

       Pressing  the  Alt  key and the letter "H"  will  bring  up  the 
       keyboard help screen.  This screen basically shows what you  are 
       reading now, only in a condensed form.

       If you are using a mouse, press the Right Button and a different 
       menu bar of selections will appear.

                        Arrow Keys (Pointer movement)
        
       Move  the  rectangle  around the screen using  the  Arrow  Keys, 
       stopping at the piece you wish to move.  Press the Enter Key  or 
       SpaceBar.   This  will lock in the first piece.   Now  move  the 
       rectangle again to a point to where you want to place the  piece 
       you have selected.  Press the Enter Key or SpaceBar again.   The 
       two pieces will be swapped.  If you place the piece over itself, 
       nothing will happen.  Continue swapping pieces until your puzzle 
       is completed.

                         Alt Arrows (Puzzle shifting)

       When  you  press the Alt and an Arrow key, you  will  shift  the 
       puzzle  in  the  direction of the arrow.  The  shifting  of  the 
       puzzle  will be moved in the amount of the size of  the  pieces.  
       This would be useful when your puzzle is almost completed but it 
       not centered properly on the screen.

                            Alt-V (Puzzle Viewing)

       Any time you wish to view or recall the completed puzzle,  press 
       the  Alt  key and the letter V.  The completed  puzzle  will  be 
       shown.  This will stay on the screen until you press any key  to 
       resume  the game.  This is useful to determine the placement  of 
       the puzzle and a visual peek at what the completed puzzle should 
       look  like.   NOTE:  The Alt-V function will not work  when  you 
       have loaded in a previously saved puzzle.
        
                                  F10 (Quit)

       You  may  quit  working on the puzzle  at  any  time.   Pressing 
       Function  10  will  bring you back to the Main  Menu.   If  your 
       puzzle  was  not completed, you cannot continue from  where  you 
       left off unless you save the puzzle then recall it from disk.



                                    - 6 -








                                Mouse Options

       Using a mouse with Jigsaw Mania is easy.  You will see an  arrow 
       in  the center of the puzzle pointing to the rectangle.   Moving 
       the  mouse  will  move  the  pointer  around  the  screen.   The 
       rectangular  box  will  following your movement  of  the  arrow.  
       Place the arrow within the piece you wish to move and press  the 
       Left Button.  Move the arrow again and stop at the position  you 
       wish  to  place  (swap) the selected piece and  press  the  Left 
       Button again.

       Pressing  the  Right Button of the mouse will pop up a  menu  of 
       choices  as explained in the keyboard section above.  This  menu 
       will  allow  you to shift the puzzle, view,  continue  or  quit.  
       Just  move  your arrow to the option of your  choice  and  press 
       either  button.   Your  arrow must be within  the  menu  options 
       before  your choice will function.  If the mouse is outside  the 
       menu and you press a button, the menu will disappear, just as if 
       you had done nothing. 


                                  SETUP MENU

       When  pressing F3 from the Main Options, the Setup Options  will 
       appear.   Your  options should display the  following  with  the 
       default settings:

                 1  Shapes & Sizes                          0
                 2  Sound                                 Yes 
                 3  Set Path                         C:\Games      
                 4  Input Device                     Keyboard
                 5  Access Code Required                   No
                 6  Save High Scores                       No
                 7  User Created Pictures                  No
                 8  Library Pictures              JMLIB01.LIB
                 9  Select Pictures
                 A  Return to Main Menu                             

       Making  a  selection  from the Setup Menu is done  in  the  same 
       manner  as  explained in Selecting Main Options.   Pressing  ESC 
       (Escape  Key)  will exit this menu and return you  to  the  Main 
       Menu.   If  you are using a mouse, use Left Button to  make  the 
       selection, the Right Button to ESC.

       Above the options in the Setup Menu, the current picture will be 
       shown.  If there isn't a picture name there, you must select one 
       using Option #9 before you can play Jigsaw Mania.

       On  each  side of the Setup Menu, you will see  two  rectangular 
       boxes.   The left side will contain the picture libraries.   You 
       will see them listed if they can be found on your path that  was 
       set with Option #3 (Set Path).  The right side of the Setup Menu 
       will  display the pictures you currently have  available.   This 
       will also search your path for the pictures.



                                    - 7 -








                                SETUP OPTIONS
       
                              1  Shapes & Sizes          

       Shapes  & Sizes will allow you to select the type of puzzle  you 
       want  to work with.  Your screen will display a  Size  Selection 
       Chart in which you will make your choice.  You will be shown the 
       number  of pieces for each of the 19 choices, labeled 0  to  18.  
       Some  of the choices have the same amount of puzzle  pieces  but 
       are arranged differently on your screen.  Each choice will  also 
       show  how  many  pieces  are  across  (horizontally)  and   down 
       (vertically),   and  the  actual  pixel  size  horizontally  and 
       vertically.  Your choices are the following:

                        Pieces  Across  Down  HSize  VSize
                     0    16       4  x   4     80  x  50 
                     1    32       8  x   4     40  x  50 
                     2    32      16  x   2     20  x 100 
                     3    40       2  x  20    160  x  10 
                     4    64      32  x   2     10  x 100 
                     5    64      16  x   4     20  x  50 
                     6    64       8  x   8     40  x  25 
                     7    80       8  x  10     40  x  20 
                     8    80       4  x  20     80  x  10 
                     9    80       2  x  40    160  x   5 
                    10   128      16  x   8     20  x  25 
                    11   128      64  x   2      5  x 100 
                    12   160       8  x  20     40  x  10 
                    13   160      16  x  10     20  x  20 
                    14   256      32  x   8     10  x  25 
                    15   256      64  x   4      5  x  50 
                    16   320      16  x  20     20  x  10 
                    17   512      64  x   8      5  x  25 
                    18   640      32  x  20     10  x  10 

       Move  the  highlighted  bar  with  your  arrow  keys  or  mouse.  
       Pressing Enter will make your selection.  Pressing ESC  (Escape) 
       will  return you to the Setup Menu without changing the  puzzles 
       shape or size.  If you are using a mouse, press the Left  Button 
       to make the selection or the Right Button to ESC.

       Your Setup Menu, Option 1 will now display your selection number 
       (0 to 18).

                                   2  Sound                   

       Selecting the Sound option will toggle the sound off and on.

                                 3  Set Path                

       Selecting  this  option  will allow you to change  the  path  so 
       Jigsaw  Mania will know where to locate your picture  files  and 
       libraries.   Although  it is recommended you have  Jigsaw  Mania 
       installed  on  a hard disk, you can run it from a  floppy  disk.  
       Place the pictures and libraries in Drive B and setting the path 
       to B: will work just fine.

                                    - 8 -








                               4  Input Device            

       Select  this  option  to  toggle from  Keyboard  to  Mouse.   As 
       mentioned  earlier,  to use a Mouse, you must have  a  Microsoft 
       compatible Mouse and the latest Mouse driver.  If your  computer 
       locks  up  while using the Mouse, you will have to  reboot  your 
       system. 

                           5  Access Code Required    

       This is available on the Registered version only.  If you  would 
       like  to  prevent someone from playing your  game,  select  this 
       option.  If the Access Code Required is set to "Yes", each  time 
       the  game  is  played, you or whoever plays  the  game  will  be 
       required to enter the Access Code you entered when you play  the 
       game for the very first time.  If you have forgotten your access 
       code, you must re-install Jigsaw Mania.  The default settings on 
       this  option  are "No".  You will never be asked for  an  Access 
       Code unless this selection is changed.

                             6  Save High Scores        

       Jigsaw  Mania  will  save the top 15 scores to  disk  when  this 
       option  is set to "Yes".  When this option is changed to  "Yes", 
       Jigsaw Mania will look for the file JM.HIS.  If it is found, the 
       high scores will be loaded in an any current high scores will be 
       lost.   If  you want to save high scores, change this  to  "Yes" 
       before you start playing.

                           7  User Created Pictures   

       If you have your own 320x200x256 color PCX pictures and want  to 
       use  them  to  play Jigsaw Mania, you must set  this  option  to 
       "Yes".   When this option is set to "No", the only pictures  you 
       will  be  able  to access are those  available  in  the  picture 
       libraries  (See  Selecting  Pictures).  All pictures  not  in  a 
       Jigsaw Mania Library must be in a PC Paintbrush file format with 
       the  file extension of PCX.  You may also you GIF  pictures  but 
       they must first be converted from a GIF format to a PCX  format.  
       The  memory  resident screen capture utility provided  with  the 
       Registered  disk of Jigsaw Mania will do the conversion for  you 
       (See Screen Capture).

                             8  Library Pictures

       When  selecting this option, your cursor or highlight  bar  will 
       move  to  the  left  of the Setup  Menu  and  into  the  Library 
       selection area.  Select a Picture Library by pressing the  ENTER 
       key or SpaceBar or if your using a mouse, press the Left Button.  
       If want to scroll through the libraries using the keyboard,  use 
       the Page Up and Page Down keys.  To Page Up using a mouse,  move 
       the highlighted bar to the uppermost library name and press  the 
       Right Button.  To Page Down using a mouse, move the  highlighted 
       bar  to  the bottom of the selection area and  press  the  Right 
       Button.


                                    - 9 -








       When  making  a  library  selection,  Option  #7  (User  Created 
       Pictures) will be set to "No".

                              9  Select Pictures

       Selecting  Pictures  will move your highlight bar to  the  right 
       side of the Setup Menu.  This will allow you to select from  the 
       pictures listed. 

                            A  Return to Main Menu  

       Select this option or press the ESC key when you are finished in 
       the Setup Menu.  You will return to the Main Menu.


                                 HIGH SCORES

       When you have selected F8 (High Scores) from the Main Menu, your 
       screen  will clear and display the top fifteen high scores  from 
       Jigsaw  Mania.   You  will view the players  name,  score,  game 
       number, the pieces and size of the puzzle and the date the score 
       was  entered.  To exit this screen and return to the Main  Menu, 
       press the Enter key or if you are using a mouse, press the  Left 
       Button.   If you want to clear the high scores, press  ALT-C  if 
       you  are using the keyboard or if you are using a  mouse,  press 
       the Right Button.


                             SCORING JIGSAW MANIA

       The  scoring for Jigsaw Mania is based on the amount  of  pieces 
       currently  used  in solving the puzzle.  Each  correctly  placed 
       puzzle piece is multiplied by the pieces used, which is selected 
       from  Option  #1  in  the  Setup  Menu.   Your  moves  are  then 
       multiplied  by  3 and subtracted from the previous  total.   The 
       following are some examples:

                                  Example #1

       You  are  working on a 16 piece puzzle and completed  it  in  12 
       moves.   Your score is 16 correct locations multiplied by  a  16 
       piece puzzle which equals a score of 256 points.  Your 12  moves 
       are multiplied by 3 which equals 36 points.  Your final score is 
       256 minus 36 which gives you a total of 220 points.

                                  Example #2

       You  are working on an 80 pieces puzzle and you've made 50  moves 
       and  quit  before it was completed.  Let's assume  you  have  65 
       correctly  placed  puzzle  pieces.  Your  score  is  65  correct 
       locations  multiplied  by an 80 piece puzzle which  equals  5200 
       points.   Your  50 moves are multiplied by 3  which  equals  150 
       points.   Your  final score is 5200 minus 150 which give  you  a 
       total of 5050 points.



                                    - 10 -








                              PICTURE LIBRARIES

       Each  Jigsaw Mania picture library contains 5  pictures.   These 
       are  full 320x200x256 color images unless otherwise noted.   The 
       Registered  version comes with Library Disk JMLIB01.LIB.   Other 
       libraries  may  be  purchased separately.  The  following  is  a 
       description of the libraries currently available:

        Library Name                    Contents                       

        JMLIB01.LIB - Birdlady  Dryoff    Flower01  Sam       TShirts
        JMLIB02.LIB - Alpharo   AyeAye    Baby01    Cactus    Elizabet
        JMLIB03.LIB - Baby02    FlyEagle  Jaguar    Kagubird  Leslie

       The  following  libraries  are XXX-Rated and will  not  be  sold 
       unless your signature accompanies the Jigsaw Mania  Registration 
       Form.  The filenames have been purposely left out.

                    JMXXX01.LIB  JMXXX02.LIB  JMXXX03.LIB


                                SCREEN CAPTURE

       Registered  users  of Jigsaw Mania will receive a  disk  with  a 
       program  called  JMSC.   This is a VGA  memory  resident  screen 
       capturing  utility.   This will allow the user  to  capture  any 
       320x200x256  color image already displayed on your  monitor  and 
       save  it to a PCX file format.  This save PCX file will be  able 
       to  be  used  with  Jigsaw Mania or  one  of  ZSofts  Paintbrush 
       programs allowing VGA color images.


                               IMAGE CAPTURING

       All pictures in these libraries were captured with the Sylvia/PC 
       frame grabber by Jovian Logics Corporation.  Registered and Non-
       Registered users can have your own photos captured and converted 
       to a PCX or GIF file format either in 256 colors or 64 shades of 
       grey.  

       Users  interested in having their photos captured can send  them 
       to  us for processing.  Your photos will be returned along  with 
       the  disk containing your processed image.  Please allow us  one 
       week for processing your photo.  Photographs should be a minimum 
       of  4x5  up to 8x10.  To prevent cropping of a  picture,  photos 
       should  be in the form of a scenic picture.  IE: An  8x10  would 
       actually be 10" wide and 8" high; a 5x7 would be 7" wide and  5" 
       high, etc.  We will accept photos in a non-scenic format but you 
       will  have to do the cropping of the photo by either masking  it 
       off  with masking tape or whatever other ingenious way  you  can 
       come up with. 

                            Image Capturing Prices

       For  Registered users of Jigsaw Mania, the cost  for  processing 


                                    - 11 -








       each  photograph  is  $8.OO.  For  special  rates  for  quantity 
       orders,  contact United Innovations Plus and ask for  our  Image 
       Capturing price list.

       Non-Registered user rates are $1O.OO per photograph.
        
       NOTE: The term "Registered User" applies to any program that has 
       been  previously  registered  with United  Innovations  Plus  in 
       regards to the Image Capturing Service.

       United Innovations Plus will not be responsible for the loss  of 
       photographs or damaged photographs.


                            JOVIAN FRAME GRABBERS

       If  you  are  interested  in purchasing  a  frame  grabber  that 
       produces  the images that come with Jigsaw Mania, ask us  for  a 
       fact sheet and price list.  Special rates for Registered Users.


                              SHAREWARE VERSION

       The   ShareWare   version   of Jigsaw Mania  has  the  following 
       restrictions:

       1 - High scores and game statistics are not saved to disk.

       2 - You cannot save or load an uncompleted puzzle.

       3 - You cannot load in User Created Pictures (PCX Files),   only 
       the  pictures  supplied  with  the  ShareWare  version  will  be 
       available to non-registered users.

       4 - The  ShareWare pictures  contain  the  words  "Jigsaw  Mania 
       Shareware Picture".


                                  REVISIONS

                               January 10, 1990
                                 Version 1.OO

       Error  fixed in puzzle size.  The smallest puzzle piece  had  an 
       error and the pointer would not function properly.

                               January 30, 1990
                                 Version 1.5O

       Added the option for User Created Pictures for Registered  users 
       only.






                                    - 12 -








                                March 26, 199O
                                 Version 2.OO

       Added  a  mouse  feature, full  screen  pictures,  high  scores, 
       shifting  of the picture in four directions, and the  option  to 
       save  and  recall  uncompleted puzzles.  In  addition  to  this, 
       Jigsaw Mania will now all 19 different puzzle configurations.


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


                                 OTHER GAMES

        *SuJu                 Jigsaw Mania (VGA Only)  *Pig
         Peg (VGA Only)       Fifteen


                                  UTILITIES

         DCS               EU               Kill               DX           
         CDate             JMSC (VGA Only)



















                                    - 13 -








                              REGISTRATION FORM

       Registration    entitles  the  user  to  full   support,   major
       upgrade  notifications,  discounts on all  programs  and  future
       programs.

                                 Jigsaw Mania
                          Version 2.OO Registration 

       Registration Fee - Send ( ) 5 1/4"  ( ) 3 1/2"   $18.OO  _______
       JMSC Memory resident screen capture to PCX format  FREE 
       Library Disk JMLIB01.LIB                           FREE 
       Library Disk JMLIB02.LIB                         $ 5.OO  _______
       Library Disk JMLIB03.LIB                         $ 5.OO  _______
       Library Disk JMXXX01.LIB (Signature Required)    $ 5.OO  _______
       Library Disk JMXXX02.LIB (Signature Required)    $ 5.OO  _______
       Library Disk JMXXX03.LIB (Signature Required)    $ 5.OO  _______
       Image Capturing Service - Number of Photos____ x $ 8.OO  _______
        (Signature Required if XXX-Rated Photos)
       All 26 Shareware versions on 5 1/4" disks        $ 8.OO  _______
       All 26 Shareware versions on 3 1/2" disks        $1O.OO  _______

                                 Foreign orders add     $ 5.00  _______

                                              Total          $  _______


       Name     _______________________________________________________

       Address  _______________________________________________________

       City     _____________________________ St. ______ Zip __________


       Computer System ________________________________________________


              Where did you acquire this version of Jigsaw Mania

       ________________________________________________________________


                            Comments & Suggestions

       ________________________________________________________________

       ________________________________________________________________

       I  have  ordered XXX Rated Librarie(s)  or  requested  XXX-Rated 
       Image Caputure(s).  I am at least 21 years of age.  

                Signature _____________________________________

                                        United Innovations Plus
            Make checks payable to:      Post Office Box 21081
                                        Castro Valley, CA 94546

                                    - 14 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2144

     Volume in drive A has no label
     Directory of A:\

    JM       EXE    111232   3-24-90   2:00a
    JM       DOC     43198   3-24-90   2:00a
    JMHD               471   3-24-90   2:00a
    JMINTRO            801   3-24-90   2:00a
    JMLIB01  LIB    134401   3-24-90   2:00a
    JMPHELP  DAT      1978   3-24-90   2:00a
    JMPRT              221   3-24-90   2:00a
    JMREAD   COM      4200   3-24-90   2:00a
    JMREG             2383   3-24-90   2:00a
    JMREPLY  COM        14   3-24-90   2:00a
    JMSCRN   DAT     51110   3-24-90   2:00a
    JMSTART  BAT       700   3-24-90   2:00a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   4-23-90  11:40p
    FILE2144 TXT      2295   4-24-90   1:01p
           15 file(s)     353582 bytes
                               0 bytes free
