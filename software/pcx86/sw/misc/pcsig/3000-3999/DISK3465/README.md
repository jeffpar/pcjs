---
layout: page
title: "PC-SIG Diskette Library (Disk #3465)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3465/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3465"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MICROCAD.DOC

{% raw %}
```
                        PROGRAM LICENSE
                        ---------------


     MicroCAD 2.0 is owned and (c)Copyright 1992 by David R. Allaway.
     All Rights Reserved.

     This program is not in the public domain, but may be used and freely
     distributed (not for resale) only if accompanied by this documentation
     and provided that the user's Name, Address, and a $35 Registration Fee
     (check or money order in U.S. funds) have been sent, payable to:


                        DAVID R. ALLAWAY
                        P.O. BOX 145
                        READINGTON, NJ 08870


     Registered users are entitled, in addition to continued program use,
     to the following for a minimum period of one year from date of
     registration:

          - Technical assistance at the above address or 1-908-369-8688.

          - Correction of program errors.

          - Updates to the program and documentation, as available.

     License is granted for trial use up to 30 days prior to registration.
     During the trial use period, technical assistance will be provided on
     a limited basis.

     This program is supplied as is.  The author disclaims all warranties,
     expressed or implied, including but not limited to implied warranties
     of merchantability and fitness for a particular purpose.  The author
     assumes no liability for damages, direct or consequential, which may
     result from the use of this program.



     Contents
     --------

     1.0   INTRODUCTION
     1.1     Logo Screen
     1.2     Diagram Screen

     2.0   OBJECT CREATION
     2.1     Draw Line
     2.2     Draw Horizontal or Vertical Line
     2.3     Draw Rectangle or Square
     2.4     Draw Circle or Ellipse
     2.5     Draw Cube
     2.6     Create Text

     3.0   OBJECT MODIFICATION
     3.1     Find Object (Sequential)
     3.2     Grab Object (On Screen Find)
     3.3     Move Object
     3.4     Resize Object
     3.5     Clone Object
     3.6     Solid Fill
     3.7     Pattern Fill
     3.8     Pattern Gallery
     3.9     Pattern Outline
     3.10    Line Types
     3.11    Arrowheads
     3.12    Semi-Circles and Semi-Ellipses
     3.13    Tilt Object
     3.14    Roll Object
     3.15    Spin Object
     3.16    Restore Object Rotations
     3.17    Recolor Object
     3.18    Text Font
     3.19    Erase-Unerase Object
     3.20    Find Erased Object
     3.21    Group-Ungroup
     3.22    Object Statistics



     4.0   DIAGRAM MODIFICATION
     4.1     Redefine Color
     4.2     Reset Colors
     4.3     Color Overlay Mode vs. Color Mix Mode
     4.4     Axis Lines
     4.5     Overlay Grid
     4.6     Zoom-In and Zoom-Out
     4.7     Tilt View
     4.8     Roll View
     4.9     Spin View
     4.10    Normal View
     4.11    Move Diagram
     4.12    Decrease Perspective
     4.13    Orthographic & Isometric Projections
     4.14    Axis Windows
     4.15    Erase Screen
     4.16    Clone Diagram
     4.17    Fill Pattern Editor
     4.18    Linear Dimensioning
     4.19    Orthogonal Rotations

     5.0   DIAGRAM RETRIEVAL AND PRINTING
     5.1     Review Portfolio
     5.2     Diagram Gallery
     5.3     Diagram Export
     5.4     Printer Setup
     5.5     Print Diagram

     6.0   MISCELLANEOUS FUNCTIONS
     6.1     Return to DOS
     6.2     Product Information
     6.3     Cursor Speed Adjust
     6.4     File Data
     6.5     Video Test Patterns
     6.6     Command Line Parameters

     7.0   ERROR CONDITIONS

     8.0   FILE DESCRIPTION
     8.1     View Segment
     8.2     Object Segment
     8.3     User Customizations
     8.4     Text Segment
     8.5     DXF Conversion Notes



     1.0   INTRODUCTION
           ------------

     MicroCAD was created with the following objectives:

       1)  To provide a diagramming facility which combines the ease-of-use
           of paint programs with the object manipulation capabilities of
           CAD programs.

       2)  To provide an icon-based interface, which allows the creation of
           complete diagrams without commands, menus or keyboard entry.

       3)  To provide for both the creation of two-dimensional diagrams,
           and the creation and manipulation of objects in 3-D perspective.

       4)  To achieve fast display speeds without the use of graphics or
           math co-processors.

       5)  To minimize the program size, to allow fast and inexpensive
           distribution.

     The program is designed to run on any DOS or OS/2 system with a VGA
     or VGA-compatible video adapter and a mouse driver installed.  The
     program has been designed to run on a 8086/88, 80286, or 80386/486
     processor.  Features only available on 80386/486 processors are noted.

     A high-quality monitor of at least 14" is recommended.

     Most of the program features are designed to be self-explanatory.  The
     following instructions provide a detailed reference to the operation
     of each function.  These instructions apply to version 2, release 0.



     The distribution consists of the following files:

           MICROCAD.EXE    - MicroCAD executable.

           MICROCAD.ICO    - Program icon for Windows.

           MICROCAD.OS2    - Program icon for OS/2.

           MICROCAD.DOC    - These instructions.

           MICROCAD.INF    - One page summary of program features.

           BULLETIN.ymm    - Supplementary instructions and updates.


     In addition, the following files are created when the program is run:

           DIAGRAM#.nnn    - Created for each saved diagram.

           MICROCAD.DXF    - Contains the latest diagram export copy.



     1.1   Logo Screen
           -----------

     When starting the program, a logo 'movie' will be displayed.  When the
     full logo and copyright info are displayed, click either mouse button
     to proceed to the diagram screen.

     To skip directly to the full logo during the movie: click either mouse
     button.

     To skip directly to the diagram screen: press either mouse button and
     release it after the full logo appears, or double-click during the
     movie.



     1.2   Diagram Screen
           --------------

     The diagram screen consists of:

       1)  The ICON AREA, on the left side of the screen.

           When the cursor is in the icon area, it will appear as an arrow.
           To select a function, move the arrow to an icon and click the
           left or right mouse button, as per the instructions.  When a
           function is selected, the icon will be highlighted.  Some
           functions are momentary, and will return to the previously
           selected icon when complete.

       2)  The DIAGRAM AREA, on the remainder of the screen.

           When the cursor is in the diagram area, it will appear as a
           crosshair (+).  The currently selected diagramming function is
           performed when the left or right mouse button is pressed, as per
           the instructions.

       3)  The ICON HELP MESSAGE, on the top left of the diagram area.

           As the cursor is moved over each icon, the icon help message
           displays the function associated with the icon.  When the cursor
           is in the diagram area, the help message corresponds to the
           currently selected function.

       4)  The DATE, TIME and DIAGRAM NUMBER, on the top right of the
           diagram area.

           This indicates the last modification date and time for a
           retrieved diagram.  This area will be blank for new diagrams.

       5)  The SIGNATURE, in the lower right corner of the diagram area.

           This will appear on all screens, but will be omitted from
           printed diagrams.



     2.0           OBJECT CREATION
                   ---------------

     2.1   Draw Line
           ---------

     To draw a line:

       a)  Click on the Line icon (/).

       b)  Point to the starting point of the line.

       c)  Press either button, and move the cursor toward the desired
           end-point.  The line will expand as the cursor is moved.

       d)  When the cursor is at the desired end point, release the
           button.

     The new line becomes the 'current' object.

     To draw additional lines, repeat from step b).



     2.2   Draw Horizontal or Vertical Line
           --------------------------------

     To draw a horizontal or vertical line:

       a)  Click on the Horizontal/Vertical icon (+).

       b)  Point to either end point of the line.

       c)  Press either button, move the cursor up, down, or sideways.
           The line will expand horizontally or vertically, in the
           predominant direction the cursor is moved.

       d)  When the line is at the desired end point, release the
           button.

     The new line becomes the 'current' object.

     To draw additional horizontal or vertical lines, repeat from step b).



     2.3   Draw Rectangle or Square
           ------------------------

     To draw a rectangle:

       a)  Click on the Rectangle icon.

       b)  Point to any corner of the rectangle.

       c)  Press the left button, move the cursor toward the opposite
           corner.  The rectangle will expand as the cursor is moved.

       d)  When the cursor is at the desired opposite corner, release the
           button.

     The new rectangle becomes the 'current' object.

     To draw a square, use the RIGHT button instead.



     2.4   Draw Circle or Ellipse
           ----------------------

     To draw a circle:

       a)  Click on the Circle icon.

       b)  Point to the center of the circle.

       c)  Press the left button, move the cursor in any direction.  The
           circle will expand as the cursor is moved.  A temporary
           outline box will also be drawn around the circle.

       d)  When the circle reaches the desired size, release the button.
           The temporary outline box will be erased.

     The new circle becomes the 'current' object.

     To draw an ellipse, use the RIGHT button, and start at either side of
     the ellipse.



     2.5   Draw Cube
           ---------

     To draw a 3D cube or box:

       a)  Click on the 3D Cube icon.

       b)  Point to any corner of the box.

       c)  Press the left button, move the cursor to the opposite corner,
           and release.

     The new box becomes the 'current' object.

     All 3D cubes are created with a square base.  That is, with equal
     width and depth.  To create a 3D cube with unequal width and depth,
     create a cube with the desired depth, and then use the resize
     function to adjust the width (see section 3.4).



     2.6   Create Text
           -----------

     To create a line of text:

       a)  Click on the Text icon (abc).

       b)  Click on the desired starting location (bottom-left margin).

       c)  Enter the text on the keyboard.  During entry, the Backspace
           key may be used to correct errors.

       d)  Press the Enter key, or click either mouse button, when done.

     The new text becomes the 'current' object.

     To enter additional text, repeat from step b).

     A temporary box shows where the text will appear on the diagram.  The
     size of the box is adjusted according to the text font, and shows the
     space the text will occupy under normal zoom.  If the box does not
     appear in the desired location, click again to remove, and repeat from
     step b).  Alternatively, the text may be entered anywhere, and then
     moved to the desired exact location (see Move Object).



     3.0           OBJECT MODIFICATION
                   -------------------


     3.1   Find Object (Sequential)
           ------------------------

     To find an object and make it the 'current' object, click on the
     Find (?) icon.

     Each time the Find icon is clicked, a different object will blink
     and become the current object.

     If the button is held, the object will flash continuously.  This may
     be helpful to spot smaller objects.

     If this function encounters a group, the group will blink once as a
     single object.

     Objects may also be selected using the On Screen Find function.



     3.2   Grab Object (On Screen Find)
           ----------------------------

     To select an object directly on the screen, click on the Find (?) icon
     and then click directly on the object.  The object will blink to
     signal that it has been selected.  If there are many objects in the
     diagram, it may be necessary to hold the button for a second until the
     object starts blinking.  It may be necessary to position the center of
     the cross-hairs exactly on the object.

     The on screen grab includes a move function.  If the button is held
     while the object is blinking, the object may be moved to a new
     location.  Simply slide the cursor while keeping the button held.

     It is also possible to press the button, and then slide the cursor
     across an object.  The cursor will grab the object as it goes by.

     To move an object in the Z-axis, press the left then also the RIGHT
     button.  Pushing the mouse away will push the object 'into' the screen
     (away from the viewer).  Pulling the mouse closer will pull the object
     'out of' the screen (toward the viewer).

     An object may also be moved using the Move function.



     3.3   Move Object
           -----------

     To relocate the current object within the diagram:

       a)  Click on the Move icon.

       b)  Position the cursor anywhere on the screen and press the left
           button.

       c)  Move the cursor, and the current object will 'follow'.

       d)  When the object is in the desired location, release the button.

     This may be repeated, from step b).

     If a group member is selected, all members of the group will be moved.

     To move an object in the Z-axis, press the left and then also the
     RIGHT button.  Pushing the mouse away will push the object 'into' the
     screen (away from the viewer).  Pulling the mouse closer will pull the
     object 'out of' the screen (toward the viewer).

     An object may also be moved using the On Screen Find function.



     3.4   Resize Object
           -------------

     To adjust the shape or size of the current object:

       a)  Click on the Move icon.

       b)  Position the cursor anywhere on the screen and press the RIGHT
           button.

       c)  Move the cursor, and the end-point for the object will change.

       d)  When the object is adjusted as desired, release the button.

     This may be repeated, from step b).

     If a group member is selected, all members of the group will be
     adjusted.

     The resize object function is a very powerful tool for modifying
     diagrams.  Because the end-point controls the length, size, angle,
     and shape of every object, as much control can be exercised as when
     the object was originally created.  If, for example, a line is drawn
     which does not exactly reach the desired point on the diagram (or that
     point has changed), it can be repaired without redrawing it.

     Because the resize object function is on the same icon as the move
     function, it is possible to rework an object by alternating between
     the left (move) and RIGHT (resize) buttons until the object is in
     exactly the desired shape and location.



     3.5   Clone Object
           ------------

     To create an exact copy of the current object:

       a)  Click on the Clone icon.

       b)  Position the cursor anywhere on the screen, press and hold the
           left button.  The current object will temporarily disappear.

       c)  Move the cursor.  The copy will follow, and the original will
           reappear.

       d)  When the new object is in the desired location, release the
           button.

     The new copy will become the current object.

     To create additional copies, repeat from step b).

     If a group member is selected, all members of the group will be
     copied.

     To clone an object in the Z-axis, press the left then also the RIGHT
     button.  Pushing the mouse away will push the object 'into' the screen
     (away from the viewer).  Pulling the mouse closer will pull the object
     'out of' the screen (toward the viewer).

     An object can be 'cloned in place' by clicking on the Clone icon, and
     then clicking on the screen without moving the cursor.  Such a double
     object will not appear, because it will cancel itself out.  If the new
     object is then recolored, additional object color combinations can be
     created.  This requires that the program be in Color Mix Mode.



     3.6   Solid Fill
           ----------

     To fill the current rectangle, square or circle* with solid color,
     click on the Fill-Unfill icon.

     To remove the solid fill, click again.

     If the current object is a group member, all applicable members of the
     group will be solid filled or un-filled.

     The solid fill will not be displayed on rotated objects.

     The solid fill will reverse the pattern on any pattern-filled object.

     * Solid-filled circles are only available on 80386/486 processors.



     3.7   Pattern Fill
           ------------

     To fill the current rectangle, square or circle* with a special
     pattern, click on the Pattern Fill icon.

     To change to the next pattern, click again.

     If the current object is a group member, all applicable members of the
     group will be pattern filled.

     The pattern fill will not be displayed on rotated objects.

     To reverse the pattern, click on the Fill-Unfill icon.

     * Pattern-filled circles are only available on 80386/486 processors.



     3.8   Pattern Gallery
           ---------------

     To display all of the available fill patterns, including reversed
     versions, click on the Pattern Fill icon with the RIGHT button.  The
     cursor will point to the current object pattern.

     To select one of the displayed patterns, point to it and click on the
     left button.  The current object, if applicable, will be filled with
     the selected pattern.

     If the current object is a group member, all applicable members of the
     group will be pattern filled.

     Customized fill patterns may also be created, see Fill Pattern Editor.



     3.9   Pattern Outline
           ---------------

     To outline the perimeter of a pattern-filled rectangle, click on the
     Fill-Unfill icon with the RIGHT button.

     To remove the perimeter outline, click again.

     If the current object is a group member, all applicable members of the
     group will be outlined.

     The outline will also prevent reverse-filled patterns from running all
     the way to the edge of the rectangle.

     The outline will only be used in the primary window.



     3.10  Line Types
           ----------

     To change the current line, rectangle, square, or 3D box from solid
     line to dashed line, click on the Dashed Arrow icon.

     Each click will step through the available line types.  After the last
     line type, the object will return to solid line.

     If the current object is a group member, all applicable members of the
     group will be changed.



     3.11  Arrowheads
           ----------

     To add an arrowhead to the end of a vertical or horizontal line,
     click on the Dashed Arrow icon with the RIGHT button.

     To move the arrowhead to the opposite end, click again.

     To add an arrowhead to both ends, click again.

     To remove both arrowheads, click again.



     3.12  Semi-Circles and Semi-Ellipses
           ------------------------------

     To change the current circle or ellipse from Full to One-Half or
     One-Quarter, click on the Semi-Circle icon, as follows:

     To change from Full to Top half, click once.

     To change from Top half to Bottom half, click again.

     To change from Bottom half to Right half, click again.

     To change from Right half to Left half, click again.

     To change from Left half to Upper-Right quarter, click again.

     To change from Upper-Right to Lower-Right quarter, click again.

     To change from Lower-Right to Lower-Left quarter, click again.

     To change from Lower-Left to Upper-Left quarter, click again.

     To change from Upper-Left to Full, click again.



     3.13  Tilt Object
           -----------

     To Tilt (Pitch) the current object forward, click on the Tilt icon.

     Each click rotates the object by one degree around the center of the
     object.

     If the button is held, the object will tilt continuously until
     released.  If the RIGHT button is pressed while the left button is
     still held, the direction will reverse.

     If the current object is a group member, the entire group will be
     rotated around the group center.



     3.14  Roll Object
           -----------

     To Roll the current object clockwise, click on the Roll icon.

     Each click rotates the object by one degree around the center of the
     object.

     If the button is held, the object will roll continuously until
     released.  If the RIGHT button is pressed while the left button is
     still held, the direction will reverse.

     If the current object is a group member, the entire group will be
     rotated around the group center.



     3.15  Spin Object
           -----------

     To Spin (Yaw) the current object left-to-right, click on the Spin
     icon.

     Each click rotates the object by one degree around the center of the
     object.

     If the button is held, the object will spin continuously until
     released.  If the RIGHT button is pressed while the left button is
     still held, the direction will reverse.

     If the current object is a group member, the entire group will be
     rotated around the group center.



     3.16  Restore Object Rotations
           ------------------------

     To restore the current object rotations (roll, tilt, spin) to zero,
     click on the Normal View icon.



     3.17  Recolor Object
           --------------

     By clicking on any of the four primary color icons, the current object
     color is changed to the indicated color.

     The indicated color also becomes the color for any new objects.

     If the current object is a group member, all objects in the group will
     be recolored.



     3.18  Text Font
           ---------

     The default text font is 5x7, but may be changed to 8x14.

     To change the text font, click on the Text icon (abc) with the RIGHT
     button.  This changes the font on the current object (if it is
     text), and on any new text.  Any other text will remain unchanged.

     To change the font back, click again.

     When changing fonts, the text width and height will change, but the
     left and bottom margins will remain the same.



     3.19  Erase-Unerase Object
           --------------------

     To erase the current object, click on the Erase icon.

     If the current object is a group member, the entire group will be
     erased.

     To immediately restore the erased object, click again.

     To restore a previously erased object, use the Find Erased function.

     If the object dimensions are displayed, the first click will erase the
     dimensions only.  The second click will erase the object.  The third
     click will restore both the object and the dimensions.

     Erased objects will be remembered, even after leaving the program,
     unless the diagram becomes so complex that space must be reclaimed, in
     which case the oldest erased objects will be forgotten first.



     3.20  Find Erased Object
           ------------------

     To find a previously erased object, click on the Find (?) icon with
     the RIGHT button.

     Each time the RIGHT button is clicked or held, a different erased
     object will blink on momentarily, or flash continuously.

     By then clicking on the Erase icon (with the left button), the object
     can be 'unerased'.



     3.21  Group-Ungroup
           -------------

     Multiple objects may be grouped together to behave as a single object.
     They may, for example, be moved, cloned, recolored, rotated, etc. as
     a single object.

     To identify the first group member:

       a)  Click on the Find (?) icon.

       b)  Point to an object on the screen and click or hold the RIGHT
           button.  The object should blink or flash to acknowledge.

     To identify each additional group member:

       c)  Point to an object to be added and click or hold the RIGHT
           button, all of the current group members should blink together.

     Additional group members may be added at any time, by clicking on the
     Find icon, then clicking anywhere on the group with the left button to
     select the group.  Then click on an object which is not already a
     member, with the RIGHT button.

     To ungroup an object, first click on it with the left button.  The
     entire group should blink.  Then click on the object with the RIGHT
     button.  The object should blink individually to signify that it has
     been disconnected.

     An object may not be added to or removed from a group if either have
     been rotated.  This is because the change in the group center would
     impact the rotations.  Instead, first restore the object and/or group
     to normal view, then add or remove the object, then reapply the
     desired rotations.



     3.22  Object Statistics
           -----------------

     The current object statistics and related data are displayed, at the
     bottom of the screen, whenever the axis windows are on.  These
     include:

         - The cursor position (X,Y)
         - The diagram scale (1/8, 1/4, 1/2, 1:1, 2X, 4X, 8X)
         - The current object position (X,Y,Z)
         - The current object size (Height, Width, Depth)
         - The current line length
         - The current line slope (degrees from horizontal)
         - The current square, rectangle, circle or ellipse area
         - The current object rotations (roll, pitch, yaw)
         - The projection mode (PERSP, ORTHO, ISO)

     The statistics always reflect the current object, and are updated as
     the cursor is moved, or as an object is moved, rotated or resized.
     When creating a new object, the statistics are updated as the object
     is being created.  This may be used to create or resize an object to
     exact scale.

     The positions are displayed relative to the axis origin at the center
     of the screen (see Axis Lines).  The position of a line corresponds to
     its left end-point.  The position of a square or rectangle corresponds
     to its upper-left corner.  The position of a circle or ellipse
     corresponds to its center.

     The object rotations are displayed in degrees clockwise, as viewed
     from the axis windows.  These do not include the view rotations.

     Line lengths may also be displayed directly on the diagram.  See
     Linear Dimensioning (section 4.18).

     If linear dimensioning in 10ths, ft.-in. or 16ths is in use, the
     object statistics will be shown accordingly.  In ft.-in., areas will
     be shown in sq.-in. up to 143 sq.-in., and sq.-ft. (or fraction of)
     up to 30,000 sq.-ft.  In 16ths, areas will be shown in sq.-in. (or
     fraction of) up to 30,000 sq.-in.



     4.0           DIAGRAM MODIFICATION
                   --------------------

     4.1   Redefine Color
           --------------

     To redefine any of the four primary colors, or the background color,
     click on the corresponding Color icon with the RIGHT button.

     A gallery of 64 standard colors will be displayed.  The cursor will
     point to the current color.  To select one of the standard colors,
     point to it and click on the left button.

     To select from among 4,096 custom colors, point to the closest
     standard color and click on the RIGHT button.  A gallery of 64
     variations on the standard color will be displayed.  To select a custom
     variation, point to it and click on the left button.  To cancel
     without selecting one of the custom variations, click again on the
     RIGHT button.



     4.2   Reset Colors
           ------------

     To select one of four standard color schemes, click on the Overlay-Mix
     icon with the RIGHT button.  To select the next color scheme, click
     again.  The four color schemes are:

       1)  Bright colors on black background.

       2)  Bright colors on dark-grey background.

       3)  Dark colors on light-grey background.

       4)  Dark colors on white background.

     The four color schemes all use red, green and blue, and are suitable
     for different ambient lighting conditions.

     It may be necessary to select one of these color schemes when using a
     medium-resolution monitor, in order to prevent display distortion.



     4.3   Color Overlay Mode vs. Color Mix Mode
           -------------------------------------

     The four primary colors normally mix with each other to produce
     sixteen different color combinations.  Alternatively, the colors may
     be changed to overlay each other in a particular order.

     To switch from color mixing to color overlay, click on the Overlay-Mix
     (multi-color) icon.

     To restore color mixing, click on the Overlay-Mix icon again.

     The current mix or overlay technique is displayed on the icon itself.



     4.4   Axis Lines
           ----------

     To turn on the X, Y and Z axis lines, click on the Axis icon.  The Z
     line is only visible if the diagram has been rotated, or in
     orthographic or isometric projection.

     To turn the axis lines off, click again.



     4.5   Overlay Grid
           ------------

     To turn the 10-by-10 overlay grid on, click on the Grid icon.  The
     axis windows, if on, will be turned off.

     To turn the grid off, click again.

     While the grid is on, newly created objects will automatically be
     aligned on the nearest grid dot.



     4.6   Zoom-In and Zoom-Out
           --------------------

     To increase the display scale by 2X in the main window, click on the
     Zoom icon.  This may be repeated up to three times beyond normal (to
     8X scale).

     To decrease the display scale by 1/2 in the main window, click on the
     Zoom icon with the RIGHT button.  This may be repeated up to three
     times beyond normal (to 1/8th scale).

     To restore the scale to 1:1, click on the Normal View icon with the
     RIGHT button.

     The zoom function zooms in on the center of the screen.  To zoom in on
     another portion of the diagram, use the Move Diagram function to move
     the desired portion of the diagram to the center of the screen.  The
     axis lines may be used to help center the desired portion of the
     diagram.

     Zooming-in moves the viewer closer to the center of the diagram, which
     increases the perspective effect.  Zooming-out moves the viewer
     further from the center of the diagram, which decreases the
     perspective effect.



     4.7   Tilt View
           ---------

     To Tilt (Pitch) the diagram view forward, click on the Tilt icon
     with the RIGHT button.

     Each click rotates the view by one degree around the X axis.

     If the RIGHT button is held, the view will tilt continuously until
     released.  If the left button is pressed while the RIGHT button is
     still held, the direction will reverse.

     To restore the view to zero tilt, click on the Normal View icon with
     the RIGHT button.



     4.8   Roll View
           ---------

     To Roll the diagram view clockwise, click on the Roll icon with the
     RIGHT button.

     Each click rotates the view by one degree around the Z axis.

     If the RIGHT button is held, the view will roll continuously until
     released.  If the left button is pressed while the RIGHT button is
     still held, the direction will reverse.

     To restore the view to zero roll, click on the Normal View icon with
     the RIGHT button.



     4.9   Spin View
           ---------

     To Spin (Yaw) the diagram view left-to-right, click on the Spin icon
     with the RIGHT button.

     Each click rotates the view by one degree around the Y axis.

     If the RIGHT button is held, the view will spin continuously until
     released.  If the left button is pressed while the RIGHT button is
     still held, the direction will reverse.

     To restore the view to zero spin, click on the Normal View icon with
     the RIGHT button.



     4.10  Normal View
           -----------

     To restore the view rotations (roll, tilt, spin) to zero, and return
     to normal zoom, click on the Normal View icon with the RIGHT button.



     4.11  Move Diagram
           ------------

     To relocate the entire diagram within the display window:

       a)  Click on the Move icon with the RIGHT button.

       b)  Position the cursor anywhere on the screen and press either
           button.

       c)  Move the cursor, and the entire diagram will follow.

       d)  When the diagram is in the desired location, release the button.

     This may be repeated, from step b).

     To return to the original location, click on the Normal View icon with
     the RIGHT button.



     4.12  Decrease Perspective
           --------------------

     The diagram is normally displayed at maximum perspective.

     To decrease the perspective, click on the Perspective icon.

     Decreasing the perspective is the same as increasing the viewing
     distance, and zooming in to maintain the same scale.  Decreased
     perspective flattens the image like a telephoto lens.

     To return to maximum perspective, click again.



     4.13  Orthographic & Isometric Projections
           ------------------------------------

     The diagram is normally displayed in perspective projection.

     To switch from perspective projection to orthographic projection,
     click on the Axis icon with the RIGHT button.

     To switch from orthographic to isometric projection, click again on
     the Axis icon with the RIGHT button.

     To switch from isometric to perspective projection, click again on the
     Axis icon with the RIGHT button.

     In orthographic and isometric modes, view rotations and perspective
     are ignored.  The diagram move, zoom, object rotation and orthogonal
     rotation functions remain in effect.



     4.14  Axis Windows
           ------------

     Click on the Windows icon to divide the screen into four parts:
     3D perspective view, front view, side view and top view.

     Click again on the Windows icon to restore to 3D perspective view
     only.

     The axis windows are displayed at 1/4 scale, in 3D, but without
     perspective.  Text is not displayed in the axis windows.

     When the axis windows are on, the cursor position and current object
     statistics are also displayed (see Object Statistics).



     4.15  Erase Screen
           ------------

     To erase the currently displayed diagram from the screen, and reset
     the display parameters, click on the Erase icon with the RIGHT button.

     The displayed diagram will be saved, including any changes.



     4.16  Clone Diagram
           -------------

     To create a new diagram from an existing diagram, retrieve the
     existing diagram (see Review Portfolio), then click on the Clone icon
     with the RIGHT button.

     The existing diagram will be saved, including any changes.  The date,
     time and diagram number will be erased from the display.  Any
     subsequent changes will be saved as a new diagram.

     This feature may also be used to save interim versions of a diagram,
     as it is being created or modified.  Simply click on the Clone icon
     with the RIGHT button before proceeding with a change or group of
     changes.  This will allow the version before the changes to be
     retrieved at a later time, if desired.



     4.17  Fill Pattern Editor
           -------------------

     The fill patterns supplied with the program may be edited to create
     customized fill patterns.

     To edit a fill pattern, click on the Pattern Fill icon with the RIGHT
     button to display the pattern gallery.  Point to the pattern to be
     edited and click on the RIGHT button.  This may be a pattern which is
     similar to the desired pattern, or any pattern which is not needed.
     The blank and solid-fill patterns may not be edited.

     The dot matrix for the selected pattern will be displayed, along with
     the resultant fill pattern in normal and reverse formats.  To return
     to the pattern gallery without editing the pattern, click on the RIGHT
     button again.

     To edit the pattern, point to a cell in the matrix and click on the
     left button.  The cell will be toggled on or off, and the resultant
     fill pattern will be updated.

     When the editing is complete, click on the RIGHT button to return to
     the diagram screen.



     4.18  Linear Dimensioning
           -------------------

     To display the dimensions of each line, rectangle or cube on the
     diagram, click on the Axis Windows icon with the RIGHT button.  The
     dimensions will be displayed in whole numbers.

     - To add a decimal point to the dimensions, click again.

     - To change the dimensions to feet and inches, click again.

     - To change the dimensions to inches and 16ths, click again.

     - To remove all dimensions, click again.

     Dimensions may be removed for an individual object by clicking on the
     Erase icon (see section 3.19).  Individual object dimensions, once
     removed, will remain off unless individually restored.

     The Zoom In/Out function will alter the apparent size of all objects
     without changing the dimensions.  This may be used to set the
     effective scale of the diagram.



     The following chart indicates the minimum and maximum dimensions which
     may be drawn with various combinations of zoom and dimensioning units.
     This may be used to select an appropriate starting point for creating
     a diagram.  Note that the zoom may be adjusted while editing the
     diagram, to draw objects having larger and/or finer dimensions.

        Scale   Unit         10ths        Ft.-In.      16ths
        -----   ----         -----        -------      -----

        1/8     8 to 3456    .8 to 345.6  8" to 288'   1/2"  to 216"

        1/4     4 to 1728    .4 to 172.8  4" to 144'   1/4"  to 108"

        1/2     2 to 864     .2 to 86.4   2" to 72'    1/8"  to 54"

        1:1     1 to 432     .1 to 43.2   1" to 36'    1/16" to 27"

        2X      1 to 216     .1 to 21.6   1" to 18'    1/16" to 13 1/2"

        4X      1 to 108     .1 to 10.8   1" to 9'     1/16" to 6 3/4"

        8X      1 to 54      .1 to 5.4    1" to 4'6"   1/16" to 3 3/8"

     The maximum value represents the height of the primary window, with
     the axis windows on.  Slightly larger dimensions are available with
     the axis windows off, and in the horizontal direction.



     4.19  Orthogonal Rotations
           --------------------

     The entire diagram may be rotated by 90 degrees in order to provide a
     left side, right side, back, top or bottom view in the main (3D)
     window.  With the axis windows on, simply click on the axis window
     displaying the desired view.

     If the SIDE window is clicked on, the diagram will be rotated by 90
     degrees counter-clockwise as viewed from the top:

     - The first click will rotate the diagram to the left side.
     - The second click will rotate the diagram to the back (backwards).
     - The third click will rotate the diagram to the right side.
     - The fourth click will restore the diagram to the front.

     If the TOP window is clicked on, the diagram will be rotated by 90
     degrees clockwise as viewed from the left side:

     - The first click will rotate the diagram to the top.
     - The second click will rotate the diagram to the back (upside down).
     - The third click will rotate the diagram to the bottom.
     - The fourth click will restore the diagram to the front.

     If the RIGHT button is used, in either window, the direction of
     rotation will be reversed.

     This function, unlike the tilt, roll and spin functions, changes the
     actual object orientations, not just the view.  This allows additional
     objects to be drawn at 90 degree angles to the original diagram.

     The axis windows (see 4.14) may be turned on temporarily in order to
     use this function.  The diagram rotations will remain in effect after
     the windows have been turned off.



     5.0           DIAGRAM RETRIEVAL AND PRINTING


     5.1   Review Portfolio
           ----------------

     To retrieve the next diagram in directory sequence, click on the
     Review Portfolio icon.

     A retrieved diagram will display the date and time of last
     modification and the diagram number.

     To fast-forward through the diagram portfolio, press both buttons
     simultaneously.

     To view the entire portfolio 64 diagrams at a time, use the Diagram
     Gallery feature.

     Any new or modified diagram in progress will be automatically saved
     when the Review Portfolio function is used.



     5.2   Diagram Gallery
           ---------------

     To view the entire portfolio, click on the Review Portfolio icon with
     the RIGHT button.

     Up to 64 diagrams will be displayed at 1/8th scale with default
     colors.

     Click on any diagram to retrieve it, or click anywhere with the RIGHT
     button to display the next 64 diagrams.

     A retrieved diagram will display the diagram number and the date and
     time of last modification.

     Any new or modified diagram in progress will be automatically saved
     when the Diagram Gallery function is used.



     5.3   Diagram Export
           --------------

     Diagrams may be exported to other programs which can accept files in
     the Drawing Interchange Format (DXF).  This includes many CAD,
     graphics and word-processing programs.

     No special action needs to be taken to export a diagram.  The file
     MICROCAD.DXF will always contain the most recently displayed diagram,
     in DXF format.  This file may be renamed or copied to another file, to
     save the exported diagram more permanently.  Alternatively, a name for
     the export file may be specified on the command line when starting the
     program.  Refer to section 6.6 for details.

     Because many programs which accept DXF can only interpret two-
     dimensional data, diagrams created with 3-D information must be given
     special consideration, as follows:

     If a 3-D diagram is exported for use in a program which can correctly
     render 3-D images, the axis windows should be turned ON (see 4.14)
     before exiting the diagram.  This will cause all 3-D data to be
     exported 'as is'.  The diagram view, perspective and zoom may then be
     handled by the receiving program.  This is intended for 3-D CAD
     programs.

     If a 3-D diagram is exported for use in a program which cannot render
     3-D images, the axis windows should be turned OFF (see 4.14) before
     exiting the diagram.  This will cause a 'snapshot' of the current
     diagram to be exported as a two-dimensional image, according to the
     current viewing angle and projection mode.  The image will then appear
     in this fixed orientation to the receiving program.  This is intended
     for word-processing and 2-D CAD programs.

     If linear dimensioning is turned on, all dimensions will be exported
     as text entities.  This allows the dimensions to appear in programs
     which cannot automatically calculate dimensions.  If the object
     dimensions are to be altered in the receiving program, or dimensions
     are not required, linear dimensioning should be turned off before
     exiting the diagram (see section 4.18).  Dimensioning is automatically
     turned off for 3-D exports.

     For technical notes on the DXF conversion, refer to section 8.5.



     5.4   Printer Setup
           -------------

     To step through the available printer types, click on the Print icon
     with the RIGHT button.  The available printer types are:

         - IBM/Epson, 8-pin mode, landscape, 60 dpi.

         - Epson LQ, 24-pin mode, landscape, 120 dpi.

         - HP LaserJet, portrait mode, 75 dpi.

         - HP LaserJet, landscape mode, 75 dpi.

         - HP PaintJet, 16-color portrait mode, run-length encoded, 90 dpi.

     These selections may also work for other printer models with similar
     specifications.  The program cannot tell if the selected type matches
     the printer.  If it does not, incorrect output will result.

     Click again with the left button to print the diagram.

     Some printers may be able to accommodate multiple type selections.
     When printing to a file, do not mix type selections unless the printer
     to be used can accommodate all of the selected types.



     5.5   Print Diagram
           -------------

     To print the diagram, on the printer type shown, click on the Print
     icon.

     Use Printer Setup to change the printer type.

     Printed output is directed to the default printer (LPT1).  The program
     will normally wait if the printer is not ready, or reject the print
     function if the printer is inaccessible.

     An alternate device name, or file name (up to 33 characters), for
     printed output may be specified on the command line, for example:

           /LPT2

     If a file name is specified (for example: /DIAGRAMS.PRT), and it does
     not exist, it will be created.  The file will be added-to each time
     the Print function is used.  The file may be deleted or renamed after
     printing.



     6.0           MISCELLANEOUS FUNCTIONS
                   -----------------------


     6.1   Return to DOS
           -------------

     To exit the program, click on the DOS icon (C:>).  Any diagram changes
     will be saved.

     The program license and registration information may be displayed.
     Click again to return to DOS.



     6.2   Product Information
           -------------------

     To display this document while running the program, click on the
     Product Info icon.  Each additional click will display the next page.
     To page backward, click on the RIGHT button.



     6.3   Cursor Speed Adjust
           -------------------

     To slow the cursor speed by half (with respect to the mouse movement),
     click on the Perspective icon with the RIGHT button.

     To double the cursor speed (vs. normal), click again.

     To restore normal cursor speed, click again.



     6.4   File Data
           ---------

     To view the current diagram object catalog and display parameters,
     press on the DOS icon (C:>) with the RIGHT button.  Release to remove.

     See FILE DESCRIPTION for details.



     6.5   Video Test Patterns
           -------------------

     For a black & white video-resolution test pattern, click on the
     Product Info icon with the RIGHT button.

     For a 16-by-16 color-saturation test pattern, click again.

     For a grey-scale and color-hue test pattern, click again.

     To return to the displayed diagram, click again.



     6.6   Command Line Parameters
           -----------------------

     The default names for the printer and export files may be changed via
     command line parameters.

           /printer    - 'printer' is the printer device name or file name.

                         The default printer device name is LPT1.

           =export     - 'export' is the export file name.

                         The default export file name is MICROCAD.DXF.

     File names may be simple (=drawing.123) or may contain the path and
     file name (=c:\diagrams\drawing.123).  The path and file name may not
     exceed 33 characters.



     7.0           ERROR CONDITIONS
                   ----------------

     The program will return immediately to DOS, with an error message,
     under the following conditions:

     Message
     -------

     'VGA Required.'

          The program must be run on a PC equipped with a VGA or
          fully VGA-compatible video adapter.


     'Download incomplete.'

          A complete copy of the documentation (MICROCAD.DOC)
          corresponding to this program release must be present.


     'Mouse driver not installed.'

          A mouse driver must be installed.  Install and restart.


     'Insufficient disk space for conversion.'

          Additional disk space is required in order to convert existing
          diagrams to the current format.  Make additional space available
          and restart.  The additional space will be freed as soon as the
          conversion is complete.


     Miscellaneous error conditions which do not prevent the program from
     continuing are signaled by an audible beep.



     8.0           FILE DESCRIPTION
                   ----------------

     The following is a description of the file format for each diagram.
     Each diagram comprises three variable-length segments, as follows.
     Note: All words are stored with the low-order byte first.


     8.1   View Segment
           ------------

     The view segment contains parameters which apply to the entire
     diagram:


     Word  Name
     ----  ----
        0  SIZE - 002E  Length of view segment, in bytes (46)

        1  CURR - nnnn  Current-object offset (not displayed)

        2  XMOV - nnnn  Diagram shift in X-axis (left)

        3  YMOV - nnnn  Diagram shift in Y-axis (up)

        4  ZMOV - nnnn  Diagram shift in Z-axis (not used)

        5  UNIT - uupp  uu = Dimensioning units:

                             00 - Dimensioning off
                             01 - Integer
                             02 - 10ths
                             03 - Ft.-In.
                             04 - 16ths

           PROJ -       pp = Projection mode:

                             00 - Perspective
                             01 - Orthographic
                             02 - Isometric



        6  YEAR - nnnn  Year modified

        7  DATE - ddmm  Month (mm) and Day (dd) modified

        8  TIME - mmhh  Hour (hh) and Minute (mm) modified

        9  MODE - mmtt  mm = Color overlay/mix mode:

                             00 - Overlay mode
                             01 - Mix mode

           FILE -       tt = Diagram type:

                             00 - File not yet created
                             02 - MicroCAD version 2.0

       10  TILT - nnnn  Diagram tilt (pitch) in degrees counter-clockwise

       11  SPIN - nnnn  Diagram spin (yaw) in degrees counter-clockwise

       12  ROLL - nnnn  Diagram roll in degrees counter-clockwise

       13  DIST - ddzz  dd = Perspective viewing distance exponent

           ZOOM -       zz = Zoom out (+) or in (-) scaling exponent

       14  AXIS - aavv  aa = Axis lines status:

                             00 - Axis lines off
                             01 - Axis lines on

           VIEW -       vv = Axis window status:

                             00 - Axis windows off
                             01 - Axis windows on

       15 through 22    Palette registers (not displayed)



     The following are not part of the view parameters, but are included in
     the display for program support:

           PROC - nnnn  Processor type (8086, 0286, 0386, 0486)

           MCAD - vvrr  MicroCAD version (vv) and release (rr)

           MOUS - vvrr  Mouse driver version (vv) and release (rr)

           ADDR - xxxx  Program address of last interrupt

           CODE - xxxx  Code(s) associated with last interrupt

           POOL - nnnn  Offset of next available byte in text pool



     8.2   Object Segment
           --------------

     The object segment contains the descriptions of each object within the
     diagram:


     Word  Name
     ----  ----
        0  SIZE - nnnn  Length of object segment, in bytes (3 to 32761)

        1  TYPE - ggtt  gg = Group number (00 if not a group member)

                        tt = Object type:

                             00 - Empty slot (not displayed)
                             01 - Point
                             02 - Line
                             03 - Ellipse (includes Circle)
                             04 - Rectangle (includes Square)
                             06 - Text
                             08 - 3D Box (Cube)
                             1C - Color specification
                             1F - Fill pattern
                             8x - Erased object
                             FF - End of catalog (not displayed)

        2  Y0   - nnnn  Beginning Y-axis coordinate

        3  X0   - nnnn  Beginning X-axis coordinate

        4  Z0   - nnnn  Beginning Z-axis coordinate

        5  Y1   - nnnn  Ending Y-axis coordinate

        6  X1   - nnnn  Ending X-axis coordinate

        7  Z1   - nnnn  Ending Z-axis coordinate or text offset in pool

     All coordinates correspond to the screen row (Y) and column (X),
     relative to the upper-left corner of the screen at normal zoom.



     Word  Name
     ----  ----
        8  MODE - mmsc  mm = Mode:

                             01 - Alternate line type or text font
                             02 - Outlined pattern
                             04 - Solid fill or reverse pattern
                             x0 - Pattern fill 0-30 (even)
                             x8 - Pattern fill 1-31 (odd)
                             40 - Right or top arrow
                             80 - Left or bottom arrow

                             Alternate line type:

                             01 - Dashed       09 - Dotted
                             03 - Hidden       0B - Dash-Dot
                             05 - Center       0D - Border
                             07 - Phantom      0F - Divide

                        s  = Circle/ellipse slice:

                             1 - Upper half    5 - Upper-right quadrant
                             2 - Lower half    6 - Lower-right quadrant
                             3 - Right half    7 - Lower-left quadrant
                             4 - Left half     8 - Upper-left quadrant

                          or 8 = Object dimensioning off

                        c  = Color (0-3)

        9  TILT - nnnn  Object tilt (pitch) in degrees counter-clockwise

       10  ROLL - nnnn  Object roll in degrees counter-clockwise

       11  SPIN - nnnn  Object spin (yaw) in degrees counter-clockwise

       12 through 16379 Additional objects (same as words 1 through 11)



     The following are not part of the object parameters, but are included
     in the display:

           TEXT - cccccc Text value (first six characters from text pool)

     The current object is indicated by an '=' following the object type.

     Note: Dimensions are not stored as objects.



     8.3   User Customizations
           -------------------

     The following object formats are used for user-supplied program
     customizations:


     Word  Name
     ----  ----
        1  TYPE - 001C  User color specification:

        2  DAC  - 00cc  cc = Digital-analog converter number (0-63)

        3  RED  - 00rr  rr = Red component (0-63)

        4  GRN  - 00gg  gg = Green component (0-63)

        5  BLUE - 00bb  bb = Blue component (0-63)

        6  through 11   Not used


     Word  Name
     ----  ----
        1  TYPE - 001F  User-edited fill pattern:

        2  FILL - 00mm  mm = Pattern number (Same as MODE)

        3  DOT1 - bbaa  1st (aa) and 2nd (bb) dot-matrix row

        4  DOT2 - ddcc  3rd (cc) and 4th (dd) dot-matrix row

        5  DOT3 - ffee  5th (ee) and 6th (ff) dot-matrix row

        6  DOT4 - hhgg  7th (gg) and 8th (hh) dot-matrix row

        7  through 11   Not used



     8.4   Text Segment
           ------------

     The text segment contains the values for all text objects:


     Word  Name
     ----  ----
        0  SIZE - nnnn  Length of text segment, in bytes (2 to 1026)

        1  through 512  Text pool (zero or more null-delimited strings)



     8.5   DXF Conversion Notes
           --------------------

     The DXF export format corresponds to AutoCAD Release 11.  Specific
     implementation details are as follows:


     HEADER Section
     --------------

     The EXTMIN, EXTMAX, LIMMIN and LIMMAX variables are set according to
     the diagram extents.

     The TDCREATE and TDUPDATE variables are set according to the diagram
     modification date and time.

     The CLAYER variable is set according to the current color.

     The ORTHOMODE variable is set 'on' in orthographic or isometric modes.

     The AXISMODE variable is set 'on' if the axis lines are on.

     The GRIDMODE variable is set 'on' if the grid is on.

     All dimensioning variables are omitted.



     TABLES Section
     --------------

     Line types CONTINUOUS, DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT,
     BORDER and DIVIDE are defined.

     Four layers are defined, as follows:

          COLOR1 - Blue

          COLOR2 - Green

          COLOR3 - Red

          COLOR4 - White

     The reference flag is set for layers in actual use.

     The default line type is CONTINUOUS in all layers.  The default line
     type is overridden, by entity, for other object line types.

     Text style 'STANDARD' is defined.

     The following tables are present but empty: VPORT, VIEW, DIMSTYLE,
     UCS, APPID.


     BLOCKS Section
     --------------

     The BLOCKS section contains all grouped objects.  Group names are
     assigned as GROUP1, GROUP2, etc.  All grouped objects are converted as
     described in the ENTITIES section.



     ENTITIES Section
     ----------------

     3D export ignores all view rotations and projection.  All objects are
     exported in full 3D coordinates (X,Y,Z).

     2D export applies all view rotations and projection.  The rotated and
     projected objects are exported as 2D images (all Z coordinates zero).

     Objects are converted to DXF entities as follows:


          Object Type                      2D Export      3D Export
          -----------                      ---------      ---------

          Point                            POINT          POINT

          Line                             LINE           LINE

          Rectangle                        LINE (4)       POLYLINE

          Rectangle (filled)               SOLID          3DFACE

          Circle                           CIRCLE         CIRCLE

          Circle (rotated)                 POLYLINE       POLYLINE

          Circle (isometric)               POLYLINE       CIRCLE

          Semi-Circle                      ARC            ARC

          Semi-Circle (rotated)            POLYLINE       POLYLINE

          Semi-Circle (isometric)          POLYLINE       ARC

          Ellipse (all)                    POLYLINE       POLYLINE

          Cube                             LINE (12)      3DFACE (6)

          Text                             TEXT           TEXT

          (dimensions)                     TEXT           (none)




```
{% endraw %}

