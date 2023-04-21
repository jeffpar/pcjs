---
layout: page
title: "PC-SIG Diskette Library (Disk #2421)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2421/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2421"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CD DOT CHALLENGE"

    CD DOT CHALLENGE is an easy-to-play game with over 75,000 different
    game variations.  As easy as it is to play, it requires great strategy
    to win and is very addictive!
    
    The game board consists of a grid of dots.  The object of the game is
    simple... to draw a line between any two dots.  Each time a player draws
    a line that "closes" a square, that player earns a point and another
    turn.  As simple as this sounds, the strategy can be quite complex!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOTS.DOC

{% raw %}
```



                               CD DOT CHALLENGE
                              Novice Version 1.4

                                 USERS MANUAL

                   (C) Copyright 1989-1990 by Cam-Don Group

                                 Cam-Don Group
                          Jame E. Donahue, President
                                 P.O. Box 430
                          Lake Bluff, Illinois  60044
                            CompuServe # 72341,1426
                               December 31, 1989


                               COPYRIGHT NOTICE

   This software package and document are copyrighted (C) 1989-1990 by
   Cam-Don Group.  All rights reserved worldwide.

   THE CD DOT CHALLENGE SOFTWARE AND THIS DOCUMENT ARE PROVIDED AS IS.
   Cam-Don Group makes no warranties as to the contents of this document
   or the CD DOT CHALLENGE software package.  Cam-Don Group further reserves
   the right to make changes to the specifications of the program and contents
   of this manual without obligation to notify any person or organization
   of any such change.

   Cam-Don group makes no warranty or representation, either express or
   implied, with respect to this program, including quality, performance,
   merchantability, or fitness for a particular purpose.

   CD DOT CHALLENGE is NOT FREEWARE and is NOT PUBLIC DOMAIN software.
   CD DOT CHALLENGE is a copyrighted shareware software product owned by
   Cam-Don Group.  Cam-Don Group grants you, without charge, the right to
   reproduce, distribute, and evaluate copies of this shareware version of our
   CD DOT CHALLENGE software product on the express condition that you do
   not receive any payment, commercial benefit, or any other considerations
   for any reproductions or distribution, or change this license agreement.

   The rights to receive any financial or other benefit, or to modify the
   product and it's components, are reserved exclusively by Cam-Don Group.

   You may not disassemble, decompile, or modify the software product.
   You acknowledge that the product contains confidential information
   which is the copyrighted property of Cam-Don Group.  All rights
   reserved worldwide.












                                       1







                               CONTENTS


  1.  INTRODUCTION TO 'CD DOT CHALLENGE', NOVICE VERSION 1.4

        A.  Intro/Object of the Game/Strategy.......................3
        B.  Game Features/Variations/HERC ADAPTER NOTE..............4
        C.  COMPETITIONS/NEWSLETTER/CUSTOMER SUPORT.................4

  2.  MENUS/CONFIGURATIONS/SETTINGS

        A.  Menu Access/Configuration Display.......................5
        B.  MAIN Menu Selections:
              1.  HELP..............................................5
              2.  SETTINGS..........................................5
              3.  CHAMPIONS.........................................5
              4.  MESSAGE...........................................5
              5.  RESET.............................................5
              6.  QUIT..............................................5
        C.  SETTINGS Submenu Selections:
              1.  COLOR.............................................6
              2.  TIMER.............................................6
              3.  VERSION...........................................6
              4.  AUDIT.............................................6
              5.  SOUND.............................................6
              6.  MOUSE.............................................6

  3.  REGISTRATION..................................................7





























                                       2








            INTRODUCTION TO 'CD DOT CHALLENGE', NOVICE VERSION 1.4


   Intro/Object of the Game:
   -------------------------

      NOTE:  ALL REGISTERED USERS of CD DOT CHALLENGE Graphic Novice
             Version 1.4 will receive the Text Novice version FREE
             by supplying a diskette and return postage!!

      CD DOT CHALLENGE, NOVICE VERSION 1.4, is an easy to play game with
      over 75,000 different game variations.  As easy as it is to play,
      it requires great strategy to win and is very ADDICTIVE.

      The game board consists of a grid of dots.  The object of the game is
      simple....to draw a line between any two dots.  Each time a player
      draws a line that "closes" a square that player earns a point and another
      turn.  As simple as this sounds, the strategy can be quite complex.

      The game begins by players alternating turns to strategically "close"
      a side of a square by moving the pointer (via the cursor keys) to an
      "unclosed" side and pressing the <ENTER> key thereby drawing a line
      on (closing) that side.  In effect, players are "designing" a
      strategic maze of closed and unclosed square sides.

      Play continues until players are forced to close the "third" side of the
      square which effectively allows the following player to close the fourth
      side of the square thereby earning a point and another turn.  Depending
      upon the moves, this may allow a player to close another square on his
      "extra earned" turn and continue etc.

      This is where the strategy at "designing" the maze is critical.
      Depending upon the "design" of the board, a player can force another
      player to give him a series of fourth sides to close.

      Quite simply...your mission is to force your opponent to give you a
      series of squares to close thereby earning points and extra turns.
      Conversely, you try to find sides to close that will not allow your
      opponent to score points.  If it is necessary to give points (and it
      will become so as the game progresses) you must try to minimize
      damages by giving your opponent a single square or series of squares
      that will yield the fewest points.

      The strategy will become quite clear as you play the game.












                                       3










   Game Features/Variations:
   -------------------------

      This game features:

           1.  VGA/EGA/MCGA/CGA/HERC/ATT/PC3270/IBM8514 graphics
               adapter support.  NOTE to HERC adapter users....if
               the screen is blank upon initial entry, <ESC> back
               to the command line and run the program with the command
               <DOTS /M>.

           2.  Total User Controlled Settings:

                   A.  Color definitions/customization.
                   B.  Game board sizes from 2 x 19 rows to 2 x 25 columns.
                   C.  Game timer allowing unlimited or 5-25 seconds each move.
                   D.  Versions featuring 0 to 3 computer players.
                   E.  Audit feature that verifies moves.
                   F.  Sound off/on.
                   G.  Adjustable Mouse Support.
                   H.  Individual CHAMPION HALL OF FAMES by game setting.
                       Each CHAMPION HALL OF FAME is saved to file.
                   I.  On-line viewing of CHAMPION HALL OF FAME during play.
                   J.  COMPETITIONS and NEWSLETTERS.  Competitions are held
                       regularly for registered users and the results
                       published in a NEWSLETTER.
                   K.  Registered users receive CUSTOMER SUPPORT.

           3.  An EXPERT version of CD DOT CHALLENGE that saves user settings
               is available to registered users.  Think you have the NOVICE
               version beat?  Try the EXPERT version.  The competitions provide
               an opportunity for registered users to receive the expert version
               FREE and CUSTOMIZED with user name etc.

           3.  Since the user controls the number of players, computer players,
               timer settings, and game board there are over 75,000 different
               variations of play.

   Competitions/Newsletter/Customer Support:
   -----------------------------------------

      Registered users are elgible for the competitions and newsletters.
      Competitions at various settings are held regularly for registered
      users.  The settings for these competitions are detailed in the
      newsletters as well as the results.  These competitions have
      different levels for the beginner and expert, including EXPERT
      competitions featuring the new EXPERT version of CD DOT CHALLENGE.

      All registered users receive our Customer Support telephone
      number and address to answer any questions concerning use of the
      product and the competitions/newsletters.

      The official rules/regulations/details for the competitions and
      newsletters will be explained upon registration.

                                       4










                        MENUS/CONFIGURATIONS/SETTINGS


   Menu Access/Configuration Display:
   ----------------------------------

      CD DOT CHALLENGE provides complete user control/customization via
      the extensive menu selections.  At any point after selection of
      the number of players, the menu may be selected by pressing
      the '/' key, at which time the user will be presented with the
      current game configuration and the main menu selections.  Each of
      the configurations items can be changed via the menu as well as
      performing other actions.

   MAIN Menu Selections:
   ---------------------

      The initial menu selections the user is provided with upon pressing
      the '/' key and the resulting actions are:

         HELP:
         -----
            - A quick overview.  This selection simply details the
              object of the game.

         SETTINGS:
         ---------
            - The nerve center of user controllable configurations.
              By selecting 'SETTINGS', the user is presented with
              submenu selections for modifying the COLORS, TIMER,
              VERSION, AUDIT SOUND, MOUSE features.  Each of these are
              explained in detail below.

         CHAMPIONS:
         ----------
            - Allows the user to view or reset (erase) the CHAMPION HALL
              OF FAME for the game settings selected.  This option is only
              valid once all game settings have been selected.  Allows the
              user to see the target score necessary for inclusion in the
              champions list.

         MESSAGE:
         --------
            - Provides the user with on-line information about CD DOT
              CHALLENGE and Cam-Don Group, including copyright, license,
              registration, competition, newsletter, and customer support
              information.

         RESET:
         ------
            - Once a game is started, this selection allows the user to
              abort the current game and start over at the current selections.
              Useful for avoiding an embarassing defeat!

         QUIT:
         -----
            - Allows the user to exit CD DOT CHALLENGE

                                       5







   SETTINGS Submenu Selections:
   ----------------------------

      The SETTINGS submenu selections provide the user with direct
      control over the game configuration.  The submenu selections
      and the resulting actions are:

         COLOR:
         ------
            - Allows the user to change/control the colors for the game
              BACKGROUND, DOTS, FRAME, LINE, POINTER, TEXT.  The user
              selects a new color by moving the menu pointer to the
              appropriate item and pressing <ENTER>.  The results of the
              color schemes are shown instantly.  GREAT FUN!

         TIMER:
         ------
            - Allows the user to turn the timer OFF or select a time from
              5 to 25 seconds for each move.  Definitely adds some zest to
              the game, especially for those players seeking the ultimate
              challenge.

         VERSION:
         --------
            - Allows the user to define the level of computer interaction
              by selecting from 0 to 3 computer players.  Can't find
              the competition you want??  Try the computer!!

         AUDIT:
         ------
            - Allows the user to define whether the pointer moves "home"
              after each move or remains in the square the move was made.
              If your like most of our users, you will definitely want this
              on if playing against the computer!

         SOUND:
         ------
            - Turns the sound on or off.  Great for playing at work without
              the boss knowing.

         MOUSE:
         ------
            - If you have a mouse available, this lets you custom define the
              mouse speed.  Settings range from 1 (the fastest) to twenty
              (the slowest).  The default is three.










                                       6









                                 REGISTRATION

   CD DOT CHALLENGE is NOT FREEWARE and is NOT PUBLIC DOMAIN software.
   CD DOT CHALLENGE is a copyrighted shareware software product owned
   by Cam-Don Group.  If upon evaluation you add this software product
   to your collection, submit a check for $12.50 U.S. (Illinois residents
   add sales tax....Outside the U.S., add postage).  Strategic tips
   are available for an additional $4.95 U.S..  Submit your name,
   address, telephone number and payment to:

                                 Cam-Don Group
                                 P.O. Box 430
                          Lake Bluff, Illinois  60044
                            CompuServe # 72341,1426

    We can always be reached on CompuServe #72341,1426, at the above address,
    or at:

                                 Cam-Don Group
                             712 North Marias Ave.
                               Shelby, MT  59474

    The following form is provided for ease of ordering:

                               CD DOT CHALLENGE
                  (C) Copyright 1989-1990 by Cam-Don Group



    TO:   Cam-Don Group                    Date: ________________________
          Attn: Customer Service
          P.O. Box 430
          Lake Bluff, IL  60044


    FROM:    _______________________________   PHONE: _______________________

    ADDRESS: ________________________________________________________________

             ________________________________________________________________

     QTY.                                                             TOTAL
   --------                                                         ---------

   ________ Registration fee for CD DOT CHALLENGE ($12.50 each U.S.)_________

   ________ Strategic tips ($4.95 each U.S.)                        _________

            Illinois residents, add sales tax                       _________

            Outside the U.S., add postage                           _________

                                                      GRAND TOTAL   _________

   Please submit a check for payment.



                                      END
```
{% endraw %}

