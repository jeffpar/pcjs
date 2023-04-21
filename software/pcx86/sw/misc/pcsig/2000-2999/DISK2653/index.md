---
layout: page
title: "PC-SIG Diskette Library (Disk #2653)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2653/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2653"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2653.TXT

{% raw %}
```
Disk No: 2653                                                           
Disk Title: Finger VGA                                                  
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Finger VGA                                               
Author Version: 1.00                                                    
Author Registration: $32.00                                             
Special Requirements: 384K RAM, VGA, and mouse (Microsoft or Logitech co
                                                                        
Let your creativity run free.  Use FINGER VGA to create and animate     
your next masterpiece. FINGER VGA is a color image processing, painting,
and animation program that works in VGA graphics mode (320X200 256      
colors).                                                                
                                                                        
Image editing features include cut, copy, paste, inverse, rotate, flip  
horizontally/vertically, and scaling to enlarge or reduce the selected  
image.  The drawing toolbox includes freehand drawing, line, rectangle, 
triangle, brush, spray, eraser, flush, dupArea, dupPoint, fill an       
enclosed region, and draw 3D pyramid. The curve drawing tools include   
bezier curves, circle, ellipse, arc, arrow, thick line and text with 4  
different scalable fonts.                                               
                                                                        
Text entry can be written either horizontally or vertically.  There are 
9 fill patterns which can be used to fill rectangle, circle, ellipse,   
pie, and plygon with up to 200 vertices. The screen zoom-in feature (fat
bit) is also proved to work on individual pixel at 16x or 64x level.    
                                                                        
Color image to grayscale conversion is also supported.  There are 256   
colors available for drawing and for background use. Files are loaded   
and saved in PCX format and can be printed to Laserjet in 300 dots/per  
inch density.                                                           
                                                                        
Registered users can get the following extra features:                  
                                                                        
~ Screen shrink options                                                 
                                                                        
~ Cycle 256 colors with user defined delay time                         
                                                                        
~ Cartoon command for animation or slide show use                       
                                                                        
~ Scale printouts in both X and Y directions                            
                                                                        
~ Epson 24-pin printer driver to print at 180 dpi                       
                                                                        
~ 9-pin Epson compatible dot-matrix printer support                     
                                                                        
~ Print user-defined window areas on the screen                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```
Poisson Technology
816 Gregory Ct, Fremont, CA 94539.  U.S.A.
Phone:(415)623-1087    FAX:(415)490-5865

*****************************************************************
*** FAX message gets higher priority than the phone call.     ***
*** Please FAX your questions or comments to us, if possible. ***
*****************************************************************

Finger VGA 1.00  (C) Poisson Technology 1991.  All right reserved.

Release Note:

Finger VGA is a color image processing, painting and animation program for
IBM PC and compatibles with 384K memory.  Only VGA(320x200 256 colors)
graphics mode is supported.  Microsoft or Logitech compatible mouse required.
Files are loaded and saved in PCX format and can be printed to LaserJet
in 300 dots/per inch density. Image editing features include: cut, copy,
paste, inverse, rotate, flip horizontally/vertically and scaling to enlarge
or reduce the selected image. The drawing toolbox includes: freehand drawing,
line, rectangle, triangle, brush, spray, eraser, flush, dupArea, dupPoint,
fill an enclosed region and draw 3D pyramid.  The curve drawing tools include:
bezier curves, circle, ellipse, arc, arrow, thick line and text with 4
different scalable fonts.  The text entry can be written either
horizontally or vertically.  There are 9 fill patterns which can be used
to fill rectangle, circle, ellipse, pie and polygon with up to 200 vertices.
The screen zoom in feature(fat bit) is also provided to work on individual
pixel at 16x or 64x level.  User can flip the whole screen either horizontally
or vertically, clear, or inverse the screen image.  Color image to grayscale
conversion is also supported.  There are 256 colors available for drawing
and for background use.

Registered users(see REGISTER.DOC) can get the following extra features:
o Shrink the whole screen image.
o Cycle 256 colors with user defined delay time.
o Cartoon command for animation or slide-show use.
o Scale the print out both in X and Y directions.
o Gets EPSON 24-pin printer drivers to print at 180 dpi.
o Get 9-pin EPSON compatible dot-matrix printer support.
o Print a user-defined window area instead of whole screen.

Get it started:
---------------

Boot computer with DOS 3.0 and mouse driver on COM1, however, the demo can
work without a mouse.  Insert floppy diskette in drive A and type FVGA to
start the program.  Press Y and SPACE Bar to see the demo.  The demo will
go faster if all files on the floppy diskette are first installed on the
hard disk.

Press left button or command initial to select command.  Press right button
or ESC key to exit command. Select FILE then QUIT to exit the program.

When in drawing mode, press left button to draw, release left button to
stop drawing, and press right button to exit.  The graphics mode is
VGA(320x200x256 colors) and it can work on either VGA color or VGA
monochrome monitors.  Press SPACE bar at any time to bring up the
256-color, fill pattern and  line style menu to change color, fill
pattern or line style.  Press the  left button to select.  Click the right
button or other keys to exit the color menu.

