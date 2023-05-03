---
layout: page
title: "PC-SIG Diskette Library (Disk #2546)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2546/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2546"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DTP.DOC

{% raw %}
```
DESKTOP PAINT 2.1
__________________________________________________________________

If you like this program, please do one of the following:

    If you have not previously done so, go down to your local 
    bookstore and buy a copy of "Coven: A Novel", by Steven 
    William Rimmer, published by Ballantine Books. Read the book 
    and tell your friends about it if you like it. Send us some 
    comments about the book or a photocopy of the cover and we'll 
    consider you a registered user of this program.

    If your local bookstore doesn't have Coven, ask them to order 
    it for you.

    Alternately, send us $35.00, the normal user fee for this 
    software. (The book is $3.95 or $5.50 in Canada: considerably 
    cheaper than cash.) 

    Please note that we cannot accept book covers as registration 
    for Desktop Paint if you have previously registered another 
    Alchemy Mindworks package this way.

    A disk of extra fonts and tools to convert fonts from 
    GEM/Ventura VGA, Windows 3 FON and Macintosh FONT and NFNT 
    files is available to registered users for $10.00 if you 
    order it when you register, or $15.00 afterwards.

    Registered users of this software are entitled to phone 
    support, notification of upgrades and good karma. When you 
    register Desktop Paint we'll send you a copy of the latest 
    version. Please tell us the version number of your copy of 
    Desktop Paint when you register. Our address can be found at 
    the end of this file.

    Please tell us the exact name you wish to have Desktop Paint 
    registered under.

NOTE: If you're searching for Coven and having trouble finding 
it, you can mail order it from the following book store: 
Christies of Cookstown, P.O. Box 392, Cookstown, Ontario L0L 1L0, 
Canada, (705) 458-1562. The cost is $7.00, which includes 
the postage. The author would like to thank everyone who's thus 
far chased it down (or tried).

Please give Desktop Paint to your friends, but if you do, give 
them the entire Desktop Paint package as you received it, 
unconfigured.

NOTE: German users of Desktop Paint should contact our German 
distributor, PD-SERVICE-LAGE, Postfach 1743, D-4937 Lage, West 
Germany. A German language version of the package is available 
from them as well.

(AND FINALLY) NOTE: Users of versions of Desktop Paint prior to 
2.0 should read this file carefully, as the user interface has 
changed a bit as it pertains to drawing colours, the mouse and 
the zoom tool.
__________________________________________________________________


Welcome to Desktop Paint...


WHAT IT IS
__________

Desktop Paint is a bitmapped paint program designed especially 
for use by people who run desktop publishing software such as 
Ventura Publisher, PageMaker, Publish It and so on. It will prove 
equally useful to users of high end word processors, such as 
WordPerfect.

Desktop Paint will allow you to quickly create and modify 
bitmapped graphics, either for use as stand alone pictures or for 
inclusion in other documents. It features a wide variety of file 
formats, a powerful selection of drawing tools, an easy to 
operate user interface and lots of room for customization.

Desktop Paint supports the following image file formats:

	- MacPaint MAC (and PSF MAC files)
	- Ventura IMG
	- PC Paintbrush PCX
	- TIFF
	- WordPerfect WPG

Note that Desktop Paint will only create and work with monochrome 
files. Note also that it will only work with WPG files which 
contain bitmapped images. Desktop Paint is a paint program, 
rather than a drawing program. It does not support GEM, Corel 
Draw, Designer, DXF or EPS files.

Unlike many other paint programs, Desktop Paint features complete 
EMS support. It will handle enormous images... pictures which 
unpack into several megabytes... if you have sufficient expanded 
memory in your system.

Desktop Paint requires a Microsoft compatible mouse and driver 
and one of the following display adapters:

	- Hercules
	- EGA
	- VGA

You can run Desktop Paint on any PC, even really old 8088 based 
systems. It will prove a bit slow on very low end systems. If you 
are running it on a slower machine it will be a bit snappier if 
you use a Hercules compatible monochrome graphics card rather 
than an EGA or VGA card. Most EGA and VGA compatible cards have 
Hercules emulation modes.

You can run Desktop Paint in as little as 384 kilobytes of 
memory, although this will severely restrict the size of the 
pictures it will manage. A full 640 kilobytes is preferable, and 
two megabytes of EMS is desirable if you plan to work with large 
pictures.

If you wish to use Desktop Paint with graphics files in formats 
other than those it currently supports, we recommend that you get 
a copy of Graphic Workshop, which will convert among virtually 
all of the popular image file formats. See the end of this file 
for more information about Graphic Workshop.


RUNNING DESKTOP PAINT
_____________________

You should place the following files in the directory you plan to 
keep Desktop Paint in. 

	- DTP.EXE	The program
	- DTP.RES	Fonts and other resources
	- GALLERY.RES	Picture fragments
	- DTPINSTL.EXE	The installer
	- RMOVER.EXE	Resource mover
	- EXAMPLE1.PCX	A picture file

We will discuss how to permanently configure Desktop Paint 
shortly using the DTPINSTL program, but for now it will run well 
enough right out of the box... or out of the ZIP.

Type DTP. When the program has loaded you'll see a grey screen 
with a menu bar at the top. Click on one of the menu items to 
pull down a menu. Drag the mouse pointer to the menu item you 
wish to select and release it. The function you've chosen will 
pop up. (Chances are you already know how to work a menu bar.)

Desktop Paint assumes that your mouse has two buttons. In most 
cases, you'll be using the left one to click on things. On a two 
button mouse, drawing with the left button will produce black 
lines and drawing with the right button will produce white lines. 
If you have a three button mouse you might have to experiment a 
bit to see which button draws white lines.

To open a file, you must first tell Desktop Paint which of its 
file types you want to deal with. It comes set up to default to 
PCX files... we'll see how to change this later.

Select the File Type item from the File menu and set the file 
type you wish to use. Next, select the Open item and select the 
file you want to Open. If you want to start from scratch, select 
the New item instead. The New function comes set up to default to 
creating 640 by 480 pixel files. You can type in different values 
if you like, and these default values can be changed with the 
installer program.

A work area will open on your screen. If the picture you want to 
work on is too big to fit on the screen all at once, scroll bars 
will appear to allow you to move the work area over your picture.

If you wish to open a different picture, you must first select 
Close from the file menu to close your current picture and then 
select New or Open.

You can return to DOS at any time by selecting Quit from the File 
menu.

You can run Desktop Paint and load a file into it with one 
command from the DOS prompt. For example, if you wanted to edit a 
file called PICTURE.IMG, you could do this

C>DTP PICTURE.IMG

This would run Desktop Paint and load the picture as if it had 
been loaded with the Open command from the File menu.

Desktop Paint's dialog boxes will respond to the keyboard. If you 
hit the Enter key when a dialog box is visible, the box will 
respond as if you had clicked in the "Ok" box. If you hit Esc it 
will respond as if you had clicked in the "Cancel" box, assuming 
there is one.


A WORD ABOUT MICE
-----------------
Desktop Paint is driven by the driver of a Microsoft or 
Microsoft-compatible mouse. The driver itself is what makes the 
arrow cursor appear.

Most Microsoft-compatible mice, such as the Logitech mice, have 
complete implementations of the driver and will not prove to be a 
problem with Desktop Paint. Some very economical mice do not 
implement the graphic cursor. In these cases, Desktop Paint will 
appear to function but the cursor will not be visible.

If this happens to you, you will probably find that getting a 
copy of the real Microsoft MOUSE.COM mouse driver and replacing 
the one for your mouse with it will solve the problem, and will 
make anything else you use your mouse with work a bit better as 
well. There are a very few clone mice which are sufficiently 
peculiar as to be unrecognizable by the Microsoft mouse driver. 
These mice will not work with Desktop Paint.

You can usually find the latest version of the Microsoft mouse 
driver on bulletin boards.


A WORD ABOUT MEMORY AND DESKTOP PAINT
_____________________________________

Desktop Paint is forever calling for and releasing blocks of 
memory. Each time it opens a window, displays a picture or an 
icon, responds to a mouse click and so on, it calls for at least 
a bit of memory.

If you hear a beep when you ask Desktop Paint to do something, 
this usually indicates that it could not find enough memory to do 
what you asked it. This may be because you're running it in 
restricted memory, or because most of your memory is occupied by 
a picture.

If possible, you should not run Desktop Paint from a shell 
program, or shelled out of another application, as this will 
reduce the amount of memory it has available for its own use.

In very cramped memory situations, you can free up a bit of 
memory by unselecting an area of your drawing if one is currently 
selected. Selecting things will be dealt with later in the 
discussion of the Selector tool.

Note that if you attempt to quit Desktop Paint and there isn't 
enough memory to open the window that asks "Do you want to 
quit?", Desktop Paint will assume that you do and return you 
immediately to DOS. As such, you can't actually get trapped in 
it.


THE MENUS
_________

The easiest way to go through the functions of Desktop Paint is 
to look at its menus and toolbox. Here's a quick overview of the 
menus, starting from the left edge of the screen.

Note that many of the menu items have keyboard equivalents. This 
is indicated by a diamond and a letter, the diamond representing 
the Alt key. For example, if you wish to select the Open 
function, you may do so by either selecting it from the file menu 
or by holding down the Alt key and hitting O.

Some menu items may be printed in grey type, rather than in 
black. These are disabled. Items are disabled because it's 
inappropriate to use them at the moment. For example, you would 
not be able to select the Print item until there was a picture in 
Desktop Paint to print.


The Desk Menu
-------------

	Clipboard: 
This function lets you see the most recent fragment cut or copied 
from a picture or copied from the Gallery. The Clipboard is a 
holding area for bits of images. In the Clipboard window, the 
current contents of the Clipboard will be displayed padded out 
with black if they're too small to fill the window or cropped if 
they're too big. This is only how the image is displayed in the 
window, and will not affect it when it's pasted into your 
picture.

You can import and export small image files into and out of the 
Clipboard in the current file format, as set by the File Type 
item of the File menu. The dimensions of imported files must be 
fairly modest... certainly no larger than those of your current 
drawing area. The Clipboard will complain if attempt to import a 
picture which it considers to be too large. 

You can change the file type to import pictures in a file type 
other than that of the picture you're working on. For example, to 
import a small PCX file into the Clipboard while you're working 
on a larger TIFF file, load the TIFF file, select File Type from 
the File menu and select PCX. Select Clipboard from the Desk menu 
and click on Import. Select the PCX file you wish to import. Once 
you've closed the Clipboard window, you can use the Paste item of 
the Edit menu to paste the imported picture into your drawing. 
We'll discuss cutting and pasting in greater detail in the Edit 
menu section.

Note that because all MacPaint files are of fixed dimensions 
which are too large to fit on the Clipboard, you can't import 
MacPaint pictures into the Clipboard window.

	Gallery:
The Gallery is a place to store image fragments which you might 
want to paste into a picture some time in the future. The Gallery 
is permanent... you can build up little image file fragments from 
day a to day and access them whenever you want them.

The Gallery is stored in a file called GALLERY.RES. One will be 
created if it can't be found. Desktop Paint comes with a version 
of GALLERY.RES with several image fragments in it. You can delete 
this if you want to start fresh.

Picture fragments get to the Gallery through the Clipboard. 
Assuming you have previously cut, copied or imported something to 
the Clipboard, open the Gallery window and select Copy. The 
contents of the Clipboard will be added to the Gallery.

When you have several images in the Gallery, you can step through 
them with the Previous and Next buttons.

The Clear button will delete the currently visible image from the 
Gallery.

The Paste button will copy the currently visible image into the 
Clipboard, such that you can subsequently export it to a small 
image file or paste it into your drawing.

Note that unlike image files, the pictures in the Gallery are 
stored uncompressed. A Gallery with several dozen images in it is 
undesirable because it takes a long time to step through them 
and because GALLERY.RES will take up a lot of disk space. As a 
rule, you should keep image fragments you use fairly frequently 
in the Gallery and others in image files on your disk which you 
can import into the Clipboard when they're needed.

	About:
The About box will tell you what version of Desktop Paint you're 
using, as well as how much memory you have free at the moment. 
Note that is only conventional DOS memory... it does not include 
any EMS you may have on hand.


File Menu
---------

	New:
The New function allows you to create a blank drawing of any 
size... at least, of any size you have memory for. The smallest 
dimension a drawing can have is thirty-two pixels on a size. The 
largest is 32,767 pixels. Note that a drawing 32,767 pixels 
square would require 131,068 megabytes of EMS to contain it. You 
cannot create a new drawing which occupies more memory than you 
have.

	Open:
The Open function will load a drawing from your disk into Desktop 
Paint. You must have the file type set appropriately before you 
select Open. The same minimum and maximum file sizes apply to 
Open as they do to New. You can't open a file if there's one 
currently visible in Desktop Paint... you must close your 
existing file first.

	Close:
The Close function disposes of an existing drawing and prepares 
Desktop Paint to have a different drawing opened or created.

	Save:
The Save function will save your current drawing back to the disk 
under the current file name. If you have started your drawing 
from scratch with New, you must first select Save As to assign it 
a file name.

	Save As:
The Save As function allows you to save your drawing under a new 
file name. The file type will be the current file type, as set by 
the File Type function.

	Print:
The Print function will print your current drawing to a laser or 
dot matrix printer. Desktop Paint supports PostScript and 
LaserJet compatible laser printers in four resolutions. Note that 
even though your printer may have three hundred dot per inch 
resolution, you can still print to it at a lower resolution. 
Selecting, for example, one hundred dot per inch resolution will 
cause the picture to be printed larger.

Desktop Paint prints to a dot matrix printer through a special 
driver resource called a PDRV, which lives in DTP.RES. There is a 
PDRV installed in the distribution version of Desktop Paint for 
an Epson FX-80, which is emulated by most dot matrix printers. 
This option will be visible as the ninth printer in the print 
box list.

If you don't need dot matrix support you can remove the PDRV from 
DTP.RES to save a bit of disk space, memory and to shorten the 
time it takes Desktop Paint to boot up. Managing resources is 
discussed later in this file.

If there is no PDRV available, the ninth printer will be 
unavailable. This will also happen if you have failed to place 
DTP.RES where Desktop Paint can find it.

You can select the number of copies to be printed. The number can 
range from 1 through 99. Note that this value only affects output 
to laser printers. Printing to an external printer driver will 
only print one copy at a time no matter how the Copies value is 
set.

	Get Info:
This will allow you to look at any image file of the currently 
selected file type and see how big it is, how much memory it will 
require to edit, how many colours it has for file formats which 
support colour and so on. 

You can use this function to compare the amount of memory a 
picture will need to load into Desktop Paint with the amount of 
free memory you actually have available, as displayed in the 
About box. As a rule, with no TSR programs installed, Desktop 
Paint running on a machine with 640 kilobytes will have about 
three hundred and fifty kilobytes free. 

	File Type:
The File Type function will allow you select the file format for 
use in subsequent file operations. The current choices are 
MacPaint, Ventura/GEM IMG, PCX, TIFF and WordPerfect Graphics. 
Note that you can load a file from one format, change the file 
type and then save it in another. The current file type setting 
affects Save, Save As, Open, Get Info and the import and export 
functions of the Clipboard.

	Quit:
The Quit function returns you to DOS.


Edit Menu
---------

	Copy:
The Copy function is only active when an area of your drawing has 
been selected using the Select tool... the scissors. When 
selected, the Copy function will copy the contents of the 
selected area into the Clipboard.

	Cut:
The Cut function behaves like Copy except that it will fill the 
selected area with white and unselect it.

	Paste:
The Paste tool is only active if there's something in the 
Clipboard. It will paste the current contents of the Clipboard 
into the upper left corner of the drawing window. It will be 
selected, and you can move it to where you want it to be. If you 
hold down the control key while pasting, the pasted fragment will 
be transparent.

	Clear:
The Clear function behaves like the Cut function except that it 
does not copy the selected area to the Clipboard. It just fills 
it with white and unselects it.

	Invert:
The Invert function is only active when an area of your drawing 
has been selected. It inverts all the pixels in the selected area 
black for white.

	Flip horizontal:
The Flip Horizontal function is only active when an area of your 
drawing has been selected. It flips the selected area right to 
left.

	Flip Vertical:
The Flip Vertical function is only active when an area of your 
drawing has been selected. It flips the selected area top to 
bottom.

	Rotate (90, 180 and 270):
These three functions are only active when an area of your 
drawing has been selected. They rotate the selected area by the 
specified amounts.

	Scaling
The Scaling function is only active when an area of your 
drawing has been selected. It scales the selected portion of your 
drawing to your choice of sizes... a dialog box will pop up 
asking for a scaling factor. The scale factor can range from .1 
(ten percent of your original) to 10 (one thousand percent of 
your original) assuming that the scaled fragment will actually 
fit in the drawing window. You can specify different horizontal 
and vertical scaling factors by selecting the "Anamorphic" box. 
If this box is not selected, clicking in the most recently 
changed value will copy it to the other value.

	Trace Edges:
The Trace Edges function is only active when an area of your 
drawing has been selected. It will modify the selected area so 
that the original image is replaced by one having lines around 
all the formerly black parts of the picture. Multiple tracings 
can look extremely slick. 

	Fatten:
The Fatten function is only active when an area of your drawing 
has been selected. It will modify the selected area so that all 
the lines of the original image are fattened up.

	Smudge:
The Smudge function is only active when an area of your drawing 
has been selected. It will make the details of the selected area 
fuzzy. You can select Smudge multiple times to increase the 
amount of smudging.


Gadgets Menu
------------

	Gradient:
The Gradient function allows you set the characteristics of the 
gradients which are drawn by the Gradient tool, to be described 
shortly. Specifically, you can set the direction in which the 
gradient will progress and the minimum and maximum values for the 
extremes of the gradient. The range for the gradient values is 
zero through 255.	

	Set Line:
The Set Line function selects the current drawing line width. The 
current choice for line width are thin, one pixel, and thick, 
three pixels. You can also select no thickness, which is useful 
if you want to draw a filled rectangle or gradient with no line 
around it. Note that there are some limitations to the way lines 
are drawn around ellipses in this version of Desktop Paint, as 
described in the section on BGI Problems.

	Set Fill:
The Set Fill function lets you select the fill pattern for all 
filled drawing including the paint roller fill tool.

There are thirty-eight standard fill patterns in the Set Fill 
box. You can select one to be current by clicking in it. Note 
that a white fill is not the same as no fill. A rectangle which 
is filled with white will obscure any black pixels below it, 
while a rectangle with no fill will not. 

You can edit the currently selected fill pattern by clicking on 
the Edit button. This will open a window for editing the pattern.

The Paste function in the pattern edit window will copy an eight 
by eight pixel rectangle from the Clipboard into the pattern 
you're editing... assuming there's an image at least this big in 
the Clipboard. This allows you to capture patterns from any 
drawing.

You can save pattern sets to disk and load them through the Set 
Fill box. You can also set up Desktop Paint to use a default 
pattern set which you've created, rather than the one it comes 
with. See the section on modifying DTP.RES for more about this.

	Grid:
The Grid function allows you to turn the magnetic grid on and 
off, and to set its spacing. When the grid is switched on, the 
mouse will snap to the nearest grid point when you draw things, 
allowing you to accurately position lines, rectangles, ellipses 
and so on.


Text Menu
---------

	Font Size:
The Font Size function selects the size in which the current font 
will be drawn. It will also tell you what the current font is, 
just in case you forget. When Desktop Paint first boots, the 
current font is the first one in the Font menu and the current 
size is the smallest size that font is available in.

	Left, Centre and Right:
These functions set the direction that text will be drawn. 

As an aside, American users can modify this menu to read "Center" 
rather than "Centre" by including the file AMERTEXT.RES in the 
DTP.RES file. See the section on modifying DTP.RES for more 
information.

Font Menu
---------

The Font menu will only appear if DTP.RES is present and if there 
are some fonts in it. Desktop Paint comes with three fonts 
initially, these being Swiss, Dutch and Courier. Swiss 
corresponds to ITC Helvetica and Dutch corresponds to Times 
Roman. Courier looks like typewriter type. Various sizes of Swiss 
and Dutch are available.

Selecting a font from the Font menu will make it the current text 
font when you next use the text tool. A check mark will appear 
next to the name of the current font in the font menu.


THE TOOLBOX
___________

The toolbox will appear at the left side of your screen when you 
have opened or created a drawing file. The currently active tool 
will be inverted. You can select a new tool by clicking on it.

	Selector (the scissors):
The Selector tool allows you to select areas of your drawing. 
Selected areas can be transformed using the tools in the Edit 
menu.

You can move a selected area by placing the mouse cursor in it, 
holding down the left button and dragging it to its new location.

If you hold down the left shift key while you select an area, the 
original image below the selected area will be left behind, and a 
copy made to appear in the selected box. If you do not, the image 
below the selected area will be filled with white.

You can cause a selected area to become a permanent part of your 
drawing by clicking outside it. The selection box will go away. 
This is called "deselecting".

Normally, selected areas are opaque, that is, white areas will 
obscure and black areas beneath them. If you hold down the 
control key while you drag, transform or deselect a selected 
area, the selected image will become transparent. Any black 
pixels below it will remain visible.

On EGA and VGA systems there is a limit to the size of the area 
you can select... a box will appear to complain if you attempt to 
select an area which is too large. This is a BGI problem... 
they're explained below.

If you paste an image fragment into your drawing, it will appear 
in the upper left corner of your drawing window and behave as if 
it had been selected with the left shift key held down.

	Airbrush (ozone friendly spray paint):
The Airbrush tool will allow you to spray random areas of black 
pixels in your drawing window. The longer you leave the mouse in 
one place and held down, the blacker the area will become.

	Text (the big T tool):
The Text tool will allow you to draw text in your picture using 
the currently selected font, font size and direction. The text 
will emanate from wherever you click in the drawing window. A 
vertical text cursor will indicate where the next character will 
appear.

If you hit Enter when you are typing text, the cursor will move 
down a line.

You cannot draw text if part of the text would appear outside the 
drawing window. 

Text is always drawn black... at least, it is in this version of 
the software.

	Line:
The Line tool allows you to draw lines. The thickness and the 
colour of the lines is set by the Set Line function in the 
Gadgets menu. As there is no sense in drawing a line with no 
thickness, the line thickness will default to a thin line if you 
have it set to no thickness.

You can constrain lines to be perfectly horizontal, vertical or 
diagonal by holding down the left shift, right shift or alt key 
respectively.

	Eraser (the pencil end):
The Eraser tool allows you to erase areas of your drawing. If you 
erase with the left button of your mouse the eraser will be 
small. If you erase with the right button it will be large. The 
eraser always erases to white.

	Rectangle:
	Filled Rectangle:
The Rectangle tool draws rectangles... seems pretty obvious, 
doesn't it... Rectangles will be drawn in the current line 
drawing colour and thickness and will be filled with the current 
fill pattern if you've selected the filled rectangle tool.

You can constrain rectangles to be perfect squares by holding 
down the Alt key.

	Fill (paint roller):
The Fill tool performs a "flood" or "bucket" fill using the 
currently selected fill pattern. It works whether you have the 
fill function for rectangles and ellipses turned on or off. 
Having selected the fill tool, click in a solid black or white 
area of your drawing. It will be filled with the current pattern.

The fill tool likes to fill closed areas. If the area you attempt 
to fill has a hole in its periphery, the paint will leak out and 
fill the area outside it, too. The Undo tool is very useful when 
you're using the Fill tool.

If you attempt to fill an extremely complex area, it's just 
possible that Desktop Paint will run out of fill memory. It will 
say so with a complaint box. In this case, simply click in the 
unfilled area to continue filling.

	Ellipse:	
	Filled Ellipse:
The ellipse tool draws ellipses. In fact, due to a limitation in 
the BGI driver, as detailed later in this file, you'll see a 
rectangle as you draw the ellipse and an ellipse only after you 
release the mouse button. Ellipses will be drawn in the current 
line drawing colour and thickness and will be filled with the 
current fill pattern if you've selected the filled ellipse tool. 
However, due to another BGI limitation, you can't draw filled 
ellipses with no line around them.

You can constrain ellipses to be perfect circles by holding 
down the Alt key.

	Undo:
The Undo tool will undo the last thing you did and then select 
whatever tool you were using before you selected undo. Changes to 
your drawing cease to be undo-able after you save the drawing, 
scroll the drawing or draw something else.

	Brush (the paintbrush):
The Brush tool allows you to draw freeform lines in the currently 
selected line colour.

	Zoom (the magnifying glass):
The Zoom tool allows you to zoom in on a section of your drawing 
and make pixel by pixel changes to it. When the zoom window is 
open, clicking in the enlarged area will set pixels to black and 
white... the left mouse button sets them to black and the right 
one to white. If you select Ok, the modified area will be pasted 
into your picture.

You can Undo zoomed changes if you don't like them after you've 
closed the Zoom box.

	Gradient:
The Gradient tool draws rectangles which will be filled with a 
graduated grey tone, the details of which are defined in the Set 
Gradient function of the Gadgets menu. The area will be 
surrounded by a line as defined in the Set Line function of the 
Gadgets menu. You can have a no thickness line if you like. If 
you hold down the control key while you draw a gradient, it will 
be transparent.

On EGA and VGA systems there is a limit to the size you can draw 
a gradient. Desktop Paint will complain if you exceed it.

Gradients are useful for giving areas a three dimensional 
appearance.


CONFIGURING DESKTOP PAINT
_________________________

You should find that Desktop Paint will run without any need to 
configure it. However, you can fine tune it for your needs with 
the DTPINSTL.EXE program once you've had an initial play with it.

The DTPINSTL program must reside in the same subdirectory as 
DTP.EXE. To run it type

DTPINSTL

A screen like this one will appear.

   Desktop Paint installer version 2.1                     RUN TIME DEFAULTS

            Default file type: PC Paintbrush
      MacPaint file extension: MAC
       GEM/IMG file extension: IMG
           PCX file extension: PCX
          TIFF file extension: TIF
           WPG file extension: WPG
       Pattern file extension: PTN
                   EMS memory: EMS
     EMS overhead (kilobytes): 64
              Default printer: PostScript 100 DPI
             MacBinary header: ON
            Default New width: 640
            Default New depth: 480
                    Drive map: ABCDEFGH
              Path to DTP.RES:
            Registration name: [ Unregistered ]
          Registration number: 00000

You can change the values in any field by cursoring down to it 
and hitting Enter.

Here's a quick overview of what the fields in the installer do.

	Default file type: 
This line sets the default file type which Desktop Paint will 
initially use to open and save files with.

	MacPaint file extension: 
	GEM/IMG file extension: 
        PCX file extension: 
        TIFF file extension: 
        WPG file extension: 
These lines allow you to change the file extensions with which 
Desktop Paint will look for each of its image file types.

	Pattern file extension: 
This line will allow you to change the extension under which 
Desktop Paint saves and loads fill pattern blocks.

	EMS memory: 
Set this line to tell Desktop Paint whether you have EMS memory 
available.

	EMS overhead (kilobytes): 
This line tells Desktop Paint how much free DOS memory to leave 
if it has EMS available. If this value is set to 64... sixty-four 
kilobytes... any picture which would leave less than 64 kilobytes 
of free DOS memory were it to be loaded would instead be loaded 
into EMS. If EMS is not enabled, this value is ignored.

Increase this number if you start running into memory problems in 
Desktop Paint when you're editing large files and you have EMS.

	Default printer: 
This line sets the default printer. Do not set it to "Dot matrix" 
unless you will have a PDRV resource loaded into DTP.RES, as 
described below.

	MacBinary header: 
This line allows you to decide whether or not to have MacBinary 
headers written to MacPaint files which Desktop Paint creates. 
Some programs, such as PFS:First Publisher, require MacPaint 
files without headers. Note that both kinds of MacPaint files 
will be read by Desktop Paint regardless of this setting.

	Default New width: 
This line sets the default width value which appears in the New 
box in Desktop Paint.

	Default New depth: 
This line sets the default depth value which appears in the New 
box in Desktop Paint.

	Drive map: 
This is a string which should contain all the letters of the 
legal hard and floppy drives on your system. It should have no 
spaces or extraneous characters. This string is not checked for 
validity.

	Path to DTP.RES: 
This should be the complete DOS path to the directory where 
DTP.RES will be located on your system. It should include the 
drive letter and a trailing backslash. For example, 

C:\PAINT\

This string is not checked for validity. If you get it wrong, 
DTP.RES will not be loaded when Desktop Paint is run.

With this string set correctly, you can run Desktop Paint from 
anywhere on your hard drive and still have it find its resource 
file.

	Registration name:
	Registration number:
When you register Desktop Paint, we'll send you back a number. 
Enter your name in the registration name field exactly as it was 
when you registered Desktop Paint and your registration number in 
the next field. Upper and lower case matter. This will disable 
the beg notice at the end of Desktop Paint. If your name contains 
characters with accents or other non-English characters, please 
read ACCENT.DOC for instructions for entering them into the 
Registration name field.


COMMAND LINE SWITCHES
_____________________

You can use command line switches when you run Desktop Paint to 
temporarily adjust the settings which DTPINSTL configures. Each 
command line switch is of the form /XXX, a slash and three 
letters. Multiple switches should be separated by spaces.

These are the current command line switches.

/DOS - disable EMS 
/EMS - enable EMS
/MAC - default to MacPaint files
/IMG - default to IMG files
/PCX - default to PCX files
/TIF - default to TIFF files
/WPG - default to WPG files
/MCH - enable MacBinary header
/MCN - disable MacBinary header
/RES - disable loading DTP.RES


FONTS
-----

Assuming that you have fonts installed in DTP.RES, the Font menu 
will appear in Desktop Paint and you'll be able to type text into 
your pictures. Desktop Paint comes with a basic selection of 
fonts, and you can add more to it.

Fonts are large, and a whole family of fonts can easily cause 
DTP.RES to swell by a few hundred kilobytes. 

There is no commercial source of proportional bitmapped fonts for 
PC applications per se. Instead, Desktop Paint allows you to 
utilize fonts from other sources. Specifically, you can convert 
bitmapped fonts from GEM applications such as Ventura Publisher, 
from Microsoft Windows 3 FNT files and from Macintosh FONT and 
NFNT resource files. Once converted, these fonts can be added to 
Desktop Paint.

If you downloaded Desktop Paint from a bulletin board, you'll 
probably be able to find a wealth of suitable fonts there too.

There are three separate programs to do these conversions, 
GEM2FONT, MAC2FONT and WIN2FONT respectively. There is also a 
program called SEEFONT which will allow you to look at samples of 
the fonts you've converted to see what they're like.

The basic Desktop Paint package does not include these tools... 
it's arguably big enough as it stands. Registered users can have 
a disk with these programs on it as well as an assortment of 
additional fonts ready to add to DTP.RES for $10.00 if it's 
ordered when you register, or for $15.00 afterwards. 

The font toolkit also includes the source code and instructions 
to write your own assembly language dot matrix printer driver 
PDRV resource, should you feel like doing so.


MANAGING RESOURCES
__________________

The DTP.RES file is a list of resources. Resources are unrelated 
bits of data and code which Desktop Paint might need. These could 
have been kept as separate files, but keeping them all in DTP.RES 
makes them easier to manage, requires less space on your hard 
drive and allows Desktop Paint to get at them more rapidly.

Desktop Paint looks at DTP.RES when it first boots up... assuming 
that it's there at all. If Desktop Paint can't find DTP.RES, it 
simply doesn't use any of the things it expects to find as 
resources, such as fonts. 

All of the resources which might be in DTP.RES are optional. If 
you don't want to deal with resources or you like Desktop Paint 
as it is, just skip this section.

These are the resource types which Desktop Paint will recognize 
in DTP.RES.
	
	BTMP - bitmapped "sign on" message
	FONT - screen fonts
	MENU - alternate menus
	PTRN - alternate default pattern block
	PDRV - dot matrix printer driver

Some or all of these may be present in DTP.RES, depending on how 
you want to configure Desktop Paint.


Using RMOVER
------------

In order to work with resources you'll need RMOVER.EXE, which is 
included with the package. RMOVER allows you to add resource 
files together, to extract resources from a file, to delete 
resources from a file and to list all the resources in a file.

	Listing resources:
Let's begin with the simplest function of RMOVER, listing the 
resources in a resource file. DTP.RES is a resource file. To see 
what was in it, you would do this.

RMOVER DTP /L

You would see something like the following list for the DTP.RES 
file which comes with the distribution version of Desktop Paint.


Resource mover version 1.0 - copyright (c) 1990 Alchemy Mindworks Inc.
----------------------------------------------------------------------
Description: Extracted resource
33 resource(s)
_____________________
Rsrc 0000 - type:BTMP - number 000000012 - 08004 bytes 
Rsrc 0001 - type:PDRV - number 000000000 - 00348 bytes 
Rsrc 0002 - type:FONT - number 000000000 - 02471 bytes Swiss 8pt #2
Rsrc 0003 - type:FONT - number 000000001 - 02971 bytes Swiss 9pt #2
Rsrc 0004 - type:FONT - number 000000002 - 03535 bytes Swiss 10pt #2
Rsrc 0005 - type:FONT - number 000000003 - 04045 bytes Swiss 11pt #2
Rsrc 0006 - type:FONT - number 000000004 - 04559 bytes Swiss 12pt #2
Rsrc 0007 - type:FONT - number 000000005 - 05897 bytes Swiss 14pt #2
Rsrc 0008 - type:FONT - number 000000006 - 07391 bytes Swiss 16pt #2
Rsrc 0009 - type:FONT - number 000000007 - 09077 bytes Swiss 18pt #2
Rsrc 0010 - type:FONT - number 000000008 - 11135 bytes Swiss 20pt #2
Rsrc 0011 - type:FONT - number 000000009 - 13599 bytes Swiss 22pt #2
Rsrc 0012 - type:FONT - number 000000010 - 15575 bytes Swiss 24pt #2
Rsrc 0013 - type:FONT - number 000000011 - 20891 bytes Swiss 28pt #2
Rsrc 0014 - type:FONT - number 000000012 - 30731 bytes Swiss 36pt #2
Rsrc 0015 - type:FONT - number 000000013 - 01875 bytes Dutch 6pt #14
Rsrc 0016 - type:FONT - number 000000014 - 02519 bytes Dutch 8pt #14
Rsrc 0017 - type:FONT - number 000000015 - 03215 bytes Dutch 9pt #14
Rsrc 0018 - type:FONT - number 000000016 - 03425 bytes Dutch 10pt #14
Rsrc 0019 - type:FONT - number 000000017 - 04113 bytes Dutch 11pt #14
Rsrc 0020 - type:FONT - number 000000018 - 04631 bytes Dutch 12pt #14
Rsrc 0021 - type:FONT - number 000000019 - 06023 bytes Dutch 14pt #14
Rsrc 0022 - type:FONT - number 000000020 - 07815 bytes Dutch 16pt #14
Rsrc 0023 - type:FONT - number 000000021 - 09293 bytes Dutch 18pt #14
Rsrc 0024 - type:FONT - number 000000022 - 11665 bytes Dutch 20pt #14
Rsrc 0025 - type:FONT - number 000000023 - 13939 bytes Dutch 22pt #14
Rsrc 0026 - type:FONT - number 000000024 - 16355 bytes Dutch 24pt #14
Rsrc 0027 - type:FONT - number 000000025 - 21885 bytes Dutch 28pt #14
Rsrc 0028 - type:FONT - number 000000026 - 30735 bytes Dutch 36pt #14
Rsrc 0029 - type:FONT - number 000000027 - 01875 bytes Swiss 6pt #2
Rsrc 0030 - type:FONT - number 000000028 - 03839 bytes Courier 12pt #102
Rsrc 0031 - type:FONT - number 000000029 - 09049 bytes Courier 20pt #102
Rsrc 0032 - type:FONT - number 000000030 - 12425 bytes Courier 24pt #102

	Deleting resources:
This is how you would delete a resource from DTP.RES with RMOVER. 
Let's delete the PDRV resource. This has resource number zero.

RMOVER DTP /D /TPDRV /N0

The /D switch tells RMOVER to delete a resource, /T switch tells 
it the type of the resource to delete and the /N switch tells it 
the number of the resource to delete.

	Extracting resources:
This is how you would extract a resource from DTP.RES, that is, 
to copy it from DTP.RES to a separate resource file of its own. 
Extracted resources live in resource files having one resource. 
You could later add such a resource to another resource file. In 
this example, we'll extract the PDRV resource. Note that this 
will not delete it from DTP.RES.

RMOVER DTP /E /TPDRV /N0 /FEPSNFX80.RES

The /T and /N switches work as before. The /E switch tells RMOVER 
to extract a resource. The /F switch tells it the name of the 
file to put the extracted resource in. This file... 
EPSNFX80.RES... will be deleted if it exists and a new one 
created.

	Adding resources:
This is how you would add a resource to DTP.RES. In this example 
we'll add TEXTURE.PTN to DTP.RES. This is an alternate set of 
pattern blocks which comes with the Desktop Paint package.

RMOVER DTP /A /FTEXTURE.PTN

The /A switch tells RMOVER to add a resource. Note that all the 
resources in the file indicated by the /F switch will be added to 
DTP.RES.	

NOTE: RMOVER can quite easily delete resources you might want to 
keep if you give it erroneous instructions. Keep a backup copy of 
your resource files while you're working with it.


Common Resource Types
---------------------

Here's what each of these resources does and how to work with 
them. 

Make sure as you work with DTP.RES that you keep a copy of the 
original DTP.RES file which comes with Desktop Paint so you can 
start over if you find you've deleted something you might want.

	The BTMP Resource:
Including a BTMP resource in DTP.RES is purely cosmetic. It will 
give you something to look at while the rest of the DTP.RES file 
is being read. 

A BTMP is simply a monochrome bitmapped picture fragment. There's 
one in the default DTP.RES file which comes with Desktop Paint. 
You can change this to one which you create if you like.

The resources in DTP.RES are read in the order they appear in the 
file. If a BTMP resource is located as the file is initially 
read, Desktop Paint will display it in the middle of the screen 
and leave it there while it's reading the rest of the file. For 
the best effect, the BTMP resource should be the first one in 
DTP.RES.

You might well be wondering how to create a BTMP resource. It's 
quite easy. When image fragments are saved to the Gallery in 
Desktop Paint, they're stored as BTMP resources. To make a BTMP 
resource for your DTP.RES file, generate the picture you want in 
Desktop Paint, select it, copy it to the Clipboard, paste the 
Clipboard into the Gallery, quit Desktop Paint and extract the 
last BTMP resource from the Gallery to a separate file.

A less complex way... especially if you have a rather full 
GALLERY.RES file... is to rename GALLERY.RES to something else 
and follow the above procedure. Desktop Paint will create a new 
GALLERY.RES with only one BTMP resource in it. Rename this 
GALLERY.RES to something else and your original Gallery file back 
to GALLERY.RES.

When you add resources to a resource file, they're always added 
to the end of the file. You'll want to have your new BTMP at the 
beginning of the file. To make this happen, begin by deleting the 
existing BTMP resource from DTP.RES. Then, add all of DTP.RES to 
the file with your new BTMP resource in it. Finally, delete 
your old DTP.RES and rename your new file to DTP.RES.

Clear as mud, this. It might take a few tries to get it right.

The BTMP resource you use for a sign-on message should have a 
horizontal dimension which is an even multiple of eight. You can 
handle this easily by using the New function in Desktop Paint to 
create a picture the size you want your sign on image to be... 
320 by 200 pixels is a good size... and then selecting the whole 
drawing when it's completed.

If you want to make Desktop Paint boot as quickly as possible... 
especially on a fairly slow system... you can delete the BTMP 
resource from DTP.RES entirely.


	The FONT Resources:
Each font which will be available in Desktop Paint must have a 
separate resource. Thus, if you have Dutch in seven sizes, there 
will be seven FONT resources for Dutch. A complete discussion of 
fonts is available in FONTS.DOC, which comes with the font 
toolkit discussed above.

Note that Desktop Paint can function without any fonts in DTP.RES 
at all. If you have no need of the text capabilities in Desktop 
Paint and you want it to boot up more rapidly, remove all the 
fonts from DTP.RES.


	The MENU Resources:
You can add MENU resources to DTP.RES to change the names of the 
menu items in Desktop Paint. The AMERTEXT.RES file included with 
Desktop Paint is an example of such a menu. It replaces the Text 
menu in Desktop Paint with one in which the spelling of "Centre" 
is American, that is, "Center". Add AMERTEXT.RES to DTP.RES if 
you want to make this change.

The Desktop Paint package does not come with a resource file 
editor, which is what you would need to create further custom 
menus. Registered users of the software can contact us for more 
information about modifying resources like this if they wish. 


	The PTRN Resource:
If you don't like the default set of fill patterns which comes 
with Desktop Paint, you can replace them with one of your own 
devising by including a PTRN resource in DTP.RES.

To create a PTRN resource, use the edit function of the Fill box 
in Desktop Paint to create the pattern set you want and save it. 
The file you save it to will be a PTRN resource. Add it to 
DTP.RES.

Desktop Paint defaults to using dithered grey level fill 
patterns. However, it comes with a set of more interesting fill 
patterns in TEXTURE.PTN. You can load these in when you want to 
use them, or you can make them the default pattern set by adding 
TEXTURE.PTN to DTP.RES, as discussed previously.


	The PDRV Resource:
If you want to be able to print to a dot matrix printer you'll 
need a PRDV resource in your DTP.RES file. There's one in the 
default DTP.RES to support the Epson FX-80, which is emulated by 
most other dot matrix printers. If you want to drive a printer 
which does not emulate the Epson FX-80, or you wish to use a 
higher resolution mode of a more sophisticated printer, you must 
create a new PDRV resource for your printer, delete the existing 
PRDV resource from DTP.RES and put your PRVR in its place.

A discussion of printer drivers and the creation thereof can be 
found in the Desktop Paint font toolkit, described earlier.


BGI PROBLEMS
____________

Desktop Paint currently uses the Borland BGI graphics drivers to 
do much of the work of managing its user interface and drawing 
pictures. This has resulted in a few problems which are inherent 
in the BGI drivers, and hence beyond us to do anything about. 
They are:

	- You can't draw filled ellipses with a zero line width, 
          as you can filled rectangles.
	- Certain patterns which are mostly white will not fill 
          white areas completely with the paint roller tool.
	- You can't select very large areas of a drawing if 
          you're running Desktop Paint on an EGA or VGA card.
	- There are only two available line widths.
	- Ellipses are drawn as rectangles as you're drawing them, 
          and only appear as ellipses when you're done.

We're looking at either re-writing the BGI drivers a bit or using 
a different graphics package altogether to overcome these bugs 
for the next major release of Desktop Paint.


COMING IN THE NEXT MAJOR RELEASE OF DESKTOP PAINT
_________________________________________________

If you register Desktop Paint you'll be notified of the next 
major release of the software. Among the things we're working on 
are:

	- An improved irregular area selector tool
	- Solving the BGI problems
	- Editable brushes
	- Brush with pattern
	- Text drawn in patterns
	- Text effects
	- Free rotation
	- Polygon tool

We are also most interested in suggestions from registered users.


ROLL YOUR OWN
_____________

This is yet another book plug. If you're interested in writing 
programs which use graphics, you'll find everything you need to 
know in "Bitmapped Graphics", also by Steve Rimmer. It's 
published by TAB books, (TAB book 3558). It features code to pack 
and unpack MacPaint, IMG, PCX, GIF and TIFF files, as well as 
chapters on screen drivers, dithering and printing.

If you would like to write programs with a graphical user 
interface like the one in Desktop Paint, you will find the 
complete user interface code used herein in The PC GUI Book by 
Steve Rimmer, published by TAB Windcrest (TAB book 3875). It will 
be available toward the end of 1991.

If you can't find them locally, contact the bookstore mentioned 
at the beginning of this file. (Don't call them about the GUI 
book until it's actually published, though.)


MORAL DOGMA
___________

If you like this program and find it useful, you are requested to 
support it either by buying the book mentioned at the top of this 
file or by sending us $35.00. We'd rather you bought the book. 
This will entitle you to telephone support, notification of 
updates, a free copy of the latest version of Desktop Paint and 
other good things like that. More to the point, though, it'll 
make you feel noble. We've not infested the program with excessive 
beg notices, crippled it or had it verbally insult you after ten 
days. We trust you to support Desktop Paint if you like it.

Oh yes, should you fail to support this program and continue to 
use it, a leather winged demon of the night will tear itself, 
shrieking blood and fury, from the endless caverns of the nether 
world, hurl itself into the darkness with a thirst for blood on 
its slavering fangs and search the very threads of time for the 
throbbing of your heartbeat. Just thought you'd want to know 
that.

We are
                      Alchemy Mindworks Inc.
                          P.O. Box 500
                         Beeton, Ontario
                             L0G 1A0
                             Canada

Other programs we've done that you might like include:

DESKTOP
   PAINT
      256 - A powerful super-VGA paint program, Desktop Paint 256 
            will let you create and edit pictures stored as PCX, 
            GIF, TIFF and IFF/LBM files. It features a rich
            selection of drawing and image manipulation tools, 
            EMS support to work on large images and a user 
            friendly interface. Looking very much like monochrome 
            Desktop Paint in colour, it's a powerful application 
            which will be equally useful for picture collectors, 
            artists and desktop publishing users... it makes a 
            quick and easy to use editor for grey scale TIFF 
            files, too. Supports Paradise (and compatibles), 
            Headland Video 7 and ATI VGA Wonder cards. Note that 
            you must have one of these super-VGA cards to use 
            Desktop Paint 256... it does not run in the standard 
            320 by 200 pixel "standard" VGA mode.

GRAPHIC
 WORKSHOP - This is the last word in image programs. It converts, 
            prints, views, dithers, transforms, scales and 
            halftones MacPaint, GEM/Ventura IMG, PCX, GIF, TIFF, 
            WPG, MSP, IFF/LBM, BMP and EPS files. It drives CGA, 
            Hercules, EGA, VGA, Paradise, Video 7, Trident, 
            Tseng Labs, Orchid, Hercules Graphics Station and ATI 
            VGA Wonder cards. It features batch processing, 
            extended and expanded memory support, an intuitive 
            user interface and easy to follow menus. It allows 
            you to convert colour image files into superb black 
            and white clip art for desktop publishing, among 
            other things. 

VFM      -  Ventura soft font manager deluxe with a side of fries. 
            Adds new fonts and creates width tables with menu 
            driven simplicity.

GRAFCAT  -  Prints a visual catalog of your image files, with 
            sixteen pictures to a page. Drives all LaserJet and 
            PostScript laser printers, and works with any mixture 
            of GIF, PCX, MacPaint, TIFF, WPG, MSP, IFF/LBM, EPS, 
	    BMP, PIC and IMG files.

CROPGIF   - allows you to crop smaller fragments from your GIF 
            files. Use graphic Workshop, above, to convert other 
            formats into GIF files for cropping. This program 
            uses a simple mouse interface to make cropping image 
            fragments no more complicated than using a paint 
            program Requires a Microsoft compatible mouse.

CINEMA    - Displays a continuous "slide show" of image files. You 
            can set up the images to be displayed using a simple 
            script language. Cinema works with most super VGA 
            cards, using the same drivers as Graphic Workshop, 
            and with CGA, EGA and Hercules cards. It works with 
            any mixture of GIF, PCX, MacPaint, TIFF, WPG, MSP, 
            IFF/LBM, EPS and IMG files.

FI        - File Information... this is a small utility which 
            will examine mystery image files and tell you what 
            they are and some details of what's inside them. 

GIFINFO   - Creates catalog files from your GIF collection, 
            allowing you to store fifty or more miniature full 
            colour representations of GIF files on a single quad 
            floppy.

STORYTELLER -
	    Is a hypertext program with a mouse driven graphical 
            user interface which will allow you to create 
            reports, manuals and interactive fiction, among other 
            things, which has a tree structure. Each page of a 
            storyteller document can lead to related sub-pages, 
            which can in turn have their own sub-sub pages, and 
            so on. It looks slick and is exceedingly user 
            friendly.

If you can't find them in the public domain, they're available 
from us for $35.00 each.


BUNDLING DESKTOP PAINT
______________________

If you'd like to include Desktop Paint with your product, 
please get in touch with us. We have several ways to help you do 
this so your users get the most out of Desktop Paint and we 
don't have to set our leather winged demon of the night on 'em.


SOURCE CODE AVAILABILITY
________________________

It isn't. The source code for the user interface, however, is 
available in the PC GUI Book, mentioned above.


SHAREWARE DISTRIBUTORS
______________________

We are happy to have Desktop Paint distributed by shareware 
distributors provided you distribute a copy which has come 
directly from us and that you don't modify the package in any 
way. 

We will provide a free master copy of the current version of this 
software to those distributors which we feel make a reasonable 
effort to promote the registration of our shareware. Other 
distributors are welcome to distribute the package if they 
purchase a registered copy of it.

If you wish to request a free master copy of this package for 
distribution, please send us a copy of your current catalog and a 
letter requesting a copy on your letterhead. We will not consider 
requests which are not accompanied by a printed catalog.

Sorry... we've been getting deluged with requests.	


REVISION HISTORY
________________

Version 2.1 - Fixed a bug in the clipboard display which caused 
the program to crash in some circumstances. Added double-clicking 
to the file selector.

Version 2.0 - Added drawing support for two-button mice, added 
filled ellipse and rectangle tools, tightened up the zoom mode, 
added smudging.

Version 1.9 - Improved the select / unselect function.

Version 1.8 - Fixed a bug in the selector box.

Version 1.7 - Fixed a minor memory allocation bug in the Select 
Fill dialog box.

Version 1.6 - Added a check mark to the Text menu, fixed several 
memory allocation problems and changed the memory management a 
bit to reduce potential heap fragmentation.

Version 1.5 - Fixed a bug which caused the text cursor to remain 
on the screen after scrolling. 

Version 1.4 - Added a copy count to the Print box, sped up the 
menus a bit, added check marks to the font menu to indicate the 
current font. Added the Fatten command to the Edit menu.

Version 1.3 - Installed a fix which cures a problem with some 
revisions of Everex VGA cards. In former versions they appeared 
to draw the screen in odd colours now and again.

Version 1.2 - Cleaned up a few inconistencies in the menus, fixed 
a problem with the undo function used after two consecutive 
Pastes (it undid both of them) and allowed for foreign language 
characters in the registration field.

Version 1.1 - Added Trace Edges function, fixed a bug which 
caused some Hercules compatible cards to misbehave after running 
Desktop Paint. 

Version 1.0 - Desktop Paint wanders out into the infinite cosmos 
seeking destiny.


LEGAL DOGMA
___________

The author assumes no responsibility for any damage or loss 
caused by the use of these programs, however it comes down. If 
you can think of a way a picture program can cause you damage 
or loss you've a sneakier mind than mine.

All the trademarks used herein are registered to whoever it is 
that owns them. This notification is given in lieu of any 
specific list of trademarks and their owners, which would not be 
as inclusive and would probably take a lot longer to type. 
 
That's it...

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  PC-SIG Disk #2546 DESKTOP PAINT  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print installation instructions type:  COPY README. PRN  (Enter)    ║
║                                                                         ║
║  To print documentation after installing DESKTOP PAINT, type:           ║
║                   COPY DTP.DOC PRN  (press Enter)                       ║
║                                                                         ║
║                                                                         ║
║                                       (c) Copyright 1991, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2546

     Volume in drive A has no label
     Directory of A:\

    DTP21    ZIP    338194   3-06-91  11:39p
    GO       BAT        28  10-04-90   5:21a
    READ     ME        601   3-28-91   9:53a
    ZIPPER   COM     11861   8-11-90   4:16p
    GO       TXT       925   1-01-80   7:51a
            5 file(s)     351609 bytes
                            8192 bytes free
