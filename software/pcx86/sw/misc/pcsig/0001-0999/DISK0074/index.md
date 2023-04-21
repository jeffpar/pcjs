---
layout: page
title: "PC-SIG Diskette Library (Disk #74)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0074/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0074"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL UTILITIES DEMO"

    The Pascal Utilities Package consists of over 70 Pascal callable
    procedures and functions to control the screen, keyboard, graphics,
    light pen, joysticks, music, printers and communication ports.  It
    provides IBM PC DOS Pascal programmers an easy-to-use, yet powerful
    method for utilizing the special features of the IBM PC It is written
    in Assembly language and provides device level control of the IBM PC.
    
    This disk contains all the files from the commercially available
    Pascal Utilities Package except for all the object code modules
    (SLIB.OBJ, ALIB.OBJ, GLIB.OBJ, PLIB.OBJ and GUNIT.OBJ).  The five
    modules include:
    
    SLIB - Screen and Keyboard control.
    PLIB - Peripheral Control (music, printers, communication ports).
    GLIB - Graphics (line drawing graphics - a line, circle/ellipse).
    ALIB - Animation (pattern paint, get picture and put picture).
    GUNIT- Graphics using world coordinates (Window and Viewport
    transformation).
    
    NOTE: THIS PACKAGE IS IBM PC-DOS SPECIFIC.
    
    System Requirements: Two disk drives, PC-DOS, IBM Pascal Compiler
    
    How to Start:  Consult the MANUAL.TXT and your compiler manual.
    
    Suggested Registration: $119.00 gets you the complete package
    including source code and a printed, bound 110 page manual.
    
    File Descriptions:
    
    MANUAL   TXT  Manual for the Pascal utilities.
    DEMOMINI EXE  Demo random number, sound, screen control, and drawing.
    DEMO     EXE  Demostrates music, animation, bar, pie, and screen.
    DEMOS    INC  Interface file for the demos.
    MINI     OBJ  Library object module for the pascal utilities.
    DEMOG    INC  Interface file for the demog.
    DEMOMINI OBJ  Object codes.
    DEMOG    PAS  Source code for graphics and music demo.
    DEMO     PAS  Source code for the main program for demo.exe.
    MINI     INC  Function declarations to be include by the Pascal program.
    GUNIT    INC  Graphics using world coordinated (window and viewport).
    ALIB     INC  Animation (pattern fill, get/put picture)declarations.
    GLIB     INC  Graphics (line drawing) module declarations.
    PLIB     INC  Peripheral control and sound/music module declarations.
    SLIB     INC  Screen/keyboard control module declarations.
    DEMOS    PAS  Source code for displaying a table of color text.
    DEMOMINI PAS  Source codes.
    README        Intro to PASCAL utilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #74, version v1_1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  README  .            CRC = 78 05

--> FILE:  MANUAL  .TXT         CRC = 1B 67

--> FILE:  DEMO    .EXE         CRC = 94 A0

--> FILE:  DEMOMINI.EXE         CRC = 90 46

--> FILE:  MINI    .OBJ         CRC = 0E BD

--> FILE:  DEMOMINI.OBJ         CRC = EC B4

--> FILE:  GUNIT   .INC         CRC = 2F 7E

--> FILE:  DEMOG   .INC         CRC = 00 00

--> FILE:  GLIB    .INC         CRC = 75 BE

--> FILE:  ALIB    .INC         CRC = 10 99

--> FILE:  SLIB    .INC         CRC = B3 00

--> FILE:  PLIB    .INC         CRC = 06 57

--> FILE:  DEMOS   .INC         CRC = 6B 5F

--> FILE:  MINI    .INC         CRC = 0A 3F

--> FILE:  DEMO    .PAS         CRC = 06 31

--> FILE:  DEMOG   .PAS         CRC = 8E 10

--> FILE:  DEMOS   .PAS         CRC = 66 C2

