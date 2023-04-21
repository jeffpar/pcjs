---
layout: page
title: "PC-SIG Diskette Library (Disk #494)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0494/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0494"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORLD DIGITIZED 1 OF 3 (ALSO 495, 496)"

    The WORLD DIGITIZED is a compilation of more than 100,000 points of
    latitude and longitude that form the outlines of the entire world's
    coastlands, islands, lakes, and national boundaries in great detail.
    
    The data is organized by continent.  Disk 494 is required to expand the
    data to ASCII and also contains Africa, Antarctica, Australia, and South
    America.  Disk 495 contains Asia and Europe.  496 contains North
    America
    and Greenland.
    
    As distributed it is a pure database and has no programs to display the
    data.  The basic display disk is made available to those who register.
    It contains two display programs:  a user-modifiable BASIC version and a
    more advanced windowing version written in C and requiring a mouse.  It
    also contains programs to reduce the number of data points and to
    transform the data for Mercator projection.
    
    It really is a small world and now you can have it all.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COPYRITE.TXT

{% raw %}
```
			     The World Digitized
copyrite.txt
vs 1.3								April 1987
	
	
	
	If  you  have  obtained  The  World Digitized from a share-ware 
	organization or from a friend, you are encouraged  to  register 
	it by sending $12 to
	
			The World Digitized
			Basic Display Disk, Dept PC-SIG
			166 Shady Lane
			Apollo, PA  15613
	
	You  will  be sent the latest version of The Basic Display Disk 
	including
	
		a very simple display program in BASIC
	
		IEEE double floating format to MS (BASIC) format routine
	
		program to reduce detail of map files
	
		program to convert ASCII map  files  (.mp1)  to  binary 
		Mercator projection format (.mp2)
	
	and  will be placed on a list to receive news of updates and of 
	any new products.

	
	Additionally, those who are really  into  C  language  graphics 
	programming  can  obtain  the  source  of
	
		The Simple Display Program (Tutorial I - V)
	
		an Alaska demo

		program to reduce detail of map files (Tutorial XV)
	
		program to convert .mp1 files to .mp2 format
	
	by sending $19 to
	
			The World Digitized
			C Source Disk, Dept PC-SIG
			166 Shady Lane
			Apollo, PA  15613
	
	Unfortunately executable versions of the  C  language  graphics 
	programs are not included because of sub-licensing restrictions.
	

	The World Digitized and its derivatives are Copyright  1986  by 
	John  B. Allison.  Permission for non-commercial duplication is 
	granted provided that the file bearing this copyright notice is 
	included  with  each  copy.   Prior  written permission must be 
	obtained  for  the  commericial  distribution  of   The   World 
	Digitized.

		
	Commericial  license  for  The  World  Digitized  data embedded 
	within your own application is reasonably priced.
```
{% endraw %}

## FILE.TXT

{% raw %}
```
			     The World Digitized
file.txt
vs 1.3								April 1987
	


	The World Digitized is segregated  into  directories  and  into 
	files  within  the directories for ease of use.  First are some 
	files of general or early  interest  kept  directly  under  the 
	root directory on Disk I.
		
		copyrite.txt -	copyright & shareware info
		regstrtn.ltr -	registration form
		file.txt     -	this file
		read.me	     -  an explanation of TWD
		tutorial.txt -	a collection of problems using TWD
		install.bat  -	installation batch file.
		install1.bat -	2nd part of install.
		expand.bat   -	data base expander control file.
		mpstomp1.exe -	shipping-to-ASCII file expander.
		mpstomp1.c   -  source of expander.
	
	    
	Directories on Disk I
	
		Africa

			AF0	-  coastlands
			AF1	-  islands
			AF2	-  lakes
			AF3	-  political boundaries (includes Middle East)

		Antarctica

			AN0	-  coastlands
			AN1	-  islands

		Australia

			AU0	-  coastlands
			AU1	-  islands
			Au2	-  lakes

		Southamerica	with Central America and Caribbean

			SA0	-  coastlands
			SA1	-  islands
			SA2	-  lakes
			SA3	-  political boundaries

	
	Directories on Disk II

		Asia

			AS0	-  coastlands
			AS1	-  islands
			AS2	-  lakes
			AS3	-  political boundaries
	
		Europe

			E0	-  coastlands
			E1	-  islands
			E2	-  lakes
			E3	-  political boundaries


	Directory on Disk III

		Northamerica

				   primarily Canada and Alaska
			NA0	-  coastlands
			NA1	-  islands
			NA2	-  lakes
			NA3	-  political boundaries

			USA0	-  coastlands
			USA1	-  islands

				   Greenland
			GR0	-  coastlands
			GR1	-  islands

			PA1	-  Hawaii and mid Pacific islands
```
{% endraw %}

## FILES494.TXT