Other Shareware products by Poisson Technology:

  Finger Maps  1.01:  PC map design and object drawing program.
  Finger Paint 4.00:  PC paint program. like PC paintbrush.

***********************************************************************

Command summary:
----------------
*R : new features for registered user.

File
  Load   : load PCX file from disk to screen.
  Save   : save screen image in PCX format.
  Saveas : save screen image to a new file in PCX format.
  Print  : Laserjet => HP LaserJet @300 dpi.
Color image is mapped into 16 grayscales on printout. Default mapping:
black =>white.  white => black. Use Inverse command to reverse the
printout mapping.

    Inverse  : Reverse the printout color.
*R  Dotmatrix: print to Epson compatible printers.
*R  Eps-24pin: print in 180 dpi on Epson LQ 24-pin printers.
*R  Scale    : Magnify or shrink the printout size both in X and Y.  Minimum scale is 0.1x.  There is no hard-coded upper bound for maximum scale.  The output is limited by the paper size. Scaling applies to both full screen and window printing.

*R  Window   : Define the window area to be printed.
Move cursor around to define the rectangular window area to be printed.
Click left mouse button to define vertices. Press ESC key or right button
when done.  Select PRINT command and choose the appropriate printer to
print the window area afterwards.

    Quit   : quit Finger VGA program.

Edit

  Cut : Cut an image into buffer.
  Copy: Copy an image into buffer.
  Paste: Paste image buffer to screen.
  Inverse: Inverse image buffer.
  Rotate : Rotate image buffer by 90 degrees.
  Horizon: Flip image buffer horizontally.
  Vertical: Flip image buffer vertically.
  scaleXy : Scale image buffer both in X and Y directions.

Draw

  Draw : Free hand drawing.
o Move cursor to the starting point.  Press the left button to put pen
down and start drawing.  Release left button when done.

o Press right button or ESC key to exit this command.

  Line : Draw a line.
o Move cursor to the starting point.  Press the left button to put pen
down to define the first point of the line.  Move cursor with left button
pressed, and release left button to define the second point of the line
and lift the pen.  Repeat the above process for another line.

o Press right button or ESC key to exit this command.

  Rectangle : Draw a rectangle.
o Move cursor to the starting vertex.  Press the left button to put pen
down to define the first vertex of the rectangle. Move cursor with left
button pressed.  Release left button to define the second vertex of the
rectangle and lift the pen.  Repeat the above process for another rectangle.

o Press right button or ESC key to exit this command.

  Triangle  : Draw a line with fixed end points.
o Move cursor to the starting point.  Press the left button to put pen down
to define the first point of the base line. Move cursor with left button
pressed.  Release left button to define the second point of the base line
and continue moving the cursor to define the middle point.  Press the left
button to define the middle point.  Repeat the above process for another
triangle.

o Press right button or ESC key to exit this command.

  Spray : Press the left mouse button to spray paint the screen.  Press
  SPACE BAR to bring up the color menu, change color by click the left mouse button, and continue spraying with different color to achieve special effects.

  Brush : Brush the screen with selected brush type and size. Use
  brush_type under OPTION to change type or size. Use brush as an eraser
  with black color selected.

  Flood : Move cursor inside an enclosed area and click the left mouse
  button to flood the area with foreground color. Flood process stops when
  the pixel color is different from the starting point. In case of a wrong
  flood, press right button and select UNDO under EDIT to recover the image
  before the flood.

  Pyramid: Define the base rectangle first and then move the cursor to
  define the apex of the pyramid.

  DupArea: Duplicate an image area by first pointing the source  position
  and then the target position.  Press left mouse button to start copying
  image from source to target area.

  Polygon: Click the left mouse button to define vertices of the polygon
  and press the right button to close the polygon and exit. If Empty fill
  is selected, then the polygon is not filled. Polygon is filled if other
  fill patterns are selected.

  DupPoint: This is used to select the desired color directly from the
  screen image and use the color to paint later.  First move mouse to the
  position with desired color and click the mouse button to select the color.
  Press left mouse button to start drawing or right button to exit.

Curve

  Spline : Draw a curve with end point bent.

  Bline  : Draw a curve with middle point bent.

  Circle : Draw a circle.

  Ellipse: Draw an ellipse.

  Arc    : Draw an arc with starting and ending angles.

  Text   : Write a line of text.

  Arrow  : Draw an arrow.  Use OPTION/Arrow_size to set the size.

  Wideline : Draw a thick line.  The line width is defined under OPTION
  arrow_width.

  Pie    : Draw a piece of pie.

Screen

  Zoom 4x: Magnify the screen by 4x in each dimension.(16x)
  Zoom 8x: Magnify the screen by 8x in each dimension.(64x)
  Clear  : Clear screen with background color(black).
  flipX  : Flip screen horizontally.
  flipY  : Flip screen vertically.
  Inverse: Inverse the screen color.
  Grayscale: toggle between color and grayscale modes.
