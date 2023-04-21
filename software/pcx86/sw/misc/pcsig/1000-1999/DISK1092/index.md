---
layout: page
title: "PC-SIG Diskette Library (Disk #1092)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1092/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1092"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MONODRAW & SCNDSIGN"

    MONODRAW provides full-screen 740x348 pixel monochrome graphics
    uncluttered by on-screen menus.  All the features commonly available in
    ``paint'' programs are included.  Full-screen resolution is maintained
    by keeping the intuitive menus in a separate window that is readily and
    instantly accessible.  Full documentation is provided.
    
    In Turbo Pascal, designing screens for inputting data is often a very
    tedious task.  However, with SCNDSIGN you can design with very little
    effort, creating screens on the monitor exactly as they'll appear in
    your program.  Then, SCNDSIGN handles the complicated part of creating
    the source code in Turbo Pascal.  The screens can also be saved for
    later use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1092.TXT

{% raw %}
```
Disk No  1092
Program Title: MONODRAW & SCNDSIGN version 2.01
PC-SIG version 1

    One of the tedious parts of programming in Turbo Pascal is designing
the screens for inputting data. However, SCNDSIGN lets you do this with
very little effort. You can create your screen on the monitor exactly as
you want it to appear in your program. As you design your screen, you can
visually see what it is going to look like. When completed, SCNDSIGN then
handles the complicated part by creating the source code in Turbo Pascal,
which you can then compile and run. The screens are also saved on disk so
they can be recalled at a later time.

    Would you like to fill the gap between low-end commercial graphics
packages and most public domain monochrome graphics packages? If so,
MONODRAW might be just what you need. MONODRAW provides full-screen 740x348
pixel graphics uncluttered by on-screen menus. Its print output, even on a
dot matrix printer, is of publication quality.

    The package offers all the features commonly available in "paint"
programs and yet provides full-screen resolution by keeping all menus as a
separate screen that is instantly accessible at any time. The drawing
cursor itself is a single, rapidly blinking pixel. MONODRAW is intuitive
and its seven pages of understandable documentation make it simple to
learn.

Usage: Programming Utility/Monochrome Graphics

System Requirements: MONODRAW requires a Hercules monochrome graphics
card to run and an Epson-compatible printer to produce a hard copy of your
creations. Both require at least 128K memory and one floppy disk drive.

How to Start: Type SCNDSIGN (press enter) to start SCNDSIGN, MDRAW (press
enter) to start MONODRAW.

Suggested Registration: $25.00 for SCNDSIGN

File Descriptions:

------------  SCRNDSIGN
SCNDSIGN PAS  Pascal source code for main program.
HELP     SCN  Help screen.
VAR      SCN  Variable definition screen.
DEMO     SCN  Sample demo screen.
SCNDSIGN COM  Main program.
GENERAL  INC  Program file.
README        Documentation.
------------  MONODRAW
READ     ME   Introductory information.
MDRAW    EXE  Main program file.
MDRAW    DOC  Documentation, 7 pp.
PRINTDWG EXE  Printer driver.
INTCOM   DGM  Sample diagram.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## MDRAW.DOC

{% raw %}
```
                    MONODRAW User Documentation


                          Frank G. Pagan
                       3206 Kingswood Court
                        Fullerton, CA 92635





                           Introduction


MONODRAW is a simple but useful public domain drawing program for 
IBM-compatible personal computers equipped with a Hercules-
compatible monochrome graphics adapter and a high resolution 
monochrome monitor.  There are no other special system 
requirements. 

Monochrome graphics is the most affordable kind of graphics 
available on PC and XT class computers and is a very common
feature on these machines.  It is also of very high quality,
providing 720 pixel columns by 348 pixel rows.  All things
considered, it is an excellent graphics system for applications
where color is not needed or wanted.  Unfortunately, it has gone
unsupported by the great majority of public domain software
products and by many low-end commercial products.  MONODRAW should
help to fill this gap.

