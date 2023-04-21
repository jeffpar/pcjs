---
layout: page
title: "PC-SIG Diskette Library (Disk #1433)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1433/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1433"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-GRAPHICS C"

    PC GRAPHICS is not just for HP BASIC types who need to port code to the
    IBM-PC.  These software tools provide an intuitive and powerful method
    for graphics programming that makes up for shortcomings in the standard
    Microsoft C library.
    
    PC GRAPHICS is a subset of the library primitives available in
    Hewlett-Packard workstation BASIC.  Here are procedures for
    soft-clipping, scaling, line patterns, pen colors, and text rotation
    that let you write two-dimensional graph plotting programs in Microsoft
    C. The scaling feature is especially useful as it lets you create your
    own scale, removing the need to think in pixels.  The package can also
    be used for simple animation.
    
    PC GRAPHICS is not just for HP BASIC types who need to port code to the
    IBM-PC.  These software tools provide an intuitive and powerful method
    for graphics programming that makes up for shortcomings in the standard
    Microsoft C library.
    
    PC GRAPHICS is a subset of the library primitives available in
    Hewlett-Packard workstation BASIC.  Here are procedures for
    soft-clipping, scaling, line patterns, pen colors, and text rotation
    that let you write two-dimensional graph plotting programs in Microsoft
    C. The scaling feature is especially useful as it lets you create your
    own scale, removing the need to think in pixels.  The package can also
    be used for simple animation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1433.TXT

{% raw %}
```
Disk No: 1433
Disk Title: PC-Graphics C
PC-SIG Version: S1.1

Program Title: PC GRAPHICS C
Author Version: 1
Author Registration: None.
Special Requirements: CGA and Microsoft C, version 5.0.

PC GRAPHICS is not just for HP BASIC types who need to port code to the
IBM-PC.  These software tools provide an intuitive and powerful method
for graphics programming that makes up for shortcomings in the standard
Microsoft C library.

PC GRAPHICS is a subset of the library primitives available in
Hewlett-Packard workstation BASIC.  Here are procedures for
soft-clipping, scaling, line patterns, pen colors, and text rotation
that let you write two-dimensional graph plotting programs in Microsoft
C. The scaling feature is especially useful as it lets you create your
own scale, removing the need to think in pixels.  The package can also
be used for simple animation.
Program Title: PC GRAPHICS C
Author Version: 1
Author Registration: None.
Special Requirements: CGA and Microsoft C, version 5.0.

PC GRAPHICS is not just for HP BASIC types who need to port code to the
IBM-PC.  These software tools provide an intuitive and powerful method
for graphics programming that makes up for shortcomings in the standard
Microsoft C library.

PC GRAPHICS is a subset of the library primitives available in
Hewlett-Packard workstation BASIC.  Here are procedures for
soft-clipping, scaling, line patterns, pen colors, and text rotation
that let you write two-dimensional graph plotting programs in Microsoft
C. The scaling feature is especially useful as it lets you create your
own scale, removing the need to think in pixels.  The package can also
be used for simple animation.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## G_INTRO.TXT

{% raw %}
```


			Introduction

This manual introduces a subset of the powerful graphics 
functions which are part of the BASIC programming language as 
implimented on Hewlett-Packard Series 200/300 Technical 
Computers.  This manual introduces these functions and explains 
their usage.  Also provided are a set of example program which 
illustrate some of the features of these functions.

The functions do not in themselves constitute a complete program.  
Rather, they are used to suppliment a program where graphical 
data is to be presented.  These functions are distinct from the 
functions provided in the Microsoft v. 5.1 C compiler in that 
they scale the screen into units defined by the user.  The 
programmer need not know what the screen size is in pixels to use 
these routines, and, in fact, these routine are designed to make 
a program independent of the hardware and screen mode used.

It should be pointed out that, like all graphical 
representations, these routines perform best with high resolution 
screens.  They will function with any screen resolution 
available, but line resolution improves as screen resolution 
increases.  Thus, for best results, one would normally use the 
highest resolution screen available.



    Why the Hewlett-Packard Workstation BASIC Graphics?

There are three reasons why I chose to impliment this particular 
set of graphics primitives.  First, I was porting some 
applications written in HP workstation BASIC to an IBM PC 
compatible computer.  Since these programs had extensive 
graphical displays and would not be nearly as useful without 
them, it was manditory to develop these graphic primitives.  

Second, it is a well thought out and utilitarian set of 
2-dimensional graphics primitives.  It is well suited to 
presentation of technical information and quite flexible.  The 
functions are intuitive and easily incorporated into the original 
programs, and much of that has carried over into this library.

And lastly, the graphics primitives provided with Microsoft's 
verion 5.1 C compiler are difficult to use.  They require the 
user to keep track of his scaling and units.  Although they can 
do quite a bit, that nagging problem of converting from user 
units to pixels is left to the user.  Add to that the inflexible 
labeling demands of the PC text interface (it is not possible to 
place labels arbitrarily because the text interface is imbedded 
in the graphics modes:  you must label in text rows and columns) 
and the lack of any ability to rotate the text or change font 
size without loading completely new fonts made it obvious that 
ignoring most of Microsoft's and the PC's graphics functions 
would be the best way to proceed.




		    Why Use Graphics?

The use of graphics to display information is unsurpassed in 
intuitive clarity.  Trends and patterns are much more readily 
recognized on a graph than in tabular form.

For example, examine the following lexical data and try to 
visualize the shape of the data:

X          Y

0	 0.09
20	 0.42
40	 0.71
60	 0.91
80	 0.99
100	 0.97
120	 0.82
140	 0.57
160	 0.26
180	-0.09
200	-0.42
220	-0.71
240	-0.91
260	-1.00
280	-0.97
300	-0.82

If this were displayed on a graph, it would be immediately 
obvious that this is a sinusoid.




			Line Drawing

To draw lines, one can simple draw () or plot () the points.  The 
following short program illustrates this.

#include <stdio.h>
#include <math.h>
#include "graph.h"

double x;

main ()
	{
	g_init (EGA_640x350);
	for (x = 0; x < 70; ++x) 
		plot (x, 45 + sin (x/100) + x/10, 1);
	}

This program illustrates the most basic program one can write.  
The call to g_init () initializes the graphics routines and sets 
the screen to graphics mode.  This is always the first function 
called before attempting to plot anything.

The plot () function does exactly what its name implies.  It
draw a line from the last pen position to the current pen
position using the current pen color.  In this case, a pen
control parameter is included.  The value 1 causes the plotting
program to initially move the pen and then drop the pen.  Once
the pen is down, it remains down and the plot is drawn.  The
constant 45 is used to center the y-values.

