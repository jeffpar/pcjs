---
layout: page
title: "PC-SIG Diskette Library (Disk #3214)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3214/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3214"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.TXT

{% raw %}
```
 








                            ____________________

                              CAD Vantage (tm)
                               version  1.00



                               
                             Gamma Software (tm)


                            ____________________







































                              COPYRIGHT
_____________________________________________________________________


   COPYRIGHT
   ---------
   Copyright 1992 by Gamma Software.  All rights reserved.


   TRADEMARKS
   ----------
   CAD Vantage is a trademark of Gamma Software.

   CompuServe is a registered trademark of CompuServe, Inc.

   Microsoft and MS-DOS are registered trademarks, and Windows is a
   trademark of Microsoft Corporation.

   TrueType is a registered trademark of Apple Computer, Inc.

   Arial and Times New Roman are registered trademarks of the
   Monotype Corporation PLC.


   DISCLAIMER
   ----------
   Users of CAD Vantage must accept this disclaimer of warranty:
   CAD Vantage is supplied as is.  The author disclaims all warranties, 
   expressed or implied, including, without limitation, the warranties 
   of merchantability and of fitness for any purpose.   The author 
   assumes no liability for damages, direct or consequential, which 
   may result from the use of CAD Vantage.




   
   
   
   

   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
_____________________________________________________________________
                                  i

                          TABLE OF CONTENTS
_____________________________________________________________________


   Contents
   --------                                             Page
   Introduction ........................................   1
      About This Manual ................................   2
      Getting Help .....................................   2
      System Requirements ..............................   2
      Manual Conventions ...............................   2
   Getting Started .....................................   4
   General Program Information .........................  12
      Parts Of The Program Window ......................  12
      International Number Formats .....................  12
      The Program Coordinate System ....................  12
      Specifying Positions .............................  13
   Creating Drawing Elements ...........................  16
      Lines ............................................  16
      Arcs .............................................  16
      Circles ..........................................  17
      Points ...........................................  18
      Text .............................................  19
   Drawing Element Properties ..........................  20
      Setting Line Properties ..........................  20
      Setting Text Properties ..........................  21
      Setting Point Properties .........................  24
   File Operations .....................................  25
      Saving The Drawing ...............................  25
      Opening An Existing Drawing ......................  25
      Creating A New Drawing ...........................  26
   Printing / Plotting The Drawing .....................  27
   View Operations .....................................  29
      Zooming In On An Area Of The Drawing .............  29
      Displaying All The Elements In The Drawing .......  29
      Restoring A Previous View ........................  30
      Zooming In And Out ...............................  30
      Moving The Drawing Left/Right/Up/Down ............  30
      Redraw: Cleaning Up The Drawing Area .............  31
   Edit Operations .....................................  32
      Selecting Drawing Elements .......................  32
      Moving Drawing Elements ..........................  32
      Copying Drawing Elements .........................  33
      Deleting Drawing Elements ........................  35
      Rotating Drawing Elements ........................  35
      Scaling Drawing Elements .........................  35
      Changing Drawing Element Properties ..............  36
      Listing Drawing Elements .........................  36
      Clearing The Current Selection ...................  37
      Undoing Changes To The Drawing ...................  37
   Configuration Operations ............................  38
      Changing The Selection Set Color .................  38
      Setting The Plot Scale ...........................  38
      Changing The Cursor Step Size ....................  38
   Getting Help On-Line ................................  39


_____________________________________________________________________
                                  ii

                          TABLE OF CONTENTS
_____________________________________________________________________


   Exiting The Program .................................  39
   Appendixes ..........................................  40
      Quick Key Summary ................................  40
      Clipboard Format .................................  40
      Memory Management ................................  41
   Glossary ............................................  43


   Tables
   -----
    1. Element Snaps ...................................  15
    2. Font Information ................................  23


   Figures
   -------
    1. Main Window .....................................   4




































_____________________________________________________________________
                                iii

                            INTRODUCTION 
_____________________________________________________________________


   CAD Vantage is the first affordable CAD (Computer Aided Design) 
   program for Windows.  It provides a wide range of functionality
   in an easy to use package.

   CAD Vantage allows you to create drawings of real world objects
   in two dimensions using their actual measurements.  They can then
   be plotted at any scale you choose on any of the vast number of   
   printers and plotters supported by Windows.  The biggest advantage
   of using a computer to create these drawings over conventional
   hand methods is the ease with which a computer based drawing can
   be edited and then replotted at different scales.

   CAD is used in many fields including: architecture, cartography,
   electronics and engineering.  It can be used to create house plans,
   maps of all kinds, printed circuit diagrams, and any kind of graph,
   chart, diagram or illustration.

   This program allows you to create drawings using 5 basic drawing
   elements.  These elements are: lines, arcs, circles, points and
   text.  You may enter exact coordinates for these elements, pick a
   position on the display or "snap" to a position on another element
   in the drawing.  For example you can draw a line that starts
   exactly at the end of an existing line.
   
   Once these basic drawing elements are in your drawing you can edit
   them to your liking.  They can be edited individually or as a
   group.  The elements can be deleted, copied, scaled, rotated and 
   their properties can be changed.  These operations can be undone.
   This allows you to experiment with the drawing.

   Many properties of the drawing elements can be specified.  The line
   type (e.g. solid, dashed, dotted, etc.), line color and line width
   can be specified.  Text properties include: font, size, color,
   angle and justification.  Point type, color and size can also be
   set.

   The drawing can be zoomed and panned to look at different parts in
   more detail.  Zoom functions include: window, extents, previous
   and factor.

   CAD Vantage is designed to be powerful and easy to use.  The
   program contains on-line help to get you up and running as quickly
   as possible.  A prompt area is displayed at the bottom of the
   window which instructs you how to perform each command.  A status
   area displays pertinent program information at a glance.  The
   program also employs easy to use visual dialog boxes.

   Gamma Software is committed to providing you with quality software
   at affordable prices.




_____________________________________________________________________
                                  1 

                            INTRODUCTION 
_____________________________________________________________________


   About This Manual
   -----------------
   Read the "Getting Started" section first.  The rest of the manual
   can be read as needed to get more information on a particular   
   subject.


   Getting Help
   ------------
   If you have a problem with this program and cannot find the answer
   in the documentation help may be obtained by calling:

      (303) 490-2928

   or via Compuserve mail at:

      73737,1721

   or by writing to:
   
      Gamma Software
      P.O. Box 8191
      Fort Collins, CO 80526

   Please describe the problem in sufficient detail so that it can be
   reproduced by us.

   We are open 8am-5pm Mountain time (Mon-Fri).

   Support is currently free and unlimited.  We do reserve the right
   to change these policies in the future.


   System Requirements
   -------------------
     Windows 3.1 and a system capable of running it:
        - Personal computer (286 or better).
        - 640K conventional memory and at least 256K extended memory.
        - DOS 3.1 or later.
        - Windows supported display.
        - Hard disk with at least 6MB of free disk space.
        - Floppy drive.
        - A Windows supported printer, mouse and color display are
          highly recommended.
     Note - this program will NOT work with Windows 3.0 or previous 
     versions of Windows.


   Manual Conventions
   ------------------
   When two keys need to be pressed simultaneously to perform a given
   operation they are separated by a plus (+).  For example Shift+Tab

_____________________________________________________________________
                                  2 

                            INTRODUCTION 
_____________________________________________________________________


   means to press the Shift key and hold it down while the Tab key is
   pressed.  When a menu option or other text from the program is   
   mentioned it is enclosed in quotes.  Values that must be input by
   the user are enclosed in quotes as well.  Enter them without the
   quotes.  For example if the manual instructs you to enter "45" in
   a field within the program then enter the number without the quote
   marks.














































_____________________________________________________________________
                                  3 

                           GETTING STARTED
_____________________________________________________________________


   This section will take you on a brief guided tour of the program
   and demonstrate how to use some of its main features.  It is    
   assumed that you are familiar with Windows.  If you are new to
   Windows then you should read the getting started section of the
   Windows manual first.  If you are already familiar with CAD you
   can probably skip this section.  It is also assumed that you have
   already installed CAD Vantage and executed the program and you are
   currently at the main program window, below.

       +---------------------------------------------------+
       |                  CAD Vantage                      |
       +---------------------------------------------------+
       |             Main or Pull Down Menu                |
       +----------------------------------------+----------+
       |   y                                    |          |
       |                                        |          |
       |   ^         Drawing Area               |  Status  |
       |   |                                    |   Area   |
       |   +--> x                               |          |
       |(0,0)                                   |          |
       +----------------------------------------+----------+
       |                  Prompt Area                      |
       +---------------------------------------------------+

                        Figure 1 - Main Window

   When you first enter CAD Vantage you are placed in a new "Untitled"
   drawing.  This program uses a standard 2 dimensional xy coordinate
   system.  Positions are specified by giving their x and y value.
   These positions are indicated by 2 values within parentheses
   in this manual.  For example (2,3) indicates an x position of
   2 and a y position of 3.  The origin of this coordinate system
   (0,0) is initially placed in the lower-left of the drawing area.
   The x axis starts at the origin and increases to the right.  The y
   axis starts at the origin and increases upward.  The first 2
   fields in the status area indicate the current xy position of the
   cursor within the drawing area.  When the cursor is within the
   drawing area it is displayed as a small cross.  It can be moved
   using the mouse or the keyboard arrow keys.  These xy positions can
   be in any units and are referred to as "drawing units" in this
   program.  They are related to actual sizes using the plot scale 
   (more on this later).  Move the cursor around the drawing area and
   watch how the xy position in the status area changes to get a feel
   for the coordinate system.

   The initial drawing is blank, this means it contains no drawing 
   elements.  To draw elements within the drawing area you simply
   select "Draw" from the pull down menu and then select one of the
   options on this menu.  For example to draw a line starting at the 




_____________________________________________________________________
                                  4 

                           GETTING STARTED
_____________________________________________________________________


   position (10,10) select "Line" from the "Draw" menu.  The prompt 
   area will then display:

      Select first end point of line
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   The first line of the prompt area tells you what the program is
   currently looking for.  In this case it is asking you to enter the
   first point of a line.  The second line of the prompt area tells
   you how to accomplish this using the mouse.  The third line tells
   you how to accomplish the task using the keyboard.  This same
   format for the prompt area is used throughout the program.  The
   first line tells you what the program wants, the second line tells
   you how to do it with the mouse and the third line tells you how
   to do it with the keyboard.

   Getting back to what we set out to do -- draw a line starting at  
   (10,10) -- click the right mouse button or press the F2 key.  This
   brings up a coordinate input dialog box.  You are initially placed
   in the x value field.  Enter "10" in this field.  Now press Tab or 
   click on the Y-coordinate field.  Then enter "10" in that field.
   Press Enter or click on the "OK" button.  The position (10,10) has 
   now been specified for the first end of the line.

   The first line of the prompt area has now changed to prompt us for
   the second end point of the line.  You do not have to specify
   exact coordinates for drawing elements.  You can also simply pick 
   them within the drawing area.  To do this move the cursor using
   the mouse or arrow keys to any position within the drawing area.
   As you move the cursor a line is drawn from the first point you
   selected to the current cursor position.  This represents the line
   that will be drawn if the current cursor location is selected.  
   When you have positioned the cursor where you want it click the 
   left mouse button or press Enter.  We have now successfully drawn 
   a line.  You may continue to draw another line that starts at the 
   end of the previous one or you can draw another element.

   To draw an arc select "Arc" from the "Draw" menu.  Arcs must
   always be drawn in a counter-clockwise direction by entering the
   first end point, then the center and finally the second end point.
   For example lets draw an arc that starts at (50,10), has a center   
   point of (30,10) and an end point of (10,10).  To do this click the 
   right mouse button or press F2.  Next enter the coordinates (50,10) 
   in the dialog box the same way you did for the first line end point 
   in the previous step.  Repeat this procedure to enter the center
   point of the arc at (30,10).  Now move the cursor and as you do so
   an arc is drawn using the previously specified end and center
   points and the current cursor position as the last end point.  This
   represents the arc that would be drawn if the current cursor
   position is used for the last end point.  Select the position 


_____________________________________________________________________
                                  5 

                           GETTING STARTED
_____________________________________________________________________


   (10,10) for the last end point as before (click the right mouse
   button or press F2 and enter the coordinates in the dialog).  You 
   have now drawn an arc.  You can continue drawing more arcs by 
   entering their start, center and end points or select another 
   drawing element.

   To draw a circle you follow the same kind of procedure as for
   lines and arcs.  Select "Circle" from the "Draw" menu.  Select a 
   position for the center of the circle.  A circle is then drawn
   with the given center and through the current cursor position.
   Select a position on the circle and the circle is added to the
   drawing.

   To draw points select "Point" from the "Draw" menu and then select
   a position for the point.  A point is added to the drawing at the
   given position.

   To draw text select "Text" from the "Draw" menu and enter the text
   alignment point.  This is the upper-left corner of the text string.  
   After selecting the alignment point a dialog box is displayed to 
   allow you to enter a text string.  Type in the desired text string 
   and click on the "OK" button or press Enter.  The given text is
   then added to the drawing at the specified position.

   Experiment with these drawing commands until you feel comfortable
   with them.

   As we have seen selecting another command from the "Draw" menu
   ends the previous one.  Selecting anything from the main menu    
   except "Options" will end a drawing command.  The reason "Options" 
   does not end the current drawing command is so you can change
   the properties of whatever you are drawing without having to
   reselect the drawing command (more on this in a moment).  There is
   also another way to end a drawing command.  Click the right mouse
   button or press F2 while a drawing command is prompting you for a
   position and then select the "End" button from the coordinate input 
   dialog.  For example select "Line" from the "Draw" menu.  Now
   click the right mouse button or press F2.  Next select the "End" 
   button.  This will end the line command and clear the prompt area.
   The "Cancel" button on that menu cancels manual input of the 
   coordinates and allows you to go back to selecting them with the 
   cursor.

   We have now covered all of the drawing elements you can create
   with this program.  Next we will cover some ways of changing the 
   look of these drawing elements.  The "Options" menu contains all
   of the properties you can specify for the drawing elements in the
   "Draw" menu.  Some general program parameters can be set using the
   "Options" menu as well.

   First lets look at the different kinds of lines we can draw. 


_____________________________________________________________________
                                  6 

                           GETTING STARTED
_____________________________________________________________________


   Select "Line Color" from the "Options" menu.  This brings up the
   color selection dialog.  Select one of the colors from this menu.
   Only solid colors can be specified.  This means that if you select 
   a nonsolid color it will be mapped to the closest solid color.  See 
   your Windows manual for more information on colors.  
   
   After entering a color select "Line" from the "Draw" menu and pick
   2 points within the drawing area.  A line will be drawn in the 
   selected color between the 2 given points.
   
   You can change line properties in the middle of drawing lines 
   without ending the line command.  For example select "Line Type" 
   from the "Options" menu.  This brings up the line type dialog.  
   Click on the "Dash" line type.  The "Dash" radio button will be
   marked and the previously marked line type is unmarked.  Now click 
   on the "OK" button or press Enter.  Now select the second end point 
   of a line (the first will be the end of your previous line).  The 
   line will be drawn using your selected color and line type.

   The last line property is width.  Select "Line Width" from the
   "Options" menu and then enter "2" for the line width.  The width
   is specified in drawing units.  Now enter the second end point of 
   another line.  The line width hasn't changed, has it?  This
   demonstrates an important point.  Only solid lines can have a
   width greater than 1 pixel.  Select the solid line type from the
   options menu and enter the second end point of another line.  This
   time the line will be wider.
   
   Line properties affect not only lines but arcs and circles as well.
   Draw a few arcs and circles to see how your current line property
   settings affect them.
   
   The main property of a text element is its font.  With Windows
   3.1 TrueType fonts were introduced.  These fonts work best in this
   program and are recommended over previous Windows fonts.  When
   there is a check mark to the left of the "TrueType Fonts Only"
   selection in the "Options" menu then the "Text Font" selection
   below it will list only TrueType fonts.  To access other fonts
   click on the "TrueType Fonts Only" selection.  The check mark will
   be removed and all fonts will be listed in font selection.

   Now select "Text Font" from the "Options" menu.  This brings up
   the font selection dialog.  With this dialog you specify the 
   font name, style, size, color and effects.  Sizes are in points.
   A point is 1/72 of an inch.  The point size selected is the size
   you want the text to appear on paper when the drawing is plotted.
   The size of the text on your display will vary depending on the 
   plot scale you have specified and the current extents of the
   drawing area.  Once you have selected a font from this menu, draw 
   a text string as you did previously to see the font you have 
   selected.  Experiment with the different font parameters in the


_____________________________________________________________________
                                  7 

                           GETTING STARTED
_____________________________________________________________________


   font selection dialog until you get a feel for what each one does.
   
   Text may be placed at an angle using the "Text Angle" selection on
   the "Options" menu.  This angle is measured counter-clockwise from
   the x axis in degrees.  First select the "Arial" font using the
   "Text Font" selection on the options menu.  Next select "Text
   Angle" from the "Options" menu.  Enter "45" for the text angle.  
   Now draw a text string.  Its baseline will be at a 45 degree angle.          

   Text orientation specifies the rotation of individual characters
   within a text string.  It has no affect on TrueType fonts so this 
   menu selection is grayed out if "TrueType Fonts Only" is checked.
   Only Windows vector fonts (e.g. Roman, Script and Modern) support
   orientation angles.  See the "Setting Text Properties" section for 
   more information on how to use orientation angles.

   To change the alignment point of a text string from the upper-left
   to another position within the string use the "Text Justification"
   item on the "Options" pull down.  For example if you want to
   specify a text alignment point that represents the lower right end
   of a text string then select the "Text Justification" option and
   set "Right" and "Bottom" as the text alignment.  Now when you draw
   text the alignment point you pick will specify the right bottom
   position of the text string.

   Point properties can be entered in much the same way as line and
   text properties.  Experiment with changing these properties and
   drawing points to see the effects.

   At this point we should do something that should always be done
   periodically when creating a drawing, which is save it to disk.
   This will prevent losing your drawing in case of a power failure,
   system crash or similar catastrophe.  To save this file select 
   "Save As" from the "File" menu.  This will bring up the Windows
   file selection dialog.  Enter "TEST" in the "File Name" field and
   click on the "OK" button.  The drawing will then be saved to     
   "TEST.DWG" in the directory shown and can be retrieved later using
   the "Open" option on the "File" menu.
   
   To produce a printed or plotted output of a drawing you use the
   "Plot" option on the "File" menu.  First select "Open" off the 
   "File" menu and select the file SAMPLE.DWG supplied with the 
   program.  This drawing shows the top, right and front views of some 
   part.  Next select "Plot" from the "File" menu.  This will bring
   up the plot scale dialog.  Enter a scale of "2" (1 inch = 2
   drawing units) and click on the "OK" button.  The current
   coordinates of the lower left of the drawing area will be used as
   the lower-left of the plot.  As much of the drawing as can be
   displayed using the given scale will be plotted to the current 
   print device.  If you do not care about the scale and simply want



_____________________________________________________________________
                                  8 

                           GETTING STARTED
_____________________________________________________________________


   to plot the current view as large as possible then click on the
   "Fit plot to page" check box in the scale dialog.  The plot scale
   is ignored for these type plots.

   Now lets look at some of the "View" menu options.  These allow you
   to look at your drawing in more or less detail.    For example to 
   look at the top view in more detail select "Zoom Window" from the 
   "View" menu.  The program will then prompt for the first corner of 
   the window.  Pick a point just below and to the left of the top 
   view.  Next the program will prompt for the second point defining 
   the window.  As you move the cursor a box is displayed with one 
   corner on the first point you selected and the other at the current 
   cursor position.  This box represents the window.  Move the cursor 
   to a point above and to the right of the top view so that the whole 
   top view is enclosed in the box and press the left mouse button.  
   The program will then display the area you selected using the 
   entire drawing area.                                             

   The right and front views are no longer visible.  If we wanted to
   make sure that all the elements in the drawing are currently 
   visible we can use the "Zoom Extents" option.  Select this option
   and you see that the extents of the drawing area are adjusted
   so that all drawing elements are visible and as large as possible.

   To return to the previous view select "Zoom Previous" from the
   "View" menu.  

   If you want to shift what is currently displayed in the drawing
   area to see other parts of the drawing you use the "Pan" command.  
   Select this option and then pick a point near the bottom center of 
   the top view.  Next pick a point directly above the previous point
   and near the top of the drawing area.  The drawing is then shifted
   up within the drawing area.

   The view commands simply change how the drawing elements are     
   displayed.  They do not change their coordinates or dimensions.
   If you want to change the drawing element coordinates or dimensions
   then you use the "Edit" commands.

   The last things we need to look at in this overview of the program
   are the "Edit" functions.  First let's move the top view to another 
   position in the drawing.  Select "Zoom Extents" from the "View"
   menu so that the entire drawing is visible.  Then pick "Select" 
   from the "Edit" menu and pick a point below and to the left of the 
   top view for the first point.  Pick a point above and to the right 
   for the second point of the selection area.  All the drawing 
   elements which are within or cross the selection area are selected.
   They are displayed in the selection color (initially light gray).  
   Now select "Cut" from the "Edit" menu.  The program then prompts 
   for a reference point.  Pick a point near the middle of the top 
   view.  The top view is then erased.  To move it to another position 


_____________________________________________________________________
                                  9 

                           GETTING STARTED
_____________________________________________________________________


   select "Paste" from the "Edit" menu.  The program then prompts you 
   for the alignment point.  This point will be the new position of 
   the reference point you specified in the cut operation.  Pick a 
   point more to the right of the reference point you selected.  The 
   top view will then be redrawn at this new position.  You can 
   continue to select other alignment points and insert multiple 
   copies of the top view in your drawing.  The "Copy" option does 
   much the same as "Cut" except it does not delete the original copy 
   of the selected elements.  The "Cut" and "Copy" options are the 
   only ones that set the elements for the "Paste" operation.  None of 
   the other "Edit" options affect what is pasted during the "Paste" 
   option.

   To simply delete unwanted elements in the drawing you use the
   "Delete" option.  This option does not allow you to paste the 
   deleted elements back into the drawing.  However, you can recover 
   them by selecting "Undo".  For example, "Select" the drawing 
   elements in the top view as you did before.  Next select "Delete" 
   from the "Edit" menu.  The elements will be erased from the display
   area and deleted from the drawing.  Now select "Undo" from the 
   "Edit" menu and the previously deleted elements will be redrawn and
   placed back in the drawing.
   
   To change the angle of elements within the drawing, you use the 
   "Rotate" command.  Select the top view as you did previously. 
   Then select "Rotate" and pick a position near the center of the
   selected top view as the center of rotation.  A dialog to enter the 
   rotation angle will then appear.  Enter "45" and press Enter.  The 
   top view will then be rotated 45 degrees counter-clockwise.  You
   can continue to rotate the top view by selecting another rotation 
   point and angle.  The command can be terminated by selecting 
   another option from the main menu or clicking the right mouse 
   button and selecting "End" from the coordinate input dialog.  As 
   with the delete option, the rotation can be undone by selecting
   "Undo" from the "Edit" menu.

   The "Scale" option functions much the same as rotate except that
   it is used to make the current element selection larger or smaller.
   For example, select "Scale" and pick a point near the center of the
   top view which you selected in the last step.  Enter a scale factor 
   of "0.5" in the dialog box.  The selected top view will be drawn at
   half its original size.  "Undo" can also be used with this option.
   
   The "Change" item on the "Edit" menu allows you to change all the
   different properties of the drawing elements specified in the 
   "Options" menu after the elements have been drawn.  For example 
   select "Change" and pick "Line Color" from the change dialog.  This 
   will bring up the color selection dialog.  Pick a new color from 
   this menu.  In order to see the color change you must  select 
   "Clear Selection" from the "Edit" menu.  The current selection is



_____________________________________________________________________
                                 10 

                           GETTING STARTED
_____________________________________________________________________


   always drawn in the selection color.  The current selection is
   only changed when a new selection is made or the selection is
   cleared.
   
   Finally, for on-line help with the features in this program select
   "Help" from the "Help" menu.  This brings up the Windows help
   facility.  For more information on how to use this facility look
   in your Windows manual.
   
   This concludes your guided tour of the program.  Hopefully you will
   have enough information at this point to get started with your
   first drawing.  You can look at the other sections of this manual
   as needed to get more details on specific areas.








































_____________________________________________________________________
                                 11 

                     GENERAL PROGRAM INFORMATION
_____________________________________________________________________


   Parts Of The Program Window
   --------------------------- 
   The figure below shows the different areas within the program
   window.  These will be referred to throughout this manual.

                        Figure 1 - Main Window

   The main or pull down menu contains the program commands.

   The prompt area displays what the program currently wants you to 
   enter and how to do it.

   The status area displays the current cursor xy coordinates, the
   amount of memory available, the current element snap mode and the
   number of fonts defined in the drawing.  The format of the xy 
   positions is affected by the international settings in the Windows 
   Control Panel (see "International Number Formats" below).

   The drawing area is where drawing elements are displayed and
   drawn.

   The title bar contains the program name and the current file name.

   The system menu contains the standard Windows system menu options.

   The min/max buttons minimize and maximize the program window.


   International Number Formats And Measurements
   --------------------------------------------- 
   This program utilizes the settings in the international section
   ("intl") of the Windows WIN.INI file.  These parameters can be
   configured using the "International" option in the Control Panel. 
   The "Decimal Separator" and "Decimal Digits" fields under "Number
   Format" are used by this program when formatting decimal numbers.
   The "Measurement" field determines whether the plot scale is
   specified in inches or centimeters.


   The Program Coordinate System
   ----------------------------- 
   This program uses a standard 2 dimensional cartesian coordinate 
   system.  This consists of 2 axes, x and y, that are perpendicular 
   to each other.  The x axis increases to the right and the y axis 
   increases upward.

                   Figure 2 - XY Coordinate System

   Coordinates within this coordinate system are specified by giving
   their x and y distance from the origin.  These coordinates are
   denoted by x and y values in parentheses within this manual (x,y).  


_____________________________________________________________________
                                 12 

                     GENERAL PROGRAM INFORMATION
_____________________________________________________________________


   For example (10,20) designates a position 10 units to the right 
   (x distance) and 20 units up (y distance) from the origin.

                    Figure 3 - Coordinate Example

   The origin of this coordinate system is where the x and y axes
   intersect at coordinates (0,0).  When a new drawing is first 
   loaded, the origin is at the lower-left of the drawing area.  This 
   can change when any of the view options are selected.  The drawing 
   area can be thought of as a window which displays a portion of the 
   entire coordinate range.  Drawing elements which lie outside the 
   current window are not displayed but are still part of the drawing.

                    Figure 4 - Drawing Area Window

   The extents of the drawing are the minimum and maximum xy
   coordinates of all the drawing elements.  The drawing area extents
   are the lower-left and upper-right coordinates of the current
   drawing area.

                   Figure 5 - Drawing Area Extents

   The "X:" and "Y:" fields of the status area give you the current
   coordinates of the cursor within the drawing area.  The cursor is
   initially a small plus sign when it is within the drawing area.
   It can be moved with the mouse or keyboard arrow keys and the xy
   position in the status area will be updated as it is moved.

   The units the drawing area represents can be anything.  For 
   example, they can represent inches, feet, miles, millimeters, 
   meters, kilometers and so on.  The scale you enter when plotting
   specifies the relationship between the units in the drawing and
   the plot units (inches or centimeters).  


   Specifying Positions
   --------------------
   You need to specify positions for many of the options in this
   program.  A position is the (x,y) coordinates that designate a    
   point in the drawing.

   There are three methods for specifying positions within this
   program:

      1. Pick a position in the drawing area using the cursor.
      2. Enter exact coordinates (manual entry).
      3. Snap to an existing drawing element.

   The first method is the easiest.  All you have to do is position
   the cursor at the desired point in the drawing area using the
   mouse or keyboard arrow keys.  Then click the left mouse button


_____________________________________________________________________
                                 13 

                     GENERAL PROGRAM INFORMATION
_____________________________________________________________________


   or press Enter.  The disadvantage to using this method is you
1  cannot specify the exact coordinates of the point.  For example, if
   you wanted to pick a point at exactly (10,10) you could not do it
   using this method.  This is due to the fact the cursor moves in 
   steps.  This method is best used when you do not care about the 
   exact positions and dimensions of what you are drawing.

   The second method, manual entry, allows you to specify exact
   positions.  To use this method click the right mouse button or
   press F2 while the cursor is in the drawing area or select "Enter
   Coordinates" from the "Options" pull down menu.  This will bring
   up a "Coordinate Input" dialog.  You use this dialog to enter
   the exact (x,y) coordinates of a drawing position.  This method
   is used when you have the exact coordinates or dimensions of the 
   object you are drawing.

                  Figure 6 - Coordinate Input Dialog

   The third method, using element snaps, allows you to specify
   positions based on elements that are already in the drawing.  For
   example, if you want a line to start at the exact same position as
   the end of another line in your drawing, you would use the "End" 
   element snap.  To use element snaps, simply select the desired mode
   using the "Element Snap" item on the "Options" pull down menu. 

                    Figure 7 - Element Snap Dialog

   You can select an element snap before or during a command.  The
   element snap selected remains in affect until another is chosen.
   The current element snap mode is displayed in the status area.  If 
   an element snap other than "NONE" is in affect, the cursor will 
   change from a cross to a box.  When a position is selected the 
   program will look to see if an element is within the box.  If one
   is then the program will determine the proper coordinates from this
   element using the current snap mode.  The program tries to snap to 
   the first element it finds within the box.  If it cannot snap to 
   this element it uses the center of the box as the input point.  
   When you are using element snaps, you should make sure only one 
   element lies within the cursor box, so you are certain you are 
   snapping to the proper element.  Use the "Zoom Window" command to 
   enlarge the area around the element you are snapping to if 
   necessary to avoid getting other elements in your cursor box.






1  In reality you may be able to enter an exact coordinate using this
   method if one of the cursor steps just happens to fall on it, but 
   it is unlikely and in general you cannot enter exact coordinates
   using method 1.

_____________________________________________________________________
                                 14 

                     GENERAL PROGRAM INFORMATION
_____________________________________________________________________


   For example, if the box cursor is placed as in the figure below and
   the current snap mode is set to "End," the program will use the 
   coordinates of the closest end of the line as input.

                     Figure 8 - Element Snap Pick

   In this case the program "snapped" to the top of the line and that
   point is used as the start of a new line as shown below.

                    Figure 9 - Element Snap Result

   The element snaps which are available within this program are:

      None   - no element snaps are used, the cursor is a cross.
      End    - snap to the end of the selected element.
      Center - snap to the center of an arc or circle element.
      Point  - snap to the position of a point element.

   The table below summarizes which element snap modes can be used
   for each drawing element.  If the element does not support a 
   particular snap mode (no "X" in that modes column for the element),
   then no snap position is determined and the position of the center
   of the cursor box is used.

                            End  Center  Point
                    Line     X     X
                    Arc      X     X
                    Circle         X
                    Point                  X
                    Text

                       Table 1 - Element Snaps 

   The figure below demonstrates how the different snap modes can be
   used:

                      Figure 10 - Element Snaps
















_____________________________________________________________________
                                 15 

                      CREATING DRAWING ELEMENTS
_____________________________________________________________________


   Lines
   -----
   Lines are drawn by entering their start and end points.

                        Figure 11 - Line Input

   To Draw a line all you have to do is select "Line" from the "Edit"
   pull down menu or you can press Ctrl+L.  The prompt area will then
   display:

      Select first end point of line
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   After entering the first end point, the first line of the prompt
   area changes to:

      Select second point

   As you move the cursor a line is drawn from the first point to the
   current cursor position which represents the line which would be
   added to the drawing if the current cursor position is used for the
   second end point.  When the second end point is specified, a line
   with the designated start and end points is added to the drawing.
   It is displayed using the current line properties in affect.

   The program continues to prompt you for a second point.  If you
   wish to draw another line which starts at the end of the previous
   one, then you simply select the second end point of that line.

   To end line input, select another operation from the main menu 
   (except those on the "Options" menu).  You can also end line input
   by clicking the right mouse button (or press F2) and select "End" 
   from the dialog box which appears.

   See the section on "Specifying Positions" for more information on
   entering the line end points.  See the section on "Line Properties"
   for more information the different types of lines which can be
   drawn.


   Arcs
   ----
   Arcs are drawn by specifying their start, center and end points.
   They are always drawn in a counter-clockwise direction.

                        Figure 12 - Arc Input

   To Draw an arc all you have to do is select "Arc" from the "Edit"




_____________________________________________________________________
                                 16 

                      CREATING DRAWING ELEMENTS
_____________________________________________________________________


   pull down menu or you can press Ctrl+A.  The prompt area will then
   display:

      Select first end point of arc
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   After entering the first end point the first line of the prompt
   area changes to:

      Select center point of arc

   After entering the center point the first line of the prompt
   area changes to:

      Select second end point of arc

   As you move the cursor an arc is drawn from the first point to the
   current cursor position around the given center point in a counter-
   clockwise direction.  This represents the arc which would be added 
   to the drawing if the current cursor position is used for the 
   second end point.  When the second end point is specified an arc 
   with the designated start and end points is added to the drawing.  
   It is displayed using the current line properties in affect.

   The program continues to prompt you for the first point of an arc.  
   If you wish to draw another arc, you can enter it at this point.

   To end arc input, select another operation from the main menu 
   (except those on the "Options" menu).  You can also end arc input
   by clicking the right mouse button (or press F2) and select "End" 
   from the dialog box which appears.

   See the section on "Specifying Positions" for more information on
   entering the arc points.  See the section on "Line Properties" for 
   more information on the different types of arcs that can be drawn.


   Circles
   -------
   Circles are drawn by specifying their center point and a point
   anywhere on the circle.

                       Figure 13 - Circle Input

   To Draw a circle all you have to do is select "Circle" from the 







_____________________________________________________________________
                                 17 

                      CREATING DRAWING ELEMENTS
_____________________________________________________________________


   "Edit" pull down menu or you can press Ctrl+I.  The prompt area 
   will then display:

      Select center point of circle
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   After entering the center point the first line of the prompt area 
   changes to:

      Select point on circle

   As you move the cursor, a circle is drawn around the center point 
   and through the current cursor position.  This represents the
   circle which would be added to the drawing if the current cursor 
   position was used.  When the point on the circle is specified, a 
   circle with the designated center and circumference point is added 
   to the drawing.  It is displayed using the current line properties 
   in affect.

   The program continues to prompt you for the center point of the
   next circle.  If you wish to draw another circle, you can enter it 
   at this point.
  
   To end circle input, select another operation from the main menu 
   (except those on the "Options" menu).  You can also end circle input
   by clicking the right mouse button (or press F2) and select "End" 
   from the dialog box which appears.

   See the section on "Specifying Positions" for more information on
   entering the circle points.  See the section on "Line Properties" 
   for more information on the different types of circles that can be
   drawn.


   Points
   ------ 
   Points are drawn by specifying their position.

   To Draw a point all you have to do is select "Point" from the 
   "Edit" pull down menu or you can press Ctrl+P.  The prompt area 
   will then display:

      Select point position
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   When a position is specified, a point is drawn using the current
   point properties in affect.

   The program continues to prompt you for a point position.  If you  


_____________________________________________________________________
                                 18 

                      CREATING DRAWING ELEMENTS
_____________________________________________________________________


   wish to draw more points then you can do so at this time.

   To end point input, select another operation from the main menu 
   (except those on the "Options" menu).  You can also end point input
   by clicking the right mouse button (or press F2) and select "End" 
   from the dialog box which appears.

   See the section on "Specifying Positions" for more information on
   entering the point positions.  See the section on "Point 
   Properties" for more information on the different types of points 
   which can be drawn.


   Text
   ----
   Text is drawn by specifying the text alignment point and the
   desired text string.

                        Figure 14 - Text Input

   To Draw text, all you have to do is select "Text" from the "Edit" 
   pull down menu or you can press Ctrl+T.  The prompt area will then 
   display:

      Select text alignment point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   When a position is specified the text string input dialog is
   displayed.  
   
                    Figure 15 - Text Input Dialog

   Enter the desired text and select the "OK" button.  The text is 
   then displayed using the current text properties in affect.

   The program continues to prompt you for a text alignment position.  
   If you want to enter more text strings then do so at this point.

   To end text input, select another operation from the main menu 
   (except those on the "Options" menu).  You can also end text input
   by clicking the right mouse button (or press F2) and select "End" 
   from the dialog box which appears.

   See the section on "Specifying Positions" for more information on
   entering the text alignment points.  See the section on "Text 
   Properties" for more information on the different types of text   
   which can be drawn.





_____________________________________________________________________
                                 19 

                      DRAWING ELEMENT PROPERTIES
_____________________________________________________________________


   Setting Line Properties
   -----------------------
   All lines (including those used in arcs and circles) have the
   following three properties:

      1. Color.
      2. Type.
      3. Width.

   These properties can be specified before or during the input of a
   drawing element.  The selected properties remain in affect until
   another selection is made.  Whenever a line, arc or circle is 
   created, it is displayed using the current line color, type and 
   width.  They will always be displayed this way unless the 
   properties are changed.  See the section "Changing Drawing Element 
   Properties" for more information.

   Lines can only be displayed in solid colors.  In other words they
   cannot use dithered colors which use a pattern of different solid
   colors to produce the look of another color.  The number of solid
   colors which are available is dependent on the display device.

   To specify a line color, select "Line Color" from the "Options"
   menu.  To make a selection from the color input dialog, simply 
   click on the desired color (or highlight it using the arrow keys 
   and press the spacebar).  Then select the "OK" button.  If a 
   nonsolid color is selected the closest solid color is used instead.  
   You must also be careful not to select colors that map to the solid
   color white since they will not be visible on the white background.

                    Figure 16 - Line Color Dialog

   To specify a line type, select "Line Type" from the "Options" menu.
   To select a line type, click on the desired type (or use the arrow
   keys).  The selected line type is displayed to the right.  Click
   on the "OK" button (or press Enter) to use the displayed line type.

                     Figure 17 - Line Type Dialog

   To specify a line width, select "Line Width" from the "Options"
   menu.  Enter the desired line width.  This value is specified in
   drawing units and its displayed width will vary depending on the
   current drawing area extents.  Specifying a width of 0 will cause
   the line to be drawn as thin as possible (1 pixel wide) no matter
   what the drawing area extents.

                    Figure 18 - Line Width Dialog

   One important limitation is only solid lines can have a width of
   more than one pixel.  If a line type other than solid is selected 
   then the current line width setting is ignored and the line is 
   drawn with the specified type but at a 0 width.
    
_____________________________________________________________________
                                 20 

                      DRAWING ELEMENT PROPERTIES
_____________________________________________________________________


   Setting Text Properties
   -----------------------
   Text strings have the following properties:

      1. Font name.
      2. Font style.
      3. Size.
      4. Effects.
      5. Color.
      6. Angle.
      7. Orientation.
      8. Justification.

   These properties can be specified before or during the input of a
   text element.  The selected properties remain in affect until
   another selection is made.  Whenever a text string is created it
   is displayed using the current text properties.  It will always be 
   displayed this way unless the properties are changed.  See the 
   section "Changing Drawing Element Properties" for more information.

   The font name is the main property affecting the appearance of a
   text string.  It determines how different characters in the
   string are drawn.  Windows comes with several built in fonts. 
   With version 3.1 of Windows TrueType fonts were introduced.  It
   is recommended you use these fonts exclusively.  The program
   defaults to allowing the selection of TrueType fonts only.  The
   TrueType fonts work much better with this program than some of the
   other Windows fonts.  

   To access the other fonts available to Windows click on the 
   "TrueType Fonts Only" item on the "Options" pull down.  This will 
   remove the check mark next to this item.  The next time you select 
   "Text Font" from the "Options" menu it will display all the fonts 
   available to Windows in the "Font Name" list.  When the check mark 
   is present to the left of "TrueType Fonts Only," only TrueType 
   fonts are listed by the "Text Font" option.  When there is no check 
   mark present then all fonts are listed.  The drawing may or may not 
   already contain fonts other than TrueType fonts.  This toggle does 
   not change existing text strings.

   The first 5 text properties are all specified using the "Text Font"   
   selection on the "Options" menu.  To select the font name, click on
   the desired font name from the list.  You can scroll the list up
   and down by clicking on the scroll arrows if the list is longer
   than the number displayed.  To select a font style, click on the
   desired style.  The font size, effects and color can be specified 
   in the same way.  A sample of the currently selected font is 
   displayed in the lower right of the dialog.  When you have input 
   the desired text properties click on the "OK" button.




_____________________________________________________________________
                                 21 

                      DRAWING ELEMENT PROPERTIES
_____________________________________________________________________


                       Figure 19 - Font Dialog

   The parameters in this dialog are pretty self-explanatory with the
   possible exception of the "Size" parameter.  These sizes are in
   points.  A point is 1/72 of an inch.  This specifies the size of
   the text when plotted.  The size which appears on the display will 
   vary depending on the currently specified plot scale and the 
   current drawing area extents.  When you specify a text size, it is
   converted to the units you are using in the drawing area using the 
   currently specified plot scale and then drawn with that size in the 
   drawing area.  For example, if you specified a 10 point font and 
   your current plot scale is 1 inch equals 100 drawing units then the 
   height in drawing units for the text would be 13.9 (10/72 X 100).
   If the y extent of the drawing area is 100 then the text will be 
   13.9% as tall as the y extent of the drawing area.  If the drawing
   is zoomed so that the y extent is 50 then the text will be 27.8%
   of the drawing area height.

                       Figure 20 - Text Example

   The text will always be plotted at a 10 point size (0.139") no
   matter what the plot scale or current drawing extents (unless the
   "Fit" plot option is used).

   The text angle specifies the rotation of the baseline of the text
   string in degrees counter-clockwise from the x axis.

                        Figure 21 - Text Angle

   The Windows raster fonts (i.e. Courier, Fixedsys, MS Sans Serif,
   MS Serif, Small Fonts, System and Terminal) will not rotate.

   The text orientation is not used by TrueType fonts so it is grayed
   out and unselectable on the menu if TrueType fonts only are
   specified.  The only fonts currently supplied with Windows which
   support orientation angles are the vector fonts: Modern, Script
   and Roman.  The orientation angle is the rotation of the
   individual characters of a text string in a counter-clockwise 
   direction from the x-axis.  The interaction between the baseline
   angle and the orientation angle for the vector fonts can be quite
   difficult to understand.  The figure below shows some of the most
   common uses of baseline and orientation angles with vector fonts.

                     Figure 22 - Text Orientation

   There are a couple of drawbacks to using the vector fonts.  One is
   the "Zoom Extents" command only uses the alignment point of vector 
   fonts in its calculations.  This means part or all of a text string 
   which uses a vector font may lay outside the drawing area even 
   after a "Zoom Extents" command.  The second drawback is you must



_____________________________________________________________________
                                 22 

                      DRAWING ELEMENT PROPERTIES
_____________________________________________________________________


   you must include the alignment point in your selection area in
   order to select a string using a vector font.

   The last property we will cover is text justification.  When you
   create a text element you are asked to input the alignment point.
   This point can represent different positions within the string
   depending on the current text justification setting.  The text 
   justification is initially set to "Top" and "Left" when the     
   program is first loaded.  To change this setting select "Text 
   Justification" from the "Options" menu.  The text justification 
   dialog allows you to specify one of three horizontal justification 
   points (Left, Center and Right) and one of three vertical 
   justification points (Top, Baseline and Bottom).  To select one 
   click on its radio button and then click on "OK".  

                Figure 23 - Text Justification Dialog
   
   The figure below shows all of the possible text justification points.

                    Figure 24 - Text Justification

   The following table summarizes the capabilities of the fonts that
   come with Windows.

                   True                  Scal-  Rotat.  Orient.  Fixed
   Font            Type  Vector  Raster  able   Angles  Angles   Pitch
   ----            ----  ------  ------  -----  ------  ------   -----
   Arial             X      X              X       X
   Courier New       X      X              X       X               X
   Symbol            X      X              X       X
   Times New Roman   X      X              X       X
   Wingdings         X      X              X       X
   Modern                   X              X       X       X
   Script                   X              X       X       X
   Roman                    X              X       X       X
   Fixedsys                         X                              X
   MS Sans Serif                    X
   MS Serif                         X
   Small Fonts                      X
   System                           X
   Terminal                         X                              X

                      TABLE 2 - Font Information

   A check mark for a font in the TrueType, Vector or Raster column 
   indicates what type of font it is.  A check in any of the following 
   columns means that feature is supported by the font.  The vector 
   fonts are scalable which means they can be increased or decreased 
   to any size.  Raster fonts come in discrete sizes.  Fixed pitch 
   fonts have a constant character width.



_____________________________________________________________________
                                 23 

                      DRAWING ELEMENT PROPERTIES
_____________________________________________________________________


   Most of these fonts also support the regular, bold, italic and
   bold italic font styles.  They all support the underline and
   strikeout effects as well as color.


   Setting Point Properties
   ------------------------
   Points have the following three properties:

      1. Color.
      2. Type.
      3. Size.

   These properties can be specified before or during the input of a
   point element.  The selected properties remain in affect until
   another selection is made.  Whenever a point is created, it is
   displayed using the current point color, type and size.  The point
   will always be displayed this way unless its properties are 
   changed.  See the section "Changing Drawing Element Properties" for 
   more information.

   Points can only be displayed in solid colors.  In other words, they
   cannot use dithered colors which use a pattern of different solid
   colors to produce the look of another color.  The number of solid
   colors that are available is dependent on the display device.

   To specify a point color, select "Point Color" from the "Options"
   menu.  To make a selection from the color input dialog simply click
   on the desired color (or highlight it using the arrow keys and
   press the spacebar).  Then select the "OK" button.  If a nonsolid 
   color is selected the closest solid color is used instead.  You
   must also be careful not to select colors that map to the solid
   color white since they will not be visible on the white background.

                    Figure 25 - Point Color Dialog

   To specify a point type, select "Point Type" from the "Options" 
   menu.  To select a point type click on the desired type (or use the 
   arrow keys).  The selected type is displayed to the right.  Click
   on the "OK" button (or press Enter) to use the displayed type.

                    Figure 26 - Point Type Dialog

   To specify a point size, select "Point Size" from the "Options"
   menu.  Enter the desired point size.  This value is specified in
   drawing units and its displayed size will vary depending on the
   current drawing area extents.

                    Figure 27 - Point Size Dialog




_____________________________________________________________________
                                 24 

                           FILE OPERATIONS
_____________________________________________________________________


   Saving The Drawing     
   ------------------
   There are 2 commands for saving the drawing, "Save" and "Save As",
   both are on the "File" pull down menu.  The "Save As" command
   allows you to specify a file name.  Once a file name has been 
   specified for a drawing, you save it to that same file by selecting 
   "Save" or by pressing CTRL+S.  There are no further prompts when 
   using the "Save" command.  The "Save" option is grayed out and 
   unselectable until a file name has been specified for the drawing 
   with the "Save As" option.  
   
   The "Save As" option brings up a file selection dialog box.  To
   specify a file name, select a drive from the drive list and a
   directory from the directories list.  Type in the name of the file 
   in the "File Name" box.  You do not have to specify an extension 
   for the file name.  If you do not specify one, the extension ".dwg" 
   will be appended to the name you enter.  It is recommended you use 
   a ".dwg" extension on all your drawing files so they will appear in 
   the list of file names in the file selection dialog.  If you enter 
   an existing file name, the program will warn you and ask if you 
   want to replace it.  Selecting "Yes" will completely replace the 
   contents of the file with the current drawing.  The previous 
   drawing will be lost.  The file name dialog will not allow you to 
   enter an invalid path or file name.  When the desired drive, path 
   and file name have been entered, select the "OK" button and the 
   current drawing will be saved to the given file.

                      Figure 28 - Save As Dialog

   When a drawing is saved all the undo levels are removed.  This
   means previous operations cannot be undone after a save has been 
   performed.  This is done to free up the memory used by the undo 
   feature.


   Opening An Existing Drawing     
   ---------------------------
   If you want to edit a drawing created previously, select the "Open" 
   command from the "File" menu.  This brings up the file selection 
   dialog.  Select the proper drive and directory from the drive and 
   directory lists and then select one of the files from the file name 
   list and click on the "OK" button.  The drawing in the given file 
   will then be displayed in the drawing area.  You must select an 
   existing file with this option.  You can now edit the elements in 
   the displayed drawing or add more elements if desired.

                       Figure 29 - Open Dialog






_____________________________________________________________________
                                 25 

                           FILE OPERATIONS
_____________________________________________________________________


   If you select the "Open" item from the "File" menu and the drawing
   you are currently working on has not been saved, a message box will 
   appear and ask if you want to save the current drawing. If "No" is
   selected, any changes made to the current drawing will be lost.  
   Selecting "Cancel," ends the "Open" command and returns you to the 
   current drawing.  If you select "Yes," the drawing will be saved to 
   the file name you specified previously.  If no previous name was 
   specified, you will be prompted for a name.  After saving the file, 
   the file open dialog will be displayed.

                 Figure 30 - File Exists Message Box


   Creating A New Drawing     
   ----------------------
   If you are currently editing a drawing and would like to start a
   new drawing, select "New" from the "File" menu.  The contents of
   the drawing area is cleared and you are placed in a blank drawing.

   If you select the "New" item from the "File" menu and the drawing
   you are currently working on has not been saved, a message box will 
   appear and ask if you want to save the current drawing. If "No" is
   selected, any changes made to the current drawing will be lost.  
   Selecting "Cancel," ends the "New" command and returns you to the 
   current drawing.  If you select "Yes," the drawing will be saved to 
   the file name you specified previously.  If no previous name was 
   specified, you will be prompted for a name.  After saving the file, 
   you are placed in a new drawing.

























_____________________________________________________________________
                                 26 

                               PLOTTING
_____________________________________________________________________


   Printing / Plotting The Drawing     
   -------------------------------
   The drawing may be plotted to the current print device using the  
   "Plot" command on the "File" menu.  The print device is set using
   the Windows Control Panel and it can be a printer or a plotter.
   When this option is selected, a plot scale dialog is displayed.  
   The drawing may be plotted to scale or the current drawing area
   can be "fit" to the available plot area on the output device.

                    Figure 31 - Plot Scale Dialog

   To fit the drawing area to the plot page click on the "Fit plot to 
   page" check box so that the box is checked and then select the "OK" 
   button.  The current drawing area will be sent to the current print 
   device and displayed as large as possible on the page.  The scale 
   of the drawing will be adjusted to allow the drawing area to be 
   displayed as large as possible.  The plot scale value set in the 
   dialog is ignored.

   To plot the drawing to scale, enter the desired scale in the dialog 
   and select the "OK" button.  The drawing will be plotted at the 
   scale specified.  The "Fit Plot to page" check box must be 
   unchecked for this plot method.

   For both of these plot methods, the origin of the plot is set to
   the lower-left corner of the drawing area.  This means you must
   zoom and pan the drawing using the "View" menu to get the desired
   plot origin point at the lower left of the drawing area.  The 
   figure below demonstrates how the drawing area is mapped to the 
   plot page using these two methods.

               Figure 32 - Drawing To Plot Page Mapping

   The "Reverse Text Angles" check box allows you to use the negative
   of the existing text angle during plotting.  This is for plot 
   drivers that interpret text angles differently.  If your plot comes
   out with incorrect text angles then try checking this box.

   When the "OK" button is pressed in the plot scale dialog, another
   dialog box is displayed while the plot is being created.  This
   dialog has one button, "Cancel".  Pressing this button will cause
   the plot operation to be canceled.  If this button is not selected
   then the plot is created and sent to the Print Manager.  For more
   information on the Print Manager see your Windows manual.

                      Figure 33 - Cancel Dialog

   If you have configured Windows to use "English" units, your plot 
   scale specifies the number of drawing units per inch.  If you have 
   configured Windows to use "Metric" units, the plot scale specifies 
   the number of drawing units per centimeter.  The "International" 
  

_____________________________________________________________________
                                 27 

                               PLOTTING
_____________________________________________________________________


   option on the Windows Control Panel is used to set this parameter.
   Select the desired units from the "Measurement" field.  See your 
   Windows manual for more information.

   This program does not care what units you use in the drawing.  They
   can be anything.  The plot scale is used to relate the drawing
   units to known sizes.














































_____________________________________________________________________
                                 28 

                           VIEW OPERATIONS
_____________________________________________________________________


   The view options are used to display different parts of your
   drawing.  They can be used to look at an area in detail or the
   drawing as a whole.  They do not change the actual coordinates
   or dimensions of the drawing elements.  They only allow you to
   view them in different ways.


   Zooming In On An Area Of The Drawing
   ------------------------------------
   To see an area of the drawing in more detail, use the "Zoom
   Window" option on the "View" menu.  With this option you input
   a rectangular area within the display area and then that area
   is enlarged to cover the entire display area.

                       Figure 34 - Zoom Window

   When you select "Zoom Window" from the "View" menu or press Ctrl+W
   the prompt area changes to:

      Select first corner of window
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   You may select any corner of the area you want to enlarge.  Once
   you have selected the first corner the prompt changes to:

      Select second point

   As you move the cursor, a box is drawn from the first point entered 
   to the current cursor position.  This box represents the area that 
   will be enlarged if the current cursor position is selected.  When 
   the second point is selected, the input area is enlarged as much as 
   possible while still displaying the entire area selected.  If the 
   area you input is of a different shape than the shape of the 
   current drawing area, you may get some elements in the drawing area 
   that were not in the area selected and the enlargement may not be 
   as much as expected.  Keep in mind, this command displays the 
   entire area selected at a minimum.  It will display more in one 
   direction if necessary to display the entire area in the other 
   direction.

               Figure 35 - Effects Of Zoom Window Shape


   Displaying All The Elements In The Drawing
   ------------------------------------------
   To display all the elements in the drawing within the drawing area,
   use the "Zoom Extents" command on the "View" menu.  This command
   will display all the drawing elements as large as possible within
   the drawing area.



_____________________________________________________________________
                                 29 

                           VIEW OPERATIONS
_____________________________________________________________________


   Restoring A Previous View
   -------------------------
   To display the previous view, select "Zoom Previous" from the 
   "View" menu or press Ctrl+R.  If there is no previous view to 
   restore, the "Zoom Previous" option is grayed and unselectable.  Up 
   to 10 previous views are saved and can be restored.


   Zooming In And Out
   ------------------
   The drawing may be zoomed in (enlarged) and out (shrunk) using the 
   "Zoom Factor" option on the "View" menu.  When you select this
   option a dialog box appears which prompts you for a zoom factor.
   To zoom out, specify a number greater than 1.  To zoom in, specify 
   a number greater than zero but less than one.  For example, 
   specifying a value of 2 causes the drawing area extents to be twice 
   their current size and the drawing elements appear to be half their 
   original size.  Specifying a value of 0.5 causes the drawing area 
   extents to be half their current size and drawing elements appear 
   to be twice their original size.

   The current center point of the display area remains in the center
   after the zoom.

                       Figure 36 - Zoom Factor


   Moving The Drawing Right/Left/Up/Down In The Drawing Area
   ---------------------------------------------------------  
   The drawing elements may be moved right, left, up and down in the 
   drawing area while still maintaining the current zoom factor by
   using the "Pan" option on the "View" menu.  Selecting this option
   changes the prompt area to:

      Select first point to define the displacement
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   Pick a position within the drawing area you want to move elsewhere
   The first line of the prompt area changes to:

      Select second point

   Pick the position you would like the first point to be moved to
   within the drawing.  The drawing area will be redrawn with the 
   drawing elements shifted by the specified amount.

                           Figure 37 - Pan





_____________________________________________________________________
                                 30 

                           VIEW OPERATIONS
_____________________________________________________________________


   Redraw: Cleaning Up The Drawing Area
   ------------------------------------ 
   During the course of drawing and editing you may get extra tic  
   marks and such within the drawing area which are not actually part
   of the drawing.  To erase the drawing area and redraw only the 
   elements actually in the drawing, select "Redraw" from the "View"
   menu.














































_____________________________________________________________________
                                 31 

                           EDIT OPERATIONS
_____________________________________________________________________


   Selecting Drawing Elements
   --------------------------
   All of the options on the "Edit" menu (with the exception of 
   "Undo", "Select" and "Paste") require one or more drawing elements 
   be selected first.  They are grayed out and unselectable if no 
   drawing elements are selected.  To select elements, pick the 
   "Select" option off of the "Edit" menu.  The prompt area will then 
   display:

      Select first corner of selection area
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   When selecting drawing elements you input opposite corners of a
   rectangular area and all elements that fall within this area or
   cross it will be selected.  You may pick any corner of the area
   first.  After selecting the first corner the first line of the 
   prompt area becomes:

      Select second point

   Now you must enter the diagonally opposite corner of the selection
   area rectangle.  As you move the cursor, a box is displayed with
   one corner at your first selection point and the opposite corner
   at your current cursor position.  This represents the area which
   would be used for the selection if the current cursor position was
   used for the second point.  

                    Figure 38 - Selecting Elements

   When the second point is selected, the program displays the
   elements which are inside or cross the selection area in the 
   selection color.  These are the selected elements.  The selection
   color is initially set to light gray but it can be changed using
   the "Selection Set Color" item on the "Options" menu.


   Moving Drawing Elements
   -----------------------
   Elements within the drawing can be moved from one position to
   another by using a combination of the "Cut" and "Paste" options on
   the "Edit" menu.  To move a drawing element, first select the
   element(s) you want to move.  See the section on selecting drawing
   elements for information on how to do this.

   Once the desired elements have been selected pick the "Cut"
   command off of the "Edit" menu.  The prompt area will display:

      Select cut reference point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...


_____________________________________________________________________
                                 32 

                           EDIT OPERATIONS
_____________________________________________________________________


   The point you pick will correspond to the alignment point you
   select when you perform the paste operation.  Once the reference
   point has been entered the selected elements will be erased from
   the display and deleted from the drawing.  
   
   Next select "Paste" from the "Edit" menu.  The prompt line will 
   display:

      Select paste alignment point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   As mentioned previosly, the paste alignment point corresponds to 
   the cut reference point.   When an alignment point is selected, the
   elements cut previously are drawn at the new position and added to
   the drawing.

                 Figure 39 - Moving Drawing Elements

   The elements may be pasted as many times as desired at any
   location in the drawing area.  To end the paste command select
   another command from the menu or click the right mouse button and
   select "End" from the dialog.

   The cut operation copies the selected elements to the Windows
   Clipboard.  The paste operation retrieves them from the Clipboard
   and inserts them into the drawing.  The "Paste" option is grayed
   out and unselectable if no data has been cut or copied to the 
   clipboard.  This program uses a private data format when storing
   data in the clipboard so it can store all the information about 
   the drawing elements (i.e. actual coordinates, line type, width, 
   color, text properties, etc.).  The appendix on the "Clipboard Data 
   Format" contains a definition of how the data is stored.


   Copying Drawing Elements Within The Same Drawing
   ------------------------------------------------
   Elements within the drawing can be copied to another position by
   using a combination of the "Copy" and "Paste" options on
   the "Edit" menu.  To copy a drawing element first select the
   element(s) you want to move.  See the section on selecting drawing
   elements for information on how to do this.

   Once the desired elements have been selected pick the "Copy"
   command off of the "Edit" menu.  The prompt are will display:

      Select copy reference point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...




_____________________________________________________________________
                                 33 

                           EDIT OPERATIONS
_____________________________________________________________________


   The point you pick will correspond to the alignment point you
   select when you perform the paste operation.  Unlike the "Cut"  
   command, the "Copy" command does not erase the selected elements.
   They remain in the drawing.
   
   Next select "Paste" from the "Edit" menu.  The prompt line will 
   display:

      Select paste alignment point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   As mentioned previously, the paste alignment point corresponds to 
   the copy reference point.   When an alignment point is selected, 
   the elements copied previously are drawn at the new position and 
   added to the drawing.

                 Figure 40 - Copying Drawing Elements

   The elements may be pasted as many times as desired at any
   location in the drawing area.  To end the paste command, select
   another command from the menu or click the right mouse button and
   select "End" from the dialog.

   The copy operation copies the selected elements to the Windows
   Clipboard.  The paste operation retrieves them from the Clipboard
   and inserts them into the drawing.  The "Paste" option is grayed
   out and unselectable if no data has been cut or copied to the 
   clipboard.  This program uses a private data format when storing
   data in the clipboard so it can store all the information about 
   the drawing elements (i.e. actual coordinates, line type, width, 
   color, text properties, etc.).  The appendix on the "Clipboard Data
   Format" contains a definition of how the data is stored.


   Moving / Copying Drawing Elements Between Drawings
   --------------------------------------------------   
   Drawing elements can be moved and copied between drawings as well
   as within the same drawing.  To do this perform the cut or copy
   operation just as you do for moving/copying elements within the 
   same drawing.  Then load another copy of the CAD Vantage program 
   and bring up the drawing you wish to move/copy the elements to.  
   Then paste the elements into that drawing.  Alternatively, instead 
   of loading another copy of CAD Vantage you can open the drawing you 
   want to paste into within the current instance of the program and 
   then paste the elements.  The first method requires more memory but 
   is much more convenient, especially if you need to perform multiple
   copy operations.

        Figure 41 - Copying Drawing Elements Between Drawings



_____________________________________________________________________
                                 34 

                           EDIT OPERATIONS
_____________________________________________________________________


   Deleting Drawing Elements
   -------------------------
   To delete drawing elements, first select the elements to delete 
   (see the section on selecting elements).  Then select "Delete"
   from the "Edit" menu.  The selected elements are deleted from the
   drawing and erased from the drawing area.


   Rotating Drawing Elements
   -------------------------
   To rotate drawing element, first select the elements to rotate 
   (see the section on selecting elements).  Then select "Rotate"
   from the "Edit" menu.  The prompt area then displays:

      Select rotation center point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   After picking a position, a dialog is displayed which allows you to
   enter the desired rotation angle.  Enter the angle in degrees 
   counter-clockwise and click on the "OK" button.  The selected 
   elements will then be rotated about the given center point by the 
   given angle.

                Figure 42 - Rotating Drawing Elements

   The program continues to prompt you for a rotation center point.
   You can pick another point and rotate the elements again or end  
   the command by clicking the right mouse button and selecting "End"
   from the dialog.


   Scaling Drawing Elements
   ------------------------
   This command is used to increase or decrease the size of drawing
   elements.

   To scale drawing elements, first select the elements to scale 
   (see the section on selecting elements).  Then select "Scale"
   from the "Edit" menu.  The prompt area then displays:

      Select scale reference point
      MOUSE: position cursor, press left button. Right button for...
      KEYBOARD: position with arrow keys, press Enter. F2 for...

   After picking a position, a dialog is displayed which allows you to 
   enter the desired scale factor.  A factor greater than one 
   increases the size of the selected elements and a factor greater 
   than 0 but less than 1 reduces the size of the elements.  For 
   example a scale factor of 2 doubles the size of the elements.  A 
   scale factor of 0.5 halves the size of the elements.  When the 


_____________________________________________________________________
                                 35 

                           EDIT OPERATIONS
_____________________________________________________________________


   desired scale factor has been input, click on the "OK" button.  The
   selected elements will then be scaled about the given reference 
   point by the input scale factor.

                 Figure 43 - Scaling Drawing Elements

   The program continues to prompt you for a scale reference point.
   You can pick another point and scale the elements again or end  
   the command by clicking the right mouse button and selecting "End"
   from the dialog.


   Changing Drawing Element Properties
   -----------------------------------
   To change the properties of drawing elements, first select the 
   elements to change.  Then select "Change" from the "Edit" menu or 
   press Ctrl+H.  This will bring up a dialog which allows you to 
   select what property to change.  You can only change one property 
   at a time.  To select a property, click on its radio button and 
   then click on the "OK" button.

                      Figure 44 - Change Dialog

   The program will bring up a dialog which allows you to specify
   the new property.  These dialogs are the same ones used in the
   corresponding selections on the "Options" menu.  See the
   appropriate section under "Drawing Element Properties" in this
   manual for more information on using these dialogs.

   When the new property is specified, the selected elements are
   changed.  You will have to clear the selection set (see that
   section) in order to see color changes since the current selection
   set is always drawn in the selection set color.


   Listing Drawing Elements
   ------------------------
   With the "List" option on the "Edit" pull down menu you can
   display the properties for selected elements.  First select the
   elements to list and then pick "List" from the "Edit" menu.
   A dialog with the properties for the first element in the
   selection set is displayed.  Select "OK" to display the next
   element's properties or "Cancel" to quit.

                       Figure 45 - List Dialog








_____________________________________________________________________
                                 36 

                           EDIT OPERATIONS
_____________________________________________________________________


   Clearing The Current Selection
   ------------------------------
   To clear the current selection and display the selected drawing
   elements in their actual color, select "Clear Selection" from the
   "Edit" menu.


   Undoing Changes To The Drawing 
   ------------------------------
   The "Undo" option on the "Edit" pull down menu can be used to undo
   edit operations.  If there are no edit operations which can be
   undone, the "Undo" option is grayed and unselectable.

   All of the commands on the "Edit" menu can be undone with the   
   exception of "Select", "Copy", "List" and "Clear Selection".  You 
   also cannot undo an "Undo" command.  The commands on the "Draw" 
   menu can also all be undone.




































_____________________________________________________________________
                                 37 

                       CONFIGURATION OPERATIONS
_____________________________________________________________________


   Changing The Selection Set Color
   --------------------------------
   The program displays selected elements in a certain color.  To
   change the color, pick the "Selection Set Color" item off of the 
   "Options" menu.  This will bring up the color selection dialog. 
   Select the new color from this menu and click on the "OK" button.
   The selection set will now be displayed in that color.


   Setting The Plot Scale
   ----------------------
   The "Plot Scale" selection on the "Options" menu allows you to set
   a plot scale.  This selection brings up a plot scale dialog.  This
   dialog is also displayed when "Plot" is selected from the "File"
   menu.  There are 2 differences between them, however.  The "Fit
   plot to page" is grayed out and unselectable in the "Options"
   version of the plot scale dialog.  This version also does not try
   to plot the drawing when the "OK" button is selected.  This option
   is placed here so that a plot scale can be set without plotting
   the drawing.  Plot scale affects the size of the text in the
   drawing area.  This option allows the plot scale to be changed 
   if the text is too small or large.  See the section on text 
   properties for a further explanation of text size and plot scale.


   Changing The Cursor Step Size
   -----------------------------
   The cursor moves a certain number of pixels on the display when an
   arrow key is pressed.  The cursor increment or step size specifies
   how many pixels it moves.  This value is initially set to 5. 
   Larger values cause the cursor to move more quickly across the
   display but make it more difficult to position the cursor at
   desired coordinates.  Smaller values have the opposite effect.

   To change this value select "Cursor Increment" off of the "Options"
   menu.  Enter the desired cursor increment (greater than 0) and
   click on the "OK" button.  The cursor will then move by that
   number of pixels when an arrow key is pressed and the cursor is in
   the drawing area.














_____________________________________________________________________
                                 38 

                                 HELP
_____________________________________________________________________


   Getting Help On-Line
   --------------------
   To get help on different aspects of this program using the Windows
   help facility, select "Help" from the "Help" pull down menu or 
   press F1.  See your Windows manual for more information on using 
   this help facility.


   Exiting The Program
   -------------------
   To exit the program, simply select "Exit" from the "File" menu.

   If you select the "Exit" item from the "File" menu and the drawing
   you are currently working on has not been saved, a message box will 
   appear and ask if you want to save the current drawing. If "No" is
   selected, any changes made to the current drawing will be lost.  
   Selecting "Cancel," ends the "Exit" command and returns you to the 
   current drawing.  If you select "Yes," the drawing will be saved to 
   the file name you specified previously.  If no previous name was 
   specified, you will be prompted for a name.  After saving the file, 
   the program will exit.
































_____________________________________________________________________
                                 39 

                              APPENDIXES
_____________________________________________________________________


   Quick Key Summary
   -----------------
   Quick keys can be used as a short-cut instead of selecting the
   corresponding options off of the menu.  The table below summarizes
   the quick keys that can be used in this program and what they do.

   Key      Description
   ---      -----------
   Ctrl+S   Save the drawing to the current file.
   Ctrl+Z   Undo the last edit operation or draw operation.
   Ctrl+E   Select drawing elements.
   Ctrl+X   Cut the current selection to the clipboard.
   Ctrl+C   Copy the current selection to the clipboard.
   Ctrl+V   Paste the contents of the clipboard.
   Ctrl+H   Change properties of the current selection.
   Ctrl+L   Draw a line.
   Ctrl+A   Draw an arc.
   Ctrl+I   Draw a circle.
   Ctrl+P   Draw a point.
   Ctrl+T   Draw a text string.
   Ctrl+W   Zoom window.
   Ctrl+R   Zoom previous.
   F2       Brings up the coordinate input dialog when the program is
            prompting for a position.
   F1       Brings up the Windows help facility.


   Clipboard Format
   ----------------
   The clipboard data used by this program is stored in binary format.
   It is registered with Windows using the following text string:

      CADV Vector Graphics

   The first integer gives the number of font table entries.  This is
   followed by 54 bytes for each font table entry (font id, font index 
   and LOGFONT structure).  Following the font table entries are the 
   xy coordinates of the user selected reference point.  Following 
   that are the actual drawing elements.  They start with a type 
   identifier and are followed by a specific number of parameters 
   depending on the type.  The drawing elements can be in any order.  
   They are terminated by a type value of 0.

   Type     Bytes  Description
   ----     -----  -----------
   int         2   Number of fonts that follow.
   int         2   Type. Font table entry = 13.  
   int         2   Font index.
   LOGFONT    50   Logical font structure defined in Windows SDK.




_____________________________________________________________________
                                 40 

                              APPENDIXES
_____________________________________________________________________


   Type     Bytes  Description
   ----     -----  -----------
   double      8   X-coordinate of user selected reference point.
   double      8   Y-coordinate of user selected reference point.

   int         2   Type.  Line = 1.
   int         2   Reserved.
   long        4   RGB color value.
   double      8   X-coordinate of first end.
   double      8   Y-coordinate of first end.
   int         2   Line type.  Uses the standard Windows GDI values.
   double      8   Line width.
   double      8   X-coordinate of second end.
   double      8   Y-coordinate of second end.

   int         2   Type.  Arc = 2.
   int         2   Reserved.
   long        4   RGB color value.
   double      8   X-coordinate of center.
   double      8   Y-coordinate of center.
   int         2   Line type.  Uses the standard Windows GDI values.
   double      8   Line width.
   double      8   Start angle (radians).
   double      8   End angle (radians).
   double      8   Radius.

   int         2   Type.  Circle = 6.
   int         2   Reserved.
   long        4   RGB color value.
   double      8   X-coordinate of center.
   double      8   Y-coordinate of center.
   int         2   Line type.  Uses the standard Windows GDI values.
   double      8   Line width.
   double      8   Radius.

   int         2   Type.  Point = 7.
   int         2   Reserved.
   long        4   RGB color value.
   double      8   X-coordinate of point.
   double      8   Y-coordinate of point.
   int         2   Point type.  1 = plus, 2 = x, 3 = circle, 4 = box.
   double      8   Size.











_____________________________________________________________________
                                 41 

                              APPENDIXES
_____________________________________________________________________


   Type     Bytes  Description
   ----     -----  -----------
   int         2   Type.  Text = 8.
   int         2   Reserved.
   long        4   RGB color value.
   double      8   X-coordinate of text alignment point.
   double      8   Y-coordinate of text alignment point.
   int         2   Font index.  Correlates to the font table index.
   double      8   Height (inches).
   double      8   Baseline angle (radians).
   double      8   Orientation angle (radians).
   int         2   Justification.  Standard Windows GDI value.
   int         2   Length of text string.
   char        ?   The actual text string.  Length is given above.

   int         2   Type.  End of data = 0.


   Memory Management
   -----------------
   This program allocates memory for the drawing elements in blocks.
   The default block size is 50k and the default number of blocks is
   100.  This allows a potential drawing size of approximately 50M.
   Both of these parameters can be changed by inputing different
   values on the command line.  To do this, simply add the desired
   block size and then the number of blocks at the end of the command
   line.  There must be a space between the end of the command line
   and the block size and also a space between the block size and the
   number of blocks.  For example:

      c:\cadv\cadv 64000 200

   would set the block size to 64000 bytes and the number of blocks to 
   200.  You must specify both parameters.  You cannot just specify a 
   block size.  The block size must be between 1024 and 64511.  The 
   number of blocks must be greater than 0 and less than 64511.

   When the program needs another memory block and cannot allocate it,
   you receive the message, "Out of memory. Save your drawing".       
   Saving the drawing will free the memory used by the undo feature.
   It also deletes the current selection and frees the memory used by 
   it.  Then it compacts the drawing in memory to remove any wasted
   space due to deleted elements.  If you get another out of memory
   message immediately after saving your drawing then your drawing
   cannot be made any larger without providing more memory to the
   program.  Close some other applications or increase your available
   disk swap space in enhanced mode.  If you are using a system with
   very little available memory then you may need to decrease the 
   block size parameter to make more efficient use of memory.

   If you get the message, "Memory table overflow" then you may need
   to increase the number of blocks parameter on the command line.

_____________________________________________________________________
                                 42 

                               GLOSSARY
_____________________________________________________________________


   Glossary
   --------
   CAD                   Computer Aided Design.
   Current Selection     All the drawing elements that have been     
                         selected using the "Select" command.       
   Cursor Increment      The number of pixels the cursor moves when a
                         keyboard arrow key is pressed.
   Cursor Step           Same as "Cursor Increment".
   Dialog Box            A windows pop up menu which contains input
                         fields, check boxes, buttons and so on.
   Drawing Area Extents  The range of coordinates displayed in the 
                         drawing area.
   Drawing Extents       The range of coordinates covered by all the
                         drawing elements.
   Drawing Element       One of the 5 basic parts of a drawing: lines,
                         arcs, circles, points and text.
   Drawing Units         The dimensions used in the drawing area.   
                         They can be anything (e.g. feet,meters,etc.)
   Font                  A particular style of text.
   K (Kilobyte)          1024 bytes of memory or disk space.
   M (Meg or Megabyte)   1024 K bytes of memory or disk space.
   Origin                The (0,0) point of an xy coordinate system.
   Pan                   To shift the view of the drawing within the
                         drawing area left, right, up or down.
   Plot Units            The dimensions used to specify sizes on the
                         plot (inches or centimeters).
   Quick Key             A short-cut key sequence which can be used 
                         instead of selecting a command from a menu.
   Raster                In this manual it denotes graphics defined
                         by a series of points as opposed to "Vector".  
                         For example, a line is defined by a series of
                         points.
   Selected Elements     Same as "Current Selection".
   Selection Set         Same as "Current Selection".
   Text Angle            The rotation, counter-clockwise, of the
                         baseline of a text string.
   Text Justification    How the text is aligned.  For example at the
                         left top corner.
   Text Orientation      The rotation, counter-clockwise, of the 
                         individual characters in a text string.
   Vector                In this manual it denotes graphics defined
                         by their end points as opposed to "Raster".
                         For example, a line is defined by 2 points.
   Zooming               Enlarging or decreasing the view of the
                         drawing.








_____________________________________________________________________
                                 43 

```
{% endraw %}

