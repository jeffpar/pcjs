---
layout: page
title: "PC-SIG Diskette Library (Disk #3200)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3200/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3200"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
            Welcome to WARSHIPS version 2.1   09/25/92

     This README file contains important, last minute information
     in addition to WARSHIPS.DOC.

     For those of you who tried WARSHIPS 1.0, this is a much
     improved version.  Support for the keyboard and joystick
     have been added.  There are now three levels of play.  And,
     we added background music via the PC speaker.

     For those of you installing from floppy there is now an
     installation program (install.com) to help you.

     This program has been tested on a 25/20MH 386 (VGA) running
     MSDOS 3.3 and PCDOS 2.1, a 16/8MH 386SX (VGA) running MSDOS
     3.3, a 12/6MH 286 (VGA) running MSDOS 3.1, and a 12/6MH 286
     (EGA) running DOS 3.2.  Please inform us of any problems
     with other combinations. 

     We suggest you load this game to your hard disk.  The loading
     of the images from floppy can take awhile.  However, loading
     the game to your hard disk is not required.

     We are extremely interested in your constructive comments
     and suggestions.  Feedback from users, even negative
     feedback, helps us to improve our game products.  We thank
     you for your interest in TAG SOFTWARE products.

      Please send your comments or suggestions to :
                         ..........................
                         :                        :
                         :  TAG SOFTWARE          :
                         :  5909 Shepherd Lane    :
                         :  Seabrook, MD 20706    :
                         :........................:


     INSTALLATION

     TO FLOPPY DISK:

     WARSHIPS should be runable directly from the floppy disk.
     However, we suggest that you make a backup copy.

     1) Insert the floppy disk containing WARSHIPS into a floppy
        disk drive.  If this drive is the "B" drive then use "B:"
        instead of "A:" in the remaining procedures. 

     2) At the DOS prompt type:

          A:
          WARSHIPS

     3) As the game begins, you should hear "Anchors Aweigh" and
        see an opening screen with a menu asking you to select an
        input device.  Input the corresponding number of the
        device you want to use to play the game (1 for mouse, 2
        for joystick, or 3 for keyboard).  When the game board is
        displayed, use your selected input device to click on
        PLAY to start a game. 

     TO HARD DISK:

     TAG SOFTWARE has included an installation program to ease
     your installation of WARSHIPS to hard disk.  However, a disk
     vendor may have replaced TAG SOFTWARE's supplied
     installation program with their own.  These procedures
     assume the use of the TAG SOFTWARE installation program. If
     a disk vendor has replaced TAG SOFTWARE's supplied
     installation program, follow the directions supplied in the
     vendor's installation program. 

     1) Insert the floppy disk containing WARSHIPS into the
        floppy disk drive.  If this drive is the "B" drive, use
        "B:" instead of "A:" in the remaining procedures. 

     2) At the DOS prompt type:

          A:
          INSTALL

     3) Follow the directions given by the installation program.
        This installation program will wish to install WARSHIPS
        into a directory on your hard disk.  This directory can
        already exist, or the installation program will create it
        as necessary.

     4) Change to the directory that you installed WARSHIPS into
        in the step above.  To start the game, type:

          WARSHIPS

        You should hear "Anchors Aweigh" as the game begins
        execution and see an opening screen with a menu asking
        you to select an input device.  Input the corresponding
        number of the device you want to use to play the game (1
        for mouse, 2 for joystick, or 3 for keyboard).  When the
        game board is displayed, use your selected input device
        to click on PLAY to start a game. 

     QUICK INSTALLATION

     1) Copy all the files from the floppy to a directory on your
        hard disk.  It is important that WARSHIPS.EXE,
        WARSHIPS.IDB, and WARSHIPS.OPT be kept together.  Print
        out the WARSHIPS.DOC and REGISTER.DOC files.  Remember
        that this program is shareware.  If you continue to use
        it, you need to register it.

     2) Change to the directory that you copied WARSHIPS to in
        the step above.  Type WARSHIPS to start the game. 

     WARSHIPS starts with the following option settings:

                Sound:  ON
                Level:  Expert
                First:  Player
                Place:  Random
                Device: Select

     See WARSHIPS.DOC for directions on how to change these
     options. 

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
       /--------------------------------------------------\
       |   REGISTRATION FORM FOR TAG SOFTWARE SHAREWARE   |
       \--------------------------------------------------/

   Registration benefits: You will receive the latest registered
   version of this program as described in the documentation file
   and more FREE high quality shareware programs from TAG
   SOFTWARE.  Technical support, a printed, manual, a strategy
   guide, and notification of updates and new product
   announcements are added benefits. 

    Your Name: _________________________________________________

    Address:   _________________________________________________

    City/State:_________________________________________________
    Zip/Country

    Are you a New TAG SOFTWARE customer? Yes [ ]   No [ ]

    Where did you get this program from ?  _____________________

    Specify floppy disk type :
    [ ] 5 1/4" 360K , [ ] 5 1/4" 1.2Mb ,
    [ ] 3 1/2" 720K , [ ] 3 1/2" 1.4Mb

    Describe your system (check all that apply).
    [ ] CGA   [ ] Hercules  [ ] EGA     [ ] MCGA     [ ] VGA
    [ ] SVGA  [ ] Color Monitor         [ ] Monochrome Monitor
    [ ] Mouse [ ] Joystick  [ ] Modem   [ ] Printer  [ ] Sound Card
    [ ] 8088  [ ] 286       [ ] 386SX   [ ] 386      [ ] 486
    [ ] 4.77  [ ] 6/8/10MH  [ ] 16/20MH [ ] 25/33MH  [ ] 33/+

    Send _______ copies of Warships 2.1     $15 each     _______

                    (MD Residents only) SALES TAX 5%     _______

                             (foreign only) SHIPPING     _______

                                               TOTAL   _________   

    ( We pay Shipping to US and Canadian addresses.  Foreign
      customers, please add $2/order for shipping and handling. )

    [ ] Check enclosed   [ ] Money order enclosed

    Make checks payable to "TAG SOFTWARE" in U.S. dollars only!
    Thank you. 

                      ..........................
                      :  TAG SOFTWARE          :
          Send To:    :  5909 Shepherd Lane    :
                      :  Seabrook, MD 20706    :
                      :                  U.S.A.:
                      :........................:


```
{% endraw %}

## WARSHIPS.DOC

{% raw %}
```
          /------------\
          |    TAG     |  Presents
          |  SOFTWARE  |     . . . . WARSHIPS 2.1
          \------------/
     
     WARSHIPS 2.1 is a computerized version of the "Classic"
     Battleship(TM) game. One player competes with the computer
     in a race to see which fleet of ships is sunk first. There
     are many versions of a battleship-type game available in the
     shareware market, but WARSHIPS has some quality features
     which sets it apart from the rest.  First, WARSHIPS 2.1 was
     written for the "Battleships" purist who wants to play the
     game as it was originally conceived.  The player and the PC
     opponent each have a fleet of five different ships.  The
     object is simply to locate and sink the opponent's fleet
     while you are still afloat. If you prefer a game with
     additional obstacles or traps, WARSHIPS 2.1 is not for you.

     Second, WARSHIPS 2.1 features EGA/VGA graphics, providing a
     clearer, more distinct display than is possible with CGA
     graphics.

     Third, WARSHIPS 2.1 plays introductory and victory music
     through the PC speaker as well as producing sound effects
     during game play. 

     Fourth, WARSHIPS 2.1 features a mouse-like interface unique
     to TAG SOFTWARE products. Three input devices (mouse,
     joystick, and keyboard) are supported, yet each uses the
     "point and click" style of a mouse.  You don't need to waste
     time typing "A1" or "B7", just move the pointer to the
     target and click.  This simplicity of operation makes the
     game enjoyable for everyone aged 3 to 100.

     Finally, WARSHIPS 2.1 requires an IBM PC or compatible, an
     EGA/VGA graphics card, and only 256K of available RAM.
     
     WARSHIPS 2.1 is distributed as Shareware: if you like the
     program, please become a registered user.  Print or list the
     file REGISTER.DOC for registration benefits and more
     information. Distribution of this shareware program is
     encouraged. 

     The WARSHIPS 2.1 source code, object code, executables and
     manuals on paper or on disk, are (C) COPYRIGHT 1991-1992 by
     Carole & Allen Grider. 
     
     DISCLAIMER
     
     This program is provided "AS IS" and it is WITHOUT warranty
     of any kind that it will work correctly in any or all
     situations. No liability shall be assumed for direct or
     consequential damage caused by the use of this software.
     The only claim TAG SOFTWARE makes is that there are no
     intentional bugs or fatal errors in any original copy of
     the program that you receive directly from TAG SOFTWARE. 

     MANIFEST
     
         WARSHIPS.DOC . . . Text, Documentation (This file)
         WARSHIPS.EXE . . . Warships Game
         WARSHIPS.OPT . . . Options file
         WARSHIPS.IDB . . . Graphics file
         README.DOC . . . . Text, Last minute information
         REGISTER.DOC . . . Text, Registration order form
         INSTALL.COM . . .  Installation from floppy disk

     DISTRIBUTION
     
     Distribution of this program is encouraged as long as the
     following Shareware principles are observed:

          All of the above-mentioned 7 files should be
          included in the distributed disk and should not be
          altered in any way. TAG SOFTWARE authorizes the
          distribution ONLY of the 7 above-mentioned files.
     
     If archiving this program for BBS use or library use,
     please include all files and use the name: WARSHP21, ( ie:
     WARSHP21.ARC or WARSHP21.ZIP ).  This will provide
     consistency for future updates. 

     Note Disk and Rack Vendors: Please contact TAG SOFTWARE for
     the latest version of this and all our programs.  Disk and
     Rack Vendors are allowed to replace INSTALL.COM with their
     own installation package.  Also contact us if you require
     customization.  We will consider non-exclusive registration
     handling agreements.

     SYSTEM REQUIREMENTS AND OPTIONS
     
     COMPUTERS:   IBM/PC/XT/AT or compatibles.  256K free memory.
     DISPLAY:     EGA(128K), EGA(256K), VGA.
                  A Mouse is recommended but not required.
     
     OPERATION
     
     The program will detect your display card and if it is
     unacceptable, will display an appropriate message and exit.
     It will also sense if there is a mouse, joystick or keyboard
     attached by checking for and with the mouse driver, polling
     the joystick, and defaulting to a keyboard. If you wish to
     use a mouse with WARSHIPS 2.1, you must install your mouse
     driver before running WARSHIPS 2.1. 

     WARSHIPS 2.1 stores your options in WARSHIPS.OPT. WARSHIPS's
     graphics are stored in the WARSHIPS.IDB file.  It finds
     these files using your environment variable.  Therefore, you
     can place WARSHIPS 2.1 (with the WARSHIPS.OPT and
     WARSHIPS.IDB files) in any directory in your PATH
     environment variable and WARSHIPS 2.1 will find them. 
     
     When the program finds your display card acceptable, it will
     set itself up.  You will see a title screen and possibly a
     menu of input devices.  You will get this menu of input
     devices on the first usage of WARSHIPS 2.1.  Select the
     input device you want to use to play the game by typing the
     number of the device. If WARSHIPS is unable to initialize
     the device, an error message will be displayed and you will
     be presented with the menu of input devices again. When the
     selected input device (either by menu selection or by Option
     specification) initializes, you will be requested to hit a
     button (for mouses and joysticks) or a space (for keyboards). 

     When the program finds your display card acceptable and has
     initialized an input device, you will be presented with the
     play screen.  From this point on (until you exit the game)
     input will only be accepted from the selected input device.
     For mouses, either the LEFT or RIGHT mouse buttons can be
     used on all clickable areas.  We wanted no left- or
     right-handed mouse bias in this program.  For joysticks,
     either button can be used on all clickable areas. Finally,
     for keyboard usage, the SPACE, ENTER, and the 5 key can be
     used on all clickable areas. 

     We standardized on a mouse type interface for all three
     supported input devices.  This means that you will be
     presented with an arrow on the screen (called a pointer) and
     you use the input device to move the pointer around.  For a
     mouse this type of operation is obvious. For joystick usage,
     the operation is very similar to a mouse and if you
     calibrate your joystick properly during initialization you
     will have a good amount of proportional control of both
     speed and direction of the pointer. 

     Keyboard operation is slightly different.  Hitting a
     direction key will cause the pointer to move in that
     direction. Hitting the same direction key again will cause
     the arrow to stop.  There are eight direction keys. Keys 8,
     4, 6, and 2 are the Up, Left, Right, and Down arrow keys.
     Note that the extra arrow keys on Extended-101 keyboards
     work properly also.  The 7, 9, 1, and 3 keys move you on
     diagonals. The 7 key (HOME) moves you up and left. The 9 key
     (PGUP) moves you up and right.  The 1 key (END) moves you
     down and left.  The 3 key (PGDN) moves you down and right.
     As mentioned above, the 5, SPACE, and ENTER keys are the
     button keys.  These are to be used to select a clickable
     area.  The whole idea of this setup is that you can place
     your hand on the numeric keypad and totally control the
     game. 
     
     Whether you use a mouse, joystick, or keyboard, the
     operation of the game is similar.  There will be areas of
     the screen that are clickable. In the following
     documentation, we will refer to buttons. Buttons are well
     defined clickable areas that somehow affect the operation of
     the program.  Basic operation requires you to move the
     pointer to the button and hit a mouse button, joystick
     button, or a button key to invoke its operation. 

     When the play screen is displayed, you will see four buttons
     across the top of the screen.  These buttons are labeled
     INFO, PLAY, OPTIONS, and QUIT.  The INFO button gives you
     information about the program and how to register.  The PLAY
     button allows you to start a game.  The OPTIONS button
     allows you to set the game options to your preferences.
     Finally, the QUIT button allows you to exit the program. 
     
     /------\
     | INFO |
     \------/
     
     Clicking on the INFO button will cause an informative window
     to be displayed.  While this window is displayed, clicking
     on the OK button within this window will cause the window to
     be removed (and play resumed). 

     /------\
     | PLAY |
     \------/
     
     Clicking on the PLAY button will start a game of WARSHIPS
     2.1 with your current option settings (see the OPTIONS
     button below). Your ship board will be displayed on the left
     and your hit board will be displayed on the right.  (Your
     ship board shows the locations of your fleet of ships, while
     your hit board shows the results of your shots.)
     
     If you have selected MANUAL ship placement, you will be
     presented with a menu of ships to be placed on your ship
     board. First, click on a ship in the menu.  Then click on a
     ship board location.  Finally, indicate the direction (up,
     down, left, or right) by clicking on one of the squares
     immediately surrounding that location. 
     
     At any time during this process you can click on the RANDOM
     button to place any remaining ships randomly.  If you
     generally prefer to have all of your ships placed randomly,
     you may want to set the placement option to random (see the
     OPTIONS button below). 

     Once all of your ships have been placed, the game begins.
     Whether the player or the computer starts first is
     determined by the setting of the FIRST option (see the
     OPTIONS button below).  When it is your turn, you indicate
     your shot by clicking on a square on your hit board (the
     right board).  A red peg indicates a hit.  A white peg
     indicates a miss.  When you hit all of a ship it will
     appear. You can also keep track of your progress by
     regularly glancing at the status window. This window tracks
     which ships have been sunk by each player and the number of
     games won/lost in this session. 
     
     The object of the game is to find and sink all of the
     computer's ships before it sinks yours.  There are five
     types of ships -- each player starts with one of each.
     These ships include a Carrier (5 shots), a Battleship (4
     shots), a Submarine (3 shots), a Destroyer (3 shots), and a
     PT Boat (2 shots). 

     /---------\
     | OPTIONS |
     \---------/
     
     Clicking on the OPTIONS button will cause the options menu
     to be displayed.  Clicking on an option will cause it to
     change. Keep clicking until you get the value you want. 
     
     There are two buttons on this menu, OK and CANCEL.  Clicking
     on the CANCEL button will cancel the options menu with no
     changes to your game options.  Clicking on the OK button
     will cause the options currently displayed to be updated to
     disk and affect the operation of the game.  These options
     will carry over from one invocation to another, until
     changed. 

     There are currently five options.  They are SOUND, LEVEL,
     FIRST, PLACE, and DEVICE.  The SOUND option has two values,
     ON or OFF.  When set to ON, there will be interesting sound
     effects and background music.  When set to OFF the game will
     be silent. 

     The LEVEL option has three values, NOVICE, ADVANCED, or
     EXPERT.  A setting of NOVICE uses a very simple strategy to
     find ships.  A setting of ADVANCED uses a modified version
     of the strategy used in WARSHIPS 1.0.  And, a setting of
     EXPERT uses a new highly optimized strategy. 

     The FIRST option has two values, COMPUTER or PLAYER.  This
     option controls who goes first when a game is started. 

     The option PLACE, has two values, MANUAL or RANDOM.  A value
     of MANUAL allows the player to place his ships at the
     beginning of a game.  A value of RANDOM causes the player's
     ships to be randomly placed at the beginning of a game. 

     Finally, the DEVICE option allows the user to select the
     preferred input device.  The settings are MOUSE, JOYSTICK,
     KEYBOARD, or SELECT. A setting of MOUSE, JOYSTICK, or
     KEYBOARD will cause that device to be used to play the game
     if one can be initialized.  If the device cannot be
     initialized or if this option is set to SELECT, a menu of
     input devices will be presented on startup of the game.
     However, changes to this option will only take effect when
     the program is started again.

     /------\
     | QUIT |
     \------/
     
     Finally, clicking on the QUIT button allows you to exit the
     game. There are two buttons in this window.  The CANCEL
     button allows you to resume the game.  The OK button will
     exit the program and return you to DOS. 
     
     DOCUMENTATION AND ACKNOWLEDGEMENTS
     
     If you have a printer, please print out and read the
     documentation file WARSHIPS.DOC.  We would like to thank our
     friends for their suggestions and comments.  In particular,
     we would like to thank Paul Barbieri and Ron Turner for
     their time and patience. 

     FUTURE ENHANCEMENTS
     
     I would like to add a salvo option, but need a reference to
     it outside of Milton Bradley's Battleship(TM) board game.
     If some kind person can find this for me, I would really
     appreciate it. 

     We have been working on Adlib/SoundBlaster support but it
     is not ready for this release.  Expect it in future
     versions.  In reality, we cannot continue to expend large
     amounts of time and effort on future versions on WARSHIPS
     unless more people register. 

     REGISTRATION  BENEFITS
     
     WARSHIPS 2.1 is distributed as Shareware: if you like the
     program, please become a registered user by sending $15 to
     TAG SOFTWARE.  List or print the file REGISTER.DOC for more
     information. 
     
      - You will receive the latest version of this program.
     
      - A printed manual and strategy guide.

      - Technical Support.  Please write TAG SOFTWARE.
     
      - Registered users receive more free shareware from
        TAG SOFTWARE. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3200

     Volume in drive A has no label
     Directory of A:\

    WARSHIPS EXE    138970   9-27-92   1:21p
    WARSHIPS OPT        12  10-20-92  12:24p
    WARSHIPS IDB     31412   5-27-92  10:33p
    WARSHIPS DOC     15121   9-24-92   7:57p
    README   DOC      4905   9-24-92  10:42p
    REGISTER DOC      2223   9-24-92  10:26p
    INSTALL  COM     20314   9-27-92   1:42p
    GO       BAT         7  10-20-92  12:50p
            8 file(s)     212964 bytes
                          105472 bytes free
