---
layout: page
title: "PC-SIG Diskette Library (Disk #4090)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4090/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4090"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #4090 COMPUSTITCH  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Print the documentation, type:  COPY STITCH.DOC PRN  (press Enter)  ║
║                                                                         ║
║  To Start, type:  STITCH  (press Enter)                                 ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

                                CompuStitch 3.0

                               REGISTRATION FORM

                                                   DATE: ______________

        NAME:    ______________________________________________________

        STREET:  ______________________________________________________

        CITY:    _____________________  STATE: ____  ZIP CODE: ________

        COUNTRY: _______________________  TELEPHONE: (____)_____-______


        QTY            DESCRIPTION            UNIT PRICE    TOTAL PRICE

        ___  Registration and latest version    $20.00         $___.___
             on disk

        Please choose the disk type you would like to receive:
          __                        __
         |__| 5-1/4" DS/DD 360K    |__| 3-1/2" DS/DD 720K

        Registration includes:
           * All three versions (VGA, CGA, Tandy 1000) on disk
           * Notice of future updates by mail
           * Eligibility to order updates at a reduced price

        Where did you obtain CompuStitch? _____________________________
           (BBS, shareware distributor, a friend, etc.)

        Please make check or money order payable in U.S. funds to:

           John George, Jr.
           RD 3 Box 607
           Altoona, PA  16601-9413
           U.S.A.

        Thank you for your order.

        Your comments and suggestions are greatly appreciated.

