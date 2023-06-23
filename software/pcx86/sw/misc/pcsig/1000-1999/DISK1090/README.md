---
layout: page
title: "PC-SIG Diskette Library (Disk #1090)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1090/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1090"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BATTLE GROUND & ARIONX: SEEKER OF GANS"

    BATTLE GROUND is a World War II field-combat game/simulator for two
    players.
    
    Each player is the general of either the U.S. or German army commanding
    16 privates with various weapons, two medics, one sergeant, and a
    major.  These men have varying abilities that often come in handy while
    engaging in hand-to-hand combat.  Each soldier carries hand grenades,
    adding even greater realism to this war simulation.
    
    At the beginning of the game, the players select the battlefield on
    which to compete.  There are five different battlefields to choose from.
    As the battle begins, you start in separate corners and come out
    fighting.  All troops are represented by small squares.  Both players
    take turns moving, firing, and whatever other strategy they think of.  A
    great feature is each player can do as much as he wants on any one
    turn, adding even more realism to the game of war.
    
    Light on graphics but heavy on challenge, ARIONX: SEEKER OF GANS is the
    third in a six-part game series for math wizards.
    
    If you love cryptographics, logic, math puzzles, and code-cracking,
    then you'll probably enjoy all six games in this series.  Each game
    should be tackled and solved in consecutive order, as the preceding
    games' correct answers are required somewhere in the current game to
    arrive at the correct answer.  However, it is possible to play each
    separately.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BG.DOC

