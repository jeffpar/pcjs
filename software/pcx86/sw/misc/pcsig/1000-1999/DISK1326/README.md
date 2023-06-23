---
layout: page
title: "PC-SIG Diskette Library (Disk #1326)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1326/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1326"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCI-CALC AND MANDELBROT ZOOMLENS"

    SCI-CALC is a scientific calculator with a simple, direct approach.
    Various standard formulas are shown on the screen relating x and y.
    Enter the numbers you want and the program calculates the results.
    
    MANDELBROT ZOOM LENS lets you create, view, and magnify a Mandelbrot
    fractal and demonstrate the unique nature of these complex mathematical
    patterns which are found in nature.  As a fractal image is magnified,
    the smaller details will still look like the same fractal.  The more a
    fractal is magnified, the more hours it takes to fill in all the details
    on the screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1326.TXT

{% raw %}
```
Disk No: 1326
Program Title:  Mandelbrot Zoom Lens and SCI-CALC
PC-SIG version: 1

MANDELBROT ZOOM LENS lets you create, view and magnify a Mandelbrot
fractal and demonstrate the unique nature of these complex mathematical
patterns which are found in nature.  As a fractal image is magnified,
the smaller details will still look like the same fractal.  The more a
fractal is magnified, the more hours it takes to fill in all the details
on the screen.

SCI-CALC is a scientific calculator with a simple, direct approach.
Various standard formulas are shown on the screen relating x and y. You
simply enter the numbers you want and the program then calculates the
results.

Usage:  Graphics/Entertainment, Calculator.

Special Requirements:  CGA graphics for Mandelbrot Zoom Lens.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00 for Mandelbrot Zoom Lens; $4.00 for
Sci_Calc.

File Descriptions:

MANZOOM  COM  Main program.
MANZOOM  PIC  Picture file.
MANZOOM  DOC  Documentation.
SC       BAT  Batch file to start program.
SCI_CALC COM  Main Program.
SCI_CALC DOC  Manual.
SCI_CALC FMT  Data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<< Disk No 1326 Mandelbrot Zoom Lens, SCI-CALC >>>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To start the Mandelbrot Zoom Lens, type:                              ║
║                                                                         ║
║             MANZOOM (press enter)                                       ║
║                                                                         ║
║   To start the SCI-CALC program, type:                                  ║
║                                                                         ║
║             SC (press enter)                                            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANZOOM.DOC

{% raw %}
```
                          DOS  FILE  DOCUMENTATION
                            MANDELBROT  ZOOM LENS
MANZOOM.COM     Calculates graphics displays of the Mandelbrot fractal.
MANZOOM.DOC     Documentation.  Help file for MANZOOM.COM.                  
MANZOOM.PIC     Picture data for MANZOOM.COM.  Pre-calculated quick displays.  

Requires IBM color graphics or compatible.  Requires DOS 2.0 or greater. 
Requires 64K RAM.

To start, enter MANZOOM in response to the DOS A> prompt. 

MANZOOM.PIC  must be on the default disk  at run time.  MANZOOM.DOC should be 
on the default disk for the help features to work. 

          The  Mandelbrot  fractal  is  a  mathematical object which provides 
fascinating  computer  graphics  displays.   Use  the MANDELBROT ZOOM LENS to 
examine the beauty  of the fractal.   Move the image  on the screen  with the 
cursor  keys.  Magnify the image for a  new display by pressing the PgUp key.  
There is an infinity  of detail to be  discovered in the Mandelbrot  fractal.  
But the more you magnify, the  more hours it takes to fill in all the details 
on the  screen. At  last!  A  computer solitaire  program that  gives your PC 
something interesting and pretty to do when you aren't using it! 
                                  FRACTALS

          The  border  of  the    Mandelbrot  set  is  a fractal.   A fractal 
is a jagged edge.  A  map of a seacoast, for example, is  a fractal.  You can 
magnify a fractal and it still  looks like a fractal.  A seacoast looks about 
the same on a country map as on a city map.  Another example is a view of the 
horizon of a mountain range. 

          The Mandelbrot fractal is neat because it is a mathematical object.  
I wrote this program to graph the Mandelbrot fractal on your PC screen.  

          You saw an overview  of the Mandelbrot set when  this program first 
