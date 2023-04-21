---
layout: page
title: "PC-SIG Diskette Library (Disk #511)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0511/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0511"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO SPRITES"

    Turbo Sprites and Animation is a series of utilities, library files
    and demo programs to create, maintain and animate sprites (user-
    defined graphics images) in the Turbo Pascal environment.  Both
    multi-page animation and xor animation are supported.  Three main
    parts:
    
    DESIGNER.COM is a sprite-designing utility which has an editor-like
    environment for creating sprites.  It also allows you to store them in
    tables of up to 24 sprites.  The utility will also generate code
    allowing you to incorporate sprites in your programs as typed
    constants.
    
    COMPOSER.COM is a screen and animation composing utility that will
    help in positioning the sprites for display.
    
    SPRITES.LIB is a library of display routines for sprites.  A number of
    demo programs have been included to be sure you understand how to use
    the sprite files.  Along with the demo programs, there are a number of
    sprite tables that have already been created.
    
    System Requirements: 256K, one disk drive and monochrome/graphics
    display; Turbo Pascal compiler.
    
    How to Start:  From the DOS prompt enter TYPE READTHIS.NOW and
    follow directions.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    DESIGNER COM  Sprite design utility
    DEMO?    TAB  Sprite table for DEMO.PAS programs (5 Files)
    DEMO?    PAS  Turbo Pascal source code of demo program (8 Files)
    SPRITES  LIB  Sprite definitions and driver routines
    COMPOSER DOC  Documentation for COMPOSER.COM  (formatted for printer)
    COMPOSER COM  Programming utility to load screen file and sprite tables
    DESIGNER DOC  Documentation for DESIGNER.COM  (formatted for printer)
    DESIGNER __2  Screen file for DESIGNER.COM
    DESIGNER __1  Screen file for DESIGNER.COM
    SAVESCRN COM  Utility to import PC Paint screens to Turbo Pascal program
    DRAGON   INC  Individual sprite converted to typed constant array
    SANTA    INC  Individual sprite converted to typed constant array
    ??????   SPR  Individual sprite for demo programs
    READTHIS NOW  Program overview
    SAVESCRN LIB  Library routines to save and load Turbo Pascal screens
    DESIGNER __0  Screen file for DESIGNER.COM
    DEMO?    COM  Compiled version of DEMO programs
    ANIMALS  TAB  Data file
    ADENDA   DOC  Notes on DESIGNER.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDENDA.DOC

{% raw %}
```


                     Addenda to Designer.Doc File
                   for this new version of Designer

               (***************************************)

                       DESIGNER.COM  version 2.5

                  (c) Donald L. Pavia  January 1987

               (***************************************)

          The newest version of DESIGNER on this disk incorporates
     a number of changes and additions. These include:

          - Support for pathnames up to 26 characters long

            ( X:\12345678\12345678.123 ) when saving/loading files.

          - Inclusion of a new "trail" mode of operation.

          - Extermination of some minor bugs. In one case, for in-
            stance, the cursor appeared in the 1-to-1 box as the
            alternate image just after a new table was loaded.

          - A new option which allows an entire table of sprites to
            be saved as an include file. In the previous version it
            was only possible to save single sprites in this manner.

          - This new version can be recognized easily by the addition
            of a new title screen.

          - Minor screen redesign


     -------------------------------------------------------------------

     NEW COMMANDS

                         SINGLE SPRITE SCREEN

          On the sprite design menu is a new command (R)Trail. When you
     press R the last used color will be painted in each square by simply
     moving the cursor, you need not press a color each time. The cursor
     will leave a "trail" of the active color. When trail is active it
     will be highlighted in red. Press R again when you wish to toggle it
     off. You may change the trailed color by simply selecting a new one
     (press 0 .. 3).

           You will find the screen has been rearranged slightly from
     what it was on the last version but, with the exception of the
     new trail command, all the old commands are still the same.



     -------------------------------------------------------------------











                                  -2-

                          SPRITE TABLE SCREEN

          It is now possible to save an entire table of sprites as an
     Ascii include file. The prompt (I)nc will now be found in the menu
     at the bottom of the Table Screen.

          (I)nc  When you press I you will receive the prompt:

                        Select/Name Each Sprite ? Y/N ?

             (NO)   If you answer NO then all the sprites in the table,
                    even unfilled spaces in the table, will be saved in
                    a long sequential include file of 24 sprites.
                    The next prompt will ask for a file name:

                        Name for sprite file :

                    With the NO option, each sprite will be named as
                    filename1,filename2, etc. up to filename.24. For
                    instance, if you give the filename TEST.INC for
                    your include file, the sprites in the include file
                    will then be called TEST1,TEST2,TEST3....TEST24.
                    If you give a path, it will be stripped. Thus, the
                    filename C:\SOME_DIR\TEST.INC would also give a
                    set of sprites named TEST1,TEST2,TEST3....TEST24.

             (YES)  If you answer YES then you will be given an oppor-
                    tunity to name each sprite in the table. You will
                    receive 24 prompts like:

                         Name for #1 :

                    Each sprite that you name will be saved in your new
                    include file. However, if you do not name a sprite,
                    that is, if you just press <Enter>, that sprite will
                    not be saved; it will be passed over.

                    After answering the 24 prompts with a name for each
                    (or pressing <Enter>) you will be asked for a name
                    for the new file:

                          Name for sprite file :

                     Only the sprites you have named will be saved in this
                     file.


     -----------------------------------------------------------------------














```
{% endraw %}

