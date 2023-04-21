---
layout: page
title: "PC-SIG Diskette Library (Disk #1558)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1558/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1558"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-JIGSAW"

    PC-JIGSAW is an educational game of skill and intellect that starts out
    drawing an image on the screen and then it shuffles the pieces. The
    object of the game is to assemble the pieces to match the original
    image on the screen.  You can use either the keyboard or a mouse to move
    the pieces.
    
    PC-JIGSAW is completely menu driven and comes with an on-line help
    facility to quide you through the operation of the program.  You select
    the image you want from the Images menu and then select Start from the
    main menu to begin playing.  You can view the original image at any time
    to help you along.  You can even change the level of complexity by
    making the PC-JIGSAW image pieces smaller or larger.  The fewer pieces
    you swap, the better your score.  Also, every time you view the image,
    points are subtracted from your score.  PC-JIGSAW comes with four
    puzzles you can solve.  If you like jigsaw puzzles, you will love PC-
    JIGSAW.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1558.TXT

{% raw %}
```
Disk No: 1558                                                           
Disk Title: PC-Jigsaw                                                   
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PC-Jigsaw Puzzle                                         
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: CGA, EGA, VGA, MCGA, or Hercules graphics.        
                                                                        
PC-JIGSAW is an educational game of skill and intellect that starts     
out drawing an image on the screen and then it shuffles around the      
pieces. The object of the game is to assemble the pieces to match the   
original image on the screen.  You can use either the keyboard or a     
mouse to move the pieces.  PC-JIGSAW is completely menu driven and      
even comes with an on-line help facility to quide you through the       
operation of the program. You select the image you want from the        
Images menu and then select Start from the main menu to begin playing.  
After you assemble the puzzle, you can select another image.  You can   
view the original image at any time to help you along.  You can even    
change the level of complexity by making the PC-JIGSAW image pieces     
smaller or larger.  Your score appears on the top of the screen, when   
you have solved the puzzle.  The score is based how many pieces you     
swapped to get the puzzle solved.  The fewer pieces you swapped, the    
better score you will get.  Also, every time you view the image,        
points are subtracted from your score.  PC-JIGSAW comes with four       
puzzles you can solve.  If you like jigsaw puzzles, you will love       
PC-JIGSAW.                                                              
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## JIG.DOC

{% raw %}
```
    ___________________________________________________________________
    |                                                                 |
    |  ALIVE SOFTWARE Presents                                        |
    |                            P C - J I G S A W    2               |
    |                                                                 |
    |  PC-JIGSAW is an educational game of skill and intelligence.    |
    |  It starts out by drawing an image on the screen and then it    |
    |  shuffles around the pieces.  The object of the game is to      |
    |  assemble the pieces to match the original image on the screen. |
    |  PC-JIGSAW 2 features : Keyboard or mouse support, easy menu    |
    |  operation, 5 Levels of difficulty, print option, music, score- |
    |  keeping, includes a few jigsaw puzzles.                        |
    |  This program works with all of the major PC graphics cards.    |
    |                                                                 |
    |  PC-JIGSAW is distributed as Shareware: if you like the program,|
    |  then please become a registered user.  Print or list file      |
    |  REGISTER.DOC for registration benefits and more information.   |
    |  Even if you chose not register this program for right now,     |
    |  feel free to continue using it and pass it on to your friends. |
    |                                                                 |
    |_________________________________________________________________|

                                 INDEX

          1...............   COPYRIGHT NOTICE
          2...............   DISCLAIMER, DISTRIBUTION AND PROGRAM CONTENT
          3...............   GETTING STARTED
          4...............   SYSTEM REQUIREMENTS AND OPTIONS
          5...............   OPERATION
          6...............   DOCUMENTATION
          7...............   OTHER PROGRAMS FROM ALIVE SOFTWARE
          8...............   REGISTRATION BENEFITS

   1.                   COPYRIGHT NOTICE

      The PC-JIGSAW source code, object code, library images and manuals
      on paper or on disk, are (C) copyright 1990 by ALIVE SOFTWARE.
      Concept and Design of this program by Bill Dedes 1988.

   2.           DISCLAIMER, DISTRIBUTION AND PROGRAM CONTENT

      2.1 DISCLAIMER

      This program is provided "as is" and it is without warranty of any
      kind that it will work correctly in any or all situations.  No
      liability shall be assumed for direct or consequential damage caused
      by the use of this software.  The only claim ALIVE SOFTWARE makes is
      that there are no intentional bugs or fatal errors in any original
      copy of the program that you received directly from ALIVE SOFTWARE .

      2.2 PROGRAM CONTENTS :  You should have the following files.

         1.   JIG.EXE         PC-JIGSAW version 2 Program
         2.   JIG.DOC         Documentation ( This file )
      3 - 6   DANCER.GRF, DOG.GRF, HYDRA.GRF, JIGSAW.GRF. Image files
         7.   README.DOC      Last minute information
         8.   REGISTER.DOC    Registration form.

                               Page 1 of 5


      2.3  DISTRIBUTION :   Distribution of this program is encouraged
      as long as the following Shareware principles are observed :
      All of the above mentioned 8 files should be included in the
      distributed disk and should not be altered in any way. ALIVE
      SOFTWARE authorizes the distribution ONLY of the 8 above mentioned
      files. Any additional GRF Image files will be distributed only to
      registered users exclusively and directly by ALIVE SOFTWARE.

   3.                        GETTING STARTED
      3.1                  Playing from  Floppy Disk
      To load the PC-JIGSAW program, insert the program disk in drive A
      and at the A prompt type JIG <return>.

      3.2                   Playing from a Hard Disk
      The installation on a Hard disk simply involves creating a directory
      and copying all files from the floppy disk to that directory of the
      Hard disk.  The following example assumes your Hard Disk is C and
      your Floppy is Drive A. Type the following :
       C:                         ( Change current drive to C     )
       MD C:\JIG                  ( Create JIG subdirectory       )
       CD C:\JIG                  ( Change directory              )
                                  ( Insert floppy disk in drive A )
       COPY A:\*.*  C:\JIG        ( Copy files to Hard disk       )

   4.                  SYSTEM REQUIREMENTS AND OPTIONS

      COMPUTER :  IBM/PC, XT, AT or compatibles, 256K, Mouse is optional.
      DISPLAY  :  CGA or TANDY, MCGA, EGA/VGA color, EGA MONO and HERCULES

      OPTIONS :  Even though the program detects your system
      configuration and sets up the  program accordingly, you can still
      override this feature.  You do this by typing one of the following
      switches after you typed JIG :
                 C          CGA   320 x 200  Color  ( Default )
                 G          CGA   640 x 200  Monochrome
                 E          EGA   640 x 350  Color
                 H     HERCULES   720 x 348  Monochrome
                 J    for Laptops ( cursor becomes easier to see )
                 L     64K -EGA   640 x 200  Color
                 M          MCGA  640 X 200  Monochrome ( Default )
                 Q          MCGA  640 X 480  Monochrome
                 N     MONO-EGA   640 x 350  Monochrome
                 V          VGA   640 x 350  Color
                 K                disables access to mouse.
                 P                disables access to second graph page.
                 S     Enables systems that are not 100% IBM compatible
                       to run the program.

       *   example 1 : if you have an EGA card and you want to force the
           program to CGA color just type: JIG C, at the DOS prompt.

       *   example 2 : if your CGA is monochrome use  JIG G , to get
           higher resolution.

       *   example 3 : If you have any problem with the mouse due to
           compatibility issues just type : JIG  K  to disable it.

                               Page 2 of 5


   5.                           OPERATION

    GENERAL :  The program will detect your display card and will auto-
       adjust the graphics.  It will also sense if there is a mouse
       attached. If you plan to use the mouse, the mouse driver must be
       loaded before running JIG.  From time to time the program will
       display information at the bottom of the screen.

    MENUS :  When using the mouse, click on the LEFT button to select
       items , click on the RIGHT button to exit from the menu or to call
       the main menu.  When using the keyboard , use the arrow keys to
       move around, press the <SPACEBAR> or the <ENTER> key to select
       menu items , press <ESC> to exit from the menu or to call the menu.

     .......
  TO START :   At the DOS prompt type JIG followed by <ENTER>.
       Press any key or mouse button to start.
       **   Note that GRF Image files must be present at your current
       disk and directory.

    ........
    IMAGES :   Then select one GRF Image file from the IMAGES menu.
       Finally select START from main menu to begin playing the PC-JIGSAW
       After you assemble the puzzle, you can select another Image.
    .......
    PCX   :    The Registered version of PC-JIGSAW will read PCX files in
       any of the above mentioned graphics modes (see chapter 4 under
       OPTIONS).  The PCX option allows registered users to make up their
       own Jigsaw puzzles in the popular PCX graphics format by :
       A) creating pictures through PAINT or DESK-TOP programs
          supporting PCX files or
       B) creating pictures using a SCANNER or a VIDEO GRABBER supporting
          PCX files or
       C) by simply using existing PCX files.

    ........
    LEVEL  :   Changes the level of complexity by making the PC-JIGSAW
       pieces smaller or larger. Lowest mode is 3 X 3 = 9 pieces, highest
       mode is 9 X 9 = 81 pieces.
    ........
    HELP   :   There is on line help that reminds you of the basic
       commands of the PC-JIGSAW.  Just select HELP from the main menu.
    ........
    SOUND  :   Turns on or off the sound effects and music. When SOUND is
       on you will hear a sound every time a Jigsaw piece is moved in its
       correct position.

    ........
    MOUSE  :  Turns on or off the mouse. Use JIG K to disable mouse access.

    ........
    PRINT  :   PC-JIGSAW currently supports EPSON compatible printer in
      parallel ports LPT1 or LPT2.  It prints only the black outline of the
      image, therefore the printed results of your own PCX pictures may vary.
      Printed puzzles make nice coloring pictures for children. Make sure
      that your printer is ON and ON LINE when selecting the PRINT option.

                                 Page 3 of 5

    ........
    QUIT   :   Allows you to return to DOS.

    SCORE  :   Your score appears on the top of the screen, when you have
       solved the puzzle.  The score is based on how many pieces you
       swapped to get the puzzle solved.  The fewer pieces you swapped ,
       the better score you will get.  Also every time you VIEW the image,
       points are subtracted from your score, so VIEW only when needed.
       When the puzzle is solved the number of Moves ( swaps ) and the
       number of Views is displayed at the bottom of the screen.

    VIEW   :   At any time you may view the original Image by pressing
       the V key.  If you have a 3 button mouse press the middle button,
       or if you have a 2 button mouse press both buttons simultaneously
       to VIEW.

    MUSIC  :  When music is playing you may press any key or hold down a
       mouse button to cancel it.

                  Tips for children and novice IBM PC users.

    We created this program knowing that children as young as 3 years old
    will be using it.  The challenge was, how to create a simple to use
    program without sacrificing flexibility and options for more advanced
    PC users.  Here are two very simple rules for novice PC users.

     1) When using the mouse, use only the LEFT button to play and select
        from the menus.  If your mouse has 3 buttons, then use the middle
        one to view. If you have a 2 button mouse use the V key to view.

     2) When using the keyboard simply use the <spacebar> to play and
        select from the menus. Use the arrows to move around and finally
        use the V key to view the original puzzle.

    After novice users have become familiar with the above simple
    operation, they may try using the RIGHT mouse button or the <ESC> key
    to gain access to all of the PC-JIGSAW options.

   6.                 DOCUMENTATION  AND ACKNOWLEDGEMENTS

    If you have a printer, then please print out and read documentation
    file JIG.DOC.  This file can be printed out by simply typing :
    COPY JIG.DOC PRN  at the DOS prompt.

    The opening music theme is "The flight of the Bumble Bee" by Rimsky
    Korsakov.  The music playing after you solved the puzzle is
    "When Johnny comes Marching Home" by Patrick Sarsfield Gilmore.
    All of the new features and improvements in version 2 are the results
    of several suggestions by users of the older PC-JIGSAW versions.

   7.                  OTHER SHAREWARE BY ALIVE SOFTWARE

   7.1   CRAZY SHUFFLE, a Shareware program.  This is a Fun, Challenging,
   Educational puzzle game.  It tests the player's memory and concentration
   skills. Fun for any age . Great Graphics . Registration benefits
   include :


                                Page 4 of 5


   One floppy disk packed with hundreds of colorful cards for this game
   The pictures you will receive are divided in 3 Categories

        A) For young children the Fun Learning collection includes :
           BODY  (8),  CARTOONS (8),  FARM (8),
           FRUIT (8),  JUNGLE   (8),  FANTASY (18),  PETS (8) .
        B) For older children and adults, Educational themes are used
           to sharpen knowledge and provide more difficult puzzles :
           HISTORY    (18),  HOLIDAYS (8), US PRESIDENTS (8),
           US STATES  (18),  VEHICLES (18) and finally
        C) for Adults who love a REAL Challenge :
           HATS (32),  OBJECTS (32), SHADOWS (32), SYMBOLS (32).
    * Note that (8), means 8 different cards each, (32) means 32 etc.
    For a total of 264 great quality cards for the Crazy Shuffle.
    Registration for CRAZY SHUFFLE is  $ 20, only from ALIVE SOFTWARE.

    7.2                    VGA JIGSAW PUZZLE

    A Jigsaw Puzzle for VGA graphics systems that works in the 256 color
    mode.  Registration includes several puzzles with color and brilliance
    that only VGA can produce.  The program will also read any GIF or PCX
    files in the 320 X 200 X 256 color mode.
    Registration for VGA JIGSAW PUZZLE is  $ 20, only from ALIVE SOFTWARE.

   8.                PC - JIGSAW PUZZLE  REGISTRATION BENEFITS

   PC-JIGSAW is distributed as Shareware: if you like the program,
   please become a registered user .  Print and read file REGISTER.DOC
   for more information on how to register.

   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
   *                                                                     *
   *  +  You will receive the latest version of this program.            *
   *  +  Technical support .  Registered users Please write to :         *
   *     ALIVE SOFTWARE, PO BOX 4004, SANTA CLARA, CA, 95054, U.S.A.     *
   *     Or you may send Electronic mail to the programmer, Bill Dedes at*
   *        PRODIGY     .... ID   #  RGCP92A                             *
   *  + You will receive more free shareware from ALIVE SOFTWARE         *
   *  + The Registered version will read PCX graphic files.              *
   *                                                                     *
   *  + THE MOST IMPORTANT BENEFIT is that
   *  There are a lot more Image files for the PC-JIGSAW, available ONLY *
   *  through ALIVE SOFTWARE.  You will receive the following puzzles    *
   *  DISK # 1  MYTH and FANTASY ( DANCER.GRF and HYDRA.GRF are samples) *
   *    DANCER, EGYPTIAN, FUNHANDS, GENIE, GUARDIAN, HARPS, HYDRA,       *
   *    JIGSAW, KABUKI, KERBEROS, PEGASUS, TYPHON.                       *
   *  DISK  # 2  ANIMALS  ( DOG.GRF is a sample  ) contains following :  *
   *    AQUARIUM, BULL, DINOSAUR, DOG, EAGLE, ELEPHANT, FROGS, LOBSTERS, *
   *    MAMMOTH, MONKEYS, OCEAN, PIGEON, REDBIRD, SHARK, SHEEP.          *
   *  Also included in disk # 2 is a sample for our 3 new collections :  *
   *  for young children CARTOONS, for older children and adults         *
   *  EDUCATION and for adults the challenging MASTER collection.        *
   *  A total of 30 colorful puzzles, available for registered users only*
   *  Also you will receive information on how to get more Jigsaw puzzles*
   *                                                                     *
   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

                                 Page 5 of 5