started.   If you wish, you can press A right now and see the overview again.  
(Remember  that F will  get you back  here.) The Mandelbrot  set is the black 
area.  The fractal is the white border around the black area.  

          Another  neat thing about  Mandelbrot displays is  the color around 
the fractal.  The colors are chosen mathematically.  When  a small section of 
the white  fractal is  magnified, new  colors are  chosen.  So  go ahead  and 
magnify the fractal  seacoast of the Mandelbrot ocean. Any magnification will 
give a unique display of colors. 

                            GENERAL  INSTRUCTIONS

          Press the A key to start the Automatic display.  Watch the overview 
of  the  Mandelbrot  set  get  magnified  three  times.   Then  watch how the 
Automatic Display  moves around the fractal  to give you a  view of the whole 
thing.   I pre-calculated  this display  to get  you started.  This Automatic 
display is loaded from disk into your computer's memory.

          To stop the Automatic  Display, press the RETURN key.  Then use the 
four cursor (arrow) keys to move the fractal around yourself.  

          Once you  have the  feel of  it, pick  a region  which strikes your 
fancy.  Choose a region with some white near the center of the screen.  Press 
the PgUp key.  The screen will go blank.  The computer will start calculating 
a new display.  This is  a 2X blow up of  the center of the screen  which you 
chose.  Dots of color  will appear in a checkerboard pattern  as the computer 
calculates points (pixels) of the display.  In a few minutes, you should have 
a  rough  sketch  of  what  the  display  will  look like.  The computer will 
continue calculating more pixels for more resolution for a few hours. 

          Let  the computer  finish.  Or  adjust the  position by  moving the 
image with a cursor key.  Or press PgUp again.  Whatever.
                             KEYSTROKE COMMANDS

          This MANDELBROT ZOOM LENS  has 16 commands.  Just press  one of the 
16 command keys to issue a command.  You can issue any command at any time by 
pressing one of these 16 command keys.

          All  16  command  keys  are  listed  with brief descriptions on two 
menus. The 16 command keys are:  Space, Return, 4  cursors, PgUp, A, D, F, G, 
I, K, L, M, and  Q. Both lower case and  shift upper case work. Here  are the 
detailed descriptions: 

          Press the SPACE BAR for the main menu.  (Actually, pressing any key 
which is not a command will give you the main menu.) 

          Press the RETURN key  (also called the ENTER key) to  return to the 
ZOOM  LENS graphics  displays. At  low magnification,  the RETURN key gives a 
complete  image  in  about  one  second,  from  computer   memory.   At  high 
magnifications,  the RETURN  key clears  the screen  and starts  the computer 
calculations which fill the screen with colored dots (pixels).   You can tell 
when  the computer  is calculating  pixels, because  pixel dots appear on the 
screen in  a checkerboard fashion. If  you press any key  while calculating a 
display,  the display is erased in preparation for the next display.
          The four cursor (arrow)  keys are for you to move  the image on the 
screen.   Pressing one  of these  four keys  causes the  image to move in the 
direction  of the  arrow.  At  low magnification,  the moved image appears in 
about one second, from computer memory.  At high magnifications, a cursor key  
clears the screen and starts the new calculations.  

          The PgUp  key gives a 2X blow up.   When you press PgUp, the center 
of  the screen  display gets  magnified. At  low magnification,  the blown up 
image  appears  in  about   one  second,  from  computer  memory.    At  high 
magnifications, PgUp clears the screen  and starts the new calculations.   At 
maximum  magnification,  when  the  limits  of  this MANDELBROT ZOOM LENS are 
reached, the PgUp key no longer magnifies the screen.

          Press A for the Automatic Display.  This program always starts with 
the Automatic Display.  This program can be restarted at any time by pressing 
A.  The Automatic Display can be stopped by pressing any key. 

          Press D  for DOS file  Documentation on the  3 MANDELBROT ZOOM LENS 
files.  

          Press F for a one page introduction to Fractals.

          Press G for a  one page introduction to the use  of this MANDELBROT 
ZOOM LENS computer program.

          Press  I for the  Information menu.  All  16 keystroke commands are 
listed either on the main menu  or on the Information menu.  The  Information 
menu lists the 5 commands which read  from the documentation file MANZOOM.DOC 
and display the contents on your screen.

          Press K for Keystroke Command details.  That's what you are reading 
right now.  

          Press  L for Long Documentation. The Long Documentation tells you a 