{% raw %}
```
Disk No:  494
Program Title:  The World Digitized version 1.3 (disk 1 of 3)
PC-SIG version 1.5

The WORLD DIGITIZED is a collection of more than 100,000 points of
latitude and longitude.  When connected together, these co-ordinates
form outlines of the entire world's coastlands, islands, lakes, and
national boundaries in surprising detail.

THE WORLD DIGITIZED is a pure data base and as such contains no programs
to display the data.  Because many would like a starter display program to
customize with their own ideas, THE WORLD DIGITIZED basic display disk is
made available to those who register their copy of THE WORLD DIGITIZED.
(See the REGSTRTN.LTR file.)

Usage:  Database.

Specail Requirements:  A hard disk is suggested.

Suggested Registration:  $12.00 + $3.00 for S/H.

File Descriptions:

/AFRICA       Data directory containing Africa information.
/ANTARCTI     Data directory containing Antartica information.
/AUSTRALI     Data directory containing Austrailia information.
/SOUTHAME     Data directory containing South America information.
COPYRITE TXT  Copyright notice.
EXPAND   BAT  Database expander control batch file.
FILE     TXT  File descriptions.
INSTALL  BAT  Installation program 1.
INSTALL1 BAT  Installation program 2.
MPSTOMP1 C    Source of expander.
MPSTOMP1 EXE  Shipping-to-ascii file expander.
READ     ME   Instructions file.
REGSTRTN LTR  Registration form letter.
TUTORIAL TXT  Tutorial information about the program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## TUTORIAL.TXT

{% raw %}
```


			Programming Suggestions Using

			The World Digitized Database


			Copyright 1986 John B. Allison

	


I.  Simple display program:
	
    1.	Define a world co-ordinate system whose lower  left  corner  is 
	-246  (degrees  West  Long),  -85 (degrees South Lat) and whose 
	upper right corner is 246, 85.

    2.	Draw lines of latitude and longitude every 20 degrees  labeling 
	 them.

    3.	Traverse  a  .mp1  formatted file plotting lines from latitude/ 
	 longitude point to point.  Terminate the current  sequence  of 
	 connected lines at a blank input record and prepare to start a 
	 new sequence if there is one.

    4.	The name of the file to be displayed  must  be  accepted  as  a 
	 command line argument.

    5.	The program should exit after it displays for about 30 seconds.

II.  Simple zoom display program:
	Provide  the ability to zoom in on a chosen area of the display 
	in the previous program.
    
    1.	Convert the mainline function of your  Simple  Display  Program 
	 (I) to a function named "display1()".

    2.	Write   the   function   "zoomwin()"  which  resets  the  world 
	 co-ordinates  of  the  display  based  on  input  returned  by 
	 "getlocs(x, y)" called from within "zoomwin".
	
	The  aspect  ratio of the world co-ordinates must be maintained 
	even though the requested zoom is not in correct proportion.

	One way to signal  program  termination  is  for  "zoomwin"  to 
	return  TRUE  if  a  the zoom was accomplished and FALSE if the 
	same corner is entered twice.  The mainline  alternately  calls 
	"display1" and "zoomwin".
    
    3.	"Getlocs(x,  y)"  returns  the  display  co-ordinates of window 
	 corners entered to mark the desired extent of the new display.
	
	Dynamically  mark  the  current  cursor  position   (which   is 
	initially  centered)  by  cross hairs.  Move the cross hairs by 
	the keypad arrow keys (1, 3, 7, and 9 can be used for  diagonal 
	movement).

	Cursor  jump  should  be the minimum detectable on your display 
	unless the shift key is  simultaneously  held  down.   Then  it 
	should be 10 times the minimum.

	Striking  the  Return  key  should  "mark" a corner of the zoom 
	window with permanent dashed cross hairs.  The user  will  then 
	move  the  solid  cross  hairs to mark the second diametrically 
	opposed corner with a second Return.

	The decimal values returned by striking the keypad keys follow:

		key	byte1	byte2

		1	0	79
		2	0	80
		3	0	81
		4	0	75
		5	0	76
		6	0	77
		7	0	71
		8	0	72
		9	0	73

III.  Display Program with Mercator Projection:
	You may have noticed distortion in the maps  displayed  in  the 
	previous   programs,  epecially  at  extreme  latitudes.   This 
	distortion is caused by an attempt to map the curved surface of 
	a three dimensional globe onto a two dimensional plane.  As you 
	travel toward the poles,  the  360  degrees  of  longitude  are 
	squeezed  into less and less space on the globe, but not on the 
	plane.

	There are many ways to compensate for the  distortion  problem. 
	Probably  the  solution  most widely recognized is the Mercator 
	projection, named for a famous  early  map  maker.   Mercator's 
	projection  has the characteristics that both lines of latitude 
	and longitude are straight and at right angles  to  each  other 
	(orthogonal).  In addition, if a small area is viewed, there is 
	no distortion of form: areas have the right shape although  the 
	vertical scale and total area is distorted as you move from the 
	equator.
	
	The formula for the Mercator projection is

		y = ln{tan[45 deg + latitude/2)/deg_per_radian]}

	Check out the Encyclopedia Britannica under Map  for  all  this 
	good stuff and more.
    
    1.	Use  the  Mercator  formula  in a function which, when passed a 
	 latitude in degrees, returns a vertical displacement.  Can you 
	 predict  what sorts of evil things happen at the poles (90 and 
	 -90)?

    2.  Use the function "mercator(lat)" to give the  correct  vertical 
	 displacement  when generating graphics in Program II.  Set the 
	 corners of the world co-ordinates  to  (-246,-2.9)  and  (246, 
	 2.9).  The  horizontal  scale  is  still  in degrees while the 
	 vertical is in Mercator displacement units.

