---
layout: page
title: "PC-SIG Diskette Library (Disk #2529)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2529/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2529"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2529.TXT

{% raw %}
```
Disk No: 2529                                                           
Disk Title: Qfont                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Qfont                                                    
Author Version: 1.5B                                                    
Author Registration: $80.00                                             
Special Requirements: 512K RAM, and a Laserjet printer. A mouse is recom
                                                                        
LaserJet users, prepare to be amazed.  QFONT is a mouse driven font     
editor that lets you enlarge, shrink, or slant any HP-compatible soft   
font.  It can also turn bit-mapped fonts into outlines or shadows. You  
can make fonts bolder or lighter, or fill a character with a pattern.   
Using the built-in paint program, you can even create an entirely new   
font or design a logo (a set of master fonts helps get you started).    
                                                                        
Qfont offers pull-down menus, mouse support, "fatbit" editing, and even 
a "smooth" feature to remove "jaggies" from enlarged characters. You can
modify the font header, download a font, and much more.                 
                                                                        
If you have a LaserJet printer now you can use QFONT to edit current    
fonts, or create entirely new characters to suit your taste, and        
creativity.                                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## QFONT15.DOC

{% raw %}
```














          Quick Font! 

          QFONT DOCUMENTATION

          Demo/Beta version 1.4
          July 4, 1989

          Pre-release version 1.5
          July 22, 1989


          Copyright 1989 by Jamestown Software
                            2508 Valley Forge Drive
                            Madison WI  53719
                            608-271-2090










          Jamestown Software will not be liable for any damages, 
          including lost profits, lost savings or other incidental or 
          consequential damages arising out of the use of or inability 
          to use QFONT, even if Jamestown Software has been advised of 
          the possibility of such damages, or for any claim by any 
          other party.
















                                      - Page 1 -













          INTRODUCTION:
          -------------

          QFONT is a soft font editor for downloadable soft fonts for HP
          LaserJet laser printers and compatibles.  This version is the
          fourth in a series: the first was only used internally, the
          second (QFONT 1.3) was released with a number of features not
          implemented. Version 1.4 was completely rewritten to add
          virtually all the missing features from version 1.3, plus add
          some new things.  This release (QFONT 1.5) now has all functions
          fully implemented, plus a number of new features not originally
          planned.

          QFONT supports Hercules Mono, EGA and VGA displays -- with or
          without a mouse. We highly recommend the use of a mouse, but for
          evaluation purposes you can (with some difficulty) use the
          program without a mouse.

          This documentation is admittedly very limited. We are still not
          certain how the program will be distributed, but in any case,
          registered and pre-registered users will receive the final
          "shipping release" including a complete printed and illustrated
          manual, supporting programs and sample fonts. Version 1.3 offered
          a pre-registration price of $50 (which includes all preliminary
          releases up to and including the shipping release), with the
          final registration set at $80.  

          This version is the second of the promised preliminary releases
          and is being shipped to all early registered users. Registration
          is now $80, with the same offer: register now and get all
          preliminary releases, plus the shipping release. Other
          preliminary releases may or may not be posted on the Jamestown
          Software BBS for general download.


          SPECIFICATIONS:
          ---------------

          Required computer...:  IBM compatible, MS/PC-DOS 3.x.
          Memory .............:  512K.
          Video ..............:  Hercules Mono, EGA, VGA.
          Mouse ..............:  Microsoft or compatible (strongly         
                                 recommended, but not required).
          Printer ............:  HP Laserjet or compatible.
          Maximum Font Size...:  about 2" (144 point) depending on style.
          Orientation.........:  edits portrait fonts only; save as 
                                 landscape built in.


          SCREEN LAYOUT:
          --------------

                                      - Page 2 -













          The screen is divided into four logical areas.  

          1. Upper left is a character display.
          2. Lower left is an information and icon area.
          3. Across the top right is a pull-down menu selection bar.
          4. Remainder of the screen is the main edit area.


          PULL-DOWN MENUS:
          ----------------

          FILE -- general and file handling choices.
          EDIT -- character editing choices.
          TRANSFORM -- character modification and distortion.
          PREFERENCES -- default choice for transformation actions.
          INFO -- general help and information.

          The choices for each of the menus are described below. New and
          substantially different features to version 1.4 are single-
          starred (*), and new 1.5 features are double-starred (**);


          FILE:
          -----

          OPEN FONT FILE -- To load a font to be edited.  A window will be
               displayed where you may select a file. QFONT assumes fonts
               with a ".SFP" extension, but you may change the file mask
               for other files. Subdirectories are shown with a small dot
               in front of their name.  You may change subdirectories by
               clicking on their name, and may change drives by clicking in
               the "New Drive" box.

          SAVE -- Saves the current font under it's original name. You will
               be asked if you also wish to save a backup of the original
               file.

          SAVE AS... -- Saves the current file under a new name. The
               original file remains current.

          *MAKE LANDSCAPE -- Saves the current file as a landscape file, or
               one in landscape orientation.  QFONT will edit only portrait
               orientation files, but you may save as landscape at any
               time.

          **NEW -- Create a "blank" font file so a new font may be created. 
               The basic parameters of the current file are used. You may
               wish to "modify header" to establish something different.

          **MODIFY HEADER -- Change the font header information.  If you
               change "Spacing", you can change proportional spaced fonts

                                      - Page 3 -












               to fixed spacing.  You will be asked to confirm your request
               because usually this conversion is less than perfect.  QFONT
               will make all reasonable changes to switch from one spacing
               type to the other.  Pitch (HMI) is the width used by the
               printer when it receives any undefined character.

          *TEST SPACING -- Allows you to enter text and view the spacing
               between characters for possible left-offset and delta-x
               adjustments.

          **PRINT CHARACTER -- Prints a actual-size sample of the current
               character and optionally, an enlarged version.

          **DOWNLOAD FONT -- Built-in font downloader will download the
               active font (including modifications) and optionally, print
               a sample of all characters.

          **SHOW CLIPBOARD -- Displays the current contents of the
               clipboard which is the last block either "cut" or "copied".
               The clipboard is not emptied when a new font is loaded, so
               it is possible to load one font, copy a character, load a
               second font, and then paste the character from the first
               font into a character from the second font.  A window
               displays the width and height of the clipboard image so you
               can determine if it will fit in the current character.  If
               it is larger than the current character, you may "modify
               header" and change the cell width and height as needed.

          QUIT -- End the program and return to DOS.  QFONT will ask if you
               wish to save any modified characters or files.


          EDIT:
          -----

          ZOOM -- Define a section of displayed character and show it with
               enlarged pixels for easier editing.

          *ERASE BLOCK -- Define an area of the displayed character, then
               erase all dots within that area.  Does not affect any stored
               block.

          *CUT BLOCK -- Define an area of the displayed character, store
               the area for later recall, then erase all dots within the
               area. Replaces any block currently stored.

          *COPY BLOCK -- Like cut block, but does not erase the block after
               it has been defined.  Replaces any block currently stored.

          *PASTE BLOCK -- Recalls the currently stored block and allows it
               to be positioned anywhere on the currently displayed
               character. Note: when paste block is active, three selection

                                      - Page 4 -












               boxes are displayed in the information area: MIRROR, INVERT
               and PATTERN. Mirror flips the block side-to-side, invert
               flips it top-to-bottom, and pattern stamps a pattern on the
               block. The block may be pasted as either black or white
               dots.

          **DRAW CURVE -- Draws a bezier curve.  You select the starting
               and ending points for the curve, then a third "control
               point" which determines the arc of the curve. After defining
               the first two points, the curve will "rubber-band" until the
               third point is set.  The curve may be plotted in either
               black or white.

          *DRAW ELLIPSE/ARC -- To draw a circle, horizontal ellipse,
               vertical ellipse and arcs thereof. This feature is best
               learned by experimenting. Read the help messages displayed
               in the top menu bar area for your options, but note that you
               use both right and left mouse buttons for various actions.
               Note: this feature may also be selected by clicking on the
               "target" icon in the information area.

          *DRAW BOX -- Draw a rectangle of various line widths.

          *SET DELTAX-OFFSET -- To set the left offset and delta-x values
               for each character. Left offset is the number of dots from
               the right edge of the previous character to begin printing
               the current character. Delta-x is used to set the right edge
               of the current character.  These two values determine the
               spacing between characters when they are printed. Note: you
               can view the character spacing of your edited font by
               selecting "test spacing" from the FILE menu.

          *SET GUIDELINES -- Use to define temporary vertical and
               horizontal guidelines to help determine relative positioning
               from character to character. Note: defined guidelines are
               cleared when a new font is loaded.

          *GET NEW CHARACTER -- Use to select a new character to edit. All
               the characters in the font will be shown in a reduced size
               so you may select the one you wish to edit.  Note: you may
               simply press any key for immediate display... resizing all
               the characters for this choice does take a few seconds.

          SAVE CHARACTER -- Stores the current character, replacing the
               previously saved version.

          CLEAR CHARACTER -- Erases all the dots for the current character.
               Note: the saved version is not replaced until you request
               that it be replaced.

          HOLD CHARACTER -- The current character is saved in a buffer for
               later recall.  Useful for possible "undo" if you are

                                      - Page 5 -












               experimenting with some radical changes, or for creating a
               common character or shape for use among several characters.

          RECALL CHARACTER -- Recalls the character saved in a buffer with
               the "hold character" function. Note: the current edit
               character is replaced, but the saved version is NOT replaced
               until you confirm that you wish to do so.


          TRANSFORM:
          ----------

          All transformations of characters may be made on the current
          character, or a range of characters.  When selecting a range, be
          sure to FIRST define the starting and ending characters in the
          range, then click on the "range" box.

          *OUTLINE -- Outlines the character(s) using the current outline
               width default. Note: the character size is not enlarged
               through the outline function, so the actual shape of an
               outlined character and the original solid character are the
               same.

          *SHADOW -- The character is first outlined using the current
               outline width, then a drop shadow is added using the current
               shadow width.  Cell size and deltax are adjusted as needed.

          **MAKE BOLDER -- The character is made bolder by adding dots to
               the right and bottom as defined in the current bold/lighten
               width default. Small characters should first be made bolder
               before they are outlined. The position of the character
               relative to the baseline is not changed.

          **MAKE LIGHTER -- The character is made lighter by removing dots
               as defined in the current bold/lighten width default.  The
               position of the character relative to the baseline left
               offset is not changed.

          REVERSE -- The characters are reversed so they will print white
               on a black background. Cell size, left offset, and deltax
               are all adjusted as needed, and an appropriate black "space"
               character is defined.  Note: reverse characters only work if
               the text is printed "flush left or right" and not
               "justified" to a particular width. Also note that line
               spacing must be set to precisely the height of the
               characters, or a thin white line will show up -- or the
               bottoms and tops of the characters will disappear. You may
               set the actual height of the reverse characters by modifying
               the header and changing the cell height before transforming
               the font. Reverse type is nice, but tricky to pull off.

          STAMP PATTERN -- The currently selected pattern is "stamped" on

                                      - Page 6 -












               the character.

          *SLANT -- The character is slanted to the left or right and
               results in a pseudo-italic face. Cell size is adjusted as
               needed.

          *RESIZE -- Characters may be enlarged or reduced in size in both
               the horizontal and vertical directions.  Increasing the
               vertical size while decreasing the horizontal results in a
               "condensed" type face -- or increasing the horizontal while
               decreasing the vertical results in an "extended" type face.
               Cell size and baseline are adjusted as needed. Note:
               reducing usually results in characters that need only a
               little clean-up, but enlarging often creates characters that
               require a fair amount of clean-up to look good. Always
               reduce a type face when possible.  In others words, start
               big and work down.

          *SHIFT -- Characters may shifted within their cell in all four
               directions. 


          PREFERENCES:
          ------------

          X:Y STATUS ON/OFF -- When the cursor is within the character edit
               area, x:y coordinates can optionally be displayed at the top
               right of the screen.

          **USE CROSSHAIRS/ARROW FOR EDIT -- When within the character edit
               area, the cursor can optionally be shown as either an arrow
               or crosshairs.

          **SHOW/HIDE GRID -- On a color monitor, the grid in the edit area
               may be shown or hidden.

          **SHOW/HIDE TRANSFORM PROGRESS -- When transformations are
               performed on a range of characters, each character is
               normally shown at the left of your screen after it has been
               modified so you can monitor the transformation process.  If
               you have a slower system, you may turn the display of
               modified characters off and reduce the overall time it takes
               to perform the transformation.

          SET FILL PATTERN -- Select your current fill pattern to be used
               when "stamping" patterns on characters or blocks, or
               "filling" enclosed areas with the F10 function key.

          SET OUTLINE WIDTH -- Select the width of outlined characters.

          **SET BOLD/LIGHTEN WIDTH -- Select the number of dots to use when
               the "make bolder" and "make lighter" choices are made in the

                                      - Page 7 -












               TRANSFORM menu.

          SET SHADOW WIDTH -- Select the number of dots to use to create
               the drop shadow when the "shadow" choice is made in the
               TRANSFORM menu.



          INFO:
          -----

          Copyright and other information about QFONT.



          THE MOUSE AND THE KEYBOARD:
          ---------------------------

          Generally speaking, the left mouse button is used for most
          actions. When in the edit area, the left button will turn a black
          dot "off", and a white dot "on". If it is pressed and held, dots
          will be continue to be drawn in black or white, depending on the
          first dot drawn.

          The right button is used to draw lines. Position the cursor at
          the start on a line and press (and release) the right button. 
          Move to the other end of the line and press the right button
          again. Look at the top of the screen for instructions. Note that
          to plot the line as black dots you press the left button, or as
          white dots, by pressing the right button. 

          The cursor will generally change from an "arrow" to a "pointing
          hand" when different actions can be made.
           
          Clicking "outside" an active area will generally abort the
          action.

          Always check the menu area for special instructions when
          performing an action.

          Function key "F9" will stamp a pattern on the current character.
          Function key "F10" fill perform a "fill" from the current cursor
          location.  The top menu areas can be selected by pressing alt-F
          (FILE), alt-E (EDIT), alt-T (TRANSFORM), alt-P (PREFERENCES) and
          alt-I (INFO).  A new character to be edited can be selected by
          simply pressing the appropriate keyboard key.  Note: the "high-
          bit" characters can be loaded by pressing and holding the alt key
          and entering the character number on the numeric keypad. If the
          requested character is not currently defined, nothing will
          happen.



                                      - Page 8 -












          THE "SCROLL" ICON:
          ------------------

          Because QFONT can edit a character that is larger than can be
          displayed on the screen, a "scroll" icon is displayed in the top
          left corner of the information area. It consists of a square with
          a number, plus triangles pointing up, down, left and right.

          The number inside the square is the size of each dot in the
          "grid" of the edit area.  QFONT adjusts the grid to be as large
          as possible for the size of characters displayed, ranging from 1
          to 6. You may click on the number if you wish to change the size
          of the grid. If the entire character can be displayed at a larger
          size than you request, QFONT will simply ignore your requested
          size and use the larger size.

          If only a portion of a character can be displayed, one or more of
          the triangles will change color.  You may click on the
          highlighted triangle to scroll in that direction.  On a color
          monitor, the portion of the character that is displayed in the
          edit area is also highlighted in the character display area.

          If you are in "zoom" mode, the grid size is displayed in the box.
          Clicking outside the edit area will "un-zoom" the edit area and
          return it to its previous display.


          REGISTRATION OF QFONT / SHAREWARE AND SO ON:
          --------------------------------------------

          This preliminary version of QFONT continues to be offered for
          personal use as "shareware", which is a distribution method
          whereby you try the program for a short period and if you find it
          to be of value you send a registration fee of $80 to:
             
             Jamestown Software
             2508 Valley Forge Drive
             Madison WI 53719

          In return, you will receive all further releases up to and
          including the final "shipping" release, complete with printed and
          illustrated manual, supporting programs and sample fonts.

          Registration is required for commercial, corporate and government
          use. Note that QFONT is a copyrighted program and is NOT "public
          domain."

          Technical support is available at:

             Voice telephone number: 608-271-2090 (real people)
             Jamestown Software BBS: 608-271-3685 
                                     (1200/2400 baud, 8-N-1, 24 hrs)

                                      - Page 9 -

















                             INVOICE / REGISTRATION FORM


                                  Jamestown Software
                               2508 Valley Forge Drive
                                  Madison, WI 53719




          Sold to: __________________________________________________

                   __________________________________________________

                   __________________________________________________


             Date: ____________________________




          =================================================================



          ____ copies of QFONT (1.5 or newer) @ $80 ea....... _____________

          ____ add $3 for 3.5" disk in place of 5.25" ....... _____________

          ____ add $7 for delivery outside of US/Canada ..... _____________

               SUBTOTAL ..................................... _____________

               Sales tax (Wisconsin residents) .............. _____________

               TOTAL enclosed ............................... _____________ 
                                                            


          =================================================================


                              Thank you for your order.




                                     - Page 10 -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2529

     Volume in drive A has no label
     Directory of A:\

    GRID04   SFP      4469   7-22-89   1:51a
    GRID10   SFP       402   7-22-89   1:51a
    GRID12   SFP       293   7-22-89   1:51a
    GRID16   SFP       230   7-22-89   1:51a
    GRID24   SFP       200   7-22-89   1:51a
    GRID8    SFP       508   7-22-89   1:51a
    QFONT    EXE    194827   7-22-89   1:51a
    QFONT15  DOC     23606   7-22-89   1:51a
    README   QFT      1292   7-22-89   1:51a
    GO       BAT        37  10-05-90   7:58a
    FILE2529 TXT      2151  10-05-90   7:59a
           11 file(s)     228015 bytes
                           86016 bytes free