When the plotting program is initialized, the screen default 
scaling is in Graphics Display Units (GDU's). GDU's have an 
origin in the lower left corner of the CRT and have values from 0 
to 100 for the shorter side of the CRT (usually the y-
direction).  The value for the longer side of the CRT depends on 
the hardware and drawing mode.  This can range from 100 to 150 or 
higher.  In this example, it was assumed that the screen was 100 
GDU's tall and 140 GDU's wide.  Thus, this program will draw a 
sinusoid 2 GDU's tall over 1/2 of the screen.




			Scaling A Plot

If you were to execute this program as it is written, the results 
would be disappointing.  There would be almost nothing to see.  
However, if the Y scale is changed, the variations would become 
much more visible and would better represent the data.

For this problem, we have scaling functions.  These functions 
define values which the computer considers to be the edges of the 
plotting area.  By definition, the left edges is the minimum x-
value and the right edges is the maximum x-value.  Similarly, the 
bottom edges is the minimum y-value and the top edge represents 
the maximum y-value.  Any point plotted within these ranges will 
be visible.  There are three functions which can be used to 
define the edges of the plotting area: show (), scale (), and 
mscale ().

The first function, show (), is an isotropic scaling function.  
This type of scaling is most useful when displaying geometric 
data.  show () forces the physical representation of the x-units 
and y-units to be equal.  If the plotting area is square and one 
uses 

show (0, 100, 10, 30)

to scale that area, the minimum x-value would be zero, the 
maximum x-value would be 100, the minimum y-value would be -30, 
and the maximum y-value would be 70.  The reason for this is that 
the x- and y- units are identical.  The show () function centers  
the specified area in the plotting area and takes whatever extra 
room it requires to make the units equal.  Depending on the shape 
of the plotting area and the scaling values, there will always be 
extra room in either the x- or y-direction, but never both.

Once the show () function has been executed, the plotting area is 
defined in User-Defined Units (UDU's).  If we re-write the 
example program,

#include <stdio.h>
#include <math.h>
#include "graph.h"

double x;

main ()
	{
	g_init (EGA_640x350);
	show (0, 70, -1, 8);
	for (x = 0; x < 70; ++x) 
		plot (x, sin (x/100) + x/10, 1 );
	}

the resulting display would fill the width of the screen, but the 
vertical scaling would remain unacceptable.

To improve the vertical resolution, one must resort to 
anisotropic scaling using the scale () function.  Where the show () 
function forced the scaling to be equal in both directions, 
scale () will not.  Thus, 

#include <stdio.h>
#include <math.h>
#include "graph.h"

double x;

main ()
	{
	g_init (EGA_640x350);
	scale (0, 70, -1, 8);
	for (x = 0; x < 70; ++x) 
		plot (x, sin (x/100) + x/10, 1 );
	}

will display the data over the entire screen.  This is rather 
nice, but there is no room for labeling the drawing.  We can see 
the relative variations the plot, but we have no indication as to 
what units are being used and what the magnitude is.  To 
adequately annotate the plot, we would like to put labels outside 
the plotting area so as to leave a clear view of the data.




		    Defining Viewports

A viewport is a subarea of the plotting area.  The borders of 
the viewport are called the soft clip limits, and the subarea is 
called the soft clip area.  The word clip implies that any line 
which is draw to a point outside this border will be cut off at 
the border (clipped).  They are called soft limits because they 
can be overridden. To better understand this concept, imagine a 
piece of paper with a rectangle drawn on it.  We can draw within 
the rectangle at any time.  We can only draw outside the 
rectangle when permission is granted.  Permission can be granted 
by the clip_off () function, and permission can be denied with 
the clip_on () function.  The edges of the paper represent the 
hard clip limits.  These can not be overridden.  We can also 
change the size of the soft clip limits using the clip () 
function.  The clip function units are in UDU's.

For a given hardclip limit on the CRT, the GDU's are fixed and 
always predictable.  It is for this reason that they are used by 
the locate () function.  One GDU is defined as "One percent of 
the length of the shorter side of the plotting area."  GDU's are 
always isotropic: one GDU in the x-direction is the same size as
one GDU in the y-direction.  However, because of the rectangular
pixels on most PC graphics screens, the number of pixels/GDU
will not be the same in the x-directions as it is in the
y-direction.

At this point, we will define a viewport for our example program.  
At the same time, we will introduce the frame () function.  The 
frame function is used to draw a border around the soft clip 
boundary.  When g_init () is first called, the hard clip and soft 
clip borders are identical.  Hence, calling frame () before a 
viewport is defined will result in a frame about the hard clip 
border.

#include <stdio.h>
#include <math.h>
#include "graph.h"

double x;

main ()
	{
	g_init (EGA_640x350);
	locate (10, 120, 10, 90);
	frame ();
	scale (0, 70, -1, 8);
	for (x = 0; x < 70; ++x) plot (x, sin (x/100) + x/10, 1 );
	}

For this example, we are using a 220 mm x 160 mm screen, so there 
are 138 GDU's in the x-direction, and 100 GDU's in the 
y-direction.  Working backwards, we find that the soft clip limit 
is about 16 mm in from the screen edges on the top, and left 
edge.  It is about 29 mm in from the right edge of the screen.  
If we had wanted a symmetric display, we could have set the right 
edge of the viewport at 128 GDU's.




		    Labeling the Plot

With the definition of a viewport, we now have a border in which 
to label the graph.  Typically, the title is centered at the top 
of the page, the y-axis label is along the left edge, and the 
x-axis label is centered along the bottom.

The labelf () function allows text labels to be place at random 
on the screen.  This function is distinct from printf () or any 
other built-in text generation program.  All of the MS-DOS text 
programs use raster scan fonts which must be placed in rows and 
columns as ordinary ascii text output.  Furthermore, the text is 
all aligned one-way.  It is not possible to rotate the text 
without using a rotated font.

Labels are positioned by moving to the desired starting location 
with the move () function or plot () function.  The lower left 
corner of the label will be at the point to which you moved.  
Thus, to label the graph, 


#include <stdio.h>
#include <math.h>
#include "graph.h"

double x;

main ()
	{
	g_init (EGA_640x350);
	locate (10, 120, 10, 90);
	frame ();
	move (40, 95);
	labelf ("Demonstration Plot");
	move (5, 65);
	labelf ("D\ne\nv\ni\na\nt\ni\no\nn\n"); /* Deviation */
	move (45, 5);
	labelf ("Time (seconds)");
	scale (0, 70, -1, 8);
	for (x = 0; x < 70; ++x) plot (x, sin (x/100) + x/10, 1 );
	}

This program now labels the plot with a title (Demonstration 
Plot), an x-axis label (Time (seconds) ), and the y-axis label 
(Deviation).  The y-axis label is broken with '\n' characters so 
that the label will be placed vertically.  This type of label is 
the only type of label possible without rotated fonts on a PC, 
but the labelf () function is more versitile than this as will be 
shown later.




		   Creative Labeling

In the previous example, we demonstrated one possible method of 
labeling a plot with a vertical label.  This  resulted in 
characters which were "stacked" over each other.  We also placed 
the title only approximately in the center of the viewport, and 
the title was the same size as all of the other characters.  
These simplification were used because we were discussing 
elementary plotting concepts and additional detail would have 
detracted from these basic ideas.

To provide improved labeling, these are three functions which 
modify the performance of the labelf () function.  The first of 
these is csize ( size, a_r, tilt ), and its 3 arguments size, 
a_r, and tilt.  The first argument, size, regulates the size of 
the characters.  The initialization default is 5 GDU's.  The 
size units are always in GDU's.  This is the height of the 
character cell.  The character cell has borders on all sides so 
that they may be drawn side-by-side and top-to-bottom without 
overlapping.  Because all cells are the same size, the amount of 
blank space between characters varies with the characters.  The 
size of a character must always be specified.

The second parameter is the aspect ratio.  This is the measure of 
the width to the height of a character cell.  The characters are 
defined on a 9 x 15 grid: hence, the 0.6 default aspect ratio.  
At 0.6, the characters are well defined and quite pleasing to the 
eye.  The aspect ratio may, of course, be increased or decreased 
to add emphasis to the labels.

The last parameter is the tilt.  This is an angular measure in 
the current angular units (radians or degrees) of how far from 
vertical the vertical axis of the character cells is tilted.  
Positive angles tilt the characters clockwise, and negative 
angles tilt the characters counter-clockwise.  The effect of 
tilting the characters is to italicize them for additional 
emphasis.

To use csize (), simply call the function with the desired 
parameters.  These parameters will remain in effect until csize ()
is called again with different parameters.

Note: the accuracy with which a character is represented and is 
visually appealing depends on the screen resolution.  This means 
that there are pratical limits to how small a character may be 
made for a given screen resolution.  It is therefore recommended 
that you use the highest practical screen resolution consistent 
with your other graphics requirements.

The second function which is useful in labeling is lorg () which 
selects from 9 label origins.  The illustration below shows the 
function of lorg ().

3                        6                                9
   +                     +                              +  
    Test Text        Test Text                Test Text    
                                                           
                                                           
                         5                                 
2  +Test Text        Test+Text                Test Text + 8
                                                           
                                                           
                                                           
    Test Text        Test Text                             
1  +                     +                    Test Text + 7
                         4                                 

The label is "Test Text" and the "+" marks the label origin for 
the various origin codes.  Thus, if we wanted to center the title 
on our graph, we could use

move (65, 95);
lorg (5);
labelf ("Demonstration Plot");

and the label would automatically be centered both vertically and 
horizontally about the point (65, 95).

The last of the label enhancement functions is ldir () which 
controls the direction labels are drawn.  At initialization, the 
label direction is at 0 degrees (text is drawn horizontally).  
This angle can be set to any angle.  Thus, if we say 


ldir (90);

the labels will all be drawn vertically upward.  If we say

ldir (-90);

the labels will still be drawn vertically, but now the labels 
will be drawn vertically downward.  There is complete freedom in 
choosing the angle at which you want a label to be drawn.

Now, if we add all of the above to the example program, we have

#include <stdio.h>
#include <math.h>
#include "graph.h"

double x;

main ()
	{
	double x_gdu_max, y_gdu_max;

	g_init (EGA_640x350);

	/* Determine the screen width and height in GDU's */
	x_gdu_max = 100 * max (1, ratio () );
	y_gdu_max = 100 * max (1, 1 / ratio () );

	locate (10, 120, 10, 90);
	frame ();
	csize (7,0,0);

	/* set the label origin for centered label, top justified */
	lorg (6);
	move (x_gdu_max / 2, y_gdu_max);    /* move to top, middle of crt */

	labelf ("Demonstration Plot");
	move (50, 65);
	lorg (4);
	ldir (90);
	csize (4,0,0);
	labelf ("Deviation"); 
	move (45, 5);
	lorg (6);
	ldir (0);
	labelf ("Time (seconds)");
	scale (0, 70, -1, 8);
	for (x = 0; x < 70; ++x) plot (x, sin (x/100) + x/10, 1 );
	}


we have a plot with an enlarged title and both axes labels well 
centered along their respective axes.  We could have emboldened 
the title slightly be placing the labeling inside a loop which 
draws the title successively slightly to the right or left of the 
starting point.

for (i = 1; i < 5; ++i)
	{
	move (65 + i/10, 95);
	labelf ("Demonstration Plot");
	}

Note that this only emboldens the vertical part of the text, but 
the effect is not lost.

We have also introduced a new function: ratio (). ratio () returns 
the aspect ratio of the screen.  The use of the max () function 
simply selects which direction is defined as 100 GDU's.  If the 
aspect ratio is greater than one, the y-direction will be 100 
GDU's, and the x-direction will be 100 * ratio ().  If the aspect 
ratio is less than one, the x-direction will be 100 GDU's, and 
the y-direction will be 100 / ratio ().  Thus, we can determine 
the shape of the screen without apriori knowledge thereof.


If we add

	clip_off ();
	move (0, -1);
	lorg (8);	/* vertically centered, right justified */
	labelf ("-1");	/* y-min */
	move (0, 8);
	labelf ("8");	/* y-max */
	move (0, -1);
	lorg (6);	/* horizontally centered, top justified */
	labelf ("0");	/* x-min */
	move (70, -1);
	labelf ("70");	/* x-max */

we can place labels at the ends of the coordinate axes.  The
clip_off () function call is necessary if we are to have visible
labels.  This is because the labels are simply a series of
vectors (lines of particular length and direction), and any
portion of a line which lies outside of the soft clip limit will
be cut off when clipping is in effect.  The main title and axes
labels were drawn before the locate () function was called, and
these were within the soft and hard clip limits at
initialization (the screen boundaries).




			Clipping

Clipping is a hidden function for most graphics applications.  It 
is completely "under cover" because it functions without explicitly 
requesting it.  There are two clipping limits: the soft clip 
border and the hard clip border.  The hard clip limit is 
generally an absolute limit determined by the physical size of 
the plotting surface (although the hard clip limits can be 
changed with the limit () function ).  The soft clip border is 
user defined.  Calling the locate () function automatically 
turns on soft clipping at the borders defined by locate ().

The soft clip limits can be set independently of the viewport by 
using the clip () function. Calling 

clip (20, x_max, 10, y_max);

sets only the soft clip border.  The hard clip border is 
unchanged.  After executing this function, any portion of a line 
outside of the x-limits (20 and x_max) or the y-limits (10 and 
y_max) will be truncated at the offending edge.

Note that the clip () function uses only UDU's (user defined 
units).  Thus, it is necessary to call the locate () 
function first to establish a scale for the viewing area.  Also, 
calling locate () after calling clip () will override the 
border set with clip () and set the soft clip limit to the new 
border defined by locate ().

We can disable soft clipping with 

clip_off ();

and turn it back on with

clip_on ();

and soft clipping will resume at the previous soft clip border.  
If we wish to change the soft clip border, we simply use the 
clip () function to specify an new boundary.  The hard clip 
boundary is always on and cannot be disabled.




		     Drawing Modes

When drawing on the CRT or any erasable device, several drawing 
modes are available.  You can select "pens" dependent on the 
graphics mode selected.  In CGA_640x200, there are two colors: 
background and foreground.  In plotter terminology, you select 
pens to determine the color you want to draw.  Pen # 0 is always 
the background color.  For a monochrome drawing, there is only 
one other pen: pen # 1.  In EGA_640x350, the total number of pens 
is 16, or 15 colors plus background.  Here, the maximum pen 
number is 15.

You can also "undraw" lines.  By selecting the negative of the
pen color and drawing over a line, the line is erased.  The IBM
BIOS provides two pixel functions: write and XOR.  Because of
this limitation, it is not possible to erase only the color
which was drawn.  Using the XOR function would do this, but if a
pixel were not illuminated, XOR would make it so.  This would
defeat the intent of erasing a line.  Therefore, selecting a
negative pen number for erasing a line simply turns off all
pixels on the line, irrespective of color, by writing the
background color to those pixels.

Hewlett-Packard impliments pen # 0 in a slightly different manner 
on monochrome CRT's as opposed to color CRT's.  On monochrome 
CRT's, pen # 0 XOR's pixels.  Thus, pen # 0 will write white on a 
black pixel, and black on a white pixel.  

On a color CRT with a color mapped graphics interface, the
default colors are

Pen     Color

0	Black
1	White
2	Red
3	Yellow
4	Green
5	Cyan
6	Blue
7	Magenta
8	Black
9	Olive Green
10	Aqua
11	Royal BLue
12	Maroon
13	Brick Red
14	Orange
15	Brown

This is not the same color set used by the PC color map.  On
Hewlett-Packard computers with color mapped displays, it is
possible to change the assigned pen colors.  This is possible
only on IBM PC's with EGA compatible video interfaces (which
contain writable color palettes.  Also, the Hewlett-Packard
graphics interface allows pixels to be selectively erased. 
Thus, a negative pen value will erase only the color values for
that pen.  If you change pens before erasing a line, it is
possible to not erase the line but to merely change its color. 
For this implimentation, any negative pen value will erase a line
of any color.

Line Types

In order to distinguish between different sets of data drawn in
a single graph, it helps to pattern the lines.  To do that, the
function line_type () is used to select from 10 line patterns. 
line_type () takes two parameters.  The first parameter selects
the pattern, and the second selects the repetition length.  The
patterns will be described here.  To see the patterns, run
linedemo.exe .

line type 	description

1		solid
2		dot at endpoint of line
3		lightly dotted
4		headily dotted
5		broken (dashed)
6		broken (long dash) with dot
7		broken (long dash) with short dash
8		broken (long dash) with double dot
9		solid with short tick (1 GDU total length)
10		solid with long tick (2 GDU's total length)

Line types 9 and 10 are implimented slightly differently than in 
Hewlett-Packard workstation BASIC.  Hewlett-Packard places the
ticks at the endpoint of the line segment.  Here, the ticks are
repeated along the length of the line at the repeat rate of the
line.  The ticks are drawn either vertically or horizontally. 
The orientation depends on the angle of the line.  Lines closer
to vertical will have horizontal ticks, and line closer to
horizontal will have vertical ticks.  When these lines are drawn
on the screen, however, the apparent angle at which the change
from hoizontal to vertical ticks occurs will not be at 45
degrees as one would expect.  This is due to the rectangular
pixels of the PC graphics screen.  An extensive discussion of
this is presented under the discription of the function
line_type ().

The second parameter to line_type () is the repetition length.  
At initialization, this is 5 GDU's.  This can be changed at any 
time to any length.  It is up to the user to ensure that the 
pattern is not so compressed that the detail of the pattern is 
lost, or so long that continuity is lost.  Unlike the HP BASIC 
implimentation, the line repetition need not be integer multiples 
of 5 GDU's.

For all line types, the computer keep a record of where it is in 
the pattern.  Thus, the pattern continues from one line segment
to another.  The line can change directions and the pattern will
still be continuous.  To start over (as you may want to do if
you are drawing disconnected lines of the same type, simply call
the line_type () function again with the same parameters and the
pattern will start over.

Relative and Incremental Plotting

Up to now, we have discussed only absolute plotting:  That is, we 
draw and move to specific coordinates.  Relative plotting allows 
drawing relative to some relocatable origin, and incremental 
plotting allows one to draw relative to the last location.  For 
example,

move (50,50);
rdraw (10,10);
rdraw (10,-10);
rdraw (0,0);
rmove (0,-10);

draws a triangle with verticies at (50,50), (60,60), and (60,40).  
We moved to a point (50,50) and then draw relative to that point.  
Any absolute motion function ( i.e., move, draw, or plot) can be 
used to set this origin.  In this example, we have used the rdraw ()
function.  We could also have used the rplot () function if we 
had required pen control.  The last command simply moves the pen 
position to (50,40).

The current relative origin is the last location resulting from 
calling any of the following commands:

axes ()		draw ()		frame ()	g_init ()
grid ()		idraw ()	imove ()	iplot ()
labelf ()	move ()		draw ()		plot ()

Note that the relative origin is unchanged by any relative motion 
functions.

The incremental motion functions (imove, idraw, and iplot) also
change the relative origin.  These also move the relative origin
to the specified point.  To plot the same triangle using
incremental functions,

move (50,50);
idraw (10,10);
idraw (0,-20);
idraw (-10,10);
imove (0,-10);

Here, the reference position changes to the last location. 
idraw (10,10) draws to (60,60), but the reference position now
becomes (60,60).  Thus, to get to the point (60,40), we must
move down by 20 units: hence idraw (0,-20).  We are now at
(60,40).  To get back to (50,50), we move up to and to the left
10, or idraw (-10,10).  We used an imove () to move to (50,40). 
It looks exactly like the rmove () command from the previous
example because the last drawing command moved us back to our
starting point.  If we were not at our starting point, the
commands would not look the same.  Again, we could have used
iplot () if we had required control of the pen state (up or
down).


Rotation and Translation of Drawings

In many types of drawings, a single feature or structure is 
replicated several times at different locations in the drawing.  
We have seen how relative and incremental motion commands can be 
used to plot the same figure at any location.  We can impart 
rotation to lines drawn with these functions by using the pivot ()
and pdir () functions.  Each of these functions take a single 
argument which is the angle of rotation in the current angular 
units (degrees or radians).  The function of these two functions 
is greatly different, however.

The pdir () function specifies a relative plotting angle.  If we 
write

move (10,10);
pdir (0);
iplot (1,0);
pdir (-90);
iplot (1,0);

the first line is drawn horizontally, and the second line is 
drawn vertically down.  This is because we have introduced a 
relative rotation of -90 degrees.  

We now introduced another element of confusion: logical pen
position and physical pen position.  If we assume initialization
values for pivot () and pdir (), the first iplot () moves the
logical and physical pen position to (11,10), and the second 
iplot () move the logical and physical pen position to (11,9).
So far, logical and physical pen position move in lock-step.

The following code fragment illustrates the use of the pivot () 
function:

move (10,10);
pivot (90);
iplot (1,0);

We moved to (10,10) and now, instead of changing the relative 
plotting direction, we will pivot everything about this point.  
Thus, the iplot () function draw a line to (10,11), but it draws 
a line vertically up as if we drew to (11,10).  Now, the logical 
pen position is at (11,10), but the physical pen position is at 
(10,11).  In effect, we have rotated the coordinate axes 90 
degrees about the point (10,10).  We have assumed isotropic 
scaling in this discussion.  If we have anisotropic scaling 
(i.e., we used scale () instead of show () ), the apparent line 
length would stretch or shrink according to the scales of the x- 
and y-axes.

Because pivot works in a logical coordinate system, if we move to 
a new location (such as (5,5) ), pivot () will have the effect of 
pivoting about those points; it will not pivot about the physical 
location of (5,5).

Although the iplot () function was used in this example, pivot 
will affect the direction of all lines drawn except labels, 
grids, and axes.

At initialization, the pivot point is (0,0) and the pivot angle 
is zero.


Miscellaneous Utilities

A graphics dumping utility is also available.  It is called 
dgraph () and can be used to dump entire screens or partial 
screen.  It presently is configured for the EPSON FX-80 and 100 
type of printers.  Unlike the MS-DOS program GRAPHICS.COM or 
GRAPHICS.EXE, this program dumps all graphics at the same 
orientation to the page.  It is somewhat slower than the MS-DOS 
version principly because of the way Microsoft C executes calls 
to the BIOS.


```
{% endraw %}

## GFUNCT.TXT

{% raw %}
```
Header Files

There are two header files used by these programs.  They are 
gr_lib.h and graph.h .  The gr_lib.h file is used to compile the 
code for the graphics routines and the labels.  The file graph.h 
is for use with user programs and defines the screen modes which 
are supported.  It also contains an external declaration for two 
variables: X_mm and Y_mm.  These are the screen sizes of your 
particular system.  If the scaling routines are to work properly, 
these must be set to the particular hardware in use.  For 
example:

extern double X_mm = 220.0, Y_mm = 160.0;	/* screen size in mm */

sets up the routines for a CRT with a graphics area 220 mm wide 
and 160 mm tall.

To find the size of the graphics CRT on your system, run lb_demo 
and measure the size of the frame drawn by this program.  Edit 
the graph.h file definitions for X_mm and Y_mm and substitute 
these numbers for the present values. 



Differences From the Hewlett-Packard Series 200/300 Workstation 
BASIC

One of the major differences is the ability of the HP BASIC to 
default non-existant arguments for functions.  For example,
locate () requires all arguments to be present.  The BASIC 
function LOCATE can have no arguments: it will draw a full screen 
cursor on the screen for you to digitize the missing coordinates.  
To do so in C would require access to the argument count when the 
function is called.

While it is not impossible to access the argument count in a
portable fashion, it is difficult to do so.  The portable
argument count mechanism is aimed at functions which behave like
printf (), and is not targeted to functions whose behavior
changes with different argument counts.  It is also difficult to
convince the compilers to accept function prototyping and yet
permit varying argument counts without generating warnings.

For these reasons, all functions must have a complete list of 
arguments, except for labelf () which functions perfectly with 
the portable argument count mechanisms.  For the remaining 
functions which require all arguments, an optional argument may 
be set to zero.  In this case, the default value is used.  
Functions which accept default values state this in the parameter 
list for the function.



Supported Graphics Modes

The following graphics modes are supported: 

CGA_320x200	1	/* BIOS CGA 320x200, 4 color */
CGA_640x200	2	/* BIOS CGA 640x200 BW */
ATT_640x400	3	/* AT&T 640x400 BW, tiny type */
EGA_320x200	4	/* IBM EGA low-res 320x200, 16 color */
EGA_640x200	5	/* IBM EGA med-res 640x200, 16 color */
EGA_640x350	6	/* IBM EGA high-res 640x350, 16 color */
VGA_640x480	7	/* IBM VGA high-res 640x480, 16 color */
VGA_320x200	8	/* IBM VGA lo-res 320x200, 256 color */

No provisions were made for the Hercules graphics controllers
because no information was available on their programming when
this code was written.  Inclusion of these modes simply requires
linking in the support libraries and setting a flag in the
g_init () routine which would be read by the putdot () function
in graphx.c This function would then alternatively use either
the BIOS interface or the Hercules library when drawing.



Function Summary


clip ( Xmin, Xmax, Ymin, Ymax )

Parameter	Minimum value	Maximum value	Default   Units

Xmin		-1.7E+308	1.7E+308	none	  User
Xmax		-1.7E+308	1.7E+308	none	  User
Ymin		-1.7E+308	1.7E+308	none	  User
Ymax		-1.7E+308	1.7E+308	none	  User

The function clip () defines a soft-clipping window within which 
to plot.  The lower left corner of the window is defined by 
( Xmin, Ymin ), and the upper right corner of the window is 
defined by ( Xmax, Ymax ).  The default soft clip window is set 
by the locate () function.  Calling locate () resets the 
soft clip window to the locate area.  

Note that this function is slightly different than the function 
as implimented in HP workstation BASIC.  First, you must supply 
arguments to the clip () function:  You can not omit the values 
and digitize the corners of the soft clip window.  
_________________________________________________________________


clip_off ()

This function turns off the soft clipping limits and sets the 
clipping window to the hard clip window ( either set by default 
or the limit () function ).
_________________________________________________________________



clip_on ()

This function turns on the soft clipping limits if they were 
turned off by clip_off ().
_________________________________________________________________



csize ( size, aspect_ratio, tilt_angle )

Parameter	Minimum	value	Maximum value	Default		Units

size		 1.7E-308	1.7E+308	5		GDU's
aspect_ratio	 1.7E-308	1.7E+308	0.6
tilt_angle	-1.7E+308	1.7E+308	none		current 
								angle units

Default values for any argument are invoked by a zero (0) for 
that argument.

This function controls the size, aspect ratio, and tilt angle of 
the characters drawn by labelf ().  At initialization, the 
character size is set to 5 GDU's, at an aspect ratio of 0.6.  
There is no tilt.  Note that, although the angle ranges cover the 
full range of type double, there is no point in using angles 
which exceed either +/- 360 degrees or +/- 2 * pi radians.  

A floating point math error will occur for any angle which resolves 
to n * 90 degrees or n * pi/2 radians for any odd values of n.
_________________________________________________________________



deg ();

This function sets the current angle unit to degrees.

Affects: ldir (), pdir (), pivot ().
_________________________________________________________________



draw ( X, Y )

Parameter	Minimum value	Maximum value	Default   Units

X		-1.7E-308	1.7E+308	none	  current
Y		-1.7E-308	1.7E+308	none	  current


This function draws a line from the current position to (X, Y) 
using the current pen color and line type.  If the pen is up, 
this function will lower the pen prior to drawing the line.  The 
pen will remain down after the line is drawn.
_________________________________________________________________



frame ()

Draw a frame around the current clipping window using the current 
pen color and line type.  After the frame is complete, the pen is 
positioned to the lower left corner of the frame and the pen is 
raised.
_________________________________________________________________



gclear ()

gclear () erases the data within the current clipping window.  
The areas outside of this boundary are not affected.  Executing 
the clip_off () function will cause gclear () to clear the 
hard clip window.

Note:  This particular function is very (!!) slow on account of
using the BIOS routines to place the pixels.  This allows machine 
independence without significant software complexity and is very
portable.  If it is not important to clear only the clip window,
execution of g_init () will clear the entire screen, but all
windowing, scaling, pivoting, plotting directions, labeling
information, and current position are lost. 
_________________________________________________________________



g_init ()

This function initializes the graphics function and sets the 
screen mode to graphics.  This function must be called prior to
issuing any call to any function in this library.  g_init ()
sets the following parameters when called:

pen		1
line type	1
csize		4 GDU's
pdir		0 degrees
mode		degrees
ldir		0 degrees
lorg		1
hard clip	full screen
soft clip	full screen
pivot		0 degrees at origin (0,0)
_________________________________________________________________



graphics_off ()

This function will exit from the graphics screen and return to
the alpha screen.  Unfortunately, unlike the Hewlett-Packard
series 200/300 computers, the contents of the screen are erased
by this transition. 
_________________________________________________________________



idraw ( Xinc, Yinc )

Parameter	Minimum value	Maximum value	Default   Units

Xinc		-1.7E-308	1.7E+308	none	  current
Yinc		-1.7E-308	1.7E+308	none	  current


This function draws a line from the current position (Xp, Yp) to 
position (Xp + Xinc, Yp + Yinc) using the current pen color and line
type.  If the pen is up, this function will lower the pen prior
to drawing the line.  The position (Xp, Yp) is then updated to 
the new pen position.  When the line is finished, the pen will 
remain down.
_________________________________________________________________



imove ( Xinc, Yinc )

Parameter	Minimum value	Maximum value	Default   Units

Xinc		-1.7E-308	1.7E+308	none	  current
Yinc		-1.7E-308	1.7E+308	none	  current

Function imove () incrementally moves from the current position
(Xp, Yp) to position (Xp + Xinc, Yp + Yinc).  If the pen was 
down, it is raised before moving.  After moving, (Xp, Yp) will
be updated to the new pen position.
_________________________________________________________________



iplot ( Xinc, Yinc, penc )

Parameter	Minimum value	Maximum value	Default   Units

Xinc		-1.7E-308	1.7E+308	none	  current
Yinc		-1.7E-308	1.7E+308	none	  current
penc		-32768		32767		none	  N/A

iplot () draws incrementally from the last position (Xp, Yp) to 
position (Xp + Xinc, Yp + Yinc).  After moving the position 
(Xp, Yp) is updated to the new pen location.  The pen control 
parameter (penc) is interpreted as follows:

	penc value	Action

	+ Even		move and then raise pen
	- Even		raise pen and then move
	+ Odd		move and then drop pen
	- Odd		drop pen and then move

iplot () is affected by pivot () and pdir ().
_________________________________________________________________



labelf ( "format string" [, optional argument list] );

labelf () functions exactly as printf ().  Imbedded carriage 
returns result in the line starting 1 line below the present 
line.  Labels are positioned by the functions lorg () and ldir
() and the size is governed by csize ().  Care must be used when
imbedding control characters.  In general, no non-printing
characters are counted when label positions are calculated, and
imbedded backspace characters (\b) are ignored.  A label may be
drawn at any postion and angle using any size, aspect ratio, 
and origin using any pen color and line type.  

Note that only line type # 1 will result in smooth and continuous 
characters.

See also lorg (), ldir (), and csize ().

labelf () is not affected by pivot () and pdir () 
transformations.
_________________________________________________________________



ldir ( angle )

ldir () sets the angle at which to draw labels.  The 
specification of the angle may be in degrees or radians as set 
by the most recent deg () or rad () function call.  Positive 
angle are measured counter-clockwise from the positive x-axis.
_________________________________________________________________



limit ( Xmin, Xmax, Ymin, Ymax )

Parameter	Minimum value	Maximum value	Default	   units

Xmin		-1.7E+308	1.7E+308	none	   mm's
Xmax		-1.7E+308	1.7E+308	none	   mm's
Ymin		-1.7E+308	1.7E+308	none	   mm's
Ymax		-1.7E+308	1.7E+308	none	   mm's

The limit () function is used to re-define the hard clip 
boundaries of the screen.  limit () clears any previous pivot () 
data and returns the pivot angle to 0 and the pivot point to the 
lower left corner (origin).  These are the absolute plotting 
limits, and the pen can not be made to move outside of these 
limits under program control.  

limit () does not change scaling parameters to reflect the 
changed drawing area.  One should set the hard clip limits using 
limit () and then define the scaling are (using locate () ) and 
then scale the are using either mscale (), show (), or scale ().
_________________________________________________________________



line_type ( type_no, repeat )

Parameter	Minimum value	Maximum value	Default	   Units

type_no		1		10		none	   N/A
repeat		0		1.7E+308	5	   GDU's

The default value for repeat length is invoked by a value of zero
for this parameter.

The line_type () function is used to select lines for 
differentiating between items in a drawing or graph.  There are 
10 line types described below.  Although the original HP programs 
restricted line pattern repeats to integer multiples of 5 GDU's, 
no such restriction is present in this program.

Line type	description

1		Solid
2		Dot only at endpoint
3		Lightly dotted line
4		Densely dotted line
5		Broken line of one dash
6		Broken line of one dash and one dot
7		Broken line of one long dash and one short dash
8		Broken line of one dash and two dots
9		Solid line with 1 GDU ticks
10		Solid line with 2 GDU ticks

For line types 9 and 10, the ticks are drawn vertically for lines 
within 45 degrees of the x-axis and horizontally for lines drawn 
above 45 degrees from the x-axis.  Because the IBM PC and PC 
compatibles do not generally have square pixels (i.e. pixel 
aspect ratio and physical screen aspect ratio are not identical), 
the apparent angle at which the switch between vertical and 
horizontal ticks will not be 45 degrees.  This occurs because the 
pixel drawing algorithm is based in pixels, and the calculation 
of the starting and ending points of lines is scaled so that the 
visual information is intuitively correct (i.e., a 45 deg. angle 
appears as a 45 degree angle on the screen).  For example, assume 
a PC has a 1.38:1 physical aspect ratio.  In the 640 x 200 
drawing mode, the aspect ratio of the pixels is 3.20:1.  Thus, 
the horizontal pixels are 2.33 times narrower than the vertical 
pixels are tall.  The arctangent of 2.33 is 66.77 degrees.  A 
line at 66.77 degrees (physically) will thus be at the pixel 
ratio of 1:1 or 45 degrees as far as the drawing algorithm is 
concerned.  Lines above this angle will have horizontal ticks 
and lines below this angle will have vertical ticks.

Line patterns are continuous from one line to the next.  THus, if
a move occurs after a particular line is drawn, the next line will
start at the point in the pattern where the last line left
stopped.  To re-start the line drawing pattern, simply call the
line_type () function again with the same parameters as used in the
call which set the current pattern.

_________________________________________________________________



locate ( Xmin, Xmax, Ymin, Ymax )

Parameter	Minimum value	Maximum value	Default	   Units

Xmin		-1.7E+308	1.7E+308	none	   GDU
Xmax		-1.7E+308	1.7E+308	none	   GDU
Ymin		-1.7E+308	1.7E+308	none	   GDU
Ymax		-1.7E+308	1.7E+308	none	   GDU

locate () is used to define the area to be scaled by scale (), 
mscale (), or show ().  The parameters for the locate () 
function are always interpreted as GDU's from the lower left 
corner of the hard clip area (set by limit () ).  The locate () 
function also defines the soft clip limits to be the same as the
locate window.
_________________________________________________________________



lorg ( origin_number )

Parameter	Minimum value	Maximum value	Default	   Units

origin_number	1		9		none


Select an origin for use with labelf ().  The following 
illustrates the origin locations:

 3                  6                 9
   +-----------------+-----------------+
   |                 |                 |
   |                 |                 |
   |  b              |                 |
   |  b              |                 |
   |  b            5 |               8 |
 2 +  b bbbb       oo+oo     x        x+
   |  b     b    o   |   o    x      x |
   |  b      b  o    |    o     x  x   |
   |  b     b    o   |   o     x    x  |
   |  bbbbb        oo|oo     x        x|
   |                 |                 |
   +-----------------+-----------------+
  1                 4                 7


In summary, origins 1, 2, or 3 deliver left justified text.  
Origins 4, 5, or 6 center the text, and origins 8, 9, and 10 
offer right justified text.  Justification is performed relative 
to the current pen position.
_________________________________________________________________



move ( X, Y )

Parameter	Minimum value	Maximum value	Default	  Units

X		1.7E+308	1.7E+308	none	  UDU's
Y		1.7E+308	1.7E+308	none	  UDU's

The move () function raises the pen and moves to the specified 
(X, Y) position.  The pen remains up after a move.

move () is affected by pivot () transformations.
_________________________________________________________________



mscale ( Xmin, Ymin )

Parameter	Minimum value	Maximum value	Default	   Units

Xmin		-1.7E+308	1.7E+308	none	   mm
Ymin		-1.7E+308	1.7E+308	none	   mm

Scale the locate area in millimeters.  The coordinate pair (Xmin, Ymin) 
defines the lower left corner of the locate area.

For this function to work properly, it is necessary for the user 
to provide the correct graphics screen size in the graph.h header 
file.
_________________________________________________________________



pen ( pen_number )

Parameter	Minimum value	Maximum value	Default	   Units

pen_number	-32768		32767		none	   none


This function is used to select the color of the pen for 
plotting.  The default pen after g_init () is pen # 1.  On the 
Hewlett-Packard systems, pen # 1 is white at power up.  On the 
IBM compatible computers, it is not.  Usually, the highest number 
pen is white.  Pen numbers are limited to those defined for a 
particular mode.  Pen numbers in excess of the maximum defined 
for a particular graphics mode are usually drawn in background 
color or not drawn at all.

A negative pen value overwrites in background color (i.e., a
line drawn with pen # 1 and overwritten with pen # -1 will be
erased from the screen).  Because of limitations in the PC 
graphics hardware, any negative pen number erases all pixel 
colors, not just the pixel colors for that pen.  This is because 
the PC graphics adapters do not have a bitwise AND function built 
in.  Instead, they have a bitwise XOR function.  This will erase 
only pixels of the same color as are being drawn, but if no
pixel is present in that color, it will draw one.  This behaviour 
is highly undesireable, and for that reason, a negative pen 
number will erase all line colors by drawing in background color.
_________________________________________________________________



penup ()

penup () lifts the pen from the plotting surface.  On the CRT, 
this stops line drawing.  The pen will remain up until pen 
control is changed by another statement.
_________________________________________________________________



pdir ( angle )

Parameter	Minimum value	Maximum value	Default	   Units

angle		-1.7E+308	1.7E+308	none	   degrees
                                                           or
                                                           radians

pdir () specifies the angle at which the axes are rotated when 
drawing with incrimental or relative plotting functions iplot (),
idraw (), imove (), rplot (), rdraw (), rmove ().  Labels written 
with labelf () are not affected.  The angular units may be 
specified either in degrees or radians.  At g_init (), the units 
is degrees, but this may be changed at any time after g_init () 
by using either deg () to set degrees, or rad () to set radians.

pdir () is affected by pivot ().
_________________________________________________________________



pivot ( angle )

Parameter	Minimum value	Maximum value	Default	   Units

angle		-1.7E+308	1.7E+308	none	   degrees
                                                           or
                                                           radians

The pivot () function is used to rotate the coordinate axes by 
angle around the current (X, Y) location.  This transformation 
applies to all drawn lines except axes (), grid (), and label ().
The current units for angle are used.

If pivot () is invoked a second time, it establishes a new pivot
point using the original coordinate system. It does not pivot 
about the current position in the current coordinate system (which
is pivoted).  This means that the pivoting can be removed at any 
point on the plot by invoking pivot ( 0 ).
_________________________________________________________________



plot ( X, Y, penc )

Parameter	Minimum value	Maximum value	Default	   Units

X		-1.7E-308	1.7E+308	none	  current
Y		-1.7E-308	1.7E+308	none	  current
penc		-32768		32767		none	  N/A

plot () draws from the last position (X, Y) to the specified
position (X, Y).  The type of line drawn is taken from the 
current line type.  The pen control parameter (penc) is
interpreted as follows:

	penc value	Action

	+ Even		move and then raise pen
	- Even		raise pen and then move
	+ Odd		move and then drop pen
	- Odd		drop pen and then move

plot () is affected by pivot ().
_________________________________________________________________



rad ()

This function set the current angle units to radians.

Affects: ldir (), pdir (), pivot ().
_________________________________________________________________



ratio ()

The ratio function returns the aspect ratio of the hard clip area.  
This is normally the full graphics screen unless the size has 
been changed by using limit ().  Because the pixels in IBM PC 
compatibles are not square ( that is, the number of pixels /cm in 
the x-direction is not the same as the number of pixels /cm in 
the y-direction), the number returned by this function may appear 
to be non-sensical.  It is correct, but it reflects the aspect 
ratio if the pixels were square.  This is one of several  
limitations of the program which are hardware related.
_________________________________________________________________



rdraw ( Xr, Yr )

Parameter	Minimum value	Maximum value	Default	   Units

Xr		-1.7E+308	1.7E+308	none	  current
Yr		-1.7E+308	1.7E+308	none	  current

The rdraw () function draws using the last absolute position 
specified as the reference position (Xref, Yref).  A reference position is 
the last position set by one of the following motion or plotting 
functions: move (), draw (), plot (), imove (), idraw (), iplot 
(), label (), axes (), frame (), or grid () .  A line is drawn from 
the last position (X, Y) to the position (Xref + Xr, Yref + Yr).  
The type of line drawn is taken from the current line type.  

rdraw () is affected by pivot () and pdir ().
_________________________________________________________________



rmove ( X, Y )

Parameter	Minimum value	Maximum value	Default	   Units

Xr		-1.7E+308	1.7E+308	none	  current
Yr		-1.7E+308	1.7E+308	none	  current

The rmove () function moves using the last absolute position 
specified as the reference position (Xref, Yref).  A reference position is 
the last position set by one of the following motion or plotting 
functions: move (), draw (), plot (), imove (), idraw (), iplot 
(), label (), axes (), frame (), grid () .  The pen is moved from 
the last position (X, Y) to the position (Xref + Xr, Yref + Yr).  

rmove () is affected by pivot () and pdir ().
_________________________________________________________________



rplot ( X, Y, penc )

Parameter	Minimum value	Maximum value	Default	   Units

Xr		-1.7E-308	1.7E+308	none	  current
Yr		-1.7E-308	1.7E+308	none	  current
penc		-32768		32767		none	  N/A

The rplot () function draws using the last absolute position 
specified as the reference position (Xref, Yref).  A reference position is 
the last position set by one of the following motion or plotting 
functions: move (), draw (), plot (), imove (), idraw (), iplot 
(), label (), axes (), frame (), grid () .  A line is drawn from 
the last position (X, Y) to the position (Xref + Xr, Yref + Yr).  
The type of line drawn is taken from the current line type.  The 
pen control parameter (penc) is interpreted as follows:

	penc value	Action

	+ Even		move and then raise pen
	- Even		raise pen and then move
	+ Odd		move and then drop pen
	- Odd		drop pen and then move

rplot () is affected by pivot () and pdir ().
_________________________________________________________________



show ( Xmin, Xmax, Ymin, Ymax )

Parameter	Minimum value	Maximum value	Default	   Units

Xmin		-1.7E+308	1.7E+308	none	   user
Xmax		-1.7E+308	1.7E+308	none	   user
Ymin		-1.7E+308	1.7E+308	none	   user
Ymax		-1.7E+308	1.7E+308	none	   user

The show () function scales the locate area such that a 
physical representation of 1 unit along either the X- or Y-axis 
has the same physical size (i.e., square objects appear square ).
_________________________________________________________________



setgu ()

This function changes the display units of the drawing from user 
defined units (UDU's) to graphics display units (GDU's). 
_________________________________________________________________



setuu ()

This function changes the display units of the drawing from 
graphics display units (GDU's) to user defined units (UDU's).  The 
user units must have been previously defined using either scale (), 
show (), or mscale ().
_________________________________________________________________



scale ( Xmin, Xmax, Ymin, Ymax )

Parameter	Minimum value	Maximum value	Default	   Units

Xmin		-1.7E+308	1.7E+308	none	   user
Xmax		-1.7E+308	1.7E+308	none	   user
Ymin		-1.7E+308	1.7E+308	none	   user
Ymax		-1.7E+308	1.7E+308	none	   user

The scale () function defines the minimum and maximum user units 
each axis of the area specified by locate ().
_________________________________________________________________


```
{% endraw %}

## README.DOC

{% raw %}
```
This disk contains two program file and two header files which make
up a graphics library which is similar in function the the graphics
primitives available in Hewlett-Packard workstation BASIC.  These 
are two dimensional graphics primitives.  The main files are 

GRAPHX.C	contains the graphics primitives
LABELS.C	contains vectors for stroke drawn labels.
GRAPH.H		header file for application programs
GR_LIB.H	header file for library programs ( GRAPHX.C & LABELS.C)

In addition, there are several demonstration files and one utility
file.  These are

LIN_DEMO.C	demonstrates various line type and repetition lengths
LB_DEMO.C	demonstrates labeling capabilities
PENDEMO.C	demonstrates pen selection for drawing and erasing lines
CHARS.C		draws out the entire character set
BIOPLOT.C	biorythm plotting program
DGRAPH.C	program to selectively dump graphics to Epson 
		RX/FX-80/100 printers

Additional information on the primitives is available in 

GFUNCT.TXT

and an introduction with example programs is available in

G_INTRO.TXT

The sample program BIOPLOT.C is provided to demonstrate some of these 
functions in action.

The above programs are copyright 1988, 1989 by Lantern Systems and 
have been released into the public domain for private use.

These programs are written in Microsoft C 5.1 and will compile correctly
in C 5.0 .  To use these program, compile GRAPHX.C and LABELS.C without
linking the code, i.e.,

cl graphx.c -c
cl labels.c -c

To compile one of the demonstration programs type

cl <program_name.c> graphx labels

and the code will be linked after compilation (cl assumes that graphx and
labels are object modules or library files.  Do not include the .c extension
unless you intend to compile GRAPHX.C and LABELS.C as well).

These programs have been tested and are believed to be bug free to the 
best of my ability to determine.  At present, they have been tested under
the small memory model, only.  If you discover bugs, have suggestions,
or have an interest in a more complete library (which supports interactive
graphics applications and is in development), I may be contacted at


	Robert Becker
	Lantern Systems
	9300 Collegeview Rd., Suite 309
	Bloomington, MN   55437

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1433

     Volume in drive A has no label
     Directory of A:\

    BIOPLOT  C        6349   2-04-89   1:09p
    BIOPLOT  EXE     45030   2-04-89   1:13p
    CHARS    C         453  12-26-88   3:42p
    CHARS    EXE     37170  12-26-88   3:47p
    DGRAPH   C       12079   1-02-89  10:50p
    FILE1433 TXT      1815  12-05-89  12:13p
    GFUNCT   TXT     25936   1-14-89  10:12p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       540   9-25-89   8:22a
    GRAPH    H        1787  12-26-88   3:39p
    GRAPHX   C       45538  12-26-88  10:05a
    GR_LIB   H        1833  12-26-88  10:08a
    G_INTRO  TXT     30712   1-14-89  10:32p
    LABELS   C       15370  11-24-88  11:37a
    LB_DEMO  C        2550  12-26-88   3:39p
    LB_DEMO  EXE     40484  12-26-88   3:46p
    LIN_DEMO C        2454  12-26-88   3:40p
    LIN_DEMO EXE     39734  12-26-88   3:45p
    PENDEMO  C        1312  12-26-88   3:43p
    PENDEMO  EXE     38060  12-26-88   3:47p
    README   DOC      2273   1-02-89  11:05p
           21 file(s)     351517 bytes
                               0 bytes free
