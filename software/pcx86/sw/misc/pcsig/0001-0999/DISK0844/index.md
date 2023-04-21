---
layout: page
title: "PC-SIG Diskette Library (Disk #844)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0844/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0844"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ABC FUN KEYS, EDUCATIONAL FOR CHILDREN"

    In our rapidly moving technological world, people are being introduced
    to the computer at younger and younger ages. ABC FUN KEYS teaches the
    alphabet, numbers, and keyboard skills to children, ages 2-6. Each
    letter is represented by colorful pictures and nursery rhyme melodies
    are played when the right key is chosen.
    
    ABC FUN KEYS has four learning games designed around the alphabet. An
    adult control panel and menu allow you to select the letters to be
    presented, the order of presentation, and many other game options.
    
    In the first game, a letter appears along with a picture of something
    that begins with that letter, and the child must find and press the key
    associated with the letter. Pressing the correct key causes the
    computer to play a song. Pressing the wrong key makes a buzzer sound.
    
    Game Two is similar to the first game, except that the picture is
    gradually revealed, slowly at first and then at an increasing rate. If
    the correct key is not quickly pressed, the picture disintegrates and
    another begins to take its place.
    
    Game Three, named Heaven and Mud, is a typing tutor for young
    children.  Letters float in the "air" in the middle of the screen.
    When the correct key is pressed, the letter explodes into hearts that
    then float to heaven.  "Unloved" letters fall and sink into the mud.
    
    The fourth game is designed for very young children. It displays the
    letter of any key that is pressed and plays a randomly-selected song.
    
    ABC FUN KEYS is educational and designed to make learning as fun and
    stimulating as possible.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABC.DOC