*R  Shrink : shrink the screen image. ( Use Undo to correct any shrink error)
*R  Cycle  : cycle 256 colors with user defined delay time.
*R  Cartoon: continuous display of PCX image files from a control file.
Control file syntax:  Use a text editor to create a file with PCX filename
on each line. Start with a blank on each line if the PCX file has the same
palette as the previous one.  Start the line without a blank will force
program to reset the palette which can cause some flickering on the screen.

Option

  Arrow_size : Set arrow head size.
  arrow_Width: Set arrow line size.
  >line_Style: Set line style.
  >Pattern   : Set fill patterns.
  >brush_Type: Set brush type.
  >color_Back: Set background color.
  >color_Front: Set foreground color.
  >font_scalE : Set font style and size.

  Font_scale
    >Type : Set font type.
        Triplex
        Sansserif
        Gothic
        Small
    Scale : Set font scale.
    X_y   : Set text orientation, horizontally or vertically.

  Line_style
    Solid  : solid line.
    Dotted : dotted line.
    Center : centered line.
    dAshed : dashed line.
    cusTom : custom pattern line.
    solId_t : thick solid line.
    dOt_T   : thick dotted line.
    ceNter_T: thick centered line.
    dasH_T  : thick dashed line.
    cUst_T  : thick custom line.

  Pattern
    Empty  : EmptyFill     { uses background }
    Solid  : SolidFill     { uses foreground draw color }
    Line   : LineFill      { --- }
    Ltslash: LtSlashFill   { /// }
    Slash  : SlashFill     { /// thick fill }
    Blslash: BkSlashFill   { \\\ thick fill }
    Ltblslh: LtBkSlashFill { \\\ fill }
    Hatch  : HatchFill     { light hatch fill }
    Xhatch : XHatchFill    { heavy cross hatch }

  Brush_type
    Square : rectangular brush.
    Circle : circular brush.
    s_squarE : filled rectangular brush.
    s_cIrcle : filled circular brush.
    siZe     : brush size in X and Y.



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
+VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV+
|    Finger VGA Version 1.00  User Registration Form     |
+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+

         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         <<<< 30-Day Money Back Guarantee >>>>
         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

o Registration Fee:  U.S. $32.00.                   $_____

o Shipping & handling:
  (5 1/4" diskette: U.S. $3.00, Foreign $5.00)
  (3 1/2" diskette: U.S. $4.00, Foreign $6.00)      $_____

No Foreign check please.  U.S. Check, Cash or
Money Order payable to "POISSON TECHNOLOGY".  Total $_____

Address: 816 Gregory Court, Fremont, CA 94539, U.S.A
Phone:415-623-1087    FAX:415-490-5865

------------- REGISTERED USER INFORMATION ----------------

Date: ____/____/____      Telephone Number: ______________

Name:_____________________________________________________

Address:__________________________________________________

__________________________________________________________

City_______________________State____________Zip___________

Country_________________________

Printer Model: ________________
IBM  PC__  XT__  AT__  386__  486__        Others:________
Monitor: Hercules__  CGA__   EGA__  VGA__  Others:________

Obtained Finger VGA 1.00 from:
Vendor Name:______________________________________________
Telephone Number:_________________________________________
Address:__________________________________________________
__________________________________________________________
City_______________________State____________Zip___________
==================== Comments ============================






----------------------------------------------------------
Return Policy:
* product must be returned in original package.
* shipping and handling charges not refundable.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2653

     Volume in drive A has no label
     Directory of A:\

    FVGA     EXE    167696   3-31-91   8:14p
    README   DOC     10842   3-31-91   7:49p
    REGISTER DOC      1871   3-31-91   8:01p
    VGA256   BGI      3289   5-31-89   1:00a
    CARTOON  LST       135   4-01-91   9:41p
    DOLL3    PCX     16462   1-06-91  12:23p
    DOLL5    PCX     15038   1-06-91  12:35p
    DOLL7    PCX     16132   1-06-91  12:38p
    DOLL9    PCX     17400   1-06-91  12:57p
    DOLL13   PCX     16873   1-06-91  12:52p
    DOLL15   PCX     16471   1-06-91  12:53p
    AUTHOR   PCX     13462   1-02-91  11:44a
    TRIP     CHR      7241   5-02-89   5:50a
    GOTH     CHR      8560   5-02-89   5:50a
    SANS     CHR      5438   5-02-89   5:50a
    LITT     CHR      2138   5-02-89   5:50a
    PRINTER  DAT      1332   7-27-90   4:27p
    GO       BAT        28  10-04-90   5:21a
    FILE2653 TXT      3923   6-11-91  12:32p
    GO       TXT      1189   6-11-91  10:12a
           20 file(s)     325520 bytes
                           24576 bytes free