## COMPOSER.DOC

{% raw %}
```


                                 COMPOSER.DOC

                     TURBO PASCAL SPRITE ARRANGING UTILITY

     {   Requires : IBM Compatible Computer, PC or MS.DOS 2.xx, 256 k,  }
     {              and a CGA compatible color card.                    }

                     Copyrignt  1986   by Donald L. Pavia

          This is a rather unsophisticated utility that I created to do a
      very specific job.  It is presented here without apologies. If you
      can make use of it, so much the better.

          Composer.Doc allows you to load any screen you have saved to disk
      or to start with a blank screen (Med Res Graphics, 320 x 200, 4 color).
      You may then load a sprite table, choose a sprite from the table,
      move it around freely by use of the cursor keys. You may place it
      at any allowed postion on the screen. Once you have the location you
      desire, you may fix the sprite in that position and send a string to
      your printer that records : table name, sprite number, col and row.
      You may than choose another sprite from the table move it to a second
      desired position relative to the first one. Once you are sastisfied with
      the location, you may fix the position of the second sprite and send its
      location to the printer. A sprite that has been fixed may be erased by
      calling it up again, placing it directly over the undesired sprite, and
      then "fixing' it again. You may also load other sprite tables at will
      and use them for this same procedure.

          I devised the Composer utility to help me arrange sprites for
      drawing complicated chemical structures. With this utility it is quite
      easy to arrange even 10 - 20 sprites into a structure. An example may be
      found in Demo2.Pas.

          The utility should also be useful as a guide to arranging animation
      sequences which involve a number of sprites. The chemical animation
      sequence in Demo3 was invented with the help of this utility.

          You may load screens from PC Paint if you process them with the
      utility SaveScrn.Com which is also found on this distribution diskette.
      Screens from other Paint programs may be used if you use PC Paint's
      Screen Capture utility and store them in uncompressed form (16 kbytes).

          The following commands are available by pressing the indicated key:

      (R)ecord   Sends current coordinates of the active sprite to the printer
      (S)et      Fixes the active sprite at the current screen position - A
                   second fix will remove the sprite (xor).
      (C)hoose   Allows you to choose another sprite from the current table.
      (L)oad     Allows you to load a new sprite table.
      (W)rite    Saves the entire screen to disk so that you may come back to
                   work on it later.
      (+) Steps  When active the cursor moves sprites in increments of eight
                   pixels in both x and y directions (Default mode).
      (-) Steps  When active the cursor moves sprites in x increments of four
                   pixels (minimum for x) and y increments of one pixel.
      (X) Exit   Return to DOS, saves nothing.

          These commands are found in a menu line at the top of the screen:

                 (R)ec  (S)et  (C)h  (L)d  (W)rit  (+)/(-)  (X)

          At the bottom of the screen are coordinates of the current sprite.




                                        2

         When you first start the utility you will be asked three questions:

                Screen File ? :        If you wish to load a saved screen from
                                       disk,  enter its name.  If instead you
                                       press  <ENTER>  you will have a  blank
                                       screen to work with (except for menus).

                TableName ?   :        Enter the filename of the spritetable
                                       you would like to load.

                WhichSprite ? :        Enter the number of the sprite you want
                                       to begin with.

         While you are moving sprites around on the screen they are "Put" and
      you will see even their blank edges. However, to allow a subsequent
      erasure, when you (S)et them they are "xor'ed" onto the screen.
      In your own programs you can, of course, do this differently, but some
      choice had to be made here. The main function of this utility is to
      provide sprite coordinates not to actually compose the picture. That
      will be done in your code.


```
{% endraw %}