The program is primarily oriented toward the creation and printing
of line drawings (diagrams) with a limited amount of embedded
text.  On the one hand, it is definitely not an "object-oriented"
CAD program; on the other hand, it lacks some of the more exotic
features of many paint programs.  What it does do is allow you to 
set individual pixels, draw and erase lines, rectangles and 
elliptical curves, fill areas with various patterns, draw text in 
any of five fonts and a wide range of sizes, duplicate parts of a 
diagram, save and retrieve diagrams on disk, and print a hard copy 
of a diagram.  Even with a dot matrix printer, publication-quality 
results can be achieved. 

There are a couple of features that distinguish MONODRAW from most 
paint programs.  One is that all menu and settings information is 
located on a separate screen page, which is nevertheless instantly 
accessible at any time.  This frees all 250,560 (= 720 x 348) 
pixels for use in the diagram itself.  In keeping with this 
philosophy of maximum resolution, the drawing cursor consists of a 
single blinking pixel, giving you the finest possible degree of 
control over your diagram.



                          Getting Started


The program is contained in the file MDRAW.EXE.  To run it, insert 
the disk into the logged drive and type MDRAW at the DOS prompt.  
As the title screen warns you, the drawing commands are case 
sensitive and you should make sure that your Caps Lock is off.  To  
get past the title screen, press any key.  You will then see what 
we will call the settings/help screen being created.  The top half 
shows the various drawing options, which you can change at any 
time, and their current settings.  The bottom half is a quick-
reference summary of the various keypress drawing commands that 
you can issue when the drawing screen is displayed.  You press the 
Escape key to switch from the settings/help screen to the drawing 
screen or vice versa. 

To try out some of the basic drawing commands, press Escape to 
switch to the drawing screen.  The screen will be blank except for 
a single, fast-blinking pixel at the extreme upper left.  This is 
the drawing cursor.  To make that pixel stay lit, press the space 
bar.  The cursor's position has not changed, but you can't see it 
at the moment because it blinks only when it is positioned at an 
unlit pixel.  Now hold down a shift key and press the down arrow
key four times.  You will see the cursor move down a distance of 
16 pixels at each keystroke.  Release the shift key and press L; a 
line is drawn from the original corner position down to the 
current cursor position.  The program will now remember the latter 
as a "previous" position for another Line command.  To see this, 
hold down Shift and press right arrow four times; at each of these 
keystrokes, the cursor jumps 32 pixels to the right.  Now when you 
press L (unshifted), a horizontal line is drawn from the previous 
point to the cursor.  To make a complete triangle, first move the 
cursor back to the upper left corner by pressing Shift Home four 
times and press the L key again.

You could of course draw a rectangle one side at a time too, but, 
for rectangles made of verical and horizontal lines, there is a 
much faster way.  First move clear to the right of the triangle by 
pressing shift right arrow six times.  Press the space bar to mark 
this pixel.  Press shift PgDn four times to move rightwards and 
downwards.  Press unshifted B (for "Box") and a rectangle is 
drawn, with the previous point as the upper left corner and the 
cursor as the bottom right corner.

To draw an ellipse, first move the cursor to the right by pressing 
shift right arrow four times.  Mark this pixel using the space 
bar; this is the starting point for the ellipse.  Move the cursor 
upwards and rightwards by pressing shift PgUp twice.  This is the 
first counterclockwise quarter point for the ellipse; i.e., the 
program will take the center of the ellipse to be in the same 
column as the previous point and in the same row as the cursor.  
Press unshifted C ("Curve") and the ellipse will be drawn.

If you want to leave the program for now and get back to DOS, 
press the Q key (unshifted).  The long beep you hear is the 
program warning you that you have not saved your drawing.  Press Q 
again to let it know that you really did mean to Quit 
nevertheless. 



                   Changing the Current Settings