## DOTS.DOC

{% raw %}
```



                               CD DOT CHALLENGE
                              Novice Version 1.4

                                 USERS MANUAL

                   (C) Copyright 1989-1990 by Cam-Don Group

                                 Cam-Don Group
                          Jame E. Donahue, President
                                 P.O. Box 430
                          Lake Bluff, Illinois  60044
                            CompuServe # 72341,1426
                               December 31, 1989


                               COPYRIGHT NOTICE

   This software package and document are copyrighted (C) 1989-1990 by
   Cam-Don Group.  All rights reserved worldwide.

   THE CD DOT CHALLENGE SOFTWARE AND THIS DOCUMENT ARE PROVIDED AS IS.
   Cam-Don Group makes no warranties as to the contents of this document
   or the CD DOT CHALLENGE software package.  Cam-Don Group further reserves
   the right to make changes to the specifications of the program and contents
   of this manual without obligation to notify any person or organization
   of any such change.

   Cam-Don group makes no warranty or representation, either express or
   implied, with respect to this program, including quality, performance,
   merchantability, or fitness for a particular purpose.

   CD DOT CHALLENGE is NOT FREEWARE and is NOT PUBLIC DOMAIN software.
   CD DOT CHALLENGE is a copyrighted shareware software product owned by
   Cam-Don Group.  Cam-Don Group grants you, without charge, the right to
   reproduce, distribute, and evaluate copies of this shareware version of our
   CD DOT CHALLENGE software product on the express condition that you do
   not receive any payment, commercial benefit, or any other considerations
   for any reproductions or distribution, or change this license agreement.

   The rights to receive any financial or other benefit, or to modify the
   product and it's components, are reserved exclusively by Cam-Don Group.

   You may not disassemble, decompile, or modify the software product.
   You acknowledge that the product contains confidential information
   which is the copyrighted property of Cam-Don Group.  All rights
   reserved worldwide.












                                       1







                               CONTENTS


  1.  INTRODUCTION TO 'CD DOT CHALLENGE', NOVICE VERSION 1.4

        A.  Intro/Object of the Game/Strategy.......................3
        B.  Game Features/Variations/HERC ADAPTER NOTE..............4
        C.  COMPETITIONS/NEWSLETTER/CUSTOMER SUPORT.................4

  2.  MENUS/CONFIGURATIONS/SETTINGS

        A.  Menu Access/Configuration Display.......................5
        B.  MAIN Menu Selections:
              1.  HELP..............................................5
              2.  SETTINGS..........................................5
              3.  CHAMPIONS.........................................5
              4.  MESSAGE...........................................5
              5.  RESET.............................................5
              6.  QUIT..............................................5
        C.  SETTINGS Submenu Selections:
              1.  COLOR.............................................6
              2.  TIMER.............................................6
              3.  VERSION...........................................6
              4.  AUDIT.............................................6
              5.  SOUND.............................................6
              6.  MOUSE.............................................6

  3.  REGISTRATION..................................................7





























                                       2








            INTRODUCTION TO 'CD DOT CHALLENGE', NOVICE VERSION 1.4


   Intro/Object of the Game:
   -------------------------

      NOTE:  ALL REGISTERED USERS of CD DOT CHALLENGE Graphic Novice
             Version 1.4 will receive the Text Novice version FREE
             by supplying a diskette and return postage!!

      CD DOT CHALLENGE, NOVICE VERSION 1.4, is an easy to play game with
      over 75,000 different game variations.  As easy as it is to play,
      it requires great strategy to win and is very ADDICTIVE.

      The game board consists of a grid of dots.  The object of the game is
      simple....to draw a line between any two dots.  Each time a player
      draws a line that "closes" a square that player earns a point and another
      turn.  As simple as this sounds, the strategy can be quite complex.

      The game begins by players alternating turns to strategically "close"
      a side of a square by moving the pointer (via the cursor keys) to an
      "unclosed" side and pressing the <ENTER> key thereby drawing a line
      on (closing) that side.  In effect, players are "designing" a
      strategic maze of closed and unclosed square sides.

      Play continues until players are forced to close the "third" side of the
      square which effectively allows the following player to close the fourth
      side of the square thereby earning a point and another turn.  Depending
      upon the moves, this may allow a player to close another square on his
      "extra earned" turn and continue etc.

      This is where the strategy at "designing" the maze is critical.
      Depending upon the "design" of the board, a player can force another
      player to give him a series of fourth sides to close.

      Quite simply...your mission is to force your opponent to give you a
      series of squares to close thereby earning points and extra turns.
      Conversely, you try to find sides to close that will not allow your
      opponent to score points.  If it is necessary to give points (and it
      will become so as the game progresses) you must try to minimize
      damages by giving your opponent a single square or series of squares
      that will yield the fewest points.

      The strategy will become quite clear as you play the game.












                                       3










   Game Features/Variations:
   -------------------------

      This game features:

           1.  VGA/EGA/MCGA/CGA/HERC/ATT/PC3270/IBM8514 graphics
               adapter support.  NOTE to HERC adapter users....if
               the screen is blank upon initial entry, <ESC> back
               to the command line and run the program with the command
               <DOTS /M>.

           2.  Total User Controlled Settings:

                   A.  Color definitions/customization.
                   B.  Game board sizes from 2 x 19 rows to 2 x 25 columns.
                   C.  Game timer allowing unlimited or 5-25 seconds each move.
                   D.  Versions featuring 0 to 3 computer players.
                   E.  Audit feature that verifies moves.
                   F.  Sound off/on.
                   G.  Adjustable Mouse Support.
                   H.  Individual CHAMPION HALL OF FAMES by game setting.
                       Each CHAMPION HALL OF FAME is saved to file.
                   I.  On-line viewing of CHAMPION HALL OF FAME during play.
                   J.  COMPETITIONS and NEWSLETTERS.  Competitions are held
                       regularly for registered users and the results
                       published in a NEWSLETTER.
                   K.  Registered users receive CUSTOMER SUPPORT.

           3.  An EXPERT version of CD DOT CHALLENGE that saves user settings
               is available to registered users.  Think you have the NOVICE
               version beat?  Try the EXPERT version.  The competitions provide
               an opportunity for registered users to receive the expert version
               FREE and CUSTOMIZED with user name etc.

           3.  Since the user controls the number of players, computer players,
               timer settings, and game board there are over 75,000 different
               variations of play.

   Competitions/Newsletter/Customer Support:
   -----------------------------------------

      Registered users are elgible for the competitions and newsletters.
      Competitions at various settings are held regularly for registered
      users.  The settings for these competitions are detailed in the
      newsletters as well as the results.  These competitions have
      different levels for the beginner and expert, including EXPERT
      competitions featuring the new EXPERT version of CD DOT CHALLENGE.

      All registered users receive our Customer Support telephone
      number and address to answer any questions concerning use of the
      product and the competitions/newsletters.

      The official rules/regulations/details for the competitions and
      newsletters will be explained upon registration.

                                       4










                        MENUS/CONFIGURATIONS/SETTINGS


   Menu Access/Configuration Display:
   ----------------------------------

      CD DOT CHALLENGE provides complete user control/customization via
      the extensive menu selections.  At any point after selection of
      the number of players, the menu may be selected by pressing
      the '/' key, at which time the user will be presented with the
      current game configuration and the main menu selections.  Each of
      the configurations items can be changed via the menu as well as
      performing other actions.

   MAIN Menu Selections:
   ---------------------

      The initial menu selections the user is provided with upon pressing
      the '/' key and the resulting actions are:

         HELP:
         -----
            - A quick overview.  This selection simply details the
              object of the game.

         SETTINGS:
         ---------
            - The nerve center of user controllable configurations.
              By selecting 'SETTINGS', the user is presented with
              submenu selections for modifying the COLORS, TIMER,
              VERSION, AUDIT SOUND, MOUSE features.  Each of these are
              explained in detail below.

         CHAMPIONS:
         ----------
            - Allows the user to view or reset (erase) the CHAMPION HALL
              OF FAME for the game settings selected.  This option is only
              valid once all game settings have been selected.  Allows the
              user to see the target score necessary for inclusion in the
              champions list.

         MESSAGE:
         --------
            - Provides the user with on-line information about CD DOT
              CHALLENGE and Cam-Don Group, including copyright, license,
              registration, competition, newsletter, and customer support
              information.

         RESET:
         ------
            - Once a game is started, this selection allows the user to
              abort the current game and start over at the current selections.
              Useful for avoiding an embarassing defeat!

         QUIT:
         -----
            - Allows the user to exit CD DOT CHALLENGE

                                       5







   SETTINGS Submenu Selections:
   ----------------------------

      The SETTINGS submenu selections provide the user with direct
      control over the game configuration.  The submenu selections
      and the resulting actions are:

         COLOR:
         ------
            - Allows the user to change/control the colors for the game
              BACKGROUND, DOTS, FRAME, LINE, POINTER, TEXT.  The user
              selects a new color by moving the menu pointer to the
              appropriate item and pressing <ENTER>.  The results of the
              color schemes are shown instantly.  GREAT FUN!

         TIMER:
         ------
            - Allows the user to turn the timer OFF or select a time from
              5 to 25 seconds for each move.  Definitely adds some zest to
              the game, especially for those players seeking the ultimate
              challenge.

         VERSION:
         --------
            - Allows the user to define the level of computer interaction
              by selecting from 0 to 3 computer players.  Can't find
              the competition you want??  Try the computer!!

         AUDIT:
         ------
            - Allows the user to define whether the pointer moves "home"
              after each move or remains in the square the move was made.
              If your like most of our users, you will definitely want this
              on if playing against the computer!

         SOUND:
         ------
            - Turns the sound on or off.  Great for playing at work without
              the boss knowing.

         MOUSE:
         ------
            - If you have a mouse available, this lets you custom define the
              mouse speed.  Settings range from 1 (the fastest) to twenty
              (the slowest).  The default is three.










                                       6









                                 REGISTRATION

   CD DOT CHALLENGE is NOT FREEWARE and is NOT PUBLIC DOMAIN software.
   CD DOT CHALLENGE is a copyrighted shareware software product owned
   by Cam-Don Group.  If upon evaluation you add this software product
   to your collection, submit a check for $12.50 U.S. (Illinois residents
   add sales tax....Outside the U.S., add postage).  Strategic tips
   are available for an additional $4.95 U.S..  Submit your name,
   address, telephone number and payment to:

                                 Cam-Don Group
                                 P.O. Box 430
                          Lake Bluff, Illinois  60044
                            CompuServe # 72341,1426

    We can always be reached on CompuServe #72341,1426, at the above address,
    or at:

                                 Cam-Don Group
                             712 North Marias Ave.
                               Shelby, MT  59474

    The following form is provided for ease of ordering:

                               CD DOT CHALLENGE
                  (C) Copyright 1989-1990 by Cam-Don Group



    TO:   Cam-Don Group                    Date: ________________________
          Attn: Customer Service
          P.O. Box 430
          Lake Bluff, IL  60044


    FROM:    _______________________________   PHONE: _______________________

    ADDRESS: ________________________________________________________________

             ________________________________________________________________

     QTY.                                                             TOTAL
   --------                                                         ---------

   ________ Registration fee for CD DOT CHALLENGE ($12.50 each U.S.)_________

   ________ Strategic tips ($4.95 each U.S.)                        _________

            Illinois residents, add sales tax                       _________

            Outside the U.S., add postage                           _________

                                                      GRAND TOTAL   _________

   Please submit a check for payment.



                                      END
```
{% endraw %}

## FILE2421.TXT

{% raw %}
```
Disk No: 2421                                                           
Disk Title: CD Dot Challenge                                            
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: CD Dot Challenge                                         
Author Version: 1.4                                                     
Author Registration: $12.50                                             
Special Requirements: None.                                             
                                                                        
CD DOT CHALLENGE is an easy to play game with over 75,000 different game
variations.  As easy as it is to play, it requires great strategy to win 
and is very ADDICTIVE.                                                  
                                                                        
The game board consists of a grid of dots.  The object of the game is   
simple...to draw a line between any two dots.  Each time a player draws 
a line that "closes" a square, that player earns a point and another    
turn.  As simple as this sounds, the strategy can be quite complex!     
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2421

     Volume in drive A has no label
     Directory of A:\

    DOTS     DOC     15634   6-10-90   6:34p
    DOTS     EXE    116012   6-01-90   1:24a
    CD-DOTS4 ZIP     70471   6-10-90   6:35p
    FILE2421 TXT      1926   1-01-80   2:30a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       925   1-01-80   7:14a
            6 file(s)     205008 bytes
                          114688 bytes free