```
{% endraw %}

## STITCH.DOC

{% raw %}
```






















                                CompuStitch 3.1

                                  User Manual

                                Released 9-12-92

                  Copyright (C) 1991, 1992 by Ascend Software

         CompuStitch                                            Page 1


                           DESCRIPTION OF COMPUSTITCH

            CompuStitch is a powerful, yet easy-to-use program for
         the creation and design of cross-stitch patterns.  With this
         program it is possible to create patterns which are 180 x 180
         in size in 142 colors on a VGA screen, 15 colors on a Tandy
         1000, or 3 colors on a CGA monitor.  CompuStitch supports full
         cross stitches, one-quarter stitches, backstitches and french
         knots.  This truly useful program contains the DMC number for
         each color available and prints a color list with your pattern
         to make shopping for floss easier.  Other features include:
         file merging, cut and paste, horizontal and vertical image
         flipping, rotation in 90, 180 and 270 degrees, and more!
         CompuStitch requires CGA or EGA for the three-color version,
         a Tandy 1000 for the 15-color version, or VGA for the 142-color
         version.  Other requirements are: DOS 3.0 or higher, 512K of
         RAM, and any printer which supports compressed printing (17
         CPI).  Microsoft mouse support is optional.

         FEATURES PLANNED FOR THE FUTURE:

            These items are planned to be added in the near future,
         depending on the response to this release:

            * PCX and GIF file importation
            * Support for higher resolution EGA and VGA


                                GETTING STARTED

            First select the disk you want to use.  Disk 1 contains
         the VGA version, disk 2 is the CGA version, and disk 3 is the
         Tandy 1000 version.  Type STITCH at the prompt to load the
         program.  One command-line parameter can be passed to the
         program on startup, and that parameter must be a pattern
         filename (.XST).  For example, to start the program and have
         it automatically load the CLIP_ART.XST file, type STITCH
         CLIP_ART at the prompt and press ENTER.


                                  EDITOR KEYS

         The following keystrokes are used in the editor:

            Arrow keys = Moves the cursor up, down, left, and right
               when using the grid and moves the highlight bar on menus
               and the file directory.

            Ctrl+Right = Scrolls the grid to the right.

         CompuStitch                                            Page 2


                            EDITOR KEYS, CONTINUED

            Ctrl+Left = Scrolls the grid to the left.

            PG UP = Scrolls the grid up.

            PG DN = Scrolls the grid down.

            Home = Moves the cursor to the first column.

            End = Moves the cursor to the last column.

            Space, Ins, Enter = Draws the current stitch type at the
               cursor in the current drawing color.

            Del = Erases the current stitch type at the cursor
               location.  (If backstitching is the current stitch
               type then backstitches will be deleted.)

            Alt+F = Activates the File menu.

            Alt+C = Activates the Color menu.

            Alt+S = Activates the Stitch menu.

            Alt+B = Activates the Block menu.

            Alt+O = Activates the Options menu.
               (Any options set here will automatically be saved
                for future sessions)

            Alt+H, F1 = Activates the Help screen.

            ESC = Closes menus when they are activated and selects
               the 'Cancel' option in dialog boxes.

            TAB = Toggles options when using dialog boxes.

            Alt+X = Exits CompuStitch.

            F2 = Saves the current editor workfile to disk.

            F3 = Loads a pattern from disk into the editor work area.

            F8 = Rotates the current stitch type.  This only works for
                 1/4 stitches and backstitches.

            F9 = Prints the pattern currently in the work area.

         CompuStitch                                            Page 3


                                 USING A MOUSE

            CompuStitch auto-detects if there is a mouse present when
         you start the program.  If there is, you will see a white
         arrow pointer on the screen.  If no arrow is present but
         there IS a mouse connected to your computer, then CompuStitch
         probably doesn't recognize it and will not use it.  With your
         mouse, you can activate any of the menus by clicking the left
         button on the menu bar, change stitch types by clicking the left
         button on the stitch icons along the right hand side of the
         screen, and scroll the grid any of the four directions by
         clicking the left button on the arrow icons.  The box icon is
         used to define a block for the functions listed on the block
         menu.  Stitches can be placed anywhere on the grid by pointing
         and clicking the left button.  The right button is used to
         duplicate the function of the F8 key, Rotate stitch type.


                           USING THE BLOCK FUNCTIONS

            The block functions provide most of the power and
         versatility to the program.  A block is simply a part of the
         whole work area which is defined to be manipulated.  The
         maximum size for a block is 70 x 40.  You may notice that
         before a block is defined, none of the block functions can be
         selected except for the first one, Define block.  You must
         first define a portion of the grid as a "work area".  When
         you select this, the program will guide you through two steps
         in defining a block.  The first step is to define the top-
         left corner by either moving the cursor there and pressing
         ENTER, or clicking the mouse at the desired location.  The
         second step is the define the bottom-right corner by the same
         method.  After the second step a box is drawn around the
         block and now it is defined.  You can now select any option
         on the block menu.  Please note that the horizontal flipping,
         vertical flipping, and rotate functions do not manipulate
         backstitches used for outlining.  After these functions are
         used, any backstitches in the block will be lost and must be
         re-entered.  Sometimes the block must also be placed at a
         desired location, such as with the Move and Merge functions.
         Again, the program will guide you through these steps.  With
         the Merge function, a new stitch file (.XST) will be loaded
         and you will be prompted to select a location for the
         transferred block image.


                                TECHNICAL INFO

            CompuStitch was written in Turbo Pascal 5.0 and requires
         MS-DOS 3.0 or higher, 512K RAM, VGA, EGA, CGA, or a Tandy
         1000, and a printer capable of 17 CPI.  Microsoft mouse
         support is optional.


                                CompuStitch 3.1

                               REGISTRATION FORM

                                                   DATE: ______________

        NAME:    ______________________________________________________

        STREET:  ______________________________________________________

        CITY:    _____________________  STATE: ____  ZIP CODE: ________

        COUNTRY: _______________________  TELEPHONE: (____)_____-______


        QTY            DESCRIPTION            UNIT PRICE    TOTAL PRICE

        ___  Registration and latest version    $20.00         $___.___
             on disk

        Please choose the disk type you would like to receive:
          __                        __
         |__| 5-1/4" DS/DD 360K    |__| 3-1/2" DS/DD 720K

        Registration includes:
           * All three versions (VGA, CGA, Tandy 1000) on disk
           * Notice of future updates by mail
           * Eligibility to order updates at a reduced price

        Where did you obtain CompuStitch? _____________________________
           (BBS, shareware distributor, a friend, etc.)

        Please make check or money order payable in U.S. funds to:

           John George, Jr.
           RD 3 Box 607
           Altoona, PA  16601-9413
           U.S.A.

        Thank you for your order.

        Your comments and suggestions are greatly appreciated.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4090

     Volume in drive A has no label
     Directory of A:\

    READ     ME       2656   9-12-92  12:00p
    REGISTER DOC      1443   9-12-92  12:00p
    STITCH   DOC      8936   9-12-92  12:00p
    STITCH   EXE    210208   9-12-92  12:00p
    CLIP_ART XST     58145   9-12-92  12:00p
    FILE_ID  DIZ       109   9-12-92  12:00p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847   9-24-93  11:13a
            8 file(s)     282375 bytes
                           35840 bytes free