When you went through the drawing exercise described above, you
were using the default drawing settings.  This meant, for example, 
that all lines were solid (not dotted or dashed) and of normal 
thickness (1 pixel as opposed to 3), and that all curves were full 
ellipses.  You could not add text to your diagram because there is 
no default text string, and you could not save it to disk because 
there is no default file name.  Whenever you need to set or change 
attributes such as these, you make use of the settings/help 
screen.  Press Escape, if necessary, to switch to it. 

The settings panel has a cursor, consisting of a small solid 
square, positioned immediately to the right of the current 
heading.  Initially, it marks the top line, which invites you to 
press a function key to change a setting or Escape to switch to 
the drawing screen.  Pressing one of the ten function keys will 
move the cursor to the end of the corresponding setting heading:

        F1. Drawing name
        F2. Line style
        F3. Curve type
        F4. Text font
        F5. Text size
        F6. Text flow direction
        F7. Horizontal text justification
        F8. Vertical text justification
        F9. Fill pattern
       F10. Text string

You must then either press a key in an indicated range (for F2 
through F9) or enter a sequence of characters (for F1 or F10) to 
change the setting.

For F2 through F9, the current setting is marked by an asterisk at 
the left.  When you press a valid digit key (or A or B for F9), 
the asterisk will move to mark the new setting, and the cursor 
will return to the top line.  For F1, type a valid file name, 
possibly beginning with a drive specifier and/or a directory path.
Do not add a file extension; '.DGM' will be added automatically.
The characters will appear under the F1 heading as you type them;
you can use the backspace key to correct mistakes.  Pressing the
Enter key terminates the entry and returns the cursor to the top
line.  An F10 entry works similarly, except that you can type any
string of characters that does not go past the right side of the
screen.

The possible settings for F2 through F9 are described below.  In 
each case, the asterisk marks the default setting.  You should 
experiment freely with changing a setting, switching to the 
drawing screen to see the effect on subsequent drawing actions, 
switching back to change another setting, etc.

The LINE STYLE (F2) settings are

      * 0 - Normal solid
        1 - Normal dotted
        2 - Normal dashed
        3 - Thick solid
        4 - Thick dotted
        5 - Thick dashed

Normal lines are 1 pixel thick.  "Thick" lines are 3 pixels thick.

The CURVE TYPE (F3) settings are

      * 0 - Full ellipse
        1 - Half ellipse
        2 - Quarter ellipse

A circle is, of course, a special case of an ellipse.  Half and 
quarter ellipses are useful for drawing such things as rounded 
ends and corners of objects.

The TEXT FONT (F4) settings are

      * 0 - 8 by 8
        1 - Triplex
        2 - Small
        3 - Sans serif
        4 - Gothic

The default font is the one used in the settings/help screen.  In
the default size, each character occupies an 8 by 8 block of 
pixels.  The other fonts employ proportional spacing. 

The TEXT SIZE (F5) setting is a number between 0 and 9.  The 
default is 0, corresponding to the smallest size.  The actual 
effect of this setting on character size depends on what the 
current font is.

The TEXT FLOW (F6) settings are

      * 0 - Horizontal
        1 - Vertical

The HORIZ JUSTIFY (F7) settings are

      * 0 - Left
        1 - Center
        2 - Right

Assuming that text flow is horizontal, with setting 0 the text 
string will be drawn to the right starting at the cursor position
when a Text command is issued.  With setting 1 it will be drawn 
such that the string is centered around the cursor.  With setting 
2 it will be drawn such that the string ends at the cursor.

The VERT JUSTIFY (F8) settings are

      * 0 - Bottom
        1 - Center
        2 - Top

Assuming that the text flow is vertical, with setting 0 the text 
string will be drawn upwards starting at the cursor position when 
a Text command is issued.  With setting 1 it will be drawn such 
that the string is centered around the cursor.  With setting 2 it 
will be drawn such that the string is below the cursor.

The FILL PATTERN (F9) settings are

        0 - Empty
      * 1 - Solid
        2 - Horizontal lines
        3 - Light slash
        4 - Thick slash
        5 - Thick backslash
        6 - Light backslash
        7 - Hatch
        8 - Heavy cross hatch
        9 - Interleaving lines
        a - Widely spaced dots
        b - Closely spaced dots