```
{% endraw %}

## JIG.DOC

{% raw %}
```
    ___________________________________________________________________
    |                                                                 |
    |  ALIVE SOFTWARE Presents                                        |
    |                            P C - J I G S A W    2               |
    |                                                                 |
    |  PC-JIGSAW is an educational game of skill and intelligence.    |
    |  It starts out by drawing an image on the screen and then it    |
    |  shuffles around the pieces.  The object of the game is to      |
    |  assemble the pieces to match the original image on the screen. |
    |  PC-JIGSAW 2 features : Keyboard or mouse support, easy menu    |
    |  operation, 5 Levels of difficulty, print option, music, score- |
    |  keeping, includes a few jigsaw puzzles.                        |
    |  This program works with all of the major PC graphics cards.    |
    |                                                                 |
    |  PC-JIGSAW is distributed as Shareware: if you like the program,|
    |  then please become a registered user.  Print or list file      |
    |  REGISTER.DOC for registration benefits and more information.   |
    |  Even if you chose not register this program for right now,     |
    |  feel free to continue using it and pass it on to your friends. |
    |                                                                 |
    |_________________________________________________________________|

                                 INDEX

          1...............   COPYRIGHT NOTICE
          2...............   DISCLAIMER, DISTRIBUTION AND PROGRAM CONTENT
          3...............   GETTING STARTED
          4...............   SYSTEM REQUIREMENTS AND OPTIONS
          5...............   OPERATION
          6...............   DOCUMENTATION
          7...............   OTHER PROGRAMS FROM ALIVE SOFTWARE
          8...............   REGISTRATION BENEFITS

   1.                   COPYRIGHT NOTICE

      The PC-JIGSAW source code, object code, library images and manuals
      on paper or on disk, are (C) copyright 1990 by ALIVE SOFTWARE.
      Concept and Design of this program by Bill Dedes 1988.

   2.           DISCLAIMER, DISTRIBUTION AND PROGRAM CONTENT

      2.1 DISCLAIMER

      This program is provided "as is" and it is without warranty of any
      kind that it will work correctly in any or all situations.  No
      liability shall be assumed for direct or consequential damage caused
      by the use of this software.  The only claim ALIVE SOFTWARE makes is
      that there are no intentional bugs or fatal errors in any original
      copy of the program that you received directly from ALIVE SOFTWARE .

      2.2 PROGRAM CONTENTS :  You should have the following files.

         1.   JIG.EXE         PC-JIGSAW version 2 Program
         2.   JIG.DOC         Documentation ( This file )
      3 - 6   DANCER.GRF, DOG.GRF, HYDRA.GRF, JIGSAW.GRF. Image files
         7.   README.DOC      Last minute information
         8.   REGISTER.DOC    Registration form.

                               Page 1 of 5


      2.3  DISTRIBUTION :   Distribution of this program is encouraged
      as long as the following Shareware principles are observed :
      All of the above mentioned 8 files should be included in the
      distributed disk and should not be altered in any way. ALIVE
      SOFTWARE authorizes the distribution ONLY of the 8 above mentioned
      files. Any additional GRF Image files will be distributed only to
      registered users exclusively and directly by ALIVE SOFTWARE.

   3.                        GETTING STARTED
      3.1                  Playing from  Floppy Disk
      To load the PC-JIGSAW program, insert the program disk in drive A
      and at the A prompt type JIG <return>.

      3.2                   Playing from a Hard Disk
      The installation on a Hard disk simply involves creating a directory
      and copying all files from the floppy disk to that directory of the
      Hard disk.  The following example assumes your Hard Disk is C and
      your Floppy is Drive A. Type the following :
       C:                         ( Change current drive to C     )
       MD C:\JIG                  ( Create JIG subdirectory       )
       CD C:\JIG                  ( Change directory              )
                                  ( Insert floppy disk in drive A )
       COPY A:\*.*  C:\JIG        ( Copy files to Hard disk       )

   4.                  SYSTEM REQUIREMENTS AND OPTIONS

      COMPUTER :  IBM/PC, XT, AT or compatibles, 256K, Mouse is optional.
      DISPLAY  :  CGA or TANDY, MCGA, EGA/VGA color, EGA MONO and HERCULES

      OPTIONS :  Even though the program detects your system
      configuration and sets up the  program accordingly, you can still
      override this feature.  You do this by typing one of the following
      switches after you typed JIG :
                 C          CGA   320 x 200  Color  ( Default )
                 G          CGA   640 x 200  Monochrome
                 E          EGA   640 x 350  Color
                 H     HERCULES   720 x 348  Monochrome
                 J    for Laptops ( cursor becomes easier to see )
                 L     64K -EGA   640 x 200  Color
                 M          MCGA  640 X 200  Monochrome ( Default )
                 Q          MCGA  640 X 480  Monochrome
                 N     MONO-EGA   640 x 350  Monochrome
                 V          VGA   640 x 350  Color
                 K                disables access to mouse.
                 P                disables access to second graph page.
                 S     Enables systems that are not 100% IBM compatible
                       to run the program.

       *   example 1 : if you have an EGA card and you want to force the
           program to CGA color just type: JIG C, at the DOS prompt.

       *   example 2 : if your CGA is monochrome use  JIG G , to get
           higher resolution.

       *   example 3 : If you have any problem with the mouse due to
           compatibility issues just type : JIG  K  to disable it.

                               Page 2 of 5


   5.                           OPERATION

    GENERAL :  The program will detect your display card and will auto-
       adjust the graphics.  It will also sense if there is a mouse
       attached. If you plan to use the mouse, the mouse driver must be
       loaded before running JIG.  From time to time the program will
       display information at the bottom of the screen.

    MENUS :  When using the mouse, click on the LEFT button to select
       items , click on the RIGHT button to exit from the menu or to call
       the main menu.  When using the keyboard , use the arrow keys to
       move around, press the <SPACEBAR> or the <ENTER> key to select
       menu items , press <ESC> to exit from the menu or to call the menu.

     .......
  TO START :   At the DOS prompt type JIG followed by <ENTER>.
       Press any key or mouse button to start.
       **   Note that GRF Image files must be present at your current
       disk and directory.

    ........
    IMAGES :   Then select one GRF Image file from the IMAGES menu.
       Finally select START from main menu to begin playing the PC-JIGSAW
       After you assemble the puzzle, you can select another Image.
    .......
    PCX   :    The Registered version of PC-JIGSAW will read PCX files in
       any of the above mentioned graphics modes (see chapter 4 under
       OPTIONS).  The PCX option allows registered users to make up their
       own Jigsaw puzzles in the popular PCX graphics format by :
       A) creating pictures through PAINT or DESK-TOP programs
          supporting PCX files or
       B) creating pictures using a SCANNER or a VIDEO GRABBER supporting
          PCX files or
       C) by simply using existing PCX files.

    ........
    LEVEL  :   Changes the level of complexity by making the PC-JIGSAW
       pieces smaller or larger. Lowest mode is 3 X 3 = 9 pieces, highest
       mode is 9 X 9 = 81 pieces.
    ........
    HELP   :   There is on line help that reminds you of the basic
       commands of the PC-JIGSAW.  Just select HELP from the main menu.
    ........
    SOUND  :   Turns on or off the sound effects and music. When SOUND is
       on you will hear a sound every time a Jigsaw piece is moved in its
       correct position.

    ........
    MOUSE  :  Turns on or off the mouse. Use JIG K to disable mouse access.

    ........
    PRINT  :   PC-JIGSAW currently supports EPSON compatible printer in
      parallel ports LPT1 or LPT2.  It prints only the black outline of the
      image, therefore the printed results of your own PCX pictures may vary.
      Printed puzzles make nice coloring pictures for children. Make sure
      that your printer is ON and ON LINE when selecting the PRINT option.

                                 Page 3 of 5

    ........
    QUIT   :   Allows you to return to DOS.

    SCORE  :   Your score appears on the top of the screen, when you have
       solved the puzzle.  The score is based on how many pieces you
       swapped to get the puzzle solved.  The fewer pieces you swapped ,
       the better score you will get.  Also every time you VIEW the image,
       points are subtracted from your score, so VIEW only when needed.
       When the puzzle is solved the number of Moves ( swaps ) and the
       number of Views is displayed at the bottom of the screen.

    VIEW   :   At any time you may view the original Image by pressing
       the V key.  If you have a 3 button mouse press the middle button,
       or if you have a 2 button mouse press both buttons simultaneously
       to VIEW.

    MUSIC  :  When music is playing you may press any key or hold down a
       mouse button to cancel it.

                  Tips for children and novice IBM PC users.

    We created this program knowing that children as young as 3 years old
    will be using it.  The challenge was, how to create a simple to use
    program without sacrificing flexibility and options for more advanced
    PC users.  Here are two very simple rules for novice PC users.

     1) When using the mouse, use only the LEFT button to play and select
        from the menus.  If your mouse has 3 buttons, then use the middle
        one to view. If you have a 2 button mouse use the V key to view.

     2) When using the keyboard simply use the <spacebar> to play and
        select from the menus. Use the arrows to move around and finally
        use the V key to view the original puzzle.

    After novice users have become familiar with the above simple
    operation, they may try using the RIGHT mouse button or the <ESC> key
    to gain access to all of the PC-JIGSAW options.

   6.                 DOCUMENTATION  AND ACKNOWLEDGEMENTS

    If you have a printer, then please print out and read documentation
    file JIG.DOC.  This file can be printed out by simply typing :
    COPY JIG.DOC PRN  at the DOS prompt.

    The opening music theme is "The flight of the Bumble Bee" by Rimsky
    Korsakov.  The music playing after you solved the puzzle is
    "When Johnny comes Marching Home" by Patrick Sarsfield Gilmore.
    All of the new features and improvements in version 2 are the results
    of several suggestions by users of the older PC-JIGSAW versions.

   7.                  OTHER SHAREWARE BY ALIVE SOFTWARE

   7.1   CRAZY SHUFFLE, a Shareware program.  This is a Fun, Challenging,
   Educational puzzle game.  It tests the player's memory and concentration
   skills. Fun for any age . Great Graphics . Registration benefits
   include :


                                Page 4 of 5


   One floppy disk packed with hundreds of colorful cards for this game
   The pictures you will receive are divided in 3 Categories

        A) For young children the Fun Learning collection includes :
           BODY  (8),  CARTOONS (8),  FARM (8),
           FRUIT (8),  JUNGLE   (8),  FANTASY (18),  PETS (8) .
        B) For older children and adults, Educational themes are used
           to sharpen knowledge and provide more difficult puzzles :
           HISTORY    (18),  HOLIDAYS (8), US PRESIDENTS (8),
           US STATES  (18),  VEHICLES (18) and finally
        C) for Adults who love a REAL Challenge :
           HATS (32),  OBJECTS (32), SHADOWS (32), SYMBOLS (32).
    * Note that (8), means 8 different cards each, (32) means 32 etc.
    For a total of 264 great quality cards for the Crazy Shuffle.
    Registration for CRAZY SHUFFLE is  $ 20, only from ALIVE SOFTWARE.

    7.2                    VGA JIGSAW PUZZLE

    A Jigsaw Puzzle for VGA graphics systems that works in the 256 color
    mode.  Registration includes several puzzles with color and brilliance
    that only VGA can produce.  The program will also read any GIF or PCX
    files in the 320 X 200 X 256 color mode.
    Registration for VGA JIGSAW PUZZLE is  $ 20, only from ALIVE SOFTWARE.

   8.                PC - JIGSAW PUZZLE  REGISTRATION BENEFITS

   PC-JIGSAW is distributed as Shareware: if you like the program,
   please become a registered user .  Print and read file REGISTER.DOC
   for more information on how to register.

   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
   *                                                                     *
   *  +  You will receive the latest version of this program.            *
   *  +  Technical support .  Registered users Please write to :         *
   *     ALIVE SOFTWARE, PO BOX 4004, SANTA CLARA, CA, 95054, U.S.A.     *
   *     Or you may send Electronic mail to the programmer, Bill Dedes at*
   *        PRODIGY     .... ID   #  RGCP92A                             *
   *  + You will receive more free shareware from ALIVE SOFTWARE         *
   *  + The Registered version will read PCX graphic files.              *
   *                                                                     *
   *  + THE MOST IMPORTANT BENEFIT is that
   *  There are a lot more Image files for the PC-JIGSAW, available ONLY *
   *  through ALIVE SOFTWARE.  You will receive the following puzzles    *
   *  DISK # 1  MYTH and FANTASY ( DANCER.GRF and HYDRA.GRF are samples) *
   *    DANCER, EGYPTIAN, FUNHANDS, GENIE, GUARDIAN, HARPS, HYDRA,       *
   *    JIGSAW, KABUKI, KERBEROS, PEGASUS, TYPHON.                       *
   *  DISK  # 2  ANIMALS  ( DOG.GRF is a sample  ) contains following :  *
   *    AQUARIUM, BULL, DINOSAUR, DOG, EAGLE, ELEPHANT, FROGS, LOBSTERS, *
   *    MAMMOTH, MONKEYS, OCEAN, PIGEON, REDBIRD, SHARK, SHEEP.          *
   *  Also included in disk # 2 is a sample for our 3 new collections :  *
   *  for young children CARTOONS, for older children and adults         *
   *  EDUCATION and for adults the challenging MASTER collection.        *
   *  A total of 30 colorful puzzles, available for registered users only*
   *  Also you will receive information on how to get more Jigsaw puzzles*
   *                                                                     *
   *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

                                 Page 5 of 5


