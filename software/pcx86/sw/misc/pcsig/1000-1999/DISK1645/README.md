---
layout: page
title: "PC-SIG Diskette Library (Disk #1645)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1645/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1645"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAINTER'S APPRENTICE"

    PAINTERS APPRENTICE is a bitmap editor like PC Paintbrush or Dr Halo.
    MacPaint users will find its black and white screen and pull down menus
    familar.  For those who want to create detailed images that take
    advantage of high resolution printers, this program is faster and
    intuitively easier to use than its commercial counterparts.
    
    PAINTERS APPRENTICE has all the functionality one would expect from the
    newest generation of quality paint programs.  Mouse control and full use
    of drawing icons make for easy image manipulation.  Cut and paste, zoom
    and expand, multiple paint texture and painting tools (brushes and spray
    cans) are all at your fingertips. Special drawing tools for circles,
    rectangles and other geometric shapes are also available.  There is even
    the ability to rotate and flip selected images.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1645.TXT

{% raw %}
```
Disk No: 1645                                                           
Disk Title: Painter's Apprentice                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: Painter's Apprentice                                     
Author Version: 1.0                                                     
Author Registration: $35.00                                             
Special Requirements: Microsoft Mouse, EGA, and Epson, IBM, Okidata, or 
                                                                        
PAINTERS APPRENTICE is a bitmap editor like PC Paintbrush or Dr Halo.   
MacPaint users will find its black and white screen and pull down menus 
familar.  For those who want to create detailed images that take        
advantage of high resolution printers, this program is faster and       
intuitively easier to use than its commercial counterparts.             
                                                                        
PAINTERS APPRENTICE has all the functionality one would expect from the 
newest generation of quality paint programs.  Mouse control and full use
of drawing icons make for easy image manipulation.  Cut and paste, zoom 
and expand, multiple paint texture and painting tools (brushes and spray
cans) are all at your fingertips. Special drawing tools for circles,    
rectangles and other geometric shapes are also available.  There is even
the ability to rotate and flip selected images.                         
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #1645  PAINTER'S APPRENTICE >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  PA (press enter)                               ║
║ To install program onto hard drive, type:  INSTALL (press enter)        ║
║                                                                         ║
║ To print documentation, type:  COPY PA.DOC PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PA.DOC

{% raw %}
```
Beginner's Guide to Painter's Apprentice

The easiest way to learn Painter is to browse through the program.
Install your mouse driver.  You only need to do this once after
booting the computer.  Run painter by executing 'pa'.

To comprehend what the program is doing, imagine that you are a
painter.  You have a canvas (the largest rectangle), a tool
(indicated by the shape of the pointer), and a paint color (indicated
by the pattern at lower left).

We need to define a few terms first, though.  _Click_ means to
position the pointer, press and release the mouse button.  _Drag_
means to position the pointer, press the button, move the mouse, and
release the mouse button.  Unless otherwise stated, use the &dleft
button.  The right button is reserved for advanced functions.

To use the current tool, drag on the canvas.

To use the menus at top, drag the menu title.  Release the button
when the desired command is highlighted.

To change the icons at left, click to select a new tool.  The current
tool is highlighted, and the pointer is in the shape of the tool.

To change the current pattern used by various tools, drag in the box
at lower left to select a new pattern.  Release the button when the
desired pattern appears at the lower left.  The pattern is initially
black.

Press the Home key for an explanation of the tools.

Commands:

Only those commands that are not obvious are listed below.

File-Restore will reload the image from disk if it was originally loaded from
disk otherwise it will Scratch.

File-Select Drive shows the current default drive outlined.  Click on a letter
to select a new default drive.  The default drive is used for all file
operations.

File-Load... gives you a menu of images on the default drive.  Click on the
desired name, click in the arrow boxes to scroll it into view, or click on
cancel.

File-Save will simply save the current image.  If you haven't given the image a
name yet (name is NONAME), you will be asked for one.

File-Save as... will always ask you for the file name to save it under.

File-Print will print the image with the selected printer driver.  A
printer driver (.PRI) is selected by copying it to a file called
PAINT.PRI before running painter.


All of the Edit menu commands except Undo and Paste require a selection box,
created using the upper left tool.

Edit-Cut is identical to Edit-Copy followed by Edit-Clear.