IV.  Faster Display Program:
	What you gained in making your display look more realistic  you 
	paid for in speed.  Real division and tangent and log functions 
	take time, even with a math chip.  The extra time can  be  more 
	than  made  up  for  by  reading  the  pre-calculated  Mercator 
	displacement and longitude  from  a  binary  file  rather  than 
	latitude and longitude from a text file.
    
    1.	Alter  the  input  function of your display program to open and 
	 read from a binary .mp2 formatted file  rather  than  from  an 
	 ASCII  .mp1  formatted  file.   (Refer  to the section on File 
	 Formats for a detailed description.)

    2.	Write a program called mp1tomp2 which converts  .mp1  files  to 
	 .mp2  files.   This program should accept the name of the file 
	 (without extension) as the first command line argument and the 
	 destination disk as the second argument.


V.  Display Program with Print:
	A nice addition to your  display  program  is  the  ability  to 
	reproduce  the displayed image on the printer.  This is an easy 
	addition in some graphics languages.

    1.	Add  a  call  to print the displayed image.  The call should be 
	 added to function "getloc()" and  activated  by  entering  "p" 
	 from  the  keyboard.   Note that upper case "P" (preceded by a 
	 null) will result from striking keypad "2".


Note: If you  are  having  trouble  with  the  Simple  Display  Program 
	outlined  above,  don't  be  discouraged.   The  program is not 
	really simple! When you put enough simple things together, they 
	inevitably  become  complicated  by the nature of their mututal 
	interactions.  That's what structured programming is all about: 
	designing simple and logical interfaces between the many pieces.
	
	If  you  have  simply  come  up  against  a  dead  end or if an 
	alternate solution is desired, the completed source of Programs 
	I  -  V  is available on The World Digitized C Source Disk (see 
	read.me).
 
VI.  Simple Display Program with Scale of Miles:
	As you zoom the display up further and further, you  know  that 
	you  are  getting up closer, but its easy to loose track of the 
	scale, the number of miles from one point to  another,  or  the 
	distance  across  the screen especially with the inherent scale 
	distortion in latitudes greater than 30 degrees.
    
    1.	Add a function which prints an indiction of the scale along the 
	 bottom  of  the  display.   This  indication  can  be  a solid 
	 horizontal line labeled  with  its  length:  1000  miles,  100 
	 miles,   10   miles,  1  mile,  or  whatever  is  appropriate.  
	 Alternately the indication could be text showing the width  of 
	 the  screen.   In  either case the scale represented should be 
	 that scale at the middle of  the  screen.  You  will  need  to 
	 define  the  inverse Mercator function "mercainv(y)" to return 
	 the latitude when supplied with the vertical offset  from  the 
	 equator.

    2.	Another  interesting  indicator is the zoom factor which can be 
	 placed at either the top or bottom of the display.  Define the 
	 initial display zoom ratio as 1.0.  As you zoom in, that ratio 
	 increases.   Professional  CAD  (Computer   Aided   Design   & 
	 Drafting)  systems  once blew up at factors of about 500.  You 
	 will be surprised at how far your display can zoom.  The limit 
	 is  ultimately  dependent upon the data representation, single 
	 precision real in 	the case of Halo.


VII.  Simple Display Program with Location Display:
	You will want to be able to display the geographic location  of 
	any  point  on  your  display.   The  inverse Mercator function 
	"mercainv()" you constructed for the previous program  will  be 
	useful.
    
    1.	Add the function "markloc()" which, when called by entering the 
	 letter "M", displays the cross hairs on the screen.  The cross 
	 hairs can be moved with the keypad as in windowing for a zoom, 
	 but  when a single Return is entered, a small cross is left to 
	 mark the spot.  To the right of the cross (or to the  left  as 
	 spacing  permits),  print  the  latitude  and longitude of the 
	 location.  This feature is invaluable when  trying  to  relate 
	 points on your graphics display to the source .mp1 files.


