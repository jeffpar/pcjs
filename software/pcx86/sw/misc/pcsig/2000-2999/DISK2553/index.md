---
layout: page
title: "PC-SIG Diskette Library (Disk #2553)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2553/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2553"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## VGAP11.DOC

{% raw %}
```
UPDATED DOCUMENTATION FOR VGAPAINT VERSION 1.1  (VGAP11.EXE)

1.   There was a bug in the "elipse" shape which  prevented replicating the
     exact size of a previous elipse, and which sometimes collapsed
     (irreveocably) the elipse into a line.  This has been fixed.

2.   If a MOVE or COPY was made and the resulting image was not moved, the
     dotted copy box sometimes remained on screen.  This has been fixed.

3.   The use of TEXT fouled up the operation of MOVE, making it act like
     COPY.  This has been fixed.

4.   TEXT now permits  255 characters to be entered (6+ lines).  This is a
     simple BASIC "Line Input" function, so it is treated as one logical
     line, with only "backup and retype" editing permitted.

5.   TEXT: if the currently-selected color is the same as the background
     color, a warning message is printed on the screen.

6.   FILL will now fill single pixels.  It still will not fill   vertical
     lines that are only one pixel wide.

7.   Error trapping is improved, a little.  If an error occurs (heaven
     forbid) try pressing the last button pressed until the error goes
     away.

8.   VGAP11.EXE does not require the PAL.VGA file. 

3/9/88

```
{% endraw %}

## VGAPAINT.DOC