## README.TXT

{% raw %}
```
                       CAD Vantage 1.00

This file contains installation instructions and other important
information.

Shareware distributors who wish to distribute this program should
read the file VENDOR.TXT for information on our distribution
policy.  This file also contains information that may help you in
evaluating and writing descriptions for this software in your
catalog, on your BBS or however you distribute shareware.

The file SHAREWAR.TXT describes what shareware is, for those who
may be new to shareware.  It also describes our registration
policy, how to go about registering, what you get with registra-
tion and the ASP Ombudsman statement.  The Association of Shareware
Professionals (ASP) sets standards for shareware authors (like
Gamma Software) to ensure that shareware works for you (the end
user).


INSTALLING / RUNNING THE PROGRAM
--------------------------------
Since this program is distributed through shareware we cannot
completely control the format in which you receive your copy.  The
first step in installing this software is to get it into a
directory on your hard disk.  All the files must be in the same
directory.  The steps necessary to do this will vary depending on
the format in which you received your copy.

This may involve uncompressing the files if you received them
in a compressed format.  For example if there is a file with a
.ZIP, .ARC or .LZH extension (these are the most common, there are
others).  The vendor should provide you with the necessary
instructions and tools to accomplish this.

If the files are not compressed then you can simply copy them to a
directory on your hard disk.  You can accomplish this using the
Windows File Manager.  See your Windows manual for information on
how to make a directory and copy the files.

Once the files are in a directory on your hard disk you can run
the program by selecting "Run" from the "File" menu on the 
Program Mananger menu bar.  Then type the following in the
"Command Line" box.

   C:\CADV\CADV

Replace the path "C:\CADV\" with the path in which you installed
CAD Vantage.  Then select the "OK" button.  The program will then 
load.
                               
The first screen has a brief message describing shareware and has
options for registering and bringing up a list of what you get
with registration.  You are initially placed in the "Enter X to
continue." field.  To continue on to the rest of the program
simply type the letter that follows "Enter" (note - it must be
capital).

At this point you should probably go through the "Getting Started"
section of the manual to get a brief overview of the program.


PRINTING THE MANUAL
-------------------
To print the manual click on the MS-DOS icon in the Main Program
Manager group.  At the DOS prompt change to the drive and
directory that contains the CAD Vantage software and type:

   PRINT MANUAL.TXT

This will send the manual to the printer.  Make sure the printer
is on and on-line before executing this command.  The manual
takes around 50 pages to print.
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
                         INVOICE  #CV0010000001

   Name: _________________________________________________________

Company: _________________________________________________________

Address: _________________________________________________________

         _________________________________________________________

         _________________________________________________________

Country: _________________________________________________________

  Phone: _________________________________________________________

Qty:                   Unit price          Total       

 1  CAD Vantage          $25.00           $25.00   
                                                 
3% sales tax (CO residents only)  $0.75 $________
                                                 
Add $10.00 for overnight mail    $10.00 $________
                                                 
Add $5.00 outside the U.S.        $5.00 $________
(except Canada and Mexico)
                             Total      $________

Include a check or money order for the total above or complete the
following credit card information.  Amounts are in dollars US.

___  VISA     ___ MasterCard

Credit Card # ________________________

Expiration date: _____________________

Name as it appears on card: ______________________________________

Cardholder's Signature: __________________________________________
(Must be signed.)

Specify disk size:    Mail to:    Gamma Software        
                                  P.O. Box 8191         
         ___ 5.25"                Fort Collins, CO 80526
                                  U.S.A.
         ___ 3.5"     Credit card orders may be taken by phone at:
                                  800-747-9960  or  303-490-2928
Date: ____________    
                      Site licenses available.  Call for details.
```
{% endraw %}

