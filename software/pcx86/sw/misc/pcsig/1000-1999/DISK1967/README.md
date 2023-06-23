---
layout: page
title: "PC-SIG Diskette Library (Disk #1967)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1967/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1967"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZGRAF"

    An easy color graphing tool for quickly creating informative
    presentations.  Pull-down menus speed up the generation of several
    different kinds of graphs and charts.
    
    The program implements a "quick-and-dirty" approach to graph
    construction.  It is simple to use and supports the popular graphics
    display modes, MCGA through VGA.
    
    Create and display X/Y, bar and pie graphs, as well as graphs of
    functions of a single variable.  Generate several different types of
    graphs, with user-definable colors, titles, labels, and other features.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1967.TXT

{% raw %}
```
Disk No: 1967                                                           
Disk Title: ZGRAF                                                       
PC-SIG Version: S2.5                                                    
                                                                        
Program Title: ZGraf                                                    
Author Version: 3.2                                                     
Author Registration: $5.00                                              
Special Requirements: None.                                             
                                                                        
An easy color graphing tool for quickly creating informative            
presentations.  Pull-down menus speed up the generation of several      
different kinds of graphs and charts.                                   
                                                                        
The program implements a "quick-and-dirty" approach to graph            
construction.  It is simple to use and supports the popular graphics    
display modes, MCGA through VGA.                                        
                                                                        
Create and display X/Y, bar and pie graphs, as well as graphs of        
functions of a single variable.  Generate several different types of    
graphs, with user-definable colors, titles, labels, and other features. 
                                                                        
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
║                     <<<<  Disk #1967  ZGRAF  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation and instructions, type:                          ║
║                     COPY ZGRAF.DOC PRN (press Enter)                    ║
║                                                                         ║
║ To start program, type:  ZGRAF (press Enter)                            ║
║                                                                         ║
║ To execute the DEMO, type:  DEMO (press Enter)                          ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## ZGRAF.DOC

{% raw %}
```



	Though he was in the form of God, he did not deem equality
	with God, something to be grasped at, but emptied himself
	and took the form of a slave, being born in the likeness of
	all (Phil 2:6ff).


____________________________________________________________________________

		   USER-INSTRUCTIONS FOR "ZGRAF" PROGRAM