VIII.  Simple Display Program with Unzoom:
	Now  that  you can zoom your display anywhere at will, it would 
	be convenient to be able to  change  your  mind,  backup  to  a 
	previous  display,  and  commence again.  The ability to change 
	your mind is available in commerical packages such as Computer- 
	vision's  CADDS  4X graphics system.  In their system a command 
	is never "final" until you hit the Return key.  The results  of 
	your  actions are shown graphically as you enter them, however.  
	If you don't like what you just did, you always have the option 
	of  aborting  the  command  while  it  is still in progress and 
	returning, graphics display as well as data base, back  to  the 
	pre-command state. Pretty nifty!

	Without  getting  into  CV's total command interpretor solution 
	which is complicated and arguably ghastly to program, there  is 
	an  interesting  solution  with  two  variations for the lesser 
	problem of returning to previous states from the  current  one.  
	First  of  all  the  states  which  must  be saved are the zoom 
	extents - the world  co-ordinates  for  each  sucessive  zoomed 
	display.   The most straight forward implementation is to store 
	each sucessive display in an array (or a  C  structure).   Each 
	time  the  display is zoomed, the old drawing extents (corners) 
	are stored as the next elements of the array.  To get  back  to 
	any previous zoom ratio, the old extents are retrieved from the 
	array, the last-valid-element-marker  of  the  array  is  moved 
	backward,  and  the drawing is redisplayed.  Care must be taken 
	not to overflow the array.

	The more interesting but functionally equivalent approach is to 
	recursively  have  "zoomwin()" call itself thereby storing past 
	extents (and all other variables) on  the  stack.   "Zoomwin()" 
	must  also call "display2()" directly so the drawing can be re- 
	displayed after each zoom.   Recursion  has  the  advantage  of 
	automatically  handling  the  record  keeping chores - no extra 
	arrays  are  necessary.   Recursion  is   also   intellectually 
	challenging.  People don't think that way naturally and its fun 
	to try.  Recursion should  only  be  used  where  it  is  truly 
	advantageous.   Don't  use  it where a simple loop will do.  Be 
	sure that you prepare a  way  of  returning  back  to  yourself 
	otherwise  you  will  recurse yourself right off the end of the 
	stack.

	If your stack is too small, the program will fail at  run  time 
	with  a  ***  STACK  OVERFLOW  ***  message  if  you're  lucky. 
	Executing your program

			PROGRAM =8000

	will allocate an 8000 bytes stack to you program instead of its 
	default  (2048?).  The linker has an optional stack switch good 
	up to 64k, and the Lattice C compiler supports a larger default 
	declaration programmatically.
    
    1.	Add the capability to your program to unzoom.  This can be done 
	 by assigning the Esc key the meaning to backup one  level  and 
	 redisplay.   For  backing up several levels at once (redisplay 
	 takes time), the sequence "-n" where "n"  is  a  single  digit 
	 should be used.


IX.  Simple Display Program which Includes a City/Nation Database:
	The World Digitized comes with no cities.  Making a list of the 
	major  (perhaps  captial)  cities  of  the  world  with   their 
	co-ordinates is a straight forward task.
    
    1.	Make  a  list  of major cities/countries and organize them into 
	 file  structure  suitable  for  both  sequencial  and   random 
	 processing.   Modify the simple display program so that cities 
	 are displayed when a "c" is entered.  The cities are displayed 
	 by  a  small filled circle or square.  Choose different shapes 
	 or sizes depending on population.  Print the name of the  city 
	 beside its shape.

    2.	Modify  the  simple  display program to display (at the current 
	 zoom factor) a city and its  surroundings  when  an  "f"  (for 
	 find)  and its name is entered.  Develop a method for handling 
	 ambiguous cases by listing the possible cases and  asking  for 
	 additional information such as state or nation.

    3.	Modify  the  simple display program to display the names of the 
	 nations when an "n" is entered.  If you enter "f" for find and 
	 the name of a nation, it should be displayed as in 2 above.


X.  Program to Display in Polar Co-ordinates:
	If  you  aren't  entirely  sick of map display programs by now, 
	design one to display in polar co-ordinates.  The most suitable 
	continent to display, of course, is Antarctica.  Remember it is 
	in  the  southern  hemisphere,  and  therefore   mathematically 
	backward or inside out.


