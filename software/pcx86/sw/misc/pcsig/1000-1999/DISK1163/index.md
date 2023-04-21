---
layout: page
title: "PC-SIG Diskette Library (Disk #1163)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1163/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1163"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "3GRAPH"

    You can literally add an extra dimension to your graphics plotting with
    3GRAPH.  This abbreviated shareware version of 3GRAPH lets you plot
    up to 10 data points in a three-dimensional representation through use
    of a spreadsheet-structured interface.
    
    3GRAPH is straightforward in operation, and the accompanying
    documentation is adequate and understandable.  You can import files from
    your ASCII editor or Lotus 1-2-3 version 2.1.  Serious users will
    undoubtedly prefer the commercial version for its expanded 625 data
    point plotting capabilities.
    
    Special note:  the program will work on a CGA system, but only to view
    the graphics on the screen, not print them.
    File Descriptions:
    
    3GRAPH   EXE  Main program file.
    3GRAPH   DOC  Documentation, 6 pp.
    3GRF     EXE  Subprogram used by 3GRAPH.EXE.
    DEMO1    3GR  Demo graph file.
    DEMO2    3GR  Demo graph file.
    DEMO3    ASC  Demo ASCII file.
    DEMO4    WK1  Demo LOTUS 123 worksheet.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 3GRAPH.DOC