## DESIGNER.DOC

{% raw %}
```


                               DESIGNER.COM

                    TURBO PASCAL SPRITE AND SPRITE TABLE
                                  EDITOR

       { Requires : IBM Compatible Computer, PC or MS.DOS 2.xx, 256 k,   }
       {            and a CGA compatible color card.                     }

                            version 2.00 Feb 1986

        This disk contains  procedures, functions and a utility that allow
      the use of sprites and animation in Turbo Pascal programs.  I am re-
      leasing the disk to the Public Domain for distribution by User Groups
      or Bulletin Boards subject to the following stipulations:

      1) Any person may obtain a copy of the BASE FILES on this disk either
         through their local User's Group or Bulletin Board, or by sending
         me a blank, double-sided, double-density 5 1/4 inch floppy diskette
         along with a PRE-PAID, SELF-ADDRESSED floppy diskette mailer.

             send to  :       Donald L. Pavia
                              1488 Lahti Dr.
                              Bellingham, WA. 98226   USA

         Clubs may freely copy and distribute the diskette with the base files
         for a nominal distribution fee, not to exceed $10.

      2) This disk contains a .COM file version of the sprite editor/designer,
         a .COM file of a sprite composer, and sample routines showing how to
         use the sprite files generated by the utility program. You may freely
         use the sprite files and the <COMPILED CODE> for the driver routines
         (mostly from Sprites.inc) in any of your own programs. If you find
         regular use, a $10 donation would be greatly appreciated, or better
         yet, buy the source code (see below).

      3) I retain all rights to the SOURCE CODE of the two utilities and that
         of Sprites.inc,  and  I have not released that code  into the Public
         Domain. You may acquire a copy of the commented Turbo Pascal source
         code for the two utilities in one of the following ways:

            1) Send me a check for $20 ($15 plus S/H)     OR

            2) Send me a check for $15 and a blank double-sided, double-density
               5 1/4 inch floppy diskette along with a PRE-PAID, SELF-ADDRESSED
               floppy diskette mailer      OR

            3) From another individual if you send me a legitimizing check
               for $15.

         You may not obtain or distribute the source code except under the
         conditions stated above. Nor may unaltered functions and procedures
         from the source code, or from sprites.inc, be incorporated into other
         source code of your own which you distribute. You really don't re-
         quire the source code unless you wish to learn from it, or modify it
         to your own needs. It would, for instance, be quite possible to re-
         compile the source code with overlays so that it might run on a 128k
         machine. It would also be possible to alter the size of the sprites.

           SORRY ABOUT THE LEGALITIES  -  HOWEVER,  I DO WISH TO PROTECT
           MYSELF AND PERHAPS TO GAIN SOMETHING FROM MY TIME SPENT. YOUR
           COOPERATION WILL ENCOURAGE ME TO RELEASE  MORE OF MY PROGRAMS.
           I WOULD APPRECIATE HEARING OF ANY BUGS OR IMPROVEMENTS.



                                        2

         The following files will be found on this free distribution disk:

         {----------------------------------------------------------------}

           DESIGNER.COM   The Sprite designing utility which allows you to
                          create sprite arrays and store them in a table of
                          up to 24 sprites written to disk. Single sprites
                          may also be stored.

         {-----------------------------------------------------------------}

           DESIGNER.__1   These are necessary screen files for Designer.com
           DESIGNER.__2   and they must reside on the same disk drive.

         {-----------------------------------------------------------------}


           COMPOSER.COM   A programming utility that allows you to load a
                          saved screen file (or a blank screen) and a sprite
                          table, and to move the sprites around freely so as
                          to design an arrangement or an animation pathway.
                          Composer gives screen coordinates of the active
                          sprite, and you may write the positions to a
                          printer. This output can be used to write code.

         {------------------------------------------------------------------}

           SPRITES.LIB    These are the definitions and driver routines that
                          allow you to use sprites in your own programs. You
                          may not need them all. For a given program those
                          that are unused may be deleted.

         {------------------------------------------------------------------}

           DEMOx.PAS      A variety of sample programs that show how to do
                          multiple page animation (4 color graphics mode),
                          xor animation, zone-clearing animation and the
                          like. Most of these use external files of sprite
                          tables. There are eight demo programs.

         {------------------------------------------------------------------}

           DEMOx.TAB      These are 3072 byte sprite tables (24 sprites)
           ????????.TAB   which are stored on disk and used in the sample
                          programs.

         {------------------------------------------------------------------}

           ????????.SPR   These are 128 byte individual sprites stored on
                          disk. They are used in the demo programs.

         {------------------------------------------------------------------}

           ????????.INC   These are individual sprites that have been con-
                          verted to typed constant arrays that may be di-
                          rectly included in your code. Their sizes will
                          vary.

         {------------------------------------------------------------------}





                                        3

                                   THE PROGRAM

         The program loads immediately to the single sprite editor. There is
      also a sprite table editor which may be seen by pressing menu selection
      T for (T)able. You may return to the single sprite editor by pressing R
      for (R)eturn. I will explain each editor separately, the single sprite
      editor first.

     (* ******************************************************************* *)


      I. SINGLE SPRITE EDITOR/DESIGNER

         You will immediately see the sprite designing grid. It has dimensions
      of  24 pixels across  and  20 pixels down.   It designs sprites for the
      medium resolution 320 x 200 pixel 4 color graphics mode (GraphColorMode).
      The actual sized sprite is displayed in a box in the upper left-hand
      corner of the screen. The design grid is of course magnified.

         The following options are found on the main menu.

     {-----------------------------------------------------------------------}

      (N)ew        Erases the work grid and sets the sprite array to zero.
      (S)ave       Saves the sprite on the work grid to disk (128 byte file).
      (L)oad       Loads a saved sprite from a disk file into the work grid.
      (T)able      Changes over to the sprite table editor.
      (A)nim       Xor animates sprite in the work grid at bottom of screen.
      (B)ackgr     Changes background color for editor   (0 - 16).
      (C)olrs      Changes palette for the sprite editor (0 - 4).
      (D)imen      Dimensions sprite in grid by rows and columns.
      (I)nc        Generates include file code for defining sprites.
      (F)iles      Gives a file directory and access to file rename/erase.

      (X) Exit     Goodbye. Return to DOS.

      (0)          Sets a pixel to background color (blank or erased).
      (1)          Sets a pixel to green      (or  cyan    ).
      (2)          Sets a pixel to red        (or  magenta ).
      (3)          Sets a pixel to brown      (or  white   ).

      CURSOR KEYS  Move the cursor around the workgrid.


                         BRIEF EXPLANATIONS OF MENU SELECTIONS

                            (Press the Indicated Character)

     {-----------------------------------------------------------------------}

         A more detailed explanation of each of these options follows below.
      All commands are case insensitive. You may use either lower or upper
      case.

     {------------------------------------------------------------------------}










                                        4

      (N)ew    Pressing N causes both the workgrid and the sprite array to
               be erased. All work is lost and you start anew. However, New
               does not erase the sprite table that might be loaded in the
               TABLE EDITOR.

      (S)ave   Pressing S causes the current sprite (the one in the workgrid)
               to be saved to disk as a 128 byte file. This file contains a
               single sprite. It is my convention to name single-sprite files
               with the extension .SPR. You may abort this command by pressing
               <ENTER>.

      (L)oad   Pressing L will allow you to load a single-sprite file into the
               workgrid. You will be asked for the name of the file. The files
               Santa.spr, Dragon.spr, Zone1.spr and Zone2.spr can be found on
               the distribution disk. You may abort this command by pressing
               <ENTER>.

      (T)able  Pressing T will take you to the TABLE EDITOR. The current sprite
               in the workgrid will be taken along so that it may be loaded
               into the table. This current sprite will be seen at the center
               top of the sprite table screen.

      (A)nim   Pressing A will cause the sprite currently loaded in the work-
               grid to be xor animated at the bottom of the screen. This will
               allow you a rough idea of what your sprite will look like in an
               animated sequence.

      (B)ckgr  Pressing B will change the background color of the screen. You
               may step through all 16 possible colors. Keep in mind that the
               background color is not stored with the sprite when it is saved
               to disk, and in your programs you must set the background color
               you desire prior to display of the sprite.

      (C)olrs  Pressing C changes the palette used for the screen display. You
               may step through all four palettes (0..3). Again, keep in mind
               that the palette is not stored with the sprite when it is saved
               to disk; in your programs you must set the palette prior to the
               display of the sprite.

      (D)imen  Pressing D allows you to dimension the sprite. You will be
               prompted for the number of rows and columns which the sprite
               occupies. This is done so that display procedure will know how
               many lines and columns to write to the screen. This procedure
               does not waste time writing the unused portion of the sprite.
               A column is one byte wide (4 pixels) and you will see tick
               marks at the top of the grid. The columns are numbered 0 - 5.
               The row dimension is HALF of the number of rows seen on the
               workgrid (odd and even lines are stored separately in the
               sprite array). The rows may be seen as tick marks along the left
               hand edge of the work grid. The rows are numbered 0 - 9. If
               you do not follow this, you may obtain the correct dimensions
               by placing the cursor at the lower right hand corner of the
               sprite. The correct dimensions will appear as the first set of
               numbers at the lower left hand corner of the screen ( row and
               col ). The second set of numbers tell you the current dimen-
               sions of the sprite.

      (I)nc    Pressing I allows you to convert the sprite which is current-
               ly loaded into the work grid to an include file. The include
               file redefines the sprite as a typed constant. This typed
               constant may be $I included in your code at compile time or
               may be copied directly into your code file. See Demo8.


                                        5


      (F)iles  Pressing F will give you a directory of files on the logged
               disk drive. You may also delete or rename files once the dir-
               ectory is displayed. For the convenience of Pascal programmers
               files with extensions .PAS, .BAK, .COM, .EXE, and .SYS are not
               displayed.

      (X) Exit  Exit to DOS.


     (* ******************************************************************* *)


      II. TABLE EDITOR

         The Table editor allows creation of a table of up to 24 sprites. This
      table may be saved to disk and a 3072 byte file.


         The following options are found on the table editor screen:

     {-----------------------------------------------------------------------}

                 (L)oad / (S)ave          (E)nter / (C)hoose
                      Table                     Sprite


                    (R)eturn       (N)ew      (F)rameSeq


                       Brief Summary of Table Commands
                           ( press indicated key )

     {------------------------------------------------------------------------}

          A more detailed description of each one follows.



      (L)oad Table  Reads a sprite table from disk. You will be prompted for
                    a name. It is my convention to name all sprite tables with
                    with the extension .TAB. You may abort this command by
                    pressing <ENTER>.


      (S)ave Table  Writes the  currently active sprite table  to disk as a
                    3072 byte file. It is my convention to name sprite tables
                    with the extension .TAB. You may abort this command by
                    pressing <ENTER>.

      (N)ew         Clears the currently loaded table. All work is lost if it
                    hasn't been previously saved. The currently active sprite
                    is not lost. It may be erased by choosing a blank table
                    entry (see (C)hoose below).


      When you enter the table editor the currently active sprite is displayed
      at the top center of the screen. If you return to the sprite editor this
      sprite will be re-loaded into the work grid.  You may load this sprite
      into the sprite table by pressing E.




                                        6

      (E)nter       When you press E the currently active sprite will be
                    entered into the sprite table. (This will be either the
                    one that was loaded on the work grid or a new one if you
                    used (C)hoose).  You will be asked if it has been
                    dimensioned and which table position you wish to enter
                    it into. If you respond that it has not been dimensioned
                    you will be given an opportunity to dimension it.
                    You may abort this command by pressing <ENTER> after you
                    respond to the dimensioning question.

      (C)hoose      When you press C you may choose a new active sprite from
                    the sprite table.  You will be asked  which number  to
                    choose.  When you select a new sprite it will be displayed
                    immediately at the top center of the screen. When you
                    return to the sprite editor, the newly chosen sprite will
                    be loaded into the work grid.

      (R)eturn      pressing R returns you to the sprite editor. If you have
                    chosen a new sprite from the sprite table this will take
                    a few moments to be completed EVEN IF A BLANK TABLE ENTRY
                    WAS CHOSEN, wait for the cursor. If you have not chosen a
                    new sprite return will be immediate.

      (F)rameSeq    This command allows you to check an animation sequence.
                    You may display any range of sprites from the sprite table
                    in sequence. The sequence must be a continuous one, but may
                    involve any start and stop point in the table. You may
                    display this sequence at a fixed location by setting step
                    to zero, or simulate linear motion by setting step to 4,8
                    or 12 pixels. You may also set a delay between each stage
                    of the animation. Try a delay of about 75. If you display
                    too rapidly the image will appear to be ghostly and to
                    flicker. The eye needs a little time to grasp the image.
                    You will be prompted for Start, Stop, Step and Delay.

      Erasing a Single Sprite

          You may erase a single sprite entry in the table by choosing a
      blank entry in the table with (C)hoose and then entering it with
      (E)nter into the position you wish to erase. Alternatively, you may
      return to the sprite editor and clear the work grid with (N)ew. The
      active sprite will then be a blank one. Return to the table and
      enter the blank whereever desired.

      Designing Animation

          You may notice that the actual-size sprite image in the upper left
      had corner of the sprite editor screen blinks as you move the cursor.
      This is intentional. If you go to the sprite table and load an image,
      when you return to the sprite editor the chosen sprite will be display-
      ed. Now make changes in the sprite on the work grid. As you do so the
      actual-size sprite will toggle between the originally loaded image and
      the one now under design. This really helps when designing successive
      frames for an animation sequence. Note that each sprite must be loaded
      into the sprite table and then chosen with (C)hoose in order for this
      feature to work. You cannot go to the sprite table, enter the sprite,
      and return to the editor to design a new frame. You must (C)hoose the
      sprite you have just entered before returning to the sprite editor.
          Of course once you have a sequence of sprites loaded into the sprite
      table you may use (F)rameSeq to see the actual animation.


```
{% endraw %}