____________________________________________________________________________




				CONTENTS



	 I.  INTRODUCTION


	II.  SETTING UP


       III.  COMMAND-LINE SWITCH OPTIONS


       IV.   CONSTRUCTING GRAPHS


		A.  F(X) Graphs


		B.  G(X,Y) Graphs


		C.  Discrete X/Y Graphs


		D.  Log Graphs


		E.  Bar Graphs


		F.  Pie Graphs


	 V.  PRINTING GRAPHS


	VI.  MISCELLANEOUS


       VII.  FILES INCLUDED ON DISK


      VIII.  REGISTRATION









 I.  INTRODUCTION

	This program is designed to allow the user to create, display,
	and print X/Y, Log, Bar, and Pie graphs, as well as graphs of
	functions of a single variable [Y = F(X)], and functions of
	two variables [Z = G(X,Y)].

	The program implements a "quick-and-dirty" approach to graph
	construction, and may lack a few of the niceties that other
	professional packages offer.  However, the program should be
	simple to use, and practically all popular graphics display modes
	(CGA through VGA) are supported.



 II.  SETTING UP


	To start the program, type "zgraf" (see command-line switch options,
	next section).   A menu should appear on the screen.  Before using
	the program, you may want to adjust the screen/menu colors to your
	liking, and you	may want to specify the system's graphics
	capabilities (i.e., the graphics mode and resolution that you plan
	to use for displaying graphs).  To do this, go to the "Options" menu
	heading, at the top, far right of the screen.

	Menu and Screen colors may be changed by selecting "Menu/screen
	colors"	and then pressing the desired key (A-L) to change the color
	of the desired section of the menu screen.  By repeatedly cycling
	through	color combinations, it should be possible to arrive at a
	satisfactory set of colors for screen display on any type of monitor
	[Note that the colors selected here apply only to immediate screen
	colors, and not to graph colors.  Graph colors may be set at the
	time of graph construction.  Alernatively, graph colors and settings
	may be set using the "Graph default params." sub-menu.  Some
	experimentation may be required in order to determine appropriate
	values for each of the graph color settings, so you may want to
	postpone choosing default graph colors until you have tried making a
	few graphs...]

	Specifying your system's graphics capability requires that you make
	appropriate selections under both the "Driver type" and the
	"Video mode/resolution" sub-menus (which are also both under the
	main "Options" menu heading).   These menus should be self-
	explanatory.   If, for example,	you plan to use a Color Graphics
	Adapter to display graphs in 640 x 200 resolution, you would select
	"CGA" under the "Driver type" sub-menu, and "CGAHI (640 x 200)"
	under the "Video mode/resolution" sub-menu.

	Once you have selected suitable Screen Colors, Graph Colors, and an
	appropriate graphics driver and mode/resolution combination, you
	may save these settings by selecting the "Save Configuration" option.
	If this is done, the next time the program is run, the menu will
	appear in previously selected screen colors, and the graphs will be
	constructed using previously specified colors and graphics settings.











	Note that you are not limited to using a single graphics driver/
	mode/res. combination.   It is possible to "override" the "default"
	settings to create graphs in a new mode/resolution, at any time.

	For instance, if you have an EGA system and have selected the default
	"CGA" and "CGAHI" settings as given in the example above, you can
	first view a graph in this "CGA" mode, and then select new "EGA"
	settings for the graphics mode/res. and driver--and immediately re-
	view the same graph in an "EGA" mode.  Further, if you select
	"AUTODETECT" under the "Driver type" Menu, the system will
	automatically select the "highest" graphics display mode/driver
	available for use on your system. . .



 III.  COMMAND-LINE SWITCH OPTIONS


	The following switches may be specified on the command-line:

	      /ROM --  (ROM-BIOS video)  The default pgm. operating
		       mode is to use direct hardware video writes; if your
		       system will not support "direct-video" access, but is
		       "ROM-BIOS" compatible, use this switch--i.e., type
		       "zgraf /ROM" at the command-line to run the program.
		       The program will still run, albeit somewhat slower.
		       (the "/ROM" switch may also be used for "demo.exe").



 IV.  CONSTRUCTING GRAPHS


	Instead of giving detailed directions for constructing individual
	graphs, a brief description of each type of graph is given, and
	an example of constructing a graph of each category is demonstrated.
	The directions should become fairly intuitive after working through
	just the few examples listed here. . .


	A.  F(X) Graph


	     Description:  Graphs a function F(X), for X in the range
			   (initial value, final value), using a specified
			   number of intermediate data points [n], where
			   3 <= [n] <= 200.

		Notes:     For most graphs, choosing a value of [n] between
			   75 and 100 provides adequate "resolution"; larger
			   values of [n] require longer graph calculation
			   times.  Automatic graph scaling is performed
			   to correspond with the minimum and maximum y-
			   values over the range (xmin,xmax).

			   Up to 130 characters may be entered for the










			   function F(X).  The function is evaluated in
			   double-precision format.  Most standard math
			   functions are allowed; see Section VI, below,
			   for a complete list of legal functions.


		Example:   Graph  F(X) = sin(X)/X, for  X >= -20  and
			   X <= 20, using [n] = 75 data points.

			   1.  Select "Enter function F(X)", and
			       type in "sin(X)/X".  Notice that
			       a capital "X" is used for the variable.

			   2.  Select "Initial X-value", and enter
			       "-20.0".  Notice that a floating-pt.
			       value was entered.

			   3.  Select "Final X-value", and enter
			       "20.0".  Again, notice that a floating-pt.
			       number was entered.

			   4.  Select "Number of data points", and enter
			       "75".  This corresponds to the number of
			       intermediate function evaluations to be
			       carried out by the program within the interval
			       (-20,20).

			   5.  Select "Title", and enter "Graph of sin(X)/X"
			       as the Main Title.		.

			   6.  Select "Generate graph".  After a second or
			       two of calculation time, the graph should
			       appear on the screen...

			       Note:  Now, to experiment (or to make things
				      look better if the graph is now
				      displayed in colors that are difficult
				      to see) try entering variou s numbers
				      under the "Axis color", "Plot color",
				      and "Background color" categories, and
				      selecting "Generate graph" again to
				      re-view the graph.  The "Screen grid
				      toggle" can be used to switch a grid
				      of dots for the graph on or off.  You
				      can continue trying different settings
				      and re-generating the graph as many
				      times as necessary to obtain a pleasing
				      display.  Once suitable settings for
				      Axis, Plot, and Background colors
				      are found, you can save these values
				      as default colors, using the "Options"
				      menu, "Graph default params." sub-
				      heading.

	B.  G(X,Y) Graph

	     Description:  Graphs a function Z = G(X,Y), for X, Y, and Z in
			   the range (Xmin, Xmax), (Ymin, Ymax), and
			   (Zmin, Zmax), respectively.







		Notes:     Since no automatic scaling is performed, values
			   for the min and max values should be selected
			   to "include" the range of values which will
			   be generated.  For example, if your function
			   is G(X,Y) = sin( 0.05 * sqrt(X*X + Y*Y) ), with
			   -100.0 <= X <= 100.0, and -100.0 <= Y <= 100.0
			   (as in the example below), one could select the
			   values (Zmin, Zmax) as (-1.0, 1.0), so that all
			   points of the sine-function will be included
			   and displayed.

			   Again, up to 130 characters may be entered for
			   the function G(X,Y).  The function is evaluated
			   in double-precision format; see list of math-
			   functions that are supported in Sect. VI, below.

			   Since G(X,Y) "surface plots" require many lines
			   to be drawn, it may take a minute or two for the
			   program to draw a complete graph--please be
			   patient.  You can abort the graph construction
			   process at any time while the graph is being
			   created by pressing [Esc]--this may save you some
			   time if you do make a mistake...



		Example:   Graph  G(X,Y) = sin( 0.05* sqrt(X*X + Y*Y) ),
			   for X in the range (-100,100), and Y in the range
			   (-100,100).

			   1.  Select "Enter function G(X,Y)", and
			       type in "sin( 0.05 * sqrt(X*X + Y*Y) ).

			   2.  Select "Data variable ranges", then
			       under the sub-menu enter the values
			       -100.0 for Xmin, 100.0 for Xmax, -100.0 for
			       Ymin, and 100.0 for Ymax, respectively.
			       Notice that floating-point values are used.

			   3.  Enter -1.0 and 1.0 for Zmin and Zmax,
			       respectively.  Press [Esc] to return to
			       main G(X,Y) menu.

			   4.  Select "Title", and enter "Surface Plot of
			       a Sinusoid" as the main title.

			   5.  Select "Generate G(X,Y) graph" to create
			       the graph (when completed, this graph
			       should look like a hat (or a "bundt-cake
			       pan").

			       Again, you can try entering various numbers
			       under the "Axis color", "Plot color", and
			       "Background color" categories, and then re-
			       draw the graph.  The "Screen Frame Toggle"
			       can be used to switch the "wire-frame" outline
			       for the graph on or off.









			       Note:  For the current version of the program,
				      the "wire-frame" grid is drawn only in
				      the (320 x 320) and (640 x 200) video
				      modes (CGA through VGA); also the
				      "hidden-line" removal algorithm seems
				      to work best in these modes.  For the
				      nicest-looking graph, it is recommended
				      that you do not exceed (640 x 200) res-
				      olution for this particular graph--but
				      the plot is drawn (without the "wire-
				      frame") in all video modes if you're
				      absolutely bound and determined. . .


	C.  Discrete X/Y Graph


	     Description:  Graphs up to 200 (x,y) data-points (total) taken
			   from a data-file, displaying a user-defined symbol
			   at each data point.   By using different symbols,
			   multiple "groups" of data may be displayed on a
			   single X/Y graph grid.


		Notes:	   Each (x,y) coordinate must be entered on its own
			   line in the data-file, in floating-pt. format
			   (anywhere on the line, but with at least one
			   space separating the x- and y-coordinates).  The
			   symbol to be displayed must be a single character,
			   and must follow the y-coordinate anywhere on the
			   line.  Each "group" of data should have a unique
			   symbol associated with it.

			   If connecting lines are to be drawn between
			   adjacent data-points (connecting lines can be
			   added/removed by the "Connecting-line toggle" menu
			   selection), it is important to list the data-
			   points in the file sequentially--in the order
			   the data is to be plotted, as in the example
			   below. . .


		Example:   It is desired to display two groups of (x,y)
			   data on a graph, and to plot the first group
			   of data using plus-sign (+) symbols, and the
			   second group using "oh" (o) symbols.

			   The first group of data is:  (0,10), (2.5,10),
			   (5,10), (7.5,10), (10,10), (12.5,7.5), (15,5),
			   (17.5,2.5), (20,0), (22.5,2.5), (25,5),
			   (27.5,7.5), (30,10), (32.5,10), (35,10),
			   (37.5,10), and (40,10).

			   The second group is:  (0,20), (2.5,25), (5,30),
			   (7.5,35), (10,40), (12.5,35), (15,30), (17.5,25),
			   (20,20), (22.5,25), (25,30), (27.5,35), (30,40),
			   (32.5,35), (35,30), (37.5,25), and (40,20).









			   1.  Create the data-file.  Use an editor to edit
			       a file "xy.dat", so that it looks like this
			       (notice that floating-pt. values are used
			       throughout):


   This is the first line of file ->	0.0   10.0   +
					2.5   10.0   +
					5.0   10.0   +
					7.5   10.0   +
					10.0  10.0   +
					12.5  7.5    +
					15.0  5.0    +
					17.5  2.5    +
   This is the first   	         ->	20.0  0.0    +
   group of data-points, which   ->	22.5  2.5    +
   will be displayed using       ->	25.0  5.0    +
   plus-signs (+)	         ->	27.5  7.5    +
					30.0  10.0   +
					32.5  10.0   +
					35.0  10.0   +
					37.5  10.0   +
					40.0  10.0   +
   Blank line(s) to separate
   data-groups (ignored by pgm.) ->

					0.0   20.0   o
					2.5   25.0   o
					5.0   30.0   o
					7.5   35.0   o
					10.0  40.0   o
   This is the second group      ->	12.5  35.0   o
   of data-points, which will    ->	15.0  30.0   o
   be displayed using oh's (o)   ->	17.5  25.0   o
					20.0  20.0   o
					22.5  25.0   o
					25.0  30.0   o
					27.5  35.0   o
					30.0  40.0   o
					32.5  35.0   o
					35.0  30.0   o
					37.5  25.0   o
   This is the last line of file ->	40.0  20.0   o


			       When done editing, save the file, and
			       run the "zgraf" program.

			   2.  Under the "Discrete X/Y" top heading, select
			       "Load data file".  When prompted for the
			       name of the data-file, type "xy.dat".  The
			       program should indicate that 34 data-points
			       were "loaded".

			   3.  Select "Generate graph" to draw the graph.
			       Again, you may want to enter a title, and
			       experiment with Axis/Plot/Background color
			       options to obtain a more pleasing graph...








	D.  Log Graphs

	     Description:  Graphs up to 200 (x,y) data-points (total) taken
			   from a data-file, in a similar format to that
			   used in the Discrete X/Y graphs discussed earlier,
			   but on a logarithmic-type grid.

	     Notes:	   (See Discrete X/Y Graph for description of
			   data-file formats).

			   Three types of logarithmic graphs can be
			   constructed:

					(1) Linear X, Log Y
					(2) Linear Y, Log X
					(3) Log X, Log Y

			   For the log scales, it is required that:

					(1) All data coordinates be > 0.0.

					(2) The ratio of largest to smallest
					    coordinates in the graph must
					    not exceed 100,000.

					    Example:  Given the data-points:

						      (1.0, 1.0),
						      (2.0, 100.0),
						      (3.0, 1000.0),
						      (4.0, 1000000.0)

					    one could create a log-log graph
					    using only the first 3 data-
					    points, because if the 4th data-
					    point were included, the y-
					    coordinate ratio would be:

						  10^6 / 1.0 = 10^6,

					    which exceeds the maximum
					    allowable ratio (10^5).


		Example:   Display two groups of data on a log-log graph,
			   and plot the first group of data using plus-sign
			   (+) symbols, and the second group using "oh" (o)
			   symbols.

			   The first group of data is:  (1,8), (10,80),
			   (100,800), and (1000,8000).

			   The second group is:  (50,50), (500,500),
			   (5000,5000), and (50000,50000).












			   1.  Create the data-file.  Use an editor to edit
			       a file "log.dat", so that it looks like this
			       (notice that floating-pt. values are used
			       throughout):

					1.0      8.0      +
					10.0     80.0     +
					100.0    800.0    +
					1000.0   8000.0   +

					50.0     50.0     o
					500.0    500.0    o
					5000.0   5000.0   o
					50000.0  50000.0  o

			       When done editing, save the file, and
			       run the "zgraf" program.

			   2.  Under the "Log Graph" top heading, select
			       "Load data file".  When prompted for the
			       name of the data-file, type "log.dat".  The
			       program should indicate that 8 data-points
			       were "loaded".

			   3.  Under the "Format of log graph" item,
			       select "3" for Log-Log graph

			   4.  Select "Generate graph" to draw the graph.
			       Again, you may want to enter a title, and
			       experiment with Axis/Plot/Background color
			       options to obtain a more pleasing graph...



	E.  Bar Graphs


	     Description:  Allows the user to make a bar graph, of up to
			   3 sets of bars.

		Notes:	   The maximum number of bars in the graph must
			   not exceed 30.  The number of bars is calculated
			   from the formula:

			      (# Bars, Total)  =  (# Bars/Set)  *  (# Sets).

			   As an example, the program could handle 3 sets
			   of bars, 10 bars/set (30 bars total), but not 2
			   sets of bars, 16 bars/set (32 bars total).


			   Graph Options:   2-D or 3-D bars can be drawn;
					    fill-color and pattern can be
					    selected.












		Example:   Create a 3-D Bargraph entitled "Average Rainfall
			   (in.), Jan-May", for 3 cities as follows:

			   Chicago:
			     Jan.: 18, Feb.: 22, Mar.: 30, Apr: 40, May: 35.
			   New York:
			     Jan.: 22, Feb.: 33, Mar.: 20, Apr: 11, May: 20.
			   Seattle:
			     Jan.: 58, Feb.: 72, Mar.: 40, Apr: 35, May: 25.


			   1.  Select "Number of bar groups", and enter
			       "3"; select "Bars/group" and enter "5".

			   2.  Select "Enter data" and enter the fifteen
			       quantities in floating-pt. format, i.e.,
			       "18.0 [Enter]  22.0 [Enter]  30.0 [Enter]
			       40.0 [Enter]  35.0 [Enter]  22.0 [Enter]
			       33.0 [Enter]  20.0 [Enter] 11.0 [Enter]
			       20.0 [Enter]  58.0 [Enter]  72.0 [Enter]
			       40.0 [Enter]  35.0 [Enter], and 25.0 [Enter].

			   3.  Select "Item titles" and enter the five
			       bar-titles, i.e., "Jan. [Enter]  Feb. [Enter]
			       Mar. [Enter]  Apr. [Enter]  May [Enter]".

			   4.  Select "Legend titles", and type in "Chicago",
			       "New York", and "Seattle".

			   5.  Select "Title", then "Main Title", then enter
			       "Average Rainfall (in.), Jan-May".

			   6.  Select "3-D Bars".

			   7.  Select "Generate bargraph" to draw the graph.

			   8.  To experiment, you may want to try selecting
			       different bar colors and bar fill-patterns,
			       and re-generating the graph.


	F.  Pie Graphs


	     Description:  Allows the user to make a pie graph.

		Notes:	   Max. Number of Slices in Pie:  10.

			   Options:   Single- or Multi-color pies can
				      be drawn.


		Example:   Create a Multi-colored Pie Graph entitled
			   "Grain Sales, by Percent" with the following
			   data:  Wheat: 30, Corn: 25, Soybeans: 20,
			   Rice: 10, Other.: 15.










			   1.  Select "Number of slices" and enter "5".

			   2   Select "Enter data" and enter the five
			       percentages in floating-pt. format, i.e.,
			       "30.0 [Enter]  25.0 [Enter]  20.0 [Enter]
			       10.0 [Enter]  15.0 [Enter]".

			   3.  Select "Multi-color pie" (Pie will be
			       displayed in different colors if the
			       current graphics driver type & mode/res.
			       settings support multiple colors).

			   4.  Select "Title" and enter "Grain Sales by
			       Percent" as the main title.

			   5.  Select "Item titles" and enter the five
			       item-descriptions, i.e., "Wheat [Enter]
			       Corn [Enter]  Soybeans [Enter]  Rice [Enter]
			       Other [Enter]".

			   6.  Select "Generate piegraph" to construct the
			       graph.


			   Notes:  Aspect Ratio Adjustment

				  Some monitors may display an "oblong" or
				  not-quite-round-looking pie in some
				  graphics modes; you can make the pie look
				  more "round" by adjusting the Aspect ratio
				  (the height to width ratio) of displayed
				  pixels on the screen.  In this program,
				  the aspect ratio may be set to any
				  (floating-pt.) value between 0.1 and 10.0,
				  where smaller numbers tend to expand the
				  pie in the up-and-down direction, and
				  larger numbers expand it in a side-to-side
				  direction.  If a value outside the
				  (0.1,10.0) range (e.g., 0.0) is chosen,
				  the program will try to automatically
				  determine an appropriate aspect ratio.
				  The automatic aspect-ratio selection
				  (i.e., using 0.0 for the aspect ratio)
				  often (but not always) produces a nice,
				  round pie.  Some experimentation may be
				  required to obtain an ideal setting in
				  your environment...



  V.  PRINTING GRAPHS

	If you have a dot-matrix or equivalent printer, graphs may be
	printed by pressing [Prt Sc] when a graph is displayed on-screen.
	Using this "print-screen" command requires that you run the DOS
	"graphics.com" program prior to running the "ZGRAF" program.










	If you are unfamiliar with "graphics.com", please refer to your
	DOS manual; the following example may also help. . .


	Example:  Create and Print a Bar Graph

		(1)  From the DOS command line, type "GRAPHICS" [Enter]
		     (Here we'll use the default "graphics.com" settings;
		     you'll need to specify the full pathname if
		     "graphics.com" is in another directory, e.g.,
		     "C:\DOS\GRAPHICS").

		(2)  From DOS, type "ZGRAF" [Enter], and create the bar
		     graph given in Sect. IV, part E.

		(3)  When the graph is displayed on-screen, press
		     [Prt Sc] to print the graph.

	Note:  Only screens in the modes supported by "graphics.com" can be
	printed [i.e., only screens in the 320 x 200 and 640 x 200 (CGA)
	modes are printable under MS-DOS versions 3.X and lower].




  VI.   MISCELLANEOUS


	A.  Math Functions

	     The following are legal math functions for this program:

		  ABS()   -- absolute value
		  ACOS()  -- arc cosine
		  ASIN()  -- arc sine
		  ATAN()  -- arc tangent
		  COSH()  -- hyperbolic cosine
		  COS()   -- cosine
		  EXP()   -- e (= 2.7182) raised to the () power
		  LOG10() -- common logarithm (base 10)
		  LOG()   -- natral logarithm (base e)
		  POW10() -- ten raised to the () power
		  SINH()  -- hyperbolic sine
		  SIN()	  -- sine
		  SQRT()  -- square root
		  SQR()	  -- square, i.e., () raised to 2nd power
		  TANH()  -- hyperbolic tangent
		  TAN()	  -- tangent

	     These functions may be used in either the F(X) and G(X,Y)
	     expressions, or with the Desktop Calculator (described below) to
	     represent the standard mathematical functions, in double
	     precision.












	B.  Calculator Mode

		  Algebraic expressions may be evaluated using the built-in
		  calculator, under the "Options" menu (can also be accessed
		  with the [Alt C] hotkey).  All math-functions listed above
		  are supported.  Up to 65 characters per line are allowed.
		  To exit the calculator mode and return to the main menu,
		  press [Esc].


		  Example:   Calculate exp( sin(2.0) ).

		       1.  Select "Calculator" under the "Options" menu.
			   Under "Expression:" type in "exp(sin(2.0))",
			   and press [Enter].

		       2.  The answer, 2.482578, should appear below the
			   "Result:" line.


	C.  Saving/Restoring Graphics Images

		If you have a graph displayed on-screen that you would like
		to "capture" and save in a file for later recall and review,
		here's how to do it:

			(1)  Specify the file name that you wish to save
			     the graphics image in--you can either select
			     "Options", "Image load/save", then "Graphics
			     Image File Name", or just use the [Ctrl I]
			     hotkey to bring up the same prompt.  If no name
			     is specified, the image file name will default
			     to "ZGRAF.GRF".

			(2)  Create the graph you wish to save (see Section
			     IV, Graph Construction for instructions, if
			     necessary).  When the graph is displayed to your
			     liking, press [Ctrl S] to save the image.  If
			     sound is enabled, you should hear a tone, and
			     when the disk I/O activity completes, a message
			     should inform you that the graphics image was
			     saved. . .

			(3)  To restore this image (or any image saved to a
			     file), just specify the file name of the image
			     file you wish to restore, as in (1) above (if
			     the current image file name is not already
			     correct), then select "Options", "Image load/
			     save", and "Restore Graphics Image".  Altern-
			     atively, you may use the hotkey [Ctrl R] to
			     accomplish the same function.  The stored
			     image should be redrawn on the screen. . .

		My apologies for the extremely slow speed of the graphics
		save/restore operations.  A more efficient, hi-speed
		algorithm is being sought, and should be available in future
		versions of this program...










	D.  Hotkeys

		The following hotkeys are in effect for this program,
		and may be used to speed-up moving about the menus:

		     [Alt F] = Go to F(X) Graph Menu
		     [Alt G] = Go to G(X,Y) Graph Menu
		     [Alt D] = Go to Discrete X/Y Graph Menu
		     [Alt L] = Go to Log Graph Menu
		     [Alt B] = Go to Bar Graph Menu
		     [Alt P] = Go to Pie Graph Menu
		     [Alt O] = Go to Options Menu

		     [Alt C]  = Calculator Mode
		     [Alt H]  = Display Help
		     [Ctrl I] = Enter Image File Name
		     [Ctrl R] = Restore Graphics Image
		     [Ctrl S] = Save Graphics Image (For Graphics Modes Only)
		     [Alt T]  = Toggle Sound On/Off
		     [Alt V]  = View File	
		     [Alt X]  = Exit Program



  VII.  FILES INCLUDED ON DISK


	The following files are part of this package:

	ZGRAF.EXE	- Main Executable Program
	ZDEFAULT.DAT	- Config. File (default colors/graphics settings)
	ZGRAF.DOC	- User Instructions (this file)
	XY.DAT		- Sample data-file for Discrete X/Y graph
	LOG.DAT		- Sample data-file for Log graph
	DEMO.EXE  	- Demo Program



  VIII.  REGISTRATION


	If you have any comments or suggestions regarding this program,
	please feel free to contact the author...

	If you have found this program useful, a registration fee of $5
	(or an amount you feel appropriate) would be greatly appreciated.
	In exchange for the fee, you will receive:


	      [1]  Program news/update information (when available), and

	      [2]  The Turbo-C source-code for functions to generate F(X),
		   G(X,Y), X/Y, log, bar, and pie graphs used by this program.


	Please direct correspondence to:

	      John Jakob, ZGRAF
	      316 Hawthorne Drive
	      Jeffersonville, IN 47130.


























```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1967

     Volume in drive A has no label
     Directory of A:\

    ZGRAF    EXE    129744   8-17-90   4:13p
    XY       DAT       585   8-17-90   4:13p
    ZGRAF    DOC     27669   8-17-90   4:13p
    ZDEFAULT DAT        80   8-17-90   4:13p
    DEMO     EXE     84690   8-17-90   4:13p
    LOG      DAT       209   8-17-90   4:13p
    ZCALC    EXE     56164   8-17-90   4:13p
    GO       BAT        38   1-01-80   1:37a
    FILE1967 TXT      1925   8-31-90   9:55a
    GO       TXT       804   1-01-80   1:54a
           10 file(s)     301908 bytes
                           15360 bytes free