## SHAREWAR.TXT

{% raw %}
```
DEFINITION OF SHAREWARE   
-----------------------   
Shareware distribution gives users a chance to try software   
before buying it. If you try a Shareware program and continue   
using it, you are expected to register. Individual programs   
differ on details -- some request registration while others   
require it, some specify a maximum trial period. With   
registration, you get anything from the simple right to continue  
using the software to an updated program with printed manual.   

Copyright laws apply to both Shareware and commercial software,   
and the copyright holder retains all rights, with a few specific  
exceptions as stated below. Shareware authors are accomplished   
programmers, just like commercial authors, and the programs are   
of comparable quality. (In both cases, there are good programs   
and bad ones!) The main difference is in the method of   
distribution. The author specifically grants the right to copy   
and distribute the software, either to all and sundry or to a   
specific group. For example, some authors require written   
permission before a commercial disk vendor may copy their   
Shareware.   

Shareware is a distribution method, not a type of software. You   
should find software that suits your needs and pocketbook,   
whether it's commercial or Shareware. The Shareware system makes  
fitting your needs easier, because you can try before you buy.   
And because the overhead is low, prices are low also. Shareware   
has the ultimate money-back guarantee -- if you don't use the   
product, you don't pay for it.   


REGISTRATION AGREEMENT
----------------------   
CAD Vantage is a "shareware program" and is provided at no charge 
to the user for evaluation.  Feel free to share it with your 
friends, but please do not give it away altered or as part of 
another system.  The essence of "user-supported" software is to 
provide personal computer users with quality software without high
prices, and yet to provide incentive for programmers to continue 
to develop new products.  This is not free software, if you 
continue to use CAD Vantage after a reasonable trial period, you 
MUST make a registration payment of $25.00 to Gamma Software or 
discontinue use.  In order for Gamma Software to be able to 
continue developing this product we must receive support from 
those people who use it.  We receive no portion of any fees paid 
to shareware distributors.
   
If you do not continue to use the program, but would like to offer
suggestions for future changes/enhancements to the program that   
would make it useful to you then send them to the address below.  
If any of your suggestions are implemented and you would like to  
be notified when they are made then indicate such and also include
your address or Compuserve ID.   
   
The $25.00 registration fee will license one copy for use on any 
one computer at any one time.
   
Commercial users of CAD Vantage must register and pay for their 
copies of CAD Vantage within 30 days of first use or their license
is withdrawn.  Site-Licenses available.  Call for details.   
                                              
CAD Vantage cannot be distributed for any kind of remuneration.   
See the file VENDOR.TXT for distribution requirements.   
   
You are encouraged to pass a copy of CAD Vantage along to your
friends for evaluation.  Please encourage them to register their  
copy if they find that they can use it.   
   

HOW TO REGISTER
---------------   
When you execute the shareware version of the CAD Vantage program 
a shareware registration screen is displayed at the beginning of  
the program.  This screen describes the registration policy and   
at the bottom of the screen are two buttons.  Press the TAB key   
to highlight the "Register" option and press Enter or click the   
register button with the mouse.  Then fill in the information on 
the registration menu and select the "Print" button (make sure 
your printer is on and on-line).  Select the "Continue" button to 
exit.   
   
If you prefer you can print the registration invoice directly by  
typing the following command:    
   "PRINT REGISTER.TXT"   
at a DOS prompt (while in the CAD Vantage directory).  Or you can 
highlight the file REGISTER.TXT in the file manager and select    
"Print" from the "File" menu.  Then fill in the invoice.   
   
Once the invoice has been completed mail it to:
   
                     Gamma Software
                     P.O. Box 8191   
                     Fort Collins, CO 80526   
   
along with your payment or credit card information.
   
A quicker way to register CAD Vantage is to call (800) 747-9960 or
(303) 490-2928 and we will take your credit card information over 
the phone and ship your order.   
   
Purchase orders and COD orders are not accepted.

   
WHAT YOU GET WITH REGISTRATION
------------------------------   
   - The latest version of the software.   
   - Elimination of all shareware messages.   
   - A printed manual.   
   - A FREE DOS time management program ($35 value).   
   - A FREE DOS time/date display TSR ($10 value).    
   - Notification of the next update.   
   - Low cost upgrades.   
   - A good feeling knowing you are supporting shareware.   
   

                         _______
                    ____|__     |                (R)   
                 --|       |    |-------------------   
                   |   ____|__  |  Association of   
                   |  |       |_|  Shareware   
                   |__|   o   |    Professionals   
                 -----|   |   |---------------------   
                      |___|___|    MEMBER   
   

ASP STATEMENT
-------------   
This program is produced by a member of the Association of 
Shareware Professionals (ASP).  ASP wants to make sure that the 
shareware principle works for you. If you are unable to resolve a 
shareware-related problem with an ASP member by contacting the 
member directly, ASP may be able to help. The ASP Ombudsman can 
help you resolve a dispute or problem with an ASP member, but does
not provide technical support for members' products.  Please write
to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442 or 
send a CompuServe message via CompuServe Mail to ASP Ombudsman 
70007,3536.   
   
```
{% endraw %}