## FILES511.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  511  TURBO SPRITES AND ANIMATION                            v1.2
---------------------------------------------------------------------------
Turbo Sprites and Animation is a series of utilities, library files and demo
programs to create, maintain and animate sprites (user defined graphics
images) in the Turbo Pascal environment.  It is an excellent program for
exploring the world of animation using Turbo Pascal.
 
DESIGNER COM  Sprite design utility (version 2.5, Jan 1987)
DESIGNER __0  Screen file for DESIGNER.COM
DESIGNER __1  Screen file for DESIGNER.COM
DESIGNER __2  Screen file for DESIGNER.COM
DESIGNER DOC  Documentation for DESIGNER.COM  (formatted for printer)
ADDENDA  DOC  Additions to documentation for new version 2.5
COMPOSER COM  Programming utility to load screen file and sprite tables
COMPOSER DOC  Documentation for COMPOSER.COM  (formatted for printer)
SPRITES  LIB  Sprite definitions and driver routines
DEMO?    PAS  Turbo Pascal source code of demo program (8 Files)
DEMO?    COM  Compiled versions of some of demos (4 files)
DEMO?    TAB  Sprite table for DEMO.PAS programs (5 Files)
??????   SPR  Individual sprite for demo programs
SANTA    INC  Individual sprite converted to typed constant array
DRAGON   INC  Individual sprite converted to typed constant array
SAVESCRN COM  Utility to import PC Paint screens to Turbo Pascal programs
SAVESCRN LIB  Library routines to save and load Turbo Pascal screens
READTHIS NOW  Program overview
 