## MICROCAD.DOC

{% raw %}
```
                        PROGRAM LICENSE
                        ---------------


     MicroCAD 2.0 is owned and (c)Copyright 1992 by David R. Allaway.
     All Rights Reserved.

     This program is not in the public domain, but may be used and freely
     distributed (not for resale) only if accompanied by this documentation
     and provided that the user's Name, Address, and a $35 Registration Fee
     (check or money order in U.S. funds) have been sent, payable to:


                        DAVID R. ALLAWAY
                        P.O. BOX 145
                        READINGTON, NJ 08870


     Registered users are entitled, in addition to continued program use,
     to the following for a minimum period of one year from date of
     registration:

          - Technical assistance at the above address or 1-908-369-8688.

          - Correction of program errors.

          - Updates to the program and documentation, as available.

     License is granted for trial use up to 30 days prior to registration.
     During the trial use period, technical assistance will be provided on
     a limited basis.

     This program is supplied as is.  The author disclaims all warranties,
     expressed or implied, including but not limited to implied warranties
     of merchantability and fitness for a particular purpose.  The author
     assumes no liability for damages, direct or consequential, which may
     result from the use of this program.



     Contents
     --------

     1.0   INTRODUCTION
     1.1     Logo Screen
     1.2     Diagram Screen

     2.0   OBJECT CREATION
     2.1     Draw Line
     2.2     Draw Horizontal or Vertical Line
     2.3     Draw Rectangle or Square
     2.4     Draw Circle or Ellipse
     2.5     Draw Cube
     2.6     Create Text

     3.0   OBJECT MODIFICATION
     3.1     Find Object (Sequential)
     3.2     Grab Object (On Screen Find)
     3.3     Move Object
     3.4     Resize Object
     3.5     Clone Object
     3.6     Solid Fill
     3.7     Pattern Fill
     3.8     Pattern Gallery
     3.9     Pattern Outline
     3.10    Line Types
     3.11    Arrowheads
     3.12    Semi-Circles and Semi-Ellipses
     3.13    Tilt Object
     3.14    Roll Object
     3.15    Spin Object
     3.16    Restore Object Rotations
     3.17    Recolor Object
     3.18    Text Font
     3.19    Erase-Unerase Object
     3.20    Find Erased Object
     3.21    Group-Ungroup
     3.22    Object Statistics



     4.0   DIAGRAM MODIFICATION
     4.1     Redefine Color
     4.2     Reset Colors
     4.3     Color Overlay Mode vs. Color Mix Mode
     4.4     Axis Lines
     4.5     Overlay Grid
     4.6     Zoom-In and Zoom-Out
     4.7     Tilt View
     4.8     Roll View
     4.9     Spin View
     4.10    Normal View
     4.11    Move Diagram
     4.12    Decrease Perspective
     4.13    Orthographic & Isometric Projections
     4.14    Axis Windows
     4.15    Erase Screen
     4.16    Clone Diagram
     4.17    Fill Pattern Editor
     4.18    Linear Dimensioning
     4.19    Orthogonal Rotations

     5.0   DIAGRAM RETRIEVAL AND PRINTING
     5.1     Review Portfolio
     5.2     Diagram Gallery
     5.3     Diagram Export
     5.4     Printer Setup
     5.5     Print Diagram

     6.0   MISCELLANEOUS FUNCTIONS
     6.1     Return to DOS
     6.2     Product Information
     6.3     Cursor Speed Adjust
     6.4     File Data
     6.5     Video Test Patterns
     6.6     Command Line Parameters

     7.0   ERROR CONDITIONS

     8.0   FILE DESCRIPTION
     8.1     View Segment
     8.2     Object Segment
     8.3     User Customizations
     8.4     Text Segment
     8.5     DXF Conversion Notes



     1.0   INTRODUCTION
           ------------

     MicroCAD was created with the following objectives:

       1)  To provide a diagramming facility which combines the ease-of-use
           of paint programs with the object manipulation capabilities of
           CAD programs.

       2)  To provide an icon-based interface, which allows the creation of
           complete diagrams without commands, menus or keyboard entry.

       3)  To provide for both the creation of two-dimensional diagrams,
           and the creation and manipulation of objects in 3-D perspective.

       4)  To achieve fast display speeds without the use of graphics or
           math co-processors.

       5)  To minimize the program size, to allow fast and inexpensive
           distribution.

     The program is designed to run on any DOS or OS/2 system with a VGA
     or VGA-compatible video adapter and a mouse driver installed.  The
     program has been designed to run on a 8086/88, 80286, or 80386/486
     processor.  Features only available on 80386/486 processors are noted.

     A high-quality monitor of at least 14" is recommended.

     Most of the program features are designed to be self-explanatory.  The
     following instructions provide a detailed reference to the operation
     of each function.  These instructions apply to version 2, release 0.



     The distribution consists of the following files:

           MICROCAD.EXE    - MicroCAD executable.

           MICROCAD.ICO    - Program icon for Windows.

           MICROCAD.OS2    - Program icon for OS/2.

           MICROCAD.DOC    - These instructions.

           MICROCAD.INF    - One page summary of program features.

           BULLETIN.ymm    - Supplementary instructions and updates.


     In addition, the following files are created when the program is run:

           DIAGRAM#.nnn    - Created for each saved diagram.

           MICROCAD.DXF    - Contains the latest diagram export copy.



     1.1   Logo Screen
           -----------

     When starting the program, a logo 'movie' will be displayed.  When the
     full logo and copyright info are displayed, click either mouse button
     to proceed to the diagram screen.

     To skip directly to the full logo during the movie: click either mouse
     button.

     To skip directly to the diagram screen: press either mouse button and
     release it after the full logo appears, or double-click during the
     movie.



     1.2   Diagram Screen
           --------------

     The diagram screen consists of:

       1)  The ICON AREA, on the left side of the screen.

           When the cursor is in the icon area, it will appear as an arrow.
           To select a function, move the arrow to an icon and click the
           left or right mouse button, as per the instructions.  When a
           function is selected, the icon will be highlighted.  Some
           functions are momentary, and will return to the previously
           selected icon when complete.

       2)  The DIAGRAM AREA, on the remainder of the screen.

           When the cursor is in the diagram area, it will appear as a
           crosshair (+).  The currently selected diagramming function is
           performed when the left or right mouse button is pressed, as per
           the instructions.

       3)  The ICON HELP MESSAGE, on the top left of the diagram area.

           As the cursor is moved over each icon, the icon help message
           displays the function associated with the icon.  When the cursor
           is in the diagram area, the help message corresponds to the
           currently selected function.

       4)  The DATE, TIME and DIAGRAM NUMBER, on the top right of the
           diagram area.

           This indicates the last modification date and time for a
           retrieved diagram.  This area will be blank for new diagrams.

       5)  The SIGNATURE, in the lower right corner of the diagram area.

           This will appear on all screens, but will be omitted from
           printed diagrams.



     2.0           OBJECT CREATION
                   ---------------

     2.1   Draw Line
           ---------

     To draw a line:

       a)  Click on the Line icon (/).

       b)  Point to the starting point of the line.

       c)  Press either button, and move the cursor toward the desired
           end-point.  The line will expand as the cursor is moved.

       d)  When the cursor is at the desired end point, release the
           button.

     The new line becomes the 'current' object.

     To draw additional lines, repeat from step b).



     2.2   Draw Horizontal or Vertical Line
           --------------------------------

     To draw a horizontal or vertical line:

       a)  Click on the Horizontal/Vertical icon (+).

       b)  Point to either end point of the line.

       c)  Press either button, move the cursor up, down, or sideways.
           The line will expand horizontally or vertically, in the
           predominant direction the cursor is moved.

       d)  When the line is at the desired end point, release the
           button.

     The new line becomes the 'current' object.

     To draw additional horizontal or vertical lines, repeat from step b).



     2.3   Draw Rectangle or Square
           ------------------------

     To draw a rectangle:

       a)  Click on the Rectangle icon.

       b)  Point to any corner of the rectangle.

       c)  Press the left button, move the cursor toward the opposite
           corner.  The rectangle will expand as the cursor is moved.

       d)  When the cursor is at the desired opposite corner, release the
           button.

     The new rectangle becomes the 'current' object.

     To draw a square, use the RIGHT button instead.



     2.4   Draw Circle or Ellipse
           ----------------------

     To draw a circle:

       a)  Click on the Circle icon.

       b)  Point to the center of the circle.

       c)  Press the left button, move the cursor in any direction.  The
           circle will expand as the cursor is moved.  A temporary
           outline box will also be drawn around the circle.

       d)  When the circle reaches the desired size, release the button.
           The temporary outline box will be erased.

     The new circle becomes the 'current' object.

     To draw an ellipse, use the RIGHT button, and start at either side of
     the ellipse.



     2.5   Draw Cube
           ---------

     To draw a 3D cube or box:

       a)  Click on the 3D Cube icon.

       b)  Point to any corner of the box.

       c)  Press the left button, move the cursor to the opposite corner,
           and release.

     The new box becomes the 'current' object.

     All 3D cubes are created with a square base.  That is, with equal
     width and depth.  To create a 3D cube with unequal width and depth,
     create a cube with the desired depth, and then use the resize
     function to adjust the width (see section 3.4).



     2.6   Create Text
           -----------

     To create a line of text:

       a)  Click on the Text icon (abc).

       b)  Click on the desired starting location (bottom-left margin).

       c)  Enter the text on the keyboard.  During entry, the Backspace
           key may be used to correct errors.

       d)  Press the Enter key, or click either mouse button, when done.

     The new text becomes the 'current' object.

     To enter additional text, repeat from step b).

     A temporary box shows where the text will appear on the diagram.  The
     size of the box is adjusted according to the text font, and shows the
     space the text will occupy under normal zoom.  If the box does not
     appear in the desired location, click again to remove, and repeat from
     step b).  Alternatively, the text may be entered anywhere, and then
     moved to the desired exact location (see Move Object).



     3.0           OBJECT MODIFICATION
                   -------------------


     3.1   Find Object (Sequential)
           ------------------------

     To find an object and make it the 'current' object, click on the
     Find (?) icon.

     Each time the Find icon is clicked, a different object will blink
     and become the current object.

     If the button is held, the object will flash continuously.  This may
     be helpful to spot smaller objects.

     If this function encounters a group, the group will blink once as a
     single object.

     Objects may also be selected using the On Screen Find function.



     3.2   Grab Object (On Screen Find)
           ----------------------------

     To select an object directly on the screen, click on the Find (?) icon
     and then click directly on the object.  The object will blink to
     signal that it has been selected.  If there are many objects in the
     diagram, it may be necessary to hold the button for a second until the
     object starts blinking.  It may be necessary to position the center of
     the cross-hairs exactly on the object.

     The on screen grab includes a move function.  If the button is held
     while the object is blinking, the object may be moved to a new
     location.  Simply slide the cursor while keeping the button held.

     It is also possible to press the button, and then slide the cursor
     across an object.  The cursor will grab the object as it goes by.

     To move an object in the Z-axis, press the left then also the RIGHT
     button.  Pushing the mouse away will push the object 'into' the screen
     (away from the viewer).  Pulling the mouse closer will pull the object
     'out of' the screen (toward the viewer).

     An object may also be moved using the Move function.



     3.3   Move Object
           -----------

     To relocate the current object within the diagram:

       a)  Click on the Move icon.

       b)  Position the cursor anywhere on the screen and press the left
           button.

       c)  Move the cursor, and the current object will 'follow'.

       d)  When the object is in the desired location, release the button.

     This may be repeated, from step b).

     If a group member is selected, all members of the group will be moved.

     To move an object in the Z-axis, press the left and then also the
     RIGHT button.  Pushing the mouse away will push the object 'into' the
     screen (away from the viewer).  Pulling the mouse closer will pull the
     object 'out of' the screen (toward the viewer).

     An object may also be moved using the On Screen Find function.



     3.4   Resize Object
           -------------

     To adjust the shape or size of the current object:

       a)  Click on the Move icon.

       b)  Position the cursor anywhere on the screen and press the RIGHT
           button.

       c)  Move the cursor, and the end-point for the object will change.

       d)  When the object is adjusted as desired, release the button.

     This may be repeated, from step b).

     If a group member is selected, all members of the group will be
     adjusted.

     The resize object function is a very powerful tool for modifying
     diagrams.  Because the end-point controls the length, size, angle,
     and shape of every object, as much control can be exercised as when
     the object was originally created.  If, for example, a line is drawn
     which does not exactly reach the desired point on the diagram (or that
     point has changed), it can be repaired without redrawing it.

     Because the resize object function is on the same icon as the move
     function, it is possible to rework an object by alternating between
     the left (move) and RIGHT (resize) buttons until the object is in
     exactly the desired shape and location.



     3.5   Clone Object
           ------------

     To create an exact copy of the current object:

       a)  Click on the Clone icon.

       b)  Position the cursor anywhere on the screen, press and hold the
           left button.  The current object will temporarily disappear.

       c)  Move the cursor.  The copy will follow, and the original will
           reappear.

       d)  When the new object is in the desired location, release the
           button.

     The new copy will become the current object.

     To create additional copies, repeat from step b).

     If a group member is selected, all members of the group will be
     copied.

     To clone an object in the Z-axis, press the left then also the RIGHT
     button.  Pushing the mouse away will push the object 'into' the screen
     (away from the viewer).  Pulling the mouse closer will pull the object
     'out of' the screen (toward the viewer).

     An object can be 'cloned in place' by clicking on the Clone icon, and
     then clicking on the screen without moving the cursor.  Such a double
     object will not appear, because it will cancel itself out.  If the new
     object is then recolored, additional object color combinations can be
     created.  This requires that the program be in Color Mix Mode.



     3.6   Solid Fill
           ----------

     To fill the current rectangle, square or circle* with solid color,
     click on the Fill-Unfill icon.

     To remove the solid fill, click again.

     If the current object is a group member, all applicable members of the
     group will be solid filled or un-filled.

     The solid fill will not be displayed on rotated objects.

     The solid fill will reverse the pattern on any pattern-filled object.

     * Solid-filled circles are only available on 80386/486 processors.



     3.7   Pattern Fill
           ------------

     To fill the current rectangle, square or circle* with a special
     pattern, click on the Pattern Fill icon.

     To change to the next pattern, click again.

     If the current object is a group member, all applicable members of the
     group will be pattern filled.

     The pattern fill will not be displayed on rotated objects.

     To reverse the pattern, click on the Fill-Unfill icon.

     * Pattern-filled circles are only available on 80386/486 processors.



     3.8   Pattern Gallery
           ---------------

     To display all of the available fill patterns, including reversed
     versions, click on the Pattern Fill icon with the RIGHT button.  The
     cursor will point to the current object pattern.

     To select one of the displayed patterns, point to it and click on the
     left button.  The current object, if applicable, will be filled with
     the selected pattern.

     If the current object is a group member, all applicable members of the
     group will be pattern filled.

     Customized fill patterns may also be created, see Fill Pattern Editor.



     3.9   Pattern Outline
           ---------------

     To outline the perimeter of a pattern-filled rectangle, click on the
     Fill-Unfill icon with the RIGHT button.

     To remove the perimeter outline, click again.

     If the current object is a group member, all applicable members of the
     group will be outlined.

     The outline will also prevent reverse-filled patterns from running all
     the way to the edge of the rectangle.

     The outline will only be used in the primary window.



     3.10  Line Types
           ----------

     To change the current line, rectangle, square, or 3D box from solid
     line to dashed line, click on the Dashed Arrow icon.

     Each click will step through the available line types.  After the last
     line type, the object will return to solid line.

     If the current object is a group member, all applicable members of the
     group will be changed.



     3.11  Arrowheads
           ----------

     To add an arrowhead to the end of a vertical or horizontal line,
     click on the Dashed Arrow icon with the RIGHT button.

     To move the arrowhead to the opposite end, click again.

     To add an arrowhead to both ends, click again.

     To remove both arrowheads, click again.



     3.12  Semi-Circles and Semi-Ellipses
           ------------------------------

     To change the current circle or ellipse from Full to One-Half or
     One-Quarter, click on the Semi-Circle icon, as follows:

     To change from Full to Top half, click once.

     To change from Top half to Bottom half, click again.

     To change from Bottom half to Right half, click again.

     To change from Right half to Left half, click again.

     To change from Left half to Upper-Right quarter, click again.

     To change from Upper-Right to Lower-Right quarter, click again.

     To change from Lower-Right to Lower-Left quarter, click again.

     To change from Lower-Left to Upper-Left quarter, click again.

     To change from Upper-Left to Full, click again.



     3.13  Tilt Object
           -----------

     To Tilt (Pitch) the current object forward, click on the Tilt icon.

     Each click rotates the object by one degree around the center of the
     object.

     If the button is held, the object will tilt continuously until
     released.  If the RIGHT button is pressed while the left button is
     still held, the direction will reverse.

     If the current object is a group member, the entire group will be
     rotated around the group center.



     3.14  Roll Object
           -----------

     To Roll the current object clockwise, click on the Roll icon.

     Each click rotates the object by one degree around the center of the
     object.

     If the button is held, the object will roll continuously until
     released.  If the RIGHT button is pressed while the left button is
     still held, the direction will reverse.

     If the current object is a group member, the entire group will be
     rotated around the group center.



     3.15  Spin Object
           -----------

     To Spin (Yaw) the current object left-to-right, click on the Spin
     icon.

     Each click rotates the object by one degree around the center of the
     object.

     If the button is held, the object will spin continuously until
     released.  If the RIGHT button is pressed while the left button is
     still held, the direction will reverse.

     If the current object is a group member, the entire group will be
     rotated around the group center.



     3.16  Restore Object Rotations
           ------------------------

     To restore the current object rotations (roll, tilt, spin) to zero,
     click on the Normal View icon.



     3.17  Recolor Object
           --------------

     By clicking on any of the four primary color icons, the current object
     color is changed to the indicated color.

     The indicated color also becomes the color for any new objects.

     If the current object is a group member, all objects in the group will
     be recolored.



     3.18  Text Font
           ---------

     The default text font is 5x7, but may be changed to 8x14.

     To change the text font, click on the Text icon (abc) with the RIGHT
     button.  This changes the font on the current object (if it is
     text), and on any new text.  Any other text will remain unchanged.

     To change the font back, click again.

     When changing fonts, the text width and height will change, but the
     left and bottom margins will remain the same.



     3.19  Erase-Unerase Object
           --------------------

     To erase the current object, click on the Erase icon.

     If the current object is a group member, the entire group will be
     erased.

     To immediately restore the erased object, click again.

     To restore a previously erased object, use the Find Erased function.

     If the object dimensions are displayed, the first click will erase the
     dimensions only.  The second click will erase the object.  The third
     click will restore both the object and the dimensions.

     Erased objects will be remembered, even after leaving the program,
     unless the diagram becomes so complex that space must be reclaimed, in
     which case the oldest erased objects will be forgotten first.



     3.20  Find Erased Object
           ------------------

     To find a previously erased object, click on the Find (?) icon with
     the RIGHT button.

     Each time the RIGHT button is clicked or held, a different erased
     object will blink on momentarily, or flash continuously.

     By then clicking on the Erase icon (with the left button), the object
     can be 'unerased'.



     3.21  Group-Ungroup
           -------------

     Multiple objects may be grouped together to behave as a single object.
     They may, for example, be moved, cloned, recolored, rotated, etc. as
     a single object.

     To identify the first group member:

       a)  Click on the Find (?) icon.

       b)  Point to an object on the screen and click or hold the RIGHT
           button.  The object should blink or flash to acknowledge.

     To identify each additional group member:

       c)  Point to an object to be added and click or hold the RIGHT
           button, all of the current group members should blink together.

     Additional group members may be added at any time, by clicking on the
     Find icon, then clicking anywhere on the group with the left button to
     select the group.  Then click on an object which is not already a
     member, with the RIGHT button.

     To ungroup an object, first click on it with the left button.  The
     entire group should blink.  Then click on the object with the RIGHT
     button.  The object should blink individually to signify that it has
     been disconnected.

     An object may not be added to or removed from a group if either have
     been rotated.  This is because the change in the group center would
     impact the rotations.  Instead, first restore the object and/or group
     to normal view, then add or remove the object, then reapply the
     desired rotations.



     3.22  Object Statistics
           -----------------

     The current object statistics and related data are displayed, at the
     bottom of the screen, whenever the axis windows are on.  These
     include:

         - The cursor position (X,Y)
         - The diagram scale (1/8, 1/4, 1/2, 1:1, 2X, 4X, 8X)
         - The current object position (X,Y,Z)
         - The current object size (Height, Width, Depth)
         - The current line length
         - The current line slope (degrees from horizontal)
         - The current square, rectangle, circle or ellipse area
         - The current object rotations (roll, pitch, yaw)
         - The projection mode (PERSP, ORTHO, ISO)

     The statistics always reflect the current object, and are updated as
     the cursor is moved, or as an object is moved, rotated or resized.
     When creating a new object, the statistics are updated as the object
     is being created.  This may be used to create or resize an object to
     exact scale.

     The positions are displayed relative to the axis origin at the center
     of the screen (see Axis Lines).  The position of a line corresponds to
     its left end-point.  The position of a square or rectangle corresponds
     to its upper-left corner.  The position of a circle or ellipse
     corresponds to its center.

     The object rotations are displayed in degrees clockwise, as viewed
     from the axis windows.  These do not include the view rotations.

     Line lengths may also be displayed directly on the diagram.  See
     Linear Dimensioning (section 4.18).

     If linear dimensioning in 10ths, ft.-in. or 16ths is in use, the
     object statistics will be shown accordingly.  In ft.-in., areas will
     be shown in sq.-in. up to 143 sq.-in., and sq.-ft. (or fraction of)
     up to 30,000 sq.-ft.  In 16ths, areas will be shown in sq.-in. (or
     fraction of) up to 30,000 sq.-in.



     4.0           DIAGRAM MODIFICATION
                   --------------------

     4.1   Redefine Color
           --------------

     To redefine any of the four primary colors, or the background color,
     click on the corresponding Color icon with the RIGHT button.

     A gallery of 64 standard colors will be displayed.  The cursor will
     point to the current color.  To select one of the standard colors,
     point to it and click on the left button.

     To select from among 4,096 custom colors, point to the closest
     standard color and click on the RIGHT button.  A gallery of 64
     variations on the standard color will be displayed.  To select a custom
     variation, point to it and click on the left button.  To cancel
     without selecting one of the custom variations, click again on the
     RIGHT button.



     4.2   Reset Colors
           ------------

     To select one of four standard color schemes, click on the Overlay-Mix
     icon with the RIGHT button.  To select the next color scheme, click
     again.  The four color schemes are:

       1)  Bright colors on black background.

       2)  Bright colors on dark-grey background.

       3)  Dark colors on light-grey background.

       4)  Dark colors on white background.

     The four color schemes all use red, green and blue, and are suitable
     for different ambient lighting conditions.

     It may be necessary to select one of these color schemes when using a
     medium-resolution monitor, in order to prevent display distortion.



     4.3   Color Overlay Mode vs. Color Mix Mode
           -------------------------------------

     The four primary colors normally mix with each other to produce
     sixteen different color combinations.  Alternatively, the colors may
     be changed to overlay each other in a particular order.

     To switch from color mixing to color overlay, click on the Overlay-Mix
     (multi-color) icon.

     To restore color mixing, click on the Overlay-Mix icon again.

     The current mix or overlay technique is displayed on the icon itself.



     4.4   Axis Lines
           ----------

     To turn on the X, Y and Z axis lines, click on the Axis icon.  The Z
     line is only visible if the diagram has been rotated, or in
     orthographic or isometric projection.

     To turn the axis lines off, click again.



     4.5   Overlay Grid
           ------------

     To turn the 10-by-10 overlay grid on, click on the Grid icon.  The
     axis windows, if on, will be turned off.

     To turn the grid off, click again.

     While the grid is on, newly created objects will automatically be
     aligned on the nearest grid dot.



     4.6   Zoom-In and Zoom-Out
           --------------------

     To increase the display scale by 2X in the main window, click on the
     Zoom icon.  This may be repeated up to three times beyond normal (to
     8X scale).

     To decrease the display scale by 1/2 in the main window, click on the
     Zoom icon with the RIGHT button.  This may be repeated up to three
     times beyond normal (to 1/8th scale).

     To restore the scale to 1:1, click on the Normal View icon with the
     RIGHT button.

     The zoom function zooms in on the center of the screen.  To zoom in on
     another portion of the diagram, use the Move Diagram function to move
     the desired portion of the diagram to the center of the screen.  The
     axis lines may be used to help center the desired portion of the
     diagram.

     Zooming-in moves the viewer closer to the center of the diagram, which
     increases the perspective effect.  Zooming-out moves the viewer
     further from the center of the diagram, which decreases the
     perspective effect.



     4.7   Tilt View
           ---------

     To Tilt (Pitch) the diagram view forward, click on the Tilt icon
     with the RIGHT button.

     Each click rotates the view by one degree around the X axis.

     If the RIGHT button is held, the view will tilt continuously until
     released.  If the left button is pressed while the RIGHT button is
     still held, the direction will reverse.

     To restore the view to zero tilt, click on the Normal View icon with
     the RIGHT button.



     4.8   Roll View
           ---------

     To Roll the diagram view clockwise, click on the Roll icon with the
     RIGHT button.

     Each click rotates the view by one degree around the Z axis.

     If the RIGHT button is held, the view will roll continuously until
     released.  If the left button is pressed while the RIGHT button is
     still held, the direction will reverse.

     To restore the view to zero roll, click on the Normal View icon with
     the RIGHT button.



     4.9   Spin View
           ---------

     To Spin (Yaw) the diagram view left-to-right, click on the Spin icon
     with the RIGHT button.

     Each click rotates the view by one degree around the Y axis.

     If the RIGHT button is held, the view will spin continuously until
     released.  If the left button is pressed while the RIGHT button is
     still held, the direction will reverse.

     To restore the view to zero spin, click on the Normal View icon with
     the RIGHT button.



     4.10  Normal View
           -----------

     To restore the view rotations (roll, tilt, spin) to zero, and return
     to normal zoom, click on the Normal View icon with the RIGHT button.



     4.11  Move Diagram
           ------------

     To relocate the entire diagram within the display window:

       a)  Click on the Move icon with the RIGHT button.

       b)  Position the cursor anywhere on the screen and press either
           button.

       c)  Move the cursor, and the entire diagram will follow.

       d)  When the diagram is in the desired location, release the button.

     This may be repeated, from step b).

     To return to the original location, click on the Normal View icon with
     the RIGHT button.



     4.12  Decrease Perspective
           --------------------

     The diagram is normally displayed at maximum perspective.

     To decrease the perspective, click on the Perspective icon.

     Decreasing the perspective is the same as increasing the viewing
     distance, and zooming in to maintain the same scale.  Decreased
     perspective flattens the image like a telephoto lens.

     To return to maximum perspective, click again.



     4.13  Orthographic & Isometric Projections
           ------------------------------------

     The diagram is normally displayed in perspective projection.

     To switch from perspective projection to orthographic projection,
     click on the Axis icon with the RIGHT button.

     To switch from orthographic to isometric projection, click again on
     the Axis icon with the RIGHT button.

     To switch from isometric to perspective projection, click again on the
     Axis icon with the RIGHT button.

     In orthographic and isometric modes, view rotations and perspective
     are ignored.  The diagram move, zoom, object rotation and orthogonal
     rotation functions remain in effect.



     4.14  Axis Windows
           ------------

     Click on the Windows icon to divide the screen into four parts:
     3D perspective view, front view, side view and top view.

     Click again on the Windows icon to restore to 3D perspective view
     only.

     The axis windows are displayed at 1/4 scale, in 3D, but without
     perspective.  Text is not displayed in the axis windows.

     When the axis windows are on, the cursor position and current object
     statistics are also displayed (see Object Statistics).



     4.15  Erase Screen
           ------------

     To erase the currently displayed diagram from the screen, and reset
     the display parameters, click on the Erase icon with the RIGHT button.

     The displayed diagram will be saved, including any changes.



     4.16  Clone Diagram
           -------------

     To create a new diagram from an existing diagram, retrieve the
     existing diagram (see Review Portfolio), then click on the Clone icon
     with the RIGHT button.

     The existing diagram will be saved, including any changes.  The date,
     time and diagram number will be erased from the display.  Any
     subsequent changes will be saved as a new diagram.

     This feature may also be used to save interim versions of a diagram,
     as it is being created or modified.  Simply click on the Clone icon
     with the RIGHT button before proceeding with a change or group of
     changes.  This will allow the version before the changes to be
     retrieved at a later time, if desired.



     4.17  Fill Pattern Editor
           -------------------

     The fill patterns supplied with the program may be edited to create
     customized fill patterns.

     To edit a fill pattern, click on the Pattern Fill icon with the RIGHT
     button to display the pattern gallery.  Point to the pattern to be
     edited and click on the RIGHT button.  This may be a pattern which is
     similar to the desired pattern, or any pattern which is not needed.
     The blank and solid-fill patterns may not be edited.

     The dot matrix for the selected pattern will be displayed, along with
     the resultant fill pattern in normal and reverse formats.  To return
     to the pattern gallery without editing the pattern, click on the RIGHT
     button again.

     To edit the pattern, point to a cell in the matrix and click on the
     left button.  The cell will be toggled on or off, and the resultant
     fill pattern will be updated.

     When the editing is complete, click on the RIGHT button to return to
     the diagram screen.



     4.18  Linear Dimensioning
           -------------------

     To display the dimensions of each line, rectangle or cube on the
     diagram, click on the Axis Windows icon with the RIGHT button.  The
     dimensions will be displayed in whole numbers.

     - To add a decimal point to the dimensions, click again.

     - To change the dimensions to feet and inches, click again.

     - To change the dimensions to inches and 16ths, click again.

     - To remove all dimensions, click again.

     Dimensions may be removed for an individual object by clicking on the
     Erase icon (see section 3.19).  Individual object dimensions, once
     removed, will remain off unless individually restored.

     The Zoom In/Out function will alter the apparent size of all objects
     without changing the dimensions.  This may be used to set the
     effective scale of the diagram.



     The following chart indicates the minimum and maximum dimensions which
     may be drawn with various combinations of zoom and dimensioning units.
     This may be used to select an appropriate starting point for creating
     a diagram.  Note that the zoom may be adjusted while editing the
     diagram, to draw objects having larger and/or finer dimensions.

        Scale   Unit         10ths        Ft.-In.      16ths
        -----   ----         -----        -------      -----

        1/8     8 to 3456    .8 to 345.6  8" to 288'   1/2"  to 216"

        1/4     4 to 1728    .4 to 172.8  4" to 144'   1/4"  to 108"

        1/2     2 to 864     .2 to 86.4   2" to 72'    1/8"  to 54"

        1:1     1 to 432     .1 to 43.2   1" to 36'    1/16" to 27"

        2X      1 to 216     .1 to 21.6   1" to 18'    1/16" to 13 1/2"

        4X      1 to 108     .1 to 10.8   1" to 9'     1/16" to 6 3/4"

        8X      1 to 54      .1 to 5.4    1" to 4'6"   1/16" to 3 3/8"

     The maximum value represents the height of the primary window, with
     the axis windows on.  Slightly larger dimensions are available with
     the axis windows off, and in the horizontal direction.



     4.19  Orthogonal Rotations
           --------------------

     The entire diagram may be rotated by 90 degrees in order to provide a
     left side, right side, back, top or bottom view in the main (3D)
     window.  With the axis windows on, simply click on the axis window
     displaying the desired view.

     If the SIDE window is clicked on, the diagram will be rotated by 90
     degrees counter-clockwise as viewed from the top:

     - The first click will rotate the diagram to the left side.
     - The second click will rotate the diagram to the back (backwards).
     - The third click will rotate the diagram to the right side.
     - The fourth click will restore the diagram to the front.

     If the TOP window is clicked on, the diagram will be rotated by 90
     degrees clockwise as viewed from the left side:

     - The first click will rotate the diagram to the top.
     - The second click will rotate the diagram to the back (upside down).
     - The third click will rotate the diagram to the bottom.
     - The fourth click will restore the diagram to the front.

     If the RIGHT button is used, in either window, the direction of
     rotation will be reversed.

     This function, unlike the tilt, roll and spin functions, changes the
     actual object orientations, not just the view.  This allows additional
     objects to be drawn at 90 degree angles to the original diagram.

     The axis windows (see 4.14) may be turned on temporarily in order to
     use this function.  The diagram rotations will remain in effect after
     the windows have been turned off.



     5.0           DIAGRAM RETRIEVAL AND PRINTING


     5.1   Review Portfolio
           ----------------

     To retrieve the next diagram in directory sequence, click on the
     Review Portfolio icon.

     A retrieved diagram will display the date and time of last
     modification and the diagram number.

     To fast-forward through the diagram portfolio, press both buttons
     simultaneously.

     To view the entire portfolio 64 diagrams at a time, use the Diagram
     Gallery feature.

     Any new or modified diagram in progress will be automatically saved
     when the Review Portfolio function is used.



     5.2   Diagram Gallery
           ---------------

     To view the entire portfolio, click on the Review Portfolio icon with
     the RIGHT button.

     Up to 64 diagrams will be displayed at 1/8th scale with default
     colors.

     Click on any diagram to retrieve it, or click anywhere with the RIGHT
     button to display the next 64 diagrams.

     A retrieved diagram will display the diagram number and the date and
     time of last modification.

     Any new or modified diagram in progress will be automatically saved
     when the Diagram Gallery function is used.



     5.3   Diagram Export
           --------------

     Diagrams may be exported to other programs which can accept files in
     the Drawing Interchange Format (DXF).  This includes many CAD,
     graphics and word-processing programs.

     No special action needs to be taken to export a diagram.  The file
     MICROCAD.DXF will always contain the most recently displayed diagram,
     in DXF format.  This file may be renamed or copied to another file, to
     save the exported diagram more permanently.  Alternatively, a name for
     the export file may be specified on the command line when starting the
     program.  Refer to section 6.6 for details.

     Because many programs which accept DXF can only interpret two-
     dimensional data, diagrams created with 3-D information must be given
     special consideration, as follows:

     If a 3-D diagram is exported for use in a program which can correctly
     render 3-D images, the axis windows should be turned ON (see 4.14)
     before exiting the diagram.  This will cause all 3-D data to be
     exported 'as is'.  The diagram view, perspective and zoom may then be
     handled by the receiving program.  This is intended for 3-D CAD
     programs.

     If a 3-D diagram is exported for use in a program which cannot render
     3-D images, the axis windows should be turned OFF (see 4.14) before
     exiting the diagram.  This will cause a 'snapshot' of the current
     diagram to be exported as a two-dimensional image, according to the
     current viewing angle and projection mode.  The image will then appear
     in this fixed orientation to the receiving program.  This is intended
     for word-processing and 2-D CAD programs.

     If linear dimensioning is turned on, all dimensions will be exported
     as text entities.  This allows the dimensions to appear in programs
     which cannot automatically calculate dimensions.  If the object
     dimensions are to be altered in the receiving program, or dimensions
     are not required, linear dimensioning should be turned off before
     exiting the diagram (see section 4.18).  Dimensioning is automatically
     turned off for 3-D exports.

     For technical notes on the DXF conversion, refer to section 8.5.



     5.4   Printer Setup
           -------------

     To step through the available printer types, click on the Print icon
     with the RIGHT button.  The available printer types are:

         - IBM/Epson, 8-pin mode, landscape, 60 dpi.

         - Epson LQ, 24-pin mode, landscape, 120 dpi.

         - HP LaserJet, portrait mode, 75 dpi.

         - HP LaserJet, landscape mode, 75 dpi.

         - HP PaintJet, 16-color portrait mode, run-length encoded, 90 dpi.

     These selections may also work for other printer models with similar
     specifications.  The program cannot tell if the selected type matches
     the printer.  If it does not, incorrect output will result.

     Click again with the left button to print the diagram.

     Some printers may be able to accommodate multiple type selections.
     When printing to a file, do not mix type selections unless the printer
     to be used can accommodate all of the selected types.



     5.5   Print Diagram
           -------------

     To print the diagram, on the printer type shown, click on the Print
     icon.

     Use Printer Setup to change the printer type.

     Printed output is directed to the default printer (LPT1).  The program
     will normally wait if the printer is not ready, or reject the print
     function if the printer is inaccessible.

     An alternate device name, or file name (up to 33 characters), for
     printed output may be specified on the command line, for example:

           /LPT2

     If a file name is specified (for example: /DIAGRAMS.PRT), and it does
     not exist, it will be created.  The file will be added-to each time
     the Print function is used.  The file may be deleted or renamed after
     printing.



     6.0           MISCELLANEOUS FUNCTIONS
                   -----------------------


     6.1   Return to DOS
           -------------

     To exit the program, click on the DOS icon (C:>).  Any diagram changes
     will be saved.

     The program license and registration information may be displayed.
     Click again to return to DOS.



     6.2   Product Information
           -------------------

     To display this document while running the program, click on the
     Product Info icon.  Each additional click will display the next page.
     To page backward, click on the RIGHT button.



     6.3   Cursor Speed Adjust
           -------------------

     To slow the cursor speed by half (with respect to the mouse movement),
     click on the Perspective icon with the RIGHT button.

     To double the cursor speed (vs. normal), click again.

     To restore normal cursor speed, click again.



     6.4   File Data
           ---------

     To view the current diagram object catalog and display parameters,
     press on the DOS icon (C:>) with the RIGHT button.  Release to remove.

     See FILE DESCRIPTION for details.



     6.5   Video Test Patterns
           -------------------

     For a black & white video-resolution test pattern, click on the
     Product Info icon with the RIGHT button.

     For a 16-by-16 color-saturation test pattern, click again.

     For a grey-scale and color-hue test pattern, click again.

     To return to the displayed diagram, click again.



     6.6   Command Line Parameters
           -----------------------

     The default names for the printer and export files may be changed via
     command line parameters.

           /printer    - 'printer' is the printer device name or file name.

                         The default printer device name is LPT1.

           =export     - 'export' is the export file name.

                         The default export file name is MICROCAD.DXF.

     File names may be simple (=drawing.123) or may contain the path and
     file name (=c:\diagrams\drawing.123).  The path and file name may not
     exceed 33 characters.



     7.0           ERROR CONDITIONS
                   ----------------

     The program will return immediately to DOS, with an error message,
     under the following conditions:

     Message
     -------

     'VGA Required.'

          The program must be run on a PC equipped with a VGA or
          fully VGA-compatible video adapter.


     'Download incomplete.'

          A complete copy of the documentation (MICROCAD.DOC)
          corresponding to this program release must be present.


     'Mouse driver not installed.'

          A mouse driver must be installed.  Install and restart.


     'Insufficient disk space for conversion.'

          Additional disk space is required in order to convert existing
          diagrams to the current format.  Make additional space available
          and restart.  The additional space will be freed as soon as the
          conversion is complete.


     Miscellaneous error conditions which do not prevent the program from
     continuing are signaled by an audible beep.



     8.0           FILE DESCRIPTION
                   ----------------

     The following is a description of the file format for each diagram.
     Each diagram comprises three variable-length segments, as follows.
     Note: All words are stored with the low-order byte first.


     8.1   View Segment
           ------------

     The view segment contains parameters which apply to the entire
     diagram:


     Word  Name
     ----  ----
        0  SIZE - 002E  Length of view segment, in bytes (46)

        1  CURR - nnnn  Current-object offset (not displayed)

        2  XMOV - nnnn  Diagram shift in X-axis (left)

        3  YMOV - nnnn  Diagram shift in Y-axis (up)

        4  ZMOV - nnnn  Diagram shift in Z-axis (not used)

        5  UNIT - uupp  uu = Dimensioning units:

                             00 - Dimensioning off
                             01 - Integer
                             02 - 10ths
                             03 - Ft.-In.
                             04 - 16ths

           PROJ -       pp = Projection mode:

                             00 - Perspective
                             01 - Orthographic
                             02 - Isometric



        6  YEAR - nnnn  Year modified

        7  DATE - ddmm  Month (mm) and Day (dd) modified

        8  TIME - mmhh  Hour (hh) and Minute (mm) modified

        9  MODE - mmtt  mm = Color overlay/mix mode:

                             00 - Overlay mode
                             01 - Mix mode

           FILE -       tt = Diagram type:

                             00 - File not yet created
                             02 - MicroCAD version 2.0

       10  TILT - nnnn  Diagram tilt (pitch) in degrees counter-clockwise

       11  SPIN - nnnn  Diagram spin (yaw) in degrees counter-clockwise

       12  ROLL - nnnn  Diagram roll in degrees counter-clockwise

       13  DIST - ddzz  dd = Perspective viewing distance exponent

           ZOOM -       zz = Zoom out (+) or in (-) scaling exponent

       14  AXIS - aavv  aa = Axis lines status:

                             00 - Axis lines off
                             01 - Axis lines on

           VIEW -       vv = Axis window status:

                             00 - Axis windows off
                             01 - Axis windows on

       15 through 22    Palette registers (not displayed)



     The following are not part of the view parameters, but are included in
     the display for program support:

           PROC - nnnn  Processor type (8086, 0286, 0386, 0486)

           MCAD - vvrr  MicroCAD version (vv) and release (rr)

           MOUS - vvrr  Mouse driver version (vv) and release (rr)

           ADDR - xxxx  Program address of last interrupt

           CODE - xxxx  Code(s) associated with last interrupt

           POOL - nnnn  Offset of next available byte in text pool



     8.2   Object Segment
           --------------

     The object segment contains the descriptions of each object within the
     diagram:


     Word  Name
     ----  ----
        0  SIZE - nnnn  Length of object segment, in bytes (3 to 32761)

        1  TYPE - ggtt  gg = Group number (00 if not a group member)

                        tt = Object type:

                             00 - Empty slot (not displayed)
                             01 - Point
                             02 - Line
                             03 - Ellipse (includes Circle)
                             04 - Rectangle (includes Square)
                             06 - Text
                             08 - 3D Box (Cube)
                             1C - Color specification
                             1F - Fill pattern
                             8x - Erased object
                             FF - End of catalog (not displayed)

        2  Y0   - nnnn  Beginning Y-axis coordinate

        3  X0   - nnnn  Beginning X-axis coordinate

        4  Z0   - nnnn  Beginning Z-axis coordinate

        5  Y1   - nnnn  Ending Y-axis coordinate

        6  X1   - nnnn  Ending X-axis coordinate

        7  Z1   - nnnn  Ending Z-axis coordinate or text offset in pool

     All coordinates correspond to the screen row (Y) and column (X),
     relative to the upper-left corner of the screen at normal zoom.



     Word  Name
     ----  ----
        8  MODE - mmsc  mm = Mode:

                             01 - Alternate line type or text font
                             02 - Outlined pattern
                             04 - Solid fill or reverse pattern
                             x0 - Pattern fill 0-30 (even)
                             x8 - Pattern fill 1-31 (odd)
                             40 - Right or top arrow
                             80 - Left or bottom arrow

                             Alternate line type:

                             01 - Dashed       09 - Dotted
                             03 - Hidden       0B - Dash-Dot
                             05 - Center       0D - Border
                             07 - Phantom      0F - Divide

                        s  = Circle/ellipse slice:

                             1 - Upper half    5 - Upper-right quadrant
                             2 - Lower half    6 - Lower-right quadrant
                             3 - Right half    7 - Lower-left quadrant
                             4 - Left half     8 - Upper-left quadrant

                          or 8 = Object dimensioning off

                        c  = Color (0-3)

        9  TILT - nnnn  Object tilt (pitch) in degrees counter-clockwise

       10  ROLL - nnnn  Object roll in degrees counter-clockwise

       11  SPIN - nnnn  Object spin (yaw) in degrees counter-clockwise

       12 through 16379 Additional objects (same as words 1 through 11)



     The following are not part of the object parameters, but are included
     in the display:

           TEXT - cccccc Text value (first six characters from text pool)

     The current object is indicated by an '=' following the object type.

     Note: Dimensions are not stored as objects.



     8.3   User Customizations
           -------------------

     The following object formats are used for user-supplied program
     customizations:


     Word  Name
     ----  ----
        1  TYPE - 001C  User color specification:

        2  DAC  - 00cc  cc = Digital-analog converter number (0-63)

        3  RED  - 00rr  rr = Red component (0-63)

        4  GRN  - 00gg  gg = Green component (0-63)

        5  BLUE - 00bb  bb = Blue component (0-63)

        6  through 11   Not used


     Word  Name
     ----  ----
        1  TYPE - 001F  User-edited fill pattern:

        2  FILL - 00mm  mm = Pattern number (Same as MODE)

        3  DOT1 - bbaa  1st (aa) and 2nd (bb) dot-matrix row

        4  DOT2 - ddcc  3rd (cc) and 4th (dd) dot-matrix row

        5  DOT3 - ffee  5th (ee) and 6th (ff) dot-matrix row

        6  DOT4 - hhgg  7th (gg) and 8th (hh) dot-matrix row

        7  through 11   Not used



     8.4   Text Segment
           ------------

     The text segment contains the values for all text objects:


     Word  Name
     ----  ----
        0  SIZE - nnnn  Length of text segment, in bytes (2 to 1026)

        1  through 512  Text pool (zero or more null-delimited strings)



     8.5   DXF Conversion Notes
           --------------------

     The DXF export format corresponds to AutoCAD Release 11.  Specific
     implementation details are as follows:


     HEADER Section
     --------------

     The EXTMIN, EXTMAX, LIMMIN and LIMMAX variables are set according to
     the diagram extents.

     The TDCREATE and TDUPDATE variables are set according to the diagram
     modification date and time.

     The CLAYER variable is set according to the current color.

     The ORTHOMODE variable is set 'on' in orthographic or isometric modes.

     The AXISMODE variable is set 'on' if the axis lines are on.

     The GRIDMODE variable is set 'on' if the grid is on.

     All dimensioning variables are omitted.



     TABLES Section
     --------------

     Line types CONTINUOUS, DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT,
     BORDER and DIVIDE are defined.

     Four layers are defined, as follows:

          COLOR1 - Blue

          COLOR2 - Green

          COLOR3 - Red

          COLOR4 - White

     The reference flag is set for layers in actual use.

     The default line type is CONTINUOUS in all layers.  The default line
     type is overridden, by entity, for other object line types.

     Text style 'STANDARD' is defined.

     The following tables are present but empty: VPORT, VIEW, DIMSTYLE,
     UCS, APPID.


     BLOCKS Section
     --------------

     The BLOCKS section contains all grouped objects.  Group names are
     assigned as GROUP1, GROUP2, etc.  All grouped objects are converted as
     described in the ENTITIES section.



     ENTITIES Section
     ----------------

     3D export ignores all view rotations and projection.  All objects are
     exported in full 3D coordinates (X,Y,Z).

     2D export applies all view rotations and projection.  The rotated and
     projected objects are exported as 2D images (all Z coordinates zero).

     Objects are converted to DXF entities as follows:


          Object Type                      2D Export      3D Export
          -----------                      ---------      ---------

          Point                            POINT          POINT

          Line                             LINE           LINE

          Rectangle                        LINE (4)       POLYLINE

          Rectangle (filled)               SOLID          3DFACE

          Circle                           CIRCLE         CIRCLE

          Circle (rotated)                 POLYLINE       POLYLINE

          Circle (isometric)               POLYLINE       CIRCLE

          Semi-Circle                      ARC            ARC

          Semi-Circle (rotated)            POLYLINE       POLYLINE

          Semi-Circle (isometric)          POLYLINE       ARC

          Ellipse (all)                    POLYLINE       POLYLINE

          Cube                             LINE (12)      3DFACE (6)

          Text                             TEXT           TEXT

          (dimensions)                     TEXT           (none)




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3465

     Volume in drive A has no label
     Directory of A:\

    MICROCAD EXE     29300   6-01-92  12:00a
    MICROCAD ICO       766  11-01-91  12:00a
    MICROCAD OS2      3192  11-01-91  12:00a
    MICROCAD DOC     61775   6-01-92  12:00a
    MICROCAD INF      2948   6-01-92  12:00a
    BULLETIN 201      1884   1-01-92  12:00a
    BULLETIN 206      3342   6-01-92  12:00a
    MCAD20   ZIP     43801   6-01-92  12:00a
    GO       BAT        38   4-13-93  10:51a
    SHOW     EXE      2040   9-12-88  10:48a
           10 file(s)     149086 bytes
                            8704 bytes free