{% raw %}
```










                              3GRAPH

                           Version  2.4

                        Shareware  Edition




                          User's Manual




               Copyright (C)1987-1989, 3-D SOFTWARE
                       All Rights Reserved.

            3Graph and 3-D Software are trademarks of:
                           3-D SOFTWARE
                          P.O. Box 43975
                        Tucson, AZ  85733
                          (602)795-0284

                        SHAREWARE NOTICE:
 If you continue using this shareware copy of 3GRAPH Version 2.4
 after trying it,  you are required to register by sending $5 to
 3-D Software.  The full commercial version of 3GRAPH Ver 2.4 is
 available for $15 from 3-D Software.  Use the registration form
 at the end of this manual when sending in your registration fee.

                          DISTRIBUTION:
 If none of the program and its files are altered, this shareware
  copy of 3GRAPH Version 2.4 can be freely distributed on a non-
  commercial basis (at no charge except small disk/media cost).
   Any other type of distribution (including commercial distri-
    bution, or distribution with commercial products) requires
 written permission from 3-D Software, P.O.Box 43975, Tucson, AZ
    85733, USA.  Educational and site licenses are available.




                      Program Requirements:
            IBM PC/XT/AT-PS/2 or compatible computer,
   400-K RAM Available Memory, PC/MS-DOS version 2.1 or higher,
 and either a Monographics Card & Monitor or EGA Card & Monitor.
  Optional printing also requires an Epson-FX-compatible printer
                        connected to LPT1.










          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


                        TABLE OF CONTENTS

Shareware Notice  . . . . . . . . . . . . . . . . . Title Page
Distribution  . . . . . . . . . . . . . . . . . . . Title Page
Program Requirements  . . . . . . . . . . . . . . . Title Page
Program Description . . . . . . . . . . . . . . . . . . . .  3
  Shareware Edition . . . . . . . . . . . . . . . . . . . .  3
  Commercial Edition  . . . . . . . . . . . . . . . . . . .  3
Distribution  . . . . . . . . . . . . . . . . . . . . . . .  3
Getting Started, Installing 3Graph  . . . . . . . . . . . .  3
Getting Started, Using 3Graph Demo Files. . . . . . . . . .  4
  First Menu  . . . . . . . . . . . . . . . . . . . . . . .  4
    Import ASCII Files  . . . . . . . . . . . . . . . . . .  5
    Import .WK1 Files . . . . . . . . . . . . . . . . . . .  5
    Show Raster Slides  . . . . . . . . . . . . . . . . . .  5
    Print 3Graph Manual . . . . . . . . . . . . . . . . . .  5
    Quit Program  . . . . . . . . . . . . . . . . . . . . .  5
3Graph Reference, Data Menu . . . . . . . . . . . . . . . .  7
  Edit a Cell . . . . . . . . . . . . . . . . . . . . . . .  7
  Set Data Range  . . . . . . . . . . . . . . . . . . . . .  7
  Drawing Headings  . . . . . . . . . . . . . . . . . . . .  8
  Transpose Data  . . . . . . . . . . . . . . . . . . . . .  8
  Reverse Rows  . . . . . . . . . . . . . . . . . . . . . .  8
  Reverse Columns . . . . . . . . . . . . . . . . . . . . .  8
  Rotate Up . . . . . . . . . . . . . . . . . . . . . . . .  8
  Rotate Down . . . . . . . . . . . . . . . . . . . . . . .  8
  Rotate Left . . . . . . . . . . . . . . . . . . . . . . .  8
  Rotate Right  . . . . . . . . . . . . . . . . . . . . . .  8
  Scroll Left . . . . . . . . . . . . . . . . . . . . . . .  8
  Scroll Right  . . . . . . . . . . . . . . . . . . . . . .  8
  Graphics Menu . . . . . . . . . . . . . . . . . . . . . .  8
  Quit Program  . . . . . . . . . . . . . . . . . . . . . .  8
3Graph Reference, 3-D Graphics Menu . . . . . . . . . . . .  8
  Note About High/Low Fonts . . . . . . . . . . . . . . . .  8
  set High Font Spacing Gap . . . . . . . . . . . . . . . .  9
  set High Font Scalar  . . . . . . . . . . . . . . . . . .  9
  set Low Font Spacing Gap  . . . . . . . . . . . . . . . .  9
  set Low Font Scalar . . . . . . . . . . . . . . . . . . .  9
  set Ground-Level Base Value . . . . . . . . . . . . . . .  9
  set Top Grid Line Value . . . . . . . . . . . . . . . . .  9
  set Grid Decimal Accuracy . . . . . . . . . . . . . . . .  9
  set Top Grid Line Text Label  . . . . . . . . . . . . . .  9
  set Custom View-Port Dimensions . . . . . . . . . . . . .  9
  set Colors  . . . . . . . . . . . . . . . . . . . . . . .  9
  set Other Plot Settings . . . . . . . . . . . . . . . . .  9
  Retrieve Settings from Disk . . . . . . . . . . . . . . . 10
  Save Program Settings to Disk . . . . . . . . . . . . . . 10
  Plot Graphic on Screen  . . . . . . . . . . . . . . . . . 10
  set Vertical Viewing Angle  . . . . . . . . . . . . . . . 10
  set Horizontal Viewing Angle  . . . . . . . . . . . . . . 10
  Return to Data  . . . . . . . . . . . . . . . . . . . . . 10
3Graph Reference, Drawing Menu  . . . . . . . . . . . . . . 10
  Save as Raster File . . . . . . . . . . . . . . . . . . . 10
  Save as .PCX File . . . . . . . . . . . . . . . . . . . . 10
  Print (Epson-FX)  . . . . . . . . . . . . . . . . . . . . 10
  Color Select Menu . . . . . . . . . . . . . . . . . . . . 10


                             Page 1




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


                  TABLE OF CONTENTS (Continued)
  Graphics Menu . . . . . . . . . . . . . . . . . . . . . . 11
3Graph's Color Selection Menu . . . . . . . . . . . . . . . 11
Importing ASCII Files into 3Graph . . . . . . . . . . . . . 11
3Graph's Slide-Show Feature . . . . . . . . . . . . . . . . 12
Raster File Details for Programmers . . . . . . . . . . . . 12
DBase-III-Plus Compatibility  . . . . . . . . . . . . . . . 12
Shareware File List . . . . . . . . . . . . . . . . . . . . 13
Legal Disclaimer  . . . . . . . . . . . . . . . . . . . . . 13
Trademark Notices . . . . . . . . . . . . . . . . . . . . . 13
3Graph Registration Form  . . . . . . . . . . . . . . . . . 14















































                             Page 2




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE



PROGRAM DESCRIPTION:

3GRAPH is a program that can be used to create 3-dimensional
charts for use in desktop-publishing programs such as Pagemaker
and Ventura.  There are two editions of 3GRAPH Version 2.4:

Shareware Edition:  The shareware edition of 3GRAPH version 2.4
    can import ASCII data files with up to 25 rows and 25 columns
    (up to 625 data points), will plot up to 9 data points, and
    can create three types of 3-D bar graphs.  The shareware
    edition can also be used to create PC-Paintbrush-compatible
    (.PCX) graphs to be imported into programs that read .PCX
    files (such as desktop publishing programs), and can create
    raster files of 3-D graphs for later viewing in 3GRAPH's
    slide-show feature or for manipulation by programs that
    manipulate raster files.

  Commercial Edition:  The commercial edition of 3GRAPH does
    everything the shareware edition does, and can also plot up
    to 625 data points (instead of just 9), can import Lotus
    1-2-3 .WK1 spreadsheet files, and can be used to create
    surface charts.

This User's Manual is part of the shareware edition of 3GRAPH
Version 2.4, and must be distributed with that program.



DISTRIBUTION:

The shareware edition of 3GRAPH Version 2.4 is distributed on a
noncommercial shareware basis (see distribution notices on title
pages of this User's Manual).  The commercial edition of 3GRAPH
Version 2.4 is distributed only by 3-D Software.



GETTING STARTED, INSTALLING 3GRAPH:

We recommend that you copy the program to your hard disk.  To do
that, create a subdirectory called \3GR on the hard disk, and
copy all of the files from the 3GRAPH disk to that subdirectory.
Assuming that the hard disk is drive C: and the 3GRAPH disk is in
drive A:, you would issue these commands at the DOS prompt:

  C:
  MD\3GR
  CD\3GR
  COPY A:*.*

Then you should make sure that the boot-up disk's CONFIG.SYS file
has this line in it:

  FILES=20



                             Page 3




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


Any number greater than 20 after FILES= will also work fine.  To
change the CONFIG.SYS file, use an ASCII editor.  If the root
directory of the boot-up disk does not have a CONFIG.SYS file,
you can copy the CONFIG.SYS file that comes on the 3GRAPH disk.
To do that, with the above-mentioned disk configuration, issue
these commands at the DOS prompt:

  C:
  CD\
  COPY A:CONFIG.SYS

Do that only if you do not already have a CONFIG.SYS file.
If you issue those commands and there already was a CONFIG.SYS
file, it will be overwritten.

Please note that if you change or create the CONFIG.SYS file, you
will need to reboot the computer for the new CONFIG.SYS file to
take effect.

After you have loaded 3GRAPH in hard disk subdirectory called
\3GR, you can include that directory name in the PATH command so
that the 3GRAPH program can be called from other subdirectories.
When 3GRAPH is invoked from a subdirectory other than \3GR,
the program automatically changes the current directory to \3GR
upon program entry, and changes back to the directory you invoked
it from upon exitting 3GRAPH to DOS; therefore, if you call
3GRAPH from a directory other than \3GR and you want to import a
data file into 3GRAPH from that directory, then when you enter
the name of the file you must include a path before the filename
(it can be an absolute or a relative path).  If the data file you
want to import is already in the \3GR subdirectory, then you do
not have to include a path before the file name.



GETTING STARTED, USING 3GRAPH DEMO FILES:

To start the 3GRAPH program, enter 3GRAPH at the DOS prompt.
After a couple of copyright screens, the first program menu with
these choices will appear:

  import ASCII Data File
  import .WK1 Data File
  Show Raster Slides
  Print 3GRAPH Manual
  Quit Program

A highlight bar will appear on one of the choices.  To select a
choice, move the highlight bar to the desired choice and then
press the ENTER key.  There are several ways to move the
highlight bar before you press Enter: by simply pressing the
up- & down-arrow keys; by pressing the first capital letter of a
choice; or by pressing Home and End to go to the top or bottom
choices respectively.

Here are descriptions of this first menu's choices:


                             Page 4




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE



import ASCII Data File -- Invoke this choice when you want to
     read an ASCII file and create 3-D charts of the data in that
     file.  Included on the 3GRAPH disk is a sample ASCII data
     file called DEMO1.ASC.  For information about ASCII file
     format, see the "ASCII Import File Format" section later in
     this manual.

import .WK1 Data File -- Invoke this to read a Lotus 1-2-3
     .WK1 file and create 3-D charts of the data in that
     spreadsheet.  This choice not available in the shareware
     edition of 3GRAPH, but is available in the commercial
     edition.

Show Raster Slides -- Invoke this to view drawings you have saved
     as raster files. Included on the disk is a sample raster
     drawing.

Print 3GRAPH Manual -- This prints the manual you are now
     reading.

Quit Program (ESC) -- This choice, which can also be invoked by
     pressing the ESC key regardless of which choice the
     highlight bar is resting on, takes you out of the 3GRAPH
     program and returns you to DOS.

Now press the letter 'S' to move the highlight bar to the "Show
Raster Slides" choice, and  press ENTER to select that choice.
Then you will be asked to enter the name of a Slide-List file.
We have included a sample Slide-List file called DEMO1, so go
ahead and enter DEMO1.  Then a drawing will appear on the screen.
After viewing the drawing, press any key to remove the drawing
from the screen and exit the program.  That will return you to
DOS, where you can invoke the 3GRAPH program again by entering
3GRAPH at the DOS prompt.

You just viewed a one-slide slide-show.  With 3GRAPH you can
create drawings with different data and settings, save those
drawings as raster files, and then view them consecutively as a
slide-show.  When viewing a slide-show that has more than one
slide, you go from one slide to the next by pressing any key.
The slide-show you just saw only had one slide, but later you
will learn how to create bigger slide-shows.

Now that we are back in the DOS prompt let's invoke the 3GRAPH
program again by entering 3GRAPH at the DOS prompt.  After a
couple of copyright screens, you will again see the first 3GRAPH
menu.  Make sure the highlight bar is on the top choice, "import
ASCII Data File", and press ENTER to select that choice.  Then
you will be asked for a file name.  Included with 3GRAPH is a
sample ASCII data file called DEMO1.ASC.  Enter that file name
now, and the file will be imported and the first three data
columns of the file will be displayed on the screen.  All 25 rows
of the file fit on the screen, and on the top-right side of the
screen are the heading and sub-heading of the data, which in this
case are "Central District Food Store" and "Sales, Thousands of


                             Page 5




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


Dollars."  This is the data that was used in the chart that you
just viewed as a raster slide.

If you want to view other columns, press the left- & right-arrow
keys to scroll the data.  Since all 25 rows fit on the screen,
there is no need to scroll up or down.  To pop up the 3GRAPH
menu, press ENTER or ESC, and to hide the menu after you have
popped it up just press ESC.  Try that now:  press ESC a few
times, and the menu will pop up and then hide again.

Now make sure the menu is popped up.  This is known as the Data
Menu.  Move the highlight bar to "Graphics Menu" and press ENTER
(Tip: the hilight bar scrolls between the top and bottom choices,
so that to get to the "Graphics Menu" choice from the top choice
you can press the up-arrow key twice). Now you will see another
screen, with the 3-D Graphics Menu.  Later you will use this
menu to change the graphics settings, but for now let's just use
the default settings.  Move the highlight bar to "Plot Graphic on
Screen" and press ENTER.  Then the "Select Graph Type" Menu will
appear; select the top choice ("Bars"), and a 3-D chart will be
drawn on the screen.

That chart looks different than the one you viewed in the slide-
show earlier, even though they were both drawn from the same data
file, because the chart you just drew was done with 3GRAPH's
default settings while the earlier chart had been drawn with
custom settings.  The settings can be changed in the 3-D Graphics
Menu and in the Data Menu.  For the rest of this section, let's
go back to those menus and change the settings until we can make
this chart look like the one you viewed earlier.

The first thing you'll notice is that there is only one bar (the
drawing you viewed earlier had 9 bars).  With the drawing on
screen, press any key to pop up the drawing menu.  Select the
bottom choice ("Graphics Menu") to return to the Graphics Menu,
and then when the Graphics Menu appears press ESC (or select the
bottom choice) to return to the Data Menu.  In the Data Menu,
select the "Set Data Range" choice.  Then a dot will appear
to represent each data cell, and the first data cell will be
surrounded by a box indicating that the cell is the only one in
the current data range.  You want to make that box bigger so that
more data cells are in it.  First make sure that the CapsLock key
on your keyboard is not on, then press the right-arrow key twice
and press the down-arrow key twice.  Now the box has 9 data cells
in it.  Press ENTER to save this range and return to the Data
Menu.  In the Data Menu select "Graphics Menu," and in the
Graphics Menu select "Plot Graphic on Screen."  Next the "Select
Graph Type" Menu appears.  Select "Bars" again, and a new drawing
will appear.  This time the drawing has 9 bars.  But it still
looks different.  For one thing, the drawing is wider than the
slide you saw before.  Let's go back now and make the drawing
narrower.

Select "Graphics Menu" in the drawing menu, and in the Graphics
Menu select "set Custom View-Port Dimensions."  With the CapsLock
key OFF press Control-Left-Arrow 17 times (or until the right


                             Page 6




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


border of the view-port is directly below the 'I' of "Inc.").
Then press CapsLock so that CapsLock=ON, and press Control-Right-
Arrow 15 times (or until the left view-port boundary is directly
below the 'e' of "Central").  Now press ENTER to save this new
view-port and return to the Graphics Menu.  We changed the size
of the custom view-port, but we still must specify to the program
that we want to use the custom view-port instead of the default
view-port.  So select "set Other Plot Settings."  A pop-up menu
will appear.  Press down-arrow once to get to the second setting,
which is:

  View-Port (D=Default,C=Custom) [D]

Enter a 'C' between the brackets, and press ENTER.  Now the
Graphics Menu will reappear.  Select "Plot Graphic on Screen" to
draw the chart again.  The chart will now be narrower.

Before we go any further, let's discuss saving the drawing
settings.  If you wanted to save the settings you just entered,
including the data range, view-port size, etc., you would select
the "Save Program Settings to Disk" choice in the 3-D Graphics
Menu.  That would create a file called 3GRAPH.SYS with all the
settings in that file.  Those settings could be retrieved later
with the "Retrieve Settings from Disk" choice.  If a 3GRAPH.SYS
file already exists when you save settings, it is renamed
3GRAPH.BAK.  And if you exit the 3GRAPH program to DOS, and later
run 3GRAPH again, the 3GRAPH.SYS file is not loaded into 3GRAPH
(defaults are used) until you select "Retrieve Settings from
Disk" in the 3-D Graphics Menu.

Included on the 3GRAPH disk is a file called DEMO1.SYS.  This
file contains the program settings that were used to create the
drawing you viewed in the slide-show at the beginning of this
section.  But you cannot retrieve those settings into the 3GRAPH
program because the file is not called 3GRAPH.SYS.  If you do
want to continue experimenting with the demo files, you could
make a copy of the DEMO1.SYS file (make sure the copy is called
3GRAPH.SYS) and read those settings into the 3GRAPH program.



3GRAPH REFERENCE, DATA MENU:

The following are descriptions of the commands in the Data Menu:

Edit a Cell -- This allows you to change the numerical value of
     one of the data cells.  The new value will remain in effect
     until you exit the 3GRAPH program.  Any changes you make to
     the data cannot be saved to disk.  You must make the changes
     in the file before it is imported into 3GRAPH if you want
     the changes to remain in effect after you finish using
     3GRAPH.

Set Data Range -- This allows you to specify the range of cells
     that will be plotted.



                             Page 7




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


Drawing Headings -- This menu choice allows you to change the
     data's heading and sub-heading, and the changes will remain
     in effect until you exit 3GRAPH.  If you want the changes to
     be permanent, you must make the changes in the data file
     before it is imported into 3GRAPH (any changes you make to
     the data while in 3GRAPH cannot be saved to disk).

Transpose Data -- This flips the data, so that the rows become
     the columns and the columns become rows.

Reverse Rows -- This reverses the order of the row: the first row
     becomes the 25th row, the 25th row becomes the first row,
     the 24th row becomes the 2nd row, the 2nd row becomes the
     24th row, etc.

Reverse Columns -- This reverses the order of the columns.

Rotate Up -- This shifts all the rows up one row, and the first
     (top) row becomes the 25th (bottom) row.

Rotate Down -- Rotate the rows down (25th row becomes 1st row).

Rotate Left -- Shift columns left (1st column becomes 25th
     column).

Rotate Right -- Shift columns right (25th col. becomes 1st).

Scroll Left -- Scroll left (can also be accomplished by pressing
     the left-arrow key).

Scroll Right -- Scroll right (also right-arrow key).

Graphics Menu -- Closes the data screen, and puts you in the 3-D
     Graphics Menu.

Quit Program -- Exits the 3GRAPH program (returns you to DOS).
     The program settings will not be saved unless you saved them
     to disk in the 3-D Graphics Menu.



3GRAPH REFERENCE, 3-D GRAPHICS MENU:

A Note about High & Low Fonts: In 3GRAPH terminology, high & low
fonts refer to 3-D fonts.  The High Fonts are used above the
graph's base-line, and are numbers specifying background-grid
values (heights).  These fonts are generally vertical lettering.
The so-called Low Fonts are on the same plane as the graphs base,
and are the data's row/column titles.  For example, in the sample
raster drawing (DEMO1), "20.00" and "100.00" are in the High
Font, and "Grocery" and "Feb" are written in the Low Font.

set High Font Spacing Gap -- This numerical value determines how
     much spacing is inserted between characters.  A lower value
     means less spacing, a higher value more spacing.



                             Page 8




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


set High Font Scalar -- This numerical value determines the size
     of each letter.  For example if this value is 2.0, then each
     letter will be twice as high and twice as wide as normal; a
     value of 0.5 means each letter will be half as wide and half
     as tall as normal (the default value is 1.0).

set Low Font Spacing Gap -- This value determines how much
     spacing is inserted between characters.

set Low Font Scalar -- This value determines size of each letter.

set Ground-Level Base Value -- The default is zero.  That means
     that the base of your bar chart represents zero, and
     positive data points will be plotted upward, negative data
     downward.  Non-zero values can also be specified.

set Top Grid Line Value -- This number must be specified if you
     select to have a background-grid drawn.  This number is the
     value of the highest grid-line value.  For example, if the
     tallest bar represents a data point with a value of 200, and
     you specify a Top-Grid-Line-Value of 100, then the highest
     bar will be twice as high as the top of the background-grid.

set Grid Decimal Accuracy -- Specifies decimal-point accuracy for
     background-grid labels.  Zero for this value means that a
     decimal point is not used.

set Top Grid Line Text Label -- All of the grid labels are
     numbers, and besides being a number the top grid label can
     also have a character string appended to it.  The
     Top-Grid-Line-Text- Label is the character string that is
     appended to to the top grid label.  Two commonly used
     Top-Grid-Line-Text-Labels are ",000" and " THOUS."  Notice
     that " THOUS." has a leading space to separate it from the
     numerical value it is appended to.  ",000" looks like a
     number, and since it has no leading space is appended
     directly to the numerical value and looks like it is part of
     the number.

set Custom View-Port Dimensions -- Allows you to shrink or expand
     the drawing region.

set Colors -- This invokes the color selection menu.

set Other Plot Settings -- Besides the settings we have just
     discussed in this section, there is a series of settings
     that require only one character to define each setting.
     This menu choice invokes a pop-up menu that allows you to
     change those settings.  Here is a list of those settings,
     with their default values:

                   Print Row/Col Titles [Y]
         View-Port (D=Default,C=Custom) [D]
        Display Heading and Sub-Heading [Y]
                 Horizontal Grid Lines? [N]
                   Number of Grid Lines [5]


                             Page 9




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


     Grid Titles (Left,Right,Both,None) [N]
     Top Grid Dotted-Line Across Front? [N]

Retrieve Settings From Disk -- Retrieves settings that were saved
     to disk.  The settings are in a file called 3GRAPH.SYS, and
     are not retrieved into 3GRAPH until you select this command.

Save Program Settings to Disk -- This saves the program settings
     to disk in a file called 3GRAPH.SYS.  If another 3GRAPH.SYS
     file already existed, it is renamed to 3GRAPH.BAK.

Plot Graphic on Screen --  First asks what type of chart you want
     drawn, then using the graphics settings draws the chart on
     the screen.  While the chart is being drawn on the screen,
     you can press ESC to cancel the drawing.  When the chart is
     fully drawn, you can press any key to pop up the drawing
     menu (which is described in the next section of this
     manual).

set Vertical Viewing Angle -- Sets the drawing's vertical viewing
     angle.

set Horizontal Viewing Angle -- Sets the drawing's horizontal
     viewing angle.

Return to Data (ESC) -- Closes the 3-D Graphics Menu and returns
     you to the Data screen.



3GRAPH REFERENCE, DRAWING MENU:

Save as Raster File -- Saves the drawing as a raster file.  The
     raster file can later be viewed in 3GRAPH's slide-show
     feature (described later in this manual).  Raster files are
     strictly black & white.  Line and background colors are
     translated as follows:  black becomes black, any-other-color
     becomes white (for example, blue lines will be saved as
     white lines).  However, color fills are not translated, and
     must already be either black, white, or one of the several
     black & white fill patterns that are shown in the color
     selection menu.  A positive benefit of raster files is that
     they can be displayed on monochrome systems even if they
     were created on color systems, and vice versa.

Save as .PCX File -- Saves the drawing in PC-Paintbrush format.
     The resulting .PCX file can then be read by PC-Paintbrush or
     by programs that can read PC-Paintbrush files, such as
     Pagemaker and Ventura.

Print (Epson-FX) -- Prints the drawing on an Epson-FX-compatible
     printer (the printer must be connected to LPT1, the first
     parallel port).

Color Select Menu -- This invokes the color selection menu, and
     redraws the drawing when you exit the color selection menu.


                             Page 10




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE



Graphics Menu -- This returns you to the 3-D Graphics Menu.



3GRAPH'S COLOR SELECTION MENU:

The Color Selection Menu is invoked from the 3-D Graphics Menu
and from the drawing menu.  It lets you select colors for each of
these:

  Background
  Lines
  Heading
  Sub-Heading
  High-Left Titles
  High-Right Titles
  Low-Left Titles
  Low-Right Titles
  Surface Fill
  Positive-Bar Fill
  Negative-Bar Fill

Positive bars can be a different color than negative bars, but
you cannot specify a different color for each individual bar.  If
you think 3GRAPH should allow you to specify a different color
for each bar, or different colors for different sets of bars in
one graph, then let us know in your comments.



IMPORTING ASCII FILES INTO 3GRAPH:

ASCII files are just plain text files, without any special
characters, and can be created with line editors and
word-processors (in "non-document mode").

These syntax rules apply to ASCII files that are to be imported
into 3GRAPH:

  - Maximum line width = 999 characters.
  - All titles and figures must be separated by at least 2
     consecutive blanks. Titles may have embedded blanks, but not
     consecutive ones. Consecutive blanks always signify a
     separation between data items.
  - Blank lines are ignored.
  - Dashes, line and graphics characters not allowed.
  - The first non-blank line in the ASCII text file must
     contain the chart's main heading.
  - The second non-blank line contains the sub-heading.
  - The third non-blank line contains all the column titles.
  - The remaining non-blank lines each contain a row title
     followed by data cells (numbers).





                             Page 11




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


3GRAPH'S SLIDE-SHOW FEATURE:

As mentioned above, you can save drawings as raster files, and
later you can replay a sequence of drawings as a kind of on-
screen slide show.  To create a slide show you will need to
create a separate file with an ASCII editor:  that file is called
a slide-list file, and each nonblank line in the file must
contain the name of a raster file.  After you have created the
slide-list file, invoke the 3GRAPH program by entering 3GRAPH at
the DOS prompt.  After a couple of copyright screens, the first
3GRAPH menu appears.  Select "Show Raster Slides."  Then you will
be asked to enter the name of the slide-list file:  if the file
is in a different subdirectory than the 3GRAPH files are in, then
you must specify a path for the file name.  If the slide-list
file is in the same directory as the 3GRAPH program files are in,
then you can specify the file name without a path.

When a slide is fully drawn, you can either press the ESC key, or
press any other key.  If you press ESC, you will be asked if you
want to terminate the slide-show.  If you answer no, or if you
did not press ESC (but had pressed another key), then the next
slide will be drawn.

In future 3GRAPH versions, the slide-show feature will be a
separate program.  And we are thinking of allowing users to
include .PCX files in the slide-lists.  If you think it's a good
idea to have .PCX files in slide shows, then mention that in your
comments to us.



RASTER FILE DETAILS FOR PROGRAMMERS:

Raster files store 2-color images that are 640 pixels wide and
348 pixels high.  Assuming that the top-left corner of the image
is x=0,y=0, and the bottom-right corner of the image is
x=639,y=347, then the first byte in a raster file contains the
first 8 horizontal pixels of the image (specifically, the high-
order bit is pixel x=0,y=0, and the low-order bit is x=7,y=0).
The next byte contains pixels x=8,y=0 through x=15,y=0, and so
forth.  The 27840th byte contains pixels x=632,y=347 through
x=639,y=347.  With this knowledge of 3GRAPH raster file format,
you can write programs that create raster files which can be
displayed with 3GRAPH's slide-show feature, and you can write
programs to manipulate raster files that are created with 3GRAPH.



DBASE-III-PLUS COMPATIBILITY

This version of 3GRAPH does not import dBase files.  If you think
that importing dBase files is important, let us know in your
comments.





                             Page 12




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


3GRAPH FILE LIST:

The following files are included on the 3GRAPH Version 2.4
Shareware Edition Disk:

     3GRAPH.EXE -- The 3Graph Program
     3GRAPH.DOC -- This User's Manual
      3GRV1.EXE -- Subprogram used by 3GRAPH.EXE
      DEMO1.ASC -- Demo ASCII File
      DEMO1.SYS -- Demo Program Settings
      DEMO1     -- Demo Slide-List File
       MONO.FNT -- Font File
        SBO.FNT -- Font File

If all of these files are not on the Shareware Disk, contact 3-D
Software.



LEGAL DISCLAIMER:

3-D SOFTWARE is not responsible for results of use or misuse of
3GRAPH.



TRADEMARK NOTICES:

3GRAPH and 3-D SOFTWARE are trademarks of 3-D Software. IBM
PC/XT/AT-PS/2 and PC-DOS are trademarks of International Business
Machines. MS-DOS is a trademark of Microsoft. Lotus 1-2-3 is a
trademark of Lotus Development.  Epson is a trademark of Epson.
PC-Paintbrush is a trademark of Z-Soft.  Pagemaker is a trademark
of Aldus.  Ventura is a trademark of Xerox.
























                             Page 13




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE



                       3GRAPH  Version 2.4

                        Registration Form



I want to continue using 3GRAPH
Version 2.4 Shareware Edition . . . . . . . . . . . . . . $  5.00

I would rather use
the Commercial Edition
of 3GRAPH Version 2.4.      quantity     price each
Send it to me on:
5.25-inch disks . . . . . _______   X   $ 15.00  =   $_________

3.5-in. disks . . . . . . _______   X   $ 15.00 =    $_________


                                             SubTotal $__________

                   Arizona Customers Add 7% Sales Tax $__________


                                          TOTAL  $_______________

Make Check or Money Order Payable in U.S. Funds to:
3-D Software, P.O.Box 43975, Tucson, AZ 85733, USA.

Your Name:_______________________________________________________

Address:_________________________________________________________

_________________________________________________________________

_________________________________________________________________

Telephone:______________________________

Type of Computer:________________________________________________

Type of Video:   _______Mono/Herc    _______EGA    _______VGA

                 _______Other(specify:)_________________________














                             Page 14




          3GRAPH(tm) v2.4 (C)1987-1989 by 3-D SOFTWARE


COMMENTS:

Please send any comments you have about this program to:

3-D Software
P.O. Box 53975
Tucson, AZ  85733

Use additional pages if necessary.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1163

     Volume in drive A has no label
     Directory of A:\

    3GRAPH   DOC     34660   6-12-89  12:00p
    3GRAPH   EXE    266806   6-12-89  12:00p
    3GRAPH   SYS       129   6-12-89  12:00p
    3GRV1    EXE     14666   6-12-89  12:00p
    DEMO1               19   6-12-89  12:00p
    DEMO1    ASC      2445   6-12-89  12:00p
    DEMO1    RST     27840   6-12-89  12:00p
    DEMO1    SYS       129   6-12-89  12:00p
    GO       BAT        38   7-12-89   1:51p
    MONO     FNT      1629   6-12-89  12:00p
    README             781   6-12-89  12:00p
    SBO      FNT      4669   6-12-89  12:00p
           12 file(s)     353811 bytes
                            1024 bytes free
