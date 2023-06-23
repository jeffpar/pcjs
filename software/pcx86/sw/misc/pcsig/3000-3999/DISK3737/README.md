---
layout: page
title: "PC-SIG Diskette Library (Disk #3737)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3737/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3737"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## HELP.TXT

{% raw %}
```
Mdraw V0.5
Copyright 1992,1993 by WindowWorks
Mdraw - An object-oriented drawing package for MS-Windows.


CONTENTS
0	Introduction
1	The Mouse
2	The Keyboard
3	The Toolbar
3.1	The small arrow	- Selector Tool
3.1.1		To select an object:
3.1.2 	To select more than one object:
3.1.3 	To add or remove objects from the selection:
3.1.4 	To select the next object 'underneath' another object:
3.1.5 	To resize an object
3.2 	The box		- Rectangle Tool
3.3 	The circle	- Ellipse Tool
3.4	The pie shape - Arc (Not completely worked out yet)
3.5 	The hollow star - Polyline Tool
3.6 	The solid star	- Polygon Tool
3.7 	The letter	- Text Tool
3.8 	The connected puzzle pieces - Join
3.9 	The unconnected puzzle pieces - Un-join
3.10 	The big arrow	- Hyper jump
3.11 	The little window	- Edit note
3.12 	The color pallete
4 	Attributes
4.1 	Fonts
4.2	Arrowheads
5 	Order of objects
5.1 	Move an object up
5.2 	Move an object down
5.3 	Move an object to the top
5.4 	Move an object to the bottom
6	File output
6.1	Window Metafile
6.2	CGM

0 Introduction

Welcome to Mdraw, an object-oriented drawing package for MS-Windows.
This program is object-oriented in the sense that the objects you draw 
may be moved or modified after you draw them.  This is not a painting
program, but rather a drawing program.  You do not 'erase' parts of your
drawing, but you can select and then delete the parts you have drawn.
This is also object-oriented in the sense that each object has attributes
that you may modify.  For example, each object you draw has a color, and you 
may change that color after you have drawn it.  You may also 'join' multiple
objects together.

1 The mouse
Mdraw uses the mouse extensively.  The left button is use for nearly every
operation.  The right button acts like the selector tool.
The one exception that uses the right button for something else is to 
terminate a polygon. 

2 The Keyboard
There are several keyboard 'shortcut' keys available in Mdraw.

	<shift><delete>		Cut
	<ctrl><insert>			Copy
	<shift><insert>		Paste
	<ctrl>-c					Copy
	<ctrl>-x					Cut
	<ctrl>-v					Paste
	<ctrl>-s					Save file
	<delete>					Delete (NOTE: Does not make a copy)
	<insert>					Paste
	<page-up>				Scroll up
	<page-down>				Scroll Down
	<arrows>					Move selection up
	<shift><arrows>		Move selection by one pixel
	<ctrl><up-arrow>		Move selection higher in display list
	<ctrl><down-arrow>	Move selection further back in display list
	<alt><up-arrow>		Move selection to top of display list
	<alt><down-arrow>		Move selection to bottom of display list


3 The Toolbar
To draw an object on the screen, you select which tool you would like by
clicking on its icon from the toolbar (or selecting it from the 'Tools' menu)
When you draw an object, that object becomes the currently selected object
and any previously selected objects are deselected.

3.1 The small arrow	- selector
This tool allows you to select objects from the workspace. In order to do
anything with or to an object, it must be selected.  Once you have
an object selected, you may change its attributes (e.g. its color, or font).
You also need to select an object before moving or resizing as well.

Helpful hint:
	The right button always acts like the 'selector' tool.
	(unless you're already busy drawing or moving something)

3.1.1 To select an object:
	Choose the selector tool (if it isn't already selected)
	Click (button down and then button up) the mouse button on the 
		object you want to select.

3.1.2 To select more than one object:
	Drag (button down, move the mouse) the mouse to draw
		a rectangle that surrounds the objects you wish to select.
	Release the mouse button

3.1.3 To add or remove objects from the selection:
	Hold down the shift key, then click the mouse button on the object.

3.1.4 To select the next object 'underneath' another object:
	Hold down the control key, then click the mouse button on the object.
	(you may click several times to select an object further down.)

	HINT: You may double-click the right button to select the next object

3.1.5 To resize an object
	Press and hold the mouse button down in the little tiny black box in the
		lower right of the selected object
	Move the mouse (with the button still held down)
	Release the mouse 

3.2 The box	- rectangles
To draw a rectangle:
	Select the rectangle tool
	Drag (button down, move the mouse) the mouse to draw a rectangle
	Release the mouse button

3.3 The circle	- ellipses
	Select the ellipse tool
	Drag (button down, move the mouse) the mouse to draw an ellipse
	Release the mouse button

3.4 The pie - Arc
	Select the arc tool
	Drag (button down, move the mouse) the mouse to draw an arc
	Release the mouse button
	NOTE: The border is not yet perfect.
	
3.5 The hollow star - Polyline
To draw a polyline:
	Select the polyline tool
	Click where you want the starting point
	Click where you want each intermediate point
	Click the RIGHT button where you want the last point.
	The polyline will NOT draw a line from the first to the last point.
	The polyline will not be filled in with any color, and can't be
		made to later on. (use the polygon tool for this)

3.6 The solid star - Polygon
To draw a polygon:
	Select the polygon tool
	Click where you want the starting point
	Click where you want each intermediate point
	Click the RIGHT button where you want the last point.
	The polygon will draw a line from the first to the last point.
	The polygon is filled in with the current color.

3.7 The letter	- text
To add text:
	Select the text tool
	Click where you want the upper left of the text to go.
	Type the text.
	Click outside of the text entry rectangle
		(but still within the Mdraw window)

	HINT: You may paste text from the clipboard into this text entry rectangle

3.8 The connected puzzle pieces - join
	This is not really a tool, but rather an action.
	When you press this, the currently selected objects are joined together.
	If only one object is selected, nothing happens.

3.9 The unconnected puzzle pieces - un-join
	This is not really a tool, but rather an action.
	When you press this, the currently selected objects are un-joined.
	If there is no selection, nothing happens.
	
3.10 The big arrow - Hyper jump
	This is not really a tool, but rather an action.
	When you press this, you jump to the file that this object is linked to.
	If the current file has changed, you are given the chance to save it.
	If there is no link to another file, you are prompted for a filename.
	If the file doesn't exist, it tries to jump anyway. (I'll fix this)

	You may add or edit links through the 'Edit' menu.

	HINT: You may double click the left button to activate the link
	NOTE: The right button behaves differently when you double click it.

3.11 The little window - edit note
	This is not really a tool, but rather an action.
	When you press this, you invoke NOTEPAD.EXE and edit the file that
	this object is attached to.
	If there is no attached note, you are prompted for a filename.

	You may add or edit notes through the 'Edit' menu.

3.12 The color pallete
To select a color:
	Click the mouse on the square that has the color you want
	If you have an object currently selected, it will change to that color
	If not, the little box next to the pallete will change, showing
		the current color.

4 Attributes
To change the attribute of an object, select that object (or select multiple)
objects, and use the Attribute menu to select the new attribute you want.
You may also use the pallete to change the objects color by selecting
the object, and selecting the desired color from the pallete.

4.1 Fonts
Text objects are drawn with a certain font and style. Fonts are things like
'Arial' or 'Times Roman'.  Styles are things like 'Bold' or 'Italics'.  
You may select different styles from the 'Attribute|Text' menu.
You may select different fonts and sizes from the 'Attribute|Text|Font' menu.
The font sizes in the Font dialog box that comes up may be selected from the
list, or you may type in an arbitrary number for the font size.

4.2 Arrowhead
The Polyline tool may optionally be drawn with an arrowhead at one end.
You may select this attribute from the 'Attribute|Polyline' menu.

5 Order of objects
As you draw objects, they are laid down on top of the older ones.  You may 
change which objects are on bottom and which are on top.  To change the order, 
use the 'order' menu or the keyboard shortcuts.

5.1 Move object up
Selecting this menu option will move the currently selected objects up one. 
This may change what you see by hiding other objects.
	HINT: You may also do this by pressing <ctrl><up-arrow>

5.2 Move object down
Selecting this menu option will move the currently selected objects down one. 
This may change what you see by revealing other objects, or hiding the current
objects.
	HINT: You may also do this by pressing <ctrl><down-arrow>

5.3 Move object to top
Selecting this menu option will move the currently selected objects to the top. 
This may change what you see by hiding other objects.
	HINT: You may also do this by pressing <alt><up-arrow>

5.4 Move object to bottom
Selecting this menu option will move the currently selected objects up one. 
This may change what you see by revealing other objects, or hiding the 
current objects.
	HINT: You may also do this by pressing <alt><down-arrow>

6 File output
6.1 Windows metafile
You can 'export' your drawing to a Windows Metafile.  There are two types
of Windows Metafiles: placeable and non-placeable.  Placeable metafiles are
used in Word for Windows and other high-end packages.

6.2 CGM (Computer Graphics Metafile)
This is an ANSI psuedo-standard metafile format.  The standard leaves room
for different ways of representing things, and I still have a ways to go to
get a useable format working.


```
{% endraw %}