XI.  Program to Automatically Clean Up Database:
	As  you  have  already  discovered by this time, there are many 
	small errors in The World Digitized database.   The  number  of 
	points  and  the  difficulty  of interpreting them outside of a 
	graphics context makes correcting these errors by hand  tedious 
	and error prone.  Any programs which can be developed to locate 
	and correct  errors  automatically  are  valuable  and  inately 
	fulfulling.  Here's your chance to be fulfilled.
    
    1.	Closure  on many closed bodies such as islands and lakes is not 
	 complete.  The database consists of  strings  of  co-ordinates 
	 separated  by blank lines.  The first point of the next string 
	 may be either a continuation of the same body or the start  of 
	 a  new  one.   Write  a  program  which  traverses  .mp1 files 
	 outputing each record to an output file.  When a new string is 
	 found,  determine  whether the new string is a continuation of 
	 the old one (is sufficiently close to the last  point  of  the 
	 old  string)  or  is  the  start  of  a  new  body. If it is a 
	 continuation of the same body, the blank record should be left 
	 out.   If  it  is  the start of a new body, an additional or a 
	 replacement last record should be inserted in the output  file 
	 which  matches  the  first point of the old body thus assuring 
	 closure.  There is a strong possibility that the  relation  of 
	 the strings and points is indeterminate automatically.

    2.	Two  more  problems affecting the reasonableness of the data in 
	 the database are lines which cross themselves and angles which 
	 are  unnaturally  acute.   Perhaps  both these problems can be 
	 addressed by solving the acute angle problem.  Write a program 
	 which,  as in case 1 above, reads a .mp1 file and outputs good 
	 records to another .mp1  file.   Discard  any  point  n  which 
	 causes vectors drawn from n-2 to n-1 and from n-1 to n to form 
	 an angle of less than 45 degrees.
	
	While  this  approach  probably  will   solve   many   problems 
	automatically,  it  is not a fool-proof solution.  First of all 
	the results, the points discarded, are dependent on  the  order 
	of  traversing the database.  Is there any way of avoiding this 
	problem?  Secondly and perhaps more obvious  to  you,  throwing 
	out point n associated with an acute angle may leave us with an 
	equally bad n+1 point and angle.  In the  case  of  very  small 
	islands,  the  whole island may disappear, which may not be all 
	bad.  But you could conceive of whole spits or heads of islands 
	being radically changed.

	Perhaps  the best solution to problems of the types outlined in 
	cases 1 and 2 is to try  to  combine  automatic  scanning  with 
	graphical display and human decision making at difficult points.


XII.  Mathematical Analysis of the Data:
	Several  interesting  programs can be written which investigate 
	the relationship of the World Digitized  co-ordinates  to  each 
	other from a purely mathematical perspective.
    
    1.	Write  the  function "spheremi(lat0, long0, lat1, long1)" which 
	 returns the distance in statute  miles  separating  two  close 
	 places  on the earth.  For the sake of simplicity and speed of 
	 execution, you should assume that the chord  approximates  the 
	 arc  of  a  swept  angle  for  small  angles  or  sin(theta) = 
	 tan(theta) = theta (in radians) for small theta's.  The circle 
	 we  are  talking  about, of course, is the great circle of the 
	 earth.  The earth's radius is 3959 miles. Remember that  while 
	 distance  is linearly related to degrees of latitude, distance 
	 is not linearly related to degrees of longitude but depends on 
	 the latitude.

    2.	Using  the  function "spheremi()", write a program to calculate 
	 the total length of the coastlines of the world.

    3.	Write a program which prints a histogram  or  a  curve  of  the 
	 distribution  of  the  lengths  of  the  vectors making up the 
	 coastlands of the world.  One would expect the distribution to 
	 be  "normal",  or  perhaps the log of the distribution because 
	 the lower bound is 0 while the upper  is  infinite.   Can  you 
	 explain  why  it  is not normal?  Is the average vector length 
	 different for high latitude sections of  the  database  versus 
	 equitorial regions?

    4.	Write  a  program  to  calculate  the  area of enclosed figures 
	 (islands). I'm not acquainted  with  the  mathematical  theory 
	 needed  to  solve  this  problem,  but  I  bet  its simple and 
	 powerful.  The storage require-  ments  of  the  program  will 
	 probably  also  increase  at least linearly with the number of 
	 vectors making up the figure  to  be  evaluated  making  exact 
	 calculations  of  larger  areas  (continents)  difficult.  Use 
	 related algorithms to calculate the center of mass, moments of 
	 inertia, etc.


XIII.  Program to Insert a B-spline:
	As  you  zoom in closer and closer in your display of The World 
	Digitized, the disjointed nature of the  data  begins  to  look 
	very unnatural.  Running a B-spline between points would insure 
	that the slope of the curve at all points is continuous  adding 
	to the realism.
    
    1.	Write  a  variation  of  the Simple Display Program which would 
	 calculate and display a cyclic  cubic  spline  for  a  limited 
	 number  of points in the display area when zoomed up enough to 
	 make the discontinuous nature of the data obvious.

    2.	Devise a method to store the parameters  of  the  spline  in  a 
	 binary file ahead of time to reduce the run time calculations.
	
	The  mathematics  of  b-splines  are  beyond the scope of these 
	programming suggestions to cover.   Rogers  and  Adams  in  the 
	Mathematical  Elements for Computer Graphics, McGraw-Hill, 1976 
	discuss cyclic cubic splines.  See page 129 for pictures.