--> FILE:  DEMOMINI.PAS         CRC = 81 93

 ---------------------> SUM OF CRCS = 15 23

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```







			PASCAL UTILITIES

			   Version 2.1

		    for the IBM PC DOS PASCAL








		     KEYBOARD/SCREEN CONTROL

			    GRAPHICS

		  MUSIC and PERIPHERAL CONTROL













			  Software Labs
			1052 Lily Avenue
		       Sunnyvale, CA 94086

			 (408)-241-9539


			   August 1983

		(C) Copyright Software Labs 1983












				1









Pascal Utilities 2.1


CONTENTS


1. Introduction ..........................................................1-1
    Capabilities .........................................................1-2
       SLIB  - Screen/Keyboard Control Module.............................1-2
       PLIB  - Peripheral Control (Music, Printers, Communication ports)..1-2
       GLIB  - Graphics (Line drawing graphics - line, circle/ellipse)....1-3
       ALIB  - Animation (Pattern paint, get and put picture).............1-3
       GUNIT - Graphics using world coordinates (Window and Viewport).....1-5
    Hardware Requirements.................................................1-5

2. General Information....................................................2-1
    Using the Screen......................................................2-1
       Writing Text.......................................................2-1
       Writing Graphics...................................................2-2
    Viewport and Clipping.................................................2-2
    Using the GUNIT.......................................................2-3
    Text and Graphics Cursors.............................................2-4

3. Getting Started........................................................3-1
    Diskette Files........................................................3-1
    How to Compile Your Pascal	Program with the Pascal  Utilities........3-2
    How to Link your Program with the Pascal  Utilities...................3-3
    A Sample Program .....................................................3-4

4. Reference Manual ......................................................4-1


Appendix A.  Sample Program Listings......................................A-1

Appendix B.  Include Files	     .....................................B-1






















				1









 


1.Introduction


     
     The  Pascal Utilities Package is  a set of Pascal callable procedures and 
functions  to control the screen,  keyboard,  graphics,  music,  printers  and 
communication ports. It provides IBM PC DOS Pascal programmers an easy-to-use, 
yet  powerful  method for utilizing the special features of the  IBM  Personal 
Computer.  The  Pascal  Utilities  Package  is written  in  Assembly  language 
providing device level control of the IBM PC. 

     In addition to providing primitive functions such as drawing a dot on the 
screen,  the  Pascal  Utilities package provides powerful  functions  such  as 
drawing a circle, ellipse, pie, or part of circle/ellipse all through a single 
function  call.  A  good deal of effort has gone into creating the  compatible 
features  provided by IBM-BASIC such as background music and graphics  picture 
store/retrieve.

      The  Pascal Utilities provides additional features not found in the IBM-
BASIC  such as a graphics cursor,  multiple pattern  fill,  multiple  joystick 
control,  and  easy-to-use  music  composing  formats.  Algorithms  have  been 
implemented  in Assembly language to increase  speed and  efficiency.  Special 
features  of  the  IBM PC can now be controlled from  inside  Pascal  programs 
through  the Pascal Utilities.   This allows the creation of more user-friendly 
and powerful programs for business, education and entertainment.



























Pascal Utilities 2.0      Introduction                              Page 1-1                 










1.1 Capabilities

     The Pascal Utilities Package consists of the following  five modules:

* SLIB - Screen and Keyboard control.
* PLIB - Peripheral Control (music, printers, communication ports). 
* GLIB - Graphics (line drawing graphics - a line, circle/ellipse).
* ALIB - Animation (pattern paint, get picture and put picture).
* GUNIT- Graphics using world coordinates (Window and Viewport transformation).

     A  brief  description  of  all the routines is listed  in  this  section. 
Detailed descriptions are  included in "Section 4 Reference Manual".   All the 
routines, except for printer control routines are listed in alphabetical order 
in Section 4.

1.1.1 SLIB   -Screen/Keyboard Control Module:

o SCREEN     -sets the screen mode and clears the screen.
o SCREENMODE -returns the screen mode, active page, and screen width.
o MONO       -switches to the Monochrome monitor.
o MONITORC   -switches to the Color/Graphics monitor.    
o BORDER     -selects the color for the screen border.
o LOCATE     -moves the text cursor to the specified position on the screen.
o NEWCURSOR  -defines the shape/size of the text cursor.
o READCURSOR -returns the cursor position and cursor shape/size.
o PUTCHAR    -puts a character with attribute/color at the cursor position.
o PUTSTRING  -writes a string with attribute at the current cursor position.
o PUTLSTRING -writes an lstring with attribute at the current cursor position.
o SCREENCHAR -returns character/attribute at the current cursor position.
o SCROLL     -scrolls a screen window up/down.
o SELECTPAGE -selects an active page for displaying.
o INKEY      -returns whether a key is pressed and what it is.


   
1.1.2 PLIB   -Peripheral Control (music,  printers,  communication ports).

o MUSICINIT  -initializes music interrupt routines.
o MUSICLOAD  -loads the music buffer.
o MUSICGO    -starts playing music.
o MUSICON    -returns whether the background music is playing.
o MUSICSTOP  -disables music interrupt routines.
o SOUND      -gererates sound through the speaker.
 
o INPORT     -reads a byte from an input port.
o OUTPORT    -writes a byte to an output port. 

o COMMIN     -initializes an asynchronous communication port(RS232).
o COMMREAD   -reads a byte from the specified communication port.
o COMMWRITE  -writes a character to the specified communication port.
o COMMSTATUS -returns the status of the specified communication port.
o EMUTERM    -emulates the PC as a terminal to login a remote computer system.



Pascal Utilities 2.0      Introduction                              Page 1-2                 










o RND        -returns a random number between 0 and 65535.
o RANDOMIZE  -gives a new seed for the random number generator.
o JOYSTICK   -returns whether the joysticks are pressed and where they are.

o NUMDISK    -returns the number of disk drives.
o NUMGAME    -returns the number of game adapters.
o NUMMEMORY  -returns the amount of RAM in the system.
o NUMPRAM    -returns the amount of planar RAM in the system.
o NUMPRINTER -returns the number of printers.
o NUMCOMM    -returns the number of communication ports.

o PRTINIT    -initializes the specified printer.
o PRTSTATUS  -returns the status of the specified printer.
o PRTCHR     -prints a character on the specified printer.
o PRTLSTRING -prints an lstring on the specified printer.


   Note   that  the  following  printer  control  routines  are  listed  under 
PRINTER  CONTROL,  not  in alphabetical order as the rest of the  routines  in 
"Section 4 Reference Manual".

o COMPRESS   -compresses all the characters. 
o DBLWIDTH   -doubles characters width.
o FORMFEED   -moves the paper to the next page.
o PRINTCRLF  -prints CR-LF (carriage return and line feed).
o EMPHASIZE  -prints bold characters.
o UNEMPHA    -returns from the emphasize mode.
o DBLSTRIKE  -double strikes each dot pattern for characters.
o UNDBLSTRIKE-returns from the dblstrike mode.
o REGULAR    -returns to the regular mode.



1.1.3 GLIB   -Graphics (line drawing graphics- a line, circle/ellipse).

o SCREENG    -sets the screen mode and clears the screen.
o PALETTE    -selects the palette and background color.
o VIEW       -sets the clipping viewport.
o WRITEDOT   -draws a dot on the graphics screen.  
o READDOT    -returns the color at the specified dot position.
o DRAWLINE   -draws a line between two specified points.
o CIRCLEG    -draws a circle/ellipse/arc/pie on the graphics screen.
o LIGHTPEN   -returns whether the lightpen is pressed and where it is.
o JOYSTK     -returns whether the joysticks are pressed and where they are.
o CURSORG    -displays the graphics cursor.


  
1.1.4 ALIB   -Animation (pattern paint, get and put picture).

o PAINT      -fills an area with a texture pattern.
o GETPIC     -stores a rectangular window of the screen as a string.
o PUTPIC     -puts the stored picture on the screen.


Pascal Utilities 2.0      Introduction                              Page 1-3                 










1.1.5 GUNIT  -Graphics using world coordinates (Window and Viewport transform).

o INITGUNIT  -initializes the GUNIT routines and clears the screen.
o WINDOW     -defines a window in the world coordinates for displaying.
o VIEWPORT   -defines a portion of the display screen as a clipping viewport.
o DRAW       -draws a line to the specified point in the world coordinate.
o MOVE       -moves to the specified point in the world coordinate.
o PIE        -draws a pie with filled pattern in the world coordinate.
o BAR        -draws a box with filled pattern in the world coordinate.
o CIRCLEG    -draws a cirlce/ellipse, arc, pie in the world coordinate. 
o CURSOR     -moves the graphics cursor to a point in the world coordinate.
o CURSORC    -moves the text cursor to a point in the world coordinate.  








1.2 Hardware Requirements


     The minimum hardware required by the Pascal Utilities is the same as that 
for the IBM Pascal Compiler:

o IBM Personal Computer with a minimum 128KB memory.
o Two diskette drives.       
o IBM Disk operating System (DOS 1.0, 1.1 or 2.0).
o IBM DOS Pascal Compiler.
o Monochrome Display Adapter and Monochrome Display Monitor.
  or 
  Color/Graphics Adapter and color monitor - required for color/graphics.






















Pascal Utilities 2.0      Introduction                              Page 1-4                 











2. Gereral Information      


2.1 Using the Screen

     The IBM PC has two types of display adapters:  the IBM Monochrome Display 
and  Parallel  Printer Adapter (mode 0 ..6),  and the  Color/Graphics  Monitor 
Adapter (mode 7). The characteristics of screen modes are as follows: 

     mode                Text_Column   Text_Pages

     0 : 40x25    BW         40        0 .. 7
     1 : 40x25    Color      40        0 .. 7
     2 : 80x25    BW         80        0 .. 3
     3 : 80x25    Color      80        0 .. 3
     4 : 320x200  Color      40        0 .. 0   Medium Resolution Graphics
     5 : 320x200  BW         40        0 .. 0   Medium Resolution Graphics
     6 : 640x200  BW         80        0 .  0   High Resolution Graphics
     7 : 80x25    BW         80        0 .. 0   Monochrome Adapter


     Procedure   SCREEN(mode:integer)   sets  the  screen  mode  and  Function 
SCREENMODE  returns  the current screen mode.  For a PC  with  both  adapters, 
Procedure MONO and MONITORC  switches between two monitors.






2.1.1 Writing Text

     There  are  25 rows across the screen in the text mode.  These  rows  are 
numbered from 0 to 24,  from top to bottom.  Each row has 80 (or 40, depending 
on the screen mode) character positions. 

     The  Pascal  writeln procedure displays characters from left to right  on 
each row and advance to the following row,  from row 0 to 23.  When the cursor 
would  normally go to row 24 on the screen,  row 0 through 23 are scrolled  up 
one row,  so that what was row 0 disappears from the screen.  Row 23 is blank, 
and the cursor remains on row 23 to continue printing. 

     With  the LOCATE procedure (in SLIB),  you can control the  location  for 
printing. You can build form generation and data entry programs. 










Pascal Utilities 2.0   General Information                          Page 2-1










2.1.2 Writing Graphics

     The  graphics  modes are available only for a PC  with  a  Color/Graphics 
Monitor  Adapter.  There  are 320(or 640) horizontal points and  200  vertical 
points in graphics mode. The conventional x-y coordinate system is used in the 
graphics  mode,  i.e.  (0,0)  is  at the lower left corner  and  (319,199)  or 
(639,199)  is at the upper right corner.   Each point of the 320 x 200  medium 
resolution  screen  stores values between 0 and 3 ( two bits per  point).  And 
each  640  x  200 high resolution screen stores either 1 or  0  (one  bit  per 
point).  The  'color' parameter for all the graphics write routines stores the 
specified  color value at points in the bit-map.   The Color/Graphics  Adapter 
displays color according to the following table:  
    

           Medium_Resolution_Graphics               High_Resolution_Graphics

     Color          Palette_0         Palette_1          Color   Display
     
     0              Background       Background             0      Black
     1              Green            Cyan                   1      White
     2              Red              Magenta
     3              Brown            White






2.2 Viewport and Clipping

     There  are two coordinate systems for displaying graphics on the  screen. 
They are defined as follows:

1.  The screen coordinate system defines a 320 x 200 (x,y) coordinates for the 
medium  resolution  graphics and 640 x 200 for the high  resolution  graphics. 
Where  the  lower left corner has the coordinate (0,  0) and the  upper  right 
corner  has the coordinate (319,  199) for the medium or ( 639,  199) for  the 
high  resolution  graphics.  Screen  coordinates  are specified  in  terms  of 
integers.

2.   You  can  choose any world coordinate system and define a window  in  the 
world coordinate system surrounding the information you want to display. World 
coordinates are specified in real numbers.


     In  addition to the window,  a viewport can be defined as a rectangle  on 
the  screen where you would like the window's contents displayed.   The window 
defines what you want to display;  the viewport specifies where on the  screen 
you want to put it.


     GUNIT  handles  windowing transformation which maps the window  onto  the 
viewport on the screen.   It maps the two specified corners of the window onto 


Pascal Utilities 2.0   General Information                          Page 2-2










the  corresponding  corners  of the viewport.   It maps x-coordinates  and  y-
coordinates independently. It is not necessary to have the same scaling factor 
for x and y coordinates.

     Furthermore,  GUNIT displays only that portion of an object,  i.e.  graph 
which  is inside the window.  Any part of the object not inside the window  is 
made invisible by GUNIT through a process known as clipping.

     For example, you can define a world coordinate system where x-coordinates 
are between 0.0 and 1.0 and y-coordinates are between -1.0 and 1.0.  The lower 
left  corner  has  coordinate  (0.0,  -1.0) and the  upper  right  corner  has 
coordinate  (1.0,  1.0).   If you want to map the window onto the lower  right 
quadrangle on the medium resolution  screen then you can use the following two 
procedures:

     WINDOW(0.0, -1.0, 1.0, 1.0);    {x_min, y_min, x_max, y_max }
     VIEWPORT(160, 0, 319, 100);     {lower right quangle}

     After you call these two procedure, if you use the GUNIT procedure try to 
draw a line from (-1.0,  0.0) to (1.0,  0.0) then only the portion (0.0, 0.67) 
to (1.0,  0.0) will be displayed.   The rest of the line is clipped.       

                   
     The  GUNIT  module  provides  the  world  coordinate  system  and  window 
transformation.   It  is  a Pascal unit using Assemly routines from  GLIB  and 
ALIB.    The  ALIB  and  Glib routines  display graphics only  in  the  screen 
coordinates.  The VIEW procedure (in GLIB) defines a clipping viewport for the 
GLIB and ALIB procedures.






2.3 Using the GUNIT

     Before  you  use  any procedure in GUNIT,  you must  call  the  INITGUNIT 
procedure which initializes windowing transformation.   You can call Procedure 
VIEWPORT  and  WINDOW in any order.  The most recent call resets the  previous 
transformation. 

     Since GUNIT is implemented in terms of routines from SLIB, GLIB and ALIB, 
you  must  link these object modules with the GUNIT object module  during  the 
linking step. See Section 3 for more details.











Pascal Utilities 2.0   General Information                          Page 2-3











2.4 Text and Graphics Cursors

     All  the  Pascal write routines display text at the current  text  cursor 
position on the screen.   The LOCATE procedure (in SLIB) moves the text cursor 
although  it is invisible in the graphics modes (4,  5,  &  6).   The  CURSORC 
procedure (in GUNIT) moves the text cursor in the specified world coordinates.

     A  graphics  cursor  is generated as a 5x5 cross  hair  on  the  graphics 
screen  which  is  a unique feature provided by Software  Labs.   It  is  also 
clipped by the specified viewport.   The CURSORG procedure is a GLIB procedure 
which  moves  the graphics cursor using the  screen  coordinates.  The  CURSOR 
procedure  is a GUNIT procedure which also moves the graphics cursor using the 
world coordinates.

     The  graphics  cursor  is independent of  the  graphics  write  routines.  
Unlike the text cursor, you don't have to move the graphics cursor in order to 
write graphics to the specified position.  The graphics cursor is also clipped 
by the specified viewport. You can move it out of the current viewport to make 
it invisible.        



































Pascal Utilities 2.0   General Information                          Page 2-4











3. Getting Started
 
     The  Pascal  Utilities  package  consists  of this  user's  guide  and  a 
diskette.  It is advisable to make and use a backup copy of the diskette.  Use 
the DOS command DISKCOPY as described in the DOS manual.



3.1 Diskette Files
 
 The diskette contains the following files:
  
o Screen
  SLIB.INC -procedure declarations (include file for Pascal programs).
  SLIB.OBJ -object code to be linked.
  
o Peripheral Control and Music
  PLIB.INC -procedure declarations (include file for Pascal programs).
  PLIB.OBJ -object code to be linked.

o Graphics
  GLIB.INC -procedure declarations (include file for Pascal programs).
  GLIB.OBJ -object code to be linked.
  ALIB.INC -procedure declaraction (include file for Pascal programs).
  ALIB.OBJ -object code to be linked.
  GUNIT.INC-interface declarations (include file for Pascal programs).
  GUNIT.OBJ-object code to be linked.

o Demostration program
  DEMO.PAS -Pascal source codes for a sample program -Pascal Utilities Driver.
  DEMO.EXE -execution codes.

  DEMOG.PAS-a Pascal unit for graphics and music demo.
  DEMOG.INC-interface file ( include file ).

  DEMOS.PAS-a Pascal unit for displaying color tables.
  DEMOS.INC-interface file ( include file ).

















Pascal Utilities  2.0   Getting Started                             Page 3-1










3.2 How to Compile Your Pascal Program with the Pascal Utilities

     The  'INC' files in the package are declarations for all  the  procedures 
defined  in  that module.   You must include  procedure declarations  in  your 
Pascal  program source codes to tell the Pascal Compiler that these procedures 
are  external.   You may either merge these declarations with your program  or 
use  the  Pascal Compiler '$INCLUDE' metacommand.   For example,  to  use  the 
SCREEN procedure which clears the display screen you may use either the  TEST1 
or TEST2 sample program listed below.
          
  program TEST1;                             program TEST2;        
  procedure SCREEN( mode:INTEGER);EXTERN;    {$include:'b:SLIB.INC'}
  begin                                      begin
     SCREEN(7);  {monochrome screen }          SCREEN(7);
   {use 0..6 instead of 7 for Color Monitor} 
     writeln('A clear screen');                writeln('A clear screen');
  end; { TEST1 }                             end; {TEST2}



     
     To  use  procedures  in the GUNIT,  you must include the  interface  file 
(GUNIT.INC) in your pascal program.   For example,  to draw a piece of pie  on 
the screen you may use the TEST3 program listed below.

  {$include:'B:GUNIT.INC'}          {interface file} 
  program TEST3;
  uses SoftwareLabsg(MOVE, DRAW, WINDOW, VIEWPORT, INITGUNIT, CURSOR, CURSORC,
   CIRCLG, PIE, BAR);
  begin 
    INITGUNIT(4);     {initialize the GUNIT to screen mode 4(320x200 Color)}
    VIEWPORT(159, 0, 319, 199);  {use right half screen x:159..319; y:0..199}
    WINDOW  (-1.1, -1.1, 1.1, 1.1 );  {defines the world window}
    {all the coordinates in the world coordinates are mapped onto the viewport}
    PIE( 0.0, 0.0, 1.0, 1.0, 0.0, 0.3, 3, 2, 7); {draw a piece of pie with 
      center( 0.0, 0.0), width=1.0,  length=1.0, starting angle=0.0 
      ending angle=0.3, interior color=3, boundary color=2 and pattern=7}
  end;  {TEST3}


     To   use  the Pascal utilities in your Pascal program you must  copy  the 
needed declaration files (SLIB.INC,  PLIB.INC,  GLIB.INC, ALIB.INC, GUNIT.INC) 
to the diskette containing your Pascal source codes.  Your program can then be 
compiled using procedure described on Page 2-5 of the IBM Pascal Manual.











Pascal Utilities  2.0   Getting Started                             Page 3-2










3.3 How to Link Your Program with the Pascal Utilities

     Programs  utilizing the Pascal Utilities Package  are linked in the  same 
way as any other programs utilizing subroutines libraries.  The 'OBJ' files of 
of the Pascal Utilities package are object codes to be linked with your object
codes  obtained  from the previous section.   You must copy the  needed  'OBJ' 
files from the Pascal Utilities diskette to your diskette. Linking can then be 
done by including the names of the needed 'OBJ' files.   For example,  to link 
TEST1 from the previous section you would type:

   A:link TEST1+SLIB

   where  TEST1  is the file name for your main program and SLIB is  the  only    
Pascal  Utilities  module being used in TEST1.  All the other prompts  may  be 
answered as if you are not using the Pascal Utilities.

     If  you are using more than one module from the Pascal Utilities  Package 
then you can include their file names to the list.   For example, the DEMO.OBJ 
demostration program uses all the modules the linking prompt is as follows:

   A:link DEMO+ALIB+GLIB+PLIB+SLIB+GUNIT

     Another  method  is  to copy all the needed 'OBJ' files from  the  Pascal 
Utilities  package into your PASCAL.LIB (with the Linker)  diskette.   If  the 
'OBJ' file is not in the default drive then you must write the drive name such 
as 'A:link TEST3+A:GUNIT'.

     A  hard  disk or RAM disk can increase compiling or  linking  speed.  The 
steps  for those configurations can also be set up easily.   The rule of thumb 
is that during the compiling time (PAS1 only) you must tell the compiler where 
the  needed  'INC' files are and during the linking time you  must  tell  the 
linker where the needed 'OBJ' files are. 




3.4 A Sample Program - The Pascal Utilites Driver

     A  sample program is included on the Pascal Utilities diskette.  It is  a 
menu-driven  program  which demonstrates background  music,  pie  charts,  bar 
charts,  line charts, moving pictures and color tables. It may also be used to 
test Pascal Utilities procedures with user supplied parameters. 

     Each command menu is displayed on the screen in two columns and five rows 
format corresponding to the physical arrangement of the ten function keys (F1, 
F2,  ..  F10) on the keyboard. You can press the corresponding function key to  
traverse  the command hierarchy or execute a specific routine.  You can  press 
the  ESC key to return to the previous command level or return to the DOS from 
the top command level. 

      The  driver will prompt you to enter the parameters of the procedure you 
selected. The driver then executes that routine with these parameters. All the 
returned  parameters  are  then  displayed  on  the  screen.  The  driver  was 


Pascal Utilities  2.0   Getting Started                             Page 3-3










originally developed as a debugging tool.  It allows testing each routine with 
different parameters.   More important,  it  allows testing of routines in any 
combination.      

     In addition to driving individual routines, you can execute the DEMOG and 
DEMOS  unit  from  the  top command  menu.  DEMOG  demostrates  the  following 
features:

* Plays three songs in cyclic order in background.
 
* Three viewports defined on the screen displaying Pie Charts, Bar Charts,
  and Line Charts. 
 
* Creation of a rabbit with open/close mouth.

* Creation of a turtle with moving tail.

* Displaying the graphic cursor whose y-coordinate is set by a random number.

* The rabbit moves from left to right on the screen.

* The position of the turtle is controlled by a joystick.

* Displaying all the palette and background colors.

 
     DEMOS  displays  a table of all the color/attribute of characters on  the 
screen.  The color code for a character can be obtained through its row number 
and column number. For example, the color at row 12 and column 5 is 125. 


     You  can  execute  the Pascal Utilities Driver  by  typing  'DEMO'.   Use 
function keys to traverse the command hierarchy and use the ESC key to  return 
to  the  previous  comman level.   All the other keys are ignored  except  for  
cursor move keys (left, right, up, down and home). The system time is displayed 
on  the  screen  while the program is waiting for you to  enter  a  key.   The 
current  status of the screen is continuously displayed on the screen  in  the 
following format:
     
  19:35:23 (0,13,33) [2,103]  a: 65 :   7

  where 19:25:23 is the current time,
  (0,13,33) is the cursor position (page, row, column), 
  [2,103] is the cursor size [start line, stop line],
  a: 65:  is the char, ord(char) and scan code for the last pressed key,
  and 7 is the current screen mode.









Pascal Utilities  2.0   Getting Started                             Page 3-4











4. Reference Manual

     Detail  descriptions for each routine of the Pascal Utilities are  listed 
in  this section.   All the routines,  except for the printer control routines 
are  listed  in alphabetical order.  The printer control  routines  (COMPRESS, 
DBLWIDTH, FORMFEED, PRINTCRLF, EMPHASIZE, UNEMPHA, DBLSTRIKE, UNDBLSTRIKE, and 
REGULAR) are listed under a single name 'Printer Control'.

     No real number parameters are used in ALIB,  GLIB,  SLIB and  PLIB.  Real 
number parameters are used as world coordinates in GUNIT.

     Each routine is described by its module name,  purpose,  format,  remarks 
and  examples  in this section.  









































Pascal Utilities 2.0     Reference Manual                           Page 4-1











BAR
GUNIT Procedure
________________________________________________________________________________

Purpose: Draws a box with filled pattern on the screen.

Format:  Procedure BAR(x1,y1,x2,y2:REAL;icolor,bcolor,pattern:INTEGER);

Remarks: (x1,y1) and (x2,y2) specify two points as opposite corners for the
         rectangle box in the world coordinates.

         icolor   is a numeric expression which selects one color to fill the
                  interior of the rectangle. The color is specified as follows:

                   medium_resolution(mode_4&5)       high_resolution(6)

                   icolor  Palette 0    Palette 1    icolor   display

                      0    background   backgraoud       0      black
                      1    Green        Cyan             1      white
                      2    Red          Magenta
                      3    Brown        White


         bcolor   is a numeric expression which selects one color to draw the
                  boundary of the rectangle.

         pattern  is a numeric expression which selects one out of the 40
                  available patterns as drawn in "Appendix B Pattern Patterns".

         The bar should be specified inside the viewport.


Example: INITGUNIT(4);     { initialize GUNIT 320x200 Color graphics mode }
         VIEWPORT(0,0, 159, 199); { use the left side as the current viewport}
         WINDOW(0.0, 0.0, 10.0, 1.0);  { prefer working in this window}
         BAR( 0.0, 0.0, 1.0, 0.9, 1, 2, 9); { draw a bar with pattern 9 }

See Also:PAINT, PALETTE, WRITEDOT, PIE















Pascal Utilities 2.0     Reference Manual                           Page 4-2











BORDER
SLIB Procedure
________________________________________________________________________________

Purpose: Selects the screen border color for color text modes.

Format:  Procedure BORDER(color :INTEGER);

Remarks: color     is a numeric expression which selects border color. It is in
                   the range 0 to 31.

                            color   display         color       display

                                0   Black               8       Gray
                                1   Blue                9       Light Blue
                                2   Green              10       Light Green
                                3   Cyan               11       Light Cyan
                                4   Red                12       Light Red
                                5   Magenta            13       Light Magenta
                                6   Brown              14       Yellow
                                7   White              15  High-intensity White


                   Color 16-31 select the high intensity set.

Example: SCREEN(1);
         BORDER( 4);

         This procedure selects screen mode 1 (80x25 color) and then selects
         border color Red.

See Also:SCREEN, PALETTE






















Pascal Utilities 2.0     Reference Manual                           Page 4-3











CIRCLE                  
GLIB Procedure
________________________________________________________________________________

Purpose: Draws an ellipse/circle, arc, pie on the screen.

Format:  Procedure CIRCLE(cx, cy, width, height, color, sangle, eangle:INTEGER);

Remarks: cx       is a numeric expression which selects the X-coordinate of the
                  center for the ellipse.

         cy       is a numeric expression which selects the Y-coordinate of the
                  center for the ellipse.

         width    is a numeric expression which specifies the width.

         length   is a numeric expression which specifies the length.

         color    is a numeric expression which selects one color from the
                  palette as set by the PALETTE procedure.

                   medium_resolution(mode_4&5)       high_resolution(6)

                   icolor  Palette 0    Palette 1    icolor   display

                      0    background   backgraoud       0      black
                      1    Green        Cyan             1      white
                      2    Red          Magenta
                      3    Brown        White


         sangle   is a numeric expression which specifies the starting angle
                  in DEGREE.

         eangle   is a numeric expression which specifies the endding angle
                  in DEGREE.

         The ellipse draws all the points (x,y) satisfy the following equation:

           ((x-cx)/width)*((x-cx)/width) + ((y-cy)/length)*((y-cy)/length) = 1

         It passes through these four points (cx+width, cy), (cx-width, cy),
         (cx, cy+length), and ( cx, cy-length) which are on the major and
         minor axis of the ellipse.

         If width equals length, it draws a circle.

         Sangle and eangle specify where the drawing of the ellipse will start
         and end.  The angles are positioned in the standard mathematical way,
         with 0 to the right and going counterclockwise.

         If the sangle and eangle is negative (-0 is not allowed), the ellipse


Pascal Utilities 2.0     Reference Manual                           Page 4-4











         will be connected to the center point with a line, and the angles will
         be treated as if they were positive(note that this is not the same as
         adding 360).  The start angle may be greater or less than the end
         angle.

         Both sangle and eangle are integers specified in DEGREE, rather than
         radians for your convience. Their ranges are not bounded except by the
         limit of the integer (-32767 to 32767). These angles 45, 405, and 3645
         specify the same angle.  Also, -45, -405, and -3645 specify the same
         angle but they draw an extra line to the center. To draw an
         conventional angle of (-45), you shoud use 315, or -315.

         The ellipse is clipped by the viewport specified by the VIEW procedure.

         A new digital differential algorithm is invented by the staff of the
         Software Labs. This efficient algorithm is implemted in the CIRCLE
         procedure. It is clipped against the specified viewport.

Example: SCREEN(4);     { 320X200 Color graphics mode }
         PALETTE(0, 1); { palette 0; backgraound color Blue }
         CIRCLE(50,50, 40, 40, 1, 135, 45);  {three quarter circle centered
              (450,50), radius 40, as shown on the lower left corner }

         CIRCLE(150,50, 40, 40, 1, 45,135);  {quarter circle  lower right}

         CIRCLE(50, 150, 40, 40, 1, -135, -45); { three quarter pie: upper left}

         CIRCLE(150,150, 40, 40, 1, -45,135);  {quarter pie: upper right}





















See Also:SCREEN, PALETTE, READDOT, CIRCLG




Pascal Utilities 2.0     Reference Manual                           Page 4-5











CIRCLG                  
GUNIT Procedure
________________________________________________________________________________

Purpose: Draws an ellipse/circle, arc, pie in the world coordinate.

Format:  Procedure CIRCLG(cx, cy, width, height : REAL; color:INTEGER; 
            sangle, eangle:REAL);

Remarks: cx       is a numeric expression which selects the X-coordinate of the
                  center for the ellipse in the world coordinates. 

         cy       is a numeric expression which selects the Y-coordinate of the
                  center for the ellipse in the world coordinate.

         width    is a numeric expression which specifies the width.

         length   is a numeric expression which specifies the length.

         color    is a numeric expression which selects one color from the
                  palette as set by the PALETTE procedure.

                   medium_resolution(mode_4&5)       high_resolution(6)

                   icolor  Palette 0    Palette 1    icolor   display

                      0    background   backgraoud       0      black
                      1    Green        Cyan             1      white
                      2    Red          Magenta
                      3    Brown        White

         sangle   is the starting angle in radians.

         eangle   is the ending angle in radians.

         

         The CIRCLG procedure is identical to the CIRCLE procedure except that
         it  uses the world coordinates and use radians in starting and ending 
         angles.  














Pascal Utilities 2.0     Reference Manual                           Page 4-6











COMMINIT
PLIB Function
______________________________________________________________________________

Purpose: Initializes an asynchronous port on communication board.

Format:  Function  COMMINIT(portc,baud:INTEGER; parity :CHAR;
                            stopbits,wordlen: INTEGER): WORD;

Remarks: COMMINIT retuns the status as specified in the COMMSTATUS function.

         portc   is the device  port number from 0 to 3.

         baud    is the baud rate (110,150,300,600,1200,2400,4800,9600).

         parity  is 'e' for even, 'o' for odd or 'n' for no parity.

         stopbits is 1 or 2.

         wordlen is 7 or 8 bits.

Example: status := COMMINIT(0,1200,'e',1,7);

         This function sets up the asynchronous communication port 0 with
         1200 baud, even parity, 1 stop bit and 7 bits data byte.

See Also:COMMREAD, COMMWRITE, EMUTERM



























Pascal Utilities 2.0     Reference Manual                           Page 4-7











COMMREAD
PLIB Function
___________________________________________________________________________

Purpose: Reads a byte from a selected asynchronous communication port.

Format:  Function COMMREAD(portc:INTEGER; VAR ch : CHAR):WORD;

Remarks: COMMREAD  returns the status of the port as described in COMMSTATUS.

         portc     is the device  port number from 0 to 3.

         ch        retuns a character from the specified port.

See Also:COMMWRITE, COMMINIT, EMUTERM







































Pascal Utilities 2.0     Reference Manual                           Page 4-8











COMMSTATUS
PLIB Function
________________________________________________________________________

Purpose: Returns the status of a selected asynchronous communication port.

Format:  Function COMMSTATUS(portc:INTEGER): WORD;

Remarks: COMMSTATUS returns the status as follows:

                  bit 15-8 contains the line control status
                  bit 15 = time out
                  bit 14 = trans shift register empty
                  bit 13 = tran holding register empty
                  bit 12 = break detect
                  bit 11 = framing error
                  bit 10 = parity error
                  bit  9 = overrun error
                  bit  8 = data ready
                  bit 7-0 contains the modem status
                  bit  7 = received line signal detected
                  bit  6 = ring indicator
                  bit  5 = data set ready
                  bit  4 = clear to send
                  bit  3 = delta receive line signal detected
                  bit  2 = trailing edge ring detector
                  bit  1 = delta data set ready
                  bit  0 = delta clear to send

         portc    is the device  port number from 0 to 3.


         You can define a proper record definition in order to decode from the
         packed word specification.

See Also:COMMREAD,COMMINI,EMUTERM


















Pascal Utilities 2.0     Reference Manual                           Page 4-9











COMMWRITE
PLIB Function
______________________________________________________________________

Purpose: Writes a byte to a selected asynchronous communication port.

Format:  Function COMMWRITE(portc:INTEGER; ch: CHAR): WORD;

Remarks: COMMWRITE returns the status as specified in the COMMSTATUS function.

         portc     is the device  port number from 0 to 3.

         ch        is the charater to be sent.

See Also:COMMREAD,COMMINIT,EMUTERM







































Pascal Utilities 2.0     Reference Manual                           Page 4-10











CURSOR                  CURSORG
GUNIT Procedure         GLIB Procedure
________________________________________________________________________________
Purpose: Moves the graphics cursor to the specified position on the screen.

Format:  Procedure CURSOR(x,y:REAL);
         Procedure CURSORG(ix, iy : INTEGER);

Remarks: (x,y)    specifies the destination position in the world coordinates.
         (ix,iy)  specifies the destination position in the screen coordinates.


         A graphics cursor is  generated as a 5x5 cross hair on the screen.
         It is displayed only inside the specified viewport.


Example: INITGUNIT(4);     { initialize GUNIT 320x200 Color graphics mode }
         VIEWPORT(159,0, 319, 199); { use the right side as the current
                                        viewport}
         WINDOW(-1.0, -1.0, 1.0, 1.0);  { prefer working in this window}
         CURSOR(0.0, 0.0);             { display a cross hair cursor }

See Also:LOCATE, MOVE































Pascal Utilities 2.0     Reference Manual                           Page 4-11











CURSORC
GUNIT Procedure
________________________________________________________________________________
Purpose: Moves the text cursor to the specified position on the screen.

Format:  Procedure CURSORC(x,y:REAL);

Remarks: (x,y)     specifies the destination position in the world coordinates.


         The CURSORC procedure moves the character cursor to the specified
         position.  It is equivalent to the LOCATE procedure in the SLIB.

Example: INITGUNIT(4);     { initialize GUNIT 320x200 Color graphics mode }
         VIEWPORT(159,0, 319, 199); { use the right side as the current
                                        viewport}
         WINDOW(-1.0, -1.0, 1.0, 1.0);  { prefer working in this window}
         CURSORC(0.0, 0.0);             { locate the center }
         PUTLSTRING(0, 1, 'Center');    { write character message }

See Also:CURSOR, LOCATE, MOVE

































Pascal Utilities 2.0     Reference Manual                           Page 4-12











DRAW
GUNIT Procedure
________________________________________________________________________________
Purpose: Draws a line to the specified position on the screen.

Format:  Procedure DRAW(x,y:REAL; color:INTEGER);

Remarks: (x,y)      specifies the destination position in the world coordinates.

         color      selects the drawing color.

                    <-medium resolution(mode 4&5) -> <- high resolution-(6)>
                    color  Palette 0    Palette 1     color   display
                      0    background   backgraoud       0      black
                      1    Green        Cyan             1      white
                      2    Red          Magenta
                      3    Brown        White

         A line is drawn from the current position to the destination. The
         destination position becomes the starting position for the next DRAW
         call.  This line is clipped by the specified VIEWPORT and WINDOW.
         The MOVE procedure moves the specified posiiton.


Example: INITGUNIT(4);     { initialize GUNIT 320x200 Color graphics mode }
         VIEWPORT(159,0, 319, 199); { use the right side as the current
                                        viewport}
         WINDOW(-1.0, -1.0, 1.0, 1.0);  { prefer working in this window}
         MOVE(-1.0, -1.0);             { move to the origin }
         DRAW(1.0, 1.0, 2);            { draws a diagonal line in Red }

See Also:MOVE, PALETTE, READDOT, WRITEDOT, DRAWLINE






















Pascal Utilities 2.0     Reference Manual                           Page 4-13











DRAWLINE
GLIB Procedure
________________________________________________________________________________
Purpose: Draws a line between two specified points on the screen.

Format:  Procedure DRAWLINE(x1,y1,x2,y2,color:INTEGER);

Remarks: (x1,y1) and (x2,y2) specify two end points for that line.  They are
                  clipped by the VIEW procedure as described in the WRITEDOT
                  procudure.

         color    is a numeric expression which selects one color from the
                  palette as set by the PALETTE procedure.



         To draw a box, you can use the BAR procedure in the GUNIT.

Example: SCREEN(4);     { 320X200 Color graphics mode }
         PALETTE(0, 1); { palette 0; backgraound color Blue }
         DRAWLINE(0,0, 200, 400, 2);  {draw a RED line between (0,0) and
            (200,400). Only the portion within the default viewport is visible,

See Also:SCREEN, READDOT, MOVE, DRAW, BAR






























Pascal Utilities 2.0     Reference Manual                           Page 4-14











EMUTERM
PLIB procedure
______________________________________________________________________________

Purpose: Emulates the PC as a terminal to login a remote system

Format:  Procedure EMUTERM(portc:INTEGER; exitkey, duplex: CHAR);

Remarks: portc   is the device  port number from 0 to 3.

         exitkey is the key to exit the terminal emulation and go back to
                 local system (DOS).

         duplex  selects  full duplex if it is 'f' or 'F'  otherwise  selects  
                 half duplex.

Example: The following example shows how to login to  remote system such as an
         11/70 or HP 3000.

                program TERMINAL;

                var     exitkey: char;

                procedure EMUTERM(portc:integer; exitkey,duplex:char);extern;

                begin
                  exitkey := CHR(4)       {* use control D to go back to PC *}
                  COMMINIT(0,1200,'e',1,7);
                  EMUTERM(0,exitkey,'h');
                end.

See Also:COMMREAD, COMMWRITE, COMMINIT






















Pascal Utilities 2.0     Reference Manual                           Page 4-15











GETPIC
GLIB Procedure
________________________________________________________________________________
Purpose: Stores an area of the screen in the specified string.

Format:  Procedure GETPIC(x1,y1,x2,y2:INTEGER; VAR pic : string);

Remarks: (x1,y1)  specifies the left lower corner of the area of interest. The
                  range of x1 is 0 to 319 for screen modes 4 and 5 and 0 to 639
                  for mode 6 as described in WRITEDOT.  The range of y1 is 0 to
                  199.

         (x2,y2)  specifies the upper right corner of the area. Their ranges are
                  the same as those of (x1, y1).

         pic      specifies the string to store the picture.

         As described in the SCREEN procedure, one byte stores colors for four
         points for medium resolution and stores eight points for high
         resolusiton. The starting and ending picture positions, x1 and x2 must
         be on the byte boundary. The GETPIC procedure uses the next byte
         boundary if it is not on the byte boundary. In other words, the
         conversion formula is as follows:

              medium_resolution                  high_resolution
             ( (x+3) DIV 4 ) * 4                ( (x+7) DIV 8 ) * 8


         If x is on the byte boundary, the formula returns the original value.
         Otherwise, it advances to the next byte boundary.

         There is NO restriction for Y-coordinate.

         The string pic is used simply as a place to hold the image.  The
         required minimum size of the string is :

             medium_resolution                   high_resolution
         4+(conv(x2)-conv(x1))/4*(y2-y1+1)   4+(conv(x2)-conv(x1))/8*(y2-y1+1)

         where conv is the formula described above. The information from the
         screen is stored in the string as follows:

         1. two characters giving the x dimension in bits.
         2. two characters giving the y dimension in bits.
         3. the image itself.

         Note that the format is compatible with that of the BASIC GET statement.
         GETPIC and PUTPIC can be used for high speed object motion in graphics
         mode.  You can use DRAWLINE and CIRCLE to create the boundaries and
         use PAINT to fill the interior in 40 patterns. You can then use GETPIC
         to hold the picture and use PUTPIC to display the previously saved
         picture in high speed.


Pascal Utilities 2.0     Reference Manual                           Page 4-16













Example: VAR pic : string[1024];  i : INTEGER;
         BEGIN
         SCREEN(4);                   { 320X200 Color graphics mode }
         PALETTE(0, 1);               { palette 0; backgraound color Blue }
         CIRCLE(40,40,35,35,2,0,360); { draws a circle }
         GETPIC( 0,5, 35,53, pic);    { store the picture (0,5) to (35,53) }
                                      { actually, (0,5) to (40,53)
         { Examine the x and y diemensions and the picture }
         write(' x dimension =' ord(pic(0))*256+ord(pic(1)) );
         write(' y dimension =' ord(pic(2))*256+ord(pic(3)) );
         { first 10 byte of the picture(each byte for 4 picture elements) }
         for i := 1 to 10 do
            write( ord(pic(i+4)):4);


See Also:PUTPIC, SCREEN, READDOT




































Pascal Utilities 2.0     Reference Manual                           Page 4-17











INITGUNIT
GUNIT Procedure
________________________________________________________________________________
Purpose: Initilizes the GUNIT by set default window and viewport.

Format:  Procedure INITGUNIT(mode : integer);

Remarks: mode      is a numeric expression which selects the screen mode. It is
                   among the three graphics modes 4, 5, or 6. If the specified
                   mode is out of the range then it is set to mode 4.

         The INITGUNIT( mode ) is the equivalent to the following PASCAL codes.

         procedure INITGUNIT( mode : INTEGER);
         begin
           if ( mode < 4 ) or ( mode > 6 ) then mode := 4; {graphics modes only}
           SCREEN( mode );               { clear the screen & set screen mode}
           PALETTE(0,1);                 { palette 0,  backround color Blue  }
           WINDOW( 0.0, 0.0, 1.0, 1.0 ); { default unit window }
           if mode = 6 then              { high resolution mode (6) ? }
             VIEWPORT(0, 0, 639, 199)    { maximum size viewport for high resol}
           else
             VIEWPORT(0, 0, 319, 199);   { maximum size viewport for medium res}
         end; { INITGUNIT }


Example: INITGUNIT(4);
         WINDOW(-50.0, -1.0, 0.0, 1.0);
         VIEWPORT(0, 0, 319, 100);

         This procedure inititlize the GUNIT by selecting  screen mode 4 and
         selects the window bounded by two corners (-50.0, -1.0) and (0.0,1.0).
         It selects a viewport as the lower half screen. All the graphics
         calls from the GUNIT maps all the points on the window onto their
         corresponding positions on the screen.


See Also:VIEWPORT, WINDOW
















Pascal Utilities 2.0     Reference Manual                           Page 4-18











INKEY
SLIB Function
________________________________________________________________________________
Purpose: Returns whether a key is pressed from the keyboard and what it is.

Format:  FUNCTION INKEY(VAR ch:CHAR; VAR scan:INTEGER):BOOLEAN;

Remarks: INKEY  returns true if at least one key is pressed otherwise false.

         ch     returns the ASCII character read from the keyboard. It returns
                CHR(0), the null character for special keys such as function
                keys.

         scan   returns the extended code.  For a complete list of these codes,
                see  "Appendix  G.  ASCII Character Codes"  of  the  IBM-BASIC 
                Manual.


         While INKEY is being used, no characters are displayed on the screen
         (no echoing) and all characters are passed to the program except for:

         *   Ctr-Num Lock, which sends the system into a pause state.
         *   Alt-Ctrl-Del, which does a System Reset.
         *   PrtSc, which prints the screen.

         If you press Enter in response to INKEY, the carriage return character
         passes through to the function.


Example: The following statements stop the program until any key on the keyboard
         is pressed:

            write('Press any key to continue');
            while not INKEY(ch, scan) do { do nothing here }  ;

         If the function key F0 is pressed, INKEY returns true, ch returns
         CHR(0) and scan returns 59.

         You may change the "do nothing here" by other statements such as
         controlling or checking other peripherals(light pen, joystick, RS232).


         The Next example stops the program until any function key is pressed:

            while (scan < 59 ) or ( scan > 68 ) do {scan code 59-68 for F0-F10}
                while  not INKEY( ch, scan ) do {nothing}  ;








Pascal Utilities 2.0     Reference Manual                           Page 4-19











INPORT
PLIB Function
_______________________________________________________________________________

Purpose: Returns the byte read from an input port.

Format:  Function INPORT(porti:INTEGER):integer;

Remarks: porti must be in the range 0 to 65535.
         Refer  to the IBM personal computer Technical Reference manual for  a 
         description of valid port numbers (I/O address).

Example: num := INPORT(255); 
         
         This instruction reads a a byte from port 255 and assigns it to the 
         integer variable num.

See Also:OUTPORT




































Pascal Utilities 2.0     Reference Manual                           Page 4-20











JOYSTICK                  JOYSTK
PLIB Procedure              GLIB Procedure
_____________________________________________________________________________

Purpose: Returns the status and position of the joystick.

Format:  Procedure JOYSTICK(VAR ax,ay,bx,by,a1,a2,b1,b2:integer);
         Procedure JOYSTK  (VAR ax,ay,bx,by,a1,a2,b1,b2:integer);

Remarks: (ax,ay)  returns x and y positon of the first joystick.

         (bx,by)  returns x and y positon of the second joystick.

         a1,a2    return the status of two buttons for the first joystick.
                  It returns 0 for pressed button and returns 1 for released
                  button.

         b1,b2    return the status of two buttons for the second joystick.
                  It returns 0 for pressed button and returns 1 for released
                  button.

         The (x,y) position for the center and four corners  are returned as
         as follows:

                (1,17)          (15,17)

                         (7,9)

                (1, 1)          (15, 1)


        

         If there is no joystick connected then x and y return 25.




















Pascal Utilities 2.0     Reference Manual                           Page 4-21












LIGHTPEN
SLIB Function
________________________________________________________________________________
Purpose: Returns the status/position of the light pen.

Format:  FUNCTION LIGHTPEN(VAR row, column, x, y:INTEGER):BOOLEAN;

Remarks: LIGHTPEN   returns false if light pen switch is not down/triggered,
                    otherwise returns true and its posiiton.

         row,column returns the row and column on the screen. The range of row
                    is 0 to 24. And the range of column is 0 to 79 for modes
                    2, 3 and 6,  and 0 to 39 otherwise as described in the
                    READCURSOR procedure.

         x,y        returns the graphics position.  The range of pixy is 0 to
                    199. And the range of pixx is 0 to 319 for screen modes 4
                    and 5, and 0 to 639 for mode 6.  Remember, the coordinate
                    for the left lower corner is (0,0) as described in the
                    WRITEDOT procedure.


Example: while not LIGHTPEN(row, col, x, y) do
              { do nothing until the light pen is triggered } ;
         if row < 5 then begin
            { the use selects region 1 } end;
         else if row < 15 then begin
            { the user selects region 2 } end;
         else begin
            { the user selects region 3 } end;

See Also:READCURSOR, CURSOR, CURSORC, LOCATE























Pascal Utilities 2.0    Reference Manual                            Page 4-22










LOCATE
SLIB Procedure
________________________________________________________________________________
Purpose: Positions the cursor on the selected screen page.

Format:  PROCEDURE LOCATE(page, row, col : INTEGER);

Remarks: page   is a numeric expression in the range 0 to 7 for screen modes 0
                and 1, 0 to 3 for modes 2 and 3, and 0 for modes 4 to 7. For a
                complete list of these screen modes, see the Remarks in the
                SCREEN procedure.

         row    is a numeric expression in the range 0 to 24. It indicates the
                the screen line number where you want to place the cursor. The
                lines are numbered 0 to 24, from top to bottom.

         col    is a numeric expression in the range 0 to 39 for screen modes 0,
                1,4 and 5,  and in the range 0 to 79 for modes 2,3,6 and 7. It
                indicates the screen column number where you want to place the
                cursor. The columns are numbered 0 to 39 (or 79) from left to
                right.

         After a LOCATE procedure, I/O procedures onto the screen begin placing
         characters at the specified position, although the character cursor is
         not displayed for screen modes 4,5 and 6 (graphics modes).  The I/O
         procedures include read, write(the original PASCAL procdure), putchar,
         putstring and putlstring (Software Labs SLIB).

         Without using LOCATE, the PASCAL writeln procedure displays characters
         from left to right on each line and advance to the following line, from
         line 0 to 23. When the cursor would normally go to line 24 on the
         screen, line 0 through 23 are scrolled up one line, so that what was
         line 0 disappears from the screen. Line 23 is blank, and the cursor
         remains on line 23 to continue printing.  With the LOCATE procedure,
         you may control the location of each I/O procedure on the screen.

         To design a tabular I/O form, you may use LOCATE to position, and
         PUTLSTRING to write text in normal, blink and high intensity.

         To use multiple pages, you may create a screen page without displaying
         and then use the SELECTPAGE to display the prepared page.  You may
         swap these display pages.

Example: The following statements move the cursor to the upper left corner
         of the screen and prints one line message:

            LOCATE(0, 0, 0);
            write('Customer name:');


See Also:READCURSOR, NEWCURSOR




Pascal Utilities 2.0    Reference Manual                            Page 4-23










MONITORC
SLIB Procedure
________________________________________________________________________________
Purpose: Switches to the Color/Graphics Monitor.

Format:  Procedure MONITORC;

Remarks: If you have both the Color/Graphics Monitor Adapter and the Monochrome
         Display and Parallel Printer Adapter, this procedure can switch to the
         Color Monitor.

         This procedure also calls SCREENG(4) which set the Color screen to
         mode 4 (320x200 Color) and clears the screen.  The original Monochrome
         screen is not cleared.


Example: MONITORC;          { Switch to the Color Monitor and clear screen }

See Also:MONO               { switch to the Monochrome Monitor }




































Pascal Utilities 2.0    Reference Manual                            Page 4-24










MONO
SLIB Procedure
________________________________________________________________________________
Purpose: Switches to the Monochrome Monitor.

Format:  Procedure MONO;

Remarks: If you have both the Color/Graphics Monitor Adapter and the Monochrome
         Display and Parallel Printer Adapter, this procedure can switch to the
         Monochrome Monitor.

         This procedure also calls SCREEN(7) which set the Monochrome screen to
         mode 7 (80x25 BW Text) and clears the screen.  The original Color
         screen is not cleared.


Example: MONO;           { Switch to the Monochrome Monitor and clear screen }

See Also:MONITORC;               { switch to the Color Monitor }




































Pascal Utilities 2.0    Reference Manual                            Page 4-25










MOVE
GUNIT Procedure
________________________________________________________________________________
Purpose: Move to the specified position on the screen.

Format:  Procedure MOVE(x,y:REAL);

Remarks: (x,y)         specifies the destination position.


         It is used to prepare for the DRAW procedure.

Example: INITGUNIT(4);     { initialize GUNIT 320x200 Color graphics mode }
         VIEWPORT(159,0, 319, 199); { use the right side as the current
                                        viewport}
         WINDOW(-1.0, -1.0, 1.0, 1.0);  { prefer working in this window}
         MOVE(-1.0, -1.0);             { move to the origin }
         DRAW(1.0, 1.0, 2);            { draws a diagonal line in Red }

See Also:DRAW, DRAWLINE, LOCATE



































Pascal Utilities 2.0    Reference Manual                            Page 4-26










MUSICINIT, MUSICLOAD, MUSICGO, MUSICON, MUSICSTOP
PLIB Procedure
___________________________________________________________________________

Purpose: Plays music.

Format:  Procedure MUSICINIT;
         Procedure MUSICLOAD(tempo:CHAR;ntimes: INTEGER; s1,s2,s3: LSTRING);
         Procedure MUSICGO;
         Function  MUSICON : BOOLEAN;
         PROCEDURE MUSICSTOP;

Remarks: MUSICINIT-  initializes the rest of the music routines.
         MUSICLOAD-  loads music buffer to be played.
         MUSICGO-    starts to play music from the music buffer in background.
         MUSICON-    returns whether the background music is still playing.
         MUSICSTOP-  stops the background music.


         MUSICINIT initializes the interrupt routine for music to be played in
         the background.  You must call it before you call any other music
         routines. You should not call it for the second time before you call
         the MUSICSTOP procedure.

         You can load a music buffer using the MUSICLOAD procedure. The music
         buffer stores laric specification, length of each note, and level of
         frequencies in three lstrings.

         You can start playing music in background using the MUSICGO procedure.

         Function MUSICON returns true if the background music is still playing
         and returns false otherwise. You can use this function to check whether
         the music is still playing.

         (continue to next page) 




















Pascal Utilities 2.0    Reference Manual                            Page 4-27










         The music buffer is loaded with strings  defined  as follows:
         tempo     is the speed of beats
                      'S' = slow,   ( 55-65 beats per minute)
                      'M' = medium, ( 75-85 beats per minute)
                      'F' = fast,   (115-125 beats per minute)

         ntimes    is the number of times the music buffer will be played.

         S1        is the laric specification
                      '0' is a pause  note;
                      '1','2','3','4','5','6','7' plays the indicated note.
                      '.' is one half of the previous note;
                      '|' and  ' ' are neglected.

         S2        is the length of each note in S1
                      '-' is a half note;
                      '=' is a quarter note;
                      ' ' is a full note.

         S3        is the level of frequencies
                      '.' is a low note;
                      ' ' is a regular note;
                      '^' is a higher note;
                      '~' is a highest note.

         The corresponding positions of these three lstrings should be aligned.
         An example is as follows:
           S1 := '| 1.2345- | 6416 | 5--0 |';
           S2 := '  - =--                  ';
           S3 := '  . ....      ^          ';
           MUSICLOAD('F',10,S1,S2,S3);   { Fast movement,play for ten times}

         After music finished, you can replay the same buffer using the
         MUSICGO procedure. It is not necessary to reload the same buffer.

         To play music in foreground,  you can use while or repeat loop waiting
         for the status of the MUSICON  function becomes false.

         Since the music buffer can store up to 255 notes, you can load and play
         another buffer as soon as the current music finishes.
         Since the music procedures depend on the system time interrupt, it may
         not work properly when the DOS system time interrupt routine has been
         modified by other programs.
Example: MUSICINIT;                      {* Invoke interrupt routine }
         S1 := '| 1.2345- | 6416 | 5--0 |';
         S2 := '  - =--                  ';
         S3 := '  . ....      ^          ';
         MUSICLOAD('F',10,S1,S2,S3);      {Fast movement,play for ten times }
         MUSICGO;                     { start playing the loaded music buffer}
         while
           MUSICON do  { any Pascal Block statements }   ;
         MUSICSTOP;                      {* Stop the backgroud music}



Pascal Utilities 2.0    Reference Manual                            Page 4-28










NEWCURSOR
SLIB Procedure
________________________________________________________________________________
Purpose: Defines the size/shape of the text cursor.

Format:  PROCEDURE NEWCURSOR(start, stop:INTEGER);

Remarks: start  is a numeric expression in the range 0 to 32. It indicates the
                cursor starting scan line.

         stop   is a numeric expression in the range 0 to 31. It indicates the
                cursor stop scan line.

         The scan lines are numbered from 0 at the top of the character
         position.  The bottom scan line is 7 for the Color/Graphics Monitor
         Adapter, 13 for the IBM Monochrome Display and Parallel Printer
         Adapter.  If start is greater than stop, you'll get a two-part cursor.
         The cursor "wraps" from the bottom line back to the top. If the bit
         5 or 6 of start is one then the cursor is invisible.

Example: The following example makes the cursor invisible.

            NEWCURSOR(32, 0);


See Also:LOCATE, READCURSOR





























Pascal Utilities 2.0    Reference Manual                            Page 4-29










NUMDISK, NUMGAME, NUMMEMORY, NUMPRAM, NUMPRINTER, NUMCOMM
PLIB Functions
__________________________________________________________________________

Purpose: Returns the number of disks,  games, memoery, planar RAM, printers,
         and communication ports.

Format:  Function  NUMDISK:    integer;
         Function  NUMGAME:    integer;
         Function  NUMMEMORY:  integer;
         Function  NUMPRAM:    integer;
         Function  NUMPRINTER: integer;
         Function  NUMCOMM:    integer;

Remarks: These routines returns the number of equipment attached at the boot
         time as follows:
         NUMDISK :   disk drives (0..4).
         NUMGAME :   game adapters (0..1).
         NUMMEMORY : number of K RAM memory, i.e. 64 for 64K, 128 for 128 K
                       etc.
         NUMPRAM :   planar RAM size(16, 32, 48, 64 for 16K, 32K, 48K, 64K
                       respectively.
         NUMPRINTER: printers (0..3).
         NUMCOMM :   asynchronous communication ports (RS232).































Pascal Utilities 2.0    Reference Manual                            Page 4-30










OUTPORT
PLIB Procedure
________________________________________________________________________________
Purpose: Sends a byte to a machine output port.

Format:  Procedure OUTPORT(porto, valueo:INTEGER);

Remarks:  porto   is a numeric expression for the port number,  in the range 0 
                  to  65535.   Refer  to the IBM Personal  computer  Technical 
                  Reference manual for a description of valid port number (I/O 
                  addresses).

          valueo  is a numeric expression for the data to be transmitted,  in 
                  the range 0 to 65535.

Example:  OUTPORT(32,50);

          This instruction sends the value 50 to output port 32.

See Also:INPORT.



































Pascal Utilities 2.0    Reference Manual                            Page 4-31










PAINT
GLIB Procedure
________________________________________________________________________________
Purpose: Fills in an area on the screen with the selected color and pattern.

Format:  Procedure PAINT(x,y,icolor,bcolor,pattern:INTEGER);

Remarks: (x,y)           specify the coordinates of a point within the area to
                         be painted. This point is used as a seeding point to
                         fill the rest of the area.

         icolor          is a numeric expression which selects one color to fill
                         the interior of the rectangle. The color is specified
                         as described in the BAR procedure.

         bcolor          is a numeric expression which selects one color to draw
                         the boundary of the rectangle.

         pattern         is a numeric expression which selects one out of the 39
                         available patterns as drawn in "Appendix B Fill
                         Patterns".


         A new pattern fill algorithm is invented by the staff of Software Labs
         to implement this PAINT procedure.  This efficient algorithm works
         for an arbitrary boundary. Within the outer boundary,   you can have
         other boundaries to 'protect' the regions that you don't want it to
         fill.



























Pascal Utilities 2.0    Reference Manual                            Page 4-32










PALETTE
GLIB Procedure
________________________________________________________________________________
Purpose: Select a palette and background color for medium resolution
         graphics mode (mode 4).

Format:  Procedure PALETTE(palettenum, background :INTEGER);

Remarks: palettenum  is a numeric expression which selects either palette 0 or
                     palette 1.  If palettenum is an even number, palette 0 is
                     selected. If palettenum is an odd number, palette 1 is
                     selected.

         background  is a numeric expression which sets the background color.
                     The range for background is 0 through 15, as described in
                     the BORDER for text mode.

         Once the palette is chosen, the parameter 'color' in the GLIB routines
         such as WRITEDOT, DRAWLINE, CIRCLE, or PAINT selects color as follows:

              color     Palette_0       Palette_1

                0       Background      Background
                1       Green           Cyan
                2       Red             Magenta
                3       Brown           White

         For palette 0, the colors Green, Red, and Brown associates to the color
         number 1, 2, and 3 respectively.  Similarly, the colors Cyan, Magenta,
         and White associates to the color number 1, 2, and 3 respectively.

         The color selected for background may be the same as any of the palette
         colors.


Example:      PALETTE( 0, 1);

         This procedure selects palette 0 and background blue.


See Also:BORDER, SCREEN














Pascal Utilities 2.0    Reference Manual                            Page 4-33










PIE
GUNIT Procedure
________________________________________________________________________________
Purpose: Draws a pie with filled pattern on the screen.

Format:  Procedure PIE(cx,cy,a,b,sangle,eangle:REAL;icolor,bcolor,  pattern:
          INTEGER);

Remarks: (cx,cy)         specifies the center for the ellipse.

         (a,b)           specifies the width and length of the ellipse.

         (sangle,eangel) specifies the starting and endding angle in RADIANS.
                         They should in the range bounded by the real number
                         limits.

         icolor          is a numeric expression which selects one color to fill
                         the interior of the rectangle. The color is specified
                         as described in the BAR procedure.

         bcolor          is a numeric expression which selects one color to draw
                         the boundary of the rectangle.

         pattern         is a numeric expression which selects one out of the 39
                         available patterns as drawn in in the PAINT routine.

         Angles are specified in RADIANS for the PIE procedure. And in DEGREES
         in the circle procedure.  Degrees are specified in integer and RADIANS
         are specified in real numbers. Integer calculation is more efficient
         than real number calculation.  However, you can work on the chosen
         coordinate system through the GUNIT procedures which is a more
         convenient environment.

Example: INITGUNIT(4);     { initialize GUNIT 320x200 Color graphics mode }
         VIEWPORT(159,0, 319, 199); { use the right side as the current
                                        viewport}
         WINDOW(-1.1, -1.1, 1.1, 1.1);  { prefer working in this window}
         PIE(0.0, 0.0, 1.0, 1.0, 0.0, 0.3, 3, 2, 7); {draw a pie with pattern 7}

See Also:PAINT, PALETTE, READDOT, WRITEDOT, BAR, CIRCLE















Pascal Utilities 2.0    Reference Manual                            Page 4-34










PRINTER CONTROL routines
PLIB procedures
____________________________________________________________________________

Purpose: Controls  an EPSON or IBM printer.

Format:  Procedure COMPRESS(port);
         Procedure DBLWIDTH(port);
         Procedure FORMFEED(port);
         Procedure PRINTCRLF(port);
         Procedure EMPHASIZE(port);
         Procedure UNEMPHA(port);
         Procedure DBLSTRIKE(port);
         Procedure UNDBLDSTRIKE(port);
         Procedure REGULAR(port);

Remarks: These printer control routines set the mode for an EPSON or IBM
         printer.  Once a mode is set, all the following characters are printed
         according to the mode.  The printer modes are set as follows:

         COMPRESS   -  Compresses the width of characters.
         DBLWIDTH   -  Double the width of characters.
         FORMFEED   -  Moves the paper to next print page.
         PRINTCRLF  -  Prints CR-LF (carriage return- line feed).
         EMPHASIZE  -  Prints bold characters.
         UNEMPHA    -  reset the EMPHASIZE mode.
         DBLSTRIKE  -  Double strike eack dot pattern.
         UNDBLDSTRIKE- reset the DBLSTRIKE mode.
         REGULAR    -  reset to the regular mode.

         port is the printer port number 0 or 1.

See Also:PRINTINIT, PRINTCHR, PRINTLSTRING






















Pascal Utilities 2.0    Reference Manual                            Page 4-35










PRTCHR
PLIB Function
________________________________________________________________________

Purpose: Prints a character on an EPSON or IBM printer.

Format:  Function PRTCHR(port: INTEGER; ch: CHAR);

Remarks: port is the printer port number 0 or 1

         ch is the ASCII character to be printed.

See Also:PRTINIT, PRTLSTRING, PRTSTATUS, and PRINTER CONTROL.










































Pascal Utilities 2.0    Reference Manual                            Page 4-36










PRTINIT
PLIB procedure
________________________________________________________________________

Purpose: initializes a printer port.

Format:  Procedure PRTINIT(Port: integer);

Remarks: port is the printer port number 0 or 1

         You must call this initialization routine before you call any other
         printer control routines.











































Pascal Utilities 2.0    Reference Manual                            Page 4-37










PRTLSTRING
PLIB procedure
___________________________________________________________________________

Purpose: Prints an lstring on an EPSON or IBM printer.

Format:  Procedure PRTLSTRING(port: integer;const line: Lstring);

Remarks: port is the printer port number 0 or 1

         line is the lstring to be printed.

         A CR-LF will be printed after the line.

See Also:PRTINIT, PRTCHR, and other PRINT CONTROL routines.








































Pascal Utilities 2.0    Reference Manual                            Page 4-38










PRTSTATUS
PLIB procedure
_________________________________________________________________________

Purpose: Returns the status of an EPSON or IBM printer.

Format:  Function  PRTSTATUS(port: integer): WORD;

Remarks: PRTSTATUS returns the status as follows:

                bit 15 = busy
                bit 14 = acknoledge
                bit 13 = out of page
                bit 12 = selected
                bit 11 = I/O error
                bit  8 = time out

         port is the printer port number 0 or 1


See Also:PRTINIT, PRTCHR, and PRINTER CONTROL routines.


































Pascal Utilities 2.0    Reference Manual                            Page 4-39











PUTCHAR
SLIB Procedure
________________________________________________________________________________
Purpose: Writes a character with attribute at the current cursor position.

Format:  Procedure PUTCHAR(page, attribute, count:INTEGER; ch : CHAR);

Remarks: page        is a numeric expression which selects a display page. Its
                     range depends on the screen mode as described in the SCREEN
                     procedure.

         attribute   is a numeric expression which sets the attribute/color as
                     follows:
                        For IBM Monochrome Display and Parallel Printer Adapter
                        attribute          Display
                          0,128            invisible
                          1                underline
                          2                normal (white on black background)
                          9                high intensity underline
                          10               high intensity
                          120              reverse video (blank on white )
                          129 (128+1)      blinking & underline
                          130 (128+2)      blinking normal
                          137 (128+9)      blinking,high intensity and underline
                          138 (128+10)     blinking high intensity
                          248 (128+120)    blinking reverse video

                        For Color/Graphics Adapter
                        Eight bits are used to represent 256 (0 to 255)
                        combinations of foreground and background colors.
                        The lower four bits represent sixteen foreground color.
                        The next three bits represent the first eight of the
                        sixteen foreground color. And the most significant bit
                        represents blinking bit.

                        attribute     color           attribute color
                                0   Black               8       Gray
                                1   Blue                9       Light Blue
                                2   Green              10       Light Green
                                3   Cyan               11       Light Cyan
                                4   Red                12       Light Red
                                5   Magenta            13       Light Magenta
                                6   Brown              14       Yellow
                                7   White              15  High-intensity White

                        The attribute for any combination can be calculated as
                        follows:
                           attribute=blinking*128 + background*16 + foreground

         count       is a numeric expression which indicates the number of
                     characters to write.

         ch          is the character code


Pascal Utilities  Reference Manual                                 Page 4-40










         You may press 'DEMOS' function key, from the main menu of the Pascal
         Utilities Driver to display a table of all the attributes on the
         scrren.  You  can  locate an attribute by its row number  and  column 
         number.  For example the attribute displayed at row 5 and column 7 is
         57.

Example:     SCREEN(1);     { 40X25 color text screen mode }
             BORDER(2);    { sets BORDER color green }
             LOCATE(0, 5, 15); {move cursor to page 0, row 5, column 15 }
             PUTCHAR(0, 65, 20, 'a' ); { write 20 'a' Blue on Red Background }
                                { attribute 65= 0*128+ 4 (Red) *16 + 1 }
             PUTCHAR(0,132, 1, chr(1)); { write a Blinking Red smilling face }
                                { attribute 132=1*128+ 0*16 + 4 (Red) }

See Also:BORDER, SCREEN, PUTLSTRING, PUTSTRING








































Pascal Utilities  Reference Manual                                 Page 4-41










PUTLSTRING
SLIB Procedure
________________________________________________________________________________
Purpose: Writes an lstring with attribute at the current cursor position.

Format:  Procedure PUTLSTRING(page, attribute:INTEGER; CONST ls:LSTRING);

Remarks: page        is a numeric expression which selects a display page. Its
                     range depends on the screen mode as described in the SCREEN
                     procedure.

         attribute   is a numeric expression which sets the attribute/color as
                     described in the PUTCHAR procedure.

         length      is a numeric expression which indicates the number of
                     characters in the string to write.

         ls          is an  lstring.


Example:   VAR  ls : LSTRING(80);
           BEGIN
             SCREEN(1);     { 40X25 color text screen mode }
             BORDER(2);    { sets boarder color green }
             LOCATE(0, 5, 15); {move cursor to page 0, row 5, column 15 }
             PUTLSTRING(0, 65,'ABCDE' ); { write the constant lstring  }
                                         { Blue on Red background}
             PUTSTRING(0, 65, 4, ls); { write the lstring ls }

See Also:BORDER, SCREEN, PUTCHAR, PUTSTRING

























Pascal Utilities  Reference Manual                                 Page 4-42










PUTPIC
GLIB Procedure
________________________________________________________________________________
Purpose: Put a picture on the screen from a specified string.

Format:  Procedure PUTPIC(x1,y1,action:INTEGER; pic : string);

Remarks: (x1,y1)  specifies the left lower corner for puting the picture. The
                  range of x1 is 0 to 319 for screen modes 4 and 5 and 0 to 639
                  for mode 6 as described in WRITEDOT.  The range of y1 is 0 to
                  199.  As described in the GETPIC procedure, if x1 is not on
                  a byte boundary then the next byte boundary is used for x1.
                  The same conversion formula is applied to x as follows:

                  medium resolution                  high  resolution
                  ( (x+3) DIV 4 ) * 4                ( (x+7) DIV 8 ) * 8

                  There is NO restriction for Y-coordinate except it must be
                  in the range of 0 to 199.

         action   is a numeric expression represents the following actions:

                  action  function   result
                   0      XOR        XOR(p(),s())
                   1      PSET       p()
                   2      OR         OR(p(),s())
                   3      AND        AND(p(),s())
                  -1      NEG        COMPLEMENT(p())

                  If action is not in the range -1 to 3, it is used as 0 (XOR).

         pic      specifies the string to store the picture. It can be stored
                  from the GETPIC or created from programs. The format is
                  described  in the GETPIC procedure.

                    1. two characters giving the x dimension in bits.
                    2. two characters giving the y dimension in bits.
                    3. the image itself.

         Note that the format is compatible with that of the BASIC GET statment.
         GETPIC and PUTPIC can be used for high speed object motion in graphics
         mode.  You can use DRAWLINE and CIRCLE to create the boundaries and
         use PAINT to fill the interior in 40 patterns. You can then use GETPIC
         to hold the picture and use PUTPIC to display the previously saved
         picture in high speed.

         XOR is a special mode which may be used for animation.  XOR causes the
         points on the screen to be inverted where a point exists in the string.
         XOR has a unique property that makes it especially useful for
         animation: when an image is put against a background twice, the
         original background is restored unchanged. This property allows an
         object to move around without destroying the background.



Pascal Utilities  Reference Manual                                 Page 4-43










         Animation of an object can be performed as follows:
         1. Create the object (CIRCLE, DRAWLINE, PAINT).
         2. Store the object (GETPIC).
         3. Write the object on the original position (with XOR) to erase it.
            Step 1-3 are used to create the object.

         4. Write the object on the screen (PUTPIC with  XOR action).
         5. Calculate the new position of the object.
         6. Write the object a second time at the old location to erase the old
            image (PUTPIC with XOR action).
         7. position <- new position; Go to Step 4.

         An object will be observed as moving on the screen. 










































Pascal Utilities  Reference Manual                                 Page 4-44










PUTSTRING
SLIB Procedure
________________________________________________________________________________
Purpose: Writes a string with attribute at the current cursor position.

Format:  Procedure PUTSTRING(page, attribute, length:INTEGER; CONST s:STRING);

Remarks: page        is a numeric expression which selects a display page. Its
                     range depends on the screen mode as described in the SCREEN
                     procedure.

         attribute   is a numeric expression which sets the attribute/color as
                     described in the PUTCHAR procedure.

         length      is a numeric expression which indicates the number of
                     characters in the string to write.

         s           is a string.


Example:   VAR  s : STRING(80);
           BEGIN
             SCREEN(1);     { 40X25 color text screen mode }
             BORDER(2);    { sets boarder color green }
             LOCATE(0, 5, 15); {move cursor to page 0, row 5, column 15 }
             PUTSTRING(0, 65, 4, 'ABCDE' ); { write the first four characters }
                                { of the constant string Blue on Red background}
                                { attribute 65= 0*128+ 4 (Red) *16 + 1 }
             PUTSTRING(0, 65, 4, s); { write the first 4 characters of s }
           END;

See Also:BORDER, SCREEN, PUTCHAR, PUTLSTRING























Pascal Utilities  Reference Manual                                 Page 4-45










RND,       RANDOMIZE
PLIB function
________________________________________________________________________

Purpose: Returns a random number between 0 and 65535.

Format:  Function   RND: WORD;
         Procedure  RANDOMIZE( seed : WORD);

Remarks: RND returns the next random number between 0 and 65535.

         RANDOMIZE reseeds the random number generator with the new seed
         which is between 0 and 65535.

         In order to obtain a random number between -32768 and 32767, you  can
         use the following declarations:

          Function   RND : INTEGER;
          Procedure  RANDOMIZE( seed : INTEGER);


Example: The following example shows how to generate a number between 1 and 6.
         It can be used to simulate a dice.

         dice := RND mod 6;     { dice is between 0 and 5 now }
         dice := dice + 1;

         You don't have to call the RANDOMIZE procedure.



























Pascal Utilities  Reference Manual                                 Page 4-46










READCURSOR
SLIB Procedure
________________________________________________________________________________
Purpose: Reads the current cursor position and type/size.

Format:  PROCEDURE READCURSOR(page:INTEGER; VAR row, col,start,stop : INTEGER);

Remarks: page   is a numeric expression in the range 0 to 7 for screen modes 0
                and 1, 0 to 3 for modes 2 and 3, and 0 for modes 4 to 7. For a
                complete list of these screen modes, see the Remarks in the
                SCREEN procedure.

         row    returns the current row (line) position of the cursor on the
                specified page. The returned value will be in the range 0 to 24.

         col    returns the current column position of the cursor on the
                specified page. The returned value will be in the range 0 to 39
                or 0 to 79, depending on the current screen mode.

         start  returns the cursor starting line as described in the NEWCURSOR
                procedure.

         stop   returns the cursor stop line as described in the NEWCURSOR             
                procedure.

Example: The following example advances to the following line if the cursor
         is beyond position 60 on page 0.

            readcursor(0, row, col, start, stop);
            if col > 60 then writeln;


See Also:LOCATE, NEWCURSOR






















Pascal Utilities  Reference Manual                                 Page 4-47










READDOT
GLIB Function
________________________________________________________________________________
Purpose: Returns the color at the specified position on the screen.

Format:  Function READDOT(x, y :INTEGER):INTEGER;

Remarks: READDOT returns the color in the range 0 to 3 for medium resolution
                   (modes 4 and 5), and returns 0 or 1 for high resolution (mode
                   6) as described in the PALETTE procedure.

                    <-medium resolution(mode 4&5) -> <- high resolution-(6)>
                    color  Palette 0    Palette 1     color   display
                      0    background   backgraoud       0      black
                      1    Green        Cyan             1      white
                      2    Red          Magenta
                      3    Brown        White

         x         is a numeric expression which selects the X-coordinate of the
                   point.

         y        is a numeric expression which selects the Y-coordinate of the
                  point.


Example: SCREEN(4);     { 320X200 Color graphics mode }
         PALETTE(0, 1); { palette 0; backgraound color Blue }
         WRITEDOT(5, 25, 1); { Green(1) dot (5, 25) }
         WRITEDOT(5, 25, 3+128);  { The dot (5, 25) has the color Red because
                                  XOR(3,1) is 2 which is Red in palette 0 }
         writeln(' Color code at (5,25) is ', READDOT(5,25));  { returns 2 }
         WRITEDOT(5, 25, 2+128);  { The dot (5, 25) has the background color}


See Also:SCREEN, PALETTE, WRITEDOT




















Pascal Utilities  Reference Manual                                 Page 4-48










SCREEN                SCREENG
SLIB Procedure        GLIB Procedure
________________________________________________________________________________
Purpose: Set the screen mode and clears the screen.

Format:  PROCEDURE SCREEN(mode :INTEGER);
         PROCEDURE SCREENG(mode:INTEGER);
 
Remarks: mode   is a numeric expression in the range 0 to 6 for the
                Color/Graphics Adapter as follows:

                     mode                Text Column   Text Pages
                     0 : 40x25    BW         40        0 .. 7
                     1 : 40x25    Color      40        0 .. 7
                     2 : 80x25    BW         80        0 .. 3
                     3 : 80x25    Color      80        0 .. 3
                     4 : 320x200  Color      40        0 .. 0       Graphics
                     5 : 320x200  BW         40        0 .. 0       Graphics
                     6 : 640x200  BW         80        0 .. 0       Graphics
                     7 : 80x25    BW         80        0 .. 0 Monochrome Adapter

                No matter what mode is passed to IBM Monochrome Display
                and Parallel Printer Adapters, it is reset to mode 7.

         There are 16K bytes in a Color/Graphics Adapter. One bit is used to
         store the color for each dot of 640x200 elements in mode 6. The 16K
         bytes memory can be used to store four pages color text in mode 3.
         Two bytes are used to store each characters in Text mode, one byte
         for the color/attributs, and the other byte for the code itself.

         You may prepare multiple pages and select one for displaying by using
         LOCATE, SELECTPAGE, PUTLSTRING, PUTSTRING and PUTCHAR. There is only
         one cursor shared among all the pages. If you are going to swap pages,
         you should save the cursor position on the current selected page (using
         READCURSOR), before selecting another page. Then when you returned to
         the original page, you can restore the cursor position using the LOCATE
         procedure.

         SCREENG is a procedure which performs the same fucntion as the SCREEN
         procedure.  You can use either name if you include both SLIB and GLIB
         in compilation and linking.  If you use functions from only GLIB then
         you can use the SCREENG procedure to avoid including SLIB.

See Also:SCREENMODE











Pascal Utilities  Reference Manual                                 Page 4-49










SCREENCHAR
SLIB Function
________________________________________________________________________________
Purpose: Returns the attribute/character at the specified page.

Format:  Function SCREENCHAR(page:integer; VAR attribute :INTEGER):CHAR;

Remarks: SCREENCHAR  returns the ASCII code for the character on the specified
                     page at cursor position.

         page        is a numeric expression in the range 0 to 7 for screen
                     modes 0 and 1, 0 to 3 for modes 2 and 3, and 0 for modes 4
                     to 7.  For a complete list of these screen modes, see the
                     Remarks in the SCREEN procedure.

         attribute   returns the color attribute for the character. The color
                     attribute is a number in the range 0 to 255. This number,
                     a, can be interpreted as follows:

                        ( a MOD 16 ) is the foreground color.

                        (( (a - foreground) DIV 16 ) MOD 128 ) is the background
                        color, where foreground is calculted as above.

                        if ( a > 127 ) then it is blinking, else not.

                    Refer to the PALETTE procedure for a list of colors and
                    their associated numbers.

Example: ch := SCREENCHAR( 0, attribute);

See Also:SCREEN, PALETTE, PUTCHAR























Pascal Utilities  Reference Manual                                 Page 4-50










SCREENMODE
SLIB Function
________________________________________________________________________________
Purpose: Returns the current screen mode, active display page and screen width.

Format:  Function SCREENMODE(VAR page, numcolumn:INTEGER):integer;

Remarks: SCREENMODE  returns the current screen mode in the range 0 to 6
                     for the Color/Graphics Adapter as described in the SCREEN
                     procedure:

                     mode                Text Column   Text Pages
                     0 : 40x25    BW         40        0 .. 7
                     1 : 40x25    Color      40        0 .. 7
                     2 : 80x25    BW         80        0 .. 3
                     3 : 80x25    Color      80        0 .. 3
                     4 : 320x200  Color      40        0 .. 0       Graphics
                     5 : 320x200  BW         40        0 .. 0       Graphics
                     6 : 640x200  BW         80        0 .. 0       Graphics
                     7 : 80x25    BW         80        0 .. 0 Monochrome Adapter

                     It returns 7 for IBM Monochrome Display and Parallel
                     Printer Adapters.

         page        returns the current active page.

         numcolumn   returns the number of character columns on screen.

See Also:SCREEN


























Pascal Utilities  Reference Manual                                 Page 4-51










SCROLL
SLIB Procedure
________________________________________________________________________________
Purpose: Scrolls the selected portion of the display page up or down.

Format:  Procedure SCROLL(direction:CHAR; numline, ulrow, ulcol, lrrow, lrcol,
                attribute : INTEGER);

Remarks: direction  is a character indicating the direction of scrolling. The
                    screen scrolls up if direction is 'U', or 'u', otherwise it
                    scrolls down.
         numline    is a numeric expression indicating the number of lines
                    scrolling.  The entire specified window is blank if numline
                    is 0.

         ulrow      is a numeric expression indicating the row of upper left
                    corner of scroll. It is in the range 0 to 25.

         ulcol      is a numeric expression indicating the column of upper left
                    corner of scroll. It is in the range 0 to 39 (79) depending
                    on the screen mode as described in the SCREEN procedure.

         lrrow      is a numeric expression indicating the row of lower right
                    corner of scroll. It is in the range 0 to 25.

         lrrow      is a numeric expression indicating the column of lower right
                    corner of scroll. It is in the range 0 to 39 (79) depending
                    on the screen mode as described in the SCREEN procedure.

         attribute  is a numeric expression indicating the attribute to be used
                    on blank lines.


         The SCROLL procedure is used to move up/down portion of the screen
         efficiently.  New lines can then be written on the balnk lines.  It can
         also be used to  blank the entire specified window.  For a screen of
         several windows,  independent windows can be scrolled indepently.

Example:        SCROLL('U', 0,  5, 0, 15, 39, 2);

         Scroll up the entire window bounded by row 5, column 39 and row 15,
         column 39 and fill the window by the normal blank.

See Also:SCREEN











Pascal Utilities  Reference Manual                                 Page 4-52










SELECTPAGE
SLIB Procedure
________________________________________________________________________________
Purpose: Selects one screen page for displaying.

Format:  Procedure SELECTPAGE( page : integer);


Remarks: page        is a numeric expression in the range 0 to 7 for screen
                     modes 0 and 1, 0 to 3 for modes 2 and 3, and 0 for modes 4
                     to 7.  For a complete list of these screen modes, see the
                     Remarks in the SCREEN procedure.


Example:   SELECTPAGE( 2 );

         Selects page 2 for displaying.

See Also:SCREEN




































Pascal Utilities  Reference Manual                                 Page 4-53










SOUND
PLIB Procedure
________________________________________________________________________________
Purpose: Generates sound through the speaker.

Format:  Procedure SOUND(freq, duration : INTEGER);

Remarks:  freq      is  the desired frequency in Hertz.  It must be a  numeric 
                    expression  of 0 to 32767.   Frequency 0 selects  silence. 
                    And all the frequences in the range 1 to 20 are treated as 
                    frequency 20.

          duration  is the desired duration in hundredths of a second. It must 
                    be a numerica expression in the range 0 to 65535.

          When  the  SOUND procedure procduces a sound,  the program will  not 
          execute the following statement until the SOUND procedure  finishes. 
          While the MUSICGO procedures play music in the background.


Example:   SOUND(  440,  50);  {generates sound with frequency 440 for 
                                half second} 
           SOUND(  0,   100);  {generates no sound for one second }

See Also:MUSICGO.






























Pascal Utilities  Reference Manual                                 Page 4-54











VIEW
GLIB Procedure
________________________________________________________________________________
Purpose: Specifies a clipping viewport on the screen.

Format:  Procedure VIEW(left, bottom, right, top : INTEGER);

Remarks: left      is a numeric expression which selects the smallest
                   X-coordinate for the clipping viewport. It is in the range 0
                   to 639 for screen mode 6, and in the range 0 to 319 for modes
                   4 and 5 as described in the SCREEN procedure.

         bottom    is a numeric expression which selects the smallest
                   Y-coordinate for the clipping viewport. It is in the range 0
                   to 199 for screen modes 4, 5 and 6 as described in the Screen
                   procedure.

         right     is a numeric expression which selects the largest
                   X-coordinate for the clipping viewport. It is in the range 0
                   to 639 for screen mode 6, and in the range 0 to 319 for modes
                   4 and 5 as described in the SCREEN procedure.

         top       is a numeric expression which selects the largest
                   Y-coordinate for the clipping viewport. It is in the range 0
                   to 199 for screen modes 4, 5 and 6 as described in the Screen
                   procedure.

         The origin (0,0) of the coordinate system is at the lower left corner.
         The upper left corner has the coornidate (0,199).

         VIEW specifies a clipping viewport on the scrren.  All the subsequent
         graphics write routines are clipped by the specified viewport. In other
         word, only the portion within the viewport boundary is visible. The
         graphics routines are WRITEDOT, DRAWLINE, and CIRCLE in the GLIB.

         The default viewport values are set as the maximum viewport for the
         medium resolution screen. In other words, VIEW(0, 0, 319, 199) is the
         default procedure call.

Example: SCREEN(4);
         VIEW(0, 0, 159, 199);

         This procedure selects screen mode 4 (320x199 color graphics) and then
         selects aviewport as the left half screen. All the graphics output
         is on the left side screen only.

See Also:SCREEN, VIEWPORT







Pascal Utilities  Reference Manual                                 Page 4-55










VIEWPORT
GUNIT Procedure
________________________________________________________________________________
Purpose: Specifies a clipping viewport on the screen.

Format:  Procedure VIEWPORT(left, bottom, right, top : INTEGER);

Remarks: left      is a numeric expression which selects the smallest
                   X-coordinate for the clipping viewport. It is in the range 0
                   to 639 for screen mode 6, and in the range 0 to 319 for modes
                   4 and 5 as described in the SCREEN procedure.

         bottom    is a numeric expression which selects the smallest
                   Y-coordinate for the clipping viewport. It is in the range 0
                   to 199 for screen modes 4, 5 and 6 as described in the Screen
                   procedure.

         right     is a numeric expression which selects the largest
                   X-coordinate for the clipping viewport. It is in the range 0
                   to 639 for screen mode 6, and in the range 0 to 319 for modes
                   4 and 5 as described in the SCREEN procedure.

         top       is a numeric expression which selects the largest
                   Y-coordinate for the clipping viewport. It is in the range 0
                   to 199 for screen modes 4, 5 and 6 as described in the Screen
                   procedure.

         The origin (0,0) of the coordinate system is at the lower left corner.
         The upper left corner has the coornidate (0,199).

         VIEWPORT  specifies a viewport on the scrren.  The WINDOW procedure in
         the GUNIT specifies a window on the world (user)  coordinate system.
         The specified window is mapped onto the viewport. All the procedure
         calls are mapped onto the corresponding position on the viewport.

         VIEWPORT also calls the VIEW procedure in the GLIB, using the same
         parameters. Therefore, all the subsequent to the WRITEDOT, DRAWLINE,
         and CIRCLE in the GLIB are also clipped by the same viewport.

         The initialization routine, INITGUNIT(mode) sets the viewport to the
         maximum size for the specified mode. Namely, it calls
         VIEWPORT(0,0,319,199) for modes 4 and 5 and calls VIEWPORT(0,0,639,199)
         for mode 6.

Example: INITGUNIT(4);
         VIEWPORT(0, 0, 159, 199);

         This procedure inititlize the GUNIT by selecting  screen mode 4 and
         selects aviewport as the left half screen. All the graphics output
         is on the left side screen only.

See Also:INITGUNIT, WINDOW, VIEW



Pascal Utilities  Reference Manual                                 Page 4-56











WINDOW
GUNIT Procedure
________________________________________________________________________________
Purpose: Specifies a window in the world cordinate system to be mapped to a
         viewport on the screen.

Format:  PROCEDURE WINDOW(x1, y1, x2, y2 : REAL);

Remarks: x1        is a numeric expression which selects the X-coordinate of the
                   first corner of the window.

         y1        is a numeric expression which selects the Y-coordinate of the
                   first corner of the window.

         x2        is a numeric expression which selects the X-coordinate of the
                   second corner of the window.

         y2        is a numeric expression which selects the Y-coordinate of the
                   second corner of the window.


         VIEWPORT  specifies a viewport on the scrren.  The WINDOW procedure in
         the GUNIT specifies a window on the world (user) coordinate system.
         The specified window is mapped onto the viewport. All the world
         coordinates are transformed onto the corresponding viewport
         coordinates. These tranformation parameters are computed for each
         VIEWPORT or WINDOW call.  The sequence of these two routines are not
         important. You can call VIEWPORT and then WINDOW, or WINDOW then
         VIEWPORT.

         The initialization routine INITGUNIT(mode) sets the window to a unit
         box. Namely, it calls WINDOW(0.0, 0.0, 1.0, 1.0).

Example: INITGUNIT(4);
         WINDOW(0.0, -1.0, 1.0, 1.0);
         VIEWPORT(160, 0, 319, 199);

         This procedure inititlize the GUNIT by selecting  screen mode 4 and
         selects the window bounded by two corners (0.0, -1.0) and (1.0,1.0).
         It selects a viewport as the right half screen. All the graphics
         calls from the GUNIT maps those on the window onto the right half
         screen.


See Also:INITGUNIT, VIEWPORT, VIEW










Pascal Utilities  Reference Manual                                  Page 4-57     










WRITEDOT
GLIB Procedure
________________________________________________________________________________
Purpose: Draws a point at the specified position on the screen.

Format:  Procedure WRITEDOT(x, y, color : INTEGER);

Remarks: x        is a numeric expression which selects the X-coordinate of the
                  point.

         y        is a numeric expression which selects the Y-coordinate of the
                  point.

         Color    is a numeric expression which selects the color from one of
                  the palette as set by the PALETTE procedure.

                    <-medium resolution(mode 4&5) -> <- high resolution-(6)>
                    color  Palette 0    Palette 1     color   display
                      0    background   backgraoud       0      black
                      1    Green        Cyan             1      white
                      2    Red          Magenta
                      3    Brown        White

         For medium resolution graphics, only the last two bits are used to code
         the color. For example, 7 and 11 can also be used to represent color 3.
         Similarly, only the last bit is important in the high resolution
         graphics.

         The most significant bit of the least significant byte represents an
         exclusive or (XOR) action. For example, WRITEDOT(10, 10, 3) writes
         color 3 to (10,10), WRITEDOT(10, 10, 128+3) writes XOR(3, old) to
         (10,10) where old is the original color at the position (10,10). It
         writes 3 if old is 0, and writes 0 if old is 3.

         XOR is a special mode which can be used for animation. XOR causes
         the points on the screen to be complemented. When a dot is written
         twice, the original background is restored unchanged.  This allows
         you to move an object around without destroying the background.

         The dot is set to the specified color only if its position is inside
         the viewport set by the VIEWPORT procedure.

Example: SCREEN(4);               { 320X200 Color graphics mode }
         PALETTE(0, 1);           { palette 0 backgraound color Blue }
         WRITEDOT(5, 25, 1);      { Green(1) dot (5, 25) }
         WRITEDOT(5, 25, 3+128);  { The dot (5, 25) has the color Red because
                                  XOR(3,1) is 2 which is Red in palette 0 }
         WRITEDOT(5, 25, 2+128);  { The dot (5, 25) has the background color}


See Also:SCREEN, PALETTE, READDOT




Pascal Utilities  Reference Manual                                  Page 4-58     








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0074

     Volume in drive A has no label
     Directory of A:\

    ALIB     INC       305   6-13-83   7:56p
    CRC      TXT      1406  11-09-84  11:41a
    CRCK4    COM      1536  10-21-82   7:54p
    DEMO     EXE     68864  12-20-83  12:13a
    DEMO     PAS     37765   8-28-83  11:07p
    DEMOG    INC        73   6-15-83   3:11p
    DEMOG    PAS     16257   7-06-83   5:27p
    DEMOMINI EXE     25600   8-30-83   1:52a
    DEMOMINI OBJ      2330   8-30-83   1:51a
    DEMOMINI PAS      2085   8-30-83   1:50a
    DEMOS    INC       197   6-15-83   3:10p
    DEMOS    PAS      7583   7-06-83   5:26p
    GLIB     INC       919   6-15-83  10:01a
    GUNIT    INC       897   6-15-83   9:19a
    MANUAL   TXT    115251   8-29-83  11:27p
    MINI     INC       758   8-30-83   1:16a
    MINI     OBJ       744   8-29-83   9:48p
    PLIB     INC      2674   8-28-83   7:12p
    README            3289   9-05-83   5:02p
    SLIB     INC      1372   8-30-83   1:17a
           20 file(s)     289905 bytes
                           22528 bytes free