In general, whenever you press an inappropriate key, you will hear 
a short beep and nothing will change.



                     Moving the Drawing Cursor


In the drawing screen, the cursor is a single pixel, which will be 
blinking unless it has been turned on by a drawing command.  You
move the cursor using the eight "motion" keys in the numeric 
keypad, either shifted or unshifted.  The direction of movement 
corresponds to the position of the key relative to the 5 key.  The 
cursor cannot be moved past an edge of the screen.

Left arrow: 1 pixel to the left.
Home: 1 to the left and 1 up.
Up arrow: 1 up.
PgUp: 1 up and 1 to the right.
Right arrow: 1 to the right.
PgDn: 1 to the right and 1 down.
Down arrow: 1 down.
End: 1 down and 1 to the left.
Shift left arrow: 32 pixels to the left.
Shift Home: 32 to the left and 16 up.
Shift up arrow: 16 up.
Shift PgUp: 16 up and 32 to the right.
Shift right arrow: 32 to the right.
Shift PgDn: 32 to the right and 16 down.
Shift down arrow: 16 down.
Shift End: 16 down and 32 to the left.




                       The Drawing Commands


There are 14 keystroke commands you can issue when the drawing 
screen is displayed, and they are all explained below.  The Line, 
Box, Curve, and Get commands make use of a "previous" pixel 
position distinct from the current cursor position.  This previous 
position is set by each mark (space bar), Line, Box, and Curve 
command to the position of the cursor at the time the command is 
issued. No command changes the cursor position itself. 

The MODE (m) command toggles between the program's drawing and 
erasing modes.  Initially, the program is in the drawing mode.  In 
the erasing mode, the cursor blinks at double speed (if it is at 
an unlit pixel).  The mark (space bar), Line, Box, and Curve 
commands then have the effect of turning off lit pixels.

The MARK (space bar) command sets the current pixel and updates 
the "previous" position.

The LINE (l) command draws a straight line from the previous 
position to the current position using the current line style and 
updates the previous position. 

The BOX (b) command, using the current line style, draws a 
rectangle with one corner at the previous position and the 
diagonally opposite corner at the current position.  The previous 
position is updated.

The CURVE (c) command, using the current line style, draws a full, 
half, or quarter ellipse using the previous position as the 
starting point and the current position as the first 
counterclockwise quarter point.  The previous position is updated.

The FILL (F) command fills an enclosed area surrounding the cursor 
with the current fill pattern.

The TEXT (t) command draws the current text string in accordance
with the current font, size, flow, and justification settings.  
The vertical position of horizontal text is affected by the 
vertical justification setting: for bottom justify, the text 
appears slightly higher than the cursor; for center justify, it 
appears next to the cursor; and for top justify, it appears 
slightly lower than the cursor. 

The GET (g) command captures a rectangular block of pixels defined 
by the previous position and the current position.  You will hear 
a short beep if the block is too large.

The PUT (p) command sets a rectangular block of pixels, using the 
current position as the upper left corner, to be a duplication of 
a block captured by a preceding Get command.

The WRITE (w) command saves the current diagram and current 
settings to a disk file n.DGM, where n is the current drawing 
name.  If n is not a valid file name, you will hear a short beep. 

The INPUT (i) command retrieves a saved diagram and settings from 
the disk file n.DGM, where n is the current drawing name.  If the
diagram has not been saved since the last change, you will hear a 
long beep.  To confirm that you want to replace the current 
drawing with one on disk, repeat the Input command; to abort, 
press any other key.  As a reminder that any of the settings could 
have been changed by the input operation, the settings/help screen 
is flashed momentarily.  If the file is not found, you will hear a 
short beep. 

The HARDCOPY (H) command sends the diagram to a printer.  This has 
nontrivial ramifications.  For further information, read the next 
section. 