{% raw %}
```
















                       ----------------------------------------
                       I                                      I
                       I            ABC FUN KEYS              I
                       I                                      I
                       I            Version 4.1               I
                       I                                      I
                       I     A Musical Learning Game for      I
                       I           Small Children             I 
                       I                                      I
                       I     For IBM Compatible Computers     I
                       I                                      I  
                       ----------------------------------------







                                  November 24, 1989
           





                                Courtney E. Krehbiel
                          199 N. El Camino Real, Suite F175
                                 Encinitas, CA 92024



                     -------------------------------------------
                     |  24 Hour Message and Software Support   |
                     |    On-line Registration with MC/Visa    |
                     |-----------------------------------------|
                     |    ABC FUN KEYS Bulletin Board System   |
                     |-----------------------------------------|
                     |        Telephone: (619) 436-3525        |
                     |    Modem Settings: 300 to 2400 BPS,     |
                     |      No parity, 8 Bits, 1 Stop Bit      |
                     -------------------------------------------








            Copyright (c) 1989 Courtney E. Krehbiel  All Rights Reserved








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                            QUICK START FOR ADVANCED USERS
                            ------------------------------

          About the program:
          ------------------
          ABC FUN KEYS is an educational game for children between the ages
          of two to six years old.  The game features 38 colorful full
          screen graphic pictures, action, and lots of nursery rhyme songs. 
          The major feature added in this latest release is on-screen
          scrolling lyrics for all 27 nursery rhyme songs.  

          The ABC FUN KEYS shareware program consists of four different
          games: An entry level game where a picture is displayed and song
          is played for each letter and number key that is pressed; a
          beginner game where the child must match the letter/number
          picture displayed on the screen with the corresponding key on the
          keyboard; a more advanced version where the picture is gradually
          revealed and the child must make the correct match in a limited
          time period; and a child's typing tutor where letters and numbers
          float in the "air" between "heaven" and "mud".  In the last game,
          letters need to be "hearted to heaven" by pressing the
          corresponding key before they expire and sink into the mud.

          Advanced features of the ABC FUN KEYS include the ability to
          select any combination and order of letters and numbers, an adult
          setup utility with on-line help, and configuration files and
          command line parameters for automatic game startup.  The program
          opens with an easy-selection child's menu.

          ABC FUN KEYS will run on any IBM PC compatible computer with 256
          KB or more of available RAM, one floppy disk, and DOS 2.0 or
          greater.  The program works with Hercules Monochrome, CGA, EGA,
          or VGA video systems.  ABC FUN KEYS is written in Turbo C.

          How to Start:
          -------------
          To start ABC FUN KEYS from a floppy, use the distribution disk or
          copy all the program files to a single floppy diskette.  Place
          the disk in drive A:, make A: the default drive, and type:  ABC

          If you are using a hard disk, make a subdirectory labeled ABC and
          copy all the ABC FUN KEYS files to that subdirectory.  Make the
          ABC subdirectory the current directory, and type:  ABC

          Typing ABC /? will display a help screen listing the command line
          options.  If the program fails to display graphics correctly, you
          may need to explicitly tell the program which graphics adapter
          your computer uses.  For example, ABC /V=7 starts ABC FUN KEYS
          for a Hercules monochrome graphics system.




          Copyright (C) 1989 by C. E. Krehbiel                       Page i








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                  TABLE OF CONTENTS
                                  -----------------



          QUICK START FOR ADVANCED USERS  . . . . . . . . . . . . . . .   i

          COPYRIGHT NOTICE  . . . . . . . . . . . . . . . . . . . . . .  iv

          THANK YOU FOR YOUR INTEREST IN ABC FUN KEYS . . . . . . . . .   1

          WHY SHOULD I REGISTER ??  . . . . . . . . . . . . . . . . . .   2

          REGISTRATION BENEFITS . . . . . . . . . . . . . . . . . . . .   3

          COMPUTER SYSTEM REQUIREMENTS FOR ABC FUN KEYS . . . . . . . .   4

          PROGRAM OVERVIEW  . . . . . . . . . . . . . . . . . . . . . .   5

          GAME DESCRIPTIONS . . . . . . . . . . . . . . . . . . . . . .   6
               GAME ONE -- Basic  . . . . . . . . . . . . . . . . . . .   6
               GAME TWO -- Guess Quick  . . . . . . . . . . . . . . . .   6
               GAME THREE -- Heaven and Mud . . . . . . . . . . . . . .   7
               GAME FOUR -- Display . . . . . . . . . . . . . . . . . .   7

          STARTING THE GAME -- Floppy Disk System . . . . . . . . . . .   8
               Optional Parent's Setup Mode . . . . . . . . . . . . . .   8

          STARTING THE GAME -- Hard Disk System . . . . . . . . . . . .  10
               To load ABC FUN KEYS onto your hard disk . . . . . . . .  10
               To run ABC FUN KEYS from your hard disk: . . . . . . . .  10

          CONTROL PANEL FEATURES  . . . . . . . . . . . . . . . . . . .  11
               Clear and Start Over . . . . . . . . . . . . . . . . . .  11
               Select All . . . . . . . . . . . . . . . . . . . . . . .  11
               Select All Alphabet  . . . . . . . . . . . . . . . . . .  11
               Select All Numbers . . . . . . . . . . . . . . . . . . .  12
               Disable/Enable Nursery Rhyme Music . . . . . . . . . . .  12
               Enable Random/Sorted Order Selection . . . . . . . . . .  12
               Enable/Release Keyboard Plus Key Hold  . . . . . . . . .  12
               Lock/Unlock Songs to/from Pictures . . . . . . . . . . .  13
               Save Game Configuration  . . . . . . . . . . . . . . . .  13

          GAME 3 CONTROL PANEL FEATURES . . . . . . . . . . . . . . . .  14
               Use LowerCase/UpperCase Letters in Game3 . . . . . . . .  14
               Heaven/Mud Letter Velocity . . . . . . . . . . . . . . .  14
               Heaven/Mud Letter Duration . . . . . . . . . . . . . . .  14
               Heaven/Mud Letter Warning  . . . . . . . . . . . . . . .  14

          COMMAND LINE CONTROL FEATURES . . . . . . . . . . . . . . . .  15



          Copyright (C) 1989 by C. E. Krehbiel                      Page ii








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                              TABLE OF CONTENTS, Cont.
                              -----------------------



          HIDDEN GAME FEATURES  . . . . . . . . . . . . . . . . . . . .  18

          USING ABC FUN KEYS WITH A RAM-DISK  . . . . . . . . . . . . .  19

          NOTES ON USING ABC FUN KEYS WITH A HARD DISK  . . . . . . . .  19

          OTHER ABC FUN KEY NOTES OF INTEREST . . . . . . . . . . . . .  20

          LISTING OF ABC PROGRAM FILES AND USES . . . . . . . . . . . .  21

          INSTANT MAILER REGISTRATION FORM  . . . . . . . . . . . . . .  22





































          Copyright (C) 1989 by C. E. Krehbiel                     Page iii








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                  COPYRIGHT NOTICE
                                  ----------------



          The ABC FUN KEYS program and manual are copyright (C) 1989 by
          Courtney E. Krehbiel.  All rights are reserved.  Non-registered
          users, PC software libraries, and computer software clubs are
          granted a limited license to use this product on a trial basis,
          and to copy the program for trial use by others subject to the
          following limitations:


               The ABC FUN KEYS program must be distributed in unmodified
               form, complete with all files and documentation.  See the
               file list later in this documentation for details.

               No fee, charge or other consideration may be requested or
               accepted for program distribution with one exception.  PC
               software libraries may charge a maximum of $6 per
               distribution diskette to defray costs of copying and
               mailing.

               ABC FUN KEYS may NOT be distributed in conjunction with any
               other hardware or software product without the written
               permission of the author.  For example, this means the
               program can NOT be given away by computer outlets as part of
               a computer system without my written permission.


          If you intend to use ABC FUN KEYS after an evaluation period, you
          MUST register the program.  To do otherwise is a violation of the
          distribution license and United States Copyright laws. 
          Commercial, educational, business or government use is prohibited
          without site registration.  For example, you may NOT use this
          program in a Pre-School or Day-care center without site
          registration.  Registration fees for such uses are extremely
          reasonable.  Please refer to the registration form for details.















          Copyright (C) 1989 by C. E. Krehbiel                      Page iv








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                     THANK YOU FOR YOUR INTEREST IN ABC FUN KEYS
                     -------------------------------------------


          Thank you very much for looking at ABC FUN KEYS.  I sincerely
          hope that you and a child important to you will find this program
          easy, fun to use, and educational.  

          I have tried very hard to make ABC FUN KEYS as intuitive to use
          as possible.  However, there are features and capabilities
          included in the program that are not obvious from the screen
          displays.  I strongly recommend a quick review of this
          documentation file to get a feel for the range of possibilities
          that ABC FUN KEYS provides.

          Because of the age of the intended audience, I encourage you to
          participate with the child in playing the games.  You can provide
          the vocalization of letters and numbers, positive feedback
          rewards, and closeness that a program can never match.

          If you choose to let your child play solo, be reassured that the
          program has been carefully designed to prevent a small child from
          inadvertently damaging other files which may be on your computer. 
          For example, one program option deliberately makes it difficult
          to exit so a small child won't accidentally get to DOS. 

          Obviously, I hope that you will register your copy of ABC FUN
          KEYS.  All registration proceeds are placed in an account for my
          two children.  I don't expect you to register if you decide the
          program does not meet your needs.  If you choose not to register,
          I would greatly appreciate a note describing what you expected
          the program to do and why you are disappointed.  In either case,
          please pass the program along to others who may be interested.

          Once again, THANK YOU for looking at ABC FUN KEYS.  I hope it
          provides many hours of enjoyable learning for a small child you
          love.
















          Copyright (C) 1989 by C. E. Krehbiel                       Page 1








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                WHY SHOULD I REGISTER ??
                                ------------------------

          Many people tacitly regard "Shareware" distributed software as
          "free".  This is not true.  There is also the inclination to "let
          the other guy register".  As a result, very few users bothered to
          register earlier versions of ABC FUN KEYS which contained the
          complete alphabet.  I nearly abandoned the concept of "Shareware"
          software distribution.

          After this early discouragement, and in a fashion similar to many
          other shareware programs, the full benefits of ABC FUN KEYS were
          set aside for those who registered their copy.  Therefore, the
          complete set of auxiliary pictures for ABC FUN KEYS is no longer
          included in the shareware version of the program.  However, the
          program is completely functional.  There are no missing features
          or capabilities in the Shareware version other than the auxiliary
          picture files.

          I will abide by the spirit of "Shareware".  If you feel the full
          set of picture files is required to properly evaluate ABC FUN
          KEYS, please send me a letter stating why you feel you are unable
          to fairly evaluate the "Shareware" version of the program.  You
          must also include a self addressed floppy disk mailer, one 5 1/4
          inch floppy disk, and $1 for postage and handling if you expect
          to receive a complete evaluation diskette.  I reserve the right
          to refuse any requests which are inadequate or unreasonable in my
          opinion. 

          -----------------------------------------------------------------
          I will gladly send a complementary copy of ABC FUN KEYS to any
          children with special circumstances such as a learning disability
          or physical problem.  Please send me a brief letter requesting a
          "special" copy.  
          -----------------------------------------------------------------

          User feedback is an integral part of any successful software
          program.  Please share your impression of ABC FUN KEYS by writing
          me a message when you register.  Any comments or suggestions you
          care to pass along will help me improve the program and enhance
          the enjoyment of other children who may use it.  I have answered
          every letter I have received about the program.  To a great
          extent, the program has been shaped by user comments.

          An instant mailer registration form is contained in a separate
          file named REGISTER.DOC.  I have continually upgraded and
          supported this program since 1985.  In return, I greatly
          appreciate your support by registering the program if you use it. 
          Thank you in advance for your registration.




          Copyright (C) 1989 by C. E. Krehbiel                       Page 2








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                REGISTRATION BENEFITS
                                ---------------------




          When you register the ABC FUN KEYS program by sending the $15
          registration fee, you will receive my family's thanks plus the
          following direct benefits:  

               - All registered users will receive a floppy disk with the
               latest revision of the ABC FUN KEYS program.  Your program
               disk will contain a serial number assigned only to you.

               - All registered users will receive the picture files which
               complete the alphabet A - Z plus picture files for the
               number keys 0 through 9.

                - All registered users will also receive the ability to   
               place their name or their child's name as registered owners
               in the Initial Window display and the Registration Window
               display.  

               - All registered users will receive notification of any   
               major updates of ABC FUN KEYS.


          Most important, you will receive a good conscience and the
          knowledge that your fairness and integrity are setting a good
          example for your children.  The "C Language" source code for this
          program contains over 25,000 lines of code.  A program of this
          magnitude requires thousands of hours to write, debug,
          illustrate, and document for public delivery.  By registering and
          showing your support, I am compensated for my effort and
          encouraged to improve this program and provide others via the
          "Shareware" software distribution method.  

















          Copyright (C) 1989 by C. E. Krehbiel                       Page 3








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                    COMPUTER SYSTEM REQUIREMENTS FOR ABC FUN KEYS
                    ---------------------------------------------




          In order to run ABC FUN KEYS, you must have the following minimum
          level of computer equipment:


          An IBM Personal Computer or compatible with:

                              - 256 K RAM or more.
                              - 1 double sided floppy disk drive. (360 KB)
                              - PC / MS-DOS Ver. 2.0 or later.
                              - Video display card which supports any of
                                the following PC standards:
                                   CGA, Hercules monochrome,
                                   EGA, or VGA.
                              - Monochrome monitor capable of
                                displaying graphics.



          Recommended equipment additions include:

                              - 640 K RAM 
                              - RAM disk software
                              - Color monitor or EGA/VGA color monitor
                                   and appropriate video card.
                              - Hard Disk drive.


          By storing the picture files on a floppy disk simulated in RAM
          (RAM disk), the speed and keyboard responsiveness of the program
          are substantially improved.  The use of a hard disk for program
          and file storage will also result in good performance.
















          Copyright (C) 1989 by C. E. Krehbiel                       Page 4








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                PROGRAM OVERVIEW
                                ----------------


          ABC FUN KEYS is a learning program designed to introduce a child
          from the ages of 2 to 6 years to the concept of letters, the
          alphabet, and computer keyboards.  The program has been designed
          around colorful, full screen pictures and familiar nursery rhyme
          melodies to make learning as enjoyable and stimulating as
          possible.  There are on-screen scrolling lyrics for those who
          wish to sing along with the nursery rhyme melodies.

          The program consists of four learning games with several game
          options structured around the alphabet and numbers.  There are
          two ways to start the program and select the game.  The first is
          a picture menu intended for small children.  A child only needs
          to press any key to move a blinking star from descriptive picture
          to picture.  The "enter" key selects the game for play.  

          For adults, there is a window paged menu with game descriptions
          and help screens.  The adult menu leads to a game control panel
          before starting the selected game.  This allows you to select the
          letters and numbers which will be used in the game as well as
          various game options.  Control over the selection of letters and
          numbers is critical to the learning process since few small
          children can assimilate the entire alphabet at one time.

          Due to the age of the intended user, it is usually recommended
          that an adult supervise the operation of this program.
























          Copyright (C) 1989 by C. E. Krehbiel                       Page 5








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                  GAME DESCRIPTIONS
                                  -----------------


          ABC FUN KEYS contains four different games.  At the beginning of
          the session, any game can be selected either by a children's
          picture menu or through a parent's control panel.  The parent
          control system allows selection of specific letters and numbers
          plus choice of numerous game options.  The children's menu allows
          easy game selection.  For advanced users, ABC FUN KEYS can be
          started with command line parameters and configuration files for
          virtually automatic operation.


               GAME ONE -- Basic
               -----------------
               Once the first game is started, a letter and object picture
               are displayed on the monitor.  The child must press the
               corresponding letter key on the keyboard.  When successful,
               a short nursery rhyme is played and the colors in the
               picture flash.  Incorrect key responses are greeted with a
               buzz.  This is repeated until all the selected letters have
               been used whereupon the picture selection begins to repeat. 
               A picture "flashcard" mode is also available in this game.


               GAME TWO -- Guess Quick
               -----------------------
               The second game is better for older children with some
               experience with numbers, letters, and the keyboard.  It is
               similar to the basic game except that the picture is
               gradually revealed.  The rate of picture growth increases as
               the picture nears completion.  The child must recognize the
               picture and letter and press the corresponding keyboard key
               before or shortly after the picture is completed.  Success
               is met by a complete picture, a nursery rhyme, and flashing
               colors.  If unsuccessful, the picture disintegrates and
               another begins to take its place.















          Copyright (C) 1989 by C. E. Krehbiel                       Page 6








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                               GAME DESCRIPTIONS Cont.
                               -----------------------


               GAME THREE -- Heaven and Mud
               ----------------------------
               This game is a child's typing tutor.  It's been designed to
               appeal to older children.  The game screen is composed of
               three areas.  There is "Heaven" at the top with a smiling
               sun face, "Air" in the middle of the screen, and "Mud" at
               the bottom of the screen with a frowning mud face.  When the
               game is started, three of the preselected letters or numbers
               begin to float in the air.  If the keyboard key
               corresponding to a letter is pressed, the letter explodes
               into hearts and floats to heaven.  Another letter or number
               takes its place.  If the letter hasn't been "hearted to
               heaven" within a random preset time, the unloved letter
               sinks into the mud.  Letters that are about to expire change
               color as a warning.

               During game play, action can be slowed down by pressing
               "down" arrow.  Movement can be speeded up by pressing "up"
               arrow.  Computer processing power limits the velocity beyond
               a certain point due to requirements imposed by the animation
               technique.  On a 4.77 MHz PC, the fastest movement is fairly
               slow.  If you're lucky enough to be using an 80386 computer,
               characters can literally fly across the screen.  In the
               control panel, you have control of the initial speed and
               lifetime delay factors to allow you to tailor the game to
               your child's abilities.

               The game ends when either Heaven or the Mud become full of
               letters.  For an extra challenge, lower case letters can be
               used in this game.  



               GAME FOUR -- Display
               --------------------
               The fourth learning game is for the youngest children.  It
               allows the child to press a key on the keyboard and the
               computer will respond by displaying a picture of the letter
               and an associated item.  The picture is displayed for the
               duration of a nursery rhyme melody.  Lyrics for the nursery
               rhyme appear in the upper left corner of the screen.








          Copyright (C) 1989 by C. E. Krehbiel                       Page 7








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                         STARTING THE GAME -- Floppy Disk System
                         ---------------------------------------


          1.   Turn on the computer with a copy of your DOS diskette in
               disk drive A.

          2.   If the DOS program asks you for the date and time, press the
               [Enter] key twice.  The date and time are not needed for
               this program.

          3.   At this time, the display should contain the DOS prompt...
                    A>

          4.   Remove the DOS diskette from disk drive A and insert a
               backup copy of your ABC FUN KEYS diskette into disk drive A.
               (Read your DOS manual on how to make a backup copy using the
               DISKCOPY command.)

          5.   Enter the following command after the DOS prompt:
                    ABC [Enter]

          6.   Disk drive A will be activated and the children's menu for
               ABC FUN KEYS will be displayed.

          7.   Select any of the game variations by pressing any key except
               "Enter" until the blinking star is in the window for the
               desired game.  Press [Enter] to start that game.  (Please
               note that if the ABC.CFG configuration file is not present,
               ABC will immediately enter into the Parent's setup mode
               described below.  To create a configuration file, use the
               "Save Game Configuration" option in the setup menu.)


          Optional Parent's Setup Mode
          -----------------------------
          8.   Instead of starting the game, you can enter the parent's
               startup mode with verbal game descriptions and access to the
               control panel by pressing "Ctrl-H" for help.  (The
               [Backspace] key is equivalent to "Ctrl-H").

          9.   The parent's startup menu presents six windows with
               instructions, a brief description of each game, and a
               message about registering your copy of ABC FUN KEYS.  To
               move between the windows, press any key except the [Enter]
               key.  To select a game for play, activate the window that
               describes the game and press the [Enter] key.

          10.  In the parent's startup menu, games 1 through 3 lead into
               the Picture Selection and Control Panel.  This allows
               selection of letters plus control of other game features. 


          Copyright (C) 1989 by C. E. Krehbiel                       Page 8








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                               STARTING THE GAME Cont.
                               -----------------------


          11.  In the picture selection menu, an alphabetical listing of
               the available ABC pictures and a Control Panel is presented. 
               Help is available for this screen by pressing "Ctrl-H".  You
               can escape from the help screen by pressing any key.

          12.  The letters can be selected for play individually or in
               groups.  To move the cursor to the individual letters, press
               the [Left arrow] key or [Esc].  To highlight a letter and
               select it for game play, press [Spacebar] or [Enter]. 
               Pressing the [Spacebar] again deselects the letter.

          13.  Repeat step 12 to select as many pictures as desired. 
               Pictures can be selected in any order.  The order of
               selection is the order in which the pictures will appear in
               games 1 and 2 unless random order presentation is selected
               in the control panel.

          14.  If it is desired to select all the pictures, all the
               letters, or all the numbers, that can be easily accomplished
               in the control panel.  To return to the control panel, press
               [Esc] or use the [Right Arrow] key.

          15.  If you wish to save the letter selections for a later game
               session, move the cursor to the Control Panel.  Then press
               "S" to save the game configuration.  You can also use the up
               or down arrow keys to move the cursor to the "Save Game
               Configuration" line and then press [Spacebar] or [Enter] to
               select that option.

          16.  Once all the desired pictures and game options have been
               selected and the configuration optionally saved, move the
               highlighted cursor to the top choice labeled "START GAME
               PLAY" and press [Enter] or [Spacebar] key to begin the game. 
               You can also start the game by pressing "G".

          17.  Pressing "Ctrl-Home" will restart the game at the opening
               menu.  Pressing "Ctrl-End" or "Ctrl-Break" will exit the
               game.  These are available whenever the program is waiting
               for a user keystroke.  If the ABC game was started with the
               "Easy Exit" command line option, (/E), then the F9 function
               key will restart the game and F10 will exit the game.  If
               you are starting ABC from a menu of choices for your child,
               this allows your child an easy way to return to the menu.






          Copyright (C) 1989 by C. E. Krehbiel                       Page 9








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                         STARTING THE GAME -- Hard Disk System
                         -------------------------------------


          If you are fortunate enough to have a hard disk in your computer,
          you should replace the instructions contained in steps 1 through
          5 above with the following procedure to load the ABC game onto
          your hard disk.


          To load ABC FUN KEYS onto your hard disk:
          -----------------------------------------
          1.   Turn on the computer and get to the DOS prompt.  This will
               usually be:    C:\>

          2.   Make a subdirectory to contain the ABC FUN KEYS program
               files by typing:   MD \ABC [Enter]

          3.   Insert the diskette with the ABC FUN KEYS files into drive
               A: on your computer and type:   COPY A:\*.* C:\ABC [Enter]

          4.   The ABC FUN KEYS files have now been copied to your hard
               disk.  You should not need to repeat these steps again. 
               Remove the ABC FUN KEYS diskette and put it in a safe place.



          To run ABC FUN KEYS from your hard disk:
          ----------------------------------------

          1.   Turn on the computer and get to the DOS prompt.  This will
               usually be:    C:\>

          2.   Make  \ABC your default subdirectory by typing:  
                    CD \ABC [Enter]

          3.   Start the ABC game by typing:   ABC


          You can now continue with Step 6 in the instructions for floppy
          disk users above.












          Copyright (C) 1989 by C. E. Krehbiel                      Page 10








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                               CONTROL PANEL FEATURES 
                               ----------------------


          The Picture Selection & Control Menu is accessed requesting
          "Help" from the Children's Picture Menu by pressing "Ctrl H". 
          The selection menu is automatically presented when any game but
          game four is selected.  The Control Panel is on the right side of
          the menu screen.  On the left side is an alphabetical listing of
          available pictures that can be used in the game.  Any pictures
          that have been selected for play are highlighted.

          The control panel is divided into three sections by horizontal
          lines.  The top section contains disk drive information and a
          brief reminder of useful keystrokes.  The middle section contains
          a bar selection menu for different game features.  The bottom
          section contains status indicators for several game features. 
          Not all menu bar features apply to each game.  Features that are
          available for the selected game are presented in normal colors
          with a highlighted key letter.  Unavailable options are in a dim
          color without a highlighted letter.  The options for Game 3,
          Heaven and Mud, are slightly different.

          There are two ways to select an option.  The first is to press
          the highlighted key that corresponds to the menu bar option.  A
          feature can also be selected by using the "Up" and "Down" arrow
          keys to move the highlighted bar to the desired item.  The item
          can then be selected by pressing  [Spacebar] or [Enter].

          The features in the Control Panel are as follows.  Applicable
          games for each option appear in parenthesis.


          Clear and Start Over
          --------------------
               Deselects all letter and number pictures and starts over
               with a clean slate.  Note that at least one picture must be
               selected to successfully start the game.  (1,2,3)

          Select All
          ----------
               Selects all available letter and number pictures for game
               play.  (1,2,3)

          Select All Alphabet
          -------------------
               Selects all available letter pictures A-Z for game play. 
               All number pictures are automatically deselected.  (1,2,3)





          Copyright (C) 1989 by C. E. Krehbiel                      Page 11








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                            CONTROL PANEL FEATURES, Cont.
                            -----------------------------


          Select All Numbers
          ------------------
               Selects all available number pictures 0-9 for game play. 
               All letter files are automatically deselected.  (1,2,3)

          Disable/Enable Nursery Rhyme Music
          ----------------------------------
               This option toggles a switch which selects either nursery
               rhyme melodies or a "TA DA" sound when pictures have been
               successfully keyed.  An indicator in the bottom panel shows
               TONE when the "TA DA" sound has been selected, or RHYM when
               nursery rhymes are active.  Note that the "Num Lock" key can
               perform the same function while a game is being played. 
               (1,2,4)

          Enable Random/Sorted Order Selection
          ------------------------------------
               This option toggles a switch which causes pictures to be
               presented for play in sorted or random order.  In the sorted
               order mode, pictures will be presented in the order in which
               they were selected.  This will be numeric and alphabetical
               order if control panel group selection was used.  In random
               mode, pictures will not be repeated until all pictures have
               been shown.  An indicator box in the bottom panel shows
               RANDM for random order and ORDRD for selected order mode. 
               (1,2)

          Enable/Release Keyboard Plus Key Hold
          -------------------------------------
               The Plus Key Hold is a feature which can be used by an adult
               to moderate the pace of play.  I added this feature to an
               early version of the program when my daughter insisted on
               bashing all the keys at random just to hear the noise it
               made.  Plus Key Hold causes the keyboard to be dead once a
               picture has been displayed until the "Plus" key on the right
               side of the keyboard has been pressed.  Then the keyboard is
               live.  As a reminder, a tiny "+" symbol appears in the upper
               left corner of the screen.

               The current status of the plus key hold toggle switch is
               shown by an indicator in the lower panel.  PLS OF
               corresponds to "plus off" or a normal live keyboard.  PLS ON
               indicates that Plus Key Hold is active.  (1)






          Copyright (C) 1989 by C. E. Krehbiel                      Page 12








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                            CONTROL PANEL FEATURES, Cont.
                            -----------------------------

          Lock/Unlock Songs to/from Pictures
          ----------------------------------
               This is one of many features based upon a user's suggestion. 
               This option allows the nursery rhyme songs to be "locked" or
               synchronized to the letter/number pictures.  When songs are
               not locked, they are selected at random.  To the extent
               possible, songs try to emphasize the featured letter when
               they are synchronized to the picture.  For example, if the
               songs are "locked", "The Old Brass Wagon" is always played
               when the letter "B" is pressed.  The control panel indicator
               displays SYNC when the nursery rhymes are locked to the
               pictures.  NOSYNC is displayed for random selection of
               songs.  (1,2,4)  

          Save Game Configuration
          -----------------------
               This is a very powerful feature which allows all pertinent
               game information to be saved in a configuration file.  The
               saved information consists of the picture selection list and
               the status of every item in the Control Panel indicator
               field.  The name of the default configuration file is
               ABC.CFG.  This file will be updated every time the Save Game
               option is selected.  The next time ABC FUN KEYS is started,
               it will automatically use the letters and parameters stored
               in the configuration file.  (1,2,3,4)

               This semi-permanent configuration capability allows you to
               design a custom game environment for your child.  Once
               configured, a game can be easily selected from the
               Children's Picture Menu until you decide to change
               parameters.

               For advanced users, ABC FUN KEYS has the ability to use
               multiple configuration files by means of the command line
               parameter /C=<ABC config file name>.  (See the next section
               for more information on command line control parameters.) 
               When you specify a configuration file name other than the
               default, ABC FUN KEYS saves its configuration information to
               a file of that name.  If the file does not already exist, it
               is created.  Therefore, you can have multiple configuration
               files that are designed for different purposes.









          Copyright (C) 1989 by C. E. Krehbiel                      Page 13








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                            GAME 3 CONTROL PANEL FEATURES
                            -----------------------------

          Use LowerCase/UpperCase Letters in Game3
          ----------------------------------------
               This menu bar option allows selection of uppercase or lower
               case letters in Game 3, Heaven and Mud.  Numbers are not
               affected.  Upper case letters will be used when G3 UPR is in
               the indicator display.  Lower case letters will be used when
               G3 LWR is displayed.

          Heaven/Mud Letter Velocity
          --------------------------
               This selection controls the speed at which the characters
               move across the screen subject to the capabilities of the
               computer.  When this item is selected, a setting window
               appears that allows the speed variable to be changed. 
               Applicable values are from 0 to 15 with lower numbers
               introducing less delay in the character movement for a
               faster game.  If set to -1, the computer's speed is
               automatically sensed and velocity is adjusted automatically
               for an intermediate level of play.  Note that when using a
               4.77 MHz PC, the fastest character movement is fairly slow. 
               Speed can be adjusted during the course of game play by
               pressing the [Up Arrow] key to speed up play and the [Down
               Arrow] key to slow down play.

          Heaven/Mud Letter Duration
          --------------------------
               The duration selection controls the maximum number of moves
               that a character can make before expiring.  The actual
               number of moves is set by a random number generator for each
               character subject to this maximum value.  When this item is
               selected, a setting window opens that allows the duration
               variable to be changed.  Applicable values are from 1 to 50. 
               Lower values correspond to a shorter average duration time
               and hence a faster game requiring more skill.

          Heaven/Mud Letter Warning
          -------------------------
               Before each character is about to expire, it changes color
               as a warning.  The warning selection allows you to set the
               number of moves before expiration that the warning appears. 
               Notice that it should be set lower than the duration
               variable discussed above.  When this item is selected, a
               setting window opens that allows the warning variable to be
               changed.  Applicable values are from 1 to 10.  Lower values
               correspond to less expiration warning time and hence a game
               requiring greater skill.




          Copyright (C) 1989 by C. E. Krehbiel                      Page 14








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                            COMMAND LINE CONTROL FEATURES
                            -----------------------------

          A command line parameter is an instruction to the ABC FUN KEYS
          program that is entered on the same line as the command to start
          the program from DOS.  These are generally for advanced users. 
          You do not need to enter any commands other than "ABC" to make
          the program run.  The command line instructions add extra
          options.  All command line instructions start with a forward
          slash "/".  If you type "ABC /?", the program will provide a
          brief listing of all available command line options.  Following
          are listings, descriptions, and examples for the optional command
          line parameters for ABC FUN KEYS.


               /D=<Drive:pathname>  (Drives A: thru H: are valid)
                    This command allows you to specify a drive and pathname
                    to the ABC picture and auxiliary files.  If omitted,
                    ABC FUN KEYS defaults to the current drive and
                    directory.  The program will run on most local area
                    networks.  If you need to use drive letter greater than
                    H:, consider using DOS's ASSIGN command.
                    Example:  ABC /D=C:\GAMES\ABC

               /G=<Game number>  (1 thru 4 are valid numbers)   
                    This option allows you to automatically select one of
                    the four games to be played.  If you select this
                    option, ABC FUN KEYS immediately begins the chosen game
                    without any menus.
                    Example:  ABC /G=3

               /V=<Video mode> (1=CGA, 2=MCGA, 3=EGA, 7=MONO, 9=VGA)
                    ABC FUN KEYS has the ability to automatically detect
                    the type of video display board you have installed in
                    your computer.  This command line option allows you to
                    override the default selection.  If you are having
                    trouble with your display, you may wish to experiment
                    with different options from 0 through 10.
                    Example:  ABC /V=7  

               /C=<ABC config file name>  (The default file is ABC.CFG)
                    When you start the game, ABC FUN KEYS looks up initial
                    game settings in a configuration file.  This option
                    allows you to have multiple configuration files and
                    recall any of them from the command line.  This might
                    be useful if you wanted to develop a front end
                    selection menu for different types of games.
                    Example:  ABC /C=MYGAME.CFG





          Copyright (C) 1989 by C. E. Krehbiel                      Page 15








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                         COMMAND LINE CONTROL FEATURES Cont.
                         -----------------------------------



               /N=<Number of Songs>  (The default is 27 songs available)
                    This setting allows you to restrict the number of songs
                    available to the ABC program.  It is probably more
                    useful if you wish to add additional songs.  Utilities
                    to manipulate the song file and add songs are available
                    on the ABC bulletin board system to registered program
                    users.
                    Example:  ABC /N=20

               /T=<Tempo Modify Factor>  (The default is 10, normal speed.)
                    The Tempo Modify Factor allows you to change the tempo
                    of the nursery rhyme games that will be played by the
                    ABC Fun Keys program.  Factors can range from 5, the
                    fastest tempo, to 30 which will produce the slowest
                    tempo.  Experiment to see which you prefer.
                    Example:   ABC /T=15 
                               (Produces a slightly slower rhyme tempo.)

               /Q   (Quiet operation)
                    This option kills all sound effects and nursery rhyme
                    melodies for totally quiet play.  Most kids find it
                    boring.  Many adults love it.  You decide!
                    Example:  ABC /Q

               /M   (Skips the children's opening Menu)
                    You may always want to exercise total control over the
                    game setup.  If you find yourself usually using the
                    help key from the Children's opening menu, this option
                    provides an easy way to skip it.
                    Example:  ABC /M

               /S   (Snow reduction)
                    Many early CGA video display boards produce a snowy or
                    static filled image during screen updates when a
                    program writes directly to the video display.  Most
                    programmers (including yours truly) love to design
                    programs that write directly to the display since it
                    provides fast, snappy graphics.  If you have one of the
                    old video boards, you have a choice between a fast
                    static filled display, or a much slower but relatively
                    static free display.
                    Example:  ABC /S






          Copyright (C) 1989 by C. E. Krehbiel                      Page 16








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                         COMMAND LINE CONTROL FEATURES Cont.
                         -----------------------------------



               /E   (Easy Exit)
                    Several people requested an easy way to exit or restart
                    the ABC program for children rather than the obtuse
                    "Ctrl-Home/End" keys.  This allows you to provide that
                    option.  When enabled, "easy exit" allows the F9
                    function key to restart the program and F10 to
                    immediately exit.  These keys are active any time the
                    program is waiting for keyboard input.
                    Example:  ABC /E  enables "easy exit".

               /P   (Print Screen Activated)
                    Some users wanted to be able to print the screen
                    pictures.  The [Print Screen] keyboard key is normally
                    disabled to prevent the program from hanging if a
                    printer is off-line, or lots of paper from being
                    wasted.  This switch activates screen printing.  As a
                    reminder, you will need to utilize a graphics driver
                    such as DOS's GRAPHICS.COM to successfully print a
                    graphics screen image.  Check your printer and DOS
                    manuals for details.  Not all printers may be able to
                    do this function correctly.
                    Example:  ABC /P  enables screen printing.



          You can combine multiple command line instructions on the same
          line.  For example, if you want to set up your own front end menu
          for ABC FUN KEYS, a command line setup like this might be useful:

                    ABC /D=C:\GAMES\ABC /C=ALPHANUM.CFG /G=3

          Another few examples:
                    ABC /Q /M
                    abc /v=1 /s /d=e:

          Notice that either upper or lower case can be used and the order
          of the commands is not important.











          Copyright (C) 1989 by C. E. Krehbiel                      Page 17








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                                 HIDDEN GAME FEATURES
                                 --------------------


          1.   At any time the program is waiting for keyboard input, it is
               possible to restart the game at the opening menu selection
               by pressing "Ctrl-Home".  (Press both keys simultaneously.) 
                 
          2.   Press "Ctrl-End" or "Ctrl-Break" to end the game and return
               to the DOS prompt.

          3.   A "flashcard" mode is available in Game 1.  To enter the
               flashcard mode, press the "Scroll Lock" key in the upper
               right hand corner of the keyboard.  The length of the
               flashcard duration can be adjusted by pressing the "up
               arrow" key to speed up the rate and the "down arrow" key to
               slow down the rate.  The flashcard mode can be stopped by
               pressing the "Scroll Lock" key once again.  

               Note that the flashcard rate is dependent upon the speed of
               the disk drive and can not be increased beyond a certain
               point.  Use of a ram-disk or hard disk can significantly
               improve the performance of the program in this mode.

          4.   In some instances it may be desirable to eliminate the song
               which is played with each successful keystroke.  This mode
               can be selected by pressing the "Num Lock" key during the
               course of play.  While in this mode, songs are inhibited and
               only a cheerful "Ta-Da" note is played.  Operation can be
               restored to normal by once again pressing the "Num Lock"
               toggle key.  It is also possible to select this mode from
               the Parent's Control Panel.  When songs are inhibited by the
               control panel, the "Num Lock" key has no effect.

               Completely silent operation can only be selected by using
               the command line parameter /Q.

















          Copyright (C) 1989 by C. E. Krehbiel                      Page 18








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                         USING ABC FUN KEYS WITH A RAM-DISK
                         ----------------------------------

          The use of a simulated floppy disk drive in RAM memory (commonly
          called a RAM Disk) can greatly speed up the rate at which the ABC
          program retrieves picture and music files.  This makes the game's
          operation seem instantaneous.

          To speed up the program in this way requires ram-disk software
          such as VDISK.SYS which is included with many copies of DOS. 
          Ram-disk software is not included with this program.

          Follow instructions to use your ram-disk software.  Create the
          electronic disk drive.  Label the disk drive C:.  Copy the
          picture and music files from the game disk to the electronic disk
          by issuing the following commands...

                         COPY A:*.S* C: [Enter]

          Begin the ABC FUN KEYS game by typing...

                         ABC /D=C: [Enter]

          Note that using the program command "/D=C:" following the call
          for the ABC program instructs the program to look for picture and
          other auxiliary files on the electronic disk, C:.  These files
          can be retrieved from any valid disk drive by changing the drive
          designation.  If no drive/path information is specified, the
          program assumes the current disk drive.



                    NOTES ON USING ABC FUN KEYS WITH A HARD DISK
                    --------------------------------------------

          Using ABC FUN KEYS with a hard disk is similar to the operation
          of the program with a RAM disk.  For example, suppose the program
          ABC is located in a subdirectory called "c:\games" off of the
          root directory.  To avoid cluttering up the games directory with
          the picture and auxiliary files, you may have placed them in the
          directory "c:\games\pics".  You must have all files with an
          extension that begins with "s" in the pics subdirectory.  (ie:
          *.s*)  To start the game type...

              CD \GAMES [Enter]
              ABC /D=C:\GAMES\PICS [Enter]

          Note that the ABC game must always receive drive information. 
          Any necessary path information to the picture and other auxiliary
          files must follow the drive specification.



          Copyright (C) 1989 by C. E. Krehbiel                      Page 19








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                         OTHER ABC FUN KEY NOTES OF INTEREST
                         -----------------------------------

          The picture files are labeled ".spf" which stands for "scrunched
          picture file".  A crude form of data compression has been used to
          enable all the game files to fit (just barely) on a single 360 KB
          floppy disk.  The picture files can be created using the PC Paint
          program and mouse from Mouse Systems (PC Mouse).  Once the
          picture has been drawn with the PC Paint program, it must be
          "scrunched" for use with ABC FUN KEYS.  The program SCRUNCH.EXE
          is available on the ABC Bulletin Board System for registered
          users for this purpose.  The format of the files is different for
          ABC FUN KEYS Version 4.02 and above.  Old version picture files
          will not work.

          Any assistance with either musical scores or pictures is
          gratefully accepted.  The author is neither an artist nor
          composer.



































          Copyright (C) 1989 by C. E. Krehbiel                      Page 20








          ABC FUN KEYS                                Program Documentation
          _________________________________________________________________



                        LISTING OF ABC PROGRAM FILES AND USES
                        -------------------------------------


          ABC.EXE       --    The main ABC program.

          ABC.DOC       --    This users manual. (Shareware Version)
            or
          ABC_DOCS.EXE  --    This users manual in compressed format with
                              self-extraction, viewing, and printing
                              utilities included. (Registered User Version)

          REGISTER.DOC  --    The instant mailer registration form.

          ABC.CFG       --    The initial game configuration file.  This is
                              the file which contains the letter/number
                              selection list and status of game options. 
                              This file can be modified by the user in the
                              Control Menu.

          0 to 9.SPF
          A to Z.SPF    --    "Scrunched picture files" that will be loaded
                              and displayed by the ABC program.  Not all
                              files are included in the shareware version
                              of program.

          MUSIC.SNG     --    A file with nursery rhyme songs that will be
                              loaded and played by the ABC program.

          GAME3.SCR and
          MENU.SCR      --    Picture files used for the opening menu and
                              the background for Game 3.  These files must
                              be located in the same directory as the
                              picture and music files.

          READ.ME       --    Introduction to the ABC FUN KEYS program. 

          READ_ME.2ND   --    A text file that accompanies the ABC_DOCS.EXE
                              documentation file to assist with file
                              extraction, reading, and printing.  Not
                              included in the shareware version.

          WHATS.NEW     --    A text file describing the improvements
                              incorporated in Version 4.1 of ABC Fun Keys.

          MAKESHAR.BAT  --    A batch file to make a Shareware distribution
                              disk from a registered version of the
                              program.  Not included in the shareware
                              version.




          Copyright (C) 1989 by C. E. Krehbiel                      Page 21








                           INSTANT MAILER REGISTRATION FORM
                          --------------------------------
              Please support quality shareware by registering your copy.
                  THANK YOU in advance for registering ABC FUN KEYS!
     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
     Make check                Courtney E. Krehbiel                 Order Form
     payable to:              199 N. El Camino Real
                                   Suite F175
                               Encinitas, CA 92024

     =========================================================================
     Qty           Description                                Unit    Extended
     -------------------------------------------------------------------------
              | INDIVIDUAL REGISTRATION                     |        |
              | ABC FUN KEYS Ver. 4.1                       | $15.00 | $
              |  (Latest version, manual on disk, number    |        |
              |   files, and complete set of alphabet       |        |
              |   picture files.)  ** 5 1/4 inch floppy **  |        |
     ---------|---------------------------------------------|--------|--------
              | COMMERCIAL / INSTITUTIONAL                  |        |
              | REGISTRATION PER SITE                       |        |
              | ABC FUN KEYS Ver. 4.1                       | $50.00 | $
              |  (Same package as above)                    |        |
     ---------|---------------------------------------------|--------|--------
              | 3 1/2 inch format instead of 5 1/4;   ADD   | $ 2.00 | $
     ---------|---------------------------------------------|--------|--------
                                                             Subtotal: $
                   (CA residents must add 7% sales tax)           Tax: $
                                                                Total: $

     Payment by:   ( ) Check    ( ) Money Order    ( ) Visa / MasterCard

     Name: ...................................................................
                   
     Addr: ...................................................................

     .........................................................................

     City: ...............................   State: ........  Zip: ...........

     ============ The following is only needed for Credit Card ===============

     Work Phone: (....) ................  Home Phone:  (....) ................

     Card #: ...........................................  Expires: ...........

     Name of Cardholder: .....................................................

     Signature: ..............................................................

     Note: On-line registration via modem is available at the ABC BBS.  To
           order, dial (619) 436-3525.  Open 24 hrs/day, 300/1200/2400, N,8,1
     =========================================================================
        THANK YOU!!    Please allow up to two weeks for program delivery.













            -------------------  INSTANT MAILER  ----------------------

     Fold at the page break with the printing facing out.  Then fold letter
     style, exposing the mailing address and hiding your information.  If
     necessary, staple check to the mailer, then staple or tape sides and top.













     -------------------------------------------------------------------------





















     --------------------------------------------------------------------------
     From:                                                                Place
         ----------------------------
                                                                          Stamp 
         ----------------------------
                                                                          Here
         ----------------------------




                                       Courtney E. Krehbiel / ABC FUN KEYS

                                       199 N. El Camino Real,  Suite F175

     ABC41                             Encinitas,  CA     92024  
```
{% endraw %}