{% raw %}
```
VGA PAINT

Description
          VGA PAINT is a graphics/drawing program that produces screen
          images in up to 248 colors at once.  Fourteen brush shapes
          and four automatic shapes are provided.  Image handling
          capabilities include: sizing, flipping, moving, copying and
          saving images to disk.  Although the resolution of the
          screen is only moderate (320 X 200), the careful use of
          color mixing can produce images with near-photographic
          realism.  

     VGA PAINT is written in Micosoft QuickBASIC 4.0. The
          pictures and images produced by VGA PAINT are saved on disk
          in the form of BASIC "BSAVE" files.  When loaded into an
          integer array  with the dimension of 32004, these files may
          be loaded by BASIC application programs and put on the
          screen with the PUT (0,0) command in screen mode 13.

Requirements
     IBM PC/XT/AT or compatible. (? Sys 2 /OS 2)
     450K RAM
     VGA card & appropriate analog or multi-sync monitor
          capable of displaying screen modes 12 and 13.
     Mouse (3 buttons recommended)
     MSDOS 3.2

               Note: VGA PAINT was written for and on a KAYPRO PC
               (8MHz), with 640K RAM, a Vega VGA card, a multi-sync
               monitor in analog mode, and a PC Mouse.  It has also
               been tested with several other (cheap) mice, and seems
               to work o.k. with all of them.  VGA PAINT generates its
               own cursor, and does not require a VGA mouse driver,
               providing that the program can access the existing
               driver with standard mouse calls to read the motion
               counters and the status of the buttons.

Display:
     320 X 200  with 248 displayable colors from a palette of
     256K colors (screen mode 13).  Eight colors of the
     usual 256 displayable colors are reserved for program
     use.
     
Files provided:
               VGAPAINT.EXE  (the main program)
               MENU.VGA      (graphic menu screen file)
               VGAPAINT.PAL  (a spare palette file)
               LOGO.VGA      (the logo screen file)
               VGA.DOC       (this file)

For the program to run, VGAPAINT.EXE & MENU.VGA  must be in the
current directory.  If the file LOGO.VGA is present, the logo
screen will appear when the program is run.  











                                   - 1 -


PROGRAM OPERATION

Note:
          B1=the right button on the mouse or CRTL
          B2= the middle button or  Left SHIFT
          B3=the left button or ALT

          For the indicated keyboard keys to function as mouse
          buttons, the keyboard status byte for these keys must be at
          0000:0417.  This is the standard address for IBM PC's and
          truly compatible clones. The four cursor direction keys will
          move the cursor one pixel at a time.

The program is invoked by typing VGAPAINT <enter>.  If the logo
file is present, the VGA PAINT logo screen will be displayed.  To
proceed, press any mouse button, or the spacebar.  The screen
will clear, and the cursor will appear. At this point, the color
is set to EGA red, and the brush shape is a small box.  

          Press B3 to display the menu.

MENU

          To return to the drawing, press B3.

PALETTE: The left half of the menu shows the palette of the 248
displayable colors as they are originally set by the VGA card.
These are not in numerical order. The color with the white box
around it is the current Selected Color for drawing.  The color
with the yellow box around it is the "color at cursor" -- the
color in the drawing that was at the center of the cursor just
before the menu was displayed.

          To select a color, move the cursor over the desired color,
          and press B1.  The white box moves to the Selected Color.

          Pressing B2 while the cursor is over a palette color will
          change that color to the Selected Color.  This is useful for
          subsequent mixing of a color that differs only slightly from
          the Selected Color.  NOTE: once changed, the only ways to
          regain the original color are to mix it, or to load a
          palette file with that color in it (e.g.,VGAPAINT.PAL)

FUNCTION BOXES:  The function boxes on the right half of the menu
include the brush shapes (14), automatic shapes (circle, ellipse,
box, line), and screen, image, and file manipulation functions.
The "Mix" box on the left side of the screen is also a function
box.  

When the cursor enters a function box, the box is outlined in
bright green; the function may be selected by pushing B1.  

          MIX: Each of the 248 displayed colors may be mixed to any of
          256K displayable colors. When B1 is pressed, the drawing
          appears on the screen, with the mixing box in the upper left
          corner.  The bottom of the mixing box shows a sample of the
          current Selected Color for mixing. The small blue, red and
          green boxes are used for mixing.  The color  bars above the
          small boxes show the relative mixture of blue, green, and
          red for the Selected Color. (None will appear is the
          Selected Color is initially black).


                                   - 2 -
               
          
          You may select a different color to mix from the drawing by
          moving the cursor to a point of that color and pressing B1. 
          The mixing box will show the new color. This will not change
          the Selected  Color when you resume drawing.

     To increase the amount of blue, green, or red in the color
          to be mixed, place the cursor over the appropriate small box
          and hold down B1.  The color bar will grow in length,  and
          the sample of the color at the bottom of the mixing box will
          show the new color. If the color being mixed is in the 
          drawing, it will also change as you mix.

     To decrease the amount of blue, red, or green, put the
          cursor over the appropriate small box and hold down B2.

          To save the color you have mixed and put it in the palette, 
          move the cursor over the sample of the color at the     
          bottom of the mixing box, and click B1.  You are now    
          returned to the drawing.

     To cancel the mix and return the color to its original hue,
          click B3.

BRUSH SHAPES & AUTOMATIC SHAPES: The 14 brush shapes and four
automatic shapes comprise the basic drawing tools. When selected,
the box containing that tool is set to red.  Selecting a tool
does not immediately return to the drawing, so you can change
your mind, select another color, or select another function. 

          B1 selects the tool.
     B3 returns to the drawing.

     BRUSH SHAPES: when you return to the drawing:

               Hold B1 to use the brush. 

          Hold B2 to use selective erase. (See "ERASING" below).

          Click B3 to return to the menu.

          AUTOMATIC SHAPES:  The shape will appear on the screen in a
          light color, indicating the size of the shape to be drawn.

     CIRCLE:   B2 toggles between moving the circle and changing
          the diameter. Initially, the circle moves with the cursor.
          
               Click B2 to freeze the midpoint of the circle and
               adjust the diameter.  Moving the mouse to the right
               will increase the diameter; moving left decreases the
               diameter. Click B2 again to move the adjusted circle
               around the screen.

               Click B1 to draw the circle in the Selected Color. Move
               the cursor to see the circle you have drawn.  The
               circle tool is still selected and active.

          Double click B1 to draw a circle filled with the
          Selected Color.  (Objects in the circle which are
               outlined in the Selected Color will not be filled.)
               
          Click B3 to return to the menu.


                                   - 3 -
          
          
          ELLIPSE:  works just like the circle, but when the midpoint
          is frozen (B2), vertical movement of the mouse changes the
          "aspect" of the ellipse, and horizontal movement changes the
          diameter.  

          BOX: works like circle and ellipse. But:

               To completely fill the box, regardless of what is in
               it, click B1 and then (quickly) B2.  A filled box is
               drawn covering all points in the box.

          LINE: no image except the cursor appears (the initial line
          has a length of zero).

               Click B2 to freeze or unfreeze the cursor.  When
               frozen, mouse movement causes a light-colored line to
               appear, lengthening, shortening and rotating in
               response to the mouse. 

               Click B1 to draw the line in the Selected Color. The
               line tool is still selected and active.

               Click B3 to return to the menu.

     Note: when you return to the menu, automatic shapes are
          deselected and the drawing tool "small box" is selected.

SCREEN  FUNCTIONS

     UNDO: when selected, the previously KEEPed screen drawing is
          put on the screen and you return to the drawing. The drawing
          also remains in the UNDO buffer.  Drawing on screen is lost.

          KEEP: when selected, the drawing on the screen is put in the
          UNDO buffer.  You are returned to the drawing.
     
     CLEAR: the screen is cleared and you are returned to the
          blank screen.

IMAGE FUNCTIONS: Image functions allow you to select an area of
the screen to MOVE, COPY, FLIP, or SIZE. 

     TR (Transparent) and OP (Opaque): these two function effect
          the MOVE, COPY, H FLIP, V FLIP, SIZE, and LAST image
          functions.  If OPaque is selected, subsequent file
          manipulations will place images just as they appear,
          background & foreground.  If TRansparent is selected, any
          points in the image that are the Selected Color will appear
          to be transparent, letting the background show through.
          While being moved around the screen, a TRansparent image
          does not have the correct colors; it will when it is set in
          place. A TRansparent image takes longer to set in place. The
          cursor will reappear when the process is finished.
     NOTE: The TRansparent color is the currently Selected Color,
          which may or may not be the color you think of as the
          background color.  Be sure to set the Selected Color to the
          one you want before performing TRansparent image
          manipulations. (If you forget, don't worry; you can always
          cancel any image manipulation and start over).
     



                                   - 4 -


     Common Features of MOVE, COPY, H FLIP, V FLIP and SIZE

               When selected, each of these functions returns to the
               drawing and puts on the screen a dotted box that
               follows the cursor. All points in the box and under the
               dotted border will be in the final image.

               B2 switches between moving the box around the screen,
               and freezing the upper left corner of the box so that
               you can adjust its size with the mouse or cursor keys.

          B1 freezes the box and initiates the image
               manipulation.

          B3 cancels the image manipulation and returns to normal
               drawing.

          MOVE: when B1 is pressed, the image inside the box will
          follow the cursor.  The space behind the box is filled with
          the currently Selected Color (be sure it is the color you
          want before using MOVE).
     
          B1 puts the image down and returns to normal drawing.

               B3 cancels the image manipulation, saves the image 
               inside the box so that it can be retrieved with the
               LAST function, and returns to normal drawing.

          COPY: works exactly like MOVE, but the area behind the image
          is not filled.

          H FLIP and V FLIP: these functions flip the image as
          indicated, and then make a COPY of the image that you can
          move if you want to.  

               Mouse or Cursor Key movements will move the copy.
               
               B1 puts the image down and returns to normal drawing.

               B3 cancels the flip operation, saves the image    
               inside the box so that it can be retrieved with the
               LAST function, and returns to normal drawing.

          SIZE: after adjusting the size of the dotted box, press B1. 
          A white line appears around the image, and the dotted box
          appears on top of it.  The dotted box will follow the
          cursor.

               B2 freezes and unfreezes the upper left corner of the
               box, allowing for box movement or size adjustment. 
               Adjust the size of the box to the size you want the
               finished copy of the original image.    
     
                    Note: you do not have to put the dotted box where
                    you want the sized image to appear, though you may
                    do so.  You can move the sized image after the
                    sizing is done.

               B3 cancels the sizing operation and returns to the
               drawing.



                                   - 5 -


               B1 initiates the sizing operation.  Sizing is done on
               screen.  The screen will clear and the original image
               is placed in the upper left corner.  The image is
               sized, the drawing is put back on the screen, and the
               sized image appears and follows the cursor.

                    B1 puts down the sized image and returns to the
                    drawing.

                    B3 cancels the sizing, saves the sized image so
                    that it may be retrieved by LAST, and returns to
                    the drawing.

                    Note: There is one limit to the size of an
                    enlarged image: an image enlarged to full screen
                    size will actually be 319 X 200 pixels, not the
                    expected 320 X 200 pixels (a quirk in the sizing
                    subroutine).

          LAST: this means "retrieve the last image" that was made by
          any of the image manipulation functions.  A LAST image is
          created during any image operation that involves pressing
          B1, whether  the operation is completed, or cancelled (B3).
          If there is no image in the LAST buffer, nothing will happen
          when you select LAST from the menu.  When selected and there
          is an image in the buffer, LAST gets the image, and the
          image follows the cursor.  
               
               B1 puts down the  image and returns to the drawing. If
               there is no LAST image, you will be returned to the
               drawing.

               B3 causes the image to disappear (it is still in the
               LAST buffer, however), and returns to the drawing.

TEXT: A limited text entry function is provided.  Text is entered
on a separate screen, and transferred to the drawing with the
COPY function, which is invoked automatically. Text appears in
the Selected Color. Be sure this is not the background color (the
first box in the next-to -the-last row of the menu palette;
initially black).  Select the TEXT function by clicking B1 when
the TEXT box is selected on the menu.  The screen clears, and a
box appears at the top.  If there is any text in the TEXT buffer,
it will appear in the box; if not, the box will be empty.

          To cancel the TEXT operation at this point, press B3.

          If there is text in the box that you want to transfer to the
          drawing, press B1.  The dotted copy box will come on the
          screen.  Copy the text as you would any other image. (B2 to
          adjust and move the dotted box, B3 to cancel, B1 to COPY the
          text and automatically return to the drawing).

               Note: Copied text becomes the LAST image.
          
          If there is no text, or if you want to enter new text, press
          B2 to clear the text box, and put the text cursor on the
          screen for text entry.

               If you press ENTER at this point, with no text typed,
               TEXT is cancelled and you return to the drawing.


                                   - 6 -

     
          Type the text you want to enter.  Only one line is
          permitted. Press ENTER to start the COPY function (see
          above).

               Note: when initially copied from the text box, if
               TRansparent is active, the TRansparent color is the
               text background (the screen background) color, no
               matter what the Selected Color is.  However, if the
               text is retrieved as the LAST image, the TRansparent
               color will be the Selected Color.

FILL: the FILL function fills areas with the Selected Color. 
Borders around the space to be filled may be different colors.
Objects within the selected area are not filled if they have a
horizontal dimension of three or more pixels; single dots of
colors in the area to be filled may or may not be covered over.
The FILL function can also be used to outline a figure, or to
"inline" the inside of a figure or space.

     Filling: Select FILL from the menu.  You are returned to the
     drawing.  The cursor is modified to indicate that you are in
          the FILL mode. Place the cursor in the area to be filled.
          
               B1 first draws a line around the inside of the area,
               and around all objects the program can identify inside
               the area, and then fills the spaces between all
               outlined areas.     The FILL function remains selected
               and active.

                    Note: individual points, and vertical lines one
                    pixel wide cannot be filled.  Use the point or
                    line tool. FILL may "inline" some areas but not
                    fill them if they connect to the main fill area by
                    very  slender "necks". Move the  cursor to the
                    unfilled area and press B1 to fill these areas.

          B3 cancels the FILL operation, restores the cursor to
          its usual appearence, and returns to normal drawing.

          B2 outlines and "inlines".  See below.

          OUTLINING and "INLINING": Select FILL from the menu. You are
          returned to the drawing. To outline, place the cursor to the
          right of an edge of the object/area you want to outline. To
          "inline", place the cursor in the area, to the right of the
          border.

               B2 initiates the lining operation. FILL is still
               selected and active.

               B3 cancels, as above.

               B1 will line AND fill.  If you are in the background
               area, you may inadvertantly fill the entire picture. 
               If so, repeat the process with the desired background
               color.

ERASING: There are two ways to erase parts of images.

          SELECTIVE ERASE: During normal drawing with any of the brush
          shapes, releasing B1 and holding B2 invokes the selective 


                                   - 7 -

          
          erase function.  This will replace the previously selected
          "color at cursor" with the currently selected drawing color.
          Points selectively erased are those within the open space at
          the center of the cursor -- a box 3 pixels square --
          regardless of the current brush shape. This function is
          useful for changing the color of small areas that are close
          to colors you do not want to erase.  Releasing B2 and
          pressing B1 returns to the selected brush shape and color.
     
          LARGE AREA ERASE:  set the Selected Color to the color you
          want to erase to, and use the box automatic shape, pressing
          B1 and (quickly) B2.

FILE FUNCTIONS

          There are three types of files manipulated by VGA PAINT. 
          PICTURE files (????????.PIC) are full screen images that
          take about 63K to store on disk. IMAGE files (????????.IMG)
          are files containing images, and may be up to 63K, depending
          on the size of the image. PALETTE files (????????.PAL) are
          1K files which contain the color numbers used by the VGA. 
          If you mix colors, and want to see the related picture with
          those same colors the next time you run the program, save
          the palette you adjusted as a PALETTE file.

     SAVE: the screen clears and three boxes appear. Move the
     cursor to the type of file you want to save to disk.

               Press B1.  If you previously saved a file of the
               selected type, you will be asked if you want to use
               that file name again.  Press B1 or "y" for "yes", B2 or
               "n" for "no", or B3 to cancel the file save operation

               If you pressed B2 or if no file of the selected type
               has been saved, the text cursor will appear. 

                    Pressing ENTER at this point will cancel the file
                    save.
               
               Enter a file file name of up to eight letters/numbers.
               DO NOT  type the file extension (.PIC, PAL, .IMG). 
               Press ENTER. 

                    If you have typed more than eight characters, the
                    program will beep and back up to let you try
                    again.

               You will be shown the file name you o.k.ed or typed,
               and will be asked if it is o.k. to save it to disk. 
               Follow the instructions on the screen.

                    Note:  For image files, the image you save is
                    always the LAST image.  Cancel the SAVE and use
                    the LAST function to see the image if you are not
                    sure what it is. If there is no LAST image, the
                    program will tell you so.  Follow the instructions
                    on the screen. To make a saveable LAST image, use
                    any of the image functions (COPY, MOVE, etc.),
                    surround the part of the drawing you want with the
                    dotted box, press B1 and then B3. This will put
                    the image in the LAST buffer. 
               

                                   - 8 -


               The PICTURE file saved is always the picture on
               the screen when the menu was selected.  
               
                    The PALETTE file saved is the palette displayed in
                    the menu.

          LOAD: the screen will clear and switches to mode 12 (smaller
          characters).  The cursor will be white and smaller.  Three
          boxes appear.

               B3 will cancel the LOAD operation at any time and
               return to the drawing.

     Move the cursor to the box of the file type you want to load
     and press B1.  A list of all files of that type will appear. 

               If there are no files of that type in the directory, a 
               message will appear.  Follow the instructions on the
               screen.

     Move the cursor over the name of the  file you want to load.

          B1 will highlight the file name and freeze the cursor

               Pressing B1 again will load the file and return to
                    the drawing.

               B3 will un-highlight the name, unfreeze the
               cursor, and allow you to pick another name or to
               cancel the LOAD operation.

EXIT
     To exit (end) VGA PAINT, select the EXIT box and double
     click B1.  A single click will not cause the program to end.

          

**************
  ERRORS
**************

VGA PAINT has been working error-free for me for some time, but
it may contain errors, or may cause errors on some combinations
of equipment.   If an error occurs a message should appear on the
screen indicating the BASIC error code number and a "Section"
number which refers to sections of the source code. I would
appreciate hearing from anybody who encounters an error.

Simulated errors have all been recoverable by repeatedly pressing
B3 until the error message goes away.  Try this if a real error
occurs.

David Evans  167-A Avenida Las Brisas   Oceanside, CA 92056
(619) 757-5300  
GEnie & BIX:  dr.davo








                                   - 9 -


SUMMARY OF COMMANDS

Drawing with Brush as Selected Tool          Drawing with Auto Shape

     B1 Draw with brush                           B1 Draw shape
     B2 Selective erase                           B2 Adjust size or
     B3 Put  menu on screen                          move shape
                                                  B3 Cancel Shape (tool
                                                     becomes small box)
MENU                                              B1 B1 Fill shape
                                                  B1 B2 Total fill box
  B1 select any function or color                    (large area erase)
  B2 (Palette) set color to the
     Selected Color (white box)
  B3 Return to drawing (except when
     cursor is in "EXIT" box
  B1 B1  Exit when cursor is in
      "Exit" box

     yellow box = last color at cursor.
-----------------------------------------------------------------------
FUNCTIONS

MIX
   B1 Selects new color if cursor in drawing.
      Keeps mixed color if cursor over color sample
      at bottom of the mixing box.
      Increases B/G/R if cursor over small B/G/R box.
   B2 Decreases B/G/R if cursor over small B/G/R box.
   B3 Cancels color mixing

MOVE, COPY, H FLIP, V FLIP                   UNDO  restores previously
   B1 Initiates the action, makes                  saved screen.
      copy of original image.                KEEP  saves screen 
   B2 Moves dotted box around or
      allows size of box to be adjusted      LAST  gets last image made
   B3 Cancels operation                            by MOVE, COPY, FLIP,
                                                   SIZE, or TEXT.
SIZE
     B2 Moves dotted box around or
        allows size of dotted box 
        to be adjusted
     B3 Cancels size operation
     B1 First time: outlines orig. image.
        Second time: starts sizing operation.          

TEXT
     B1 starts COPY so you can make copy of 
          text to put in drawing
     B2 Clears text box & puts text cursor 
        on screen for text entry

     ENTER before typing text cancels TEXT operation.

     ENTER  after typing text ends text entry. Starts COPY.

     B3 Cancels text operation

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2553

     Volume in drive A has no label
     Directory of A:\

    LOGO     VGA     50591   2-07-88   9:44a
    MENU     VGA     28491   2-04-88   9:19p
    VGA      PAL      1031   2-01-88   1:48p
    VGAP11   DOC      1228   1-01-80   2:29a
    VGAP11   EXE    121517   1-01-80   1:48a
    VGAPAINT DOC     27881   2-09-88  12:35a
    GO       TXT      1002   3-05-91   1:49a
    GO       BAT        38   1-31-91  12:58a
            8 file(s)     231779 bytes
                           86016 bytes free