{% raw %}
```



                   ________________________________________
                   |                                      |
                   |                                      |
                   |                                      |
                   |            Battle Ground             |
                   |              ver. 1.00               |
                   |                                      |
                   |            User's Manual             |
                   |                                      |
                   |                                      |
                   |______________________________________|





                        Copyright (C) 1986 MVP SOFTWARE

                                1035 Dallas SE
                            Grand Rapids, MI  49507
























         All rights reserved.  No portion of this manual may be repro-
         duced, in whole or in part, in any media, including electron-
         ic data transmission, facsimile, xerography or any other form 
         of reproduction or transmittal without the written permission 
         of MVP SOFTWARE.
















                                  DISCLAIMER


         MVP SOFTWARE makes no warranties with respect to its pro-
         grams, with the exception that the customer shall be entitled 
         to one (1) updated or modified version of the purchased soft-
         ware package for a fee of 50% of the price of the updated 
         version and upon return of all copies of the original pur-
         chased program.

         The foregoing warranty is in lieu of all other warranties, 
         expressed or implied, including, but not limited to, the im-
         plied warranties of fitness for a particular purpose and mer-
         chantability.  In no event will MVP SOFTWARE be liable for 
         consequential damages even if MVP SOFTWARE has been advised 
         of such damages.

         The customer shall not make available or provide any copies 
         of materials or portions thereof copyrighted by MVP SOFTWARE, 
         including but not limited to, program listings, source code 
         and object code, and program documentation, in any form, to 
         any person other than customer or MVP SOFTWARE employees, 
         without prior written consent from MVP SOFTWARE.  The custo-
         mer may, however, make backup copies of programs for custo-
         mer's own personal use only.

         If any of the provisions, or portions thereof, of this Dis-
         claimer are invalid under any applicable statute or rule of 
         law, they are to that extent deemed to be omitted.



























                                       1








                          SPECIAL SHAREWARE NOTICE

         This version of Battle Ground is distributed under the
         "user supported" concept.  It is a full working version of
         the program.  However, MVP Software receives no royalties
         from the distribution of this software and cannot support
         users who do not register their copies.  To register your
         copy of the program with MVP Software, please send the reg-
         istration price of $15.00.  If you register, you will re-
	 ceive the following:

         (1) The latest version of Battle Ground.  The program comes 
             in a vinyl binding with a full printed documentation man-
             ual.

         (2) Full telephone support and bug fixes.

         (3) The right to purchase new versions of the program for 50%     
             off list price.

         (4) The knowledge that you have supported the development of 
             inexpensive game software.  The authors of Battle Ground 
             are programmers who have devoted many hours to the devel-
             opment of the product.  They receive royalties from the 
             sale of the program.  Your registration fee helps to sup-
             port them in their work.

         (5) As a special incentive, if you register you will receive 
             a free game software package.  This package, called "Fun 
             Disk 102" contains five games guaranteed to keep you com-
             ing back for more.  It is a $9.95 value, free with your 
             registered copy of Battle Ground.  However, you must re-
             quest it at the time of your order.

         To register your copy of the program, send $15.00 (purchase 
         price) to:


                         MVP Software
                         1035 Dallas SE
                         Grand Rapids, MI  49507


         Or order by phone with MasterCard or Visa:


                         (616) 245-8376


         Please specify which version of the program you want (IBM or 
         Sanyo 550/555).






                                       2




                                 Battle Ground


              Battle Ground is a two-player tactical ground combat 
         game typical of the mid 20th century.  Employing various 
         types of soldiers, weapons, and terrains, the object of the 
         game is to defeat your opponent by destroying his platoon of 
         soldiers.  Each weapon available to both sides (United States 
         and Germany) has its strengths and weaknesses, as does each 
         type of soldier.  For example, some weapons have a more lim-
         ited range than others, and soldiers vary in strength and ef-
         fectiveness in combat.  In addition to a main weapon, each 
         soldier carries hand grenades, which can be thrown only as 
         far as the soldier's strength permits.  A player may also 
         call an air strike at some points in the game, and artillery 
         strikes are also permitted.

              In the beginning of the game the US platoon occupies a 
         portion of the battlefield, while the German platoon occupies 
         another portion.  The initial placement of the respective 
         sides will differ with different terrains.  Both players must 
         devise and execute a battle plan to be successful.

              This manual includes instructions for playing Battle 
         Ground.  Please read it through completely before executing 
         any game.


         Note:  Before going any further, please make a working copy 
                of your Battle Ground distribution disk.  To do so, 
                first put your Battle Ground diskette in drive A, 
                which should be the logged drive, and a blank format-
                ted disk in drive B.  Type copy *.* b:, followed by 
                RETURN.  If you have a one drive system, place the 
                system disk in the drive.  Type DISKCOPY, followed by 
                RETURN.  Follow the directions on your screen until 
                the diskcopy is completed.  Now put the distribution 
                disk in a safe place, and use only your new working 
                disk.  Do not place a write protect tab over the notch 
                on the side of the disk.


              Since Battle Ground is not copy protected, it will run 
         from a hard drive.  However, to save a game you must use the 
         A or B drive.

              Files included on your Battle Ground distribution disk 
         include the following:


              BG.EXE -- The first progam file; loads and executes the 
                        program.

              DROP.EXE -- The second Battle Ground program file.

              WAR.EXE -- The third Battle Ground program file.

              BG.DOC -- Documentation file.



                                       3



              All other files on the disk are Battle Ground data 
         files.  These must be on the logged drive for the program to 
         operate properly.


                  A WORD ABOUT COPY PROTECTION AND COPYRIGHT

              MVP SOFTWARE doesn't copy-protect its distribution pro-
         gram diskettes.  We hate to work with copy-protected software 
         as much as you do, it's expensive, and the schemes are broken 
         almost as fast as they are devised.  We do, however, realize 
         that some unscrupulous users likely will take advantage of 
         this and illegally copy our copyrighted programs.  But if you 
         want to continue to have low-cost quality software available, 
         don't give your software away.  We can only continue to main-
         tain our low prices as long as our customers recommend that 
         those interested in our programs purchase them.


                             LOADING INSTRUCTIONS

              Battle Ground is supplied in machine language and runs 
         from DOS.  To run the program, put your working diskette in 
         the logged drive.  Enter BG, followed by RETURN.  This will 
         execute the file BG.EXE, which will automatically execute the 
         other program files.

              First you will see an introductory screen.  Press the 
         space bar to continue.  Next the various weapons available to 
         the two players will be displayed, along with their charac-
         teristics.  Press the space bar once again when you are ready 
         to proceed.  This will bring you to the "selection program."

              The "selection program" allows you to select the type of 
         battlefield on which to conduct your battle as well as other 
         pertinent game information.  You will first be asked whether 
         you are using an IBM PCjr.  If you are, or if you are using 
         any other computer that does not have a numeric keypad, an-
         swer Y.  Otherwise answer N.  This is important for all 
         phases of the game.

              Next you will be asked if you wish to resume an old cam-
         paign.  If you are continuing a game previously suspended and 
         saved, answer Y, and then enter the filename in which the 
         game was saved.  Otherwise enter N.

              Now you must select the type of battlefield on which to 
         conduct your campaign.  Five types are available, each with 
         their own characteristics.  For each main type, the program 
         will select one of five screens available to it, which means 
         there a total of 25 possible playing fields.

              Finally you must decide whether you wish the game to be-
         gin with bombing, and the availability of air strikes and ar-
         tillery.

              Now you are ready to begin the main game.  After the 
         game is initialized, you will see a graphic protrayal of the 
         battlefield, with the American troops and German troops at 
         their initial stations.  Troops are represented by small 


                                       4



         squares.  Both players take turns moving troops, firing 
         weapons and executing strategy.  Both sides may do as much as 
         they like on any turn.  Following is a description of the 
         basic rules and how to execute playing procedures.



                      BATTLE GROUND RULES AND PROCEDURES


         1  Cursor Movement (Cursor Mode)

              The Battle Ground cursor is x-shaped, and at the begin-
         ning of each turn is located in the middle of the playing 
         field.  To move soldiers, fire weapons, or execute any other 
         maneuver, it must be moved.  But before the cursor can be 
         moved the NUM LOCK key must be on.  The following are the 
         commands available in the cursor mode:


         Q -- quit turn
         O -- quit and save game
         1 -- moves cursor down and to the left
         3 -- moves cursor down and to the right
         4 -- moves cursor to the left
         5 -- moves cursor down
         6 -- moves cursor to the right
         7 -- moves cursor up and to the left
         8 -- moves cursor up
         9 -- moves cursor up and to the right


              If you are using an IBM PCjr or other computer that does 
         not have a numeric keypad, use the following keys for cursor 
         movement.


         V -- moves cursor down and to the left
         N -- moves cursor down and to the right
         G -- moves cursor to the left
         B -- moves cursor down
         H -- moves cursor to the right
         T -- moves cursor up and to the left
         Y -- moves cursor up
         U -- moves cursor up and to the right


              Cursor movement is accomplished by pressing the numbered 
         keys on the numeric keypad (note the arrangement of the 
         keys).  When in the cursor mode, a line of less than symbols 
         (<) will be printed at the upper right of the screen.  To 
         move the cursor 5 times faster than normal, press the greater 
         than key (>) before attempting to move the cursor.  To move 
         the cursor 10 times faster than normal, press the question 
         mark key (?).


         2  Registering a Soldier (Command Mode)

              To move a soldier, fire his weapon, or accomplish any 


                                       4



         other tasks with a soldier, the cursor must be located on the 
         soldier.  Once a player moves the cursor directly onto a sol-
         dier, press RETURN to enter command mode.  At this point sev-
         eral new options are available:


         1 -- soldier movement (relocation)
         2 -- fire soldier's main weapon
         3 -- throw hand grenade
         4 -- give medical aid (medics only)
         5 -- hand-to-hand combat
         6 -- call an air strike (major only)
         7 -- display status of soldier
         . -- return to cursor mode


         2.1  Soldier Movement

              To relocate a soldier, from the command mode enter 1.  
         You may move any player once in a round.  If you attempt to 
         move a soldier again in the same round, an error message will 
         be displayed, from which you will be returned to command mode 
         by pressing any key.  To quit player movement enter a period 
         (.).  To move a soldier, press the cursor control keys 2, 4, 
         6, or 8, depending on the direction in which you wish to go 
         (Y, G, H, B for PCjr).  Pressing one of these keys moves a 
         dot cursor in the appropriate direction.  Once the dot cursor 
         is in the location to which you wish to move the soldier, 
         press RETURN to relocate the soldier.

              Soldier movement is limited.  First, a soldier can be 
         moved a maximum of five cursor lengths in a round.  Second, a 
         soldier cannot be moved on or through an obstacle on the 
         field.


         2.2  Firing Main Weapon

              With the cursor on a soldier, press 2 at the command 
         mode to fire his main weapon.  You may fire a weapon, throw a 
         grenade or engage in hand-to-hand combat once a round per 
         soldier.  Once you have entered the firing mode, a direction 
         prompt will appear.  The following are the firing commands:


         1 -- fire up and to the left
         2 -- fire up and to the right
         3 -- fire down and to the left
         4 -- fire down and to the right
         . -- quit command mode and return to cursor mode


              After you have chosen the direction in which to fire, 
         you will be asked to enter the firing angle.  This is a two-
         digit number, so if you wish to shoot at an angle less than 
         10 degrees, you must press 0 and then the number.  For ex-
         ample, to fire at 7 degrees, enter 07.  To quit without 
         firing and return to cursor mode, enter a period or enter a 
         two-digit angle greater than 90.  Weapons fire includes bul-
         lets from rifles and hand guns and bazooka shells from bazoo-


                                       5



         kas.  A beep indicates that a soldier has been injured or de-
         stroyed by weapons fire.

              Note that when a player inputs firing values (direction, 
         angle, distance), the numbers do not appear on the screen.  
         This prevents your opponent from observing the values and 
         using them against you when it's his turn.


         2.3  Throwing a Grenade

              Press 3 while in command mode to throw a hand grenade.  
         But remember that you may use only one weapon per soldier per 
         round.  Again you must enter the appropriate direction (1, 2, 
         3 or 4); press . to return to cursor mode.  As in firing the 
         main weapon, you must then enter the angle, using a two-digit 
         number.  Finally, enter the distance you wish the grenade to 
         be thrown in a two-digit number.  Distance is limited, how-
         ever, by a soldier's strength.  After the grenade explodes, 
         fragments will spread and debris may accumulate.  Remember 
         that grenades can be thrown over objects such as trees and 
         shrubs.


         2.4  Giving Medical Care

              To give medical care to an injured soldier, press 4 at 
         the command-mode prompt.  Only medics can give aid.  To give 
         aid, the medic must be moved next to the unconscious soldier 
         and remain there until the beginning of the following round.  
         Only then can the medic give aid.  If the medic has been next 
         to the unconsious soldier for an entire round, adminster aid 
         by pressing either the 2, 4, 6 or 8 (G, Y, H or B for PCjr) 
         to indicate the direction of the injured soldier from the 
         medic.  Although medical aid is not always successful, and 
         although soldiers may recover on their own, the odds of re-
         covery are much greater with a medic.


         2.5  Hand-to-hand Combat

              Hand-to-hand combat is useful near the end of the game 
         when soldiers have run out of ammunition.  To engage this 
         function, at the command mode press 5.  An enemy must be next 
         to the attacking soldier.  To attack, press either a 2, 4, 6 
         or 8 (G, Y, H or B for PCjr) to indicate the direction in 
         which to attack.  If no enemy soldier is located in the di-
         rection indicated by the key you strike, an error message 
         will be generated.  If the attack is successful, a beep will 
         sound.  The enemy will be injured, but only rarely does hand-
         to-hand combat prove fatal.


         2.6  Calling an Air Strike

              Each side has one major, and he is the only soldier ca-
         pable of calling an air strike.  Locate the major, and press 
         6 at the command mode to call the strike.  Due to weather 
         factors, or lack of planes, a strike will not always be per-
         mitted.  If you may carry out the strike, you will have a 
         choice of three weapons to employ.  These are the following:

                                       6



         1 -- 200 lb. bombs
         2 -- block buster bomb
         3 -- machine gun fire


              Press the number corresponding to the type of air strike 
         you want.  Next, you must specify the location of the strike.  
         Enter a letter (A-E) to indicate the appropriate X sector and 
         a number (1-5) for the Y sector.  The air strike will occur 
         between rounds from 2 to 6 rounds after it has been called.  
         After all, WWII planes cannot achieve the speeds of contem-
         porary jet aircraft.


         2.6 Soldier Status

              To see a soldier's life status, weapons and other fea-
         tures, from the command mode press 7.  S, L and M represent 
         strength, life points and medical status respectively.  U 
         stands for unconscious and C for conscious.  Sgt. is an ab-
         breviation for Sergeant, G represents the number of grenades 
         remaining and A indicates the amount of ammo left.  Press any 
         key to return to command mode.


         2.7  Saving a Game

              If you wish to quit a game and save it to a disk file, 
         from the command mode enter O.  You will be asked to specify 
         a filename.  Do not enter the name of a file already on the 
         disk, as the file will be overwritten.  If you wish to resume 
         the game without quitting, simply press RETURN.  To exit the 
         game without saving it, press ESC.

              It will take a little while to save a game.  When it is 
         saved, you will be returned to the main menu.  The file in 
         which the information is stored will occupy over 40K of disk 
         space.  Consequently there is enough room on the distribution 
         diskette to save several games.  However, you may wish to 
         keep a separate Battle Ground data disk on which you save 
         games.  To do so, run Battle Ground from the A drive, and 
         keep your data disk in the B drive.  When you specify your 
         filename, type B:<filename>, where <filename> is the name of 
         the file you wish to use.


                          SOLDIER/WEAPON INFORMATION


         10 Privates with .30 M-1 (US) or 8mm Musler (German) Ammuni-
            tion=10; shots per round=1; unlimited range; excellent ac-
            curacy.


         4  Privates with .45 Thompson (US) or 9mm MP-40 (German) Am-
            munition=50; shots per round=5; unlimited range; fair ac-
            curacy.


         2  Privates with .30 Bar (US) or 7.62mm MG-88 (German) Ammu-


                                        7



            nition=100; shots per round=10; unlimited range; extremely 
            poor accuracy.


         2  Medics with .45 Colt (US) or 9mm Luger (German) Ammuni-
            tion=8; shots per round=1; limited range of 125; poor ac-
            curacy.


         1  Major with .45 Colt (US) or 9mm Luger (German) Ammuni-
            tion=8; shots per round=1; limited range of 125; poor ac-
            curacy.


         1  Sergeant with Bazooka (both sides) Ammunition=5; shots per 
            round=1; unlimited range; poor accuracy.














































                                        8



```
{% endraw %}