## MDRAW.TXT

{% raw %}
```
Mdraw - An object-oriented drawing package for MS-Windows.
Copyright 1992,1993 by WindowWorks (tm)
"Serving you since 1993!"

Mdraw V0.5 (mdraw.exe - 184320 bytes)

This program is distributed as shareware. 
You may give it away, but you may not sell it for profit.
If you use it, you need to pay for it. 
Registration costs $15.00 (U.S.).

By registering, you help support further development of some great software.
You will also be put on our mailing lists to receive update notices and
new product announcements.  And if you register before June 4, 1993, you 
get a 50% discount on all of our product upgrades for the rest of the century!

We plan on releasing an update in a few months that uses MDI, OLE, and much more!

Send comments, bug reports, suggestions and $15.00 to:
	WindowWorks
	PO 602
	Redmond, WA 98073-0602

	CompuServe ID: 73670,364


CONTENTS
1 Introduction
1.1 Features
1.2 Current Limitations
1.3 Future Features
1.4 Changes in v0.4f
1.5 Changes in v0.4g
1.6 Changes in v0.5

1 Introduction
Welcome to Mdraw, an object-oriented drawing package for MS-Windows.
This program is object-oriented in the sense that the objects you draw 
may be moved or modified after you draw them.  This is not a painting
program, but rather a drawing program.  You do not 'erase' parts of your
drawing, but you can select and then delete the parts you have drawn.
This is also object-oriented in the sense that each object has attributes
that you may modify.  For example, each object you draw has a color, and you 
may change that color after you have drawn it.  You may also 'join' multiple
objects together to create a new object (which can be unjoined later).

1.1 Features:
	Toolbar/Pallete
	Drawing Tools - box, ellipse, polygon, text
	Linestyles, Fill colors, Text colors, Text formats, Fonts, Font sizes
	Cut, Copy, Paste, Delete
	Join, Unjoin
	Move, Resize
	Snap Grid
	Link an object to another Mdraw file. (aka Hyperlinks)
	Attach a note to an object & edit it with NOTEPAD.EXE
	Picture Export - CGM, WMF (placeable & fixed)
	Picture Import - CGM (somewhat)
	Printing (also from command line via parameter '/p')


1.2 Current Limitations (which I'm working on fixing...):
Major:
	Can't edit polygons after creation (can only resize)
	No bitmaps.
	Doesn't use the 'clipboard' to import text or bitmaps.
	CGM import/export not as truly portable as it should be.

Minor:	
	No import of other file formats (v0.2f has CGM import)
	Only 16 colors
	No fill patterns
	Text background is always transparent
	Partial True Type font support (doesn't identify bold & italic fontnames)
	Fixed size snap grid
	No horizontal scroll bar
	Zoom in/out not quite perfected.
	
1.3 Future Features
	Multiple document interface
	Fill patterns
	OLE 2.0 support (as a server)
	MS-Windows 3.1 support (drag/drop, better TrueType, common dialogs, etc.)
	Clipboard import/export (text, WMF, bitmap, etc)
	File Import (text, WMF, bitmap, etc)
	Layers
	More object types - splines, bitmaps
	Read only/browse mode.
	Print preview

1.4 Changes in v0.4f
	1. Added CGM import
	2. Improved CGM export (it is still not perfectly transportable yet)
	3. Added vertical scroll bar
	4. Increased maximum number of fonts in selection dialog to 256

1.5 Changes in v0.4g
	1. Added more drag points.
	2. Fixed resizing to work on multiple objects.

1.6 Changes in v0.5
	1. Changed copyright to WindowWorks(tm). Now you can start paying too!
	2. Added grid dots
	3. Added HELP
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3737

     Volume in drive A has no label
     Directory of A:\

    MDRAW    EXE    184320   3-21-93   8:58a
    MDRAW    TXT      3553   3-16-93   7:41p
    HELP     TXT     10051   2-27-93  12:13a
    MDRAW    HLP     29732   3-11-93   8:55p
    GO       BAT        31   6-04-93   1:04p
    SHOW     EXE      2040   9-12-88  10:48a
            6 file(s)     229727 bytes
                           90112 bytes free