PC-SIG
1030D East Duane Ave
Sunnyvale, CA  94086
(408) 730-9291
(c) copyright 1987 PC-SIG
```
{% endraw %}

## GO.TXT

{% raw %}
```
TURBO SPRITES AND ANIMATION

Before attempting to use these programs, you should study the documentation
thoroughly.

This batch program will print the documentation files on your system printer.

If you don't wish to print the files at this time, press the <CTRL BREAK> key
combination now.  And answer Y to "Terminate Batch Job (Y/N)"

If you do wish to print the files at this time, turn your printer on and set
it to its TOP OF FORM position.


 
 
PC-SIG (Software Interest Group)
1030 East Duane Ave, Suite D
Sunnyvale, CA  94086
(408) 730-9291
 
 
 
```
{% endraw %}

## NOTES511.TXT

{% raw %}
```
Program name:           Turbo Sprites and Animation (v1)
 
Author name:            Donald L. Pavia
Address:                1488 Lahti Drive
                        Bellingham, WA 98226
Telephone Number:       none given
 
Suggested Donation:     $10 for the programs supplied on the disk.  For an 
                        additional $20, you get the commented source code for
                        the utility programs.

Description:

Turbo Sprites and Animation is one of the most interesting and practical 
animated graphics creation programs the writer has seen.  It will be useful, 
instructive and entertaining for any Turbo Pascal programmer with even a 
casual interest in learning how to create animated graphics.  It is well 
documented, liberally commented and is supplied with source coded demo 
programs that demonstrate numerous techniques for animation.  On a scale of 
10, this program is a solid 9.  