The CLEAR (Alt C) command erases the drawing screen.  If the 
diagram has not been saved since the last change, you will hear a 
long beep.  To confirm that you want to discard the current 
drawing, repeat the Clear command; to abort, press any other key.

The QUIT (q) command terminates the program run.  If the diagram 
has not been saved since the last change, you will hear a long 
beep.  To confirm that you do not want to save the current 
drawing, repeat the Quit command; to abort, press any other key.




                       Printing a Hard Copy


The Hardcopy command actually invokes a completely separate 
program assumed to reside in a file PRINTDWG.EXE in the current 
directory.  The problem of printing graphics "screen dumps" is 
notorious for its dependence on user taste and the characteristics 
of different printers.  Accordingly, you are free to acquire any 
printing program you like and rename it PRINTDWG.EXE, or even, if 
you have the know-how, write your own.

The particular printing program supplied with MONODRAW was written 
for an Epson-like dot matrix printer (specifically, a Star 
Micronics Gemini 10X).  It prints the diagram on a standard 
letter-sized form, rotated 90 degrees to the right so that the 
leftmost pixel columns of the diagram are printed as the topmost 
dot rows across the sheet.  The aspect ratio of the resulting hard
copy is 12% "flatter" than it is on the screen.  The source code 
(in Turbo Pascal version 4.0) for this program is supplied in the 
file PRINTDWG.PAS, in case you want to try modifying it to suit 
your own taste or your own printer. 

When PRINTDWG.EXE is finished printing the hard copy, MONODRAW 
retakes control of the computer.  If PRINTDWG.EXE is not found, 
you will hear a short beep.




                        Some Helpful Hints


Creating diagrams often involves a lot of erasing and redrawing.  
There are several ways of erasing parts of a diagram in MONODRAW.  
If you toggle into erase Mode, you can erase individual pixels 
with the Mark (space bar) command or entire lines, boxes, and 
curves with the L, B, and C commands.  To completely clear a small 
area of a diagram, you can move to a blank region, capture a blank
block of pixels with the Get command, move to the area to be 
cleared, and issue a Put command.  (If you momentarily use the 
erase mode when marking the previous point for the Get, that point 
will remain unlit.)  Contiguous groups of lit pixels, such as 
those comprising text characters, can be deleted by setting the 
fill pattern to empty, toggling to the erase mode, and issuing a 
Fill command.

For many diagrams it is a good idea to draw all the text items 
first and all the line items later.  Otherwise, it can be hard to 
get the text items to fit right.

Before doing a "dangerous" operation such as a Fill, Put or Text 
in a complex diagram, you should first do a precautionary Write.  
That way, if the operation does not do what you expected, you can 
undo it by issuing an Input command. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1092

     Volume in drive A has no label
     Directory of A:\

    DEMO     SCN       548  12-22-85   8:09a
    FILE1092 TXT      2383   6-20-88  11:10a
    GENERAL  INC      9636   3-29-87   8:31a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   6-07-88   3:19p
    HELP     SCN      1335   2-07-86   7:14a
    INTCOM   DGM     32896   3-26-88   7:36p
    MANUAL   BAT       162   6-07-88   3:22p
    MDRAW    DOC     17978   3-26-88   8:38p
    MDRAW    EXE     58032   3-26-88   8:16p
    PRINTDWG EXE      2576   3-05-88   7:20p
    PRINTDWG PAS      1838   3-05-88   7:20p
    PRTDOC   BAT       161   6-07-88   3:22p
    READ     ME        608   3-26-88   8:22p
    READ1ST            770  12-12-87  11:34a
    README           43073  12-12-87   7:24a
    SCNDSIGN COM     30789   9-17-87   4:57p
    SCNDSIGN PAS     55482  11-21-87  12:57p
    VAR      SCN      1463  10-12-86  10:09a
    ________ ___         5   6-07-88   2:45p
           20 file(s)     260621 bytes
                           49152 bytes free