```
{% endraw %}

## README.DOC

{% raw %}
```

                            P C - J I G S A W   2

 The enclosed disks contain a new revision of the PC-JigSaw program.
 It was created after several users reported problems or proposed useful
 suggestions.

                          REVISION HISTORY

     PC-JigSaw 1.2  19-NOV-1989

  A) It fixes a problem associated with using a mouse in some systems.
  B) A new level for young children ( 3 X 3 pieces ).
  C) A minor program change in the scoring scheme allows the user to get
     higher scores more easily.
  D) Most laptops have 2 graphic cards. One LCD and one external RGB.
     The program detects only the external RGB and therefore it auto-
     switches to external.  So you have to toggle to LCD by using
     the control key combination provided by the manufacturer. ( eg:
     for DATAVUE's SPARK laptop use <CONTROL> <LEFT-SHIFT> <M> )

     PC-JIGSAW 2.0  6-FEB-1990

  A) Print support for EPSON compatible matrix printers.
  B) Lowest grade now is C.  It is fair to give a passing grade to
     those who finish the puzzle.  Program now displays number of moves
     and number of Views when puzzle is finished.
  C) After a picture is displayed on the screen, now you may cancel it,
     and select another one.
  D) If a piece is moved to its correct location a beep sound confirms it.
  E) Added one more Level of difficulty the MASTER Level ( 9 X 9 pieces )
  F) Improved visibility of the color cross, marking a selected piece.
  G) Added 2 music themes.
  H) Added PCX file support, available for registered users only. This
     allows the users to create their own pictures utilizing any PAINT
     program or SCANNER software supporting the PCX file format.

   Also several other minor changes were to implemented to make this
   program easier to use.

   .......................................................................



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
           REGISTRATION FORM FOR PC-JIGSAW PUZZLE or CRAZY SHUFFLE

    PC-JIGSAW PUZZLE is a Fun and Challenging game. It tests the
    player's memory and pattern recognition skills. Easy to use, fun
    for any age, great graphics . Registration Benefits include :

    1.  Two disk packed with 30 colorful puzzles for this game
      DISK # 1   MYTH and FANTASY collection contains the following :
      JIG.EXE     latest PC-JIGSAW Program
      JIG.DOC     Documentation
      GRF files : DANCER,  EGYPTIAN,  FUNHANDS,  GENIE,  GUARDIAN,
                  HARPS,  HYDRA,  JIGSAW,  KABUKI,  KERBEROS,
                  PEGASUS,  TYPHON.
      DISK  # 2   ANIMALS collection contains the following :
      GRF files : AQUARIUM,  BULL,  DINOSAUR,  DOG,  EAGLE,  ELEPHANT,
                  FROGS,  LOBSTERS,  MAMMOTH,  MONKEYS,  OCEAN,
                  PIGEON,  REDBIRD,  SHARK,  SHEEP.
      Also        A sample of our 3 new collections : CARTOONS,
                  EDUCATION and MASTER.

    2.   One more disk packed with other high quality free shareware
         programs from ALIVE SOFTWARE.

    3.   Technical support,  the latest version of PC-JIGSAW,
         update and new product announcements.

    Where Did you get
    this program from ?  ___________________________________________

    Please specify floppy disk type :   ( If none specified, 5 1/4 )
    [ ]  5 1/4 360 K,   [ ] 3 1/2 720K  ( 360 K floppy is assumed  )

    Describe your system by checking one or more of the following :
    [ ] CGA, [ ] EGA, [ ] TANDY, [ ] VGA, [ ] Hercules,  [ ] MCGA
    [ ] Mouse,  [ ] Joystick.

    Your Name: _____________________________________________________

    Address:   _____________________________________________________

    City:      _____________________________________________________

    State:     _____  Zip Code: ______________

    Send _______ copies of PCJIGSAW at $15  each   _______.______

    Send _______ copies of VGA JIGSAW at $20 each   ______.______

    Send _______ copies of CRAZY SHUFFLE $20 each  _______.______

                                           TOTAL __________._______
    [ ] Check enclosed   [ ] Money order enclosed
    Foreign user, please send Check or Money order in U.S. dollars only
                                 Send to :  ..........................
                                            :  ALIVE SOFTWARE        :
                                            :  P.O. BOX 4004         :
     PC-JIGSAW 2   06-FEB-1990              :  SANTA CLARA, CA 95054 :
                                            :..................U.S.A.:



```
{% endraw %}

## README.DOC

{% raw %}
```

                            P C - J I G S A W   2

 The enclosed disks contain a new revision of the PC-JigSaw program.
 It was created after several users reported problems or proposed useful
 suggestions.

                          REVISION HISTORY

     PC-JigSaw 1.2  19-NOV-1989

  A) It fixes a problem associated with using a mouse in some systems.
  B) A new level for young children ( 3 X 3 pieces ).
  C) A minor program change in the scoring scheme allows the user to get
     higher scores more easily.
  D) Most laptops have 2 graphic cards. One LCD and one external RGB.
     The program detects only the external RGB and therefore it auto-
     switches to external.  So you have to toggle to LCD by using
     the control key combination provided by the manufacturer. ( eg:
     for DATAVUE's SPARK laptop use <CONTROL> <LEFT-SHIFT> <M> )

     PC-JIGSAW 2.0  6-FEB-1990

  A) Print support for EPSON compatible matrix printers.
  B) Lowest grade now is C.  It is fair to give a passing grade to
     those who finish the puzzle.  Program now displays number of moves
     and number of Views when puzzle is finished.
  C) After a picture is displayed on the screen, now you may cancel it,
     and select another one.
  D) If a piece is moved to its correct location a beep sound confirms it.
  E) Added one more Level of difficulty the MASTER Level ( 9 X 9 pieces )
  F) Improved visibility of the color cross, marking a selected piece.
  G) Added 2 music themes.
  H) Added PCX file support, available for registered users only. This
     allows the users to create their own pictures utilizing any PAINT
     program or SCANNER software supporting the PCX file format.

   Also several other minor changes were to implemented to make this
   program easier to use.

   .......................................................................



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
           REGISTRATION FORM FOR PC-JIGSAW PUZZLE or CRAZY SHUFFLE

    PC-JIGSAW PUZZLE is a Fun and Challenging game. It tests the
    player's memory and pattern recognition skills. Easy to use, fun
    for any age, great graphics . Registration Benefits include :

    1.  Two disk packed with 30 colorful puzzles for this game
      DISK # 1   MYTH and FANTASY collection contains the following :
      JIG.EXE     latest PC-JIGSAW Program
      JIG.DOC     Documentation
      GRF files : DANCER,  EGYPTIAN,  FUNHANDS,  GENIE,  GUARDIAN,
                  HARPS,  HYDRA,  JIGSAW,  KABUKI,  KERBEROS,
                  PEGASUS,  TYPHON.
      DISK  # 2   ANIMALS collection contains the following :
      GRF files : AQUARIUM,  BULL,  DINOSAUR,  DOG,  EAGLE,  ELEPHANT,
                  FROGS,  LOBSTERS,  MAMMOTH,  MONKEYS,  OCEAN,
                  PIGEON,  REDBIRD,  SHARK,  SHEEP.
      Also        A sample of our 3 new collections : CARTOONS,
                  EDUCATION and MASTER.

    2.   One more disk packed with other high quality free shareware
         programs from ALIVE SOFTWARE.

    3.   Technical support,  the latest version of PC-JIGSAW,
         update and new product announcements.

    Where Did you get
    this program from ?  ___________________________________________

    Please specify floppy disk type :   ( If none specified, 5 1/4 )
    [ ]  5 1/4 360 K,   [ ] 3 1/2 720K  ( 360 K floppy is assumed  )

    Describe your system by checking one or more of the following :
    [ ] CGA, [ ] EGA, [ ] TANDY, [ ] VGA, [ ] Hercules,  [ ] MCGA
    [ ] Mouse,  [ ] Joystick.

    Your Name: _____________________________________________________

    Address:   _____________________________________________________

    City:      _____________________________________________________

    State:     _____  Zip Code: ______________

    Send _______ copies of PCJIGSAW at $15  each   _______.______

    Send _______ copies of VGA JIGSAW at $20 each   ______.______

    Send _______ copies of CRAZY SHUFFLE $20 each  _______.______

                                           TOTAL __________._______
    [ ] Check enclosed   [ ] Money order enclosed
    Foreign user, please send Check or Money order in U.S. dollars only
                                 Send to :  ..........................
                                            :  ALIVE SOFTWARE        :
                                            :  P.O. BOX 4004         :
     PC-JIGSAW 2   06-FEB-1990              :  SANTA CLARA, CA 95054 :
                                            :..................U.S.A.:



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1558

     Volume in drive A has no label
     Directory of A:\

    DANCER   GRF     19928   2-06-90   6:23p
    DOG      GRF     22303   2-06-90   6:23p
    FILE1558 TXT      2517   3-21-90   6:19p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       542   1-01-80  12:55a
    HYDRA    GRF     16255   2-06-90   6:23p
    JIG      DOC     15583   2-06-90   6:23p
    JIG      EXE    106422   2-06-90   6:23p
    JIGSAW   GRF     18244   2-06-90   6:23p
    PCJIG2   ZIP    132968   2-06-90   6:23p
    README   DOC      1909   2-06-90   6:23p
    REGISTER DOC      2680   2-06-90   6:23p
           12 file(s)     339389 bytes
                           18432 bytes free