bit  about  complex  numbers.  There  are  several  pages  of details on this 
MANDELBROT  ZOOM  LENS.   I  also  have  a much larger and elaborate program, 
called MANDELBROT MICROSCOPE.  The differences between this ZOOM LENS and the 
MICROSCOPE are described when you press L. 

          Press M for a  MANDELBROT MICROSCOPE advertisement and  order form. 
You can press M right now, if you like.  Press K to get back here. 

          Press  Q to Quit using the MANDELBROT  ZOOM LENS and return to DOS, 
or to your operating control system.
                             LONG  DOCUMENTATION

          Here  are several pages  of documentation.  Press  PgDn to turn the 
pages.  If you are tired of reading this stuff, press any other key to return 
to the ZOOM LENS.  

          This program which you are running is called  MANDELBROT ZOOM LENS.  
It provides an introduction to fractals.  It provides quick  graphic displays 
for  a  sample  of  the  Mandelbrot  fractal.   I  wrote this program with an 
emphasis on simple user interface.  This is a public domain program.   Please 
feel free to make copies for your friends and acquaintances.  MANDELBROT ZOOM 
LENS consists of three DOS files:  MANZOOM.COM, MANZOOM.DOC, AND MANZOOM.PIC. 

          I have  another program, called MANDELBROT  MICROSCOPE.  The MICRO- 
SCOPE is intended for more  extensive exploration of the Mandelbrot  fractal.  
The MICROSCOPE works  the same as the ZOOM LENS, with command keys and menus.  
But there are  more menus and a lot more command keys.  To be better than the 
ZOOM LENS, the MICROSCOPE  requires some knowledge of fractals,  so plenty of 
printed  documentation   is  included.   The  microscope  is  too  large  and 
specialized  for public domain distribution.  Press  M for an order form. You 
can press  M right now if  you wish.  Press L  to get back here  to read more 
pages of this long documentation.  
                             CALCULATION DETAILS

          The  Mandelbrot graph-display  is calculated  one point  at a time.  
Each point is called a pixel.  We use 64,000 pixels on your PC screen.  There 
are 200 horizontal lines of pixels, 320 pixels in each line.

          Each pixel on the screen is treated like a number on a graph sheet.  
The  PC squares the number, then adds  the number to the square, then squares 
the sum,  then adds the  original number again,  then squares the  sum again, 
then adds the original number again... on and on.  

          It sounds like the answer should get bigger and bigger, right?  Not 
necessarily! We're talking here about complex numbers.  Like a graph, complex 
numbers are a pair,  x and y.  The y number is imaginary. An imaginary number 
squared is negative.  Here is how you square a complex number: 

          (x + iy)*(x + iy) = x*x - y*y + 2i*x*y

          * means multiply             i means imaginary

          The  "Mandelbrot  iteration"  is  just  such a series of successive 
multiplication and addition starting with one complex number. 
          Some of  the pixels for the display have  x,y pairs which never get 
large with the  Mandelbrot iteration multiplication and  addition.  These are 
complex numbers  which belong  to the  Mandelbrot set.   The computer program 
leaves such pixels black.  

          Some  of  the  pixels  have  x,y  pairs  which  get  large with the 
Mandelbrot iteration.  The computer chooses colors for such  pixels according 
to how quickly they get large. 

          The pixels  near the  border are  the exciting  ones.  Those pixels 
near the edge of the Mandelbrot set get unpredictably larger and smaller with 
iteration.  More about them later. 

          The  Mandelbrot  displays  are  beautiful  and  detailed for purely 
mathematical reasons, and the math is simply addition and multiplication! 

          There  is a lot more  documentation with the MANDELBROT MICROSCOPE.  
If you  are interested in  learning what a  complex number is,  a tutorial on 
imaginary and complex numbers  is included. If you already know about complex 
numbers,  there  is  interesting  information  on  fractals  for you.  If you 
already  know about  fractals, you  may be  interested in the bibliography of 
books and articles on fractals which comes with MANDELBROT MICROSCOPE. 
                                COLOR CHOICES

          That  first  magenta  circle  which  you  see  in the opening of my 
Automatic  Display contains  the entire  fractal.  Don't  go exploring to the 
side; there's nothing there but the  wild blue yonder. The magenta circle  is 
the circle of radius 2 centered on the origin of the complex plane. Any point 
in the  complex plane beyond  this radius of  2 quickly gets  very large with 
Mandelbrot iteration multiplication and addition.  

          In fact, we happen to know that any complex number which reaches an 