## FILE0844.TXT

{% raw %}
```
Disk No:  844                                                           
Disk Title: ABC Fun Keys, Educational For Children                      
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: ABC Fun Keys                                             
Author Version: 4.12                                                    
Author Registration: $15.00                                             
Special Requirements: CGA, EGA, VGA, or Hercules graphics.              
                                                                        
In this rapidly advancing technological world we live in, people are    
being introduced to the computer at younger and younger ages.  One      
program being used for this purpose is ABC FUN KEYS, an educational     
program which teaches the alphabet, numbers, and keyboard to children   
two to six years old.  The program has colorful pictures for each       
letter, and nursery rhyme melodies are played when the right key is     
pressed.                                                                
                                                                        
ABC FUN KEYS consists of four learning games structured around the      
alphabet.  An adult control panel and menu allow you to select the      
letters to be presented, the order of presentation, and many other game 
options.                                                                
                                                                        
In the first game, the letter appears along with a picture of something 
that begins with that letter, and the child must press the key          
associated with the letter.  Pressing the correct key causes the        
computer to play a song, otherwise a buzz sounds.                       
                                                                        
Game two is similar to the first game, except that the picture is       
gradually revealed at an increasing rate.  If the correct key is not    
quickly pressed, the picture disintegrates and another begins to take   
its place.                                                              
                                                                        
Game three, named Heaven and Mud, is a typing tutor for small children. 
Letters float in the ``air'' in the middle of the screen.  When the lett
key is pressed, the letter explodes into hearts that then float to      
heaven.  ``Unloved'' letters expire and sink into the mud.              
                                                                        
The fourth game is designed for very young children.  It displays the   
letter of any key pressed along with a random song.                     
                                                                        
ABC FUN KEYS is educational, yet designed to make learning as fun and   
stimulating as possible.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```



                           INSTANT MAILER REGISTRATION FORM
                          --------------------------------
              Please support quality shareware by registering your copy.
                  THANK YOU in advance for registering ABC FUN KEYS!
     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
     Make check                Courtney E. Krehbiel                 Order Form
     payable to:              199 N. El Camino Real
                                   Suite F175
                               Encinitas, CA 92024

     =========================================================================
     Qty           Description                                Unit    Extended
     -------------------------------------------------------------------------
              | INDIVIDUAL REGISTRATION                     |        |
              | ABC FUN KEYS Ver. 4.1                       | $15.00 | $
              |  (Latest version, manual on disk, number    |        |
              |   files, and complete set of alphabet       |        | U.S. $
              |   picture files.)  ** 5 1/4 inch floppy **  |        |  ONLY
     ---------|---------------------------------------------|--------|--------
              | COMMERCIAL / INSTITUTIONAL                  |        |
              | REGISTRATION PER SITE                       |        |
              | ABC FUN KEYS Ver. 4.1                       | $50.00 | $
              |  (Same package as above)                    |        |
     ---------|---------------------------------------------|--------|--------
              | 3 1/2 inch format instead of 5 1/4;   ADD   | $ 2.00 | $
     ---------|---------------------------------------------|--------|--------
                                                             Subtotal: $
                   (CA residents must add 7% sales tax)           Tax: $
                   (Non-U.S. residents please remit U.S. $)     Total: $

     Payment by:   ( ) Check    ( ) Money Order    ( ) Visa / MasterCard

     Name: ...................................................................
                   
     Addr: ...................................................................

     .........................................................................

     City: ...............................   State: ........  Zip: ...........

     ============ The following is only needed for Credit Card ===============

     Work Phone: (....) ................  Home Phone:  (....) ................

     Card #: ...........................................  Expires: ...........

     Name of Cardholder: .....................................................

     Signature: ..............................................................

     Note: On-line registration via modem is available at the ABC BBS.  To
           order, dial (619) 436-3525.  Open 24 hrs/day, 300/1200/2400, N,8,1
     =========================================================================
        THANK YOU!!    Please allow up to two weeks for program delivery.



            -------------------  INSTANT MAILER  ----------------------

     Fold  at the page  break with the  printing facing  out.  Then  fold letter
     style,  exposing  the mailing  address  and  hiding your  information.   If
     necessary, staple check to the mailer, then staple or tape sides and top.













     -------------------------------------------------------------------------





















     --------------------------------------------------------------------------
     From:                                                                Place
         ----------------------------
                                                                          Stamp 
         ----------------------------
                                                                          Here
         ----------------------------




                                       Courtney E. Krehbiel / ABC FUN KEYS

                                       199 N. El Camino Real,  Suite F175

     ABC41                             Encinitas,  CA     92024  






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0844

     Volume in drive A has no label
     Directory of A:\

    A        SPF      3473  11-24-89   4:12a
    ABC      CFG      1129  11-24-89   4:12a
    ABC      DOC     69125  11-24-89   4:12a
    ABC      EXE    121722  11-24-89   4:12a
    B        SPF      3686  11-24-89   4:12a
    C        SPF      3449  11-24-89   4:12a
    E        SPF      3575  11-24-89   4:12a
    GAME3    SCR      2215  11-24-89   4:12a
    H        SPF      4665  11-24-89   4:12a
    J        SPF      4539  11-24-89   4:12a
    MENU     SCR      8615  11-24-89   4:12a
    MUSIC    SNG      9880  11-24-89   4:12a
    O        SPF      4362  11-24-89   4:12a
    P        SPF      5252  11-24-89   4:12a
    R        SPF      4994  11-24-89   4:12a
    READ     ME       1884  11-24-89   4:12a
    REGISTER DOC      4332  11-24-89   4:12a
    S        SPF      4524  11-24-89   4:12a
    T        SPF      6607  11-24-89   4:12a
    U        SPF      5226  11-24-89   4:12a
    W        SPF      5348  11-24-89   4:12a
    WHATS    NEW      4516  11-24-89   4:12a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       652   1-01-80   3:13a
    FILE0844 TXT      3553   7-09-90   7:18p
           25 file(s)     287361 bytes
                           20480 bytes free