XIV.  Program to Add More Resolution:
	There is only so much information that is carried  in  a  given 
	drawing  or  database.   The measure of that information is the 
	number of points defining the vectors.  You might suppose  that 
	it  is  impossible  to  add  information  which  is not already 
	explicitly there.  Using the b-spline techniques  suggested  in 
	the last program, it is possible to generate more data based on 
	the implied relationship of the points to each other.
    
    1.	Build a program which reads in a series of points, constructs a 
	 spline along those points, and finally approximates the spline 
	 with a new set of points at twenty times the  density  of  the 
	 original defining points.

 
XV.  Program to Reduce Resolution:
	There  are  cases  in which the detail of the database might be 
	too much for the application.  This  overkill  would  not  only 
	slow  the display repaint down unnecessarily, but would consume 
	extra disk space.
    
    1.	Develop an algorithm to cull unneeded points  from  a  database 
	 (.mp1 format) outputing the new shorter file.  The trick is to 
	 dispose of "extra"  points  without  deforming  the  coastland 
	 being  reduced.   The  simplest  approach  would  be to skip 9 
	 points out of every 10 if you wanted an output with one  tenth 
	 the resolution.  That might work tolerably if you were sure of 
	 a uniform distribution of points  to  begin  with.   A  better 
	 solution   is  to  use  the  "spheremi()"  function  developed 
	 previously to skip  those  points  closer  together  than  the 
	 resolution  you require.  The algorithm is to accept the first 
	 point and to look for the next point that  falls  outside  the 
	 radius  of minimum resolution from the first point.  Write out 
	 this accepted point.  It now becomes your new first point.

    2.	There may be  cases  in  which  the  points  are  separated  by 
	 distances  greater  than the minimum resolution but which fall 
	 almost in a straight line.  Define a  minimum  channel  width. 
	 Points falling within this channel can be replaced by a single 
	 straight line from the first point in the channel to the  last 
	 point  in  the  channel.   This  algorithm  is  a  little more 
	 challenging and a little more compute intensive.   It  assumes 
	 that  the  points have passed the minimum radius test outlined 
	 above.  Starting with  the  second  point  beyond  the  anchor 
	 point,  imagine a line back to the anchor point.  If the first 
	 point beyond the anchor point is within  the  channel  width's 
	 distance  to that line, it may be discarded.  Advance to point 
	 3 and check points 2 AND point 1  again.   The  process  stops 
	 when a point n is chosen such that one of the points 1 through 
	 n-1 falls outside the channel.  Point n-1 is retained.
	
	You can see the need for checking back through all  the  points 
	to  the  anchor  each time if you consider what would happen if 
	you tried to reduce a coastland whose points all  gently  arced 
	around  in  a complete circle.  Adjacent points would always be 
	within the channel while the overall shape is obviously  not  a 
	straight  line!   You can also appreciate the non-linear aspect 
	of the number of calculations required as you walk back further 
	and further to discard more and more points.

	I  am  not  convinced  that  these  two  approaches to database 
	pruning outlined above will always yield satisfactory  results.  
	Grotesque  spurs  not  representative  of  the original coastal 
	outline might in some cases  be  generated  (or  rather  left).  
	Play with this problem and see if you can come up with a better 
	solution.


XVI.  A Program to Generate Pseudo Detail:
	The June 1982 issue of the Communications of the  ACM  contains 
	the  article "Computer Rendering of Stochastic Models" authored 
	by three individuals, one from Lucasfilm.  The  abstract  reads 
	in  part  "A recurrent problem in generating realistic pictures 
	by computers is to  represent  natural  irregular  objects  and 
	phenomena  without  undue  time  or  space overhead.... A major 
	advantage of this technique is that it allows us to compute the 
	surface  to  arbitrary levels of details without increasing the 
	database.   Thus  objects  with  complex  appearances  can   be 
	displayed  from  a  very  small database." The authors go on to 
	give example code in Pascal (page 376) and generate  a  map  of 
	Australia from only eight points!
    
    1.	Obtain  the article and implement a two dimensional version for 
	 use based on data from The World Digitized.