Edit-Copy will copy the contents of the selection box to a file called
SCRAP.SCR.

The function key shift-F1 will Copy to a file called SCRAP01.SCR, likewise for
key shift-F2 which copies to SCRAP02.SCR, all the way through shift-F10.

Edit-Paste will copy the contents of the file called SCRAP.SCR to the screen
and put a selection box around it.

The function key F1 will Paste from a file called SCRAP01.SCR, likewise for key
F2 which pastes from SCRAP02.SCR, all the way through F10.

Edit-Clear will remove the selection box and its contents from the screen.

Assist-Grid, if on, will restrict the following tools to eight by eight grid
points: Select, Scroll, Text, Line, Circle, Rounded Rect, Rect


Printing:

To configure Painter's Apprentice to a particular printer, copy the
desired printer driver (*.PRI) to PAINT.PRI.  Note that many printers
are compatible with the Epson MX, so if in doubt, try EPSONMX.PRI.
When Painter's Apprentice starts up, it looks for PAINT.PRI on the
default drive and loads it into memory.  Not all printers can print
the entire page, so Painter establishes margins for your printer.
When Assist-Margins are turned on, you are restricted to that part of
the page that your printer will print.


Expert's Guide to Painter's Apprentice

Pressing the right button while also using the left button to move a
select box around causes the select box to become transparent.  Very
useful for abutting two items.

The pattern with the fewest dots has those dots aligned with the grid
points.  If you paint the entire screen with that pattern, each dot
will be a grid point.  This is useful for designing a library
component that will later be connected to other components on grid
points.

If you never use a font, or don't use a certain size in a font,
delete that file from your working disk and Painter's Apprentice will
start up that much faster.  If you don't use any fonts, delete them
all.

When you run painter from MS-DOS, you may specify an image name on
the command line.

When you are entering text using the Text tool, press enter to cause
the current line of text to be frozen in the current size, font, etc.
Press return to do the same and also move down a line.

If you want a library of shapes that you can paste in at will, use
the shifted function keys to cut them, and unshifted function keys to
paste them back in.  Each function key xx is associated with a scrap
file called SCRAPxx.

Double clicking on the select icon causes the entire window to be
selected.

The three files INTRO.SCR, HELP.SCR and QUICKIES.SCR are just scrap
files.  You may rename one of them to SCRAP.SCR, paste it, modify it,
select the entire window by double-clicking on the select icon, copy
it, and rename SCRAP.SCR to whichever one you were modifying.

---------------

Many of the commands on the menus may be typed directly from the
keyboard using a single key.  In most cases this is the control key
that appears to the right of the command in the menu.  Some of the
other commands are executed with other non-control keys.  Still more
commands are executed by double-clicking on the appropriate icon.  A
double click is two clicks in quick succession without moving the
pointer.  The following table gives a list of all the quickies.

Table of Quickies
Command			Double-Click	Key

Files-Change Drive			Alt-C
Files-Load				Pg Up
Files-Save				Pg Dn
Files-Save As				Ctrl-Pg Dn
Files-Quit				Alt-X
Edit-Undo				Ctrl-Z
Edit-Cut				Ctrl-V
Cut 1					sF1
Cut 2					sF2
etc.					etc.
Cut 10					sF10
Edit-Copy				Ctrl-X
Edit-Paste				Ctrl-D
Paste 1					F1
Paste 2					F2
etc.					etc.
Paste 10				F10
Edit-Clear				Del
Edit-Outline				Ctrl-E
Select entire window	Select
Assist-Magnify		Pencil
Assist-Preview Page	Scroll
Assist-Brush Shape	Brush
Assist-Clear Window	Eraser
Assist-Help				Home
Assist-Quickies				Ctrl-Home
up Font					Uparrow
down Font				Downarrow
up FontSize				Leftarrow
down FontSize				Rightarrow
Style-Plain				Ctrl-P
Style-Bold				Ctrl-B
Style-Italics				Ctrl-I
Style-Underline				Ctrl-U
Style-Outline				Ctrl-O
Style-Shadow				Ctrl-S
Style-Align Left			Ctrl-L
Style-Align Center			Ctrl-C
Style-Align Right			Ctrl-R

Key quickies:

The keys described under Paint Quickies are in effect at all times.
Other keys are ignored except:

In Letter mode:

Ctrl-H and BACK SPACE remove the rightmost letter.  Ctrl-M and RETURN enter
the text and moves the blinking cursor down a line.  ENTER enters the
text and starts anew at the blinking cursor.

In prompt mode:

Ctrl-H and BACK SPACE remove the rightmost letter.  Ctrl-M and RETURN enter
the text.


---------------

Button quickies:

Several of the tools (Pen, Brush, Air Brush, and Eraser) allow scrolling by
using the right button.  Pressing the right button is identical to selecting
the Scroll (fingers) tool and scrolling with the left button.  You may also
quickly enter Magnify mode by the following sequence: right press, left press,
right release, left release.

Right button:

Several of the tools (Pen, Brush, Air Brush, and Eraser) allow scrolling by
using the right button, as described above under Button quickies.  The Select
tool uses the right button to stretch or shrink a selection box.  Position the
pointer just inside the box outline and press the right button.  Now move the
pointer to a new position and wait.  Eventually you will see the selection box
resized.  Release the button when the image is at the desired size.

The right button causes the rubber band tools (Line, Square, etc.) to draw the
border using the current pattern instead of white.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1645

     Volume in drive A has no label
     Directory of A:\

    ABOUT    SCR     24964   1-18-89  11:03p
    DISNEY   MAC     29927   2-01-88   8:09p
    EPSONFX  PRI       214   8-24-87  10:49a
    EPSONMX  PRI       171   8-24-87  10:52a
    FILE1645 TXT      2147  12-05-89   2:54p
    FNT      LDI       901  11-07-88  11:04p
    GEMINI   PRI       164   1-09-89   4:38p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  12-08-89  11:53a
    HELP     SCR     24964   5-05-88  11:48p
    HP82905B PRI       198   1-27-88   3:16p
    IBMPRO   PRI       191   8-24-87  10:52a
    IBMQUIET PRI       221  12-08-87  10:02a
    INSTALL  BAT       134  12-15-88  12:18a
    IPA      LDI       226  10-05-88   9:54p
    LA50     PRI       130   3-28-88   4:01p
    LASERJET PRI       229   2-01-89   2:05p
    MAC      LDI       287  12-23-88  11:05p
    MPI99    PRI       123   8-20-87   1:29p
    MV       COM      1920   4-02-87   9:37a
    MVP      PRI       116  11-04-88   9:53a
    NOR10    FNT      1776  11-12-88   5:06p
    NOR12    FNT      2318  11-12-88   5:06p
    NOR14    FNT      3155  11-12-88   5:06p
    NOR18    FNT      4458  11-12-88   5:06p
    NOR9     FNT      1631  11-12-88   5:07p
    OKI192   PRI       170   8-24-87  10:52a
    OKI83    PRI       153   8-20-87   1:29p
    OKI83S   PRI       163   8-20-87   1:29p
    OLYMPIA  PRI       205   8-20-87   1:29p
    PA       COM     40413  12-14-88  11:35p
    PA       DOC      8190  12-13-88  11:03p
    PA       DSC       231  12-13-88  10:46p
    POOH     IPA      5399   1-28-88   8:52a
    POST     PRI       316   1-25-89   2:13p
    POTS10   FNT      1660  11-12-88   5:07p
    POTS12   FNT      2154  11-12-88   5:07p
    POTS14   FNT      2742  11-12-88   5:08p
    POTS15   FNT      2094  11-12-88   5:08p
    POTS18   FNT      4252  11-12-88   5:08p
    POTS9    FNT      1536  11-12-88   5:08p
    PROWRITE PRI       238   8-24-87  10:23a
    QUICKIES SCR     24964  12-03-88  12:22a
    README            7758   1-18-89  11:03p
    SCR      LDI       335  10-29-88   7:09p
    SERIF10  FNT      1444   1-24-88   3:56a
    SERIF12  FNT      2869   1-24-88   3:56a
    SERIF18  FNT      3031   1-18-89  11:04p
    STARSR   PRI       279   8-24-87  10:52a
    SYSTEM9  FNT      1456   8-15-88   7:10p
    THINKJET PRI       216   8-05-88   2:06p
           51 file(s)     213488 bytes
                           74752 bytes free
