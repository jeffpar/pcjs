---
layout: page
title: "PC-SIG Diskette Library (Disk #3040)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3040/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3040"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FGODMOM.DOC

{% raw %}
```






                                     Welcome to
          
          
                                      FFFFFFFF
                                      FF      
                                      FF      
                                      FFFFFF  
                                      FF      
                                      FF    ..
                                      FF    ..
          
                GGGG     OOOO   DDDDDD   MM      MM   OOOO   MM      MM
              GG    GG OO    OO DD    DD MMMM  MMMM OO    OO MMMM  MMMM
              GG       OO    OO DD    DD MM  MM  MM OO    OO MM  MM  MM
              GG  GGGG OO    OO DD    DD MM      MM OO    OO MM      MM
              GG    GG OO    OO DD    DD MM      MM OO    OO MM      MM
                GGGGGG   OOOO   DDDDDD   MM      MM   OOOO   MM      MM TM
                                                          VERSION 4.0
          
                 a game of magical mayhem from Soggybread Software.
          
          
                                    USERS MANUAL
          
          
                          _________________________________  
                         /                                 \ 
                        |                                   |
                        |        ___________________        |
                        |       /                   \       |
                        |      |                     |      |
                        |      |                     |      |
                        |       >                   <       |
                        |      |                     |      |
                        |      |                     |      |
                        |      |                     |      |
                        |      |                     |      |
                        |      |                     |      |
                        |      |                     |      |
                        |      |                     |      |
                        |      |                     |      |
                        |      +---------------------+      |
                        |                            ^      |
                        |                           | |     |
                        |                            -      |
                         \_________________________________/ 
                                                             TM
          
          
             { See page #10 for a FREE offer from Soggybread Software! }
          
          
                        Copyright (C)1991,1992 John Blackwell
                                All Rights Reserved.












                                  TABLE OF CONTENTS
          
          
          ***** LEGALESE *****
          
               COPYRIGHT AND TRADEMARK STATEMENT.....................1
               LICENSE STATEMENT.....................................1
               DISCLAIMER OF WARRANTY................................1
          
          
          ***** GETTING STARTED *****
          
               SHAREWARE.............................................2
               STARTING THE GAME.....................................2
               PRINTING THIS MANUAL..................................2
               FILES.................................................2
          
          
          ***** FEATURES OF THE GAME *****
          
               INTRODUCTION..........................................3
               FEATURES..............................................3
               NEW FEATURES IN VERSION 4.0...........................4
               COMMAND-LINE OPTIONS..................................4
               GRAPHICS COMPATIBILITY................................4
          
          
          ***** RULES OF THE GAME *****
          
               THE OBJECT OF F.GODMOM................................5
               THE WAND..............................................5
               THE CRABS.............................................5
               IMPLOSIONS............................................6
               EXTRA LIVES...........................................6
               WARPING TO OTHER LEVELS...............................6
          
          
          ***** HELP! *****
          
               HELP SCREENS..........................................7
               GAME CONTROLS.........................................7
               GAME CONTROL NOTES....................................7
               IF YOU ARE STUCK......................................8
               HOW TO COMPLETE LEVEL #1..............................8
          
          
          ***** REGISTRATION INFORMATION *****
          
               $5.00 REGISTRATION BENEFITS...........................9
               $10.00 REGISTRATION BENEFITS..........................9
               $20.00 REGISTRATION BENEFITS.........................10
               UPGRADES.............................................10
               FREE STUFF...........................................10
               REGISTRATION ORDER FORM..............................11






          
          
                                                                      1
                             F.GODMOM 4.0 USER'S MANUAL
          

                                ***** LEGALESE *****
          
                          COPYRIGHT AND TRADEMARK STATEMENT
          
              F.Godmom 4.0 and the accompanying user's manual are copyright 
          (C)1991,1992 John Blackwell, all rights reserved.  Users are 
          licensed to make and distribute copies under the rules listed 
          below in the license statement.
              F.Godmom and the Soggybread Software seal are trademarks of 
          Soggybread Software.
          
          
          
                                  LICENSE STATEMENT
          
              Soggybread Software maintains ownership of this F.Godmom 
          version 3.0 and the accompanying manual.  Soggybread Software 
          grants the user a non-exclusive, limited license to play this 
          game, make copies, upload those copies to electronic bulletin 
          boards and distribute those copies under the following terms:
               1. All copies must be complete and unaltered.
               2. If you use/play F.Godmom regularly, you must register      
                  your copy at the $5, $10 or $20 level.
               3. Copies cannot be sold without express written permission 
                  from Soggybread Software or John Blackwell.
               4. All copies remain property of Soggybread Software.
          Use of this software constitutes acceptance of these terms.
          
          
          
                               DISCLAIMER OF WARRANTY
          
              Soggybread Software hereby disclaims all warranties relating 
          to this software, whether express or implied, including without 
          limitation any implied warranties of merchantability or fitness 
          for a particular purpose.  Soggybread Software will not be liable 
          for any special, incidental, consequential, indirect or similar 
          damages due to loss of data or any other reason, even if 
          Soggybread Software or an agent of Soggybread Software has been 
          advised of the possibilities of such damage.  In no event shall 
          Soggybread Software's liability for any damages ever exceed the 
          amount paid by the user for registration.  Use of this software 
          constitutes acceptance of these terms and the terms listed above 
          in the license statement.
          
          
          
          
          
          
          
          
          
          
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      2
                             F.GODMOM 4.0 USER'S MANUAL
          

                             ***** GETTING STARTED *****
          
                                      SHAREWARE
          
              F.Godmom 4.0 is shareware.  That means that you are free to 
          copy and distribute copies of this program in accordance with the 
          license statement listed above.  In fact, I encourage you to give 
          copies of this program to your friends and coworkers, and upload 
          F.Godmom to your favorite BBS.  Giving away copies of F.Godmom is 
          a great way to make friends and can make us both happy.
              If you enjoy the game and play it regularly, you are expected 
          to be honest and pay for your copy of the program by registering 
          it at the $5, $10 or $20 level.  In this way you help support the 
          production of future releases from Soggybread Software and pick 
          up some nifty registration bonuses.
              Three sections starting on page #9 describe the benefits of 
          registering your copy of F.Godmom.  At the end of the manual are  
          couple of handy order forms.  Just fill out one of the forms, and 
          send it with your check or money order to:
                                   JOHN BLACKWELL
                                 48 WALBROOK AVENUE
                                  DAYTON, OH 45405
          
                         I look forward to hearing from you.
          
          
                                  STARTING THE GAME
          
              To begin playing the game immediately, enter "FGODMOM" at the 
          DOS command prompt and follow the program's prompts.
              You can get general help while playing the game by pressing 
          the <H> or <F1> keys.  Pressing <F2> will give you a listing of 
          the game controls, and pressing <F3> will bring up instructions 
          for completing level #1.
          
          
                                PRINTING THIS MANUAL
          
              Individual users are authorized to print this file 
          (FGODMOM.DOC) to make a hard copy of the users manual.  To print 
          the manual, enter "COPY FGODMOM.DOC PRN" at the DOS prompt.  You 
          must be in the directory containing the file FGODMOM.DOC.  The 
          entire manual requires thirteen pages to print.
          
          
                                        FILES
          
          Your copy of F.Godmom should come with four files:
                 FGODMOM.EXE  The main game program.                
                 FGODMOM.DOC  The documentation file. (This file.)  
                    READ.ME   Instructions for getting started.     
                ORDERFRM.DOC  The printable registration order form.
          Another file, SAVEGAME.DAT, may be created if you save your game.
          
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      3
                             F.GODMOM 4.0 USER'S MANUAL
          

                          ***** FEATURES OF THE GAME *****
          
                                    INTRODUCTION
          
              Welcome to F.Godmom!  F.Godmom is an arcade/puzzle game 
          written by John Blackwell and presented by Soggybread Software.
              In F.Godmom you play a fairy godmother on a mission to free 
          fifty of your fellow fairy godmothers.  Armed with a magic wand 
          of transformation, you must solve the puzzles on fifty levels 
          while avoiding killer crabs and dangerous dimensional implosions.  
          If you succeed, you will see your fellow fairy godmothers freed 
          and they will dance for joy in your honor.  If not, it's curtains 
          for you.
              This manual contains complete instructions to help you get 
          started.  The manual also contains information on how to play the 
          game, control the fairy, use the games features (such as the boss 
          key and on-line help), and register your copy.
              Good luck and have fun!
          
          
                                      FEATURES
          
          F.Godmom comes with many special features:
              SHAREWARE You can legally give copies of F.Godmom to your 
                  friends or upload it to your favorite bulletin board.  In  
                  fact, I encourage you to give it away.  Feel free to take  
                  this game to work (see BOSS KEY below) and give copies to  
                  your co-workers or onto campus to give to your fellow      
                  students.  Shareware is truly one of the few things that   
                  you can give to someone else and still possess yourself.   
                  (see the LICENSE STATEMENT for the details of how the      
                  game can be distributed)
              ANIMATED GRAPHICS which operate on CGA, EGA and VGA monitors.
                  graphics systems. (see GRAPHICS COMPATIBILITY)
              FIFTY BUILT-IN LEVELS filled with puzzles, hidden pictures 
                  and hidden messages.
              ON-LINE HELP to tell you how to play the game, what keys to    
                  press and even how to get past the first level.  (see      
                  GAME CONTROLS)
              SAVE/RESTORE lets you have up to nine different games in       
                  progress and finish them at your convenience.  Used        
                  correctly, this feature can help you avoid losing lives.   
                  You merely have to save your game after you complete each  
                  level.  Then, if you lose a life, you can restore the      
                  game to get that life back. (see GAME CONTROLS)
              PAUSE lets you freeze the game until you are ready to          
                  continue.  (While you are in pause mode, you can press     
                  <P> again, causing the program to continue and then        
                  immediately repause.  In this way you can run the game     
                  frame-by-frame.)  (see GAME CONTROLS)
              BOSS KEY lets you camouflage the game with a fake DOS 
                  screen.  This feature is for when the boss comes around    
                  while you are playing the game at work.  (You should be    
                  ashamed of yourself.)  (see GAME CONTROLS)
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      4
                             F.GODMOM 4.0 USER'S MANUAL
          

              THE DANCE OF JOY.  If you finish all fifty levels of           
                  F.Godmom, you will see the fairies freed and their dance   
                  of joy (complete with music) in your honor.  (see *FREE*   
                  STUFF)
          
          
                             NEW FEATURES IN VERSION 4.0
          
          F.Godmom 4.0 also come with some new features:
              NEW GRAPHICS:  F.Godmom now sports beautiful new graphics,     
                  thanks to Tom Hall and Adrian "Master of the Pixel"        
                  Carmack of Id Software.  If you have one of their          
                  Commander Keen games and are still looking for one more    
                  reason to register it, do it because they are incredibly   
                  nice guys.
              BETTER KEYBOARD RESPONSE:  The fairy corners like a Ferrari    
                  now (with no annoying pauses), and once again I have to    
                  thank the fine folks at Id Software.
              GRAPHICAL MENUS AND HELP:  OK, Tom Hall did suggest this,      
                  but I did the actual work.
              VARIABLE SPEED CRABS:  Now you slower game players can speed-  
                  up or slow-down the crabs with the press of a key.
              EASIER LEVELS:  I've taken some of the crabs out of the early  
                  levels.  (Please don't applaud, just send money.)
          
          
                                COMMAND-LINE OPTIONS
          
              Command-line options are codes that you add to the command 
          line when you start the program.  Using these codes, you can 
          start the game just the way you like it.
          
          Here is a list of the command line options:
               CGA : Use CGA graphics.
               FIP : Freeze implosions until key pressed.
               JOY : Use joystick controls.
              KEYB : Use keyboard controls.
            RULES- : Skip the rules.
            SAVE:n : Save and restore from position #n. (n is 1-9.)
           SLOCRAB : Start the game with the crabs set to half speed.
              SND+ : Start the game with sound.
              SND- : Start the game without sound.
          
              Say, for example, that you wanted the program to 
          automatically save your games to position #5, start with sound, 
          skip the rules and use the keyboard controls.  Instead of 
          starting the game with the command "FGODMOM", you would start the 
          game with this command: "FGODMOM SAVE:5 SND+ RULES- KEYB".
          
          
                               GRAPHICS COMPATIBILITY
          
              F.Godmom was written for PCs, ATs and XTs with CGA, EGA or 
          VGA monitors.  There is the possibility, however, that the game 
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      5
                             F.GODMOM 4.0 USER'S MANUAL
          

          will work with other monitors such as the MCGA, AT&T 400, EGA64, 
          EGA monochrome, or Hercules with CGA emulation.
              Note, though, that the game has only been tested on CGA, EGA 
          and VGA monitors.  I make no guarantees about how the game will 
          work with any other type of monitor.
          
          
                            ***** RULES OF THE GAME *****
          
                               THE OBJECT OF F.GODMOM
          
              The object of F.Godmom is to finish all fifty levels to free 
          your fellow fairy godmothers.  To finish a level, you must 
          collect seven pennies and the key.  After you collect seven 
          pennies, the exit door will appear (unless the space where the 
          exit door is to appear is occupied by another object.)  Once you 
          reach the exit door with the key, the level is complete, and you 
          move on to the next level.  When you complete all fifty levels, 
          the fairies will celebrate in your honor with music and dancing.
          
          
                                      THE WAND
          
              Your only weapon is a wand of transformation.  This wand 
          allows you to transform objects for five seconds.  First you must 
          scan the pattern of an object (like taking its picture) by 
          pressing the <Ctrl> key (or any key on the bottom row of the 
          keyboard.)  The pattern you have scanned will then appear in your 
          WAND PATTERN box at the bottom of the screen to show you what 
          pattern your wand contains.  You can then project that pattern 
          onto other objects by pressing the <Ctrl> key or the <Space bar>.  
          Transformed objects will stay that way for five seconds.  At the 
          end of five seconds, the objects will go back to normal.
              For example: If you want to change a brick wall to a ladder, 
          you should first face the ladder and press the <B> key.  A 
          picture of a ladder will then appear in your WAND PATTERN box.  
          Face the brick wall and press the space bar.  In a flash the 
          brick wall should transform to a ladder.  At the end of five 
          seconds, the ladder will change back to brick.
              Note: 1) The wand does not work on objects made of iron.  You 
          can neither scan nor project the pattern of an iron wall or an 
          iron ladder. 2) You can fire the wand to the left and right only.
          
          
                                      THE CRABS
          
              As you make your way through the levels, you must be careful 
          not to be nabbed by the crabs.  The crabs are stupid and cannot 
          run faster than you, but if they touch you, they caught you.
              Note: The crabs are deathly afraid of heights and will not 
          willingly follow you off of a ledge.  In fact, the crabs have 
          such a fear of heights that they will not step out over a gap in 
          the floor, even if there is a ladder to climb onto.  This fact is 
          important to the completion of several of the levels.
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      6
                             F.GODMOM 4.0 USER'S MANUAL
          

                                     IMPLOSIONS
          
              Sometimes, objects disappear in a flash of light.  This 
          happens when two objects try to occupy the same space.  For 
          example, if you try to transform a crab to a ladder while the 
          crab overlaps another ladder, there will be two ladders in the 
          same space (where the ladders overlap).  Because two objects 
          cannot exist in the same space, This overlap causes a small tear 
          in reality (trust me), and some objects may be sucked away (an 
          implosion).  The best way to see what an implosion does is to 
          create one.  An implosion is not dangerous, unless you are close 
          enough to get sucked in.
              Note: Crabs that are sucked into implosions are returned 
          after five seconds.  Returning crabs reappear at the location of 
          the exit door, whether that door has appeared or not (but not if 
          the location where the door is to appear is occupied by another 
          object).
              If you would like to view the action of an implosion closely, 
          start the game with the command "FGODMOM FIP" at the DOS prompt.  
          Then, when an implosion occurs, the game will freeze until you 
          press a key.  This feature allows you see exactly what happens 
          when an implosion occurs.
          
          
                                     EXTRA LIVES
          
              Every time you are caught by a crab, sealed in a wall, or 
          caught in an implosion, you lose a life.  However, there are ways 
          to earn extra lives during the game.  For every level you finish, 
          you earn an extra life.  You can also earn extra lives by 
          collecting the bonus markers (shaped like gold coins marked with 
          wand stars).  The bonus markers appear when you have collected 
          the seven pennies.  Every bonus marker you have (at the instant 
          you finish the level or get caught) is worth one extra life.
          
          
                               WARPING TO OTHER LEVELS
          
              It is possible in F.Godmom to jump to other levels by 
          pressing the <W> key.  However, you need a special magical object 
          to teleport in this way.  I leave the puzzle of how to warp in 
          your hands.  If you cannot figure out the secret on your own, you 
          can send a self-addressed, stamped envelope to Soggybread 
          Software, and I will send you the secret of warping.  Hint: To 
          warp you must create a magical object called a "warp door" by 
          projecting the pattern of one object onto another.
          
          
          
          
          
          
          
          
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      7
                             F.GODMOM 4.0 USER'S MANUAL
          

                                  ***** HELP! *****
          
                                    HELP SCREENS
          
              There are several on-line help screens available to help you 
          through F.Godmom.  Press <H> or <F1> to get the general help 
          screens.  Press <F2> to see the list of controls only.  If you 
          need help finishing Level #1, you can press <F3> to receive 
          explicit instructions.  Finally, if the boss comes around to 
          check on you, you can press the <!> key (known as the "Boss Key") 
          to hide the fact that you are playing a game.
          
          
                                    GAME CONTROLS
          
          +--------------------+-----------------------------------------+
          |         TO         |                  PRESS                  |
          +--------------------+-----------------------------------------+
          |        MOVE        |        an arrow key or joystick         |
          |   PROJECT pattern  |   <Alt>, <space bar> or joy button #1   |
          |    SCAN pattern    | <Ctrl>, bottom row key or joy button #2 |
          |    get main menu   |                 <Esc>                   |
          |      get HELP      |               <F1> or <H>               |
          |  get control list  |                  <F2>                   |
          |  finish Level #1   |                  <F3>                   |
          |   restart level    |                  <F4>                   |
          |     PAUSE game     |                   <P>                   |
          |    UNPAUSE game    |           any key except <P>            |
          |     SAVE game      |                   <S>                   |
          | RESTORE saved game |                   <R>                   |
          |  show BOSS screen  |                   <!>                   |
          | WARP to level #51  |                   <W>                   |
          | toggle crab speed  |                  <F7>                   |
          |    toggle sound    |                  <F8>                   |
          |  toggle joystick   |                  <F9>                   |
          |     EXIT game      |              <F10> or <Q>               |
          +--------------------+-----------------------------------------+
          
          
                                 GAME CONTROL NOTES
          
          Here are a few important things to know about the game controls:
              1) If you press <P> while in the pause mode, the game will     
                 unpause and then immediately repause.  This allows you to   
                 run the game frame-by-frame (to examine how the crabs move  
                 or whatever.)  Hit a key other than <P> to stop pausing.
              2) When you save a game with the <S> key, the game will        
                 always be saved to the file "SAVEGAME.DAT".
              3) If you try to restore a game with <R>, and the file         
                 "SAVEGAME.DAT" does not exist, the program ignore you.
              4) You must have the magic warp key to use the warp command.   
                 You are supposed to figure out how to get the magic warp    
                 key on your own.  However, there are other ways to find     
                 out how to get it.  (see FREE STUFF)
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      8
                             F.GODMOM 4.0 USER'S MANUAL
          

                                  IF YOU ARE STUCK
          
          There are several ways to get help if you are stuck:
              1) If you do not know how to complete level #1, see the        
                 section on the next page, "How To Complete Level #1."
              2) If you are stuck at another level, it may be because you    
                 have forgotten one of the rules of the game.  Select RULES  
                 from the menu to review the rules during the game.
              3) To get a hint for a particular level, select HINT FOR       
                 CURRENT LEVEL from the menu.  You should save this feature  
                 for when you are REALLY stuck, though.  (We wouldn't want   
                 you to get hint addicted, would we?)
              4) You may want to use the magic warp door to bypass a         
                 troublesome level until you can come back to it.
                 (see WARPING TO OTHER LEVELS)
              5) If all else fails, you may wish to write me at:
                                    F.GODMOM HELP
                                 48 WALBROOK AVENUE
                                  DAYTON, OH 45405
              Please include a self-addressed, stamped envelope if you have 
          not yet registered your copy.
          
          
                              HOW TO COMPLETE LEVEL #1
          
          Completing level #1 is fairly easy.  Just follow these 
          instructions:
              1) Scan the pattern of the ladder to your left by pressing 
                 the <Ctrl> key (or any key on bottom row of the keyboard). 
                 If you do this correctly, your WAND PATTERN box  
                 (displayed at the bottom of the screen) will contain a 
                 picture of a ladder.
              2) Use the arrow keys to make the fairy walk forward until     
                 she stops against the brick wall.
              3) Project the pattern of the ladder onto the brick wall by 
                 pressing the <Alt> or the space bar.
              4) Walk past the ladder to the right.  (You must do this 
                 quickly, because the brick wall will remain a ladder for 
                 only five seconds.)
              5) Repeat steps #4 and #5 until you are past the brick walls.
              6) Collect all seven pennies and the key.  The exit door 
                 will appear once you have collected the seven pennies.
              7) Exit through the exit door.
          
          
          
          
          
          
          
          
          
          
          
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      9
                             F.GODMOM 4.0 USER'S MANUAL
          

                        ***** REGISTRATION INFORMATION *****
          
                             $5.00 REGISTRATION BENEFITS
          
              At the five dollar registration level you get a copy of 
          F.GODMOM TIPS AND SECRETS.  This "cheat sheet" contains 
          information on how to release some of F.Godmom's neat and 
          convenient features.  These features are not necessary for 
          playing, winning or enjoying the game, but make the game a whole 
          lot more fun to play.  With your $5 registration, you will learn 
          how to:
              CAMOUFLAGE THE FAIRY OR CRABS (as a brick wall, a ladder, a    
                  key, etc.  this really looks neat)
              MAKE THE GAME SAVE AUTOMATICALLY (as you finish each level)
              MAKE THE GAME RUN AT MAXIMUM SPEED (you can't really play the  
                  game at this speed, but it's fun to watch)
              START THE GAME WITH 99 LIVES (makes it a little harder to run  
                  out)
              MAKE THE FAIRIES DANCE (even if you have not finished all of   
                  the levels)
              SPEED UP THE GAME (makes the game more challenging)
              SLOW DOWN THE GAME (makes the game easier)
              MAKE THE PAUSE INVISIBLE (clears your view of the playing      
                  field)
              WARP TO OTHER LEVELS (actually you learn how to create the     
                  magic warp key)
              CAMOUFLAGE THE FAIRY LOOK AS A CRAB (this looks way cool;      
                  beams shoot from your claws)
              SKIP THE ANNOYING TEXT SCREENS ('nuff said)
              MAKE THE TRANSFORMATIONS LAST LONGER (ten seconds instead of   
                  five)
          
              Along with the above information, you will get valuable 
          playing tips from the game's author.  (There's no better source.)
          
              You can use one of the handy order forms at the end of the 
          manual to help you register.
          
          
                            $10.00 REGISTRATION BENEFITS
          
              If you register at the ten dollar level, you get even more 
          great stuff.  Of course you will get a copy of F.GODMOM TIPS AND 
          SECRETS like a $5 registration, but you also get a disk with:
          
                           THE LATEST VERSION OF F.GODMOM
                                        plus
                      FIFTY EXTRA LEVELS FOR THE GAME F.GODMOM
          
              These new levels are filled with new puzzles.  If you thought 
          the last fifty levels were challenging, you ain't seen nothin' 
          yet.
              You can use one of the handy order forms at the end of the 
          manual to help you register.
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      10
                             F.GODMOM 4.0 USER'S MANUAL
          

                            $20.00 REGISTRATION BENEFITS
          
              The twenty dollar registration brings the best bonuses.  Not 
          only do you get F.GODMOM TIPS AND SECRETS and FIFTY EXTRA LEVELS, 
          you also get F.GODMOM SOLUTIONS, an illustrated solution book to 
          help you through the toughest levels.
              Are you having trouble getting past levels #9, #11, #37 or 
          #44?  Get this solutions book and you will learn how I, John 
          Blackwell, the only living Grand Master F.Godmom player, get past 
          those levels every time.
              You can use one of the handy order forms at the end of the 
          manual to help you register.
          
          
                                      UPGRADES
          
              If you can't decide between two registration levels, don't 
          worry.  Go ahead and register at the lower level.  If you later 
          decide that you want the benefits of a higher registration, you 
          will not have to pay twice.  Any money that you send toward 
          registering your copy of F.Godmom can go toward your updating 
          your registration.
              So, for instance, if you register at the $10 level and later 
          decide that you want the solution manual, you don't have to send 
          $20 more.  Just send $10 to cover the difference.
              You can use one of the handy order forms at the end of the 
          manual to help you upgrade you registration.
          
          
                                     FREE STUFF
          
              Even if you are not yet ready to register your copy of 
          F.Godmom, you may still want to send for some free information 
          from Soggybread Software.  If you send a self-addressed, stamped 
          envelope to the address listed below, you will receive FREE 
          information on how to:
                               NEVER RUN OUT OF LIVES,
                                WARP TO OTHER LEVELS
                                         and
                               MAKE THE FAIRIES DANCE
                                     ON COMMAND.
              With the magic warp door you will be able to warp to any 
          level you choose and see how much of the game you have completed.
              With the secret of fairy dancing, you will be able to make 
          the fairies dance on command, even if you have not completed all 
          of the levels.
              To get this FREE information SEND A SELF-ADDRESSED, STAMPED 
          ENVELOPE to:
                                 FREE F.GODMOM STUFF
                                 48 WALBROOK AVENUE
                                  DAYTON, OH 45405
              Please include information on how you acquired your copy and 
          what you think of the game.  I look forward to hearing from you.
          
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



          
          
                                                                      11
                             F.GODMOM 4.0 USER'S MANUAL
          

                               REGISTRATION ORDER FORM
          
          I would like to: (check one)
              [] register F.Godmom at the $5 level.
              [] register F.Godmom at the $10 level.
              [] register F.Godmom at the $20 level.
              [] upgrade my F.Godmom registration from
                 the $________ level to the $________ level.
          
          Enclosed is my check/money order made payable to JOHN BLACKWELL.  
          Please send me the registration bonuses offered at the indicated 
          level.
                      (Ohio residents please add 6% sales tax.)
          
          
          Send my registration bonuses to: (please print)
          
              NAME:________________________________________________________
          
              ADDRESS:_____________________________________________________
          
              CITY:_______________________  STATE:______  ZIP:_____________
          
          My disk drive size is [5.25"/3.5"] (circle one).
          
              ========================================================
          
                          Send your registration order to:
                                   JOHN BLACKWELL
                                 48 WALBROOK AVENUE
                                  DAYTON, OH 45405
          
          
              Please remember to make your registration check or money 
          order payable to JOHN BLACKWELL.
          
          
              I would like very much to read your comments about F.Godmom 
          (how you acquired your copy, what made you want to register, 
          suggestions for improvements, etc.)  Please list below any 
          comments you would like to make:
          
            _______________________________________________________________
          
            _______________________________________________________________
          
            _______________________________________________________________
          
          
              I would like to personally thank you very much for your 
          registration.  It is people like you that keep shareware growing 
          and I wish you the best. --John Blackwell
          
              4PS-FG40
          
          
             Copyright (C)1991,1992 John Blackwell. All rights reserved.



```
{% endraw %}