iteration  magnitude  of  2   will  very  quickly  get   indefinitely  large.  
(Magnitude,  or  radius,  is  equal  to  the  square root of x squared plus y 
squared.) This  program counts  the number  of iterations  needed to  reach a 
magnitude  of 2.  This program does that for  each point, or pixel on your PC 
screen.  So each pixel ends up with an iteration number.  

          To get  a display, we need  to assign colors to  the numbers.  It's 
just  like painting by  number, but the  computer does it.  The assignment of 
colors is not unique. I chose  the colors for MANDELBROT ZOOM LENS.  It is an 
art to choose  colors for Mandelbrot  displays.  Choose different  colors and 
you get dramatically different effects.  MANDELBROT  MICROSCOPE has keystroke 
commands which let you pick the color assignments. 
                     THE MANDELBROT FRACTAL IS INFINITE

          The infinite  action is  at the  fractal edge.   That's the  border 
between  the  black  Mandelbrot  set   and  the  colored  region  around  it.  
Mathematicians  have  proven  that  as  you  get  closer  to the fractal, the 
iteration numbers get larger and larger.  To  get closer, this program does a 
magnification.  Magnification is done by spreading a smaller range of complex 
numbers across the space of your PC screen.  Each time the Mandelbrot fractal 
is magnified, a new graphic display is produced.  That goes on to an infinity 
of magnifications.

          Of course, this program is not infinite.  I programmed the PgUp key 
to do 2X magnifications.  This ZOOM LENS PgUp key is not programmed to go  to 
magnifications for which  I have not  assigned color numbers.  The MANDELBROT 
MICROSCOPE  lets you choose the color  numbers.  So the MANDELBROT MICROSCOPE 
goes on  to much greater  magnification.  You can  even manually type  in the 
screen coordinates and magnification when using the MICROSCOPE. 

          This ZOOM LENS and the MICROSCOPE use Turbo Pascal 5 byte  floating 
point numbers.  The  MICROSCOPE also has an optional mode  which uses 16 byte 
fixed point numbers for very high magnification. 

                              HOBBY PROGRAMMING

          Most of the fun  of fractals is in writing your own programs. There 
is  enough information in this  Long Documentation for you  to write your own 
Mandelbrot Display  program. The fastest way  to get started is  to glance at 
the  source code  of a  fractal generating  program.  I  wrote a simple BASIC 
program just  for this.  MANDEL1.BAS is included as  a DOS file on the floppy 
diskettes which you get with MANDELBROT MICROSCOPE.  This BASIC  program does 
nice displays of the Mandelbrot fractal on IBM PC's.  But  the purpose of the 
program is  to provide a  starting point for  hobby programmers.  The program 
has only about 50 lines of BASIC statements, but there are over  100 lines of 
comments and documentation in case you get stuck. 

          The source code for MANDELBROT MICROSCOPE is also included as a DOS 
file.  The  source code  is Turbo  Pascal.  There  are useful  procedures for 
display  of  fractals.   I  invite  you  to  use these procedures in your own 
programs.  Press M for ordering details. 

          The documentation for MANDELBROT MICROSCOPE  includes references to 
literature on other fractals for computer hobby programming.


                                 SAVING DATA

          The MANDELBROT  MICROSCOPE saves  the iteration  numbers which  are 
calculated.  There are 64,000 two byte numbers, so 128,000 bytes are required 
just for this "Mandel Map".  All  told, the MICROSCOPE requires at lease 200K 
free RAM, so do not order it if you have less than 256K.

          The  MANDELBROT MICROSCOPE allows you  to save partially calculated 
Mandelbrot displays as DOS files.  A screen copy, calculation parameters, and 
current position is  also stored in the  same file.  Saving and  restoring is 
done with menu driven command keys, just like the commands in this ZOOM LENS.  

          Included with MANDELBROT MICROSCOPE are some pretty  pre-calculated 
Mandelbrot displays.  I calculated these as samples.  They come as DOS files, 
ready to be restored on your computer. 

          The MANDELBROT MICROSCOPE   moves and blows up the  Mandel Map when 