XVII.  A Program to Edit Graphics:
	Programmers have written more text editors than you can shake a 
	stick  at.   A  GOOD  graphics  editor  for .mp1 files would be 
	unique and useful (The World Digitized containing assorted, and 
	we  might  add,  minor errors).  Without a graphics editor, the 
	process of relating mistakes from the graphics display  program 
	back  to the .mp1 source file is difficult and error prone.  In 
	addition the changed .mp1 file must be translated into its .mp2 
	version before redisplay and confirmation.
    
    1.	Write  a  graphics editor for .mp1 files.  To keep the response 
	 snappy, it should not display the whole or large sections of a 
	 database  file  unless  asked to do so.  One should be able to 
	 ask for a latitude and longitude at which point  the  graphics 
	 editor  scans  the  .mp1  text  file  looking  points  in that 
	 location's vicinity. N points (10 to  100,  a  setable  value) 
	 should  be  displayed.   The program must calculate the proper 
	 world  co-ordinates  based  on  the  points  chosen  for  this 
	 display.   The exact point requested should be marked.  Points 
	 themselves should be marked with small circles and linked with 
	 straight lines.  The editor should allow points to be deleted, 
	 moved,  or  added  using  keypad  control  for  selection  and 
	 positioning.   Multiple scans forward and backward through the 
	 database should be allowed.
	
	The problems of writing good  programs  fall  into  two  parts: 
	writing   a   good   design   specification  and  choosing  the 
	appropriate algorithm  for  implementation.   This  project  is 
	challenging  on  both  counts.  Writing a design spec must be a 
	little like writing a murder mystery. You sit down, close  your 
	eyes,  and ask what your user really wants to do.  You dream up 
	the smallest number of commands which will  enable  him  to  do 
	this  function  well.   You  mull  them over in your mind.  The 
	commands are your mystery  characters.   You  want  to  develop 
	their  personalities  fully.   Are  the commands coherent?  Can 
	they be simpler in syntax yet more  powerful,  ie.  open-ended, 
	all  encompassing,  or  open to ways of use not forseen by you, 
	the author.  Of course there is a limit to what conjecture  can 
	accomplish.   You  must write the syntax of your user interface 
	(language) down and program it.  If the application is  obvious 
	or  if  you're  experienced, your first pass attempt may be the 
	final version.  More often, however, we learn  from  exercising 
	this  prototype.   That's  why  there  are  so many version 2.0 
	programs floating around!

	The graphics editor program may have (depending on  your  final 
	design) commands such as:

			FIND latitude longitude
			SEARCH FORWARD
			SEARCH BACKWARD
			SEARCH ALL
			SEARCH ONE
			SET DISPLAY n
			DELETE
			MOVE
			ADD
			UNDO LAST
			UNDO ALL DISPLAYED
			DISPLAY ORIGINAL
			DISPLAY NOORIGINAL
			MEASURE DISTANCE
			MEASURE LENGTH
			EXIT
			QUIT

	You   have  the  choice  of  implementing  your  grammar  in  a 
	type-it-in interface if you're from the  I-like-to-type  school 
	or  as  a  series  of  menus  if you're from the button-pushing 
	school.  Unless you're very experienced, either interface is  a 
	small  project in and of itself in the graphics display context 
	where you usually  must  solicit  and  display  each  character 
	yourself  while  handling  the  delete,  backspace, and newline 
	functions normally taken care of by the terminal driver. 

	Just as important as what the graphics editor is going to do is 
	how it is going to do it.  Issues of simplicity and performance 
	loom before us.  Text editors usually manipulate  an  in-memory 
	linked  list  of  lines.   Large  files complicate the issue by 
	forcing portions of this linked list to be written to  disk  as 
	internal  buffers  are filled.  Functions such as the unlimited 
	backward  scan   of   text   may   be   inhibited   or   become 
	programmatically complex.

	This  graphics  editor  is different from a text editor in that 
	while it most assuredly does handle large text files,  most  of 
	the  changes  to be made are minor in comparison to the bulk of 
	data which is already in place.  Therefore a  simpler  strategy 
	for  recording  changes,  additions, and deletions is in order.  
	One method is for the editor to keep track of the line  numbers 
	of  the displayed points. When changes, additions, or deletions 
	are made, records of these transactions along with the  related 
	source  code line numbers are stored in an in-memory structure.  
	The structure may have either linked  records,  be  indexed  in 
	some  fashion,  or  be  sequentially  scanned  for access.  The 
	details and trade offs of the strategy are  best  left  to  the 
	implementor.   In  any event, after a change has been made to a 
	section of the display and that section is left and returned to 
	or searched for later, the new version must be displayed rather 
	than the original version (except upon  request).  A  new  .mp1 
	file  must  be  created  at  editor  exit  time  by copying the 
	original to the new with the  appropriate  changes  folded  in.  
	The original .mp1 file should be renamed with a .bak extension.