## FILE.TXT

{% raw %}
```



                             Program Title: F.Godmom 4.0

                             Author ID Number: 45371*SOG



          Program Description:

              In F.Godmom you play a fairy godmother on a mission to free
          fifty of your fellow fairy godmothers.  Armed only with your wits
          and your magic wand of transformation, you must make your way
          across fifty levels while avoiding killer crabs and dangerous
          dimensional implosions.  If you succeed, your fellow fairy
          godmothers will celebrate in your honor with music and dancing.
          If not, it's curtains for you.



          Intended Users: Arcade/Puzzle Game Players



          Update Improvements Over Previous Versions:

              1) IMPROVED GRAPHICS: F.Godmom 4.0 features much improved
          graphics.  The artists behind the Commander Keen series and
          Wolfenstein 3-D took an interest in my game and were nice enough
          to help me improve my graphics.
              2) IMPROVED KEYBOARD SUPPORT: You will find the keyboard much
          more responsive in this version of F.Godmom.  Also, the game no
          longer has problems reading XT keyboards.
              3) MENUS: The player can now access all parts of the game
          through the front-end, pop-up and help menus.
              4) GRAPHIC HELP: The help pages are now in graphical form
          with illustrations of important characters.
              5) SIMPLIFIED LEVELS: Over half the levels have been
          simplified to make the game more accessible to the novice player.
          In addition, the player can now set the pursuing crabs to half
          speed.



          Unique Features:

               1) Fully animated, cartoon-like graphics which operate on
                  CGA, EGA and VGA monitors;
               2) Boss key, with one keystroke you can hide the fact that
                  you are playing a game;
               3) On-line help;
               4) Save and restore;
               5) Fifty different levels filled with puzzles, hidden
                  messages and hidden pictures (a list of hidden messages
                  and pictures is available on request);
               6) After you have completed all fifty levels, F.Godmom
                  rewards you with a show, complete with music and dancing.











                             Program Title: F.Godmom 4.0

                             Author ID Number: 45371*SOG



          Special System Requirement: CGA, EGA or VGA graphics.



          How To Start The Program: Enter "FGODMOM" at the DOS prompt.  (Or
          "FGODMOM CGA" if you would like to see the CGA graphics.)



          Registrations:

               Regular users of F.Godmom should register their copy at the
          $5, $10 or $20 level.
               Users registered at the $5 level get "F.Godmom Tips and
          Secrets" which has tips for playing F.Godmom and information on
          how to make the game more fun to play (by warping to other
          levels, making the fairies dance, speeding-up the game,
          disguising the fairy as a crab, etc.)
               Users registered at the $10 level get a disk with the latest
          version of F.Godmom and "Fifty Extra Levels For The Game
          F.Godmom" plus a copy of "F.Godmom Tips and Secrets."
               Users registered at the $20 level get "F.Godmom Solutions,"
          a book with solutions to the first fifty levels, plus the latest
          version of F.Godmom, "Fifty Extra Levels For The Game F.Godmom"
          and "F.Godmom Tips and Secrets."
               Users who are not yet ready to register can get free
          information on warping to other levels and making the fairies
          dance on command by sending a self-addressed, stamped envelope
          to:
                                 FREE F.GODMOM STUFF
                                 48 WALBROOK AVENUE
                                  DAYTON, OH 45405



          Files: FGODMOM.EXE (the main game program)
                 FGODMOM.DOC (the printable documentation file) (11 pages)
                    READ.ME  (some help to get started)
                ORDERFRM.DOC (the printable, registration order form)


















```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```






                        F.GODMOM 4.0 REGISTRATION ORDER FORM
                          (PAYMENT BY CHECK OR MONEY ORDER)
          
          
          I would like to: (check one)
              [ ] register F.Godmom at the $5 level.
              [ ] register F.Godmom at the $10 level.
              [ ] register F.Godmom at the $20 level.
              [ ] upgrade my F.Godmom registration from
                  the $________ level to the $________ level.
          
          Enclosed is my check/money order made payable to JOHN BLACKWELL.  
          Please send me the registration bonuses offered at the indicated 
          level.
                      (Ohio residents please add 6% sales tax.)
          
          
          Send my registration bonuses to: (please print)
          
              NAME:________________________________________________________
          
              ADDRESS:_____________________________________________________
          
              CITY:_______________________  STATE:______  ZIP:_____________
          
                  My disk drive size is [5.25"/3.5"] (circle one).
          
          =================================================================
          
                          Send your registration order to:
                                   JOHN BLACKWELL
                                 48 WALBROOK AVENUE
                                  DAYTON, OH 45405
          
              Please remember to make your registration check or money 
          order payable to JOHN BLACKWELL.
          
          
              I would like very much to read your comments about F.Godmom 
          (how you acquired your copy, what made you want to register, 
          suggestions for improvements, etc.)  Please list below any 
          comments you would like to make:
          
            _______________________________________________________________
          
            _______________________________________________________________
          
            _______________________________________________________________
          
              I would like to personally thank you very much for your 
          registration.  It is people like you that keep shareware growing 
          and I wish you the best. --John Blackwell
          
              4PS-FG40






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3040

     Volume in drive A has no label
     Directory of A:\

    FGODMOM  EXE     97951   7-19-92   7:11p
    FGODMOM  DOC     40662   7-19-92   7:11p
    ORDERFRM DOC      2415   7-19-92   7:11p
    READ     ME       1424   7-19-92   7:11p
    FILE     TXT      4440  10-04-92   1:55a
    GO       TXT      1001  10-04-92   1:54a
    GO       BAT        31   6-04-92   2:25a
            7 file(s)     147924 bytes
                           10752 bytes free