## FILE1090.TXT

{% raw %}
```
Disk No: 1090                                                           
Disk Title: Battle Ground & ARIONX: Seeker of Gans                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Battle Ground                                            
Author Version: 1.00                                                    
Author Registration: $15.00                                             
Special Requirements: CGA.                                              
                                                                        
BATTLE GROUND is a World War II field-combat game/simulator for two     
players.                                                                
                                                                        
Each player is the general of either the U.S. or German army commanding 
16 privates with various weapons, two medics, one sergeant, and a       
major.  These men have varying abilities that often come in handy while 
engaging in hand-to-hand combat.  Each soldier carries hand grenades,   
adding even greater realism to this war simulation.                     
                                                                        
At the beginning of the game, the players select the battlefield on     
which to compete.  There are five different battlefields to choose from.
As the battle begins, you start in separate corners and come out        
fighting.  All troops are represented by small squares.  Both players   
take turns moving, firing, and whatever other strategy they think of.  A
great feature is each player can do as much as he wants on any one      
turn, adding even more realism to the game of war.                      
                                                                        
Program Title: ARIONX: Seeker of Gans                                   
Author Version: 1.00                                                    
Author Registration: None.                                              
Special Requirements: CGA.                                              
                                                                        
Light on graphics but heavy on challenge, ARIONX: SEEKER OF GANS is the 
hird in a six-part game series for math wizards.                       
                                                                        
If you love cryptographics, logic, math puzzles, and code-cracking,     
then                                                                    
you'll probably enjoy all six games in this series.  Each game          
should be tackled and solved in consecutive order, as the preceding     
games' correct answers are required somewhere in the current game to    
arrive at the correct answer.  However, it is possible to play each     
separately.                                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  Disk No. 1090  BATTLE GROUND and ARIONX: SEEKER of GANS  >>>>   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for BATTLE GROUND type:                      ║
║                COPY BG.DOC PRN (press Enter)                            ║
║                                                                         ║
║ To start BATTLE GROUND, Type: BG (press enter)                          ║
║                                                                         ║
║                     * * * * * * * * * * * * * *                         ║
║                                                                         ║
║ For instructions about ARIONX to start the game, type:                  ║
║                CD ARIONX (press Enter)                                  ║
║                COPY ARIONX.HIS PRN  (press Enter)                       ║
║          then,                                                          ║
║                README (press Enter)                                     ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1090

     Volume in drive A has no label
     Directory of A:\

    BG       EXE     22143   2-18-87   1:49a
    DROP     EXE     24616   4-28-87   7:47a
    WAR      EXE     66956   4-28-87   7:44a
    CLEAR1            1426   1-01-80   4:54a
    CLEAR2             293   1-01-80   6:07a
    CLEAR3             270   1-01-80   6:13a
    CLEAR4             781   1-01-80   6:47a
    CLEAR5             732   1-01-80   8:11a
    FOREST1            130   1-01-80  12:59a
    FOREST2            198   1-01-80   1:04a
    FOREST3            222   1-01-80   1:12a
    FOREST4            553   1-01-80  12:27a
    FOREST5            315   1-01-80  12:40a
    SCRUB1            1878   1-01-80   2:32a
    SCRUB2            1035   1-01-80  12:53a
    SCRUB3             338   1-01-80   1:38a
    SCRUB4             298   1-01-80   2:45a
    SCRUB5             778   1-01-80   3:39a
    DANVILLE           956   1-01-80   2:54a
    FENCONII          2867   1-01-80   4:34p
    HAMBORG           6193   1-01-80   6:56a
    IORG              3890   1-01-80   9:55p
    MADISON           5623   1-01-80   5:27a
    MARVILLE          2179   1-01-80   7:06a
    MULBERRY          1275   1-01-80  12:15a
    MUNALI            1000   1-01-80  12:49a
    OPUSTON           9728   1-01-80  12:27a
    PLANTERS          2623   1-01-80   3:46a
    WEAPONS           4477   1-01-80   1:34a
    OUCH               128   7-12-85  12:13a
    THUMP              128   7-12-85  12:13a
    BG       DOC     23168   9-05-89  12:31a
    README             512   7-12-90  12:10a
    GO       BAT        38   6-07-88   1:16p
    GO       TXT      1264   1-01-80  12:27a
    FILE1090 TXT      3484   8-13-90   9:15p
    GO       BAK      1264   1-01-80   7:08a
    ARIONX       <DIR>    
           38 file(s)     193759 bytes

     Directory of A:\ARIONX

    .            <DIR>    
    ..           <DIR>    
    GAME3    EXE     95750   2-21-88  12:44p
    README   EXE     41192   2-21-88   1:09p
    ARIONX   HIS      5749   2-20-88   1:47p
            5 file(s)     142691 bytes

    Total files listed:
           43 file(s)     336450 bytes
                            1024 bytes free