XVIII.  A Program to View the World Digitized as a Globe:
	Until  this point we have been using The World Digitized in two 
	dimensional applications.  Although perphaps not  obvious,  The 
	World  Digitized  is  inherently a 3 dimensional database.  The 
	co-ordinates of latitude and  longitude  are  mappings  from  a 
	sphere, a three dimensional solid.
    
    1.	Create  a  function  which will translate co-ordinates given in 
	 latitude/longitude  to  Cartesian  co-ordinates.   The   input 
	 arguments  are  latitude,  longitude,  and  altitude above the 
	 surface of the earth, and the output arguments x,  y,  and  z.  
	 Define  the x-y plane to lie in the plane defined by the great 
	 circle of the equator with the positive x  axis  running  from 
	 the  center  of  the  earth  (the  origin)  through  the Prime 
	 Meridian (longitude  =  0).   In  keeping  with  right  handed 
	 conventions,  the positive z axis runs from the earth's center 
	 through the Georgraphic North Pole.

    2.	Use the function created in step 1 to display .mp2 files  in  3 
	 space.  The details of the three-dimensional matrix transforms 
	 and  projections  are  beyond  the  scope  of  this  tutorial.  
	 Rogers'  and  Adams' book mentioned above treat these subjects 
	 thoroughly. A few general observations are in order,  however.  
	 You  will  have  to  choose a view point for your perspective, 
	 beyond the surface of the earth to begin with.  The view point 
	 for  your  projection  can  be  at  infinity or at some finite 
	 distance.  You may want to  choose  your  initial  view  point 
	 along the x axis (y = z = 0).
	
	Objects on the far side of the earth will be visible unless you 
	clip them.  One solution is to clip everything beyond  a  plane 
	passing  through  the center of the earth and lying parallel to 
	the plane of the display.  This is known as z-clipping although 
	if  your  view  point  lies  on the positive x axis it would be 
	literally -x axis clipping.

	Objects which lie toward the limb of the earth will  be  viewed 
	almost  edge  on.   You  may have noticed that the horizon from 
	satellite pictures is indistinct.  That phenomenon may be  due, 
	in part, to the additional haze of the earth atmosphere, but at 
	best those objects would be  hard  to  distinguish  because  of 
	perspective.   You may wish to clip objects not only on the far 
	side of the earth, but those just on this side of the horizon.



XIX.  A Program to Address the Speed/Detail Dilemma:
	One of the most difficult problems facing  graphic  application 
	developers  is  speed.   If  you haven't noticed, you soon will 
	that even a simple application such  as  displaying  The  World 
	Digitized consumes appriciable time.  People expect response in 
	seconds. More than 3 to 5 seconds can be a long wait  for  some 
	applications.  The  simple  display program developed above can 
	display at a rate approaching 200 vectors/second on  a  vanilla 
	IBM PC with math chip (not sure it's being used).  That implies 
	that the full  The  World  Digitized  database,  some  100,000+ 
	co-ordinates,  would  take  on  the  order  of  ten  minutes to 
	display!  Fortunately the detail of the entire database is  not 
	needed when the full breadth of the database is presented.  The 
	problem, then, becomes one of dynamically  trading  off  detail 
	for speed depending on need.
    
    1.	Design a display module for the simple display program outlined 
	 above which will minimize  display  time  by  using  only  the 
	 detail  necessary  for the current zoom factor.  I am aware of 
	 no practical solution to this  most  practical  problem.   The 
	 solution  which  first  jumps  to  mind  is using some form of 
	 indexing, first of all to limit the range of file scanning for 
	 high  zooms,  and  secondly  to skip the detail unnecessary in 
	 large area displays. The problems implicit in  this  solution, 
	 however,  jump  to  mind  almost as fast.  Different levels of 
	 indexing would be  required  by  differing  zoom  factors.   A 
	 simple  file  organization  into which to index isn't obvious.  
	 The twin problems of data scope and detail remain.  One  trick 
	 which may be helpful, however, is to paint the central portion 
	 of any given display first.  While the user is  studying  what 
	 probably  interests  him most, the program can go on to finish 
	 the details around  the  edges  or  informationally  ambiguous 
	 areas.   (If  any of you have a good solution, drop me a line.  
	 I may not be able to reply, but I  certainly  stand  ready  to 
	 learn.)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0494

     Volume in drive A has no label
     Directory of A:\

    COPYRITE TXT      1795  11-06-88   8:46p
    EXPAND   BAT      1280   1-23-86   7:47p
    FILE     TXT      1729   4-17-87  12:26p
    FILES494 TXT      1610  12-14-88  11:03a
    GO       BAT        38   6-09-87   1:27p
    GO       TXT       848   6-09-87   1:27p
    INSTALL  BAT       522   1-10-87   9:06a
    INSTALL1 BAT       651   1-10-87   9:07a
    MPSTOMP1 C        1920  12-28-85  11:41a
    MPSTOMP1 EXE     15368  12-28-85  11:42a
    READ     ME       6359   4-13-87   9:14p
    REGSTRTN LTR       389  11-06-88   8:45p
    TUTORIAL TXT     34201   2-12-87  10:45p
    AF0      MPS     23088   1-16-86   8:09p
    AF1      MPS     17264   1-16-86   8:11p
    AF2      MPS     11018   5-01-86   7:00p
    AF3      MPS     42340   5-01-86   7:03p
    AN0      MPS     23340  12-20-86   5:48p
    AN1      MPS      4226  12-20-86   5:49p
    AU0      MPS     18247   1-16-86   8:33p
    AU1      MPS     14270   1-16-86   8:35p
    AU2      MPS      5450   1-16-86   8:35p
    SA0      MPS     47414   1-16-86   9:25p
    SA1      MPS     35841   1-16-86   9:28p
    SA2      MPS      1185   1-16-86   9:28p
    SA3      MPS     15788   1-16-86   9:30p
           26 file(s)     326181 bytes
                           22528 bytes free
