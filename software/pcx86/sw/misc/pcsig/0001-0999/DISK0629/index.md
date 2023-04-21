---
layout: page
title: "PC-SIG Diskette Library (Disk #629)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0629/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0629"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-ART"

    PC-ART is a graphic-drawing program that lets you create color pictures
    and designs using the standard color graphics adapter on the IBM-PC.
    
    This is a solid graphics package that does not depend upon the use of a
    mouse, light pen, koala pad or joystick.  You can do everything
    from the keyboard.   The following features are available to you:
    
    ~ Crayon function for free-hand drawing in any color
    
    ~ Paint brush function in any color using any one of 15 patterns
    
    ~ Line and box functions with four different line patterns
    
    ~ Circle function with a concentric repeat feature
    
    ~ Text function in two fonts in any color and in 10 character sizes
    
    ~ Retrieve or save an entire picture for later processing
    
    ~ Snapshot function to take a picture of the screen and store it
    
    ~ Image library to store and later retrieve drawn figures
    
    ~ Easy-to-use window panels to select functions, colors, etc
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES629.TXT

{% raw %}
```
Disk No  629
Program Title: PC-ART version 4.0
PC-SIG version 2.2

PC-ART is a graphic drawing program that lets you create color pictures
and designs using the standard color graphics adapter on the IBM PC. The
following is a brief summary of its main features: crayon function for
freehand drawing in any color with varying line boldness; paint brush
function that paints in any color using any one of 15 different patterns;
line and box functions with four different line patterns; circle function
with concentric repeat feature; text function in one of two different
fonts in any color and in 10 different character sizes; retrieve or save
entire screen for later processing; snapshot function to take a picture of
a portion of the screen and store it; image library to store and later
retrieve drawn figures; and easy-to-use window panels to select functions,
colors, etc. Neither a joy-stick or a mouse are required to use this
program.

Usage:  Graphic Drawing Utility.

System Requirements:  Color graphics adapter.

How to Start:  Type PC-ART (press enter).

Suggested Registration:  $25.00

File Descriptions:

ARTCONFG EXE  PC-ART system configuration utility
ARTPRINT EXE  PC-ART screen print utility
ARTPRINT SCR  Image file for the print utility screen
PC-ART   CFG  PC-ART system configuration data
PC-ART   DOC  Documentation file
PC-ART   EXE  Main program
PC-ART   IDX  Index file to the snapshot library
PC-ART   SCR  Image file for PC-ART logo screen
PC-ART   F??  Data file (5 files)
PC-ART   PAT  Data file
PC-ART   SCR  Image file for PC-ART
REGISTER FRM  Shareware registration form

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PC-ART.DOC

{% raw %}
```



                                     PC-ART


                                        
                                        
                                  Version 4.0
                                        
                            Copyright (c) 1987,1988
                                        
                                       by
                               Paul Michael Stone
                                 201 Heyden Dr.
                               Eureka, Mo.  63025
          
          
          
          Introduction
          ------------
          
          PC-ART is a graphics drawing program that allows you to
          create color pictures and designs utilizing the standard
          color graphics adapter on the IBM PC.  The following is a
          brief summary of its main features:
          
          *   Crayon function for freehand drawing in any color with
              varying line boldness and shape.
          
          *   Paint brush function that paints in any one of 15
              different paint patterns in any combination of colors.
          
          *   Pattern editor to create and save your own paint
              patterns.
          
          *   Spray paint function which sprays random dot pattern in
              any color and varying spray size.
          
          *   Line and Box functions with 4 different line patterns.
          
          *   Circle function with concentric repeat feature.
          
          *   Text function in one of two different fonts in any color
              and 10 character sizes.
          
          *   Save or retrieve entire screen for later processing.
          
          *   Snapshot function to take a picture of a portion of the
              screen and store it in an internal buffer.
          
          *   Image library to store and later retrieve saved
              snapshots.
          
          *   Easy to use, pop-up menu panels for selection of
              functions, colors, etc.
          
          *   Keyboard, joystick or mouse operation.
          




                                     Page 1





                                     PC-ART


          PC-ART was originally written to satisfy my own needs for a
          multi-function graphics drawing system.  The current version
          has gradually evolved out of that original program over the
          years.  The objective of PC-ART is to provide a full-
          function drawing capability without need of a joystick or
          mouse.  Although the current version supports a joystick or
          a mouse, it can be run entirely from the keyboard with
          little difficulty.  Another main feature is the use of pop-
          up menu panels, allowing the entire screen area to remain
          open for drawing.
          
          
          
          System requirements
          -------------------
          
          *   IBM PC/XT/AT or true PC Compatible
          
          *   IBM Color Graphics Adapter or equivalent
          
          *   IBM Color Display or equivalent
          
          *   256K RAM Memory
          
          *   PC-DOS or MS-DOS version 2.0 or later
          
          *   IBM or Epson compatible graphics printer capable of 120
              dots per inch print resolution (includes IBM Proprinter)
          
          *   Joystick and adapter (optional)
          
          *   Microsoft compatible mouse (optional)
          
          Note:  This software is tested to run on a true IBM PC with
          an IBM CGA adapter or equivalent.  Although it should run
          successfully on most true PC clones, unpredictable results
          may be obtained on non-IBM equipment.  No guarantee of any
          sort is made as to the performance of this software on your
          particular equipment.  If you are a registered user (see
          section on distribution), I will attempt to rectify any
          problem of this nature that you have.  However, I cannot
          promise that any particular problem can or will be fixed.
          
          













                                     Page 2





                                     PC-ART


          Version 2.0 changes
          -------------------
          
          The following is a summary of the changes and enhancements
          made in version 2.0 over earlier versions:
          
          *   Crayon function now has varying stroke shapes when
              drawing bold lines (larger than 1 pixel wide).  Six
              different shapes are provided.
          
          *   The 'U' and 'P' keys no longer function with the crayon.
              The crayon is now moved without drawing by holding
              either shift key while using the arrow key.
          
          *   The speed option now affects the crayon while drawing.
              In other words, the crayon will move and draw the number
              of pixels set by speed each time a direction key is
              pressed.
          
          *   The spray can function is entirely new.  This sprays a
              pattern of random dots on the screen.  The size of the
              spray can be varied.
          
          *   The circle and box functions have changed the way they
              work.  They both now have a preview feature which lets
              you see where the shape will be drawn, before it
              actually is.  The size, shape and position of the figure
              can be changed and then fixed in place.
          
          *   The snapshot and partial screen erase functions are now
              controlled from within the box function instead of from
              separate function keys.
          
          *   The text function now displays a box shaped cursor the
              exact size and shape of the current font.  The arrow
              keys move the cursor in proportion to the character
              size.  Holding either shift key while using the arrow
              keys moves the cursor one pixel at a time, allowing for
              fine adjustments.
          
          *   An undo feature that allows you to back up if you make a
              mistake.
          
          *   A full-function screen print utility is now provided.
          
          











                                     Page 3





                                     PC-ART


          Version 3.0 changes
          -------------------
          
          The following is a summary of the changes and enhancements
          made in version 3.0 over earlier versions:
          
          *   The paint color selection menu has now been eliminated
              and its function merged into the pattern selection menu.
              The selected pattern now dictates the color to be
              painted, including mixed colors in the same pattern.
          
          *   A pattern editor has been added allowing you to modify
              the standard patterns supplied with PC-ART.  Modified
              patterns are then stored to disk and used each time you
              run PC-ART.
          
          *   A zoom feature has been added allowing you to select any
              portion of the screen and enlarge it to four times its
              original size.  Individual pixels can then be changed as
              desired.  Any changes made to the enlarged view will be
              reflected when you return to the full view.
          
          *   Full mouse support has been added for any Microsoft
              compatible mouse.  To facilitate the mouse interface the
              function of the shift key has been modified on any PC-
              ART functions that use it.  In each case, the effect of
              pressing the shift key is exactly the opposite as with
              earlier versions.  For instance, using the arrow keys on
              the crayon function moves the crayon without drawing.
              Pressing the shift key causes the crayon to draw.
          


























                                     Page 4





                                     PC-ART


          Version 3.1 changes
          -------------------
          
          The following is a summary of the changes and enhancements
          made in version 3.1 over earlier versions:
          
          *   A new method is being utilized to save and restore drawn
              screens.  This reduces compatibility problems with some
              models of non-IBM PC's.  Note that screens created with
              previous versions of PC-ART cannot be used directly by
              this version.  Registered users can obtain, free of
              charge, a conversion utility to convert older screens to
              the new format.
          
          *   The keyboard interface has been modified to reduce
              compatibility problems with various keyboard layouts.
          
          *   Both the zoom mode and the pattern editor have been
              modified to allow continuous drawing while holding the
              shift key, just as when using the crayon tool.
          
          *   An online help facility has been added to allow the user
              to review the key functions while drawing.
          
          *   An additional function has been added to allow snapshots
              taken within PC-ART to be saved as external image files
              rather than in the image library.  This provides
              programmers the ability to use saved snapshots in their
              own programs.
          



























                                     Page 5





                                     PC-ART


          Version 4.0 changes
          -------------------
          
          The following is a summary of the changes and enhancements
          made in version 4.0 over earlier versions:
          
          *   The text drawing tool has been completely rewritten to
              use a different technique for creating text characters
              to allow more and varied text fonts.  Five text fonts
              are supplied at this time with more to come later.  As a
              consequence of this, the text function no longer
              supports the variable size feature.
          
          *   The box tool now provides a flip and a reverse feature
              that allows any image outlined by the box to be flipped
              vertically or reversed horizontally.
          
          *   The box tool now provides an expand feature that allows
              any image outlined by the box to be stretched either
              vertically, horizontally or both.
          
          *   The box tool has been modified so that any commands
              affecting the box (such as erase) now include the
              outline of the box itself and not just the interior of
              the box.  Prior to this the box could not be made to
              affect any pixels along the outer edge of the screen.
          






























                                     Page 6





                                     PC-ART


          Distribution
          ------------
          
          PC-ART is being distributed under the 'user-supported'
          concept.  PC-ART is copyrighted and all rights are reserved
          by the author.  However, as a user of PC-ART under the user-
          supported concept, you are granted a limited license to
          freely distribute this program as long as you follow certain
          restrictions:
          
          *   The entire program package and its supporting
              documentation must be distributed in complete and
              unmodified form.
          
          *   The package cannot be sold for profit.  A small handling
              fee (not to exceed $10) can be charged as a service
              charge only for copying and distributing the program.
          
          In keeping with the user-supported concept, I am asking that
          if you find this program of use to you, that you support my
          efforts with a voluntary registration fee of $25.  People
          that write and distribute user-supported software depend on
          the users like yourself to support their efforts.  In order
          for me to continue to support and enhance this product I
          must be able to rely on your support.
          
          If you do choose to register your copy of PC-ART send the
          $25 registration fee to me at the address listed below.  In
          return you will receive the following:
          
          *   The latest release of PC-ART will be sent to you free of
              charge at the time of your registration.
          
          *   Notification of future product releases.  Future
              releases will be made available to registered users for
              a $5 service charge ($7 US for foreign users).
          
          *   Free technical support (by mail only please).
          
          Please note that PC-ART is distributed on an as-is basis.
          No warranties or guarantees of any kind are made regarding
          its performance or suitability for any purpose.  While I
          will attempt to address problems that are reported by
          registered users, I cannot guarantee that any particular
          problem can or will be fixed.
          
          If you choose not to send in the required registration fee,
          the program is of course still yours to use.  However, you
          will be entirely on your own.  No support of any kind will
          be provided to unregistered users.
          
          
          




                                     Page 7





                                     PC-ART


          The distribution diskettes
          --------------------------
          
          Below is a brief summary of the files contained on the
          PC-ART distribution diskette:
          
          PC-ART.EXE    The main program execution file.
          
          PC-ART.IDX    The index file to the snapshot library.
          
          PC-ART.PAT    Paint pattern data file.
          
          PC-ART.SCR    Image file for PC-ART logo screen.
          
          PC-ART.CFG    PC-ART system configuration data.
          
          PC-ART.Fx     PC-ART text font files.
          
          PC-ART.DOC    The file this documentation is contained in.
          
          ARTPRINT.EXE  The PC-ART screen print utility.
          
          ARTPRINT.SCR  Image file for the print utility screen.
          
          ARTCONFG.EXE  PC-ART system configuration utility.
          































                                     Page 8





                                     PC-ART


          Getting started
          ---------------
          
          To run PC-ART on a floppy based system, simply place the
          program diskette in disk drive A.  To run on a hard disk,
          copy all files on the program diskette into any directory of
          your choice.  The only restriction is that they must all
          reside in the same directory and that directory must be the
          current directory during execution.
          
          As supplied on the distribution diskette, PC-ART is
          configured to run on a one floppy disk system with the
          program disk in drive A.  Drive A is also designated as the
          location where saved screen images will be stored.  PC-ART
          is also initially configured with the joystick and mouse
          options turned off.
          
          In order to change the location where PC-ART will store
          screen images to other than drive A (i.e. drive B or a hard
          disk directory), you must run the ARTCONFG utility.  In
          addition this utility is also used to turn on the joystick
          option and configure the joystick parameters to your
          particular joystick, or to turn on the mouse option.
          
          
          
          The ARTCONFG utility
          --------------------
          
          To run the ARTCONFG utility simply type ARTCONFG from DOS.
          Once the utility begins running you will be prompted to
          enter the drive and/or path name where you want PC-ART to
          store saved screen images.  You can enter either a drive
          identifier in the case of a floppy disk drive (don't forget
          the colon), or a full path name for a hard disk directory
          (don't forget the trailing backslash).  If you designate a
          floppy drive, a floppy diskette must be in that drive and
          the drive must be ready.  If you enter a hard disk path
          name, the sub-directory that you specify must already exist.
          
          The second function of ARTCONFG is to configure your
          joystick if you have one.  You will be prompted to indicate
          if you have a joystick attached to the system.  If so you
          will be given several instructions to move the joystick
          which will allow the utility to adjust the proper parameters
          to fit your joystick.
          
          Next you will be asked if you have a mouse attached to your
          system.  Simply respond according to your hardware setup.
          







                                     Page 9





                                     PC-ART


          Last of all, you will be presented with a list of graphics
          printers supported by PC-ART.  Simply enter the number next
          to the type of printer you have.  If your printer is not on
          this list, try the Epson printer configuration as many
          models of printers support the Epson control codes.  If you
          printer will not work, contact the author.  If your printer
          supports 120 bit per inch graphics, PC-ART can be modified
          to add your printer to the list of supported printers.
          
          After you have followed all the directions, ARTCONFG will
          update the PC-ART.CFG file to reflect the new configuration.
          
          Note that if you are using a floppy based system, you may
          wish to delete the file ARTCONFG.EXE from the program
          diskette after you have completed the configuration process.
          This will free more space for use by other functions of the
          program.  Make sure that you make a backup copy of it before
          you delete it in case you should need to run it again at a
          later date.
          
          
          
          Running PC-ART
          --------------
          
          If you are running from a floppy system, make sure the
          PC-ART program diskette is in drive A.  If you are running
          PC-ART from a hard disk, then make sure its sub-directory is
          the current DOS directory.
          
          Once you have properly prepared your system, PC-ART can be
          executed by simply typing PC-ART directly from DOS.  The
          program is quite large and will take several seconds to load
          and begin executing, especially on a floppy disk.
          
          When the program begins executing you will see the PC-ART
          logo screen appear.  Pressing any key at this point will
          erase the logo and you will see a blank screen with the
          crayon at its center.  You are now ready to begin drawing.
          
          Most of the functions and options in PC-ART are selected by
          using pop-up menu panels.  There are seven such panels in
          PC-ART, each with its own function.  The various menus and
          their uses are described in later sections.
          
          
          










                                    Page 10





                                     PC-ART


          Selecting a drawing tool
          ------------------------
          
          There are seven different drawing tools available to you.
          To select a particular tool, press the F1 key.  This will
          cause the drawing tool menu to pop-up at the top of the
          screen.
          
          The seven available tools will be displayed with a hi-lited
          box around the currently selected tool.  By pressing the
          left and right cursor keys, move the box to the desired
          tool.  Then press the escape key to exit the menu and return
          to the drawing screen.  Note that the escape key is used to
          exit from all of the selection menus in PC-ART.  For those
          of you who have used earlier versions of PC-ART the F10 key
          also still works for this purpose.
          
          
          
          The crayon tool
          ---------------
          
          The crayon tool is selected automatically when PC-ART first
          begins executing.  When the crayon tool is selected a small
          crayon will appear on the screen.
          
          The crayon can be moved across the screen by using the arrow
          keys.  Note that the Home, PgUp, PgDn and End keys also work
          by moving the crayon diagonally in that direction.
          
          The crayon can also be caused to draw a line as it moves by
          holding down either shift key while using the arrow keys.
          As long as the shift key is held down, a continuous line
          will be drawn wherever the crayon is moved.
          
          One additional function of the crayon allows you to draw a
          single point on the screen without moving the crayon.  This
          is done by pressing the 'P' key at any time.
          
          
          
          Changing the crayon speed
          -------------------------
          
          Initially the crayon will move one pixel on the screen each
          time an arrow key is pressed.  This can be changed by
          pressing any of the number keys 1 thru 0 across the top of
          the keyboard.  This number represents the number of pixels
          the crayon will move for each key pressed.  The number 0
          represents a 10.
          






                                    Page 11





                                     PC-ART


          Note that this speed option is in effect whether or not the
          shift key is being used.
          
          
          
          Changing the crayon size
          ------------------------
          
          Similar to the speed option, the crayon will initially draw
          a line that is a single pixel wide.  This can be changed by
          holding down the Alt key and pressing any of the number keys
          from 1 to 5.
          
          The number 1 causes the crayon to draw a line one pixel
          wide, which is the default.  Each number greater than 1
          causes the crayon to expand one pixel on either side.  In
          other words, a  value of 2 results in a line 3 pixels wide,
          up to a value of 5 which is 11 pixels wide.
          
          
          
          Changing the crayon shape
          -------------------------
          
          The default crayon shape is a circle.  This causes the
          crayon to draw a circular shape as it moves, leaving both
          ends and corners of a line round.
          
          This can be changed by pressing the  F2 key to select the
          crayon shape menu.  As with the drawing tool menu, a pop-up
          panel will appear showing the six different shape options.
          They are a circle, square, left slanting line, vertical
          line, right slanting line and finally a horizontal line.
          Use the arrow keys to select the desired shape and press Esc
          to return to the drawing screen.
          
          
          
          Changing the drawing color
          --------------------------
          
          The crayon can draw in any of the four colors available on
          the current color palette.  To select a drawing color, press
          the F3 key.  This will pop-up the color menu at the upper
          left side of the screen.
          
          The four available colors will be displayed.  Use the up and
          down arrow keys to move to the desired color.  Then press
          Esc to return to the drawing screen.
          
          
          





                                    Page 12





                                     PC-ART


          The paintbrush tool
          -------------------
          
          When the paintbrush is selected from the tool menu, a small
          paintbrush will appear on the screen.  The brush can be
          moved across the screen by using the arrow keys just as with
          the crayon.
          
          Unlike the crayon, nothing happens to the screen when the
          paintbrush moves.  To actually cause painting to occur, move
          the brush to the desired spot and press the 'P' key.  The
          screen will then be painted starting at the exact tip of the
          paintbrush.
          
          Note that the paint will expand until it hits a boundary of
          some sort.  This will either be the edge of the screen or a
          solid line drawn in the current drawing color.  For example
          if you draw a white circle on the screen, then use the
          paintbrush at any point inside that circle, the paint will
          expand to fill the entire circle and then stop.
          
          
          
          Selecting a paint pattern
          -------------------------
          
          The paintbrush can paint in any of fifteen different
          patterns.  This pattern can be a solid color or any pattern
          of colors.  To select a paint pattern, press the F7 key to
          see the paint pattern menu.
          
          Select the desired pattern and return to the drawing screen,
          just as with any other menu.
          
          
          
          The pattern editor
          ------------------
          
          PC-ART is supplied with fifteen standard painting patterns.
          The pattern editor lets you change any of these patterns to
          suit your own needs.
          
          To edit a pattern, select the pattern menu by pressing the
          F7 key, and use the arrow keys to select the pattern to be
          edited.  Then press the 'E' key to select the editor.
          
          The screen will be erased and the pattern edit screen will
          appear.  The area at the center of the screen will contain a
          large box on the left which is an enlarged view of the
          pattern to be edited.  The small box to the right labeled
          'Current color' displays the currently selected color to be
          used in editing the pattern.
          



                                    Page 13





                                     PC-ART


          The edit color can be changed at any time by pressing the
          'C' key.  Each press of the 'C' key toggles the current
          color thru each of the four colors in the current palette.
          
          When the edit screen first appears, a flashing cursor will
          appear in the upper left corner of the pattern box.  This
          cursor can be moved to any position in the pattern using the
          arrow keys.  Pressing the 'Return' key will change the color
          of the spot under the cursor to the current edit color.  In
          this way any spot in the entire pattern can be changed to
          any color desired.
          
          Holding down the shift key while moving the cursor causes
          the editor to drawn the current color continuously just as
          with crayon tool.
          
          When you are done editing the pattern, press the 'Esc' key
          to return to the drawing screen.  Any changes made to the
          pattern will be reflected in the pattern selection menu.
          Any changes made are also stored in the pattern file on the
          disk so that PC-ART remembers all changes you make.
          
          
          
          The spraycan tool
          -----------------
          
          When the spraycan is selected, a small circle will appear on
          the screen.  This circle can be moved around on the screen
          by using the arrow keys as before.
          
          Pressing the 'S' key at any time causes a spray of random
          dots to be put on the screen.  The circle on the screen
          indicates the size of the spray pattern.
          
          The spraycan sprays in the currently selected paint color
          which can be changed just as with the paintbrush.
          
          The size of the spray can also be changed, just as with the
          size of the crayon, by holding down the Alt key and pressing
          a number key 1 thru 5.
          
          
          
          The circle tool
          ---------------
          
          When the circle tool is selected a small circle will be
          drawn on the screen.  Just as with the other tools, the
          circle can be moved anywhere on the screen by using the
          arrow keys.
          





                                    Page 14





                                     PC-ART


          The shape and size of the circle can also be changed by
          holding down the shift key when using the arrow keys.
          
          When the shift key is pressed, the left and right arrow keys
          affect the size of the circle.  Pressing the left arrow
          shrinks the circle and pressing the right arrow expands it.
          
          The up and down arrows work slightly different.  Pressing
          the up and down arrows causes the circles shape to change.
          The up arrow causes the circle to shrink from top to bottom
          while the down arrow causes it to stretch in this direction.
          
          When the circle is in the desired position, pressing the 'C'
          key causes the circle to be permanently glued in position.
          Additional circles can then be drawn starting from that
          point.
          
          Note that the circle will draw in the currently selected
          drawing color and that the speed option is also in effect
          (see the crayon function for details on the speed option).
          
          
          
          The box tool
          ------------
          
          When the box tool is selected, a small box is drawn on the
          screen.  This function works very similar to the circle
          function with a few minor differences.
          
          Like the circle, pressing the arrow keys moves the box
          anywhere on the drawing screen.
          
          When the shift key is pressed, pressing the left or right
          arrow keys causes right side of the box to move in that
          direction, shrinking or expanding the box horizontally.
          
          Pressing the up or down arrow keys causes bottom of the box
          to move, shrinking or expanding the box vertically.
          
          The diagonal keys also work, adjusting both the right and
          bottom of the box at the same time.
          
          Unlike the circle, the box can be drawn in solid lines or in
          any of three different dashed or dotted lines by changing
          the line pattern.  This is done by pressing the F6 key to
          select the line pattern menu.  As with any menu, select the
          desired option and press Esc to return to the screen.
          
          The box tool also has two additional functions that are
          performed by pressing either the 'F' or the 'R' keys while
          the box is on the screen.  The 'F' key causes the contents
          of the box to be flipped vertically, while the 'R' key
          reverses the box contents horizontally.



                                    Page 15





                                     PC-ART


          
          Another additional function of the box tool is the expand
          feature.  This allows you to stretch the contents of the box
          either vertically, horizontally or both.  Simply position
          the box around the area to be expanded and press the 'X'
          key.  Now use the direction arrows to change the shape of
          the box.  Note however that only the right hand and bottom
          sides of the box will move and the box can only be made
          bigger, not smaller.  Finally press the return key and the
          contents of the original box will be expanded to fill the
          new box.
          
          On last feature of the box tool is the erase feature which
          will be explained in a later section.
          
          
          
          The line tool
          -------------
          
          When the line tool is selected, a short line will be drawn
          on the screen.  Pressing any of the arrow keys will move one
          end of the line in that direction while the other remains
          fixed.
          
          Pressing the 'L' key at any time fixes the line in its
          current position and the fixed end of the line is moved to
          the new end.  In this way a series of continuous lines can
          be drawn from one point to the next.
          
          By holding the Alt key and pressing 'L', the same line will
          be drawn, but the fixed end will remain at its original
          point.  In this way a ray pattern can be drawn from a fixed
          point.
          
          Last of all, the fixed end of the line can be moved to the
          point at the other end of the line, without drawing a line,
          by pressing the 'P' key.
          
          As with the box, the drawing color, speed, and line pattern
          options are all in effect for the line tool.
          
          
          The text tool
          -------------
          
          When the text tool is selected a small box will be drawn on
          the screen.  Pressing any of the regular typewriter keys on
          the keyboard will cause the corresponding character to be
          printed in the exact location of the box.  The box will then
          skip one space to the right.
          





                                    Page 16





                                     PC-ART


          The text box can be moved on the screen, without typing
          characters, in two ways.  By pressing any of the arrow keys,
          the box will skip across the screen in direct proportion to
          the size of the characters.  In other words, very similar to
          the way the cursor moves on a text editor.  Holding down
          either shift key while pressing the arrow keys moves the box
          a single pixel at a time, allowing for fine adjustments.
          
          
          Changing the text font
          ----------------------
          
          Five different text fonts (designs) are available.  The
          current text font can be changed at any time by pressing the
          F4 key to display the font menu.
          
          Simply select the desired font and press Esc to return.
          
          
          
          The zoom function
          -----------------
          
          PC-ART provides the ability to select a portion of the
          screen and enlarge it so that very fine modifications can be
          made to the picture at that point.
          
          The zoom function is selected at any time from the main
          drawing screen by holding down the 'Alt' key and pressing
          the 'Z' key.  A large box will appear on the drawing screen.
          This box can be moved around on the screen, just as with the
          box tool.  Move the box to the area of the screen to be
          enlarged and press the 'Return' key.
          
          The screen will clear and the area of the screen contained
          in the box will be enlarged to four times its original size
          and displayed on the screen.  Each pixel or dot on the
          original screen area will be displayed as a small square on
          the zoom screen.
          
          Once the zoom screen has been drawn, a flashing cursor will
          appear in the upper left corner.  As with the pattern
          editor, the cursor can be moved with the arrow keys.
          Pressing the 'Return' key changes the pixel under the cursor
          to the current drawing color.  As before, the cursor can be
          made to draw continuously while moving by holding down the
          shift key.
          
          While in zoom mode, the current drawing color can be changed
          at any time by pressing the F3 just as you would in any
          other PC-ART function.
          





                                    Page 17





                                     PC-ART


          When all changes have been made to the zoom screen, pressing
          'Esc' will exit the zoom function.  The original drawing
          screen will be returned and any changes made to the zoom
          screen will be made on the drawing screen.
          
          
          
          Saving an entire screen image
          -----------------------------
          
          When you have completed drawing a screen you can save the
          entire contents of the screen for later retrieval or for use
          in the print utility.
          
          To save a screen, hold down the Alt key and press F2.  You
          will be prompted for the name of the file you wish to save
          the screen under.  You can type up to an eight character
          name.  Do not type a file extension, as an extension of
          'PIC' is automatically added to the file name.
          
          Retrieving a saved screen image
          -------------------------------
          
          A previously saved screen image can be retrieved onto the
          screen for further editing by pressing the F1 key.  Once
          again you will be prompted for the file name.  As before, do
          not include the file extension.
          
          Note that screen images saved with versions of PC-ART prior
          to version 3.1 are not compatible with version 3.1 or later.
          A conversion utility which will convert older screen images
          to the new format used by version 3.1 is available free of
          charge to registered users who request it.
          
          
          
          Taking a snapshot
          -----------------
          
          PC-ART provides the ability to take, and store, a snapshot
          of any portion of the drawn screen.  This feature allows you
          to outline any portion of the screen and store that image
          for later use.
          
          To take a snapshot, start by selected the box tool.  Move
          and adjust the box as you normally would until the box
          exactly outlines the area of the screen that you wish to
          take a snapshot of.  This area can be of any size.
          








                                    Page 18





                                     PC-ART


          Now press the 'S' key.  A frozen image of just that piece of
          the screen will then be stored in memory for use as
          described below.
          
          
          
          Retrieving a snapshot
          ---------------------
          
          Once the box tool has been used to take a snapshot of a
          portion of the screen, this snapshot can be retrieved any
          number of times and redrawn on the screen.
          
          To retrieve a snapshot, hold down the Alt key and press F3.
          The image currently in the snapshot buffer will appear in
          the upper left corner of the screen.  You can then use the
          arrow keys to move the image around on the screen until it
          is in the desired location.  Pressing the 'G' key will then
          glue the image in place.
          
          This operation can be repeated any number of times with the
          same image.  By using this feature with the erase (see the
          section 'Erasing a portion of the screen') and snapshot
          options of the box tool you can take a snapshot of a shape,
          erase it and then redraw it in a different place.  This
          provides a simple way to move drawn images on the screen.
          
          
          
          Saving a snapshot to an external file
          -------------------------------------
          
          PC-ART provides the ability to save snapshots to an external
          file in the same format as when saving entire screens.  This
          allows BASIC programmers to use snapshot images in their own
          programs.  To use this feature you must have already taken a
          snapshot using the box tool.
          
          To save a snapshot, hold down the Ctrl key and press F2.
          You will be asked for a file name to save the image in.  The
          rules for entering the file name are the same as those for
          saving an entire screen, except that the extension '.IMG' is
          automatically added to the file name.
          
          
          
          Saving a snapshot to the library
          --------------------------------
          
          PC-ART includes a special image library which can store
          snapshot images from the screen.  To use this function you
          must have already made a snapshot using the box tool.
          




                                    Page 19





                                     PC-ART


          To save a snapshot, hold down the Alt key and press F6.  You
          will then be prompted for the name to store the image under.
          As with a screen image you can type in up to eight
          characters in the name.  Then press enter to store the image
          in the library.  Note that doing so does not erase the
          snapshot from the internal buffer.
          
          
          
          Retrieving a snapshot from the library
          --------------------------------------
          
          You can retrieve a snapshot from the library at any time by
          holding down the Alt key and pressing F5.  A pop-up panel
          will appear which will list up to nine snapshots currently
          stored in the library.  If there are more library entries
          than will fit on the screen, you can page through the
          library by using the PgUp or PgDn keys.
          
          Once the desired entry is displayed on the screen, use the
          up and down arrows to position the lit box around it.
          Pressing the return key then retrieves the snapshot image.
          
          Two things happen at this point.  First of all the image is
          stored in the internal snapshot buffer, just as if you had
          made a snapshot from the screen.  Secondly the retrieved
          image is displayed in the upper left corner of the screen.
          You should proceed at this point exactly as if you had
          pressed Alt-F3 to retrieve a snapshot.
          
          
          Tips for BASIC programmers
          --------------------------
          
          Saved screen images as well as snapshots saved to disk can
          be used and displayed in your own BASIC programs quite
          easily.
          
          All screen images and snapshots saved with PC-ART are saved
          from an integer table array using the BSAVE command.  They
          can therefore be loaded into any other BASIC program using
          the reverse process.  The images can be loaded into an
          integer array using the BLOAD command and then the PUT
          command can be used to display them on the screen.  Saved
          snapshots, because they are only a piece of the screen, can
          be displayed anywhere on the screen.
          










                                    Page 20





                                     PC-ART


          Below is a sample BASIC program that loads and displays a
          screen named ART:
          
              100 DIM ARRAY(8224)
              110 OFFSET = VARPTR(ARRAY(0))
              120 BLOAD "ART.PIC",OFFSET
              130 SCREEN 1
              140 PUT (0,0),ARRAY,PSET
          
          
          Erasing a portion of the screen
          -------------------------------
          
          You can erase a portion of the screen by using the erase
          feature of the box tool.
          
          Start by selecting the box tool from the tool menu.  Then
          use the arrow keys to move and adjust the box until it
          exactly outlines the area you wish to erase.  This area can
          be of any size.
          
          Then simply press the 'E' key and the area within the box
          will be erased.
          
          
          Erasing the entire screen
          -------------------------
          
          At any time you can erase the entire screen by holding down
          the Alt key and pressing F7.  You will be prompted to make
          sure that you do indeed wish to erase the screen.  Answering
          'Y' will then erase the screen.  Answering 'N' will cancel
          the erase and return to the screen.
          
          
          
          The undo function
          -----------------
          
          At any time you can undo the latest changes to the screen by
          holding down the Alt key and pressing the 'U' key.  This
          will erase all changes made since the current tool was
          selected from the tool menu.  Changing tools permanently
          freezes the screen contents.
          
          An example would be if you had drawn a circle on the screen
          with the circle tool, and then switched to the paintbrush.
          After painting the circle, you decide that you wished to use
          a different pattern.  Pressing Alt-U will remove the paint
          but leave the circle intact.
          
          
          




                                    Page 21





                                     PC-ART


          Changing background color and palette
          -------------------------------------
          
          The current background color displayed on the screen can be
          changed by pressing the F8 key.  Each time you press the key
          the color will cycle through one of its sixteen different
          options until finally arriving back at the original black
          background.
          
          The current palette represents which three colors are
          available to you for drawing or painting at any one time.
          Pressing the F9 key flips between the two available color
          palettes.  The colors available in the two palettes are
          shown below:
          
              Palette 1 - Green, Red, and Brown
          
              Palette 2 - Cyan, Magenta and White
          
          
          
          Using a joystick
          ----------------
          
          When a joystick is attached to a standard game adapter port
          on the PC you can make use of the joystick to help you draw
          with PC-ART.
          
          In all functions of PC-ART, the joystick acts exactly as if
          you had pressed the directional arrow keys.  Moving the
          joystick to the left is just like pressing the left arrow
          key and so on.
          
          The left button (red on some models) on the joystick behaves
          exactly like either shift key on the keyboard.  In other
          words if you move the joystick while holding down the
          button, PC-ART will perform as if you had pressed an arrow
          key while holding either shift key.
          
          In addition, the right button will perform a number of
          functions depending on which tool is currently being used:
          
              Spraycan   - same as pressing 'S'
          
              Circle     - same as pressing 'C'
          
              Box        - same as pressing 'B'
          
              Line       - same as pressing 'L'
          
              All others - same as pressing 'Return'
          
          
          



                                    Page 22





                                     PC-ART


          Using a mouse
          -------------
          
          When a mouse is attached to your system you can make use of
          the mouse to help you draw with PC-ART.  The mouse is used
          in a very similar manner to the joystick.
          
          As with the joystick, moving the mouse in various directions
          is the same as pressing the direction arrow keys on the
          keyboard.
          
          Likewise the left and right mouse buttons behave exactly
          like the same buttons on the joystick.
          
          
          
          Getting help
          ------------
          
          PC-ART provides an online help facility that can let use
          review the various key commands and the function while
          drawing in PC-ART.
          
          You can invoke the help feature at any time by holding down
          the Alt key and pressing the H key.  This will cause the
          first help screen to appear.  Press the return key to obtain
          additional screens.  Pressing Esc at any time will restore
          the screen as it was prior to requesting help and you will
          be returned to whatever you were doing at the time.
          
          
          
          The ARTPRINT utility
          --------------------
          
          Once a graphics screen image has been created using PC-ART,
          the ARTPRINT utility can be used to print a hardcopy of the
          screen.  Prior to using ARTPRINT you must have saved the
          screen you wish to print using the Alt-F2 function of PC-
          ART.
          
          To use the print utility simply type ARTPRINT from DOS.  The
          print option screen will then appear.  When it does, you
          will see a place to enter a screen name and three option
          selection windows across the bottom.
          
          To print a saved screen you must first select the desired
          print options, if the displayed default options do not meet
          your needs.  Any of the options in the option windows can be
          selected by holding down the Alt key and pressing the first
          letter of that option.
          





                                    Page 23





                                     PC-ART


          The first option is the print mode.  There are two print
          modes; portrait and landscape.  In portrait mode the screen
          will be reduced in size to print upright on the paper just
          as it appears on the screen.  In landscape mode the screen
          will be rotated 90 degrees and printed on its side, allowing
          the entire 8 1/2 by 11 sheet of paper to be used.
          
          The second option is the print position.  In portrait mode
          the printed screen will use only half of an 8 1/2 by 11 inch
          sheet of paper.  Selecting top or bottom indicates where on
          the sheet of paper the screen will print.  Since landscape
          mode uses the entire sheet of paper, the print position
          option is ignored when landscape is selected.
          
          The last option is print type.  In normal print, any shapes
          drawn on the screen will appear as dark lines on a white
          background with colors being printed in shades of gray.  In
          reverse print, all images are printed as white on a black
          background.  Note that reverse print should be used
          sparingly as printing a solid black background is hard on
          both your printer and the ribbon.
          
          
          

































                                    Page 24





                                     PC-ART


          Keyboard Summary
          ----------------
          
               F1        Calls up the drawing tool selection window.
          
               F2        Calls up the crayon shape selection window.
          
               F3        Calls up the drawing color selection window.
          
               F4        Calls up the text font selection window.
          
               F6        Calls up the line pattern selection window.
               
               F7        Calls up the paint pattern selection window.
          
               F8        Changes the current background color.
          
               F9        Changes the current color palette.
          
               F10       Returns to the drawing screen from any
                         currently active selection window.
          
               Alt F1    Loads a saved screen image from disk.
          
               Alt F2    Saves a displayed screen image to disk.
          
               Alt F3    Retrieves and draws a snapshot stored in the
                         snapshot buffer.
          
               Alt F5    Retrieves and draws a snapshot from the
                         snapshot library stored on disk.
          
               Alt F6    Stores the snapshot currently in the buffer
                         to the snapshot library on disk.
          
               Alt F7    Erases the entire display screen.
               
               Ctrl F2   Saves the snapshot currently in the buffer to
                         an external image file.
               
               1 thru 0  Sets the speed option for any drawing tool
                         except for text.
          
               Alt 1 - Alt 0  Changes the size of the text characters
                         when using the text tool.
          
               Alt 1 - Alt 5  Sets the size option for the crayon and
                         spraycan tools.
          








                                    Page 25





                                     PC-ART


               P key     Moves the fixed end of the line to the
                         current point when using the line tool.
          
                         Paints the screen when using the paintbrush
                         tool.
          
               C key     Fixes the circle on the screen when using the
                         circle tool.
               
                         Changes the edit color when in the pattern
                         editor.
               
                         Allows the current zoom color to be viewed
                         when in zoom mode.
          
               B key     Fixes the box on the screen when using the
                         box tool.
          
               L key     Fixes the line on the screen and moves the
                         fixed point to the current point when using
                         the line tool.
          
               Alt + L key  Fixes the line on the screen without
                         moving the fixed point when using the line
                         tool.
          
               S key     Takes a snapshot of the box contents when
                         using the box tool.
          
               E key     Erases the box contents when using the box
                         tool.
               
                         Edits the current paint pattern when the
                         pattern selection window is on the screen.
               
               F key     Flips the box contents when using the box
                         tool.
               
               R key     Reverses the box contents when using the box
                         tool.
               
               X key     Expands the box contents when using the box
                         tool.
               
               Alt + Z key  Selects the zoom feature while on the main
                         drawing screen.
               
               Alt + H key  Selects the online help facility.
          
               Alt + Q key  Quits PC-ART and exits to DOS.
          
          





                                    Page 26


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0629

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   6-10-87  12:19p
    PC-ART   EXE    129772   7-20-88   7:10p
    PC-ART   CFG        29   7-20-88   7:14p
    PC-ART   SCR     16456   7-10-88   7:47p
    PC-ART   PAT       779   7-07-88   9:55p
    PC-ART   IDX        16   7-08-88   7:19a
    PC-ART   F1       2124   7-05-88   9:15p
    PC-ART   F2       2124   7-09-88   3:20p
    PC-ART   F3       2892   7-06-88   9:37p
    PC-ART   F4       3660   7-06-88   9:35p
    PC-ART   F5       5196   7-11-88   8:47p
    PC-ART   DOC     58706   7-11-88   9:23p
    REGISTER FRM      1255   7-22-88   1:53p
    ARTCONFG EXE     44772   7-10-88   7:40p
    ARTPRINT EXE     58600   7-10-88   7:39p
    ARTPRINT SCR     16456   7-10-88   7:46p
    FILES629 TXT      1756   8-18-88   1:37p
    GO       TXT       694   8-03-88  11:07a
    PRTDOC   BAT        22   8-03-88  11:07a
           19 file(s)     345347 bytes
                            4096 bytes free