you press the cursor keys  and the PgUp key.  So calculations do  not need to 
start from  scratch.  Saved DOS file displays provide  a jumping off point to 
quickly get going in a particular region of the Mandelbrot fractal.


                                    SPEED

          Mandelbrot displays  take time.   Most of  the time  is spent doing 
iterations in the Mandelbrot set,  where the magnitude never gets large  so a 
color is  never chosen.  It is  necessary to set a  maximum iteration number, 
and quit when the maximum is reached, leaving the corresponding pixel black.  

          MANDELBROT  ZOOM  LENS  postpones  hang  ups  in  black  regions by 
skipping  pixels  in  a  checkerboard  fashion.   That way, you quickly get a 
sketch of the overall display without immediately getting hung up in  a black 
region.  The ZOOM LENS colors every  32nd pixel in every 32nd row,  then goes 
back and does every 16th pixel and row, then every 8th, then 4th,  then every 
other one,  then does every pixel.  Then the  ZOOM LENS increases the maximum 
iteration number and checks every pixel again to look for more details at the 
fractal edge.  

          MANDELBROT MICROSCOPE saves time with the  Mandel Map of  iteration 
numbers.  The same  skipping is  followed, but  previous calculated iteration 
numbers  are  saved,  so  time  is  not  spent  on recalculations.  Also, the 
MICROSCOPE keeps track of the location of the  fractal, so pixels deep in the 
black Mandelbrot  set are  not evaluated  at all.   The algorithm for keeping 
track of the edge is an interesting puzzle.  A solution is in my source code. 
          The best way to speed  up the calculations for a fractal display is 
to  control it  yourself.  The  MANDELBROT MICROSCOPE  has an optional manual 
mode.  You watch the display develop and modify the calculation parameters to 
get just enough resolution.  It's  fun.  With keystroke commands, you  change 
the  number of bytes accuracy.  You  change the maximum number of iterations.  
You change the skipping distance between pixels.   With practice, you can run 
the MICROSCOPE about 100  times faster than this  ZOOM LENS. Of course,  with 
the MICROSCOPE, you  will be lured deeper and deeper  into the fractal, where 
calculations get longer and longer. 

          On  the other hand, long calculations have a mystique of their own.  
One  motive for deep searches into the  Mandelbrot fractal is to give your PC 
something to do at night, to keep it from getting bored!  I like to let my PC 
run all night,  then save the result in the  morning for further calculations 
on another night.  Somehow,  a graphic display which took my  PC 10 nights to 
complete seems more beautiful to me than a display which only took an hour or 
so.  



                                                                      1/13/88
                                                                  Pete Gwozdz

```
{% endraw %}

## SCI_CALC.DOC

{% raw %}
```
JOY Scientific Calculator (c) 1987 by Bill Joyner.  All rights reserved.

If you find this calculator useful in some way, please send $4 to Bill
Joyner, 603-C First Street, Oceanside, CA 92054.  Although no warranties of
any kind are made for this product, every effort has been made to ensure
the accuracy of the calculations.  Feel free to pass the SCI_CALC.ARC file
on to others in any manner whatsoever.

The only thing to be careful of is not using the "Enter" key when enter-
ing values into X and Y.  After typing numbers into the X or Y field use
the arrow keys to move to the next field.  The "Enter" key is reserved for
1) placing a result into the MEMory field when the cursor is located on a
result, or 2) placing the MEMory field value into the X or Y field when
the cursor is located on the X or Y field.  This is why, when you first
start the Scientific Calculator, if you hit "Enter" after typing a value
for X a "0" comes up, since "0" is in the MEMory field upon start-up.

All calculations are made as numbers are typed into the X or Y field.  Note
that if a field has a value of 1.7976931349E+308 the field is maxed-out and
should not be considered accurate.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1326

     Volume in drive A has no label
     Directory of A:\

    FILE1326 TXT      1262   2-22-89  12:15p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1156   2-22-89  12:16p
    MANUAL   BAT       147   1-19-89   9:21a
    MANZOOM  COM     24049   1-13-88   9:05p
    MANZOOM  DOC     19238   1-13-88   8:59p
    MANZOOM  PIC     27691   1-13-88   9:08p
    SC       BAT        31  10-18-87   6:27p
    SCI_CALC COM     79583  10-18-87   6:25p
    SCI_CALC DOC      1200  10-18-87   6:27p
    SCI_CALC FMT      1479  10-18-87   6:22p
           11 file(s)     155874 bytes
                            1024 bytes free