## VENDOR.TXT

{% raw %}
```
                SHAREWARE DISK VENDOR / SYSOP INFORMATION
__________________________________________________________________
                       CAD Vantage     
                       Version 1.00     
       Suggested Filename:  CADV100.???     
       Description: CAD Program for Windows     
       Keywords: CAD WINDOWS GRAPHICS COMPUTER AIDED DESIGN
       Type of Program: Shareware     
       Registration Fee: $25 US     
       System: Windows 3.1     
       Member of ASP     
       What is Received with Registration:      
          Latest version on disk      Upgrade notice     
          Printed manual              Phone/BBS/mail support 
          Bonus programs              Shareware msg's removed
       Company:    Gamma Software     
                   P.O. Box 8191     
                   Fort Collins, CO 80526     
       Phone:      (800) 747-9960 or (303) 490-2928     
       Compuserve: 73737,1721     
__________________________________________________________________

The first affordable CAD program for Windows.  It provides a wide 
range of functionality in an easy to use package.  Edit options 
include: select, cut, copy, paste, rotate, scale and undo. Drawing
elements include: lines, arcs, circles, points and text.  Line 
properties include: type, width and color. Full text font support.
Scaled plots, on-line help, element snaps, zoom, pan and much more.  
Gamma Software $25.00.  Windows 3.1 required.

See the introduction in the manual "MANUAL.TXT" for a more 
detailed description.

System Requirements
-------------------
   - Windows 3.1 and a system capable of running it:
     - Personal computer (286 or better).
     - 640K conventional memory and at least 256K extended memory.
     - DOS 3.1 or later.
     - Windows supported display.
     - Hard disk with at least 6MB of free disk space.
     - Floppy drive.
     - A Windows supported printer, mouse and color display are
       highly recommended.
  Note - this program will NOT work with Windows 3.0 or previous 
  versions of Windows.

File List / Description
-----------------------
  CADV     EXE    Main program.
  SAMPLE   DWG    Sample drawing.
  CADV     HLP    Help file.
  MANUAL   TXT    Program manual.
  REGISTER TXT    Registration invoice.
  README   TXT    Installation instructions.
  VENDOR   TXT    This file.
  SHAREWAR TXT    Registration information.
  FILE_ID  DIZ    BBS description file.

New Features
------------
  NONE - new program.

Running the Program
-------------------
  See the file "README.TXT".

Distribution Policy
-------------------
Gamma Software, its successors and assigns, grant all shareware   
distributors the right to distribute:   
           CAD Vantage version 1.00   
so long as the following conditions are met:   

1. The program file and all associated files must be included with
   each copy distributed.  The files may not be altered.
2. No fee can be charged for the software itself.  A reasonable 
   fee may be charged for distribution.  It must be made clear to
   the buyer that any fee they are paying is not for the software,
   it is only for the distribution of the software.   
3. The programs cannot be sold as part of another package.   
4. The programs cannot be rented or leased.   
5. Only the Shareware versions may be distributed.  They can be
   identified by the initial Shareware message screen. The    
   registered versions do not contain these screens.  This is the
   only difference between them.   
6. Only the latest version can be distributed.  If you let us know
   you are distributing this program we will send you updates as
   they become available.   

Violation of any of the above conditions results in the immediate
termination of the Distributors right to distribute the above    
program.         

Gamma Software affirms that it owns all rights to the above 
mentioned software program.         

This is a non-exclusive agreement and Gamma Software reserves the
right to use other agents and distribution methods as it sees fit.
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3214

     Volume in drive A has no label
     Directory of A:\

    CDROM    TXT      3972   6-24-92   1:25p
    CADV100  ZIP    146059  10-11-92   1:00p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
    GO-STRT  DAT       548   2-11-92   2:15p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-FORM  DAT      3109   6-29-92   3:26p
            9 file(s)     210742 bytes
                          107520 bytes free