The program consists of several components which make up a complete tutorial 
and development environment:  
    
    A sprite designing utility that allows you to create sprite arrays and 
    store them in tables for later use;  
    
    A utility that allows you to load an entire screen and sprite table, then 
    freely move the sprites around the screen to design an arrangement or 
    animation pathway;  
    
    A library containing the definitions and driver routines that allow you to 
    use sprites in your own programs;  
    
    Various sprite tables and individual sprites used in the demo programs;  
    
    Eight liberally commented demo programs which show you how to achieve 
    different animation effects with sprites.  

It also includes a utility to import PC Paint screens to Turbo Pascal 
programs, and a library file of routines to save and load Turbo Pascal screens.

The program requires Turbo Pascal, an IBM (or compatible) computer, PC or MS 
DOS V2.00 (or greater), 256K bytes of RAM memory, 1 disk drive, an IBM (or 
compatible) Color Graphics Adapter, and an RGB color monitor.  The program 
will not work with either a monochrome or color composite monitor.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0511

     Volume in drive A has no label
     Directory of A:\

    ADDENDA  DOC      4396   1-11-87   9:26p
    ANIMALS  TAB      3072  12-18-86   7:56p
    COMPOSER COM     15954  11-24-86  12:04p
    COMPOSER DOC      4719   2-16-86  12:13p
    DEMO1    COM     15370  12-18-86   8:04p
    DEMO1    PAS      5563   2-15-86   8:56p
    DEMO1    TAB      3072   1-09-86   3:59a
    DEMO2    PAS      2627   2-15-86   8:56p
    DEMO2    TAB      3072  12-12-85   6:13p
    DEMO3    COM     17323  12-18-86   8:05p
    DEMO3    PAS      5715   2-15-86   8:57p
    DEMO3    TAB      3072  12-12-85  11:10p
    DEMO4    COM     16797  12-18-86   8:06p
    DEMO4    PAS      5963   2-15-86   8:57p
    DEMO4    TAB      3072   2-15-86   6:08p
    DEMO5    PAS      2085   2-15-86   8:58p
    DEMO5    TAB      3072   2-11-86   4:15a
    DEMO6    COM     16842  12-18-86   8:07p
    DEMO6    PAS     10781   2-15-86   8:59p
    DEMO7    PAS      2985   2-15-86   8:59p
    DEMO8    PAS      3478   2-15-86   9:00p
    DESIGNER COM     34101   1-11-87   9:23p
    DESIGNER DOC     19404   2-15-86   5:47p
    DESIGNER __0     16384  11-25-86  11:51a
    DESIGNER __1     16384   1-06-87   6:38a
    DESIGNER __2     16384  11-22-86  10:37p
    DRAGON   INC       466   2-15-86   4:37p
    DRAGON   SPR       128  12-08-85   2:39p
    FILES511 TXT      1682   1-29-87   7:22p
    GO       BAT       153   1-05-87   3:41p
    GO       TXT       581   1-06-87  12:48a
    NOTES511 TXT      2176   4-29-86   6:54a
    READTHIS NOW      2038   2-16-86   2:01p
    SANTA    INC       509   2-15-86   5:14p
    SANTA    SPR       128  12-18-85  12:21a
    SAVESCRN COM     12337   9-26-85   9:58p
    SAVESCRN LIB      3487   2-15-86  11:34p
    SPRITES  LIB     12926   2-13-86   2:10p
    ZONE1    SPR       128   2-13-86   5:59p
    ZONE2    SPR       128   2-13-86   6:01p
           40 file(s)     288554 bytes
                           16384 bytes free
